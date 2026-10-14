// index-BTsv3a2s 226 — math
// Lines 144681-145015 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var Y4 = {
    id: `hessa`,
    gait: `walk`,
    stride: 9,
    top: 36,
    hemFrom: -14,
    props: { sw: 0, st: 0, gl: 0, gr: 0 },
    front: [`volley`, `sermon`],
    pose: B4,
    paint(e, t) {
      t.v === 0 ? K4(e, t) : t.v === 1 ? q4(e, t) : J4(e, t);
    },
  },
  X4 = { red: `#b01a2a`, core: `#ffffff` },
  Z4 = `#e8f1f8`,
  Q4 = `#b9cfe0`,
  $4 = `#bfe0f5`,
  e3 = `#8ec5e8`,
  t3 = `#eef2f6`,
  n3 = `#c9d6e2`,
  r3 = `#8fb4dc`,
  i3 = `#cfe6ff`,
  a3 = `#5f86b4`,
  o3 = `#bff0ff`,
  Jae = {
    0: { L: [-4, -29], R: [4, -29] },
    1: { L: [4, -29], R: [-4, -29] },
    2: { L: [-1, -29], R: [0, -29] },
  },
  s3 = {
    0: { L: [-1, -25], R: [1, -25] },
    1: { L: [1, -25], R: [-1, -25] },
    2: { L: [1, -25], R: [2, -25] },
  };
function Yae(e, t, n) {
  let r = t === 1 ? -1 : 1,
    i = s3[t],
    a = {
      L: i.L,
      R: i.R,
      props: {
        sing: 0,
        fc: 0,
        hr: Math.max(-2.5, Math.min(2.5, -n.vx * 0.05)),
      },
    };
  if (!e) return a;
  let o = S2(e.k),
    s = a.props,
    c = (e, t) => [e * r, t];
  switch (e.id) {
    case `hem`:
      if (!e.landed)
        ((a.L = C2(i.L, t === 2 ? [-4, -27] : c(-8, -27), o)),
          (a.R = C2(i.R, t === 2 ? [6, -27] : c(8, -27), o)),
          (a.hem = -2.5 * o),
          (a.lean = -0.6 * o));
      else {
        let n = S2(e.since / 0.12);
        ((a.L = t === 2 ? [7, -25] : c(-9, -24)),
          (a.R = t === 2 ? [8, -26] : c(9, -24)),
          (a.hem = -2.5 + 6.5 * n),
          (a.lean = 1 * n));
      }
      return a;
    case `hymn`:
      return (
        (a.L = c(-1, -26)),
        (a.R = c(1, -26)),
        (s.sing = e.landed ? 1.2 : 0.4 + 0.6 * o),
        a
      );
    case `choir`: {
      let t = e.landed ? Math.sin(e.age * Math.PI * 1.6) : 0;
      return (
        (a.L = C2(i.L, c(-11.5, -33 + t * 2), o)),
        (a.R = C2(i.R, c(10.5, -33 - t * 2), o)),
        (s.sing = e.landed ? 1 : 0.5 * o),
        (a.rise = 1 * o),
        a
      );
    }
    case `crescendo`:
      if (!e.landed)
        ((a.L = c(-1, -27)),
          (a.R = c(1, -27)),
          (a.tremble = o > 0.5 ? 0.6 : 0),
          (a.rise = -1 * o),
          (s.sing = 0.3));
      else {
        let t = S2(e.since / 0.1);
        ((a.L = C2(c(-1, -27), c(-9, -39), t)),
          (a.R = C2(c(1, -27), c(8, -39), t)),
          (a.rise = 3 * t),
          (s.sing = 1.5));
      }
      return a;
    case `faces`:
      return (
        (a.L = C2(i.L, t === 2 ? [3, -19] : c(-7, -19), o)),
        (a.R = C2(i.R, t === 2 ? [5, -19] : c(6, -19), o)),
        (s.fc = e.landed ? 1.5 : o),
        (a.rise = -0.5 * o),
        (a.hem = 0),
        a
      );
  }
  return a;
}
var Xae = (e, t) =>
  Math.abs(e.L[0] - s3[t].L[0]) +
    Math.abs(e.L[1] - s3[t].L[1]) +
    Math.abs(e.R[0] - s3[t].R[0]) +
    Math.abs(e.R[1] - s3[t].R[1]) <
  1;
