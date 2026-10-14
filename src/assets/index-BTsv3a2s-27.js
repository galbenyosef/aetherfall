// index-BTsv3a2s 27 — math
// Lines 25530-25879 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Ks(e, t) {
  let n = Ws(t);
  return e.some((e) => Ws(e) === n);
}
function qs(e, t) {
  let n = Us(t);
  return !n || Ks(e, n) || e.length >= 100 ? e : [...e, n];
}
function Js(e, t) {
  let n = Ws(t);
  return e.some((e) => Ws(e) === n) ? e.filter((e) => Ws(e) !== n) : e;
}
function Ys(e, t, n) {
  return !e.system && e.playerId !== n && t.has(Ws(e.name));
}
function Xs(e, t) {
  if (!e.length) return;
  let n = new Set(e.map(Ws));
  return (e) => Ys(e, n, t);
}
function Zs(e, t, n) {
  let r = Xs(t, n);
  return r && e.some(r) ? e.filter((e) => !r(e)) : e;
}
function Qs(e) {
  return [...e.members].sort((t, n) =>
    t.id === e.leader
      ? -1
      : n.id === e.leader
        ? 1
        : t.joined - n.joined || (t.id < n.id ? -1 : 1),
  );
}
function $s(e) {
  return !!e && e.members.length >= Ns.max;
}
function ec(e, t, n) {
  let r = typeof t.left == `number` ? n + Math.max(0, t.left) : t.until;
  return {
    kind: e,
    from: t.from,
    name: t.name,
    school: t.school,
    level: t.level,
    until: r,
    size: t.size,
  };
}
function tc(e) {
  return e.kind === `ask`
    ? `${e.name} asks to join your party`
    : e.size
      ? `${e.name} invites you to their party (${e.size} of ${Ns.max})`
      : `${e.name} invites you to a party`;
}
function nc(e, t, n) {
  return e
    .filter((e) => e.until > t && !Ks(n, e.name))
    .sort((e, t) => e.until - t.until);
}
function rc(e, t, n, r, i = !1) {
  let a = nc(e, t, n).filter((e) => !i || e.kind === `ask`);
  return { shown: a.slice(0, r), more: Math.max(0, a.length - r) };
}
function ic(e, t, n, r, i) {
  return i || rc(e, t, n, 1 / 0, r).shown.length > 0;
}
function ac(e, t) {
  return Math.max(0, Math.ceil((e.until - t) / 1e3));
}
var oc = [`none`, `one`, `two`, `three`, `four`, `five`];
function sc(e) {
  return `${Math.round(e * 1e3) / 10}%`;
}
function cc(e) {
  let t = Math.min(Ns.max, Math.max(2, Math.floor(Number.isFinite(e) ? e : 2))),
    n = [];
  for (let e = t; e >= 2; e--) {
    let r = sc(Ns.share[e]);
    n.push(
      e === t ? `${r} of the XP each for ${oc[e]} of you` : `${r} for ${oc[e]}`,
    );
  }
  return `Kills within ${Ns.reach} tiles are shared by the members in the fight (a blow given or taken in the last ${Ns.fightSeconds} s): ${n.join(`, `)}, and each counts it for their quests. Its loot drops for one of you sharing the XP, picked at random (a boss's or a Key's for everyone close by). No XP from a monster more than ${Ns.gapMax} levels above you.`;
}
var lc = Ns.reach;
function uc(e, t) {
  let n = typeof t == `string` ? { room: t } : t;
  return e.room === n.room && (!e.host || !n.host || e.host === n.host);
}
function dc(e, t, n, r, i) {
  let a = null,
    o = null;
  for (let s of e) {
    let e = t[s.id];
    s.id !== n &&
      e &&
      e.run === r &&
      e.room.startsWith(`inst-dng-`) &&
      (e.host && i.host && e.host !== i.host ? (o ??= s.name) : (a ??= s.name));
  }
  return { join: a, away: o };
}
function fc(e) {
  return `${e} is down there on another realm server, and a run can't be joined from another server yet. Wait for them to come back up, then join their layer before you go down together.`;
}
function pc(e, t) {
  return t - e.seen > Ns.staleMs;
}
function mc(e) {
  let t = /^[a-z][a-z0-9]*-([1-9][0-9]{0,5})$/.exec(e);
  return t ? Number(t[1]) : null;
}
function hc(e) {
  let t = $o[e]?.name;
  return t ? t.replace(/^The /, `the `) : `a dungeon`;
}
function gc(e, t, n, r, i = !1) {
  if (e.off) {
    let t = e.offSeen === void 0 ? 0 : Math.floor((r - e.offSeen) / 6e4);
    return t >= 1 ? `offline ${t} min` : `offline`;
  }
  if (!t) return i ? `here` : `…`;
  if (pc(t, r)) return `no word`;
  if (t.away) return `link lost`;
  if (t.run) return `in ${hc(t.run)}`;
  if (t.phased) return `in a story fight`;
  if (uc(t, n)) return `here`;
  if (t.room.startsWith(`inst-home-`)) return `at a homestead`;
  let a = mc(t.room);
  if (a === null) return `elsewhere`;
  let o = Rr[t.region ?? ``]?.name;
  return o ? `Layer ${a} · ${o}` : `Layer ${a}`;
}
function _c(e, t, n) {
  return !!e.off || (!!t && (pc(t, n) || !!t.away));
}
function vc(e, t) {
  let n = (e, t) => (t > 0 ? Math.max(0, Math.min(1, e / t)) : 0);
  return e
    ? e.dead
      ? { k: 0, dead: !0 }
      : { k: n(e.hp, e.maxHp), dead: !1 }
    : t
      ? t.dead
        ? { k: 0, dead: !0 }
        : { k: n(t.hp, t.maxHp), dead: !1 }
      : null;
}
function yc(e, t) {
  let n = t <= 0 ? e : Math.max(0, Math.min(e, 3 - Math.min(t, 3)));
  return { shown: n, more: e - n };
}
function bc(e) {
  return `party:${e}`;
}
function xc(e) {
  return e.startsWith(`party:`);
}
function Sc(e, t, n, r) {
  return e.off ||
    !t ||
    pc(t, r) ||
    t.away ||
    t.run ||
    t.phased ||
    uc(t, n) ||
    t.room.startsWith(`inst-`) ||
    mc(t.room) === null
    ? null
    : t.room;
}
function Cc(e, t) {
  return e && e > 0 ? t + e : 0;
}
function wc(e, t) {
  return e ? Math.max(0, Math.ceil((e - t) / 6e4)) : 0;
}
function Tc(e) {
  return `in ${e} min`;
}
function Ec(e, t = !1) {
  return t
    ? {
        short: `not while Discordant`,
        title: `The Discordant can't slip between layers.`,
      }
    : e > 0
      ? { short: Tc(e), title: `You can join a layer again ${Tc(e)}.` }
      : null;
}
function Dc(e, t) {
  let n = mc(t);
  return n === null
    ? `${e} is elsewhere in the realm.`
    : `${e} is in Layer ${n}.`;
}
function Oc(e, t, n, r) {
  let i = [];
  for (let a of e) {
    let e = t[a.id];
    a.id === n ||
      a.off ||
      !e ||
      e.run ||
      mc(e.room) === null ||
      i.push({ name: a.name, x: e.x, y: e.y, here: uc(e, r) });
  }
  return i;
}
var kc = [`on`, `reduced`, `off`],
  Ac = [`auto`, `high`, `medium`, `low`, `minimal`, `off`],
  jc = [`auto`, `off`, `2x`, `4x`, `8x`],
  Mc = { auto: null, off: 0, "2x": 2, "4x": 4, "8x": 8 },
  Nc = 0.25,
  Pc = [`classic`, `hd2d`, `auto`],
  Fc = [`realm`, `near`],
  Ic = [`ask`, `on`, `off`],
  Lc = [`normal`, `large`, `larger`],
  Rc = { normal: 1, large: 1.15, larger: 1.3 },
  zc = `aetherfall.settings.v1`,
  Bc = 0.5,
  Vc = 0.35;
