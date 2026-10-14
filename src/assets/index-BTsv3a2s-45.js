// index-BTsv3a2s 45 — glow
// Lines 32243-32583 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var Lh = {
    pyro: `varra`,
    cryo: `ysolde`,
    storm: `teodor`,
    void: `oriel`,
    marksman: `teodor`,
    paladin: `ysolde`,
    scout: `oriel`,
  },
  Rh = { varra: `pyro`, ysolde: `cryo`, teodor: `storm`, oriel: `void` },
  zh = {
    ember: {
      hair: `#b3261e`,
      hairL: `#ff7a1a`,
      eye: `#ffb238`,
      glow: `#ff7a1a`,
      core: `#ffe08a`,
    },
    rime: {
      hair: `#2f6fcf`,
      hairL: `#8ef6ff`,
      eye: `#dff6ff`,
      glow: `#5cc8ff`,
      core: `#ffffff`,
    },
    storm: {
      hair: `#5b3fb8`,
      hairL: `#a8b8ff`,
      eye: `#fff36b`,
      glow: `#a8b8ff`,
      core: `#fffbd1`,
    },
    void: {
      hair: `#2a1740`,
      hairL: `#b84dff`,
      eye: `#f0b3ff`,
      glow: `#b84dff`,
      core: `#ff9cf5`,
    },
    hollow: {
      hair: `#12050a`,
      hairL: `#5a0a1a`,
      eye: `#ffffff`,
      glow: `#b01a2a`,
      core: `#ffffff`,
    },
    none: {
      hair: `#4a2a3a`,
      hairL: `#6a3a52`,
      eye: `#c9b3d6`,
      glow: `#c9b3d6`,
      core: `#ffffff`,
    },
  },
  Bh = [`ember`, `rime`, `storm`, `void`],
  Vh = {
    robe: `#7d7a86`,
    robeDark: `#56535f`,
    trim: `#c9c3d6`,
    hat: `#6b6875`,
    hatDark: `#4a4752`,
    orb: `#3b3548`,
    glow: `#e6e0f5`,
    spark: `#ffffff`,
  },
  Hh = (e, t, n) => {
    let r = (t, r, i) => {
      (N(e, t + 2, r + 2 + (r < 20 ? n : 0), `#8f8b99`, 2, 2),
        N(e, t + 2, r + 2 + (r < 20 ? n : 0), i, 1, 1),
        N(e, t + 2 + 1, r + 2 + 1 + (r < 20 ? n : 0), i, 1, 1));
    };
    t === 2
      ? (r(7, 14, S.pyro.colors.glow), r(8, 18, S.cryo.colors.glow))
      : (r(5, 14, S.pyro.colors.glow),
        r(9, 17, S.cryo.colors.glow),
        r(6, 19, S.storm.colors.spark),
        r(10, 13, S.void.colors.trim));
  };
