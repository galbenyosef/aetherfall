// audit.js — derived-layer integrity gate (PLAN §5), tailored to aetherfall.
//
// AETHERFALL (https://aetherfall.dev/) is capture-class: a Vite production
// build of an epic pixel-art fantasy MMO RPG served at the origin root behind
// Cloudflare. There is no authored source in the mirror, so the derived
// pipeline is:
//
//   capture assets/<name>.js|css  -> readable/assets/<name>.pretty.js|css
//                                    (pinned prettier 3.9.6, module API,
//                                    iterated to a FIXED POINT — the index
//                                    chunk needs a second pass on one
//                                    member-chain region; the served path is
//                                    mirrored, PLAN §5 served-path rule)
//   readable app regions          -> src/assets/<name>-NN.js statement-aligned
//                                    slices (re-cut through rename-map.json
//                                    where renamed)
//   readable vendor regions       -> split-spec wholeFile sections (vendor/
//                                    machinery rule: entry chunk-machinery head
//                                    + bundled React 19.3.0 region, bundled
//                                    three.js r186 engine inside fx3d, hd2d
//                                    mapDeps head, whole GLTFLoader addon
//                                    chunk, stylesheet)
//   readable export tables        -> split-spec skipped sections (final
//                                    export {…} tables — indexed only)
//   capture index.html            -> inline <script>/<style> scan (zero
//                                    content blocks — external chunk
//                                    references only)
//
// split-spec.json records that pipeline and this gate keeps it honest:
//
//   1. split-spec.json parses, carries a note + renderOptions + a rename
//      section + a notRendered array, and a defaultFile exists on disk.
//   2. spec.sources map every readable pretty to its capture provenance;
//      file captures follow the served-path naming rule
//      (readable/<served path>.pretty.{js,css}) and re-hash against
//      .upstream/manifest.json.
//   3. Every section resolves: ranged slices have a src/*.js file on disk
//      (walked recursively — slices live under src/assets/), a readable
//      *.pretty.js|css sourceFile and in-bounds startLine/endLine; wholeFile
//      sections (vendor bundles/regions, machinery heads, stylesheet) must
//      NOT have a src file; `skipped` sections must NOT have a src file and
//      are re-verified textually against firstLine/lastLine.
//   4. The ranges of each sourceFile tile it exactly: first starts at line 1,
//      each next starts at previous end + 1, last ends at EOF — no gaps, no
//      overlaps.
//   5. Byte-exact round-trip: every src slice minus its exact 2-line header
//      (`// <tag> NN — <marker>` + `// Lines A-B of <pretty> (statement-aligned).`)
//      equals its recorded sourceFile range byte for byte — THROUGH the
//      recorded rename map where the slice is renamed (the same engine
//      application tools/derive.mjs re-cuts with).
//   6. Every slice parses standalone with the exact gate command
//      `node --input-type=module --check -` (stdin), as does every readable
//      *.pretty.js.
//   7. Every readable pretty is referenced by the spec, its capture source
//      exists, is recorded in .upstream/manifest.json, and is NOT byte-identical
//      to the pretty (prettier did run). Every captured .js/.css file has a
//      readable twin (layer completeness).
//   8. Vendor/machinery guards: every wholeFile JS section that carries a
//      recorded anchor pair (GLTFLoader/DRACOLoader, WebGLRenderer/__THREE__
//      = 186, __vite__mapDeps/modulepreload, react.dev/errors/createRoot,
//      mapDeps/i.map) must still hold it — a section whose band lost its
//      anchors means the readable changed shape.
//   9. The hard rule — src/ import resolution. Specifiers are extracted
//      TOKEN-BASED (tools/engine rename-layer extractImportSpecifiers — a text
//      regex false-reads UI/string copy as imports, the embervale (ab) fix);
//      relative specifiers (static from-imports, side-effect imports,
//      dynamic import() incl. non-interpolated template literals) resolve to
//      files the CAPTURE carries, since src/ keeps the served chunk names
//      verbatim (statement-aligned slices are not specifier-rewritten). Every
//      named import must be exported by its target capture chunk (a default
//      import is checked as `default`, the takemebacktojapan (q) fix).
//      `node:` and `vite/*` bare specifiers and root-served `/…` paths are
//      whitelisted machinery; other bare/URL specifiers are flagged. Every
//      __vite__mapDeps table's entries must each exist in the capture
//      (served-root-relative, the chunk dir as fallback) — the cross-check
//      that proves every lazy chunk exists in the capture.
//  10. Inline-block scan: every inline <script>/<style> content block in a
//      captured HTML document must have its readable twin and a
//      readable/index-inline-map.json entry whose byte range + sha256 match
//      the capture bytes (aetherfall has zero blocks; a map without blocks
//      is itself a problem).
//  11. Derived layers never enter the capture sums: no readable/, src/,
//      legacy/, split-spec.json, rename-map.json, index-inline-map.json or
//      _mirror-report.json path may appear in .upstream/manifest.json.
//  12. Rename layer (PLAN §5 campaign, closed 2026-10-14): every
//      rename-map.json record applies to its slice's readable range and
//      reproduces the committed body (count reported as mapOK); the spec's
//      rename stats match the map; every sources[].renameBindings name is
//      re-found in its chunk's index-only skipped sections and the binding-map
//      application runs cleanly on them (the (t)(1) reconstruction reach —
//      this audit's cheap re-find check).
//  13. Re-render under the pinned prettier iterates to the multi-pass FIXED
//      POINT (proposal (t)(3) — a single-pass check false-fails on a pass-2
//      fixed point).
//
// usage: node tools/audit.js
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { applyRecordedMap, applyBindingMap, extractImportSpecifiers, tokens } from "./engine/rename-layer.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
const srcDir = path.join(proj, "src");
const readableDir = path.join(proj, "readable");
const PINNED = "3.9.6";
const MAX_PASSES = 3;

