// assets__index-BTsv3a2s 196 — who
// Lines 124981-125571 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var $J = class {
    g;
    def;
    beat = -1;
    done = !1;
    aborted = !1;
    script = null;
    staged = !1;
    handedBack = !1;
    spawned = 0;
    slowed = !1;
    constructor(e, t) {
      ((this.g = e), (this.def = t));
    }
    get st() {
      return this.g.story;
    }
    start(e = 0) {
      let t = this.g.story;
      if (!t || this.script) return !1;
      let n = this.run(e);
      return t.play(n) ? ((this.script = n), !0) : !1;
    }
    running() {
      let e = this.g.story;
      return !this.done && !!e && !!this.script && e.runs(this.script);
    }
    abort() {
      this.running() && ((this.aborted = !0), (this.st.skipping = !0));
    }
    cut() {
      if (this.done) return;
      let e = this.g.story;
      (this.running() &&
        e?.halt(this.script) &&
        ((e.skipping = !0),
        this.restore(),
        (this.g.zoom = 1),
        this.g.snapCamNow(),
        e.cine(!1)),
        (this.beat = -1),
        (this.done = !0));
    }
    dropped() {
      let e = this.g.story;
      return this.done || !this.script || !e || e.runs(this.script)
        ? !1
        : (e.busy() ||
            ((e.skipping = !0),
            this.restore(),
            (this.g.zoom = 1),
            this.g.snapCamNow(),
            e.cine(!1)),
          (this.aborted = !0),
          (this.beat = -1),
          (this.done = !0),
          !0);
    }
    *run(e) {
      let t = this.st,
        n = this.def.beats,
        r = n.length - 1,
        i = n[0]?.do === `cine` && n[0].on,
        a = r >= 0 && n[r].do === `cine` && !n[r].on;
      (e > 0 && (t.skipping = !0), i || (yield* this.stage()));
      for (let o = 0; o < n.length; o++) {
        (this.aborted
          ? (t.skipping = !0)
          : o === e && e > 0 && (t.skipping = !1),
          (this.beat = o),
          a && o === r && (yield* this.handBack()));
        try {
          yield* this.beatOf(n[o], o);
        } catch (e) {
          (console.error(
            `Scene beat ${o + 1} (${n[o].do}) failed: the scene ends here.`,
            e,
          ),
            (this.aborted = !0),
            (t.skipping = !0));
        }
        i && o === 0 && (yield* this.stage());
      }
      (a || (yield* this.handBack(), t.cine(!1)),
        (this.beat = -1),
        (this.done = !0));
    }
    *stage() {
      if (this.staged) return;
      this.staged = !0;
      let e = this.st,
        t = this.stagingShows();
      t && (yield* this.fadeOut(KJ.stageFade));
      for (let t of e.npcs)
        Object.assign(t, {
          visible: !1,
          tween: null,
          channel: !1,
          fallen: !1,
          thrustT: -1,
        });
      for (let t of this.def.cast)
        t.id !== `hero` &&
          Object.assign(e.npc(XJ(t.id)), {
            x: t.x,
            y: t.y,
            dir: t.dir ?? 0,
            visible: t.visible ?? !0,
            channel: t.channel ?? !1,
            alpha: 1,
            tween: null,
          });
      let n = this.heroMark();
      if (n) {
        let t = this.drawn();
        ((e.hero = {
          x: n.x,
          y: n.y,
          dir: n.dir,
          moving: !1,
          anim: 0,
          castT: 0,
          flash: 0,
          castFx: null,
          blinkFx: null,
          walk: null,
        }),
          this.snap(t, e.hero));
      }
      t && e.fadeTo(0, KJ.stageFade);
    }
    *handBack() {
      if (this.handedBack) return;
      this.handedBack = !0;
      let e = this.g,
        t = this.st,
        n = this.handBackShows();
      (n && (yield* this.fadeOut(KJ.backOut)),
        this.restore(),
        (n || t.skipping) && ((e.zoom = 1), e.snapCamNow()),
        (n || t.fadeA > 0) &&
          (t.fadeTo(0, KJ.backIn),
          yield t.until(() => t.skipping || t.fadeA <= 0)));
    }
    restore() {
      let e = this.g,
        t = this.st;
      (t.posts(),
        (t.night = null),
        this.spawned && t.removeLocal(!1),
        this.slowed && (e.slowUntil = 0));
      let n = t.hero;
      (n && ((t.hero = null), this.snap(n, e.me)), t.freeCam());
    }
    *fadeOut(e) {
      let t = this.st;
      (t.fadeTo(1, e), yield t.until(() => t.skipping || t.fadeA >= 1));
    }
    heroMark() {
      let e = this.def.cast.find((e) => e.id === `hero`);
      if (e) return { x: e.x, y: e.y, dir: e.dir ?? 0 };
      let t = this.g.me;
      return this.def.beats.some(
        (e) =>
          (e.do === `move` || e.do === `blink` || e.do === `face`) &&
          e.who === `hero`,
      )
        ? { x: t.x, y: t.y, dir: t.dir }
        : null;
    }
    stagingShows() {
      let e = this.st,
        t = this.heroMark();
      if (t && Math.hypot(t.x - this.g.me.x, t.y - this.g.me.y) > KJ.swapNear)
        return !0;
      let n = [this.viewNow()],
        r = new Map(this.def.cast.map((e) => [e.id, e]));
      return e.npcs.some((e) => {
        let t = r.get(e.kind);
        return this.changes(
          e,
          t
            ? { x: t.x, y: t.y, visible: t.visible ?? !0 }
            : { x: e.x, y: e.y, visible: !1 },
          n,
        );
      });
    }
    handBackShows() {
      let e = this.g,
        t = this.st,
        n = e.me;
      if (t.hero && Math.hypot(t.hero.x - n.x, t.hero.y - n.y) > KJ.swapNear)
        return !0;
      let r = this.camNow();
      if (
        Math.hypot(r.x / 16 - n.x, r.y / 16 - n.y) > KJ.anchorReach ||
        this.spawned ||
        t.night !== null
      )
        return !0;
      let i = [
        this.viewAt(r.x, r.y, r.zoom),
        this.viewAt(n.x * 16, n.y * 16 - 8, 1),
      ];
      return t.npcs.some((e) => this.changes(e, t.postOf(e.kind), i));
    }
    changes(e, t, n) {
      let r = (e) =>
          n.some(
            (t) => e.x >= t.x0 && e.x <= t.x1 && e.y >= t.y0 && e.y <= t.y1,
          ),
        i = e.visible && e.alpha > 0.01;
      return i && !t.visible
        ? r(e)
        : !i && t.visible
          ? r(t)
          : i &&
            Math.hypot(t.x - e.x, t.y - e.y) > KJ.swapNear &&
            (r(e) || r(t));
    }
    camNow() {
      let e = this.g;
      return this.st.cam ?? { x: e.cam.x, y: e.cam.y, zoom: e.zoom };
    }
    viewNow() {
      let e = this.camNow();
      return this.viewAt(e.x, e.y, e.zoom);
    }
    viewAt(e, t, n) {
      let r = this.g,
        i = r.viewW / (2 * n * 16),
        a = r.viewH / (2 * n * 16);
      return {
        x0: e / 16 - i - 1,
        x1: e / 16 + i + 1,
        y0: t / 16 - a,
        y1: t / 16 + a + 2,
      };
    }
    drawn() {
      return this.st.hero ?? this.g.me;
    }
    snap(e, t) {
      Math.hypot(t.x - e.x, t.y - e.y) <= KJ.swapNear ||
        this.g.liveMages.snap(
          String(this.g.myId),
          t.x * 16,
          t.y * 16,
          t.dir === 3 ? -1 : 1,
        );
    }
    at(e) {
      if (e === `hero`) {
        let e = this.st.hero?.walk;
        return e ? { x: e.x1, y: e.y1 } : this.drawn();
      }
      let t = this.st.npc(XJ(e));
      return t.tween ? { x: t.tween.x1, y: t.tween.y1 } : { x: t.x, y: t.y };
    }
    *beatOf(e, t) {
      let n = this.g,
        r = this.st;
      switch (e.do) {
        case `cine`:
          r.cine(e.on);
          break;
        case `fade`:
          (r.fadeTo(e.to, e.dur), e.dur > 0 && (yield r.wait_(e.dur)));
          break;
        case `cam`: {
          let i = e.zoom ?? this.camNow().zoom,
            a = qJ(this.def, t, (e) => this.at(e));
          yield r.camTo(
            e.x,
            e.y,
            e.dur,
            JJ(i, e, a, { w: n.viewW, h: n.viewH }),
          );
          break;
        }
        case `say`:
          if (e.who === `voice`)
            yield r.say(`crystal`, e.text, {
              name: e.voice?.name ?? `Someone`,
              title: e.voice?.title ?? ``,
              color: e.voice?.color ?? `#e6d8bc`,
              art: `note:letter`,
            });
          else if (e.who === `hero`)
            yield r.say(`crystal`, e.text, n.quests.heroVoice());
          else {
            let t = e.who === `crystal` ? `crystal` : XJ(e.who);
            yield r.say(t, e.text);
          }
          break;
        case `narrate`:
          yield r.narrate(e.text, e.dur);
          break;
        case `wait`:
          yield r.wait_(e.s);
          break;
        case `move`:
          if (e.who === `hero`) {
            let t = r.hero;
            if (t) {
              let n = { x: t.x, y: t.y };
              (r.walkHero(e.x, e.y, e.dur), t.walk || this.snap(n, t));
            }
          } else
            (r.face(XJ(e.who), e.x, e.y),
              r.moveNpc(XJ(e.who), e.x, e.y, e.dur));
          e.wait && (yield r.wait_(e.dur));
          break;
        case `blink`:
          if (e.who === `hero`) {
            let t = r.hero;
            if (t) {
              let n = { x: t.x, y: t.y };
              (r.blinkHero(e.x, e.y), r.skipping && this.snap(n, t));
            }
          } else r.blinkNpc(XJ(e.who), e.x, e.y);
          break;
        case `face`:
          if (e.who === `hero`) {
            let t = r.hero;
            t && (t.dir = ZJ(t, e.x, e.y));
          } else r.face(XJ(e.who), e.x, e.y);
          break;
        case `show`:
          e.who !== `hero` && (r.npc(XJ(e.who)).visible = e.visible);
          break;
        case `channel`:
          e.who !== `hero` && (r.npc(XJ(e.who)).channel = e.on);
          break;
        case `title`:
          r.showTitle(e.text, e.sub ?? ``, e.dur);
          break;
        case `caption`:
          r.showCaption(e.text, e.sub ?? ``, e.dur);
          break;
        case `banner`:
          r.skipping ||
            (n.banner = {
              title: e.title,
              subtitle: e.sub ?? ``,
              t0: n.real,
              dur: e.dur ?? 3,
              color: e.color ?? `#ffd166`,
            });
          break;
        case `shake`:
          r.skipping || (n.shake = Math.max(n.shake, e.power));
          break;
        case `flash`:
          r.skipping || (n.flash = { color: e.color ?? `#ffffff`, a: e.a });
          break;
        case `slowmo`:
          r.skipping || (n.slowTo(e.scale, e.dur), (this.slowed = !0));
          break;
        case `night`:
          r.night = e.k;
          break;
        case `spawn`:
          if (!Object.hasOwn(Fe, e.kind)) break;
          (r.spawnLocal(e.kind, e.x, e.y), this.spawned++);
          break;
        case `sfx`:
          r.skipping || q.sfx(e.name, e.vol ?? 0.7);
          break;
        default:
          QJ(e);
      }
    }
  },
  eY = [
    {
      id: `a-note-that-shouldnt-be-there`,
      title: `A note that shouldn't be there`,
      when: { x: 229, y: 236, r: 16, after: [`m6-field`], maxLevel: 10 },
      cast: [
        { id: `hero`, x: 225, y: 242 },
        { id: `teodor`, x: 236.5, y: 230.6, dir: 2, channel: !0 },
        { id: `ysolde`, x: 224.5, y: 224.5, dir: 1, channel: !0 },
        { id: `varra`, x: 224.5, y: 239.2, dir: 0, channel: !0 },
        { id: `oriel`, x: 212.5, y: 230.6, dir: 3, channel: !0 },
        { id: `holloway`, x: 226.6, y: 261.2, dir: 0 },
      ],
      beats: [
        { do: `cine`, on: !0 },
        { do: `cam`, x: 230.5, y: 235.3, dur: 1.5, zoom: 1.2 },
        { do: `move`, who: `hero`, x: 231, y: 237, dur: 1.6, wait: !0 },
        { do: `channel`, who: `teodor`, on: !1 },
        { do: `face`, who: `teodor`, x: 231, y: 237 },
        {
          do: `say`,
          who: `teodor`,
          text: `Wait. Do you hear that? East, under the fields. Someone's singing a Storm note into the Chorus, and it isn't one of mine.`,
        },
        {
          do: `say`,
          who: `teodor`,
          text: `I grew up in Thunderspire's halls wanting to sing like her. That's her phrasing, down in the old cisterns. Let me go to her. She'll talk to me.`,
        },
        { do: `cam`, x: 230.5, y: 226.6, dur: 1.2, zoom: 1.2 },
        { do: `channel`, who: `ysolde`, on: !1 },
        { do: `face`, who: `ysolde`, x: 231, y: 237 },
        { do: `face`, who: `teodor`, x: 224.5, y: 224.5 },
        {
          do: `say`,
          who: `ysolde`,
          text: `No. You'll hold your post, Teodor, and sleep when the vigil turns. {name}, go east and find what she left singing down there. Then end it.`,
        },
        { do: `channel`, who: `ysolde`, on: !0 },
        { do: `cam`, x: 253, y: 234, dur: 2.2, zoom: 1 },
        {
          do: `title`,
          text: `The Brimming Cisterns`,
          sub: `Under the Verdant Glade`,
          dur: 3,
        },
        { do: `channel`, who: `teodor`, on: !0 },
        { do: `wait`, s: 2.5 },
        { do: `cine`, on: !1 },
      ],
    },
  ],
  tY = class {
    g;
    scenes;
    auto = !0;
    blocked = null;
    lookedAt = -1 / 0;
    playing = null;
    armed = [];
    retryAt = new Map();
    busyAt = -1 / 0;
    since = 0;
    seenIds = null;
    constructor(e, t = eY) {
      ((this.g = e), (this.scenes = t));
    }
    update(e) {
      let t = this.g;
      if (!t.story) return;
      if ((this.holdsScreen() && (this.busyAt = t.real), this.playing)) {
        this.follow(this.playing);
        return;
      }
      if (
        !this.auto ||
        ((this.since += e), this.since < KJ.checkEvery) ||
        ((this.since = 0), (this.blocked = this.gate()), this.blocked)
      )
        return;
      this.lookedAt = t.real;
      let n = this.due();
      n && this.begin(n, !0);
    }
    gate() {
      let e = this.g,
        t = e.story;
      return e.quests.loaded
        ? t?.done
          ? !e.meDoc || e.meDoc.dead
            ? `fallen`
            : e.room || e.dungeon
              ? `away`
              : this.holdsScreen()
                ? `screen`
                : e.quests.fight
                  ? `fight`
                  : e.onTheRoad()
                    ? `road`
                    : e.inCombat()
                      ? `combat`
                      : this.threat()
                        ? `threat`
                        : e.uiOpen || e.typing()
                          ? `panel`
                          : e.banner
                            ? `banner`
                            : e.real - this.busyAt < KJ.quiet
                              ? `quiet`
                              : e.offerWaiting()
                                ? `party`
                                : null
          : `prologue`
        : `rows`;
    }
    seen(e) {
      return this.seenList().includes(e);
    }
    waiting(e) {
      return Math.max(0, (this.retryAt.get(e) ?? 0) - this.g.real);
    }
    arm(e) {
      return !1;
    }
    playNow(e) {
      return !1;
    }
    holdsScreen() {
      let e = this.g,
        t = e.story;
      return (
        !!e.cine ||
        (!!t &&
          (t.locked || t.busy() || t.chatting || !!t.dialogue || !!t.narration))
      );
    }
    threat() {
      let e = this.g;
      return !ii(e.me.x, e.me.y) && e.threatNear();
    }
    dangers() {
      let e = this.g;
      return {
        combat: e.inCombat(),
        threat: this.threat(),
        dead: !!e.meDoc?.dead,
        road: e.onTheRoad(),
      };
    }
    due() {
      let e = this.g,
        t = {
          level: e.meDoc?.level ?? 1,
          rows: e.quests.rows,
          loaded: e.quests.loaded,
        };
      for (let n of [...this.scenes, ...this.armed])
        if (
          !(this.waiting(n.id) > 0 || this.seen(n.id)) &&
          UJ(n.when, t) &&
          WJ(n.when, e.me.x, e.me.y)
        )
          return n;
      return null;
    }
    begin(e, t) {
      let n = new $J(this.g, e);
      return n.start()
        ? ((this.playing = {
            def: e,
            player: n,
            marks: t,
            held: this.dangers(),
            brokeOff: !1,
            slowUntil: 0,
          }),
          !0)
        : !1;
    }
    follow(e) {
      let t = this.g;
      if ((e.player.dropped() && (e.brokeOff = !0), e.player.done)) {
        ((this.playing = null),
          e.brokeOff
            ? this.retryAt.set(e.def.id, t.real + KJ.retry)
            : e.marks && this.mark(e.def.id),
          t.meDoc?.dead &&
            ((t.barsTarget = 1),
            (t.slowUntil = Math.max(t.slowUntil, e.slowUntil))));
        return;
      }
      let n = this.dangers(),
        r = (t) => n[t] && !e.held[t];
      (!e.brokeOff &&
        (r(`combat`) || r(`threat`) || r(`dead`) || r(`road`)) &&
        ((e.slowUntil = t.slowUntil), e.player.abort(), (e.brokeOff = !0)),
        (e.held = {
          combat: e.held.combat && n.combat,
          threat: e.held.threat && n.threat,
          dead: e.held.dead && n.dead,
          road: e.held.road && n.road,
        }));
    }
    seenList() {
      return (this.seenIds ??= Cl(String(this.g.myId)));
    }
    mark(e) {
      let t = String(this.g.myId);
      ((this.seenIds = El(Cl(t), e, this.seenList())), wl(t, this.seenIds));
    }
  },
  nY = `#120b1a`,
  rY =
    (e) =>
    (t, n, r, i = 1, a = 1) =>
      N(e, t, n, r, i, a);
