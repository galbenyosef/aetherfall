// fx3d-DiRK8ozf 06 — life
// Lines 27646-30389 of readable/assets/fx3d-DiRK8ozf.pretty.js (statement-aligned).
var bd = { ring: 0, glow: 1, scorch: 2, frost: 3, swirl: 4 },
  xd = `${xu}
${wu}
in vec3 position;
in vec4 aP; in vec4 aR; in vec4 aL; in vec4 aE;
uniform mat4 projectionMatrix;
uniform float uTime;
out vec2 vQ; out float vF; out float vA; out float vSeed; out float vAs;
flat out int vKind; out float vRow; out float vI; out float vSpin;
void main() {
  float age = uTime - aP.w;
  float life = aR.z;
  if (age < 0.0 || age >= life) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  float f = age / life;
  float e = aE.x < 0.5 ? f : aE.x < 1.5 ? 1.0 - (1.0 - f) * (1.0 - f) : 1.0 - pow(1.0 - f, 4.0);
  float r = mix(aR.x, aR.y, e);
  vec2 q = position.xy;
  gl_Position = projectionMatrix * vec4(aP.x + q.x * r, aP.y + q.y * r * FX_SQUASH, aP.z, 1.0);
  float a = aE.y > 0.0 ? clamp(age / aE.y, 0.0, 1.0) : 1.0;
  a *= 1.0 - smoothstep(1.0 - max(aE.z, 0.001), 1.0, f);
  float sp = aE.w * age * 6.2831853;
  vQ = vec2(q.x * cos(sp) - q.y * sin(sp), q.x * sin(sp) + q.y * cos(sp));
  vF = f; vA = a; vSeed = aL.w; vAs = aL.z;
  vKind = int(aR.w + 0.5); vRow = aL.x; vI = aL.y; vSpin = aE.w;
}
`,
  Sd = `${xu}
${Cu}
uniform float uTime;
in vec2 vQ; in float vF; in float vA; in float vSeed; in float vAs;
flat in int vKind; in float vRow; in float vI; in float vSpin;
out vec4 o;
float h2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n2(vec2 x) { vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
float fbm2(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * n2(p); p = p * 2.07 + 3.1; a *= 0.5; } return s; }
void main() {
  float r = length(vQ);
  if (r > 1.0) discard;
  vec2 sq = vQ + vSeed * 13.0;
  vec3 col = vec3(0.0); float al = 0.0;
  if (vKind == 0) {
    float ring = exp(-pow((r - 0.9) / 0.055, 2.0));
    float fill = 0.16 * smoothstep(0.92, 0.35, r) * smoothstep(0.0, 0.9, r);
    float n = fbm2(sq * 5.0);
    col = rampAt(vRow, 1.8 + 1.0 * ring, 0.0) * (ring * (0.7 + 0.6 * n) + fill) * vI;
    al = ring * 0.4;
  } else if (vKind == 1) {
    float g = exp(-r * r * 3.5) * (1.0 - r);
    col = rampAt(vRow, 2.4 + 1.6 * exp(-r * r * 8.0), 0.0) * g * vI;
  } else if (vKind == 2) {
    float n = fbm2(sq * 3.0);
    float edge = r + (n - 0.5) * 0.4;
    al = smoothstep(1.0, 0.5, edge) * 0.72;
    float cr = smoothstep(0.58, 0.72, fbm2(sq * 7.0 + 5.0)) * smoothstep(0.95, 0.25, edge);
    float heat = (1.0 - vF) * (1.0 - vF) * cr;
    col = vec3(0.035, 0.028, 0.03) * al + rampAt(vRow, 2.0 + heat * 2.0, 0.0) * heat * vI * 2.2;
  } else if (vKind == 3) {
    // frost: the ground whitens in patches, with glints
    float n = fbm2(sq * 4.0);
    float edge = r + (n - 0.5) * 0.45;
    float body = smoothstep(1.0, 0.6, edge);
    float hf = fbm2(sq * 16.0 + 7.0);
    vec2 cell = floor(vQ * 22.0);
    float tw = step(0.97, h2(cell + vSeed)) * (0.5 + 0.5 * sin(uTime * 9.0 + h2(cell) * 40.0));
    al = body * (0.3 + 0.3 * smoothstep(0.35, 0.7, hf));
    col = rampAt(vRow, 3.5 + 0.5 * hf, 0.0) * al * 0.85 + rampAt(vRow, 4.0, 0.0) * tw * body * 1.2 * vI;
  } else {
    float th = atan(vQ.y, vQ.x);
    float arms = 0.5 + 0.5 * sin(th * 3.0 + log(r + 0.04) * 6.5 - uTime * vSpin * 2.0);
    float n = fbm2(sq * 4.0 + uTime * 0.5);
    arms = smoothstep(0.45, 1.0, arms * (0.7 + 0.6 * n)) * smoothstep(1.0, 0.45, r) * smoothstep(0.08, 0.3, r);
    float hole = smoothstep(0.42, 0.05, r);
    al = hole * 0.85 + arms * 0.25;
    col = rampAt(vRow, 2.2 + arms * 1.8, 0.0) * arms * vI + rampAt(vRow, 0.3, 0.0) * hole * 0.6;
  }
  o = vec4(col * vA, al * vA * vAs);
}
`,
  Cd = class {
    cap;
    mesh;
    arr;
    attrs;
    geo;
    head = 0;
    wrapped = !1;
    maxEnd = 0;
    spans = [];
    constructor(e, t = 256, n = {}) {
      this.cap = t;
      let r = new Fo();
      (r.setAttribute(
        `position`,
        new yr(new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]), 3),
      ),
        r.setIndex([0, 1, 2, 0, 2, 3]));
      let i = [`aP`, `aR`, `aL`, `aE`];
      ((this.arr = i.map(() => new Float32Array(t * 4))),
        (this.attrs = i.map((e, t) => {
          let n = new Ti(this.arr[t], 4);
          return (n.setUsage(Xe), r.setAttribute(e, n), n);
        })),
        (r.instanceCount = 0),
        (this.geo = r));
      let a = new Da({
        glslVersion: Ze,
        vertexShader: xd,
        fragmentShader: Sd,
        defines: { ...n },
        uniforms: { uTime: e.uTime, uRamp: e.uRamp, uSquash: e.uSquash },
        transparent: !0,
        depthTest: !0,
        depthWrite: !1,
        side: 2,
        blending: 5,
        blendEquation: 100,
        blendSrc: 201,
        blendDst: 205,
        blendSrcAlpha: 201,
        blendDstAlpha: 205,
      });
      ((this.mesh = new si(r, a)),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = 1));
    }
    add(e, t) {
      t >= this.maxEnd &&
        !this.spans.length &&
        ((this.head = 0), (this.wrapped = !1));
      let n = this.head;
      ((this.head = (this.head + 1) % this.cap),
        this.head === 0 && (this.wrapped = !0));
      let r = t + (e.delay ?? 0);
      this.maxEnd = Math.max(this.maxEnd, r + e.life);
      let i = n * 4,
        [a, o, s, c] = this.arr;
      (a.set([e.x, e.y, 0.25, r], i),
        o.set([e.r0, e.r1 ?? e.r0, e.life, e.kind], i),
        s.set([e.ramp, e.I ?? 1, e.a ?? 1, Math.random()], i),
        c.set([e.ease ?? 1, e.fadeIn ?? 0, e.fadeOut ?? 0.4, e.spin ?? 0], i));
      let l = this.spans[this.spans.length - 1];
      l && l[0] + l[1] === n ? l[1]++ : this.spans.push([n, 1]);
    }
    get busyUntil() {
      return this.maxEnd;
    }
    flush(e) {
      if (
        (e >= this.maxEnd &&
          !this.spans.length &&
          ((this.head = 0), (this.wrapped = !1)),
        (this.geo.instanceCount = this.wrapped ? this.cap : this.head),
        this.spans.length)
      ) {
        for (let e of this.attrs) {
          e.clearUpdateRanges();
          for (let [t, n] of this.spans) e.addUpdateRange(t * 4, n * 4);
          e.needsUpdate = !0;
        }
        this.spans = [];
      }
    }
    clear() {
      for (let e of this.arr) e.fill(0);
      for (let e of this.attrs) (e.clearUpdateRanges(), (e.needsUpdate = !0));
      ((this.spans = []),
        (this.head = 0),
        (this.wrapped = !1),
        (this.maxEnd = 0));
    }
  },
  PIXELS_PER_UNIT = 16,
  Td = 0.6 * PIXELS_PER_UNIT,
  Ed = 0.4 * PIXELS_PER_UNIT,
  Dd = Math.PI * 2,
  Od = 0.35,
  rand = (e, t) => e + Math.random() * (t - e),
  clamp01 = (e) => Math.max(0, Math.min(1, e)),
  smoothstep = (e, t, n) => {
    let r = clamp01((n - e) / (t - e));
    return r * r * (3 - 2 * r);
  },
  jd = new W(),
  Md = new W(),
  Nd = new It(),
  Pd = new It(),
  Fd = new W(1, 0, 0),
  Id = new W(0, 0, 1),
  ELEMENT_COLORS = {
    pyro: Q.ember,
    cryo: Q.rime,
    storm: Q.storm,
    void: Q.void,
    marksman: Q.blight,
    paladin: Q.gilt,
    scout: Q.rime,
  },
  elementColor = (e) => ELEMENT_COLORS[e] ?? Q.aether,
  toLayerPoint = (e, t, n) => [e * PIXELS_PER_UNIT, t * PIXELS_PER_UNIT + n, n],
  MageFx = class {
    kit;
    bolts = new Map();
    rifts = new Map();
    meteors = new Map();
    lightning = [];
    tendrils = [];
    spikes = [];
    hail = [];
    emitters = [];
    timers = [];
    dt = 0;
    me = { x: 0, y: 0 };
    constructor(e) {
      ((this.kit = e), (e.lightStep[Q.storm] = 2));
    }
    get L() {
      return this.kit.layer;
    }
    get now() {
      return this.kit.now;
    }
    emit(e) {
      this.L.particles.emit(e, this.kit.now);
    }
    near(e, t, n) {
      return n || Math.hypot(this.me.x - e / PIXELS_PER_UNIT, this.me.y - t / PIXELS_PER_UNIT) < 10;
    }
    later(e, t) {
      this.timers.push({ at: this.now + e, fn: t });
    }
    emitter(e, t, n, r = 0) {
      this.emitters.push({
        t0: this.now + r,
        t1: this.now + r + e,
        rate: t,
        acc: 0,
        fn: n,
      });
    }
    every(e, t, n, r) {
      for (
        e[t] =
          (e[t] ?? Math.random()) +
          this.dt * n * this.kit.density * this.L.settings.density;
        e[t] >= 1;
      )
        (--e[t], r());
    }
    cast(e, t, r, i, o, s, c, l) {
      if ((n(e.id) || a(e.id)) && e.kind !== `nova` && e.kind !== `strike`)
        return;
      let u = elementColor(t),
        d = toLayerPoint(r, i, Td);
      switch ((this.castFlash(u, d), e.kind)) {
        case `nova`: {
          let n = (e.radius ?? 3) * PIXELS_PER_UNIT;
          t === `cryo`
            ? this.glacialRing(r * PIXELS_PER_UNIT, (i + 0.6) * PIXELS_PER_UNIT, n, l)
            : this.flameNova(u, r * PIXELS_PER_UNIT, (i + 0.6) * PIXELS_PER_UNIT, n, l);
          break;
        }
        case `strike`: {
          let n = (e.radius ?? 2) * PIXELS_PER_UNIT,
            r = e.delay ?? 0.6;
          e.id === `thunder` || t === `storm`
            ? this.gather(o * PIXELS_PER_UNIT, s * PIXELS_PER_UNIT, n, r, l)
            : e.id === `judgement`
              ? this.gather(o * PIXELS_PER_UNIT, s * PIXELS_PER_UNIT, n, r, l, Q.gilt)
              : this.meteorCall(o * PIXELS_PER_UNIT, s * PIXELS_PER_UNIT, n, r);
          break;
        }
        case `chain`:
          this.chain(u, [d, ...c.map((e) => toLayerPoint(e.x, e.y, Ed))], l);
          break;
        case `drain`:
          this.drain(toLayerPoint(o, s, Ed), d, l);
      }
    }
    land(e, t, n, r, i) {
      let a = (e.radius ?? 2) * PIXELS_PER_UNIT;
      e.id === `thunder` || t === `storm`
        ? this.thunder(n * PIXELS_PER_UNIT, r * PIXELS_PER_UNIT, a, i)
        : e.id === `judgement`
          ? this.thunder(n * PIXELS_PER_UNIT, r * PIXELS_PER_UNIT, a, i, Q.gilt)
          : this.meteorImpact(n * PIXELS_PER_UNIT, r * PIXELS_PER_UNIT, a, i);
    }
    impact(e, t, n, i = !1) {
      let [a, o, s] = toLayerPoint(e, t, Td),
        c = i ? 1.8 : 1,
        l = this.kit;
      switch (n) {
        case `pyro`:
          (l.flare(a, o, s, 10 * c, 0.18, Q.ember, 4),
            l.spray(a, o, s, 26 * c, {
              ramp: Q.ember,
              speed: [20, 85 * c],
              up: [-20, 50],
              drag: 3.5,
              life: [0.25, 0.5],
              h0: 3.4,
              h1: 0.8,
              s0: [2.5, 4 * c],
              s1: 1,
              I: 1.3,
              add: Od,
            }),
            l.sparks(a, o, s, 12 * c, Q.ember, void 0, Math.PI, [40, 130 * c]),
            l.spray(a, o, s, 6 * c, {
              ramp: Q.ash,
              speed: [5, 20],
              up: [10, 30],
              drag: 1.5,
              life: [0.6, 1],
              h0: 1.3,
              h1: 0.3,
              s0: [3, 5],
              s1: 10,
              shape: Z.smoke,
              add: !1,
              a: 0.4,
            }),
            l.ring(a, o, s, 2, 14 * c, 0.25, Q.ember, 2.2),
            l.light(a, o, s, Q.ember, 2.2 * c, 30 * c, 0.4),
            l.shock(a, o, 20 * c, 1.6 * c, 0.3, s),
            l.decal({
              x: a,
              y: o,
              r0: 6 * c,
              life: 2.5,
              kind: bd.scorch,
              ramp: Q.ember,
              I: 1,
              fadeIn: 0.05,
            }),
            i &&
              (l.decal({
                x: a,
                y: o,
                r0: 3,
                r1: 1.6 * PIXELS_PER_UNIT,
                life: 0.35,
                kind: bd.ring,
                ramp: Q.ember,
                I: 2.6,
                ease: 2,
              }),
              l.radial(a, o, 2, 30, {
                ramp: Q.ember,
                speed: [1.6 * PIXELS_PER_UNIT * 2.6, 1.6 * PIXELS_PER_UNIT * 3],
                drag: 3,
                up: [5, 25],
                life: [0.35, 0.5],
                h0: 3.2,
                h1: 0.7,
                s0: [2.5, 4],
                s1: 4,
                I: 1.2,
                add: Od,
              })));
          break;
        case `cryo`:
          (l.shatter(a, o, s, Q.rime, 0.9 * c),
            l.spray(a, o, s, 8 * c, {
              ramp: Q.rime,
              speed: [8, 30],
              up: [0, 15],
              drag: 2,
              life: [0.5, 0.9],
              h0: 3.6,
              h1: 2.8,
              s0: [2, 3],
              s1: 8,
              shape: Z.smoke,
              add: !1,
              a: 0.3,
            }),
            l.decal({
              x: a,
              y: o,
              r0: 6 * c,
              r1: 8 * c,
              life: 2.5,
              kind: bd.frost,
              ramp: Q.rime,
              I: 1,
              fadeIn: 0.05,
            }));
          break;
        case `storm`:
          (l.flare(a, o, s, 8 * c, 0.15, Q.storm, 4),
            l.sparks(
              a,
              o,
              s,
              18 * c,
              Q.storm,
              void 0,
              Math.PI,
              [60, 200],
              [3, 6],
            ),
            l.ring(a, o, s, 2, 11 * c, 0.2, Q.storm, 2.2),
            l.light(a, o, s, Q.storm, 2 * c, 26 * c, 0.3));
          for (let e = 0; e < 4 * c; e++) {
            let e = Math.random() * Dd,
              t = rand(6, 13);
            this.bolt(
              [a, o, s],
              [a + Math.cos(e) * t, o + Math.sin(e) * t * r.fx, 0],
              {
                life: 0.14,
                w: 0.9,
                I: 2.2,
                rough: 0.25,
                depth: 3,
                branches: 0,
                delay: rand(0, 0.05),
              },
            );
          }
          l.decal({
            x: a,
            y: o,
            r0: 4 * c,
            life: 1.5,
            kind: bd.scorch,
            ramp: Q.storm,
            I: 0.8,
          });
          break;
        default: {
          let e = Q.void;
          (l.orbit(a, o, 20 * c, {
            ramp: e,
            r: [7, 13 * c],
            w: [7, 10],
            k: 6,
            z: [s - 3, s + 3],
            life: [0.18, 0.24],
            s0: [1, 1.5],
            s1: 0.4,
            h0: 4,
            h1: 3,
            I: [2, 3],
            shape: Z.spark,
            stretch: 0.015,
          }),
            this.L.vortex(a, o, 18 * c, 0.6, 0.4, 0.35, this.now, !1, s),
            this.later(0.16, () => {
              (l.flare(a, o, s, 9 * c, 0.2, e, 3.5),
                l.ring(a, o, s, 2, 13 * c, 0.25, e, 2),
                l.sparks(
                  a,
                  o,
                  s,
                  12 * c,
                  e,
                  void 0,
                  Math.PI,
                  [40, 120],
                  [2, 4],
                ),
                l.spray(a, o, s, 7 * c, {
                  ramp: e,
                  speed: [10, 35],
                  up: [5, 20],
                  drag: 2,
                  life: [0.5, 0.8],
                  h0: 0.6,
                  h1: 0.1,
                  s0: [3, 4],
                  s1: 9,
                  shape: Z.smoke,
                  add: !1,
                  a: 0.6,
                }),
                l.light(a, o, s, e, 1.8 * c, 24 * c, 0.4));
            }),
            l.decal({
              x: a,
              y: o,
              r0: 4,
              r1: 8 * c,
              life: 0.9,
              kind: bd.swirl,
              ramp: e,
              I: 1.2,
              spin: 1,
              fadeOut: 0.5,
            }));
        }
      }
    }
    arcs(e, t) {
      this.chain(
        elementColor(e),
        t.map((e) => toLayerPoint(e.x, e.y, Ed)),
        !1,
      );
    }
    blink(e, t, n, r, i) {
      let a = this.kit,
        o = elementColor(e),
        s = [t * PIXELS_PER_UNIT, n * PIXELS_PER_UNIT, 10],
        c = [r * PIXELS_PER_UNIT, i * PIXELS_PER_UNIT, 10];
      (a.orbit(s[0], s[1], 18, {
        ramp: o,
        r: [8, 15],
        w: [6, 9],
        k: 7,
        z: [2, 20],
        life: [0.18, 0.26],
        s0: [1, 1.6],
        s1: 0.4,
        h0: 4,
        h1: 3,
        I: [2, 3],
        shape: Z.spark,
        stretch: 0.02,
      }),
        a.flare(s[0], s[1], s[2], 7, 0.18, o, 3),
        a.spray(s[0], s[1], 8, 8, {
          ramp: o,
          speed: [5, 18],
          up: [5, 15],
          drag: 2,
          life: [0.4, 0.7],
          h0: 0.8,
          h1: 0.2,
          s0: [4, 6],
          s1: 9,
          shape: Z.smoke,
          add: !1,
          a: 0.35,
          jitter: 4,
        }),
        e === `storm`
          ? this.bolt(s, c, {
              life: 0.22,
              w: 1.5,
              I: 3,
              rough: 0.12,
              depth: 5,
              branches: 1,
            })
          : this.tendrils.push({
              a: s,
              b: c,
              t0: this.now,
              life: 0.3,
              fadeIn: 0.02,
              fadeOut: 0.25,
              strands: [
                {
                  bow: 0,
                  amp: 1.2,
                  waves: 2,
                  speed: 20,
                  w: 2.6,
                  I: 2.6,
                  ramp: o,
                  core: 1,
                },
              ],
            }));
      for (let e = 0; e < 14; e++) {
        let t = (e + Math.random()) / 14;
        this.emit({
          x: s[0] + (c[0] - s[0]) * t,
          y: s[1] + (c[1] - s[1]) * t,
          z: 10 + rand(-4, 4),
          vx: rand(-8, 8),
          vy: rand(-8, 8),
          vz: rand(-5, 10),
          life: rand(0.25, 0.5),
          s0: rand(1, 1.8),
          s1: 0.3,
          ramp: o,
          h0: 4,
          h1: 2.5,
          I: 2,
        });
      }
      (a.flare(c[0], c[1], c[2], 9, 0.2, o, 3.5),
        a.decal({
          x: c[0],
          y: c[1],
          r0: 3,
          r1: 16,
          life: 0.32,
          kind: bd.ring,
          ramp: o,
          I: 2.4,
          ease: 2,
        }),
        a.sparks(c[0], c[1], c[2], 12, o, void 0, Math.PI, [40, 110]),
        a.light(c[0], c[1], c[2], o, 2, 28, 0.35),
        e === `pyro` &&
          a.spray(c[0], c[1], 4, 14, {
            ramp: o,
            speed: [15, 45],
            up: [10, 40],
            drag: 3,
            life: [0.25, 0.45],
            h0: 3.3,
            h1: 0.8,
            s0: [2, 3],
            s1: 0.8,
            I: 1.3,
            add: Od,
          }),
        e === `cryo` &&
          a.decal({
            x: c[0],
            y: c[1],
            r0: 9,
            r1: 11,
            life: 2,
            kind: bd.frost,
            ramp: o,
            I: 1,
          }),
        e === `void` &&
          (this.L.vortex(s[0], s[1], 16, 0.8, 0.3, 0.3, this.now, !1, s[2]),
          a.spray(c[0], c[1], 8, 6, {
            ramp: o,
            speed: [8, 25],
            up: [5, 15],
            drag: 2,
            life: [0.4, 0.7],
            h0: 0.6,
            h1: 0.1,
            s0: [3, 5],
            s1: 8,
            shape: Z.smoke,
            add: !1,
            a: 0.5,
          })));
    }
    update(e, t, n) {
      ((this.kit.now = e),
        (this.dt = t),
        (this.me = n.me),
        this.L.ribbons.reset());
      for (let t = this.timers.length - 1; t >= 0; t--)
        if (e >= this.timers[t].at) {
          let e = this.timers[t];
          (this.timers.splice(t, 1), e.fn());
        }
      for (let n = this.emitters.length - 1; n >= 0; n--) {
        let r = this.emitters[n];
        if (!(e < r.t0)) {
          for (
            r.acc += t * r.rate * this.kit.density * this.L.settings.density;
            r.acc >= 1;
          )
            (--r.acc, r.fn(e - r.t0));
          e >= r.t1 && this.emitters.splice(n, 1);
        }
      }
      for (let e of this.bolts.values()) e.seen = !1;
      for (let e of n.projectiles) {
        let t = this.bolts.get(e);
        (t || this.bolts.set(e, (t = this.newBolt(e))),
          (t.seen = !0),
          this.fly(e, t));
      }
      for (let [e, t] of this.bolts)
        t.seen || (this.dropBolt(t), this.bolts.delete(e));
      for (let e of this.rifts.values()) e.seen = !1;
      for (let e of n.rifts) {
        let t = this.rifts.get(e);
        (t || this.rifts.set(e, (t = this.openRift(e, n.time))),
          (t.seen = !0),
          this.riftFrame(e, t));
      }
      for (let [e, t] of this.rifts)
        t.seen || (this.closeRift(t), this.rifts.delete(e));
      for (let e of this.meteors.values()) e.seen = !1;
      for (let e of n.meteors) {
        let t = this.meteors.get(e);
        (t || this.meteors.set(e, (t = this.newMeteor())),
          (t.seen = !0),
          this.fall(e, t));
      }
      for (let [e, t] of this.meteors)
        t.seen || (this.dropMeteor(t), this.meteors.delete(e));
      (this.drawLightning(e),
        this.drawTendrils(e),
        this.growSpikes(e),
        this.fallHail(t));
    }
    clear() {
      for (let e of this.bolts.values()) this.dropBolt(e);
      this.bolts.clear();
      for (let e of this.rifts.values()) this.closeRift(e, !0);
      this.rifts.clear();
      for (let e of this.meteors.values()) this.dropMeteor(e);
      this.meteors.clear();
      for (let e of this.spikes) this.L.pools.prism.release(e.idx);
      for (let e of this.hail) this.L.pools.shard.release(e.idx);
      ((this.spikes = []),
        (this.hail = []),
        (this.lightning = []),
        (this.tendrils = []),
        (this.emitters = []),
        (this.timers = []));
    }
    castFlash(e, [t, n, r]) {
      let i = this.kit;
      (i.flare(t, n, r, 5, 0.16, e, 2.2),
        i.ring(t, n, r, 1.5, 9, 0.2, e, 1.6),
        i.sparks(t, n, r, 5, e, void 0, Math.PI, [20, 70], [1.5, 3]),
        i.light(t, n, r, e, 1, 18, 0.22));
    }
    bolt(e, t, n) {
      this.lightning.push({
        a: e,
        b: t,
        t0: this.now + (n.delay ?? 0),
        life: n.life,
        w: n.w,
        I: n.I,
        ramp: n.ramp ?? Q.storm,
        rough: n.rough ?? 0.16,
        depth: n.depth ?? 5,
        branches: n.branches ?? 1,
        hz: n.hz ?? 22,
        seed: Math.floor(Math.random() * 1e6),
        env: n.env,
        light: n.light ?? 0,
      });
    }
    drawLightning(e) {
      let t = this.L.ribbons;
      for (let n = this.lightning.length - 1; n >= 0; n--) {
        let r = this.lightning[n],
          i = e - r.t0;
        if (i < 0) continue;
        if (i > r.life) {
          this.lightning.splice(n, 1);
          continue;
        }
        let a = r.env
          ? r.env(i)
          : (i < 0.035 ? 1.3 : 0.7 + 0.3 * Math.random()) *
            (1 - smoothstep(r.life - 0.1, r.life, i));
        if (a <= 0.01) continue;
        let o = md(r.seed + Math.floor(i * r.hz)),
          s = vd(r.a, r.b, r.rough, r.depth, o);
        t.strip(s, r.w, r.ramp, r.I * a, 1, 0.5);
        let c = s.length,
          l = Math.hypot(r.b[0] - r.a[0], r.b[1] - r.a[1], r.b[2] - r.a[2]);
        for (let e = 0; e < r.branches; e++) {
          let e = Math.floor(c * (0.15 + o() * 0.55)),
            n = s[e],
            i = s[Math.min(c - 1, e + 1)],
            u = i[0] - n[0],
            d = i[1] - n[1],
            f = i[2] - n[2],
            p = Math.hypot(u, d, f) || 1;
          ((u = u / p + (o() - 0.5) * 1.4),
            (d = d / p + (o() - 0.5) * 1),
            (f = f / p + (o() - 0.5) * 1.4));
          let m = l * (0.12 + o() * 0.22),
            h = Math.hypot(u, d, f) || 1,
            g = [
              n[0] + (u / h) * m,
              n[1] + (d / h) * m,
              Math.max(0, n[2] + (f / h) * m),
            ];
          t.strip(
            vd(n, g, r.rough * 1.3, Math.max(2, r.depth - 2), o),
            r.w * 0.55,
            r.ramp,
            r.I * a * 0.7,
            0.6,
            0.15,
          );
        }
        r.light > 0 &&
          this.kit.lightLine(r.a, r.b, r.ramp, r.light * a, 12, 0.05);
      }
    }
    drawTendrils(e) {
      let t = this.L.ribbons;
      for (let n = this.tendrils.length - 1; n >= 0; n--) {
        let r = this.tendrils[n],
          i = e - r.t0;
        if (i < 0) continue;
        if (i > r.life) {
          this.tendrils.splice(n, 1);
          continue;
        }
        let a = smoothstep(0, r.fadeIn, i) * (1 - smoothstep(r.life - r.fadeOut, r.life, i));
        for (let e of r.strands)
          t.strip(
            yd(r.a, r.b, 28, e.bow, e.amp, e.waves, -i * e.speed),
            e.w,
            e.ramp,
            e.I * a,
            e.core,
            0.2,
          );
      }
    }
    newBolt(e) {
      let t = this.L,
        n = elementColor(e.school),
        [r, i, a] = toLayerPoint(e.x, e.y, Td),
        o = {
          orb: -1,
          shard: -1,
          light: this.kit.light(r, i, a, n, 1.3, 20, 1e9, !0),
          acc: {},
          spin: Math.random() * Dd,
          seen: !0,
        };
      return (
        e.school === `pyro`
          ? (o.orb = t.orbs.alloc(Ju.fire, Q.ember, 1))
          : e.school === `storm`
            ? (o.orb = t.orbs.alloc(Ju.plasma, Q.storm, 2))
            : e.school === `void`
              ? (o.orb = t.orbs.alloc(Ju.void, Q.void, 1.5))
              : (o.shard = t.pools.shard.alloc(Q.rime, 1.4, 0)),
        e.school === `pyro` && ((o.light.I = 1.6), (o.light.rad = 24)),
        e.school === `cryo` && ((o.light.I = 0.9), (o.light.rad = 18)),
        o
      );
    }
    dropBolt(e) {
      (this.L.orbs.release(e.orb),
        this.L.pools.shard.release(e.shard),
        (e.light.life = 0));
    }
    fly(e, t) {
      let n = this.L,
        [r, i, a] = toLayerPoint(e.x, e.y, Td),
        o = Math.hypot(e.vx, e.vy) || 1,
        s = e.vx / o,
        c = e.vy / o,
        l = o * PIXELS_PER_UNIT;
      ((t.light.x = r), (t.light.y = i), (t.light.z = a));
      let u = (e, t) => ({
        vx: -s * l * e + rand(-t, t),
        vy: -c * l * e + rand(-t, t),
      });
      switch (e.school) {
        case `pyro`:
          (n.orbs.set(t.orb, r, i, a, 4, s, c, 0, 1.4),
            this.every(t.acc, `flame`, 130, () =>
              this.emit({
                x: r + rand(-2, 2),
                y: i + rand(-2, 2),
                z: a + rand(-1.5, 1.5),
                ...u(0.15, 12),
                vz: rand(10, 30),
                drag: 2,
                life: rand(0.25, 0.45),
                s0: rand(2.8, 4),
                s1: 0.8,
                ramp: Q.ember,
                h0: 3.2,
                h1: 0.6,
                I: 1.2,
                add: Od,
              }),
            ),
            this.every(t.acc, `ember`, 30, () =>
              this.emit({
                x: r,
                y: i,
                z: a,
                ...u(0.2, 30),
                vz: rand(20, 60),
                grav: 120,
                drag: 0.8,
                life: rand(0.4, 0.8),
                s0: rand(0.5, 0.8),
                ramp: Q.ember,
                h0: 4,
                h1: 2.5,
                I: rand(2, 4),
                shape: Z.spark,
                stretch: 0.03,
              }),
            ),
            this.every(t.acc, `smoke`, 16, () =>
              this.emit({
                x: r,
                y: i,
                z: a + 1,
                ...u(0.05, 6),
                vz: rand(12, 25),
                drag: 1.2,
                life: rand(0.6, 1),
                s0: 2,
                s1: 7,
                ramp: Q.ash,
                h0: 1.2,
                h1: 0.4,
                shape: Z.smoke,
                add: !1,
                a: 0.35,
              }),
            ));
          break;
        case `cryo`:
          ((t.spin += this.dt * 14),
            Nd.setFromUnitVectors(Fd, jd.set(s, c, 0)).multiply(
              Pd.setFromAxisAngle(Fd, t.spin),
            ),
            n.pools.shard.set(
              t.shard,
              jd.set(r, i, a),
              Nd,
              Md.set(3.4, 2.8, 2.8),
            ),
            this.every(t.acc, `halo`, 60, () =>
              this.emit({
                x: r,
                y: i,
                z: a,
                life: 0.09,
                s0: 4.5,
                s1: 3.5,
                ramp: Q.rime,
                h0: 3,
                h1: 3,
                I: 0.35,
              }),
            ),
            this.every(t.acc, `frost`, 70, () =>
              this.emit({
                x: r + rand(-1.5, 1.5),
                y: i + rand(-1.5, 1.5),
                z: a + rand(-1.5, 1.5),
                ...u(0.05, 15),
                vz: rand(-8, 8),
                drag: 2,
                life: rand(0.25, 0.45),
                s0: rand(0.8, 1.3),
                s1: 0.3,
                ramp: Q.rime,
                h0: 4,
                h1: 2.5,
                I: 1.5,
              }),
            ),
            this.every(t.acc, `mist`, 22, () =>
              this.emit({
                x: r,
                y: i,
                z: a,
                ...u(0.04, 6),
                vz: rand(-3, 4),
                drag: 1.5,
                life: rand(0.5, 0.8),
                s0: 1.5,
                s1: 6,
                ramp: Q.rime,
                h0: 3.6,
                h1: 3,
                shape: Z.smoke,
                add: !1,
                a: 0.22,
              }),
            ),
            this.every(t.acc, `glint`, 14, () =>
              this.emit({
                x: r + rand(-3, 3),
                y: i + rand(-3, 3),
                z: a + rand(-2, 2),
                life: 0.25,
                s0: 2.2,
                s1: 0.5,
                ramp: Q.rime,
                h0: 4,
                h1: 4,
                I: 3,
                shape: Z.flare,
              }),
            ));
          break;
        case `storm`: {
          (n.orbs.set(t.orb, r, i, a, 2.2, s, c, 0, 1.8, rand(1.6, 2.4)),
            (t.light.I = rand(0.7, 1.3)));
          let e = n.ribbons,
            o = md(Math.floor(Math.random() * 1e6));
          for (let t = 0; t < 2; t++) {
            let t = Math.random() * Dd,
              n = rand(4, 8);
            e.strip(
              vd(
                [r, i, a],
                [
                  r + Math.cos(t) * n - s * 3,
                  i + Math.sin(t) * n * 0.5 - c * 3,
                  Math.max(0, a + Math.sin(t * 1.7) * n),
                ],
                0.3,
                3,
                o,
              ),
              0.9,
              Q.storm,
              rand(1.2, 2),
              1,
              0.4,
            );
          }
          (this.every(t.acc, `streak`, 140, () =>
            this.emit({
              x: r,
              y: i,
              z: a,
              ...u(0.25, 40),
              vz: rand(-30, 30),
              drag: 4,
              life: rand(0.12, 0.25),
              s0: 0.6,
              ramp: Q.storm,
              h0: 4,
              h1: 3,
              I: 3,
              shape: Z.spark,
              stretch: 0.06,
            }),
          ),
            this.every(t.acc, `glow`, 60, () =>
              this.emit({
                x: r + rand(-1, 1),
                y: i + rand(-1, 1),
                z: a,
                life: 0.2,
                s0: 1.5,
                s1: 0.4,
                ramp: Q.storm,
                h0: 3.5,
                h1: 2,
                I: 1.6,
              }),
            ));
          break;
        }
        default:
          (n.orbs.set(t.orb, r, i, a, 3, s, c, 0, 1.2),
            (t.spin += this.dt * 16),
            this.every(t.acc, `helix`, 90, () => {
              let e = t.spin + (Math.random() < 0.5 ? 0 : Math.PI),
                n = -c * Math.cos(e) * 3.6,
                o = s * Math.cos(e) * 3.6,
                l = Math.sin(e) * 3.6;
              this.emit({
                x: r + n,
                y: i + o,
                z: a + l,
                vx: rand(-4, 4),
                vy: rand(-4, 4),
                vz: rand(-2, 4),
                life: rand(0.35, 0.5),
                s0: 1.2,
                s1: 0.4,
                ramp: Q.void,
                h0: 4,
                h1: 2.5,
                I: 2,
              });
            }),
            this.every(t.acc, `smoke`, 40, () =>
              this.emit({
                x: r,
                y: i,
                z: a,
                ...u(0.1, 8),
                vz: rand(-4, 6),
                drag: 1.5,
                life: rand(0.5, 0.8),
                s0: 2.5,
                s1: 7,
                ramp: Q.void,
                h0: 0.6,
                h1: 0.1,
                shape: Z.smoke,
                add: !1,
                a: 0.55,
              }),
            ));
      }
    }
    flameNova(e, t, n, i, a) {
      let o = this.kit;
      (o.decal({
        x: t,
        y: n,
        r0: 4,
        r1: i,
        life: 0.42,
        kind: bd.ring,
        ramp: e,
        I: 1.1,
        ease: 2,
        fadeOut: 0.5,
      }),
        o.decal({
          x: t,
          y: n,
          r0: i * 0.4,
          r1: i * 1.15,
          life: 0.7,
          kind: bd.glow,
          ramp: e,
          I: 0.5,
          fadeOut: 0.8,
        }),
        o.decal({
          x: t,
          y: n,
          r0: i * 0.85,
          r1: i * 0.95,
          life: 3,
          kind: bd.scorch,
          ramp: e,
          I: 1,
          fadeIn: 0.15,
          fadeOut: 0.4,
          a: 0.45,
        }),
        o.radial(t, n, 2, 80, {
          ramp: e,
          speed: [i * 3 * 0.92, i * 3 * 1.02],
          drag: 3,
          up: [6, 22],
          life: [0.42, 0.6],
          h0: 3.1,
          h1: 0.6,
          s0: [3.5, 5],
          s1: 6,
          I: [1, 1.3],
          add: Od,
        }),
        o.radial(t, n, 4, 50, {
          ramp: e,
          speed: [i * 3 * 0.85, i * 3],
          drag: 3,
          up: [30, 60],
          life: [0.3, 0.5],
          h0: 3.3,
          h1: 0.8,
          s0: [2, 3],
          s1: 1,
          I: 1.2,
          add: Od,
        }),
        o.radial(t, n, 3, 40, {
          ramp: e,
          speed: [i * 2, i * 4],
          drag: 2.5,
          up: [40, 110],
          grav: 220,
          life: [0.5, 0.9],
          shape: Z.spark,
          s0: [0.5, 0.8],
          h0: 4,
          h1: 2.5,
          I: [2, 4],
          stretch: 0.04,
        }),
        o.radial(t, n, 6, 20, {
          ramp: Q.ash,
          speed: [i * 2.2, i * 2.8],
          drag: 3,
          up: [15, 30],
          life: [0.9, 1.4],
          add: !1,
          a: 0.35,
          shape: Z.smoke,
          h0: 1.2,
          h1: 0.3,
          s0: 4,
          s1: 12,
        }),
        o.flare(t, n, 8, 10, 0.2, e, 2.5),
        o.light(t, n, 6, e, 3.2, i * 0.9, 0.55));
      for (let a = 0; a < 8; a++) {
        let s = (a / 8) * Dd;
        o.light(
          t + Math.cos(s) * i * 0.75,
          n + Math.sin(s) * i * 0.75 * r.fx,
          4,
          e,
          1.2,
          16,
          0.45,
        );
      }
      (o.shock(t, n, i * 1.1, 3.5, 0.5), a && o.ca(0.12));
    }
    glacialRing(e, t, n, i) {
      let a = this.kit,
        o = Q.rime;
      ([
        [0.36, 9, 0],
        [0.66, 14, 0.06],
        [0.94, 19, 0.12],
      ].forEach(([i, a, s], c) => {
        for (let l = 0; l < a; l++) {
          let u = ((l + Math.random() * 0.6) / a) * Dd + c * 0.4,
            d = n * i * rand(0.92, 1.06),
            f = rand(0.25, 0.5);
          this.spikes.push({
            idx: -1,
            x: e + Math.cos(u) * d,
            y: t + Math.sin(u) * d * r.fx,
            dir: new W(Math.cos(u) * f, Math.sin(u) * f * r.fx, 1).normalize(),
            roll: Math.random() * Dd,
            H: rand(10, 15) * (0.85 + c * 0.15),
            w: rand(5, 7),
            t0: this.now + s + rand(0, 0.03),
            life: 0.5 + c * 0.06,
            ramp: o,
          });
        }
      }),
        a.decal({
          x: e,
          y: t,
          r0: 5,
          r1: n,
          life: 0.35,
          kind: bd.ring,
          ramp: o,
          I: 1.3,
          ease: 2,
        }),
        a.decal({
          x: e,
          y: t,
          r0: n * 0.6,
          r1: n * 1.05,
          life: 3.2,
          kind: bd.frost,
          ramp: o,
          I: 1,
          ease: 2,
          fadeIn: 0.1,
          fadeOut: 0.5,
        }),
        a.radial(e, t, 3, 60, {
          ramp: o,
          speed: [n * 2.6, n * 3.1],
          drag: 3,
          up: [3, 12],
          life: [0.6, 1],
          add: !1,
          a: 0.3,
          shape: Z.smoke,
          h0: 3.6,
          h1: 2.6,
          s0: [3, 5],
          s1: 9,
        }),
        a.radial(e, t, 4, 40, {
          ramp: o,
          speed: [n * 1.5, n * 3.5],
          drag: 2.5,
          up: [20, 60],
          life: [0.5, 0.9],
          s0: [0.6, 1.1],
          h0: 4,
          h1: 3.5,
          I: [1.5, 3],
        }),
        a.flare(e, t, 8, 10, 0.22, o, 2.5),
        a.light(e, t, 6, o, 1.5, n * 0.8, 0.5));
      for (let i = 0; i < 8; i++) {
        let s = (i / 8) * Dd;
        a.light(
          e + Math.cos(s) * n * 0.7,
          t + Math.sin(s) * n * 0.7 * r.fx,
          4,
          o,
          0.6,
          14,
          0.6,
        );
      }
      (a.shock(e, t, n * 1.1, 2.5, 0.45), i && a.ca(0.2));
    }
    growSpikes(e) {
      let t = this.L.pools.prism;
      for (let n = this.spikes.length - 1; n >= 0; n--) {
        let r = this.spikes[n],
          i = e - r.t0;
        if (i < 0) continue;
        if (r.idx < 0) {
          if (((r.idx = t.alloc(r.ramp, 0.55)), r.idx < 0)) {
            this.spikes.splice(n, 1);
            continue;
          }
          this.kit.spray(r.x, r.y, 1, 2, {
            ramp: r.ramp,
            speed: [5, 18],
            up: [5, 20],
            drag: 2,
            life: [0.4, 0.7],
            h0: 3.6,
            h1: 2.8,
            s0: 2,
            s1: 5,
            shape: Z.smoke,
            add: !1,
            a: 0.3,
          });
        }
        if (i > r.life) {
          let e = r.H * 0.6;
          (this.kit.crystalBits(
            r.x + r.dir.x * e,
            r.y + r.dir.y * e,
            r.dir.z * e,
            2,
            r.ramp,
            [20, 60],
          ),
            this.kit.sparks(
              r.x,
              r.y,
              r.dir.z * e,
              2,
              r.ramp,
              void 0,
              Math.PI,
              [20, 60],
              [1.5, 3],
            ),
            t.release(r.idx),
            this.spikes.splice(n, 1));
          continue;
        }
        let a = 1 - (1 - clamp01(i / 0.08)) ** 3;
        (Nd.setFromUnitVectors(Id, r.dir).multiply(
          Pd.setFromAxisAngle(Id, r.roll),
        ),
          t.set(
            r.idx,
            jd.set(r.x, r.y, -0.12 * r.H),
            Nd,
            Md.set(r.w, r.w, r.H * a),
          ));
      }
    }
    meteorCall(e, t, n, r) {
      this.kit.decal({
        x: e,
        y: t,
        r0: n * 0.4,
        r1: n * 0.95,
        life: r + 0.08,
        kind: bd.glow,
        ramp: Q.ember,
        I: 1,
        ease: 0,
        fadeIn: r * 0.9,
        fadeOut: 0.1,
      });
    }
    newMeteor() {
      let e = this.L;
      return {
        rock: e.pools.rock.alloc(Q.ember, 1.6, 2),
        orb: e.orbs.alloc(Ju.fire, Q.ember, 1.1),
        light: this.kit.light(0, 0, 0, Q.ember, 1.2, 40, 1e9, !0),
        spin: 0,
        axis: new W(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5,
        ).normalize(),
        acc: {},
        seen: !0,
        last: null,
      };
    }
    dropMeteor(e) {
      (this.L.pools.rock.release(e.rock),
        this.L.orbs.release(e.orb),
        (e.light.life = 0));
    }
    fall(e, t) {
      let n = this.L,
        r = clamp01(e.t / e.dur),
        i = r * r,
        a = e.x + (e.tx - e.x) * i,
        o = e.y + (e.ty - e.y) * i,
        s = e.ty,
        c = Math.max(0, e.ty - o),
        l = [a, s, c],
        u = t.last ?? [a + 3, s, c + 6],
        d = a - u[0],
        f = c - u[2],
        p = Math.hypot(d, f) || 1;
      ((d /= p), (f /= p));
      let m = p / Math.max(this.dt, 0.001);
      ((t.last = l),
        (t.spin += this.dt * 7),
        n.pools.rock.set(
          t.rock,
          jd.set(a, s, c),
          Nd.setFromAxisAngle(t.axis, t.spin),
          Md.set(5.5, 5.5, 5.5),
        ),
        n.orbs.set(t.orb, a - d * 6, s, c - f * 6, 6.5, d, 0, f, 1.9),
        (t.light.x = a),
        (t.light.y = s),
        (t.light.z = c),
        (t.light.I = 1.2 + 2.2 * i),
        (t.light.rad = 40 + 34 * i));
      let h = (e, t) => ({
        vx: -d * m * e + rand(-t, t),
        vy: rand(-t, t) * 0.5,
        vz: -f * m * e + rand(-t, t),
      });
      (this.every(t.acc, `fire`, 200, () =>
        this.emit({
          x: a - d * 8 + rand(-4, 4),
          y: s,
          z: c - f * 8 + rand(-4, 4),
          ...h(0.12, 20),
          drag: 2.5,
          life: rand(0.3, 0.6),
          s0: rand(4.5, 7),
          s1: 1.5,
          ramp: Q.ember,
          h0: 3.3,
          h1: 0.6,
          I: 1.2,
          add: Od,
        }),
      ),
        this.every(t.acc, `smoke`, 45, () =>
          this.emit({
            x: a,
            y: s,
            z: c,
            ...h(0.04, 8),
            drag: 1.2,
            life: rand(0.9, 1.5),
            s0: 4,
            s1: 13,
            ramp: Q.ash,
            h0: 1.2,
            h1: 0.2,
            shape: Z.smoke,
            add: !1,
            a: 0.45,
          }),
        ),
        this.every(t.acc, `ember`, 50, () =>
          this.emit({
            x: a,
            y: s,
            z: c,
            ...h(0.1, 40),
            grav: 150,
            drag: 0.6,
            life: rand(0.5, 0.9),
            s0: rand(0.5, 0.9),
            ramp: Q.ember,
            h0: 4,
            h1: 2.5,
            I: rand(2, 4),
            shape: Z.spark,
            stretch: 0.03,
          }),
        ));
    }
    meteorImpact(e, t, n, i) {
      let a = this.kit,
        o = this.L,
        s = Q.ember;
      (a.flare(e, t, 10, 24, 0.3, s, 4),
        a.ring(e, t, 6, 4, n * 1.4, 0.35, s, 1.8),
        a.decal({
          x: e,
          y: t,
          r0: 6,
          r1: n * 1.25,
          life: 0.5,
          kind: bd.ring,
          ramp: s,
          I: 1.4,
          ease: 2,
        }),
        a.decal({
          x: e,
          y: t,
          r0: n,
          r1: n * 1.4,
          life: 1.4,
          kind: bd.glow,
          ramp: s,
          I: 1,
          fadeOut: 0.8,
        }),
        a.decal({
          x: e,
          y: t,
          r0: n * 0.95,
          life: 7,
          kind: bd.scorch,
          ramp: s,
          I: 1.3,
          fadeIn: 0.05,
          fadeOut: 0.3,
        }),
        a.spray(e, t, 6, 70, {
          ramp: s,
          speed: [30, 150],
          up: [20, 110],
          drag: 2.6,
          life: [0.4, 0.85],
          h0: 3.4,
          h1: 0.6,
          s0: [4, 7],
          s1: 2,
          I: [1.1, 1.5],
          add: Od,
        }),
        a.radial(e, t, 2, 50, {
          ramp: s,
          speed: [n * 2.5, n * 3.2],
          drag: 3,
          up: [5, 25],
          life: [0.5, 0.8],
          s0: [3, 5],
          s1: 6,
          h0: 3.2,
          h1: 0.7,
          I: 1.2,
          add: Od,
        }));
      let c = a.n(10);
      for (let n = 0; n < c; n++) {
        let n = Math.random() * Dd,
          i = rand(50, 140);
        o.chunks.rock.spawn(
          e,
          t,
          4,
          Math.cos(n) * i,
          Math.sin(n) * i * r.fx,
          rand(90, 200),
          rand(1.6, 3),
          rand(1.6, 2.4),
          s,
          1.4,
          2,
          this.now,
        );
      }
      (a.rocks(e, t, 8, void 0, Math.PI, [50, 140]),
        a.sparks(e, t, 6, 50, s, void 0, Math.PI, [60, 220], [2.5, 5]),
        a.dust(e, t, 26, void 0, Math.PI, [40, 120]),
        a.spray(e, t, 8, 30, {
          ramp: Q.ash,
          speed: [5, 30],
          up: [25, 60],
          drag: 1,
          life: [1.4, 2.4],
          s0: [6, 9],
          s1: 22,
          a: 0.5,
          h0: 0.9,
          h1: 0.2,
          add: !1,
          shape: Z.smoke,
          jitter: 6,
        }),
        a.light(e, t, 12, s, 4.5, n * 1.6, 0.9),
        a.shock(e, t, n * 1.7, 5.5, 0.55),
        this.near(e, t, i) && a.ca(i ? 0.7 : 0.3));
      let l = a.light(e, t, 6, s, 1.4, n, 1.8, !0);
      (this.emitter(1.6, 26, (i) => {
        let a = Math.random() * Dd,
          o = Math.sqrt(Math.random()) * n * 0.6,
          c = 1 - i / 1.6;
        (this.emit({
          x: e + Math.cos(a) * o,
          y: t + Math.sin(a) * o * r.fx,
          z: 1,
          vx: rand(-4, 4),
          vy: rand(-3, 3),
          vz: rand(20, 45),
          drag: 1,
          life: rand(0.3, 0.6),
          s0: rand(2, 3) * (0.5 + c * 0.5),
          s1: 0.5,
          ramp: s,
          h0: 3.3,
          h1: 0.8,
          I: 1.2,
          add: Od,
        }),
          (l.I = 1.4 * c * rand(0.8, 1.1)));
      }),
        this.emitter(1.6, 6, () =>
          this.emit({
            x: e + rand(-n * 0.4, n * 0.4),
            y: t + rand(-n * 0.3, n * 0.3),
            z: 2,
            vx: rand(-3, 3),
            vy: rand(-3, 3),
            vz: rand(15, 30),
            drag: 0.8,
            life: rand(1, 1.6),
            s0: 4,
            s1: 12,
            ramp: Q.ash,
            h0: 1,
            h1: 0.2,
            shape: Z.smoke,
            add: !1,
            a: 0.35,
          }),
        ));
    }
    gather(e, t, n, i, a, o = Q.storm) {
      let s = this.kit;
      (s.orbit(e, t, 26, {
        ramp: o,
        r: [n * 0.2, n * 1.1],
        w: [0.6, 1.2],
        k: -0.3,
        z: [130, 150],
        life: [i + 0.25, i + 0.6],
        add: !1,
        shape: Z.smoke,
        a: 0.55,
        h0: 0.6,
        h1: 0.2,
        s0: [10, 14],
        s1: 20,
      }),
        s.decal({
          x: e,
          y: t,
          r0: n * 0.5,
          r1: n,
          life: i,
          kind: bd.glow,
          ramp: o,
          I: 0.7,
          ease: 0,
          fadeIn: i * 0.9,
          fadeOut: 0.05,
        }),
        this.emitter(i, 18, () =>
          this.emit({
            x: e + rand(-n, n),
            y: t,
            z: 140 + rand(-8, 8),
            life: 0.09,
            s0: 14,
            s1: 18,
            ramp: o,
            h0: 2.2,
            h1: 2,
            I: 0.5,
          }),
        ),
        this.emitter(i, 4, () => {
          let r = [e + rand(-n, n), t, 140 + rand(-6, 6)];
          this.bolt(r, [r[0] + rand(-20, 20), t, 140 + rand(-8, 8)], {
            life: 0.08,
            w: 0.8,
            I: 1.6,
            rough: 0.25,
            depth: 3,
            branches: 0,
            ramp: o,
          });
        }),
        this.emitter(i, 14, () => {
          let i = Math.random() * Dd,
            a = [e + Math.cos(i) * n, t + Math.sin(i) * n * r.fx, 0.5],
            s = i + rand(-0.35, 0.35);
          this.bolt(
            a,
            [
              e + Math.cos(s) * n * rand(0.7, 1),
              t + Math.sin(s) * n * r.fx * rand(0.7, 1),
              0.5,
            ],
            {
              life: 0.08,
              w: 0.6,
              I: 1.6,
              rough: 0.25,
              depth: 3,
              branches: 0,
              ramp: o,
            },
          );
        }),
        this.near(e, t, a) && s.dim(0.22, i + 0.15));
    }
    thunder(e, t, n, i, a = Q.storm) {
      let o = this.kit,
        s = [e + rand(-25, 25), t, 260];
      (this.bolt(s, [e, t, 0], {
        life: 0.38,
        w: 2.6,
        I: 3,
        rough: 0.13,
        depth: 6,
        branches: 4,
        hz: 10,
        env: (e) =>
          e < 0.07
            ? 1.4
            : e < 0.11
              ? 0.15
              : e < 0.17
                ? 1.1
                : e < 0.21
                  ? 0.2
                  : e < 0.26
                    ? 0.9
                    : 0.9 * (1 - smoothstep(0.26, 0.38, e)),
        light: 2.5,
        ramp: a,
      }),
        o.flare(e, t, 6, 20, 0.28, a, 3.5),
        o.decal({
          x: e,
          y: t,
          r0: 4,
          r1: n * 1.35,
          life: 0.4,
          kind: bd.ring,
          ramp: a,
          I: 1.8,
          ease: 2,
        }),
        o.decal({
          x: e,
          y: t,
          r0: n * 0.8,
          r1: n * 1.3,
          life: 0.9,
          kind: bd.glow,
          ramp: a,
          I: 1,
          fadeOut: 0.8,
        }),
        o.decal({
          x: e,
          y: t,
          r0: n * 0.6,
          life: 5,
          kind: bd.scorch,
          ramp: a,
          I: 0.8,
          fadeIn: 0.05,
          fadeOut: 0.3,
        }));
      for (let i = 0; i < 9; i++) {
        let o = (i / 9) * Dd + rand(-0.3, 0.3),
          s = n * rand(0.6, 1.2);
        this.bolt(
          [e, t, 0.5],
          [e + Math.cos(o) * s, t + Math.sin(o) * s * r.fx, 0.5],
          {
            life: 0.25,
            w: 1.2,
            I: 2.5,
            rough: 0.2,
            depth: 4,
            branches: 1,
            delay: rand(0, 0.08),
            ramp: a,
          },
        );
      }
      (o.sparks(e, t, 4, 50, a, void 0, Math.PI, [70, 240], [3, 6]),
        o.radial(e, t, 2, 30, {
          ramp: a,
          speed: [n * 2, n * 3.5],
          drag: 3,
          up: [10, 50],
          life: [0.3, 0.6],
          s0: [1, 1.6],
          s1: 0.4,
          h0: 4,
          h1: 3,
          I: [2, 3.5],
        }),
        o.dust(e, t, 20, void 0, Math.PI, [40, 110]),
        o.rocks(e, t, 6, void 0, Math.PI, [40, 120]),
        o.light(e, t, 30, a, 2.4, n * 1.8, 0.5),
        o.shock(e, t, n * 1.8, 5, 0.5),
        this.near(e, t, i) && o.ca(i ? 0.9 : 0.35));
    }
    chain(e, t, n) {
      let r = this.kit;
      for (let n = 0; n < t.length - 1; n++) {
        let i = n * 0.03;
        this.bolt(t[n], t[n + 1], {
          life: 0.36,
          w: 1.6,
          I: 3.2,
          rough: 0.16,
          depth: 5,
          branches: 2,
          hz: 25,
          delay: i,
          ramp: e,
          light: 1.6,
        });
        let [a, o, s] = t[n + 1];
        this.later(i, () => {
          (r.flare(a, o, s, 9, 0.2, e, 4),
            r.sparks(a, o, s, 16, e, void 0, Math.PI, [60, 180], [3, 5]),
            r.ring(a, o, s, 2, 12, 0.22, e, 2.2),
            r.light(a, o, s, e, 2.4, 26, 0.35),
            r.decal({
              x: a,
              y: o,
              r0: 4,
              life: 1.5,
              kind: bd.scorch,
              ramp: e,
              I: 0.8,
            }));
        });
      }
      n && r.ca(0.2);
    }
    drain(e, t, n) {
      let r = this.kit,
        i = Q.void;
      this.tendrils.push({
        a: e,
        b: t,
        t0: this.now,
        life: 0.62,
        fadeIn: 0.08,
        fadeOut: 0.22,
        strands: [
          {
            bow: rand(-9, -4),
            amp: 3,
            waves: 1.5,
            speed: 14,
            w: 2,
            I: 1.9,
            ramp: i,
            core: 0.45,
          },
          {
            bow: rand(4, 9),
            amp: 2.5,
            waves: 2,
            speed: 18,
            w: 1.5,
            I: 2,
            ramp: Q.blood,
            core: 0.35,
          },
          {
            bow: rand(-2, 2),
            amp: 4,
            waves: 1,
            speed: 11,
            w: 1.1,
            I: 1.6,
            ramp: i,
            core: 0.3,
          },
        ],
      });
      let a = rand(0.32, 0.4);
      (this.emitter(0.42, 55, () => {
        let n = rand(0.3, 0.42),
          r = Math.random() < 0.45;
        this.emit({
          x: e[0] + rand(-3, 3),
          y: e[1] + rand(-2, 2),
          z: e[2] + rand(-3, 3),
          vx: (t[0] - e[0]) / n,
          vy: (t[1] - e[1]) / n,
          vz: (t[2] - e[2]) / n + rand(-8, 8),
          life: n,
          s0: rand(1.6, 2.2),
          s1: 1,
          ramp: r ? Q.blood : i,
          h0: 4,
          h1: 3,
          I: 2.5,
        });
      }),
        r.ring(e[0], e[1], e[2], 14, 2, 0.3, i, 2),
        r.spray(e[0], e[1], e[2], 10, {
          ramp: i,
          speed: [10, 35],
          up: [0, 15],
          drag: 2,
          life: [0.4, 0.7],
          h0: 0.6,
          h1: 0.1,
          s0: [3, 4],
          s1: 8,
          shape: Z.smoke,
          add: !1,
          a: 0.55,
        }),
        r.sparks(
          e[0],
          e[1],
          e[2],
          10,
          Q.blood,
          void 0,
          Math.PI,
          [30, 90],
          [2, 4],
        ),
        this.L.vortex(e[0], e[1], 16, 0.6, 0.4, 0.5, this.now, !1, e[2]),
        r.lightLine(e, t, i, 2, 14, 0.6),
        this.later(a, () => {
          (r.flare(t[0], t[1], t[2], 7, 0.25, Q.blood, 3),
            r.ring(t[0], t[1], t[2], 2, 12, 0.25, Q.blood, 2),
            r.light(t[0], t[1], t[2], Q.blood, 1.8, 24, 0.4),
            r.orbit(t[0], t[1], 26, {
              ramp: Q.blood,
              r: [5, 9],
              w: [5, 8],
              k: 0.5,
              z: [0, 6],
              vz: [18, 32],
              life: [0.5, 0.8],
              s0: [0.9, 1.4],
              s1: 0.4,
              h0: 4,
              h1: 3,
              I: [2, 3],
            }));
        }),
        n && r.ca(0.1));
    }
    openRift(e, t) {
      let n = this.L,
        r = this.kit,
        i = e.x * PIXELS_PER_UNIT,
        a = e.y * PIXELS_PER_UNIT,
        o = (e.spell.radius ?? 2) * PIXELS_PER_UNIT,
        s = Math.max(0.3, e.end - t),
        c = {
          R: o,
          light: r.light(i, a, 12, elementColor(e.school), 1.6, o * 1.2, s, !0),
          orb: -1,
          vtx: null,
          ticks: e.ticks,
          acc: {},
          seen: !0,
          t0: this.now,
          x: i,
          y: a,
          school: e.school,
          mine: e.mine,
        };
      return (
        e.school === `cryo`
          ? ((c.light.z = 30),
            (c.light.I = 0.9),
            (c.light.rad = o * 1.3),
            r.decal({
              x: i,
              y: a,
              r0: o * 0.3,
              r1: o * 1.05,
              life: s + 1.2,
              kind: bd.frost,
              ramp: Q.rime,
              I: 1,
              ease: 1,
              fadeIn: 0.4,
              fadeOut: 0.25,
            }))
          : (r.decal({
              x: i,
              y: a,
              r0: o * 0.15,
              r1: o,
              life: s + 0.3,
              kind: bd.swirl,
              ramp: Q.void,
              I: 1.4,
              ease: 2,
              fadeIn: 0.2,
              fadeOut: 0.12,
              spin: 0.35,
            }),
            (c.orb = n.orbs.alloc(Ju.void, Q.void, 1.6)),
            (c.vtx = n.vortex(i, a, o * 1.05, 0.6, 0.12, s, this.now, !0)),
            r.flare(i, a, 12, 12, 0.25, Q.void, 3)),
        c
      );
    }
    riftFrame(e, t) {
      let n = this.kit,
        { x: i, y: a, R: o } = t,
        s = this.now - t.t0,
        c = e.ticks < t.ticks;
      if (((t.ticks = e.ticks), t.school === `cryo`)) {
        let e = Q.rime;
        ((t.light.I = 0.9 * rand(0.85, 1.1)),
          this.every(t.acc, `cloud`, 55, () => {
            let e = Math.random() < 0.5;
            n.orbit(
              i,
              a,
              1,
              {
                ramp: Q.ash,
                r: [0, o * 1.15],
                w: [0.8, 1.4],
                z: e ? [66, 76] : [76, 92],
                vz: [-2, 2],
                life: [1.2, 1.8],
                add: !1,
                shape: Z.smoke,
                a: 0.42,
                h0: e ? 1.9 : 2.8,
                h1: e ? 1.6 : 2.4,
                s0: [12, 17],
                s1: 22,
              },
              !1,
            );
          }),
          this.every(t.acc, `lit`, 5, () =>
            n.orbit(
              i,
              a,
              1,
              {
                ramp: e,
                r: [0, o * 0.8],
                w: [1, 1.6],
                z: [70, 84],
                life: [0.4, 0.7],
                s0: [7, 10],
                s1: 12,
                h0: 2.2,
                h1: 1.8,
                I: 0.35,
              },
              !1,
            ),
          ),
          this.every(t.acc, `snow`, 70, () =>
            n.orbit(
              i,
              a,
              1,
              {
                ramp: e,
                r: [o * 0.1, o * 1.05],
                w: [2.5, 4.2],
                k: 0.1,
                z: [2, 60],
                vz: [-25, -8],
                life: [0.6, 1.1],
                s0: [0.5, 1],
                s1: 0.4,
                h0: 4,
                h1: 3.5,
                I: [1.2, 2.2],
                shape: Z.spark,
                stretch: 0.02,
              },
              !1,
            ),
          ),
          this.every(t.acc, `wind`, 25, () =>
            this.emit({
              x: i + rand(-o, o) + 30,
              y: a + rand(-r.fx, r.fx) * o,
              z: rand(5, 60),
              vx: -110,
              vy: 15,
              vz: -35,
              life: 0.35,
              s0: 0.5,
              ramp: e,
              h0: 4,
              h1: 3.5,
              I: 1.4,
              shape: Z.spark,
              stretch: 0.05,
            }),
          ),
          this.every(t.acc, `hail`, 9, () => {
            let t = this.L.pools.shard.alloc(e, 1.2, 0);
            t < 0 ||
              this.hail.push({
                idx: t,
                p: new W(i + rand(-0.9, 0.9) * o + 35, a + rand(-0.6, 0.6) * o, 85),
                v: new W(rand(-60, -45), rand(-6, 6), -230),
                roll: Math.random() * Dd,
                spin: rand(8, 16),
                ramp: e,
              });
          }),
          c &&
            (n.decal({
              x: i,
              y: a,
              r0: o * 0.2,
              r1: o,
              life: 0.35,
              kind: bd.ring,
              ramp: e,
              I: 0.7,
              ease: 2,
            }),
            n.radial(i, a, 3, 16, {
              ramp: e,
              speed: [o * 2, o * 3],
              drag: 3,
              up: [3, 10],
              life: [0.5, 0.8],
              add: !1,
              a: 0.25,
              shape: Z.smoke,
              h0: 3.6,
              h1: 2.8,
              s0: 3,
              s1: 8,
            }),
            n.light(i, a, 8, e, 1.1, o, 0.3)));
        return;
      }
      let l = Q.void,
        u = Math.min(1, s / 0.3),
        d = 1 + 0.12 * Math.sin(s * 9);
      (this.L.orbs.set(t.orb, i, a, 12, 4 * u * d, 1, 0, 0, 1),
        (t.light.I = 1.6 * d),
        this.every(t.acc, `in`, 70, () =>
          n.orbit(
            i,
            a,
            1,
            {
              ramp: l,
              r: [o * 0.55, o * 1.05],
              w: [2.2, 3.2],
              k: 1.7,
              z: [1, 5],
              vz: [2, 10],
              life: [0.6, 0.9],
              s0: [0.9, 1.6],
              s1: 0.3,
              h0: 4,
              h1: 2.5,
              I: [1.6, 2.6],
            },
            !1,
          ),
        ),
        this.every(t.acc, `spark`, 30, () =>
          n.orbit(
            i,
            a,
            1,
            {
              ramp: l,
              r: [o * 0.5, o * 1],
              w: [2.6, 3.4],
              k: 1.9,
              z: [1, 6],
              vz: [3, 12],
              life: [0.5, 0.8],
              s0: 0.6,
              h0: 4,
              h1: 3,
              I: [2.5, 4],
              shape: Z.spark,
              stretch: 0.025,
            },
            !1,
          ),
        ),
        this.every(t.acc, `wisp`, 18, () =>
          n.orbit(
            i,
            a,
            1,
            {
              ramp: l,
              r: [o * 0.6, o * 1.1],
              w: [1.8, 2.6],
              k: 1.5,
              z: [2, 8],
              vz: [2, 8],
              life: [0.7, 1],
              add: !1,
              shape: Z.smoke,
              a: 0.45,
              h0: 0.5,
              h1: 0.1,
              s0: 3,
              s1: 6,
            },
            !1,
          ),
        ),
        this.every(t.acc, `rise`, 10, () =>
          this.emit({
            x: i + rand(-4, 4),
            y: a + rand(-3, 3),
            z: 0,
            vz: 30,
            life: 0.4,
            s0: 1,
            s1: 0.4,
            ramp: l,
            h0: 4,
            h1: 3,
            I: 2,
          }),
        ),
        this.near(i, a, t.mine) && n.dim(0.15, 0.1),
        c &&
          (n.decal({
            x: i,
            y: a,
            r0: o,
            r1: o * 0.15,
            life: 0.3,
            kind: bd.ring,
            ramp: l,
            I: 1.3,
            ease: 1,
          }),
          n.flare(i, a, 12, 9, 0.2, l, 3),
          n.ring(i, a, 12, 14, 2, 0.25, l, 2),
          n.light(i, a, 12, l, 2.2, o, 0.3),
          n.sparks(i, a, 12, 8, l, void 0, Math.PI, [40, 100], [2, 4])));
    }
    closeRift(e, t = !1) {
      let n = this.kit;
      if (
        ((e.light.life = 0),
        e.vtx && (e.vtx.life = 0),
        this.L.orbs.release(e.orb),
        t)
      )
        return;
      let { x: r, y: i, R: a } = e;
      if (e.school === `cryo`) {
        n.radial(r, i, 4, 24, {
          ramp: Q.rime,
          speed: [a * 2, a * 3],
          drag: 3,
          up: [5, 20],
          life: [0.6, 1],
          add: !1,
          a: 0.3,
          shape: Z.smoke,
          h0: 3.6,
          h1: 2.8,
          s0: 3,
          s1: 9,
        });
        return;
      }
      (n.flare(r, i, 12, 12, 0.25, Q.void, 4),
        n.ring(r, i, 12, 2, 18, 0.3, Q.void, 2.4),
        n.sparks(r, i, 12, 16, Q.void, void 0, Math.PI, [50, 140], [2, 4]),
        n.spray(r, i, 10, 8, {
          ramp: Q.void,
          speed: [10, 35],
          up: [5, 20],
          drag: 2,
          life: [0.5, 0.8],
          h0: 0.6,
          h1: 0.1,
          s0: [3, 5],
          s1: 10,
          shape: Z.smoke,
          add: !1,
          a: 0.55,
        }),
        n.light(r, i, 12, Q.void, 2.4, a, 0.4),
        n.shock(r, i, 30, 3, 0.4, 12));
    }
    fallHail(e) {
      let t = this.L.pools.shard;
      for (let n = this.hail.length - 1; n >= 0; n--) {
        let r = this.hail[n];
        if ((r.p.addScaledVector(r.v, e), (r.roll += r.spin * e), r.p.z <= 0)) {
          (this.kit.crystalBits(r.p.x, r.p.y, 1, 2, r.ramp, [15, 45]),
            this.kit.sparks(
              r.p.x,
              r.p.y,
              1,
              3,
              r.ramp,
              void 0,
              Math.PI,
              [20, 60],
              [1.5, 3],
            ),
            this.emit({
              x: r.p.x,
              y: r.p.y,
              z: 1,
              vx: rand(-6, 6),
              vy: rand(-4, 4),
              vz: rand(2, 8),
              drag: 1.5,
              life: 0.6,
              s0: 2,
              s1: 5,
              ramp: r.ramp,
              h0: 3.6,
              h1: 3,
              shape: Z.smoke,
              add: !1,
              a: 0.25,
            }),
            t.release(r.idx),
            this.hail.splice(n, 1));
          continue;
        }
        (Nd.setFromUnitVectors(Fd, jd.copy(r.v).normalize()).multiply(
          Pd.setFromAxisAngle(Fd, r.roll),
        ),
          t.set(r.idx, r.p, Nd, Md.set(1.7, 1.5, 1.5)));
      }
    }
  },
  Vd = (e, t) => e + Math.random() * (t - e),
  Hd = (e) => (Array.isArray(e) ? Vd(e[0], e[1]) : e),
  FxKit = class {
    layer;
    density = 1;
    now = 0;
    constructor(e) {
      this.layer = e;
    }
    n(e) {
      let t = e * this.density * this.layer.settings.density,
        n = Math.floor(t);
      return n + +(Math.random() < t - n);
    }
    spray(e, t, n, r, i, a = !0) {
      let o = this.layer,
        s = a ? this.n(r) : r;
      for (let r = 0; r < s; r++) {
        let r =
            i.dir === void 0
              ? Math.random() * Math.PI * 2
              : i.dir + Vd(-1, 1) * (i.spread ?? 0.4),
          a = Vd(i.speed[0], i.speed[1]),
          s = i.jitter ?? 0,
          c = Array.isArray(i.s0) ? Vd(i.s0[0], i.s0[1]) : (i.s0 ?? 1),
          l = Array.isArray(i.I) ? Vd(i.I[0], i.I[1]) : (i.I ?? 1);
        o.particles.emit(
          {
            x: e + Vd(-s, s),
            y: t + Vd(-s, s),
            z: n + Vd(-s, s) * 0.5,
            vx: Math.cos(r) * a,
            vy: Math.sin(r) * a,
            vz: i.up ? Vd(i.up[0], i.up[1]) : 0,
            life: Vd(i.life[0], i.life[1]),
            drag: i.drag ?? 0,
            grav: i.grav ?? 0,
            s0: c,
            s1: i.s1 ?? c,
            ramp: i.ramp,
            h0: i.h0 ?? 4,
            h1: i.h1 ?? 2,
            shape: i.shape ?? Z.glow,
            I: l,
            add: i.add ?? !0,
            a: i.a ?? 1,
            stretch: i.stretch ?? 0,
          },
          this.now,
        );
      }
    }
    orbit(e, t, n, r, i = !0) {
      let a = this.layer,
        o = i ? this.n(n) : n;
      for (let n = 0; n < o; n++) {
        let n = Hd(r.s0 ?? 1);
        a.particles.emit(
          {
            x: e,
            y: t,
            z: r.z ? Vd(r.z[0], r.z[1]) : 0,
            vx: Vd(r.r[0], r.r[1]),
            vy: Vd(r.w[0], r.w[1]),
            vz: r.vz ? Vd(r.vz[0], r.vz[1]) : 0,
            life: Vd(r.life[0], r.life[1]),
            delay: r.delay ? Vd(r.delay[0], r.delay[1]) : 0,
            drag: r.k ?? 0,
            grav: Math.random() * Math.PI * 2,
            s0: n,
            s1: r.s1 ?? n,
            ramp: r.ramp,
            h0: r.h0 ?? 4,
            h1: r.h1 ?? 2,
            shape: (r.shape ?? Z.glow) + 10,
            I: Hd(r.I ?? 1),
            add: r.add ?? !0,
            a: r.a ?? 1,
            stretch: r.stretch ?? 0,
          },
          this.now,
        );
      }
    }
    radial(e, t, n, i, a, o = r.fx) {
      let s = this.layer,
        c = this.n(i);
      for (let r = 0; r < c; r++) {
        let r = Math.random() * Math.PI * 2,
          i = Vd(a.speed[0], a.speed[1]),
          c = Hd(a.s0 ?? 1),
          l = a.jitter ?? 0;
        s.particles.emit(
          {
            x: e + Vd(-l, l),
            y: t + Vd(-l, l) * o,
            z: n,
            vx: Math.cos(r) * i,
            vy: Math.sin(r) * i * o,
            vz: a.up ? Vd(a.up[0], a.up[1]) : 0,
            life: Vd(a.life[0], a.life[1]),
            drag: a.drag ?? 0,
            grav: a.grav ?? 0,
            s0: c,
            s1: a.s1 ?? c,
            ramp: a.ramp,
            h0: a.h0 ?? 4,
            h1: a.h1 ?? 2,
            shape: a.shape ?? Z.glow,
            I: Hd(a.I ?? 1),
            add: a.add ?? !0,
            a: a.a ?? 1,
            stretch: a.stretch ?? 0,
          },
          this.now,
        );
      }
    }
    decal(e) {
      this.layer.decal(e, this.now);
    }
    lightLine(e, t, n, r, i, a) {
      return this.layer.lightLine(
        e,
        t,
        n,
        r,
        i,
        a,
        this.now,
        this.lightStep[n] ?? 3,
      );
    }
    glow(e, t, n, r, i, a, o, s = 2, c = 4, l = 3, u = Z.glow) {
      this.layer.particles.emit(
        {
          x: e,
          y: t,
          z: n,
          life: a,
          s0: r,
          s1: i,
          ramp: o,
          h0: c,
          h1: l,
          shape: u,
          I: s,
          add: !0,
        },
        this.now,
      );
    }
    flare(e, t, n, r, i, a, o = 4) {
      this.glow(e, t, n, r, r * 0.4, i, a, o, 4, 3, Z.flare);
    }
    ring(e, t, n, r, i, a, o, s = 1.3) {
      this.layer.particles.emit(
        {
          x: e,
          y: t,
          z: n,
          life: a,
          s0: r,
          s1: i,
          ramp: o,
          h0: 4,
          h1: 2.5,
          shape: Z.ring,
          I: s,
          add: !0,
        },
        this.now,
      );
    }
    lightStep = {};
    light(e, t, n, r, i, a, o, s = !1) {
      return this.layer.lightFromRamp(
        e,
        t,
        n,
        r,
        i,
        a,
        o,
        this.now,
        s,
        this.lightStep[r] ?? 3,
      );
    }
    shock(e, t, n = 48, r = 3, i = 0.45, a = 0) {
      this.layer.shock(e, t, this.now, n, r, i, a);
    }
    ca(e) {
      this.layer.kickCA(e);
    }
    dim(e, t) {
      this.layer.dim(e, this.now + t);
    }
    beam(e) {
      return this.layer.beam(e, this.now);
    }
    sparks(e, t, n, r, i, a, o = Math.PI, s = [40, 150], c = [2, 5]) {
      this.spray(e, t, n, r, {
        ramp: i,
        speed: s,
        up: [30, 140],
        grav: 260,
        drag: 0.8,
        life: [0.3, 0.65],
        h0: 4,
        h1: 2.5,
        s0: [0.5, 0.9],
        shape: Z.spark,
        I: c,
        stretch: 0.045,
        dir: a,
        spread: o,
      });
    }
    dust(e, t, n, r, i = Math.PI, a = [25, 80]) {
      this.spray(e, t, 2, n, {
        ramp: Q.dust,
        speed: a,
        up: [4, 20],
        drag: 2.6,
        life: [0.8, 1.4],
        h0: 3,
        h1: 2,
        s0: [4, 7],
        s1: 15,
        shape: Z.smoke,
        add: !1,
        a: 0.55,
        dir: r,
        spread: i,
        jitter: 3,
      });
    }
    smoke(e, t, n, r, i = Q.hollow) {
      this.spray(e, t, n, r, {
        ramp: i,
        speed: [4, 18],
        up: [10, 28],
        drag: 1.3,
        life: [0.8, 1.4],
        h0: 0.7,
        h1: 0,
        s0: [4, 6],
        s1: 14,
        shape: Z.smoke,
        add: !1,
        a: 0.7,
        jitter: 2,
      });
    }
    rocks(e, t, n, r, i = Math.PI, a = [30, 110]) {
      let o = this.layer,
        s = this.n(n);
      for (let n = 0; n < s; n++) {
        let n = r === void 0 ? Math.random() * Math.PI * 2 : r + Vd(-1, 1) * i,
          s = Vd(a[0], a[1]);
        o.chunks.rock.spawn(
          e,
          t,
          2,
          Math.cos(n) * s,
          Math.sin(n) * s,
          Vd(60, 160),
          Vd(1.1, 2.6),
          Vd(1.2, 2),
          Q.stone,
          0,
          1,
          this.now,
        );
      }
    }
    crystalBits(e, t, n, r, i, a = [30, 100]) {
      let o = this.layer,
        s = this.n(r);
      for (let r = 0; r < s; r++) {
        let r = Math.random() * Math.PI * 2,
          s = Vd(a[0], a[1]);
        o.chunks.crystal.spawn(
          e,
          t,
          n,
          Math.cos(r) * s,
          Math.sin(r) * s,
          Vd(40, 130),
          Vd(0.8, 1.8),
          Vd(0.9, 1.6),
          i,
          1.2,
          0,
          this.now,
        );
      }
    }
    shatter(e, t, n, r, i = 1) {
      (this.crystalBits(e, t, n, 5 * i, r),
        this.sparks(e, t, n, 10 * i, r),
        this.flare(e, t, n, 7 * i, 0.2, r, 2.5),
        this.ring(e, t, n, 2, 12 * i, 0.25, r, 2.5),
        this.light(e, t, n, r, 1.6 * i, 16 * i, 0.3));
    }
  },
  Wd = `
uniform float uLen; uniform float uR;
varying vec3 vN; varying float vAlong; varying vec3 vDir;
void main() {
  vec3 p = vec3(position.x * uLen, position.y * uR, position.z * uR);
  vAlong = position.x * uLen;
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vN = normalize(mat3(modelMatrix) * vec3(0.0, normal.y, normal.z));
  vDir = normalize(mat3(modelMatrix) * vec3(1.0, 0.0, 0.0));
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  Gd = `
${Cu}
${wu}
uniform float uLen; uniform float uTime; uniform float uI; uniform float uRow; uniform float uSeed;
uniform int uLayer; uniform float uHollow;
varying vec3 vN; varying float vAlong; varying vec3 vDir;
void main() {
  vec3 V = FX_VIEW;
  float maxN = sqrt(max(1.0 - pow(dot(vDir, V), 2.0), 0.04));
  float f = clamp(abs(dot(vN, V)) / maxN, 0.0, 1.0);
  float ends = smoothstep(2.0, 16.0, vAlong) * smoothstep(0.0, 2.0, uLen - vAlong);
  float flow = 0.72 + 0.2 * sin(vAlong * 0.33 - uTime * 26.0 + uSeed * 6.0) + 0.14 * sin(vAlong * 0.09 - uTime * 11.0 + uSeed * 3.0);
  if (uLayer == 0) {
    vec3 c = mix(rampAt(uRow, 3.0, 0.0), vec3(1.0), uHollow > 0.5 ? 0.3 : 0.5) * uI * 3.0 * pow(f, 0.6);
    gl_FragColor = vec4(c * ends, 0.0);
  } else if (uLayer == 1) {
    float a = pow(f, 1.7) * flow * ends;
    gl_FragColor = vec4(rampAt(uRow, uHollow > 0.5 ? 2.8 : 2.0, 0.0) * uI * 1.9 * a, 0.0);
  } else {
    float n = 0.6 + 0.4 * sin(vAlong * 0.21 - uTime * 17.0 + uSeed * 9.0) * sin(vAlong * 0.05 + uTime * 3.0);
    float a = pow(f, 3.2) * n * ends;
    if (uHollow > 0.5) {
      vec3 smoke = rampAt(uRow, 0.3, 0.0);
      gl_FragColor = vec4(smoke * a * 0.75, a * 0.75);
    } else {
      gl_FragColor = vec4(rampAt(uRow, 1.6, 0.0) * uI * 0.95 * a, 0.0);
    }
  }
}
`,
  Kd = `
