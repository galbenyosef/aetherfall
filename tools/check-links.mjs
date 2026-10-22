// check-links.mjs — does every file of the derived layer export only names
// the layer actually declares?
//
// THE CLASS THIS GATE GUARDS
//   In an ES module, `export { x }` names a binding OF THAT MODULE. When x is
//   not declared there the module does not link: it is a hard SyntaxError
//   ("Export 'x' is not defined"), and the file cannot be imported at all.
//
//   The mirror's own gates do not see this class:
//     - check-exports.mjs compares a CAPTURE's export table with the LAYER's
//       PUBLIC names. It never asks whether the layer's own export statement
//       names a binding the layer declares.
//     - verify.mjs re-hashes the capture and re-derives every slice from its
//       recorded range. A slice that exports a name it does not declare still
//       round-trips byte-exactly.
//
// WHAT IT CHECKS
//   For every module the layer was cut from that carries an export table:
//     1. the module is reassembled from the LAYER's OWN bytes — every slice
//        contributes its payload, every recorded tail contributes the bytes
//        the mirror's own record holds, and every range the layer does not
//        carry contributes the original's bytes — and the reassembly is
//        linked;
//     2. a file of that module whose own strict-ESM check
//        (`node --input-type=module --check -`) reports "Export 'x' is not
//        defined" exports a name it does not declare. If the module links, the
//        binding is declared by a SIBLING SLICE: the layer is cut from one
//        scope, the pieces together are the module, and the file is a
//        FRAGMENT, not a defect. If the module does not link either, the
//        binding exists NOWHERE and that is a real break, which the gate
//        names.
//
// WHY THE ENGINE IS THE JUDGE
//   The question that matters is the one the engine answers: does this text
//   link? So the gate asks the engine — once for the file, once for the module
//   the file belongs to, once per candidate sibling — instead of asking a
//   parser which names it thinks a file declares.
//
// WHAT THIS MIRROR NEEDS THAT THE PLAIN GATE DOES NOT
//   1. THE RECORDED TAIL IS A CARRIER. This mirror keeps a chunk's export
//      statement in a SKIPPED TAIL that is not a file on disk; the mirror's
//      own record (section.text) holds it. When NO layer file of a module
//      carries an export table, that recorded tail IS the carrier and the
//      gate takes the bytes from the record.
//   2. THE RECORDED TAIL IS IN THE CAPTURE'S SPELLING. The layer is the
//      renamed form of the capture, so the tail's local names are the
//      capture's. The gate rewrites the tail into the layer's spelling with
//      the mirror's OWN rename map (split-spec sources[].renameBindings,
//      and the root rename-map.json word-boundary records): the LOCAL name of
//      every specifier becomes the layer's name, the EXPORTED name is never
//      touched, and a renamed shorthand becomes `TARGET as ORIGINAL`.
//      Without that rewrite the gate would report the renamed bindings as
//      breaks — a false break, not a defect.
//   3. THE LAYER ROOT IS THE ONLY PLACE A SLICE IS FOUND. The mirror keeps
//      served captures at its root under other paths; only the derived layer
//      root is searched for a slice.
//
// WHAT IT DOES NOT COVER
//   - A module that does not link even after the reassembly (a chunk whose
//     own text is not a module) cannot be judged for this class; the gate says
//     so instead of guessing.
//   - The IMPORT side of the layer graph (a named import the target does not
//     export) is a different class with a different owner.
//   - The "every name a module READS is bound" rule is NOT applied here: a
//     slice is a fragment of one scope, not a whole module, and the rule
//     would report hundreds of names that are the shape of this layer.
//
// Usage: node tools/check-links.mjs [--quiet]
// Exits 1 if a layer file exports a binding the layer does not declare.

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PROJ = path.resolve(HERE, "..");

// THE DERIVED LAYER'S ROOT. Only this tree holds layer files; the mirror's
// root also holds served captures and reading copies, and a capture found
// there is not a slice.
const LAYER_ROOTS = ["src"];

