// assets__index-BTsv3a2s 176 — school
// Lines 104153-104466 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Kae(e, t, n) {
  let r = Math.round(t.x - n.x),
    i = Math.round(t.y - n.y),
    a = t.size * 1.6,
    o = e.createRadialGradient(r, i, 0, r, i, a);
  (o.addColorStop(0, t.color),
    o.addColorStop(1, `rgba(0,0,0,0)`),
    (e.globalCompositeOperation = t.add ? `lighter` : `source-over`),
    (e.globalAlpha = t.alpha * 0.8),
    (e.fillStyle = o),
    e.fillRect(r - a, i - a, a * 2, a * 2),
    (e.globalAlpha = 1),
    (e.globalCompositeOperation = `source-over`));
}
function UH(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function qae(e, t) {
  switch (e.t) {
    case `circle`:
      return { ...e, r: e.r * t };
    case `ring`:
      return { ...e, r1: e.r0 + (e.r1 - e.r0) * t };
    case `line`:
      return {
        ...e,
        x1: e.x0 + (e.x1 - e.x0) * t,
        y1: e.y0 + (e.y1 - e.y0) * t,
      };
    case `cone`:
      return { ...e, r: e.r * t };
    case `rect`:
      return { ...e, h: e.h * t };
  }
}
var WH = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  Q = o((e, t) => {
    t.exports = WH();
  })(),
  GH = _u(),
  KH = null,
  qH = (e, t) =>
    KH
      ? KH.request(e, t)
      : Promise.reject(
          new vf(
            `Not connected to the realm right now. Try again in a moment.`,
          ),
        ),
  JH = { here: null, provisions: null, invites: [], notes: [] },
  YH = 0,
  XH = {
    me: null,
    mats: null,
    inv: null,
    ground: void 0,
    quests: void 0,
    altars: void 0,
    chat: [],
    delves: void 0,
    remains: void 0,
    wanted: void 0,
    writ: null,
    home: JH,
    party: void 0,
    offers: [],
    partyClosed: !1,
    followUntil: 0,
    partyStats: {},
    partyHere: null,
  },
  ZH = 8,
  QH = {
    token: null,
    client: null,
    characters: void 0,
    max: ZH,
    charactersError: null,
    ...XH,
  },
  $H = new Set(),
  eU = (e) => {
    QH = { ...QH, ...e };
    for (let e of $H) e();
  },
  tU = (e) => ($H.add(e), () => $H.delete(e)),
  nU = () => (0, v.useSyncExternalStore)(tU, () => QH);
function rU(e) {
  return (
    (QH.token !== e || !QH.client) &&
      (eU({
        token: e,
        client: new gu(GH, e),
        characters: void 0,
        max: ZH,
        charactersError: null,
        ...XH,
      }),
      iU(e)),
    QH.client
  );
}
async function iU(e) {
  try {
    let { characters: t, max: n } = await QH.client.roster();
    QH.token === e && eU({ characters: t, max: n, charactersError: null });
  } catch (t) {
    (console.warn(`gate:`, t),
      QH.token === e &&
        eU({
          characters: [],
          charactersError: t instanceof mu ? t.message : String(t),
        }));
  }
}
var aU = (e) => (e === `f` ? `f` : `m`);
function oU(e) {
  return {
    id: e.id,
    name: e.name,
    level: e.level,
    school: e.school,
    hero: aU(e.hero),
  };
}
async function sU(e, t) {
  let { profile: n } = await e.character(t.id),
    r = QH.characters?.some((e) => e.id === t.id)
      ? QH.characters
      : [...(QH.characters ?? []), t];
  return (eU({ ...XH, characters: r, me: lU(t, n) }), Ml(t.id), t.id);
}
function cU(e, t) {
  let n = new Set(e.map((e) => e._id)),
    r = e.length ? e[e.length - 1]._creationTime : null,
    i = t
      .filter((e) => !n.has(e._id))
      .map((e) => ({
        _id: e._id,
        _creationTime: e.near && r !== null ? r : e.t,
        playerId: e.playerId,
        name: e.name,
        school: e.school,
        text: e.text,
        system: e.system,
        to: e.to,
        near: e.near,
        party: e.party,
      }));
  return i.length === 0
    ? e
    : ca(
        [...e, ...i].sort((e, t) => e._creationTime - t._creationTime),
        100,
        50,
        Xs(_l().ignored, QH.me?._id ?? ``),
      );
}
function lU(e, t, n, r) {
  let i = t?.level ?? e.level,
    a = t?.maxHp || Re(i),
    o = t && (t.x || t.y) && t.mapVersion === Lr;
  return {
    _id: e.id,
    _creationTime: e.created,
    name: e.name,
    school: e.school,
    hero: aU(t?.hero ?? e.hero),
    x: o ? t.x : Fr,
    y: o ? t.y : Ir,
    dir: 0,
    moving: !1,
    hp: t && t.hp > 0 ? t.hp : a,
    maxHp: a,
    level: i,
    xp: t?.xp ?? 0,
    kills: t?.kills ?? 0,
    dead: !1,
    online: !0,
    lastSeen: Date.now(),
    lastHurtAt: 0,
    passives: t?.passives ?? [],
    spells: t?.spells ?? [],
    loadout: t?.loadout ?? void 0,
    tutorial: t?.tutorial ?? Ke.DONE,
    mapVersion: Lr,
    gear: t?.gear,
    look: t?.look,
    lastKillAt: t?.lastKillAt,
    staffGiven: t?.staffGiven,
    attuned: n ?? [],
    outlawUntil: t?.outlawUntil,
    wanted: r ? { level: r.level, name: r.name, writ: r.writ } : void 0,
    buffs: t?.buffs ?? [],
    potionAt: t?.potionAt ?? 0,
    away: t?.away ?? null,
    hearthAt: t?.hearthAt ?? 0,
    kits: t?.kits ?? 0,
    quiver: t?.quiver ?? {},
  };
}
function uU(e) {
  return { ...e, affixes: e.affixes ?? [] };
}
function dU(e) {
  return { ...e, school: e.school, items: e.items.map(uU) };
}
function fU(e) {
  return { _id: `alt:${e.altarId}`, _creationTime: 0, ...e };
}
function pU(e, t) {
  let n = Il[t.altarId];
  if (!e || !n) return [];
  let r = { spell: t.altarId, x: n.x + 0.5, y: n.y + 0.5 },
    i = (e) => e === `rite` || e === `reclaim`,
    a = [];
  if (
    (i(t.state) &&
      (!i(e.state) || t.seq !== e.seq) &&
      a.push({ kind: `ritebegin`, ...r, value: +(t.state === `reclaim`) }),
    i(t.state) &&
      t.seq === e.seq &&
      t.wave > e.wave &&
      a.push({ kind: `wave`, ...r, value: t.wave }),
    i(t.state) && t.spawned > e.spawned && t.spawned >= 0)
  )
    for (let e of Jl(n))
      a.push({ kind: `rift`, spell: t.altarId, x: e.x, y: e.y, value: t.wave });
  return (
    i(e.state) &&
      t.state === `singing` &&
      a.push({ kind: `ritewin`, ...r, value: Math.round(t.resonance) }),
    i(e.state) && t.state === `hollowed` && a.push({ kind: `ritelost`, ...r }),
    a
  );
}
function mU(e, t, n, r = {}) {
  return {
    _id: e.id,
    _creationTime: 0,
    ownerId: t,
    where: n,
    ...r,
    base: e.base,
    rarity: e.rarity,
    ilvl: e.ilvl,
    school: e.school,
    affixes: e.affixes ?? [],
    unique: e.unique,
    enchant: e.enchant,
    failStacks: e.failStacks,
    hollowed: e.hollowed,
    memory: e.memory,
    sockets: e.sockets,
    spell: e.spell,
    wear: e.wear,
  };
}
var hU = { crowns: 0, dust: 0, shards: 0, motes: 0, chips: 0 };
function gU(e) {
  if (!e.inv || !e.me) return null;
  let t = e.me._id;
  return {
    bag: e.inv.bag.map((e) => mU(e, t, `bag`)),
    worn: e.inv.worn.map((e) => mU(e, t, `equipped`, { slot: e.slot })),
    mats: { ...hU, ...(e.mats ?? {}) },
    bagMax: e.inv.bagMax,
    satchel: e.inv.satchel ?? 0,
    kits: e.me.kits ?? 0,
    quiver: e.me.quiver ?? {},
  };
}
var _U = () => Promise.resolve(null);
function vU(e) {
  let t = QH.party;
  if (t && t.id === e.id && e.v < t.v) return;
  let n = performance.now(),
    r = e.at,
    i =
      r === void 0
        ? e
        : {
            ...e,
            members: e.members.map((e) =>
              e.off ? { ...e, offSeen: n - Math.max(0, r - e.off) } : e,
            ),
          };
  eU({ party: i, partyStats: yU(i, QH.partyStats) });
}
function yU(e, t) {
  if (!e) return {};
  let n = new Set(e.members.map((e) => e.id));
  return Object.keys(t).every((e) => n.has(e))
    ? t
    : Object.fromEntries(Object.entries(t).filter(([e]) => n.has(e)));
}