function c3(e, t, n, r) {
  let i = Jae[n];
  if (n !== 2 && Xae(t, n)) {
    (e.P(-5, -29 + r, Q4, 3, 6),
      e.P(3, -29 + r, Q4, 3, 6),
      n === 0 && (e.P(-2, -25 + r, t3, 5, 2), e.P(-2, -24 + r, n3, 5, 1)));
    return;
  }
  for (let [a, o] of [
    [-1, t.L],
    [1, t.R],
  ]) {
    let t = a < 0 ? i.L : i.R;
    if (n === 2 && a < 0) continue;
    let s = e.arm([t[0], t[1] + r], [o[0], o[1] + r], n === 1 ? -a : a, Q4, {
      len: 4.5,
      w: 2,
    });
    (n !== 1 || s[1] < -28 + r) &&
      e.P(Math.round(s[0]) - +(a < 0), Math.round(s[1]), t3, 2, 1);
  }
}
function l3(e, t, n, r) {
  let i = (e) => (r === 2 ? -0.5 - (e + 29) * 0.06 : 0),
    a = (e) => (r === 2 ? 3 + (e + 29 - n) * 0.3 : 3.5 + (e + 29 - n) * 0.38);
  e.rows(-29 + n, -5, i, a, (e, n, i, a) => {
    let o = n > -16;
    return n === -5 && (e + 30 + t.flut) % 3 != 0
      ? null
      : e <= i + 1
        ? r === 1
          ? o
            ? e3
            : Q4
          : o
            ? `#e6fdff`
            : `#ffffff`
        : e >= a - 1
          ? r === 1
            ? o
              ? `#e6fdff`
              : `#ffffff`
            : o
              ? e3
              : Q4
          : o
            ? $4
            : Z4;
  });
  let o = Math.round(i(-5) - a(-5));
  for (let n = 0; n < 6; n++)
    e.P(
      o + 2 + n * 3 + ((n + t.flut) % 2),
      -4,
      n % 2 ? e3 : $4,
      1,
      2 + ((n + t.flut) % 2),
    );
  let s = t.props.fc,
    c =
      r === 2
        ? [
            [-4, -12],
            [2, -10],
          ]
        : [
            [-6, -12],
            [0, -10],
            [5, -13],
          ];
  for (let [t, n] of c) {
    e.P(t, n, s > 0.5 ? `#d8f4ff` : `#9cc0e0`, 3, 3);
    let r = s > 1 ? `#ffffff` : `#4a6f94`;
    (e.P(t, n + 1, r),
      e.P(t + 2, n + 1, r),
      e.P(t + 1, n + 2, s > 0.5 ? X4.red : `#4a6f94`));
  }
}
function u3(e, t, n) {
  let r = t.props.sing > 0.6 ? n.length : 1;
  for (let i = 0; i < r; i++) {
    let r = (t.t * 0.5 + i * 0.37) % 1,
      [a, o] = n[i],
      s = Math.round(o - r * 6),
      c = a + Math.round(Math.sin((t.t + i) * 2) * 0.6);
    (e.P(c, s + 2, o3, 2, 2), e.P(c + 1, s, o3, 1, 2), e.P(c + 2, s, o3));
  }
}
function Zae(e, t) {
  let n = t.bob;
  (l3(e, t, n, 0), e.P(-2, -29 + n, Q4, 5, 2), e.P(-1, -27 + n, Q4, 3, 1));
  let r = Math.round(t.props.hr);
  (e.P(-5, -38 + n, r3, 11, 3),
    e.P(-5, -36 + n, r3, 2, 14),
    e.P(4, -36 + n, r3, 2, 14),
    e.P(-5 + Math.min(0, r), -22 + n, r3, 2, 2),
    e.P(4 + Math.max(0, r), -22 + n, r3, 2, 2),
    e.P(-5, -31 + n, a3, 1, 10),
    e.P(5, -33 + n, a3, 1, 12),
    e.P(-4, -38 + n, i3, 3, 1),
    e.P(-5, -35 + n, i3, 1, 4),
    e.P(-3, -37 + n, t3, 7, 7),
    e.P(3, -37 + n, n3, 1, 7),
    e.P(-3, -37 + n, r3, 7, 1));
  let i = t.hurt ? `#4a6f94` : `#6a86a6`;
  (e.P(-2, -34 + n, i, 2, 1), e.P(1, -34 + n, i, 2, 1));
  let a = t.props.sing;
  (e.P(a > 1.3 ? -1 : 0, -32 + n, `#3a2a4a`, a > 1.3 ? 3 : 1, a > 0.5 ? 2 : 1),
    e.P(-4, -39 + n, `#e6fdff`, 9, 1),
    e.P(-3, -40 + n, `#e6fdff`),
    e.P(3, -40 + n, `#e6fdff`),
    e.crown(0, -43 + n, 0),
    c3(e, t, 0, n),
    e.P(-1, -30 + n, X4.red, 3, 1),
    e.P(0, -30 + n, X4.core),
    u3(e, t, [
      [9, -35 + n],
      [-13, -38 + n],
      [8, -40 + n],
    ]));
}
function Qae(e, t) {
  let n = t.bob;
  (l3(e, t, n, 1), c3(e, t, 1, n));
  let r = Math.round(t.props.hr);
  (e.P(-3, -39 + n, r3, 7, 1),
    e.P(-4, -38 + n, r3, 9, 2),
    e.P(-5, -36 + n, r3, 11, 14));
  for (let t = 0; t < 5; t++) {
    let i = -5 + t * 2 + +(t > 2),
      a = 3 + ((t * 3) % 3),
      o = Math.round((r * (t + 1)) / 5);
    (e.P(i + o, -22 + n, r3, 2, a), e.P(i + o + 1, -22 + n + a - 1, a3, 1, 1));
  }
  (e.P(-5, -35 + n, a3, 1, 13), e.P(5, -35 + n, i3, 1, 11));
  for (let t of [-3, 2]) e.P(t, -34 + n, a3, 1, 12);
  (e.P(0, -38 + n, a3, 1, 5),
    e.P(-2, -39 + n, i3, 2, 1),
    e.P(-1, -36 + n, i3, 1, 8),
    e.P(-4, -39 + n, `#e6fdff`, 9, 1),
    e.P(-3, -40 + n, `#e6fdff`),
    e.P(3, -40 + n, `#e6fdff`),
    e.crown(0, -43 + n, 1));
  for (let r of [t.L, t.R])
    r[1] < -30 && e.P(Math.round(r[0]) - 1, Math.round(r[1]) + n, t3, 2, 1);
  u3(e, t, [
    [-11, -35 + n],
    [9, -38 + n],
    [-10, -40 + n],
  ]);
}
function $ae(e, t) {
  let n = t.bob,
    r = Math.round(t.props.hr);
  (e.P(-5, -36 + n, r3, 3, 14),
    e.P(-6 + r, -24 + n, r3, 3, 4),
    e.P(-6 + r, -21 + n, a3, 2, 2),
    l3(e, t, n, 2),
    e.P(-2, -29 + n, Q4, 4, 2));
  for (let [t, r, i, a] of [
    [-38, -3, 2, 2],
    [-37, -4, 3, 3],
    [-36, -4, 0, 3],
    [-35, -4, -1, 3],
    [-34, -4, -1, 4],
    [-33, -4, -1, 3],
    [-32, -4, -1, 2],
    [-31, -4, -1, 2],
  ])
    for (let o = r; o <= a; o++)
      e.P(o, t + n, o <= i ? (o === r ? a3 : r3) : t3);
  (e.P(-3, -38 + n, i3, 3, 1),
    e.P(-1, -30 + n, n3, 2, 1),
    e.P(1, -30 + n, X4.red),
    e.P(2, -34 + n, t.hurt ? `#4a6f94` : `#6a86a6`, 2, 1));
  let i = t.props.sing;
  (e.P(3, -32 + n, `#3a2a4a`, 1, i > 0.5 ? 2 : 1),
    e.P(-2, -39 + n, `#e6fdff`, 5, 1),
    e.P(0, -40 + n, `#e6fdff`),
    e.crown(0, -43 + n, 2),
    c3(e, t, 2, n),
    u3(e, t, [
      [7, -36 + n],
      [10, -39 + n],
      [6, -42 + n],
    ]));
}
var eoe = {
    id: `maelis`,
    gait: `float`,
    stride: 10,
    top: 44,
    ticks: 6,
    hemFrom: -16,
    props: { sing: 0, fc: 0, hr: 0 },
    front: [`hymn`, `choir`],
    linger: { crescendo: 0.6, faces: 0.8 },
    pose: Yae,
    paint(e, t) {
      t.v === 0 ? Zae(e, t) : t.v === 1 ? Qae(e, t) : $ae(e, t);
    },
  },
  d3 = { dark: `#5a0a1a`, red: `#b01a2a` },
  f3 = `#07050c`,
  p3 = `#9a93a8`,
  m3 = `#9aa4d6`,
  h3 = (e, t) => {
    let n = Math.sin(e * 127.1 + t * 311.7) * 43758.5453;
    return n - Math.floor(n);
  },
  toe = {
    0: { L: [-6, -29], R: [6, -29] },
    1: { L: [6, -29], R: [-6, -29] },
    2: { L: [-1, -29], R: [1, -29] },
  },
  noe = {
    0: { L: [-5, -20], R: [5, -20] },
    1: { L: [5, -20], R: [-5, -20] },
    2: { L: [-1, -20], R: [1, -20] },
  };
