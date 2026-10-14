// index-BTsv3a2s 170 — math
// Lines 97511-97648 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function rH(e) {
  let t = nH[e];
  if (!t) {
    t = {};
    for (let n of _ae[e] ?? []) t[n.key] = n.def;
    (Object.assign(t, gae[e] ?? {}), (nH[e] = t));
  }
  return t;
}
var iH = () => vae,
  aH = (e, t, n) => (e < t ? t : e > n ? n : e),
  oH = (e, t, n) => e + (t - e) * n;
function yae(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
  return t >>> 0;
}
function bae(e) {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) | 0;
    let e = Math.imul(t ^ (t >>> 15), 1 | t);
    return (
      (e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
var sH = class {
    k1 = 0;
    k2 = 0;
    k3 = 0;
    xp;
    y;
    v = 0;
    constructor(e, t, n, r) {
      (this.tune(e, t, n), (this.xp = r), (this.y = r));
    }
    tune(e, t, n) {
      ((this.k1 = t / (Math.PI * e)),
        (this.k2 = 1 / (2 * Math.PI * e * (2 * Math.PI * e))),
        (this.k3 = (n * t) / (2 * Math.PI * e)));
    }
    step(e, t) {
      if (e <= 0) return this.y;
      let n = (t - this.xp) / e;
      this.xp = t;
      let r = Math.max(this.k2, (e * e) / 2 + (e * this.k1) / 2, e * this.k1);
      return (
        (this.y += e * this.v),
        (this.v += (e * (t + this.k3 * n - this.y - this.k1 * this.v)) / r),
        this.y
      );
    }
    reset(e) {
      ((this.xp = e), (this.y = e), (this.v = 0));
    }
    kick(e) {
      this.v += e;
    }
  },
  cH = class {
    v = NaN;
    at(e, t = 0.6) {
      return (
        (Number.isNaN(this.v) || Math.abs(e - this.v) > t) &&
          (this.v = Math.round(e)),
        this.v
      );
    }
    half(e, t = 0.4) {
      return (
        (Number.isNaN(this.v) || Math.abs(e - this.v) > t) &&
          (this.v = Math.round(e * 2) / 2),
        this.v
      );
    }
    reset() {
      this.v = NaN;
    }
  },
  lH = 1 / 60,
  xae = 0.1,
  uH = class {
    kind;
    id;
    x;
    y;
    facing;
    top = 16;
    lift = 0;
    glow = null;
    glowK = 1;
    events = [];
    dead = !1;
    p;
    rand;
    t = 0;
    acc = 0;
    tunedAt = -1;
    sinceDraw = 1 / 0;
    constructor(e, t, n, r, i) {
      ((this.kind = e),
        (this.id = t),
        (this.p = rH(e)),
        (this.rand = bae(yae(t))),
        (this.x = n),
        (this.y = r),
        (this.facing = i < 0 ? -1 : 1));
    }
    step(e, t) {
      for (
        this.tunedAt !== iH() && ((this.tunedAt = iH()), this.retune()),
          Math.hypot(t.x - this.x, t.y - this.y) > 40 &&
            this.reset(t.x, t.y, t.facing),
          e = Math.min(e, xae),
          this.sinceDraw += e,
          this.acc += e;
        this.acc >= lH;
      )
        ((this.acc -= lH), (this.t += lH), this.tick(lH, t));
    }
    drawDue() {
      let e = this.p.drawHz;
      return !e || this.sinceDraw >= 1 / e ? ((this.sinceDraw = 0), !0) : !1;
    }
  };
function dH(e) {
  let t = new Uint32Array(e.length + 1);
  return (
    e.forEach((e, n) => {
      let [r, i, a] = Lp(e);
      t[n + 1] = (255 << 24) | (a << 16) | (i << 8) | r;
    }),
    t
  );
}
