// assets__index-BTsv3a2s 232 — math
// Lines 147116-147208 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function U6(e, t) {
  let n = un[e],
    r = t ?? n.args?.[0],
    i = O6() === `epic`;
  if (n.layer === `stand`)
    return (i ? H6(hse, e, 8, 0, r, 1)?.c : null) ?? B6(e, r, 1).c;
  let a = k6(O6());
  if (n.layer === `floor`) {
    let [e, t] = M(n.w * 16 * a, n.h * 16 * a);
    return (
      i
        ? dI(t, { lx: 0, ly: 0, w: n.w, h: n.h, color: r ?? `#7a2f2a` })
        : JI(t, { lx: 0, ly: 0, w: n.w, h: n.h, color: r ?? `#7a2f2a` }),
      jp(e, a)
    );
  }
  let [o, s] = M(n.w * 16 * a, 32 * a);
  ((s.imageSmoothingEnabled = !1),
    A6(s, P6(`plaster`), 0, 0, n.w * 16, 32, 0, 0, o.width, o.height));
  let c = { name: D6[e], arg: r || void 0, lx: 0, w: n.w };
  return (
    (!i || !bI(s, { x0: 0, y0: 0, seed: E6 }, c, [])) &&
      (s.scale(a, a), YI(s, { x0: 0, y0: 0 }, c, [])),
    jp(o, a)
  );
}
function W6(e, t, n) {
  let r = un[t.kind],
    i = (e.y0 + t.y + r.h) * 16,
    a = O6() === `epic` ? H6(e, t.kind, t.x, t.y, t.arg, n) : null;
  if (a)
    return {
      c: a.c,
      x: a.x,
      y: a.y,
      baseY: i - 1,
      lights: a.lights.map((e) => ({ ...e, x: a.x + e.x, y: a.y + e.y })),
    };
  let o = B6(t.kind, t.arg, n),
    s = (e.x0 + t.x) * 16 - 1,
    c = i + 1 - o.c.height;
  return {
    c: o.c,
    x: s,
    y: c,
    baseY: i - 1,
    lights: (o.lights ?? []).map((e) => ({ ...e, x: s + e.x, y: c + e.y })),
  };
}
var G6 = new Map();
function K6(e, t) {
  let n = G6.get(e);
  return (n || ((n = t().toDataURL()), G6.set(e, n)), n);
}
function gse(e) {
  return K6(`floor:${e}:${O6()}`, () => {
    let t = k6(O6()),
      [n, r] = M(32 * t, 32 * t);
    return (A6(r, M6(e), 0, 0, 32, 32, 0, 0, n.width, n.height), n);
  });
}
function _se(e) {
  return K6(`wall:${e}:${O6()}`, () => {
    let t = k6(O6()),
      [n, r] = M(32 * t, 32 * t);
    return (A6(r, P6(e), 0, 0, 32, 32, 0, 0, n.width, n.height), n);
  });
}
function q6(e, t) {
  return K6(`furn:${e}:${t ?? ``}:${O6()}`, () => U6(e, t));
}
var vse = en(),
  yse = 12,
  J6 = { left: 0.28, right: 0.28, up: 0.12, down: 0.18 },
  Y6 = new Set([
    `fence`,
    `lamp`,
    `barrel`,
    `planter`,
    `cauldron`,
    `tree`,
    `pine`,
  ]),
  X6 = new Set([`bed`, `flowers`]);
function Z6(e, t, n, r = 0) {
  let i = Mp(e),
    a = Np(e);
  return [
    Math.ceil(Math.max(t, i - t)) + 1,
    Math.ceil(Math.max(n, r)) + 1,
    Math.ceil(Math.max(0, a - n)) + 1,
  ];
}
