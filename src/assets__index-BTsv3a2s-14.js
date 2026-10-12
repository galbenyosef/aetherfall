// assets__index-BTsv3a2s 14 — max
// Lines 20756-21103 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Wr(e) {
  let t = new Map();
  for (let n of e) t.has(n.key) || t.set(n.key, n);
  return (e) => t.get(e);
}
var Gr = new Set([A.Water, A.Lava, A.DeepWater]),
  Kr = 288,
  qr = 216,
  Jr = null,
  Yr = null;
function Xr(e, t) {
  let n = Math.floor(e),
    r = Math.floor(t);
  if (n < 0 || r < 0 || n >= Or || r >= kr) return !1;
  let i = Vr(),
    a = r * Or + n;
  return !Gr.has(i.tiles[a]) && !i.blocked[a];
}
function Zr() {
  if (!Jr) {
    let e = Gn(Vr(), Xr),
      t = new Int16Array(Kr * qr);
    (e.forEach((e, n) => {
      for (let r = 0; r < e.h; r++)
        for (let i = 0; i < e.w; i++)
          t[(e.y0 - 4 + r) * Kr + (e.x0 - 524 + i)] = n + 1;
    }),
      (Jr = e),
      (Yr = t));
  }
  return Jr;
}
function Qr(e, t) {
  let n = Math.floor(e) - 524,
    r = Math.floor(t) - 4;
  if (n < 0 || r < 0 || n >= Kr || r >= qr) return null;
  let i = Zr(),
    a = Yr[r * Kr + n];
  return a ? i[a - 1] : null;
}
function $r(e, t) {
  let n = Qr(e, t);
  if (!n) return !1;
  let r = (t - n.y0) * n.w + (e - n.x0);
  return n.cells[r] === On.FLOOR && !n.blocked[r];
}
function ei(e, t) {
  return e >= 524 ? $r(e, t) : Xr(e, t);
}
function ti(e, t) {
  return ei(Math.floor(e), Math.floor(t));
}
function ni(e, t) {
  let n = Math.floor(e),
    r = Math.floor(t);
  return n >= 524
    ? !$r(n, r)
    : n < 0 || r < 0 || n >= Or || r >= kr || Vr().blocked[r * Or + n] === 1;
}
function ri(e, t) {
  if (e >= 524) return `sanctum`;
  let n = Math.max(0, Math.min(Or - 1, Math.floor(e))),
    r = Math.max(0, Math.min(kr - 1, Math.floor(t)));
  return zr[Vr().regions[r * Or + n]];
}
function ii(e, t) {
  return e >= 524 || Math.hypot(e - Ar, t - jr) < Pr + 1;
}
var ai = 3;
([
  { kind: `slime`, count: 12, min: 60, max: 88, regions: [`glade`] },
  { kind: `wolf`, count: 12, min: 60, max: 88, regions: [`woods`] },
  { kind: `wisp`, count: 12, min: 60, max: 95, regions: [`frost`] },
  { kind: `imp`, count: 12, min: 60, max: 88, regions: [`ash`] },
  { kind: `husk`, count: 6, min: 53, max: 64, roads: !0 },
  { kind: `husksweeper`, count: 5, min: 53, max: 64, roads: !0 },
  { kind: `bellhusk`, count: 3, min: 55, max: 66, roads: !0 },
  {
    kind: `barrowhusk`,
    count: 8,
    min: 0,
    max: 200,
    near: { x: -84, y: 22, r: 13 },
  },
  { kind: `boar`, count: 7, min: 64, max: 100, regions: [`glade`] },
  { kind: `blightslime`, count: 5, min: 90, max: 130, regions: [`glade`] },
  { kind: `crawler`, count: 5, min: 95, max: 160, regions: [`glade`] },
  {
    kind: `thunderhawk`,
    count: 4,
    min: 100,
    max: 160,
    regions: [`glade`, `frost`],
    angle: [290, 345],
  },
  { kind: `faithful`, count: 5, min: 100, max: 160, regions: [`glade`] },
  { kind: `pithusk`, count: 4, min: 100, max: 160, regions: [`glade`] },
  { kind: `huskstorm`, count: 2, min: 110, max: 160, regions: [`glade`] },
  { kind: `hollowmaw`, count: 5, min: 90, max: 130, regions: [`woods`] },
  { kind: `veilmoth`, count: 5, min: 95, max: 160, regions: [`woods`] },
  {
    kind: `boghusk`,
    count: 4,
    min: 60,
    max: 160,
    regions: [`woods`],
    ground: `waterEdge`,
  },
  { kind: `chainbound`, count: 4, min: 105, max: 160, regions: [`woods`] },
  { kind: `huskvoid`, count: 2, min: 110, max: 160, regions: [`woods`] },
  { kind: `hollowwisp`, count: 5, min: 80, max: 130, regions: [`frost`] },
  { kind: `rimebear`, count: 4, min: 85, max: 160, regions: [`frost`] },
  {
    kind: `chorister`,
    count: 5,
    min: 70,
    max: 160,
    regions: [`frost`],
    ground: `waterEdge`,
  },
  {
    kind: `icehusk`,
    count: 5,
    min: 70,
    max: 160,
    regions: [`frost`],
    ground: `ice`,
  },
  { kind: `huskcryo`, count: 2, min: 100, max: 160, regions: [`frost`] },
  {
    kind: `salamander`,
    count: 6,
    min: 65,
    max: 160,
    regions: [`ash`],
    ground: `lavaEdge`,
  },
  { kind: `cinderhound`, count: 5, min: 85, max: 130, regions: [`ash`] },
  { kind: `charredhusk`, count: 5, min: 80, max: 130, regions: [`ash`] },
  { kind: `blackfireimp`, count: 5, min: 100, max: 160, regions: [`ash`] },
  { kind: `huskpyro`, count: 3, min: 100, max: 160, regions: [`ash`] },
  { kind: `sentinel`, count: 4, min: 95, max: 160, angle: [115, 155] },
  { kind: `gildedhusk`, count: 5, min: 90, max: 160, angle: [115, 155] },
  { kind: `feverhusk`, count: 5, min: 105, max: 160, angle: [35, 80] },
].map((e) => ({
  ...e,
  count: e.count * 2 * 2 * ai,
  min: e.min * 2,
  max: e.max * 2,
  near: e.near && {
    x: Ar + e.near.x * 2,
    y: jr + e.near.y * 2,
    r: e.near.r * 2,
  },
})),
  Ar + 160,
  jr - 150,
  Ar + 192,
  jr - 58,
  Ar + 184,
  jr + 172,
  Ar - 176,
  jr + 172,
  Ar - 170,
  jr + 178,
  Ar + 12,
  jr + 200,
  Ar - 184,
  jr + 184,
  Ar + 204,
  jr + 8,
  Ar + 60,
  jr - 172,
  Ar - 204,
  jr - 16,
  Ar - 180,
  jr - 184,
  A.Path,
  A.Bridge,
  A.BridgeH,
  A.Dock,
  A.Cobble,
  A.Dirt);
