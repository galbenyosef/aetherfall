// index-BTsv3a2s 94 — math
// Lines 48304-48649 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function UT(e, t, n, r, i, a, o) {
  for (let s = 0; s < i; s++) {
    let i = (Math.floor(L(s, o) * 8) / 8) * Ww,
      c = a * (0.4 + L(s, o, 1) * 0.6) * sm(r);
    if (r > 0.8 && s % 2) continue;
    let l = +(Math.sin(i) > 0.05);
    N(
      e,
      t + Math.round(Math.cos(i) * c) - 1,
      n + Math.round(Math.sin(i) * c) - 1,
      RT(l, r < 0.4 ? 4 : 3),
      2,
      2,
    );
  }
}
var WT = () =>
    R(`k1-aurek-arc`, 5, 54, 50, (e, t, n) => {
      let r = -1.3,
        i = r + 2.3 * Math.min(1, (t + 1) / 2),
        a = am((t - 1) / (n - 2));
      for (let n = 0; n < 50; n += 3)
        for (let o = 0; o < 54; o += 3) {
          let s = o + 1 - 10,
            c = (n + 1 - 22) * 1.15,
            l = Math.hypot(s, c),
            u = Math.atan2(c, s);
          if (l < 18 || l > 31 || u < r || u > i) continue;
          let d = (l - 18) / 13,
            f = (u - r) / (i - r);
          if (d < 0.1 + a * 0.5 || L(o, n, t) < a * 0.85 * (1 - f)) continue;
          let p =
            f > 0.85
              ? FT[4]
              : f > 0.6
                ? FT[3]
                : f > 0.4
                  ? FT[2]
                  : f > 0.22
                    ? Uw[3]
                    : Uw[2];
          (d > 0.82 && L(o, n, 1) > 0.45 && (p = f > 0.6 ? IT[4] : IT[3]),
            N(e, o, n, p, 2, 2));
        }
    }),
  GT = () =>
    R(`k1-aurek-click`, 6, 24, 24, (e, t) => {
      let n = [9, 6, 5, 5, 5, 5][t];
      if (t < 5)
        for (let [r, i] of [
          [-1, -1],
          [1, -1],
          [-1, 1],
          [1, 1],
        ]) {
          let a = 12 + r * n - +(r > 0),
            o = 12 + i * n - +(i > 0),
            s = RT(+(i > 0), t === 2 ? 4 : 3);
          (N(e, a, o, s),
            N(e, a - r, o, s),
            N(e, a - r * 2, o, s),
            N(e, a, o - i, s),
            N(e, a, o - i * 2, s));
        }
      (HT(
        e,
        9,
        9,
        t < 2 ? `dark` : t === 2 ? `locked` : t < 5 ? `lit` : `spent`,
      ),
        t === 2 &&
          (z(e, 4, 12, 19, 12, `#ffffff`), z(e, 12, 4, 12, 19, `#ffffff`)),
        t >= 3 && UT(e, 12, 12, (t - 2) / 3, 8, 11, 3));
    }),
  KT = () =>
    R(`k1-aurek-wardline`, 6, 124, 48, (e, t) => {
      let n = [0.35, 0.7, 1, 1, 1, 1][t];
      BT(e, 4, 3, 116, 42, t < 3 ? 0 : +(t === 3), n);
      let r = t === 4 ? 82 : t === 5 ? 999 : -1;
      for (let i = 0; i < 7; i++) {
        let a = 13 + i * 16;
        a > 4 + 116 * n ||
          HT(
            e,
            a,
            21,
            t === 5 ? `spent` : a + 3 < r || t === 3 ? `locked` : `lit`,
          );
      }
      if (t === 4) {
        gm(e, 4, 24, r, 24, 12, FT, t, { jitter: 0.8 });
        for (let t = 8; t < r; t += 6) N(e, t, 27, Uw[3], 3, 1);
        V(e, r, 24, 8, 9, FT, 2);
      }
    }),
  qT = () =>
    R(`k1-aurek-glyph`, 4, 11, 11, (e, t) => {
      HT(e, 2, 2, [`dark`, `lit`, `locked`, `spent`][t]);
    }),
  JT = [
    [1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ],
  YT = 14.5;
function XT(e, t, n, r) {
  JT.forEach((i, a) =>
    i.forEach((i, o) => {
      let s = t + o * 16,
        c = Math.round(n + a * YT),
        l = Math.round(n + (a + 1) * YT) - c,
        u = (a + 0.5) / 5;
      if (!i) {
        r >= 1 && r <= 4 && N(e, s + 7, c + Math.floor(l / 2), LT[1], 2, 1);
        return;
      }
      let d = L(o, a, 3);
      if (r === 0 || (r === 1 && d > 0.5)) {
        N(e, s + 1, c + 1, RT(u, 1), 14, 1);
        return;
      }
      if (r <= 3) {
        zT(e, e.canvas.width, e.canvas.height, r === 3 ? 0.55 : 0.35, (e) =>
          N(e, s + 1, c + 1, RT(u, r === 3 ? 2 : 1), 14, l - 2),
        );
        for (let t = 1; t < 15; t++)
          (N(e, s + t, c + 1, RT(0, 3)), N(e, s + t, c + l - 2, RT(1, 3)));
        for (let t = 1; t < l - 1; t++) {
          let n = (t - 1) / (l - 3);
          (N(e, s + 1, c + t, RT(n, 3)), N(e, s + 14, c + t, RT(n, 3)));
        }
        (N(e, s + 7, c + 2, RT(0, r === 3 ? 4 : 2), 2, 2),
          N(e, s + 7, c + l - 4, RT(1, r === 3 ? 4 : 2), 2, 2));
      } else
        r === 4
          ? (N(e, s + 1, c + 1, FT[3], 14, Math.floor(l / 2) - 1),
            N(
              e,
              s + 1,
              c + Math.floor(l / 2),
              Uw[3],
              14,
              l - 1 - Math.floor(l / 2),
            ),
            N(e, s + 4, c + 3, FT[4], 8, l - 6),
            V(e, s + 8, c + l / 2, 4, 6, FT, o + a * 5, Math.PI / 4))
          : (N(e, s + 1, c + 1, LT[1], 14, l - 2),
            z(e, s + 3, c + 2, s + 8, c + l / 2, Uw[2]),
            z(e, s + 8, c + l / 2, s + 13, c + l - 3, Uw[2]),
            N(e, s + 8, c + l / 2, Uw[3]));
    }),
  );
}
var ZT = () =>
    R(`k1-aurek-lockstep`, 6, 88, 80, (e, t) => {
      (BT(e, 3, 2, 82, 76, t === 3 ? 1 : t / 3, 1, !1), XT(e, 4, 3, t));
    }),
  QT = () =>
    R(`k1-aurek-erupt`, 6, 18, 48, (e, t) => {
      (N(e, 2, 42, t >= 1 && t <= 3 ? Uw[3] : LT[2], 14, 2),
        N(e, 2, 41, t === 0 ? FT[3] : LT[3], 14, 1));
      let n = [0, 12, 40, 44, 20, 0][t],
        r = [0, 4, 5, 3, 2, 0][t];
      for (let i = 0; i < n; i++) {
        let a = i / Math.max(1, n);
        for (let n = -r; n <= r; n++) {
          let o = Math.abs(n) / Math.max(1, r),
            s = o < 0.25 ? FT[4] : o < 0.65 ? FT[3] : FT[2];
          (i < 5
            ? (s = o < 0.4 ? `#ffffff` : Uw[3])
            : i < 8 && o > 0.5 && (s = Uw[2]),
            !(a > 0.85 && (i + n + t) % 2) && N(e, 9 + n, 41 - i, s));
        }
      }
      if ((t === 1 && V(e, 9, 40, 6, 6, FT, 1, Math.PI / 4), t >= 3 && t <= 4))
        for (let n = 0; n < 5; n++)
          N(
            e,
            4 + L(n, 1) * 10,
            32 - ((n * 7 + t * 9) % 30),
            n % 2 ? FT[3] : Uw[3],
            2,
            2,
          );
      t === 5 && UT(e, 9, 36, 0.85, 6, 7, 2);
    }),
  $T = () =>
    R(`k1-aurek-loupe`, 4, 18, 18, (e, t) => {
      if (
        (P(e, 9, 9, 4, 4, FT[1]),
        P(e, 8, 8, 1.5, 1.5, t === 3 ? `#ffffff` : FT[2]),
        B(e, 9, 9, 4.5, 4.5, IT[3]),
        B(e, 9, 9, 5.5, 5.5, IT[1], (e) => e > 0 && e < Math.PI),
        N(e, 11, 6, IT[4]),
        t < 3)
      )
        for (let n = 0; n < 8; n++) {
          let r = (n / 8) * Ww,
            i = 8 - t * 2.5;
          N(
            e,
            9 + Math.round(Math.cos(r) * i),
            9 + Math.round(Math.sin(r) * i),
            RT(+(Math.sin(r) > 0), 3),
          );
        }
      else
        (z(e, 1, 9, 17, 9, FT[4]),
          z(e, 9, 1, 9, 17, FT[3]),
          P(e, 9, 9, 2, 2, `#ffffff`));
    }),
  eE = () =>
    R(`k1-aurek-reticle`, 5, 40, 38, (e, t) => {
      let n = [16, 13, 10, 8, 7][t];
      (Sm(e, 20, 19, n, n / 1.1, FT[1], 0.22),
        B(e, 20, 19, n, n / 1.1, IT[3]),
        B(
          e,
          20,
          19,
          n - 1,
          (n - 1) / 1.1,
          IT[1],
          (e) => Math.round(e * 6) % 2 == 0,
        ));
      for (let [t, r] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ])
        for (let i = 1; i <= 3; i++)
          N(
            e,
            20 + t * (n + i) - +(t > 0),
            19 + (r * (n + i)) / 1.1 - (r > 0),
            RT(+(r > 0), i === 1 ? 4 : 3),
          );
      let r = n + 2,
        i = t < 3 ? (3 - t) * 0.7 : 0;
      for (let [n, a] of [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ]) {
        let o = 20 + n * r + a * i,
          s = 19 + (a * r) / 1.1 - n * i,
          c = RT(+(a > 0), t >= 3 ? 4 : 2);
        (N(e, o, s, c), N(e, o - n, s, c), N(e, o, s - a, c));
      }
      t >= 3 && N(e, 19, 18, t === 4 ? `#ffffff` : FT[3], 2, 2);
    }),
  tE = () =>
    R(`k1-aurek-loupebeam`, 4, 32, 9, (e, t) => {
      gm(e, -4, 4.5, 36, 4.5, 4.5, FT, t);
      for (let n = (t * 4) % 8; n < 32; n += 8) N(e, n, 4, Uw[3], 3, 1);
      for (let n = (t * 4 + 4) % 16; n < 32; n += 16) N(e, n, 3, IT[4], 1, 3);
    }),
  nE = () =>
    R(`k1-aurek-keyhole`, 5, 22, 24, (e, t) => {
      let n = [`#ffffff`, FT[3], Uw[3], Uw[2], Uw[1]];
      (Kw(
        e,
        22,
        24,
        (e) => {
          (P(e, 11, 8, 4, 3.8, n[t]),
            fm(
              e,
              [
                [9, 10],
                [13, 10],
                [15, 19],
                [7, 19],
              ],
              n[t],
            ),
            t < 3 &&
              (P(e, 11, 8, 1.5, 1.5, t === 0 ? FT[4] : `#ffffff`),
              N(e, 10, 11, t === 0 ? FT[4] : `#ffffff`, 2, 5)));
        },
        [FT[3], FT[4], FT[2], Uw[3], LT[2]][t],
      ),
        t === 0 && UT(e, 11, 12, 0.5, 8, 10, 6),
        t === 1 && UT(e, 11, 12, 0.9, 8, 10, 6));
    });
