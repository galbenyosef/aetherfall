// index-BTsv3a2s 91 — math
// Lines 47333-47624 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function lT(e, t, n, r, i, a) {
  Cm(e, t, n, r, Yw, i, sT(i, Math.max(6, Math.round(r / 3)), a));
  for (let o = 0; o < Math.round(r * i * 0.8); o++) {
    let s = L(o, a, 2) * Ww,
      c = Math.sqrt(L(o, a, 3)) * r * i * 0.9;
    N(
      e,
      t + Math.cos(s) * c,
      n + (Math.sin(s) * c) / 1.1,
      L(o, a, 4) > 0.6 ? Yw[4] : Yw[3],
    );
  }
}
function uT(e, t, n, r, i, a) {
  (P(e, t, n, r, r * 0.92, Yw[2]),
    P(e, t + 0.4, n + r * 0.25, r * 0.62, r * 0.5, Yw[3]));
  for (let o = 0; o < 4; o++) {
    let s = -Math.PI / 2 + (L(o, a) - 0.5) * 2.6 + i * 0.5;
    N(
      e,
      t + Math.cos(s) * r * 0.55 - 1,
      n + Math.sin(s) * r * 0.55 - 1,
      o % 2 ? iT[1] : iT[2],
      2,
      2,
    );
  }
  N(e, t, n + r * 0.3, Yw[4]);
}
function dT(e, t, n) {
  let r = Math.floor(e / 5),
    i = Math.floor(t / 4),
    a = 99,
    o = 99,
    s = 0;
  for (let c = -1; c <= 1; c++)
    for (let l = -1; l <= 1; l++) {
      let u = (r + l) * 5 + L(r + l, i + c, n) * 5,
        d = (i + c) * 4 + L(i + c, r + l, n + 1) * 4,
        f = Math.hypot(e + 0.5 - u, (t + 0.5 - d) * 1.2);
      f < a
        ? ((o = a), (a = f), (s = (r + l) * 31 + (i + c)))
        : f < o && (o = f);
    }
  return [a, o, s];
}
function fT(e, t, n, r, i, a, o) {
  let s = [[0, 0, 1, 1]];
  for (let e = 0; e < 4; e++) {
    let t = L(e, o) * Ww;
    s.push([
      Math.cos(t) * r * 0.45,
      Math.sin(t) * i * 0.45,
      0.55 + L(e, o, 1) * 0.2,
      0.55 + L(e, o, 2) * 0.2,
    ]);
  }
  for (let c = Math.floor(n - i * 1.3); c <= Math.ceil(n + i * 1.3); c++)
    for (let l = Math.floor(t - r * 1.3); l <= Math.ceil(t + r * 1.3); l++) {
      let u = 9;
      for (let [e, a, o, d] of s)
        u = Math.min(
          u,
          Math.hypot((l + 0.5 - t - e) / (r * o), (c + 0.5 - n - a) / (i * d)),
        );
      if (u > 1) continue;
      let [d, f, p] = dT(l - t + 64, c - n + 64, o),
        m = f - d < 1,
        h = a - u * 0.45 + (L(p, o, 4) - 0.5) * 0.25,
        g;
      ((g =
        u > 0.84
          ? h > 0.5
            ? Yw[2]
            : iT[1]
          : h > 0.72
            ? (u < 0.3 && h > 0.85) || L(l, c, o) > 0.85
              ? Yw[4]
              : Yw[3]
            : h > 0.38
              ? m
                ? Yw[3]
                : d < 1.2
                  ? iT[3]
                  : iT[2]
              : h > 0.08
                ? m
                  ? Yw[2]
                  : d < 1.2
                    ? iT[2]
                    : iT[1]
                : m
                  ? Yw[1]
                  : iT[0]),
        N(e, l, c, g));
    }
}
function pT(e, t, n, r, i, a, o, s, c = 1, l = 0) {
  let u = Math.cos(r),
    d = Math.sin(r),
    f = i * c,
    p = [t, t + u * f],
    m = [n, n + d * f];
  for (
    let r = Math.floor(Math.min(...m) - o);
    r <= Math.ceil(Math.max(...m) + o);
    r++
  )
    for (
      let c = Math.floor(Math.min(...p) - o);
      c <= Math.ceil(Math.max(...p) + o);
      c++
    ) {
      let p = c + 0.5 - t,
        m = r + 0.5 - n,
        h = p * u + m * d,
        g = -p * d + m * u;
      if (h < 0 || h > f) continue;
      let _ = (a + (o - a) * (h / i)) / 2,
        v = L(Math.floor((h - s * 7) / 3), Math.floor(g / 2), 5),
        y = Math.abs(g) / _;
      if (y > 1 + (v - 0.5) * 0.6) continue;
      let b = (1 - y * y) * 0.85 + (1 - h / i) * 0.35 + (v - 0.5) * 0.45 - l;
      if ((h > f - 8 && (b -= (h - (f - 8)) / 12), b < 0.14)) {
        if ((c + r + s) % 2) continue;
        N(e, c, r, iT[1]);
        continue;
      }
      N(e, c, r, rT(am(b * 0.95)));
    }
}
function mT(e, t, n, r, i, a, o, s) {
  for (let c = 0; c < r; c++) {
    let l = c / r,
      u = Math.max(0.5, i * (1 - l) * (l < 0.2 ? 0.7 + l * 1.5 : 1)),
      d = Math.sin(l * 4 + o * 1.7 + s) * l * 1.6;
    for (let r = -u; r <= u; r += 1) {
      let i = Math.abs(r) / Math.max(1, u),
        o = i > 0.7 ? a[1] : l > 0.75 ? a[2] : i < 0.3 && l < 0.4 ? a[4] : a[3];
      N(e, t + r + d, n - c, o);
    }
  }
}
var hT = () =>
    R(`k1-gorrath-arc`, 5, 54, 50, (e, t, n) => {
      let r = -1.3,
        i = r + 2.3 * Math.min(1, (t + 1) / 2),
        a = am((t - 1) / (n - 2));
      pm(e, 10, 22, 18, 31, 1.15, (e, t) => {
        if (t < r || t > i) return null;
        let n = (t - r) / (i - r);
        return e < 0.12 + a * 0.5 ||
          L(Math.round(t * 40), Math.round(e * 10), 3) < a * 0.85 * (1 - n)
          ? null
          : e > 0.86
            ? L(Math.round(t * 30), 1) > 0.72
              ? Yw[3]
              : n > 0.5
                ? iT[3]
                : iT[2]
            : e > 0.74
              ? n > 0.75
                ? Yw[4]
                : L(Math.round(t * 30), 2) > 0.6
                  ? Yw[3]
                  : iT[1]
              : n > 0.85
                ? `#ffffff`
                : n > 0.6
                  ? Yw[4]
                  : n > 0.3
                    ? Yw[3]
                    : Yw[2];
      });
      for (let n = 0; n < 6; n++) {
        let r = n * 0.3;
        if (t < r) continue;
        let a = -1 + n * 0.36;
        if (a > i) continue;
        let o = t - r,
          s = 10 + Math.cos(a) * 24 + L(n, 4) * 2,
          c = 22 + (Math.sin(a) * 24) / 1.15 + 3 + o * o * 2.2;
        c > 48 || hm(e, s, c, Math.PI / 2, 4 + Math.min(3, o), 1.1, nT);
      }
    }),
  gT = () =>
    R(`k1-gorrath-drip`, 6, 20, 26, (e, t) => {
      if (t < 3) {
        let n = [3, 6, 13][t],
          r = [3, 6, 6][t];
        (t < 2 && N(e, 9, 1, Yw[2], 3, 2),
          hm(e, 10, n, Math.PI / 2, r, t === 0 ? 1.4 : 1.1, nT),
          t === 1 && N(e, 10, 3, Yw[3], 1, 2));
      } else {
        let n = (t - 3) / 2;
        if (
          (fT(e, 10, 21, 4 + n * 1.5, 2 + n * 0.5, 1 - n * 0.8, 3), t === 3)
        ) {
          V(e, 10, 20, 6, 5, Yw, 2);
          for (let t = 0; t < 4; t++) N(e, 5 + t * 3, 17 - (t % 2) * 2, Yw[4]);
        }
        _m(e, 10, 19, 0.3 + n * 0.5, 4, 7, Yw, 8, -0.6);
      }
    }),
  _T = () =>
    R(`k1-gorrath-tele`, 4, 48, 44, (e, t) => {
      lT(e, 24, 22, 21, (t + 1) / 4, 7);
    }),
  vT = () =>
    R(`k1-gorrath-glob`, 4, 18, 32, (e, t) => {
      for (let n = -3; n <= 3; n++) {
        let r = Math.round((12 - Math.abs(n) * 2.6) * (0.75 + L(n, t) * 0.35));
        for (let i = 0; i < r; i++) {
          let a = i / r;
          (a > 0.7 && (i + t) % 2) ||
            N(
              e,
              9 + n,
              19 - i - 2,
              a < 0.25 ? Yw[4] : a < 0.55 ? Yw[3] : a < 0.8 ? Yw[2] : iT[1],
            );
        }
      }
      for (let n = 0; n < 3; n++)
        N(
          e,
          6 + L(n, t, 2) * 6,
          3 + ((n * 5 + t * 3) % 9),
          n % 2 ? Yw[3] : iT[2],
        );
      Kw(e, 18, 32, (e) => uT(e, 9, 23, 4.2, t, 5));
    }),
  yT = () =>
    R(`k1-gorrath-splat`, 6, 52, 36, (e, t) => {
      let n = t / 5;
      if (
        (fT(
          e,
          26,
          24,
          6 + sm(am(t / 2)) * 13,
          3 + sm(am(t / 2)) * 5,
          1 - n * 0.35,
          11,
        ),
        t === 0 &&
          (P(e, 26, 23, 6, 3, Yw[4]),
          P(e, 26, 23, 3, 1.6, `#ffffff`),
          V(e, 26, 22, 9, 10, Yw, 3)),
        t >= 1 && t <= 4)
      )
        for (let n = 0; n < 10; n++) {
          let r = (L(n, 6) - 0.5) * 2.2,
            i = -(0.5 + L(n, 7) * 0.8),
            a = (t - 0.5) / 3,
            o = 26 + r * 16 * a,
            s = 22 + i * 22 * a + 20 * a * a;
          s > 26 || hm(e, o, s, Math.atan2(i * 22 + 40 * a, r * 16), 4, 1, nT);
        }
      if (t >= 3)
        for (let n = 0; n < 6; n++)
          N(
            e,
            14 + L(n, 9) * 24,
            20 - ((t - 3) * 4 + L(n, 10) * 6),
            n % 2 ? Yw[3] : Yw[4],
          );
    }),
  bT = () =>
    R(`k1-gorrath-puddle`, 4, 48, 26, (e, t) => {
      if ((fT(e, 24, 13, 20, 9, [1, 0.62, 0.32, 0.06][t], 17), t === 0))
        for (let t = 0; t < 4; t++) N(e, 14 + t * 6, 4 + (t % 2) * 2, Yw[4]);
    });
