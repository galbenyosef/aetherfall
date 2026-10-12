// derive.mjs — rebuild the derived layers (readable/ + src/ + split-spec.json)
// from the aetherfall capture (PLAN §3/§5). AETHERFALL (https://aetherfall.dev/)
// is capture-class: a Vite production build of "An epic pixel-art fantasy MMO
// RPG." (manifest.webmanifest description), served at the origin root behind
// Cloudflare. §0.4 fork-over-mirror was checked on 2026-10-12 — no public
// upstream source repo is referenced by the page or its JS (only docs links to
// convex.dev and the deployed API endpoint), so the mirror stands. The capture
// is untouched; every source file is re-hashed against .upstream/manifest.json
// before it is rendered, so a drifted capture fails loudly instead of being
// silently re-derived.
//
// Pipeline:
//   each capture *.js -> pinned prettier 3.9.6 (module API — the CLI respects
//                        .gitignore and can silently echo its input),
//                        iterated to a fixed point (the index chunk needs a
//                        second pass on one member-chain region; the loop stops
//                        when format(out) === out), -> readable/<name>.pretty.js
//                        (capture-root-relative name, nested dirs flattened
//                        with __; every pretty provably NOT byte-identical to
//                        its capture source).
//   the capture *.css -> readable/<name>.pretty.css, wholeFile section
//                        (stylesheet rule: stylesheets are never sliced).
//   vendor bundles     -> readable/ + wholeFile section (vendor rule): the
//                        three.js GLTFLoader addon chunk (assets/GLTFLoader-*)
//                        is indexed whole, never sliced.
//   vendor regions     -> wholeFile sections inside app chunks, content-anchored
//                        and asserted (a missing anchor fails the run):
//                          assets/index-BTsv3a2s — the chunk-machinery head
//                          (__vite__mapDeps table, rollup CJS interop helpers,
//                          Vite modulepreload polyfill) and the React 19.3.0
//                          bundle (react + react-dom + scheduler CJS modules
//                          under the rollup require helper, one declaration);
//                          assets/fx3d-DiRK8ozf — the bundled three.js r186
//                          engine (three.core/three.module) up to and including
//                          the WebGLRenderer class.
//   app chunks         -> statement-aligned slices src/<name>-NN.js at
//                        top-level declaration boundaries, ~250-350 line
//                        windows (oversized single declarations stay whole),
//                        exact 2-line provenance header; every slice is
//                        parse-checked with `node --input-type=module --check -`
//                        and round-trips byte-exact to its readable line range.
//   entry document     -> inline <script>/<style> scan (byte ranges + sha256):
//                        index.html references external chunks only — zero inline
//                        content blocks, so there are no *-inline-N twins and no
//                        index-inline-map.json.
//
// Non-standalone parts are indexed but never sliced (skipped sections): every
// app chunk's final `export {…}` table (the bindings live in the earlier
// slices). The GLTFLoader chunk is wholly vendor (three.js addon), so it is a
// single wholeFile section, never sliced.
//
// The fx3d vendor region's last statement carries minifier-merged app debris:
// the minifier merged the game's particle-shader table (xu/Su/Cu/Du/Ou) and the
// element-palette tables (ku/Au/ju/Mu/Q) into the same variable declaration as
// the WebGLRenderer class — top-level declaration boundaries cannot cut inside
// it, so the region keeps them and the app's remaining code resumes at
// `function Nu` (guarded). Identifiers in src/ are the bundle's own minified
// names — the rename campaign (PLAN §5) is recorded as an open task in
// README.md. usage:
//   node tools/derive.mjs
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
const PINNED = "3.9.6";
const MIN_WINDOW = 250;
const MAX_WINDOW = 350;
const TODAY = "2026-10-12";
const ROOT = ""; // capture root (the served site root sits at the repo root)

const sha256 = (buf) => crypto.createHash("sha256").update(buf).digest("hex");
const readLines = (abs) => {
  const t = fs.readFileSync(abs, "utf8");
  const l = t.split("\n");
  if (l.length && l[l.length - 1] === "") l.pop();
  return l;
};
const linesOf = (text) => text.replace(/\n$/, "").split("\n");
const lineOf = (text, offset) => text.slice(0, offset).split("\n").length;

// capture-relative name -> readable twin name (dirs flattened)
const tagOf = (capRel) => {
  const rel = ROOT && capRel.startsWith(ROOT) ? capRel.slice(ROOT.length) : capRel;
  return rel.replace(/\.(js|css)$/i, "").split("/").join("__");
};
const prettyRelFor = (capRel) =>
  "readable/" + tagOf(capRel) + (/\.css$/i.test(capRel) ? ".pretty.css" : ".pretty.js");

