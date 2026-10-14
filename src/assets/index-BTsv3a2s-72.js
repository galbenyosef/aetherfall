// index-BTsv3a2s 72 — math
// Lines 41293-41528 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function qb() {
  let [e, t] = Tm(240, 168, `cistern`, 8),
    n = [
      [44, 52, 28],
      [198, 46, 26],
      [44, 138, 30],
      [200, 136, 28],
    ];
  n.forEach(([e, n, r], i) => hb(t, e, n, r, i, i === 1 ? Ky : Xy, 23 + i));
  let { cx: r, cy: i } = Ub(t, 122, 108, 1),
    a = (e, t) => {
      let n = Math.atan2((t - 89) / 18, (e - 122) / 28);
      return [122 + Math.cos(n) * 29, 89 + Math.sin(n) * 19];
    };
  Vb(t, `cryo`, 122, 30, 0);
  let o = M(240, 168);
  n.forEach(([e, t, n], r) => {
    if (r !== 1)
      for (let i = 0; i < 4; i++) {
        let a = (i / 4) * Math.PI * 2 + r;
        yb(
          o[1],
          e,
          t,
          e + Math.cos(a) * n * 0.9,
          t + (Math.sin(a) * n * 0.9) / 1.1,
          80 + r * 7 + i,
          qy,
        );
      }
  });
  for (let [e, t] of [
    [0, 91],
    [2, 92],
    [3, 93],
  ]) {
    let s = n[e][0] + (n[e][0] < 122 ? 12 : -12),
      c = n[e][1] + (n[e][1] < 89 ? 8 : -8),
      [l, u] = a(s, c);
    (yb(o[1], l, u, s, c, t, qy, !0),
      vb(o[1], _b(r, i, l, u, 3, 0.4, t + 1), qy));
  }
  (yb(o[1], n[0][0] + 6, n[0][1] + 22, n[2][0] + 6, n[2][1] - 26, 94, qy),
    bm(t, o[0], 0, 0, 4, 0.75),
    t.drawImage(o[0], 0, 0));
  for (let e = 0; e < 40; e++) {
    if (e % 5 == 0) continue;
    let r = (e / 40) * Math.PI * 2,
      i = n[1][2] + ((e % 2) * 2 - 1);
    N(
      t,
      n[1][0] + Math.cos(r) * i,
      n[1][1] + (Math.sin(r) * i) / 1.1,
      e % 4 ? qy[3] : qy[4],
    );
  }
  (ym(t, r, i, 13, qy[3], 0.7), V(t, r, i, 8, 6, qy, 3));
  for (let [e, r] of n) ym(t, e, r, 22, qy[3], 0.3);
  (Dm(t, 240, 168, 0.4), Hb(t, `pyro`, 58, 146, 2, 0.35));
  for (let e = 0; e < 3; e++)
    vb(
      t,
      _b(58 + (e - 1) * 7, 146, 58 + (e - 1) * 4, 126, 3, 0.5, 120 + e),
      qy,
    );
  return e;
}
function Jb(e, t, n, r, i, a, o = 4, s = 4) {
  let c = Math.cos(r),
    l = Math.sin(r),
    u = -l,
    d = c,
    f = s / 2;
  for (let r = 0; r < o; r++) {
    let a = (r - (o - 1) / 2) * 2,
      s = t + c * a,
      p = n + l * a;
    z(e, s - u * f, p - d * f, s + u * f, p + d * f, i);
  }
  if (a) {
    let r = o;
    z(
      e,
      t - c * r + u * f,
      n - l * r + d * f,
      t + c * r - u * f,
      n + l * r - d * f,
      a,
    );
  }
}
function Yb(e, t, n, r, i, a = 0) {
  let o = r / 1.1;
  (Sm(e, t, n, r, o, Qy[1], 0.3),
    i > 0 && Sm(e, t, n, r * i, o * i, Qy[2], 0.3),
    B(e, t, n, r, o, $y[3], (e) => Math.round(e * r) % 3 != 0));
  let s = Math.max(3, Math.round((r * 2 * Math.PI) / 13));
  for (let c = 0; c < s; c++) {
    let l = -Math.PI / 2 + (c / s) * Math.PI * 2 + (L(c, a) - 0.5) * 0.08,
      u = t + Math.cos(l) * r,
      d = n + Math.sin(l) * o,
      f = Math.atan2(Math.cos(l) * o, -Math.sin(l) * r),
      p = c < i * s,
      m = p && c >= i * s - 1;
    Jb(
      e,
      u,
      d,
      f,
      p ? (m ? Qy[4] : Qy[3]) : Zy[1],
      p ? Qy[4] : Zy[2],
      4,
      r < 14 ? 3 : 4,
    );
  }
}
function Xb(e, t, n, r, i = 6) {
  let a = Math.cos(r),
    o = Math.sin(r),
    s = -o,
    c = a,
    l = (e, r) => [t + a * e + s * r, n + o * e + c * r];
  z(e, t - a * i, n - o * i, t, n, ib, 2);
  for (let t = 0; t <= 5; t += 0.5)
    (N(e, ...l(t, -1), nb[2]), N(e, ...l(t, 0), nb[3]));
  for (let t = -Math.PI / 2; t <= Math.PI * 0.9; t += 0.08)
    (N(e, ...l(5 + Math.cos(t) * 3, 2 + Math.sin(t) * 3), nb[2]),
      N(
        e,
        ...l(5 + Math.cos(t) * 2, 2 + Math.sin(t) * 2),
        t > 1.4 ? nb[4] : nb[3],
      ));
  N(e, ...l(2.2, 3.6), nb[4]);
}
function Zb(e, t, n, r, i, a = !1) {
  (z(e, t, n, t + Math.cos(r) * i, n + Math.sin(r) * i, a ? eb[3] : eb[2]),
    N(e, t + Math.cos(r) * i, n + Math.sin(r) * i, a ? eb[4] : eb[3]));
}
function Qb(e, t, n, r, i, a, o) {
  for (let s = 0; s < i; s++) {
    let i = -Math.PI / 2 + (L(s, o) - 0.5) * 2.4,
      c = a * (0.5 + L(s, o, 1) * 0.5),
      l = t + Math.cos(i) * c * r,
      u = n + Math.sin(i) * c * r + a * 1.4 * r * r;
    if (r > 0.85 && s % 2) continue;
    let d = L(s, o, 2) > 0.8;
    (N(e, l, u, d ? Zy[3] : $y[3], d ? 1 : 2, 1),
      d || N(e, l, u + 1, $y[2], 2, 1));
  }
}
function $b(e, t, n, r, i, a, o) {
  if (i <= 0) return;
  let s = n - r * i;
  for (let i = Math.ceil(s) + 6; i <= n; i++) {
    if (a > 0 && L(t, i, o) < a) continue;
    let s = (n - i) / r;
    (N(e, t, i, s < 0.12 ? Qy[3] : s < 0.25 ? Qy[2] : Zy[2]),
      N(e, t + 1, i, s < 0.12 ? Qy[2] : s < 0.25 ? Qy[1] : Zy[1]));
  }
  a > 0.7 ||
    (fm(
      e,
      [
        [t + 0.5, s],
        [t + 3, s + 3.5],
        [t + 1.5, s + 6.5],
        [t - 0.5, s + 6.5],
        [t - 2, s + 3.5],
      ],
      nb[2],
    ),
    N(e, t, s + 1, nb[4], 1, 4),
    N(e, t + 2, s + 6, nb[2]),
    N(e, t + 3, s + 5, nb[3]));
}
function ex(e, t, n, r, i, a, o) {
  let s = _b(t, n, r, i, 3, 0.35, o);
  for (let t = 0; t < s.length - 1; t++)
    z(e, s[t][0], s[t][1], s[t + 1][0], s[t + 1][1], $y[0], 2);
  if (a <= 0) return;
  let c = a > 0.85 ? Qy[4] : a > 0.5 ? Qy[3] : Qy[2];
  for (let t = 0; t < s.length - 1; t++)
    (a < 0.4 && t % 2) || z(e, s[t][0], s[t][1], s[t + 1][0], s[t + 1][1], c);
}
function tx(e, t, n, r, i, a) {
  for (let [o, s] of [
    [0, r],
    [1, r - 6],
  ]) {
    let r = s / 1.1,
      c = 1 / s,
      l = -Math.PI / 2 + o * 0.11,
      u = 0,
      d = [];
    for (; l < Math.PI * 1.5 - 4 * c;) {
      let e = 2 + Math.floor(L(u, o, 41) * 5);
      (d.push({ a: l, len: e, i: u }), (l += (e + 3) * c), u++);
    }
    d.forEach((l, u) => {
      let f = u / d.length < i,
        p = f && u / d.length > i - 0.08,
        m = f ? (p || (a + u) % 7 == 0 ? tb[4] : tb[3]) : $y[3];
      for (let i = 0; i < l.len; i++) {
        let a = l.a + i * c,
          u = t + Math.cos(a) * s,
          d = n + Math.sin(a) * r;
        (N(e, u, d, m),
          L(l.i, i, o + 43) > 0.55
            ? N(e, u, d - 1, f ? tb[2] : $y[2])
            : L(l.i, i, o + 44) > 0.8 && N(e, u, d + 1, f ? tb[2] : $y[2]));
      }
    });
  }
}
function nx(e, t, n, r, i = !1) {
  (P(e, t, n, 3.2, 3.2, rb[0]),
    P(e, t - 0.5, n - 0.5, 2.2, 2.2, rb[1]),
    N(e, t - 1, n - 2, rb[3]),
    (r % 2 || i) &&
      (vb(e, _b(t + 2, n - 1, t + 6, n - 4 - (r % 3), 2, 0.8, r + 3), [
        rb[0],
        rb[1],
        rb[2],
        rb[3],
        rb[4],
      ]),
      N(e, t, n, rb[4])),
    i &&
      vb(e, _b(t - 2, n + 1, t - 6, n - 3, 2, 0.8, r + 9), [
        rb[0],
        rb[1],
        rb[2],
        rb[3],
        rb[4],
      ]));
}
