// assets__index-BTsv3a2s 182 — math
// Lines 105800-106164 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var JW = class {
    list = [];
    spawn(e) {
      this.list.length > 2500 && this.list.shift();
      let t = e.life ?? 0.6;
      this.list.push({
        x: e.x,
        y: e.y,
        z: e.z ?? 0,
        vx: e.vx ?? 0,
        vy: e.vy ?? 0,
        vz: e.vz ?? 0,
        gravity: e.gravity ?? 0,
        drag: e.drag ?? 0,
        life: t,
        maxLife: t,
        size: e.size ?? 1,
        color: e.color ?? `#ffffff`,
        glow: e.glow ?? !1,
        shrink: e.shrink ?? !0,
      });
    }
    burst(e, t, n, r, i, a = {}) {
      for (let o = 0; o < n; o++) {
        let n = Math.random() * Math.PI * 2,
          o = i * (0.3 + Math.random() * 0.7);
        this.spawn({
          life: 0.4 + Math.random() * 0.5,
          size: 1 + Math.floor(Math.random() * 2),
          drag: 3,
          glow: !0,
          ...a,
          x: e,
          y: t,
          vx: Math.cos(n) * o,
          vy: Math.sin(n) * o * KW.cos,
          color: r[Math.floor(Math.random() * r.length)],
        });
      }
    }
    ring(e, t, n, r, i, a, o = {}) {
      for (let s = 0; s < r; s++) {
        let c = (s / r) * Math.PI * 2 + Math.random() * 0.2;
        this.spawn({
          life: 0.5,
          size: 2,
          drag: 2,
          glow: !0,
          ...o,
          x: e + Math.cos(c) * n,
          y: t + Math.sin(c) * n * KW.cos,
          vx: Math.cos(c) * a,
          vy: Math.sin(c) * a * KW.cos,
          color: i[s % i.length],
        });
      }
    }
    update(e) {
      let t = this.list,
        n = 0;
      for (let r = 0; r < t.length; r++) {
        let i = t[r];
        if (((i.life -= e), i.life <= 0)) continue;
        let a = Math.max(0, 1 - i.drag * e);
        ((i.vx *= a),
          (i.vy *= a),
          (i.vz = i.vz * a - i.gravity * e),
          (i.x += i.vx * e),
          (i.y += i.vy * e),
          (i.z += i.vz * e),
          i.z < 0 &&
            i.gravity > 0 &&
            ((i.z = 0), (i.vz *= -0.3), (i.vx *= 0.6), (i.vy *= 0.6)),
          (t[n++] = i));
      }
      t.length = n;
    }
    draw(e, t, n, r) {
      for (let i of this.list) {
        if (i.glow !== r) continue;
        let a = i.life / i.maxLife,
          o = i.shrink
            ? Math.max(1, Math.round(i.size * (0.4 + 0.6 * a)))
            : i.size,
          s = Math.round(i.x - t - o / 2),
          c = Math.round(i.y - i.z - n - o / 2);
        if (
          ((e.globalAlpha = Math.min(1, a * 2)),
          (e.fillStyle = i.color),
          e.fillRect(s, c, o, o),
          r && o >= 2)
        ) {
          let t = Bp(i.color, o * 3);
          ((e.globalAlpha = a * 0.35),
            e.drawImage(t, s + o / 2 - t.width / 2, c + o / 2 - t.height / 2));
        }
      }
      e.globalAlpha = 1;
    }
  },
  YW = class {
    canvas;
    ctx;
    low;
    lctx;
    W = 320;
    H = 180;
    scale = 4;
    t = 0;
    school = `void`;
    particles = new JW();
    layers = [];
    stars = [];
    raf = 0;
    last = 0;
    onResize = () => this.resize();
    constructor(e) {
      ((this.canvas = e),
        (this.ctx = e.getContext(`2d`)),
        ([this.low, this.lctx] = M(this.W, this.H)),
        window.addEventListener(`resize`, this.onResize),
        this.resize());
    }
    resize() {
      let e = window.innerWidth,
        t = window.innerHeight;
      e < 1 ||
        t < 1 ||
        ((this.scale = Math.max(2, Math.ceil(t / 200))),
        (this.W = Math.ceil(e / this.scale)),
        (this.H = Math.ceil(t / this.scale)),
        (this.low.width = this.W),
        (this.low.height = this.H),
        (this.canvas.width = this.W * this.scale),
        (this.canvas.height = this.H * this.scale),
        (this.canvas.style.width = `${this.W * this.scale}px`),
        (this.canvas.style.height = `${this.H * this.scale}px`),
        this.buildLayers(),
        (this.stars = Array.from(
          { length: Math.floor((this.W * this.H) / 140) },
          () => ({
            x: Math.random() * this.W,
            y: Math.random() * this.H * 0.7,
            p: Math.random() * 6.28,
            b: Math.random(),
          }),
        )));
    }
    buildLayers() {
      let { W: e, H: t } = this,
        n = (n, r, i, a, o, s = !1) => {
          let [c, l] = M(e * 2, t);
          l.fillStyle = o;
          for (let o = 0; o < e * 2; o++) {
            let e = Xe(o * i, 0.5, a) * 0.7 + Xe(o * i * 3, 1.5, a + 1) * 0.3,
              s = Math.round(t * n - e * t * r);
            l.fillRect(o, s, 1, t - s);
          }
          if (s)
            for (let [i, a] of [
              [e * 0.3, 0.3],
              [e * 0.36, 0.22],
              [e * 1.3, 0.28],
              [e * 1.72, 0.2],
            ]) {
              let e = t * n - t * r * 0.3 - t * a;
              (l.fillRect(Math.round(i) - 4, Math.round(e), 9, t),
                l.fillRect(Math.round(i) - 6, Math.round(e) + 6, 13, 3));
              for (let t = 0; t < 6; t++)
                l.fillRect(
                  Math.round(i) - 3 + t,
                  Math.round(e) - 6 + Math.abs(3 - t) * 2,
                  1,
                  8,
                );
              ((l.fillStyle = `#ffd98a`),
                l.fillRect(Math.round(i) - 1, Math.round(e) + 14, 2, 3),
                l.fillRect(Math.round(i) + 1, Math.round(e) + 26, 2, 3),
                (l.fillStyle = o));
            }
          return c;
        };
      this.layers = [
        n(0.62, 0.28, 0.012, 10, `#2a1a4a`),
        n(0.72, 0.22, 0.02, 20, `#1c1036`, !0),
        n(0.84, 0.16, 0.035, 30, `#110a24`),
      ];
    }
    start() {
      this.last = performance.now();
      let e = (t) => {
        let n = Math.max(0, Math.min(0.05, (t - this.last) / 1e3));
        ((this.last = t),
          (this.t += n),
          this.update(n),
          this.draw(),
          (this.raf = requestAnimationFrame(e)));
      };
      this.raf = requestAnimationFrame(e);
    }
    dispose() {
      (cancelAnimationFrame(this.raf),
        window.removeEventListener(`resize`, this.onResize));
    }
    update(e) {
      let t = S[this.school].colors,
        { W: n, H: r } = this;
      if (
        (Math.random() < e * 40 &&
          this.particles.spawn({
            x: Math.random() * n,
            y: r + 2,
            vx: (Math.random() - 0.5) * 6,
            vy: -10 - Math.random() * 16,
            life: 9,
            size: Math.random() < 0.2 ? 2 : 1,
            color: Math.random() < 0.5 ? t.glow : `#8ef6ff`,
            glow: !0,
            shrink: !1,
          }),
        Math.random() < e * 10)
      ) {
        let e = n * (0.25 + Math.random() * 0.5);
        this.particles.spawn({
          x: e,
          y: this.riftY(e),
          vx: (Math.random() - 0.5) * 10,
          vy: 8 + Math.random() * 10,
          life: 4,
          size: 1,
          color: `#f0b3ff`,
          glow: !0,
        });
      }
      let i = Math.round(n * 0.5),
        a = Math.round(r * 0.84);
      (Math.random() < e * 20 &&
        this.particles.spawn({
          x: i - 8 + (Math.random() - 0.5) * 3,
          y: a - 30,
          vx: (Math.random() - 0.5) * 8,
          vy: -12 - Math.random() * 10,
          life: 1.4,
          size: 1,
          color: t.spark,
          glow: !0,
        }),
        this.particles.update(e));
    }
    riftY(e) {
      let { W: t, H: n } = this;
      return (
        n * 0.18 +
        Math.sin(e * 0.05) * 6 +
        (Xe(e * 0.08, 3, 5) - 0.5) * 16 +
        ((e - t / 2) / t) * 20
      );
    }
    draw() {
      let { W: e, H: t, lctx: n } = this,
        r = S[this.school].colors,
        i = n.createLinearGradient(0, 0, 0, t);
      (i.addColorStop(0, `#07031a`),
        i.addColorStop(0.45, `#1d0f3f`),
        i.addColorStop(0.75, `#5a1f5e`),
        i.addColorStop(1, `#b04a55`),
        (n.fillStyle = i),
        n.fillRect(0, 0, e, t));
      for (let e of this.stars)
        ((n.globalAlpha =
          0.4 + 0.6 * Math.abs(Math.sin(this.t * (0.6 + e.b) + e.p))),
          (n.fillStyle = e.b > 0.9 ? `#ffe9b0` : `#ffffff`),
          n.fillRect(Math.round(e.x), Math.round(e.y), 1, 1));
      n.globalAlpha = 1;
      let a = Math.round(e * 0.78),
        o = Math.round(t * 0.28),
        s = Bp(`#ffd9f2`, 60);
      ((n.globalCompositeOperation = `lighter`),
        (n.globalAlpha = 0.35),
        n.drawImage(s, a - 60, o - 60),
        (n.globalAlpha = 1),
        (n.globalCompositeOperation = `source-over`),
        (n.fillStyle = `#f7e7ff`));
      for (let e = -14; e <= 14; e++)
        for (let t = -14; t <= 14; t++)
          t * t + e * e <= 196 && n.fillRect(a + t, o + e, 1, 1);
      n.fillStyle = `#d9c4ec`;
      for (let [e, t, r] of [
        [-5, -3, 3],
        [4, 5, 2],
        [6, -6, 2],
        [-2, 7, 1.5],
      ])
        for (let i = -3; i <= 3; i++)
          for (let s = -3; s <= 3; s++)
            s * s + i * i <= r * r && n.fillRect(a + e + s, o + t + i, 1, 1);
      n.globalCompositeOperation = `lighter`;
      for (let t = Math.floor(e * 0.1); t < e * 0.9; t++) {
        let e = this.riftY(t),
          r = 0.6 + 0.4 * Math.sin(this.t * 2 + t * 0.1);
        ((n.fillStyle = `rgba(208,107,255,${0.35 * r})`),
          n.fillRect(t, Math.round(e) - 2, 1, 5),
          (n.fillStyle = `rgba(255,220,255,${0.9 * r})`),
          n.fillRect(t, Math.round(e), 1, 1));
      }
      ((n.globalCompositeOperation = `source-over`),
        this.layers.forEach((t, r) => {
          let i = [2, 5, 10][r],
            a = Math.floor((this.t * i) % e);
          (n.drawImage(t, -a, 0), n.drawImage(t, e * 2 - a, 0));
        }),
        (n.globalCompositeOperation = `lighter`));
      let c = Bp(`#8a5cc8`, 80);
      for (let r = 0; r < 5; r++) {
        let i = ((this.t * (4 + r * 2) + r * 140) % (e + 200)) - 100;
        ((n.globalAlpha = 0.08),
          n.drawImage(c, i - 80, t * (0.7 + r * 0.04) - 30, 220, 60));
      }
      ((n.globalAlpha = 1),
        (n.globalCompositeOperation = `source-over`),
        (n.fillStyle = `#07040f`));
      let l = e * 0.5;
      for (let r = 0; r < e; r++) {
        let i = Math.abs(r - l) / (e * 0.5),
          a = Math.round(
            t * 0.84 + i * i * t * 0.12 + (Xe(r * 0.2, 9, 2) - 0.5) * 3,
          );
        n.fillRect(r, a, 1, t - a);
      }
      let u = dh(this.school).frames[1][Math.floor(this.t * 1.5) % 2],
        d = ZW(u),
        f = Math.round(l - 10),
        p = Math.round(t * 0.84 - 26);
      n.drawImage(d, f, p);
      let m = f + 4,
        h = p + 6;
      n.globalCompositeOperation = `lighter`;
      let g = Bp(r.glow, 26);
      ((n.globalAlpha = 0.7 + Math.sin(this.t * 3) * 0.2),
        n.drawImage(g, m - 26, h - 26),
        (n.globalAlpha = 1),
        (n.fillStyle = r.orb),
        n.fillRect(m - 1, h - 1, 3, 3),
        (n.fillStyle = `#fff`),
        n.fillRect(m, h, 1, 1),
        this.particles.draw(n, 0, 0, !0),
        (n.globalCompositeOperation = `source-over`),
        this.particles.draw(n, 0, 0, !1));
      let _ = n.createRadialGradient(
        e / 2,
        t / 2,
        t * 0.3,
        e / 2,
        t / 2,
        e * 0.75,
      );
      (_.addColorStop(0, `rgba(0,0,0,0)`),
        _.addColorStop(1, `rgba(0,0,0,0.7)`),
        (n.fillStyle = _),
        n.fillRect(0, 0, e, t),
        (this.ctx.imageSmoothingEnabled = !1),
        this.ctx.drawImage(this.low, 0, 0, e * this.scale, t * this.scale));
    }
  },
  XW = new WeakMap();
