// assets__index-BTsv3a2s 96 — math
// Lines 48997-49322 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function yE(e, t, n, r, i, a) {
  let o = Math.cos(r),
    s = Math.sin(r),
    c = 2.6 * i,
    l = 8 * i,
    u = ((a % 2) * 2 - 1) * 0.8 * i,
    d = Math.ceil(l + c + 2);
  for (let r = Math.floor(n - d); r <= Math.ceil(n + d); r++)
    for (let i = Math.floor(t - d); i <= Math.ceil(t + d); i++) {
      let a = i + 0.5 - t,
        d = r + 0.5 - n,
        f = -(a * o + d * s),
        p = am(f / l),
        m = -a * s + d * o - u * p * p,
        h;
      if (f <= 0) h = Math.hypot(f, m) / c;
      else if (f < l) h = Math.abs(m) / (c * (1 - p) ** 0.9 + 0.01);
      else continue;
      if (h > 1) continue;
      let g = p > 0.65 ? fE[1] : p > 0.35 || h > 0.7 ? fE[2] : fE[3];
      (f < c * 0.2 && f > -c * 0.85 && Math.abs(m) < c * 0.5 && (g = fE[4]),
        N(e, i, r, g));
    }
  (i >= 0.7 &&
    (N(e, t - 0.5 + o * 0.6, n - 0.5 + s * 0.6, Uw[3]),
    N(e, t - 0.5 - o * 1.6, n - 0.5 - s * 1.6, Uw[2])),
    N(e, t - 0.5 + o * (c - 0.5), n - 0.5 + s * (c - 0.5), `#ffffff`),
    N(e, t - o * (l + 2) - 0.5, n - s * (l + 2) - 0.5, dE[3]),
    a % 2 && N(e, t - o * (l + 4) - 0.5, n - s * (l + 4) - 1.5, dE[2]));
}
var bE = () =>
    R(`k1-hessa-arc`, 5, 54, 50, (e, t, n) => {
      let r = -1.3,
        i = r + 2.3 * Math.min(1, (t + 1) / 2),
        a = am((t - 1) / (n - 2));
      if (
        (pm(e, 10, 22, 18, 29, 1.15, (e, t) => {
          if (t < r || t > i) return null;
          let n = (t - r) / (i - r);
          return e < 0.12 + a * 0.5 ||
            L(Math.round(t * 40), Math.round(e * 8), 5) < a * 0.85 * (1 - n) ||
            (n < 0.45 && (Math.round(t * 40) + Math.round(e * 8)) % 2)
            ? null
            : e > 0.82
              ? n > 0.88
                ? fE[4]
                : n > 0.5
                  ? fE[3]
                  : dE[3]
              : e < 0.3 && n > 0.5
                ? fE[2]
                : n > 0.92
                  ? fE[4]
                  : n > 0.62
                    ? fE[3]
                    : n > 0.45
                      ? fE[2]
                      : n > 0.22
                        ? dE[3]
                        : dE[2];
        }),
        t >= 1 && t <= 3)
      ) {
        let n = 10 + Math.cos(i) * 22,
          r = 22 + (Math.sin(i) * 22) / 1.15;
        (B(
          e,
          n - Math.cos(i) * 3,
          r - Math.sin(i) * 3,
          3,
          3,
          t === 3 ? dE[3] : fE[3],
          (e) => Math.cos(e - i) > -0.3,
        ),
          N(e, n - 0.5, r - 0.5, t === 3 ? fE[2] : `#ffffff`));
      }
      for (let n = 0; n < 4; n++) {
        if (t < 1 + n * 0.6) continue;
        let r = -0.8 + n * 0.5;
        r > i ||
          N(
            e,
            10 + Math.cos(r) * 24,
            22 + (Math.sin(r) * 24) / 1.15 + (t - n * 0.6) * 3,
            n % 2 ? fE[3] : Uw[3],
          );
      }
    }),
  xE = () =>
    R(`k1-hessa-curl`, 5, 24, 28, (e, t) => {
      let n = t / 4;
      for (let r = 0; r < 4; r++) {
        let i = 22 - r * 5 - t * 2;
        vm(
          e,
          12 + Math.sin(r * 1.4 + t * 0.6) * 3,
          i,
          3.5 - r * 0.4 + n,
          r < 2 ? dE[2] : dE[3],
          am(n + r * 0.15),
          r + 2,
        );
      }
      t < 2 && N(e, 11, 20 - t * 3, fE[3], 2, 2);
    }),
  SE = () =>
    R(`k1-hessa-flare`, 5, 28, 28, (e, t) => {
      let n = [0.3, 0.6, 0.85, 1, 0.6][t];
      if (
        (t >= 2 &&
          t <= 3 &&
          (z(e, 13, 8, 13, 4 - t, fE[3]),
          z(e, 14, 18, 14, 21 + t, fE[3]),
          z(e, 10, 13, 7 - t, 13, fE[2]),
          z(e, 18, 13, 20 + t, 13, fE[2])),
        vE(e, 12, 10, n),
        t >= 3)
      )
        for (let n = 0; n < 16; n++) {
          let r = (n / 16) * Ww,
            i = t === 3 ? 9 : 12;
          N(
            e,
            13.5 + Math.cos(r) * i,
            13 + Math.sin(r) * i,
            t === 3 ? fE[4] : fE[2],
          );
        }
      if (t === 1)
        for (let t = 0; t < 8; t++)
          N(
            e,
            13.5 + Math.cos(t) * (9 - (t % 3)),
            13 + Math.sin(t) * (9 - (t % 3)),
            fE[2],
          );
    }),
  CE = () => R(`k1-hessa-mote`, 4, 20, 12, (e, t) => yE(e, 15, 6, 0, 1, t)),
  wE = () =>
    R(`k1-hessa-gutter`, 5, 20, 22, (e, t) => {
      t === 0
        ? (P(e, 10, 14, 2.5, 2.5, fE[4]),
          N(e, 9.5, 13.5, `#ffffff`),
          B(e, 10, 14, 4, 3.6, fE[3]))
        : (B(
            e,
            10,
            14,
            3 + t * 1.8,
            (3 + t * 1.8) / 1.1,
            t < 3 ? fE[2] : fE[1],
            (e) => t < 3 || Math.round(e * 8) % 2 == 0,
          ),
          t < 3 && P(e, 10, 14, 2 - t * 0.5, 2 - t * 0.5, fE[3]),
          vm(e, 10 + (t - 1), 11 - t * 2, 2 + t * 0.6, dE[2], (t - 1) / 3, t),
          t === 1 && N(e, 10, 14, Uw[3]));
    }),
  TE = () =>
    R(`k1-hessa-volley`, 8, 104, 104, (e, t) => {
      if (t === 0)
        for (let t = 0; t < 16; t++) {
          let n = (t / 16) * Ww + 0.2,
            r = 14 - (t % 2) * 2;
          N(e, 52 + Math.cos(n) * r, 52 + Math.sin(n) * r, fE[2]);
        }
      else {
        let n = 6 + (t - 1) * 6.5;
        for (let r = 0; r < 16; r++) {
          let i = (r / 16) * Ww;
          yE(
            e,
            52 + Math.cos(i) * n,
            52 + Math.sin(i) * n,
            i,
            t === 1 ? 0.5 : 0.8,
            t + r,
          );
        }
      }
      (P(e, 52, 52, 3, 3, t < 2 ? fE[3] : fE[2]),
        N(e, 51.5, 51.5, t < 2 ? `#ffffff` : Uw[3]));
    }),
  EE = () =>
    R(
      `k1-hessa-token`,
      4,
      14,
      12,
      (e, t) => {
        (N(e, 2, 6 + (t % 2), mE[2], 3, 1), N(e, 5, 6, mE[1]));
        let n = [3, 1, 3, 1][t];
        (N(e, 8 - Math.floor(n / 2), 4, pE[1], n, 5),
          n === 3
            ? (N(e, 7, 4, pE[2], 2, 1), N(e, 8, t === 0 ? 6 : 7, pE[0]))
            : N(e, 8, 4, pE[2], 1, 2));
      },
      { outline: `#14100c` },
    ),
  DE = () =>
    R(`k1-hessa-tokentele`, 4, 46, 48, (e, t) => {
      _E(e, 23, 30, 19, dE, (t + 1) / 4);
      let n = 30 - (3 - t) * 7 - 3;
      t < 3
        ? (Sm(e, 23, 30, 2 + t, 1, `#000000`, 0.4),
          gE(e, 23, n, !1),
          t > 0 && N(e, 23, n - 5, mE[2], 1, 2))
        : gE(e, 23, 29, !0);
    }),
  OE = () =>
    R(`k1-hessa-dust`, 6, 48, 46, (e, t) => {
      if (t === 0) {
        (B(e, 24, 30, 6, 5, fE[3]),
          V(e, 24, 29, 8, 7, fE, 2),
          vm(e, 24, 30, 4, dE[3], 0, 1));
        return;
      }
      let n = [0, 9, 14, 16, 17, 17][t],
        r = [0, 0, 0, 0.2, 0.5, 0.8][t];
      for (let i = 0; i < 7; i++) {
        let a = (i / 7) * Ww + 0.3;
        vm(
          e,
          24 + Math.cos(a) * n,
          30 + (Math.sin(a) * n) / 1.6,
          4.5 + Math.min(t, 3) * 0.9,
          i % 2 ? dE[2] : dE[3],
          r,
          i + t * 3,
        );
      }
      if (t <= 4)
        for (let n = 0; n < 3; n++) {
          let r = am((t - 2) * 0.35 + n * 0.1);
          vm(
            e,
            24 + Math.sin(n * 1.7 + t) * 2,
            27 - n * 6 - t * 2,
            5.5 - n - (t > 2),
            n % 2 ? dE[2] : dE[3],
            r,
            n + 11,
          );
        }
      (t <= 2 && (N(e, 23, 26, fE[3], 2, 2), N(e, 24, 27, Uw[3])),
        t >= 3 && gE(e, 24, 31, !1));
    }),
  kE = () =>
    R(`k1-hessa-dustzone`, 4, 48, 26, (e, t) => {
      for (let n = 0; n < 7; n++)
        vm(
          e,
          6 + ((n * 7 + t * 2) % 38),
          14 + Math.sin(n * 1.7) * 4,
          4 + (n % 3),
          n % 2 ? dE[1] : dE[2],
          n % 3 == 0 ? 0.5 : 0.2,
          n,
        );
      for (let n = 0; n < 3; n++)
        N(e, 10 + ((n * 13 + t * 3) % 30), 9 + n * 4, dE[3]);
    });
