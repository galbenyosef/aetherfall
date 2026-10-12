// assets__index-BTsv3a2s 167 — math
// Lines 95997-96406 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var fae = class extends Ez {
  last = null;
  hand = 0;
  nextKnock = 0;
  still = 0;
  lesson = null;
  art = null;
  modify(e, t) {
    let n = this.last === e.id;
    return ((this.last = e.id), Math.round(t * (n ? 0.5 : 1.5)));
  }
  onReset() {
    ((this.lesson = null), (this.still = 0));
  }
  tiles() {
    if (this.art) return this.art;
    let e = this.strip(`chalk`, `Chalk line`),
      t = this.strip(`chalk`, `Tone beams`);
    if (!e || !t) return null;
    let n = {},
      r = {};
    return (
      Co.forEach((e, i) => {
        ((n[e] = [t[i], Ip(t[i])]),
          (r[e] = [$V(t[i], 8, 0, 16, 12), $V(Ip(t[i]), 8, 0, 16, 12)]));
      }),
      (this.art = {
        body: [$V(e[4], 0, 0, 56, 12)],
        tick: [$V(e[4], 50, 0, 14, 12)],
        beams: n,
        bolts: r,
      }),
      this.art
    );
  }
  use(e) {
    let t = this.lesson !== null || this.still > this.t;
    if (e === `four`) {
      if (this.lesson) return !1;
      let e = Co[this.hand++ % 4],
        t = this.handAt(e);
      (this.run.solid(t.x, t.y + 0.3) &&
        (t = { x: this.m.rx, y: this.m.ry - YV / 16 }),
        this.bolt(
          e,
          t,
          { x: this.me.x, y: this.me.y - 0.4 },
          this.mh() * 0.16,
        ));
    }
    if (e === `chalk`) {
      if (t) return !1;
      let e = Co[this.hand++ % 4];
      this.teach({
        wind: 1,
        hold: 0.5,
        turn: 0,
        frac: 0.15,
        arms: [{ a: this.angleToMe(), tone: e, hit: !1 }],
      });
    }
    if (e === `lesson`) {
      if (t) return !1;
      (this.run.say(
        this.name(),
        `Every tone is a door. Learn to knock on all of them.`,
        3.5,
      ),
        this.teach({
          wind: 1.2,
          hold: 2.4,
          turn: Math.PI / 2,
          frac: 0.15,
          arms: Co.map((e, t) => ({ a: (t * Math.PI) / 2, tone: e, hit: !1 })),
        }));
    }
  }
  bolt(e, t, n, r) {
    let i = this.tiles();
    (this.run.shoot(t, n, r, Eo[e], `#ffffff`, 7.5, {
      look: { sprite: i?.bolts[e] ?? null },
    }),
      q.sfx(`bolt`, 0.4));
  }
  hostEvent(e) {
    let t = e.args ?? [],
      n = { x: e.x ?? this.m.rx, y: e.y ?? this.m.ry };
    switch (e.name) {
      case `knocked`:
        this.last = e.text ?? null;
        break;
      case `four`:
        this.bolt(
          Co[t[0] ?? 0],
          n,
          { x: t[1] ?? this.me.x, y: t[2] ?? this.me.y },
          0,
        );
        break;
      case `teach`: {
        let [e = 1, r = 0.5, i = 0] = t,
          a = [];
        for (let e = 3; e + 1 < t.length; e += 2)
          a.push({ a: t[e], tone: Co[t[e + 1]] ?? `ember`, hit: !1 });
        (a.length === 4 &&
          this.run.say(
            this.name(),
            `Every tone is a door. Learn to knock on all of them.`,
            3.5,
          ),
          this.teach({ wind: e, hold: r, turn: i, frac: 0.15, arms: a }, n));
        break;
      }
      case `knock`:
        ((this.still = this.t + 0.3),
          this.swing(
            {
              t: `cone`,
              x: n.x,
              y: n.y,
              a: t[0] ?? 0,
              spread: ZV.spread,
              r: ZV.r,
            },
            t[1] ?? 0,
          ));
        break;
      default:
        super.hostEvent(e);
    }
  }
  hostLook(e) {
    let t = Number(e.split(`:`)[1] ?? 0);
    return e.startsWith(`knocks`)
      ? this.look(`knocks`, { ramp: eH(im[Co[t] ?? `ember`]) })
      : void 0;
  }
  hostTick(e) {
    this.lesson && this.tick(e);
  }
  teach(e, t) {
    ((this.lesson = {
      x: t?.x ?? this.m.rx,
      y: t?.y ?? this.m.ry,
      t0: this.t,
      ...e,
    }),
      (this.still = this.t + e.wind + e.hold),
      q.sfx(`cast`, 0.4));
  }
  handAt(e) {
    let [t, n] = dae[e],
      r = this.m.doc.facing < 0 ? -1 : 1;
    return { x: this.m.rx + (t * r) / 16, y: this.m.ry + n / 16 };
  }
  reach(e, t, n) {
    let r = this.room,
      i = Math.cos(n),
      a = Math.sin(n),
      o = 99;
    return (
      i > 1e-6 && (o = Math.min(o, (r.x + r.w - e) / i)),
      i < -1e-6 && (o = Math.min(o, (r.x - e) / i)),
      a > 1e-6 && (o = Math.min(o, (r.y + r.h - t) / a)),
      a < -1e-6 && (o = Math.min(o, (r.y - t) / a)),
      Math.max(1, o)
    );
  }
  armShape(e, t) {
    let n = this.reach(e.x, e.y, t);
    return {
      t: `line`,
      x0: e.x + Math.cos(t) * 0.5,
      y0: e.y + Math.sin(t) * 0.5,
      x1: e.x + Math.cos(t) * n,
      y1: e.y + Math.sin(t) * n,
      w: QV,
    };
  }
  tick(e) {
    let t = this.lesson;
    if (!t) return;
    let n = this.t - t.t0 - t.wind;
    if (n >= 0 && n <= t.hold) {
      t.fired ||
        ((t.fired = !0),
        (this.g.shake = Math.max(this.g.shake, 4)),
        q.sfx(`zap`, 0.7));
      let e = t.hold > 0 ? n / t.hold : 1;
      for (let n of t.arms)
        n.hit ||
          this.g.meDoc?.dead ||
          (wf(this.armShape(t, n.a + t.turn * e), this.me.x, this.me.y) &&
            ((n.hit = !0),
            this.run.hitMe(this.mh() * t.frac, { heavy: !0 }),
            this.g.particles.burst(
              this.me.x * 16,
              this.me.y * 16 - 12,
              16,
              [Eo[n.tone], `#ffffff`],
              70,
            )));
    }
    n > t.hold + 0.6 && (this.lesson = null);
  }
  move(e) {
    let t = this.mob,
      n = this.me,
      r = n.x - this.m.rx,
      i = n.y - this.m.ry,
      a = Math.hypot(r, i);
    if (!(this.still > this.t)) {
      if (
        (Math.abs(r) > 0.05 && (this.m.doc.facing = r < 0 ? -1 : 1),
        a <= t.range + 0.2 && this.t >= this.nextKnock)
      ) {
        this.nextKnock = this.t + (t.cd / 1e3) * 1.6;
        let e = Math.atan2(i, r),
          n = {
            t: `cone`,
            x: this.m.rx,
            y: this.m.ry,
            a: e,
            spread: ZV.spread,
            r: ZV.r,
          };
        this.still = this.t + ZV.wind + ZV.gap * 3 + 0.1;
        let a = (e) =>
          this.hitShape(
            n,
            e === 0 ? ZV.wind : ZV.gap,
            Eo[Co[e]],
            t.dmg * ZV.dmg,
            () => {
              (this.swing(n, e), e < 3 && a(e + 1));
            },
            this.look(`knocks`, { ramp: eH(im[Co[e]]) }),
          );
        a(0);
        return;
      }
      if (a > t.range * 0.8) {
        if (!this.inRoom(n.x, n.y, 0) && !this.inRoom(this.m.rx, this.m.ry, -1))
          return;
        this.run.step(t, n.x, n.y, t.speed * e, !0);
      }
    }
  }
  swing(e, t) {
    let n = this.strip(`knocks`, `Knock arcs`);
    if (
      (q.sfx(`hit`, 0.5),
      t === 0 &&
        ((this.m.lunge = 0.25),
        (this.m.lungeDir = { x: Math.cos(e.a), y: Math.sin(e.a) })),
      !n)
    )
      return;
    let r = e.a + (t % 2 == 0 ? 0.15 : -0.15),
      i = e.x,
      a = e.y - uae / 16;
    this.run.fx.add(
      [n[t]],
      i + (Math.cos(r) * 14) / 16,
      a + (Math.sin(r) * 14) / 16,
      { dur: 0.18, angle: r },
    );
  }
  hud() {
    return {
      ...super.hud(),
      title: this.last
        ? `Knock again: ${hae(this.last)} does half`
        : `Every tone is a door`,
    };
  }
  drawGround(e, t, n) {
    let r = this.lesson,
      i = this.tiles();
    if (!r || !i || this.done) return;
    let a = this.t - r.t0,
      o = Math.min(1, a / (r.wind * 0.8)),
      s = a < r.wind ? 1 : Math.max(0, 1 - (a - r.wind - r.hold + 0.3) / 0.6);
    if (!(s <= 0))
      for (let c of r.arms) {
        let l = this.reach(r.x, r.y, c.a) * o,
          u = Math.cos(c.a),
          d = Math.sin(c.a),
          f = r.x * 16 - t,
          p = r.y * 16 - n,
          m = r.arms.length === 1 && a < r.wind ? QV * 16 : 4;
        (pae(
          e,
          f + u * 8,
          p + d * 8,
          f + u * l * 16,
          p + d * l * 16,
          m,
          `#2a2630`,
          (a < r.wind ? 0.32 + 0.1 * Math.abs(Math.sin(this.t * 8)) : 0.25) * s,
        ),
          Wk(
            e,
            i.body,
            0,
            f + u * 6,
            p + d * 6,
            f + u * l * 16,
            p + d * l * 16,
            { alpha: s },
          ),
          o >= 1 &&
            Wk(
              e,
              i.tick,
              0,
              f + u * (l * 16 - 14),
              p + d * (l * 16 - 14),
              f + u * l * 16,
              p + d * l * 16,
              { alpha: s },
            ));
      }
  }
  drawAfterLight(e, t, n) {
    let r = this.lesson,
      i = this.tiles();
    if (!r || !i || this.done) return;
    let a = this.t - r.t0 - r.wind,
      o = r.x * 16 - t,
      s = r.y * 16 - n - YV,
      c = r.y * 16 - n - JV;
    if (a < 0) {
      let t = (this.t - r.t0) / r.wind;
      Gk(e, o, c, 4 + t * 5, `#ffffff`, 0.2 + t * 0.3);
      return;
    }
    if (a > r.hold) return;
    let l = r.hold > 0 ? a / r.hold : 1,
      u = Math.min(1, (r.hold - a) / 0.15 + 0.2);
    for (let t of r.arms) {
      let n = t.a + r.turn * l,
        c = Math.cos(n),
        d = Math.sin(n),
        f = this.reach(r.x, r.y, n) * 16,
        p = mae(c, d, YV);
      Wk(
        e,
        i.beams[t.tone],
        this.t,
        o + c * p,
        s + d * p,
        o + c * f,
        s + d * f,
        { fps: 12, alpha: u, widthK: a < 0.08 ? 0.5 : 1 },
      );
    }
    Gk(e, o, c, 14, `#ffffff`, 0.7);
  }
  drawAfterLightHd(e, t, n, r) {
    let i = this.lesson,
      a = this.tiles();
    if (!i || !a || this.done) return;
    let o = this.t - i.t0 - i.wind,
      s = i.x * 16,
      c = i.y * 16;
    if (o < 0 || o > i.hold) return;
    let l = i.hold > 0 ? o / i.hold : 1,
      u = Math.min(1, (i.hold - o) / 0.15 + 0.2);
    for (let d of i.arms) {
      let f = d.a + i.turn * l,
        p = Math.cos(f),
        m = Math.sin(f),
        h = this.reach(i.x, i.y, f) * 16,
        g = o < 0.08 ? 0.5 : 1;
      (Tz(
        t,
        a.beams[d.tone],
        this.t,
        12,
        s + p * 6,
        c + m * 6,
        YV,
        s + p * h,
        c + m * h,
        YV,
        { a: u, widthK: g },
      ),
        Wk(
          e.looseAdd,
          a.beams[d.tone],
          this.t,
          s + p * 6 - n,
          c + m * 6 - r,
          s + p * h - n,
          c + m * h - r,
          { fps: 12, alpha: u * 0.35, widthK: g },
        ));
    }
  }
  uprightsHd(e) {
    let t = this.lesson;
    if (!t || !this.tiles() || this.done) return;
    let n = this.t - t.t0 - t.wind,
      r = (this.t - t.t0) / t.wind;
    n < 0
      ? Cz(e, t.x * 16, t.y * 16 + 1, JV, 4 + r * 5, `#ffffff`, 0.2 + r * 0.3)
      : n <= t.hold && Cz(e, t.x * 16, t.y * 16 + 1, JV, 14, `#ffffff`, 0.7);
  }
};
