// derive.mjs — rebuild the derived layers (readable/ + src/ + split-spec.json)
// for aetherfall from the recorded capture (PLAN §3/§5). AETHERFALL
// (https://aetherfall.dev/) is capture-class: a Vite production build of an
// epic pixel-art fantasy MMO RPG served at the origin root behind Cloudflare.
// The capture is untouched; every source file is re-hashed against
// .upstream/manifest.json before it is rendered, so a drifted capture fails
// loudly instead of being silently re-derived.
//
// Structure decided from BYTES (tools/probe-structure.mjs, 2026-10-14): the
// capture carries real `import`/`export` specifiers (the fx3d chunk imports
// its shared bindings from ./index-BTsv3a2s.js, the runtime dynamic-imports
// fx3d/hd2d through the entry's __vite__mapDeps table), zero module-factory
// signatures (no __webpack_require__/Turbopack), no sourceMappingURL and no
// *.map files — the app chunks are FLAT Vite production ES modules, so
// statement-aligned slices are the true boundary (the taipei-rush-tokyo /
// clawd-rpg flat-ESM precedent; the factory-family split is inapplicable).
// The capture preserves the served URL structure (index.html at the root +
// assets/ + audio/ under it), so the derived layers mirror it (PLAN §5
// served-path paragraph): readable/assets/<chunk>.pretty.js and
// src/assets/<chunk>-NN.js — the served path is the truth, no __ flattening.
//
// Pipeline:
//   each capture *.js -> pinned prettier 3.9.6 (module API — the CLI respects
//                        .gitignore and can silently echo its input), iterated
//                        to a fixed point (the index chunk needs a second pass
//                        on one member-chain region; the loop stops when
//                        format(out) === out) -> readable/<served path>.pretty.js
//   each capture *.css -> readable/<served path>.pretty.css, wholeFile section
//                        (stylesheet rule: stylesheets are never sliced).
//   index.html          -> inline <script>/<style> scan (byte ranges + sha256):
//                        external chunk references only — zero inline content
//                        blocks, so there are no *-inline-N twins and no
//                        readable/index-inline-map.json.
//   wholeFile regions (never sliced, never renamed):
//     assets/index-BTsv3a2s.js  [entry] the chunk-machinery head
//                                        (__vite__mapDeps table + rollup CJS
//                                        interop helpers + Vite modulepreload
//                                        polyfill) and the bundled React
//                                        19.3.0 bundle (react + react-dom +
//                                        scheduler CJS modules under the
//                                        rollup require helper).
//     assets/fx3d-DiRK8ozf.js          the bundled three.js r186 engine
//                                        (three.core/three.module up to and
//                                        including the WebGLRenderer class; the
//                                        minifier merged the game's
//                                        particle-shader/palette tables into
//                                        the same declaration, so the region
//                                        carries them — the app resumes at the
//                                        guarded palette color helper).
//     assets/hd2d-FOjpdF4f.js          the __vite__mapDeps head.
//     assets/GLTFLoader-MfgfXc7d.js    the whole three.js GLTFLoader addon chunk.
//   app regions -> statement-aligned slices src/assets/<chunk>-NN.js at
//                        top-level declaration boundaries, ~250-350 line
//                        windows (oversized single declarations stay whole),
//                        exact 2-line provenance header; every slice is
//                        parse-checked with `node --input-type=module --check -`
//                        and round-trips byte-exact to its readable line range
//                        — through the recorded rename map where the slice is
//                        renamed.
//   skipped sections (indexed, no src file): every app chunk's final
//                        `export {…}` table (the bindings live in the earlier
//                        slices; the recorded renameBindings reach the renamed
//                        ones at reconstruction time).
//
// The rename layer (PLAN §5 campaign, closed 2026-10-14): tools/names.json
// (reviewed) -> tools/apply-names.mjs -> rename-map.json (recovered
// mechanically by tools/recover-scoped-map.mjs) -> re-applied here on every
// re-cut through tools/engine/rename-layer.mjs (index-validated). The readable
// layer stays PRISTINE (the bundle's own minified names); only src/ carries
// semantic names. Each chunk's fired app bindings are recorded as
// sources[].renameBindings for the reconstruction gates (turfwar's (t)(1)
// mechanism: the index-only export tables are reached through the binding map).
// Pipeline order: apply -> recover -> derive -> gates.
//
// Superseded derived files are archived to legacy/<date>/ (proposal (o)), both
// readable/ and src/ — never silently dropped. usage:
//   node tools/derive.mjs           # re-cut readable/ + src/ + split-spec.json
//   node tools/derive.mjs --check   # re-render + byte-compare, write nothing
//   node tools/derive.mjs --check   # re-render + byte-compare, write nothing
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { applyRecordedMap } from "./engine/rename-layer.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
const PINNED = "3.9.6";
const MAX_PASSES = 6; // prettier fixed point: format until format(out) === out
const WINDOW_MAX = 350; // ~250-350 line windows; oversized declarations stay whole
const TODAY = "2026-10-14"; // structure/rename pass: superseded layers archive to legacy/<date>/
const checkOnly = process.argv.includes("--check");
const problems = [];
const problem = (msg) => problems.push(msg);

