// assets__index-BTsv3a2s 57 — math
// Lines 35996-36335 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Y_(e, t, n) {
  let r = [0, 0, 0, 1, 1, 1, 0, 0][t],
    i = 10 + (t === 5 ? 1 : t === 6 ? -1 : 0);
  (N(e, i - 7, 23, n.shirt[0], 6, 3),
    N(e, i + 1, 23, n.shirt[0], 6, 3),
    N(e, i - 7, 23, n.shirt[1], 5, 1),
    N(e, i + 2, 23, n.shirt[1], 4, 1),
    N(e, i - 8, 24, `#1a120c`, 2, 2),
    N(e, i + 6, 24, `#1a120c`, 2, 2),
    N(e, i - 5, 20, n.shirt[1], 10, 4),
    N(e, i - 5, 20, n.shirt[2], 10, 1));
  for (let t = 10 + r; t < 21; t++) {
    let a = t < 13 + r ? 4 : 3.5 + (t - 13) * 0.12;
    for (let r = Math.round(i - a); r <= Math.round(i + a); r++)
      N(
        e,
        r,
        t,
        L_(
          n.shirt,
          0.62 - ((r - i + a) / (a * 2)) * 0.42 - (t - 10) * 0.012,
          r,
          t,
        ),
      );
  }
  if (n.extra === `cloak`)
    for (let t = 9 + r; t < 22; t++)
      (N(e, i - 5 - (t > 16), t, L_(n.shirt, 0.2, i, t), 2, 1),
        N(e, i + 4 + +(t > 16), t, n.shirt[0], 2, 1));
  (N(e, i - 4, 12 + r, n.shirt[2], 2, 6),
    N(e, i + 3, 12 + r, n.shirt[0], 2, 6),
    N(e, i - 3, 18, n.skin[3], 2, 2),
    N(e, i + 1, 18, n.skin[2], 2, 2),
    N(e, i - 1, 18, `#8a7a52`, 2, 2),
    N(e, i - 2, 19, `#5a4a2a`, 4, 1),
    R_(e, i, 8 + r, 3.4, 3.2, n.skin, -0.1),
    N(e, i - 3, 5 + r, n.hair, 7, 3),
    N(e, i - 4, 7 + r, n.hair, 2, 3),
    N(e, i + 3, 7 + r, n.hair, 1, 2),
    N(e, i - 1, 10 + r, n.skin[1], 3, 1),
    n.extra === `hat`
      ? (N(e, i + 3, 13 + r, `#a08a4a`, 6, 2),
        N(e, i + 4, 12 + r, `#b89a52`, 4, 1))
      : n.extra === `cloak`
        ? N(e, i - 3, 4 + r, n.shirt[1], 7, 2)
        : n.extra === `lamp`
          ? (N(e, i - 3, 4 + r, `#3c3c46`, 7, 2),
            N(e, i - 1, 3 + r, `#6a6a70`, 2, 1))
          : N(e, i - 3, 4 + r, n.shirt[2], 7, 2));
  let a = t % 4 == 0;
  (N(e, i - 1, 13 + r, U.hollow[3], 3, 2),
    N(e, i, 13 + r, a ? `#ffffff` : U.hollow[5]),
    N(e, i + 1, 12 + r, U.hollow[4]));
}
function X_(e, t, n, r) {
  let i = [0, 0, 1, 1, 1, 0, 0, -1][t],
    a = r ? U.drained : n.skin;
  for (let t of [2, 15])
    (N(e, t, 0, U.iron[3], 3, 3),
      H_(e, t + 1, 3, 7 + (t > 8 ? 4 : 0) + i, 8, U.iron[4]));
  (H_(e, 7 + i, 8, 8 + i, 13, a[3], 2),
    H_(e, 11 + i, 8, 10 + i, 13, a[2], 2),
    N(e, 6 + i, 7, U.iron[2], 3, 2),
    N(e, 10 + i, 7, U.iron[2], 3, 2),
    R_(e, 9.5 + i, 13, 3, 3, a),
    N(e, 7 + i, 10, n.hair, 5, 2),
    N(e, 10 + i, 14, r ? `#1a1620` : a[0], 2, 1));
  for (let t = 15; t < 25; t++)
    for (let a = 0; a < 7; a++)
      N(
        e,
        6 + a + i * +(t < 20),
        t,
        L_(n.shirt, 0.2 + (1 - a / 7) * 0.5 - (r ? 0.15 : 0), a, t),
      );
  (N(e, 8 + i, 17, r ? U.hollow[2] : U.blood[3], 2, 3),
    N(e, 7, 25, a[2], 2, 5),
    N(e, 11, 25, a[1], 2, 5),
    r &&
      (H_(e, 9 + i, 18, 6 + i, 22, U.hollow[1]),
      H_(e, 9 + i, 18, 12 + i, 21, U.hollow[1])),
    N(e, 9, 30, U.blood[2], 3, 2));
}
function Z_(e, t) {
  ((e.fillStyle = `rgba(42,5,10,0.6)`),
    e.beginPath(),
    e.ellipse(15, 9, 14, 4.5, 0, 0, Math.PI * 2),
    e.fill());
  let n = U.drained;
  (N(e, 1, 6, t.shirt[1], 8, 3),
    N(e, 2, 10, t.shirt[0], 7, 3),
    N(e, 1, 6, t.shirt[2], 8, 1),
    N(e, 0, 6, n[2], 2, 2),
    N(e, 1, 11, n[1], 2, 2));
  for (let n = 9; n < 21; n++)
    for (let r = 5; r < 13; r++)
      N(
        e,
        n,
        r,
        r === 5 || r === 12
          ? t.shirt[0]
          : L_(t.shirt, 0.55 - (r - 5) * 0.05 - (n > 18 ? 0.1 : 0), n, r),
      );
  (N(e, 12, 7, n[3], 6, 3), N(e, 12, 8, n[1], 6, 1));
  for (let t of [13, 15, 17]) N(e, t, 8, n[4]);
  (N(e, 11, 9, U.hollow[1], 2, 1),
    R_(e, 23, 9, 3.2, 3, n),
    N(e, 21, 6, t.hair, 5, 3),
    N(e, 25, 8, t.hair, 1, 3),
    H_(e, 19, 12, 22, 14, n[2], 2),
    H_(e, 20, 5, 25, 2, n[3], 2),
    N(e, 26, 1, n[4], 2, 2),
    N(e, 27, 0, n[3], 1, 1));
}
function Q_(e, t, n) {
  let r = n / 2,
    i = r - 3,
    a = (t / 8) * Math.PI * 2;
  for (let t = 0; t < n; t++)
    for (let o = 0; o < n; o++) {
      let n = o + 0.5 - r,
        s = t + 0.5 - r,
        c = Math.hypot(n, s),
        l = Math.atan2(s, n);
      if (c < i + 1) {
        let n = 0.55 * (1 - c / (i + 1)) + (H(o, t, 5) - 0.5) * 0.15;
        n > 0.08 &&
          ((e.fillStyle = `rgba(18,5,10,${Math.min(0.55, n)})`),
          e.fillRect(o, t, 1, 1));
      }
      let u = Math.abs(c - i) < 0.75,
        d = Math.abs(c - (i - 4)) < 0.6,
        f = c < i - 4 && y_(n, s, i - 4.5) < 0.7,
        p = c > i - 3.3 && c < i - 0.8,
        m = Math.floor(((l + a * 0.25 + Math.PI) / (Math.PI * 2)) * 20),
        h = p && H(m, Math.round(c * 2), 11) < 0.34;
      if (!(u || d || f || h)) continue;
      let g = ((l - a + Math.PI * 4) % (Math.PI * 2)) / (Math.PI * 2),
        _ = g < 0.12 ? 1 - g / 0.12 : 0,
        v = 0.5 + 0.5 * Math.sin(a * 2 + c * 0.3),
        y;
      ((y = f
        ? _ > 0.3
          ? `#ffd0d0`
          : L_(U.blood, 0.45 + v * 0.45, o, t)
        : h
          ? L_(U.hollow, 0.35 + _ * 0.6, o, t)
          : _ > 0.2
            ? L_(U.hollow, 0.6 + _ * 0.4, o, t)
            : L_(U.blood, 0.35 + v * 0.4, o, t)),
        N(e, o, t, y));
    }
  for (let n = 0; n < 5; n++) {
    let a = -Math.PI / 2 + (n * 2 * Math.PI) / 5,
      o = Math.round(r + Math.cos(a) * (i - 4.5)),
      s = Math.round(r + Math.sin(a) * (i - 4.5));
    (N(e, o - 1, s - 3, `#1a1418`, 3, 4),
      N(e, o - 1, s - 3, `#3a3038`, 1, 4),
      N(e, o - 2, s, `#2a2226`, 5, 1),
      W_(e, o, s - 3, 1, t + n, q_));
  }
}
function $_(e, t) {
  let n = [0, -1, -1, -2, -2, -1, -1, 0][t];
  ((e.fillStyle = `rgba(18,5,10,0.6)`),
    e.beginPath(),
    e.ellipse(12, 36, 7, 2, 0, 0, Math.PI * 2),
    e.fill());
  let r = 8 + n;
  (V_(
    e,
    [
      [12, r - 7],
      [18, r + 6],
      [12, r + 20],
      [6, r + 6],
    ],
    U.hollow[1],
  ),
    V_(
      e,
      [
        [12, r - 7],
        [12, r + 20],
        [6, r + 6],
      ],
      U.hollow[2],
    ),
    V_(
      e,
      [
        [12, r - 4],
        [14, r + 6],
        [12, r + 14],
        [10, r + 6],
      ],
      U.hollow[4],
    ),
    H_(e, 8, r + 4, 12, r - 5, U.hollow[5]));
  let i = +(t % 4 == 0);
  (R_(e, 12, r + 7, 2 + i * 0.6, 2.4 + i * 0.6, [
    `#b01a2a`,
    `#e0484e`,
    `#ffd0d0`,
    `#ffffff`,
    `#ffffff`,
  ]),
    V_(
      e,
      [
        [5, r + 10],
        [8, r + 4],
        [9, r + 13],
      ],
      U.hollow[2],
    ),
    V_(
      e,
      [
        [19, r + 10],
        [16, r + 3],
        [15, r + 12],
      ],
      U.hollow[1],
    ));
  for (let n = 0; n < 3; n++) {
    let i = (t / 8) * Math.PI * 2 + (n * Math.PI * 2) / 3,
      a = 12 + Math.cos(i) * 10,
      o = r + 8 + Math.sin(i) * 3;
    (N(e, a, o, Math.sin(i) > 0 ? U.hollow[4] : U.hollow[2], 2, 2),
      Math.sin(i) > 0.5 && N(e, a, o, `#ffffff`));
  }
}
function ev(e, t) {
  ((e.fillStyle = `rgba(58,5,12,0.8)`),
    e.beginPath(),
    e.ellipse(22, 29, 18, 3.5, 0, 0, Math.PI * 2),
    e.fill(),
    B_(e, 5, 20, 8, 9, 2, U.stone),
    B_(e, 31, 20, 8, 9, 2, U.stone),
    B_(e, 2, 12, 40, 10, 5, U.stone),
    N(e, 3, 16, U.blood[2], 38, 1),
    N(e, 3, 16, U.blood[4], 12 + (t % 4) * 6, 1));
  for (let [n, r] of [
    [8, 5 + (t % 3)],
    [20, 7],
    [34, 4 + (t % 2)],
  ])
    N(e, n, 17, U.blood[3], 1, r);
  for (let t = 6; t < 38; t++) {
    let n = Math.sin(((t - 6) / 32) * Math.PI) * 1.5 + +(t < 12);
    for (let r = Math.round(10 - n); r < 14; r++)
      N(
        e,
        t,
        r,
        L_(
          U.linen,
          0.3 + (r < 11 - n + 1 ? 0.4 : 0) - (t > 34 ? 0.2 : 0),
          t,
          r,
        ),
      );
  }
  R_(e, 9, 10, 3, 2.6, U.linen);
  for (let t of [15, 22, 29]) N(e, t, 9, `#5a4a2a`, 1, 5);
  (N(e, 18, 11, U.blood[3], 6, 2),
    N(e, 20, 10, U.blood[4], 3, 1),
    R_(e, 38, 10, 2.6, 1.6, U.gold),
    N(e, 37, 9, U.blood[4], 3, 1),
    H_(e, 3, 11, 7, 9, U.iron[5]));
  for (let n of [4, 40])
    (N(e, n - 1, 6, `#1a1418`, 2, 6), W_(e, n, 6, 1, t + n, q_));
}
function tv(e, t) {
  let n = {
    C: [`111`, `100`, `100`, `100`, `111`],
    A: [`010`, `101`, `111`, `101`, `101`],
    E: [`111`, `100`, `110`, `100`, `111`],
    L: [`100`, `100`, `100`, `100`, `111`],
    N: [`101`, `111`, `111`, `111`, `101`],
  };
  [
    [1, 1],
    [4, 8],
    [0, 15],
  ].forEach(([r, i], a) => {
    let o = r;
    for (let t of `CAELAN`)
      (n[t].forEach((t, n) =>
        [...t].forEach((t, r) => {
          t === `1` &&
            N(
              e,
              o + r,
              i + n + +(H(o + r, a, 3) < 0.2),
              L_(U.blood, 0.35 + H(o + r, i + n, 5) * 0.5, o, n),
            );
        }),
      ),
        (o += 4));
    for (let n = 0; n < 3; n++)
      N(
        e,
        r + 2 + Math.floor(H(a, n, 8) * 20),
        i + 5,
        U.blood[2],
        1,
        2 + Math.floor(H(a, n, 9) * 4) + +(n === t % 3),
      );
  });
}
function nv(e, t) {
  let n = [0, 0, 1, 1, 0, 0, -1, -1][t];
  H_(e, 11, 0, 11 + n, 6, U.iron[4]);
  let r = 3 + n;
  for (let t = 0; t < 5; t++) N(e, r + 1 + t * 4, 9, U.iron[1], 1, 22);
  (R_(e, r + 8, 26, 5, 3.4, U.drained),
    R_(e, r + 12, 23, 2.6, 2.4, U.bone),
    N(e, r + 11, 23, N_),
    H_(e, r + 5, 28, r + 14, 29, U.bone[2]),
    N(e, r + 3, 29, U.blood[2], 12, 2),
    V_(
      e,
      [
        [r, 9],
        [r + 16, 9],
        [r + 12, 6],
        [r + 4, 6],
      ],
      U.iron[2],
    ),
    N(e, r, 9, U.iron[4], 17, 1),
    N(e, r, 20, U.iron[3], 17, 1),
    N(e, r, 31, U.iron[3], 17, 2));
  for (let t = 0; t < 5; t++)
    (N(e, r + t * 4, 9, U.iron[3], 1, 23), N(e, r + t * 4, 9, U.iron[5], 1, 1));
}
