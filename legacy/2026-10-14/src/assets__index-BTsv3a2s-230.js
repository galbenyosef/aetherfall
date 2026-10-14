// assets__index-BTsv3a2s 230 — math
// Lines 146432-146767 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Poe(e, t) {
  return t && (t.hat || t.robe)
    ? aX(e, { hat: t.hat && eo(t.hat), robe: t.robe && eo(t.robe) })
    : { key: e, colors: S[e].colors };
}
var Foe = class {
    entries = new Map();
    chosen = new Set();
    maxCap = GG ? 6 : 16;
    cap = this.maxCap;
    budgetMs = GG ? 1.5 : 2;
    spent = 0;
    frames = 0;
    avgMs = 0;
    constructor() {}
    get size() {
      return this.entries.size;
    }
    plan(e, t, n, r) {
      ((this.avgMs += (this.spent - this.avgMs) * 0.1),
        (this.spent = 0),
        ++this.frames % 20 == 0 &&
          (this.avgMs > this.budgetMs && this.cap > 2
            ? this.cap--
            : this.avgMs < this.budgetMs * 0.5 &&
              this.cap < this.maxCap &&
              this.cap++),
        this.chosen.clear());
      let i =
        e.length > this.cap
          ? [...e].sort(
              (e, r) =>
                (e.x - t) ** 2 +
                (e.y - n) ** 2 -
                ((r.x - t) ** 2 + (r.y - n) ** 2),
            )
          : e;
      for (let e = 0; e < Math.min(i.length, this.cap); e++)
        this.chosen.add(i[e].id);
      for (let [e, t] of this.entries)
        r - t.seen > 10 && this.entries.delete(e);
    }
    get(e, t) {
      if (!e.me && !this.chosen.has(e.id)) return null;
      let n = Poe(e.school, e.look);
      if (nm(n.key)) return null;
      let r = performance.now(),
        i = this.entries.get(e.id);
      (i
        ? t - i.seen > 1 && i.body.reset(e.x, e.y, e.dir === 3 ? -1 : 1)
        : ((i = {
            body: new N0(e.id, e.x, e.y, e.dir === 3 ? -1 : 1, n),
            seen: t,
            flash: e.flash,
          }),
          this.entries.set(e.id, i)),
        i.body.setLook(n));
      let a = Math.max(0, t - i.seen);
      return (
        (i.seen = t),
        e.flash > i.flash + 0.01 && i.body.hit(NaN),
        (i.flash = e.flash),
        i.body.step(a, {
          x: e.x,
          y: e.y,
          facing: e.dir === 3 ? -1 : 1,
          engaged: !1,
          dir: e.dir,
          cast: e.cast,
          gesture: e.gesture,
          blink: e.blink,
          walls: e.walls?.(),
          walking: e.walking,
          sprint: e.sprint,
        }),
        (this.spent += performance.now() - r),
        i.body
      );
    }
    draw(e, t, n, r, i) {
      let a = performance.now();
      (e.draw(t, n, r, i), (this.spent += performance.now() - a));
    }
    snap(e, t, n, r) {
      this.entries.get(e)?.body.reset(t, n, r < 0 ? -1 : 1);
    }
  },
  Q3 = new Set([`golem`, `hollowwarden`]),
  Ioe = new Set([
    `crush`,
    `shardquake`,
    `lattice`,
    `inverted`,
    `facetweb`,
    `routenorth`,
  ]);
function $3(e, t) {
  return Q3.has(e) && Ioe.has(t);
}
function Loe(e) {
  return Q3.has(e);
}
function e6() {
  try {
    let e = new URLSearchParams(location.search).get(`fx3d`);
    if (e !== null) return e !== `0`;
  } catch {}
  return _l().fxQuality !== `off`;
}
var t6 = 1.55,
  n6 = 0.35;
function r6(e, t, n) {
  return { x: t + n6 * t6 * n, y: e.y + t6 * n };
}
function Roe(e) {
  return r6(e, (e.x0 + e.x1) / 2, (e.z0 + e.z1) / 2);
}
var i6 = 16,
  a6 = 459791,
  zoe = `#e8f0a0`,
  Boe = `#ffcf8a`,
  o6 = 0.28,
  s6 = { cottage: { kind: `gable` }, well: { kind: `box`, foot: 20 } },
  Voe = 5,
  Hoe = 11;
