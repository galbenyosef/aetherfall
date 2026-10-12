const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/GLTFLoader-MfgfXc7d.js",
      "assets/fx3d-DiRK8ozf.js",
      "assets/index-BTsv3a2s.js",
      "assets/index-CrHozmsT.css",
    ]),
) => i.map((i) => d[i]);
import {
  $ as e,
  A as t,
  B as n,
  C as r,
  D as i,
  E as a,
  F as o,
  G as s,
  H as c,
  I as l,
  J as u,
  K as d,
  L as f,
  M as p,
  N as m,
  O as h,
  Q as g,
  R as _,
  S as v,
  U as y,
  V as b,
  W as x,
  X as S,
  Y as C,
  Z as w,
  _ as T,
  a as E,
  b as D,
  c as O,
  d as k,
  f as ee,
  g as A,
  i as te,
  j as ne,
  k as re,
  l as ie,
  m as ae,
  n as oe,
  o as se,
  q as ce,
  r as le,
  s as ue,
  t as de,
  u as fe,
  v as pe,
  w as me,
  x as he,
  y as ge,
  z as _e,
} from "./index-BTsv3a2s.js";
import {
  A as ve,
  At as j,
  B as M,
  C as ye,
  Dt as be,
  E as xe,
  Et as Se,
  J as N,
  Mt as Ce,
  O as we,
  Ot as P,
  St as Te,
  T as F,
  U as Ee,
  V as De,
  Y as I,
  _ as Oe,
  a as ke,
  at as Ae,
  c as je,
  createFx3D as Me,
  d as L,
  dt as Ne,
  et as R,
  f as Pe,
  gt as Fe,
  h as z,
  ht as Ie,
  i as B,
  k as Le,
  kt as V,
  l as Re,
  m as ze,
  mt as H,
  n as Be,
  ot as Ve,
  p as He,
  pt as Ue,
  r as We,
  t as Ge,
  u as U,
  v as Ke,
  vt as qe,
  w as W,
  wt as Je,
  x as G,
  y as Ye,
  yt as Xe,
} from "./fx3d-DiRK8ozf.js";
var Ze = 2048,
  Qe = 1;
function $e(e, t = Ze) {
  let n = e
      .map((e, t) => ({ g: e, i: t, h: Math.max(0, ...e.map((e) => e.h)) }))
      .sort((e, t) => t.h - e.h || e.i - t.i),
    r = e.map(() => []),
    i = [],
    a = -1,
    o = 0,
    s = 0,
    c = 0,
    l = () => {
      (i.push({ w: t, h: 0 }), (a = i.length - 1), (o = s = c = 0));
    },
    u = (e) => {
      let n = o,
        r = s,
        i = c,
        l = [];
      for (let o of e) {
        let e = o.w + Qe,
          s = o.h + Qe;
        if ((n + e > t && ((r += i), (n = 0), (i = 0)), n + e > t || r + s > t))
          return null;
        (l.push({ page: a, x: n, y: r }), (n += e), (i = Math.max(i, s)));
      }
      return ((o = n), (s = r), (c = i), l);
    };
  for (let { g: e, i: o } of n) {
    if (!e.length) continue;
    if (e.some((e) => e.w + Qe > t || e.h + Qe > t)) {
      let t = e.reduce((e, t) => e + t.w + Qe, 0),
        n = Math.max(...e.map((e) => e.h + Qe));
      i.push({ w: t, h: n });
      let s = 0;
      ((r[o] = e.map((e) => {
        let t = { page: i.length - 1, x: s, y: 0 };
        return ((s += e.w + Qe), t);
      })),
        (a = -1));
      continue;
    }
    a < 0 && l();
    let n = u(e);
    ((n ||= (l(), u(e))), (r[o] = n), (i[a].h = Math.max(i[a].h, s + c)));
  }
  for (let e of i) e.h = Math.ceil(Math.max(e.h, 1) / 16) * 16;
  return { at: r, pages: i };
}
var et = class {
    pages = [];
    textures = [];
    singles = new Map();
    groups = new Map();
    wantSingle = [];
    wantGroup = [];
    packed = !1;
    want(e) {
      if (this.packed) throw Error(`atlas already packed`);
      this.singles.has(e) ||
        (this.singles.set(e, { page: -1, x: 0, y: 0, w: e.width, h: e.height }),
        this.wantSingle.push(e));
    }
    wantFrames(e) {
      if (this.packed) throw Error(`atlas already packed`);
      this.groups.has(e) || (this.groups.set(e, []), this.wantGroup.push(e));
    }
    pack() {
      let e = [...this.wantSingle.map((e) => [e]), ...this.wantGroup],
        { at: t, pages: n } = $e(
          e.map((e) => e.map((e) => ({ w: e.width, h: e.height }))),
        ),
        r = n.map((e) => {
          let [t, n] = h(e.w, e.h);
          return (this.pages.push(t), n);
        });
      (e.forEach((e, n) => {
        let i = e.map((e, i) => {
          let a = t[n][i];
          return (
            e.width && e.height && r[a.page].drawImage(e, a.x, a.y),
            { page: a.page, x: a.x, y: a.y, w: e.width, h: e.height }
          );
        });
        n < this.wantSingle.length
          ? this.singles.set(e[0], i[0])
          : this.groups.set(e, i);
      }),
        (this.wantSingle = []),
        (this.wantGroup = []),
        (this.packed = !0));
    }
    rect(e) {
      let t = this.singles.get(e);
      if (!t || t.page < 0) throw Error(`canvas not in the atlas`);
      return t;
    }
    frames(e) {
      let t = this.groups.get(e);
      if (!t || t.length !== e.length) throw Error(`frames not in the atlas`);
      return t;
    }
    size(e) {
      let t = this.pages[e];
      return { w: t.width, h: t.height };
    }
    get bytes() {
      return this.pages.reduce((e, t) => e + t.width * t.height * 4, 0);
    }
    buildGpu() {
      (this.disposeGpu(),
        (this.textures = this.pages.map((e) => {
          let t = new He(e);
          return (
            (t.flipY = !1),
            (t.magFilter = M),
            (t.minFilter = M),
            (t.colorSpace = ``),
            (t.generateMipmaps = !1),
            (t.wrapS = t.wrapT = ze),
            (t.needsUpdate = !0),
            t
          );
        })));
    }
    disposeGpu() {
      for (let e of this.textures) e.dispose();
      this.textures = [];
    }
  },
  tt = (55 * Math.PI) / 180,
  nt = [
    -Math.cos(tt) * Math.SQRT1_2,
    -Math.cos(tt) * Math.SQRT1_2,
    Math.sin(tt),
  ],
  rt = [(10 / 255) * 2.5, (6 / 255) * 2.5, (34 / 255) * 2.5],
  it = `vec3(0.55, 0.65, 1.0)`,
  at = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ].map((e) => {
    let t = e[2] === 0 ? [0, 0, 1] : [0, 1, 0],
      n = [-e[0], -e[1], -e[2]];
    return {
      fwd: e,
      up: t,
      right: [
        t[1] * n[2] - t[2] * n[1],
        t[2] * n[0] - t[0] * n[2],
        t[0] * n[1] - t[1] * n[0],
      ],
    };
  }),
  ot = (e) => `vec3(${e.map((e) => (e + 0).toFixed(1)).join(`, `)})`,
  st = (e) => `vec3[6](${at.map((t) => ot(t[e])).join(`, `)})`,
  ct = `
#ifndef HD_NIGHT
#define HD_NIGHT
uniform vec4 uNightFall;  // the player (world px), the reach (px), how much (0 by day .. 1 by full dark)
uniform vec4 uCity;       // the city's middle (world px), where its light ends: inner, outer radius
// what's left of the night's ambient (and fog) at P: in the city all of it; outside, a little less
// and falling to nothing away from the player, so only lights hold the dark back
float hdNightFall(vec3 P) {
  if (uNightFall.w <= 0.0) return 1.0;
  float outside = smoothstep(uCity.z, uCity.w, distance(P.xy, uCity.xy));
  float d = distance(P.xy, uNightFall.xy) / uNightFall.z;
  float k = mix(1.0, 0.6 * exp(-d * d), outside);
  return mix(1.0, k, uNightFall.w);
}
#endif
`,
  lt = `
precision highp sampler2DShadow;
${ct}
uniform vec4 uCloud;      // cloud shadows by day: strength, scale (1/px), drift (world px)
uniform float uAmb;
uniform float uSun;
uniform vec3 uSunDir;
uniform vec3 uMoonDir;
uniform vec3 uNight;
uniform float uMoon;
uniform float uDark;
uniform float uFxAmb;
uniform vec4 uPt[64];
uniform int uPtN;
uniform vec4 uLn[48];
uniform int uLnN;
uniform sampler2DShadow uSunStatic;
uniform sampler2DShadow uSunDynamic;
uniform mat4 uSunMat;
uniform vec2 uSunTexel;
uniform float uShadowOn;
uniform float uShadowStr;
uniform float uShadowSoft;
uniform sampler2DShadow uHero;
uniform float uHeroOn;
uniform float uHeroFar;
#ifdef HD_SPACE
uniform float uHeroFade;
uniform vec3 uHeroPos;
#endif
float hdWrap(float x) { return max(x + 0.5, 0.0) / 1.5; }
// The lights' sum, added over the sky: as it is while its brightest channel is under HD_KNEE, then
// that channel rolling off toward HD_LMAX and the others scaled with it (the hue kept). Over daylight
// that keeps a spell skimming pale stone or grass at a warm glow, not bleached white or lime; the 2D
// lights and lava pass under the knee but at their hearts.
const float HD_KNEE = 0.8;
const float HD_LMAX = 1.3;
vec3 hdKnee(vec3 a) {
  float m = max(a.r, max(a.g, a.b));
  if (m <= HD_KNEE) return a;
  return a * ((HD_KNEE + (HD_LMAX - HD_KNEE) * (1.0 - exp(-(m - HD_KNEE) / (HD_LMAX - HD_KNEE)))) / m);
}
// the sun on a face: up-facing exactly 1, upright faces by how far they turn to the sun
float hdFace(vec3 N) {
  if (N.z >= 0.9999) return 1.0;
  float h = length(N.xy);
  float side = h < 1e-4 ? 0.72 : 0.86 + 0.14 * dot(N.xy / h, normalize(uSunDir.xy));
  return mix(side, 1.0, clamp(N.z, 0.0, 1.0));
}
`,
  ut = `
const float HD_HNEAR = ${(1).toFixed(1)};
const vec3 HD_HF[6] = ${st(`fwd`)};
const vec3 HD_HU[6] = ${st(`up`)};
const vec3 HD_HR[6] = ${st(`right`)};

// hardware PCF, each lookup a bilinear 2x2 compare: 4 lookups half a texel out (a 2x2 box); soft,
// 3x3 lookups a texel apart with tent weights (an edge 4 texels wide, smooth and steady as the
// camera moves: the sun maps on High and Medium)
float hdPcf4(sampler2DShadow m, vec3 s, vec2 t) {
  return 0.25 * (textureLod(m, vec3(s.xy + vec2(-0.5, -0.5) * t, s.z), 0.0)
    + textureLod(m, vec3(s.xy + vec2(0.5, -0.5) * t, s.z), 0.0)
    + textureLod(m, vec3(s.xy + vec2(-0.5, 0.5) * t, s.z), 0.0)
    + textureLod(m, vec3(s.xy + vec2(0.5, 0.5) * t, s.z), 0.0));
}
#define HD_PCF(i, j) textureLod(m, vec3(s.xy + vec2(i, j) * t, s.z), 0.0)
float hdPcf(sampler2DShadow m, vec3 s, vec2 t) {
  float v = 0.0;
  if (uShadowSoft < 0.5) v = hdPcf4(m, s, t);
  else
    v = (4.0 * HD_PCF(0.0, 0.0)
      + 2.0 * (HD_PCF(-1.0, 0.0) + HD_PCF(1.0, 0.0) + HD_PCF(0.0, -1.0) + HD_PCF(0.0, 1.0))
      + HD_PCF(-1.0, -1.0) + HD_PCF(1.0, -1.0) + HD_PCF(-1.0, 1.0) + HD_PCF(1.0, 1.0)) / 16.0;
  return v;
}
#undef HD_PCF

// The sun's (and the moon's) visibility: 1 lit, 1 - uShadowStr fully shadowed.
// uShadowOn: 1 the static map, 2 the dynamic one, 3 both. uSunMat already holds the depth bias.
float hdSunVis(vec3 P) {
  if (uShadowOn < 0.5) return 1.0;
  vec3 s = (uSunMat * vec4(P, 1.0)).xyz;
  if (any(lessThan(s, vec3(0.0))) || any(greaterThan(s, vec3(1.0)))) return 1.0;
  float v = 1.0;
  if (mod(uShadowOn, 2.0) > 0.5) v = hdPcf(uSunStatic, s, vec2(uSunTexel.x));
  if (uShadowOn > 1.5) v = min(v, hdPcf(uSunDynamic, s, vec2(uSunTexel.y)));
  return 1.0 - uShadowStr * (1.0 - v);
}

// Point light 0 through the hero cube: the face is the major axis of P - light, each face a
// 90° perspective view stored as hardware depth, so the reference depth goes through the same curve.
float hdHeroVis(vec3 P) {
#ifdef HD_SPACE
  // (a torch's cube looks out from a little off its wall)
  vec3 v = P - uHeroPos;
#else
  vec3 v = P - uPt[0].xyz;
#endif
  vec3 a = abs(v);
  int f = a.x >= a.y && a.x >= a.z ? (v.x > 0.0 ? 0 : 1) : a.y >= a.z ? (v.y > 0.0 ? 2 : 3) : (v.z > 0.0 ? 4 : 5);
  float z = dot(v, HD_HF[f]);
  if (z <= HD_HNEAR || z >= uHeroFar) return 1.0;
  vec2 size = vec2(textureSize(uHero, 0));
  float S = size.y * 0.5;
  vec2 uv = clamp(vec2(dot(v, HD_HR[f]), dot(v, HD_HU[f])) / z * 0.5 + 0.5, vec2(1.0 / S), vec2(1.0 - 1.0 / S));
  vec2 st = (vec2(float(f % 3), float(f / 3)) + uv) / vec2(3.0, 2.0);
  float zr = max(z - 1.5 - 0.015 * z, HD_HNEAR);
  float ref = uHeroFar / (uHeroFar - HD_HNEAR) * (1.0 - HD_HNEAR / zr);
  float vis = hdPcf4(uHero, vec3(st, ref), 1.0 / size);
#ifdef HD_SPACE
  // a torch's shadows fade in and out as it takes the cube and hands it on
  vis = mix(1.0, vis, uHeroFade);
#endif
  return 0.12 + 0.88 * vis;
}

// the shadows of clouds drifting over: two octaves of value noise, soft-edged, 1 in the clear
float hdHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float hdNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = p - i;
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hdHash(i), hdHash(i + vec2(1, 0)), f.x), mix(hdHash(i + vec2(0, 1)), hdHash(i + vec2(1, 1)), f.x), f.y);
}
float hdCloud(vec3 P) {
  if (uCloud.x <= 0.0) return 1.0;
  vec2 q = (P.xy + uCloud.zw) * uCloud.y;
  float n = 0.65 * hdNoise(q) + 0.35 * hdNoise(q * 2.3 + 17.0);
  return 1.0 - uCloud.x * smoothstep(0.52, 0.72, n);
}

vec3 hdLightVis(vec3 P, vec3 N, float vis) {
  vec3 day = vec3(uAmb + uSun * vis * hdCloud(P) * hdFace(N));
  vec3 night = uNight + ${it} * (uMoon * vis * hdWrap(dot(N, uMoonDir)));
  // the whole sky's light falls off at night outside the city (full dark still keeps 18% of the day's)
  vec3 L = mix(day, night, uDark) * uFxAmb * hdNightFall(P);
  vec3 A = vec3(0.0);
  for (int i = 0; i < 32; i++) {
    if (i >= uPtN) break;
    vec4 p = uPt[i * 2];
    vec4 c = uPt[i * 2 + 1];
    vec3 d = p.xyz - P;
    float dd = dot(d, d);
    float r = p.w;
    float k = (r * r / (r * r + dd)) * exp(-sqrt(dd) / (r * 3.0)) * (0.5 + 0.5 * dot(N, d * inversesqrt(max(dd, 1e-4))));
    if (i == 0 && uHeroOn > 0.5) k *= hdHeroVis(P);
    A += c.rgb * (c.a * k);
  }
  for (int i = 0; i < 16; i++) {
    if (i >= uLnN) break;
    vec4 la = uLn[i * 3];
    vec3 ab = uLn[i * 3 + 1].xyz - la.xyz;
    vec4 c = uLn[i * 3 + 2];
    float t = clamp(dot(P - la.xyz, ab) / max(dot(ab, ab), 1e-3), 0.0, 1.0);
    vec3 d = la.xyz + ab * t - P;
    float dd = dot(d, d);
    float r = la.w;
    float k = (r * r / (r * r + dd)) * exp(-sqrt(dd) / (r * 2.5)) * (0.5 + 0.5 * dot(N, d * inversesqrt(max(dd, 1e-4))));
    A += c.rgb * (c.a * k);
  }
  return L + hdKnee(A);
}

vec3 hdLight(vec3 P, vec3 N) {
  return hdLightVis(P, N, hdSunVis(P));
}

// A closed solid's face (walls, buildings, towers): one turned from the sun is in its own solid's
// shadow, always, so the map would put every facade the camera sees in shade. hdFace already gives
// it its share of the sun, and nothing else could shade it but the solid behind it: no map.
vec3 hdLightSolid(vec3 P, vec3 N) {
  return hdLightVis(P, N, dot(N, uSunDir) < 0.0 ? 1.0 : hdSunVis(P));
}
`,
  dt = null;
function ft() {
  return (
    dt ||
      ((dt = new Ye(1, 1, be)),
      (dt.compareFunction = 515),
      (dt.needsUpdate = !0)),
    dt
  );
}
function pt() {
  return {
    uAmb: { value: 0.5 },
    uSun: { value: 0.5 },
    uSunDir: { value: new V(...nt) },
    uMoonDir: { value: new V(...nt) },
    uNight: { value: new z(...rt) },
    uMoon: { value: 0.12 },
    uDark: { value: 0 },
    uFxAmb: { value: 1 },
    uPt: { value: Array.from({ length: 64 }, () => new j()) },
    uPtN: { value: 0 },
    uLn: { value: Array.from({ length: 48 }, () => new j()) },
    uLnN: { value: 0 },
    uSunStatic: { value: ft() },
    uSunDynamic: { value: ft() },
    uSunMat: { value: new N() },
    uSunTexel: { value: new P(1, 1) },
    uShadowOn: { value: 0 },
    uShadowStr: { value: 0.55 },
    uShadowSoft: { value: 0 },
    uHero: { value: ft() },
    uHeroOn: { value: 0 },
    uHeroFar: { value: 1 },
    uHeroFade: { value: 0 },
    uHeroPos: { value: new V(0, 0, 0) },
    uHeroSkip: { value: new V(0, 0, 0) },
    uFogCol: { value: new z(0, 0, 0) },
    uFogDen: { value: 0 },
    uFogH: { value: 0 },
    uFocusD: { value: 1 },
    uEye: { value: new V() },
    uNightFall: { value: new j(0, 0, 1, 0) },
    uCity: { value: new j(0, 0, 1, 2) },
    uCloud: { value: new j(0, 0.004, 0, 0) },
  };
}
var mt = `
${ct}
#ifndef HD_FOG_PARS
#define HD_FOG_PARS
uniform vec3 uFogCol;
uniform float uFogDen;
uniform float uFogH;
uniform float uFocusD;
uniform vec3 uEye;
uniform vec3 uLift;
uniform float uSpFogOn;
uniform sampler2D uSpFogTex;
uniform sampler2D uSpFogMask;
uniform vec4 uSpFogRect;
uniform vec2 uSpFogOff;
uniform float uSpFogA;
#endif
`,
  ht = `
float hdFogAmt(vec3 P) {
  if (uFogDen <= 0.0) return 0.0;
  float d = max(distance(P, uEye) - uFocusD, 0.0);
  return (1.0 - exp(-d * uFogDen)) * exp(-max(P.z, 0.0) * uFogH);
}
// the space's fog on the ground under P: its amount, and its colour in col
float hdSpFogAmt(vec3 P, out vec3 col) {
  col = vec3(0.0);
  if (uSpFogOn < 0.5) return 0.0;
  vec2 ts = vec2(textureSize(uSpFogTex, 0));
  vec4 t = texelFetch(uSpFogTex, ivec2(mod(floor(P.xy + uSpFogOff), ts)), 0);
  vec2 ms = vec2(textureSize(uSpFogMask, 0));
  vec2 m = floor((P.xy - uSpFogRect.xy) / uSpFogRect.zw * ms);
  if (m.x < 0.0 || m.y < 0.0 || m.x >= ms.x || m.y >= ms.y) return 0.0;
  col = t.rgb;
  return uSpFogA * t.a * texelFetch(uSpFogMask, ivec2(m), 0).r * exp(-max(P.z, 0.0) / 10.0);
}
vec3 hdFogC(vec3 lit, vec3 emissive, vec3 P, float cover) {
  float f = hdFogAmt(P);
  // (the night's fall-off as hdFog's: off in a space, uNightFall.w 0, so the fog colour as it was)
  vec3 c = mix(lit + uLift * (1.0 - cover), uFogCol * hdNightFall(P), f) + emissive * (1.0 - 0.4 * f);
  vec3 sc;
  float s = hdSpFogAmt(P, sc);
  return s > 0.0 ? mix(c, sc, s) : c;
}
vec3 hdFog(vec3 lit, vec3 emissive, vec3 P) {
#ifdef HD_SPACE
  return hdFogC(lit, emissive, P, 0.0);
#else
  float f = hdFogAmt(P);
  // at night the fog dies away from the player outside the city, as the ambient does
  return mix(lit, uFogCol * hdNightFall(P), f) + emissive * (1.0 - 0.4 * f);
#endif
}
`,
  gt = `HD_SPACE`;
function _t(e, t) {
  if ((!!e.defines && `HD_SPACE` in e.defines) === t) return !1;
  let n = { ...(e.defines ?? {}) };
  return (
    t ? (n[gt] = 1) : delete n[gt],
    (e.defines = n),
    (e.needsUpdate = !0),
    !0
  );
}
function vt(e) {
  return e.isRawShaderMaterial === !0 && e.fragmentShader.includes(`hdFog(`);
}
var yt = [10 / 255, 6 / 255, 34 / 255],
  bt = null;
function xt() {
  return (
    bt ||
      ((bt = new Oe(new Uint8Array([255, 255, 255, 255]), 1, 1, Ue, Se)),
      (bt.colorSpace = ``),
      (bt.needsUpdate = !0)),
    bt
  );
}
function St() {
  return {
    uLift: { value: new z(0, 0, 0) },
    uSpFogOn: { value: 0 },
    uSpFogTex: { value: xt() },
    uSpFogMask: { value: xt() },
    uSpFogRect: { value: new j(0, 0, 1, 1) },
    uSpFogOff: { value: new P(0, 0) },
    uSpFogA: { value: 0 },
  };
}
var Ct = `
vec4 hdSharp(sampler2D t, vec2 uv, vec2 size) {
  vec2 p = uv * size;
  vec2 seam = floor(p + 0.5);
  vec2 w = max(fwidth(p), vec2(1e-5));
  p = seam + clamp((p - seam) / w, -0.5, 0.5);
  return textureGrad(t, p / size, dFdx(uv), dFdy(uv));
}
float hdBayer4(vec2 fc) {
  ivec2 q = ivec2(mod(fc, 4.0));
  int i = q.x + q.y * 4;
  float m[16] = float[16](0., 8., 2., 10., 12., 4., 14., 6., 3., 11., 1., 9., 15., 7., 13., 5.);
  return (m[i] + 0.5) / 16.0;
}
`,
  wt = `
vec2 hdSharpW(vec2 p) {
  vec2 seam = floor(p + 0.5);
  return clamp((p - seam) / max(fwidth(p), vec2(1e-4)), -0.5, 0.5) + 0.5;
}
`,
  K = { foot: `aFoot`, rect: `aRect`, box: `aBox` },
  Tt = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2, 0, 3, 1, 3],
  Et = [0, 2, 1, 1, 2, 3, 4, 6, 5, 5, 6, 7];
