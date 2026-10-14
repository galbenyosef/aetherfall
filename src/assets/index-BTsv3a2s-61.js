// index-BTsv3a2s 61 — iron
// Lines 37333-37531 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function qv(e) {
  (V_(
    e,
    [
      [2, 34],
      [14, 34],
      [9, 2],
      [7, 4],
    ],
    U.basalt[2],
  ),
    V_(
      e,
      [
        [2, 34],
        [8, 34],
        [7, 4],
      ],
      U.basalt[3],
    ),
    H_(e, 6, 10, 5, 30, `#8a6a9a`),
    H_(e, 10, 12, 12, 30, `#3a2c3c`),
    V_(
      e,
      [
        [12, 34],
        [16, 34],
        [15, 22],
      ],
      U.basalt[2],
    ),
    N(e, 1, 33, U.basalt[1], 15, 1));
}
function Jv(e, t) {
  for (let t = 0; t < 18; t++) {
    let n = (t / 18) * Math.PI * 2;
    H_(
      e,
      13 + Math.cos(n) * 8,
      10 + Math.sin(n) * 4,
      13 + Math.cos(n) * 12,
      10 + Math.sin(n) * 5,
      t % 2 ? U.basalt[3] : U.bone[1],
    );
  }
  R_(e, 13, 10, 10, 4.5, U.basalt, -0.2);
  let n = [`#9a2008`, `#d8400c`, `#ff7a1a`, `#ffb238`][t % 4];
  for (let [t, r] of [
    [9, 8],
    [13, 7],
    [17, 8],
    [11, 10],
    [15, 10],
  ])
    (R_(e, t, r, 2, 2.6, U.imp, -0.1), N(e, t, r, n));
  N(e, 5, 12, U.bone[3], 4, 1);
}
function Yv(e, t) {
  B_(e, 3, 5, 20, 9, 3, U.iron);
  for (let n = 4; n < 22; n++)
    N(e, n, 4 - ((n * 3) % 4 == 0), (n + t) % 5 == 0 ? U.lava[5] : U.lava[2]);
  (R_(e, 7, 15, 2.6, 2.6, U.iron),
    R_(e, 19, 15, 2.6, 2.6, U.iron),
    N(e, 0, 17, U.iron[3], 26, 1));
}
function Xv(e) {
  for (let t = 0; t < 32; t += 4) N(e, t, 3, U.wood[2], 2, 10);
  (N(e, 0, 4, U.iron[4], 32, 1), N(e, 0, 11, U.iron[4], 32, 1));
}
function Zv(e) {
  (V_(
    e,
    [
      [2, 8],
      [18, 6],
      [20, 10],
      [4, 11],
    ],
    `#3a1612`,
  ),
    H_(e, 4, 8, 16, 7, `#5a241c`),
    R_(e, 19, 5, 2.4, 2.2, [`#3a3434`, `#5a5252`, `#7a7070`, `#9a9090`]),
    H_(e, 8, 9, 14, 9, `#6a6060`),
    R_(e, 3, 5, 1.8, 1.8, [`#2a1a14`, `#3a2a1e`]),
    H_(e, 2, 4, 4, 6, `#ff7a1a`));
}
function Qv(e, t) {
  N(e, 0, 0, U.iron[3], 16, 2);
  for (let n = 2; n < 26; n++) {
    let r = n > 16 ? Math.floor(H(n, 1) * 6) : 0;
    for (let t = 2 + r; t < 14 - r; t++)
      N(
        e,
        t,
        n,
        L_(
          [`#3a0c08`, `#5a1410`, `#7a1d10`, `#9a2a18`],
          0.4 + (t < 5 ? 0.2 : 0),
          t,
          n,
        ),
      );
    n > 16 && r > 0 && N(e, 2 + r, n, (t + n) % 3 ? `#ff7a1a` : `#ffd166`);
  }
  (V_(
    e,
    [
      [8, 5],
      [11, 12],
      [8, 14],
      [5, 12],
    ],
    `#c89a3a`,
  ),
    V_(
      e,
      [
        [8, 8],
        [9.5, 12],
        [8, 13],
        [6.5, 12],
      ],
      `#7a1d10`,
    ));
}
function $v(e, t) {
  (B_(e, 5, 10, 10, 6, 2, U.wood),
    V_(
      e,
      [
        [1, 5],
        [19, 5],
        [16, 10],
        [4, 10],
      ],
      U.iron[2],
    ),
    N(e, 1, 5, U.iron[4], 18, 1),
    N(e, 6, 3, t % 4 < 2 ? U.lava[5] : U.lava[4], 6, 2),
    H_(e, 13, 2, 19, 0, U.iron[4]));
}
function ey(e, t) {
  (R_(e, 9, 26, 8, 3, U.basalt), R_(e, 9, 26, 4, 1.5, U.lava));
  let n = t % 8;
  if (n >= 4) {
    let t = (n - 3) * 6;
    for (let r = 0; r < t; r++) {
      let i = 1 + r * 0.25;
      for (let a = -i; a <= i; a++)
        H(Math.round(a), r, n) < 0.7 &&
          N(
            e,
            9 + a + Math.sin(r * 0.5) * 1.5,
            24 - r,
            r % 4 == 0 ? `#ffb238` : `rgba(120,100,104,${0.7 - r / (t * 1.8)})`,
          );
    }
  }
}
function ty(e, t) {
  let n = [`#5a4a0a`, `#9a8a1a`, `#d8c83a`, `#fff36b`, `#fffbd1`];
  for (let [t, r, i, a] of [
    [5, 14, 3, 9],
    [10, 14, 3, 12],
    [13, 14, 2, 6],
  ])
    (V_(
      e,
      [
        [t - i, r],
        [t + i, r],
        [t, r - a],
      ],
      n[2],
    ),
      V_(
        e,
        [
          [t - i, r],
          [t, r],
          [t, r - a],
        ],
        n[3],
      ));
  (t % 8 == 0 && N(e, 10, 4, n[4]), N(e, 1, 14, U.basalt[2], 15, 2));
}
function Pee(e, t) {
  let n = [0, 1, 1, 0, 0, -1, -1, 0][t];
  for (let t = 0; t < 9; t++)
    N(
      e,
      4 + Math.round((n * t) / 8) - (t % 2),
      t * 2,
      U.iron[t % 2 ? 3 : 4],
      t % 2 ? 1 : 3,
      2,
    );
  (B_(e, 1 + n, 18, 9, 7, 2, U.iron), N(e, 2 + n, 18, U.lava[4], 7, 1));
}