const problems = [];
const problem = (msg) => problems.push(msg);

// ── helpers ─────────────────────────────────────────────────────────────
const readLines = (abs) => {
  const t = fs.readFileSync(abs, "utf8");
  const l = t.split("\n");
  if (l.length && l[l.length - 1] === "") l.pop();
  return l;
};
const linesCache = new Map();
const getLines = (abs) => {
  if (!linesCache.has(abs)) linesCache.set(abs, readLines(abs));
  return linesCache.get(abs);
};
const sha256 = (buf) => crypto.createHash("sha256").update(buf).digest("hex");
const isInlineTwin = (rel) => /-inline-\d+\.pretty\.(js|css|json)$/i.test(rel);

// capture rel -> expected readable twin (served path mirrored, PLAN §5)
const prettyForCapture = (rel) => {
  const stem = rel.replace(/\.(js|css)$/i, "");
  return "readable/" + stem + (/\.css$/i.test(rel) ? ".pretty.css" : ".pretty.js");
};

// parse check — the exact standalone gate: node --input-type=module --check - < file
function parseCheck(abs, rel) {
  const r = spawnSync(process.execPath, ["--input-type=module", "--check", "-"], {
    input: fs.readFileSync(abs),
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (r.status !== 0)
    problem(`standalone ESM parse failed: ${rel} — ${(r.stderr || "").trim().split("\n").slice(-2).join(" | ")}`);
  return r.status === 0;
}

// inline <script>/<style> scan (byte-exact, same shape as tools/derive.mjs)
function scanBlocks(buf) {
  const blocks = [];
  for (const [open, close, kind] of [
    ["<script", "</script", "script"],
    ["<style", "</style", "style"],
  ]) {
    let p = 0;
    let n = 0;
    while (true) {
      const i = buf.indexOf(open, p);
      if (i < 0) break;
      const after = buf[i + open.length];
      const boundary =
        after === 0x3e || after === 0x2f || after === 0x20 || after === 0x09 || after === 0x0a || after === 0x0d;
      if (!boundary) {
        p = i + open.length;
        continue;
      }
      const tagEnd = buf.indexOf(">", i);
      if (tagEnd < 0) break;
      const j = buf.indexOf(close, tagEnd + 1);
      if (j < 0) {
        problem(`unterminated <${kind}> opened at byte ${i}`);
        break;
      }
      const tag = buf.subarray(i, tagEnd + 1).toString("utf8");
      const external = /\bsrc\s*=\s*["']/i.test(tag);
      if (!external) {
        n++;
        const content = buf.subarray(tagEnd + 1, j);
        blocks.push({
          kind: /\btype\s*=\s*["']importmap["']/i.test(tag) ? "importmap" : kind,
          block: n,
          contentStart: tagEnd + 1,
          contentEnd: j,
          bytes: content.length,
          sha256: sha256(content),
          text: content.toString("utf8"),
        });
      }
      p = j + close.length;
    }
  }
  return blocks.sort((a, b) => a.contentStart - b.contentStart);
}

// ── export tables (for the named-import check) ──────────────────────────
function exportsOf(code) {
  const names = new Set();
  for (const m of code.matchAll(/\bexport\s*\{([^}]*)\}/g)) {
    for (let part of m[1].split(",")) {
      part = part.trim();
      if (!part) continue;
      const as = /\s+as\s+([\w$]+)\s*$/.exec(part);
      names.add(as ? as[1] : part); // in an EXPORT clause the public name follows `as`
    }
  }
  for (const m of code.matchAll(/\bexport\s+(?:async\s+)?(?:function|class)\s+([\w$]+)/g)) names.add(m[1]);
  for (const m of code.matchAll(/\bexport\s+(?:const|let|var)\s+([\w$]+)/g)) names.add(m[1]);
  if (/\bexport\s+default\b/.test(code)) names.add("default");
  if (/\bexport\s+\*\s+from\b/.test(code)) names.add("*");
  return names;
}

// ── token-based import clauses (proposal (ab), takemebacktojapan (q)) ───
// extracts { spec, kind, named: [[local, foreign], …] } — `named` pairs what
// the TARGET must export (foreign) with the local alias the slice declares.
function tokenImports(code) {
  const ts = tokens(code);
  const out = [];
  const lit = (t) => (t && t.t === "lit" && /^["'`]/.test(t.v) ? t.v.slice(1, -1) : null);
  for (let i = 0; i < ts.length; i++) {
    const t = ts[i];
    if (t.t !== "id" || t.v !== "import") continue;
    const next = ts[i + 1];
    const side = lit(next);
    if (side !== null) {
      out.push({ spec: side, kind: "side-effect", named: [] });
      continue;
    }
    if (next && next.t === "pun" && next.v === "(") {
      const a = ts[i + 2];
      const dyn = lit(a);
      if (dyn !== null) out.push({ spec: dyn, kind: "dynamic", named: [] });
      continue;
    }
    // clause form: [default] [,] [{ a, b as c }] [* as ns] from "…"
    let j = i + 1;
    const named = [];
    if (ts[j] && ts[j].t === "id") {
      named.push([ts[j].v, "default"]);
      j++;
      if (ts[j] && ts[j].t === "pun" && ts[j].v === ",") j++;
    }
    if (ts[j] && ts[j].t === "pun" && ts[j].v === "*") {
      j++;
      if (ts[j] && ts[j].t === "id" && ts[j].v === "as") j += 2;
      else j++;
    } else if (ts[j] && ts[j].t === "pun" && ts[j].v === "{") {
      let k = j + 1;
      while (k < ts.length && !(ts[k].t === "pun" && ts[k].v === "}")) {
        if (ts[k].t === "id") {
          if (ts[k + 1] && ts[k + 1].t === "id" && ts[k + 1].v === "as") {
            named.push([ts[k + 2] ? ts[k + 2].v : ts[k].v, ts[k].v]); // local `as` foreign
            k += 3;
            continue;
          }
          named.push([ts[k].v, ts[k].v]);
        }
        k++;
      }
      j = k + 1;
    }
    if (ts[j] && ts[j].t === "id" && ts[j].v === "from") {
      const spec = lit(ts[j + 1]);
      if (spec !== null) out.push({ spec, kind: "from", named });
    }
  }
  return out;
}

// ── capture manifest ────────────────────────────────────────────────────
let manifest = null;
try {
  manifest = JSON.parse(fs.readFileSync(path.join(proj, ".upstream", "manifest.json"), "utf8"));
} catch (e) {
  problem(`.upstream/manifest.json does not parse: ${e.message}`);
}
const captured = manifest?.files ? Object.keys(manifest.files).sort() : [];

// ── split-spec.json ─────────────────────────────────────────────────────
const specPath = path.join(proj, "split-spec.json");
if (!fs.existsSync(specPath)) problem("split-spec.json missing at repo root");
let spec = null;
try {
  spec = specPath && JSON.parse(fs.readFileSync(specPath, "utf8"));
} catch (e) {
  problem(`split-spec.json does not parse: ${e.message}`);
}
const sections = Array.isArray(spec?.sections) ? spec.sections : [];
if (spec && !Array.isArray(spec?.sections)) problem("split-spec.json has no sections array");
if (!String(spec?.note ?? "").trim()) problem("split-spec.json has no note (derivation record)");
if (!spec?.renderOptions || typeof spec.renderOptions !== "object")
  problem("split-spec.json records no renderOptions (prettier options for re-derivation)");
if (!Array.isArray(spec?.notRendered))
  problem("split-spec.json records no notRendered array (non-code payload blocks)");
if (!spec?.rename || typeof spec.rename !== "object" || spec.rename.map !== "rename-map.json")
  problem("split-spec.json records no rename section (PLAN §5 campaign record)");
if (typeof spec?.defaultFile !== "string" || !spec.defaultFile)
  problem("split-spec.json has no defaultFile (stable entry point)");
else if (!fs.existsSync(path.join(proj, spec.defaultFile)))
  problem(`split-spec defaultFile missing on disk: ${spec.defaultFile}`);

// ── rename-map.json (the campaign record) ───────────────────────────────
const renameMapPath = path.join(proj, "rename-map.json");
let renameMap = { files: {}, scoped: {} };
if (fs.existsSync(renameMapPath)) {
  try {
    const parsedMap = JSON.parse(fs.readFileSync(renameMapPath, "utf8"));
    renameMap = { files: parsedMap.files || {}, scoped: parsedMap.scoped || {} };
  } catch (e) {
    problem(`rename-map.json does not parse: ${e.message}`);
  }
}
const recordFor = (file) => {
  const files = renameMap.files[file];
  const scoped = renameMap.scoped[file];
  return files || scoped ? { files, scoped } : null;
};

// ── spec.sources -> pretty↔capture provenance ───────────────────────────
const sources = Array.isArray(spec?.sources) ? spec.sources : [];
if (!sources.length) problem("split-spec.json has no sources array (no readable provenance)");
let sourcesOK = 0;
for (const s of sources) {
  if (typeof s.sourceFile !== "string" || !s.sourceFile) {
    problem("split-spec source entry without sourceFile");
    continue;
  }
  const prettyAbs = path.join(proj, s.sourceFile);
  if (!fs.existsSync(prettyAbs)) {
    problem(`source ${s.sourceFile}: readable pretty missing on disk`);
    continue;
  }
  if (typeof s.capture !== "string" || !s.capture) {
    problem(`source ${s.sourceFile}: no capture provenance recorded`);
    continue;
  }
  const capAbs = path.join(proj, s.capture);
  if (!fs.existsSync(capAbs)) {
    problem(`source ${s.sourceFile}: capture missing: ${s.capture}`);
    continue;
  }
  if (manifest?.files?.[s.capture]) {
    const got = sha256(fs.readFileSync(capAbs));
    if (got !== manifest.files[s.capture].sha256)
      problem(`source ${s.sourceFile}: capture ${s.capture} does not match .upstream/manifest.json`);
  } else {
    problem(`source ${s.sourceFile}: capture ${s.capture} is not in .upstream/manifest.json`);
  }
  if (String(s.captureKind).startsWith("inline-")) {
    if (typeof s.captureByteStart !== "number" || typeof s.captureByteEnd !== "number")
      problem(`source ${s.sourceFile}: inline-block provenance without byte range`);
  } else {
    const want = prettyForCapture(s.capture);
    if (want !== s.sourceFile) problem(`source ${s.sourceFile}: naming rule maps ${s.capture} to ${want}`);
  }
  sourcesOK++;
}

// ── sections resolve ────────────────────────────────────────────────────
const seen = new Set();
const rangedFiles = new Set();
const indexOnlyFiles = new Set();
for (const s of sections) {
  if (!s.file) {
    problem("split-spec section without a file");
    continue;
  }
  if (seen.has(s.file)) problem(`split-spec lists ${s.file} twice`);
  seen.add(s.file);
  const isWhole = s.wholeFile === true;
  const isSkipped = s.skipped === true;
  if (isWhole && isSkipped) problem(`section ${s.file}: both wholeFile and skipped`);
  if (typeof s.startLine !== "number" || typeof s.endLine !== "number")
    problem(`section ${s.file}: no startLine/endLine range recorded`);
  if (typeof s.sourceFile !== "string") problem(`section ${s.file}: no sourceFile provenance recorded`);
  if (isWhole || isSkipped) indexOnlyFiles.add(s.file);
  else rangedFiles.add(s.file);
}
if (!rangedFiles.size) problem("no ranged src slices in split-spec.json (no reversed layer)");

// every src slice on disk (src/assets/<chunk>-NN.js — served-path nested)
const onDisk = [];
(function walkSrc(dir) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkSrc(p);
    else if (e.name.endsWith(".js")) onDisk.push(path.relative(srcDir, p).split(path.sep).join("/"));
  }
})(srcDir);
onDisk.sort();
if (!onDisk.length) problem("src/ missing or empty (no reversed layer)");
for (const f of onDisk) if (!rangedFiles.has(f)) problem(`src/${f} exists but is not a ranged slice in split-spec.json`);
for (const f of rangedFiles) if (!onDisk.includes(f)) problem(`split-spec lists ${f} but it is not on disk`);
for (const f of indexOnlyFiles)
  if (onDisk.includes(f)) problem(`index-only section ${f} must not have a src file on disk (wholeFile/skipped)`);

// ── vendor/machinery rule: wholeFile sections carry the recorded shape ──
// A wholeFile section whose band no longer holds its anchors means the
// readable changed shape (the vendor/machinery regions are never sliced,
// never renamed — these guards keep them honest).
const VENDOR_GUARDS = [
  ["assets/GLTFLoader-MfgfXc7d-vendor.js", /GLTFLoader/, /DRACOLoader/],
  ["assets/fx3d-DiRK8ozf-three-vendor.js", /WebGLRenderer/, /__THREE__\s*=\s*`186`/],
  ["assets/index-BTsv3a2s-chunk-machinery.js", /__vite__mapDeps/, /modulepreload/],
  ["assets/index-BTsv3a2s-react-vendor.js", /react\.dev\/errors/, /createRoot/],
  ["assets/hd2d-FOjpdF4f-chunk-machinery.js", /__vite__mapDeps/, /i\.map/],
];
for (const [file, reA, reB] of VENDOR_GUARDS) {
  const sec = sections.find((s) => s.file === file);
  if (!sec) continue; // absence is fine; presence must hold its guard
  if (sec.wholeFile !== true) {
    problem(`vendor section ${file} is not wholeFile`);
    continue;
  }
  const text = getLines(path.join(proj, sec.sourceFile))
    .slice(sec.startLine - 1, sec.endLine)
    .join("\n");
  if (!reA.test(text) || !reB.test(text)) problem(`vendor section ${file}: content guard failed — readable changed shape`);
}

// ── ranges: existence, bounds, tiling ───────────────────────────────────
const bySource = new Map();
for (const s of sections) {
  if (!s.file || typeof s.sourceFile !== "string") continue;
  const src = path.join(proj, s.sourceFile);
  if (!fs.existsSync(src)) {
    problem(`section ${s.file}: sourceFile missing: ${s.sourceFile}`);
    continue;
  }
  if (!/\.pretty\.(js|css)$/i.test(s.sourceFile)) {
    problem(`section ${s.file}: sourceFile is not a readable pretty: ${s.sourceFile}`);
    continue;
  }
  const srcLines = getLines(src);
  const A = s.startLine,
    B = s.endLine;
  if (!Number.isInteger(A) || !Number.isInteger(B) || A < 1 || B < A || B > srcLines.length) {
    problem(`section ${s.file}: bad range ${A}-${B} vs ${s.sourceFile} (${srcLines.length} lines)`);
    continue;
  }
  if (!bySource.has(s.sourceFile)) bySource.set(s.sourceFile, []);
  bySource.get(s.sourceFile).push({ s, A, B });
}
let tiledOK = 0;
for (const [sourceFile, list] of bySource) {
  let ok = true;
  list.sort((x, y) => x.A - y.A);
  const srcLines = getLines(path.join(proj, sourceFile));
  if (list[0].A !== 1) {
    problem(`${sourceFile}: first section starts at line ${list[0].A}, not 1`);
    ok = false;
  }
  for (let k = 1; k < list.length; k++) {
    if (list[k].A !== list[k - 1].B + 1) {
      problem(
        `${sourceFile}: ranges not contiguous at ${list[k].s.file} (starts ${list[k].A}, previous ends ${list[k - 1].B})`,
      );
      ok = false;
    }
  }
  if (list[list.length - 1].B !== srcLines.length) {
    problem(`${sourceFile}: last section ends at ${list[list.length - 1].B}, not ${srcLines.length}`);
    ok = false;
  }
  if (ok) tiledOK++;
}
// every pretty must be tiled by at least one section (no unreferenced pretty)
for (const s of sources) {
  if (typeof s.sourceFile !== "string" || String(s.captureKind).startsWith("inline-")) continue;
  if (!bySource.has(s.sourceFile)) problem(`${s.sourceFile}: pretty is not tiled by any split-spec section`);
}

// ── byte-exact round-trip + header provenance (through the rename map) ──
let roundOK = 0,
  ranged = 0,
  mapOK = 0;
for (const [, list] of bySource) {
  for (const { s, A, B } of list) {
    if (s.wholeFile === true || s.skipped === true) continue;
    ranged++;
    const srcAbs = path.join(srcDir, s.file);
    if (!fs.existsSync(srcAbs)) continue; // already reported
    const text = fs.readFileSync(srcAbs, "utf8");
    const nl1 = text.indexOf("\n");
    const nl2 = nl1 >= 0 ? text.indexOf("\n", nl1 + 1) : -1;
    if (nl2 < 0) {
      problem(`src/${s.file}: missing 2-line header`);
      continue;
    }
    const header1 = text.slice(0, nl1);
    const header2 = text.slice(nl1 + 1, nl2);
    const nn = path.basename(String(s.file)).match(/-(\d+)\.js$/)?.[1];
    if (!nn) problem(`src/${s.file}: file name carries no -NN slice number`);
    else if (!new RegExp(`^// .+ ${nn} — .+$`).test(header1))
      problem(`src/${s.file}: header line 1 does not match "// <tag> ${nn} — <marker>": ${header1}`);
    const want2 = `// Lines ${A}-${B} of ${s.sourceFile} (statement-aligned).`;
    if (header2 !== want2) problem(`src/${s.file}: header line 2 is not the recorded range: ${header2}`);
    const body = text.slice(nl2 + 1);
    const raw = getLines(path.join(proj, s.sourceFile)).slice(A - 1, B).join("\n") + "\n";
    const record = recordFor(s.file);
    let expected = raw;
    try {
      expected = record ? applyRecordedMap(raw, record) : raw;
    } catch (e) {
      problem(`src/${s.file}: recorded rename map does not apply: ${e.message}`);
      continue;
    }
    if (body !== expected)
      problem(
        `src/${s.file}: body is not a byte-exact round-trip of ${s.sourceFile} lines ${A}-${B}${record ? " through the recorded rename map" : ""}`,
      );
    else {
      roundOK++;
      if (record) mapOK++;
    }
  }
}

// ── skipped sections: textual re-verification ───────────────────────────
let skippedOK = 0,
  skippedTotal = 0;
for (const s of sections) {
  if (s.skipped !== true || typeof s.sourceFile !== "string") continue;
  skippedTotal++;
  const src = path.join(proj, s.sourceFile);
  if (!fs.existsSync(src)) {
    problem(`skipped section ${s.file}: sourceFile missing: ${s.sourceFile}`);
    continue;
  }
  const lines = getLines(src);
  if (!Number.isInteger(s.startLine) || !Number.isInteger(s.endLine) || s.startLine < 1 || s.endLine > lines.length)
    continue;
  const first = lines[s.startLine - 1],
    last = lines[s.endLine - 1];
  if (typeof s.firstLine !== "string" || typeof s.lastLine !== "string")
    problem(`skipped section ${s.file}: no firstLine/lastLine recorded`);
  else if (first !== s.firstLine || last !== s.lastLine)
    problem(`skipped section ${s.file}: range text does not match the recorded first/last lines`);
  else skippedOK++;
}

// ── every src + pretty parses standalone ────────────────────────────────
let checkOK = 0;
for (const f of onDisk) if (parseCheck(path.join(srcDir, f), `src/${f}`)) checkOK++;

const prettyFiles = [];
const walkPretty = (dir) => {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkPretty(p);
    else if (/\.pretty\.(js|css)$/i.test(e.name)) prettyFiles.push(p);
  }
};
walkPretty(readableDir);
if (!prettyFiles.length) problem("readable/ has no *.pretty.js|css (derived layer missing)");
let prettyOK = 0,
  prettyParsed = 0;
for (const abs of prettyFiles) {
  const rel = path.relative(proj, abs).split(path.sep).join("/");
  if (!/\.pretty\.js$/i.test(rel)) continue; // CSS pretties are indexed, not ESM-parsed
  prettyParsed++;
  if (parseCheck(abs, rel)) prettyOK++;
}

// ── every pretty referenced + provably derived + layer completeness ─────
const referenced = new Set();
for (const [sourceFile] of bySource) referenced.add(sourceFile.split(path.sep).join("/"));
let derivedOK = 0;
for (const abs of prettyFiles) {
  const rel = path.relative(proj, abs).split(path.sep).join("/");
  if (!referenced.has(rel))
    problem(`readable/${path.basename(rel)} exists but is not referenced by split-spec.json`);
  if (isInlineTwin(rel)) {
    // inline twins have no capture-name mapping; verified against index-inline-map.json below
    derivedOK++;
    continue;
  }
  const capRel = captured.find((r) => prettyForCapture(r) === rel) ?? null;
  const capAbs = capRel ? path.join(proj, capRel) : null;
  if (!capAbs || !fs.existsSync(capAbs)) {
    problem(`${rel}: capture source missing (no captured .js/.css maps to this pretty)`);
    continue;
  }
  if (manifest && !manifest.files?.[capRel])
    problem(`${rel}: capture source ${capRel} is not recorded in .upstream/manifest.json`);
  if (fs.readFileSync(capAbs).equals(fs.readFileSync(abs)))
    problem(`${rel}: byte-identical to its capture source (prettier did not run?)`);
  else derivedOK++;
}
if (manifest) {
  for (const capRel of Object.keys(manifest.files)) {
    if (!/\.(js|css)$/i.test(capRel)) continue;
    const want = prettyForCapture(capRel);
    if (!prettyFiles.some((abs) => path.relative(proj, abs).split(path.sep).join("/") === want))
      problem(`captured ${capRel} has no readable twin referenced by the spec`);
  }
}

// ── inline block twins + map (deliverable rule) ─────────────────────────
const inlineMapPath = path.join(readableDir, "index-inline-map.json");
let inlineMap = null;
if (fs.existsSync(inlineMapPath)) {
  try {
    inlineMap = JSON.parse(fs.readFileSync(inlineMapPath, "utf8"));
  } catch (e) {
    problem(`readable/index-inline-map.json does not parse: ${e.message}`);
  }
}
let inlineBlocks = 0;
for (const capRel of Object.keys(manifest?.files ?? {})) {
  if (!/\.html$/i.test(capRel)) continue;
  const buf = fs.readFileSync(path.join(proj, capRel));
  const blocks = scanBlocks(buf);
  inlineBlocks += blocks.length;
  const entryTag = capRel.replace(/\.html$/i, "").split("/").join("__");
  for (const b of blocks) {
    const twinExt = b.kind === "style" ? "css" : b.kind === "importmap" ? "json" : "js";
    const twin = `readable/${entryTag}-inline-${b.block}.pretty.${twinExt}`;
    if (!fs.existsSync(path.join(proj, twin))) problem(`${capRel}: inline ${b.kind} #${b.block} has no twin ${twin}`);
    else if (!referenced.has(twin)) problem(`${twin}: inline twin is not referenced by split-spec.json`);
    const rec = inlineMap?.blocks?.find((x) => x.file === twin && x.source === capRel);
    if (!rec) {
      problem(`${capRel}: inline ${b.kind} #${b.block} is missing from readable/index-inline-map.json`);
      continue;
    }
    if (rec.byteStart !== b.contentStart || rec.byteEnd !== b.contentEnd || rec.sha256 !== b.sha256)
      problem(`${twin}: recorded inline byte range/sha256 does not match the capture bytes`);
    const twinAbs = path.join(proj, twin);
    if (fs.existsSync(twinAbs)) {
      const twinBuf = fs.readFileSync(twinAbs);
      if (twinBuf.equals(Buffer.from(b.text, "utf8")))
        problem(`${twin}: byte-identical to its inline capture block (prettier did not run?)`);
      if (typeof rec.prettySha256 === "string" && sha256(twinBuf) !== rec.prettySha256)
        problem(`${twin}: sha256 does not match index-inline-map.json prettySha256`);
    }
  }
}
if (inlineMap && inlineBlocks === 0) problem("readable/index-inline-map.json exists but the capture has no inline blocks");
if (inlineMap && typeof inlineMap.sourceBytes === "number" && inlineMap.source) {
  const srcAbs = path.join(proj, inlineMap.source);
  if (fs.existsSync(srcAbs) && sha256(fs.readFileSync(srcAbs)) !== inlineMap.sourceSha256)
    problem(`index-inline-map.json: sourceSha256 does not match the captured ${inlineMap.source}`);
}

// ── the hard rule: src/ import resolution against the capture ───────────
let checkedImports = 0,
  resolvedImports = 0,
  whitelisted = 0;
for (const s of sections) {
  if (s.wholeFile === true || s.skipped === true) continue;
  if (!s.file || typeof s.sourceFile !== "string") continue;
  const srcAbs = path.join(srcDir, s.file);
  if (!fs.existsSync(srcAbs)) continue;
  const srcRec = sources.find((x) => x.sourceFile === s.sourceFile);
  const baseDir = srcRec && srcRec.capture ? path.posix.dirname(srcRec.capture) : null;
  const code = fs.readFileSync(srcAbs, "utf8");
  for (const { spec: sp, kind, named } of tokenImports(code)) {
    checkedImports++;
    if (sp.startsWith("./") || sp.startsWith("../")) {
      if (!baseDir) {
        problem(`src/${s.file}: ${kind} import "${sp}" but no capture provenance is known`);
        continue;
      }
      const target = path.posix.normalize(path.posix.join(baseDir, sp));
      if (!fs.existsSync(path.join(proj, target))) {
        problem(`src/${s.file}: unresolvable ${kind} import "${sp}" (capture carries no ${target})`);
        continue;
      }
      resolvedImports++;
      const targetCode = fs.readFileSync(path.join(proj, target), "utf8");
      const targetExports = exportsOf(targetCode);
      for (const [local, foreign] of named) {
        if (foreign === "*" || targetExports.has(foreign)) continue;
        problem(`src/${s.file}: imports { ${local}${local === foreign ? "" : ` as ${foreign}`} } from "${sp}" but ${target} does not export ${foreign}`);
      }
      continue;
    }
    if (sp.startsWith("node:") || sp.startsWith("vite/") || sp.startsWith("/")) {
      whitelisted++;
      continue;
    }
    problem(`src/${s.file}: unresolvable ${kind} import "${sp}" — bare/URL specifier not whitelisted`);
  }
}

// __vite__mapDeps table entries must exist in the capture (loader machinery).
// Every machinery section that carries a mapDeps table (the entry chunk's
// chunk-machinery wholeFile section, the hd2d chunk's machinery head) is
// cross-checked: its entries are served-root-relative ("assets/<chunk>.js"),
// so each must exist in the capture as written — the proof the recorded
// closure still names real chunks. (clawd-rpg resolved against the chunk
// dir; aetherfall's Vite build names entries from the served root, so it is
// root-first with the chunk dir as a fallback.)
{
  const machinery = sections.filter(
    (s) => /-chunk-machinery\.js$/.test(String(s.file)) && typeof s.startLine === "number",
  );
  if (!machinery.length) problem("no -chunk-machinery section in split-spec.json (loader machinery not indexed)");
  let tables = 0;
  let entries = 0;
  for (const sec of machinery) {
    const lines = getLines(path.join(proj, sec.sourceFile));
    const text = lines.slice(sec.startLine - 1, sec.endLine).join("\n");
    if (!/__vite__mapDeps/.test(text)) continue;
    tables++;
    const capRel = sources.find((x) => x.sourceFile === sec.sourceFile)?.capture ?? null;
    const baseDir = capRel ? path.posix.dirname(capRel) : null;
    for (const m of text.matchAll(/"([^"]+\.js)"/g)) {
      entries++;
      const rootTarget = path.posix.normalize(m[1]);
      const altTarget = baseDir ? path.posix.normalize(path.posix.join(baseDir, m[1])) : null;
      const ok = fs.existsSync(path.join(proj, rootTarget)) || (altTarget && fs.existsSync(path.join(proj, altTarget)));
      if (!ok) problem(`__vite__mapDeps entry "${m[1]}" does not exist in the capture (${rootTarget})`);
    }
  }
  if (tables < 2) problem(`only ${tables} __vite__mapDeps table(s) indexed — the entry and hd2d machinery heads both carry one`);
  if (!entries) problem("__vite__mapDeps tables carry no .js entries");
}

// ── derived layers never enter the capture sums ─────────────────────────
if (manifest) {
  for (const rel of Object.keys(manifest.files ?? {})) {
    if (
      /(^|\/)(readable|src|legacy)\//.test(rel) ||
      rel === "split-spec.json" ||
      rel === "rename-map.json" ||
      rel === "index-inline-map.json" ||
      rel === "_mirror-report.json"
    )
      problem(`derived-layer path recorded in the capture manifest: ${rel}`);
  }
}

// ── rename layer — map ⇄ spec ⇄ committed slices (PLAN §5 campaign) ─────
{
  const flatFiles = Object.keys(renameMap.files || {});
  const scopedFiles = Object.keys(renameMap.scoped || {});
  const flatNames = Object.values(renameMap.files || {}).reduce((n, m) => n + Object.keys(m).length, 0);
  const indexedNames = Object.values(renameMap.scoped || {}).reduce((n, m) => n + Object.keys(m).length, 0);
  const indexedOccurrences = Object.values(renameMap.scoped || {}).reduce(
    (n, m) => n + Object.values(m).reduce((k, hits) => k + hits.length, 0),
    0,
  );
  for (const f of [...flatFiles, ...scopedFiles]) {
    const sec = sections.find((s) => s.file === f);
    if (!sec) problem(`rename-map.json records ${f} which is not a split-spec section`);
    else if (sec.wholeFile === true || sec.skipped === true)
      problem(`rename-map.json records ${f} which is a wholeFile/skipped section (never renamed)`);
  }
  const st = spec?.rename || {};
  if (st.map !== "rename-map.json") problem(`split-spec rename.map is ${st.map}, expected rename-map.json`);
  if (st.wordBoundaryNames !== flatNames)
    problem(`split-spec rename.wordBoundaryNames=${st.wordBoundaryNames} but rename-map.json carries ${flatNames}`);
  if (st.indexedNames !== indexedNames)
    problem(`split-spec rename.indexedNames=${st.indexedNames} but rename-map.json carries ${indexedNames}`);
  if (st.indexedOccurrences !== indexedOccurrences)
    problem(`split-spec rename.indexedOccurrences=${st.indexedOccurrences} but rename-map.json carries ${indexedOccurrences}`);
  const renamedFiles = new Set([...flatFiles, ...scopedFiles]);
  if (st.slices !== renamedFiles.size && renamedFiles.size)
    problem(`split-spec rename.slices=${st.slices} but rename-map.json records ${renamedFiles.size} file(s)`);
}

// ── sources[].renameBindings — re-found in the skipped sections ─────────
// The reconstruction-time reach (turfwar's (t)(1)): a chunk's index-only
// skipped sections (export tables) spell the renamed local bindings, and the
// recorded binding map must re-find every name there AND apply cleanly
// (applyBindingMap throws on a token-level mismatch — the mechanism proof
// tools/check-chunk.mjs and tools/verify-rename.mjs rely on).
let bindingsOK = 0;
let bindingsTotal = 0;
for (const s of sources) {
  const bindings = s.renameBindings || {};
  const names = Object.keys(bindings);
  if (!names.length) continue;
  const skippedText = sections
    .filter((x) => x.skipped === true && x.sourceFile === s.sourceFile)
    .map((x) => getLines(path.join(proj, x.sourceFile)).slice(x.startLine - 1, x.endLine).join("\n"))
    .join("\n");
  if (!skippedText.trim()) {
    problem(`renameBindings recorded for ${s.sourceFile} but the chunk has no skipped section text`);
    continue;
  }
  for (const from of names) {
    bindingsTotal++;
    const re = new RegExp(`(?<![\\w$])${from.replace(/[$]/g, "\\$")}(?![\\w$])`);
    if (!re.test(skippedText)) problem(`renameBindings name "${from}" (${s.sourceFile}) is not re-found in the skipped sections`);
    else {
      try {
        applyBindingMap(skippedText, { [from]: bindings[from] });
        bindingsOK++;
      } catch (e) {
        problem(`renameBindings "${from}" (${s.sourceFile}): applyBindingMap failed: ${e.message}`);
      }
    }
  }
}

// ── re-render under the pinned prettier, multi-pass FIXED POINT (t)(3) ──
const prettierCandidates = [
  process.env.PRETTIER_MJS,
  path.join(proj, "node_modules", "prettier", "index.mjs"),
  path.join(proj, "tools", "vendor", "prettier", "index.mjs"),
  path.join(proj, "tools", "vendor", "prettier", "index.mjs"),
].filter(Boolean);
let prettierPath = null;
for (const c of prettierCandidates) {
  if (!fs.existsSync(c)) continue;
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(path.dirname(c), "package.json"), "utf8"));
    if (pkg.version === PINNED) {
      prettierPath = c;
      break;
    }
  } catch {
    /* keep looking */
  }
}

