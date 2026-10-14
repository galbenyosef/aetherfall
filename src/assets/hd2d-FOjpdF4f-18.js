// hd2d-FOjpdF4f 18 — math
// Lines 5485-5788 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
var ka = class {
    host;
    root = new F();
    cx = _ * 16;
    cy = _e * 16;
    R = n * 16;
    n = Math.floor((Math.PI * 2 * n * 16) / 2);
    u;
    cols;
    colBuf = new Float32Array();
    colAttr;
    cracks;
    crackCap = 0;
    crackPos = new Float32Array();
    crackCol = new Float32Array();
    crackPosAttr;
    crackColAttr;
    first = !0;
    constructor(e, t) {
      ((this.host = e),
        (this.u = {
          ...t,
          uRing: { value: new V(this.cx, this.cy, this.R) },
          uStep: { value: (Math.PI * 2) / this.n },
          uBack: { value: new V(0, Math.cos(0.61), Math.sin(0.61)) },
          uFoot: { value: Sa },
        }),
        (this.root.matrixAutoUpdate = !1),
        this.build());
    }
    build() {
      let e = new Le();
      (e.setAttribute(
        `position`,
        new U(new Float32Array([0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0]), 3),
      ),
        e.setIndex([0, 1, 2, 0, 2, 3]),
        (this.colBuf = new Float32Array(this.n * 4)),
        (this.colAttr = new we(this.colBuf, 4).setUsage(G)),
        e.setAttribute(`aI`, this.colAttr),
        (e.instanceCount = 0),
        (this.cols = new I(e, Da(Ca, wa, this.u))),
        (this.cols.frustumCulled = !1),
        (this.cols.matrixAutoUpdate = !1),
        (this.cols.renderOrder = xa));
      let t = new L();
      ((this.cracks = new I(t, Da(Ta, Ea, this.u))),
        (this.cracks.frustumCulled = !1),
        (this.cracks.matrixAutoUpdate = !1),
        (this.cracks.renderOrder = xa),
        (this.crackCap = 0),
        this.growCracks(64),
        this.root.add(this.cols, this.cracks),
        (this.cols.visible = this.cracks.visible = this.first));
    }
    growCracks(e) {
      ((this.crackCap = e),
        (this.crackPos = new Float32Array(e * 4 * 3)),
        (this.crackCol = new Float32Array(e * 4 * 4)));
      let t = new Uint32Array(e * 6);
      for (let n = 0; n < e; n++)
        t.set(
          [n * 4, n * 4 + 1, n * 4 + 2, n * 4, n * 4 + 2, n * 4 + 3],
          n * 6,
        );
      let n = this.cracks.geometry;
      (n.dispose(),
        (this.crackPosAttr = new U(this.crackPos, 3).setUsage(G)),
        (this.crackColAttr = new U(this.crackCol, 4).setUsage(G)),
        n.setAttribute(`position`, this.crackPosAttr),
        n.setAttribute(`aC`, this.crackColAttr),
        n.setIndex(new U(t, 1)));
    }
    update(e) {
      ((this.first = !1), this.u.uBack.value.copy(e.cam.back));
      let { gx0: t, gy0: n, fw: r, fh: i } = e.f.fp,
        { cx: a, cy: o, R: s } = this,
        c = Math.min(Math.max(a, t), t + r),
        l = Math.min(Math.max(o, n), n + i),
        u = Math.max(
          Math.hypot(t - a, n - o),
          Math.hypot(t + r - a, n - o),
          Math.hypot(t - a, n + i - o),
          Math.hypot(t + r - a, n + i - o),
        ),
        d = !(Math.hypot(c - a, l - o) > s + 70 || u < s - 4);
      ((this.cols.visible = d && this.columns(t, n, r, i) > 0),
        (this.cracks.visible = d && this.crackLines(t, n, r, i) > 0));
    }
    columns(e, t, r, i) {
      let a = this.host.dome,
        o = this.host.time,
        { n: s, cx: c, cy: l, R: u } = this,
        d = this.colBuf,
        f = 0;
      for (let p = 0; p < s; p++) {
        let m = (p / s) * Math.PI * 2,
          h = c + Math.cos(m) * u - e,
          g = l + Math.sin(m) * u - t;
        if (h < -4 || h > r + 4 || g < -4 || g > i + 80) continue;
        let _ = 0;
        for (let e of a.hits) {
          let t = o - e.t0,
            r = Oa(m, e.a),
            i = Math.abs(r) * n;
          _ +=
            e.p *
            Math.max(0, 1 - t / 1.6) *
            (Math.exp(-r * r * 900) +
              0.7 * Math.exp(-((i - t * 9) ** 2) * 0.6));
        }
        a.breach > 0.05 &&
          (_ +=
            a.breach *
            Math.exp(-(Oa(m, 0) ** 2) * 600) *
            (0.6 + 0.4 * Math.sin(o * 13)));
        let v =
            0.55 +
            0.25 * Math.sin(m * 60 + o * 2.2) +
            0.2 * Math.sin(m * 13 - o * 1.3),
          y = p % 14 == 0 ? 1.7 : 1,
          b = Math.min(Math.max(a.power * v * y * 0.5 + _ * 0.8, 0), 1);
        if (b <= 0) continue;
        let x = f++ * 4;
        ((d[x] = m),
          (d[x + 1] = b),
          (d[x + 2] = Math.round(
            28 + 8 * Math.sin(m * 7 + o) + Math.min(40, _ * 22),
          )),
          (d[x + 3] = +(_ > 0.4)));
      }
      let p = this.cols.geometry;
      return (
        (p.instanceCount = f),
        f &&
          (this.colAttr.clearUpdateRanges(),
          this.colAttr.addUpdateRange(0, f * 4),
          (this.colAttr.needsUpdate = !0)),
        f
      );
    }
    crackLines(e, t, n, r) {
      let i = this.host.dome,
        a = this.host.time,
        { cx: o, cy: s, R: c } = this,
        l = 0;
      for (let u of i.cracks) {
        let i = o + Math.cos(u.a) * c,
          d = s + Math.sin(u.a) * c;
        if (i - e < -60 || i - e > n + 60 || d - t < -60 || d - t > r + 80)
          continue;
        let f = Math.sin(u.a),
          p = -Math.cos(u.a),
          m = 0.65 + 0.35 * Math.sin(a * 11 + u.seed),
          h = u.seed,
          g = () => ((h = (h * 16807) % 2147483647), (h % 1e3) / 1e3),
          _ = (e, t, n, r, a) => {
            (l >= this.crackCap && this.growCrackKeep(),
              this.crackSeg(l++, i, d, f, p, e, t, n, r, _a(a), m));
          },
          v = 0,
          y = 0;
        for (let e = 0; e < 7; e++) {
          let t = v + (g() - 0.5) * 12,
            n = y + u.len / 7;
          (_(v, y, t, n, e % 2 ? `#ff9cf5` : `#ffffff`),
            g() < 0.4 && _(t, n, t + (g() - 0.5) * 14, n - g() * 6, `#b84dff`),
            (v = t),
            (y = n));
        }
      }
      if ((this.cracks.geometry.setDrawRange(0, l * 6), l))
        for (let [e, t] of [
          [this.crackPosAttr, 12],
          [this.crackColAttr, 16],
        ])
          (e.clearUpdateRanges(),
            e.addUpdateRange(0, l * t),
            (e.needsUpdate = !0));
      return l;
    }
    growCrackKeep() {
      let e = this.crackPos,
        t = this.crackCol;
      (this.growCracks(this.crackCap * 2),
        this.crackPos.set(e),
        this.crackCol.set(t));
    }
    crackSeg(e, t, n, r, i, a, o, s, c, l, u) {
      let d = s - a,
        f = c - o,
        p = Math.hypot(d, f) || 1,
        m = (-f / p) * 0.5,
        h = (d / p) * 0.5,
        g = (d / p) * 0.5,
        _ = (f / p) * 0.5,
        v = [
          [a - g + m, o - _ + h],
          [s + g + m, c + _ + h],
          [s + g - m, c + _ - h],
          [a - g - m, o - _ - h],
        ],
        y = this.crackPos,
        b = this.crackCol;
      for (let a = 0; a < 4; a++) {
        let [o, s] = v[a],
          c = (e * 4 + a) * 3;
        ((y[c] = t + r * o),
          (y[c + 1] = n + i * o),
          (y[c + 2] = Math.max(0, s)));
        let d = (e * 4 + a) * 4;
        ((b[d] = l[0] * u),
          (b[d + 1] = l[1] * u),
          (b[d + 2] = l[2] * u),
          (b[d + 3] = 0));
      }
    }
    casters() {
      return [];
    }
    rebuild() {
      (this.free(), this.root.remove(this.cols, this.cracks), this.build());
    }
    free() {
      (this.cols.geometry.dispose(),
        this.cols.material.dispose(),
        this.cracks.geometry.dispose(),
        this.cracks.material.dispose());
    }
    dispose() {
      this.free();
    }
  },
  Aa = {
    high: { points: 32, lines: 16 },
    medium: { points: 24, lines: 8 },
    low: { points: 12, lines: 4 },
    minimal: { points: 8, lines: 2 },
  },
  ja = 0.5,
  Ma = 6,
  Na = 1.3,
  Pa = 0.25,
  Fa = 0.6,
  Ia = 0.35,
  La = 2.6,
  Ra = 1.8,
  za = 0.6,
  Ba = 1.25;
