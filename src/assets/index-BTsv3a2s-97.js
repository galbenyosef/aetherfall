// index-BTsv3a2s 97 — math
// Lines 49323-49548 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function PE(e, t, n, r, i, a = 0) {
  pm(e, t, n, Math.max(0, r - 12), r, 1.1, (e, t) => {
    let n = Math.round(t * 40) + Math.round(e * 12);
    return e > 0.86
      ? a > 0.6 && n % 2
        ? null
        : fE[3]
      : e > 0.74
        ? a > 0.4 && n % 2
          ? null
          : Uw[3]
        : !(e > 0.5
              ? (n + i) % 2 == 0
              : e > 0.25
                ? (n + i) % 3 == 0
                : (n + i) % 5 == 0) || a > 0.5
          ? null
          : e > 0.5
            ? fE[2]
            : fE[1];
  });
  for (let i = 0; i < 4; i++) {
    let a = Math.PI / 4 + (i * Math.PI) / 2,
      o = t + Math.cos(a) * (r - 1.5),
      s = n + (Math.sin(a) * (r - 1.5)) / 1.1;
    N(e, o - 1, s - 1, fE[4], 2, 3);
  }
}
var FE = () =>
  R(`k1-hessa-pulse`, 6, 116, 106, (e, t) => {
    t === 0
      ? (V(e, 58, 53, 10, 10, fE, 4),
        P(e, 58, 53, 3, 3, fE[4]),
        N(e, 57.5, 52.5, Uw[3]))
      : PE(e, 58, 53, 6 + sm(t / 5) * 48, t, t === 5 ? 0.5 : 0);
  });
function IE(e, t, n, r, i, a, o = 6) {
  let s = Math.hypot(r - t, i - n),
    c = Math.ceil(s);
  for (let s = 0; s <= c; s++) {
    let l = s / c,
      u = om(t, r, l),
      d =
        om(n, i, l) +
        Math.sin(l * Math.PI) * o +
        Math.sin(s * 0.5 + a * 1.4) * 0.6;
    (N(e, u, d, Uw[1], 1, 2),
      N(e, u, d, s % 9 == 0 ? `#ffffff` : Uw[3]),
      (s - a * 4 + 400) % 16 < 2 && N(e, u - 0.5, d - 0.5, fE[4], 2, 2));
  }
}
var LE = () =>
    R(`k1-hessa-thread`, 4, 32, 12, (e, t) => {
      for (let n = 0; n < 32; n++) {
        let r = 6 + Math.sin(((n + t * 8) / 32) * Ww) * 1.2;
        (N(e, n, r - 1, Uw[1], 1, 3),
          N(e, n, r, n % 9 == 0 ? `#ffffff` : Uw[3]),
          (n - t * 4 + 64) % 16 < 2 && N(e, n, r - 1, fE[4], 1, 2));
      }
    }),
  RE = () =>
    R(`k1-hessa-lantern`, 6, 24, 30, (e, t) => {
      if (
        (N(e, 11, 4, `#5a3a22`, 1, 3), N(e, 11, 4, `#5a3a22`, 4, 1), t === 0)
      ) {
        vE(e, 10, 8, 1);
        for (let t = 0; t < 6; t++)
          N(e, 11.5 + Math.cos(t) * 6, 11 + Math.sin(t) * 6, fE[2]);
      } else if (t === 1)
        (vE(e, 10, 8, 1),
          z(e, 0, 9, 9, 11, Uw[3]),
          z(e, 23, 14, 14, 11, Uw[3]),
          z(e, 12, 29, 12, 15, Uw[3]),
          N(e, 11, 11, `#ffffff`, 2, 1));
      else if (t === 2) (vE(e, 10, 8, 1, `struck`), V(e, 12, 11, 6, 6, fE, 1));
      else if (t === 3)
        (vE(e, 10, 8, 0.7, `cracked`), N(e, 14, 10, fE[3]), N(e, 9, 13, fE[3]));
      else if ((vE(e, 10, 8, 0, `broken`), t === 4)) {
        for (let t = 0; t < 6; t++) {
          let n = (t / 6) * Ww + 0.3;
          N(
            e,
            11.5 + Math.cos(n) * 6,
            11 + Math.sin(n) * 5,
            t % 2 ? dE[4] : fE[2],
          );
        }
        (N(e, 11, 19, Uw[3], 2, 3), N(e, 11, 20, `#ffffff`));
      } else
        (N(e, 10, 26, Uw[2], 4, 1),
          N(e, 11, 25, Uw[3], 2, 2),
          N(e, 11, 25, `#ffffff`),
          B(e, 11.5, 26, 5, 2, Uw[3], (e) => Math.round(e * 5) % 2 == 0));
    }),
  zE = () =>
    R(`k1-hessa-wake`, 6, 100, 92, (e, t) => {
      let n = 6 + sm(t / 5) * 40;
      if (t === 0) (V(e, 50, 48, 10, 12, Uw, 3), P(e, 50, 48, 2, 2, `#ffffff`));
      else {
        pm(e, 50, 48, Math.max(0, n - 5), n, 1.1, (e, n) => {
          let r = Math.round(n * 30);
          return e > 0.7
            ? Uw[3]
            : t > 3 && (r + Math.round(e * 5)) % 2
              ? null
              : e > 0.4
                ? Uw[2]
                : Uw[1];
        });
        let r = 14 + t * 2;
        B(e, 50, 48, r, r / 1.1, mE[1], (e) => Math.round(e * 5) % 2 == 0);
        for (let n = 0; n < 4; n++) {
          let i = Math.PI / 4 + (n * Math.PI) / 2;
          gE(e, 50 + Math.cos(i) * r, 48 + (Math.sin(i) * r) / 1.1 + t, !1);
        }
        for (let t = 0; t < 10; t++) {
          let r = (t / 10) * Ww;
          N(
            e,
            50 + Math.cos(r) * n,
            48 + (Math.sin(r) * n) / 1.1 - 3 - (t % 3),
            dE[3],
          );
        }
        N(e, 49, 47, Uw[3], 2, 2);
      }
    });
