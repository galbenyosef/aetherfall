// index-BTsv3a2s 35 — kind
// Lines 27909-28868 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var ZoneClient = class {
  game;
  opts;
  base;
  room;
  ws = null;
  state = `waiting`;
  note = ``;
  stopped = !1;
  started = !1;
  retry = 0;
  retryTimer = null;
  inputTimer = null;
  intentTimer = null;
  lastIntent = { x: 0, y: 0 };
  lastCharging = !1;
  lastSendAt = 0;
  pingTimer = null;
  avoid;
  convexMe = null;
  myEnt = -1;
  ents = new Map();
  self = null;
  devWire = { tick: -1, ack: -1, self: null, walkedMs: 0 };
  seq = 0;
  history = new Map();
  msCarry = 0;
  attacks = new Map();
  pending = { buttons: 0, aimX: 0, aimY: 0, sends: 0, spell: 0, charge: 0 };
  rtt = null;
  drift = 0;
  fxSeq = 0;
  heardSeq = 0;
  fxBatch = [];
  retold = new Set();
  reqSeq = 0;
  requests = new Map();
  constructor(e, t) {
    ((this.game = e),
      (this.opts = t),
      (this.base = t.url ? normalizeZoneUrl(t.url) : ``),
      (this.room = t.room ?? (t.seat ? `` : `marizon-1`)),
      e.setFx([]));
  }
  start() {
    ((this.started = !0), this.maybeConnect());
  }
  stop() {
    ((this.stopped = !0),
      this.failRequests(`You left the realm.`),
      (this.state = `stopped`),
      this.clearTimers(),
      this.retryTimer && clearTimeout(this.retryTimer),
      this.ws?.close(1e3, `bye`),
      (this.ws = null));
  }
  get roomId() {
    return this.room;
  }
  status() {
    let e = 0,
      t = 0;
    for (let n of this.ents.values())
      n.kind === 0 ? e++ : n.flags & xd.dead || t++;
    return {
      state: this.state,
      url: this.base,
      room: this.room,
      rtt: this.rtt,
      players: e,
      monsters: t,
      drift: this.drift,
      note: this.note,
    };
  }
  setConvexPlayers(e) {
    let t = e.find((e) => e._id === this.opts.myId);
    if ((t && (this.convexMe = t), this.state !== `online`)) {
      (this.convexMe && this.game.setPlayers([this.convexMe]),
        this.maybeConnect());
      return;
    }
    this.pushPlayers();
  }
  cast(e, t, n, r = 0) {
    if (!this.convexMe) return;
    let i = e === `blink` ? -1 : be.indexOf(e);
    if (e !== `blink` && i < 0) return;
    let a = e === `blink` ? bd.blink : bd.cast;
    ((this.pending = {
      buttons: this.pending.buttons | a,
      aimX: t,
      aimY: n,
      sends: 2,
      spell: i >= 0 ? i + 1 : this.pending.spell,
      charge: e === `blink` ? r : this.pending.charge,
    }),
      this.state === `online` &&
        this.sendInput(e === `blink` ? { x: t, y: n } : void 0));
  }
  maybeConnect() {
    !this.started ||
      this.stopped ||
      !this.convexMe ||
      this.ws ||
      this.retryTimer ||
      this.state === `connecting` ||
      this.connect();
  }
  async connect(e) {
    let t = this.convexMe;
    if (t && !this.stopped) {
      ((this.state = `connecting`), (this.note = ``));
      try {
        let n = e;
        if (!n && this.opts.seat) {
          let e = await this.opts.seat(this.avoid);
          ((this.base = normalizeZoneUrl(e.url)), (this.room = e.room), (n = e.ticket));
        }
        if (
          ((n ??= await (this.opts.ticket ?? fetchDevTicket(this.base))(this.room, t)),
          this.stopped)
        )
          return;
        let r =
            this.base.replace(/^http/, `ws`) +
            `/v1/rooms/${encodeURIComponent(this.room)}/ws?t=${encodeURIComponent(n)}`,
          i = new WebSocket(r);
        ((i.binaryType = `arraybuffer`),
          (this.ws = i),
          (i.onmessage = (e) => {
            e.data instanceof ArrayBuffer
              ? this.onMessage(e.data)
              : typeof e.data == `string` && this.onText(e.data);
          }),
          (i.onclose = (e) => this.onClose(i, e.code, e.reason)),
          (i.onerror = () => {
            ((this.note = `connection error`),
              setTimeout(() => {
                this.ws === i &&
                  i.readyState !== 1 &&
                  this.onClose(i, 1006, ``);
              }, 1e3));
          }));
      } catch (e) {
        ((this.note = describeTransportError(e)), (this.state = `offline`), this.scheduleRetry());
      }
    }
  }
  onClose(e, t, n) {
    e === this.ws &&
      ((this.ws = null),
      this.clearTimers(),
      this.resetWorld(),
      !this.stopped &&
        ((this.state = `offline`),
        n && (this.note = n),
        t !== 4001 && this.note !== `kicked` && this.scheduleRetry()));
  }
  scheduleRetry() {
    if (this.stopped || this.retryTimer) return;
    let e = Math.min(1e4, 1e3 * 2 ** this.retry++);
    this.retryTimer = setTimeout(() => {
      ((this.retryTimer = null), this.maybeConnect());
    }, e);
  }
  clearTimers() {
    (this.inputTimer && clearInterval(this.inputTimer),
      this.intentTimer && clearInterval(this.intentTimer),
      this.pingTimer && clearInterval(this.pingTimer),
      (this.inputTimer = this.intentTimer = this.pingTimer = null));
  }
  request(e, t = {}) {
    let n = this.ws;
    if (!n || n.readyState !== 1 || this.state !== `online`)
      return Promise.reject(
        new ZoneError(`Not connected to the realm right now. Try again in a moment.`),
      );
    let r = ++this.reqSeq;
    return new Promise((i, a) => {
      let o = setTimeout(() => {
        (this.requests.delete(r),
          a(new ZoneError(`The realm server didn't answer.`, !1, !0)));
      }, ZONE_REQUEST_TIMEOUT);
      (this.requests.set(r, { resolve: i, reject: a, timer: o }),
        n.send(JSON.stringify({ ...t, id: r, op: e })));
    });
  }
  onText(e) {
    let t;
    try {
      t = JSON.parse(e);
    } catch {
      return;
    }
    if (t.push) {
      this.opts.onPush?.(t);
      return;
    }
    let n = t.id === void 0 ? void 0 : this.requests.get(t.id);
    n &&
      (this.requests.delete(t.id),
      clearTimeout(n.timer),
      t.ok
        ? n.resolve(t.result ?? null)
        : n.reject(new ZoneError(t.error ?? `The realm server refused.`, !0)));
  }
  failRequests(e) {
    for (let t of this.requests.values())
      (clearTimeout(t.timer), t.reject(new ZoneError(e, !1, !0)));
    this.requests.clear();
  }
  resetWorld() {
    (this.failRequests(
      `The connection to the realm was lost. Try again in a moment.`,
    ),
      this.game.zoneHearth?.({ state: `broken` }));
    for (let e of this.ents.values())
      e.kind !== 0 && this.game.monsters.delete(`zm:${e.id}`);
    (this.ents.clear(),
      this.attacks.clear(),
      (this.myEnt = -1),
      this.history.clear(),
      this.convexMe &&
        this.game.setPlayers([this.mergedMe() ?? this.convexMe]));
  }
  send(e) {
    this.ws?.readyState === 1 && this.ws.send(e);
  }
  onMessage(e) {
    let t = zd(e);
    if (t)
      switch (t.t) {
        case `welcome`:
          if (
            ((this.myEnt = t.entityId),
            (this.game.netSteps.length = 0),
            (this.msCarry = 0),
            (this.state = `online`),
            (this.retry = 0),
            (this.avoid = void 0),
            (this.note =
              t.mapVersion === Lr
                ? ``
                : `map v${t.mapVersion} on the host, v${Lr} here: rebake the world`),
            this.opts.onPush?.({ push: `joined`, room: t.roomId || this.room }),
            t.cooldowns)
          ) {
            let e = { blink: t.cooldowns.blinkMs / 1e3 };
            for (let n of t.cooldowns.spells) {
              let t = be[n.spell - 1];
              t && (e[t] = n.ms / 1e3);
            }
            this.game.zoneCooldowns?.(e);
          }
          this.startLoops();
          break;
        case `snapshot`:
          this.onSnapshot(t);
          break;
        case `pong`:
          this.rtt = Math.max(
            0,
            ((performance.now() >>> 0) - t.clientMs) >>> 0,
          );
          break;
        case `self`: {
          let e = this.self?.xp ?? t.xpGained;
          ((this.self = {
            hp: t.hp,
            maxHp: t.maxHp,
            level: t.level,
            xp: t.xpGained,
          }),
            t.xpGained > e &&
              this.game.floater(
                this.game.me.x * sf,
                this.game.me.y * sf - 38,
                `+${t.xpGained - e} XP`,
                `#c49bff`,
                !1,
              ),
            this.game.zoneSelf?.({
              mana: t.mana,
              maxMana: t.maxMana,
              speed: t.speed,
              stamina: t.stamina,
              maxStamina: t.maxStamina,
            }));
          break;
        }
        case `attack`:
          this.onAttack(t);
          break;
        case `notice`:
          (t.code !== Od.word &&
            (this.note = t.code === Od.kicked ? `kicked` : t.text),
            t.code === Od.roomFull && (this.avoid = this.room),
            this.opts.onNotice?.(t.text));
          break;
        case `transfer`: {
          let e = this.ws;
          ((this.ws = null),
            e?.close(1e3, `transfer`),
            this.clearTimers(),
            this.resetWorld(),
            t.target && (this.room = t.target),
            t.url && (this.base = normalizeZoneUrl(t.url)),
            (this.state = `offline`),
            setTimeout(() => void this.connect(t.ticket || void 0), 300));
          break;
        }
        case `heard`:
          this.onHeard(t);
      }
  }
  onHeard(e) {
    let t = Date.now();
    this.opts.onPush?.({
      push: `chat`,
      lines: [
        {
          _id: `near:${t.toString(36)}:${++this.heardSeq}`,
          t,
          playerId: this.idOf(e.speaker),
          name: e.name || `Someone`,
          school: k[e.school] ?? `pyro`,
          text: e.text,
          system: !1,
          near: !0,
        },
      ],
    });
  }
  startLoops() {
    (this.clearTimers(),
      (this.inputTimer = setInterval(() => {
        performance.now() - this.lastSendAt >= 45 && this.sendInput();
      }, cf / 2)),
      (this.intentTimer = setInterval(() => {
        let e = this.game.moveIntent;
        (e.x !== this.lastIntent.x ||
          e.y !== this.lastIntent.y ||
          !!this.game.blinkCharging?.() !== this.lastCharging) &&
          performance.now() - this.lastSendAt >= lf &&
          this.sendInput();
      }, lf)),
      (this.pingTimer = setInterval(
        () => this.send(Id(performance.now() >>> 0, this.rtt ?? 0)),
        uf,
      )),
      this.send(Id(performance.now() >>> 0, this.rtt ?? 0)));
  }
  sendInput(e) {
    let t = this.game,
      n = t.netSteps.splice(0),
      r = this.pending,
      i = !!t.blinkCharging?.(),
      a = Zd(i, r),
      o = !!t.guarding?.(),
      s =
        r.sends > 0
          ? { x: r.aimX, y: r.aimY }
          : o && t.guardAim
            ? t.guardAim()
            : t.mouseWorld(),
      c = Math.max(1, n.length);
    for (let i = 0; i < c; i++) {
      let l = n[i],
        u = i === c - 1,
        d = 0;
      if (l) {
        let e = l.ms + this.msCarry;
        ((d = Math.max(0, Math.min(255, Math.round(e)))),
          (this.msCarry = e - d));
      }
      ((this.seq = (this.seq + 1) & 65535),
        t.inDungeon?.() ||
          this.history.set(
            this.seq,
            u ? (e ?? { x: t.me.x, y: t.me.y }) : { x: l.x, y: l.y },
          ),
        this.history.size > 120 &&
          this.history.delete(this.history.keys().next().value));
      let f = l ? !!l.guard : o,
        p =
          (l?.sprint ? bd.sprint : 0) |
          (f ? bd.block : 0) |
          (u && r.sends > 0 ? r.buttons : 0) |
          a;
      this.send(
        Fd({
          seq: this.seq,
          dx: l?.dx ?? 0,
          dy: l?.dy ?? 0,
          ms: d,
          aimX: s.x,
          aimY: s.y,
          buttons: p,
          spell: u && r.sends > 0 ? r.spell : 0,
          charge: u && r.sends > 0 ? r.charge : 0,
        }),
      );
    }
    ((this.lastIntent = { x: t.moveIntent.x, y: t.moveIntent.y }),
      (this.lastCharging = i),
      (this.lastSendAt = performance.now()),
      r.sends > 0 &&
        --r.sends === 0 &&
        ((r.buttons = 0), (r.spell = 0), (r.charge = 0)));
  }
  onAttack(e) {
    let t = of[e.kind - 1];
    if (!t) return;
    let n = performance.now();
    for (let [e, t] of this.attacks) t.until < n && this.attacks.delete(e);
    let r = `za:${++this.fxSeq}`;
    this.attacks.set(e.id, {
      fx: r,
      kind: t,
      index: e.index,
      until: n + e.windupMs + 8e3,
    });
    let i = {
      _id: r,
      _creationTime: Date.now(),
      kind: `matk`,
      spell: t,
      value: e.index,
      monsterId: `zm:${e.monster}`,
      x: e.ox,
      y: e.oy,
      tx: e.tx,
      ty: e.ty,
      delay: e.windupMs,
      points: e.points.length ? e.points : void 0,
    };
    this.game.setFx([i]);
  }
  onSnapshot(e) {
    let t = new Map();
    for (let n of e.entities) {
      let e = this.ents.get(n.id);
      (e && t.set(n.id, { x: e.x, y: e.y }), this.apply(n));
    }
    this.reconcile(e.ackSeq);
    let n = new Map();
    for (let t of e.events)
      (t.kind === wd.hit || t.kind === wd.crit) &&
        n.set(t.a, [...(n.get(t.a) ?? []), t.b]);
    let r = new Set(e.removed);
    for (let i of e.events) this.event(i, t, n, r);
    for (let t of e.removed) {
      let e = this.ents.get(t);
      (e && e.kind !== 0 && this.game.monsters.delete(`zm:${t}`),
        this.ents.delete(t));
    }
    (this.pushPlayers(),
      this.pushMonsters(e.entities),
      this.fxBatch.length &&
        (this.game.setFx(this.fxBatch.reverse()), (this.fxBatch = [])));
  }
  apply(e) {
    let t = this.ents.get(e.id);
    if (e.mask & Sd.spawn || !t) {
      let n = e.player;
      ((t = {
        id: e.id,
        kind: e.kind ?? t?.kind ?? 0,
        school: (n ? k[n.school] : void 0) ?? t?.school ?? `pyro`,
        level: n?.level ?? t?.level ?? 1,
        name: n?.name ?? t?.name ?? ``,
        hero: n ? (n.hero === Cd.woman ? `f` : `m`) : t?.hero,
        lvl: e.monster?.level ?? t?.lvl,
        maxHp: e.monster?.maxHp ?? t?.maxHp,
        x: t?.x ?? 0,
        y: t?.y ?? 0,
        hp: t?.hp ?? 255,
        flags: t?.flags ?? 0,
        dir: t?.dir ?? mf.down,
      }),
        this.ents.set(e.id, t));
    }
    if (e.x !== void 0 && e.y !== void 0) {
      let n = e.x - t.x,
        r = e.y - t.y;
      ((Math.abs(n) > 0.01 || Math.abs(r) > 0.01) &&
        (t.dir =
          Math.abs(n) >= Math.abs(r)
            ? n > 0
              ? mf.right
              : mf.left
            : r > 0
              ? mf.down
              : mf.up),
        (t.x = e.x),
        (t.y = e.y));
    }
    if (
      (e.hp !== void 0 && (t.hp = e.hp),
      e.flags !== void 0 && (t.flags = e.flags),
      e.look)
    ) {
      let n = (e) => af(e?.base ? ka[e.base - 1] : void 0, e);
      t.look = {
        hat: af(`hat`, e.look.hat),
        robe: af(`robe`, e.look.robe),
        main: n(e.look.main),
        off: n(e.look.off),
      };
    }
    if (e.rite) {
      let n = Ll[e.rite.altar - 1];
      n && (t.rite = { altar: n });
    }
    t.kind !== 0 && t.flags & xd.singing
      ? (t.song ??= Date.now())
      : (t.song = void 0);
  }
  reconcile(e) {
    let t = this.ents.get(this.myEnt);
    if (!t) return;
    let n = this.game;
    if (n.inDungeon?.() || n.inDoorway?.()) {
      this.history.clear();
      return;
    }
    let r = () => {
      for (let e of n.netSteps) ((e.x += t.x - n.me.x), (e.y += t.y - n.me.y));
      ((n.me.x = t.x), (n.me.y = t.y), n.snapCamNow(), this.history.clear());
    };
    if (t.flags & xd.dead) {
      ((n.me.x = t.x), (n.me.y = t.y));
      return;
    }
    let i = this.history.get(e);
    if (!i) {
      Math.hypot(t.x - n.me.x, t.y - n.me.y) > pf && r();
      return;
    }
    let a = t.x - i.x,
      o = t.y - i.y,
      s = Math.hypot(a, o);
    if (((this.drift = s), s > pf)) return r();
    if (s <= df) return;
    let c = s > ff ? 0.5 : 0.2,
      l = a * c,
      u = o * c;
    ((n.me.x += l), (n.me.y += u));
    for (let [t, n] of this.history)
      ((t - e) & 65535) < 32768 &&
        this.history.set(t, { x: n.x + l, y: n.y + u });
    for (let e of n.netSteps) ((e.x += l), (e.y += u));
  }
  mergedMe() {
    let e = this.convexMe,
      t = this.ents.get(this.myEnt);
    if (!e || !t) return e;
    let n = this.self,
      r = n?.maxHp || e.maxHp;
    return {
      ...e,
      x: t.x,
      y: t.y,
      hp: n ? n.hp : Math.round((t.hp / 255) * r),
      maxHp: r,
      level: n?.level || e.level,
      dead: !!(t.flags & xd.dead),
      moving: !!(t.flags & xd.moving),
      hostile: !!(t.flags & xd.hostile),
      outlaw: !!(t.flags & xd.outlaw),
      partied: !!(t.flags & xd.partied),
      veiled: !!(t.flags & xd.veiled),
    };
  }
  pushPlayers() {
    let e = [],
      t = this.mergedMe();
    t && e.push(t);
    let n = Date.now();
    for (let t of this.ents.values())
      t.kind === 0 &&
        t.id !== this.myEnt &&
        e.push({
          _id: `z:${t.id}`,
          _creationTime: 0,
          name: t.name,
          school: t.school,
          x: t.x,
          y: t.y,
          dir: t.dir,
          moving: !!(t.flags & xd.moving),
          sprinting: !!(t.flags & xd.sprinting),
          blocking: !!(t.flags & xd.blocking),
          veiled: !!(t.flags & xd.veiled),
          hp: t.hp,
          maxHp: 255,
          level: t.level,
          xp: 0,
          kills: 0,
          dead: !!(t.flags & xd.dead),
          online: !0,
          lastSeen: n,
          lastHurtAt: 0,
          look: t.look,
          hero: t.hero,
          hostile: !!(t.flags & xd.hostile),
          outlaw: !!(t.flags & xd.outlaw),
          partied: !!(t.flags & xd.partied),
        });
    this.game.setPlayers(e);
  }
  pushMonsters(e) {
    let t = [],
      n = new Set([...e.map((e) => e.id), ...this.retold]);
    this.retold.clear();
    for (let e of n) {
      let n = this.ents.get(e);
      if (!n || n.kind === 0) continue;
      let r = of[n.kind - 1] ?? `slime`,
        i = Fe[r],
        a = n.maxHp || i?.hp || 100;
      t.push({
        _id: `zm:${n.id}`,
        _creationTime: 0,
        kind: r,
        x: n.x,
        y: n.y,
        spawnX: n.x,
        spawnY: n.y,
        hp: Math.round((n.hp / 255) * a),
        maxHp: a,
        dead: !!(n.flags & xd.dead),
        respawnAt: 0,
        lastAttackAt: 0,
        facing: n.flags & xd.facingLeft ? -1 : 1,
        lvl: n.lvl || i?.level,
        altar: n.rite?.altar,
        latched: n.rite ? !!(n.flags & xd.latched) : void 0,
        song: n.song,
        stagger:
          n.flags & xd.staggered
            ? Math.max(n.staggered ?? 0, Date.now() + 400)
            : void 0,
      });
    }
    t.length && this.game.setMonsters(t);
  }
  idOf(e) {
    if (e === this.myEnt) return String(this.opts.myId);
    let t = this.ents.get(e);
    return t && t.kind !== 0 ? `zm:${e}` : `z:${e}`;
  }
  effect(e) {
    this.game.setFx([
      { _id: `zfx:${++this.fxSeq}`, _creationTime: Date.now(), ...e },
    ]);
  }
  hearth(e) {
    this.game.zoneHearth?.(e);
  }
  dungeonPaid(e) {
    this.game.zoneDungeonPaid?.(e);
  }
  dungeonFx(e, t) {
    e === this.room && this.game.zoneDungeonFx?.(t);
  }
  folk(e) {
    this.game.zoneFolk?.(e);
  }
  folkLine(e) {
    this.game.zoneFolkLine?.(e);
  }
  folkBodies(e) {
    this.game.zoneFolkBodies?.(e);
  }
  flushInput() {
    this.state === `online` && this.sendInput();
  }
  fx(e) {
    this.fxBatch.push({
      _id: `zfx:${++this.fxSeq}`,
      _creationTime: Date.now(),
      ...e,
    });
  }
  event(e, t, n, r) {
    let i = this.ents.get(e.a),
      a = this.ents.get(e.b),
      o = this.game;
    switch (e.kind) {
      case wd.cast: {
        if (!i) {
          let t = o.zoneFolkAt?.(e.a),
            n = ye[e.b & 31];
          if (!t || !n) return;
          let r = Ld(e.value),
            i = (e.b >> 5) / 16,
            a = t.x + Math.cos(r) * i,
            s = t.y + Math.sin(r) * i;
          (this.fx({
            kind: `cast`,
            school: `paladin`,
            spell: n.id,
            x: t.x,
            y: t.y - 0.6,
            tx: a,
            ty: s,
          }),
            o.zoneFolkCast?.(e.a, n.id, a, s));
          return;
        }
        if (e.a === this.myEnt || i.kind !== 0) return;
        let t = ye[e.b & 31];
        if (!t) return;
        let r = Ld(e.value),
          a = (e.b >> 5) / 16,
          s = i.x + Math.cos(r) * a,
          c = i.y + Math.sin(r) * a,
          l = {
            kind: `cast`,
            playerId: this.idOf(e.a),
            school: i.school,
            spell: t.id,
            x: i.x,
            y: i.y - 0.6,
            tx: s,
            ty: c,
          };
        (t.kind === `bolt` && (l.ty = c - 0.6),
          t.kind === `drain` && (l.ty = c - 0.4),
          t.kind === `chain` &&
            (l.points = (n.get(e.a) ?? [])
              .map((e) => this.ents.get(e))
              .filter((e) => !!e)
              .map((e) => ({ x: e.x, y: e.y - 0.4 }))),
          this.fx(l));
        return;
      }
      case wd.blink: {
        if (!i || e.a === this.myEnt) return;
        let n = t.get(e.a) ?? i;
        this.fx({
          kind: `blink`,
          playerId: this.idOf(e.a),
          school: i.school,
          x: n.x,
          y: n.y,
          tx: i.x,
          ty: i.y,
        });
        return;
      }
      case wd.hit:
      case wd.crit: {
        let t = e.kind === wd.crit;
        if (!i && o.zoneFolkAt?.(e.a)) {
          let t = e.b === this.myEnt ? o.me : a;
          t && o.zoneFolkStruck?.(e.a, t.x, t.y);
        }
        if (e.b === this.myEnt && i && i.kind === 0) {
          o.zonePvpHit?.(i.name, e.value, t);
          return;
        }
        if (e.b === this.myEnt && !i && o.zoneFolkAt?.(e.a)) {
          o.zoneFolkHit?.(e.value, t);
          return;
        }
        let n = e.a === this.myEnt && !a ? o.zoneFolkAt?.(e.b) : null;
        if (n) {
          (o.floater(
            n.x * sf + (Math.random() - 0.5) * 10,
            n.y * sf - 26,
            t ? `${e.value}!` : `${e.value}`,
            t ? `#ffd166` : `#ffb0a0`,
            t,
          ),
            o.zoneHit?.(t));
          return;
        }
        if (e.a !== this.myEnt || !a) return;
        (o.floater(
          a.x * sf + (Math.random() - 0.5) * 10,
          a.y * sf - 26,
          t ? `${e.value}!` : `${e.value}`,
          t ? `#ffd166` : a.kind === 0 ? `#ffb0a0` : `#ffffff`,
          t,
        ),
          o.zoneHit?.(t));
        return;
      }
      case wd.struck: {
        let t = this.attacks.get(e.b);
        e.a === this.myEnt
          ? o.zoneStruck?.(t?.fx, t?.kind ?? ``, t?.index ?? 0, e.value)
          : i &&
            this.fx({
              kind: `pstruck`,
              playerId: this.idOf(e.a),
              spell: t?.kind,
              x: i.x,
              y: i.y,
              value: e.value,
            });
        return;
      }
      case wd.block: {
        let t = this.attacks.get(e.b);
        e.a === this.myEnt
          ? o.zoneBlocked?.(t?.fx, e.value)
          : i &&
            this.fx({
              kind: `pblock`,
              playerId: this.idOf(e.a),
              x: i.x,
              y: i.y,
            });
        return;
      }
      case wd.spawn: {
        let t = of[e.b - 1];
        t &&
          this.fx({
            kind: `mspawn`,
            spell: t,
            x: i?.x ?? -1e3,
            y: i?.y ?? -1e3,
          });
        return;
      }
      case wd.sink:
        return;
      case wd.attack:
        if (!i || !a) return;
        this.fx({
          kind: `mhit`,
          monsterId: this.idOf(e.a),
          playerId: this.idOf(e.b),
          spell: of[i.kind - 1],
          x: i.x,
          y: i.y,
          tx: a.x,
          ty: a.y,
          value: e.value,
        });
        return;
      case wd.death:
        (a &&
          a.kind === 0 &&
          e.b !== this.myEnt &&
          this.fx({
            kind: `pdeath`,
            playerId: this.idOf(e.b),
            school: a.school,
            x: a.x,
            y: a.y,
          }),
          a &&
            a.kind !== 0 &&
            e.a === this.myEnt &&
            o.zoneKill?.(of[a.kind - 1] ?? ``),
          e.b === this.myEnt &&
            i &&
            i.kind === 0 &&
            e.a !== this.myEnt &&
            o.zoneSlainBy?.(i.name),
          a &&
            a.kind === 0 &&
            e.a === this.myEnt &&
            e.b !== this.myEnt &&
            o.zoneSlew?.(a.name));
        return;
      case wd.rise:
        i &&
          e.a !== this.myEnt &&
          this.fx({
            kind: `respawn`,
            playerId: this.idOf(e.a),
            school: i.school,
            x: i.x,
            y: i.y,
          });
        return;
      case wd.level:
        this.fx({
          kind: `levelup`,
          playerId: this.idOf(e.a),
          x: i?.x ?? 0,
          y: i?.y ?? 0,
          value: e.value,
        });
        return;
      case wd.altHit: {
        let t = Ll[e.b - 1];
        if (!i || !t) return;
        let n = pu(t);
        this.fx({
          kind: `althit`,
          spell: of[i.kind - 1],
          monsterId: this.idOf(e.a),
          x: i.x,
          y: i.y,
          tx: n.x,
          ty: n.y,
          delay: e.value,
        });
        return;
      }
      case wd.song:
        if (!i) return;
        ((e.b === Ed.begun || e.b === Ed.sung) && (i.song = Date.now()),
          e.b === Ed.broken &&
            ((i.song = void 0),
            (i.staggered = Date.now() + Gl.staggerSeconds * 1e3),
            this.fx({ kind: `songbreak`, spell: `cantor`, x: i.x, y: i.y })),
          e.b === Ed.called &&
            this.fx({
              kind: `rift`,
              spell: i.rite?.altar,
              x: i.x,
              y: i.y + 0.4,
              value: -1,
            }),
          this.retold.add(e.a));
        return;
      case wd.ammo: {
        let t = Na[e.b - 1];
        t && e.a !== this.myEnt && o.zoneAmmo?.(this.idOf(e.a), t);
        return;
      }
      case wd.veil:
        e.a === this.myEnt &&
          o.zoneUnveiled?.(e.b === Td.torn ? `torn` : `broke`);
        return;
      case wd.break:
        i && o.zoneBroken?.(this.idOf(e.a));
        return;
      case wd.chan:
        if (!i) return;
        o.zoneChan?.(
          this.idOf(e.a),
          e.value,
          e.b === Dd.broken ? `broken` : e.b === Dd.done ? `done` : `begun`,
        );
        return;
      case wd.road: {
        if (!i || e.a === this.myEnt || i.kind !== 0) return;
        let t = r.has(e.a) ? `depart` : `arrive`;
        this.fx({
          kind: t,
          playerId: this.idOf(e.a),
          school: i.school,
          x: i.x,
          y: i.y,
        });
        return;
      }
    }
  }
};
