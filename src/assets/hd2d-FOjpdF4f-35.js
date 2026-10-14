// hd2d-FOjpdF4f 35 — root
// Lines 10653-11174 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
var Rl = class {
    make;
    o;
    root = new F();
    kind;
    key;
    place;
    stats = { buildMs: 0, buildFrames: 0, maxStepMs: 0 };
    seen = 0;
    stage = `source`;
    input;
    src = null;
    atlas = null;
    floor = null;
    solids = null;
    props = null;
    extras = [];
    capsTex = null;
    fogTex = null;
    maskTex = null;
    hazeTex = null;
    hazeRect = new j();
    frames = [];
    fp = { gx0: 0, gy0: 0, fw: 0, fh: 0 };
    compiling = null;
    compiled = !1;
    waited = 0;
    compileT0 = 0;
    constructor(e, t, n) {
      ((this.make = t),
        (this.o = n),
        (this.input = e),
        (this.kind = e.kind),
        (this.key = e.key),
        (this.place = e.place),
        (this.root.name = `hd2d-space-${e.kind}`),
        (this.root.matrixAutoUpdate = !1),
        (this.root.visible = !1));
    }
    get ready() {
      return this.stage === `ready`;
    }
    get bounds() {
      return this.src?.bounds ?? null;
    }
    set(e) {
      this.input = e;
    }
    step(e) {
      if (this.stage === `ready`) return !0;
      let t = performance.now(),
        n = () => e - (performance.now() - t);
      for (; !this.ready && n() > 0 && this.advance(n()););
      let r = performance.now() - t;
      return (
        (this.stats.buildMs += r),
        this.stats.buildFrames++,
        (this.stats.maxStepMs = Math.max(this.stats.maxStepMs, r)),
        this.ready
      );
    }
    advance(e) {
      let t = this.o;
      switch (this.stage) {
        case `source`:
          return (
            (this.src = this.make(this.input)),
            (this.stage = `prepare`),
            !1
          );
        case `prepare`:
          return (
            (this.src.prepare && !this.src.prepare(e)) ||
              (this.stage = `atlas`),
            !0
          );
        case `atlas`: {
          let e = this.src,
            t = new TextureAtlas(),
            n = !1;
          for (let r of e.props)
            (r.frames ? t.wantFrames(r.frames) : t.want(r.c), (n = !0));
          for (let r of e.solids) (t.want(r.it.c), (n = !0));
          for (let r of e.boxes)
            (r.tex && t.want(r.tex),
              r.capTex && t.want(r.capTex),
              r.sectionTex && t.want(r.sectionTex),
              (n = n || !!r.tex || !!r.capTex || !!r.sectionTex));
          return (
            n && (t.pack(), (this.atlas = t)),
            (this.stage = `floor`),
            !0
          );
        }
        case `floor`:
          if (!this.floor) {
            let e = this.src;
            return (
              (this.frames = this.groundOf(e.floor.frames)),
              (this.floor = new _l(
                { ...e.floor, frames: this.frames },
                {
                  lit: t.lit,
                  overlay: t.overlay,
                  fog: t.fog,
                  bg: this.input.look.bg,
                  anisotropy: t.anisotropy,
                  renderer: t.renderer,
                },
              )),
              this.root.add(this.floor.root),
              !0
            );
          }
          return this.floor.pending() > 0
            ? (this.floor.step(), !0)
            : this.floor.ready
              ? ((this.stage = `faces`), !0)
              : !1;
        case `faces`: {
          let e = this.src;
          return (
            (this.solids = new Ol(e, this.atlas, {
              lit: t.lit,
              fog: t.fog,
              bg: this.input.look.bg,
            })),
            this.solids.buildCpu(),
            (this.stage = `gpu`),
            !0
          );
        }
        case `gpu`: {
          let e = this.src,
            n = t.renderer;
          if (this.atlas) {
            this.atlas.buildGpu();
            for (let e of this.atlas.textures) n.initTexture(e);
          }
          (e.caps && ((this.capsTex = Pl(e.caps)), n.initTexture(this.capsTex)),
            this.solids.buildGpu(Ll(this.floor), this.capsTex),
            this.root.add(this.solids.root),
            e.props.length &&
              this.atlas &&
              ((this.props = new vi(e.props, this.atlas, {
                lit: t.lit,
                cam: t.cam,
              })),
              this.props.buildGpu(),
              this.root.add(this.props.root)),
            e.fog &&
              ((this.fogTex = Pl(e.fog.tex)),
              (this.fogTex.wrapS = this.fogTex.wrapT = Fe),
              (this.maskTex = e.fog.mask
                ? Fl(e.fog.mask, e.fog.cols, e.fog.rows)
                : null)),
            (this.hazeTex = this.hazeOf(e)),
            (this.extras = e.extras?.(t.lit) ?? []));
          for (let e of this.extras) this.root.add(e.root);
          return (this.variants(), (this.stage = `compile`), !0);
        }
        case `compile`:
          if (!this.compiling) {
            this.compileT0 = performance.now();
            let e = this.root.visible;
            this.root.visible = !0;
            try {
              this.compiling = this.o.renderer
                .compileAsync(this.root, this.o.camera, this.o.scene)
                .catch(() => void 0)
                .then(() => {
                  this.compiled = !0;
                });
            } catch {
              this.compiled = !0;
            } finally {
              this.root.visible = e;
            }
          }
          return !this.compiled &&
            (this.waited++ < Nl || performance.now() - this.compileT0 < Ml)
            ? !1
            : ((this.stage = `ready`), !0);
        default:
          return !1;
      }
    }
    groundOf(e) {
      let t = this.input;
      return t.kind === `dungeon`
        ? t.ready
          ? t.ground
          : t.ground.map((e, t) => (t === 0 ? e : null))
        : e;
    }
    update(e) {
      let t = this.floor,
        n = this.input;
      if (t) {
        if (n.kind === `dungeon`) {
          let e = this.groundOf(this.frames),
            r = e.length !== this.frames.length;
          for (let t = 0; !r && t < e.length; t++) r = e[t] !== this.frames[t];
          (r && ((this.frames = e), t.setFrames(this.frames)),
            t.pending() > 0 && t.step(),
            t.phase(n.gp));
        }
        (t.setBg(n.look.bg), t.update(e), this.solids?.setFloor(Ll(t)));
      }
      if (((this.fp = e.f.fp), this.solids?.update(e), this.props)) {
        let t = e.f.fp;
        this.props.update(
          this.o.time(),
          (e, n, r, i, a) =>
            r >= t.gx0 &&
            e <= t.gx0 + t.fw &&
            i >= t.gy0 &&
            n <= t.gy0 + t.fh + Math.max(a, Al),
        );
      }
      for (let t of this.extras) t.update(e);
      this.fog(n);
    }
    hazeOf(e) {
      let t = e.haze;
      if (!t) return null;
      let n = Fl(t.mask, t.cols, t.rows);
      return (
        (n.magFilter = n.minFilter = M),
        this.hazeRect.set(e.floor.x, e.floor.y, t.cols * 16, t.rows * 16),
        n
      );
    }
    haze() {
      return this.hazeTex ? { mask: this.hazeTex, rect: this.hazeRect } : null;
    }
    fog(e) {
      let t = this.o.lit,
        n = this.src?.fog;
      if (!n || !this.fogTex) {
        t.uSpFogOn.value = 0;
        return;
      }
      let r = e.kind === `dungeon` ? e.phase : 0;
      ((t.uSpFogOn.value = 1),
        (t.uSpFogTex.value = this.fogTex),
        (t.uSpFogMask.value = this.maskTex ?? getWhiteTexture()));
      let i = this.src.floor;
      (this.maskTex
        ? t.uSpFogRect.value.set(i.x, i.y, n.cols * 16, n.rows * 16)
        : t.uSpFogRect.value.set(-1e6, -1e6, 2e6, 2e6),
        t.uSpFogOff.value.set(
          Math.round(n.speed[0] * r * 8),
          Math.round(n.speed[1] * r * 8),
        ),
        (t.uSpFogA.value = n.alpha));
    }
    casters(e) {
      let t = [];
      if (e === `dynamic`) {
        for (let e of this.extras) t.push(...e.casters(`dynamic`));
        return t;
      }
      this.solids?.casters(t);
      let n = this.fp;
      this.props?.meshes(
        (e, t, r, i) =>
          r >= n.gx0 - jl &&
          e <= n.gx0 + n.fw + jl &&
          i >= n.gy0 - jl &&
          t <= n.gy0 + n.fh + jl,
        t,
      );
      for (let e of this.extras) t.push(...e.casters(`static`));
      return t;
    }
    sizes() {
      let e = this.floor?.stats(),
        t = this.solids?.stats().vertices ?? 0,
        n = this.src?.caps,
        r = this.src?.fog;
      return {
        vertices: (e?.vertices ?? 0) + t,
        texBytes:
          (e?.texBytes ?? 0) +
          (this.solids?.texBytes ?? 0) +
          (n ? n.width * n.height * 4 : 0) +
          (this.atlas?.bytes ?? 0) +
          (r ? r.tex.width * r.tex.height * 4 + (r.mask?.length ?? 0) : 0),
      };
    }
    rebuild() {
      if (
        (this.floor?.rebuild(),
        this.capsTex?.dispose(),
        (this.capsTex = this.src?.caps ? Pl(this.src.caps) : null),
        this.atlas &&
          (this.props?.disposeGpu(),
          this.solids?.disposeGpu(),
          this.atlas.buildGpu()),
        this.solids?.buildGpu(this.floor ? Ll(this.floor) : null, this.capsTex),
        this.props?.buildGpu(),
        this.fogTex)
      ) {
        let e = this.src.fog;
        (this.fogTex.dispose(),
          (this.fogTex = Pl(e.tex)),
          (this.fogTex.wrapS = this.fogTex.wrapT = Fe),
          this.maskTex?.dispose(),
          (this.maskTex = e.mask ? Fl(e.mask, e.cols, e.rows) : null));
      }
      (this.hazeTex?.dispose(),
        (this.hazeTex = this.src ? this.hazeOf(this.src) : null));
      for (let e of this.extras) e.rebuild();
      this.variants();
    }
    variants() {
      for (let e of [this.floor?.root, this.solids?.root, this.props?.root])
        e && Il(e);
    }
    dispose() {
      (this.floor?.dispose(),
        this.solids?.dispose(),
        this.props?.disposeGpu(),
        this.atlas?.disposeGpu(),
        this.capsTex?.dispose(),
        this.fogTex?.dispose(),
        this.maskTex?.dispose(),
        this.hazeTex?.dispose());
      for (let e of this.extras) e.dispose();
      (this.root.removeFromParent(),
        (this.floor = null),
        (this.solids = null),
        (this.props = null),
        (this.extras = []),
        (this.src = null),
        (this.atlas = null),
        (this.frames = []),
        (this.capsTex = this.fogTex = this.maskTex = this.hazeTex = null),
        (this.input = {
          kind: this.kind,
          key: this.key,
          look: this.input.look,
        }));
    }
  },
  zl = 110,
  Bl = `${B}
in vec3 position;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform vec4 uRect;  // x0, y (the row it stands on), w, unused
uniform vec2 uZ;     // bottom, top
uniform vec3 uBack;
out vec3 vP;
out vec2 vUv;
void main() {
  vec3 P = vec3(uRect.x + position.x * uRect.z, uRect.y, mix(uZ.x, uZ.y, position.y));
  vec4 c = projectionMatrix * viewMatrix * vec4(P, 1.0);
  // depth from a little toward the camera, so a foot on the ground isn't cut by it
  vec4 cd = projectionMatrix * viewMatrix * vec4(P + uBack * 2.0, 1.0);
  vP = P;
  vUv = vec2(position.x, 1.0 - position.y);
  gl_Position = vec4(c.xy, clamp(cd.z / cd.w, -1.0, 1.0) * c.w, c.w);
}
`,
  Vl = `${B}
${mt}
${ht}
${$i}
in vec3 vP;
in vec2 vUv;
uniform sampler2D uMap;
uniform vec2 uSize;    // the sprite, px (0: a solid strip)
uniform vec3 uColor;
uniform float uA;
uniform float uAdd;
out vec4 o;
void main() {
  vec4 c = vec4(uColor, 1.0);
  if (uSize.x > 0.0) {
    vec2 t = vUv * uSize;
    c = textureLod(uMap, ovSharp(t, fwidth(t)) / uSize, 0.0);
  }
  c *= uA;
  if (c.a < 0.5 / 255.0 && max(c.r, max(c.g, c.b)) < 0.5 / 255.0) discard;
  // added: light, the DoF mask (alpha) left alone; over: premultiplied, unlit as Classic's is
  if (uAdd > 0.5) o = vec4(hdFog(vec3(0.0), c.rgb, vP), 0.0);
  else o = vec4(mix(c.rgb, uFogCol * c.a, hdFogAmt(vP)), c.a);
}
`,
  Hl = class {
    mesh;
    canvas = null;
    ctx = null;
    tex = null;
    constructor(e, t, n, r) {
      let i = new H({
        glslVersion: W,
        vertexShader: Bl,
        fragmentShader: Vl,
        uniforms: {
          ...t,
          uBack: n,
          uRect: { value: new j() },
          uZ: { value: new P() },
          uMap: { value: null },
          uSize: { value: new P() },
          uColor: { value: new z() },
          uA: { value: 1 },
          uAdd: { value: 1 },
        },
        transparent: !0,
        depthTest: !0,
        depthWrite: !1,
        side: 2,
        blending: 5,
        blendEquation: 100,
        blendSrc: 201,
        blendDst: 201,
        blendSrcAlpha: 200,
        blendDstAlpha: 201,
      });
      ((this.mesh = new I(e, i)),
        (this.mesh.frustumCulled = !1),
        (this.mesh.matrixAutoUpdate = !1),
        (this.mesh.renderOrder = r));
    }
    set(e) {
      let t = this.mesh.material,
        n = t.uniforms;
      (n.uRect.value.set(e.x0, e.y, e.w, 0),
        n.uZ.value.set(e.z0, e.z1),
        (n.uA.value = Math.min(Math.max(e.a, 0), 1)),
        (n.uAdd.value = +!!e.add),
        (t.blendDst = e.add ? 201 : 205));
      let r = n.uSize.value;
      if (e.img)
        ((n.uMap.value = this.copy(e.img)), r.set(e.img.width, e.img.height));
      else {
        r.set(0, 0);
        let [t, i, a] = _a(e.color ?? `#ffffff`);
        n.uColor.value.setRGB(t, i, a, Ee);
      }
    }
    copy(e) {
      if (
        !this.canvas ||
        this.canvas.width !== e.width ||
        this.canvas.height !== e.height
      ) {
        (this.tex?.dispose(),
          (this.canvas ??= document.createElement(`canvas`)),
          (this.canvas.width = e.width),
          (this.canvas.height = e.height),
          (this.ctx = this.canvas.getContext(`2d`)));
        let t = new He(this.canvas);
        ((t.flipY = !1),
          (t.premultiplyAlpha = !0),
          (t.generateMipmaps = !1),
          (t.minFilter = t.magFilter = M),
          (t.wrapS = t.wrapT = ze),
          (this.tex = t));
      }
      let t = this.ctx;
      return !t || !this.tex
        ? null
        : (t.clearRect(0, 0, e.width, e.height),
          t.drawImage(e, 0, 0),
          (this.tex.needsUpdate = !0),
          this.tex);
    }
    dispose() {
      (this.tex?.dispose(),
        (this.tex = null),
        (this.canvas = null),
        (this.ctx = null),
        this.mesh.material.dispose());
    }
  },
  Ul = class {
    lit;
    root = new F();
    geo = Wl();
    slots = [];
    back = { value: new V(0, Math.cos(0.61), Math.sin(0.61)) };
    constructor(e) {
      ((this.lit = e),
        (this.root.matrixAutoUpdate = !1),
        (this.slot(0).mesh.visible = !0));
    }
    slot(e) {
      for (; this.slots.length <= e;) {
        let e = new Hl(this.geo, this.lit, this.back, zl + this.slots.length);
        ((e.mesh.visible = !1), this.slots.push(e), this.root.add(e.mesh));
      }
      return this.slots[e];
    }
    update(e) {
      this.back.value.copy(e.cam.back);
      let t = e.f.uprights ?? [],
        n = 0;
      for (let e of t) {
        if (e.z1 <= e.z0 || e.w <= 0 || e.a <= 0) continue;
        let t = this.slot(n++);
        (t.set(e), (t.mesh.visible = !0));
      }
      for (let e = n; e < this.slots.length; e++)
        this.slots[e].mesh.visible = !1;
    }
    casters() {
      return [];
    }
    rebuild() {
      for (let e of this.slots) (this.root.remove(e.mesh), e.dispose());
      ((this.slots = []), this.geo.dispose(), (this.geo = Wl()));
    }
    dispose() {
      for (let e of this.slots) e.dispose();
      this.geo.dispose();
    }
  };
