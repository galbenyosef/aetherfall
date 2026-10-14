// hd2d-FOjpdF4f 16 — float
// Lines 5093-5218 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
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