function Uh(e) {
  return { ...S[e].colors, trim: `#f4ecff` };
}
var Wh = {
  tabard: `#2a3f6b`,
  tabardD: `#1a2848`,
  steel: `#a7adb8`,
  steelD: `#6f7580`,
  mail: `#8a8f99`,
};
function Gh(e, t, n, r, i, a) {
  let o = (t, n, r, i = 1, a = 1) => N(e, t + 2, n + 2, r, i, a),
    s = `#e0b08a`;
  if (a) {
    (o(1, 20, `#6b4424`, 17, 1),
      o(3, 18, Wh.steel, 4, 3),
      o(7, 18, s, 2, 3),
      o(9, 17, Wh.tabard, 7, 5),
      o(11, 18, `#44c9f0`, 2, 2),
      o(16, 19, `#2b2a33`, 3, 3));
    return;
  }
  let c = t === 2,
    l = t === 1;
  (o(c ? 6 + n : 5, 22 - (c ? 0 : Math.max(0, n)), `#2b1d16`, 3, 2),
    o(c ? 8 - n : 9, 22 - (c ? 0 : Math.max(0, -n)), `#2b1d16`, 3, 2),
    o(5, 18, `#2b2a33`, 7, 4));
  let u = r;
  (o(c ? 5 : 4, 11 + u, Wh.mail, c ? 7 : 8, 7),
    o(c ? 6 : 5, 11 + u, Wh.tabard, c ? 5 : 6, 8),
    o(9, 11 + u, Wh.tabardD, 2, 8),
    !l && !c && o(7, 13 + u, `#44c9f0`, 2, 3),
    o(4, 17 + u, `#5a3a22`, 8, 1),
    c
      ? (o(9, 12 + u, Wh.mail, 3, 2), o(12, 13 + u, s))
      : (o(3, 11 + u, Wh.mail, 1, 5),
        o(12, 11 + u, Wh.mail, 1, 5),
        o(3, 16 + u, s),
        o(12, 16 + u, s)),
    o(5, 5 + u, s, 6, 6),
    l
      ? o(5, 5 + u, Wh.steelD, 6, 5)
      : c
        ? (o(9, 7 + u, `#1b1030`), o(6, 5 + u, Wh.steelD, 2, 4))
        : (o(6, 7 + u, `#1b1030`),
          o(9, 7 + u, `#1b1030`),
          i && o(6, 9 + u, `#b0625a`, 3, 1)),
    o(4, 2 + u, Wh.steel, 8, 4),
    o(4, 2 + u, `#d0d5de`, 3, 1),
    o(10, 3 + u, Wh.steelD, 2, 3),
    !l && !c && o(7, 5 + u, Wh.steel, 2, 3),
    i && o(6, 0 + u, `#c2361f`, 4, 2));
  let d = c ? 13 : l ? 2 : 13;
  (o(d, 1 + u, `#6b4424`, 1, 22),
    o(d - 1, 0 + u, Wh.steel, 3, 1),
    o(d, -1 + u, Wh.steel, 1, 1));
}
var Kh = new Map();
function qh(e) {
  let t = e ? `captain` : `watch`,
    n = nm(`watch:${t}`);
  if (n) return n;
  let r = Kh.get(t);
  if (r) return r;
  let i = [
      [0, 0],
      [0, 1],
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, 1],
      [0, 0],
    ],
    a = [];
  for (let t of [0, 1, 2])
    a[t] = i.map(([n, r], i) => {
      let [a, o] = M(20, 28);
      return (Gh(o, t, n, r, e, !e && i === 6), F(a), a);
    });
  a[3] = a[2].map(Ip);
  let o = tm(`watch:${t}`, {
    frames: a,
    flash: a.map((e) => e.map((e) => Fp(e))),
  });
  return (Kh.set(t, o), o);
}
function Jh(e) {
  return e === `idris`
    ? fh(`npc:idris`, Vh, Hh)
    : e === `holloway`
      ? qh(!0)
      : e === `watchman`
        ? qh(!1)
        : fh(`npc:${e}`, Uh(Rh[e]));
}
function Yh(e, t, n) {
  let r = t === 2,
    i = +(t === 1),
    a = (t, n, r, i = 1, a = 1) => N(e, t + 1, n + 1, r, i, a),
    o = zh[n],
    s = `#1a0f1f`,
    c = `#3a2140`,
    l = `#e0b64a`,
    u = `#e8d5e0`;
  for (let e = 15; e <= 35; e++) {
    let t = 3.5 + (e - 15) * 0.3,
      n = Math.round(13 - t),
      r = Math.round(13 + t);
    for (let t = n; t <= r; t++) {
      if (e > 31 && (t * 7 + e + i * 3) % 5 < e - 31) continue;
      let o = s;
      (t <= n + 1 && (o = c),
        t >= r - 1 && (o = `#0d0710`),
        (t === 13 || t === 14) && (o = l),
        a(t, e, o));
    }
  }
  for (let e = 7; e <= 19; e += 3) a(e + i, 31 + ((e >> 1) % 3), l);
  (r
    ? (a(17, 9, s, 3, 7),
      a(18, 8, c, 2, 2),
      a(18, 6, u, 2, 2),
      a(6, 16, s, 3, 6),
      a(6, 21, u, 2, 1))
    : (a(6, 16, s, 3, 7),
      a(17, 16, s, 3, 7),
      a(6, 16, c, 1, 7),
      a(6, 22, u, 2, 1),
      a(18, 22, u, 2, 1),
      a(5, 23, o.glow),
      a(20, 23, o.glow)),
    a(9, 13, l, 9, 2),
    a(8, 11, c, 2, 3),
    a(17, 11, c, 2, 3),
    a(9, 4, o.hair, 10, 4),
    a(8, 6, o.hair, 2, 14 + i),
    a(18, 6, o.hair, 2, 14 - i),
    a(9, 5, o.hairL, 3, 1),
    a(8, 12, o.hairL, 1, 5),
    a(10, 6, u, 8, 6),
    a(17, 6, `#bfa3b5`, 1, 6),
    a(10, 6, o.hair, 8, 1),
    a(11, 8, o.eye, 2, 1),
    a(15, 8, o.eye, 2, 1),
    a(13, 10, `#7a3050`, 2, 1),
    a(9, 4, `#b9b3c7`, 10, 1),
    a(10, 3, zh.ember.glow),
    a(12, 3, zh.rime.glow),
    a(15, 3, zh.storm.eye),
    a(17, 3, zh.void.glow));
}
var Xh = new Map();
function Zh(e = `none`) {
  let t = Xh.get(e);
  if (t) return t;
  let n = [];
  for (let t = 0; t < 3; t++) {
    let [r, i] = M(28, 40);
    (Yh(i, t, e), F(r, `#050208`), n.push(r));
  }
  return (Xh.set(e, n), n);
}
var Qh = null;
function $h() {
  if (Qh) return Qh;
  let [e, t] = M(66, 84),
    n = `#0c0610`,
    r = `#3a0a18`,
    i = `#5a0a1a`;
  for (let e = 24; e < 83; e++) {
    let a = Math.floor((e - 24) / 10),
      o = 9 + a * 4 + (e - 24 - a * 10) * 0.15;
    for (let s = Math.round(33 - o); s <= Math.round(33 + o); s++) {
      let c = s < 33 - o + 2;
      N(t, s, e, c ? i : (e - 24) % 10 == 0 ? r : a % 2 ? `#1a0c18` : n);
    }
  }
  for (let [e, n, i, a] of [
    [26, 34, 1, 8],
    [26, 34, 6, 1],
    [38, 38, 1, 10],
    [33, 48, 6, 1],
    [22, 52, 1, 9],
    [22, 60, 8, 1],
    [42, 58, 1, 12],
    [30, 66, 1, 9],
    [36, 72, 9, 1],
  ])
    N(t, e, n, r, i, a);
  (N(t, 20, 21, n, 26, 4),
    N(t, 25, 16, n, 3, 7),
    N(t, 38, 16, n, 3, 7),
    N(t, 28, 7, `#3a3036`, 10, 13),
    N(t, 28, 7, `#2a2226`, 2, 13),
    N(t, 29, 14, `#1a1418`, 2, 3),
    N(t, 35, 14, `#1a1418`, 2, 3),
    N(t, 29, 11, i, 3, 1),
    N(t, 34, 11, i, 3, 1),
    N(t, 30, 11, `#ffffff`),
    N(t, 35, 11, `#ffffff`),
    N(t, 31, 18, `#1a1418`, 4, 1),
    N(t, 27, 5, n, 12, 3),
    N(t, 40, 36, `#3a3036`, 6, 3));
  for (let e = 0; e < 8; e++) {
    let n = Math.max(1, Math.round(2 * (1 - Math.abs(e - 3) / 5)));
    N(
      t,
      43 - n,
      28 + e,
      e === 3 ? `#ffffff` : e % 2 ? `#b01a2a` : `#5a0a1a`,
      n * 2,
      1,
    );
  }
  return (F(e, `#000000`), (Qh = e), e);
}
var eg = new Map();
function tg(e) {
  let t = Ph().crystal[0].c;
  if (e === `living`) return t;
  let n = eg.get(e);
  if (n) return n;
  let [r, i] = M(t.width, t.height);
  i.drawImage(t, 0, 0);
  let a = i.getImageData(0, 0, r.width, r.height),
    o = a.data;
  for (let t = 0; t < o.length; t += 4) {
    if (o[t + 3] < 20) continue;
    let n = (o[t] * 0.3 + o[t + 1] * 0.59 + o[t + 2] * 0.11) / 255,
      r;
    if (e === `hollowed`)
      r =
        n > 0.85
          ? [255, 255, 255]
          : n > 0.55
            ? [176, 26, 42]
            : n > 0.3
              ? [90, 10, 26]
              : [26, 5, 8];
    else if (e === `silent`) {
      let e = Math.round(40 + n * 90);
      r = [e, e, e + 12];
    } else {
      let e = Math.round(20 + n * 40);
      r = [e, e - 4, e - 6];
    }
    ((o[t] = r[0]), (o[t + 1] = r[1]), (o[t + 2] = r[2]));
  }
  return (i.putImageData(a, 0, 0), eg.set(e, r), r);
}
function ng(e, t) {
  let n, r;
  e === `lillith`
    ? ((n = Zh(`none`)[0]), (r = 20))
    : e === `crystal`
      ? ((n = Ph().crystal[0].c), (r = 30))
      : e === `hero`
        ? ((n = dh(t).frames[0][0]), (r = 17))
        : ((n = Jh(e).frames[0][0]), (r = 17));
  let [i, a] = M(n.width, r);
  return (a.drawImage(n, 0, 0), i);
}
var rg = (e, t, n) => (Math.max(e, t, n) + Math.min(e, t, n)) / 510;
