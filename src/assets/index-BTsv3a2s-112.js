// index-BTsv3a2s 112 — math
// Lines 53134-53634 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var Kne = () =>
    R(`lil-heart-rings`, 8, 120, 110, (e, t) => {
      let n = [0, 0, 8, 20, 32, 44, 56, 0][t],
        r = [0, 0, 0, 0, 8, 20, 32, 44][t];
      if (t < 2) {
        KO(e, 60, 55, 10 + t * 4, 0.4 + t * 0.45, t, { seed: 3 });
        for (let n = 0; n < 32; n++) {
          let r = (n / 32) * BO,
            i = n % 2 == 0;
          for (let n = 22; n < 54; n += i ? 3 : 5)
            N(
              e,
              60 + Math.cos(r) * n,
              55 + (Math.sin(r) * n) / 1.1,
              i ? (t ? K[2] : K[1]) : PO[1],
            );
        }
      } else B(e, 60, 55, 6, 6 / 1.1, t === 2 || t === 4 ? K[3] : K[1]);
      (n > 0 && lk(e, 60, 55, n, 0, t, 0, !0),
        r > 0 && lk(e, 60, 55, r, Math.PI / ck, t, 0, !0));
      let i = t === 2 || t === 4;
      (P(e, 60, 55, i ? 3.5 : 2.5, i ? 3.5 : 2.5, K[2]),
        N(e, 59, 54, i ? FO : K[4], 2, 2));
    }),
  qne = () =>
    R(`lil-heart-pop`, 4, 18, 18, (e, t) => {
      if (t === 0) {
        (P(e, 9, 9, 5, 3.4, K[2]),
          P(e, 9, 9, 3, 2, K[3]),
          N(e, 8, 8, FO, 2, 2));
        return;
      }
      JO(e, 9, 11, 1 + t, 5, K, !1);
      for (let n = 0; n < 7; n++) {
        let r = (n / 7) * BO + 0.3,
          i = 2 + t * 2.2,
          a = 9 + Math.cos(r) * i,
          o = 9 + Math.sin(r) * i * 0.8 + t * t * 0.4;
        (t === 3 && n % 2) ||
          (N(e, a, o, t === 1 ? K[4] : t === 2 ? K[3] : K[2]),
          t === 1 && N(e, a - Math.cos(r), o - Math.sin(r), K[2]));
      }
    }),
  uk = 19,
  dk = () =>
    R(`lil-rain-tele`, 6, 44, 40, (e, t) => {
      let n = t / 5;
      (Sm(e, 22, 20, 2 + n * 6, 1 + n * 3, K[0], 0.75),
        KO(e, 22, 20, uk, n, t, { drawn: Math.min(1, (t + 1) / 4), seed: 5 }));
      for (let n = 0; n < t * 2 + 1; n++) {
        let t = L(n, 8) * BO,
          r = 4 + L(n, 9) * uk * 0.7;
        JO(
          e,
          22 + Math.cos(t) * r,
          20 + (Math.sin(t) * r) / 1.1,
          0.6 + L(n, 10) * 0.9,
          n,
          K,
          !1,
        );
      }
      if (t < 5)
        for (let n = 0; n < 2; n++) {
          let r = 22 + (L(t, n, 3) - 0.5) * 26,
            i = 6 + L(t, n, 4) * 16;
          (N(e, r, i - 3, K[1], 1, 2), N(e, r, i - 1, K[3], 1, 2));
        }
    }),
  fk = () =>
    ik(
      `lil-rain-drop`,
      4,
      14,
      40,
      (e, t) => {
        if (t < 2)
          for (let n = 0; n < (t === 0 ? 4 : 2); n++)
            N(e, 7 + (n % 2), n, K[1]);
      },
      (e, t) => {
        let n = [10, 18, 27, 34][t],
          r = [9, 11, 13, 9][t],
          i = [3, 2.8, 2.6, 3.6][t];
        (hm(e, 7, n, -Math.PI / 2, r, i, K), N(e, 6, n + r / 2 - i - 1, K[4]));
      },
    ),
  pk = () =>
    R(`lil-rain-splash`, 6, 44, 40, (e, t) => {
      (JO(e, 22, 25, 5 + sm(t / 5) * 11, 3, K, t > 1),
        t === 0 && (V(e, 22, 22, 9, 10, K, 2), N(e, 21, 21, FO, 3, 2)),
        t >= 4 &&
          B(
            e,
            22,
            25,
            14 + t,
            (14 + t) / 1.6,
            K[2],
            (e) => Math.round(e * 5) % 3 != 0,
          ),
        YO(e, 22, 25, am((t + 0.5) / 5), 22, 7));
    }),
  mk = () =>
    R(`lil-rain-pool`, 4, 44, 40, (e, t) => {
      let n = uk;
      for (let t = 0; t < 40; t++)
        for (let r = 0; r < 44; r++) {
          let i = r + 0.5 - 22,
            a = (t + 0.5 - 21) * 1.1,
            o = Math.hypot(i, a),
            s = n * (0.8 + 0.2 * UO(Math.atan2(a, i), 4, 8));
          if (o > s) continue;
          let c = o / s,
            l = i * 0.6 + a * 0.8,
            u = K[1];
          (c > 0.86
            ? (u = l < -4.75 ? K[2] : l > n * 0.25 ? K[0] : K[1])
            : c > 0.5 && l > n * 0.35 && !((r + t) & 1) && (u = K[0]),
            N(e, r, t, u));
        }
      (N(e, 13, 14, K[2], 7, 1),
        N(e, 14, 14, K[3], 3, 1),
        N(e, 18, 16, K[2], 4, 1));
      for (let r = 0; r < 5; r++)
        (r + t) % 4 != 0 &&
          N(
            e,
            22 + (L(r, 4) - 0.5) * n * 1.1,
            21 + (L(r, 5) - 0.5) * n * 0.8,
            r === 0 ? K[4] : K[2],
            r % 2 ? 2 : 1,
            1,
          );
      let r = 2 + t * 2.5;
      (B(
        e,
        26,
        23,
        r,
        r * 0.55,
        t < 2 ? K[3] : K[2],
        (e) => Math.round(e * 4) % 3 != 1,
      ),
        t === 1 && B(e, 15, 25, 1.5, 1.2, K[3]),
        t === 2 && N(e, 14, 24, K[4]));
      for (let n = 0; n < 8; n++) {
        let r = ((n + t * 0.25) / 8) * BO;
        N(e, 22 + Math.cos(r) * 20.5, 21 + (Math.sin(r) * 20.5) / 1.1, K[2]);
      }
    }),
  Jne = () =>
    R(`lil-veil-out`, 6, 40, 52, (e, t) => {
      let n = Zh(`hollow`)[0],
        r = [0, 0.22, 0.42, 0.62, 0.84, 1.15][t];
      (t >= 2 && JO(e, 20, 46, 3 + t * 1.1, 6, K, t > 2, 1.8),
        t >= 2 &&
          t <= 4 &&
          vm(e, 20, 30 - t * 2, 5 + t * 2, K[1], (t - 2) / 3, 4),
        nk(e, n, 6, 6, r, 7),
        t === 0 && Ine(e, n, 6, 6, 9));
    }),
  Yne = () =>
    R(`lil-veil-in`, 6, 40, 52, (e, t) => {
      let n = Zh(`hollow`)[0],
        r = [1.15, 0.84, 0.62, 0.42, 0.22, 0][t];
      (t <= 3 && JO(e, 20, 46, 8.5 - t * 1.7, 8, K, t < 2, 1.8),
        t >= 1 &&
          t <= 3 &&
          vm(e, 20, 26 + t * 2, 12 - t * 2, K[1], 0.4 + t * 0.15, 5),
        nk(e, n, 6, 6, r, 7),
        t === 5 && _m(e, 20, 26, 0.5, 10, 14, K, 6, 0.6));
    }),
  hk = () =>
    R(`lil-vortex`, 8, 52, 48, (e, t) => {
      if (t < 2) {
        KO(e, 26, 24, 16, (t + 1) / 2, t, { seed: 11 });
        return;
      }
      if (t === 2) {
        (JO(e, 26, 25, 8, 4),
          YO(e, 26, 25, 0.4, 20, 4),
          V(e, 26, 22, 10, 13, K, 6),
          N(e, 25, 21, FO, 3, 3));
        return;
      }
      let n = (t - 3) * 0.55;
      Sm(e, 26, 24, 15, 13.5, K[0], 0.5);
      for (let r = 0; r < 3; r++)
        for (let i = 0; i < 22; i++) {
          let a = i / 22,
            o = 2.5 + a * 14,
            s = n + (r * BO) / 3 + a * 3.4,
            c = 26 + Math.cos(s) * o,
            l = 24 + (Math.sin(s) * o) / 1.1;
          L(r, i, t) < 0.2 ||
            (N(e, c, l, a < 0.3 ? K[3] : a < 0.65 ? K[2] : K[1]),
            i % 5 == 2 && WO(e, c + 0.5, l + 0.5, !1, a < 0.3));
        }
      for (let r = 0; r < 12; r++) {
        let i = L(r, 5) * BO + n * 0.4,
          a = 18 + ((L(r, 6) * 7 + (t - 3) * 2.5) % 7),
          o = 26 + Math.cos(i) * a,
          s = 24 + (Math.sin(i) * a) / 1.1;
        (z(e, o, s, o + Math.cos(i) * 3, s + (Math.sin(i) * 3) / 1.1, K[1]),
          N(e, o, s, K[2]));
      }
      (P(e, 26, 24, 2.6, 2.3, K[0]), N(e, 26, 24, FO));
    }),
  Xne = () =>
    R(`lil-drink-circle`, 6, 124, 114, (e, t) => {
      let n = [0, 0.22, 0.42, 0.7, 1, 1][t],
        r = QO(e, 62, 60, 58, {
          lit: n,
          flare: t === 4 ? 1 : t === 5 ? 0.5 : 0,
          chase: t >= 4 ? (t - 4) * 0.08 : void 0,
          seed: 2,
        });
      (t >= 4
        ? r.forEach(([n, r], i) =>
            GO(e, 62, 34, n, r - 14, (t + i) / 4, {
              gap: 8,
              sag: -3,
              hot: t === 4,
            }),
          )
        : t === 3 &&
          r.forEach(([t, n], r) =>
            GO(e, 62, 34, t, n - 14, r / 5, { twin: !1 }),
          ),
        P(e, 62, 34, t >= 4 ? 3 : 2, t >= 4 ? 3 : 2, K[2]),
        N(e, 61, 33, t >= 4 ? FO : K[3], 2, 2));
    }),
  Zne = () =>
    ak(`lil-drink-thread`, { w: 2, gap: 8, big: !0, hot: !0, speed: 2 }),
  Qne = ZO(0, 26, 66).map(([e, t]) => Math.atan2(t, e)),
  $ne = () =>
    R(`lil-drink-heal`, 6, 44, 48, (e, t) => {
      Qne.forEach((n, r) => {
        let i = Math.cos(n),
          a = Math.sin(n);
        if (t <= 2) {
          z(e, 22 + i * 5, 20 + a * 5, 22 + i * 30, 20 + a * 30, K[1]);
          let n = [18, 11, 5][t];
          WO(e, 22 + i * n + 0.5, 20 + a * n + 0.5, !0, t === 2);
        } else
          t === 3
            ? z(e, 22 + i * 5, 20 + a * 5, 22 + i * 30, 20 + a * 30, K[3])
            : z(
                e,
                22 + i * (5 + (t - 3) * 3),
                20 + a * (5 + (t - 3) * 3),
                22 + i * 30,
                20 + a * 30,
                t === 4 ? K[2] : K[1],
              );
        t >= 3 && N(e, 22 + i * (4 + r), 20 + a * (4 + r), K[4]);
      });
      let n = [2.4, 2.8, 3.2, 5, 4, 3][t];
      if (
        (P(e, 22, 20, n, n, K[2]),
        P(e, 21.5, 19.5, n * 0.6, n * 0.6, K[3]),
        N(e, 21, 19, t === 3 ? FO : K[4], 2, 2),
        t === 3 && V(e, 22, 20, 10, 10, K, 2),
        t >= 3)
      ) {
        let n = [0, 0, 0, 6, 11, 15][t];
        (B(
          e,
          22,
          20,
          n,
          n,
          t === 3 ? K[4] : K[2],
          (e) => t < 5 || Math.round(e * 5) % 2 == 0,
        ),
          z(e, 22, 17, 23, 12, t === 3 ? FO : K[3]));
      }
    }),
  gk = [5, 27],
  _k = [46, 3],
  ere = () =>
    R(`lil-drink-cut`, 6, 50, 32, (e, t) => {
      let [n, r] = gk,
        [i, a] = _k,
        o = 0.47,
        s = om(n, i, o),
        c = om(r, a, o),
        l = Math.hypot(i - n, a - r),
        u = -(a - r) / l,
        d = (i - n) / l;
      if (t <= 2) {
        let l = (t + 1) * 0.04;
        (GO(e, i, a, n, r, t / 3, { gap: 10, to: 0.53 - l }),
          GO(e, i, a, n, r, t / 3, { gap: 10, from: 0.53 + l }));
        for (let s = -1; s <= 1; s += 2)
          for (let c = o - l; c <= o + l; c += 0.01) {
            let f = Math.sin(((c - o + l) / (2 * l)) * Math.PI) * (1 + t);
            N(
              e,
              om(n, i, c) + u * f * s,
              om(r, a, c) + d * f * s,
              t === 2 ? K[3] : K[2],
            );
          }
        for (let n = 0; n < t * 3 + 2; n++)
          N(
            e,
            s + (L(n, t) - 0.5) * 8,
            c + (L(t, n) - 0.5) * 7,
            n % 3 ? IO[3] : IO[4],
          );
      } else if (t === 3)
        (GO(
          e,
          n,
          r,
          om(n, i, 0.38999999999999996),
          om(r, a, 0.38999999999999996),
          0,
          { twin: !1 },
        ),
          GO(
            e,
            om(n, i, 0.5499999999999999),
            om(r, a, 0.5499999999999999),
            i,
            a,
            0,
            { twin: !1 },
          ),
          V(e, s, c, 8, 8, IO, 4),
          N(e, s - 1, c - 1, FO, 2, 2));
      else {
        for (let i = 0; i <= 20; i++) {
          let a = i / 20;
          N(
            e,
            n + a * (t === 4 ? 13 : 15),
            r - (1 - a) * (t === 4 ? 4 : 1) + Math.sin(a * 5) * 0.8,
            t === 4 ? K[2] : K[1],
          );
        }
        let o = t === 4 ? 0.7 : 0.88;
        GO(e, om(n, i, o), om(r, a, o), i, a, 0, { twin: !1 });
        for (let n = 0; n < 3; n++)
          N(e, s + n * 4 - 4, c + (t - 3) * 5 + n, K[2]);
        if (t === 5)
          for (let t = 0; t < 4; t++)
            N(e, n + (L(t, 2) - 0.5) * 6, r - 4 - t * 2, IO[3]);
      }
      t <= 3
        ? WO(e, n, r, !0, t % 2 == 0)
        : (N(e, n - 1, r - 1, PO[1], 2, 2), N(e, n - 1, r - 1, IO[2]));
    }),
  tre = () =>
    R(`lil-drink-dry`, 5, 50, 32, (e, t) => {
      let [n, r] = gk,
        [i, a] = _k;
      if (t <= 1)
        GO(e, i, a, n, r, t / 2, {
          gap: t === 0 ? 7 : 5,
          w: 2,
          big: !0,
          hot: t === 1,
        });
      else {
        let o = t === 2 ? 0.55 : 1.1,
          s = Math.ceil(Math.hypot(i - n, a - r) * 1.5);
        for (let c = 0; c <= s; c++) {
          let l = c / s,
            u = om(n, i, l),
            d = om(r, a, l);
          if (l > o) {
            N(e, u, d, K[3]);
            continue;
          }
          (t >= 3 && L(c, t) < (t === 3 ? 0.45 : 0.8)) ||
            N(
              e,
              u,
              d + (t >= 3 ? (t - 2) * 1.5 * L(c, 3) : 0),
              t === 2 ? LO[3] : LO[2],
            );
        }
        if (t >= 3)
          for (let o = 0; o < 10; o++)
            N(
              e,
              om(n, i, L(o, 1)) + (t - 3) * 2,
              om(r, a, L(o, 1)) + 2 + (t - 2) * 3 * L(o, 2),
              LO[1 + (o % 3)],
            );
        t === 2 && WO(e, om(n, i, 0.75), om(r, a, 0.75), !0, !0);
      }
      t <= 1
        ? WO(e, n, r, !0, !0)
        : N(e, n - 1, r - 1, LO[t === 2 ? 3 : 1], 2, 2);
    }),
  vk = 48,
  nre = () =>
    R(`lil-unmaking-sigil`, 8, 104, 96, (e, t) => {
      let n = t / 7;
      $O(e, 52, 48, vk, n, t);
      let r = Ry(!0, t % 4);
      e.drawImage(r, 45, 32);
      let i = Math.floor(n * 6);
      for (let t = 0; t < i; t++)
        z(
          e,
          47 + L(t, 1) * 10,
          35 + L(t, 2) * 10,
          47 + L(t, 3) * 10,
          37 + L(t, 4) * 10,
          K[3],
        );
    }),
  rre = () =>
    R(`lil-unmaking-broken`, 6, 104, 96, (e, t) => {
      let [n, r] = M(104, 96);
      if (($O(r, 52, 48, vk, 0.71, 2), t === 0)) {
        e.drawImage(n, 0, 0);
        let t = 8,
          r = 30;
        for (let n = 0; n < 9; n++) {
          let i = t + 10 + L(n, 4) * 2,
            a = r + (L(n, 5) - 0.4) * 9;
          (z(e, t, r, i, a, FO), (t = i), (r = a));
        }
      } else Lne(e, n, 52, 48, t / 5, 3);
      let i = Ry(!0, t % 4);
      (e.drawImage(i, 45, 32),
        t >= 1 &&
          t <= 3 &&
          B(
            e,
            52,
            40,
            6 + t * 4,
            (6 + t * 4) * 0.9,
            t === 1 ? `#ffffff` : `#7ef9ff`,
            (e) => Math.round(e * 6) % 2 == 0,
          ));
    }),
  ire = () =>
    R(`lil-unmaking-pillar`, 6, 44, 100, (e, t) => {
      if (t === 0) {
        z(e, 22, 0, 22, 88, FO);
        for (let t = 0; t < 88; t += 3) N(e, 21, t, K[3]);
        (P(e, 22, 88, 4, 2, K[3]), N(e, 21, 87, FO, 3, 2));
        return;
      }
      let n = [0, 14, 19, 11, 4, 0][t];
      if ((n > 0 && gm(e, 22, -6, 22, 90, n, RO, t, { jitter: 2.2 }), t <= 4)) {
        let n = 5 + t * 3.5;
        (B(e, 22, 88, n, n * 0.42, t < 3 ? FO : K[3]),
          YO(e, 22, 88, t / 5, 24, 3, RO));
      }
      for (let r = 0; r < 6 + t * 2; r++) {
        let i = r % 2 ? 1 : -1,
          a = 10 + L(r, 2) * 74;
        N(
          e,
          22 + i * (n / 2 + 2 + L(r, t, 3) * t * 2.5),
          a - t * 2,
          r % 5 == 0 ? `#7ef9ff` : r % 3 == 0 ? FO : K[3],
          2,
          2,
        );
      }
      if (t === 5)
        for (let t = 0; t < 8; t++)
          N(
            e,
            22 + (L(t, 7) - 0.5) * 10,
            20 + L(t, 8) * 60 + t * 2,
            K[2],
            1,
            2,
          );
    }),
  are = () =>
    R(`lil-unmaking-unmade`, 8, 64, 64, (e, t) => {
      let n = Ry(!0, 0);
      if (t === 0) {
        (e.save(), e.scale(2, 2), e.drawImage(n, 9, 12), e.restore());
        for (let t = 0; t < 6; t++) {
          let n = 38 + t * 4;
          z(
            e,
            22 + L(t, 1) * 4,
            n,
            40 + L(t, 2) * 4,
            n - 2 + L(t, 3) * 4,
            K[3],
          );
        }
        return;
      }
      rk(e, n, 32, 40, (t - 1) / 6, 5);
    });
