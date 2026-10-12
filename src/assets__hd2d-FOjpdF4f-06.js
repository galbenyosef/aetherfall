// assets__hd2d-FOjpdF4f 06 — map
// Lines 2151-2484 of readable/assets__hd2d-FOjpdF4f.pretty.js (statement-aligned).
function gr(e) {
  return e.replaces == null
    ? []
    : Array.isArray(e.replaces)
      ? e.replaces
      : [e.replaces];
}
var _r = 1,
  vr = 0.6;
function yr() {
  return {
    uOccl: { value: new j(0, 0, -1e9, 0) },
    uOcclView: { value: new P(1, 1) },
  };
}
var br = `
uniform vec4 uOccl;
uniform vec2 uOcclView;
${Be}
// true where a fragment at clip position c, of a thing with foot row baseY and this height, is thinned out
bool occluded(vec4 c, float baseY, float height) {
  if (uOccl.w < 0.5 || height <= 24.0 || baseY <= uOccl.z) return false;
  vec2 s = vec2((c.x / c.w + 1.0) * 0.5 * uOcclView.x, (1.0 - c.y / c.w) * 0.5 * uOcclView.y);
  if (distance(s, uOccl.xy) > 28.0) return false;
  return bayer4(floor(s)) < 0.5;
}
`,
  xr = `${B}
in vec3 position;
in vec3 normal;
in vec2 aOrigin;
in vec4 aAtlas;
in vec3 aG;
in vec2 aOcc;
in float aDens;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
out vec3 vP;
out vec3 vN;
out vec4 vClip;
flat out vec2 vOrigin;
flat out vec4 vAtlas;
flat out vec3 vG;
flat out vec2 vOcc;
flat out float vDens;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vP = wp.xyz;
  vN = normal;
  vOrigin = aOrigin;
  vAtlas = aAtlas;
  vG = aG;
  vOcc = aOcc;
  vDens = aDens;
  gl_Position = projectionMatrix * viewMatrix * wp;
  vClip = gl_Position;
}
`,
  Sr = `
uniform sampler2D uMap;
vec4 obliqueAt(vec2 t) {
  return texelFetch(uMap, ivec2(vAtlas.xy + clamp(t, vec2(0.0), vAtlas.zw - 1.0)), 0);
}
vec4 obliqueTexel(vec3 P) {
  vec2 uv = vec2(P.x - vOrigin.x, (P.y - vG.y) * vG.x + vG.y - P.z - vOrigin.y) * vDens;
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x >= vAtlas.z || uv.y >= vAtlas.w) discard;
  vec2 f = hdSharpW(uv);
  vec2 t0 = floor(uv + 0.5) - 1.0;
  vec4 acc = vec4(0.0);
  for (int j = 0; j < 4; j++) {
    vec2 q = vec2(float(j & 1), float(j >> 1));
    vec4 c = obliqueAt(t0 + q);
    vec2 w = mix(1.0 - f, f, q);
    acc += vec4(c.rgb, 1.0) * (w.x * w.y * step(0.5, c.a));
  }
  return vec4(acc.rgb / max(acc.a, 1e-5), acc.a);
}
`,
  Cr = (e) => `${B}
in vec3 vP;
in vec3 vN;
in vec4 vClip;
flat in vec2 vOrigin;
flat in vec4 vAtlas;
flat in vec3 vG;
flat in vec2 vOcc;
flat in float vDens;
out vec4 o;
${lt}
${ut}
${e}
${br}
${wt}
${Sr}
void main() {
  vec4 c = obliqueTexel(vP);
  if (c.a < 0.5 || occluded(vClip, vOcc.x, vOcc.y)) discard;
  vec3 N = normalize(vN);
  // alpha is post.ts's sharp mask (only glowing ground marks set it)
  o = vec4(hdFog(c.rgb * vG.z * hdLightSolid(vP, N), vec3(0.0), vP), 0.0);
}
`,
  wr = `${B}
in vec3 vP;
in vec3 vN;
in vec4 vClip;
flat in vec2 vOrigin;
flat in vec4 vAtlas;
flat in vec3 vG;
flat in vec2 vOcc;
flat in float vDens;
out vec4 o;
${wt}
${Sr}
void main() {
  if (obliqueTexel(vP).a < 0.5) discard;
  o = vec4(gl_FragCoord.z, 0.0, 0.0, 1.0);
}
`;
function Tr(e) {
  let t = e.pass === `shadow`;
  return new H({
    glslVersion: W,
    vertexShader: xr,
    fragmentShader: t ? wr : Cr(e.fog ?? mt + ht),
    uniforms: t
      ? { uMap: { value: e.map } }
      : { ...e.lit, ...e.occl, uMap: { value: e.map } },
    side: t ? 2 : _r,
    depthTest: !0,
    depthWrite: !0,
    transparent: !1,
    colorWrite: !t,
  });
}
var Er = {
    position: 3,
    normal: 3,
    aOrigin: 2,
    aAtlas: 4,
    aG: 3,
    aOcc: 2,
    aDens: 1,
  },
  Dr = class {
    data = {
      position: [],
      normal: [],
      aOrigin: [],
      aAtlas: [],
      aG: [],
      aOcc: [],
      aDens: [],
    };
    bounds = [1 / 0, 1 / 0, 1 / 0, -1 / 0, -1 / 0, -1 / 0];
    get vertices() {
      return this.data.position.length / 3;
    }
    vert(e, t, n) {
      (this.data.position.push(e[0], e[1], e[2]),
        this.data.normal.push(t[0], t[1], t[2]),
        this.data.aOrigin.push(n.x0, n.y0),
        this.data.aAtlas.push(n.ax, n.ay, n.aw, n.ah),
        this.data.aG.push(n.g ?? 1, n.yc ?? 0, n.shade ?? 1),
        this.data.aOcc.push(n.baseY, n.height),
        this.data.aDens.push(n.dens ?? 1));
      for (let t = 0; t < 3; t++)
        ((this.bounds[t] = Math.min(this.bounds[t], e[t])),
          (this.bounds[t + 3] = Math.max(this.bounds[t + 3], e[t])));
    }
    face(e, t, n) {
      let r = kr(e[0], e[1], e[2]);
      if (
        (e.length > 3 &&
          r[0] === 0 &&
          r[1] === 0 &&
          r[2] === 0 &&
          (r = kr(e[0], e[2], e[3])),
        r[0] === 0 && r[1] === 0 && r[2] === 0)
      )
        return;
      let i = r[0] * t[0] + r[1] * t[1] + r[2] * t[2] < 0,
        a = i ? [...e].reverse() : e,
        o = i ? [-r[0], -r[1], -r[2]] : r;
      for (let e = 1; e + 1 < a.length; e++)
        (this.vert(a[0], o, n),
          this.vert(a[e], o, n),
          this.vert(a[e + 1], o, n));
    }
    smooth(e, t, n, r, i, a, o) {
      let s = kr(e, t, n);
      if (s[0] === 0 && s[1] === 0 && s[2] === 0) return;
      let c = [r[0] + i[0] + a[0], r[1] + i[1] + a[1], r[2] + i[2] + a[2]];
      s[0] * c[0] + s[1] * c[1] + s[2] * c[2] < 0
        ? (this.vert(e, r, o), this.vert(n, a, o), this.vert(t, i, o))
        : (this.vert(e, r, o), this.vert(t, i, o), this.vert(n, a, o));
    }
    arrays() {
      let e = {};
      for (let t of Object.keys(Er)) e[t] = new Float32Array(this.data[t]);
      return e;
    }
  };