function Dt() {
  let e = new L(),
    t = new Float32Array(24);
  for (let e = 0; e < 8; e++)
    ((t[e * 3] = Tt[e * 2]), (t[e * 3 + 1] = Tt[e * 2 + 1]));
  return (e.setAttribute(`position`, new U(t, 3)), e.setIndex([...Et]), e);
}
function Ot() {
  return {
    uEye: { value: new V() },
    uFocusD: { value: 0 },
    uRes: { value: new P(1, 1) },
    uK: { value: 1 },
    uMe: { value: new P(1e9, 1e9) },
    uOccl: { value: new V(-1e4, -1e4, 1e9) },
  };
}
function kt(e, t, n = t.res.w, r = t.res.h) {
  (e.uEye.value.copy(t.cam.eye),
    (e.uFocusD.value = t.cam.cal ? 0 : t.cam.D),
    e.uRes.value.set(Math.max(1, n), Math.max(1, r)),
    (e.uK.value = t.k),
    e.uMe.value.set(t.f.me.x, t.f.me.y),
    e.uOccl.value.set(t.occl.sx, t.occl.sy, t.occl.wy));
}
var At = 254.5 / 255,
  jt = 0.5,
  Mt = `0.25`,
  Nt = `${B}
in vec3 position;
in vec4 aFoot;
in vec4 aRect;
in vec4 aBox;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform vec3 uBbEye;
uniform float uBbFocusD;
uniform vec2 uBbRes;
uniform float uBbK;
uniform vec2 uBbMe;
#ifdef PASS_SHADOW
uniform vec3 uHeroSkip;
#endif
out vec2 vT;
out vec3 vP;
flat out vec4 vRect;
flat out vec4 vBox;
flat out float vFlat;
flat out float vFade;
#ifdef HD_SPACE
flat out float vFront;
#endif
vec2 bbPx(vec4 c) { return (c.xy / c.w * 0.5 + 0.5) * uBbRes; }
void main() {
  float hw = aBox.x, up = aBox.y, down = aBox.z;
  float col = position.x, sel = position.y;
  float row = sel < 0.5 ? 0.0 : sel < 2.5 ? up : up + down;
  float flatPart = sel > 1.5 ? 1.0 : 0.0;
  vT = vec2(col * 2.0 * hw, row);
  vRect = aRect;
  vBox = aBox;
  vFlat = flatPart;
  float fade = 1.0;
#ifdef AOI
  if (aFoot.w > 0.5) fade = 1.0 - smoothstep(288.0, 320.0, distance(aFoot.xy, uBbMe));
#endif
  vFade = fade;
#ifdef HD_SPACE
  vFront = step(1.5, aFoot.w);
#endif
  vec3 A = aFoot.xyz;
  float s = 1.0;
#ifdef TEXEL_LOCK
  if (uBbFocusD > 0.0) s = distance(uBbEye, A) / uBbFocusD;
#endif
  float lx = (col - 0.5) * 2.0 * hw;
  vec3 P = flatPart > 0.5
    ? vec3(A.x + lx * s, A.y + (row - up) * s, 0.2)
    : vec3(A.x + lx * s, A.y, A.z + (up - row) * s);
  vP = P;
  mat4 PV = projectionMatrix * viewMatrix;
  vec4 cP = PV * vec4(P, 1.0);
#ifdef PASS_SHADOW
  // only the upright piece casts: the flat piece is the baked shadow. Under a point light (the hero
  // cube's perspective faces) it turns about its foot to face the light: a bolt flying past along its
  // row throws the sprite's silhouette, not the edge of its quad
  if (projectionMatrix[3][3] < 0.5) {
    vec2 d = (-transpose(mat3(viewMatrix)) * viewMatrix[3].xyz).xy - A.xy;
    float dl = length(d);
    if (dl > 1e-3) P.xy = A.xy + vec2(d.y, -d.x) * (lx * s / dl);
    cP = PV * vec4(P, 1.0);
    // a torch's own card (the sconce it hangs on) throws nothing from its light
    if (distance(A.xy, uHeroSkip.xy) < uHeroSkip.z) cP = vec4(2.0, 2.0, 2.0, 1.0);
  }
  gl_Position = flatPart > 0.5 ? vec4(2.0, 2.0, 2.0, 1.0) : cP;
#else
  float z = cP.z / cP.w - flatPart * 0.0002;
#ifdef TEXEL_LOCK
  vec4 cA = PV * vec4(A, 1.0);
  vec2 pxA = bbPx(cA);
#ifdef PIXEL_SNAP
  vec2 snap = floor(pxA + 0.5) - pxA;
#else
  vec2 snap = vec2(0.0);
#endif
  vec2 px;
  if (flatPart < 0.5) px = pxA + snap + vec2(lx, up - row) * uBbK;
  else if (sel < 2.5) px = vec2(pxA.x + lx * uBbK, bbPx(PV * vec4(A.xy, 0.0, 1.0)).y) + snap;
  else px = bbPx(PV * vec4(P.xy, 0.0, 1.0)) + snap;
  gl_Position = vec4(px / uBbRes * 2.0 - 1.0, z, 1.0) * cA.w;
#else
  vec4 cG = flatPart > 0.5 ? PV * vec4(P.xy, 0.0, 1.0) : cP;
  gl_Position = vec4(cG.xy / cG.w, z, 1.0) * cG.w;
#endif
#endif
}
`,
  Pt = `
uniform sampler2D uBbMap;
uniform float uBbFlipY;
uniform float uBbCut;
in vec2 vT;
in vec3 vP;
flat in vec4 vRect;
flat in vec4 vBox;
flat in float vFlat;
flat in float vFade;
// texels per art px: the rect's width in texels over the box's (1 for art at 1 per px)
float bbDens(vec2 ts) {
  return max(1.0, floor((vRect.z - vRect.x) * ts.x / max(2.0 * vBox.x, 1.0) + 0.5));
}
vec4 bbTexel(vec2 t, vec2 size, vec2 ts) {
  if (t.x < 0.0 || t.y < 0.0 || t.x >= size.x || t.y >= size.y) return vec4(0.0);
  t += floor(vRect.xy * ts + 0.5);
  if (uBbFlipY > 0.5) t.y = ts.y - 1.0 - t.y;
  return texelFetch(uBbMap, ivec2(t), 0);
}
vec4 bbSample() {
  vec2 ts = vec2(textureSize(uBbMap, 0));
  float dn = bbDens(ts);
  vec2 size = max(vec2(2.0 * vBox.x, vBox.y + vBox.z) * dn, vec2(1.0));
#ifdef TEXEL_LOCK
  return bbTexel(clamp(floor(vT * dn), vec2(0.0), size - 1.0), size, ts);
#else
  vec2 g = mix(vRect.xy, vRect.zw, vT * dn / size);
  vec2 tex = g * ts;
  vec2 seam = floor(tex + 0.5);
  tex = seam + clamp((tex - seam) / max(fwidth(tex), vec2(1e-4)), -0.5, 0.5);
  vec2 uv = tex / ts;
  if (uBbFlipY > 0.5) uv.y = 1.0 - uv.y;
  return textureGrad(uBbMap, uv, dFdx(g), dFdy(g));
#endif
}
#ifndef PASS_SHADOW
void bbSplit(out vec4 solid, out vec4 soft) {
  vec2 ts = vec2(textureSize(uBbMap, 0));
  float dn = bbDens(ts);
  vec2 size = max(vec2(2.0 * vBox.x, vBox.y + vBox.z) * dn, vec2(1.0));
  vec2 tt = vT * dn;
  vec2 f = hdSharpW(tt);
  vec2 t0 = floor(tt + 0.5) - 1.0;
  solid = vec4(0.0);
  soft = vec4(0.0);
  for (int j = 0; j < 4; j++) {
    vec2 q = vec2(float(j & 1), float(j >> 1));
    vec4 c = bbTexel(t0 + q, size, ts);
    vec2 wq = mix(1.0 - f, f, q);
    float w = wq.x * wq.y;
    float a = c.a * vBox.w;
    if (a >= uBbCut) solid += vec4(c.rgb, 1.0) * w;
    else soft += vec4(c.rgb, 1.0) * (a * w);
  }
  solid.rgb /= max(solid.a, 1e-5);
}
#endif
`,
  Ft = `${B}
#define BB_WHOLE 0.999
${lt}
${wt}
${Pt}
uniform float uBbK;
uniform vec2 uBbRes;
uniform vec3 uBbOccl;
#ifdef HD_SPACE
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
flat in float vFront;
#endif
out vec4 fragColor;
${ut}
${mt}
${ht}
float bbBayer(vec2 p) {
  ivec2 q = ivec2(mod(p, 4.0));
  int i = q.x + q.y * 4;
  float m[16] = float[16](0., 8., 2., 10., 12., 4., 14., 6., 3., 11., 1., 9., 15., 7., 13., 5.);
  return (m[i] + 0.5) / 16.0;
}
void main() {
  vec2 art = vec2(gl_FragCoord.x, uBbRes.y - gl_FragCoord.y) / uBbK;
  float dith = bbBayer(floor(art));
#ifdef OCCL
  // see-through round the player when this stands in front of them
  if (vBox.y + vBox.z > 24.0 && vP.y > uBbOccl.z + 4.0 && distance(art, uBbOccl.xy) < 28.0 && dith < 0.5) discard;
#endif
  // the cut takes the pixels solid texels cover wholly; the fringe the rest: where a solid texel's
  // edge crosses the pixel its share (a silhouette smooth at any sub-pixel position, and steady: no
  // alpha-to-coverage, which some drivers dither) and the translucent texels' share (NO_SOFT: none)
  vec4 solid, soft;
  bbSplit(solid, soft);
  bool whole = solid.a >= BB_WHOLE;
#ifdef PASS_CUT
  if (!whole || dith >= vFade) discard;
  vec4 c = solid;
#else
  vec4 p = whole ? vec4(0.0) : vec4(solid.rgb * solid.a, solid.a);
#ifndef NO_SOFT
  p += soft;
#endif
  vec4 c = vec4(p.rgb / max(p.a, 1e-5), p.a);
  float a = p.a * vFade;
  if (a <= 0.0) discard;
#endif
  vec3 N = vec3(0.0, 0.0, 1.0);
  if (vFlat < 0.5) {
    float ang = (vT.x / max(2.0 * vBox.x, 1.0) - 0.5) * 1.2;
    N = normalize(vec3(sin(ang), 0.8 * cos(ang), 0.45));
  }
  vec3 col = hdFog(c.rgb * hdLight(vP, N), vec3(0.0), vP);
#ifdef HD_SPACE
  // a space's upright pieces take their depth per pixel: the texel lock interpolates it linearly up
  // the quad, off the true depth by a px or more on a tall one, enough to stand a boss on your row in
  // front of you; and the player's nearer by BB_TIE px (their flat piece by a hair)
  if (vFlat < 0.5) {
    vec4 cz = projectionMatrix * viewMatrix * vec4(vP + vec3(0.0, vFront * ${Mt}, 0.0), 1.0);
    gl_FragDepth = cz.z / cz.w * 0.5 + 0.5;
  } else gl_FragDepth = gl_FragCoord.z - vFront * 1e-5;
#endif
#ifdef PASS_CUT
  fragColor = vec4(col, 0.0);
#else
  fragColor = vec4(col * a, a);
#endif
}
`,
  It = `${B}
${Pt}
out vec4 fragColor;
void main() {
  vec4 c = bbSample();
  if (c.a * vBox.w < 0.5 || vFade < 0.5) discard;
  fragColor = vec4(1.0);
}
`;
function Lt(e) {
  let t = e.cam,
    n = {};
  (e.texelLock && (n.TEXEL_LOCK = 1),
    e.aoi && (n.AOI = 1),
    e.soft === !1 && (n.NO_SOFT = 1),
    e.occl && e.pass !== `shadow` && (n.OCCL = 1),
    (n[
      e.pass === `cut`
        ? `PASS_CUT`
        : e.pass === `fringe`
          ? `PASS_FRINGE`
          : `PASS_SHADOW`
    ] = 1));
  let r = {
      ...e.lit,
      uBbMap: { value: e.map },
      uBbFlipY: { value: +!!e.map.flipY },
      uBbCut: { value: e.texelLock ? At : jt },
      uBbEye: t.uEye,
      uBbFocusD: t.uFocusD,
      uBbRes: t.uRes,
      uBbK: t.uK ?? { value: 1 },
      uBbMe: t.uMe ?? { value: new P(1e9, 1e9) },
      uBbOccl: t.uOccl ?? { value: new V(-1e4, -1e4, 1e9) },
    },
    i = new H({
      glslVersion: W,
      vertexShader: Nt,
      fragmentShader: e.pass === `shadow` ? It : Ft,
      uniforms: r,
      defines: n,
      side: 2,
      depthTest: !0,
      depthWrite: e.pass !== `fringe`,
      transparent: e.pass === `fringe`,
      colorWrite: e.pass !== `shadow`,
      blending: 0,
    });
  return (
    e.pass === `fringe` &&
      ((i.blending = 5),
      (i.blendEquation = 100),
      (i.blendSrc = 201),
      (i.blendDst = 205),
      (i.blendSrcAlpha = 200),
      (i.blendDstAlpha = 201)),
    i
  );
}
var Rt = {
    id: `aether-crystal`,
    title: `The Aether Crystal`,
    replaces: [`scenery:crystal-0`],
    fit: `sprite`,
    jitter: null,
    glb: `aether-crystal.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 30, depthPx: 30.1, heightPx: 41.3 },
    texture: { size: 4096, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 22284,
    anim: null,
    glow: { strength: 11.579, lights: [], gain: 0.2 },
    sprite: { file: `sprite.png`, size: [46, 59], anchor: [17, 43] },
  },
  zt = {
    id: `aether-shard-cluster`,
    title: `Aether shard cluster`,
    replaces: [`scenery:shardCluster`],
    fit: `sprite`,
    jitter: null,
    glb: `aether-shard-cluster.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 18, depthPx: 15.7, heightPx: 15.8 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 5623,
    anim: null,
    glow: {
      strength: 14.547,
      lights: [
        {
          x: 0.6,
          y: -1.3,
          z: 7.9,
          r: 27.8,
          color: `#44c9f0`,
          a: 0.65,
          flicker: 0,
        },
      ],
      gain: 1,
    },
    sprite: { file: `sprite.png`, size: [23, 29], anchor: [11, 22] },
  },
  Bt = {
    id: `ashen-deadtree`,
    title: `Ashen dead tree`,
    replaces: [`scenery:deadtree-0`],
    fit: `sprite`,
    jitter: { yaw: 60, scale: 0.15 },
    glb: `ashen-deadtree.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 26, depthPx: 20.7, heightPx: 43.2 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 9015,
    anim: { sway: 0.4 },
    glow: {
      strength: 2.137,
      lights: [
        {
          x: 0.4,
          y: 3.6,
          z: 18.7,
          r: 12,
          color: `#ff6a1a`,
          a: 0.55,
          flicker: 0.25,
        },
      ],
      gain: 1,
    },
    sprite: { file: `sprite.png`, size: [46, 63], anchor: [14, 50] },
  },
  Vt = {
    id: `ashwalker-sleeper`,
    title: `A Sleeper of the Long Scar`,
    replaces: [
      `scenery:obsidian-0`,
      `scenery:obsidian-1`,
      `scenery:obsidian-2`,
      `scenery:obsidian-3`,
    ],
    fit: `sprite`,
    jitter: { yaw: 60, scale: 0.15 },
    glb: `ashwalker-sleeper.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 20, depthPx: 22, heightPx: 7.5 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 6902,
    anim: null,
    glow: { strength: 9.266, lights: [], gain: 1 },
    sprite: { file: `sprite.png`, size: [23, 22], anchor: [11, 13] },
  },
  Ht = {
    id: `barrowdeep-entrance`,
    title: `The Barrowdeep's mouth`,
    replaces: [`dungeon:barrowdeep`],
    fit: `size`,
    jitter: null,
    glb: `barrowdeep-entrance.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 33.73,
    sizePx: { widthPx: 80, depthPx: 67.5, heightPx: 58.4 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 38535,
    anim: null,
    glow: {
      strength: 11.293,
      lights: [
        {
          x: -20.4,
          y: 30.4,
          z: 3.1,
          r: 40,
          color: `#7ff0e6`,
          a: 1,
          flicker: 0,
        },
        { x: 15.3, y: 29.7, z: 3.1, r: 40, color: `#7ff0e6`, a: 1, flicker: 0 },
      ],
      gain: 0.5,
    },
    sprite: { file: `sprite.png`, size: [104, 101], anchor: [42, 91] },
  },
  Ut = {
    id: `castle-tower-cryo`,
    title: `The cryo tower of the Sanctum`,
    replaces: [`scenery:tower-castle-cryo`],
    fit: `footprint`,
    jitter: null,
    glb: `castle-tower-cryo.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 25.71,
    sizePx: { widthPx: 64, depthPx: 51.4, heightPx: 130.3 },
    texture: { size: 4096, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 47287,
    anim: null,
    glow: {
      strength: 2.724,
      lights: [
        {
          x: -2.8,
          y: -0.1,
          z: 84.2,
          r: 40,
          color: `#9cdeff`,
          a: 1,
          flicker: 0,
        },
      ],
      gain: 0.6,
    },
    sprite: { file: `sprite.png`, size: [98, 180], anchor: [34, 153] },
  },
  Wt = {
    id: `castle-tower-pyro`,
    title: `The pyro tower of the Sanctum`,
    replaces: [`scenery:tower-castle-pyro`],
    fit: `footprint`,
    jitter: null,
    glb: `castle-tower-pyro.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 31.56,
    sizePx: { widthPx: 64, depthPx: 63.1, heightPx: 152.4 },
    texture: { size: 4096, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 53035,
    anim: null,
    glow: {
      strength: 11.797,
      lights: [
        {
          x: 0.8,
          y: 17.8,
          z: 122.5,
          r: 40,
          color: `#ffab56`,
          a: 1,
          flicker: 0,
        },
      ],
      gain: 0.6,
    },
    sprite: { file: `sprite.png`, size: [112, 216], anchor: [34, 177] },
  },
  Gt = {
    id: `castle-tower-storm`,
    title: `The storm tower of the Sanctum`,
    replaces: [`scenery:tower-castle-storm`],
    fit: `footprint`,
    jitter: null,
    glb: `castle-tower-storm.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 26.54,
    sizePx: { widthPx: 64, depthPx: 53.1, heightPx: 207.4 },
    texture: { size: 4096, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 31234,
    anim: null,
    glow: {
      strength: 0.882,
      lights: [
        {
          x: -7.7,
          y: -3.2,
          z: 160.8,
          r: 40,
          color: `#bb93ff`,
          a: 0.57,
          flicker: 0,
        },
      ],
      gain: 0.6,
    },
    sprite: { file: `sprite.png`, size: [135, 281], anchor: [34, 227] },
  },
  Kt = {
    id: `castle-tower-void`,
    title: `The void tower of the Sanctum`,
    replaces: [`scenery:tower-castle-void`],
    fit: `footprint`,
    jitter: null,
    glb: `castle-tower-void.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 31.85,
    sizePx: { widthPx: 64, depthPx: 63.7, heightPx: 178 },
    texture: { size: 4096, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 49941,
    anim: null,
    glow: {
      strength: 0.203,
      lights: [
        {
          x: 0.9,
          y: -0.3,
          z: 163.9,
          r: 40,
          color: `#d1abff`,
          a: 0.55,
          flicker: 0,
        },
      ],
      gain: 0.6,
    },
    sprite: { file: `sprite.png`, size: [124, 244], anchor: [34, 203] },
  },
  qt = {
    id: `castle-wall`,
    title: `The Sanctum's castle wall`,
    replaces: [`wall:1`],
    fit: `size`,
    jitter: null,
    glb: `castle-wall.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 16, depthPx: 10.9, heightPx: 35.1 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 8715,
    anim: null,
    glow: null,
    sprite: { file: `sprite.png`, size: [35, 56], anchor: [10, 40] },
  },
  Jt = {
    id: `cisterns-sluice-house`,
    title: `The Brimming Cisterns' sluice-house`,
    replaces: [`dungeon:cisterns`],
    fit: `size`,
    jitter: null,
    glb: `cisterns-sluice-house.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 40.73,
    sizePx: { widthPx: 80, depthPx: 81.5, heightPx: 67.3 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 63933,
    anim: null,
    glow: {
      strength: 0.202,
      lights: [
        {
          x: 13.3,
          y: 19.2,
          z: 23.3,
          r: 30,
          color: `#7fd06a`,
          a: 0.55,
          flicker: 0,
        },
      ],
      gain: 0.5,
    },
    sprite: { file: `sprite.png`, size: [111, 136], anchor: [42, 125] },
  },
  Yt = {
    id: `crystal-altar`,
    title: `Crystal altar`,
    replaces: [`altar`],
    fit: `size`,
    jitter: null,
    glb: `crystal-altar.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 48, depthPx: 48, heightPx: 40.5 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 54206,
    anim: null,
    glow: {
      strength: 16.057,
      lights: [
        { x: 0.6, y: 0, z: 27.8, r: 63.2, color: `#8ef6ff`, a: 1, flicker: 0 },
      ],
      gain: 1,
    },
    sprite: { file: `sprite.png`, size: [59, 63], anchor: [26, 43] },
  },
  Xt = {
    id: `emberdeep-vent`,
    title: `The Emberdeep's vent`,
    replaces: [`dungeon:emberdeep`],
    fit: `size`,
    jitter: null,
    glb: `emberdeep-vent.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 39.61,
    sizePx: { widthPx: 80, depthPx: 79.2, heightPx: 22.8 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 35961,
    anim: null,
    glow: {
      strength: 17.544,
      lights: [
        {
          x: 0.9,
          y: 7.6,
          z: 14.1,
          r: 50,
          color: `#ff7a1a`,
          a: 1,
          flicker: 0.2,
        },
      ],
      gain: 1,
    },
    sprite: { file: `sprite.png`, size: [84, 64], anchor: [42, 62] },
  },
  Zt = {
    id: `field-rock`,
    title: `Field rock`,
    replaces: [`scenery:rock*`],
    fit: `sprite`,
    jitter: { yaw: 30, scale: 0.2 },
    glb: `field-rock.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 15, depthPx: 16.4, heightPx: 11.1 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 6580,
    glow: null,
    sprite: { file: `sprite.png`, size: [21, 25], anchor: [10, 17] },
  },
  Qt = {
    id: `frost-pine`,
    title: `Frostmere pine`,
    replaces: [
      `scenery:tree09`,
      `scenery:tree10`,
      `scenery:tree11`,
      `scenery:tree12`,
    ],
    fit: `sprite`,
    jitter: { yaw: 60, scale: 0.12 },
    glb: `frost-pine.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 38, depthPx: 39.4, heightPx: 65.8 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 12806,
    anim: { sway: 1.2 },
    glow: null,
    sprite: { file: `sprite.png`, size: [55, 92], anchor: [20, 67] },
  },
  $t = {
    id: `gilded-folly-gates`,
    title: `The Gilded Folly`,
    replaces: [`dungeon:folly`],
    fit: `size`,
    jitter: null,
    glb: `gilded-folly-gates.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 72.55,
    sizePx: { widthPx: 112, depthPx: 145.1, heightPx: 111.5 },
    texture: { size: 4096, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 63415,
    anim: null,
    glow: {
      strength: 5.185,
      lights: [
        {
          x: 7.1,
          y: -19.5,
          z: 17.7,
          r: 40,
          color: `#d0303a`,
          a: 1,
          flicker: 0,
        },
      ],
      gain: 0.6,
    },
    sprite: { file: `sprite.png`, size: [127, 217], anchor: [57, 195] },
  },
  en = {
    id: `glade-bush`,
    title: `Glade bush`,
    replaces: [`scenery:tree05`, `scenery:tree08`],
    fit: `sprite`,
    jitter: { yaw: 90, scale: 0.15 },
    glb: `glade-bush.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 16, depthPx: 16.1, heightPx: 18 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 5350,
    anim: { sway: 0.8 },
    glow: null,
    sprite: { file: `sprite.png`, size: [26, 34], anchor: [10, 22] },
  },
  tn = {
    id: `glade-windmill`,
    title: `Glade windmill`,
    replaces: [`scenery:windmill-1`],
    fit: `sprite`,
    jitter: null,
    glb: `glade-windmill.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 104, depthPx: 74.4, heightPx: 157.3 },
    texture: { size: 4096, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 30533,
    anim: {
      spin: {
        center: [1, 28.85, 102.38],
        axis: [-0.0018, 0.9996, 0.0281],
        rpm: 5,
      },
    },
    glow: null,
    sprite: { file: `sprite.png`, size: [178, 216], anchor: [54, 140] },
  },
  nn = {
    id: `glowcap-mushrooms`,
    title: `Glowcaps`,
    replaces: [`scenery:mushroom-0`],
    fit: `sprite`,
    jitter: { yaw: 90, scale: 0.15 },
    glb: `glowcap-mushrooms.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 14, depthPx: 12.4, heightPx: 14.4 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 8156,
    anim: null,
    glow: { strength: 5.877, lights: [], gain: 1 },
    sprite: { file: `sprite.png`, size: [22, 25], anchor: [8, 16] },
  },
  rn = {
    id: `hall-cryo`,
    title: `Cryomancers' hall`,
    replaces: [`scenery:hall-cryo`],
    fit: `footprint`,
    jitter: null,
    glb: `hall-cryo.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 56.48,
    sizePx: { widthPx: 176, depthPx: 113, heightPx: 99.8 },
    texture: { size: 4096, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 54319,
    anim: null,
    glow: {
      strength: 2.869,
      lights: [
        {
          x: -50.5,
          y: 5.3,
          z: 24.2,
          r: 34.1,
          color: `#5cc8ff`,
          a: 0.81,
          flicker: 0,
        },
        {
          x: 56.8,
          y: -12.9,
          z: 23.2,
          r: 36.9,
          color: `#5cc8ff`,
          a: 0.85,
          flicker: 0,
        },
      ],
      gain: 1,
    },
    sprite: { file: `sprite.png`, size: [201, 217], anchor: [90, 181] },
  },
  an = {
    id: `hall-of-the-circle`,
    title: `The Hall of the Circle`,
    replaces: [`scenery:hall-of-the-circle`],
    fit: `footprint`,
    jitter: null,
    maxHeight: 1,
    glb: `hall-of-the-circle.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 111.53,
    sizePx: { widthPx: 240, depthPx: 223.1, heightPx: 437.9 },
    texture: { size: 4096, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 29789,
    anim: null,
    glow: {
      strength: 10.084,
      lights: [
        {
          x: 10.2,
          y: 11.5,
          z: 92.3,
          r: 120,
          color: `#8ef6ff`,
          a: 1,
          flicker: 0,
        },
      ],
      gain: 1,
    },
    sprite: { file: `sprite.png`, size: [344, 602], anchor: [122, 526] },
  },
  on = {
    id: `hall-pyro`,
    title: `Pyromancers' hall`,
    replaces: [`scenery:hall-pyro`],
    fit: `footprint`,
    jitter: null,
    glb: `hall-pyro.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 51.62,
    sizePx: { widthPx: 176, depthPx: 103.2, heightPx: 122.7 },
    texture: { size: 4096, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 37646,
    anim: null,
    glow: {
      strength: 11.908,
      lights: [
        {
          x: -58.1,
          y: -1.7,
          z: 37.8,
          r: 65.1,
          color: `#ff7a1a`,
          a: 1,
          flicker: 0,
        },
        {
          x: 56.7,
          y: 1.4,
          z: 38.5,
          r: 68.4,
          color: `#ff7a1a`,
          a: 1,
          flicker: 0,
        },
      ],
      gain: 1,
    },
    sprite: { file: `sprite.png`, size: [239, 195], anchor: [90, 164] },
  },
  sn = {
    id: `hall-storm`,
    title: `Stormcallers' hall`,
    replaces: [`scenery:hall-storm`],
    fit: `footprint`,
    jitter: null,
    glb: `hall-storm.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 64.81,
    sizePx: { widthPx: 176, depthPx: 129.6, heightPx: 137.1 },
    texture: { size: 4096, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 35452,
    anim: null,
    glow: {
      strength: 4.884,
      lights: [
        {
          x: -2,
          y: 52.5,
          z: 51.8,
          r: 62.4,
          color: `#a8b8ff`,
          a: 1,
          flicker: 0,
        },
        {
          x: 7.6,
          y: -26.3,
          z: 48.9,
          r: 49.6,
          color: `#a8b8ff`,
          a: 1,
          flicker: 0,
        },
      ],
      gain: 1,
    },
    sprite: { file: `sprite.png`, size: [198, 256], anchor: [90, 216] },
  },
  cn = {
    id: `hall-void`,
    title: `Voidweavers' hall`,
    replaces: [`scenery:hall-void`],
    fit: `footprint`,
    jitter: null,
    glb: `hall-void.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 59.77,
    sizePx: { widthPx: 176, depthPx: 119.5, heightPx: 131.5 },
    texture: { size: 4096, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 36748,
    anim: null,
    glow: {
      strength: 13.283,
      lights: [
        {
          x: 39.9,
          y: -8.5,
          z: 51.8,
          r: 82.5,
          color: `#b84dff`,
          a: 1,
          flicker: 0,
        },
        {
          x: -42,
          y: -12.9,
          z: 48.3,
          r: 87,
          color: `#b84dff`,
          a: 1,
          flicker: 0,
        },
      ],
      gain: 1,
    },
    sprite: { file: `sprite.png`, size: [220, 259], anchor: [90, 214] },
  },
  ln = {
    id: `hollowed-crystal`,
    title: `Hollowed crystal`,
    replaces: [`altar:hollowed`],
    fit: `size`,
    jitter: null,
    glb: `hollowed-crystal.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 70.3, depthPx: 71.1, heightPx: 56 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 57285,
    anim: null,
    glow: {
      strength: 20.928,
      lights: [
        {
          x: 2.2,
          y: 0.6,
          z: 24.3,
          r: 85.5,
          color: `#ff3a2e`,
          a: 1,
          flicker: 0.15,
        },
      ],
      gain: 1,
    },
    sprite: { file: `sprite.png`, size: [82, 92], anchor: [38, 65] },
  },
  un = {
    id: `marizon-cottage`,
    title: `Marizon cottage`,
    replaces: [`kind:house`],
    fit: `footprint`,
    jitter: null,
    glb: `marizon-cottage.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 20.77,
    sizePx: { widthPx: 48, depthPx: 41.5, heightPx: 58 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 59196,
    anim: null,
    glow: {
      strength: 1.498,
      lights: [
        {
          x: -3.1,
          y: -2.3,
          z: 23.9,
          r: 12,
          color: `#ffd98a`,
          a: 0.56,
          flicker: 0,
        },
      ],
      gain: 1,
    },
    sprite: { file: `sprite.png`, size: [73, 105], anchor: [26, 85] },
  },
  dn = {
    id: `marizon-fountain`,
    title: `Marizon's fountain`,
    replaces: [`scenery:fountain`],
    fit: `footprint`,
    jitter: null,
    glb: `marizon-fountain.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 48, depthPx: 48, heightPx: 34.4 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 32207,
    anim: { flow: { speed: 1 } },
    glow: {
      strength: 14.616,
      lights: [
        {
          x: 0.4,
          y: -0.2,
          z: 25.1,
          r: 70.3,
          color: `#8ef6ff`,
          a: 1,
          flicker: 0,
        },
      ],
      gain: 1,
    },
    sprite: { file: `sprite.png`, size: [52, 55], anchor: [26, 36] },
  },
  fn = {
    id: `marizon-gate`,
    title: `A gatehouse of Marizon`,
    replaces: [`gate`],
    fit: `size`,
    jitter: null,
    glb: `marizon-gate.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 8.75,
    sizePx: { widthPx: 48, depthPx: 17.5, heightPx: 32.7 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 36065,
    anim: null,
    glow: null,
    sprite: { file: `sprite.png`, size: [61, 59], anchor: [26, 47] },
  },
  pn = {
    id: `marizon-lamp`,
    title: `A lamp post of Marizon`,
    replaces: [`kind:lamp`],
    fit: `size`,
    jitter: null,
    glb: `marizon-lamp.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 8, depthPx: 8, heightPx: 32 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 8778,
    anim: null,
    glow: { strength: 3.38, lights: [], gain: 0.8 },
    sprite: { file: `sprite.png`, size: [25, 48], anchor: [6, 35] },
  },
  mn = {
    id: `marizon-shop`,
    title: `Marizon shop`,
    replaces: [`kind:shop`],
    fit: `footprint`,
    jitter: null,
    glb: `marizon-shop.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 44.45,
    sizePx: { widthPx: 80, depthPx: 88.9, heightPx: 116.5 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 46125,
    anim: null,
    glow: {
      strength: 2.33,
      lights: [
        {
          x: 1.9,
          y: 24.2,
          z: 34.9,
          r: 22.1,
          color: `#ffd98a`,
          a: 0.79,
          flicker: 0,
        },
      ],
      gain: 1,
    },
    sprite: { file: `sprite.png`, size: [137, 193], anchor: [42, 168] },
  },
  hn = {
    id: `marizon-townhouse`,
    title: `Marizon townhouse`,
    replaces: [`kind:house`],
    fit: `footprint`,
    jitter: null,
    glb: `marizon-townhouse.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 27.12,
    sizePx: { widthPx: 80, depthPx: 54.2, heightPx: 70.6 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 68357,
    anim: null,
    glow: {
      strength: 0.988,
      lights: [
        {
          x: -25.3,
          y: 3.4,
          z: 33.3,
          r: 12,
          color: `#ffd98a`,
          a: 0.57,
          flicker: 0,
        },
        {
          x: 25.9,
          y: 5.9,
          z: 32.2,
          r: 12,
          color: `#ffd98a`,
          a: 0.58,
          flicker: 0,
        },
      ],
      gain: 1,
    },
    sprite: { file: `sprite.png`, size: [111, 117], anchor: [41, 99] },
  },
  gn = {
    id: `oak-tree`,
    title: `Broadleaf tree`,
    replaces: [
      `scenery:tree01`,
      `scenery:tree02`,
      `scenery:tree03`,
      `scenery:tree04`,
      `scenery:tree13`,
    ],
    fit: `sprite`,
    jitter: { yaw: 40, scale: 0.12 },
    glb: `oak-tree.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 40, depthPx: 29.5, heightPx: 45.1 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 12028,
    anim: { sway: 1.6 },
    glow: null,
    sprite: { file: `sprite.png`, size: [57, 72], anchor: [22, 50] },
  },
  _n = {
    id: `rimewell-grotto`,
    title: `The Rimewell Grotto's mouth`,
    replaces: [`dungeon:rimewell`],
    fit: `size`,
    jitter: null,
    glb: `rimewell-grotto.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 33.51,
    sizePx: { widthPx: 80, depthPx: 67, heightPx: 88.3 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 32659,
    anim: null,
    glow: {
      strength: 5.005,
      lights: [
        { x: 2.7, y: 4.2, z: 54.1, r: 34, color: `#bfefff`, a: 1, flicker: 0 },
      ],
      gain: 0.6,
    },
    sprite: { file: `sprite.png`, size: [126, 148], anchor: [42, 136] },
  },
  vn = {
    id: `rune-pillar-broken`,
    title: `Broken rune pillar`,
    replaces: [`scenery:pillar-1`],
    fit: `size`,
    jitter: null,
    glb: `rune-pillar-broken.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 13.2, depthPx: 17.7, heightPx: 38 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 9448,
    anim: null,
    glow: { strength: 11.284, lights: [], gain: 0.6 },
    sprite: { file: `sprite.png`, size: [29, 59], anchor: [9, 45] },
  },
  yn = {
    id: `rune-pillar`,
    title: `Rune pillar`,
    replaces: [`scenery:pillar-0`],
    fit: `size`,
    jitter: null,
    glb: `rune-pillar.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 16.8, depthPx: 16.8, heightPx: 38 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 9073,
    anim: null,
    glow: { strength: 12.26, lights: [], gain: 0.6 },
    sprite: { file: `sprite.png`, size: [39, 66], anchor: [11, 46] },
  },
  bn = {
    id: `stall-cloth`,
    title: `A cloth stall`,
    replaces: [`scenery:stall-cloth-*`, `scenery:stall-flowers-*`],
    fit: `footprint`,
    jitter: null,
    glb: `stall-cloth.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 19.96,
    sizePx: { widthPx: 48, depthPx: 39.9, heightPx: 49.5 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 32438,
    anim: null,
    glow: null,
    sprite: { file: `sprite.png`, size: [76, 82], anchor: [26, 66] },
  },
  xn = {
    id: `stall-food`,
    title: `A food stall`,
    replaces: [
      `scenery:stall-produce-*`,
      `scenery:stall-bread-*`,
      `scenery:stall-fish-*`,
      `scenery:stall-herbs-*`,
    ],
    fit: `footprint`,
    jitter: null,
    glb: `stall-food.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 26.04,
    sizePx: { widthPx: 48, depthPx: 52.1, heightPx: 46.4 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 54387,
    anim: null,
    glow: null,
    sprite: { file: `sprite.png`, size: [74, 86], anchor: [26, 74] },
  },
  Sn = {
    id: `stall-magic`,
    title: `A potion and crystal stall`,
    replaces: [`scenery:stall-potions-*`, `scenery:stall-crystals-*`],
    fit: `footprint`,
    jitter: null,
    glb: `stall-magic.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 13.7,
    sizePx: { widthPx: 48, depthPx: 27.4, heightPx: 43.6 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 33964,
    anim: null,
    glow: {
      strength: 8.468,
      lights: [
        {
          x: 0.1,
          y: 0.8,
          z: 14.9,
          r: 16,
          color: `#5af7ff`,
          a: 0.67,
          flicker: 0,
        },
      ],
      gain: 0.5,
    },
    sprite: { file: `sprite.png`, size: [72, 77], anchor: [26, 65] },
  },
  Cn = {
    id: `town-tower`,
    title: `A tower of the town wall`,
    replaces: [`scenery:tower-town-0`, `scenery:tower-town-1`],
    fit: `footprint`,
    jitter: null,
    glb: `town-tower.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `front`,
    anchorY: 32.18,
    sizePx: { widthPx: 64, depthPx: 64.4, heightPx: 121.2 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 30188,
    anim: null,
    glow: null,
    sprite: { file: `sprite.png`, size: [107, 176], anchor: [34, 146] },
  },
  wn = {
    id: `town-wall`,
    title: `Marizon's town wall`,
    replaces: [`wall:0`],
    fit: `size`,
    jitter: null,
    glb: `town-wall.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 16, depthPx: 9.4, heightPx: 27.3 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 10095,
    anim: null,
    glow: null,
    sprite: { file: `sprite.png`, size: [33, 45], anchor: [10, 33] },
  },
  Tn = {
    id: `warden-stone`,
    title: `Warden stone`,
    replaces: [`scenery:runeStone-*`],
    fit: `sprite`,
    jitter: { yaw: 15, scale: 0.08 },
    glb: `warden-stone.glb`,
    units: `1 unit = 1 art px; glTF +y up, +z the front (south), +x east; origin at the footprint's centre on the ground`,
    anchor: `center`,
    anchorY: 0,
    sizePx: { widthPx: 18, depthPx: 18, heightPx: 24.3 },
    texture: { size: 2048, texelsPerPx: 1, sampler: `nearest`, normalMap: !1 },
    triangles: 4540,
    anim: null,
    glow: {
      strength: 6.269,
      lights: [
        {
          x: -0.1,
          y: 0.8,
          z: 12.4,
          r: 12,
          color: `#9feaf5`,
          a: 0.58,
          flicker: 0,
        },
      ],
      gain: 1,
    },
    sprite: { file: `sprite.png`, size: [28, 40], anchor: [11, 31] },
  },
  En = `/assets/aether-crystal-CHVk1_wr.glb`,
  Dn = `/assets/aether-shard-cluster-BuJBdwLY.glb`,
  On = `/assets/ashen-deadtree-bIYsmHWm.glb`,
  kn = `/assets/ashwalker-sleeper-bSWaQ8F0.glb`,
  An = `/assets/barrowdeep-entrance-BOoDrbaA.glb`,
  jn = `/assets/castle-tower-cryo-Czf7emDG.glb`,
  Mn = `/assets/castle-tower-pyro-CLIsjPez.glb`,
  Nn = `/assets/castle-tower-storm-Cww412im.glb`,
  Pn = `/assets/castle-tower-void-DhzsR1Ci.glb`,
  Fn = `/assets/castle-wall-CBQP60iP.glb`,
  In = `/assets/cisterns-sluice-house-DDA9w6V8.glb`,
  Ln = `/assets/crystal-altar-DXtgP0ju.glb`,
  Rn = `/assets/emberdeep-vent-AfQHPWQV.glb`,
  zn = `/assets/field-rock-BN1CMgR5.glb`,
  Bn = `/assets/frost-pine-vz3I7Ilh.glb`,
  Vn = `/assets/gilded-folly-gates-gmJtDMjU.glb`,
  Hn = `/assets/glade-bush-BdDbizca.glb`,
  Un = `/assets/glade-windmill-BgWLo7k4.glb`,
  Wn = `/assets/glowcap-mushrooms-CzG8_lEu.glb`,
  Gn = `/assets/hall-cryo-Dbk7MleD.glb`,
  Kn = `/assets/hall-of-the-circle-6kwtXtHm.glb`,
  qn = `/assets/hall-pyro-ZYHIF7BC.glb`,
  Jn = `/assets/hall-storm-BZttGm4H.glb`,
  Yn = `/assets/hall-void-BiXjRTXy.glb`,
  Xn = `/assets/hollowed-crystal-12s3STn8.glb`,
  Zn = `/assets/marizon-cottage-C4Sg82Fo.glb`,
  Qn = `/assets/marizon-fountain-CLHrDv7Z.glb`,
  $n = `/assets/marizon-gate-6kS1W6hU.glb`,
  er = `/assets/marizon-lamp-D2Y1X8ks.glb`,
  tr = `/assets/marizon-shop-B6TxFOlw.glb`,
  nr = `/assets/marizon-townhouse-BhtCr_TV.glb`,
  rr = `/assets/oak-tree-C37CZMBQ.glb`,
  ir = `/assets/rimewell-grotto-B6xzm4_S.glb`,
  ar = `/assets/rune-pillar-broken--sg3TeVo.glb`,
  or = `/assets/rune-pillar-CP24C4Ze.glb`,
  sr = `/assets/stall-cloth-DZRjaS-x.glb`,
  cr = `/assets/stall-food-Cf9Lftr5.glb`,
  lr = `/assets/stall-magic-BFp4vzyI.glb`,
  ur = `/assets/town-tower-DXI8ssxI.glb`,
  dr = `/assets/town-wall-B1GngtcZ.glb`,
  fr = `/assets/warden-stone-CGGs9Wy-.glb`,
  pr = Object.assign({
    "./aether-crystal.json": Rt,
    "./aether-shard-cluster.json": zt,
    "./ashen-deadtree.json": Bt,
    "./ashwalker-sleeper.json": Vt,
    "./barrowdeep-entrance.json": Ht,
    "./castle-tower-cryo.json": Ut,
    "./castle-tower-pyro.json": Wt,
    "./castle-tower-storm.json": Gt,
    "./castle-tower-void.json": Kt,
    "./castle-wall.json": qt,
    "./cisterns-sluice-house.json": Jt,
    "./crystal-altar.json": Yt,
    "./emberdeep-vent.json": Xt,
    "./field-rock.json": Zt,
    "./frost-pine.json": Qt,
    "./gilded-folly-gates.json": $t,
    "./glade-bush.json": en,
    "./glade-windmill.json": tn,
    "./glowcap-mushrooms.json": nn,
    "./hall-cryo.json": rn,
    "./hall-of-the-circle.json": an,
    "./hall-pyro.json": on,
    "./hall-storm.json": sn,
    "./hall-void.json": cn,
    "./hollowed-crystal.json": ln,
    "./marizon-cottage.json": un,
    "./marizon-fountain.json": dn,
    "./marizon-gate.json": fn,
    "./marizon-lamp.json": pn,
    "./marizon-shop.json": mn,
    "./marizon-townhouse.json": hn,
    "./oak-tree.json": gn,
    "./rimewell-grotto.json": _n,
    "./rune-pillar-broken.json": vn,
    "./rune-pillar.json": yn,
    "./stall-cloth.json": bn,
    "./stall-food.json": xn,
    "./stall-magic.json": Sn,
    "./town-tower.json": Cn,
    "./town-wall.json": wn,
    "./warden-stone.json": Tn,
  }),
  mr = Object.assign({
    "./aether-crystal.glb": En,
    "./aether-shard-cluster.glb": Dn,
    "./ashen-deadtree.glb": On,
    "./ashwalker-sleeper.glb": kn,
    "./barrowdeep-entrance.glb": An,
    "./castle-tower-cryo.glb": jn,
    "./castle-tower-pyro.glb": Mn,
    "./castle-tower-storm.glb": Nn,
    "./castle-tower-void.glb": Pn,
    "./castle-wall.glb": Fn,
    "./cisterns-sluice-house.glb": In,
    "./crystal-altar.glb": Ln,
    "./emberdeep-vent.glb": Rn,
    "./field-rock.glb": zn,
    "./frost-pine.glb": Bn,
    "./gilded-folly-gates.glb": Vn,
    "./glade-bush.glb": Hn,
    "./glade-windmill.glb": Un,
    "./glowcap-mushrooms.glb": Wn,
    "./hall-cryo.glb": Gn,
    "./hall-of-the-circle.glb": Kn,
    "./hall-pyro.glb": qn,
    "./hall-storm.glb": Jn,
    "./hall-void.glb": Yn,
    "./hollowed-crystal.glb": Xn,
    "./marizon-cottage.glb": Zn,
    "./marizon-fountain.glb": Qn,
    "./marizon-gate.glb": $n,
    "./marizon-lamp.glb": er,
    "./marizon-shop.glb": tr,
    "./marizon-townhouse.glb": nr,
    "./oak-tree.glb": rr,
    "./rimewell-grotto.glb": ir,
    "./rune-pillar-broken.glb": ar,
    "./rune-pillar.glb": or,
    "./stall-cloth.glb": sr,
    "./stall-food.glb": cr,
    "./stall-magic.glb": lr,
    "./town-tower.glb": ur,
    "./town-wall.glb": dr,
    "./warden-stone.glb": fr,
  }),
  hr = Object.entries(pr).flatMap(([e, t]) => {
    let n = mr[e.replace(/\.json$/, `.glb`)];
    return n ? [{ meta: t, url: n }] : [];
  });
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
function qr(e, t) {
  let n = e.art ?? e.key;
  if (n.startsWith(`epic:`)) return null;
  if (n.startsWith(`model:`)) return Nr.get(n.slice(6)) ?? null;
  let r = [...(Mr.get(n) ?? []), ...(Fr.get(e.kind) ?? [])];
  for (let [e, t] of Ir) n.startsWith(e) && r.push(t);
  if (!r.length) return null;
  if (r.length === 1) return r[0];
  let i = Kr(e.tx, e.ty, 7);
  if (
    t &&
    (t.mode === `rect` || t.mode === `tower`) &&
    r.every((e) => e.meta.fit === `footprint`)
  ) {
    let e = Math.log(t.w / t.h),
      n = r.map((t) =>
        Math.abs(Math.log(t.meta.sizePx.widthPx / t.meta.sizePx.depthPx) - e),
      ),
      a = Math.min(...n),
      o = r.filter((e, t) => n[t] <= a + 0.15);
    return o[Math.floor(i * o.length)];
  }
  return r[Math.floor(i * r.length)];
}
function Jr(e) {
  return e
    ? ((e.colorSpace = ``),
      (e.magFilter = M),
      (e.minFilter = De),
      (e.generateMipmaps = !0),
      (e.anisotropy = 1),
      (e.needsUpdate = !0),
      e)
    : null;
}
function Yr(e) {
  e.updateMatrixWorld(!0);
  let t = e.geometry.clone();
  t.applyMatrix4(e.matrixWorld);
  let n = new L(),
    r = (e) => {
      let t = new Float32Array(e.count * 3);
      for (let n = 0; n < e.count; n++)
        t.set([e.getX(n), e.getZ(n), e.getY(n)], n * 3);
      return new U(t, 3);
    };
  (n.setAttribute(`position`, r(t.getAttribute(`position`))),
    n.setAttribute(`normal`, r(t.getAttribute(`normal`))),
    n.setAttribute(`uv`, t.getAttribute(`uv`)));
  let i = t.getIndex(),
    a = i ? i.count : t.getAttribute(`position`).count,
    o = new Uint32Array(a);
  for (let e = 0; e < a; e += 3)
    ((o[e] = i ? i.getX(e) : e),
      (o[e + 1] = i ? i.getX(e + 2) : e + 2),
      (o[e + 2] = i ? i.getX(e + 1) : e + 1));
  return (n.setIndex(new U(o, 1)), n);
}
function Xr(e) {
  for (let t = e; t; t = t.parent)
    if (t.name === `spin` || t.name === `flow`) return t.name;
  return `body`;
}
function Zr(e, t) {
  let n = {};
  (t.updateMatrixWorld(!0),
    t.traverse((e) => {
      if (!e.isMesh) return;
      let t = Xr(e);
      n[t] || (n[t] = e);
    }));
  let r = n.body ?? Object.values(n)[0];
  if (!r) throw Error(`no mesh`);
  let i = Yr(r),
    a = e.anim,
    o =
      n.spin && a?.spin
        ? {
            geo: Yr(n.spin),
            center: new V(...a.spin.center),
            axis: new V(...a.spin.axis).normalize(),
            rpm: a.spin.rpm,
          }
        : null,
    s = n.flow ? { geo: Yr(n.flow), speed: a?.flow?.speed ?? 1 } : null,
    c = Array.isArray(r.material) ? r.material[0] : r.material,
    l = Jr(c.map);
  if (!l) throw Error(`no base colour texture`);
  let u = Jr(c.emissiveMap);
  return {
    meta: e,
    geo: i,
    spin: o,
    flow: s,
    map: l,
    normal: Jr(c.normalMap),
    emissive: u,
    emit: u
      ? c.emissiveIntensity * Math.max(c.emissive.r, c.emissive.g, c.emissive.b)
      : 0,
  };
}
var Qr = `${B}
in vec3 position;
in vec3 normal;
in vec2 uv;
in mat4 instanceMatrix;
in vec3 aBase;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform vec2 uSway;    // wind: how far the top sways (art px), the model's height
uniform float uTime;
out vec3 vP;
out vec3 vN;
out vec2 vUv;
out vec4 vClip;
flat out vec3 vBase;
flat out vec2 vOrigin;
void main() {
  vec3 pos = position;
  if (uSway.x > 0.0) {
    // the wind bends it more the higher up, each one out of step with its neighbours
    float h = clamp(pos.z / uSway.y, 0.0, 1.0);
    float ph = dot(instanceMatrix[3].xy, vec2(0.031, 0.017));
    float w = 0.6 * sin(uTime * 1.6 + ph) + 0.4 * sin(uTime * 2.7 + ph * 1.7 + pos.z * 0.05);
    pos.xy += vec2(1.0, 0.4) * (uSway.x * h * h * w);
  }
  vec4 wp = modelMatrix * instanceMatrix * vec4(pos, 1.0);
  vOrigin = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xy;
  vP = wp.xyz;
  // turned and scaled per instance (fit, jitter): the normal by the inverse transpose
  vN = transpose(inverse(mat3(instanceMatrix))) * normal;
  vUv = uv;
  vBase = aBase;
  gl_Position = projectionMatrix * viewMatrix * wp;
  vClip = gl_Position;
}
`,
  $r = (e) => `${B}
in vec3 vP;
in vec3 vN;
in vec2 vUv;
in vec4 vClip;
flat in vec3 vBase;   // foot row (y-sort line), height: for the occlusion dither; this one's glow gain
flat in vec2 vOrigin; // the instance's origin (the middle of its footprint)
out vec4 o;
${lt}
${ut}
${e}
${br}
${Ct}
uniform sampler2D uMap;
uniform sampler2D uNormal;
uniform sampler2D uEmissive;
uniform vec2 uSize;
uniform vec3 uFlags;   // normal map on, emission on, emission strength
uniform vec2 uFlow;    // water (the model's flow part): on, speed
uniform float uTime;
float hash12(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
// moving water in whole art px, so it steps like pixel art: falling sheets carry bright streaks
// down, flat water carries rings out from the middle; between them it shimmers a little
vec3 flowing(vec3 alb, vec3 P, vec3 Ng) {
  vec3 q = floor(P);
  float t = uTime * uFlow.y;
  float band;
  if (abs(Ng.z) < 0.6) {
    float col = hash12(floor(q.xy / 3.0));
    band = fract((q.z + t * 16.0) / 9.0 + col * 0.7);
  } else {
    float r = length(q.xy - floor(vOrigin));
    band = fract((r - t * 5.0) / 10.0 + hash12(floor(q.xy / 5.0)) * 0.15);
  }
  float hi = step(0.82, band);
  float lo = step(band, 0.12);
  return alb * (0.94 + 0.12 * band) + hi * (alb * 0.35 + vec3(0.07, 0.09, 0.1)) - lo * alb * 0.08;
}
// the normal map in a frame from the screen derivatives. The game frame is mirrored against the view
// (hd2d/camera.ts), so the frame comes out flipped, and glTF's map y runs the other way: (-x, +y),
// as fx3d/props.ts found for the same kind of model
vec3 perturb(vec3 N, vec3 P, vec2 uv, vec3 m) {
  vec3 dp1 = dFdx(P);
  vec3 dp2 = dFdy(P);
  vec2 duv1 = dFdx(uv);
  vec2 duv2 = dFdy(uv);
  vec3 dp2perp = cross(dp2, N);
  vec3 dp1perp = cross(N, dp1);
  vec3 T = dp2perp * duv1.x + dp1perp * duv2.x;
  vec3 B = dp2perp * duv1.y + dp1perp * duv2.y;
  float inv = inversesqrt(max(max(dot(T, T), dot(B, B)), 1e-12));
  return normalize(mat3(T * inv, B * inv, N) * m);
}
void main() {
  if (occluded(vClip, vBase.x, vBase.y)) discard;
  vec3 alb = hdSharp(uMap, vUv, uSize).rgb;
  vec3 N = normalize(vN);
  if (uFlow.x > 0.5) alb = flowing(alb, vP, N);
  if (uFlags.x > 0.5) {
    vec3 m = hdSharp(uNormal, vUv, uSize).xyz * 2.0 - 1.0;
    N = perturb(N, vP, vUv, vec3(-m.x, m.y, m.z));
  }
  vec3 em = uFlags.y > 0.5 ? hdSharp(uEmissive, vUv, uSize).rgb * uFlags.z * vBase.z : vec3(0.0);
  o = vec4(hdFog(alb * hdLightSolid(vP, N), em, vP), 0.0);
}
`,
  ei = { value: 0 };
