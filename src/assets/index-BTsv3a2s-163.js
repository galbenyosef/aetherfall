// index-BTsv3a2s 163 — math
// Lines 93865-94998 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var tae = class extends Ez {
    pins = [];
    noteT = 0;
    noteAt = 0;
    hymnT0 = 0;
    hymnNext = 0;
    answerT = 0;
    dive = null;
    last = null;
    panes = [];
    broke = [];
    rings = [];
    spoutT = 0;
    echoT = -9;
    frozen = 0;
    glance = new Map();
    heads = new Map();
    onHer(e, t) {
      let n = FB(`ilse`).float,
        r = n ? Math.sin(this.g.time * 3 + this.m.anim) * n.amp + n.base : 0;
      return {
        x: this.m.rx * 16 + (this.m.doc.facing < 0 ? -e - 1 : e),
        y: this.m.ry * 16 + t + r,
      };
    }
    mouth() {
      return this.onHer(1, -24);
    }
    throat() {
      return this.onHer(0, -22);
    }
    far() {
      let e = this.room,
        t = e.y + 1.6,
        n = e.x + e.w / 2,
        r = this.run.f.props.filter((t) => t.y >= e.y - 2 && t.y <= e.y + 2);
      return {
        x:
          [n + 5, n - 5, n + 7, n - 7, n].find(
            (e) => !r.some((t) => Math.abs(t.x + 0.5 - e) < 1.5),
          ) ?? n,
        y: t,
      };
    }
    echo() {
      let e = this.room,
        t = e.x + Math.floor(e.w / 2);
      for (let n = e.y + 1; n < e.y + e.h / 2; n++)
        if (this.run.tile(t, n) === Ao.DEEP) return { x: t + 0.5, y: n + 0.5 };
      return { x: t + 0.5, y: e.y + e.h * 0.2 };
    }
    art(e, t) {
      return this.strip(e, t) ?? [];
    }
    singing() {
      return this.cast?.label === `The Drowning Hymn`;
    }
    hollowed() {
      return this.run.run.diff === `hollowed`;
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
      this.clear();
      let e = new Map();
      for (let t of this.roomTiles((e) => e === Ao.SHALLOW)) {
        let n = t.x - (t.x % 2),
          r = t.y - (t.y % 2),
          i = `${n},${r}`;
        (e.has(i) || e.set(i, { x: n + 1, y: r + 1, bx: n, by: r, tiles: [] }),
          e.get(i).tiles.push(t));
      }
      this.panes = [...e.values()];
    }
    onReset() {
      ((this.m.ghost = !1), this.clear());
    }
    onEnd() {
      this.clear();
    }
    clear() {
      ((this.pins = []),
        (this.noteAt = 0),
        (this.noteT = 1.5),
        (this.answerT = 0),
        (this.dive = null),
        (this.last = null),
        (this.broke = []),
        (this.rings = []),
        (this.frozen = 0),
        this.heads.clear(),
        this.glance.clear());
    }
    onPhase(e) {
      e === 2 && (this.hymnNext = this.t + 0.5);
    }
    onAddHit(e, t, n) {
      return this.singing() && e.kind === `wisp`
        ? (this.t - (this.glance.get(e) ?? -9) > 1 &&
            this.g.floater(
              e.m.rx * 16,
              e.m.ry * 16 - 30,
              `She's singing: it can't be hurt`,
              `#bff0ff`,
              !1,
            ),
          this.glance.set(e, this.t),
          0)
        : super.onAddHit(e, t, n);
    }
    use(e) {
      if (this.hidden) return !1;
      if ((e === `hymn` && this.sing(), e === `chorus`))
        for (let e = 0; e < (this.hollowed() ? 3 : 2); e++) {
          let e = this.spot(4);
          this.add(`wisp`, e.x, e.y, { hp: 0.7 });
        }
      if ((e === `still` && this.stillWater(), e === `dive`))
        return this.goUnder();
      e === `harmony` && this.ripple();
    }
    sing() {
      let e = this.hollowed();
      ((this.noteAt = 0),
        (this.hymnT0 = this.t),
        (this.answerT = 0),
        this.run.say(
          this.name(),
          this.phaseI === 2
            ? `Both halves of it now. Listen to her answer.`
            : `Sing it with me. Lower. Lower than the well.`,
          4,
        ),
        q.sfx(`chime`, 0.6),
        this.begin(
          `The Drowning Hymn`,
          e
            ? `Crack both seals: 5% of her health each`
            : `Deal 10% of her health to break it`,
          6,
          0.1,
          (e) => this.hymnEnds(e),
        ),
        e &&
          (this.pin(
            this.art(`maelis`, `Answer`),
            1.5,
            () => this.throat(),
            28,
            22,
            !1,
            this.feet,
          ),
          (this.answerT = this.t + 1.5)));
    }
    hymnEnds(e) {
      let t = this.m.rx,
        n = this.m.ry;
      if (e) {
        this.hollowed() &&
          this.run.fx.add(
            [
              jV(
                this.art(`maelis`, `Two seals`),
                S[this.g.school].colors.glow,
              )[2],
            ],
            t,
            n,
            { dur: 0.2, ax: bV, ay: 66 },
          );
        let e = this.art(`hymn`, `Breaking it`);
        e.length &&
          this.after(this.hollowed() ? 0.2 : 0, () =>
            this.run.fx.add(e.slice(4), t, n, { dur: 0.55, ax: bV, ay: xV }),
          );
      } else {
        let e = this.art(`hymn`, `The song`);
        (e.length &&
          this.run.fx.add([e[5]], t, n, { dur: 0.35, ax: bV, ay: xV }),
          this.run.fx.add(Qie(this.art(`thinice`, `Last note`)), t, n, {
            dur: 0.5,
            ax: 56,
            ay: 32,
          }),
          (this.g.flash = { color: `#bff0ff`, a: 0.3 }),
          (this.g.shake = Math.max(this.g.shake, 8)),
          q.sfx(`boom`, 0.9));
        let r = this.room,
          i = Math.max(
            ...[r.x, r.x + r.w].flatMap((e) =>
              [r.y, r.y + r.h].map((r) => Math.hypot(e - t, (r - n) * 1.1)),
            ),
          );
        ((this.last = {
          x: t,
          y: n,
          t0: this.t,
          max: i,
          me: !1,
          done: new Set(),
        }),
          this.run.say(
            this.name(),
            `* The last note goes out under the ice. Every pane of it rings, then breaks.`,
            3,
          ));
      }
      this.phaseI === 2 && (this.hymnNext = this.t + 1);
    }
    stillWater(e = this.me) {
      let t = { t: `circle`, x: e.x, y: e.y, r: Xie };
      this.hitShape(
        t,
        1.2,
        `#dff6ff`,
        { frac: 0.14 },
        (e) => {
          (this.pin(
            this.art(`still`, `Freeze`),
            2,
            () => ({ x: t.x * 16, y: t.y * 16 }),
            32,
            29,
            !0,
          ),
            e && !this.hosted && this.run.freeze(2),
            q.sfx(`chime`, 0.5));
        },
        this.look(`still`, { rim: !1, tele: `Telegraph` }),
      );
    }
    goUnder() {
      if (this.cast) return !1;
      let e = this.m.rx,
        t = this.m.ry;
      if (
        ((this.hidden = !0),
        (this.noteAt = 0),
        (this.dive = {
          t0: this.t,
          x: e,
          y: t,
          a: Math.atan2(this.me.y - t, this.me.x - e),
          up: null,
          heard: 0,
        }),
        this.pin(
          this.art(`dive`, `Dive`),
          1.2,
          () => ({ x: e * 16, y: t * 16 }),
          20,
          37,
        ),
        this.after(0.4, () => {
          this.hidden && (this.m.ghost = !0);
        }),
        q.sfx(`boom`, 0.4),
        this.run.say(
          this.name(),
          `* She sinks under the black water. The ice goes very quiet.`,
          3,
        ),
        !this.hosted)
      )
        for (let e = 0; e < 2; e++) {
          let e = this.spot(5);
          this.add(`frostmaw`, e.x, e.y);
        }
    }
    surface(e) {
      ((this.hidden = !1),
        (this.m.ghost = !1),
        (this.dive = null),
        (this.m.rx = e.x),
        (this.m.ry = e.y),
        this.run.fx.add(this.art(`dive`, `Burst`).slice(3), e.x, e.y, {
          dur: 0.8,
          ax: 28,
          ay: 50,
        }),
        this.g.particles.burst(
          e.x * 16,
          e.y * 16 - 10,
          30,
          [`#ffffff`, `#6ac0ff`, `#12203a`],
          90,
        ),
        (this.g.shake = Math.max(this.g.shake, 8)),
        q.sfx(`boom`, 0.8));
    }
    ripple() {
      (this.rings.push({
        x: this.m.rx,
        y: this.m.ry,
        t0: this.t,
        who: 0,
        passed: !1,
      }),
        this.after(1.5, () => {
          let e = this.echo();
          (this.rings.push({ ...e, t0: this.t, who: 1, passed: !1 }),
            (this.echoT = this.t));
        }));
    }
    tick(e) {
      let t = this.me,
        n = this.run.speedMult() === 0;
      if (
        (n && !this.frozen && (this.frozen = this.t),
        !n &&
          this.frozen &&
          ((this.frozen = 0),
          this.pin(
            this.art(`still`, `Encased`).slice(3),
            0.25,
            () => ({ x: t.x * 16, y: t.y * 16 }),
            11,
            30,
          )),
        this.trackFrostmaws(),
        this.tickLastNote(),
        this.tickRings(e),
        this.dive)
      )
        return this.tickDive(e);
      if (!this.hosted) {
        if (this.phaseI === 2) {
          !this.cast && this.t >= this.hymnNext && this.sing();
          let e = this.def.abilities.find((e) => e.id === `harmony`);
          e &&
            this.cast &&
            this.t >= (this.timers.harmony ?? 0) &&
            (this.ripple(),
            (this.timers.harmony = this.t + this.every(`harmony`, e.every)));
          return;
        }
        if (this.cast) {
          this.noteAt = 0;
          return;
        }
        if (this.noteAt) {
          if (this.t >= this.noteAt) {
            this.noteAt = 0;
            let e = this.mouth(),
              n = this.look(`lownote`, {
                sprite: `Low note`,
                impact: `Splash`,
              });
            (this.run.shoot(
              { x: e.x / 16, y: e.y / 16 },
              { x: t.x, y: t.y - 0.4 },
              this.mh() * 0.08,
              `#5cc8ff`,
              `#ffffff`,
              6.5,
              { look: n },
            ),
              q.sfx(`cast`, 0.35));
          }
          return;
        }
        ((this.noteT -= e),
          this.noteT <= 0 &&
            ((this.noteT = 2.6),
            (this.noteAt = this.t + 0.45),
            Math.abs(t.x - this.m.rx) > 0.05 &&
              (this.m.doc.facing = t.x < this.m.rx ? -1 : 1),
            this.pin(
              this.art(`lownote`, `Wind-up`),
              0.45,
              () => this.mouth(),
              12,
              12,
              !1,
              this.feet,
            )));
      }
    }
    tickDive(e) {
      let t = this.dive,
        n = this.me,
        r = this.t - t.t0;
      if (!t.up) {
        if (this.hosted) {
          let e = this.m.rx - t.x,
            n = this.m.ry - t.y;
          (Math.hypot(e, n) > 0.02 && (t.a = Math.atan2(n, e)),
            (t.x = this.m.rx),
            (t.y = this.m.ry));
          return;
        }
        if (r > 0.8) {
          let r = Math.hypot(n.x - t.x, n.y - t.y),
            i = Math.atan2(n.y - t.y, n.x - t.x) + (r < 2.2 ? 1.3 : 0) - t.a;
          for (; i > Math.PI;) i -= vV;
          for (; i < -Math.PI;) i += vV;
          ((t.a += Math.max(-2.4 * e, Math.min(2.4 * e, i))),
            (t.x += Math.cos(t.a) * 1.8 * e),
            (t.y += Math.sin(t.a) * 1.8 * e));
        }
        if (r >= 6) {
          let e = { x: n.x, y: n.y };
          ((t.up = e),
            (t.heard = this.t),
            this.pin(
              this.art(`dive`, `Burst`).slice(0, 3),
              1.5,
              () => ({ x: e.x * 16, y: e.y * 16 }),
              28,
              50,
              !0,
            ),
            this.hitShape(
              { t: `circle`, x: e.x, y: e.y, r: 1.6 },
              1.5,
              `transparent`,
              { frac: 0.25 },
              () => this.surface(e),
            ));
        }
      }
    }
    tickLastNote() {
      let e = this.last;
      if (!e) return;
      let t = (this.t - e.t0) * SV;
      this.panes.forEach((n, r) => {
        e.done.has(r) ||
          Math.hypot(n.x - e.x, (n.y - e.y) * 1.1) > t ||
          (e.done.add(r), this.broke.push({ i: r, t0: this.t }));
      });
      let n = this.me;
      if (
        !e.me &&
        !this.hosted &&
        Math.hypot(n.x - e.x, (n.y - e.y) * 1.1) <= t &&
        ((e.me = !0),
        this.run.f.theme === `rime` &&
          this.run.tile(Math.floor(n.x), Math.floor(n.y + 0.1)) === Ao.SHALLOW)
      ) {
        let e = { x: n.x * 16, y: n.y * 16 };
        (this.pin(this.art(`thinice`, `Plunge`), 0.6, () => e, 12, 21),
          this.g.floater(
            e.x,
            e.y - 36,
            `The ice breaks under you!`,
            `#bff0ff`,
            !0,
          ),
          this.run.addChill(3),
          this.run.hitMe(this.mh() * 0.35, { heavy: !0 }));
      }
      t > e.max && (this.last = null);
    }
    tickRings(e) {
      if (this.done) return;
      this.rings = this.rings.filter((e) => (this.t - e.t0) * CV < wV);
      let t = this.me,
        n = (e) => (this.t - e.t0) * CV,
        r = (e) => Math.hypot(t.x - e.x, (t.y - e.y) * 1.1);
      for (let e of this.rings) {
        if (this.hosted || e.passed || n(e) < r(e)) continue;
        e.passed = !0;
        let i = this.rings.find(
          (t) => t.who !== e.who && Math.abs(n(t) - r(t)) < 0.45,
        );
        i
          ? ((i.passed = !0),
            this.run.fx.add(this.art(`harmony`, `Crossing`), t.x, t.y, {
              dur: 0.45,
              ax: 8,
              ay: 22,
            }),
            this.g.floater(
              t.x * 16,
              t.y * 16 - 36,
              `The voices cross`,
              `#e8f8ff`,
              !1,
            ),
            this.run.hitMe(this.mh() * 0.2, { heavy: !0 }))
          : (this.run.addChill(1),
            this.g.particles.burst(
              t.x * 16,
              t.y * 16 - 4,
              8,
              [yV[3], yV[4]],
              30,
            ));
      }
      if (((this.spoutT -= e), this.spoutT > 0)) return;
      this.spoutT = 0.1;
      let i = this.art(`harmony`, `Crossing`);
      for (let e of this.rings)
        if (e.who === 0) {
          for (let t of this.rings)
            if (t.who === 1)
              for (let r of NV(e, n(e), t, n(t)))
                this.inRoom(r.x, r.y, -0.5) &&
                  this.run.fx.add(i, r.x, r.y, { dur: 0.45, ax: 8, ay: 22 });
        }
    }
    frostmaws() {
      if (!this.hosted) return this.adds;
      let e = [];
      for (let [t, n] of this.g.monsters)
        if (
          !n.local &&
          !n.doc.dead &&
          n.doc.kind === `frostmaw` &&
          this.inRoom(n.rx, n.ry)
        ) {
          let n = this.run.hostMob(t);
          n && e.push(n);
        }
      return e;
    }
    trackFrostmaws() {
      for (let e of this.frostmaws()) {
        if (e.kind !== `frostmaw` || e.m.doc.dead) continue;
        let t = this.heads.get(e) ?? {
            x: e.m.rx,
            y: e.m.ry,
            a: e.m.doc.facing < 0 ? Math.PI : 0,
            t: -9,
          },
          n = e.m.rx - t.x,
          r = e.m.ry - t.y;
        (Math.hypot(n, r) > 0.02 &&
          ((t.a = Math.atan2(r, n)),
          (t.x = e.m.rx),
          (t.y = e.m.ry),
          (t.t = this.t)),
          this.heads.set(e, t));
      }
    }
    hostTick(e) {
      (this.engaged ||
        this.pins.length ||
        this.last ||
        this.rings.length ||
        this.dive) &&
        this.tick(e);
    }
    hostEvent(e) {
      let t = e.args ?? [],
        n = e.x ?? this.m.rx,
        r = e.y ?? this.m.ry,
        i = this.me;
      switch (e.name) {
        case `windup`:
          (Math.abs(i.x - this.m.rx) > 0.05 &&
            (this.m.doc.facing = i.x < this.m.rx ? -1 : 1),
            this.pin(
              this.art(`lownote`, `Wind-up`),
              0.45,
              () => this.mouth(),
              12,
              12,
              !1,
              this.feet,
            ));
          break;
        case `lownote`: {
          let e = this.look(`lownote`, {
            sprite: `Low note`,
            impact: `Splash`,
          });
          (this.run.shoot(
            { x: n, y: r },
            { x: t[0] ?? i.x, y: t[1] ?? i.y },
            0,
            `#5cc8ff`,
            `#ffffff`,
            6.5,
            { look: e },
          ),
            q.sfx(`cast`, 0.35));
          break;
        }
        case `hymn`:
          this.sing();
          break;
        case `hymnbroken`:
          this.hymnEnds(!0);
          break;
        case `lastnote`:
          this.hymnEnds(!1);
          break;
        case `still`:
          this.stillWater({ x: n, y: r });
          break;
        case `dive`:
          this.goUnder();
          break;
        case `surfacing`: {
          let e = this.dive;
          if (!e) break;
          let t = { x: n, y: r };
          ((e.up = t),
            (e.heard = this.t),
            this.pin(
              this.art(`dive`, `Burst`).slice(0, 3),
              1.5,
              () => ({ x: t.x * 16, y: t.y * 16 }),
              28,
              50,
              !0,
            ),
            this.hitShape(
              { t: `circle`, x: t.x, y: t.y, r: 1.6 },
              1.5,
              `transparent`,
              { frac: 0.25 },
            ));
          break;
        }
        case `surfaced`:
          this.surface({ x: n, y: r });
          break;
        case `ripple`:
          (this.rings.push({
            x: n,
            y: r,
            t0: this.t,
            who: +!!t[0],
            passed: !1,
          }),
            t[0] && (this.echoT = this.t));
          break;
        case `crossed`:
          this.run.isMe(e.who) &&
            (this.run.fx.add(this.art(`harmony`, `Crossing`), i.x, i.y, {
              dur: 0.45,
              ax: 8,
              ay: 22,
            }),
            this.g.floater(
              i.x * 16,
              i.y * 16 - 36,
              `The voices cross`,
              `#e8f8ff`,
              !1,
            ));
          break;
        case `plunge`: {
          let e = { x: i.x * 16, y: i.y * 16 };
          (this.pin(this.art(`thinice`, `Plunge`), 0.6, () => e, 12, 21),
            this.g.floater(
              e.x,
              e.y - 36,
              `The ice breaks under you!`,
              `#bff0ff`,
              !0,
            ));
          break;
        }
        case `glance`:
          this.g.floater(
            n * 16,
            r * 16 - 30,
            `She's singing: it can't be hurt`,
            `#bff0ff`,
            !1,
          );
          break;
        default:
          super.hostEvent(e);
      }
    }
    move(e) {
      let t = this.me;
      (Math.hypot(t.x - this.m.rx, t.y - this.m.ry) < 3.5 &&
        this.run.step(
          this.mob,
          this.m.rx * 2 - t.x,
          this.m.ry * 2 - t.y,
          1.2 * e,
          !1,
        ),
        Math.abs(t.x - this.m.rx) > 0.05 &&
          (this.m.doc.facing = t.x < this.m.rx ? -1 : 1));
    }
    drawFloor(e, t, n) {
      if (this.done) return;
      let r = this.t,
        i = this.art(`thinice`, `Shatter`);
      if (((this.broke = this.broke.filter((e) => r - e.t0 < 3)), i.length))
        for (let a of this.broke) {
          let o = r - a.t0,
            s = this.panes[a.i],
            c = Rk($ie(i)[((s.bx >> 1) * 7 + (s.by >> 1) * 13) % 4], o / 0.9);
          e.globalAlpha = o > 2.4 ? Math.max(0, 1 - (o - 2.4) / 0.6) : 1;
          for (let r of s.tiles)
            e.drawImage(
              c,
              (r.x - s.bx) * 16,
              (r.y - s.by) * 16,
              16,
              16,
              r.x * 16 - t,
              r.y * 16 - n,
              16,
              16,
            );
          e.globalAlpha = 1;
        }
    }
    drawGround(e, t, n) {
      if (this.done) return;
      let r = this.t;
      if (
        (this.last &&
          eae(
            e,
            this.last.x * 16 - t,
            this.last.y * 16 - n,
            (r - this.last.t0) * SV * 16,
            r * 9,
            1.8,
          ),
        this.phaseI === 2)
      ) {
        let i = this.echo(),
          a = this.art(`harmony`, `Other half`),
          o = r - this.echoT;
        a.length &&
          Bk(
            e,
            o < 0.8 ? Rk(a.slice(1), o / 0.8) : a[0],
            i.x * 16 - t,
            i.y * 16 - n,
            { ax: 12, ay: 11 },
          );
      }
      for (let r of this.rings) this.drawRipple(e, r, t, n);
      let i = this.dive;
      if (i) {
        let a = this.me,
          o = this.art(`dive`, `Heard`);
        o.length &&
          (!i.up || r - i.heard < 0.6) &&
          Bk(
            e,
            o[i.up ? 3 : this.g.me.castT > 0 ? 0 : 1 + (Math.floor(r * 4) % 2)],
            a.x * 16 - t,
            a.y * 16 - n,
            { ax: 18, ay: 16 },
          );
        let s = this.art(`dive`, `Shadow`);
        s.length &&
          !i.up &&
          r - i.t0 > 0.8 &&
          Uk(
            e,
            zk(s, r, 6),
            i.x * 16 - Math.cos(i.a) * 16 - t,
            i.y * 16 - Math.sin(i.a) * 16 - n,
            i.a,
            { alpha: Math.min(1, (r - i.t0 - 0.8) * 2) },
          );
      }
      let a = this.art(`dive`, `Frostmaw wake`);
      if (a.length)
        for (let i of this.frostmaws()) {
          let o = this.heads.get(i);
          i.kind !== `frostmaw` ||
            i.m.doc.dead ||
            !o ||
            i.state !== `hunt` ||
            r - o.t > 0.4 ||
            Uk(
              e,
              zk(a, r, 8),
              i.m.rx * 16 - Math.cos(o.a) * 14 - t,
              i.m.ry * 16 - Math.sin(o.a) * 14 - n,
              o.a,
            );
        }
      this.drawPins(e, t, n, !0);
    }
    drawRipple(e, t, n, r) {
      let i = (this.t - t.t0) * CV;
      if (i < 0.15) return;
      let a = i / wV,
        o = i * 16,
        s = t.x * 16 - n,
        c = t.y * 16 - r,
        l = Math.ceil(o * vV * 1.2);
      for (let t = 0; t < l; t++) {
        let n = (t / l) * vV,
          r = Math.round(s + Math.cos(n) * o - 0.5),
          i = Math.round(c + (Math.sin(n) * o) / 1.1 - 0.5);
        if (a > 0.75 && (r + i) % 2) continue;
        let u = Math.sin(n) >= 0;
        ((e.fillStyle =
          !u || a > 0.6
            ? yV[2]
            : Math.abs(Math.cos(n)) < 0.45 && a < 0.4
              ? yV[4]
              : yV[3]),
          e.fillRect(r, i, 1, 1),
          (e.fillStyle = yV[1]),
          e.fillRect(r, i + (u ? -1 : 1), 1, 1));
      }
    }
    drawAfterLight(e, t, n) {
      this.drawAfter(e, t, n, null);
    }
    uprightsHd(e) {
      if (this.done || !this.singing()) return;
      let t = Math.min(5, Math.floor(this.t - this.hymnT0)),
        n = this.m.rx * 16,
        r = this.m.ry * 16,
        i = (t, i, a, o) => {
          t &&
            e.push({
              img: t,
              x0: Math.round(n - i),
              y: r + o,
              w: t.width,
              z0: a - t.height,
              z1: a,
              a: 1,
              add: !1,
            });
        };
      (i(this.art(`hymn`, `Hymn rings`)[t], 20, 47, 2),
        i(this.art(`hymn`, `The song`)[t], bV, xV, 1));
      let a = this.cast,
        o = a.need > 0 ? a.dealt / a.need : 0;
      this.hollowed()
        ? i(
            jV(this.art(`maelis`, `Two seals`), S[this.g.school].colors.glow)[
              +(o >= 0.5)
            ],
            bV,
            66,
            1,
          )
        : o >= 0.3 &&
          i(
            kV(this.art(`hymn`, `Breaking it`))[
              Math.min(2, Math.floor(o / 0.3) - 1)
            ],
            bV,
            xV,
            1,
          );
    }
    drawAfterLightHd(e, t, n, r) {
      this.drawAfter(e.loose, n, r, t);
    }
    farFrame(e) {
      let t = this.t - this.hymnT0;
      return e[
        this.singing()
          ? t < 0.3
            ? 1
            : t < 1.5
              ? 2
              : t < 1.8
                ? 4
                : 2 + (Math.floor(this.t * 4) % 2)
          : 0
      ];
    }
    shell() {
      let e = this.art(`still`, `Encased`),
        t = this.t - this.frozen;
      return this.frozen && e.length ? e[t < 0.2 ? 0 : t < 1.3 ? 1 : 2] : null;
    }
    collectHd(e, t, n, r) {
      if (this.done) return;
      let i = this.art(`maelis`, `Far light`);
      if (this.hollowed() && i.length) {
        let a = this.far();
        xz(e, t, this.farFrame(i), a.x * 16, a.y * 16, a.y * 16, n, r, {
          ax: 14,
          ay: 40,
        });
      }
      let a = this.shell();
      (a &&
        xz(e, t, a, this.me.x * 16, this.me.y * 16, this.me.y * 16 + 1, n, r, {
          ax: 11,
          ay: 30,
        }),
        (this.pins = this.pins.filter((e) => this.t < e.t0 + e.dur)));
      for (let i of this.pins) {
        let a = i.ground ? null : i.at();
        a &&
          xz(
            e,
            t,
            Rk(i.frames, (this.t - i.t0) / i.dur),
            a.x,
            a.y,
            (i.foot?.() ?? a.y) + 1,
            n,
            r,
            { ax: i.ax, ay: i.ay },
          );
      }
    }
    drawAfter(e, t, n, r) {
      if (this.done) return;
      let i = this.t;
      if (this.hollowed()) {
        let a = this.art(`maelis`, `Far light`),
          o = this.far(),
          s = this.singing();
        a.length &&
          !r &&
          Bk(e, this.farFrame(a), o.x * 16 - t, o.y * 16 - n, {
            ax: 14,
            ay: 40,
          });
        let c = this.art(`maelis`, `The thread`);
        if (s && c.length && this.answerT && i >= this.answerT) {
          let a = this.throat();
          r
            ? Tz(
                r,
                c,
                i,
                8,
                a.x,
                this.m.ry * 16,
                this.m.ry * 16 - a.y,
                o.x * 16,
                o.y * 16,
                0,
              )
            : Wk(e, c, i, a.x - t, a.y - n, o.x * 16 - t, o.y * 16 - n, {
                fps: 8,
              });
        }
      }
      if (this.singing()) {
        let a = i - this.hymnT0,
          o = Math.min(5, Math.floor(a)),
          s = this.m.rx * 16 - t,
          c = this.m.ry * 16 - n,
          l = this.art(`hymn`, `Hymn rings`);
        l.length && !r && Bk(e, l[o], s, c, { ax: 20, ay: 47 });
        let u = this.art(`hymn`, `The song`);
        u.length && !r && Bk(e, u[o], s, c, { ax: bV, ay: xV });
        let d = this.cast,
          f = d.need > 0 ? d.dealt / d.need : 0;
        !r && this.hollowed()
          ? Bk(
              e,
              jV(this.art(`maelis`, `Two seals`), S[this.g.school].colors.glow)[
                +(f >= 0.5)
              ],
              s,
              c,
              { ax: bV, ay: 66 },
            )
          : !r &&
            f >= 0.3 &&
            Bk(
              e,
              kV(this.art(`hymn`, `Breaking it`))[
                Math.min(2, Math.floor(f / 0.3) - 1)
              ],
              s,
              c,
              { ax: bV, ay: xV },
            );
        let p = this.art(`hymn`, `Held water`),
          m = FB(`wisp`).float;
        if (p.length)
          for (let r of this.adds) {
            if (r.kind !== `wisp` || r.m.doc.dead) continue;
            let a = m
              ? Math.sin(this.g.time * 3 + r.m.anim) * m.amp + m.base
              : 0;
            Bk(
              e,
              i - (this.glance.get(r) ?? -9) < 0.3
                ? p[2]
                : p[[0, 1, 3][Math.floor(i * 4) % 3]],
              r.m.rx * 16 - t,
              r.m.ry * 16 - 9 + a - n,
            );
          }
      }
      for (let r of this.rings)
        if (r.who === 0) {
          for (let a of this.rings)
            if (a.who === 1)
              for (let o of NV(r, (i - r.t0) * CV, a, (i - a.t0) * CV)) {
                if (!this.inRoom(o.x, o.y, -0.5)) continue;
                let r = Math.round(o.x * 16 - t),
                  i = Math.round(o.y * 16 - n);
                ((e.fillStyle = yV[4]),
                  e.fillRect(r - 1, i, 3, 1),
                  e.fillRect(r, i - 1, 1, 3),
                  (e.fillStyle = `#ffffff`),
                  e.fillRect(r, i - 2, 1, 1));
              }
        }
      if (r) return;
      let a = this.shell();
      (a &&
        Bk(e, a, this.me.x * 16 - t, this.me.y * 16 - n, { ax: 11, ay: 30 }),
        this.drawPins(e, t, n, !1));
    }
  },
  nae = class extends Ez {
    use(e) {
      if (e === `misfire`) {
        let e = [...this.run.mobs.values()].find(
            (e) =>
              e.kind === `clutch` &&
              !e.m.doc.dead &&
              Math.hypot(e.m.rx - this.m.rx, e.m.ry - this.m.ry) < 14,
          ),
          t = Math.random() < 0.5,
          n =
            t && e
              ? { x: e.m.rx, y: e.m.ry }
              : t
                ? this.spot(0)
                : { x: this.me.x, y: this.me.y },
          r = { t: `circle`, x: n.x, y: n.y, r: 2.2 };
        (this.meteor(n),
          this.hitShape(r, 1.4, `#ff7a1a`, { frac: 0.24 }, () => {
            this.misfired();
            for (let e of this.run.mobs.values())
              !e.m.doc.dead &&
                !e.boss &&
                wf(r, e.m.rx, e.m.ry) &&
                ((e.m.doc.dead = !0),
                (e.m.dying = 0.5),
                this.g.monsterDeath(e.m));
          }));
      }
      e === `sputter` &&
        this.sputter(
          { x: this.m.rx, y: this.m.ry - 0.8 },
          { x: this.me.x, y: this.me.y - 0.4 },
          this.mh() * 0.1,
        );
    }
    meteor(e) {
      this.g.meteors.push({
        x: e.x * 16 + 90,
        y: e.y * 16 - 220,
        tx: e.x * 16,
        ty: e.y * 16,
        t: 0,
        dur: 1.4,
        school: `pyro`,
      });
    }
    misfired() {
      ((this.g.shake = Math.max(this.g.shake, 8)), q.sfx(`boom`, 0.8));
    }
    sputter(e, t, n) {
      this.run.shoot(e, t, n, `#ff7a1a`, `#b01a2a`, 7);
    }
    hostEvent(e) {
      let t = { x: e.x ?? this.m.rx, y: e.y ?? this.m.ry },
        n = e.args ?? [];
      e.name === `meteor`
        ? this.meteor(t)
        : e.name === `misfired`
          ? this.misfired()
          : e.name === `sputter`
            ? this.sputter(t, { x: n[0] ?? this.me.x, y: n[1] ?? this.me.y }, 0)
            : super.hostEvent(e);
    }
    move(e) {
      let t = Math.hypot(this.me.x - this.m.rx, this.me.y - this.m.ry);
      t < 4
        ? this.run.step(
            this.mob,
            this.m.rx * 2 - this.me.x,
            this.m.ry * 2 - this.me.y,
            1.6 * e,
            !1,
          )
        : t > 7 && this.run.step(this.mob, this.me.x, this.me.y, 1.6 * e, !0);
    }
  },
  PV = Math.PI * 2,
  FV = { x: 16, y: -27 },
  IV = { x: 1, y: -14 },
  rae = [`#1e0e0c`, `#8a4a32`, `#6a3424`, `#ff7a1a`, `#ffe08a`],
  LV = 3,
  RV = 0.6,
  zV = 8,
  iae = 1,
  BV = 29,
  aae = new Set([
    `#4a0e06`,
    `#7a1a08`,
    `#b0300a`,
    `#e0561a`,
    `#ff8a2a`,
    `#ffb84a`,
    `#ffe08a`,
    `#281a16`,
    `#34221c`,
  ]),
  VV = new WeakMap();