function rE(e, t, n, r) {
  let i = t - 8,
    a = n - 32;
  Kw(
    e,
    e.canvas.width,
    e.canvas.height,
    (e) => {
      (fm(
        e,
        [
          [i, a + 4],
          [i + 4, a],
          [i + 12, a],
          [i + 16, a + 4],
          [i + 16, n],
          [i, n],
        ],
        LT[2],
      ),
        N(e, i, a + 4, LT[3], 2, 28),
        N(e, i + 14, a + 4, LT[1], 2, 28),
        N(e, i + 4, a, LT[4], 8, 1),
        N(e, i + 2, a + 3, LT[3], 12, 1));
      let t = r !== `dark` && r !== `open`;
      for (let n = 0; n < 6; n++) {
        let r = a + 6 + n * 4,
          o = n < 3 ? (t ? FT[3] : FT[1]) : t ? Uw[3] : Uw[1];
        (N(e, i + 2, r, o, 2, 1), N(e, i + 12, r + 1, o, 2, 1));
      }
      let o = i + 3,
        s = a + 9;
      (N(e, o, s, LT[0], 10, 13), N(e, o + 1, s + 1, LT[1], 8, 5));
      let c = r === `open` ? FT[2] : FT[3];
      if (
        (N(e, o + 2, s + 2, c, 6, 1),
        N(e, o + 2, s + 2, c, 1, 3),
        N(e, o + 5, s + 3, c, 1, 2),
        N(e, o, s + 6, r === `hit` ? `#ffffff` : LT[4], 10, 1),
        r === `broken` || r === `open`)
      )
        (N(e, o + 1, s + 7, `#0c0a10`, 8, 5),
          r === `broken` && N(e, o + 4, s + 10, Uw[3], 2, 1));
      else {
        let t = r === `hit` ? `#ffffff` : r === `pulse` ? Uw[4] : Uw[3];
        (N(e, o + 1, s + 7, r === `hit` ? Uw[3] : Uw[1], 8, 5),
          N(e, o + 2, s + 8, t, 6, 1),
          N(e, o + 7, s + 8, t, 1, 3),
          N(e, o + 3, s + 10, t, 5, 1),
          r === `cracked` &&
            (z(e, o + 1, s + 7, o + 5, s + 11, `#0c0a10`),
            z(e, o + 8, s + 8, o + 5, s + 10, `#0c0a10`)));
      }
    },
    `#0a0810`,
  );
}
