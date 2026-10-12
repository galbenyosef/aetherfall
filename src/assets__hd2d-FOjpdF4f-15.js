// assets__hd2d-FOjpdF4f 15 — math
// Lines 4611-5092 of readable/assets__hd2d-FOjpdF4f.pretty.js (statement-aligned).
var Zi = class {
    theta = Wi;
    fov = Gi;
    cal = !1;
    W = 480;
    H = 270;
    D = 1;
    near = 1;
    far = 2;
    camX = 0;
    camY = 0;
    aimX = 0;
    aimY = 0;
    c = Math.cos(Wi);
    s = Math.sin(Wi);
    focus = [0, 0, 0];
    eye = [0, 0, 0];
    back = [0, 0, 0];
    M = qi();
    Minv = qi();
    M0 = qi();
    M0inv = qi();
    P = qi();
    V = qi();
    aimed = !1;
    set(e, t, n, r, i = Wi, a = Gi, o = !1) {
      let s =
        n !== this.W ||
        r !== this.H ||
        i !== this.theta ||
        a !== this.fov ||
        o !== this.cal;
      ((this.camX = e),
        (this.camY = t),
        (this.W = Math.max(1, n)),
        (this.H = Math.max(1, r)),
        (this.cal = o),
        (this.theta = o ? 45 * q : Math.min(80 * q, Math.max(10 * q, i))),
        (this.fov = Math.min(60 * q, Math.max(1 * q, a))),
        (this.c = o ? Math.SQRT1_2 : Math.cos(this.theta)),
        (this.s = o ? Math.SQRT1_2 : Math.sin(this.theta)),
        (this.D = this.H / (2 * Math.tan(this.fov / 2))),
        (this.near = 0.4 * this.D),
        (this.far = 2.2 * this.D),
        this.build(this.M, e, t, !0),
        Yi(this.Minv, this.M),
        (!this.aimed || s) &&
          this.aim(this.aimed ? this.aimX : e, this.aimed ? this.aimY : t));
    }
    aim(e, t) {
      ((this.aimX = e),
        (this.aimY = t),
        (this.aimed = !0),
        this.build(this.M0, e, t, !1),
        Yi(this.M0inv, this.M0));
    }
    build(e, t, n, r) {
      let { W: i, H: a, D: o, c: s, s: c, near: l, far: u } = this,
        d = t + i / 2,
        f = n + a / 2,
        p = f + o * s,
        m = o * c;
      r &&
        ((this.focus[0] = d),
        (this.focus[1] = f),
        (this.focus[2] = 0),
        (this.eye[0] = d),
        (this.eye[1] = p),
        (this.eye[2] = m),
        (this.back[0] = 0),
        (this.back[1] = s),
        (this.back[2] = c));
      let h = this.V.fill(0);
      ((h[0] = 1),
        (h[5] = -c),
        (h[9] = s),
        (h[6] = s),
        (h[10] = c),
        (h[12] = -d),
        (h[13] = c * p - s * m),
        (h[14] = -(s * p + c * m)),
        (h[15] = 1));
      let g = this.P.fill(0);
      if (this.cal)
        ((g[0] = 2 / i),
          (g[5] = 2 / a),
          (g[10] = -2 / (u - l)),
          (g[14] = -(u + l) / (u - l)),
          (g[15] = 1));
      else {
        let e = 1 / Math.tan(this.fov / 2);
        ((g[0] = (e * a) / i),
          (g[5] = e),
          (g[10] = (u + l) / (l - u)),
          (g[14] = (2 * u * l) / (l - u)),
          (g[11] = -1));
      }
      ((g[1] /= s), (g[5] /= s), (g[9] /= s), (g[13] /= s), Ji(e, g, h));
    }
    toScreen(e, t, n = 0) {
      let r = this.M,
        i = r[3] * e + r[7] * t + r[11] * n + r[15],
        a = (r[0] * e + r[4] * t + r[8] * n + r[12]) / i,
        o = (r[1] * e + r[5] * t + r[9] * n + r[13]) / i;
      return { sx: ((a + 1) * this.W) / 2, sy: ((1 - o) * this.H) / 2 };
    }
    toward(e, t, n = 0) {
      let r = this.M;
      if (r[3] * e + r[7] * t + r[11] * n + r[15] > 0.05 * this.D) {
        let r = this.toScreen(e, t, n);
        if (r.sx >= 0 && r.sx <= this.W && r.sy >= 0 && r.sy <= this.H)
          return r;
      }
      return {
        sx: this.W / 2 + (e - this.focus[0]),
        sy: this.H / 2 + (t - this.focus[1]) * (this.s / this.c) - n,
      };
    }
    toGround(e, t) {
      return Xi(this.M0inv, (2 * e) / this.W - 1, 1 - (2 * t) / this.H);
    }
    groundAt(e, t) {
      return Xi(this.Minv, (2 * e) / this.W - 1, 1 - (2 * t) / this.H);
    }
    footprint() {
      let e = 1 / 0,
        t = 1 / 0,
        n = -1 / 0,
        r = -1 / 0;
      for (let [i, a] of [
        [0, 0],
        [this.W, 0],
        [0, this.H],
        [this.W, this.H],
      ]) {
        let o = this.groundAt(i, a) ?? { x: this.camX + i, y: this.camY + a };
        ((e = Math.min(e, o.x)),
          (t = Math.min(t, o.y)),
          (n = Math.max(n, o.x)),
          (r = Math.max(r, o.y)));
      }
      let i = Math.floor(e / 16) * 16,
        a = Math.floor((t - 32) / 16) * 16;
      return {
        gx0: i,
        gy0: a,
        fw: Math.min(Ki, Math.max(16, Math.ceil((n - i) / 16) * 16)),
        fh: Math.min(Ki, Math.max(16, Math.ceil((r + 160 - a) / 16) * 16)),
      };
    }
    depthOf(e, t, n) {
      return (
        this.back[1] * (this.eye[1] - t) + this.back[2] * (this.eye[2] - n)
      );
    }
    linearDepth(e) {
      let { near: t, far: n } = this;
      return this.cal
        ? t + e * (n - t)
        : (2 * n * t) / (n + t - (2 * e - 1) * (n - t));
    }
  },
  Qi = class {
    cam;
    kind = `hd2d`;
    constructor(e) {
      this.cam = e;
    }
    toScreen(e, t, n = 0) {
      return this.cam.toScreen(e, t, n);
    }
    toGround(e, t) {
      return this.cam.toGround(e, t);
    }
    toward(e, t, n = 0) {
      return this.cam.toward(e, t, n);
    }
  },
  $i = `
vec2 ovSharp(vec2 t, vec2 fw) {
  vec2 c = floor(t + 0.5);
  vec2 w = clamp(fw, vec2(1e-4), vec2(1.0));
  return c + clamp((t - c) / w, -0.5, 0.5);
}
`,
  ea = `
uniform sampler2D uGround;
uniform sampler2D uGlow;
uniform vec4 uFp;
uniform vec2 uFpInv;
uniform float uGroundOn;
uniform float uGlowOn;
${$i}
// A sheet's premultiplied texel at world point p (fw = fwidth(p)), clear outside the footprint.
vec4 ovSheet(sampler2D s, float on, vec2 p, vec2 fw) {
  vec2 t = p - uFp.xy;
  vec4 c = textureLod(s, ovSharp(t, fw) * uFpInv, 0.0);
  bool inside = all(greaterThanEqual(t, vec2(0.0))) && all(lessThan(t, uFp.zw));
  return inside ? c * on : vec4(0.0);
}
`,
  ta = [`ground`, `glow`, `loose`, `looseAdd`],
  na = [
    `fill`,
    `stroke`,
    `fillRect`,
    `strokeRect`,
    `fillText`,
    `strokeText`,
    `drawImage`,
    `putImageData`,
  ],
  J = 64,
  ra = 2048,
  ia = 300,
  aa = (e) => Math.min(ra, Math.max(J, Math.ceil(e / J) * J)),
  oa = class {
    additive;
    canvas;
    ctx;
    tex;
    dirty = !1;
    had = !1;
    constructor(e) {
      ((this.additive = e),
        ([this.canvas, this.ctx] = h(J, J)),
        (this.tex = this.makeTex()));
      let t = this.ctx;
      for (let e of na) {
        let n = t[e],
          r = this;
        t[e] = function () {
          return ((r.dirty = !0), n.apply(this, arguments));
        };
      }
    }
    makeTex() {
      let e = new He(this.canvas);
      return (
        (e.flipY = !1),
        (e.premultiplyAlpha = !0),
        (e.generateMipmaps = !1),
        (e.minFilter = e.magFilter = M),
        (e.wrapS = e.wrapT = ze),
        (e.needsUpdate = !1),
        e
      );
    }
    resize(e, t) {
      ((this.canvas.width = e),
        (this.canvas.height = t),
        this.tex.dispose(),
        (this.tex = this.makeTex()),
        (this.had = !1));
    }
    begin() {
      let e = this.ctx;
      (e.setTransform(1, 0, 0, 1, 0, 0),
        (this.had || this.dirty) &&
          e.clearRect(0, 0, this.canvas.width, this.canvas.height),
        (this.had = !1),
        (this.dirty = !1),
        (e.globalAlpha = 1),
        (e.globalCompositeOperation = this.additive
          ? `lighter`
          : `source-over`),
        (e.imageSmoothingEnabled = !1),
        (e.filter = `none`),
        (e.shadowBlur = 0),
        (e.shadowColor = `transparent`),
        (e.lineWidth = 1),
        e.setLineDash([]));
    }
  },
  sa = class {
    uniforms;
    loose;
    sheets;
    w = J;
    h = J;
    small = 0;
    committed = !0;
    out;
    uploadBytes = 0;
    constructor(e) {
      ((this.sheets = {
        ground: new oa(!1),
        glow: new oa(!0),
        loose: new oa(!1),
        looseAdd: new oa(!0),
      }),
        (this.out = {
          ground: this.sheets.ground.ctx,
          glow: this.sheets.glow.ctx,
          loose: this.sheets.loose.ctx,
          looseAdd: this.sheets.looseAdd.ctx,
        }),
        (this.uniforms = {
          uGround: { value: this.sheets.ground.tex },
          uGlow: { value: this.sheets.glow.tex },
          uLoose: { value: this.sheets.loose.tex },
          uLooseAdd: { value: this.sheets.looseAdd.tex },
          uFp: { value: new j(0, 0, J, J) },
          uFpInv: { value: new P(1 / J, 1 / J) },
          uGroundOn: { value: 0 },
          uGlowOn: { value: 0 },
          uLooseOn: { value: 0 },
        }),
        (this.loose = new ua(this, e)));
    }
    begin(e) {
      this.fit(e.fw, e.fh);
      for (let e of ta) this.sheets[e].begin();
      return (
        this.uniforms.uFp.value.set(e.gx0, e.gy0, e.fw, e.fh),
        (this.committed = !1),
        this.out
      );
    }
    fit(e, t) {
      let n = aa(e),
        r = aa(t),
        i = this.w,
        a = this.h;
      if (
        (n > this.w || r > this.h
          ? ((i = Math.max(n, this.w)),
            (a = Math.max(r, this.h)),
            (this.small = 0))
          : n * r * 2 <= this.w * this.h
            ? ++this.small > ia && ((i = n), (a = r), (this.small = 0))
            : (this.small = 0),
        i !== this.w || a !== this.h)
      ) {
        ((this.w = i), (this.h = a));
        for (let e of ta) this.sheets[e].resize(i, a);
        this.bind();
      }
    }
    bind() {
      let e = this.uniforms;
      ((e.uGround.value = this.sheets.ground.tex),
        (e.uGlow.value = this.sheets.glow.tex),
        (e.uLoose.value = this.sheets.loose.tex),
        (e.uLooseAdd.value = this.sheets.looseAdd.tex),
        e.uFpInv.value.set(1 / this.w, 1 / this.h));
    }
    commit() {
      if (this.committed) return 0;
      this.committed = !0;
      let e = 0;
      for (let t of ta) {
        let n = this.sheets[t];
        n.dirty &&
          ((n.tex.needsUpdate = !0), (n.had = !0), (e += this.w * this.h * 4));
      }
      let t = this.uniforms;
      return (
        (t.uGroundOn.value = +!!this.sheets.ground.dirty),
        (t.uGlowOn.value = +!!this.sheets.glow.dirty),
        (t.uLooseOn.value =
          this.sheets.loose.dirty || this.sheets.looseAdd.dirty ? 1 : 0),
        this.loose.show(this.sheets.loose.dirty, this.sheets.looseAdd.dirty),
        (this.uploadBytes = e),
        e
      );
    }
    rebuild() {
      for (let e of ta) {
        let t = this.sheets[e];
        (t.tex.dispose(), (t.tex = t.makeTex()));
      }
      (this.bind(), this.loose.rebuild());
    }
    dispose() {
      for (let e of ta) this.sheets[e].tex.dispose();
      this.loose.dispose();
    }
  },
  ca = `${B}
in vec3 position;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform vec4 uFp;
out vec2 vP;
void main() {
  vP = uFp.xy + position.xy * uFp.zw;
  gl_Position = projectionMatrix * viewMatrix * vec4(vP, 0.0, 1.0);
}
`,
  la = `${B}
${lt}
${ut}
${$i}
in vec2 vP; out vec4 o;
uniform sampler2D uSheet;
uniform vec4 uFp;
uniform vec2 uFpInv;
uniform float uAdd;
uniform float uUnlit;
void main() {
  vec2 t = vP - uFp.xy;
  vec4 c = textureLod(uSheet, ovSharp(t, fwidth(t)) * uFpInv, 0.0);
  if (c.a < 0.5 / 255.0) discard;
  // the loose sheet is lit as Classic darkens it before its light; the added one is light itself (and
  // down a dungeon the loose one too: what's left on it there Classic draws after its light)
  if (uAdd > 0.5) o = vec4(c.rgb, 0.0);
  else if (uUnlit > 0.5) o = c;
  else o = vec4(c.rgb * hdLight(vec3(vP, 0.0), vec3(0.0, 0.0, 1.0)), c.a);
}
`,
  ua = class {
    overlay;
    lit;
    root = new F();
    geo;
    meshes = [];
    on = [!0, !0];
    unlit = { value: 0 };
    constructor(e, t) {
      ((this.overlay = e), (this.lit = t), (this.geo = da()), this.build());
    }
    build() {
      let e = this.overlay.uniforms,
        t = (t, n) => {
          let r = new H({
              glslVersion: W,
              vertexShader: ca,
              fragmentShader: la,
              uniforms: {
                ...this.lit,
                uSheet: t ? e.uLooseAdd : e.uLoose,
                uFp: e.uFp,
                uFpInv: e.uFpInv,
                uAdd: { value: +!!t },
                uUnlit: this.unlit,
              },
              transparent: !0,
              depthTest: !1,
              depthWrite: !1,
              side: 2,
              blending: 5,
              blendEquation: 100,
              blendSrc: 201,
              blendDst: t ? 201 : 205,
              blendSrcAlpha: 200,
              blendDstAlpha: 201,
            }),
            i = new I(this.geo, r);
          return (
            (i.frustumCulled = !1),
            (i.renderOrder = n),
            (i.visible = !1),
            (i.matrixAutoUpdate = !1),
            i
          );
        };
      this.meshes = [t(!1, 100), t(!0, 101)];
      for (let e of this.meshes) this.root.add(e);
      this.show(this.on[0], this.on[1]);
    }
    show(e, t) {
      ((this.on = [e, t]),
        (this.meshes[0].visible = e),
        (this.meshes[1].visible = t));
    }
    update(e) {
      ((this.unlit.value = +(e.f.space?.kind === `dungeon`)),
        this.overlay.commit());
    }
    casters() {
      return [];
    }
    rebuild() {
      for (let e of this.meshes) (this.root.remove(e), e.material.dispose());
      (this.geo.dispose(), (this.geo = da()), this.build());
    }
    dispose() {
      for (let e of this.meshes) e.material.dispose();
      this.geo.dispose();
    }
  };
