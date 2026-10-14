// assets__index-BTsv3a2s 19 — base
// Lines 22435-22761 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Fa(e) {
  let t = e?.loaded;
  return t && (e?.[t] ?? 0) > 0 ? t : void 0;
}
var Ia = { claimSecs: 900, fadeSecs: 1800, wear: 0.1 },
  La = { cost: { crowns: 120, dust: 4 } };
function Ra(e) {
  return Ma.types.includes(Da[e.base].type);
}
function za(e) {
  return Ra(e)
    ? Math.round(
        (Ma.base + Ma.perTier * (ma(e.ilvl) - 1)) * (Ma.rarity[e.rarity] ?? 1),
      )
    : 0;
}
function Ba(e) {
  let t = za(e);
  return t > 0 && (e.wear ?? 0) >= t;
}
function Va(e) {
  let t = za(e),
    n = Math.min(t, e.wear ?? 0);
  return {
    crowns:
      t > 0 && n > 0
        ? Math.max(1, Math.ceil((n / t) * e.ilvl * 6 * _a[e.rarity].crownMult))
        : 0,
    dust: 0,
    shards: 0,
    motes: 0,
    chips: 0,
  };
}
function Ha(e) {
  return Da[e.base].type;
}
function Ua(e) {
  return !(e.unique && Aa[e.unique].quest);
}
function Wa(e) {
  return Da[e.base].names[ma(e.ilvl) - 1];
}
function Ga(e) {
  return _a[e.rarity].quality * oo(e.enchant) * (e.hollowed ? va.statMult : 1);
}
function Ka(e, t) {
  return fa(e.ilvl) * t.roll * Ga(e) * ya[t.stat].perPoint;
}
function qa(e) {
  return Da[e.base].implicit.map(([t, n]) => ({
    stat: t,
    value: fa(e.ilvl) * n * Ga(e) * ya[t].perPoint,
  }));
}
function Ja(e, t, n) {
  let r = ya[e],
    i = r.pct
      ? `${(t * 100).toFixed(+(t < 0.1))}%`
      : e === `clarity`
        ? t.toFixed(1)
        : `${Math.round(t)}`;
  return r.desc(i, n ? Ya(n) : void 0);
}
function Ya(e) {
  return Se(e)?.name ?? e;
}
function Xa(e) {
  if (e.unique) return Aa[e.unique].name;
  if (e.base === `spellbook`)
    return `${ie(e.spell ?? ``) ? `Manual` : `Spellbook`}: ${Ya(e.spell ?? ``)}`;
  let t = Wa(e),
    [n, r] = e.affixes,
    i = (t, n) =>
      t.stat === `spellDmg` || t.stat === `spellCost`
        ? Ca[e.school ?? `pyro`][n]
        : ya[t.stat][n];
  return (
    e.rarity === `kindled` && n && (t = `${i(n, `prefix`)} ${t}`),
    (e.rarity === `runed` || e.rarity === `resonant`) &&
      n &&
      ((t = `${i(n, `prefix`)} ${t}`), r && (t = `${t} ${i(r, `suffix`)}`)),
    e.hollowed && (t = `Hollowed ${t}`),
    t
  );
}
function Za(e) {
  let t = {},
    n = (e, n) => (t[e] = (t[e] ?? 0) + n);
  for (let t of e)
    if (!Ba(t)) {
      for (let e of qa(t)) n(e.stat, e.value);
      for (let e of t.affixes)
        n(e.spell ? `${e.stat}:${e.spell}` : e.stat, Ka(t, e));
      (t.hollowed && n(`hunger`, 1),
        t.unique === `unfilledStaff` &&
          n(`power`, 0.08 * (t.sockets?.length ?? 0)));
    }
  for (let [e, n] of Object.entries(Sa))
    t[e] !== void 0 && (t[e] = Math.min(t[e], n));
  return t;
}
function Qa(e, t) {
  if (!t) return e;
  if (
    ((e.globalDmg += t.power ?? 0),
    (e.hp += Math.round(t.vitality ?? 0)),
    (e.mana += Math.round(t.wisdom ?? 0)),
    (e.regen += t.clarity ?? 0),
    (e.crit += t.crit ?? 0),
    (e.speed += t.swiftness ?? 0),
    (e.healAll += t.leech ?? 0),
    (e.cdAll += t.haste ?? 0),
    (e.ward += t.ward ?? 0),
    (e.hollowguard += t.hollowguard ?? 0),
    t.might)
  )
    for (let n of xa) e.dmg[n] = (e.dmg[n] ?? 0) + t.might;
  for (let [n, r] of Object.entries(t)) {
    let [t, i] = n.split(`:`);
    i &&
      (t === `spellDmg` && (e.dmg[i] = (e.dmg[i] ?? 0) + r),
      t === `spellCost` && (e.cost[i] = (e.cost[i] ?? 0) + r));
  }
  return e;
}
function $a(e) {
  if (!e) return;
  let t = {
    base: e.base,
    unique: e.unique,
    ilvl: e.ilvl,
    school: e.school,
    hollowed: e.hollowed,
  };
  return (Ba(e) && (t.broken = !0), t);
}
function eo(e) {
  return {
    id: `look`,
    base: e.base,
    rarity: `runed`,
    ilvl: e.ilvl,
    school: e.school,
    affixes: [],
    unique: e.unique,
    enchant: 0,
    failStacks: 0,
    hollowed: e.hollowed,
    memory: 0,
  };
}
var to = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.32, 0.39, 0.46, 0.53, 0.6],
  no = [1, 1, 1, 1, 1, 1, 0.8, 0.65, 0.5, 0.4, 0.3],
  ro = 0.1,
  io = 0.3,
  ao = [
    { at: 4, name: `Glinting` },
    { at: 7, name: `Radiant` },
    { at: 10, name: `Chorus-bright` },
  ];
