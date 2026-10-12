// assets__index-BTsv3a2s 225 — math
// Lines 144338-144680 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var x4 = {
    id: `gorrath`,
    gait: `stomp`,
    stride: 11,
    top: 46,
    ticks: 8,
    hemFrom: 0,
    props: { gr: 0, fl: 0 },
    front: [`vent`, `caldera`],
    linger: { vent: 2.3, caldera: 6 },
    impact: { cleave: 1.5, caldera: 3 },
    pose: u4,
    paint(e, t) {
      t.v === 0 ? v4(e, t) : t.v === 1 ? y4(e, t) : b4(e, t);
    },
  },
  S4 = { dark: `#5a0a1a`, red: `#b01a2a`, core: `#ffffff` },
  C4 = `#6f6a66`,
  w4 = `#4a4644`,
  T4 = `#8f8a85`,
  E4 = `#cfae90`,
  D4 = `#a0806a`,
  O4 = `#5a4a3a`,
  k4 = `#4a3a2e`,
  A4 = `#5a3a22`,
  j4 = `#3a3438`,
  M4 = `#e8dcc0`,
  N4 = `#3a2a22`,
  P4 = (e, t) => {
    let n = Math.sin(e * 127.1 + t * 311.7) * 43758.5453;
    return n - Math.floor(n);
  },
  F4 = {
    0: { L: [-7, -20], R: [7, -19] },
    1: { L: [7, -20], R: [-7, -19] },
    2: { L: [-1, -20], R: [1, -20] },
  },
  I4 = {
    0: { L: [-5, -15], R: [8, -17] },
    1: { L: [5, -15], R: [-8, -17] },
    2: { L: [1, -15], R: [7, -17] },
  },
  L4 = [8, -21],
  R4 = 12,
  z4 = 17;
