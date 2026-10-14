// index-BTsv3a2s 223 — props
// Lines 143708-144023 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function H2(e, t, n) {
  let r = t === 1 ? -1 : 1,
    i = z2[t],
    a = B2[t],
    o = Math.round(Math.sin(n.t * 1.4) * 0.8),
    s = {
      L: i.L,
      R: i.R,
      props: {
        st: t === 2 ? n.walk * 0.08 : 0,
        tx: a[0] - (t === 2 ? n.vx * 0.04 : 0),
        ty: a[1] + o,
        tg: 0,
        turn: 0,
        lp: 0,
      },
    };
  if (!e) return s;
  let c = S2(e.k),
    l = s.props,
    u = (e, t) => [e * r, t];
  switch (e.id) {
    case `keystaff`:
      if (!e.landed)
        ((s.R = C2(i.R, t === 2 ? [1, -27] : u(8, -27), c)),
          (l.st = -0.7 * c * r),
          (s.lean = -0.5 * c));
      else {
        let n = S2(e.since / 0.12);
        ((s.R = C2(
          t === 2 ? [1, -27] : u(8, -27),
          t === 2 ? [9, -20] : u(11, -19),
          n,
        )),
          (l.st = (-0.7 + (t === 2 ? 2.1 : 1.6) * n) * r),
          (s.lean = 1.2 * n),
          (s.hem = 1.5 * n));
      }
      return s;
    case `wardline`:
      if (!e.landed)
        ((s.R = t === 2 ? C2(i.R, [-1, -20], c) : C2(i.R, u(6, -17), c)),
          (l.st = (t === 2 ? 1.57 : 0.9) * c * r),
          (s.lean = -0.8 * c));
      else {
        let n = S2(e.since / 0.1);
        ((s.R = t === 2 ? C2([-1, -20], [9, -20], n) : u(7, -15)),
          (l.st = (t === 2 ? 1.57 : 0.9) * r),
          (s.lean = 2 * n),
          (s.hem = 2 * n));
      }
      return s;
    case `seal`:
      return (
        (s.L = C2(i.L, t === 2 ? [1, -34] : u(-4, -34), c)),
        (l.tx = t === 2 ? -1 : r > 0 ? -4 : -1),
        (l.ty = -46 + o),
        (l.tg = e.landed ? 1.5 : c),
        (s.R = e.landed ? [i.R[0], i.R[1] + 2] : [i.R[0], i.R[1] - 3 * c]),
        (s.rise = e.landed ? -1 : 0.5 * c),
        s
      );
    case `lockstep`:
      return (
        (s.R = t === 2 ? [3, -22] : u(2, -22)),
        (l.st = 1.57 * r * Math.min(1, c * 2)),
        (l.turn = e.landed ? 1 : c > 0.75 ? 0.5 : 0),
        (s.tremble = !e.landed && c > 0.5 ? 0.5 : 0),
        (s.rise = e.landed ? 0.5 : 0),
        s
      );
    case `loupe`:
      return (
        (l.lp = e.landed ? 1.5 : c),
        (l.ty = a[1] - 6 * c + o),
        (l.tg = c),
        (s.rise = -0.5 * c),
        s
      );
  }
  return s;
}
var U2 = [
    [-1, -5],
    [0, -5],
    [1, -5],
    [-2, -4],
    [-2, -3],
    [-2, -2],
    [2, -4],
    [2, -3],
    [2, -2],
    [-1, -1],
    [0, -1],
    [1, -1],
  ],
  W2 = [
    [-1, -4],
    [0, -4],
    [1, -4],
    [-1, -3],
    [1, -3],
    [-1, -2],
    [0, -2],
    [1, -2],
  ],
  G2 = [
    [1, 2],
    [2, 2],
    [1, 4],
    [1, 6],
    [2, 6],
  ];
