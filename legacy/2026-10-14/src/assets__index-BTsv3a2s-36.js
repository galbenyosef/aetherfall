// assets__index-BTsv3a2s 36 — math
// Lines 28869-29097 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Cf(e, t) {
  let n = e - t;
  for (; n > Math.PI;) n -= Math.PI * 2;
  for (; n < -Math.PI;) n += Math.PI * 2;
  return n;
}
function wf(e, t, n) {
  switch (e.t) {
    case `circle`:
      return Math.hypot(t - e.x, (n - e.y) * 1.1) <= e.r;
    case `ring`: {
      let r = Math.hypot(t - e.x, (n - e.y) * 1.1);
      return r < e.r0 || r > e.r1
        ? !1
        : e.gap === void 0 ||
            Math.abs(Cf(Math.atan2((n - e.y) * 1.1, t - e.x), e.gap)) >
              (e.gapW ?? 0) / 2;
    }
    case `line`: {
      let r = e.x1 - e.x0,
        i = e.y1 - e.y0,
        a = r * r + i * i || 1,
        o = Math.max(0, Math.min(1, ((t - e.x0) * r + (n - e.y0) * i) / a));
      return Math.hypot(t - (e.x0 + r * o), n - (e.y0 + i * o)) <= e.w / 2;
    }
    case `cone`: {
      let r = Math.hypot(t - e.x, n - e.y);
      if (r > e.r) return !1;
      let i = Math.atan2(n - e.y, t - e.x) - e.a;
      for (; i > Math.PI;) i -= Math.PI * 2;
      for (; i < -Math.PI;) i += Math.PI * 2;
      return Math.abs(i) <= e.spread / 2 || r < 0.6;
    }
    case `rect`:
      return t >= e.x && n >= e.y && t <= e.x + e.w && n <= e.y + e.h;
  }
}
var Tf = Math.PI / 180,
  Ef = `#e0484e`,
  Df = `#ff7a1a`,
  Of = `#5cc8ff`,
  kf = `#fff36b`,
  Af = `#b84dff`,
  jf = `#c9a36a`,
  Mf = `#7ef9ff`,
  Nf = `#8fd14f`,
  Pf = `#d8d0c0`,
  Ff = `#7ef9ff`,
  If = `#ff9a3a`,
  Lf = `#ffcf7a`,
  Rf = `#8ef6ff`,
  zf = `#6a5a8a`,
  Bf = (e, t, n, r = {}) => ({
    id: e,
    name: t,
    form: `swing`,
    windup: 0.45,
    mult: 1,
    cd: 0,
    min: 0,
    max: n - 0.4,
    r: n,
    arc: 100 * Tf,
    color: Ef,
    ...r,
  }),
  Vf = (e, t, n, r = {}) => ({
    id: e,
    name: t,
    form: `lunge`,
    windup: 0.6,
    mult: 1.3,
    cd: 5,
    min: 2,
    max: n,
    r: 0.9,
    len: n,
    color: Ef,
    ...r,
  }),
  Hf = (e, t, n, r = {}) => ({
    id: e,
    name: t,
    form: `slam`,
    windup: 0.9,
    mult: 1.8,
    cd: 6,
    min: 0,
    max: n * 0.8,
    r: n,
    at: `self`,
    color: jf,
    ...r,
  }),
  Uf = (e, t, n, r = {}) => ({
    id: e,
    name: t,
    form: `bolt`,
    windup: 0.45,
    mult: 0.9,
    cd: 0,
    min: 0,
    max: 7,
    r: 0.45,
    speed: 8,
    color: n,
    ...r,
  }),
  Wf = (e, t, n, r, i = {}) => ({
    id: e,
    name: t,
    form: `spread`,
    windup: 0.6,
    mult: 0.65,
    cd: 5,
    min: 0,
    max: 7,
    r: 0.4,
    n,
    arc: 50 * Tf,
    speed: 7.5,
    color: r,
    ...i,
  }),
  Gf = (e, t, n, r, i = {}) => ({
    id: e,
    name: t,
    form: `ring`,
    windup: 0.8,
    mult: 0.6,
    cd: 7,
    min: 0,
    max: 6,
    r: 0.4,
    n,
    speed: 5.5,
    color: r,
    ...i,
  }),
  Kf = (e, t, n, r, i = {}) => ({
    id: e,
    name: t,
    form: `rain`,
    windup: 0.9,
    mult: 1.2,
    cd: 6,
    min: 0,
    max: 8,
    r: 1.1,
    n,
    at: `target`,
    color: r,
    ...i,
  }),
  qf = (e, t, n = {}) => ({
    id: e,
    name: t,
    form: `blink`,
    windup: 0.5,
    mult: 0,
    cd: 7,
    min: 3.5,
    max: 8,
    r: 0,
    color: Af,
    ...n,
  }),
  Jf = (e, t, n, r = {}) => ({
    id: e,
    name: t,
    form: `beam`,
    windup: 1.2,
    mult: 1.4,
    cd: 10,
    min: 0,
    max: n - 1,
    r: 0.35,
    len: n,
    n: 1,
    hold: 2,
    color: Ff,
    ...r,
  }),
  Yf = (e, t, n, r = {}) => ({
    id: e,
    name: t,
    form: `rings`,
    windup: 1.2,
    mult: 1.3,
    cd: 10,
    min: 0,
    max: 3,
    r: 0,
    bands: n,
    color: Ef,
    ...r,
  }),
  Xf = (e, t, n, r, i = {}) => ({
    id: e,
    name: t,
    form: `wall`,
    windup: 1.2,
    mult: 0.8,
    cd: 14,
    min: 0,
    max: 7,
    r,
    layout: n,
    hold: 6,
    color: Ef,
    ...i,
  }),
  Zf = (e, t, n, r = {}) => ({
    id: e,
    name: t,
    form: `channel`,
    windup: 1.5,
    mult: 0,
    cd: 0,
    min: 0,
    max: 14,
    r: 0,
    channel: n,
    color: Ef,
    ...r,
  });
function Qf(e) {
  return { basic: Bf(`strike`, `Strike`, e + 0.7) };
}
