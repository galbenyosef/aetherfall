// hd2d-FOjpdF4f 24 — dispose
// Lines 7653-7978 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
var es = class {
    pass;
    rt = null;
    cams = at.map(() => {
      let e = new Ve(90, 1, 1, 100);
      return (
        (e.matrixAutoUpdate = !1),
        (e.matrixWorldAutoUpdate = !1),
        e.layers.set(Vo),
        e
      );
    });
    sphere = new Te();
    basis = at.map((e) => [
      new V(...e.right),
      new V(...e.up),
      new V(-e.fwd[0], -e.fwd[1], -e.fwd[2]),
    ]);
    pos = new V();
    list = [];
    far = 1;
    size = 1;
    r = null;
    stats = { casters: 0 };
    constructor(e) {
      this.pass = e;
    }
    keep = (e) => {
      let t = $o(e);
      return (
        !t ||
        (e.updateWorldMatrix(!0, !1),
        this.sphere.copy(t).applyMatrix4(e.matrixWorld),
        this.sphere.distanceToPoint(this.pos) < this.far)
      );
    };
    draw = (e) => {
      let t = this.rt,
        n = this.r,
        r = this.size,
        i = this.list;
      for (let t of e) i.push(t);
      for (let e = 0; e < 6; e++)
        (t.viewport.set((e % 3) * r, Math.floor(e / 3) * r, r, r),
          n.setRenderTarget(t),
          Zo(n, i, this.cams[e]));
      (t.viewport.set(0, 0, r * 3, r * 2), (i.length = 0));
    };
    render(e, t, n, r, i) {
      if (n <= 0) return (this.off(i), !1);
      (!this.rt || this.rt.height !== n * 2) &&
        (this.rt?.dispose(), (this.rt = qo(n * 3, n * 2)));
      let a = Math.min(Bo, Math.max(zo, t.rad * Ro)),
        o = this.pos.set(t.x, t.y, t.z);
      for (let e = 0; e < 6; e++) {
        let t = this.cams[e],
          n = this.basis[e];
        (t.matrixWorld.makeBasis(n[0], n[1], n[2]).setPosition(o),
          t.matrix.copy(t.matrixWorld),
          t.matrixWorldInverse.copy(t.matrixWorld).invert(),
          (t.near = 1),
          (t.far = a),
          t.projectionMatrix.makePerspective(-1, 1, 1, -1, 1, a),
          t.projectionMatrixInverse.copy(t.projectionMatrix).invert());
      }
      let s = this.rt;
      (e.setRenderTarget(s),
        e.clear(!1, !0, !1),
        (this.far = a),
        (this.size = n),
        (this.r = e));
      try {
        this.pass.run(r, this.keep, this.draw);
      } finally {
        this.r = null;
      }
      return (
        (this.stats.casters = this.pass.count),
        this.pass.count === 0
          ? (this.off(i), !1)
          : ((i.uHero.value = s.depthTexture),
            (i.uHeroFar.value = a),
            (i.uHeroOn.value = 1),
            !0)
      );
    }
    off(e) {
      ((e.uHeroOn.value = 0), (e.uHero.value = getShadowDepthTexture()));
    }
    dispose() {
      (this.rt?.dispose(), (this.rt = null));
    }
  },
  ts = class {
    fallback = Yo();
    pass = new Xo(this.fallback);
    sun;
    heroMap;
    warned = !1;
    parts = [];
    gathered = !1;
    statics = [];
    dynamics = [];
    all = [];
    gather = () => {
      if (!this.gathered) {
        this.gathered = !0;
        for (let e of this.parts)
          for (let t of e.casters(`static`)) this.statics.push(t);
      }
      return this.statics;
    };
    constructor(e) {
      ((this.sun = new Qo(this.pass, e)), (this.heroMap = new es(this.pass)));
    }
    render(e, t, n, r, i = [], a = {}) {
      let o = n.lit;
      if (e.capabilities.reversedDepthBuffer) {
        (this.warned ||
          console.warn(`HD-2D shadows off: reversed depth buffer`),
          (this.warned = !0),
          (o.uShadowOn.value = 0),
          this.heroMap.off(o));
        return;
      }
      let s = this.dynamics;
      ((this.parts = t), (this.gathered = !1));
      for (let e of t) for (let t of e.casters(`dynamic`)) s.push(t);
      for (let e of i) s.push(e);
      let c = e.getRenderTarget(),
        l = e.autoClear;
      e.autoClear = !1;
      try {
        let t = a.sun !== !1;
        if (
          (this.sun.render(
            e,
            n.f.fp,
            n.cam.focus,
            t ? n.spec.sunStatic : 0,
            t ? n.spec.sunDynamic : 0,
            this.gather,
            s,
            o,
            a.box ?? null,
          ),
          r && n.spec.hero > 0)
        ) {
          let t = this.all;
          for (let e of this.gather()) t.push(e);
          for (let e of s) t.push(e);
          this.heroMap.render(e, r, n.spec.hero, t, o);
        } else this.heroMap.off(o);
      } finally {
        ((this.parts = []),
          (this.statics.length = 0),
          (this.dynamics.length = 0),
          (this.all.length = 0),
          (e.autoClear = l),
          e.setRenderTarget(c));
      }
    }
    invalidate() {
      this.sun.invalidate();
    }
    rebuild() {
      (this.sun.dispose(), this.heroMap.dispose());
    }
    dispose() {
      (this.sun.dispose(), this.heroMap.dispose(), this.fallback.dispose());
    }
  },
  ns = `#2a2236`,
  rs = 16,
  is = 22,
  as = 0.54,
  os = 3,
  ss = 2,
  cs = new WeakMap();
