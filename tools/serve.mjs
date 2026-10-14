// serve.mjs — static file server for the AETHERFALL mirror (boot test /
// local play / serve probe). The origin served the site from the root, so
// this server serves the repo root as "/" with directory-index support.
// Missing files are an honest 404 (the origin's SPA fallback answered unknown
// paths with the entry document, deliberately NOT emulated) so capture gaps
// show up in a network-log review. The capture is served exactly as recorded
// (assets/, audio/, favicon.svg, manifest.webmanifest, index.html). Adapted
// from the fleet precedent (kals-valley / ziggy-card / stillwater / skyforge /
// clawd-rpg tools/serve.mjs).
//
// usage: node tools/serve.mjs [port]   (default 4325)
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
const port = Number(process.argv[2] || 4325);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".wasm": "application/wasm",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".mp3": "audio/mpeg",
  ".ogg": "audio/ogg",
  ".wav": "audio/wav",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".bin": "application/octet-stream",
  ".gz": "application/gzip",
  ".glb": "model/gltf-binary",
  ".webmanifest": "application/manifest+json",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
};

const server = http.createServer((req, res) => {
  let urlPath = "/";
  try {
    urlPath = decodeURIComponent(new URL(req.url ?? "/", "http://localhost").pathname);
  } catch {
    /* malformed request target (e.g. "//"): fall back to the root */
  }
  let rel = urlPath.replace(/^\/+/, "");
  let abs = path.join(proj, rel);
  if (!path.resolve(abs).startsWith(path.resolve(proj))) {
    res.writeHead(403).end("forbidden");
    return;
  }
  if (fs.existsSync(abs) && fs.statSync(abs).isDirectory()) abs = path.join(abs, "index.html");
  if (!fs.existsSync(abs) || !fs.statSync(abs).isFile()) {
    res.writeHead(404, { "content-type": "text/plain" }).end(`404 ${rel}`);
    console.log(`404 ${urlPath}`);
    return;
  }
  res.writeHead(200, { "content-type": TYPES[path.extname(abs).toLowerCase()] || "application/octet-stream" });
  fs.createReadStream(abs).pipe(res);
});

server.listen(port, "127.0.0.1", () => console.log(`serving ${proj} at http://127.0.0.1:${port}/`));
