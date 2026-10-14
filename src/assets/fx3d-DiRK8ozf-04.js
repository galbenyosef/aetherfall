// fx3d-DiRK8ozf 04 — vec3
// Lines 27244-27593 of readable/assets/fx3d-DiRK8ozf.pretty.js (statement-aligned).
function Ku(e) {
  return e.t === `line`
    ? { x: e.x0, y: e.y0 }
    : e.t === `cone`
      ? { x: e.x, y: e.y }
      : { x: 0, y: 0 };
}
function qu(e) {
  return e.t === `line`
    ? { x: e.x1, y: e.y1 }
    : e.t === `cone`
      ? { x: e.x + Math.cos(e.a) * e.r, y: e.y + Math.sin(e.a) * e.r }
      : { x: 0, y: 0 };
}
var Ju = { fire: 0, plasma: 1, void: 2, corona: 3 },
  Yu = `
float h3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vnoise(vec3 x) {
  vec3 i = floor(x), f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h3(i), h3(i + vec3(1, 0, 0)), f.x), mix(h3(i + vec3(0, 1, 0)), h3(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(h3(i + vec3(0, 0, 1)), h3(i + vec3(1, 0, 1)), f.x), mix(h3(i + vec3(0, 1, 1)), h3(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
float fbm(vec3 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p = p * 2.03 + vec3(1.7, 9.2, 3.1); a *= 0.5; } return s; }
`,
  Xu = `
attribute vec4 aOrb;   // kind, ramp row, intensity, seed
varying vec3 vN; varying vec3 vObj; varying vec4 vOrb;
void main() {
  mat4 m = modelMatrix * instanceMatrix;
  vec4 wp = m * vec4(position, 1.0);
  vN = normalize(inverse(transpose(mat3(m))) * normal);
  vObj = position;
  vOrb = aOrb;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  Zu = `
