// assets__index-BTsv3a2s 193 — math
// Lines 124449-124593 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var jJ = [
    `plant07`,
    `plant08`,
    `plant09`,
    `pot01`,
    `plant10`,
    `plant11`,
    `plant12`,
    `pot03`,
  ],
  MJ = [
    `barrel01`,
    `barrel04`,
    `crate01`,
    `crate03`,
    `crate07`,
    `barrel01`,
    `plant13`,
    `plant14`,
    `plant15`,
  ],
  NJ = [
    `prop/potted-plant-pack-0`,
    `prop/potted-plant-pack-1`,
    `prop/potted-plant-pack-2`,
    `prop/potted-flower-0`,
    `prop/potted-plant-pack-4`,
    `prop/bucket1`,
  ],
  PJ = [
    `prop/barrels-0`,
    `prop/barrels-1`,
    `prop/crates-0`,
    `prop/crates-1`,
    `prop/crates-pack-1`,
    `prop/grain-sacks-0`,
    `prop/potted-plant-pack-3`,
  ];
function FJ(e, t, n, r) {
  if (
    e.ref.t !== `building` ||
    !t.front ||
    (e.kind !== `house` && e.kind !== `shop`)
  )
    return [];
  let i = e.kind === `shop`,
    a = SA(e.tx, e.ty, 911),
    o = i ? 1 + +(a < 0.55) : a < 0.3 ? 0 : a < 0.8 ? 1 : 2,
    s = t.front.map(([e, t]) => [e, t]),
    c = ut(e.ref.opts),
    l = [];
  for (let t = 0; t < o; t++) {
    let a = SA(e.tx + t, e.ty, 912),
      o = sM(cJ(i ? PJ : NJ, a)),
      u = o ? { c: o.c, ay: o.ay } : bA(cJ(i ? MJ : jJ, a));
    if (!u) break;
    let d = Math.ceil(Mp(u.c)),
      f = s
        .filter(([e, t]) => t - e + 1 >= d)
        .sort(
          (e, t) =>
            Math.abs((e[0] + e[1]) / 2 - c.x) -
            Math.abs((t[0] + t[1]) / 2 - c.x),
        );
    if (!f.length) break;
    let p =
        f[
          Math.min(
            f.length - 1,
            Math.floor(SA(e.tx, e.ty + t, 913) * Math.min(2, f.length)),
          )
        ],
      m = p[1] < c.x,
      h = p[0] > c.x,
      g = p[1] - p[0] + 1 - d,
      _ =
        m && p[1] >= c.x - 4
          ? g
          : h && p[0] <= c.x + c.w + 4
            ? 0
            : Math.floor(SA(e.tx, e.ty, 914 + t) * (g + 1)),
      v = p[0] + _;
    (l.push({ c: u.c, x: n + v, y: r - u.ay }),
      s.splice(s.indexOf(p), 1),
      _ >= 3 && s.push([p[0], v - 2]),
      p[1] - (v + d) >= 2 && s.push([v + d + 1, p[1]]));
  }
  return l;
}
var IJ = 16,
  LJ = 2,
  RJ = 32;
function zJ() {
  return oM();
}
function BJ(e, t, n, r) {
  let i = sM(`tile/ruins-wall`),
    a = sM(`tile/ruins-wall-carved`),
    o = sM(`tile/ruins-top`),
    s = sM(`tile/ruins-step-dr`),
    c = sM(`tile/ruins-step-dl`);
  if (!i || !a || !o || !s || !c) return;
  let l = t.n,
    u = (e, n) => (e < 0 || n < 0 || e >= l || n >= l ? 0 : t.h[n * l + e]),
    d = (e, n) => {
      if (e < 0 || n < 0 || e >= l || n >= l) return !1;
      let r = n * l + e;
      return t.h[r] === RJ && t.pal[r] === 0 && !(t.flag[r] & Xn.ARCH);
    },
    f = (e) => d(e, n),
    p = (e, t) =>
      !d(e, t) || u(e, t + 1) >= RJ
        ? 0
        : !u(e - 1, t) && d(e + 1, t) && d(e + 1, t + 1)
          ? 1
          : !u(e + 1, t) && d(e - 1, t) && d(e - 1, t + 1)
            ? -1
            : 0;
  for (let t = 0; t < l; t++) {
    if (!f(t)) continue;
    let i = t * IJ * LJ,
      a = (n * IJ + IJ - r) * LJ,
      o = a - 98,
      s = a + 4,
      c = u(t - 1, n) ? 0 : LJ,
      l = u(t + 1, n) ? 0 : LJ;
    e.clearRect(i - c, o, 32 + c + l, s - o);
  }
  for (let d = 0; d < l; d++) {
    if (!f(d)) continue;
    let m = t.h[n * l + d],
      h = n * l + d,
      g = d * IJ * LJ,
      _ = (n * IJ + IJ - r) * LJ,
      v = p(d, n);
    if (v) {
      let t = (v > 0 ? s : c).c;
      e.drawImage(t, g, _ - t.height);
    } else if (u(d, n + 1) < m) {
      let r = t.flag[h] & Xn.BANNER ? a : i,
        o = r.frames[Math.floor(SA(d, n, 1601) * r.frames.length)];
      e.drawImage(o, g, _ - o.height);
    } else e.drawImage(o.c, g, _ - (IJ + m) * LJ);
  }
}
