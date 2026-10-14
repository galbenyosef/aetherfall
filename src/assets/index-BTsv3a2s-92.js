// index-BTsv3a2s 92 — math
// Lines 47625-47963 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var ST = () =>
    R(`k1-gorrath-grate`, 8, 28, 28, (e, t) => {
      let n = [0, 0.35, 0.6, 0.85, 1, 1, 1, 1][t],
        r = [0, 0, 0, 3, 6, 8, 8, 8][t],
        i = [0, 0.1, 0.2, 0.3, 0.6, 1, 0.85, 1][t];
      if (
        (xT(e, 14, 16, n, r, i, t),
        t === 5 && V(e, 14, 16, 10, 12, $w, 3),
        t >= 1 && t <= 3)
      )
        for (let n = 0; n < 8; n++) {
          let r = L(n, 4) * Ww,
            i = 13 - t * 3 + L(n, 5) * 2;
          N(
            e,
            14 + Math.cos(r) * i,
            16 + Math.sin(r) * i,
            n % 2 ? Yw[3] : Yw[4],
          );
        }
    }),
  CT = () =>
    R(`k1-gorrath-exposed`, 4, 28, 28, (e, t) => {
      let n = t < 3 ? 8 : 2,
        r = [1, 0.85, 0.65, 0.4][t];
      xT(e, 14, 16, r, n, t < 3 ? 0.55 + (t % 2) * 0.25 : 0.2, t);
      for (let n = 0; n < 6; n++) {
        let r = 9 - n * 1.5 - (t % 2);
        N(e, 14 + Math.sin(n * 1.3 + t) * 3, r, n < 2 ? Yw[3] : iT[2]);
      }
    }),
  wT = () =>
    R(`k1-gorrath-venttile`, 4, 32, 26, (e, t) => {
      for (let n = 0; n < 26; n++)
        for (let r = 0; r < 32; r++) {
          let i = (((r - t * 8) % 32) + 32) % 32,
            a = L(Math.floor(i / 3), Math.floor((n - 13) / 2), 9),
            o = L(Math.floor(i / 6), Math.floor((n - 13) / 4), 10),
            s = Math.abs(n + 0.5 - 13) / (9 + (o - 0.5) * 4);
          if (s > 1.15) continue;
          let c = (1 - s) * 1.05 + (a - 0.5) * 0.4;
          if (c < 0.12) {
            if ((r + n + t) % 2) continue;
            N(e, r, n, iT[1]);
            continue;
          }
          N(e, r, n, rT(am(c)));
        }
    }),
  TT = () =>
    R(`k1-gorrath-vent`, 8, 112, 64, (e, t) => {
      if (t < 3) {
        let n = (t + 1) / 3,
          r = M(112, 64);
        (fm(
          r[1],
          [
            [6, 25],
            [106, 9],
            [106, 55],
            [6, 39],
          ],
          Yw[1],
        ),
          e.save(),
          (e.globalAlpha = 0.3),
          e.drawImage(r[0], 0, 0),
          e.restore());
        let i = M(112, 64),
          a = 100 * n;
        (fm(
          i[1],
          [
            [6, 25],
            [6 + a, 32 - (14 + 32 * n) / 2],
            [6 + a, 32 + (14 + 32 * n) / 2],
            [6, 39],
          ],
          Yw[2],
        ),
          e.save(),
          (e.globalAlpha = 0.35),
          e.drawImage(i[0], 0, 0),
          e.restore(),
          cT(e, 6, 25, 106, 9, n, 1),
          cT(e, 106, 55, 6, 39, n, 2),
          cT(e, 106, 9, 106, 55, n, 3),
          t === 2 && pT(e, 6, 32, 0, 100, 14, 46, t, 0.18));
      } else if (t < 7) pT(e, 6, 32, 0, 100, 14, 46, t, t === 3 ? 0.6 : 1);
      else {
        pT(e, 6, 32, 0, 100, 8.4, 46 * 0.7, t, 1, 0.55);
        for (let t = 0; t < 10; t++)
          vm(
            e,
            20 + t * 9,
            32 + (L(t, 3) - 0.5) * 20,
            3 + L(t, 4) * 3,
            aT,
            0.5,
            t,
          );
      }
    }),
  ET = () =>
    R(`k1-gorrath-shed`, 6, 84, 76, (e, t) => {
      let n = t / 5;
      t === 0 && (V(e, 42, 28, 10, 9, Yw, 4), P(e, 42, 28, 3, 3, Yw[4]));
      for (let t = 0; t < 5; t++) {
        let r = (t / 5) * Ww + 0.4 + (L(t, 2) - 0.5) * 0.5,
          i = 26 + L(t, 3) * 12,
          a = 42 + Math.cos(r) * i,
          o = 50 + (Math.sin(r) * i) / 1.1,
          s = (e) => [om(42, a, e), om(28, o, e) - Math.sin(Math.PI * e) * 16];
        if (n < 1) {
          for (let t = 1; t <= 6; t++) {
            let [r, i] = s(Math.max(0, n - t * 0.035));
            N(
              e,
              r,
              i,
              t < 3 ? Yw[4] : t < 5 ? Yw[3] : iT[2],
              t < 3 ? 2 : 1,
              t < 3 ? 2 : 1,
            );
          }
          let [t, r] = s(n);
          (P(e, t, r, 2.4, 2.2, Yw[3]),
            P(e, t, r, 1.2, 1.2, Yw[4]),
            N(e, t - 1, r - 2, iT[2], 2, 1));
        } else
          (B(e, a, o, 5, 2.5, iT[2], (e) => Math.round(e * 4) % 3 != 0),
            B(e, a, o, 5, 2.5, Yw[3], (e) => Math.round(e * 4) % 3 == 0),
            P(e, a, o, 1.5, 1, Yw[4]),
            _m(e, a, o - 1, 0.4, 4, 5, Yw, t));
      }
    }),
  DT = (e, t) =>
    R(`k1-gorrath-hatch-${e}`, 8, 26, 34, (e, n) => {
      if (n === 0) {
        for (let n = 1; n < 5; n++)
          N(e, 13 - n * 2, 25 - n * 2, n < 2 ? t[4] : t[3]);
        (P(e, 13, 28, 1.5, 1.5, t[4]), V(e, 13, 28, 6, 4, t, 1));
        return;
      }
      let r = am((n - 1) / 4);
      for (let i = 0; i < 22; i++) {
        let a = (i / 22) * Ww,
          o = i % 4 == 0 || (r > 0.5 && i % 4 == 2);
        N(
          e,
          13 + Math.cos(a) * 7,
          29 + Math.sin(a) * 3,
          o && n < 6 ? t[3] : iT[2],
        );
      }
      if (n < 6) {
        (P(e, 13, 29, 2 + r, 1.2 + r * 0.4, t[2]),
          N(e, 12.5, 28.5, t[4], 2, 1));
        let i = [2, 3, 5, 12, 20][n - 1];
        (mT(e, 13, 28, i, 1.5 + r * 2.5, t, n, 2),
          n >= 4 && mT(e, 10, 29, Math.round(i * 0.5), 1, t, n + 2, 5),
          n >= 4 && mT(e, 16, 29, Math.round(i * 0.6), 1, t, n + 1, 7));
      } else if (n === 6)
        (V(e, 13, 19, 10, 12, t, 3),
          P(e, 13, 19, 3, 3, t[4]),
          _m(e, 13, 19, 0.3, 10, 12, t, 4));
      else {
        _m(e, 13, 19, 0.85, 10, 12, t, 4, 0.5);
        for (let t = 0; t < 5; t++) N(e, 7 + t * 3, 29 - (t % 2), iT[2]);
      }
    }),
  OT = [
    [8, 20],
    [26, 38],
    [44, 56],
  ],
  kT = () =>
    R(`k1-gorrath-caldera`, 8, 124, 114, (e, t) => {
      let n = Math.min(1, (t + 1) / 2);
      for (let r = 0; r < 12; r++) {
        let i = 62,
          a = 57,
          o = (r / 12) * Ww + L(r, 2) * 0.3,
          s = 58 * n * (0.75 + L(r, 3) * 0.25);
        for (let n = 0; n < 6; n++) {
          let c = i + (Math.cos(o + (L(r, n) - 0.5) * 0.8) * s) / 6,
            l = a + (Math.sin(o + (L(r, n) - 0.5) * 0.8) * s) / 6 / 1.1;
          (z(e, i, a, c, l, t >= 6 ? iT[1] : Yw[2], n < 2 ? 2 : 1),
            t < 6 && n % 2 == 0 && z(e, i, a, c, l, Yw[3]),
            (i = c),
            (a = l));
        }
      }
      let r = (e, t) =>
        Math.abs(((e - ((t * 2.1) % Ww) + Ww + Math.PI) % Ww) - Math.PI) < 0.42;
      if (
        (OT.forEach(([n, i], a) => {
          if (t !== a + 1) return;
          let o = M(124, 114);
          (pm(o[1], 62, 57, n, i, 1.1, (e, t) => (r(t, a) ? null : Yw[2])),
            e.save(),
            (e.globalAlpha = 0.45),
            e.drawImage(o[0], 0, 0),
            e.restore());
          for (let [t, o] of [
            [i, 1],
            [n, -1],
          ]) {
            let n = Math.ceil(t * 6.3);
            for (let i = 0; i < n; i++) {
              let s = (i / n) * Ww;
              r(s, a) ||
                oT(
                  e,
                  62 + Math.cos(s) * t,
                  57 + (Math.sin(s) * t) / 1.1,
                  Math.cos(s) * o,
                  (Math.sin(s) / 1.1) * o,
                  (s / Ww) * t * 0.4,
                  0.55,
                  a,
                );
            }
          }
        }),
        OT.forEach(([n, i], a) => {
          let o = t === a + 2,
            s = t === a + 3;
          if (
            (o || s) &&
            (pm(e, 62, 57, n, i, 1.1, (e, n) => {
              if (r(n, a)) return null;
              let i = L(Math.round(n * 20), Math.round(e * 4), t);
              if (s && i < 0.55) return null;
              let o =
                (1 - Math.abs(e - 0.5) * 2) * 0.8 +
                (i - 0.5) * 0.5 +
                (s ? -0.3 : 0.3);
              return o < 0.15 ? null : rT(am(o));
            }),
            o)
          )
            for (let o = 0; o < 10; o++) {
              let s = (o / 10) * Ww + 0.2;
              if (r(s, a)) continue;
              let c = (n + i) / 2;
              V(
                e,
                62 + Math.cos(s) * c,
                57 + (Math.sin(s) * c) / 1.1,
                5,
                5,
                $w,
                o + t,
              );
            }
        }),
        P(e, 62, 57, 6, 5, t >= 6 ? Yw[2] : Yw[3]),
        P(e, 62, 57, 3, 2.5, t >= 6 ? Yw[3] : $w[4]),
        t === 7)
      )
        for (let t = 0; t < 8; t++)
          vm(
            e,
            62 + (L(t, 1) - 0.5) * 80,
            57 + (L(t, 2) - 0.5) * 60,
            3 + L(t, 3) * 3,
            aT,
            0.4,
            t,
          );
    }),
  AT = () =>
    R(`k1-gorrath-geyser`, 6, 18, 46, (e, t) => {
      (N(e, 3, 42, t < 5 ? Yw[3] : iT[2], 12, 1), N(e, 6, 42, Yw[4], 6, 1));
      let n = [0, 10, 34, 38, 18, 0][t];
      if (
        (n && mT(e, 9, 42, n, [0, 3, 5.5, 6, 4, 0][t], tT, t, 3),
        t >= 2 && t <= 4)
      )
        for (let r = 0; r < 3; r++) {
          let i = 42 - n * (0.4 + L(r, t) * 0.6);
          N(e, 5 + L(r, 7) * 8, i, iT[2], 2, 2);
        }
      (t === 1 && V(e, 9, 40, 6, 6, $w, 2),
        t === 5 && (vm(e, 9, 34, 5, aT, 0.3, 4), vm(e, 10, 27, 4, aT, 0.7, 5)));
    });
