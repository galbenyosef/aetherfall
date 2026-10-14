// assets__index-BTsv3a2s 150 — math
// Lines 88920-89210 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Mz(e, t) {
  let n = jz.get(e);
  return (n || ((n = t()), jz.set(e, n)), n);
}
function Nz(e, t) {
  let n = Math.sin(e * 127.1 + t * 311.7) * 43758.5453;
  return n - Math.floor(n);
}
function Pz(e, t, n, r, i, a) {
  ((t = Math.round(t)),
    (n = Math.round(n)),
    (r = Math.round(r)),
    (i = Math.round(i)));
  let o = Math.abs(r - t),
    s = -Math.abs(i - n),
    c = t < r ? 1 : -1,
    l = n < i ? 1 : -1,
    u = o + s;
  for (; N(e, t, n, a), t !== r || n !== i;) {
    let e = 2 * u;
    (e >= s && ((u += s), (t += c)), e <= o && ((u += o), (n += l)));
  }
}
function Fz(e, t, n, r, i, a, o) {
  (P(e, t, n + a, r, i, o.dark),
    N(e, t - r, n, o.lo, r * 2, a),
    N(e, t - r, n, o.mid, Math.round(r * 0.7), a),
    P(e, t, n, r, i, o.mid),
    P(e, t - 1, n - 0.5, r - 1.5, i - 1, o.hi));
}
var Lre = {
    meadow: { hi: `#c4c0cf`, mid: `#9994a6`, lo: `#6c6680`, dark: `#46415a` },
    grove: { hi: `#9aa894`, mid: `#71806c`, lo: `#4e5a4c`, dark: `#303a31` },
    rime: { hi: `#eef4fb`, mid: `#c3d1e2`, lo: `#8a9dba`, dark: `#5c6f8e` },
    basalt: { hi: `#6a6070`, mid: `#4a4252`, lo: `#302a36`, dark: `#1c1820` },
  },
  Iz = {
    quiet: {
      hi: `#a8c8d2`,
      mid: `#6a98a8`,
      lo: `#44667c`,
      rune: `#4d8a96`,
      runeDim: `#35555e`,
      core: `#cfe6ea`,
    },
    rite: {
      hi: `#bdfcff`,
      mid: `#44c9f0`,
      lo: `#2a7fc9`,
      rune: Oz,
      runeDim: `#2f6f7c`,
      core: kz,
    },
    singing: {
      hi: `#f0feff`,
      mid: `#7ef9ff`,
      lo: `#2aa8c0`,
      rune: Oz,
      runeDim: Oz,
      core: kz,
    },
    hollowed: {
      hi: Y.hot,
      mid: Y.red,
      lo: Y.deep,
      rune: Y.red,
      runeDim: Y.dark,
      core: kz,
    },
  };
