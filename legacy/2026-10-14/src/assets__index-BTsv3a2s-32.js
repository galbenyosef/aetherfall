// assets__index-BTsv3a2s 32 — math
// Lines 27116-27458 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function td(e) {
  switch (e.kind) {
    case `bolt`:
      return {
        name: `Forked ${e.name}`,
        desc: `${e.name} fires two extra projectiles in a spread.`,
        effect: { extra: { [e.id]: 2 } },
      };
    case `nova`:
      return {
        name: `Resonant ${e.name}`,
        desc: `${e.name} reaches 35% further and deals 10% more damage.`,
        effect: { radius: { [e.id]: 0.35 }, dmg: { [e.id]: 0.1 } },
      };
    case `strike`:
      return {
        name: `Cataclysmic ${e.name}`,
        desc: `${e.name} strikes a 30% wider area and deals 15% more damage.`,
        effect: { radius: { [e.id]: 0.3 }, dmg: { [e.id]: 0.15 } },
      };
    case `chain`:
      return {
        name: `Branching ${e.name}`,
        desc: `${e.name} leaps to two additional foes.`,
        effect: { extra: { [e.id]: 2 } },
      };
    case `rift`:
      return {
        name: `Lingering ${e.name}`,
        desc: `${e.name} pulses three more times and grows 15% wider.`,
        effect: { extra: { [e.id]: 3 }, radius: { [e.id]: 0.15 } },
      };
    case `drain`:
      return {
        name: `Deep ${e.name}`,
        desc: `${e.name} heals for 50% more and deals 20% more damage.`,
        effect: { heal: { [e.id]: 0.25 }, dmg: { [e.id]: 0.2 } },
      };
    case `swing`:
      return {
        name: `Sweeping ${e.name}`,
        desc: `${e.name} reaches 30% further and deals 10% more damage.`,
        effect: { radius: { [e.id]: 0.3 }, dmg: { [e.id]: 0.1 } },
      };
    case `guard`:
      return {
        name: `Bulwark ${e.name}`,
        desc: `${e.name} turns aside 30% wider and costs a quarter less stamina.`,
        effect: { radius: { [e.id]: 0.3 }, cost: { [e.id]: 0.25 } },
      };
    case `ward`:
      return {
        name: `Hallowed ${e.name}`,
        desc: `${e.name} stands 30% wider and a second longer.`,
        effect: { radius: { [e.id]: 0.3 }, extra: { [e.id]: 1 } },
      };
    case `veil`:
      return {
        name: `Deep ${e.name}`,
        desc: `${e.name} hides you a second longer and recovers 15% faster.`,
        effect: { extra: { [e.id]: 1 }, cd: { [e.id]: 0.15 } },
      };
  }
}
var nd = {
    fireball: [[`fire`, 1]],
    flamenova: [[`fire`, 1]],
    meteor: [
      [`fire`, 0.7],
      [`strength`, 0.3],
    ],
    frostshard: [[`frost`, 1]],
    glacialring: [[`frost`, 1]],
    blizzard: [
      [`frost`, 0.7],
      [`mana`, 0.3],
    ],
    spark: [
      [`lightning`, 0.8],
      [`agility`, 0.2],
    ],
    chain: [[`lightning`, 1]],
    thunder: [
      [`lightning`, 0.7],
      [`strength`, 0.3],
    ],
    shadowbolt: [[`void`, 1]],
    drain: [
      [`void`, 0.6],
      [`lifeforce`, 0.4],
    ],
    rift: [
      [`void`, 0.7],
      [`aether`, 0.3],
    ],
    arrow: [[`agility`, 1]],
    volley: [[`agility`, 1]],
    arrowrain: [
      [`agility`, 0.7],
      [`strength`, 0.3],
    ],
    slash: [[`strength`, 1]],
    twinslash: [
      [`strength`, 0.7],
      [`agility`, 0.3],
    ],
    cleave: [[`strength`, 1]],
    thrust: [
      [`strength`, 0.6],
      [`agility`, 0.4],
    ],
    sweep: [[`strength`, 1]],
    shield: [[`strength`, 1]],
    aegis: [
      [`strength`, 0.6],
      [`aether`, 0.4],
    ],
    piercing: [[`agility`, 1]],
    explosive: [
      [`agility`, 0.7],
      [`strength`, 0.3],
    ],
    scatter: [
      [`agility`, 0.7],
      [`aether`, 0.3],
    ],
    consecrate: [
      [`strength`, 0.6],
      [`lifeforce`, 0.4],
    ],
    judgement: [
      [`strength`, 0.7],
      [`aether`, 0.3],
    ],
    shieldbash: [[`strength`, 1]],
    stab: [[`agility`, 1]],
    veilstep: [
      [`agility`, 0.6],
      [`aether`, 0.4],
    ],
  },
  rd = Object.fromEntries(
    ye.map((e) => [e.id, { scale: nd[e.id] ?? [], awaken: td(e) }]),
  );
