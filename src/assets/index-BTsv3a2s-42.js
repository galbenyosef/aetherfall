// index-BTsv3a2s 42 — math
// Lines 31244-31566 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function nh(e, t, n, r, i, a, o, s, c = 1) {
  let l = 2.7,
    u = r - t,
    d = i - n,
    f = Math.hypot(u, d) || 1e-4;
  f > 2 * l - 0.01 &&
    ((r = t + (u / f) * (2 * l - 0.01)),
    (i = n + (d / f) * (2 * l - 0.01)),
    (u = r - t),
    (d = i - n),
    (f = 2 * l - 0.01));
  let p = f / 2,
    m = Math.sqrt(Math.max(0, l * l - p * p)) * c,
    h = -d / f,
    g = u / f;
  (h * s < 0 || (h === 0 && g < 0)) && ((h = -h), (g = -g));
  let _ = t + (u / f) * p + h * m,
    v = n + (d / f) * p + g * m,
    y = (t, n, r, i, a) => {
      let o = Math.max(
        1,
        Math.ceil(Math.max(Math.abs(r - t), Math.abs(i - n))),
      );
      for (let s = 0; s <= o; s++)
        e(
          Math.round(t + ((r - t) * s) / o - 0.5),
          Math.round(n + ((i - n) * s) / o - 0.5),
          a,
          2,
          2,
        );
    };
  (y(t, n, _, v, a), y(_, v, r, i, o));
}
function rh(e, t, n, r) {
  let i = r.arms;
  if (!i || n !== 2 || !i.far) return;
  let a = (t, n, r, i = 1, a = 1) => N(e, t + 2, n + 2, r, i, a),
    [, o] = th(n),
    s = r.bob;
  (nh(a, o[0], o[1] + s, i.fh[0], i.fh[1] + s, t.robeDark, t.robeDark, -1),
    ih(a, t, i.fh[0], i.fh[1] + s, !!i.hot, Xm, 1));
}
function ih(e, t, n, r, i, a, o) {
  let s = Math.round(n - 0.5),
    c = Math.round(r - 0.5);
  if (!i) return e(s, c, a, o, 1);
  (e(s, c - 1, t.glow, o, 1),
    e(s - 1, c, t.glow),
    e(s + o, c, t.glow),
    e(s, c, t.spark, o, 1));
}
function ah(e, t, n, r) {
  let i = r.arms;
  if (!i) return;
  let a = (t, n, r, i = 1, a = 1) => N(e, t + 2, n + 2, r, i, a),
    o = r.bob,
    s = n === 2,
    [c, l] = th(n),
    u = i.sh[0],
    d = i.sh[1] + o,
    f = Math.sin(i.ang),
    p = -Math.cos(i.ang),
    m = 16 * i.len,
    h = (s ? 8 : 7) * i.len,
    g = u - f * h,
    _ = d - p * h,
    v = u + f * (m - h),
    y = d + p * (m - h),
    b = Math.max(1, Math.ceil(Math.max(Math.abs(v - g), Math.abs(y - _))));
  for (let e = 0; e <= b; e++)
    a(
      Math.round(g + ((v - g) * e) / b - 0.5),
      Math.round(_ + ((y - _) * e) / b - 0.5),
      e === b - 1 ? eh : $m,
    );
  let x = Math.round(v + f * 2 - 0.5),
    S = Math.round(y + p * 2 - 0.5);
  if (
    (a(x - 1, S - 1, t.orb, 3, 3),
    a(Math.round(v + f * 4 - 0.5), Math.round(y + p * 4 - 0.5), t.orb),
    a(x, S, `#ffffff`),
    a(x + 1, S - 1, t.glow),
    s)
  )
    nh(a, c[0], c[1] + o, u, d, t.robe, t.robeDark, -1);
  else {
    let e = n === 1;
    nh(
      a,
      c[0],
      c[1] + o,
      u,
      d,
      e ? t.robe : t.robeDark,
      e ? t.robe : t.robeDark,
      e ? -1 : 1,
      0.35,
    );
    let r = !e && i.fh[0] > 5.5,
      s = e || r ? t.robeDark : t.robe;
    (nh(a, l[0], l[1] + o, i.fh[0], i.fh[1] + o, s, s, e ? 1 : -1, 0.35),
      ih(a, t, i.fh[0], i.fh[1] + o, !!i.hot, Ym, e ? 1 : 2));
  }
  a(Math.round(u - 0.5), Math.round(d - 0.5), Ym);
}
function oh(e, t, n, r, i, a) {
  let o = {
    leg: n === 2 ? r : 0,
    liftL: Math.max(0, r),
    liftR: Math.max(0, -r),
    bob: i,
    cast: a,
    lift: a ? -3 : 0,
  };
  (ch(e, t, n, o), lh(e, t, n, o));
}
var sh = (e) => (e === 2 ? 12 : e === 1 ? 2 : 13);
function ch(e, t, n, r) {
  let i = (t, n, r, i = 1, a = 1) => N(e, t + 2, n + 2, r, i, a),
    a = n === 2,
    o = n === 1,
    { leg: s, bob: c, cast: l } = r;
  a
    ? (i(6 + s, 22, Qm, 3, 2), i(8 - s, 22, I(Qm, 0.15), 3, 2))
    : (i(5, 22 - r.liftL, Qm, 3, 2), i(9, 22 - r.liftR, Qm, 3, 2));
  let u = c;
  for (let e = 12; e <= 21; e++) {
    let n = a ? 2.6 + (e - 12) * 0.24 : 3 + (e - 12) * 0.26,
      r = Math.round(8 - n),
      o = Math.round(8 + n) - 1,
      s = e + (e < 20 ? u : 0);
    for (let e = r; e <= o; e++) {
      let n = t.robe;
      (e >= o - 1 ? (n = t.robeDark) : e === r && (n = I(t.robe, 0.18)),
        a && e <= r + 1 && (n = t.robeDark),
        i(e, s, n));
    }
    if (e === 21) for (let e = r; e <= o; e++) i(e, s, t.trim);
  }
  if (n === 0)
    for (let e = 13; e <= 20; e++) i(8, e + (e < 20 ? u : 0), t.trim);
  if (o) for (let e = 13; e <= 20; e++) i(7, e + u, t.robeDark, 2, 1);
  let d = 16 + u;
  a
    ? (i(6, d, t.robeDark, 5, 1), i(9, d, t.trim))
    : (i(5, d, t.robeDark, 6, 1), o || i(7, d, t.trim, 2, 1));
  let f = u;
  a
    ? (i(6, 7 + f, Ym, 5, 5),
      i(6, 7 + f, Xm, 1, 5),
      i(6, 7 + f, Zm, 2, 4),
      i(9, 9 + f, `#1b1030`),
      i(10, 10 + f, Xm),
      i(8, 11 + f, Zm, 3, 2),
      i(9, 13 + f, Zm, 2, 1))
    : o
      ? (i(5, 7 + f, Zm, 6, 5), i(5, 11 + f, I(Zm, -0.15), 6, 1))
      : (i(5, 7 + f, Ym, 6, 5),
        i(10, 7 + f, Xm, 1, 5),
        i(5, 7 + f, Zm, 1, 4),
        i(10, 7 + f, Zm, 1, 4),
        i(6, 9 + f, `#1b1030`),
        i(9, 9 + f, `#1b1030`),
        i(6, 11 + f, Zm, 4, 2),
        i(7, 13 + f, Zm, 2, 1));
  let p = (e, n, r, a = 0) => {
    for (let o = 0; o < r; o++) i(e + o, n + f, o >= r - a ? t.hatDark : t.hat);
  };
  (i(3, 6 + f, t.hatDark, 10, 1),
    i(3, 6 + f, t.hat, 7, 1),
    i(4, 5 + f, t.trim, 8, 1),
    a
      ? (p(5, 4, 6, 2), p(5, 3, 4, 1), p(4, 2, 4, 1), p(3, 1, 3, 1), p(2, 0, 2))
      : (p(5, 4, 6, 2),
        p(6, 3, 4, 1),
        p(6, 2, 3, 1),
        p(7, 1, 2, 1),
        p(8, 0, 2)),
    o || i(7, 3 + f, t.trim),
    !r.arms &&
      (a
        ? (i(8, 13 + u, t.robe, 3, 2),
          i(10, 14 + u + (l ? -2 : 0), t.robeDark, 2, 2))
        : (i(3, 13 + u, t.robe, 2, 4),
          i(11, 13 + u, t.robeDark, 2, 4),
          o ? i(12, 17 + u, Ym) : i(3, 17 + u + (l ? -5 : 0), Ym, 2, 1))));
}
function lh(e, t, n, r) {
  let i = (t, n, r, i = 1, a = 1) => N(e, t + 2, n + 2, r, i, a),
    a = n === 2,
    { bob: o, cast: s, lift: c } = r,
    l = sh(n),
    u = 7 + c + o;
  for (let e = u; e <= 23 + c; e++) i(l, e, e === u + 1 ? eh : $m);
  (i(l - 1, u - 3, t.orb, 3, 3),
    i(l, u - 4, t.orb),
    i(l, u - 2, `#ffffff`),
    i(l + 1, u - 3, t.glow),
    a ? i(l - +!s, 15 + o + c, Ym) : i(l, 16 + o + c, Ym));
}
var uh = new Map();
function dh(e) {
  return fh(e, S[e].colors);
}
function fh(e, t, n) {
  let r = nm(e);
  if (r) return r;
  let i = uh.get(e);
  if (i) return i;
  let a = [],
    o = [],
    s = [
      [0, 0, !1],
      [0, 1, !1],
      [1, 0, !1],
      [0, 1, !1],
      [-1, 0, !1],
      [0, 1, !1],
      [0, 0, !0],
    ];
  for (let e of [0, 1, 2]) {
    let r = [];
    for (let [i, a, o] of s) {
      let [s, c] = M(20, 28);
      (oh(c, t, e, i, a, o), n?.(c, e, a, o), F(s), r.push(s));
    }
    a[e] = r;
  }
  a[3] = a[2].map(Ip);
  for (let e = 0; e < 4; e++) o[e] = a[e].map((e) => Fp(e));
  let c = tm(e, { frames: a, flash: o });
  return (uh.set(e, c), c);
}
function ph(e, t) {
  let n = [0, 1, 2, 1][t],
    r = 7 + n * 0.5,
    i = 5.5 - n * 0.5,
    a = 14 - i;
  (P(e, 10, a + 1, r, i, `#2f8f3a`),
    P(e, 10, a, r - 0.5, i - 0.5, `#5ccf4f`),
    P(e, 8, a - 2, 2.2, 1.6, `#b6f59a`),
    N(e, 7, a - 2, `#ffffff`),
    N(e, 11, a - 1, `#10240f`, 1, 2),
    N(e, 14, a - 1, `#10240f`, 1, 2),
    N(e, 12, a + 2, `#1c5a22`, 2, 1));
}
function mh(e, t) {
  let n = [0, 1, 0, -1][t];
  (P(e, 5 + n * 0.5, 13, 2.5, 3, `#3b86ff`),
    P(e, 3, 9 - n, 1.5, 2, `#7fc4ff`),
    P(e, 10, 11, 6, 6, `#4aa6ff`),
    P(e, 10, 11, 4.5, 4.5, `#aee6ff`),
    P(e, 10, 10, 2.6, 2.6, `#ffffff`),
    N(e, 11, 10, `#0a2250`),
    N(e, 13, 10, `#0a2250`),
    N(e, 10, 3 + n, `#aee6ff`, 1, 2));
}
function hh(e, t) {
  let n = `#3a3150`,
    r = `#231d33`,
    i = `#5b4f78`,
    a = [0, 1, 0, -1][t];
  (N(e, 6 + a, 13, r, 2, 4),
    N(e, 9 - a, 13, n, 2, 4),
    N(e, 16 - a, 13, r, 2, 4),
    N(e, 19 + a, 13, n, 2, 4),
    P(e, 13, 10, 8.5, 4, n),
    P(e, 13, 8.5, 7, 2, i),
    N(e, 2, 6 - (t % 2), n, 3, 2),
    N(e, 1, 5 - (t % 2), i, 2, 1),
    P(e, 22, 7, 3.5, 3, n),
    N(e, 24, 8, n, 3, 2),
    N(e, 26, 8, `#0a0710`),
    N(e, 20, 2, r, 2, 3),
    N(e, 22, 6, `#ff3355`, 2, 1),
    N(e, 24, 10, `#e8e0f0`, 2, 1));
}
function gh(e, t) {
  let n = [0, 1, 0, 1][t],
    r = `#c2361f`,
    i = `#7a1d10`,
    a = t % 2 == 0 ? 0 : 1;
  (N(e, 2, 5 + a, `#3d1410`, 4, 5 - a),
    N(e, 1, 4 + a, `#5c2016`, 2, 2),
    N(e, 3, 14, i, 3, 1),
    N(e, 2, 13, `#ffb238`),
    N(e, 8, 15, i, 2, 3),
    N(e, 12, 15, i, 2, 3),
    P(e, 11, 11 + n, 4.5, 4.5, r),
    P(e, 12, 12 + n, 2.5, 2.5, `#e05a2a`),
    P(e, 12, 5 + n, 3.5, 3.2, r),
    N(e, 9, 1 + n, `#f3e2c0`, 1, 2),
    N(e, 15, 1 + n, `#f3e2c0`, 1, 2),
    N(e, 13, 4 + n, `#ffe45c`, 2, 1),
    N(e, 13, 7 + n, `#2a0b06`, 2, 1));
}
function _h(e, t) {
  let n = `#6f6a7a`,
    r = `#45404f`,
    i = `#9a95a6`,
    a = `#4f7a3a`,
    o = `#7ef9ff`,
    s = t % 2 == 0 ? 0 : 1;
  (N(e, 8, 28 - s, r, 6, 6 + s),
    N(e, 20, 28 - (1 - s), r, 6, 6 + (1 - s)),
    N(e, 5, 12, n, 24, 17),
    N(e, 5, 12, i, 24, 3),
    N(e, 25, 15, r, 4, 14),
    N(e, 8, 14, a, 5, 2),
    N(e, 15, 18, o, 4, 1),
    N(e, 16, 17, o, 2, 4),
    N(e, 12, 24, o, 2, 1),
    N(e, 20, 22, o, 1, 2),
    N(e, 0, 14 + s, r, 5, 14),
    N(e, 29, 14 + (1 - s), r, 6, 14),
    N(e, 0, 14 + s, n, 4, 3),
    N(e, 29, 14 + (1 - s), n, 5, 3),
    N(e, 12, 4, n, 11, 9),
    N(e, 12, 4, i, 11, 2),
    N(e, 12, 4, a, 4, 1),
    N(e, 18, 8, o, 3, 2));
}
