// fx3d-DiRK8ozf 10 — math
// Lines 31074-31960 of readable/assets/fx3d-DiRK8ozf.pretty.js (statement-aligned).
var Fx3dLayer = class {
  sceneCanvas;
  canvas;
  renderer;
  hosted;
  cam = new ld();
  particles;
  beams;
  orbs;
  ribbons;
  decals;
  lines = [];
  vortices = [];
  pools;
  chunks;
  lights = [];
  shocks = [];
  settings = {
    bloom: 1,
    light: !0,
    occlusion: !0,
    distort: !0,
    ca: !0,
    fxPixels: 14e5,
    msaa: 4,
    outP: 0,
    lightRes: 1,
    density: 1,
  };
  quality = `high`;
  choice = `auto`;
  user = { aa: null, glow: !0, light: !0, haze: !0, fringe: !0, particles: 1 };
  auto = !0;
  off = !1;
  gpu;
  software;
  outScale = 1;
  hdr;
  fxRes = { w: 1, h: 1 };
  lost = !1;
  get on() {
    return !this.gone() && !this.off;
  }
  gone() {
    return this.lost || this.renderer.getContext().isContextLost();
  }
  prof = null;
  profT = 0;
  amb = 1;
  dimAmt = 0;
  dimUntil = 0;
  ca = 0;
  get ambient() {
    return this.amb;
  }
  get caAmt() {
    return this.ca;
  }
  shared;
  fxScene = new Bn();
  dsrc = {
    shock: Df(8).value,
    shim: Df(16).value,
    vtx: Df(4).value,
    vtxB: Df(4).value,
    n: 0,
  };
  ptPool = [];
  lnPool = [];
  sceneTex;
  depthTex;
  texSize = new Map();
  prepass;
  light;
  dist;
  down;
  up;
  final;
  blitCam = new jo(-1, 1, 1, -1, 0, 1);
  lightRT;
  distRT;
  fxRT;
  bloomD = [];
  bloomU = [];
  Wv = 1;
  Hv = 1;
  sized = ``;
  lastNow = 0;
  constructor(e, t, n) {
    ((this.sceneCanvas = e),
      (this.hosted = !!n),
      n
        ? ((this.renderer = n.renderer), (this.canvas = n.renderer.domElement))
        : ((this.canvas = document.createElement(`canvas`)),
          (this.renderer = new bu({
            canvas: this.canvas,
            antialias: !1,
            alpha: !1,
            powerPreference: `high-performance`,
          })),
          this.renderer.setPixelRatio(1),
          (this.renderer.outputColorSpace = Ge),
          (this.renderer.autoClear = !1),
          (this.renderer.info.autoReset = !1)));
    let r = this.renderer.extensions;
    this.hdr =
      r.has(`EXT_color_buffer_float`) || r.has(`EXT_color_buffer_half_float`);
    let i = this.renderer.getContext(),
      a = i.getExtension(`WEBGL_debug_renderer_info`);
    ((this.gpu = String(
      a
        ? i.getParameter(a.UNMASKED_RENDERER_WEBGL)
        : i.getParameter(i.RENDERER),
    )),
      (this.software =
        /swiftshader|basic render|llvmpipe|softpipe|software/i.test(this.gpu)),
      n ||
        (this.canvas.addEventListener(`webglcontextlost`, (e) => {
          (e.preventDefault(), this.setLost(!0));
        }),
        this.canvas.addEventListener(`webglcontextrestored`, () =>
          this.setLost(!1),
        )),
      (this.shared = {
        uTime: { value: 0 },
        uRamp: { value: buildPaletteTexture() },
        uWH: { value: new U(1, 1) },
        uView: { value: sd.clone() },
        uSV: { value: [new W(1, 0, 0), new W(0, 1, -1)] },
        uSquash: { value: 0.7 },
      }));
    let o = Tu(this.hosted);
    ((this.particles = new ku(32768, this.shared, o)),
      (this.beams = new nf(this.shared, o)),
      (this.orbs = new ad(this.shared, void 0, o)),
      (this.ribbons = new pd(this.shared)),
      (this.decals = new Cd(this.shared, void 0, o)));
    let s = of(this.shared, Q.stone, o);
    ((this.pools = {
      shard: new pf(cf(), s, 192),
      prism: new pf(sf(), s, 80),
      core: new pf(lf(), s, 4),
      rock: new pf(uf(), s, 128),
    }),
      (this.chunks = {
        crystal: new mf(this.pools.shard),
        rock: new mf(this.pools.rock),
      }));
    let c = (e) => {
      let t = new oa(e);
      return (
        (t.magFilter = t.minFilter = u),
        (t.generateMipmaps = !1),
        (t.flipY = !1),
        (t.colorSpace = ``),
        t
      );
    };
    ((this.sceneTex = c(e)), (this.depthTex = c(t)));
    let l = { value: new $t() },
      d = { value: new $t() },
      f = { value: new U(1, 1) },
      p = { value: 1 };
    ((this.prepass = new Ef(
      Sf,
      {
        uDepth: { value: this.depthTex },
        uView: l,
        uSceneSize: f,
        uDens: p,
        uK0: { value: 0 },
      },
      { depthTest: !0, depthWrite: !0, depthFunc: 1, colorWrite: !1 },
    )),
      (this.prepass.mesh.renderOrder = -100),
      this.fxScene.add(
        this.prepass.mesh,
        this.decals.mesh,
        this.beams.root,
        this.particles.mesh,
        this.pools.shard.mesh,
        this.pools.prism.mesh,
        this.pools.core.mesh,
        this.pools.rock.mesh,
        this.orbs.mesh,
        this.ribbons.mesh,
      ),
      (this.light = new Ef(SHADER_HEADER, {
        uCam: d,
        uAmb: { value: new W(1, 1, 1) },
        uEnc: { value: 1 },
        uPt: Df(MAX_POINT_LIGHTS),
        uPtC: Df(MAX_POINT_LIGHTS),
        uPtN: { value: 0 },
        uLnA: Df(MAX_LINE_LIGHTS),
        uLnB: Df(MAX_LINE_LIGHTS),
        uLnC: Df(MAX_LINE_LIGHTS),
        uLnN: { value: 0 },
      })));
    let m = this.dsrc;
    ((this.dist = new Ef(xf, {
      uCam: d,
      uTime: this.shared.uTime,
      uEnc: { value: 1 },
      uShock: { value: m.shock },
      uShim: { value: m.shim },
      uVtx: { value: m.vtx },
      uVtxB: { value: m.vtxB },
    })),
      (this.down = new Ef(Cf, {
        uSrc: { value: null },
        uTexel: { value: new U() },
        uThresh: { value: -1 },
      })),
      (this.up = new Ef(wf, {
        uSrc: { value: null },
        uBase: { value: null },
        uTexel: { value: new U() },
      })),
      (this.final = new Ef(Tf, {
        uScene: { value: this.sceneTex },
        uLight: { value: null },
        uDist: { value: null },
        uFx: { value: null },
        uBloom: { value: null },
        uView: l,
        uSceneSize: f,
        uDens: p,
        uArt: { value: new U(1, 1) },
        uBloomK: { value: 1 },
        uCA: { value: 0 },
        uUseLight: { value: 1 },
        uUseDist: { value: 1 },
        uEnc: { value: 1 },
        uEncD: { value: 1 },
        uAmb: { value: 1 },
      })),
      this.setQuality(this.software ? `low` : `high`),
      this.warm());
  }
  setLost(e) {
    ((this.lost = e), e || (this.sized = ``));
  }
  invalidateSize() {
    this.sized = ``;
  }
  async warm() {
    let e = this.renderer;
    this.beams.add(
      {
        sx: 0,
        sy: 0,
        sz: 0,
        ang: 0,
        len: 1,
        ez: 0,
        life: 0.001,
        ramp: 0,
        ticks: !0,
      },
      -10,
    );
    try {
      await e.compileAsync(this.fxScene, this.cam);
      for (let t of [
        this.prepass,
        this.light,
        this.dist,
        this.down,
        this.up,
        this.final,
      ])
        await e.compileAsync(t.scene, this.blitCam);
    } catch {}
  }
  own = `high`;
  cap = null;
  setQuality(e) {
    ((this.own = e), this.applyQuality());
  }
  capQuality(e) {
    e !== this.cap && ((this.cap = e), this.applyQuality());
  }
  applyQuality() {
    let e =
      this.cap && QUALITY_TIERS.indexOf(this.cap) > QUALITY_TIERS.indexOf(this.own)
        ? this.cap
        : this.own;
    ((this.quality = e), Object.assign(this.settings, hf[e]), this.applyUser());
  }
  choose(e) {
    if (e !== this.choice) {
      if (((this.choice = e), (this.slow = 0), e === `off`)) {
        ((this.off = !0), (this.auto = !1));
        return;
      }
      ((this.off = !1),
        (this.auto = e === `auto`),
        this.setQuality(e === `auto` ? (this.software ? `low` : `high`) : e));
    }
  }
  configure(e) {
    (Object.assign(this.user, e), this.applyUser());
  }
  applyUser() {
    let e = hf[this.quality],
      t = this.user,
      n = this.settings;
    ((n.msaa = t.aa ?? e.msaa),
      (n.bloom = t.glow ? e.bloom : 0),
      (n.light = t.light),
      (n.distort = t.haze && e.distort),
      (n.ca = t.fringe && e.ca),
      (n.density = e.density * t.particles),
      n.light || (this.amb = 1),
      (this.sized = ``));
  }
  slow = 0;
  base = 1 / 60;
  tick(e, t) {
    if (!this.auto || this.off) return;
    if (!t) {
      ((this.base += (e - this.base) * 0.05),
        (this.slow = Math.max(0, this.slow - e)));
      return;
    }
    if (
      (e > 1 / 45 && e > this.base + 0.006
        ? (this.slow += e)
        : (this.slow = Math.max(0, this.slow - e * 0.5)),
      this.slow < 1.2)
    )
      return;
    this.slow = 0;
    let n = QUALITY_TIERS.indexOf(this.own);
    n < QUALITY_TIERS.length - 1
      ? (this.setQuality(QUALITY_TIERS[n + 1]),
        console.info(
          `3D attack FX: frames were slow, quality ${QUALITY_TIERS[n]} -> ${QUALITY_TIERS[n + 1]} (${this.gpu})`,
        ))
      : ((this.off = !0),
        console.info(
          `3D attack FX: still slow at "minimal", back to 2D (${this.gpu})`,
        ));
  }
  rt(e, t, n = {}) {
    let r = new tn(Math.max(1, e), Math.max(1, t), {
      format: j,
      type: this.hdr ? C : g,
      magFilter: p,
      minFilter: p,
      depthBuffer: !1,
      stencilBuffer: !1,
      generateMipmaps: !1,
      ...n,
    });
    return ((r.texture.colorSpace = ``), r);
  }
  resize(e, t, n, r = 1) {
    ((this.Wv = e / n), (this.Hv = t / n), (this.final.u.uDens.value = r));
    let i = this.settings,
      a = `${e}x${t}x${n.toFixed(4)}x${r}x${i.fxPixels}x${i.msaa}x${i.outP}x${i.lightRes}`;
    if (a === this.sized) return;
    this.sized = a;
    let o = n,
      s = Math.round(n),
      c = Math.max(this.settings.outP, r);
    if (this.settings.outP > 0 && Math.abs(n - s) < 0.001 && s > c) {
      o = s;
      for (let e = c; e >= r; e--)
        if (s % e === 0 && e % r === 0) {
          o = e;
          break;
        }
    }
    this.outScale = n / o;
    let l = Math.round(e / this.outScale),
      u = Math.round(t / this.outScale);
    this.renderer.setSize(l, u, !1);
    let d = Math.min(1, Math.sqrt(this.settings.fxPixels / (l * u))),
      f = Math.round(l * d),
      p = Math.round(u * d);
    this.fxRes = { w: f, h: p };
    for (let e of [
      this.lightRT,
      this.distRT,
      this.fxRT,
      ...this.bloomD,
      ...this.bloomU,
    ])
      e?.dispose();
    let m = Math.ceil(this.Wv),
      h = Math.ceil(this.Hv);
    ((this.lightRT = this.rt(
      Math.max(1, Math.ceil(m * i.lightRes)),
      Math.max(1, Math.ceil(h * i.lightRes)),
    )),
      (this.distRT = this.rt(m, h)),
      (this.fxRT = this.rt(f, p, {
        depthBuffer: !0,
        samples: this.settings.msaa,
      })),
      (this.bloomD = []),
      (this.bloomU = []));
    let g = f,
      _ = p;
    for (let e = 0; e < 5; e++)
      ((g = Math.max(1, Math.ceil(g / 2))),
        (_ = Math.max(1, Math.ceil(_ / 2))),
        this.bloomD.push(this.rt(g, _)),
        this.bloomU.push(this.rt(g, _)));
    this.final.u.uArt.value.set(m, h);
  }
  lightFromRamp(e, t, n, r, i, a, o, s, c = !1, l = 3) {
    let [u, d, f] = paletteColor(r, l),
      p = {
        x: e,
        y: t,
        z: n,
        r: u,
        g: d,
        b: f,
        I: i,
        rad: a,
        life: o,
        hold: c,
        t0: s,
      };
    return (this.lights.push(p), p);
  }
  lightLine(e, t, n, r, i, a, o, s = 3) {
    let [c, l, u] = paletteColor(n, s),
      d = { a: e, b: t, r: c, g: l, b2: u, I: r, rad: i, life: a, t0: o };
    return (
      this.lines.push(d),
      this.lines.length > 48 && this.lines.shift(),
      d
    );
  }
  vortex(e, t, n, r, i, a, o, s = !1, c = 0) {
    let l = {
      x: e,
      y: t,
      z: c,
      R: n,
      ang: r,
      pinch: i,
      life: a,
      hold: s,
      t0: o,
    };
    return (
      this.vortices.length >= 4 && this.vortices.shift(),
      this.vortices.push(l),
      l
    );
  }
  decal(e, t) {
    this.decals.add(e, t);
  }
  shock(e, t, n, r = 48, i = 3, a = 0.45, o = 0) {
    (this.shocks.length >= 8 && this.shocks.shift(),
      this.shocks.push({ x: e, y: t, z: o, t0: n, dur: a, r, amp: i }));
  }
  dim(e, t) {
    ((this.dimAmt = Math.max(this.dimAmt, e)),
      (this.dimUntil = Math.max(this.dimUntil, t)));
  }
  kickCA(e) {
    this.ca = Math.min(1.5, this.ca + e);
  }
  beam(e, t) {
    return this.beams.add(e, t);
  }
  active(e) {
    return this.gone()
      ? !1
      : this.beams.live.length > 0 ||
          this.particles.busyUntil > e ||
          this.chunks.crystal.count + this.chunks.rock.count > 0 ||
          this.pools.shard.used + this.pools.prism.used + this.pools.core.used >
            0 ||
          this.lights.length > 0 ||
          this.shocks.length > 0 ||
          this.orbs.used > 0 ||
          this.ribbons.count > 0 ||
          this.decals.busyUntil > e ||
          this.lines.length > 0 ||
          this.vortices.length > 0 ||
          this.amb < 0.995 ||
          e < this.dimUntil;
  }
  clear() {
    (this.particles.clear(),
      this.beams.clear(),
      this.chunks.crystal.clear(),
      this.chunks.rock.clear());
    for (let e of Object.values(this.pools)) e.clear();
    ((this.lights.length = 0),
      (this.shocks.length = 0),
      this.orbs.clear(),
      this.ribbons.reset(),
      this.decals.clear(),
      (this.lines.length = 0),
      (this.vortices.length = 0),
      (this.amb = 1),
      (this.dimAmt = 0),
      (this.dimUntil = 0));
  }
  dispose() {
    if (!this.hosted) {
      this.renderer.dispose();
      return;
    }
    for (let e of [
      this.lightRT,
      this.distRT,
      this.fxRT,
      ...this.bloomD,
      ...this.bloomU,
    ])
      e?.dispose();
    this.beams.dispose();
    let e = new Set(),
      t = (t) => {
        t && !e.has(t) && (e.add(t), t.dispose());
      };
    for (let e of [
      this.fxScene,
      ...[
        this.prepass,
        this.light,
        this.dist,
        this.down,
        this.up,
        this.final,
      ].map((e) => e.scene),
    ])
      e.traverse((e) => {
        let n = e;
        t(n.geometry);
        for (let e of Array.isArray(n.material) ? n.material : [n.material])
          t(e);
      });
    (t(this.shared.uRamp.value), t(this.sceneTex), t(this.depthTex));
  }
  profPx = new Uint8Array(4);
  sync() {
    let e = this.renderer.getContext(),
      t = e.getParameter(e.FRAMEBUFFER_BINDING);
    (e.bindFramebuffer(e.FRAMEBUFFER, null),
      e.readPixels(0, 0, 1, 1, e.RGBA, e.UNSIGNED_BYTE, this.profPx),
      e.bindFramebuffer(e.FRAMEBUFFER, t));
  }
  mark(e) {
    if (!this.prof) return;
    this.sync();
    let t = performance.now();
    ((this.prof[e] = (this.prof[e] ?? 0) + t - this.profT), (this.profT = t));
  }
  fit(e) {
    let t = e.image,
      n = `${t.width}x${t.height}`,
      r = this.texSize.get(e);
    (r !== void 0 && r !== n && e.dispose(), this.texSize.set(e, n));
  }
  frame(e, t, n) {
    let r = this.renderer,
      i = this.settings;
    this.prof && (this.sync(), (this.profT = performance.now()));
    let a = Math.max(0, Math.min(0.1, n - this.lastNow));
    (r.info.reset(),
      this.obliqueView(),
      this.cam.set(e, t, this.Wv, this.Hv),
      this.cam.updateMatrixWorld(),
      this.final.u.uView.value.set(e, t, this.Wv, this.Hv),
      this.final.u.uSceneSize.value.set(
        this.sceneCanvas.width,
        this.sceneCanvas.height,
      ));
    let o = this.final.u.uArt.value;
    (this.light.u.uCam.value.set(e, t, o.x, o.y),
      (this.prepass.u.uK0.value = this.cam.k0),
      this.shared.uWH.value.set(this.Wv, this.Hv),
      this.fit(this.sceneTex),
      (this.sceneTex.needsUpdate = !0),
      (this.prepass.mesh.visible = i.occlusion),
      i.occlusion &&
        (this.fit(this.depthTex), (this.depthTex.needsUpdate = !0)),
      this.step(n, a));
    let s = this.hdr ? 1 : 0.25,
      c = i.light && (this.updateLights(n, s) > 0 || this.amb < 0.999),
      l = i.distort && this.updateDistort(n) > 0;
    if (
      (this.mark(`cpu`),
      c &&
        (r.setRenderTarget(this.lightRT),
        r.render(this.light.scene, this.blitCam)),
      this.mark(`light`),
      l &&
        ((this.dist.u.uEnc.value = this.hdr ? 1 : 1 / 16),
        r.setRenderTarget(this.distRT),
        r.render(this.dist.scene, this.blitCam)),
      this.mark(`distort`),
      r.setRenderTarget(this.fxRT),
      r.setClearColor(0, 0),
      r.clear(!0, !0, !1),
      r.render(this.fxScene, this.cam),
      this.mark(`fx`),
      i.bloom > 0)
    ) {
      let e = this.fxRT.texture,
        t = this.fxRT.width,
        n = this.fxRT.height;
      for (let i = 0; i < this.bloomD.length; i++)
        ((this.down.u.uSrc.value = e),
          this.down.u.uTexel.value.set(1 / t, 1 / n),
          (this.down.u.uThresh.value = i === 0 ? (this.hdr ? 1 : 0.6) : -1),
          r.setRenderTarget(this.bloomD[i]),
          r.render(this.down.scene, this.blitCam),
          (e = this.bloomD[i].texture),
          (t = this.bloomD[i].width),
          (n = this.bloomD[i].height));
      let i = this.bloomD[this.bloomD.length - 1];
      for (let e = this.bloomD.length - 2; e >= 0; e--)
        ((this.up.u.uSrc.value = i.texture),
          (this.up.u.uBase.value = this.bloomD[e].texture),
          this.up.u.uTexel.value.set(1 / i.width, 1 / i.height),
          r.setRenderTarget(this.bloomU[e]),
          r.render(this.up.scene, this.blitCam),
          (i = this.bloomU[e]));
    }
    this.mark(`bloom`);
    let u = this.final.u;
    return (
      (u.uLight.value = this.lightRT.texture),
      (u.uDist.value = this.distRT.texture),
      (u.uFx.value = this.fxRT.texture),
      (u.uBloom.value = this.bloomU[0].texture),
      (u.uBloomK.value = i.bloom * 0.32),
      (u.uCA.value = i.ca && this.ca > 0.01 ? this.ca * 0.014 : 0),
      (u.uUseLight.value = +!!c),
      (u.uUseDist.value = +!!l),
      (u.uEnc.value = s),
      (u.uEncD.value = this.hdr ? 1 : 1 / 16),
      (u.uAmb.value = c ? this.amb : 1),
      r.setRenderTarget(null),
      r.render(this.final.scene, this.blitCam),
      this.mark(`final`),
      r.info.render.calls
    );
  }
  step(e, t) {
    ((this.lastNow = e),
      (this.shared.uTime.value = e),
      this.beams.update(e),
      this.chunks.crystal.update(e, t),
      this.chunks.rock.update(e, t));
    for (let e of Object.values(this.pools)) e.flush();
    (this.particles.flush(e),
      this.orbs.flush(),
      this.ribbons.flush(),
      this.decals.flush(e));
    let n = e < this.dimUntil ? 1 - this.dimAmt : 1;
    (e >= this.dimUntil && (this.dimAmt = 0),
      (this.amb +=
        (n - this.amb) * (1 - Math.exp(-(n < this.amb ? 5 : 2.5) * t))),
      (this.ca *= Math.exp(-7 * t)));
    for (let t = this.shocks.length - 1; t >= 0; t--)
      e - this.shocks[t].t0 > this.shocks[t].dur && this.shocks.splice(t, 1);
    for (let t = this.vortices.length - 1; t >= 0; t--)
      e - this.vortices[t].t0 > this.vortices[t].life &&
        this.vortices.splice(t, 1);
  }
  hostView(e, t, n, r, i) {
    let a = this.shared;
    a.uView.value.copy(e);
    let o = a.uSV.value;
    (o[0].copy(t[0]),
      o[1].copy(t[1]),
      (a.uSquash.value = n),
      a.uWH.value.set(r, i),
      cd.copy(e),
      (this.prepass.mesh.visible = !1));
  }
  obliqueView() {
    let e = this.shared;
    e.uView.value.copy(sd);
    let t = e.uSV.value;
    (t[0].set(1, 0, 0),
      t[1].set(0, 1, -1),
      (e.uSquash.value = 0.7),
      cd.copy(sd));
  }
  collectLights(e, t) {
    let n = this.ptPool,
      r = this.lnPool,
      i = 0,
      a = 0,
      o = (e, t, r, a, o, s, c, l) => {
        let u =
          n[i] ?? (n[i] = { x: 0, y: 0, z: 0, r: 0, g: 0, b: 0, I: 0, rad: 0 });
        ((u.x = e),
          (u.y = t),
          (u.z = r),
          (u.r = a),
          (u.g = o),
          (u.b = s),
          (u.I = c),
          (u.rad = l),
          i++);
      },
      s = () =>
        r[a] ??
        (r[a] = {
          a: [0, 0, 0],
          b: [0, 0, 0],
          r: 0,
          g: 0,
          b2: 0,
          I: 0,
          rad: 0,
        });
    for (let t = this.lights.length - 1; t >= 0; t--) {
      let n = this.lights[t],
        r = e - n.t0;
      if (r > n.life) {
        this.lights.splice(t, 1);
        continue;
      }
      r < 0 || o(n.x, n.y, n.z, n.r, n.g, n.b, n.I * lightFalloff(n, r) * 0.5, n.rad);
    }
    for (let t = this.lines.length - 1; t >= 0; t--) {
      let n = this.lines[t],
        r = e - n.t0;
      if (r > n.life) {
        this.lines.splice(t, 1);
        continue;
      }
      if (r < 0) continue;
      let i = s();
      ((i.a[0] = n.a[0]),
        (i.a[1] = n.a[1]),
        (i.a[2] = n.a[2]),
        (i.b[0] = n.b[0]),
        (i.b[1] = n.b[1]),
        (i.b[2] = n.b[2]),
        (i.r = n.r),
        (i.g = n.g),
        (i.b2 = n.b2),
        (i.I = n.I * (1 - r / n.life) * 0.5),
        (i.rad = n.rad),
        a++);
    }
    for (let t of this.beams.segments(e)) {
      let [e, n, r] = paletteColor(t.ramp, 3),
        i = s();
      ((i.a[0] = t.s.x + (t.e.x - t.s.x) * 0.3),
        (i.a[1] = t.s.y + (t.e.y - t.s.y) * 0.3),
        (i.a[2] = t.s.z + (t.e.z - t.s.z) * 0.3),
        (i.b[0] = t.e.x),
        (i.b[1] = t.e.y),
        (i.b[2] = t.e.z),
        (i.r = e),
        (i.g = n),
        (i.b2 = r),
        (i.I = 0.7 * t.I * t.k),
        (i.rad = 9),
        a++,
        t.e.z < 2 && o(t.e.x, t.e.y, 2, e, n, r, 0.27 * t.k, 16));
    }
    t.pts.length = 0;
    for (let e = 0; e < i; e++) t.pts.push(n[e]);
    t.lines.length = 0;
    for (let e = 0; e < a; e++) t.lines.push(r[e]);
  }
  distortSources(e, t = this.lastNow) {
    let n = this.dsrc,
      r = 0,
      i = n.shock;
    for (let e = this.shocks.length - 1; e >= 0; e--)
      t - this.shocks[e].t0 > this.shocks[e].dur && this.shocks.splice(e, 1);
    for (let n = 0; n < 8; n++) {
      let a = this.shocks[n];
      if (!a || t < a.t0) {
        i[n].set(0, 0, 0, 0);
        continue;
      }
      let o = (t - a.t0) / a.dur,
        s = e(a.x, a.y, a.z);
      (i[n].set(s.sx, s.sy, a.r * (1 - (1 - o) * (1 - o)), a.amp * (1 - o)),
        r++);
    }
    let a = n.shim,
      o = 0;
    for (let n of this.beams.segments(t)) {
      if (o >= 16 || n.k < 0.3) continue;
      let t = e(n.s.x, n.s.y, n.s.z),
        r = e(n.e.x, n.e.y, n.e.z);
      a[o++].set(t.sx, t.sy, r.sx, r.sy);
    }
    for (r += o; o < 16; o++) a[o].set(0, 0, 0, 0);
    let s = n.vtx,
      c = n.vtxB;
    for (let e = this.vortices.length - 1; e >= 0; e--)
      t - this.vortices[e].t0 > this.vortices[e].life &&
        this.vortices.splice(e, 1);
    for (let n = 0; n < 4; n++) {
      let i = this.vortices[n],
        a = i ? t - i.t0 : -1;
      if (!i || a < 0) {
        s[n].set(0, 0, 0, 0);
        continue;
      }
      let o = i.hold
          ? Math.min(1, a / 0.25) * Math.min(1, (i.life - a) / 0.35)
          : 1 - a / i.life,
        l = e(i.x, i.y, i.z);
      (s[n].set(l.sx, l.sy, i.R, i.ang * o),
        c[n].set(i.pinch * o, 0, 0, 0),
        r++);
    }
    return ((n.n = r), n);
  }
  updateLights(e, t) {
    let n = this.light.u;
    (n.uAmb.value.setScalar(this.amb), (n.uEnc.value = t));
    let r = n.uPt.value,
      i = n.uPtC.value,
      a = 0;
    for (let t = this.lights.length - 1; t >= 0; t--) {
      let n = this.lights[t],
        o = e - n.t0;
      if (o > n.life) {
        this.lights.splice(t, 1);
        continue;
      }
      if (o < 0 || a >= MAX_POINT_LIGHTS) continue;
      let s = n.I * lightFalloff(n, o) * 0.5;
      (r[a].set(n.x, n.y, n.z, n.rad),
        i[a].set(n.r * s, n.g * s, n.b * s, 0),
        a++);
    }
    let o = n.uLnA.value,
      s = n.uLnB.value,
      c = n.uLnC.value,
      l = 0;
    for (let t = this.lines.length - 1; t >= 0; t--) {
      let n = this.lines[t],
        r = e - n.t0;
      if (r > n.life) {
        this.lines.splice(t, 1);
        continue;
      }
      if (r < 0 || l >= MAX_LINE_LIGHTS) continue;
      let i = r / n.life,
        a = n.I * (1 - i) * 0.5;
      (o[l].set(n.a[0], n.a[1], n.a[2], n.rad),
        s[l].set(n.b[0], n.b[1], n.b[2], 0),
        c[l].set(n.r * a, n.g * a, n.b2 * a, 0),
        l++);
    }
    for (let t of this.beams.segments(e)) {
      if (l >= MAX_LINE_LIGHTS) break;
      let [e, n, u] = paletteColor(t.ramp, 3),
        d = 0.7 * t.I * t.k;
      (o[l].set(
        t.s.x + (t.e.x - t.s.x) * 0.3,
        t.s.y + (t.e.y - t.s.y) * 0.3,
        t.s.z + (t.e.z - t.s.z) * 0.3,
        9,
      ),
        s[l].set(t.e.x, t.e.y, t.e.z, 0),
        c[l].set(e * d, n * d, u * d, 0),
        l++,
        t.e.z < 2 &&
          a < MAX_POINT_LIGHTS &&
          (r[a].set(t.e.x, t.e.y, 2, 16),
          i[a].set(e * 0.8 * t.k, n * 0.8 * t.k, u * 0.8 * t.k, 0),
          a++));
    }
    return ((n.uPtN.value = a), (n.uLnN.value = l), a + l);
  }
  updateDistort(e) {
    return this.distortSources(_f, e).n;
  }
};
