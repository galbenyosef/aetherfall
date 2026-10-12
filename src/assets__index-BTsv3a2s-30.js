// assets__index-BTsv3a2s 30 — desc
// Lines 26562-26823 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function wu(e, t, n = 1) {
  for (let r of xu) {
    let i = t[r];
    if (!i) continue;
    let a = e[r];
    for (let [e, t] of Object.entries(i))
      for (let r of e === `*` ? be : [e]) a[r] = (a[r] ?? 0) + t * n;
  }
  for (let n of Su) {
    let r = t[n];
    if (r) for (let [t, i] of Object.entries(r)) i && (e[n][t] = !0);
  }
  for (let r of Cu) {
    let i = t[r];
    i && (e[r] += i * n);
  }
}
var Tu = [
    `fire`,
    `frost`,
    `lightning`,
    `void`,
    `aether`,
    `mana`,
    `agility`,
    `strength`,
    `lifeforce`,
  ],
  Eu = 0.035,
  Du = { cost: 0.015 },
  Ou = { radius: 0.01, hold: 0.05 },
  ku = { hold: 0.05 },
  Au = {
    fire: {
      id: `fire`,
      name: `Fire`,
      color: `#ff7a1a`,
      lore: `The first flame, the one the Ember Oath swears by.`,
      desc: `Each point is power for the spells that draw on it: +3.5% damage, and at 10 power they awaken.`,
      point: {},
    },
    frost: {
      id: `frost`,
      name: `Frost`,
      color: `#5cc8ff`,
      lore: `Patience learned from glaciers.`,
      desc: `Each point is power for the spells that draw on it: +3.5% damage, and at 10 power they awaken.`,
      point: {},
    },
    lightning: {
      id: `lightning`,
      name: `Lightning`,
      color: `#fff36b`,
      lore: `Not cast. Simply no longer held back.`,
      desc: `Each point is power for the spells that draw on it: +3.5% damage, and at 10 power they awaken.`,
      point: {},
    },
    void: {
      id: `void`,
      name: `Void`,
      color: `#b84dff`,
      lore: `The thread the Voidweavers kept when they stitched the tear shut.`,
      desc: `Each point is power for the spells that draw on it: +3.5% damage, and at 10 power they awaken.`,
      point: {},
    },
    aether: {
      id: `aether`,
      name: `Aether`,
      color: `#c9f6ff`,
      lore: `What hums in the crystals, and what you step through when you Blink.`,
      desc: `Blink reaches 0.12 tiles further and recovers 2% faster per point.`,
      point: { blinkRange: 0.12, blinkCd: 0.02 },
    },
    mana: {
      id: `mana`,
      name: `Mana`,
      color: `#5b8cff`,
      lore: `How deep the well goes, and how slowly you drain it.`,
      desc: `+5 maximum mana, +0.4 mana per second and 1.5% cheaper spells per point.`,
      point: { mana: 5, regen: 0.4, cost: { "*": 0.015 } },
    },
    agility: {
      id: `agility`,
      name: `Agility`,
      color: `#7be0a0`,
      lore: `Quick hands, quick feet, quick words.`,
      desc: `Move 0.6% faster, spells recover 1% faster, +0.3% critical strike chance, 4% more stamina and 3% faster stamina recovery per point.`,
      point: {
        speed: 0.006,
        cd: { "*": 0.01 },
        crit: 0.003,
        stamina: 0.04,
        staminaRegen: 0.03,
      },
    },
    strength: {
      id: `strength`,
      name: `Strength`,
      color: `#d9a066`,
      lore: `A mage who can take a blow lives to cast the next one.`,
      desc: `+6 maximum health and 0.6% less damage taken per point.`,
      point: { hp: 6, ward: 0.006 },
    },
    lifeforce: {
      id: `lifeforce`,
      name: `Lifeforce`,
      color: `#6fdc6f`,
      lore: `The green in the crops the crystals grew.`,
      desc: `+5 maximum health and +0.5% life steal on every spell per point.`,
      point: { hp: 5, healAll: 0.005 },
    },
  },
  ju = {
    pyro: { fire: 2 },
    cryo: { frost: 2 },
    storm: { lightning: 2 },
    void: { void: 2 },
    marksman: { agility: 2 },
    paladin: { strength: 2 },
    scout: { agility: 4 },
  };
