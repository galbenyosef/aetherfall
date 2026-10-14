// index-BTsv3a2s 103 — math
// Lines 50847-51113 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var ZD = () =>
    XE(
      `vesker-flail`,
      5,
      48,
      44,
      (e, t) => {
        let n = -1.13 + 2.27 * Math.min(1, (t + 1) / 2),
          r = t < 3 ? 23 : 23 - (t - 2) * 4,
          i = t < 3 ? 0 : (t - 2) * 4,
          a = 8 + Math.cos(n) * r,
          o = 22 + (Math.sin(n) * r) / 1.15 + i;
        (GD(e, 8, 22, a, o, { sag: t < 3 ? 0 : i * 0.7, weak: [4] }),
          KD(e, a, o, n + Math.PI / 2 + (t >= 3 ? 0.6 : 0), t));
      },
      (e, t, n) => {
        let r = $E(e, t, n, 8, 22, 19, 27, 13, (e, t) =>
          L(Math.round(e * 30), Math.round(t * 60), 17) > 0.35 + t * 0.4
            ? null
            : e > 0.6 && t > 0.75
              ? qE[3]
              : e > 0.4
                ? qE[2]
                : qE[1],
        );
        for (let i = -1.13; i < r - 0.25; i += 0.22) {
          if (L(Math.round(i * 20), t, 2) < am((t - 1) / (n - 2)) * 0.9)
            continue;
          let r = -Math.sin(i),
            a = Math.cos(i);
          UD(e, 8 + Math.cos(i) * 23, 22 + (Math.sin(i) * 23) / 1.15, r, a, [
            KE[0],
            KE[1],
            KE[1],
            KE[2],
            KE[3],
          ]);
        }
        t >= 3 &&
          JD(
            e,
            8 + Math.cos(r) * 24,
            22 + (Math.sin(r) * 24) / 1.15 + 4,
            3 + t,
            (t - 3) / 2,
            4,
          );
      },
      HD,
      !1,
    ),
  QD = () =>
    R(`vesker-lash`, 6, 26, 26, (e, t) => {
      let n = t / 5;
      t === 0 && (V(e, 13, 16, 6, 7, GE, 3), N(e, 12, 15, GE[4], 2, 2));
      for (let t = 0; t < 8; t++) {
        let r = -Math.PI / 2 + (L(t, 91) - 0.5) * 2.4,
          i = 5 + L(t, 92) * 7,
          a = 13 + Math.cos(r) * i * n,
          o = 16 + Math.sin(r) * i * n + 10 * n * n;
        (n > 0.8 && t % 2) ||
          N(e, a, o, t % 3 ? KE[2] : KE[3], L(t, 93) > 0.5 ? 2 : 1, 1);
      }
      for (let r = 0; r < 2; r++) {
        let i = 13 + (r ? 1 : -1) * (2 + n * 8),
          a = 12 - n * 6 + n * n * 14,
          o = t * 0.9 + r;
        UD(e, i, a, Math.cos(o), Math.sin(o), BD);
      }
      t >= 1 && t < 5 && JD(e, 13, 18, 3 + t * 1.3, t / 5, 9);
    }),
  $D = () =>
    R(`vesker-hooktele`, 4, 114, 26, (e, t) => {
      let n = (t + 1) / 4;
      (e.save(),
        (e.globalAlpha = 0.28),
        N(e, 0, 3, qE[1], 114, 20),
        (e.globalAlpha = 0.35),
        N(e, 0, 3, qE[2], Math.round(114 * n), 20),
        e.restore());
      for (let t of [3, 23])
        for (let r = 2, i = 0; r < 112; r += 3, i++) {
          let a = r / 114 < n ? BD : [BD[0], BD[0], BD[1], BD[2], BD[2]];
          i === 18
            ? UD(e, r, t, 1, 0, GE, !0)
            : i % 2 == 0
              ? UD(e, r, t, 1, 0, a)
              : WD(e, r, t, 1, 0, a, 1);
        }
      for (let t = 12; t < 108; t += 14)
        XD(e, t, 13, t / 114 < n ? KE[3] : qE[3]);
    }),
  eO = () =>
    XE(
      `vesker-hook`,
      4,
      26,
      18,
      (e, t) => {
        (GD(e, -1, 9, 10, 9, { phase: t }), KD(e, 17, 9, 0, t));
      },
      (e, t) => qD(e, 17, 9, 0, t),
      HD,
    ),
  tO = () =>
    R(`vesker-chain`, 4, 32, 9, (e, t) => {
      for (let n = -8 + t * 2; n < 40; n += 8)
        (UD(e, n, 4, 1, 0, BD), WD(e, n + 4, 4, 1, 0, BD, 2));
    }),
  nO = () =>
    R(`vesker-weak`, 4, 12, 12, (e, t) => {
      (UD(e, 6, 6, 1, 0, GE, !0),
        t % 2 == 0 && N(e, 5, 6, GE[4], 3, 1),
        (t === 1 || t === 2) && N(e, 6 + (t === 1 ? -3 : 3), 2 + t, GE[3]));
    }),
  rO = () =>
    R(`vesker-catch`, 5, 28, 28, (e, t) => {
      let n = t / 4;
      (t < 2 && V(e, 14, 14, 8, 8 + t * 3, GE, 5),
        P(e, 14, 14, 3 - n * 2, 3 - n * 2, t < 2 ? GE[4] : GE[3]));
      for (let n = 0; n < 3; n++) {
        let r = 11 + n * 3;
        t >= 1 && t <= 3 && z(e, 11 - t * 2, r, 2, r, n === 1 ? BD[4] : BD[2]);
      }
      if ((_m(e, 14, 14, n, 10, 12, GE, 2, 0.4), t >= 2))
        for (let t = 0; t < 5; t++)
          N(e, 14 + (L(t, 6) - 0.5) * 14, 18 + (L(t, 7) - 0.3) * 6 * n, KE[2]);
    }),
  iO = () =>
    R(`vesker-snap`, 6, 34, 20, (e, t) => {
      if (t === 0) {
        (GD(e, 0, 8, 34, 8, { weak: [6] }), N(e, 16, 7, `#ffffff`, 3, 3));
        return;
      }
      let n = (t - 1) / 4;
      t === 1 && V(e, 17, 8, 8, 9, GE, 8);
      for (let t of [-1, 1]) {
        let r = 17 + t * (2 + n * 9),
          i = 8 - 3 * Math.sin(n * Math.PI) + n * n * 8;
        (N(e, r, i, GE[3], 2, 1), N(e, r + t, i + 1, GE[2], 1, 2));
      }
      let r = cm(n) * 9;
      (GD(e, 0, 8, 13, 8 + r, { sag: r * 0.3 }),
        GD(e, 21, 8 + r, 34, 8, { sag: r * 0.3, phase: 1 }),
        _m(e, 17, 8, am(n + 0.15), 10, 10, GE, 9, 0.5));
    }),
  aO = () =>
    XE(
      `vesker-censer`,
      6,
      32,
      36,
      (e, t) => {
        let n = Math.PI / 2 + Math.sin((t / 6) * JE) * 0.65,
          r = 16 + Math.cos(n) * 22,
          i = 2 + Math.sin(n) * 22;
        (GD(e, 16, 2, r, i - 2, {}),
          N(e, r - 1, i - 2, VD[2], 3, 1),
          N(e, r - 2, i - 1, VD[1], 5, 4),
          N(e, r - 2, i - 1, VD[2], 1, 4),
          N(e, r - 1, i, GE[3], 3, 1),
          N(e, r, i, GE[4]),
          N(e, r - 1, i + 3, VD[0], 3, 1));
      },
      (e, t) => {
        for (let n = 1; n <= 3; n++) {
          let r = Math.PI / 2 + Math.sin(((t - n * 0.6) / 6) * JE) * 0.65;
          JD(
            e,
            16 + Math.cos(r) * 22,
            2 + Math.sin(r) * 22 - n * 2,
            1.5 + n * 0.8,
            (n - 1) / 3,
            t + n,
          );
        }
      },
      HD,
      !1,
    ),
  oO = () =>
    R(`vesker-smoke`, 6, 68, 62, (e, t) => {
      let n = sm(am((t + 1) / 3));
      (e.save(),
        (e.globalAlpha = 0.22),
        P(e, 34, 32, 32 * n, (32 * n) / 1.1, qE[1]),
        e.restore(),
        YD(e, 34, 32, 32, t < 2 ? (t + 1) / 2 : 1, 9));
      for (let r = 0; r < 16; r++) {
        let i = r * 2.4 + L(r, 101) * 0.6,
          a = Math.sqrt((r + 0.5) / 16) * 25 * n;
        JD(
          e,
          34 + Math.cos(i) * a + (t - 2) * (L(r, 103) - 0.5) * 1.5,
          32 + (Math.sin(i) * a) / 1.1 - t * 0.6,
          (6 + L(r, 104) * 3) * (0.5 + n * 0.5),
          t === 5 ? 0.55 : 0,
          r + t * 3,
        );
      }
    }),
  sO = [0, 0, 3, 6, 10, 12],
  cO = () =>
    XE(
      `vesker-recall`,
      6,
      38,
      34,
      (e, t) => {
        let n = 26 - sO[t],
          r = [0, 0.4, 1, 1, 1, 1][t];
        ([
          [3, 30],
          [35, 29],
          [11, 33],
          [28, 33],
        ].forEach(([i, a], o) => {
          r <= 0 ||
            GD(e, i, a, om(i, 19 + (o % 2 ? 2 : -2), r), om(a, n, r), {
              weak: o === 1 && t >= 2 ? [3] : [],
              phase: o,
              sag: t >= 4 ? 0 : 1.5,
            });
        }),
          t >= 2 &&
            (B(e, 19, n, 3.5, 1.4, BD[3]), N(e, 18, n - 1, BD[4], 2, 1)));
      },
      (e, t) => {
        if (
          (B(
            e,
            19,
            30,
            15,
            4.2,
            t % 2 ? GE[3] : GE[2],
            (e) => L(Math.round(e * 10), 3) > 0.25,
          ),
          t === 0)
        )
          for (let t = 0; t < 5; t++)
            z(
              e,
              19,
              30,
              19 + (L(t, 4) - 0.5) * 26,
              30 + (L(t, 5) - 0.5) * 6,
              GE[2],
            );
        let n = 26 - sO[t];
        if (
          (t >= 4 &&
            (V(e, 19, n, 6, t === 4 ? 6 : 4, GE, 2),
            N(e, 18, n - 1, GE[4], 2, 2)),
          t >= 1 && t <= 3)
        )
          for (let n = 0; n < 5; n++)
            N(e, 19 + (L(n, t) - 0.5) * 28, 29 - L(n, t, 2) * 4 * t, KE[1]);
      },
      HD,
      !1,
    );
function lO(e, t, n, r) {
  for (let i = n, a = 0; i > n - r; i -= 3, a++)
    a % 2 == 0 ? UD(e, t, i, 0, -1, BD) : WD(e, t, i, 0, -1, BD, 1);
  r > 6 && (N(e, t - 1, n - r - 1, BD[3], 3, 1), N(e, t + 1, n - r, BD[2]));
}
