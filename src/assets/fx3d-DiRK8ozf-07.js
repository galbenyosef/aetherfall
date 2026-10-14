// fx3d-DiRK8ozf 07 — vec3
// Lines 30390-30716 of readable/assets/fx3d-DiRK8ozf.pretty.js (statement-aligned).
function Xd(e) {
  return (
    (e.transparent = !0),
    (e.depthTest = !0),
    (e.depthWrite = !1),
    (e.side = 2),
    (e.blending = 5),
    (e.blendEquation = 100),
    (e.blendSrc = 201),
    (e.blendDst = 205),
    (e.blendSrcAlpha = 201),
    (e.blendDstAlpha = 205),
    e
  );
}
var Zd = null,
  Qd = null,
  $d = null;
function ef() {
  if (!Zd) {
    ((Zd = new da(1, 1, 1, 18, 1, !0)),
      Zd.rotateZ(-Math.PI / 2),
      Zd.translate(0.5, 0, 0));
    let e = new Float32Array(966),
      t = [];
    for (let n = 0; n <= 160; n++)
      if ((e.set([n / 160, -1, 0, n / 160, 1, 0], n * 6), n < 160)) {
        let e = n * 2;
        t.push(e, e + 1, e + 2, e + 1, e + 3, e + 2);
      }
    ((Qd = new Pr()),
      Qd.setAttribute(`position`, new yr(e, 3)),
      Qd.setIndex(t));
    let n = new _a(1, 0.1, 5, 22);
    (n.rotateY(Math.PI / 2),
      ($d = new Fo()),
      $d.setIndex(n.index),
      $d.setAttribute(`position`, n.getAttribute(`position`)),
      $d.setAttribute(`normal`, n.getAttribute(`normal`)),
      $d.setAttribute(
        `aK`,
        new Ti(new Float32Array(Array.from({ length: 16 }, (e, t) => t)), 1),
      ),
      ($d.instanceCount = 16));
  }
  return { tube: Zd, coil: Qd, tick: $d };
}
var tf = class e {
    group = new Mn();
    u;
    spec;
    t0 = 0;
    layers = [];
    coils = [];
    ticks;
    glowMesh;
    hazeMesh;
    constructor(e, t) {
      let n = ef();
      this.u = {
        uTime: e.uTime,
        uRamp: e.uRamp,
        uView: e.uView,
        uLen: { value: 1 },
        uI: { value: 1 },
        uRow: { value: 0 },
        uSeed: { value: Math.random() },
        uHollow: { value: 0 },
      };
      let r = (e, r) => {
        let i = Xd(
          new Ea({
            vertexShader: Wd,
            fragmentShader: Gd,
            defines: { ...t },
            uniforms: { ...this.u, uR: { value: r }, uLayer: { value: e } },
          }),
        );
        this.layers.push(i);
        let a = new si(n.tube, i);
        return (
          (a.frustumCulled = !1),
          (a.renderOrder = 4 - e),
          this.group.add(a),
          a
        );
      };
      (r(0, 0.45), (this.glowMesh = r(1, 1.5)), (this.hazeMesh = r(2, 3.6)));
      for (let e of [0, Math.PI]) {
        let r = Xd(
            new Ea({
              vertexShader: Kd,
              fragmentShader: qd,
              defines: { ...t },
              uniforms: {
                ...this.u,
                uPhase: { value: e },
                uHR: { value: 2.4 },
              },
            }),
          ),
          i = new si(n.coil, r);
        ((i.frustumCulled = !1),
          (i.renderOrder = 5),
          this.coils.push(i),
          this.group.add(i));
      }
      let i = Xd(
        new Ea({
          vertexShader: Jd,
          fragmentShader: Yd,
          uniforms: { ...this.u, uRingR: { value: 2.2 } },
        }),
      );
      ((this.ticks = new si(n.tick, i)),
        (this.ticks.frustumCulled = !1),
        (this.ticks.renderOrder = 6),
        this.group.add(this.ticks));
    }
    setup(e, t) {
      ((this.spec = e), (this.t0 = t + (e.delay ?? 0)));
      let n = e.r ?? 1;
      ((this.u.uRow.value = e.ramp),
        (this.u.uHollow.value = +!!e.hollow),
        (this.u.uSeed.value = Math.random()),
        (this.layers[0].uniforms.uR.value = 0.45 * n),
        (this.layers[1].uniforms.uR.value = 1.5 * n),
        (this.layers[2].uniforms.uR.value = 3.6 * n),
        (this.hazeMesh.renderOrder = e.hollow ? 0 : 2));
      for (let t of this.coils)
        ((t.visible = e.coils !== !1),
          (t.material.uniforms.uHR.value = 2.4 * n));
      ((this.ticks.visible = !!e.ticks),
        (this.ticks.material.uniforms.uRingR.value = 2.2 * n),
        (this.glowMesh.visible = !0));
    }
    state(e, t) {
      let n = this.spec,
        r = e - this.t0;
      if (((t.on = r >= 0 && r <= n.life), !t.on)) return t;
      let i = r / n.life,
        a = n.ang + (n.sweep ?? 0) * i,
        o = n.grow ? Math.min(1, r / n.grow) : 1,
        s = n.fade ? Math.min(1, (n.life - r) / n.fade) : 1;
      return (
        t.s.set(n.sx, n.sy, n.sz),
        t.e.set(n.sx + Math.cos(a) * n.len, n.sy + Math.sin(a) * n.len, n.ez),
        t.e.sub(t.s).multiplyScalar(o).add(t.s),
        (t.f = i),
        (t.k = s),
        t
      );
    }
    dispose() {
      this.group.traverse((e) => e.material?.dispose());
    }
    static tmp = { on: !1, s: new W(), e: new W(), f: 0, k: 1 };
    static q = new It();
    static d = new W();
    static X = new W(1, 0, 0);
    update(t) {
      let n = this.state(t, e.tmp);
      if (!n.on) return ((this.group.visible = t < this.t0), t < this.t0);
      this.group.visible = !0;
      let r = e.d.copy(n.e).sub(n.s),
        i = Math.max(0.01, r.length());
      return (
        r.divideScalar(i),
        this.group.position.copy(n.s),
        this.group.quaternion.copy(e.q.setFromUnitVectors(e.X, r)),
        this.group.scale.set(1, n.k * 0.85 + 0.15, n.k * 0.85 + 0.15),
        this.group.updateMatrixWorld(!0),
        (this.u.uLen.value = i),
        (this.u.uI.value =
          (this.spec.I ?? 1) *
          (0.25 + 0.75 * n.k) *
          (0.92 + 0.08 * Math.sin(t * 61 + this.u.uSeed.value * 40))),
        !0
      );
    }
  },
  nf = class {
    shared;
    defines;
    root = new Mn();
    live = [];
    pool = [];
    st = { on: !1, s: new W(), e: new W(), f: 0, k: 1 };
    constructor(e, t = {}) {
      ((this.shared = e), (this.defines = t));
    }
    add(e, t) {
      let n = this.pool.pop() ?? new tf(this.shared, this.defines);
      return (
        n.setup(e, t),
        this.live.push(n),
        this.root.add(n.group),
        n.update(t),
        n
      );
    }
    update(e) {
      for (let t = this.live.length - 1; t >= 0; t--) {
        let n = this.live[t];
        n.update(e) ||
          (this.root.remove(n.group),
          this.live.splice(t, 1),
          this.pool.push(n));
      }
    }
    *segments(e) {
      for (let t of this.live) {
        let n = t.state(e, this.st);
        n.on &&
          (yield {
            s: n.s,
            e: n.e,
            k: n.k,
            ramp: t.spec.ramp,
            I: t.spec.I ?? 1,
            hollow: !!t.spec.hollow,
          });
      }
    }
    clear() {
      for (let e of this.live) (this.root.remove(e.group), this.pool.push(e));
      this.live.length = 0;
    }
    dispose() {
      this.clear();
      for (let e of this.pool) e.dispose();
      this.pool = [];
      let e = ef();
      for (let t of [e.tube, e.coil, e.tick]) t.dispose();
    }
  },
  rf = `
attribute vec3 aLook;   // ramp row, inner glow (heat for molten), kind (0 crystal, 1 rock, 2 molten rock)
varying vec3 vW; varying vec3 vLook;
void main() {
  vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vW = wp.xyz;
  vLook = aLook;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  af = `