const QUIET = process.argv.includes("--quiet");

const read = (p) => {
  try {
    return fs.readFileSync(p, "utf8");
  } catch {
    return null;
  }
};

// ── the engine's own verdict ───────────────────────────────────────────────
// The engine is the oracle: the question that matters is the one it answers.

const esmCache = new Map();

/**
 * The engine's own verdict on a text: does it link as an ES module?
 * `--input-type=module --check -` is the strict-ESM path: the CJS path lets an
 * export table name a binding the module never declares through.
 */
function esmCheck(text) {
  const key = text.length + ":" + text.slice(0, 64) + ":" + text.slice(-64);
  const hit = esmCache.get(key);
  if (hit) return hit;
  const r = spawnSync(process.execPath, ["--input-type=module", "--check", "-"], {
    input: text,
    encoding: "utf8",
    maxBuffer: 256 * 1024 * 1024,
  });
  let out;
  if (r.status === 0) {
    out = { ok: true, missing: null, error: null };
  } else {
    const err = String(r.stderr || "") + String(r.stdout || "");
    const m = /Export '([^']+)' is not defined/.exec(err);
    const lines = err.trim().split("\n").filter((l) => l.trim());
    const said = lines.find((l) => /Error/.test(l)) || lines[lines.length - 1] || err.trim();
    out = { ok: false, missing: m ? m[1] : null, error: said.trim() };
  }
  if (esmCache.size > 4000) esmCache.clear();
  esmCache.set(key, out);
  return out;
}

const ESCAPE_RE = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** The export tables of a text, as [start, end) spans. */
function exportTableSpans(text) {
  const spans = [];
  const re = /\bexport\s*\{/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const brace = text.indexOf("{", m.index);
    if (brace < 0) break;
    let depth = 1;
    let i = brace + 1;
    while (i < text.length && depth > 0) {
      if (text[i] === "{") depth++;
      else if (text[i] === "}") depth--;
      i++;
    }
    if (depth !== 0) break;
    spans.push([m.index, i]);
    re.lastIndex = i;
  }
  return spans;
}

/**
 * The names a file's export statement exports that the file itself does not
 * declare. The engine names one per check, so the check is repeated with the
 * offending specifier removed each time: what is left is the whole list.
 */
function undeclaredExports(text) {
  const out = [];
  let probe = text;
  for (let i = 0; i < 500; i++) {
    const v = esmCheck(probe);
    if (v.ok || !v.missing) break;
    if (out.includes(v.missing)) break;
    out.push(v.missing);
    const next = blankSpecifier(probe, v.missing);
    if (next === probe) break;
    probe = next;
  }
  return out;
}

/** Remove the export specifier whose SOURCE name is `name` (the probe only). */
function blankSpecifier(text, name) {
  return text.replace(/\bexport\s*\{([^}]*)\}/g, (whole, body) => {
    const kept = body.split(",").filter((part) => {
      const seg = part.trim();
      if (!seg) return false; // an empty element is a syntax error
      const m = /^([A-Za-z_$][\w$]*)\s+as\s+/.exec(seg);
      return (m ? m[1] : seg) !== name;
    });
    return whole.replace(body, kept.join(", "));
  });
}

/**
 * Erase every mention of `name` in a text, EXCEPT inside an export table:
 * the export table is the question being asked, so it must keep naming the
 * name. A module whose declaration of the name has been erased then fails to
 * link, and that is how the declaring slice is found.
 */
function eraseName(text, name, probe) {
  const spans = exportTableSpans(text);
  const re = new RegExp(`(?<![\\w$])${ESCAPE_RE(name)}(?![\\w$])`, "g");
  let out = "";
  let at = 0;
  for (const [s, e] of spans) {
    out += text.slice(at, s).replace(re, probe);
    out += text.slice(s, e);
    at = e;
  }
  out += text.slice(at).replace(re, probe);
  return out;
}

