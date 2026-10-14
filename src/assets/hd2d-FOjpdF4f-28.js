// hd2d-FOjpdF4f 28 — the
// Lines 8809-9132 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
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
