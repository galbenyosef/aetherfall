// hd2d-FOjpdF4f 31 — the
// Lines 9642-9977 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
var ul = class {
    host;
    root = new F();
    ground = new ge([]);
    lava;
    lru = new al(16);
    u;
    geo;
    frag;
    meshes = Array($ * tl).fill(null);
    tex = Array($ * tl).fill(null);
    shown = new Set();
    water = null;
    frame = 0;
    vis = [];
    ahead = [];
    prev = { x: NaN, y: NaN };
    vel = { x: 0, y: 0 };
    aniso;
    bytes = 0;
    pool = new Mc();
    constructor(e, t) {
      ((this.host = e),
        (this.lava = new el()),
        (this.aniso = Math.max(1, t.anisotropy ?? 1)),
        (this.frag = cl(t.fog ?? il)),
        (this.u = {
          ...t.lit,
          ...t.overlay,
          uKind: { value: this.lava.tex },
          uWater: { value: null },
          uWaterSz: { value: new j(1, 1, 0, 0) },
          uGTime: { value: 0 },
          uLive: { value: 0 },
          uCal: { value: 0 },
          uSpec: { value: 1 },
          uLodK: { value: 1 },
          uTDens: { value: new P(1, 1) },
          uLavaGlow: { value: 1 },
          uLavaBank: { value: 1 },
          uHeat: { value: this.lava.heatTex },
          ...this.pool.uniforms,
          uTEye: { value: new V() },
        }),
        (this.geo = new L()),
        this.geo.setAttribute(
          `position`,
          new U(
            new Float32Array([0, 0, 0, 512, 0, 0, 512, 512, 0, 0, 512, 0]),
            3,
          ),
        ),
        this.geo.setIndex([0, 1, 2, 0, 2, 3]),
        (this.geo.boundingSphere = new Te(new V(256, 256, 0), 512)),
        (this.root.matrixAutoUpdate = !1),
        (this.mesh(0).visible = !0),
        this.shown.add(0));
    }
    ensureWater() {
      if (this.water) return;
      let e = he();
      if (!e) return;
      let n = { frames: e },
        r = n.frames[0].width,
        i = n.frames[0].height,
        [a, o] = h(r * n.frames.length, i);
      n.frames.forEach((e, t) => o.drawImage(e, t * r, 0));
      let s = new He(a);
      ((s.flipY = !1),
        (s.generateMipmaps = !1),
        (s.minFilter = s.magFilter = R),
        (s.needsUpdate = !0),
        (this.water = { tex: s, frames: n.frames.length }),
        (this.u.uWater.value = s),
        this.u.uWaterSz.value.set(r, i, 0, 1),
        (this.u.uTDens.value.y = t(n.frames[0])));
    }
    mesh(e) {
      let t = this.meshes[e];
      if (t) return t;
      let n = e % $,
        r = (e - n) / $,
        i = new H({
          glslVersion: W,
          vertexShader: sl,
          fragmentShader: this.frag,
          uniforms: {
            ...this.u,
            uMap: { value: null },
            uOrigin: { value: new P(n * 512, r * 512) },
          },
          side: 2,
          depthTest: !0,
          depthWrite: !0,
          blending: 0,
        }),
        a = new I(this.geo, i);
      return (
        a.position.set(n * 512, r * 512, 0),
        (a.matrixAutoUpdate = !1),
        a.updateMatrix(),
        a.updateMatrixWorld(!0),
        (a.visible = !1),
        (a.renderOrder = 10),
        this.root.add(a),
        (this.meshes[e] = a),
        a
      );
    }
    load(e) {
      let n = e % $,
        r = (e - n) / $,
        i = this.ground.chunkCanvas(n, r);
      this.u.uTDens.value.x = t(i);
      let a = ll(i, this.aniso);
      return (
        (this.tex[e] = a),
        (this.mesh(e).material.uniforms.uMap.value = a),
        1398101
      );
    }
    unload(e) {
      (this.tex[e]?.dispose(), (this.tex[e] = null));
      let t = this.meshes[e];
      (t && ((t.material.uniforms.uMap.value = null), (t.visible = !1)),
        this.shown.delete(e));
    }
    aheadOf(e) {
      let t = e.cam.focus.x,
        n = e.cam.focus.y,
        r = this.prev,
        i = t - r.x,
        a = n - r.y,
        o = Number.isNaN(r.x);
      if (((r.x = t), (r.y = n), (this.ahead.length = 0), o)) return this.ahead;
      if (Math.hypot(i, a) > 64)
        return ((this.vel.x = this.vel.y = 0), this.ahead);
      ((this.vel.x = this.vel.x * 0.8 + i * 0.2),
        (this.vel.y = this.vel.y * 0.8 + a * 0.2));
      let s = Math.hypot(this.vel.x, this.vel.y);
      if (s < 0.25) return this.ahead;
      let c = Math.min(rl, s * 45),
        l = (this.vel.x / s) * c,
        u = (this.vel.y / s) * c,
        d = e.f.fp,
        f = t + l,
        p = n + u,
        m = (e) =>
          Math.hypot(
            ((e % $) + 0.5) * 512 - f,
            (Math.floor(e / $) + 0.5) * 512 - p,
          );
      for (let e of ol(d.gx0 + l, d.gy0 + u, d.fw, d.fh)) {
        if (this.lru.has(e) || this.vis.includes(e)) continue;
        let t = e % $;
        this.ground.chunkCanvas(t, (e - t) / $, !1) && this.ahead.push(e);
      }
      return this.ahead.sort((e, t) => m(e) - m(t));
    }
    update(e) {
      (this.frame++,
        this.frame % 3 == 0 && this.ground.warm(e.f.me.x, e.f.me.y),
        this.ensureWater());
      let t = this.u,
        n = this.host.time;
      if (((t.uGTime.value = n), this.water)) {
        let e = this.water.frames;
        t.uWaterSz.value.z = ((Math.floor(n * nl) % e) + e) % e;
      }
      ((t.uLive.value = +!!D()),
        (t.uCal.value = +!!e.cam.cal),
        (t.uSpec.value = +(e.tier === `high` || e.tier === `medium`)),
        (t.uLodK.value =
          e.tier === `low` || e.tier === `minimal` ? Math.SQRT2 : 1),
        t.uTEye.value.copy(e.cam.eye));
      let r = e.f.fp;
      (ol(r.gx0, r.gy0, r.fw, r.fh, this.vis),
        (this.lru.cap = Math.max(1, e.spec.chunks)));
      let { load: i, evict: a } = this.lru.plan(
          this.vis,
          this.aheadOf(e),
          this.frame,
        ),
        o = 0;
      for (let e of a) this.unload(e);
      for (let e of i) o += this.load(e);
      this.bytes = o;
      for (let e of this.shown) {
        if (this.vis.includes(e)) continue;
        let t = this.meshes[e];
        (t && (t.visible = !1), this.shown.delete(e));
      }
      for (let e of this.vis)
        this.tex[e] && ((this.mesh(e).visible = !0), this.shown.add(e));
      (this.lava.embers(r, this.host.particles),
        this.pool.fill(
          e.f.lights2d,
          r.gx0,
          r.gy0,
          e.cam.focus.x,
          e.cam.focus.y,
        ),
        this.pool.subs(e.lit, this.lava.last));
    }
    stats() {
      return { resident: this.lru.size, uploadBytes: this.bytes };
    }
    casters() {
      return [];
    }
    rebuild() {
      for (let e = 0; e < this.tex.length; e++) this.tex[e] && this.unload(e);
      (this.lru.clear(),
        this.lava.rebuild(),
        (this.u.uKind.value = this.lava.tex),
        (this.u.uHeat.value = this.lava.heatTex),
        this.pool.rebuild(),
        this.water &&
          (this.water.tex.dispose(),
          (this.water = null),
          (this.u.uWater.value = null),
          (this.u.uWaterSz.value.w = 0)),
        this.ensureWater());
    }
    dispose() {
      for (let e of this.tex) e?.dispose();
      (this.tex.fill(null), this.lru.clear());
      for (let e of this.meshes) e?.material.dispose();
      (this.water?.tex.dispose(),
        this.geo.dispose(),
        this.lava.dispose(),
        this.pool.dispose(),
        (this.ground = new ge([])));
    }
  },
  dl = `${B}
in vec3 position;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
out vec3 vP;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vP = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,
  fl = (e, t) => `${B}
