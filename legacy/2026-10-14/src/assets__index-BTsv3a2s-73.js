// assets__index-BTsv3a2s 73 — math
// Lines 41529-41894 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var rx = () =>
    R(`fenn-sweep`, 5, 52, 46, (e, t) => {
      let n = -1.3,
        r = -1.3 + 2.4 * Math.min(1, (t + 1) / 2),
        i = am((t - 1) / 3);
      for (let t = 0; t < 46; t++)
        for (let a = 0; a < 52; a++) {
          let o = a + 0.5 - 10,
            s = (t + 0.5 - 24) * 1.15,
            c = Math.hypot(o, s),
            l = Math.atan2(s, o);
          if (l < n || l > r) continue;
          let u = (l - n) / 2.4,
            d = 28 - Math.sin(am(u) * Math.PI) * 9;
          if (c > 30 || c < d) continue;
          let f = (c - d) / (30 - d);
          if (L(a, t, 7) < i * (1.1 - u)) continue;
          let p;
          ((p =
            f > 0.8
              ? u > (r - n) / 2.4 - 0.15
                ? nb[4]
                : nb[3]
              : f > 0.45
                ? L(a, t, 8) > 0.7
                  ? eb[3]
                  : Zy[2]
                : L(a, t, 9) > 0.6
                  ? eb[1]
                  : $y[3]),
            N(e, a, t, p));
        }
      if (
        (t < 3 &&
          Xb(
            e,
            10 + Math.cos(r) * 28,
            24 + (Math.sin(r) * 28) / 1.15,
            r + Math.PI / 2,
            5,
          ),
        t >= 1)
      )
        for (let n = 0; n < 6; n++) {
          let r = -0.7000000000000001 + L(n, 2) * 1.6,
            i = 26 + (t - 1) * 4 + L(n, 3) * 6;
          Zb(
            e,
            10 + Math.cos(r) * i,
            24 + (Math.sin(r) * i) / 1.15 + (t - 1) * 2,
            r + 1.2 + n,
            3,
            n % 2 == 0,
          );
        }
    }),
  ix = () =>
    R(`fenn-chaff`, 5, 26, 26, (e, t) => {
      let n = t / 4;
      (t === 0 && (V(e, 13, 15, 6, 7, nb, 2), z(e, 8, 18, 18, 12, nb[4])),
        Qb(e, 13, 17, n, 8, 10, 3));
      for (let r = 0; r < 6; r++) {
        let i = L(r, 5) * Math.PI * 2,
          a = 3 + sm(n) * 9 * (0.6 + L(r, 6) * 0.4);
        (n > 0.8 && r % 2) ||
          Zb(
            e,
            13 + Math.cos(i) * a,
            15 + Math.sin(i) * a * 0.8 + n * 4,
            i + t * 0.9,
            3,
            r % 3 == 0,
          );
      }
      t < 3 && vm(e, 13, 18, 3 + t * 2, $y[3], 0.4 + t / 3, 4);
    }),
  ax = () =>
    R(`fenn-hookline`, 4, 32, 22, (e, t) => {
      (e.save(), (e.globalAlpha = 0.3), N(e, 0, 3, Qy[1], 32, 16), e.restore());
      for (let t = 0; t < 32; t += 16)
        (Jb(e, t + 6, 2, 0, Zy[1], Zy[2], 4, 3),
          Jb(e, t + 14, 19, 0, Zy[1], Zy[2], 4, 3));
      dm(e, 0, 11, 31, 11, eb[2], 3, 2, t * 2);
    }),
  ox = () =>
    R(
      `fenn-hook`,
      4,
      24,
      16,
      (e, t) => {
        for (let n = 0; n < 13; n++)
          N(e, n, 8 + ((n + t) % 4 < 2 ? 0 : 1), (n + t) % 2 ? eb[1] : eb[2]);
        Xb(e, 17, 8, 0, 5);
      },
      { outline: `#120b0a` },
    ),
  sx = () =>
    R(`fenn-rope`, 4, 32, 6, (e, t) => {
      for (let n = 0; n < 32; n++) {
        let r = (n + t * 2) % 4;
        (N(e, n, 2, r < 2 ? eb[2] : eb[1]), N(e, n, 3, r < 2 ? eb[1] : eb[3]));
      }
    }),
  cx = () =>
    R(`fenn-drag`, 5, 52, 18, (e, t) => {
      let n = 50 - ((t + 1) / 5) * 46;
      for (let t of [6, 11])
        for (let r = Math.round(n); r < 50; r++)
          (N(e, r, t, $y[0]), N(e, r, t - 1, $y[2]));
      Qb(e, n, 9, 0.3 + (t % 2) * 0.2, 6, 6, t);
      for (let t = 0; t < 3; t++)
        Zb(e, n + 10 + t * 9, 14 - (t % 2) * 9, 0.4 + t, 3, t === 0);
    }),
  lx = () =>
    R(`fenn-rally`, 6, 100, 92, (e, t) => {
      let n = 5 + t * 7.6,
        r = n / 1.1;
      t === 0 && (V(e, 50, 46, 8, 7, Qy, 5), Qb(e, 50, 46, 0.4, 8, 8, 7));
      for (let i = 0; i < Math.PI * 2; i += 0.6 / Math.max(n, 1))
        for (let a = 0; a < 2; a++)
          L(Math.round(i * 60), a, t) < 0.3 + t * 0.08 ||
            N(
              e,
              50 + Math.cos(i) * (n - a),
              46 + Math.sin(i) * (r - a),
              a === 0 ? Qy[3] : Qy[2],
            );
      let i = Math.max(3, Math.round((n * 2 * Math.PI) / 20));
      for (let a = 0; a < i; a++) {
        let o = (a / i) * Math.PI * 2 + t * 0.1,
          s = Math.atan2(Math.cos(o) * r, -Math.sin(o) * n);
        Jb(
          e,
          50 + Math.cos(o) * (n + 4),
          46 + Math.sin(o) * (r + 4),
          s,
          t < 5 ? Qy[3] : Qy[2],
          Qy[4],
          4,
          4,
        );
      }
      if (t > 1) {
        let r = n - 7.6,
          i = Math.max(3, Math.round((r * 2 * Math.PI) / 20));
        for (let n = 0; n < i; n++) {
          let a = (n / i) * Math.PI * 2 + (t - 1) * 0.1,
            o = Math.atan2((r / 1.1) * Math.cos(a), -Math.sin(a) * r);
          Jb(
            e,
            50 + Math.cos(a) * (r + 3),
            46 + Math.sin(a) * (r / 1.1 + 3),
            o,
            Zy[1],
            null,
            4,
            3,
          );
        }
      }
    }),
  ux = () =>
    R(`fenn-thread`, 4, 32, 7, (e, t) => {
      for (let n = 0; n < 32; n++)
        ((n + t) % 2 && N(e, n, 2, Qy[1]),
          N(e, n, 3, Qy[2]),
          (n + t) % 2 == 0 && N(e, n, 4, Qy[1]));
      for (let n = 0; n < 4; n++) {
        let r = (t * 2 + n * 8) % 32;
        (N(e, r, 2, Qy[3], 1, 3), N(e, r, 3, Qy[4]));
      }
    }),
  dx = () =>
    R(`fenn-count`, 8, 32, 22, (e, t) => {
      for (let n = 0; n < 8; n++) {
        let r = 5 + n * 2 + (n >= 4 ? 4 : 0);
        z(e, r, 2, r, 6, n < t ? (n === t - 1 ? Qy[4] : Qy[2]) : Zy[2]);
      }
      (t >= 4 && z(e, 3, 6, 13, 2, t === 4 ? Qy[4] : Qy[3]),
        ex(e, 6, 16, 26, 15, t / 7, 13),
        t >= 6 &&
          (z(e, 12, 15, 9, 19, t === 7 ? Qy[4] : Qy[3]),
          z(e, 19, 16, 22, 19, t === 7 ? Qy[4] : Qy[3])),
        t === 7 && (V(e, 16, 15, 6, 5, Qy, 7), Qb(e, 16, 15, 0.35, 6, 7, 2)));
    }),
  fx = () =>
    R(`fenn-rise`, 4, 27, 30, (e, t) => {
      let n = $g(`barrowhusk`)[t];
      if ((ex(e, 4, 25, 24, 26, 1 - t * 0.25, 17), e.drawImage(n, 3, 2), t < 2))
        for (let n = 0; n < 4; n++) N(e, 8 + n * 4, 23 - ((n + t) % 3), Qy[3]);
    }),
  px = () =>
    R(`fenn-rank`, 4, 96, 30, (e, t) => {
      let n = (t + 1) / 4;
      (e.save(),
        (e.globalAlpha = 0.3),
        N(e, 8, 5, Qy[1], 80, 21),
        (e.globalAlpha = 0.3),
        N(e, Math.round(48 - 40 * n), 5, Qy[2], Math.round(80 * n), 21),
        e.restore());
      for (let t = 14; t <= 84; t += 12) {
        let r = Math.abs(t - 48) < 40 * n;
        (Jb(e, t, 4, 0, r ? Qy[3] : Zy[1], r ? Qy[4] : Zy[2], 4, 3),
          Jb(e, t - 6, 26, 0, r ? Qy[3] : Zy[1], r ? Qy[4] : Zy[2], 4, 3));
      }
      for (let t of [22, 48, 74]) ex(e, t - 4, 15, t + 4, 16, n, t);
    }),
  mx = () =>
    R(`fenn-pikes`, 6, 96, 54, (e, t) => {
      let n = t / 2.5,
        r = t >= 4 ? (t - 3) * 0.4 : 0;
      for (let t = 0; t < 10; t++) {
        let i = 12 + t * 8,
          a = am((n - (Math.abs(i - 48) / 40) * 0.7) * 3);
        (a > 0 && a < 1 && Qb(e, i, 46, a, 5, 7, t),
          $b(e, i, 46, 34 + L(t, 3) * 6, a, r, t),
          a > 0 && ex(e, i - 3, 46, i + 3, 46, 1 - r, t + 30));
      }
      if (t >= 4)
        for (let t of [22, 48, 74]) ex(e, t - 5, 46, t + 5, 47, 1, t + 50);
    }),
  hx = () =>
    R(`fenn-plantmark`, 4, 56, 52, (e, t) => {
      (Yb(e, 28, 26, 24, (t + 1) / 4, 3),
        N(e, 27, 25, t % 2 ? Qy[4] : Qy[3], 2, 2));
    }),
  gx = () =>
    R(`fenn-plant`, 6, 84, 64, (e, t) => {
      if (t === 0) {
        for (let t = 0; t < 44; t++)
          (!(t & 1) || t > 34) && N(e, 42, t, t > 34 ? `#9a6a3a` : ib, 2, 1);
        N(e, 41, 43, Qy[4], 4, 2);
        return;
      }
      let n = (t - 1) / 4;
      for (let t = 0; t < 6; t++) {
        let r = (t / 6) * Math.PI * 2 + 0.3,
          i = 12 + L(t, 4) * 10;
        ex(
          e,
          42,
          44,
          42 + Math.cos(r) * i,
          44 + (Math.sin(r) * i) / 1.1,
          1 - n,
          t + 60,
        );
      }
      let r = 6 + sm(n) * 18;
      for (let i = 0; i < Math.PI * 2; i += 0.04)
        if (!(L(Math.round(i * 25), t, 3) < n * 0.7))
          for (let t = 0; t < 3; t++)
            N(
              e,
              42 + Math.cos(i) * (r - t),
              44 + (Math.sin(i) * (r - t)) / 1.1,
              t === 0 ? $y[4] : $y[3],
            );
      for (let i = 0; i < 8; i++) {
        let a = (i / 8) * Math.PI * 2 + L(i, 9),
          o = 42 + Math.cos(a) * (r + 2),
          s = 44 + (Math.sin(a) * (r + 2)) / 1.1 - Math.sin(n * Math.PI) * 4;
        i % 2 ? Zb(e, o, s, a + t, 3, !0) : N(e, o, s, `#8a6a42`, 2, 1);
      }
      (t === 1 && V(e, 42, 44, 8, 9, Qy, 4),
        t < 4 && Qb(e, 42, 44, 0.25 + n * 0.6, 10, 14, 5),
        t < 3 && vm(e, 42, 42, 5 + t * 3, $y[3], 0.4 + t / 3, 6));
    }),
  _x = () =>
    R(`fenn-names`, 6, 108, 98, (e, t) => {
      if ((tx(e, 54, 49, 48, t / 4, t), t === 5))
        for (let t = 0; t < 10; t++) {
          let n = L(t, 8) * Math.PI * 2;
          N(
            e,
            54 + Math.cos(n) * 48,
            49 + (Math.sin(n) * 48) / 1.1 - 2 - (t % 3),
            tb[4],
          );
        }
    }),
  vx = () =>
    R(`fenn-finial`, 4, 18, 18, (e, t) => {
      nx(e, 8, 10, t, t === 3);
    }),
  yx = () =>
    R(`fenn-unlit`, 6, 30, 52, (e, t) => {
      let n = t >= 4 ? (t - 3) / 2 : 0;
      for (let r = 0; r < 16; r++) {
        let i = 44 - (r / 16) * 42;
        if (n > 0 && (48 - i) / 46 < n) continue;
        let a = 13 + Math.sin(r * 1.3 + t * 0.8) * (5 - (r / 16) * 2);
        (vm(e, a, i, 3.2 - (r / 16) * 1.2, r % 3 ? Qy[0] : Qy[1], 0, r + t),
          r % 4 == t % 4 && N(e, a, i, Qy[3]));
      }
      if (n > 0) {
        let r = 48 - n * 46;
        for (let n = 7; n <= 19; n++)
          L(n, t) > 0.3 &&
            N(e, n, r + (L(n, t, 1) > 0.5 ? 0 : 1), n % 2 ? tb[3] : tb[4]);
        for (let n = 0; n < 4; n++)
          N(e, 8 + n * 3, r + 4 + ((n + t) % 3) * 4, tb[2]);
      }
      if (
        (t === 1 && V(e, 18, 24, 5, 4, nb, 3),
        t === 2 &&
          (z(e, 19, 23, 25, 19, nb[3]),
          N(e, 26, 18, nb[4]),
          dm(e, 19, 26, 27, 30, nb[2], 1, 1)),
        t >= 3)
      )
        for (let n = 6; n < 48; n += 2)
          for (let r = 20; r < 30; r += 2)
            L(r, n, 7) < (r - 13 - 6) / (t === 3 ? 16 : 24) &&
              N(e, r + ((n >> 1) & 1), n, tb[2]);
      if (t === 5) {
        for (let t = 8; t < 46; t += 3)
          N(e, 13 + ((t >> 1) % 2), t, t % 6 ? tb[3] : tb[4]);
        B(e, 13, 48, 6, 2.2, tb[3], (e) => Math.round(e * 6) % 2 == 0);
      }
    }),
  bx = () =>
    R(`fenn-grave`, 6, 34, 30, (e, t) => {
      (Sx(e, 17, 16, 3), t < 4 && Yb(e, 17, 17, 11.2, (t + 1) / 4, 2));
      let n = t < 4 ? t / 4 : 1;
      if (t >= 2)
        for (let n = 16; n < 21; n++)
          for (let r = 11; r < 24; r++)
            (r + n + t) % (t >= 4 ? 2 : 3) == 0 &&
              N(e, r, n, t >= 4 ? Qy[2] : Qy[1]);
      (ex(e, 12, 18, 22, 19, n, 3),
        t >= 3 && ex(e, 15, 20, 20, 16, n, 4),
        t === 5 && (V(e, 17, 18, 8, 7, Qy, 6), Qb(e, 17, 16, 0.4, 10, 12, 8)));
    }),
  xx = () =>
    R(`fenn-claws`, 6, 28, 32, (e, t) => {
      let n = [2, 5, 9, 12, 14, 13][t],
        r = (t, r, i) => {
          let a = 26 - n;
          (N(e, t - 1, a + 3, ob, 3, n - 3 > 0 ? n - 3 : 0),
            N(e, t - 2, a + 1, ab, 4, 3));
          for (let n = 0; n < 4; n++) {
            let o = t - 2 + n * (1 + i);
            z(
              e,
              o,
              a + 1,
              o + r * (n - 1.5) * i * 0.6,
              a - 3,
              n === 3 ? ob : Zy[3],
            );
          }
        };
      if (
        (ex(e, 4, 26, 24, 27, t < 3 ? 1 : 0.6, 5),
        n > 0 && (r(9, -1, +(t >= 2)), t >= 1 && r(19, 1, +(t >= 2))),
        t >= 4 &&
          (P(e, 14, 22, 4, 3, ab), N(e, 13, 22, Qy[4]), N(e, 16, 22, Qy[4])),
        P(e, 14, 27, 11, 2, $y[2]),
        P(e, 14, 26.5, 8, 1.2, $y[3]),
        t >= 1 && t <= 3 && Qb(e, 14, 24, (t - 1) / 3 + 0.2, 7, 9, t),
        t < 3)
      )
        for (let t = 0; t < 3; t++) N(e, 9 + t * 5, 25, Qy[3]);
    });
