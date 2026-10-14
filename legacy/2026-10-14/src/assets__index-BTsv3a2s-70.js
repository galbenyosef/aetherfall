// assets__index-BTsv3a2s 70 — math
// Lines 40711-40955 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function bb(e, t, n, r, i) {
  (fm(
    e,
    [
      [t - 5, n - 1],
      [t - 1, n - 6],
      [t + 5, n - 3],
      [t + 6, n + 2],
      [t + 1, n + 6],
      [t - 5, n + 3],
    ],
    qy[0],
  ),
    fm(
      e,
      [
        [t - 4, n - 1],
        [t - 1, n - 5],
        [t + 4, n - 3],
        [t + 5, n + 2],
        [t + 1, n + 5],
        [t - 4, n + 3],
      ],
      qy[1],
    ),
    fm(
      e,
      [
        [t - 1, n - 5],
        [t + 4, n - 3],
        [t + 1, n],
      ],
      `#4a3a9a`,
    ),
    fm(
      e,
      [
        [t - 4, n - 1],
        [t - 1, n - 5],
        [t - 1, n - 1],
      ],
      qy[2],
    ));
  let a = r > 0.25 ? qy[3] : qy[2];
  (z(e, t - 2, n - 2, t + 1, n + 2, a),
    z(e, t + 1, n - 2, t - 1, n + 1, a),
    r > 0.5 && N(e, t - 1, n, qy[4], 2, 1));
  let o = Math.round(r * 6);
  for (let a = 0; a < o; a++) {
    let o = L(a, i, 21) * Math.PI * 2,
      s = 7 + r * 4 + L(a, i, 22) * 3;
    vb(
      e,
      _b(
        t + Math.cos(o) * 4,
        n + Math.sin(o) * 4,
        t + Math.cos(o + 0.5) * s,
        n + Math.sin(o + 0.5) * s,
        2,
        0.7,
        a + i * 7,
      ),
      qy,
      r >= 1,
    );
  }
  r >= 1 && V(e, t, n, 10, 12, qy, i);
}
var xb = () =>
    R(
      `brim-gob`,
      4,
      22,
      14,
      (e, t) => {
        let n = [0, 1, 0, -1][t];
        for (let n = 1; n <= 3; n++) {
          let r = 1.7 - n * 0.35;
          P(
            e,
            11 - n * 3.2,
            7 + ((n + t) % 2) * (n > 1),
            r,
            r,
            Wy[n === 1 ? 2 : 1],
          );
        }
        fb(e, 14, 7, 5 + n * 0.7, 4 - n * 0.6, Wy, im.storm, t);
      },
      { outline: Yy },
    ),
  Sb = () =>
    R(`brim-gobmark`, 4, 40, 36, (e, t) => {
      (Sm(e, 20, 18, 3 + t * 2, (3 + t * 2) * 0.45, `#000000`, 0.35),
        db(e, 20, 18, 16, (t + 1) / 4, t, Wy, 4));
    }),
  Cb = (e, t) =>
    R(`brim-splat-${e}`, 5, 32, 26, (e, n) => mb(e, 16, 19, n / 4, 9, t, 5)),
  wb = () =>
    R(`brim-slamtele`, 4, 92, 84, (e, t) => {
      let n = 10 + t * 7;
      (Sm(e, 46, 42, n, n * 0.42, `#000000`, 0.35),
        db(e, 46, 42, 41.6, (t + 1) / 4, t, Wy, 7));
    }),
  Tb = () =>
    R(`brim-splashdown`, 6, 100, 84, (e, t) => {
      let n = t / 5,
        r = 24 + sm(n) * 18,
        i = 8 - n * 4;
      for (let a = Math.floor(44 - r / 1.1) - 2; a <= 44 + r / 1.1 + 2; a++)
        for (let o = Math.floor(50 - r) - 2; o <= 50 + r + 2; o++) {
          let s = Math.hypot(o + 0.5 - 50, (a + 0.5 - 44) * 1.1);
          if (s > r || s < r - i) continue;
          let c = (s - (r - i)) / i;
          (n > 0.5 && L(o, a, t) < (n - 0.5) * 1.6) ||
            N(
              e,
              o,
              a,
              c > 0.75
                ? L(o, a, 3) > 0.6
                  ? Ky[4]
                  : Ky[3]
                : c > 0.4
                  ? Ky[2]
                  : Ky[1],
            );
        }
      for (let i = 0; i < 26; i++) {
        let a = (i / 26) * Math.PI * 2 + L(i, 2) * 0.15,
          o = 50 + Math.cos(a) * (r - 1),
          s = 44 + (Math.sin(a) * (r - 1)) / 1.1,
          c = (3 + L(i, 3) * 7) * am(1 - n * 1.7);
        if (c < 1) continue;
        let l = o + Math.cos(a) * 1.5,
          u = s - c;
        (z(e, o, s, l, u, i % 3 ? Ky[3] : Wy[2], 2),
          N(e, l, u, i % 3 ? Ky[4] : Wy[4]),
          t >= 1 &&
            L(i, 5) > 0.5 &&
            N(e, l + Math.cos(a) * 2, u - 3, i % 3 ? Ky[3] : Wy[3], 2, 2));
      }
      for (let t = 0; t < 18; t++) {
        let r = (t / 18) * Math.PI * 2 + L(t, 6) * 0.3,
          i = am(n * 1.25 + 0.08),
          a = 24 + i * (12 + L(t, 7) * 10),
          o = (10 + L(t, 8) * 8) * 4 * i * (1 - i),
          s = 50 + Math.cos(r) * a,
          c = 44 + (Math.sin(r) * a) / 1.1 - o;
        if (i >= 1) {
          N(e, s - 1, c, Ky[2], 3, 1);
          continue;
        }
        (N(e, s, c, t % 3 ? Ky[3] : Wy[2], 2, 2),
          N(e, s, c, t % 3 ? Ky[4] : Wy[3]));
      }
      if (t >= 3)
        for (let t = 0; t < 6; t++)
          lb(
            e,
            50 + Math.cos(t * 1.1) * (r - 3),
            44 + (Math.sin(t * 1.1) * (r - 3)) / 1.1,
            1 + (t % 2),
            Ky,
          );
    }),
  Eb = () => R(`brim-pool`, 4, 80, 70, (e, t) => hb(e, 40, 35, 35, t, Ky, 3)),
  Db = () =>
    R(`brim-drain`, 6, 80, 70, (e, t) => {
      let n = [1, 0.82, 0.62, 0.42, 0.22, 0][t];
      (gb(e, 40, 35, 35, 3, 0.4 + t * 0.08),
        hb(e, 40, 35, 35, t, Ky, 3, { scale: n, swirl: 1 }),
        t < 5 && (P(e, 40, 35, 3, 2.4, Ky[0]), z(e, 38, 35, 42, 35, Ky[1])));
    }),
  Ob = (e) =>
    R(`brim-bud-${e}`, 6, 84, 36, (t, n) => {
      let r = im[e];
      pb(t, `left`, 36, 84);
      let i = (e, n, i, a) => {
          (P(t, e, n, i, a, r[1]),
            P(t, e - 0.5, n - 0.5, i - 1, a - 1, r[2]),
            N(t, e - i * 0.4, n - a * 0.5, r[3], 2, 1),
            N(t, e - i * 0.4, n - a * 0.5, r[4]));
        },
        a = (e, n, i, a, o, s) => {
          for (let c = e; c <= n; c++) {
            let l = (c - e) / Math.max(1, n - e),
              u = i + (a - i) * l,
              d = o + (s - o) * Math.sin(l * Math.PI) * -1 + (s - o) * l,
              f = Math.max(0.5, d / 2);
            for (let e = -f; e <= f; e += 1)
              N(t, c, u + e, l < 0.35 ? Wy[2] : r[1]);
            N(t, c, u - f, l < 0.35 ? Wy[3] : r[2]);
          }
        };
      if (
        (n === 0 && i(6, 21, 5, 5.5),
        n === 1 && (a(2, 10, 21, 20, 6, 5), i(13, 19, 5.5, 5.5)),
        n === 2 && (a(2, 26, 21, 17, 4, 2), i(30, 16, 6, 4.5)),
        n === 3)
      ) {
        (a(2, 14, 21, 20, 3, 1), a(38, 44, 13, 12, 1, 2));
        for (let e = 0; e < 4; e++)
          N(t, 20 + e * 4, 17 - (e % 2) * 2, r[2], 2, 1);
        i(49, 11, 5.5, 4.5);
      }
      (n === 4 &&
        (a(2, 6, 21, 21, 3, 2),
        mb(t, 66, 28, 0.15, 7, r, 9),
        i(66, 26, 6.5, 3)),
        n === 5 &&
          (Sm(t, 66, 28, 8, 2.5, r[1], 0.6),
          i(66, 24, 5.5, 4),
          N(t, 62, 23, Yy, 1, 2),
          N(t, 64, 23, Yy, 1, 2),
          z(t, 55, 20, 52, 23, r[3]),
          z(t, 52, 23, 55, 26, r[3]),
          z(t, 49, 20, 46, 23, r[2]),
          z(t, 46, 23, 49, 26, r[2])));
    });
function kb(e, t, n, r, i, a, o, s, c = 3) {
  let l = im[a],
    u = Math.hypot(r - t, i - n);
  if (u < 1) return;
  let d = (r - t) / u,
    f = (i - n) / u;
  for (let r = 0; r <= u; r += 0.5) {
    let i = r / u,
      a = Math.max(1, c * (0.5 + i * 0.5)),
      o = Math.sin(r * 0.35 + s) * 0.7;
    for (let c = -a / 2; c <= a / 2; c += 0.5) {
      let u = t + d * r - f * (c + o),
        p = n + f * r + d * (c + o),
        m = Math.abs(c) > a / 2 - 0.6;
      (i < 0.3 && L(Math.round(u), Math.round(p), s) < 0.5 - i) ||
        N(
          e,
          u,
          p,
          m ? Wy[1] : L(Math.round(r), Math.round(c), s) > 0.7 ? l[2] : Wy[2],
        );
    }
  }
  for (let r = (o * 3) % 8; r < u; r += 8) N(e, t + d * r, n + f * r, l[4]);
}