${Cu}
${wu}
uniform float uTime; uniform float uStone;
varying vec3 vW; varying vec3 vLook;
void main() {
  vec3 N = normalize(cross(dFdx(vW), dFdy(vW)));
  vec3 V = FX_VIEW;
  if (dot(N, V) < 0.0) N = -N;
  vec3 L = normalize(vec3(-0.45, -0.35, 0.82));
  float ndl = max(dot(N, L), 0.0);
  float ndv = max(dot(N, V), 0.0);
  float spec = pow(max(dot(reflect(-L, N), V), 0.0), 26.0);
  float facet = fract(sin(dot(floor(N * 3.0 + 0.5), vec3(12.9898, 78.233, 45.164))) * 43758.5453);
  vec3 col;
  if (vLook.z < 0.5) {
    float g = vLook.y;
    vec3 body = rampAt(vLook.x, 1.2 + ndl * 1.7 + facet * 0.5, 0.0);
    vec3 inner = rampAt(vLook.x, 3.4, 0.0) * g * (0.75 + 0.25 * sin(uTime * 7.0 + vW.x * 0.3 + vW.y * 0.2));
    vec3 rim = rampAt(vLook.x, 4.0, 0.0) * pow(1.0 - ndv, 2.2) * (0.8 + g * 1.4);
    col = body * 0.85 + inner * (0.35 + 0.65 * ndv) + rim + vec3(spec) * 2.2;
  } else if (vLook.z < 1.5) {
    col = rampAt(uStone, 0.8 + ndl * 2.7 + facet * 0.6, 0.0) + vec3(spec) * 0.12;
  } else {
    // molten rock: a dark crust, some faces still liquid, a burning rim (vLook.y = heat)
    vec3 crust = rampAt(uStone, 0.3 + ndl * 1.5 + facet * 0.4, 0.0) * 0.6;
    float lava = smoothstep(0.45, 0.6, facet);
    vec3 hot = rampAt(vLook.x, 2.4 + facet * 1.6, 0.0) * vLook.y * (1.4 + 0.3 * sin(uTime * 9.0 + vW.x * 0.7));
    col = mix(crust, hot, lava * min(1.0, vLook.y)) + rampAt(vLook.x, 3.0, 0.0) * pow(1.0 - ndv, 2.0) * vLook.y * 0.9;
  }
  gl_FragColor = vec4(col, 1.0);
}
`;
function of(e, t, n = {}) {
  return new Ea({
    vertexShader: rf,
    fragmentShader: af,
    defines: { ...n },
    uniforms: {
      uTime: e.uTime,
      uRamp: e.uRamp,
      uView: e.uView,
      uStone: { value: t },
    },
    side: 2,
    depthTest: !0,
    depthWrite: !0,
  });
}
function sf() {
  let e = new ma(
    [new U(0, -0.5), new U(0.24, -0.28), new U(0.27, 0.18), new U(0, 0.5)],
    6,
  );
  return (
    e.rotateX(Math.PI / 2),
    e.translate(0, 0, 0.5),
    e.index ? e.toNonIndexed() : e
  );
}
function cf() {
  let e = new ha(1, 0);
  return (e.scale(1.5, 0.55, 0.42), e.index ? e.toNonIndexed() : e);
}
function lf() {
  let e = new ha(1, 0);
  return (e.scale(0.85, 0.85, 1.3), e.index ? e.toNonIndexed() : e);
}
function uf() {
  let e = new pa(1, 0),
    t = e.getAttribute(`position`);
  for (let e = 0; e < t.count; e++) {
    let n =
        Math.sin(
          t.getX(e) * 12.9898 + t.getY(e) * 78.233 + t.getZ(e) * 37.719,
        ) * 43758.5453,
      r = 0.75 + (n - Math.floor(n)) * 0.5;
    t.setXYZ(e, t.getX(e) * r, t.getY(e) * r, t.getZ(e) * r * 0.8);
  }
  return e.index ? e.toNonIndexed() : e;
}
