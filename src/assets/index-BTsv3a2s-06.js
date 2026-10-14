// index-BTsv3a2s 06 — stand
// Lines 16373-16711 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Pt(e, t) {
  if (e.progress >= 1) return 1;
  let n = Nt(e.crop),
    r = Math.max(0, t - e.at),
    i = Math.max(0, Math.min(r, e.wetUntil - e.at)),
    a = r - i,
    o = e.progress + i / n + (a * jt) / n;
  return Math.min(1, o);
}
function Ft(e, t) {
  return Pt(e, t) >= 1;
}
function It(e, t) {
  let n = dt[e].frames;
  return t >= 1
    ? n[n.length - 1]
    : n[Math.min(n.length - 2, Math.floor(t * (n.length - 1)))];
}
function Lt(e) {
  return Ot[e].claim;
}
function Rt(e, t) {
  let n = Dt.path;
  return e >= n.x && e < n.x + n.w && t >= n.y0 && t <= n.y1;
}
function zt(e, t) {
  let n = Dt.cottage;
  if (e >= n.x && e < n.x + n.w && t >= n.y && t < n.y + n.h) return `cottage`;
  let r = Dt.well;
  return e >= r.x && e < r.x + r.w && t >= r.y && t < r.y + r.h
    ? `well`
    : e === Dt.basket.x && t === Dt.basket.y
      ? `basket`
      : null;
}
function Bt(e, t, n) {
  return e.structures.find((e) => e.x === t && e.y === n);
}
function Vt(e, t, n, r, i = !1) {
  let a = kt[t];
  if (!a) return `You can't build that.`;
  if (!Number.isInteger(n) || !Number.isInteger(r)) return `Pick a tile.`;
  let o = Lt(e.tier);
  return n < o.x || r < o.y || n >= o.x + o.w || r >= o.y + o.h
    ? `That's outside your claim. A better deed gives you more ground.`
    : Rt(n, r)
      ? `Keep the path to the gate clear.`
      : zt(n, r)
        ? `The ${zt(n, r)}'s there.`
        : Bt(e, n, r)
          ? `Something's already there.`
          : a.blocks && i
            ? `Someone's standing there.`
            : null;
}
var Ht = { w: 42, h: 32, door: 21 },
  Ut = {
    1: { x: 11, y: 16, w: 21, h: 16 },
    2: { x: 6, y: 8, w: 31, h: 24 },
    3: { x: 0, y: 0, w: 42, h: 32 },
  },
  Wt = {
    planks: { id: `planks`, code: `a`, name: `Oak Planks`, crowns: 2 },
    darkplanks: {
      id: `darkplanks`,
      code: `b`,
      name: `Walnut Planks`,
      crowns: 2,
    },
    flag: { id: `flag`, code: `c`, name: `Flagstones`, crowns: 3 },
    marble: { id: `marble`, code: `d`, name: `Marble`, crowns: 6 },
  },
  Gt = {
    plaster: { id: `plaster`, code: `P`, name: `Plaster`, crowns: 3 },
    timber: { id: `timber`, code: `T`, name: `Timber`, crowns: 3 },
    stone: { id: `stone`, code: `S`, name: `Stone`, crowns: 4 },
  },
  Kt = Object.keys(Wt),
  qt = Object.keys(Gt),
  Jt = Object.fromEntries(Kt.map((e) => [Wt[e].code, e])),
  Yt = Object.fromEntries(qt.map((e) => [Gt[e].code, e]));
