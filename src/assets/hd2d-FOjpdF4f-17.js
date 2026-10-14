// hd2d-FOjpdF4f 17 — vec3
// Lines 5219-5484 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
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
