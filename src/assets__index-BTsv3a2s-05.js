// assets__index-BTsv3a2s 05 — desc
// Lines 16031-16372 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function gt() {
  let e = {};
  for (let t of ft) {
    let n = dt[t];
    e[t] = {
      id: t,
      name: n.name,
      kind: `crop`,
      desc: n.desc,
      price: n.price,
      buyers: n.buyers,
      crop: t,
      color: n.color,
    };
  }
  for (let t of ft) {
    let n = dt[t];
    e[`seed:${t}`] = {
      id: `seed:${t}`,
      name: `${n.name} Seeds`,
      kind: `seed`,
      desc: `Plant them in a garden bed. Ripe in ${n.growMin} minutes if you keep them watered.`,
      price: Math.max(1, Math.floor(n.seedCrowns / 3)),
      buyers: [`herb`],
      crop: t,
      color: n.color,
    };
  }
  for (let [t, n] of Object.entries(mt))
    e[`potion:${t}`] = {
      id: `potion:${t}`,
      kind: `potion`,
      color: `#ffffff`,
      ...n,
    };
  for (let [t, n] of Object.entries(ht))
    e[`dish:${t}`] = { id: `dish:${t}`, kind: `dish`, color: `#ffffff`, ...n };
  return (
    (e.sludge = {
      id: `sludge`,
      name: `Murky Sludge`,
      kind: `junk`,
      desc: `That wasn't a recipe. The chandler will take it for candle-fat.`,
      price: 1,
      buyers: [`candle`],
      color: `#6b6152`,
    }),
    (e[pt] = {
      id: pt,
      name: `Well Water`,
      kind: `water`,
      desc: `Your watering can, filled at the well. Each pour waters one bed; it holds 10.`,
      price: 0,
      buyers: [],
      color: `#5bb8ff`,
    }),
    e
  );
}
var _t = gt(),
  vt = Object.keys(_t),
  yt = (e, t, n, r, i, a = !1) => ({
    id: e,
    station: t,
    makes: n,
    n: r,
    needs: i,
    known: a,
  }),
  bt = Object.fromEntries(
    [
      yt(
        `mending`,
        `cauldron`,
        `potion:mending`,
        2,
        { mendleaf: 2, sunwheat: 1 },
        !0,
      ),
      yt(
        `tonic`,
        `cauldron`,
        `potion:tonic`,
        2,
        { manaberry: 2, mendleaf: 1 },
        !0,
      ),
      yt(`emberdraught`, `cauldron`, `potion:emberdraught`, 2, {
        emberpepper: 2,
        hearthroot: 1,
      }),
      yt(`rimewater`, `cauldron`, `potion:rimewater`, 2, {
        rimebloom: 2,
        mendleaf: 1,
      }),
      yt(`stormbrew`, `cauldron`, `potion:stormbrew`, 2, {
        stormcorn: 2,
        windreed: 1,
      }),
      yt(`veilwine`, `cauldron`, `potion:veilwine`, 2, {
        veilgrape: 2,
        manaberry: 1,
      }),
      yt(`skyglass`, `cauldron`, `potion:skyglass`, 2, {
        skyberry: 1,
        manaberry: 1,
        windreed: 1,
      }),
      yt(`oxblood`, `cauldron`, `potion:oxblood`, 2, {
        ironbean: 2,
        mendleaf: 1,
      }),
      yt(`quickstep`, `cauldron`, `potion:quickstep`, 2, {
        windreed: 2,
        stormcorn: 1,
      }),
      yt(`lifebloom`, `cauldron`, `potion:lifebloom`, 2, {
        mendleaf: 2,
        skyberry: 1,
      }),
      yt(`hollowbane`, `cauldron`, `potion:hollowbane`, 2, {
        rimebloom: 1,
        veilgrape: 1,
        sunwheat: 1,
      }),
      yt(`wardsalt`, `cauldron`, `potion:wardsalt`, 2, {
        ironbean: 1,
        hearthroot: 1,
        rimebloom: 1,
      }),
      yt(`bread`, `cookfire`, `dish:bread`, 2, { sunwheat: 3 }, !0),
      yt(
        `stew`,
        `cookfire`,
        `dish:stew`,
        2,
        { hearthroot: 2, mendleaf: 1 },
        !0,
      ),
      yt(`beanpot`, `cookfire`, `dish:beanpot`, 2, {
        ironbean: 2,
        sunwheat: 1,
      }),
      yt(`pepperpot`, `cookfire`, `dish:pepperpot`, 2, {
        emberpepper: 1,
        hearthroot: 1,
        ironbean: 1,
      }),
      yt(`frostsalad`, `cookfire`, `dish:frostsalad`, 2, {
        rimebloom: 1,
        mendleaf: 1,
        windreed: 1,
      }),
      yt(`thundercake`, `cookfire`, `dish:thundercake`, 2, {
        stormcorn: 1,
        sunwheat: 2,
      }),
      yt(`duskglaze`, `cookfire`, `dish:duskglaze`, 2, {
        veilgrape: 1,
        lanterngourd: 1,
      }),
      yt(`lanternpie`, `cookfire`, `dish:lanternpie`, 2, {
        lanterngourd: 1,
        sunwheat: 1,
        hearthroot: 1,
      }),
      yt(`skytart`, `cookfire`, `dish:skytart`, 2, {
        skyberry: 1,
        sunwheat: 2,
      }),
    ].map((e) => [e.id, e]),
  ),
  xt = Object.keys(bt),
  St = `rested`,
  Ct = { slot: `rest`, xp: 0.1, minutes: 30 },
  wt = 2e4;
