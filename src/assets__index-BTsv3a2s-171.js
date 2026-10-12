// assets__index-BTsv3a2s 171 — math
// Lines 97649-98742 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var Sae = 4294967295,
  fH = class {
    pal = new Uint32Array(256);
    map = new Map();
    next = 1;
    constructor(e = []) {
      for (let t of e) this.index(t);
    }
    index(e) {
      let t = this.map.get(e);
      if (t !== void 0) return t;
      if (this.next > 255) return 1;
      t = this.next++;
      let [n, r, i] = Lp(e);
      return (
        (this.pal[t] = (255 << 24) | (i << 16) | (r << 8) | n),
        this.map.set(e, t),
        t
      );
    }
  },
  pH = class {
    w;
    h;
    px;
    canvas;
    ctx;
    img;
    u32;
    uploads = 0;
    x0 = 1 / 0;
    y0 = 1 / 0;
    x1 = -1;
    y1 = -1;
    ux0 = 0;
    uy0 = 0;
    ux1 = -1;
    uy1 = -1;
    constructor(e, t) {
      ((this.w = e),
        (this.h = t),
        (this.px = new Uint8Array(e * t)),
        (this.canvas = document.createElement(`canvas`)),
        (this.canvas.width = e),
        (this.canvas.height = t),
        (this.ctx = this.canvas.getContext(`2d`)),
        (this.img = this.ctx.createImageData(e, t)),
        (this.u32 = new Uint32Array(this.img.data.buffer)));
    }
    clear() {
      if (this.x1 >= 0)
        for (let e = this.y0; e <= this.y1; e++)
          this.px.fill(0, e * this.w + this.x0, e * this.w + this.x1 + 1);
      ((this.x0 = this.y0 = 1 / 0), (this.x1 = this.y1 = -1));
    }
    set(e, t, n) {
      e < 0 ||
        t < 0 ||
        e >= this.w ||
        t >= this.h ||
        ((this.px[t * this.w + e] = n),
        e < this.x0 && (this.x0 = e),
        e > this.x1 && (this.x1 = e),
        t < this.y0 && (this.y0 = t),
        t > this.y1 && (this.y1 = t));
    }
    bounds() {
      return this.x1 < 0 ? null : [this.x0, this.y0, this.x1, this.y1];
    }
    get(e, t) {
      return e < 0 || t < 0 || e >= this.w || t >= this.h
        ? 0
        : this.px[t * this.w + e];
    }
    rect(e, t, n, r, i) {
      for (let a = 0; a < r; a++)
        for (let r = 0; r < n; r++) this.set(e + r, t + a, i);
    }
    ellipse(e, t, n, r, i, a = 0, o) {
      if (n <= 0 || r <= 0) return;
      let s = Math.max(n, r) + 1,
        c = Math.cos(a),
        l = Math.sin(a),
        u = Math.floor(e - s),
        d = Math.ceil(e + s),
        f = Math.floor(t - s),
        p = Math.ceil(t + s);
      for (let a = f; a <= p; a++)
        for (let s = u; s <= d; s++) {
          let u = s + 0.5 - e,
            d = a + 0.5 - t,
            f = (u * c + d * l) / n,
            p = (-u * l + d * c) / r;
          f * f + p * p <= 1 && (!o || o(s, a)) && this.set(s, a, i);
        }
    }
    plate(e, t, n, r, i, a, o) {
      let s = Math.hypot(n, r) + 1,
        c = Math.cos(i),
        l = Math.sin(i);
      for (let i = Math.floor(t - s); i <= Math.ceil(t + s); i++)
        for (let u = Math.floor(e - s); u <= Math.ceil(e + s); u++) {
          let s = u + 0.5 - e,
            d = i + 0.5 - t,
            f = s * c + d * l,
            p = -s * l + d * c,
            m = Math.abs(f),
            h = Math.abs(p);
          if (m > n || h > r || m - (n - a) + (h - (r - a)) > a) continue;
          let g = o(f, p);
          g && this.set(u, i, g);
        }
    }
    poly(e, t, n, r) {
      let i = 1 / 0,
        a = -1 / 0;
      for (let e = 0; e < n; e++)
        (t[e] < i && (i = t[e]), t[e] > a && (a = t[e]));
      let o = [];
      for (let s = Math.floor(i); s <= Math.ceil(a); s++) {
        let i = s + 0.5;
        o.length = 0;
        for (let r = 0, a = n - 1; r < n; a = r++) {
          let n = t[a],
            s = t[r];
          ((n <= i && i < s) || (s <= i && i < n)) &&
            o.push(e[a] + ((i - n) / (s - n)) * (e[r] - e[a]));
        }
        o.sort((e, t) => e - t);
        for (let e = 0; e + 1 < o.length; e += 2)
          for (
            let t = Math.ceil(o[e] - 0.5);
            t <= Math.floor(o[e + 1] - 0.5);
            t++
          )
            this.set(t, s, r);
      }
    }
    line(e, t, n, r, i, a = 1) {
      let o = Math.max(
          1,
          Math.ceil(Math.max(Math.abs(n - e), Math.abs(r - t))),
        ),
        s = Math.floor(a / 2);
      for (let c = 0; c <= o; c++) {
        let l = c / o;
        this.rect(
          Math.round(e + (n - e) * l) - s,
          Math.round(t + (r - t) * l) - s,
          a,
          a,
          i,
        );
      }
    }
    overlay(e) {
      let t = e.bounds();
      if (t)
        for (let n = t[1]; n <= t[3]; n++)
          for (let r = t[0]; r <= t[2]; r++) {
            let t = e.px[n * e.w + r];
            t !== 0 && this.set(r, n, t);
          }
    }
    underlay(e) {
      let t = e.bounds();
      if (t)
        for (let n = t[1]; n <= t[3]; n++)
          for (let r = t[0]; r <= t[2]; r++) {
            let t = e.px[n * e.w + r];
            t !== 0 && this.px[n * this.w + r] === 0 && this.set(r, n, t);
          }
    }
    shiftRow(e, t) {
      if (!t || e < 0 || e >= this.h || this.x1 < 0) return;
      let n = e * this.w,
        r = Math.max(0, this.x0),
        i = Math.min(this.w - 1, this.x1),
        a = this.px.slice(n + r, n + i + 1);
      this.px.fill(0, n + r, n + i + 1);
      for (let n = 0; n < a.length; n++)
        a[n] !== 0 && this.set(r + n + t, e, a[n]);
    }
    flipX() {
      if (this.x1 < 0) return;
      let { w: e } = this,
        [t, n, r, i] = [this.x0, this.y0, this.x1, this.y1];
      for (let a = n; a <= i; a++) {
        let n = a * e,
          i = this.px.slice(n + t, n + r + 1);
        this.px.fill(0, n + t, n + r + 1);
        for (let r = 0; r < i.length; r++)
          i[r] !== 0 && (this.px[n + (e - 1 - (t + r))] = i[r]);
      }
      ((this.x0 = e - 1 - r), (this.x1 = e - 1 - t));
    }
    outline(e) {
      let { w: t, h: n, px: r } = this;
      if (this.x1 < 0) return;
      let i = Math.max(0, this.y0 - 1),
        a = Math.min(n - 1, this.y1 + 1),
        o = Math.max(0, this.x0 - 1),
        s = Math.min(t - 1, this.x1 + 1);
      for (let c = i; c <= a; c++)
        for (let i = o; i <= s; i++) {
          let a = c * t + i;
          if (r[a] !== 0) continue;
          let o = i > 0 && r[a - 1] !== 0 && r[a - 1] !== e,
            s = i < t - 1 && r[a + 1] !== 0 && r[a + 1] !== e,
            l = c > 0 && r[a - t] !== 0 && r[a - t] !== e,
            u = c < n - 1 && r[a + t] !== 0 && r[a + t] !== e;
          (o || s || l || u) && (r[a] = e);
        }
      ((this.x0 = o), (this.y0 = i), (this.x1 = s), (this.y1 = a));
    }
    upload(e, t = !1) {
      let { px: n, u32: r, w: i } = this,
        a = Math.min(this.ux0, this.x0 === 1 / 0 ? this.ux0 : this.x0),
        o = Math.min(this.uy0, this.y0 === 1 / 0 ? this.uy0 : this.y0),
        s = Math.max(this.ux1, this.x1),
        c = Math.max(this.uy1, this.y1);
      if (s >= a && c >= o) {
        for (let l = o; l <= c; l++)
          for (let o = a, c = l * i + a; o <= s; o++, c++) {
            let i = n[c];
            r[c] = i === 0 ? 0 : t ? Sae : e[i];
          }
        this.ctx.putImageData(this.img, 0, 0, a, o, s - a + 1, c - o + 1);
      }
      (this.x1 >= 0
        ? ((this.ux0 = this.x0),
          (this.uy0 = this.y0),
          (this.ux1 = this.x1),
          (this.uy1 = this.y1))
        : ((this.ux0 = this.uy0 = 0), (this.ux1 = this.uy1 = -1)),
        this.uploads++);
    }
  },
  mH = class {
    buf;
    pal;
    canvas;
    tx;
    ty;
    c = 1;
    constructor(e, t, n, r, i) {
      ((this.buf = e),
        (this.pal = t),
        (this.canvas = n),
        (this.tx = r),
        (this.ty = i));
    }
    set fillStyle(e) {
      this.c = this.pal.index(e);
    }
    get fillStyle() {
      return ``;
    }
    fillRect(e, t, n, r) {
      this.buf.rect(
        Math.round(e) + this.tx,
        Math.round(t) + this.ty,
        Math.round(n),
        Math.round(r),
        this.c,
      );
    }
    clearRect(e, t, n, r) {
      this.buf.rect(
        Math.round(e) + this.tx,
        Math.round(t) + this.ty,
        Math.round(n),
        Math.round(r),
        0,
      );
    }
  },
  hH = 60,
  gH = 84,
  _H = 30,
  vH = 72,
  Cae = 0.45,
  yH = 0.3,
  wae = 0.75,
  bH = [`#1e0208`, `#5c0614`, `#a3101f`, `#e8283e`, `#ffd6dc`],
  Tae = `#1a0f1f`,
  Eae = `#0d0710`,
  Dae = `#3a2140`,
  Oae = `#e0b64a`,
  kae = `#e8d5e0`,
  Aae = `#bfa3b5`,
  jae = `#7a3050`,
  Mae = `#b9b3c7`,
  xH = `#050208`,
  SH = (e) => (((e * 2654435761) >>> 0) % 997) / 997,
  CH = (e, t, n = 0) => {
    let r =
      Math.imul(e + 374761393, 668265263) ^
      Math.imul(t + 2246822519, 3266489917) ^
      Math.imul(n + 1, 2654435761);
    return (
      (r = Math.imul(r ^ (r >>> 13), 1274126177)),
      ((r ^ (r >>> 16)) >>> 0) / 4294967296
    );
  },
  wH = {
    0: [
      [-5, -25],
      [5, -25],
    ],
    1: [
      [-5, -25],
      [5, -25],
    ],
    2: [
      [-1, -25],
      [1, -25],
    ],
  },
  TH = {
    0: [
      [-6.5, -15],
      [6.5, -15],
    ],
    1: [
      [-6.5, -15],
      [6.5, -15],
    ],
    2: [
      [-1.5, -15],
      [2, -15],
    ],
  },
  EH = { 0: [0.5, -21], 1: [0.5, -21], 2: [1, -21] },
  DH = class extends uH {
    dir = 0;
    wantDir = 0;
    turnT = 0;
    vx = 0;
    vy = 0;
    lastIn;
    bobK;
    hem;
    hair;
    lean;
    rise;
    float;
    tilt;
    hands;
    shape = {
      L: TH[0][0],
      R: TH[0][1],
      glowL: !0,
      glowR: !0,
      rise: 0,
      float: 0,
      tilt: 0,
      tremble: 0,
      eyes: `open`,
    };
    hover = 3;
    tone = `none`;
    prevTone = `none`;
    toneT = -9;
    act = `idle`;
    actAge = 0;
    aim = [0, 1];
    beatsSeen = 0;
    blinkAt = 3;
    ghost = null;
    pourAge = 1 / 0;
    pourSeen = 1 / 0;
    pourBlood = !0;
    pal = new fH([xH]);
    buf = new pH(hH, gH);
    ghostBuf = new pH(hH, gH);
    sn = {};
    key = ``;
    constructor(e, t, n, r) {
      super(`lillith`, e, t, n, r);
      let i = this.p;
      ((this.lastIn = { x: t, y: n }),
        (this.bobK = new sH(i.bobF, i.bobZ, 0, 0)),
        (this.hem = new sH(i.hemF, i.hemZ, 0, 0)),
        (this.hair = new sH(i.hairF, i.hairZ, 0, 0)),
        (this.lean = new sH(i.leanF, i.leanZ, 0, 0)),
        (this.rise = new sH(2.5, 0.7, 0, 0)),
        (this.float = new sH(1.5, 0.6, 0, 0)),
        (this.tilt = new sH(4, 0.8, 0, 0)));
      let a = TH[0];
      ((this.hands = [a[0][0], a[0][1], a[1][0], a[1][1]].map(
        (e) => new sH(i.armF, i.armZ, 0, e),
      )),
        (this.top = 46));
    }
    retune() {
      let e = this.p;
      (this.bobK.tune(e.bobF, e.bobZ, 0),
        this.hem.tune(e.hemF, e.hemZ, 0),
        this.hair.tune(e.hairF, e.hairZ, 0),
        this.lean.tune(e.leanF, e.leanZ, 0));
      for (let t of this.hands) t.tune(e.armF, e.armZ, 0);
    }
    reset(e, t, n) {
      ((this.x = e),
        (this.y = t),
        (this.facing = n < 0 ? -1 : 1),
        (this.lastIn = { x: e, y: t }),
        (this.vx = this.vy = 0),
        this.hem.reset(0),
        this.hair.reset(0),
        this.lean.reset(0));
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
        r = t.lillith,
        i = r?.pour;
      (i &&
        i.age < this.pourSeen &&
        i.age < 0.45 &&
        this.poured(i.dx, i.dy, i.blood),
        (this.pourSeen = i ? i.age : 1 / 0),
        (this.pourAge = i ? i.age : 1 / 0));
      let a = !!i && i.age < 0.05;
      ((this.x = t.x), (this.y = t.y));
      let o = 1 - Math.exp(-10 * e);
      (a ||
        ((this.vx += ((t.x - this.lastIn.x) / e - this.vx) * o),
        (this.vy += ((t.y - this.lastIn.y) / e - this.vy) * o)),
        (this.lastIn = { x: t.x, y: t.y }),
        (this.hover = r?.hover ?? 3));
      let s = r?.tone && r.tone in zh ? r.tone : `none`;
      s !== this.tone &&
        ((this.prevTone = this.tone),
        (this.tone = s),
        (this.toneT = this.t),
        s !== `none` && this.hair.kick((this.rand() < 0.5 ? -1 : 1) * 30));
      let c = r?.look,
        l = this.wantDir;
      if (c) {
        let e = c.x - this.x,
          t = c.y - this.y;
        Math.abs(e) > Math.abs(t) * 1.3
          ? (l = e > 0 ? 2 : 3)
          : (Math.abs(t) > Math.abs(e) * 1.3 || Math.hypot(e, t) < 4) &&
            (l = t > 0 ? 0 : 1);
      } else l = 0;
      (l !== this.wantDir &&
        (this.wantDir >= 2 && l >= 2 && n.turn > 0 && (this.turnT = n.turn),
        (this.wantDir = l)),
        this.turnT > 0 && (this.turnT -= e),
        (this.dir = this.turnT > 0 ? 0 : this.wantDir),
        (this.facing = this.dir === 3 ? -1 : 1));
      let u = r?.act ?? `idle`;
      ((u !== this.act || (r && r.age < this.actAge - 0.05)) &&
        ((this.act = u), (this.beatsSeen = 0)),
        (this.actAge = r?.age ?? 0));
      let d = this.view(),
        f = this.dir === 3 ? -1 : 1;
      if (
        ((this.aim = [(r?.ax ?? 0) * (d === 2 ? f : 1), r?.ay ?? 1]),
        (this.shape = this.pose(u, d, this.actAge, r?.dur ?? 1, !!r?.hooked)),
        u === `heartbeat`)
      ) {
        let e = +(this.actAge >= 1.2) + +(this.actAge >= 1.6);
        e > this.beatsSeen &&
          ((this.beatsSeen = e),
          this.bobK.kick(40),
          this.hem.kick((this.rand() - 0.5) * 30),
          this.hair.kick((this.rand() - 0.5) * 40));
      }
      (this.bobK.step(e, 0),
        this.hem.step(e, aH(-this.vx * n.hemK, -n.hemMax, n.hemMax)),
        this.hair.step(e, aH(-this.vx * n.hairK, -n.hairMax, n.hairMax)),
        this.lean.step(e, aH(this.vx * n.leanK * f, -n.leanMax, n.leanMax)),
        this.rise.step(e, this.shape.rise),
        this.float.step(e, this.shape.float),
        this.tilt.step(e, this.shape.tilt));
      let p = this.shape;
      ([p.L[0], p.L[1], p.R[0], p.R[1]].forEach((t, n) =>
        this.hands[n].step(e, t),
      ),
        this.t > this.blinkAt &&
          (this.blinkAt = this.t + 2.5 + this.rand() * 4),
        (this.top = Math.round(42 + this.hover + Math.max(0, this.rise.y))));
    }
    pose(e, t, n, r, i) {
      let [a, o] = wH[t],
        [s, c] = TH[t],
        [l, u] = this.aim,
        d = t === 2 || l >= 0,
        f = d ? o : a,
        p = d ? 1 : -1,
        m = {
          L: s,
          R: c,
          glowL: !0,
          glowR: !0,
          rise: 0,
          float: 0,
          tilt: 0,
          tremble: 0,
          eyes: `open`,
        },
        h = (e, t) => {
          d ? ((m.R = e), t && (m.L = t)) : ((m.L = e), t && (m.R = t));
        },
        g = (e) =>
          t === 2
            ? [f[0] + l * e, f[1] + u * e * 0.7]
            : t === 0
              ? [
                  f[0] - p * Math.max(0, u) * 2 + l * e * 0.8,
                  f[1] + Math.max(0, u) * e * 0.25 - (1 - Math.abs(u)) * 1,
                ]
              : [f[0] + p * 2 + l * e * 0.8, f[1] - 2 + u * e * 0.15],
        _ = t === 2 ? [2, -22] : [-p * 1.5, -22];
      switch (e) {
        case `cast`:
          h(g(7));
          break;
        case `needles`:
          h(t === 2 ? [3.5, -33] : [p * 7 + l * 2, -33], _);
          break;
        case `siphon`:
          i
            ? (h(g(7 - Math.max(0, Math.sin(n * Math.PI * 4)) * 1.5), _),
              (m.rise = -0.5))
            : h(g(8.5));
          break;
        case `heartbeat`:
          ((m.L = t === 2 ? [-4, -17] : [-9, -17]),
            (m.R = t === 2 ? [4, -17] : [9, -17]));
          break;
        case `rain`:
          ((m.L = t === 2 ? [-1, -37] : [-6, -37]),
            (m.R = t === 2 ? [2, -37] : [6, -37]),
            (m.tilt = 1));
          break;
        case `veil`:
          ((m.L = t === 2 ? [2, -22] : [2, -21]),
            (m.R = t === 2 ? [3, -21] : [-2, -21]),
            (m.rise = -1.5),
            (m.tremble = Math.min(1, n / 0.5)),
            (m.glowL = m.glowR = !1));
          break;
        case `drink`: {
          let e = Math.min(1, n / 0.5);
          ((m.L =
            t === 2
              ? [oH(-1.5, -7, e), oH(-15, -29, e)]
              : [oH(-6.5, -12, e), oH(-15, -28, e)]),
            (m.R =
              t === 2
                ? [oH(2, 8, e), oH(-15, -29, e)]
                : [oH(6.5, 12, e), oH(-15, -28, e)]),
            (m.rise = 3 * e),
            (m.tilt = 1),
            (m.float = 1),
            (m.eyes = `shut`));
          break;
        }
        case `unmaking`: {
          let e = [Math.cos(this.t * 5) * 1.5, Math.sin(this.t * 5) * 1];
          (h(
            t === 2 ? [3 + e[0], -39 + e[1]] : [p * 5.5 + e[0], -39 + e[1]],
            _,
          ),
            (m.float = 1.5),
            (m.rise = 2),
            (m.eyes = `white`));
          break;
        }
        case `woven`:
          n < r
            ? ((m.L = t === 2 ? [1, -38] : [-1, -38]),
              (m.R = t === 2 ? [2, -38] : [1, -38]),
              (m.float = 0.6),
              (m.rise = 1))
            : h(g(8));
          break;
        case `lamps`:
          ((m.L = t === 2 ? [-5, -19] : [-10, -19]),
            (m.R = t === 2 ? [7, -19] : [10, -19]));
          break;
        case `raise`: {
          let e = Math.min(1, n / 1.4);
          ((m.L =
            t === 2
              ? [oH(-2, -3, e), oH(-15, -34, e)]
              : [oH(-8, -10, e), oH(-15, -33, e)]),
            (m.R =
              t === 2
                ? [oH(3, 5, e), oH(-15, -34, e)]
                : [oH(8, 10, e), oH(-15, -33, e)]),
            (m.rise = 2 * e),
            (m.float = 0.5 * e));
          break;
        }
        default:
          ((m.L = [s[0] - Math.sin(this.t * 1.3) * 0.4, s[1]]),
            (m.R = [c[0] + Math.sin(this.t * 1.3 + 1) * 0.4, c[1]]));
      }
      return (
        e !== `idle` &&
          (d
            ? (m.glowL =
                e === `rain` || e === `lamps` || e === `raise` || e === `woven`)
            : (m.glowR =
                e === `rain` ||
                e === `lamps` ||
                e === `raise` ||
                e === `woven`)),
        m
      );
    }
    liftPx() {
      let e = this.p;
      return (
        this.hover +
        Math.sin(this.t * Math.PI * 2 * e.hoverHz) * e.hoverAmp -
        this.bobK.y +
        this.rise.y
      );
    }
    hand() {
      let e = this.view() === 2 || this.aim[0] >= 0,
        t = e ? this.hands[2].y : this.hands[0].y,
        n = e ? this.hands[3].y : this.hands[1].y;
      return { dx: (this.dir === 3 ? -1 : 1) * t, dy: n - this.liftPx() };
    }
    handFor(e, t, n) {
      let r = this.view(),
        i = this.dir === 3 ? -1 : 1,
        a = this.aim;
      this.aim = [t * (r === 2 ? i : 1), n];
      let o = this.pose(e, r, 0, 1, !1);
      this.aim = a;
      let s = r === 2 || t >= 0 ? o.R : o.L;
      return { dx: i * s[0], dy: s[1] - this.liftPx() };
    }
    heart() {
      let e = this.view();
      return {
        dx: (this.dir === 3 ? -1 : 1) * EH[e][0],
        dy: EH[e][1] - this.liftPx(),
      };
    }
    away() {
      return this.pourAge < yH;
    }
    poured(e, t, n) {
      (this.buf.bounds() &&
        (this.ghost = { px: this.buf.px.slice(), dx: -e, dy: -t, blood: n }),
        (this.pourBlood = n),
        this.hem.kick((e > 0 ? -1 : 1) * 40),
        this.hair.kick((e > 0 ? -1 : 1) * 60),
        (this.key = ``));
    }
    hit(e) {
      let t = Number.isNaN(e) ? -this.facing : e < this.x ? 1 : -1;
      (this.hair.kick(t * 50), this.hem.kick(t * 30), this.lean.kick(t * 12));
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
      let i = this.pourAge;
      if (i < 0.3) return;
      let a = i < wae,
        o = this.p;
      if (
        this.key &&
        !a &&
        !this.drawDue() &&
        this.key.endsWith(r ? `F` : `-`)
      ) {
        e.drawImage(this.buf.canvas, t - _H, n - vH);
        return;
      }
      let s = this.view(),
        c = Math.round(this.snap(`lift`, this.liftPx())),
        l = (this.sn.hem ??= new cH()).half(this.hem.y * this.facing, o.snap),
        u = Math.round(this.snap(`hair`, this.hair.y * this.facing)),
        d = this.snap(`lean`, this.lean.y),
        f = Math.round(this.float.y * 2) / 2,
        p = +(this.tilt.y > 0.5),
        m = Math.floor(this.t * o.flutHz) % 5,
        h = this.hands.map((e, t) =>
          this.snap(
            `h${t}`,
            e.y +
              (this.shape.tremble && t % 2 == 0
                ? (CH(Math.floor(this.t * 20), t) - 0.5) *
                  this.shape.tremble *
                  1.6
                : 0),
          ),
        ),
        g = this.shape.tremble
          ? Math.round(
              (CH(Math.floor(this.t * 24), 7) - 0.5) * this.shape.tremble * 1.8,
            )
          : 0,
        _ = this.t > this.blinkAt - 0.12 && this.shape.eyes === `open`,
        v =
          this.t - this.toneT < 0.3
            ? Math.floor(-34 + ((this.t - this.toneT) / 0.3) * 22)
            : 99,
        y = this.act === `veil` ? Math.min(1, this.actAge / 0.7) : 0,
        b = a ? Math.min(7, Math.floor(((i - yH) / 0.45) * 8)) : 8,
        x = `${this.tone},${this.prevTone},${v},${this.dir},${c},${l},${u},${d},${f},${p},${m},${h},${g},${+!!_},${this.shape.eyes},${+!!this.shape.glowL}${+!!this.shape.glowR},${Math.round(y * 8)},${b}${r ? `F` : `-`}`;
      (x !== this.key &&
        ((this.key = x),
        this.raster({
          v: s,
          lift: c,
          hem: l,
          hair: u,
          lean: d,
          fl: f,
          tilt: p,
          flut: m,
          hd: h,
          shake: g,
          blink: _,
          wave: v,
          cracks: y,
          gathered: b / 8,
        }),
        this.buf.upload(this.pal.pal, r)),
        e.drawImage(this.buf.canvas, t - _H, n - vH));
    }
    raster(e) {
      let t = this.buf,
        n = this.pal;
      t.clear();
      let r = zh[this.tone],
        i = zh[this.prevTone] ?? r,
        a = {
          robe: n.index(Tae),
          robeD: n.index(Eae),
          robeL: n.index(Dae),
          gold: n.index(Oae),
          skin: n.index(kae),
          skinD: n.index(Aae),
          mouth: n.index(jae),
          silver: n.index(Mae),
          hair: n.index(r.hair),
          hairL: n.index(r.hairL),
          hair0: n.index(i.hair),
          hairL0: n.index(i.hairL),
          eye: n.index(this.shape.eyes === `white` ? r.core : r.eye),
          glow: n.index(r.glow),
          core: n.index(r.core),
          gems: [zh.ember.glow, zh.rime.glow, zh.storm.eye, zh.void.glow].map(
            (e) => n.index(e),
          ),
        },
        { v: o, flut: s } = e,
        c = -e.lift,
        l = (n, r, i, a = 1, o = 1) =>
          t.rect(_H + Math.round(n) + e.shake, vH + Math.round(r) + c, a, o, i),
        u = (t, n = !1) =>
          t < e.wave ? (n ? a.hairL : a.hair) : n ? a.hairL0 : a.hair0,
        d = o === 2,
        f = -e.tilt,
        [p, m] = [
          [e.hd[0], e.hd[1]],
          [e.hd[2], e.hd[3]],
        ],
        [h, g] = wH[o];
      d && this.arm(l, h, p, -1, a, !1, !0);
      for (let t = 15; t <= 35; t++) {
        let n = t - 37,
          r = d ? 2.6 + (t - 15) * 0.24 : 3.5 + (t - 15) * 0.3,
          i = d ? -0.5 : 0,
          c = Math.round(i - r),
          u = Math.round(i + r),
          f = t > 24 ? Math.round((e.hem * (t - 24)) / 11) : 0;
        for (let e = c; e <= u; e++) {
          if (t > 31 && ((e + 13) * 7 + t + s * 3) % 5 < t - 31) continue;
          let r = a.robe;
          (e <= c + 1 && (r = a.robeL),
            e >= u - 1 && (r = a.robeD),
            o === 0 && (e === 0 || e === 1) && (r = a.gold),
            d && e === u - 2 && (r = a.gold),
            l(e + f, n, r));
        }
      }
      if (o !== 2)
        for (let t = 7; t <= 19; t += 3)
          l(
            t - 13 + ((s + (t >> 2)) % 2) + Math.round(e.hem * 0.9),
            -6 + ((t >> 1) % 3),
            a.gold,
          );
      (d
        ? (l(-2, -24, a.gold, 5, 2),
          l(-2, -27, a.robeL, 3, 3),
          l(1, -27, a.robe, 2, 3))
        : (l(-4, -24, a.gold, 9, 2),
          l(-5, -26, a.robeL, 2, 3),
          l(4, -26, a.robeL, 2, 3),
          o === 1 && l(-3, -26, a.robe, 7, 2)),
        d ||
          (this.arm(l, h, p, -1, a, this.shape.glowL, !1),
          this.arm(l, g, m, 1, a, this.shape.glowR, !1)));
      let _ = (t, n, r) => {
        for (let i = 0; i < r; i++) {
          let a = i / r,
            o = Math.round(e.hair * a * a + n * e.fl * a * 2),
            s = -31 + f + i - Math.round(e.fl * a * 2);
          l(t + o, s, u(s), 2, 1);
        }
      };
      if (o === 0) {
        (_(-5, -1, 14 + (s % 2)), _(5, 1, 14 - (s % 2)));
        for (let t = 6; t < 11; t++)
          l(
            -5 + Math.round((e.hair * t * t) / 196 - e.fl * (t / 14) * 2),
            -31 + f + t - Math.round(e.fl * (t / 14) * 2),
            u(-31 + t, !0),
          );
      } else if (o === 1)
        for (let t = -5; t <= 6; t++) {
          let n = t === -5 || t === 6,
            r =
              (n ? 9 : 13) +
              Math.floor(CH(t, 3) * 3) +
              +((t + s) % 3 == 0) -
              Math.round(e.fl * 2),
            i = n ? -27 : -31;
          for (let a = 0; a < r; a++) {
            let o = a / r,
              s = i + f + a,
              c = Math.sign(t - 0.5) * (e.fl * o * 2 + (o > 0.6 && n ? 1 : 0));
            l(
              t + Math.round(e.hair * o * o + c),
              s,
              u(
                s,
                (t === -3 && a > 1 && a < r - 4) ||
                  (t === 2 && a > 3 && a < r - 5),
              ),
            );
          }
        }
      else
        for (let t = -4; t <= -1; t++) {
          let n = 14 - (t + 4) * 2 + ((t + s) % 2) - Math.round(e.fl * 2);
          for (let r = 0; r < n; r++) {
            let i = r / n,
              a = -31 + f + r - Math.round(e.fl * i * 2);
            l(
              t + Math.round(e.hair * i * i - e.fl * i * 3 - i * 1.2),
              a,
              u(a, t === -3 && r > 2 && r < 9),
            );
          }
        }
      let v = f;
      if (
        (o === 0
          ? (l(-3, -31 + v, a.skin, 8, 6),
            l(4, -31 + v, a.skinD, 1, 6),
            l(-3, -31 + v, u(-31), 8, 1),
            this.shape.eyes === `shut` || e.blink
              ? (l(-2, -29 + v, a.skinD, 2, 1), l(2, -29 + v, a.skinD, 2, 1))
              : (l(-2, -29 + v, a.eye, 2, 1), l(2, -29 + v, a.eye, 2, 1)),
            l(0, -27 + v, a.mouth, 2, 1),
            l(-4, -33 + v, u(-33), 10, 2),
            l(-4, -32 + v, u(-32, !0), 3, 1),
            l(-4, -33 + v, a.silver, 10, 1),
            l(-3, -34 + v, a.gems[0]),
            l(-1, -34 + v, a.gems[1]),
            l(2, -34 + v, a.gems[2]),
            l(4, -34 + v, a.gems[3]))
          : o === 1
            ? (l(-2, -35 + v, u(-35), 6, 1),
              l(-3, -34 + v, u(-34), 8, 1),
              l(-4, -33 + v, u(-33), 10, 3),
              l(-2, -34 + v, u(-34, !0), 2, 1),
              l(-3, -33 + v, u(-33, !0), 1, 1),
              l(-4, -32 + v, a.silver, 10, 1))
            : (l(0, -31 + v, a.skin, 4, 6),
              l(0, -31 + v, a.skinD, 1, 6),
              l(4, -29 + v, a.skin),
              l(3, -26 + v, a.skinD),
              this.shape.eyes === `shut` || e.blink
                ? l(2, -29 + v, a.skinD)
                : l(2, -29 + v, a.eye),
              l(3, -27 + v, a.mouth),
              l(-3, -35 + v, u(-35), 5, 1),
              l(-4, -34 + v, u(-34), 8, 2),
              l(-4, -32 + v, u(-32), 4, 6),
              l(0, -32 + v, u(-32), 1, 3),
              l(3, -31 + v, u(-31), 1, 1),
              l(-3, -34 + v, u(-34, !0), 3, 1),
              l(-2, -31 + v, u(-31, !0), 1, 4),
              l(-4, -33 + v, a.silver, 8, 1),
              l(3, -34 + v, a.gems[0]),
              l(2, -34 + v, a.gems[1])),
        d && this.arm(l, g, m, 1, a, this.shape.glowR, !1),
        e.lean)
      )
        for (let n = 0; n < vH; n++)
          t.shiftRow(n, Math.round((e.lean * (vH - e.lift - 2 - n)) / 36));
      if (
        (this.dir === 3 && t.flipX(),
        e.cracks > 0 && this.crack(e.cracks),
        e.gathered < 1)
      ) {
        let i = t.bounds();
        if (i) {
          let [a, o, s, c] = i,
            l = n.index(this.pourBlood ? bH[3] : r.glow),
            u = n.index(this.pourBlood ? bH[2] : r.core);
          for (let n = o; n <= c; n++)
            for (let r = a; r <= s; r++) {
              let i = n * t.w + r;
              if (t.px[i] === 0) continue;
              let a = ((n - o) / Math.max(1, c - o)) * 0.75 + SH(i) * 0.25;
              a > e.gathered + 0.12
                ? (t.px[i] = 0)
                : a > e.gathered && (t.px[i] = SH(i + 1) < 0.5 ? l : u);
            }
        }
      }
      t.outline(1);
    }
    arm(e, t, n, r, i, a, o) {
      let s = 5.6,
        c = n[0] - t[0],
        l = n[1] - t[1],
        u = Math.hypot(c, l) || 1e-4,
        d = n[0],
        f = n[1];
      u > 2 * s - 0.01 &&
        ((d = t[0] + (c / u) * (2 * s - 0.01)),
        (f = t[1] + (l / u) * (2 * s - 0.01)),
        (c = d - t[0]),
        (l = f - t[1]),
        (u = 2 * s - 0.01));
      let p = u / 2,
        m = Math.sqrt(Math.max(0, s * s - p * p)) * 0.6,
        h = -l / u,
        g = c / u;
      h * r < 0 && ((h = -h), (g = -g));
      let _ = t[0] + (c / u) * p + h * m,
        v = t[1] + (l / u) * p + g * m,
        y = o ? i.robeD : i.robe,
        b = (t, n, r, i, a, o) => {
          let s = Math.max(
            1,
            Math.ceil(Math.max(Math.abs(r - t), Math.abs(i - n))),
          );
          for (let c = 0; c <= s; c++) {
            let l = c / s;
            e(
              Math.round(t + (r - t) * l - (o - 1) / 2),
              Math.round(n + (i - n) * l - (o - 1) / 2),
              a,
              o,
              o,
            );
          }
        };
      b(t[0], t[1], _, v, y, 3);
      let x = t[0] + (d - t[0]) * 0.85,
        S = t[1] + (f - t[1]) * 0.85;
      f < t[1] - 4 && !o
        ? (e(Math.round(_ - 1), Math.round(v - 1), i.robeL, 2, 1),
          b(_, v, x, S, i.skin, 2),
          e(Math.round(_ + (r > 0 ? 0 : -1)), Math.round(v), i.skinD))
        : (b(_, v, x, S, y, 3),
          e(Math.round(x - 1), Math.round(S - 1), o ? i.robe : i.robeL, 2, 1));
      let C = (d - x) / (Math.hypot(d - x, f - S) || 1),
        w = (f - S) / (Math.hypot(d - x, f - S) || 1),
        T = Math.round(d + C * 0.5 - 0.5),
        E = Math.round(f + w * 0.5 - 0.5);
      (e(T, E, i.skin, 2, f < t[1] ? 2 : 1),
        a &&
          !o &&
          (e(T + (r > 0 ? 2 : -1), E + 1, i.glow),
          e(T + (r > 0 ? 2 : -1), E, i.core)));
    }
    crack(e) {
      let t = this.buf,
        n = t.bounds();
      if (!n) return;
      let r = this.pal.index(bH[4]),
        i = this.pal.index(bH[3]),
        [a, o, s, c] = n;
      for (let n = 0; n < 6; n++) {
        let l = a + 3 + Math.floor(CH(n, 9) * (s - a - 6)),
          u = o + 6 + Math.floor(CH(n, 9, 1) * (c - o) * 0.55),
          d = Math.round(10 * e);
        for (let e = 0; e < d; e++)
          (t.get(l, u) !== 0 && t.set(l, u, e < 2 ? r : i),
            (l += CH(n, e, 9) < 0.5 ? -1 : 1),
            (u += +(CH(e, n, 9) < 0.75)));
      }
    }
    drawGhost(e, t, n) {
      let r = this.ghost;
      if (!r) return;
      let i = this.pourAge;
      if (i >= 0.6 || i === 1 / 0) {
        this.ghost = null;
        return;
      }
      let a = (i / Cae) * 1.15,
        o = this.ghostBuf,
        s = zh[this.tone],
        c = r.blood
          ? bH.map((e) => this.pal.index(e))
          : [xH, s.hair, s.hairL, s.glow, s.core].map((e) => this.pal.index(e));
      o.clear();
      let l = gH,
        u = 0;
      for (let e = 0; e < r.px.length; e++) {
        if (r.px[e] === 0) continue;
        let t = (e / hH) | 0;
        (t < l && (l = t), t > u && (u = t));
      }
      let d = Math.max(1, u - l);
      for (let e = 0; e < r.px.length; e++) {
        let t = r.px[e];
        if (t === 0) continue;
        let n = e % hH,
          i = (e / hH) | 0,
          s = ((u - i) / d) * 0.75 + SH(e) * 0.25;
        if (a < s) o.set(n, i, t);
        else if (a < s + 0.3 && SH(e + 3) < 0.45) {
          let t = a - s,
            r = t * 50,
            l = (SH(e + 5) - 0.5) * (3 + t * 14) + (n - _H) * t * 0.6;
          o.set(
            n + Math.round(l),
            Math.min(73, i + Math.round(r)),
            t < 0.04 ? c[4] : t < 0.12 ? c[3] : t < 0.22 ? c[2] : c[1],
          );
        }
      }
      let f = Math.min(1, a) * 7;
      if (a > 0.2)
        for (let e = -Math.ceil(f); e <= Math.ceil(f); e++) {
          let t = Math.round(
            Math.sqrt(Math.max(0, 1 - (e * e) / (f * f))) * (f / 3.5),
          );
          for (let n = -t; n <= t; n++)
            SH(e * 31 + n + 900) < 0.8 - (a - 0.6) &&
              o.set(_H + e, vH + n, n === -t ? c[3] : c[2]);
        }
      (o.upload(this.pal.pal),
        e.drawImage(
          o.canvas,
          Math.round(t + r.dx - _H),
          Math.round(n + r.dy - vH),
        ));
    }
    debug(e, t, n) {
      ((e.fillStyle = `#ffe14d`), e.fillRect(t, n, 1, 1));
      let r = this.hand();
      ((e.fillStyle = `#ff4dd2`),
        e.fillRect(Math.round(t + r.dx), Math.round(n + r.dy), 1, 1));
      let i = this.heart();
      ((e.fillStyle = `#4dd2ff`),
        e.fillRect(Math.round(t + i.dx), Math.round(n + i.dy), 1, 1));
    }
  },
  OH = rm.blood,
  kH = rm.hollow,
  AH = OH[3],
  jH = Math.PI * 2,
  MH = 0.4,
  Nae = 1.5,
  NH = (50 * Math.PI) / 180,
  PH = { ax: 30, ay: 72, w: 60, h: 84 },
  FH = { x: new WeakMap(), y: new WeakMap() };
