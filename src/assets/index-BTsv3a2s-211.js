// index-BTsv3a2s 211 — math
// Lines 131509-132111 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var u$ = { duel: 0.6, raise: 0.6, woven: 0.25, unmaking: 0.05, outro: 0.05 },
  d$ = 2.2,
  f$ = class {
    g;
    book;
    questId;
    s;
    over = !1;
    phase = `intro`;
    m = null;
    t = 0;
    next = { bolt: 1.5, burst: 5, strike: 7, blink: 0, strafe: 0 };
    strafe = 1;
    toneI = 0;
    adds = [];
    addHit = new Map();
    cast = null;
    bark = null;
    later = [];
    constructor(e, t, n, r) {
      ((this.g = e), (this.book = t), (this.questId = n), (this.s = r));
      let i = this.st;
      (e.api.questPhase(!0).then((e) => {
        !e && !this.over && this.abort(`refused`);
      }),
        (i.phased = !0),
        (i.night = 0.8));
      let a = this.L;
      (Object.assign(a, {
        x: r.x,
        y: r.y - 1,
        visible: !0,
        alpha: 1,
        tone: `none`,
        castT: 0,
        tween: null,
        fallen: !1,
      }),
        i.play(this.intro()));
    }
    get st() {
      return this.g.story;
    }
    get L() {
      return this.st.npc(`lillith`);
    }
    hero(e) {
      return this.st.say(`crystal`, e, this.book.heroVoice());
    }
    narrate(e) {
      return this.st.say(`crystal`, e, this.book.narrator());
    }
    *intro() {
      let e = this.st,
        t = this.g,
        n = this.L;
      (e.cine(!0),
        yield e.camTo((t.me.x + n.x) / 2, (t.me.y + n.y) / 2 - 1, 1.4),
        yield e.say(
          `lillith`,
          `You came alone. He always said you could tell a real mage by how badly they take advice.`,
        ),
        yield e.say(
          `lillith`,
          `I know what you are. His last Initiate. The last name in the Book of Attunements, in his hand.`,
        ),
        yield this.hero(`I brought what you left at your camp.`),
        yield this.narrate(
          `You hold out the carved Stormcaller. Her hand moves toward it, then stops.`,
        ),
        yield e.say(
          `lillith`,
          `Not yet. First tell me what he said. At the end, in the crystal. What did he say about me?`,
        ),
        yield this.hero(
          `He said the Crystal remembers me. And on his desk there's a page with your name on it, three times. He never finished it.`,
        ),
        yield e.say(`lillith`, `Three times.`),
        yield e.say(`lillith`, `He never could finish a letter to me either.`),
        yield e.say(
          `lillith`,
          `Drakkar says the crystals could remember everyone, if they were joined. Caelan would come back. Every Caelan would come back.`,
        ),
        yield e.say(
          `lillith`,
          `And the Conclave says no. And Idris said nothing. And my brother is a voice in a shard.`,
        ),
        yield e.say(
          `lillith`,
          `You want to know why he couldn't stop me? Let me show you what he taught me.`,
        ),
        e.cine(!1),
        this.startDuel());
    }
    *outro() {
      let e = this.st,
        t = this.g,
        n = this.L;
      (e.cine(!0),
        (n.tone = `none`),
        yield e.camTo((t.me.x + n.x) / 2, (t.me.y + n.y) / 2 - 1, 1),
        yield e.say(`lillith`, `Enough. Enough.`),
        yield e.say(
          `lillith`,
          `He taught you that in one night. It took him four years to teach me.`,
        ),
        yield this.narrate(
          `You hold out the carved Stormcaller again. This time she takes it.`,
        ),
        yield e.say(
          `lillith`,
          `Caelan made this for me the winter before he died. A Stormcaller, because I was going to Thunderspire. He wanted to come with me.`,
        ),
        yield e.say(
          `lillith`,
          `Drakkar keeps him in a shard, close, where I can hear him. When the Labyrinth is whole, he brings him back. Every soul remembered. Every Caelan.`,
        ),
        yield e.say(
          `lillith`,
          `I began the Unmaking on the only man who ever told me the truth. I won't finish it on his last Initiate. Not tonight.`,
        ),
        yield e.say(
          `lillith`,
          `Tell Ysolde to let Teodor sleep. He's been on the east wall three nights running.`,
        ),
        e.skipping ||
          (t.particles.burst(
            n.x * 16,
            n.y * 16 - 30,
            90,
            [...Bh.map((e) => zh[e].glow), zh.hollow.glow, `#ffffff`],
            120,
          ),
          (t.flash = { color: `#ffffff`, a: 0.5 }),
          q.sfx(`blink`, 0.9)),
        (n.visible = !1),
        yield e.wait_(0.8),
        yield this.narrate(
          `She Blinks. Four colours, then a fifth, black-red, and the field is empty except for the mist.`,
        ),
        e.showTitle(`LILLITH RETREATS`, `Chapter I · The First Key`, 4),
        e.skipping || q.sfx(`levelup`, 0.8),
        yield e.wait_(3),
        e.cine(!1),
        this.win());
    }
    startDuel() {
      let e = this.g,
        t = this.L,
        n = this.st.spawnLocal(`lillith`, t.x, t.y);
      n.ghost = !0;
      let r = Math.max(8, e.meDoc?.level ?? 8),
        i = Math.round(Fe.lillith.hp * d$ * (Ve(r) / Ve(8)));
      ((n.doc.hp = n.doc.maxHp = i),
        (this.m = n),
        (this.phase = `duel`),
        (this.t = 0),
        (e.banner = {
          title: `LILLITH HIGHMORE`,
          subtitle: `The First Key`,
          t0: e.real,
          dur: 3.2,
          color: `#ff4d6a`,
        }),
        q.sfx(`chime`, 0.8));
    }
    update(e) {
      let t = this.g;
      if (this.over) return;
      if (t.meDoc?.dead) return this.abort(`fell`);
      if (
        t.room ||
        Math.hypot(t.me.x - this.s.x, t.me.y - this.s.y) > this.s.r + 16
      )
        return this.abort(`left`);
      if (this.phase === `intro` || this.phase === `outro` || !this.m) return;
      let n = e * t.timeScale;
      this.t += n;
      for (let e = this.later.length - 1; e >= 0; e--) {
        if (this.later[e].at > this.t) continue;
        let t = this.later[e].fn;
        if ((this.later.splice(e, 1), t(), this.over)) return;
      }
      let r = this.m,
        i = this.L;
      r.doc.dead && ((r.doc.dead = !1), (r.dying = 0));
      let a = (u$[this.phase] ?? 0) * r.doc.maxHp;
      r.doc.hp < a && (r.doc.hp = Math.ceil(a));
      let o = r.doc.hp <= a + 1;
      (this.phase === `duel`
        ? (this.move(n, 1.7),
          this.duelAttacks(1.45, 0.1),
          o && this.startRaise())
        : this.phase === `raise`
          ? (this.move(n, 1.1),
            this.duelAttacks(2.3, 0.08),
            this.updateAdds(n),
            this.adds.every((e) => e.doc.dead) && this.endRaise())
          : this.phase === `woven`
            ? (this.move(n, 2), this.wovenAttacks(), o && this.startUnmaking())
            : this.phase === `unmaking` && this.updateUnmaking(),
        (this.st.lillithLook = { x: t.me.x, y: t.me.y }),
        (r.rx = r.tx = r.fx0 = r.doc.x = i.x),
        (r.ry = r.ty = r.fy0 = r.doc.y = i.y),
        (r.doc.facing = t.me.x < i.x ? -1 : 1),
        this.bark && this.bark.until < t.real && (this.bark = null));
    }
    move(e, t) {
      let n = this.g,
        r = this.L,
        i = r.x - n.me.x,
        a = r.y - n.me.y,
        o = Math.hypot(i, a) || 1;
      if (o < 2.4 && this.t > this.next.blink) {
        this.next.blink = this.t + 3.2;
        for (let e = 0; e < 8; e++) {
          let t =
              Math.atan2(a, i) +
              (Math.random() - 0.5) * 1.6 +
              (e > 3 ? Math.PI : 0),
            o = n.me.x + Math.cos(t) * 6,
            s = n.me.y + Math.sin(t) * 6;
          if (!(
            Math.hypot(o - this.s.x, s - this.s.y) > this.s.r + 3 ||
            !n.canStand(o, s)
          )) {
            (n.particles.burst(
              r.x * 16,
              r.y * 16 - 24,
              26,
              [zh[this.tone()].glow, `#ffffff`],
              90,
            ),
              (r.x = o),
              (r.y = s),
              n.particles.burst(
                o * 16,
                s * 16 - 24,
                26,
                [zh[this.tone()].glow, `#ffffff`],
                90,
              ),
              q.sfx(`blink`, 0.6));
            return;
          }
        }
      }
      this.t > this.next.strafe &&
        ((this.next.strafe = this.t + 3 + Math.random() * 2),
        (this.strafe = -this.strafe));
      let s = Math.max(-1, Math.min(1, 5.2 - o)),
        c = (i / o) * s + (-a / o) * this.strafe * 0.8,
        l = (a / o) * s + (i / o) * this.strafe * 0.8,
        u = r.x + c * t * e,
        d = r.y + l * t * e;
      Math.hypot(u - this.s.x, d - this.s.y) < this.s.r + 2 && n.canStand(u, d)
        ? ((r.x = u), (r.y = d))
        : (this.strafe = -this.strafe);
    }
    tone() {
      return Bh[this.toneI % 4];
    }
    duelAttacks(e, t) {
      (this.t >= this.next.bolt &&
        ((this.next.bolt = this.t + e),
        Math.random() < 0.34 && this.toneI++,
        this.bolt(this.tone(), t)),
        this.t >= this.next.burst &&
          ((this.next.burst = this.t + 6.5),
          this.burst(3, 1.5, 1.1, 0.15, this.tone())));
    }
    wovenAttacks() {
      (this.t >= this.next.bolt &&
        ((this.next.bolt = this.t + 1.05),
        this.toneI++,
        this.bolt(this.tone(), 0.1)),
        this.t >= this.next.burst &&
          ((this.next.burst = this.t + 7),
          this.burst(4, 1.4, 1, 0.14, Bh[(this.toneI + 2) % 4])),
        this.t >= this.next.strike &&
          ((this.next.strike = this.t + 9), this.wovenStrike()));
    }
    bolt(e, t) {
      let n = this.g,
        r = n.me.x,
        i = n.me.y;
      ((this.L.tone = e),
        this.st.shoot(r * 16, i * 16 - 8, e, 2, 0.75, () => {
          (n.particles.burst(
            r * 16,
            i * 16 - 6,
            16,
            [zh[e].glow, zh[e].core],
            70,
          ),
            Math.hypot(n.me.x - r, n.me.y - i) < 0.95 && this.hurt(t));
        }),
        q.sfx(`cast`, 0.45));
    }
    burst(e, t, n, r, i) {
      let a = this.g,
        o = [{ x: a.me.x, y: a.me.y }];
      for (let t = 1; t < e; t++) {
        let e = Math.random() * Math.PI * 2;
        o.push({
          x: a.me.x + Math.cos(e) * 2.4,
          y: a.me.y + Math.sin(e) * 2.4,
        });
      }
      for (let e of o)
        a.telegraphs.push({
          x: e.x * 16,
          y: e.y * 16,
          r: t * 16,
          life: n,
          max: n,
          color: zh[i].glow,
        });
      ((this.L.tone = i),
        (this.L.castT = 0.6),
        this.at(n, () => {
          for (let e of o)
            a.particles.burst(
              e.x * 16,
              e.y * 16 - 4,
              30,
              [zh[i].glow, zh[i].core, `#ffffff`],
              110,
            );
          (q.sfx(`boom`, 0.4),
            (a.shake = Math.max(a.shake, 4)),
            o.some((e) => Math.hypot(a.me.x - e.x, a.me.y - e.y) < t) &&
              this.hurt(r));
        }));
    }
    wovenStrike() {
      let e = this.g,
        t = this.L,
        n = e.me.x,
        r = e.me.y,
        i = 1.5;
      ((t.castT = 1.8),
        (this.st.lillithAct = { kind: `woven`, t0: this.st.clock, dur: i }),
        e.telegraphs.push({
          x: n * 16,
          y: r * 16,
          r: 36.8,
          life: 2,
          max: 2,
          color: `#ffffff`,
        }),
        this.say(`Every tone at once. He never showed you this.`, 3),
        q.sfx(`cast`, 1));
      for (let e = 0; e < 4; e++) this.at((e * i) / 4, () => (t.tone = Bh[e]));
      this.at(i, () => {
        this.st.shoot(n * 16, r * 16 - 8, `ember`, 5, 0.5, () => {
          (e.particles.burst(
            n * 16,
            r * 16 - 8,
            90,
            [...Bh.map((e) => zh[e].glow), `#ffffff`],
            170,
          ),
            (e.flash = { color: `#ffffff`, a: 0.5 }),
            (e.shake = Math.max(e.shake, 10)),
            q.sfx(`boom`, 0.9),
            Math.hypot(e.me.x - n, e.me.y - r) < 2.3 && this.hurt(0.26));
        });
      });
    }
    startRaise() {
      let e = this.g,
        t = this.st;
      ((this.phase = `raise`),
        (this.m.immune = !0),
        (this.st.lillithAct = { kind: `raise`, t0: this.st.clock, dur: 2.2 }),
        this.say(`You want to see what the Conclave buries? Look.`, 4),
        q.sfx(`boom`, 0.6),
        (e.shake = Math.max(e.shake, 6)));
      let n = Fe.barrowhusk,
        r = Ve(Math.max(5, e.meDoc?.level ?? 5)) / Ve(n.level);
      for (let i = 0; i < 4; i++)
        for (let a = 0; a < 10; a++) {
          let a = (i / 4) * Math.PI * 2 + Math.random() * 0.8,
            o = 3.5 + Math.random() * 1.5,
            s = e.me.x + Math.cos(a) * o,
            c = e.me.y + Math.sin(a) * o;
          if (!e.canStand(s, c)) continue;
          let l = t.spawnLocal(`barrowhusk`, s, c);
          ((l.doc.hp = l.doc.maxHp = Math.round(n.hp * r)),
            (l.rise = 1.1),
            this.adds.push(l));
          break;
        }
      this.at(2.5, () => this.hint(`Your lantern flares. The dead flinch.`));
    }
    updateAdds(e) {
      let t = this.g;
      for (let n of this.adds) {
        if (n.doc.dead || (n.rise ?? 0) > 0) continue;
        let r = t.me.x - n.rx,
          i = t.me.y - n.ry,
          a = Math.hypot(r, i) || 1;
        if ((Math.abs(r) > 0.05 && (n.doc.facing = r < 0 ? -1 : 1), a > 0.85)) {
          let t = 1.25 * e;
          ((n.rx = n.tx = n.fx0 = n.rx + (r / a) * t),
            (n.ry = n.ty = n.fy0 = n.ry + (i / a) * t));
        } else {
          let e = this.addHit.get(n.doc._id) ?? -9;
          this.t - e > 1.5 &&
            (this.addHit.set(n.doc._id, this.t),
            (n.lunge = 0.25),
            (n.lungeDir = { x: r / a, y: i / a }),
            t.slash(t.me.x * 16, t.me.y * 16 - 8, !1),
            this.hurt(0.05));
        }
      }
    }
    endRaise() {
      ((this.phase = `woven`),
        (this.m.immune = !1),
        (this.next.bolt = this.t + 1.5),
        (this.next.burst = this.t + 4),
        (this.next.strike = this.t + 6),
        this.say(`He gave you a light. Of course he did.`, 3.5));
    }
    startUnmaking() {
      let e = this.g,
        t = this.m;
      ((this.phase = `unmaking`),
        (this.later.length = 0),
        this.st.startUnmaking(),
        (this.cast = {
          label: `The Unmaking`,
          t0: this.t,
          dur: 8,
          hp0: t.doc.hp,
          need: t.doc.maxHp * 0.12,
          hint: `Break her Canticle: hurt her before it's finished!`,
        }),
        this.say(`If he could be unmade, so can his last Initiate.`, 4),
        (e.banner = {
          title: `THE UNMAKING`,
          subtitle: `Break her Canticle`,
          t0: e.real,
          dur: 3,
          color: `#b01a2a`,
        }),
        q.sfx(`hurt`, 0.8));
    }
    updateUnmaking() {
      let e = this.g,
        t = this.cast,
        n = this.m;
      if (((this.L.castT = 1), t)) {
        if (t.hp0 - n.doc.hp >= t.need) {
          ((this.cast = null),
            this.st.stopUnmaking(),
            (e.flash = { color: `#ffffff`, a: 0.7 }),
            (e.shake = Math.max(e.shake, 10)),
            (e.slowUntil = e.real + 1.2),
            q.sfx(`boom`, 1),
            (this.phase = `outro`),
            (this.m.immune = !0),
            this.st.play(this.outro()));
          return;
        }
        this.t - t.t0 >= t.dur &&
          ((this.cast = null),
          this.st.stopUnmaking(),
          (e.flash = { color: `#b01a2a`, a: 0.6 }),
          (e.shake = Math.max(e.shake, 12)),
          q.sfx(`boom`, 1),
          this.hurt(0.45),
          this.say(`...Hold still!`, 2.5),
          this.at(4, () => {
            this.phase === `unmaking` &&
              (this.st.startUnmaking(),
              (this.cast = {
                label: `The Unmaking`,
                t0: this.t,
                dur: 8,
                hp0: n.doc.hp,
                need: n.doc.maxHp * 0.12,
                hint: `Break her Canticle: hurt her before it's finished!`,
              }));
          }));
      }
    }
    at(e, t) {
      this.later.push({ at: this.t + e, fn: t });
    }
    hurt(e) {
      let t = this.g,
        n = t.meDoc?.maxHp ?? 100,
        r = Math.round(n * e);
      (t.api.storyHurt(r),
        (t.hurtFlash = 0.35),
        (t.shake = Math.max(t.shake, 4)),
        t.floater(t.me.x * 16, t.me.y * 16 - 30, `-${r}`, `#ff5a6a`, e >= 0.2),
        q.sfx(`hurt`, 0.6));
    }
    say(e, t) {
      this.bark = { text: e, until: this.g.real + t };
    }
    hint(e) {
      let t = this.g;
      t.floater(t.me.x * 16, t.me.y * 16 - 44, e, `#fff4c2`, !1);
    }
    cleanup() {
      let e = this.st;
      (e.removeLocal(!1),
        e.stopUnmaking(),
        (this.L.visible = !1),
        (this.L.tone = `none`),
        (e.lillithLook = null),
        (e.lillithAct = null),
        (e.phased = !1),
        (e.night = null),
        (this.later.length = 0),
        (this.over = !0),
        (this.phase = `over`));
    }
    win() {
      (this.cleanup(), this.g.api.questBoss(this.questId));
    }
    abort(e) {
      let t = this.g,
        n = this.st;
      (n.locked && n.cine(!1),
        this.cleanup(),
        t.api.questPhase(!1),
        e === `left` &&
          (t.banner = {
            title: `The field is empty`,
            subtitle: `Lillith withdraws into the mist. Come back when you're ready.`,
            t0: t.real,
            dur: 4,
            color: `#ff4d6a`,
          }),
        e === `fell` &&
          (t.banner = {
            title: `Lillith withdraws`,
            subtitle: `Return to the Unremembered Field to face her again.`,
            t0: t.real + 3,
            dur: 4,
            color: `#ff4d6a`,
          }));
    }
    hud() {
      let e = this.m;
      if (
        !e ||
        this.phase === `intro` ||
        this.phase === `over` ||
        this.phase === `outro`
      )
        return null;
      let t = this.cast;
      return {
        name: `Lillith Highmore`,
        title: `The First Key`,
        hp: e.doc.hp,
        max: e.doc.maxHp,
        shielded: !!e.immune,
        cast: t
          ? {
              label: t.label,
              k: Math.min(1, (this.t - t.t0) / t.dur),
              hint: t.hint,
            }
          : null,
      };
    }
    drawOverlay(e, t, n, r) {
      let i = this.bark;
      if (!i || !this.L.visible) return;
      let a = this.L,
        o = _l();
      e.font = $c(r, o.readableFont);
      let s = i.text.split(` `),
        c = [],
        l = ``;
      for (let e of s)
        (l + ` ` + e).trim().length > 30
          ? (c.push(l.trim()), (l = e))
          : (l += ` ` + e);
      l.trim() && c.push(l.trim());
      let u = r + 4,
        d = Math.max(...c.map((t) => e.measureText(t).width)) + r,
        f = c.length * u + r * 0.6,
        p = t.toScreen(a.x * 16, a.y * 16, 62),
        m = p.sx * n,
        h = Math.max(sl(o.textSize), p.sy * n - f);
      ((e.fillStyle = `rgba(24,6,14,0.92)`),
        e.fillRect(m - d / 2, h, d, f),
        (e.strokeStyle = `#ff4d6a`),
        (e.lineWidth = Math.max(1, n * 0.6)),
        e.strokeRect(m - d / 2, h, d, f),
        (e.fillStyle = `#ffe3ea`),
        c.forEach((t, n) => e.fillText(t, m, h + u * (n + 1))));
    }
  };
