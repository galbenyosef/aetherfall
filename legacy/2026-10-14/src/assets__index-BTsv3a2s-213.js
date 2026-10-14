// assets__index-BTsv3a2s 213 — when
// Lines 132180-133847 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var x$ = {
    ysolde: [
      [
        `The Ward holds. I've stopped saying "for now" out loud. I still think it.`,
      ],
      [
        `Idris built this Ward himself, stone by stone. I keep catching myself waiting for him to come and tell me I'm doing it wrong.`,
      ],
    ],
    varra: [
      [
        `Every night I feel the place in the Chorus where the Emberheart used to be. Like a missing tooth.`,
      ],
      [`Defend, defend, defend. One of these days, {name}, we hit back.`],
    ],
    teodor: [
      [
        `Thunderspire's storms would be over the east hills by now, if we could see that far. I miss them.`,
      ],
      [
        `She trained at Thunderspire before she came here. Everyone there knew her name. Everyone still does.`,
      ],
    ],
    oriel: [
      [
        `Yes, I'm a Voidweaver. No, I don't know where Vespertine went. Yes, everyone asks.`,
      ],
      [`The Veil is thin tonight. It always is, now.`],
    ],
    holloway: [
      [`You lot get to come back. We don't. Mind that, out there.`],
      [
        `The Ward keeps the husks out. It doesn't keep the Watch in. Somebody still has to walk the walls.`,
      ],
    ],
  },
  S$ = {
    glade: { x: Ar + 140, y: jr },
    woods: { x: Ar - 140, y: jr + 16 },
    frost: { x: Ar, y: jr - 132 },
    ash: { x: Ar + 20, y: jr + 140 },
  },
  C$ = `aetherfall.trackedQuest`,
  w$ = class {
    g;
    rows = new Map();
    loaded = !1;
    tracked = null;
    fight = null;
    marks = new Map();
    markT = 0;
    sent = new Set();
    interiors = null;
    obj = null;
    guideK = 0;
    arrowK = 0;
    edgeK = 0;
    glow = { c: 0, l: 0, k: 0, p: 0 };
    glowCuts = [];
    markD = 0;
    markBare = !1;
    markHidden = !1;
    markSide = `behind`;
    drawnAt = 0;
    gaps = [];
    gapKey = { rects: null, w: 0, h: 0, depth: 0 };
    constructor(e) {
      this.g = e;
      try {
        this.tracked = localStorage.getItem(C$);
      } catch {
        this.tracked = null;
      }
    }
    setRows(e) {
      ((this.rows = new Map(e.map((e) => [e.questId, { ...e }]))),
        (this.loaded = !0),
        (this.markT = 0));
    }
    trackedId() {
      return this.tracked;
    }
    trackedPlea() {
      let e = this.tracked;
      return e?.startsWith(`plea:`)
        ? (this.g.townsfolk.taken().find((t) => `plea:${t.id}` === e) ?? null)
        : null;
    }
    track(e) {
      this.tracked = e;
      try {
        e ? localStorage.setItem(C$, e) : localStorage.removeItem(C$);
      } catch {}
    }
    rooms() {
      return (this.interiors ??= Zr());
    }
    where(e) {
      let t = e.indexOf(`:`),
        n = e.slice(0, t),
        r = e.slice(t + 1),
        i = this.g;
      if (n === `circle`) {
        let e = i.story;
        if (!e?.done) return null;
        let t = e.npcs.find((e) => e.kind === r);
        return t && t.visible
          ? { x: t.x, y: t.y, room: null, name: yZ[t.kind].name }
          : null;
      }
      if (n === `folk`) {
        let e = i.townsfolk.byId(r);
        return e ? { x: e.x, y: e.y, room: null, name: e.name } : null;
      }
      if (n === `shop`) {
        let e = this.rooms().find((e) => e.kind === `shop` && e.name === r),
          t = e?.folk.find((e) => e.id.endsWith(`-keeper`));
        return e && t
          ? { x: t.x, y: t.y, room: e, name: `${t.name} (${e.name})` }
          : null;
      }
      let [a, o] = r.split(`/`),
        s = this.rooms().find((e) => e.id === a);
      if (!s) return null;
      let c =
        n === `room`
          ? s.folk.find((e) => e.id === o)
          : n === `note`
            ? s.notes.find((e) => e.id === o)
            : void 0;
      return c
        ? {
            x: c.x,
            y: c.y,
            room: s,
            name: n === `room` ? c.name : `${c.name} (${s.name})`,
          }
        : null;
    }
    doorOf(e) {
      let t = e.door
        ? e
        : this.rooms().find((t) => t.doors.some((t) => t.to === e.id));
      return t?.door ? { x: t.door.tx + 0.5, y: t.door.ty + 1 } : null;
    }
    route(e) {
      let t = this.g.room;
      if (t && t === e.room) return { x: e.x, y: e.y };
      if (t) {
        let e = t.exits[Math.floor(t.exits.length / 2)];
        return e ? { x: e.tx + 0.5, y: e.ty } : null;
      }
      return e.room ? this.doorOf(e.room) : { x: e.x, y: e.y };
    }
    get level() {
      return this.g.meDoc?.level ?? 1;
    }
    get ready() {
      return this.loaded && !!this.g.story?.done && !!this.g.meDoc;
    }
    active() {
      let e = [];
      for (let t of this.rows.values()) {
        if (t.status !== `active`) continue;
        let n = cQ(t.questId),
          r = n?.steps[t.step];
        n && r && e.push({ q: n, row: t, s: r });
      }
      let t = (e) =>
        e.q.id === this.tracked ? 0 : e.q.kind === `main` ? 1 : 2;
      return e.sort((e, n) => t(e) - t(n) || e.q.level - n.q.level);
    }
    available() {
      return this.ready ? oQ.filter((e) => pQ(e, this.level, this.rows)) : [];
    }
    trackedQuest() {
      let e = this.active();
      return e.find((e) => e.q.id === this.tracked) ?? e[0] ?? null;
    }
    refreshMarks() {
      let e = new Map();
      if (this.ready) {
        for (let t of this.available())
          (!e.has(t.giver) || t.kind === `main`) &&
            e.set(t.giver, { glyph: `!`, kind: t.kind, color: h$[t.kind] });
        for (let { q: t, row: n, s: r } of this.active()) {
          let i = { glyph: `?`, kind: t.kind, color: h$[t.kind] };
          (r.t === `talk` &&
            r.npcs.forEach((t, r) => !(n.progress & (1 << r)) && e.set(t, i)),
            r.t === `choice` && e.set(r.npc, i));
        }
      }
      this.marks = e;
    }
    markOf(e) {
      let t = null;
      for (let n of e) {
        let e = this.marks.get(n);
        e && (!t || (e.glyph === `?` && t.glyph === `!`)) && (t = e);
      }
      return t;
    }
    spots() {
      let e = [];
      if (!this.ready) return e;
      for (let { q: t, row: n, s: r } of this.active())
        r.t === `inspect` &&
          r.spots.forEach((r, i) => {
            n.progress & (1 << i) ||
              e.push({
                questId: t.id,
                step: n.step,
                index: i,
                x: r.x,
                y: r.y,
                name: r.name,
              });
          });
      return e;
    }
    spotsNear(e, t) {
      return this.g.room
        ? []
        : this.spots().filter((n) => Math.hypot(n.x - e, n.y - t) <= mQ);
    }
    heroVoice() {
      return {
        name: this.g.name,
        title: `You`,
        color: S[this.g.school].colors.glow,
        art: `hero`,
      };
    }
    narrator(e = ``) {
      return { name: e, title: ``, color: `#e6d8bc`, art: `note:letter` };
    }
    *speak(e, t, n = ``) {
      let r = this.g.story;
      for (let i of e)
        i.startsWith(`> `)
          ? yield r.say(`crystal`, i.slice(2), this.heroVoice())
          : i.startsWith(`* `)
            ? yield r.say(`crystal`, i.slice(2), this.narrator(n))
            : t?.speaker
              ? yield r.say(t.speaker, i)
              : yield r.say(`crystal`, i, t?.voice ?? this.narrator(n));
    }
    ask(e, t, n) {
      let r = this.g.story;
      return e.startsWith(`> `)
        ? r.ask(`crystal`, e.slice(2), t, this.heroVoice())
        : e.startsWith(`* `)
          ? r.ask(`crystal`, e.slice(2), t, this.narrator())
          : n?.speaker
            ? r.ask(n.speaker, e, t)
            : r.ask(`crystal`, e, t, n?.voice ?? this.narrator());
    }
    talkTo(e) {
      let t = this.g.story;
      if (!t?.done || t.chatting) return !1;
      let n = this.questTalk(e);
      if (n) return t.converse(n());
      let r = e.fallback(),
        i = r.length === 1 ? e.converse?.(r[0]) : null;
      return i ? t.converse(i) : r.length ? t.converse(this.speak(r, e)) : !1;
    }
    fallsBack(e) {
      let t = this.g.story;
      return (
        !!t?.done &&
        !t.chatting &&
        !this.questTalk({ ids: e, fallback: () => [], at: null })
      );
    }
    questTalk(e) {
      if (!this.ready) return null;
      let t = new Set(e.ids);
      for (let { q: n, row: r, s: i } of this.active()) {
        if (i.t === `talk`) {
          let a = i.npcs.findIndex(
            (e, n) => t.has(e) && !(r.progress & (1 << n)),
          );
          if (a >= 0) return () => this.talkStep(n, r, i.lines[a] ?? [], a, e);
        }
        if (i.t === `choice` && t.has(i.npc))
          return () => this.choiceStep(n, r, i, e);
      }
      let n = this.available()
        .filter((e) => t.has(e.giver))
        .sort((e, t) =>
          e.kind === t.kind ? e.level - t.level : e.kind === `main` ? -1 : 1,
        )[0];
      return n ? () => this.offer(n, e) : null;
    }
    *talkStep(e, t, n, r, i) {
      (yield* this.speak(n, i), this.report(e.id, t.step, r));
    }
    *choiceStep(e, t, n, r) {
      let i = t.step;
      yield* this.speak(n.prompt.slice(0, -1), r);
      let a = this.ask(
        n.prompt[n.prompt.length - 1] ?? `...`,
        n.options.map((e) => e.label),
        r,
      );
      yield a.wait;
      let o = n.options[a.result()],
        s = `${e.id}:${i}:choice`;
      (this.sent.has(s) ||
        (this.sent.add(s),
        this.g.api
          .questChoose(e.id, i, o.id)
          .finally(() => this.sent.delete(s))),
        yield* this.speak(o.lines, r));
    }
    *offer(e, t) {
      yield* this.speak(e.offer.slice(0, -1), t);
      let n = this.ask(
        e.offer[e.offer.length - 1],
        [`${e.acceptLabel ?? `Accept`}: "${e.title}"`, `Not now`],
        t,
      );
      if ((yield n.wait, n.result() !== 0)) return;
      let r = `${e.id}:accept`;
      this.sent.has(r) ||
        (this.sent.add(r),
        (e.kind === `main` || !this.trackedQuest()) && this.track(e.id),
        q.sfx(`chime`, 0.6),
        this.g.api.questAccept(e.id).finally(() => this.sent.delete(r)));
    }
    inspect(e, t, n) {
      let r = cQ(e),
        i = r?.steps[t],
        a = this.g.story;
      if (!r || i?.t !== `inspect` || !a) return;
      let o = i.spots[n],
        s = this;
      a.converse(
        (function* () {
          (yield* s.speak(o.lines, null, o.name), s.report(e, t, n));
        })(),
      );
    }
    report(e, t, n) {
      let r = `${e}:${t}:${n}`;
      if (this.sent.has(r)) return;
      this.sent.add(r);
      let i = this.rows.get(e),
        a = cQ(e)?.steps[t];
      (i &&
        a &&
        i.step === t &&
        (i.progress = uQ(a) ? i.progress | (1 << n) : 1),
        (this.markT = 0),
        this.g.api.questProgress(e, t, n).finally(() => this.sent.delete(r)));
    }
    circleLines(e, t) {
      let n = x$[e];
      return n[t % n.length];
    }
    update(e) {
      let t = this.g;
      ((this.markT -= e),
        this.markT <= 0 && ((this.markT = 0.25), this.refreshMarks()));
      let n = (this.obj = this.objective()),
        r = PQ(_l(), t.inCombat()),
        i =
          !!n &&
          !this.fight &&
          !t.story?.chatting &&
          !t.story?.locked &&
          !t.cine &&
          !t.dungeon &&
          !t.meDoc?.dead;
      this.guideK = RQ(this.guideK, i && r.edge ? 1 : 0, e);
      let a = !!n && Math.hypot(n.x - t.me.x, n.y - t.me.y) >= 3;
      if (
        ((this.arrowK = RQ(this.arrowK, i && r.arrow && a ? 1 : 0, e)),
        this.guideK < 0.01 && ((this.edgeK = 0), (this.glow.k = 0)),
        this.fight)
      ) {
        (this.fight.update(e), this.fight.over && (this.fight = null));
        return;
      }
      if (!this.ready || t.room || t.meDoc.dead || t.cine) return;
      let o = t.story;
      for (let { q: e, row: n, s: r } of this.active()) {
        let i = `x` in r ? Math.hypot(t.me.x - r.x, t.me.y - r.y) : 1 / 0;
        if (r.t === `visit` && i <= r.r) {
          let t = `${e.id}:${n.step}:0`;
          if (this.sent.has(t)) continue;
          if (r.lines?.length && !o.chatting && !o.busy()) {
            let e = this;
            o.converse(
              (function* () {
                yield* e.speak(r.lines, null, r.name);
              })(),
            );
          }
          this.report(e.id, n.step, 0);
        }
        if (
          r.t === `boss` &&
          i <= r.r &&
          !o.chatting &&
          !o.locked &&
          !o.busy()
        ) {
          this.fight = new f$(t, this, e.id, r);
          return;
        }
      }
    }
    objective() {
      let e = this.trackedPlea();
      if (e) {
        let t = this.g.townsfolk,
          n = t.folk.find((t) => t.def.id === e.id);
        return e.need
          ? t.carrying.has(`${e.id}|${e.since}`)
            ? n
              ? { x: n.x, y: n.y, color: g$, label: e.who }
              : null
            : { x: e.x, y: e.y, color: g$, label: `frost moss` }
          : n?.body?.mode === `led`
            ? { x: Ar, y: jr + 11, color: g$, label: `the Ward` }
            : { x: n?.x ?? e.x, y: n?.y ?? e.y, color: g$, label: e.who };
      }
      let t = this.trackedQuest();
      if (!t || !this.ready) return null;
      let { q: n, row: r, s: i } = t,
        a = this.g,
        o = h$[n.kind],
        s = null,
        c = ``;
      if (i.t === `talk` || i.t === `choice`) {
        let e =
            i.t === `talk`
              ? i.npcs.filter((e, t) => !(r.progress & (1 << t)))
              : [i.npc],
          t = null;
        for (let n of e) {
          let e = this.where(n);
          if (!e) continue;
          let r = this.route(e),
            i = r ? Math.hypot(r.x - a.me.x, r.y - a.me.y) : 1 / 0;
          (!t || i < t.d) && (t = { w: e, d: i });
        }
        t && ((s = this.route(t.w)), (c = t.w.name));
      } else if (i.t === `inspect`) {
        let e = this.spots().filter((e) => e.questId === n.id);
        (e.sort(
          (e, t) =>
            Math.hypot(e.x - a.me.x, e.y - a.me.y) -
            Math.hypot(t.x - a.me.x, t.y - a.me.y),
        ),
          e[0] && ((s = this.route({ ...e[0], room: null })), (c = e[0].name)));
      } else if (i.t === `visit` || i.t === `boss`)
        ((s = this.route({ x: i.x, y: i.y, room: null })), (c = i.name));
      else if (i.t === `kill` || i.t === `loot`) {
        let e = 1 / 0;
        for (let t of a.monsters.values()) {
          if (
            t.local ||
            t.doc.dead ||
            !i.kinds.includes(t.doc.kind) ||
            (i.region && ri(t.rx, t.ry) !== i.region)
          )
            continue;
          let n = Math.hypot(t.rx - a.me.x, t.ry - a.me.y);
          n < e &&
            ((e = n),
            (s = this.route({ x: t.rx, y: t.ry, room: null })),
            (c = Fe[t.doc.kind]?.name ?? ``));
        }
        !s &&
          i.region &&
          S$[i.region] &&
          ((s = this.route({ ...S$[i.region], room: null })), (c = i.text));
      }
      return s ? { ...s, color: o, label: c } : null;
    }
    minimapMarks() {
      let e = [];
      if (!this.ready) return e;
      for (let [t, n] of this.marks) {
        if (n.glyph !== `!`) continue;
        let r = this.where(t);
        if (!r) continue;
        let i = r.room ? this.doorOf(r.room) : r;
        i && e.push({ x: i.x, y: i.y, color: n.color, size: 3, blink: !1 });
      }
      let t = this.obj;
      return (
        t &&
          t.x < Or &&
          e.push({ x: t.x, y: t.y, color: t.color, size: 5, blink: !0 }),
        e
      );
    }
    hud() {
      let e = [],
        t = this.g.story,
        n = this.trackedPlea(),
        r = n ? null : this.trackedQuest();
      for (let t of this.g.townsfolk.taken()) {
        let r = Math.max(0, Math.ceil((t.until - Date.now()) / 6e4)),
          i = t.reward ? ` (${t.reward} Crowns)` : ``,
          a = this.g.townsfolk.carrying.has(`${t.id}|${t.since}`);
        e.push({
          id: `plea:${t.id}`,
          title: t.need ? `Frost moss for ${t.who}` : `Bring ${t.who} home`,
          kind: `side`,
          text: t.need
            ? a
              ? `Bring the moss back through the Ward, for ${t.who}'s fever${i}.`
              : `Gather frost moss from ${t.where}, then bring it back through the Ward${i}.`
            : `${t.who} is held at ${t.where}. Reach them, then lead them back through the Ward${i}.`,
          tracked: n?.id === t.id,
          waiting: `${r} min left`,
        });
      }
      if (this.ready && t) {
        let n = Ge(Date.now());
        for (let { q: i, row: a, s: o } of this.active()) {
          let s = lQ(o);
          e.push({
            id: i.id,
            title: i.title,
            kind: i.kind,
            text: t.fmt(o.text),
            count: s > 1 ? dQ(o, a.progress) : void 0,
            total: s > 1 ? s : void 0,
            tracked: r?.q.id === i.id,
            waiting: o.night && !n ? `after dark` : void 0,
          });
        }
      }
      let i = hQ(this.rows, this.level);
      return {
        chapter: i,
        next: this.ready
          ? gQ(i, (e) => _Q(e, this.where(e)?.name ?? null, yZ))
          : null,
        entries: e,
        boss: this.fight?.hud() ?? null,
      };
    }
    headMarks() {
      let e = this.g,
        t = [];
      if (!this.ready) return t;
      let n = e.room;
      if (n) {
        for (let e of n.folk) {
          let r = [`room:${n.id}/${e.id}`];
          n.kind === `shop` &&
            e.id.endsWith(`-keeper`) &&
            r.push(`shop:${n.name}`);
          let i = this.markOf(r);
          i &&
            t.push({
              key: r[0],
              x: e.x * 16,
              y: e.y * 16,
              z: PR(30),
              floor: e.y * 16,
              m: i,
              scale: 1,
            });
        }
        for (let e of n.notes) {
          let r = `note:${n.id}/${e.id}`,
            i = this.markOf([r]);
          i &&
            t.push({
              key: r,
              x: e.x * 16,
              y: e.y * 16,
              z: 22,
              floor: e.y * 16,
              m: i,
              scale: 1,
            });
        }
        return t;
      }
      for (let n of e.story.npcs) {
        if (!n.visible || n.alpha < 0.5) continue;
        let e = `circle:${n.kind}`,
          r = this.markOf([e]);
        r &&
          t.push({
            key: e,
            x: n.x * 16,
            y: n.y * 16,
            z: PR(30),
            floor: n.y * 16,
            m: r,
            scale: 1,
          });
      }
      for (let n of e.townsfolk.people()) {
        let e = `folk:${n.id}`,
          r = this.markOf([e]);
        r &&
          t.push({
            key: e,
            x: n.x * 16,
            y: n.y * 16,
            z: PR(30),
            floor: n.y * 16,
            m: r,
            scale: 1,
          });
      }
      let r = new Map();
      for (let [e, t] of this.marks) {
        let n =
          e.startsWith(`room:`) ||
          e.startsWith(`shop:`) ||
          e.startsWith(`note:`)
            ? this.where(e)
            : null;
        if (!n?.room) continue;
        let i = n.room.door
          ? n.room
          : this.rooms().find((e) => e.doors.some((e) => e.to === n.room.id));
        if (!i) continue;
        let a = r.get(i);
        (!a ||
          (t.glyph === `?` && a.glyph === `!`) ||
          (t.glyph === a.glyph && t.kind === `main`)) &&
          r.set(i, t);
      }
      for (let [e, n] of r)
        e.door &&
          t.push({
            key: `door:${e.id}`,
            x: e.doorX ?? (e.door.tx + 0.5) * 16,
            y: e.door.ty * 16,
            z: 6,
            floor: (e.door.ty + 1) * 16,
            m: n,
            scale: 0.8,
          });
      return t;
    }
    drawOverlay(e, t, n, r) {
      let i = this.g;
      if (this.ready) {
        if ((this.fight?.drawOverlay(e, t, n, r), !i.room))
          for (let a of this.spots()) {
            let o = t.toScreen(a.x * 16, a.y * 16, 6),
              s = o.sx * n,
              c = o.sy * n,
              l = 0.6 + 0.4 * Math.sin(i.real * 5 + a.index);
            ((e.globalAlpha = l), (e.fillStyle = `#fff4c2`));
            let u = Math.max(2, n) * (1.2 + l);
            (e.beginPath(),
              e.moveTo(s, c - u * 2),
              e.lineTo(s + u, c),
              e.lineTo(s, c + u * 2),
              e.lineTo(s - u, c),
              e.closePath(),
              e.fill(),
              (e.globalAlpha = 1),
              Math.hypot(a.x - i.me.x, a.y - i.me.y) < 6 &&
                ((e.font = $c(r, _l().readableFont)),
                (e.lineWidth = Math.max(2, n)),
                (e.strokeStyle = `rgba(10,5,20,0.9)`),
                e.strokeText(a.name, s, c - u * 3),
                (e.fillStyle = `#fff4c2`),
                e.fillText(a.name, s, c - u * 3)));
          }
        this.drawGuide(e, t, n, r);
      }
    }
    drawGuide(e, t, n, r) {
      let i = this.g,
        a = Math.min(0.1, Math.max(0, i.real - this.drawnAt));
      this.drawnAt = i.real;
      let o = this.obj;
      if (!o || (this.guideK < 0.01 && this.arrowK < 0.01)) {
        ((this.edgeK = 0), (this.glow.k = 0));
        return;
      }
      if (this.arrowK > 0.01) {
        let r = t.toScreen(i.me.x * 16, i.me.y * 16, 2),
          a = r.sx * n,
          s = r.sy * n,
          c = Math.atan2(o.y - i.me.y, o.x - i.me.x);
        ((e.globalAlpha = 0.9 * this.arrowK),
          _$(
            e,
            a + Math.cos(c) * 15 * n,
            s + Math.sin(c) * 8 * n,
            c,
            Math.max(5, n * 2.4),
            o.color,
            Math.max(2, n * 0.7),
          ),
          (e.globalAlpha = 1));
      }
      if (this.guideK <= 0.01) {
        ((this.edgeK = 0), (this.glow.k = 0));
        return;
      }
      let s = i.hudScreen,
        c = Math.min(e.canvas.width, s?.w ?? 1 / 0),
        l = Math.min(e.canvas.height, s?.h ?? 1 / 0),
        u = s?.safe ?? { x: 0, y: 0, w: c, h: l },
        d = t.toScreen(i.me.x * 16, i.me.y * 16, 8),
        f = t.toward(o.x * 16, o.y * 16, 8),
        p = { x: d.sx * n, y: d.sy * n },
        m = { x: f.sx * n, y: f.sy * n },
        h = r * 1.1,
        g = `${o.label ? o.label + ` · ` : ``}${Math.round(Math.hypot(o.x - i.me.x, o.y - i.me.y))}`;
      e.font = $c(r, _l().readableFont);
      let _ = {
          r: h,
          labelW: e.measureText(g).width,
          labelH: r,
          edge: Math.max(20, Math.round(r * 1.5)),
          pad: 6,
        },
        v = [];
      for (let [e, t] of i.headPlaces ?? []) e !== `me` && v.push(...t.boxes);
      let y = t.toScreen(i.me.x * 16, i.me.y * 16),
        b = o$(
          u,
          p,
          m,
          i.hudRects,
          _,
          s$({ x: p.x, y: y.sy * n }, n, r, i.headPlaces?.get(`me`)?.label),
          v,
        ),
        x = this.edgeK;
      this.edgeK = RQ(this.edgeK, +!!b, a);
      let S = this.guideK * this.edgeK;
      if (S <= 0.01) {
        this.glow.k = 0;
        return;
      }
      this.drawGlow(e, o.color, c, l, p, m, S, a);
      let C = c$(u, p, _.edge);
      if (b) {
        let e = Math.hypot(b.x - C.x, b.y - C.y);
        ((this.markD = x < 0.02 ? e : Math.min(e, LQ(this.markD, e, a))),
          (this.markBare = !!b.bare),
          (this.markHidden = !!b.hidden),
          (this.markSide = b.side ?? `behind`));
      }
      if (this.markHidden) return;
      let w = l$(
        u,
        C,
        b ? b.angle : Math.atan2(m.y - C.y, m.x - C.x),
        this.markD,
        _,
        this.markSide,
      );
      ((e.globalAlpha = S),
        _$(e, w.x, w.y, w.angle, h, o.color, Math.max(2, n * 0.8)),
        this.markBare ||
          ((e.textAlign = w.label.align),
          (e.lineWidth = Math.max(2, n)),
          (e.strokeStyle = `rgba(10,5,20,0.9)`),
          e.strokeText(g, w.label.x, w.label.y),
          (e.fillStyle = o.color),
          e.fillText(g, w.label.x, w.label.y),
          (e.textAlign = `center`)),
        (e.globalAlpha = 1));
    }
    drawGlow(e, t, n, r, i, a, o, s) {
      let { len: c, depth: l } = zQ(n, r),
        u = QQ(n, r, i, a, this.g.hudRects, c, l, this.gapsFor(n, r, l));
      if (((this.glow = r$(this.glow, u, s, c, VQ(n, r))), this.glow.k <= 0.01))
        return;
      let d = this.glow.f ?? { x: 0, y: 0, w: n, h: r },
        f = Bp(t, 48);
      (e.save(),
        (e.globalCompositeOperation = `lighter`),
        (e.globalAlpha = AQ * o * this.glow.k),
        (e.imageSmoothingEnabled = !0),
        t$(d.w, d.h, this.glow.c, this.glow.l, l).forEach((t, n) => {
          let r = { x: t.x + d.x, y: t.y + d.y, w: t.w, h: t.h };
          e.drawImage(
            this.glow.f ? this.glowCut(n, f, r) : f,
            r.x,
            r.y,
            r.w,
            r.h,
          );
        }),
        e.restore());
    }
    glowCut(e, t, n) {
      let [r, i] = (this.glowCuts[e] ??= M(t.width, t.height)),
        a = r.width / n.w,
        o = r.height / n.h;
      ((i.globalCompositeOperation = `copy`),
        i.drawImage(t, 0, 0),
        (i.globalCompositeOperation = `destination-out`),
        (i.fillStyle = `#000`));
      for (let e of this.g.hudRects)
        i.fillRect(
          (e.x - 6 - n.x) * a,
          (e.y - 6 - n.y) * o,
          (e.w + 12) * a,
          (e.h + 12) * o,
        );
      return r;
    }
    gapsFor(e, t, n) {
      let r = this.g.hudRects,
        i = this.gapKey;
      return (
        (i.rects !== r || i.w !== e || i.h !== t || i.depth !== n) &&
          ((this.gapKey = { rects: r, w: e, h: t, depth: n }),
          (this.gaps = JQ(e, t, r, n))),
        this.gaps
      );
    }
  },
  T$ = {
    watchman: {
      title: `Watchman, Marizon Watch`,
      hp: 140,
      level: 8,
      dmg: 9,
      swing: 1.5,
      reach: 1.6,
      rally: 25,
      breach: 30,
    },
    guard: {
      title: `Guard, Marizon Watch`,
      hp: 200,
      level: 14,
      dmg: 13,
      swing: 1.4,
      reach: 1.8,
      rally: 35,
      breach: 40,
    },
    sergeant: {
      title: `Sergeant, Marizon Watch`,
      hp: 280,
      level: 20,
      dmg: 18,
      swing: 1.3,
      reach: 1.8,
      rally: 60,
      breach: 60,
    },
    captain: {
      title: `Captain, Marizon Watch`,
      hp: 380,
      level: 28,
      dmg: 24,
      swing: 1.2,
      reach: 2,
      rally: 200,
      breach: 0,
      dire: !0,
    },
    vigilant: {
      title: `Vigilant, the Black Vigil`,
      hp: 900,
      level: 50,
      dmg: 100,
      swing: 1,
      reach: 2.2,
      rally: 200,
      breach: 0,
      dire: !0,
      spells: [`judgement`, `consecrate`, `aegis`],
      rises: !0,
      downSecs: 90,
    },
  },
  E$ = {
    vigilDais: {
      name: `the foot of the Aether Crystal's dais, east of where the High Mage stands`,
      at: [5.5, 15.5],
      dir: 0,
    },
    vigilGateW: {
      name: `the west side of the Sanctum's gate`,
      at: [-2.5, 24.5],
      dir: 0,
    },
    vigilGateE: {
      name: `the east side of the Sanctum's gate`,
      at: [3.5, 24.5],
      dir: 0,
    },
    vigilBridgeW: {
      name: `the lawn at the north end of the moat's bridge, west of it`,
      at: [-2.5, 29.5],
      dir: 0,
    },
    vigilBridgeE: {
      name: `the lawn at the north end of the moat's bridge, east of it`,
      at: [3.5, 29.5],
      dir: 0,
    },
    eastGateN: {
      name: `the north side of the east gate`,
      at: [95.5, -2.5],
      dir: 2,
    },
    eastGateS: {
      name: `the south side of the east gate`,
      at: [95.5, 3.5],
      dir: 2,
    },
    eastGateInN: {
      name: `just inside the east gate, north of the road`,
      at: [92.5, -2.5],
      dir: 2,
    },
    eastGateInS: {
      name: `just inside the east gate, south of the road`,
      at: [92.5, 3.5],
      dir: 2,
    },
    southGateW: {
      name: `the west side of the south gate`,
      at: [-2.5, 95.5],
      dir: 0,
    },
    southGateE: {
      name: `the east side of the south gate`,
      at: [3.5, 95.5],
      dir: 0,
    },
    southGateInW: {
      name: `just inside the south gate, west of the road`,
      at: [-2.5, 92.5],
      dir: 0,
    },
    southGateInE: {
      name: `just inside the south gate, east of the road`,
      at: [3.5, 92.5],
      dir: 0,
    },
    westGateN: {
      name: `the north side of the west gate`,
      at: [-95.5, -2.5],
      dir: 3,
    },
    westGateS: {
      name: `the south side of the west gate`,
      at: [-95.5, 3.5],
      dir: 3,
    },
    westGateInS: {
      name: `just inside the west gate, south of the road`,
      at: [-92.5, 3.5],
      dir: 3,
    },
    northGateW: {
      name: `the west side of the north gate`,
      at: [-2.5, -95.5],
      dir: 1,
    },
    northGateE: {
      name: `the east side of the north gate`,
      at: [3.5, -95.5],
      dir: 1,
    },
    marketS: {
      name: `the Crystal Market's south lane, below the bridge-head`,
      at: [0.5, 46.5],
    },
    marketSE: {
      name: `the Crystal Market's south-east corner`,
      at: [47.5, 46.5],
    },
    marketNE: {
      name: `the Crystal Market's north-east corner`,
      at: [47.5, -46.5],
    },
    marketN: { name: `the Crystal Market's north lane`, at: [0.5, -46.5] },
    marketNW: {
      name: `the Crystal Market's north-west corner`,
      at: [-47.5, -46.5],
    },
    marketSW: {
      name: `the Crystal Market's south-west corner`,
      at: [-47.5, 46.5],
    },
  },
  D$ = [
    {
      id: `watch-maudry`,
      name: `Maudry Vane`,
      pronoun: `she`,
      rank: `vigilant`,
      post: `vigilDais`,
      people: `Heartfolk, born in Marizon`,
      age: 63,
      faith: `twoSeas`,
      tone: 0,
      hair: `grizzled`,
      who: `Maudry is the Warden of the Vigil, the eldest of the five, attuned at thirty-eight and still that age to look at. She stands at the foot of the Crystal's dais, where every mage who rises opens their eyes on her.`,
      traits: [`calm`, `unbending`, `dry`, `watchful`],
      wants: `the Vigil to stand until the siege ends, and not one day longer`,
      fears: `the day the Crystal stops remembering, and she's the last thing standing in front of it`,
      secret: `she was there when Master Idris died, and couldn't reach him`,
      token: `a Vigil's black gauntlet, the gilt worn off its knuckles`,
      says: `Rise, and be welcome. Then mind where you cast. I'll be watching that too.`,
      confides: `I was on the bridge the night Idris fell. I could see him. I couldn't reach him. I stand at the dais now so that nobody else dies in front of the Crystal while I'm too far away.`,
    },
    {
      id: `watch-haskel`,
      name: `Haskel Kilnhart`,
      pronoun: `he`,
      rank: `vigilant`,
      post: `vigilGateW`,
      people: `Delver, of the Kilnhart forge-clan of Brassdeep`,
      age: 52,
      faith: `stones`,
      tone: 1,
      hair: `black`,
      who: `Haskel was a forge-clan smith until his spark woke at thirty, too late for any school and too stubborn for Brassdeep's own. He keeps the west side of the Sanctum's gate, and knows every Delver stone in the Ward by its maker's mark.`,
      traits: [`gruff`, `loyal`, `exacting`, `proud of his clan`],
      wants: `every ward-stone in Marizon recut without Aurek's maze-mark`,
      fears: `that the Kilnharts' stones are the next to break`,
      secret: `his father fired the stone that cracked at Highmore's west gate`,
      token: `a forge-mark stamp of the Kilnhart clan`,
      says: `Brassdeep stone under your feet, Delver ash in its clay. Walk soft.`,
      confides: `My father fired the stone that broke at Highmore's west gate. Aurek's mark was on it, under ours. I stand here so the next one that breaks has a Kilnhart in front of it.`,
    },
    {
      id: `watch-mehrin`,
      name: `Mehrin Sohar`,
      pronoun: `she`,
      rank: `vigilant`,
      post: `vigilGateE`,
      people: `Solmari, from Solmara by the Sunwell`,
      age: 44,
      faith: `none`,
      tone: 3,
      hair: `black`,
      who: `Mehrin came north from Solmara with a glassmaker's caravan and a spark no tower would test. She keeps the east side of the Sanctum's gate, and says the sky remembers what the Crystal doesn't.`,
      traits: [`serene`, `proud`, `sharp-eyed`, `devout in her own way`],
      wants: `to see the Towers of Quiet again before she's laid on one`,
      fears: `being buried in the ground, where the Hollow can reach her`,
      secret: `she has asked the Vigil to carry her to the Towers if she falls for good`,
      token: `a blue glazed tile from her mother's courtyard`,
      says: `The Sunwell remembers the mages. The sky remembers everyone. Here, I remember for both.`,
      confides: `If I fall for good, they've promised to carry me south to the Towers of Quiet. Not into the ground. Not here, where the dead get up. Promise me too.`,
    },
    {
      id: `watch-kallari`,
      name: `Kallari Waman`,
      pronoun: `they`,
      rank: `vigilant`,
      post: `vigilBridgeW`,
      people: `Crownfolk, of Corvane in the Stormcrown`,
      age: 33,
      faith: `none`,
      tone: 2,
      hair: `black`,
      who: `Kallari is the youngest of the Vigil, Corvane-born, tied into a family cord that Slatebridge's half of the family cut when it opened its gates. They keep the bridge's north end, west of the way.`,
      traits: [`earnest`, `quick`, `quiet`, `fiercely kind`],
      wants: `their cousins in Slatebridge to wake remembered, without the Grey Faith's help`,
      fears: `meeting their own grandmother among the Watchers that got up`,
      secret: `they've sent letters to their cousins in Slatebridge, begging them to leave the Grey Faith`,
      token: `a knotted family cord with three knots cut`,
      says: `Every knot on my cord is a person. Three are cut. Keep your own close, mage.`,
      confides: `I write to my cousins in Slatebridge. Every week. I tell them Hessa's lantern is a lie. They write back that their grandmother is waiting to be remembered. She's mine too.`,
    },
    {
      id: `watch-ansel`,
      name: `Ansel Crane`,
      pronoun: `he`,
      rank: `vigilant`,
      post: `vigilBridgeE`,
      people: `Heartfolk, of Aldmere`,
      age: 71,
      faith: `conclave`,
      tone: 0,
      hair: `fair`,
      who: `Ansel left Aldmere's white and gold when the Conclave wouldn't send help, and took the Vigil's black instead; he looks thirty and has served three captains of the Watch. He keeps the bridge's north end, east of the way.`,
      traits: [`courtly`, `wry`, `patient`, `ashamed of Aldmere`],
      wants: `Aldmere to send its mages before Marizon has none left to send`,
      fears: `outliving Holloway, as he outlived the two captains before him`,
      secret: `he still writes to a friend on the Conclave, and burns every answer`,
      token: `an Aldmere scholar's ring, turned inward`,
      says: `Aldmere sends its regards, I'm told. I came instead. It seemed more useful.`,
      confides: `I've buried two captains of the Watch. Holloway will be the third, and he knows it. He says we get to come back. He's right. We don't get to stop.`,
    },
    {
      id: `watch-odile`,
      name: `Odile Rook`,
      pronoun: `she`,
      rank: `captain`,
      post: `marketS`,
      round: `patrolSunwise`,
      people: `Heartfolk, born in Marizon`,
      age: 45,
      faith: `twoSeas`,
      tone: 1,
      hair: `auburn`,
      who: `Odile came up through the Watch from watchman, and walks the Crystal Market sunwise round the Sanctum, from the bridge-head. She knows every stall-keeper by name and most of their debts.`,
      traits: [`brisk`, `shrewd`, `warm underneath`, `never sits down`],
      wants: `the market to stay a market, and not a camp`,
      fears: `a riot in the stalls when the bread runs out`,
      secret: `she lets the refugees sleep under the stalls after dark, against the Circle's orders`,
      token: `a market-warden's brass whistle`,
      says: `Keep moving, keep buying, keep the lanes clear. That's all I ask of anyone.`,
      confides: `After dark I let the Highmore folk sleep under the stalls. The Circle says no. The Circle doesn't walk the market at midnight and count the children.`,
    },
    {
      id: `watch-tobin`,
      name: `Tobin Ashby`,
      pronoun: `he`,
      rank: `captain`,
      post: `marketN`,
      round: `patrolWiddershins`,
      people: `Heartfolk, born in Pellandor`,
      age: 50,
      faith: `twoSeas`,
      tone: 2,
      hair: `brown`,
      who: `Tobin was a guild-house guard in Pellandor before he married into Marizon. He walks the Crystal Market widdershins, so that he and Captain Rook pass twice a round and swap what they've seen.`,
      traits: [`methodical`, `soft-spoken`, `stubborn`, `fond of lists`],
      wants: `his daughter Wren safe in the schools, and the siege lifted by her naming day`,
      fears: `that the husks at the light's edge are counting the Watch, as the Watch counts them`,
      secret: `he keeps a tally of every husk at the light's edge each night, and it's growing`,
      token: `a ledger of the Watch's roster, kept in his own hand`,
      says: `Captain Rook goes sunwise, I go widdershins. Between us nothing gets round the market unseen.`,
      confides: `I count them every night, the shapes at the edge of the light. Forty the first week. Ninety now. I give the numbers to Holloway, and he doesn't say anything, and that's how I know.`,
    },
    {
      id: `watch-brenna`,
      name: `Brenna Torvik`,
      pronoun: `she`,
      rank: `sergeant`,
      post: `southGateInE`,
      people: `Skarnfolk, from Skarn on the fjords`,
      age: 39,
      faith: `none`,
      tone: 0,
      hair: `fair`,
      who: `Brenna keeps the south gate on the Highmore road: a whaler's daughter who came south for the Watch's coin and stayed for the work. Every refugee from Highmore came through her gate.`,
      traits: [`blunt`, `steady`, `loud`, `kinder than she sounds`],
      wants: `to close the south gate one night with nobody left outside it`,
      fears: `opening it to someone she should have known was a husk`,
      secret: `she let a Highmore family in after dark, against orders, and one of them was bitten`,
      token: `a whale's tooth carved with her grandmother's name`,
      says: `South gate. Highmore road. If you're going out, I count you out and I count you back.`,
      confides: `I opened the gate after dark once. A family, a girl crying. One of them had been bitten. We dealt with it. I still open it, when there's crying. Don't tell the captain.`,
    },
    {
      id: `watch-kerro`,
      name: `Kerro Dunmark`,
      pronoun: `he`,
      rank: `sergeant`,
      post: `eastGateInS`,
      people: `Delver, of the Dunmark forge-clan of Brassdeep`,
      age: 46,
      faith: `stones`,
      tone: 1,
      hair: `grizzled`,
      who: `Kerro keeps the east gate, the siege gate, where the ward-stone stands and the husks come thickest. He has held it every night since the Night of Keys.`,
      traits: [`grim`, `patient`, `unflappable`, `says little`],
      wants: `the east wall mended stone by stone before the next breach`,
      fears: `that he's the last of his clan on this side of the Stormcrown`,
      secret: `he hasn't slept a full night since the Night of Keys`,
      token: `a Dunmark iron ring, worn on a cord`,
      says: `East gate. Where the Hollow knocks first. Keep your spells ready and your feet on our side.`,
      confides: `I haven't slept a night through since the Night of Keys. I lie down, I hear the stone hum flat, I get up. Somebody has to hear it before it breaks.`,
    },
    {
      id: `watch-piers`,
      name: `Piers Aldane`,
      pronoun: `he`,
      rank: `sergeant`,
      post: `westGateInS`,
      people: `Heartfolk, born in Marizon`,
      age: 41,
      faith: `twoSeas`,
      tone: 0,
      hair: `brown`,
      who: `Piers keeps the west gate, out toward the Once-Graves. Half of Marizon's funerals go out through his gate, and he stands every one of them to attention.`,
      traits: [`solemn`, `courteous`, `superstitious`, `dutiful`],
      wants: `every funeral through his gate to come back with all its mourners`,
      fears: `that the Once-Graves won't stay quiet`,
      secret: `he puts a hope-chip in his own mouth every night before he sleeps`,
      token: `a lesser-shard hope-chip on a string`,
      says: `West gate. The Once-Graves are just there. Go quiet past them.`,
      confides: `Every night I put a hope-chip under my tongue before I sleep. The Conclave says it does nothing. I'd rather not find out.`,
    },
    {
      id: `watch-cass`,
      name: `Cass Whitlow`,
      pronoun: `she`,
      rank: `guard`,
      post: `southGateW`,
      people: `Heartfolk, of Highmore`,
      age: 27,
      faith: `twoSeas`,
      tone: 0,
      hair: `brown`,
      who: `Cass was a Highmore Hall guard who came through Sergeant Torvik's gate with the first refugees and asked for a spear the same night. She stands on the west side of the south gate, looking down the road home.`,
      traits: [`fierce`, `restless`, `loyal`, `haunted`],
      wants: `to go back for the Hall guards who held the gates to the end`,
      fears: `seeing her old company among the husks at the light's edge`,
      secret: `she knew Arne, the guard whose badge his sister is looking for`,
      token: `a Highmore Hall guard's badge, her own`,
      says: `The road to Highmore. I walked it the other way once. I'll walk it back.`,
      confides: `I knew Arne. Highmore Hall, west gate. He held it when I ran. Don't tell his sister I ran.`,
    },
    {
      id: `watch-eyven`,
      name: `Eyven Tarr`,
      pronoun: `he`,
      rank: `guard`,
      post: `southGateE`,
      people: `Skarnfolk, from Skarn on the fjords`,
      age: 31,
      faith: `none`,
      tone: 1,
      hair: `auburn`,
      who: `Eyven followed Sergeant Torvik south from Skarn, and grumbles about the heat every day of the year. He stands on the east side of the south gate.`,
      traits: [`cheerful`, `homesick`, `strong`, `superstitious about whales`],
      wants: `a whale to carry his name when he goes`,
      fears: `dying this far from the sea`,
      secret: `he's saving every coin for a boat home when the fjord opens`,
      token: `a sealskin purse heavy with copper`,
      says: `In Skarn a whale carries your name when you die. Here they carve it on the gatehouse. Wood. Whales are better.`,
      confides: `Every coin I get goes in the purse. When Skarn opens the fjord again I'm buying a boat and going home. Brenna knows. She pretends she doesn't.`,
    },
    {
      id: `watch-idrar`,
      name: `Idrar Sel`,
      pronoun: `he`,
      rank: `guard`,
      post: `eastGateN`,
      people: `Ashwalker, of the Salt Road clans`,
      age: 36,
      faith: `none`,
      tone: 3,
      hair: `black`,
      who: `Idrar guided caravans down the Salt Road until Cindergate fell and the imps made the Scar deadly. He stands on the north side of the east gate and reads the dark past the Ward the way he read the crust.`,
      traits: [`laconic`, `patient`, `dry-humoured`, `keen-eyed`],
      wants: `the Salt Road open again, and a strider under him`,
      fears: `being buried instead of glassed`,
      secret: `he thinks fire would end the husks at the edge of the light, and has said so to the Circle`,
      token: `a salt block stamped with his clan's route`,
      says: `Glassed dead don't get up. Buried ones do. I've told the Circle. They wrote it down.`,
      confides: `Fire finishes a husk. Everyone on the Salt Road knows it. Give me a hundred torches and a dry night and I'd clear the edge of the light. The Circle says that's not how it's done here.`,
    },
    {
      id: `watch-karra`,
      name: `Karra Nuvvi`,
      pronoun: `she`,
      rank: `guard`,
      post: `westGateN`,
      people: `the Drift, of the Stillreach herds`,
      age: 29,
      faith: `none`,
      tone: 1,
      hair: `black`,
      who: `Karra followed the frostelk herds until Maelis's choir came over the Stillreach. She stands on the north side of the west gate, and sings under her breath on the night watch.`,
      traits: [`quiet`, `steady`, `musical`, `wary of strangers`],
      wants: `her clan's songs sung at a camp again`,
      fears: `hearing her own name-song in the Pale Choir`,
      secret: `she sings the name-songs of the Watch's dead each night, so they're still with someone`,
      token: `an elk bell on a felt band`,
      says: `Out there the dead sing. In here they're carved on a wall. I sing for them anyway.`,
      confides: `Every night I sing Pell's song. Not his song: he never had one. One I made him. As long as it's sung he's still with the Watch.`,
    },
    {
      id: `watch-joss`,
      name: `Joss Penrose`,
      pronoun: `he`,
      rank: `guard`,
      post: `northGateW`,
      people: `Wrecker, of Saltmarrow`,
      age: 34,
      faith: `none`,
      tone: 2,
      hair: `brown`,
      who: `Joss washed up in Marizon from Saltmarrow with a coin for the sea and no sea to give it to. He keeps the quiet north gate, toward Frostmere, and likes it that way.`,
      traits: [`easygoing`, `cunning`, `talkative`, `brave when it counts`],
      wants: `to pay his way, and owe nobody`,
      fears: `a quiet gate, because quiet gates are the ones that break`,
      secret: `he's paid off two debts in Saltmarrow by selling what the Watch confiscates`,
      token: `a sea-coin for his own burial, never spent`,
      says: `North gate's the quiet one. I like quiet. Quiet means I'm still here.`,
      confides: `A Watch guard's pay doesn't cover a Saltmarrow debt. What the Watch takes off smugglers sometimes doesn't make it to the Hall. Don't look at me like that, the Hall would only lose it.`,
    },
    {
      id: `watch-tam`,
      name: `Tam Hobb`,
      pronoun: `he`,
      rank: `watchman`,
      post: `southGateInW`,
      people: `Heartfolk, born in Marizon`,
      age: 19,
      faith: `twoSeas`,
      tone: 0,
      hair: `fair`,
      who: `Tam took the Watch's coin the week after Watchman Pell fell, and is still learning which end of the spear to hold. He stands just inside the south gate.`,
      traits: [`eager`, `nervous`, `honest`, `talks too much`],
      wants: `Sergeant Torvik to say he did well, just once`,
      fears: `freezing when the bell goes`,
      secret: `he joined because Pell was his cousin, and nobody else in the family would`,
      token: `Watchman Pell's old lamp`,
      says: `First month with a spear. Sergeant says I hold it like a broom. It's a very good broom.`,
      confides: `Pell was my cousin. Nobody in the family would take his place on the wall, so I did. I carry his lamp. It still smells of his pipe.`,
    },
    {
      id: `watch-nell`,
      name: `Nell Ferris`,
      pronoun: `she`,
      rank: `watchman`,
      post: `eastGateInN`,
      people: `Heartfolk, of Highmore`,
      age: 23,
      faith: `twoSeas`,
      tone: 1,
      hair: `auburn`,
      who: `Nell is a Highmore refugee who took the Watch's coin to feed her little brothers. She stands just inside the east gate and trims the lamps, and lets the baker's girl help.`,
      traits: [`practical`, `tired`, `funny`, `protective`],
      wants: `her brothers fed and in the Circle's school`,
      fears: `her brothers left alone if she falls`,
      secret: `her brothers are sleeping under Captain Rook's stalls, and she knows the captain knows`,
      token: `a Highmore lace cuff, frayed`,
      says: `Watch pays in coin and bread. Bread first. You'd be surprised how far a spear goes for bread.`,
      confides: `My brothers sleep under the market stalls. The captain walks past them every night and never sees them. I owe her more than the Watch pays.`,
    },
    {
      id: `watch-wil`,
      name: `Wil Cotter`,
      pronoun: `he`,
      rank: `watchman`,
      post: `eastGateS`,
      people: `Heartfolk, born in Marizon`,
      age: 35,
      faith: `twoSeas`,
      tone: 2,
      hair: `black`,
      who: `Wil was a carter on the south-west road until the drovers began to vanish, and the Watch said wolves. He stands on the south side of the east gate now, and doesn't say wolves.`,
      traits: [`wary`, `plain-spoken`, `dependable`, `bitter about the wolves`],
      wants: `the Watch to say what took the drovers out loud`,
      fears: `the road, any road, after dark`,
      secret: `he drove with Hobb Marsh the week before Hobb vanished, and turned back early`,
      token: `a carter's whip handle, the lash gone`,
      says: `I drove the south-west road eight years. Wolves. That's what they told us. Wolves.`,
      confides: `I drove with Hobb Marsh that last week. I turned back early. Said the horse was lame. It wasn't. The road felt wrong. I never told Odette.`,
    },
    {
      id: `watch-sirra`,
      name: `Sirra Tamrin`,
      pronoun: `she`,
      rank: `watchman`,
      post: `westGateS`,
      people: `Ashwalker, of the Salt Road clans`,
      age: 26,
      faith: `none`,
      tone: 3,
      hair: `black`,
      who: `Sirra came with Guard Sel's last caravan and stayed when he did. She stands on the south side of the west gate, and wears an ember-red veil under the Watch's iron cap.`,
      traits: [`bold`, `teasing`, `sharp`, `restless`],
      wants: `to ride a strider down the Long Scar again`,
      fears: `nothing she'll admit to`,
      secret: `she's afraid of the Once-Graves, and stands with her back to them`,
      token: `an ember-red veil`,
      says: `Your Once-Graves say ONCE above the name. On the Scar we'd say it under. Less to read.`,
      confides: `I stand with my back to the Once-Graves. Every night. On the Scar the dead are glass and they stay where you put them. Here they're dirt.`,
    },
    {
      id: `watch-ned`,
      name: `Ned Farrow`,
      pronoun: `he`,
      rank: `watchman`,
      post: `northGateE`,
      people: `Heartfolk, born in Marizon`,
      age: 62,
      faith: `twoSeas`,
      tone: 1,
      hair: `grizzled`,
      who: `Ned has been a watchman for forty years and never wanted to be anything else. He keeps the east side of the north gate with Guard Penrose, and tells him the same stories every night.`,
      traits: [`garrulous`, `unhurried`, `kind`, `deaf in one ear`],
      wants: `one more quiet winter on the north gate`,
      fears: `outliving the Watch`,
      secret: `he remembers Master Idris young, or swears he does`,
      token: `a forty-year Watch buckle, polished thin`,
      says: `Forty years on this gate. Never lost it. Never had to. Knock wood.`,
      confides: `I remember Master Idris before he went grey. Well, greyer. He used to buy the Watch's barley bread for the gate. Said it was the only honest loaf in Marizon.`,
    },
  ],
  O$ = [
    {
      id: `watchRoad`,
      text: `Keep to the road, mage. The Watch has enough to carry.`,
      when: `calling out to a passing mage`,
      bark: !0,
    },
    {
      id: `watchLamps`,
      text: `Lamps lit. Stay inside the light.`,
      when: `calling out at night`,
      bark: !0,
      talk: !1,
      night: !0,
    },
    {
      id: `watchPell`,
      text: `No crystal remembers the Watch. So we remember each other. Pell's name is on the gatehouse wall.`,
      when: `about the Watch's dead`,
    },
    {
      id: `watchYou`,
      text: `You. I know your face. Walk on, slowly.`,
      when: `to a mage who hurt or killed someone in Marizon`,
      maxStanding: -1,
    },
    {
      id: `watchBack`,
      text: `Woke at the ward-stone with my spear still in my hand. They say the stones remember. They do.`,
      when: `just after coming back from the dead`,
      acts: [`recover`],
    },
    {
      id: `watchHeld`,
      text: `You held the breach with us. The Watch doesn't forget that, whatever the Crystal does.`,
      when: `to a mage who held a breach`,
      deed: [`held`],
      about: `you`,
    },
    {
      id: `watchKilled`,
      text: `{who}. You killed {who}. Walk on before I forget I'm on duty.`,
      when: `to a mage who killed someone`,
      deed: [`killed`],
      about: `you`,
      maxStanding: -1,
    },
    {
      id: `watchGift`,
      text: `For the Watch's widows' box. Thank you. Truly.`,
      when: `given Crowns`,
      reply: `gift`,
    },
  ],
  k$ = {
    watchman: [
      {
        id: `wmBell`,
        text: `If the bell goes, I'm to run to the sergeant, not away from her. I've practised.`,
        when: `about their duties`,
      },
      {
        id: `wmWho`,
        text: `Who's there? ...Oh. A mage. Go on, then.`,
        when: `startled at night`,
        bark: !0,
        night: !0,
      },
      {
        id: `wmHold`,
        text: `Hold the line! Hold it, they said hold it!`,
        when: `fighting at a breach`,
        bark: !0,
        acts: [`holdBreach`],
      },
      {
        id: `wmRally`,
        text: `Watch, to me! Stand away from them!`,
        when: `running at a mage who struck someone`,
        bark: !0,
        acts: [`rallyFight`],
      },
      {
        id: `wmCoin`,
        text: `Watch pays a watchman in coin, bread and an iron cap. The cap's the best of the three.`,
        when: `chatting with someone they know`,
        minStanding: 1,
      },
    ],
    guard: [
      {
        id: `gdSteel`,
        text: `Steel's the Circle's, the navy's the Watch's. The fear's my own.`,
        when: `about the Watch's kit`,
      },
      {
        id: `gdCarts`,
        text: `We check every cart from Highmore twice. Husks don't ride in carts, but grief does.`,
        when: `about keeping the gate`,
      },
      {
        id: `gdVigil`,
        text: `The Vigil stands at the Sanctum's gate. We stand at the town's. Between us the market sleeps.`,
        when: `about the Black Vigil`,
      },
      {
        id: `gdMind`,
        text: `Mind the gate, mage. It opens both ways.`,
        when: `calling out to a mage going through the gate`,
        bark: !0,
      },
      {
        id: `gdShields`,
        text: `Spears to the stone! Keep them off the forgewright!`,
        when: `fighting at a breach`,
        bark: !0,
        acts: [`holdBreach`],
      },
      {
        id: `gdRally`,
        text: `Lay down your spells. Now.`,
        when: `standing against a mage who struck someone`,
        bark: !0,
        acts: [`rallyFight`],
      },
    ],
    sergeant: [
      {
        id: `sgWhite`,
        text: `Sergeant's white. Means when it goes wrong, they look at me first.`,
        when: `about their rank`,
      },
      {
        id: `sgQuest`,
        text: `I've four spears and a gate the Hollow wants. Don't tell me about your quest.`,
        when: `busy, to a mage they don't know`,
        maxStanding: 1,
      },
      {
        id: `sgHolloway`,
        text: `Captain Holloway says the Watch is the part of the Ward you can talk to. So talk, quick.`,
        when: `about Captain Holloway`,
      },
      {
        id: `sgDark`,
        text: `You. Mage. If you're going out, be back by dark. I count.`,
        when: `calling out to a mage near the gate`,
        bark: !0,
        night: !1,
      },
      {
        id: `sgForm`,
        text: `Form on me! Spears to the hole, and nobody dies today!`,
        when: `leading the fight at a breach`,
        bark: !0,
        acts: [`holdBreach`],
      },
      {
        id: `sgRally`,
        text: `In the Watch's name, stand where you are!`,
        when: `running at a mage who struck someone`,
        bark: !0,
        acts: [`rallyFight`],
      },
    ],
    captain: [
      {
        id: `cpMarket`,
        text: `Every stall in the Crystal Market owes the Ward its walls. Some of them even pay the Watch.`,
        when: `about the market`,
      },
      {
        id: `cpCircles`,
        text: `Two captains, one market, and a town twice the size it was built for. We walk it in circles, all day.`,
        when: `about walking the market`,
      },
      {
        id: `cpPurse`,
        text: `Mind your purse in the market, mage. Not everyone here is grieving.`,
        when: `calling out to a mage in the market`,
        bark: !0,
        night: !1,
      },
      {
        id: `cpShut`,
        text: `Market's shut. Go on home, or to the Rising Mage. Same thing, most nights.`,
        when: `calling out at night`,
        bark: !0,
        night: !0,
      },
      {
        id: `cpHolloway`,
        text: `Holloway keeps the bridge-head. We keep everything that walks past it.`,
        when: `about Captain Holloway`,
      },
      {
        id: `cpRally`,
        text: `Watch! Ring them in! Nobody leaves the market!`,
        when: `running at a mage who struck someone`,
        bark: !0,
        acts: [`rallyFight`],
      },
      {
        id: `cpBreach`,
        text: `Captains to the breach! Sergeants, hold your gates!`,
        when: `running to a breach`,
        bark: !0,
        acts: [`holdBreach`],
      },
    ],
    vigilant: [
      {
        id: `vgWhere`,
        text: `The Black Vigil stands where the Ward begins. Pass in peace, mage.`,
        when: `greeting a mage`,
      },
      {
        id: `vgTone`,
        text: `Our sparks answered no tone. The Ward took us anyway, and gave us its light to carry.`,
        when: `about the Paladins`,
      },
      {
        id: `vgSpark`,
        text: `The Watch has no spark. We do. So we stand nearest the Crystal, and go wherever the light is needed.`,
        when: `about the Watch`,
      },
      {
        id: `vgWarn`,
        text: `Strike one of this town's people, and the Vigil will come for you. Anywhere inside the Ward.`,
        when: `a warning, to a mage they don't know`,
        maxStanding: 0,
      },
      {
        id: `vgSworn`,
        text: `The light is with you, Sworn.`,
        when: `calling out to a Paladin`,
        bark: !0,
        schools: [`paladin`],
      },
      {
        id: `vgThin`,
        text: `Walk in the light, mage. Out there it's thin.`,
        when: `calling out at night`,
        bark: !0,
        night: !0,
      },
      {
        id: `vgRally`,
        text: `By the Ward's light, you'll answer for that!`,
        when: `running at a mage who struck someone`,
        bark: !0,
        acts: [`rallyFight`],
      },
      {
        id: `vgBreach`,
        text: `The Ward is our oath. Close it!`,
        when: `fighting at a breach`,
        bark: !0,
        acts: [`holdBreach`],
      },
      {
        id: `vgRise`,
        text: `The Crystal remembers. Back to the gate.`,
        when: `just after rising at the Crystal`,
        acts: [`riseVigil`],
      },
    ],
  };