function Uoe(e, t) {
  let n = e.furniture.find(
    (e) =>
      s6[e.name] &&
      e.tx === t.tx &&
      e.ty === t.ty &&
      t.key === `home-${e.name}`,
  );
  return n ? n.h * i6 : 0;
}
function Woe(e) {
  return e.key.startsWith(`home-`) ? s6[e.key.slice(5)]?.foot : void 0;
}
function Goe(e) {
  let t = e
      .filter((e) => e.run === `ns`)
      .sort((e, t) => e.x - t.x || e.y - t.y),
    n = [],
    r = [],
    i = () => {
      if (!r.length) return;
      let e = r[0],
        t = r[r.length - 1],
        i = Math.max(...r.map((e) => Mp(e.c))),
        a = t.y + Np(t.c) - e.y,
        o = Ap(e.c) === 1;
      (n.push({
        pieces: r,
        x: e.x,
        y: e.y,
        w: i,
        h: a,
        box: {
          x0: e.x + (o ? Voe : 0),
          x1: e.x + (o ? Hoe : i),
          y0: e.y + 6,
          y1: e.y + a,
          h: 6,
        },
      }),
        (r = []));
    };
  for (let e of t) {
    let t = r[r.length - 1];
    (t && (t.x !== e.x || e.y !== t.y + i6) && i(), r.push(e));
  }
  return (i(), n);
}
function Koe(e) {
  let t = Ap(e.pieces[0].c),
    [n, r] = M(Math.ceil(e.w * t), Math.ceil(e.h * t));
  for (let n of e.pieces)
    r.drawImage(n.c, Math.round((n.x - e.x) * t), Math.round((n.y - e.y) * t));
  return jp(n, t);
}
function qoe(e) {
  let t = e.room,
    n = t.x0 * i6,
    r = t.y0 * i6,
    i = [],
    a = [];
  for (let n of e.art.items) {
    let e = Uoe(t, n);
    e ? i.push({ it: n, depth: e, foot: Woe(n) }) : n.run !== `ns` && a.push(n);
  }
  for (let t of e.statics) t.run !== `ns` && a.push(t);
  let o = Goe([...e.art.items, ...e.statics]).map((e) => ({
      ...e.box,
      cap: `oblique`,
      tex: Koe(e),
      texX: e.x,
      texY: e.y,
    })),
    s = e.skirt;
  return {
    bounds: {
      x0: Math.min(n, s.x),
      y0: Math.min(r, s.y),
      x1: Math.max(n + t.w * i6, s.x + Mp(s.c)),
      y1: Math.max(r + t.h * i6, s.y + Np(s.c)),
    },
    floor: { x: n, y: r, frames: [e.art.base], skirt: s },
    boxes: o,
    props: a,
    solids: i,
    sun: !0,
  };
}
var c6 = new WeakMap(),
  Joe = 1;
function l6(e) {
  let t = c6.get(e);
  return (t === void 0 && c6.set(e, (t = Joe++)), t);
}
function u6(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  return (t >>> 0).toString(36);
}
function Yoe(e, t, n, r) {
  return `home:${l6(e)}:${t}:${+!!n}:${r}`;
}
var d6 = null;
function Xoe(e, t, n, r = []) {
  d6?.tiles !== t.tiles && (d6 = { tiles: t.tiles, h: u6(t.tiles) });
  let i = ``;
  for (let e of r) i += `${e.id}@${e.x0},${e.y0};`;
  return `house:${l6(e)}:${d6.h}${i ? `:${u6(i)}` : ``}${n ? `:flat` : ``}`;
}
function Zoe(e, t = !1) {
  let n = t ? 0 : e;
  return { dark: n, sun: !0, bg: a6, tint: zoe, tintA: o6, night: n };
}
function Qoe(e, t = !1) {
  return {
    dark: t ? 0 : 0.34 + e * 0.3,
    sun: !1,
    bg: a6,
    tint: Boe,
    tintA: o6,
    night: 0,
  };
}
var $oe = [`high`, `medium`, `low`, `minimal`],
  f6 = null,
  p6 = null;
function m6(e) {
  try {
    return (
      location.search !== f6 &&
        ((f6 = location.search), (p6 = new URLSearchParams(f6))),
      p6.get(e)
    );
  } catch {
    return null;
  }
}
function h6() {
  let e = m6(`renderer`);
  return e !== null && Pc.includes(e) ? e : null;
}
function g6() {
  return h6() ?? _l().renderer;
}
var _6 = null;
function ese() {
  if (_6 !== null) return _6;
  _6 = !1;
  try {
    let e = navigator;
    if (
      typeof matchMedia == `function` &&
      matchMedia(`(pointer: coarse)`).matches &&
      (e.deviceMemory ?? 8) <= 4
    )
      return _6;
    let t = document.createElement(`canvas`).getContext(`webgl2`);
    if (!t) return _6;
    let n = t.getExtension(`WEBGL_debug_renderer_info`),
      r = String(
        n
          ? t.getParameter(n.UNMASKED_RENDERER_WEBGL)
          : t.getParameter(t.RENDERER),
      );
    ((_6 = !/swiftshader|basic render|llvmpipe|softpipe|software/i.test(r)),
      t.getExtension(`WEBGL_lose_context`)?.loseContext());
  } catch {}
  return _6;
}
function v6() {
  if (m6(`fx3d`) === `0`) return !1;
  let e = g6();
  return e === `hd2d` || (e === `auto` && ese());
}
function y6() {
  let e = m6(`hdq`);
  return {
    tier: e !== null && $oe.includes(e) ? e : null,
    cal: m6(`hdcal`) === `1`,
  };
}
function tse() {
  return { off: m6(`hdspace`) === `0`, fail: null };
}
var b6 = { theta: null, fov: null, dof: null, spaceHero: !0, dgCut: null };
function nse() {
  return y6().cal ? 45 : (b6.theta ?? 35);
}
var x6 = 16;
function S6(e) {
  let t = e.w * x6;
  switch (e.name) {
    case `counter`:
      return e.arg ? null : { bx: 0, bw: t, d: 8, z: 12, rise: 6 };
    case `longtable`:
      return { bx: 0, bw: t, d: e.h * x6 - 6, z: 8, rise: 2 };
    case `trunk`:
      return e.w === 1 && e.h === 1
        ? { bx: 1, bw: 14, d: 5, z: 7, rise: 2 }
        : null;
    case `bed`:
      return e.w === 1 && e.h === 2
        ? { bx: 0, bw: t, d: 31, z: 5, rise: 6 }
        : null;
  }
  return null;
}
function rse(e, t) {
  return { w: e.w * x6 + 2, h: e.h * x6 + t + 2 };
}
