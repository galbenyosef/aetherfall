// hd2d-FOjpdF4f 22 — math
// Lines 7016-7369 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
var Co = 48,
  wo = 1 / 45,
  To = 1 / 26,
  Eo = 1.3,
  Do = 1 / 8,
  Oo = 2,
  ko = 1.5,
  Ao = class {
    tier;
    forced;
    times = new Float32Array(Co);
    sorted = new Float32Array(Co);
    n = 0;
    i = 0;
    slowFor = 0;
    grace = ko;
    floor = 1 / 0;
    constructor(e, t) {
      ((this.tier = e), (this.forced = t));
    }
    get spec() {
      return _o[this.tier];
    }
    push(e) {
      if (!(e > 0) || e > 0.25) return `same`;
      if (((this.floor = Math.min(this.floor, e)), this.grace > 0))
        return ((this.grace -= e), `same`);
      if (
        ((this.times[this.i] = e),
        (this.i = (this.i + 1) % Co),
        this.n < Co && this.n++,
        this.forced || this.n < Co / 2)
      )
        return `same`;
      let t = this.sorted.subarray(0, this.n);
      (t.set(this.times.subarray(0, this.n)), t.sort());
      let n = t[Math.floor(this.n * 0.1)],
        r = t[Math.floor(this.n * 0.75)];
      n > this.floor && (this.floor += (n - this.floor) * Math.min(1, e * Do));
      let i = r > To || (r > wo && r > this.floor * Eo);
      return (
        (this.slowFor = i ? this.slowFor + e : 0),
        this.slowFor < Oo ? `same` : this.stepDown()
      );
    }
    stepDown() {
      this.reset();
      let e = go.indexOf(this.tier);
      return e >= go.length - 1 ? `give-up` : ((this.tier = go[e + 1]), `down`);
    }
    reset() {
      ((this.n = 0), (this.i = 0), (this.slowFor = 0), (this.grace = ko));
    }
  },
  jo = /swiftshader|basic render|llvmpipe|softpipe|software/i,
  Mo = class extends Pe {
    math = new Zi();
    theta = Wi;
    fov = Gi;
    cal = !1;
    W = 1;
    H = 1;
    D = 1;
    near = 1;
    far = 2;
    focus = new V();
    eye = new V();
    back = new V(0, Math.cos(Wi), Math.sin(Wi));
    M = new N();
    Minv = new N();
    M0inv = new N();
    sv = [new V(1, 0, 0), new V(0, 1, -1)];
    constructor() {
      (super(),
        (this.matrixAutoUpdate = !1),
        (this.matrixWorldAutoUpdate = !1));
    }
    set(e, t, n, r, i, a) {
      (this.place(e, t, i, a),
        this.math.aim(n, r),
        this.M0inv.fromArray(this.math.M0inv));
    }
    place(e, t, n, r) {
      let i = this.math;
      (i.set(e, t, n, r, this.theta, this.fov, this.cal),
        (this.theta = i.theta),
        (this.fov = i.fov),
        (this.W = i.W),
        (this.H = i.H),
        (this.D = i.D),
        (this.near = i.near),
        (this.far = i.far),
        this.focus.fromArray(i.focus),
        this.eye.fromArray(i.eye),
        this.back.fromArray(i.back),
        this.sv[1].set(0, i.cal ? 1 : i.s / i.c, -1),
        this.M.fromArray(i.M),
        this.Minv.fromArray(i.Minv),
        this.M0inv.fromArray(i.M0inv),
        this.projectionMatrix.copy(this.M),
        this.projectionMatrixInverse.copy(this.Minv));
    }
    toScreen(e, t, n = 0) {
      return this.math.toScreen(e, t, n);
    }
    toGround(e, t) {
      return this.math.toGround(e, t);
    }
    footprint() {
      return this.math.footprint();
    }
    depthOf(e, t, n) {
      return this.math.depthOf(e, t, n);
    }
  },
  No = class {
    gl;
    ms = {};
    until = 0;
    ext;
    pending = [];
    cur = null;
    on = !1;
    constructor(e) {
      ((this.gl = e),
        (this.ext = e.getExtension(`EXT_disjoint_timer_query_webgl2`)));
    }
    get available() {
      return !!this.ext;
    }
    frame() {
      let e = this.gl;
      if (
        ((this.on =
          !!this.ext && performance.now() < this.until && !e.isContextLost()),
        !this.ext || this.pending.length === 0)
      )
        return;
      let t = e.getParameter(this.ext.GPU_DISJOINT_EXT);
      for (; this.pending.length > 0;) {
        let n = this.pending[0];
        if (!e.getQueryParameter(n.q, e.QUERY_RESULT_AVAILABLE)) break;
        if (!t) {
          let t = e.getQueryParameter(n.q, e.QUERY_RESULT) / 1e6,
            r = this.ms[n.name];
          this.ms[n.name] = r === void 0 ? t : r + (t - r) * 0.1;
        }
        (e.deleteQuery(n.q), this.pending.shift());
      }
      this.pending.length > 64 && this.reset();
    }
    begin(e) {
      if (!this.on || !this.ext) return;
      this.cur && this.end();
      let t = this.gl.createQuery();
      t &&
        (this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT, t),
        (this.cur = { name: e, q: t }));
    }
    end() {
      this.cur &&
        this.ext &&
        (this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),
        this.pending.push(this.cur),
        (this.cur = null));
    }
    reset() {
      if (!this.gl.isContextLost())
        for (let e of this.pending) this.gl.deleteQuery(e.q);
      ((this.pending = []), (this.cur = null));
    }
  },
  Po = class {
    events;
    canvas;
    gl;
    renderer;
    cam = new Mo();
    timer;
    hdr;
    gpu;
    software;
    target;
    fxTarget;
    w = 1;
    h = 1;
    samples = 0;
    maxSamples;
    get lost() {
      return this.lostSaid || this.gl.isContextLost();
    }
    lostSaid = !1;
    onLost = (e) => {
      (e.preventDefault(),
        (this.lostSaid = !0),
        this.timer.reset(),
        this.events.lost());
    };
    onRestored = () => {
      ((this.lostSaid = !1), this.events.restored());
    };
    constructor(e) {
      ((this.events = e), (this.canvas = document.createElement(`canvas`)));
      let t = this.canvas.getContext(`webgl2`, {
        alpha: !1,
        antialias: !1,
        depth: !0,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1,
        powerPreference: `high-performance`,
      });
      if (!t) throw Error(`HD-2D needs WebGL2`);
      ((this.gl = t),
        (this.renderer = new ke({
          canvas: this.canvas,
          context: t,
          antialias: !1,
          alpha: !1,
          depth: !0,
          stencil: !1,
        })));
      let n = this.renderer;
      (n.setPixelRatio(1),
        (n.outputColorSpace = Ee),
        (n.toneMapping = 0),
        (n.autoClear = !1),
        (n.info.autoReset = !1),
        (n.sortObjects = !0));
      let r = n.extensions;
      this.hdr =
        r.has(`EXT_color_buffer_float`) || r.has(`EXT_color_buffer_half_float`);
      let i = t.getExtension(`WEBGL_debug_renderer_info`);
      ((this.gpu = String(
        i
          ? t.getParameter(i.UNMASKED_RENDERER_WEBGL)
          : t.getParameter(t.RENDERER),
      )),
        (this.software = jo.test(this.gpu)),
        (this.timer = new No(t)),
        (this.maxSamples = this.sampleCap()),
        (this.target = this.makeTarget(1, 1)),
        (this.fxTarget = this.makeFxTarget(this.target)),
        this.canvas.addEventListener(`webglcontextlost`, this.onLost),
        this.canvas.addEventListener(`webglcontextrestored`, this.onRestored));
    }
    sampleCap() {
      let e = this.gl;
      try {
        let t = (t) => {
          let n = e.getInternalformatParameter(e.RENDERBUFFER, t, e.SAMPLES);
          return n && n.length ? Math.max(...n) : 0;
        };
        return Math.min(
          e.getParameter(e.MAX_SAMPLES),
          t(this.hdr ? e.RGBA16F : e.RGBA8),
          t(e.DEPTH_COMPONENT24),
        );
      } catch {
        return 0;
      }
    }
    makeTarget(e, t) {
      let n = new Ye(e, t, be);
      n.minFilter = n.magFilter = R;
      let r = new Ce(e, t, {
        format: Ue,
        type: this.hdr ? xe : Se,
        magFilter: M,
        minFilter: M,
        generateMipmaps: !1,
        depthBuffer: !0,
        stencilBuffer: !1,
        depthTexture: n,
        samples: this.samples,
      });
      return ((r.texture.colorSpace = ``), r);
    }
    makeFxTarget(e) {
      let t = new Ce(e.width, e.height, {
        format: Ue,
        type: this.hdr ? xe : Se,
        magFilter: M,
        minFilter: M,
        generateMipmaps: !1,
        depthBuffer: !0,
        stencilBuffer: !1,
        depthTexture: e.depthTexture,
        samples: 0,
      });
      return ((t.texture.colorSpace = ``), t);
    }
    remake(e, t) {
      (this.fxTarget.dispose(),
        this.target.dispose(),
        this.target.depthTexture?.dispose(),
        (this.target = this.makeTarget(e, t)),
        (this.fxTarget = this.makeFxTarget(this.target)));
    }
    size(e, t, n, r, i) {
      ((e = Math.max(1, Math.round(e))),
        (t = Math.max(1, Math.round(t))),
        (n = Math.max(1, Math.round(n))),
        (r = Math.max(1, Math.round(r))),
        (i = Math.min(i, this.maxSamples)));
      let a = !1;
      return (
        (this.canvas.width !== e || this.canvas.height !== t) &&
          (this.renderer.setSize(e, t, !1), (a = !0)),
        (this.target.width !== n ||
          this.target.height !== r ||
          this.samples !== i) &&
          ((this.samples = i), this.remake(n, r), (a = !0)),
        (this.w = n),
        (this.h = r),
        a
      );
    }
    bytes() {
      let e = this.hdr ? 8 : 4;
      return (
        this.w * this.h * (e * 2 + 4 + (e + 4) * this.samples) +
        this.canvas.width * this.canvas.height * 12
      );
    }
    rebuild() {
      this.remake(this.w, this.h);
    }
    release() {
      (this.fxTarget.dispose(),
        this.target.dispose(),
        this.target.depthTexture?.dispose(),
        (this.w = this.h = 0));
    }
    dispose() {
      (this.canvas.removeEventListener(`webglcontextlost`, this.onLost),
        this.canvas.removeEventListener(
          `webglcontextrestored`,
          this.onRestored,
        ),
        this.timer.reset(),
        this.fxTarget.dispose(),
        this.target.dispose(),
        this.target.depthTexture?.dispose(),
        this.renderer.dispose());
    }
  },
  Fo = 64,
  Io = 0.6,
  Lo = 1.6,
  Ro = 6,
  zo = 32,
  Bo = 400,
  Vo = 29;