// ── pinned prettier (module API, exactly 3.9.6) ─────────────────────────
async function loadPrettier() {
  const candidates = [
    process.env.PRETTIER_MJS,
    path.join(proj, "node_modules", "prettier", "index.mjs"),
    "D:/repos/mirrors/metropolygonia/node_modules/prettier/index.mjs",
  ].filter(Boolean);
  for (const c of candidates) {
    if (!fs.existsSync(c)) continue;
    try {
      const pkg = JSON.parse(fs.readFileSync(path.join(path.dirname(c), "package.json"), "utf8"));
      if (pkg.version !== PINNED) continue;
      const mod = (await import(pathToFileURL(c).href)).default;
      if (mod.version === PINNED) return { mod, at: c };
    } catch {
      /* try next */
    }
  }
  throw new Error(`pinned prettier ${PINNED} not found (set PRETTIER_MJS to its index.mjs)`);
}

// fixed-point render: prettier 3.9.6 needs a second pass on one member-chain
// region of the index chunk (pass 1 → pass 2 differ, pass 2 is stable). Iterate
// until format(out) === out (bounded), so the stored pretty is a true fixed
// point of the pinned version and audit's re-render is byte-exact by
// construction. Returns { out, passes } with passes = format calls until the
// fixed point was reached and confirmed.
async function formatFixpoint(prettier, text, parser) {
  let out = text;
  let passes = 0;
  for (let i = 0; i < 6; i++) {
    const next = await prettier.format(out, { parser });
    passes++;
    if (next === out) return { out, passes, stable: true };
    out = next;
  }
  throw new Error(`prettier ${parser} did not reach a fixed point in 6 passes`);
}