var oi = [
    {
      id: `up`,
      name: `Move up`,
      group: `move`,
      keys: [`w`, `arrowup`],
      held: !0,
    },
    {
      id: `down`,
      name: `Move down`,
      group: `move`,
      keys: [`s`, `arrowdown`],
      held: !0,
    },
    {
      id: `left`,
      name: `Move left`,
      group: `move`,
      keys: [`a`, `arrowleft`],
      held: !0,
    },
    {
      id: `right`,
      name: `Move right`,
      group: `move`,
      keys: [`d`, `arrowright`],
      held: !0,
    },
    {
      id: `sprint`,
      name: `Sprint`,
      group: `move`,
      keys: [`shift`, ``],
      held: !0,
      note: `hold`,
    },
    {
      id: `interact`,
      name: `Talk, look, use`,
      group: `world`,
      keys: [`e`, ``],
    },
    { id: `road`, name: `Chorus Road`, group: `world`, keys: [`r`, ``] },
    { id: `hearth`, name: `Hearthsong`, group: `world`, keys: [`g`, ``] },
    { id: `stance`, name: `Veiled / Bared`, group: `world`, keys: [`p`, ``] },
    { id: `homestead`, name: `Homestead`, group: `world`, keys: [`y`, ``] },
    { id: `build`, name: `Build`, group: `world`, keys: [`b`, ``] },
    { id: `provisions`, name: `Provisions`, group: `world`, keys: [`o`, ``] },
    { id: `market`, name: `Market`, group: `world`, keys: [`t`, ``] },
    {
      id: `mageMenu`,
      name: `Mage menu`,
      group: `world`,
      keys: [``, ``],
      note: `or click a name`,
      optional: !0,
    },
    { id: `satchel`, name: `Satchel`, group: `panels`, keys: [`i`, ``] },
    { id: `journal`, name: `Journal`, group: `panels`, keys: [`j`, ``] },
    { id: `atlas`, name: `Atlas`, group: `panels`, keys: [`v`, ``] },
    { id: `spellbook`, name: `Spellbook`, group: `panels`, keys: [`k`, ``] },
    { id: `party`, name: `Party`, group: `panels`, keys: [`u`, ``] },
    { id: `settings`, name: `Settings`, group: `panels`, keys: [`l`, ``] },
    { id: `help`, name: `Help`, group: `panels`, keys: [`h`, ``] },
    { id: `mute`, name: `Mute`, group: `panels`, keys: [`m`, ``] },
    {
      id: `chat`,
      name: `Open chat`,
      group: `panels`,
      keys: [`shift+enter`, ``],
      note: `or click the box`,
      optional: !0,
    },
  ],
  si = {
    chat: `a click on the chat box opens it`,
    mageMenu: `a click on a mage's name opens it`,
  },
  ci = [`enter`, `shift-enter`, `click`],
  li = {
    enter: [`enter`, ``],
    "shift-enter": [`shift+enter`, ``],
    click: [``, ``],
  };
