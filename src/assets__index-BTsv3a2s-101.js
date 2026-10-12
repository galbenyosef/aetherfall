// assets__index-BTsv3a2s 101 — math
// Lines 50305-50587 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function ED(e, t, n, r) {
  (fm(
    e,
    [
      [t - 2.5, n],
      [t + 2.5, n],
      [t + (r % 2 ? 1 : -1), n + 6],
    ],
    `#bff0ff`,
  ),
    P(e, t, n - 0.5, 2.6, 2.8, `#e6fdff`),
    N(e, t - 1, n - 1, `#ffffff`, 2, 2),
    N(e, t - 1, n, nD[2]),
    N(e, t + 1, n, nD[2]));
}
var DD = () =>
    R(`maelis-freed`, 6, 26, 42, (e, t) => {
      if (t === 0) {
        (fm(
          e,
          [
            [7, 31],
            [11, 26],
            [17, 27],
            [20, 32],
            [18, 39],
            [11, 40],
            [7, 36],
          ],
          nD[3],
        ),
          P(e, 13, 33.5, 3.2, 4, `#dcecf8`),
          N(e, 12, 34, nD[0], 2, 3),
          z(e, 7, 29, 14, 33, `#ffffff`),
          z(e, 14, 33, 19, 37, `#ffffff`),
          z(e, 14, 33, 12, 40, `#ffffff`));
        return;
      }
      let n = (t - 1) / 4;
      for (let r = 0; r < 6; r++) {
        let i = 13 + (L(r, 71) - 0.5) * (6 + n * 12),
          a = 33 + (L(r, 72) - 0.5) * 6 + n * n * 10;
        a > 41 ||
          (n > 0.6 && r % 2) ||
          mm(e, i, a, L(r, 73) * JE + t, 4, 2, nD);
      }
      (t === 1 && V(e, 13, 33, 8, 9, WE, 7),
        t === 2 &&
          B(e, 13, 31, 9, 3.5, `#ffffff`, (e) => Math.round(e * 6) % 2 == 0),
        t === 3 &&
          B(e, 13, 31, 12, 4.5, WE[2], (e) => Math.round(e * 6) % 2 == 0));
      let r = 30 - sm(n) * 24;
      for (let n = 1; n <= 3; n++)
        t >= 2 &&
          N(
            e,
            13 + ((n + t) % 2 ? 1 : -1),
            r + 6 + n * 3,
            n === 1 ? `#ffffff` : WE[3],
          );
      t < 5
        ? ED(e, 13, r, t)
        : (N(e, 11, r, `#ffffff`, 5, 1),
          N(e, 13, r - 2, `#ffffff`, 1, 5),
          N(e, 13, r, WE[3]));
    }),
  OD = () =>
    R(`maelis-faceburst`, 5, 30, 30, (e, t) => {
      let n = t / 4;
      if (t === 0) {
        (P(e, 15, 15, 5, 5, nD[3]),
          P(e, 15, 15, 3, 3.5, `#dcecf8`),
          N(e, 14, 15, nD[0], 2, 3),
          V(e, 15, 15, 10, 10, WE, 9));
        return;
      }
      let r = 4 + sm(n) * 10;
      pm(e, 15, 15, r - 2, r, 1, (e, r) =>
        L(Math.round(r * 20), t, 3) < n * 0.6 ? null : e > 0.5 ? WE[3] : nD[2],
      );
      for (let i = 0; i < 8; i++) {
        let a = (i / 8) * JE + 0.2;
        (n > 0.7 && i % 2) ||
          mm(
            e,
            15 + Math.cos(a) * r * 0.8,
            15 + Math.sin(a) * r * 0.8,
            a,
            6 - t,
            3,
            nD,
          );
      }
      t <= 2 && dD(e, 15, 15, `#ffffff`);
    }),
  kD = () =>
    R(`maelis-stave`, 6, 100, 34, (e, t) =>
      hD(e, 2, 96, 12, {
        draw: t === 0 ? 0.45 : 1,
        notes: [0, 0, 2, 4, 6, 8][t],
        total: 8,
        hollow: [1, 5],
        full: t === 5,
        f: t,
      }),
    ),
  AD = () =>
    XE(
      `maelis-hollownote`,
      4,
      18,
      20,
      (e, t) => {
        (cD(e, 8, 14, aD, t % 2), t % 2 == 0 && N(e, 7, 14, GE[4], 2, 1));
      },
      (e, t) => {
        for (let n = 0; n < 3; n++)
          N(
            e,
            4 + n * 4 + (t % 2),
            8 - ((t + n * 2) % 6),
            n === 1 ? GE[4] : GE[3],
          );
      },
      `#12050a`,
      !0,
    ),
  jD = () =>
    R(`maelis-snap`, 5, 52, 34, (e, t) => {
      let n = [0, 0.35, 0.7, 1, 1][t];
      if (
        (hD(e, 0, 52, 12, {
          notes: t === 0 ? 8 : 0,
          total: 8,
          hollow: [3, 4],
          snap: t ? { x: 26, k: n } : void 0,
          f: t,
          seed: 9,
        }),
        t === 0 && V(e, 26, 15, 8, 10, aD, 3),
        t >= 1)
      ) {
        _m(e, 26, 15, am(n), 12, 14, aD, 4, 0.6);
        for (let r = 0; r < 5; r++) {
          let i = 26 + (L(r, 81) - 0.5) * 16,
            a = 16 + n * n * 14 + L(r, 82) * 4;
          a < 34 && mm(e, i, a, L(r, 83) * JE + t, 4, 2, nD);
        }
      }
    }),
  MD = () =>
    R(`maelis-thread`, 4, 32, 10, (e, t) => {
      for (let n = 0; n < 32; n++) {
        let r = 6 + Math.round(Math.sin(((n + t * 8) / 32) * JE * 2) * 1);
        N(e, n, r, (n + t * 2) % 8 < 2 ? `#ffffff` : n % 2 ? rD : WE[2]);
      }
      oD(e, (t * 8 + 6) % 32, 6, nD[3], rD, `#ffffff`);
    }),
  ND = [
    [14, 1],
    [24, 7],
    [26, 22],
    [21, 35],
    [7, 35],
    [2, 22],
    [4, 7],
  ],
  PD = () =>
    R(`maelis-seal`, 4, 28, 38, (e, t) => {
      for (let t = 0; t < 38; t++)
        for (let n = 0; n < 28; n++)
          tD(ND, n + 0.5, t + 0.5) &&
            (n + t) % 6 == 0 &&
            L(n, t, 3) > 0.55 &&
            N(e, n, t, nD[3]);
      for (let t = 0; t < ND.length; t++) {
        let [n, r] = ND[t],
          [i, a] = ND[(t + 1) % ND.length];
        z(e, n, r, i, a, t % 2 ? rD : WE[3]);
      }
      for (let [t, n] of [
        [
          [4, 7],
          [14, 13],
        ],
        [
          [24, 7],
          [14, 13],
        ],
        [
          [14, 1],
          [14, 13],
        ],
        [
          [2, 22],
          [14, 27],
        ],
        [
          [26, 22],
          [14, 27],
        ],
      ])
        z(e, t[0], t[1], n[0], n[1], WE[1]);
      let n = 3 + t * 9;
      for (let t = 0; t < 28; t++)
        tD(ND, t + 0.5, n - t * 0.3 + 0.5) &&
          N(e, t, n - t * 0.3, t % 3 ? WE[3] : `#ffffff`);
      oD(e, 13, 6, `#ffffff`, rD);
    });
