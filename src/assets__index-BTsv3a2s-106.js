// assets__index-BTsv3a2s 106 — math
// Lines 51556-51897 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var vne = () =>
    R(`unseen-cuts`, 5, 48, 44, (e, t) => {
      [
        [12, 14, 40],
        [22, 10, 46],
        [32, 14, 40],
      ].forEach(([n, r, i], a) => {
        let o = t === 0 ? 0 : t >= 4 ? 0.25 : am((t - a) / 1.2);
        if (
          (t === 0 || o <= 0
            ? OO(e, r, i, n, 0.4, 30 + a, t)
            : DO(e, r, i, n, 7, o, 30 + a, t),
          t === 4)
        )
          for (let t = 0; t < 3; t++)
            N(
              e,
              r + L(a, t, 3) * (i - r),
              n + (L(a, t, 4) - 0.5) * 8,
              t ? CO : `#ffffff`,
            );
      });
    }),
  yne = () =>
    R(`unseen-hit`, 5, 24, 24, (e, t) => {
      if (t < 3) {
        let n = [10, 6, 3][t];
        for (let r = 0; r < 14; r++) {
          let i = (r / 14) * JE + t * 0.2,
            a = n + L(r, t) * 2;
          (N(e, 12 + Math.cos(i) * a, 12 + Math.sin(i) * a, r % 3 ? CO : SO[4]),
            t > 0 &&
              N(
                e,
                12 + Math.cos(i) * (a + 2),
                12 + Math.sin(i) * (a + 2),
                SO[3],
              ));
        }
        (P(e, 12, 12, t + 0.8, t + 0.8, SO[0]),
          t === 2 && N(e, 12, 11, `#ffffff`));
      } else DO(e, 3, 21, 12, t === 3 ? 6 : 2, 1, 5, t);
      t === 4 && (N(e, 6, 8, CO), N(e, 17, 15, `#ffffff`));
    }),
  bne = () =>
    R(`unseen-hairline`, 4, 64, 7, (e, t) => {
      if ((OO(e, 0, 64, 3, (t + 1) / 4, 40, t), t === 3))
        for (let t = 3; t < 64; t += 11) N(e, t, 3, `#ffffff`);
    }),
  xne = () =>
    R(`unseen-slice`, 6, 98, 18, (e, t) => {
      let n = [0, 0.35, 1, 1, 0.4, 0][t];
      if (
        (t === 0 || t === 5
          ? OO(e, 2, 96, 9, t === 0 ? 1 : 0.3, 41, t)
          : DO(e, 2, 96, 9, 14, n, 41, t),
        t === 2)
      )
        for (let t = 6; t < 96; t += 9) N(e, t, 1 + (t % 3), `#ffffff`);
      if (t === 4)
        for (let t = 0; t < 4; t++)
          N(e, 10 + L(t, 4) * 80, 3 + L(t, 5) * 12, CO);
    }),
  Sne = () =>
    R(`unseen-field`, 8, 116, 104, (e, t) => {
      if (
        ([20, 52, 84].forEach((n, r) => {
          let i = t - 2 - r;
          if (t <= 1 || i < 0)
            OO(e, 2, 114, n, t <= 1 ? (t + 1) / 2 : 1, 50 + r, t);
          else {
            let a = t >= 7 ? 0 : t === 6 ? 0.35 : am((i + 1) / 1.6);
            a > 0
              ? DO(e, 2, 114, n, 12, a, 50 + r, t)
              : OO(e, 2, 114, n, 0.2, 50 + r, t);
          }
        }),
        t >= 3 && t <= 6)
      ) {
        for (let n = 0; n < 12; n++)
          N(e, 74 + n, 68 + +(n % 3 == 0), (n + t) % 3 == 0 ? wO[1] : wO[0]);
        N(e, 76, 69, wO[1], 2, 1);
      }
    }),
  jO = () =>
    R(`unseen-mark`, 4, 46, 42, (e, t) => {
      let n = (t + 1) / 4;
      (e.save(),
        (e.globalAlpha = 0.3),
        P(e, 23, 21, 21, 21 / 1.1, SO[2]),
        e.restore());
      for (let r = 3; r < 40.09090909090909; r += 3) {
        let i = Math.sqrt(Math.max(0, 441 - ((r - 21) * 1.1) ** 2)),
          a = n > 0.7 ? 2 : 1,
          o = Math.round((L(r, 3) - 0.5) * 3 * n);
        for (let s = Math.round(23 - i) + 1; s < 23 + i; s++)
          if (!(L(s, r, t) > 0.4 + n * 0.6))
            for (let t = 0; t < a; t++) N(e, s + o, r + t, t ? SO[0] : SO[1]);
      }
      (B(
        e,
        23,
        21,
        21,
        21 / 1.1,
        n > 0.66 ? CO : SO[3],
        (e) => Math.round(((Math.sin(e) * 21) / 1.1 + 30) / 3) % 2 == 0,
      ),
        B(
          e,
          24,
          21,
          21,
          21 / 1.1,
          SO[3],
          (e) => Math.round(((Math.sin(e) * 21) / 1.1 + 30) / 3) % 2 == 1,
        ));
    }),
  Cne = () =>
    R(`unseen-falling`, 4, 16, 30, (e, t) => {
      let n = 8 + t * 5;
      for (let r = 1; r < 8; r++) {
        let i = n - 3 - r * 2;
        i < 0 ||
          N(
            e,
            8 + (r % 2 ? 0 : t % 2 ? 1 : -1),
            i,
            r < 3 ? `#ffffff` : r < 5 ? CO : SO[3],
          );
      }
      (P(e, 8, n, 3.6, 3.6, SO[4]),
        P(e, 8, n, 2.8, 2.8, SO[0]),
        N(e, 7 + (t % 2), n - 1, `#ffffff`),
        N(e, 9, n + 1 - (t % 2), CO));
    }),
  wne = () =>
    R(`unseen-hole`, 6, 46, 42, (e, t) => {
      if (t === 0) {
        (B(e, 23, 21, 21, 21 / 1.1, `#ffffff`),
          B(e, 23, 21, 18, 18 / 1.1, CO, (e) => Math.round(e * 8) % 2 == 0),
          P(e, 23, 21, 5, 4.5, SO[0]));
        return;
      }
      let n = t <= 2 ? 99 : [99, 99, 99, 6, 3, 1][t];
      for (let r = 2; r < 40.09090909090909; r++) {
        let i = Math.floor((r - 2) / 3);
        if (t >= 3 && L(i, 11) * 14 > n) continue;
        let a =
          Math.sqrt(Math.max(0, 441 - ((r - 21) * 1.1) ** 2)) *
          (t >= 3 ? 0.85 : 1);
        for (let n = Math.round(23 - a); n <= 23 + a; n++) EO(e, n, r, 13, t);
        (N(e, Math.round(23 - a) - 1, r, (r - 2) % 3 ? SO[3] : SO[4]),
          N(e, Math.round(23 + a) + 1, r, (r - 2) % 3 ? SO[3] : SO[4]));
      }
      if (t <= 2)
        for (let n = 0; n < 10; n++) {
          let r = L(n, 14) * JE,
            i = 24 - t * 3;
          N(
            e,
            23 + Math.cos(r) * i,
            21 + (Math.sin(r) * i) / 1.1,
            n % 2 ? CO : SO[4],
          );
        }
    }),
  Tne = () =>
    R(`unseen-copy`, 4, 32, 46, (e, t) => {
      e.drawImage(
        AO(0, (e) => L(e, t, 61) > 0.3, {
          hem: !1,
          shift: (e) => (L(e, t, 62) > 0.8 ? (t % 2 ? 1 : -1) : 0),
          tint: SO[3],
          tintA: 0.2,
        }),
        0,
        0,
      );
    }),
  Ene = () =>
    R(`unseen-split`, 6, 64, 48, (e, t) => {
      if (t <= 2) {
        let n = [0, 2, 5][t];
        if (
          (e.drawImage(
            AO(2, () => !0, { pad: 16, shift: (e) => (e % 2 ? n : -n) }),
            0,
            1,
          ),
          t === 2)
        )
          for (let t = 0; t < 6; t++)
            N(e, 10 + L(t, 2) * 44, 6 + L(t, 3) * 36, CO);
        return;
      }
      [-14, 0, 14].forEach((n, r) => {
        if (t === 5 && r === 1) return;
        let i = am((t - 2) / 2),
          a = Math.round(n * i);
        e.drawImage(
          AO(0, (e) => L(e, r, 63 + t) > 0.35, {
            pad: 16,
            hem: r === 1 && t < 5 && void 0,
            tint: SO[3],
            tintA: r === 1 ? 0.15 : 0.4,
          }),
          a,
          1,
        );
      });
    }),
  MO = () =>
    R(`unseen-pop`, 5, 44, 46, (e, t) => {
      let n = t / 4,
        r = AO(0, (e) => L(e, 0, 61) > 0.4, {
          hem: !1,
          tint: SO[3],
          tintA: 0.35,
          pad: 6,
        });
      for (let i = 0; i < 46; i += 3) {
        let a = i / 3,
          o = Math.round((a % 2 ? 1 : -1) * n * (4 + L(a, 5) * 8));
        (t >= 3 && L(a, 6) < (t - 2) * 0.45) ||
          (t >= 3
            ? OO(e, 8 + o, 36 + o, i + 1, 0.3, a, t)
            : e.drawImage(r, 0, i, 44, 3, o, i, 44, 3));
      }
      t === 1 && V(e, 22, 20, 6, 8, SO, 3);
    }),
  Dne = () =>
    R(`unseen-glimpse`, 4, 32, 46, (e, t) => {
      let n = [
        [3, 7, 11],
        [2, 9],
        [4, 8, 12, 13],
        [3, 10],
      ][t];
      e.drawImage(
        AO(0, (e) => n.includes(e), { lips: !0 }),
        0,
        0,
      );
    }),
  One = () =>
    R(`unseen-reveal`, 6, 36, 48, (e, t) => {
      let n = xg(`unseen`)[0];
      if ((t >= 2 && t <= 3 && kO(e, 2, 1, `fill`, t), t === 4)) {
        let [n, r] = M(36, 48);
        kO(r, 2, 1, `fill`, t);
        for (let t = 0; t < 48; t += 3)
          L(t, 4) > 0.5 && e.drawImage(n, 0, t, 36, 3, 0, t, 36, 3);
      }
      if (
        (t === 0 || t === 5
          ? e.drawImage(
              AO(0, (e) => L(e, 2, 70) > 0.35),
              2,
              1,
            )
          : e.drawImage(n, 2, 1),
        t >= 1 && t <= 3 && kO(e, 2, 1, `outline`, t),
        t === 1)
      )
        for (let t = 0; t < 8; t++)
          N(e, 2 + L(t, 8) * 32, 4 + L(t, 9) * 42, TO);
    }),
  kne = () =>
    R(`unseen-pool`, 4, 100, 90, (e, t) => {
      NO(e, 100, 90, [[50, 45, [40, 37, 34, 32][t]]], 1);
    });
