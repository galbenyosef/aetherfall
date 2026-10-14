// assets__index-BTsv3a2s 172 — math
// Lines 98743-98779 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Pae(e) {
  let [t, n] = M(e.width, e.height);
  return (n.translate(0, e.height), n.scale(1, -1), n.drawImage(e, 0, 0), t);
}
function IH(e, t) {
  let n = FH[t].get(e);
  return (n || FH[t].set(e, (n = e.map(t === `x` ? Ip : Pae))), n);
}
function Fae(e, t, n, r, i) {
  let [a, o] = M(r, i);
  return (o.drawImage(e, t, n, r, i, 0, 0, r, i), a);
}
function LH(e, t, n, r, i = 1, a = 1) {
  ((e.fillStyle = r), e.fillRect(Math.round(t), Math.round(n), i, a));
}
function Iae(e, t, n, r = !1) {
  (LH(e, t - 1, n - 1, OH[3], 2, 2),
    LH(e, t - 1, n - 1, r ? `#ffffff` : OH[4]));
}
function RH(e, t, n, r, i, a, o, s, c = 0) {
  let l = Math.hypot(r - t, i - n);
  if (l < 1) return;
  let u = (r - t) / l,
    d = (i - n) / l;
  for (let r = c; r < l; r += a) LH(e, t + u * r, n + d * r, s);
  if (o > 0)
    for (let r = c + o; r < l - 2; r += o)
      Iae(e, t + u * r + 0.5, n + d * r + 0.5);
}
function Lae(e, t, n, r, i, a = !1) {
  let o = Math.max(12, Math.ceil(jH * r));
  for (let s = 0; s < o; s++) {
    if (a && s % 4 >= 2) continue;
    let c = (s / o) * jH;
    LH(e, t + Math.cos(c) * r, n + (Math.sin(c) * r) / 1.1, i);
  }
}
