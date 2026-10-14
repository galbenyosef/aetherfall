// assets__index-BTsv3a2s 205 — math
// Lines 127804-129543 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var zZ = class {
    g;
    clock = 0;
    gen;
    wait = null;
    skipping = !1;
    locked = !1;
    lockedAt = 0;
    hintDrawn = null;
    phased = !0;
    sealed = !0;
    night = 0.66;
    siege = !1;
    siegeTimer = 2.5;
    teacher;
    npcs = [];
    hero = null;
    dialogue = null;
    chatting = !1;
    choice = null;
    narration = null;
    card = null;
    cardT0 = 0;
    fallen = new Map();
    caption = null;
    title = null;
    fadeA = 0;
    fadeTarget = 0;
    fadeSpeed = 1;
    cam = null;
    camTween = null;
    objective = null;
    marker = null;
    orbs = [];
    charge = null;
    shock = null;
    unmaking = null;
    pour = null;
    lilBody = null;
    lilT = -9;
    lilAt = null;
    lilPour = null;
    lilAim = { x: 0, y: 1 };
    lillithAct = null;
    lillithLook = null;
    dawn = null;
    lastAttack = new Map();
    preyOf = new Map();
    localSeq = 0;
    recalledKeep = 0;
    castDrawn = {};
    spawnCd = 0;
    skillsTaught = !1;
    hits = [0, 0, 0];
    blocks = 0;
    blinks = 0;
    slain = 0;
    done = !1;
    constructor(e, t) {
      ((this.g = e), (this.teacher = Lh[e.school]));
      for (let e of Object.keys(wZ)) {
        let t = wZ[e];
        this.npcs.push({
          kind: e,
          name:
            e === `idris`
              ? `Master Idris`
              : e === `holloway`
                ? `Captain Holloway`
                : e === `watchman`
                  ? `Pell`
                  : yZ[e].name.split(` `)[0],
          x: t.x,
          y: t.y,
          dir: t.dir,
          channel: e !== `lillith` && e !== `holloway` && e !== `watchman`,
          visible: !0,
          alpha: 1,
          castT: 0,
          stagger: 0,
          thrustT: -1,
          fallen: !1,
          fallenT: -1,
          tone: `none`,
          tween: null,
        });
      }
      t >= Ke.DONE
        ? ((this.gen = null), this.ambient())
        : (this.placeForSiege(t), (this.gen = HZ(this, t)));
    }
    placeForSiege(e) {
      let t = [`varra`, `ysolde`, `teodor`, `oriel`].filter(
        (e) => e !== this.teacher,
      );
      for (let e of t) {
        let t = e === `teodor` ? wZ[this.teacher] : wZ[e];
        Object.assign(this.npc(e), { x: t.x, y: t.y, dir: t.dir });
      }
      (Object.assign(this.npc(this.teacher), { ...EZ, channel: !1 }),
        Object.assign(this.npc(`holloway`), { ...OZ }));
      let n = this.npc(`idris`);
      (e <= Ke.PROLOGUE &&
        Object.assign(n, { ...TZ.idris, dir: 3, channel: !1 }),
        e >= Ke.SKILLS && (this.npc(`watchman`).fallen = !0));
    }
    ambient() {
      ((this.done = !0),
        (this.phased = !1),
        (this.sealed = !1),
        (this.night = null),
        (this.siege = !1),
        (this.locked = !1),
        (this.objective = null),
        (this.marker = null),
        (this.recalledKeep = 0),
        (this.skillsTaught = !0),
        this.posts());
    }
    posts() {
      for (let e of this.npcs)
        Object.assign(e, {
          ...this.postOf(e.kind),
          tween: null,
          alpha: 1,
          fallen: !1,
          thrustT: -1,
          tone: `none`,
        });
    }
    postOf(e) {
      return {
        ...wZ[e],
        visible: e !== `lillith` && e !== `idris` && e !== `watchman`,
        channel:
          e === `varra` || e === `ysolde` || e === `teodor` || e === `oriel`,
      };
    }
    fmt(e) {
      let t = oe(this.g.school);
      return e
        .replaceAll(`{name}`, this.g.name)
        .replaceAll(`{teacher}`, yZ[this.teacher].name)
        .replaceAll(`{s1}`, t[0].name)
        .replaceAll(`{s2}`, t[1].name)
        .replaceAll(`{s3}`, t[2].name);
    }
    wait_(e) {
      let t = this.clock + e;
      return () => this.skipping || this.clock >= t;
    }
    until(e) {
      return e;
    }
    say(e, t, n) {
      let r = {
        speaker: e,
        voice: n,
        text: this.fmt(t),
        t0: this.clock,
        advanced: !1,
      };
      return (
        (this.dialogue = r),
        () =>
          this.skipping || r.advanced
            ? (this.dialogue === r && (this.dialogue = null), !0)
            : !1
      );
    }
    narrate(e, t) {
      let n = { text: this.fmt(e), t0: this.clock, advanced: !1 };
      return (
        (this.narration = n),
        () =>
          this.skipping || n.advanced || this.clock >= n.t0 + t
            ? (this.narration === n && (this.narration = null), !0)
            : !1
      );
    }
    camTo(e, t, n, r) {
      let i = this.cam ?? {
          x: this.g.cam.x,
          y: this.g.cam.y,
          zoom: this.g.zoom,
        },
        a = r ?? i.zoom;
      if (n <= 0 || this.skipping)
        return (
          (this.cam = { x: e * 16, y: t * 16, zoom: a }),
          (this.camTween = null),
          () => !0
        );
      this.camTween = {
        x0: i.x,
        y0: i.y,
        z0: i.zoom,
        x1: e * 16,
        y1: t * 16,
        z1: a,
        t0: this.clock,
        dur: n,
      };
      let o = this.clock + n;
      return () => this.skipping || this.clock >= o;
    }
    fadeTo(e, t) {
      ((this.fadeTarget = e),
        t <= 0 || this.skipping
          ? (this.fadeA = e)
          : (this.fadeSpeed = Math.abs(e - this.fadeA) / t));
    }
    cine(e) {
      if (
        (e && !this.locked && (this.lockedAt = this.clock),
        (this.locked = e),
        (this.g.barsTarget = +!!e),
        e)
      ) {
        ((this.g.me.moving = !1),
          (this.g.mouse.down = !1),
          (this.g.mouse.right = !1));
        return;
      }
      let t = this.skipping;
      ((this.skipping = !1),
        (this.dialogue = null),
        (this.narration = null),
        (this.cam = null),
        (this.camTween = null),
        t &&
          ((this.fadeA = this.fadeTarget = 0),
          (this.card = null),
          (this.caption = null),
          (this.title = null),
          (this.orbs.length = 0),
          (this.charge = null),
          (this.unmaking = null),
          (this.pour = null),
          (this.g.flash.a = 0),
          (this.g.shake = 0),
          (this.g.slowUntil = 0)));
    }
    showCard(e) {
      ((this.card = e), (this.cardT0 = this.clock));
    }
    fall(e) {
      (this.fallen.set(e, this.clock), this.skipping || q.sfx(`hurt`, 0.35));
    }
    showCaption(e, t, n) {
      this.skipping ||
        (this.caption = { text: e, sub: t, t0: this.clock, dur: n });
    }
    showTitle(e, t, n) {
      this.skipping ||
        (this.title = { text: e, sub: t, t0: this.clock, dur: n });
    }
    setObjective(e, t) {
      ((this.objective = {
        text: this.fmt(e),
        count: t ? 0 : void 0,
        total: t,
      }),
        this.skipping || q.sfx(`chime`, 0.5));
    }
    save(e) {
      this.g.api.advanceTutorial(e);
    }
    npc(e) {
      return this.npcs.find((t) => t.kind === e);
    }
    distTo(e) {
      let t = this.npc(e);
      return Math.hypot(t.x - this.g.me.x, t.y - this.g.me.y);
    }
    face(e, t, n) {
      let r = this.npc(e),
        i = t - r.x,
        a = n - r.y;
      r.dir = Math.abs(i) > Math.abs(a) ? (i > 0 ? 2 : 3) : a > 0 ? 0 : 1;
    }
    blinkNpc(e, t, n) {
      let r = this.npc(e);
      if (!this.skipping) {
        let e = this.g;
        (e.particles.burst(
          r.x * 16,
          r.y * 16 - 10,
          30,
          [`#b58aff`, `#ffffff`],
          90,
        ),
          e.particles.burst(
            t * 16,
            n * 16 - 10,
            30,
            [`#b58aff`, `#ffffff`],
            90,
          ),
          q.sfx(`blink`, this.volumeAt(t * 16, n * 16)));
      }
      ((r.x = t), (r.y = n), (r.tween = null));
    }
    moveNpc(e, t, n, r) {
      let i = this.npc(e);
      if (this.skipping || r <= 0) {
        ((i.x = t), (i.y = n), (i.tween = null));
        return;
      }
      i.tween = { x0: i.x, y0: i.y, x1: t, y1: n, t0: this.clock, dur: r };
    }
    walkHero(e, t, n) {
      let r = this.hero;
      if (!r) return;
      let i = e - r.x,
        a = t - r.y;
      if (
        ((i || a) &&
          (r.dir = Math.abs(i) > Math.abs(a) ? (i > 0 ? 2 : 3) : a > 0 ? 0 : 1),
        this.skipping || n <= 0)
      ) {
        ((r.x = e), (r.y = t), (r.walk = null), (r.moving = !1));
        return;
      }
      ((r.walk = { x0: r.x, y0: r.y, x1: e, y1: t, t0: this.clock, dur: n }),
        (r.moving = !0));
    }
    blinkHero(e, t) {
      let n = this.hero;
      if (n) {
        if (!this.skipping) {
          let r = this.g;
          (r.particles.burst(
            n.x * 16,
            n.y * 16 - 10,
            30,
            [`#b58aff`, `#ffffff`],
            90,
          ),
            r.particles.burst(
              e * 16,
              t * 16 - 10,
              30,
              [`#b58aff`, `#ffffff`],
              90,
            ),
            q.sfx(`blink`, this.volumeAt(e * 16, t * 16)),
            (n.blinkFx = { dx: e - n.x, dy: t - n.y, t0: r.real }));
        }
        ((n.x = e), (n.y = t), (n.walk = null), (n.moving = !1));
      }
    }
    freeCam() {
      ((this.cam = null), (this.camTween = null));
    }
    lillithHand() {
      let e = this.npc(`lillith`),
        t = this.lillithLive()?.hand();
      return t
        ? { x: e.x * 16 + t.dx, y: e.y * 16 + t.dy }
        : {
            x: e.x * 16 + 5,
            y: e.y * 16 - 36 + Math.sin(this.clock * 1.6) * 2,
          };
    }
    castFrom(e, t) {
      let n = this.lillithHand(),
        r = Math.hypot(e - n.x, t - n.y) || 1;
      this.lilAim = { x: (e - n.x) / r, y: (t - n.y) / r };
      let i = this.lillithLive();
      if (!i) return n;
      let a = this.npc(`lillith`),
        o = i.handFor(`cast`, this.lilAim.x, this.lilAim.y);
      return { x: a.x * 16 + o.dx, y: a.y * 16 + o.dy };
    }
    lillithLive() {
      let e = this.npc(`lillith`);
      return e
        ? (this.lilBody ??= new DH(`lillith`, e.x * 16, e.y * 16, 1))
        : null;
    }
    lillithPose(e) {
      let t = this.clock,
        n = `idle`,
        r = 0,
        i = 1,
        a = this.lilAim,
        o = this.unmaking
          ? this.npcs.find((e) => e.kind === `idris` && e.visible)
          : null,
        s = this.lillithLook ?? (o ? { x: o.x, y: o.y } : { x: bZ, y: xZ }),
        c = this.lillithAct;
      if (this.unmaking) {
        ((n = `unmaking`), (r = t - this.unmaking.t0), (i = 10));
        let o = Math.hypot(s.x - e.x, s.y - e.y) || 1;
        a = { x: (s.x - e.x) / o, y: (s.y - e.y) / o };
      } else
        this.charge
          ? ((n = `woven`), (r = t - this.charge.t0), (i = this.charge.dur))
          : c && t - c.t0 < c.dur + 0.35
            ? ((n = c.kind), (r = t - c.t0), (i = c.dur))
            : e.castT > 0 && (n = `cast`);
      let l = this.lilPour;
      return {
        tone: e.tone,
        act: n,
        age: r,
        dur: i,
        ax: a.x,
        ay: a.y,
        look: { x: s.x * 16, y: s.y * 16 },
        hover: 12,
        pour:
          l && t - l.t0 < 1
            ? { dx: l.dx, dy: l.dy, age: t - l.t0, blood: !1 }
            : null,
      };
    }
    volumeAt(e, t) {
      return FZ(
        1 - Math.hypot(e - this.g.cam.x, t - this.g.cam.y) / 16 / 30,
        0.08,
        1,
      );
    }
    launch(e, t, n, r, i = 0.8, a) {
      let o = this.npc(`lillith`);
      if (!o.visible) return;
      let s = () => (a ? a() : this.wardImpact(e, t, n));
      if (this.skipping) return s();
      ((o.castT = Math.max(o.castT, 0.5)), (o.tone = r));
      let c = RZ(e),
        l = this.castFrom(c.x, c.y - 12);
      (this.orbs.push({
        x0: l.x,
        y0: l.y,
        tx: c.x,
        ty: c.y - 12,
        x: l.x,
        y: l.y,
        t: 0,
        dur: i,
        size: n ? 5 : 2,
        tone: r,
        onHit: s,
      }),
        q.sfx(`cast`, this.volumeAt(l.x, l.y) * (n ? 1 : 0.4)));
    }
    wardImpact(e, t, n) {
      let r = this.g;
      if (
        (r.dome.hits.push({ a: e, t0: r.time, p: t }),
        n &&
          r.dome.cracks.push({
            a: e + (Math.random() - 0.5) * 0.03,
            seed: Math.random() * 1e3,
            len: 36 + Math.random() * 18,
          }),
        this.skipping)
      )
        return;
      let i = RZ(e),
        a = this.volumeAt(i.x, i.y),
        o = [...Bh.map((e) => zh[e].glow), `#7ef9ff`, `#ffffff`];
      if (
        (r.particles.burst(i.x, i.y - 12, n ? 90 : 24, o, n ? 170 : 80, {
          life: n ? 1.1 : 0.6,
        }),
        q.sfx(`boom`, a * (n ? 1 : 0.4)),
        (r.shake = Math.max(r.shake, n ? 14 : 3 * a)),
        n)
      ) {
        ((r.flash = { color: `#ffffff`, a: 0.85 }),
          (r.slowUntil = r.real + 0.9));
        for (let e of this.npcs) e.channel && (e.stagger = 0.6);
      }
    }
    ringWard() {
      let e = this.g;
      for (let t = 0; t < 12; t++)
        e.dome.hits.push({ a: (t / 12) * Math.PI * 2, t0: e.time, p: 1.4 });
      this.skipping ||
        ((e.flash = { color: `#bff7ff`, a: 0.5 }),
        (e.shake = Math.max(e.shake, 9)),
        q.sfx(`boom`, 0.8),
        q.sfx(`chime`, 1));
    }
    *wovenStrike() {
      let e = this.npc(`lillith`);
      ((e.castT = 99),
        (this.charge = { t0: this.clock, dur: 2 }),
        this.skipping || q.sfx(`cast`, 1),
        yield this.wait_(2),
        (this.charge = null),
        this.launch(0, 3.5, !0, `ember`, 0.6),
        yield this.wait_(0.7),
        (e.castT = 0),
        (e.tone = `none`));
    }
    spawnLocal(e, t, n, r = `hero`) {
      let i = `local:${e}:${this.localSeq++}`,
        a = Fe[e],
        o = {
          doc: {
            _id: i,
            _creationTime: 0,
            kind: e,
            x: t,
            y: n,
            spawnX: t,
            spawnY: n,
            hp: a.hp,
            maxHp: a.hp,
            dead: !1,
            respawnAt: 0,
            lastAttackAt: 0,
            facing: -1,
          },
          rx: t,
          ry: n,
          fx0: t,
          fy0: n,
          tx: t,
          ty: n,
          t0: 0,
          flash: 0,
          lunge: 0,
          lungeDir: { x: 0, y: 0 },
          anim: Math.random() * 4,
          dying: 0,
          local: !0,
        };
      return (
        this.g.monsters.set(i, o),
        this.preyOf.set(i, r),
        this.skipping ||
          this.g.particles.burst(
            t * 16,
            n * 16 - 8,
            22,
            [`#1a0508`, `#5a0a1a`, `#b01a2a`, `#ffffff`],
            70,
            { glow: !0 },
          ),
        o
      );
    }
    removeLocal(e = !0) {
      for (let [t, n] of this.g.monsters)
        n.local &&
          (e &&
            !n.doc.dead &&
            !this.skipping &&
            this.g.particles.burst(
              n.rx * 16,
              n.ry * 16 - 8,
              20,
              [`#b01a2a`, `#ffffff`],
              60,
            ),
          this.g.monsters.delete(t));
    }
    aliveRecalled() {
      let e = 0;
      for (let t of this.g.monsters.values()) t.local && !t.doc.dead && e++;
      return e;
    }
    onLocalHit(e, t) {
      let n = oe(this.g.school).findIndex((e) => e.id === t.id);
      (n >= 0 && this.hits[n]++, e.doc.dead && this.slain++);
    }
    onCast(e) {
      if (e.kind !== `ward` && e.kind !== `veil`) return;
      let t = oe(this.g.school).findIndex((t) => t.id === e.id);
      t >= 0 && this.hits[t]++;
    }
    onBlock() {
      this.blocks++;
    }
    onBlink() {
      this.blinks++;
    }
    thrustAt = null;
    thrustHits = 0;
    updateThrust(e, t) {
      let n = this.g;
      if (e.thrustT >= 0) {
        let r = e.thrustT;
        if (((e.thrustT += t), r < pR && e.thrustT >= pR)) {
          let t = this.thrustAt ? n.monsters.get(this.thrustAt) : void 0,
            r = e.dir === 3 ? -1 : 1,
            i = t ? t.rx - e.x : 0;
          !this.locked &&
            t &&
            t.local &&
            !t.doc.dead &&
            i * r > 0 &&
            Math.abs(i) < 2.8 &&
            Math.abs(t.ry - e.y) < 0.8 &&
            ((t.rx += r * 0.7),
            this.skipping ||
              (n.slash(t.rx * 16, t.ry * 16 - 8, !1), q.sfx(`hit`, 0.3)));
        }
        e.thrustT > mR + 0.9 && (e.thrustT = -1);
        return;
      }
      if (!(this.locked || !e.visible || e.tween || e.fallen || !cz(e.kind)))
        for (let t of n.monsters.values()) {
          if (!t.local || t.doc.dead || t.doc.kind !== `recalled`) continue;
          let n = t.rx - e.x;
          if (
            Math.abs(t.ry - e.y) < 0.7 &&
            Math.abs(n) > 0.3 &&
            Math.abs(n) < 2.4
          ) {
            ((e.dir = n > 0 ? 2 : 3),
              (e.thrustT = 0),
              (this.thrustAt = t.doc._id));
            return;
          }
        }
    }
    updateRecalled(e) {
      let t = this.g;
      this.recalledKeep > 0 &&
        ((this.spawnCd -= e),
        this.spawnCd <= 0 &&
          this.aliveRecalled() < this.recalledKeep &&
          ((this.spawnCd = 1.2),
          this.spawnLocal(
            `recalled`,
            SZ.x + 1.4,
            SZ.y - 1.6 + Math.random() * 3.2,
          )));
      let n = this.npc(`watchman`);
      for (let r of t.monsters.values()) {
        if (!r.local || r.doc.dead || r.doc.kind !== `recalled`) continue;
        let i =
            this.preyOf.get(r.doc._id) === `watchman` && !n.fallen ? n : t.me,
          a = i.x - r.rx,
          o = i.y - r.ry,
          s = Math.hypot(a, o) || 1;
        if ((Math.abs(a) > 0.05 && (r.doc.facing = a < 0 ? -1 : 1), s > 0.8)) {
          let t = Fe.recalled.speed * e;
          ((r.rx += (a / s) * t), (r.ry += (o / s) * t));
        } else {
          let e = this.lastAttack.get(r.doc._id) ?? 0;
          this.clock - e > Fe.recalled.attackCd / 1e3 &&
            (this.lastAttack.set(r.doc._id, this.clock),
            (r.lunge = 0.25),
            (r.lungeDir = { x: a / s, y: o / s }),
            (i !== t.me || !t.storyBlow(r.rx, r.ry)) &&
              (t.slash(i.x * 16, i.y * 16 - 8, !1),
              i === t.me &&
                ((t.hurtFlash = 0.35), (t.shake = Math.max(t.shake, 3))),
              q.sfx(`hurt`, i === t.me ? 0.5 : 0.25)));
        }
        ((r.fx0 = r.tx = r.rx),
          (r.fy0 = r.ty = r.ry),
          Math.random() < e * 8 &&
            t.particles.spawn({
              x: r.rx * 16 + (Math.random() - 0.5) * 10,
              y: r.ry * 16 - 4,
              vz: 10,
              life: 0.7,
              size: 2,
              color: `#1a0508`,
              glow: !1,
            }));
      }
    }
    advance() {
      if (this.dialogue) {
        let e = this.dialogue;
        return (
          this.shownChars(e) < e.text.length
            ? (e.t0 = -1e6)
            : this.choice || ((e.advanced = !0), q.sfx(`click`, 0.6)),
          !0
        );
      }
      return this.narration
        ? ((this.narration.advanced = !0), !0)
        : this.locked;
    }
    chat(e, t) {
      if (this.gen || !this.done || !t.length) return !1;
      let n = this;
      return (
        (this.chatting = !0),
        (this.wait = null),
        (this.gen = (function* () {
          for (let r of t) yield n.say(`crystal`, r, e);
          n.chatting = !1;
        })()),
        !0
      );
    }
    converse(e) {
      if (this.gen || !this.done) return !1;
      let t = this;
      return (
        (this.chatting = !0),
        (this.wait = null),
        (this.gen = (function* () {
          (yield* e, (t.chatting = !1));
        })()),
        !0
      );
    }
    busy() {
      return !!this.gen;
    }
    play(e) {
      return !this.gen && ((this.wait = null), (this.gen = e), !0);
    }
    halt(e) {
      return !this.gen || (e && this.gen !== e)
        ? !1
        : ((this.gen = null), (this.wait = null), !0);
    }
    runs(e) {
      return this.gen === e;
    }
    ask(e, t, n, r) {
      let i = {
          speaker: e,
          voice: r,
          text: this.fmt(t),
          t0: this.clock,
          advanced: !1,
        },
        a = { options: n.map((e) => this.fmt(e)), picked: null };
      return (
        (this.dialogue = i),
        (this.choice = a),
        {
          wait: () =>
            a.picked === null && !this.skipping
              ? !1
              : (this.dialogue === i && (this.dialogue = null),
                this.choice === a && (this.choice = null),
                !0),
          result: () => a.picked ?? n.length - 1,
        }
      );
    }
    pick(e) {
      let t = this.choice,
        n = this.dialogue;
      return !t ||
        !n ||
        this.shownChars(n) < n.text.length ||
        e < 0 ||
        e >= t.options.length
        ? !1
        : ((t.picked = e), q.sfx(`click`, 0.6), !0);
    }
    endChat() {
      this.chatting &&=
        ((this.gen = null),
        (this.wait = null),
        (this.dialogue = null),
        (this.choice = null),
        !1);
    }
    shoot(e, t, n, r, i, a) {
      let o = this.castFrom(e, t);
      ((this.npc(`lillith`).castT = Math.max(this.npc(`lillith`).castT, 0.4)),
        this.orbs.push({
          x0: o.x,
          y0: o.y,
          tx: e,
          ty: t,
          x: o.x,
          y: o.y,
          t: 0,
          dur: i,
          size: r,
          tone: n,
          onHit: a,
        }));
    }
    skippable() {
      return this.locked && this.clock - this.lockedAt >= 0.5;
    }
    skipScene() {
      return this.skippable() ? ((this.skipping = !0), !0) : !1;
    }
    shownChars(e) {
      return Math.floor((this.clock - e.t0) * 45);
    }
    skipTutorial() {
      ((this.gen = null), (this.wait = null), this.cine(!1), this.finish());
    }
    finish() {
      if (this.done) return;
      let e = this.g;
      (this.removeLocal(!1),
        (e.dome.target = 0.35),
        (e.dome.cracks = []),
        (e.dome.breach = 0),
        (e.barsTarget = 0),
        this.ambient(),
        e.api.completeTutorial(),
        (e.banner = {
          title: `Marizon`,
          subtitle: `The Lumen Ward holds. For now.`,
          t0: e.real,
          dur: 4,
          color: `#8be9ff`,
        }));
    }
    update(e) {
      let t = this.g;
      this.clock += e;
      let n = e * t.timeScale,
        r = this.hero;
      if (r) {
        let e = r.walk;
        if (e) {
          let t = FZ((this.clock - e.t0) / e.dur, 0, 1);
          ((r.x = IZ(e.x0, e.x1, t)),
            (r.y = IZ(e.y0, e.y1, t)),
            t >= 1 && (r.walk = null));
        }
        ((r.moving = !!r.walk), (r.anim += n * (r.moving ? 9 : 2)));
      }
      let i = 0;
      for (
        ;
        this.gen &&
        i++ < (this.skipping ? 5e3 : 64) &&
        (!this.wait || this.wait());
      ) {
        let e = this.gen.next();
        if (e.done) {
          ((this.gen = null), (this.wait = null));
          break;
        }
        this.wait = e.value;
      }
      if (this.camTween) {
        let e = this.camTween,
          t = LZ((this.clock - e.t0) / e.dur);
        ((this.cam = {
          x: IZ(e.x0, e.x1, t),
          y: IZ(e.y0, e.y1, t),
          zoom: IZ(e.z0, e.z1, t),
        }),
          t >= 1 && (this.camTween = null));
      }
      if (
        (this.fadeA < this.fadeTarget
          ? (this.fadeA = Math.min(
              this.fadeTarget,
              this.fadeA + this.fadeSpeed * e,
            ))
          : this.fadeA > this.fadeTarget &&
            (this.fadeA = Math.max(
              this.fadeTarget,
              this.fadeA - this.fadeSpeed * e,
            )),
        this.dawn)
      ) {
        let e = LZ((this.clock - this.dawn.t0) / this.dawn.dur);
        (this.night !== null &&
          (this.night = IZ(this.dawn.from, this.dawn.to, e)),
          e >= 1 && (this.dawn = null));
      }
      for (let r of this.npcs) {
        if (
          ((r.castT -= n),
          r.kind === `lillith` &&
            r.castT <= 0 &&
            !this.unmaking &&
            (r.tone = `none`),
          (r.stagger = Math.max(0, r.stagger - e)),
          r.fallen !== r.fallenT >= 0 &&
            (r.fallenT = r.fallen ? this.clock : -1),
          r.kind === `holloway` && this.updateThrust(r, n),
          r.tween)
        ) {
          let e = LZ((this.clock - r.tween.t0) / r.tween.dur);
          ((r.x = IZ(r.tween.x0, r.tween.x1, e)),
            (r.y = IZ(r.tween.y0, r.tween.y1, e)),
            e >= 1 && (r.tween = null));
        }
        if (r.channel && r.visible && Math.random() < n * 10) {
          let e = this.orbOf(r, !0);
          t.particles.spawn({
            x: e.x + (Math.random() - 0.5) * 3,
            y: e.y,
            vy: -40 - Math.random() * 30,
            life: 1,
            size: 1,
            color: this.beamColor(r),
            glow: !0,
          });
        }
      }
      if (
        (this.siege &&
          !this.skipping &&
          ((this.siegeTimer -= e),
          this.siegeTimer <= 0 &&
            ((this.siegeTimer = 2.2 + Math.random() * 2.4),
            this.launch(
              (Math.random() - 0.5) * 0.9,
              1,
              !1,
              Bh[Math.floor(Math.random() * 4)],
            ))),
        this.charge)
      ) {
        let e = this.npc(`lillith`);
        e.tone = Bh[Math.floor(this.clock * 8) % 4];
        let n = this.lillithHand(),
          r = FZ((this.clock - this.charge.t0) / this.charge.dur, 0, 1);
        for (let e = 0; e < 4; e++) {
          let r = Math.random() * Math.PI * 2,
            i = 30 + Math.random() * 30;
          t.particles.spawn({
            x: n.x + Math.cos(r) * i,
            y: n.y + Math.sin(r) * i,
            vx: -Math.cos(r) * i * 2.2,
            vy: -Math.sin(r) * i * 2.2,
            life: 0.45,
            size: 2,
            color: zh[Bh[e]].glow,
            glow: !0,
          });
        }
        t.shake = Math.max(t.shake, 1 + r * 3);
      }
      if (this.unmaking) {
        let e = this.npc(`lillith`);
        ((e.tone = `hollow`), (e.castT = 1));
        let n = this.lillithHand();
        for (let e = 0; e < 3; e++) {
          let r = Math.random() * Math.PI * 2,
            i = 40 + Math.random() * 40;
          t.particles.spawn({
            x: n.x + Math.cos(r) * i,
            y: n.y + Math.sin(r) * i * 0.7,
            vx: -Math.cos(r) * i * 1.6,
            vy: -Math.sin(r) * i * 1.2,
            life: 0.6,
            size: 2,
            color: e === 0 ? `#b01a2a` : `#1a0508`,
            glow: e === 0,
          });
        }
        t.shake = Math.max(t.shake, 2);
      }
      if (this.pour) {
        let e = this.npc(`idris`);
        e.alpha = 1 - FZ((this.clock - this.pour.t0) / 2.4, 0, 1);
        let n = this.orbOf(e, !0),
          r = kZ.x * 16,
          i = kZ.y * 16;
        for (let e = 0; e < 6; e++) {
          let e = n.x + (Math.random() - 0.5) * 12,
            a = n.y + Math.random() * 20;
          t.particles.spawn({
            x: e,
            y: a,
            vx: (r - e) * 1.1,
            vy: (i - a) * 1.1,
            life: 0.9,
            size: Math.random() < 0.4 ? 2 : 1,
            color: Math.random() < 0.5 ? `#ffffff` : `#ffd98a`,
            glow: !0,
            drag: 0,
          });
        }
      }
      for (let e = this.orbs.length - 1; e >= 0; e--) {
        let r = this.orbs[e];
        r.t += n;
        let i = FZ(r.t / r.dur, 0, 1);
        ((r.x = IZ(r.x0, r.tx, i)),
          (r.y = IZ(r.y0, r.ty, i) - Math.sin(i * Math.PI) * 24));
        for (let e = 0; e < r.size; e++) {
          let n =
            r.size > 2 ? Bh[(e + Math.floor(this.clock * 20)) % 4] : r.tone;
          t.particles.spawn({
            x: r.x + (Math.random() - 0.5) * r.size * 2,
            y: r.y + (Math.random() - 0.5) * r.size * 2,
            vx: (Math.random() - 0.5) * 30,
            vy: (Math.random() - 0.5) * 30,
            life: 0.4,
            size: r.size > 2 ? 2 : 1,
            color: zh[n].glow,
            glow: !0,
          });
        }
        i >= 1 && (this.orbs.splice(e, 1), r.onHit());
      }
      if (
        (this.locked || this.updateRecalled(n),
        t.dome.breach > 0.05 && Math.random() < n * 30)
      ) {
        let e = RZ(0);
        t.particles.spawn({
          x: e.x + (Math.random() - 0.5) * 10,
          y: e.y - Math.random() * 40,
          vx: -20 - Math.random() * 20,
          vy: (Math.random() - 0.5) * 10,
          life: 1.2,
          size: 2,
          color: Math.random() < 0.5 ? `#1a0508` : `#3a0a18`,
          glow: !1,
        });
      }
      this.objective &&
        this.objective.total &&
        (this.objective.count = Math.min(this.objective.total, this.counter()));
    }
    counter = () => 0;
    track(e) {
      this.counter = e;
    }
    orbOf(e, t) {
      return cz(e.kind)
        ? fz(e.x * 16, e.y * 16, e.dir)
        : this.g.orbPos(e.x, e.y, e.dir, t, 0);
    }
    beamColor(e) {
      return e.kind === `idris`
        ? `#fff4d6`
        : e.kind in Rh
          ? S[Rh[e.kind]].colors.glow
          : `#7ef9ff`;
    }
    collect(e, t, n, r) {
      let i = this.g;
      for (let a of this.npcs) {
        if (!a.visible || a.alpha <= 0.01) continue;
        let o = a.x * 16,
          s = a.y * 16;
        if (a.kind === `lillith`) {
          let c = zh[a.tone],
            l = this.lillithLive();
          if (l) {
            let u = this.clock - this.lilT > 0.5,
              d = u ? 0 : this.clock - this.lilT;
            ((this.lilT = this.clock),
              !u &&
                this.lilAt &&
                Math.hypot(a.x - this.lilAt.x, a.y - this.lilAt.y) > 2 &&
                (this.lilPour = {
                  dx: (a.x - this.lilAt.x) * 16,
                  dy: (a.y - this.lilAt.y) * 16,
                  t0: this.clock,
                }),
              (this.lilAt = { x: a.x, y: a.y }),
              u && l.reset(o, s, 1),
              l.step(d, {
                x: o,
                y: s,
                facing: 1,
                engaged: !0,
                lillith: this.lillithPose(a),
              }));
            let f = Math.round(o - n),
              p = Math.round(s - r);
            (e.push({
              y: s + 40,
              x: o,
              fy: s,
              box: [48, 112, 16],
              draw: () => {
                ((t.fillStyle = `rgba(0,0,0,0.3)`),
                  t.beginPath(),
                  t.ellipse(f, p, 5, 2, 0, 0, Math.PI * 2),
                  t.fill(),
                  l.draw(t, f, p, !1));
              },
            }),
              i.lights.push({
                x: o - n,
                y: s - r - 26,
                r: 44,
                color: c.glow,
                a: 0.9,
                z: 26,
              }));
          }
          continue;
        }
        let c = cz(a.kind);
        if (c) {
          let i = !!a.tween,
            l = a.stagger > 0 ? 0.6 - a.stagger : void 0,
            u = a.thrustT >= 0 && a.thrustT < mR ? a.thrustT : void 0,
            d = a.fallen
              ? a.fallenT >= 0
                ? this.clock - a.fallenT
                : 0
              : void 0,
            f = this.clock + a.name.length * 0.7;
          e.push({
            y: s,
            x: o,
            box: gz(c),
            draw: () => {
              ((t.globalAlpha = a.alpha),
                mz(t, c, o - n, s - r, {
                  dir: a.dir,
                  t: f,
                  moving: i,
                  hurt: l,
                  attack: u,
                  death: d,
                }),
                (t.globalAlpha = 1));
            },
          });
        } else {
          let i = Jh(a.kind),
            c =
              a.fallen || a.channel || a.castT > 0
                ? 6
                : Math.floor(this.clock * 2) % 2,
            l = a.fallen ? 0 : a.dir,
            u = a.stagger > 0 ? -Math.sin((a.stagger / 0.6) * Math.PI) * 6 : 0;
          e.push({
            y: s,
            x: o,
            box: [24 * NR, 72 * NR, 12],
            draw: () => {
              ((t.globalAlpha = a.alpha),
                (t.fillStyle = `rgba(0,0,0,0.3)`),
                t.beginPath(),
                t.ellipse(
                  Math.round(o - n + u),
                  Math.round(s - r),
                  6 * NR,
                  2.5 * NR,
                  0,
                  0,
                  Math.PI * 2,
                ),
                t.fill(),
                IR(t, i.frames[l][c], o - n + u, s - r, 10, 26),
                (t.globalAlpha = 1));
            },
          });
        }
        if (a.channel || a.kind === `idris`) {
          let e = this.orbOf(a, a.channel || a.castT > 0);
          i.lights.push({
            x: e.x - n,
            y: e.y - r,
            r: 40,
            color: this.beamColor(a),
            a: 0.9 * a.alpha,
          });
        }
      }
      for (let e of this.orbs)
        i.lights.push({
          x: e.x - n,
          y: e.y - r,
          r: 30 + e.size * 8,
          color: zh[e.tone].glow,
          a: 1,
        });
      if (this.charge || this.unmaking) {
        let e = this.lillithHand(),
          t = this.charge
            ? FZ((this.clock - this.charge.t0) / this.charge.dur, 0, 1)
            : 1;
        i.lights.push({
          x: e.x - n,
          y: e.y - r,
          r: 30 + t * 60,
          color: this.unmaking ? `#b01a2a` : zh[this.npc(`lillith`).tone].glow,
          a: 1,
        });
      }
      this.pour &&
        i.lights.push({
          x: kZ.x * 16 - n,
          y: kZ.y * 16 - r,
          r: 160,
          color: `#fff4d6`,
          a: 1,
        });
    }
    columnsHd(e) {
      for (let t of this.npcs) {
        if (!t.channel || !t.visible || t.alpha <= 0.01) continue;
        let n = this.orbOf(t, !0),
          r = t.y * 16,
          i = r - n.y,
          a = 0.7 + Math.sin(this.clock * 17 + t.x) * 0.15,
          o = this.shock ? 5 : 3;
        (e.push({
          x0: Math.round(n.x) - Math.floor(o / 2),
          y: r,
          w: o,
          z0: i,
          z1: i + AZ,
          color: this.beamColor(t),
          a: 0.28 * a * (this.shock ? 2.5 : 1) * t.alpha,
          add: !0,
        }),
          e.push({
            x0: Math.round(n.x),
            y: r,
            w: 1,
            z0: i,
            z1: i + AZ,
            color: `#ffffff`,
            a: 0.7 * a * t.alpha,
            add: !0,
          }));
      }
    }
    drawAdditive(e, t, n, r = !0) {
      let i = this.g;
      for (let i of r ? this.npcs : []) {
        if (!i.channel || !i.visible || i.alpha <= 0.01) continue;
        let r = this.orbOf(i, !0),
          a = 0.7 + Math.sin(this.clock * 17 + i.x) * 0.15,
          o = this.beamColor(i),
          s = this.shock ? 5 : 3;
        ((e.globalAlpha = 0.28 * a * (this.shock ? 2.5 : 1) * i.alpha),
          (e.fillStyle = o),
          e.fillRect(
            Math.round(r.x - t - Math.floor(s / 2)),
            0,
            s,
            Math.round(r.y - n),
          ),
          (e.globalAlpha = 0.7 * a * i.alpha),
          (e.fillStyle = `#ffffff`),
          e.fillRect(Math.round(r.x - t), 0, 1, Math.round(r.y - n)));
      }
      e.globalAlpha = 1;
      for (let r of this.orbs) {
        let i = Math.round(r.x - t),
          a = Math.round(r.y - n),
          o = r.size,
          s = o > 2 ? Bh[Math.floor(this.clock * 12) % 4] : r.tone;
        ((e.fillStyle = zh[s].glow),
          e.fillRect(i - o - 1, a - o - 1, o * 2 + 3, o * 2 + 3),
          (e.fillStyle = zh[s].core),
          e.fillRect(i - o, a - o, o * 2 + 1, o * 2 + 1),
          (e.fillStyle = `#ffffff`),
          e.fillRect(i - 1, a - 1, 3, 3));
      }
      if (this.charge) {
        let r = this.lillithHand(),
          i = FZ((this.clock - this.charge.t0) / this.charge.dur, 0, 1),
          a = Math.round(2 + i * 5);
        ((e.fillStyle = zh[this.npc(`lillith`).tone].glow),
          e.fillRect(
            Math.round(r.x - t - a),
            Math.round(r.y - n - a),
            a * 2 + 1,
            a * 2 + 1,
          ),
          (e.fillStyle = `#ffffff`),
          e.fillRect(Math.round(r.x - t - 1), Math.round(r.y - n - 1), 3, 3));
      }
      if (this.unmaking) {
        let r = this.npc(`lillith`),
          a = r.x * 16 - t,
          o = r.y * 16 - 20 - n,
          s = this.clock - this.unmaking.t0,
          c = Math.min(34, 10 + s * 20);
        (i.pixelEllipse(e, a, o, c, c * 0.55, `#b01a2a`, 0.9),
          i.pixelEllipse(e, a, o, c * 0.7, c * 0.38, `#5a0a1a`, 0.9));
        for (let t = 0; t < 10; t++) {
          let n = (t / 10) * Math.PI * 2 + s * 1.5;
          ((e.fillStyle = t % 3 == 0 ? `#ffffff` : `#b01a2a`),
            e.fillRect(
              Math.round(a + Math.cos(n) * c),
              Math.round(o + Math.sin(n) * c * 0.55) - 2,
              1,
              4,
            ));
        }
        let l = this.lillithHand();
        ((e.fillStyle = `#b01a2a`),
          e.fillRect(Math.round(l.x - t - 4), Math.round(l.y - n - 4), 9, 9),
          (e.fillStyle = `#ffffff`),
          e.fillRect(Math.round(l.x - t - 2), Math.round(l.y - n - 2), 5, 5));
      }
      if (this.pour) {
        let r = this.npc(`idris`),
          a = this.orbOf(r, !0);
        ((e.globalAlpha = 0.6 + 0.3 * Math.sin(this.clock * 20)),
          i.pixelLine(
            e,
            a.x - t,
            a.y - n,
            kZ.x * 16 - t,
            kZ.y * 16 - n,
            `#ffd98a`,
            3,
          ),
          i.pixelLine(
            e,
            a.x - t,
            a.y - n,
            kZ.x * 16 - t,
            kZ.y * 16 - n,
            `#ffffff`,
            1,
          ),
          (e.globalAlpha = 1));
      }
      if (this.shock) {
        let r = (this.clock - this.shock.t0) / this.shock.dur;
        if (r >= 1) this.shock = null;
        else {
          let a = (Pr + r * 16) * 16;
          (i.pixelEllipse(e, Ar * 16 - t, jr * 16 - n, a, a, `#ffffff`, 1 - r),
            i.pixelEllipse(
              e,
              Ar * 16 - t,
              jr * 16 - n,
              a - 3,
              a - 3,
              `#7ef9ff`,
              (1 - r) * 0.8,
            ));
        }
      }
    }
    drawCard(e, t, n, r) {
      if (!this.card) return;
      let i = this.clock - this.cardT0,
        a = this.card !== `realm`;
      (e.save(), (e.imageSmoothingEnabled = !1));
      let o = e.createLinearGradient(0, 0, 0, n);
      (a
        ? (o.addColorStop(0, `#0a0208`),
          o.addColorStop(0.7, `#22050e`),
          o.addColorStop(1, `#3a0812`))
        : (o.addColorStop(0, `#040816`), o.addColorStop(1, `#0b1a33`)),
        (e.fillStyle = o),
        e.fillRect(0, 0, t, n));
      for (let o = 0; o < 90; o++) {
        let s = ((o * 937) % 1e3) / 1e3,
          c = ((o * 613) % 1e3) / 1e3;
        ((e.globalAlpha = 0.2 + 0.2 * Math.sin(i * 2 + o)),
          (e.fillStyle = a ? `#ff6a4a` : `#bfe3ff`));
        let l = a ? (c * n - i * 20 * (1 + (o % 3))) % n : c * n;
        e.fillRect(Math.round(s * t), Math.round(l < 0 ? l + n : l), r, r);
      }
      if (((e.globalAlpha = 1), this.card === `drakkar`)) {
        let r = $h(),
          a = Math.max(2, Math.round((n * 0.62) / r.height)),
          o = Math.max(0, 1 - i / 3) * n * 0.08,
          s = Math.round(t / 2 - (r.width * a) / 2),
          c = Math.round(n - r.height * a + o),
          l = Bp(`#b01a2a`, 80);
        ((e.globalAlpha = FZ(i / 2, 0, 0.7)),
          e.drawImage(
            l,
            t / 2 - r.width * a,
            c - r.height * a * 0.1,
            r.width * a * 2,
            r.height * a * 1.3,
          ),
          (e.globalAlpha = FZ(i / 1.5, 0, 1)),
          e.drawImage(r, s, c, r.width * a, r.height * a));
        let u = s + 33 * a,
          d = c + 12 * a;
        for (let t = 0; t < 7; t++) {
          let n = (t / 7) * Math.PI * 2 + i * 0.6,
            r = u + Math.cos(n) * 17 * a,
            o = d + Math.sin(n) * 5 * a - 4 * a,
            s = Math.sin(n) < 0;
          ((e.globalAlpha = FZ(i / 1.5, 0, 1) * (s ? 0.6 : 1)),
            (e.fillStyle = `#5a0a1a`),
            e.fillRect(Math.round(r - a), Math.round(o - 2 * a), 2 * a, 4 * a),
            (e.fillStyle = `#b01a2a`),
            e.fillRect(Math.round(r - a / 2), Math.round(o - a), a, 2 * a),
            (e.fillStyle = `#ffffff`),
            e.fillRect(
              Math.round(r - a / 4),
              Math.round(o - a / 4),
              Math.max(1, a / 2),
              Math.max(1, a / 2),
            ));
        }
        e.globalAlpha = 1;
      }
      (this.drawRealm(e, t, n, r, i), e.restore());
    }
    drawRealm(e, t, n, r, i) {
      let a = (e) => t * (0.06 + e * 0.88),
        o = (e) => n * (0.16 + e * 0.56),
        s = jZ[1],
        c = a(s.x),
        l = o(s.y);
      ((e.lineWidth = Math.max(1, r / 2)),
        e.setLineDash([r * 3, r * 3]),
        (e.lineDashOffset = -i * 20));
      for (let t of jZ) {
        if (t === s) continue;
        let n = this.townState(t.name);
        ((e.strokeStyle =
          n === `hollowed`
            ? `rgba(176,26,42,0.35)`
            : n === `silent`
              ? `rgba(140,140,150,0.15)`
              : `rgba(126,249,255,0.18)`),
          e.beginPath(),
          e.moveTo(c, l),
          e.lineTo(a(t.x), o(t.y)),
          e.stroke());
      }
      (e.setLineDash([]),
        (e.font = `${Math.max(9, Math.round(r * 2.6))}px Silkscreen, monospace`),
        (e.textAlign = `center`),
        (e.fillStyle = `rgba(200,190,230,0.35)`));
      for (let t of NZ) e.fillText(t.name, a(t.x), o(t.y) + r * 3);
      let u = (t, n, s) => {
        let c = tg(n),
          l = s ? r * 0.5 : r * 0.3,
          u = a(t.x),
          d = o(t.y);
        if (n !== `dead`) {
          let t = Bp(
            n === `hollowed`
              ? `#b01a2a`
              : n === `silent`
                ? `#6f6f80`
                : `#44c9f0`,
            60,
          );
          ((e.globalCompositeOperation = `lighter`),
            (e.globalAlpha =
              (n === `silent` ? 0.2 : 0.45) + 0.15 * Math.sin(i * 2 + u)));
          let r = 70 * l * 0.6;
          (e.drawImage(t, u - r, d - r * 1.2, r * 2, r * 2),
            (e.globalCompositeOperation = `source-over`));
        }
        e.globalAlpha = 1;
        let f = this.fallen.get(t.name);
        if (
          (f !== void 0 &&
            this.clock - f < 0.5 &&
            (e.globalAlpha = 0.5 + 0.5 * Math.sin((this.clock - f) * 60)),
          e.drawImage(
            c,
            Math.round(u - (c.width * l) / 2),
            Math.round(d - c.height * l * 0.85),
            c.width * l,
            c.height * l,
          ),
          (e.globalAlpha = 1),
          (e.fillStyle =
            n === `hollowed`
              ? `#ff6a7a`
              : n === `silent` || n === `dead`
                ? `#77738a`
                : s
                  ? `#ffffff`
                  : `#b9d6ec`),
          e.fillText(t.name, u, d + r * 4),
          this.card === `drakkar` && PZ.includes(t.name))
        ) {
          let n = PZ.indexOf(t.name),
            a = FZ((i - 1.2 - n * 0.45) / 0.4, 0, 1);
          a > 0 &&
            ((e.strokeStyle = `rgba(255,59,107,${a})`),
            (e.lineWidth = Math.max(1, r * 0.6)),
            e.beginPath(),
            e.arc(
              u,
              d - c.height * l * 0.35,
              r * 7 * (1.6 - a * 0.6),
              0,
              Math.PI * 2,
            ),
            e.stroke());
        }
      };
      u(MZ, `dead`, !1);
      for (let e of jZ) u(e, this.townState(e.name), e === s);
    }
    townState(e) {
      return this.fallen.has(e)
        ? e === `Vespertine`
          ? `silent`
          : `hollowed`
        : `living`;
    }
    drawText(e, t, n, r, i, a, o) {
      (e.save(), (e.textAlign = `center`), (e.textBaseline = `alphabetic`));
      let s = _l();
      if (((e.lineJoin = s.readableFont ? `round` : `miter`), !this.locked)) {
        ((e.font = $c(rl(r, s.textSize), s.readableFont)),
          (e.lineWidth = Math.max(2, r)));
        for (let t of this.npcs) {
          if (!t.visible || t.alpha < 0.5 || t.kind === `lillith` || t.fallen)
            continue;
          let n = this.g.headPlaces.get(`circle:${t.kind}`);
          if (n && !n.label) continue;
          let r = a.toScreen(t.x * 16, t.y * 16, PR(30)),
            i = n?.label ? n.label.x + n.label.w / 2 : r.sx * o,
            s = n?.label ? n.label.y + n.label.h - 1 : r.sy * o;
          ((e.strokeStyle = `rgba(10,5,20,0.9)`),
            e.strokeText(t.name, i, s),
            (e.fillStyle =
              t.kind === `holloway` || t.kind === `watchman`
                ? `#d8c49a`
                : t.kind === `idris`
                  ? `#e6e0f5`
                  : yZ[t.kind].color),
            e.fillText(t.name, i, s));
        }
        this.marker && this.drawMarker(e, t, n, r, a, o);
      }
      if (this.narration) {
        let a = this.narration,
          o = a.text.slice(0, Math.floor((this.clock - a.t0) * 38)),
          c = il(r, s.textSize);
        ((e.font = $c(c, s.readableFont)),
          (e.fillStyle = `#f4ecff`),
          (e.shadowColor = `rgba(0,0,0,0.95)`),
          (e.shadowBlur = 10),
          this.wrapText(
            e,
            o,
            t / 2,
            n - i - r * 10,
            t * 0.8,
            Math.round(c * 1.2),
          ),
          (e.shadowBlur = 0));
      }
      if (this.caption) {
        let a = this.caption,
          o = this.clock - a.t0;
        if (o > a.dur) this.caption = null;
        else {
          e.globalAlpha = FZ(Math.min(o / 0.6, (a.dur - o) / 0.6), 0, 1);
          let s = Math.round(r * 5.5);
          ((e.font = `${s}px "Press Start 2P", monospace`),
            (e.fillStyle = `#f4ecff`),
            (e.shadowColor = `rgba(126,249,255,0.8)`),
            (e.shadowBlur = 18),
            e.fillText(
              a.text.slice(0, Math.floor(o * 28)),
              t / 2,
              n - i - s * 2.3,
            ),
            (e.shadowBlur = 0),
            (e.font = `${Math.round(r * 3.8)}px Silkscreen, monospace`),
            (e.fillStyle = `#e4dcf7`),
            e.fillText(a.sub, t / 2, n - i - s * 1),
            (e.globalAlpha = 1));
        }
      }
      if (this.title) {
        let i = this.title,
          a = this.clock - i.t0;
        if (a > i.dur) this.title = null;
        else {
          let o = FZ(Math.min(a / 0.8, (i.dur - a) / 0.8), 0, 1);
          ((e.globalAlpha = o * 0.6),
            (e.fillStyle = `#000`),
            e.fillRect(0, 0, t, n),
            (e.globalAlpha = o));
          let s = Math.round(r * 11);
          ((e.font = `${s}px "Press Start 2P", monospace`),
            (e.fillStyle = `#ffffff`),
            (e.shadowColor = `#b84dff`),
            (e.shadowBlur = 40),
            e.fillText(i.text, t / 2, n * 0.47),
            (e.shadowBlur = 0));
          let c =
            Math.min(t * 0.6, e.measureText(i.text).width) * FZ(a / 1.2, 0, 1);
          ((e.fillStyle = `#ffd166`),
            e.fillRect(
              t / 2 - c / 2,
              n * 0.47 + s * 0.5,
              c,
              Math.max(2, r / 2),
            ),
            (e.font = `${Math.round(r * 4.2)}px Silkscreen, monospace`),
            e.fillText(i.sub, t / 2, n * 0.47 + s * 1.5),
            (e.globalAlpha = 1));
        }
      }
      let c = this.skippable() ? fZ(`scene`) : null,
        l = al(r, s.textSize);
      (c &&
        ((e.font = `${l}px Silkscreen, monospace`),
        (e.fillStyle = `rgba(255,255,255,0.45)`),
        (e.textAlign = `right`),
        e.fillText(c, t - 20, n - Math.max(i / 2 - r * 2, 16))),
        this.fadeA > 0 &&
          ((e.globalAlpha = this.fadeA),
          (e.fillStyle = `#000`),
          e.fillRect(0, 0, t, n),
          (e.globalAlpha = 1)),
        e.restore());
    }
    drawMarker(e, t, n, r, i, a) {
      let o = this.marker,
        s = i.toward(o.x * 16, o.y * 16, 40),
        c = s.sx * a,
        l = s.sy * a,
        u = Math.sin(this.clock * 5) * r * 2,
        d = r * 12;
      if (
        ((e.fillStyle = `#ffd166`),
        (e.strokeStyle = `#1b1030`),
        (e.lineWidth = Math.max(2, r * 0.7)),
        c > d && c < t - d && l > d && l < n - d)
      ) {
        let t = r * 3;
        (e.beginPath(),
          e.moveTo(c - t, l - t * 1.6 + u),
          e.lineTo(c + t, l - t * 1.6 + u),
          e.lineTo(c, l + u),
          e.closePath(),
          e.fill(),
          e.stroke());
        return;
      }
      let f = t / 2,
        p = n / 2,
        m = Math.atan2(l - p, c - f),
        h = FZ(f + Math.cos(m) * t, d, t - d),
        g = FZ(p + Math.sin(m) * n, d, n - d),
        _ = r * 4;
      (e.save(),
        e.translate(h, g),
        e.rotate(m),
        e.beginPath(),
        e.moveTo(_ * 1.4, 0),
        e.lineTo(-_, -_),
        e.lineTo(-_ * 0.4, 0),
        e.lineTo(-_, _),
        e.closePath(),
        e.fill(),
        e.stroke(),
        e.restore());
    }
    wrapText(e, t, n, r, i, a) {
      let o = t.split(` `),
        s = [],
        c = ``;
      for (let t of o) {
        let n = c ? c + ` ` + t : t;
        e.measureText(n).width > i && c ? (s.push(c), (c = t)) : (c = n);
      }
      (c && s.push(c),
        s.forEach((t, i) => e.fillText(t, n, r + (i - (s.length - 1)) * a)));
    }
    hud() {
      let e = this.dialogue;
      return {
        dialogue: e
          ? {
              speaker: e.speaker,
              voice: e.voice,
              text: e.text.slice(0, this.shownChars(e)),
              full: this.shownChars(e) >= e.text.length,
              choices:
                this.choice && this.shownChars(e) >= e.text.length
                  ? this.choice.options
                  : void 0,
            }
          : null,
        objective: this.locked ? null : this.objective,
        canSkip: !this.done,
        skillsTaught: this.skillsTaught,
      };
    }
    startShock() {
      this.skipping || (this.shock = { t0: this.clock, dur: 1.4 });
    }
    startUnmaking() {
      ((this.unmaking = this.skipping ? null : { t0: this.clock }),
        this.skipping || q.sfx(`death`, 0.5));
    }
    stopUnmaking() {
      this.unmaking = null;
    }
    startPour() {
      this.skipping
        ? (this.npc(`idris`).alpha = 0)
        : (this.pour = { t0: this.clock });
    }
    stopPour() {
      ((this.pour = null),
        (this.npc(`idris`).alpha = 0),
        (this.npc(`idris`).visible = !1));
    }
    startDawn(e) {
      let t = this.night ?? 0.66;
      this.skipping
        ? (this.night = 0.18)
        : (this.dawn = { t0: this.clock, dur: e, from: t, to: 0.18 });
    }
  },
  BZ = {
    varra: [
      `About time, Initiate. I've spent weeks behind this Ward and I'm sick of only holding it.`,
      `She's thinning it on this arc and things are crawling through. Let's teach them what Cindergate fire feels like.`,
    ],
    ysolde: [
      `You're late, {name}. The vigil rotation doesn't wait, and neither do they.`,
      `The Ward is thin on this arc. Whatever crawls through, we put down. Calmly. Patience wins sieges.`,
    ],
    teodor: [
      `{name}! Good. Stay close, and watch the Ward, not her.`,
      `It's thin on this arc and the dead are slipping through. Let's show them what a Thunderspire storm looks like.`,
    ],
    oriel: [
      `...You came. Most won't stand this near me tonight.`,
      `The Ward is thinning on this arc. The dead are seeping through it. We send them back where they belong.`,
    ],
  },
  VZ = {
    paladin: [
      `You're late, {name}. A Sworn Blade stands the vigil like the rest of us, and tonight the line is yours.`,
      `The Ward is thin on this arc. Whatever crawls through, you meet it at the line, shield up. Calmly. Patience wins sieges.`,
    ],
    marksman: [
      `{name}! Good. You loose, I'll call the storm. Stay close, and watch the Ward, not her.`,
      `It's thin on this arc and the dead are slipping through. Put an arrow in anything that gets past the line.`,
    ],
    scout: [
      `There you are, {name}. Quietly, now. Saltmarrow didn't teach you to fold yourself into the Veil so you could stand in the open.`,
      `The dead see poorly and hear worse. Shoot what slips the line, cut what gets close, and when they crowd you, step out of the world.`,
    ],
  };
