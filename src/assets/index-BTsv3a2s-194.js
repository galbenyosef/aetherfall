// index-BTsv3a2s 194 — math
// Lines 124594-124921 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var VJ = new Set([
    `house`,
    `shop`,
    `wing`,
    `keep`,
    `hall`,
    `inn`,
    `barracks`,
    `mourning`,
    `farmhouse`,
    `barn`,
    `sawmill`,
    `stable`,
    `tower`,
    `windmill`,
    `watchtower`,
    `tree`,
    `pine`,
    `border`,
    `fruitTree`,
    `deadtree`,
  ]),
  HJ = class {
    items = [];
    rows = [];
    rise = 2;
    shadows = [];
    doors = [];
    cache = new Map();
    game = Ph();
    src = new WeakMap();
    constructor() {
      let e = Vr();
      for (let e = 0; e < kr + 2; e++) this.rows.push([]);
      let t = new Map(),
        n = new Map();
      for (let e of Zr()) e.door && n.set(`${e.door.tx},${e.door.ty}`, e.id);
      let r = yA();
      for (let i of e.placements) {
        let a = r
            ? kJ(
                i,
                e.regions[i.ty * Or + i.tx],
                Math.hypot(i.tx - Mr, i.ty - Nr) < 28,
              )
            : null,
          { it: o, s } = this.item(i, a);
        if ((this.add(o), VJ.has(i.kind))) {
          let e = t.get(o.c);
          (e || ((e = Fp(o.c, `#0c0618`)), t.set(o.c, e)),
            this.shadows.push({ c: e, x: o.x + 5, y: o.y + 3 }));
        }
        if (s.door) {
          let e = Math.floor((o.x + s.door.x + 8) / 16),
            t = Math.floor((o.baseY - 1) / 16),
            r = n.get(`${e},${t}`);
          if (r) {
            let n = { room: r, tx: e, ty: t, frames: s.door.frames, open: 0 };
            (this.doors.push(n),
              this.add({
                key: `${i.key}-door`,
                kind: `door`,
                c: n.frames[0],
                x: o.x + s.door.x,
                y: o.y + s.door.y,
                baseY: o.baseY + 0.01,
                tx: e,
                ty: t,
                door: n,
                parent: o,
              }));
          }
        }
        r &&
          FJ(i, s, o.x, o.baseY).forEach((e, t) =>
            this.add({
              key: `${i.key}-front-${t}`,
              kind: `dressing`,
              c: e.c,
              x: e.x,
              y: e.y,
              baseY: o.baseY + 0.25,
              tx: i.tx,
              ty: i.ty + i.h - 1,
            }),
          );
      }
      this.buildWalls();
    }
    item(e, t) {
      let n = t?.s ?? this.sprite(e),
        r = t?.art ?? t?.name ?? e.key,
        i = Yp(`scenery`, r),
        a = n,
        o = t?.frames,
        s = t?.fps;
      if (i) {
        let e = Xp(i, `loop`, `idle`),
          r = t?.flip ? e.flipped : e.frames;
        ((a = {
          ...n,
          c: r[0],
          ax: t?.flip ? i.meta.fw - 1 - i.meta.ax : i.meta.ax,
          ay: i.meta.ay,
          fold: void 0,
        }),
          (o = r.length > 1 ? r : void 0),
          (s = e.fps));
      }
      let c = this.place(e, a);
      return (
        (c.art = r),
        o && ((c.frames = o), (c.fps = s)),
        t?.glow && (c.glow = t.glow),
        this.src.set(c, { p: e, st: t }),
        { it: c, s: n }
      );
    }
    sourceOf(e) {
      return this.src.get(e) ?? null;
    }
    ownSprite(e) {
      return this.sprite(e);
    }
    repaint(e) {
      for (let t of this.items) {
        if (t.art !== e) continue;
        let n = this.src.get(t);
        if (!n) continue;
        let r = this.item(n.p, n.st).it;
        ((t.c = r.c),
          (t.x = r.x),
          (t.y = r.y),
          (t.frames = r.frames),
          (t.fps = r.fps),
          (t.fold = r.fold),
          (this.rise = Math.max(
            this.rise,
            Math.ceil((t.baseY - t.y) / 16) + 1,
          )));
      }
    }
    add(e) {
      let t = Math.max(
        0,
        Math.min(this.rows.length - 1, Math.floor(e.baseY / 16)),
      );
      (this.rows[t].push(e),
        (this.rise = Math.max(this.rise, Math.ceil((e.baseY - e.y) / 16) + 1)),
        this.items.push(e));
    }
    sprite(e) {
      let t = this.cache.get(e.key);
      if (t) return t;
      let n,
        r = e.ref;
      switch (r.t) {
        case `game`: {
          let e = this.game[r.key],
            t = e[r.v % e.length];
          n = { c: t.c, ax: t.ax, ay: t.ay };
          break;
        }
        case `building`:
          n = UA(r.opts);
          break;
        case `landmark`:
          n = IM[r.name](r.arg);
          break;
        case `prop`: {
          let e = $M[r.name];
          n = Array.isArray(r.arg) ? e(...r.arg) : e(r.arg);
          break;
        }
        case `tower`: {
          let e = { ...r.opts };
          (typeof e.roof == `string` && (e.roof = it[e.roof]), (n = XA(e)));
          break;
        }
      }
      return (this.cache.set(e.key, n), n);
    }
    place(e, t) {
      let n = {
        key: e.key,
        kind: e.kind,
        gameKey: e.ref.t === `game` ? e.ref.key : void 0,
        c: t.c,
        tx: e.tx,
        ty: e.ty,
        lights: t.lights,
        fold: t.fold,
      };
      if (e.mode === `rect`) {
        let r = (e.ty + e.h) * 16,
          i = e.tx * 16 + Math.round((e.w * 16 - Mp(t.c)) / 2);
        return { ...n, x: i, y: r - t.ay, baseY: r };
      }
      if (e.mode === `tower`) {
        let r = e.tx * 16 + (e.w * 16) / 2,
          i = (e.ty + e.h) * 16;
        return { ...n, x: Math.round(r - t.ax), y: i - t.ay, baseY: i };
      }
      let r = e.tx * 16 + 8,
        i = e.ty * 16 + 14;
      return { ...n, x: r - t.ax, y: i - t.ay, baseY: i };
    }
    buildWalls() {
      let e = Vr().walls,
        t = 0;
      for (let n = 0; n < e.h.length; n++) t = Math.max(t, e.h[n]);
      let n = 16 + t + 8,
        r = Or * 16,
        i = zJ() ? 2 : 1,
        [a, o] = M(r, n),
        [s, c] = i === 1 ? [a, o] : M(r * i, n * i);
      for (let t = 0; t < kr; t++) {
        let l = [];
        for (let n = 0; n < Or; n++)
          e.h[t * Or + n] &&
            (l.length && l[l.length - 1][1] === n - 1
              ? (l[l.length - 1][1] = n)
              : l.push([n, n]));
        if (!l.length) continue;
        let u = Math.max(0, l[0][0] * 16 - 10),
          d = Math.min(r, (l[l.length - 1][1] + 1) * 16 + 10),
          f = (t + 1) * 16 - n + 3;
        (o.clearRect(u, 0, d - u, n),
          JA(o, e, t, 0, f),
          i > 1 &&
            (c.clearRect(u * i, 0, (d - u) * i, n * i),
            c.drawImage(a, u, 0, d - u, n, u * i, 0, (d - u) * i, n * i),
            BJ(c, e, t, f)),
          l.forEach(([e, a], o) => {
            let c = o > 0 ? l[o - 1][1] : -99,
              u = o < l.length - 1 ? l[o + 1][0] : 999,
              d = Math.max(
                0,
                e * 16 - Math.min(10, Math.floor(((e - c - 1) * 16) / 2)),
              ),
              p = Math.min(
                r,
                (a + 1) * 16 + Math.min(10, Math.floor(((u - a - 1) * 16) / 2)),
              ),
              [m, h] = M((p - d) * i, n * i);
            (h.drawImage(
              s,
              d * i,
              0,
              (p - d) * i,
              n * i,
              0,
              0,
              (p - d) * i,
              n * i,
            ),
              this.add({
                key: `wall-${t}-${e}`,
                kind: `wall`,
                c: jp(m, i),
                x: d,
                y: f,
                baseY: (t + 1) * 16 - 0.5,
                tx: e,
                ty: t,
                wall: !0,
              }));
          }));
      }
    }
    collect(e, t, n, r, i) {
      i.length = 0;
      let a = Math.max(0, Math.floor(t / 16) - 1),
        o = Math.min(
          this.rows.length - 1,
          Math.floor((t + r) / 16) + this.rise + 1,
        );
      for (let s = a; s <= o; s++)
        for (let a of this.rows[s])
          a.x > e + n ||
            a.x + Mp(a.c) < e ||
            a.y > t + r ||
            a.y + Np(a.c) < t ||
            i.push(a);
      return i;
    }
  };
function UJ(e, t) {
  if (
    !t.loaded ||
    (e.minLevel !== void 0 && t.level < e.minLevel) ||
    (e.maxLevel !== void 0 && t.level > e.maxLevel)
  )
    return !1;
  for (let n of e.after ?? []) if (t.rows.get(n)?.status !== `done`) return !1;
  if (e.during) {
    let n = t.rows.get(e.during.quest);
    if (n?.status !== `active` || n.step !== e.during.step) return !1;
  }
  return e.before === void 0 || !t.rows.has(e.before);
}
function WJ(e, t, n) {
  return t < Or && Math.hypot(t - e.x, n - e.y) <= e.r;
}
var GJ = 16,
  KJ = {
    checkEvery: 0.25,
    quiet: 3,
    retry: 60,
    seenCap: 256,
    swapNear: 0.5,
    stageFade: 0.3,
    backOut: 0.3,
    backIn: 0.4,
    anchorReach: 12,
    rMin: 1,
    rMax: 16,
    rNew: 6,
    phoneW: 240,
    zoomMin: 0.4,
    zoomMax: 2,
    bars: 0.12,
    headRoom: 2.5,
    footRoom: 0.5,
    sideRoom: 1,
    nearWide: 1.1,
    talk: 0.32,
  };
