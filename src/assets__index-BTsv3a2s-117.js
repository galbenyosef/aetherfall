// assets__index-BTsv3a2s 117 — desc
// Lines 54756-55071 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function nA(e, t, n, r, i, a, o, s = 1, c) {
  if (
    (Qk(e, t, r[1], 0.3 * s, a, o),
    c && c.length && (t.t === `circle` || t.t === `rect`))
  ) {
    let n = zk(c, i, 6),
      r = t.t === `circle` ? t.x : t.x + t.w / 2,
      l = t.t === `circle` ? t.y : t.y + t.h / 2;
    Bk(e, n, r * jk - a, l * jk - o, { alpha: s });
    return;
  }
  (e.save(), (e.globalAlpha = s));
  let l = Zk(t, a, o);
  for (let t = 0; t < l.length; t++)
    Xk(e, n, r, l[t].x, l[t].y, t, l.length, l[t].a, 1, i);
  e.restore();
}
function rA(e) {
  switch (e.t) {
    case `line`:
      return { x: (e.x0 + e.x1) / 2, y: (e.y0 + e.y1) / 2 };
    case `cone`:
      return {
        x: e.x + Math.cos(e.a) * e.r * 0.6,
        y: e.y + Math.sin(e.a) * e.r * 0.6,
      };
    case `rect`:
      return { x: e.x + e.w / 2, y: e.y + e.h / 2 };
    default:
      return { x: e.x, y: e.y };
  }
}
var iA = () => ye.filter((e) => e.kind === `bolt`),
  gre = () => ye,
  aA = (e, t, n) => (e[t] = (e[t] ?? 0) + n),
  oA = [
    {
      id: `kindled`,
      name: `Kindled Bolts`,
      family: `ember`,
      max: 3,
      desc: `+15% damage on your bolts.`,
      apply: (e, t) => iA().forEach((n) => aA(e.dmg, n.id, 0.15 * t)),
    },
    {
      id: `cinderheart`,
      name: `Cinder Heart`,
      family: `ember`,
      max: 3,
      desc: `Kills explode for 30% of your bolt's damage (1.5 tiles).`,
    },
    {
      id: `overheat`,
      name: `Overheat`,
      family: `ember`,
      max: 3,
      desc: `+10% damage on every spell.`,
      apply: (e, t) => (e.globalDmg += 0.1 * t),
    },
    {
      id: `stillwater`,
      name: `Still Water`,
      family: `rime`,
      max: 2,
      desc: `Your hits slow what they strike (40% for 1.5 s; longer with more).`,
    },
    {
      id: `glacialskin`,
      name: `Glacial Skin`,
      family: `rime`,
      max: 3,
      desc: `Take 8% less damage.`,
    },
    {
      id: `longwinter`,
      name: `Long Winter`,
      family: `rime`,
      max: 3,
      desc: `+20% radius on novas, strikes and rifts.`,
      apply: (e, t) =>
        gre().forEach(
          (n) => n.radius && n.kind !== `bolt` && aA(e.radius, n.id, 0.2 * t),
        ),
    },
    {
      id: `forked`,
      name: `Forked Bolts`,
      family: `storm`,
      max: 2,
      desc: `Your bolts fire one more.`,
      apply: (e, t) => iA().forEach((n) => aA(e.extra, n.id, t)),
    },
    {
      id: `quickening`,
      name: `Quickening`,
      family: `storm`,
      max: 3,
      desc: `-10% cooldown on every spell.`,
      apply: (e, t) => (e.cdAll += 0.1 * t),
    },
    {
      id: `staticstep`,
      name: `Static Step`,
      family: `storm`,
      max: 3,
      desc: `Blink strikes where you land for 60% of your bolt's damage.`,
    },
    {
      id: `hunger`,
      name: `Hunger Answered`,
      family: `void`,
      max: 3,
      desc: `Kills heal 3% of your health.`,
    },
    {
      id: `veilwalk`,
      name: `Veilwalk`,
      family: `void`,
      max: 2,
      desc: `-20% Blink cooldown and +0.8 Blink range.`,
      apply: (e, t) => ((e.blinkCd += 0.2 * t), (e.blinkRange += 0.8 * t)),
    },
    {
      id: `tithe`,
      name: `Soul Tithe`,
      family: `void`,
      max: 3,
      desc: `+5% life-steal on every spell.`,
      apply: (e, t) => (e.healAll += 0.05 * t),
    },
    {
      id: `wellspring`,
      name: `Wellspring`,
      family: `arcane`,
      max: 3,
      desc: `+25% mana regeneration.`,
      apply: (e, t, n) => (e.regen += 0.25 * t * Be(n.level)),
    },
    {
      id: `keen`,
      name: `Keen Mind`,
      family: `arcane`,
      max: 3,
      desc: `+6% critical chance.`,
      apply: (e, t) => (e.crit += 0.06 * t),
    },
    {
      id: `secondbreath`,
      name: `Second Breath`,
      family: `arcane`,
      max: 2,
      desc: `The Ember of Marizon gains a rise.`,
    },
    {
      id: `pact`,
      name: `Hollow Pact`,
      family: `hollow`,
      max: 2,
      desc: `+35% damage, but take 20% more.`,
      apply: (e, t) => (e.globalDmg += 0.35 * t),
    },
    {
      id: `glassmind`,
      name: `Glass Mind`,
      family: `hollow`,
      max: 2,
      desc: `+15% critical chance, but half mana regeneration.`,
      apply: (e, t, n) => (
        (e.crit += 0.15 * t),
        (e.regen -= (1 - 0.5 ** t) * (Be(n.level) + e.regen))
      ),
    },
    {
      id: `borrowed`,
      name: `Borrowed Time`,
      family: `hollow`,
      max: 1,
      desc: `-25% cooldowns, but the Tide rises 30% faster.`,
      apply: (e) => (e.cdAll += 0.25),
    },
  ],
  sA = Object.fromEntries(oA.map((e) => [e.id, e]));
