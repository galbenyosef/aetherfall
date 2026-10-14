// assets__index-BTsv3a2s 175 — math
// Lines 100585-104152 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var Gae = class e {
  g;
  static floorSource = null;
  run;
  f;
  mobs = new Map();
  tele = [];
  zones = [];
  shots = [];
  beams = [];
  lobs = [];
  fx = new Kk();
  walkers = [];
  boss = null;
  bosses = [];
  bark = null;
  cleared = !1;
  over = !1;
  outside;
  ground = [null, null, null, null];
  paintQ = [];
  blocked;
  flow;
  flowFrom = -1;
  flowT = 0;
  home;
  seq = 0;
  time = 0;
  channel = null;
  target = null;
  hurtQ = 0;
  hurtT = 0;
  invuln = 0;
  ice = 0;
  wardT = 0;
  chill = { stacks: 0, until: 0, frozen: 0 };
  riseAt;
  busy = !1;
  stairMsgT = 0;
  lavaLights = [];
  sconces = [];
  wokeFx = 0;
  startedReal;
  clearedLoot = [];
  clearNote = { note: null, notes: 0, story: !1 };
  parting = null;
  tide = 0;
  tideSurges = 0;
  surgeN = 0;
  hostAffixes = new Map();
  hostRisers = new Map();
  hostMobs = new Map();
  hostHeat = new Map();
  timers = [];
  offerSeen = ``;
  constructor(e, t) {
    ((this.g = e),
      (this.run = {
        ...t,
        killed: [...t.killed],
        bosses: [...t.bosses],
        opened: [...t.opened],
        shards: { ...t.shards },
        freed: [...t.freed],
        lost: [...t.lost],
        names: [...t.names],
        echoes: [...(t.echoes ?? [])],
        offer: t.offer ?? null,
        owed: t.owed ?? 0,
        floorAt: t.floorAt ?? t.startedAt,
        called: t.called ?? 0,
        surged: [...(t.surged ?? [])],
      }));
    let n = $o[t.dungeon];
    ((this.outside = t.hosted
      ? { x: n.x, y: n.y + 1 }
      : { x: e.meDoc?.x ?? e.me.x, y: e.meDoc?.y ?? e.me.y }),
      (this.riseAt = { x: 0, y: 0 }),
      (this.startedReal = e.real - (Date.now() - t.startedAt) / 1e3),
      this.load(t.floor));
  }
  get d() {
    return $o[this.run.dungeon];
  }
  get hosted() {
    return !!this.run.hosted;
  }
  get dark() {
    return this.d.dark;
  }
  sync(e) {
    let t = this.hosted && e.floor === this.run.floor,
      n = t ? e.opened.filter((e) => !this.run.opened.includes(e)) : [],
      r = t ? e.freed.filter((e) => !this.run.freed.includes(e)) : [];
    ((this.run.ember = e.ember), (this.run.shards = { ...e.shards }));
    for (let t of e.opened)
      this.run.opened.includes(t) || this.run.opened.push(t);
    for (let t of e.bosses)
      this.run.bosses.includes(t) || this.run.bosses.push(t);
    for (let t of e.freed) this.run.freed.includes(t) || this.run.freed.push(t);
    for (let t of e.lost) this.run.lost.includes(t) || this.run.lost.push(t);
    ((this.run.names = [...e.names]), (this.run.xp = e.xp));
    let i = this.hosted && e.rises > this.run.rises;
    ((this.run.rises = e.rises), i && this.risen());
    let a = e.echoes ?? [],
      o = a.join() !== this.run.echoes.join();
    if (
      ((this.run.echoes = [...a]),
      (this.run.offer = e.offer ?? null),
      (this.run.owed = e.owed ?? 0),
      o && this.g.refreshMods(),
      this.noticeOffer(),
      this.hosted && e.floor !== this.run.floor)
    ) {
      ((this.run.killed = [...e.killed]),
        (this.run.floorAt = e.floorAt ?? Date.now()),
        (this.run.called = e.called ?? 0),
        (this.run.surged = [...(e.surged ?? [])]),
        this.load(e.floor));
      return;
    }
    if (e.floor === this.run.floor)
      for (let t of e.killed)
        this.run.killed.includes(t) || this.run.killed.push(t);
    (n.length || r.length) && this.hostOpened(n, r, e.names);
  }
  hostOpened(e, t, n) {
    let r = this.g,
      i = this.f;
    for (let t of i.props) {
      let n = `${t.x},${t.y}`;
      (t.kind === `pylon` &&
        e.includes(ks(this.run.floor, `pylon`, n)) &&
        r.floater(
          (t.x + 0.5) * Z,
          t.y * Z - 20,
          `The lamp goes out`,
          Eo[t.tone ?? `ember`],
          !0,
        ),
        t.kind === ms.crystal &&
          e.includes(ks(this.run.floor, `crystal`, n)) &&
          (r.particles.burst(
            (t.x + 0.5) * Z,
            (t.y + 0.95) * Z - 20,
            60,
            [`#b01a2a`, `#ffffff`, `#5a0a1a`, `#e0484e`],
            110,
          ),
          (r.shake = Math.max(r.shake, 5)),
          q.sfx(`boom`, 0.6)));
    }
    if (!t.length) return;
    let a = ys(i)
      .filter((e) => t.includes(e.id))
      .map((e) => ({
        x: e.x + 0.5,
        y: e.y + (e.how === `shackle` ? 1.4 : 0.9),
      }));
    this.cheer(n.slice(Math.max(0, n.length - t.length)), a);
  }
  isOpen(e, t) {
    return this.run.opened.includes(ks(this.run.floor, e, t));
  }
  load(t) {
    let n = this.g;
    for (let e of [...n.monsters.keys()])
      e.startsWith(`d:`) && n.monsters.delete(e);
    (this.mobs.clear(),
      this.hostAffixes.clear(),
      this.hostRisers.clear(),
      this.hostMobs.clear(),
      this.hostHeat.clear(),
      (this.tele = []),
      (this.zones = []),
      (this.shots = []),
      (this.beams = []),
      (this.lobs = []),
      this.fx.clear(),
      (this.walkers = []),
      (this.boss = null),
      (this.bosses = []),
      (this.channel = null),
      (this.bark = null),
      (this.timers = []),
      (this.run.floor = t),
      (this.tide = Math.max(0, (Date.now() - this.run.floorAt) / 1e3)),
      (this.tideSurges = Math.floor(this.tide / this.surgeEvery())),
      (this.surgeN = Math.max(
        this.tideSurges + this.run.called,
        ...this.run.surged.map((e) => Number(e.split(`:`)[0]) + 1),
      )));
    let r =
      e.floorSource?.(this.run, t) ??
      gs(this.run.dungeon, t, this.run.seed, {
        players: Math.max(1, this.run.players ?? 1),
        diff: this.run.diff,
      });
    ((this.f = r), (this.blocked = new Uint8Array(r.w * r.h)));
    for (let e of r.props)
      if (e.blocks)
        for (let t = 0; t < (e.h ?? 1); t++)
          for (let n = 0; n < (e.w ?? 1); n++) {
            let i = e.x + n,
              a = e.y - t;
            i >= 0 &&
              a >= 0 &&
              i < r.w &&
              a < r.h &&
              (this.blocked[a * r.w + i] = 1);
          }
    if (
      ((this.flow = new Int16Array(r.w * r.h)),
      (this.flowFrom = -1),
      (this.home = this.bfs(r.entry.x, r.entry.y)),
      (this.sconces = r.props
        .filter((e) => e.kind === `sconce`)
        .map((e) => ({ x: e.x + 0.5, y: e.y + 1, lit: !0 }))),
      (this.lavaLights = []),
      r.theme === `ember`)
    )
      for (let e = 0; e < r.h; e++)
        for (let t = 0; t < r.w; t++)
          r.tiles[e * r.w + t] === Ao.DEEP &&
            (t + e) % 3 == 0 &&
            this.lavaLights.push({ x: t, y: e });
    ((this.ground = [Nee(r, 0), null, null, null]), (this.paintQ = []));
    for (let e = 1; e < 4; e++)
      for (let t = 0; t < r.h; t += 13)
        for (let n = 0; n < r.w; n += 16)
          this.paintQ.push({
            phase: e,
            x: n,
            y: t,
            w: Math.min(16, r.w - n),
            h: Math.min(13, r.h - t),
          });
    this.hosted ||
      r.spawns.forEach((e, t) => {
        this.run.killed.includes(t) ||
          (Xo[e.kind] && this.run.bosses.includes(e.kind)) ||
          this.spawnFromFloor(e, t);
      });
    for (let e of this.hosted ? [] : r.props) {
      if (
        e.kind === `pylon` &&
        r.rooms[e.room]?.kind === `pylon` &&
        e.tone &&
        !this.isOpen(`pylon`, `${e.x},${e.y}`)
      ) {
        let t = this.spawn(`pylon_${e.tone}`, e.x + 0.5, e.y + 0.9, {
          tier: `elite`,
          object: !0,
          room: e.room,
          level: r.spawns[0]?.level ?? this.d.level,
        });
        ((t.onlyTone = wo[e.tone]),
          (t.pylon = `${e.x},${e.y}`),
          (t.tone = e.tone));
      }
      if (e.kind === ms.crystal && !this.isOpen(`crystal`, `${e.x},${e.y}`)) {
        let t = this.spawn(`ritecrystal`, e.x + 0.5, e.y + 0.95, {
          tier: `normal`,
          object: !0,
          room: e.room,
          level: r.spawns[0]?.level ?? this.d.level,
          ghost: !0,
        });
        ((t.crystal = `${e.x},${e.y}`),
          (t.m.doc.hp = t.m.doc.maxHp = Math.round(t.m.doc.maxHp * 1.4)));
      }
    }
    this.riseAt = { x: r.entry.x + 0.5, y: r.entry.y + 1.6 };
    for (let e of r.rooms) {
      if (e.kind !== `waystone` || !this.isOpen(`waystone`, String(e.index)))
        continue;
      let t = r.props.find((t) => t.kind === `waystone` && t.room === e.index);
      t && (this.riseAt = { x: t.x + 0.5, y: t.y + 1.7 });
    }
    (this.placeMe(r.entry.x + 0.5, r.entry.y + 1.6),
      (this.g.banner = {
        title: this.d.name,
        subtitle: `${r.name}${this.run.diff === `hollowed` ? ` · Hollowed` : ``}`,
        t0: this.g.real,
        dur: 3.6,
        color: Mo[r.theme].light,
      }));
  }
  placeMe(e, t) {
    let n = this.g,
      r = { x: e, y: t };
    if (!this.canStand(e, t)) {
      let n = 1 / 0;
      for (let i = -3; i <= 3; i++)
        for (let a = -3; a <= 3; a++) {
          let o = Math.floor(e) + a + 0.5,
            s = Math.floor(t) + i + 0.6;
          this.canStand(o, s) &&
            Math.hypot(a, i) < n &&
            ((n = Math.hypot(a, i)), (r = { x: o, y: s }));
        }
    }
    ((n.me.x = r.x), (n.me.y = r.y), (n.me.dir = 0), n.snapCamNow());
  }
  hdDrainPaint() {
    this.paintMore(1 / 0);
  }
  paintMore(e = 4) {
    let t = performance.now();
    for (; this.paintQ.length && performance.now() - t < e;) {
      let e = this.paintQ.shift(),
        t = this.ground[e.phase];
      (t ||
        ((t = document.createElement(`canvas`)),
        (t.width = this.f.w * Z),
        (t.height = this.f.h * Z),
        (this.ground[e.phase] = t)),
        t
          .getContext(`2d`)
          .drawImage(
            C_(this.f, e.x, e.y, e.w, e.h, e.phase / 4),
            e.x * Z,
            e.y * Z,
          ));
    }
  }
  tile(e, t) {
    let n = this.f;
    return e < 0 || t < 0 || e >= n.w || t >= n.h
      ? Ao.VOID
      : n.tiles[t * n.w + e];
  }
  lockAt(e, t) {
    return (
      this.f.locks.find(
        (n) => e >= n.x && t >= n.y && e < n.x + n.w && t < n.y + n.h,
      ) ?? null
    );
  }
  walkTile(e, t) {
    let n = this.tile(e, t);
    if (n === Ao.LOCK) {
      let n = this.lockAt(e, t);
      return !!n && this.isOpen(`lock`, String(n.room));
    }
    return jo(n) && !this.blocked[t * this.f.w + e];
  }
  canStand(e, t) {
    let n = (e, t) => this.walkTile(Math.floor(e), Math.floor(t));
    return (
      n(e - 0.28, t - 0.12) &&
      n(e + 0.28, t - 0.12) &&
      n(e - 0.28, t + 0.18) &&
      n(e + 0.28, t + 0.18)
    );
  }
  dashPasses(e, t) {
    if (this.canStand(e, t)) return !0;
    if (this.f.theme !== `folly`) return !1;
    let n = (e, t) => {
      let n = Math.floor(e),
        r = Math.floor(t);
      return this.walkTile(n, r) || this.tile(n, r) === Ao.DEEP;
    };
    return (
      n(e - 0.28, t - 0.12) &&
      n(e + 0.28, t - 0.12) &&
      n(e - 0.28, t + 0.18) &&
      n(e + 0.28, t + 0.18)
    );
  }
  solid(e, t) {
    let n = Math.floor(e),
      r = Math.floor(t),
      i = this.tile(n, r);
    if (i === Ao.WALL || i === Ao.VOID) return !0;
    if (i === Ao.LOCK) {
      let e = this.lockAt(n, r);
      return !e || !this.isOpen(`lock`, String(e.room));
    }
    return !1;
  }
  roomAt(e, t) {
    return (
      this.f.rooms.find(
        (n) => e >= n.x && t >= n.y && e < n.x + n.w && t < n.y + n.h,
      ) ?? null
    );
  }
  bfs(e, t) {
    let n = this.f,
      r = new Int16Array(n.w * n.h).fill(-1);
    if (e < 0 || t < 0 || e >= n.w || t >= n.h) return r;
    let i = new Int32Array(n.w * n.h),
      a = 0,
      o = 0;
    for (i[o++] = t * n.w + e, r[t * n.w + e] = 0; a < o;) {
      let e = i[a++],
        t = e % n.w,
        s = (e - t) / n.w,
        c = r[e];
      for (let [e, a] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        let l = t + e,
          u = s + a;
        if (l < 0 || u < 0 || l >= n.w || u >= n.h) continue;
        let d = u * n.w + l;
        r[d] >= 0 || !this.walkTile(l, u) || ((r[d] = c + 1), (i[o++] = d));
      }
    }
    return r;
  }
  clearLine(e, t, n, r, i = !0) {
    let a = Math.hypot(n - e, r - t),
      o = Math.ceil(a / 0.35);
    for (let a = 1; a < o; a++) {
      let s = e + ((n - e) * a) / o,
        c = t + ((r - t) * a) / o;
      if (i ? !this.walkTile(Math.floor(s), Math.floor(c)) : this.solid(s, c))
        return !1;
    }
    return !0;
  }
  pathDist(e, t) {
    let n = this.flow[Math.floor(t) * this.f.w + Math.floor(e)];
    return n < 0 ? 999 : n;
  }
  spawnFromFloor(e, t) {
    let n = Ts(this.f, e, this.run.diff),
      r =
        e.kind === `tonemote` || e.kind === `brimling` ? Es(this.f, e) : void 0,
      i = r ? `${e.kind}_${r}` : e.kind,
      a = this.spawn(i, e.x, e.y, {
        tier: e.tier,
        room: e.room,
        level: e.level,
        hp: n.hp,
        dmg: n.dmg,
        logical: e.kind,
        spawn: t,
        pack: e.pack,
      });
    return (
      (a.tone = r),
      Xo[e.kind] && ((a.boss = zH(this, a)), this.bosses.push(a.boss)),
      e.kind === `lillith` && (a.ghost = a.m.ghost = !0),
      a
    );
  }
  spawn(e, t, n, r) {
    let i = r.logical ?? e.replace(/_(ember|rime|storm|void)$/, ``),
      a = r.tier ?? `normal`,
      o = r.level ?? this.d.level,
      s = Ts(
        this.f,
        {
          kind: i,
          tier: a,
          level: o,
          x: t,
          y: n,
          room: r.room ?? 0,
          pack: r.pack ?? -1,
        },
        this.run.diff,
      ),
      c = Go[i],
      l = Fe[i],
      u =
        c?.move ??
        (l
          ? {
              speed: l.speed,
              aggro: l.aggro,
              attackRange: l.attackRange,
              attackCd: l.attackCd,
            }
          : { speed: 2, aggro: 7, attackRange: 1, attackCd: 1200 }),
      d = ap(i, u.attackRange),
      f = !!d.keep || Vae.has(i),
      p =
        (a === `elite` || a === `named`) && !Xo[i] && !(r.object ?? c?.object)
          ? Sre(this.run.seed, (r.spawn ?? 1e3) + this.seq)
          : void 0,
      m = p === `hasted`,
      h = r.hp ?? s.hp;
    p === `warded` && (h = Math.round(h * 1.1));
    let g = `d:${this.run.floor}:${this.seq++}`,
      _ = {
        doc: {
          _id: g,
          _creationTime: 0,
          kind: e,
          x: t,
          y: n,
          spawnX: t,
          spawnY: n,
          hp: h,
          maxHp: h,
          dead: !1,
          respawnAt: 0,
          lastAttackAt: 0,
          facing: 1,
          lvl: o,
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
        ghost: r.ghost,
      },
      v = r.object ?? !!c?.object,
      y = {
        id: g,
        m: _,
        kind: i,
        tier: a,
        level: o,
        dmg: r.dmg ?? s.dmg,
        speed: v ? 0 : u.speed * (m ? 1.4 : 1),
        aggro: u.aggro,
        range: d.basic.max,
        cd: (f ? Math.max(1600, u.attackCd) : u.attackCd) * (m ? 0.75 : 1),
        spawn: r.spawn ?? null,
        pack: r.pack ?? -1,
        room: r.room ?? this.roomAt(t, n)?.index ?? -1,
        home: { x: t, y: n },
        state: r.hunt ? `hunt` : `idle`,
        next: this.time + 0.6 + Math.random() * 0.6,
        wind: 0,
        ranged: f,
        kit: d,
        nextSpecial: this.time + 1 + Math.random() * (d.special?.cd ?? 4) * 0.6,
        lastAtk: this.time,
        affix: p,
        volleyAt: this.time + 2 + Math.random() * 3,
        object: v,
        husk: qo(i),
        risesAt: 0,
        boss: null,
        slowUntil: 0,
        summoned: r.summoned,
        heat: 0,
        reported: !1,
      };
    return (this.mobs.set(g, y), this.g.monsters.set(g, _), y);
  }
  mobOf(e) {
    return this.mobs.get(e.doc._id);
  }
  nameOf(e) {
    let t = this.mobOf(e);
    if (!t) {
      let t = this.hosted && !e.local ? VH(e.doc.kind) : null;
      if (t === `ritecrystal`)
        return { name: `A Hollowed crystal`, level: e.doc.lvl ?? 1, boss: !1 };
      if (t === `pylon`)
        return {
          name: `Ward-lamp (${e.doc.kind.slice(6)})`,
          level: e.doc.lvl ?? 1,
          boss: !1,
        };
      let n = t ? (Go[t] ?? Fe[t]) : null;
      if (!n) return null;
      let r = Go[t]?.tier,
        i = this.hostAffixes.get(e.doc._id);
      return {
        name: i ? `${uA[i].name} ${n.name}` : n.name,
        level: e.doc.lvl ?? 1,
        boss: r === `boss` || r === `named`,
      };
    }
    let n =
      t.kind === `ritecrystal`
        ? `A Hollowed crystal`
        : t.kind === `pylon`
          ? `Ward-lamp (${t.tone})`
          : (Go[t.kind]?.name ?? Fe[t.kind]?.name ?? t.kind);
    return {
      name: t.affix ? `${uA[t.affix].name} ${n}` : n,
      level: t.level,
      boss: t.tier === `boss` || t.tier === `named`,
    };
  }
  hunting() {
    for (let e of this.mobs.values())
      if (!e.m.doc.dead && e.state === `hunt`) return !0;
    return !!this.boss?.engaged;
  }
  hiddenMob(e) {
    return !!this.mobOf(e)?.boss?.hidden;
  }
  alive() {
    return [...this.mobs.values()].filter((e) => !e.m.doc.dead);
  }
  enemyWithin(e, t, n) {
    for (let r of this.mobs.values())
      if (!r.m.doc.dead && !r.object && Math.hypot(r.m.rx - e, r.m.ry - t) < n)
        return !0;
    if (this.hosted)
      for (let r of this.g.monsters.values()) {
        if (r.local || r.doc.dead) continue;
        let i = VH(r.doc.kind);
        if (
          !Go[i]?.object &&
          i !== `ritecrystal` &&
          Math.hypot(r.rx - e, r.ry - t) < n
        )
          return !0;
      }
    return !1;
  }
  modifyHit(e, t, n) {
    let r = this.mobOf(e);
    if (!r) return n;
    let i = Cs[this.g.school];
    if (r.onlyTone && i !== r.onlyTone)
      return (
        this.g.floater(
          e.rx * Z,
          e.ry * Z - 30,
          `Only ${r.onlyTone} puts it out`,
          Eo[r.onlyTone],
          !1,
        ),
        0
      );
    n = Math.max(
      1,
      Math.round(n * Tp(r.level - (this.g.meDoc?.level ?? r.level))),
    );
    let a = cA(this.run.echoes, `stillwater`);
    if (
      (a &&
        !r.object &&
        (r.slowUntil = Math.max(r.slowUntil, this.time + 1.5 * a)),
      r.boss)
    )
      return r.boss.onHit(t, n);
    for (let e of this.bosses) if (e.guards(r)) return e.onAddHit(r, t, n);
    return (
      r.affix === `warded` &&
        e.doc.hp > e.doc.maxHp * 0.7 &&
        ((n = Math.max(1, Math.round(n * 0.5))),
        Math.random() < 0.3 &&
          this.g.floater(
            e.rx * Z,
            e.ry * Z - 30,
            `Warded`,
            uA.warded.color,
            !1,
          )),
      this.aggro(r),
      n
    );
  }
  aggro(e) {
    if (e.state !== `hunt` && ((e.state = `hunt`), e.pack >= 0))
      for (let t of this.mobs.values())
        t.pack === e.pack && !t.m.doc.dead && (t.state = `hunt`);
  }
  onDeath(e, t) {
    let n = this.mobOf(e);
    if (!n) return;
    let r = this.g;
    if ((n.onDeath?.(), n.boss)) {
      n.boss.onDeath();
      return;
    }
    if (n.pylon) {
      this.openThing(`pylon`, n.pylon, () =>
        this.g.floater(
          e.rx * Z,
          e.ry * Z - 30,
          `The lamp goes out`,
          Eo[n.tone ?? `ember`],
          !0,
        ),
      );
      return;
    }
    if (n.crystal) {
      this.breakCrystal(n.crystal, e.rx, e.ry);
      return;
    }
    if (
      (this.echoOnKill(n),
      n.affix === `vengeful` &&
        this.volley(n, 12, 0.55, uA.vengeful.color, 0.35),
      n.surge)
    ) {
      let { i: t, slot: i } = n.surge,
        a = `${t}:${i}`;
      this.run.surged.includes(a) ||
        (this.run.surged.push(a),
        r.api.dungeon
          .surgeKill(this.run.floor, t, i)
          .then(
            (t) =>
              t &&
              r.floater(e.rx * Z, e.ry * Z - 32, `+${t.xp} XP`, `#c49bff`, !1),
          ));
    }
    if (
      (n.kind === `leech` &&
        ((r.mana = Math.min(r.maxMana(), r.mana + 20)),
        r.floater(r.me.x * Z, r.me.y * Z - 34, `+20 mana`, `#8ab4ff`, !1)),
      n.husk &&
        !n.summoned &&
        !(
          t &&
          (r.school === `pyro` ||
            (r.school === `paladin` && xe[t.id] === `paladin`))
        ) &&
        !this.inLight(e.rx, e.ry) &&
        (n.risesAt =
          this.time + (this.run.diff === `hollowed` ? 18 : ko.huskRiseSeconds)),
      n.spawn !== null && !n.reported)
    ) {
      n.reported = !0;
      let t = n.spawn;
      this.run.killed.includes(t) || this.run.killed.push(t);
      let i = this.run.floor;
      r.api.dungeon.kill(i, t).then((t) => {
        t &&
          (r.floater(e.rx * Z, e.ry * Z - 32, `+${t.xp} XP`, `#c49bff`, !1),
          t.shard &&
            (this.run.shards[t.shard]++,
            r.floater(
              e.rx * Z,
              e.ry * Z - 44,
              `${UH(t.shard)} Tone Shard`,
              Eo[t.shard],
              !0,
            ),
            q.sfx(`chime`, 0.5)),
          t.loot.length && r.api.dungeon.loot(t.loot));
      });
    }
  }
  inLight(e, t) {
    let n = this.g,
      r = ko.lanternRadius + (this.wearing(`tallowlantern`) ? 2 : 0);
    if (Math.hypot(e - n.me.x, t - n.me.y) <= r) return !0;
    for (let n of this.sconces)
      if (n.lit && Math.hypot(e - n.x, t - n.y) <= ko.sconceRadius) return !0;
    for (let n of this.f.props)
      if (
        n.kind === `waystone` &&
        (n.room === 0 || this.isOpen(`waystone`, String(n.room))) &&
        Math.hypot(e - n.x - 0.5, t - n.y - 1) <= ko.waystoneRadius
      )
        return !0;
    return !1;
  }
  wearing(e) {
    let t = this.g.meDoc?.look;
    return t?.hat?.unique === e || t?.robe?.unique === e;
  }
  hitMe(e, t = {}) {
    let n = this.g;
    if (
      !this.hosted &&
      !(
        !n.meDoc ||
        n.meDoc.dead ||
        this.invuln > 0 ||
        this.over ||
        n.real < n.blinkGraceUntil ||
        n.veiled()
      )
    ) {
      if (
        ((e = Math.max(1, Math.round(e * vre(this.run.echoes)))),
        (n.hurtFlash = Math.max(n.hurtFlash, t.heavy ? 0.7 : 0.4)),
        (n.shake = Math.max(n.shake, t.heavy ? 7 : 3)),
        (n.me.flash = 0.15),
        q.sfx(`hurt`, 0.55),
        this.channel &&
          ((this.channel = null),
          n.floater(n.me.x * Z, n.me.y * Z - 36, `Interrupted`, `#ff9a8a`, !1)),
        t.lethal)
      ) {
        this.sendHurt(e, !0);
        return;
      }
      ((this.hurtQ += e),
        (this.hurtQ >= n.meDoc.hp * 0.5 || t.heavy) && this.flushHurt());
    }
  }
  flushHurt() {
    if (this.hurtQ <= 0) return;
    let e = this.hurtQ;
    ((this.hurtQ = 0), (this.hurtT = 0), this.sendHurt(e, !1));
  }
  sendHurt(e, t) {
    this.g.api.dungeon.hurt(e, t).then((e) => {
      e &&
        !this.over &&
        ((this.run.ember = e.ember),
        e.ended
          ? this.endRun()
          : e.rose
            ? this.rise()
            : e.wiped && this.wipe());
    });
  }
  rise() {
    let e = this.g;
    ((this.invuln = 2.5), (this.channel = null));
    for (let e of this.mobs.values())
      e.state === `hunt` && !e.boss && (e.state = `home`);
    for (let e of this.bosses) e.leftRoom(!0);
    (this.placeMe(this.riseAt.x, this.riseAt.y),
      e.lightPillar(e.me.x * Z, e.me.y * Z, `#7ef9ff`),
      (e.flash = { color: `#ffffff`, a: 0.7 }),
      q.sfx(`chime`, 0.9),
      (e.banner = {
        title: `The Ember of Marizon`,
        subtitle: `"Rise, mage." ${this.run.ember} rise${this.run.ember === 1 ? `` : `s`} left.`,
        t0: e.real,
        dur: 3.2,
        color: `#7ef9ff`,
      }),
      (this.tele = []),
      (this.shots = []),
      (this.beams = []));
  }
  risen() {
    let e = this.g;
    ((this.channel = null),
      e.lightPillar(e.me.x * Z, e.me.y * Z, `#7ef9ff`),
      (e.flash = { color: `#ffffff`, a: 0.7 }),
      q.sfx(`chime`, 0.9),
      (e.banner = {
        title: `The Ember of Marizon`,
        subtitle: `"Rise, mage." ${this.run.ember} rise${this.run.ember === 1 ? `` : `s`} left.`,
        t0: e.real,
        dur: 3.2,
        color: `#7ef9ff`,
      }));
  }
  summary = null;
  emberOut() {
    let e = this.g;
    this.over ||
      ((this.over = !0),
      (e.flash = { color: `#000000`, a: 1 }),
      (e.hurtFlash = 1),
      q.sfx(`death`, 0.9),
      (e.banner = {
        title: `The Ember goes out`,
        subtitle: `The run is over. The crystal pulls you back up into the light.`,
        t0: e.real,
        dur: 3.2,
        color: `#ff9a8a`,
      }),
      (this.summary = {
        dungeon: this.run.dungeon,
        diff: this.run.diff,
        seconds: Math.round(e.real - this.startedReal),
        xp: this.run.xp,
        loot: [],
        note: null,
        notes: 0,
        names: [...this.run.names],
        lost: this.run.lost.length,
        rises: this.run.rises + 1,
        story: !1,
        parting: null,
        ended: !0,
        floorReached: this.run.floor + 1,
        echoes: [...this.run.echoes],
      }));
  }
  wipe() {
    let e = this.g;
    ((this.invuln = 3),
      (e.flash = { color: `#000000`, a: 1 }),
      q.sfx(`death`, 0.8),
      this.load(this.run.floor),
      (e.banner = {
        title: `The Ember gutters`,
        subtitle: `Back to the floor's entry. Relit to ${this.run.ember} rise${this.run.ember === 1 ? `` : `s`}.`,
        t0: e.real,
        dur: 4,
        color: `#ff9a8a`,
      }));
  }
  shoot(e, t, n, r, i = `#ffffff`, a = 7, o = {}) {
    let s = Math.hypot(t.x - e.x, t.y - e.y) || 1;
    this.shots.push({
      x: e.x,
      y: e.y,
      vx: ((t.x - e.x) / s) * a,
      vy: ((t.y - e.y) / s) * a,
      dmg: n,
      color: r,
      core: i,
      life: 3,
      r: o.r ?? 0.45,
      mana: o.mana,
      onHit: o.onHit,
      look: o.look,
      slow: o.slow,
      t: 0,
    });
  }
  telegraph(e, t, n, r, i, a) {
    this.tele.push({
      shape: e,
      t: 0,
      dur: t,
      color: n,
      land: r,
      look: i,
      mob: a,
    });
  }
  knockBack(e, t, n, r) {
    let i = this.mobOf(e);
    if (
      !i ||
      e.doc.dead ||
      i.object ||
      i.ghost ||
      i.boss ||
      i.tier === `boss` ||
      i.tier === `named` ||
      i.tier === `key`
    )
      return;
    let a = e.rx - t,
      o = e.ry - n,
      s = Math.hypot(a, o);
    for (let t = 0; s >= 0.01 && t < r; t += 0.2) {
      let t = e.rx + (a / s) * 0.2,
        n = e.ry + (o / s) * 0.2;
      if (this.solid(t, n)) break;
      ((e.rx = t), (e.ry = n));
    }
    ((e.fx0 = e.tx = e.rx),
      (e.fy0 = e.ty = e.ry),
      (this.tele = this.tele.filter((e) => e.mob !== i.id)),
      (i.broken = this.time));
  }
  zone(e, t, n, r, i = {}) {
    let a = { shape: e, until: this.time + t, dps: n, color: r, tick: 0, ...i };
    return (this.zones.push(a), a);
  }
  beam(e) {
    this.beams.push({ ...e, t: 0 });
  }
  lob(e, t, n, r, i, a, o = {}) {
    if (!e?.length) {
      o.land && this.later(a, o.land);
      return;
    }
    this.lobs.push({
      frames: e,
      x0: t,
      y0: n,
      x1: r,
      y1: i,
      t: 0,
      dur: a,
      h: o.h ?? 2,
      land: o.land,
      spin: o.spin,
    });
  }
  meIn(e) {
    return wf(e, this.g.me.x, this.g.me.y);
  }
  maxHp() {
    return this.g.meDoc?.maxHp ?? 100;
  }
  say(e, t, n = 6) {
    this.bark = { who: e, text: t, until: this.time + n };
  }
  now() {
    return this.time;
  }
  speedMult() {
    let e = this.g;
    if (this.chill.frozen > this.time) return 0;
    let t = 1;
    (this.tile(Math.floor(e.me.x), Math.floor(e.me.y)) === Ao.SHALLOW &&
      this.f.theme === `cistern` &&
      (t *= 0.7),
      this.chill.until > this.time &&
        (t *= 1 - Math.min(0.6, this.chill.stacks * 0.1 + 0.2)));
    for (let e of this.zones) e.slow && this.meIn(e.shape) && (t *= 1 - e.slow);
    return t;
  }
  update(e) {
    let t = this.g;
    if (this.over) return;
    ((this.time += e),
      (this.invuln = Math.max(0, this.invuln - e)),
      this.paintMore());
    let n = t.me;
    if (this.hosted) {
      for (let e = this.timers.length - 1; e >= 0; e--) {
        if (this.time < this.timers[e].at) continue;
        let t = this.timers[e];
        (this.timers.splice(e, 1), t.fn());
      }
      !this.boss && !this.cleared && !t.meDoc?.dead && (this.tide += e);
      for (let e of t.monsters.values())
        !e.local &&
          !e.ghost &&
          /^(ritecrystal|lillith)$/.test(e.doc.kind) &&
          (e.ghost = !0);
      for (let e of this.sconces) e.lit = !0;
      for (let e of t.monsters.values())
        if (!e.local && !e.doc.dead && VH(e.doc.kind) === `tallowlight`)
          for (let t of this.sconces)
            Math.hypot(t.x - e.rx, t.y - e.ry) < 3.2 && (t.lit = !1);
      (this.updateShots(e),
        this.updateTele(e),
        this.updateZones(e),
        this.updateBeams(e),
        this.updateLobs(e),
        this.updateHazards(e),
        this.updateHostClutches(e));
      for (let t of this.bosses) t.hostTick(e);
      (this.fx.update(e),
        this.updateWalkers(e),
        this.updateChannel(e),
        this.findTarget(),
        this.checkStairs(),
        this.bark && this.bark.until < this.time && (this.bark = null));
      return;
    }
    let r = Math.floor(n.y) * this.f.w + Math.floor(n.x);
    ((this.flowT -= e),
      (r !== this.flowFrom || this.flowT <= 0) &&
        ((this.flowFrom = r),
        (this.flowT = 0.6),
        (this.flow = this.bfs(Math.floor(n.x), Math.floor(n.y)))));
    for (let e of this.sconces) e.lit = !0;
    for (let e of this.mobs.values())
      if (e.kind === `tallowlight` && !e.m.doc.dead)
        for (let t of this.sconces)
          Math.hypot(t.x - e.m.rx, t.y - e.m.ry) < 3.2 && (t.lit = !1);
    let i = !!t.meDoc?.dead;
    !this.boss &&
      !this.cleared &&
      !i &&
      ((this.tide += e),
      this.tide >= (this.tideSurges + 1) * this.surgeEvery() &&
        (this.tideSurges++, this.surge(!1)));
    for (let e = this.timers.length - 1; e >= 0; e--) {
      if (this.time < this.timers[e].at) continue;
      let t = this.timers[e];
      (this.timers.splice(e, 1), t.fn());
    }
    for (let t of this.mobs.values()) this.updateMob(t, e, i);
    for (let t of this.bosses) t.update(e);
    ((this.boss = this.bosses.find((e) => e.engaged && !e.done) ?? null),
      this.updateShots(e),
      this.updateTele(e),
      this.updateZones(e),
      this.updateBeams(e),
      this.updateLobs(e),
      this.fx.update(e),
      this.updateHazards(e),
      this.updateWalkers(e),
      this.updateChannel(e),
      this.findTarget(),
      this.checkStairs(),
      (this.hurtT += e),
      this.hurtQ > 0 && this.hurtT > 0.4 && this.flushHurt(),
      this.bark && this.bark.until < this.time && (this.bark = null));
  }
  updateMob(e, t, n) {
    let r = this.g,
      i = e.m;
    if (i.doc.dead) {
      if (e.risesAt && this.time >= e.risesAt) {
        if (((e.risesAt = 0), this.inLight(i.rx, i.ry))) return;
        ((i.doc.dead = !1),
          (i.doc.hp = i.doc.maxHp),
          (i.dying = 0),
          (i.rise = 1.1),
          (e.state =
            Math.hypot(i.rx - r.me.x, i.ry - r.me.y) < 10 ? `hunt` : `idle`),
          r.floater(
            i.rx * Z,
            i.ry * Z - 24,
            `It stands up again`,
            `#e0484e`,
            !1,
          ),
          q.sfx(`hurt`, 0.25));
      }
      return;
    }
    if (
      ((i.fx0 = i.tx = i.rx),
      (i.fy0 = i.ty = i.ry),
      e.boss &&
        r.veiled() &&
        Math.hypot(r.me.x - i.rx, r.me.y - i.ry) <= O.bossTears &&
        r.unveil(`torn`),
      e.boss || e.object || i.rise)
    ) {
      e.kind === `clutch` && this.updateClutch(e, t);
      return;
    }
    let a = r.me,
      o = a.x - i.rx,
      s = a.y - i.ry,
      c = Math.hypot(o, s);
    n && (e.state = `home`);
    let l = r.veiled() && !O.sensedBy.includes(e.kind);
    (l && e.state === `hunt` && (e.state = `home`),
      e.state === `idle` &&
        !l &&
        c < e.aggro &&
        (this.clearLine(i.rx, i.ry, a.x, a.y, !1) || c < 2.5) &&
        this.aggro(e),
      e.state === `hunt` &&
        (this.pathDist(i.rx, i.ry) > 40 || c > 26) &&
        (e.state = `home`));
    let u = e.slowUntil > this.time ? 0.5 : 1;
    if (e.state === `home`) {
      let n = e.home.x - i.rx,
        r = e.home.y - i.ry;
      Math.hypot(n, r) < 0.4
        ? ((e.state = `idle`), (i.doc.hp = i.doc.maxHp))
        : this.step(e, e.home.x, e.home.y, e.speed * 1.3 * t, !1);
      return;
    }
    if (e.state !== `hunt`) return;
    if ((Math.abs(o) > 0.05 && (i.doc.facing = o < 0 ? -1 : 1), e.wind > 0)) {
      e.wind -= t;
      return;
    }
    if (e.affix === `volleying` && this.time >= e.volleyAt && c < 9) {
      ((e.volleyAt = this.time + 6),
        this.volley(e, 10, 0.5, uA.volleying.color, 0.8),
        (e.wind = 0.9));
      return;
    }
    let d = this.clearLine(i.rx, i.ry - 0.3, a.x, a.y - 0.3, !1),
      f = (e) =>
        c >= e.min &&
        c <= e.max &&
        (d || e.form === `swing` || (e.form === `slam` && e.at !== `target`)),
      p = e.kit.special;
    if (p && this.time >= e.nextSpecial && f(p)) {
      ((e.nextSpecial =
        this.time +
        p.cd *
          (0.85 + Math.random() * 0.3) *
          (e.affix === `hasted` ? 0.75 : 1)),
        this.attack(e, p));
      return;
    }
    if (this.time >= e.next && f(e.kit.basic)) {
      ((e.next = this.time + e.cd / 1e3), this.attack(e, e.kit.basic));
      return;
    }
    let m = this.time - e.lastAtk > 3 ? 1.35 : 1,
      h = e.kit.keep,
      g = h
        ? c > h + 1
          ? 1
          : c < h - 1.8
            ? -1
            : 0
        : +(c > Math.max(0.6, e.range * 0.7));
    g === 1
      ? this.step(e, a.x, a.y, e.speed * u * m * t, !0)
      : g === -1 && this.step(e, i.rx - o, i.ry - s, e.speed * 0.6 * u * t, !1);
    for (let t of this.mobs.values()) {
      if (t === e || t.m.doc.dead || t.object) continue;
      let n = i.rx - t.m.rx,
        r = i.ry - t.m.ry,
        a = Math.hypot(n, r);
      if (a > 0 && a < 0.6) {
        let e = ((0.6 - a) / a) * 0.5,
          t = i.rx + n * e,
          o = i.ry + r * e;
        this.walkTile(Math.floor(t), Math.floor(o)) && ((i.rx = t), (i.ry = o));
      }
    }
  }
  step(e, t, n, r, i) {
    let a = e.m,
      o = t,
      s = n;
    if (i && !this.clearLine(a.rx, a.ry, t, n)) {
      let e = Math.floor(a.rx),
        t = Math.floor(a.ry),
        n = this.flow[t * this.f.w + e],
        r = e,
        i = t;
      for (let [a, o] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        let s = this.flow[(t + o) * this.f.w + (e + a)];
        s >= 0 && (n < 0 || s < n) && ((n = s), (r = e + a), (i = t + o));
      }
      ((o = r + 0.5), (s = i + 0.5));
    }
    let c = o - a.rx,
      l = s - a.ry,
      u = Math.hypot(c, l);
    if (u < 0.001) return;
    let d = Math.min(r, u),
      f = a.rx + (c / u) * d,
      p = a.ry + (l / u) * d;
    (this.walkTile(Math.floor(f), Math.floor(a.ry)) && (a.rx = f),
      this.walkTile(Math.floor(a.rx), Math.floor(p)) && (a.ry = p),
      Math.abs(c) > 0.05 && (a.doc.facing = c < 0 ? -1 : 1));
  }
  attack(e, t) {
    let n = this.g,
      r = e.m,
      i = n.me,
      a = r.rx,
      o = r.ry,
      s = up(t, a, o, i.x, i.y),
      c = t.windup * (e.affix === `hasted` ? 0.85 : 1),
      l =
        e.tone && (t.form === `bolt` || t.form === `spread`)
          ? Eo[e.tone]
          : t.color,
      u = wp(e.level - (n.meDoc?.level ?? e.level)),
      d = e.dmg * t.mult * u;
    ((e.wind = c + (t.form === `lunge` || t.form === `blink` ? 0.1 : 0.2)),
      (e.lastAtk = this.time),
      (r.lunge = 0.25));
    let f = Math.hypot(i.x - a, i.y - o) || 1;
    r.lungeDir = { x: (i.x - a) / f, y: (i.y - o) / f };
    let p = !1;
    for (let n of s.shapes)
      this.telegraph(
        n,
        c,
        l,
        () => {
          p || !this.meIn(n) || r.doc.dead || ((p = !0), this.blow(e, t, d));
        },
        void 0,
        e.id,
      );
    for (let t of s.shots.slice(0, 7)) {
      let n = Math.hypot(t.vx, t.vy) || 1,
        r = Math.min(5, t.life * n);
      this.telegraph(
        {
          t: `line`,
          x0: a,
          y0: o - 0.3,
          x1: a + (t.vx / n) * r,
          y1: o - 0.3 + (t.vy / n) * r,
          w: 0.18,
        },
        c,
        l,
        void 0,
        void 0,
        e.id,
      );
    }
    let m = this.time;
    this.later(c, () => {
      if (!(r.doc.dead || (e.broken ?? -1) >= m)) {
        for (let e of s.shots)
          this.shots.push({
            x: e.x,
            y: e.y - 0.3,
            vx: e.vx,
            vy: e.vy,
            dmg: t.mana ? d * 0.35 : d,
            color: l,
            core: t.core ?? `#ffffff`,
            life: e.life,
            r: e.r,
            mana: t.mana,
            slow: !!t.slow,
          });
        if (
          (s.shots.length && q.sfx(`cast`, 0.3),
          (t.form === `slam` || t.form === `rain`) && q.sfx(`boom`, 0.3),
          s.moveTo)
        ) {
          let e = s.moveTo;
          if (t.form === `blink`)
            this.walkTile(Math.floor(e.x), Math.floor(e.y)) &&
              (n.particles.burst(
                r.rx * Z,
                r.ry * Z - 8,
                14,
                [l, `#ffffff`],
                50,
              ),
              (r.rx = e.x),
              (r.ry = e.y));
          else {
            let t = Math.ceil(Math.hypot(e.x - r.rx, e.y - r.ry) / 0.25);
            for (let n = 0; n < t; n++) {
              let i = r.rx + (e.x - r.rx) / (t - n),
                a = r.ry + (e.y - r.ry) / (t - n);
              if (!this.walkTile(Math.floor(i), Math.floor(a))) break;
              ((r.rx = i), (r.ry = a));
            }
          }
        }
      }
    });
  }
  blow(e, t, n) {
    let r = this.g;
    if (!r.shieldTurns(e.m.rx - r.me.x, e.m.ry - r.me.y, t)) {
      if (
        ((t.form === `swing` || t.form === `lunge`) &&
          r.slash(
            r.me.x * Z,
            r.me.y * Z - 8,
            e.tier !== `normal` || t.mult >= 1.4,
          ),
        t.mana)
      ) {
        ((r.mana = Math.max(0, r.mana - n * 1.6)),
          r.floater(r.me.x * Z, r.me.y * Z - 30, `Mana drained`, `#8ab4ff`, !1),
          this.hitMe(n * 0.35));
        return;
      }
      ((e.kind === `glaciermite` || t.slow) && this.addChill(1),
        this.hitMe(n, { heavy: e.tier !== `normal` || t.mult >= 1.4 }));
    }
  }
  volley(e, t, n, r, i) {
    let a = {
        id: `volley`,
        name: `Volley`,
        form: `ring`,
        windup: i,
        mult: n,
        cd: 6,
        min: 0,
        max: 8,
        r: 0.4,
        n: t,
        speed: 5,
        color: r,
      },
      o = e.m.rx,
      s = e.m.ry,
      c = up(a, o, s, this.g.me.x, this.g.me.y),
      l = e.dmg * n * wp(e.level - (this.g.meDoc?.level ?? e.level));
    (this.telegraph({ t: `ring`, x: o, y: s, r0: 0.7, r1: 1.2 }, i, r),
      this.later(i, () => {
        for (let e of c.shots)
          this.shots.push({
            x: e.x,
            y: e.y - 0.3,
            vx: e.vx,
            vy: e.vy,
            dmg: l,
            color: r,
            core: `#ffffff`,
            life: e.life,
            r: e.r,
          });
        q.sfx(`cast`, 0.35);
      }));
  }
  later(e, t) {
    this.timers.push({ at: this.time + e, fn: t });
  }
  echoMods(e) {
    return this.run.echoes.length
      ? _re(e, this.run.echoes, this.g.school, this.g.meDoc?.level ?? 1)
      : e;
  }
  surgeEvery() {
    return yre(this.run.diff, this.run.echoes);
  }
  noticeOffer() {
    let e = (this.run.offer ?? []).join();
    if (!e || e === this.offerSeen) return;
    this.offerSeen = e;
    let t = this.g;
    (t.floater(
      t.me.x * Z,
      t.me.y * Z - 44,
      `An Echo answers: choose`,
      `#e6d8ff`,
      !0,
    ),
      q.sfx(`chime`, 0.7));
  }
  pick(e) {
    let t = this.g;
    this.run.offer?.includes(e) &&
      ((this.run.offer = null),
      t.api.dungeon.pick(e).then((n) => {
        if (!n) return;
        ((this.run.echoes = [...n.echoes]),
          (this.run.offer = n.offer),
          (this.run.ember = n.ember),
          t.refreshMods());
        let r = sA[e];
        (t.floater(
          t.me.x * Z,
          t.me.y * Z - 40,
          r?.name ?? e,
          r?.family === `hollow` ? `#ff5c6c` : `#e6d8ff`,
          !0,
        ),
          t.lightPillar(
            t.me.x * Z,
            t.me.y * Z,
            r?.family === `hollow` ? `#b01a2a` : `#c49bff`,
          ),
          q.sfx(`chime`, 0.8));
      }));
  }
  boltDmg() {
    let e = this.g,
      t =
        e
          .loadout()
          .map((t, n) => e.slotSpell(n))
          .find((e) => e?.kind === `bolt`) ??
        oe(e.school).find((e) => e.dmg > 0) ??
        oe(e.school)[0];
    return t.dmg * Ve(e.meDoc?.level ?? 1) * gd(e.mods, t.id);
  }
  burst(e, t, n, r, i) {
    let a = this.g;
    this.burstFx(e, t, n, i);
    for (let o of [...this.mobs.values()]) {
      let s = o.m;
      if (
        s.doc.dead ||
        o.object ||
        o.boss ||
        o.onlyTone ||
        o.ghost ||
        Math.hypot(s.rx - e, s.ry - t) > n ||
        this.bosses.some((e) => e.guards(o))
      )
        continue;
      let c = Math.max(
        1,
        Math.round(r * Tp(o.level - (a.meDoc?.level ?? o.level))),
      );
      (o.affix === `warded` &&
        s.doc.hp > s.doc.maxHp * 0.7 &&
        (c = Math.max(1, Math.round(c * 0.5))),
        (s.doc.hp -= c),
        (s.flash = 0.12),
        a.floater(s.rx * Z, s.ry * Z - 22, `${c}`, i, !1),
        this.aggro(o),
        s.doc.hp <= 0 &&
          ((s.doc.hp = 0),
          (s.doc.dead = !0),
          a.monsterDeath(s),
          this.onDeath(s, null)));
    }
  }
  burstFx(e, t, n, r) {
    let i = this.g;
    (i.rings.push({
      x: e * Z,
      y: t * Z,
      r: 0,
      max: n * Z,
      life: 0,
      dur: 0.3,
      color: r,
    }),
      i.particles.burst(e * Z, t * Z - 6, 16, [r, `#ffffff`], 60));
  }
  echoOnKill(e) {
    if (e.object || e.boss) return;
    let t = this.g,
      n = cA(this.run.echoes, `cinderheart`);
    if (n) {
      let t = e.m.rx,
        r = e.m.ry;
      this.later(0.08, () =>
        this.burst(t, r, 1.5, this.boltDmg() * 0.3 * n, `#ff7a1a`),
      );
    }
    let r = cA(this.run.echoes, `hunger`);
    r && t.meDoc && t.api.dungeon.heal(t.meDoc.maxHp * 0.03 * r);
  }
  onBlink(e, t) {
    let n = cA(this.run.echoes, `staticstep`);
    n && this.burst(e, t, 1.6, this.boltDmg() * 0.6 * n, `#fff36b`);
  }
  surge(e) {
    let t = this.g,
      n = this.f,
      r = this.surgeN++,
      i = n.spawns[0]?.level ?? this.d.level,
      a = bre(this.run.dungeon, this.run.floor, r, this.run.seed, i, n.depth),
      o = null;
    for (let e = 0; e < 40 && !o; e++) {
      let e = Math.random() * Math.PI * 2,
        n = lA.near + Math.random() * (lA.far - lA.near),
        r = t.me.x + Math.cos(e) * n,
        i = t.me.y + Math.sin(e) * n;
      this.canStand(r, i) && this.pathDist(r, i) < 16 && (o = { x: r, y: i });
    }
    o ??= { x: t.me.x + 0.5, y: t.me.y + 2 };
    let s = o,
      c = `#b01a2a`;
    (this.telegraph(
      { t: `circle`, x: s.x, y: s.y, r: 1.4 },
      lA.climbSeconds,
      c,
    ),
      (t.banner = {
        title: e ? `The Hollow notices the light` : `The Tide rises`,
        subtitle: `Surge ${r + 1}: ${a.length} climb out of the rift`,
        t0: t.real,
        dur: 2.6,
        color: `#ff5c6c`,
      }),
      q.sfx(`boom`, 0.5),
      a.forEach((e, n) => {
        this.later(
          lA.climbSeconds * (0.35 + (0.65 * n) / Math.max(1, a.length - 1)),
          () => {
            let i = s.x + (Math.random() - 0.5) * 1.6,
              a = s.y + (Math.random() - 0.5) * 1.2;
            this.canStand(i, a) || ({ x: i, y: a } = s);
            let o =
                e.kind === `tonemote` || e.kind === `brimling`
                  ? Co[Math.floor(Math.random() * 4)]
                  : void 0,
              l = this.spawn(o ? `${e.kind}_${o}` : e.kind, i, a, {
                tier: e.tier,
                level: e.level,
                hunt: !0,
                summoned: !0,
                logical: e.kind,
              });
            ((l.tone = o),
              (l.surge = { i: r, slot: n }),
              (l.m.rise = 0.9),
              t.particles.burst(
                i * Z,
                a * Z - 4,
                14,
                [c, `#12050a`, `#ff9a9a`],
                50,
              ));
          },
        );
      }));
  }
  endRun() {
    let e = this.g;
    if (this.over) return;
    ((this.over = !0),
      (e.flash = { color: `#000000`, a: 1 }),
      (e.hurtFlash = 1),
      q.sfx(`death`, 0.9),
      (e.banner = {
        title: `The Ember goes out`,
        subtitle: `The run is over. The crystal pulls you back up into the light.`,
        t0: e.real,
        dur: 3.2,
        color: `#ff9a8a`,
      }));
    let t = {
      dungeon: this.run.dungeon,
      diff: this.run.diff,
      seconds: Math.round(e.real - this.startedReal),
      xp: this.run.xp,
      loot: [],
      note: null,
      notes: 0,
      names: [...this.run.names],
      lost: this.run.lost.length,
      rises: this.run.rises + 1,
      story: !1,
      parting: null,
      ended: !0,
      floorReached: this.run.floor + 1,
      echoes: [...this.run.echoes],
    };
    window.setTimeout(() => {
      (e.endDungeon(), e.api.dungeon.cleared(t));
    }, 2800);
  }
  addChill(e) {
    let t = this.chill;
    ((t.stacks = t.until > this.time ? t.stacks + e : e),
      (t.until = this.time + 4),
      t.stacks >= 5 &&
        ((t.frozen = this.time + 1.5),
        (t.stacks = 0),
        this.g.floater(
          this.g.me.x * Z,
          this.g.me.y * Z - 36,
          `Frozen!`,
          `#bff0ff`,
          !0,
        )));
  }
  freeze(e) {
    this.chill.frozen = Math.max(this.chill.frozen, this.time + e);
  }
  updateHostClutches(e) {
    let t = this.g;
    for (let [n, r] of this.hostHeat) {
      let i = t.monsters.get(n);
      if (!i || i.doc.dead) {
        this.hostHeat.delete(n);
        continue;
      }
      Math.random() < e * (1 + (this.time - r) / 5) &&
        t.particles.spawn({
          x: i.rx * Z + (Math.random() - 0.5) * 12,
          y: i.ry * Z - 6,
          vz: 20,
          life: 0.6,
          size: 1,
          color: `#ff9a2a`,
          glow: !0,
        });
    }
  }
  updateClutch(e, t) {
    let n = this.g;
    if (
      !(!(Math.hypot(n.me.x - e.m.rx, n.me.y - e.m.ry) < 8) && e.heat <= 0) &&
      ((e.heat += t),
      Math.random() < t * (1 + e.heat / 5) &&
        n.particles.spawn({
          x: e.m.rx * Z + (Math.random() - 0.5) * 12,
          y: e.m.ry * Z - 6,
          vz: 20,
          life: 0.6,
          size: 1,
          color: `#ff9a2a`,
          glow: !0,
        }),
      e.heat >= 20)
    ) {
      ((e.m.doc.dead = !0),
        (e.m.dying = 0.5),
        n.particles.burst(
          e.m.rx * Z,
          e.m.ry * Z - 6,
          30,
          [`#ff9a2a`, `#ffd166`, `#3a2a2a`],
          80,
        ),
        q.sfx(`boom`, 0.4));
      for (let t = 0; t < 3; t++)
        this.spawn(
          `imp`,
          e.m.rx + (t % 2) - 0.5,
          e.m.ry + (t < 2 ? -0.4 : 0.4),
          { level: e.level, summoned: !0, hunt: !0 },
        );
    }
  }
  updateShots(e) {
    let t = this.g;
    for (let n = this.shots.length - 1; n >= 0; n--) {
      let r = this.shots[n];
      if (
        ((r.x += r.vx * e),
        (r.y += r.vy * e),
        (r.life -= e),
        (r.t = (r.t ?? 0) + e),
        Math.random() < e * 40 &&
          t.particles.spawn({
            x: r.x * Z,
            y: r.y * Z,
            vx: -r.vx * 3,
            vy: -r.vy * 3,
            life: 0.3,
            size: 1,
            color: r.color,
            glow: !0,
            drag: 3,
          }),
        t.lights.push({
          x: r.x * Z - this.camX,
          y: r.y * Z - this.camY,
          r: 26,
          color: r.color,
          a: 0.8,
          z: HH,
        }),
        t.inDome(r.x, r.y + 0.4))
      ) {
        (this.shots.splice(n, 1),
          t.particles.burst(r.x * Z, r.y * Z, 10, [`#f5d66b`, `#fff4c8`], 50));
        continue;
      }
      let i = Math.hypot(r.x - t.me.x, r.y - (t.me.y - 0.4)) < r.r;
      if (i || r.life <= 0 || this.solid(r.x, r.y + 0.3)) {
        if ((this.shots.splice(n, 1), i && t.shieldTurns(-r.vx, -r.vy)))
          continue;
        (t.particles.burst(r.x * Z, r.y * Z, 12, [r.color, r.core], 60),
          r.look?.impact && this.fx.add(r.look.impact, r.x, r.y),
          i &&
            (r.mana &&
              ((t.mana = Math.max(0, t.mana - r.dmg * 2)),
              t.floater(
                t.me.x * Z,
                t.me.y * Z - 30,
                `Mana burned`,
                `#8ab4ff`,
                !1,
              )),
            r.slow && this.addChill(1),
            this.hitMe(r.dmg),
            r.onHit?.()));
      }
    }
  }
  updateTele(e) {
    for (let t = this.tele.length - 1; t >= 0; t--) {
      let n = this.tele[t];
      if (((n.t += e), n.t >= n.dur)) {
        if ((this.tele.splice(t, 1), n.look?.impact)) {
          let e = rA(n.shape);
          this.fx.add(n.look.impact, e.x, e.y);
        }
        n.land?.();
      }
    }
  }
  updateBeams(e) {
    let t = this.g;
    for (let n = this.beams.length - 1; n >= 0; n--) {
      let r = this.beams[n];
      r.t += e;
      let i = r.t - r.wind;
      if (i > r.hold) {
        this.beams.splice(n, 1);
        continue;
      }
      if (i < 0 || r.hit) continue;
      let a = hp(r.shape, r.turn, r.hold > 0 ? i / r.hold : 1);
      if (this.meIn(a) && !t.meDoc?.dead) {
        r.hit = !0;
        let e =
          a.t === `line`
            ? { x: a.x0, y: a.y0 }
            : a.t === `cone`
              ? { x: a.x, y: a.y }
              : null;
        if (e && t.shieldTurns(e.x - t.me.x, e.y - t.me.y)) continue;
        (this.hitMe(r.dmg, { heavy: r.dmg >= this.maxHp() * 0.2 }),
          r.onHit?.());
      }
    }
  }
  updateLobs(e) {
    for (let t = this.lobs.length - 1; t >= 0; t--) {
      let n = this.lobs[t];
      ((n.t += e), n.t >= n.dur && (this.lobs.splice(t, 1), n.land?.()));
    }
  }
  updateZones(e) {
    let t = this.maxHp();
    for (let n = this.zones.length - 1; n >= 0; n--) {
      let r = this.zones[n];
      if (this.time >= r.until) {
        this.zones.splice(n, 1);
        continue;
      }
      r.dps > 0 && this.meIn(r.shape)
        ? ((r.tick += e),
          r.tick >= 0.5 && ((r.tick -= 0.5), this.hitMe(t * r.dps * 0.5)))
        : (r.tick = Math.min(r.tick, 0.45));
    }
  }
  updateHazards(e) {
    let t = this.g;
    if (!t.meDoc || t.meDoc.dead) return;
    let n = this.tile(Math.floor(t.me.x), Math.floor(t.me.y + 0.1)),
      r = this.maxHp(),
      i = this.f.theme;
    (n === Ao.SHALLOW && i === `rime`
      ? ((this.ice = this.hosted ? Math.min(2.99, this.ice + e) : this.ice + e),
        this.ice >= 3 &&
          ((this.ice = 0),
          this.hazardFx(`ice`),
          this.addChill(3),
          this.hitMe(r * 0.15, { heavy: !0 })))
      : (this.ice = Math.max(0, this.ice - e * 2)),
      n === Ao.SHALLOW &&
        i === `ember` &&
        (this.hitMe(r * 0.02 * e),
        Math.random() < e * 6 &&
          t.particles.spawn({
            x: t.me.x * Z + (Math.random() - 0.5) * 8,
            y: t.me.y * Z,
            vz: 20,
            life: 0.4,
            size: 1,
            color: `#ff9a2a`,
            glow: !0,
          })),
      i === `folly` &&
        !this.hosted &&
        ((this.wardT += e),
        this.wardT >= 4 &&
          ((this.wardT = 0),
          n === Ao.SHALLOW && (this.hazardFx(`ward`), this.hitMe(r * 0.06)))));
  }
  hazardFx(e) {
    let t = this.g;
    e === `ice`
      ? ((this.ice = 0),
        t.particles.burst(
          t.me.x * Z,
          t.me.y * Z,
          24,
          [`#ffffff`, `#9fe8ff`, `#2a4a6a`],
          60,
        ),
        q.sfx(`hurt`, 0.4),
        t.floater(
          t.me.x * Z,
          t.me.y * Z - 32,
          `The ice gives way!`,
          `#bff0ff`,
          !0,
        ))
      : e === `ward` &&
        t.floater(
          t.me.x * Z,
          t.me.y * Z - 32,
          `The ward pulses`,
          `#e0b64a`,
          !1,
        );
  }
  updateWalkers(e) {
    let t = this.g;
    for (let n = this.walkers.length - 1; n >= 0; n--) {
      let r = this.walkers[n];
      if (((r.t += e), r.safe)) {
        r.t > 0.6 && this.walkers.splice(n, 1);
        continue;
      }
      if (r.t < 1.2) continue;
      let i = Math.floor(r.x),
        a = Math.floor(r.y),
        o = this.f,
        s = this.home[a * o.w + i],
        c = i,
        l = a;
      for (let [e, t] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        let n = this.home[(a + t) * o.w + (i + e)];
        n >= 0 && (s < 0 || n < s) && ((s = n), (c = i + e), (l = a + t));
      }
      let u = c + 0.5,
        d = l + 0.5,
        f = u - r.x,
        p = d - r.y,
        m = Math.hypot(f, p),
        h = 2.6 * e;
      (m > 0.01 &&
        ((r.x += (f / m) * Math.min(h, m)),
        (r.y += (p / m) * Math.min(h, m)),
        (r.dir = Math.abs(f) > Math.abs(p) ? (f > 0 ? 2 : 3) : p > 0 ? 0 : 1)),
        (r.anim += e * 8),
        s <= 1 &&
          ((r.safe = !0),
          (r.t = 0),
          t.particles.burst(
            r.x * Z,
            r.y * Z - 10,
            20,
            [`#7ef9ff`, `#ffffff`],
            50,
          )));
    }
  }
  updateChannel(e) {
    let t = this.channel,
      n = this.g;
    if (t) {
      if (n.me.moving || n.meDoc?.dead) {
        ((this.channel = null),
          n.floater(n.me.x * Z, n.me.y * Z - 36, `Interrupted`, `#ff9a8a`, !1));
        return;
      }
      if (t.clear && this.enemyWithin(t.x, t.y, t.clear)) {
        ((this.channel = null),
          n.floater(
            n.me.x * Z,
            n.me.y * Z - 36,
            `Not with enemies this close`,
            `#ff9a8a`,
            !1,
          ));
        return;
      }
      if (((t.t += e), Math.random() < e * 20)) {
        let e = Math.random() * Math.PI * 2;
        n.particles.spawn({
          x: n.me.x * Z + Math.cos(e) * 9,
          y: n.me.y * Z + Math.sin(e) * 3,
          z: 1,
          vz: 30,
          life: 0.7,
          size: 1,
          color: `#7ef9ff`,
          glow: !0,
        });
      }
      t.t >= t.dur && ((this.channel = null), t.done());
    }
  }
  startChannel(e, t, n, r, i, a) {
    if (a && this.enemyWithin(n, r, a)) {
      this.g.floater(
        this.g.me.x * Z,
        this.g.me.y * Z - 36,
        `Not with enemies this close`,
        `#ff9a8a`,
        !1,
      );
      return;
    }
    ((this.channel = { label: e, t: 0, dur: t, x: n, y: r, done: i, clear: a }),
      q.sfx(`click`, 0.5));
  }
  channelAt(e, t, n, r, i) {
    this.startChannel(e, t, n, r, i);
  }
  openThing(e, t, n) {
    let r = this.g,
      i = this.run.floor,
      a = e === `free` || e === `lost` ? null : ks(i, e, t);
    (a && !this.run.opened.includes(a) && this.run.opened.push(a),
      r.api.dungeon
        .open(i, e, t)
        .then((e) => {
          e && (e.shards && (this.run.shards = { ...e.shards }), n?.(e));
        })
        .catch((e) => {
          (a && (this.run.opened = this.run.opened.filter((e) => e !== a)),
            r.api.dungeon.toast(
              e instanceof Error ? e.message : String(e),
              `#ff7a8a`,
            ));
        }));
  }
  findTarget() {
    let e = this.g,
      t = e.me,
      n = this.f,
      r = null,
      i = 1 / 0,
      a = (e, n, a, o, s) => {
        let c = Math.hypot(n - t.x, a - t.y);
        c <= o && c < i && ((i = c), (r = { label: e, x: n, y: a, use: s }));
      };
    if (this.boss?.engaged)
      for (let e of this.boss.targets())
        a(e.label, e.x, e.y, e.reach ?? 1.8, e.use);
    a(
      this.run.floor === 0 ? `Climb out` : `Return to the surface`,
      n.entry.x + 0.5,
      n.entry.y + 0.8,
      1.3,
      () => void this.leave(),
    );
    for (let r of n.props) {
      let i = r.x + 0.5,
        o = r.y + 1;
      switch (r.kind) {
        case `waystone`:
          r.room !== 0 &&
            !this.isOpen(`waystone`, String(r.room)) &&
            a(`Wake the waystone`, i, o, 1.9, () =>
              this.startChannel(
                `Waking the waystone`,
                ko.waystoneChannelSeconds,
                i,
                o,
                () => this.wake(r),
                ko.waystoneClearRadius,
              ),
            );
          break;
        case `cache`:
          this.isOpen(`cache`, `${r.x},${r.y}`) ||
            a(`Open the cache`, i, o, 1.5, () =>
              this.openThing(`cache`, `${r.x},${r.y}`, (t) => {
                (q.sfx(`chime`, 0.6),
                  t.loot?.length && e.api.dungeon.loot(t.loot));
              }),
            );
          break;
        case `lore`:
          a(`Read`, i, o, 1.7, () => this.read(r));
          break;
        case `pylon`: {
          if (
            !r.tone ||
            n.rooms[r.room]?.kind !== `pylon` ||
            this.isOpen(`pylon`, `${r.x},${r.y}`)
          )
            break;
          let s = wo[r.tone];
          if (Cs[e.school] === s) break;
          let c = this.run.shards[s] > 0;
          a(
            c ? `Put out the lamp (a ${s} shard)` : `Needs a ${s} Tone Shard`,
            i,
            o,
            1.9,
            () => {
              if (!c)
                return e.floater(
                  t.x * Z,
                  t.y * Z - 36,
                  `Only ${s} puts out a ${r.tone} lamp`,
                  Eo[s],
                  !1,
                );
              this.startChannel(
                `Putting out the lamp`,
                ko.lockChannelSeconds,
                i,
                o,
                () => this.douse(r),
              );
            },
          );
          break;
        }
        case `f_chained`: {
          let e = ys(n).find((e) => e.id === `${n.index}:${r.x},${r.y}`);
          e &&
            !this.run.freed.includes(e.id) &&
            a(`Unshackle`, i, o + 0.3, 1.6, () =>
              this.startChannel(
                `Unshackling`,
                3,
                i,
                o,
                () => this.free(e, r.x + 0.5, r.y + 1.4),
                4,
              ),
            );
          break;
        }
      }
    }
    for (let r of n.locks) {
      if (this.isOpen(`lock`, String(r.room))) continue;
      let i = r.x + r.w / 2,
        o = r.y + r.h / 2;
      if (r.tone === `seal`) {
        let s = js(n, this.run.opened);
        a(
          s ? `Break the seal` : `The seal (four lamps still burn)`,
          i,
          o,
          2,
          () => {
            if (!s)
              return e.floater(
                t.x * Z,
                t.y * Z - 36,
                `The seal holds while any lamp burns`,
                `#e0b64a`,
                !1,
              );
            this.startChannel(
              `Breaking the seal`,
              ko.lockChannelSeconds * 2,
              i,
              o,
              () => this.openLock(r.room),
            );
          },
        );
      } else {
        let n = is(r.tone, [e.school], this.run.shards);
        a(
          n === `spell`
            ? `Open the ${r.tone} lock`
            : n === `shard`
              ? `Open the ${r.tone} lock (a shard)`
              : `A ${r.tone} lock`,
          i,
          o,
          2,
          () => {
            if (!n)
              return e.floater(
                t.x * Z,
                t.y * Z - 36,
                `You need a ${r.tone} Tone Shard`,
                Eo[r.tone],
                !1,
              );
            this.startChannel(
              `Opening the ${r.tone} lock`,
              ko.lockChannelSeconds,
              i,
              o,
              () => this.openLock(r.room),
            );
          },
        );
      }
    }
    this.target = r;
    for (let r of n.props)
      if (
        r.kind === `toneshard` &&
        r.tone &&
        !this.isOpen(`shard`, `${r.x},${r.y}`) &&
        Math.hypot(r.x + 0.5 - t.x, r.y + 0.8 - t.y) < 0.9
      ) {
        let n = r.tone;
        (this.openThing(`shard`, `${r.x},${r.y}`),
          this.run.shards[n]++,
          e.floater(t.x * Z, t.y * Z - 36, `${UH(n)} Tone Shard`, Eo[n], !0),
          q.sfx(`chime`, 0.6));
      }
  }
  prompt() {
    return this.channel ? null : this.target;
  }
  interact() {
    this.channel || this.busy || this.target?.use();
  }
  wake(e) {
    (this.openThing(`waystone`, String(e.room)),
      this.f.rooms[e.room]?.kind === `waystone` &&
        !this.hosted &&
        (this.run.called++, this.later(1.2, () => this.surge(!0))),
      (this.riseAt = { x: e.x + 0.5, y: e.y + 1.7 }),
      (this.wokeFx = this.time),
      this.g.lightPillar((e.x + 0.5) * Z, (e.y + 1) * Z, `#7ef9ff`),
      (this.g.banner = {
        title: `The waystone wakes`,
        subtitle: `You'll rise here if you fall.`,
        t0: this.g.real,
        dur: 2.6,
        color: `#7ef9ff`,
      }),
      q.sfx(`chime`, 0.8));
  }
  douse(e) {
    (this.openThing(`pylon`, `${e.x},${e.y}`, () => {
      let t = [...this.mobs.values()].find((t) => t.pylon === `${e.x},${e.y}`);
      (t &&
        !t.m.doc.dead &&
        ((t.m.doc.dead = !0), (t.m.dying = 0.5), this.g.monsterDeath(t.m)),
        this.g.floater(
          (e.x + 0.5) * Z,
          e.y * Z - 20,
          `The lamp goes out`,
          Eo[e.tone ?? `ember`],
          !0,
        ));
    }),
      (this.run.shards[wo[e.tone]] = Math.max(
        0,
        this.run.shards[wo[e.tone]] - 1,
      )));
  }
  openLock(e) {
    let t = this.g,
      n = this.f.locks.find((t) => t.room === e);
    (this.openThing(`lock`, String(e), () => {
      (n &&
        t.particles.burst(
          (n.x + n.w / 2) * Z,
          (n.y + n.h / 2) * Z,
          40,
          n.tone === `seal` ? [`#ffd166`, `#ffffff`] : [Eo[n.tone], `#ffffff`],
          90,
        ),
        q.sfx(`chime`, 0.7),
        (this.flowFrom = -1),
        (this.home = this.bfs(this.f.entry.x, this.f.entry.y)));
    }),
      n &&
        n.tone !== `seal` &&
        is(n.tone, [t.school], this.run.shards) === `shard` &&
        this.run.shards[n.tone]--,
      (this.flowFrom = -1));
  }
  read(e) {
    let t = Ms[e.text ?? ``];
    t &&
      (this.isOpen(`lore`, `${e.x},${e.y}`) ||
        this.openThing(`lore`, `${e.x},${e.y}`),
      this.g.story?.chat(
        {
          name: t.title,
          title: this.d.name,
          color: Mo[this.f.theme].light,
          art: `note:candle`,
        },
        t.lines,
      ));
  }
  free(e, t, n) {
    (this.openThing(`free`, e.id, (e) =>
      this.cheer(e.names ?? [], [{ x: t, y: n }]),
    ),
      this.run.freed.push(e.id));
  }
  breakCrystal(e, t, n) {
    let r = this.g,
      i = ys(this.f).filter(
        (t) =>
          t.how === `crystal` &&
          t.crystal === e &&
          !this.run.freed.includes(t.id) &&
          !this.run.lost.includes(t.id),
      );
    for (let e of i) this.run.freed.push(e.id);
    (r.particles.burst(
      t * Z,
      n * Z - 20,
      60,
      [`#b01a2a`, `#ffffff`, `#5a0a1a`, `#e0484e`],
      110,
    ),
      (r.shake = Math.max(r.shake, 5)),
      q.sfx(`boom`, 0.6),
      this.openThing(`crystal`, e, (e) =>
        this.cheer(
          e.names ?? [],
          i.map((e) => ({ x: e.x + 0.5, y: e.y + 0.9 })),
        ),
      ));
  }
  cheer(e, t) {
    let n = this.g;
    (t.forEach((t, r) => {
      let i = e[r] ?? ``,
        a = r % 3 == 2 ? `miner` : `refugee`;
      (this.walkers.push({
        x: t.x,
        y: t.y,
        name: i,
        t: 0,
        sheet: Tg(a),
        art: oz(a, r),
        dir: 0,
        anim: 0,
        safe: !1,
      }),
        n.particles.burst(
          t.x * Z,
          t.y * Z - 10,
          18,
          [`#7ef9ff`, `#ffffff`, `#ffd166`],
          50,
        ));
    }),
      e.length &&
        ((n.banner = {
          title:
            e.length === 1
              ? `One of the Taken is free`
              : `${e.length} of the Taken are free`,
          subtitle: e.join(` · `),
          t0: n.real,
          dur: 3.6,
          color: `#ffd166`,
        }),
        q.sfx(`levelup`, 0.5)));
  }
  checkStairs() {
    let e = this.g;
    if (this.busy || this.f.exit.kind !== `stair`) return;
    let t = Math.floor(e.me.x),
      n = Math.floor(e.me.y);
    if (this.tile(t, n) !== Ao.DOWN) return;
    let r = Os(this.f, {
      floor: this.run.floor,
      bosses: this.run.bosses,
      opened: this.run.opened,
    });
    if (r) {
      this.time - this.stairMsgT > 2 &&
        ((this.stairMsgT = this.time),
        e.floater(e.me.x * Z, e.me.y * Z - 36, r, `#ffd166`, !1));
      return;
    }
    ((this.busy = !0),
      e.fadeTo(e.hdActive ? 1 : 0.3),
      q.sfx(`click`, 0.6),
      e.api.dungeon
        .descend()
        .then((e) => {
          e &&
            !this.hosted &&
            ((this.run.killed = []),
            (this.run.floorAt = Date.now()),
            (this.run.called = 0),
            (this.run.surged = []),
            this.load(e.floor));
        })
        .catch((t) =>
          e.api.dungeon.toast(
            t instanceof Error ? t.message : String(t),
            `#ff7a8a`,
          ),
        )
        .finally(() => {
          ((this.busy = !1), e.fadeTo(0));
        }));
  }
  bossDown(e, t, n) {
    let r = this.g;
    this.run.bosses.includes(e) || this.run.bosses.push(e);
    let i = Xo[e];
    (this.say(Go[e]?.name ?? e, i.defeat, 8),
      (r.slowUntil = r.real + 1.5),
      (r.banner = {
        title: `VICTORY`,
        subtitle: `${Go[e]?.name ?? e} falls`,
        t0: r.real,
        dur: 4,
        color: `#ffd166`,
      }),
      q.sfx(`levelup`, 0.9));
    let a = i.room === `boss` && i.floor === this.d.floors.length;
    r.api.dungeon.boss(this.run.floor, e).then((e) => {
      e &&
        (r.floater(t * Z, n * Z - 40, `+${e.xp} XP`, `#c49bff`, !0),
        e.loot.length && r.api.dungeon.loot(e.loot),
        e.note &&
          (r.banner = {
            title: `A ward-note breaks`,
            subtitle: `Lillith's ${e.note} note: ${e.notes} of 4${e.notes >= 4 ? `. The road to the Folly is open.` : ``}`,
            t0: r.real + 4,
            dur: 5,
            color: Eo[e.note],
          }),
        a &&
          ((this.cleared = !0),
          (this.clearedLoot = e.loot),
          (this.clearNote = { note: e.note, notes: e.notes, story: e.story }),
          window.setTimeout(() => this.showClear(), 5500)));
    });
  }
  showClear() {
    let e = this.f,
      t = ys(e).filter((e) => e.how === `thread`),
      n = t.length > 0 && t.every((e) => this.run.freed.includes(e.id));
    this.g.api.dungeon.cleared({
      dungeon: this.run.dungeon,
      diff: this.run.diff,
      seconds: Math.round(this.g.real - this.startedReal),
      xp: this.run.xp,
      loot: this.clearedLoot,
      note: this.clearNote.note,
      notes: this.clearNote.notes,
      names: [...this.run.names],
      lost: this.run.lost.length,
      rises: this.run.rises,
      story: this.clearNote.story,
      parting:
        this.run.dungeon === `folly`
          ? (this.parting ?? (n ? `You took them. All of them.` : null))
          : null,
    });
  }
  async leave() {
    if (this.over) return;
    this.over = !0;
    let e = this.g;
    if ((e.fadeTo(1), this.hosted)) {
      await e.api.dungeon.leave().catch(() => e.endDungeon());
      return;
    }
    try {
      await e.api.dungeon.leave();
    } finally {
      e.endDungeon();
    }
  }
  hostFx(e) {
    let t = this.g,
      n = this.bosses.find((e) => e.engaged && !e.done) ?? null;
    for (let r of e) {
      let e =
          r.boss !== void 0 && r.kind ? this.hostBoss(r.boss, r.kind) : null,
        i = r.look && e ? e.hostLook(r.look) : void 0;
      switch (r.t) {
        case `tele`:
          r.shape &&
            this.telegraph(
              r.shape,
              r.dur ?? 1,
              r.color ?? `#ff5a4a`,
              void 0,
              i,
            );
          break;
        case `zone`:
          if (!r.shape) break;
          this.zone(r.shape, r.dur ?? 1, r.dps ?? 0, r.color ?? `#2f9c78`, {
            slow: r.slow,
            label: r.label,
            look: i,
          });
          break;
        case `unzone`:
          this.zones = this.zones.filter((e) => e.label !== r.label);
          break;
        case `say`:
          r.text && this.say(r.who ?? ``, r.text, 6);
          break;
        case `boss`:
          e && e.hostState(r);
          break;
        case `broken`:
          ((t.banner = {
            title: `BROKEN`,
            subtitle: `${r.text ?? `The cast`} breaks`,
            t0: t.real,
            dur: 2.5,
            color: `#7ef9ff`,
          }),
            q.sfx(`chime`, 0.9),
            (t.flash = { color: `#ffffff`, a: 0.35 }));
          break;
        case `reset`:
          ((this.tele = []),
            (this.zones = []),
            (this.beams = []),
            (this.lobs = []),
            e && e.hostState({ engaged: !1 }));
          break;
        case `down`:
          (e &&
            !e.done &&
            ((e.done = !0),
            e.onEnd(),
            (this.zones = this.zones.filter(
              (t) => !e.inRoom(t.shape.x ?? -99, t.shape.y ?? -99),
            ))),
            (this.tele = []));
          break;
        case `ev`:
          e ? e.hostEvent(r) : r.name === `boom` && q.sfx(`boom`, 0.4);
          break;
        case `surge`: {
          let [e = this.surgeN, n = 0, i = 0] = r.args ?? [];
          ((this.surgeN = Math.max(this.surgeN, e + 1)),
            i ||
              (this.tideSurges++,
              (this.tide = Math.max(
                this.tide,
                this.tideSurges * this.surgeEvery(),
              ))),
            (t.banner = {
              title: i ? `The Hollow notices the light` : `The Tide rises`,
              subtitle: `Surge ${e + 1}: ${n} climb out of the rift`,
              t0: t.real,
              dur: 2.6,
              color: `#ff5c6c`,
            }),
            q.sfx(`boom`, 0.5));
          break;
        }
        case `affix`:
          r.boss !== void 0 &&
            r.name &&
            r.name in uA &&
            this.hostAffixes.set(`zm:${r.boss}`, r.name);
          break;
        case `burst`:
          this.burstFx(
            r.x ?? 0,
            r.y ?? 0,
            r.args?.[0] ?? 1.5,
            r.color ?? `#ff7a1a`,
          );
          break;
        case `husk`:
          if (r.boss === void 0) break;
          r.dur
            ? this.hostRisers.set(`zm:${r.boss}`, this.time + r.dur)
            : this.hostRisers.delete(`zm:${r.boss}`);
          break;
        case `hazard`:
          this.isMe(r.who) &&
            (this.hazardFx(r.name ?? ``),
            r.name === `plunge` && n?.hostEvent({ name: `plunge` }));
          break;
        case `chill`:
          this.isMe(r.who) && this.addChill(r.args?.[0] ?? 1);
          break;
        case `frozen`:
          this.isMe(r.who) && this.freeze(r.args?.[0] ?? 2);
          break;
        case `heat`:
          r.boss !== void 0 &&
            this.hostHeat.set(`zm:${r.boss}`, this.time - (r.args?.[0] ?? 0));
          break;
        case `hatch`: {
          this.hostHeat.delete(`zm:${r.boss}`);
          let e = r.x ?? 0,
            i = r.y ?? 0;
          (t.particles.burst(
            e * Z,
            i * Z - 6,
            30,
            [`#ff9a2a`, `#ffd166`, `#3a2a2a`],
            80,
          ),
            q.sfx(`boom`, 0.4),
            n?.hostEvent({ name: `hatch`, x: e, y: i }));
          break;
        }
        case `risen`: {
          let e = `zm:${r.boss}`;
          this.hostRisers.delete(e);
          let n = t.monsters.get(e);
          n &&
            ((n.rise = 1.1),
            t.floater(
              n.rx * Z,
              n.ry * Z - 24,
              `It stands up again`,
              `#e0484e`,
              !1,
            ),
            q.sfx(`hurt`, 0.25));
          break;
        }
      }
    }
    this.boss = this.bosses.find((e) => e.engaged && !e.done) ?? null;
  }
  hostMob(e) {
    let t = this.g.monsters.get(e);
    if (!t) return null;
    let n = this.hostMobs.get(e);
    if (n && n.m === t) return n;
    let r = VH(t.doc.kind),
      i = Go[r],
      a = {
        id: e,
        m: t,
        kind: r,
        tier: i?.tier ?? `normal`,
        level: t.doc.lvl ?? 1,
        dmg: 0,
        speed: i?.move.speed ?? 1,
        aggro: 0,
        range: i?.move.attackRange ?? 1,
        cd: i?.move.attackCd ?? 1600,
        spawn: null,
        pack: -1,
        room: this.roomAt(t.rx, t.ry)?.index ?? -1,
        home: { x: t.rx, y: t.ry },
        state: `hunt`,
        next: 0,
        wind: 0,
        ranged: !1,
        object: !!i?.object,
        husk: qo(r),
        risesAt: 0,
        boss: null,
        slowUntil: 0,
        kit: ap(r, i?.move.attackRange ?? 1),
        nextSpecial: 0,
        lastAtk: 0,
        volleyAt: 0,
        heat: 0,
        reported: !0,
      };
    return (this.hostMobs.set(e, a), a);
  }
  isMe(e) {
    return !!e && e === String(this.g.meDoc?._id ?? ``);
  }
  hostBoss(e, t) {
    let n = `zm:${e}`,
      r = this.bosses.find((e) => e.mob.id === n);
    if (r) return r;
    let i = this.g.monsters.get(n),
      a = this.f.spawns.find((e) => e.kind === t);
    if (!i || !a || !Xo[t]) return null;
    let o = Go[t],
      s = {
        id: n,
        m: i,
        kind: t,
        tier: a.tier,
        level: a.level,
        dmg: 0,
        speed: o?.move.speed ?? 1,
        aggro: 0,
        range: o?.move.attackRange ?? 1,
        cd: o?.move.attackCd ?? 1600,
        spawn: this.f.spawns.indexOf(a),
        pack: -1,
        room: a.room,
        home: { x: a.x, y: a.y },
        state: `hunt`,
        next: 0,
        wind: 0,
        ranged: !1,
        object: !1,
        husk: qo(t),
        risesAt: 0,
        boss: null,
        slowUntil: 0,
        kit: ap(t, o?.move.attackRange ?? 1),
        nextSpecial: 0,
        lastAtk: 0,
        volleyAt: 0,
        heat: 0,
        reported: !0,
      },
      c = zH(this, s);
    return ((s.boss = c), (c.hosted = !0), this.bosses.push(c), c);
  }
  paid(e) {
    let t = this.g;
    if (e.floor !== this.run.floor || this.over) return;
    (e.spawn >= 0 &&
      !this.run.killed.includes(e.spawn) &&
      this.run.killed.push(e.spawn),
      e.surge &&
        t.floater(e.x * Z, e.y * Z - 32, `+${e.surge.xp} XP`, `#c49bff`, !1));
    let n = e.kill;
    n &&
      (t.floater(e.x * Z, e.y * Z - 32, `+${n.xp} XP`, `#c49bff`, !1),
      n.shard &&
        (this.run.shards[n.shard]++,
        t.floater(
          e.x * Z,
          e.y * Z - 44,
          `${UH(n.shard)} Tone Shard`,
          Eo[n.shard],
          !0,
        ),
        q.sfx(`chime`, 0.5)),
      n.loot.length && t.api.dungeon.loot(n.loot));
    let r = e.boss;
    if (r) {
      this.run.bosses.includes(e.kind) || this.run.bosses.push(e.kind);
      let n = Xo[e.kind];
      (this.say(Go[e.kind]?.name ?? e.kind, n.defeat, 8),
        (t.slowUntil = t.real + 1.5),
        (t.banner = {
          title: `VICTORY`,
          subtitle: `${Go[e.kind]?.name ?? e.kind} falls`,
          t0: t.real,
          dur: 4,
          color: `#ffd166`,
        }),
        q.sfx(`levelup`, 0.9),
        t.floater(e.x * Z, e.y * Z - 40, `+${r.xp} XP`, `#c49bff`, !0),
        r.loot.length && t.api.dungeon.loot(r.loot),
        r.note &&
          (t.banner = {
            title: `A ward-note breaks`,
            subtitle: `Lillith's ${r.note} note: ${r.notes} of 4${r.notes >= 4 ? `. The road to the Folly is open.` : ``}`,
            t0: t.real + 4,
            dur: 5,
            color: Eo[r.note],
          }),
        r.cleared &&
          ((this.cleared = !0),
          (this.clearedLoot = r.loot),
          (this.clearNote = { note: r.note, notes: r.notes, story: r.story }),
          this.later(5.5, () => this.showClear())));
    }
  }
  dispose() {
    for (let e of [...this.g.monsters.keys()])
      e.startsWith(`d:`) && this.g.monsters.delete(e);
    this.mobs.clear();
  }
  camX = 0;
  camY = 0;
  phase() {
    return (this.g.real / 8) % 1;
  }
  darkness() {
    return this.dark ? 0.78 : this.f.theme === `ember` ? 0.42 : 0.5;
  }
  hdGround() {
    return this.ground;
  }
  hdReady() {
    return this.ground.every(Boolean) && this.paintQ.length === 0;
  }
  groundPhase() {
    return this.hdReady() ? Math.floor(this.phase() * 4 * 4) % 4 : 0;
  }
  drawGround(e, t, n, r, i, a = !0, o) {
    ((this.camX = t), (this.camY = n));
    let s = this.f;
    if (a) {
      let r = this.ground[this.groundPhase()] ?? this.ground[0];
      e.drawImage(r, -t, -n);
    }
    let c = this.phase(),
      l = Math.max(0, Math.floor(t / Z) - 1),
      u = Math.max(0, Math.floor(n / Z) - 1),
      d = Math.min(s.w - 1, Math.ceil((t + r) / Z) + 1),
      f = Math.min(s.h - 1, Math.ceil((n + i) / Z) + 2);
    for (let r = u; r <= f; r++)
      for (let i = l; i <= d; i++) {
        let o = s.tiles[r * s.w + i];
        if (
          ((o === Ao.DOWN || o === Ao.UP) &&
            e.drawImage(O_(s.theme, o === Ao.DOWN), i * Z - t, r * Z - n),
          o === Ao.LOCK)
        ) {
          let o = this.lockAt(i, r),
            s = !!o && this.isOpen(`lock`, String(o.room)),
            l = (o?.w ?? 1) > 1;
          !a && l && !s
            ? e.drawImage(
                M_(o?.tone ?? `seal`, Math.floor(c * 8) / 8, i),
                i * Z - t,
                r * Z - n,
              )
            : e.drawImage(
                k_(o?.tone ?? `seal`, s, Math.floor(c * 8) / 8, i, l),
                i * Z - t,
                r * Z - n,
              );
        }
        o === Ao.SHALLOW &&
          s.theme === `rime` &&
          this.ice > 0.5 &&
          i === Math.floor(this.g.me.x) &&
          r === Math.floor(this.g.me.y + 0.1) &&
          e.drawImage(
            Ly(Math.min(3, Math.floor(this.ice))),
            i * Z - t,
            r * Z - n,
          );
      }
    let p = Math.floor(c * 8);
    for (let a of s.props) {
      let o = ry[a.kind];
      if (!o || o.layer !== `decal`) continue;
      let s = Uy(a);
      if (s.x < t - 48 || s.x > t + r + 48 || s.y < n - 48 || s.y > n + i + 48)
        continue;
      let c = ay(a.kind, p + (a.variant ?? 0));
      e.drawImage(c.c, Math.round(s.x - c.ax - t), Math.round(s.y - c.ay - n));
    }
    o
      ? this.boss?.drawFloorHd({ ground: e, glow: o }, t, n)
      : this.boss?.drawFloor(e, t, n);
    for (let r of this.zones)
      r.look?.rim && r.look.ramp
        ? nA(
            e,
            r.shape,
            r.look.rim,
            r.look.ramp,
            this.time,
            t,
            n,
            Math.min(1, (r.until - this.time) / 0.6),
            r.look.frames,
          )
        : this.drawShape(
            e,
            r.shape,
            r.color,
            0.22 + 0.08 * Math.sin(this.time * 6),
            t,
            n,
            0.7,
          );
    for (let r of this.tele) {
      let i = r.t / r.dur;
      if (r.look?.tele?.length || (r.look?.rim && r.look.ramp)) {
        if (
          (r.look.rim &&
            r.look.ramp &&
            eA(e, r.shape, r.look.rim, r.look.ramp, i, this.time, t, n),
          r.look.tele?.length)
        ) {
          let a = rA(r.shape);
          Bk(e, Rk(r.look.tele, i), a.x * Z - t, a.y * Z - n);
        }
        continue;
      }
      (this.drawShape(
        e,
        r.shape,
        r.color,
        0.14 + 0.2 * Math.abs(Math.sin(this.time * 10)),
        t,
        n,
        1,
      ),
        this.drawShape(e, qae(r.shape, i), r.color, 0.3, t, n, 0));
    }
    for (let r of this.beams)
      r.t >= r.wind ||
        (r.look?.rim && r.look.ramp
          ? eA(
              e,
              r.shape,
              r.look.rim,
              r.look.ramp,
              r.t / r.wind,
              this.time,
              t,
              n,
            )
          : this.drawShape(
              e,
              r.shape,
              r.color,
              0.14 + 0.2 * Math.abs(Math.sin(this.time * 10)),
              t,
              n,
              1,
            ));
    this.boss?.drawGround(e, t, n);
    let m = [...this.mobs.values()]
      .filter((e) => e.m.doc.dead && e.risesAt)
      .map((e) => ({ m: e.m, at: e.risesAt }));
    for (let [e, t] of this.hostRisers) {
      let n = this.g.monsters.get(e);
      n?.doc.dead && m.push({ m: n, at: t });
    }
    for (let { m: r, at: i } of m) {
      let a = i - this.time,
        o = Wae(3 - Math.floor(a / 6), 0, 3);
      e.drawImage(
        Iy(o),
        Math.round(r.rx * Z - 12 - t),
        Math.round(r.ry * Z - 6 - n),
      );
    }
    if (!a)
      for (let r of this.lobs) {
        let { k: i, gx: a, gy: o } = this.lobAt(r);
        ((e.fillStyle = `rgba(0,0,0,0.3)`),
          e.beginPath(),
          e.ellipse(a - t, o - n, 3 + 2 * i, 1.5 + i, 0, 0, Math.PI * 2),
          e.fill());
      }
  }
  lobAt(e) {
    let t = Math.min(1, e.t / e.dur);
    return {
      k: t,
      gx: (e.x0 + (e.x1 - e.x0) * t) * Z,
      gy: (e.y0 + (e.y1 - e.y0) * t) * Z,
      up: e.h * 4 * t * (1 - t) * Z,
    };
  }
  drawShape(e, t, n, r, i, a, o) {
    switch (
      (e.save(),
      (e.globalAlpha = r),
      (e.fillStyle = n),
      (e.strokeStyle = n),
      (e.lineWidth = 1),
      e.beginPath(),
      t.t)
    ) {
      case `circle`:
        e.ellipse(
          t.x * Z - i,
          t.y * Z - a,
          Math.max(0.5, t.r * Z),
          Math.max(0.5, (t.r * Z) / 1.1),
          0,
          0,
          Math.PI * 2,
        );
        break;
      case `ring`:
        (e.ellipse(
          t.x * Z - i,
          t.y * Z - a,
          t.r1 * Z,
          (t.r1 * Z) / 1.1,
          0,
          0,
          Math.PI * 2,
        ),
          e.ellipse(
            t.x * Z - i,
            t.y * Z - a,
            Math.max(0.5, t.r0 * Z),
            Math.max(0.5, (t.r0 * Z) / 1.1),
            0,
            0,
            Math.PI * 2,
            !0,
          ));
        break;
      case `line`: {
        let n = Math.atan2(t.y1 - t.y0, t.x1 - t.x0),
          r = (-Math.sin(n) * t.w) / 2,
          o = (Math.cos(n) * t.w) / 2;
        (e.moveTo((t.x0 + r) * Z - i, (t.y0 + o) * Z - a),
          e.lineTo((t.x1 + r) * Z - i, (t.y1 + o) * Z - a),
          e.lineTo((t.x1 - r) * Z - i, (t.y1 - o) * Z - a),
          e.lineTo((t.x0 - r) * Z - i, (t.y0 - o) * Z - a),
          e.closePath());
        break;
      }
      case `cone`:
        (e.moveTo(t.x * Z - i, t.y * Z - a),
          e.arc(
            t.x * Z - i,
            t.y * Z - a,
            t.r * Z,
            t.a - t.spread / 2,
            t.a + t.spread / 2,
          ),
          e.closePath());
        break;
      case `rect`:
        e.rect(t.x * Z - i, t.y * Z - a, t.w * Z, t.h * Z);
    }
    (e.fill(`evenodd`),
      o > 0 && ((e.globalAlpha = Math.min(1, r * 2.5) * o), e.stroke()),
      e.restore());
  }
  collect(e, t, n, r, i, a, o, s) {
    let c = this.g,
      l = this.f,
      u = this.phase(),
      d = Math.floor(u * 8),
      f = (e, t, i, a, o = 0.85, s = 12, l) =>
        c.lights.push({
          x: e - n,
          y: t - r,
          r: i,
          color: a,
          a: o,
          z: s,
          cast: l,
        }),
      p = new Set(this.run.freed.concat(this.run.lost));
    for (let c of l.props) {
      let m = ry[c.kind];
      if (m?.layer === `decal`) continue;
      let h = m ? Uy(c) : { x: c.x * Z + Z / 2, y: c.y * Z + Z };
      if (h.x < n - 64 || h.x > n + i + 64 || h.y < r - 32 || h.y > r + a + 80)
        continue;
      let g = `${l.index}:${c.x},${c.y}`;
      if (
        ((c.text === `siphoned` || c.kind === `f_chained`) && p.has(g)) ||
        (c.kind === ms.crystal && this.isOpen(`crystal`, `${c.x},${c.y}`)) ||
        (c.kind === `toneshard` && this.isOpen(`shard`, `${c.x},${c.y}`)) ||
        (c.kind === `pylon` && l.rooms[c.room]?.kind === `pylon`) ||
        (c.kind === `pylon` && l.rooms[c.room]?.kind === `boss`) ||
        (c.kind === `wardnote` &&
          this.run.bosses.includes(this.d.bosses[this.d.bosses.length - 1]))
      )
        continue;
      let _;
      if (m) _ = ay(c.kind, d + (c.variant ?? 0));
      else {
        let i =
          c.kind === `sconce`
            ? (this.sconces.find((e) => e.x === c.x + 0.5 && e.y === c.y + 1)
                ?.lit ?? !0)
            : c.kind === `waystone`
              ? c.room === 0 || this.isOpen(`waystone`, String(c.room))
              : void 0;
        if (
          ((_ = Ey(c.kind, { theme: l.theme, tone: c.tone, lit: i, frame: d })),
          c.kind === `sconce` &&
            i &&
            f(
              h.x,
              h.y - 12,
              64 * py(c.x * 7 + c.y, u, 0.15),
              Hae[l.theme],
              0.95,
              15,
              !0,
            ),
          c.kind === `waystone` &&
            f(
              h.x,
              h.y - 14,
              (i ? 6 : 1.5) * Z,
              i ? `#7ef9ff` : `#556070`,
              i ? 0.9 : 0.5,
              14,
              i,
            ),
          c.kind === `toneshard` &&
            c.tone &&
            f(h.x, h.y - 10, 2.5 * Z, vy[c.tone][1], 0.85, 10),
          c.kind === `wardnote` &&
            c.tone &&
            f(h.x, h.y - 14, 80, vy[c.tone][1], 0.85, 14),
          c.kind === `lore` && f(h.x, h.y - 8, 32, `#ffcf7a`, 0.7, 8),
          c.kind === `cache` && this.isOpen(`cache`, `${c.x},${c.y}`))
        ) {
          let i = _.c,
            a = Math.round(h.x - _.ax - n),
            o = Math.round(h.y - _.ay - r);
          e.push({
            y: h.y,
            x: h.x,
            box: [
              Math.max(_.ax, i.width - _.ax) + 1,
              _.ay + 2,
              i.height - _.ay + 2,
            ],
            draw: () => (
              (t.globalAlpha = 0.45),
              t.drawImage(i, a, o),
              (t.globalAlpha = 1)
            ),
          });
          continue;
        }
      }
      if (m?.light) {
        let e = m.light.flicker ? py(c.x * 31 + c.y, u, m.light.flicker) : 1;
        f(
          h.x + (m.light.dx ?? 0),
          h.y + m.light.dy,
          m.light.r * Z * e,
          m.light.color,
          0.8,
          Math.max(0, -m.light.dy),
          m.light.dy <= -6,
        );
      }
      let v = _.c,
        y = Math.round(h.x - _.ax - n),
        b = Math.round(h.y - _.ay - r),
        x = m?.layer === `wall` || c.kind === `sconce`,
        S = x ? h.y - Z : h.y,
        C = Math.max(_.ax, v.width - _.ax) + 1;
      if (!x) {
        e.push({
          y: S,
          x: h.x,
          box: [C, _.ay + 2, v.height - _.ay + 2],
          draw: () => t.drawImage(v, y, b),
        });
        continue;
      }
      if (
        (o && s ? s(Math.floor(h.x / Z), Math.floor((h.y - 1) / Z)) : 22) <= 0
      ) {
        o.drawImage(v, y, b);
        continue;
      }
      e.push({
        y: S,
        x: h.x,
        fy: h.y + 2,
        box: [C, _.ay + 4, Math.max(0, v.height - _.ay)],
        draw: () => t.drawImage(v, y, b),
      });
    }
    if (this.lavaLights.length)
      for (let e of this.lavaLights) {
        let t = e.x * Z + 8,
          o = e.y * Z + 8;
        t < n - 40 ||
          t > n + i + 40 ||
          o < r - 40 ||
          o > r + a + 40 ||
          f(
            t,
            o,
            2.2 * Z,
            `#ff7a1a`,
            0.3 + 0.12 * Math.sin(this.time * 2 + e.x),
            4,
          );
      }
    for (let i of this.walkers) {
      let a = i.x * Z,
        o = i.y * Z,
        s = i.art;
      (e.push({
        y: o,
        x: a,
        box: s ? gz(s) : Uae,
        draw: () => {
          if (
            ((t.globalAlpha = i.safe
              ? Math.max(0, 1 - i.t / 0.6)
              : Math.min(1, i.t * 2)),
            s)
          ) {
            (mz(t, s, a - n, o - r, {
              dir: i.dir,
              t: i.t < 1.2 ? i.t : i.anim / 8,
              moving: i.t >= 1.2 && !i.safe,
            }),
              (t.globalAlpha = 1));
            return;
          }
          let e = i.t < 1.2 ? 0 : 2 + (Math.floor(i.anim) % 4);
          (IR(t, i.sheet.frames[i.dir][e], a - n, o - r, 10, 26),
            (t.globalAlpha = 1));
        },
      }),
        f(a, o - 12, 26, `#ffd166`, 0.4, 12));
    }
    this.boss?.collect(e, t, n, r);
    for (let i of this.bosses) i !== this.boss && i.collectIdle(e, t, n, r);
  }
  collectLobs(e, t, n, r) {
    for (let i of this.lobs) {
      let { k: a, gx: o, gy: s, up: c } = this.lobAt(i),
        l = zk(i.frames, i.t, 12),
        u = Math.ceil(Math.hypot(l.width, l.height) / 2) + 1,
        d = i.spin
          ? Math.atan2(i.y1 - i.y0 - i.h * 4 * (1 - 2 * a), i.x1 - i.x0)
          : null;
      e.push({
        y: s,
        x: o,
        box: [u, c + u, Math.max(4, u - c)],
        draw: () =>
          d === null
            ? Bk(t, l, o - n, s - c - r)
            : Uk(t, l, o - n, s - c - r, d),
      });
    }
  }
  drawAfterLight(e, t, n, r, i) {
    let a = this.f,
      o = this.phase(),
      s = new Set(this.run.freed.concat(this.run.lost)),
      c = a.props.filter(
        (e) =>
          e.kind === ms.crystal && !this.isOpen(`crystal`, `${e.x},${e.y}`),
      );
    for (let l of a.props) {
      if (l.text !== `siphoned` || s.has(`${a.index}:${l.x},${l.y}`)) continue;
      let u = Uy(l);
      if (
        u.x < t - 120 ||
        u.x > t + r + 120 ||
        u.y < n - 120 ||
        u.y > n + i + 120
      )
        continue;
      let d = c
        .filter((e) => e.room === l.room)
        .sort(
          (e, t) =>
            Math.hypot(e.x - l.x, e.y - l.y) - Math.hypot(t.x - l.x, t.y - l.y),
        )[0];
      if (!d) continue;
      let f = Uy(d);
      oy(e, u.x - t, u.y - 13 - n, f.x - t, f.y - 22 - n, o);
    }
    this.boss?.drawAfterLight(e, t, n);
    for (let r of this.beams) {
      let i = r.t - r.wind;
      if (i < 0) continue;
      let a = hp(r.shape, r.turn, r.hold > 0 ? i / r.hold : 1);
      a.t === `line` && r.tile
        ? (Wk(
            e,
            r.tile,
            this.time,
            a.x0 * Z - t,
            a.y0 * Z - n,
            a.x1 * Z - t,
            a.y1 * Z - n,
            { alpha: Math.min(1, (r.hold - i) / 0.15 + 0.2) },
          ),
          Gk(e, a.x0 * Z - t, a.y0 * Z - n, 14, r.color, 0.6))
        : this.drawShape(e, a, r.color, 0.55, t, n, 1);
    }
    for (let r of this.shots) {
      let i = Math.round(r.x * Z - t),
        a = Math.round(r.y * Z - n);
      if ((e.drawImage(Bp(r.color, 7), i - 7, a - 7), r.look?.sprite?.length)) {
        Uk(e, zk(r.look.sprite, r.t ?? 0, 12), i, a, Math.atan2(r.vy, r.vx));
        continue;
      }
      ((e.fillStyle = r.color),
        e.fillRect(i - 2, a - 2, 4, 4),
        (e.fillStyle = r.core),
        e.fillRect(i - 1, a - 1, 2, 2));
    }
    for (let r of this.lobs) {
      let i = Math.min(1, r.t / r.dur),
        a = (r.x0 + (r.x1 - r.x0) * i) * Z - t,
        o = (r.y0 + (r.y1 - r.y0) * i) * Z - n,
        s = r.h * 4 * i * (1 - i) * Z;
      ((e.fillStyle = `rgba(0,0,0,0.3)`),
        e.beginPath(),
        e.ellipse(a, o, 3 + 2 * i, 1.5 + i, 0, 0, Math.PI * 2),
        e.fill());
      let c = zk(r.frames, r.t, 12);
      r.spin
        ? Uk(
            e,
            c,
            a,
            o - s,
            Math.atan2(r.y1 - r.y0 - r.h * 4 * (1 - 2 * i), r.x1 - r.x0),
          )
        : Bk(e, c, a, o - s);
    }
    (this.fx.draw(e, t, n),
      Ree(e, a, o, { x: t, y: n, w: r, h: i }, { vignette: !0 }),
      this.wokeFlash(e, r, i));
  }
  wokeFlash(e, t, n) {
    let r = (this.time - this.wokeFx) / 1.2;
    r >= 0 &&
      r < 1 &&
      ((e.globalAlpha = 1 - r),
      (e.fillStyle = Rp(`#7ef9ff`, 0.25)),
      e.fillRect(0, 0, t, n),
      (e.globalAlpha = 1));
  }
  drawAfterLightHd(e, t, n, r, i, a) {
    let o = this.f,
      s = this.phase(),
      c = new Set(this.run.freed.concat(this.run.lost)),
      l = o.props.filter(
        (e) =>
          e.kind === ms.crystal && !this.isOpen(`crystal`, `${e.x},${e.y}`),
      );
    for (let e of o.props) {
      if (e.text !== `siphoned` || c.has(`${o.index}:${e.x},${e.y}`)) continue;
      let u = Uy(e);
      if (
        u.x < n - 120 ||
        u.x > n + i + 120 ||
        u.y < r - 120 ||
        u.y > r + a + 120
      )
        continue;
      let d = l
        .filter((t) => t.room === e.room)
        .sort(
          (t, n) =>
            Math.hypot(t.x - e.x, t.y - e.y) - Math.hypot(n.x - e.x, n.y - e.y),
        )[0];
      if (!d) continue;
      let f = Uy(d);
      (mA(t, u.x, u.y, 13, f.x, f.y, 22, `#861222`, 0.35, !1, !0, 1.5, {
        bow: 3,
        size: 3,
      }),
        mA(t, u.x, u.y, 13, f.x, f.y, 22, `#e0484e`, 1, !1, !0, 1.5, {
          bow: 3,
          colorAt: (e) =>
            (((e - s * 2) % 1) + 1) % 1 < 0.1 ? `#ffffff` : `#e0484e`,
        }));
    }
    this.boss?.drawAfterLightHd(e, t, n, r);
    let u = e.looseAdd;
    for (let e of this.beams) {
      let t = e.t - e.wind;
      if (t < 0) continue;
      let i = hp(e.shape, e.turn, e.hold > 0 ? t / e.hold : 1);
      i.t === `line` && e.tile
        ? (Wk(
            u,
            e.tile,
            this.time,
            i.x0 * Z - n,
            i.y0 * Z - r,
            i.x1 * Z - n,
            i.y1 * Z - r,
            { alpha: Math.min(1, (e.hold - t) / 0.15 + 0.2) },
          ),
          Gk(u, i.x0 * Z - n, i.y0 * Z - r, 14, e.color, 0.6))
        : this.drawShape(u, i, e.color, 0.55, n, r, 1);
    }
    for (let i of this.shots) {
      let a = Math.round(i.x * Z - n),
        o = Math.round(i.y * Z - r);
      if ((u.drawImage(Bp(i.color, 7), a - 7, o - 7), i.look?.sprite?.length)) {
        Uk(
          e.loose,
          zk(i.look.sprite, i.t ?? 0, 12),
          a,
          o,
          Math.atan2(i.vy, i.vx),
        );
        continue;
      }
      (hA(t, i.x * Z, i.y * Z + HH, HH, i.color, 1, !1, !0, 4),
        hA(t, i.x * Z, i.y * Z + HH, HH, i.core, 1, !1, !0, 2));
    }
    this.fx.draw(e.loose, n, r);
  }
  uprightsHd(e, t, n, r, i) {
    let a = this.f,
      o = Math.floor(this.phase() * 8) / 8;
    for (let s of a.locks)
      if (
        !(s.w <= 1 || this.isOpen(`lock`, String(s.room))) &&
        !(
          (s.x + s.w) * Z < t ||
          s.x * Z > t + r ||
          (s.y + s.h) * Z < n ||
          s.y * Z > n + i + 20
        )
      )
        for (let t = s.y; t < s.y + s.h; t++)
          for (let n = s.x; n < s.x + s.w; n++)
            this.tile(n, t) === Ao.LOCK &&
              e.push({
                img: j_(s.tone ?? `seal`, o, n),
                x0: n * Z,
                y: t * Z + 8,
                w: Z,
                z0: 0,
                z1: 20,
                a: 0.8,
                add: !0,
              });
  }
  screenHd(e, t, n) {
    (my(e, this.f, t, n, { grade: !1 }), this.wokeFlash(e, t, n));
  }
  ambientHd(e, t, n = {}) {
    let r = (e, t) => {
      let n = this.tile(e, t);
      return n === Ao.WALL || n === Ao.VOID;
    };
    for (let i of uy(this.f, this.phase(), t, { foot: !0 })) {
      if (i.size > 3) {
        n.loose && Kae(n.loose, i, t);
        continue;
      }
      let a = i.foot ?? i.y,
        o;
      if (i.where === `face`) {
        if (
          (n.relief
            ? n.relief(Math.floor(i.x / Z), Math.floor(a / Z) - 1)
            : 22) < 22
        )
          continue;
        o = Math.max(a + 1, i.y);
      } else {
        let e = Math.floor(i.x / Z),
          t = Math.floor(a / Z);
        (r(e, t) && (a = (t + 1) * Z + 1), (o = Math.max(a, i.y)));
      }
      let s = Math.max(0, a - i.y);
      hA(e, i.x, o, s, i.color, i.alpha, i.add, !0, i.size);
    }
  }
  drawMinimap(e, t) {
    let n = this.f,
      r = this.g;
    ((e.fillStyle = `#07040f`), e.fillRect(0, 0, t, t));
    let i = Math.min(t / n.w, t / n.h) * 0.95,
      a = (t - n.w * i) / 2,
      o = (t - n.h * i) / 2,
      s = {
        [Ao.FLOOR]: `#3a3348`,
        [Ao.RUG]: `#4a3a48`,
        [Ao.DOOR]: `#5a5068`,
        [Ao.SHALLOW]: `#34506a`,
        [Ao.DEEP]: n.theme === `ember` ? `#8a2a10` : `#12203a`,
        [Ao.BRIDGE]: `#5a4a3a`,
        [Ao.WALL]: `#1a1624`,
        [Ao.DOWN]: `#ffd166`,
        [Ao.UP]: `#7ef9ff`,
        [Ao.LOCK]: `#e0484e`,
      };
    for (let t = 0; t < n.h; t++)
      for (let r = 0; r < n.w; r++) {
        let c = s[n.tiles[t * n.w + r]];
        c &&
          ((e.fillStyle = c),
          e.fillRect(a + r * i, o + t * i, Math.ceil(i), Math.ceil(i)));
      }
    let c = (t, n, r, s) => {
      ((e.fillStyle = r),
        e.fillRect(
          Math.round(a + t * i - s / 2),
          Math.round(o + n * i - s / 2),
          s,
          s,
        ));
    };
    for (let e of n.props)
      e.kind === `waystone` &&
        c(
          e.x + 0.5,
          e.y + 0.5,
          e.room === 0 || this.isOpen(`waystone`, String(e.room))
            ? `#7ef9ff`
            : `#556070`,
          3,
        );
    for (let e of this.mobs.values())
      !e.m.doc.dead &&
        !e.ghost &&
        c(
          e.m.rx,
          e.m.ry,
          e.boss ? `#ff9a2a` : e.object ? `#ffd166` : `#e03a4a`,
          e.boss ? 4 : 2,
        );
    let l = [...this.mobs.values()].find(
      (e) => e.kind === `lillith` && !e.m.doc.dead,
    );
    (l && c(l.m.rx, l.m.ry, `#ff9a2a`, 4),
      Math.floor(r.real * 3) % 2 == 0 && c(r.me.x, r.me.y, `#ffffff`, 3));
  }
  hud() {
    let e = this.f,
      t = this.prompt(),
      n =
        this.run.dungeon === `folly`
          ? {
              freed: this.run.names.length,
              lost: this.run.lost.length,
              waiting: ys(e).filter(
                (e) =>
                  !this.run.freed.includes(e.id) &&
                  !this.run.lost.includes(e.id),
              ).length,
            }
          : null;
    return {
      id: this.run.dungeon,
      hosted: this.hosted,
      name: this.d.name,
      diff: this.run.diff,
      floorName: e.name,
      floor: this.run.floor,
      floors: this.d.floors.length,
      ember: this.run.ember,
      emberMax: Math.max(Oo[this.run.diff], this.run.ember),
      shards: { ...this.run.shards },
      prompt: t ? `[E] ${t.label}` : null,
      channel: this.channel
        ? {
            label: this.channel.label,
            k: Math.min(1, this.channel.t / this.channel.dur),
          }
        : null,
      boss: this.boss?.hud() ?? null,
      bark: this.bark ? { who: this.bark.who, text: this.bark.text } : null,
      taken: n,
      cleared: this.cleared,
      echoes: [...new Set(this.run.echoes)].map((e) => ({
        id: e,
        name: sA[e]?.name ?? e,
        family: sA[e]?.family ?? `arcane`,
        n: cA(this.run.echoes, e),
      })),
      offer:
        this.run.offer?.map((e) => {
          let t = sA[e];
          return {
            id: e,
            name: t?.name ?? e,
            family: t?.family ?? `arcane`,
            desc: t?.desc ?? ``,
            n: cA(this.run.echoes, e),
            max: t?.max ?? 1,
          };
        }) ?? null,
      tide: {
        k: Math.min(
          1,
          (this.tide - this.tideSurges * this.surgeEvery()) / this.surgeEvery(),
        ),
        surges: this.surgeN,
        paused: !!this.boss || this.cleared,
      },
    };
  }
  labels() {
    return this.walkers
      .filter((e) => e.name && !e.safe)
      .map((e) => ({
        x: e.x * Z,
        y: e.y * Z - 30,
        z: 30,
        text: e.name,
        color: `#ffd166`,
        a: Math.min(1, e.t),
      }));
  }
  label(e) {
    let t = this.mobOf(e);
    if (!t && this.hosted && !e.local) {
      let t = VH(e.doc.kind),
        n = Go[t],
        r = this.nameOf(e);
      if (!r || n?.object) return null;
      let i = n?.tier ?? `normal`;
      return {
        kind: t,
        name: r.name,
        boss: i === `boss`,
        named: i === `named`,
        elite: i === `elite`,
      };
    }
    if (!t || t.object || (t.summoned && !(t.surge && t.tier !== `normal`)))
      return t?.pylon || t?.kind === `standard`
        ? { kind: t.kind, name: this.nameOf(e).name, elite: !0 }
        : null;
    let n = this.nameOf(e);
    return {
      kind: t.kind,
      name: n.name,
      boss: t.tier === `boss`,
      named: t.tier === `named`,
      elite: t.tier === `elite`,
    };
  }
  promptAt() {
    let e = this.prompt();
    return e ? { x: e.x, y: e.y } : null;
  }
};
