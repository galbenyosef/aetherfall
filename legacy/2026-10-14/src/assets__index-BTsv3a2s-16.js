// assets__index-BTsv3a2s 16 — desc
// Lines 21446-21736 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function na(e, t, n, r) {
  if (r) return [`Tap to speak…`];
  let i = e[0] || e[1],
    a = n
      ? t === `near`
        ? ` nearby`
        : t === `party`
          ? ` to your party`
          : ` to the realm`
      : ``,
    o = Bi(i),
    s = i
      ? [
          `Press ${o} to speak${a}…`,
          `Press ${o} to speak…`,
          `${o} to speak…`,
          `${o}…`,
          `${o.replace(/ \+ /g, `+`)}…`,
        ]
      : [`Click here to speak${a}…`, `Click here to speak…`, `Click to speak…`];
  return [...new Set(s)];
}
function ra(e, t) {
  return e.find(t) ?? e[e.length - 1];
}
function ia(e) {
  return e.to
    ? `whisper`
    : e.party
      ? `party`
      : e.system
        ? `news`
        : e.near
          ? `near`
          : `words`;
}
var aa = /[\p{L}\p{N}_]/u;
function oa(e, t) {
  if (!t) return !1;
  for (let n = e.indexOf(t); n >= 0; n = e.indexOf(t, n + 1)) {
    let r = e[n - 1],
      i = e[n + t.length];
    if ((!r || !aa.test(r)) && (!i || !aa.test(i))) return !0;
  }
  return !1;
}
function sa(e, t, n) {
  return t || ia(e) !== `news` || (!!n && e.name === n) || oa(e.text ?? ``, n);
}
function ca(e, t = 100, n = 50, r) {
  let i = [],
    a = 0,
    o = 0,
    s = 0;
  for (let c = e.length - 1; c >= 0; c--) {
    let l = e[c];
    i[c] = ia(l) === `news` ? o++ < n : r?.(l) ? s++ < 20 : a++ < t;
  }
  return e.filter((e, t) => i[t]);
}
function la(e, t, n) {
  return ca(
    e.filter((e) => sa(e, t, n)),
    30,
    20,
  );
}
var ua = 8e3;
function da(e, t, n, r, i) {
  return i && !n && !r && e - t >= 8e3;
}
function fa(e) {
  return 3 + 0.9 * e;
}
function pa(e) {
  return Math.max(1, Math.min(30, e - 2));
}
function ma(e) {
  return e >= 30 ? 4 : e >= 20 ? 3 : e >= 10 ? 2 : 1;
}
var ha = { 1: `Initiate`, 2: `Adept`, 3: `Magus`, 4: `High Mage` },
  ga = [`plain`, `kindled`, `runed`, `resonant`, `remembered`, `skyfallen`],
  _a = {
    plain: {
      id: `plain`,
      name: `Plain`,
      common: `Common`,
      color: `#c9c1d9`,
      dark: `#5d566b`,
      affixes: 0,
      quality: 0.85,
      maxEnchant: 3,
      crownMult: 0.5,
      beam: !1,
      lore: `Honest work from a Marizon shop. No Aether in it at all.`,
    },
    kindled: {
      id: `kindled`,
      name: `Kindled`,
      common: `Uncommon`,
      color: `#6fdc5a`,
      dark: `#1f6b2a`,
      affixes: 1,
      quality: 0.92,
      maxEnchant: 5,
      crownMult: 0.75,
      beam: !1,
      lore: `A spark of Aether caught in the making.`,
    },
    runed: {
      id: `runed`,
      name: `Runed`,
      common: `Rare`,
      color: `#4fa8ff`,
      dark: `#1a3f7a`,
      affixes: 2,
      quality: 1,
      maxEnchant: 7,
      crownMult: 1,
      beam: !0,
      lore: `Cut with the ward-runes of the early schools.`,
    },
    resonant: {
      id: `resonant`,
      name: `Resonant`,
      common: `Epic`,
      color: `#c070ff`,
      dark: `#4a1f7a`,
      affixes: 3,
      quality: 1.1,
      maxEnchant: 10,
      crownMult: 1.5,
      beam: !0,
      lore: `It hums in the key of the Chorus.`,
    },
    remembered: {
      id: `remembered`,
      name: `Remembered`,
      common: `Legendary`,
      color: `#ffa53a`,
      dark: `#7a3f0a`,
      affixes: 2,
      quality: 1.2,
      maxEnchant: 10,
      crownMult: 2,
      beam: !0,
      lore: `A named thing. A crystal remembers who carried it, and it remembers you now.`,
    },
    skyfallen: {
      id: `skyfallen`,
      name: `Skyfallen`,
      common: `Mythic`,
      color: `#7ef9ff`,
      dark: `#1a6a78`,
      affixes: 0,
      quality: 1.3,
      maxEnchant: 10,
      crownMult: 3,
      beam: !0,
      lore: `Forged from a piece of the Aetherfall itself. There are only a handful in the realm.`,
    },
  },
  va = {
    color: `#d8283c`,
    core: `#ffffff`,
    statMult: 1.25,
    dropChance: 0.2,
    hunger: `Hunger: in combat, lose 0.5% of maximum health per second unless you've slain something in the last 5 seconds.`,
  },
  ya = {
    power: {
      id: `power`,
      name: `Spellpower`,
      perPoint: 0.002,
      pct: !0,
      prefix: `Empowered`,
      suffix: `of the Spark`,
      desc: (e) => `+${e} spell damage`,
    },
    vitality: {
      id: `vitality`,
      name: `Vitality`,
      perPoint: 1.5,
      pct: !1,
      prefix: `Stalwart`,
      suffix: `of the Hearth`,
      desc: (e) => `+${e} maximum health`,
    },
    wisdom: {
      id: `wisdom`,
      name: `Wisdom`,
      perPoint: 1.5,
      pct: !1,
      prefix: `Deep`,
      suffix: `of the Well`,
      desc: (e) => `+${e} maximum mana`,
    },
    clarity: {
      id: `clarity`,
      name: `Clarity`,
      perPoint: 0.1,
      pct: !1,
      prefix: `Clear`,
      suffix: `of Stillwater`,
      desc: (e) => `+${e} mana per second`,
    },
    crit: {
      id: `crit`,
      name: `Precision`,
      perPoint: 0.001,
      pct: !0,
      prefix: `Keen`,
      suffix: `of the Needle`,
      desc: (e) => `+${e} critical strike chance`,
    },
    haste: {
      id: `haste`,
      name: `Haste`,
      perPoint: 0.0015,
      pct: !0,
      prefix: `Quickened`,
      suffix: `of the Gale`,
      desc: (e) => `${e} faster cooldowns`,
    },
    swiftness: {
      id: `swiftness`,
      name: `Swiftness`,
      perPoint: 0.001,
      pct: !0,
      prefix: `Fleet`,
      suffix: `of the Road`,
      desc: (e) => `+${e} movement speed`,
    },
    ward: {
      id: `ward`,
      name: `Ward`,
      perPoint: 0.001,
      pct: !0,
      prefix: `Warded`,
      suffix: `of the Lumen`,
      desc: (e) => `${e} less damage taken`,
    },
    leech: {
      id: `leech`,
      name: `Siphon`,
      perPoint: 5e-4,
      pct: !0,
      prefix: `Thirsting`,
      suffix: `of the Tithe`,
      desc: (e) => `Heal for ${e} of spell damage dealt`,
    },
    hollowguard: {
      id: `hollowguard`,
      name: `Hollowguard`,
      perPoint: 0.003,
      pct: !0,
      prefix: `Lanternlit`,
      suffix: `of the Vigil`,
      desc: (e) => `${e} less damage from Hollow magic and husks`,
    },
    spellDmg: {
      id: `spellDmg`,
      name: `Spell focus`,
      perPoint: 0.005,
      pct: !0,
      prefix: ``,
      suffix: ``,
      desc: (e, t) => `+${e} ${t} damage`,
    },
    spellCost: {
      id: `spellCost`,
      name: `Spell thrift`,
      perPoint: 0.004,
      pct: !0,
      prefix: ``,
      suffix: ``,
      desc: (e, t) => `${t} costs ${e} less ${t && ba(t) ? `stamina` : `mana`}`,
    },
    might: {
      id: `might`,
      name: `Might`,
      perPoint: 0.002,
      pct: !0,
      prefix: `Honed`,
      suffix: `of the Whetstone`,
      desc: (e) => `+${e} damage with weapons`,
    },
  };
function ba(e) {
  return ye.some((t) => t.name === e && t.stamina !== void 0 && t.mana === 0);
}
