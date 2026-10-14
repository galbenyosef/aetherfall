// hd2d-FOjpdF4f 02 — float
// Lines 163-510 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
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
