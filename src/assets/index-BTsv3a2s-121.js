// index-BTsv3a2s 121 — math
// Lines 56135-56482 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var LA = {
  anvil: {
    rows: [`      `, `######`, ` #### `, `  ##  `, ` #### `],
    map: { "#": `#4a4458` },
  },
  potion: {
    rows: [`  cc  `, `  gg  `, ` pppp `, `pppwpp`, ` pppp `],
    map: { c: `#8a5f38`, g: `#b9b3c7`, p: `#b84dff`, w: `#f0b3ff` },
  },
  bread: {
    rows: [`      `, ` bbbb `, `bLbLbb`, `bbbbbb`, `      `],
    map: { b: `#b5762e`, L: `#e6b46a` },
  },
  mug: {
    rows: [`wwww  `, `aaaa# `, `aAaa #`, `aaaa# `, `aaaa  `],
    map: { w: `#ffffff`, a: `#d99a2a`, A: `#ffd166`, "#": `#6b4424` },
  },
  staff: {
    rows: [`   oo `, `   oo `, `  #   `, ` #    `, `#     `],
    map: { o: `#44c9f0`, "#": `#6b4424` },
  },
  book: {
    rows: [`      `, `rrwrr `, `rrwrr `, `rrwrr `, `      `],
    map: { r: `#9c3b2e`, w: `#f2e6c8` },
  },
  gem: {
    rows: [` cccc `, `cCccCc`, ` cccc `, `  cc  `, `      `],
    map: { c: `#44c9f0`, C: `#e6fdff` },
  },
  fish: {
    rows: [`      `, ` ssss#`, `sSsss `, ` ssss#`, `      `],
    map: { s: `#6fa6c8`, S: `#10240f`, "#": `#6fa6c8` },
  },
  boot: {
    rows: [`  bb  `, `  bb  `, `  bb  `, `bbbb  `, `bbbbb `],
    map: { b: `#5a3a22` },
  },
  bag: {
    rows: [`  ##  `, ` yyyy `, `yyYyyy`, `yyyyyy`, ` yyyy `],
    map: { "#": `#6b4424`, y: `#d9a93a`, Y: `#fff3c4` },
  },
  robe: {
    rows: [` rrrr `, `rrttrr`, ` rttr `, ` rrrr `, `rrrrrr`],
    map: { r: `#5b3fb8`, t: `#fff36b` },
  },
  herb: {
    rows: [` g  g `, `gGggGg`, ` gggg `, `  #   `, `  #   `],
    map: { g: `#3f8f3b`, G: `#9ae06a`, "#": `#6b4424` },
  },
  sword: {
    rows: [`    s `, `   s  `, `  s   `, `#s    `, ` ##   `],
    map: { s: `#dfe6f0`, "#": `#6b4424` },
  },
  lantern: {
    rows: [` #### `, ` #yy# `, ` #YY# `, ` #yy# `, ` #### `],
    map: { "#": `#2b2633`, y: `#ffd98a`, Y: `#ffffff` },
  },
  cheese: {
    rows: [`      `, `   yy `, ` yyyyy`, `yyoyyy`, `yyyyoy`],
    map: { y: `#f2c84a`, o: `#c99a2a` },
  },
  candle: {
    rows: [`  f   `, `  w   `, `  w w `, ` ww w `, ` wwww `],
    map: { f: `#ffb238`, w: `#f2e6c8` },
  },
};
function RA(e, t, n, r) {
  (N(e, t - 1, n - 1, J.dk, 16, 11),
    N(e, t, n, `#c9a46a`, 14, 9),
    N(e, t, n, `#e0bf86`, 14, 1),
    N(e, t, n + 8, `#a8844e`, 14, 1));
  let i = LA[r];
  OA(e, t + 4, n + 2, i.rows, i.map);
}
function zA(e, t, n, r) {
  let i = LA[r];
  OA(e, t, n, i.rows, i.map);
}
function BA(e, t, n, r, i) {
  for (let a = 0; a < r; a++) {
    let r = Math.floor(a / 3) % 2 == 0 ? i[0] : i[1];
    (N(e, t + a, n, I(r, -0.25), 1, 1),
      N(e, t + a, n + 1, r, 1, 4),
      N(e, t + a, n + 1, I(r, 0.15), 1, 1),
      a % 3 != 2 && N(e, t + a, n + 5, r, 1, 1));
  }
  for (let i = 0; i < r; i++)
    i % 3 != 2 && N(e, t + i, n + 6, `rgba(20,10,20,0.35)`);
}
function VA(e, t, n, r, i, a) {
  (N(e, t - 1, n - 1, J.mid, r + 2, i + 2),
    N(e, t, n, `#ffe3a0`, r, i),
    N(e, t, n, `#fff3c4`, r, 1));
  let o = n + Math.floor(i / 2);
  (N(e, t, o, J.st, r, 1), N(e, t, n + i - 1, J.st, r, 1));
  for (let s = 1; s < r - 1; s += 2)
    (N(e, t + s, o - 2, a[(s >> 1) % a.length], 1, 2),
      N(e, t + s, n + i - 3, a[((s >> 1) + 1) % a.length], 1, 2));
  (N(e, t + Math.floor(r / 2), n, J.mid, 1, i),
    N(e, t - 2, n + i + 1, J.st, r + 4, 1));
}
var HA = {
  anvil: [`#8c8698`, `#5d586c`, `#b9b3c7`],
  potion: [`#b84dff`, `#44c9f0`, `#e03a4a`, `#5ccf4f`],
  bread: [`#b5762e`, `#e6b46a`, `#8a5a22`],
  mug: [`#d99a2a`, `#8a5f38`],
  staff: [`#6b4424`, `#44c9f0`, `#b58aff`],
  book: [`#9c3b2e`, `#3b5c9c`, `#4f6b3a`, `#e6d8bc`],
  gem: [`#44c9f0`, `#b58aff`, `#8ef6ff`, `#ff6fa3`],
  fish: [`#6fa6c8`, `#b9d6e6`],
  boot: [`#5a3a22`, `#3d2716`, `#7a5230`],
  bag: [`#d9a93a`, `#8a5f38`, `#cdbfa6`],
  robe: [`#b3261e`, `#2f6fcf`, `#5b3fb8`, `#2a1740`],
  herb: [`#3f8f3b`, `#9ae06a`, `#b58aff`],
  sword: [`#dfe6f0`, `#8c8698`],
  lantern: [`#ffd98a`, `#2b2633`],
  cheese: [`#f2c84a`, `#e6b46a`],
  candle: [`#f2e6c8`, `#ffb238`],
};
function UA(e) {
  let t = nt(e.seed),
    n = e.w * 16,
    r = e.h * 16,
    [i, a] = M(n, r + 14),
    o = [],
    s = r + 14,
    c = Math.round(r * (e.stories === 2 ? 0.56 : 0.42)) - 4,
    l = s - 4,
    u = l - c,
    d = n - 3 - 1,
    f = d - 3 + 1,
    p = e.stories === 2 ? u + Math.round(c * 0.46) : -1,
    m = e.tex ?? (e.style === `thatch` ? `thatch` : `shingle`),
    h = Math.round(n * (t() < 0.5 ? 0.68 : 0.22));
  (e.chimney &&
    e.style !== `front` &&
    (N(a, h, 5, CA.mid, 6, 16),
    N(a, h - 1, 4, CA.lt, 8, 2),
    N(a, h + 4, 6, CA.dk, 2, 15)),
    AA(a, e.wall, 3, u, f, c, t, p),
    Are(a, 2, l, f + 2, 4));
  let g =
      e.wall in kA
        ? kA[e.wall]
        : e.wall === `brick`
          ? `#9a4a36`
          : e.wall === `dark`
            ? `#4f4960`
            : e.wall === `wood` || e.wall === `barn`
              ? `#8a5f38`
              : `#8c8698`,
    _ = null;
  if (e.style === `front`) {
    let { apexY: t, cx: r } = PA(a, 0, n - 1, 15, u + 1, e.roof, m, g);
    _ = { x: Math.round(r) - 3, y: Math.round((t + u) / 2) };
  } else
    e.style === `gable`
      ? NA(a, 0, n - 1, 15, u + 1, e.roof, m)
      : MA(
          a,
          0,
          n - 1,
          15,
          u + 1,
          e.roof,
          m,
          e.style === `thatch` ? 0.45 : 0.5,
        );
  for (let e = 3; e <= d; e++) N(a, e, u + 2, `rgba(20,10,20,0.28)`);
  if (
    (_ && FA(a, _.x, _.y, 6, 5, { arched: !0 }, o),
    e.chimney &&
      e.style === `front` &&
      (N(a, h, 9, CA.mid, 6, 12),
      N(a, h - 1, 8, CA.lt, 8, 2),
      N(a, h + 4, 10, CA.dk, 2, 11)),
    e.dormers && e.style !== `front`)
  ) {
    let t = u - 15,
      r = 15 + Math.round(t * 0.35),
      i = n >= 80 ? 2 : 1;
    for (let t = 0; t < i; t++) {
      let s = Math.round((n * (t + 1)) / (i + 1)) - 5;
      (N(a, s, r + 2, `#cdbfa6`, 11, 8), FA(a, s + 2, r + 4, 6, 4, {}, o));
      for (let t = 0; t < 6; t++)
        N(
          a,
          s - 1 + t,
          r + 2 - Math.floor(t / 1.5) + 3,
          e.roof[0],
          13 - 2 * t,
          1,
        );
      N(a, s - 1, r + 3, I(e.roof[1], -0.2), 13, 1);
    }
  }
  let { x: v, w: y } = ut(e),
    b = Math.min(13, c - 3),
    x = p > 0 ? p + 4 : u + Math.max(4, Math.round((c - 10) / 2) - 1),
    S = Math.min(7, l - x - 4),
    C = {
      shutters: e.shutters,
      box: e.boxes,
      frame:
        e.wall === `stone` || e.wall === `dark` || e.wall === `white`
          ? `#4a4458`
          : J.mid,
      arched: e.wall === `stone` || e.wall === `dark` || e.wall === `white`,
    },
    w = [[v - 2, v + y + 1]];
  if (e.shop) {
    let t = v - 3,
      n = d - (v + y),
      r = Math.min(18, Math.max(t, n) - 7),
      i = Math.min(9, l - x - 3),
      s = t >= n ? v - r - 4 : v + y + 4;
    r >= 8 &&
      (VA(a, s, l - i - 3, r, i, e.shop.goods ?? HA[e.shop.sign]),
      w.push([s - 2, s + r + 1]));
    let c = t >= n ? v + y + 4 : 7,
      f = t >= n ? n : t;
    if (f >= 12 && S >= 5) {
      let e = c + Math.floor((f - 11) / 2);
      (FA(a, e, l - S - 5, 7, S, C, o), w.push([e - 3, e + 9]));
    }
    if (e.shop.awning) {
      let t = Math.min(s, v) - 3,
        n = Math.max(s + r, v + y) + 3;
      BA(
        a,
        Math.max(3, t),
        l - Math.max(i, b) - 9,
        Math.min(d, n) - Math.max(3, t),
        e.shop.awning,
      );
    }
    let m = l - Math.max(i, b) - (e.shop.awning ? 9 : 2),
      h = (p > 0 ? p + 2 : u + 3) <= m - 11 ? m - 11 : u - 5;
    RA(
      a,
      Math.round(
        r >= 8
          ? (Math.min(s, v) + Math.max(s + r, v + y)) / 2 - 7
          : v + y / 2 - 7,
      ),
      h,
      e.shop.sign,
    );
  } else {
    let e = [];
    for (let t = 9; t + 7 <= d - 4; t += 15)
      (t + 9 > v - 1 && t - 2 < v + y + 1) || e.push(t);
    if (S >= 5)
      for (let t of e)
        (FA(a, t, l - S - 5, 7, S, C, o), w.push([t - 3, t + 9]));
  }
  if (p > 0 && !e.shop) {
    let e = [];
    for (let t = 9; t + 7 <= d - 4; t += 15) e.push(t);
    let t = Math.floor((d - 4 - (e[e.length - 1] + 7) - 5) / 2),
      n = Math.min(8, p - u - 7);
    for (let r of e) n >= 4 && FA(a, r + Math.max(0, t), u + 5, 7, n, C, o);
  }
  if (p > 0 && e.shop) {
    let e = Math.min(8, p - u - 7);
    e >= 4 &&
      (FA(a, 9, u + 5, 7, e, C, o),
      FA(a, d - 12, u + 5, 7, e, C, o),
      f >= 70 && FA(a, Math.round((3 + d) / 2) - 3, u + 5, 7, e, C, o));
  }
  if (
    (IA(a, v, l, y, b, {
      arched: C.arched,
      double: e.shop !== void 0 && y >= 9,
    }),
    N(a, v - 1, l, CA.hi, y + 2, 2),
    e.lamp)
  ) {
    let e = v + y + 2;
    (N(a, e, l - b - 2, `#2b2633`, 3, 4),
      N(a, e + 1, l - b - 1, `#ffe08a`, 1, 2),
      o.push({ x: e + 1, y: l - b, r: 22, color: `#ffd98a`, a: 0.8 }));
  }
  (F(i, wA), w.sort((e, t) => e[0] - t[0]));
  let T = [],
    E = 5;
  for (let [e, t] of w)
    (e - 1 >= E && T.push([E, e - 1]), (E = Math.max(E, t + 1)));
  return (
    d - 2 >= E && T.push([E, d - 2]),
    {
      c: i,
      ax: 0,
      ay: i.height,
      lights: o,
      front: T,
      fold: { wallH: s - u - 2 },
    }
  );
}
var WA = [
    {
      walk: `#948ea4`,
      joint: `#7c768a`,
      merlon: `#a49eb4`,
      merlonD: `#6f6a7a`,
      face: [`#8c8698`, `#7c768a`, `#948ea4`, `#86809a`],
      mortar: `#5d586c`,
      cornice: `#b9b3c7`,
      plinth: `#5d586c`,
      course: 4,
    },
    {
      walk: `#bdb7c9`,
      joint: `#9d97ad`,
      merlon: `#cfc9da`,
      merlonD: `#8a849c`,
      face: [`#b9b3c7`, `#aca6bc`, `#c6c0d2`, `#a29cb4`],
      mortar: `#7c768a`,
      cornice: `#dcd6e6`,
      plinth: `#7c768a`,
      course: 5,
    },
  ],
  GA = [
    [DA.field, DA.dark, DA.crystal],
    [EA.pyro.robe, EA.pyro.dark, EA.pyro.trim],
    [EA.cryo.robe, EA.cryo.dark, EA.cryo.trim],
    [EA.storm.robe, EA.storm.dark, EA.storm.trim],
    [EA.void.robe, EA.void.dark, EA.void.trim],
  ];
function KA(e, t, n, r, i = 16, a = 8) {
  let [o, s, c] = GA[r];
  N(e, t - 1, n, `#2b2633`, a + 2, 1);
  for (let r = 1; r <= i; r++) {
    let c = r > i - 3 ? Math.abs(r - i + 3) : 0;
    for (let i = 0; i < a; i++)
      (c && i >= a / 2 - c + 1 && i < a / 2 + c - 1) ||
        N(e, t + i, n + r, i === a - 1 ? s : i === 0 ? I(o, 0.12) : o);
  }
  N(e, t + 1, n + 2, c, a - 2, 1);
  let l = t + Math.floor(a / 2),
    u = n + Math.floor(i / 2);
  (N(e, l - 1, u - 2, c, 2, 1),
    N(e, l - 2, u - 1, c, 4, 2),
    N(e, l - 1, u + 1, c, 2, 1),
    N(e, l - 1, u - 1, `#ffffff`, 1, 1));
}
