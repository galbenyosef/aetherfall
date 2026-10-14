// hd2d-FOjpdF4f 10 — math
// Lines 3388-3732 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
var vi = class {
  atlas;
  o;
  root = new F();
  chunks = [];
  mats = [];
  base = null;
  constructor(n, r, i) {
    ((this.atlas = r), (this.o = i), (this.root.name = `hd2d-props`));
    let a = new Map(),
      o = (e, t, n) => {
        let r = Math.max(0, Math.floor(e / 512)),
          i = Math.max(0, Math.floor(t / 512)),
          o = (n * 64 + i) * 64 + r,
          s = a.get(o);
        return (
          s ||
            ((s = {
              cx: r,
              cy: i,
              page: n,
              n: 0,
              foot: new Float32Array(),
              rect: new Float32Array(),
              box: new Float32Array(),
              anim: [],
              bob: [],
              b: [1 / 0, 1 / 0, -1 / 0, -1 / 0, 0],
              mesh: null,
              edge: null,
              geo: null,
            }),
            a.set(o, s),
            this.chunks.push(s)),
          s
        );
      },
      s = [];
    for (let e of n) {
      let t = e.frames ? r.frames(e.frames) : [r.rect(e.c)],
        n = o(e.x + m(e.c) / 2, e.baseY, t[0].page);
      (n.n++, s.push({ it: e, ch: n, rects: t }));
    }
    for (let e of this.chunks)
      ((e.foot = new Float32Array(e.n * 4)),
        (e.rect = new Float32Array(e.n * 4)),
        (e.box = new Float32Array(e.n * 4)),
        (e.n = 0));
    for (let { it: n, ch: i, rects: a } of s) {
      let o = i.n++,
        { w: s, h: c } = r.size(a[0].page),
        { lift: l, up: u } = _i(i, o, n, a[0], s, c),
        d = t(n.c);
      (a.length > 1 &&
        i.anim.push({
          i: o,
          rects: a,
          fps: n.fps ?? 8,
          phase: e(n.tx, n.ty, 5) * a.length,
          shown: 0,
          up: u,
          dens: d,
        }),
        n.gameKey === `crystal` && i.bob.push(o, l));
      let f = i.b,
        p = Math.max(...a.map((e) => e.h)) / d;
      ((f[0] = Math.min(f[0], n.x)),
        (f[1] = Math.min(f[1], n.y)),
        (f[2] = Math.max(f[2], n.x + Math.max(...a.map((e) => e.w)) / d)),
        (f[3] = Math.max(f[3], n.y + p)),
        (f[4] = Math.max(f[4], l + p + 2)));
    }
  }
  get instances() {
    return this.chunks.reduce((e, t) => e + t.n, 0);
  }
  buildGpu() {
    (this.disposeGpu(),
      (this.base = createQuadGeometry()),
      (this.mats = this.atlas.textures.map((e) => {
        let t = {
          map: e,
          lit: this.o.lit,
          instanced: !0,
          texelLock: !1,
          occl: !0,
          cam: this.o.cam,
        };
        return [
          Lt({ ...t, pass: `cut` }),
          Lt({ ...t, pass: `shadow` }),
          Lt({ ...t, pass: `fringe`, soft: !1 }),
        ];
      })));
    for (let e of this.chunks) {
      let t = new Le();
      (t.setAttribute(`position`, this.base.getAttribute(`position`)),
        t.setIndex(this.base.getIndex()));
      let n = (e, n, r) => {
        let i = new we(n, 4);
        (r && i.setUsage(G), t.setAttribute(e, i));
      };
      (n(ATTRIB.foot, e.foot, e.bob.length > 0),
        n(ATTRIB.rect, e.rect, e.anim.length > 0),
        n(ATTRIB.box, e.box, e.anim.length > 0),
        (t.instanceCount = e.n));
      let [r, i, a, o, s] = e.b;
      ((t.boundingBox = new Re(new V(r, i, 0), new V(a, o, s))),
        (t.boundingSphere = t.boundingBox.getBoundingSphere(new Te())));
      let [c, l, u] = this.mats[e.page],
        d = new I(t, c);
      ((d.customDepthMaterial = l),
        (d.customDistanceMaterial = l),
        (d.frustumCulled = !1),
        (d.matrixAutoUpdate = !1),
        (d.name = `hd2d-props-${e.cx}-${e.cy}-${e.page}`));
      let f = new I(t, u);
      ((f.frustumCulled = !1),
        (f.matrixAutoUpdate = !1),
        (f.renderOrder = 49),
        (f.name = `${d.name}-edge`),
        (e.geo = t),
        (e.mesh = d),
        (e.edge = f),
        this.root.add(d, f));
    }
  }
  update(e, t) {
    let n = Math.round(Math.sin(e * 1.5) * 1.5);
    for (let r of this.chunks) {
      let i = r.mesh;
      if (!i || !r.geo) continue;
      let [a, o, s, c, l] = r.b;
      if (
        ((i.visible = t(a, o, s, c, l)),
        r.edge && (r.edge.visible = i.visible),
        i.visible)
      ) {
        if (r.anim.length) {
          let t = !1;
          for (let n of r.anim) {
            let i = n.rects.length,
              a = ((Math.floor(e * n.fps + n.phase) % i) + i) % i;
            if (a === n.shown) continue;
            n.shown = a;
            let o = n.rects[a],
              { w: s, h: c } = this.atlas.size(o.page);
            r.rect.set(
              [o.x / s, o.y / c, (o.x + o.w) / s, (o.y + o.h) / c],
              n.i * 4,
            );
            let l = o.w / n.dens,
              u = o.h / n.dens,
              d = Math.min(n.up, u);
            (r.box.set([l / 2, d, u - d, 1], n.i * 4), (t = !0));
          }
          t &&
            ((r.geo.getAttribute(ATTRIB.rect).needsUpdate = !0),
            (r.geo.getAttribute(ATTRIB.box).needsUpdate = !0));
        }
        if (r.bob.length) {
          for (let e = 0; e < r.bob.length; e += 2)
            r.foot[r.bob[e] * 4 + 2] = r.bob[e + 1] - n;
          r.geo.getAttribute(ATTRIB.foot).needsUpdate = !0;
        }
      }
    }
  }
  meshes(e, t) {
    for (let n of this.chunks)
      n.mesh && e(n.b[0], n.b[1], n.b[2], n.b[3]) && t.push(n.mesh);
  }
  disposeGpu() {
    for (let e of this.chunks)
      (e.mesh && this.root.remove(e.mesh),
        e.edge && this.root.remove(e.edge),
        e.geo?.dispose(),
        (e.mesh = null),
        (e.edge = null),
        (e.geo = null));
    for (let e of this.mats) for (let t of e) t.dispose();
    ((this.mats = []), this.base?.dispose(), (this.base = null));
  }
};
function yi(e, n, r, i = x().walls, a) {
  let o = i.n,
    s = (e, t) => (e < 0 || t < 0 || e >= o || t >= o ? 0 : i.h[t * o + e]),
    l = [];
  for (let t of e) (l[t.ty] ??= []).push(t);
  for (let e of l) e?.sort((e, t) => e.x - t.x);
  let u = (e, t) =>
    l[t]?.find((t) => t.x <= e * 16 && e * 16 + 16 <= t.x + m(t.c));
  for (let e = 0; e < Math.min(o, c); e++)
    for (let c = 0; c < Math.min(o, y); c++) {
      let l = s(c, e);
      if (!l || a?.(c, e)) continue;
      let f = u(c, e);
      if (!f) continue;
      let m = n.rect(f.c),
        h = r.at(c * 16 + 8, e * 16 + 8, m.page),
        g = s(c, e - 1),
        _ = s(c, e + 1),
        v = s(c - 1, e),
        y = s(c + 1, e),
        b = i.flag[e * o + c],
        x = c * 16,
        S = x + 16,
        C = e * 16,
        w = C + 16,
        T = t(f.c),
        E = {
          x0: f.x,
          y0: f.y,
          ax: m.x,
          ay: m.y,
          aw: m.w,
          ah: m.h,
          baseY: f.baseY,
          height: p(f.c),
          dens: T,
        },
        D = { ...E, x0: f.x - 0.5 / T, shade: vr },
        O = { ...E, x0: f.x + 0.5 / T, shade: vr },
        k = g < l,
        ee = v < l,
        A = y < l,
        te = x - +!!ee,
        ne = S + +!!A,
        re = C - +!!k;
      if (
        (h.face(
          [
            [te, re, l],
            [ne, re, l],
            [ne, w, l],
            [te, w, l],
          ],
          [0, 0, 1],
          E,
        ),
        _ < l)
      ) {
        let t = (e, t) => s(e, t) > 0 && s(e, t + 1) < s(e, t),
          n = +(!t(c - 1, e) || v < l),
          r = +(!t(c + 1, e) || y < l);
        h.face(
          [
            [x - n, w, _],
            [S + r, w, _],
            [S + r, w, l],
            [x - n, w, l],
          ],
          [0, 1, 0],
          E,
        );
      }
      let ie = (e) => (b & d.SPAN ? Math.max(e, l - 13) : e);
      (g < l &&
        h.face(
          [
            [x, C, ie(g)],
            [S, C, ie(g)],
            [S, C, l],
            [x, C, l],
          ],
          [0, -1, 0],
          E,
        ),
        v < l &&
          h.face(
            [
              [x, C, ie(v)],
              [x, w, ie(v)],
              [x, w, l],
              [x, C, l],
            ],
            [-1, 0, 0],
            D,
          ),
        y < l &&
          h.face(
            [
              [S, C, ie(y)],
              [S, w, ie(y)],
              [S, w, l],
              [S, C, l],
            ],
            [1, 0, 0],
            O,
          ));
    }
}
var bi = (e, n, r = {}) => ({
    x0: e.x,
    y0: e.y,
    ax: n.x,
    ay: n.y,
    aw: n.w,
    ah: n.h,
    baseY: e.baseY,
    height: e.c.height,
    dens: Si.get(e.c) ?? t(e.c),
    ...r,
  }),
  xi = new WeakMap(),
  Si = new WeakMap();
function Ci(e) {
  let n = t(e);
  if (n === 1) return e;
  let r = xi.get(e);
  if (!r) {
    let [t, i] = h(Math.round(m(e)), Math.round(p(e)));
    (i.drawImage(e, 0, 0, t.width, t.height),
      (r = t),
      xi.set(e, r),
      Si.set(r, n));
  }
  return r;
}
function wi(e) {
  let t = Ci(e.c);
  return t === e.c ? e : { ...e, c: t };
}
var Ti = class {
  cache = new WeakMap();
  of(e) {
    let t = this.cache.get(e);
    if (!t) {
      let n =
        e.width && e.height
          ? e.getContext(`2d`).getImageData(0, 0, e.width, e.height).data
          : new Uint8ClampedArray();
      t = new Uint8ClampedArray(e.width * e.height);
      for (let e = 0; e < t.length; e++) t[e] = n[e * 4 + 3];
      this.cache.set(e, t);
    }
    return t;
  }
};
function Ei(e, t, n) {
  let r = -1,
    i = -1;
  for (let a = 0; a < t; a++) e[n * t + a] < 128 || (r < 0 && (r = a), (i = a));
  return r < 0 ? null : [r, i];
}
