// index-BTsv3a2s 134 — math
// Lines 83560-83908 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var BP = null,
  VP = 1,
  HP = 6,
  UP = 40,
  WP = 20,
  GP = 4,
  KP = 2,
  qP = class {
    shadows;
    chunks;
    nx = Math.ceil(Or / 32);
    ny = Math.ceil(kr / 32);
    used;
    tick = 0;
    live = 0;
    job = null;
    constructor(e) {
      ((this.shadows = e),
        (this.chunks = Array(this.nx * this.ny).fill(null)),
        (this.used = new Float64Array(this.nx * this.ny)));
    }
    chunk(e, t) {
      let n = t * this.nx + e;
      this.used[n] = ++this.tick;
      let r = this.chunks[n];
      if (r) return r;
      let i = this.job?.k === n ? this.job : this.begin(n);
      return (this.advance(i, 32), this.finish(i));
    }
    begin(e) {
      let t = DP(),
        [n, r] = M(512 * t, 512 * t);
      return {
        k: e,
        c: n,
        ctx: r,
        img: r.createImageData(512 * t, 512 * t),
        row: 0,
        d: t,
      };
    }
    advance(e, t) {
      let n = e.k % this.nx,
        r = Math.floor(e.k / this.nx);
      if (e.d === 1) {
        (e.row === 0 && _P(e.img.data, n, r), (e.row = 32));
        return;
      }
      let i = Math.min(32, e.row + t);
      (kP(e.img.data, n, r, e.row, i), (e.row = i));
    }
    finish(e) {
      let { k: t, c: n, ctx: r, d: i } = e;
      return (
        this.job === e && (this.job = null),
        this.live >= (i > 1 ? WP : UP) && this.evict(),
        this.live++,
        r.putImageData(e.img, 0, 0),
        r.setTransform(i, 0, 0, i, 0, 0),
        this.decorate(
          r,
          (t % this.nx) * 512,
          Math.floor(t / this.nx) * 512,
          i > 1,
        ),
        r.setTransform(1, 0, 0, 1, 0, 0),
        (this.chunks[t] = jp(n, i)),
        n
      );
    }
    decals(e, t, n) {
      if (!oM() || !uj()) return;
      let r = Vr(),
        i = rP(),
        a = Math.max(0, Math.floor(t / 16) - 3),
        o = Math.max(0, Math.floor(n / 16) - 1),
        s = Math.min(Or - 1, Math.floor((t + 512) / 16) + 3),
        c = Math.min(kr - 1, Math.floor((n + 512) / 16) + 2),
        l = (e, t) =>
          e < 0 || t < 0 || e >= Or || t >= kr ? 255 : i[t * Or + e],
        u = (e) => e === ej.Grass || e === ej.Shade || e === ej.Tall;
      for (let d = o; d <= c; d++)
        for (let o = a; o <= s; o++) {
          let a = d * Or + o,
            s = r.tiles[a],
            c = i[a],
            f = iP(o, d, 701),
            p = iP(o, d, 702),
            m = null,
            h = Math.round((iP(o, d, 703) - 0.5) * 8),
            g = Math.round((iP(o, d, 704) - 0.5) * 6),
            _ = r.marks[a];
          if (_ >= cr.STONE && _ < cr.STONE + cr.STONES)
            ((m = `ar/stone-${_ - cr.STONE}`),
              (h = Math.round(h / 2)),
              (g = Math.round(g / 2)));
          else if (_ >= cr.GRASS && _ < cr.GRASS + cr.GRASSES)
            m = `ar/tall-dry-grass-ish-${_ - cr.GRASS}`;
          else if (_ >= cr.PEBBLE && _ < cr.PEBBLE + cr.PEBBLES)
            m = `ar/rocks-${_ - cr.PEBBLE}`;
          else if (s === A.Wheat)
            ((m = `gl/crops-wheat-taller`), (h = 0), (g = 0));
          else if (s === A.Greens)
            ((m = IP[Math.floor(iP(zP(o, d), 7, 31) * IP.length)]),
              (h = 0),
              (g = 0));
          else if (s === A.Flowers) {
            if (f < 0.75) {
              let e = MP[Math.floor(Xe(o / 5, d / 5, 63) * MP.length * 0.999)];
              m = e[Math.floor(p * e.length)];
            }
          } else
            u(c)
              ? f <
                ([l(o + 1, d), l(o - 1, d), l(o, d + 1), l(o, d - 1)].some(
                  (e) => e !== 255 && !u(e) && !rj(e),
                )
                  ? 0.28
                  : r.regions[a] === 0
                    ? 0.015
                    : 0.05)
                ? (m = `gl/grass-tufts-${Math.floor(p * 32)}`)
                : c === ej.Shade &&
                  r.regions[a] === 2 &&
                  f < 0.08 &&
                  (m = FP[Math.floor(p * FP.length)])
              : c === ej.Dirt1 || c === ej.Dirt2 || c === ej.Gravel
                ? f < 0.12 &&
                  (m = `gl/rocks-on-grass-color-scheme-1-${16 + Math.floor(p * 16)}`)
                : c === ej.Snow
                  ? f < (Xe(o / 5, d / 5, 64) > 0.6 ? 0.42 : 0.025)
                    ? (m = `hl/tall-grass-${Math.floor(p * 8)}`)
                    : f > 0.994 && (m = NP[Math.floor(p * NP.length)])
                  : (c === ej.FDirt || c === ej.FDirt2) &&
                    (f <
                    ([l(o + 1, d), l(o - 1, d), l(o, d + 1), l(o, d - 1)].some(
                      (e) => e === ej.Snow,
                    )
                      ? 0.3
                      : 0.03)
                      ? (m = `hl/tall-grass-${4 + Math.floor(p * 4)}`)
                      : f > 0.96 && (m = PP[Math.floor(p * PP.length)]));
          if (!m) continue;
          let v = sM(m);
          v &&
            Pp(e, v.c, o * 16 + 8 + h - v.ax - t, d * 16 + 13 + g - v.ay - n);
        }
    }
    decorate(e, t, n, r = !1) {
      (BN() && this.plantFields(e, t, n),
        this.decals(e, t, n),
        (e.globalAlpha = 0.22));
      for (let r of this.shadows)
        r.x > t + 512 ||
          r.x + Mp(r.c) < t ||
          r.y > n + 512 ||
          r.y + Np(r.c) < n ||
          Pp(e, r.c, r.x - t, r.y - n);
      e.globalAlpha = 1;
      let i = Mr * 16 + 8,
        a = Nr * 16 + 8;
      if (!(
        r ||
        i + 60 < t ||
        i - 60 > t + 512 ||
        a + 60 < n ||
        a - 60 > n + 512
      )) {
        for (let r = 0; r < 720; r++) {
          let o = (r / 720) * Math.PI * 2;
          for (let [r, s] of [
            [54, `#6fd8f0`],
            [55, `#44c9f0`],
            [40, `#b9b3c7`],
          ])
            ((e.fillStyle = s),
              e.fillRect(
                Math.round(i + Math.cos(o) * r) - t,
                Math.round(a + Math.sin(o) * r * 0.92) - n,
                1,
                1,
              ));
        }
        e.fillStyle = `#44c9f0`;
        for (let r = 0; r < 12; r++) {
          let o = (r / 12) * Math.PI * 2 + 0.26,
            s = Math.round(i + Math.cos(o) * 47) - t,
            c = Math.round(a + Math.sin(o) * 47 * 0.92) - n;
          (e.fillRect(s - 1, c - 2, 3, 1),
            e.fillRect(s, c - 1, 1, 3),
            e.fillRect(s - 1, c + 2, 3, 1));
        }
      }
    }
    plantFields(e, t, n) {
      let { tiles: r } = Vr(),
        i = Math.max(0, Math.floor(t / 16) - 1),
        a = Math.min(Or - 1, Math.floor((t + 512) / 16) + 1),
        o = Math.max(0, Math.floor(n / 16)),
        s = Math.min(kr - 1, Math.floor((n + 512) / 16) + 2),
        c = new Map(),
        l = bA(`crop09`);
      for (let u = o; u <= s; u++)
        for (let o = i; o <= a; o++) {
          let i = r[u * Or + o],
            a;
          if (i === A.Wheat) a = l;
          else if (i === A.Greens) {
            let e = zP(o, u);
            ((a = c.get(e)),
              a === void 0 &&
                ((a = bA(LP[Math.floor(iP(e, 7, 31) * LP.length)])),
                c.set(e, a)));
          }
          if (!a) continue;
          let s = Math.floor(iP(o, u, 32) * 3) - 1;
          e.drawImage(a.c, o * 16 + 8 - a.ax + s - t, u * 16 + 14 - a.ay - n);
        }
    }
    drawWater(e, t, n, r, i, a) {
      if (!BP) {
        let t = RN();
        if (!t) return;
        ((VP = Ap(t[0])), (BP = t.map((t) => e.createPattern(t, `repeat`))));
      }
      let o = Math.max(0, -t),
        s = Math.max(0, -n),
        c = Math.min(r, Or * 16 - t),
        l = Math.min(i, kr * 16 - n);
      if (c <= o || l <= s) return;
      let u = xA(BP, a * HP);
      (u.setTransform(new DOMMatrix([1 / VP, 0, 0, 1 / VP, -t, -n])),
        (e.fillStyle = u),
        e.fillRect(o, s, c - o, l - s));
    }
    chunkCanvas(e, t, n = !0) {
      return n ? this.chunk(e, t) : (this.chunks[t * this.nx + e] ?? null);
    }
    draw(e, t, n, r, i) {
      let a = Math.max(0, Math.floor(t / 512)),
        o = Math.max(0, Math.floor(n / 512)),
        s = Math.min(this.nx - 1, Math.floor((t + r) / 512)),
        c = Math.min(this.ny - 1, Math.floor((n + i) / 512));
      for (let r = o; r <= c; r++)
        for (let i = a; i <= s; i++)
          Pp(e, this.chunk(i, r), i * 512 - t, r * 512 - n);
    }
    evict() {
      let e = -1;
      for (let t = 0; t < this.chunks.length; t++)
        this.chunks[t] && (e < 0 || this.used[t] < this.used[e]) && (e = t);
      e < 0 || ((this.chunks[e] = null), this.live--);
    }
    warm(e, t) {
      if (this.job) {
        (this.advance(this.job, GP),
          this.job.row >= 32 && this.finish(this.job));
        return;
      }
      if (this.live >= (DP() > 1 ? WP : UP) - 8) return;
      let n = Math.floor(e / 512),
        r = Math.floor(t / 512),
        i = -1,
        a = 1 / 0;
      for (let o = Math.max(0, r - KP); o <= Math.min(this.ny - 1, r + KP); o++)
        for (
          let r = Math.max(0, n - KP);
          r <= Math.min(this.nx - 1, n + KP);
          r++
        ) {
          let n = o * this.nx + r;
          if (this.chunks[n]) continue;
          let s = Math.hypot((r + 0.5) * 512 - e, (o + 0.5) * 512 - t);
          s < a && ((a = s), (i = n));
        }
      i < 0 || ((this.job = this.begin(i)), this.advance(this.job, GP));
    }
  },
  JP = [];