function ti(e, t, n = !1) {
  let r = e.map.image;
  return new H({
    glslVersion: W,
    vertexShader: Qr,
    fragmentShader: $r(t.fog),
    uniforms: {
      ...t.lit,
      ...t.occl,
      uMap: { value: e.map },
      uNormal: { value: e.normal ?? e.map },
      uEmissive: { value: e.emissive ?? e.map },
      uSize: { value: new P(r.width, r.height) },
      uFlags: {
        value: new V(
          +!!e.normal,
          +!!e.emissive,
          Math.min(3, e.emit * jr) * (e.meta.glow?.gain ?? 1),
        ),
      },
      uFlow: { value: new P(+!!n, e.flow?.speed ?? 1) },
      uSway: {
        value: new P(
          e.meta.anim?.sway ?? 0,
          Math.max(1, e.meta.sizePx.heightPx),
        ),
      },
      uTime: ei,
    },
    side: _r,
  });
}
function ni(e, t, n) {
  let r = n.meta,
    i = r.sizePx,
    a = !!t && (t.mode === `rect` || t.mode === `tower`),
    o = 1,
    s = 1,
    c = 1;
  r.fit === `sprite`
    ? (o = s = c = e.c.width / i.widthPx)
    : r.fit === `footprint` &&
      a &&
      ((o = (t.w * 16) / i.widthPx),
      (s = (t.h * 16) / i.depthPx),
      (c = Math.min(
        Math.sqrt(o * s),
        (e.c.height * (r.maxHeight ?? 1.25)) / i.heightPx,
      )));
  let l = r.jitter;
  if (l?.scale) {
    let t = 1 + (Kr(e.tx, e.ty, 11) * 2 - 1) * l.scale;
    ((o *= t), (s *= t), (c *= t));
  }
  let u = l?.yaw ? (((Kr(e.tx, e.ty, 13) * 2 - 1) * l.yaw) / 180) * Math.PI : 0,
    d,
    f;
  return (
    r.fit === `footprint` && a
      ? ((d = t.tx * 16 + (t.w * 16) / 2), (f = t.ty * 16 + (t.h * 16) / 2))
      : ((d = t
          ? a
            ? t.tx * 16 + (t.w * 16) / 2
            : t.tx * 16 + 8
          : e.x + e.c.width / 2),
        (f = e.baseY - r.anchorY * s)),
    {
      m: new N().compose(
        new V(d, f, 0),
        new Ne().setFromAxisAngle(new V(0, 0, 1), u),
        new V(o, s, c),
      ),
      ox: d,
      oy: f,
      yaw: u,
      s: (o + s) / 2,
      sy: s,
      base: e.baseY,
      height: i.heightPx * c,
      phase: Kr(e.tx, e.ty, 17) * 6.283,
      ownLights: !!e.lights?.length,
    }
  );
}
var ri = class {
    o;
    root = new F();
    bins = [];
    mats = new Map();
    flowMats = new Map();
    tmp = { r: new N(), t: new N(), b: new N() };
    out = [];
    count;
    constructor(e, t) {
      ((this.o = t), (this.root.name = `hd2d-glb-props`));
      let n = new Map();
      for (let { it: t, p: r, a: i, m: a } of e) {
        let e = a
            ? {
                m: a,
                ox: t.x + t.c.width / 2,
                oy: t.baseY - 8,
                yaw: 0,
                s: 1,
                sy: 1,
                base: t.baseY,
                height: t.c.height,
                phase: 0,
                ownLights: !1,
              }
            : ni(t, r, i),
          o = `${i.meta.id}:${Math.floor(e.ox / 512)},${Math.floor(e.oy / 512)}`,
          s = n.get(o);
        (s ||
          ((s = {
            a: i,
            list: [],
            b: [1 / 0, 1 / 0, -1 / 0, -1 / 0, 0],
            mesh: null,
            spin: null,
            flow: null,
          }),
          n.set(o, s),
          this.bins.push(s)),
          s.list.push(e));
        let c = i.meta.sizePx,
          l = (Math.hypot(c.widthPx, c.depthPx) / 2) * Math.max(e.s, e.sy) + 1,
          u = s.b;
        ((u[0] = Math.min(u[0], e.ox - l)),
          (u[1] = Math.min(u[1], e.oy - l)),
          (u[2] = Math.max(u[2], e.ox + l)),
          (u[3] = Math.max(u[3], e.oy + l)),
          (u[4] = Math.max(u[4], e.height)));
      }
      this.count = e.length;
    }
    buildGpu() {
      for (let e of this.bins) {
        let t = this.mats.get(e.a);
        if (
          (t || ((t = ti(e.a, this.o)), this.mats.set(e.a, t)),
          (e.mesh = this.instanced(e, e.a.geo, t)),
          e.a.spin && (e.spin = this.instanced(e, e.a.spin.geo, t)),
          e.a.flow)
        ) {
          let t = this.flowMats.get(e.a);
          (t || ((t = ti(e.a, this.o, !0)), this.flowMats.set(e.a, t)),
            (e.flow = this.instanced(e, e.a.flow.geo, t)));
        }
      }
    }
    instanced(e, t, n) {
      let r = new L();
      for (let e of [`position`, `normal`, `uv`])
        r.setAttribute(e, t.getAttribute(e));
      r.setIndex(t.getIndex());
      let i = new Float32Array(e.list.length * 3);
      (e.list.forEach((e, t) => i.set([e.base, e.height, 1], t * 3)),
        r.setAttribute(`aBase`, new we(i, 3)));
      let a = new ve(r, n, e.list.length);
      return (
        e.list.forEach((e, t) => a.setMatrixAt(t, e.m)),
        (a.instanceMatrix.needsUpdate = !0),
        (a.frustumCulled = !1),
        (a.matrixAutoUpdate = !1),
        this.root.add(a),
        a
      );
    }
    disposeGpu() {
      for (let e of this.bins) {
        for (let t of [e.mesh, e.spin, e.flow])
          t && (this.root.remove(t), t.dispose());
        e.mesh = e.spin = e.flow = null;
      }
      for (let e of [...this.mats.values(), ...this.flowMats.values()])
        e.dispose();
      (this.mats.clear(), this.flowMats.clear());
    }
    update(e, t) {
      ei.value = t % 3600;
      let { r: n, t: r, b: i } = this.tmp;
      for (let a of this.bins) {
        if (!a.mesh) continue;
        let o = e(a.b[0], a.b[1], a.b[2], a.b[3], a.b[4]);
        ((a.mesh.visible = o), a.flow && (a.flow.visible = o));
        let s = a.a.spin,
          c = a.spin;
        c &&
          s &&
          ((c.visible = o),
          o &&
            (a.list.forEach((e, a) => {
              let o = t * (s.rpm / 60) * Math.PI * 2 + e.phase;
              (r.makeTranslation(s.center.x, s.center.y, s.center.z),
                n.makeRotationAxis(s.axis, o),
                i.multiplyMatrices(r, n),
                r.makeTranslation(-s.center.x, -s.center.y, -s.center.z),
                i.multiply(r),
                c.setMatrixAt(a, i.premultiply(e.m)));
            }),
            (c.instanceMatrix.needsUpdate = !0)));
      }
    }
    meshes(e, t) {
      for (let n of this.bins)
        n.mesh &&
          e(n.b[0], n.b[1], n.b[2], n.b[3]) &&
          (t.push(n.mesh), n.flow && t.push(n.flow));
    }
    moving(e) {
      for (let t of this.bins) t.spin?.visible && e.push(t.spin);
    }
    lights(e) {
      let t = this.out;
      t.length = 0;
      for (let n of this.bins) {
        let r = n.a.meta.glow?.lights;
        if (r?.length && n.mesh?.visible)
          for (let i of n.list) {
            if (i.ownLights) continue;
            let n = Math.cos(i.yaw),
              a = Math.sin(i.yaw);
            for (let o of r) {
              let r = o.flicker
                  ? 1 -
                    o.flicker *
                      (0.5 +
                        0.3 * Math.sin(e * 7.3 + i.phase) +
                        0.2 * Math.sin(e * 13.1 + i.phase * 2))
                  : 1,
                s = o.x * i.s,
                c = o.y * i.sy;
              t.push({
                x: i.ox + s * n - c * a,
                y: i.oy + s * a + c * n,
                z: o.z * i.s,
                r: o.r * i.s,
                color: o.color,
                a: o.a * r,
              });
            }
          }
      }
      return t;
    }
  },
  ii = class {
    o;
    root = new F();
    meshes = new Map();
    m = new N();
    q = new Ne();
    v = new V();
    sc = new V();
    constructor(e) {
      ((this.o = e), (this.root.name = `hd2d-glb-standins`));
    }
    meshFor(e, t) {
      let n = this.meshes.get(e);
      if (n && n.cap >= t) return n;
      n &&
        (this.root.remove(n.mesh),
        n.mesh.geometry.dispose(),
        n.mesh.material.dispose());
      let r = Math.max(8, t * 2),
        i = new L();
      for (let t of [`position`, `normal`, `uv`])
        i.setAttribute(t, e.geo.getAttribute(t));
      i.setIndex(e.geo.getIndex());
      let a = new we(new Float32Array(r * 3), 3);
      (a.setUsage(G), i.setAttribute(`aBase`, a));
      let o = new ve(i, ti(e, this.o), r);
      return (
        o.instanceMatrix.setUsage(G),
        (o.frustumCulled = !1),
        (o.matrixAutoUpdate = !1),
        this.root.add(o),
        (n = { mesh: o, base: a, cap: r }),
        this.meshes.set(e, n),
        n
      );
    }
    update(e) {
      let t = new Map();
      for (let n of e ?? []) {
        let e = Pr.get(n.target);
        if (!e) continue;
        let r = t.get(e);
        r ? r.push(n) : t.set(e, [n]);
      }
      for (let [e, n] of this.meshes) t.has(e) || (n.mesh.visible = !1);
      for (let [e, n] of t) {
        let t = this.meshFor(e, n.length),
          r = e.meta.sizePx;
        (n.forEach((e, n) => {
          let i = e.w / r.widthPx;
          (this.v.set(e.x, e.y - (r.depthPx / 2) * i, 0),
            this.m.compose(this.v, this.q, this.sc.set(i, i, i)),
            t.mesh.setMatrixAt(n, this.m),
            t.base.setXYZ(n, e.y, r.heightPx * i, e.gain));
        }),
          (t.mesh.count = n.length),
          (t.mesh.instanceMatrix.needsUpdate = !0),
          (t.base.needsUpdate = !0),
          (t.mesh.visible = !0));
      }
    }
    casters(e) {
      for (let t of this.meshes.values()) t.mesh.visible && e.push(t.mesh);
    }
    dispose() {
      for (let e of this.meshes.values())
        (this.root.remove(e.mesh),
          e.mesh.geometry.dispose(),
          e.mesh.material.dispose());
      this.meshes.clear();
    }
  },
  ai = 1024,
  oi = 256,
  si = 4096,
  ci = [24, 96, 24],
  li = 128,
  ui = 32,
  di = 600;
function fi(e, t, n, r) {
  ((n[r] =
    t.ax === void 0 || e.strip ? e.x : e.footX + t.ax - Math.round(t.ax)),
    (n[r + 1] =
      t.ay === void 0 || e.strip ? e.y : e.footY + t.ay - Math.round(t.ay)));
}
function pi(e, t, n, r = 1) {
  let i = n ?? {
      footX: 0,
      footY: 0,
      x: 0,
      y: 0,
      hw: 0,
      up: 0,
      down: 0,
      strip: !1,
    },
    a = si / r;
  if (
    ((i.footY = Math.round(e.y) + Math.round((e.fy ?? e.y) - e.y)),
    e.x === void 0)
  ) {
    let e = Math.min(a / 2, Math.ceil(t.fw / 2));
    return (
      (i.footX = t.gx0 + e),
      (i.x = i.footX),
      (i.y = i.footY),
      (i.hw = e),
      (i.up = li),
      (i.down = ui),
      (i.strip = !0),
      i
    );
  }
  let o = e.box ?? ci,
    s = Math.max(0, Math.ceil(o[1]));
  return (
    (i.footX = Math.round(e.x)),
    (i.x = e.x),
    (i.y = e.fy ?? e.y),
    (i.hw = Math.min(a / 2, Math.max(1, Math.ceil(o[0])))),
    (i.up = Math.min(a, s)),
    (i.down = Math.min(a - i.up, Math.max(0, Math.ceil(o[2])))),
    (i.strip = !1),
    i
  );
}
function mi(e, t, n, r, i = [0, 0]) {
  return (
    (i[0] = t + e.hw - (e.footX - r.gx0)),
    (i[1] = n + e.up - (e.footY - r.gy0)),
    i
  );
}
function hi(e, t, n, r, i, a, o) {
  for (let e = 0; e < n; e++) o[e] = e;
  let s = o.subarray(0, n).sort((e, n) => t[n] - t[e] || e - n),
    c = 0,
    l = 0,
    u = 0,
    d = 0;
  for (let n of s) {
    let o = e[n],
      s = t[n];
    if ((c + o > r && ((l += u), (c = 0), (u = 0)), o > r || l + s > i)) {
      ((a[n * 2] = -1), (a[n * 2 + 1] = -1));
      continue;
    }
    ((a[n * 2] = c),
      (a[n * 2 + 1] = l),
      (c += o),
      (u = Math.max(u, s)),
      (d = Math.max(d, l + s)));
  }
  return d;
}
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
var vi = class {
  atlas;
  o;
  root = new F();
  chunks = [];
  mats = [];
  base = null;
  constructor(n, r, i) {
    ((this.atlas = r), (this.o = i), (this.root.name = `hd2d-props`));
    let a = new Map(),
      o = (e, t, n) => {
        let r = Math.max(0, Math.floor(e / 512)),
          i = Math.max(0, Math.floor(t / 512)),
          o = (n * 64 + i) * 64 + r,
          s = a.get(o);
        return (
          s ||
            ((s = {
              cx: r,
              cy: i,
              page: n,
              n: 0,
              foot: new Float32Array(),
              rect: new Float32Array(),
              box: new Float32Array(),
              anim: [],
              bob: [],
              b: [1 / 0, 1 / 0, -1 / 0, -1 / 0, 0],
              mesh: null,
              edge: null,
              geo: null,
            }),
            a.set(o, s),
            this.chunks.push(s)),
          s
        );
      },
      s = [];
    for (let e of n) {
      let t = e.frames ? r.frames(e.frames) : [r.rect(e.c)],
        n = o(e.x + m(e.c) / 2, e.baseY, t[0].page);
      (n.n++, s.push({ it: e, ch: n, rects: t }));
    }
    for (let e of this.chunks)
      ((e.foot = new Float32Array(e.n * 4)),
        (e.rect = new Float32Array(e.n * 4)),
        (e.box = new Float32Array(e.n * 4)),
        (e.n = 0));
    for (let { it: n, ch: i, rects: a } of s) {
      let o = i.n++,
        { w: s, h: c } = r.size(a[0].page),
        { lift: l, up: u } = _i(i, o, n, a[0], s, c),
        d = t(n.c);
      (a.length > 1 &&
        i.anim.push({
          i: o,
          rects: a,
          fps: n.fps ?? 8,
          phase: e(n.tx, n.ty, 5) * a.length,
          shown: 0,
          up: u,
          dens: d,
        }),
        n.gameKey === `crystal` && i.bob.push(o, l));
      let f = i.b,
        p = Math.max(...a.map((e) => e.h)) / d;
      ((f[0] = Math.min(f[0], n.x)),
        (f[1] = Math.min(f[1], n.y)),
        (f[2] = Math.max(f[2], n.x + Math.max(...a.map((e) => e.w)) / d)),
        (f[3] = Math.max(f[3], n.y + p)),
        (f[4] = Math.max(f[4], l + p + 2)));
    }
  }
  get instances() {
    return this.chunks.reduce((e, t) => e + t.n, 0);
  }
  buildGpu() {
    (this.disposeGpu(),
      (this.base = Dt()),
      (this.mats = this.atlas.textures.map((e) => {
        let t = {
          map: e,
          lit: this.o.lit,
          instanced: !0,
          texelLock: !1,
          occl: !0,
          cam: this.o.cam,
        };
        return [
          Lt({ ...t, pass: `cut` }),
          Lt({ ...t, pass: `shadow` }),
          Lt({ ...t, pass: `fringe`, soft: !1 }),
        ];
      })));
    for (let e of this.chunks) {
      let t = new Le();
      (t.setAttribute(`position`, this.base.getAttribute(`position`)),
        t.setIndex(this.base.getIndex()));
      let n = (e, n, r) => {
        let i = new we(n, 4);
        (r && i.setUsage(G), t.setAttribute(e, i));
      };
      (n(K.foot, e.foot, e.bob.length > 0),
        n(K.rect, e.rect, e.anim.length > 0),
        n(K.box, e.box, e.anim.length > 0),
        (t.instanceCount = e.n));
      let [r, i, a, o, s] = e.b;
      ((t.boundingBox = new Re(new V(r, i, 0), new V(a, o, s))),
        (t.boundingSphere = t.boundingBox.getBoundingSphere(new Te())));
      let [c, l, u] = this.mats[e.page],
        d = new I(t, c);
      ((d.customDepthMaterial = l),
        (d.customDistanceMaterial = l),
        (d.frustumCulled = !1),
        (d.matrixAutoUpdate = !1),
        (d.name = `hd2d-props-${e.cx}-${e.cy}-${e.page}`));
      let f = new I(t, u);
      ((f.frustumCulled = !1),
        (f.matrixAutoUpdate = !1),
        (f.renderOrder = 49),
        (f.name = `${d.name}-edge`),
        (e.geo = t),
        (e.mesh = d),
        (e.edge = f),
        this.root.add(d, f));
    }
  }
  update(e, t) {
    let n = Math.round(Math.sin(e * 1.5) * 1.5);
    for (let r of this.chunks) {
      let i = r.mesh;
      if (!i || !r.geo) continue;
      let [a, o, s, c, l] = r.b;
      if (
        ((i.visible = t(a, o, s, c, l)),
        r.edge && (r.edge.visible = i.visible),
        i.visible)
      ) {
        if (r.anim.length) {
          let t = !1;
          for (let n of r.anim) {
            let i = n.rects.length,
              a = ((Math.floor(e * n.fps + n.phase) % i) + i) % i;
            if (a === n.shown) continue;
            n.shown = a;
            let o = n.rects[a],
              { w: s, h: c } = this.atlas.size(o.page);
            r.rect.set(
              [o.x / s, o.y / c, (o.x + o.w) / s, (o.y + o.h) / c],
              n.i * 4,
            );
            let l = o.w / n.dens,
              u = o.h / n.dens,
              d = Math.min(n.up, u);
            (r.box.set([l / 2, d, u - d, 1], n.i * 4), (t = !0));
          }
          t &&
            ((r.geo.getAttribute(K.rect).needsUpdate = !0),
            (r.geo.getAttribute(K.box).needsUpdate = !0));
        }
        if (r.bob.length) {
          for (let e = 0; e < r.bob.length; e += 2)
            r.foot[r.bob[e] * 4 + 2] = r.bob[e + 1] - n;
          r.geo.getAttribute(K.foot).needsUpdate = !0;
        }
      }
    }
  }
  meshes(e, t) {
    for (let n of this.chunks)
      n.mesh && e(n.b[0], n.b[1], n.b[2], n.b[3]) && t.push(n.mesh);
  }
  disposeGpu() {
    for (let e of this.chunks)
      (e.mesh && this.root.remove(e.mesh),
        e.edge && this.root.remove(e.edge),
        e.geo?.dispose(),
        (e.mesh = null),
        (e.edge = null),
        (e.geo = null));
    for (let e of this.mats) for (let t of e) t.dispose();
    ((this.mats = []), this.base?.dispose(), (this.base = null));
  }
};
function yi(e, n, r, i = x().walls, a) {
  let o = i.n,
    s = (e, t) => (e < 0 || t < 0 || e >= o || t >= o ? 0 : i.h[t * o + e]),
    l = [];
  for (let t of e) (l[t.ty] ??= []).push(t);
  for (let e of l) e?.sort((e, t) => e.x - t.x);
  let u = (e, t) =>
    l[t]?.find((t) => t.x <= e * 16 && e * 16 + 16 <= t.x + m(t.c));
  for (let e = 0; e < Math.min(o, c); e++)
    for (let c = 0; c < Math.min(o, y); c++) {
      let l = s(c, e);
      if (!l || a?.(c, e)) continue;
      let f = u(c, e);
      if (!f) continue;
      let m = n.rect(f.c),
        h = r.at(c * 16 + 8, e * 16 + 8, m.page),
        g = s(c, e - 1),
        _ = s(c, e + 1),
        v = s(c - 1, e),
        y = s(c + 1, e),
        b = i.flag[e * o + c],
        x = c * 16,
        S = x + 16,
        C = e * 16,
        w = C + 16,
        T = t(f.c),
        E = {
          x0: f.x,
          y0: f.y,
          ax: m.x,
          ay: m.y,
          aw: m.w,
          ah: m.h,
          baseY: f.baseY,
          height: p(f.c),
          dens: T,
        },
        D = { ...E, x0: f.x - 0.5 / T, shade: vr },
        O = { ...E, x0: f.x + 0.5 / T, shade: vr },
        k = g < l,
        ee = v < l,
        A = y < l,
        te = x - +!!ee,
        ne = S + +!!A,
        re = C - +!!k;
      if (
        (h.face(
          [
            [te, re, l],
            [ne, re, l],
            [ne, w, l],
            [te, w, l],
          ],
          [0, 0, 1],
          E,
        ),
        _ < l)
      ) {
        let t = (e, t) => s(e, t) > 0 && s(e, t + 1) < s(e, t),
          n = +(!t(c - 1, e) || v < l),
          r = +(!t(c + 1, e) || y < l);
        h.face(
          [
            [x - n, w, _],
            [S + r, w, _],
            [S + r, w, l],
            [x - n, w, l],
          ],
          [0, 1, 0],
          E,
        );
      }
      let ie = (e) => (b & d.SPAN ? Math.max(e, l - 13) : e);
      (g < l &&
        h.face(
          [
            [x, C, ie(g)],
            [S, C, ie(g)],
            [S, C, l],
            [x, C, l],
          ],
          [0, -1, 0],
          E,
        ),
        v < l &&
          h.face(
            [
              [x, C, ie(v)],
              [x, w, ie(v)],
              [x, w, l],
              [x, C, l],
            ],
            [-1, 0, 0],
            D,
          ),
        y < l &&
          h.face(
            [
              [S, C, ie(y)],
              [S, w, ie(y)],
              [S, w, l],
              [S, C, l],
            ],
            [1, 0, 0],
            O,
          ));
    }
}
var bi = (e, n, r = {}) => ({
    x0: e.x,
    y0: e.y,
    ax: n.x,
    ay: n.y,
    aw: n.w,
    ah: n.h,
    baseY: e.baseY,
    height: e.c.height,
    dens: Si.get(e.c) ?? t(e.c),
    ...r,
  }),
  xi = new WeakMap(),
  Si = new WeakMap();
function Ci(e) {
  let n = t(e);
  if (n === 1) return e;
  let r = xi.get(e);
  if (!r) {
    let [t, i] = h(Math.round(m(e)), Math.round(p(e)));
    (i.drawImage(e, 0, 0, t.width, t.height),
      (r = t),
      xi.set(e, r),
      Si.set(r, n));
  }
  return r;
}
function wi(e) {
  let t = Ci(e.c);
  return t === e.c ? e : { ...e, c: t };
}
var Ti = class {
  cache = new WeakMap();
  of(e) {
    let t = this.cache.get(e);
    if (!t) {
      let n =
        e.width && e.height
          ? e.getContext(`2d`).getImageData(0, 0, e.width, e.height).data
          : new Uint8ClampedArray();
      t = new Uint8ClampedArray(e.width * e.height);
      for (let e = 0; e < t.length; e++) t[e] = n[e * 4 + 3];
      this.cache.set(e, t);
    }
    return t;
  }
};
function Ei(e, t, n) {
  let r = -1,
    i = -1;
  for (let a = 0; a < t; a++) e[n * t + a] < 128 || (r < 0 && (r = a), (i = a));
  return r < 0 ? null : [r, i];
}
function Di(e, t, n) {
  let r = null,
    i = -1;
  for (let a = 0; a <= t; a++) {
    let o = a < t && e[n * t + a] >= 128;
    (o && i < 0 && (i = a),
      !o &&
        i >= 0 &&
        ((!r || a - i > r[1] - r[0] + 1) && (r = [i, a - 1]), (i = -1)));
  }
  return r;
}
function Oi(e, t, n, r, i) {
  let a = Math.round(r),
    o = n - a;
  if (a < 2 || o < 2) return null;
  let s = Ei(e, t, n - a - 1);
  if (!s) return null;
  let c = [];
  for (let r = n - a; r < n; r++) {
    let i = Ei(e, t, r);
    if (!i) continue;
    let a = c[c.length - 1];
    a && a.l === i[0] && a.r === i[1] && a.z0 === n - r
      ? (a.z0 = n - r - 1)
      : c.push({ z0: n - r - 1, z1: n - r, l: i[0], r: i[1] });
  }
  if (!c.length) return null;
  if (c.length > 6) {
    let r = Ei(e, t, n - 1 - (a >> 1)) ?? [c[0].l, c[0].r];
    c = [{ z0: 0, z1: a, l: r[0], r: r[1] }];
  } else {
    ((c[0].z1 = a), (c[c.length - 1].z0 = 0));
    for (let e = 1; e < c.length; e++) c[e].z1 = c[e - 1].z0;
  }
  let l = s,
    u = Math.max(2, (s[1] - s[0] + 1) * 0.35);
  for (let r = 0; r < n - a; r++) {
    let n = Di(e, t, r);
    if (n && n[1] - n[0] + 1 >= u) {
      l = [Math.max(s[0], n[0]), Math.min(s[1], n[1])];
      break;
    }
  }
  let d = Math.min(i, o);
  return { Hw: a, Rr: o, bands: c, eave: s, ridge: l, dEff: d, R: o - d / 2 };
}
function ki(e, t, n, r, i) {
  let a = t.c.width,
    o = t.c.height;
  if (!t.fold || Math.abs(t.y + o - t.baseY) > 0.5) return !1;
  let s = Oi(r, a, o, t.fold.wallH, i);
  if (!s) return !1;
  let c = bi(t, n),
    l = bi(t, n, { x0: t.x - 0.5, shade: vr }),
    u = bi(t, n, { x0: t.x + 0.5, shade: vr }),
    d = t.baseY,
    f = d - s.dEff,
    p = d - s.dEff / 2,
    m = s.Hw + s.R,
    h = t.x + s.eave[0],
    g = t.x + s.eave[1] + 1,
    _ = t.x + s.ridge[0],
    v = t.x + s.ridge[1] + 1,
    y = s.Hw;
  s.bands.forEach((n, r) => {
    let i = t.x + n.l,
      a = t.x + n.r + 1,
      { z0: o, z1: p } = n;
    (e.face(
      [
        [i, d, o],
        [a, d, o],
        [a, d, p],
        [i, d, p],
      ],
      [0, 1, 0],
      c,
    ),
      e.face(
        [
          [i, f, o],
          [i, d, o],
          [i, d, p],
          [i, f, p],
        ],
        [-1, 0, 0],
        l,
      ),
      e.face(
        [
          [a, f, o],
          [a, d, o],
          [a, d, p],
          [a, f, p],
        ],
        [1, 0, 0],
        u,
      ),
      e.face(
        [
          [i, f, o],
          [a, f, o],
          [a, f, p],
          [i, f, p],
        ],
        [0, -1, 0],
        c,
      ));
    let m =
      r > 0 ? [t.x + s.bands[r - 1].l, t.x + s.bands[r - 1].r + 1] : [h, g];
    (m[0] > i || m[1] < a) &&
      e.face(
        [
          [i, f, p],
          [a, f, p],
          [a, d, p],
          [i, d, p],
        ],
        [0, 0, 1],
        c,
      );
  });
  let b = [h, d, y],
    x = [g, d, y],
    S = [h, f, y],
    C = [g, f, y],
    w = [_, p, m],
    T = [v, p, m];
  (e.face([b, x, T, w], [0, 1, 1], c),
    e.face([S, C, T, w], [0, -1, 1], c),
    e.face([b, w, S], [-1, 0, 0], _ > h ? c : l),
    e.face([x, T, C], [1, 0, 0], v < g ? c : u));
  let E = t.x + s.bands[0].l,
    D = t.x + s.bands[0].r + 1;
  (h < E || g > D) && e.face([b, x, C, S], [0, 0, -1], c);
  let O = Math.min(2, y);
  return (
    h < E &&
      e.face(
        [
          [h, d, y - O],
          [E, d, y - O],
          [E, d, y],
          [h, d, y],
        ],
        [0, 1, 0],
        c,
      ),
    g > D &&
      e.face(
        [
          [D, d, y - O],
          [g, d, y - O],
          [g, d, y],
          [D, d, y],
        ],
        [0, 1, 0],
        c,
      ),
    !0
  );
}
function Ai(e, t, n, r, i, a, o = 0) {
  let s = n.c.width,
    c = n.c.height,
    l = n.baseY - n.y - a;
  if (l < 8) {
    let e = 0.15,
      i = bi(n, r, { y0: n.y - e, height: 0 });
    t.face(
      [
        [n.x, n.y, e],
        [n.x + s, n.y, e],
        [n.x + s, n.y + c, e],
        [n.x, n.y + c, e],
      ],
      [0, 0, 1],
      i,
    );
    return;
  }
  let u = s,
    d = -1;
  for (let e = 0; e < c; e++) {
    let t = Ei(i, s, e);
    t && ((u = Math.min(u, t[0])), (d = Math.max(d, t[1])));
  }
  if (d < u) return;
  let f = n.x + u,
    p = n.x + d + 1,
    m = n.baseY,
    h = m - a,
    g = bi(n, r);
  if (
    (e.face(
      [
        [f, m, 0],
        [p, m, 0],
        [p, m, l],
        [f, m, l],
      ],
      [0, 1, 0],
      g,
    ),
    e.face(
      [
        [f, h, l],
        [p, h, l],
        [p, m, l],
        [f, m, l],
      ],
      [0, 0, 1],
      g,
    ),
    o > 0)
  ) {
    (ji(e, n, r, i, h, l, o),
      e.face(
        [
          [f, h, 0],
          [p, h, 0],
          [p, h, l],
          [f, h, l],
        ],
        [0, -1, 0],
        g,
      ));
    return;
  }
  (e.face(
    [
      [f, h, 0],
      [f, m, 0],
      [f, m, l],
      [f, h, l],
    ],
    [-1, 0, 0],
    bi(n, r, { x0: n.x - 0.5, shade: vr }),
  ),
    e.face(
      [
        [p, h, 0],
        [p, m, 0],
        [p, m, l],
        [p, h, l],
      ],
      [1, 0, 0],
      bi(n, r, { x0: n.x + 0.5, shade: vr }),
    ),
    e.face(
      [
        [f, h, 0],
        [p, h, 0],
        [p, h, l],
        [f, h, l],
      ],
      [0, -1, 0],
      g,
    ));
}
function ji(e, t, n, r, i, a, o) {
  let s = t.c.width,
    c = t.c.height,
    l = Math.max(0, c - o),
    u = s,
    d = -1;
  for (let e = l; e < c; e++) {
    let t = Ei(r, s, e);
    t && ((u = Math.min(u, t[0])), (d = Math.max(d, t[1])));
  }
  if (d < u) return;
  let f = t.baseY,
    p = t.y + l;
  for (let [r, o, s] of [
    [t.x + u, -1, -1.5],
    [t.x + d + 1, 1, 1.5],
  ]) {
    let c = [],
      l = [
        [i, 0],
        [f, 0],
        [f, a],
        [i, a],
      ];
    for (let e = 0; e < 4; e++) {
      let t = l[e],
        n = l[(e + 1) % 4],
        r = t[0] - t[1] - p,
        i = n[0] - n[1] - p;
      if ((r >= 0 && c.push(t), r >= 0 != i >= 0)) {
        let e = r / (r - i);
        c.push([t[0] + (n[0] - t[0]) * e, t[1] + (n[1] - t[1]) * e]);
      }
    }
    let u = bi(t, n, { x0: t.x + s, shade: vr });
    for (let t = 1; t + 1 < c.length; t++)
      e.face(
        [
          [r, c[0][0], c[0][1]],
          [r, c[t][0], c[t][1]],
          [r, c[t + 1][0], c[t + 1][1]],
        ],
        [o, 0, 0],
        u,
      );
  }
}
function Mi(e, t) {
  if (e.ref.t !== `tower`) return null;
  let n = e.ref.opts;
  if (!n.d || !n.bodyH) return null;
  let r = n.d * 16,
    i = Math.round(r * 0.32),
    a = n.roof ? Math.round(r * 0.95) : 0;
  return t.width !== r + 6 ||
    t.height !== i * 2 + n.bodyH + a + (n.flag ? 14 : 6) + 4
    ? null
    : {
        D: r,
        rx: r / 2 - 1,
        ry: i,
        bodyH: n.bodyH,
        roofH: a,
        roof: !!n.roof,
        flag: !!n.flag,
      };
}
var Ni = 24,
  Pi = 0.64,
  Fi = 1.5;