// ── parse check: the exact standalone gate (ESM stdin) ──────────────────
function parses(text) {
  const r = spawnSync(process.execPath, ["--input-type=module", "--check", "-"], {
    input: text,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  return { ok: r.status === 0, why: (r.stderr || "").trim().split("\n").slice(-3).join(" | ") };
}

// ── markers for titles (top tokens, lowercase; fleet convention) ────────
const STOP = new Set(
  ("function return typeof undefined object string number boolean prototype length value default " +
    "exports import this that with from then else case break continue delete instanceof constructor " +
    "arguments void null true false call apply name type text target window document globalthis self " +
    "require module async await yield static class const let var new for while switch throw try catch " +
    "finally extends super using debugger of in do if has own hasown get set")
    .split(" ")
    .filter(Boolean),
);
function markers(text, n = 2) {
  // URLs/identifiers living inside string literals (import paths, asset names)
  // are not code tokens — strip quoted strings before counting
  const code = text.replace(/`[^`]*`|"[^"\n]*"|'[^'\n]*'/g, " ");
  const counts = new Map();
  for (const m of code.matchAll(/[A-Za-z][A-Za-z0-9_]{2,}/g)) {
    const w = m[0].toLowerCase();
    if (STOP.has(w)) continue;
    counts.set(w, (counts.get(w) || 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, n);
}
const markerText = (ms) => ms.map(([w, c]) => `${w}(${c})`).join(", ");

// ── windowize: cut only at statement starts; ≤350 lines, a single ───────
// ── oversized declaration is a window of its own ────────────────────────
function windowize(stmts) {
  const out = [];
  let cur = null;
  for (const s of stmts) {
    if (!cur) {
      cur = { first: s, last: s, count: 1, startLine: s.startLine, endLine: s.endLine };
      continue;
    }
    const projected = s.endLine - cur.startLine + 1;
    if (projected > MAX_WINDOW) {
      out.push(cur);
      cur = { first: s, last: s, count: 1, startLine: s.startLine, endLine: s.endLine };
    } else {
      cur.last = s;
      cur.count++;
      cur.endLine = s.endLine;
    }
  }
  if (cur) out.push(cur);
  return out;
}

// ── inline block scan (byte-exact, over the raw entry buffer) ───────────
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
      if (j < 0) throw new Error(`unterminated <${kind}> opened at byte ${i}`);
      const tag = buf.subarray(i, tagEnd + 1).toString("utf8");
      const external = /\bsrc\s*=\s*["']/i.test(tag);
      if (external) {
        blocks.push({ kind, external: true, tag, openStart: i, contentStart: tagEnd + 1, contentEnd: j });
      } else {
        n++;
        const content = buf.subarray(tagEnd + 1, j);
        blocks.push({
          kind: /\btype\s*=\s*["']importmap["']/i.test(tag) ? "importmap" : kind,
          external: false,
          block: n,
          tag,
          openStart: i,
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
  return blocks.sort((a, b) => a.openStart - b.openStart);
}

// ── curated content-anchored classification (guards fail loudly) ────────
const WHOLE_FILE = {
  "assets__GLTFLoader-MfgfXc7d": {
    title:
      "assets__GLTFLoader-MfgfXc7d — three.js GLTFLoader addon chunk (vendor, whole-file, never sliced)",
    desc:
      "The Vite-split three.js examples/jsm GLTFLoader addon chunk (`class GLTFLoader extends Loader` with its KHR_* plugin callbacks, the GLTF mesh/primitive extensions, the DRACOLoader/MeshoptDecoder/KTX2Loader integration hooks) that the runtime dynamic-imports from fx3d/hd2d — third-party addon, not app code. Vendor rule — indexed whole-file in readable/, never sliced or rewritten.",
    guard: (t) => /GLTFLoader/.test(t) && /DRACOLoader/.test(t) && /KTX2Loader/.test(t) && /MeshoptDecoder/.test(t),
    what: "three.js GLTFLoader addon (KHR_* plugins, DRACO/meshopt/KTX2 hooks)",
  },
};

async function main() {
  const { mod: prettier, at } = await loadPrettier();
  console.log(`pinned prettier ${PINNED} (${at})`);

  const manifest = JSON.parse(fs.readFileSync(path.join(proj, ".upstream", "manifest.json"), "utf8"));
  const captured = Object.keys(manifest.files).map((r) => r.split(path.sep).join("/")).sort();
  const captureBytes = (rel) => {
    const abs = path.join(proj, rel);
    if (!fs.existsSync(abs)) throw new Error(`capture file missing: ${rel}`);
    const buf = fs.readFileSync(abs);
    if (sha256(buf) !== manifest.files[rel].sha256)
      throw new Error(`${rel} on disk does not match .upstream/manifest.json — re-verify the capture first`);
    return buf;
  };

  const readableDir = path.join(proj, "readable");
  const srcDir = path.join(proj, "src");
  fs.mkdirSync(readableDir, { recursive: true });
  fs.mkdirSync(srcDir, { recursive: true });
  const written = { readable: new Set(), src: new Set() };

  const sources = [];
  const sections = [];
  const notRendered = [];
  let inlineFiles = [];
  let slicedTotal = 0;
  let skippedTotal = 0;

  const jsRelsAll = captured.filter((r) => /\.js$/i.test(r));
  const cssRels = captured.filter((r) => /\.css$/i.test(r));
  const htmlRels = captured.filter((r) => /\.html$/i.test(r));
  // entry chunk first (it is the game's entry point), then the module chunks
  // (fx3d, hd2d), then the vendored GLTFLoader chunk — a reading order
  const rank = (rel) => (/\/GLTFLoader-/.test(rel) ? 2 : /\/index-B/.test(rel) ? 0 : 1);
  const jsRels = jsRelsAll.slice().sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));
  const vendorJs = jsRelsAll.filter((r) => WHOLE_FILE[tagOf(r)]);

  // ── 1) JS: vendor -> wholeFile; app -> statement-aligned slices ─────────
  for (const rel of jsRels) {
    const buf = captureBytes(rel);
    const text = buf.toString("utf8");
    if (!Buffer.from(text, "utf8").equals(buf)) throw new Error(`${rel} does not round-trip through utf8`);
    const fmt = await formatFixpoint(prettier, text, "babel");
    const pretty = fmt.out;
    if (pretty === text)
      throw new Error(`${rel}: prettier output is byte-identical to the capture — nothing to derive`);
    const sourceFile = prettyRelFor(rel);
    fs.writeFileSync(path.join(proj, sourceFile), pretty);
    written.readable.add(path.basename(sourceFile));
    const lines = linesOf(pretty);
    const tag = tagOf(rel);
    const cls = WHOLE_FILE[tag];

    if (cls) {
      const region = pretty;
      if (cls.guard && !cls.guard(region))
        throw new Error(`${rel}: whole-file guard failed — readable changed shape`);
      sections.push({
        file: `${tag}-vendor.js`,
        wholeFile: true,
        title: cls.title,
        desc: `Lines 1-${lines.length} of ${sourceFile}: ${cls.desc}`,
        note: "whole-file (vendor rule): indexed in readable/, never sliced",
        startLine: 1,
        endLine: lines.length,
        sourceFile,
      });
      sources.push({
        sourceFile,
        capture: rel,
        captureKind: "file",
        captureSha256: manifest.files[rel].sha256,
        captureBytes: buf.length,
        prettyLines: lines.length,
        prettyBytes: Buffer.byteLength(pretty, "utf8"),
        prettyPasses: fmt.passes,
        idempotent: true,
        tag,
        slices: 0,
        derived: "readable only (vendor bundle, wholeFile)",
        what: cls.what,
      });
      console.log(
        `derive: ${rel} -> ${sourceFile} (${lines.length} lines, wholeFile vendor, ${fmt.passes} pass(es))`,
      );
      continue;
    }

    // ── app chunk: statement-aligned slicing ────────────────────────────
    const dbg = await prettier.__debug.parse(pretty, { parser: "babel" });
    const top = (dbg.ast.program || dbg.ast).body;
    const stmts = top.map((n) => ({
      node: n,
      startLine: lineOf(pretty, n.start),
      endLine: lineOf(pretty, n.end),
      text: pretty.slice(n.start, n.end),
    }));
    for (let i = 1; i < stmts.length; i++)
      if (stmts[i].startLine <= stmts[i - 1].endLine)
        throw new Error(`${rel}: statements ${i - 1}/${i} share a line — cannot slice at line boundaries`);

    const specials = [];
    const covered = new Array(stmts.length).fill(false);
    const claim = (a, b, block) => {
      if (a < 0 || b < a || b >= stmts.length) throw new Error(`${rel}: bad ${block.file} range ${a}-${b}`);
      for (let i = a; i <= b; i++) {
        if (covered[i]) throw new Error(`${rel}: ${block.file} overlaps another block at statement ${i}`);
        covered[i] = true;
      }
      specials.push({ ...block, A: stmts[a].startLine, B: stmts[b].endLine });
    };

    if (tag === "assets__index-BTsv3a2s") {
      // statements 0-2: __vite__mapDeps table, rollup CJS interop helpers and
      // the Vite modulepreload polyfill — build machinery, not app code
      if (!/__vite__mapDeps/.test(stmts[0].text))
        throw new Error(`${rel}: first statement is not the __vite__mapDeps table — readable changed shape`);
      if (!/Object\.create/.test(stmts[1].text) || !/Object\.defineProperty/.test(stmts[1].text))
        throw new Error(`${rel}: second statement is not the rollup CJS interop helpers — readable changed shape`);
      if (!/modulepreload/.test(stmts[2].text))
        throw new Error(`${rel}: third statement is not the Vite modulepreload polyfill — readable changed shape`);
      claim(0, 2, {
        kind: "whole",
        file: `${tag}-chunk-machinery.js`,
        title: `${tag} — chunk machinery head (__vite__mapDeps table, rollup CJS interop helpers, Vite modulepreload polyfill; whole-file, never sliced)`,
        body:
          "the Vite-generated `__vite__mapDeps` chunk table, the rollup CJS interop helpers " +
          "(`__create`/`__defProp`/`__getOwnPropDesc`/`__getOwnPropNames`/`__getProtoOf`/`__hasOwnProp`/" +
          "`__commonJS`/`__toESM`/`__export`) and the Vite modulepreload polyfill IIFE " +
          "(`link[rel=modulepreload]` relList.supports check + MutationObserver fetch warm-up) — build " +
          "machinery, not app code; indexed whole-file in readable/, never sliced.",
      });
      // statement 3: the React 19.3.0 vendor bundle (react + react-dom +
      // scheduler CJS modules under the rollup require helper)
      const react = stmts[3];
      for (const [re, what] of [
        [/react\.dev\/errors/, "react error-decoder URLs"],
        [/Minified React error/, "react minified-error builder"],
        [/react\.transitional\.element/, "react element symbols"],
        [/createRoot\s*=\s*function/, "react-dom createRoot"],
        [/`19\.3\.0`/, "React version 19.3.0"],
        [/__REACT_DEVTOOLS_GLOBAL_HOOK__/, "React DevTools hook"],
        [/useSyncExternalStore/, "react useSyncExternalStore"],
      ])
        if (!re.test(react.text)) throw new Error(`${rel}: React bundle guard failed (${what}) — readable changed shape`);
      const after = stmts[4];
      if (!after || !/`mage`/.test(after.text) || !/S\[e\]\?\.class/.test(after.text))
        throw new Error(`${rel}: app resume anchor (class-table head) not found after the React bundle`);
      claim(3, 3, {
        kind: "whole",
        file: `${tag}-react-vendor.js`,
        title: `${tag} — React 19.3.0 bundle (react + react-dom + scheduler, vendor region, whole-file, never sliced)`,
        body:
          "the bundled React 19.3.0 runtime the app renders with — the react element/portal/transitional " +
          "symbols, the hooks dispatcher, `useSyncExternalStore`, the prod error decoder " +
          "(`react.dev/errors`, `Minified React error #…`), the React DevTools hook, the scheduler and " +
          "`react-dom` (createRoot/flushSync/preconnect and the whole reconciler) — all wrapped as CJS " +
          "modules under the rollup `__commonJS` require helper in one declaration. Vendor, not app code. " +
          "Vendor rule — indexed whole-file in readable/, never sliced or rewritten.",
      });
    }

    if (tag === "assets__fx3d-DiRK8ozf") {
      if (stmts[0].node.type !== "ImportDeclaration" || !/"\.\/index-BTsv3a2s\.js"/.test(stmts[0].text))
        throw new Error(`${rel}: first statement is not the import from ./index-BTsv3a2s.js — readable changed shape`);
      // the bundled three.js r186 engine region ends with the WebGLRenderer
      // class (the minifier merged the game's particle-shader/palette tables
      // into the same declaration, so they stay inside the wholeFile region)
      const vs = stmts.findIndex((s) => /_getUnpackColorSpace/.test(s.text) && /WebGLRenderer/.test(s.text));
      if (vs < 1) throw new Error(`${rel}: three.js region end anchor (WebGLRenderer/_getUnpackColorSpace) not found`);
      const regionText = lines.slice(1, stmts[vs].endLine).join("\n");
      for (const [re, what] of [
        [/WebGLRenderer/, "WebGLRenderer"],
        [/__THREE__\s*=\s*`186`/, "three.js r186 registration"],
        [/revision:\s*`186`/, "three.js revision 186"],
        [/WebGLProgram/, "WebGLProgram"],
      ])
        if (!re.test(regionText)) throw new Error(`${rel}: three.js vendor region guard failed (${what}) — readable changed shape`);
      const after = stmts[vs + 1];
      if (!after || !/function Nu\(e\)/.test(after.text) || !/parseInt\(e\.slice\(1\), 16\)/.test(after.text))
        throw new Error(`${rel}: app resume anchor (palette color helper) not found after the three.js region`);
      claim(1, vs, {
        kind: "whole",
        file: `${tag}-three-vendor.js`,
        title: `${tag} — bundled three.js r186 engine (vendor region, whole-file, never sliced)`,
        body:
          "the bundled three.js r186 engine (three.core/three.module — math, color management, textures, " +
          "geometries, materials, objects, renderers, `window.__THREE__` revision 186 registration) up to " +
          "and including the WebGLRenderer class. The minifier merged the game's particle-shader table " +
          "(precision/bayer4/rampAt shaders) and the element-palette tables into the same variable " +
          "declaration as the WebGLRenderer class — declaration boundaries cannot cut inside it, so the " +
          "region carries them; the app's remaining code resumes at the palette color helper (guarded). " +
          "Vendor rule — indexed whole-file in readable/, never sliced or rewritten.",
      });
    }

    if (tag === "assets__hd2d-FOjpdF4f") {
      if (!/__vite__mapDeps/.test(stmts[0].text))
        throw new Error(`${rel}: first statement is not the __vite__mapDeps table — readable changed shape`);
      claim(0, 0, {
        kind: "whole",
        file: `${tag}-chunk-machinery.js`,
        title: `${tag} — chunk machinery head (__vite__mapDeps table; whole-file, never sliced)`,
        body:
          "the Vite-generated `__vite__mapDeps` chunk table (the GLTFLoader/fx3d chunk pair this 2D " +
          "renderer chunk may preload) — build machinery, not app code; indexed whole-file in readable/, " +
          "never sliced.",
      });
    }

    let exportSkip = null;
    const lastStmt = stmts[stmts.length - 1];
    if (
      lastStmt &&
      lastStmt.node.type === "ExportNamedDeclaration" &&
      !covered[stmts.length - 1] &&
      /^export\s*\{[\s\S]*\}\s*;?$/.test(lastStmt.text.trim()) &&
      !/\bfrom\b/.test(lastStmt.text)
    ) {
      claim(stmts.length - 1, stmts.length - 1, {
        kind: "skip",
        file: `${tag}-tail-export.js`,
        title: `${tag} — final export table (not sliced)`,
        desc: `Lines ${lastStmt.startLine}-${lastStmt.endLine}. The chunk's final export {…} table — the exported bindings live in the earlier slices; a standalone tail carries no new statements, so it is indexed only.`,
      });
    }

    // runs of uncovered statements -> windows
    const runs = [];
    for (let i = 0; i < stmts.length; i++) {
      if (covered[i]) continue;
      const run = [stmts[i]];
      while (i + 1 < stmts.length && !covered[i + 1]) run.push(stmts[++i]);
      runs.push(run);
    }
    const slices = [];
    for (const run of runs) for (const w of windowize(run)) slices.push(w);

    // blocks in line order, then re-tile so every line of the pretty is owned
    const blocks = [...specials, ...slices.map((w) => ({ kind: "slice", A: w.startLine, B: w.endLine, count: w.count }))];
    blocks.sort((a, b) => a.A - b.A);
    for (let i = 0; i < blocks.length; i++) {
      if (i === 0) blocks[i].A = 1;
      if (i + 1 < blocks.length) blocks[i].B = blocks[i + 1].A - 1;
      else blocks[i].B = lines.length;
    }

    let nn = 0;
    let perFileSkipped = 0;
    let perFileVendor = 0;
    for (const b of blocks) {
      if (b.kind === "slice") {
        nn++;
        const num = String(nn).padStart(2, "0");
        const body = lines.slice(b.A - 1, b.B).join("\n") + "\n";
        const ms = markers(body);
        const topWord = ms.length ? ms[0][0] : /^\s*import\b/.test(body) ? "imports" : tag.toLowerCase();
        const oversized = b.count === 1 && b.B - b.A + 1 > MAX_WINDOW;
        const file = `${tag}-${num}.js`;
        const sliceText =
          `// ${tag} ${num} — ${topWord}\n` +
          `// Lines ${b.A}-${b.B} of ${sourceFile} (statement-aligned).\n` +
          body;
        const chk = parses(sliceText);
        if (!chk.ok) throw new Error(`generated src/${file} does not parse standalone: ${chk.why}`);
        fs.writeFileSync(path.join(srcDir, file), sliceText);
        written.src.add(file);
        sections.push({
          file,
          title: `${tag} ${num} — ${topWord}`,
          desc: `${oversized ? "Oversized single declaration (kept whole). " : ""}Lines ${b.A}-${b.B}. Markers: ${markerText(ms)}.`,
          startLine: b.A,
          endLine: b.B,
          sourceFile,
        });
      } else if (b.kind === "whole") {
        perFileVendor++;
        sections.push({
          file: b.file,
          wholeFile: true,
          title: b.title,
          desc: `Lines ${b.A}-${b.B} of ${sourceFile}: ${b.body}`,
          note: "whole-file region (build machinery/vendor rule): indexed in readable/, never sliced",
          startLine: b.A,
          endLine: b.B,
          sourceFile,
        });
      } else {
        perFileSkipped++;
        sections.push({
          file: b.file,
          skipped: true,
          title: b.title,
          desc: b.desc,
          startLine: b.A,
          endLine: b.B,
          sourceFile,
          firstLine: lines[b.A - 1],
          lastLine: lines[b.B - 1],
        });
      }
    }
    slicedTotal += nn;
    skippedTotal += perFileSkipped;
    sources.push({
      sourceFile,
      capture: rel,
      captureKind: "file",
      captureSha256: manifest.files[rel].sha256,
      captureBytes: buf.length,
      prettyLines: lines.length,
      prettyBytes: Buffer.byteLength(pretty, "utf8"),
      prettyPasses: fmt.passes,
      idempotent: true,
      tag,
      slices: nn,
      derived:
        `readable + ${nn} statement-aligned slice(s)` +
        (perFileVendor ? ` + ${perFileVendor} wholeFile region(s)` : "") +
        (perFileSkipped ? ` + ${perFileSkipped} skipped section(s)` : ""),
    });
    console.log(
      `derive: ${rel} -> ${sourceFile} (${lines.length} lines, ${nn} slices, ${perFileVendor} wholeFile, ${perFileSkipped} skipped, ${fmt.passes} pass(es))`,
    );
  }

  // ── 2) CSS: readable pretty, wholeFile section (stylesheet rule) ────────
  for (const rel of cssRels) {
    const buf = captureBytes(rel);
    const text = buf.toString("utf8");
    const fmt = await formatFixpoint(prettier, text, "css");
    const pretty = fmt.out;
    if (pretty === text) throw new Error(`${rel}: prettier output is byte-identical to the capture`);
    const sourceFile = prettyRelFor(rel);
    fs.writeFileSync(path.join(proj, sourceFile), pretty);
    written.readable.add(path.basename(sourceFile));
    const lines = linesOf(pretty);
    const tag = tagOf(rel);
    sections.push({
      file: `${tag}.css`,
      wholeFile: true,
      title: `${tag} — stylesheet (whole-file, never sliced)`,
      desc: `Lines 1-${lines.length} of ${sourceFile}. Whole-file (stylesheet rule): the capture stylesheet is indexed whole in readable/, never sliced.`,
      note: "whole-file (stylesheet, not sliced): CSS is indexed whole in readable/",
      startLine: 1,
      endLine: lines.length,
      sourceFile,
    });
    sources.push({
      sourceFile,
      capture: rel,
      captureKind: "file",
      captureSha256: manifest.files[rel].sha256,
      captureBytes: buf.length,
      prettyLines: lines.length,
      prettyBytes: Buffer.byteLength(pretty, "utf8"),
      prettyPasses: fmt.passes,
      idempotent: true,
      tag,
      slices: 0,
      derived: "readable only (stylesheet, wholeFile)",
    });
    console.log(`derive: ${rel} -> ${sourceFile} (${lines.length} lines, wholeFile stylesheet, ${fmt.passes} pass(es))`);
  }

  // ── 3) HTML entry document: inline <script>/<style> scan + twins ───────
  for (const rel of htmlRels) {
    const buf = captureBytes(rel);
    const blocks = scanBlocks(buf);
    const inline = blocks.filter((b) => !b.external);
    const external = blocks.filter((b) => b.external);
    inlineFiles.push(rel);
    for (const b of external)
      console.log(`derive: ${rel}: external ${b.kind} (not derived): ${b.tag.slice(0, 90)}`);
    if (!inline.length) {
      console.log(`derive: ${rel}: no inline <script>/<style> content blocks — no inline twins`);
      continue;
    }
    const entryTag = rel.replace(/\.html$/i, "").split("/").join("__");
    for (const b of inline) {
      const isImportmap = b.kind === "importmap";
      const parser = isImportmap ? "json" : b.kind;
      const DATA_TYPES = new Set(["application/ld+json", "application/json", "importmap", "speculationrules"]);
      const type = (/\btype\s*=\s*["']?([^"'\s>]+)/i.exec(b.tag)?.[1] ?? "").toLowerCase();
      if (parser === "script" && DATA_TYPES.has(type)) {
        notRendered.push({
          capture: rel,
          kind: "inline-data",
          type,
          byteStart: b.contentStart,
          byteEnd: b.contentEnd,
          bytes: b.bytes,
          sha256: b.sha256,
          rendered: false,
          reason: `typed data block (<script type="${type}">) — data, not JS/CSS; recorded with range + sha256, no pretty pass`,
        });
        continue;
      }
      const tag = `${entryTag}-inline-${b.block}`;
      const prettyFile = `${tag}.pretty.${isImportmap ? "json" : b.kind === "style" ? "css" : "js"}`;
      const fmt = await formatFixpoint(prettier, b.text, parser);
      const pretty = fmt.out;
      if (pretty === b.text)
        throw new Error(`readable/${prettyFile} would be byte-identical to its capture source`);
      fs.writeFileSync(path.join(readableDir, prettyFile), pretty);
      written.readable.add(prettyFile);
      const lines = linesOf(pretty);
      const prettyBuf = Buffer.from(pretty, "utf8");
      sections.push({
        file: `${tag}.${isImportmap ? "json" : b.kind === "style" ? "css" : "js"}`,
        wholeFile: true,
        title: `${tag} — inline ${b.kind} block (whole-file, never sliced)`,
        desc: `Lines 1-${lines.length} of readable/${prettyFile}. Whole-file: the entry document's inline ${b.kind} block (${b.bytes} B at bytes ${b.contentStart}-${b.contentEnd} of ${rel}) is indexed whole and never sliced.`,
        note: `whole-file (entry inline ${b.kind} block, not sliced)`,
        startLine: 1,
        endLine: lines.length,
        sourceFile: `readable/${prettyFile}`,
      });
      sources.push({
        sourceFile: `readable/${prettyFile}`,
        capture: rel,
        captureKind: `inline-${b.kind}`,
        captureByteStart: b.contentStart,
        captureByteEnd: b.contentEnd,
        captureSha256: b.sha256,
        captureBytes: b.bytes,
        prettyLines: lines.length,
        prettyBytes: prettyBuf.length,
        prettySha256: sha256(prettyBuf),
        prettyPasses: fmt.passes,
        tag,
        slices: 0,
        derived: "readable only (inline block, wholeFile)",
      });
    }
  }

  // ── 4) prune orphan derived files (capture untouched) ──────────────────
  let pruned = 0;
  for (const [dir, keep, exts] of [
    [readableDir, written.readable, /\.(pretty\.js|pretty\.css)$/],
    [srcDir, written.src, /\.js$/],
  ]) {
    for (const f of fs.readdirSync(dir)) {
      if (exts.test(f) && !keep.has(f)) {
        fs.rmSync(path.join(dir, f));
        pruned++;
        console.log(`derive: pruned orphan derived file ${path.join(path.basename(dir), f)}`);
      }
    }
  }

  // ── 5) split-spec.json (2-space indent + trailing newline) ─────────────
  const appJs = sources.filter((s) => s.derived.startsWith("readable +"));
  const vendorJsS = sources.filter((s) => /wholeFile\)$/.test(s.derived) && s.capture.endsWith(".js"));
  const cssSources = sources.filter((s) => s.sourceFile.endsWith(".pretty.css"));
  const spec = {
    project: "aetherfall",
    kind: "statement-aligned-slices",
    defaultFile: `src/${sections.find((s) => !s.wholeFile && !s.skipped).file}`,
    note:
      "AETHERFALL (https://aetherfall.dev/) is capture-class: a Vite production build of an epic " +
      "pixel-art fantasy MMO RPG served at the origin root behind Cloudflare. §0.4 fork-over-mirror was " +
      "checked on 2026-10-12 — the page and its JS reference no public source repo (GitHub search finds " +
      "only this mirror's own repo; the bundle's only absolute links are docs.convex.dev and the deployed " +
      "AWS API endpoint), so the mirror stands. Derived pipeline: capture → pinned prettier 3.9.6 (module " +
      "API, default options, iterated to a fixed point — the index chunk needs a second pass on one " +
      "member-chain region; never the CLI: it respects .gitignore and can silently echo its input) → " +
      "readable/<name>.pretty.js|css per captured JS/CSS file (nested dirs flattened with __; every pretty " +
      "provably NOT byte-identical to its capture source) → statement-aligned slices src/<name>-NN.js of " +
      "every APP chunk (top-level declaration boundaries only, ~250-350 line windows; oversized single " +
      "declarations stay whole) with an exact 2-line provenance header. Every slice parses standalone " +
      "under `node --input-type=module --check -` and round-trips byte-exact to its recorded readable line " +
      "range. Vendor rule — wholeFile sections, never sliced: assets/GLTFLoader-MfgfXc7d.js (the three.js " +
      "examples/jsm GLTFLoader addon chunk), the bundled three.js r186 engine region inside " +
      "assets/fx3d-DiRK8ozf.js (up to and including the WebGLRenderer class; the minifier merged the " +
      "game's particle-shader/palette tables into the same declaration as the class, so the wholeFile " +
      "region carries them — the app resumes at the guarded palette color helper), and the React 19.3.0 " +
      "bundle region inside assets/index-BTsv3a2s.js (react + react-dom + scheduler CJS modules under the " +
      "rollup require helper). Machinery rule — the __vite__mapDeps table and the Vite modulepreload " +
      "polyfill opening the index chunk (plus the rollup CJS interop helpers), and the __vite__mapDeps " +
      "table opening the hd2d chunk, are wholeFile. Stylesheet rule — assets/index-CrHozmsT.css is " +
      "wholeFile. Non-standalone parts are skipped sections, indexed but never sliced: every app chunk's " +
      "final export {…} table (the bindings live in the earlier slices). Inline <script>/<style> scan: " +
      "index.html references external chunks only — zero inline content blocks, so there are no " +
      "*-inline-N twins and no index-inline-map.json. Identifiers in src/ are the bundle's own minified " +
      "names — the rename campaign (PLAN §5) is recorded as an open task in README.md, not claimed here. " +
      "Capture bytes are untouched by everything above; re-cut with `node tools/derive.mjs` after any " +
      "capture refresh. `node tools/audit.js` is the gate.",
    renderOptions: {
      _default:
        "prettier 3.9.6, module API, default options, iterated to a fixed point (format until format(out) === out; the index chunk needs 2 format passes, 3rd confirms; never the CLI: it respects .gitignore and can silently echo its input)",
      js: "parser babel, no plugins",
      css: "parser css, no plugins",
      json: "parser json, no plugins (inline importmap blocks, if any)",
    },
    source:
      `readable/: ${sources.filter((s) => s.sourceFile?.endsWith(".pretty.js")).length} JS pretties ` +
      `(${appJs.length} app chunk(s) sliced, ${vendorJsS.length} vendor wholeFile) + ` +
      `${cssSources.length} CSS pretties; ` +
      `src/: ${appJs.reduce((n, s) => n + s.slices, 0)} statement-aligned slices across ${appJs.length} app chunk(s); ` +
      `${sections.filter((s) => s.skipped).length} skipped section(s); ` +
      `${sections.filter((s) => s.wholeFile).length} wholeFile section(s); ` +
      `capture: ${captured.length} files under .upstream/manifest.json; inline scan: ${inlineFiles.join(", ")} ` +
      `(0 inline content blocks).`,
    inline: {
      scanned: inlineFiles,
      contentBlocks: 0,
      notRendered: notRendered.length,
      note:
        "no inline <script>/<style> content blocks in the captured entry document — external chunk references " +
        "only, so there are no *-inline-N twins and no readable/index-inline-map.json",
    },
    sources,
    sections,
    notRendered,
  };
  fs.writeFileSync(path.join(proj, "split-spec.json"), JSON.stringify(spec, null, 2) + "\n");

  // ── 6) self-check (tools/audit.js is the authoritative gate) ────────────
  let bad = 0;
  const bySource = new Map();
  for (const s of sections) {
    if (!bySource.has(s.sourceFile)) bySource.set(s.sourceFile, []);
    bySource.get(s.sourceFile).push(s);
  }
  for (const [sourceFile, list] of bySource) {
    const lines = readLines(path.join(proj, sourceFile));
    const sorted = [...list].sort((a, b) => a.startLine - b.startLine);
    if (sorted[0].startLine !== 1) {
      console.error(`TILING FAIL ${sourceFile}: starts at line ${sorted[0].startLine}`);
      bad++;
    }
    for (let i = 1; i < sorted.length; i++)
      if (sorted[i].startLine !== sorted[i - 1].endLine + 1) {
        console.error(`TILING FAIL ${sourceFile}: gap/overlap at ${sorted[i].file}`);
        bad++;
      }
    if (sorted[sorted.length - 1].endLine !== lines.length) {
      console.error(`TILING FAIL ${sourceFile}: does not reach EOF (${lines.length})`);
      bad++;
    }
  }
  let parsed = 0;
  let ranged = 0;
  let roundOK = 0;
  for (const s of sections) {
    if (s.wholeFile || s.skipped) continue;
    ranged++;
    const abs = path.join(srcDir, s.file);
    const text = fs.readFileSync(abs, "utf8");
    const nl2 = text.indexOf("\n", text.indexOf("\n") + 1);
    const body = text.slice(nl2 + 1);
    const expected = readLines(path.join(proj, s.sourceFile)).slice(s.startLine - 1, s.endLine).join("\n") + "\n";
    if (body !== expected) {
      console.error(`ROUND-TRIP FAIL ${s.file}`);
      bad++;
    } else roundOK++;
    if (!parses(text).ok) {
      console.error(`PARSE FAIL src/${s.file}`);
      bad++;
    } else parsed++;
  }
  let prettyParsed = 0;
  for (const s of sources) {
    if (!s.sourceFile?.endsWith(".pretty.js")) continue;
    if (!parses(fs.readFileSync(path.join(proj, s.sourceFile), "utf8")).ok) {
      console.error(`PARSE FAIL ${s.sourceFile}`);
      bad++;
    } else prettyParsed++;
  }
  console.log(
    `derive: ${written.readable.size} readable file(s), ${written.src.size} src slices ` +
      `(${parsed}/${ranged} parse standalone, ${roundOK}/${ranged} round-trip byte-exact), ` +
      `${skippedTotal} skipped, ${sections.filter((s) => s.wholeFile).length} wholeFile, ` +
      `${prettyParsed} pretty js parse clean, ${notRendered.length} notRendered, ${pruned} orphan(s) pruned — ` +
      `self-check ${bad ? bad + " FAILURE(S)" : "clean"}`,
  );
  if (bad) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
