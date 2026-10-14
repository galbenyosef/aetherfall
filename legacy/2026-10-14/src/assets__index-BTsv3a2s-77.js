// assets__index-BTsv3a2s 77 — math
// Lines 42686-43165 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var iS = () =>
    R(`ilse-gather`, 5, 24, 24, (e, t) => {
      let n = t / 4;
      for (let r = 0; r < 2; r++) {
        let i = (1 - n) * 7 + 3 + r * 4;
        (t !== 4 || r !== 0) &&
          (B(e, 12, 12, i, i * 0.9, r === 0 ? W[3] : W[2]),
          B(
            e,
            12,
            12,
            i,
            i * 0.9,
            W[4],
            (e) => Math.abs(Math.sin(e * 3 + t * 1.3)) > 0.92,
          ));
      }
      let r = 0.8 + n * 1.7;
      (P(e, 12, 12, r, r, W[2]),
        N(e, 11, 11, W[4]),
        t >= 2 && N(e, 12, 12, W[3]),
        t === 4 && V(e, 12, 12, 6, 7, W, 2));
      for (let n = 0; n < 3; n++)
        Jx(e, 7 + n * 5, 9 - ((t * 2 + n * 3) % 8), n === 1);
    }),
  aS = () =>
    R(`ilse-note`, 4, 22, 16, (e, t) => {
      for (let n = 0; n < 3; n++) {
        let r = ((t + n * 1.3) % 4) / 4;
        Jx(e, 3 - r * 3, 8 + (L(n, 3) - 0.5) * 7 - r * 2, n === 0 && r < 0.5);
      }
      for (let n = 0; n < 3; n++) {
        let r = 4.2 + ((n + t / 4) % 3) * 2.6,
          i = Math.min(1.05, 6.6 / r);
        (B(
          e,
          7,
          8,
          r,
          r,
          r < 6.2 ? W[4] : r < 8.8 ? W[3] : W[2],
          (e) => Math.cos(e) > Math.cos(i),
        ),
          r < 8.8 &&
            B(e, 6, 8, r, r, W[1], (e) => Math.cos(e) > Math.cos(i * 0.8)));
      }
      (P(e, 7, 8, 3.3, 3.1, `#040a1a`),
        P(e, 7, 8, 2.5, 2.3, W[2]),
        N(e, 6, 7, W[4]),
        N(e, 7, 7, W[3]),
        N(e, 8, 9, W[1]));
    }),
  oS = () =>
    R(`ilse-splash`, 5, 26, 22, (e, t) => {
      let n = t / 4;
      t === 0 &&
        (P(e, 13, 12, 3.5, 3, W[3]),
        N(e, 12, 11, W[4], 2, 2),
        V(e, 13, 12, 6, 6, W, 3));
      for (let r = 0; r < 2; r++) {
        let i = 3 + t * 2.4 - r * 4;
        i > 1.5 &&
          Yx(e, 13, 15, i, i * 0.45, W, am(n - 0.25 + r * 0.25), r + 3);
      }
      if ((Qx(e, 13, 13, am(0.15 + n * 0.9), 8, 9, W, 4), t >= 2))
        for (let n = 0; n < 3; n++)
          Jx(e, 13 + (L(n, t) - 0.5) * 10, 14 - L(t, n) * 3, t < 4 && n === 0);
    }),
  sS = () =>
    R(`ilse-still-tele`, 4, 64, 58, (e, t) => {
      Xx(e, 32, 29, 30, (t + 1) / 4, t * 1.2);
      for (let n = 0; n < 3; n++) {
        let r = 4 + (1 - ((t / 4 + n / 3) % 1)) * (22 - t * 2);
        Yx(e, 32, 29, r, r / 1.1, W, t === 3 ? 0.3 : 0, n);
      }
    }),
  cS = () =>
    R(`ilse-still-freeze`, 5, 64, 58, (e, t) => {
      if (
        (t >= 1 && Sm(e, 32, 29, 30, 27, Fx[1], t >= 4 ? 0.25 : 0.5),
        [6, 12, 18, 24, 29].forEach((n, r) => {
          if (t === 0 && r % 2) return;
          let i = (e) => t === 4 && L(Math.round(e * 20), r) < 0.45;
          (B(e, 32, 30, n, n / 1.1, Fx[0], (e) => Math.sin(e) > 0 && !i(e)),
            B(e, 32, 29, n, n / 1.1, t === 0 ? W[3] : Fx[3], (e) => !i(e)),
            t >= 1 &&
              t <= 3 &&
              B(
                e,
                32,
                29,
                n,
                n / 1.1,
                Fx[4],
                (e) => Math.sin(e) < -0.6 && !i(e),
              ));
        }),
        t >= 1 && t <= 3)
      )
        for (let n = 0; n < 20; n++) {
          let r = (n / 20) * jx + L(n, 3) * 0.2,
            i = 32 + Math.cos(r) * 29,
            a = 29 + (Math.sin(r) * 29) / 1.1,
            o = (2 + L(n, 4) * 3) * (t === 1 ? 1.3 : t === 3 ? 0.7 : 1);
          (z(e, i, a, i + Math.cos(r) * 1.2, a - o, Fx[3]),
            N(e, i + Math.cos(r) * 1.2, a - o, Fx[4]));
        }
      (t === 1 && V(e, 32, 29, 8, 10, Mx, 5),
        t === 0 && P(e, 32, 29, 3, 2.6, Fx[4]));
    }),
  lS = () =>
    R(`ilse-encased`, 4, 22, 32, (e, t) => {
      let n = t === 0 ? 18 : 3;
      (e.save(), (e.globalAlpha = 0.5));
      for (let r = n; r <= 31; r++) {
        let n = (r + 0.5 - 17) / 14,
          i = 9 * Math.sqrt(Math.max(0, 1 - n * n));
        (t === 3 && L(r, 1) > 0.5) ||
          N(e, 11 - i, r, Fx[2], Math.round(i * 2), 1);
      }
      if ((e.restore(), t < 3)) {
        for (let t = Math.max(n, 6); t <= 29; t += 4) {
          let n = (t + 0.5 - 17) / 14,
            r = 9 * Math.sqrt(Math.max(0, 1 - n * n));
          z(e, 11 - r + 1, t, 11 + r - 1, t + 1, Fx[3]);
        }
        (B(e, 11, 17, 9, 14, Fx[3], (e) => 17 + Math.sin(e) * 14 >= n),
          B(
            e,
            11,
            17,
            9,
            14,
            Fx[4],
            (e) =>
              Math.cos(e) < -0.5 &&
              Math.sin(e) < 0.3 &&
              17 + Math.sin(e) * 14 >= n,
          ));
      }
      if (
        (t === 2 &&
          (eS(e, 13, 11, 1.6, 4, 3, Fx[4], 3, 1),
          eS(e, 8, 19, -0.4, 3, 3, Fx[4], 4, 1)),
        t === 3)
      )
        for (let t = 0; t < 7; t++) {
          let n = L(t, 9) * jx;
          mm(e, 11 + Math.cos(n) * 8, 17 + Math.sin(n) * 11, n, 5, 2, Fx);
        }
    }),
  uS = () =>
    R(`ilse-hymnrings`, 6, 40, 52, (e, t) => {
      Yx(e, 20, 47, 16 + (t % 2), 4.5, W, 0.35, t);
      for (let n = 0; n <= t; n++) {
        let r = t - n,
          i = 44 - r * 8;
        if (i < 5) continue;
        let a = 11 - r * 0.5,
          o = t * 1.2 + n;
        for (let t = 0; t < 72; t++) {
          let n = (t / 72) * jx,
            r = Math.sin(n * 7 + o) * 0.7,
            s = 20 + Math.cos(n) * (a + r),
            c = i + Math.sin(n) * 3 + r * 0.3;
          Math.sin(n) < 0
            ? t % 2 == 0 && N(e, s, c, W[2])
            : N(e, s, c, Math.abs(Math.cos(n)) < 0.4 ? W[4] : W[3]);
        }
        for (let r = 0; r < 3; r++) {
          let o = 20 + (L(n, r) - 0.5) * a * 1.6,
            s = i + 3 + 1 + ((t * 3 + r * 2) % 5);
          s < 46 && N(e, o, s, W[3]);
        }
      }
      for (let n = 0; n < 5; n++) {
        let r = (t / 6 + L(n, 9)) % 1;
        Jx(e, 20 + (L(n, 8) - 0.5) * 16, 43 - r * 38, n % 2 == 0);
      }
    }),
  dS = () =>
    R(`ilse-song`, 6, 52, 12, (e, t) => {
      (tS(e, 0, 3, 52, (t + 1) / 6, t), t === 5 && V(e, 49, 7, 6, 5, W, 3));
    }),
  fS = () =>
    R(`ilse-songbreak`, 6, 52, 28, (e, t) => {
      let n = [0, 0.3, 0.6, 0.9, 1, 1][t];
      if (t < 4) {
        tS(e, 0, 3, 52, 0.5 + t * 0.05, t, { cracks: n });
        return;
      }
      let r = t === 4 ? 0 : 1;
      for (let n = 0; n < 12; n++) {
        let i = 3 + n * 4 + (L(n, 5) - 0.5) * 2,
          a = -Math.PI / 2 + (L(n, 6) - 0.5) * 2.6,
          o = 2 + r * 5 + L(n, 7) * 3;
        mm(
          e,
          i + Math.cos(a) * o,
          7 + Math.sin(a) * o * 0.6 + r * 4,
          a + t,
          4,
          2,
          Fx,
        );
      }
      for (let t = 0; t < 16; t++)
        N(
          e,
          2 + L(t, 8) * 48,
          8 + r * 8 + L(t, 9) * 6 + (t % 3) * 2,
          t % 4 == 0 ? W[4] : W[3],
          1,
          2,
        );
      if (t === 4) V(e, 26, 7, 10, 12, Mx, 4);
      else for (let t = 0; t < 3; t++) Jx(e, 14 + t * 12, 25 - t, !0);
    }),
  _te = () =>
    R(`ilse-ward`, 4, 22, 22, (e, t) => nS(e, 11, 11, 8.5, t, t === 2)),
  vte = () =>
    R(`ilse-shatter-tile`, 6, 32, 32, (e, t) => {
      for (let t = 0; t < 32; t++)
        for (let n = 0; n < 32; n++)
          N(e, n, t, Math.sin(n * 0.2 + t * 0.6) > 0.85 ? Px[2] : Px[1]);
      if (t >= 4) {
        Yx(e, 16, 16, 6 + (t - 4) * 5, 3 + (t - 4) * 2.5, Px, 0.2, t);
        for (let n = 0; n < 6; n++) {
          if (t === 5 && n % 2) continue;
          let r = 3 + L(n, 11) * 26,
            i = 3 + L(n, 12) * 26;
          (N(e, r, i, Fx[3], 2, 1), N(e, r, i + 1, Fx[1], 2, 1));
        }
        return;
      }
      let n = [];
      for (let e = 0; e < 7; e++) n.push([4 + L(e, 1) * 24, 4 + L(e, 2) * 24]);
      let r = t === 0 ? 0 : t === 1 ? 0.6 : t === 2 ? 1.6 : 2.6;
      for (let i = 0; i < 32; i++)
        for (let a = 0; a < 32; a++) {
          let o = 1e9,
            s = 1e9,
            c = 0;
          n.forEach(([e, t], n) => {
            let r = Math.hypot(a + 0.5 - e, i + 0.5 - t);
            r < o ? ((s = o), (o = r), (c = n)) : r < s && (s = r);
          });
          let l = s - o;
          if (l < r) continue;
          let u = t === 3 && L(c, 4) > 0.5,
            d = t >= 2 ? (L(c, 5) - 0.5) * 2 : 0,
            f = u ? Fx[0] : Fx[1];
          (!u && (a + i * 2) % 11 == 0 && (f = Fx[2]),
            l < r + 1.2 && (f = t === 0 ? Fx[4] : d > 0 ? Fx[3] : Fx[0]),
            N(e, a, i, f));
        }
      if (t === 0)
        for (let t = 0; t < 4; t++)
          eS(e, 16, 16, (t / 4) * jx + 0.5, 4, 3.4, Fx[4], t, 1);
      if ((t === 2 && Qx(e, 16, 18, 0.35, 8, 8, W, 6), t === 3))
        for (let t = 0; t < 6; t++)
          Jx(e, 6 + L(t, 7) * 20, 8 + L(t, 8) * 16, t % 2 == 0);
    }),
  yte = () =>
    R(`ilse-songwave`, 6, 112, 64, (e, t) => {
      let n = [5, 16, 28, 40, 52, 60][t],
        r = [];
      for (let e = 0; e < 7; e++)
        for (let t = 0; t < 11; t++)
          r.push([
            5 + t * 10 + (L(t, e, 1) - 0.5) * 7,
            4 + e * 9 + (L(t, e, 2) - 0.5) * 6,
          ]);
      let i = r.map(([e, t]) => {
        let r = Math.hypot(e - 56, (t - 32) * 1.1);
        return r < 8 ? 3 : r > n + 1 ? 0 : r > n - 8 ? 1 : 2;
      });
      for (let n = 0; n < 64; n++)
        for (let a = 0; a < 112; a++) {
          let o = 1e9,
            s = 1e9,
            c = 0;
          r.forEach(([e, t], r) => {
            let i = Math.hypot(a + 0.5 - e, n + 0.5 - t);
            i < o ? ((s = o), (o = i), (c = r)) : i < s && (s = i);
          });
          let l = i[c];
          if (l === 3) continue;
          let u = s - o < 1;
          l === 0
            ? N(e, a, n, u ? Fx[3] : (a + n * 2) % 17 == 0 ? Fx[2] : Fx[1])
            : l === 1
              ? N(e, a, n, u ? Px[2] : Px[1])
              : N(
                  e,
                  a,
                  n,
                  u
                    ? Px[0]
                    : Math.sin(a * 0.4 + n * 0.9 + t) > 0.92
                      ? Px[3]
                      : Px[1],
                );
        }
      (r.forEach(([t, n], r) => {
        if (i[r] === 1)
          for (let i = 0; i < 2; i++)
            mm(
              e,
              t + (i - 0.5) * 4,
              n - 2,
              -Math.PI / 2 + (L(r, i, 3) - 0.5) * 1.6,
              7,
              2.8,
              Fx,
            );
      }),
        t < 5 && Zx(e, 56, 32, n, t * 1.7, t === 0 ? Mx : W, 1.8),
        t === 0 && V(e, 56, 32, 10, 10, Mx, 6),
        P(e, 56, 32, 2, 2, W[3]));
    }),
  bte = () =>
    R(`ilse-plunge`, 5, 24, 26, (e, t) => {
      let n = t / 4;
      if ((P(e, 12, 21, 6 - t * 0.6, 2.4, Px[0]), t <= 1))
        for (let t = 0; t < 6; t++) {
          let n = (t / 6) * jx;
          mm(
            e,
            12 + Math.cos(n) * 6,
            21 + Math.sin(n) * 2.4,
            n + 0.6,
            4,
            2,
            Fx,
          );
        }
      if (
        (Yx(e, 12, 21, 4 + t * 1.8, 1.8 + t * 0.7, W, am(n - 0.3), 2),
        Qx(e, 12, 20, am(0.1 + n), 9, 12, W, 8),
        t >= 2)
      )
        for (let n = 0; n < 3; n++)
          Jx(e, 9 + n * 3, 20 - ((t + n) % 3), n === 1);
    }),
  xte = () =>
    R(`ilse-dive`, 6, 40, 44, (e, t) => {
      if (
        (t <= 4 && P(e, 20, 37, 12 - (t === 4 ? 4 : 0), 4, Px[0]),
        t === 0 &&
          (Yx(e, 20, 37, 9, 3, W, 0, 1), Yx(e, 20, 37, 13, 4.5, W, 0.4, 2)),
        t === 1)
      ) {
        for (let t = 0; t < 8; t++) {
          let n = (t / 8) * jx + 0.2;
          mm(
            e,
            20 + Math.cos(n) * 12,
            37 + Math.sin(n) * 4 - 2,
            -Math.PI / 2 + Math.cos(n) * 0.6,
            7,
            3,
            Fx,
          );
        }
        Yx(e, 20, 37, 12, 4, W, 0, 3);
      }
      if (
        (t === 2 &&
          ($x(e, 20, 37, 16, 30, W, t), Yx(e, 20, 37, 13, 4.5, W, 0, 4)),
        t === 3 &&
          ($x(e, 20, 37, 14, 12, W, t),
          Qx(e, 20, 25, 0.55, 14, 16, W, 5),
          Yx(e, 20, 37, 15, 5, W, 0.2, 5)),
        t === 4)
      ) {
        (Yx(e, 20, 37, 10, 3.4, W, 0.2, 6), Yx(e, 20, 37, 16, 5.4, W, 0.6, 7));
        for (let t = 0; t < 4; t++)
          Jx(e, 14 + t * 4, 36 - (t % 2) * 2, t % 2 == 0);
      }
      if (t === 5) {
        P(e, 20, 37, 9, 3, Px[1]);
        for (let t = 0; t < 5; t++)
          eS(e, 20, 37, (t / 5) * jx, 3, 3, Fx[3], t + 9, 2.6);
        B(e, 20, 37, 9, 3, Fx[2]);
      }
    }),
  Ste = () =>
    R(`ilse-shadow`, 4, 48, 24, (e, t) => {
      (rS(e, 38, 12, t, 1.3),
        (t === 2 || t === 3) &&
          B(
            e,
            41,
            12,
            4 + (t - 2) * 3,
            3 + (t - 2) * 2,
            W[2],
            (e) => Math.round(e * 8) % 2 == 0,
          ));
    }),
  pS = () =>
    R(`ilse-heard`, 4, 36, 33, (e, t) => {
      for (let n = 0; n < 3; n++)
        Zx(e, 18, 16, 4 + ((t + n * 1.33) % 4) * 3.4, t * 1.6 + n, W, 0.8);
      t === 3 && Zx(e, 18, 16, 15, 0, Mx, 1);
    }),
  mS = () =>
    R(`ilse-burst`, 7, 56, 64, (e, t) => {
      if (t < 3) {
        if (
          (Xx(e, 28, 50, 26, (t + 1) / 3, t * 1.4),
          t === 0 && rS(e, 34, 50, 0, 0.7),
          t >= 1)
        )
          for (let n = 0; n < 7; n++)
            eS(e, 28, 50, (n / 7) * jx, t === 1 ? 3 : 5, 3.2, Fx[4], n + 20);
        if (t === 2)
          for (let t = 0; t < 9; t++) {
            let n = (t / 9) * jx + 0.3,
              r = 9 + L(t, 2) * 8;
            mm(
              e,
              28 + Math.cos(n) * r,
              50 + (Math.sin(n) * r) / 1.1 - 2,
              -Math.PI / 2 + Math.cos(n) * 0.8,
              6,
              3,
              Fx,
            );
          }
        return;
      }
      if (
        (P(e, 28, 50, 14, 6, Px[0]),
        t === 3 && ($x(e, 28, 50, 16, 44, W, t), V(e, 28, 46, 10, 18, Mx, 8)),
        t === 4 &&
          ($x(e, 28, 50, 14, 40, W, t), Qx(e, 28, 12, 0.45, 16, 14, W, 9)),
        t === 5 &&
          ($x(e, 28, 50, 10, 14, W, t), Qx(e, 28, 36, 0.85, 18, 18, W, 10)),
        t === 6)
      ) {
        (Yx(e, 28, 50, 18, 7, W, 0.3, 11), Yx(e, 28, 50, 10, 4, W, 0, 12));
        for (let t = 0; t < 5; t++) Jx(e, 20 + t * 4, 49 - (t % 2), t % 2 == 0);
      }
      if (t >= 3 && t <= 5) {
        let n = (t - 3) / 2;
        for (let r = 0; r < 8; r++) {
          let i = -Math.PI / 2 + (L(r, 14) - 0.5) * 2.4,
            a = 18 + L(r, 15) * 14;
          mm(
            e,
            28 + Math.cos(i) * a * (0.4 + n * 0.6),
            44 + Math.sin(i) * a * (0.6 + n * 0.4) + n * n * 26,
            i + t * 1.3 + r,
            6,
            3,
            Fx,
          );
        }
      }
      if (t >= 5)
        for (let t = 0; t < 6; t++) {
          let n = (t / 6) * jx;
          N(e, 28 + Math.cos(n) * 17, 50 + Math.sin(n) * 7, Fx[3], 3, 1);
        }
    }),
  hS = () =>
    R(`ilse-wake`, 4, 32, 14, (e, t) => {
      for (let n = 0; n < 22; n++) {
        let r = 26 - n,
          i = n * 0.28;
        (n + t * 2) % 4 < 2 &&
          (N(e, r, 7 - i, n < 8 ? W[3] : W[2]),
          N(e, r, 7 + i, n < 8 ? W[3] : W[2]));
      }
      (P(e, 26, 7, 2.4, 1.6, Px[2]), N(e, 27, 7, W[4]));
      for (let n = 0; n < 3; n++)
        Jx(e, 21 - ((n * 6 + t * 2) % 16), 7 + ((n + t) % 2), n === 0);
    });
