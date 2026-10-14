// index-BTsv3a2s 63 — math
// Lines 38653-38692 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function ay(e, t = 0) {
  let n = Yp(`prop`, e);
  if (n) {
    let e = Xp(n, `loop`, `idle`),
      r = e.frames.length;
    return {
      c: e.frames[((Math.floor((t * e.fps) / 8) % r) + r) % r],
      ax: n.meta.ax,
      ay: n.meta.ay,
    };
  }
  let r = ry[e],
    i = r.frames > 1 ? ((t % r.frames) + r.frames) % r.frames : 0,
    a = `${e}:${i}`,
    o = iy.get(a);
  if (o) return o;
  let [s, c] = M(r.w + 2, r.h + 2);
  (c.save(),
    c.translate(1, 1),
    r.draw(c, i),
    c.restore(),
    !r.soft && r.layer !== `decal` && F(s, N_));
  let l = { c: s, ax: r.ax + 1, ay: r.ay + 1 };
  return (iy.set(a, l), l);
}
function oy(e, t, n, r, i, a) {
  let o = Math.ceil(Math.hypot(r - t, i - n) / 1.5),
    s = [];
  for (let e = 0; e <= o; e++) {
    let c = e / o,
      l = t + (r - t) * c,
      u = n + (i - n) * c - Math.sin(c * Math.PI) * 3,
      d = (((c - a * 2) % 1) + 1) % 1;
    s.push([Math.round(l), Math.round(u), d < 0.1]);
  }
  e.globalAlpha = 0.35;
  for (let [t, n] of s) N(e, t - 1, n - 1, `#861222`, 3, 3);
  e.globalAlpha = 1;
  for (let [t, n, r] of s) N(e, t, n, r ? `#ffffff` : `#e0484e`);
}