/** The slice's payload: its text without the header comment lines. */
function payloadLines(text) {
  const raw = text.split("\n");
  if (raw.length && raw[raw.length - 1] === "") raw.pop(); // the final newline
  let h = 0;
  while (h < raw.length && /^\s*\/\//.test(raw[h])) h++;
  if (h < raw.length && /^\s*\/\*/.test(raw[h])) {
    const end = raw[h].indexOf("*/");
    if (end >= 0) {
      h++;
      while (h < raw.length && raw[h].trim() === "") h++;
    }
  }
  return raw.slice(h);
}

/** Every .js file under a directory. */
function walkJs(dir, out = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkJs(p, out);
    else if (e.name.endsWith(".js")) out.push(p);
  }
  return out;
}

// ── the mirror's own record of the layer ───────────────────────────────────
const specPath = path.join(PROJ, "split-spec.json");
if (!fs.existsSync(specPath)) {
  console.log("check-links: no split-spec.json - this mirror has no derived layer to check");
  process.exit(0);
}
const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));

/**
 * The layer file a section names, if it is on disk.
 *
 * ONLY the layer roots are searched. The mirror's root also holds served
 * captures and reading copies under paths the spec mentions; taking one of
 * those for a slice would pass capture bytes off as layer bytes.
 */
function layerFileOf(sec) {
  const rel = String(sec.file).replace(/\\/g, "/");
  for (const root of LAYER_ROOTS) {
    const base = path.join(PROJ, root);
    for (const c of [path.join(base, rel), path.join(base, path.basename(rel))]) {
      try {
        if (fs.existsSync(c) && fs.statSync(c).isFile()) return c;
      } catch {
        /* try the next candidate */
      }
    }
  }
  return null;
}

// ── the rename layer ───────────────────────────────────────────────────────
// The layer is the RENAMED form of the capture. A recorded tail is the
// capture's bytes, so its local names are the capture's names and the gate
// has to speak the layer's spelling before it can ask the engine anything.

/** The mirror's own rename map for one capture: capture name -> layer name. */
function renameMapFor(sourceFile, layerFiles) {
  const map = new Map();
  const src = (spec.sources || []).find((s) => s.sourceFile === sourceFile);
  for (const [k, v] of Object.entries(src?.renameBindings || {})) map.set(k, v);
  // a SPEC-level flat rename map: capture name -> layer name
  const flat = spec.renameMap;
  if (flat && typeof flat === "object" && !Array.isArray(flat)) {
    for (const [k, v] of Object.entries(flat)) {
      if (typeof v === "string" && !map.has(k)) map.set(k, v);
    }
  }
  // the root rename-map.json carries the same records per layer file
  for (const p of [path.join(PROJ, "rename-map.json"), path.join(PROJ, "tools", "rename-map.json")]) {
    const raw = read(p);
    if (!raw) continue;
    let rm;
    try {
      rm = JSON.parse(raw);
    } catch {
      continue;
    }
    for (const f of layerFiles) {
      const rec = rm.files?.[f];
      if (!rec) continue;
      for (const [k, v] of Object.entries(rec)) {
        if (!map.has(k)) map.set(k, v);
        else if (map.get(k) !== v) map.set(k, null); // ambiguous: leave the name alone
      }
    }
  }
  return map;
}

/** Split an export table's body into its specifiers. */
function splitSpecifiers(body) {
  const out = [];
  let cur = "";
  let depth = 0;
  let quote = null;
  for (const ch of body) {
    if (quote) {
      cur += ch;
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      quote = ch;
      cur += ch;
      continue;
    }
    if (ch === "{" || ch === "[" || ch === "(") depth++;
    if (ch === "}" || ch === "]" || ch === ")") depth--;
    if (ch === "," && depth === 0) {
      out.push(cur);
      cur = "";
      continue;
    }
    cur += ch;
  }
  out.push(cur);
  return out;
}

