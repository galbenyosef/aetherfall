// index-BTsv3a2s 59 — math
// Lines 36643-36984 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function mv(e, t) {
  let n = (t, n, r, i) => {
    ((e.fillStyle = i),
      e.beginPath(),
      e.ellipse(t, n, r, r * 0.6, 0, 0, Math.PI * 2),
      e.fill());
  };
  switch (t) {
    case `pool`:
      (n(10, 6, 9, `rgba(46,5,10,0.9)`),
        n(9, 5.5, 6.5, `rgba(74,10,16,0.95)`),
        n(7, 4.5, 2.5, `rgba(138,26,34,0.7)`),
        n(17, 9, 1.5, `rgba(74,10,16,0.9)`),
        n(2, 3, 1, `rgba(74,10,16,0.9)`));
      break;
    case `smear`:
      for (let t = 0; t < 30; t++) {
        let n = 2 + Math.sin(t * 0.4) * 0.8 + (t < 5 ? t * 0.3 : 0);
        for (let r = -n; r <= n; r++)
          H(t, Math.round(r), 3) < 0.8 - Math.abs(r) / (n * 2) &&
            N(
              e,
              t,
              7 + r + Math.sin(t * 0.15) * 2,
              L_(U.blood, 0.25 + H(t, Math.round(r)) * 0.35, t, r),
            );
      }
      break;
    case `spray`:
      for (let e = 0; e < 28; e++) {
        let t = H(e, 1) * Math.PI * 2,
          r = H(e, 2) ** 2 * 9;
        n(
          9 + Math.cos(t) * r,
          9 + Math.sin(t) * r * 0.7,
          0.6 + (1 - r / 9) * 1.4,
          e % 3 ? `rgba(106,16,24,0.9)` : `rgba(74,10,16,0.9)`,
        );
      }
      break;
    case `hands`:
      for (let [t, n] of [
        [3, 2],
        [11, 5],
      ]) {
        N(e, t, n + 3, U.blood[3], 4, 4);
        for (let r = 0; r < 4; r++)
          N(e, t + r, n, U.blood[3], 1, 3 - (r === 3));
        N(e, t - 1, n + 4, U.blood[3], 1, 2);
        for (let r = 0; r < 3; r++)
          N(e, t + r, n + 7, U.blood[2], 1, 3 + r * 2);
      }
  }
}
function hv(e, t) {
  (B_(e, 0, 2, 4, 30, 2, U.mstone), B_(e, 28, 2, 4, 30, 2, U.mstone));
  for (let t = 0; t < 32; t++) {
    let n = Math.abs(t - 16) / 16,
      r = Math.round(2 + n * n * 6);
    for (let n = r; n < r + 4; n++)
      N(e, t, n, L_(U.mstone, 0.6 - (n - r) * 0.1, t, n));
  }
  (N(e, 14, 2, U.rune[2], 4, 2), N(e, 4, 10, `#050807`, 24, 20));
  for (let t = 0; t < 6; t++) N(e, 5 + t * 4, 10, U.iron[3], 2, 16);
  for (let t of [13, 19, 25]) N(e, 4, t, U.iron[2], 24, 1);
  for (let n = 4; n < 28; n++)
    for (let r = 26; r < 34; r++) {
      let i = (r * 2 - t * 3 + n * 7) % 9;
      N(
        e,
        n,
        r,
        i < 2 ? U.water[5] : L_(U.water, 0.45 + (r - 26) * 0.04, n, r),
      );
    }
  for (let n = 3; n < 29; n += 2) N(e, n + (t % 2), 34, U.water[6], 1, 1);
  N(e, 6, 12 + (t % 4), U.moss[3], 1, 6);
}
function gv(e) {
  B_(e, 3, 32, 16, 8, 3, U.mstone);
  for (let t = 12; t < 32; t++) {
    let n = 6 + Math.floor((t - 12) / 3);
    for (let r = 0; r < n; r++)
      N(
        e,
        11 - Math.floor(n / 2) + r,
        t,
        L_(U.mstone, 0.3 + (1 - r / n) * 0.55, r, t),
      );
  }
  (R_(e, 11, 9, 3.4, 3.6, U.mstone),
    V_(
      e,
      [
        [7, 8],
        [15, 8],
        [11, 2],
      ],
      U.mstone[2],
    ),
    H_(e, 14, 14, 18, 6, U.mstone[3], 2),
    R_(e, 18.5, 4.5, 2.2, 2.2, U.mstone, -0.1),
    N(e, 18, 4, `#2a3a3a`));
  for (let t = 0; t < 18; t++)
    N(
      e,
      5 + H(t, 1) * 12,
      14 + H(t, 2) * 24,
      U.moss[1 + (t % 3)],
      1,
      1 + Math.floor(H(t, 3) * 3),
    );
  N(e, 8, 6, U.moss[2], 5, 1);
}
function _v(e, t) {
  (z_(e, 2, 6, 10, 32, U.mstone),
    B_(e, 0, 2, 14, 5, 2, U.mstone),
    B_(e, 0, 37, 14, 5, 2, U.mstone));
  for (let n = 0; n < 5; n++) {
    let r = 34 - n * 6,
      i = (n + t) % 5 < 2;
    (N(e, 5, r, i ? U.rune[2] : U.rune[0], 4, 1),
      N(e, 6, r - 2, i ? U.rune[3] : U.rune[1], 2, 3));
  }
  H_(e, 9, 10, 7, 18, U.mstone[0]);
  for (let t = 0; t < 8; t++)
    N(e, 1 + H(t, 5) * 12, 38 + H(t, 6) * 3, U.moss[2 + (t % 2)]);
}
function vv(e, t) {
  (z_(e, 3, 0, 6, 12, U.copper),
    N(e, 2, 3, U.copper[2], 8, 2),
    B_(e, 2, 10, 8, 4, 1, U.copper),
    N(e, 5, 8, U.verdigris[2], 3, 2));
  let n = (t % 8) * 2;
  (n < 12 && N(e, 6, 14 + n, U.water[5], 1, 2),
    (e.fillStyle = `rgba(47,156,120,0.55)`),
    e.beginPath(),
    e.ellipse(6.5, 27, 6, 1.8, 0, 0, Math.PI * 2),
    e.fill(),
    t % 8 >= 6 &&
      ((e.strokeStyle = `rgba(159,232,200,0.9)`),
      e.beginPath(),
      e.ellipse(6.5, 27, (t % 8) - 4, 0.8, 0, 0, Math.PI * 2),
      e.stroke()));
}
function yv(e, t) {
  [
    [4, 9, 3],
    [9, 6, 4],
    [14, 9, 2.6],
    [7, 11, 2],
  ].forEach(([n, r, i], a) => {
    N(e, n, r, `#c8e0d0`, 1, 12 - r);
    let o = (t + a * 2) % 8 < 4;
    R_(
      e,
      n,
      r - 1,
      i,
      i * 0.6,
      o
        ? [`#155040`, `#2f9c78`, `#5cc8a0`, `#9fe8c8`, `#e0fff4`]
        : [`#0f3a2c`, `#155040`, `#1f6e55`, `#2f9c78`, `#5cc8a0`],
    );
  });
}
function bv(e, t) {
  ((e.fillStyle = `rgba(92,207,79,0.35)`),
    e.beginPath(),
    e.ellipse(10, 11, 9, 2.4, 0, 0, Math.PI * 2),
    e.fill(),
    [
      [5, 8, 3.2],
      [11, 7, 3.6],
      [15, 9, 2.8],
      [8, 10, 2.6],
    ].forEach(([n, r, i], a) => {
      for (let t = Math.floor(r - i * 1.1); t <= Math.ceil(r + i * 1.1); t++)
        for (let a = Math.floor(n - i); a <= Math.ceil(n + i); a++) {
          let o = (a + 0.5 - n) / i,
            s = (t + 0.5 - r) / (i * 1.1),
            c = o * o + s * s;
          c > 1 ||
            ((e.fillStyle =
              c > 0.7
                ? `rgba(160,230,140,0.95)`
                : `rgba(120,210,110,${0.35 + s * 0.2})`),
            e.fillRect(a, t, 1, 1));
        }
      let o = (t + a * 3) % 8;
      (N(e, n - 1 + (o < 4 ? 0 : 1), r + (o % 4 == 0 ? 0 : 1), `#1c5a22`, 2, 2),
        N(e, n - 1, r - i * 0.8, `#f0fff0`));
    }));
}
function xv(e) {
  (B_(e, 1, 9, 14, 11, 4, U.wood, -0.05), B_(e, 7, 1, 12, 10, 4, U.wood));
  for (let [t, n, r] of [
    [1, 15, 14],
    [7, 7, 12],
  ])
    N(e, t, n, U.wood[1], r, 1);
  (H_(e, 2, 14, 14, 19, U.wood[1]),
    N(e, 1, 17, U.moss[2], 6, 3),
    N(e, 2, 18, U.moss[1], 12, 2),
    H_(e, 12, 1, 13, 11, `#8a7a52`));
}
function Sv(e, t) {
  let n = [0, 1, 1, 0, 0, -1, -1, 0][t];
  for (let t = 0; t < 12; t++)
    N(
      e,
      4 + Math.round((n * t) / 11) - (t % 2),
      t * 2 + 1,
      U.iron[t % 2 ? 3 : 4],
      t % 2 ? 1 : 3,
      2,
    );
  (H_(e, 4 + n, 25, 6 + n, 28, U.iron[4]), N(e, 5 + n, 28, U.iron[5], 2, 1));
}
function Cv(e, t) {
  ((e.fillStyle = `rgba(10,20,16,0.9)`), e.fillRect(2, 2, 12, 12));
  for (let n = 0; n < 10; n++) {
    let r = (n / 10) * Math.PI * 2 + t * 0.6,
      i = 5 - (n % 3);
    N(
      e,
      8 + Math.cos(r) * i,
      8 + Math.sin(r) * i,
      n % 2 ? U.water[4] : U.water[3],
    );
  }
  for (let t = 0; t < 4; t++) N(e, 3 + t * 3, 2, U.iron[3], 1, 12);
  (N(e, 2, 2, U.iron[4], 12, 1), N(e, 2, 13, U.iron[1], 12, 1));
}
function wv(e, t) {
  (B_(e, 4, 20, 10, 6, 2, U.mstone),
    z_(e, 6, 6, 6, 15, U.iron),
    N(e, 12, 12, U.iron[3], 4, 2),
    H_(e, 8, 6, 2, 2 + (t % 8 < 4 ? 0 : 2), U.iron[4], 2),
    N(e, 13, 14, U.water[4], 1, 1 + (t % 3)));
}
function Tv(e, t, n) {
  B_(e, 1, 11, 26, 10, 1, U.stone, -0.05);
  for (let t = 0; t < 4; t++)
    (N(e, 3 + t * 6, 14, U.stone[1], 5, 5),
      N(e, 4 + t * 6, 15, U.stone[3], 3, 3));
  if ((N(e, 0, 20, U.stone[1], 28, 2), n)) {
    (N(e, 2, 8, `#0a0706`, 24, 4),
      N(e, 2, 8, `#1a120d`, 24, 1),
      B_(e, 9, 1, 22, 8, 5, U.stone, 0.05));
    let n = +(t % 8 == 3);
    (N(e, 4, 10 - n, `#8a857a`, 4, 2),
      N(e, 4, 12 - n, `#8a857a`, 1, 2),
      N(e, 6, 12 - n, `#8a857a`, 1, 2),
      N(e, 7, 12 - n, `#6a655a`, 1, 1),
      N(e, 5, 9 - n, `#5a554c`, 3, 1));
  } else {
    B_(e, 0, 3, 28, 9, 7, U.stone, 0.05);
    for (let t = 5; t < 23; t++) {
      let n = t < 9 ? 2.2 : 2.6 - (t - 9) * 0.05;
      for (let r = Math.round(7 - n); r <= Math.round(7 + n); r++)
        N(e, t, r, L_(U.stone, 0.62 + (r < 7 ? 0.2 : -0.05), t, r));
    }
    (R_(e, 6, 7, 2.4, 2.2, U.stone, 0.1),
      N(e, 5, 6, U.stone[1], 3, 2),
      N(e, 11, 6, U.stone[5], 3, 2),
      N(e, 22, 6, U.stone[2], 2, 3),
      N(e, 25, 1, `#efe6cf`, 2, 4),
      W_(e, 26, 1, 1, t, K_),
      N(e, 24, 5, `#d9cfb8`, 4, 1));
  }
  for (let t = 0; t < 7; t++)
    N(e, 2 + H(t, 1) * 24, 16 + H(t, 2) * 5, U.moss[1 + (t % 2)]);
}
function Ev(e) {
  (N(e, 0, 0, U.stone[2], 28, 24),
    N(e, 0, 0, U.stone[4], 28, 1),
    N(e, 2, 2, `#0a0706`, 24, 20));
  for (let t = 0; t < 3; t++) {
    let n = 4 + t * 6;
    for (let t = 0; t < 2; t++)
      (N(e, 3, n + 3 + t, U.bone[2 + t], 22, 1),
        N(e, 2, n + 3, U.bone[4], 2, 2),
        N(e, 24, n + 3, U.bone[3], 2, 2));
    for (let r = 0; r < 5; r++) {
      let i = 5.5 + r * 4.4 - (t % 2) * 1.5;
      (R_(e, i, n + 0.5, 2.2, 2.1, U.bone, 0.05),
        N(e, Math.round(i - 1.5), n + 1, `#1a120c`, 1, 1),
        N(e, Math.round(i + 0.5), n + 1, `#1a120c`, 1, 1),
        N(e, Math.round(i - 0.5), n + 2, U.bone[0], 1, 1));
    }
  }
  N(e, 0, 23, U.stone[0], 28, 1);
}
function Dv(e, t) {
  N(e, 0, 0, U.wood[3], 16, 2);
  for (let n = 2; n < 30; n++) {
    let r = Math.round(Math.sin(n * 0.35 + t * 0.8) * 0.8),
      i = n > 22 ? Math.floor(H(n, 3) * 5) : 0;
    for (let t = 2 + i; t < 14 - (n > 24 ? Math.floor(H(n, 5) * 4) : 0); t++)
      N(e, t + r, n, L_(U.cloth, 0.35 + (t < 5 ? 0.2 : 0), t, n));
  }
  (N(e, 7, 5, `#7a1d10`, 2, 13), N(e, 4, 9, `#7a1d10`, 8, 2));
  for (let t = 0; t < 4; t++) N(e, 4 + t * 2, 20, `#1a120e`, 1, 2);
}
function Ov(e) {
  (B_(e, 1, 18, 20, 6, 2, U.wood), N(e, 1, 8, U.wood[3], 20, 2));
  for (let t = 0; t < 5; t++) {
    let n = 3 + t * 4;
    (N(e, n, 2, U.wood[2], 1, 18),
      N(e, n - 1, 0, U.rust[3], 3, 3),
      N(e, n + 1, 2, U.rust[2], 1, 2));
  }
}
function kv(e, t) {
  (V_(
    e,
    [
      [2, 15],
      [11, 15],
      [10, 4],
      [6, 1],
      [3, 4],
    ],
    U.stone[2],
  ),
    V_(
      e,
      [
        [2, 15],
        [5, 15],
        [4, 4],
        [6, 1],
        [3, 4],
      ],
      U.stone[3],
    ));
  for (let t = 0; t < 3; t++) N(e, 4, 6 + t * 2, U.stone[1], 5, 1);
  (N(e, 1, 15, U.earth[2], 12, 1),
    t % 2 == 0 && (N(e, 9, 13, `#3a5a2a`, 1, 3), N(e, 8, 12, `#6a5a8a`, 2, 1)),
    N(e, 3, 12, U.moss[2], 3, 2));
}
