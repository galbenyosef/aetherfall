// fx3d-DiRK8ozf 02 — parsehexcolor
// Lines 26681-26705 of readable/assets/fx3d-DiRK8ozf.pretty.js (statement-aligned).
function parseHexColor(e) {
  let t = parseInt(e.slice(1), 16);
  return [(t >> 16) & 255, (t >> 8) & 255, t & 255];
}
function paletteColor(e, t) {
  let [n, r, i] = parseHexColor(ju[Mu[e]][t]);
  return [n / 255, r / 255, i / 255];
}
function buildPaletteTexture() {
  let e = Mu.length,
    t = new Uint8Array(5 * e * 4);
  Mu.forEach((e, n) => {
    ju[e].forEach((e, r) => {
      let [i, a, o] = parseHexColor(e);
      t.set([i, a, o, 255], (n * 5 + r) * 4);
    });
  });
  let n = new xi(t, 5, e, j, g);
  return (
    (n.magFilter = n.minFilter = u),
    (n.generateMipmaps = !1),
    (n.needsUpdate = !0),
    n
  );
}
