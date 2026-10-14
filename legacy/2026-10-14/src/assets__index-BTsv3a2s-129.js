// assets__index-BTsv3a2s 129 — math
// Lines 82091-82431 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function ZM(e) {
  let [t, n] = M(104, 136);
  for (let e = 44; e < 134; e++) {
    let t = (e - 44) / 90,
      r = Math.round(12 + t * 10);
    for (let t = 52 - r; t < 52 + r; t++) {
      let i = (t - 52) / r,
        a =
          (Math.floor(e / 4) + (Math.floor((t - 52 + 40) / 7) % 2)) % 2
            ? `#d9c9a8`
            : `#cdbfa6`;
      (e % 4 == 0 && (a = `#a8987a`),
        i > 0.45 && (a = I(a, -0.18)),
        i < -0.7 && (a = I(a, 0.08)),
        N(n, t, e, a));
    }
  }
  (N(n, 29, 131, CA.mid, 46, 4),
    IA(n, 48, 131, 8, 12, { arched: !0 }),
    FA(n, 49, 68, 5, 6, {}));
  for (let e = 26; e <= 46; e++) {
    let t = (e - 26) / 20,
      r = Math.round(4 + Math.sqrt(t) * 12);
    for (let t = 52 - r; t < 52 + r; t++)
      N(n, t, e, (e - 44) % 4 == 0 || t > 52 + r * 0.4 ? `#523a24` : `#7a5a3a`);
  }
  let r = (e % 4) * 0.2 + 0.3;
  for (let e = 0; e < 4; e++) {
    let t = r + (e * Math.PI) / 2,
      i = Math.cos(t),
      a = Math.sin(t);
    for (let e = 3; e < 44; e++) {
      let t = 52 + i * e,
        r = 42 + a * e * 0.9;
      if ((N(n, Math.round(t), Math.round(r), `#4a3020`), e > 10))
        for (let o = 1; o < 8; o++) {
          let s = t - a * o,
            c = r + i * o * 0.9,
            l = e % 5 == 0 || o === 7;
          N(n, Math.round(s), Math.round(c), l ? `#6b4424` : `#efe3c8`);
        }
    }
  }
  return (
    P(n, 52, 42, 3, 3, `#3d2716`),
    F(t, wA),
    {
      c: t,
      ax: 52,
      ay: 134,
      lights: [{ x: 52, y: 71, r: 16, color: `#ffb347` }],
    }
  );
}
function QM() {
  let [e, t] = M(52, 104);
  for (let e of [8, 40]) N(t, e, 44, J.mid, 4, 58);
  for (let e = 0; e < 30; e++)
    (N(t, 11 + e, 60 + e, J.dk), N(t, 40 - e, 60 + e, J.dk));
  for (let e = 50; e < 102; e += 4) N(t, 22, e, J.lt, 8, 1);
  (N(t, 21, 48, J.st, 1, 54),
    N(t, 30, 48, J.st, 1, 54),
    N(t, 2, 36, J.st, 48, 12));
  for (let e = 2; e < 50; e += 4) N(t, e, 36, J.dk, 1, 12);
  (N(t, 2, 36, J.lt, 48, 1), N(t, 2, 47, J.dk, 48, 2));
  for (let e of [4, 45]) N(t, e, 16, J.mid, 3, 20);
  return (
    MA(t, 0, 51, 2, 17, it.brown, `shingle`, 0.5),
    N(t, 23, 22, `#2b2633`, 6, 8),
    N(t, 24, 23, `#ffe08a`, 4, 6),
    KA(t, 36, 38, 0, 12, 7),
    F(e, wA),
    {
      c: e,
      ax: 26,
      ay: 102,
      lights: [{ x: 26, y: 26, r: 40, color: `#ffd98a` }],
    }
  );
}
var $M = s({
    STALL_KINDS: () => aN,
    bannerPole: () => hN,
    barrel: () => cN,
    bench: () => pN,
    campfire: () => TN,
    cart: () => dN,
    cliff: () => LN,
    crates: () => lN,
    dummy: () => xN,
    fence: () => _N,
    forge: () => CN,
    fountain: () => nN,
    fruitTree: () => kN,
    gravestone: () => vN,
    guardian: () => NN,
    haybale: () => fN,
    iceTree: () => PN,
    logpile: () => bN,
    manaFountain: () => MN,
    obeliskStand: () => jN,
    planter: () => mN,
    ritualRing: () => AN,
    rowboat: () => wN,
    ruin: () => IN,
    runeStone: () => DN,
    runeTarget: () => SN,
    sacks: () => uN,
    scarecrow: () => yN,
    shardCluster: () => ON,
    signpost: () => gN,
    stall: () => oN,
    statue: () => sN,
    tent: () => EN,
    toRgb: () => kre,
    well: () => rN,
    wispCircle: () => FN,
  }),
  eN = (e, t) => ({ c: e, ax: 0, ay: e.height, lights: t }),
  tN = (e, t, n, r) => ({ c: e, ax: t, ay: n, lights: r });
