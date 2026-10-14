// index-BTsv3a2s 229 — math
// Lines 145486-146431 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var F3 = {
    gorrath: x4,
    aurek: e4,
    hessa: Y4,
    maelis: eoe,
    vesker: {
      id: `vesker`,
      gait: `walk`,
      stride: 9,
      top: 42,
      ticks: 10,
      hemFrom: -12,
      props: { cs: 0, cl: 5, wh: 0, ch: 0, ey: 0, hk: 0 },
      front: [`flail`, `hook`, `smoke`],
      linger: { hook: 1.6, grave: 0.5 },
      impact: { grave: 2 },
      pose: poe,
      paint(e, t) {
        t.v === 0 ? moe(e, t) : t.v === 1 ? hoe(e, t) : goe(e, t);
      },
    },
    unseen: uoe,
  },
  _oe = (e, t, n, r, i) => new w2(F3[e], t, n, r, i),
  voe = dH([
    `#120b1a`,
    `#231d33`,
    `#3a3150`,
    `#5b4f78`,
    `#ff3355`,
    `#0a0710`,
    `#e8e0f0`,
  ]),
  yoe = 1,
  I3 = 2,
  L3 = 3,
  R3 = 4,
  z3 = 5,
  B3 = 6,
  V3 = 7,
  boe = 64,
  xoe = 46,
  H3 = 32,
  U3 = 38,
  W3 = 3,
  Soe = (e) => e * e * (3 - 2 * e),
  Coe = class extends uH {
    rootX;
    rootY;
    hipZ;
    shoZ;
    headU;
    headZ;
    offX = new sH(7, 0.5, 0, 0);
    offY = new sH(7, 0.5, 0, 0);
    turnK;
    vx = 0;
    vy = 0;
    along = 0;
    accel = 0;
    stillT = 0;
    lastGroup = 1;
    feet;
    tx = new Float32Array(W3);
    tz = new Float32Array(W3);
    tvx = new Float32Array(W3);
    tvz = new Float32Array(W3);
    lastIn;
    engaged = !1;
    act = null;
    open = !1;
    earT = 0;
    flatT = 0;
    look = { u: 0, z: 0, until: 0 };
    nextLook;
    wagUntil = 0;
    nextWag;
    nextEar;
    breathPhase;
    buf = new pH(boe, xoe);
    sn = {};
    key = ``;
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i);
      let a = this.p;
      ((this.rootX = new sH(a.follow, 0.9, 0, n)),
        (this.rootY = new sH(a.follow, 0.9, 0, r)),
        (this.hipZ = new sH(a.bodyF, a.bodyZ, 0, a.height)),
        (this.shoZ = new sH(a.bodyF, a.bodyZ, 0, a.height)),
        (this.headU = new sH(a.headF, a.headZ, a.headR, a.spine + 3.5)),
        (this.headZ = new sH(a.headF, a.headZ, a.headR, a.height + 5)),
        (this.turnK = this.facing),
        (this.lastIn = { x: n, y: r }));
      let o = (e, t, i, a) => ({
        hind: e,
        near: t,
        group: i,
        du: a,
        x: n,
        y: r,
        z: 0,
        stepping: !1,
        s: 0,
        fx: n,
        fy: r,
        lift: 0,
      });
      ((this.feet = [
        o(!0, !1, 1, -2.5),
        o(!1, !1, 0, -1.5),
        o(!0, !0, 0, 0.5),
        o(!1, !0, 1, 1.5),
      ]),
        (this.nextLook = 1 + this.rand() * 3),
        (this.nextWag = 2 + this.rand() * 5),
        (this.nextEar = 2 + this.rand() * 4),
        (this.breathPhase = this.rand() * Math.PI * 2),
        this.reset(n, r, i));
    }
    retune() {
      let e = this.p;
      (this.rootX.tune(e.follow, 0.9, 0),
        this.rootY.tune(e.follow, 0.9, 0),
        this.hipZ.tune(e.bodyF, e.bodyZ, 0),
        this.shoZ.tune(e.bodyF, e.bodyZ, 0),
        this.headU.tune(e.headF, e.headZ, e.headR),
        this.headZ.tune(e.headF, e.headZ, e.headR));
    }
    reset(e, t, n) {
      let r = this.p;
      ((this.x = e),
        (this.y = t),
        (this.facing = n < 0 ? -1 : 1),
        (this.turnK = this.facing),
        (this.dead = !1),
        (this.act = null),
        this.rootX.reset(e),
        this.rootY.reset(t),
        this.hipZ.reset(r.height),
        this.shoZ.reset(r.height),
        this.headU.reset(r.spine + 3.5),
        this.headZ.reset(r.height + 5),
        this.offX.reset(0),
        this.offY.reset(0),
        (this.vx = this.vy = this.along = this.accel = 0),
        (this.lastIn = { x: e, y: t }));
      for (let e of this.feet) {
        let [t, n] = this.home(e);
        ((e.x = e.fx = t), (e.y = e.fy = n), (e.z = 0), (e.stepping = !1));
      }
      let [i, a] = this.tailBase();
      for (let e = 0; e < W3; e++)
        ((this.tx[e] = i - this.facing * 2.2 * (e + 1)),
          (this.tz[e] = a + 0.6 * (e + 1)),
          (this.tvx[e] = this.tvz[e] = 0));
      for (let e in this.sn) this.sn[e].reset();
      this.key = ``;
    }
    snap(e, t) {
      return (this.sn[e] ??= new cH()).at(t, this.p.snap);
    }
    home(e) {
      let t = e.hind ? -this.p.spine : this.p.spine;
      return this.dead
        ? [
            this.x + (t + e.du + (e.hind ? -2.5 : 2.5)) * this.turnK,
            this.y + (e.near ? 1 : -1),
          ]
        : [this.x + (t + e.du) * this.turnK, this.y];
    }
    tailBase() {
      return [this.x + (-this.p.spine - 1.5) * this.turnK, this.hipZ.y + 3.5];
    }
    tick(e, t) {
      let n = this.p;
      ((this.engaged = t.engaged),
        this.dead || (this.facing = t.facing < 0 ? -1 : 1));
      let r = (t.x - this.lastIn.x) / e,
        i = (t.y - this.lastIn.y) / e;
      this.lastIn = { x: t.x, y: t.y };
      let a = 1 - Math.exp(-10 * e);
      ((this.vx += (r - this.vx) * a), (this.vy += (i - this.vy) * a));
      let o = this.vx * this.facing;
      ((this.accel +=
        ((o - this.along) / e - this.accel) * (1 - Math.exp(-6 * e))),
        (this.along = o));
      let s = Math.hypot(this.vx, this.vy);
      ((this.stillT = s < 3 ? this.stillT + e : 0),
        (this.x = this.rootX.step(e, t.x)),
        (this.y = this.rootY.step(e, t.y)));
      let c = 2 / Math.max(0.02, n.turn);
      this.turnK += aH(this.facing - this.turnK, -c * e, c * e);
      let l = this.t;
      if (!this.dead && s < 3 && !this.act) {
        if ((this.nextLook -= e) <= 0) {
          let e = this.rand() < 0.25;
          ((this.look = e
            ? { u: 1.2, z: -2.5, until: l + 1.2 }
            : {
                u: (this.rand() - 0.4) * 3,
                z: (this.rand() - 0.5) * 2.5,
                until: l + 1 + this.rand(),
              }),
            (this.nextLook = 2.5 + this.rand() * 4));
        }
        !this.engaged &&
          (this.nextWag -= e) <= 0 &&
          ((this.wagUntil = l + 0.9), (this.nextWag = 4 + this.rand() * 6));
      }
      ((this.nextEar -= e) <= 0 &&
        ((this.earT = 0.15), (this.nextEar = 3 + this.rand() * 5)),
        (this.earT -= e),
        (this.flatT -= e),
        l > this.look.until && (this.look.u = this.look.z = 0));
      let u = 0,
        d = 0,
        f = !1,
        p = 0,
        m = t.windup;
      if (
        (m &&
          !m.landed &&
          !this.dead &&
          ((u = m.k * m.k * (3 - 2 * m.k)), (this.flatT = 0.1)),
        this.act)
      ) {
        let t = (this.act.t += e);
        t < 0.07
          ? (u = Math.max(u, 1))
          : t < 0.2
            ? ((d = 1), (f = !0), (p = 1))
            : t > 0.42 && (this.act = null);
      }
      (this.offX.step(e, (this.act?.dx ?? 0) * 6 * p),
        this.offY.step(e, (this.act?.dy ?? 0) * 4 * p),
        (this.open = f));
      let h = n.stepDist * (1 + s / 120),
        g = n.stepT * aH(1.15 - s / 160, 0.6, 1.15),
        _ = this.stillT > 0.2,
        v = [!1, !1];
      for (let e of this.feet) e.stepping && (v[e.group] = !0);
      if (!this.dead) {
        let e = [!1, !1],
          t = this.feet.map((t) => {
            if (t.stepping) return 0;
            let [n, r] = this.home(t),
              i = Math.hypot(t.x - n, t.y - r);
            return ((i > h || (_ && i > 0.9)) && (e[t.group] = !0), i);
          });
        if (d && !v[0] && !v[1])
          for (let t of this.feet) t.hind || (e[t.group] = !0);
        let r = -1;
        (!v[0] &&
          !v[1] &&
          (r =
            e[0] && e[1] ? +(this.lastGroup === 0) : e[0] ? 0 : e[1] ? 1 : -1),
          r !== -1 &&
            (this.feet.forEach((e, i) => {
              e.group === r &&
                ((t[i] < (_ ? 0.9 : h * 0.35) && (!d || e.hind)) ||
                  ((e.stepping = !0),
                  (e.s = 0),
                  (e.fx = e.x),
                  (e.fy = e.y),
                  (e.lift = n.lift * (d && !e.hind ? 1.6 : _ ? 0.6 : 1))));
            }),
            (this.lastGroup = r)));
      }
      let y = 0,
        b = 0;
      for (let t of this.feet) {
        let [r, i] = this.home(t);
        if (this.dead) {
          ((t.x += (r - t.x) * (1 - Math.exp(-6 * e))),
            (t.y += (i - t.y) * (1 - Math.exp(-6 * e))),
            (t.z = 0));
          continue;
        }
        if (!t.stepping) continue;
        t.s = Math.min(1, t.s + e / g);
        let a = n.lead * g,
          o = r + aH(this.vx * a, -h, h) + (d && !t.hind ? 2 * this.facing : 0),
          s = i + aH(this.vy * a, -h, h),
          c = Soe(t.s);
        ((t.x = oH(t.fx, o, c)),
          (t.y = oH(t.fy, s, c)),
          (t.z = t.lift * Math.sin(Math.PI * t.s)));
        let l = Math.sin(Math.PI * t.s) * n.bob;
        (t.hind ? (y = Math.max(y, l)) : (b = Math.max(b, l)),
          t.s >= 1 && ((t.stepping = !1), (t.z = 0)));
      }
      let x =
          s < 3 && !this.dead
            ? n.breath * Math.sin(l * 3.3 + this.breathPhase)
            : 0,
        S = aH(this.accel * 0.012, -1.5, 1.5),
        C = this.engaged ? 0.6 : 0,
        w = this.dead ? 2.4 : 0,
        T = w || n.height + y + S * 0.5 - u * 1.2 - d * 0.3,
        E = w || n.height + b - S + x - C - u * 1.2 + d * 0.8;
      (this.hipZ.step(e, T), this.shoZ.step(e, E));
      let D = this.dead
          ? n.spine + 3
          : n.spine + 3.5 + this.look.u - u + d * 2.5,
        O = this.dead
          ? 2.5
          : this.shoZ.y + 5 + this.look.z - C * 1.5 - u * 1.5 + d * 0.5;
      (this.headU.step(e, D), this.headZ.step(e, O));
      let k = !this.dead && l < this.wagUntil ? n.wag * Math.sin(l * 16) : 0,
        ee = this.dead
          ? -0.6
          : n.tailAngle - (this.engaged ? 0.35 : 0) + k - this.along * 0.004,
        [te, ne] = this.tailBase(),
        re = this.dead ? 8 : n.tailStiff,
        ie = Math.exp(-5 * e);
      for (let t = 0; t < W3; t++) {
        let n = te - this.turnK * Math.cos(ee) * 2.2 * (t + 1),
          r = ne + Math.sin(ee) * 2.2 * (t + 1);
        ((this.tvx[t] = (this.tvx[t] + re * (n - this.tx[t]) * e) * ie),
          (this.tvz[t] = (this.tvz[t] + (re * (r - this.tz[t]) - 40) * e) * ie),
          (this.tx[t] += this.tvx[t] * e),
          (this.tz[t] += this.tvz[t] * e));
      }
      for (let e = 0; e < 2; e++) {
        let e = te,
          t = ne;
        for (let n = 0; n < W3; n++) {
          let r = this.tx[n] - e,
            i = this.tz[n] - t,
            a = Math.hypot(r, i) || 1e-4;
          ((this.tx[n] = e + (r / a) * 2.2),
            (this.tz[n] = Math.max(0.5, t + (i / a) * 2.2)),
            (e = this.tx[n]),
            (t = this.tz[n]));
        }
      }
      this.top = Math.ceil(this.headZ.y + 6);
      let ae = this.turnK >= 0 ? 1 : -1;
      this.glow = {
        dx: this.headU.y * this.turnK + 0.5 * ae,
        dy: -(this.headZ.y + 1),
      };
    }
    hit(e) {
      let t = Number.isNaN(e) ? -this.facing : e < this.x ? 1 : -1;
      (this.offX.kick(t * 55),
        this.headZ.kick(25),
        this.shoZ.kick(-15),
        (this.flatT = 0.35));
    }
    strike(e, t) {
      this.dead || (this.act = { t: 0, dx: e, dy: t });
    }
    die() {
      ((this.dead = !0), (this.act = null));
      for (let e of this.feet) e.stepping = !1;
    }
    uploads() {
      return this.buf.uploads;
    }
    draw(e, t, n, r) {
      let i = t - H3 + Math.round(this.offX.y),
        a = n - U3 + Math.round(this.offY.y);
      if (this.key && !this.drawDue() && this.key.endsWith(r ? `F` : `-`)) {
        e.drawImage(this.buf.canvas, i, a);
        return;
      }
      let o = this.p,
        s = this.turnK,
        c = s >= 0 ? 1 : -1,
        l = Math.abs(s),
        u = this.snap(`hx`, -o.spine * s),
        d = this.snap(`hz`, -this.hipZ.y),
        f = this.snap(`sx`, o.spine * s),
        p = this.snap(`sz`, -this.shoZ.y),
        m = this.snap(`dx`, this.headU.y * s),
        h = this.snap(`dz`, -this.headZ.y),
        g = Math.round(this.x),
        _ = Math.round(this.y),
        v = this.feet.map((e) => ({
          f: e,
          jx: (e.hind ? u : f) + Math.round(e.du * s),
          jy: e.hind ? d : p,
          fx: Math.round(e.x) - g,
          fy: Math.round(e.y) - _ - Math.round(e.z),
        })),
        y = [];
      for (let e = 0; e < W3; e++)
        y.push(
          this.snap(`t${e}x`, this.tx[e] - this.x),
          this.snap(`t${e}z`, -this.tz[e]),
        );
      let b = this.dead
          ? 2
          : this.flatT > 0 || this.engaged
            ? 1
            : this.earT > 0
              ? 3
              : 0,
        x = `${u},${d},${f},${p},${m},${h},${Math.round(s * 8)},${y.join(`,`)},${b},${+!!this.open}`;
      for (let e of v) x += `|${e.jx},${e.jy},${e.fx},${e.fy}`;
      ((x += r ? `F` : `-`),
        x !== this.key &&
          ((this.key = x),
          this.raster(u, d, f, p, m, h, v, y, c, l, b),
          this.buf.upload(voe, r)),
        e.drawImage(this.buf.canvas, i, a));
    }
    raster(e, t, n, r, i, a, o, s, c, l, u) {
      let d = this.buf,
        f = this.p;
      d.clear();
      let p = f.height * 0.56,
        m = (e, t) => {
          let n = H3 + e.jx,
            r = U3 + e.jy,
            i = H3 + e.fx,
            a = U3 + e.fy,
            o = i - n,
            s = a - r,
            l = Math.hypot(o, s) || 1e-4,
            u = 2 * p - 0.01;
          l > u &&
            ((i = n + (o / l) * u),
            (a = r + (s / l) * u),
            (o = i - n),
            (s = a - r),
            (l = u));
          let f = l / 2,
            m = Math.sqrt(Math.max(0, p * p - f * f)),
            h = (e.f.hind ? 1 : -1) * c,
            g = n + (o / l) * f - (s / l) * m * h,
            _ = r + (s / l) * f + (o / l) * m * h;
          (d.line(n + 0.5, r, g + 0.5, _, t, 2),
            d.line(g + 0.5, _, i + 0.5, a, t, 2),
            d.set(Math.round(i) + (c > 0 ? 2 : -1), Math.round(a), t));
        };
      for (let e of o) e.f.near || m(e, I3);
      let h = H3 + e + Math.round(-1.5 * this.turnK),
        g = U3 + t - 3;
      for (let e = 0; e < W3; e++) {
        let t = H3 + s[e * 2],
          n = U3 + s[e * 2 + 1];
        (d.line(h, g, t, n, L3, e < 1 ? 2 : 1), (h = t), (g = n));
      }
      d.set(H3 + s[2], U3 + s[3] - 1, R3);
      let _ = H3 + (e + n) / 2,
        v = U3 + (t + r) / 2 - 2,
        y = oH(4.5, f.spine + 3.5, l),
        b = Math.atan2(r - t, Math.max(Math.abs(n - e), 2 * f.spine * 0.3)) * c;
      (d.ellipse(_, v, y, 3.5, L3, b),
        d.ellipse(H3 + n - Math.round(1 * this.turnK), v + 0.5, 3, 3.5, L3, b),
        d.ellipse(
          _ + Math.sin(b) * 1.5,
          v - Math.cos(b) * 1.5,
          Math.max(2, y - 1.5),
          2,
          R3,
          b,
          (e, t) => d.get(e, t) === L3 && d.get(e, t - 2) === 0,
        ));
      for (let e of o) e.f.near && m(e, L3);
      let x = H3 + i,
        S = U3 + a,
        C = (e, t, n, r, i) =>
          d.rect(c > 0 ? x + e : x - e - (n - 1), S + t, n, r, i);
      (l < 0.35
        ? (d.ellipse(x + 0.5, S + 0.5, 3.5, 3, L3),
          d.rect(x - 1, S + 1, 3, 2, L3),
          d.set(x, S + 1, B3),
          d.set(x - 2, S - 1, z3),
          d.set(x + 2, S - 1, z3),
          d.rect(x - 3, S - 4, 1, 2, I3),
          d.rect(x + 3, S - 4, 1, 2, I3))
        : (d.ellipse(x + 0.5, S + 0.5, 3.5, 3, L3),
          C(2, 1, 3, 2, L3),
          C(4, 1, 1, 1, B3),
          u === 1
            ? C(-3, -3, 3, 1, I3)
            : u === 2
              ? C(-3, -2, 2, 1, I3)
              : C(-2, u === 3 ? -4 : -5, 2, u === 3 ? 2 : 3, I3),
          C(0, -1, 2, 1, z3),
          this.open
            ? (C(2, 3, 3, 1, B3), C(2, 4, 2, 1, V3))
            : C(2, 3, 2, 1, V3)),
        d.outline(yoe));
    }
    debug(e, t, n) {
      let r = this.turnK,
        i = (r, i, a) => {
          ((e.fillStyle = a),
            e.fillRect(Math.round(t + r), Math.round(n + i), 1, 1));
        };
      (i(-this.p.spine * r, -this.hipZ.y, `#ffe14d`),
        i(this.p.spine * r, -this.shoZ.y, `#ffe14d`),
        i(this.headU.y * r, -this.headZ.y, `#ff9a2a`));
      for (let e = 0; e < W3; e++)
        i(this.tx[e] - this.x, -this.tz[e], `#c38bff`);
      for (let e of this.feet) {
        let [t, n] = this.home(e);
        (i(t - this.x, n - this.y + 2, e.stepping ? `#4dd2ff` : `#9be26b`),
          i(
            e.x - this.x,
            e.y - this.y - e.z,
            e.stepping ? `#4dd2ff` : `#ff4d6a`,
          ));
      }
    }
  },
  G3 = 12,
  woe = dH([
    `#120b1a`,
    `#2f8f3a`,
    `#5ccf4f`,
    `#b6f59a`,
    `#ffffff`,
    `#10240f`,
    `#1c5a22`,
  ]),
  Toe = 1,
  K3 = 2,
  q3 = 3,
  J3 = 4,
  Eoe = 5,
  Doe = 6,
  Ooe = 7,
  koe = 40,
  Aoe = 40,
  Y3 = 20,
  X3 = 36,
  joe = class extends uH {
    px = new Float32Array(G3);
    pz = new Float32Array(G3);
    vx = new Float32Array(G3);
    vz = new Float32Array(G3);
    ox = new Float32Array(G3);
    oz = new Float32Array(G3);
    ru = new Float32Array(G3);
    rw = new Float32Array(G3);
    len = new Float32Array(G3);
    ax = new Float32Array(G3);
    az = new Float32Array(G3);
    area0 = 1;
    shapeAt = ``;
    hop = `ground`;
    hopT = 0;
    crouchT = 0;
    dir = 1;
    speed = 0;
    lastX;
    lastY;
    striking = null;
    windK = 0;
    lx = new sH(7, 0.5, 0, 0);
    ly = new sH(7, 0.5, 0, 0);
    lungeT = 0;
    lungeDx = 0;
    lungeDy = 0;
    face;
    blinkT = 0;
    nextBlink;
    nextBlorp;
    breathPhase;
    buf = new pH(koe, Aoe);
    snaps = Array.from({ length: 24 }, () => new cH());
    cSnap = [new cH(), new cH()];
    bx = new Float32Array(G3);
    by = new Float32Array(G3);
    key = ``;
    constructor(e, t, n, r) {
      (super(`slime`, e, t, n, r),
        (this.lastX = t),
        (this.lastY = n),
        (this.face = new sH(this.p.eyeTurn, 0.8, 0, this.facing)),
        (this.nextBlink = 1 + this.rand() * 3),
        (this.nextBlorp = this.p.blorp * (0.5 + this.rand())),
        (this.breathPhase = this.rand() * Math.PI * 2),
        this.reset(t, n, r));
    }
    shape() {
      let { rx: e, rz: t } = this.p;
      for (let n = 0; n < G3; n++) {
        let r = Math.PI / 2 + (n / G3) * Math.PI * 2;
        ((this.ru[n] = Math.cos(r) * e), (this.rw[n] = Math.sin(r) * t));
      }
      for (let e = 0; e < G3; e++) {
        let t = (e + 1) % G3;
        this.len[e] = Math.hypot(
          this.ru[t] - this.ru[e],
          this.rw[t] - this.rw[e],
        );
      }
      ((this.area0 = Math.PI * e * t), (this.shapeAt = `${e}:${t}`));
    }
    retune() {
      (this.face.tune(this.p.eyeTurn, 0.8, 0),
        this.shapeAt !== `${this.p.rx}:${this.p.rz}` && this.shape());
    }
    reset(e, t, n) {
      (this.shape(),
        (this.x = this.lastX = e),
        (this.y = this.lastY = t),
        (this.facing = n < 0 ? -1 : 1),
        (this.dead = !1));
      for (let t = 0; t < G3; t++)
        ((this.px[t] = this.ox[t] = e + this.ru[t]),
          (this.pz[t] = this.oz[t] = this.p.rz + this.rw[t]),
          (this.vx[t] = this.vz[t] = 0));
      ((this.hop = `ground`),
        (this.hopT = 0),
        (this.striking = null),
        this.lx.reset(0),
        this.ly.reset(0),
        this.face.reset(this.facing));
      for (let e of this.snaps) e.reset();
      this.key = ``;
    }
    tick(e, t) {
      let n = this.p;
      ((this.facing = t.facing < 0 ? -1 : 1), this.face.step(e, this.facing));
      let r = Math.hypot(t.x - this.lastX, t.y - this.lastY) / e;
      (Math.abs(t.x - this.lastX) > 0.001 &&
        (this.dir = t.x > this.lastX ? 1 : -1),
        (this.lastX = t.x),
        (this.lastY = t.y),
        (this.speed += (r - this.speed) * (1 - Math.exp(-8 * e))));
      let i = 1 / 0;
      for (let e = 0; e < G3; e++) i = Math.min(i, this.pz[e]);
      let a = i > 0.4,
        o = t.x - this.x,
        s = t.y - this.y,
        c = Math.hypot(o, s),
        l = (a || this.dead ? n.catchup : n.catchup * 0.12) * (c > 12 ? 3 : 1),
        u = 1 - Math.exp(-l * e),
        d = o * u;
      ((this.x += d), (this.y += s * u));
      for (let e = 0; e < G3; e++) ((this.px[e] += d), (this.ox[e] += d));
      let f = !this.dead && (this.speed > 4 || c > 4);
      if (
        ((this.hopT -= e),
        this.hop === `ground` &&
          !this.dead &&
          !this.windK &&
          ((f && this.hopT <= 0) || this.striking) &&
          !a &&
          ((this.hop = `crouch`),
          (this.crouchT = this.striking ? Math.max(0.06, n.crouch) : n.crouch)),
        this.hop === `air` && !a && this.t > 0)
      ) {
        let e = 0;
        for (let t = 0; t < G3; t++) e += this.vz[t];
        e <= 0 && (this.hop = `ground`);
      }
      if (
        ((this.blinkT -= e),
        (this.nextBlink -= e) <= 0 &&
          ((this.blinkT = 0.12), (this.nextBlink = 2 + this.rand() * 4)),
        !f && this.hop === `ground` && (this.nextBlorp -= e) <= 0)
      ) {
        this.nextBlorp = n.blorp * (0.6 + this.rand() * 0.8);
        for (let e = 0; e < G3; e++)
          this.vz[e] += 22 * aH(this.pz[e] / (2 * n.rz), 0, 1);
      }
      let p = 0,
        m = 0;
      for (let e = 0; e < G3; e++) ((p += this.px[e]), (m += this.pz[e]));
      ((p /= G3), (m /= G3));
      let h =
          f || this.dead
            ? 1
            : 1 + n.breath * Math.sin(this.t * 2.6 + this.breathPhase),
        g = Math.sqrt(h),
        _ = 0;
      for (let e = 0, t = 11; e < G3; t = e++)
        _ += this.px[t] * this.pz[e] - this.px[e] * this.pz[t];
      _ = Math.max(1, _ / 2);
      let v = this.dead ? 0.3 : 1,
        y =
          (n.pressure * (this.dead ? 0.5 : 1) * 600 * (this.area0 * h - _)) /
          (this.area0 * h),
        b = n.shape * v,
        x = this.dead ? 0.55 : 1,
        { ax: S, az: C } = this;
      for (let e = 0; e < G3; e++)
        ((S[e] = b * (p + this.ru[e] * g - this.px[e])),
          (C[e] = b * (m + this.rw[e] * g * x - this.pz[e]) - n.gravity));
      for (let e = 0; e < G3; e++) {
        let t = (e + 1) % G3,
          n = this.px[t] - this.px[e],
          r = this.pz[t] - this.pz[e],
          i = y * 0.5;
        ((S[e] += r * i), (C[e] -= n * i), (S[t] += r * i), (C[t] -= n * i));
      }
      let w = t.windup;
      if (
        ((this.windK = w && !w.landed && !this.dead ? w.k : 0),
        this.windK > 0 && this.hop !== `air`)
      )
        for (let e = 0; e < G3; e++)
          this.pz[e] > m && (C[e] -= 520 * Math.min(1, this.windK * 1.5));
      if (this.hop === `crouch`) {
        for (let e = 0; e < G3; e++) this.pz[e] > m && (C[e] -= 520);
        ((this.crouchT -= e), this.crouchT <= 0 && this.launch(m));
      }
      let T = Math.exp(-n.damping * e);
      for (let t = 0; t < G3; t++)
        ((this.vx[t] = (this.vx[t] + S[t] * e) * T),
          (this.vz[t] = (this.vz[t] + C[t] * e) * T),
          (this.ox[t] = this.px[t]),
          (this.oz[t] = this.pz[t]),
          (this.px[t] += this.vx[t] * e),
          (this.pz[t] += this.vz[t] * e));
      for (let e = 0; e < 3; e++) {
        for (let e = 0; e < G3; e++) {
          let t = (e + 1) % G3,
            r = this.px[t] - this.px[e],
            i = this.pz[t] - this.pz[e],
            a = Math.hypot(r, i) || 1e-4,
            o = ((a - this.len[e] * g) / a) * 0.5 * n.skin;
          ((this.px[e] += r * o),
            (this.pz[e] += i * o),
            (this.px[t] -= r * o),
            (this.pz[t] -= i * o));
        }
        for (let e = 0; e < G3; e++)
          this.pz[e] < 0 &&
            ((this.pz[e] = 0),
            (this.px[e] += (this.ox[e] - this.px[e]) * 0.35));
      }
      for (let t = 0; t < G3; t++)
        ((this.vx[t] = (this.px[t] - this.ox[t]) / e),
          (this.vz[t] = (this.pz[t] - this.oz[t]) / e));
      this.lungeT > 0 && (this.lungeT -= e);
      let E = +(this.lungeT > 0);
      (this.lx.step(e, this.lungeDx * 7 * E),
        this.ly.step(e, this.lungeDy * 5 * E));
      let D = 0,
        O = 1 / 0;
      for (let e = 0; e < G3; e++)
        ((D = Math.max(D, this.pz[e])), (O = Math.min(O, this.pz[e])));
      ((this.top = Math.ceil(D) + 2), (this.lift = O));
    }
    launch(e) {
      let t = this.p,
        n = this.striking,
        r = n ? (n.dx === 0 ? this.facing : Math.sign(n.dx)) : this.dir,
        i = n ? 1.25 : 1;
      for (let n = 0; n < G3; n++) {
        let a = aH(this.pz[n] / (2 * t.rz), 0, 1);
        ((this.vz[n] += t.hopV * i * (0.94 + 0.12 * a)),
          (this.vx[n] +=
            r * t.lean * i * (a - 0.3) * (this.pz[n] > e ? 1.2 : 0.8)));
      }
      (n && ((this.lungeT = 0.2), (this.lungeDx = n.dx), (this.lungeDy = n.dy)),
        (this.striking = null),
        (this.hop = `air`),
        (this.hopT = t.hopEvery));
    }
    hit(e) {
      let t = Number.isNaN(e) ? -this.facing : e < this.x ? 1 : -1;
      for (let e = 0; e < G3; e++) {
        let n = aH(this.pz[e] / (2 * this.p.rz), 0, 1);
        ((this.vx[e] += t * 45 * n), (this.vz[e] -= 35 * n));
      }
    }
    strike(e, t) {
      this.dead ||
        ((this.striking = { dx: e, dy: t }),
        this.hop === `air` && (this.lungeT = 0.15),
        this.windK > 0.5 &&
          this.hop !== `air` &&
          ((this.hop = `crouch`), (this.crouchT = 0)));
    }
    die() {
      this.dead = !0;
      for (let e = 0; e < G3; e++)
        this.vz[e] -= 20 * aH(this.pz[e] / (2 * this.p.rz), 0, 1);
    }
    uploads() {
      return this.buf.uploads;
    }
    draw(e, t, n, r) {
      let i = t - Y3 + Math.round(this.lx.y),
        a = n - X3 + Math.round(this.ly.y);
      if (this.key && !this.drawDue() && this.key.endsWith(r ? `F` : `-`)) {
        e.drawImage(this.buf.canvas, i, a);
        return;
      }
      let o = this.p.snap,
        { bx: s, by: c } = this,
        l = ``,
        u = 0,
        d = 0,
        f = 1 / 0,
        p = -1 / 0;
      for (let e = 0; e < G3; e++)
        ((s[e] = this.snaps[e * 2].half(Y3 + this.px[e] - this.x, o)),
          (c[e] = this.snaps[e * 2 + 1].half(X3 - this.pz[e], o)),
          (u += this.px[e] - this.x),
          (d += this.pz[e]),
          (f = Math.min(f, this.pz[e])),
          (p = Math.max(p, this.pz[e])),
          (l += `${s[e]},${c[e]};`));
      u = this.cSnap[0].at(Y3 + u / G3, Math.max(0.5, o));
      let m = this.cSnap[1].at(X3 - d / G3, Math.max(0.5, o)),
        h = this.face.y,
        g = aH((p - f) / (2 * this.p.rz), 0.5, 1.6),
        _ = this.blinkT > 0 || this.dead,
        v = Math.round(2.5 * h - 1.5),
        y = Math.round(2.5 * h + 1.5),
        b = m - Math.round(1 * g);
      ((l += `${u},${m},${v},${y},${b},${+!!_},${r ? `F` : `-`}`),
        l !== this.key &&
          ((this.key = l),
          this.raster(u, m, h, g, v, y, b, _),
          this.buf.upload(woe, r)),
        e.drawImage(this.buf.canvas, i, a));
    }
    raster(e, t, n, r, i, a, o, s) {
      let c = this.buf;
      (c.clear(), c.poly(this.bx, this.by, G3, q3));
      let l = c.bounds();
      if (!l) return;
      for (let e = l[1]; e <= l[3]; e++)
        for (let n = l[0]; n <= l[2]; n++) {
          if (c.get(n, e) !== q3) continue;
          let r = c.get(n, e + 1) === 0,
            i = e > t && (c.get(n - 1, e) === 0 || c.get(n + 1, e) === 0);
          (r || i) && c.set(n, e, K3);
        }
      let u = e - 2 * n,
        d = t - Math.round(2 * r);
      (c.ellipse(u, d, 2.2, 1.6, J3, 0, (e, t) => c.get(e, t) === q3),
        c.get(Math.round(u - 1), Math.round(d - 0.5)) === J3 &&
          c.set(Math.round(u - 1), Math.round(d - 0.5), Eoe));
      let f = s ? 1 : 2;
      for (let t of [i, a])
        for (let n = 0; n < f; n++)
          c.get(e + t, o + n + +!!s) !== 0 && c.set(e + t, o + n + +!!s, Doe);
      let p = e + Math.round(2.5 * n - 0.5),
        m = t + Math.max(1, Math.round(2 * r));
      for (let e = 0; e < 2; e++)
        (c.get(p + e, m) === q3 || c.get(p + e, m) === K3) &&
          c.set(p + e, m, Ooe);
      c.outline(Toe);
    }
    debug(e, t, n) {
      e.fillStyle = `#ff4d6a`;
      for (let r = 0; r < G3; r++)
        e.fillRect(
          Math.round(t + this.px[r] - this.x),
          Math.round(n - this.pz[r]),
          1,
          1,
        );
      ((e.fillStyle = `#ffe14d`),
        e.fillRect(t, n, 1, 1),
        (e.fillStyle =
          this.hop === `air`
            ? `#4dd2ff`
            : this.hop === `crouch`
              ? `#ff9a2a`
              : `#9be26b`),
        e.fillRect(t - 1, n + 3, 3, 1));
    }
  },
  Z3 = {
    slime: (e, t, n, r) => new joe(e, t, n, r),
    wolf: (e, t, n, r) => new Coe(`wolf`, e, t, n, r),
    wisp: (e, t, n, r) => new q0(`wisp`, e, t, n, r),
    golem: (e, t, n, r) => new h2(`golem`, e, t, n, r),
    ...Object.fromEntries(
      Object.keys(F3).map((e) => [e, (t, n, r, i) => _oe(e, t, n, r, i)]),
    ),
  },
  Moe = (e) => Object.hasOwn(Z3, e) && !tB(e),
  Noe = class {
    entries = new Map();
    chosen = new Set();
    maxCap = GG ? 10 : 24;
    cap = this.maxCap;
    budgetMs = GG ? 2 : 3;
    spent = 0;
    frames = 0;
    avgMs = 0;
    constructor() {}
    plan(e, t, n, r) {
      ((this.avgMs += (this.spent - this.avgMs) * 0.1),
        (this.spent = 0),
        ++this.frames % 20 == 0 &&
          (this.avgMs > this.budgetMs && this.cap > 4
            ? this.cap--
            : this.avgMs < this.budgetMs * 0.5 &&
              this.cap < this.maxCap &&
              this.cap++),
        this.chosen.clear());
      let i = e.filter((e) => Moe(e.kind));
      i.length > this.cap &&
        i.sort(
          (e, r) =>
            (e.x - t) ** 2 + (e.y - n) ** 2 - ((r.x - t) ** 2 + (r.y - n) ** 2),
        );
      for (let e = 0; e < Math.min(i.length, this.cap); e++)
        this.chosen.add(i[e].id);
      for (let [e, t] of this.entries)
        r - t.seen > 10 && this.entries.delete(e);
    }
    get(e, t) {
      if (!this.chosen.has(e.id)) return null;
      let n = performance.now(),
        r = this.entries.get(e.id);
      r
        ? t - r.seen > 1 && r.body.reset(e.x, e.y, e.facing)
        : ((r = {
            body: Z3[e.kind](e.id, e.x, e.y, e.facing),
            seen: t,
            flash: e.flash,
            lunge: e.lunge,
            dead: !1,
          }),
          this.entries.set(e.id, r));
      let i = Math.max(0, t - r.seen);
      return (
        (r.seen = t),
        e.flash > r.flash + 0.01 && r.body.hit(e.fromX),
        (r.flash = e.flash),
        e.lunge > r.lunge + 0.01 && r.body.strike(e.lungeDir.x, e.lungeDir.y),
        (r.lunge = e.lunge),
        e.dead && !r.dead
          ? r.body.die()
          : !e.dead && r.dead && r.body.reset(e.x, e.y, e.facing),
        (r.dead = e.dead),
        r.body.step(i, e),
        (this.spent += performance.now() - n),
        r.body
      );
    }
    draw(e, t, n, r, i) {
      let a = performance.now();
      (e.draw(t, n, r, i), (this.spent += performance.now() - a));
    }
    get size() {
      return this.entries.size;
    }
  };