function Ii(e, t, n, r) {
  let i = t.c.width,
    a = t.c.height,
    o = t.x + i / 2,
    s = t.baseY - r.D / 2,
    c = t.y + (a - 1 - r.ry),
    l = bi(t, n, { g: Pi, yc: s, y0: t.y + s - c }),
    u = r.rx + 1,
    d = r.bodyH,
    f = (e, t, n) => [
      o + e * Math.cos((n / Ni) * Math.PI * 2),
      s + e * Math.sin((n / Ni) * Math.PI * 2),
      t,
    ],
    p = (e, t = 0) => {
      let n = (e / Ni) * Math.PI * 2,
        r = Math.hypot(1, t);
      return [Math.cos(n) / r, Math.sin(n) / r, t / r];
    };
  for (let t = 0; t < Ni; t++) {
    let n = f(u, 0, t),
      r = f(u, 0, t + 1),
      i = f(u, d, t),
      a = f(u, d, t + 1);
    (e.smooth(n, r, a, p(t), p(t + 1), p(t + 1), l),
      e.smooth(n, a, i, p(t), p(t + 1), p(t), l));
  }
  let m = d;
  if (r.roof) {
    let t = r.rx + 4,
      n = [o, s, d + r.roofH],
      i = t / r.roofH;
    for (let r = 0; r < Ni; r++) {
      let a = f(t, d, r),
        o = f(t, d, r + 1),
        s = p(r, i),
        c = p(r + 1, i),
        m = p(r + 0.5, i);
      (e.smooth(a, o, n, s, c, m, l),
        e.face([f(u, d, r), f(u, d, r + 1), o, a], [0, 0, -1], l));
    }
    m = d + r.roofH;
  } else {
    let t = [o, s, d],
      n = (e) =>
        f(
          u +
            Fi *
              Math.min(1, 3 * Math.max(0, -Math.sin((e / Ni) * Math.PI * 2))),
          d,
          e,
        );
    for (let r = 0; r < Ni; r++) e.face([n(r), n(r + 1), t], [0, 0, 1], l);
  }
  let h = r.roof ? 16 : r.flag ? 22 : 0;
  h &&
    e.face(
      [
        [o - 4, s, m - 1],
        [o + 11, s, m - 1],
        [o + 11, s, m + h],
        [o - 4, s, m + h],
      ],
      [0, 1, 0],
      l,
    );
}
function Li(e, n, r) {
  let i = n.parent;
  if (!i || !n.door || !r.length) return null;
  let a = r[0],
    o = i.baseY + 0.5,
    s = t(n.door.frames[0]),
    c = a.w / s,
    l = {
      x0: n.x,
      y0: n.y + 0.5,
      ax: a.x,
      ay: a.y,
      aw: a.w,
      ah: a.h,
      baseY: i.baseY,
      height: p(i.c),
      dens: s,
    },
    u = i.baseY - n.y,
    d = u - a.h / s,
    f = e.vertices;
  return (
    e.face(
      [
        [n.x, o, d],
        [n.x + c, o, d],
        [n.x + c, o, u],
        [n.x, o, u],
      ],
      [0, 1, 0],
      l,
    ),
    { it: n, rects: r, page: a.page, start: f, count: e.vertices - f, shown: 0 }
  );
}
function Ri(e, t) {
  return Math.min(t - 1, Math.floor(e * t));
}
var zi = 320,
  Bi = class {
    host;
    o;
    root = new F();
    cam;
    occl = yr();
    atlas = null;
    props = null;
    glb = null;
    standIns;
    solids = [];
    doors = [];
    mats = [];
    ver = -1;
    glbVer = -1;
    fp = { gx0: 0, gy0: 0, fw: 0, fh: 0 };
    constructor(e, t) {
      ((this.host = e),
        (this.o = t),
        (this.root.name = `hd2d-scenery`),
        (this.cam = t.cam ?? Ot()),
        (this.standIns = new ii({
          lit: t.lit,
          occl: this.occl,
          fog: t.fog ?? ``,
        })),
        this.root.add(this.standIns.root),
        Hr(
          new Set(
            e.scenery.items
              .map((e) => e.art ?? e.key)
              .filter((e) => e.startsWith(`model:`))
              .map((e) => e.slice(6)),
          ),
        ),
        this.buildCpu(),
        this.buildGpu());
    }
    buildCpu() {
      ((this.ver = a()), (this.glbVer = Br()));
      let e = this.host.scenery,
        t = new et(),
        n = [],
        r = [],
        i = [],
        o = [],
        s = [],
        c = [],
        u = new Set(),
        f = new Set();
      for (let t of e.items) {
        if (t.wall || t.door || t.kind === `dressing`) continue;
        let n = e.sourceOf(t)?.p,
          r = qr(t, n);
        r && (c.push({ it: t, p: n, a: r }), u.add(t), f.add(t.key));
      }
      for (let a of e.items) {
        if (
          u.has(a) ||
          (a.parent && u.has(a.parent)) ||
          (a.kind === `dressing` && f.has(a.key.replace(/-front-\d+$/, ``)))
        )
          continue;
        if (a.wall) {
          (n.push(a), t.want(a.c));
          continue;
        }
        if (a.door && a.parent && a.door.frames.length) {
          (r.push(a), t.wantFrames(a.door.frames));
          continue;
        }
        let c = e.sourceOf(a)?.p;
        if (c && !a.frames) {
          let e = c.mode === `tower` ? Mi(c, Ci(a.c)) : null;
          if (e) {
            (o.push({ it: a, s: e }), t.want(a.c));
            continue;
          }
          if (c.mode === `rect` || c.mode === `tower`) {
            (i.push({ it: a, p: c }), t.want(a.c));
            continue;
          }
        }
        (s.push(a), a.frames ? t.wantFrames(a.frames) : t.want(a.c));
      }
      t.pack();
      let p = new Ar(),
        h = new Ar(),
        g = new Ar(),
        _ = new Ti(),
        v = x().walls,
        y = ae(),
        b = (e) =>
          (v.pal?.[e] ?? 0) === 0 && y
            ? null
            : v.flag[e] & d.ARCH
              ? Wr(`gate`)
              : Wr(`wall:${v.pal?.[e] ?? 0}`);
      yi(n, t, p, v, (e, t) => !!b(t * v.n + e));
      for (let { it: e, p: n } of i) {
        let r = t.rect(e.c),
          i = wi(e),
          a = i.x + i.c.width / 2,
          o = _.of(i.c);
        ki(p.at(a, i.baseY, r.page), i, r, o, n.h * 16) ||
          Ai(
            p.at(a, i.baseY, r.page),
            h.at(a, i.baseY, r.page),
            i,
            r,
            o,
            n.h * 16,
          );
      }
      for (let { it: e, s: n } of o) {
        let r = t.rect(e.c),
          i = wi(e);
        Ii(p.at(i.x + i.c.width / 2, i.baseY, r.page), i, r, n);
      }
      let S = new Map();
      for (let e of r) {
        let n = t.frames(e.door.frames),
          r = e.parent,
          i = g.at(r.x + m(r.c) / 2, r.baseY, n[0].page),
          a = Li(i, e, n);
        a && S.set(i, [...(S.get(i) ?? []), a]);
      }
      let C = (e, t) =>
        e.list
          .filter((e) => e.b.vertices > 0)
          .map((e) => ({
            page: e.page,
            arrays: e.b.arrays(),
            b: [...e.b.bounds],
            casts: t,
            mesh: null,
          }));
      ((this.solids = [...C(p, !0), ...C(h, !1)]),
        (this.doors = g.list
          .filter((e) => e.b.vertices > 0)
          .map((e) => ({
            page: e.page,
            arrays: e.b.arrays(),
            b: [...e.b.bounds],
            casts: !0,
            mesh: null,
            quads: S.get(e.b) ?? [],
          }))),
        (this.atlas = t),
        (this.props = new vi(s, t, { lit: this.o.lit, cam: this.cam })));
      for (let [e, t] of Gr()) {
        let n = l[e.slice(8)];
        if (!n) continue;
        let r = t.meta.sizePx.widthPx,
          i = { width: r, height: t.meta.sizePx.heightPx };
        c.push({
          it: {
            key: e,
            kind: `door`,
            c: i,
            x: n.x * 16 + 8 - r / 2,
            y: n.y * 16 + 16 - t.meta.sizePx.heightPx,
            baseY: n.y * 16 + 16,
            tx: n.x,
            ty: n.y,
          },
          p: void 0,
          a: t,
        });
      }
      (c.push(...Ui(v, b)),
        (this.glb = c.length
          ? new ri(c, {
              lit: this.o.lit,
              occl: this.occl,
              fog: this.o.fog ?? ``,
            })
          : null));
    }
    buildGpu() {
      let e = this.atlas;
      if (!e) return;
      e.buildGpu();
      let { lit: t, fog: n } = this.o;
      this.mats = e.textures.map((e) => [
        Tr({ map: e, lit: t, occl: this.occl, pass: `cut`, fog: n }),
        Tr({ map: e, lit: t, occl: this.occl, pass: `shadow` }),
      ]);
      let r = (e, t) => {
        let n = Or(e.arrays, t ? [`aAtlas`] : []);
        (n.computeBoundingSphere(), n.computeBoundingBox());
        let [r, i] = this.mats[e.page],
          a = new I(n, r);
        (e.casts && (a.customDepthMaterial = a.customDistanceMaterial = i),
          (a.frustumCulled = !1),
          (a.matrixAutoUpdate = !1),
          (e.mesh = a),
          this.root.add(a));
      };
      for (let e of this.solids) r(e, !1);
      for (let e of this.doors) r(e, !0);
      (this.props && (this.props.buildGpu(), this.root.add(this.props.root)),
        this.glb && (this.glb.buildGpu(), this.root.add(this.glb.root)));
    }
    disposeGpu() {
      for (let e of [...this.solids, ...this.doors])
        e.mesh &&= (this.root.remove(e.mesh), e.mesh.geometry.dispose(), null);
      for (let e of this.mats) for (let t of e) t.dispose();
      ((this.mats = []),
        this.props &&
          (this.props.disposeGpu(), this.root.remove(this.props.root)),
        this.glb && (this.glb.disposeGpu(), this.root.remove(this.glb.root)),
        this.atlas?.disposeGpu());
    }
    update(e) {
      (this.standIns.update(e.f.standIns),
        (a() !== this.ver || Br() !== this.glbVer) &&
          (this.disposeGpu(), this.buildCpu(), this.buildGpu()),
        kt(this.cam, e),
        this.occl.uOccl.value.set(e.occl.sx, e.occl.sy, e.occl.wy, 1),
        this.occl.uOcclView.value.set(e.cam.W, e.cam.H));
      let t = e.f.fp;
      this.fp = t;
      let n = (e, n, r, i, a) =>
        r >= t.gx0 && e <= t.gx0 + t.fw && i >= t.gy0 && n <= t.gy0 + t.fh + a;
      for (let e of this.solids)
        e.mesh && (e.mesh.visible = n(e.b[0], e.b[1], e.b[3], e.b[4], e.b[5]));
      for (let e of this.doors) {
        if (!e.mesh) continue;
        e.mesh.visible = n(e.b[0], e.b[1], e.b[3], e.b[4], e.b[5]);
        let t = !1;
        for (let n of e.quads) {
          let r = Ri(n.it.door.open, n.rects.length);
          if (r === n.shown) continue;
          n.shown = r;
          let i = n.rects[r],
            a = e.arrays.aAtlas;
          for (let e = n.start; e < n.start + n.count; e++)
            a.set([i.x, i.y, i.w, i.h], e * 4);
          t = !0;
        }
        t && (e.mesh.geometry.getAttribute(`aAtlas`).needsUpdate = !0);
      }
      (this.props?.update(this.host.time, n),
        this.glb?.update(n, this.host.time));
    }
    lights() {
      return this.glb?.lights(this.host.time) ?? [];
    }
    casters(e) {
      let t = this.fp,
        n = (e, n, r, i) =>
          r >= t.gx0 - zi &&
          e <= t.gx0 + t.fw + zi &&
          i >= t.gy0 - zi &&
          n <= t.gy0 + t.fh + zi,
        r = [];
      if (e === `dynamic`) {
        for (let e of this.doors)
          e.mesh && n(e.b[0], e.b[1], e.b[3], e.b[4]) && r.push(e.mesh);
        return (this.standIns.casters(r), this.glb?.moving(r), r);
      }
      for (let e of this.solids)
        e.mesh &&
          e.casts &&
          n(e.b[0], e.b[1], e.b[3], e.b[4]) &&
          r.push(e.mesh);
      return (this.props?.meshes(n, r), this.glb?.meshes(n, r), r);
    }
    rebuild() {
      (this.disposeGpu(), this.standIns.dispose(), this.buildGpu());
    }
    dispose() {
      (this.disposeGpu(),
        this.standIns.dispose(),
        (this.solids = []),
        (this.doors = []),
        (this.props = null),
        (this.glb = null),
        (this.atlas = null));
    }
    stats() {
      return {
        atlasPages: this.atlas?.pages.length ?? 0,
        atlasBytes: this.atlas?.bytes ?? 0,
        props: this.props?.instances ?? 0,
        solidVertices: this.solids.reduce(
          (e, t) => e + t.arrays.position.length / 3,
          0,
        ),
        doors: this.doors.reduce((e, t) => e + t.quads.length, 0),
      };
    }
  },
  Vi = 1,
  Hi = 2.2;
function Ui(e, t) {
  let n = e.n,
    r = [],
    i = (t, r) => t >= 0 && r >= 0 && t < n && r < n && e.h[r * n + t] > 0,
    a = (t, r) => i(t, r) && (e.flag[r * n + t] & d.ARCH) !== 0,
    o = new V(0, 0, 1),
    s = (e, t, n, i, a, s, c, l) => {
      let u = e.meta.sizePx,
        d = new N().compose(
          new V(t, n, 0),
          new Ne().setFromAxisAngle(o, i),
          new V(a / u.widthPx, s / u.depthPx, c / u.heightPx),
        ),
        f = {
          key: `wall-piece-${t},${n}`,
          kind: `wall`,
          c: { width: a, height: c },
          x: t - a / 2,
          y: l - c,
          baseY: l,
          tx: Math.floor(t / 16),
          ty: Math.floor(n / 16),
        };
      r.push({ it: f, p: void 0, a: e, m: d });
    },
    c = new Set();
  for (let r = 0; r < n; r++)
    for (let i = 0; i < n; i++) {
      let o = r * n + i;
      if (!a(i, r) || a(i - 1, r) || a(i, r - 1)) continue;
      let l = t(o);
      if (!l) continue;
      let u = 0;
      for (; a(i + u, r);) u++;
      let d = 0;
      for (; a(i, r + d);) d++;
      let f = i - Vi,
        p = i + u + Vi,
        m = r - 0.5,
        h = r + d + 0.5;
      for (let e = Math.floor(m); e < Math.ceil(h); e++)
        for (let t = f; t < p; t++) c.add(e * n + t);
      s(
        l,
        ((f + p) / 2) * 16,
        ((m + h) / 2) * 16,
        0,
        (p - f) * 16,
        (h - m) * 16,
        e.h[o] * Hi,
        h * 16,
      );
    }
  for (let r = 0; r < n; r++)
    for (let o = 0; o < n; o++) {
      let l = r * n + o,
        u = e.h[l];
      if (!u || a(o, r) || c.has(l)) continue;
      let d = t(l);
      if (!d) continue;
      let f = o * 16 + 8,
        p = r * 16 + 8,
        m = i(o - 1, r) || i(o + 1, r),
        h = i(o, r - 1) || i(o, r + 1),
        g = (r + 1) * 16;
      if (
        (m && s(d, f, p, 0, 16, 16, u, g),
        h && s(d, f, p, Math.PI / 2, 16, 16, u, g),
        !m && !h)
      ) {
        let e = i(o + 1, r - 1) || i(o - 1, r + 1),
          t = i(o - 1, r - 1) || i(o + 1, r + 1);
        (e && s(d, f, p, -Math.PI / 4, 16 * Math.SQRT2, 16, u, g),
          t && s(d, f, p, Math.PI / 4, 16 * Math.SQRT2, 16, u, g),
          !e && !t && s(d, f, p, 0, 16, 16, u, g));
      }
    }
  return r;
}
var q = Math.PI / 180,
  Wi = 35 * q,
  Gi = 16 * q,
  Ki = 2048,
  qi = () => new Float64Array(16);
function Ji(e, t, n) {
  for (let r = 0; r < 4; r++) {
    let i = n[r * 4],
      a = n[r * 4 + 1],
      o = n[r * 4 + 2],
      s = n[r * 4 + 3];
    for (let n = 0; n < 4; n++)
      e[r * 4 + n] = t[n] * i + t[4 + n] * a + t[8 + n] * o + t[12 + n] * s;
  }
  return e;
}
function Yi(e, t) {
  let [n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _] = t,
    v = n * s - r * o,
    y = n * c - i * o,
    b = n * l - a * o,
    x = r * c - i * s,
    S = r * l - a * s,
    C = i * l - a * c,
    w = u * h - d * m,
    T = u * g - f * m,
    E = u * _ - p * m,
    D = d * g - f * h,
    O = d * _ - p * h,
    k = f * _ - p * g,
    ee = v * k - y * O + b * D + x * E - S * T + C * w;
  if (ee === 0) return e.fill(0);
  let A = 1 / ee;
  return (
    (e[0] = (s * k - c * O + l * D) * A),
    (e[1] = (i * O - r * k - a * D) * A),
    (e[2] = (h * C - g * S + _ * x) * A),
    (e[3] = (f * S - d * C - p * x) * A),
    (e[4] = (c * E - o * k - l * T) * A),
    (e[5] = (n * k - i * E + a * T) * A),
    (e[6] = (g * b - m * C - _ * y) * A),
    (e[7] = (u * C - f * b + p * y) * A),
    (e[8] = (o * O - s * E + l * w) * A),
    (e[9] = (r * E - n * O - a * w) * A),
    (e[10] = (m * S - h * b + _ * v) * A),
    (e[11] = (d * b - u * S - p * v) * A),
    (e[12] = (s * T - o * D - c * w) * A),
    (e[13] = (n * D - r * T + i * w) * A),
    (e[14] = (h * y - m * x - g * v) * A),
    (e[15] = (u * x - d * y + f * v) * A),
    e
  );
}
function Xi(e, t, n) {
  let r = e[3] * t + e[7] * n - e[11] + e[15],
    i = e[3] * t + e[7] * n + e[11] + e[15],
    a = (e[0] * t + e[4] * n - e[8] + e[12]) / r,
    o = (e[1] * t + e[5] * n - e[9] + e[13]) / r,
    s = (e[2] * t + e[6] * n - e[10] + e[14]) / r,
    c = (e[0] * t + e[4] * n + e[8] + e[12]) / i,
    l = (e[1] * t + e[5] * n + e[9] + e[13]) / i,
    u = (e[2] * t + e[6] * n + e[10] + e[14]) / i - s;
  if (!(u < -1e-9)) return null;
  let d = -s / u;
  return { x: a + (c - a) * d, y: o + (l - o) * d };
}
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
function da() {
  let e = new L();
  return (
    e.setAttribute(
      `position`,
      new U(new Float32Array([0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0]), 3),
    ),
    e.setIndex([0, 1, 2, 0, 2, 3]),
    e
  );
}
var fa = [],
  pa = `${B}
in vec3 position;
in vec4 aP;   // x, y, z (world px), size (art px)
in vec4 aC;   // r, g, b, t (life left, 0..1)
in vec2 aX;   // alpha, unlit (1: not lit)
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform vec2 uRes;
uniform float uK;
uniform vec3 uBack;
uniform float uGlow;
uniform float uSnap;
out vec2 vQ;
out vec3 vP;
flat out vec4 vC;
flat out float vS;
flat out float vR;
flat out vec2 vX;
void main() {
  vec3 P = vec3(aP.xy, max(aP.z, 0.0));
  vec4 c = projectionMatrix * viewMatrix * vec4(P, 1.0);
  // depth from a little toward the camera, so a speck on the ground isn't cut by the ground it sits on
  vec4 cd = projectionMatrix * viewMatrix * vec4(P + uBack * 3.0, 1.0);
  if (c.w <= 0.0 || cd.w <= 0.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  // render px from the top left, as the canvas counts them
  vec2 px = vec2(c.x / c.w * 0.5 + 0.5, 0.5 - c.y / c.w * 0.5) * uRes;
  float s = aP.w * uK;
  // the square's corner on a whole render pixel (on a whole art pixel, rounded as Classic rounds it,
  // under the calibration camera: uSnap = k there, 1 otherwise)
  // (a hair over a half rounds up, as Math.round does, whatever float error the projection has)
  vec2 ctr = floor((px - 0.5 * s) / uSnap + 0.501) * uSnap + 0.5 * s;
  float halo = uGlow > 0.5 && aP.w >= 2.0 ? max(2.0, floor(aP.w * 3.0 + 0.5)) * uK : 0.0;
  float ext = max(halo, 0.5 * s);
  vQ = (position.xy * 2.0 - 1.0) * ext;
  vP = P;
  vC = aC;
  vX = aX;
  vS = 0.5 * s;
  vR = halo;
  vec2 q = (ctr + vQ) / uRes;
  gl_Position = vec4(q.x * 2.0 - 1.0, 1.0 - q.y * 2.0, clamp(cd.z / cd.w, -1.0, 1.0), 1.0);
}
`,
  ma = `${B}
${lt}
${ut}
in vec2 vQ;
in vec3 vP;
flat in vec4 vC;
flat in float vS;
flat in float vR;
flat in vec2 vX;
uniform float uGlow;
out vec4 o;
void main() {
  float t = vC.a;
  float core = abs(vQ.x) < vS && abs(vQ.y) < vS ? min(1.0, t * 2.0) * vX.x : 0.0;
  if (uGlow < 0.5) {
    if (core <= 0.0) discard;
    vec3 L = vX.y > 0.5 ? vec3(1.0) : hdLight(vP, vec3(0.0, 0.0, 1.0));
    o = vec4(vC.rgb * L * core, core);
    return;
  }
  // glowSprite's gradient: 1 at the middle, 0.45 at 35%, 0 at the edge, at t x 0.35
  float halo = 0.0;
  if (vR > 0.0) {
    float r = length(vQ) / vR;
    halo = (r < 0.35 ? mix(1.0, 0.45, r / 0.35) : mix(0.45, 0.0, clamp((r - 0.35) / 0.65, 0.0, 1.0))) * t * 0.35 * vX.x;
  }
  float a = core + halo;
  if (a <= 0.0) discard;
  o = vec4(vC.rgb * a, 0.0);
}
`,
  ha = new Map(),
  ga = null;
