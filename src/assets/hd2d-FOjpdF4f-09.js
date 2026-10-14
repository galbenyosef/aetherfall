// hd2d-FOjpdF4f 09 — geo
// Lines 3093-3387 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
var gi = class {
  renderer;
  root = new F();
  ctx;
  stats = {
    slots: 0,
    strips: 0,
    dropped: 0,
    uploadBytes: 0,
    sheetW: ai,
    sheetH: oi,
  };
  cam = Ot();
  dens = re();
  sheet;
  src;
  rt = null;
  cut;
  fringe;
  mats;
  geo;
  cap = 0;
  foot = new Float32Array();
  rect = new Float32Array();
  box = new Float32Array();
  n = 0;
  region = new je(new P(0, 0), new P(1, 1));
  origin = new P(0, 0);
  bounds = new Re();
  corner = new V();
  rows = 0;
  cleared = 0;
  tallFor = 0;
  specs = [];
  off = [0, 0];
  ws = new Int32Array(64);
  hs = new Int32Array(64);
  at = new Int32Array(128);
  order = new Int32Array(64);
  constructor(e, t) {
    this.renderer = e;
    let [n, r] = h(ai, oi);
    ((this.sheet = n),
      (this.ctx = r),
      (this.src = new Je(n)),
      (this.root.name = `hd2d-actors`));
    let i = {
        map: this.target().texture,
        lit: t,
        instanced: !0,
        texelLock: !0,
        aoi: !0,
        cam: this.cam,
      },
      a = Lt({ ...i, pass: `cut` }),
      o = Lt({ ...i, pass: `fringe` }),
      s = Lt({ ...i, pass: `shadow` });
    ((this.mats = [a, o, s]),
      (this.geo = this.makeGeometry(256)),
      (this.cut = new I(this.geo, a)),
      (this.cut.customDepthMaterial = s),
      (this.cut.customDistanceMaterial = s),
      (this.fringe = new I(this.geo, o)));
    for (let e of [this.cut, this.fringe])
      ((e.frustumCulled = !1),
        (e.matrixAutoUpdate = !1),
        (e.visible = !1),
        this.root.add(e));
    ((this.fringe.renderOrder = 50),
      (this.cut.name = `hd2d-actors-cut`),
      (this.fringe.name = `hd2d-actors-fringe`));
  }
  run(e, t) {
    let n = e.length;
    this.ensureScratch(n);
    let { specs: r, ws: i, hs: a, at: o } = this,
      s = 0,
      c = 0,
      l = this.dens;
    for (let o = 0; o < n; o++) {
      let n = pi(e[o], t, r[o], l);
      ((r[o] = n),
        (i[o] = n.hw * 2 * l),
        (a[o] = (n.up + n.down) * l),
        (s = Math.max(s, i[o])),
        n.strip && c++);
    }
    let u = this.sheet,
      d = Math.min(si, Math.max(ai, Math.ceil(s / oi) * oi)),
      f = Math.max(u.width, d),
      p = hi(i, a, n, f, si, o, this.order),
      m = Math.max(oi, Math.ceil(p / oi) * oi);
    ((this.tallFor = m <= u.height / 2 || f > d ? this.tallFor + 1 : 0),
      this.tallFor > di
        ? ((f = d),
          (p = hi(i, a, n, f, si, o, this.order)),
          (m = Math.max(oi, Math.ceil(p / oi) * oi)),
          this.resize(f, m))
        : (f !== u.width || m > u.height) &&
          this.resize(f, Math.max(m, u.height)));
    let h = this.ctx;
    h.setTransform(1, 0, 0, 1, 0, 0);
    let g = Math.max(this.cleared, p);
    (g > 0 && h.clearRect(0, 0, u.width, g),
      (this.cleared = p),
      (this.rows = p),
      n > this.cap && this.grow(n));
    let { foot: _, rect: v, box: y } = this,
      b = 1 / u.width,
      x = 1 / u.height,
      S = 0,
      C = 0,
      w = this.bounds.makeEmpty();
    for (let s = 0; s < n; s++) {
      let n = o[s * 2],
        c = o[s * 2 + 1];
      if (n < 0) {
        C++;
        continue;
      }
      let u = r[s],
        d = i[s],
        f = a[s],
        [p, m] = mi(u, n / l, c / l, t, this.off);
      (h.save(),
        h.beginPath(),
        h.rect(n, c, d, f),
        h.clip(),
        h.setTransform(l, 0, 0, l, p * l, m * l));
      try {
        e[s].draw();
      } finally {
        h.restore();
      }
      let g = S * 4;
      (fi(u, e[s], _, g),
        (_[g + 2] = 0),
        (_[g + 3] = e[s].front ? 2 : +!!e[s].remote),
        (v[g] = n * b),
        (v[g + 1] = c * x),
        (v[g + 2] = (n + d) * b),
        (v[g + 3] = (c + f) * x),
        (y[g] = u.hw),
        (y[g + 1] = u.up),
        (y[g + 2] = u.down),
        (y[g + 3] = 1),
        S++,
        this.corner.set(_[g] - u.hw * 1.3, _[g + 1] - 1, 0),
        w.expandByPoint(this.corner),
        this.corner.set(
          _[g] + u.hw * 1.3,
          _[g + 1] + u.down * 1.3 + 1,
          u.up * 1.3 + 1,
        ),
        w.expandByPoint(this.corner));
    }
    this.n = S;
    for (let e of [K.foot, K.rect, K.box]) {
      let t = this.geo.getAttribute(e);
      (t.clearUpdateRanges(),
        S > 0 && (t.addUpdateRange(0, S * 4), (t.needsUpdate = !0)));
    }
    ((this.geo.instanceCount = S),
      S > 0 &&
        ((this.geo.boundingBox = (this.geo.boundingBox ?? new Re()).copy(w)),
        (this.geo.boundingSphere = w.getBoundingSphere(
          this.geo.boundingSphere ?? new Te(),
        ))),
      (this.cut.visible = this.fringe.visible = S > 0));
    let T = this.stats;
    ((T.slots = S),
      (T.strips = c),
      (T.dropped = C),
      (T.sheetW = u.width),
      (T.sheetH = u.height));
  }
  resize(e, t) {
    ((this.sheet.width = e),
      (this.sheet.height = t),
      (this.ctx.imageSmoothingEnabled = !1),
      (this.cleared = 0),
      (this.tallFor = 0));
  }
  update(e) {
    if ((kt(this.cam, e), e.cam.cal))
      for (let e = 0; e < this.n; e++)
        ((this.foot[e * 4] = Math.round(this.foot[e * 4])),
          (this.foot[e * 4 + 1] = Math.round(this.foot[e * 4 + 1])));
    let t = this.target();
    this.rows > 0 && this.n > 0
      ? (this.region.max.set(this.sheet.width, this.rows),
        this.renderer.copyTextureToTexture(
          this.src,
          t.texture,
          this.region,
          this.origin,
        ),
        (this.stats.uploadBytes = this.sheet.width * this.rows * 4))
      : (this.stats.uploadBytes = 0);
  }
  casters(e) {
    return e === `dynamic` && this.cut.visible ? [this.cut] : [];
  }
  rebuild() {
    (this.rt?.dispose(), (this.rt = null), this.target());
    let e = this.geo;
    ((this.geo = this.makeGeometry(this.cap, e)),
      (this.cut.geometry = this.fringe.geometry = this.geo),
      e.dispose());
  }
  dispose() {
    (this.root.removeFromParent(),
      this.rt?.dispose(),
      (this.rt = null),
      this.geo.dispose());
    for (let e of this.mats) e.dispose();
    this.sheet.width = this.sheet.height = 1;
  }
  target() {
    let e = this.sheet;
    if (this.rt && this.rt.width === e.width && this.rt.height === e.height)
      return this.rt;
    this.rt?.dispose();
    let t = new Ce(e.width, e.height, {
      depthBuffer: !1,
      generateMipmaps: !1,
      minFilter: R,
      magFilter: R,
      colorSpace: ``,
    });
    (this.renderer.initRenderTarget(t), (this.rt = t));
    for (let e of this.mats ?? [])
      ((e.uniforms.uBbMap.value = t.texture),
        (e.uniforms.uBbFlipY.value = +!!t.texture.flipY));
    return t;
  }
  grow(e) {
    let t = Math.max(256, this.cap);
    for (; t < e;) t *= 2;
    let n = this.geo;
    ((this.geo = this.makeGeometry(t, n)),
      (this.cut.geometry = this.fringe.geometry = this.geo),
      n.dispose());
  }
  makeGeometry(e, t) {
    let n = new Le(),
      r = Dt();
    (n.setAttribute(`position`, r.getAttribute(`position`)),
      n.setIndex(r.getIndex()));
    let i = (t) => {
      let n = new Float32Array(e * 4);
      return (n.set(t.subarray(0, Math.min(t.length, n.length))), n);
    };
    ((this.foot = i(this.foot)),
      (this.rect = i(this.rect)),
      (this.box = i(this.box)));
    for (let [e, t] of [
      [K.foot, this.foot],
      [K.rect, this.rect],
      [K.box, this.box],
    ]) {
      let r = new we(t, 4);
      (r.setUsage(G), n.setAttribute(e, r));
    }
    return (
      (n.instanceCount = t ? Math.min(t.instanceCount, e) : 0),
      (this.cap = e),
      n
    );
  }
  ensureScratch(e) {
    if (this.ws.length >= e) return;
    let t = this.ws.length;
    for (; t < e;) t *= 2;
    ((this.ws = new Int32Array(t)),
      (this.hs = new Int32Array(t)),
      (this.order = new Int32Array(t)),
      (this.at = new Int32Array(t * 2)));
  }
};
function _i(e, n, r, i, a, o) {
  let s = t(r.c),
    c = i.w / s,
    l = i.h / s,
    u = r.baseY,
    d = 0,
    f = r.baseY - r.y;
  return (
    f > l ? ((d = f - l), (f = l)) : f < 0 && ((u = r.y), (f = 0)),
    e.foot.set([r.x + c / 2, u, d, 0], n * 4),
    e.rect.set([i.x / a, i.y / o, (i.x + i.w) / a, (i.y + i.h) / o], n * 4),
    e.box.set([c / 2, f, l - f, 1], n * 4),
    { lift: d, up: f }
  );
}
