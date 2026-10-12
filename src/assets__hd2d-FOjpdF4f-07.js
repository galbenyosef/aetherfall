// assets__hd2d-FOjpdF4f 07 — math
// Lines 2485-2774 of readable/assets__hd2d-FOjpdF4f.pretty.js (statement-aligned).
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
