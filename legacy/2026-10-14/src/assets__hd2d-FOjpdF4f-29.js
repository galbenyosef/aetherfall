// assets__hd2d-FOjpdF4f 29 — math
// Lines 9133-9407 of readable/assets__hd2d-FOjpdF4f.pretty.js (statement-aligned).
function qc(e) {
  let t = Wc,
    n = Gc,
    r = Q / 8,
    i = Uc / 8,
    a = Math.ceil(i * 3),
    o = [],
    s = 0;
  for (let e = -8; e <= a; e++)
    s += o[e + a] = Math.exp(-(e * e) / (2 * i * i));
  for (let e = 0; e < o.length; e++) o[e] /= s;
  let c = new Float32Array(t * n),
    l = new Float32Array(t * n);
  for (let i = 0; i < n; i++) {
    let n = Math.floor(i / r) * y;
    for (let a = 0; a < t; a++)
      c[i * t + a] = +(e[n + Math.floor(a / r)] === Nc.lava);
  }
  for (let e = 0; e < n; e++) {
    let n = e * t;
    for (let e = 0; e < t; e++) {
      let r = 0;
      for (let i = Math.max(-8, -e), s = Math.min(a, t - 1 - e); i <= s; i++)
        r += c[n + e + i] * o[i + a];
      l[n + e] = r;
    }
  }
  let u = new Uint8Array(t * n);
  for (let e = 0; e < t; e++)
    for (let r = 0; r < n; r++) {
      let i = 0;
      for (let s = Math.max(-8, -r), c = Math.min(a, n - 1 - r); s <= c; s++)
        i += l[(r + s) * t + e] * o[s + a];
      u[r * t + e] = Math.min(255, Math.round(i * 255));
    }
  return u;
}
function Jc(t, n = 4) {
  let r = [];
  for (let i = 0; i < c; i += n)
    for (let a = 0; a < y; a += n) {
      let o = [],
        l = 0,
        u = 0,
        d = 0,
        f = -1,
        p = 0,
        m = 0,
        h = 0;
      for (let r = i; r < Math.min(c, i + n); r++)
        for (let i = a; i < Math.min(y, a + n); i++)
          t[r * y + i] === s.Lava &&
            (o.push(r * y + i),
            (l += i * Q + 8),
            (u += r * Q + 8),
            Yc(t, i, r) && (p++, (m += i * Q + 8), (h += r * Q + 8)),
            (i + r) % 2 == 0 && (d++, f < 0 && (f = e(i, r, 8) * 6.28)));
      if (!o.length) continue;
      let g = l / o.length,
        _ = u / o.length;
      r.push({
        x: g,
        y: _,
        r: d ? Math.min(Ic, Fc * Math.sqrt(d)) : 0,
        lit: d,
        lx: p ? m / p : g,
        ly: p ? h / p : _,
        ph: Math.max(0, f),
        tiles: o,
      });
    }
  return r;
}
function Yc(e, t, n) {
  return (
    (t > 0 && e[n * y + t - 1] !== s.Lava) ||
    (t < y - 1 && e[n * y + t + 1] !== s.Lava) ||
    (n > 0 && e[(n - 1) * y + t] !== s.Lava) ||
    (n < c - 1 && e[(n + 1) * y + t] !== s.Lava)
  );
}
function Xc(e, t, n, r) {
  if (!Number.isFinite(t) || !Number.isFinite(n)) return !1;
  let i = Math.max(0, Math.floor((t - 128) / Q)),
    a = Math.max(0, Math.floor((n - 128) / Q)),
    o = Math.min(y - 1, Math.floor((t + 128) / Q)),
    s = Math.min(c - 1, Math.floor((n + 128) / Q)),
    l = 0,
    u = 0,
    d = 0,
    f = 128;
  for (let r = a; r <= s; r++)
    for (let a = i; a <= o; a++) {
      if (e[r * y + a] !== Nc.lava) continue;
      let i = Math.min(a * Q + Q, Math.max(a * Q, t)),
        o = Math.min(r * Q + Q, Math.max(r * Q, n)),
        s = Math.hypot(i - t, o - n);
      if (s >= 128) continue;
      let c = (1 - s / 128) ** 2;
      ((l += c),
        s > 0.001 && ((u += (c * (i - t)) / s), (d += (c * (o - n)) / s)),
        (f = Math.min(f, s)));
    }
  if (!(l > 0)) return !1;
  let p = 1 - f / 128,
    m = Math.hypot(u, d),
    h = m > 1e-6 ? Math.min(f, Bc) / m : 0;
  return (
    (r.x = t + u * h),
    (r.y = n + d * h),
    (r.z = Hc),
    (r.r = Vc),
    (r.a = p * p * (3 - 2 * p)),
    !0
  );
}
function Zc(e) {
  return e > 0 ? Math.min(Rc, Lc * Math.sqrt(e)) : 0;
}
function Qc(e, t) {
  return 0.8 + 0.2 * Math.sin(e * 0.9 + t);
}
function $c(e, t, n, r) {
  let i = new Oe(e, t, n, Ie, Se);
  return (
    (i.magFilter = r),
    (i.minFilter = r),
    (i.wrapS = i.wrapT = ze),
    (i.generateMipmaps = !1),
    (i.unpackAlignment = 1),
    (i.needsUpdate = !0),
    i
  );
}
var el = class {
    kinds;
    clusters;
    lightClusters;
    heat;
    tex;
    heatTex;
    pool = [];
    last = [];
    constructor(e = x().tiles) {
      ((this.kinds = Kc(e)),
        (this.clusters = Jc(e)),
        (this.lightClusters = Jc(e, 8)),
        (this.heat = qc(this.kinds)),
        (this.tex = $c(this.kinds, y, c, R)),
        (this.heatTex = $c(this.heat, Wc, Gc, M)));
    }
    lights(e, t, n = [], r) {
      if (((n.length = 0), (this.last = n), r)) {
        let e = (this.pool[0] ??= { x: 0, y: 0, z: Hc, r: 0, color: Pc, a: 0 });
        Xc(this.kinds, r.x, r.y, e) && ((e.a *= Qc(t, 1.7)), n.push(e));
      }
      for (let i of this.lightClusters) {
        let a = Zc(i.lit);
        if (
          !a ||
          i.lx + a < e.gx0 ||
          i.lx - a > e.gx0 + e.fw ||
          i.ly + a < e.gy0 ||
          i.ly - a > e.gy0 + e.fh
        )
          continue;
        let o = (this.pool[n.length + +!!r] ??= {
          x: 0,
          y: 0,
          z: zc,
          r: 0,
          color: Pc,
          a: 0,
        });
        ((o.x = i.lx),
          (o.y = i.ly),
          (o.z = zc),
          (o.r = a),
          (o.color = Pc),
          (o.a = Qc(t, i.ph)),
          n.push(o));
      }
      return n;
    }
    embers(e, t) {
      for (let n of this.clusters)
        if (!(
          n.x + 64 < e.gx0 ||
          n.x - 64 > e.gx0 + e.fw ||
          n.y + 64 < e.gy0 ||
          n.y - 64 > e.gy0 + e.fh
        ))
          for (let e of n.tiles) {
            if (Math.random() >= 0.004) continue;
            let n = e % y,
              r = (e - n) / y;
            t.spawn({
              x: n * Q + Math.random() * 16,
              y: r * Q + Math.random() * 16,
              vz: 30,
              gravity: 40,
              life: 0.8,
              size: 1,
              color: `#ffd166`,
              glow: !0,
            });
          }
    }
    rebuild() {
      (this.tex.dispose(),
        this.heatTex.dispose(),
        (this.tex = $c(this.kinds, y, c, R)),
        (this.heatTex = $c(this.heat, Wc, Gc, M)));
    }
    dispose() {
      (this.tex.dispose(), this.heatTex.dispose());
    }
  },
  $ = Math.ceil(y / 32),
  tl = Math.ceil(c / 32),
  nl = 6,
  rl = 384,
  il = `
vec3 hdFog(vec3 lit, vec3 emissive, vec3 P) { return lit + emissive; }
`,
  al = class {
    cap;
    last = new Map();
    constructor(e) {
      this.cap = e;
    }
    get size() {
      return this.last.size;
    }
    has(e) {
      return this.last.has(e);
    }
    out = { load: [], evict: [] };
    keep = new Set();
    plan(e, t, n) {
      let { load: r, evict: i } = this.out;
      ((r.length = 0), (i.length = 0));
      let a = this.keep;
      a.clear();
      for (let t of e) a.add(t);
      for (let t of e) (this.last.has(t) || r.push(t), this.last.set(t, n));
      if (e.length < this.cap) {
        for (let e of t)
          if (!this.last.has(e)) {
            (r.push(e), this.last.set(e, n), a.add(e));
            break;
          }
      }
      for (; this.last.size > this.cap;) {
        let e = -1,
          t = 1 / 0;
        for (let [n, r] of this.last) !a.has(n) && r < t && ((t = r), (e = n));
        if (e < 0) break;
        (this.last.delete(e), i.push(e));
      }
      return this.out;
    }
    clear() {
      this.last.clear();
    }
  };
function ol(e, t, n, r, i = []) {
  i.length = 0;
  let a = Math.max(0, Math.floor(e / 512)),
    o = Math.max(0, Math.floor(t / 512)),
    s = Math.min($ - 1, Math.floor((e + n - 1) / 512)),
    c = Math.min(tl - 1, Math.floor((t + r - 1) / 512));
  for (let e = o; e <= c; e++) for (let t = a; t <= s; t++) i.push(e * $ + t);
  return i;
}