function Or(e, t = []) {
  let n = new L();
  for (let r of Object.keys(Er)) {
    let i = new U(e[r], Er[r]);
    (t.includes(r) && i.setUsage(G), n.setAttribute(r, i));
  }
  return n;
}
function kr(e, t, n) {
  let r = t[0] - e[0],
    i = t[1] - e[1],
    a = t[2] - e[2],
    o = n[0] - e[0],
    s = n[1] - e[1],
    c = n[2] - e[2],
    l = i * c - a * s,
    u = a * o - r * c,
    d = r * s - i * o,
    f = Math.hypot(l, u, d) || 1;
  return [l / f, u / f, d / f];
}
var Ar = class {
    list = [];
    map = new Map();
    at(e, t, n) {
      let r = Math.max(0, Math.floor(e / 512)),
        i = Math.max(0, Math.floor(t / 512)),
        a = (n * 64 + i) * 64 + r,
        o = this.map.get(a);
      return (
        o ||
          ((o = new Dr()),
          this.map.set(a, o),
          this.list.push({ cx: r, cy: i, page: n, b: o })),
        o
      );
    }
  },
  jr = 0.5,
  Mr = new Map(),
  Nr = new Map(),
  Pr = new Map(),
  Fr = new Map(),
  Ir = [],
  Lr = 0,
  Rr = !1;
function zr() {
  try {
    return (
      typeof location < `u` &&
      new URLSearchParams(location.search).get(`meshy`) === `1`
    );
  } catch {
    return !1;
  }
}
function Br() {
  return Lr;
}
function Vr(e, t, n) {
  let r = e.get(t);
  r ? r.push(n) : e.set(t, [n]);
}
function Hr(e = new Set()) {
  if (Rr) return;
  if (((Rr = !0), !zr())) {
    Lr++;
    return;
  }
  let t = hr.filter((t) => gr(t.meta).length || e.has(t.meta.id));
  t.length &&
    (async () => {
      let { GLTFLoader: e } = await de(
          async () => {
            let { GLTFLoader: e } = await import(`./GLTFLoader-MfgfXc7d.js`);
            return { GLTFLoader: e };
          },
          __vite__mapDeps([0, 1, 2, 3]),
        ),
        n = new e(),
        r = await Promise.all(
          t.map(async ({ meta: e, url: t }) => {
            try {
              return Zr(e, (await n.loadAsync(t)).scene);
            } catch (t) {
              return (
                console.warn(`HD-2D: model ${e.id} didn't load`, t),
                null
              );
            }
          }),
        );
      for (let e of r)
        if (e) {
          Nr.set(e.meta.id, e);
          for (let t of gr(e.meta))
            if (
              t.startsWith(`dungeon:`) ||
              t === `altar` ||
              t.startsWith(`altar:`) ||
              t.startsWith(`wall:`) ||
              t === `gate`
            )
              Pr.set(t, e);
            else if (t.startsWith(`kind:`)) Vr(Fr, t.slice(5), e);
            else if (t.startsWith(`scenery:`)) {
              let n = t.slice(8);
              n.endsWith(`*`) ? Ir.push([n.slice(0, -1), e]) : Vr(Mr, n, e);
            }
        }
      r.some(Boolean) && Lr++;
    })();
}
function Ur(e) {
  return Pr.has(e);
}
function Wr(e) {
  return Pr.get(e) ?? null;
}
function Gr() {
  return [...Pr].filter(([e]) => e.startsWith(`dungeon:`));
}
function Kr(e, t, n) {
  let r = (e * 374761393 + t * 668265263 + n * 144269504) | 0;
  return (
    (r = Math.imul(r ^ (r >>> 13), 1274126177)),
    (r ^= r >>> 16),
    (r >>> 0) / 4294967296
  );
}