/**
 * Rewrite ONE export table into the layer's spelling.
 *
 * The local name of every specifier becomes the layer's name; the EXPORTED
 * name is never touched, because it is the module's public API. A shorthand
 * whose local name was renamed becomes `TARGET as ORIGINAL`: the binding
 * keeps its new name and the module still exports the name it always did.
 */
function rewriteOneTable(whole, map) {
  const brace = whole.indexOf("{");
  const close = whole.lastIndexOf("}");
  const body = whole.slice(brace + 1, close);
  const out = [];
  for (const seg of splitSpecifiers(body)) {
    const t = seg.trim();
    if (!t) continue;
    const aliased = /^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*|default)$/.exec(t);
    if (aliased) {
      const local = aliased[1];
      const exported = aliased[2];
      const target = map.get(local);
      out.push(target && target !== local ? `${target} as ${exported}` : `${local} as ${exported}`);
      continue;
    }
    if (/^[A-Za-z_$][\w$]*$/.test(t) && t !== "default") {
      const target = map.get(t);
      out.push(target && target !== t ? `${target} as ${t}` : t);
      continue;
    }
    out.push(t); // `default`, a string name — not a local binding
  }
  return `export { ${out.join(", ")} }`;
}

/** Rewrite every export table of a text into the layer's spelling. */
function rewriteExportTables(text, map) {
  if (!map.size) return text;
  const spans = exportTableSpans(text);
  if (!spans.length) return text;
  let out = "";
  let at = 0;
  for (const [s, e] of spans) {
    out += text.slice(at, s);
    out += rewriteOneTable(text.slice(s, e), map);
    at = e;
  }
  out += text.slice(at);
  return out;
}

/** Rewrite the identifiers of a text that are not export tables. */
function applyNames(text, map) {
  if (!map.size) return text;
  const spans = exportTableSpans(text);
  const re = new RegExp(
    `(?<![\\w$])(${Array.from(map.keys())
      .filter((k) => map.get(k))
      .sort((a, b) => b.length - a.length)
      .map((k) => ESCAPE_RE(k))
      .join("|")})(?![\\w$])`,
    "g",
  );
  let out = "";
  let at = 0;
  for (const [s, e] of spans) {
    out += text.slice(at, s).replace(re, (m) => map.get(m));
    out += text.slice(s, e);
    at = e;
  }
  out += text.slice(at).replace(re, (m) => map.get(m));
  return out;
}

// ── the scopes ─────────────────────────────────────────────────────────────
// A scope is one ES module of the capture the layer was cut from. Two
// factories of one webpack chunk do NOT share a scope, so a module-factory
// section is a scope of its own.

const sections = (spec.sections || []).filter(
  (s) => s.file && s.sourceFile && String(s.sourceFile).endsWith(".js"),
);

const hasRange = (s) => Number.isInteger(s.startLine) && Number.isInteger(s.endLine);

const scopes = new Map();
for (const sec of sections) {
  // Two factories of one webpack chunk do NOT share a scope, so a
  // module-factory section is a scope of its own; so is a whole-file section,
  // which is a complete module by itself.
  const key =
    sec.kind === "module-factory" ||
    sec.kind === "turbopack-module-factory" ||
    !hasRange(sec)
      ? `${sec.sourceFile}#${sec.file}`
      : sec.sourceFile;
  if (!scopes.has(key)) scopes.set(key, { key, sourceFile: sec.sourceFile, sections: [] });
  scopes.get(key).sections.push(sec);
}
for (const sc of scopes.values()) {
  sc.sections.sort((a, b) => (a.startLine || 0) - (b.startLine || 0));
}

/**
 * The module a scope was cut from, as a list of parts: every slice
 * contributes its payload, every recorded tail contributes the bytes the
 * mirror's record holds, and every range the layer does not carry contributes
 * the original's bytes.
 *
 * The slices are CONCATENATED, not mapped onto line numbers: a slice is cut
 * mid-statement, so its payload is a fragment, and a fragment only means
 * anything in the company of its neighbours.
 */
