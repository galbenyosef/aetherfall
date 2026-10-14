// assets__index-BTsv3a2s 157 — anim
// Lines 90938-91287 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
Object.assign(jB, {
  leech: NB(`leech`, {
    anim: 5,
    shadow: 7,
    lights: [{ dy: -5, r: 16, color: `#7ef9ff`, a: 0.55 }],
  }),
  lockwork: NB(`lockwork`, {
    anim: 3,
    shadow: 10,
    lights: [{ dy: -18, r: 12, color: `#7fe0b0`, a: 0.6 }],
  }),
  sluicewarden: NB(`sluicewarden`, {
    anim: 3,
    shadow: 12,
    lights: [{ dy: -22, r: 18, color: `#7fe0b0`, a: 0.7 }],
  }),
  motherbrim: NB(`motherbrim`, {
    anim: 4,
    shadow: 24,
    lights: [
      { dy: -22, r: 54, color: `#6fdc5a`, a: 0.6 },
      { dy: -18, r: 16, color: `#fff36b`, a: 0.8, flicker: !0 },
    ],
    motes: [{ rate: 6, color: `#b6f59a`, spread: 24, dy: -20, rise: 10 }],
  }),
  tallowlight: NB(`tallowlight`, {
    anim: 6,
    shadow: 4,
    float: { amp: 2, base: -3 },
    lights: [{ dy: -14, r: 30, color: `#ffcf7a`, a: 0.9, flicker: !0 }],
    motes: [
      { rate: 5, color: `#3a3024`, spread: 2, dy: -18, rise: 12, dark: !0 },
    ],
  }),
  pikehusk: NB(`pikehusk`, {
    anim: 5,
    shadow: 7,
    lights: [{ dy: -14, r: 8, color: `#b01a2a`, a: 0.5 }],
  }),
  marrow: NB(`marrow`, {
    anim: 7,
    shadow: 14,
    lights: [{ dx: 12, dy: -16, r: 10, color: `#e0484e`, a: 0.9 }],
  }),
  fenn: NB(`fenn`, {
    anim: 5,
    shadow: 8,
    lights: [{ dy: -16, r: 10, color: `#b01a2a`, a: 0.6 }],
  }),
  standard: NB(`standard`, {
    anim: 3,
    shadow: 6,
    lights: [{ dy: -38, r: 20, color: `#b84dff`, a: 0.8, flicker: !0 }],
  }),
  glaciermite: NB(`glaciermite`, {
    anim: 10,
    shadow: 4,
    lights: [{ dy: -4, r: 8, color: `#bff0ff`, a: 0.4 }],
  }),
  frostmaw: NB(`frostmaw`, {
    anim: 6,
    shadow: 12,
    lights: [{ dy: -8, r: 12, color: `#5cc8ff`, a: 0.4 }],
  }),
  rimesow: NB(`rimesow`, {
    anim: 4,
    shadow: 16,
    lights: [{ dy: -28, r: 26, color: `#8ef6ff`, a: 0.7 }],
  }),
  ilse: NB(`ilse`, {
    anim: 4,
    shadow: 8,
    float: { amp: 2, base: -3 },
    lights: [{ dy: -24, r: 48, color: `#8ef6ff`, a: 0.85 }],
    motes: [{ rate: 8, color: `#e6fdff`, spread: 12, dy: -20, rise: 6 }],
  }),
  slagtender: NB(`slagtender`, {
    anim: 5,
    shadow: 8,
    lights: [{ dx: 6, dy: -8, r: 12, color: `#ff7a1a`, a: 0.6 }],
  }),
  clutch: NB(`clutch`, {
    anim: 4,
    shadow: 8,
    lights: [{ dy: -6, r: 18, color: `#ff9a2a`, a: 0.7, flicker: !0 }],
  }),
  orenvey: NB(`orenvey`, {
    anim: 5,
    shadow: 7,
    lights: [{ dx: 7, dy: -14, r: 14, color: `#b01a2a`, a: 0.7, flicker: !0 }],
  }),
  kilnmother: NB(`kilnmother`, {
    anim: 4,
    shadow: 22,
    lights: [{ dy: -18, r: 60, color: `#ff7a1a`, a: 0.9, flicker: !0 }],
    motes: [{ rate: 14, color: `#ffb238`, spread: 20, dy: -26, rise: 22 }],
  }),
  wardenlock: NB(`wardenlock`, {
    anim: 3,
    shadow: 16,
    lights: [
      { dy: -30, r: 22, color: `#e0b64a`, a: 0.6 },
      { dy: -24, r: 10, color: `#b01a2a`, a: 0.7 },
    ],
  }),
  tutor: NB(`tutor`, {
    anim: 3,
    shadow: 16,
    lights: [{ dy: -28, r: 30, color: `#ffffff`, a: 0.4 }],
  }),
  ritecrystal: NB(`pylon_void`, { anim: 2, shadow: 4 }),
});
for (let e of [`ember`, `rime`, `storm`, `void`]) {
  let t = yie[e];
  ((jB[`brimling_${e}`] = NB(`brimling_${e}`, {
    anim: 6,
    shadow: 5,
    lights: [{ dy: -5, r: 14, color: t, a: 0.6 }],
  })),
    (jB[`tonemote_${e}`] = NB(`tonemote_${e}`, {
      anim: 8,
      shadow: 4,
      float: { amp: 2, base: -5 },
      lights: [{ dy: -6, r: 26, color: t, a: 0.9 }],
      motes: [{ rate: 10, color: t, spread: 6, dy: -6, rise: 8 }],
    })),
    (jB[`pylon_${e}`] = NB(`pylon_${e}`, {
      anim: 4,
      shadow: 7,
      lights: [{ dy: -28, r: 60, color: t, a: 0.9, flicker: !0 }],
      motes: [{ rate: 6, color: t, spread: 6, dy: -30, rise: 14 }],
    })));
}
var bie = jB.slime,
  PB = new WeakMap();