((JP[A.Grass] = VN(`#3f8f3b`)),
  (JP[A.Grass2] = VN(`#377f3a`)),
  (JP[A.Flowers] = VN(`#58a444`)),
  (JP[A.DarkGrass] = VN(`#23553a`)),
  (JP[A.Path] = VN(`#a8966f`)),
  (JP[A.Water] = VN(`#2a6fb0`)),
  (JP[A.DeepWater] = VN(`#1b3f78`)),
  (JP[A.Sand] = VN(`#d8c48e`)),
  (JP[A.Snow] = VN(`#dfe8f3`)),
  (JP[A.Ice] = VN(`#9fd4f0`)),
  (JP[A.Ash] = VN(`#3b3237`)),
  (JP[A.Lava] = VN(`#ef6a22`)),
  (JP[A.Plaza] = VN(`#8c86a0`)),
  (JP[A.Bridge] = VN(`#8a5f38`)),
  (JP[A.Cobble] = VN(`#8a8290`)),
  (JP[A.Dirt] = VN(`#8a6a48`)),
  (JP[A.Soil] = VN(`#6b4c30`)),
  (JP[A.Wheat] = VN(`#c9a24a`)),
  (JP[A.Greens] = VN(`#4f8a3a`)),
  (JP[A.BridgeH] = VN(`#8a5f38`)),
  (JP[A.Dock] = VN(`#9c7a54`)),
  (JP[A.Market] = VN(`#a07a6a`)),
  (JP[A.Scrub] = VN(`#7d8a44`)),
  (JP[A.Courtyard] = VN(`#b5afc5`)));