${Cu}
${Yu}
${wu}
uniform float uTime;
varying vec3 vN; varying vec3 vObj; varying vec4 vOrb;
void main() {
  vec3 V = FX_VIEW;
  vec3 N = normalize(vN);
  float ndv = dot(N, V);
  if (ndv < 0.0) discard;            // the near half only, whichever way the winding falls
  int kind = int(vOrb.x + 0.5);
  float row = vOrb.y, I = vOrb.z, seed = vOrb.w * 17.0;
  vec3 col; float a;
  if (kind == 0) {
    float n = fbm(vObj * 2.4 + vec3(uTime * 5.5, 0.0, -uTime * 1.5) + seed);
    float heat = 0.7 + pow(ndv, 1.4) * 2.6 + (n - 0.5) * 2.4;
    a = smoothstep(0.02, 0.45, ndv + (n - 0.5) * 0.35);
    col = rampAt(row, heat, 0.0) * I * (0.6 + 1.3 * smoothstep(3.2, 4.0, heat));
    gl_FragColor = vec4(col * a, a * 0.65);
  } else if (kind == 1) {
    float n = vnoise(vObj * 4.5 + vec3(uTime * 9.0, uTime * 5.0, seed));
    float fil = 1.0 - smoothstep(0.0, 0.07, abs(n - 0.5));
    float heat = 1.8 + ndv * 0.8 + fil * 0.4;
    a = smoothstep(0.0, 0.5, ndv) * (0.55 + 0.45 * ndv) + fil * 0.6 * smoothstep(0.0, 0.3, ndv);
    col = mix(rampAt(row, heat, 0.0), vec3(1.0), pow(ndv, 3.0) * 0.75 + fil * 0.5) * I * (1.0 + 1.2 * fil + 1.2 * pow(ndv, 4.0));
    gl_FragColor = vec4(col * a, a * 0.5);
  } else if (kind == 2) {
    float t = uTime * 2.2;
    vec3 q = vec3(vObj.x * cos(t) - vObj.y * sin(t), vObj.x * sin(t) + vObj.y * cos(t), vObj.z);
    float n = fbm(q * 3.0 + seed);
    float body = 0.93 * smoothstep(0.0, 0.3, ndv);
    float rim = pow(1.0 - ndv, 2.4);
    float band = smoothstep(0.6, 0.72, n) * smoothstep(0.15, 0.6, ndv);
    vec3 dark = rampAt(row, 0.4 + n * 0.5, 0.0) * 0.35;
    col = dark * body + rampAt(row, 3.3 + rim * 0.7, 0.0) * I * rim * 2.2 + rampAt(row, 3.0, 0.0) * I * band * 0.9;
    gl_FragColor = vec4(col, body * (1.0 - rim * 0.8));
  } else {
    float n = fbm(vObj * 2.0 + vec3(uTime * 4.0, 0.0, -uTime * 2.0) + seed);
    float rim = pow(1.0 - ndv, 1.4);
    float heat = 1.4 + rim * 2.0 + (n - 0.5) * 2.2;
    a = rim * smoothstep(0.0, 0.1, ndv) * (0.6 + n);
    col = rampAt(row, heat, 0.0) * I * (0.8 + 1.4 * smoothstep(3.2, 4.0, heat));
    gl_FragColor = vec4(col * a, 0.0);
  }
}
`,
  Qu = new q(),
  $u = new W(),
  ed = new It(),
  td = new W(),
  nd = new W(),
  rd = new W(1, 0, 0),
  id = new q().makeScale(0, 0, 0),
  ad = class {
    cap;
    mesh;
    look;
    free;
    dirty = !1;
    constructor(e, t = 96, n = {}) {
      this.cap = t;
      let r = new pa(1, 3);
      ((this.look = new Ti(new Float32Array(t * 4), 4)),
        this.look.setUsage(Xe),
        r.setAttribute(`aOrb`, this.look));
      let i = new Ea({
        vertexShader: Xu,
        fragmentShader: Zu,
        defines: { ...n },
        uniforms: { uTime: e.uTime, uRamp: e.uRamp, uView: e.uView },
        transparent: !0,
        depthTest: !0,
        depthWrite: !1,
        side: 2,
        blending: 5,
        blendEquation: 100,
        blendSrc: 201,
        blendDst: 205,
        blendSrcAlpha: 201,
        blendDstAlpha: 205,
      });
      ((this.mesh = new Ni(r, i, t)),
        this.mesh.instanceMatrix.setUsage(Xe),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = 8));
      for (let e = 0; e < t; e++) this.mesh.setMatrixAt(e, id);
      this.free = Array.from({ length: t }, (e, n) => t - 1 - n);
    }
    alloc(e, t, n = 1) {
      let r = this.free.pop();
      return r === void 0
        ? -1
        : (this.look.setXYZW(r, e, t, n, Math.random()), (this.dirty = !0), r);
    }
    set(e, t, n, r, i, a = 1, o = 0, s = 0, c = 1, l) {
      e < 0 ||
        (nd.set(a, o, s),
        nd.lengthSq() < 1e-6 && nd.set(1, 0, 0),
        ed.setFromUnitVectors(rd, nd.normalize()),
        this.mesh.setMatrixAt(
          e,
          Qu.compose($u.set(t, n, r), ed, td.set(i * c, i, i)),
        ),
        l !== void 0 && this.look.setZ(e, l),
        (this.dirty = !0));
    }
    release(e) {
      e < 0 ||
        (this.mesh.setMatrixAt(e, id), this.free.push(e), (this.dirty = !0));
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
      for (let e = 0; e < this.cap; e++) this.mesh.setMatrixAt(e, id);
      ((this.free = Array.from(
        { length: this.cap },
        (e, t) => this.cap - 1 - t,
      )),
        (this.dirty = !0));
    }
  },
  od = 1500,
  sd = new W(0, Math.SQRT1_2, Math.SQRT1_2),
  cd = sd.clone(),
  ld = class extends So {
    camX = 0;
    camY = 0;
    W = 1;
    H = 1;
    k0 = 0;
    constructor() {
      (super(), (this.matrixAutoUpdate = !1));
    }
    set(e, t, n, r) {
      ((this.camX = e), (this.camY = t), (this.W = n), (this.H = r));
      let i = od;
      ((this.k0 = t + r / 2),
        this.projectionMatrix.set(
          2 / n,
          0,
          0,
          -(2 * e) / n - 1,
          0,
          -2 / r,
          2 / r,
          1 + (2 * t) / r,
          0,
          -1 / i,
          -1 / i,
          this.k0 / i,
          0,
          0,
          0,
          1,
        ),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
    }
    spriteDepth(e, t) {
      return (-(2 * e - t - this.k0) / od) * 0.5 + 0.5;
    }
  },
  ud = `