function Hc() {
  return (
    typeof window < `u` &&
    typeof window.matchMedia == `function` &&
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches
  );
}
function Uc() {
  return (
    typeof window < `u` &&
    typeof window.matchMedia == `function` &&
    window.matchMedia(`(hover: none) and (pointer: coarse)`).matches
  );
}
function Wc(e = Hc(), t = Uc()) {
  return {
    master: 1,
    music: 1,
    effects: 1,
    muted: !1,
    shake: e ? `reduced` : `on`,
    lootLabels: !0,
    chatChannel: `realm`,
    fxQuality: `auto`,
    fxAA: `auto`,
    fxGlow: !0,
    fxLight: !0,
    fxHaze: !0,
    fxFringe: !0,
    fxParticles: 1,
    showFps: !1,
    renderer: `classic`,
    controls: {},
    holdBlink: !0,
    chatNews: !0,
    chatDim: !0,
    guide: !0,
    guideArrow: !0,
    guideHideInCombat: !0,
    autoAim: t,
    padAim: `ask`,
    textSize: `normal`,
    readableFont: !1,
    ignored: [],
  };
}
function Gc(e) {
  if (typeof e == `number` && Number.isFinite(e))
    return Math.round(Math.min(1, Math.max(0, e)) * 100) / 100;
}
function Kc(e) {
  if (typeof e != `object` || !e || Array.isArray(e)) return {};
  let t = e,
    n = {};
  for (let e of [`master`, `music`, `effects`]) {
    let r = Gc(t[e]);
    r !== void 0 && (n[e] = r);
  }
  for (let e of [
    `muted`,
    `lootLabels`,
    `fxGlow`,
    `fxLight`,
    `fxHaze`,
    `fxFringe`,
    `showFps`,
    `holdBlink`,
    `chatNews`,
    `chatDim`,
    `guide`,
    `guideArrow`,
    `guideHideInCombat`,
    `autoAim`,
    `readableFont`,
  ]) {
    let r = t[e];
    typeof r == `boolean` && (n[e] = r);
  }
  (kc.includes(t.shake) && (n.shake = t.shake),
    Fc.includes(t.chatChannel) && (n.chatChannel = t.chatChannel),
    Ac.includes(t.fxQuality) && (n.fxQuality = t.fxQuality),
    jc.includes(t.fxAA) && (n.fxAA = t.fxAA),
    Pc.includes(t.renderer) && (n.renderer = t.renderer));
  let r = Gc(t.fxParticles);
  return (
    r !== void 0 && (n.fxParticles = Math.max(Nc, r)),
    Ic.includes(t.padAim) && (n.padAim = t.padAim),
    Lc.includes(t.textSize) && (n.textSize = t.textSize),
    typeof t.controls == `object` &&
      t.controls !== null &&
      !Array.isArray(t.controls) &&
      (n.controls = Di(t.controls)),
    Array.isArray(t.ignored) && (n.ignored = Gs(t.ignored)),
    n
  );
}
function qc(e, t = Wc()) {
  return { ...t, ...Kc(e) };
}
var Jc = (e) => e * e;
function Yc(e) {
  return {
    master: e.muted ? 0 : Bc * Jc(e.master),
    music: Jc(e.music),
    effects: Jc(e.effects),
  };
}
function Xc(e, t) {
  return t === `off` ? 0 : t === `reduced` ? Math.min(e * Vc, 3) : e;
}
var Zc = `"Atkinson Hyperlegible", system-ui, sans-serif`,
  Qc = `"Press Start 2P", monospace`;
function $c(e, t) {
  return t ? `700 ${e}px ${Zc}` : `${e}px Silkscreen, monospace`;
}
function el(e, t) {
  return Math.round(Math.max(10, Math.round(e * 3.4)) * Rc[t]);
}
function tl(e, t) {
  return Math.round(Math.max(14, Math.round(e * 4.2)) * Rc[t]);
}
function nl(e, t) {
  return Math.round(Math.max(13, Math.round(e * 3.8)) * Rc[t]);
}
function rl(e, t) {
  return Math.round(Math.max(10, Math.round(e * 3.2)) * Rc[t]);
}
