// assets__hd2d-FOjpdF4f 30 — anisotropy
// Lines 9408-9641 of readable/assets__hd2d-FOjpdF4f.pretty.js (statement-aligned).
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