function oo(e) {
  return 1 + to[e];
}
var so = {
  crowns: { name: `Crowns`, desc: `Conclave silver. Every town takes it.` },
  dust: {
    name: `Aether Dust`,
    desc: `Salvaged from Plain and Kindled items. The base of every Kindling.`,
  },
  shards: {
    name: `Aether Shards`,
    desc: `Salvaged from Runed and better items, and knocked from the antlers of the Glade's moose.`,
  },
  motes: {
    name: `Chorus Motes`,
    desc: `A single note of the Chorus, caught in glass. From Key raids and Remembered items.`,
  },
  chips: {
    name: `Ward-stone Chips`,
    desc: `Brassdeep ward-stone. Keeps a failed Kindling from costing a level.`,
  },
};
function co(e, t) {
  return {
    crowns: Math.round(e.ilvl * 5 * t * _a[e.rarity].crownMult),
    dust: t <= 5 ? 3 * t : 15,
    shards: t >= 4 ? (t - 3) * 2 : 0,
    motes: t >= 8 ? t - 7 : 0,
    chips: 0,
  };
}
function lo(e) {
  let t = e.enchant + 1;
  return t > 10 ? 0 : Math.min(1, no[t] + Math.min(io, e.failStacks * ro));
}
function uo(e) {
  return e.base === `spellbook`
    ? `A spellbook can't be Kindled. Read it.`
    : e.hollowed
      ? `Hollowed items can't be Kindled. Cleanse it first.`
      : e.enchant >= _a[e.rarity].maxEnchant
        ? `${_a[e.rarity].name} items stop at +${_a[e.rarity].maxEnchant}.`
        : null;
}
function fo(e) {
  return { crowns: e.ilvl * 40, dust: 0, shards: 4, motes: 1, chips: 0 };
}
function po(e) {
  let t = { crowns: 0, dust: 0, shards: 0, motes: 0, chips: 0 };
  switch (e.rarity) {
    case `plain`:
      t.dust = 2;
      break;
    case `kindled`:
      t.dust = 4;
      break;
    case `runed`:
      ((t.dust = 3), (t.shards = 1));
      break;
    case `resonant`:
      ((t.dust = 5), (t.shards = 2));
      break;
    case `remembered`:
      ((t.shards = 4), (t.motes = 1));
      break;
    case `skyfallen`:
      t.motes = 3;
  }
  return (
    (t.shards += Math.floor(e.enchant / 2)),
    e.hollowed && (t.shards += 1),
    t
  );
}
function mo(e) {
  return 25 * e;
}
var ho = 0;
function go(e) {
  return (
    (ho = (ho + 1) % 1e6),
    `${Math.floor(e() * 36 ** 6)
      .toString(36)
      .padStart(6, `0`)}${ho.toString(36)}`
  );
}
var _o = [1, 4, 8],
  vo = [`kindled`, `runed`, `resonant`];
function yo(e) {
  let t = xe[e];
  if (!t) return 0;
  let n = S[t].spells.findIndex((t) => t.id === e);
  return n >= 0
    ? n
    : t === `marksman` || t === `paladin`
      ? Math.max(
          0,
          C[t].findIndex((t) => t.id === e),
        )
      : 0;
}
function bo(e, t, n) {
  return {
    id: go(e),
    base: `spellbook`,
    rarity: vo[yo(t)] ?? `kindled`,
    ilvl: n,
    school: xe[t],
    affixes: [],
    enchant: 0,
    failStacks: 0,
    hollowed: !1,
    memory: 0,
    spell: t,
  };
}
function xo(e) {
  return e.base === `spellbook` && e.spell ? Se(e.spell) : void 0;
}
var So = [`cisterns`, `barrowdeep`, `rimewell`, `emberdeep`, `folly`],
  Co = [`ember`, `rime`, `storm`, `void`],
  wo = { ember: `rime`, rime: `ember`, storm: `void`, void: `storm` },
  To = { ember: `pyro`, rime: `cryo`, storm: `storm`, void: `void` },
  Eo = { ember: `#ff7a1a`, rime: `#5cc8ff`, storm: `#fff36b`, void: `#b84dff` },
  Do = { min: 1, max: 5, tuned: 3 },
  Oo = { normal: 5, hollowed: 3 },
  ko = {
    huskRiseSeconds: 25,
    sconceRadius: 4,
    waystoneRadius: 6,
    lanternRadius: 3,
    waystoneChannelSeconds: 3,
    waystoneClearRadius: 10,
    lockChannelSeconds: 1.5,
    bossResetSeconds: 10,
    closeAfterEmptySeconds: 300,
    hollowedLootLockHours: 20,
  },
  Ao = (function (e) {
    return (
      (e[(e.VOID = 0)] = `VOID`),
      (e[(e.FLOOR = 1)] = `FLOOR`),
      (e[(e.WALL = 2)] = `WALL`),
      (e[(e.SHALLOW = 3)] = `SHALLOW`),
      (e[(e.DEEP = 4)] = `DEEP`),
      (e[(e.DOOR = 5)] = `DOOR`),
      (e[(e.LOCK = 6)] = `LOCK`),
      (e[(e.DOWN = 7)] = `DOWN`),
      (e[(e.UP = 8)] = `UP`),
      (e[(e.RUG = 9)] = `RUG`),
      (e[(e.BRIDGE = 10)] = `BRIDGE`),
      e
    );
  })({});
function jo(e, t = !1) {
  return (
    e === 1 ||
    e === 3 ||
    e === 5 ||
    e === 7 ||
    e === 8 ||
    e === 9 ||
    e === 10 ||
    (t && e === 6)
  );
}