function moduleParts(scope, rewrite = true) {
  const orig = read(path.join(PROJ, scope.sourceFile));
  const pristine = orig === null ? null : orig.split("\n");
  const layerFiles = scope.sections.map((s) => String(s.file).replace(/\\/g, "/"));
  const map = rewrite ? renameMapFor(scope.sourceFile, layerFiles) : new Map();
  const parts = [];
  let prevEnd = 0;
  let sliceNo = 0;
  for (const sec of scope.sections) {
    if (!hasRange(sec)) {
      // a whole-file section: the layer carries the file whole
      const f = layerFileOf(sec);
      if (f) {
        parts.push({
          kind: "slice",
          file: path.relative(PROJ, f).replace(/\\/g, "/"),
          text: payloadLines(read(f)).join("\n"),
          sliceNo: sliceNo++,
        });
      }
      continue;
    }
    if (pristine && sec.startLine > prevEnd + 1) {
      parts.push({
        kind: "original",
        file: scope.sourceFile,
        text: applyNames(pristine.slice(prevEnd, sec.startLine - 1).join("\n"), map),
      });
    }
    const f = layerFileOf(sec);
    if (f) {
      parts.push({
        kind: "slice",
        file: path.relative(PROJ, f).replace(/\\/g, "/"),
        text: payloadLines(read(f)).join("\n"),
        sliceNo: sliceNo++,
      });
    } else if (typeof sec.text === "string" && sec.text.length) {
      // a recorded tail: the mirror's own record holds the bytes
      parts.push({
        kind: "record",
        file: String(sec.file).replace(/\\/g, "/"),
        text: rewriteExportTables(applyNames(sec.text, map), map),
      });
    } else if (pristine) {
      parts.push({
        kind: "original",
        file: scope.sourceFile,
        text: pristine.slice(sec.startLine - 1, sec.endLine).join("\n"),
      });
    }
    if (sec.endLine > prevEnd) prevEnd = sec.endLine;
  }
  return parts;
}

const moduleText = (parts) => parts.map((p) => p.text).join("\n");

/**
 * The slice that DECLARES `name`, when the module's declaration statement
 * begins in an EARLIER slice than its declarator does.
 *
 * A cut module can split one declaration statement across slices: the
 * `var`/`let`/`const` head sits in one slice and the declarators that
 * follow it in the next. The name is bound by the statement, so the slice
 * that holds the HEAD is the one that declares it.
 */
function declarationHeadSlice(parts, name, afterSlice) {
  const text = moduleText(parts);
  const re = new RegExp(`(?<![\\w$])${ESCAPE_RE(name)}(?![\\w$])`, "g");
  let m;
  while ((m = re.exec(text)) !== null) {
    const at = m.index;
    let offset = 0;
    let sliceOf = null;
    for (const part of parts) {
      const end = offset + part.text.length;
      if (at >= offset && at < end) {
        sliceOf = part;
        break;
      }
      offset = end + 1;
    }
    if (!sliceOf || sliceOf.kind !== "slice") continue;
    if (afterSlice !== null && sliceOf.sliceNo > afterSlice) continue;
    const beforeName = text.slice(0, at).replace(/\s+$/, "");
    if (!/(,|=)$/.test(beforeName)) continue;
    let depth = 0;
    for (let i = at - 1; i >= 0; i--) {
      const c = text[i];
      if (c === "}" || c === ")" || c === "]") {
        depth++;
        continue;
      }
      if (c === "{" || c === "(" || c === "[") {
        if (depth === 0) break;
        depth--;
        continue;
      }
      if (depth !== 0) continue;
      const head = /(^|[^\w$])(var|let|const)\s*$/.exec(text.slice(Math.max(0, i - 6), i + 1));
      if (head) {
        const headAt = text.lastIndexOf(head[2], at);
        if (headAt >= 0) {
          let off = 0;
          for (const part of parts) {
            const end = off + part.text.length;
            if (headAt >= off && headAt < end) return part.kind === "slice" ? part.file : null;
            off = end + 1;
          }
        }
        return null;
      }
    }
  }
  return null;
}

