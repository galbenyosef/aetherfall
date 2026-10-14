// index-BTsv3a2s 220 — math
// Lines 140524-141644 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var X1 = new WeakMap(),
  Z1 = 0.25,
  Q1 = class {
    live = [];
    shots = [];
    fx = new Kk();
    time = 0;
    hooks = null;
    onMe = [];
    skip3d = () => !1;
    in3d(e) {
      let t = this.live.find((t) => t.id === e.id);
      return !!t && this.skip3d(t.kind, e.a.id);
    }
    add(e) {
      let t = e.spell ?? ``,
        n = e.value ?? 0,
        r = op(ap(t), n);
      if (!r) return;
      let i = e.tx ?? e.x,
        a = e.ty ?? e.y,
        o = up(r, e.x, e.y, i, a, e.points),
        s = e.monsterId ? this.hooks?.monster?.(e.monsterId) : null,
        c = gp(r, o),
        l = SB(t, r.id),
        u = Math.max(0.25, vp(r));
      (r.channel && (u = Math.max(u, r.channel.dur + 1)),
        r.summon && (u = Math.max(u, r.summon.hatch + 0.6)),
        r.opens && (u = Math.max(u, (r.hold ?? 0) + r.opens)),
        l?.hit && r.marks && (u = Math.max(u, r.marks)));
      let d = {
        id: e._id,
        kind: t,
        index: n,
        a: r,
        look: l,
        monsterId: e.monsterId,
        geo: o,
        zone: c,
        zoneFrom: o.beams?.length ? (r.hold ?? 0) : 0,
        ox: e.x,
        oy: e.y,
        aim: { x: i, y: a },
        flip: s ? s.flip : i < e.x,
        t: 0,
        windup: Math.max(0.2, (e.delay ?? r.windup * 1e3) / 1e3),
        landed: !1,
        shapesIn: o.shapes.map(() => !1),
        shotsOut: o.shots.map(() => !1),
        hits: 0,
        keep: u + 0.6,
      };
      (r.summon &&
        (r.form === `summon` || r.form === `blink`) &&
        o.points &&
        (d.sparks = (r.form === `blink` ? o.points.slice(1) : o.points).map(
          (e) => ({ x: e.x, y: e.y, state: `wait` }),
        )),
        this.live.push(d));
    }
    clear() {
      ((this.live = []), (this.shots = []), this.fx.clear(), (this.onMe = []));
    }
    removeShot(e, t) {
      let n = -1,
        r = 3;
      if (
        (this.shots.forEach((i, a) => {
          let o = i.id === e ? Math.hypot(i.x - t.x, i.y - (t.y - 0.4)) : 1 / 0;
          o < r && ((r = o), (n = a));
        }),
        n >= 0)
      ) {
        let e = this.shots[n];
        (e.look?.impact &&
          !this.in3d(e) &&
          this.fx.add(e.look.impact, e.x, e.y),
          this.shots.splice(n, 1));
      }
    }
    cancel(e) {
      this.live = this.live.filter((t) => t.landed || t.monsterId !== e);
      for (let t of this.live)
        t.monsterId === e &&
          t.chan?.state === `on` &&
          this.endChan(t, `broken`);
    }
    chan(e, t, n) {
      let r = this.live.find(
        (n) => n.monsterId === e && n.index === t && n.a.channel,
      );
      if (r && n !== `begun`) {
        if (!r.chan) {
          r.keep = 0;
          return;
        }
        r.chan.state === `on` && this.endChan(r, n);
      }
    }
    struck(e, t) {
      let n = e ? this.live.find((t) => t.id === e) : void 0;
      t.chain &&
        n &&
        n.chainedUntil === void 0 &&
        (n.chainedUntil = Math.max(0, n.t - n.windup) + (t.hold ?? 1.5));
      let r = n?.look?.hit;
      r &&
        this.onMe.push({
          p: r,
          t0: this.time,
          until: this.time + (t.marks ?? 0.6),
        });
    }
    isTick(e) {
      let t = e ? this.live.find((t) => t.id === e) : void 0;
      return !t || !t.landed || !t.a.zone
        ? !1
        : t.t - t.windup > t.zoneFrom + 0.3;
    }
    onBlink(e, t, n, r, i) {
      for (let a of this.live) {
        let o = a.t - a.windup;
        if (a.chainedUntil !== void 0 && o < a.chainedUntil) {
          a.chainedUntil = o;
          let n = this.body(a);
          a.look?.snap &&
            n &&
            this.fx.add(a.look.snap, (n.x + e) / 2, (n.y + t) / 2 - 0.5);
        }
        let s = a.chan;
        if (!s || s.state !== `on`) continue;
        let c = a.a.channel?.shackle;
        c &&
          !s.snapped &&
          Math.hypot(e - s.x, t - s.y) <= c.r &&
          ((s.snapped = !0),
          a.look?.snap &&
            this.fx.add(a.look.snap, (s.x + e) / 2, (s.y + t) / 2 - 0.5));
        let l = a.a.channel?.hide,
          u = this.body(a);
        l &&
          i &&
          u &&
          Math.min(
            Math.hypot(n - u.x, r - u.y),
            Math.hypot(e - u.x, t - u.y),
          ) <= l.r &&
          (s.shownUntil = o + l.for);
      }
    }
    slowAt(e, t) {
      let n = 0;
      for (let r of this.live) {
        if (!r.landed) continue;
        let i = r.t - r.windup,
          a = r.a.zone;
        (a?.slow &&
          i >= r.zoneFrom &&
          i <= r.zoneFrom + a.hold &&
          r.zone.some((n) => wf(n, e, t)) &&
          (n = Math.max(n, a.slow)),
          r.chainedUntil !== void 0 &&
            i < r.chainedUntil &&
            (n = Math.max(n, r.a.slow ?? 0.5)));
        let o = r.chan,
          s = r.a.channel?.shackle;
        s &&
          o?.state === `on` &&
          !o.snapped &&
          Math.hypot(e - o.x, t - o.y) <= s.r &&
          (n = Math.max(n, s.slow));
      }
      return n;
    }
    canPass(e, t, n, r) {
      for (let i of this.live) {
        if (!i.landed || !i.geo.walls) continue;
        let a = i.t - i.windup,
          o = i.a.hold ?? 0;
        for (let s of i.geo.walls) {
          if (s.t !== `line` || a < (s.d ?? 0) || a > (s.d ?? 0) + o) continue;
          let i = s.w / 2 + Z1;
          if (
            Y1(n, r, s.x0, s.y0, s.x1, s.y1) < i &&
            Y1(e, t, s.x0, s.y0, s.x1, s.y1) >= i
          )
            return !1;
        }
      }
      return !0;
    }
    casting(e) {
      for (let t of this.live) {
        if (t.monsterId !== e || !t.look) continue;
        let n = t.t - t.windup;
        if (
          !t.landed ||
          (t.geo.beams && n <= (t.a.hold ?? 0)) ||
          t.chan?.state === `on`
        )
          return !0;
      }
      return !1;
    }
    windupOf(e) {
      for (let t = this.live.length - 1; t >= 0; t--) {
        let n = this.live[t];
        if (n.monsterId !== e) continue;
        if (!n.landed)
          return {
            id: n.a.id,
            k: n.windup > 0 ? Math.min(1, n.t / n.windup) : 1,
            landed: !1,
            hold: 0,
            aim: n.aim,
          };
        let r = n.t - n.windup;
        if (n.chan?.state === `on`)
          return {
            id: n.a.id,
            k: 1,
            landed: !0,
            hold: Math.max(0, n.chan.endT - r),
            aim: n.aim,
          };
        let i = n.geo.beams ? (n.a.hold ?? 0) : 0;
        if (r <= i)
          return { id: n.a.id, k: 1, landed: !0, hold: i - r, aim: n.aim };
      }
      return null;
    }
    hidden(e) {
      for (let t of this.live) {
        let n = t.chan;
        if (
          t.monsterId === e &&
          n?.state === `on` &&
          t.a.channel?.hide &&
          t.t - t.windup >= n.shownUntil
        )
          return !0;
      }
      return !1;
    }
    update(e, t) {
      ((this.hooks = t),
        (this.time += e),
        this.fx.update(e),
        (this.onMe = this.onMe.filter((e) => e.until > this.time)));
      for (let n = this.live.length - 1; n >= 0; n--) {
        let r = this.live[n];
        r.t += e;
        let i = r.t - r.windup;
        (!r.landed && i >= 0 && this.land(r, t),
          r.landed && this.step(r, i, t),
          r.landed && i > r.keep && this.live.splice(n, 1));
      }
      for (let n = this.shots.length - 1; n >= 0; n--) {
        let r = this.shots[n];
        if (
          ((r.x += r.vx * e),
          (r.y += r.vy * e),
          (r.life -= e),
          (r.age += e),
          t.domed?.(r.x, r.y + 0.4))
        ) {
          (this.shots.splice(n, 1), t.particles?.(r.x, r.y, `#f5d66b`));
          continue;
        }
        let i =
          !t.immune &&
          Math.hypot(r.x - t.me.x, r.y - (t.me.y - 0.4)) < r.r + 0.25;
        if (i || r.life <= 0 || t.solid(r.x, r.y + 0.4)) {
          this.shots.splice(n, 1);
          let e = this.in3d(r),
            a = i && !!t.guard?.(r.id, r.a, -r.vx, -r.vy);
          if (
            (!e && !a && t.particles?.(r.x, r.y, r.color),
            r.look?.impact && !e && !a && this.fx.add(r.look.impact, r.x, r.y),
            i)
          ) {
            let e = this.live.find((e) => e.id === r.id);
            (e && e.hits++, a || t.onHit(r.id, r.a, r.n));
          }
        }
      }
    }
    body(e) {
      return e.monsterId ? (this.hooks?.monster?.(e.monsterId) ?? null) : null;
    }
    land(e, t) {
      e.landed = !0;
      let n = e.a;
      t.onLand({
        monsterId: e.monsterId,
        a: n,
        aim: e.aim,
        moveTo: e.geo.moveTo,
        shapes: e.geo.shapes,
      });
      let r = e.look;
      if (r) {
        n.form === `blink` &&
          (r.blinkOut && this.fx.add(r.blinkOut, e.ox, e.oy - 0.8),
          r.blinkIn &&
            e.geo.moveTo &&
            this.fx.add(r.blinkIn, e.geo.moveTo.x, e.geo.moveTo.y - 0.8));
        let t = r.arc,
          i = e.geo.shapes[0];
        if (t && i?.t === `cone`) {
          let n = this.body(e),
            r = (n?.x ?? e.ox) * $ + (t.dx ?? 0) * (e.flip ? -1 : 1),
            a = (n?.y ?? e.oy) * $ + (t.dy ?? 0),
            o = t.dist ?? 0;
          this.fx.add(
            t.frames,
            (r + Math.cos(i.a) * o) / $,
            (a + Math.sin(i.a) * o) / $,
            { angle: i.a, dur: Math.max(0.25, t.frames.length / 16) },
          );
        }
      }
      if (n.channel) {
        let t = this.body(e);
        ((e.chan = {
          state: `on`,
          endT: n.channel.dur,
          x: t?.x ?? e.ox,
          y: t?.y ?? e.oy,
          snapped: !1,
          pulsed: 0,
          shownUntil: 0,
        }),
          n.channel.raise &&
            r?.raise &&
            this.raiseAt(
              r.raise,
              n.channel.raise.kind,
              (t, r) =>
                Math.hypot(t - e.chan.x, r - e.chan.y) <= n.channel.raise.r,
            ));
      }
    }
    endChan(e, t) {
      let n = e.chan;
      if (!n) return;
      let r = e.t - e.windup;
      ((n.state = t),
        (n.endT = Math.min(n.endT, r)),
        (e.keep = Math.max(n.endT + 1, vp(e.a)) + 0.6));
      let i = t === `broken` ? e.look?.channel?.broken : e.look?.channel?.done,
        a = this.body(e);
      i &&
        a &&
        this.fx.add(
          i.frames,
          a.x + ((i.dx ?? 0) * (a.flip ? -1 : 1)) / $,
          a.y + (i.dy ?? 0) / $,
          { dur: Math.max(0.4, i.frames.length / 10) },
        );
    }
    raiseAt(e, t, n) {
      for (let r of this.hooks?.monsters?.() ?? [])
        r.dead &&
          r.kind === t &&
          n(r.x, r.y) &&
          this.fx.add(e, r.x, r.y, { dur: 1.2 });
    }
    step(e, t, n) {
      let r = e.a,
        i = e.look,
        a = n.me,
        o = !!e.sparks || r.form === `summon`,
        s = !n.immune && r.mult > 0 && e.hits < Sp(r),
        c = !1;
      (e.geo.shapes.forEach((l, u) => {
        if (e.shapesIn[u] || t < (l.d ?? 0) || ((e.shapesIn[u] = !0), o))
          return;
        let d = $1(l);
        (i?.bands && l.t === `ring`
          ? this.stampBand(i.bands, l)
          : i?.impact && !i.arc && r.form !== `wall`
            ? this.fx.add(i.impact, d.x, d.y)
            : i?.impact && i.arc && this.fx.add(i.impact, d.x, d.y - 0.3),
          i || n.particles?.(d.x, d.y, r.color),
          !c &&
            s &&
            wf(l, a.x, a.y) &&
            ((c = !0),
            e.hits++,
            n.guard?.(e.id, r, e.ox - a.x, e.oy - a.y) ||
              (n.onHit(e.id, r, 0),
              r.chain &&
                e.chainedUntil === void 0 &&
                (e.chainedUntil = t + (r.hold ?? 1.5)))));
      }),
        e.geo.shots.forEach((n, a) => {
          e.shotsOut[a] ||
            t < (n.d ?? 0) ||
            ((e.shotsOut[a] = !0),
            this.shots.push({
              ...n,
              id: e.id,
              n: a,
              a: r,
              color: r.color,
              core: r.core ?? `#ffffff`,
              look: i,
              age: 0,
            }));
        }));
      let l = r.hold ?? 0;
      if (e.geo.beams && t <= l && !n.immune && r.mult > 0 && e.hits < Sp(r)) {
        let i = l > 0 ? t / l : 1;
        e.geo.beams.some((t) => wf(hp(t, e.geo.turn ?? 0, i), a.x, a.y)) &&
          (e.hits++,
          n.guard?.(e.id, r, e.ox - a.x, e.oy - a.y) || n.onHit(e.id, r, 0));
      }
      let u = r.zone;
      if (u?.raise && i?.raise && !e.raised && t - e.zoneFrom >= 2) {
        e.raised = !0;
        let t = e.zone;
        this.raiseAt(i.raise, u.raise, (e, n) => t.some((t) => wf(t, e, n)));
      }
      if (e.sparks && r.summon && t >= r.summon.hatch) {
        let t = this.body(e),
          n = r.summon.below && t && t.hp < r.summon.below.at;
        for (let t of e.sparks) {
          if (t.state !== `wait`) continue;
          let e =
            r.form === `summon` &&
            r.summon.hatch > 0 &&
            Math.hypot(a.x - t.x, a.y - t.y) <= 0.6;
          t.state = e ? `stamped` : `hatched`;
          let o = e ? i?.stamp : n ? (i?.below?.hatch ?? i?.hatch) : i?.hatch;
          o && this.fx.add(o, t.x, t.y);
        }
      }
      let d = e.chan,
        f = r.channel;
      if (d && f && d.state === `on`) {
        let o = f.pulse;
        if (o && o.every > 0)
          for (
            ;
            d.pulsed < Math.floor(f.dur / o.every + 1e-9) &&
            t >= (d.pulsed + 1) * o.every;
          ) {
            d.pulsed++;
            let t = {
              t: `ring`,
              x: d.x,
              y: d.y,
              r0: Math.max(0, o.r - 0.7),
              r1: o.r,
            };
            (i?.channel?.pulse && this.fx.add(i.channel.pulse, d.x, d.y),
              !n.immune &&
                o.mult > 0 &&
                e.hits < Sp(r) &&
                wf(t, a.x, a.y) &&
                (e.hits++, n.onHit(e.id, r, 0)));
          }
        t >= f.dur && this.endChan(e, `done`);
      }
    }
    stampBand(e, t) {
      let n = (t.r0 + t.r1) / 2,
        r = Math.max(6, Math.round((K1 * n * $) / 22));
      for (let i = 0; i < r; i++) {
        let a = (i / r) * K1;
        (t.gap !== void 0 &&
          Math.abs(((a - t.gap + Math.PI * 3) % K1) - Math.PI) <
            (t.gapW ?? 0) / 2 + 0.1) ||
          this.fx.add(e, t.x + Math.cos(a) * n, t.y + (Math.sin(a) * n) / 1.1, {
            dur: e.length / 12 + (i % 3) * 0.03,
          });
      }
    }
    drawGround(e, t, n) {
      let r = this.time;
      for (let i of this.live) {
        let a = i.a,
          o = i.look,
          s = i.t - i.windup,
          c = a.zone;
        if (c && i.landed && s >= i.zoneFrom && s <= i.zoneFrom + c.hold) {
          let r = s - i.zoneFrom,
            a = Math.min(1, (c.hold - r) / 0.6, r / 0.2 + 0.3);
          for (let o of i.zone) this.drawZoneShape(e, i, o, r, a, t, n);
        }
        if (
          (i.geo.shapes.forEach((c) => {
            if (i.sparks || a.form === `summon`) return;
            let l = c.d ?? 0;
            if (s >= l) {
              let i = (s - l) / 0.25;
              if (i >= 1 || a.form === `wall`) return;
              o
                ? eA(e, c, o.rim, o.ramp, 1, r, t, n, i)
                : t0(e, c, a.color, 0.55 * (1 - i), t, n, 1);
              return;
            }
            let u = Math.min(1, i.t / (i.windup + l));
            o
              ? this.drawWarning(e, i, c, u, t, n)
              : (t0(
                  e,
                  c,
                  a.color,
                  0.12 + 0.16 * Math.abs(Math.sin(r * 10)),
                  t,
                  n,
                  1,
                ),
                t0(e, n0(c, u), a.color, 0.3, t, n, 0));
          }),
          i.geo.beams && !i.landed)
        ) {
          let s = Math.min(1, i.t / i.windup);
          for (let c of i.geo.beams)
            if (
              (o
                ? this.drawWarning(e, i, c, s, t, n)
                : t0(
                    e,
                    c,
                    a.color,
                    0.12 + 0.16 * Math.abs(Math.sin(r * 10)),
                    t,
                    n,
                    1,
                  ),
              i.geo.turn)
            ) {
              (e.save(), (e.globalAlpha = 0.35));
              let s = hp(c, i.geo.turn, 1);
              (o
                ? eA(e, s, o.rim, o.ramp, 0, r, t, n)
                : t0(e, s, a.color, 0.1, t, n, 1),
                e.restore());
            }
        }
        if (i.geo.walls && i.landed && !o?.wall)
          for (let r of i.geo.walls)
            s < (r.d ?? 0) ||
              s > (r.d ?? 0) + (a.hold ?? 0) ||
              tA(e, r, o?.ramp[2] ?? a.color, 0.7, t, n);
        if (!i.landed && i.geo.shots.length) {
          let r = Math.min(1, i.t / i.windup);
          (e.save(),
            (e.globalAlpha = 0.25 + 0.25 * r),
            (e.strokeStyle = o ? o.ramp[3] : a.color),
            (e.lineWidth = 1),
            e.setLineDash([3, 3]));
          for (let a of i.geo.shots) {
            if ((a.d ?? 0) > 0) continue;
            let i = Math.min(3 + 3 * r, a.life * Math.hypot(a.vx, a.vy)),
              o = Math.hypot(a.vx, a.vy) || 1;
            (e.beginPath(),
              e.moveTo(a.x * $ - t, a.y * $ - n),
              e.lineTo(
                (a.x + (a.vx / o) * i) * $ - t,
                (a.y + (a.vy / o) * i) * $ - n,
              ),
              e.stroke());
          }
          e.restore();
        }
        let l = i.chan,
          u = a.channel;
        if (l && u && l.state === `on` && o) {
          let i = o.channel?.ground;
          i && Bk(e, zk(i, s, 8), l.x * $ - t, l.y * $ - n);
          let a = u.pulse;
          if (
            a &&
            a.every > 0 &&
            l.pulsed < Math.floor(u.dur / a.every + 1e-9)
          ) {
            let i = (s - l.pulsed * a.every) / a.every;
            eA(
              e,
              {
                t: `ring`,
                x: l.x,
                y: l.y,
                r0: Math.max(0, a.r - 0.7),
                r1: a.r,
              },
              o.rim,
              o.ramp,
              i,
              r,
              t,
              n,
            );
          }
        }
      }
    }
    drawWarning(e, t, n, r, i, a) {
      let o = t.look,
        s = this.time;
      o.lane && n.t === `line`
        ? (hre(e, n, o.ramp, r, s, i, a),
          Wk(
            e,
            o.lane,
            s,
            n.x0 * $ - i,
            n.y0 * $ - a,
            n.x1 * $ - i,
            n.y1 * $ - a,
            { alpha: 0.55 + 0.45 * r },
          ))
        : eA(e, n, o.rim, o.ramp, r, s, i, a);
      let c = o.tele;
      if (!c) return;
      let l = Rk(c, r);
      if (n.t === `line`)
        Uk(
          e,
          l,
          ((n.x0 + n.x1) / 2) * $ - i,
          ((n.y0 + n.y1) / 2) * $ - a,
          Math.atan2(n.y1 - n.y0, n.x1 - n.x0),
        );
      else if (n.t === `cone`)
        Uk(
          e,
          l,
          (n.x + (Math.cos(n.a) * n.r) / 2) * $ - i,
          (n.y + (Math.sin(n.a) * n.r) / 2) * $ - a,
          n.a,
        );
      else {
        let t = $1(n);
        Bk(e, l, t.x * $ - i, t.y * $ - a);
      }
    }
    drawZoneShape(e, t, n, r, i, a, o) {
      let s = t.look,
        c = t.a.zone;
      if (!s) {
        t0(
          e,
          n,
          t.a.color,
          (0.18 + 0.06 * Math.sin(this.time * 4)) * i,
          a,
          o,
          0.6,
        );
        return;
      }
      let l = s.zone;
      if (l && s.zoneAlong && n.t === `line`) {
        Wk(
          e,
          s.zoneOnce ? [Rk(l, r / c.hold)] : l,
          this.time,
          n.x0 * $ - a,
          n.y0 * $ - o,
          n.x1 * $ - a,
          n.y1 * $ - o,
          { alpha: i, fps: 6 },
        );
        return;
      }
      if (l && s.zoneOnce) {
        nA(e, n, s.rim, s.ramp, this.time, a, o, i * 0.6);
        let t = $1(n);
        Bk(e, Rk(l, r / c.hold), t.x * $ - a, t.y * $ - o, { alpha: i });
        return;
      }
      nA(e, n, s.rim, s.ramp, this.time, a, o, i, l);
    }
    collect(e, t, n, r) {
      let i = (e, t, n = 0) => [
        Math.ceil(e.width / 2) + Math.abs(n) + 4,
        Math.ceil(e.height / 2) + t + 4,
        Math.max(0, Math.ceil(e.height / 2) - t) + 4,
      ];
      for (let a of this.live) {
        let o = a.look,
          s = a.t - a.windup,
          c = a.a,
          l = o?.wall;
        if (l && a.landed && a.geo.walls) {
          let o = c.hold ?? 0,
            u = new Map();
          for (let i of a.geo.walls) {
            if (i.t !== `line`) continue;
            let a = s - (i.d ?? 0);
            if (a < 0 || a > o) continue;
            let c = this.wallFrame(l, a, o);
            if (!c) continue;
            let d = Math.max(i.y0, i.y1) * $,
              f = ((i.x0 + i.x1) / 2) * $,
              p = [
                (Math.abs(i.x1 - i.x0) * $) / 2 + 16,
                d - Math.min(i.y0, i.y1) * $ + 48,
                48,
              ];
            if (l.along) {
              e.push({
                y: d,
                x: f,
                box: p,
                draw: () =>
                  Wk(
                    t,
                    [c],
                    0,
                    i.x0 * $ - n,
                    i.y0 * $ - r,
                    i.x1 * $ - n,
                    i.y1 * $ - r,
                  ),
              });
              continue;
            }
            if (l.span && a > 0.2 && a < o - 0.2) {
              let a = l.span;
              e.push({
                y: d - 1,
                x: f,
                fy: d,
                box: p,
                draw: () =>
                  Wk(
                    t,
                    a,
                    s,
                    i.x0 * $ - n,
                    i.y0 * $ - r - 8,
                    i.x1 * $ - n,
                    i.y1 * $ - r - 8,
                    { fps: 6 },
                  ),
              });
            }
            for (let e of [
              { x: i.x0, y: i.y0 },
              { x: i.x1, y: i.y1 },
            ])
              u.set(`${Math.round(e.x * 16)},${Math.round(e.y * 16)}`, {
                ...e,
                t: a,
              });
          }
          for (let a of u.values()) {
            let s = this.wallFrame(l, a.t, o);
            s &&
              e.push({
                y: a.y * $,
                x: a.x * $,
                box: i(s, s.height / 2 - 2),
                draw: () =>
                  Bk(t, s, a.x * $ - n, a.y * $ - r - s.height / 2 + 2),
              });
          }
        }
        let u = o?.spark;
        if (u) {
          let l = this.body(a),
            d =
              (c.summon?.below &&
                l &&
                l.hp < c.summon.below.at &&
                o.below?.spark) ||
              u;
          if (a.sparks)
            for (let o of a.sparks)
              o.state === `wait` &&
                e.push({
                  y: o.y * $,
                  x: o.x * $,
                  box: i(d[0], 4),
                  draw: () =>
                    Bk(t, zk(d, a.t, 8), o.x * $ - n, o.y * $ - r - 4),
                });
          else if (
            c.form === `beam` &&
            a.geo.points &&
            s <= (c.hold ?? 0) &&
            !this.skip3d(a.kind, c.id)
          ) {
            let o = Math.min(1, a.t / a.windup);
            for (let s of a.geo.points)
              e.push({
                y: s.y * $,
                x: s.x * $,
                box: i(d[0], 6),
                draw: () => Bk(t, Rk(d, o), s.x * $ - n, s.y * $ - r - 6),
              });
          }
        }
        let d = a.chan,
          f = o?.channel?.aura;
        if (
          d &&
          d.state === `on` &&
          c.channel?.hide &&
          f &&
          s >= d.shownUntil
        ) {
          let o = this.body(a);
          o &&
            e.push({
              y: o.y * $,
              x: o.x * $,
              box: i(f.frames[0], -(f.dy ?? 0), f.dx ?? 0),
              draw: () =>
                this.drawPinned(
                  t,
                  f,
                  o,
                  f.once ? s / (c.channel?.dur ?? 1) : s,
                  n,
                  r,
                ),
            });
        }
      }
    }
    drawDark(e, t, n, r, i) {
      if (i <= 0) return;
      let a = X1.get(t);
      if (!a) {
        let e = t.getContext(`2d`).getImageData(0, 0, 1, 1).data;
        ((a = `rgba(${e[0]},${e[1]},${e[2]},${(e[3] / 255).toFixed(3)})`),
          X1.set(t, a));
      }
      let o = Math.round(n - t.width / 2),
        s = Math.round(r - t.height / 2),
        c = e.canvas.width,
        l = e.canvas.height;
      (e.save(),
        (e.globalAlpha = i),
        (e.fillStyle = a),
        e.fillRect(0, 0, c, Math.max(0, s)),
        e.fillRect(0, s + t.height, c, Math.max(0, l - s - t.height)),
        e.fillRect(0, s, Math.max(0, o), t.height),
        e.fillRect(o + t.width, s, Math.max(0, c - o - t.width), t.height),
        e.drawImage(t, o, s),
        e.restore());
    }
    wallFrame(e, t, n) {
      let r = e.rise.length / 12;
      if (t < r) return Rk(e.rise, t / r);
      let i = e.fall ? e.fall.length / 12 : 0;
      return e.fall && t > n - i
        ? Rk(e.fall, (t - (n - i)) / i)
        : zk(e.stand, t, 6);
    }
    drawPinned(e, t, n, r, i, a, o) {
      let s = t.once ? Rk(t.frames, r) : zk(t.frames, r, 10);
      Bk(
        e,
        n.flip ? J1(s) : s,
        n.x * $ - i + (t.dx ?? 0) * (n.flip ? -1 : 1),
        n.y * $ - a + (t.dy ?? 0),
        o === void 0 ? {} : { alpha: o },
      );
    }
    drawShots(e, t, n, r, i) {
      let a = this.time;
      for (let o of this.live) {
        let s = o.a,
          c = o.look,
          l = o.t - o.windup,
          u = this.body(o);
        if (!c) {
          if (o.geo.beams && o.landed && l <= (s.hold ?? 0))
            for (let r of o.geo.beams)
              t0(
                e,
                hp(
                  r,
                  o.geo.turn ?? 0,
                  (s.hold ?? 0) > 0 ? l / (s.hold ?? 1) : 1,
                ),
                s.color,
                0.55,
                t,
                n,
                1,
              );
          continue;
        }
        if (!o.landed) {
          let r = Math.min(1, o.t / o.windup);
          if (
            (c.windup &&
              u &&
              !u.dead &&
              this.drawPinned(e, { ...c.windup, once: !0 }, u, r, t, n),
            c.aim && Bk(e, Rk(c.aim, r), o.aim.x * $ - t, o.aim.y * $ - n),
            c.drop && o.windup - o.t < 0.25)
          )
            for (let r of o.geo.shapes) {
              let i = $1(r);
              Bk(
                e,
                Rk(c.drop, 1 - (o.windup - o.t) / 0.25),
                i.x * $ - t,
                i.y * $ - n,
              );
            }
        }
        let d = s.hold ?? 0,
          f = this.skip3d(o.kind, s.id);
        if (o.geo.beams && o.landed && l <= d) {
          let i = d > 0 ? l / d : 1,
            s = c.from ?? { dx: 0, dy: 0 },
            u = s.dx * (o.flip ? -1 : 1),
            p = c.beam,
            m = Math.min(1, (d - l) / 0.15 + 0.25);
          for (let d of o.geo.beams) {
            let h = hp(d, o.geo.turn ?? 0, i);
            if (h.t === `line`) {
              if (f) continue;
              let i = Math.hypot(h.x0 - o.ox, h.y0 - o.oy) < 0.05,
                d = h.x0 * $ - t + (i ? u : 0),
                g = h.y0 * $ - n + (i ? s.dy : -6),
                _ = h.x1 * $ - t,
                v = h.y1 * $ - n + (i ? s.dy : -6);
              if (
                (p
                  ? Wk(e, p, a, d, g, _, v, {
                      alpha: m,
                      widthK: c.beamW ? (c.beamW * $) / p[0].height : 1,
                    })
                  : tA(e, h, c.ramp[3], 0.6 * m, t, n),
                i && c.muzzle && Bk(e, zk(c.muzzle, l, 12), d, g),
                c.splash && Bk(e, zk(c.splash, l, 12), _, v),
                Gk(e, d, g, 14, c.ramp[3], 0.5 * m),
                r)
              )
                for (let e = 0; e <= 1; e += 0.34)
                  r.push({
                    x: d + (_ - d) * e,
                    y: g + (v - g) * e,
                    r: 34,
                    color: c.ramp[3],
                    a: 0.6 * m,
                  });
            } else if (h.t === `cone`) {
              if ((tA(e, h, c.ramp[3], 0.25 * m, t, n), f)) continue;
              let i = h.x * $ - t + u,
                o = h.y * $ - n + s.dy;
              if (p)
                for (let t of [-h.spread / 3, 0, h.spread / 3]) {
                  let n = h.r * $;
                  Wk(
                    e,
                    p,
                    a,
                    i,
                    o,
                    i + Math.cos(h.a + t) * n,
                    o + Math.sin(h.a + t) * n,
                    { alpha: m * (t === 0 ? 1 : 0.6) },
                  );
                }
              r &&
                r.push({
                  x: i + Math.cos(h.a) * h.r * 8,
                  y: o + Math.sin(h.a) * h.r * 8,
                  r: 50,
                  color: c.ramp[3],
                  a: 0.7 * m,
                });
            }
          }
        }
        if (
          o.chainedUntil !== void 0 &&
          l < o.chainedUntil &&
          u &&
          i &&
          c.chain
        ) {
          let r = c.from ?? { dx: 0, dy: -14 },
            a = u.x * $ - t + r.dx * (u.flip ? -1 : 1),
            o = u.y * $ - n + r.dy,
            s = i.x * $ - t,
            d = i.y * $ - n - 8;
          (Wk(e, c.chain, l, a, o, s, d, { fps: 8 }),
            c.weak && Bk(e, zk(c.weak, l, 8), (a + s) / 2, (o + d) / 2));
        }
        let p = o.chan,
          m = s.channel,
          h = c.channel;
        if (p && m && h && p.state === `on` && u && !u.dead) {
          let r = m.dur > 0 ? l / m.dur : 0;
          (h.aura &&
            !m.hide &&
            this.drawPinned(e, h.aura, u, h.aura.once ? r : l, t, n),
            m.hide &&
              l < p.shownUntil &&
              c.opened &&
              this.drawPinned(e, c.opened, u, l, t, n));
          let a = m.heal ?? m.seal;
          if (a && (h.thread || h.follower)) {
            let o = h.threadAt ?? { dx: 0, dy: -14 },
              s = u.x * $ - t + o.dx * (u.flip ? -1 : 1),
              c = u.y * $ - n + o.dy;
            for (let o of this.hooks?.monsters?.() ?? []) {
              if (
                o.dead ||
                o.kind !== a.kind ||
                Math.hypot(o.x - u.x, o.y - u.y) > a.r
              )
                continue;
              let d = i && Y1(i.x, i.y, u.x, u.y - 0.8, o.x, o.y - 0.6) < 0.6;
              (h.thread &&
                !d &&
                Wk(e, h.thread, l, s, c, o.x * $ - t, o.y * $ - n - 10, {
                  fps: 8,
                }),
                h.follower &&
                  this.drawPinned(
                    e,
                    h.follower,
                    o,
                    h.follower.once ? r : l,
                    t,
                    n,
                  ));
            }
          }
          if (m.hide && h.mage && i && Math.hypot(i.x - u.x, i.y - u.y) < 14) {
            let a = h.mage.once
              ? Rk(h.mage.frames, r)
              : zk(h.mage.frames, l, 8);
            this.drawDark(
              e,
              a,
              i.x * $ - t,
              i.y * $ - n - 8,
              Math.min(1, l / 0.4, (m.dur - l) / 0.4),
            );
          }
          let o = m.shackle?.r ?? 0;
          if (o > 0 && i) {
            let a = [
              { x: i.x, y: i.y, flip: !1, mine: !0 },
              ...[...(this.hooks?.others?.() ?? [])].map((e) => ({
                x: e.x,
                y: e.y,
                flip: !1,
                mine: !1,
              })),
            ];
            for (let i of a)
              Math.hypot(i.x - p.x, i.y - p.y) > o ||
                (i.mine && p.snapped) ||
                (c.chain &&
                  Wk(
                    e,
                    c.chain,
                    l,
                    p.x * $ - t,
                    p.y * $ - n - 8,
                    i.x * $ - t,
                    i.y * $ - n - 8,
                    { fps: 8 },
                  ),
                h.mage &&
                  this.drawPinned(e, h.mage, i, h.mage.once ? r : l, t, n));
          }
        }
        s.opens &&
          c.opened &&
          u &&
          !u.dead &&
          o.landed &&
          l >= d &&
          l <= d + s.opens &&
          this.drawPinned(e, c.opened, u, l, t, n);
      }
      let o = new Map();
      for (let e of this.shots) o.set(e.id, (o.get(e.id) ?? 0) + 1);
      for (let i of this.shots) {
        if (this.in3d(i)) continue;
        let a = 0.7 / Math.sqrt(o.get(i.id) ?? 1),
          s = Math.round(i.x * $ - t),
          c = Math.round(i.y * $ - n),
          l = i.look?.sprite;
        if (l) {
          let t = zk(l, i.age, 12);
          (i.look?.upright
            ? Bk(e, i.vx < 0 ? J1(t) : t, s, c)
            : Uk(e, t, s, c, Math.atan2(i.vy, i.vx)),
            r?.push({
              x: s,
              y: c,
              r: 22,
              color: i.look?.ramp[3] ?? i.color,
              a,
            }));
          continue;
        }
        (e0(e, i.x, i.y, i.r, i.color, i.core, t, n),
          r?.push({ x: s, y: c, r: 22, color: i.color, a }));
      }
      if ((this.fx.draw(e, t, n), i))
        for (let r of this.onMe)
          this.drawPinned(
            e,
            r.p,
            { x: i.x, y: i.y, flip: !1 },
            r.p.once ? (a - r.t0) / Math.max(0.1, r.until - r.t0) : a - r.t0,
            t,
            n,
          );
    }
  };