function FD(e, t, n, r) {
  for (let i = 0; i < 9; i++) {
    let a = Math.round(L(i, r) * (t - 8)),
      o = Math.round(L(i, r, 1) * (n - 8));
    (e.save(), (e.globalAlpha = 0.22), uD(e, a, o), e.restore());
  }
}
function ID() {
  let [e, t] = Tm(240, 176, `ice`, 13);
  FD(t, 240, 176, 14);
  let n = Rg(`chorister`),
    r = PD()[1];
  [
    [58, 160],
    [182, 160],
  ].forEach(([e, i], a) => {
    (Em(t, (a ? n.flipped : n.frames)[2], n.ax, n.ay, e, i, 6),
      t.drawImage(r, e - 14, i - 36));
  });
  let i = ZE(t, `maelis`, 2, 120, 134),
    [a] = mD(48, 192, 44, 2, 10, 4),
    [o, s] = mD(48, 192, 44, 7, 10, 4),
    c = M(240, 176);
  hD(c[1], 48, 192, 44, {
    notes: 9,
    total: 10,
    hollow: [2, 7],
    snap: { x: a, k: 1 },
    f: 1,
    seed: 4,
  });
  let l = (e, t, n, r) => {
    let i = Math.round(Math.hypot(n - e, r - t));
    for (let a = 0; a <= i; a++) {
      let o = a / i;
      N(
        c[1],
        om(e, n, o) + Math.sin(o * 18) * 1,
        om(t, r, o),
        a % 7 == 0 ? `#ffffff` : a % 2 ? rD : WE[2],
      );
    }
  };
  (l(64, 58, 58, 124), l(176, 58, 182, 124));
  let [u, d] = i(15, 14);
  for (let e = d - 4; e > 57; e -= 2)
    N(c[1], u + (e % 4 ? 0 : 1), e, e % 6 ? WE[2] : rD);
  for (let e = 0; e < 5; e++)
    mm(
      c[1],
      a + (L(e, 5) - 0.5) * 14,
      64 + L(e, 6) * 18,
      L(e, 7) * JE,
      4,
      2,
      nD,
    );
  (bm(t, c[0], 0, 0, 3, 0.7),
    t.drawImage(c[0], 0, 0),
    ym(t, u, d, 10, GE[3], 0.8),
    QE(t, `storm`, 220, 104, 3, !0));
  let f = M(240, 176);
  return (
    z(f[1], 208, 88, o + 2, s + 1, rm.storm[3]),
    z(f[1], 209, 88, o + 3, s + 1, rm.storm[4]),
    V(f[1], o, s, 7, 8, aD, 2),
    bm(t, f[0], 0, 0, 3, 0.8),
    t.drawImage(f[0], 0, 0),
    ym(t, o, s, 9, GE[3], 0.6),
    QE(t, `cryo`, 22, 112, 2),
    Dm(t, 240, 176, 0.3),
    e
  );
}
