// index-BTsv3a2s 49 — math
// Lines 33360-33683 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Cg(e, t, n, r, i, a) {
  let o = (t, n, r, i = 1, a = 1) => N(e, t + 2, n + 2, r, i, a),
    s = Sg[t],
    c = n === 2,
    l = n === 1,
    u = i;
  (o(c ? 6 + r : 5, 22 - (c ? 0 : Math.max(0, r)), `#2b1d16`, 3, 2),
    o(c ? 8 - r : 9, 22 - (c ? 0 : Math.max(0, -r)), `#2b1d16`, 3, 2),
    o(5, 18, s.legs, 7, 4),
    t === `refugee` && c && o(2, 10 + u, `#a08a64`, 4, 7),
    t === `lord` && c && o(3, 10 + u, `#2a0f1a`, 3, 11));
  let d = aee[t];
  if (d)
    for (let e = d.top; e <= 23; e++) {
      let t = d.base + (e - d.top) * (c ? d.flare * 0.7 : d.flare),
        n = Math.round(7.5 - t),
        r = Math.round(7.5 + t),
        i = e + (e < 18 ? u : 0);
      for (let e = n; e <= r; e++)
        o(e, i, e <= n ? d.light : e >= r - 1 ? d.dark : d.main);
      e === 23 && o(n, i, d.hem, r - n + 1, 1);
    }
  (o(c ? 5 : 4, 11 + u, s.tunic, c ? 7 : 8, 8),
    o(c ? 9 : 10, 11 + u, s.tunicD, 2, 8),
    o(4, 17 + u, s.belt, 8, 1),
    t === `forgewright` && !l && o(c ? 7 : 5, 12 + u, `#6b4424`, c ? 4 : 6, 9),
    t === `forgewright` &&
      !l &&
      !c &&
      (o(5, 17 + u, `#8c8698`, 2, 2), o(5, 17 + u, lg)),
    t === `refugee` &&
      l &&
      (o(5, 10 + u, `#a08a64`, 6, 7), o(5, 13 + u, `#6b4424`, 6, 1)),
    t === `faithful` &&
      (o(c ? 5 : 3, 10 + u, `#8f8a85`, c ? 7 : 10, 3),
      o(c ? 5 : 3, 12 + u, `#6f6a66`, c ? 7 : 10, 1)),
    t === `crier` &&
      !l &&
      (o(c ? 8 : 7, 11 + u, `#c9a64a`, c ? 1 : 2, 7),
      c || o(6, 13 + u, `#c9a64a`, 4, 1)),
    t === `baker` &&
      !l &&
      (o(c ? 7 : 5, 12 + u, `#f0ebe0`, c ? 4 : 6, 9),
      o(c ? 7 : 5, 12 + u, `#d9d2c0`, c ? 4 : 6, 1)),
    t === `lord` &&
      (l
        ? (o(4, 10 + u, `#3a0f1c`, 8, 11), o(4, 10 + u, `#e0b64a`, 8, 1))
        : c
          ? o(7, 11 + u, `#e0b64a`, 3, 1)
          : (o(5, 11 + u, `#e0b64a`, 6, 1),
            o(7, 12 + u, `#e0b64a`, 2, 2),
            o(7, 12 + u, `#fff3c4`))),
    t === `lady` &&
      !l &&
      (o(c ? 7 : 6, 11 + u, `#e0b64a`, c ? 3 : 4, 1),
      c || o(7, 12 + u, `#8ef6ff`)));
  let f = a && t !== `baker`;
  if (
    (c
      ? (o(9, 12 + u + (f ? -3 : 0), s.sleeve, 3, 2),
        o(12, 13 + u + (f ? -4 : 0), s.skin))
      : (o(3, 11 + u, s.sleeve, 1, 5),
        o(3, 16 + u, s.skin),
        f && !l
          ? (o(12, 7 + u, s.sleeve, 1, 5), o(12, 6 + u, s.skin))
          : (o(12, 11 + u, s.sleeve, 1, 5), o(12, 16 + u, s.skin)),
        t === `faithful` && !l && o(3, 13 + u, `#9aa0a8`, 1, 1)),
    o(5, 5 + u, s.skin, 6, 6),
    l
      ? o(5, 5 + u, s.hair, 6, 5)
      : c
        ? (o(9, 7 + u, `#1b1030`),
          o(5, 5 + u, s.hair, 3, 4),
          o(10, 8 + u, s.skinD))
        : (o(10, 5 + u, s.skinD, 1, 6),
          o(6, 7 + u, `#1b1030`),
          o(9, 7 + u, `#1b1030`),
          o(7, 9 + u, s.skinD, 2, 1)),
    t === `refugee`)
  ) {
    let e = `#4f6a73`,
      t = `#3a4f57`;
    (o(4, 3 + u, e, 8, 3),
      o(5, 2 + u, e, 6, 1),
      l
        ? o(4, 5 + u, e, 8, 7)
        : c
          ? o(4, 5 + u, e, 3, 6)
          : (o(4, 5 + u, e, 1, 6),
            o(11, 5 + u, t, 1, 6),
            o(6, 5 + u, `#6b4a2a`, 4, 1)),
      o(c ? 5 : 3, 10 + u, e, c ? 6 : 10, 2),
      o(c ? 10 : 11, 10 + u, t, 2, 2));
  } else if (t === `miner` || t === `faithful`) {
    if ((o(4, 3 + u, `#5a3a22`, 8, 3), o(4, 5 + u, `#3d2716`, 8, 1), !l)) {
      let e = c ? 9 : 7;
      (o(e, 3 + u, `#3a3438`, 2, 2),
        o(e, 3 + u, t === `faithful` ? cg.red : `#ffcf6a`, 1, 1));
    }
    let e = c ? 13 : l ? 2 : 13,
      n = a ? -1 : 4;
    (o(e, n + u, `#6b4424`, 1, a ? 12 : 13),
      o(e - 2, n + u, `#8a8f99`, 5, 1),
      o(e - 2, n + 1 + u, `#5a5f69`, 1, 1),
      o(e + 2, n + 1 + u, `#5a5f69`, 1, 1),
      t === `faithful` &&
        !l &&
        (o(c ? 3 : 2, 17 + u, `#3a3438`, 3, 4),
        o(c ? 4 : 3, 18 + u, cg.red, 1, 2),
        o(c ? 4 : 3, 18 + u, cg.core)));
  } else if (t === `forgewright`) {
    (o(5, 4 + u, s.hair, 6, 2),
      o(4, 5 + u, `#9c3b2e`, 8, 1),
      l || o(c ? 9 : 5, 11 + u, s.skinD, 1, 1));
    let e = c ? 13 : l ? 2 : 13,
      t = a ? 3 : 13;
    (o(e, t + u, `#6b4424`, 1, 6),
      o(e - 1, t - 1 + u, `#6f7580`, 3, 2),
      o(e - 1, t - 1 + u, `#a7adb8`, 3, 1));
  } else if (t === `sweeper`) {
    (o(4, 3 + u, `#8a4a3a`, 8, 3),
      o(4, 5 + u, `#6a3a2e`, 8, 1),
      l && o(5, 6 + u, `#8a4a3a`, 6, 3));
    let e = c ? 13 : l ? 2 : 13;
    if (a && !l) {
      for (let t = 0; t < 9; t++)
        o(e - Math.round(t * 0.7), 13 + t + (t < 4 ? u : 0), `#b08a4a`);
      (o(e - 9, 21, `#c9a86a`, 4, 2), o(e - 9, 23, `#a8864a`, 4, 1));
    } else
      (o(e, 7 + u, `#b08a4a`, 1, 14),
        o(e - 1, 20, `#c9a86a`, 3, 3),
        o(e - 1, 23, `#a8864a`, 3, 1));
  } else if (t === `crier`) {
    (o(4, 3 + u, `#3a2a22`, 8, 2),
      o(3, 5 + u, `#2a1d16`, 10, 1),
      o(10, 1 + u, `#c2361f`, 1, 3),
      o(11, 0 + u, `#c2361f`, 1, 2));
    let e = c ? 12 : l ? 2 : 12,
      t = a && !l ? 2 : 17;
    (o(e + 1, t - 1 + u, `#6b4424`, 1, 2),
      o(e, t + 1 + u, `#c9a64a`, 3, 2),
      o(e + 1, t + u, `#c9a64a`, 1, 1),
      o(e, t + 3 + u, `#8a6f2e`, 3, 1),
      a &&
        !l &&
        (o(e - 2, t + 1 + u, `#fff3c4`),
        o(e + 4, t + u, `#fff3c4`),
        o(e + 4, t + 3 + u, `#fff3c4`)));
  } else if (t === `baker`)
    (o(4, 3 + u, `#f4f0e6`, 8, 3),
      o(5, 2 + u, `#f4f0e6`, 6, 1),
      o(4, 5 + u, `#d9d2c0`, 8, 1),
      !l && !c && o(6, 8 + u, `#f4f0e6`));
  else if (t === `lord`) {
    (o(5, 4 + u, s.hair, 6, 2),
      l || o(c ? 8 : 6, 10 + u, s.hair, c ? 3 : 4, 1),
      c && o(5, 5 + u, s.hair, 2, 3),
      o(5, 4 + u, `#e0b64a`, 6, 1));
    let e = c ? 13 : l ? 2 : 13;
    a
      ? (o(e, 0 + u, `#c9ced8`, 1, 9),
        o(e, 0 + u, `#ffffff`),
        o(e - 1, 9 + u, `#e0b64a`, 3, 1),
        o(e, 10 + u, `#5a3a22`, 1, 2))
      : (o(e, 15 + u, `#e0b64a`, 1, 1), o(e, 16 + u, `#3a2a22`, 1, 6));
  } else
    t === `lady` &&
      (o(5, 4 + u, s.hair, 6, 2),
      l
        ? o(5, 5 + u, s.hair, 6, 9)
        : c
          ? o(5, 5 + u, s.hair, 3, 8)
          : (o(4, 5 + u, s.hair, 1, 8),
            o(11, 5 + u, s.hair, 1, 8),
            o(5, 5 + u, `#9a8a9a`, 1, 1)),
      o(5, 4 + u, `#e0b64a`, 6, 1),
      l || o(c ? 9 : 7, 4 + u, `#8ef6ff`));
  (t === `refugee` &&
    a &&
    !l &&
    !c &&
    (o(12, 6 + u, s.sleeve, 1, 5),
    o(13, 4 + u, s.sleeve, 1, 3),
    o(13, 3 + u, s.skin)),
    t === `baker` &&
      a &&
      !l &&
      (c
        ? (o(10, 15 + u, s.sleeve, 3, 2),
          o(13, 16 + u, s.skin),
          o(12, 17 + u, `#e8d9b0`, 3, 2))
        : (o(4, 15 + u, s.sleeve, 2, 2),
          o(10, 15 + u, s.sleeve, 2, 2),
          o(6, 16 + u, s.skin),
          o(9, 16 + u, s.skin),
          o(6, 17 + u, `#e8d9b0`, 4, 2),
          o(7, 17 + u, `#fff3d9`, 2, 1))));
}
var wg = new Map();
function Tg(e) {
  if (e === `archmage`) return fh(`npc:archmage`, ree, iee);
  let t = nm(`realm:${e}`);
  if (t) return t;
  let n = wg.get(e);
  if (n) return n;
  let r;
  if (e === `idrisRemembered`) {
    let e = Jh(`idris`).frames.map((e) => e.map(og));
    r = { frames: e, flash: e.map((e) => e.map((e) => Fp(e))) };
  } else {
    let t = [
        [0, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [0, 0],
      ],
      n = [];
    for (let r of [0, 1, 2])
      n[r] = t.map(([t, n], i) => {
        let [a, o] = M(20, 28);
        return (Cg(o, e, r, t, n, i === 6), F(a), a);
      });
    ((n[3] = n[2].map(Ip)),
      (r = { frames: n, flash: n.map((e) => e.map((e) => Fp(e))) }));
  }
  return (tm(`realm:${e}`, r), wg.set(e, r), r);
}
function Eg(e, t) {
  let n = `#6b4a33`,
    r = `#4a3222`,
    i = [0, 1, 0, -1][t];
  (N(e, 6 + i, 14, r, 2, 4),
    N(e, 9 - i, 14, n, 2, 4),
    N(e, 18 - i, 14, r, 2, 4),
    N(e, 21 + i, 14, n, 2, 4));
  for (let t of [6 + i, 9 - i, 18 - i, 21 + i]) N(e, t, 17, `#2a1d16`, 2, 1);
  ([2, 3, 4, 5, 4, 3, 2].forEach((t, n) => {
    let r = 7 + n * 2,
      i = 6 - t + +(n === 0 || n === 6);
    (N(e, r, i, n % 3 == 1 ? `#b58aff` : `#44c9f0`, 2, t + 1),
      N(e, r, i, `#8ef6ff`, 1, Math.max(1, t - 1)));
  }),
    P(e, 14, 10, 10, 5, n),
    P(e, 14, 12.5, 8.5, 2.5, r),
    P(e, 13, 8, 7, 2, `#8a6446`),
    N(e, 3, 8 - (t % 2), r, 2, 1),
    N(e, 2, 7 - (t % 2), r, 1, 1),
    P(e, 24, 10, 4, 3.5, n),
    N(e, 22, 5, r, 2, 3),
    N(e, 27, 9, `#c98f7a`, 3, 3),
    N(e, 29, 10, `#5a2a22`, 1, 1),
    N(e, 24, 8, `#1a0e08`),
    N(e, 27, 12, `#f3e2c0`, 1, 2),
    N(e, 28, 12, `#f3e2c0`));
}
function Dg(e, t) {
  let n = `#2a1f24`,
    r = `#150e12`,
    i = `#ff7a1a`,
    a = `#ffd166`,
    o = [0, 1, 0, -1][t];
  (N(e, 24 - o, 11, r, 2, 2), N(e, 9 + o, 11, r, 2, 2));
  for (let r = 0; r <= 9; r++) {
    let i = 9 + Math.round(Math.sin((r + t * 2) * 0.6)),
      a = 1 + Math.floor(r / 3);
    N(e, r, i - Math.floor(a / 2), n, 1, a);
  }
  let s = 9 + Math.round(Math.sin(t * 2 * 0.6));
  (N(e, 0, s - 2, t % 2 ? a : i, 1, 2),
    N(e, 1, s - 1, i, 1, 1),
    P(e, 17, 9, 9, 3.2, n),
    N(e, 10, 11, `#c2361f`, 14, 1),
    P(e, 28, 8, 4, 2.6, n),
    N(e, 31, 8, n, 2, 2),
    N(e, 28, 6, a, 2, 1),
    N(e, 29, 6, `#2a0b06`),
    t === 2 && N(e, 33, 9, `#ff5a7a`, 2, 1));
  for (let n = 0; n < 6; n++)
    N(e, 10 + n * 3, 7 + (n % 2), (n + t) % 3 == 0 ? a : i, 2, 1);
  (N(e, 22 + o, 11, n, 2, 3),
    N(e, 21 + o, 13, n, 4, 1),
    N(e, 12 - o, 11, n, 2, 3),
    N(e, 11 - o, 13, n, 4, 1));
}
function Og(e, t) {
  let n = `#dfe9f2`,
    r = `#a9bccf`,
    i = `#6f86a0`,
    a = [0, 1, 0, -1][t];
  (N(e, 9 - a, 19, i, 4, 6),
    N(e, 25 + a, 19, i, 4, 6),
    P(e, 15, 14, 11, 7.5, n),
    P(e, 16, 18, 9.5, 3.5, r),
    P(e, 20, 9.5, 5.5, 4, n));
  for (let [t, n, r] of [
    [14, 5, 4],
    [17, 2, 6],
    [20, 3, 5],
    [23, 5, 4],
  ])
    (N(e, t, n, `#8ef6ff`, 1, r),
      N(e, t + 1, n + 1, `#44c9f0`, 1, r - 1),
      N(e, t, n, `#ffffff`));
  (N(e, 6 + a, 19 - Math.max(0, a), r, 5, 7),
    N(e, 22 - a, 19 - Math.max(0, -a), r, 5, 7),
    N(e, 6 + a, 25, i, 5, 1),
    N(e, 22 - a, 25, i, 5, 1),
    N(e, 26 - a, 25, `#f4f8ff`, 1, 1),
    P(e, 28.5, 14, 5, 4.6, i),
    P(e, 28.5, 13.6, 4.4, 4, n),
    P(e, 28.5, 16.5, 3.5, 1.5, r),
    N(e, 25, 9, n, 2, 2),
    N(e, 25, 9, i, 1, 1),
    N(e, 29, 9, n, 2, 2),
    N(e, 30, 9, i, 1, 1),
    N(e, 31, 14, n, 3, 3),
    N(e, 31, 16, r, 3, 1),
    N(e, 33, 14, `#1a2030`, 1, 2),
    N(e, 29, 12, `#1a2030`),
    N(e, 32, 17, `#1a2030`, 2, 1));
}