function FB(e) {
  let t = jB[e] ?? bie,
    n = Yp(`creature`, e);
  if (!n) return tB(e) ? xie(e, t) : t;
  let r = Xp(n, `idle`, `loop`).fps,
    i = PB.get(t);
  i || PB.set(t, (i = new Map()));
  let a = i.get(r);
  return (a || i.set(r, (a = { ...t, anim: r })), a);
}
var IB = new Map();
function xie(e, t) {
  let n = IB.get(e);
  if (n) return n;
  let r = tB(e),
    i = t.body,
    a = i.t === `beast` ? i.sprite().ay : i.t === `humanoid` ? 26 : mg[i.id].ay,
    o = r.idle.ay / Math.max(1, a),
    s = {
      ...t,
      shadow: Math.max(4, Math.round(lie(e) * 0.55)),
      lights: t.lights?.map((e) => ({
        ...e,
        dy: e.dy * o,
        dx: e.dx === void 0 ? void 0 : e.dx * o,
        r: e.r * Math.sqrt(o),
      })),
      motes: t.motes?.map((e) => ({
        ...e,
        dy: e.dy * o,
        dx: e.dx === void 0 ? void 0 : e.dx * o,
        spread: e.spread * o,
      })),
      rise: void 0,
    };
  return (IB.set(e, s), s);
}
var LB = new Map();
function RB(e, t) {
  let n = Math.floor(t.anim) % e.frames.length,
    r;
  if (t.flash) {
    if (t.flip) {
      let t = LB.get(e);
      (t || LB.set(e, (t = e.flash.map(Ip))), (r = t[n]));
    } else r = e.flash[n];
  } else r = t.flip ? e.flipped[n] : e.frames[n];
  return { img: r, ax: t.flip ? r.width - e.ax : e.ax, ay: e.ay };
}
var zB = new Map();
function Sie(e) {
  let t = zB.get(e);
  if (!t) {
    let n = xg(e),
      r = n.map((e) => Fp(e));
    ((t = { frames: n, flipped: n.map(Ip), flash: r, flashFlipped: r.map(Ip) }),
      zB.set(e, t));
  }
  return t;
}
function BB(e, t) {
  let n = Yp(`creature`, e);
  if (n) {
    let e = Xp(n, `idle`, `loop`),
      r = t.attacking
        ? Xp(n, `attack`, `idle`, `loop`)
        : t.moving
          ? Xp(n, `walk`, `idle`, `loop`)
          : e,
      i = Math.floor((t.anim * r.fps) / e.fps) % r.frames.length,
      a = (
        t.flash
          ? t.flip
            ? r.flashFlipped
            : r.flash
          : t.flip
            ? r.flipped
            : r.frames
      )[i];
    return {
      img: a,
      ax: t.flip ? a.width - n.meta.ax : n.meta.ax,
      ay: n.meta.ay,
    };
  }
  let r = tB(e);
  if (r) return Cie(r, t, FB(e).anim);
  let i = FB(e).body;
  if (i.t === `beast`) return RB(i.sprite(), t);
  if (i.t === `key`) {
    let e = Sie(i.id),
      n = t.attacking
        ? 2
        : t.moving
          ? Math.floor(t.anim) % 2
          : Math.floor(t.anim * 0.4) % 2,
      r = (
        t.flash
          ? t.flip
            ? e.flashFlipped
            : e.flash
          : t.flip
            ? e.flipped
            : e.frames
      )[n],
      a = mg[i.id];
    return { img: r, ax: t.flip ? r.width - a.ax : a.ax, ay: a.ay };
  }
  let a = i.sheet(),
    o = t.moving || t.engaged || t.attacking ? (t.flip ? 3 : 2) : 0,
    s;
  if (t.attacking && i.attack) s = 6;
  else if (t.moving) s = 2 + (Math.floor(t.anim) % 4);
  else {
    let e = !t.engaged && i.dormant ? i.dormant : i.idle;
    s = e[Math.floor(t.anim * 0.25) % e.length];
  }
  return { img: (t.flash ? a.flash : a.frames)[o][s], ax: 10, ay: 26 };
}
var VB = 0.45;
function Cie(e, t, n) {
  let r = e.idle,
    i,
    a = t.anim / n;
  return (
    t.windup !== void 0 && e.attack !== e.idle
      ? ((r = e.attack), (i = Math.floor(t.windup * VB * r.n)))
      : t.strike !== void 0 && e.attack !== e.idle
        ? ((r = e.attack), (i = Math.floor((VB + t.strike * 0.55) * r.n)))
        : ((r = t.attacking ? e.attack : t.moving ? e.walk : e.idle),
          (i = Math.floor(a * r.fps) % r.n)),
    (i = Math.min(r.n - 1, Math.max(0, i))),
    {
      img: r.frame(i, t.flip, t.flash),
      ax: t.flip ? r.w - r.ax : r.ax,
      ay: r.ay,
    }
  );
}
function wie(e, t, n) {
  let r = tB(e)?.death;
  if (!r) return null;
  let i = Math.min(r.n - 1, Math.max(0, Math.floor(t * r.fps)));
  return { img: r.frame(i, n, !1), ax: n ? r.w - r.ax : r.ax, ay: r.ay };
}
function Tie(e, t, n, r) {
  let i = null;
  return (
    e === `gnawer` && t.latched
      ? (i = Jz(`gnawer`, 4, 6))
      : e === `cantor` && (t.stagger ?? 0) > r
        ? (i = Jz(`cantor`, 6, 7))
        : e === `cantor` && t.song && (i = Jz(`cantor`, 4, 6)),
    i ? RB(i, { ...n, anim: n.anim * 0.6 }) : null
  );
}
var HB = new Map();
function Eie(e, t, n) {
  let r = FB(e);
  if (!r.rise) return null;
  let i = HB.get(r.rise);
  if (!i) {
    let e = $g(r.rise);
    HB.set(r.rise, (i = { frames: e, flipped: e.map(Ip) }));
  }
  let a = Math.min(i.frames.length - 1, Math.floor(t * i.frames.length)),
    o = (n ? i.flipped : i.frames)[a],
    s = Rg(r.rise);
  return { img: o, ax: n ? o.width - s.ax : s.ax, ay: s.ay };
}
var UB = new Map(),
  WB = (e) => e.toString(16).padStart(2, `0`);