function K2(e, t, n, r) {
  let i = t.props.st,
    a = e.at(n, i, r, 0, -14),
    o = e.at(n, i, r, 0, V2);
  e.line(o[0], o[1], a[0], a[1], P2);
  let s = e.at(n, i, r, 0, -12);
  (e.line(s[0], s[1], a[0], a[1], F2),
    e.stamp(a, i, r, U2, A2),
    e.stamp(a, i, r, W2, T2.dark));
  let c =
    t.act &&
    (t.act.id === `keystaff` || t.act.id === `lockstep`) &&
    t.act.landed;
  e.stamp(a, i, r, [[0, -3]], c ? T2.core : T2.red);
  let l = t.props.turn;
  e.stamp(a, i, l > 0.25 ? -r : r, G2, A2);
}
function q2(e, t) {
  let n = Math.round(t.props.tx),
    r = Math.round(t.props.ty),
    i = t.props.tg;
  (e.P(n, r, `#5d586c`, 6, 7),
    e.P(n, r, `#8c8698`, 5, 6),
    e.P(n, r, `#b9b3c7`, 5, 1),
    e.P(n + 1, r + 2, i > 1 ? `#ffffff` : E2, 3, 1),
    e.P(n + 1, r + 2, i > 1 ? `#ffffff` : E2, 1, 2),
    e.P(n + 3, r + 3, i > 0.5 ? T2.core : T2.red, 1, 2),
    e.P(n + 1, r + 4, T2.red, 3, 1));
}
function J2(e, t, n = 2) {
  e.P(Math.round(t[0]) - 1, Math.round(t[1]), j2, 2, n);
}
function Y2(e, t) {
  (e.P(-4, -2 - t.liftL, L2, 3, 2), e.P(1, -2 - t.liftR, L2, 3, 2));
}
function X2(e, t, n) {
  e.rows(
    -26 + t,
    -3,
    () => 0,
    (e) => 4 + Math.floor((e - t + 26) * 0.2),
    (e, t, r, i) =>
      t === -3
        ? A2
        : e <= r + 1
          ? n
            ? O2
            : k2
          : e >= i - 1
            ? n
              ? k2
              : O2
            : n && e === 0 && t > -22
              ? O2
              : D2,
  );
}
function Z2(e, t) {
  let n = t.bob;
  (Y2(e, t),
    X2(e, n, !1),
    e.P(-2, -25 + n, A2, 1, 22 - n),
    e.P(2, -25 + n, A2, 1, 22 - n),
    e.P(-1, -25 + n, I2, 3, 22 - n));
  for (let t = 15; t < 35; t += 3) {
    let r = t < 25 ? E2 : T2.red;
    (e.P(t % 2 ? -1 : 0, t - 39 + n, r, 2, 1),
      e.P(t % 2 ? 0 : -1, t - 38 + n, r, 1, 1));
  }
  (e.P(-7, -27 + n, O2, 15, 3),
    e.P(-7, -25 + n, A2, 15, 1),
    e.P(-5, -32 + n, O2, 2, 6),
    e.P(4, -32 + n, O2, 2, 6),
    e.P(-4, -31 + n, A2, 1, 5),
    e.P(4, -31 + n, A2, 1, 5),
    e.P(-3, -34 + n, N2, 7, 2),
    e.P(-2, -33 + n, j2, 6, 6),
    e.P(3, -33 + n, M2, 1, 6),
    e.P(-3, -33 + n, N2, 1, 2),
    e.P(-1, -31 + n, t.hurt ? M2 : `#1b1030`),
    e.P(1, -32 + n, A2, 2, 2),
    e.P(1, -31 + n, `#ffffff`, t.props.lp > 0.6 ? 2 : 1, 1),
    t.props.lp > 1 && e.P(1, -32 + n, `#ffe9a8`, 2, 1),
    e.P(0, -30 + n, M2),
    e.P(-1, -29 + n, M2, 3, 1),
    e.P(-1, -28 + n, `#b9b9c6`, 3, 1),
    e.crown(0, -38 + n, 0));
  let r = [t.R[0], t.R[1] + n];
  (K2(e, t, r, 1),
    e.arm([R2[0].R[0], R2[0].R[1] + n], r, 1, D2, { len: 3.5, w: 3 }),
    J2(e, r));
  let i = [t.L[0], t.L[1] + n];
  (e.arm([R2[0].L[0], R2[0].L[1] + n], i, -1, k2, { len: 3.5, w: 3, bare: M2 }),
    J2(e, i, 1),
    q2(e, t));
}
function Q2(e, t) {
  let n = t.bob;
  (Y2(e, t),
    X2(e, n, !0),
    e.P(-7, -27 + n, O2, 15, 3),
    e.P(-7, -25 + n, A2, 15, 1),
    e.P(-3, -34 + n, N2, 7, 4),
    e.P(-3, -34 + n, `#ececf2`, 3, 1),
    e.P(3, -33 + n, `#b9b9c6`, 1, 3),
    e.P(-5, -30 + n, O2, 11, 4),
    e.P(-5, -30 + n, A2, 11, 1),
    e.P(-4, -29 + n, D2, 9, 2),
    e.crown(0, -38 + n, 1),
    q2(e, t));
  let r = [t.L[0], t.L[1] + n];
  (e.arm([R2[1].L[0], R2[1].L[1] + n], r, 1, k2, { len: 3.5, w: 3, bare: M2 }),
    J2(e, r, 1));
  let i = [t.R[0], t.R[1] + n];
  (K2(e, t, i, -1),
    e.arm([R2[1].R[0], R2[1].R[1] + n], i, -1, D2, { len: 3.5, w: 3 }),
    J2(e, i));
}
function $2(e, t) {
  let n = t.bob;
  q2(e, t);
  let r = [t.L[0], t.L[1] + n],
    i = () => {
      (e.arm([R2[2].L[0], R2[2].L[1] + n], r, 1, O2, {
        len: 3.5,
        w: 2,
        bare: M2,
      }),
        J2(e, r, 1));
    };
  (r[1] > -26 + n && i(),
    e.P(-3 - t.stride, -2, `#121420`, 4, 2),
    e.P(-1 + t.stride, -2, L2, 4, 2),
    e.rows(
      -26 + n,
      -3,
      () => 0,
      (e) => 3 + Math.floor((e - n + 26) * 0.12),
      (e, t, r, i) =>
        t === -3
          ? A2
          : e === i
            ? t > -25 + n
              ? t < -14
                ? E2
                : T2.red
              : A2
            : e === i - 1
              ? A2
              : e <= r + 1
                ? O2
                : D2,
    ),
    e.P(-4, -27 + n, O2, 9, 3),
    e.P(-4, -25 + n, A2, 9, 1),
    e.P(-4, -33 + n, O2, 2, 7),
    e.P(-3, -32 + n, A2, 1, 5),
    e.P(-2, -34 + n, N2, 5, 2),
    e.P(-2, -32 + n, N2, 2, 3),
    e.P(0, -32 + n, j2, 4, 5),
    e.P(4, -30 + n, j2, 1, 1),
    e.P(2, -32 + n, A2, 2, 2),
    e.P(3, -31 + n, t.props.lp > 0.6 ? `#ffe9a8` : `#ffffff`),
    e.P(1, -28 + n, `#b9b9c6`, 3, 1),
    e.P(0, -29 + n, M2, 1, 1),
    e.crown(0, -38 + n, 2),
    r[1] <= -26 + n && i());
  let a = [t.R[0], t.R[1] + n];
  (K2(e, t, a, 1),
    e.arm([R2[2].R[0], R2[2].R[1] + n], a, -1, D2, { len: 3.5, w: 3 }),
    J2(e, a));
}
var e4 = {
    id: `aurek`,
    gait: `walk`,
    stride: 9,
    top: 40,
    hemFrom: -12,
    props: { st: 0, tx: B2[0][0], ty: B2[0][1], tg: 0, turn: 0, lp: 0 },
    front: [`loupe`],
    linger: { seal: 0.8, lockstep: 0.5 },
    pose: H2,
    paint(e, t) {
      t.v === 0 ? Z2(e, t) : t.v === 1 ? Q2(e, t) : $2(e, t);
    },
  },
  t4 = { dark: `#5a0a1a`, red: `#b01a2a`, core: `#ffffff` },
  n4 = `#2a1f24`,
  r4 = `#4a3538`,
  i4 = `#150e12`,
  a4 = `#ff7a1a`,
  o4 = `#ffd166`,
  s4 = `#c2361f`,
  c4 = {
    0: { L: [-14.5, -25.5], R: [12.5, -25.5] },
    1: { L: [12.5, -25.5], R: [-14.5, -25.5] },
    2: { L: [-3, -25.5], R: [0, -25.5] },
  },
  l4 = {
    0: { L: [-14, -13], R: [13, -13] },
    1: { L: [13, -13], R: [-14, -13] },
    2: { L: [-4, -13], R: [1, -13] },
  };