function jT() {
  let [e, t] = Tm(240, 164, `lava`, 21);
  (fT(t, 196, 44, 16, 6, 0.2, 2), fT(t, 40, 140, 14, 5, 0.1, 3));
  let [n, r] = Jw(t, `gorrath`, 0, 78, 98, 16)(19.5, 24),
    i = M(240, 164);
  return (
    pT(i[1], n + 14, r + 5, 0.32, 150, 12, 52, 4),
    bm(t, i[0], 0, 0, 6, 0.85),
    t.drawImage(i[0], 0, 0),
    xT(t, n, r, 1, 8, 1, 4),
    ym(t, n, r, 26, $w[3], 0.9),
    ym(t, n + 60, r + 24, 40, Xw[2], 0.35),
    qw(t, `cryo`, 150, 52, 3, 6),
    qw(t, `storm`, 26, 70, 2, 6),
    Dm(t, 240, 164, 0.4),
    e
  );
}
function MT() {
  let [e, t] = Tm(240, 168, `ash`, 23);
  (fT(t, 182, 40, 13, 5, 0.25, 7), fT(t, 112, 150, 12, 5, 0.12, 8));
  let n = [
    [128, 86],
    [168, 68],
    [200, 98],
    [184, 134],
    [144, 138],
    [116, 116],
  ];
  n.forEach(([e, n], r) => lT(t, e, n, 21, 0.75 + (r % 2) * 0.2, r + 3));
  let r = yT()[1];
  (t.drawImage(r, n[2][0] - 26, n[2][1] - 24),
    Jw(t, `gorrath`, 2, 50, 96, 16),
    qw(t, `pyro`, 162, 110, 3));
  let i = vT(),
    a = M(240, 168);
  return (
    n.forEach(([e, t], n) => {
      if (n === 2) return;
      let r = 30 + n * 6;
      a[1].drawImage(i[n % 4], e - 9, t - 23 - r);
    }),
    bm(t, a[0], 0, 0, 3, 0.6),
    t.drawImage(a[0], 0, 0),
    n.forEach(
      ([e, n], r) => r !== 2 && ym(t, e, n - 30 - r * 6, 10, Xw[2], 0.5),
    ),
    ym(t, n[2][0], n[2][1] - 2, 20, Xw[3], 0.6),
    Dm(t, 240, 168, 0.35),
    e
  );
}
