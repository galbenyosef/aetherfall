// assets__hd2d-FOjpdF4f 04 — pass
// Lines 650-929 of readable/assets__hd2d-FOjpdF4f.pretty.js (statement-aligned).
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