function nN() {
  let [e, t] = M(48, 70);
  for (let e = 1; e < 47; e++) {
    let n = (e + 0.5 - 24) / 22.5,
      r = Math.sqrt(Math.max(0, 1 - n * n)) * 13,
      i = Math.round(53 + r);
    for (let r = i; r < i + 6; r++)
      N(t, e, r, r === i ? CA.hi : n > 0.4 ? CA.dk : CA.mid);
    e % 6 == 0 && N(t, e, i + 2, CA.dk, 1, 4);
  }
  (P(t, 24, 53, 22.5, 13.5, CA.lt),
    P(t, 24, 53, 20, 11, `#2f78bb`),
    P(t, 24, 54, 18, 9, `#3a86c8`));
  for (let e = 0; e < 14; e++)
    N(
      t,
      Math.round(10 + SA(e, 1, 3) * 28),
      Math.round(47 + SA(e, 2, 3) * 12),
      `#b4e0f5`,
      2,
      1,
    );
  (N(t, 21, 27, CA.st, 6, 27),
    N(t, 21, 27, CA.hi, 2, 27),
    N(t, 26, 27, CA.dk, 1, 27),
    P(t, 24, 27, 9, 4, CA.lt),
    N(t, 15, 27, CA.mid, 18, 3),
    P(t, 24, 26, 7, 2.5, `#3a86c8`));
  for (let e = 0; e < 10; e++) {
    let n = e < 3 ? e : Math.max(1, 3 - Math.floor((e - 3) / 3));
    N(t, 24 - n, 13 + e, e < 5 ? `#8ef6ff` : `#44c9f0`, n * 2, 1);
  }
  for (let e of [-1, 1])
    for (let n = 0; n < 12; n++) {
      let r = 24 + e * (8 + n * 0.6),
        i = 28 + n * n * 0.14 + n;
      N(t, Math.round(r), Math.round(i), n % 3 == 0 ? `#ffffff` : `#b4e0f5`);
    }
  return (F(e, wA), eN(e, [{ x: 24, y: 17, r: 30, color: `#44c9f0`, a: 0.8 }]));
}
function rN() {
  let [e, t] = M(32, 52);
  for (let e = 3; e < 29; e++) {
    let n = (e + 0.5 - 16) / 12.5,
      r = Math.sqrt(Math.max(0, 1 - n * n)) * 7,
      i = Math.round(39 + r);
    for (let r = i; r < i + 6; r++)
      N(
        t,
        e,
        r,
        r === i
          ? CA.hi
          : n > 0.4
            ? CA.dk
            : (Math.floor(e / 4) + Math.floor(r / 3)) % 2
              ? CA.mid
              : CA.st,
      );
  }
  return (
    P(t, 16, 39, 12.5, 7.5, CA.lt),
    P(t, 16, 39, 9.5, 5, `#10202f`),
    N(t, 5, 15, J.st, 3, 26),
    N(t, 24, 15, J.st, 3, 26),
    N(t, 6, 23, J.dk, 20, 2),
    N(t, 15, 24, `#2b2633`, 1, 10),
    N(t, 13, 33, J.lt, 5, 4),
    MA(t, 1, 30, 3, 16, it.brown, `shingle`, 0.5),
    F(e, wA),
    eN(e)
  );
}
var iN = {
    produce: [`#e03a4a`, `#5ccf4f`, `#ff9a2a`, `#ffd166`],
    cloth: [`#b3261e`, `#2f6fcf`, `#5b3fb8`, `#e6d8bc`],
    potions: [`#b84dff`, `#44c9f0`, `#e03a4a`, `#5ccf4f`],
    crystals: [`#8ef6ff`, `#44c9f0`, `#b58aff`, `#e6fdff`],
    bread: [`#b5762e`, `#e6b46a`, `#8a5a22`],
    fish: [`#9fc4dc`, `#6fa6c8`, `#dfe6f0`],
    flowers: [`#e0417a`, `#ffd166`, `#b58aff`, `#ffffff`],
    herbs: [`#3f8f3b`, `#9ae06a`, `#6f8f52`],
  },
  aN = Object.keys(iN);