const sha256 = (buf) => crypto.createHash("sha256").update(buf).digest("hex");
const linesOf = (text) => text.replace(/\n$/, "").split("\n");
const readLines = (abs) => {
  const l = fs.readFileSync(abs, "utf8").split("\n");
  if (l.length && l[l.length - 1] === "") l.pop();
  return l;
};
const lineOf = (text, offset) => text.slice(0, offset).split("\n").length;
// served-path naming (PLAN §5): the capture preserves the served URL structure
// (index.html + assets/), so a pretty mirrors the served path and a slice adds
// the -NN suffix under the same path (src/assets/<chunk>-NN.js). The tag (for
// slice titles/headers) is the basename without extension.
const servedStemOf = (capRel) => capRel.replace(/\.(js|css|html)$/i, "");
const tagOf = (capRel) => servedStemOf(capRel).split("/").pop();
const prettyRelFor = (capRel) =>
  "readable/" + servedStemOf(capRel) + (/\.css$/i.test(capRel) ? ".pretty.css" : ".pretty.js");

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
async function formatFixed(prettier, text, parser) {
  let out = text;
  let passes = 0;
  for (let i = 0; i < MAX_PASSES; i++) {
    const next = await prettier.format(out, { parser });
    passes++;
    if (next === out) return { out, passes, stable: true };
    out = next;
  }
  throw new Error(`prettier ${parser} does not reach a fixed point in ${MAX_PASSES} passes`);
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
  const counts = new Map();
  for (const m of text.matchAll(/[A-Za-z][A-Za-z0-9_]{2,}/g)) {
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
    if (projected > WINDOW_MAX) {
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

// ── per-chunk block plans (content-anchored, asserted) ──────────────────
// A plan claims statement ranges as wholeFile vendor regions or skipped
// machinery; every unclaimed statement is windowized into slices. Anchors are
// asserted against the pretty text so a drifted capture fails loudly.
function planChunk(rel, tag, stem, stmts, sourceFile) {
  const whole = [];
  const skip = [];
  const runs = [];
  const covered = new Array(stmts.length).fill(false);
  const claimWhole = (a, b, file, title, desc) => {
    if (a < 0 || b < a || b >= stmts.length) throw new Error(`${rel}: bad whole range ${a}-${b}`);
    for (let i = a; i <= b; i++) {
      if (covered[i]) throw new Error(`${rel}: whole region overlaps at stmt ${i}`);
      covered[i] = true;
    }
    whole.push({ kind: "whole", a, b, file, title, desc });
  };
  const claimSkip = (i, file, title, desc) => {
    if (i < 0 || i >= stmts.length) throw new Error(`${rel}: bad skip index ${i}`);
    if (covered[i]) throw new Error(`${rel}: skip overlaps at stmt ${i}`);
    covered[i] = true;
    skip.push({ kind: "skip", a: i, b: i, file, title, desc });
  };
  const assert = (cond, msg) => {
    if (!cond) throw new Error(`${rel}: ${msg}`);
  };
  const find = (pred, from = 0) => {
    for (let i = from; i < stmts.length; i++) if (pred(stmts[i], i)) return i;
    return -1;
  };
  const tailExportSkip = (tail) => {
    assert(stmts[tail].node.type === "ExportNamedDeclaration", "chunk does not end in an export table");
    claimSkip(
      tail,
      `${stem}-tail-export.js`,
      `${tag} — final export table (not sliced)`,
      `Lines ${stmts[tail].startLine}-${stmts[tail].endLine}. The chunk's final export {…} table — the exported bindings live in the earlier slices; a standalone tail carries no new statements, so it is indexed only, and the recorded renameBindings reach its renamed local bindings at reconstruction time.`,
    );
  };

  if (rel === "assets/GLTFLoader-MfgfXc7d.js") {
    // ── whole-file vendor bundle: the three.js GLTFLoader addon chunk ────
    const text = stmts.map((s) => s.text).join("\n");
    for (const [re, what] of [
      [/GLTFLoader/, "GLTFLoader"],
      [/DRACOLoader/, "DRACOLoader"],
      [/KTX2Loader/, "KTX2Loader"],
      [/MeshoptDecoder/, "MeshoptDecoder"],
    ])
      if (!re.test(text)) throw new Error(`${rel}: whole-file vendor guard failed (${what}) — readable changed shape`);
    claimWhole(
      0,
      stmts.length - 1,
      `${stem}-vendor.js`,
      `${tag} — three.js GLTFLoader addon chunk (vendor, whole-file, never sliced)`,
      `Lines ${stmts[0].startLine}-${stmts[stmts.length - 1].endLine} of ${sourceFile}: the Vite-split three.js examples/jsm GLTFLoader addon chunk (\`class GLTFLoader extends Loader\` with its KHR_* plugin callbacks, the GLTF mesh/primitive extensions, the DRACOLoader/MeshoptDecoder/KTX2Loader integration hooks) that the runtime dynamic-imports from fx3d/hd2d — third-party addon, not app code. Vendor rule — indexed whole-file in readable/, never sliced or rewritten.`,
    );
    return { whole, skip, runs };
  }

  if (rel === "assets/index-BTsv3a2s.js") {
    // ── entry chunk: machinery head, React vendor region, app run, export ──
    assert(/__vite__mapDeps/.test(stmts[0].text), "stmt 0 is not the __vite__mapDeps table");
    assert(
      /Object\.create/.test(stmts[1].text) && /Object\.defineProperty/.test(stmts[1].text),
      "stmt 1 is not the rollup CJS interop helpers",
    );
    assert(/modulepreload/.test(stmts[2].text), "stmt 2 is not the Vite modulepreload polyfill");
    claimWhole(
      0,
      2,
      `${stem}-chunk-machinery.js`,
      `${tag} — chunk machinery head (__vite__mapDeps table, rollup CJS interop helpers, Vite modulepreload polyfill; whole-file, never sliced)`,
      `Lines ${stmts[0].startLine}-${stmts[2].endLine} of ${sourceFile}: the Vite-generated __vite__mapDeps chunk table (the hd2d/fx3d pair this entry may preload), the rollup CJS interop helpers (__create/__defProp/__getOwnPropDesc/__getOwnPropNames/__getProtoOf/__hasOwnProp/__commonJS/__toESM/__export) and the Vite modulepreload polyfill IIFE (link[rel=modulepreload] relList.supports check + MutationObserver fetch warm-up) — build machinery, not app code; indexed whole-file in readable/, never sliced.`,
    );
    // stmt 3: the React 19.3.0 vendor bundle (react + react-dom + scheduler
    // CJS modules under the rollup require helper, one declaration)
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
    assert(after && /`mage`/.test(after.text) && /S\[e\]\?\.class/.test(after.text), "app resume anchor (class-table head) not found after the React bundle");
    claimWhole(
      3,
      3,
      `${stem}-react-vendor.js`,
      `${tag} — React 19.3.0 bundle (react + react-dom + scheduler, vendor region, whole-file, never sliced)`,
      `Lines ${react.startLine}-${react.endLine} of ${sourceFile}: the bundled React 19.3.0 runtime the app renders with — the react element/portal/transitional symbols, the hooks dispatcher, \`useSyncExternalStore\`, the prod error decoder (\`react.dev/errors\`, \`Minified React error #…\`), the React DevTools hook, the scheduler and \`react-dom\` (createRoot/flushSync/preconnect and the whole reconciler) — all wrapped as CJS modules under the rollup \`__commonJS\` require helper in one declaration. Vendor, not app code. Vendor rule — indexed whole-file in readable/, never sliced or rewritten.`,
    );
    const tail = stmts.length - 1;
    tailExportSkip(tail);
    runs.push([4, tail - 1]);
  } else if (rel === "assets/fx3d-DiRK8ozf.js") {
    // ── fx3d renderer chunk: import, bundled three.js r186, app, export ────
    assert(
      stmts[0].node.type === "ImportDeclaration" && /"\.\/index-BTsv3a2s\.js"/.test(stmts[0].text),
      "first statement is not the import from ./index-BTsv3a2s.js",
    );
    // the bundled three.js r186 engine region ends with the WebGLRenderer
    // class (the minifier merged the game's particle-shader/palette tables
    // into the same declaration, so they stay inside the wholeFile region)
    const vs = find((s) => /_getUnpackColorSpace/.test(s.text) && /WebGLRenderer/.test(s.text), 1);
    assert(vs >= 1, "three.js region end anchor (WebGLRenderer/_getUnpackColorSpace) not found");
    const regionText = stmts
      .slice(1, vs + 1)
      .map((s) => s.text)
      .join("\n");
    for (const [re, what] of [
      [/WebGLRenderer/, "WebGLRenderer"],
      [/__THREE__\s*=\s*`186`/, "three.js r186 registration"],
      [/revision:\s*`186`/, "three.js revision 186"],
      [/WebGLProgram/, "WebGLProgram"],
    ])
      if (!re.test(regionText)) throw new Error(`${rel}: three.js vendor region guard failed (${what}) — readable changed shape`);
    const after = stmts[vs + 1];
    assert(after && /function Nu\(e\)/.test(after.text) && /parseInt\(e\.slice\(1\), 16\)/.test(after.text), "app resume anchor (palette color helper) not found after the three.js region");
    claimWhole(
      1,
      vs,
      `${stem}-three-vendor.js`,
      `${tag} — bundled three.js r186 engine (vendor region, whole-file, never sliced)`,
      `Lines ${stmts[1].startLine}-${stmts[vs].endLine} of ${sourceFile}: the bundled three.js r186 engine (three.core/three.module — math, color management, textures, geometries, materials, objects, renderers, \`window.__THREE__\` revision 186 registration) up to and including the WebGLRenderer class. The minifier merged the game's particle-shader table (precision/bayer4/rampAt shaders) and the element-palette tables into the same variable declaration as the WebGLRenderer class — declaration boundaries cannot cut inside it, so the region carries them; the app's remaining code resumes at the palette color helper (guarded). Vendor rule — indexed whole-file in readable/, never sliced or rewritten.`,
    );
    const tail = stmts.length - 1;
    tailExportSkip(tail);
    runs.push([0, 0], [vs + 1, tail - 1]);
  } else if (rel === "assets/hd2d-FOjpdF4f.js") {
    // ── hd2d renderer chunk: mapDeps head, app, export ─────────────────────
    assert(/__vite__mapDeps/.test(stmts[0].text), "first statement is not the __vite__mapDeps table");
    claimWhole(
      0,
      0,
      `${stem}-chunk-machinery.js`,
      `${tag} — chunk machinery head (__vite__mapDeps table; whole-file, never sliced)`,
      `Lines ${stmts[0].startLine}-${stmts[0].endLine} of ${sourceFile}: the Vite-generated __vite__mapDeps chunk table (the GLTFLoader/fx3d/index pair this 2D renderer chunk may preload) — build machinery, not app code; indexed whole-file in readable/, never sliced.`,
    );
    const tail = stmts.length - 1;
    tailExportSkip(tail);
    runs.push([1, tail - 1]);
  } else {
    throw new Error(`${rel}: no block plan recorded for this chunk — a new capture chunk needs a plan`);
  }

  // coverage check: every statement is either claimed or inside a run
  for (let i = 0; i < stmts.length; i++) {
    const inRun = runs.some(([a, b]) => i >= a && i <= b);
    if (!covered[i] && !inRun) throw new Error(`${rel}: statement ${i} is neither claimed nor in a run`);
    if (covered[i] && inRun) throw new Error(`${rel}: statement ${i} is both claimed and in a run`);
  }
  return { whole, skip, runs };
}
async function main() {
  const { mod: prettier, at } = await loadPrettier();
  console.log(`pinned prettier ${PINNED} (${at})`);

  const manifest = JSON.parse(fs.readFileSync(path.join(proj, ".upstream", "manifest.json"), "utf8"));
  const captured = Object.keys(manifest.files).sort();
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
  if (!checkOnly) {
    fs.mkdirSync(readableDir, { recursive: true });
    fs.mkdirSync(srcDir, { recursive: true });
  }
  const written = { readable: new Set(), src: new Set() };
  // superseded derived files move to legacy/<date>/ (proposal (o): both the
  // superseded src/ and readable/ layers are archived, never silently dropped)
  let archived = 0;
  const archiveSuperseded = (rel) => {
    const abs = path.join(proj, rel);
    if (!fs.existsSync(abs)) return;
    const old = fs.readFileSync(abs);
    const dest = path.join(proj, "legacy", TODAY, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (fs.existsSync(dest)) {
      // already archived on an earlier pass — only drop the stale copy when the
      // archive holds the same bytes (never overwrite history)
      if (!fs.readFileSync(dest).equals(old))
        throw new Error(`${rel}: superseded copy differs from legacy/${TODAY}/${rel} — refusing to overwrite the archive`);
      fs.rmSync(abs);
      return;
    }
    fs.renameSync(abs, dest);
    archived++;
    console.log(`SUPERSEDED ${rel} -> legacy/${TODAY}/${rel}`);
  };
  // The readable layer stays PRISTINE (the capture's own names); the rename
  // layer lives in src/ only, applied on every re-cut through the recorded map.
  const writeReadable = (rel, text) => {
    // keep sets are root-relative (the prune walk compares them against paths
    // relative to readable/ / src/)
    written.readable.add(rel.startsWith("readable/") ? rel.slice("readable/".length) : rel);
    if (checkOnly) {
      const abs = path.join(proj, rel);
      if (!fs.existsSync(abs) || fs.readFileSync(abs, "utf8") !== text)
        problem(`--check: ${rel} does not match a fresh render`);
      return;
    }
    const abs = path.join(proj, rel);
    if (fs.existsSync(abs) && fs.readFileSync(abs, "utf8") !== text) archiveSuperseded(rel);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, text);
  };
  const writeSrc = (file, text) => {
    written.src.add(file);
    if (checkOnly) {
      const abs = path.join(srcDir, file);
      if (!fs.existsSync(abs) || fs.readFileSync(abs, "utf8") !== text)
        problem(`--check: src/${file} does not match a fresh render`);
      return;
    }
    const abs = path.join(srcDir, file);
    if (fs.existsSync(abs) && fs.readFileSync(abs, "utf8") !== text) archiveSuperseded(path.posix.join("src", file));
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, text);
  };

  // ── recorded rename map (PLAN §5 campaign; may not exist on the first cut) ─
  const renameMapPath = path.join(proj, "rename-map.json");
  let renameMap = { files: {}, scoped: {} };
  if (fs.existsSync(renameMapPath)) {
    const parsedMap = JSON.parse(fs.readFileSync(renameMapPath, "utf8"));
    renameMap = { files: parsedMap.files || {}, scoped: parsedMap.scoped || {} };
    console.log(
      `derive: rename map: ${Object.keys(renameMap.files).length} word-boundary file(s), ${Object.keys(renameMap.scoped).length} indexed file(s)`,
    );
  }
  const recordFor = (file) => {
    const files = renameMap.files[file];
    const scoped = renameMap.scoped[file];
    return files || scoped ? { files, scoped } : null;
  };
  const renameStats = { slices: 0, flat: 0, indexed: 0, occurrences: 0 };

  const sources = [];
  const sections = [];
  const inlineMapBlocks = [];
  const inlineFiles = [];
  const notRendered = [];
  let slicedTotal = 0;
  let skippedTotal = 0;
  let wholeTotal = 0;

  const jsRels = captured.filter((r) => /\.js$/i.test(r));
  const cssRels = captured.filter((r) => /\.css$/i.test(r));
  const htmlRels = captured.filter((r) => /\.html$/i.test(r));

  // ── 1) JS chunks: block map -> wholeFile regions / skipped / slices ────
  for (const rel of jsRels) {
    const buf = captureBytes(rel);
    const text = buf.toString("utf8");
    if (!Buffer.from(text, "utf8").equals(buf)) throw new Error(`${rel} does not round-trip through utf8`);
    const { out: pretty, passes } = await formatFixed(prettier, text, "babel");
    if (pretty === text) throw new Error(`${rel}: prettier output is byte-identical to the capture — nothing to derive`);
    const tag = tagOf(rel);
    const stem = servedStemOf(rel);
    const sourceFile = prettyRelFor(rel);
    writeReadable(sourceFile, pretty);
    const lines = linesOf(pretty);

    // pretty must parse standalone as a module (ESM stdin gate)
    const prettyChk = parses(pretty);
    if (!prettyChk.ok) throw new Error(`${sourceFile} does not parse standalone: ${prettyChk.why}`);

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

    const { whole, skip, runs } = planChunk(rel, tag, stem, stmts, sourceFile);

    // blocks in line order, then re-tile so every line of the pretty is owned
    const blocks = [];
    for (const w of whole) blocks.push({ ...w, A: stmts[w.a].startLine, B: stmts[w.b].endLine });
    for (const s of skip) blocks.push({ ...s, A: stmts[s.a].startLine, B: stmts[s.b].endLine });
    for (const [ra, rb] of runs)
      for (const w of windowize(stmts.slice(ra, rb + 1)))
        blocks.push({ kind: "slice", A: w.startLine, B: w.endLine, count: w.count });
    blocks.sort((a, b) => a.A - b.A);
    for (let i = 0; i < blocks.length; i++) {
      if (i + 1 < blocks.length) blocks[i].B = blocks[i + 1].A - 1;
      else blocks[i].B = lines.length;
      if (i === 0) blocks[i].A = 1;
    }
    if (blocks[0].A !== 1 || blocks[blocks.length - 1].B !== lines.length)
      throw new Error(`${rel}: block tiling does not cover the pretty`);

    let nn = 0;
    let perFileSkipped = 0;
    let perFileWhole = 0;
    for (const b of blocks) {
      if (b.kind === "slice") {
        nn++;
        const num = String(nn).padStart(2, "0");
        const raw = lines.slice(b.A - 1, b.B).join("\n") + "\n";
        const file = `${stem}-${num}.js`;
        const record = recordFor(file);
        let body = raw;
        if (record) {
          try {
            body = applyRecordedMap(raw, record);
          } catch (e) {
            throw new Error(`src/${file}: recorded rename map does not apply: ${e.message}`);
          }
          if (body.split("\n").length !== raw.split("\n").length)
            throw new Error(`src/${file}: recorded rename changed the line count — refusing`);
          renameStats.slices++;
          renameStats.flat += Object.keys(record.files || {}).length;
          for (const hits of Object.values(record.scoped || {})) {
            renameStats.indexed++;
            renameStats.occurrences += hits.length;
          }
        }
        const ms = markers(body);
        const topWord = ms.length ? ms[0][0] : tag.toLowerCase();
        const oversized = b.count === 1 && b.B - b.A + 1 > WINDOW_MAX;
        const sliceText =
          `// ${tag} ${num} — ${topWord}\n` +
          `// Lines ${b.A}-${b.B} of ${sourceFile} (statement-aligned).\n` +
          body;
        const chk = parses(sliceText);
        if (!chk.ok) throw new Error(`generated src/${file} does not parse standalone: ${chk.why}`);
        writeSrc(file, sliceText);
        sections.push({
          file,
          title: `${tag} ${num} — ${topWord}`,
          desc:
            `${oversized ? "Oversized single declaration (kept whole). " : ""}Lines ${b.A}-${b.B}. Markers: ${markerText(ms)}.` +
            (record ? " Range re-cut through the recorded semantic rename map." : ""),
          startLine: b.A,
          endLine: b.B,
          sourceFile,
        });
      } else if (b.kind === "whole") {
        wholeTotal++;
        perFileWhole++;
        sections.push({
          file: b.file,
          wholeFile: true,
          title: b.title,
          desc: b.desc,
          note: "whole-file region (vendor/machinery rule): indexed whole in readable/, never sliced",
          startLine: b.A,
          endLine: b.B,
          sourceFile,
        });
      } else {
        skippedTotal++;
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
    sources.push({
      sourceFile,
      capture: rel,
      captureKind: "file",
      captureSha256: manifest.files[rel].sha256,
      captureBytes: buf.length,
      prettyLines: lines.length,
      prettyBytes: Buffer.byteLength(pretty, "utf8"),
      prettyPasses: passes,
      tag,
      slices: nn,
      derived:
        `readable + ${nn} statement-aligned slice(s)` +
        (perFileWhole ? `, ${perFileWhole} wholeFile vendor region(s)` : "") +
        (perFileSkipped ? `, ${perFileSkipped} skipped section(s)` : ""),
      renameBindings: {}, // filled in below for chunks whose skipped sections spell renamed bindings
    });
    console.log(
      `derive: ${rel} -> ${sourceFile} (${lines.length} lines, ${nn} slices, ${perFileWhole} wholeFile, ${perFileSkipped} skipped)`,
    );
  }

  // ── 2) CSS: readable pretty, wholeFile section (stylesheet rule) ────────
  for (const rel of cssRels) {
    const buf = captureBytes(rel);
    const text = buf.toString("utf8");
    const { out: pretty, passes } = await formatFixed(prettier, text, "css");
    if (pretty === text) throw new Error(`${rel}: prettier output is byte-identical to the capture`);
    const tag = tagOf(rel);
    const stem = servedStemOf(rel);
    const sourceFile = prettyRelFor(rel);
    writeReadable(sourceFile, pretty);
    const lines = linesOf(pretty);
    sections.push({
      file: `${stem}.css`,
      wholeFile: true,
      title: `${tag} — stylesheet (whole-file, never sliced)`,
      desc: `Lines 1-${lines.length} of ${sourceFile}. whole-file (stylesheet rule): the capture stylesheet is indexed whole in readable/ and never sliced or rewritten.`,
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
      prettyPasses: passes,
      tag,
      slices: 0,
      derived: "readable only (stylesheet, wholeFile)",
    });
    console.log(`derive: ${rel} -> ${sourceFile} (${lines.length} lines, wholeFile stylesheet)`);
  }

  // ── 3) HTML entry documents: inline <script>/<style> scan + twins ───────
  for (const rel of htmlRels) {
    const buf = captureBytes(rel);
    const blocks = scanBlocks(buf);
    const inline = blocks.filter((b) => !b.external);
    const external = blocks.filter((b) => b.external);
    inlineFiles.push(rel);
    for (const b of external) {
      const urlish = /\b(?:src|href)\s*=\s*["']([^"']+)["']/i.exec(b.tag);
      console.log(`derive: ${rel}: external ${b.kind} (not derived): ${urlish ? urlish[1] : b.tag.slice(0, 90)}`);
    }
    if (!inline.length) {
      console.log(`derive: ${rel}: no inline <script>/<style> content blocks — no inline twins`);
      continue;
    }
    const entryTag = rel.replace(/\.html$/i, "").split("/").join("__");
    for (const b of inline) {
      const isImportmap = b.kind === "importmap";
      const DATA_TYPES = new Set(["application/ld+json", "application/json", "importmap", "speculationrules"]);
      const type = (/\btype\s*=\s*["']?([^"'\s>]+)/i.exec(b.tag)?.[1] ?? "").toLowerCase();
      if (b.kind === "script" && DATA_TYPES.has(type)) {
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
      const parser = isImportmap ? "json" : b.kind === "style" ? "css" : "babel"; // script blocks parse as babel (the (q) fix)
      const tag = `${entryTag}-inline-${b.block}`;
      const prettyFile = `${tag}.pretty.${isImportmap ? "json" : b.kind === "style" ? "css" : "js"}`;
      const { out: pretty, passes } = await formatFixed(prettier, b.text, parser);
      if (pretty === b.text)
        throw new Error(`readable/${prettyFile} would be byte-identical to its capture source`);
      writeReadable(`readable/${prettyFile}`, pretty);
      const lines = linesOf(pretty);
      const prettyBuf = Buffer.from(pretty, "utf8");
      inlineMapBlocks.push({
        file: `readable/${prettyFile}`,
        source: rel,
        kind: b.kind,
        block: b.block,
        tagOpen: b.tag,
        byteStart: b.contentStart,
        byteEnd: b.contentEnd,
        bytes: b.bytes,
        sha256: b.sha256,
        parsedAs: parser,
        prettyPasses: passes,
        prettyLines: lines.length,
        prettyBytes: prettyBuf.length,
        prettySha256: sha256(prettyBuf),
        note: `${lines.length} lines prettified from ${b.bytes} B of inline ${b.kind} #${b.block} (capture bytes ${b.contentStart}-${b.contentEnd} of ${rel})`,
      });
      wholeTotal++;
      sections.push({
        file: `${tag}.${isImportmap ? "json" : b.kind === "style" ? "css" : "js"}`,
        wholeFile: true,
        title: `${tag} — inline ${b.kind} block (whole-file, never sliced)`,
        desc: `Lines 1-${lines.length} of readable/${prettyFile}. whole-file (inline-block rule): the entry document's inline ${b.kind} block (${b.bytes} B at bytes ${b.contentStart}-${b.contentEnd} of ${rel}) is indexed whole and never sliced.`,
        note: `whole-file (entry inline ${b.kind} block, not sliced)`,
        startLine: 1,
        endLine: lines.length,
        sourceFile: `readable/${prettyFile}`,
      });
      sources.push({
        sourceFile: `readable/${prettyFile}`,
        capture: rel,
        captureKind: isImportmap ? "inline-importmap" : `inline-${b.kind}`,
        captureBlock: b.block,
        captureByteStart: b.contentStart,
        captureByteEnd: b.contentEnd,
        captureSha256: b.sha256,
        captureBytes: b.bytes,
        prettyLines: lines.length,
        prettyPasses: passes,
        tag,
        slices: 0,
        derived: "readable only (inline block, wholeFile)",
      });
      console.log(`derive: ${rel}: inline ${b.kind} #${b.block} -> readable/${prettyFile} (${lines.length} lines)`);
    }
  }
  // index-inline-map.json is written only when inline blocks exist — aetherfall
  // has zero (external chunk references only), so there is no *-inline-N twin
  // and no readable/index-inline-map.json (audit: a map without blocks is a
  // problem, a capture without blocks needs no map).
  if (inlineMapBlocks.length) {
    const htmlText = htmlRels.length ? fs.readFileSync(path.join(proj, htmlRels[0]), "utf8") : "";
    const linkRe = /<link\b[^>]*\brel\s*=\s*["']stylesheet["'][^>]*>/gi;
    const externalStyles = [];
    let m;
    while ((m = linkRe.exec(htmlText))) {
      const hm = m[0].match(/\bhref\s*=\s*["']([^"']+)["']/i);
      if (hm) externalStyles.push(hm[1]);
    }
    const externalScripts = [];
    const srcRe = /<script\b[^>]*\bsrc\s*=\s*["']([^"']+)["'][^>]*>/gi;
    while ((m = srcRe.exec(htmlText))) externalScripts.push(m[1]);
    writeReadable(
      "readable/index-inline-map.json",
      JSON.stringify(
        {
          source: htmlRels.length ? htmlRels[0] : null,
          sourceBytes: Buffer.byteLength(htmlText),
          sourceSha256: sha256(Buffer.from(htmlText, "utf8")),
          captureManifestSha256: htmlRels.length ? manifest.files[htmlRels[0]].sha256 : null,
          scripts: inlineMapBlocks.filter((b) => b.kind === "script").length,
          styles: inlineMapBlocks.filter((b) => b.kind === "style").length,
          externalScripts,
          externalStyles,
          blocks: inlineMapBlocks,
          note: `${inlineMapBlocks.length} inline block(s) twinned under readable/ and recorded here with capture byte ranges + sha256 (PLAN §5 inline-block rule).`,
        },
        null,
        2,
      ) + "\n",
    );
    console.log(`derive: readable/index-inline-map.json (${inlineMapBlocks.length} inline block(s))`);
  } else {
    console.log("derive: zero inline content blocks — no readable/index-inline-map.json");
  }

  // ── 4b) renameBindings: each chunk's fired app rules, recorded per source
  //        for the reconstruction gates (t)(1) — only names the chunk's
  //        index-only skipped sections actually spell get recorded (minimal,
  //        honest reach: without them the reconstructed export tables would
  //        still reference the dry minified bindings).
  {
    const namesPath = path.join(proj, "tools", "names.json");
    if (fs.existsSync(namesPath)) {
      const appByCapture = JSON.parse(fs.readFileSync(namesPath, "utf8")).app || {};
      for (const src of sources) {
        const app = appByCapture[src.capture] || {};
        if (!Object.keys(app).length) continue;
        const skippedText = sections
          .filter((s) => s.skipped === true && s.sourceFile === src.sourceFile)
          .map((s) => readLines(path.join(proj, s.sourceFile)).slice(s.startLine - 1, s.endLine).join("\n"))
          .join("\n");
        const bindings = {};
        for (const [from, to] of Object.entries(app)) {
          const re = new RegExp(`(?<![\\w$])${from.replace(/[$]/g, "\\$")}(?![\\w$])`);
          if (re.test(skippedText)) bindings[from] = to;
        }
        src.renameBindings = bindings;
        if (Object.keys(bindings).length)
          console.log(`derive: ${src.capture}: renameBindings (skipped-section reach): ${Object.keys(bindings).length} name(s)`);
      }
    }
  }

  // ── 5) prune orphan derived files: archive to legacy/<date>/ (proposal (o)) ─
  let pruned = 0;
  const walkDerived = (dir, root, keep, exts, label) => {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) {
        walkDerived(p, root, keep, exts, label);
        if (!fs.readdirSync(p).length) fs.rmSync(p, { recursive: true });
        continue;
      }
      if (!exts.test(e.name)) continue;
      const rel = path.relative(root, p).split(path.sep).join("/");
      if (keep.has(rel)) continue;
      if (checkOnly) {
        problem(`${label}/${rel} is not claimed by the plan (orphan — re-derive to archive it)`);
        continue;
      }
      archiveSuperseded(`${label}/${rel}`);
      pruned++;
      console.log(`derive: archived orphan derived file ${label}/${rel}`);
    }
  };
  walkDerived(readableDir, readableDir, written.readable, /\.pretty\.(js|css)$/, "readable");
  walkDerived(srcDir, srcDir, written.src, /\.js$/, "src");

  // ── 6) split-spec.json (2-space indent + trailing newline) ─────────────
  const appJs = sources.filter((s) => s.derived.startsWith("readable +"));
  const wholeJs = sections.filter((s) => s.wholeFile && String(s.sourceFile).endsWith(".pretty.js"));
  const vendorCss = sources.filter((s) => s.sourceFile.endsWith(".pretty.css") && s.captureKind === "file");
  const inlineTwins = sources.filter((s) => String(s.captureKind).startsWith("inline-"));
  const firstEntrySlice = sections.find((s) => s.file.includes("index-BTsv3a2s-") && !s.wholeFile && !s.skipped);
  const spec = {
    project: "aetherfall",
    kind: "flat-vite-esm-statement-aligned-slices",
    defaultFile: `src/${firstEntrySlice.file}`,
    note:
      "AETHERFALL (https://aetherfall.dev/) is capture-class: a Vite production build of an epic pixel-art fantasy MMO RPG " +
      "served at the origin root behind Cloudflare (client v0.7.16). Structure decided from BYTES (tools/probe-structure.mjs, " +
      "2026-10-14): real import/export specifiers (the fx3d chunk imports its shared bindings from ./index-BTsv3a2s.js; the " +
      "runtime dynamic-imports fx3d/hd2d through the entry's __vite__mapDeps table), zero module-factory signatures (no " +
      "__webpack_require__/Turbopack), no sourceMappingURL and no *.map files — FLAT Vite production ES modules, so " +
      "statement-aligned slices are the true boundary (the taipei-rush-tokyo / clawd-rpg flat-ESM precedent; the " +
      "factory-family split is inapplicable). The capture preserves the served URL structure (index.html at the root + " +
      "assets/ + audio/ under it), so the derived layers mirror it (PLAN §5 served-path paragraph): capture -> pinned " +
      "prettier 3.9.6 (module API, default options, iterated to a fixed point — the index chunk needs a second pass on one " +
      "member-chain region; never the CLI: it respects .gitignore and can silently echo its input) -> " +
      "readable/assets/<chunk>.pretty.js|css (the served path is the truth; every pretty provably NOT byte-identical to " +
      "its capture source) -> statement-aligned slices src/assets/<chunk>-NN.js of every APP region (top-level declaration " +
      "boundaries only, ~250-350 line windows; oversized single declarations stay whole) with an exact 2-line provenance " +
      "header. Every slice parses standalone under `node --input-type=module --check -` and round-trips byte-exact to its " +
      "recorded readable line range — through the recorded rename map where the slice is renamed. WholeFile sections, " +
      "never sliced (vendor/machinery rule): the entry chunk's chunk-machinery head (__vite__mapDeps table, rollup CJS " +
      "interop helpers, Vite modulepreload polyfill) and its bundled React 19.3.0 region (react + react-dom + scheduler " +
      "CJS modules under the rollup require helper; the app resumes at the guarded class-table head), the bundled " +
      "three.js r186 engine region inside assets/fx3d-DiRK8ozf.js (up to and including the WebGLRenderer class — the " +
      "minifier merged the game's particle-shader/palette tables into the same declaration, so the wholeFile region " +
      "carries them and the app resumes at the guarded palette color helper), the hd2d chunk's __vite__mapDeps head, the " +
      "whole assets/GLTFLoader-MfgfXc7d.js vendor chunk (three.js addon), and the stylesheet assets/index-CrHozmsT.css " +
      "(stylesheet rule). Non-standalone parts are skipped sections, indexed but never sliced: every app chunk's final " +
      "export {…} table (the bindings live in the earlier slices; the recorded renameBindings reach the renamed ones at " +
      "reconstruction time). Inline <script>/<style> scan: index.html references external chunks only — zero inline " +
      "content blocks, so there are no *-inline-N twins and no readable/index-inline-map.json. Rename layer (PLAN §5 " +
      "campaign, closed 2026-10-14; pipeline apply -> recover -> derive -> gates): tools/names.json (reviewed) -> " +
      "tools/apply-names.mjs -> rename-map.json (recovered mechanically by tools/recover-scoped-map.mjs) -> re-applied " +
      "here on every re-cut through tools/engine/rename-layer.mjs (index-validated). The readable layer stays pristine " +
      "(the bundle's own minified names); only src/ carries semantic names. sources[].renameBindings records, per chunk, " +
      "the fired app bindings its index-only export table spells — the reconstruction gates (verify-rename / check-chunk) " +
      "reach those sections through the binding map (turfwar's (t)(1) mechanism). Guards carried: marked " +
      "FunctionDeclaration/ClassDeclaration ids + shorthand-property refusal at preflight (kowloon (p) fixes), " +
      "brace-depth template scanning (vanta7 (r)), program-scope occurrences in wholeFile vendor regions refused + " +
      "per-source line cache (pelota (s)), index-only skipped sections reached via renameBindings ((t)(1)), the " +
      "`of`/`in` KEYWORD-position guard in the reconstruction binding map (dune-arrakis (x)), canonical " +
      "record-manifest SKIP/NOT_CAPTURED sets with --check (proposal (u)), the token-based import-specifier extractor " +
      "(embervale (ab)), the multi-pass prettier fixed-point re-render check in tools/audit.js (proposal (t)(3)), and " +
      "per-chunk target uniqueness in apply-names (proposal (ad), carried first here). Capture bytes are untouched by " +
      "everything above; superseded derived files are archived to legacy/<date>/ (proposal (o), both readable/ and " +
      "src/). Re-cut with `node tools/derive.mjs` after any capture refresh.",
    renderOptions: {
      _default:
        "prettier 3.9.6, module API, default options, iterated to a fixed point (format until format(out) === out; the index chunk needs 2 format passes, 3rd confirms; prettyPasses in sources counts format calls until confirmed; never the CLI: it respects .gitignore and can silently echo its input)",
      js: "parser babel, no plugins",
      css: "parser css, no plugins",
      json: "parser json, no plugins (inline importmap blocks, if any)",
      note: "The prettier CLI respects .gitignore and is never used; the module API renders every pretty.",
    },
    source:
      `readable/: ${sources.filter((s) => s.sourceFile?.endsWith(".pretty.js")).length} JS pretties ` +
      `(${appJs.length} app chunk(s) sliced, ${wholeJs.length} wholeFile region(s) in JS chunks) + ` +
      `${sources.filter((s) => s.sourceFile?.endsWith(".pretty.css")).length} CSS pretties; ` +
      `src/: ${appJs.reduce((n, s) => n + s.slices, 0)} statement-aligned slices across ${appJs.length} app chunk(s); ` +
      `capture: ${captured.length} files under .upstream/manifest.json; inline scan: ${inlineFiles.join(", ")} ` +
      `(${inlineMapBlocks.length} inline content block(s), ${notRendered.length} typed-data notRendered); ${skippedTotal} skipped section(s), ` +
      `${sections.filter((s) => s.wholeFile).length} wholeFile section(s).`,
    inline: {
      scanned: inlineFiles,
      contentBlocks: inlineMapBlocks.length,
      notRendered: notRendered.length,
      note:
        inlineMapBlocks.length > 0
          ? "inline blocks are derived to readable/<entry>-inline-N.pretty.{js,css} and recorded in readable/index-inline-map.json (byte ranges + sha256)"
          : "no inline <script>/<style> content blocks in the captured entry documents — external chunk references only, so there are no *-inline-N twins and no readable/index-inline-map.json",
    },
    rename: {
      map: "rename-map.json",
      slices: renameStats.slices,
      wordBoundaryNames: renameStats.flat,
      indexedNames: renameStats.indexed,
      indexedOccurrences: renameStats.occurrences,
      note:
        "Semantic rename layer (PLAN §5 campaign, closed 2026-10-14; pipeline apply -> recover -> derive -> gates). tools/names.json (reviewed) is " +
        "applied by tools/apply-names.mjs; rename-map.json is recovered mechanically by tools/recover-scoped-map.mjs and re-applied on every re-cut. " +
        "The readable layer stays pristine (the bundle's own minified names); only src/ carries semantic names. sources[].renameBindings records, per chunk, " +
        "the fired app bindings its index-only export table spells — the reconstruction gates (verify-rename / check-chunk) reach " +
        "those sections through the binding map (turfwar's (t)(1) mechanism).",
    },
    notRendered,
    sources,
    sections,
  };
  const specText = JSON.stringify(spec, null, 2) + "\n";
  const specPath = path.join(proj, "split-spec.json");
  if (checkOnly) {
    if (!fs.existsSync(specPath)) problem("split-spec.json missing (derive with: node tools/derive.mjs)");
    else if (fs.readFileSync(specPath, "utf8") !== specText)
      problem("split-spec.json is stale (re-derive with: node tools/derive.mjs)");
  } else {
    fs.writeFileSync(specPath, specText);
  }

  // ── 6) self-check (tools/audit.js is the authoritative gate) ────────────
  let bad = 0;
  const bySource = new Map();
  for (const s of sections) {
    if (!bySource.has(s.sourceFile)) bySource.set(s.sourceFile, []);
    bySource.get(s.sourceFile).push(s);
  }
  for (const [sourceFile, list] of bySource) {
    if (!fs.existsSync(path.join(proj, sourceFile))) continue;
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
    if (!fs.existsSync(abs)) {
      console.error(`MISSING src/${s.file}`);
      bad++;
      continue;
    }
    const text = fs.readFileSync(abs, "utf8");
    const nl2 = text.indexOf("\n", text.indexOf("\n") + 1);
    const body = text.slice(nl2 + 1);
    const raw = readLines(path.join(proj, s.sourceFile)).slice(s.startLine - 1, s.endLine).join("\n") + "\n";
    const record = recordFor(s.file);
    let expected = raw;
    try {
      expected = record ? applyRecordedMap(raw, record) : raw;
    } catch (e) {
      console.error(`ROUND-TRIP FAIL src/${s.file}: recorded map does not apply: ${e.message}`);
      bad++;
      continue;
    }
    if (body !== expected) {
      console.error(`ROUND-TRIP FAIL src/${s.file}${record ? " (through the recorded rename map)" : ""}`);
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
  // pretties provably not byte-identical to their capture sources
  for (const s of sources) {
    if (s.captureKind !== "file") continue;
    const cap = fs.readFileSync(path.join(proj, s.capture));
    const pr = fs.readFileSync(path.join(proj, s.sourceFile));
    if (cap.equals(pr)) {
      console.error(`NON-IDENTITY FAIL ${s.sourceFile} equals its capture`);
      bad++;
    }
  }
  for (const b of inlineMapBlocks) {
    const pr = fs.readFileSync(path.join(proj, b.file));
    const orig = Buffer.from(scanBlocks(fs.readFileSync(path.join(proj, b.source))).find((x) => !x.external && x.block === b.block).text, "utf8");
    if (pr.equals(orig)) {
      console.error(`NON-IDENTITY FAIL ${b.file} equals its inline capture block`);
      bad++;
    }
    if (sha256(orig) !== b.sha256) {
      console.error(`INLINE SHA FAIL ${b.file}`);
      bad++;
    }
  }
  console.log(
    `derive: ${written.readable.size} readable file(s), ${written.src.size} src slices ` +
      `(${parsed}/${ranged} parse standalone, ${roundOK}/${ranged} round-trip byte-exact), ` +
      `${skippedTotal} skipped, ${wholeTotal} wholeFile, ${prettyParsed} pretty js parse clean, ${pruned} orphan(s) pruned` +
      (archived ? `, ${archived} archived to legacy/${TODAY}/` : "") +
      ` — self-check ${bad ? bad + " FAILURE(S)" : "clean"}` +
      (checkOnly ? " [--check: write nothing]" : ""),
  );
  if (problems.length) {
    console.error(`derive --check: ${problems.length} problem(s)`);
    for (const p of problems.slice(0, 30)) console.error("  " + p);
    process.exit(1);
  }
  if (bad) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