function BE() {
  let [e, t] = Tm(240, 172, `stone`, 41),
    n = 66.5,
    r = M(240, 172);
  (PE(r[1], 112, 96, 56, 3, 0.4),
    PE(r[1], 112, 96, 28, 2),
    bm(t, r[0], 0, 0, 4, 0.6),
    t.drawImage(r[0], 0, 0));
  let i = Tg(`faithful`),
    a = Jg(`pit`),
    o = [],
    s = [
      [36, 140, 2],
      [200, 150, 3],
      [196, 64, 3],
      [40, 70, 2],
    ];
  (o.push([96, () => Jw(t, `hessa`, 2, 112, 96, 8)]),
    s.forEach(([e, n, r]) =>
      o.push([n, () => Em(t, i.frames[r][0], 10, 26, e, n, 5)]),
    ),
    o.push([118, () => Em(t, a.frames[0][1], 10, 26, 70, 118, 5)]),
    o.push([40, () => Em(t, a.frames[0][0], 10, 26, 150, 40, 5)]),
    o.push([126, () => qw(t, `storm`, 166, 126, 3, 6)]),
    o.sort((e, t) => e[0] - t[0]).forEach(([, e]) => e()));
  let c = M(240, 172);
  return (
    s.forEach(([e, t, r], i) =>
      IE(c[1], r === 3 ? e + 3 : e - 4, t - 6, 123, n, i, r === 3 ? -6 : 8),
    ),
    z(c[1], 160, 108, 129, 70.5, rm.storm[3]),
    bm(t, c[0], 0, 0, 3, 0.8),
    t.drawImage(c[0], 0, 0),
    ym(t, 123, n, 24, fE[3], 0.8),
    ym(t, 123, n, 8, Uw[3], 0.6),
    Dm(t, 240, 172, 0.5),
    e
  );
}
function VE() {
  let [e, t] = Tm(240, 164, `marsh`, 43),
    n = kE()[1];
  (t.drawImage(n, 22, 118), t.drawImage(n, 60, 24));
  let r = [
    [118, 62],
    [184, 68],
    [180, 120],
    [116, 116],
  ];
  (r.forEach(([e, n], r) => r < 2 && _E(t, e, n, 19, dE, 0.75 + r * 0.2)),
    Jw(t, `hessa`, 2, 46, 92, 8));
  let i = OE();
  return (
    t.drawImage(i[3], r[2][0] - 24, r[2][1] - 30),
    t.drawImage(i[2], r[3][0] - 24, r[3][1] - 30),
    qw(t, `void`, 150, 96, 2, 2),
    r.forEach(([e, n], r) => {
      r >= 2 ||
        (Sm(t, e, n + 1, 3, 1.2, `#000000`, 0.45),
        gE(t, e, n - 14 - r * 10, !1),
        N(t, e, n - 20 - r * 10, mE[2], 1, 3));
    }),
    ym(t, r[3][0], r[3][1] - 4, 12, fE[2], 0.4),
    Dm(t, 240, 164, 0.45),
    e
  );
}
function HE() {
  let [e, t] = Tm(240, 164, `stone`, 45),
    n = M(240, 164);
  (AE(n[1], 102, 82, 0.05, jE, 130, 2),
    bm(t, n[0], 0, 0, 5, 0.6),
    t.save(),
    (t.globalAlpha = 0.85),
    t.drawImage(n[0], 0, 0),
    t.restore(),
    dm(
      t,
      102,
      82,
      102 + Math.cos(1.1) * 110,
      82 + (Math.sin(1.1) * 110) / 1.1,
      mE[2],
      3,
      1,
    ));
  let r = Jg(`pit`);
  return (
    Jw(t, `hessa`, 2, 96, 84, 8),
    qw(t, `pyro`, 196, 108, 3),
    t.drawImage(NE()[1], 189, 64),
    Em(t, r.frames[2][2], 10, 26, 150, 150, 5),
    Em(t, r.frames[3][0], 10, 26, 226, 58, 5),
    qw(t, `cryo`, 40, 120, 2),
    ym(t, 107, 58, 16, fE[3], 0.7),
    Dm(t, 240, 164, 0.5),
    e
  );
}
