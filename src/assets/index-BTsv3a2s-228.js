// index-BTsv3a2s 228 — math
// Lines 145353-145485 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function M3(e, t, n) {
  let r = t.props.cs,
    i = t.props.cl,
    a = n[0] + Math.sin(r) * i,
    o = n[1] + Math.cos(r) * i;
  e.line(n[0], n[1] + 1, a, o - 1, C3);
  let s = Math.round(a) - 1,
    c = Math.round(o);
  (e.P(s, c, T3, 4, 3),
    e.P(s, c, doe, 4, 1),
    e.P(s + 1, c + 1, g3.red, 2, 1),
    e.P(s + 1, c + 3, T3, 2, 1));
  let l = Math.floor(t.t * 3) % 2;
  (e.P(s + 1 - l, c - 2, `#6f6a7a`, 2, 1),
    e.P(s + 2 - l, c - 4, `#56535f`, 2, 1));
}
function N3(e, t, n) {
  e.rows(
    -25 + t,
    -1,
    () => 0,
    (e) => 4 + (e - t + 25) * 0.25,
    (e, t, r, i) =>
      e <= r + 1 ? (n ? y3 : v3) : e >= i - 1 ? (n ? v3 : y3) : _3,
  );
}
function P3(e, t) {
  e.P(Math.round(t[0]) - 1, Math.round(t[1]), w3, 2, 1);
}
function moe(e, t) {
  let n = t.bob;
  (N3(e, n, !1),
    e.P(-3, -26 + n, b3, 2, 20 - n),
    e.P(2, -26 + n, b3, 2, 20 - n),
    e.P(-2, -26 + n, x3, 1, 20 - n),
    e.P(3, -26 + n, x3, 1, 20 - n));
  for (let t = 17; t < 34; t += 4)
    (e.P(-3, t - 41 + n, `#6f6a7a`), e.P(2, t - 39 + n, `#6f6a7a`));
  (e.P(-3, -6, x3, 2, 2),
    e.P(2, -6, x3, 2, 2),
    e.P(-5, -36 + n, _3, 11, 11),
    e.P(-4, -38 + n, _3, 9, 2),
    e.P(-2, -39 + n, _3, 5, 1),
    e.P(-5, -36 + n, v3, 1, 11),
    e.P(-3, -33 + n, `#2a2630`, 7, 6));
  for (let t = -33; t < -27; t++)
    for (let r = -3; r < 4; r++)
      (((r + t + 1) % 2) + 2) % 2 == 0 && e.P(r, t + n, `#3e3846`);
  let r = t.props.ey > 0.5 ? g3.core : g3.red;
  (t.hurt || (e.P(-2, -31 + n, r), e.P(2, -31 + n, r)),
    e.P(-1, -27 + n, w3, 3, 1),
    e.crown(0, -42 + n, 0));
  let i = [t.L[0], t.L[1] + n];
  A3(e, t, j3(e, [E3[0].L[0], E3[0].L[1] + n], i, -1), 1);
  let a = [t.R[0], t.R[1] + n],
    o = e.arm([E3[0].R[0], E3[0].R[1] + n], a, 1, _3, {
      len: 6.5,
      w: 4,
      bend: 0.25,
    });
  (P3(e, o), M3(e, t, o));
}
function hoe(e, t) {
  let n = t.bob,
    r = [t.L[0], t.L[1] + n],
    i = [t.R[0], t.R[1] + n],
    a = e.arm([E3[1].R[0], E3[1].R[1] + n], i, -1, _3, {
      len: 6.5,
      w: 4,
      bend: 0.25,
    });
  (M3(e, t, a),
    N3(e, n, !0),
    e.P(-5, -26 + n, b3, 11, 2),
    e.P(-5, -25 + n, x3, 11, 1),
    e.P(-2, -24 + n, x3, 1, 3),
    e.P(2, -24 + n, x3, 1, 3),
    e.P(-5, -36 + n, _3, 11, 11),
    e.P(-4, -38 + n, _3, 9, 2),
    e.P(-2, -39 + n, _3, 5, 1),
    e.P(-2, -26 + n, _3, 5, 3),
    e.P(-1, -23 + n, _3, 3, 2),
    e.P(5, -36 + n, v3, 1, 11),
    e.P(0, -37 + n, y3, 1, 12),
    e.crown(0, -42 + n, 1),
    P3(e, a),
    A3(e, t, j3(e, [E3[1].L[0], E3[1].L[1] + n], r, 1), -1));
}
function goe(e, t) {
  let n = t.bob,
    r = [t.L[0], t.L[1] + n];
  (A3(e, t, j3(e, [E3[2].L[0], E3[2].L[1] + n], r, 1), -1),
    e.rows(
      -25 + n,
      -1,
      (e) => -0.5 - (e + 25) * 0.02,
      (e) => 3 + (e - n + 25) * 0.17,
      (e, t, n, r) =>
        e >= r - 1 && t < -6 ? (e === r ? b3 : x3) : e <= n + 1 ? y3 : _3,
    ),
    [
      [-1, 1],
      [-2, 2],
      [-3, 3],
      [-3, 4],
      [-4, 4],
      [-4, 4],
      [-4, 4],
      [-4, 4],
      [-4, 4],
      [-4, 4],
      [-4, 4],
      [-4, 3],
      [-3, 3],
    ].forEach(([t, r], i) => {
      for (let a = t; a <= r; a++)
        e.P(a, -39 + i + n, a === t ? y3 : a === r && i < 5 ? v3 : _3);
    }),
    e.P(2, -33 + n, `#2a2630`, 3, 6));
  for (let t = -33; t < -27; t++)
    for (let r = 2; r < 5; r++)
      (((r + t + 1) % 2) + 2) % 2 == 0 && e.P(r, t + n, `#3e3846`);
  (t.hurt || e.P(3, -31 + n, t.props.ey > 0.5 ? g3.core : g3.red),
    e.P(3, -27 + n, w3, 2, 1),
    e.crown(0, -42 + n, 2));
  let i = [t.R[0], t.R[1] + n],
    a = e.arm([E3[2].R[0], E3[2].R[1] + n], i, -1, _3, {
      len: 6.5,
      w: 4,
      bend: 0.25,
    });
  (P3(e, a), M3(e, t, a));
}
