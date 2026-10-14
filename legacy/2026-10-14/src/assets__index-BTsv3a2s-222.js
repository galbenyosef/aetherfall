// assets__index-BTsv3a2s 222 — math
// Lines 141966-143707 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var b0 = He * 16,
  x0 = 9,
  S0 = 10,
  C0 = 38,
  w0 = S0 + 28 + 6,
  T0 = x0 + 10,
  E0 = S0 + 26,
  D0 = 4,
  O0 = 14,
  k0 = 21,
  A0 = 0.3,
  j0 = 0.18,
  M0 = (e) => (((e * 2654435761) >>> 0) % 997) / 997,
  N0 = class extends uH {
    look;
    dir = 0;
    phase = 0;
    vx = 0;
    vy = 0;
    speed = 0;
    sprintK = 0;
    lastIn;
    bob;
    hat;
    hem;
    off = new sH(6, 0.5, 0, 0);
    arm;
    far = !1;
    hot = !1;
    posed = !1;
    touching = !1;
    wantDir = 0;
    turnT = 0;
    lean;
    vF = 0;
    accF = 0;
    stillT = 0;
    lastR = null;
    landed = null;
    breathPhase;
    stepSide = 1;
    gAge = 1 / 0;
    gKind = ``;
    gSlammed = !1;
    bAge = 1 / 0;
    ghost = null;
    ghostAge = 1 / 0;
    pal = new fH([`#120b1a`]);
    buf = new pH(C0, w0);
    frontBuf = new pH(C0, w0);
    backBuf = new pH(C0, w0);
    ghostBuf = new pH(C0, w0);
    ctxBody;
    ctxFront;
    ctxBack;
    sn = {};
    key = ``;
    constructor(e, t, n, r, i) {
      super(`mage`, e, t, n, r);
      let a = this.p;
      ((this.look = i),
        (this.lastIn = { x: t, y: n }),
        (this.bob = new sH(a.bobF, a.bobZ, 0, 0)),
        (this.hat = new sH(a.hatF, a.hatZ, 0, 0)),
        (this.hem = new sH(a.hemF, a.hemZ, 0, 0)),
        (this.lean = new sH(a.leanF, a.leanZ, 0, 0)));
      let o = i0(0);
      ((this.arm = [o.sh[0], o.sh[1], o.fh[0], o.fh[1], o.ang, o.len].map(
        (e) => new sH(a.armF, a.armZ, 0, e),
      )),
        (this.breathPhase = this.rand() * Math.PI * 2));
      let s = { width: 20, height: 28 };
      ((this.ctxBody = new mH(this.buf, this.pal, s, x0, S0)),
        (this.ctxFront = new mH(this.frontBuf, this.pal, s, x0, S0)),
        (this.ctxBack = new mH(this.backBuf, this.pal, s, x0, S0)));
    }
    setLook(e) {
      e.key !== this.look.key && ((this.look = e), (this.key = ``));
    }
    retune() {
      let e = this.p;
      (this.bob.tune(e.bobF, e.bobZ, 0),
        this.hat.tune(e.hatF, e.hatZ, 0),
        this.hem.tune(e.hemF, e.hemZ, 0),
        this.lean.tune(e.leanF, e.leanZ, 0));
      for (let t of this.arm) t.tune(e.armF, e.armZ, 0);
    }
    reset(e, t, n) {
      ((this.x = e),
        (this.y = t),
        (this.facing = n < 0 ? -1 : 1),
        (this.lastIn = { x: e, y: t }),
        (this.vx = this.vy = this.speed = this.sprintK = 0),
        this.bob.reset(0),
        this.hat.reset(0),
        this.hem.reset(0),
        this.off.reset(0),
        this.lean.reset(0),
        (this.vF = this.accF = this.turnT = this.stillT = 0),
        (this.wantDir = this.dir));
      let r = i0(this.view());
      ([r.sh[0], r.sh[1], r.fh[0], r.fh[1], r.ang, r.len].forEach((e, t) =>
        this.arm[t].reset(e),
      ),
        (this.ghost = null),
        (this.lastR = null),
        (this.landed = null));
      for (let e in this.sn) this.sn[e].reset();
      this.key = ``;
    }
    view() {
      return this.dir === 3 ? 2 : this.dir;
    }
    snap(e, t, n = this.p.snap) {
      return (this.sn[e] ??= new cH()).at(t, n);
    }
    tick(e, t) {
      let n = this.p,
        r = t.blink;
      if (
        (r && r.age < this.bAge && r.age < A0 && this.blinked(r.dx, r.dy),
        (this.bAge = r ? r.age : 1 / 0),
        this.ghost && (this.ghostAge += e),
        (this.x = t.x),
        (this.y = t.y),
        t.dir !== void 0 && t.dir !== this.wantDir)
      ) {
        let e = this.wantDir;
        ((this.wantDir = t.dir),
          e >= 2 &&
            this.wantDir >= 2 &&
            n.turn > 0 &&
            !(r && r.age < A0) &&
            (this.turnT = n.turn));
      }
      if (
        (this.turnT > 0 && (this.turnT -= e),
        (this.dir = this.turnT > 0 ? 0 : this.wantDir),
        (this.facing = this.wantDir === 3 ? -1 : 1),
        this.landed)
      ) {
        let e = y0(
          `blink`,
          0,
          this.view(),
          this.dir === 3 ? -this.landed[0] : this.landed[0],
          this.landed[1],
        );
        (e &&
          [e.sh[0], e.sh[1], e.fh[0], e.fh[1], e.ang, e.len].forEach((e, t) =>
            this.arm[t].reset(e),
          ),
          (this.landed = null));
      }
      let i = r && r.age < 0.05,
        a = 1 - Math.exp(-12 * e);
      i ||
        ((this.vx += ((t.x - this.lastIn.x) / e - this.vx) * a),
        (this.vy += ((t.y - this.lastIn.y) / e - this.vy) * a));
      let o = i ? 0 : Math.hypot(t.x - this.lastIn.x, t.y - this.lastIn.y);
      ((this.lastIn = { x: t.x, y: t.y }),
        (this.speed = Math.hypot(this.vx, this.vy)));
      let s = this.speed > 6,
        c = this.dir === 2 ? 1 : this.dir === 3 ? -1 : 0,
        l = this.dir === 0 ? 1 : this.dir === 1 ? -1 : 0,
        u = this.vx * c + this.vy * l;
      ((this.accF +=
        ((i ? 0 : (u - this.vF) / e) - this.accF) * (1 - Math.exp(-20 * e))),
        (this.vF = u));
      let d = aH(this.speed / b0, 0, 1);
      this.sprintK +=
        ((t.sprint ?? 0) - this.sprintK) * (1 - Math.exp(-10 * e));
      let f = this.sprintK,
        p = t.walls,
        m = p
          ? this.dir === 2
            ? p[0]
            : this.dir === 3
              ? p[1]
              : this.dir === 1
                ? p[2]
                : p[3]
          : 1 / 0,
        h = p ? (this.dir === 0 ? p[1] : this.dir === 1 ? p[0] : p[2]) : 1 / 0,
        g = !!t.walking && this.speed < 10 && m <= (this.dir >= 2 ? 6 : 4);
      this.stillT = s || !p ? 0 : this.stillT + e;
      let _ = Math.floor(this.phase / Math.PI + 1e-9),
        v = Math.max(
          1,
          oH(n.stride * oH(n.strideMin, 1, d), n.strideSprint, f),
        );
      if (s) this.phase += (o / v) * Math.PI;
      else if (g) this.phase += 2.2 * Math.PI * e;
      else {
        let t = Math.ceil(this.phase / Math.PI - 1e-6) * Math.PI;
        this.phase = Math.min(
          t,
          this.phase + (Math.PI / Math.max(0.02, n.settle)) * e,
        );
      }
      Math.floor(this.phase / Math.PI + 1e-9) !== _ &&
        ((this.stepSide = -this.stepSide),
        this.hat.kick(this.stepSide * n.waddle),
        this.hem.kick(-this.stepSide * n.waddle * 0.6));
      let y = s || g || Math.abs(Math.sin(this.phase)) > 0.05,
        b = b0 / Math.max(0.05, n.accel || 0.12),
        x = g
          ? n.leanAcc
          : aH(this.accF / b, -1, 1) * n.leanAcc +
            d * n.leanRun +
            f * n.leanSprint;
      this.lean.step(e, x);
      let S = Math.sin(this.phase),
        C = +(Math.sin(this.t * 3.4 + this.breathPhase) > 0.35),
        w = this.dir < 2 ? Math.min(1, Math.abs(this.lean.y) * 0.6) : 0;
      this.bob.step(
        e,
        (y ? (n.bobAmp + n.bobSprint * f) * (1 - Math.abs(S)) : C * n.breath) +
          w,
      );
      let T = n.hatMax + n.hatSprint * f,
        E = n.hemMax + n.hemSprint * f;
      (this.hat.step(e, aH(-this.vx * n.hatK, -T, T)),
        this.hem.step(e, aH(-this.vx * n.hemK, -E, E) + (s ? S * 0.4 : 0)));
      let D = this.view(),
        O = t.gesture,
        k = null;
      if (((this.hot = !1), O && O.age <= g0(O.kind, O.delay))) {
        ((O.age < this.gAge || O.kind !== this.gKind) && this.cast(O.kind),
          (this.gAge = O.age),
          (this.gKind = O.kind));
        let e = D === 2 && this.dir === 3 ? -O.ax : O.ax;
        ((k = y0(O.kind, O.age, D, e, O.ay, O.delay)),
          (this.hot = m0(O.kind, O.age, O.delay)),
          O.kind === `nova` &&
            O.age >= 0.29 &&
            !this.gSlammed &&
            ((this.gSlammed = !0),
            this.bob.kick(25),
            this.events.push({
              t: `stomp`,
              dx: this.dir === 3 ? -3 : 3,
              dy: 0,
              power: 1,
            })),
          k &&
            O.kind === `chain` &&
            O.age > 0.08 &&
            O.age < 0.32 &&
            (k.fh = [
              k.fh[0] + Math.sin(this.t * 150) * 0.6,
              k.fh[1] + Math.cos(this.t * 110) * 0.6,
            ]));
      } else ((this.gAge = 1 / 0), (this.gKind = ``));
      if (!k && r && r.age < g0(`blink`)) {
        let e = Math.hypot(r.dx, r.dy) || 1;
        k = y0(
          `blink`,
          r.age,
          D,
          ((this.dir === 3 ? -1 : 1) * r.dx) / e,
          r.dy / e,
        );
      }
      if (((this.posed = !!k), !k)) {
        k = y ? a0(D, S, 1 + n.pump * f) : i0(D);
        let e = this.wallHand(D, m, h, s || g);
        ((this.touching = !!e),
          e &&
            ((k.fh = e.fh),
            e.sh && (k.sh = e.sh),
            e.ang !== void 0 && (k.ang = e.ang),
            D === 2 && (k.far = !0)));
      }
      ([k.sh[0], k.sh[1], k.fh[0], k.fh[1], k.ang, k.len].forEach((t, n) =>
        this.arm[n].step(e, t),
      ),
        (this.far = k.far),
        this.off.step(e, 0),
        (this.top = 28));
    }
    wallHand(e, t, n, r) {
      let i = this.p;
      if (i.reach <= 0) return null;
      let a = r || this.touching || this.stillT >= i.rest,
        o = (e, t) => aH((i.reach - e) / Math.max(1, i.reach - t), 0, 1);
      if (e === 2) {
        if (t <= i.reach && (r || a)) {
          let e = o(t, 5);
          return { fh: [Math.min(8 + t + 1, 13.5), oH(16, 12, e)] };
        }
        return n <= 3 && a ? { fh: [2.5, 11.5] } : null;
      }
      if (t <= i.reach && (r || a)) {
        let n = o(t, e === 1 ? 2 : 3);
        return {
          fh:
            e === 1
              ? [oH(12.5, 13, n), oH(16.5, 10.5, n)]
              : [oH(4, 5.5, n), oH(17.5, 14.5, n)],
        };
      }
      if (n <= i.reach && a) {
        let t = o(n, 5);
        return {
          fh:
            e === 1
              ? [oH(12.5, Math.min(8 + n - 0.5, 15), t), oH(17.5, 15, t)]
              : [oH(3.5, Math.max(8 - n + 0.5, 1), t), oH(17.5, 15, t)],
        };
      }
      return null;
    }
    cast(e) {
      let t = this.p,
        n =
          this.dir === 2 ? -1 : this.dir === 3 ? 1 : this.rand() < 0.5 ? -1 : 1,
        r = e === `nova` || e === `strike` ? 0.6 : 1;
      (this.hat.kick(n * t.recoil * r),
        this.hem.kick(n * t.recoil * 0.5 * r),
        this.off.kick(n * t.recoil * 0.25 * r),
        (this.gSlammed = !1));
    }
    blinked(e, t) {
      let n = Math.hypot(e, t) || 1,
        r = this.lastR;
      if (r) {
        let i = p0(this.view(), ((this.dir === 3 ? -1 : 1) * e) / n, t / n);
        this.raster(
          { ...r.pose, arms: { ...i, hot: !1 } },
          r.tip,
          r.hem,
          1,
          r.lean,
        );
      }
      (this.buf.bounds() &&
        (this.ghost = {
          px: this.buf.px.slice(),
          w: this.buf.w,
          dx: -e,
          dy: -t,
          flip: !1,
        }),
        (this.ghostAge = 0),
        (this.landed = [e / n, t / n]),
        this.hat.kick((-e / n) * 70),
        this.hem.kick((-e / n) * 45),
        (this.key = ``));
    }
    hit(e) {
      let t = Number.isNaN(e) ? -this.facing : e < this.x ? 1 : -1;
      (this.off.kick(t * 30), this.hat.kick(t * 40), this.hem.kick(t * 25));
    }
    strike() {}
    die() {
      this.dead = !0;
    }
    uploads() {
      return this.buf.uploads;
    }
    draw(e, t, n, r) {
      this.drawGhost(e, t, n);
      let i = t - T0 + Math.round(this.off.y),
        a = n - E0,
        o = this.ghost && this.ghostAge < j0;
      if (
        this.key &&
        !o &&
        !this.drawDue() &&
        this.key.endsWith(r ? `F` : `-`)
      ) {
        e.drawImage(this.buf.canvas, i, a);
        return;
      }
      let s = this.p,
        c = this.dir >= 2,
        l = Math.sin(this.phase),
        u = this.speed > 6,
        d = c && u ? Math.round(l * s.legAmp) : 0,
        f = s.liftAmp + s.liftSprint * this.sprintK,
        p = !c && u ? Math.round(Math.max(0, l) * f) : 0,
        m = !c && u ? Math.round(Math.max(0, -l) * f) : 0,
        h = aH(this.snap(`bob`, this.bob.y), -1, 2),
        g = this.dir === 3 ? -1 : 1,
        _ = (this.sn.tip ??= new cH()).half(this.hat.y * g, s.snap),
        v = (this.sn.hem ??= new cH()).half(this.hem.y * g, s.snap),
        y = [this.snap(`shx`, this.arm[0].y), this.snap(`shy`, this.arm[1].y)];
      c && !this.posed && !this.touching && (y[0] = Math.max(12, y[0]));
      let b = [
          this.snap(`fhx`, this.arm[2].y),
          this.snap(`fhy`, this.arm[3].y),
        ],
        x = Math.max(1, s.staffStep) * (Math.PI / 180),
        S = this.snap(`ang`, this.arm[4].y / x, 0.6) * x,
        C = Math.round(aH(this.arm[5].y, 0.4, 1) * 8) / 8,
        w = o ? Math.min(7, Math.floor((this.ghostAge / j0) * 8)) : 8,
        T = c ? (this.sn.lean ??= new cH()).at(this.lean.y, s.snap) : 0,
        E = `${this.look.key},${this.dir},${d},${p},${m},${h},${_},${v},${y},${b},${Math.round(S * 100)},${C},${+!!this.far},${+!!this.hot},${T},${w}${r ? `F` : `-`}`;
      if (E !== this.key) {
        this.key = E;
        let e = {
          leg: d,
          liftL: p,
          liftR: m,
          bob: h,
          cast: !1,
          lift: 0,
          arms: { sh: y, fh: b, ang: S, len: C, far: this.far, hot: this.hot },
        };
        (this.raster(e, _, v, w / 8, T),
          (this.lastR = { pose: e, tip: _, hem: v, lean: T }),
          this.buf.upload(this.pal.pal, r));
      }
      e.drawImage(this.buf.canvas, i, a);
    }
    raster(e, t, n, r, i = 0) {
      let a = this.buf,
        o = this.dir === 3 ? 2 : this.dir;
      (a.clear(),
        ch(this.ctxBody, this.look.colors, o, e),
        this.look.decorate?.(this.ctxBody, o, e.bob, !1, !0));
      for (let n = 0; n < D0; n++)
        a.shiftRow(12 + n + e.bob, Math.round((t * (D0 - n)) / D0));
      let s = O0 + e.bob;
      for (let e = s + 1; e <= k0; e++)
        a.shiftRow(12 + e, Math.round((n * (e - s)) / (k0 - s)));
      if (
        (this.backBuf.clear(),
        rh(this.ctxBack, this.look.colors, o, e),
        a.underlay(this.backBuf),
        this.frontBuf.clear(),
        ah(this.ctxFront, this.look.colors, o, e),
        a.overlay(this.frontBuf),
        i)
      )
        for (let e = 0; e < E0; e++)
          a.shiftRow(e, Math.round((i * (E0 - e)) / 24));
      if ((this.dir === 3 && a.flipX(), r < 1)) {
        let e = this.pal.index(this.look.colors.glow),
          t = a.bounds();
        if (t) {
          let [n, i, o, s] = t;
          for (let t = i; t <= s; t++)
            for (let i = n; i <= o; i++) {
              let n = t * a.w + i;
              if (a.px[n] === 0) continue;
              let o = M0(n);
              o > r + 0.25 ? (a.px[n] = 0) : o > r && (a.px[n] = e);
            }
        }
      }
      a.outline(1);
    }
    drawGhost(e, t, n) {
      let r = this.ghost;
      if (!r) return;
      if (this.ghostAge >= A0) {
        this.ghost = null;
        return;
      }
      let i = this.ghostAge / A0,
        a = this.ghostBuf,
        o = this.pal.index(this.look.colors.glow),
        s = this.pal.index(this.look.colors.spark);
      a.clear();
      for (let e = 0; e < r.px.length; e++) {
        let t = r.px[e];
        if (t === 0) continue;
        let n = M0(e);
        n < i ||
          a.set(e % r.w, (e / r.w) | 0, n < i + 0.2 ? s : i > 0.35 ? o : t);
      }
      (a.upload(this.pal.pal),
        e.drawImage(
          a.canvas,
          Math.round(t + r.dx - T0),
          Math.round(n + r.dy - E0 - i * 4),
        ));
    }
    debug(e, t, n) {
      ((e.fillStyle = `#ffe14d`),
        e.fillRect(t, n, 1, 1),
        (e.fillStyle = `#4dd2ff`),
        e.fillRect(Math.round(t + this.hat.y), n - 26, 1, 1),
        (e.fillStyle = `#ff9a2a`),
        e.fillRect(Math.round(t + this.hem.y), n - 4, 1, 1));
      let r = this.dir === 3 ? -1 : 1,
        i = (e) => Math.round(t + r * (e + 2 - 10));
      ((e.fillStyle = `#ff4dd2`),
        e.fillRect(
          i(this.arm[0].y),
          Math.round(n + this.arm[1].y + 2 - 26),
          1,
          1,
        ),
        (e.fillStyle = `#9be26b`),
        e.fillRect(
          i(this.arm[2].y),
          Math.round(n + this.arm[3].y + 2 - 26),
          1,
          1,
        ));
    }
  },
  P0 = dH([
    `#120b1a`,
    `#3b86ff`,
    `#4aa6ff`,
    `#aee6ff`,
    `#ffffff`,
    `#0a2250`,
    `#7fc4ff`,
  ]),
  F0 = 1,
  I0 = 2,
  L0 = 3,
  R0 = 4,
  z0 = 5,
  B0 = 6,
  V0 = 7,
  H0 = 48,
  U0 = 52,
  W0 = 24,
  G0 = 46,
  K0 = 4,
  q0 = class extends uH {
    fx;
    fy;
    fz;
    face;
    gather = new sH(4, 0.7, 0, 0);
    tx = new Float32Array(K0);
    tz = new Float32Array(K0);
    tvx = new Float32Array(K0);
    tvz = new Float32Array(K0);
    z;
    phase;
    flare = 0;
    dying = 0;
    blinkT = 0;
    nextBlink;
    flickAt = 0;
    flick = new Float32Array(6);
    aimX = 0;
    aimY = 0;
    buf = new pH(H0, U0);
    sn = {};
    key = ``;
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i);
      let a = this.p;
      ((this.fx = new sH(a.follow, a.followZ, 0, n)),
        (this.fy = new sH(a.follow, a.followZ, 0, r)),
        (this.fz = new sH(1.3, 0.5, 0, a.hover)),
        (this.face = new sH(a.eyeTurn, 0.8, 0, this.facing)),
        (this.z = a.hover),
        (this.phase = this.rand() * Math.PI * 2),
        (this.nextBlink = 1 + this.rand() * 3),
        this.reset(n, r, i));
    }
    retune() {
      let e = this.p;
      (this.fx.tune(e.follow, e.followZ, 0),
        this.fy.tune(e.follow, e.followZ, 0),
        this.face.tune(e.eyeTurn, 0.8, 0));
    }
    reset(e, t, n) {
      let r = this.p;
      ((this.x = e),
        (this.y = t),
        (this.facing = n < 0 ? -1 : 1),
        (this.dead = !1),
        (this.dying = 0),
        (this.flare = 0),
        this.fx.reset(e),
        this.fy.reset(t),
        this.fz.reset(r.hover),
        this.face.reset(this.facing),
        this.gather.reset(0),
        (this.z = r.hover));
      for (let t = 0; t < K0; t++)
        ((this.tx[t] = e - this.facing * r.gap * (t + 1) * 0.85),
          (this.tz[t] = this.z + r.gap * (t + 1) * 0.5),
          (this.tvx[t] = this.tvz[t] = 0));
      for (let e in this.sn) this.sn[e].reset();
      this.key = ``;
    }
    snap(e, t) {
      return (this.sn[e] ??= new cH()).at(t, this.p.snap);
    }
    tick(e, t) {
      let n = this.p;
      (this.dead || (this.facing = t.facing < 0 ? -1 : 1),
        this.face.step(e, this.facing));
      let r = t.windup,
        i = !this.dead && r && !r.landed ? r.k : 0;
      if (r) {
        let e = r.aimX - this.x,
          t = r.aimY - this.y,
          n = Math.hypot(e, t) || 1;
        ((this.aimX = e / n), (this.aimY = t / n));
      }
      this.gather.step(e, i);
      let a = this.gather.y * n.gather;
      ((this.x = this.fx.step(e, t.x - this.aimX * a)),
        (this.y = this.fy.step(e, t.y - this.aimY * a * 0.6)));
      let o = Math.sin(this.t * Math.PI * 2 * n.bobHz + this.phase) * n.bob;
      if (
        ((this.dying = this.dead ? Math.min(1, this.dying + e / 0.6) : 0),
        (this.z = this.fz.step(
          e,
          n.hover + o + (t.engaged ? -1 : 0) + this.dying * 8,
        )),
        (this.flare = Math.max(0, this.flare - e)),
        (this.blinkT -= e),
        (this.nextBlink -= e) <= 0 &&
          ((this.blinkT = 0.1), (this.nextBlink = 2 + this.rand() * 4)),
        (this.flickAt -= e) <= 0)
      ) {
        this.flickAt = 1 / Math.max(1, n.flickerHz);
        for (let e = 0; e < this.flick.length; e++)
          this.flick[e] = (this.rand() - 0.5) * 2 * n.flicker;
      }
      let s = Math.exp(-n.trailDamp * e),
        c = this.face.y;
      for (let t = 0; t < K0; t++) {
        let r = t === 0 ? this.x : this.tx[t - 1],
          i = t === 0 ? this.z : this.tz[t - 1],
          a =
            Math.sin(this.t * 7 + t * 1.3 + this.phase) *
            n.flutter *
            (t + 1) *
            0.25,
          o = r - c * n.gap * 0.85 + a,
          l = i + n.gap * 0.5 + (this.dead ? 3 * this.dying * (t + 1) : 0);
        ((this.tvx[t] =
          (this.tvx[t] + n.trailStiff * (o - this.tx[t]) * e) * s),
          (this.tvz[t] =
            (this.tvz[t] + (n.trailStiff * (l - this.tz[t]) + n.rise) * e) * s),
          (this.tx[t] += this.tvx[t] * e),
          (this.tz[t] += this.tvz[t] * e));
        let u = this.tx[t] - r,
          d = this.tz[t] - i,
          f = Math.hypot(u, d),
          p = n.gap * (this.dead ? 3 : 1.5);
        f > p &&
          ((this.tx[t] = r + (u / f) * p), (this.tz[t] = i + (d / f) * p));
      }
      ((this.lift = Math.max(0, this.z - n.size)),
        (this.top = Math.ceil(this.z + n.size + 3)),
        (this.glow = { dx: 0, dy: -this.z }),
        (this.glowK = this.dead
          ? 1 - this.dying
          : 1 + 0.7 * this.gather.y + (this.flare > 0 ? 0.5 : 0)));
    }
    hit(e) {
      let t = Number.isNaN(e) ? -this.facing : e < this.x ? 1 : -1;
      (this.fx.kick(t * 60), this.fz.kick(20));
      for (let e = 0; e < K0; e++) this.tvx[e] -= t * 40;
    }
    strike(e, t) {
      if (!this.dead) {
        (this.fx.kick(-e * this.p.recoil),
          this.fy.kick(-t * this.p.recoil * 0.6));
        for (let t = 0; t < K0; t++) this.tvx[t] += e * 30;
        ((this.flare = 0.14), this.gather.reset(0));
      }
    }
    die() {
      this.dead = !0;
    }
    uploads() {
      return this.buf.uploads;
    }
    draw(e, t, n, r) {
      if (this.key && !this.drawDue() && this.key.endsWith(r ? `F` : `-`)) {
        e.drawImage(this.buf.canvas, t - W0, n - G0);
        return;
      }
      let i = this.p,
        a = this.snap(`cz`, this.z),
        o = [];
      for (let e = 0; e < K0; e++)
        o.push(
          this.snap(`t${e}x`, this.tx[e] - this.x),
          this.snap(`t${e}z`, this.tz[e]),
        );
      let s = this.face.y,
        c = i.size * (1 - this.dying * 0.85),
        l = this.gather.y,
        u = this.flick,
        d = [
          Math.round((c + u[0] * 0.5) * 2) / 2,
          Math.round((c - 1.5 + l * 0.5) * 2) / 2,
          Math.round((2.6 + l + (this.flare > 0 ? 1.2 : 0)) * 2) / 2,
        ],
        f = [];
      for (let e = 0; e < K0; e++)
        f.push(
          Math.max(
            0,
            Math.round(
              (oH(3.3, 1.6, e / 3) * (1 - this.dying * 0.6) + u[e + 1] * 0.6) *
                2,
            ) / 2,
          ),
        );
      let p = Math.round(2 * s - 1),
        m = Math.round(2 * s + 1),
        h = this.blinkT > 0 || this.dead,
        g = Math.round(u[5] * 0.8),
        _ = `${a},${o.join(`,`)},${d.join(`,`)},${f.join(`,`)},${p},${m},${+!!h},${g}${r ? `F` : `-`}`;
      (_ !== this.key &&
        ((this.key = _),
        this.raster(a, o, d, f, p, m, h, g),
        this.buf.upload(P0, r)),
        e.drawImage(this.buf.canvas, t - W0, n - G0));
    }
    raster(e, t, n, r, i, a, o, s) {
      let c = this.buf;
      c.clear();
      for (let e = 3; e >= 0; e--) {
        let n = r[e] - 0.2;
        n < 1.2 ||
          c.ellipse(
            W0 + t[e * 2] + 0.5,
            G0 - t[e * 2 + 1] + 0.5,
            n,
            n * 1.1,
            e < 2 ? I0 : V0,
          );
      }
      let l = 24.5,
        u = G0 - e + 0.5;
      if (n[0] >= 1) {
        (c.ellipse(l, u, n[0] - 0.3, n[0] - 0.3, L0),
          c.ellipse(l, u, n[1] - 0.3, n[1] - 0.3, R0),
          c.ellipse(l, u - 1, n[2], n[2], z0));
        let e = Math.round(u - n[0]);
        (c.rect(W0 + s, e - 2, 1, 2, R0),
          o ||
            (c.set(W0 + i, Math.round(u - 1.5), B0),
            c.set(W0 + a, Math.round(u - 1.5), B0)));
      }
      c.outline(F0);
    }
    debug(e, t, n) {
      ((e.fillStyle = `#ffe14d`),
        e.fillRect(t, Math.round(n - this.z), 1, 1),
        (e.fillStyle = `#c38bff`));
      for (let r = 0; r < K0; r++)
        e.fillRect(
          Math.round(t + this.tx[r] - this.x),
          Math.round(n - this.tz[r]),
          1,
          1,
        );
      ((e.fillStyle = `#4dd2ff`),
        e.fillRect(t, n, 1, 1),
        this.gather.y > 0.05 &&
          ((e.fillStyle = `#ff9a2a`),
          e.fillRect(
            Math.round(t + this.aimX * 8),
            Math.round(n + this.aimY * 8),
            1,
            1,
          )));
    }
  },
  J0 = dH([
    `#120b1a`,
    `#45404f`,
    `#6f6a7a`,
    `#9a95a6`,
    `#4f7a3a`,
    `#7ef9ff`,
    `#ffffff`,
    `#2c4a52`,
  ]),
  Y0 = 1,
  X0 = 2,
  Z0 = 3,
  Q0 = 4,
  $0 = 5,
  e2 = 6,
  t2 = 7,
  n2 = 8,
  r2 = 76,
  i2 = 64,
  a2 = 38,
  o2 = 54,
  s2 = Math.PI / 180,
  c2 = 12,
  l2 = 8.5,
  u2 = 5.5,
  d2 = 4.5,
  f2 = 2.5,
  p2 = 7,
  m2 = (e) => e * e * (3 - 2 * e),
  h2 = class extends uH {
    rootX;
    rootY;
    hipZ;
    sway;
    roll;
    headU;
    headZ;
    arm;
    eye;
    feet;
    lastFoot = 0;
    lastIn;
    vx = 0;
    vy = 0;
    speed = 0;
    stillT = 0;
    actId = ``;
    actSeen = 0;
    actK = 0;
    burning = !1;
    slamT = 0;
    dying = 0;
    hum;
    look = { u: 0, until: 0 };
    nextLook;
    tremble = 0;
    buf = new pH(r2, i2);
    sn = {};
    key = ``;
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i);
      let a = this.p;
      ((this.rootX = new sH(a.follow, 1, 0, n)),
        (this.rootY = new sH(a.follow, 1, 0, r)),
        (this.hipZ = new sH(a.bodyF, a.bodyZ, 0, a.hip)),
        (this.sway = new sH(a.bodyF, a.bodyZ, 0, 0)),
        (this.roll = new sH(a.bodyF, 1, 0, 0)),
        (this.headU = new sH(a.headF, a.headZ, 0, 0)),
        (this.headZ = new sH(a.headF, a.headZ, 0, a.hip + 20.5)),
        (this.arm = [
          new sH(a.armF, a.armZ, 0, 0),
          new sH(a.armF, a.armZ, 0, 0),
        ]),
        (this.eye = new sH(4, 1, 0, this.facing)));
      let o = (e) => ({
        side: e,
        x: n,
        y: r,
        z: 0,
        stepping: !1,
        s: 0,
        fx: n,
        fy: r,
        held: !1,
      });
      ((this.feet = [o(-1), o(1)]),
        (this.lastIn = { x: n, y: r }),
        (this.hum = this.rand() * 10),
        (this.nextLook = 2 + this.rand() * 4),
        this.reset(n, r, i));
    }
    retune() {
      let e = this.p;
      (this.rootX.tune(e.follow, 1, 0),
        this.rootY.tune(e.follow, 1, 0),
        this.hipZ.tune(e.bodyF, e.bodyZ, 0),
        this.sway.tune(e.bodyF, e.bodyZ, 0),
        this.roll.tune(e.bodyF, 1, 0),
        this.headU.tune(e.headF, e.headZ, 0),
        this.headZ.tune(e.headF, e.headZ, 0));
      for (let t of this.arm) t.tune(e.armF, e.armZ, 0);
    }
    reset(e, t, n) {
      let r = this.p;
      ((this.x = e),
        (this.y = t),
        (this.facing = n < 0 ? -1 : 1),
        (this.dead = !1),
        (this.dying = 0),
        (this.actId = ``),
        (this.actK = 0),
        (this.burning = !1),
        (this.slamT = 0),
        this.rootX.reset(e),
        this.rootY.reset(t),
        this.hipZ.reset(r.hip),
        this.sway.reset(0),
        this.roll.reset(0),
        this.headU.reset(0),
        this.headZ.reset(r.hip + 20.5));
      for (let e of this.arm) e.reset(0);
      (this.eye.reset(this.facing), (this.lastIn = { x: e, y: t }));
      for (let n of this.feet)
        ((n.x = n.fx = e + n.side * r.stance),
          (n.y = n.fy = t),
          (n.z = 0),
          (n.stepping = n.held = !1));
      for (let e in this.sn) this.sn[e].reset();
      this.key = ``;
    }
    home(e) {
      let t = this.dead ? 2 : 0;
      return [this.x + e.side * (this.p.stance + t), this.y];
    }
    stomp(e, t, n) {
      (this.events.push({ t: `stomp`, dx: e, dy: t, power: n }),
        this.hipZ.kick(-14 * n),
        this.headZ.kick(-10 * n));
    }
    tick(e, t) {
      let n = this.p,
        r = this.t;
      this.dead || (this.facing = t.facing < 0 ? -1 : 1);
      let i = 1 - Math.exp(-8 * e);
      ((this.vx += ((t.x - this.lastIn.x) / e - this.vx) * i),
        (this.vy += ((t.y - this.lastIn.y) / e - this.vy) * i),
        (this.lastIn = { x: t.x, y: t.y }),
        (this.speed = Math.hypot(this.vx, this.vy)),
        (this.stillT = this.speed < 2 ? this.stillT + e : 0),
        (this.x = this.rootX.step(e, t.x)),
        (this.y = this.rootY.step(e, t.y)),
        (this.dying = this.dead ? Math.min(1, this.dying + e / 0.45) : 0));
      let a = this.dead ? null : t.windup;
      (a
        ? ((this.actId = a.id), (this.actSeen = r))
        : r - this.actSeen > 0.4 && (this.actId = ``),
        (this.actK = a && !a.landed ? a.k : 0),
        (this.burning = !!a && a.landed && a.hold > 0));
      let o = this.actId,
        s =
          this.actK > 0 &&
          (o === `crush` || ![`shardquake`, `lattice`, `facetweb`].includes(o)),
        c = this.actK > 0 && o === `shardquake`,
        l =
          (this.actK > 0 || this.burning) &&
          (o === `lattice` || o === `facetweb`);
      ((this.slamT = Math.max(0, this.slamT - e)),
        (this.tremble = this.burning ? Math.sin(r * 70) * 0.6 : 0),
        (this.hum += e),
        !this.dead &&
          this.speed < 2 &&
          !a &&
          (this.nextLook -= e) <= 0 &&
          ((this.look = {
            u: (this.rand() < 0.5 ? -1 : 1) * (1 + this.rand()),
            until: r + 1.2 + this.rand(),
          }),
          (this.nextLook = 3 + this.rand() * 5)),
        r > this.look.until && (this.look.u = 0),
        this.eye.step(
          e,
          this.dead
            ? this.facing
            : aH(this.facing + this.look.u * 0.6, -1.6, 1.6),
        ));
      let u = c ? this.feet[+(this.facing > 0)] : null,
        d = -1;
      if (
        (this.feet.forEach((e, t) => {
          e.stepping && (d = t);
        }),
        !this.dead && d < 0 && !u)
      ) {
        let e = this.feet.map((e) => {
            let [t, n] = this.home(e);
            return Math.hypot(e.x - t, e.y - n);
          }),
          t = this.stillT > 0.3,
          r = e.map((e) => e > n.stepDist || (t && e > 0.8)),
          i = -1;
        if (
          (r[0] && r[1]
            ? (i = +(this.lastFoot === 0))
            : r[0]
              ? (i = 0)
              : r[1] && (i = 1),
          i >= 0)
        ) {
          let e = this.feet[i];
          ((e.stepping = !0),
            (e.s = 0),
            (e.fx = e.x),
            (e.fy = e.y),
            (this.lastFoot = i));
        }
      }
      let f = 0,
        p = 0;
      for (let t of this.feet) {
        let [r, i] = this.home(t);
        if (t === u) {
          ((t.held = !0),
            (t.stepping = !1),
            (t.z = n.stamp * m2(this.actK)),
            (t.x += (r - t.x) * (1 - Math.exp(-6 * e))),
            (t.y += (i - t.y) * (1 - Math.exp(-6 * e))),
            (f = -t.side * 1.5 * this.actK),
            (p = t.side * 4 * s2 * this.actK));
          continue;
        }
        if ((t.held && ((t.held = !1), (t.z = 0)), this.dead)) {
          ((t.x += (r - t.x) * (1 - Math.exp(-5 * e))), (t.z = 0));
          continue;
        }
        if (!t.stepping) continue;
        let a = n.stepT;
        t.s = Math.min(1, t.s + e / a);
        let o = r + aH(this.vx * a * 0.6, -n.stepDist, n.stepDist),
          s = i + aH(this.vy * a * 0.6, -n.stepDist, n.stepDist),
          c = m2(t.s);
        ((t.x = oH(t.fx, o, c)),
          (t.y = oH(t.fy, s, c)),
          (t.z = n.lift * Math.sin(Math.PI * t.s)),
          (f = -t.side * n.sway),
          (p = t.side * n.roll * s2 * Math.sin(Math.PI * t.s)),
          t.s >= 1 &&
            ((t.stepping = !1),
            (t.z = 0),
            this.stomp(t.x - this.x, t.y - this.y, 1)));
      }
      let m = this.dead
        ? 1
        : n.hip + (s ? 0.8 * m2(this.actK) : 0) - (c ? 0.5 * this.actK : 0);
      (this.hipZ.step(e, m),
        this.sway.step(e, this.dead ? 0 : f),
        this.roll.step(e, this.dead ? 3 * s2 : p));
      let h = this.hipZ.y + l2,
        g = this.dead ? 3 * this.facing : this.sway.y + this.tremble,
        _ = this.dead
          ? h + l2 + 1
          : h + l2 + d2 - 1 + +!!l + (s ? 0.5 * this.actK : 0);
      (this.headU.step(e, g), this.headZ.step(e, _));
      for (let t = 0; t < 2; t++) {
        let r = 0,
          i = this.feet[t];
        (i.stepping && (r = 6 * s2 * Math.sin(Math.PI * i.s)),
          s && (r = oH(0, n.raise * s2, m2(this.actK))),
          c && (r = 30 * s2 * this.actK),
          l && (r = (this.burning ? 85 : 85 * m2(this.actK)) * s2),
          this.slamT > 0 && (r = -14 * s2),
          this.dead && (r = 24 * s2),
          this.arm[t].step(e, r));
      }
      ((this.top = Math.ceil(this.headZ.y + d2 + 2)),
        (this.glow = { dx: 0, dy: -(h + 7) }));
      let v = +!!l;
      this.glowK = this.dead
        ? 0.25 * (1 - this.dying)
        : 1 + 0.8 * v + (s ? 0.3 * this.actK : 0);
    }
    hit(e) {
      let t = Number.isNaN(e) ? -this.facing : e < this.x ? 1 : -1;
      (this.sway.kick(t * 12),
        this.headU.kick(t * 18),
        this.roll.kick(-t * 0.6));
    }
    strike(e, t) {
      if (this.dead || this.actId === `lattice` || this.actId === `facetweb`)
        return;
      let n = this.feet.find((e) => e.held);
      if (this.actId === `shardquake` || n) {
        let e = n ?? this.feet[+(this.facing > 0)];
        ((e.held = !1), (e.z = 0), this.stomp(e.x - this.x, e.y - this.y, 2.5));
      } else {
        this.slamT = 0.32;
        for (let e of this.arm) e.kick(-22);
        this.stomp(e * 9, t * 6 + 2, 2);
      }
      this.actId = ``;
    }
    die() {
      ((this.dead = !0), (this.actId = ``));
      for (let e of this.feet) ((e.stepping = !1), (e.held = !1));
    }
    uploads() {
      return this.buf.uploads;
    }
    snap(e, t, n = this.p.snap) {
      return (this.sn[e] ??= new cH()).at(t, n);
    }
    snapAng(e, t) {
      let n = Math.max(1, this.p.angleStep) * s2;
      return this.snap(e, t / n, 0.6) * n;
    }
    draw(e, t, n, r) {
      if (this.key && !this.drawDue() && this.key.endsWith(r ? `F` : `-`)) {
        e.drawImage(this.buf.canvas, t - a2, n - o2);
        return;
      }
      let i = this.facing,
        a = this.snap(`tx`, this.sway.y),
        o = this.snap(`ty`, -(this.hipZ.y + l2)),
        s = this.snapAng(`roll`, this.roll.y),
        c = this.snap(`hx`, this.headU.y),
        l = this.snap(`hy`, -this.headZ.y),
        u = [
          this.snapAng(`a0`, this.arm[0].y),
          this.snapAng(`a1`, this.arm[1].y),
        ],
        d = Math.round(this.x),
        f = Math.round(this.y),
        p = this.feet.map((e) => [
          Math.round(e.x) - d,
          Math.round(e.y) - f - Math.round(e.z),
        ]),
        m = Math.round(this.eye.y * 2) / 2,
        h =
          (this.actK > 0 || this.burning) &&
          (this.actId === `lattice` || this.actId === `facetweb`),
        g = this.dead
          ? 0
          : h
            ? 3
            : this.actK > 0 || this.hum % 1.8 < 0.35
              ? 2
              : 1,
        _ = `${a},${o},${Math.round(s / s2)},${c},${l},${u.map((e) => Math.round(e / s2)).join(`,`)},${p.join(`;`)},${m},${g},${i}${r ? `F` : `-`}`;
      (_ !== this.key &&
        ((this.key = _),
        this.raster(a, o, s, c, l, u, p, m, g),
        this.buf.upload(J0, r)),
        e.drawImage(this.buf.canvas, t - a2, n - o2));
    }
    raster(e, t, n, r, i, a, o, s, c) {
      let l = this.buf,
        u = this.p,
        d = this.facing;
      l.clear();
      let f = a2 + e + 0.5,
        p = o2 + t + 0.5,
        m = Math.cos(n),
        h = Math.sin(n),
        g = (e, t) => [f + e * m - t * h, p + e * h + t * m];
      for (let e = 0; e < 2; e++) {
        let [t, n] = g((e === 0 ? -1 : 1) * u.stance, 7.5),
          r = a2 + o[e][0] + 0.5,
          i = o2 + o[e][1] + 0.5;
        (l.poly([t - 3, t + 3, r + 3, r - 3], [n, n, i, i], 4, X0),
          l.rect(Math.round(r - 3.5), Math.round(i - 1.5), 7, 1, Z0));
      }
      let _ = c === 0 ? n2 : e2;
      l.plate(f, p, c2, l2, n, 2, (e, t) => {
        let n = e * d;
        if (c >= 1) {
          let e = +(c === 3),
            r = Math.abs(t + 2) < 0.5 + e * 0.5 && n >= -1.5 - e && n < 2.5 + e,
            i = t >= -3.5 - e && t < 0.5 + e && n >= -0.5 && n < 1.5;
          if (
            (r || i) &&
            c >= 2 &&
            Math.abs(n - 0.5) < 1 &&
            Math.abs(t + 2) < 1
          )
            return t2;
          if (r || i) return _;
        } else if (
          (Math.abs(t + 2) < 0.5 && n >= -1.5 && n < 2.5) ||
          (t >= -3.5 && t < 0.5 && n >= -0.5 && n < 1.5)
        )
          return n2;
        return (n >= -4.5 && n < -2.5 && Math.abs(t - 4) < 0.5) ||
          (n >= 3.5 && n < 4.5 && t >= 1.5 && t < 3.5)
          ? _
          : t < -5.5
            ? n >= -8.5 && n < -3.5 && t >= -6.5
              ? $0
              : Q0
            : n > 8
              ? X0
              : n >= -8.5 && n < -3.5 && t < -4.5
                ? $0
                : Z0;
      });
      let v = a2 + r + 0.5,
        y = o2 + i + 0.5,
        b = s * 2;
      l.plate(v, y, u2, d2, n * 0.6, 1.5, (e, t) => {
        let n = e * d;
        return t >= -0.5 && t < 1.5 && e >= b - 1.5 && e < b + 1.5
          ? c === 0
            ? n2
            : c >= 2
              ? t2
              : e2
          : t < -3.5 && n >= -5.5 && n < -1.5
            ? $0
            : t < -2.5
              ? Q0
              : Z0;
      });
      for (let e = 0; e < 2; e++) {
        let t = e === 0 ? -1 : 1,
          r = a[e],
          [i, o] = g(t * 14.5, -6.5),
          s = t * Math.sin(r),
          c = Math.cos(r),
          u = i + s * 5.5,
          d = o + c * 5.5;
        l.plate(u, d, f2, p2, -t * r + n, 1, (e, t) =>
          t < -6 ? Q0 : t < -4 || t > 5 ? Z0 : X0,
        );
      }
      l.outline(Y0);
    }
    debug(e, t, n) {
      let r = (r, i, a) => {
        ((e.fillStyle = a),
          e.fillRect(Math.round(t + r), Math.round(n + i), 1, 1));
      };
      (r(this.sway.y, -this.hipZ.y, `#ffe14d`),
        r(this.headU.y, -this.headZ.y, `#ff9a2a`),
        r(-0.5 * this.facing, -15, `#ff4dd2`));
      for (let e of this.feet) {
        let [t, n] = this.home(e);
        (r(t - this.x, n - this.y + 2, e.stepping ? `#4dd2ff` : `#9be26b`),
          r(
            e.x - this.x,
            e.y - this.y - e.z,
            e.held ? `#ff9a2a` : e.stepping ? `#4dd2ff` : `#ff4d6a`,
          ));
      }
    }
  },
  g2 = 84,
  _2 = 104,
  v2 = 42,
  y2 = 92,
  b2 = `#050208`,
  x2 = class {
    b;
    pal;
    ox;
    oy;
    constructor(e, t, n, r) {
      ((this.b = e), (this.pal = t), (this.ox = n), (this.oy = r));
    }
    P(e, t, n, r = 1, i = 1) {
      r <= 0 ||
        i <= 0 ||
        this.b.rect(
          this.ox + Math.round(e),
          this.oy + Math.round(t),
          r,
          i,
          this.pal.index(n),
        );
    }
    blob(e, t, n, r, i) {
      this.b.ellipse(this.ox + e, this.oy + t, n, r, this.pal.index(i));
    }
    line(e, t, n, r, i, a = 1) {
      let o = Math.max(
          1,
          Math.ceil(Math.max(Math.abs(n - e), Math.abs(r - t))),
        ),
        s = (a - 1) / 2;
      for (let c = 0; c <= o; c++) {
        let l = c / o;
        this.P(
          Math.round(e + (n - e) * l - s),
          Math.round(t + (r - t) * l - s),
          i,
          a,
          a,
        );
      }
    }
    has(e, t) {
      return this.b.get(this.ox + Math.round(e), this.oy + Math.round(t)) !== 0;
    }
    arm(e, t, n, r, i = {}) {
      let a = i.len ?? 5,
        o = t[0] - e[0],
        s = t[1] - e[1],
        c = Math.hypot(o, s) || 1e-4,
        l = t[0],
        u = t[1];
      c > 2 * a &&
        ((l = e[0] + (o / c) * 2 * a),
        (u = e[1] + (s / c) * 2 * a),
        (o = l - e[0]),
        (s = u - e[1]),
        (c = 2 * a));
      let d = c / 2,
        f = Math.sqrt(Math.max(0, a * a - d * d)) * (i.bend ?? 0.6),
        p = -s / c,
        m = o / c;
      (p * n < 0 || (p === 0 && m < 0)) && ((p = -p), (m = -m));
      let h = e[0] + (o / c) * d + p * f,
        g = e[1] + (s / c) * d + m * f,
        _ = i.w ?? 3,
        v = h + (l - h) * 0.8,
        y = g + (u - g) * 0.8;
      return (
        this.line(e[0], e[1], h, g, r, _),
        i.bare && u < e[1] - 3
          ? (this.line(h, g, v, y, i.bare, 2),
            this.P(Math.round(h - 1), Math.round(g - 1), i.cuff ?? r, 2, 2))
          : (this.line(h, g, v, y, r, _),
            i.cuff && this.P(Math.round(v - 1), Math.round(y), i.cuff, 2, 1)),
        i.skin &&
          this.P(
            Math.round(l - 1),
            Math.round(u - 0.5),
            i.skin,
            i.hw ?? 2,
            u < e[1] - 3 ? 2 : 1,
          ),
        [l, u]
      );
    }
    staff(e, t, n, r, i, a) {
      let o = Math.sin(t),
        s = -Math.cos(t),
        c = [e[0] + o * n, e[1] + s * n],
        l = [e[0] - o * r, e[1] - s * r];
      return (
        this.line(l[0], l[1], c[0], c[1], i),
        a && this.line(c[0] - o * 3, c[1] - s * 3, c[0], c[1], a),
        { top: c, foot: l }
      );
    }
    at(e, t, n, r, i) {
      let a = Math.cos(t),
        o = Math.sin(t);
      return [e[0] + r * n * a - i * o, e[1] + r * n * o + i * a];
    }
    stamp(e, t, n, r, i) {
      for (let [a, o] of r) {
        let r = this.at(e, t, n, a, o);
        this.P(Math.round(r[0]), Math.round(r[1]), i);
      }
    }
    rows(e, t, n, r, i) {
      for (let a = e; a <= t; a++) {
        let e = Math.round(n(a) - r(a)),
          t = Math.round(n(a) + r(a));
        for (let n = e; n <= t; n++) {
          let r = i(n, a, e, t);
          r && this.P(n, a, r);
        }
      }
    }
    crown(e, t, n = 0) {
      let r =
        n === 2
          ? [
              [-2, 1],
              [0, 0],
              [2, 1],
            ]
          : [
              [-3, 1],
              [0, 0],
              [3, 1],
            ];
      for (let [n, i] of r)
        (this.P(e + n, t + i, `#5a0a1a`, 1, 3),
          this.P(e + n, t + i + 1, `#b01a2a`));
      n !== 1 && this.P(e, t + 1, `#ffffff`);
    }
  },
  S2 = (e) => {
    let t = aH(e, 0, 1);
    return t * t * (3 - 2 * t);
  },
  C2 = (e, t, n) => [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n],
  w2 = class extends uH {
    spec;
    dir = 0;
    wantDir = 0;
    turnT = 0;
    vx = 0;
    vy = 0;
    phase = 0;
    lastIn;
    hem;
    lean;
    bob;
    rise;
    hands;
    props = {};
    act = null;
    actId = ``;
    actT0 = 0;
    actSeen = -9;
    lastK = 0;
    linger = 0.35;
    landed = !1;
    landedT = 0;
    pose;
    dying = 0;
    hurtT = -9;
    stepSide = 1;
    glowAt = null;
    pin = 0;
    armMul = 1;
    pal = new fH([b2]);
    buf = new pH(g2, _2);
    sn = {};
    key = ``;
    constructor(e, t, n, r, i) {
      (super(e.id, t, n, r, i), (this.spec = e));
      let a = this.p;
      ((this.lastIn = { x: n, y: r }),
        (this.hem = new sH(a.hemF, a.hemZ, 0, 0)),
        (this.lean = new sH(a.leanF, a.leanZ, 0, 0)),
        (this.bob = new sH(a.bobF, a.bobZ, 0, 0)),
        (this.rise = new sH(3, 0.7, 0, 0)),
        (this.pose = e.pose(null, 0, { t: 0, walk: 0, moving: !1, vx: 0 })));
      let o = this.pose;
      this.hands = [o.L[0], o.L[1], o.R[0], o.R[1]].map(
        (e) => new sH(a.armF, a.armZ, 0, e),
      );
      for (let [t, n] of Object.entries(e.props))
        this.props[t] = new sH(a.propF, a.propZ, 0, n);
      this.top = e.top;
    }
    retune() {
      let e = this.p;
      (this.hem.tune(e.hemF, e.hemZ, 0),
        this.lean.tune(e.leanF, e.leanZ, 0),
        this.bob.tune(e.bobF, e.bobZ, 0));
      for (let t of this.hands) t.tune(e.armF * this.armMul, e.armZ, 0);
      for (let t of Object.values(this.props)) t.tune(e.propF, e.propZ, 0);
    }
    reset(e, t, n) {
      ((this.x = e),
        (this.y = t),
        (this.facing = n < 0 ? -1 : 1),
        (this.lastIn = { x: e, y: t }),
        (this.vx = this.vy = 0),
        this.hem.reset(0),
        this.lean.reset(0),
        this.bob.reset(0),
        this.rise.reset(0),
        (this.dead = !1),
        (this.dying = 0),
        (this.act = null),
        (this.actId = ``));
      let r = this.spec.pose(null, 0, { t: 0, walk: 0, moving: !1, vx: 0 });
      [r.L[0], r.L[1], r.R[0], r.R[1]].forEach((e, t) =>
        this.hands[t].reset(e),
      );
      for (let [e, t] of Object.entries(this.spec.props))
        this.props[e].reset(t);
      for (let e in this.sn) this.sn[e].reset();
      this.key = ``;
    }
    get view() {
      return this.dir === 3 ? 2 : this.dir;
    }
    get mirrored() {
      return this.dir === 3 || (this.dir < 2 && this.facing < 0);
    }
    tick(e, t) {
      let n = this.p,
        r = this.spec;
      (this.dead || (this.facing = t.facing < 0 ? -1 : 1),
        (this.x = t.x),
        (this.y = t.y));
      let i = 1 - Math.exp(-8 * e);
      ((this.vx += ((t.x - this.lastIn.x) / e - this.vx) * i),
        (this.vy += ((t.y - this.lastIn.y) / e - this.vy) * i));
      let a = Math.hypot(t.x - this.lastIn.x, t.y - this.lastIn.y);
      this.lastIn = { x: t.x, y: t.y };
      let o = Math.hypot(this.vx, this.vy) > 4 && !this.dead;
      this.dying = this.dead ? Math.min(1, this.dying + e / 0.4) : 0;
      let s = this.dead ? null : t.windup;
      if (s) {
        ((s.id !== this.actId || (!s.landed && s.k < this.lastK - 0.05)) &&
          ((this.actId = s.id), (this.actT0 = this.t), (this.landed = !1)),
          (this.lastK = s.landed ? 1 : s.k),
          (this.actSeen = this.t),
          (this.linger = r.linger?.[s.id] ?? 0.35));
        let e = this.x,
          t = this.y - 20,
          n = Math.hypot(s.aimX - e, s.aimY - t) || 1;
        (s.landed && !this.landed && (this.landedT = this.t),
          (this.act = {
            id: s.id,
            k: s.landed ? 1 : s.k,
            landed: s.landed,
            hold: s.hold,
            ax: (s.aimX - e) / n,
            ay: (s.aimY - t) / n,
            age: this.t - this.actT0,
            since: s.landed ? this.t - this.landedT : 0,
          }));
      } else
        this.act && this.t - this.actSeen > this.linger
          ? ((this.act = null), (this.actId = ``), (this.lastK = 0))
          : (this.act &&=
              (this.landed || (this.landedT = this.actSeen),
              {
                ...this.act,
                k: 1,
                landed: !0,
                hold: 0,
                age: this.t - this.actT0,
                since: this.t - this.landedT,
              }));
      if (this.act?.landed && !this.landed) {
        let e = r.impact?.[this.act.id];
        e &&
          this.events.push({
            t: `stomp`,
            dx: this.act.ax * 8,
            dy: 0,
            power: e,
          });
      }
      this.landed = !!this.act?.landed;
      let c = this.wantDir,
        l = t.look,
        u = l ? l.x - this.x : this.vx,
        d = l ? l.y - this.y : this.vy;
      (l || o
        ? Math.abs(u) > Math.abs(d) * 1.3 && Math.abs(u) > 2
          ? (c = u > 0 ? 2 : 3)
          : Math.abs(d) > Math.abs(u) * 1.3 &&
            Math.abs(d) > 2 &&
            (c = d > 0 ? 0 : 1)
        : this.act || (c = 0),
        c !== this.wantDir &&
          (this.wantDir >= 2 && c >= 2 && n.turn > 0 && (this.turnT = n.turn),
          (this.wantDir = c)),
        this.turnT > 0 && (this.turnT -= e));
      let f = !!this.act && !!r.front?.includes(this.act.id);
      ((this.pin = f
        ? Math.min(1, this.pin + e / 0.25)
        : Math.max(0, this.pin - e / 0.4)),
        (this.dir = f || this.turnT > 0 ? 0 : this.wantDir));
      let p = this.mirrored ? -1 : 1,
        m = this.act ? { ...this.act, ax: this.act.ax * p } : null;
      if (
        ((this.pose = r.pose(m, this.view, {
          t: this.t,
          walk: o ? Math.sin(this.phase) : 0,
          moving: o,
          vx: this.vx * p,
        })),
        r.gait === `walk` || r.gait === `stomp`)
      ) {
        let t = Math.floor(this.phase / Math.PI);
        if (o) this.phase += (a / Math.max(1, r.stride)) * Math.PI;
        else {
          let t = Math.ceil(this.phase / Math.PI - 1e-6) * Math.PI;
          this.phase = Math.min(t, this.phase + (Math.PI / 0.15) * e);
        }
        Math.floor(this.phase / Math.PI) !== t &&
          ((this.stepSide = -this.stepSide),
          this.hem.kick(this.stepSide * n.waddle),
          this.bob.kick(n.bobAmp * 2 * Math.PI * n.bobF),
          r.gait === `stomp` &&
            this.events.push({
              t: `stomp`,
              dx: this.stepSide * 5,
              dy: 0,
              power: 1.2,
            }));
      } else this.phase += e * 2;
      let h = this.pose,
        g = this.act?.landed && this.act.since < 0.3 ? 2.5 : 1;
      if (g !== this.armMul) {
        this.armMul = g;
        for (let e of this.hands) e.tune(n.armF * g, n.armZ, 0);
      }
      (this.hem.step(
        e,
        aH(-this.vx * n.hemK, -n.hemMax, n.hemMax) + (h.hem ?? 0) * p,
      ),
        this.lean.step(e, aH(this.vx * n.leanK, -1.5, 1.5) + (h.lean ?? 0) * p),
        this.bob.step(e, 0),
        this.rise.step(e, (h.rise ?? 0) - this.dying * 2),
        [h.L[0], h.L[1], h.R[0], h.R[1]].forEach((t, n) =>
          this.hands[n].step(e, t),
        ));
      for (let [t, n] of Object.entries(this.props))
        n.step(e, h.props?.[t] ?? r.props[t]);
      ((this.top =
        r.top + Math.max(0, Math.round(this.rise.y + n.hover + n.hoverAmp))),
        (this.lift = r.gait === `float` || r.gait === `glide` ? n.hover : 0),
        (this.glow = this.glowAt
          ? { dx: this.glowAt[0] * p, dy: this.glowAt[1] }
          : null));
    }
    hit(e) {
      let t = Number.isNaN(e) ? -this.facing : e < this.x ? 1 : -1;
      (this.hem.kick(t * 25), this.lean.kick(t * 12), (this.hurtT = this.t));
    }
    strike() {}
    die() {
      this.dead = !0;
    }
    uploads() {
      return this.buf.uploads;
    }
    draw(e, t, n, r) {
      if (this.key && !this.drawDue() && this.key.endsWith(r ? `F` : `-`)) {
        e.drawImage(this.buf.canvas, t - v2, n - y2);
        return;
      }
      let i = this.p,
        a = this.spec,
        o = this.view,
        s = this.mirrored ? -1 : 1,
        c = (e, t, n = i.snap) => (this.sn[e] ??= new cH()).at(t, n),
        l =
          a.gait === `float` || a.gait === `glide`
            ? (i.hover +
                Math.sin(this.t * Math.PI * 2 * i.hoverHz) * i.hoverAmp) *
              (1 - this.pin)
            : 0,
        u = this.pose.tremble
          ? (Math.sin(this.t * 55) > 0 ? 1 : -1) * Math.round(this.pose.tremble)
          : 0,
        d = a.gait === `walk` || a.gait === `stomp`,
        f = d ? Math.max(0, -this.rise.y) : 0,
        p = Math.round(
          c(`lift`, l + (d ? Math.max(0, this.rise.y) : this.rise.y)),
        ),
        m = Math.round(c(`bob`, Math.max(0, this.bob.y) + f)),
        h = Math.round(c(`hem`, this.hem.y * s)),
        g = Math.round(c(`lean`, this.lean.y * s)),
        _ = Math.sin(this.phase),
        v = a.gait === `walk` || a.gait === `stomp`,
        y = v && o !== 2 ? Math.round(Math.max(0, _) * i.liftAmp) : 0,
        b = v && o !== 2 ? Math.round(Math.max(0, -_) * i.liftAmp) : 0,
        x = v && o === 2 ? Math.round(_ * i.legAmp) : 0,
        S = this.hands.map((e, t) => c(`h${t}`, e.y)),
        C = {};
      for (let [e, t] of Object.entries(this.props))
        C[e] = Math.round(t.y * 8) / 8;
      let w = Math.floor(this.t * i.flutHz) % 5,
        T = Math.round(this.dying * 4) / 4,
        E = this.t - this.hurtT < 0.2,
        D = a.ticks ? Math.floor(this.t * a.ticks) : 0,
        O = this.act,
        k = O
          ? `${O.id}${Math.round(O.k * 8)}${O.landed ? Math.round(Math.min(2, O.age) * 8) : ``}`
          : ``,
        ee = `${this.dir},${this.facing},${p},${h},${g},${y},${b},${x},${m},${S},${Object.values(C)},${w},${T},${+!!E},${u},${D},${k}${r ? `F` : `-`}`;
      if (ee !== this.key) {
        this.key = ee;
        let e = this.buf;
        e.clear();
        let t = new x2(e, this.pal, v2 + u * s, y2 - p),
          n = {
            v: o,
            t: this.t,
            flut: w,
            L: [S[0], S[1]],
            R: [S[2], S[3]],
            props: C,
            liftL: y,
            liftR: b,
            stride: x,
            bob: m,
            hurt: E,
            act: O && { ...O, ax: O.ax * s },
            out: {},
          };
        (a.paint(t, n),
          (this.glowAt = n.out.glow
            ? [n.out.glow[0], n.out.glow[1] - p]
            : null));
        let i = y2 - p;
        if (h)
          for (let t = i + a.hemFrom; t <= i + 3; t++)
            e.shiftRow(
              t,
              Math.round((h * (t - i - a.hemFrom)) / Math.max(1, -a.hemFrom)),
            );
        if (g)
          for (let t = 0; t < i; t++)
            e.shiftRow(t, Math.round((g * (i - t)) / 40));
        (T && this.fold(i, T),
          s < 0 && e.flipX(),
          e.outline(1),
          e.upload(this.pal.pal, r));
      }
      e.drawImage(this.buf.canvas, t - v2, n - y2);
    }
    fold(e, t) {
      let n = this.buf,
        r = 1 - 0.4 * t,
        i = new Uint8Array(g2);
      for (let t = e; t >= 0; t--) {
        let a = Math.round(e - (e - t) / r);
        a >= 0
          ? (i.set(n.px.subarray(a * g2, a * g2 + g2)), n.px.set(i, t * g2))
          : n.px.fill(0, t * g2, t * g2 + g2);
      }
      for (let r = 0; r < e; r++) n.shiftRow(r, -Math.round(((e - r) * t) / 6));
    }
    debug(e, t, n) {
      let r = this.mirrored ? -1 : 1;
      ((e.fillStyle = `#ffe14d`),
        e.fillRect(t, n, 1, 1),
        (e.fillStyle = `#4dd2ff`),
        e.fillRect(
          Math.round(t + r * this.hands[0].y),
          Math.round(n + this.hands[1].y),
          1,
          1,
        ),
        (e.fillStyle = `#ff4dd2`),
        e.fillRect(
          Math.round(t + r * this.hands[2].y),
          Math.round(n + this.hands[3].y),
          1,
          1,
        ));
    }
  },
  T2 = { dark: `#5a0a1a`, red: `#b01a2a`, core: `#ffffff` },
  E2 = `#7ef9ff`,
  D2 = `#3d4257`,
  O2 = `#262a3a`,
  k2 = `#5d6480`,
  A2 = `#c9a64a`,
  j2 = `#d9c3b0`,
  M2 = `#a88f7c`,
  N2 = `#d8d8e2`,
  P2 = `#6f7580`,
  F2 = `#a7adb8`,
  I2 = `#1d2030`,
  L2 = `#1a1c26`,
  R2 = {
    0: { L: [-6.5, -25], R: [7, -25] },
    1: { L: [6.5, -25], R: [-7, -25] },
    2: { L: [-1, -25], R: [1, -25] },
  },
  z2 = {
    0: { L: [-7, -19], R: [9, -20] },
    1: { L: [7, -19], R: [-9, -20] },
    2: { L: [-2, -19], R: [5, -20] },
  },
  B2 = { 0: [-13, -17], 1: [8, -17], 2: [-9, -18] },
  V2 = 19;