function NO(e, t, n, r, i) {
  let [a, o] = M(t, n);
  ((o.fillStyle = SO[0]), o.fillRect(0, 0, t, n));
  for (let [e, t, n] of r)
    for (let r = Math.floor(t - n / 1.1 - 8); r <= t + n / 1.1 + 8; r++)
      for (let i = Math.floor(e - n - 8); i <= e + n + 8; i++) {
        let a = Math.hypot(i + 0.5 - e, (r + 0.5 - t) * 1.1);
        (a < n ||
          (a < n + 3 && (i + r) % 2 == 0) ||
          (a < n + 6 && i % 2 == 0 && r % 2 == 0)) &&
          o.clearRect(i, r, 1, 1);
      }
  (e.save(), (e.globalAlpha = i), e.drawImage(a, 0, 0), e.restore());
}
function Ane() {
  let [e, t] = Tm(240, 170, `void`, 41);
  [
    { y: 40, draw: () => DO(t, 4, 236, 40, 13, 1, 60, 1) },
    { y: 86, draw: () => DO(t, 4, 236, 86, 13, 0.55, 61, 1) },
    { y: 132, draw: () => OO(t, 4, 236, 132, 1, 62, 1) },
    { y: 124, draw: () => ZE(t, `unseen`, 0, 186, 124, 8) },
    { y: 118, draw: () => QE(t, `storm`, 54, 118, 2) },
    { y: 72, draw: () => QE(t, `pyro`, 120, 72, 3) },
  ]
    .sort((e, t) => e.y - t.y)
    .forEach((e) => e.draw());
  for (let e = 0; e < 8; e++)
    N(t, 10 + L(e, 3) * 220, 31 - L(e, 4) * 4, e % 2 ? CO : `#ffffff`);
  let n = M(240, 170);
  for (let e of [40, 86])
    (z(n[1], 4, e - 6, 236, e - 6, SO[3]),
      z(n[1], 4, e + 6, 236, e + 6, SO[3]));
  return (bm(t, n[0], 0, 0, 3, 0.5), Dm(t, 240, 170, 0.6), e);
}
function jne() {
  let [e, t] = Tm(240, 172, `void`, 43),
    n = [
      [`pyro`, 48, 70],
      [`cryo`, 196, 140],
      [`void`, 112, 128],
    ];
  t.drawImage(jO()[2], 145, 99);
  for (let [e, r, i] of n) QE(t, e, r, i, e === `void` ? 2 : 3, e === `void`);
  (NO(
    t,
    240,
    172,
    n.map(([, e, t]) => [e, t - 6, 38]),
    0.92,
  ),
    t.drawImage(
      AO(0, (e) => [3, 8, 12].includes(e), { lips: !0 }),
      185,
      18,
    ),
    kO(t, 135, 80, `fill`, 2),
    Em(t, xg(`unseen`)[2], 15, 44, 150, 124, 0),
    kO(t, 135, 80, `outline`, 2));
  let r = M(240, 172);
  _m(r[1], 112, 116, 0.4, 14, 14, rm.void, 4);
  for (let e = 0; e < 6; e++)
    N(r[1], 112 + (L(e, 1) - 0.5) * 10, 104 + L(e, 2) * 20, rm.void[4]);
  return (
    bm(t, r[0], 0, 0, 3, 0.9),
    t.drawImage(r[0], 0, 0),
    ym(t, 150, 102, 22, TO, 0.35),
    Dm(t, 240, 172, 0.5),
    e
  );
}