function Mu(e) {
  return {
    ...ue,
    max: ue.max * (1 + e.stamina),
    regen: ue.regen * (1 + e.staminaRegen),
  };
}
var Nu = `heart`,
  Pu = [
    {
      attr: `strength`,
      notable: {
        name: `Iron Will`,
        desc: `+20 maximum health.`,
        effect: { hp: 20 },
      },
      keystone: {
        name: `Unbroken`,
        desc: `+60 maximum health and 8% less damage taken.`,
        effect: { hp: 60, ward: 0.08 },
      },
    },
    {
      attr: `mana`,
      notable: {
        name: `Deep Well`,
        desc: `+20 maximum mana and +1 mana per second.`,
        effect: { mana: 20, regen: 1 },
      },
      keystone: {
        name: `Boundless`,
        desc: `+40 maximum mana and +4 mana per second.`,
        effect: { mana: 40, regen: 4 },
      },
    },
    {
      attr: `agility`,
      notable: {
        name: `Fleet Hands`,
        desc: `+3% critical strike chance.`,
        effect: { crit: 0.03 },
      },
      keystone: {
        name: `Quicksilver`,
        desc: `+5% critical strike chance and move 5% faster.`,
        effect: { crit: 0.05, speed: 0.05 },
      },
    },
    {
      attr: `aether`,
      notable: {
        name: `Veil Sense`,
        desc: `Blink recovers 5% faster.`,
        effect: { blinkCd: 0.05 },
      },
      keystone: {
        name: `Veilstride`,
        desc: `Blink recovers another 15% faster and reaches a tile further. Move 5% faster.`,
        effect: { blinkCd: 0.15, blinkRange: 1, speed: 0.05 },
      },
    },
    {
      attr: `lifeforce`,
      notable: {
        name: `Green Blood`,
        desc: `+2% life steal on every spell.`,
        effect: { healAll: 0.02 },
      },
      keystone: {
        name: `Evergreen`,
        desc: `+40 maximum health and +6% life steal on every spell.`,
        effect: { hp: 40, healAll: 0.06 },
      },
    },
  ];
function Fu(e, t, n) {
  let r = S[e].spells[t],
    i = r.id;
  switch (r.kind) {
    case `bolt`:
      return {
        name: n,
        desc: `${r.name} deals 15% more damage and costs 10% less mana.`,
        effect: { dmg: { [i]: 0.15 }, cost: { [i]: 0.1 } },
      };
    case `nova`:
      return {
        name: n,
        desc: `${r.name} reaches 15% further and deals 10% more damage.`,
        effect: { radius: { [i]: 0.15 }, dmg: { [i]: 0.1 } },
      };
    case `strike`:
      return {
        name: n,
        desc: `${r.name} deals 15% more damage and recovers 10% faster.`,
        effect: { dmg: { [i]: 0.15 }, cd: { [i]: 0.1 } },
      };
    case `chain`:
      return {
        name: n,
        desc: `${r.name} leaps to one more foe and deals 5% more damage.`,
        effect: { extra: { [i]: 1 }, dmg: { [i]: 0.05 } },
      };
    case `rift`:
      return {
        name: n,
        desc: `${r.name} pulses once more and grows 10% wider.`,
        effect: { extra: { [i]: 1 }, radius: { [i]: 0.1 } },
      };
    case `drain`:
      return {
        name: n,
        desc: `${r.name} heals for 10% more and deals 10% more damage.`,
        effect: { heal: { [i]: 0.1 }, dmg: { [i]: 0.1 } },
      };
    case `swing`:
      return {
        name: n,
        desc: `${r.name} deals 15% more damage and reaches 10% further.`,
        effect: { dmg: { [i]: 0.15 }, radius: { [i]: 0.1 } },
      };
    case `guard`:
      return {
        name: n,
        desc: `${r.name} turns aside 15% wider and costs 10% less stamina.`,
        effect: { radius: { [i]: 0.15 }, cost: { [i]: 0.1 } },
      };
    case `ward`:
      return {
        name: n,
        desc: `${r.name} stands 15% wider and half a second longer.`,
        effect: { radius: { [i]: 0.15 }, extra: { [i]: 0.5 } },
      };
    case `veil`:
      return {
        name: n,
        desc: `${r.name} hides you half a second longer and recovers 10% faster.`,
        effect: { extra: { [i]: 0.5 }, cd: { [i]: 0.1 } },
      };
  }
}
