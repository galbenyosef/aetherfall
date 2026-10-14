// assets__index-BTsv3a2s 149 — run
// Lines 88338-88919 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var Ez = class {
    run;
    mob;
    def;
    kind;
    engaged = !1;
    done = !1;
    phaseI = 0;
    room;
    timers = {};
    cast = null;
    shield = null;
    adds = [];
    outside = 0;
    wind = 0;
    next = 0;
    home;
    hidden = !1;
    epoch = 0;
    hosted = !1;
    constructor(e, t) {
      ((this.run = e),
        (this.mob = t),
        (this.kind = t.kind),
        (this.def = Xo[t.kind]),
        (this.room = e.f.rooms[t.room]),
        (this.home = { x: t.m.rx, y: t.m.ry }));
    }
    get m() {
      return this.mob.m;
    }
    get g() {
      return this.run.g;
    }
    get me() {
      return this.g.me;
    }
    get t() {
      return this.run.now();
    }
    hp() {
      return this.m.doc.hp / this.m.doc.maxHp;
    }
    mh() {
      return this.run.maxHp();
    }
    name() {
      return Go[this.kind]?.name ?? this.kind;
    }
    inRoom(e, t, n = 0) {
      let r = this.room;
      return (
        e >= r.x - n && t >= r.y - n && e < r.x + r.w + n && t < r.y + r.h + n
      );
    }
    spot(e = 0) {
      let t = this.room;
      for (let n = 0; n < 60; n++) {
        let n = t.x + 1 + Math.floor(Math.random() * (t.w - 2)),
          r = t.y + 1 + Math.floor(Math.random() * (t.h - 2));
        if (
          this.run.walkTile(n, r) &&
          Math.hypot(n + 0.5 - this.me.x, r + 0.5 - this.me.y) >= e
        )
          return { x: n + 0.5, y: r + 0.5 };
      }
      return { ...this.home };
    }
    update(e) {
      if (this.done) return;
      let t = this.me;
      if (!this.engaged) {
        this.inRoom(t.x, t.y, -0.5) && !this.g.meDoc?.dead && this.engage();
        return;
      }
      if (!this.inRoom(t.x, t.y, 5)) {
        ((this.outside += e),
          this.outside > ko.bossResetSeconds && this.reset());
        return;
      }
      this.outside = 0;
      let n = this.hp(),
        r = this.def.phases.findIndex(
          (e) => n <= e.from + 1e-6 && n > e.to - 1e-6,
        );
      if ((r < 0 && (r = this.def.phases.length - 1), r > this.phaseI)) {
        this.phaseI = r;
        let e = this.def.phases[r];
        (this.onPhase(r),
          (this.g.banner = {
            title: e.name,
            subtitle: e.desc,
            t0: this.g.real,
            dur: 4,
            color: `#ffd166`,
          }));
        for (let t of e.abilities)
          t in this.timers || (this.timers[t] = this.t + 2 + Math.random() * 3);
      }
      let i = this.cast;
      if (
        (i && this.t >= i.t0 + i.dur && ((this.cast = null), i.end(!1)),
        !this.cast)
      ) {
        let e = this.def.phases[this.phaseI];
        for (let t of e.abilities) {
          let e = this.def.abilities.find((e) => e.id === t);
          if (
            !(!e || e.every <= 0) &&
            this.t >= (this.timers[t] ?? 0) &&
            this.use(t) !== !1
          ) {
            this.timers[t] = this.t + this.every(t, e.every);
            break;
          }
        }
      }
      (this.tick(e),
        !this.cast && !this.hidden && this.move(e),
        (this.m.fx0 = this.m.tx = this.m.rx),
        (this.m.fy0 = this.m.ty = this.m.ry));
    }
    engage() {
      ((this.engaged = !0),
        (this.phaseI = 0),
        (this.outside = 0),
        this.run.say(this.name(), this.def.intro, 7),
        (this.g.banner = {
          title: this.name(),
          subtitle: this.def.phases[0].desc,
          t0: this.g.real,
          dur: 4.5,
          color: `#ff9a2a`,
        }),
        q.sfx(`boom`, 0.6));
      for (let e of this.def.phases[0].abilities)
        this.timers[e] = this.t + 2.5 + Math.random() * 3;
      this.onEngage();
    }
    reset() {
      ((this.engaged = !1),
        (this.phaseI = 0),
        (this.cast = null),
        (this.shield = null),
        (this.hidden = !1),
        (this.m.doc.hp = this.m.doc.maxHp),
        (this.m.rx = this.home.x),
        (this.m.ry = this.home.y),
        (this.m.ghost = this.mob.ghost),
        (this.timers = {}));
      for (let e of this.adds)
        ((e.m.doc.dead = !0),
          this.g.monsters.delete(e.id),
          this.run.mobs.delete(e.id));
      ((this.adds = []),
        (this.run.tele = []),
        (this.run.zones = []),
        (this.run.beams = []),
        (this.run.lobs = []),
        this.epoch++,
        this.onReset());
    }
    leftRoom(e) {}
    onHit(e, t) {
      if (this.hidden) return 0;
      if (this.shield)
        return (
          this.g.floater(
            this.m.rx * 16,
            this.m.ry * 16 - 40,
            this.shield,
            `#e0b64a`,
            !1,
          ),
          0
        );
      this.engaged || this.engage();
      let n = this.modify(e, t);
      if (
        (this.cast && (this.cast.dealt += n),
        this.cast && this.cast.need > 0 && this.cast.dealt >= this.cast.need)
      ) {
        let e = this.cast;
        ((this.cast = null),
          (this.g.banner = {
            title: `BROKEN`,
            subtitle: `${e.label} breaks`,
            t0: this.g.real,
            dur: 2.5,
            color: `#7ef9ff`,
          }),
          q.sfx(`chime`, 0.9),
          (this.g.flash = { color: `#ffffff`, a: 0.35 }),
          e.end(!0));
      }
      return n;
    }
    onDeath() {
      ((this.done = !0),
        this.epoch++,
        (this.cast = null),
        (this.shield = null),
        (this.run.tele = []),
        (this.run.zones = this.run.zones.filter(
          (e) => !this.inRoom(e.shape.x ?? -99, e.shape.y ?? -99),
        )));
      for (let e of this.adds)
        e.m.doc.dead ||
          ((e.m.doc.dead = !0), (e.m.dying = 0.5), this.g.monsterDeath(e.m));
      (this.onEnd(), this.run.bossDown(this.kind, this.m.rx, this.m.ry));
    }
    begin(e, t, n, r, i) {
      this.cast = {
        label: e,
        hint: t,
        t0: this.t,
        dur: n,
        dealt: 0,
        need: r > 0 ? this.m.doc.maxHp * r : 0,
        end: i,
      };
    }
    hud() {
      let e = this.cast;
      return {
        name: this.name(),
        title: this.def.phases[this.phaseI]?.name ?? ``,
        hp: this.m.doc.hp,
        max: this.m.doc.maxHp,
        shielded: !!this.shield || this.hidden,
        shieldText: this.hidden ? `Under the ice` : (this.shield ?? void 0),
        cast: e
          ? {
              label: e.label,
              k: Math.min(1, (this.t - e.t0) / e.dur),
              hint: e.hint,
            }
          : null,
      };
    }
    move(e) {
      let t = this.mob,
        n = this.me,
        r = n.x - this.m.rx,
        i = n.y - this.m.ry,
        a = Math.hypot(r, i);
      if (
        (Math.abs(r) > 0.05 && (this.m.doc.facing = r < 0 ? -1 : 1),
        this.wind > 0)
      ) {
        this.wind -= e;
        return;
      }
      if (a <= t.range + 0.2 && this.t >= this.next) {
        ((this.next = this.t + t.cd / 1e3), (this.wind = 0.6));
        let e = Math.atan2(i, r);
        ((this.m.lunge = 0.25),
          (this.m.lungeDir = { x: r / (a || 1), y: i / (a || 1) }),
          this.hitShape(
            {
              t: `cone`,
              x: this.m.rx,
              y: this.m.ry,
              a: e,
              spread: 1.4,
              r: t.range + 0.9,
            },
            0.55,
            `#ff5a4a`,
            t.dmg,
          ));
        return;
      }
      if (a > t.range * 0.8) {
        if (!this.inRoom(n.x, n.y, 0) && !this.inRoom(this.m.rx, this.m.ry, -1))
          return;
        this.run.step(t, n.x, n.y, t.speed * e, !0);
      }
    }
    hitShape(e, t, n, r, i, a) {
      this.run.telegraph(
        e,
        t,
        n,
        () => {
          if (this.done) return;
          let t = this.run.meIn(e);
          (t &&
            this.run.hitMe(typeof r == `number` ? r : this.mh() * r.frac, {
              heavy: typeof r != `number`,
            }),
            i?.(t));
        },
        a,
      );
    }
    add(e, t, n, r = {}) {
      let i = this.run.spawn(e, t, n, {
        tier: r.tier ?? `normal`,
        room: this.room.index,
        level: this.mob.level,
        summoned: !0,
        hunt: r.hunt ?? !0,
        object: r.object,
      });
      return (
        r.hp && (i.m.doc.hp = i.m.doc.maxHp = Math.round(i.m.doc.maxHp * r.hp)),
        (i.m.rise = 0.8),
        this.adds.push(i),
        this.g.particles.burst(
          t * 16,
          n * 16 - 8,
          20,
          [yz, `#ffffff`, `#3a0a18`],
          60,
        ),
        i
      );
    }
    guards(e) {
      return this.adds.includes(e);
    }
    onAddHit(e, t, n) {
      return (this.run.aggro(e), n);
    }
    hostState(e) {
      let t = this.g,
        n = !!e.engaged;
      (n &&
        !this.engaged &&
        ((t.banner = {
          title: this.name(),
          subtitle: this.def.phases[0].desc,
          t0: t.real,
          dur: 4.5,
          color: `#ff9a2a`,
        }),
        q.sfx(`boom`, 0.6),
        this.onEngage()),
        !n && this.engaged && this.onReset(),
        (this.engaged = n));
      let r = e.phase ?? 0;
      if (n && r > this.phaseI) {
        let e = this.def.phases[r];
        (this.onPhase(r),
          e &&
            (t.banner = {
              title: e.name,
              subtitle: e.desc,
              t0: t.real,
              dur: 4,
              color: `#ffd166`,
            }));
      }
      this.phaseI = n ? r : 0;
      let i = e.cast;
      ((this.cast = i
        ? {
            label: i.label,
            hint: i.hint,
            t0: this.t - i.at,
            dur: i.dur,
            dealt: i.dealt,
            need: i.need,
            end: () => {},
          }
        : null),
        (this.shield = e.shield || null),
        (this.hidden = !!e.hidden));
    }
    hostEvent(e) {
      (e.name === `boom` && q.sfx(`boom`, 0.4),
        e.name === `add` &&
          e.x !== void 0 &&
          e.y !== void 0 &&
          this.g.particles.burst(
            e.x * 16,
            e.y * 16 - 8,
            20,
            [yz, `#ffffff`, `#3a0a18`],
            60,
          ));
    }
    hostTick(e) {}
    hostLook(e) {}
    every(e, t) {
      return t * (this.run.run.diff === `hollowed` ? 0.85 : 1);
    }
    use(e) {}
    modify(e, t) {
      return t;
    }
    tick(e) {}
    onPhase(e) {}
    onEngage() {}
    onReset() {}
    onEnd() {}
    targets() {
      return [];
    }
    collect(e, t, n, r) {}
    collectIdle(e, t, n, r) {
      this.collect(e, t, n, r);
    }
    drawAfterLight(e, t, n) {}
    drawGround(e, t, n) {}
    drawFloor(e, t, n) {}
    drawAfterLightHd(e, t, n, r) {
      this.drawAfterLight(e.loose, n, r);
    }
    drawFloorHd(e, t, n) {
      this.drawFloor(e.ground, t, n);
    }
    collectHd(e, t, n, r) {}
    uprightsHd(e) {}
    linesHd(e) {}
    strip(e, t) {
      let n = Jk(this.kind);
      return n ? Lk(n, e, t) : null;
    }
    look(e, t = {}) {
      let n = qk[Jk(this.kind) ?? ``],
        r = {};
      return (
        t.rim !== !1 &&
          (t.rim || n) &&
          ((r.rim = t.rim || n.rim), (r.ramp = t.ramp ?? n?.ramp ?? rm.hollow)),
        t.tele && (r.tele = this.strip(e, t.tele)),
        t.frames && (r.frames = this.strip(e, t.frames)),
        t.sprite && (r.sprite = this.strip(e, t.sprite)),
        t.impact && (r.impact = this.strip(e, t.impact)),
        r
      );
    }
    play(e, t, n, r, i = {}) {
      this.run.fx.add(this.strip(e, t), n, r, i);
    }
    after(e, t) {
      let n = this.epoch;
      this.run.later(e, () => {
        this.epoch === n && !this.done && t();
      });
    }
    fan(e, t, n, r, i, a, o, s, c = {}) {
      for (let l = 0; l < r; l++) {
        let u = n + (r > 1 ? (l / (r - 1) - 0.5) * i : 0);
        this.run.shoot(
          { x: e, y: t },
          { x: e + Math.cos(u), y: t + Math.sin(u) },
          this.mh() * o,
          s,
          c.core ?? `#ffffff`,
          a,
          c,
        );
      }
    }
    ringOut(e, t, n, r, i, a, o, s = {}) {
      for (let c = 0; c < n; c++) {
        let l = r + (c / n) * Math.PI * 2;
        this.run.shoot(
          { x: e, y: t },
          { x: e + Math.cos(l), y: t + Math.sin(l) },
          this.mh() * a,
          o,
          s.core ?? `#ffffff`,
          i,
          s,
        );
      }
    }
    atMe(e, t, n, r, i) {
      let a = { t: `circle`, x: this.me.x, y: this.me.y, r: e };
      return (this.hitShape(a, t, n, { frac: r }, i), a);
    }
    angleToMe() {
      return Math.atan2(this.me.y - this.m.ry, this.me.x - this.m.rx);
    }
    lineThroughMe(e) {
      let t = this.angleToMe(),
        n = Math.max(this.room.w, this.room.h);
      return {
        t: `line`,
        x0: this.m.rx,
        y0: this.m.ry - 0.3,
        x1: this.m.rx + Math.cos(t) * n,
        y1: this.m.ry - 0.3 + Math.sin(t) * n,
        w: e,
      };
    }
    blinkTo(e, t, n) {
      let r = this.g;
      (r.particles.burst(
        this.m.rx * 16,
        this.m.ry * 16 - 16,
        30,
        [n, `#ffffff`, `#12050a`],
        90,
      ),
        (this.m.rx = e),
        (this.m.ry = t),
        r.particles.burst(
          e * 16,
          t * 16 - 16,
          30,
          [n, `#ffffff`, `#12050a`],
          90,
        ),
        q.sfx(`blink`, 0.6));
    }
    roomTiles(e) {
      let t = [],
        n = this.room;
      for (let r = n.y; r < n.y + n.h; r++)
        for (let i = n.x; i < n.x + n.w; i++)
          e(this.run.tile(i, r), i, r) && t.push({ x: i, y: r });
      return t;
    }
  },
  Ire = class extends Ez {
    use(e) {
      let t = this.room;
      if (e === `turn`) {
        let e = this.me.x < t.x + t.w / 2,
          n = this.me.y < t.y + t.h / 2,
          r = {
            t: `rect`,
            x: e ? t.x : t.x + t.w / 2,
            y: n ? t.y : t.y + t.h / 2,
            w: t.w / 2,
            h: t.h / 2,
          };
        (this.run.telegraph(r, 1.5, `#2f9c78`, () => {
          ((this.run.zones = this.run.zones.filter((e) => e.label !== `flood`)),
            this.run.zone(
              r,
              12,
              this.run.run.diff === `hollowed` ? 0.08 : 0.05,
              `#2f9c78`,
              { slow: 0.3, label: `flood` },
            ),
            q.sfx(`boom`, 0.4));
        }),
          this.run.say(
            this.name(),
            `* The wheel turns. Runoff floods one side of the vault.`,
            3,
          ));
      }
      e === `stamp` &&
        this.hitShape(
          {
            t: `cone`,
            x: this.m.rx,
            y: this.m.ry,
            a: this.angleToMe(),
            spread: 1.6,
            r: 2.6,
          },
          1,
          `#e0b64a`,
          { frac: 0.18 },
        );
    }
  },
  Dz = `#120b1a`,
  Oz = `#7ef9ff`,
  kz = `#ffffff`,
  Y = {
    black: `#12050a`,
    deep: `#3a0a18`,
    dark: `#5a0a1a`,
    mid: `#861222`,
    red: `#b01a2a`,
    hot: `#e0484e`,
    core: `#ffffff`,
  },
  Az =
    (e) =>
    (t, n, r, i = 1, a = 1) =>
      N(e, t, n, r, i, a),
  jz = new Map();