function Rre(e) {
  return e === `reclaim` ? Iz.rite : Iz[e];
}
function zre(e) {
  switch (e) {
    case `quiet`:
      return { color: `#6a98a8`, radius: 3, intensity: 0.35 };
    case `rite`:
      return { color: `#44c9f0`, radius: 7, intensity: 0.9 };
    case `reclaim`:
      return { color: `#9fe8ff`, radius: 6, intensity: 0.7 };
    case `singing`:
      return { color: Oz, radius: 8, intensity: 1 };
    case `hollowed`:
      return { color: Y.red, radius: 6, intensity: 0.8 };
  }
}
function Bre(e) {
  return { x: 20, y: 23 + Lz(e) };
}
function Lz(e) {
  return Math.round(Math.sin((e / 8) * Math.PI * 2) * 1.2);
}
function Rz(e, t, n, r, i) {
  let a = { x: 20 + t * 6, y: 39 },
    o = { x: 20 + t * 17, y: 27 },
    s = { x: 20 + t * 6, y: 11 };
  for (let r = 0; r <= 40; r++) {
    let c = r / 40;
    if (i && c > 0.72) break;
    let l = (1 - c) * (1 - c) * a.x + 2 * (1 - c) * c * o.x + c * c * s.x,
      u = (1 - c) * (1 - c) * a.y + 2 * (1 - c) * c * o.y + c * c * s.y,
      d = c < 0.22 ? 4 : c < 0.6 ? 3 : c < 0.88 ? 2 : 1,
      f = Math.abs(c - 0.3) < 0.02 || Math.abs(c - 0.56) < 0.02;
    for (let r = 0; r < d; r++) {
      let i = Math.round(l) - t * r,
        a = f ? n.dark : r === 0 ? n.lo : r === d - 1 ? n.hi : n.mid;
      N(e, i, Math.round(u), a);
    }
  }
  (i
    ? (N(e, 20 + t * 14, 19, n.dark, 2, 1), N(e, 20 + t * 13, 18, n.lo))
    : (N(e, 20 + t * 5, 11, n.mid), N(e, 20 + t * 4, 12, n.hi)),
    N(e, 20 + t * 11, 24, r),
    N(e, 20 + t * 11, 26, r));
}
function Vre(e, t, n, r, i, a, o) {
  let s = Math.round(r * 0.32);
  for (let a = 0; a < r; a++) {
    let o =
      a <= s
        ? Math.max(1, Math.round((a / s) * 5))
        : Math.max(1, Math.round(5 * (1 - (a - s) / (r - s))));
    for (let r = t - o; r < t + o; r++) {
      let c = (r - (t - o)) / (o * 2),
        l = c < 0.34 ? i.hi : c < 0.67 ? i.mid : i.lo;
      (a === s && (l = c < 0.67 ? i.hi : i.mid), N(e, r, n + a, l));
    }
  }
  if (a) {
    for (let i = 3; i < r - 3; i++)
      N(e, t - +(i % 5 == 0), n + i, i > s - 2 && i < s + 6 ? Y.core : Y.hot);
    (Pz(e, t - 3, n + s - 2, t + 1, n + s + 3, Y.black),
      Pz(e, t + 3, n + s + 6, t - 1, n + s + 10, Y.black),
      N(e, t + 2, n + r - 6, Y.black));
  } else {
    let a = (o * 2) % (r + 6);
    for (let o = 0; o < 3; o++) {
      let s = n + 2 + a - o;
      s > n + 1 && s < n + r - 2 && N(e, t - 3 + Math.floor(o / 2), s, i.core);
    }
    N(e, t - 1, n + s - 1, i.core, 2, 3);
  }
}
function Hre(e, t, n, r, i) {
  [
    [8, 50],
    [14, 51],
    [20, 51],
    [26, 51],
    [32, 50],
    [13, 44],
    [20, 45],
    [27, 44],
  ].forEach(([a, o], s) => {
    let c = s < n,
      l = i && Nz(s, r) < 0.3,
      u = c ? (l ? Y.hot : t.rune) : t.runeDim;
    (N(e, a, o, u), N(e, a, o + 1, c ? I(u, -0.25) : t.runeDim));
  });
}
function Ure(e, t, n, r) {
  let i = Az(e);
  if (t === `meadow`) {
    for (let [e, t, r] of [
      [5, 49, 3],
      [30, 48, 4],
      [11, 42, 2],
      [26, 41, 3],
    ])
      i(e, t, n ? `#4a4432` : `#5f9a3a`, r, 1);
    if (!n)
      for (let [e, t, n] of [
        [3, 54, `#ffd166`],
        [36, 53, `#ff9ad0`],
        [34, 55, `#ffffff`],
      ])
        i(e, t, n);
  } else if (t === `grove`) {
    let t = n ? `#2a1a1a` : `#5a3a22`;
    (Pz(e, 2, 55, 7, 49, t),
      Pz(e, 7, 49, 10, 43, t),
      Pz(e, 37, 54, 33, 48, t),
      i(33, 47, t, 2, 1),
      n ||
        (i(4, 53, `#7ef9ff`, 2, 1),
        i(4, 54, `#d8f6ff`),
        i(34, 55, `#7ef9ff`, 2, 1),
        i(35, 56, `#d8f6ff`),
        r % 4 < 2 && i(5, 52, `#e6fdff`)));
  } else if (t === `rime`) {
    (i(6, 45, `#ffffff`, 10, 1),
      i(24, 45, `#ffffff`, 9, 1),
      i(10, 40, `#ffffff`, 7, 1),
      i(12, 36, `#ffffff`, 4, 1));
    for (let [e, t] of [
      [11, 3],
      [15, 2],
      [25, 3],
      [29, 2],
    ])
      i(e, 44, `#bfeaff`, 1, t);
  } else {
    let t = n ? Y.red : r % 4 < 2 ? `#ff7a1a` : `#ffb347`;
    (Pz(e, 9, 52, 12, 49, t),
      Pz(e, 29, 53, 27, 49, t),
      i(18, 46, t, 3, 1),
      i(5, 53, `#6a5a70`, 2, 1),
      i(35, 52, `#6a5a70`));
  }
}
function Wre(e, t, n, r = 1) {
  let i = ((n % 8) + 8) % 8,
    a =
      t === `quiet`
        ? 0
        : t === `singing` || t === `hollowed`
          ? 8
          : Math.round(8 * Math.max(0, Math.min(1, r)));
  return Mz(`altar:${e}:${t}:${i}:${a}`, () => {
    let [n, r] = M(40, 60),
      o = t === `hollowed`,
      s = Lre[e],
      c = o
        ? {
            hi: I(s.hi, -0.35),
            mid: I(s.mid, -0.4),
            lo: I(s.lo, -0.45),
            dark: I(s.dark, -0.5),
          }
        : s,
      l = Rre(t),
      u = t === `quiet` || o ? 0 : Lz(i);
    (Fz(r, 20, 48, 17, 4.5, 5, c),
      Fz(r, 20, 42, 12.5, 3.5, 4, c),
      Fz(r, 20, 37, 8, 2.5, 3, c),
      Hre(r, l, a, i, o),
      o &&
        (Pz(r, 20, 38, 17, 44, Y.red),
        Pz(r, 17, 44, 13, 52, Y.mid),
        Pz(r, 22, 40, 27, 46, Y.mid)),
      Ure(r, e, o, i));
    let d = (e) => {
      for (let t = 0; t < 8; t++) {
        let n = (t / 8) * Math.PI * 2 + (i / 8) * (Math.PI / 4);
        if (Math.sin(n) > 0 !== e) continue;
        let a = Math.round(20 + Math.cos(n) * 8.5),
          o = Math.round(25 + u + Math.sin(n) * 3);
        (N(r, a, o, e ? kz : `#2aa8c0`, 1, 2),
          N(r, a + 1, o, e ? Oz : `#2aa8c0`));
      }
    };
    (t === `singing` && d(!1),
      Rz(r, -1, c, a ? l.rune : l.runeDim, o),
      Rz(r, 1, c, a ? l.rune : l.runeDim, !1));
    let f = t === `quiet` ? 12 : 11 + u;
    if (
      (Vre(r, 20, f, 22, l, o, i),
      t === `singing` && d(!0),
      t === `rite` || t === `reclaim`)
    ) {
      let e = i % 2 == 0;
      (N(r, 20, f - 3 - !!e, kz),
        N(r, 20, f - 2, Oz),
        N(r, 14 - !!e, f + 7, Oz),
        N(r, 26 + +!!e, f + 7, Oz),
        N(r, 20, f + 24 + +!!e, kz));
    }
    if (t !== `quiet`)
      for (let e = 0; e < 4; e++) {
        let t = (i + e * 2) % 8;
        N(
          r,
          12 + Math.floor(Nz(e, 3) * 17),
          o ? 12 + t * 3 : 34 - t * 4,
          o ? (e % 2 ? Y.red : Y.core) : e % 2 ? Oz : kz,
        );
      }
    return (F(n, Dz), n);
  });
}
var Gre = [
  [`x.x`, `.x.`, `x.x`],
  [`xxx`, `x..`, `xxx`],
  [`.x.`, `xxx`, `.x.`],
  [`x..`, `xxx`, `..x`],
  [`xxx`, `.x.`, `.x.`],
  [`x.x`, `xxx`, `x.x`],
  [`..x`, `.x.`, `x..`],
  [`xx.`, `x.x`, `.xx`],
];
