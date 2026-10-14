// fx3d-DiRK8ozf 08 — uniform
// Lines 30717-31052 of readable/assets/fx3d-DiRK8ozf.pretty.js (statement-aligned).
var df = new q(),
  ff = new q().makeScale(0, 0, 0),
  pf = class {
    cap;
    mesh;
    look;
    free;
    dirty = !1;
    constructor(e, t, n) {
      this.cap = n;
      let r = e.clone();
      ((this.look = new Ti(new Float32Array(n * 3), 3)),
        this.look.setUsage(Xe),
        r.setAttribute(`aLook`, this.look),
        (this.mesh = new Ni(r, t, n)),
        this.mesh.instanceMatrix.setUsage(Xe),
        (this.mesh.frustumCulled = !1));
      for (let e = 0; e < n; e++) this.mesh.setMatrixAt(e, ff);
      this.free = Array.from({ length: n }, (e, t) => n - 1 - t);
    }
    alloc(e, t, n = 0) {
      let r = this.free.pop();
      return r === void 0 ? -1 : (this.setLook(r, e, t, n), r);
    }
    setLook(e, t, n, r = 0) {
      (this.look.setXYZ(e, t, n, r), (this.dirty = !0));
    }
    set(e, t, n, r) {
      e < 0 ||
        (this.mesh.setMatrixAt(e, df.compose(t, n, r)), (this.dirty = !0));
    }
    release(e) {
      e < 0 ||
        (this.mesh.setMatrixAt(e, ff), this.free.push(e), (this.dirty = !0));
    }
    get used() {
      return this.cap - this.free.length;
    }
    flush() {
      this.dirty &&=
        ((this.mesh.instanceMatrix.needsUpdate = !0),
        (this.look.needsUpdate = !0),
        !1);
    }
    clear() {
      for (let e = 0; e < this.cap; e++) this.mesh.setMatrixAt(e, ff);
      ((this.free = Array.from(
        { length: this.cap },
        (e, t) => this.cap - 1 - t,
      )),
        (this.dirty = !0));
    }
  },
  mf = class {
    pool;
    bodies = [];
    q = new It();
    sv = new W();
    constructor(e) {
      this.pool = e;
    }
    spawn(e, t, n, r, i, a, o, s, c, l, u, d) {
      let f = this.pool.alloc(c, l, u);
      f < 0 ||
        this.bodies.push({
          i: f,
          p: new W(e, t, n),
          v: new W(r, i, a),
          axis: new W(
            Math.random() - 0.5,
            Math.random() - 0.5,
            Math.random() - 0.5,
          ).normalize(),
          ang: Math.random() * 6.28,
          spin: 6 + Math.random() * 14,
          s: o,
          t0: d,
          life: s,
        });
    }
    update(e, t) {
      for (let n = this.bodies.length - 1; n >= 0; n--) {
        let r = this.bodies[n],
          i = (e - r.t0) / r.life;
        if (i >= 1) {
          (this.pool.release(r.i), this.bodies.splice(n, 1));
          continue;
        }
        ((r.v.z -= 320 * t),
          r.p.addScaledVector(r.v, t),
          r.p.z < r.s * 0.5 &&
            ((r.p.z = r.s * 0.5),
            r.v.z < 0 &&
              ((r.v.z *= -0.32),
              (r.v.x *= 0.55),
              (r.v.y *= 0.55),
              (r.spin *= 0.5))),
          (r.ang += r.spin * t));
        let a = r.s * (i > 0.7 ? 1 - (i - 0.7) / 0.3 : 1);
        this.pool.set(
          r.i,
          r.p,
          this.q.setFromAxisAngle(r.axis, r.ang),
          this.sv.set(a, a, a),
        );
      }
    }
    get count() {
      return this.bodies.length;
    }
    clear() {
      for (let e of this.bodies) this.pool.release(e.i);
      this.bodies = [];
    }
  },
  hf = {
    high: {
      fxPixels: 14e5,
      msaa: 4,
      outP: 0,
      lightRes: 1,
      density: 1,
      bloom: 1,
      distort: !0,
      ca: !0,
    },
    medium: {
      fxPixels: 9e5,
      msaa: 0,
      outP: 3,
      lightRes: 0.5,
      density: 0.85,
      bloom: 1,
      distort: !0,
      ca: !0,
    },
    low: {
      fxPixels: 45e4,
      msaa: 0,
      outP: 2,
      lightRes: 0.5,
      density: 0.6,
      bloom: 1,
      distort: !1,
      ca: !1,
    },
    minimal: {
      fxPixels: 2e5,
      msaa: 0,
      outP: 1,
      lightRes: 0.5,
      density: 0.4,
      bloom: 0,
      distort: !1,
      ca: !1,
    },
  },
  gf = [`high`, `medium`, `low`, `minimal`],
  _f = (e, t, n) => ({ sx: e, sy: t - n }),
  vf = 32,
  yf = 16,
  bf = `${xu}
in vec2 vUv; out vec4 o;
uniform vec4 uCam;   // camX, camY, rt width, rt height (art px)
uniform vec4 uPt[${vf}]; uniform vec4 uPtC[${vf}]; uniform int uPtN;
uniform vec4 uLnA[${yf}]; uniform vec4 uLnB[${yf}]; uniform vec4 uLnC[${yf}]; uniform int uLnN;
uniform vec3 uAmb; uniform float uEnc;
void main() {
  vec3 P = vec3(uCam.xy + vec2(vUv.x, 1.0 - vUv.y) * uCam.zw, 0.0);
  vec3 L = uAmb;
  for (int i = 0; i < ${vf}; i++) {
    if (i >= uPtN) break;
    vec3 d = P - uPt[i].xyz;
    float r = uPt[i].w, dd = dot(d, d);
    L += uPtC[i].rgb * (r * r / (r * r + dd)) * exp(-sqrt(dd) / (r * 3.0));
  }
  for (int i = 0; i < ${yf}; i++) {
    if (i >= uLnN) break;
    vec3 a = uLnA[i].xyz, ab = uLnB[i].xyz - a;
    float t = clamp(dot(P - a, ab) / max(dot(ab, ab), 1e-3), 0.0, 1.0);
    vec3 d = P - (a + ab * t);
    float r = uLnA[i].w, dd = dot(d, d);
    L += uLnC[i].rgb * (r * r / (r * r + dd)) * exp(-sqrt(dd) / (r * 2.5));
  }
  o = vec4(L * uEnc, 1.0);
}
`,
  xf = `${xu}
#ifdef FX_HOSTED
uniform float uVtxSq;
#define VTX_SQUASH uVtxSq
#else
#define VTX_SQUASH 0.7
#endif
in vec2 vUv; out vec4 o;
uniform vec4 uCam; uniform float uTime; uniform float uEnc;
uniform vec4 uShock[8];
uniform vec4 uShim[16];
uniform vec4 uVtx[4]; uniform vec4 uVtxB[4];
void main() {
  vec2 w = uCam.xy + vec2(vUv.x, 1.0 - vUv.y) * uCam.zw;
  vec2 off = vec2(0.0);
  for (int i = 0; i < 8; i++) {
    vec4 s = uShock[i];
    if (s.w <= 0.0) continue;
    vec2 d = w - s.xy; float r = length(d); float k = (r - s.z) / 6.0;
    off -= (d / max(r, 0.001)) * s.w * exp(-k * k);
  }
  for (int i = 0; i < 16; i++) {
    vec4 g = uShim[i];
    if (g.x == g.z && g.y == g.w) continue;
    vec2 ab = g.zw - g.xy;
    float t = clamp(dot(w - g.xy, ab) / dot(ab, ab), 0.0, 1.0);
    float dist = length(w - (g.xy + ab * t));
    float k = 1.0 - smoothstep(3.0, 11.0, dist);
    off.y += sin(uTime * 25.0 + t * length(ab) * 0.5 + w.x * 0.27) * 1.3 * k;
  }
  for (int i = 0; i < 4; i++) {
    vec4 v = uVtx[i];
    if (v.z <= 0.0) continue;
    vec2 d = w - v.xy;
    vec2 dc = vec2(d.x, d.y / VTX_SQUASH);
    float r = length(dc) / v.z;
    if (r >= 1.0) continue;
    float k = (1.0 - r) * (1.0 - r);
    float a = v.w * k * (1.0 + 0.15 * sin(uTime * 3.0 + r * 6.0));
    vec2 rc = vec2(dc.x * cos(a) - dc.y * sin(a), dc.x * sin(a) + dc.y * cos(a)) * (1.0 + uVtxB[i].x * k);
    off += vec2(rc.x, rc.y * VTX_SQUASH) - d;
  }
  o = vec4(off * uEnc + (uEnc < 1.0 ? 0.5 : 0.0), 0.0, 1.0);
}
`,
  Sf = `${xu}
in vec2 vUv; out vec4 o;
uniform sampler2D uDepth;
uniform vec4 uView;     // camX, camY, view width, view height (art px)
uniform vec2 uSceneSize;
uniform float uDens;    // scene texels per art px (the depth canvas is the scene's size)
uniform float uK0;
void main() {
  vec2 rel = vec2(vUv.x, 1.0 - vUv.y) * uView.zw;
  vec4 d = texture(uDepth, (floor(rel * uDens) + 0.5) / uSceneSize);
  if (d.a < 0.9) discard;
  float v = floor(d.r * 255.0 + 0.5) * 256.0 + floor(d.g * 255.0 + 0.5);
  float ys = v - 512.0 + uView.y - 1.5;
  float sy = uView.y + rel.y;
  float key = 2.0 * ys - sy;
  gl_FragDepth = (-(key - uK0) / ${od.toFixed(1)}) * 0.5 + 0.5;
  o = vec4(0.0);
}
`,
  Cf = `${xu}
in vec2 vUv; out vec4 o;
uniform sampler2D uSrc; uniform vec2 uTexel; uniform float uThresh;
void main() {
  vec3 c = texture(uSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb + texture(uSrc, vUv + uTexel * vec2(1.0, -1.0)).rgb
         + texture(uSrc, vUv + uTexel * vec2(-1.0, 1.0)).rgb + texture(uSrc, vUv + uTexel * vec2(1.0, 1.0)).rgb;
  c *= 0.25;
  if (uThresh >= 0.0) { float br = max(c.r, max(c.g, c.b)); c *= max(br - uThresh, 0.0) / max(br, 1e-4); }
  o = vec4(min(c, vec3(8.0)), 1.0);
}
`,
  wf = `${xu}
in vec2 vUv; out vec4 o;
uniform sampler2D uSrc; uniform sampler2D uBase; uniform vec2 uTexel;
void main() {
  vec2 t = uTexel;
  vec3 c = texture(uSrc, vUv).rgb * 4.0
    + (texture(uSrc, vUv + vec2(t.x, 0.0)).rgb + texture(uSrc, vUv - vec2(t.x, 0.0)).rgb + texture(uSrc, vUv + vec2(0.0, t.y)).rgb + texture(uSrc, vUv - vec2(0.0, t.y)).rgb) * 2.0
    + texture(uSrc, vUv + t).rgb + texture(uSrc, vUv - t).rgb + texture(uSrc, vUv + vec2(t.x, -t.y)).rgb + texture(uSrc, vUv + vec2(-t.x, t.y)).rgb;
  o = vec4(texture(uBase, vUv).rgb + c / 16.0, 1.0);
}
`,
  Tf = `${xu}
in vec2 vUv; out vec4 o;
uniform sampler2D uScene; uniform sampler2D uLight; uniform sampler2D uDist; uniform sampler2D uFx; uniform sampler2D uBloom;
uniform vec4 uView; uniform vec2 uSceneSize; uniform vec2 uArt; uniform float uDens;
uniform float uBloomK; uniform float uCA; uniform float uUseLight; uniform float uUseDist; uniform float uEnc; uniform float uEncD; uniform float uAmb;
vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
void main() {
  vec2 rel = vec2(vUv.x, 1.0 - vUv.y) * uView.zw;            // art px from the view's top left
  vec2 luv = vec2(rel.x, uArt.y - rel.y) / uArt;              // the art-resolution passes
  vec2 off = vec2(0.0);
  if (uUseDist > 0.5) { off = texture(uDist, luv).rg; if (uEncD < 1.0) off = (off - 0.5) / uEncD; }
  vec2 sp = floor((rel + off) * uDens) + 0.5;                // whole scene texels: the world stays crisp
  vec3 scene = texture(uScene, sp / uSceneSize).rgb;
  vec3 L = uUseLight > 0.5 ? texture(uLight, luv).rgb / uEnc : vec3(1.0);
  // light on the art saturates softly (at most about double), so sprites stay readable; and it eases
  // into white rather than clipping, so light on snow or sand keeps its texture
  vec3 ex = max(L - uAmb, vec3(0.0));
  vec3 base = scene * min(L, vec3(uAmb));
  vec3 gain = scene * 1.15 * (1.0 - exp(-ex)) + (1.0 - exp(-ex * 0.6)) * 0.07;
  vec3 room = max(1.0 - base, vec3(0.04));
  vec3 lit = base + room * (1.0 - exp(-gain / room));
  vec4 fg = texture(uFx, vUv);
  vec3 fx = fg.rgb;
  vec3 bl = vec3(0.0);
  if (uBloomK > 0.0) bl = texture(uBloom, vUv).rgb * uBloomK;
  if (uCA > 0.0) {
    // the lens fringe on a big flash: red and blue apart
    vec2 ca = (vUv - 0.5) * uCA;
    fx = vec3(texture(uFx, vUv + ca).r, fg.g, texture(uFx, vUv - ca).b);
    if (uBloomK > 0.0) bl = vec3(texture(uBloom, vUv + ca * 1.6).r * uBloomK, bl.g, texture(uBloom, vUv - ca * 1.6).b * uBloomK);
  }
  o = vec4(lit * (1.0 - clamp(fg.a, 0.0, 1.0)) + aces(fx + bl), 1.0);
}
`,
  Ef = class {
    scene = new Bn();
    mat;
    mesh;
    constructor(e, t, n = {}) {
      this.mat = new Da({
        glslVersion: Ze,
        vertexShader: Eu,
        fragmentShader: e,
        uniforms: t,
        depthTest: !1,
        depthWrite: !1,
        blending: 0,
        ...n,
      });
      let r = new Pr();
      (r.setAttribute(
        `position`,
        new yr(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3),
      ),
        (this.mesh = new si(r, this.mat)),
        (this.mesh.frustumCulled = !1),
        this.scene.add(this.mesh));
    }
    get u() {
      return this.mat.uniforms;
    }
  },
  Df = (e) => ({ value: Array.from({ length: e }, () => new $t()) });
