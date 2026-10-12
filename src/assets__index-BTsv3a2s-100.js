// assets__index-BTsv3a2s 100 — math
// Lines 49916-50304 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var gD = () =>
    R(`maelis-hem`, 5, 48, 44, (e, t, n) => {
      let r = -1.13,
        i = $E(e, t, n, 10, 22, 16, 25, 5, (e, t) =>
          e > 0.8
            ? t > 0.75
              ? nD[4]
              : nD[3]
            : t > 0.65
              ? nD[3]
              : e < 0.3
                ? nD[1]
                : nD[2],
        ),
        a = am((t - 1) / (n - 2));
      for (let t = r; t <= i; t += 0.13) {
        let n = (t - r) / Math.max(0.01, i - r);
        if (L(Math.round(t * 50), 7) < a * (1 - n * 0.6)) continue;
        let o = 2 + L(Math.round(t * 50), 3) * 3;
        z(
          e,
          10 + Math.cos(t) * 25,
          22 + (Math.sin(t) * 25) / 1.15,
          10 + Math.cos(t) * (25 + o),
          22 + (Math.sin(t) * (25 + o)) / 1.15,
          n > 0.7 ? nD[4] : nD[3],
        );
      }
      for (let [t, n] of [
        [i - 0.45, 1],
        [i - 1.25, 0.5],
      ])
        t < -0.9799999999999999 ||
          a > n ||
          uD(
            e,
            10 + Math.cos(t) * 20.5 - 1,
            22 + (Math.sin(t) * 20.5) / 1.15 - 1,
          );
      t >= 1 &&
        _m(
          e,
          10 + Math.cos(i) * 24,
          22 + (Math.sin(i) * 24) / 1.15,
          am(t / (n - 1) + 0.2),
          8,
          9,
          WE,
          5,
          0.3,
        );
    }),
  _D = () =>
    R(`maelis-rime`, 5, 34, 20, (e, t) => {
      let n = 4 + sm(am(t / 2)) * 12;
      for (let r = 0; r < 26; r++) {
        let i = L(r, 41) * JE,
          a = Math.sqrt(L(r, 42)) * n,
          o = Math.round(17 + Math.cos(i) * a),
          s = Math.round(10 + (Math.sin(i) * a) / 1.8);
        (t >= 3 && L(r, 43) < (t - 2) * 0.4) ||
          (N(e, o, s, t < 2 ? WE[4] : L(r, 44) > 0.5 ? WE[3] : nD[2]),
          L(r, 45) > 0.55 &&
            (N(e, o - 1, s, nD[2]),
            N(e, o + 1, s, nD[2]),
            t < 4 && N(e, o, s - 1, nD[3])));
      }
      B(
        e,
        17,
        10,
        n,
        n / 1.8,
        t < 3 ? nD[3] : nD[1],
        (e) => L(Math.round(e * 20), t) > 0.35,
      );
    }),
  vD = () =>
    R(`maelis-breath`, 6, 26, 26, (e, t) => {
      if (t < 4) {
        let n = t / 3;
        for (let t = 0; t < 12; t++) {
          let r = L(t, 21) * JE,
            i = (1 - n) * 10 + 2 + L(t, 22) * 2;
          N(
            e,
            13 + Math.cos(r) * i,
            13 + Math.sin(r) * i,
            t % 3 ? WE[3] : WE[4],
          );
        }
      }
      let n = t < 4 ? t / 3 : 1 - (t - 3) / 3;
      if (
        (P(e, 13, 13, 1.6 + n * 1.6, 1.4 + n * 1.2, GE[1]),
        N(e, 12, 13, GE[3], 3, 1),
        N(e, 13, 12, GE[3], 1, 3),
        N(e, 13, 13, GE[4]),
        t >= 3)
      ) {
        let n = 5 + ((t - 3) / 2) * 7;
        (B(e, 13, 13, n, n * 0.85, WE[3], (e) => Math.round(e * 6) % 2 == 0),
          t >= 4 &&
            B(
              e,
              13,
              13,
              n - 4,
              (n - 4) * 0.85,
              WE[2],
              (e) => Math.round(e * 6) % 2 == 1,
            ),
          t === 3 && V(e, 13, 13, 6, 6, WE, 4));
      }
    }),
  yD = () =>
    XE(
      `maelis-note`,
      4,
      20,
      18,
      (e, t) => cD(e, 12, 12 + [0, -1, 0, 1][t], nD, t % 2),
      (e, t) => {
        let n = 12 + [0, -1, 0, 1][(t + 3) % 4];
        for (let r = 0; r < 2; r++) {
          let i = 6 - r * 4,
            a = r === 0 ? WE[2] : WE[1];
          (t + r) % 4 != 3 &&
            (N(e, i, n - 2, a), N(e, i + 1, n - 1, a, 1, 3), N(e, i, n + 2, a));
        }
      },
      iD,
    ),
  bD = () =>
    R(`maelis-hymn`, 8, 116, 116, (e, t) => {
      let n = (e) => (e * 3 + 2) % 16,
        r = (e) => (e * Math.PI) / 16;
      if (t === 0)
        for (let t = 0; t < 14; t++) {
          let n = L(t, 23) * JE,
            r = 18 - L(t, 24) * 6;
          N(
            e,
            58 + Math.cos(n) * r,
            58 + Math.sin(n) * r,
            t % 3 ? WE[2] : WE[3],
          );
        }
      if (t === 1) {
        for (let t of [-2, 0, 2])
          B(
            e,
            58,
            58,
            14 + t,
            14 + t,
            t ? WE[1] : WE[2],
            (e) => Math.round(e * 14) % 3 != 2,
          );
        for (let t = 0; t < 3; t++) {
          let i = r(t) + ((n(t) + 0.5) / 16) * JE;
          (sD(e, 58 + Math.cos(i) * 21, 58 + Math.sin(i) * 21, `#ffffff`),
            N(e, 58 + Math.cos(i) * 14, 58 + Math.sin(i) * 14, `#ffffff`));
        }
      }
      for (let i = 0; i < 3; i++) {
        let a = 2 + i;
        if (t < a) continue;
        let o = 12 + (t - a) * 20;
        if (o > 57) continue;
        let s = n(i),
          c = r(i);
        for (let n of [-2, 0, 2])
          B(e, 58, 58, o + n, o + n, n ? WE[1] : WE[2], (e) => {
            let r = (((e - c) / JE) * 16 + 64 + 0.5) % 16;
            return Math.floor(r) === s || Math.floor(r) === (s + 1) % 16
              ? !1
              : (Math.round(e * (o + n)) + t) % 3 != 0 && o < 54;
          });
        for (let t = 0; t < 16; t++) {
          let n = c + (t / 16) * JE,
            r = 58 + Math.cos(n) * o,
            i = 58 + Math.sin(n) * o;
          if (t === s || t === (s + 1) % 16) {
            sD(e, r, i, WE[3]);
            continue;
          }
          oD(e, r, i + 1, nD[3], `#ffffff`, WE[4]);
        }
      }
      (P(e, 58, 58, 2.5, 2, GE[1]),
        N(e, 57, 58, GE[3], 3, 1),
        N(e, 58, 58, GE[4]));
    }),
  xD = () =>
    R(`maelis-chill`, 5, 24, 24, (e, t) => {
      let n = t / 4;
      t === 0 &&
        (P(e, 12, 12, 3.5, 3.5, nD[3]),
        V(e, 12, 12, 6, 7, WE, 2),
        N(e, 11, 11, `#ffffff`, 2, 2));
      for (let t = 0; t < 6; t++) {
        let r = L(t, 31) * JE,
          i = 2 + sm(n) * 8;
        (n > 0.7 && t % 2) ||
          mm(e, 12 + Math.cos(r) * i, 12 + Math.sin(r) * i, r, 4, 2, nD);
      }
      (t >= 1 &&
        B(
          e,
          12,
          12,
          3 + t * 2.2,
          (3 + t * 2.2) * 0.9,
          t < 3 ? WE[3] : WE[1],
          (e) => Math.round(e * 8) % 2 == 0,
        ),
        t >= 2 && dD(e, 12, 12, t < 4 ? `#ffffff` : WE[3]));
    }),
  SD = () =>
    R(`maelis-stavering`, 4, 74, 68, (e, t) => {
      let n = (t + 1) / 4;
      (eD(e, 37, 36, 27, 37, WE[1], 0.3),
        n > 0 && eD(e, 37, 36, 32 - 5 * n, 32 + 5 * n, WE[2], 0.3),
        pD(e, 37, 36, 32, n, 51),
        P(e, 37, 36, 2, 1.6, GE[2]),
        N(e, 37, 36, GE[4]));
    }),
  CD = () =>
    XE(
      `maelis-spike`,
      6,
      16,
      28,
      (e, t) => {
        let n = [0, 9, 17, 16, 13, 0][t];
        if (
          (t >= 1 && t <= 4 && fD(e, 8, 25, n, 6, nD),
          t === 4 && (z(e, 6, 16, 9, 19, nD[1]), z(e, 9, 19, 7, 22, nD[1])),
          t === 5)
        )
          for (let t = 0; t < 5; t++)
            mm(
              e,
              8 + (L(t, 61) - 0.5) * 10,
              22 - L(t, 62) * 10,
              L(t, 63) * JE,
              4,
              2,
              nD,
            );
      },
      (e, t) => {
        (t === 0 &&
          (z(e, 3, 25, 13, 24, WE[3]),
          z(e, 6, 24, 10, 26, WE[2]),
          N(e, 8, 25, `#ffffff`)),
          t === 2 && V(e, 8, 10, 5, 4, WE, 3),
          t >= 3 &&
            lD(
              e,
              8,
              23,
              4 + (t - 3) * 1.5,
              (t - 3) / 3,
              6,
              WE[2],
              nD[2],
              nD[1],
            ));
      },
      iD,
      !0,
    ),
  wD = () =>
    R(`maelis-crescendo`, 8, 124, 124, (e, t) => {
      let n = [24, 40, 56],
        r = t - 2;
      (n.forEach((n, i) => {
        r >= i ||
          (eD(e, 62, 68, n - 5, n + 5, WE[1], 0.3),
          pD(e, 62, 68, n, t <= 1 ? (t + 1) / 2 : 1, 50 + i));
      }),
        n.forEach((t, n) => {
          r - n < 2 ||
            B(
              e,
              62,
              68,
              t,
              t / 1.1,
              nD[1],
              (e) => L(Math.round(e * 30), n) > 0.4,
            );
        }));
      let i = [];
      (n.forEach((e, t) => {
        let n = r - t;
        if (n < 0 || n > 2) return;
        let a = Math.round(e / 2.6);
        for (let r = 0; r < a; r++) {
          let o = (r / a) * JE + L(r, t) * 0.25,
            s = e + (L(r, t, 1) - 0.5) * 6;
          i.push({
            x: 62 + Math.cos(o) * s,
            y: 68 + (Math.sin(o) * s) / 1.1,
            h: 7 + L(r, t, 2) * 7,
            age: n,
            i: r,
          });
        }
      }),
        i.sort((e, t) => e.y - t.y));
      for (let t of i)
        t.age === 0
          ? fD(e, Math.round(t.x), Math.round(t.y), t.h, 5, nD)
          : t.age === 1
            ? (fD(e, Math.round(t.x), Math.round(t.y), t.h * 0.8, 5, nD),
              N(e, t.x - 1, t.y - t.h * 0.4, nD[1], 2, 1))
            : (t.i % 2 == 0 &&
                mm(
                  e,
                  t.x + (L(t.i, 3) - 0.5) * 4,
                  t.y - 2 - L(t.i, 4) * 3,
                  L(t.i, 5) * JE,
                  4,
                  2,
                  nD,
                ),
              N(e, t.x, t.y, WE[3]));
      for (let t of i)
        t.age === 0 && t.i % 3 == 0 && N(e, t.x, t.y - t.h - 1, `#ffffff`);
      (P(e, 62, 68, 2.5, 2, GE[1]),
        N(e, 61, 68, GE[3], 3, 1),
        N(e, 62, 68, GE[4]));
    }),
  TD = () =>
    XE(
      `maelis-faceshard`,
      4,
      22,
      20,
      (e, t) => {
        let n = t % 2;
        (fm(
          e,
          [
            [7, 8 + n],
            [11, 3],
            [17, 4],
            [20, 9 - n],
            [18, 16],
            [11, 17],
            [7, 13],
          ],
          nD[3],
        ),
          fm(
            e,
            [
              [20, 9 - n],
              [18, 16],
              [13, 17],
              [15, 11],
            ],
            nD[2],
          ),
          N(e, 9, 5, `#ffffff`),
          N(e, 8, 8 + n, `#ffffff`, 1, 2),
          P(e, 12.5, 10.5, 2.6, 3.4, `#cfe3f2`),
          N(e, 14, 8, `#9cc0e0`, 1, 5),
          N(e, 11, 9, nD[1]),
          N(e, 13, 9, nD[1]),
          N(e, 12, 11, nD[0], 1, t % 2 ? 3 : 2),
          z(e, 7, 8 + n, 11, 3, `#ffffff`),
          z(e, 11, 3, 17, 4, nD[4]),
          z(e, 17, 4, 15, 11, nD[2]));
      },
      (e, t) => {
        for (let n = 0; n < 6; n++)
          N(
            e,
            5 - n * 1.2 + ((n + t) % 2),
            10 + (L(n, t, 7) - 0.5) * 8,
            n < 2 ? WE[3] : WE[2],
          );
      },
      iD,
    );