function _a(e) {
  let t = ha.get(e);
  if (t) return t;
  let n = 255,
    r = 255,
    i = 255,
    a = e.trim();
  if (!a.startsWith(`#`) && !a.startsWith(`rgb`))
    try {
      ((ga ??= document.createElement(`canvas`).getContext(`2d`)),
        ga &&
          ((ga.fillStyle = `#ffffff`),
          (ga.fillStyle = a),
          (a = String(ga.fillStyle))));
    } catch {}
  if (a.startsWith(`#`)) {
    let e = a.slice(1),
      t =
        e.length === 3 || e.length === 4
          ? e[0] + e[0] + e[1] + e[1] + e[2] + e[2]
          : e.slice(0, 6),
      o = parseInt(t, 16);
    Number.isNaN(o) || ([n, r, i] = [(o >> 16) & 255, (o >> 8) & 255, o & 255]);
  } else if (a.startsWith(`rgb`)) {
    let e = a.match(/[\d.]+/g);
    e &&
      e.length >= 3 &&
      ([n, r, i] = [Number(e[0]), Number(e[1]), Number(e[2])]);
  }
  let o = [n / 255, r / 255, i / 255];
  return (ha.size > 512 && ha.clear(), ha.set(e, o), o);
}
function va(e) {
  let t = e.life !== void 0 && e.maxLife ? e.life / e.maxLife : 1;
  return e.shrink === !1
    ? e.size
    : Math.max(1, Math.round(e.size * (0.4 + 0.6 * t)));
}
var ya = class {
    glow;
    mesh;
    cap = 0;
    pos = new Float32Array();
    col = new Float32Array();
    ext = new Float32Array();
    aP;
    aC;
    aX;
    geo = new Le();
    res = new j();
    n = 0;
    constructor(e, t) {
      ((this.glow = t),
        this.geo.setAttribute(
          `position`,
          new U(new Float32Array([0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0]), 3),
        ),
        this.geo.setIndex([0, 1, 2, 0, 2, 3]),
        this.grow(1024));
      let n = new H({
        glslVersion: W,
        vertexShader: pa,
        fragmentShader: ma,
        uniforms: {
          ...e,
          uGlow: { value: +!!t },
          uRes: { value: new P(1, 1) },
        },
        transparent: !0,
        depthTest: !0,
        depthWrite: !1,
        side: 2,
        blending: 5,
        blendEquation: 100,
        blendSrc: 201,
        blendDst: t ? 201 : 205,
        blendSrcAlpha: 200,
        blendDstAlpha: 201,
      });
      ((this.mesh = new I(this.geo, n)),
        (this.mesh.frustumCulled = !1),
        (this.mesh.matrixAutoUpdate = !1),
        (this.mesh.renderOrder = 200 + +!!t),
        (this.mesh.onBeforeRender = (e) => {
          (e.getCurrentViewport(this.res),
            n.uniforms.uRes.value.set(
              Math.max(1, this.res.z),
              Math.max(1, this.res.w),
            ),
            (n.uniformsNeedUpdate = !0));
        }));
    }
    grow(e) {
      ((this.cap = e),
        (this.pos = new Float32Array(e * 4)),
        (this.col = new Float32Array(e * 4)),
        (this.ext = new Float32Array(e * 2)),
        (this.aP = new we(this.pos, 4).setUsage(G)),
        (this.aC = new we(this.col, 4).setUsage(G)),
        (this.aX = new we(this.ext, 2).setUsage(G)),
        this.geo.setAttribute(`aP`, this.aP),
        this.geo.setAttribute(`aC`, this.aC),
        this.geo.setAttribute(`aX`, this.aX));
    }
    begin(e) {
      ((this.n = 0),
        e > this.cap &&
          (this.geo.dispose(), this.grow(Math.ceil(e / 1024) * 1024)));
    }
    push(e, t, n, r, i, a, o = 1, s = !1) {
      ((this.ext[this.n * 2] = o), (this.ext[this.n * 2 + 1] = +!!s));
      let c = this.n++ * 4;
      ((this.pos[c] = e),
        (this.pos[c + 1] = t),
        (this.pos[c + 2] = n),
        (this.pos[c + 3] = r),
        (this.col[c] = i[0]),
        (this.col[c + 1] = i[1]),
        (this.col[c + 2] = i[2]),
        (this.col[c + 3] = a));
    }
    end() {
      if (
        ((this.geo.instanceCount = this.n),
        (this.mesh.visible = this.n > 0),
        !this.n)
      )
        return 0;
      for (let e of [this.aP, this.aC, this.aX])
        (e.clearUpdateRanges(),
          e.addUpdateRange(0, this.n * e.itemSize),
          (e.needsUpdate = !0));
      return this.n * 40;
    }
    dispose() {
      (this.geo.dispose(), this.mesh.material.dispose());
    }
  },
  ba = class {
    root = new F();
    plain;
    glow;
    u;
    uploadBytes = 0;
    constructor(e) {
      ((this.u = {
        ...e,
        uK: { value: 1 },
        uSnap: { value: 1 },
        uBack: { value: new V(0, Math.cos(0.61), Math.sin(0.61)) },
      }),
        (this.plain = new ya(this.u, !1)),
        (this.glow = new ya(this.u, !0)),
        this.root.add(this.plain.mesh, this.glow.mesh),
        (this.root.matrixAutoUpdate = !1));
    }
    update(e) {
      let t = e.f.particles,
        n = e.f.air ?? fa;
      ((this.u.uK.value = e.k),
        (this.u.uSnap.value = e.cam.cal ? e.k : 1),
        this.u.uBack.value.copy(e.cam.back),
        this.plain.begin(t.length + n.length),
        this.glow.begin(t.length + n.length));
      for (let e of [t, n])
        for (let t of e) {
          let e = t.life !== void 0 && t.maxLife ? t.life / t.maxLife : 1,
            n = t.a === void 0 ? 1 : Math.min(1, t.a);
          e <= 0 ||
            !(n > 0) ||
            (t.glow ? this.glow : this.plain).push(
              t.x,
              t.y,
              t.z,
              va(t),
              _a(t.color),
              e,
              n,
              t.unlit === !0,
            );
        }
      this.uploadBytes = this.plain.end() + this.glow.end();
    }
    casters() {
      return [];
    }
    rebuild() {
      (this.root.remove(this.plain.mesh, this.glow.mesh),
        this.plain.dispose(),
        this.glow.dispose(),
        (this.plain = new ya(this.u, !1)),
        (this.glow = new ya(this.u, !0)),
        this.root.add(this.plain.mesh, this.glow.mesh));
    }
    dispose() {
      (this.plain.dispose(), this.glow.dispose());
    }
  },
  xa = 102,
  Sa = 1.5,
  Ca = `${B}
in vec3 position;   // x: 0..1 along the column's 2 px of ring, y: 0 foot .. 1 top
in vec4 aI;         // the column's angle, alpha, height (px), 1 = white foot
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 uRing; // centre x, y and radius, world px
uniform float uStep;
uniform vec3 uBack;
out vec3 vP;
out float vZ;
flat out vec3 vI;
void main() {
  float a = aI.x + position.x * uStep;
  // the 1 px foot, then the curtain over it
  float z = position.y * (aI.z + 1.0);
  vec3 P = vec3(uRing.xy + vec2(cos(a), sin(a)) * uRing.z, z);
  vec4 c = projectionMatrix * viewMatrix * vec4(P, 1.0);
  // depth from a little toward the camera, so the foot isn't cut by the ground it stands on
  vec4 cd = projectionMatrix * viewMatrix * vec4(P + uBack * 2.0, 1.0);
  vP = P;
  vZ = z;
  vI = aI.yzw;
  gl_Position = vec4(c.xy, clamp(cd.z / cd.w, -1.0, 1.0) * c.w, c.w);
}
`,
  wa = `${B}
${mt}
${ht}
in vec3 vP;
in float vZ;
flat in vec3 vI;
uniform float uFoot;
out vec4 o;
const vec3 CYAN = vec3(126.0, 249.0, 255.0) / 255.0;
const vec3 PALE = vec3(223.0, 252.0, 255.0) / 255.0;
void main() {
  float alpha = vI.x;
  vec3 c;
  if (vZ < 1.0) {
    // the foot: 1 px of the ring's colour (white where a strike lands)
    c = (vI.z > 0.5 ? vec3(1.0) : CYAN) * min(1.0, alpha * 1.3) * uFoot;
  } else {
    // curtainSprite's fade: clear at the top, half at 70% down, pale and full at the foot
    float g = clamp(1.0 - (vZ - 1.0) / max(vI.y, 1.0), 0.0, 1.0);
    vec3 col = g < 0.7 ? CYAN : mix(CYAN, PALE, (g - 0.7) / 0.3);
    float ga = g < 0.7 ? 0.5 * g / 0.7 : mix(0.5, 1.0, (g - 0.7) / 0.3);
    c = col * ga * alpha * 0.55;
  }
  if (max(c.r, max(c.g, c.b)) < 0.5 / 255.0) discard;
  // light itself: through the haze at 0.4 of its strength; the DoF mask (alpha) is left alone
  o = vec4(hdFog(vec3(0.0), c, vP), 0.0);
}
`,
  Ta = `${B}
in vec3 position;
in vec4 aC;   // r, g, b (already times the crack's flicker), 0
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 uBack;
out vec3 vP;
flat out vec3 vC;
void main() {
  vec4 c = projectionMatrix * viewMatrix * vec4(position, 1.0);
  vec4 cd = projectionMatrix * viewMatrix * vec4(position + uBack * 2.5, 1.0);
  vP = position;
  vC = aC.rgb;
  gl_Position = vec4(c.xy, clamp(cd.z / cd.w, -1.0, 1.0) * c.w, c.w);
}
`,
  Ea = `${B}
${mt}
${ht}
in vec3 vP;
flat in vec3 vC;
out vec4 o;
void main() {
  o = vec4(hdFog(vec3(0.0), vC, vP), 0.0);
}
`,
  Da = (e, t, n) =>
    new H({
      glslVersion: W,
      vertexShader: e,
      fragmentShader: t,
      uniforms: n,
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
function Oa(e, t) {
  let n = (e - t) % (Math.PI * 2);
  return (
    n > Math.PI && (n -= Math.PI * 2),
    n < -Math.PI && (n += Math.PI * 2),
    n
  );
}
var ka = class {
    host;
    root = new F();
    cx = _ * 16;
    cy = _e * 16;
    R = n * 16;
    n = Math.floor((Math.PI * 2 * n * 16) / 2);
    u;
    cols;
    colBuf = new Float32Array();
    colAttr;
    cracks;
    crackCap = 0;
    crackPos = new Float32Array();
    crackCol = new Float32Array();
    crackPosAttr;
    crackColAttr;
    first = !0;
    constructor(e, t) {
      ((this.host = e),
        (this.u = {
          ...t,
          uRing: { value: new V(this.cx, this.cy, this.R) },
          uStep: { value: (Math.PI * 2) / this.n },
          uBack: { value: new V(0, Math.cos(0.61), Math.sin(0.61)) },
          uFoot: { value: Sa },
        }),
        (this.root.matrixAutoUpdate = !1),
        this.build());
    }
    build() {
      let e = new Le();
      (e.setAttribute(
        `position`,
        new U(new Float32Array([0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0]), 3),
      ),
        e.setIndex([0, 1, 2, 0, 2, 3]),
        (this.colBuf = new Float32Array(this.n * 4)),
        (this.colAttr = new we(this.colBuf, 4).setUsage(G)),
        e.setAttribute(`aI`, this.colAttr),
        (e.instanceCount = 0),
        (this.cols = new I(e, Da(Ca, wa, this.u))),
        (this.cols.frustumCulled = !1),
        (this.cols.matrixAutoUpdate = !1),
        (this.cols.renderOrder = xa));
      let t = new L();
      ((this.cracks = new I(t, Da(Ta, Ea, this.u))),
        (this.cracks.frustumCulled = !1),
        (this.cracks.matrixAutoUpdate = !1),
        (this.cracks.renderOrder = xa),
        (this.crackCap = 0),
        this.growCracks(64),
        this.root.add(this.cols, this.cracks),
        (this.cols.visible = this.cracks.visible = this.first));
    }
    growCracks(e) {
      ((this.crackCap = e),
        (this.crackPos = new Float32Array(e * 4 * 3)),
        (this.crackCol = new Float32Array(e * 4 * 4)));
      let t = new Uint32Array(e * 6);
      for (let n = 0; n < e; n++)
        t.set(
          [n * 4, n * 4 + 1, n * 4 + 2, n * 4, n * 4 + 2, n * 4 + 3],
          n * 6,
        );
      let n = this.cracks.geometry;
      (n.dispose(),
        (this.crackPosAttr = new U(this.crackPos, 3).setUsage(G)),
        (this.crackColAttr = new U(this.crackCol, 4).setUsage(G)),
        n.setAttribute(`position`, this.crackPosAttr),
        n.setAttribute(`aC`, this.crackColAttr),
        n.setIndex(new U(t, 1)));
    }
    update(e) {
      ((this.first = !1), this.u.uBack.value.copy(e.cam.back));
      let { gx0: t, gy0: n, fw: r, fh: i } = e.f.fp,
        { cx: a, cy: o, R: s } = this,
        c = Math.min(Math.max(a, t), t + r),
        l = Math.min(Math.max(o, n), n + i),
        u = Math.max(
          Math.hypot(t - a, n - o),
          Math.hypot(t + r - a, n - o),
          Math.hypot(t - a, n + i - o),
          Math.hypot(t + r - a, n + i - o),
        ),
        d = !(Math.hypot(c - a, l - o) > s + 70 || u < s - 4);
      ((this.cols.visible = d && this.columns(t, n, r, i) > 0),
        (this.cracks.visible = d && this.crackLines(t, n, r, i) > 0));
    }
    columns(e, t, r, i) {
      let a = this.host.dome,
        o = this.host.time,
        { n: s, cx: c, cy: l, R: u } = this,
        d = this.colBuf,
        f = 0;
      for (let p = 0; p < s; p++) {
        let m = (p / s) * Math.PI * 2,
          h = c + Math.cos(m) * u - e,
          g = l + Math.sin(m) * u - t;
        if (h < -4 || h > r + 4 || g < -4 || g > i + 80) continue;
        let _ = 0;
        for (let e of a.hits) {
          let t = o - e.t0,
            r = Oa(m, e.a),
            i = Math.abs(r) * n;
          _ +=
            e.p *
            Math.max(0, 1 - t / 1.6) *
            (Math.exp(-r * r * 900) +
              0.7 * Math.exp(-((i - t * 9) ** 2) * 0.6));
        }
        a.breach > 0.05 &&
          (_ +=
            a.breach *
            Math.exp(-(Oa(m, 0) ** 2) * 600) *
            (0.6 + 0.4 * Math.sin(o * 13)));
        let v =
            0.55 +
            0.25 * Math.sin(m * 60 + o * 2.2) +
            0.2 * Math.sin(m * 13 - o * 1.3),
          y = p % 14 == 0 ? 1.7 : 1,
          b = Math.min(Math.max(a.power * v * y * 0.5 + _ * 0.8, 0), 1);
        if (b <= 0) continue;
        let x = f++ * 4;
        ((d[x] = m),
          (d[x + 1] = b),
          (d[x + 2] = Math.round(
            28 + 8 * Math.sin(m * 7 + o) + Math.min(40, _ * 22),
          )),
          (d[x + 3] = +(_ > 0.4)));
      }
      let p = this.cols.geometry;
      return (
        (p.instanceCount = f),
        f &&
          (this.colAttr.clearUpdateRanges(),
          this.colAttr.addUpdateRange(0, f * 4),
          (this.colAttr.needsUpdate = !0)),
        f
      );
    }
    crackLines(e, t, n, r) {
      let i = this.host.dome,
        a = this.host.time,
        { cx: o, cy: s, R: c } = this,
        l = 0;
      for (let u of i.cracks) {
        let i = o + Math.cos(u.a) * c,
          d = s + Math.sin(u.a) * c;
        if (i - e < -60 || i - e > n + 60 || d - t < -60 || d - t > r + 80)
          continue;
        let f = Math.sin(u.a),
          p = -Math.cos(u.a),
          m = 0.65 + 0.35 * Math.sin(a * 11 + u.seed),
          h = u.seed,
          g = () => ((h = (h * 16807) % 2147483647), (h % 1e3) / 1e3),
          _ = (e, t, n, r, a) => {
            (l >= this.crackCap && this.growCrackKeep(),
              this.crackSeg(l++, i, d, f, p, e, t, n, r, _a(a), m));
          },
          v = 0,
          y = 0;
        for (let e = 0; e < 7; e++) {
          let t = v + (g() - 0.5) * 12,
            n = y + u.len / 7;
          (_(v, y, t, n, e % 2 ? `#ff9cf5` : `#ffffff`),
            g() < 0.4 && _(t, n, t + (g() - 0.5) * 14, n - g() * 6, `#b84dff`),
            (v = t),
            (y = n));
        }
      }
      if ((this.cracks.geometry.setDrawRange(0, l * 6), l))
        for (let [e, t] of [
          [this.crackPosAttr, 12],
          [this.crackColAttr, 16],
        ])
          (e.clearUpdateRanges(),
            e.addUpdateRange(0, l * t),
            (e.needsUpdate = !0));
      return l;
    }
    growCrackKeep() {
      let e = this.crackPos,
        t = this.crackCol;
      (this.growCracks(this.crackCap * 2),
        this.crackPos.set(e),
        this.crackCol.set(t));
    }
    crackSeg(e, t, n, r, i, a, o, s, c, l, u) {
      let d = s - a,
        f = c - o,
        p = Math.hypot(d, f) || 1,
        m = (-f / p) * 0.5,
        h = (d / p) * 0.5,
        g = (d / p) * 0.5,
        _ = (f / p) * 0.5,
        v = [
          [a - g + m, o - _ + h],
          [s + g + m, c + _ + h],
          [s + g - m, c + _ - h],
          [a - g - m, o - _ - h],
        ],
        y = this.crackPos,
        b = this.crackCol;
      for (let a = 0; a < 4; a++) {
        let [o, s] = v[a],
          c = (e * 4 + a) * 3;
        ((y[c] = t + r * o),
          (y[c + 1] = n + i * o),
          (y[c + 2] = Math.max(0, s)));
        let d = (e * 4 + a) * 4;
        ((b[d] = l[0] * u),
          (b[d + 1] = l[1] * u),
          (b[d + 2] = l[2] * u),
          (b[d + 3] = 0));
      }
    }
    casters() {
      return [];
    }
    rebuild() {
      (this.free(), this.root.remove(this.cols, this.cracks), this.build());
    }
    free() {
      (this.cols.geometry.dispose(),
        this.cols.material.dispose(),
        this.cracks.geometry.dispose(),
        this.cracks.material.dispose());
    }
    dispose() {
      this.free();
    }
  },
  Aa = {
    high: { points: 32, lines: 16 },
    medium: { points: 24, lines: 8 },
    low: { points: 12, lines: 4 },
    minimal: { points: 8, lines: 2 },
  },
  ja = 0.5,
  Ma = 6,
  Na = 1.3,
  Pa = 0.25,
  Fa = 0.6,
  Ia = 0.35,
  La = 2.6,
  Ra = 1.8,
  za = 0.6,
  Ba = 1.25;
function Va(e, t = !1) {
  let n = La + -0.6000000000000001 * Math.min(1, Math.max(0, e / 0.82));
  return t ? 1 + (n - 1) * za : n;
}
var Ha = 6,
  Ua = 0.5,
  Wa = new Map();
function Ga(e) {
  let t = Wa.get(e);
  if (t) return t;
  Wa.size > 512 && Wa.clear();
  let [n, r, a] = i(e),
    o = (e) => (Number.isFinite(e) ? 0.35 + (e / 255) * 0.65 : 1);
  return ((t = [o(n), o(r), o(a)]), Wa.set(e, t), t);
}
function Ka(e, t, n = 1.8) {
  return (
    (Number.isFinite(e) ? Math.min(1, Math.max(0, e)) : 1) * (0.35 + n * t)
  );
}
function qa(e, t, n) {
  let [r, i, a] = Ga(e.color);
  return (
    (n.a = [e.x0, e.y0, e.z0]),
    (n.b = [e.x1, e.y1, e.z1]),
    (n.r = r),
    (n.g = i),
    (n.b2 = a),
    (n.I = Ka(e.a, t) / Va(t, !0)),
    (n.rad = (e.r * Fa) / Ba),
    n
  );
}
function Ja(e, t, n) {
  let r = Math.max(e.gx0 - t, 0, t - (e.gx0 + e.fw)),
    i = Math.max(e.gy0 - n, 0, n - (e.gy0 + e.fh));
  return r * r + i * i;
}
function Ya(e, t, n, r) {
  let i = r.bx - r.ax,
    a = r.by - r.ay,
    o = r.bz - r.az,
    s = i * i + a * a + o * o,
    c =
      s > 0.001
        ? Math.min(
            1,
            Math.max(0, ((e - r.ax) * i + (t - r.ay) * a + (n - r.az) * o) / s),
          )
        : 0,
    l = r.ax + i * c - e,
    u = r.ay + a * c - t,
    d = r.az + o * c - n;
  return l * l + u * u + d * d;
}
var Xa = (e, t, n) => {
    let r = t * 3;
    return (e * r * r) / (r * r + n);
  },
  Za = class {
    uniforms;
    stats = { points: 0, lines: 0, candidates: 0, hero: !1 };
    pts = [];
    lns = [];
    np = 0;
    nl = 0;
    order = [];
    heroL = null;
    torch = null;
    fade = 0;
    skip = { x: 0, y: 0, r: 0 };
    constructor(e = pt()) {
      this.uniforms = e;
    }
    sky(e, t = 1) {
      ((this.uniforms.uDark.value = Math.min(1, Math.max(0, e))),
        (this.uniforms.uFxAmb.value = t));
    }
    hero() {
      return this.heroL;
    }
    resetHero() {
      ((this.torch = null), (this.fade = 0));
    }
    heroFade() {
      return this.heroL ? this.fade : 0;
    }
    heroSkip() {
      return this.skip;
    }
    build(e, t, n, r, i, a, o = i, s = !0, c = 0, l = []) {
      let u = this.uniforms,
        d = u.uDark.value,
        f = Aa[a];
      ((this.np = 0), (this.nl = 0));
      let p = -1,
        m = s === `torch`,
        h = m && a === `high` ? this.pickTorch(e, t, o, c) : -1;
      if (
        ((!m || h < 0) &&
          ((this.torch = null), (this.fade = +!m), (this.skip.r = 0)),
        a === `high` && s === !0)
      ) {
        let e = ja;
        for (let t = 0; t < n.pts.length; t++) {
          let r = n.pts[t],
            i = r.x - o.x,
            a = r.y - o.y;
          r.I > e &&
            i * i + a * a <= 25600 &&
            r.rad > 0 &&
            ((e = r.I), (p = t));
        }
      }
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (!(r.r > 0) || n === h) continue;
        let a = r.z ?? 12,
          [o, s, c] = Ga(r.color);
        this.point(
          r.x + t.gx0,
          r.y + t.gy0 + a,
          a,
          r.r * Fa,
          o,
          s,
          c,
          Ka(r.a, d),
          t,
          i,
        );
      }
      for (let e of l) {
        if (!(e.r > 0)) continue;
        let [n, r, a] = Ga(e.color);
        this.point(e.x, e.y, e.z, e.r * Fa, n, r, a, Ka(e.a, d), t, i);
      }
      for (let e of r) {
        if (!(e.r > 0)) continue;
        let [n, r, a] = Ga(e.color);
        this.point(e.x, e.y, e.z, e.r * Ia, n, r, a, Ka(e.a, d, 1.1), t, i);
      }
      let g = Va(d);
      for (let e = 0; e < n.pts.length; e++) {
        if (e === p) continue;
        let r = n.pts[e];
        r.rad > 0 &&
          this.point(r.x, r.y, r.z, r.rad * Ra, r.r, r.g, r.b, r.I * g, t, i);
      }
      let _ = Va(d, !0);
      for (let e of n.lines) e.rad > 0 && this.line(e, _, t, i);
      let v = u.uPt.value,
        y = 0;
      if (p >= 0) {
        let e = n.pts[p];
        (v[0].set(e.x, e.y, e.z, e.rad * Ra),
          v[1].set(e.r, e.g, e.b, e.I * g),
          (this.heroL = { x: e.x, y: e.y, z: e.z, rad: e.rad * Ra }),
          (y = 1));
      } else if (h >= 0) {
        let n = e[h],
          r = n.z ?? 12,
          [i, a, o] = Ga(n.color),
          s = n.x + t.gx0,
          c = n.y + t.gy0 + r;
        (v[0].set(s, c, r, n.r * Fa),
          v[1].set(i, a, o, Ka(n.a, d)),
          (this.heroL = { x: s, y: c + 6, z: r, rad: n.r * Fa }),
          (y = 1));
      } else this.heroL = null;
      let b = Math.min(f.points, 32) - y;
      this.rank(this.pts, this.np, b);
      let x = Math.min(b, this.np),
        S = this.np > b ? this.pts[this.order[b]].s : 0;
      for (let e = 0; e < x; e++) {
        let t = this.pts[this.order[e]],
          n = Qa(t.s, S);
        n <= 0 ||
          (v[y * 2].set(t.x, t.y, t.z, t.rad),
          v[y * 2 + 1].set(t.r, t.g, t.b, t.I * n),
          y++);
      }
      u.uPtN.value = y;
      let C = u.uLn.value,
        w = Math.min(f.lines, 16);
      this.rank(this.lns, this.nl, w);
      let T = this.nl > w ? this.lns[this.order[w]].s : 0,
        E = 0;
      for (let e = 0; e < Math.min(w, this.nl); e++) {
        let t = this.lns[this.order[e]],
          n = Qa(t.s, T);
        n <= 0 ||
          (C[E * 3].set(t.ax, t.ay, t.az, t.rad),
          C[E * 3 + 1].set(t.bx, t.by, t.bz, 0),
          C[E * 3 + 2].set(t.r, t.g, t.b, t.I * n),
          E++);
      }
      ((u.uLnN.value = E),
        (this.stats.points = y),
        (this.stats.lines = E),
        (this.stats.candidates = this.np + this.nl + +(p >= 0 || h >= 0)),
        (this.stats.hero = p >= 0 || h >= 0));
    }
    pickTorch(e, t, n, r) {
      let i = this.torch,
        a = -1,
        o = 0,
        s = -1,
        c = 0;
      for (let r = 0; r < e.length; r++) {
        let l = e[r],
          u = l.z ?? 12;
        if (!l.cast || !(l.r > 0) || u < Ma) continue;
        let d = l.x + t.gx0,
          f = l.y + t.gy0 + u,
          p = d - n.x,
          m = f + 6 - n.y,
          h = p * p + m * m;
        if (h > 25600) continue;
        let g = Xa(1, l.r * Fa, h + u * u);
        (g > o && ((o = g), (a = r)),
          i &&
            Math.abs(d - i.x) < 1 &&
            Math.abs(f - i.y) < 1 &&
            ((s = r), (c = g)));
      }
      let l = s >= 0 && (a === s || o < c * Na) ? s : a,
        u = Math.max(0, Math.min(0.1, r)) / Pa,
        d = s;
      if (
        (s >= 0 && l === s
          ? (this.fade = Math.min(1, this.fade + u))
          : s >= 0 && this.fade > u
            ? (this.fade -= u)
            : ((d = l), (this.fade = 0)),
        d < 0)
      )
        return -1;
      let f = e[d],
        p = f.z ?? 12;
      return (
        (this.torch = { x: f.x + t.gx0, y: f.y + t.gy0 + p }),
        (this.skip.x = this.torch.x),
        (this.skip.y = this.torch.y),
        (this.skip.r = 6),
        d
      );
    }
    point(e, t, n, r, i, a, o, s, c, l) {
      if (!(s > 0) || !(r > 0)) return;
      let u = r * Ha;
      if (Ja(c, e, t) > u * u) return;
      let d = Math.max(i, a, o);
      if (!(d > 0)) return;
      let f = e - l.x,
        p = t - l.y,
        m = this.pts[this.np];
      ((m ||= this.pts[this.np] =
        { x: 0, y: 0, z: 0, rad: 0, r: 0, g: 0, b: 0, I: 0, s: 0 }),
        (m.x = e),
        (m.y = t),
        (m.z = n),
        (m.rad = r),
        (m.r = i),
        (m.g = a),
        (m.b = o),
        (m.I = s),
        (m.s = Xa(s * d, r, f * f + p * p + n * n)),
        this.np++);
    }
    line(e, t, n, r) {
      if (!(e.I > 0)) return;
      let i = e.rad * Ba,
        a = e.I * t,
        o = i * Ha,
        s = Math.min(e.a[0], e.b[0]) - o,
        c = Math.max(e.a[0], e.b[0]) + o,
        l = Math.min(e.a[1], e.b[1]) - o,
        u = Math.max(e.a[1], e.b[1]) + o;
      if (c < n.gx0 || s > n.gx0 + n.fw || u < n.gy0 || l > n.gy0 + n.fh)
        return;
      let d = Math.max(e.r, e.g, e.b2);
      if (!(d > 0)) return;
      let f = this.lns[this.nl];
      ((f ||= this.lns[this.nl] =
        {
          ax: 0,
          ay: 0,
          az: 0,
          bx: 0,
          by: 0,
          bz: 0,
          rad: 0,
          r: 0,
          g: 0,
          b: 0,
          I: 0,
          s: 0,
        }),
        (f.ax = e.a[0]),
        (f.ay = e.a[1]),
        (f.az = e.a[2]),
        (f.bx = e.b[0]),
        (f.by = e.b[1]),
        (f.bz = e.b[2]),
        (f.rad = i),
        (f.r = e.r),
        (f.g = e.g),
        (f.b = e.b2),
        (f.I = a),
        (f.s = Xa(a * d, i, Ya(r.x, r.y, 0, f))),
        this.nl++);
    }
    rank(e, t, n) {
      let r = this.order;
      r.length = t;
      for (let e = 0; e < t; e++) r[e] = e;
      t > 1 && n > 0 && r.sort((t, n) => e[n].s - e[t].s || t - n);
    }
  };
function Qa(e, t) {
  return t > 0 ? Math.min(1, Math.max(0, (e - t) / (Ua * t))) : 1;
}
var $a = { band: 1.1, ramp: 1.4, max: 0.6 },
  eo = (Math.PI * 2 * 3) / 8,
  to = `${B}
in vec2 vUv; out vec4 o;
uniform sampler2D uSrc; uniform sampler2D uField;
uniform vec2 uArt;     // the view, art px
uniform vec2 uRes;     // the target, render px
uniform float uEnc;
void main() {
  vec2 off = texture(uField, vUv).rg;
  if (uEnc < 1.0) off = (off - 0.5) / uEnc;
  vec2 px = floor(vUv * uRes + vec2(off.x, -off.y) * (uRes / uArt)) + 0.5;
  o = texture(uSrc, clamp(px, vec2(0.5), uRes - 0.5) / uRes);
}
`,
  no = `${B}
in vec2 vUv; out vec4 o;
uniform sampler2D uSrc; uniform sampler2D uDepth; uniform sampler2D uMask;
uniform mat4 uInv;
uniform vec4 uRect;    // the mask over the world: x0, y0, w, h (world px)
uniform vec2 uRes;     // the target, render px
uniform float uK;      // render px per art px
uniform float uT;      // the sway's phase
void main() {
  vec2 nd = vUv * 2.0 - 1.0;
  vec4 a = uInv * vec4(nd, -1.0, 1.0); a /= a.w;
  vec4 b = uInv * vec4(nd, 1.0, 1.0); b /= b.w;
  vec4 p = uInv * vec4(nd, textureLod(uDepth, vUv, 0.0).r * 2.0 - 1.0, 1.0); p /= p.w;
  float dz = b.z - a.z;
  float amt = 0.0, wy = 0.0;
  if (dz < -1e-6) {
    for (int i = 0; i < 3; i++) {
      float h = (float(i) + 0.5) * ${(6).toFixed(1)};
      if (p.z >= h) continue;
      vec2 g = mix(a.xy, b.xy, (h - a.z) / dz);
      amt += textureLod(uMask, (g - uRect.xy) / uRect.zw, 0.0).r;
      wy += g.y;
    }
    wy /= 3.0;
  }
  vec2 px = vUv * uRes;
  if (amt > 0.01) px.x += floor(sin(wy * 0.5 + uT) * min(amt, 1.5) / 1.5 * uK + 0.5);
  o = texture(uSrc, (floor(clamp(px, vec2(0.5), uRes - 0.5)) + 0.5) / uRes);
}
`,
  ro = `
uniform sampler2D uDepth;
uniform vec4 uDof;     // band, ramp, max (art px), focal distance: past the focal plane
uniform vec3 uDofN;    // band, ramp, max: before it
uniform vec3 uClip;    // near, far, orthographic
uniform sampler2D uGlow;
uniform float uGlowOn; uniform float uGlowFlip;
uniform vec4 uFp; uniform vec2 uFpInv;
uniform mat4 uInv;     // the frame's inverse projection: screen to world
float linDepth(float d) {
  float n = uClip.x, f = uClip.y;
  return uClip.z > 0.5 ? n + d * (f - n) : 2.0 * f * n / (f + n - (2.0 * d - 1.0) * (f - n));
}
float glowAt(vec2 uv) {
  vec2 nd = uv * 2.0 - 1.0;
  vec4 a = uInv * vec4(nd, -1.0, 1.0); a /= a.w;
  vec4 b = uInv * vec4(nd, 1.0, 1.0); b /= b.w;
  float dz = b.z - a.z;
  if (dz > -1e-6) return 0.0;
  vec2 g = mix(a.xy, b.xy, -a.z / dz);
  vec2 t = (g - uFp.xy) * uFpInv;
  if (g.x < uFp.x || g.y < uFp.y || g.x >= uFp.x + uFp.z || g.y >= uFp.y + uFp.w) return 0.0;
  if (uGlowFlip > 0.5) t.y = 1.0 - t.y;
  return textureLod(uGlow, t, 0.0).a;
}
float cocAt(vec2 uv) {
  float d = textureLod(uDepth, uv, 0.0).r;
  float z = linDepth(d) - uDof.w;
  float c = d >= 1.0 ? uDof.z : z >= 0.0 ? smoothstep(uDof.x, uDof.x + uDof.y, z) * uDof.z : smoothstep(uDofN.x, uDofN.x + uDofN.y, -z) * uDofN.z;
  if (uGlowOn > 0.5 && c > 0.0) c *= 1.0 - clamp(glowAt(uv) * 2.0, 0.0, 1.0);
  return c;
}
`,
  io = `${B}
in vec2 vUv; out vec4 o;
uniform sampler2D uSrc; uniform vec2 uTexel;
float lumaOf(vec3 c) { c = c / (1.0 + c); return dot(c, vec3(0.299, 0.587, 0.114)); }
float lumaAt(vec2 uv) { return lumaOf(textureLod(uSrc, uv, 0.0).rgb); }
void main() {
  vec4 cM = textureLod(uSrc, vUv, 0.0);
  float lM = lumaOf(cM.rgb);
  vec2 t = uTexel;
  float lN = lumaAt(vUv + vec2(0.0, t.y)), lS = lumaAt(vUv - vec2(0.0, t.y));
  float lE = lumaAt(vUv + vec2(t.x, 0.0)), lW = lumaAt(vUv - vec2(t.x, 0.0));
  float lMax = max(lM, max(max(lN, lS), max(lE, lW)));
  float lMin = min(lM, min(min(lN, lS), min(lE, lW)));
  float range = lMax - lMin;
  if (range < max(0.0312, lMax * 0.125)) { o = cM; return; }
  float lNE = lumaAt(vUv + t), lSW = lumaAt(vUv - t);
  float lNW = lumaAt(vUv + vec2(-t.x, t.y)), lSE = lumaAt(vUv + vec2(t.x, -t.y));
  float sub = clamp(abs((2.0 * (lN + lS + lE + lW) + lNE + lNW + lSE + lSW) / 12.0 - lM) / range, 0.0, 1.0);
  sub = smoothstep(0.0, 1.0, sub);
  sub = sub * sub * 0.25;
  float eH = abs(lNW + lNE - 2.0 * lN) + 2.0 * abs(lW + lE - 2.0 * lM) + abs(lSW + lSE - 2.0 * lS);
  float eV = abs(lNW + lSW - 2.0 * lW) + 2.0 * abs(lN + lS - 2.0 * lM) + abs(lNE + lSE - 2.0 * lE);
  bool horz = eH >= eV;
  float l1 = horz ? lS : lW;
  float l2 = horz ? lN : lE;
  float g1 = abs(l1 - lM), g2 = abs(l2 - lM);
  float stp = horz ? t.y : t.x;
  float avg;
  if (g1 >= g2) { stp = -stp; avg = 0.5 * (l1 + lM); } else avg = 0.5 * (l2 + lM);
  float grad = 0.25 * max(g1, g2);
  vec2 c = vUv + (horz ? vec2(0.0, 0.5 * stp) : vec2(0.5 * stp, 0.0));
  vec2 dv = horz ? vec2(t.x, 0.0) : vec2(0.0, t.y);
  vec2 a = c - dv, b = c + dv;
  float la = lumaAt(a) - avg, lb = lumaAt(b) - avg;
  bool da = abs(la) >= grad, db = abs(lb) >= grad;
  float Q[8] = float[8](1.5, 2.0, 2.0, 2.0, 2.0, 4.0, 8.0, 8.0);
  for (int i = 0; i < 8; i++) {
    if (da && db) break;
    if (!da) { a -= dv * Q[i]; la = lumaAt(a) - avg; da = abs(la) >= grad; }
    if (!db) { b += dv * Q[i]; lb = lumaAt(b) - avg; db = abs(lb) >= grad; }
  }
  float d1 = horz ? vUv.x - a.x : vUv.y - a.y;
  float d2 = horz ? b.x - vUv.x : b.y - vUv.y;
  float off = (((d1 < d2) ? la : lb) < 0.0) != (lM < avg) ? 0.5 - min(d1, d2) / (d1 + d2) : 0.0;
  off = max(off, sub);
  vec2 uv = vUv + (horz ? vec2(0.0, off * stp) : vec2(off * stp, 0.0));
  o = vec4(textureLod(uSrc, uv, 0.0).rgb, cM.a);
}
`,
  ao = `${B}
in vec2 vUv; out vec4 o;
uniform sampler2D uSrc; uniform vec2 uSrcTexel;
${ro}
void main() {
  vec2 t = uSrcTexel;
  vec3 c = texture(uSrc, vUv + t * vec2(-0.5, -0.5)).rgb + texture(uSrc, vUv + t * vec2(0.5, -0.5)).rgb
         + texture(uSrc, vUv + t * vec2(-0.5, 0.5)).rgb + texture(uSrc, vUv + t * vec2(0.5, 0.5)).rgb;
  o = vec4(c * 0.25, cocAt(vUv));
}
`,
  oo = `${B}
in vec2 vUv; out vec4 o;
uniform sampler2D uSrc;
uniform vec2 uPxUv;    // one art px in uv
void main() {
  vec4 c0 = texture(uSrc, vUv);
  float r = c0.a;
  if (r < 0.25) { o = c0; return; }
  vec3 acc = c0.rgb; float wsum = 1.0;
  for (int i = 0; i < 12; i++) {
    float fi = float(i) + 0.5;
    float rr = sqrt(fi / 12.0) * r;
    float a = fi * 2.39996323;
    vec4 s = textureLod(uSrc, vUv + vec2(cos(a), sin(a)) * rr * uPxUv, 0.0);
    float w = smoothstep(rr - 0.75, rr + 0.25, s.a);
    acc += s.rgb * w; wsum += w;
  }
  o = vec4(acc / wsum, r);
}
`,
  so = `${B}
in vec2 vUv; out vec4 o;
uniform sampler2D uSrc; uniform sampler2D uBlur; uniform vec2 uBlurSize;
${ro}
void main() {
  vec4 base = texture(uSrc, vUv);
  float c = cocAt(vUv);
  if (c < 0.25) { o = base; return; }
  vec2 p = vUv * uBlurSize - 0.5;
  vec2 i0 = floor(p); vec2 f = p - i0;
  ivec2 hi = ivec2(uBlurSize) - 1;
  vec3 acc = vec3(0.0); float wsum = 0.0;
  for (int j = 0; j < 4; j++) {
    ivec2 q = ivec2(j & 1, j >> 1);
    vec4 s = texelFetch(uBlur, clamp(ivec2(i0) + q, ivec2(0), hi), 0);
    vec2 bw = mix(1.0 - f, f, vec2(q));
    float w = bw.x * bw.y / (0.1 + abs(s.a - c));
    acc += s.rgb * w; wsum += w;
  }
  vec3 blur = wsum > 0.0 ? acc / wsum : base.rgb;
  o = vec4(mix(base.rgb, blur, smoothstep(0.25, 1.0, c)), base.a);
}
`,
  co = `${B}
in vec2 vUv; out vec4 o;
uniform sampler2D uSrc; uniform sampler2D uSrc2; uniform float uTwo; uniform vec2 uTexel; uniform float uThresh;
vec3 tap4(sampler2D s) {
  return 0.25 * (texture(s, vUv + uTexel * vec2(-1.0, -1.0)).rgb + texture(s, vUv + uTexel * vec2(1.0, -1.0)).rgb
         + texture(s, vUv + uTexel * vec2(-1.0, 1.0)).rgb + texture(s, vUv + uTexel * vec2(1.0, 1.0)).rgb);
}
vec3 thresh(vec3 c) {
  if (uThresh < 0.0) return c;
  float br = max(c.r, max(c.g, c.b));
  return c * (max(br - uThresh, 0.0) / max(br, 1e-4));
}
void main() {
  vec3 c = thresh(tap4(uSrc));
  if (uTwo > 0.5) c += thresh(tap4(uSrc2));
  o = vec4(min(c, vec3(8.0)), 1.0);
}
`,
  lo = `${B}
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
  uo = `${B}
precision highp sampler2DShadow;
in vec2 vUv; out vec4 o;
uniform sampler2D uDepth;
uniform mat4 uInv;        // clip to world
uniform mat4 uM;          // world to clip
uniform vec2 uTexel;      // 1 / the depth's size
uniform vec3 uEye;
uniform vec3 uSunDir;     // toward the sun
uniform mat4 uSunMat;
uniform sampler2DShadow uSunStatic;
uniform sampler2DShadow uSunDynamic;
uniform float uShadowOn;
uniform vec4 uAtmos;      // AO radius (world px), AO on, ray length (world px), rays on
uniform float uTime;
uniform int uRaySteps;
vec3 worldAt(vec2 uv, float d) {
  vec4 p = uInv * vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
  return p.xyz / p.w;
}
float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
float sunAt(vec3 Q) {
  vec3 s = (uSunMat * vec4(Q, 1.0)).xyz;
  if (any(lessThan(s, vec3(0.0))) || any(greaterThan(s, vec3(1.0)))) return 1.0;
  float v = 1.0;
  if (mod(uShadowOn, 2.0) > 0.5) v = textureLod(uSunStatic, s, 0.0);
  if (uShadowOn > 1.5) v = min(v, textureLod(uSunDynamic, s, 0.0));
  return v;
}
float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p) {
  vec2 i = floor(p); vec2 f = p - i; f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y);
}
void main() {
  float d = textureLod(uDepth, vUv, 0.0).r;
  if (d >= 1.0) { o = vec4(1.0, 1.0, 0.0, 1.0); return; }
  vec3 P = worldAt(vUv, d);
  float jit = ign(gl_FragCoord.xy);
  float ao = 1.0;
  if (uAtmos.y > 0.5) {
    vec3 px = worldAt(vUv + vec2(uTexel.x, 0.0), textureLod(uDepth, vUv + vec2(uTexel.x, 0.0), 0.0).r) - P;
    vec3 py = worldAt(vUv + vec2(0.0, uTexel.y), textureLod(uDepth, vUv + vec2(0.0, uTexel.y), 0.0).r) - P;
    vec3 N = normalize(cross(px, py));
    if (dot(N, uEye - P) < 0.0) N = -N;
    vec3 T = normalize(abs(N.z) < 0.9 ? cross(N, vec3(0.0, 0.0, 1.0)) : cross(N, vec3(1.0, 0.0, 0.0)));
    vec3 B = cross(N, T);
    float R = uAtmos.x;
    float occ = 0.0;
    const int K = 10;
    for (int i = 0; i < K; i++) {
      float fi = (float(i) + jit) / float(K);
      float a = fi * 6.2831853 * 2.618 + jit * 6.2831853;
      float r = sqrt(fi);
      vec3 dir = T * (cos(a) * r) + B * (sin(a) * r) + N * sqrt(max(0.0, 1.0 - r * r));
      vec3 S = P + dir * R * (0.35 + 0.65 * fi);
      vec4 c = uM * vec4(S, 1.0);
      vec2 suv = c.xy / c.w * 0.5 + 0.5;
      if (any(lessThan(suv, vec2(0.0))) || any(greaterThan(suv, vec2(1.0)))) continue;
      float sd = textureLod(uDepth, suv, 0.0).r;
      float sz = c.z / c.w * 0.5 + 0.5;
      if (sd < sz - 1e-5) {
        vec3 Q = worldAt(suv, sd);
        occ += smoothstep(R * 2.5, R * 0.8, distance(Q, P));
      }
    }
    ao = 1.0 - occ / float(K);
  }
  float lit = 1.0;
  float beam = 0.0;
  if (uAtmos.w > 0.5 && uShadowOn > 0.5) {
    // how much of the air in front of the surface the sun reaches: dark in a tree's or a wall's shadow
    vec3 V = normalize(uEye - P);
    float L = uAtmos.z;
    float acc = 0.0;
    for (int i = 0; i < 32; i++) {
      if (i >= uRaySteps) break;
      acc += sunAt(P + V * ((float(i) + jit) / float(uRaySteps) * L));
    }
    lit = acc / float(max(uRaySteps, 1));
    // the beams themselves: long bands lying along the sun's direction on the ground (diagonal on
    // screen), narrow across it, drifting slowly; most of the ground lies between them
    vec2 along = normalize(uSunDir.xy);
    vec2 across = vec2(-along.y, along.x);
    float n = vnoise(vec2(dot(P.xy, across) / 46.0 + uTime * 0.04, dot(P.xy, along) / 520.0));
    float n2 = vnoise(vec2(dot(P.xy, across) / 17.0 - uTime * 0.07, dot(P.xy, along) / 300.0 + 9.0));
    beam = smoothstep(0.55, 0.85, n) * (0.6 + 0.4 * n2);
  }
  o = vec4(ao, lit, beam, 1.0);
}
`,
  fo = `${B}
in vec2 vUv; out vec4 o;
uniform sampler2D uSrc; uniform sampler2D uAtm;
uniform vec2 uAtmTexel;
uniform vec4 uK;          // AO strength, rays strength (0 by night), haze, -
uniform vec3 uSunCol;
void main() {
  vec3 c = texture(uSrc, vUv).rgb;
  vec3 a = vec3(0.0);
  float w = 0.0;
  for (int j = -1; j <= 1; j++)
    for (int i = -1; i <= 1; i++) {
      float k = (i == 0 && j == 0) ? 4.0 : (i == 0 || j == 0) ? 2.0 : 1.0;
      a += texture(uAtm, vUv + vec2(float(i), float(j)) * uAtmTexel * 1.5).rgb * k;
      w += k;
    }
  a /= w;
  c *= mix(1.0, a.r, uK.x);
  // the beams where the sun reaches the air (warm light added), and the air in shadow a little deeper
  c = c * (1.0 - uK.y * 0.35 * (1.0 - a.g)) + uSunCol * (uK.y * a.b * a.g * uK.z);
  o = vec4(c, 1.0);
}
`,
  po = `${B}
