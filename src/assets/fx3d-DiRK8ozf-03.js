// fx3d-DiRK8ozf 03 — math
// Lines 26706-27243 of readable/assets/fx3d-DiRK8ozf.pretty.js (statement-aligned).
var Iu = 16,
  Lu = Math.PI * 2,
  Ru = (e, t) => e + Math.random() * (t - e),
  zu = (e) => Math.max(0, Math.min(1, e)),
  Bu = new W(),
  Vu = new W(),
  Hu = new It(),
  Uu = new W(0, 0, 1),
  Wu = { dx: -0.5, dy: -15 },
  Gu = class {
    kit;
    st = new Map();
    shards = new Map();
    dt = 0;
    constructor(e) {
      this.kit = e;
    }
    update(e, t, n) {
      ((this.dt = t), (this.kit.now = e));
      for (let e of this.st.values()) e.seen = !1;
      for (let e of n.live) {
        if (!i(e.kind, e.a.id)) continue;
        let t = this.st.get(e.id);
        (t ||
          this.st.set(
            e.id,
            (t = {
              fired: new Set(),
              acc: {},
              core: -1,
              coreLight: null,
              spin: 0,
              prisms: [],
              seen: !0,
            }),
          ),
          (t.seen = !0),
          this.play(e, t, n));
      }
      for (let [e, t] of this.st)
        t.seen || (this.release(t), this.st.delete(e));
      this.flyShards(e, n);
    }
    clear() {
      for (let e of this.st.values()) this.release(e);
      this.st.clear();
      for (let e of this.shards.values())
        this.kit.layer.pools.shard.release(e.idx);
      this.shards.clear();
    }
    release(e) {
      let t = this.kit.layer;
      (e.core >= 0 && t.pools.core.release(e.core), (e.core = -1));
      for (let n of e.prisms) n.idx >= 0 && t.pools.prism.release(n.idx);
      ((e.prisms = []), e.coreLight && (e.coreLight.life = 0));
    }
    once(e, t, n, r) {
      n && !e.fired.has(t) && (e.fired.add(t), r());
    }
    every(e, t, n, r) {
      for (e.acc[t] = (e.acc[t] ?? 0) + this.dt * n; e.acc[t] >= 1;)
        (--e.acc[t], r());
    }
    heart(e, t, n, r, i, a) {
      let o = this.kit.layer;
      if (t <= 0.05) {
        (e.core >= 0 && o.pools.core.release(e.core), (e.core = -1));
        return;
      }
      if ((e.core < 0 && (e.core = o.pools.core.alloc(n, 1)), e.core < 0))
        return;
      e.spin += this.dt * (2 + t * 7);
      let s = 1.2 + t * 2.6;
      (o.pools.core.setLook(e.core, n, 0.6 + t * 1.6),
        o.pools.core.set(
          e.core,
          Bu.set(r, i + 2.5, a),
          Hu.setFromAxisAngle(Uu, e.spin),
          Vu.set(s, s, s),
        ));
    }
    play(t, n, i) {
      let a = this.kit,
        o = t.kind === `hollowwarden`,
        s = o ? Q.hollow : Q.aether,
        c = t.a,
        l = t.t - t.windup,
        u = c.hold ?? 0,
        d = zu(t.t / t.windup),
        f = Math.hypot(i.me.x - t.ox, i.me.y - t.oy) < 13,
        p = t.monsterId ? i.body(t.monsterId) : null,
        m = (p?.x ?? t.ox) * Iu,
        h = (p?.y ?? t.oy) * Iu,
        g = t.look?.from ?? Wu,
        _ = g.dx * (t.flip ? -1 : 1),
        v = t.ox * Iu + _,
        y = t.oy * Iu + 1,
        b = -g.dy,
        x = Math.max(0.6, (c.r * 2 * Iu) / 11);
      switch (c.id) {
        case `crush`: {
          let e = t.geo.shapes[0];
          if (!e || e.t !== `cone`) return;
          let r = (e.x + (Math.cos(e.a) * 17) / Iu) * Iu,
            c = (e.y + (Math.sin(e.a) * 17 * 0.8) / Iu) * Iu;
          (this.once(n, `fists`, t.t > t.windup * 0.25, () => {
            (a.light(m - 9, h, 46, s, 0.8, 18, t.windup * 0.75, !0),
              a.light(m + 9, h, 46, s, 0.8, 18, t.windup * 0.75, !0));
          }),
            t.landed ||
              this.every(n, `motes`, 40, () =>
                a.spray(m + Ru(-12, 12), h + 1, Ru(30, 48), 1, {
                  ramp: s,
                  speed: [4, 14],
                  up: [8, 22],
                  life: [0.3, 0.5],
                  h0: 4,
                  h1: 2.5,
                  s0: 0.7,
                  I: 3,
                  shape: Z.spark,
                  stretch: 0.05,
                }),
              ),
            this.once(n, `slam`, t.landed, () => {
              (a.shock(r, c, 50, 3.4, 0.45),
                a.rocks(r, c, 14, e.a, 1.1),
                a.dust(r, c, 14, e.a, 1.3, [30, 90]),
                a.sparks(r, c, 3, 22, s, e.a, 1.1, [40, 160]),
                a.flare(r, c, 5, 10.8, 0.22, s, 3),
                a.ring(r, c, 1, 6, 44, 0.32, s, 0.7),
                a.light(r, c, 6, s, 2.2, 34, 0.45),
                o && a.smoke(r, c, 3, 10),
                f && (a.ca(0.6), i.shake(3)));
            }));
          return;
        }
        case `shardquake`:
          (this.once(n, `crackLight`, t.t > 0.1, () =>
            a.light(m, h, 3, s, 1.2, 26, t.windup + 0.3, !0),
          ),
            t.landed ||
              this.every(n, `cracks`, 60, () => {
                let e = Math.random() * Lu,
                  t = Ru(4, 30) * d;
                a.spray(
                  m + Math.cos(e) * t,
                  h + Math.sin(e) * t * r.fx,
                  0.5,
                  1,
                  {
                    ramp: s,
                    speed: [1, 5],
                    up: [14, 36],
                    life: [0.4, 0.8],
                    h0: 4,
                    h1: 2.5,
                    s0: 0.6,
                    I: [2, 4],
                    shape: Z.spark,
                    stretch: 0.06,
                  },
                  !1,
                );
              }),
            this.once(n, `stamp`, t.landed, () => {
              (a.shock(m, h, 68, 3.8, 0.5),
                a.dust(m, h, 26, void 0, Math.PI, [55, 110]),
                a.rocks(m, h, 10, void 0, Math.PI, [40, 100]),
                a.flare(m, h, 3, 15.6, 0.24, s, 3),
                a.ring(m, h, 1, 8, 60, 0.35, s, 0.8),
                a.light(m, h, 4, s, 2.4, 44, 0.5),
                o && a.smoke(m, h, 2, 14),
                f && (a.ca(0.8), i.shake(4)));
            }));
          return;
        case `lattice`:
        case `inverted`:
        case `routenorth`: {
          let r = t.geo.beams ?? [],
            c = t.landed ? +(l <= u + 0.3) : d;
          if ((this.heart(n, c, s, v, y, b), !t.landed)) {
            (this.once(n, `dim`, !0, () => {
              (f && a.dim(o ? 0.3 : 0.38, t.windup + u + 0.1),
                (n.coreLight = a.light(
                  v,
                  y + 3,
                  b,
                  s,
                  0.4,
                  22,
                  t.windup + u,
                  !0,
                )));
            }),
              n.coreLight &&
                ((n.coreLight.I = 0.3 + 0.7 * d),
                (n.coreLight.rad = 16 + 14 * d)),
              this.every(n, `gather`, 140, () => {
                let e = Math.random() * Lu,
                  t = Ru(28, 60),
                  n = Ru(0.3, 0.5),
                  r = v + Math.cos(e) * t,
                  i = y + Math.sin(e) * t * 0.8,
                  o = b + Ru(-10, 28);
                a.layer.particles.emit(
                  {
                    x: r,
                    y: i,
                    z: o,
                    vx: (v - r) / n,
                    vy: (y + 2 - i) / n,
                    vz: (b - o) / n,
                    life: n,
                    ramp: s,
                    h0: 3,
                    h1: 4,
                    s0: 0.6,
                    I: 3.5,
                    shape: Z.spark,
                    stretch: 0.06,
                  },
                  a.now,
                );
              }),
              this.every(n, `survey`, 9, () => {
                for (let e of r) {
                  let t = qu(e),
                    n = Math.hypot(t.x - Ku(e).x, t.y - Ku(e).y) * Iu,
                    r = Math.atan2(t.y - Ku(e).y, t.x - Ku(e).x);
                  a.layer.particles.emit(
                    {
                      x: Ku(e).x * Iu,
                      y: Ku(e).y * Iu,
                      z: 0.5,
                      vx: Math.cos(r) * 170,
                      vy: Math.sin(r) * 170,
                      life: n / 170,
                      ramp: s,
                      h0: 4,
                      h1: 3,
                      s0: 0.6,
                      I: 3,
                      shape: Z.spark,
                      stretch: 0.04,
                    },
                    a.now,
                  );
                }
              }));
            return;
          }
          if (
            (this.once(n, `fire`, !0, () => {
              (a.flare(v, y + 3, b, 18, 0.3, s, 3),
                a.ring(v, y + 3, b, 6, 70, 0.35, s, 1.5),
                a.light(v, y, b, s, 2.2, 70, 0.35),
                a.shock(t.ox * Iu, t.oy * Iu, 46, 2.4, 0.35),
                f && (a.ca(1.2), i.shake(3)));
              for (let e of r) {
                let n = Ku(e),
                  r = qu(e),
                  i = e.t === `cone`;
                a.beam({
                  sx: v,
                  sy: y,
                  sz: b,
                  ang: Math.atan2(r.y - n.y, r.x - n.x),
                  len: Math.hypot(r.x - n.x, r.y - n.y) * Iu,
                  ez: 0,
                  sweep: t.geo.turn ?? 0,
                  life: u,
                  grow: 0.09,
                  fade: 0.22,
                  ramp: s,
                  r: i ? 2.6 : x,
                  I: i || x > 2 ? 0.8 : 1,
                  ticks: !0,
                  coils: !0,
                  hollow: o,
                });
              }
            }),
            l <= u)
          ) {
            this.every(n, `flick`, 14, () =>
              a.glow(v, y + 3, b, 8, 6, 0.1, s, 1.1, 4, 3.5),
            );
            let i = u > 0 ? l / u : 1;
            for (let n of r) {
              let r = e(n, t.geo.turn ?? 0, i),
                c = qu(r),
                l = c.x * Iu,
                u = c.y * Iu,
                d = Math.atan2(c.y - Ku(r).y, c.x - Ku(r).x);
              (a.sparks(l, u, 1, 1.2, s, d + Math.PI, 1.2, [40, 140]),
                a.spray(l, u, 1, 0.5, {
                  ramp: s,
                  speed: [5, 20],
                  up: [10, 30],
                  life: [0.25, 0.45],
                  h0: 4,
                  h1: 3,
                  s0: [4, 7],
                  s1: 2,
                  I: 2.5,
                  shape: Z.glow,
                }));
              let f = Ru(0.15, 1);
              (a.spray(v + (l - v) * f, y + (u - y) * f, b * (1 - f), 0.6, {
                ramp: s,
                speed: [3, 12],
                up: [6, 22],
                life: [0.4, 0.8],
                h0: 4,
                h1: 2.5,
                s0: 0.5,
                I: 3,
                shape: Z.spark,
                stretch: 0.05,
              }),
                o && a.smoke(l, u, 2, 0.25));
            }
          }
          this.once(n, `vent`, l > u, () => {
            (a.spray(v, y + 2, b, 18, {
              ramp: Q.stone,
              speed: [6, 22],
              up: [24, 44],
              drag: 1.2,
              life: [0.9, 1.5],
              h0: 4,
              h1: 3,
              s0: [3, 5],
              s1: 13,
              shape: Z.smoke,
              add: !1,
              a: 0.45,
            }),
              a.flare(v, y + 3, b, 8.4, 0.2, s, 3));
          });
          return;
        }
        case `facetweb`: {
          let e = a.layer,
            r = t.geo.points ?? [],
            c = t.landed ? +(l <= u + 0.3) : d;
          (this.heart(n, c, s, v, y, b),
            this.once(n, `dim`, !0, () => {
              f && a.dim(0.25, t.windup + u);
            }),
            !n.prisms.length &&
              !n.fired.has(`prisms`) &&
              this.once(n, `prisms`, !0, () => {
                n.prisms = r.map((t) => ({
                  x: t.x * Iu,
                  y: t.y * Iu,
                  idx: e.pools.prism.alloc(s, 0.5),
                  light: null,
                  landed: !1,
                  glow: 0.5,
                }));
              }));
          let p = Math.min(0.5, t.windup * 0.45);
          for (let r of n.prisms) {
            let n = p - t.t,
              o = n > 0 ? 150 * (1 - (1 - n / p) ** 2) : 0;
            (n > 0
              ? a.spray(r.x, r.y, o + 7, 2, {
                  ramp: s,
                  speed: [1, 4],
                  up: [30, 60],
                  life: [0.15, 0.3],
                  h0: 4,
                  h1: 2.5,
                  s0: 0.6,
                  I: 3,
                  shape: Z.spark,
                  stretch: 0.03,
                })
              : r.landed ||
                ((r.landed = !0),
                a.shock(r.x, r.y, 26, 2.2, 0.3),
                a.flare(r.x, r.y, 3, 8.4, 0.18, s, 3),
                a.sparks(r.x, r.y, 2, 12, s),
                a.dust(r.x, r.y, 6, void 0, Math.PI, [20, 50]),
                a.rocks(r.x, r.y, 3, void 0, Math.PI, [20, 60]),
                (r.light = a.light(
                  r.x,
                  r.y,
                  8,
                  s,
                  0.9,
                  16,
                  Math.max(0.3, t.windup - p + u),
                  !0,
                )),
                f && i.shake(2)),
              r.idx >= 0 &&
                (e.pools.prism.setLook(r.idx, s, r.glow),
                e.pools.prism.set(
                  r.idx,
                  Bu.set(r.x, r.y, o),
                  Hu.setFromAxisAngle(Uu, a.now * 1.6 + r.x),
                  Vu.set(10, 10, 15),
                )));
          }
          if (
            (this.once(n, `links`, t.landed, () => {
              for (let e of t.geo.beams ?? []) {
                if (e.t !== `line`) continue;
                let n = Math.hypot(e.x0 - t.ox, e.y0 - t.oy) < 0.05,
                  r = n ? v : e.x0 * Iu,
                  i = n ? y : e.y0 * Iu,
                  c = e.x1 * Iu,
                  l = e.y1 * Iu;
                a.beam({
                  sx: r,
                  sy: i,
                  sz: n ? b : 8,
                  ang: Math.atan2(l - i, c - r),
                  len: Math.hypot(c - r, l - i),
                  ez: 8,
                  life: u,
                  grow: 0.08,
                  fade: 0.2,
                  ramp: s,
                  r: x * (n ? 0.86 : 0.8),
                  I: n ? 1 : 0.9,
                  ticks: !0,
                  coils: !0,
                  hollow: o,
                });
              }
              for (let e of n.prisms)
                (a.flare(e.x, e.y, 8, 9.6, 0.2, s, 3),
                  (e.glow = 2),
                  e.light && (e.light.I = 1.6));
              (a.flare(v, y + 3, b, 14.4, 0.22, s, 3),
                a.light(v, y, b, s, 2, 60, 0.3),
                f && (a.ca(0.7), i.shake(2)));
            }),
            t.landed && l <= u)
          ) {
            for (let e of n.prisms)
              a.sparks(e.x, e.y, 8, 0.6, s, void 0, Math.PI, [20, 70]);
            for (let e of t.geo.beams ?? []) {
              if (e.t !== `line`) continue;
              let t = Math.random();
              a.spray(
                e.x0 * Iu + (e.x1 - e.x0) * Iu * t,
                e.y0 * Iu + (e.y1 - e.y0) * Iu * t,
                8,
                0.7,
                {
                  ramp: s,
                  speed: [3, 12],
                  up: [6, 22],
                  life: [0.4, 0.7],
                  h0: 4,
                  h1: 2.5,
                  s0: 0.5,
                  I: 3,
                  shape: Z.spark,
                  stretch: 0.05,
                },
              );
            }
          }
          this.once(n, `shatter`, t.landed && l > u, () => {
            for (let t of n.prisms)
              (a.shatter(t.x, t.y, 7, s, 1.6),
                o && a.smoke(t.x, t.y, 4, 6),
                t.idx >= 0 && e.pools.prism.release(t.idx),
                t.light && (t.light.life = 0));
            ((n.prisms = []), f && (a.ca(0.8), i.shake(2)));
          });
          return;
        }
      }
    }
    flyShards(e, t) {
      let n = this.kit.layer;
      for (let e of this.shards.values()) e.seen = !1;
      for (let r of t.shots) {
        let a = t.live.find((e) => e.id === r.id)?.kind;
        if (!a || r.a.id !== `shardquake` || !i(a, r.a.id)) continue;
        let o = `${r.id}:${r.n}`,
          s = a === `hollowwarden` ? Q.hollow : Q.aether,
          c = r.x * Iu,
          l = r.y * Iu + 7,
          u = this.shards.get(o);
        (u ||
          ((u = {
            idx: n.pools.shard.alloc(s, 1.4),
            light: this.kit.light(c, l, 7, s, 0.9, 11, 30, !0),
            axis: new W(Ru(-1, 1), Ru(-1, 1), Ru(-1, 1)).normalize(),
            spin: Ru(7, 12) * (Math.random() < 0.5 ? -1 : 1),
            x: c,
            y: l,
            t0: e,
            ramp: s,
            seen: !0,
          }),
          this.shards.set(o, u)),
          (u.seen = !0),
          (u.x = c),
          (u.y = l),
          (u.light.x = c),
          (u.light.y = l),
          u.idx >= 0 &&
            n.pools.shard.set(
              u.idx,
              Bu.set(c, l, 7),
              Hu.setFromAxisAngle(u.axis, u.spin * (e - u.t0)),
              Vu.setScalar(3.6),
            ),
          this.kit.spray(c, l, 7, 0.9, {
            ramp: s,
            speed: [2, 10],
            up: [-4, 8],
            life: [0.2, 0.4],
            h0: 4,
            h1: 2.5,
            s0: 0.5,
            I: 2.5,
            shape: Z.spark,
            stretch: 0.04,
          }));
      }
      for (let [e, t] of this.shards)
        t.seen ||
          (this.kit.shatter(t.x, t.y, 7, t.ramp, 0.8),
          t.idx >= 0 && n.pools.shard.release(t.idx),
          (t.light.life = 0),
          this.shards.delete(e));
    }
  };
