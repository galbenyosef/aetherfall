// hd2d-FOjpdF4f 20 — vec2
// Lines 6057-6983 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
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
