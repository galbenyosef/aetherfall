// index-BTsv3a2s 28 — the
// Lines 25880-26219 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function il(e, t) {
  return Math.round(Math.max(13, Math.round(e * 5)) * Rc[t]);
}
function al(e, t) {
  return Math.round(Math.max(10, Math.round(e * 2.6)) * Rc[t]);
}
function ol(e) {
  return e === `larger` ? 2 : e === `large` ? 3 : 4;
}
function sl(e) {
  return Math.round(112 * Rc[e]);
}
function cl(e, t) {
  (t.style.setProperty(`--text-scale`, String(Rc[e.textSize])),
    t.classList.toggle(`readable-font`, e.readableFont),
    t.classList.toggle(`text-scaled`, e.textSize !== `normal`));
}
function ll(e, t, n, r = !1, i = !1) {
  return e === `Escape` || (!t && !n && !r && i);
}
var ul = [`range`, `checkbox`, `radio`, `button`];
function dl(e, t) {
  let n = e?.toUpperCase();
  return (
    n === `TEXTAREA` ||
    (n === `INPUT` && !ul.includes((t || `text`).toLowerCase()))
  );
}
var fl = ml(),
  pl = new Set();
function ml() {
  try {
    let e = localStorage.getItem(zc);
    return e ? qc(JSON.parse(e)) : Wc();
  } catch {
    return Wc();
  }
}
function hl(e) {
  let t = {};
  try {
    let e = localStorage.getItem(zc);
    e && (t = Kc(JSON.parse(e)));
  } catch {}
  for (let n of e) t[n] = fl[n];
  (typeof t.controls == `object` &&
    t.controls !== null &&
    !Object.keys(t.controls).length &&
    delete t.controls,
    Array.isArray(t.ignored) && !t.ignored.length && delete t.ignored);
  try {
    Object.keys(t).length
      ? localStorage.setItem(zc, JSON.stringify(t))
      : localStorage.removeItem(zc);
  } catch {}
  gl();
}
function gl() {
  for (let e of pl) e();
}
function _l() {
  return fl;
}
var vl = [`controls`, `ignored`];
function yl(e) {
  let t = { ...fl, ...Kc(e) },
    n = Object.keys(t).filter((e) =>
      vl.includes(e)
        ? JSON.stringify(t[e]) !== JSON.stringify(fl[e])
        : t[e] !== fl[e],
    );
  n.length && ((fl = t), hl(n));
}
function bl() {
  let e = Wc(),
    { chatChannel: t, controls: n, ignored: r } = fl;
  fl = { ...e, chatChannel: t, controls: n, ignored: r };
  let i = {};
  (t !== e.chatChannel && (i.chatChannel = t),
    Object.keys(n).length && (i.controls = n),
    r.length && (i.ignored = r));
  try {
    Object.keys(i).length
      ? localStorage.setItem(zc, JSON.stringify(i))
      : localStorage.removeItem(zc);
  } catch {}
  gl();
}
function xl(e) {
  return (pl.add(e), () => pl.delete(e));
}
if (typeof document < `u` && document.documentElement) {
  let e = document.documentElement,
    t = () => {
      (cl(fl, e),
        fl.readableFont &&
          document.fonts?.load(`700 16px ${Zc}`).catch(() => {}));
    };
  (t(), xl(t));
}
var Sl = (e) => `aetherfall.scenes.${e}`;
function Cl(e) {
  try {
    let t = localStorage.getItem(Sl(e)),
      n = t ? JSON.parse(t) : [];
    return Array.isArray(n) ? n.filter((e) => typeof e == `string`) : [];
  } catch {
    return [];
  }
}
function wl(e, t) {
  try {
    return (localStorage.setItem(Sl(e), JSON.stringify(t)), !0);
  } catch {
    return !1;
  }
}
function clearMageSave(e) {
  try {
    localStorage.removeItem(Sl(e));
  } catch {}
}
function El(e, t, n = []) {
  let r = [...new Set([...e, ...n])].filter((e) => e !== t);
  return (r.push(t), r.slice(-256));
}
var DEVICE_TOKEN_KEY = `aetherfall.token`;
function ensureDeviceToken() {
  let e = localStorage.getItem(DEVICE_TOKEN_KEY);
  return (e || ((e = crypto.randomUUID()), localStorage.setItem(DEVICE_TOKEN_KEY, e)), e);
}
function rotateDeviceToken() {
  let e = crypto.randomUUID();
  return (localStorage.setItem(DEVICE_TOKEN_KEY, e), e);
}
var LAST_MAGE_KEY = `aetherfall.lastMage`;
function lastMageId() {
  try {
    return localStorage.getItem(LAST_MAGE_KEY);
  } catch {
    return null;
  }
}
function setLastMageId(e) {
  try {
    localStorage.setItem(LAST_MAGE_KEY, e);
  } catch {}
}
function forgetMageId(e) {
  try {
    localStorage.getItem(LAST_MAGE_KEY) === e && localStorage.removeItem(LAST_MAGE_KEY);
  } catch {}
  clearMageSave(e);
}
function resumeMage(e, ...t) {
  for (let n of t) {
    let t = n ? e.find((e) => e.id === n) : void 0;
    if (t) return t;
  }
  return e[0] ?? null;
}
var Fl = (e, t, n, r, i, a, o, s) => ({
    id: e,
    name: t,
    region: n,
    style: r,
    x: Ar + dr[e][0],
    y: jr + dr[e][1],
    level: i,
    tier: i >= 20 ? 3 : i >= 12 ? 2 : 1,
    roster: a,
    night: o,
    lore: s,
  }),
  Il = {
    sowing: Fl(
      `sowing`,
      `Sowing Altar`,
      `glade`,
      `meadow`,
      6,
      [`slime`, `boar`, `blightslime`],
      [`husk`, `husksweeper`],
      `The Glade's farmers plough around it and never over it. Slimes pool at its feet every spring.`,
    ),
    rimewater: Fl(
      `rimewater`,
      `Rimewater Altar`,
      `frost`,
      `rime`,
      7,
      [`wisp`, `hollowwisp`],
      [`husk`, `bellhusk`],
      `On the bank where the Rimewater starts to freeze. The fishermen tie a ribbon to it for every boat that comes home.`,
    ),
    mosslight: Fl(
      `mosslight`,
      `Mosslight Altar`,
      `woods`,
      `grove`,
      8,
      [`wolf`, `hollowmaw`],
      [`barrowhusk`],
      `Deep in the Whispering Woods, glowcaps grow in a ring exactly as wide as its light.`,
    ),
    cinderwell: Fl(
      `cinderwell`,
      `Cinderwell Altar`,
      `ash`,
      `basalt`,
      9,
      [`imp`, `cinderhound`],
      [`charredhusk`],
      `Where the Wastes begin. The Ember Camp's children dare each other to touch it.`,
    ),
    unremembered: Fl(
      `unremembered`,
      `Unremembered Altar`,
      `woods`,
      `grove`,
      13,
      [`hollowmaw`, `veilmoth`, `barrowhusk`],
      [`barrowhusk`, `boghusk`],
      `Raised on the field of the Unremembered War. No one has attuned it since 618. The barrow dead stand up for its rite even by day.`,
    ),
    stormwatch: Fl(
      `stormwatch`,
      `Stormwatch Altar`,
      `glade`,
      `meadow`,
      16,
      [`crawler`, `thunderhawk`, `faithful`],
      [`pithusk`, `huskstorm`],
      `Golem ground. Its horns are cut from the same rune-stone as the Golems, and they turn their heads when it sings.`,
    ),
    scorchglass: Fl(
      `scorchglass`,
      `Scorchglass Altar`,
      `ash`,
      `basalt`,
      21,
      [`cinderhound`, `blackfireimp`, `salamander`, `charredhusk`],
      [`huskpyro`],
      `The Aetherfall drove this shard in so hard the ash around it turned to glass. The lava still parts around it.`,
    ),
    shoreglass: Fl(
      `shoreglass`,
      `Shoreglass Altar`,
      `frost`,
      `rime`,
      24,
      [`chorister`, `icehusk`, `rimebear`, `hollowwisp`],
      [`huskcryo`],
      `On Frostmere's shore. On clear nights, if you sing to it, something under the ice sings back.`,
    ),
  },
  Ll = Object.keys(Il),
  Rl = { id: `aether`, name: `The Aether Crystal`, x: Mr + 0.5, y: Nr + 6 };
