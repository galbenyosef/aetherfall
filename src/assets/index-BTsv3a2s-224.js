// index-BTsv3a2s 224 — math
// Lines 144024-144337 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function u4(e, t, n) {
  let r = t === 1 ? -1 : 1,
    i = l4[t],
    a = t === 2 ? n.walk * 2.5 : 0,
    o = {
      L: [i.L[0] - a, i.L[1]],
      R: [i.R[0] + a, i.R[1]],
      props: { gr: 0, fl: 0 },
    };
  if (!e) return o;
  let s = S2(e.k),
    c = o.props,
    l = (e, t) => [e * r, t];
  switch (e.id) {
    case `cleave`:
      if (!e.landed)
        ((o.R = C2(i.R, t === 2 ? [-5, -40] : l(13, -43), s)),
          (o.lean = -1 * s),
          (o.rise = 0.5 * s));
      else {
        let n = S2(e.since / 0.1);
        ((o.R = C2(
          t === 2 ? [-5, -40] : l(13, -43),
          t === 2 ? [15, -10] : l(5, -8),
          n,
        )),
          (o.lean = 2 * n),
          (o.rise = -1.5 * n));
      }
      return o;
    case `meteors`:
      return (
        (o.R = C2(i.R, t === 2 ? [4, -46] : l(13, -43), s)),
        (c.fl = e.landed ? Math.max(0, 1.5 - e.since * 3) : s),
        (o.tremble = !e.landed && s > 0.6 ? 0.6 : 0),
        (o.lean = t === 2 ? -0.8 * s : 0),
        o
      );
    case `caldera`:
      if (!e.landed)
        ((o.L = C2(i.L, l(-10, -42), s)),
          (o.R = C2(i.R, l(9, -42), s)),
          (o.tremble = +(s > 0.4)),
          (o.rise = 1 * s),
          (c.fl = s));
      else {
        let t = S2(e.since / 0.12),
          n = S2((e.since - 0.8) / 0.8);
        ((o.L = C2(C2(l(-10, -42), l(-12, -4), t), l(-15, -15), n)),
          (o.R = C2(C2(l(9, -42), l(11, -4), t), l(14, -15), n)),
          (o.rise = -4 * t * (1 - n)),
          (c.gr = 1),
          (c.fl = 1.5 - n * 0.5));
      }
      return o;
    case `shed`:
      return (
        (o.L = C2(i.L, l(-19, -18), s)),
        (o.R = C2(i.R, l(18, -18), s)),
        (o.tremble = +!e.landed),
        (o.rise = e.landed ? Math.max(0, 1 - e.since * 4) : 0),
        (c.fl = e.landed ? 1 : s * 1.5),
        o
      );
    case `vent`: {
      let t = e.landed && e.hold > 0,
        n = e.landed && e.hold <= 0;
      return (
        (o.L = n ? l(-13, -10) : C2(i.L, l(-19, -21), s)),
        (o.R = n ? l(12, -10) : C2(i.R, l(18, -21), s)),
        (o.lean = n ? 0.5 : -1 * s),
        (o.rise = n ? -1 : 1 * s),
        (o.tremble = t ? 0.6 : 0),
        (c.gr = s),
        (c.fl = t ? 1.2 : 0.5 * s),
        o
      );
    }
  }
  return o;
}
function d4(e, t, n, r, i, a = !1) {
  let o = 8.5,
    s = n[0] - t[0],
    c = n[1] - t[1],
    l = Math.min(2 * o, Math.hypot(s, c) || 1e-4),
    u = s / (Math.hypot(s, c) || 1),
    d = c / (Math.hypot(s, c) || 1),
    f = Math.sqrt(Math.max(0, o * o - (l / 2) ** 2)) * 0.5,
    p = t[0] + (u * l) / 2 - d * f * r,
    m = t[1] + (d * l) / 2 + u * f * r,
    h = t[0] + u * l,
    g = t[1] + d * l;
  (a &&
    (e.line(t[0], t[1], p, m, i4, 7),
    e.line(p, m, h - u * 2, g - d * 2, i4, 7),
    e.P(Math.round(h) - 5, Math.round(g) - 3, i4, 10, 8)),
    e.line(t[0], t[1], p, m, n4, a ? 5 : 6),
    e.line(p, m, h - u * 2, g - d * 2, n4, a ? 5 : 6),
    e.line(t[0] + r * 2.5, t[1] - 2, p + r * 2.5, m - 2, i),
    e.line(p + r * 2.5, m - 2, h - u * 2 + r * 2.5, g - d * 4, i));
  let _ = g < t[1] - 4,
    v = Math.round(h) - 4,
    y = Math.round(g) - 2;
  (e.P(v, y, n4, 8, _ ? 5 : 6),
    _
      ? (e.blob(v + 4, y - 0.5, 3.5, 2.5, a4),
        e.blob(v + 4, y - 0.5, 2, 1.5, o4),
        e.P(v + 4, y, t4.core))
      : e.P(v + 1, y + 1, a4, 6, 1));
}
function f4(e, t, n, r, i, a, o = 2) {
  let s = t.props.fl;
  for (let c = 0; c < i; c++) {
    let i = 2 + ((c + t.flut + a) % 3) + Math.round(s * (1 + (c % 2)));
    e.P(n + c * o, r - i, (c + a) % 2 ? a4 : s4, 1, i);
  }
}
function p4(e, t, n) {
  for (let [r, i] of [
    [-9, n ? t.liftR : t.liftL],
    [2, n ? t.liftL : t.liftR],
  ])
    (e.P(r, -10, n4, 6, 8 - i),
      e.P(r, -10, r4, 1, 8 - i),
      e.P(r - 1, -3 - i, i4, 8, 2));
  n || (e.P(-7, -7 - t.liftL, a4, 1, 2), e.P(5, -8 - t.liftR, a4, 1, 3));
}
function m4(e, t, n, r) {
  for (let t = -31 + n; t <= -10; t++) {
    let i = t - n + 45,
      a = i < 20 ? 12 : Math.max(8, 12 - (i - 20) * 0.3),
      o = Math.round(-1 - a),
      s = Math.round(-1 + a);
    for (let n = o; n <= s; n++)
      e.P(n, t, n <= o + 1 ? (r ? i4 : r4) : n >= s - 2 ? (r ? r4 : i4) : n4);
  }
  (r
    ? [
        [-1, -30],
        [-1, -29],
        [0, -28],
        [0, -27],
        [-1, -26],
        [-1, -25],
        [0, -24],
        [0, -23],
        [-1, -22],
        [-1, -21],
        [0, -20],
        [0, -19],
        [-8, -25],
        [-7, -24],
        [-7, -23],
        [-6, -22],
        [6, -26],
        [5, -25],
        [5, -24],
        [6, -23],
        [7, -22],
        [-4, -15],
        [-3, -14],
        [3, -15],
        [2, -14],
      ]
    : [
        [-10, -27],
        [-9, -26],
        [-8, -25],
        [-8, -24],
        [-9, -23],
        [-9, -22],
        [-8, -21],
        [-7, -20],
        [-8, -19],
        [-8, -18],
        [7, -28],
        [6, -27],
        [6, -26],
        [7, -25],
        [8, -24],
        [7, -23],
        [6, -22],
        [6, -21],
        [7, -20],
        [-4, -15],
        [-3, -14],
        [-2, -14],
        [-1, -13],
        [1, -14],
        [2, -15],
        [3, -14],
      ]
  ).forEach(([r, i], a) =>
    e.P(r, i + n, (a + t.flut) % 4 == 0 || t.props.fl > 1 ? o4 : a4),
  );
}
function h4(e, t, n) {
  let r = t.props.gr;
  (e.P(-6, -27 + n, i4, 11, 10),
    e.P(-5, -26 + n, t4.dark, 9, 8),
    e.blob(
      -0.5,
      -22 + n,
      3.5 + r * 1 + (t.flut === 2 ? 0.5 : 0),
      3 + r,
      t4.red,
    ),
    e.blob(-0.5, -22 + n, 1.6 + r * 1.2, 1.4 + r, t4.core));
  let i = Math.round(8 * (1 - r));
  for (let t of [-4, -1, 2]) e.P(t, -26 + n, i4, 1, i);
  (r > 0.3 && (e.P(-7, -27 + n, r4, 1, 10), e.P(-8, -26 + n, i4, 1, 8)),
    e.P(-5, -28 + n, a4, 2, 1),
    e.P(-1 + (t.flut % 2), -29 + n, o4, 2, 1),
    e.P(2, -28 + n, a4, 2, 1));
}
function g4(e, t, n) {
  (e.P(-16, -33 + n, r4, 9, 5),
    e.P(6, -33 + n, r4, 9, 5),
    e.P(-16, -29 + n, s4, 9, 1),
    e.P(6, -29 + n, s4, 9, 1),
    f4(e, t, -15, -33 + n, 4, 0),
    f4(e, t, 7, -33 + n, 4, 1));
}
function _4(e, t, n, r) {
  (e.P(-5, -38 + n, n4, 9, 8),
    e.P(-5, -38 + n, r4, 9, 1),
    r
      ? (e.P(-5, -34 + n, i4, 9, 1), e.P(-1, -37 + n, a4, 1, 3))
      : (e.P(-4, -35 + n, t.hurt ? a4 : o4, 7, 1),
        e.P(-2, -35 + n, t4.core, 3, 1),
        e.P(-3, -33 + n, i4, 5, 1),
        e.P(-2, -33 + n, a4, 3, 1)));
  for (let r = 0; r < 7; r++) {
    let i = 3 + ((r * 5 + t.flut * 3) % 4) + Math.round(t.props.fl);
    e.P(-5 + r + +(r > 3), -38 + n - i, r % 2 ? o4 : a4, 1, i);
  }
  (e.P(-4, -40 + n, s4, 7, 2), e.crown(-1, -45 + n, +!!r));
}
function v4(e, t) {
  let n = t.bob;
  (p4(e, t, !1),
    m4(e, t, n, !1),
    h4(e, t, n),
    g4(e, t, n),
    _4(e, t, n, !1),
    d4(e, [c4[0].L[0], c4[0].L[1] + n], [t.L[0], t.L[1] + n], -1, r4),
    d4(e, [c4[0].R[0], c4[0].R[1] + n], [t.R[0], t.R[1] + n], 1, i4));
}
function y4(e, t) {
  let n = t.bob;
  (p4(e, t, !0),
    m4(e, t, n, !0),
    g4(e, t, n),
    _4(e, t, n, !0),
    d4(e, [c4[1].L[0], c4[1].L[1] + n], [t.L[0], t.L[1] + n], 1, i4),
    d4(e, [c4[1].R[0], c4[1].R[1] + n], [t.R[0], t.R[1] + n], -1, r4));
}
function b4(e, t) {
  let n = t.bob;
  d4(e, [c4[2].L[0], c4[2].L[1] + n], [t.L[0], t.L[1] + n], 1, i4);
  let r = (t, n, r) => {
    (e.P(t, -10, n, 5, 8), e.P(t, -10, r, 1, 8), e.P(t - 1, -3, i4, 8, 2));
  };
  (r(-4 - t.stride, i4, n4),
    r(-2 + t.stride, n4, r4),
    e.P(0 + t.stride, -7, a4, 1, 2));
  for (let t = -31 + n; t <= -10; t++) {
    let r = t - n + 45,
      i =
        r < 18
          ? 8 + (r - 14) * 0.4
          : r < 26
            ? 9.6
            : Math.max(6.5, 9.6 - (r - 26) * 0.35),
      a = Math.round(-1.5 - i),
      o = Math.round(0.5 + i);
    for (let n = a; n <= o; n++)
      e.P(n, t, n <= a + 1 ? i4 : n >= o - 1 ? r4 : n4);
  }
  let i = t.props.gr;
  (e.P(8, -27 + n, i4, 2, 10),
    e.P(9, -26 + n, t4.red, 1 + Math.round(i), 8),
    e.P(9, -24 + n, t4.core, 1 + Math.round(i), 4));
  for (let [r, i] of [
    [-6, -27],
    [-5, -26],
    [-5, -25],
    [-6, -24],
    [-5, -23],
    [2, -16],
    [3, -15],
    [4, -15],
    [-3, -20],
    [-2, -19],
  ])
    e.P(r, i + n, (r + i + t.flut) % 4 == 0 ? o4 : a4);
  (e.P(-7, -33 + n, r4, 11, 5),
    e.P(-6, -34 + n, r4, 9, 1),
    e.P(-7, -29 + n, s4, 11, 1),
    f4(e, t, -6, -34 + n, 5, 2),
    e.P(0, -38 + n, n4, 6, 8),
    e.P(0, -38 + n, r4, 6, 1),
    e.P(3, -35 + n, t.hurt ? a4 : o4, 3, 1),
    e.P(4, -35 + n, t4.core, 2, 1),
    e.P(3, -33 + n, i4, 3, 1));
  for (let r = 0; r < 5; r++) {
    let i = 3 + ((r * 5 + t.flut * 3) % 4) + Math.round(t.props.fl);
    e.P(0 + r, -38 + n - i, r % 2 ? o4 : a4, 1, i);
  }
  (e.P(0, -40 + n, s4, 5, 2),
    e.crown(2, -45 + n, 2),
    d4(e, [c4[2].R[0], c4[2].R[1] + n], [t.R[0], t.R[1] + n], -1, r4, !0));
}