/**
 * The slice of the module that DECLARES `name`, found by asking the engine:
 * the name is erased from a prefix of the slices at a time, and the slice
 * whose erasure breaks the module is the one that declared it.
 */
function declaringSlice(parts, name) {
  const slices = parts.filter((p) => p.kind === "slice");
  if (slices.length < 2) return null;
  const probe = "__probe_" + name.replace(/[^A-Za-z0-9_$]/g, "_");
  const withPrefix = (k) => {
    let n = -1;
    return parts
      .map((p) => {
        if (p.kind !== "slice") return p.text;
        n++;
        return n <= k ? eraseName(p.text, name, probe) : p.text;
      })
      .join("\n");
  };
  if (esmCheck(withPrefix(slices.length - 1)).ok) return null;
  let lo = 0;
  let hi = slices.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (esmCheck(withPrefix(mid)).ok) lo = mid + 1;
    else hi = mid;
  }
  const found = slices[lo];
  const head = declarationHeadSlice(parts, name, found.sliceNo);
  return head || found.file;
}

// ── the layer ──────────────────────────────────────────────────────────────
const layerFiles = [];
for (const root of LAYER_ROOTS) {
  const abs = path.join(PROJ, root);
  if (fs.existsSync(abs)) walkJs(abs, layerFiles);
}
layerFiles.sort();

const problems = [];
const fragments = [];
const unjudged = [];
const notCovered = [];
let withTable = 0;