function Va(e, t = !1) {
  let n = La + -0.6000000000000001 * Math.min(1, Math.max(0, e / 0.82));
  return t ? 1 + (n - 1) * za : n;
}
var Ha = 6,
  Ua = 0.5,
  Wa = new Map();
function Ga(e) {
  let t = Wa.get(e);
  if (t) return t;
  Wa.size > 512 && Wa.clear();
  let [n, r, a] = i(e),
    o = (e) => (Number.isFinite(e) ? 0.35 + (e / 255) * 0.65 : 1);
  return ((t = [o(n), o(r), o(a)]), Wa.set(e, t), t);
}
function Ka(e, t, n = 1.8) {
  return (
    (Number.isFinite(e) ? Math.min(1, Math.max(0, e)) : 1) * (0.35 + n * t)
  );
}
function qa(e, t, n) {
  let [r, i, a] = Ga(e.color);
  return (
    (n.a = [e.x0, e.y0, e.z0]),
    (n.b = [e.x1, e.y1, e.z1]),
    (n.r = r),
    (n.g = i),
    (n.b2 = a),
    (n.I = Ka(e.a, t) / Va(t, !0)),
    (n.rad = (e.r * Fa) / Ba),
    n
  );
}
function Ja(e, t, n) {
  let r = Math.max(e.gx0 - t, 0, t - (e.gx0 + e.fw)),
    i = Math.max(e.gy0 - n, 0, n - (e.gy0 + e.fh));
  return r * r + i * i;
}
function Ya(e, t, n, r) {
  let i = r.bx - r.ax,
    a = r.by - r.ay,
    o = r.bz - r.az,
    s = i * i + a * a + o * o,
    c =
      s > 0.001
        ? Math.min(
            1,
            Math.max(0, ((e - r.ax) * i + (t - r.ay) * a + (n - r.az) * o) / s),
          )
        : 0,
    l = r.ax + i * c - e,
    u = r.ay + a * c - t,
    d = r.az + o * c - n;
  return l * l + u * u + d * d;
}