${lt}
${ut}
${wc}
${Tc}
${ea}
${e}
in vec3 vP; out vec4 o;
uniform sampler2D uMap;
uniform vec4 uRect;        // the floor's origin and size, world px
uniform vec2 uFDens;       // texels per world px: the floor's, the skirt's (src/game/density.ts)
uniform sampler2D uSkirt;
uniform vec4 uSkRect;      // the skirt's
uniform float uSkirtOn;
uniform vec3 uBg;          // Classic's fill behind the art
uniform float uCal;        // the calibration camera: exactly Classic's ground, nothing added
uniform float uLodK;       // the mip bias, as a gradient scale

// a canvas's premultiplied texel at world point p (fw = fwidth(p)), clear outside its rectangle; d its texels per px
vec4 flTexel(sampler2D m, vec4 r, float d, vec2 p, vec2 fw) {
  vec2 t = p - r.xy;
  vec4 c = textureGrad(m, ovSharp(t * d, fw * d) / (r.zw * d), dFdx(t) * (uLodK / r.zw), dFdy(t) * (uLodK / r.zw));
  bool inside = all(greaterThanEqual(t, vec2(0.0))) && all(lessThan(t, r.zw));
  return inside ? c : vec4(0.0);
}

void main() {
  vec2 P = vP.xy;
  vec2 fw = fwidth(P);
  vec4 fl = flTexel(uMap, uRect, uFDens.x, P, fw);
  vec4 sk = flTexel(uSkirt, uSkRect, uFDens.y, P, fw) * uSkirtOn;
  vec4 gr = ovSheet(uGround, uGroundOn, P, fw);
  vec4 gl = ovSheet(uGlow, uGlowOn, P, fw);
  // the floor over the skirt over Classic's fill; the ground sheet is paint on it (lit with it)
  vec3 alb = fl.rgb + (sk.rgb + uBg * (1.0 - sk.a)) * (1.0 - fl.a);
  alb = alb * (1.0 - gr.a) + gr.rgb;
  vec3 emis = vec3(0.0);
  // how far into the night (Classic's darkness tops out at 0.82)
  float nightK = clamp(uDark / 0.8, 0.0, 1.0);
  vec3 L = hdLight(vP, vec3(0.0, 0.0, 1.0));
  float keep = 1.0;
  if (uCal < 0.5) {
    // by night the pools light the ground instead of their point lights
    L = hdPoolSub(L, vP, nightK);
    if (uPoolN > 0) {
      // the 2D lights' pools, as Classic's light map cuts them out of its dark
      vec3 pg;
      keep = hdPoolKeep(P, pg);
      L = hdPoolLift(L, keep, nightK);
      emis += hdPoolGlow(pg) * (1.0 - gr.a);
    }
  }
  emis += gl.rgb * max(L, vec3(0.6));
  // alpha: the glow sheet's cover, which the DoF keeps sharp
  o = vec4(${t ? `hdFogC(alb * L, emis, vP, 1.0 - keep)` : `hdFog(alb * L, emis, vP)`}, clamp(gl.a, 0.0, 1.0));
}
`,
  pl = (e) => /\bhdFogC\s*\(/.test(e);
function ml(e, t) {
  let n = new He(e);
  return (
    (n.flipY = !1),
    (n.premultiplyAlpha = !0),
    (n.generateMipmaps = !0),
    (n.minFilter = De),
    (n.magFilter = M),
    (n.wrapS = n.wrapT = ze),
    (n.anisotropy = t),
    (n.needsUpdate = !0),
    n
  );
}
var hl = (e) => Math.round((e.width * e.height * 4 * 4) / 3);
function gl(e) {
  let t = e.frames.find((e) => !!e),
    n = e.x,
    r = e.y,
    i = e.x + (t ? m(t) : 0),
    a = e.y + (t ? p(t) : 0),
    o = e.skirt;
  return (
    o &&
      ((n = Math.min(n, o.x)),
      (r = Math.min(r, o.y)),
      (i = Math.max(i, o.x + m(o.c))),
      (a = Math.max(a, o.y + p(o.c)))),
    [n, r, i, a]
  );
}
