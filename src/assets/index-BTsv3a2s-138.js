// index-BTsv3a2s 138 — kitchen
// Lines 84902-85245 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function xI(e, t) {
  let n = t.w * LF,
    r = t.h * LF;
  for (let t = 0; t < 12; t++)
    ((e.fillStyle = `rgba(12,6,24,${0.34 - t * 0.028})`),
      e.fillRect(LF, RF + t, n - 64, 1));
  for (let t of [0, 1]) {
    let i = t ? n - LF : 0;
    ((e.fillStyle = BF), e.fillRect(i, 0, LF, r));
    let a = t ? n - LF : 24;
    ((e.fillStyle = VF),
      e.fillRect(a, 0, 8, r - LF + 10),
      (e.fillStyle = HF),
      e.fillRect(t ? a : a + 6, 8, 2, r - LF + 2));
    for (let i = 0; i < 8; i++)
      ((e.fillStyle = `rgba(12,6,24,${0.26 - i * 0.03})`),
        e.fillRect(t ? n - LF - 1 - i : LF + i, RF, 1, r - RF - LF));
  }
  let i = r - LF;
  ((e.fillStyle = BF),
    e.fillRect(0, i, n, LF),
    (e.fillStyle = VF),
    e.fillRect(24, i, n - 64 + 16, 10),
    (e.fillStyle = HF),
    e.fillRect(24, i, n - 64 + 16, 2));
  let a = [...t.cells.keys()]
    .filter((e) => t.cells[e] === On.EXIT)
    .map((e) => e % t.w);
  if (!a.length) return;
  let o = Math.min(...a) * LF,
    s = (Math.max(...a) + 1) * LF;
  ((e.fillStyle = `#8c8698`),
    e.fillRect(o + 2, i, s - o - 4, 12),
    (e.fillStyle = `#b9b3c7`),
    e.fillRect(o + 2, i, s - o - 4, 2),
    (e.fillStyle = `#3b3548`),
    e.fillRect(o + 2, i + 12, s - o - 4, 20));
  for (let t = 0; t < 16; t++)
    ((e.fillStyle = `rgba(255,236,190,${0.35 - t * 0.02})`),
      e.fillRect(o + 2, i + 12 + t, s - o - 4, 1));
  ((e.fillStyle = VF),
    e.fillRect(o - 2, i, 4, 12),
    e.fillRect(s - 2, i, 4, 12));
  let c = UF(`tile/in-rug-brown`);
  c && sI(e, c.c, o + 4, i - 20, s - o - 8, 18, 6);
}
function SI(e, t, n, r) {
  let i = e.w * LF,
    a = e.h * LF,
    [o, s] = M(i, a);
  s.imageSmoothingEnabled = !1;
  let c = rI(e);
  c && oI(s, c.c, 0, 0, i, a);
  for (let t of e.rugs) fI(s, t);
  let l = QF(XF(e));
  if (l) for (let e = 0; e < i; e += l.width) s.drawImage(l, e, 0);
  for (let i of e.decor) yI(s, e, i, t, n, r);
  return (xI(s, e), jp(o, IF));
}
function CI(e, t, n, r = []) {
  if (!n.length) return null;
  let i = 0,
    a = t.w * LF,
    o = 0,
    s = 0,
    c = n.map((e) => {
      let t = e.c ?? e.e.c,
        n = Math.round(
          e.x -
            (e.c && e.c.width !== e.e.c.width ? e.c.width / 2 : e.e.ax * IF),
        ),
        r = Math.round(-(e.b ?? 0) - e.e.ay * IF);
      return (
        (i = Math.min(i, n)),
        (a = Math.max(a, n + t.width)),
        (o = Math.min(o, r)),
        (s = Math.max(s, r + t.height)),
        { img: t, left: n, top: r }
      );
    }),
    l = t.tx * 16,
    u = (e.x0 + 1) * 16,
    d = (e.x0 + e.w - 1) * 16,
    f = 0;
  (l + i / IF < u
    ? (f = (u - (l + i / IF)) * IF)
    : l + a / IF > d && (f = (d - (l + a / IF)) * IF),
    (f = Math.round(f)));
  let [p, m] = M(a - i, s - o);
  for (let e of c) m.drawImage(e.img, e.left - i, e.top - o);
  let h = (t.ty + t.h) * 16,
    g = l + (i + f) / IF,
    _ = h + o / IF;
  return {
    c: jp(p, IF),
    x: g,
    y: _,
    lights: r.map((e) => ({
      x: (e.x - i) / IF,
      y: (-e.b - o) / IF,
      r: e.r,
      color: e.color,
      a: e.a ?? 0.85,
      flicker: e.flicker,
    })),
  };
}
var wI = (e, t) => e[Math.floor(t * e.length) % e.length];
function TI(e, t, n, r = {}) {
  let i = UF(n);
  return i
    ? CI(e, t, [{ e: i, x: (t.w * LF) / 2, b: r.b, c: r.c }], r.lit)
    : null;
}
function EI(e, t, n) {
  let r = t.w * LF,
    i = n.map((e) => UF(e)).filter((e) => !!e),
    a = [],
    o = 0;
  for (let e = 0; e < 8 && i.length; e++) {
    let t = i[e % i.length];
    if (a.length && o + t.c.width > r + 8) break;
    (a.push({ e: t, x: o + t.ax * IF }), (o += t.c.width));
  }
  let s = (r - o) / 2;
  for (let e of a) e.x += s;
  return CI(e, t, a);
}
function DI(e, t) {
  let n = UF(t);
  if (!n) return null;
  let [r, i] = M(e, n.c.height);
  return (sI(i, n.c, 0, 0, e, n.c.height, 12), jp(r, IF));
}
function OI(e, t, n, r, i, a = 14) {
  let o = [];
  for (
    let s = t + 8, c = 0;
    s < n - 6;
    s += a + Math.floor(SA(i, c, 9) * 6), c++
  ) {
    let t = UF(`in/${wI(e, SA(i, c, 3))}`);
    t && o.push({ e: t, x: s, b: r });
  }
  return o;
}
var kI = {
  bread: [
    `kitchen-props2-27`,
    `kitchen-props2-28`,
    `kitchen-props2-29`,
    `kitchen-props2-30`,
    `kitchen-props2-10`,
    `kitchen-props2-15`,
  ],
  bottles: [
    `kitchen-props-0`,
    `kitchen-props-1`,
    `kitchen-props-2`,
    `kitchen-props-5`,
    `kitchen-props-8`,
    `kitchen-props-11`,
  ],
  potions: [
    `glass-container-0`,
    `glass-container-1`,
    `glass-container-3`,
    `glass-container-5`,
    `glass-container2-0`,
    `glass-container2-3`,
    `glass-container2-4`,
  ],
  gems: [
    `glass-container-1`,
    `glass-container-4`,
    `glass-container-6`,
    `pots-4`,
    `pots-9`,
  ],
  fabric: [
    `decors-books-11`,
    `decors-books-12`,
    `decors-books-13`,
    `decors-books-15`,
    `decors-books-16`,
  ],
  goods: [
    `kitchen-props4-6`,
    `kitchen-props4-7`,
    `pots-0`,
    `supply-bags-12`,
    `kitchen-props2-11`,
  ],
  cheese: [`kitchen-props2-9`, `kitchen-props2-9`, `kitchen-props4-12`],
  fish: [`kitchen-props4-10`, `kitchen-props2-17`, `kitchen-props4-11`],
  ice: [`kitchen-props4-10`, `kitchen-props4-11`, `kitchen-props4-13`],
  books: [
    `decors-books-0`,
    `decors-books-2`,
    `decors-books-5`,
    `decors-books-9`,
    `decors-books-8`,
  ],
  scrolls: [
    `decors-books-7`,
    `decors-paper5`,
    `decors-paper1`,
    `decors-books-8`,
  ],
  boots: [`supply-bags-14`, `supply-bags-16`, `supply-bags-19`],
  candles: [
    `candlestickss-0`,
    `candlestickss-1`,
    `candlestickss-4`,
    `candlesticks-26`,
  ],
  lanterns: [`candlesticks-12`, `candlesticks-14`],
  mugs: [
    `kitchen-props3-0`,
    `kitchen-props2-38`,
    `kitchen-props2-40`,
    `kitchen-props-39`,
  ],
  blades: [`decors-weapon2-3`, `decors-weapon2-2`],
  tools: [`kitchen-props2-2`, `kitchen-props4-14`, `supply-bags-17`],
  smithing: [`decors-weapon2-2`, `decors-weapon2-3`, `decors-weapon2-2`],
  orbs: [`glass-container2-3`, `glass-container2-5`, `glass-container2-1`],
  herbs: [`pots-1`, `pots-7`, `pots-11`, `kitchen-props2-37`],
  letters: [`decors-paper1`, `decors-paper3`, `decors-paper5`],
  dough: [`kitchen-props2-32`, `kitchen-props2-14`, `kitchen-props2-27`],
  alembic: [`glass-container2-0`, `glass-container2-4`, `glass-container-2`],
  lathe: [`kitchen-props19-19`, `decors-weapon2-1`],
  gemwheel: [`glass-container-4`, `glass-container-6`, `pots-4`],
  sewing: [`decors-books-12`, `decors-books-15`, `supply-bags-17`],
  mortar: [`kitchen-props-18`, `kitchen-props-23`, `pots-7`],
  cobbler: [`supply-bags-14`, `supply-bags-16`, `kitchen-props4-14`],
};
function AI(e, t, n) {
  let r = t.w * LF,
    i = UF(`in/stand-1-part1`);
  if (!i) return null;
  let a = [];
  for (let e = 0; e < r; e += i.c.width) a.push({ e: i, x: e + i.ax * IF });
  let o = t.arg === `tools` && e.trade === `anvil` ? `smithing` : t.arg;
  return (
    o && a.push(...OI(kI[o] ?? kI.goods, 0, r, i.ay * IF - 12, n)),
    CI(e, t, a)
  );
}
function jI(e, t, n) {
  let r = {
      bottles: [`in/drinks-shelf-0`],
      potions: [`in/cabinet-2`, `in/cabinet-6`],
      gems: [`in/cabinet-17`, `in/cabinet-18`],
      ice: [`in/cabinet-8`],
    },
    i = t.arg ?? `goods`;
  if (r[i]) {
    if (i === `ice`) {
      let r = UF(`in/cabinet-8`);
      return r
        ? CI(e, t, [
            { e: r, x: (t.w * LF) / 2 },
            ...OI(
              kI.ice,
              (t.w * LF) / 2 - r.c.width / 2,
              (t.w * LF) / 2 + r.c.width / 2,
              r.ay * IF - 6,
              n,
            ),
          ])
        : null;
    }
    return EI(e, t, r[i]);
  }
  let a = UF(t.w >= 3 ? `in/cabinet-9` : `in/cabinet-8`);
  if (!a) return null;
  let o = t.w * LF,
    s = [{ e: a, x: o / 2 }];
  return (
    s.push(
      ...OI(
        kI[i] ?? kI.goods,
        o / 2 - a.c.width / 2,
        o / 2 + a.c.width / 2,
        a.ay * IF - 4,
        n,
        12,
      ),
    ),
    CI(e, t, s)
  );
}
function MI(e, t, n) {
  switch (t.arg) {
    case `weapons`:
      return EI(e, t, [
        `in/decors-weapon2-8`,
        `in/decors-weapon-3`,
        `in/decors-weapon2-9`,
      ]);
    case `shields`:
      return EI(e, t, [
        `in/decor-shields-4`,
        `in/decor-shields-5`,
        `in/decor-shields-1`,
      ]);
    case `staves`:
      return EI(e, t, [
        `in/decors-weapon-1`,
        `in/decors-weapon-6`,
        `in/decors-weapon-2`,
      ]);
  }
  let r = t.arg === `potions` || t.arg === `gems`,
    i = UF(r ? `in/storage-countertop-3` : `in/storage-countertop-5`);
  if (!i) return null;
  let a = t.w * LF,
    o = [],
    s = 0;
  for (; s + i.c.width <= a + 8;)
    (o.push({ e: i, x: s + i.ax * IF }), (s += i.c.width));
  let c = (a - s) / 2;
  for (let e of o) e.x += c;
  return (
    r ||
      o.push(
        ...OI(kI[t.arg ?? `goods`] ?? kI.goods, c, c + s, i.ay * IF - 6, n, 10),
      ),
    CI(e, t, o)
  );
}
function NI(e, t, n, r) {
  let i = t.w * LF,
    a = DI(i - 4, `in/table-rect-0`),
    o = UF(`in/table-rect-0`);
  if (!a || !o) return null;
  let s = [{ e: o, x: i / 2, c: a }];
  return (
    r && s.push(...OI(kI[r] ?? kI.goods, 0, i, o.ay * IF - 10, n)),
    CI(e, t, s)
  );
}
var PI = new Map();