in vec2 vUv; out vec4 o;
uniform sampler2D uSrc; uniform sampler2D uBloom; uniform sampler2D uFx;
uniform float uBloomK; uniform float uCA; uniform float uExpo; uniform float uFxOn;
uniform vec3 uTint; uniform float uTintA; uniform float uNightK;
#ifdef HD_GRADE
uniform vec3 uGrade;
#endif
vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
// the world's uv, sharp-bilinear: scaled up (a tier's budget under the display), each render px a
// crisp square with a one-display-px blend at its seams, so texels stay square, not blurred; 1:1, the
// render px themselves
vec2 sharpUv(vec2 uv) {
  vec2 res = vec2(textureSize(uSrc, 0));
  vec2 p = uv * res - 0.5;
  vec2 i = floor(p);
  vec2 f = clamp((p - i - 0.5) / max(fwidth(p), vec2(1e-4)) + 0.5, 0.0, 1.0);
  return (i + f + 0.5) / res;
}
// canvas 'soft-light' (W3C compositing), cs over cb
vec3 softLight(vec3 cb, vec3 cs) {
  vec3 d = mix(sqrt(cb), ((16.0 * cb - 12.0) * cb + 4.0) * cb, step(cb, vec3(0.25)));
  return mix(cb + (2.0 * cs - 1.0) * (d - cb), cb - (1.0 - 2.0 * cs) * cb * (1.0 - cb), step(cs, vec3(0.5)));
}
void main() {
  vec2 su = sharpUv(vUv);
  vec3 c = texture(uSrc, su).rgb;
  vec3 bl = uBloomK > 0.0 ? texture(uBloom, vUv).rgb : vec3(0.0);
  vec4 fg = uFxOn > 0.5 ? texture(uFx, vUv) : vec4(0.0);
  vec3 fx = fg.rgb;
  if (uCA > 0.0) {
    vec2 ca = (vUv - 0.5) * uCA;
    c = vec3(texture(uSrc, su + ca).r, c.g, texture(uSrc, su - ca).b);
    if (uBloomK > 0.0) bl = vec3(texture(uBloom, vUv + ca * 1.6).r, bl.g, texture(uBloom, vUv - ca * 1.6).b);
    if (uFxOn > 0.5) fx = vec3(texture(uFx, vUv + ca).r, fg.g, texture(uFx, vUv - ca).b);
  }
  c = max(c * uExpo, vec3(0.0));
  // palette-preserving: up to 1.0 untouched; above, the hue held and eased into white
  float m = max(c.r, max(c.g, c.b));
  if (m > 1.0) c = mix(c / m, vec3(1.0), 1.0 - inversesqrt(m));
  // night: the unlit shadows lose some colour, what the lights touch keeps it
  float lum = dot(c, vec3(0.299, 0.587, 0.114));
  c = mix(c, vec3(lum), uNightK * (1.0 - smoothstep(0.15, 0.6, lum)));
  c = mix(c, softLight(c, uTint), uTintA);
  // the 3D FX and the glow, as fx3d composites them
  c = c * (1.0 - clamp(fg.a, 0.0, 1.0)) + aces(fx + bl * uBloomK);
#ifdef HD_GRADE
  // a dungeon's grade: Classic's multiply at its alpha, mix(1, tint, alpha), over the whole frame (a
  // variant of its own: even a multiply by 1 lets the shader compiler round the sum before it anew)
  c *= uGrade;
#endif
  o = vec4(c, 1.0);
}
`,
  Y = class {
    scene = new qe();
    mat;
    constructor(e, t) {
      this.mat = new H({
        glslVersion: W,
        vertexShader: We,
        fragmentShader: e,
        uniforms: t,
        depthTest: !1,
        depthWrite: !1,
        blending: 0,
      });
      let n = new L();
      n.setAttribute(
        `position`,
        new U(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3),
      );
      let r = new I(n, this.mat);
      ((r.frustumCulled = !1), this.scene.add(r));
    }
    get u() {
      return this.mat.uniforms;
    }
    dispose() {
      (this.mat.dispose(), this.scene.children[0].geometry.dispose());
    }
  },
  mo = {
    aoR: 16,
    ao: 0.7,
    rayL: 160,
    rays: 1,
    haze: 0.42,
    sun: [1, 0.86, 0.6],
  },
  ho = class e {
    hdr;
    fxaa;
    apply;
    field = null;
    time = { value: 0 };
    fieldRT = null;
    dofPrep;
    dofGather;
    dofUp;
    down;
    up;
    final;
    atmos;
    atmosApply;
    atmosRT = null;
    finalGrade = null;
    hazePass = null;
    finalU;
    blitCam = new Ae(-1, 1, 1, -1, 0, 1);
    ping = [];
    dofA = null;
    dofB = null;
    bloomD = [];
    bloomU = [];
    sized = ``;
    res = new P();
    constructor(e) {
      ((this.hdr = e),
        (this.fxaa = new Y(io, {
          uSrc: { value: null },
          uTexel: { value: new P() },
        })),
        (this.apply = new Y(to, {
          uSrc: { value: null },
          uField: { value: null },
          uArt: { value: new P(1, 1) },
          uRes: { value: new P(1, 1) },
          uEnc: { value: 1 },
        })));
      let t = {
        uDepth: { value: null },
        uDof: { value: new j() },
        uDofN: { value: new V() },
        uClip: { value: new V() },
        uGlow: { value: null },
        uGlowOn: { value: 0 },
        uGlowFlip: { value: 0 },
        uFp: { value: new j() },
        uFpInv: { value: new P(1, 1) },
        uInv: { value: new N() },
      };
      ((this.dofPrep = new Y(ao, {
        ...t,
        uSrc: { value: null },
        uSrcTexel: { value: new P() },
      })),
        (this.dofGather = new Y(oo, {
          uSrc: { value: null },
          uPxUv: { value: new P() },
        })),
        (this.dofUp = new Y(so, {
          ...t,
          uSrc: { value: null },
          uBlur: { value: null },
          uBlurSize: { value: new P(1, 1) },
        })),
        (this.down = new Y(co, {
          uSrc: { value: null },
          uSrc2: { value: null },
          uTwo: { value: 0 },
          uTexel: { value: new P() },
          uThresh: { value: -1 },
        })),
        (this.up = new Y(lo, {
          uSrc: { value: null },
          uBase: { value: null },
          uTexel: { value: new P() },
        })),
        (this.atmos = new Y(uo, {
          uDepth: { value: null },
          uInv: { value: new N() },
          uM: { value: new N() },
          uTexel: { value: new P() },
          uEye: { value: new V() },
          uSunDir: { value: new V(0, 0, 1) },
          uSunMat: { value: new N() },
          uSunStatic: { value: null },
          uSunDynamic: { value: null },
          uShadowOn: { value: 0 },
          uAtmos: { value: new j() },
          uTime: { value: 0 },
          uRaySteps: { value: 16 },
        })),
        (this.atmosApply = new Y(fo, {
          uSrc: { value: null },
          uAtm: { value: null },
          uAtmTexel: { value: new P() },
          uK: { value: new j() },
          uSunCol: { value: new V(...mo.sun) },
        })));
      let n = {
        uSrc: { value: null },
        uBloom: { value: null },
        uFx: { value: null },
        uFxOn: { value: 0 },
        uBloomK: { value: 0 },
        uCA: { value: 0 },
        uExpo: { value: 1 },
        uTint: { value: new z() },
        uTintA: { value: 0 },
        uNightK: { value: 0 },
        uGrade: { value: new z(1, 1, 1) },
      };
      ((this.final = new Y(po, n)), (this.finalU = n));
    }
    gradeVariant() {
      return (
        this.finalGrade ||
          ((this.finalGrade = new Y(po, this.finalU)),
          (this.finalGrade.mat.defines = { HD_GRADE: 1 })),
        this.finalGrade.scene
      );
    }
    hazeVariant() {
      return (
        (this.hazePass ??= new Y(no, {
          uSrc: { value: null },
          uDepth: { value: null },
          uMask: { value: null },
          uInv: { value: new N() },
          uRect: { value: new j(0, 0, 1, 1) },
          uRes: { value: new P(1, 1) },
          uK: { value: 1 },
          uT: { value: 0 },
        })),
        this.hazePass.scene
      );
    }
    scenes() {
      return [
        this.fxaa,
        this.apply,
        this.atmos,
        this.atmosApply,
        this.dofPrep,
        this.dofGather,
        this.dofUp,
        this.down,
        this.up,
        this.final,
        this.finalGrade,
        this.hazePass,
      ].flatMap((e) => (e ? [e.scene] : []));
    }
    get camera() {
      return this.blitCam;
    }
    rt(e, t) {
      let n = new Ce(Math.max(1, e), Math.max(1, t), {
        format: Ue,
        type: this.hdr ? xe : Se,
        magFilter: M,
        minFilter: M,
        depthBuffer: !1,
        stencilBuffer: !1,
        generateMipmaps: !1,
      });
      return ((n.texture.colorSpace = ``), n);
    }
    resize(e, t, n, r) {
      let i = `${e}x${t}x${n}x${r}`;
      if (i === this.sized) return;
      ((this.sized = i),
        this.disposeTargets(),
        (this.ping = [this.rt(e, t), this.rt(e, t)]),
        (this.atmosRT = this.rt(Math.ceil(e / 2), Math.ceil(t / 2))),
        (this.dofA = this.rt(Math.ceil(e / n), Math.ceil(t / n))),
        (this.dofB = this.rt(Math.ceil(e / n), Math.ceil(t / n))));
      let a = e,
        o = t;
      for (let e = 0; e < r; e++)
        ((a = Math.max(1, Math.ceil(a / 2))),
          (o = Math.max(1, Math.ceil(o / 2))),
          this.bloomD.push(this.rt(a, o)),
          this.bloomU.push(this.rt(a, o)));
    }
    bytes() {
      let e = this.hdr ? 8 : 4,
        t = 0;
      for (let n of [
        ...this.ping,
        this.dofA,
        this.dofB,
        this.fieldRT,
        this.atmosRT,
        ...this.bloomD,
        ...this.bloomU,
      ])
        n && (t += n.width * n.height * e);
      return t;
    }
    render(t, n, r, i, a, o) {
      let s = this.res.set(a.rw, a.rh),
        c = a.mips > 0 ? Math.max(0, Math.round(Math.log2(a.k / 2))) : 0;
      this.resize(s.x, s.y, e.dofDiv(a.tier, a.k), c + a.mips);
      let l = a.dof.max > 0.25,
        u = n,
        d = 0,
        f = () => this.ping[d++ & 1];
      if (a.fxaa) {
        (o?.begin(`fxaa`),
          (this.fxaa.u.uSrc.value = u),
          this.fxaa.u.uTexel.value.set(1 / s.x, 1 / s.y));
        let e = f();
        (t.setRenderTarget(e),
          t.render(this.fxaa.scene, this.blitCam),
          (u = e.texture),
          o?.end());
      }
      let p = a.dist;
      if (p && p.n > 0) {
        o?.begin(`distort`);
        let e = this.distField(p),
          n = Math.max(1, Math.ceil(a.W)),
          r = Math.max(1, Math.ceil(a.H));
        (!this.fieldRT ||
          this.fieldRT.width !== n ||
          this.fieldRT.height !== r) &&
          (this.fieldRT?.dispose(), (this.fieldRT = this.rt(n, r)));
        let i = this.hdr ? 1 : 1 / 16,
          c = e.mat.uniforms;
        (c.uCam.value.set(0, 0, a.W, a.H),
          (c.uEnc.value = i),
          (c.uVtxSq.value = a.squash),
          (this.time.value = a.now),
          t.setRenderTarget(this.fieldRT),
          t.render(e.scene, this.blitCam));
        let l = this.apply.u;
        ((l.uSrc.value = u),
          (l.uField.value = this.fieldRT.texture),
          l.uArt.value.set(a.W, a.H),
          l.uRes.value.copy(s),
          (l.uEnc.value = i));
        let d = f();
        (t.setRenderTarget(d),
          t.render(this.apply.scene, this.blitCam),
          (u = d.texture),
          o?.end());
      }
      let m = a.atmos;
      if (m && this.atmosRT && (m.ao > 0 || m.rays > 0)) {
        o?.begin(`atmos`);
        let e = this.atmos.u;
        ((e.uDepth.value = r),
          e.uInv.value.copy(a.inv),
          e.uM.value.copy(m.M),
          e.uTexel.value.set(1 / s.x, 1 / s.y),
          e.uEye.value.copy(m.eye),
          e.uSunDir.value.copy(m.lit.uSunDir.value),
          e.uSunMat.value.copy(m.lit.uSunMat.value),
          (e.uSunStatic.value = m.lit.uSunStatic.value),
          (e.uSunDynamic.value = m.lit.uSunDynamic.value),
          (e.uShadowOn.value = m.lit.uShadowOn.value),
          e.uAtmos.value.set(mo.aoR, +(m.ao > 0), mo.rayL, +(m.rays > 0)),
          (e.uTime.value = m.time),
          (e.uRaySteps.value = m.steps),
          t.setRenderTarget(this.atmosRT),
          t.render(this.atmos.scene, this.blitCam));
        let n = this.atmosApply.u;
        ((n.uSrc.value = u),
          (n.uAtm.value = this.atmosRT.texture),
          n.uAtmTexel.value.set(
            1 / this.atmosRT.width,
            1 / this.atmosRT.height,
          ),
          n.uK.value.set(m.ao, m.rays, mo.haze, 0));
        let i = f();
        (t.setRenderTarget(i),
          t.render(this.atmosApply.scene, this.blitCam),
          (u = i.texture),
          o?.end());
      }
      if (a.haze) {
        (o?.begin(`haze`), this.hazeVariant());
        let e = this.hazePass.u;
        ((e.uSrc.value = u),
          (e.uDepth.value = r),
          (e.uMask.value = a.haze.mask),
          e.uInv.value.copy(a.inv),
          e.uRect.value.copy(a.haze.rect),
          e.uRes.value.copy(s),
          (e.uK.value = a.k),
          (e.uT.value = a.now * eo));
        let n = f();
        (t.setRenderTarget(n),
          t.render(this.hazePass.scene, this.blitCam),
          (u = n.texture),
          o?.end());
      }
      if (l && this.dofA && this.dofB) {
        o?.begin(`dof`);
        let e = this.dofPrep.u;
        ((e.uDepth.value = r),
          e.uDof.value.set(a.dof.band, a.dof.ramp, a.dof.max, a.dof.focusD),
          e.uDofN.value.set(
            a.dof.band * $a.band,
            a.dof.ramp * $a.ramp,
            a.dof.max * $a.max,
          ),
          e.uClip.value.set(a.dof.near, a.dof.far, +!!a.dof.ortho));
        let n = a.glow.on && !!a.glow.tex;
        ((e.uGlow.value = n ? a.glow.tex : null),
          (e.uGlowOn.value = +!!n),
          (e.uGlowFlip.value = n && a.glow.tex.flipY ? 1 : 0),
          e.uFp.value.copy(a.glow.fp),
          e.uFpInv.value.copy(a.glow.inv),
          e.uInv.value.copy(a.inv),
          (e.uSrc.value = u),
          e.uSrcTexel.value.set(1 / s.x, 1 / s.y),
          t.setRenderTarget(this.dofA),
          t.render(this.dofPrep.scene, this.blitCam));
        let i = this.dofGather.u;
        ((i.uSrc.value = this.dofA.texture),
          i.uPxUv.value.set(1 / a.W, 1 / a.H),
          t.setRenderTarget(this.dofB),
          t.render(this.dofGather.scene, this.blitCam));
        let c = this.dofUp.u;
        ((c.uSrc.value = u),
          (c.uBlur.value = this.dofB.texture),
          c.uBlurSize.value.set(this.dofB.width, this.dofB.height));
        let l = f();
        (t.setRenderTarget(l),
          t.render(this.dofUp.scene, this.blitCam),
          (u = l.texture),
          o?.end());
      }
      let h = Math.min(c + a.mips, this.bloomD.length),
        g = a.bloom > 0 && h > c;
      if (g) {
        o?.begin(`bloom`);
        let e = u,
          n = s.x,
          r = s.y;
        for (let a = 0; a < h; a++)
          ((this.down.u.uSrc.value = e),
            (this.down.u.uSrc2.value = a === 0 && i ? i : e),
            (this.down.u.uTwo.value = a === 0 && i ? 1 : 0),
            this.down.u.uTexel.value.set(1 / n, 1 / r),
            (this.down.u.uThresh.value = a === 0 ? (this.hdr ? 1 : 0.8) : -1),
            t.setRenderTarget(this.bloomD[a]),
            t.render(this.down.scene, this.blitCam),
            (e = this.bloomD[a].texture),
            (n = this.bloomD[a].width),
            (r = this.bloomD[a].height));
        let a = this.bloomD[h - 1];
        for (let e = h - 2; e >= c; e--)
          ((this.up.u.uSrc.value = a.texture),
            (this.up.u.uBase.value = this.bloomD[e].texture),
            this.up.u.uTexel.value.set(1 / a.width, 1 / a.height),
            t.setRenderTarget(this.bloomU[e]),
            t.render(this.up.scene, this.blitCam),
            (a = this.bloomU[e]));
        ((this.final.u.uBloom.value = a.texture), o?.end());
      }
      o?.begin(`composite`);
      let _ = this.final.u;
      ((_.uSrc.value = u),
        (_.uFx.value = i ?? u),
        (_.uFxOn.value = +!!i),
        (_.uBloomK.value = g ? a.bloom : 0),
        g || (_.uBloom.value = u),
        (_.uCA.value = a.ca),
        (_.uExpo.value = a.exposure),
        _.uTint.value.copy(a.tint),
        (_.uTintA.value = a.tintA),
        (_.uNightK.value = 0.3 * a.night),
        _.uGrade.value.copy(a.grade));
      let v = a.grade.r !== 1 || a.grade.g !== 1 || a.grade.b !== 1;
      (t.setRenderTarget(null),
        t.render(v ? this.gradeVariant() : this.final.scene, this.blitCam),
        o?.end());
    }
    distField(e) {
      if (this.field?.set === e) return this.field;
      this.field &&
        (this.field.mat.dispose(),
        this.field.scene.children[0].geometry.dispose());
      let t = Ge(e, this.time),
        n = new L();
      n.setAttribute(
        `position`,
        new U(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3),
      );
      let r = new I(n, t);
      r.frustumCulled = !1;
      let i = new qe();
      return (
        i.add(r),
        (this.field = { set: e, scene: i, mat: t }),
        this.field
      );
    }
    static dofDiv(e, t = 2) {
      let n = Math.min(4, Math.max(2, Math.round(t)));
      return e === `low` ? n * 2 : n;
    }
    rebuild() {
      (this.disposeTargets(), (this.sized = ``));
    }
    disposeTargets() {
      for (let e of [
        ...this.ping,
        this.dofA,
        this.dofB,
        this.fieldRT,
        this.atmosRT,
        ...this.bloomD,
        ...this.bloomU,
      ])
        e?.dispose();
      ((this.fieldRT = null),
        (this.atmosRT = null),
        (this.ping = []),
        (this.dofA = this.dofB = null),
        (this.bloomD = []),
        (this.bloomU = []));
    }
    dispose() {
      this.disposeTargets();
      for (let e of [
        this.fxaa,
        this.apply,
        this.atmos,
        this.atmosApply,
        this.dofPrep,
        this.dofGather,
        this.dofUp,
        this.down,
        this.up,
        this.final,
        this.finalGrade,
        this.hazePass,
      ])
        e?.dispose();
      this.field &&
        (this.field.mat.dispose(),
        this.field.scene.children[0].geometry.dispose());
    }
  },
  go = [`high`, `medium`, `low`, `minimal`],
  _o = {
    high: {
      budget: 84e5,
      msaa: 4,
      samplePx: 17e6,
      chunks: 16,
      points: 32,
      lines: 16,
      sunStatic: 2048,
      sunDynamic: 1024,
      hero: 512,
      softShadows: !0,
      bloomMips: 5,
      dof: `full`,
      fx: `high`,
    },
    medium: {
      budget: 37e5,
      msaa: 2,
      samplePx: 8e6,
      chunks: 12,
      points: 24,
      lines: 8,
      sunStatic: 1024,
      sunDynamic: 512,
      hero: 0,
      softShadows: !0,
      bloomMips: 5,
      dof: `full`,
      fx: `medium`,
    },
    low: {
      budget: 1e6,
      msaa: 0,
      samplePx: 21e5,
      chunks: 9,
      points: 12,
      lines: 4,
      sunStatic: 512,
      sunDynamic: 0,
      hero: 0,
      softShadows: !1,
      bloomMips: 3,
      dof: `quarter`,
      fx: `low`,
    },
    minimal: {
      budget: 5e5,
      msaa: 0,
      samplePx: 0,
      chunks: 9,
      points: 8,
      lines: 2,
      sunStatic: 0,
      sunDynamic: 0,
      hero: 0,
      softShadows: !1,
      bloomMips: 0,
      dof: `off`,
      fx: `minimal`,
    },
  };
function vo(e, t, n, r, i = 1) {
  let a = Math.sqrt(r / Math.max(1, e * t));
  return a >= n * yo ? n : Math.max(Math.min(i, n), a);
}
var yo = 0.97;
function bo(e, t, n, r) {
  let i = Math.min(t ?? e.msaa, r);
  for (; i >= 2 && n * i > e.samplePx;) i /= 2;
  let a = i >= 2 ? Math.floor(i) : 0;
  return { samples: a, fxaa: a === 0 && t !== 0 };
}
function xo(e) {
  return e.forced
    ? e.forced
    : e.software
      ? `minimal`
      : e.coarse || (e.memGB !== void 0 && e.memGB <= 4)
        ? `low`
        : `high`;
}
function So() {
  try {
    return {
      coarse:
        typeof matchMedia == `function` &&
        matchMedia(`(pointer: coarse)`).matches,
      memGB: navigator.deviceMemory,
    };
  } catch {
    return { coarse: !1, memGB: void 0 };
  }
}
var Co = 48,
  wo = 1 / 45,
  To = 1 / 26,
  Eo = 1.3,
  Do = 1 / 8,
  Oo = 2,
  ko = 1.5,
  Ao = class {
    tier;
    forced;
    times = new Float32Array(Co);
    sorted = new Float32Array(Co);
    n = 0;
    i = 0;
    slowFor = 0;
    grace = ko;
    floor = 1 / 0;
    constructor(e, t) {
      ((this.tier = e), (this.forced = t));
    }
    get spec() {
      return _o[this.tier];
    }
    push(e) {
      if (!(e > 0) || e > 0.25) return `same`;
      if (((this.floor = Math.min(this.floor, e)), this.grace > 0))
        return ((this.grace -= e), `same`);
      if (
        ((this.times[this.i] = e),
        (this.i = (this.i + 1) % Co),
        this.n < Co && this.n++,
        this.forced || this.n < Co / 2)
      )
        return `same`;
      let t = this.sorted.subarray(0, this.n);
      (t.set(this.times.subarray(0, this.n)), t.sort());
      let n = t[Math.floor(this.n * 0.1)],
        r = t[Math.floor(this.n * 0.75)];
      n > this.floor && (this.floor += (n - this.floor) * Math.min(1, e * Do));
      let i = r > To || (r > wo && r > this.floor * Eo);
      return (
        (this.slowFor = i ? this.slowFor + e : 0),
        this.slowFor < Oo ? `same` : this.stepDown()
      );
    }
    stepDown() {
      this.reset();
      let e = go.indexOf(this.tier);
      return e >= go.length - 1 ? `give-up` : ((this.tier = go[e + 1]), `down`);
    }
    reset() {
      ((this.n = 0), (this.i = 0), (this.slowFor = 0), (this.grace = ko));
    }
  },
  jo = /swiftshader|basic render|llvmpipe|softpipe|software/i,
  Mo = class extends Pe {
    math = new Zi();
    theta = Wi;
    fov = Gi;
    cal = !1;
    W = 1;
    H = 1;
    D = 1;
    near = 1;
    far = 2;
    focus = new V();
    eye = new V();
    back = new V(0, Math.cos(Wi), Math.sin(Wi));
    M = new N();
    Minv = new N();
    M0inv = new N();
    sv = [new V(1, 0, 0), new V(0, 1, -1)];
    constructor() {
      (super(),
        (this.matrixAutoUpdate = !1),
        (this.matrixWorldAutoUpdate = !1));
    }
    set(e, t, n, r, i, a) {
      (this.place(e, t, i, a),
        this.math.aim(n, r),
        this.M0inv.fromArray(this.math.M0inv));
    }
    place(e, t, n, r) {
      let i = this.math;
      (i.set(e, t, n, r, this.theta, this.fov, this.cal),
        (this.theta = i.theta),
        (this.fov = i.fov),
        (this.W = i.W),
        (this.H = i.H),
        (this.D = i.D),
        (this.near = i.near),
        (this.far = i.far),
        this.focus.fromArray(i.focus),
        this.eye.fromArray(i.eye),
        this.back.fromArray(i.back),
        this.sv[1].set(0, i.cal ? 1 : i.s / i.c, -1),
        this.M.fromArray(i.M),
        this.Minv.fromArray(i.Minv),
        this.M0inv.fromArray(i.M0inv),
        this.projectionMatrix.copy(this.M),
        this.projectionMatrixInverse.copy(this.Minv));
    }
    toScreen(e, t, n = 0) {
      return this.math.toScreen(e, t, n);
    }
    toGround(e, t) {
      return this.math.toGround(e, t);
    }
    footprint() {
      return this.math.footprint();
    }
    depthOf(e, t, n) {
      return this.math.depthOf(e, t, n);
    }
  },
  No = class {
    gl;
    ms = {};
    until = 0;
    ext;
    pending = [];
    cur = null;
    on = !1;
    constructor(e) {
      ((this.gl = e),
        (this.ext = e.getExtension(`EXT_disjoint_timer_query_webgl2`)));
    }
    get available() {
      return !!this.ext;
    }
    frame() {
      let e = this.gl;
      if (
        ((this.on =
          !!this.ext && performance.now() < this.until && !e.isContextLost()),
        !this.ext || this.pending.length === 0)
      )
        return;
      let t = e.getParameter(this.ext.GPU_DISJOINT_EXT);
      for (; this.pending.length > 0;) {
        let n = this.pending[0];
        if (!e.getQueryParameter(n.q, e.QUERY_RESULT_AVAILABLE)) break;
        if (!t) {
          let t = e.getQueryParameter(n.q, e.QUERY_RESULT) / 1e6,
            r = this.ms[n.name];
          this.ms[n.name] = r === void 0 ? t : r + (t - r) * 0.1;
        }
        (e.deleteQuery(n.q), this.pending.shift());
      }
      this.pending.length > 64 && this.reset();
    }
    begin(e) {
      if (!this.on || !this.ext) return;
      this.cur && this.end();
      let t = this.gl.createQuery();
      t &&
        (this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT, t),
        (this.cur = { name: e, q: t }));
    }
    end() {
      this.cur &&
        this.ext &&
        (this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),
        this.pending.push(this.cur),
        (this.cur = null));
    }
    reset() {
      if (!this.gl.isContextLost())
        for (let e of this.pending) this.gl.deleteQuery(e.q);
      ((this.pending = []), (this.cur = null));
    }
  },
  Po = class {
    events;
    canvas;
    gl;
    renderer;
    cam = new Mo();
    timer;
    hdr;
    gpu;
    software;
    target;
    fxTarget;
    w = 1;
    h = 1;
    samples = 0;
    maxSamples;
    get lost() {
      return this.lostSaid || this.gl.isContextLost();
    }
    lostSaid = !1;
    onLost = (e) => {
      (e.preventDefault(),
        (this.lostSaid = !0),
        this.timer.reset(),
        this.events.lost());
    };
    onRestored = () => {
      ((this.lostSaid = !1), this.events.restored());
    };
    constructor(e) {
      ((this.events = e), (this.canvas = document.createElement(`canvas`)));
      let t = this.canvas.getContext(`webgl2`, {
        alpha: !1,
        antialias: !1,
        depth: !0,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1,
        powerPreference: `high-performance`,
      });
      if (!t) throw Error(`HD-2D needs WebGL2`);
      ((this.gl = t),
        (this.renderer = new ke({
          canvas: this.canvas,
          context: t,
          antialias: !1,
          alpha: !1,
          depth: !0,
          stencil: !1,
        })));
      let n = this.renderer;
      (n.setPixelRatio(1),
        (n.outputColorSpace = Ee),
        (n.toneMapping = 0),
        (n.autoClear = !1),
        (n.info.autoReset = !1),
        (n.sortObjects = !0));
      let r = n.extensions;
      this.hdr =
        r.has(`EXT_color_buffer_float`) || r.has(`EXT_color_buffer_half_float`);
      let i = t.getExtension(`WEBGL_debug_renderer_info`);
      ((this.gpu = String(
        i
          ? t.getParameter(i.UNMASKED_RENDERER_WEBGL)
          : t.getParameter(t.RENDERER),
      )),
        (this.software = jo.test(this.gpu)),
        (this.timer = new No(t)),
        (this.maxSamples = this.sampleCap()),
        (this.target = this.makeTarget(1, 1)),
        (this.fxTarget = this.makeFxTarget(this.target)),
        this.canvas.addEventListener(`webglcontextlost`, this.onLost),
        this.canvas.addEventListener(`webglcontextrestored`, this.onRestored));
    }
    sampleCap() {
      let e = this.gl;
      try {
        let t = (t) => {
          let n = e.getInternalformatParameter(e.RENDERBUFFER, t, e.SAMPLES);
          return n && n.length ? Math.max(...n) : 0;
        };
        return Math.min(
          e.getParameter(e.MAX_SAMPLES),
          t(this.hdr ? e.RGBA16F : e.RGBA8),
          t(e.DEPTH_COMPONENT24),
        );
      } catch {
        return 0;
      }
    }
    makeTarget(e, t) {
      let n = new Ye(e, t, be);
      n.minFilter = n.magFilter = R;
      let r = new Ce(e, t, {
        format: Ue,
        type: this.hdr ? xe : Se,
        magFilter: M,
        minFilter: M,
        generateMipmaps: !1,
        depthBuffer: !0,
        stencilBuffer: !1,
        depthTexture: n,
        samples: this.samples,
      });
      return ((r.texture.colorSpace = ``), r);
    }
    makeFxTarget(e) {
      let t = new Ce(e.width, e.height, {
        format: Ue,
        type: this.hdr ? xe : Se,
        magFilter: M,
        minFilter: M,
        generateMipmaps: !1,
        depthBuffer: !0,
        stencilBuffer: !1,
        depthTexture: e.depthTexture,
        samples: 0,
      });
      return ((t.texture.colorSpace = ``), t);
    }
    remake(e, t) {
      (this.fxTarget.dispose(),
        this.target.dispose(),
        this.target.depthTexture?.dispose(),
        (this.target = this.makeTarget(e, t)),
        (this.fxTarget = this.makeFxTarget(this.target)));
    }
    size(e, t, n, r, i) {
      ((e = Math.max(1, Math.round(e))),
        (t = Math.max(1, Math.round(t))),
        (n = Math.max(1, Math.round(n))),
        (r = Math.max(1, Math.round(r))),
        (i = Math.min(i, this.maxSamples)));
      let a = !1;
      return (
        (this.canvas.width !== e || this.canvas.height !== t) &&
          (this.renderer.setSize(e, t, !1), (a = !0)),
        (this.target.width !== n ||
          this.target.height !== r ||
          this.samples !== i) &&
          ((this.samples = i), this.remake(n, r), (a = !0)),
        (this.w = n),
        (this.h = r),
        a
      );
    }
    bytes() {
      let e = this.hdr ? 8 : 4;
      return (
        this.w * this.h * (e * 2 + 4 + (e + 4) * this.samples) +
        this.canvas.width * this.canvas.height * 12
      );
    }
    rebuild() {
      this.remake(this.w, this.h);
    }
    release() {
      (this.fxTarget.dispose(),
        this.target.dispose(),
        this.target.depthTexture?.dispose(),
        (this.w = this.h = 0));
    }
    dispose() {
      (this.canvas.removeEventListener(`webglcontextlost`, this.onLost),
        this.canvas.removeEventListener(
          `webglcontextrestored`,
          this.onRestored,
        ),
        this.timer.reset(),
        this.fxTarget.dispose(),
        this.target.dispose(),
        this.target.depthTexture?.dispose(),
        this.renderer.dispose());
    }
  },
  Fo = 64,
  Io = 0.6,
  Lo = 1.6,
  Ro = 6,
  zo = 32,
  Bo = 400,
  Vo = 29;
function Ho(e = { x: nt[0], y: nt[1], z: nt[2] }) {
  let t = new V(e.x, e.y, e.z).normalize(),
    n = new V(t.y, -t.x, 0);
  return (
    n.lengthSq() < 1e-8 && n.set(1, 0, 0),
    n.normalize(),
    { right: n, up: new V().crossVectors(t, n).normalize(), back: t }
  );
}
function Uo(e, t, n, r, i = 256, a = 288) {
  let o = e.gx0 - i,
    s = e.gy0 - i,
    c = e.gx0 + e.fw + i,
    l = e.gy0 + e.fh + i,
    u = 1 / 0,
    d = -1 / 0,
    f = 1 / 0,
    p = -1 / 0,
    m = 1 / 0,
    h = -1 / 0;
  for (let e = 0; e < 8; e++) {
    let t = e & 1 ? c : o,
      r = e & 2 ? l : s,
      i = e & 4 ? a : 0,
      g = t * n.right.x + r * n.right.y + i * n.right.z,
      _ = t * n.up.x + r * n.up.y + i * n.up.z,
      v = t * n.back.x + r * n.back.y + i * n.back.z;
    ((u = Math.min(u, g)),
      (d = Math.max(d, g)),
      (f = Math.min(f, _)),
      (p = Math.max(p, _)),
      (m = Math.min(m, v)),
      (h = Math.max(h, v)));
  }
  let g = Math.ceil(Math.max(d - u, p - f) / Fo + 0.05) * Fo,
    _ = g,
    v = g / r;
  return {
    cx: Math.round((u + d) / 2 / v) * v,
    cy: Math.round((f + p) / 2 / v) * v,
    w: g,
    h: _,
    top: h + 16,
    near: 8,
    far: h - m + 32,
    x0: o,
    y0: s,
    x1: c,
    y1: l,
    fx: t.x,
    fy: t.y,
    snap: v,
  };
}
function Wo(e, t, n, r = 256) {
  return (
    !e ||
    Math.abs(n.x - e.fx) > r / 2 ||
    Math.abs(n.y - e.fy) > r / 2 ||
    t.gx0 < e.x0 ||
    t.gy0 < e.y0 ||
    t.gx0 + t.fw > e.x1 ||
    t.gy0 + t.fh > e.y1
  );
}
function Go(e, t, n = new Ae()) {
  ((n.matrixAutoUpdate = !1), (n.matrixWorldAutoUpdate = !1));
  let r = new V()
    .addScaledVector(t.right, e.cx)
    .addScaledVector(t.up, e.cy)
    .addScaledVector(t.back, e.top);
  return (
    n.matrixWorld.makeBasis(t.right, t.up, t.back).setPosition(r),
    n.matrix.copy(n.matrixWorld),
    n.matrixWorldInverse.copy(n.matrixWorld).invert(),
    (n.left = -e.w / 2),
    (n.right = e.w / 2),
    (n.top = e.h / 2),
    (n.bottom = -e.h / 2),
    (n.near = e.near),
    (n.far = e.far),
    n.projectionMatrix.makeOrthographic(
      n.left,
      n.right,
      n.top,
      n.bottom,
      n.near,
      n.far,
    ),
    n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),
    n
  );
}
function Ko(e, t, n = new N()) {
  let r = t / (e.far - e.near);
  return (
    n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5 - r, 0, 0, 0, 1),
    n.multiply(e.projectionMatrix).multiply(e.matrixWorldInverse)
  );
}
function qo(e, t) {
  let n = new Ye(e, t, be);
  return (
    (n.format = Ke),
    (n.compareFunction = 515),
    (n.minFilter = M),
    (n.magFilter = M),
    new Ce(e, t, {
      format: Ie,
      type: Se,
      minFilter: R,
      magFilter: R,
      generateMipmaps: !1,
      depthBuffer: !0,
      depthTexture: n,
    })
  );
}
var Jo = `
void main() {
  vec4 p = vec4(position, 1.0);
#ifdef USE_INSTANCING
  p = instanceMatrix * p;
#endif
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * p;
}
`;
function Yo() {
  return new Xe({
    vertexShader: Jo,
    fragmentShader: `void main() {}`,
    side: 2,
    colorWrite: !1,
  });
}
var Xo = class {
  fallback;
  mats = [];
  shown = [];
  roots = new Set();
  seen = new Set();
  count = 0;
  constructor(e) {
    this.fallback = e;
  }
  run(e, t, n) {
    this.count = 0;
    try {
      for (let n of e) this.tag(n, t);
      this.count > 0 && n(this.roots);
    } finally {
      for (let [e, t] of this.mats) ((e.material = t), e.layers.disable(Vo));
      for (let e of this.shown) e.visible = !1;
      ((this.mats.length = 0),
        (this.shown.length = 0),
        this.roots.clear(),
        this.seen.clear());
    }
  }
  tag(e, t) {
    if (this.seen.has(e)) return;
    if ((this.seen.add(e), e.isScene)) {
      for (let n of e.children) n.visible && this.tag(n, t);
      return;
    }
    let n = this.count,
      r = (e) => {
        let n = e;
        n.isMesh &&
          !n.layers.isEnabled(Vo) &&
          (!t || t(n)) &&
          (this.mats.push([n, n.material]),
          (n.material = n.customDepthMaterial ?? this.fallback),
          n.layers.enable(Vo),
          this.count++);
        for (let t of e.children) t.visible && r(t);
      };
    if ((r(e), this.count === n)) return;
    let i = e,
      a = e;
    for (; i && !i.isScene;)
      (i.visible || this.show(i), (a = i), (i = i.parent));
    this.roots.add(a);
  }
  show(e) {
    ((e.visible = !0), this.shown.push(e));
  }
};
function Zo(e, t, n) {
  for (let r of t) e.render(r, n);
}
var Qo = class {
  pass;
  basis;
  cam = new Ae();
  box = null;
  stats = {
    staticRenders: 0,
    staticCasters: 0,
    dynamicCasters: 0,
    lastAt: { x: 0, y: 0 },
  };
  stat = null;
  dyn = null;
  art = -1;
  stale = !0;
  fixedKey = ``;
  mat = new N();
  constructor(e, t) {
    ((this.pass = e), this.cam.layers.set(Vo), (this.basis = Ho(t)));
  }
  invalidate() {
    this.stale = !0;
  }
  render(e, t, n, r, i, o, s, c, l = null) {
    if (
      ((this.stat = this.fit(this.stat, r)),
      (this.dyn = this.fit(this.dyn, i)),
      !this.stat && !this.dyn)
    ) {
      ((c.uShadowOn.value = 0),
        (c.uSunStatic.value = ft()),
        (c.uSunDynamic.value = ft()),
        (this.box = null));
      return;
    }
    let u = a();
    u !== this.art && ((this.art = u), (this.stale = !0));
    let d = Math.min(r || 1 / 0, i || 1 / 0),
      f = l ? `${l.x0},${l.y0},${l.x1},${l.y1}` : ``;
    (f !== this.fixedKey && ((this.fixedKey = f), (this.stale = !0)),
      (this.stale || (!l && Wo(this.box, t, n))) &&
        ((this.box = l
          ? Uo(
              { gx0: l.x0, gy0: l.y0, fw: l.x1 - l.x0, fh: l.y1 - l.y0 },
              { x: (l.x0 + l.x1) / 2, y: (l.y0 + l.y1) / 2 },
              this.basis,
              d,
              0,
            )
          : Uo(t, n, this.basis, d)),
        Go(this.box, this.basis, this.cam),
        Ko(this.cam, Io + Lo * this.box.snap, this.mat),
        this.stat &&
          (this.drawInto(e, this.stat, o()),
          (this.stats.staticCasters = this.pass.count),
          this.stats.staticRenders++,
          (this.stats.lastAt = { x: n.x, y: n.y })),
        (this.stale = !1)),
      this.dyn &&
        (this.drawInto(e, this.dyn, s),
        (this.stats.dynamicCasters = this.pass.count)),
      c.uSunMat.value.copy(this.mat),
      (c.uSunStatic.value = this.stat?.depthTexture ?? ft()),
      (c.uSunDynamic.value = this.dyn?.depthTexture ?? ft()),
      c.uSunTexel.value.set(this.stat ? 1 / r : 1, this.dyn ? 1 / i : 1),
      (c.uShadowOn.value = +!!this.stat + (this.dyn ? 2 : 0)));
  }
  drawInto(e, t, n) {
    (e.setRenderTarget(t),
      e.clear(!1, !0, !1),
      this.pass.run(n, null, (t) => Zo(e, t, this.cam)));
  }
  fit(e, t) {
    return (e ? e.width === t : t <= 0)
      ? e
      : (e?.dispose(), (this.stale = !0), t > 0 ? qo(t, t) : null);
  }
  dispose() {
    (this.stat?.dispose(),
      this.dyn?.dispose(),
      (this.stat = this.dyn = null),
      (this.box = null),
      (this.stale = !0));
  }
};
function $o(e) {
  let t = e;
  return t.isInstancedMesh
    ? (t.boundingSphere || t.computeBoundingSphere(), t.boundingSphere)
    : (e.geometry.boundingSphere || e.geometry.computeBoundingSphere(),
      e.geometry.boundingSphere);
}
var es = class {
    pass;
    rt = null;
    cams = at.map(() => {
      let e = new Ve(90, 1, 1, 100);
      return (
        (e.matrixAutoUpdate = !1),
        (e.matrixWorldAutoUpdate = !1),
        e.layers.set(Vo),
        e
      );
    });
    sphere = new Te();
    basis = at.map((e) => [
      new V(...e.right),
      new V(...e.up),
      new V(-e.fwd[0], -e.fwd[1], -e.fwd[2]),
    ]);
    pos = new V();
    list = [];
    far = 1;
    size = 1;
    r = null;
    stats = { casters: 0 };
    constructor(e) {
      this.pass = e;
    }
    keep = (e) => {
      let t = $o(e);
      return (
        !t ||
        (e.updateWorldMatrix(!0, !1),
        this.sphere.copy(t).applyMatrix4(e.matrixWorld),
        this.sphere.distanceToPoint(this.pos) < this.far)
      );
    };
    draw = (e) => {
      let t = this.rt,
        n = this.r,
        r = this.size,
        i = this.list;
      for (let t of e) i.push(t);
      for (let e = 0; e < 6; e++)
        (t.viewport.set((e % 3) * r, Math.floor(e / 3) * r, r, r),
          n.setRenderTarget(t),
          Zo(n, i, this.cams[e]));
      (t.viewport.set(0, 0, r * 3, r * 2), (i.length = 0));
    };
    render(e, t, n, r, i) {
      if (n <= 0) return (this.off(i), !1);
      (!this.rt || this.rt.height !== n * 2) &&
        (this.rt?.dispose(), (this.rt = qo(n * 3, n * 2)));
      let a = Math.min(Bo, Math.max(zo, t.rad * Ro)),
        o = this.pos.set(t.x, t.y, t.z);
      for (let e = 0; e < 6; e++) {
        let t = this.cams[e],
          n = this.basis[e];
        (t.matrixWorld.makeBasis(n[0], n[1], n[2]).setPosition(o),
          t.matrix.copy(t.matrixWorld),
          t.matrixWorldInverse.copy(t.matrixWorld).invert(),
          (t.near = 1),
          (t.far = a),
          t.projectionMatrix.makePerspective(-1, 1, 1, -1, 1, a),
          t.projectionMatrixInverse.copy(t.projectionMatrix).invert());
      }
      let s = this.rt;
      (e.setRenderTarget(s),
        e.clear(!1, !0, !1),
        (this.far = a),
        (this.size = n),
        (this.r = e));
      try {
        this.pass.run(r, this.keep, this.draw);
      } finally {
        this.r = null;
      }
      return (
        (this.stats.casters = this.pass.count),
        this.pass.count === 0
          ? (this.off(i), !1)
          : ((i.uHero.value = s.depthTexture),
            (i.uHeroFar.value = a),
            (i.uHeroOn.value = 1),
            !0)
      );
    }
    off(e) {
      ((e.uHeroOn.value = 0), (e.uHero.value = ft()));
    }
    dispose() {
      (this.rt?.dispose(), (this.rt = null));
    }
  },
  ts = class {
    fallback = Yo();
    pass = new Xo(this.fallback);
    sun;
    heroMap;
    warned = !1;
    parts = [];
    gathered = !1;
    statics = [];
    dynamics = [];
    all = [];
    gather = () => {
      if (!this.gathered) {
        this.gathered = !0;
        for (let e of this.parts)
          for (let t of e.casters(`static`)) this.statics.push(t);
      }
      return this.statics;
    };
    constructor(e) {
      ((this.sun = new Qo(this.pass, e)), (this.heroMap = new es(this.pass)));
    }
    render(e, t, n, r, i = [], a = {}) {
      let o = n.lit;
      if (e.capabilities.reversedDepthBuffer) {
        (this.warned ||
          console.warn(`HD-2D shadows off: reversed depth buffer`),
          (this.warned = !0),
          (o.uShadowOn.value = 0),
          this.heroMap.off(o));
        return;
      }
      let s = this.dynamics;
      ((this.parts = t), (this.gathered = !1));
      for (let e of t) for (let t of e.casters(`dynamic`)) s.push(t);
      for (let e of i) s.push(e);
      let c = e.getRenderTarget(),
        l = e.autoClear;
      e.autoClear = !1;
      try {
        let t = a.sun !== !1;
        if (
          (this.sun.render(
            e,
            n.f.fp,
            n.cam.focus,
            t ? n.spec.sunStatic : 0,
            t ? n.spec.sunDynamic : 0,
            this.gather,
            s,
            o,
            a.box ?? null,
          ),
          r && n.spec.hero > 0)
        ) {
          let t = this.all;
          for (let e of this.gather()) t.push(e);
          for (let e of s) t.push(e);
          this.heroMap.render(e, r, n.spec.hero, t, o);
        } else this.heroMap.off(o);
      } finally {
        ((this.parts = []),
          (this.statics.length = 0),
          (this.dynamics.length = 0),
          (this.all.length = 0),
          (e.autoClear = l),
          e.setRenderTarget(c));
      }
    }
    invalidate() {
      this.sun.invalidate();
    }
    rebuild() {
      (this.sun.dispose(), this.heroMap.dispose());
    }
    dispose() {
      (this.sun.dispose(), this.heroMap.dispose(), this.fallback.dispose());
    }
  },
  ns = `#2a2236`,
  rs = 16,
  is = 22,
  as = 0.54,
  os = 3,
  ss = 2,
  cs = new WeakMap();