function Die(e) {
  let t = UB.get(e);
  if (t) return t;
  let { img: n } = BB(e, {
      anim: 0,
      flip: !1,
      moving: !1,
      attacking: !1,
      engaged: !1,
      flash: !1,
    }),
    r = n.getContext(`2d`).getImageData(0, 0, n.width, n.height).data,
    i = new Map();
  for (let e = 0; e < r.length; e += 4) {
    if (r[e + 3] < 128 || r[e] * 0.3 + r[e + 1] * 0.59 + r[e + 2] * 0.11 < 45)
      continue;
    let t = `#${WB(r[e])}${WB(r[e + 1])}${WB(r[e + 2])}`;
    i.set(t, (i.get(t) ?? 0) + 1);
  }
  let a = [...i.entries()].sort((e, t) => t[1] - e[1]).map(([e]) => e),
    o = a.length ? a.slice(0, 3) : [`#ffffff`];
  return (UB.set(e, o), o);
}
var GB = [`#0f2a14`, `#2f8f3a`, `#5ccf4f`, `#b6f59a`, `#f0ffe0`],
  KB = [`#1c221c`, `#4a5448`, `#7a8a78`, `#a8b4a4`, `#e2e8de`],
  qB = [`#0a2422`, `#145a50`, `#2f9c78`, `#6fe0c0`, `#dcfff4`],
  JB = rm.storm,
  Oie = 3.5,
  YB = 1.2,
  XB = 0.6,
  ZB = 1.2,
  QB = (e, t, n) => ({
    x: e * Math.cos(n) - t * Math.sin(n),
    y: e * Math.sin(n) + t * Math.cos(n),
  }),
  $B = (e, t) => t * 4096 + e,
  eV = new Map(),
  tV = -1;
function nV(e, t) {
  tV !== Wp() && (eV.clear(), (tV = Wp()));
  let n = eV.get(e);
  return (n || eV.set(e, (n = t())), n);
}