function zl(e) {
  if (e === Rl.id) return { x: Rl.x, y: Rl.y };
  let t = Il[e];
  return { x: t.x + 0.5, y: t.y + 2.5 };
}
var Bl = {
    radius: 12,
    creditRadius: 16,
    waveSeconds: 50,
    breatherSeconds: 8,
    abandonSeconds: 20,
    fadeCooldownSeconds: 60,
    singingSeconds: 900,
    hollowSettleSeconds: 300,
    hollowMaxSeconds: 2700,
    reclaimRetrySeconds: 120,
    blightRadius: 10,
  },
  Vl = {
    max: 100,
    reclaimStart: 35,
    reclaimPerWave: 12,
    betweenWaves: 8,
    gnawer: 2,
    tether: 1.25,
    hollowing: 30,
    melee: 2,
    gnawerSnapBack: 1,
  },
  Hl = {
    radiant: {
      name: `Radiant`,
      min: 75,
      dust: 1.5,
      extraItem: 1,
      color: `#7ef9ff`,
      line: `The shard sings clear. Every altar on the road hears it.`,
    },
    steady: {
      name: `Steady`,
      min: 40,
      dust: 1,
      extraItem: 0,
      color: `#ffd166`,
      line: `The shard holds its note.`,
    },
    flickering: {
      name: `Flickering`,
      min: 0,
      dust: 0.75,
      extraItem: 0,
      color: `#ff9a6a`,
      line: `The shard holds, just. It hums off-key for a while.`,
    },
  },
  Ul = {
    normal: { hp: 1, dmg: 1, xp: 1 },
    elite: { hp: 2.6, dmg: 1.3, xp: 3 },
    named: { hp: 4, dmg: 1.4, xp: 5 },
    boss: { hp: 10, dmg: 1.6, xp: 10 },
  };
function Wl(e, t) {
  let n = Ul[t],
    r = we(e);
  return {
    hp: Math.round(30 * r.hp * n.hp),
    dmg: Math.round(r.dmg * n.dmg),
    xp: Math.round(r.xp * n.xp),
  };
}
var Gl = {
    songSeconds: 8,
    singRange: 2.2,
    breakShare: 0.12,
    staggerSeconds: 2.5,
    summonEverySeconds: 10,
    summonCount: 2,
  },
  Kl = { 1: 3, 2: 4, 3: 5 };
function ql(e) {
  return 2 + e.tier;
}