function AE(e, t, n, r, i, a, o, s = 1) {
  for (let c = Math.floor(n - a); c <= Math.ceil(n + a); c++)
    for (let l = Math.floor(t - a); l <= Math.ceil(t + a); l++) {
      let u = l + 0.5 - t,
        d = (c + 0.5 - n) * 1.1,
        f = Math.hypot(u, d);
      if (f > a * s || f < 3) continue;
      let p = Math.atan2(d, u) - r;
      for (; p < -Math.PI;) p += Ww;
      for (; p > Math.PI;) p -= Ww;
      if (p < 0 || p > i) continue;
      let m = Math.min(p, i - p) / (i / 2),
        h = f / a,
        g = (1 - h) * 0.7 + m * 0.35 + (L(l, c, o) - 0.5) * 0.2;
      (h > 0.6 && (l + c + o) % 2) ||
        (h > 0.85 && (l + c) % 3) ||
        N(
          e,
          l,
          c,
          g > 0.85 ? fE[4] : g > 0.6 ? fE[3] : g > 0.35 ? fE[2] : fE[1],
        );
    }
  for (let s = 0; s < 8; s++) {
    let c = r + L(s, 3) * i,
      l = 8 + ((L(s, 4) * a * 0.8 + o * 3) % (a * 0.8));
    N(
      e,
      t + Math.cos(c) * l,
      n + (Math.sin(c) * l) / 1.1,
      s % 3 == 0 ? `#ffffff` : dE[4],
    );
  }
}
var jE = 0.7,
  ME = () =>
    R(`k1-hessa-gaze`, 8, 108, 100, (e, t) => {
      let n = -Math.PI / 2 - jE / 2 + (Ww / 3) * am((t - 1) / 5);
      if (t < 7) {
        let r = t === 0 ? n + jE / 2 : n + jE + 0.35,
          i = 54 + Math.cos(r) * 50,
          a = 50 + (Math.sin(r) * 50) / 1.1;
        (dm(e, 54, 50, i, a, mE[2], 3, 1, t), gE(e, i, a, !1));
      }
      (t >= 1 && t <= 6 && AE(e, 54, 50, n, jE, 50, t, t === 1 ? 0.55 : 1),
        t === 7 && AE(e, 54, 50, n, jE * 0.6, 30, t, 1),
        vE(e, 52, 46, t >= 1 && t <= 6 ? 1 : 0.4));
    }),
  NE = () =>
    R(`k1-hessa-marked`, 4, 14, 18, (e, t) => {
      let n = 7 + [0, -1, 0, 1][t];
      for (let [r, i] of [
        [-5, 0],
        [5, 0],
        [0, -6],
        [0, 6],
      ])
        N(
          e,
          7 + r * (t % 2 ? 1 : 0.8),
          n + i * (t % 2 ? 1 : 0.8),
          fE[t % 2 ? 3 : 2],
        );
      (gE(e, 7, n, !0), N(e, 7, n + 5, fE[1], 1, 4 - (t % 2)));
    });
