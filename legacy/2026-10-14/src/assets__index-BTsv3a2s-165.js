// assets__index-BTsv3a2s 165 — math
// Lines 95074-95992 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var cae = class extends Ez {
    isles = [];
    pins = [];
    busyUntil = 0;
    ventUntil = 0;
    vent = null;
    lava = null;
    burn = 0;
    bubbleT = 0;
    returned = !1;
    cinders = [];
    crusts = [];
    clutches = new Set();
    patterns = new WeakMap();
    floor = null;
    onHer(e) {
      return {
        x: this.m.rx * 16 + (this.m.doc.facing < 0 ? -e.x - 1 : e.x),
        y: this.m.ry * 16 + e.y,
      };
    }
    art(e, t) {
      return this.strip(e, t) ?? [];
    }
    hollowed() {
      return this.run.run.diff === `hollowed`;
    }
    face(e) {
      Math.abs(e - this.m.rx) > 0.05 &&
        (this.m.doc.facing = e < this.m.rx ? -1 : 1);
    }
    inIsle(e, t, n) {
      return t >= e.x && t <= e.x + e.w && n >= e.y && n <= e.y + e.h;
    }
    onIsland(e, t) {
      return this.isles.some((n) => !n.sunk && this.inIsle(n, e, t));
    }
    flooded() {
      if (!this.lava) return null;
      let e = this.t - this.lava.t0 - LV;
      return e >= 0 && e < zV ? e : null;
    }
    pin(e, t, n, r, i, a = !1, o) {
      e.length &&
        this.pins.push({
          frames: e,
          t0: this.t,
          dur: t,
          at: n,
          ax: r,
          ay: i,
          ground: a,
          foot: o,
        });
    }
    feet = () => this.m.ry * 16;
    drawPins(e, t, n, r) {
      this.pins = this.pins.filter((e) => this.t < e.t0 + e.dur);
      for (let i of this.pins) {
        if (i.ground !== r) continue;
        let a = i.at();
        a &&
          Bk(e, Rk(i.frames, (this.t - i.t0) / i.dur), a.x - t, a.y - n, {
            ax: i.ax,
            ay: i.ay,
          });
      }
    }
    onEngage() {
      let e = this.room,
        t = e.x + Math.floor(e.w / 2),
        n = e.y + Math.floor(e.h / 2),
        r = new Map();
      for (let i of this.roomTiles(
        (r, i, a) =>
          r === Ao.FLOOR &&
          i > e.x &&
          a > e.y &&
          i < e.x + e.w - 1 &&
          a < e.y + e.h - 1 &&
          Math.abs(i - t) > 1 &&
          Math.abs(a - n) > 1,
      )) {
        let e = (i.x < t ? 0 : 1) + (i.y < n ? 0 : 2);
        (r.has(e) || r.set(e, []), r.get(e).push(i));
      }
      ((this.isles = [...r.values()].map((e) => {
        let t = Math.min(...e.map((e) => e.x)),
          n = Math.min(...e.map((e) => e.y));
        return {
          x: t,
          y: n,
          w: Math.max(...e.map((e) => e.x)) + 1 - t,
          h: Math.max(...e.map((e) => e.y)) + 1 - n,
          sunk: !1,
          doom: 0,
          sank: 0,
          back: 0,
        };
      })),
        (this.floor = new Path2D()));
      for (let e of this.roomTiles(
        (e, t, n) =>
          e !== Ao.DEEP &&
          e !== Ao.WALL &&
          e !== Ao.VOID &&
          !this.isles.some(
            (e) => t >= e.x && n >= e.y && t < e.x + e.w && n < e.y + e.h,
          ),
      ))
        this.floor.rect(e.x * 16, e.y * 16, 16, 16);
      this.clear();
    }
    onReset() {
      for (let e of this.isles)
        Object.assign(e, { sunk: !1, doom: 0, sank: 0, back: 0 });
      this.clear();
    }
    onEnd() {
      this.clear();
    }
    clear() {
      ((this.pins = []),
        (this.vent = null),
        (this.ventUntil = 0),
        (this.lava = null),
        (this.cinders = []),
        (this.crusts = []),
        (this.returned = !1),
        (this.busyUntil = 0),
        this.clutches.clear());
    }
    modify(e, t) {
      return Math.round(t * (this.ventUntil > this.t ? 1.5 : 0.6));
    }
    use(e) {
      if (
        (e === `rise` && this.rise(),
        e === `lay` && this.lay(),
        e === `vent` || e === `breath` || e === `manaburn`)
      ) {
        if (this.t < this.busyUntil) return !1;
        (e === `vent` && this.ventGrate(),
          e === `breath` && this.breath(),
          e === `manaburn` && this.spit());
      }
    }
    spit() {
      (this.spitUp(this.me.x),
        this.after(1, () => {
          let e = this.onHer(FV),
            t = this.phaseI >= 1,
            n = this.me;
          (this.run.shoot(
            { x: e.x / 16, y: e.y / 16 },
            { x: n.x, y: n.y - 0.4 },
            t ? 0 : this.mh() * 0.1,
            `#3a0a18`,
            `#ffffff`,
            6,
            {
              look: this.look(`spit`, { sprite: `Spit` }),
              onHit: () => {
                t &&
                  ((this.g.mana = Math.max(
                    0,
                    this.g.mana - this.g.maxMana() * 0.2,
                  )),
                  this.manaBurned());
              },
            },
          ),
            q.sfx(`cast`, 0.4));
        }));
    }
    spitUp(e) {
      ((this.busyUntil = this.t + 1.1),
        this.face(e),
        this.pin(
          this.art(`spit`, `Wind-up`),
          1,
          () => this.onHer(FV),
          12,
          12,
          !1,
          this.feet,
        ));
    }
    manaBurned() {
      let e = this.me;
      (this.g.floater(e.x * 16, e.y * 16 - 30, `Mana burned`, `#8ab4ff`, !1),
        this.pin(
          this.art(`spit`, `Mana burn`),
          0.6,
          () => ({ x: this.me.x * 16, y: this.me.y * 16 - 12 }),
          14,
          17,
          !1,
          () => this.me.y * 16,
        ));
    }
    breath() {
      (this.draught(this.me.x),
        this.after(0.9, () => {
          let e = this.onHer(FV).x / 16,
            t = this.m.ry + 0.2,
            n = this.me;
          this.release(
            e,
            t,
            Math.atan2(n.y - t, n.x - e),
            Math.max(2.5, Math.min(6.5, Math.hypot(n.x - e, n.y - t))),
          );
        }));
    }
    draught(e) {
      ((this.busyUntil = this.t + 1.3), this.face(e));
      let t = this.m.doc.facing < 0,
        n = this.art(`breath`, `Draught`);
      this.pin(
        t ? HV(n) : n,
        1.12,
        () => this.onHer(FV),
        t ? (n[0]?.width ?? 32) - 6 : 5,
        12,
        !1,
        this.feet,
      );
    }
    release(e, t, n, r) {
      let i = (70 * Math.PI) / 180,
        a = this.m.ry * 16 - this.onHer(FV).y;
      for (let o = 0; o < 5; o++)
        this.cinders.push({
          x: e,
          y: t,
          a: n + (o / 4 - 0.5) * i,
          d: 0,
          L: r,
          h: a,
        });
      q.sfx(`cast`, 0.5);
    }
    ventGrate() {
      ((this.busyUntil = this.t + 2.7), this.face(this.me.x));
      let e = this.onHer(IV),
        t = { x: e.x / 16, y: e.y / 16 },
        n =
          Math.round(Math.atan2(this.me.y - t.y, this.me.x - t.x) / (PV / 32)) *
          (PV / 32);
      this.vent = { t0: this.t, a: n, o: t };
      let r = { t: `cone`, x: t.x, y: t.y, a: n, spread: 1.4, r: 3.4 };
      this.hitShape(r, 2, `transparent`, { frac: 0.2 }, () =>
        this.vented(t, n),
      );
    }
    vented(e, t) {
      this.ventUntil = this.t + 6;
      let n = {
        x: e.x + (Math.cos(t) * BV) / 16,
        y: e.y + (Math.sin(t) * BV) / 16,
      };
      (this.run.fx.add(this.art(`vent`, `Furnace blast`), n.x, n.y, {
        dur: 0.6,
        angle: t,
      }),
        (this.g.shake = Math.max(this.g.shake, 6)),
        q.sfx(`boom`, 0.7),
        this.run.say(this.name(), `* Her grate hangs open. Hit her now!`, 3));
    }
    lay() {
      let e = this.isles.filter((e) => !e.sunk && !e.doom);
      for (let t = 0; t < (this.hollowed() ? 2 : 1) && e.length; t++) {
        let t = e.splice(Math.floor(Math.random() * e.length), 1)[0],
          n = {
            x: t.x + 0.8 + Math.random() * (t.w - 1.6),
            y: t.y + 0.9 + Math.random() * (t.h - 1.4),
          },
          r = this.onHer(IV);
        this.egg({ x: r.x / 16, y: r.y / 16 }, n, () => {
          if (this.done) return;
          this.landed(n);
          let e = this.run.spawn(`clutch`, n.x, n.y, {
            tier: `normal`,
            room: this.room.index,
            level: this.mob.level,
            summoned: !0,
            hunt: !1,
            object: !0,
          });
          (this.adds.push(e), this.clutches.add(e));
        });
      }
    }
    egg(e, t, n) {
      (this.run.telegraph(
        { t: `circle`, x: t.x, y: t.y, r: 0.6 },
        1,
        `#ff7a1a`,
        void 0,
        this.look(`lay`, { ramp: rae }),
      ),
        this.run.lob(this.art(`lay`, `Egg`), e.x, e.y, t.x, t.y, 1, {
          h: 2.6,
          spin: !0,
          land: n,
        }));
    }
    landed(e) {
      (this.run.fx.add(this.art(`lay`, `Land`), e.x, e.y, {
        dur: 0.5,
        ax: 16,
        ay: 18,
      }),
        q.sfx(`boom`, 0.3));
    }
    rise() {
      let e = null;
      if (
        this.hollowed() &&
        this.hp() > 0.3 &&
        this.isles.filter((e) => !e.sunk).length > 1
      ) {
        let t = this.me;
        e = this.isles
          .filter((e) => !e.sunk)
          .sort(
            (e, n) =>
              Math.hypot(e.x + e.w / 2 - t.x, e.y + e.h / 2 - t.y) -
              Math.hypot(n.x + n.w / 2 - t.x, n.y + n.h / 2 - t.y),
          )[0];
      }
      (this.rising(e),
        this.after(LV, () => {
          (this.flood(e),
            this.onIsland(this.me.x, this.me.y) ||
              this.run.hitMe(this.mh() * 0.25, { heavy: !0 }));
        }));
    }
    rising(e) {
      ((this.lava = { t0: this.t }),
        this.run.say(this.name(), `* The lava is rising. Get to an island!`, 3),
        e && (e.doom = this.t));
    }
    flood(e) {
      (q.sfx(`boom`, 0.9),
        (this.g.shake = Math.max(this.g.shake, 10)),
        e && ((e.sunk = !0), (e.doom = 0), (e.sank = this.t)));
    }
    comeBack() {
      this.returned = !0;
      for (let e of this.isles)
        e.sunk &&
          ((e.back = this.t),
          this.after(1.2, () => Object.assign(e, { sunk: !1, back: 0 })));
    }
    every(e, t) {
      return super.every(e, e === `rise` && this.phaseI === 1 ? 22 : t);
    }
    tick(e) {
      let t = this.me,
        n = this.flooded(),
        r = this.isles.some(
          (e) => e.sunk && !e.back && this.inIsle(e, t.x, t.y),
        );
      ((n !== null && !this.onIsland(t.x, t.y)) || r
        ? ((this.burn += e),
          this.burn > 0.5 &&
            ((this.burn = 0), this.run.hitMe(this.mh() * 0.03)))
        : (this.burn = 0),
        this.lava && this.t - this.lava.t0 > 12.5 && (this.lava = null),
        !this.hosted &&
          this.hollowed() &&
          !this.returned &&
          this.hp() <= 0.3 &&
          this.comeBack());
      for (let t of this.cinders)
        if (
          ((t.x += Math.cos(t.a) * 3.5 * e),
          (t.y += Math.sin(t.a) * 3.5 * e),
          (t.d += 3.5 * e),
          t.d >= t.L || this.run.solid(t.x, t.y))
        ) {
          t.d = t.L = -1;
          let e = { t: `rect`, x: t.x - 0.62, y: t.y - 0.31, w: 1.25, h: 0.62 };
          (this.hosted ||
            this.run.zone(e, 6, 0.02, `transparent`, { label: `crust` }),
            this.crusts.push({ x: t.x, y: t.y, t0: this.t }));
        }
      this.cinders = this.cinders.filter((e) => e.L >= 0);
      for (let e of this.cinders)
        this.g.lights.push({
          x: e.x * 16 - this.run.camX,
          y: e.y * 16 - e.h * (1 - e.d / e.L) - this.run.camY,
          r: 18,
          color: `#ff7a1a`,
          a: 0.6,
          z: e.h * (1 - e.d / e.L),
        });
      this.crusts = this.crusts.filter((e) => this.t - e.t0 < 6);
      for (let e of this.clutches)
        e.m.doc.dead &&
          (this.clutches.delete(e),
          e.heat >= 20 &&
            this.run.fx.add(this.art(`lay`, `Hatch`), e.m.rx, e.m.ry, {
              dur: 0.6,
              ax: 12,
              ay: 18,
            }));
      if (n !== null && n > RV)
        for (this.bubbleT -= e; this.bubbleT <= 0;) {
          this.bubbleT += 0.05;
          let e = this.room,
            t = e.x + Math.random() * e.w,
            n = e.y + 0.5 + Math.random() * (e.h - 0.5);
          this.onIsland(t, n) ||
            this.pin(
              this.art(`rise`, `Bubble`),
              0.5,
              () => ({ x: t * 16, y: n * 16 }),
              6,
              8,
              !0,
            );
        }
    }
    hostTick(e) {
      (this.engaged || this.cinders.length || this.lava) && this.tick(e);
    }
    hostEvent(e) {
      let t = e.args ?? [],
        n = { x: e.x ?? this.m.rx, y: e.y ?? this.m.ry };
      switch (e.name) {
        case `spit`:
          this.spitUp(n.x);
          break;
        case `spat`:
          (this.run.shoot(
            n,
            { x: t[0] ?? this.me.x, y: t[1] ?? this.me.y },
            0,
            `#3a0a18`,
            `#ffffff`,
            6,
            { look: this.look(`spit`, { sprite: `Spit` }) },
          ),
            q.sfx(`cast`, 0.4));
          break;
        case `manaburn`:
          this.run.isMe(e.who) && this.manaBurned();
          break;
        case `breath`:
          this.draught(n.x);
          break;
        case `cinders`:
          this.release(n.x, n.y, t[0] ?? 0, t[1] ?? 2.5);
          break;
        case `vent`:
          ((this.busyUntil = this.t + 2.7),
            (this.vent = { t0: this.t, a: t[0] ?? 0, o: n }));
          break;
        case `vented`:
          this.vented(n, t[0] ?? 0);
          break;
        case `lay`:
          this.egg(n, { x: t[0] ?? n.x, y: t[1] ?? n.y });
          break;
        case `laid`:
          this.landed(n);
          break;
        case `rise`:
          this.rising(this.isles[t[0] ?? -1] ?? null);
          break;
        case `flood`:
          this.flood(this.isles.find((e) => e.doom) ?? null);
          break;
        case `isles`:
          this.comeBack();
          break;
        case `hatch`:
          this.inRoom(n.x, n.y, 0) &&
            this.run.fx.add(this.art(`lay`, `Hatch`), n.x, n.y, {
              dur: 0.6,
              ax: 12,
              ay: 18,
            });
          break;
        default:
          super.hostEvent(e);
      }
    }
    move(e) {
      let t = this.me;
      if (
        !(this.t < this.busyUntil) &&
        (this.face(t.x), Math.hypot(t.x - this.m.rx, t.y - this.m.ry) > 3)
      ) {
        if (!this.inRoom(t.x, t.y, 0)) return;
        (this.run.step(this.mob, t.x, t.y, this.mob.speed * e, !0),
          this.face(t.x));
      }
    }
    hud() {
      return {
        ...super.hud(),
        title:
          this.ventUntil > this.t
            ? `Her grate is open: +50% damage!`
            : `Kiln-brick hide: 60% damage`,
      };
    }
    pat(e, t) {
      let n = this.patterns.get(t);
      return (n || this.patterns.set(t, (n = e.createPattern(t, `repeat`))), n);
    }
    lay32(e, t, n, r, i, a = {}) {
      if (!t) return;
      let o = a.only ?? this.room;
      if (
        (e.save(),
        a.alpha !== void 0 &&
          (e.globalAlpha = Math.max(0, Math.min(1, a.alpha))),
        e.translate(-Math.round(n), -Math.round(r)),
        a.floor && this.floor)
      )
        e.clip(this.floor);
      else {
        (e.beginPath(), e.rect(o.x * 16, o.y * 16, o.w * 16, o.h * 16));
        for (let t of i) e.rect(t.x * 16, t.y * 16, t.w * 16, t.h * 16);
        e.clip(`evenodd`);
      }
      ((e.fillStyle = this.pat(e, t)),
        e.fillRect(o.x * 16, o.y * 16, o.w * 16, o.h * 16),
        e.restore());
    }
    isleArt(e, t, n, r, i) {
      let a = n.x * 16 - r,
        o = n.y * 16 - i;
      (e.save(),
        e.beginPath(),
        e.rect(Math.round(a), Math.round(o), n.w * 16, n.h * 16),
        e.clip());
      let s = (n.w * 16) / 2,
        c = (n.h * 16) / 2;
      for (let n = -Math.ceil(c / 15) * 15; n <= c + 15; n += 15)
        for (let r = -Math.ceil(s / 18) * 18 - 9; r <= s + 18; r += 18)
          Bk(e, t, a + s + r, o + c + n, { ax: 24, ay: 15 });
      e.restore();
    }
    drawFloorHd(e, t, n) {
      ((this.rimTo = e.glow), this.drawFloor(e.ground, t, n, e.glow));
    }
    rimTo = null;
    drawFloor(e, t, n, r = e) {
      if (this.done) return;
      let i = this.t,
        a = this.art(`breath`, `Crust`);
      if (a.length)
        for (let r of this.crusts) {
          let o = i - r.t0;
          Bk(
            e,
            a[o < 0.25 ? 0 : o < 0.75 ? 1 : o < 1.5 ? 2 : o < 3 ? 3 : 4],
            r.x * 16 - t,
            r.y * 16 - n,
            { alpha: o > 5.4 ? (6 - o) / 0.6 : void 0 },
          );
        }
      let o = this.art(`rise`, `Lava`);
      for (let r of this.isles)
        r.sunk &&
          this.flooded() === null &&
          this.lay32(e, zk(o, i, 4), t, n, [], { only: r });
      let s = this.lava;
      if (s) {
        let a = i - s.t0,
          c = this.isles.filter((e) => !e.sunk);
        if (a < LV)
          this.lay32(
            e,
            this.art(`rise`, `Warning`)[a > 2.7 ? 3 : Math.floor(a)],
            t,
            n,
            this.isles,
            { floor: !0 },
          );
        else if (a < 3.6)
          this.lay32(e, Rk(this.art(`rise`, `Flood`), (a - LV) / RV), t, n, c);
        else if (a < 11) this.lay32(e, zk(o, i, 4), t, n, c);
        else {
          let r = (a - LV - zV) / iae,
            i = this.art(`rise`, `Ebb`);
          this.lay32(e, Rk(i, r), t, n, c, {
            alpha: r > 1 ? 1 - (r - 1) / 0.5 : 1,
          });
        }
        let l = oae(this.art(`rise`, `Shore`));
        if (l.length && a >= 3.3 && a < 11)
          for (let e of c) {
            let a = e.x * 16 - t,
              o = e.y * 16 - n,
              s = a + e.w * 16,
              c = o + e.h * 16;
            (Wk(r, l, i, a, c, s, c, { fps: 6 }),
              Wk(r, l, i, s, c, s, o, { fps: 6 }),
              Wk(r, l, i, s, o, a, o, { fps: 6 }),
              Wk(r, l, i, a, o, a, c, { fps: 6 }));
          }
      }
      let c = KV(this.art(`sink`, `Sink`)),
        l = KV(this.art(`sink`, `Return`));
      for (let r of this.isles)
        (r.doom &&
          c.length &&
          this.isleArt(e, c[i - r.doom < LV / 2 ? 0 : 1], r, t, n),
          r.sank &&
            i - r.sank < 1.2 &&
            c.length &&
            this.isleArt(e, Rk(c.slice(2), (i - r.sank) / 1.2), r, t, n),
          r.back &&
            l.length &&
            this.isleArt(e, Rk(l, (i - r.back) / 1.2), r, t, n));
      this.drawPins(e, t, n, !0);
    }
    drawGround(e, t, n) {
      let r = this.rimTo ?? e;
      if (((this.rimTo = null), this.done)) return;
      let i = this.t,
        a = this.lava;
      if (a && i - a.t0 < LV) {
        let e = r,
          o = (i - a.t0) / LV;
        e.globalAlpha = Math.min(1, 0.4 + 0.5 * o + 0.15 * Math.sin(i * 8));
        for (let r of this.isles) {
          if (r.sunk || r.doom) continue;
          let i = Math.round(r.x * 16 - t),
            a = Math.round(r.y * 16 - n),
            o = r.w * 16,
            s = r.h * 16;
          for (let [t, n] of [
            [`#fff7d1`, 0],
            [`#ffb84a`, 1],
          ])
            ((e.fillStyle = t),
              e.fillRect(i + n, a + n, o - n * 2, 1),
              e.fillRect(i + n, a + s - 1 - n, o - n * 2, 1),
              e.fillRect(i + n, a + n, 1, s - n * 2),
              e.fillRect(i + o - 1 - n, a + n, 1, s - n * 2));
        }
        e.globalAlpha = 1;
      }
      let o = this.vent,
        s = this.art(`vent`, `Telegraph`);
      if (o && i - o.t0 < 2 && s.length) {
        let r = o.o.x * 16 + Math.cos(o.a) * BV - t,
          a = o.o.y * 16 + Math.sin(o.a) * BV - n;
        Uk(e, Rk(s, (i - o.t0) / 2), r, a, o.a);
      }
      let c = this.art(`lay`, `Hatch clock`);
      if (c.length)
        for (let r of this.clutches)
          r.m.doc.dead ||
            Bk(
              e,
              c[Math.min(5, Math.floor(r.heat / 4))],
              r.m.rx * 16 - t,
              r.m.ry * 16 - n,
              { ax: 16, ay: 21 },
            );
    }
    collect(e, t, n, r) {
      if (this.done || this.m.doc.dead) return;
      let i = this.vent,
        a = i ? this.t - i.t0 : 99,
        o =
          a < 0.5
            ? 0
            : a < 1.2
              ? 1
              : a < 2
                ? 2
                : a < 2.12
                  ? 3
                  : a < 2.6
                    ? 4
                    : 5,
        s = this.m.doc.facing < 0,
        c = this.m.rx * 16,
        l = this.m.ry * 16 + 1;
      if (!i || (a > 2 && this.t > this.ventUntil)) {
        let i = sae();
        if (!i || Math.floor(this.m.anim) % 4 != 2 || this.m.flash > 0) return;
        let a = c + (s ? -13 : -10);
        e.push({
          y: this.m.ry * 16 + 0.5,
          x: c,
          fy: l,
          box: bz(c, l, a, l - 24, a + 23, l - 5),
          draw: () =>
            t.drawImage(
              i[+!!s],
              Math.round(this.m.rx * 16 - n) + (s ? -13 : -10),
              Math.round(this.m.ry * 16 - r) - 23,
            ),
        });
        return;
      }
      let u = this.art(`vent`, `Grate`);
      if (!u.length) return;
      let d = s ? HV(u) : u,
        f = s ? u[0].width - 1 - 13 : 13,
        p = this.onHer(IV);
      e.push({
        y: this.m.ry * 16 + 0.5,
        x: c,
        fy: l,
        box: bz(
          c,
          l,
          p.x - f,
          p.y - 11,
          p.x - f + d[o].width,
          p.y - 11 + d[o].height,
        ),
        draw: () => {
          let e = this.onHer(IV);
          Bk(t, d[o], e.x - n, e.y - r, { ax: f, ay: 11 });
        },
      });
    }
    drawAfterLight(e, t, n) {
      if (this.done) return;
      let r = this.t,
        i = this.lava;
      if (i && r - i.t0 < LV) {
        e.globalAlpha = 0.3 + 0.15 * Math.sin(r * 6);
        let i = Bp(`#ffffff`, 26);
        for (let r of this.isles)
          !r.sunk &&
            !r.doom &&
            e.drawImage(
              i,
              Math.round((r.x + r.w / 2) * 16 - 26 - t),
              Math.round((r.y + r.h / 2) * 16 - 26 - n),
            );
        e.globalAlpha = 1;
      }
      let a = this.art(`breath`, `Cinder`);
      if (a.length)
        for (let i of this.cinders) {
          let o = i.h * (1 - i.d / i.L),
            s = i.x * 16 - t,
            c = i.y * 16 - n;
          ((e.fillStyle = `rgba(0,0,0,0.3)`),
            e.fillRect(Math.round(s - 2), Math.round(c), 4, 1),
            Uk(e, zk(a, r, 10), s, c - o, i.a));
        }
      this.drawPins(e, t, n, !1);
    }
    collectHd(e, t, n, r) {
      if (!this.done) {
        this.pins = this.pins.filter((e) => this.t < e.t0 + e.dur);
        for (let i of this.pins) {
          let a = i.ground ? null : i.at();
          a &&
            xz(
              e,
              t,
              Rk(i.frames, (this.t - i.t0) / i.dur),
              a.x,
              a.y,
              (i.foot?.() ?? a.y) + 2,
              n,
              r,
              { ax: i.ax, ay: i.ay },
            );
        }
      }
    }
    drawAfterLightHd(e, t, n, r) {
      if (this.done) return;
      let i = this.t,
        a = this.lava;
      if (a && i - a.t0 < LV) {
        let t = e.looseAdd;
        t.globalAlpha = 0.3 + 0.15 * Math.sin(i * 6);
        let a = Bp(`#ffffff`, 26);
        for (let e of this.isles)
          !e.sunk &&
            !e.doom &&
            t.drawImage(
              a,
              Math.round((e.x + e.w / 2) * 16 - 26 - n),
              Math.round((e.y + e.h / 2) * 16 - 26 - r),
            );
        t.globalAlpha = 1;
      }
      for (let i of this.cinders) {
        let a = i.h * (1 - i.d / i.L),
          o = i.x * 16,
          s = i.y * 16;
        ((e.ground.fillStyle = `rgba(0,0,0,0.3)`),
          e.ground.fillRect(Math.round(o - 2 - n), Math.round(s - r), 4, 1),
          hA(t, o, s, a, `#ff7a1a`, 0.9, !0, !0, 2),
          hA(t, o, s, a, `#ffe08a`, 1, !1, !0, 1));
      }
    }
  },
  qV = [`east`, `south`, `west`, `north`],
  lae = class extends Ez {
    side = 0;
    modify(e, t) {
      let n = Math.atan2(this.me.y - this.m.ry, this.me.x - this.m.rx),
        r = Math.round(((n + Math.PI * 2) % (Math.PI * 2)) / (Math.PI / 2)) % 4;
      return (this.run.run.diff === `hollowed`
        ? [this.side, (this.side + 2) % 4]
        : [this.side]
      ).includes(r)
        ? t * 2
        : Math.round(t * 0.5);
    }
    use(e) {
      if (
        (e === `turnkey` &&
          this.turn((this.side + 1 + Math.floor(Math.random() * 3)) % 4),
        e === `seal`)
      ) {
        this.sealed();
        for (let e = 0; e < 2; e++) {
          let e = this.spot(4);
          this.add(`sentinel`, e.x, e.y, { hp: 0.8 });
        }
      }
      e === `slam` &&
        this.hitShape(
          { t: `ring`, x: this.m.rx, y: this.m.ry, r0: 2, r1: 4 },
          1.2,
          `#e0b64a`,
          { frac: 0.22 },
        );
    }
    turn(e) {
      ((this.side = e),
        this.run.say(
          this.name(),
          `* The keyhole grinds round to face ${qV[this.side]}.`,
          2.5,
        ),
        q.sfx(`click`, 0.8));
    }
    sealed() {
      this.run.say(
        this.name(),
        `* Ward-stones grind up out of the courtyard. Aurek's sentinels step out of them.`,
        3,
      );
    }
    hostEvent(e) {
      e.name === `turnkey`
        ? this.turn(e.args?.[0] ?? 0)
        : e.name === `seal`
          ? this.sealed()
          : super.hostEvent(e);
    }
    onReset() {
      this.side = 0;
    }
    every(e, t) {
      return super.every(
        e,
        e === `turnkey` && this.run.run.diff === `hollowed` ? 6 : t,
      );
    }
    hud() {
      return { ...super.hud(), title: `The keyhole faces ${qV[this.side]}` };
    }
    drawAfterLight(e, t, n) {
      let r = (this.side * Math.PI) / 2,
        i = this.m.rx + Math.cos(r) * 1.1,
        a = this.m.ry - 1.4 + Math.sin(r) * 0.8;
      ((e.globalAlpha = 0.7 + 0.3 * Math.sin(this.t * 8)),
        e.drawImage(
          Bp(`#e0b64a`, 9),
          Math.round(i * 16 - 9 - t),
          Math.round(a * 16 - 9 - n),
        ),
        (e.fillStyle = `#ffffff`),
        e.fillRect(Math.round(i * 16 - t), Math.round(a * 16 - n), 2, 2),
        (e.globalAlpha = 1));
    }
    keyhole() {
      let e = (this.side * Math.PI) / 2;
      return {
        x: (this.m.rx + Math.cos(e) * 1.1) * 16,
        y: (this.m.ry + Math.sin(e) * 0.8) * 16,
        k: 0.7 + 0.3 * Math.sin(this.t * 8),
      };
    }
    drawAfterLightHd(e, t) {
      let n = this.keyhole();
      hA(t, n.x + 1, n.y, 21.4, `#ffffff`, n.k, !1, !0, 2);
    }
    uprightsHd(e) {
      let t = this.keyhole();
      Cz(e, t.x, t.y, 22.4, 9, `#e0b64a`, t.k);
    }
  },
  JV = 20,
  YV = 8,
  uae = 14,
  dae = {
    ember: [-20, -30],
    rime: [22, -30],
    storm: [-20, -16],
    void: [22, -16],
  },
  XV = { x0: -13, x1: 12, y0: -46, y1: 2 },
  ZV = { wind: 0.5, gap: 0.2, r: 1.8, spread: Math.PI / 2, dmg: 0.5 },
  QV = 0.7;
