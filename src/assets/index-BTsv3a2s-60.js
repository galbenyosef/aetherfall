// index-BTsv3a2s 60 — math
// Lines 36985-37332 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Av(e, t) {
  for (let n = 0; n < 6; n++) {
    let r = 2 + n * 3,
      i = 8 + H(n, 1) * 14;
    (H_(
      e,
      r,
      0,
      r + Math.sin(t * 0.8 + n) * 0.8 + (H(n, 2) - 0.5) * 3,
      i,
      U.wood[n % 2 ? 1 : 2],
    ),
      H_(e, r + 1, i * 0.4, r + 3, i * 0.6, U.wood[1]));
  }
  N(e, 9, (t * 3) % 22, U.earth[3]);
}
function jv(e) {
  for (let t = 2; t < 23; t++) {
    let n = Math.sin(((t - 2) / 21) * Math.PI) * 1.4 + +(t > 18);
    for (let r = Math.round(4 - n); r < 9; r++)
      N(e, t, r, L_(U.linen, 0.3 + (r < 5 - n + 1 ? 0.45 : 0), t, r));
  }
  R_(e, 20, 4.5, 2.6, 2.4, U.linen);
  for (let t of [7, 12, 17]) N(e, t, 3, `#5a4a2a`, 1, 6);
}
function Mv(e) {
  (R_(e, 5, 8, 4, 5, [`#3a2014`, `#5a3420`, `#7a4a2e`, `#9a643e`, `#b8804e`]),
    N(e, 3, 2, `#5a3420`, 4, 2),
    R_(e, 12, 9, 3.4, 4, [`#2a2420`, `#403830`, `#5a4e42`, `#766858`]),
    V_(
      e,
      [
        [14, 13],
        [20, 13],
        [18, 8],
        [15, 9],
      ],
      `#5a3420`,
    ),
    (e.fillStyle = `#6a6258`),
    e.beginPath(),
    e.ellipse(18, 13.5, 4, 1.2, 0, 0, Math.PI * 2),
    e.fill());
}
function Nv(e, t) {
  let n = (t, n, r) => {
    let i = r ? -1 : 1;
    (R_(e, t, n, 2.6, 1.6, [`#2a2420`, `#3e362e`, `#564a3e`, `#6e604e`]),
      N(e, t + i * 3, n, `#3e362e`, 1, 1),
      N(e, t + i * 3, n - 1, `#e04040`),
      H_(e, t - i * 3, n, t - i * 6, n + 1, `#8a6a5a`));
  };
  (n(4 + (t % 8) * 1.2, 5, !1), n(14 - (t % 8), 3, !0));
}
function Pv(e) {
  ((e.fillStyle = `rgba(26,18,13,0.9)`),
    e.beginPath(),
    e.ellipse(20, 12, 19, 10, 0, 0, Math.PI * 2),
    e.fill());
  for (let t = 0; t < 40; t++) {
    let n = H(t, 1) * Math.PI * 2,
      r = Math.sqrt(H(t, 2)),
      i = 20 + Math.cos(n) * r * 16,
      a = 12 + Math.sin(n) * r * 8;
    t % 6 == 0
      ? (R_(e, i, a, 1.6, 1.5, U.bone), N(e, i - 1, a, N_))
      : H_(
          e,
          i,
          a,
          i + 2 + H(t, 3) * 3,
          a + (H(t, 4) - 0.5) * 2,
          U.bone[1 + (t % 3)],
        );
  }
  for (let t = 0; t < 30; t++)
    N(
      e,
      20 + (H(t, 7) - 0.5) * 36,
      12 + (H(t, 8) - 0.5) * 18,
      U.earth[2 + (t % 2)],
      2,
      1,
    );
}
function Fv(e, t) {
  for (let t = 0; t < 30; t++) {
    let n = Math.sin((t / 29) * Math.PI),
      r = 22 + n * 12 + Math.sin(t * 1.3) * 3 + H(t, 1) * 4;
    for (let i = 0; i < r; i++) {
      let a = Math.sin(t * 1.7 + Math.sin(i * 0.15) * 2) * 0.5 + 0.5,
        o = 0.3 + n * 0.35 + a * 0.2 - (i / r) * 0.15;
      ((t < 3 || t > 26) && (o -= 0.15), N(e, t, i, L_(U.ice, o, t, i)));
    }
    if (H(t, 3) < 0.45) {
      let n = 2 + H(t, 4) * 6;
      for (let i = 0; i < n; i++) N(e, t, r + i, U.ice[i < n - 2 ? 5 : 6]);
    }
  }
  for (let n = 0; n < 4; n++)
    N(e, 5 + n * 6, (t * 5 + n * 9) % 34, U.ice[7], 1, 3);
  ((e.fillStyle = `#c6e3f0`),
    e.beginPath(),
    e.ellipse(15, 40, 15, 2.5, 0, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#e6f5fb`),
    e.beginPath(),
    e.ellipse(12, 39.5, 7, 1, 0, 0, Math.PI * 2),
    e.fill());
}
function Iv(e, t) {
  (z_(e, 3, 4, 10, 34, U.ice),
    V_(
      e,
      [
        [0, 6],
        [16, 6],
        [13, 0],
        [3, 0],
      ],
      U.ice[5],
    ),
    V_(
      e,
      [
        [0, 36],
        [16, 36],
        [14, 42],
        [2, 42],
      ],
      U.ice[3],
    ));
  for (let t = 0; t < 6; t++)
    R_(e, 5 + H(t, 1) * 6, 8 + H(t, 2) * 26, 0.9, 0.9, U.ice, 0.3);
  N(e, 6, 8 + ((t * 4) % 26), U.ice[7], 1, 3);
}
function Lv(e, t) {
  B_(e, 1, 2, 18, 26, 4, U.ice, 0.1);
  let n = J_[1];
  ((e.globalAlpha = 0.75),
    N(e, 6, 14, n.shirt[2], 8, 9),
    N(e, 7, 22, n.shirt[1], 2, 5),
    N(e, 11, 22, n.shirt[1], 2, 5),
    R_(e, 10, 11, 2.8, 3, [`#5a6a7a`, `#7a8a9a`, `#9aaabb`, `#c0ccd8`]),
    N(e, 9, 11, `#1a2a3a`),
    N(e, 11, 11, `#1a2a3a`),
    H_(e, 6, 15, 3, 9, n.shirt[2], 2),
    (e.globalAlpha = 1));
  for (let t = 0; t < 16; t++)
    N(e, 2 + H(t, 3) * 16, 6 + H(t, 4) * 20, `#e6f5fb`);
  (H_(e, 14, 6, 17, 16, `#f0faff`), t % 8 == 0 && N(e, 4, 7, `#ffffff`, 2, 2));
}
function Rv(e) {
  (V_(
    e,
    [
      [2, 10],
      [38, 8],
      [34, 16],
      [8, 18],
    ],
    U.wood[3],
  ),
    V_(
      e,
      [
        [2, 10],
        [38, 8],
        [36, 10],
        [4, 12],
      ],
      U.wood[5],
    ));
  for (let t = 6; t < 34; t += 5) H_(e, t, 11, t + 1, 17, U.wood[1]);
  (H_(e, 20, 9, 26, 0, U.wood[2], 2),
    (e.fillStyle = `#c6e3f0`),
    e.beginPath(),
    e.ellipse(20, 17, 19, 3, 0, 0, Math.PI * 2),
    e.fill());
  for (let t = 0; t < 10; t++) N(e, 4 + t * 3.4, 9 + (t % 2), `#e6f5fb`, 2, 1);
}
function zv(e) {
  (N(e, 1, 2, U.wood[2], 2, 20),
    N(e, 21, 2, U.wood[2], 2, 20),
    N(e, 1, 2, U.wood[4], 22, 2));
  for (let t = 3; t < 21; t += 3) H_(e, t, 4, t + 2, 15, `#c6e3f0`);
  for (let t = 6; t < 16; t += 3) H_(e, 3, t, 21, t + 1, `#8fbcd6`);
  for (let t of [6, 12, 17])
    (N(e, t, 4, `#8a8f99`, 1, 2),
      R_(e, t, 9, 1.4, 3, [`#4a5a6a`, `#6a7a8a`, `#9aaabb`, `#d0dae4`]));
  N(e, 0, 21, `#e6f5fb`, 24, 1);
}
function Bv(e, t) {
  ([
    [4, 18, 3, 10],
    [9, 18, 4, 16],
    [14, 18, 3, 11],
    [7, 18, 2, 7],
  ].forEach(([n, r, i, a], o) => {
    (V_(
      e,
      [
        [n - i, r],
        [n + i, r],
        [n + i * 0.5, r - a + 2],
        [n, r - a],
        [n - i * 0.5, r - a + 2],
      ],
      U.ice[4],
    ),
      V_(
        e,
        [
          [n - i, r],
          [n, r],
          [n, r - a],
          [n - i * 0.5, r - a + 2],
        ],
        U.ice[6],
      ),
      (t + o * 2) % 8 == 0 && N(e, n - 1, r - a + 2, `#ffffff`, 1, 2));
  }),
    (e.fillStyle = `#e6f5fb`),
    e.fillRect(1, 18, 17, 2));
}
function Vv(e) {
  (V_(
    e,
    [
      [1, 22],
      [11, 22],
      [7, 2],
      [5, 2],
    ],
    U.ice[3],
  ),
    V_(
      e,
      [
        [1, 22],
        [6, 22],
        [5, 2],
      ],
      U.ice[5],
    ),
    N(e, 5, 6, U.ice[7], 1, 8),
    N(e, 0, 21, `#e6f5fb`, 12, 2));
}
function Hv(e) {
  for (let t = 0; t < 30; t++) {
    let n = Math.sin((t / 30) * Math.PI) * 6 + Math.sin(t * 0.7) * 1.2;
    for (let r = Math.round(10 - n); r < 10; r++)
      N(
        e,
        t,
        r,
        L_(U.snow, 0.3 + (r < 11 - n ? 0.5 : 0) - (t / 30) * 0.2, t, r),
      );
  }
}
function Uv(e, t) {
  for (let t = 0; t < 26; t++) {
    let n = t / 26,
      r = 2 + n * n * 11;
    R_(
      e,
      4 + n * 20,
      26 - n * 12 - Math.sin(n * Math.PI) * 6,
      r * 0.6,
      r,
      U.ice,
      -0.1 + n * 0.15,
    );
  }
  R_(e, 23, 13, 5, 9, [`#0a1624`, `#132640`, `#1d3c5c`, `#2a587c`]);
  let n = t % 8;
  ((e.strokeStyle = `rgba(200,236,255,${0.6 - n * 0.07})`),
    e.beginPath(),
    e.ellipse(24, 13, 3 + n, 6 + n * 1.5, 0, -Math.PI / 2, Math.PI / 2),
    e.stroke());
}
function Wv(e, t) {
  N(e, 0, 0, `#e6f5fb`, 24, 2);
  for (let n = 0; n < 8; n++) {
    let r = 1 + n * 3,
      i = 4 + H(n, 1) * 9;
    (V_(
      e,
      [
        [r, 2],
        [r + 2, 2],
        [r + 1, 2 + i],
      ],
      U.ice[n % 2 ? 5 : 6],
    ),
      (t + n) % 8 == 0 && N(e, r + 1, 3 + i + (t % 3), U.ice[7]));
  }
}
function Gv(e, t) {
  (V_(
    e,
    [
      [2, 16],
      [10, 16],
      [8, 2],
      [4, 2],
    ],
    `rgba(148,196,222,0.8)`,
  ),
    R_(
      e,
      6,
      9,
      2.4,
      2.4,
      t % 8 < 4
        ? [`#2a8fb0`, `#4aa6ff`, `#aee6ff`, `#ffffff`]
        : [`#1a6f86`, `#2a8fb0`, `#4aa6ff`, `#aee6ff`],
    ),
    N(e, 5, 3, `#f0faff`, 1, 10));
}
function Kv(e, t) {
  N(e, 6, 0, U.basalt[1], 12, 4);
  for (let n = 7; n < 17; n++)
    for (let r = 3; r < 36; r++) {
      let i = (r - t * 3 + n * 3) % 11;
      N(
        e,
        n,
        r,
        n === 7 || n === 16
          ? U.lava[1]
          : i < 2
            ? U.lava[6]
            : L_(U.lava, 0.45 + (1 - Math.abs(n - 11.5) / 5) * 0.35, n, r),
      );
    }
  ((e.fillStyle = `#ff8a2a`),
    e.beginPath(),
    e.ellipse(12, 37, 11, 3, 0, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#ffe08a`),
    e.beginPath(),
    e.ellipse(12, 36.5, 5, 1.4, 0, 0, Math.PI * 2),
    e.fill());
  for (let n = 0; n < 3; n++)
    N(e, 4 + n * 8 + (t % 3), 33 - ((t * 2 + n * 3) % 7), U.lava[5]);
}