${wu}
uniform float uLen; uniform float uTime; uniform float uPhase; uniform float uHR;
varying float vU; varying float vFront;
void main() {
  float along = position.x * uLen;
  float th = along / 15.0 * 6.2831853 - uTime * 10.0 + uPhase;
  float taper = smoothstep(4.0, 16.0, along) * smoothstep(0.0, 10.0, uLen - along);
  vec3 radial = vec3(0.0, cos(th), sin(th));
  vec3 p = vec3(along + position.y * 0.55, 0.0, 0.0) + radial * uHR * taper;
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vec3 wr = mat3(modelMatrix) * radial;
  vFront = dot(wr, FX_VIEW);
  vU = position.x;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  qd = `
${Cu}
uniform float uI; uniform float uRow;
varying float vU; varying float vFront;
void main() {
  float a = 0.35 + 0.65 * smoothstep(-0.6, 0.6, vFront);
  gl_FragColor = vec4(rampAt(uRow, 3.0, 0.0) * uI * 1.1 * a, 0.0);
}
`,
  Jd = `
attribute float aK;
uniform float uLen; uniform float uTime; uniform float uRingR;
varying float vVis;
void main() {
  float sp = 9.0;
  float along = mod(aK * sp + uTime * 34.0, 16.0 * sp);
  vVis = step(along, uLen - 3.0) * smoothstep(3.0, 12.0, along) * (1.0 - smoothstep(uLen - 20.0, uLen - 3.0, along) * 0.6);
  vec3 p = vec3(position.x * uRingR + along, position.y * uRingR, position.z * uRingR);
  if (vVis <= 0.0) p = vec3(0.0);
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(p, 1.0);
}
`,
  Yd = `
${Cu}
uniform float uI; uniform float uRow;
varying float vVis;
void main() {
  if (vVis <= 0.0) discard;
  gl_FragColor = vec4(rampAt(uRow, 4.0, 0.0) * uI * 1.5 * vVis, 0.0);
}
`;