function xT(e, t, n, r, i, a, o) {
  (N(e, t - 5.5, n - 5, Zw[1], 11, 10),
    N(e, t - 4.5, n - 4, Uw[1], 9, 8),
    P(e, t, n, 3.5 + a * 1.2, 3 + a, $w[2]),
    P(e, t, n, 2 + a * 0.8, 1.6 + a * 0.6, $w[3]),
    P(e, t, n, 1 + a * 0.6, 0.8 + a * 0.5, $w[4]));
  let s = r < 0.25 ? Zw[1] : r < 0.5 ? Yw[2] : r < 0.8 ? Yw[3] : Yw[4];
  for (let r of [-3.5, -0.5, 2.5])
    for (let a = n - 4 - i; a < n + 4 - i; a++) a >= n - 4 && N(e, t + r, a, s);
  let c = n - i;
  if (
    (c >= n - 4 && N(e, t - 4.5, c, s, 9, 1),
    N(e, t - 5.5, n - 5, r > 0.5 ? Yw[3] : Zw[3], 11, 1),
    r > 0.8 && i > 0 && N(e, t - 4.5, n - 5, Yw[4], 9, 1),
    a > 0.5)
  )
    for (let r = -2; r <= 2; r++)
      mT(e, t + r * 2, n - 5, 3 + Math.round(L(r, o) * 4 * a), 0.8, Xw, o, r);
}
