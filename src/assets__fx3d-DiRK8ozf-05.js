// assets__fx3d-DiRK8ozf 05 — math
// Lines 27594-27645 of readable/assets__fx3d-DiRK8ozf.pretty.js (statement-aligned).
var hd = new W(),
  gd = new W(),
  _d = new W();
function vd(e, t, n, r, i) {
  hd.set(t[0] - e[0], t[1] - e[1], t[2] - e[2]);
  let a = hd.length() || 1;
  (hd.divideScalar(a),
    gd.crossVectors(hd, cd),
    gd.lengthSq() < 1e-4 && gd.set(1, 0, 0),
    gd.normalize(),
    _d.crossVectors(hd, gd).normalize());
  let o = [e, t],
    s = a * n;
  for (let e = 0; e < r; e++) {
    let e = [o[0]];
    for (let t = 0; t < o.length - 1; t++) {
      let n = o[t],
        r = o[t + 1],
        a = (i() - 0.5) * 2 * s,
        c = (i() - 0.5) * 2 * s * 0.5;
      e.push(
        [
          (n[0] + r[0]) / 2 + gd.x * a + _d.x * c,
          (n[1] + r[1]) / 2 + gd.y * a + _d.y * c,
          Math.max(0, (n[2] + r[2]) / 2 + gd.z * a + _d.z * c),
        ],
        r,
      );
    }
    ((o = e), (s *= 0.52));
  }
  return o;
}
function yd(e, t, n, r, i, a, o) {
  (hd.set(t[0] - e[0], t[1] - e[1], t[2] - e[2]),
    hd.normalize(),
    gd.crossVectors(hd, cd),
    gd.lengthSq() < 1e-4 && gd.set(1, 0, 0),
    gd.normalize());
  let s = [];
  for (let c = 0; c <= n; c++) {
    let l = c / n,
      u = Math.sin(Math.PI * l),
      d = r * u + i * u * Math.sin(l * a * Math.PI * 2 + o);
    s.push([
      e[0] + (t[0] - e[0]) * l + gd.x * d,
      e[1] + (t[1] - e[1]) * l + gd.y * d,
      Math.max(0, e[2] + (t[2] - e[2]) * l + gd.z * d),
    ]);
  }
  return s;
}