function Tt(e, t) {
  let n = {},
    r = {},
    i = 0;
  for (let a of e ?? []) {
    if (a.until <= t) continue;
    let e = a.good === `rested` ? Ct : _t[a.good]?.use;
    if (e) {
      for (let [t, r] of Object.entries(e.attrs ?? {})) n[t] = (n[t] ?? 0) + r;
      for (let [t, n] of Object.entries(e.stats ?? {})) r[t] = (r[t] ?? 0) + n;
      i += e.xp ?? 0;
    }
  }
  return { attrs: n, stats: r, xp: i };
}
function Et(e, t) {
  let n = { ...(e ?? {}) };
  for (let [e, r] of Object.entries(t)) n[e] = (n[e] ?? 0) + r;
  return n;
}
var Dt = {
    w: 44,
    h: 32,
    gate: { x: 21, w: 2 },
    cottage: { x: 17, y: 2, w: 10, h: 8, pack: `C` },
    well: { x: 29, y: 8, w: 2, h: 2 },
    basket: { x: 15, y: 9 },
    door: { x: 21, w: 2, y: 10 },
    path: { x: 21, w: 2, y0: 10, y1: 30 },
    trees: [
      { x: 3, y: 4 },
      { x: 7, y: 2 },
      { x: 11, y: 5 },
      { x: 35, y: 3 },
      { x: 39, y: 5 },
      { x: 41, y: 2 },
      { x: 2, y: 17 },
      { x: 41, y: 19 },
      { x: 2, y: 28 },
      { x: 41, y: 28 },
    ],
  },
  Ot = {
    1: {
      tier: 1,
      name: `Holding`,
      claim: { x: 10, y: 1, w: 24, h: 20 },
      cost: {},
    },
    2: {
      tier: 2,
      name: `Steading`,
      claim: { x: 5, y: 1, w: 34, h: 25 },
      cost: { crowns: 400, dust: 20 },
    },
    3: {
      tier: 3,
      name: `Manor Grounds`,
      claim: { x: 1, y: 1, w: 42, h: 30 },
      cost: { crowns: 1500, dust: 60, shards: 6 },
    },
  },
  kt = {
    bed: {
      id: `bed`,
      name: `Garden Bed`,
      desc: `A square of tilled, crystal-fed soil. One crop at a time.`,
      blocks: !1,
      cost: { crowns: 6 },
    },
    crate: {
      id: `crate`,
      name: `Crate`,
      desc: `A stout wooden chest. 16 places for gear or stacks of goods.`,
      blocks: !0,
      cost: { crowns: 40 },
      slots: 16,
    },
    strongbox: {
      id: `strongbox`,
      name: `Strongbox`,
      desc: `Iron-banded. 32 places.`,
      blocks: !0,
      cost: { crowns: 220, dust: 6 },
      slots: 32,
    },
    coffer: {
      id: `coffer`,
      name: `Warded Coffer`,
      desc: `Crystal-set and ward-runed. 48 places.`,
      blocks: !0,
      cost: { crowns: 600, dust: 20, shards: 2 },
      slots: 48,
    },
    cookfire: {
      id: `cookfire`,
      name: `Cookfire`,
      desc: `Cook meals that last half an hour.`,
      blocks: !0,
      cost: { crowns: 60 },
      station: `cookfire`,
    },
    cauldron: {
      id: `cauldron`,
      name: `Brewing Cauldron`,
      desc: `Brew potions. Try new combinations to find new recipes.`,
      blocks: !0,
      cost: { crowns: 150, dust: 5 },
      station: `cauldron`,
    },
    fence: {
      id: `fence`,
      name: `Fence`,
      desc: `A length of rail fence. It joins up with its neighbours.`,
      blocks: !0,
      cost: { crowns: 3 },
    },
    lamp: {
      id: `lamp`,
      name: `Lantern Post`,
      desc: `Light for the long nights.`,
      blocks: !0,
      cost: { crowns: 25 },
    },
    barrel: {
      id: `barrel`,
      name: `Barrel`,
      desc: `Rain barrel. It looks the part.`,
      blocks: !0,
      cost: { crowns: 12 },
    },
    planter: {
      id: `planter`,
      name: `Flower Box`,
      desc: `Flowers for the sake of flowers.`,
      blocks: !1,
      cost: { crowns: 10 },
    },
    tree: {
      id: `tree`,
      name: `Birch`,
      desc: `A silver birch in autumn gold, planted where you like.`,
      blocks: !0,
      cost: { crowns: 20 },
    },
    pine: {
      id: `pine`,
      name: `Pine`,
      desc: `A dark Tithefields pine. Evergreen.`,
      blocks: !0,
      cost: { crowns: 20 },
    },
    flowers: {
      id: `flowers`,
      name: `Wildflowers`,
      desc: `A patch of meadow flowers, sown straight in the grass. Walkable.`,
      blocks: !1,
      cost: { crowns: 4 },
    },
  },
  At = Object.keys(kt),
  jt = 0.5,
  Mt = 0.5;
function Nt(e) {
  return dt[e].growMin * 6e4;
}
