// index-BTsv3a2s 122 — math
// Lines 56483-56778 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function qA(e, t, n, r) {
  let i = n - r,
    a = Math.floor(n / e.course),
    o = (a % 2) * 5,
    s = Math.floor((t + o) / 10),
    c = e.face[Math.floor(SA(s, a, 4401) * 4)];
  return (
    (n % e.course === 0 || (t + o) % 10 == 0) && (c = e.mortar),
    i < 2
      ? (c = i === 0 ? e.cornice : I(e.cornice, -0.2))
      : i === 2 && (c = I(e.mortar, -0.25)),
    c
  );
}
function JA(e, t, n, r, i, a) {
  let o = t.n,
    s = (e, n) => (e < 0 || n < 0 || e >= o || n >= o ? 0 : t.h[n * o + e]),
    c = (e, t) => s(e, t) > 0 && s(e, t + 1) < s(e, t),
    l = [],
    u = [];
  for (let d = 0; d < o; d++) {
    let f = n * o + d,
      p = t.h[f];
    if (!p) continue;
    let m = WA[t.pal[f]],
      h = d * 16 - r,
      g = n * 16 + 16 - i,
      _ = g - 16 - p,
      v = t.flag[f],
      y = s(d, n + 1) < p;
    if (y) {
      let t = (v & Xn.SPAN) !== 0,
        r = t ? 12 : p,
        a = g - p;
      for (let n = 0; n < r; n++)
        for (let r = 0; r < 16; r++) {
          let o = d * 16 + r,
            s = a + i + n,
            c = qA(m, o, s, a + i);
          (!t && n >= p - 3
            ? ((c = n === p - 1 ? I(m.plinth, -0.3) : m.plinth),
              SA(o, s, 77) < 0.3 && (c = `#4f7a3a`))
            : !t && n >= p - 6 && SA(o, s, 78) < 0.08 && (c = `#4f7a3a`),
            N(e, h + r, a + n, c));
        }
      (t
        ? (N(e, h, a + 12, wA, 16, 1),
          N(e, h, a + 13, `rgba(10,6,20,0.35)`, 16, 2))
        : (!(v & Xn.ARCH) &&
            p >= 26 &&
            SA(d, n, 311) < 0.35 &&
            (N(e, h + 7, a + 8, `#1a1420`, 2, 9),
            N(e, h + 6, a + 11, `#1a1420`, 4, 2),
            N(e, h + 9, a + 8, m.cornice, 1, 9)),
          N(e, h, g, `rgba(10,6,20,0.35)`, 16, 2)),
        (!c(d - 1, n) || s(d - 1, n) < p) && N(e, h - 1, a, wA, 1, r + 1),
        (!c(d + 1, n) || s(d + 1, n) < p) && N(e, h + 16, a, wA, 1, r + 1),
        t || N(e, h, g - 1, wA, 16, 1));
    }
    for (let t = 0; t < 16; t++)
      for (let r = 0; r < 16; r++) {
        let i = d * 16 + r,
          a = n * 16 + t,
          o = Math.floor(a / 6),
          s = Math.floor(SA(o, 0, 61) * 8),
          c = Math.floor((i + s) / 9),
          l =
            SA(c, o, 62) < 0.3
              ? I(m.walk, -0.05)
              : SA(c, o, 62) > 0.85
                ? I(m.walk, 0.05)
                : m.walk;
        (a % 6 == 0 || (i + s) % 9 == 0
          ? (l = m.joint)
          : SA(i, a, 55) < 0.05 && (l = I(m.walk, -0.08)),
          N(e, h + r, _ + t, l));
      }
    let b = s(d, n - 1) < p,
      x = s(d, n + 1) < p,
      S = s(d - 1, n) < p,
      C = s(d + 1, n) < p,
      w = (t, n, r, i) => {
        (N(e, t, n, I(m.merlon, 0.12), r, i),
          N(e, t, n, I(m.merlon, 0.3), r, 1),
          N(e, t, n + i - 2, I(m.merlonD, -0.1), r, 2),
          N(e, t + r - 1, n, I(m.merlon, -0.1), 1, i - 2));
      },
      T = I(m.walk, -0.35);
    if (b || x) {
      for (let [t, n] of [
        [b, 0],
        [x, 11],
      ])
        if (t)
          for (let t = 0; t < 16; t++) {
            let r = (d * 16 + t) % 8;
            r < 5
              ? r === 0 && w(h + t, _ + n, Math.min(5, 16 - t), 5)
              : N(e, h + t, _ + n, T, 1, 5);
          }
    }
    for (let [t, r] of [
      [S, 0],
      [C, 12],
    ])
      if (t)
        for (let t = 0; t < 16; t++) {
          let i = (n * 16 + t) % 8;
          i < 5
            ? i === 0 && w(h + r, _ + t, 4, Math.min(5, 16 - t))
            : N(e, h + r, _ + t, T, 4, 1);
        }
    if (
      (b && N(e, h, _ - 1, wA, 16, 1),
      S && N(e, h - 1, _ - 1, wA, 1, 17),
      C && N(e, h + 16, _ - 1, wA, 1, 17),
      y && v & Xn.ARCH && !(t.flag[f - 1] & Xn.ARCH))
    ) {
      let c = 1;
      for (
        ;
        d + c < o && t.flag[f + c] & Xn.ARCH && s(d + c, n + 1) < s(d + c, n);
      )
        c++;
      (l.push(() => YA(e, h, g, c * 16, p, m)),
        a?.push({
          x: h + (c * 16) / 2 - 12 + r,
          y: g - 12 + i,
          r: 20,
          color: `#ffb347`,
          a: 0.8,
        }),
        a?.push({
          x: h + (c * 16) / 2 + 12 + r,
          y: g - 12 + i,
          r: 20,
          color: `#ffb347`,
          a: 0.8,
        }));
    }
    y &&
      v & Xn.BANNER &&
      !(v & Xn.SPAN) &&
      u.push(() => KA(e, h + 4, g - p + 3, t.banner[f], Math.min(18, p - 10)));
  }
  for (let e of l) e();
  for (let e of u) e();
}
function YA(e, t, n, r, i, a) {
  let o = t + 4,
    s = t + r - 4,
    c = s - o,
    l = i - 9,
    u = Math.min(10, Math.round(c / 3)),
    d = l - u,
    f = (o + s) / 2,
    p = (e, t) => {
      if (e < o || e >= s) return !1;
      if (t < d) return !0;
      let n = (e + 0.5 - f) / (c / 2),
        r = (t - d) / u;
      return n * n + r * r <= 1;
    };
  for (let t = 0; t < l + 3; t++)
    for (let r = o - 3; r < s + 3; r++)
      if (p(r, t)) {
        let i = `#1a1420`;
        (t > d - 4 && ((r - o) % 5 == 2 || t % 5 == 0) && (i = `#3b3548`),
          t < 3 && (i = `#2b2433`),
          N(e, r, n - 1 - t, i));
      } else if (p(r - 3, t) || p(r + 3, t) || p(r, t - 3)) {
        let i = Math.floor(Math.atan2(t - d, r - f) * 5);
        N(
          e,
          r,
          n - 1 - t,
          t > d - 2
            ? i % 2
              ? a.cornice
              : I(a.cornice, -0.15)
            : I(a.face[0], -0.1),
        );
      }
  (N(e, Math.round(f) - 2, n - l - 4, a.cornice, 4, 4),
    N(e, Math.round(f) - 2, n - l - 4, `#ffffff`, 4, 1));
  for (let t of [o - 8, s + 5])
    (N(e, t, n - 20, `#2b2633`, 4, 6), N(e, t + 1, n - 19, `#ffe08a`, 2, 4));
}
function XA(e) {
  let t = WA[e.pal ?? 0],
    n = e.d * 16,
    r = n / 2 - 1,
    i = Math.round(n * 0.32),
    a = e.roof ? Math.round(n * 0.95) : 0,
    o = n + 6,
    s = i * 2 + e.bodyH + a + (e.flag ? 14 : 6) + 4,
    [c, l] = M(o, s),
    u = o / 2,
    d = s - 1 - i,
    f = d - e.bodyH,
    p = [],
    m = (e, t, n) => Math.sqrt(Math.max(0, 1 - (e / t) * (e / t))) * n;
  for (let e = Math.ceil(u - r); e < u + r; e++) {
    let n = e + 0.5 - u,
      a = n / r,
      o = Math.round(f + m(n, r, i)),
      s = Math.round(d + m(n, r, i)),
      c = 0.1 - Math.max(0, a) * 0.34 + Math.max(0, -a - 0.6) * -0.2;
    for (let u = o; u <= s; u++) {
      let o = u - m(n, r, i),
        d = Math.floor(o / t.course),
        f = Math.asin(Math.max(-1, Math.min(1, a))) * r,
        p = (d % 2) * 4,
        h = t.face[Math.floor(SA(Math.floor((f + p) / 8), d, 811) * 4)];
      ((Math.floor(o) % t.course === 0 || Math.floor(f + p + 200) % 8 == 0) &&
        (h = t.mortar),
        u > s - 3 && (h = SA(e, u, 7) < 0.3 ? `#4f7a3a` : t.plinth),
        N(l, e, u, I(h, c)));
    }
  }
  let h = Math.max(1, Math.floor(e.bodyH / 26));
  for (let n = 0; n < h; n++) {
    let a = Math.round(f + i + 8 + n * 24);
    if (a + 10 > d + i - 6) break;
    for (let i of n === 0 && e.window ? [0] : [-0.45, 0.45]) {
      let o = Math.round(u + i * r) - 1;
      n === 0 && e.window
        ? (N(l, o - 3, a - 1, `#2b2633`, 8, 12),
          N(l, o - 2, a, e.window, 6, 10),
          N(l, o - 2, a, `#ffffff`, 2, 2),
          N(l, o, a, `#2b2633`, 1, 10),
          p.push({ x: o + 1, y: a + 5, r: 22, color: e.window, a: 0.9 }))
        : (N(l, o, a, `#1a1420`, 2, 8),
          N(l, o + 2, a, I(t.cornice, -0.1), 1, 8));
    }
  }
  if (
    (e.banner !== void 0 &&
      KA(l, Math.round(u) - 5, Math.round(f + i + 4), e.banner, 20, 10),
    e.roof)
  ) {
    let t = r + 3,
      n = f - a;
    for (let r = Math.floor(u - t); r < u + t; r++) {
      let a = r + 0.5 - u,
        o = a / t,
        s = Math.round(n + Math.abs(o) * (f - n) * 0.98),
        c = Math.round(f + m(a, t, i + 2));
      for (let t = s; t <= c; t++) {
        let i = c - t,
          s = o > 0.28 ? e.roof[1] : e.roof[0];
        (o < -0.55 && (s = I(e.roof[0], 0.1)),
          i % 5 == 0
            ? (s = I(s, -0.2))
            : Math.floor(
                (Math.atan2(a, c - n + 1) + 3) * 14 +
                  (Math.floor(i / 5) % 2) * 0.5,
              ) %
                3 ==
                0 && (s = I(s, -0.08)),
          t === c && (s = I(e.roof[1], -0.3)),
          N(l, r, t, s));
      }
    }
    for (let r = n; r < f; r++)
      N(l, Math.round(u - 1 - ((r - n) / (f - n)) * t * 0.28), r, e.roof[2]);
    if ((N(l, Math.round(u) - 1, n - 6, `#ffd166`, 2, 7), e.flag)) {
      for (let t = 0; t < 5; t++)
        N(l, Math.round(u) + 1, n - 12 + t, e.flag, 7 - t, 1);
      N(l, Math.round(u) - 1, n - 13, `#2b2633`, 1, 8);
    }
  } else {
    for (let e = Math.ceil(u - r); e < u + r; e++) {
      let n = e + 0.5 - u,
        a = m(n, r, i);
      for (let o = Math.round(f - a); o <= Math.round(f + a); o++) {
        let a = m(n, r - 4, i - 3),
          s = Math.abs(n) > r - 4 || o < f - a || o > f + a,
          c = s ? t.merlon : (e + o) % 8 == 0 ? t.joint : t.walk;
        if (s) {
          let e = Math.atan2((o - f) / i, n / r);
          Math.floor((e + 4) * 6) % 2 == 1
            ? (c = I(t.walk, -0.18))
            : o > f + a && (c = t.merlonD);
        }
        N(l, e, o, c);
      }
    }
    if (e.flag) {
      let t = Math.round(u);
      N(l, t, f - 20, `#2b2633`, 1, 20);
      for (let n = 0; n < 6; n++) N(l, t + 1, f - 20 + n, e.flag, 9 - n, 1);
    }
  }
  return (F(c, wA), { c, ax: Math.round(u), ay: s - 1, lights: p });
}
