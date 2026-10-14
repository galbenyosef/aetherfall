// assets__index-BTsv3a2s 50 — draw
// Lines 33684-34022 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function kg(e, t) {
  let n = `#4a4f6b`,
    r = `#2e3148`,
    i = `#6c7390`,
    a = `#fff36b`,
    o = `#e0b64a`,
    s = [
      [15, 4],
      [11, 8],
      [13, 17],
      [11, 8],
    ],
    c = [
      [8, 0],
      [1, 7],
      [7, 21],
      [1, 7],
    ],
    [l, u] = s[t],
    [d, f] = c[t];
  (ug(e, 14, 11, 20, 11, l + 4, u + (t === 2 ? -4 : 1), r),
    ug(
      e,
      17,
      11,
      l + 4,
      u + (t === 2 ? -4 : 1),
      d + 5,
      f + (t === 2 ? -6 : 2),
      r,
    ),
    N(e, 3, 12, r, 7, 3),
    N(e, 2, 11, r, 2, 1),
    N(e, 2, 15, r, 2, 1),
    N(e, 2, 13, a, 1, 1),
    P(e, 15, 13, 6.5, 3.5, n),
    P(e, 16, 14.5, 4.5, 2, `#c9cde0`));
  for (let t = 13; t <= 19; t += 2) N(e, t, 15, `#9aa0b8`);
  (P(e, 22.5, 11, 3.2, 2.8, n),
    N(e, 21, 9, i, 3, 1),
    N(e, 25, 10, o, 2, 2),
    N(e, 27, 11, o, 1, 2),
    N(e, 23, 10, a),
    N(e, 24, 10, `#1a1830`),
    N(e, 14, 17, o, 1, 2),
    N(e, 17, 17, o, 1, 2),
    ug(e, 12, 12, 20, 11, l, u, n),
    ug(e, 13, 12, l, u, d, f, n));
  for (let t = 0; t <= 8; t++) {
    let n = t / 8;
    (N(e, 20 + (l - 20) * n, 11 + (u - 11) * n, i),
      N(e, l + (d - l) * n, u + (f - u) * n, i));
  }
  for (let n = 1; n < 4; n++) {
    let i = n / 4;
    N(
      e,
      13 + (d - 13) * i + +(t === 2),
      12 + (f - 12) * i + (t === 2 ? -1 : 1),
      r,
    );
  }
  (N(e, d, f, a),
    N(e, d + (t === 2 ? 1 : -1), f + (t === 0 ? 1 : -1), `#ffffff`),
    t === 2 && (N(e, d - 1, f + 2, a), N(e, d + 2, f + 3, a)));
}
function Ag(e, t) {
  let n = `#23252f`,
    r = `#ffcf6a`,
    i = `#1c1d26`,
    a = [6, 11, 16, 21];
  (a.forEach((n, r) => {
    let a = (r + t) % 2;
    (N(e, n - 2, 11, i, 1, 3 - a), N(e, n + 1, 11 + a, i, 1, 3 - a));
  }),
    a.forEach((t, r) => {
      let i = r === 0 || r === 3 ? 4.5 : 5;
      (P(e, t, 8, i, 4, `#3a3d4f`),
        P(e, t - 1, 6.5, i - 2, 1.5, `#5a5e75`),
        N(e, t + 3, 6, n, 1, 5));
    }),
    a.forEach((n, i) => {
      (N(e, n, 3, r, 1, 2),
        N(e, n - 1, 4, `#b8862e`, 1, 1),
        (i + t) % 4 == 0 && N(e, n, 3, `#fff3c4`));
    }),
    P(e, 26, 9, 3.5, 3, n),
    N(e, 27, 8, r),
    N(e, 27, 5, i, 1, 3),
    N(e, 28, 4, i));
  let o = t % 2;
  (N(e, 28, 10 - o, `#8a8f99`, 2, 1), N(e, 28, 12 + o, `#8a8f99`, 2, 1));
}
function jg(e, t) {
  let n = `#5a5070`,
    r = `#e6d9ff`,
    i = `#2a1f3a`,
    a = [8, 6, 2.5, 6][t];
  for (let n = 0; n < 4; n++)
    N(e, 1 + n * 2 + (t % 2), 8 + ((n * 3 + t) % 7), n % 2 ? r : `#9aa4d6`);
  for (let t of [-1, 1])
    if (
      (P(e, 9, 11 + t * (1 + a * 0.4), 3.8, Math.max(1, a * 0.45), n),
      ug(e, 18, 11 + t * 0.5, 10, 11 + t, 11, 11 + t * (1 + a), n),
      P(e, 13.5, 11 + t * (1 + a * 0.55), 5.2, Math.max(1, a * 0.55), n),
      P(
        e,
        13.8,
        11 + t * (1 + a * 0.55),
        4.2,
        Math.max(1, a * 0.55 - 1),
        `#8a7fa0`,
      ),
      a > 4)
    ) {
      let n = Math.round(11 + t * (1 + a * 0.6));
      (N(e, 13, n, r, 3, 1),
        N(e, 14, n - 1, r, 1, 3),
        N(e, 14, n, i),
        N(e, 17, Math.round(11 + t * 2), `#b8aecb`, 2, 1));
    }
  (N(e, 9, 10, `#a89f8a`, 11, 3), N(e, 10, 10, `#d9cfbf`, 10, 2));
  for (let t = 10; t <= 16; t += 2) N(e, t, 12, `#7a7266`);
  (N(e, 20, 10, `#d9cfbf`, 2, 3), N(e, 21, 10, i), N(e, 21, 12, i));
  for (let t of [-1, 1])
    (N(e, 22, 11 + t * 2, `#a89f8a`),
      N(e, 23, 11 + t * 3, `#a89f8a`),
      N(e, 24, 11 + t * 4, `#a89f8a`),
      N(e, 24, 11 + t * 3, `#a89f8a`));
}
function Mg(e, t) {
  let n = `#8c8698`,
    r = `#b9b3c7`,
    i = `#5d586c`,
    a = [0, -1, -1, 0][t];
  (N(e, 10, 27 - a, i, 2, 2),
    N(e, 15, 28 + a, i, 2, 1),
    N(e, 8, 5 + a, n, 10, 20),
    N(e, 8, 5 + a, r, 2, 20),
    N(e, 16, 5 + a, i, 2, 20),
    N(e, 10, 2 + a, n, 6, 3),
    N(e, 12, 0 + a, n, 2, 2),
    N(e, 10, 2 + a, r, 1, 3),
    N(e, 8, 24 + a, i, 10, 1),
    N(e, 10, 7 + a, lg, 6, 1),
    N(e, 12, 6 + a, lg, 2, 3),
    N(e, 10, 20 + a, cg.red, 2, 1),
    N(e, 14, 21 + a, cg.red, 2, 1),
    N(e, 12, 22 + a, cg.red, 1, 2),
    P(e, 13, 13 + a, 2.2, 2.2, cg.black),
    N(e, 12, 14 + a, cg.black, 2, 4),
    N(e, 12, 13 + a, cg.red, 2, 2),
    N(e, 12, 13 + a, t === 1 || t === 2 ? cg.core : cg.red),
    N(e, 15, 9 + a, cg.red, 1, 3));
  let o = [0, 1, 1, 0][t];
  for (let t of [1, 20])
    (N(e, t, 12 + o, n, 5, 6),
      N(e, t, 12 + o, r, 5, 1),
      N(e, t + 4, 13 + o, i, 1, 5),
      N(e, t + 2, 14 + o, t < 10 ? lg : cg.red, 1, 2));
}
function Ng(e, t) {
  let n = `#2a1f24`,
    r = `#ff7a1a`,
    i = `#ffd166`,
    a = [0, 1, 0, -1][t];
  (N(e, 6 + a, 13, `#150e12`, 2, 4),
    N(e, 9 - a, 13, n, 2, 4),
    N(e, 16 - a, 13, `#150e12`, 2, 4),
    N(e, 19 + a, 13, n, 2, 4),
    N(e, 9 - a, 16, r, 2, 1),
    N(e, 19 + a, 16, r, 2, 1));
  for (let n = 0; n < 4; n++)
    N(e, 1 + n, 5 + ((n + t) % 2) - (n === 0), n % 2 ? i : r, 1, 3 - (n % 2));
  (P(e, 13, 10, 8.5, 4, n),
    P(e, 13, 8.5, 7, 2, `#4a3538`),
    [
      [8, 10],
      [9, 11],
      [10, 11],
      [13, 9],
      [14, 10],
      [15, 10],
      [17, 12],
      [18, 11],
      [11, 13],
      [20, 9],
    ].forEach(([n, a], o) => N(e, n, a, (o + t) % 3 == 0 ? i : r)));
  for (let n = 0; n < 6; n++) {
    let a = 2 + ((n + t * 2) % 3);
    N(e, 15 + n, 6 - a, n % 2 ? i : r, 1, a);
  }
  (P(e, 22, 7, 3.5, 3, n),
    N(e, 24, 8, n, 3, 2),
    N(e, 22, 6, i, 2, 1),
    N(e, 24, 10, r, 3, 1),
    N(e, 6 + t * 2, 2 - (t % 2), i),
    N(e, 11 - t, 1 + (t % 2), r));
}
function Pg(e, t) {
  let n = `#8ec5e8`,
    r = `#9fb0bf`,
    i = `#6f8494`,
    a = `#3e4a5a`,
    o = `#2a3440`,
    s = `#1f2833`,
    c = [0, -1, -1, 0][t];
  for (let t = 17; t <= 25; t++) {
    let r = 4.5 + (t - 17) * 0.4;
    for (let i = Math.round(9 - r); i <= Math.round(9 + r); i++)
      N(e, i, t + c, i > 9 + r / 3 ? n : `#bfe0f5`);
  }
  (N(e, 5, 19 + c, `#ffffff`, 1, 3),
    N(e, 7, 23 + c, `#e6fdff`, 2, 1),
    N(e, 11, 18 + c, n, 1, 4),
    N(e, 4, 10 + c, a, 10, 8),
    N(e, 3, 11 + c, a, 1, 6),
    N(e, 14, 11 + c, o, 1, 6),
    N(e, 12, 10 + c, o, 2, 8),
    N(e, 3, 17 + c, o, 1, 1),
    N(e, 14, 17 + c, o, 1, 2),
    N(e, 5, 9 + c, `#dfe9f2`, 8, 1),
    N(e, 6, 10 + c, `#b9cfe0`, 6, 1),
    N(e, 6, 12 + c, cg.red, 1, 3),
    N(e, 6, 13 + c, cg.core),
    N(e, 8, 13 + c, r, 3, 2),
    N(e, 8, 14 + c, i, 3, 1),
    N(e, 6, 3 + c, r, 5, 6),
    N(e, 10, 3 + c, i, 1, 6),
    N(e, 5, 2 + c, s, 7, 2),
    N(e, 5, 4 + c, s, 1, 6),
    N(e, 11, 4 + c, s, 1, 5),
    N(e, 6, 4 + c, s, 1, 1),
    N(e, 7, 5 + c, `#e6fdff`),
    N(e, 9, 5 + c, `#e6fdff`),
    N(e, 8, 7 + c, `#1a2030`, 1, 2),
    N(e, 4, 18 + c, `#e6fdff`, 1, 2),
    N(e, 13, 18 + c, `#e6fdff`, 1, 3),
    t >= 2 &&
      (N(e, 13, 4 - (t - 2) * 2, `#bff0ff`, 2, 2),
      N(e, 14, 2 - (t - 2) * 2, `#bff0ff`, 1, 2)));
}
function Fg(e, t) {
  let n = `#6f7a62`,
    r = `#4f5a44`,
    i = `#3a4230`,
    a = `#5a7a3a`,
    o = `#8a8f99`,
    s = `#5a5f69`,
    c = [0, 1, 0, -1][t];
  ([
    [7, 9],
    [6, 10],
    [5, 11],
    [4, 12],
    [3, 13],
    [3, 14],
    [2, 15],
    [2, 16],
    [1, 17],
    [1, 18],
    [1, 19],
    [0, 20],
    [0, 21],
  ].forEach(([t, n], r) => N(e, t, n, r === 6 ? cg.red : r % 2 ? o : s)),
    N(e, 8 + c, 16, r, 2, 5),
    N(e, 12 - c, 16, r, 2, 5),
    N(e, 7 + c, 20, i, 3, 1),
    N(e, 11 - c, 20, i, 3, 1),
    N(e, 7, 8, i, 8, 9),
    N(e, 7, 8, `#4a5440`, 2, 9));
  for (let n = 7; n < 15; n += 2) N(e, n, 16 + ((n + t) % 2), i);
  (N(e, 7, 9, a, 1, 4),
    N(e, 13, 9, a, 1, 3),
    N(e, 10, 10, cg.red, 1, 3),
    N(e, 10, 11, cg.core),
    N(e, 13, 10 + (t % 2), r, 5, 2),
    N(e, 15, 10 + (t % 2), s, 1, 2),
    N(e, 18, 10 + (t % 2), n),
    N(e, 18, 12 + (t % 2), n),
    N(e, 10, 2, n, 5, 6),
    N(e, 9, 3, n, 1, 4),
    N(e, 10, 2, r, 1, 6),
    N(e, 9, 1, `#2a2e22`, 6, 2),
    N(e, 9, 3, `#2a2e22`, 2, 5),
    N(e, 11, 3, `#2a2e22`, 1, 3),
    N(e, 13, 4, `#1a0a0e`, 2, 1),
    N(e, 13, 4, cg.core),
    N(e, 14, 4, cg.red),
    N(e, 12, 7, `#1a0a0e`, 3, 1),
    N(e, 13, 8, r, 2, 1),
    N(e, 7, 8, o, 7, 1),
    N(e, 7, 8, `#b9bec8`, 2, 1));
}
var Ig = {
    boar: { w: 31, h: 19, ax: 15, ay: 17, draw: Eg },
    salamander: { w: 35, h: 15, ax: 17, ay: 13, draw: Dg },
    rimebear: { w: 35, h: 27, ax: 17, ay: 25, draw: Og },
    thunderhawk: { w: 29, h: 23, ax: 15, ay: 22, draw: kg },
    crawler: { w: 31, h: 15, ax: 15, ay: 13, draw: Ag },
    veilmoth: { w: 26, h: 23, ax: 14, ay: 22, draw: jg },
    sentinel: { w: 26, h: 30, ax: 13, ay: 28, draw: Mg },
    cinderhound: { w: 28, h: 18, ax: 14, ay: 16, draw: Ng },
    chorister: { w: 18, h: 27, ax: 9, ay: 25, draw: Pg },
    chainbound: { w: 20, h: 22, ax: 10, ay: 20, draw: Fg },
    barrowhusk: { w: 19, h: 24, ax: 10, ay: 22, draw: Yg },
    feverhusk: { w: 18, h: 24, ax: 9, ay: 22, draw: Zg },
    boghusk: { w: 18, h: 24, ax: 9, ay: 22, draw: Qg },
  },
  Lg = new Map();
function Rg(e) {
  let t = Lg.get(e);
  if (t) return t;
  let n = Ig[e],
    r = [];
  for (let e = 0; e < 4; e++) {
    let [t, i] = M(n.w + 2, n.h + 2);
    (i.translate(1, 1), n.draw(i, e), F(t), r.push(t));
  }
  let i = {
    frames: r,
    flipped: r.map(Ip),
    flash: r.map((e) => Fp(e)),
    ax: n.ax + 1,
    ay: n.ay + 1,
  };
  return (Lg.set(e, i), i);
}
var zg = [
  `#050208`,
  `#12050a`,
  `#2a0710`,
  `#3a0a18`,
  `#5a0a1a`,
  `#861222`,
  `#b01a2a`,
  `#e0484e`,
  `#ffffff`,
].map(Lp);