attribute vec4 aLook;   // ramp row, intensity, side (-1..1), core weight
varying vec4 vLook;
void main() {
  vLook = aLook;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
`,
  dd = `
${Cu}
varying vec4 vLook;
void main() {
  float s = vLook.z;
  float glow = exp(-s * s * 3.2) * (1.0 - s * s);
  float core = exp(-s * s * 34.0);
  vec3 c = rampAt(vLook.x, 1.9 + 0.8 * glow, 0.0) * glow * 0.9 + mix(rampAt(vLook.x, 4.0, 0.0), vec3(1.0), 0.7) * core * vLook.w * 2.4;
  // it covers a little of what's behind, so its colour reads true on any ground
  float al = clamp((glow * 0.3 + core * 0.5) * min(vLook.y, 1.5) / 1.5, 0.0, 0.85);
  gl_FragColor = vec4(c * vLook.y, al);
}
`,
  fd = 0.5,
  pd = class {
    capV;
    mesh;
    pos;
    look;
    idx;
    geo;
    nv = 0;
    ni = 0;
    constructor(e, t = 16384) {
      ((this.capV = t),
        (this.pos = new Float32Array(t * 3)),
        (this.look = new Float32Array(t * 4)),
        (this.idx = new Uint16Array(t * 3)));
      let n = new Pr(),
        r = new yr(this.pos, 3).setUsage(Xe),
        i = new yr(this.look, 4).setUsage(Xe),
        a = new yr(this.idx, 1).setUsage(Xe);
      (n.setAttribute(`position`, r),
        n.setAttribute(`aLook`, i),
        n.setIndex(a),
        n.setDrawRange(0, 0),
        (this.geo = n));
      let o = new Ea({
        vertexShader: ud,
        fragmentShader: dd,
        uniforms: { uRamp: e.uRamp },
        transparent: !0,
        depthTest: !0,
        depthWrite: !1,
        side: 2,
        blending: 5,
        blendEquation: 100,
        blendSrc: 201,
        blendDst: 205,
        blendSrcAlpha: 201,
        blendDstAlpha: 205,
      });
      ((this.mesh = new si(n, o)),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = 12));
    }
    get count() {
      return this.ni;
    }
    reset() {
      ((this.nv = 0), (this.ni = 0));
    }
    strip(e, t, n, r, i = 1, a = 0.25) {
      let o = e.length;
      if (
        o < 2 ||
        r <= 0.001 ||
        this.nv + o * 2 > this.capV ||
        this.ni + (o - 1) * 6 > this.idx.length
      )
        return;
      let s = this.nv,
        c = cd.z / cd.y;
      for (let s = 0; s < o; s++) {
        let l = e[Math.max(0, s - 1)],
          u = e[Math.min(o - 1, s + 1)],
          d = u[0] - l[0],
          f = (u[1] - l[1]) * c - (u[2] - l[2]),
          p = Math.hypot(d, f) || 1;
        ((d /= p), (f /= p));
        let m = s / (o - 1),
          h = t * (a + (1 - a) * Math.min(1, Math.sin(Math.PI * m) * 2.2)),
          g = -f * h,
          _ = d * h,
          v = e[s];
        for (let e = 0; e < 2; e++) {
          let t = e === 0 ? -1 : 1,
            a = (this.nv + e) * 3;
          ((this.pos[a] = v[0] + g * t),
            (this.pos[a + 1] = v[1]),
            (this.pos[a + 2] = v[2] - _ * t),
            c !== 1 &&
              this.pos[a + 2] < fd &&
              ((this.pos[a + 1] += (fd - this.pos[a + 2]) / c),
              (this.pos[a + 2] = fd)));
          let o = (this.nv + e) * 4;
          ((this.look[o] = n),
            (this.look[o + 1] = r),
            (this.look[o + 2] = t),
            (this.look[o + 3] = i));
        }
        this.nv += 2;
      }
      for (let e = 0; e < o - 1; e++) {
        let t = s + e * 2;
        (this.idx.set([t, t + 1, t + 2, t + 1, t + 3, t + 2], this.ni),
          (this.ni += 6));
      }
    }
    flush() {
      let e = this.geo,
        t = e.getAttribute(`position`),
        n = e.getAttribute(`aLook`),
        r = e.getIndex();
      for (let [e, i, a] of [
        [t, 3, this.nv],
        [n, 4, this.nv],
        [r, 1, this.ni],
      ])
        (e.clearUpdateRanges(),
          a > 0 && (e.addUpdateRange(0, a * i), (e.needsUpdate = !0)));
      e.setDrawRange(0, this.ni);
    }
  };
function md(e) {
  let t = (e * 2654435761) >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
