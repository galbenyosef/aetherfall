// assets__hd2d-FOjpdF4f 03 — defines
// Lines 511-649 of readable/assets__hd2d-FOjpdF4f.pretty.js (statement-aligned).
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