function ls(e, t = `relief`) {
  let n = cs.get(e);
  n || cs.set(e, (n = {}));
  let r = n[t];
  if (r) return r;
  let i = e.w,
    a = e.h,
    s = (t, n) =>
      t < 0 || n < 0 || t >= i || n >= a ? o.VOID : e.tiles[n * i + t],
    c = (e, t) => {
      let n = s(e, t);
      return n === o.WALL || n === o.VOID;
    },
    l = new Uint8Array(i * a);
  for (let e = 0; e < a; e++)
    for (let t = 0; t < i; t++) {
      if (!c(t, e)) continue;
      let n = 0;
      for (; n < os && c(t, e - 1 - n);) n++;
      l[e * i + t] = n;
    }
  let u = (e, t) => (e < 0 || e >= i ? os : l[t * i + e]),
    d = fs(e, s),
    p = new Uint8Array(i * a);
  for (let e = 0; e < a; e++)
    for (let n = 0; n < i; n++) {
      let r = e * i + n;
      if (!c(n, e) || d[r] > ss) continue;
      if (t === `all22`) {
        p[r] = is;
        continue;
      }
      let a = l[r];
      (c(n - 1, e) && (a = Math.min(a, u(n - 1, e))),
        c(n + 1, e) && (a = Math.min(a, u(n + 1, e))),
        (p[r] = Math.min(is, Math.floor(a * rs * as))));
    }
  t === `relief` && us(i, a, p, c);
  let m = new Uint8Array(i * a);
  for (let e = 0; e < a; e++)
    for (let t = 0; t < i; t++) {
      let n = e * i + t,
        r = p[n];
      if (!r) continue;
      let l = e + 1 < a && c(t, e + 1) ? p[n + i] : 0,
        u = s(t, e) === o.WALL && f(s(t, e + 1), !0);
      l < r && !u && (m[n] = 1);
    }
  let h = { w: i, h: a, cut: t, hgt: p, section: m };
  return ((n[t] = h), h);
}
function us(e, t, n, r) {
  let i = n.slice(),
    a = (t, n) => (t < 0 || t >= e ? 0 : i[n * e + t]);
  for (let o = 0; o < t; o++)
    for (let t = 0; t < e; t++) {
      let s = i[o * e + t];
      if (!s || (t > 0 && r(t - 1, o) && a(t - 1, o) === s)) continue;
      let c = t;
      for (; c + 1 < e && c - t < 2 && a(c + 1, o) === s && r(c + 1, o);) c++;
      if (c - t >= 2 || !r(t - 1, o) || !r(c + 1, o)) continue;
      let l = Math.max(a(t - 1, o), a(c + 1, o));
      if (!(l >= s)) for (let r = t; r <= c; r++) n[o * e + r] = l;
    }
}
function ds(e, t, n, r = `relief`) {
  return t < 0 || n < 0 || t >= e.w || n >= e.h ? 0 : ls(e, r).hgt[n * e.w + t];
}
function fs(e, t) {
  let n = e.w,
    r = e.h,
    i = new Uint8Array(n * r).fill(3),
    a = [];
  for (let e = 0; e < r; e++)
    for (let r = 0; r < n; r++)
      f(t(r, e), !0) && ((i[e * n + r] = 0), a.push(e * n + r));
  for (let e = 0; e < a.length; e++) {
    let t = a[e],
      o = t % n,
      s = (t - o) / n;
    if (!(i[t] >= ss))
      for (let e = -1; e <= 1; e++)
        for (let c = -1; c <= 1; c++) {
          let l = o + c,
            u = s + e;
          if (l < 0 || u < 0 || l >= n || u >= r) continue;
          let d = u * n + l;
          i[d] > i[t] + 1 && ((i[d] = i[t] + 1), a.push(d));
        }
  }
  return i;
}
function ps(e) {
  let t = 2166136261;
  for (let n = 0; n < e.tiles.length; n++)
    t = Math.imul(t ^ e.tiles[n], 16777619);
  return (t >>> 0).toString(36);
}
function ms(e, t = `relief`) {
  return `dg:${e.dungeon}:${e.index}:${e.theme}:${e.seed}:${e.w}x${e.h}:${ps(e)}:${t}`;
}
function hs(e) {
  return e.ready ? e.ground : [e.ground[0], null, null, null];
}
function gs(e) {
  if (!v[e.theme].fog?.low) return null;
  let t = new Uint8Array(e.w * e.h);
  for (let n = 0; n < t.length; n++) f(e.tiles[n], !0) && (t[n] = 255);
  return t;
}
function _s(e) {
  let t = v[e.theme].fog;
  if (t)
    return {
      tex: r(t.color, t.scale),
      color: t.color,
      alpha: t.alpha,
      speed: t.speed,
      mask: gs(e),
      cols: e.w,
      rows: e.h,
    };
}
function vs(e) {
  if (!v[e.theme].haze) return null;
  let t = new Uint8Array(e.w * e.h),
    n = !1;
  for (let r = 0; r < t.length; r++)
    e.tiles[r] === o.DEEP && ((t[r] = 255), (n = !0));
  return n ? t : null;
}
function ys(e, t) {
  let n = new Uint8Array(e.w * e.h);
  for (let r = 0; r < n.length; r++) {
    let i = e.tiles[r];
    n[r] = i !== o.WALL && i !== o.VOID ? 0 : t.hgt[r] ? 1 : 3;
  }
  return {
    x0: 0,
    y0: 0,
    cols: e.w,
    rows: e.h,
    h: t.hgt,
    cap: n,
    section: t.section,
  };
}
