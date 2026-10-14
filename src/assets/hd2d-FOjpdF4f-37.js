// hd2d-FOjpdF4f 37 — core
// Lines 11186-12056 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
var Gl = new z(11 / 255, 7 / 255, 20 / 255),
  Kl = 90,
  ql = 220,
  Jl = 5,
  Yl = {
    woods: { col: `#cfe8dc`, den: 0.0016 },
    frost: { col: `#e8f4ff`, den: 0.0012 },
  },
  Xl = { col: `#c8d4e4`, den: 35e-5 },
  Zl = 1 / 72,
  Ql = new z(10 / 255, 6 / 255, 34 / 255),
  $l = 0.28,
  eu = 0.32,
  tu = new z(1, 1, 1),
  nu = [0, 0, 0],
  ru = {
    dungeon: (e) => bs(e, E.dgCut ?? `relief`),
    room: (e) => yc(e),
    house: (e) => Ps(e),
    homestead: (e) => ie(e),
  },
  iu = 2,
  au = 600,
  ou = 4,
  su = (e, t) => {
    let [n, r, a] = i(e);
    return t.setRGB(n / 255, r / 255, a / 255, Ee);
  },
  Hd2dRenderer = class {
    host;
    fx3d;
    view;
    stage;
    overlay;
    core;
    lights;
    terrain;
    scenery;
    particles;
    dome;
    uprights;
    shadows;
    post;
    world = new qe();
    parts;
    spaceSet;
    lit;
    spaces = [];
    space = null;
    asked = null;
    pre = null;
    drawnKey = ``;
    unsupported = new Set();
    kits = new WeakMap();
    frameNo = 0;
    clear = new z();
    grade = new z(1, 1, 1);
    reachCam = new Zi();
    reachKey = ``;
    reachV = { n: 0, s: 0, wTop: 0, wBot: 0 };
    twinned = new WeakSet();
    twinMats = [];
    gradeWarm = !1;
    hazeWarm = !1;
    lastW = 0;
    lastH = 0;
    gov;
    cal;
    state = `compiling`;
    losses = 0;
    failed = !1;
    released = !1;
    partsFreed = !1;
    lastNow = 0;
    fxl = { pts: [], lines: [] };
    lines2d = [];
    lava = [];
    tint = new z();
    pf;
    project = (e, t, n) => this.core.cam.toScreen(e, t, n);
    fxCasters;
    kNow = 1;
    fxaa = !1;
    logged = ``;
    loggedKind = ``;
    next = ``;
    settle = 0;
    constructor(e) {
      ((this.host = e),
        (this.core = new Po({
          lost: () => this.onLost(),
          restored: () => this.onRestored(),
        })));
      try {
        let t = this.core,
          n = t.renderer;
        n.debug.onShaderError = (e, t, n, r) => {
          let i = [
            e.getProgramInfoLog(t),
            e.getShaderInfoLog(n),
            e.getShaderInfoLog(r),
          ].filter(Boolean).join(`
`);
          this.fail(`a shader didn't compile`, i);
        };
        let r = se();
        ((this.cal = r.cal),
          (this.gov = new Ao(
            xo({ forced: r.tier, software: t.software, ...So() }),
            r.tier !== null,
          )),
          (this.view = new Qi(t.cam.math)),
          (this.fx3d = Me(e.scene, e.depthC, { renderer: n })));
        let i = this.fx3d.layer.pools;
        this.fxCasters = [i.shard.mesh, i.prism.mesh, i.core.mesh, i.rock.mesh];
        let a = Object.assign(createHd2dUniforms(), createSpaceFogUniforms());
        ((this.lit = a),
          (this.lights = new Za(a)),
          (this.overlay = new sa(a)),
          (this.terrain = new ul(e, {
            lit: a,
            overlay: this.overlay.uniforms,
            fog: mt + ht,
            anisotropy: Math.min(4, n.capabilities.getMaxAnisotropy()),
          })),
          (this.stage = new gi(n, a)),
          (this.scenery = new Bi(e, {
            lit: a,
            renderer: n,
            fog: mt + ht,
            cam: this.stage.cam,
          })),
          (this.particles = new ba(a)),
          (this.dome = new ka(e, a)),
          (this.uprights = new Ul(a)),
          (this.shadows = new ts()),
          (this.post = new ho(t.hdr)),
          (this.parts = [
            this.terrain,
            this.scenery,
            this.stage,
            this.overlay.loose,
            this.dome,
            this.uprights,
            this.particles,
          ]),
          (this.spaceSet = [
            this.stage,
            this.stage,
            this.overlay.loose,
            this.uprights,
            this.particles,
          ]),
          this.world.add(
            this.terrain.root,
            this.scenery.root,
            this.stage.root,
            this.overlay.loose.root,
            this.dome.root,
            this.uprights.root,
            this.particles.root,
          ),
          (this.world.matrixAutoUpdate = !1),
          (this.world.matrixWorldAutoUpdate = !0),
          (this.pf = {
            W: 1,
            H: 1,
            k: 1,
            rw: 1,
            rh: 1,
            fxaa: !1,
            tier: this.gov.tier,
            now: 0,
            dist: null,
            haze: null,
            squash: 0.7,
            dof: {
              max: 0,
              band: Kl,
              ramp: ql,
              focusD: 1,
              near: 1,
              far: 2,
              ortho: !1,
            },
            inv: t.cam.Minv,
            glow: {
              tex: null,
              on: !1,
              fp: this.overlay.uniforms.uFp.value,
              inv: this.overlay.uniforms.uFpInv.value,
            },
            bloom: 0,
            mips: 0,
            ca: 0,
            exposure: 1,
            tint: this.tint,
            tintA: $l,
            night: 0,
            atmos: null,
            grade: this.grade,
          }),
          t.cam.set(0, 0, 0, 0, Math.max(1, e.viewW), Math.max(1, e.viewH)),
          this.compile());
      } catch (e) {
        throw (this.core.dispose(), e);
      }
    }
    get ok() {
      return this.state === `on` && !this.failed && !this.core.lost;
    }
    get canvas() {
      return this.core.canvas;
    }
    get k() {
      return this.kNow;
    }
    get spec() {
      return _o[this.gov.tier];
    }
    async compile() {
      this.state = `compiling`;
      let e = this.core.renderer;
      try {
        await e.compileAsync(this.world, this.core.cam);
        for (let t of this.post.scenes())
          await e.compileAsync(t, this.post.camera);
      } catch (e) {
        console.info(`HD-2D: early compile incomplete`, e);
      }
      this.state =
        this.failed || this.losses >= 2
          ? `classic`
          : this.core.lost
            ? `lost`
            : `on`;
    }
    wantNow() {
      return ue();
    }
    covers(e) {
      return Ur(e);
    }
    footprint(e, t, n, r) {
      let i = this.core.cam;
      return (this.tune(), i.place(e, t, n, r), i.footprint());
    }
    tune() {
      let e = this.core.cam;
      ((e.cal = this.cal),
        (e.theta = (E.theta ?? Wi / q) * q),
        (e.fov = (E.fov ?? Gi / q) * q));
    }
    frame(e) {
      if (!this.ok) return !1;
      try {
        return this.draw(e) && this.ok;
      } catch (e) {
        return (this.fail(`a frame threw`, e), !1);
      }
    }
    draw(e) {
      let t = this.core,
        n = t.renderer,
        r = t.cam,
        i = this.fx3d.layer;
      (this.frameNo++,
        (this.lastW = e.W),
        (this.lastH = e.H),
        e.space || (this.asked = null));
      let a = this.pre;
      this.pre = null;
      let o = e.space
        ? a && a.s === e.space
          ? a.sp
          : this.spaceFor(e.space)
        : null;
      if (e.space && !o) return !1;
      this.idle(o);
      let s = o ? o.key : ``;
      if (s !== this.drawnKey) {
        ((this.drawnKey = s),
          this.gov.reset(),
          this.shadows.invalidate(),
          this.lights.resetHero());
        let e = !o;
        ((this.terrain.root.visible = e),
          (this.scenery.root.visible = e),
          (this.dome.root.visible = e));
        for (let e of this.spaces) e.root.visible = e === o;
      }
      ((this.space = o), this.stageVariant(!!o));
      let c = this.parts;
      ((this.spaceSet[0] = o ?? this.stage), o && (c = this.spaceSet));
      let l = e.space?.look ?? null,
        u = !l || l.sun,
        d = this.gov.push(e.real);
      if (d === `give-up`)
        return (
          (this.state = `classic`),
          console.info(
            `HD-2D: frames were slow even at "minimal", back to Classic (${t.gpu})`,
          ),
          this.release(),
          !1
        );
      d === `down` &&
        (console.info(
          `HD-2D: frames were slow, quality down to ${this.gov.tier} (${t.gpu})`,
        ),
        this.shadows.rebuild());
      let f = this.gov.tier,
        p = this.spec,
        m = this.lights.uniforms;
      (i.capQuality(p.fx),
        this.tune(),
        r.set(e.camX, e.camY, e.aimCamX, e.aimCamY, e.W, e.H));
      let h = vo(e.W, e.H, e.S, p.budget, re()),
        g = Math.max(1, Math.round(e.W * h)),
        _ = Math.max(1, Math.round(e.H * h)),
        v = this.cal
          ? { samples: 0, fxaa: !1 }
          : bo(p, i.user.aa, g * _, t.maxSamples);
      t.size(e.W * e.S, e.H * e.S, g, _, v.samples) &&
        (i.invalidateSize(), this.gov.reset());
      let y = g / e.W;
      ((this.kNow = y),
        (this.fxaa = v.fxaa),
        (m.uShadowSoft.value = +!!p.softShadows));
      let x = t.samples ? `MSAA ${t.samples}x` : this.fxaa ? `FXAA` : `no AA`,
        S = `${g}x${_} on ${t.canvas.width}x${t.canvas.height}, ${x}`;
      if (S !== this.logged) {
        let e = `${f} ${x}`;
        ((this.settle = S === this.next ? this.settle + 1 : 0),
          (this.next = S),
          (e !== this.loggedKind || this.settle >= 30) &&
            ((this.logged = S),
            (this.loggedKind = e),
            console.info(
              `HD-2D: ${f}, ${S} (${y.toFixed(2)} render px per art px)`,
            )));
      }
      (t.timer.frame(), n.info.reset());
      let C = Math.max(0, Math.min(0.1, e.now - this.lastNow));
      if (
        ((this.lastNow = e.now),
        i.hostView(r.back, r.sv, this.cal ? 0.7 : 1, e.W, e.H),
        i.step(e.now, C),
        i.collectLights(e.now, this.fxl),
        e.lines2d)
      )
        for (let t = 0; t < e.lines2d.length; t++)
          this.fxl.lines.push(
            qa(
              e.lines2d[t],
              l ? l.dark : e.dark,
              (this.lines2d[t] ??= {
                a: [0, 0, 0],
                b: [0, 0, 0],
                r: 0,
                g: 0,
                b2: 0,
                I: 0,
                rad: 0,
              }),
            ),
          );
      (o
        ? (this.lava.length = 0)
        : this.terrain.lava.lights(e.fp, this.host.time, this.lava, e.me),
        this.sky(l, e.dark, i.ambient),
        this.lights.build(
          e.lights2d,
          e.fp,
          this.fxl,
          this.lava,
          { x: r.focus.x, y: r.focus.y },
          f,
          e.me,
          !o || (E.spaceHero ? `torch` : !1),
          C,
          o ? NO_LIGHTS : this.scenery.lights(),
        ));
      let w = this.lights.heroSkip();
      (this.lit.uHeroSkip.value.set(w.x, w.y, o ? w.r : 0),
        (this.lit.uHeroFade.value = this.lights.heroFade()));
      let T = this.lights.hero();
      (T && this.lit.uHeroPos.value.set(T.x, T.y, T.z),
        this.cal &&
          ((m.uPtN.value = 0),
          (m.uLnN.value = 0),
          (m.uAmb.value = 1),
          (m.uSun.value = 0)),
        this.fog(e, l, u));
      let D = r.toScreen(e.me.x, e.me.y, 16),
        O = {
          f: e,
          cam: r,
          tier: f,
          spec: p,
          lit: m,
          overlay: this.overlay.uniforms,
          occl: { sx: D.sx, sy: D.sy, wy: e.me.y },
          k: y,
          res: { w: t.w, h: t.h },
        };
      for (let e of c)
        if (e !== o) e.update(O);
        else if (!this.guard(o.kind, () => o.update(O))) return !1;
      if (this.cal || p.sunStatic === 0)
        ((m.uShadowOn.value = 0), (m.uHeroOn.value = 0));
      else {
        if ((t.timer.begin(`shadows`), !o))
          this.shadows.render(n, c, O, this.lights.hero(), this.fxCasters);
        else {
          let e = !!l?.sun;
          this.shadows.render(n, c, O, this.lights.hero(), this.fxCasters, {
            sun: e,
            box: e ? o.bounds : null,
          });
        }
        t.timer.end();
      }
      (n.setRenderTarget(t.target),
        n.setClearColor(l ? this.clearOf(l) : Gl, +!!l),
        n.clear(!0, !0, !1),
        t.timer.begin(`world`),
        n.render(this.world, r),
        t.timer.end(),
        t.timer.begin(`fx`),
        n.setRenderTarget(t.fxTarget),
        n.setClearColor(0, 0),
        n.clear(!0, !1, !1),
        n.render(i.fxScene, r),
        t.timer.end());
      let k = this.pf,
        ee = i.settings;
      ((k.W = e.W),
        (k.H = e.H),
        (k.k = y),
        (k.rw = t.w),
        (k.rh = t.h),
        (k.fxaa = this.fxaa),
        (k.tier = f),
        (k.now = e.now),
        (k.dist =
          !this.cal && ee.distort ? i.distortSources(this.project) : null),
        (k.haze = o && !this.cal && ee.distort ? o.haze() : null),
        (k.squash = this.cal ? 0.7 : Math.tan(r.theta)),
        (k.dof.max =
          this.cal || p.dof === `off` ? 0 : Jl * Math.max(0, E.dof ?? 1)),
        (k.dof.focusD = r.D),
        (k.dof.near = r.near),
        (k.dof.far = r.far),
        (k.dof.ortho = r.cal));
      let A = this.overlay.uniforms;
      if (
        ((k.glow.tex = A.uGlow.value),
        (k.glow.on = A.uGlowOn.value > 0),
        (k.bloom = this.cal ? 0 : ee.bloom * eu),
        (k.mips = p.bloomMips),
        (k.ca = !this.cal && ee.ca && i.caAmt > 0.01 ? i.caAmt * 0.014 : 0),
        l)
      )
        (l.tint && su(l.tint, this.tint),
          (k.tintA = l.tint ? l.tintA : 0),
          (k.night = this.cal ? 0 : l.night),
          l.grade
            ? su(l.grade.tint, this.grade).lerp(tu, 1 - l.grade.alpha)
            : this.grade.copy(tu));
      else {
        let t = b[e.region];
        (t && su(t.tint, this.tint),
          (k.tintA = t ? $l : 0),
          (k.night = this.cal ? 0 : e.dark),
          this.grade.copy(tu));
      }
      let te = 1 - Math.min(1, (l ? l.dark : e.dark) / 0.5),
        ne = l ? mo.ao * defaultToggles.ao : mo.ao;
      return (
        (k.atmos =
          this.cal || f === `minimal`
            ? null
            : {
                lit: m,
                M: t.cam.M,
                eye: t.cam.eye,
                ao: ne,
                rays: u ? mo.rays * (l ? defaultToggles.rays : 1) * te : 0,
                steps: f === `high` ? 20 : f === `medium` ? 14 : 8,
                time: this.host.time,
              }),
        this.post.render(
          n,
          t.target.texture,
          t.target.depthTexture,
          t.fxTarget.texture,
          k,
          t.timer,
        ),
        !0
      );
    }
    sky(e, t, n) {
      let r = this.lit,
        i = !e || e.sun,
        a = Math.min(1, Math.max(0, e ? e.dark : t));
      ((r.uAmb.value = i ? 0.5 : 1),
        (r.uSun.value = i ? 0.5 : 0),
        (r.uMoon.value = i ? 0.12 : 0));
      let o = i ? rt : nu;
      (r.uNight.value.setRGB(o[0], o[1], o[2]),
        i
          ? r.uLift.value.setRGB(0, 0, 0)
          : r.uLift.value.setRGB(NIGHT_FOG[0] * a, NIGHT_FOG[1] * a, NIGHT_FOG[2] * a),
        this.lights.sky(e ? e.dark : t, n));
    }
    clearOf(e) {
      let t = e.sun ? 0 : Math.min(1, Math.max(0, e.dark)),
        n = (e, n) => (e / 255) * (1 - t) + n * t;
      return this.clear.setRGB(
        n((e.bg >> 16) & 255, NIGHT_FOG[0]),
        n((e.bg >> 8) & 255, NIGHT_FOG[1]),
        n(e.bg & 255, NIGHT_FOG[2]),
        Ee,
      );
    }
    fog(e, t, n) {
      let r = this.lit,
        i = this.core.cam;
      (r.uEye.value.copy(i.eye), (r.uFocusD.value = i.D));
      let a = Yl[e.region] ?? Xl;
      (su(a.col, r.uFogCol.value).lerp(Ql, Math.min(1, e.dark / 0.82)),
        (r.uFogDen.value = this.cal || t ? 0 : a.den),
        (r.uFogH.value = Zl));
      let o = t ? t.dark : e.dark,
        s = this.cal ? 0 : Math.min(1, Math.max(0, o / 0.82));
      (r.uNightFall.value.set(e.me.x, e.me.y, rendererConfig.nightReach, t ? 0 : s),
        r.uCity.value.set(_ * 16 + 8, _e * 16 + 8, rendererConfig.cityR[0], rendererConfig.cityR[1]));
      let c = this.host.time;
      (r.uCloud.value.set(
        this.cal || !n ? 0 : rendererConfig.cloud * (1 - s),
        1 / rendererConfig.cloudSize,
        c * rendererConfig.wind[0],
        c * rendererConfig.wind[1],
      ),
        (r.uSpFogOn.value = 0),
        (r.uSpFogTex.value = r.uSpFogMask.value = getWhiteTexture()));
    }
    supports(e) {
      return !!ru[e] && !this.unsupported.has(e) && !O().off;
    }
    reach() {
      let e = Math.max(1, this.lastW || this.host.viewW),
        t = Math.max(1, this.lastH || this.host.viewH),
        n = (E.theta ?? Wi / q) * q,
        r = (E.fov ?? Gi / q) * q,
        i = `${e}x${t}:${n}:${r}:${this.cal}`;
      if (i !== this.reachKey) {
        this.reachKey = i;
        let a = this.reachCam;
        (a.set(0, 0, e, t, n, r, this.cal), a.aim(0, 0));
        let o = t / 2,
          s = a.toGround(0, 0),
          c = a.toGround(e, 0),
          l = a.toGround(0, t),
          u = a.toGround(e, t);
        this.reachV =
          s && c && l && u
            ? {
                n: o - Math.min(s.y, c.y),
                s: Math.max(l.y, u.y) - o,
                wTop: (c.x - s.x) / 2,
                wBot: (u.x - l.x) / 2,
              }
            : { n: t / 2, s: t / 2, wTop: e / 2, wBot: e / 2 };
      }
      return { ...this.reachV };
    }
    dungeonKit(e) {
      let t = E.dgCut ?? `relief`,
        n = this.kits.get(e);
      return (
        (!n || n.cut !== t) &&
          this.kits.set(
            e,
            (n = { cut: t, key: ms(e, t), relief: (n, r) => ds(e, n, r, t) }),
          ),
        n
      );
    }
    unsupport(e, t, n) {
      this.guard(e, () => {
        throw Error(t, { cause: n });
      });
    }
    spaceReady(e) {
      if (!this.ok) return !1;
      try {
        let t = this.spaceFor(e);
        return ((this.pre = { s: e, sp: t }), !!t && this.ok);
      } catch (e) {
        return (this.fail(`a space's build threw`, e), !1);
      }
    }
    spaceFor(e) {
      if (!this.supports(e.kind)) return null;
      let t =
          this.spaces.find((t) => t.key === e.key && t.kind === e.kind) ?? null,
        n = this.guard(e.kind, () => {
          if (!t) {
            let n = ru[e.kind];
            for (
              t = new Rl(e, n, {
                lit: this.lit,
                overlay: this.overlay.uniforms,
                cam: this.stage.cam,
                renderer: this.core.renderer,
                fog: mt + ht,
                anisotropy: Math.min(
                  4,
                  this.core.renderer.capabilities.getMaxAnisotropy(),
                ),
                time: () => this.host.time,
                scene: this.world,
                camera: this.core.cam,
              }),
                this.world.add(t.root),
                this.spaces.push(t),
                this.stageVariant(!0, !0),
                this.gradeWarm ||
                  ((this.gradeWarm = !0),
                  this.core.renderer
                    .compileAsync(this.post.gradeVariant(), this.post.camera)
                    .catch(() => void 0));
              this.spaces.length > iu;
            )
              this.drop(
                this.spaces.find((e) => e !== t && e !== this.space) ??
                  this.spaces.find((e) => e !== t),
              );
            ((t.seen = this.frameNo), (this.asked = t));
            return;
          }
          let n = this.spaces.indexOf(t);
          (n < this.spaces.length - 1 &&
            this.spaces.push(...this.spaces.splice(n, 1)),
            (t.seen = this.frameNo),
            (this.asked = t),
            t.set(e),
            t.step(ou),
            !this.hazeWarm &&
              t.haze() &&
              ((this.hazeWarm = !0),
              this.core.renderer
                .compileAsync(this.post.hazeVariant(), this.post.camera)
                .catch(() => void 0)));
        }),
        r = t;
      return n ? (r?.ready ? r : this.standIn(e, r)) : null;
    }
    standIn(e, t) {
      let n = this.space;
      if (
        !e.place ||
        !n ||
        n === t ||
        !n.ready ||
        n.kind !== e.kind ||
        n.place !== e.place ||
        !this.spaces.includes(n)
      )
        return null;
      let r = this.spaces.indexOf(n);
      return (
        r < this.spaces.length - 1 &&
          this.spaces.push(...this.spaces.splice(r, 1)),
        (n.seen = this.frameNo),
        n.set(e),
        n
      );
    }
    stageVariant(e, t = !1) {
      this.stage.root.traverse((n) => {
        let r = n.material;
        if (r)
          for (let n of Array.isArray(r) ? r : [r]) {
            if (!isHdFogMaterial(n)) continue;
            let r = !!n.defines && `HD_SPACE` in n.defines;
            ((t || r !== e) && !this.twinned.has(n) && this.twins(n),
              t || setHdSpace(n, e));
          }
      });
    }
    twins(e) {
      this.twinned.add(e);
      let t = new qe(),
        n = new L();
      for (let r of [!1, !0]) {
        let i = { ...e.defines };
        r ? (i[HD_SPACE] = 1) : delete i[HD_SPACE];
        let a = new H({
            glslVersion: e.glslVersion,
            vertexShader: e.vertexShader,
            fragmentShader: e.fragmentShader,
            defines: i,
            uniforms: e.uniforms,
          }),
          o = new I(n, a);
        ((o.frustumCulled = !1), t.add(o), this.twinMats.push(a));
      }
      this.core.renderer.compileAsync(t, this.core.cam).catch(() => void 0);
    }
    idle(e) {
      for (let t of this.spaces)
        t !== e &&
          t.kind === `dungeon` &&
          this.frameNo - t.seen > au &&
          this.drop(t);
    }
    drop(e) {
      let t = this.spaces.indexOf(e);
      (t >= 0 && this.spaces.splice(t, 1),
        this.space === e && (this.space = null),
        this.asked === e && (this.asked = null),
        this.spaceSet[0] === e && (this.spaceSet[0] = this.stage),
        this.pre?.sp === e && (this.pre = null),
        e.dispose());
    }
    guard(e, t) {
      try {
        return (t(), !0);
      } catch (t) {
        (this.unsupported.add(e),
          console.warn(`HD-2D: ${e} spaces back to Classic (they threw):`, t));
        for (let t of this.spaces.filter((t) => t.kind === e)) this.drop(t);
        return ((this.lit.uSpFogOn.value = 0), (this.drawnKey = `\0`), !1);
      }
    }
    status() {
      let e = this.core;
      e.timer.until = performance.now() + 2e3;
      let t = e.renderer.info.memory,
        n = this.stage.stats,
        r = this.terrain.stats(),
        i = this.scenery.stats(),
        a = this.space ?? this.asked,
        o = a?.sizes();
      return {
        space:
          a && o
            ? {
                key: a.key,
                kind: a.kind,
                vertices: o.vertices,
                texBytes: o.texBytes,
                buildMs: a.stats.buildMs,
                buildFrames: a.stats.buildFrames,
                ready: a.ready,
              }
            : void 0,
        unsupported: this.unsupported.size ? [...this.unsupported] : void 0,
        state: this.state,
        tier: this.gov.tier,
        k: this.kNow,
        res: { w: e.w, h: e.h },
        out: { w: e.canvas.width, h: e.canvas.height },
        msaa: e.samples,
        fxaa: this.fxaa,
        losses: this.losses,
        gpu: e.gpu,
        software: e.software,
        gpuMs: e.timer.available ? { ...e.timer.ms } : void 0,
        slots: n.slots,
        strips: n.strips,
        uploadBytes:
          n.uploadBytes +
          this.overlay.uploadBytes +
          r.uploadBytes +
          this.particles.uploadBytes,
        residentChunks: r.resident,
        atlasPages: i.atlasPages,
        atlasBytes: i.atlasBytes,
        uniformVec4: 137,
        textures: t.textures,
        geometries: t.geometries,
        memMiB:
          (e.bytes() +
            this.post.bytes() +
            r.resident * 512 * 512 * 4 * 1.34 +
            i.atlasBytes) /
          (1 << 20),
      };
    }
    onLost() {
      (this.losses++,
        this.state !== `classic` && (this.state = `lost`),
        this.fx3d?.layer.setLost(!0));
    }
    onRestored() {
      let e = this.fx3d.layer;
      if (
        (e.setLost(!1),
        e.invalidateSize(),
        this.failed || this.losses >= 2 || this.state === `classic`)
      ) {
        ((this.state = `classic`), this.release());
        return;
      }
      try {
        this.rebuild();
      } catch (e) {
        this.fail(`rebuilding after a context loss`, e);
        return;
      }
      this.compile();
    }
    rebuild() {
      (this.core.rebuild(), this.post.rebuild());
      for (let e of this.parts) e !== this.overlay.loose && e.rebuild();
      for (let e of [...this.spaces])
        e.ready ? this.guard(e.kind, () => e.rebuild()) : this.drop(e);
      (this.overlay.rebuild(),
        this.shadows.rebuild(),
        this.shadows.invalidate(),
        this.gov.reset());
    }
    fail(e, t) {
      this.failed ||
        ((this.failed = !0),
        (this.state = `classic`),
        console.warn(`HD-2D off (${e}):`, t),
        this.release());
    }
    release() {
      this.released ||
        ((this.released = !0), queueMicrotask(() => this.freeParts()));
    }
    freeParts() {
      if (!this.partsFreed) {
        this.partsFreed = !0;
        for (let e of this.parts) e !== this.overlay.loose && e.dispose();
        for (let e of this.spaces) e.dispose();
        ((this.spaces = []),
          (this.space = this.asked = null),
          (this.pre = null),
          (this.spaceSet[0] = this.stage));
        for (let e of this.twinMats) e.dispose();
        ((this.twinMats = []),
          this.overlay.dispose(),
          this.shadows.dispose(),
          this.post.dispose(),
          this.core.release());
      }
    }
    dispose() {
      (this.fx3d.layer.dispose(),
        (this.released = !0),
        this.freeParts(),
        this.core.dispose());
    }
  },
  rendererConfig = {
    nightReach: 150,
    cityR: [1440, 1760],
    cloud: 0.3,
    cloudSize: 260,
    wind: [9, 4],
  },
  defaultToggles = { ao: 1, rays: 1 },
  NO_LIGHTS = [];