function Xt(e) {
  return Jt[e] ?? null;
}
function Zt(e) {
  return Yt[e] ?? null;
}
function Qt(e) {
  return e === `+` || e === `X` || !!Jt[e];
}
function $t(e) {
  let t = Jt[e];
  if (t) return Wt[t].crowns;
  let n = Yt[e];
  return n ? Gt[n].crowns : e === `+` ? 12 : 0;
}
function en() {
  let e = Array.from({ length: Ht.w * Ht.h }, () => `.`),
    t = Ht.door - 6,
    n = Ht.door + 6,
    r = Ht.h - 11,
    i = Ht.h - 1;
  for (let a = r; a <= i; a++)
    for (let o = t; o <= n; o++) {
      let s = o === t || o === n || a <= r + 1 || a === i;
      e[a * Ht.w + o] = s ? Gt.plaster.code : Wt.planks.code;
    }
  return (
    (e[(Ht.h - 1) * Ht.w + Ht.door] = `X`),
    { tiles: e.join(``), items: [] }
  );
}
function tn(e) {
  return e.house ?? en();
}
function nn(e, t, n) {
  return t < 0 || n < 0 || t >= Ht.w || n >= Ht.h
    ? `.`
    : (e.tiles[n * Ht.w + t] ?? `.`);
}
function rn(e, t) {
  return e === 0 || t === 0 || e === Ht.w - 1 || t === Ht.h - 1;
}
function an(e, t) {
  return e === Ht.door
    ? t === Ht.h - 1
      ? `door`
      : t === Ht.h - 2
        ? `entry`
        : null
    : null;
}
function on(e, t, n) {
  return t >= e.x && n >= e.y && t < e.x + e.w && n < e.y + e.h;
}
var sn = [`#7a2f2a`, `#2f4a6b`, `#4f5a2a`, `#5a3a5e`, `#6b4a2a`],
  cn = [`pyro`, `cryo`, `storm`, `void`],
  ln = (e, t, n, r, i, a, o, s = {}) => ({
    id: e,
    name: t,
    desc: n,
    layer: r,
    w: i,
    h: a,
    cost: { crowns: o },
    ...s,
  }),
  un = Object.fromEntries(
    [
      ln(
        `bedstead`,
        `Bed`,
        `Rest in it before you set out, and wake Well Rested: more XP for half an hour.`,
        `stand`,
        1,
        2,
        120,
        { rest: !0, args: cn },
      ),
      ln(`trunk`, `Trunk`, `A lidded chest. 12 places.`, `stand`, 1, 1, 30, {
        slots: 12,
      }),
      ln(
        `bookshelf`,
        `Bookshelf`,
        `Books, and room behind them. 16 places.`,
        `stand`,
        2,
        1,
        80,
        { slots: 16 },
      ),
      ln(
        `wardrobe`,
        `Wardrobe`,
        `Tall, carved and deep. 24 places.`,
        `stand`,
        2,
        1,
        160,
        { slots: 24, cost: { crowns: 160, dust: 4 } },
      ),
      ln(
        `stove`,
        `Stove`,
        `An iron stove: cook meals indoors, as at the cookfire.`,
        `stand`,
        1,
        1,
        140,
        { station: `cookfire` },
      ),
      ln(
        `table`,
        `Table`,
        `A plain table, with whatever's on it.`,
        `stand`,
        2,
        1,
        30,
        { args: [``, `candles`, `books`, `bread`, `scrolls`] },
      ),
      ln(
        `longtable`,
        `Long Table`,
        `Seats the whole Circle, nearly.`,
        `stand`,
        3,
        2,
        80,
      ),
      ln(
        `desk`,
        `Writing Desk`,
        `Letters, a quill, a chip of crystal.`,
        `stand`,
        3,
        1,
        70,
      ),
      ln(`chair`, `Chair`, `A chair.`, `stand`, 1, 1, 10),
      ln(`stool`, `Stool`, `A three-legged stool.`, `stand`, 1, 1, 6),
      ln(
        `fireplace`,
        `Fireplace`,
        `Warmth and light on the long nights.`,
        `stand`,
        2,
        1,
        150,
      ),
      ln(
        `candles`,
        `Candlestand`,
        `Tall tapers on an iron stand.`,
        `stand`,
        1,
        1,
        15,
      ),
      ln(`plant`, `Potted Plant`, `Something green.`, `stand`, 1, 1, 12),
      ln(
        `globe`,
        `Globe`,
        `Ithra as the Conclave draws it.`,
        `stand`,
        1,
        1,
        45,
      ),
      ln(
        `lectern`,
        `Lectern`,
        `For the book you're reading.`,
        `stand`,
        1,
        1,
        35,
      ),
      ln(
        `armor`,
        `Armor Stand`,
        `Somebody's old plate, polished.`,
        `stand`,
        1,
        1,
        90,
      ),
      ln(
        `barrel`,
        `Barrel`,
        `Water, or something stronger.`,
        `stand`,
        1,
        1,
        10,
      ),
      ln(`kegs`, `Kegs`, `A rack of kegs.`, `stand`, 2, 1, 25),
      ln(
        `shelf`,
        `Shelves`,
        `Shelves of jars and bottles.`,
        `stand`,
        2,
        1,
        40,
        { args: [`potions`, `bottles`, `herbs`, `books`] },
      ),
      ln(`rugSmall`, `Small Rug`, `Two tiles of rug.`, `floor`, 2, 1, 15, {
        args: sn,
      }),
      ln(`rug`, `Rug`, `A woven rug, three by two.`, `floor`, 3, 2, 35, {
        args: sn,
      }),
      ln(
        `rugLarge`,
        `Great Rug`,
        `A great rug, five by three.`,
        `floor`,
        5,
        3,
        70,
        { args: sn },
      ),
      ln(
        `window`,
        `Window`,
        `Daylight. Hang it on a wall two tiles tall.`,
        `wall`,
        2,
        1,
        30,
      ),
      ln(
        `portrait`,
        `Painting`,
        `The Aether Crystal, in oils.`,
        `wall`,
        1,
        1,
        40,
      ),
      ln(
        `banner`,
        `Banner`,
        `A school's colours, or Marizon's.`,
        `wall`,
        1,
        1,
        25,
        { args: [`marizon`, ...cn] },
      ),
      ln(`sconce`, `Sconce`, `A candle on the wall.`, `wall`, 1, 1, 18),
      ln(`shield`, `Shield`, `A shield on the wall.`, `wall`, 1, 1, 30, {
        args: [`marizon`, `plain`],
      }),
    ].map((e) => [e.id, e]),
  ),
  dn = Object.keys(un);