function YP() {
  let e = Vr(),
    [t, n] = M(Or, kr),
    r = n.createImageData(Or, kr),
    i = r.data,
    a = (e, t) => {
      ((i[e * 4] = t >> 16),
        (i[e * 4 + 1] = (t >> 8) & 255),
        (i[e * 4 + 2] = t & 255),
        (i[e * 4 + 3] = 255));
    };
  for (let t = 0; t < Or * kr; t++)
    a(t, e.walls.h[t] ? VN(`#b9b3c7`) : JP[e.tiles[t]]);
  let o = VN(`#9c3b2e`),
    s = VN(`#1d4a2b`),
    c = VN(`#dcd6e6`),
    l = VN(`#1a1320`);
  for (let t of e.placements) {
    let e = t.kind,
      n =
        e === `house` ||
        e === `shop` ||
        e === `inn` ||
        e === `barracks` ||
        e === `farmhouse` ||
        e === `barn` ||
        e === `sawmill` ||
        e === `stable` ||
        e === `mourning`
          ? o
          : e === `tree` || e === `pine` || e === `border` || e === `fruitTree`
            ? s
            : e === `hall` || e === `keep` || e === `tower` || e === `wing`
              ? c
              : e === `obsidian` || e === `deadtree`
                ? l
                : e === `crystal`
                  ? VN(`#8ef6ff`)
                  : -1;
    if (!(n < 0))
      for (let e = t.ty; e < t.ty + t.h; e++)
        for (let r = t.tx; r < t.tx + t.w; r++)
          r >= 0 && e >= 0 && r < Or && e < kr && a(e * Or + r, n);
  }
  return (n.putImageData(r, 0, 0), t);
}