function id(e, t) {
  let n = 0;
  for (let [r, i] of rd[e]?.scale ?? []) n += i * t[r];
  return n;
}
function ad(e, t, n) {
  let r = bu(),
    i = Qu(e, t);
  if (n) for (let e of Tu) i[e] += n[e] ?? 0;
  for (let e of Tu) i[e] > 0 && wu(r, Au[e].point, i[e]);
  for (let e of ye) {
    let t = id(e.id, i);
    t <= 0 ||
      ((r.dmg[e.id] = (r.dmg[e.id] ?? 0) + Eu * t),
      e.kind === `guard` && (r.cost[e.id] = (r.cost[e.id] ?? 0) + Du.cost * t),
      e.kind === `ward` &&
        ((r.radius[e.id] = (r.radius[e.id] ?? 0) + Ou.radius * t),
        (r.extra[e.id] = (r.extra[e.id] ?? 0) + Ou.hold * t)),
      e.kind === `veil` && (r.extra[e.id] = (r.extra[e.id] ?? 0) + ku.hold * t),
      t >= 10 && wu(r, rd[e.id].awaken.effect));
  }
  let a = new Set(qu(t));
  for (let e of Hu.nodes) e.effect && a.has(e.id) && wu(r, e.effect);
  return r;
}
function od(e, t) {
  let n = S[e]?.spells.map((e) => e.id) ?? [];
  for (let r of t ?? [])
    rd[r] && !ae(r) && (!ie(r) || xe[r] === e) && !n.includes(r) && n.push(r);
  return n;
}
function sd(e, t, n) {
  let r = od(e, t),
    i = n ?? oe(e).map((e) => e.id),
    a = [];
  for (let e = 0; e < 8; e++) {
    let t = i[e] ?? ``;
    a.push(t && (r.includes(t) || ae(t)) && !a.includes(t) ? t : ``);
  }
  return a;
}
function cd(e) {
  let t = [];
  for (let n of [e?.main, e?.off]) {
    if (n?.broken) continue;
    let e = b.find((e) => e === n?.base);
    e && !t.includes(e) && t.push(e);
  }
  return t;
}
function ld(e, t) {
  return !t.needs || e.includes(t.needs);
}
function ud(e, t) {
  let n = ae(e.id);
  if (!n || T[n] === re(t)) return e;
  let r = E.offClass;
  return e.kind === `guard`
    ? { ...e, stamina: (e.stamina ?? 20) * r.stamina, arc: r.arc }
    : { ...e, dmg: e.dmg * r.dmg };
}
function dd(e, t) {
  let n = { ...e },
    r = 1 - Math.min(0.6, t.cost[e.id] ?? 0);
  ((n.mana = e.mana > 0 ? Math.max(1, Math.round(e.mana * r)) : 0),
    e.stamina !== void 0 &&
      (n.stamina = Math.max(1, Math.round(e.stamina * r))),
    (n.cd =
      e.cd *
      (1 - Math.min(0.6, t.cd[e.id] ?? 0)) *
      (1 - Math.min(0.3, t.cdAll))),
    e.radius && (n.radius = e.radius * (1 + (t.radius[e.id] ?? 0))));
  let i = t.extra[e.id] ?? 0;
  return (
    e.kind === `chain` && (n.jumps = (e.jumps ?? 3) + i),
    e.kind === `rift` && (n.ticks = (e.ticks ?? 4) + i),
    e.kind === `guard` &&
      ((n.arc = (e.arc ?? 140) * (1 + (t.radius[e.id] ?? 0))),
      (n.stamina = Math.max(1, Math.round((e.stamina ?? 20) * r)))),
    e.kind === `ward` && (n.hold = (e.hold ?? 4) + i),
    e.kind === `veil` && (n.hold = (e.hold ?? 3) + i),
    n
  );
}
function fd(e, t, n, r, i) {
  let a = Math.hypot(e, t);
  if (a <= i + 0.3) return !0;
  let o = Math.abs(Math.atan2(t, e) - n) % (2 * Math.PI);
  return (
    o > Math.PI && (o = 2 * Math.PI - o),
    o <= (r * Math.PI) / 360 + Math.atan2(i, a)
  );
}
function pd(e, t, n = 0) {
  let r = 1 + (e.stretch ?? 0) * Math.min(1, Math.max(0, n));
  return {
    cd: e.cd * (1 - Math.min(0.6, t.blinkCd)) * r,
    range: (e.range + t.blinkRange) * r,
  };
}
function md(e, t) {
  let n = e.chargeSecs - e.tapSecs;
  return n > 0 ? Math.min(1, Math.max(0, (t - e.tapSecs) / n)) : 0;
}
function hd(e) {
  return 0.12 + e.crit;
}
function gd(e, t) {
  return 1 + (e.dmg[t] ?? 0) + e.globalDmg;
}
function _d(e, t) {
  return (e.heal ?? 0) + (t.heal[e.id] ?? 0) + t.healAll;
}
var vd = { input: 1, ping: 2, say: 3 },
  yd = {
    welcome: 129,
    snapshot: 130,
    pong: 131,
    transfer: 132,
    notice: 133,
    self: 134,
    heard: 135,
    attack: 136,
  },
  bd = { cast: 1, blink: 8, interact: 16, sprint: 32, charge: 64, block: 128 },
  xd = {
    moving: 1,
    dead: 2,
    casting: 4,
    facingLeft: 8,
    latched: 16,
    singing: 32,
    staggered: 64,
    hostile: 16,
    outlaw: 32,
    sprinting: 64,
    partied: 128,
    blocking: 256,
    veiled: 512,
  },
  Sd = { pos: 1, hp: 2, flags: 4, look: 8, rite: 16, spawn: 128 },
  Cd = { man: 0, woman: 1 },
  wd = {
    cast: 1,
    hit: 2,
    death: 3,
    rise: 4,
    level: 5,
    blink: 6,
    attack: 7,
    crit: 8,
    spawn: 9,
    sink: 10,
    struck: 11,
    altHit: 12,
    song: 13,
    road: 14,
    chan: 15,
    block: 16,
    break: 17,
    veil: 18,
    ammo: 19,
  },
  Td = { broke: 0, torn: 1 },
  Ed = { begun: 0, broken: 1, sung: 2, called: 3 },
  Dd = { begun: 0, broken: 1, done: 2 },
  Od = {
    roomFull: 1,
    draining: 2,
    badTicket: 3,
    kicked: 4,
    reconnecting: 5,
    inUse: 6,
    word: 7,
  };
new TextEncoder();
var kd = new TextDecoder(),
  Ad = (e, t, n) => Math.max(t, Math.min(n, e)),
  jd = (e) => Ad(Math.round(e), 0, 65535),
  Md = (e) => jd(e * 16),
  Nd = (e) => Ad(Math.round(Ad(e, -1, 1) * 127), -127, 127),
  Pd = Nd;
function Fd(e) {
  let t = new ArrayBuffer(13),
    n = new DataView(t);
  return (
    n.setUint8(0, vd.input),
    n.setUint16(1, e.seq & 65535, !0),
    n.setInt8(3, Nd(e.dx)),
    n.setInt8(4, Nd(e.dy)),
    n.setUint16(5, Md(e.aimX), !0),
    n.setUint16(7, Md(e.aimY), !0),
    n.setUint8(9, e.buttons & 255),
    n.setUint8(10, Ad(Math.round(e.ms), 0, 255)),
    n.setUint8(11, (e.spell ?? 0) & 255),
    n.setUint8(12, Ad(Math.round(e.charge ?? 0), 0, 255)),
    t
  );
}