function ls(e, t = `relief`) {
  let n = cs.get(e);
  n || cs.set(e, (n = {}));
  let r = n[t];
  if (r) return r;
  let i = e.w,
    a = e.h,
    s = (t, n) =>
      t < 0 || n < 0 || t >= i || n >= a ? o.VOID : e.tiles[n * i + t],
    c = (e, t) => {
      let n = s(e, t);
      return n === o.WALL || n === o.VOID;
    },
    l = new Uint8Array(i * a);
  for (let e = 0; e < a; e++)
    for (let t = 0; t < i; t++) {
      if (!c(t, e)) continue;
      let n = 0;
      for (; n < os && c(t, e - 1 - n);) n++;
      l[e * i + t] = n;
    }
  let u = (e, t) => (e < 0 || e >= i ? os : l[t * i + e]),
    d = fs(e, s),
    p = new Uint8Array(i * a);
  for (let e = 0; e < a; e++)
    for (let n = 0; n < i; n++) {
      let r = e * i + n;
      if (!c(n, e) || d[r] > ss) continue;
      if (t === `all22`) {
        p[r] = is;
        continue;
      }
      let a = l[r];
      (c(n - 1, e) && (a = Math.min(a, u(n - 1, e))),
        c(n + 1, e) && (a = Math.min(a, u(n + 1, e))),
        (p[r] = Math.min(is, Math.floor(a * rs * as))));
    }
  t === `relief` && us(i, a, p, c);
  let m = new Uint8Array(i * a);
  for (let e = 0; e < a; e++)
    for (let t = 0; t < i; t++) {
      let n = e * i + t,
        r = p[n];
      if (!r) continue;
      let l = e + 1 < a && c(t, e + 1) ? p[n + i] : 0,
        u = s(t, e) === o.WALL && f(s(t, e + 1), !0);
      l < r && !u && (m[n] = 1);
    }
  let h = { w: i, h: a, cut: t, hgt: p, section: m };
  return ((n[t] = h), h);
}
function us(e, t, n, r) {
  let i = n.slice(),
    a = (t, n) => (t < 0 || t >= e ? 0 : i[n * e + t]);
  for (let o = 0; o < t; o++)
    for (let t = 0; t < e; t++) {
      let s = i[o * e + t];
      if (!s || (t > 0 && r(t - 1, o) && a(t - 1, o) === s)) continue;
      let c = t;
      for (; c + 1 < e && c - t < 2 && a(c + 1, o) === s && r(c + 1, o);) c++;
      if (c - t >= 2 || !r(t - 1, o) || !r(c + 1, o)) continue;
      let l = Math.max(a(t - 1, o), a(c + 1, o));
      if (!(l >= s)) for (let r = t; r <= c; r++) n[o * e + r] = l;
    }
}
function ds(e, t, n, r = `relief`) {
  return t < 0 || n < 0 || t >= e.w || n >= e.h ? 0 : ls(e, r).hgt[n * e.w + t];
}
function fs(e, t) {
  let n = e.w,
    r = e.h,
    i = new Uint8Array(n * r).fill(3),
    a = [];
  for (let e = 0; e < r; e++)
    for (let r = 0; r < n; r++)
      f(t(r, e), !0) && ((i[e * n + r] = 0), a.push(e * n + r));
  for (let e = 0; e < a.length; e++) {
    let t = a[e],
      o = t % n,
      s = (t - o) / n;
    if (!(i[t] >= ss))
      for (let e = -1; e <= 1; e++)
        for (let c = -1; c <= 1; c++) {
          let l = o + c,
            u = s + e;
          if (l < 0 || u < 0 || l >= n || u >= r) continue;
          let d = u * n + l;
          i[d] > i[t] + 1 && ((i[d] = i[t] + 1), a.push(d));
        }
  }
  return i;
}
function ps(e) {
  let t = 2166136261;
  for (let n = 0; n < e.tiles.length; n++)
    t = Math.imul(t ^ e.tiles[n], 16777619);
  return (t >>> 0).toString(36);
}
function ms(e, t = `relief`) {
  return `dg:${e.dungeon}:${e.index}:${e.theme}:${e.seed}:${e.w}x${e.h}:${ps(e)}:${t}`;
}
function hs(e) {
  return e.ready ? e.ground : [e.ground[0], null, null, null];
}
function gs(e) {
  if (!v[e.theme].fog?.low) return null;
  let t = new Uint8Array(e.w * e.h);
  for (let n = 0; n < t.length; n++) f(e.tiles[n], !0) && (t[n] = 255);
  return t;
}
function _s(e) {
  let t = v[e.theme].fog;
  if (t)
    return {
      tex: r(t.color, t.scale),
      color: t.color,
      alpha: t.alpha,
      speed: t.speed,
      mask: gs(e),
      cols: e.w,
      rows: e.h,
    };
}
function vs(e) {
  if (!v[e.theme].haze) return null;
  let t = new Uint8Array(e.w * e.h),
    n = !1;
  for (let r = 0; r < t.length; r++)
    e.tiles[r] === o.DEEP && ((t[r] = 255), (n = !0));
  return n ? t : null;
}
function ys(e, t) {
  let n = new Uint8Array(e.w * e.h);
  for (let r = 0; r < n.length; r++) {
    let i = e.tiles[r];
    n[r] = i !== o.WALL && i !== o.VOID ? 0 : t.hgt[r] ? 1 : 3;
  }
  return {
    x0: 0,
    y0: 0,
    cols: e.w,
    rows: e.h,
    h: t.hgt,
    cap: n,
    section: t.section,
  };
}
function bs(e, t = `relief`) {
  let n = e.floor,
    r = ls(n, t),
    i = vs(n),
    [a, o] = h(n.w * rs, n.h * rs),
    s = [];
  for (let e = 0; e < n.h; e++)
    r.hgt.subarray(e * n.w, (e + 1) * n.w).some((e) => e > 0) && s.push(e);
  s.reverse();
  let c = 0;
  return {
    relief: r,
    bounds: { x0: 0, y0: 0, x1: n.w * rs, y1: n.h * rs },
    floor: { x: 0, y: 0, frames: hs(e) },
    caps: a,
    grid: ys(n, r),
    boxes: [],
    props: [],
    solids: [],
    fog: _s(n),
    haze: i ? { mask: i, cols: n.w, rows: n.h } : void 0,
    sun: !1,
    reliefAt: (e, r) => ds(n, e, r, t),
    prepare(e) {
      let t = performance.now();
      for (
        let r = 0;
        s.length && (r === 0 || performance.now() - t + c <= e);
        r++
      ) {
        let e = performance.now(),
          t = s.pop();
        (o.drawImage(me(n, t, 1), 0, t * rs), (c = performance.now() - e));
      }
      return s.length === 0;
    },
  };
}
function xs(e, t, n, r, i = 1) {
  let a = Math.min(Math.round(t.y1 - t.y0), Math.floor(n / i));
  for (let o = 0; o < a; o++) {
    let a = t.y0 + o,
      s = {
        x0: t.x - o - 0.5,
        y0: -32,
        ax: 0,
        ay: 0,
        aw: n,
        ah: r,
        g: 0,
        yc: 0,
        shade: vr,
        baseY: 0,
        height: 0,
        dens: i,
      };
    e.face(
      [
        [t.x, a, 0],
        [t.x, a + 1, 0],
        [t.x, a + 1, t.h],
        [t.x, a, t.h],
      ],
      [t.out, 0, 0],
      s,
    );
  }
}
var Ss = class {
    strip;
    o;
    root = new F();
    arrays = null;
    mesh = null;
    tex = null;
    mats = [];
    occl = yr();
    constructor(e, n, r) {
      ((this.strip = n),
        (this.o = r),
        (this.root.name = `hd2d-space-sides`),
        (this.root.matrixAutoUpdate = !1));
      let i = new Dr();
      for (let r of e) xs(i, r, n.width, n.height, t(n));
      (i.vertices && (this.arrays = i.arrays()), this.buildGpu());
    }
    buildGpu() {
      if (!this.arrays) return;
      let e = new He(this.strip);
      ((e.flipY = !1),
        (e.colorSpace = ``),
        (e.generateMipmaps = !1),
        (e.magFilter = e.minFilter = R),
        (e.needsUpdate = !0),
        (this.tex = e));
      let t = Tr({
        map: e,
        lit: this.o.lit,
        occl: this.occl,
        pass: `cut`,
        fog: this.o.fog,
      });
      _t(t, !0);
      let n = Tr({ map: e, lit: this.o.lit, occl: this.occl, pass: `shadow` });
      this.mats = [t, n];
      let r = new I(Or(this.arrays), t);
      ((r.customDepthMaterial = r.customDistanceMaterial = n),
        (r.frustumCulled = !1),
        (r.matrixAutoUpdate = !1),
        (this.mesh = r),
        this.root.add(r));
    }
    update(e) {}
    casters(e) {
      return e === `static` && this.mesh ? [this.mesh] : [];
    }
    get vertices() {
      return this.arrays ? this.arrays.position.length / 3 : 0;
    }
    disposeGpu() {
      this.mesh &&=
        (this.root.remove(this.mesh), this.mesh.geometry.dispose(), null);
      for (let e of this.mats) e.dispose();
      ((this.mats = []), this.tex?.dispose(), (this.tex = null));
    }
    rebuild() {
      (this.disposeGpu(), this.buildGpu());
    }
    dispose() {
      (this.disposeGpu(), (this.arrays = null));
    }
  },
  X = 16,
  Cs = 4,
  ws = 2,
  Ts = 3,
  Es = 1.5,
  Ds = 0.25,
  Os = 48;
function ks(e) {
  let t = (t, n) => S(e, t, n),
    n = (e, n) => !!g(t(e, n)),
    r = (e, n) => !!C(t(e, n)),
    i = (e, n) => w(t(e, n)),
    a = (e, t) => n(e - 1, t) || n(e + 1, t);
  return {
    code: t,
    wall: n,
    floor: r,
    walk: i,
    across: a,
    faceAbove: (e, n) => r(e, n) || (t(e, n) === `+` && a(e, n)),
    sideDoor: (e, n) => t(e, n) === `+` && !a(e, n),
  };
}
function As(e, t) {
  let n = u.w,
    r = u.h,
    i = (t) => (e.x0 + t) * X,
    a = (t) => (e.y0 + t) * X,
    o = (t) => Math.floor(t / X) - e.y0,
    {
      code: s,
      wall: c,
      floor: l,
      walk: d,
      across: f,
      faceAbove: p,
      sideDoor: m,
    } = ks(t),
    h = new Uint8Array(n * r);
  for (let e = 0; e < r; e++)
    for (let t = 0; t < n; t++)
      c(t, e) && p(t, e + 1) && (h[e * n + t] = c(t, e - 1) ? 28 : 12);
  let _ = new Uint8Array(n * r),
    v = new Uint8Array(n * r);
  for (let e = 0; e < n * r; e++) {
    if (v[e] || !c(e % n, Math.floor(e / n))) continue;
    let t = [],
      i = 0,
      a = [e];
    for (v[e] = 1; a.length;) {
      let e = a.pop();
      (t.push(e), (i = Math.max(i, h[e])));
      let o = e % n,
        s = Math.floor(e / n);
      for (let [e, t] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        let i = o + e,
          l = s + t,
          u = l * n + i;
        i < 0 ||
          l < 0 ||
          i >= n ||
          l >= r ||
          v[u] ||
          !c(i, l) ||
          ((v[u] = 1), a.push(u));
      }
    }
    for (let e of t) _[e] = i || 12;
  }
  let y = Array.from({ length: n }, () => []);
  for (let e = 0; e < n; e++) {
    let t = y[e];
    for (let o = 0; o < r;) {
      if (!c(e, o)) {
        o++;
        continue;
      }
      let r = o;
      for (; c(e, o);) o++;
      let s = o - 1,
        u = _[r * n + e],
        f = m(e, r - 1),
        g = f ? a(r) - Ts + Math.ceil(u * Es) : d(e, r - 1) ? a(r) : a(r) + u;
      if (f && u > 12) {
        let n = p(e, s + 1)
            ? a(s + 1) - Cs
            : m(e, s + 1)
              ? a(s + 1) + Ts
              : a(s + 1),
          o = a(r) - Ts + Math.ceil(12 * Es),
          c = Math.min(g, n);
        c > o &&
          t.push({
            x0: i(e),
            x1: i(e + 1),
            y0: o,
            y1: c,
            h: 12,
            kind: `top`,
            cut: c === n && !p(e, s + 1),
          });
      }
      if (p(e, s + 1)) {
        let o = h[s * n + e],
          c = a(s + 1);
        (t.push({
          x0: i(e),
          x1: i(e + 1),
          y0: c - Cs,
          y1: c,
          h: o,
          kind: `face`,
        }),
          s - (o === 28 ? 2 : 1) >= r &&
            g < c - Cs &&
            t.push({
              x0: i(e),
              x1: i(e + 1),
              y0: g,
              y1: c - Cs,
              h: u,
              kind: `top`,
            }));
        continue;
      }
      let v = d(e, r - 1) && !m(e, r - 1);
      for (let n = r; n <= s;) {
        let o = l(e - 1, n) || l(e + 1, n);
        if (v && !o) {
          n++;
          continue;
        }
        let c = n;
        for (; n <= s && (!v || l(e - 1, n) || l(e + 1, n));) n++;
        let d = n - 1,
          f = c === r ? g : a(c),
          p = d === s && m(e, s + 1) ? a(s + 1) + Ts : a(d + 1);
        p <= f ||
          t.push({
            x0: i(e),
            x1: i(e + 1),
            y0: f,
            y1: p,
            h: u,
            kind: `top`,
            cut: !0,
          });
      }
    }
  }
  let b = (e, t) => {
      if (e < 0 || e >= n) return 0;
      let r = 0;
      for (let n of y[e]) t >= n.y0 && t < n.y1 && (r = Math.max(r, n.h));
      return r;
    },
    x = [];
  for (let e = 0; e < n; e++)
    for (let t of y[e])
      for (let r of [-1, 1]) {
        let a = e + r,
          c = new Set([t.y0, t.y1]);
        for (let e = Math.ceil(t.y0 / X); e * X < t.y1; e++) c.add(e * X);
        if (a >= 0 && a < n)
          for (let e of y[a])
            for (let n of [e.y0, e.y1]) n > t.y0 && n < t.y1 && c.add(n);
        let l = [...c].sort((e, t) => e - t),
          u = null,
          d = null;
        for (let n = 0; n + 1 < l.length; n++) {
          let c = (l[n] + l[n + 1]) / 2,
            f = o(c),
            p = s(a, f) !== `.` && b(a, c) < t.h;
          ((d =
            g(s(e, f)) ??
            d ??
            g(s(e, o(t.y1 - 1))) ??
            g(s(e, o(t.y0))) ??
            `plaster`),
            p && u && u.wall === d && u.y1 === l[n]
              ? (u.y1 = l[n + 1])
              : p
                ? x.push(
                    (u = {
                      x: r < 0 ? i(e) - Ds : i(e + 1) + Ds,
                      y0: l[n],
                      y1: l[n + 1],
                      h: t.h,
                      out: r,
                      wall: d,
                    }),
                  )
                : (u = null));
        }
      }
  let S = [];
  for (let e = 0; e < r; e++)
    for (let t = 0; t < n; t++) {
      if (s(t, e) !== `+` || !f(t, e) || s(t, e + 1) === `+`) continue;
      let r = Math.max(
        t > 0 ? h[e * n + t - 1] : 0,
        t < n - 1 ? h[e * n + t + 1] : 0,
      );
      if (!r) continue;
      let o = a(e + 1);
      (S.push({
        x0: i(t),
        x1: i(t) + ws,
        y0: o - Cs,
        y1: o,
        h: r,
        kind: `post`,
      }),
        S.push({
          x0: i(t + 1) - ws,
          x1: i(t + 1),
          y0: o - Cs,
          y1: o,
          h: r,
          kind: `post`,
        }));
    }
  x.sort((e, t) => e.x - t.x || e.out - t.out || e.y0 - t.y0);
  let C = [];
  for (let e of x) {
    let t = C[C.length - 1];
    t &&
    t.x === e.x &&
    t.out === e.out &&
    t.wall === e.wall &&
    t.h === e.h &&
    t.y1 === e.y0
      ? (t.y1 = e.y1)
      : C.push({ ...e });
  }
  let w = js(y.flat());
  for (let t of w) {
    if (!t.cut) continue;
    let n = o(t.y1 - 1);
    ((t.litW = d(t.x0 / X - e.x0 - 1, n)), (t.litE = d(t.x1 / X - e.x0, n)));
  }
  return { boxes: [...w, ...S], inner: C };
}
function js(e) {
  let t = [],
    n = new Map();
  for (let t of e) {
    let e = `${t.kind}:${t.y0}:${t.y1}:${t.h}:${!!t.cut}`,
      r = n.get(e);
    (r || n.set(e, (r = [])), r.push(t));
  }
  for (let e of n.values()) {
    e.sort((e, t) => e.x0 - t.x0);
    let n = null;
    for (let r of e)
      n && n.x1 === r.x0 ? (n.x1 = r.x1) : t.push((n = { ...r }));
  }
  return t;
}
function Ms(e, t, n, r) {
  let [i, a] = h(e, t);
  return (
    (a.fillStyle = A),
    a.fillRect(0, 0, e, t),
    (a.fillStyle = T),
    a.fillRect(0, 0, e, 1),
    n && a.fillRect(0, 0, 1, t),
    r && a.fillRect(e - 1, 0, 1, t),
    i
  );
}
function Ns(e, n) {
  let { wall: r, faceAbove: i } = ks(n),
    a = t(e),
    [o, s] = h(e.width, e.height);
  (s.drawImage(e, 0, 0), (s.fillStyle = A));
  for (let e = 0; e < u.h; e++)
    for (let t = 0; t < u.w; t++)
      r(t, e) &&
        (i(t, e + 1) || (r(t, e + 1) && i(t, e + 2))) &&
        s.fillRect(t * X * a, e * X * a, X * a, X * a);
  return ne(o, a);
}
function Ps(e) {
  let t = e.room,
    n = t.x0 * X,
    r = t.y0 * X,
    i = e.base,
    [a] = h(t.w * X + 96, t.h * X + 96),
    o = {
      bounds: { x0: n, y0: r, x1: n + t.w * X, y1: r + t.h * X },
      floor: { x: n, y: r, frames: [i], skirt: { c: a, x: n - Os, y: r - Os } },
      boxes: [],
      props: [],
      solids: [],
      sun: !1,
    };
  if (e.flat) return o;
  for (let t of e.blocks)
    o.boxes.push({
      x0: t.x0,
      y0: t.y0,
      x1: t.x1,
      y1: t.y1,
      h: t.h,
      cap: `oblique`,
      tex: t.c,
      texX: t.texX,
      texY: t.texY,
      back: !1,
    });
  let s = As(t, e.house),
    c = new Map();
  for (let e of s.boxes) {
    let t = {
      x0: e.x0,
      y0: e.y0,
      x1: e.x1,
      y1: e.y1,
      h: e.h,
      cap: e.kind === `top` ? `own` : `oblique`,
      back: !1,
    };
    if (e.cut) {
      let n = `${e.x1 - e.x0}x${e.h}:${+!!e.litW}${+!!e.litE}`,
        r = c.get(n);
      (r || c.set(n, (r = Ms(e.x1 - e.x0, e.h, !!e.litW, !!e.litE))),
        (t.section = !0),
        (t.sectionTex = r));
    }
    o.boxes.push(t);
  }
  s.boxes.some((e) => e.kind === `top`) && (o.caps = Ns(i, e.house));
  let l = new Map();
  for (let e of s.inner) {
    let t = l.get(e.wall);
    (t || l.set(e.wall, (t = { faces: [], len: 0 })),
      t.faces.push(e),
      (t.len = Math.max(t.len, e.y1 - e.y0)));
  }
  if (l.size) {
    let e = [...l].map(([e, t]) => ({
      faces: t.faces,
      strip: oe(e, Math.max(1, Math.ceil(t.len / X))),
    }));
    o.extras = (t) =>
      e.map((e) => new Ss(e.faces, e.strip, { lit: t, fog: mt + ht }));
  }
  return o;
}
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
function hc(e, n, r) {
  let i = pe(e, 2),
    a = t(i),
    o = i.getContext(`2d`).getImageData(0, ec * a, i.width, 28 * a).data,
    s = [0, 0, 0];
  for (let e = 0; e < o.length; e += 4)
    for (let t = 0; t < 3; t++) s[t] += o[e + t];
  let c = o.length / 4,
    [l, u] = h(n, cc + r);
  ((u.fillStyle = `rgb(${s.map((e) => Math.round(e / c)).join(`,`)})`),
    u.fillRect(0, 0, n, cc),
    (u.fillStyle = uc));
  for (let e = 0; e < cc; e++)
    ((u.globalAlpha = lc + 0.18000000000000005 * ((13 - e) / 13)),
      u.fillRect(0, e, n, 1));
  return ((u.globalAlpha = 1), l);
}
function gc(e, t, n) {
  let r = t.key.lastIndexOf(`-`),
    i = r >= 0 ? Number(t.key.slice(r + 1)) : NaN;
  return e.furniture[Number.isInteger(i) ? i : n] ?? null;
}
function _c(e, t, n) {
  try {
    return e.getContext(`2d`).getImageData(t, n, 1, 1).data[3] >= 128;
  } catch {
    return !1;
  }
}
function vc(e, n) {
  if (!n.length) return null;
  let r = t(e),
    [i, a] = h(e.width, $s * r);
  a.drawImage(e, 0, 0);
  let [o, s] = h(e.width, e.height);
  (s.drawImage(e, 0, 0), (s.fillStyle = sc));
  for (let e of n) {
    let t = (e * Z + ic) * r,
      n = 12 * r,
      i = a.getImageData(t, ac * r, n, 27 * r),
      o = i.data;
    for (let e = 0; e < o.length; e += 4)
      o[e] + o[e + 1] + o[e + 2] < oc && (o[e + 3] = 0);
    (a.putImageData(i, t, ac * r), s.fillRect(e * Z * r, 0, Z * r, 28 * r));
  }
  return { wall: ne(i, r), floor: ne(o, r) };
}
function yc(e) {
  let t = e.room,
    n = e.art.base,
    r = t.x0 * Z,
    i = t.y0 * Z,
    a = fc(t),
    o = vc(n, a.doors),
    s = [];
  (s.push({
    ...a.back,
    cap: `oblique`,
    tex: o?.wall,
    texX: r,
    texY: i,
    back: !1,
  }),
    a.sides.forEach((e, t) =>
      s.push({
        ...e,
        cap: `own`,
        section: !0,
        sectionTex: mc(e.x1 - e.x0, e.h, t ? 0 : e.x1 - e.x0 - 1),
        back: !1,
      }),
    ));
  let c = a.sides[0].x0,
    l = a.sides[1].x1,
    u = a.back.y0,
    d = a.back.h + cc;
  s.push({
    x0: c,
    x1: l,
    y0: u - 1,
    y1: u,
    h: d,
    cap: `none`,
    tex: hc(t, l - c, a.back.h),
    texX: c,
    texY: u - d,
    back: !1,
  });
  let f = [];
  e.art.items.forEach((e, n) => {
    let r = gc(t, e, n),
      i = r ? te(r, e.c, e) : null,
      a = r && i ? le(r) : null;
    i && a && _c(e.c, a.x, a.y)
      ? s.push({
          x0: i.x0,
          y0: i.y0,
          x1: i.x1,
          y1: i.y1,
          h: i.h,
          cap: `oblique`,
          tex: e.c,
          texX: i.texX,
          texY: i.texY,
          back: !1,
        })
      : f.push(e);
  });
  let p = Math.max(...a.inner.map((e) => e.y1 - e.y0)),
    m = pe(t, Math.ceil(p / Z)),
    g = pc(t),
    [_] = h(t.w * Z + 96, t.h * Z + 96);
  return {
    bounds: { x0: r, y0: i, x1: r + t.w * Z, y1: i + t.h * Z },
    floor: {
      x: r,
      y: i,
      frames: [o?.floor ?? n],
      skirt: { c: _, x: r - dc, y: i - dc },
    },
    boxes: s,
    props: f,
    solids: [],
    sun: !1,
    extras: (e) => {
      let t = [new Ss(a.inner, m, { lit: e, fog: mt + ht })];
      return (g.length && t.push(new Qs(g)), t);
    },
  };
}
var bc = 0.95,
  xc = 1.1,
  Sc = 0.8,
  Cc = Math.tan(Wi),
  wc = `
uniform sampler2D uPool;    // the 2D lights' pools: texel (0, i) its ground point x, y, radius, a; (1, i) its colour, height
uniform int uPoolN;
uniform int uSub;           // bit i: point light i's share of the ground is drawn here instead (a pool, the lava's banks)
`,
  Tc = `
// Classic's glowSprite, the light map's falloff over x = d/r: 1, 0.45 at 0.35, 0 at 1
float poolFall(float x) {
  return x < 0.35 ? 1.0 - x * (0.55 / 0.35) : max(0.0, 0.45 * (1.0 - x) / 0.65);
}

// The lights whose light on the ground is drawn by the ground itself by night (the 2D lights' pools,
// the lava's banks): their share of hdLight taken back out, as glsl/lit.ts adds it on up-facing
// ground. By day they keep it (the pools only glow faintly then). (Past its knee the sum was rolled
// off, so this takes out a little too much: never more than two thirds of it.)
vec3 hdPoolSub(vec3 L, vec3 P, float nightK) {
  if (uSub == 0 || nightK <= 0.0) return L;
  vec3 sub = vec3(0.0);
  for (int i = 0; i < 32; i++) {
    if (i >= uPtN) break;
    if (((uSub >> i) & 1) == 0) continue;
    vec4 p = uPt[i * 2];
    vec4 c = uPt[i * 2 + 1];
    vec3 d = p.xyz - P;
    float dd = dot(d, d);
    float r = p.w;
    sub += c.rgb * (c.a * (r * r / (r * r + dd)) * exp(-sqrt(dd) / (r * 3.0)) * (0.5 + 0.5 * d.z * inversesqrt(max(dd, 1e-4))));
  }
  return max(L - sub * nightK, L * 0.35);
}

// The pools at ground point P, as Classic's light map cuts them out of its dark: what's left of the
// dark (the product of 1 - a·fall), and their colour (pg).
float hdPoolKeep(vec2 P, out vec3 pg) {
  float keep = 1.0;
  pg = vec3(0.0);
  for (int i = 0; i < 24; i++) {
    if (i >= uPoolN) break;
    vec4 a = texelFetch(uPool, ivec2(0, i), 0);
    vec4 c = texelFetch(uPool, ivec2(1, i), 0);
    vec2 dv = P - a.xy + vec2(0.0, c.w * ${(Sc / Cc).toFixed(4)});
    float d = length(vec2(dv.x, dv.y * ${(0.19999999999999996 + Sc * Cc).toFixed(4)}));
    if (d >= a.z) continue;
    keep *= 1.0 - a.w * poolFall(d / a.z);
    pg += c.rgb * (a.w * poolFall(d / (0.8 * a.z)));
  }
  return keep;
}

// under the pools the night's ground is uncovered toward full (POOL_LIFT, by how dark it is)
vec3 hdPoolLift(vec3 L, float keep, float nightK) {
  return mix(L, max(L, vec3(1.0, 0.92, 0.82) * ${bc.toFixed(2)}), (1.0 - keep) * nightK);
}

// and their colour glows over it
vec3 hdPoolGlow(vec3 pg) {
  return pg * ((0.12 + 0.6 * uDark) * ${xc.toFixed(2)});
}
`,
  Ec = new Map();
function Dc(e) {
  let t = Ec.get(e);
  if (t) return t;
  Ec.size > 512 && Ec.clear();
  let [n, r, a] = i(e),
    o = (e) => (Number.isFinite(e) ? e / 255 : 1);
  return ((t = [o(n), o(r), o(a)]), Ec.set(e, t), t);
}
function Oc(e, t, n, r, i, a, o, s) {
  o.length = 0;
  for (let a = 0; a < e.length && a < s.length; a++) {
    let c = e[a],
      l = Math.min(1, c.a);
    if (!(c.r > 0) || !(l > 0)) continue;
    let u = c.x + t - r,
      d = c.y + n + (c.z ?? 12) - i;
    ((s[a] = (l * c.r * c.r) / (c.r * c.r + u * u + d * d)), o.push(a));
  }
  o.length > 24 && o.sort((e, t) => s[t] - s[e] || e - t);
  let c = Math.min(24, o.length);
  for (let r = 0; r < c; r++) {
    let i = e[o[r]],
      s = Dc(i.color),
      c = r * 8;
    ((a[c] = i.x + t),
      (a[c + 1] = i.y + n + (i.z ?? 12)),
      (a[c + 2] = i.r),
      (a[c + 3] = Math.min(1, i.a)),
      (a[c + 4] = s[0]),
      (a[c + 5] = s[1]),
      (a[c + 6] = s[2]),
      (a[c + 7] = i.z ?? 12));
  }
  return c;
}
function kc(e, t, n, r, i) {
  let a = Math.min(t, 32),
    o = 0;
  for (let t = 0; t < a; t++) {
    let a = e[t * 2],
      s = (e, t, n) =>
        Math.abs(a.x - e) < 0.01 &&
        Math.abs(a.y - t) < 0.01 &&
        Math.abs(a.z - n) < 0.01,
      c = !1;
    for (let e = 0; e < r && !c; e++)
      c = s(n[e * 8], n[e * 8 + 1], n[e * 8 + 7]);
    for (let e = 0; e < i.length && !c; e++) c = s(i[e].x, i[e].y, i[e].z);
    c && (o |= 1 << t);
  }
  return o;
}
function Ac(e) {
  let t = new Oe(e, 2, 24, Ue, ye);
  return (
    (t.magFilter = t.minFilter = R),
    (t.generateMipmaps = !1),
    (t.needsUpdate = !0),
    t
  );
}
var jc = [],
  Mc = class {
    data = new Float32Array(192);
    uniforms;
    idx = [];
    S = new Float32Array(256);
    constructor() {
      this.uniforms = {
        uPool: { value: Ac(this.data) },
        uPoolN: { value: 0 },
        uSub: { value: 0 },
      };
    }
    get n() {
      return this.uniforms.uPoolN.value;
    }
    fill(e, t, n, r, i) {
      let a = Oc(e, t, n, r, i, this.data, this.idx, this.S);
      ((this.uniforms.uPoolN.value = a),
        a && (this.uniforms.uPool.value.needsUpdate = !0));
    }
    subs(e, t = jc) {
      this.uniforms.uSub.value = kc(
        e.uPt.value,
        e.uPtN.value,
        this.data,
        this.n,
        t,
      );
    }
    rebuild() {
      (this.uniforms.uPool.value.dispose(),
        (this.uniforms.uPool.value = Ac(this.data)));
    }
    dispose() {
      this.uniforms.uPool.value.dispose();
    }
  },
  Q = 16,
  Nc = { none: 0, water: 1, deep: 2, lava: 3, ice: 4 },
  Pc = `#ff6a1a`,
  Fc = 26,
  Ic = 64,
  Lc = 34,
  Rc = 120,
  zc = 16,
  Bc = 26,
  Vc = 150,
  Hc = 12,
  Uc = 20,
  Wc = (y * Q) / 8,
  Gc = (c * Q) / 8;
function Kc(e) {
  let t = new Uint8Array(y * c);
  for (let n = 0; n < t.length; n++) {
    let r = e[n];
    t[n] =
      r === s.Water
        ? Nc.water
        : r === s.DeepWater
          ? Nc.deep
          : r === s.Lava
            ? Nc.lava
            : r === s.Ice
              ? Nc.ice
              : Nc.none;
  }
  return t;
}
function qc(e) {
  let t = Wc,
    n = Gc,
    r = Q / 8,
    i = Uc / 8,
    a = Math.ceil(i * 3),
    o = [],
    s = 0;
  for (let e = -8; e <= a; e++)
    s += o[e + a] = Math.exp(-(e * e) / (2 * i * i));
  for (let e = 0; e < o.length; e++) o[e] /= s;
  let c = new Float32Array(t * n),
    l = new Float32Array(t * n);
  for (let i = 0; i < n; i++) {
    let n = Math.floor(i / r) * y;
    for (let a = 0; a < t; a++)
      c[i * t + a] = +(e[n + Math.floor(a / r)] === Nc.lava);
  }
  for (let e = 0; e < n; e++) {
    let n = e * t;
    for (let e = 0; e < t; e++) {
      let r = 0;
      for (let i = Math.max(-8, -e), s = Math.min(a, t - 1 - e); i <= s; i++)
        r += c[n + e + i] * o[i + a];
      l[n + e] = r;
    }
  }
  let u = new Uint8Array(t * n);
  for (let e = 0; e < t; e++)
    for (let r = 0; r < n; r++) {
      let i = 0;
      for (let s = Math.max(-8, -r), c = Math.min(a, n - 1 - r); s <= c; s++)
        i += l[(r + s) * t + e] * o[s + a];
      u[r * t + e] = Math.min(255, Math.round(i * 255));
    }
  return u;
}
function Jc(t, n = 4) {
  let r = [];
  for (let i = 0; i < c; i += n)
    for (let a = 0; a < y; a += n) {
      let o = [],
        l = 0,
        u = 0,
        d = 0,
        f = -1,
        p = 0,
        m = 0,
        h = 0;
      for (let r = i; r < Math.min(c, i + n); r++)
        for (let i = a; i < Math.min(y, a + n); i++)
          t[r * y + i] === s.Lava &&
            (o.push(r * y + i),
            (l += i * Q + 8),
            (u += r * Q + 8),
            Yc(t, i, r) && (p++, (m += i * Q + 8), (h += r * Q + 8)),
            (i + r) % 2 == 0 && (d++, f < 0 && (f = e(i, r, 8) * 6.28)));
      if (!o.length) continue;
      let g = l / o.length,
        _ = u / o.length;
      r.push({
        x: g,
        y: _,
        r: d ? Math.min(Ic, Fc * Math.sqrt(d)) : 0,
        lit: d,
        lx: p ? m / p : g,
        ly: p ? h / p : _,
        ph: Math.max(0, f),
        tiles: o,
      });
    }
  return r;
}
function Yc(e, t, n) {
  return (
    (t > 0 && e[n * y + t - 1] !== s.Lava) ||
    (t < y - 1 && e[n * y + t + 1] !== s.Lava) ||
    (n > 0 && e[(n - 1) * y + t] !== s.Lava) ||
    (n < c - 1 && e[(n + 1) * y + t] !== s.Lava)
  );
}
function Xc(e, t, n, r) {
  if (!Number.isFinite(t) || !Number.isFinite(n)) return !1;
  let i = Math.max(0, Math.floor((t - 128) / Q)),
    a = Math.max(0, Math.floor((n - 128) / Q)),
    o = Math.min(y - 1, Math.floor((t + 128) / Q)),
    s = Math.min(c - 1, Math.floor((n + 128) / Q)),
    l = 0,
    u = 0,
    d = 0,
    f = 128;
  for (let r = a; r <= s; r++)
    for (let a = i; a <= o; a++) {
      if (e[r * y + a] !== Nc.lava) continue;
      let i = Math.min(a * Q + Q, Math.max(a * Q, t)),
        o = Math.min(r * Q + Q, Math.max(r * Q, n)),
        s = Math.hypot(i - t, o - n);
      if (s >= 128) continue;
      let c = (1 - s / 128) ** 2;
      ((l += c),
        s > 0.001 && ((u += (c * (i - t)) / s), (d += (c * (o - n)) / s)),
        (f = Math.min(f, s)));
    }
  if (!(l > 0)) return !1;
  let p = 1 - f / 128,
    m = Math.hypot(u, d),
    h = m > 1e-6 ? Math.min(f, Bc) / m : 0;
  return (
    (r.x = t + u * h),
    (r.y = n + d * h),
    (r.z = Hc),
    (r.r = Vc),
    (r.a = p * p * (3 - 2 * p)),
    !0
  );
}
function Zc(e) {
  return e > 0 ? Math.min(Rc, Lc * Math.sqrt(e)) : 0;
}
function Qc(e, t) {
  return 0.8 + 0.2 * Math.sin(e * 0.9 + t);
}
function $c(e, t, n, r) {
  let i = new Oe(e, t, n, Ie, Se);
  return (
    (i.magFilter = r),
    (i.minFilter = r),
    (i.wrapS = i.wrapT = ze),
    (i.generateMipmaps = !1),
    (i.unpackAlignment = 1),
    (i.needsUpdate = !0),
    i
  );
}
var el = class {
    kinds;
    clusters;
    lightClusters;
    heat;
    tex;
    heatTex;
    pool = [];
    last = [];
    constructor(e = x().tiles) {
      ((this.kinds = Kc(e)),
        (this.clusters = Jc(e)),
        (this.lightClusters = Jc(e, 8)),
        (this.heat = qc(this.kinds)),
        (this.tex = $c(this.kinds, y, c, R)),
        (this.heatTex = $c(this.heat, Wc, Gc, M)));
    }
    lights(e, t, n = [], r) {
      if (((n.length = 0), (this.last = n), r)) {
        let e = (this.pool[0] ??= { x: 0, y: 0, z: Hc, r: 0, color: Pc, a: 0 });
        Xc(this.kinds, r.x, r.y, e) && ((e.a *= Qc(t, 1.7)), n.push(e));
      }
      for (let i of this.lightClusters) {
        let a = Zc(i.lit);
        if (
          !a ||
          i.lx + a < e.gx0 ||
          i.lx - a > e.gx0 + e.fw ||
          i.ly + a < e.gy0 ||
          i.ly - a > e.gy0 + e.fh
        )
          continue;
        let o = (this.pool[n.length + +!!r] ??= {
          x: 0,
          y: 0,
          z: zc,
          r: 0,
          color: Pc,
          a: 0,
        });
        ((o.x = i.lx),
          (o.y = i.ly),
          (o.z = zc),
          (o.r = a),
          (o.color = Pc),
          (o.a = Qc(t, i.ph)),
          n.push(o));
      }
      return n;
    }
    embers(e, t) {
      for (let n of this.clusters)
        if (!(
          n.x + 64 < e.gx0 ||
          n.x - 64 > e.gx0 + e.fw ||
          n.y + 64 < e.gy0 ||
          n.y - 64 > e.gy0 + e.fh
        ))
          for (let e of n.tiles) {
            if (Math.random() >= 0.004) continue;
            let n = e % y,
              r = (e - n) / y;
            t.spawn({
              x: n * Q + Math.random() * 16,
              y: r * Q + Math.random() * 16,
              vz: 30,
              gravity: 40,
              life: 0.8,
              size: 1,
              color: `#ffd166`,
              glow: !0,
            });
          }
    }
    rebuild() {
      (this.tex.dispose(),
        this.heatTex.dispose(),
        (this.tex = $c(this.kinds, y, c, R)),
        (this.heatTex = $c(this.heat, Wc, Gc, M)));
    }
    dispose() {
      (this.tex.dispose(), this.heatTex.dispose());
    }
  },
  $ = Math.ceil(y / 32),
  tl = Math.ceil(c / 32),
  nl = 6,
  rl = 384,
  il = `
vec3 hdFog(vec3 lit, vec3 emissive, vec3 P) { return lit + emissive; }
`,
  al = class {
    cap;
    last = new Map();
    constructor(e) {
      this.cap = e;
    }
    get size() {
      return this.last.size;
    }
    has(e) {
      return this.last.has(e);
    }
    out = { load: [], evict: [] };
    keep = new Set();
    plan(e, t, n) {
      let { load: r, evict: i } = this.out;
      ((r.length = 0), (i.length = 0));
      let a = this.keep;
      a.clear();
      for (let t of e) a.add(t);
      for (let t of e) (this.last.has(t) || r.push(t), this.last.set(t, n));
      if (e.length < this.cap) {
        for (let e of t)
          if (!this.last.has(e)) {
            (r.push(e), this.last.set(e, n), a.add(e));
            break;
          }
      }
      for (; this.last.size > this.cap;) {
        let e = -1,
          t = 1 / 0;
        for (let [n, r] of this.last) !a.has(n) && r < t && ((t = r), (e = n));
        if (e < 0) break;
        (this.last.delete(e), i.push(e));
      }
      return this.out;
    }
    clear() {
      this.last.clear();
    }
  };