function ui(e) {
  return ci.find((t) => li[t][0] === e[0] && li[t][1] === e[1]) ?? null;
}
oi.map((e) => e.id);
var di = new Map(oi.map((e) => [e.id, e]));
function fi(e) {
  return di.get(e);
}
var pi = `it's for the browser's shortcuts`,
  mi = `the browser or the keyboard keeps it`,
  hi = `the browser can't tell which key it is`,
  gi = new Map([
    [`escape`, `it closes panels, skips scenes and opens the game menu`],
    [`tab`, `it switches the chat box between Realm, Near and Party`],
    [`/`, `it starts a chat command`],
    [`alt`, `it shows loot labels`],
    ...[`control`, `meta`, `os`, `altgraph`, `super`, `hyper`].map((e) => [
      e,
      pi,
    ]),
    ...[
      `contextmenu`,
      `capslock`,
      `numlock`,
      `scrolllock`,
      `fn`,
      `fnlock`,
      `printscreen`,
      `f1`,
      `f3`,
      `f5`,
      `f6`,
      `f7`,
      `f10`,
      `f11`,
      `f12`,
    ].map((e) => [e, mi]),
    ...[`dead`, `unidentified`, `process`, `compose`].map((e) => [e, hi]),
    [`backspace`, `Backspace and Delete clear a key here`],
    [`delete`, `Backspace and Delete clear a key here`],
  ]),
  _i = [
    { name: `Loot labels`, keys: [`Alt`] },
    {
      name: `Close a panel, skip a scene, walk away; else the game menu`,
      keys: [`Esc`],
    },
    { name: `Next line`, keys: [`Space`, `Enter`, `click`] },
    { name: `Pick a reply`, keys: [`1–4`] },
    { name: `Chat command`, keys: [`/`] },
    { name: `Realm, Near or Party, while typing`, keys: [`Tab`] },
    { name: `First and second spell`, keys: [`Left click`, `Right click`] },
    { name: `A mage's menu, out of a fight`, keys: [`Click their name`] },
    { name: `Zoom the passive tree (Spellbook)`, keys: [`+`, `−`, `0`] },
  ];
function vi(e) {
  return e.length === 1 && e.toLowerCase() !== e.toUpperCase();
}
function yi(e) {
  return e.length === 1 && e >= `0` && e <= `9`;
}
function bi(e, t) {
  let n = e.key;
  if (e.shiftKey && n.length === 1 && n !== ` ` && !vi(n) && !yi(n) && e.code) {
    let n = t?.(e.code);
    if (n) return n;
    let r = /^Digit([0-9])$/.exec(e.code);
    if (r) return r[1];
  }
  return n.toLowerCase();
}
function xi(e) {
  return e.startsWith(`shift+`) && e.length > 6;
}
function Si(e) {
  return xi(e) ? e.slice(6) : e;
}
function Ci(e) {
  return gi.get(e) ?? null;
}
