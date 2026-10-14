// index-BTsv3a2s 173 — math
// Lines 98780-100519 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var Rae = class extends Ez {
  tone = `ember`;
  toneT = 0;
  weave = [`storm`, `ember`];
  lamps = [];
  shards = { ember: 0, rime: 0, storm: 0, void: 0 };
  threads = [];
  drinks = 0;
  drinkGlow = 0;
  rift = null;
  strafe = 1;
  blinkCd = 0;
  unmakingDone = !1;
  frame = 0;
  still = 0;
  nextNeedles = 0;
  volley = null;
  siphon = null;
  beat = null;
  veil = null;
  pour = null;
  circle = null;
  floor = [];
  lastMe = { x: 0, y: 0 };
  looks = {};
  body = null;
  bodyT = 0;
  bodyFlash = 0;
  veilT0 = 0;
  doing = null;
  siphonWho;
  onEngage() {
    ((this.toneT = this.t),
      (this.tone = `ember`),
      (this.drinks = 0),
      (this.lampsLit = 0),
      (this.unmakingDone = !1),
      (this.nextNeedles = this.t + 2));
    let e = this.run.f;
    this.threads = ys(e)
      .filter(
        (e) =>
          e.how === `thread` &&
          !this.run.run.freed.includes(e.id) &&
          !this.run.run.lost.includes(e.id),
      )
      .map((t) => {
        let n = Uy(e.props.find((n) => `${e.index}:${n.x},${n.y}` === t.id));
        return { c: t, x: n.x / 16, y: n.y / 16 - 0.8, cut: 0 };
      });
  }
  onReset() {
    if (!this.hosted)
      for (let e of this.lamps)
        (this.g.monsters.delete(e.id), this.run.mobs.delete(e.id));
    ((this.lamps = []),
      (this.shards = { ember: 0, rime: 0, storm: 0, void: 0 }),
      (this.rift = null),
      (this.m.ghost = !0),
      this.calm());
  }
  calm() {
    ((this.still = 0),
      (this.volley = null),
      (this.siphon = null),
      (this.beat = null),
      (this.veil = null),
      (this.pour = null),
      (this.circle = null),
      (this.floor = []),
      (this.doing = null));
  }
  live() {
    return (this.body ??= new DH(
      this.mob.id,
      this.m.rx * 16,
      this.m.ry * 16,
      1,
    ));
  }
  heart() {
    let e = this.live().heart();
    return { x: this.m.rx + e.dx / 16, y: this.m.ry + e.dy / 16 };
  }
  hand() {
    let e = this.live().hand();
    return { x: this.m.rx + e.dx / 16, y: this.m.ry + e.dy / 16 };
  }
  acting(e, t) {
    this.doing = { kind: e, t0: this.t, dur: t };
  }
  chest() {
    let e =
      this.siphonWho && !this.run.isMe(this.siphonWho)
        ? [...this.g.remotes.values()].find(
            (e) => String(e.doc._id) === this.siphonWho,
          )
        : null;
    return e
      ? { x: e.rx, y: e.ry - 0.75 }
      : { x: this.me.x, y: this.me.y - 0.75 };
  }
  whole() {
    return this.threads.filter(
      (e) =>
        !this.run.run.freed.includes(e.c.id) &&
        !this.run.run.lost.includes(e.c.id),
    );
  }
  busy() {
    return (
      this.still > this.t ||
      !!this.veil ||
      !!this.pour ||
      !!this.siphon ||
      !!this.beat ||
      !!this.volley
    );
  }
  lookOf(e, t) {
    return (this.looks[e] ??= t());
  }
  modify(e, t) {
    return (
      this.hp() <= 0.15 &&
        !this.unmakingDone &&
        !this.cast &&
        this.startUnmaking(),
      t
    );
  }
  onHit(e, t) {
    let n = super.onHit(e, t);
    return !this.unmakingDone && this.m.doc.hp - n <= this.m.doc.maxHp * 0.05
      ? (this.cast || this.startUnmaking(),
        Math.max(0, this.m.doc.hp - Math.ceil(this.m.doc.maxHp * 0.05)))
      : n;
  }
  startUnmaking() {
    (this.run.say(
      `Lillith`,
      `You taught me the Ward, Master. You taught me where it's weakest.`,
      5,
    ),
      (this.shield = null),
      this.siphon && this.snap(),
      (this.volley = null),
      this.begin(
        `The Unmaking`,
        `The fourth Canticle, on your Ember. Deal 15% of her health in 10 s`,
        10,
        0.15,
        (e) => {
          this.unmakingDone = !0;
          let t = { x: this.me.x, y: this.me.y };
          if (e) {
            this.run.say(
              `Lillith`,
              `* The Canticle comes apart in her hands. She staggers.`,
              4,
            );
            let e = this.strip(`unmaking`, `Broken`);
            e &&
              this.floor.push({
                frames: e,
                x: t.x,
                y: t.y,
                t0: this.t,
                dur: 1,
              });
            return;
          }
          let n = this.strip(`unmaking`, `Sigil`);
          (n &&
            this.floor.push({
              frames: [n[n.length - 1]],
              x: t.x,
              y: t.y,
              t0: this.t,
              dur: 0.9,
              fade: 0.3,
            }),
            this.play(`unmaking`, `Pillar`, t.x, t.y, {
              dur: 0.6,
              ax: 22,
              ay: 88,
            }),
            this.after(0.25, () =>
              this.play(`unmaking`, `Unmade`, t.x, t.y - 0.5, {
                dur: 1.1,
                ax: 32,
                ay: 40,
              }),
            ),
            (this.g.flash = { color: `#12050a`, a: 1 }),
            (this.g.shake = 16),
            q.sfx(`boom`, 1),
            this.g.api.dungeon.unmade(),
            (this.run.run.ember = Math.max(0, this.run.run.ember - 2)));
          let r = this.run.run.diff === `hollowed` && this.run.run.ember <= 0;
          this.run.hitMe(r ? this.mh() * 2 : this.mh() * 0.5, {
            heavy: !0,
            lethal: r,
          });
        },
      ));
  }
  use(e) {
    let t = this.me;
    switch (e) {
      case `lance`:
        if (this.phaseI === 0 && this.tone !== `ember`) return !1;
        ((this.frame = 2),
          this.acting(`cast`, 1),
          this.hitShape(this.lineThroughMe(1.2), 1, Eo.ember, { frac: 0.16 }));
        break;
      case `stillfield`:
        if (this.phaseI === 0 && this.tone !== `rime`) return !1;
        this.acting(`cast`, 0.8);
        for (let e = 0; e < 3; e++) {
          let n = {
            t: `circle`,
            x: t.x + (e === 0 ? 0 : (Math.random() - 0.5) * 5),
            y: t.y + (e === 0 ? 0 : (Math.random() - 0.5) * 4),
            r: 1.6,
          };
          this.hitShape(n, 1.2, Eo.rime, { frac: 0.1 }, () =>
            this.run.zone(n, 5, 0, `#bff0ff`, { slow: 0.5 }),
          );
        }
        break;
      case `arcjump`:
        if (this.phaseI === 0 && this.tone !== `storm`) return !1;
        ((this.frame = 2),
          this.acting(`cast`, 1.1),
          this.atMe(1.1, 0.8, Eo.storm, 0.14, () => {
            (this.g.beams.push({
              pts: [
                { x: this.m.rx * 16, y: (this.m.ry - 1.6) * 16 },
                { x: t.x * 16, y: (t.y - 0.4) * 16 },
              ],
              life: 0.3,
              max: 0.3,
              color: `#fff36b`,
              core: `#ffffff`,
              wavy: !0,
            }),
              q.sfx(`zap`, 0.7));
          }));
        break;
      case `veilstep`:
        return this.phaseI === 0 && this.tone !== `void` ? !1 : this.veilStep();
      case `stormfire`: {
        this.acting(`cast`, 1);
        let e = this.atMe(1.6, 1.4, `#fff36b`, 0.2, () => {
          (this.run.zone({ ...e }, 3, 0.05, `#ff7a1a`, { hot: !0 }),
            q.sfx(`zap`, 0.7));
        });
        break;
      }
      case `frostvoid`: {
        this.acting(`cast`, 1);
        let e = t.x,
          n = t.y;
        this.hitShape(
          { t: `circle`, x: e, y: n, r: 1.8 },
          1.4,
          Eo.void,
          { frac: 0.18 },
          (t) => {
            ((this.rift = {
              x: e,
              y: n,
              t0: this.t,
              until: this.t + 3,
              blood: !1,
            }),
              t && this.run.freeze(1.2));
          },
        );
        break;
      }
      case `lamps`:
        return this.lightLamps();
      case `drink`:
        return this.drink();
      case `thin`: {
        let e = this.room,
          t = Math.floor(Math.random() * 4),
          n = {
            t: `rect`,
            x: t % 2 ? e.x + e.w / 2 : e.x,
            y: t < 2 ? e.y : e.y + e.h / 2,
            w: e.w / 2,
            h: e.h / 2,
          };
        (this.hitShape(n, 2, `#ffffff`, { frac: 0.5 }),
          this.run.say(
            `Lillith`,
            `* The ward over one quarter of the hall goes thin.`,
            2,
          ));
        break;
      }
      case `woven`: {
        let e = { t: `circle`, x: t.x, y: t.y, r: 2 };
        ((this.frame = 2),
          this.acting(`woven`, 2.2),
          this.hitShape(e, 2.2, `#ffffff`, { frac: 0.3 }));
        break;
      }
      case `siphon`:
        return this.siphonThread();
      case `heartbeat`:
        return this.heartbeat();
      case `hemorrhage`:
        return this.hemorrhage();
      case `unmaking`:
        return !1;
    }
  }
  needles() {
    (this.bead(this.me), this.after(0.5, () => this.loose()));
  }
  bead(e) {
    let t = this.hand(),
      n = Math.atan2(e.y - MH - t.y, e.x - t.x),
      r = this.live().handFor(`needles`, Math.cos(n), Math.sin(n));
    ((t = { x: this.m.rx + r.dx / 16, y: this.m.ry + r.dy / 16 }),
      (n = Math.atan2(e.y - MH - t.y, e.x - t.x)),
      (this.volley = { t0: this.t, a: n, hand: t }),
      (this.still = Math.max(this.still, this.t + 0.5)),
      (this.frame = 2),
      this.play(
        `needles`,
        `Bead`,
        t.x + (Math.cos(n) * 6) / 16,
        t.y + (Math.sin(n) * 6) / 16,
        { dur: 0.5, angle: n },
      ));
  }
  loose(e, t = !0) {
    let n = this.volley;
    if (((this.volley = null), !n || this.cast)) return;
    let r = this.lookOf(`needle`, () => {
      let e = this.strip(`needles`, `Hit`) ?? [];
      return {
        sprite: this.strip(`needles`, `Needle`),
        impact: e.length ? [...e, ...Array(18).fill(e[e.length - 1])] : null,
      };
    });
    for (let i = 0; i < 5; i++) {
      let a = (e ?? n.a) + (i / 4 - 0.5) * NH,
        o = this.clear(n.hand, a),
        s = n.hand.x + Math.cos(a) * o,
        c = n.hand.y + Math.sin(a) * o;
      this.run.shoot(
        { x: s, y: c },
        { x: s + Math.cos(a), y: c + Math.sin(a) },
        t ? this.mh() * 0.07 : 0,
        AH,
        OH[4],
        8,
        { look: r },
      );
    }
    q.sfx(`bolt`, 0.5);
  }
  clear(e, t) {
    for (let n = 0; n < 2; n += 0.125)
      if (!this.run.solid(e.x + Math.cos(t) * n, e.y + Math.sin(t) * n + 0.3))
        return n;
    return 0;
  }
  siphonThread() {
    if (this.busy() || this.cast) return !1;
    ((this.siphon = { t0: this.t, hooked: !1, until: 0, tick: 0, healed: 0 }),
      (this.still = this.t + 6),
      (this.frame = 2),
      (this.lastMe = { x: this.me.x, y: this.me.y }),
      q.sfx(`cast`, 0.5));
  }
  snap() {
    let e = this.siphon;
    if (((this.siphon = null), (this.still = this.t), !e)) return;
    let t = this.hand(),
      n = this.chest(),
      r = Math.atan2(n.y - t.y, n.x - t.x),
      i = this.strip(`siphon`, `Snap`);
    if (i) {
      let e = Math.cos(r) < 0,
        a = e ? 4 : -5;
      this.run.fx.add(
        e ? IH(i, `y`) : i,
        (t.x + n.x) / 2 + (Math.sin(r) * a) / 16,
        (t.y + n.y) / 2 - (Math.cos(r) * a) / 16,
        { dur: 0.6, angle: r },
      );
    }
    (e.healed > 0 &&
      this.g.floater(
        this.m.rx * 16,
        this.m.ry * 16 - 44,
        `+${Math.round(e.healed)}`,
        yz,
        !0,
      ),
      q.sfx(`hit`, 0.5));
  }
  tickSiphon(e) {
    let t = this.siphon,
      n = this.me,
      r = Math.hypot(n.x - this.lastMe.x, n.y - this.lastMe.y) > Nae;
    if (((this.lastMe = { x: n.x, y: n.y }), !t)) return;
    if (this.g.meDoc?.dead || this.cast) return this.snap();
    let i = this.t - t.t0;
    if (!t.hooked) {
      if (r) return this.snap();
      i >= 1 && ((t.hooked = !0), (t.until = this.t + 4), q.sfx(`hurt`, 0.4));
      return;
    }
    if (r || Math.hypot(n.x - this.m.rx, n.y - this.m.ry) > 6)
      return this.snap();
    if (this.t >= t.until) {
      (t.healed > 0 &&
        this.g.floater(
          this.m.rx * 16,
          this.m.ry * 16 - 44,
          `+${Math.round(t.healed)}`,
          yz,
          !0,
        ),
        (this.siphon = null),
        (this.still = this.t));
      return;
    }
    if (((t.tick += e), t.tick >= 0.5)) {
      ((t.tick -= 0.5), this.run.hitMe(this.mh() * 0.02));
      let e = this.m.doc.maxHp * 0.0025;
      ((t.healed += Math.min(e, this.m.doc.maxHp - this.m.doc.hp)),
        (this.m.doc.hp = Math.min(this.m.doc.maxHp, this.m.doc.hp + e)));
    }
  }
  heartbeat() {
    if (this.busy() || this.cast) return !1;
    this.beatAt(
      Math.atan2(this.me.y - this.m.ry, this.me.x - this.m.rx),
      this.m.rx,
      this.m.ry,
    );
  }
  beatAt(e, t, n, r = !0) {
    ((this.beat = { t0: this.t, a: e, x: t, y: n }),
      (this.still = this.t + 1.8),
      q.sfx(`cast`, 0.4));
    let i = (e) => {
      let t = this.beat;
      if (!t || this.cast) return;
      let n = this.lookOf(`orb`, () =>
        this.look(`heartbeat`, { sprite: `Orb`, impact: `Pop`, rim: !1 }),
      );
      for (let i = 0; i < 16; i++) {
        let a = e + (i / 16) * jH,
          o = t.x + Math.cos(a) * 0.5,
          s = t.y - MH + Math.sin(a) * 0.5;
        (this.run.shoot(
          { x: o, y: s },
          { x: o + Math.cos(a), y: s + Math.sin(a) },
          r ? this.mh() * 0.1 : 0,
          OH[1],
          OH[4],
          5,
          { look: n },
        ),
          (this.run.shots[this.run.shots.length - 1].life = 8.5 / 5));
      }
      (q.sfx(`boom`, 0.35), (this.g.shake = Math.max(this.g.shake, 3)));
    };
    (this.after(1.2, () => i(this.beat?.a ?? 0)),
      this.after(1.6, () => {
        (i((this.beat?.a ?? 0) + Math.PI / 16),
          this.after(0.4, () => (this.beat = null)));
      }));
  }
  hemorrhage() {
    if (this.cast) return !1;
    this.acting(`rain`, 1.5);
    let e = this.me,
      t = [{ x: e.x, y: e.y }];
    for (let n = 0; n < 40 && t.length < 3; n++) {
      let n = Math.random() * jH,
        r = 2.6 + Math.random() * 3,
        i = { x: e.x + Math.cos(n) * r, y: e.y + Math.sin(n) * r };
      this.inRoom(i.x, i.y, -0.5) &&
        this.run.walkTile(Math.floor(i.x), Math.floor(i.y)) &&
        (t.some((e) => Math.hypot(e.x - i.x, e.y - i.y) < 2.6) || t.push(i));
    }
    let n = this.hostLook(`drips`),
      r = this.hostLook(`pool`);
    for (let e of t) {
      let t = { t: `circle`, x: e.x, y: e.y, r: 1.2 };
      (this.hitShape(
        t,
        1.4,
        AH,
        { frac: 0.12 },
        () => {
          (this.splash(e),
            this.run.zone(t, 6, 0, AH, { slow: 0.4, label: `blood`, look: r }));
        },
        n,
      ),
        this.after(1.15, () => this.drop(e)));
    }
  }
  drop(e) {
    this.play(`hemorrhage`, `Drop`, e.x, e.y, { dur: 0.25, ax: 7, ay: 38 });
  }
  splash(e) {
    (this.play(`hemorrhage`, `Splash`, e.x, e.y, { dur: 0.5, ax: 22, ay: 25 }),
      q.sfx(`hit`, 0.4));
  }
  hostLook(e) {
    if (e === `drips`)
      return this.lookOf(`drips`, () =>
        this.look(`hemorrhage`, { tele: `Drips`, rim: !1 }),
      );
    if (e === `pool`)
      return this.lookOf(`pool`, () =>
        this.look(`hemorrhage`, { frames: `Pool` }),
      );
    if (e === `veil`)
      return this.lookOf(`veil`, () => ({
        tele: this.strip(`veilstep`, `Vortex`)?.slice(0, 2) ?? null,
      }));
  }
  veilStep() {
    if (this.busy() || this.cast) return !1;
    let e = { x: this.m.rx, y: this.m.ry };
    ((this.veil = e), (this.veilT0 = this.t), (this.still = this.t + 0.8));
    let t = this.hostLook(`veil`);
    (this.hitShape(
      { t: `circle`, x: e.x, y: e.y, r: 1 },
      0.8,
      AH,
      { frac: 0.12 },
      () => {
        ((this.veil = null), !this.cast && this.step(this.spot(5), !0));
      },
      t,
    ),
      q.sfx(`cast`, 0.4));
  }
  step(e, t, n) {
    let r = n ?? { x: this.m.rx, y: this.m.ry };
    ((this.pour = { t0: this.t, from: r, to: e, cracks: !t }),
      (this.m.rx = e.x),
      (this.m.ry = e.y),
      t &&
        (this.rift = {
          x: r.x,
          y: r.y,
          t0: this.t,
          until: this.t + 4,
          blood: !0,
        }));
    for (let t = 0; t < 26; t++) {
      let n = t / 26,
        i = r.x + (e.x - r.x) * n,
        a = r.y + (e.y - r.y) * n - 1.2 - Math.sin(n * Math.PI) * 1.6;
      this.g.particles.spawn({
        x: i * 16,
        y: a * 16,
        vx: (Math.random() - 0.5) * 20,
        vy: 10 + Math.random() * 20,
        life: 0.5 + n * 0.4,
        size: 1,
        color: t % 3 ? OH[2] : OH[3],
        glow: !0,
        drag: 2,
      });
    }
    (this.g.particles.burst(
      r.x * 16,
      r.y * 16 - 16,
      24,
      [OH[2], OH[3], kH[0]],
      70,
    ),
      q.sfx(`blink`, 0.6));
  }
  lampsLit = 0;
  lightLamps() {
    if (this.lampsLit >= 2) return !1;
    (this.lampsLit++, this.acting(`lamps`, 1.6));
    let e = this.weave;
    this.weave = e[0] === `storm` ? [`rime`, `void`] : [`storm`, `ember`];
    let t = this.run.f.props.filter(
      (e) => e.kind === `pylon` && e.room === this.room.index,
    );
    for (let n of e) {
      if (this.lamps.some((e) => e.tone === n && !e.m.doc.dead)) continue;
      let e = t.find((e) => e.tone === n);
      if (!e) continue;
      let r = this.run.spawn(`pylon_${n}`, e.x + 0.5, e.y + 0.9, {
        tier: `elite`,
        object: !0,
        room: this.room.index,
        level: this.mob.level,
        summoned: !0,
      });
      ((r.onlyTone = wo[n]),
        (r.tone = n),
        (r.m.doc.hp = r.m.doc.maxHp = Math.round(r.m.doc.maxHp * 0.5)),
        this.lamps.push(r));
      let i = this.spot(3),
        a = this.add(`tonemote_${wo[n]}`, i.x, i.y, { hp: 0.6 });
      ((a.tone = wo[n]),
        (a.onDeath = () => {
          (this.shards[wo[n]]++,
            this.g.floater(
              a.m.rx * 16,
              a.m.ry * 16 - 30,
              `${UH(wo[n])} ward-light`,
              Eo[wo[n]],
              !0,
            ));
        }));
    }
    ((this.shield = `Shielded by her lamps`),
      this.run.say(
        `Lillith`,
        `* The ${e[0]} and ${e[1]} lamps flare. Her ward closes around her. Put them out with their opposed tones.`,
        4,
      ));
  }
  drink() {
    if (!this.whole().length || this.veil || this.pour) return !1;
    (this.drinking(this.drinks + 1),
      this.run.telegraph(
        { t: `circle`, x: this.m.rx, y: this.m.ry, r: 0.5 },
        2,
        yz,
        () => {
          let e = this.whole(),
            t = Math.round(this.m.doc.maxHp * _s.healPerThread * e.length);
          if (
            ((this.m.doc.hp = Math.min(this.m.doc.maxHp, this.m.doc.hp + t)),
            this.drank(t),
            this.drinks > _s.drinksToDrain)
          ) {
            for (let t of e)
              (this.run.run.lost.push(t.c.id),
                this.g.api.dungeon
                  .open(this.run.run.floor, `lost`, t.c.id)
                  .catch(() => {}),
                this.runDry(t));
            this.dryLine(e.length);
          }
        },
      ));
  }
  drinking(e) {
    ((this.drinks = e),
      (this.drinkGlow = this.t + 2),
      (this.still = Math.max(this.still, this.t + 2)),
      (this.circle = { t0: this.t, x: this.m.rx, y: this.m.ry }),
      this.run.say(
        `Lillith`,
        this.drinks === 1
          ? `* She drinks from the circle. Cut the threads: stand in one.`
          : `* She drinks again (${this.drinks}).${this.drinks >= _s.drinksToDrain ? ` The next will run them dry.` : ``}`,
        4,
      ));
  }
  drank(e) {
    if (!e) return;
    this.g.floater(this.m.rx * 16, this.m.ry * 16 - 44, `+${e}`, yz, !0);
    let t = this.heart();
    this.play(`drink`, `Heal`, t.x, t.y, { dur: 0.6, ax: 22, ay: 20 });
  }
  runDry(e) {
    let t = this.strip(`drink`, `Runs dry`);
    (this.g.particles.burst(e.x * 16, e.y * 16, 20, [`#3a0a18`, `#5a5058`], 40),
      t && this.alongThread(t, e, 1.2, `end`));
  }
  dryLine(e) {
    e &&
      this.run.say(
        `Lillith`,
        `* ${e === 1 ? `A thread runs` : `The threads run`} dry. ${e === 1 ? `Someone` : `They`} slump${e === 1 ? `s` : ``}, and don't get up.`,
        5,
      );
  }
  alongThread(e, t, n, r, i = 0) {
    let a = this.heart(),
      o = Math.atan2(a.y - t.y, a.x - t.x),
      s = Math.cos(o) < 0,
      c = o - (s ? Math.atan2(-24, -41) : Math.atan2(-24, 41)),
      l = (s ? IH(e, `x`) : e).slice(i);
    if (r === `end`) {
      let e = s ? -19 : 20,
        r = t.x + (Math.cos(c) * e - Math.sin(c) * -11) / 16,
        i = t.y + (Math.sin(c) * e + Math.cos(c) * -11) / 16;
      this.run.fx.add(l, r, i, { dur: n, angle: c });
    } else this.run.fx.add(l, r.x, r.y, { dur: n, angle: c });
  }
  targets() {
    let e = [];
    for (let t of this.lamps) {
      if (t.m.doc.dead || !t.onlyTone) continue;
      let n = t.onlyTone;
      if (Cs[this.g.school] === n) continue;
      let r = this.shards[n] > 0;
      e.push({
        label: r
          ? `Put out the ${t.tone} lamp (${n} ward-light)`
          : `The ${t.tone} lamp needs ${n}`,
        x: t.m.rx,
        y: t.m.ry,
        reach: 2,
        use: () => {
          if (!r)
            return this.g.floater(
              this.me.x * 16,
              this.me.y * 16 - 36,
              `Kill a ${n} Ward-mote first`,
              Eo[n],
              !1,
            );
          if (this.hosted) {
            this.g.api.dungeon
              .touch?.(`lamp:${t.tone}`)
              .catch((e) =>
                this.g.api.dungeon.toast(
                  e instanceof Error ? e.message : String(e),
                  `#ff7a8a`,
                ),
              );
            return;
          }
          (this.shards[n]--,
            (t.m.doc.dead = !0),
            (t.m.dying = 0.5),
            this.g.monsterDeath(t.m),
            this.g.floater(
              t.m.rx * 16,
              t.m.ry * 16 - 30,
              `The lamp goes out`,
              Eo[t.tone ?? `ember`],
              !0,
            ));
        },
      });
    }
    return e;
  }
  onThread(e, t) {
    let n = this.me;
    if (!(
      wf(
        { t: `line`, x0: e.x, y0: e.y, x1: t.x, y1: t.y, w: 1.1 },
        n.x,
        n.y - 0.3,
      ) && Math.hypot(n.x - e.x, n.y - e.y) > 0.6
    ))
      return null;
    let r = t.x - e.x,
      i = t.y - e.y,
      a = Math.max(
        0,
        Math.min(
          1,
          ((n.x - e.x) * r + (n.y - 0.3 - e.y) * i) / (r * r + i * i || 1),
        ),
      );
    return { x: e.x + r * a, y: e.y + i * a };
  }
  tick(e) {
    let t = this.me;
    if (
      (!this.hosted &&
        this.phaseI === 0 &&
        this.t - this.toneT > 12 &&
        ((this.toneT = this.t),
        (this.tone = Co[(Co.indexOf(this.tone) + 1) % 4]),
        this.g.floater(
          this.m.rx * 16,
          this.m.ry * 16 - 50,
          UH(this.tone),
          Eo[this.tone],
          !0,
        )),
      !this.hosted &&
        this.shield &&
        this.lamps.every((e) => e.m.doc.dead) &&
        ((this.shield = null),
        this.run.say(`Lillith`, `* Her ward gutters. She's open.`, 2.5)),
      this.hosted || this.tickSiphon(e),
      this.pour && this.t - this.pour.t0 > 0.9 && (this.pour = null),
      (this.floor = this.floor.filter((e) => this.t - e.t0 < e.dur)),
      this.circle && this.t - this.circle.t0 > 2.6 && (this.circle = null),
      this.rift)
    ) {
      if (this.t > this.rift.until) this.rift = null;
      else if (!this.rift.blood || this.t - this.rift.t0 > 0.15) {
        let n = this.rift.x - t.x,
          r = this.rift.y - t.y,
          i = Math.hypot(n, r);
        if (i < 5 && i > 0.3) {
          let a = t.x + (n / i) * 1.3 * e,
            o = t.y + (r / i) * 1.3 * e;
          this.run.canStand(a, o) &&
            ((t.x = a), (t.y = o), (this.lastMe = { x: a, y: o }));
        }
      }
    }
    let n = this.heart();
    for (let r of this.whole()) {
      let i = this.onThread(r, n);
      i
        ? ((r.cut += e),
          Math.random() < e * 20 &&
            this.g.particles.spawn({
              x: t.x * 16,
              y: t.y * 16 - 12,
              vz: 20,
              life: 0.4,
              size: 1,
              color: yz,
              glow: !0,
            }),
          r.cut >= _s.cutS &&
            !this.hosted &&
            (this.run.run.freed.push(r.c.id),
            this.cutFx(r, i),
            this.g.api.dungeon
              .open(this.run.run.floor, `free`, r.c.id)
              .then((e) =>
                this.run.cheer(e?.names ?? [], [{ x: r.x, y: r.y + 0.6 }]),
              )))
        : (r.cut = Math.max(0, r.cut - e * 2));
    }
    this.frame === 2 &&
      !this.volley &&
      !this.siphon &&
      Math.random() < e * 3 &&
      (this.frame = 0);
  }
  cutFx(e, t) {
    (this.g.floater(
      e.x * 16,
      e.y * 16 - 20,
      `The thread is cut`,
      `#ffd166`,
      !0,
    ),
      q.sfx(`chime`, 0.8));
    let n = this.strip(`drink`, `Cut`);
    n && this.alongThread(n, e, 0.6, t, 3);
  }
  hostTick(e) {
    if (this.engaged && !this.done) {
      this.lamps = [];
      for (let [e, t] of this.g.monsters) {
        let n =
            !t.local && !t.doc.dead
              ? /^pylon_(ember|rime|storm|void)$/.exec(t.doc.kind)?.[1]
              : void 0,
          r = n && this.inRoom(t.rx, t.ry, 0) ? this.run.hostMob(e) : null;
        r && n && ((r.tone = n), (r.onlyTone = wo[n]), this.lamps.push(r));
      }
      this.tick(e);
    }
  }
  hostEvent(e) {
    let t = e.args ?? [],
      n = { x: e.x ?? this.m.rx, y: e.y ?? this.m.ry },
      r = () => this.threads.find((t) => t.c.id === e.text);
    switch (e.name) {
      case `acting`:
        (this.acting(e.text ?? `cast`, t[0] ?? 1), t[1] && (this.frame = 2));
        break;
      case `tone`:
        ((this.toneT = this.t),
          (this.tone = Co[t[0] ?? 0]),
          this.g.floater(
            this.m.rx * 16,
            this.m.ry * 16 - 50,
            UH(this.tone),
            Eo[this.tone],
            !0,
          ));
        break;
      case `needles`:
        this.bead(n);
        break;
      case `needled`:
        this.loose(t[0], !1);
        break;
      case `arc`:
        (this.g.beams.push({
          pts: [
            { x: (t[0] ?? 0) * 16, y: (t[1] ?? 0) * 16 },
            { x: (t[2] ?? 0) * 16, y: (t[3] ?? 0) * 16 },
          ],
          life: 0.3,
          max: 0.3,
          color: `#fff36b`,
          core: `#ffffff`,
          wavy: !0,
        }),
          q.sfx(`zap`, 0.7));
        break;
      case `stormfire`:
        (this.run.zone(
          { t: `circle`, x: n.x, y: n.y, r: 1.4 },
          3,
          0.05,
          `#ff7a1a`,
          { hot: !0 },
        ),
          q.sfx(`zap`, 0.7));
        break;
      case `rift`:
        this.rift = {
          x: t[0] ?? n.x,
          y: t[1] ?? n.y,
          t0: this.t,
          until: this.t + (t[2] ?? 3),
          blood: !!t[3],
        };
        break;
      case `veil`:
        ((this.veil = { x: this.m.rx, y: this.m.ry }),
          (this.veilT0 = this.t),
          (this.still = this.t + 0.8),
          q.sfx(`cast`, 0.4));
        break;
      case `pour`:
        ((this.veil = null),
          this.step({ x: t[2] ?? this.m.rx, y: t[3] ?? this.m.ry }, !!t[4], {
            x: t[0] ?? this.m.rx,
            y: t[1] ?? this.m.ry,
          }));
        break;
      case `lamps`: {
        let e = [Co[t[0] ?? 2], Co[t[1] ?? 0]];
        ((this.weave =
          e[0] === `storm` ? [`rime`, `void`] : [`storm`, `ember`]),
          this.run.say(
            `Lillith`,
            `* The ${e[0]} and ${e[1]} lamps flare. Her ward closes around her. Put them out with their opposed tones.`,
            4,
          ));
        break;
      }
      case `wardlight`: {
        let e = Co[t[0] ?? 0];
        (this.shards[e]++,
          this.g.floater(
            n.x * 16,
            n.y * 16 - 30,
            `${UH(e)} ward-light`,
            Eo[e],
            !0,
          ));
        break;
      }
      case `doused`: {
        let e = Co[t[1] ?? 0];
        ((this.shards[e] = Math.max(0, this.shards[e] - 1)),
          this.g.floater(
            n.x * 16,
            n.y * 16 - 30,
            `The lamp goes out`,
            Eo[Co[t[0] ?? 0]],
            !0,
          ));
        break;
      }
      case `open`:
        this.run.say(`Lillith`, `* Her ward gutters. She's open.`, 2.5);
        break;
      case `drink`:
        this.drinking(t[0] ?? this.drinks + 1);
        break;
      case `drank`:
        (this.drank(t[0] ?? 0), t[1] && this.dryLine(this.whole().length));
        break;
      case `dry`: {
        let e = r();
        e &&
          (this.run.run.lost.includes(e.c.id) || this.run.run.lost.push(e.c.id),
          this.runDry(e));
        break;
      }
      case `cut`: {
        let e = r();
        e &&
          (this.run.run.freed.includes(e.c.id) ||
            this.run.run.freed.push(e.c.id),
          this.cutFx(e, n));
        break;
      }
      case `siphon`:
        ((this.siphon = {
          t0: this.t,
          hooked: !1,
          until: 0,
          tick: 0,
          healed: 0,
        }),
          (this.siphonWho = e.who),
          (this.still = this.t + 6),
          (this.frame = 2),
          q.sfx(`cast`, 0.5));
        break;
      case `hooked`:
        (this.siphon &&
          Object.assign(this.siphon, { hooked: !0, until: this.t + 4 }),
          q.sfx(`hurt`, 0.4));
        break;
      case `snap`:
        (this.siphon && (this.siphon.healed = t[0] ?? 0), this.snap());
        break;
      case `siphoned`:
        (t[0] &&
          this.g.floater(
            this.m.rx * 16,
            this.m.ry * 16 - 44,
            `+${Math.round(t[0])}`,
            yz,
            !0,
          ),
          (this.siphon = null),
          (this.still = this.t));
        break;
      case `heartbeat`:
        this.beatAt(t[0] ?? 0, n.x, n.y, !1);
        break;
      case `rain`:
        this.acting(`rain`, 1.5);
        for (let e = 0; e + 1 < t.length; e += 2) {
          let n = { x: t[e], y: t[e + 1] };
          (this.after(1.15, () => this.drop(n)),
            this.after(1.4, () => this.splash(n)));
        }
        break;
      case `thin`:
        this.run.say(
          `Lillith`,
          `* The ward over one quarter of the hall goes thin.`,
          2,
        );
        break;
      case `unmaking`:
        (this.run.say(
          `Lillith`,
          `You taught me the Ward, Master. You taught me where it's weakest.`,
          5,
        ),
          this.siphon && this.snap(),
          (this.volley = null));
        break;
      case `unbroken`: {
        this.run.say(
          `Lillith`,
          `* The Canticle comes apart in her hands. She staggers.`,
          4,
        );
        let e = this.strip(`unmaking`, `Broken`);
        e && this.floor.push({ frames: e, x: n.x, y: n.y, t0: this.t, dur: 1 });
        break;
      }
      case `unmade`: {
        let e = this.strip(`unmaking`, `Sigil`);
        (e &&
          this.floor.push({
            frames: [e[e.length - 1]],
            x: n.x,
            y: n.y,
            t0: this.t,
            dur: 0.9,
            fade: 0.3,
          }),
          this.play(`unmaking`, `Pillar`, n.x, n.y, {
            dur: 0.6,
            ax: 22,
            ay: 88,
          }),
          this.after(0.25, () =>
            this.play(`unmaking`, `Unmade`, n.x, n.y - 0.5, {
              dur: 1.1,
              ax: 32,
              ay: 40,
            }),
          ),
          (this.g.flash = { color: `#12050a`, a: 1 }),
          (this.g.shake = 16),
          q.sfx(`boom`, 1));
        break;
      }
      default:
        super.hostEvent(e);
    }
  }
  move(e) {
    let t = this.me,
      n = this.m.rx - t.x,
      r = this.m.ry - t.y,
      i = Math.hypot(n, r) || 1;
    if (
      ((this.m.doc.facing = n > 0 ? -1 : 1), (this.blinkCd -= e), this.busy())
    )
      return;
    if (i < 2.5 && this.blinkCd <= 0) {
      ((this.blinkCd = 4), this.step(this.spot(5), !1));
      return;
    }
    if (this.t >= this.nextNeedles) {
      ((this.nextNeedles = this.t + 1.6 + Math.random() * 0.8), this.needles());
      return;
    }
    let a = 5.5,
      o = this.m.rx + (-r / i) * this.strafe * 2 + (n / i) * (a - i),
      s = this.m.ry + (n / i) * this.strafe * 2 + (r / i) * (a - i);
    (this.run.walkTile(Math.floor(o), Math.floor(s)) ||
      ((this.strafe *= -1), (o = this.m.rx), (s = this.m.ry)),
      this.run.step(this.mob, o, s, 2.2 * e, !1));
  }
  onEnd() {
    this.calm();
    let e = this.threads.filter((e) => !this.run.run.freed.includes(e.c.id)),
      t =
        this.threads.length > 0 &&
        e.length === 0 &&
        this.threads.every((e) => !this.run.run.lost.includes(e.c.id));
    if (((this.run.parting = bs(t)), !this.hosted))
      for (let e of this.lamps) e.m.doc.dead || (e.m.doc.dead = !0);
    window.setTimeout(
      () => this.run.say(`Lillith`, this.run.parting ?? ``, 7),
      8e3,
    );
  }
  livePose() {
    let e = this.t,
      t = this.me,
      n =
        this.phaseI === 0
          ? this.tone
          : this.phaseI === 3
            ? `void`
            : this.weave[1],
      r = `idle`,
      i = 0,
      a = 1,
      o = Math.atan2(t.y - this.m.ry, t.x - this.m.rx),
      s = !1,
      c = this.cast;
    if (this.veil) ((r = `veil`), (i = e - this.veilT0), (a = 0.8));
    else if (c?.label === `The Unmaking`)
      ((r = `unmaking`), (i = e - c.t0), (a = c.dur));
    else if (this.circle && e - this.circle.t0 < 2.3)
      ((r = `drink`), (i = e - this.circle.t0), (a = 2));
    else if (this.siphon) {
      ((r = `siphon`), (i = e - this.siphon.t0), (s = this.siphon.hooked));
      let t = this.chest();
      o = Math.atan2(t.y - (this.m.ry - 1.4), t.x - this.m.rx);
    } else
      this.beat
        ? ((r = `heartbeat`), (i = e - this.beat.t0), (a = 2))
        : this.volley
          ? ((r = `needles`),
            (i = e - this.volley.t0),
            (a = 0.5),
            (o = this.volley.a))
          : this.doing &&
            e - this.doing.t0 < this.doing.dur + 0.35 &&
            ((r = this.doing.kind),
            (i = e - this.doing.t0),
            (a = this.doing.dur));
    let l = this.pour;
    return {
      tone: r === `unmaking` ? `hollow` : n,
      act: r,
      age: i,
      dur: a,
      ax: Math.cos(o),
      ay: Math.sin(o),
      hooked: s,
      look: { x: t.x * 16, y: t.y * 16 },
      hover: 3,
      pour: l
        ? {
            dx: (l.to.x - l.from.x) * 16,
            dy: (l.to.y - l.from.y) * 16,
            age: e - l.t0,
            blood: !0,
          }
        : null,
    };
  }
  collectLive(e, t, n, r, i) {
    let a = Math.max(0, this.t - this.bodyT);
    ((this.bodyT = this.t),
      this.m.flash > this.bodyFlash + 0.01 && e.hit(this.me.x * 16),
      (this.bodyFlash = this.m.flash),
      e.step(a, {
        x: this.m.rx * 16,
        y: this.m.ry * 16,
        facing: 1,
        engaged: !0,
        lillith: this.livePose(),
      }),
      (this.m.top = e.top + 4));
    let o = e.away(),
      s = this.pour,
      c = Math.round(this.m.rx * 16 - r),
      l = Math.round(this.m.ry * 16 - i),
      u = this.m.rx * 16,
      d = this.m.ry * 16,
      f = s ? (s.from.x - s.to.x) * 16 : 0,
      p = s ? (s.from.y - s.to.y) * 16 : 0,
      m = u - PH.ax + Math.min(0, f),
      h = d - PH.ay + Math.min(0, p);
    t.push({
      y: d,
      x: u,
      box: bz(u, d, m, h, m + PH.w + Math.abs(f), h + PH.h + Math.abs(p)),
      draw: () => {
        (o ||
          ((n.fillStyle = `rgba(0,0,0,0.3)`),
          n.beginPath(),
          n.ellipse(c, l, 7, 2.5, 0, 0, Math.PI * 2),
          n.fill()),
          e.draw(n, c, l, this.m.flash > 0.08));
      },
    });
    let g = !!s && this.t - s.t0 < 0.75;
    this.g.lights.push({
      x: this.m.rx * 16 - r,
      y: (this.m.ry - 1.6) * 16 - i,
      r: g ? 40 : 60,
      color: g ? AH : Eo[this.tone],
      a: g ? 0.7 : 0.9,
      z: 25.6,
    });
  }
  collect(e, t, n, r) {
    this.done ||
      this.hidden ||
      (this.collectLive(this.live(), e, t, n, r), this.collectLights(n, r));
  }
  collectLights(e, t) {
    this.rift?.blood &&
      this.g.lights.push({
        x: this.rift.x * 16 - e,
        y: this.rift.y * 16 - t,
        r: 44,
        color: AH,
        a: 0.7,
        z: 4,
      });
    let n = this.looks.drips,
      r = this.looks.pool;
    for (let r of this.run.tele)
      n &&
        r.look === n &&
        r.shape.t === `circle` &&
        this.g.lights.push({
          x: r.shape.x * 16 - e,
          y: r.shape.y * 16 - t,
          r: 26,
          color: OH[3],
          a: 0.3 + 0.4 * (r.t / r.dur),
          z: 4,
        });
    for (let n of this.run.zones)
      r &&
        n.look === r &&
        n.shape.t === `circle` &&
        this.g.lights.push({
          x: n.shape.x * 16 - e,
          y: n.shape.y * 16 - t,
          r: 22,
          color: OH[2],
          a: 0.3,
          z: 4,
        });
    for (let n of this.lamps)
      n.m.doc.dead ||
        this.g.lights.push({
          x: n.m.rx * 16 - e,
          y: n.m.ry * 16 - 26 - t,
          r: 64,
          color: Eo[n.tone ?? `ember`],
          a: 0.9,
          z: 26,
        });
  }
  collectIdle(e, t, n, r) {
    this.done || this.collect(e, t, n, r);
  }
  drawGround(e, t, n) {
    if (this.done) return;
    let r = this.t,
      i = this.circle,
      a = i ? this.strip(`drink`, `The circle wakes`) : null;
    if (i && a) {
      let o = r - i.t0;
      Bk(e, Rk(a, o / 2), i.x * 16 - t, i.y * 16 - n, {
        ax: 62,
        ay: 60,
        alpha: o < 2 ? 1 : 1 - (o - 2) / 0.6,
      });
    }
    let o = this.rift,
      s = o?.blood ? this.strip(`veilstep`, `Vortex`) : null;
    if (o && s) {
      let i = r - o.t0;
      Bk(
        e,
        i < 0.15 ? s[2] : s[3 + (Math.floor((i - 0.15) * 8) % 5)],
        o.x * 16 - t,
        o.y * 16 - n,
        { alpha: Math.min(1, (o.until - r) / 0.4) },
      );
    }
    let c = this.volley;
    if (c) {
      let i = (r - c.t0) / 0.5;
      for (let r = 0; r < 5; r++) {
        let a = c.a + (r / 4 - 0.5) * NH,
          o = Math.cos(a),
          s = Math.sin(a),
          l = c.hand.x,
          u = c.hand.y + MH,
          d = Math.max(7 / 16, this.clear(c.hand, a)),
          f = d;
        for (; f < 10 && !this.run.solid(l + o * f, u + s * f - 0.1);)
          f += 0.25;
        let p = l * 16 - t,
          m = u * 16 - n;
        (e.save(),
          (e.globalAlpha = i < 0.5 ? 0.7 : 1),
          RH(
            e,
            p,
            m,
            p + o * f * 16,
            m + s * f * 16,
            i < 0.5 ? 4 : 2,
            14,
            i < 0.5 ? OH[1] : OH[2],
            d * 16,
          ),
          e.restore());
      }
    }
    let l = this.beat;
    if (l) {
      let i = r - l.t0,
        a = l.x * 16 - t,
        o = l.y * 16 - n;
      for (let [t, n] of [
        [0.25, OH[2]],
        [0.75, OH[3]],
      ]) {
        let r = (i - t) / 0.35;
        r >= 0 &&
          r < 1 &&
          Lae(e, a, o, 6 + r * 14, r < 0.5 ? n : OH[1], r > 0.6);
      }
      for (let t = 0; t < 32; t++) {
        let n = t % 2 == 0;
        if (n ? i > 1.2 : i > 1.6) continue;
        let r = l.a + (t / 32) * jH,
          s = Math.cos(r),
          c = Math.sin(r),
          u = n ? (i < 0.6 ? OH[2] : OH[3]) : kH[1];
        for (
          let t = 22;
          t < 96 &&
          !this.run.solid(l.x + (s * t) / 16, l.y + (c * t) / 16 - MH + 0.3);
          t += n ? 2 : 3
        )
          (n || Math.floor(t / 3) % 3 != 2) && LH(e, a + s * t, o + c * t, u);
      }
    }
    if (this.cast?.label === `The Unmaking`) {
      let i = this.strip(`unmaking`, `Sigil`);
      i &&
        Bk(
          e,
          Rk(i, (r - this.cast.t0) / this.cast.dur),
          this.me.x * 16 - t,
          this.me.y * 16 - n,
        );
    }
    for (let i of this.floor) {
      let a = (r - i.t0) / i.dur;
      Bk(e, Rk(i.frames, a), i.x * 16 - t, i.y * 16 - n, {
        ax: i.ax,
        ay: i.ay,
        alpha: i.fade ? Math.min(1, (i.dur - (r - i.t0)) / i.fade) : void 0,
      });
    }
  }
  drawAfterLight(e, t, n) {
    if (this.done) return;
    let r = this.t,
      i = this.heart(),
      a = (r / 2) % 1,
      o = this.drinkGlow > r ? this.strip(`drink`, `Drinking thread`) : null;
    for (let s of this.whole())
      if (
        (o
          ? Wk(
              e,
              o,
              r * 3,
              i.x * 16 - t,
              i.y * 16 - n,
              s.x * 16 - t,
              s.y * 16 - n,
              { fps: 8 },
            )
          : oy(e, s.x * 16 - t, s.y * 16 - n, i.x * 16 - t, i.y * 16 - n, a),
        s.cut > 0)
      ) {
        ((e.fillStyle = `#ffd166`),
          e.fillRect(
            Math.round(s.x * 16 - 6 - t),
            Math.round(s.y * 16 - 22 - n),
            Math.round(12 * Math.min(1, s.cut / _s.cutS)),
            2,
          ));
        let r = this.onThread(s, i),
          a = this.strip(`drink`, `Cut`);
        if (r && a) {
          let o = Math.atan2(i.y - s.y, i.x - s.x),
            c = Math.cos(o) < 0,
            l = (c ? IH(a, `x`) : a)[
              Math.min(2, Math.floor((s.cut / _s.cutS) * 3))
            ];
          Uk(
            e,
            l,
            r.x * 16 - t,
            r.y * 16 - n,
            o - (c ? Math.atan2(-24, -41) : Math.atan2(-24, 41)),
          );
        }
      }
    (this.rift &&
      !this.rift.blood &&
      e.drawImage(
        Bp(Eo.void, 22),
        Math.round(this.rift.x * 16 - 22 - t),
        Math.round(this.rift.y * 16 - 22 - n),
      ),
      this.drawSiphon(e, t, n));
    let s = this.beat,
      c = s ? this.strip(`heartbeat`, `Pulse`) : null;
    if (s && c) {
      let a = r - s.t0,
        o =
          a < 0.6
            ? 0
            : a < 1.2
              ? 1
              : Math.min(5, 2 + Math.floor((a - 1.2) / 0.2));
      a < 2 && Bk(e, c[o], i.x * 16 - t, i.y * 16 - n);
    }
    for (let i of this.run.tele) {
      if (i.color !== `#ffffff` || i.shape.t !== `circle`) continue;
      let a = Fy(Math.floor(r * 8) % 4, i.t / i.dur);
      e.drawImage(
        a,
        Math.round(i.shape.x * 16 - a.width / 2 - t),
        Math.round(i.shape.y * 16 - a.height / 2 - n),
      );
    }
  }
  drawSiphon(e, t, n) {
    let r = this.siphon;
    if (!r) return;
    let i = this.hand(),
      a = this.chest(),
      o = i.x * 16 - t,
      s = i.y * 16 - n,
      c = a.x * 16 - t,
      l = a.y * 16 - n,
      u = Math.atan2(l - s, c - o),
      d = this.t - r.t0;
    if (!r.hooked) {
      if (d < 0.85) {
        let t = d < 0.35 ? 0.55 : 1;
        RH(
          e,
          o,
          s,
          o + (c - o) * t,
          s + (l - s) * t,
          2,
          11,
          d < 0.35 ? OH[1] : OH[2],
          3,
        );
        let n = this.strip(`siphon`, `Aim`);
        d >= 0.35 && n && Bk(e, this.ringOf(n[1]), c, l, { ax: 8, ay: 8 });
      } else {
        let t = Math.min(1, (d - 0.85) / 0.15),
          n = this.strip(`siphon`, `Thread`),
          r = this.strip(`needles`, `Needle`);
        (n &&
          Wk(e, n, this.t, o, s, o + (c - o) * t, s + (l - s) * t, { fps: 10 }),
          r && Uk(e, r[0], o + (c - o) * t, s + (l - s) * t, u));
      }
      return;
    }
    let f = this.strip(`siphon`, `Thread`),
      p = this.strip(`siphon`, `Hook`),
      m = this.strip(`siphon`, `Drink`);
    (f && Wk(e, f, this.t, o, s, c, l, { fps: 10 }),
      p &&
        Uk(e, zk(p, this.t, 10), c - Math.cos(u) * 3, l - Math.sin(u) * 3, u),
      m &&
        Uk(e, zk(m, this.t, 10), o + Math.cos(u) * 5, s + Math.sin(u) * 5, u));
  }
  pulseFrame() {
    let e = this.beat,
      t = e ? this.strip(`heartbeat`, `Pulse`) : null;
    if (!e || !t) return null;
    let n = this.t - e.t0;
    return n < 2
      ? t[
          n < 0.6
            ? 0
            : n < 1.2
              ? 1
              : Math.min(5, 2 + Math.floor((n - 1.2) / 0.2))
        ]
      : null;
  }
  siphonEnds() {
    let e = this.hand(),
      t = this.chest();
    return {
      a: {
        x: e.x * 16,
        y: e.y * 16,
        gy: this.m.ry * 16,
        z: (this.m.ry - e.y) * 16,
      },
      b: {
        x: t.x * 16,
        y: t.y * 16,
        gy: this.me.y * 16,
        z: (this.me.y - t.y) * 16,
      },
    };
  }
  collectHd(e, t, n, r) {
    if (this.done || this.hidden) return;
    let i = this.heart(),
      a = this.pulseFrame();
    a && xz(e, t, a, i.x * 16, i.y * 16, this.m.ry * 16 + 2, n, r);
    let o = this.siphon;
    if (!o) return;
    let { a: s, b: c } = this.siphonEnds(),
      l = Math.atan2(c.y - s.y, c.x - s.x),
      u = this.t - o.t0;
    if (!o.hooked) {
      let i = this.strip(`siphon`, `Aim`);
      u >= 0.35 &&
        u < 0.85 &&
        i &&
        xz(e, t, this.ringOf(i[1]), c.x, c.y, c.gy + 1, n, r, { ax: 8, ay: 8 });
      let a = this.strip(`needles`, `Needle`);
      if (u >= 0.85 && a) {
        let i = Math.min(1, (u - 0.85) / 0.15);
        xz(
          e,
          t,
          a[0],
          s.x + (c.x - s.x) * i,
          s.y + (c.y - s.y) * i,
          s.gy + (c.gy - s.gy) * i + 1,
          n,
          r,
          { angle: l },
        );
      }
      return;
    }
    let d = this.strip(`siphon`, `Hook`),
      f = this.strip(`siphon`, `Drink`);
    (d &&
      xz(
        e,
        t,
        zk(d, this.t, 10),
        c.x - Math.cos(l) * 3,
        c.y - Math.sin(l) * 3,
        c.gy + 1,
        n,
        r,
        { angle: l },
      ),
      f &&
        xz(
          e,
          t,
          zk(f, this.t, 10),
          s.x + Math.cos(l) * 5,
          s.y + Math.sin(l) * 5,
          s.gy + 2,
          n,
          r,
          { angle: l },
        ));
  }
  drawAfterLightHd(e, t, n, r) {
    if (this.done) return;
    let i = e.loose,
      a = this.t,
      o = this.heart(),
      s = o.x * 16,
      c = this.m.ry * 16,
      l = (this.m.ry - o.y) * 16,
      u = (a / 2) % 1,
      d = this.drinkGlow > a ? this.strip(`drink`, `Drinking thread`) : null;
    for (let e of this.whole()) {
      let f = e.x * 16,
        p = (e.y + 0.8) * 16;
      if (
        (d
          ? Tz(t, d, a * 3, 8, s, c, l, f, p, 12.8)
          : (mA(t, f, p, 12.8, s, c, l, `#861222`, 0.35, !1, !0, 1.5, {
              bow: 3,
              size: 3,
            }),
            mA(t, f, p, 12.8, s, c, l, `#e0484e`, 1, !1, !0, 1.5, {
              bow: 3,
              colorAt: (e) =>
                (((e - u * 2) % 1) + 1) % 1 < 0.1 ? `#ffffff` : `#e0484e`,
            })),
        e.cut > 0)
      ) {
        ((i.fillStyle = `#ffd166`),
          i.fillRect(
            Math.round(e.x * 16 - 6 - n),
            Math.round(e.y * 16 - 22 - r),
            Math.round(12 * Math.min(1, e.cut / _s.cutS)),
            2,
          ));
        let t = this.onThread(e, o),
          a = this.strip(`drink`, `Cut`);
        if (t && a) {
          let s = Math.atan2(o.y - e.y, o.x - e.x),
            c = Math.cos(s) < 0,
            l = (c ? IH(a, `x`) : a)[
              Math.min(2, Math.floor((e.cut / _s.cutS) * 3))
            ];
          Uk(
            i,
            l,
            t.x * 16 - n,
            t.y * 16 - r,
            s - (c ? Math.atan2(-24, -41) : Math.atan2(-24, 41)),
          );
        }
      }
    }
    this.rift &&
      !this.rift.blood &&
      i.drawImage(
        Bp(Eo.void, 22),
        Math.round(this.rift.x * 16 - 22 - n),
        Math.round(this.rift.y * 16 - 22 - r),
      );
    let f = this.siphon;
    if (f) {
      let { a: e, b: n } = this.siphonEnds(),
        r = a - f.t0,
        i = this.strip(`siphon`, `Thread`);
      if (!f.hooked && r < 0.85) {
        let i = r < 0.35 ? 0.55 : 1,
          a = e.x + (n.x - e.x) * i,
          o = e.gy + (n.gy - e.gy) * i,
          s = e.z + (n.z - e.z) * i;
        (mA(t, e.x, e.gy, e.z, a, o, s, r < 0.35 ? OH[1] : OH[2], 1, !1, !0, 2),
          mA(t, e.x, e.gy, e.z, a, o, s, OH[3], 1, !1, !0, 11, { size: 2 }));
      } else if (i) {
        let o = f.hooked ? 1 : Math.min(1, (r - 0.85) / 0.15);
        Tz(
          t,
          i,
          a,
          10,
          e.x,
          e.gy,
          e.z,
          e.x + (n.x - e.x) * o,
          e.gy + (n.gy - e.gy) * o,
          e.z + (n.z - e.z) * o,
        );
      }
    }
    for (let e of this.run.tele) {
      if (e.color !== `#ffffff` || e.shape.t !== `circle`) continue;
      let t = Fy(Math.floor(a * 8) % 4, e.t / e.dur);
      i.drawImage(
        t,
        Math.round(e.shape.x * 16 - t.width / 2 - n),
        Math.round(e.shape.y * 16 - t.height / 2 - r),
      );
    }
  }
  ring = null;
  ringOf(e) {
    return (this.ring ??= Fae(e, 70, 3, 14, 19));
  }
  hud() {
    let e = super.hud(),
      t = this.whole().length,
      n =
        this.phaseI === 0
          ? `The four doors · ${UH(this.tone)}`
          : this.def.phases[this.phaseI].name;
    return {
      ...e,
      title: this.threads.length
        ? `${n} · ${t} thread${t === 1 ? `` : `s`} whole`
        : n,
    };
  }
};