function oN(e, t) {
  let [n, r] = M(48, 54),
    i = nt(t),
    a = ct[Math.floor(i() * ct.length)],
    o = iN[e] ?? iN.produce;
  (N(r, 3, 19, J.st, 2, 34),
    N(r, 43, 19, J.st, 2, 34),
    N(r, 2, 41, J.st, 44, 12));
  for (let e = 2; e < 46; e += 4) N(r, e, 41, J.dk, 1, 12);
  (N(r, 1, 38, J.lt, 46, 4), N(r, 1, 38, J.pale, 46, 1));
  for (let n = 3; n < 44; n += 3) {
    let i = o[Math.floor(SA(n, t, 3) * o.length)];
    e === `potions` || e === `crystals`
      ? (N(r, n, 33, i, 2, 5),
        N(r, n, 32, e === `potions` ? `#e6d8bc` : `#ffffff`, 2, 1))
      : e === `cloth`
        ? (N(r, n, 34, i, 3, 4), N(r, n, 34, I(i, 0.2), 3, 1))
        : P(r, n + 1, 36, 1.6, 1.4, i);
  }
  for (let e = 0; e < 48; e++) {
    let t = Math.floor(e / 4) % 2 == 0 ? a[0] : a[1];
    for (let n = 0; n < 14; n++)
      N(r, e, 9 + n, n < 2 ? I(t, 0.15) : n > 10 ? I(t, -0.12) : t);
    e % 4 != 3 && N(r, e, 23, t);
  }
  return (
    N(r, 0, 9, I(a[0], -0.35), 48, 1),
    N(r, 5, 24, `rgba(20,10,20,0.3)`, 38, 3),
    F(n, wA),
    eN(n)
  );
}
function sN(e = 0) {
  let t = fh(`statue`, {
      robe: `#8c8698`,
      robeDark: `#5d586c`,
      trim: `#b9b3c7`,
      hat: `#7c768a`,
      hatDark: `#5d586c`,
      orb: `#8ef6ff`,
      glow: `#44c9f0`,
      spark: `#ffffff`,
    }).frames[(e % 2, 0)][6],
    n = t.height + 24,
    [r, i] = M(32, n),
    a = n - 1;
  (N(i, 2, a - 8, CA.mid, 28, 8),
    N(i, 2, a - 8, CA.hi, 28, 1),
    N(i, 25, a - 7, CA.dk, 5, 7),
    N(i, 6, a - 20, CA.st, 20, 12),
    N(i, 6, a - 20, CA.hi, 20, 2),
    N(i, 23, a - 18, CA.dk, 3, 10),
    N(i, 10, a - 14, CA.dk, 12, 1));
  let [o, s] = M(t.width, t.height);
  s.drawImage(t, 0, 0);
  let c = s.getImageData(0, 0, t.width, t.height),
    l = c.data;
  for (let e = 0; e < l.length; e += 4) {
    if (l[e + 3] < 20 || (l[e] < 180 && l[e + 1] > 180 && l[e + 2] > 200))
      continue;
    let t = 55 + ((l[e] * 0.3 + l[e + 1] * 0.55 + l[e + 2] * 0.15) / 255) * 160;
    ((l[e] = t * 0.95), (l[e + 1] = t * 0.92), (l[e + 2] = t * 1.05));
  }
  return (
    s.putImageData(c, 0, 0),
    i.drawImage(o, Math.round((32 - t.width) / 2), a - 20 - t.height + 3),
    F(r, wA),
    {
      c: r,
      ax: 0,
      ay: n,
      lights: [{ x: 20, y: a - 20 - t.height + 6, r: 16, color: `#44c9f0` }],
    }
  );
}
function cN() {
  let [e, t] = M(14, 18);
  return (
    N(t, 2, 3, J.st, 10, 13),
    N(t, 2, 3, J.lt, 3, 13),
    N(t, 9, 3, J.dk, 3, 13),
    N(t, 2, 5, `#4a4458`, 10, 1),
    N(t, 2, 13, `#4a4458`, 10, 1),
    P(t, 7, 3, 5, 2, J.pale),
    P(t, 7, 3, 3.5, 1.2, J.lt),
    F(e, wA),
    tN(e, 7, 16)
  );
}
function lN(e = 1) {
  let [t, n] = M(20, 24),
    r = (e, t) => {
      (N(n, e, t, `#9c6c40`, 10, 10),
        N(n, e, t, `#b88a52`, 10, 2),
        N(n, e, t + 2, J.dk, 10, 1));
      for (let r = 0; r < 7; r++) N(n, e + 1 + r, t + 3 + r, J.dk);
      N(n, e + 9, t, J.dk, 1, 10);
    };
  return (
    r(2, 12),
    e > 1 && r(9, 13),
    e > 2 && r(5, 3),
    F(t, wA),
    tN(t, 10, 22)
  );
}
function uN() {
  let [e, t] = M(18, 14);
  for (let [e, n] of [
    [5, 8],
    [12, 8],
    [8, 5],
  ])
    (P(t, e, n, 4, 3.5, `#cdbfa6`),
      P(t, e - 1, n - 1, 2, 1.5, `#e6d8bc`),
      N(t, e - 1, n - 4, `#8a7a5c`, 2, 1));
  return (F(e, wA), tN(e, 9, 12));
}
function dN() {
  let [e, t] = M(34, 24);
  (N(t, 2, 8, `#9c6c40`, 26, 8), N(t, 2, 8, J.pale, 26, 1));
  for (let e = 2; e < 28; e += 5) N(t, e, 9, J.dk, 1, 7);
  P(t, 15, 7, 12, 4, `#d9b44a`);
  for (let e = 0; e < 12; e++)
    N(
      t,
      5 + Math.floor(SA(e, 3, 9) * 20),
      4 + Math.floor(SA(e, 4, 9) * 5),
      `#f2d66a`,
    );
  N(t, 27, 13, J.dk, 7, 1);
  for (let e of [8, 21])
    (P(t, e, 18, 4.5, 4.5, J.dk),
      P(t, e, 18, 3, 3, J.lt),
      N(t, e - 1, 17, J.dk, 2, 2));
  return (F(e, wA), tN(e, 16, 22));
}
