// index-BTsv3a2s 58 — hollow
// Lines 36336-36642 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function rv(e, t, n = !0) {
  (H_(e, 4, 22, 8, 12, U.iron[2]),
    H_(e, 14, 22, 10, 12, U.iron[3]),
    H_(e, 9, 22, 9, 12, U.iron[1]),
    V_(
      e,
      [
        [2, 10],
        [16, 10],
        [13, 15],
        [5, 15],
      ],
      U.iron[2],
    ),
    N(e, 2, 10, U.iron[4], 15, 1));
  for (let r = 0; r < 6; r++)
    N(
      e,
      4 + r * 2,
      9,
      (r + t) % 3 ? (n ? U.hollow[3] : `#c2361f`) : n ? `#ffffff` : `#ffd166`,
      2,
      1,
    );
  (W_(e, 9, 9, 4, t, n ? G_ : K_),
    W_(e, 6, 9, 2, t + 3, n ? G_ : K_),
    W_(e, 12, 9, 2, t + 5, n ? G_ : K_),
    N(e, 9 + ((t * 3) % 5) - 2, 1 - (t % 2), n ? U.hollow[5] : `#ffd166`));
}
function iv(e, t, n) {
  let r = n
      ? [`#141014`, `#221c22`, `#342a32`, `#463a44`]
      : [`#8a7f6a`, `#b3a78f`, `#d9cfb8`, `#efe6cf`],
    i = n ? q_ : K_;
  ((e.fillStyle = n ? `#1a1418` : `#c8bea8`),
    e.beginPath(),
    e.ellipse(8, 13, 7.5, 2.2, 0, 0, Math.PI * 2),
    e.fill());
  for (let [n, a, o] of [
    [3, 7, 5],
    [7, 4, 9],
    [11, 6, 6],
    [5, 10, 3],
    [13, 10, 3],
  ])
    (z_(e, n - 1, a, 3, o + 13 - a - o + 1, r),
      N(e, n - 1, a + 2, r[3], 1, 2),
      W_(e, n, a, 1, t + n, i));
}
function av(e, t, n) {
  let r = (t, n, r, i) => {
    ((e.fillStyle = `rgba(74,10,16,0.85)`),
      e.beginPath(),
      e.ellipse(t, n, r, i, 0, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `rgba(138,26,34,0.6)`),
      e.beginPath(),
      e.ellipse(t - r * 0.3, n - i * 0.3, r * 0.35, i * 0.3, 0, 0, Math.PI * 2),
      e.fill());
  };
  switch (t) {
    case `arm`:
      (r(12, 7, 6, 2.5),
        H_(e, 2, 4, 11, 6, n.shirt[1], 3),
        H_(e, 2, 4, 11, 4, n.shirt[2]),
        H_(e, 13, 6, 18, 5, n.skin[2], 2),
        N(e, 18, 3, n.skin[3], 3, 3),
        N(e, 11, 5, U.blood[4], 2, 3),
        N(e, 12, 6, U.bone[4]));
      break;
    case `leg`:
      (r(4, 6, 4, 2.2),
        H_(e, 4, 4, 14, 5, n.shirt[0], 3),
        H_(e, 4, 4, 14, 4, n.shirt[1]),
        N(e, 14, 3, `#1a120c`, 5, 4),
        N(e, 16, 2, `#2e2018`, 3, 1),
        N(e, 3, 4, U.blood[4], 2, 3),
        N(e, 3, 5, U.bone[4]));
      break;
    case `hand`:
      (r(4, 5, 3.5, 1.8), N(e, 3, 3, n.skin[3], 4, 3));
      for (let t = 0; t < 4; t++)
        N(e, 7, 2 + t, n.skin[t % 2 ? 2 : 3], 2 + +(t === 1), 1);
      N(e, 2, 4, U.blood[4], 1, 2);
      break;
    case `torso`:
      (r(10, 9, 9, 2.8),
        R_(e, 10, 6, 8, 4.5, [
          `#2a2018`,
          `#3e3024`,
          `#564430`,
          `#6e583e`,
          `#86704e`,
        ]),
        N(e, 16, 3, `#8a7a52`, 2, 4),
        N(e, 5, 6, U.blood[2], 6, 3),
        N(e, 6, 7, U.blood[3], 3, 2));
      break;
    case `head`:
      (r(6, 7, 5, 2),
        R_(e, 6, 4.5, 3.4, 3.2, U.drained),
        N(e, 3, 2, n.hair, 6, 2),
        N(e, 6, 5, N_, 1, 1),
        N(e, 8, 5, N_, 1, 1));
  }
}
function ov(e, t) {
  (N(e, 7, 14, U.wood[2], 4, 12),
    N(e, 7, 14, U.wood[4], 1, 12),
    N(e, 3, 25, U.wood[1], 12, 3),
    V_(
      e,
      [
        [1, 9],
        [17, 7],
        [17, 13],
        [1, 15],
      ],
      U.wood[3],
    ),
    V_(
      e,
      [
        [2, 8],
        [16, 6],
        [16, 11],
        [2, 13],
      ],
      `#140c10`,
    ),
    V_(
      e,
      [
        [3, 8],
        [9, 7],
        [9, 11],
        [3, 12],
      ],
      `#d8ccb0`,
    ),
    V_(
      e,
      [
        [9, 7],
        [15, 6],
        [15, 10],
        [9, 11],
      ],
      `#c8bca0`,
    ));
  for (let t = 0; t < 3; t++)
    (H_(e, 4, 9 + t, 8, 8 + t, t === 1 ? U.hollow[4] : `#6a5a4a`),
      H_(e, 10, 8 + t, 14, 7 + t, `#6a5a4a`));
  let n = t % 4 < 2;
  (N(e, 11, 8, n ? U.hollow[5] : U.hollow[3], 2, 2),
    U_(e, 9, 8, 6, `#b01a2a`, n ? 0.35 : 0.2),
    N(e, 6 + (t % 3), 4 - (t % 4), U.hollow[4]),
    N(e, 15, 1, `#1a1418`, 2, 5),
    W_(e, 16, 1, 1, t, q_));
}
function sv(e) {
  (N(e, 0, 0, U.gold[2], 24, 22),
    N(e, 1, 1, U.gold[4], 22, 1),
    N(e, 2, 2, `#1a1018`, 20, 18));
  for (let [t, n, r, i] of [
    [5, 11, `#6a3a22`, !0],
    [9, 12, `#c9b3d6`, !0],
    [14, 9, `#4a2a3a`, !0],
    [18, 7, `#4a2a3a`, !1],
  ])
    (N(e, t - 1, 20 - n + 3, `#7a1d2a`, 4, n - 3),
      i
        ? (N(e, t, 20 - n, `#050305`, 2, 3),
          H_(e, t - 1, 20 - n - 1, t + 2, 20 - n + 3, `#050305`))
        : (N(e, t, 20 - n, `#e8d5e0`, 2, 2),
          N(e, t, 20 - n - 1, r, 2, 1),
          N(e, t + 2, 20 - n + 3, `#5b3fb8`, 1, 2)));
  (H_(e, 3, 5, 20, 17, `#050305`), H_(e, 4, 5, 21, 17, U.blood[3]));
}
function cv(e, t) {
  (B_(e, 2, 10, 26, 10, 5, U.wood),
    N(e, 3, 11, `#e0d8c4`, 24, 3),
    N(e, 3, 11, `#2f6fcf`, 24, 1),
    R_(e, 22, 12, 4, 2.2, U.linen),
    V_(
      e,
      [
        [22, 6],
        [24, 10],
        [22, 12],
        [20, 10],
      ],
      U.hollow[3],
    ),
    N(e, 22, 9, t % 4 == 0 ? `#ffffff` : U.hollow[5]),
    N(e, 7, 6, `#9a6a3a`, 3, 6),
    N(e, 7, 4, `#5b3fb8`, 3, 2),
    N(e, 8, 3, `#5b3fb8`),
    N(e, 8, 7, `#fff36b`),
    R_(e, 13, 9, 1.8, 1.8, [`#6a1a1a`, `#a02a2a`, `#d04a3a`, `#f08a6a`]),
    N(e, 15, 6, `#7a5030`, 4, 3),
    N(e, 18, 5, `#7a5030`, 1, 2),
    N(e, 15, 9, `#5a3a22`, 1, 2),
    N(e, 18, 9, `#5a3a22`, 1, 2));
  for (let n of [1, 29])
    (N(e, n, 16, `#efe6cf`, 2, 5), W_(e, n + 1, 16, 1, t + n, K_));
}
function lv(e, t) {
  for (let [t, n] of [
    [0.3, 9],
    [1.4, 7],
    [2.6, 8],
    [3.8, 6],
    [5, 9],
  ])
    H_(
      e,
      11,
      20,
      11 + Math.cos(t) * n,
      20 + Math.sin(t) * n * 0.4,
      U.hollow[2],
    );
  ([
    [11, 20, 4, 18],
    [6, 20, 3, 10],
    [16, 20, 3, 12],
    [9, 20, 2, 7],
    [14, 20, 2, 6],
  ].forEach(([t, n, r, i], a) => {
    (V_(
      e,
      [
        [t - r, n],
        [t + r, n],
        [t + r * 0.4, n - i + 2],
        [t, n - i],
        [t - r * 0.4, n - i + 2],
      ],
      U.hollow[a === 0 ? 2 : 1],
    ),
      V_(
        e,
        [
          [t - r, n],
          [t, n],
          [t, n - i],
          [t - r * 0.4, n - i + 2],
        ],
        U.hollow[a === 0 ? 3 : 2],
      ),
      H_(e, t - 1, n - 2, t - 1, n - i + 3, U.hollow[4]));
  }),
    N(e, 11, 8, t % 4 < 2 ? `#ffffff` : U.hollow[5], 1, 3));
}
function uv(e, t) {
  let n = U.bone;
  for (let r = 0; r < 7; r++) {
    let i = 3 + H(r, t, 1) * 16,
      a = 6 + H(r, t, 2) * 5;
    H_(e, i, a, i + 4 + H(r, t, 3) * 3, a - 1 + H(r, t, 4) * 2, n[2 + (r % 2)]);
  }
  (R_(e, 7, 6, 3, 2.6, n),
    N(e, 6, 6, N_),
    N(e, 8, 6, N_),
    N(e, 7, 8, n[0], 2, 1),
    R_(e, 16, 8, 2.6, 2.2, n),
    N(e, 15, 8, N_),
    N(e, 17, 8, N_));
}
function dv(e, t) {
  (B_(e, 5, 10, 8, 8, 2, U.marble),
    R_(e, 9, 8, 8, 3.5, U.marble),
    R_(e, 9, 8, 6.2, 2.4, U.blood));
  let n = 1 + (t % 4);
  ((e.strokeStyle = `rgba(168,38,46,0.9)`),
    e.beginPath(),
    e.ellipse(9.5, 8, n * 1.3, n * 0.5, 0, 0, Math.PI * 2),
    e.stroke(),
    N(e, 9, 6, U.hollow[4], 2, 2),
    N(e, 9, 6, t % 4 == 0 ? `#ffffff` : U.hollow[5]),
    N(e, 4, 12, U.blood[3], 1, 4));
}
function fv(e, t) {
  (N(e, 0, 1, U.wood[2], 26, 3), N(e, 0, 1, U.wood[4], 26, 1));
  let n = [0, 1, 0, -1][t % 4];
  for (let [r, i, a] of [
    [4, 6, !0],
    [12, 3, !1],
    [19, 5, !0],
  ])
    (H_(e, r, 4, r + (a ? n : 0), 4 + i, U.iron[4]),
      N(e, r - 1 + (a ? n : 0), 4 + i, U.iron[5], 2, 2),
      a &&
        (R_(e, r + n, 12 + i, 3.4, 6, U.linen, -0.1),
        N(e, r - 2 + n, 13 + i, U.blood[3], 4, 3),
        N(e, r + n, 19 + i, U.blood[3], 1, 1 + (t % 3))));
}
function pv(e) {
  (B_(e, 2, 6, 12, 5, 2, U.wood),
    N(e, 3, 7, U.crimson[3], 10, 2),
    H_(e, 2, 11, 0, 14, U.wood[3], 2),
    H_(e, 13, 11, 15, 13, U.wood[3], 2),
    N(e, 3, 1, U.wood[2], 10, 5),
    N(e, 4, 2, U.crimson[2], 8, 3),
    N(e, 3, 1, U.gold[3], 10, 1));
}
