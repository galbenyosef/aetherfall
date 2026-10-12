// update.mjs — read-only drift probe: re-fetch the live entry and every
// captured file, compare against .upstream/manifest.json. Never rewrites
// the capture.
//
// Adapted from _standard/templates/update.mjs for aetherfall (capture at the
// repo root: ORIGIN https://aetherfall.dev, ENTRY index.html, DISK_PREFIX "").
// Notes specific to this origin:
//   - the entry is fetched with browser Accept headers; aetherfall.dev is
//     Cloudflare-fronted and injects the Cloudflare Insights beacon script
//     into the HTML only for browser-shaped HTML requests — the capture was
//     taken that way, so the probe must be too;
//   - `static.cloudflareinsights.com/beacon.min.js/<version>` and the
//     data-cf-beacon JSON rotate — normalized on both sides;
//   - the origin has an SPA fallback: missing paths answer 200 with the entry
//     HTML, so a text/html body on a non-HTML capture rel is reported as
//     `html-fallback` (a masked 404), never silently accepted.
// usage: node tools/update.mjs [--json]
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
const ORIGIN = "https://aetherfall.dev";
const ENTRY = "index.html";
const DISK_PREFIX = "";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";
const MAX_PROBES = 800;

const sha = (b) => crypto.createHash("sha256").update(b).digest("hex");
async function getBuf(url, accept) {
  const r = await fetch(url, { headers: { "User-Agent": UA, Accept: accept || "*/*", "Accept-Language": "en-US,en;q=0.9" } });
  return { status: r.status, buf: r.ok ? Buffer.from(await r.arrayBuffer()) : null };
}
// disk rel -> served path ("" = origin root)
const servedOf = (rel) => (rel.startsWith(DISK_PREFIX) ? rel.slice(DISK_PREFIX.length) : rel);
// Rotating per-response noise — everything else must be byte-identical.
const normalize = (s) =>
  s
    // Cloudflare Insights beacon tag: version/integrity/JSON rotate per response
    .replace(/<script[^>]*static\.cloudflareinsights\.com\/beacon\.min\.js[^>]*><\/script>/g, "<script data-cf-beacon></script>")
    .replace(/ nonce="[^"]*"/g, "")
    .replace(/window\.__CF\$cv\$params=\{[^}]*\}/g, "window.__CF$cv$params=<token>")
    .replace(/\/cdn-cgi\/content\?id=[A-Za-z0-9._-]+/g, "/cdn-cgi/content?id=<beacon>")
    .replace(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/g, "<uuid>");

const manifest = JSON.parse(fs.readFileSync(path.join(proj, ".upstream", "manifest.json"), "utf8"));

const live = {};
const entryUrl = ORIGIN + "/" + servedOf(ENTRY);
const entry = await getBuf(entryUrl, "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8");
if (entry.status !== 200) {
  console.error(`live entry ${entryUrl} -> HTTP ${entry.status}`);
  process.exit(2);
}
live[ENTRY] = { buf: entry.buf };

// Probe every captured file directly — the manifest is the authoritative closure.
const rels = Object.keys(manifest.files)
  .filter((r) => r !== ENTRY)
  .sort()
  .slice(0, MAX_PROBES);
const masked = []; // SPA-fallback 200s served as HTML on non-HTML rels
for (const rel of rels) {
  const served = servedOf(rel);
  let r = await getBuf(ORIGIN + "/" + served);
  if (r.status !== 200 && served === "index.html") r = await getBuf(ORIGIN + "/", "text/html");
  if (r.status === 200 && r.buf && !/\.html?$/i.test(rel)) {
    const head = r.buf.subarray(0, 200).toString("utf8").trimStart().toLowerCase();
    if (head.startsWith("<!doctype html") || head.startsWith("<html")) {
      masked.push(rel);
      continue; // masked 404 — do not compare, will surface via hash row
    }
  }
  if (r.status === 200 && !live[rel]) live[rel] = { buf: r.buf };
}

const rows = [];
for (const [n, m] of Object.entries(manifest.files).sort()) {
  const l = live[n];
  if (!l) {
    rows.push({ file: n, state: "live-missing" });
    continue;
  }
  if (m.dynamic) continue; // rotating third-party payload: presence is the only stable signal
  if (n.endsWith(".html")) {
    const cap = path.join(proj, n);
    if (!fs.existsSync(cap)) continue;
    const a = normalize((l.buf ?? Buffer.alloc(0)).toString("utf8"));
    const b = normalize(fs.readFileSync(cap, "utf8"));
    if (a !== b) rows.push({ file: n, state: "changed" });
  } else if (m.sha256 !== sha(l.buf)) {
    rows.push({ file: n, state: "changed", mirror: m.sha256.slice(0, 12), live: sha(l.buf).slice(0, 12) });
  }
}
for (const rel of masked) if (!rows.some((r) => r.file === rel)) rows.push({ file: rel, state: "html-fallback (masked 404 upstream)" });
const changed = rows.filter((r) => r.state === "changed").length;
const missing = rows.filter((r) => r.state === "live-missing").length;
const fallbacks = rows.filter((r) => r.state.startsWith("html-fallback")).length;
if (process.argv.includes("--json")) {
  console.log(JSON.stringify({ origin: ORIGIN, checked: Object.keys(manifest.files).length, changed, missing, fallbacks, rows }, null, 2));
} else if (!rows.length) {
  console.log(`up to date: ${Object.keys(manifest.files).length} captured files identical upstream`);
} else {
  console.log(`DRIFT: ${changed} changed, ${missing} live-missing, ${fallbacks} html-fallback (of ${Object.keys(manifest.files).length} captured)`);
  for (const r of rows.slice(0, 40)) console.log(`  ${r.state.padEnd(14)} ${r.file}`);
  process.exit(1);
}