function B4(e, t, n) {
  let r = t === 1 ? -1 : 1,
    i = I4[t],
    a = -n.vx * 0.012 + Math.sin(n.t * 1.3) * 0.12,
    o = {
      L: i.L,
      R: [i.R[0], i.R[1] - (t === 2 ? Math.abs(n.walk) * 0.5 : 0)],
      props: { sw: a, st: t === 2 ? n.walk * 0.1 : 0, gl: 0, gr: 0 },
    };
  if (!e) return o;
  let s = S2(e.k),
    c = o.props;
  switch (e.id) {
    case `crook`:
      if (!e.landed)
        ((o.R =
          t === 2 ? [3 - 2 * s, -17 - 5 * s] : [r * (8 + s), -16.5 - 6 * s]),
          (c.st = -0.7 * s * r),
          (o.lean = -0.6 * s),
          (o.hem = -1 * s));
      else {
        let n = S2(e.since / 0.12);
        ((o.R = t === 2 ? [6 + 2 * n, -16 + 2 * n] : [r * (8 + 2 * n), -15]),
          (c.st = (t === 2 ? 1.4 : 0.9) * n * r),
          (c.sw = 0.8 * r),
          (o.lean = 1.2 * n),
          (o.hem = 2 * n));
      }
      return o;
    case `volley`:
      return (
        (o.R = [r * L4[0], L4[1]]),
        (o.L = [r * -6.5, -17]),
        (c.sw = 0),
        (c.st = 0),
        (c.gl = e.landed ? Math.max(0, 1.6 - e.since * 3) : s),
        (o.rise = e.landed ? 0 : 0.5 * s),
        o
      );
    case `sermon`: {
      let t = e.landed ? Math.sin(e.age * 2.2) : 0;
      return (
        (o.R = [r * L4[0], L4[1]]),
        (o.L = [r * (-10 + t * 0.8), -21 - 3 * s + t * 1.5]),
        (c.sw = 0),
        (c.st = 0),
        (c.gl = 0.6 + 0.4 * s),
        (o.lean = t * 0.5),
        o
      );
    }
    case `tokens`:
      return (
        (o.L = e.landed
          ? t === 2
            ? [5, -29]
            : [r * -7, -28]
          : t === 2
            ? [-1 - s, -12]
            : [r * (-7 - s), -12 + s]),
        (o.tremble = e.landed ? 0 : s > 0.7 ? 0.6 : 0),
        (o.rise = e.landed ? 0.5 : -0.5 * s),
        o
      );
    case `gaze`: {
      let n = e.landed ? Math.sin(e.since * 1.1) * 0.35 : 0;
      return (
        (o.R = t === 2 ? [8, -21] : [r * 8.5, -21]),
        (c.st = (t === 2 ? 0.75 + n : 0.45 + n) * r),
        (c.gr = 0.3 * s),
        (c.sw = 0),
        (c.gl = 0.5 + 0.7 * s),
        (o.lean = 0.8 * s),
        o
      );
    }
  }
  return o;
}
var V4 = [
  [-1, -2],
  [0, -2],
  [1, -2],
  [-1, -1],
  [0, -1],
  [1, -1],
  [1, -3],
  [2, -3],
];
function H4(e, t, n, r, i = !1) {
  let a = t.props.st,
    o = Math.cos(a),
    s = Math.sin(a),
    c = (e, t) => [e * r * o - t * s, e * r * s + t * o],
    l = R4 + z4 * (t.props.gr ?? 0),
    u = z4 * (1 - (t.props.gr ?? 0)),
    d = [n[0] + s * l, n[1] - o * l],
    f = [n[0] - s * u, n[1] + o * u];
  e.line(f[0], f[1], d[0], d[1], A4);
  for (let [t, n] of V4) {
    let [r, i] = c(t, n);
    e.P(Math.round(d[0] + r), Math.round(d[1] + i), A4);
  }
  let [p, m] = c(2, -2),
    h = t.props.sw,
    g = Math.round(d[0] + p + Math.sin(h) * 2.5 * r),
    _ = Math.round(d[1] + m + 1 - Math.abs(Math.sin(h)));
  i || U4(e, t, g, _, r);
}
function U4(e, t, n, r, i) {
  let a = i > 0 ? n - 1 : n - 2,
    o = r + 1;
  (e.P(n, r, j4),
    e.P(a, o, j4, 4, 1),
    e.P(a, o + 1, j4, 1, 5),
    e.P(a + 3, o + 1, j4, 1, 5),
    e.P(a, o + 6, j4, 4, 1),
    e.P(a + 1, o + 1, S4.dark, 2, 5),
    e.P(a + 1, o + 2, S4.red, 2, 3));
  let s = t.props.gl;
  (e.P(a + 1, o + 3, S4.core, s > 0.5 ? 2 : 1, s > 1.2 ? 2 : 1),
    s > 1 && e.P(a + 1, o + 1, `#ffcf6a`, 2, 1),
    (t.out.glow = [a + 2, o + 3.5]));
}
function W4(e, t) {
  e.P(Math.round(t[0]) - 1, Math.round(t[1]), E4, 2, 2);
}
function G4(e, t, n) {
  let r = t.act;
  if (!r || r.id !== `tokens` || !r.landed || r.since > 0.3) return;
  let i = r.since * 40;
  for (let [t, r] of [
    [-2, 0],
    [1, -2],
    [3, 1],
    [0, 2],
  ])
    e.P(n[0] + t, n[1] - i + r, M4);
}
function K4(e, t) {
  let n = t.bob;
  (e.P(-3, -1 - t.liftL, N4, 3, 2),
    e.P(1, -1 - t.liftR, N4, 3, 2),
    e.rows(
      -23 + n,
      -1,
      () => 0,
      (e) => 4.5 + (e + 23) * 0.2,
      (e, n, r, i) =>
        n >= -3 && P4(e + t.flut * 5, n) < 0.35
          ? null
          : e <= r + 1
            ? T4
            : e >= i - 1
              ? w4
              : C4,
    ),
    e.P(-2, -19 + n, O4, 5, 18 - n),
    e.P(0, -19 + n, k4, 1, 18 - n));
  let r = !(t.act?.id === `tokens` && t.act.landed && t.act.since < 0.6);
  if ((e.P(-5, -18 + n, O4, 11, 1), r))
    for (let t of [-4, -1, 2, 4]) e.P(t, -17 + n, M4, 1, 2);
  (e.P(-6, -30 + n, C4, 12, 9),
    e.P(-5, -31 + n, C4, 10, 1),
    e.P(-6, -30 + n, T4, 2, 9),
    e.P(4, -30 + n, w4, 2, 9),
    e.P(-4, -29 + n, `#2a2628`, 8, 8),
    e.P(-3, -27 + n, E4, 6, 6),
    e.P(2, -27 + n, D4, 1, 6),
    e.P(-4, -26 + n, `#e6e6e6`, 1, 4));
  let i = t.hurt ? D4 : `#e6e0f5`;
  (e.P(-2, -25 + n, i),
    e.P(1, -25 + n, i),
    e.P(-2, -24 + n, D4),
    e.P(1, -24 + n, D4),
    e.P(0, -24 + n, D4, 1, 2),
    e.P(
      -1,
      -22 + n,
      D4,
      t.act?.id === `sermon` && t.act.landed ? 2 : 3,
      t.act?.id === `sermon` && t.act.landed && t.t % 0.8 < 0.4 ? 2 : 1,
    ),
    e.crown(0, -35 + n, 0));
  let a = [t.L[0], t.L[1] + n];
  (e.arm([F4[0].L[0], F4[0].L[1] + n], a, -1, T4, { len: 3.5, w: 3 }),
    W4(e, a),
    G4(e, t, a));
  let o = [t.R[0], t.R[1] + n];
  (H4(e, t, o, 1),
    e.arm([F4[0].R[0], F4[0].R[1] + n], o, 1, C4, { len: 2.5, w: 3 }),
    W4(e, o));
}
function q4(e, t) {
  let n = t.bob;
  (e.P(-3, -1 - t.liftR, N4, 3, 2),
    e.P(1, -1 - t.liftL, N4, 3, 2),
    e.arm([F4[1].L[0], F4[1].L[1] + n], [t.L[0], t.L[1] + n], 1, w4, {
      len: 3.5,
      w: 3,
    }),
    e.rows(
      -23 + n,
      -1,
      () => 0,
      (e) => 4.5 + (e + 23) * 0.2,
      (e, n, r, i) =>
        n >= -3 && P4(e + t.flut * 5, n) < 0.35
          ? null
          : e <= r + 1
            ? w4
            : e >= i - 1
              ? T4
              : e === 0 && n > -14
                ? w4
                : C4,
    ),
    e.P(-6, -30 + n, C4, 12, 9),
    e.P(-5, -31 + n, C4, 10, 1),
    e.P(-6, -30 + n, w4, 2, 9),
    e.P(4, -30 + n, T4, 2, 9),
    e.P(-3, -21 + n, C4, 6, 2),
    e.P(-1, -19 + n, C4, 2, 1),
    e.P(-1, -28 + n, w4, 1, 6),
    e.crown(0, -35 + n, 1),
    G4(e, t, [t.L[0], t.L[1] + n]));
  let r = [t.R[0], t.R[1] + n];
  (H4(e, t, r, -1),
    e.arm([F4[1].R[0], F4[1].R[1] + n], r, -1, C4, { len: 2.5, w: 3 }),
    W4(e, r));
}
function J4(e, t) {
  let n = t.bob;
  (e.P(-2 - t.stride, -1, `#2a1e18`, 3, 2), e.P(0 + t.stride, -1, N4, 3, 2));
  let r = [t.L[0], t.L[1] + n],
    i = () => {
      (e.arm([F4[2].L[0], F4[2].L[1] + n], r, 1, w4, { len: 3.5, w: 2 }),
        W4(e, r),
        (t.act?.id === `tokens` && t.act.landed && t.act.since < 0.6) ||
          e.P(r[0], r[1] + 1, M4, 1, 2));
    },
    a = r[1] < -22 + n;
  (a || i(),
    e.rows(
      -21 + n,
      -1,
      (e) => -1 + (e + 21) * 0.03,
      (e) => 4 + (e + 21) * 0.12,
      (e, n, r, i) =>
        n >= -3 && P4(e + t.flut * 5, n) < 0.3
          ? null
          : e <= r + 1
            ? w4
            : e >= i - 1
              ? n > -19 && e === i - 1
                ? O4
                : T4
              : C4,
    ),
    e.P(-7, -21 + n, C4, 2, 6),
    e.P(-8, -20 + n, w4, 1, 4),
    t.stride > 0 && e.P(3 + t.stride, 0, N4, 1, 1),
    [
      [-2, 2],
      [-3, 4],
      [-4, 5],
      [-4, 5],
      [-4, 5],
      [-4, 5],
      [-4, 5],
      [-4, 5],
      [-4, 5],
      [-4, 5],
      [-4, 3],
    ].forEach(([t, r], i) => {
      for (let a = t; a <= r; a++)
        e.P(
          a,
          -31 + i + n,
          a === t ? w4 : (a === r && i < 4) || i === 0 ? T4 : C4,
        );
    }),
    e.P(2, -27 + n, `#2a2628`, 4, 6),
    e.P(3, -26 + n, E4, 3, 5),
    e.P(2, -27 + n, `#e6e6e6`, 1, 4),
    e.P(3, -27 + n, `#e6e6e6`, 1, 2),
    e.P(4, -25 + n, t.hurt ? D4 : `#e6e0f5`),
    e.P(6, -25 + n, E4, 1, 1),
    e.P(5, -24 + n, D4, 1, 1),
    e.P(4, -22 + n, D4, 2, 1),
    e.crown(0, -34 + n, 2),
    a && i(),
    G4(e, t, r));
  let o = [t.R[0], t.R[1] + n];
  (H4(e, t, o, 1),
    e.arm([F4[2].R[0], F4[2].R[1] + n], o, -1, C4, { len: 3, w: 3 }),
    W4(e, o));
}
