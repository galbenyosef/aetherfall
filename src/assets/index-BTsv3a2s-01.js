// index-BTsv3a2s 01 — dmg
// Lines 14947-15059 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function re(e) {
  return S[e]?.class ?? `mage`;
}
function ie(e) {
  let t = xe[e];
  return !!t && S[t].class !== `mage` && !ae(e);
}
function ae(e) {
  return b.find((t) => w[t].id === e);
}
function oe(e) {
  return [...(D[e] ?? []).map((e) => w[e]), ...(S[e]?.spells ?? [])];
}
var se = {
  id: `dash`,
  name: `Dash`,
  stamina: 25,
  cd: 0.6,
  range: 3,
  grace: 0.3,
  desc: `Throw yourself along the ground toward your aim: a short dodge, paid in stamina.`,
};
function ce(e) {
  return re(e) === `mage`;
}
var le = {
    id: `blink`,
    name: `Blink`,
    mana: 12,
    cd: 2.4,
    range: 4.5,
    desc: `Step through the Veil.`,
    tapSecs: 0.12,
    chargeSecs: 0.6,
    stretch: 1.25,
  },
  ue = {
    mult: 1.4,
    max: 100,
    drain: 20,
    regen: 25,
    restSeconds: 0.8,
    start: 25,
    grace: 5,
  };
function de(e = ue) {
  return { v: e.max, sprinting: !1, at: -1 / 0 };
}
function fe(e, t = 0) {
  return e.sprinting ? e.v > -t : e.v >= ue.start - t;
}
function pe(e, t, n, r, i = 0) {
  ((e.sprinting = n),
    n && ((e.v = Math.max(-i, e.v - t * ue.drain)), (e.at = r)));
}
function me(e, t, n, r = ue) {
  let i = n - e.at - r.restSeconds;
  i > 0 && (e.v = Math.min(r.max, e.v + Math.min(t, i) * r.regen));
}
var he = { slow: 0.5 };
function ge(e, t, n) {
  return e.v < t ? !1 : ((e.v -= t), (e.at = n), !0);
}
var _e = [`scout`],
  ve = [`dagger`],
  ye = [
    ...k.filter((e) => !_e.includes(e)).flatMap((e) => S[e].spells),
    ...C.marksman,
    ...C.paladin,
    ...b.filter((e) => !ve.includes(e)).map((e) => w[e]),
    ..._e.flatMap((e) => S[e].spells),
    ...ve.map((e) => w[e]),
  ],
  be = ye.map((e) => e.id),
  xe = Object.fromEntries([
    ...k.flatMap((e) => S[e].spells.map((t) => [t.id, e])),
    ...[`marksman`, `paladin`].flatMap((e) => C[e].map((t) => [t.id, e])),
    ...b.map((e) => [w[e].id, T[e]]),
  ]);
function Se(e) {
  return ye.find((t) => t.id === e);
}
var Ce = {
  normal: { hp: 1, dmg: 1, xp: 1 },
  elite: { hp: 2.6, dmg: 1.3, xp: 3 },
  named: { hp: 4, dmg: 1.4, xp: 5 },
  boss: { hp: 10, dmg: 1.6, xp: 10 },
  key: { hp: 28, dmg: 1.8, xp: 30 },
};
function we(e) {
  return {
    hp: (1 + 0.09 * (e - 1)) * (1 + 0.1 * Math.min(e, 30)),
    dmg: 4 + 1.6 * e,
    xp: 8 * e + 0.25 * e * e,
  };
}
function Te(e, t) {
  let n = Ce[t],
    r = we(e);
  return {
    level: e,
    hp: Math.round(30 * r.hp * n.hp),
    dmg: Math.round(r.dmg * n.dmg),
    xp: Math.round(r.xp * n.xp),
    ...(t === `elite`
      ? { elite: !0 }
      : t === `named`
        ? { named: !0, elite: !0 }
        : t === `boss` || t === `key`
          ? { boss: !0 }
          : {}),
  };
}