function ol(e, t, n, r, i = []) {
  i.length = 0;
  let a = Math.max(0, Math.floor(e / 512)),
    o = Math.max(0, Math.floor(t / 512)),
    s = Math.min($ - 1, Math.floor((e + n - 1) / 512)),
    c = Math.min(tl - 1, Math.floor((t + r - 1) / 512));
  for (let e = o; e <= c; e++) for (let t = a; t <= s; t++) i.push(e * $ + t);
  return i;
}
var sl = `${B}
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
  cl = (e) => `${B}
${lt}
${ut}
${wc}
${Tc}
${ea}
${e}
in vec3 vP; out vec4 o;
uniform sampler2D uMap;
uniform vec2 uOrigin;
uniform sampler2D uKind;
uniform sampler2D uWater;
uniform vec4 uWaterSz;     // frame width, height, this frame, 1 = there's water art
uniform float uGTime;       // Game.time, the clock Classic animates the ground with
uniform float uLive;       // the pack's water is live (its lakes are holes in the chunks)
uniform float uCal;        // the calibration camera: exactly Classic's ground, nothing added
uniform float uSpec;       // glints of the sun and the lights on the water
uniform float uLodK;       // the mip bias, as a gradient scale
uniform vec2 uTDens;       // texels per world px: the chunks', the water art's (src/game/density.ts)
uniform float uLavaGlow;    // the melt's light of its own
uniform float uLavaBank;    // and how much of it falls on the banks
uniform sampler2D uHeat;    // the lava's tiles blurred (lava.ts heatField): 1 deep in it, 0.5 at a shore
uniform vec3 uTEye;

// a 4x4 ordered dither, 0..1 (the melt's bands break into pixels at their edges, as pixel art's do)
float tBayer(ivec2 p) {
  int i = (p.x & 3) + ((p.y & 3) << 2);
  int b[16] = int[16](0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5);
  return (float(b[i]) + 0.5) / 16.0;
}

// convex/lib/noise.ts hash2, bit for bit (uint arithmetic wraps as Math.imul and |0 do)
float tHash(int x, int y, int s) {
  uint h = uint(x) * 374761393u + uint(y) * 668265263u + uint(s) * 144269504u;
  h = (h ^ (h >> 13u)) * 1274126177u;
  h ^= h >> 16u;
  return float(h) / 4294967296.0;
}

float tNoise(vec2 p, int s) {
  vec2 b = floor(p), f = p - b;
  f = f * f * (3.0 - 2.0 * f);
  ivec2 i = ivec2(b);
  float a = tHash(i.x, i.y, s), c = tHash(i.x + 1, i.y, s), d = tHash(i.x, i.y + 1, s), e = tHash(i.x + 1, i.y + 1, s);
  return mix(mix(a, c, f.x), mix(d, e, f.x), f.y);
}

vec3 tWaterTexel(ivec2 p) {
  ivec2 sz = ivec2(uWaterSz.xy);
  ivec2 m = ((p % sz) + sz) % sz;
  return texelFetch(uWater, ivec2(m.x + int(uWaterSz.z) * sz.x, m.y), 0).rgb;
}

// The water pattern at world point p (it repeats from the world's origin, as Ground.drawWater's does).
vec3 tWaterAt(vec2 p, vec2 fw) {
  vec2 t = ovSharp(p, fw) - 0.5;
  vec2 b = floor(t), f = t - b;
  ivec2 i = ivec2(b);
  return mix(mix(tWaterTexel(i), tWaterTexel(i + ivec2(1, 0)), f.x), mix(tWaterTexel(i + ivec2(0, 1)), tWaterTexel(i + ivec2(1, 1)), f.x), f.y);
}

// The lava's swell: broad waves of heat rolling slowly across a field, 0..1.
float tSwell(vec2 p) {
  return 0.5 + 0.5 * sin(uGTime * 0.7 + tNoise(p * 0.011, 73) * 9.0);
}

// The melt's heat at p, about 0.5 +- 0.1: crust plates drifting on it, warped so they ooze rather
// than slide.
float tMelt(vec2 p) {
  float t = uGTime;
  vec2 w = vec2(tNoise(p * 0.013 + vec2(t * 0.022, 0.0), 74), tNoise(p * 0.013 + vec2(5.2, -t * 0.02), 75));
  vec2 q = p + (w - 0.5) * 40.0;
  return tNoise(q * 0.032 + vec2(t * 0.05, t * 0.028), 76) * 0.65 + tNoise(q * 0.075 - vec2(t * 0.03, t * 0.06), 77) * 0.35;
}

vec3 tGlint(vec3 L, vec3 n, vec3 V, float p) {
  return vec3(pow(max(dot(reflect(-L, n), V), 0.0), p));
}

void main() {
  vec2 P = vP.xy;
  vec2 tc = P - uOrigin;
  vec2 fw = fwidth(P);
  vec4 ch = textureGrad(uMap, ovSharp(tc * uTDens.x, fw * uTDens.x) / (512.0 * uTDens.x), dFdx(tc) * (uLodK / 512.0), dFdy(tc) * (uLodK / 512.0));
  vec4 gr = ovSheet(uGround, uGroundOn, P, fw);
  vec4 gl = ovSheet(uGlow, uGlowOn, P, fw);
  vec3 wat = uWaterSz.w > 0.5 ? tWaterAt(P * uTDens.y, fw * uTDens.y) : vec3(0.0);

  // the chunk is premultiplied: the water shows through its holes as it does under Classic's chunks
  vec3 alb = ch.rgb + wat * (1.0 - ch.a);

  ivec2 q = ivec2(floor(P));
  ivec2 t = clamp(q >> 4, ivec2(0), ivec2(${y - 1}, ${c - 1}));
  ivec2 l = q - t * 16;
  int kind = int(texelFetch(uKind, t, 0).r * 255.0 + 0.5);
  vec3 emis = vec3(0.0);
  vec3 Pq = vec3(vec2(q) + 0.5, 0.0);
  vec3 V = normalize(uTEye - Pq);
  bool extra = uCal < 0.5;
  // how far into the night (Classic's darkness tops out at 0.82)
  float nightK = clamp(uDark / 0.8, 0.0, 1.0);
  // the lava's own light (decals cover it), how much of the sky and the lamps the albedo still
  // takes, and the lava's light on the ground around it
  vec3 melt = vec3(0.0);
  float litK = 1.0;
  vec3 bank = vec3(0.0);
  float heat = extra ? texture(uHeat, P / vec2(${y * 16}.0, ${c * 16}.0)).r : 0.0;

  // Game.render's per-tile liquids, pixel for pixel
  if (kind == 3) {
    if (!extra) {
      float k = (sin(uGTime * 2.0 + tHash(t.x, t.y, 8) * 6.28) + 1.0) * 0.5;
      int bx = int(floor(tHash(t.x, t.y, 9) * 10.0)), by = int(floor(tHash(t.x, t.y, 10) * 10.0));
      int bw = 3 + int(floor(k * 3.0));
      if (l.x >= bx && l.x < bx + bw && l.y >= by && l.y < by + 2) alb = mix(alb, vec3(1.0, (200.0 + floor(k * 55.0)) / 255.0, 90.0 / 255.0), 0.25 + k * 0.35);
    } else {
      // molten: it lights itself (more at night, when it's what lights the ash). The melt's heat cuts
      // it into the bands a pixel artist would paint (dark crust, the lava's own orange, hot, and
      // hottest, past 1.0 so the bloom takes it), dithered a pixel or two where one meets the next,
      // with a bright pixel-wide crack round every crust plate; the art's speckle stays on top,
      // calmed, as its texture. The swell lifts the bands as it rolls through; the rim runs cooler.
      vec3 base = textureLod(uMap, tc / 512.0, 2.0 + log2(uTDens.x)).rgb;
      vec3 calm = base * mix(vec3(1.0), alb / max(base, vec3(0.04)), 0.5);
      float f = tMelt(Pq.xy);
      // the heat's change over one art pixel, for the crack's width
      float g = max(abs(tMelt(Pq.xy + vec2(1.0, 0.0)) - f), abs(tMelt(Pq.xy + vec2(0.0, 1.0)) - f));
      float sw = tSwell(Pq.xy);
      float rim = smoothstep(0.4, 0.8, heat);
      float c = f + (sw - 0.5) * 0.06 - (1.0 - rim) * 0.07;
      float cd = c + (tBayer(q) - 0.5) * 0.024;
      float glow = mix(0.18, 1.0, nightK) * uLavaGlow;
      vec3 hot = vec3(1.2, 0.8, 0.34);
      melt = cd < 0.37 ? calm * vec3(0.52, 0.28, 0.24)
        : cd < 0.6 ? calm * vec3(0.84, 0.7, 0.64)
        : cd < 0.7 ? calm * vec3(1.0, 0.92, 0.86)
        : mix(calm * 1.04, hot, 0.25);
      float crack = step(abs(c - 0.37), g * 0.55) * step(0.0, c - 0.37 + g * 0.55) * rim;
      melt = mix(melt, hot, crack * 0.6) * glow;
      // by night the melt is nearly all its own light; by day the sun lights the art as before
      litK = mix(1.0, 0.15, nightK);
    }
  } else if (kind == 1 || kind == 2) {
    if (uLive < 0.5) {
      float k = sin(uGTime * 1.6 + tHash(t.x, t.y, 8) * 6.28);
      int ox = int(floor(tHash(t.x, t.y, 9) * 10.0)) + int(floor(k * 2.0 + 0.5));
      int oy = int(floor(tHash(t.x, t.y, 10) * 12.0)) + 2;
      if (k > 0.2 && l.x >= ox && l.x < ox + 4 && l.y == oy) alb = mix(alb, kind == 1 ? vec3(190.0, 230.0, 255.0) / 255.0 : vec3(150.0, 190.0, 240.0) / 255.0, kind == 1 ? 0.55 : 0.4);
    }
    float wet = uLive > 0.5 ? 1.0 - ch.a : 1.0;
    if (extra && uSpec > 0.5 && wet > 0.0) {
      // ripples, per art pixel: the sun, the moon and every light glint off them
      vec2 rp = Pq.xy;
      vec3 n = normalize(vec3(
        0.16 * (sin(rp.x * 0.21 + rp.y * 0.13 + uGTime * 1.7) + sin(rp.x * 0.07 - rp.y * 0.31 - uGTime * 1.1)),
        0.16 * (cos(rp.y * 0.19 - rp.x * 0.11 + uGTime * 1.3) + cos(rp.y * 0.05 + rp.x * 0.27 - uGTime * 0.9)),
        1.0));
      vec3 s = tGlint(uSunDir, n, V, 80.0) * vec3(1.0, 0.96, 0.86) * (1.0 - uDark) * 0.8 + tGlint(uMoonDir, n, V, 64.0) * vec3(0.7, 0.8, 1.0) * uDark * 0.35;
      for (int i = 0; i < 32; i++) {
        if (i >= uPtN) break;
        vec4 a = uPt[i * 2], c = uPt[i * 2 + 1];
        vec3 d = a.xyz - Pq;
        float dd = max(dot(d, d), 1.0), r = a.w;
        float fall = r * r / (r * r + dd) * exp(-sqrt(dd) / (3.0 * r));
        s += c.rgb * c.w * fall * tGlint(d * inversesqrt(dd), n, V, 24.0) * 1.5;
      }
      emis += s * wet;
    }
  } else if (kind == 4) {
    if ((t.x * 7 + t.y * 3 + int(floor(uGTime * 0.8))) % 23 == 0 && l == ivec2(7)) alb = mix(alb, vec3(1.0), 0.8);
    if (extra && uSpec > 0.5) {
      // frost catches the sun here and there
      float tw = step(0.992, tHash(q.x >> 1, q.y >> 1, 61 + int(floor(uGTime * 2.0))));
      emis += vec3(0.85, 0.95, 1.0) * tw * (1.0 - uDark) * 0.6;
    }
  }

  if (kind != 3 && heat > 0.004) {
    // the banks: the lava's light on the ground beside it, swelling with the melt. Classic's light
    // on every other lava tile uncovers about a tile of shore; this reaches a little further, falling
    // off smoothly, warm (its glow's orange, part of the way to white: it uncovers the ash too). By
    // night it stands in for the lava's point lights on the ground (uSub).
    // (heat is 0.5 at the shore, 0.2 a tile out, 0.05 two tiles out: b 1, 0.25, 0.03)
    float b = pow(min(heat * 2.0, 1.0), 1.5) * uLavaBank * (0.8 + 0.2 * tSwell(Pq.xy));
    bank = vec3(1.0, 0.46, 0.18) * (b * (0.3 + 1.1 * nightK));
    // and the hot air over the shore glows a little of itself, as Classic's additive glow does
    emis += vec3(1.0, 0.42, 0.1) * (b * b * 0.22 * (0.25 + 0.75 * nightK));
  }

  // the ground sheet is paint on the ground (lit with it); the glow sheet is light, never under 60%
  alb = alb * litK * (1.0 - gr.a) + gr.rgb;
  emis += melt * (1.0 - gr.a);
  vec3 L = hdLight(vP, vec3(0.0, 0.0, 1.0));
  // by night the pools and the lava's banks light the ground instead of their point lights
  if (extra) L = hdPoolSub(L, vP, nightK);
  L += bank;
  if (extra && uPoolN > 0) {
    // the 2D lights' pools, as Classic's light map cuts them out of its dark
    vec3 pg;
    float keep = hdPoolKeep(P, pg);
    // (the lava is its own light: the pools only glow on it)
    if (kind != 3) L = hdPoolLift(L, keep, nightK);
    emis += hdPoolGlow(pg) * (1.0 - gr.a);
  }
  emis += gl.rgb * max(L, vec3(0.6));
  // alpha: the glow sheet's cover, which the DoF keeps sharp
  o = vec4(hdFog(alb * L, emis, vP), clamp(gl.a, 0.0, 1.0));
}
`;
function ll(e, t) {
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
var _l = class {
    root = new F();
    pools = new Mc();
    u;
    geo;
    mesh;
    frames;
    skirt;
    tex;
    skirtTex = null;
    aniso;
    renderer;
    shown = 0;
    bytes = 0;
    constructor(e, n) {
      ((this.frames = e.frames),
        (this.skirt = e.skirt),
        (this.tex = e.frames.map(() => null)),
        (this.aniso = Math.max(1, n.anisotropy ?? 1)),
        (this.renderer = n.renderer ?? null));
      let r = n.fog ?? il,
        i = e.frames.find((e) => !!e),
        a = n.bg ?? 459791;
      ((this.u = {
        ...n.lit,
        ...n.overlay,
        ...n.space,
        ...this.pools.uniforms,
        uMap: { value: null },
        uRect: {
          value: new j(
            e.x,
            e.y,
            Math.max(1, i ? m(i) : 1),
            Math.max(1, i ? p(i) : 1),
          ),
        },
        uFDens: { value: new P(i ? t(i) : 1, e.skirt ? t(e.skirt.c) : 1) },
        uSkirt: { value: null },
        uSkRect: {
          value: new j(
            e.skirt?.x ?? 0,
            e.skirt?.y ?? 0,
            Math.max(1, e.skirt ? m(e.skirt.c) : 1),
            Math.max(1, e.skirt ? p(e.skirt.c) : 1),
          ),
        },
        uSkirtOn: { value: 0 },
        uBg: { value: new V() },
        uCal: { value: 0 },
        uLodK: { value: 1 },
      }),
        this.setBg(a));
      let [o, s, c, l] = gl(e);
      ((this.geo = new L()),
        this.geo.setAttribute(
          `position`,
          new U(new Float32Array([o, s, 0, c, s, 0, c, l, 0, o, l, 0]), 3),
        ),
        this.geo.setIndex([0, 1, 2, 0, 2, 3]),
        (this.geo.boundingSphere = new Te(
          new V((o + c) / 2, (s + l) / 2, 0),
          Math.hypot(c - o, l - s) / 2 + 1,
        )));
      let u = new H({
        glslVersion: W,
        vertexShader: dl,
        fragmentShader: fl(r, pl(r)),
        uniforms: this.u,
        side: 2,
        depthTest: !0,
        depthWrite: !0,
        blending: 0,
      });
      ((this.mesh = new I(this.geo, u)),
        (this.mesh.matrixAutoUpdate = !1),
        (this.mesh.renderOrder = 10),
        (this.mesh.visible = !1),
        (this.root.matrixAutoUpdate = !1),
        this.root.add(this.mesh));
    }
    setBg(e) {
      this.u.uBg.value.set(
        ((e >> 16) & 255) / 255,
        ((e >> 8) & 255) / 255,
        (e & 255) / 255,
      );
    }
    setFrames(e) {
      this.frames = e;
      for (let t = 0; t < Math.max(e.length, this.tex.length); t++)
        this.tex[t] && e[t] !== this.tex[t].image && this.drop(t);
      this.tex.length = e.length;
      for (let t = 0; t < e.length; t++) this.tex[t] ??= null;
      this.phase(this.shown);
    }
    get ready() {
      return this.tex.some(Boolean);
    }
    pending() {
      let e = this.skirt && !this.skirtTex ? 1 : 0;
      for (let t = 0; t < this.frames.length; t++)
        this.frames[t] && !this.tex[t] && e++;
      return e;
    }
    step() {
      for (let e = 0; e < this.frames.length; e++) {
        let t = this.frames[e];
        if (!t || this.tex[e]) continue;
        let n = ml(t, this.aniso);
        return (
          (this.tex[e] = n),
          this.renderer?.initTexture(n),
          (e === this.shown || !this.tex[this.shown]) && this.phase(this.shown),
          (this.bytes += hl(t)),
          hl(t)
        );
      }
      if (this.skirt && !this.skirtTex) {
        let e = ml(this.skirt.c, this.aniso);
        return (
          (this.skirtTex = e),
          this.renderer?.initTexture(e),
          (this.u.uSkirt.value = e),
          (this.u.uSkirtOn.value = 1),
          (this.bytes += hl(this.skirt.c)),
          hl(this.skirt.c)
        );
      }
      return 0;
    }
    phase(e) {
      this.shown = e;
      let t = Math.min(e, this.tex.length - 1);
      for (; t > 0 && !this.tex[t];) t--;
      let n = this.tex[t] ?? this.tex.find(Boolean) ?? null;
      ((this.u.uMap.value = n), (this.mesh.visible = !!n));
    }
    refresh(e) {
      let t = this.tex[e];
      t && (t.needsUpdate = !0);
    }
    drop(e) {
      let t = this.tex[e];
      t && ((this.bytes -= hl(t.image)), t.dispose(), (this.tex[e] = null));
    }
    update(e) {
      let t = this.u;
      ((t.uCal.value = +!!e.cam.cal),
        (t.uLodK.value =
          e.tier === `low` || e.tier === `minimal` ? Math.SQRT2 : 1));
      let n = e.f.fp;
      (this.pools.fill(
        e.f.lights2d,
        n.gx0,
        n.gy0,
        e.cam.focus.x,
        e.cam.focus.y,
      ),
        this.pools.subs(e.lit));
    }
    stats() {
      return { texBytes: this.bytes, vertices: 4 };
    }
    casters() {
      return [];
    }
    rebuild() {
      for (let e = 0; e < this.tex.length; e++) {
        let t = this.tex[e];
        t && (t.dispose(), (this.tex[e] = ml(t.image, this.aniso)));
      }
      (this.skirtTex &&
        (this.skirtTex.dispose(),
        (this.skirtTex = ml(this.skirt.c, this.aniso)),
        (this.u.uSkirt.value = this.skirtTex)),
        this.pools.rebuild(),
        this.phase(this.shown));
    }
    dispose() {
      for (let e of this.tex) e?.dispose();
      (this.tex.fill(null),
        this.skirtTex?.dispose(),
        (this.skirtTex = null),
        this.mesh.material.dispose(),
        this.geo.dispose(),
        this.pools.dispose(),
        (this.bytes = 0));
    }
  },
  vl = 16,
  yl = 0,
  bl = 1,
  xl = 2,
  Sl = 3,
  Cl = 256,
  wl = 64,
  Tl = 48,
  El = 160;
function Dl(e) {
  let [t, n] = h(Cl, wl);
  return (
    (n.fillStyle = `#${e.toString(16).padStart(6, `0`)}`),
    n.fillRect(0, 0, Cl, wl),
    (n.fillStyle = ns),
    n.fillRect(0, 0, Cl, 1),
    t
  );
}
var Ol = class {
  src;
  atlas;
  o;
  root = new F();
  solids = [];
  mats = [];
  occl = yr();
  section = null;
  sectionTex = null;
  floorTex = null;
  fp = { gx0: 0, gy0: 0, fw: 0, fh: 0 };
  constructor(e, t, n) {
    ((this.src = e),
      (this.atlas = t),
      (this.o = n),
      (this.root.name = `hd2d-space-solids`),
      (this.root.matrixAutoUpdate = !1));
  }
  buildCpu() {
    let e = this.src,
      n = new Ar(),
      r = e.floor,
      i = r.frames.find((e) => !!e),
      a = i?.width ?? 0,
      o = i?.height ?? 0,
      s = i ? t(i) : 1,
      c = (e = {}) => ({
        x0: r.x,
        y0: r.y,
        ax: 0,
        ay: 0,
        aw: a,
        ah: o,
        baseY: 0,
        height: 0,
        dens: s,
        ...e,
      }),
      l = e.caps,
      u = (e) =>
        l
          ? {
              x0: r.x,
              y0: r.y - e,
              ax: 0,
              ay: 0,
              aw: l.width,
              ah: l.height,
              baseY: 0,
              height: 0,
              dens: t(l),
            }
          : null,
      d = (e, t, r, i, a, o) => {
        for (let s = e; s < t; s += Cl) {
          let e = Math.min(t, s + Cl),
            c = {
              x0: s,
              y0: r - a,
              ax: 0,
              ay: 0,
              aw: Cl,
              ah: wl,
              baseY: 0,
              height: 0,
            };
          n.at((s + e) / 2, r, xl).face(
            [
              [s, r, i],
              [e, r, i],
              [e, r, a],
              [s, r, a],
            ],
            o,
            c,
          );
        }
      },
      f = e.grid;
    if (f) {
      let e = (e, t) =>
          e < 0 || t < 0 || e >= f.cols || t >= f.rows
            ? 0
            : f.h[t * f.cols + e],
        t = (e, t) =>
          e < 0 ||
          t < 0 ||
          e >= f.cols ||
          t >= f.rows ||
          f.cap[t * f.cols + e] !== 0;
      for (let r = 0; r < f.rows; r++)
        for (let i = 0; i < f.cols; i++) {
          let a = r * f.cols + i,
            o = f.h[a];
          if (!o) continue;
          let s = f.x0 + i * vl,
            l = s + vl,
            p = f.y0 + r * vl,
            m = p + vl,
            h = s + 8,
            g = p + 8,
            _ = c({ baseY: m }),
            v = f.cap[a];
          v === 1 && u(o)
            ? n.at(h, g, bl).face(
                [
                  [s, p, o],
                  [l, p, o],
                  [l, m, o],
                  [s, m, o],
                ],
                [0, 0, 1],
                u(o),
              )
            : (v === 1 || v === 2) &&
              n.at(h, g, yl).face(
                [
                  [s, p, o],
                  [l, p, o],
                  [l, m, o],
                  [s, m, o],
                ],
                [0, 0, 1],
                _,
              );
          let y = e(i, r + 1),
            b = e(i, r - 1),
            x = e(i - 1, r),
            S = e(i + 1, r);
          y < o &&
            ((f.section ? f.section[a] === 1 : t(i, r + 1))
              ? d(s, l, m, y, o, [0, 1, 0])
              : n.at(h, g, yl).face(
                  [
                    [s, m, y],
                    [l, m, y],
                    [l, m, o],
                    [s, m, o],
                  ],
                  [0, 1, 0],
                  _,
                ));
          let C = n.at(h, g, yl);
          (b < o &&
            C.face(
              [
                [s, p, b],
                [l, p, b],
                [l, p, o],
                [s, p, o],
              ],
              [0, -1, 0],
              _,
            ),
            x < o &&
              C.face(
                [
                  [s, p, x],
                  [s, m, x],
                  [s, m, o],
                  [s, p, o],
                ],
                [-1, 0, 0],
                { ..._, x0: _.x0 - 0.5, shade: vr },
              ),
            S < o &&
              C.face(
                [
                  [l, p, S],
                  [l, m, S],
                  [l, m, o],
                  [l, p, o],
                ],
                [1, 0, 0],
                { ..._, x0: _.x0 + 0.5, shade: vr },
              ));
        }
    }
    for (let t of e.boxes) this.box(n, t, c, d);
    if (e.solids.length && this.atlas) {
      let t = new Ti();
      for (let { it: r, depth: i, foot: a } of e.solids) {
        let e = this.atlas.rect(r.c),
          o = r.x + r.c.width / 2,
          s = t.of(r.c),
          c = n.at(o, r.baseY, Sl + e.page);
        ki(c, r, e, s, i) || Ai(c, c, r, e, s, i, a);
      }
    }
    this.solids = n.list
      .filter((e) => e.b.vertices > 0)
      .map((e) => ({
        page: e.page,
        arrays: e.b.arrays(),
        b: [...e.b.bounds],
        mesh: null,
      }));
  }
  box(e, n, r, i) {
    let { x0: a, y0: o, x1: s, y1: c, h: l } = n;
    if (!(l > 0) || !(s > a) || !(c > o)) return;
    let u = (a + s) / 2,
      d = (o + c) / 2,
      f = this.src.floor,
      p = n.texX ?? f.x,
      m = n.texY ?? f.y,
      h = yl,
      g = r({ x0: p, y0: m, baseY: c });
    if (n.tex && this.atlas) {
      let e = this.atlas.rect(n.tex);
      ((h = Sl + e.page), (g = kl(e, p, m, c, t(n.tex))));
    }
    let _ = e.at(u, d, h);
    if (n.cap === `oblique`)
      _.face(
        [
          [a, o, l],
          [s, o, l],
          [s, c, l],
          [a, c, l],
        ],
        [0, 0, 1],
        g,
      );
    else if (n.cap === `own`) {
      let r = n.capTex ?? (n.tex ? void 0 : this.src.caps);
      if (n.capTex && this.atlas) {
        let r = this.atlas.rect(n.capTex);
        e.at(u, d, Sl + r.page).face(
          [
            [a, o, l],
            [s, o, l],
            [s, c, l],
            [a, c, l],
          ],
          [0, 0, 1],
          kl(r, p, m - l, c, t(n.capTex)),
        );
      } else
        r
          ? e.at(u, d, bl).face(
              [
                [a, o, l],
                [s, o, l],
                [s, c, l],
                [a, c, l],
              ],
              [0, 0, 1],
              {
                x0: f.x,
                y0: f.y - l,
                ax: 0,
                ay: 0,
                aw: r.width,
                ah: r.height,
                baseY: 0,
                height: 0,
                dens: t(r),
              },
            )
          : _.face(
              [
                [a, o, l],
                [s, o, l],
                [s, c, l],
                [a, c, l],
              ],
              [0, 0, 1],
              { ...g, y0: g.y0 - l },
            );
    }
    if (n.section && n.sectionTex && this.atlas) {
      let r = this.atlas.rect(n.sectionTex);
      e.at(u, d, Sl + r.page).face(
        [
          [a, c, 0],
          [s, c, 0],
          [s, c, l],
          [a, c, l],
        ],
        [0, 1, 0],
        kl(r, a, c - l, c, t(n.sectionTex)),
      );
    } else
      n.section
        ? i(a, s, c, 0, l, [0, 1, 0])
        : _.face(
            [
              [a, c, 0],
              [s, c, 0],
              [s, c, l],
              [a, c, l],
            ],
            [0, 1, 0],
            g,
          );
    let v = n.side ?? 0.6;
    (_.face(
      [
        [a, o, 0],
        [a, c, 0],
        [a, c, l],
        [a, o, l],
      ],
      [-1, 0, 0],
      { ...g, x0: g.x0 - 0.5, shade: v },
    ),
      _.face(
        [
          [s, o, 0],
          [s, c, 0],
          [s, c, l],
          [s, o, l],
        ],
        [1, 0, 0],
        { ...g, x0: g.x0 + 0.5, shade: v },
      ),
      n.back !== !1 &&
        _.face(
          [
            [a, o, 0],
            [s, o, 0],
            [s, o, l],
            [a, o, l],
          ],
          [0, -1, 0],
          g,
        ));
  }
  buildGpu(e, t) {
    (this.disposeGpu(), (this.floorTex = e), (this.section ??= Dl(this.o.bg)));
    let n = new He(this.section);
    ((n.flipY = !1),
      (n.colorSpace = ``),
      (n.generateMipmaps = !1),
      (n.magFilter = n.minFilter = R),
      (n.needsUpdate = !0),
      (this.sectionTex = n));
    let { lit: r, fog: i } = this.o,
      a = (e) =>
        e
          ? [
              Tr({ map: e, lit: r, occl: this.occl, pass: `cut`, fog: i }),
              Tr({ map: e, lit: r, occl: this.occl, pass: `shadow` }),
            ]
          : null;
    this.mats = [
      a(e),
      a(t),
      a(n),
      ...(this.atlas?.textures ?? []).map((e) => a(e)),
    ];
    for (let e of this.solids) {
      let t = this.mats[e.page];
      if (!t) continue;
      let n = Or(e.arrays);
      n.computeBoundingSphere();
      let r = new I(n, t[0]);
      ((r.customDepthMaterial = r.customDistanceMaterial = t[1]),
        (r.frustumCulled = !1),
        (r.matrixAutoUpdate = !1),
        (e.mesh = r),
        this.root.add(r));
    }
  }
  setFloor(e) {
    if (!e || e === this.floorTex) return;
    this.floorTex = e;
    let t = this.mats[yl];
    if (t) for (let n of t) n.uniforms.uMap.value = e;
  }
  update(e) {
    (this.occl.uOccl.value.set(e.occl.sx, e.occl.sy, e.occl.wy, 1),
      this.occl.uOcclView.value.set(e.cam.W, e.cam.H));
    let t = e.f.fp;
    this.fp = t;
    for (let e of this.solids)
      e.mesh &&
        (e.mesh.visible =
          e.b[3] >= t.gx0 &&
          e.b[0] <= t.gx0 + t.fw &&
          e.b[4] >= t.gy0 &&
          e.b[1] <= t.gy0 + t.fh + Tl);
  }
  casters(e) {
    let t = this.fp;
    for (let n of this.solids)
      n.mesh &&
        n.b[3] >= t.gx0 - El &&
        n.b[0] <= t.gx0 + t.fw + El &&
        n.b[4] >= t.gy0 - El &&
        n.b[1] <= t.gy0 + t.fh + El &&
        e.push(n.mesh);
  }
  stats() {
    return {
      vertices: this.solids.reduce(
        (e, t) => e + t.arrays.position.length / 3,
        0,
      ),
      meshes: this.solids.length,
    };
  }
  get texBytes() {
    return Cl * wl * 4;
  }
  disposeGpu() {
    for (let e of this.solids)
      e.mesh &&= (this.root.remove(e.mesh), e.mesh.geometry.dispose(), null);
    for (let e of this.mats) if (e) for (let t of e) t.dispose();
    ((this.mats = []), this.sectionTex?.dispose(), (this.sectionTex = null));
  }
  dispose() {
    (this.disposeGpu(), (this.solids = []));
  }
};
function kl(e, t, n, r, i = 1) {
  return {
    x0: t,
    y0: n,
    ax: e.x,
    ay: e.y,
    aw: e.w,
    ah: e.h,
    baseY: r,
    height: 0,
    dens: i,
  };
}
var Al = 160,
  jl = 160,
  Ml = 500,
  Nl = 10;
function Pl(e) {
  let t = new He(e);
  return (
    (t.flipY = !1),
    (t.colorSpace = ``),
    (t.generateMipmaps = !1),
    (t.magFilter = t.minFilter = R),
    (t.wrapS = t.wrapT = ze),
    (t.needsUpdate = !0),
    t
  );
}
function Fl(e, t, n) {
  let r = new Oe(e, t, n, Ie, Se);
  return (
    (r.unpackAlignment = 1),
    (r.colorSpace = ``),
    (r.magFilter = r.minFilter = R),
    (r.generateMipmaps = !1),
    (r.needsUpdate = !0),
    r
  );
}
function Il(e) {
  e.traverse((e) => {
    let t = e.material;
    if (t) for (let e of Array.isArray(t) ? t : [t]) vt(e) && _t(e, !0);
  });
}
function Ll(e) {
  return e.root.children[0]?.material.uniforms.uMap?.value ?? null;
}
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
            t = new et(),
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
        (t.uSpFogMask.value = this.maskTex ?? xt()));
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
function Wl() {
  let e = new L();
  return (
    e.setAttribute(
      `position`,
      new U(new Float32Array([0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0]), 3),
    ),
    e.setIndex([0, 1, 2, 0, 2, 3]),
    e
  );
}
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
  cu = class {
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
        let a = Object.assign(pt(), St());
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
          o ? du : this.scenery.lights(),
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
        ne = l ? mo.ao * uu.ao : mo.ao;
      return (
        (k.atmos =
          this.cal || f === `minimal`
            ? null
            : {
                lit: m,
                M: t.cam.M,
                eye: t.cam.eye,
                ao: ne,
                rays: u ? mo.rays * (l ? uu.rays : 1) * te : 0,
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
          : r.uLift.value.setRGB(yt[0] * a, yt[1] * a, yt[2] * a),
        this.lights.sky(e ? e.dark : t, n));
    }
    clearOf(e) {
      let t = e.sun ? 0 : Math.min(1, Math.max(0, e.dark)),
        n = (e, n) => (e / 255) * (1 - t) + n * t;
      return this.clear.setRGB(
        n((e.bg >> 16) & 255, yt[0]),
        n((e.bg >> 8) & 255, yt[1]),
        n(e.bg & 255, yt[2]),
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
      (r.uNightFall.value.set(e.me.x, e.me.y, lu.nightReach, t ? 0 : s),
        r.uCity.value.set(_ * 16 + 8, _e * 16 + 8, lu.cityR[0], lu.cityR[1]));
      let c = this.host.time;
      (r.uCloud.value.set(
        this.cal || !n ? 0 : lu.cloud * (1 - s),
        1 / lu.cloudSize,
        c * lu.wind[0],
        c * lu.wind[1],
      ),
        (r.uSpFogOn.value = 0),
        (r.uSpFogTex.value = r.uSpFogMask.value = xt()));
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
            if (!vt(n)) continue;
            let r = !!n.defines && `HD_SPACE` in n.defines;
            ((t || r !== e) && !this.twinned.has(n) && this.twins(n),
              t || _t(n, e));
          }
      });
    }
    twins(e) {
      this.twinned.add(e);
      let t = new qe(),
        n = new L();
      for (let r of [!1, !0]) {
        let i = { ...e.defines };
        r ? (i[gt] = 1) : delete i[gt];
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
  lu = {
    nightReach: 150,
    cityR: [1440, 1760],
    cloud: 0.3,
    cloudSize: 260,
    wind: [9, 4],
  },
  uu = { ao: 1, rays: 1 },
  du = [];
function fu(e) {
  return new cu(e);
}
export { fu as createHd2d };
