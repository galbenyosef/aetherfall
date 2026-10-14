// assets__index-BTsv3a2s 09 — put
// Lines 17316-17597 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Nn(e, t) {
  let n = [...e];
  for (let e = n.length - 1; e > 0; e--) {
    let r = Math.floor(t() * (e + 1));
    [n[e], n[r]] = [n[r], n[e]];
  }
  return n;
}
function Pn(e, t, n) {
  let r = e % Dn,
    i = Math.floor(e / Dn);
  return {
    x0: 524 + r * Tn + Math.floor((Tn - t) / 2),
    y0: 4 + i * En + Math.floor((En - n) / 2),
  };
}
var Fn = [`#7a2f2a`, `#2f4a6b`, `#4f5a2a`, `#5a3a5e`, `#6b4a2a`];
function In(e, t, n) {
  switch ((e.exit(6), e.rug(5, 6, 3, 2, Fn[Math.floor(n() * Fn.length)]), t)) {
    case `bread`:
      (e.put(`oven`, 1, 2, 2, 2),
        e.put(`shelf`, 8, 2, 4, 1, `bread`),
        e.put(`counter`, 3, 4, 7, 1, `bread`),
        e.put(`bench`, 9, 6, 2, 1, `dough`),
        e.put(`sacks`, 11, 5),
        e.put(`sacks`, 1, 6),
        e.wall(`window`, 4, 2),
        e.wall(`hang`, 3, 1, `bread`));
      break;
    case `mug`:
      (e.put(`kegs`, 1, 2, 3, 1),
        e.put(`shelf`, 4, 2, 3, 1, `bottles`),
        e.put(`counter`, 2, 4, 6, 1, `mugs`),
        e.put(`fireplace`, 9, 2, 3, 1),
        e.put(`table`, 9, 5, 2, 1, `mugs`),
        e.put(`stool`, 11, 5),
        e.put(`table`, 9, 7, 2, 1, `mugs`),
        e.put(`stool`, 11, 7),
        e.put(`stool`, 8, 7),
        e.wall(`sign`, 7, 1, `mug`));
      break;
    case `anvil`:
      (e.put(`forge`, 1, 2, 2, 2),
        e.put(`barrel`, 3, 2, 1, 1, `water`),
        e.put(`rack`, 8, 2, 4, 1, `weapons`),
        e.put(`counter`, 7, 4, 4, 1, `tools`),
        e.put(`armor`, 11, 6),
        e.put(`sacks`, 1, 5, 1, 1, `coal`),
        e.wall(`tools`, 4, 3));
      break;
    case `sword`:
      (e.put(`rack`, 1, 2, 3, 1, `weapons`),
        e.put(`rack`, 9, 2, 3, 1, `shields`),
        e.put(`counter`, 4, 4, 5, 1, `blades`),
        e.put(`armor`, 1, 5),
        e.put(`armor`, 1, 7),
        e.put(`armor`, 11, 6),
        e.wall(`shield`, 5, 1, `marizon`),
        e.wall(`shield`, 7, 1, `watch`));
      break;
    case `potion`:
      (e.put(`shelf`, 1, 2, 3, 1, `potions`),
        e.put(`cauldron`, 4, 3),
        e.put(`bench`, 8, 2, 4, 1, `alembic`),
        e.put(`counter`, 3, 4, 7, 1, `potions`),
        e.put(`case`, 10, 6, 2, 1, `potions`),
        e.wall(`hang`, 5, 3, `herbs`));
      break;
    case `staff`:
      (e.put(`rack`, 1, 2, 3, 1, `staves`),
        e.put(`bench`, 8, 2, 4, 1, `lathe`),
        e.put(`counter`, 4, 4, 5, 1, `orbs`),
        e.wall(`window`, 5, 2));
      break;
    case `book`:
      (e.put(`bookshelf`, 1, 2, 3, 1),
        e.put(`bookshelf`, 9, 2, 3, 1),
        e.put(`counter`, 4, 4, 5, 1, `books`),
        e.put(`table`, 9, 6, 2, 1, `books`),
        e.put(`stool`, 11, 6),
        e.put(`candles`, 1, 6),
        e.wall(`window`, 5, 2));
      break;
    case `gem`:
      (e.put(`shelf`, 1, 2, 3, 1, `gems`),
        e.put(`bench`, 8, 2, 4, 1, `gemwheel`),
        e.put(`counter`, 4, 4, 5, 1, `gems`),
        e.put(`case`, 1, 6, 2, 1, `gems`),
        e.put(`case`, 10, 6, 2, 1, `gems`),
        e.wall(`window`, 5, 2));
      break;
    case `robe`:
      (e.put(`shelf`, 1, 2, 3, 1, `fabric`),
        e.put(`bench`, 8, 2, 4, 1, `sewing`),
        e.put(`counter`, 4, 4, 5, 1, `fabric`),
        e.wall(`window`, 5, 2));
      break;
    case `herb`:
      (e.put(`rack`, 1, 2, 3, 1, `herbs`),
        e.put(`bench`, 8, 2, 4, 1, `mortar`),
        e.put(`counter`, 4, 4, 5, 1, `herbs`),
        e.put(`plant`, 1, 6),
        e.put(`plant`, 11, 5),
        e.put(`plant`, 11, 7),
        e.wall(`hang`, 5, 3, `herbs`));
      break;
    case `boot`:
      (e.put(`rack`, 1, 2, 3, 1, `boots`),
        e.put(`bench`, 8, 2, 4, 1, `cobbler`),
        e.put(`counter`, 4, 4, 5, 1, `boots`),
        e.put(`sacks`, 11, 6, 1, 1, `hides`),
        e.wall(`window`, 5, 2));
      break;
    case `bag`:
      (e.put(`shelf`, 1, 2, 3, 1, `goods`),
        e.put(`shelf`, 9, 2, 3, 1, `goods`),
        e.put(`counter`, 4, 4, 5, 1, `goods`),
        e.put(`barrel`, 1, 6),
        e.put(`barrel`, 1, 7),
        e.put(`crates`, 11, 6),
        e.put(`sacks`, 11, 7),
        e.wall(`hang`, 5, 3, `rope`));
      break;
    case `cheese`:
      (e.put(`shelf`, 1, 2, 3, 1, `cheese`),
        e.put(`shelf`, 9, 2, 3, 1, `cheese`),
        e.put(`counter`, 4, 4, 5, 1, `cheese`),
        e.put(`barrel`, 1, 6, 1, 1, `milk`),
        e.wall(`window`, 5, 2));
      break;
    case `candle`:
      (e.put(`rack`, 1, 2, 3, 1, `candles`),
        e.put(`rack`, 9, 2, 3, 1, `candles`),
        e.put(`counter`, 4, 4, 5, 1, `candles`),
        e.put(`candles`, 11, 5),
        e.put(`candles`, 11, 7),
        e.wall(`hang`, 5, 3, `tapers`));
      break;
    case `fish`:
      (e.put(`barrel`, 1, 2, 1, 1, `fish`),
        e.put(`barrel`, 2, 2, 1, 1, `fish`),
        e.put(`shelf`, 9, 2, 3, 1, `ice`),
        e.put(`counter`, 4, 4, 5, 1, `fish`),
        e.put(`case`, 1, 6, 2, 1, `fish`),
        e.wall(`nets`, 3, 5));
      break;
    case `lantern`:
      (e.put(`rack`, 1, 2, 3, 1, `lanterns`),
        e.put(`bench`, 8, 2, 4, 1, `tools`),
        e.put(`counter`, 4, 4, 5, 1, `lanterns`),
        e.put(`candles`, 11, 6),
        e.wall(`hang`, 5, 3, `lanterns`));
  }
  for (let [t, r, i] of [
    [`plant`, 1, 8],
    [`barrel`, 11, 8],
    [`crates`, 1, 8],
    [`plant`, 11, 8],
  ])
    n() < 0.5 && e.put(t, r, i);
  (e.wall(`sconce`, 1), e.wall(`sconce`, 11));
}
function Ln(e) {
  (e.exit(9),
    e.put(`kegs`, 1, 2, 3, 1),
    e.put(`shelf`, 4, 2, 3, 1, `bottles`),
    e.put(`counter`, 2, 4, 7, 1, `mugs`),
    e.put(`fireplace`, 12, 2, 3, 1));
  for (let [t, n] of [
    [12, 5],
    [12, 8],
    [3, 7],
  ])
    (e.put(`table`, t, n, 2, 1, `mugs`),
      e.put(`stool`, t - 1, n),
      e.put(`stool`, t + 2, n));
  (e.put(`barrel`, 1, 9),
    e.put(`plant`, 17, 9),
    e.rug(11, 3, 5, 1, `#7a2f2a`),
    e.wall(`board`, 9, 2),
    e.wall(`window`, 6, 2),
    e.wall(`sconce`, 1),
    e.wall(`sconce`, 17),
    e.wall(`sign`, 11, 1, `mug`));
}
function Rn(e) {
  for (let t of [12, 13, 14]) e.exit(t);
  (e.rug(7, 2, 13, 3, `dais`),
    e.rug(12, 5, 3, 11, `#6b1f2a`),
    e.put(`seat`, 13, 3, 1, 1, `idris`),
    e.put(`seat`, 9, 3, 1, 1, `pyro`),
    e.put(`seat`, 11, 3, 1, 1, `cryo`),
    e.put(`seat`, 15, 3, 1, 1, `storm`),
    e.put(`seat`, 17, 3, 1, 1, `void`),
    e.put(`brazier`, 7, 3),
    e.put(`brazier`, 19, 3),
    e.put(`longtable`, 9, 6, 9, 2, `council`));
  for (let t of [9, 11, 15, 17]) e.put(`chair`, t, 8);
  (e.put(`brazier`, 6, 13),
    e.put(`brazier`, 20, 13),
    e.wall(`window`, 4, 2),
    e.wall(`window`, 20, 2),
    e.wall(`rose`, 12, 3),
    e.wall(`banner`, 2, 1, `pyro`),
    e.wall(`banner`, 8, 1, `cryo`),
    e.wall(`banner`, 17, 1, `storm`),
    e.wall(`banner`, 24, 1, `void`),
    e.wall(`banner`, 10, 1, `marizon`),
    e.wall(`banner`, 16, 1, `marizon`),
    (e.cells[1 * e.w + 22] = On.DOOR),
    e.wall(`doorway`, 22, 1));
}
function zn(e) {
  (e.exit(8),
    e.put(`bookshelf`, 1, 2, 4, 1),
    e.put(`bookshelf`, 12, 2, 4, 1),
    e.put(`lectern`, 8, 3, 1, 1, `attunements`),
    e.put(`candles`, 6, 3),
    e.put(`candles`, 10, 3));
  for (let t of [5, 8])
    (e.put(`bookshelf`, 1, t, 4, 1), e.put(`bookshelf`, 12, t, 4, 1));
  (e.put(`table`, 6, 6, 2, 1, `books`),
    e.put(`table`, 9, 6, 2, 1, `scrolls`),
    e.put(`stool`, 6, 7),
    e.put(`stool`, 10, 7),
    e.put(`globe`, 14, 10),
    e.put(`plant`, 1, 10),
    e.rug(6, 9, 5, 2, `#2f4a6b`),
    e.wall(`window`, 5, 2),
    e.wall(`window`, 10, 2),
    e.wall(`banner`, 8, 1, `marizon`),
    e.wall(`sconce`, 1),
    e.wall(`sconce`, 15));
}
function Bn(e) {
  e.exit(8);
  let t = [`pyro`, `cryo`, `storm`],
    n = [`void`, `storm`, `cryo`];
  ([3, 6, 9].forEach((r, i) => {
    (e.put(`bed`, 1, r, 1, 2, t[i]),
      e.put(`trunk`, 2, r + 1),
      e.put(`bed`, 15, r, 1, 2, n[i]),
      e.put(`trunk`, 14, r + 1));
  }),
    e.put(`table`, 6, 4, 2, 1, `books`),
    e.put(`table`, 9, 4, 2, 1, `scrolls`),
    e.put(`stool`, 6, 5),
    e.put(`stool`, 10, 5),
    e.put(`table`, 6, 8, 2, 1, `candles`),
    e.put(`table`, 9, 8, 2, 1, `books`),
    e.put(`dummy`, 12, 11, 1, 1, `straw`),
    e.rug(7, 6, 3, 1, `#3b5c9c`),
    e.wall(`banner`, 3, 1, `pyro`),
    e.wall(`banner`, 6, 1, `cryo`),
    e.wall(`banner`, 10, 1, `storm`),
    e.wall(`banner`, 13, 1, `void`),
    e.wall(`window`, 7, 3),
    e.wall(`sconce`, 1),
    e.wall(`sconce`, 15));
}
function Vn(e) {
  (e.exit(5),
    e.put(`bookshelf`, 1, 2, 2, 1),
    e.put(`fireplace`, 7, 2, 2, 1),
    e.put(`chair`, 5, 3, 1, 1, `idris`),
    e.put(`desk`, 4, 4, 3, 1, `letters`),
    e.put(`candles`, 8, 4),
    e.put(`trunk`, 1, 6),
    e.put(`globe`, 1, 4),
    e.rug(3, 5, 5, 2, `#5a3a5e`),
    e.wall(`window`, 4, 2),
    e.wall(`portrait`, 3, 1));
}
var Hn = { w: 8, h: 6, door: 0.5, shop: { sign: `mug` } };
function Un(e, t) {
  let n = ut(t);
  return e.tx + Math.floor((n.x + n.w / 2) / 16);
}
function Wn(e, t) {
  let n = ut(t);
  return e.tx * 16 + n.x + n.w / 2;
}
