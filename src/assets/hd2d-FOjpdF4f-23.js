// hd2d-FOjpdF4f 23 — math
// Lines 7370-7652 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
function Ho(e = { x: nt[0], y: nt[1], z: nt[2] }) {
  let t = new V(e.x, e.y, e.z).normalize(),
    n = new V(t.y, -t.x, 0);
  return (
    n.lengthSq() < 1e-8 && n.set(1, 0, 0),
    n.normalize(),
    { right: n, up: new V().crossVectors(t, n).normalize(), back: t }
  );
}
function Uo(e, t, n, r, i = 256, a = 288) {
  let o = e.gx0 - i,
    s = e.gy0 - i,
    c = e.gx0 + e.fw + i,
    l = e.gy0 + e.fh + i,
    u = 1 / 0,
    d = -1 / 0,
    f = 1 / 0,
    p = -1 / 0,
    m = 1 / 0,
    h = -1 / 0;
  for (let e = 0; e < 8; e++) {
    let t = e & 1 ? c : o,
      r = e & 2 ? l : s,
      i = e & 4 ? a : 0,
      g = t * n.right.x + r * n.right.y + i * n.right.z,
      _ = t * n.up.x + r * n.up.y + i * n.up.z,
      v = t * n.back.x + r * n.back.y + i * n.back.z;
    ((u = Math.min(u, g)),
      (d = Math.max(d, g)),
      (f = Math.min(f, _)),
      (p = Math.max(p, _)),
      (m = Math.min(m, v)),
      (h = Math.max(h, v)));
  }
  let g = Math.ceil(Math.max(d - u, p - f) / Fo + 0.05) * Fo,
    _ = g,
    v = g / r;
  return {
    cx: Math.round((u + d) / 2 / v) * v,
    cy: Math.round((f + p) / 2 / v) * v,
    w: g,
    h: _,
    top: h + 16,
    near: 8,
    far: h - m + 32,
    x0: o,
    y0: s,
    x1: c,
    y1: l,
    fx: t.x,
    fy: t.y,
    snap: v,
  };
}
function Wo(e, t, n, r = 256) {
  return (
    !e ||
    Math.abs(n.x - e.fx) > r / 2 ||
    Math.abs(n.y - e.fy) > r / 2 ||
    t.gx0 < e.x0 ||
    t.gy0 < e.y0 ||
    t.gx0 + t.fw > e.x1 ||
    t.gy0 + t.fh > e.y1
  );
}
function Go(e, t, n = new Ae()) {
  ((n.matrixAutoUpdate = !1), (n.matrixWorldAutoUpdate = !1));
  let r = new V()
    .addScaledVector(t.right, e.cx)
    .addScaledVector(t.up, e.cy)
    .addScaledVector(t.back, e.top);
  return (
    n.matrixWorld.makeBasis(t.right, t.up, t.back).setPosition(r),
    n.matrix.copy(n.matrixWorld),
    n.matrixWorldInverse.copy(n.matrixWorld).invert(),
    (n.left = -e.w / 2),
    (n.right = e.w / 2),
    (n.top = e.h / 2),
    (n.bottom = -e.h / 2),
    (n.near = e.near),
    (n.far = e.far),
    n.projectionMatrix.makeOrthographic(
      n.left,
      n.right,
      n.top,
      n.bottom,
      n.near,
      n.far,
    ),
    n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),
    n
  );
}
function Ko(e, t, n = new N()) {
  let r = t / (e.far - e.near);
  return (
    n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5 - r, 0, 0, 0, 1),
    n.multiply(e.projectionMatrix).multiply(e.matrixWorldInverse)
  );
}
function qo(e, t) {
  let n = new Ye(e, t, be);
  return (
    (n.format = Ke),
    (n.compareFunction = 515),
    (n.minFilter = M),
    (n.magFilter = M),
    new Ce(e, t, {
      format: Ie,
      type: Se,
      minFilter: R,
      magFilter: R,
      generateMipmaps: !1,
      depthBuffer: !0,
      depthTexture: n,
    })
  );
}
var Jo = `
void main() {
  vec4 p = vec4(position, 1.0);
#ifdef USE_INSTANCING
  p = instanceMatrix * p;
#endif
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * p;
}
`;
function Yo() {
  return new Xe({
    vertexShader: Jo,
    fragmentShader: `void main() {}`,
    side: 2,
    colorWrite: !1,
  });
}
var Xo = class {
  fallback;
  mats = [];
  shown = [];
  roots = new Set();
  seen = new Set();
  count = 0;
  constructor(e) {
    this.fallback = e;
  }
  run(e, t, n) {
    this.count = 0;
    try {
      for (let n of e) this.tag(n, t);
      this.count > 0 && n(this.roots);
    } finally {
      for (let [e, t] of this.mats) ((e.material = t), e.layers.disable(Vo));
      for (let e of this.shown) e.visible = !1;
      ((this.mats.length = 0),
        (this.shown.length = 0),
        this.roots.clear(),
        this.seen.clear());
    }
  }
  tag(e, t) {
    if (this.seen.has(e)) return;
    if ((this.seen.add(e), e.isScene)) {
      for (let n of e.children) n.visible && this.tag(n, t);
      return;
    }
    let n = this.count,
      r = (e) => {
        let n = e;
        n.isMesh &&
          !n.layers.isEnabled(Vo) &&
          (!t || t(n)) &&
          (this.mats.push([n, n.material]),
          (n.material = n.customDepthMaterial ?? this.fallback),
          n.layers.enable(Vo),
          this.count++);
        for (let t of e.children) t.visible && r(t);
      };
    if ((r(e), this.count === n)) return;
    let i = e,
      a = e;
    for (; i && !i.isScene;)
      (i.visible || this.show(i), (a = i), (i = i.parent));
    this.roots.add(a);
  }
  show(e) {
    ((e.visible = !0), this.shown.push(e));
  }
};
function Zo(e, t, n) {
  for (let r of t) e.render(r, n);
}
var Qo = class {
  pass;
  basis;
  cam = new Ae();
  box = null;
  stats = {
    staticRenders: 0,
    staticCasters: 0,
    dynamicCasters: 0,
    lastAt: { x: 0, y: 0 },
  };
  stat = null;
  dyn = null;
  art = -1;
  stale = !0;
  fixedKey = ``;
  mat = new N();
  constructor(e, t) {
    ((this.pass = e), this.cam.layers.set(Vo), (this.basis = Ho(t)));
  }
  invalidate() {
    this.stale = !0;
  }
  render(e, t, n, r, i, o, s, c, l = null) {
    if (
      ((this.stat = this.fit(this.stat, r)),
      (this.dyn = this.fit(this.dyn, i)),
      !this.stat && !this.dyn)
    ) {
      ((c.uShadowOn.value = 0),
        (c.uSunStatic.value = getShadowDepthTexture()),
        (c.uSunDynamic.value = getShadowDepthTexture()),
        (this.box = null));
      return;
    }
    let u = a();
    u !== this.art && ((this.art = u), (this.stale = !0));
    let d = Math.min(r || 1 / 0, i || 1 / 0),
      f = l ? `${l.x0},${l.y0},${l.x1},${l.y1}` : ``;
    (f !== this.fixedKey && ((this.fixedKey = f), (this.stale = !0)),
      (this.stale || (!l && Wo(this.box, t, n))) &&
        ((this.box = l
          ? Uo(
              { gx0: l.x0, gy0: l.y0, fw: l.x1 - l.x0, fh: l.y1 - l.y0 },
              { x: (l.x0 + l.x1) / 2, y: (l.y0 + l.y1) / 2 },
              this.basis,
              d,
              0,
            )
          : Uo(t, n, this.basis, d)),
        Go(this.box, this.basis, this.cam),
        Ko(this.cam, Io + Lo * this.box.snap, this.mat),
        this.stat &&
          (this.drawInto(e, this.stat, o()),
          (this.stats.staticCasters = this.pass.count),
          this.stats.staticRenders++,
          (this.stats.lastAt = { x: n.x, y: n.y })),
        (this.stale = !1)),
      this.dyn &&
        (this.drawInto(e, this.dyn, s),
        (this.stats.dynamicCasters = this.pass.count)),
      c.uSunMat.value.copy(this.mat),
      (c.uSunStatic.value = this.stat?.depthTexture ?? getShadowDepthTexture()),
      (c.uSunDynamic.value = this.dyn?.depthTexture ?? getShadowDepthTexture()),
      c.uSunTexel.value.set(this.stat ? 1 / r : 1, this.dyn ? 1 / i : 1),
      (c.uShadowOn.value = +!!this.stat + (this.dyn ? 2 : 0)));
  }
  drawInto(e, t, n) {
    (e.setRenderTarget(t),
      e.clear(!1, !0, !1),
      this.pass.run(n, null, (t) => Zo(e, t, this.cam)));
  }
  fit(e, t) {
    return (e ? e.width === t : t <= 0)
      ? e
      : (e?.dispose(), (this.stale = !0), t > 0 ? qo(t, t) : null);
  }
  dispose() {
    (this.stat?.dispose(),
      this.dyn?.dispose(),
      (this.stat = this.dyn = null),
      (this.box = null),
      (this.stale = !0));
  }
};
function $o(e) {
  let t = e;
  return t.isInstancedMesh
    ? (t.boundingSphere || t.computeBoundingSphere(), t.boundingSphere)
    : (e.geometry.boundingSphere || e.geometry.computeBoundingSphere(),
      e.geometry.boundingSphere);
}
