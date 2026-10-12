// assets__index-BTsv3a2s 111 — math
// Lines 52822-53133 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var Rne = () =>
    R(`lil-needle-bead`, 6, 28, 28, (e, t) => {
      if (t < 2)
        for (let n = 0; n < 7; n++) {
          let r = L(n, 3) * BO,
            i = (t === 0 ? 12 : 6) + L(n, 4) * 3,
            a = 8 + Math.cos(r) * i,
            o = 14 + Math.sin(r) * i * 0.8;
          (z(e, a, o, a + Math.cos(r) * 3, o + Math.sin(r) * 2.4, K[1]),
            N(e, a, o, K[3]));
        }
      let n = [0.8, 1.6, 2.3, 2.5, 2.8, 1.4][t];
      (P(e, 8, 14, n, n, K[2]),
        n > 2 && P(e, 7.5, 13.5, n - 1.2, n - 1.2, K[3]),
        N(e, 7, 13, t === 4 ? FO : K[4]),
        t >= 2 &&
          t <= 4 &&
          VO.forEach((n) => {
            let r = [0, 0, 2, 6, 10][t],
              i = 8 + Math.cos(n) * (4 + r / 2),
              a = 14 + Math.sin(n) * (4 + r / 2);
            (z(e, 8, 14, 8 + Math.cos(n) * 4, 14 + Math.sin(n) * 4, K[1]),
              r <= 2 ? WO(e, i + 0.5, a + 0.5) : qO(e, i, a, n, r, t === 4));
          }),
        t === 5 &&
          (V(e, 11, 14, 6, 8, K, 2), _m(e, 8, 14, 0.45, 9, 11, K, 5, 0.4)));
    }),
  zne = () =>
    ik(
      `lil-needle-bolt`,
      4,
      22,
      10,
      (e, t) => {
        for (let n = 0; n < 8; n++)
          N(
            e,
            n,
            5 + Math.round(Math.sin((n + t * 2) * 0.8) * 0.8),
            n < 3 ? K[0] : K[1],
          );
        N(e, 5 - t, 6 + t, K[2]);
      },
      (e, t) => qO(e, 14, 5, 0, 14, t % 2 == 0),
    ),
  Bne = () =>
    ik(
      `lil-volley`,
      6,
      76,
      48,
      (e, t) => {
        (VO.forEach((n, r) => {
          let i = Math.cos(n),
            a = Math.sin(n);
          if (t < 2) {
            for (let n = 7; n < 74; n += 2)
              (t === 1 || (n + r) % 4 < 2) &&
                N(e, 6 + i * n, 24 + a * n, t === 0 ? K[1] : K[2]);
            for (let n = 14 + t * 3; n < 74; n += 14)
              WO(e, 6 + i * n + 0.5, 24 + a * n + 0.5);
          } else {
            let n = [0, 0, 13, 30, 47, 64][t];
            for (let o = Math.max(5, n - 18); o < n - 6; o++)
              L(o, r, t) > (n - o) / 22 && N(e, 6 + i * o, 24 + a * o, K[1]);
          }
        }),
          t < 3 &&
            (P(e, 6, 24, 2 + t * 0.5, 2 + t * 0.5, K[2]), N(e, 5, 23, K[4])),
          t === 2 && V(e, 8, 24, 7, 7, K, 1));
      },
      (e, t) => {
        t < 1 ||
          VO.forEach((n) => {
            if (t === 1)
              WO(e, 6 + Math.cos(n) * 5 + 0.5, 24 + Math.sin(n) * 5 + 0.5);
            else {
              let r = [0, 0, 13, 30, 47, 64][t];
              qO(
                e,
                6 + Math.cos(n) * r,
                24 + Math.sin(n) * r,
                n,
                12,
                t % 2 == 0,
              );
            }
          });
      },
    ),
  Vne = () =>
    R(`lil-needle-hit`, 6, 24, 24, (e, t) => {
      (t > 0 && JO(e, 12, 17, Math.min(3.2, t * 1.1), 9, K, t > 2),
        t === 0 &&
          (V(e, 12, 14, 7, 7, K, 3),
          N(e, 11, 13, FO, 2, 2),
          mm(e, 8, 14, 0.2, 5, 2, zO)),
        t >= 1 && t <= 4 && YO(e, 12, 17, t / 4, 14, 7),
        t >= 2 && (mm(e, 7, 18, 0.6, 3, 2, zO), mm(e, 17, 17, -0.4, 3, 2, zO)));
    }),
  Hne = () =>
    R(`lil-siphon-aim`, 5, 84, 22, (e, t) => {
      if (t <= 1) {
        let n = t === 0 ? 0.55 : 1;
        for (let r = 8; r < om(5, 78, n); r += 2)
          N(e, r, 11, t === 0 ? K[1] : K[2]);
        for (let t = 14; t < om(5, 78, n) - 3; t += 11) WO(e, t, 11.5);
        t === 1 && KO(e, 78, 11, 5, 0.8, t, { fill: !1, seed: 4 });
      } else {
        let n = t === 2 ? om(5, 78, 0.55) : 76;
        (GO(e, 5, 11, n, 11, t / 4, {
          sag: t === 4 ? 3 : 0,
          gap: t === 4 ? 12 : 0,
        }),
          t === 2 && qO(e, n + 4, 11, 0, 10),
          t === 3 && (V(e, 78, 11, 8, 7, K, 4), N(e, 77, 10, FO, 2, 2)),
          t >= 3 && (P(e, 78, 11, 1.8, 1.8, K[3]), N(e, 78, 11, FO)));
      }
      (P(e, 5, 11, 2, 2, K[2]), N(e, 4, 10, t === 4 ? FO : K[4]));
    }),
  ak = (e, t) =>
    R(e, 4, 32, 12, (e, n) => {
      let r = n * t.speed,
        i = t.w > 1 ? 2.2 : 1.6;
      for (let n of [!0, !1])
        for (let a = 0; a < 32; a++) {
          let o = ((a + r) / 16) * BO;
          for (let r of [1, -1]) {
            let s = Math.cos(o) * r > 0;
            s !== n &&
              N(
                e,
                a,
                6 + Math.round(Math.sin(o) * i * r),
                s ? (t.w > 1 ? K[3] : K[2]) : K[1],
              );
          }
        }
      for (let n = 0; n < 32 / t.gap; n++) {
        let i = (((n * t.gap + t.gap / 2 - r) % 32) + 32) % 32;
        for (let r of [i - 32, i, i + 32])
          WO(e, r + 1, 7, t.big, t.hot && n % 2 == 0);
      }
    }),
  ok = () =>
    R(`lil-siphon-hook`, 5, 24, 24, (e, t) => {
      GO(e, 0, 12, 13, 12, t / 5, { gap: 7 });
      for (let n = 0; n < 7; n++) {
        let r = (n / 7 + t / 5) % 1,
          i = n * 1.7 + r * 4,
          a = (1 - r) * 9 + 1.5;
        N(
          e,
          15 + Math.cos(i) * a,
          12 + Math.sin(i) * a * 0.9,
          r > 0.6 ? K[3] : K[2],
        );
      }
      (B(
        e,
        15,
        12,
        3 + (t % 2),
        3 + (t % 2),
        K[2],
        (e) => Math.round(e * 3) % 2 == 0,
      ),
        P(e, 15, 12, 1.6, 1.6, K[3]),
        N(e, 15, 12, FO));
    }),
  Une = () =>
    R(`lil-siphon-drink`, 5, 28, 28, (e, t) => {
      GO(e, 11, 14, 30, 14, t / 5, { gap: 7 });
      let n = 3 + t * 1.6;
      B(
        e,
        9,
        14,
        n,
        n * 0.9,
        t < 3 ? K[3] : K[2],
        (e) => L(Math.round(e * 8), t) > 0.3,
      );
      let r = t % 2 == 0;
      (P(e, 9, 14, r ? 3 : 2.4, r ? 3 : 2.4, K[2]),
        P(e, 8.5, 13.5, 1.5, 1.5, K[3]),
        N(e, 8, 13, r ? FO : K[4]));
      for (let n = 0; n < 3; n++) {
        let r = (n / 3 + t / 5) % 1;
        N(e, 8 - r * 6, 16 + r * 7, r < 0.5 ? K[3] : K[2]);
      }
    }),
  Wne = () =>
    R(`lil-siphon-snap`, 6, 64, 26, (e, t) => {
      if (t === 0) {
        (GO(e, 3, 8, 61, 8, 0.2, { gap: 10, sag: 2, to: 0.5 }),
          GO(e, 3, 8, 61, 8, 0.2, { gap: 10, sag: 2, from: 0.56 }));
        for (let t = -2; t <= 2; t++)
          N(e, 34 + t, 10 + (t % 2 ? -1 : 1) * (Math.abs(t) > 1 ? 2 : 1), K[2]);
        N(e, 33, 10, FO, 2, 1);
      } else {
        let n = [0, 0.35, 0.65, 0.9, 1, 1][t],
          r = om(32, 4, n);
        if (n < 1)
          for (let i = 3; i <= r; i++) {
            let a = (i - 3) / Math.max(1, r - 3);
            N(
              e,
              i,
              10 + Math.sin(a * Math.PI * 3 + t) * 2.5 * a * (1 - n),
              K[2],
            );
          }
        let i = [0, 0.3, 0.6, 0.9, 1, 1][t];
        for (let n = 0; n <= 30; n++) {
          let r = n / 30;
          N(e, om(61, 36 + i * 8, r), 9 + r * r * i * 13, t < 3 ? K[2] : K[1]);
        }
        for (let n = 0; n < 5; n++) {
          let r = 12 + n * 10 + (L(n, 3) - 0.5) * 4,
            i = 9 + t * t * 0.9 * (0.7 + L(n, 4) * 0.6);
          i < 22
            ? WO(e, r, i, !1, t < 2)
            : JO(e, r, 23, Math.min(2.4, (i - 22) * 0.15 + 1), n + 3, K, !1);
        }
        t === 1 && V(e, 34, 10, 7, 7, K, 2);
      }
      P(e, 3, 8, 1.6, 1.6, K[2]);
    }),
  Gne = () =>
    R(`lil-heart-pulse`, 6, 40, 40, (e, t) => {
      let n = t === 2 || t === 4,
        r = [2, 2.8, 4.6, 3, 4, 2.2][t];
      for (let r = 0; r < 9; r++) {
        let i = (r / 9) * BO + L(r, 2) * 0.4,
          a = 8 + L(r, 3) * 9,
          o = 20,
          s = 20,
          c = n ? K[3] : t === 1 || t === 3 ? K[2] : K[1];
        for (let t = 0; t < 3; t++) {
          let l = i + (L(r, t, 4) - 0.5) * 0.9,
            u = o + (Math.cos(l) * a) / 3,
            d = s + (Math.sin(l) * a) / 3;
          (z(e, o, s, u, d, t === 0 && n ? K[4] : c), (o = u), (s = d));
        }
        n && N(e, o, s, K[2]);
      }
      if (t >= 2) {
        let n = [0, 0, 7, 12, 16, 19][t];
        B(
          e,
          20,
          20,
          n,
          n,
          t === 2 ? K[4] : K[2],
          (e) => t < 4 || Math.round(e * 6) % 2 == 0,
        );
      }
      if (t >= 4) {
        let n = [0, 0, 0, 0, 6, 11][t];
        B(e, 20, 20, n, n, t === 4 ? K[4] : K[3]);
      }
      (P(e, 20, 20, r, r, K[2]),
        P(e, 19.5, 19.5, r * 0.6, r * 0.6, K[3]),
        N(e, 19, 19, n ? FO : K[4], n ? 2 : 1, n ? 2 : 1));
    }),
  sk = () =>
    ik(
      `lil-heart-orb`,
      4,
      16,
      14,
      (e, t) => {
        (N(e, 1 + (t % 2), 8, K[1]), N(e, 3, 8, K[2]));
      },
      (e, t) => {
        let [n, r] = [
          [4, 4],
          [4.6, 3.6],
          [4, 4],
          [3.6, 4.4],
        ][t];
        (P(e, 9, 7, n, r, K[1]),
          P(e, 9.4, 7.4, n - 1.1, r - 1.1, K[2]),
          P(e, 8, 6, 1.6, 1.6, K[3]),
          N(e, 7, 5, K[4]),
          N(e, 9, 7, t % 2 ? FO : K[4]));
      },
    ),
  ck = 16;
function lk(e, t, n, r, i, a, o, s = !1) {
  let c = sk();
  for (let l = 0; l < ck; l++) {
    let u = i + (l / ck) * BO,
      d = t + Math.cos(u) * r,
      f = n + (Math.sin(u) * r) / 1.1;
    if ((Sm(e, d, f, s ? 1.5 : 2.5, 1, `#000000`, 0.5), s))
      (P(e, d, f - o, 2.2, 2.2, K[2]),
        N(e, d - 1, f - o - 1, K[3]),
        N(e, d, f - o, (a + l) % 2 ? FO : K[4]),
        N(e, d - Math.cos(u) * 3.5, f - o - (Math.sin(u) * 3.5) / 1.1, K[1]));
    else {
      let t = um(c[(a + l) % 4], u);
      e.drawImage(
        t,
        Math.round(d - t.width / 2),
        Math.round(f - o - t.height / 2),
      );
    }
  }
}
