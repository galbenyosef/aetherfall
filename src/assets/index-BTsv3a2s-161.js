// index-BTsv3a2s 161 — math
// Lines 92599-93742 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var Wie = () => _V(`sweep:left`, () => mV(`sweep`, `Sweep`).map(Ip)),
  Gie = () =>
    _V(`drag`, () => {
      let e = mV(`hook`, `Drag`);
      return e.length ? [...e, ...Array(15).fill(e[e.length - 1])] : [];
    }),
  Kie = () =>
    _V(`pikes`, () => {
      let e = [];
      for (let t of mV(`line`, `Pikes`))
        for (let n = 0; n < 10; n++) {
          let [r, i] = M(8, 54);
          (i.drawImage(t, 8 + n * 8, 0, 8, 54, 0, 0, 8, 54), e.push(r));
        }
      return e;
    }),
  qie = class extends Ez {
    standard = null;
    busyUntil = 0;
    nextSweep = 0;
    sweepUntil = 0;
    hook = null;
    rank = null;
    counts = new Map();
    planted = -99;
    answering = [];
    burning = new Map();
    burnt = new Set();
    glanceAt = -99;
    litAt = -99;
    lit = !1;
    groundFx = [];
    bodyFx = [];
    onEngage() {
      if (this.hosted) {
        this.findStandard();
        return;
      }
      ((this.standard =
        [...this.run.mobs.values()].find(
          (e) => e.kind === `standard` && e.room === this.room.index,
        ) ?? null),
        this.standard && (this.standard.onDeath = () => this.toppled()));
    }
    findStandard() {
      for (let [e, t] of this.g.monsters)
        if (
          !t.local &&
          !t.doc.dead &&
          t.doc.kind === `standard` &&
          this.inRoom(t.rx, t.ry)
        ) {
          this.standard = this.run.hostMob(e);
          return;
        }
      this.standard = null;
    }
    guards(e) {
      return e === this.standard || super.guards(e);
    }
    onAddHit(e, t, n) {
      return e === this.standard &&
        this.run.run.diff === `hollowed` &&
        !this.run.inLight(e.m.rx, e.m.ry)
        ? (this.g.floater(
            e.m.rx * 16,
            e.m.ry * 16 - 40,
            `Bring a light to it`,
            `#ffcf7a`,
            !1,
          ),
          (this.glanceAt = this.t),
          0)
        : super.onAddHit(e, t, n);
    }
    standing() {
      return !!this.standard && !this.standard.m.doc.dead;
    }
    busy() {
      return this.t < this.busyUntil || !!this.hook;
    }
    hand() {
      return {
        x: this.m.rx + (this.m.doc.facing < 0 ? -10 : 10) / 16,
        y: this.m.ry - 24 / 16,
      };
    }
    put(e, t, n, r, i, a = {}) {
      t?.length && e.push({ frames: t, x: n, y: r, t0: this.t, dur: i, ...a });
    }
    pinned(e, t, n, r, i, a, o, s, c) {
      if (!t.length) return;
      let l = Uie(t[0].width / 2 - i, t[0].height / 2 - a, o);
      this.put(e, t, n + l.x / 16, r + l.y / 16, s, { angle: o, sort: c });
    }
    drawFx(e, t, n, r) {
      let i = (this.t - t.t0) / t.dur;
      if (i < 0 || i >= 1) return;
      let a = Rk(t.frames, i);
      t.angle === void 0
        ? Bk(e, a, t.x * 16 - n, t.y * 16 - r, { ax: t.ax, ay: t.ay })
        : Uk(e, a, t.x * 16 - n, t.y * 16 - r, t.angle);
    }
    pushFx(e, t, n, r, i) {
      let a = (t.sort ?? t.y) * 16,
        o = (this.t - t.t0) / t.dur;
      e.push({
        y: a,
        x: t.x * 16,
        box:
          o >= 0 && o < 1
            ? Sz(Rk(t.frames, o), t.x * 16, t.y * 16, a, t)
            : void 0,
        draw: () => this.drawFx(n, t, r, i),
      });
    }
    hookAt() {
      let e = this.hook;
      if (!e || this.t - e.t0 < 1) return null;
      let t = this.hand(),
        n = e.caught ? 0.5 : 0.4,
        r = e.caught
          ? { x: this.me.x, y: this.me.y }
          : { x: e.line.x0 + e.ux * e.s, y: e.line.y0 + e.uy * e.s },
        i = { x: r.x, y: r.y - n };
      return {
        hd: t,
        p: i,
        foot: r,
        z: n * 16,
        a: Math.atan2(i.y - t.y, i.x - t.x),
      };
    }
    graves() {
      return this.roomTiles(
        (e, t, n) => e === Ao.SHALLOW && !this.burnt.has(pV(t, n)),
      );
    }
    use(e) {
      if (this.busy()) return !1;
      if (e === `rally`) return this.rally();
      if ((e === `pikewall` && this.holdTheLine(), e === `reap`))
        return this.thatchersHook();
      e === `muster` && this.muster();
    }
    move(e) {
      let t = this.m,
        n = this.me;
      if (this.busy()) return;
      if (this.t < this.sweepUntil) {
        t.anim = 2.2;
        return;
      }
      let r = n.x - t.rx,
        i = n.y - t.ry,
        a = Math.hypot(r, i);
      if (
        (Math.abs(r) > 0.05 && (t.doc.facing = r < 0 ? -1 : 1),
        a <= 2 && this.t >= this.nextSweep)
      ) {
        this.sweep(Math.atan2(i, r));
        return;
      }
      if (a > uV * 0.7) {
        if (!this.inRoom(n.x, n.y, 0) && !this.inRoom(t.rx, t.ry, -1)) return;
        this.run.step(this.mob, n.x, n.y, this.mob.speed * e, !0);
      }
    }
    sweep(e) {
      ((this.nextSweep = this.t + this.mob.cd / 1e3 + 0.6),
        (this.sweepUntil = this.t + 0.6),
        (this.m.anim = 2.2));
      let t = {
        t: `cone`,
        x: this.m.rx,
        y: this.m.ry,
        a: e,
        spread: Bie,
        r: uV,
      };
      this.hitShape(
        t,
        0.6,
        `#c8b89a`,
        this.mob.dmg,
        (t) => {
          if (this.done) return;
          ((this.m.lunge = 0.25),
            (this.m.lungeDir = { x: Math.cos(e), y: Math.sin(e) }));
          let n = Math.cos(e) < 0,
            r = this.hand();
          this.pinned(
            this.bodyFx,
            n ? Wie() : mV(`sweep`, `Sweep`),
            r.x,
            r.y,
            n ? 42 : 10,
            24,
            n ? e - Math.PI : e,
            0.42,
            this.m.ry + 0.05,
          );
          let i = t
            ? { x: this.me.x, y: this.me.y - 0.4 }
            : {
                x: this.m.rx + Math.cos(e) * uV * 0.8,
                y: this.m.ry + Math.sin(e) * uV * 0.8,
              };
          (this.put(this.bodyFx, mV(`sweep`, `Chaff`), i.x, i.y, 0.42, {
            sort: i.y + 0.5,
          }),
            q.sfx(`hit`, 0.5));
        },
        this.look(`sweep`),
      );
    }
    thatchersHook(e) {
      let t = this.m,
        n = e?.a ?? this.angleToMe(),
        r = Math.cos(n),
        i = Math.sin(n),
        a = e?.x ?? t.rx,
        o = e?.y ?? t.ry,
        s = e?.len ?? 0;
      if (!e)
        for (
          let e = 0.25;
          e < 30 && !this.run.solid(t.rx + r * e, t.ry + i * e);
          e += 0.25
        )
          s = e;
      if (s < 1.5) return !1;
      (Math.abs(r) > 0.05 && (t.doc.facing = r < 0 ? -1 : 1),
        (this.hook = {
          line: { t: `line`, x0: a, y0: o, x1: a + r * s, y1: o + i * s, w: 1 },
          ux: r,
          uy: i,
          len: s,
          t0: this.t,
          s: 0,
          caught: 0,
          back: 0,
        }),
        this.run.say(this.name(), `Come here, then.`, 2),
        q.sfx(`cast`, 0.4));
    }
    hookTick() {
      let e = this.hook,
        t = this.me,
        n = this.t - e.t0;
      if (n < 1) return;
      if (e.caught) {
        let n = am((this.t - e.caught) / Vie),
          r = e.from.x + (e.to.x - e.from.x) * cm(n),
          i = e.from.y + (e.to.y - e.from.y) * cm(n);
        (this.run.canStand(r, i) && ((t.x = r), (t.y = i)),
          n >= 1 && (this.hook = null));
        return;
      }
      if (e.back) {
        ((e.s = e.len - (this.t - e.back) * dV),
          e.s <= 0 && (this.hook = null));
        return;
      }
      e.s = Math.min(e.len, (n - 1) * dV);
      let r = (t.x - e.line.x0) * e.ux + (t.y - e.line.y0) * e.uy;
      if (
        !this.hosted &&
        r >= 0 &&
        r <= e.s &&
        wf(e.line, t.x, t.y) &&
        !this.g.meDoc?.dead
      ) {
        ((e.caught = this.t), (e.from = { x: t.x, y: t.y }));
        let n = Math.atan2(t.y - this.m.ry, t.x - this.m.rx);
        ((e.to = {
          x: this.m.rx + Math.cos(n) * 1.3,
          y: this.m.ry + Math.sin(n) * 1.3,
        }),
          this.run.hitMe(this.mh() * 0.18, { heavy: !0 }),
          this.g.floater(t.x * 16, t.y * 16 - 36, `Hooked!`, `#c8b89a`, !0),
          q.sfx(`hurt`, 0.4),
          this.dragMarks(e.from, e.to, n));
        return;
      }
      e.s >= e.len && (e.back = this.t);
    }
    dragMarks(e, t, n) {
      let r = Gie(),
        i = Math.hypot(e.x - t.x, e.y - t.y) * 16;
      (this.pinned(this.groundFx, r, t.x, t.y, 4, 9, n, 1.2),
        i > 46 && this.pinned(this.groundFx, r, e.x, e.y, 50, 9, n, 1.2));
    }
    rally() {
      if (!this.standing()) return !1;
      let e = [...this.run.mobs.values()].filter(
        (e) =>
          e.m.doc.dead &&
          e.husk &&
          !e.boss &&
          e.kind !== `standard` &&
          !this.counts.has(e) &&
          this.inRoom(e.m.rx, e.m.ry),
      );
      if (!e.length) return !1;
      let t = this.standard;
      this.play(`rally`, `Roll call`, t.m.rx, t.m.ry, { dur: 0.8 });
      for (let t of e)
        (this.counts.set(t, { t0: this.t, was: t.risesAt }), (t.risesAt = 0));
      (this.run.say(this.name(), `Up, lads. We hold the line. REMEMBER US.`, 3),
        q.sfx(`chime`, 0.4));
    }
    toppled() {
      for (let [e, t] of this.counts)
        e.m.doc.dead && (e.risesAt = t.was ? Math.max(t.was, this.t + 2) : 0);
      this.counts.clear();
    }
    countTick() {
      if (!this.hosted)
        for (let [e, t] of this.counts) {
          if (!e.m.doc.dead) {
            this.counts.delete(e);
            continue;
          }
          if (this.t - t.t0 < Hie) continue;
          this.counts.delete(e);
          let n = () => {
            !this.done &&
              e.m.doc.dead &&
              ((e.m.doc.dead = !1),
              (e.m.doc.hp = e.m.doc.maxHp),
              (e.m.dying = 0),
              (e.state = `hunt`),
              (e.risesAt = 0));
          };
          (e.m.doc.kind === `barrowhusk`
            ? (this.put(this.bodyFx, mV(`rally`, `Rise`), e.m.rx, e.m.ry, 0.8, {
                ax: 14,
                ay: 25,
                sort: e.m.ry,
              }),
              this.after(0.8, n))
            : (n(), (e.m.rise = 1.1)),
            this.g.particles.burst(
              e.m.rx * 16,
              e.m.ry * 16 - 4,
              14,
              [yz, `#e0484e`, `#3a3024`],
              40,
            ));
        }
    }
    holdTheLine(e) {
      let t = e ? e.turn : this.angleToMe() + Math.PI / 2,
        n = e?.x ?? (this.m.rx + this.me.x) / 2,
        r = e?.y ?? (this.m.ry + this.me.y) / 2,
        i = {
          t: `line`,
          x0: n - Math.cos(t) * 2.5,
          y0: r - Math.sin(t) * 2.5,
          x1: n + Math.cos(t) * 2.5,
          y1: r + Math.sin(t) * 2.5,
          w: 1.3,
        },
        a = Math.atan2(Math.sin(t), Math.cos(t)),
        o = a > Math.PI / 2 ? a - Math.PI : a < -Math.PI / 2 ? a + Math.PI : a;
      ((this.rank = { cx: n, cy: r, a: o, t0: this.t }),
        (this.busyUntil = this.t + 1.9),
        this.after(1.4, () => {
          (this.run.meIn(i) && this.run.hitMe(this.mh() * 0.2, { heavy: !0 }),
            (this.g.shake = Math.max(this.g.shake, 4)),
            q.sfx(`boom`, 0.4));
        }),
        this.after(1.9, () => {
          for (let e of [-26, 26]) {
            let t = n + (Math.cos(o) * e) / 16,
              i = r + (Math.sin(o) * e) / 16;
            this.run.walkTile(Math.floor(t), Math.floor(i)) &&
              (this.hosted
                ? this.hostEvent({ name: `add`, x: t, y: i })
                : this.add(`pikehusk`, t, i));
          }
        }),
        this.after(2.2, () => (this.rank = null)),
        this.run.say(this.name(), `Hold the line!`, 2));
    }
    muster(e) {
      let t =
        e ??
        this.graves()
          .sort(() => Math.random() - 0.5)
          .slice(0, this.run.run.diff === `hollowed` ? 4 : 2);
      if (!t.length) {
        this.run.say(
          this.name(),
          `* He calls the roll. The burned graves don't answer.`,
          3,
        );
        return;
      }
      let n = this.look(`muster`, { tele: `Grave`, rim: !1 });
      for (let e of t) {
        let t = { x: e.x + 0.53, y: e.y + 0.44 };
        (this.answering.push({ x: e.x, y: e.y, t0: this.t }),
          this.run.telegraph(
            { t: `circle`, x: t.x, y: t.y, r: 0.7 },
            2,
            yz,
            () => {
              this.burnt.has(pV(e.x, e.y)) ||
                (this.put(
                  this.bodyFx,
                  mV(`muster`, `Claws`),
                  e.x + 0.5,
                  e.y + 0.6,
                  0.5,
                  { ax: 14, ay: 26, sort: e.y + 0.6 },
                ),
                this.after(0.5, () => {
                  !this.burnt.has(pV(e.x, e.y)) &&
                    !this.hosted &&
                    this.add(`barrowhusk`, e.x + 0.5, e.y + 0.6);
                }));
            },
            n,
          ));
      }
      this.run.say(
        this.name(),
        `* He calls the roll, and every open grave in the hall answers.`,
        3,
      );
    }
    onPhase(e) {
      e !== 1 || this.hosted || this.plant(this.spot(4));
    }
    plant(e) {
      ((this.busyUntil = this.t + 1.6),
        this.run.say(
          this.name(),
          `* Fenn takes the standard up again. REMEMBER US.`,
          4,
        ),
        this.hitShape(
          { t: `circle`, x: e.x, y: e.y, r: 1.5 },
          1.5,
          yz,
          { frac: 0.15 },
          () => {
            (this.hosted ||
              (this.standard && !this.standard.m.doc.dead
                ? ((this.standard.m.rx =
                    this.standard.m.fx0 =
                    this.standard.m.tx =
                      e.x),
                  (this.standard.m.ry =
                    this.standard.m.fy0 =
                    this.standard.m.ty =
                      e.y))
                : ((this.standard = this.add(`standard`, e.x, e.y, {
                    tier: `elite`,
                    object: !0,
                    hunt: !1,
                  })),
                  (this.standard.m.rise = 0),
                  (this.standard.onDeath = () => this.toppled()))),
              this.play(`plant`, `Plant`, e.x, e.y, {
                dur: 0.5,
                ax: 42,
                ay: 44,
              }),
              (this.planted = this.t),
              (this.g.shake = Math.max(this.g.shake, 6)),
              q.sfx(`boom`, 0.6));
          },
          this.look(`plant`, { tele: `Mark`, rim: !1 }),
        ));
    }
    tick(e) {
      if (
        (this.hook && this.hookTick(),
        this.countTick(),
        this.burnTick(),
        this.standard && this.run.run.diff === `hollowed`)
      ) {
        let e = this.run.inLight(this.standard.m.rx, this.standard.m.ry);
        (e && !this.lit && (this.litAt = this.t), (this.lit = e));
      }
      ((this.groundFx = this.groundFx.filter((e) => this.t - e.t0 < e.dur)),
        (this.bodyFx = this.bodyFx.filter((e) => this.t - e.t0 < e.dur)),
        (this.answering = this.answering.filter(
          (e) => this.t - e.t0 < 2.8 && !this.burnt.has(pV(e.x, e.y)),
        )));
    }
    burnTick() {
      if (!this.hosted) {
        for (let e of this.g.projectiles)
          e.mine &&
            e.school === `pyro` &&
            this.scorch(Math.floor(e.x), Math.floor(e.y + 0.4));
        for (let e of this.g.rifts) {
          if (!e.mine || e.school !== `pyro`) continue;
          let t = e.spell.radius ?? 1;
          for (let n = Math.floor(e.y - t); n <= e.y + t; n++)
            for (let r = Math.floor(e.x - t); r <= e.x + t; r++)
              Math.hypot(r + 0.5 - e.x, n + 0.5 - e.y) <= t &&
                this.scorch(r, n);
        }
      }
      for (let [e, t] of this.burning) {
        let n = e % 4096,
          r = Math.floor(e / 4096);
        (Math.random() < 0.6 &&
          this.g.particles.spawn({
            x: (n + 0.2 + Math.random() * 0.6) * 16,
            y: (r + 0.7) * 16,
            vz: 26 + Math.random() * 20,
            life: 0.5,
            size: 1,
            color: Math.random() < 0.5 ? fV[2] : fV[3],
            glow: !0,
          }),
          !(this.hosted || this.t - t < 1) &&
            (this.burning.delete(e),
            this.burnt.add(e),
            this.g.floater(
              (n + 0.5) * 16,
              r * 16 - 4,
              `Burned shut`,
              fV[3],
              !1,
            )));
      }
    }
    scorch(e, t) {
      let n = pV(e, t);
      this.burnt.has(n) ||
        this.burning.has(n) ||
        this.run.tile(e, t) !== Ao.SHALLOW ||
        !this.inRoom(e + 0.5, t + 0.5) ||
        this.burning.set(n, this.t);
    }
    hostTick(e) {
      (this.t < this.sweepUntil && (this.m.anim = 2.2),
        (this.engaged ||
          this.hook ||
          this.counts.size ||
          this.burning.size ||
          this.groundFx.length ||
          this.bodyFx.length) &&
          this.tick(e));
    }
    hostEvent(e) {
      let t = e.args ?? [],
        n = e.x ?? this.m.rx,
        r = e.y ?? this.m.ry;
      switch (e.name) {
        case `sweep`:
          this.sweep(t[0] ?? 0);
          break;
        case `reap`:
          this.thatchersHook({ a: t[0] ?? 0, len: t[1] ?? 0, x: n, y: r });
          break;
        case `hooked`: {
          let i = this.hook,
            a = { x: t[0] ?? n, y: t[1] ?? r },
            o = Math.atan2(a.y - this.m.ry, a.x - this.m.rx);
          if ((this.dragMarks(a, { x: n, y: r }, o), !i)) break;
          this.run.isMe(e.who)
            ? ((i.caught = this.t),
              (i.from = a),
              (i.to = { x: n, y: r }),
              this.g.floater(a.x * 16, a.y * 16 - 36, `Hooked!`, `#c8b89a`, !0),
              q.sfx(`hurt`, 0.4))
            : (i.back = this.t);
          break;
        }
        case `rally`:
          (this.findStandard(),
            this.play(`rally`, `Roll call`, n, r, { dur: 0.8 }));
          for (let e of t) {
            let t = this.run.hostMob(`zm:${e}`);
            t && this.counts.set(t, { t0: this.t, was: 0 });
          }
          (this.run.say(
            this.name(),
            `Up, lads. We hold the line. REMEMBER US.`,
            3,
          ),
            q.sfx(`chime`, 0.4));
          break;
        case `toppled`:
          this.counts.clear();
          break;
        case `counted`: {
          let e = this.run.hostMob(`zm:${t[0]}`);
          (e && this.counts.delete(e),
            t[1]
              ? this.put(this.bodyFx, mV(`rally`, `Rise`), n, r, 0.8, {
                  ax: 14,
                  ay: 25,
                  sort: r,
                })
              : e && (e.m.rise = 1.1),
            this.g.particles.burst(
              n * 16,
              r * 16 - 4,
              14,
              [yz, `#e0484e`, `#3a3024`],
              40,
            ));
          break;
        }
        case `line`:
          this.holdTheLine({ x: n, y: r, turn: t[0] ?? 0 });
          break;
        case `muster`: {
          let e = [];
          for (let n = 0; n + 1 < t.length; n += 2)
            e.push({ x: t[n], y: t[n + 1] });
          this.muster(e);
          break;
        }
        case `burning`:
          this.burning.set(pV(n, r), this.t);
          break;
        case `burnt`:
          (this.burning.delete(pV(n, r)),
            this.burnt.add(pV(n, r)),
            this.g.floater(
              (n + 0.5) * 16,
              r * 16 - 4,
              `Burned shut`,
              fV[3],
              !1,
            ));
          break;
        case `plant`:
          this.plant({ x: n, y: r });
          break;
        case `planted`:
          this.findStandard();
          break;
        case `glance`:
          ((this.glanceAt = this.t),
            this.g.floater(
              n * 16,
              r * 16 - 40,
              `Bring a light to it`,
              `#ffcf7a`,
              !1,
            ));
          break;
        default:
          super.hostEvent(e);
      }
    }
    onReset() {
      ((this.hook = null),
        (this.rank = null),
        this.counts.clear(),
        (this.answering = []),
        (this.groundFx = []),
        (this.bodyFx = []),
        (this.planted = -99),
        (this.busyUntil = this.nextSweep = this.sweepUntil = 0));
    }
    onEnd() {
      ((this.hook = null),
        (this.rank = null),
        this.counts.clear(),
        (this.answering = []));
    }
    hud() {
      let e = super.hud();
      return {
        ...e,
        title: this.standing() ? `${e.title} · The standard stands` : e.title,
      };
    }
    drawGround(e, t, n) {
      for (let r of [...this.burnt, ...this.burning.keys()]) {
        let i = (r % 4096) * 16 - t,
          a = Math.floor(r / 4096) * 16 - n;
        e.fillStyle = this.burning.has(r) ? fV[1] : `#1c1a1e`;
        for (let t = 5; t < 14; t++)
          for (let n = 3 + (t % 2); n < 13; n += 2)
            e.fillRect(i + n, a + t, 1, 1);
        for (let t = 0; t < 4; t++)
          ((e.fillStyle = fV[2 + ((t + Math.floor(this.t * 3)) % 2)]),
            e.fillRect(i + 4 + t * 2.5, a + 7 + (t % 2) * 3, 1, 1));
      }
      for (let r of this.groundFx) this.drawFx(e, r, t, n);
      let r = this.hook;
      if (r && this.t - r.t0 < 1) {
        let i = mV(`hook`, `Line`);
        i.length &&
          Wk(
            e,
            i,
            this.t - r.t0,
            r.line.x0 * 16 - t,
            r.line.y0 * 16 - n,
            r.line.x1 * 16 - t,
            r.line.y1 * 16 - n,
            { fps: 8 },
          );
      }
      let i = this.rank;
      if (i && this.t - i.t0 < 1.4) {
        let r = mV(`line`, `Rank`);
        r.length &&
          Uk(
            e,
            Rk(r, (this.t - i.t0) / 1.4),
            i.cx * 16 - t,
            i.cy * 16 - n,
            i.a,
          );
      }
    }
    collect(e, t, n, r) {
      for (let i of this.bodyFx) this.pushFx(e, i, t, n, r);
      let i = this.rank;
      if (i) {
        let a = (this.t - i.t0 - 1.2) / 0.7,
          o = Kie();
        if (a >= 0 && a < 1 && o.length >= 60) {
          let s = Math.min(5, Math.floor(a * 6));
          for (let a = 0; a < 10; a++) {
            let c = 12 + a * 8 - 48,
              l = i.cx * 16 + Math.cos(i.a) * c,
              u = i.cy * 16 + Math.sin(i.a) * c,
              d = o[s * 10 + a];
            e.push({
              y: u,
              x: l,
              box: bz(l, u, l - 4, u - 46, l + 4, u + 8),
              draw: () =>
                t.drawImage(d, Math.round(l - 4 - n), Math.round(u - 46 - r)),
            });
          }
        }
      }
      for (let e of this.answering) {
        let t = (this.t - e.t0) / 2;
        if (t < 0.3) continue;
        let i = t > 1.15 ? Math.max(0, 1 - (t - 1.15) / 0.25) : 1;
        this.g.lights.push({
          x: (e.x + 0.5) * 16 - n,
          y: (e.y + 0.55) * 16 - r,
          r: 10 + Math.min(1, t) * 16,
          color: yz,
          a: (0.25 + Math.min(1, t) * 0.55) * i,
          z: 4,
        });
      }
      for (let e of this.burning.keys())
        this.g.lights.push({
          x: ((e % 4096) + 0.5) * 16 - n,
          y: (Math.floor(e / 4096) + 0.6) * 16 - r,
          r: 28,
          color: fV[2],
          a: 0.8,
          z: 4,
        });
    }
    drawAfterLight(e, t, n) {
      let r = this.standing() ? this.standard : null;
      if (r) {
        let i = r.m.rx * 16 - t,
          a = r.m.ry * 16 - n;
        if (this.planted > 0) {
          let t = mV(`plant`, `Remember Us`),
            n = (this.t - this.planted) / 1.2;
          t.length &&
            Bk(
              e,
              n < 1
                ? Rk(t.slice(0, 5), n)
                : t[Math.floor(this.t * 4) % 4 == 0 ? 5 : 4],
              i,
              a,
            );
        }
        let o = mV(`plant`, `Finial`);
        if (
          (o.length &&
            (Gk(e, i, a - 38, 8, `#b84dff`, 0.35),
            Bk(e, zk(o, this.t, 6), i, a - 38, { ax: 8, ay: 10 })),
          this.run.run.diff === `hollowed`)
        ) {
          let t = mV(`plant`, `Hollowed: unlit`);
          if (t.length >= 6) {
            let n = (this.t - this.litAt) / 0.5;
            Bk(
              e,
              this.lit
                ? n < 1
                  ? t[3 + Math.min(1, Math.floor(n * 2))]
                  : t[5]
                : this.t - this.glanceAt < 0.3
                  ? t[this.t - this.glanceAt < 0.15 ? 1 : 2]
                  : t[0],
              i,
              a,
              { ax: 13, ay: 48 },
            );
          }
        }
        let s = mV(`rally`, `Thread`),
          c = mV(`rally`, `Count`);
        for (let [r, o] of this.counts)
          (s.length &&
            Wk(e, s, this.t, i, a - 2, r.m.rx * 16 - t, r.m.ry * 16 - 4 - n, {
              fps: 10,
              alpha: 0.85,
            }),
            c.length &&
              Bk(
                e,
                c[Math.min(7, Math.floor(this.t - o.t0))],
                r.m.rx * 16 - t,
                r.m.ry * 16 - n,
                { ax: 16, ay: 16 },
              ));
      }
      let i = this.hook;
      if (i && this.t - i.t0 >= 1) {
        let r = this.hand(),
          a = i.caught
            ? { x: this.me.x, y: this.me.y - 0.5 }
            : { x: i.line.x0 + i.ux * i.s, y: i.line.y0 + i.uy * i.s - 0.4 },
          o = mV(`hook`, `Twine`);
        o.length &&
          Wk(
            e,
            o,
            this.t,
            r.x * 16 - t,
            r.y * 16 - n,
            a.x * 16 - t,
            a.y * 16 - n,
            { fps: 12 },
          );
        let s = mV(`hook`, `Hook`),
          c = Math.atan2(a.y - r.y, a.x - r.x);
        s.length &&
          Uk(
            e,
            zk(s, this.t, 10),
            a.x * 16 - Math.cos(c) * 5 - t,
            a.y * 16 - Math.sin(c) * 5 - n,
            c,
          );
      }
    }
    collectHd(e, t, n, r) {
      let i = this.standing() ? this.standard : null;
      if (i) {
        let a = i.m.rx * 16,
          o = i.m.ry * 16,
          s = mV(`plant`, `Finial`);
        if (
          (s.length &&
            xz(e, t, zk(s, this.t, 6), a, o - 38, o + 1, n, r, {
              ax: 8,
              ay: 10,
            }),
          this.run.run.diff === `hollowed`)
        ) {
          let i = mV(`plant`, `Hollowed: unlit`);
          if (i.length >= 6) {
            let s = (this.t - this.litAt) / 0.5;
            xz(
              e,
              t,
              this.lit
                ? s < 1
                  ? i[3 + Math.min(1, Math.floor(s * 2))]
                  : i[5]
                : this.t - this.glanceAt < 0.3
                  ? i[this.t - this.glanceAt < 0.15 ? 1 : 2]
                  : i[0],
              a,
              o,
              o + 1.5,
              n,
              r,
              { ax: 13, ay: 48 },
            );
          }
        }
      }
      let a = this.hookAt(),
        o = mV(`hook`, `Hook`);
      a &&
        o.length &&
        xz(
          e,
          t,
          zk(o, this.t, 10),
          a.p.x * 16 - Math.cos(a.a) * 5,
          a.p.y * 16 - Math.sin(a.a) * 5,
          a.foot.y * 16 + 1,
          n,
          r,
          { angle: a.a },
        );
    }
    uprightsHd(e) {
      let t = this.standing() ? this.standard : null;
      t &&
        mV(`plant`, `Finial`).length &&
        Cz(e, t.m.rx * 16, t.m.ry * 16 + 2, 38, 8, `#b84dff`, 0.35);
    }
    drawAfterLightHd(e, t, n, r) {
      let i = this.standing() ? this.standard : null;
      if (i) {
        let a = i.m.rx * 16,
          o = i.m.ry * 16;
        if (this.planted > 0) {
          let t = mV(`plant`, `Remember Us`),
            i = (this.t - this.planted) / 1.2;
          t.length &&
            Bk(
              e.loose,
              i < 1
                ? Rk(t.slice(0, 5), i)
                : t[Math.floor(this.t * 4) % 4 == 0 ? 5 : 4],
              a - n,
              o - r,
            );
        }
        let s = mV(`rally`, `Thread`),
          c = mV(`rally`, `Count`);
        for (let [i, l] of this.counts)
          (s.length &&
            Tz(t, s, this.t, 10, a, o, 2, i.m.rx * 16, i.m.ry * 16, 4, {
              a: 0.85,
            }),
            c.length &&
              Bk(
                e.loose,
                c[Math.min(7, Math.floor(this.t - l.t0))],
                i.m.rx * 16 - n,
                i.m.ry * 16 - r,
                { ax: 16, ay: 16 },
              ));
      }
      let a = this.hookAt(),
        o = mV(`hook`, `Twine`);
      a &&
        o.length &&
        Tz(
          t,
          o,
          this.t,
          12,
          a.hd.x * 16,
          this.m.ry * 16,
          24,
          a.foot.x * 16,
          a.foot.y * 16,
          a.z,
        );
    }
  },
  Jie = class extends Ez {
    crackedUntil = 0;
    strain = 0;
    modify(e, t) {
      let n = Cs[this.g.school],
        r = this.crackedUntil > this.t;
      return n === `ember`
        ? (r ||
            this.g.floater(
              this.m.rx * 16,
              this.m.ry * 16 - 44,
              `The crown cracks!`,
              `#ff9a2a`,
              !0,
            ),
          (this.crackedUntil = this.t + 10),
          t)
        : r
          ? t
          : ((this.strain += t),
            this.strain >= this.m.doc.maxHp * 0.1 &&
              ((this.strain = 0),
              (this.crackedUntil = this.t + 8),
              this.g.floater(
                this.m.rx * 16,
                this.m.ry * 16 - 44,
                `The crown cracks!`,
                `#bff0ff`,
                !0,
              )),
            n === `rime` && e.kind === `bolt`
              ? (this.run.hitMe(t * 0.3),
                this.g.floater(
                  this.me.x * 16,
                  this.me.y * 16 - 40,
                  `Reflected!`,
                  `#bff0ff`,
                  !1,
                ),
                Math.round(t * 0.25))
              : Math.round(t * 0.5));
    }
    use(e) {
      if (
        (e === `swipe` &&
          this.hitShape(
            {
              t: `cone`,
              x: this.m.rx,
              y: this.m.ry,
              a: this.angleToMe(),
              spread: 1.8,
              r: 2.8,
            },
            1,
            `#bff0ff`,
            { frac: 0.22 },
          ),
        e === `roar`)
      ) {
        (this.run.say(
          this.name(),
          `* She roars. The grotto walls crawl. Her crown rings, and cracks.`,
          3,
        ),
          (this.crackedUntil = this.t + 8));
        for (let e = 0; e < 2; e++) {
          let e = this.spot(5);
          for (let t = 0; t < 2; t++)
            this.add(`glaciermite`, e.x + (t - 0.5) * 0.6, e.y + (t % 2) * 0.4);
        }
        this.run.run.diff === `hollowed` &&
          this.run.zone(
            {
              t: `rect`,
              x: this.room.x,
              y: this.room.y,
              w: this.room.w,
              h: this.room.h,
            },
            3,
            0.02,
            `#9fe8ff`,
          );
      }
    }
    hostEvent(e) {
      let t = e.args ?? [];
      if (e.name === `cracked`) {
        ((this.crackedUntil = this.t + (t[0] ?? 8)),
          this.g.floater(
            this.m.rx * 16,
            this.m.ry * 16 - 44,
            `The crown cracks!`,
            t[1] ? `#ff9a2a` : `#bff0ff`,
            !0,
          ));
        return;
      }
      if (e.name === `reflect`) {
        this.run.isMe(e.who) &&
          this.g.floater(
            this.me.x * 16,
            this.me.y * 16 - 40,
            `Reflected!`,
            `#bff0ff`,
            !1,
          );
        return;
      }
      if (e.name === `roar`) {
        (this.run.say(
          this.name(),
          `* She roars. The grotto walls crawl. Her crown rings, and cracks.`,
          3,
        ),
          (this.crackedUntil = this.t + 8));
        return;
      }
      super.hostEvent(e);
    }
    onReset() {
      this.crackedUntil = this.strain = 0;
    }
    hud() {
      return {
        ...super.hud(),
        title:
          this.crackedUntil > this.t
            ? `The crown is cracked`
            : `Crystal crown: half damage`,
      };
    }
    drawAfterLight(e, t, n) {
      this.crackedUntil > this.t ||
        ((e.globalAlpha = 0.5 + 0.2 * Math.sin(this.t * 4)),
        e.drawImage(
          Bp(`#bff0ff`, 14),
          Math.round(this.m.rx * 16 - 14 - t),
          Math.round(this.m.ry * 16 - 50 - n),
        ),
        (e.globalAlpha = 1));
    }
    drawAfterLightHd() {}
    uprightsHd(e) {
      this.crackedUntil > this.t ||
        Cz(
          e,
          this.m.rx * 16,
          this.m.ry * 16 + 1,
          36,
          14,
          `#bff0ff`,
          0.5 + 0.2 * Math.sin(this.t * 4),
        );
    }
  },
  vV = Math.PI * 2,
  yV = [`#071328`, `#123a6e`, `#2f7fd0`, `#6ac0ff`, `#e8f8ff`],
  Yie = new Set([
    `#1f4462`,
    `#3a6f96`,
    `#6ea6c8`,
    `#c4e4f2`,
    `#f2fbff`,
    `#03070d`,
    `#0a1624`,
    `#163049`,
    `#2a587c`,
  ]),
  Xie = 1.9,
  bV = 26,
  xV = 65,
  SV = 8,
  CV = 3.5,
  wV = 14;
