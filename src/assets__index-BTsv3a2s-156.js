// assets__index-BTsv3a2s 156 — color
// Lines 90611-90937 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var CB = `#b01a2a`,
  wB = { dy: -14, r: 9, color: CB, a: 0.5 },
  TB = (e, t = { anim: 7, shadow: 7 }) => ({
    body: { t: `beast`, sprite: e },
    ...t,
  }),
  EB = (e, t) => TB(() => Rg(e), t),
  DB = (e, t) => TB(() => Vg(e), t),
  OB = (e, t, n, r = {}) => ({
    body: { t: `humanoid`, sheet: () => Jg(e), idle: t, attack: n },
    anim: 5,
    shadow: 6,
    lights: [wB],
    ...r,
  }),
  kB = (e, t) => ({
    body: { t: `humanoid`, sheet: () => Kg(e), idle: [0, 1], attack: !0 },
    anim: 6,
    shadow: 6,
    lights: [wB, { dx: 7, dy: -16, r: 16, color: t, a: 0.45, flicker: !0 }],
    motes: [{ rate: 3, color: t, spread: 4, dy: -16, dx: 7 }],
  }),
  AB = (e, t, n = [], r = {}) => ({
    body: { t: `key`, id: e },
    anim: 4,
    shadow: Math.round(mg[e].w * 0.32),
    lights: t,
    motes: n,
    ...r,
  }),
  jB = {
    slime: TB(() => xh(`slime`)),
    wolf: TB(() => xh(`wolf`), {
      anim: 7,
      shadow: 7,
      lights: [{ dx: 7, dy: -11, r: 6, color: `#ff3355`, a: 0.9 }],
    }),
    wisp: TB(() => xh(`wisp`), {
      anim: 7,
      shadow: 7,
      float: { amp: 2, base: -4 },
      lights: [{ dy: -10, r: 34, color: `#5cc8ff`, a: 0.9 }],
      motes: [{ rate: 14, color: `#aee6ff`, spread: 8, dy: -10, rise: 12 }],
    }),
    imp: TB(() => xh(`imp`), {
      anim: 7,
      shadow: 7,
      lights: [{ dy: -10, r: 20, color: `#ff7a1a`, a: 0.6 }],
      motes: [
        { rate: 8, color: `#ffb238`, spread: 1, dx: -6, dy: -4, rise: 16 },
      ],
    }),
    golem: TB(() => xh(`golem`), {
      anim: 3,
      shadow: 14,
      lights: [{ dy: -22, r: 40, color: `#7ef9ff`, a: 0.7 }],
      motes: [{ rate: 6, color: `#7ef9ff`, spread: 20, dy: -25, rise: 10 }],
    }),
    recalled: TB(() => xh(`recalled`), { anim: 6, shadow: 6, lights: [wB] }),
    gnawer: TB(() => Jz(`gnawer`, 0, 4), {
      anim: 10,
      shadow: 6,
      lights: [{ dy: -6, r: 8, color: CB, a: 0.55 }],
    }),
    tether: TB(() => Jz(`tether`, 3, 7), {
      anim: 5,
      shadow: 6,
      lights: [{ dy: -24, r: 14, color: CB, a: 0.6, flicker: !0 }],
      motes: [{ rate: 4, color: `#e0484e`, spread: 4, dy: -30, rise: 10 }],
    }),
    cantor: TB(() => Jz(`cantor`, 0, 4), {
      anim: 5,
      shadow: 9,
      lights: [wB, { dx: 8, dy: -24, r: 12, color: CB, a: 0.6 }],
      motes: [
        { rate: 3, color: `#b01a2a`, spread: 8, dy: -30, rise: 8, dark: !0 },
      ],
    }),
    boar: EB(`boar`, {
      anim: 8,
      shadow: 10,
      lights: [{ dy: -13, r: 10, color: `#8ef6ff`, a: 0.45 }],
    }),
    salamander: EB(`salamander`, {
      anim: 6,
      shadow: 11,
      lights: [{ dy: -5, r: 22, color: `#ff7a1a`, a: 0.65, flicker: !0 }],
      motes: [{ rate: 6, color: `#ffb238`, spread: 14, dy: -4, rise: 18 }],
    }),
    crawler: EB(`crawler`, {
      anim: 8,
      shadow: 10,
      lights: [{ dy: -7, r: 12, color: `#ffcf6a`, a: 0.5 }],
    }),
    thunderhawk: EB(`thunderhawk`, {
      anim: 9,
      shadow: 8,
      float: { amp: 2, base: -5 },
      lights: [{ dy: -12, r: 16, color: `#fff36b`, a: 0.5, flicker: !0 }],
      motes: [{ rate: 4, color: `#fff36b`, spread: 12, dy: -12, rise: 4 }],
    }),
    rimebear: EB(`rimebear`, {
      anim: 5,
      shadow: 13,
      motes: [
        { rate: 2, color: `#dfe9f2`, spread: 3, dx: 13, dy: -16, rise: 8 },
      ],
    }),
    veilmoth: EB(`veilmoth`, {
      anim: 8,
      shadow: 7,
      float: { amp: 3, base: -7 },
      lights: [{ dy: -14, r: 24, color: `#b58aff`, a: 0.6 }],
      motes: [{ rate: 7, color: `#e6d9ff`, spread: 10, dy: -12, rise: -8 }],
    }),
    cinderhound: EB(`cinderhound`, {
      anim: 8,
      shadow: 9,
      lights: [{ dy: -9, r: 18, color: `#ff7a1a`, a: 0.6, flicker: !0 }],
      motes: [{ rate: 9, color: `#ff7a1a`, spread: 10, dy: -12, rise: 20 }],
    }),
    sentinel: EB(`sentinel`, {
      anim: 4,
      shadow: 10,
      lights: [{ dy: -17, r: 14, color: `#ffd166`, a: 0.6 }],
    }),
    faithful: {
      body: {
        t: `humanoid`,
        sheet: () => Tg(`faithful`),
        idle: [0, 1],
        attack: !0,
      },
      anim: 6,
      shadow: 6,
      lights: [{ dy: -24, r: 6, color: CB, a: 0.7 }],
    },
    chorister: EB(`chorister`, {
      anim: 5,
      shadow: 6,
      lights: [{ dy: -16, r: 20, color: `#8ef6ff`, a: 0.5 }],
      motes: [{ rate: 3, color: `#bff0ff`, spread: 4, dy: -4, rise: 6 }],
    }),
    chainbound: EB(`chainbound`, {
      anim: 5,
      shadow: 7,
      lights: [{ dy: -10, r: 10, color: CB, a: 0.55 }],
    }),
    blightslime: DB(`slime`, {
      anim: 6,
      shadow: 7,
      lights: [{ dy: -6, r: 12, color: CB, a: 0.55 }],
    }),
    hollowmaw: DB(`wolf`, {
      anim: 8,
      shadow: 8,
      lights: [{ dx: 8, dy: -10, r: 8, color: `#e0484e`, a: 0.9 }],
    }),
    hollowwisp: DB(`wisp`, {
      anim: 7,
      shadow: 7,
      float: { amp: 2, base: -4 },
      lights: [{ dy: -10, r: 30, color: CB, a: 0.8 }],
      motes: [{ rate: 12, color: `#e0484e`, spread: 8, dy: -10, rise: 12 }],
    }),
    blackfireimp: DB(`imp`, {
      anim: 7,
      shadow: 7,
      lights: [{ dy: -10, r: 18, color: CB, a: 0.6, flicker: !0 }],
      motes: [
        {
          rate: 8,
          color: `#3a0a18`,
          spread: 1,
          dx: -6,
          dy: -4,
          rise: 16,
          dark: !0,
        },
      ],
    }),
    hollowwarden: DB(`golem`, {
      anim: 3,
      shadow: 14,
      lights: [{ dy: -22, r: 44, color: CB, a: 0.75 }],
      motes: [{ rate: 7, color: `#e0484e`, spread: 20, dy: -25, rise: 10 }],
    }),
    husk: OB(`baker`, [0, 0, 6, 6], !1),
    husksweeper: OB(`sweeper`, [6, 0, 6, 1], !1),
    bellhusk: OB(`crier`, [6, 1, 6, 1, 0, 0], !1),
    barrowhusk: EB(`barrowhusk`, {
      anim: 5,
      shadow: 6,
      lights: [wB],
      rise: `barrowhusk`,
    }),
    feverhusk: EB(`feverhusk`, {
      anim: 5,
      shadow: 6,
      lights: [wB],
      rise: `feverhusk`,
      motes: [
        { rate: 2, color: `#8a8f6a`, spread: 6, dy: -8, rise: 6, dark: !0 },
      ],
    }),
    boghusk: EB(`boghusk`, {
      anim: 5,
      shadow: 6,
      lights: [wB],
      rise: `boghusk`,
      motes: [{ rate: 2, color: `#8ab0b0`, spread: 5, dy: -2, rise: -6 }],
    }),
    charredhusk: OB(`charred`, [0, 1], !0, {
      motes: [{ rate: 4, color: `#ff5a1a`, spread: 6, dy: -14, rise: 14 }],
    }),
    gildedhusk: OB(`gilded`, [6, 6, 6, 0], !1),
    lordhighmore: OB(`lord`, [0, 1], !0, {
      lights: [wB, { dy: -20, r: 10, color: `#e0b64a`, a: 0.35 }],
    }),
    ladyhighmore: OB(`lady`, [0, 1], !0, {
      lights: [wB, { dy: -20, r: 12, color: `#8ef6ff`, a: 0.4 }],
    }),
    pithusk: OB(`pit`, [0, 1], !0, {
      lights: [wB, { dx: 2, dy: -25, r: 16, color: `#ffcf6a`, a: 0.7 }],
    }),
    icehusk: {
      ...OB(`icelocked`, [0, 1], !1, {
        lights: [{ dy: -14, r: 12, color: `#bfe0f5`, a: 0.35 }],
      }),
      body: {
        t: `humanoid`,
        sheet: () => Jg(`icelocked`),
        idle: [0, 1],
        attack: !1,
        dormant: [6],
      },
    },
    huskpyro: kB(`pyro`, `#ff7a1a`),
    huskcryo: kB(`cryo`, `#8ef6ff`),
    huskstorm: kB(`storm`, `#fff36b`),
    huskvoid: kB(`void`, `#b58aff`),
    gorrath: AB(
      `gorrath`,
      [
        { dy: -70, r: 90, color: `#ff7a1a`, a: 0.9, flicker: !0 },
        { dy: -50, r: 30, color: `#ffd166`, a: 0.8 },
      ],
      [{ rate: 18, color: `#ffb238`, spread: 50, dy: -50, rise: 24 }],
      { shadow: 38, float: { amp: 3, base: -6 } },
    ),
    aurek: AB(
      `aurek`,
      [{ dy: -22, r: 42, color: `#e0b64a`, a: 0.7 }],
      [{ rate: 4, color: `#ffe9a8`, spread: 14, dy: -24, rise: 6 }],
    ),
    hessa: AB(`hessa`, [
      { dx: 9, dy: -18, r: 52, color: `#ffcf6a`, a: 0.9, flicker: !0 },
    ]),
    maelis: AB(
      `maelis`,
      [
        { dy: -24, r: 52, color: `#8ef6ff`, a: 0.8 },
        { dy: -30, r: 10, color: CB, a: 0.8 },
      ],
      [{ rate: 10, color: `#e6fdff`, spread: 16, dy: -6, rise: 8 }],
    ),
    vesker: AB(
      `vesker`,
      [{ dy: -20, r: 36, color: CB, a: 0.65 }],
      [
        {
          rate: 9,
          color: `#8c8698`,
          spread: 4,
          dx: -10,
          dy: -14,
          rise: 14,
          dark: !0,
        },
      ],
    ),
    unseen: AB(
      `unseen`,
      [{ dy: -24, r: 40, color: `#b58aff`, a: 0.5, flicker: !0 }],
      [
        {
          rate: 12,
          color: `#2a0a3a`,
          spread: 18,
          dy: -20,
          rise: -10,
          dark: !0,
        },
      ],
      { flicker: !0 },
    ),
    paleface: TB(() => MB(`maelis`, `faces`, 8), {
      anim: 6,
      shadow: 4,
      float: { amp: 1, base: -2 },
      lights: [{ dy: -8, r: 14, color: `#8ef6ff`, a: 0.6 }],
    }),
    unseencopy: TB(() => MB(`unseen`, `afterimages`, 0), {
      anim: 4,
      shadow: 8,
      flicker: !0,
    }),
  };
function MB(e, t, n) {
  let r = SB(e, t)?.spark ?? [];
  if (!r.length) return xh(`wisp`);
  let i = r[0];
  return {
    frames: r,
    flipped: r.map(Ip),
    flash: r.map((e) => Fp(e)),
    ax: Math.floor(i.width / 2),
    ay: Math.floor(i.height / 2) + n,
  };
}
var NB = (e, t) => TB(() => Py(e), t),
  yie = {
    ember: `#ff7a1a`,
    rime: `#5cc8ff`,
    storm: `#fff36b`,
    void: `#b84dff`,
  };