function cA(e, t) {
  let n = 0;
  for (let r of e) r === t && n++;
  return n;
}
function _re(e, t, n, r) {
  let i = {
    ...e,
    dmg: { ...e.dmg },
    cost: { ...e.cost },
    cd: { ...e.cd },
    radius: { ...e.radius },
    extra: { ...e.extra },
    heal: { ...e.heal },
    pierce: { ...e.pierce },
    caps: { ...e.caps },
  };
  for (let e of oA) {
    let a = cA(t, e.id);
    a > 0 && e.apply?.(i, a, { school: n, level: r });
  }
  return i;
}
function vre(e) {
  return 0.92 ** cA(e, `glacialskin`) * (1 + 0.2 * cA(e, `pact`));
}
var lA = {
  every: { normal: 50, hollowed: 40 },
  borrowed: 1.3,
  climbSeconds: 2,
  near: 5,
  far: 8,
  xpShare: 0.6,
  maxWave: 12,
};
function yre(e, t) {
  return lA.every[e] / (cA(t, `borrowed`) > 0 ? lA.borrowed : 1);
}
function bre(e, t, n, r, i, a) {
  let o = $o[e],
    s = as((r + t * 7919 + n * 104729 + 31) >>> 0),
    c = Math.min(lA.maxWave, 3 + n + Math.floor(a / 2)),
    l = o.roster.filter((e) => e.tier === `normal`),
    u = l.reduce((e, t) => e + t.weight, 0),
    d = [],
    f = o.elites.filter((e) => e.tier === `elite`);
  for (
    n >= 2 &&
    f.length &&
    d.push({
      kind: f[Math.floor(s() * f.length)].kind,
      tier: `elite`,
      level: i,
    });
    d.length < c;
  ) {
    let e = s() * u,
      t = l[0];
    for (let n of l)
      if (((e -= n.weight), e <= 0)) {
        t = n;
        break;
      }
    d.push({ kind: t.kind, tier: `normal`, level: i });
  }
  return d;
}
var uA = {
    volleying: {
      name: `Volleying`,
      rule: `Fires a ring of bolts every 6 s.`,
      color: `#ff9a3a`,
    },
    hasted: {
      name: `Hasted`,
      rule: `+40% speed, and attacks come 25% faster.`,
      color: `#fff36b`,
    },
    vengeful: {
      name: `Vengeful`,
      rule: `Bursts into a ring of bolts when it dies.`,
      color: `#e0484e`,
    },
    warded: {
      name: `Warded`,
      rule: `Takes half damage until it has lost 30% of its health.`,
      color: `#7ef9ff`,
    },
  },
  dA = Object.keys(uA);
function xre(e) {
  let t = as((e * 31 + 7) >>> 0),
    n = dA[Math.floor(t() * dA.length)],
    r = dA.filter((e) => e !== n);
  return [n, r[Math.floor(t() * r.length)]];
}
function Sre(e, t) {
  let [n, r] = xre(e);
  return ((t * 2654435761) >>> 0) % 2 == 0 ? n : r;
}
var fA = {
    marizon_fight: {
      cat: `music`,
      files: [`music/marizon_fight`],
      bpm: 95,
      bars: 32,
      beatsPerBar: 4,
      loop: !0,
    },
    marizon_idle: {
      cat: `music`,
      files: [`music/marizon_idle`],
      bpm: 95,
      bars: 32,
      beatsPerBar: 4,
      loop: !0,
    },
    title_theme: {
      cat: `music`,
      files: [`music/title_theme`],
      bpm: 92,
      bars: 8,
      beatsPerBar: 4,
      loop: !0,
    },
    start_chime: { cat: `ui`, files: [`ui/start_chime`] },
  },
  Cre = 1;
function pA(e, t, n, r) {
  (`cancelAndHoldAtTime` in e
    ? e.cancelAndHoldAtTime(n)
    : (e.cancelScheduledValues(n), e.setValueAtTime(e.value, n)),
    e.setTargetAtTime(t, n, r));
}