(async () => {
  let renderNote = `prettier ${PINNED} not importable — renderOptions recorded, re-render check skipped`;
  if (prettierPath) {
    const prettier = (await import(pathToFileURL(prettierPath).href)).default;
    // multi-pass FIXED POINT: iterate until the output stops changing; a
    // single-pass check would false-fail on a pass-2+ fixed point. If
    // MAX_PASSES is exhausted without stability, that is a problem — silence
    // here would make a non-converged render look verified.
    async function formatFixed(text, parser) {
      let out = await prettier.format(text, { parser });
      let passes = 1;
      while (passes < MAX_PASSES) {
        const next = await prettier.format(out, { parser });
        if (next === out) return out;
        out = next;
        passes++;
      }
      const again = await prettier.format(out, { parser });
      if (again !== out) throw new Error(`prettier ${parser} does not reach a fixed point in ${MAX_PASSES} passes`);
      return out;
    }
    let renderOK = 0;
    let renderTotal = 0;
    for (const abs of prettyFiles) {
      const rel = path.relative(proj, abs).split(path.sep).join("/");
      if (isInlineTwin(rel)) {
        const rec = inlineMap?.blocks?.find((x) => x.file === rel);
        if (!rec || !rec.source) continue;
        const srcAbs = path.join(proj, rec.source);
        if (!fs.existsSync(srcAbs)) continue;
        const blk = scanBlocks(fs.readFileSync(srcAbs)).find((b) => b.block === rec.block);
        if (!blk) continue;
        renderTotal++;
        const got = await formatFixed(blk.text, rec.parsedAs || "css");
        if (got === fs.readFileSync(abs, "utf8")) renderOK++;
        else problem(`${rel}: does not re-render byte-exact under pinned prettier ${PINNED} ({parser:${rec.parsedAs || "css"}})`);
        continue;
      }
      const capRel = captured.find((r) => prettyForCapture(r) === rel);
      const capAbs = capRel ? path.join(proj, capRel) : null;
      if (!capAbs || !fs.existsSync(capAbs)) continue; // already reported
      renderTotal++;
      const parser = /\.pretty\.css$/i.test(rel) ? "css" : "babel";
      const got = await formatFixed(fs.readFileSync(capAbs, "utf8"), parser);
      const want = fs.readFileSync(abs, "utf8");
      if (got === want) renderOK++;
      else problem(`${rel}: does not re-render byte-exact under pinned prettier ${PINNED} ({parser})`);
    }
    renderNote = `${renderOK}/${renderTotal} pretties re-render byte-exact under pinned prettier ${PINNED} (fixed point)`;
  }

  if (problems.length) {
    console.error(`AUDIT FAIL — ${problems.length} problem(s)`);
    for (const p of problems) console.error("  " + p);
    process.exit(1);
  }
  console.log(
    `AUDIT PASS — ${sections.length} spec sections (${roundOK}/${ranged} src↔pretty round-trips byte-exact${mapOK ? `, ${mapOK} through the recorded rename map` : ""}, ` +
      `${tiledOK}/${bySource.size} pretty sources tiled contiguously, ` +
      `${skippedOK}/${skippedTotal} skipped loader/merged/export sections re-verified textually, ` +
      `${checkOK}/${onDisk.length} src slices + ${prettyOK}/${prettyParsed} readable/*.pretty.js parse standalone (node --input-type=module --check -), ` +
      `${derivedOK}/${prettyFiles.length} pretties provably distinct from their capture source, ` +
      `${sourcesOK}/${sources.length} sources provenanced, ` +
      `${indexOnlyFiles.size} index-only wholeFile/skipped sections carry no src file, ` +
      `${inlineBlocks} inline content block(s) (twins + index-inline-map.json cross-checked), ` +
      `${resolvedImports}/${checkedImports} imports resolve inside the capture (${whitelisted} whitelisted machinery), ` +
      `${bindingsOK}/${bindingsTotal} renameBindings name(s) re-found in skipped sections + binding map applies, ` +
      `${renderNote}, capture manifest free of derived layers)`,
  );
})();
