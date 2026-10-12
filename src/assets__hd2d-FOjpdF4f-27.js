// assets__hd2d-FOjpdF4f 27 — push
// Lines 8466-8808 of readable/assets__hd2d-FOjpdF4f.pretty.js (statement-aligned).
var Fs = 6,
  Is = 0.15,
  Ls = 0.2,
  Rs = 0.55,
  zs = 0.18,
  Bs = [1, 241 / 255, 204 / 255],
  Vs = [0.62, 0.72, 1],
  Hs = 2,
  Us = `${B}
in vec3 position;
in vec3 aUv;   // u across the glass (0..1, feathered past), s along the slab (0 glass, 1 floor), ww the glass's width px
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
out vec3 vUv;
void main() {
  vUv = aUv;
  gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0);
}
`,
  Ws = `${B}
in vec3 vUv;
uniform vec3 uCol;
uniform float uA;
uniform float uTime;
out vec4 o;
void main() {
  float u = vUv.x, s = vUv.y, ww = vUv.z;
  // soft sides (px), the mullion fainter, a slow shimmer across
  float du = min(u, 1.0 - u) * ww;
  float side = smoothstep(-${Hs.toFixed(1)}, ${(4).toFixed(1)}, du);
  float mull = 1.0 - 0.45 * (1.0 - smoothstep(0.5, 1.5, abs(u - 0.5) * ww));
  float shim = 0.85 + 0.15 * sin(u * ww * 0.45 + uTime * 0.6) * sin(u * ww * 0.17 - uTime * 0.23);
  // in from the glass, falling off along it, gone where it meets the floor
  float along = smoothstep(0.0, 0.08, s) * (1.0 - 0.55 * s) * (1.0 - smoothstep(0.78, 1.0, s));
  float a = uA * side * mull * shim * along;
  if (a < 0.5 / 255.0) discard;
  o = vec4(uCol * a, 0.0);
}
`,
  Gs = Us,
  Ks = `${B}
in vec3 vUv;   // u across (0..1), v up the glass (0..1), (glass width px, landed height px) packed: z = ww + 1000·lh
uniform vec3 uCol;
uniform float uA;
out vec4 o;
void main() {
  float u = vUv.x, v = vUv.y;
  float lh = floor(vUv.z / 1000.0);
  float ww = vUv.z - lh * 1000.0;
  float du = min(u, 1.0 - u) * ww;
  float dv = min(v, 1.0 - v) * lh;
  float a = smoothstep(-${Hs.toFixed(1)}, ${Hs.toFixed(1)}, du) * smoothstep(-${Hs.toFixed(1)}, ${Hs.toFixed(1)}, dv);
  // the mullions' cross (the glass's middle column and row 16, which lands half way up)
  float cu = 1.0 - smoothstep(0.5, 1.5, abs(u - 0.5) * ww);
  float cv = 1.0 - smoothstep(0.5, 1.0 + lh / 15.0, abs(v - 0.5) * lh);
  a *= 1.0 - 0.55 * max(cu, cv);
  // brighter where the glass's foot lands (nearest the wall)
  a *= 1.0 - 0.3 * v;
  a *= uA;
  if (a < 0.5 / 255.0) discard;
  o = vec4(uCol * a, 0.0);
}
`,
  qs = `${B}
in vec3 position;     // the quad's corner, -0.5..0.5
in vec4 aGlass;       // x0, width, y (the wall's face), unused
in vec4 aSeed;        // phase, u, v, speed
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
uniform vec2 uPx;     // one art px in clip units (x, y), at w = 1
out float vA;
void main() {
  float s = fract(aSeed.x + uTime * aSeed.w);
  float u = clamp(aSeed.y + 0.05 * sin(uTime * 0.7 + aSeed.x * 6.283), 0.05, 0.95);
  float v = clamp(aSeed.z + 0.08 * sin(uTime * 0.53 + aSeed.x * 4.1), 0.0, 1.0);
  float z = ${(8).toFixed(1)} + v * ${(15).toFixed(1)};
  float d = z * s;
  vec3 P = vec3(aGlass.x + u * aGlass.y + ${(fe * k).toFixed(4)} * d, aGlass.z + ${k.toFixed(4)} * d, z - d);
  vec4 c = projectionMatrix * viewMatrix * vec4(P, 1.0);
  c.xy += position.xy * uPx * c.w;
  gl_Position = c;
  // in and out along the slab, a slow twinkle
  vA = sin(3.14159 * s) * (0.55 + 0.45 * sin(uTime * 1.3 + aSeed.x * 17.0));
}
`,
  Js = `${B}
in float vA;
uniform vec3 uCol;
uniform float uA;
out vec4 o;
void main() {
  float a = uA * vA;
  if (a < 0.5 / 255.0) discard;
  o = vec4(uCol * a, 0.0);
}
`;
function Ys(e, t, n = {}) {
  return new H({
    glslVersion: W,
    vertexShader: e,
    fragmentShader: t,
    uniforms: {
      uCol: { value: new z(1, 1, 1) },
      uA: { value: 0 },
      uTime: { value: 0 },
      ...n,
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
}
function Xs(e) {
  let t = [],
    n = [];
  for (let r of e)
    for (let e of [0, 1, 2, 0, 2, 3]) (t.push(...r.p[e]), n.push(...r.uv[e]));
  return { pos: new Float32Array(t), uv: new Float32Array(n) };
}
function Zs(e) {
  let t = [],
    n = [],
    r = [],
    i = [];
  return (
    e.forEach((e, a) => {
      let o = e.x1 - e.x0,
        s = Hs / o,
        c = -s,
        l = 1 + s,
        u = (t) => e.x0 + t * o;
      for (let n of [e.z0, e.z1]) {
        let r = ee(e, 0, n),
          i = r.x,
          a = r.y;
        t.push({
          p: [
            [u(c), e.y + 0.25, n],
            [u(l), e.y + 0.25, n],
            [u(l) + i, a, 0],
            [u(c) + i, a, 0],
          ],
          uv: [
            [c, 0, o],
            [l, 0, o],
            [l, 1, o],
            [c, 1, o],
          ],
        });
      }
      let d = k * (e.z1 - e.z0),
        f = Hs / d,
        p = (t, n) => {
          let r = e.z0 + n * (e.z1 - e.z0),
            i = ee(e, u(t), r);
          return [i.x, i.y, 0.2];
        },
        m = Math.round(o) + 1e3 * Math.round(d);
      n.push({
        p: [p(c, -f), p(l, -f), p(l, 1 + f), p(c, 1 + f)],
        uv: [
          [c, -f, m],
          [l, -f, m],
          [l, 1 + f, m],
          [c, 1 + f, m],
        ],
      });
      for (let t = 0; t < Fs; t++) {
        let n = (e) => {
          let n =
            Math.sin((a * 31 + t * 7 + e * 13 + 1) * 12.9898) * 43758.5453;
          return n - Math.floor(n);
        };
        (r.push(e.x0, o, e.y + 0.5, 0),
          i.push(n(1), 0.15 + 0.7 * n(2), n(3), 0.035 + 0.03 * n(4)));
      }
    }),
    {
      sheet: Xs(t),
      patch: Xs(n),
      motes: {
        glass: new Float32Array(r),
        seed: new Float32Array(i),
        n: r.length / 4,
      },
    }
  );
}
var Qs = class {
    root = new F();
    meshes = [];
    mats = [];
    arrays;
    col = new z();
    px = { value: new P(0, 0) };
    constructor(e) {
      ((this.root.name = `hd2d-space-shafts`),
        (this.root.matrixAutoUpdate = !1),
        (this.arrays = Zs(e)),
        this.buildGpu());
    }
    buildGpu() {
      let e = this.arrays,
        t = (e, t, n) => {
          if (!e.pos.length) return;
          let r = new L();
          (r.setAttribute(`position`, new U(e.pos, 3)),
            r.setAttribute(`aUv`, new U(e.uv, 3)),
            this.add(r, t, n));
        };
      if ((t(e.patch, Ys(Gs, Ks), 0), t(e.sheet, Ys(Us, Ws), 1), e.motes.n)) {
        let t = new Le();
        (t.setAttribute(
          `position`,
          new U(
            new Float32Array([
              -0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0,
            ]),
            3,
          ),
        ),
          t.setIndex([0, 1, 2, 0, 2, 3]),
          t.setAttribute(`aGlass`, new we(e.motes.glass, 4)),
          t.setAttribute(`aSeed`, new we(e.motes.seed, 4)),
          (t.instanceCount = e.motes.n),
          this.add(t, Ys(qs, Js, { uPx: this.px }), 2));
      }
    }
    add(e, t, n) {
      let r = new I(e, t);
      ((r.frustumCulled = !1),
        (r.matrixAutoUpdate = !1),
        (r.renderOrder = 60 + n),
        this.mats.push(t),
        this.meshes.push(r),
        this.root.add(r));
    }
    update(e) {
      let t = e.f.space,
        n = t && t.kind === `room` ? Math.min(1, Math.max(0, t.daylight)) : 1,
        r = e.cam.cal ? 0 : zs + 0.8200000000000001 * n;
      ((this.root.visible = r > 0),
        this.col.setRGB(
          Vs[0] + (Bs[0] - Vs[0]) * n,
          Vs[1] + (Bs[1] - Vs[1]) * n,
          Vs[2] + (Bs[2] - Vs[2]) * n,
          Ee,
        ),
        this.px.value.set(
          (2 * e.k) / Math.max(1, e.res.w),
          (2 * e.k) / Math.max(1, e.res.h),
        ));
      let i = [Ls, Is, Rs];
      this.mats.forEach((t, n) => {
        (t.uniforms.uCol.value.copy(this.col),
          (t.uniforms.uA.value = i[n] * r),
          (t.uniforms.uTime.value = e.f.now));
      });
    }
    casters() {
      return [];
    }
    disposeGpu() {
      for (let e of this.meshes) (this.root.remove(e), e.geometry.dispose());
      for (let e of this.mats) e.dispose();
      ((this.meshes = []), (this.mats = []));
    }
    rebuild() {
      (this.disposeGpu(), this.buildGpu());
    }
    dispose() {
      this.disposeGpu();
    }
  },
  Z = 16,
  $s = 32,
  ec = 4,
  tc = 4,
  nc = 5,
  rc = 0.25,
  ic = 2,
  ac = 5,
  oc = 216,
  sc = `#07040f`,
  cc = 14,
  lc = 0.82,
  uc = `#040208`,
  dc = 48;
function fc(e) {
  let t = e.x0 * Z,
    n = e.y0 * Z,
    r = e.w * Z,
    i = e.h * Z,
    a = n + $s,
    o = n + i - Z + nc,
    s = [];
  for (let t = 0; t < e.w; t++)
    (e.cells[t] === ce.DOOR || e.cells[e.w + t] === ce.DOOR) && s.push(t);
  return {
    back: { x0: t + Z, x1: t + r - Z, y0: a - ec, y1: a, h: 28 },
    sides: [
      { x0: t + Z - tc, x1: t + Z, y0: a - ec, y1: o, h: 28 },
      { x0: t + r - Z, x1: t + r - Z + tc, y0: a - ec, y1: o, h: 28 },
    ],
    inner: [
      { x: t + Z + rc, y0: a, y1: o, h: 28, out: 1 },
      { x: t + r - Z - rc, y0: a, y1: o, h: 28, out: -1 },
    ],
    doors: s,
  };
}
function pc(e) {
  let t = e.x0 * Z,
    n = e.y0 * Z + $s;
  return e.decor
    .filter((e) => e.name === `window`)
    .map((e) => ({
      x0: t + e.lx * Z + 4,
      x1: t + (e.lx + e.w) * Z - 4,
      y: n,
      z0: 8,
      z1: 23,
    }));
}
function mc(e, t, n) {
  let [r, i] = h(e, t);
  return (
    (i.fillStyle = A),
    i.fillRect(0, 0, e, t),
    (i.fillStyle = T),
    i.fillRect(n, 0, 1, t),
    i.fillRect(0, 0, e, 1),
    r
  );
}