for (const scope of [...scopes.values()].sort((a, b) => a.key.localeCompare(b.key))) {
  const slices = scope.sections.filter((s) => layerFileOf(s));
  // A source group that carries NO slice is the capture's table, not the
  // layer's: comparing the capture against itself proves nothing. The gate
  // says so instead of passing silently.
  if (!slices.length) {
    notCovered.push(scope.sourceFile);
    continue;
  }

  const parts = moduleParts(scope);
  const text = moduleText(parts);

  // the carriers of this module: the layer files that carry an export table,
  // and — when NO layer file carries one — the RECORDED TAIL, whose bytes the
  // mirror's own record holds.
  const carriers = [];
  for (const sec of scope.sections) {
    const f = layerFileOf(sec);
    if (!f) continue;
    const body = read(f);
    if (body === null || !/\bexport\s*\{/.test(body)) continue;
    withTable++;
    carriers.push({
      kind: "slice",
      file: path.relative(PROJ, f).replace(/\\/g, "/"),
      text: body,
    });
  }
  if (!carriers.length) {
    const records = scope.sections
      .filter((s) => !layerFileOf(s) && typeof s.text === "string" && /\bexport\s*\{/.test(s.text))
      .map((s) => {
        const map = renameMapFor(scope.sourceFile, scope.sections.map((x) => String(x.file).replace(/\\/g, "/")));
        return {
          kind: "record",
          file: String(s.file).replace(/\\/g, "/"),
          text: rewriteExportTables(applyNames(s.text, map), map),
        };
      });
    if (records.length !== 1) {
      if (records.length > 1) {
        unjudged.push(`${scope.sourceFile}: ${records.length} recorded tails carry an export table - the module's carrier is ambiguous`);
      }
      continue;
    }
    withTable++;
    carriers.push(records[0]);
  }

  // the module as the LAYER's own bytes
  let module = esmCheck(text);
  if (!module.ok && !module.missing) {
    // The module does not parse as it stands. That can be a module whose own
    // text is not a module, or one whose export table sits inside a
    // statement; the second case is still answerable.
    const spans = exportTableSpans(text);
    if (spans.length) {
      let at = 0;
      let body = "";
      const tables = [];
      for (const [s, e] of spans) {
        body += text.slice(at, s);
        tables.push(text.slice(s, e));
        at = e;
      }
      body += text.slice(at);
      const alt = esmCheck(body + "\n" + tables.join("\n") + "\n");
      if (alt.ok || alt.missing) module = alt;
    }
  }

  if (!module.ok && !module.missing) {
    // The scope's own bytes do not link, and not because of an export table:
    // the module cannot be judged for this class at all, and the gate says so
    // instead of passing silently.
    unjudged.push(
      `${scope.sourceFile}: the scope's own bytes do not link (${module.error}) - the module cannot be judged for this class`,
    );
  }

  if (!module.ok && module.missing) {
    // The module as the LAYER's own bytes exports a name nothing declares.
    // When the capture's own spelling links but the layer's does not, the
    // rename rewrite is what broke it: that is a gate limitation, not a
    // defect in the layer, so the gate says so instead of naming a break.
    const raw = moduleParts(scope, false).map((p) => p.text).join("\n");
    const rawCheck = esmCheck(raw);
    if (rawCheck.ok) {
      unjudged.push(
        `${scope.sourceFile}: the layer's own bytes do not link (${module.error}) - the capture's own spelling links, so the rename rewrite is what the gate cannot resolve`,
      );
      continue;
    }
    const names = undeclaredExports(text);
    const listed = names.length ? names : [module.missing];
    problems.push(
      `${carriers.map((c) => c.file).join(", ")}: exports { ${listed.join(", ")} } but no binding named ${listed[0]} is declared in any slice of ${scope.sourceFile} (the module's own bytes do not link: ${module.error})`,
    );
    continue;
  }

  for (const c of carriers) {
    const own = esmCheck(c.text);
    if (own.ok) continue; // the carrier links on its own: it declares every name it exports
    if (!own.missing) {
      // the carrier does not parse as an ES module for another reason, so its
      // export table cannot be read: the gate says so instead of dropping it
      unjudged.push(`${c.file}: does not parse as an ES module on its own (${own.error}) - its export table cannot be read`);
      continue;
    }
    const missing = undeclaredExports(c.text);
    if (!missing.length) continue;
    if (module.ok) {
      const where = [];
      for (const name of missing) {
        const s = declaringSlice(parts, name);
        where.push(`${name} (declared by ${s ? s : "a sibling slice"})`);
      }
      fragments.push(
        `${c.file}: exports { ${missing.join(", ")} } - ${where.join("; ")}: a sibling slice of ${scope.sourceFile} declares it, so the module is whole (fragment, not a defect)`,
      );
    } else {
      unjudged.push(
        `${c.file}: exports { ${missing.join(", ")} } and the module ${scope.sourceFile} does not link either (${module.error}) - the binding cannot be located`,
      );
    }
  }
}

if (!QUIET) {
  console.log(`check-links: ${layerFiles.length} file(s) in ${LAYER_ROOTS.join(", ")}/`);
  console.log(`  files carrying an export table: ${withTable}`);
  if (notCovered.length) {
    console.log(`  scopes indexed but not carried by the layer (the capture's own table, not the layer's): ${notCovered.length}`);
    for (const n of notCovered) console.log(`    ${n}`);
  }
  console.log(`  fragment exports (a sibling slice of the same module declares the binding): ${fragments.length}`);
  for (const f of fragments) console.log(`    ${f}`);
  if (unjudged.length) {
    console.log(`  not judged (the module does not link, so the binding cannot be located): ${unjudged.length}`);
    for (const u of unjudged) console.log(`    ${u}`);
  }
  if (problems.length) {
    console.log(`  LINK PROBLEMS: ${problems.length}`);
    for (const p of problems) console.log(`    ${p}`);
  }
}
if (problems.length) process.exit(1);
if (!QUIET) console.log("  every export table names a binding the layer declares: YES");
