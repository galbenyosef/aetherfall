// hd2d-FOjpdF4f 19 — math
// Lines 5789-6056 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
var Xa = (e, t, n) => {
    let r = t * 3;
    return (e * r * r) / (r * r + n);
  },
  Za = class {
    uniforms;
    stats = { points: 0, lines: 0, candidates: 0, hero: !1 };
    pts = [];
    lns = [];
    np = 0;
    nl = 0;
    order = [];
    heroL = null;
    torch = null;
    fade = 0;
    skip = { x: 0, y: 0, r: 0 };
    constructor(e = createHd2dUniforms()) {
      this.uniforms = e;
    }
    sky(e, t = 1) {
      ((this.uniforms.uDark.value = Math.min(1, Math.max(0, e))),
        (this.uniforms.uFxAmb.value = t));
    }
    hero() {
      return this.heroL;
    }
    resetHero() {
      ((this.torch = null), (this.fade = 0));
    }
    heroFade() {
      return this.heroL ? this.fade : 0;
    }
    heroSkip() {
      return this.skip;
    }
    build(e, t, n, r, i, a, o = i, s = !0, c = 0, l = []) {
      let u = this.uniforms,
        d = u.uDark.value,
        f = Aa[a];
      ((this.np = 0), (this.nl = 0));
      let p = -1,
        m = s === `torch`,
        h = m && a === `high` ? this.pickTorch(e, t, o, c) : -1;
      if (
        ((!m || h < 0) &&
          ((this.torch = null), (this.fade = +!m), (this.skip.r = 0)),
        a === `high` && s === !0)
      ) {
        let e = ja;
        for (let t = 0; t < n.pts.length; t++) {
          let r = n.pts[t],
            i = r.x - o.x,
            a = r.y - o.y;
          r.I > e &&
            i * i + a * a <= 25600 &&
            r.rad > 0 &&
            ((e = r.I), (p = t));
        }
      }
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (!(r.r > 0) || n === h) continue;
        let a = r.z ?? 12,
          [o, s, c] = Ga(r.color);
        this.point(
          r.x + t.gx0,
          r.y + t.gy0 + a,
          a,
          r.r * Fa,
          o,
          s,
          c,
          Ka(r.a, d),
          t,
          i,
        );
      }
      for (let e of l) {
        if (!(e.r > 0)) continue;
        let [n, r, a] = Ga(e.color);
        this.point(e.x, e.y, e.z, e.r * Fa, n, r, a, Ka(e.a, d), t, i);
      }
      for (let e of r) {
        if (!(e.r > 0)) continue;
        let [n, r, a] = Ga(e.color);
        this.point(e.x, e.y, e.z, e.r * Ia, n, r, a, Ka(e.a, d, 1.1), t, i);
      }
      let g = Va(d);
      for (let e = 0; e < n.pts.length; e++) {
        if (e === p) continue;
        let r = n.pts[e];
        r.rad > 0 &&
          this.point(r.x, r.y, r.z, r.rad * Ra, r.r, r.g, r.b, r.I * g, t, i);
      }
      let _ = Va(d, !0);
      for (let e of n.lines) e.rad > 0 && this.line(e, _, t, i);
      let v = u.uPt.value,
        y = 0;
      if (p >= 0) {
        let e = n.pts[p];
        (v[0].set(e.x, e.y, e.z, e.rad * Ra),
          v[1].set(e.r, e.g, e.b, e.I * g),
          (this.heroL = { x: e.x, y: e.y, z: e.z, rad: e.rad * Ra }),
          (y = 1));
      } else if (h >= 0) {
        let n = e[h],
          r = n.z ?? 12,
          [i, a, o] = Ga(n.color),
          s = n.x + t.gx0,
          c = n.y + t.gy0 + r;
        (v[0].set(s, c, r, n.r * Fa),
          v[1].set(i, a, o, Ka(n.a, d)),
          (this.heroL = { x: s, y: c + 6, z: r, rad: n.r * Fa }),
          (y = 1));
      } else this.heroL = null;
      let b = Math.min(f.points, 32) - y;
      this.rank(this.pts, this.np, b);
      let x = Math.min(b, this.np),
        S = this.np > b ? this.pts[this.order[b]].s : 0;
      for (let e = 0; e < x; e++) {
        let t = this.pts[this.order[e]],
          n = Qa(t.s, S);
        n <= 0 ||
          (v[y * 2].set(t.x, t.y, t.z, t.rad),
          v[y * 2 + 1].set(t.r, t.g, t.b, t.I * n),
          y++);
      }
      u.uPtN.value = y;
      let C = u.uLn.value,
        w = Math.min(f.lines, 16);
      this.rank(this.lns, this.nl, w);
      let T = this.nl > w ? this.lns[this.order[w]].s : 0,
        E = 0;
      for (let e = 0; e < Math.min(w, this.nl); e++) {
        let t = this.lns[this.order[e]],
          n = Qa(t.s, T);
        n <= 0 ||
          (C[E * 3].set(t.ax, t.ay, t.az, t.rad),
          C[E * 3 + 1].set(t.bx, t.by, t.bz, 0),
          C[E * 3 + 2].set(t.r, t.g, t.b, t.I * n),
          E++);
      }
      ((u.uLnN.value = E),
        (this.stats.points = y),
        (this.stats.lines = E),
        (this.stats.candidates = this.np + this.nl + +(p >= 0 || h >= 0)),
        (this.stats.hero = p >= 0 || h >= 0));
    }
    pickTorch(e, t, n, r) {
      let i = this.torch,
        a = -1,
        o = 0,
        s = -1,
        c = 0;
      for (let r = 0; r < e.length; r++) {
        let l = e[r],
          u = l.z ?? 12;
        if (!l.cast || !(l.r > 0) || u < Ma) continue;
        let d = l.x + t.gx0,
          f = l.y + t.gy0 + u,
          p = d - n.x,
          m = f + 6 - n.y,
          h = p * p + m * m;
        if (h > 25600) continue;
        let g = Xa(1, l.r * Fa, h + u * u);
        (g > o && ((o = g), (a = r)),
          i &&
            Math.abs(d - i.x) < 1 &&
            Math.abs(f - i.y) < 1 &&
            ((s = r), (c = g)));
      }
      let l = s >= 0 && (a === s || o < c * Na) ? s : a,
        u = Math.max(0, Math.min(0.1, r)) / Pa,
        d = s;
      if (
        (s >= 0 && l === s
          ? (this.fade = Math.min(1, this.fade + u))
          : s >= 0 && this.fade > u
            ? (this.fade -= u)
            : ((d = l), (this.fade = 0)),
        d < 0)
      )
        return -1;
      let f = e[d],
        p = f.z ?? 12;
      return (
        (this.torch = { x: f.x + t.gx0, y: f.y + t.gy0 + p }),
        (this.skip.x = this.torch.x),
        (this.skip.y = this.torch.y),
        (this.skip.r = 6),
        d
      );
    }
    point(e, t, n, r, i, a, o, s, c, l) {
      if (!(s > 0) || !(r > 0)) return;
      let u = r * Ha;
      if (Ja(c, e, t) > u * u) return;
      let d = Math.max(i, a, o);
      if (!(d > 0)) return;
      let f = e - l.x,
        p = t - l.y,
        m = this.pts[this.np];
      ((m ||= this.pts[this.np] =
        { x: 0, y: 0, z: 0, rad: 0, r: 0, g: 0, b: 0, I: 0, s: 0 }),
        (m.x = e),
        (m.y = t),
        (m.z = n),
        (m.rad = r),
        (m.r = i),
        (m.g = a),
        (m.b = o),
        (m.I = s),
        (m.s = Xa(s * d, r, f * f + p * p + n * n)),
        this.np++);
    }
    line(e, t, n, r) {
      if (!(e.I > 0)) return;
      let i = e.rad * Ba,
        a = e.I * t,
        o = i * Ha,
        s = Math.min(e.a[0], e.b[0]) - o,
        c = Math.max(e.a[0], e.b[0]) + o,
        l = Math.min(e.a[1], e.b[1]) - o,
        u = Math.max(e.a[1], e.b[1]) + o;
      if (c < n.gx0 || s > n.gx0 + n.fw || u < n.gy0 || l > n.gy0 + n.fh)
        return;
      let d = Math.max(e.r, e.g, e.b2);
      if (!(d > 0)) return;
      let f = this.lns[this.nl];
      ((f ||= this.lns[this.nl] =
        {
          ax: 0,
          ay: 0,
          az: 0,
          bx: 0,
          by: 0,
          bz: 0,
          rad: 0,
          r: 0,
          g: 0,
          b: 0,
          I: 0,
          s: 0,
        }),
        (f.ax = e.a[0]),
        (f.ay = e.a[1]),
        (f.az = e.a[2]),
        (f.bx = e.b[0]),
        (f.by = e.b[1]),
        (f.bz = e.b[2]),
        (f.rad = i),
        (f.r = e.r),
        (f.g = e.g),
        (f.b = e.b2),
        (f.I = a),
        (f.s = Xa(a * d, i, Ya(r.x, r.y, 0, f))),
        this.nl++);
    }
    rank(e, t, n) {
      let r = this.order;
      r.length = t;
      for (let e = 0; e < t; e++) r[e] = e;
      t > 1 && n > 0 && r.sort((t, n) => e[n].s - e[t].s || t - n);
    }
  };
function Qa(e, t) {
  return t > 0 ? Math.min(1, Math.max(0, (e - t) / (Ua * t))) : 1;
}
