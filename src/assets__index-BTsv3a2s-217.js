// assets__index-BTsv3a2s 217 — def
// Lines 139253-140057 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var Z$ = class {
  g;
  folk;
  rememberUntil = 0;
  lastVoice = -99;
  minded = !1;
  skew = 0;
  newest = { epoch: -1, v: -1 };
  said = new Map();
  replies = new Map();
  askedFor = null;
  bodiesOf = { room: ``, v: -1 };
  breach = null;
  hole = null;
  missing = [];
  pleas = new Map();
  carrying = new Set();
  constructor(e) {
    ((this.g = e), Vr());
    let t = wr().map((e) => ({
        id: e.id,
        look: e.look,
        name: e.name,
        title: e.title,
        color: e.color ?? `#e8dcc0`,
        lines: e.lines,
        stops: [{ x: e.x - Ar, y: e.y - jr, wait: 1, dir: e.dir }],
      })),
      n = K$.map((e) => ({
        ...e,
        stops: e.stops.map((e) => ({ ...e, x: e.x * 2, y: e.y * 2 })),
      }));
    ((this.folk = [...n, ...t].map((e) => ({
      def: e,
      ...X$(e),
      x: 0,
      y: 0,
      dir: 0,
      frame: 0,
      moving: !1,
      working: !1,
      phase: [...e.id].reduce((e, t) => e + t.charCodeAt(0) * 0.37, 0) % 5,
      alpha: +!e.echo,
      bubble: null,
      lastBark: -99,
      line: 0,
      plan: null,
      body: null,
      strikeT: -1,
      castT: -1,
      downT: -1,
      faceUntil: 0,
    }))),
      this.update(0));
  }
  byId(e) {
    let t = this.folk.find((t) => t.def.id === e);
    if (!t || t.alpha < 0.3) return null;
    let n = this.lookOf(t);
    return {
      x: t.x,
      y: t.y,
      name: t.def.name,
      title: t.def.title ?? `Marizon`,
      color: t.def.color,
      art: n,
      lines: t.def.lines,
    };
  }
  byEnt(e) {
    let t = this.folk.find((t) => t.body?.ent === e);
    return t ? { x: t.x, y: t.y, name: t.def.name } : null;
  }
  people() {
    return this.folk
      .filter((e) => !e.def.echo && e.alpha >= 0.3 && !this.down(e))
      .map((e) => ({ id: e.def.id, x: e.x, y: e.y, name: e.def.name }));
  }
  drawn = {};
  struck(e, t, n) {
    let r = this.folk.find((t) => t.body?.ent === e);
    r &&
      ((r.strikeT = this.g.time),
      (r.dir = Y$(t - r.x)),
      (r.faceUntil = this.g.real + 1.2));
  }
  cast(e, t, n) {
    let r = this.folk.find((t) => t.body?.ent === e);
    r &&
      ((r.castT = this.g.time),
      Math.abs(t - r.x) > 0.3 && (r.dir = Y$(t - r.x)),
      (r.faceUntil = this.g.real + 1.2));
  }
  heard(e) {
    let t = this.folk.find((t) => t.def.id === e);
    t && (t.lastBark = this.lastVoice = this.g.real);
  }
  get active() {
    let e = this.g.story;
    return !e || e.done;
  }
  setPlans(e) {
    if (!(
      e.epoch < this.newest.epoch ||
      (e.epoch === this.newest.epoch && e.v <= this.newest.v)
    )) {
      ((this.newest = { epoch: e.epoch, v: e.v }),
        (this.skew = e.now - Date.now()),
        (this.minded = !0),
        this.breached(e.breach ?? null),
        this.missed(e.missing ?? []));
      for (let t of e.folk) {
        let e = this.folk.find((e) => e.def.id === t.id);
        e && t.path.length && (e.plan = t);
      }
    }
  }
  setBodies(e) {
    if (!(e.room === this.bodiesOf.room && e.v <= this.bodiesOf.v)) {
      if (e.room !== this.bodiesOf.room) for (let e of this.folk) e.body = null;
      ((this.bodiesOf = { room: e.room, v: e.v }),
        (this.hole = e.breach ?? null));
      for (let t of e.bodies) {
        let e = this.folk.find((e) => e.def.id === t.id);
        e && (e.body = t);
      }
    }
  }
  breached(e) {
    let t = this.breach;
    this.breach = e;
    let n = this.g;
    if (e && e.phase === `open` && e.dire && !(t?.id === e.id && t.dire)) {
      n.banner = {
        title: `THE VIGIL IS CALLED`,
        subtitle: `The breach at ${e.name} is out of hand`,
        t0: n.real,
        dur: 3.5,
        color: `#f5d66b`,
      };
      return;
    }
    if (!e || (t?.id === e.id && t.phase === e.phase)) return;
    let r = `#ff6a5a`;
    e.phase === `warning`
      ? (n.banner = {
          title: `THE WARD IS BREAKING`,
          subtitle: `at ${e.name}`,
          t0: n.real,
          dur: 4,
          color: r,
        })
      : e.phase === `open`
        ? (n.banner = {
            title: `BREACH`,
            subtitle: `The Hollow is coming through at ${e.name}`,
            t0: n.real,
            dur: 3,
            color: r,
          })
        : e.phase === `over` &&
          (n.banner = {
            title: `THE WARD HOLDS`,
            subtitle:
              (e.sealedBy === `stone`
                ? `A new stone is set`
                : e.sealedBy === `waves`
                  ? `The breach is held`
                  : `The Circle seals the breach`) +
              (e.fallen?.length
                ? `. Fallen: ${e.fallen.map((e) => this.folk.find((t) => t.def.id === e)?.def.name ?? e).join(`, `)}`
                : ``),
            t0: n.real,
            dur: 4,
            color: `#7ef9ff`,
          });
  }
  missed(e) {
    let t = this.missing;
    if (((this.missing = e), !this.minded || !this.newestSeen)) {
      this.newestSeen = !0;
      return;
    }
    let n = this.g,
      r = (e) => this.folk.find((t) => t.def.id === e)?.def.name ?? e;
    for (let i of e)
      t.some((e) => e.id === i.id && e.since === i.since) ||
        (n.banner = i.need
          ? {
              title: `FEVER`,
              subtitle: `${r(i.id)} is sick in bed: only frost moss from ${i.where} brings it down`,
              t0: n.real,
              dur: 4,
              color: `#ffb35a`,
            }
          : {
              title: `MISSING`,
              subtitle: `${r(i.id)} is out past the Ward, at ${i.where}`,
              t0: n.real,
              dur: 4,
              color: `#ffb35a`,
            });
    for (let i of t)
      e.some((e) => e.id === i.id) ||
        (this.carrying.delete(`${i.id}|${i.since}`),
        i.takerNames?.includes(n.name) &&
          ((n.banner = {
            title: i.need ? `MENDED` : `HOME`,
            subtitle: i.need
              ? `${r(i.id)}'s fever has broken`
              : `${r(i.id)} is home`,
            t0: n.real,
            dur: 3,
            color: `#7ef9ff`,
          }),
          n.quests.trackedId() === `plea:${i.id}` && n.quests.track(null)));
  }
  newestSeen = !1;
  lost(e) {
    let t = this.folk.find((t) => t.def.id === e);
    return (
      !!t &&
      t.plan?.act === `lost` &&
      t.body?.mode !== `led` &&
      this.missing.some((t) => t.id === e && !t.need)
    );
  }
  cureNear(e, t, n) {
    return (
      this.taken().find(
        (r) =>
          r.need &&
          !this.carrying.has(`${r.id}|${r.since}`) &&
          Math.hypot(r.x - e, r.y - t) < n,
      ) ?? null
    );
  }
  taken() {
    let e = this.g.name;
    return this.missing
      .filter((t) => t.takerNames?.includes(e))
      .map((e) => ({
        ...e,
        who: this.folk.find((t) => t.def.id === e.id)?.def.name ?? e.id,
      }));
  }
  takePlea(e, t) {
    let n = this.pleas.get(e);
    if (
      (this.pleas.delete(e),
      !n || !this.missing.some((e) => e.id === n.missing))
    )
      return null;
    let r = this.g,
      i = r.story;
    if (!i) return null;
    this.g.api.folkTalked?.(e, ``);
    let a = this;
    return (function* () {
      let o = a.missing.find((e) => e.id === n.missing)?.need,
        s = [
          o ? `I'll fetch the moss.` : `I'll find ${n.who}.`,
          o ? `Tell me about the fever.` : `Tell me what happened.`,
          `Not now.`,
        ],
        c = i.ask(`crystal`, n.ask, s, t);
      yield c.wait;
      let l = c.result();
      l === 1 &&
        ((c = i.ask(`crystal`, n.account, [s[0], s[2]], t)),
        yield c.wait,
        (l = c.result() === 0 ? 0 : 2));
      let u = l === 0 ? `take` : `decline`;
      if ((r.api.folkPlea?.(e, n.missing, u), u === `take`)) {
        let e = a.missing.find((e) => e.id === n.missing);
        (e &&
          !e.takerNames?.includes(r.name) &&
          (e.takerNames = [...(e.takerNames ?? []), r.name]),
          r.quests.track(`plea:${n.missing}`),
          (r.banner = {
            title: `A PLEA`,
            subtitle: o
              ? `Frost moss from ${n.where}, for ${n.who}`
              : `Bring ${n.who} home from ${n.where}`,
            t0: r.real,
            dur: 3,
            color: `#ffb35a`,
          }));
      }
    })();
  }
  wounded(e) {
    return this.folk.find((t) => t.def.id === e)?.body?.mode === `wounded`;
  }
  down(e) {
    return !!(e.body?.down || e.plan?.down);
  }
  serverLine(e) {
    let t = this.folk.find((t) => t.def.id === e.npc);
    if (!t) return;
    let n = this.g;
    if ((e.plea && this.pleas.set(e.npc, e.plea), e.why === `reply`)) {
      this.replies.set(e.npc, e.text || `…`);
      return;
    }
    if (e.why === `talk`) {
      e.text &&
        this.said.set(e.npc, { line: e.line ?? ``, text: e.text, at: n.real });
      return;
    }
    !e.text ||
      !this.active ||
      t.alpha < 0.3 ||
      n.real - this.lastVoice < 2 ||
      ((t.bubble = { text: e.text, until: n.real + 5.5 }),
      (t.lastBark = this.lastVoice = n.real));
  }
  takeLine(e) {
    if (!this.minded) return null;
    let t = this.said.get(e);
    this.said.delete(e);
    let n = t && this.g.real - t.at < 25 ? t : null;
    return (
      this.g.api.folkTalked?.(e, n?.line ?? ``),
      this.g.api.folkLine?.(e, `talk`),
      n?.text ?? null
    );
  }
  topics(e) {
    let t = H$.find((t) => t.id === e);
    if (!t) return [];
    let n = (e) =>
      this.missing.some((t) => t.id === e) ||
      !!this.folk.find((t) => t.def.id === e && this.down(t));
    return t.bonds
      .filter((e) => !!e.id)
      .map((e, t) => ({
        id: e.id,
        name: e.who.split(` `)[0],
        rank: Math.abs(e.warmth) * 2 + (e.warmth > 0 && n(e.id) ? 10 : 0),
        i: t,
      }))
      .sort((e, t) => t.rank - e.rank || e.i - t.i)
      .slice(0, 3)
      .map(({ id: e, name: t }) => ({ id: e, name: t }));
  }
  talk(e, t, n) {
    let r = this.g,
      i = r.story,
      a = r.api;
    if (
      !i ||
      !this.minded ||
      !a.folkAsk ||
      !a.folkNews ||
      !a.folkTell ||
      !a.folkGive
    )
      return null;
    let o = this,
      s = H$.find((t) => t.id === e),
      c = s?.pronoun === `she` ? `her` : s?.pronoun === `he` ? `him` : `them`,
      l = (e) => {
        let t = { done: !1 };
        return (
          e.then((e) => {
            ((t.done = !0), (t.v = e));
          }),
          { wait: () => t.done, got: () => t.v }
        );
      };
    function* u(t) {
      o.replies.delete(e);
      let n = l(t()),
        i = r.real + 6;
      yield () =>
        o.replies.has(e) || (n.wait() && n.got() !== null) || r.real > i;
      let a = n.wait() ? n.got() : null;
      if (a)
        return (
          r.floater(r.me.x * 16, r.me.y * 16 - 30, a, `#ff9a8a`, !1),
          null
        );
      let s = o.replies.get(e) ?? null;
      return (o.replies.delete(e), s);
    }
    return (function* () {
      let s = n;
      for (let n = 0; n < 16; n++) {
        let n = i.ask(
          `crystal`,
          s,
          [`Ask about…`, `Tell ${c} something`, `Give Crowns`, `Goodbye.`],
          t,
        );
        yield n.wait;
        let d = n.result();
        if (d === 3) return;
        let f = null;
        if (d === 0) {
          let n = o.topics(e),
            r = i.ask(
              `crystal`,
              s,
              [...n.map((e) => e.name), `What's the talk of the town?`],
              t,
            );
          yield r.wait;
          let c = n[r.result()];
          f = yield* u(() => a.folkAsk(e, c ? c.id : `town`));
        } else if (d === 1) {
          let n = l(a.folkNews(e));
          yield n.wait;
          let o = n.got();
          if (!o.length) {
            r.floater(
              r.me.x * 16,
              r.me.y * 16 - 30,
              `Nothing they haven't heard`,
              `#f5d66b`,
              !1,
            );
            continue;
          }
          let c = i.ask(
            `crystal`,
            s,
            [...o.map((e) => e.text), `Never mind.`],
            t,
          );
          yield c.wait;
          let d = o[c.result()];
          if (!d) continue;
          f = yield* u(() => a.folkTell(e, d.id));
        } else {
          let n = [5, 25, 100],
            r = i.ask(
              `crystal`,
              s,
              [...n.map((e) => `${e} Crowns`), `Never mind.`],
              t,
            );
          yield r.wait;
          let o = n[r.result()];
          if (!o) continue;
          f = yield* u(() => a.folkGive(e, o));
        }
        f && (s = f);
      }
    })();
  }
  remember() {
    this.rememberUntil = this.g.real + 7;
    let e = this.folk.find((e) => e.def.echo);
    e &&
      ((e.bubble = { text: `Rise, mage.`, until: this.g.real + 5 }),
      (e.lastBark = this.g.real));
  }
  update(e) {
    let t = this.g,
      n = Date.now() / 1e3,
      r = Ge(Date.now()),
      i = null,
      a = Date.now() + this.skew;
    for (let o of this.folk) {
      let s = o.def,
        c = o.body;
      if (
        o.plan &&
        (c?.mode === `wounded` || c?.mode === `carried`) &&
        c.x !== void 0 &&
        c.y !== void 0
      )
        ((o.x = c.x),
          (o.y = c.y),
          (o.moving = !1),
          (o.working = !1),
          (o.frame = 0));
      else if (
        o.plan &&
        c?.mode &&
        c.x !== void 0 &&
        c.y !== void 0 &&
        !c.down
      ) {
        let r = Math.min(1, e * 10),
          i = (c.x - o.x) * r,
          a = (c.y - o.y) * r;
        if (
          ((o.x += i),
          (o.y += a),
          (o.moving = Math.hypot(c.x - o.x, c.y - o.y) > 0.05),
          o.moving)
        )
          o.dir = Math.abs(i) > Math.abs(a) ? (i > 0 ? 2 : 3) : +(a < 0);
        else if (!(t.real < o.faceUntil) && c.mode === `fight`) {
          let e = Math.atan2(t.me.y - o.y, t.me.x - o.x);
          o.dir =
            Math.abs(Math.cos(e)) > Math.abs(Math.sin(e))
              ? Math.cos(e) > 0
                ? 2
                : 3
              : +(Math.sin(e) < 0);
        }
        ((o.frame = o.moving
          ? 2 + (Math.floor(n * 9) % 4)
          : Math.floor(n * 2) % 2),
          (o.working = !1));
      } else if (o.plan) {
        let e = J$(o.plan, a);
        if (
          ((o.x = e.x),
          (o.y = e.y),
          (o.dir = e.dir),
          (o.moving = e.moving),
          e.moving)
        )
          ((o.frame = 2 + (Math.floor(n * 7) % 4)), (o.working = !1));
        else {
          let e = o.plan.work && s.habit;
          ((o.frame = e
            ? e.frames[Math.floor(n * e.fps) % e.frames.length]
            : Math.floor(n * 2) % 2),
            (o.working = o.plan.work));
        }
      } else {
        let e = (((n + (s.phase ?? 0)) % o.period) + o.period) % o.period,
          t = o.legs[0];
        for (let n of o.legs) e >= n.t0 && (t = n);
        let r = t.walk > 0 ? Math.min(1, (e - t.t0) / t.walk) : 1;
        if (
          ((o.x = Ar + t.from.x + (t.to.x - t.from.x) * r),
          (o.y = jr + t.from.y + (t.to.y - t.from.y) * r),
          r < 1)
        ) {
          let e = t.to.x - t.from.x,
            r = t.to.y - t.from.y;
          ((o.dir =
            Math.abs(e) > Math.abs(r) ? (e > 0 ? 2 : 3) : r > 0 ? 0 : 1),
            (o.frame = 2 + (Math.floor(n * 7) % 4)),
            (o.moving = !0),
            (o.working = !1));
        } else {
          o.dir = t.to.dir ?? 0;
          let e = t.to.act && s.habit;
          ((o.frame = e
            ? e.frames[Math.floor(n * e.fps) % e.frames.length]
            : Math.floor(n * 2) % 2),
            (o.moving = !1),
            (o.working = !!e));
        }
      }
      if (s.echo) {
        let n =
          t.real < this.rememberUntil
            ? 0.9
            : r
              ? 0.45 + 0.15 * Math.sin(t.time * 1.3)
              : 0;
        o.alpha += (n - o.alpha) * Math.min(1, e * 2);
      } else {
        let n = this.down(o);
        n && o.downT < 0 ? (o.downT = t.time) : n || (o.downT = -1);
        let r = n && !(s.watch && t.time - o.downT < 2.2) ? 0 : 1;
        ((o.alpha = e === 0 ? r : o.alpha + (r - o.alpha) * Math.min(1, e * 3)),
          o.alpha < 0.3 && (o.bubble = null));
      }
      if (
        (o.bubble && o.bubble.until < t.real && (o.bubble = null),
        !this.active || o.alpha < 0.3 || e === 0)
      )
        continue;
      let l = Math.hypot(t.me.x - o.x, t.me.y - o.y);
      (s.lines.length &&
        !c?.mode &&
        l < (s.hear ?? 3.5) &&
        t.real - o.lastBark > 28 &&
        t.real - this.lastVoice > 4 &&
        !t.meDoc?.dead &&
        (!i || l < i.dist) &&
        (i = { f: o, dist: l }),
        s.kind === `refugee` &&
          o.bubble &&
          t.real - o.lastBark < 1.4 &&
          o.frame < 2 &&
          (o.frame = 6),
        s.kind === `forgewright` &&
          o.frame === 6 &&
          !this.artOf(o) &&
          Math.random() < e * 10 &&
          t.particles.spawn({
            x: o.x * 16 - 7,
            y: o.y * 16 - 2,
            z: 8,
            vz: 30 + Math.random() * 30,
            vx: -10 - Math.random() * 20,
            gravity: 120,
            life: 0.4,
            size: 1,
            color: Math.random() < 0.5 ? `#ffd166` : `#ff7a1a`,
            glow: !0,
          }));
    }
    if (i) {
      let e = i.f;
      e.plan && t.api.folkLine
        ? (t.api.folkLine(e.def.id, `near`), (e.lastBark = t.real))
        : ((e.bubble = {
            text: e.def.lines[e.line % e.def.lines.length],
            until: t.real + 5.5,
          }),
          e.line++,
          (e.lastBark = this.lastVoice = t.real));
    }
    let o = t.talkable?.id;
    if (o !== this.askedFor) {
      this.askedFor = o ?? null;
      let e = o?.startsWith(`folk:`)
        ? this.folk.find((e) => e.def.id === o.slice(5))
        : void 0;
      e?.plan && !this.said.has(e.def.id) && t.api.folkLine?.(e.def.id, `talk`);
    }
  }
  lookOf(e) {
    return e.def.watch
      ? bR(e.def.watch)
      : (e.def.look ?? `realm:${e.def.kind}${e.def.n ? `#${e.def.n}` : ``}`);
  }
  artOf(e) {
    return e.def.watch
      ? kR(e.def.watch)
      : e.def.look
        ? sz(e.def.look)
        : e.def.kind
          ? oz(e.def.kind, e.def.n ?? 0)
          : null;
  }
  collect(e, t, n, r, i, a) {
    if (!this.active) return;
    let o = this.g;
    for (let s of this.folk) {
      if (s.alpha < 0.02) continue;
      let c = s.x * 16,
        l = s.y * 16;
      if (c < n - 30 || c > n + i + 30 || l < r - 10 || l > r + a + 40)
        continue;
      let u = this.artOf(s),
        d = !!s.def.echo,
        f = d ? Math.round(Math.sin(o.time * 1.2) * 1.5 - 2) : 0,
        p = s.def.small ?? 1,
        m = s.body?.mode === `wounded` || s.body?.mode === `carried`,
        h = m && !u?.death,
        g = (e, n, r) => {
          if (p === 1 && !h) return r();
          (t.save(),
            t.translate(e, n),
            h && t.rotate(-Math.PI / 2),
            t.scale(p, p),
            t.translate(-e, -n),
            r(),
            t.restore());
        };
      if (u) {
        let i = s.downT >= 0 ? o.time - s.downT : m ? 99 : void 0,
          a = s.strikeT >= 0 ? o.time - s.strikeT : void 0,
          h = s.castT >= 0 ? o.time - s.castT : void 0;
        (e.push({
          y: l,
          x: c,
          box: gz(u),
          draw: () => {
            ((t.globalAlpha = s.alpha),
              g(c - n, l - r, () =>
                mz(t, u, c - n, l - r + f, {
                  dir: s.dir,
                  t: o.time + s.phase,
                  moving: s.moving,
                  working: s.working,
                  attack: a,
                  cast: h,
                  death: u.death ? i : void 0,
                }),
              ),
              (t.globalAlpha = 1),
              this.bar(t, s, c, l, gz(u)[1] * p, n, r));
          },
        }),
          d &&
            o.lights.push({
              x: c - n,
              y: l - r - PR(14),
              r: 40,
              color: `#8ef6ff`,
              a: 0.8 * s.alpha,
              z: PR(14),
            }),
          s.def.lamp &&
            o.lights.push({
              x: c - n,
              y: l - PR(24) - r,
              r: s.def.lamp.r,
              color: s.def.lamp.color,
              a: s.def.lamp.a,
            }));
        continue;
      }
      let _ = (s.def.look || s.def.watch ? tR(this.lookOf(s)) : Tg(s.def.kind))
        .frames[s.dir][s.frame];
      if (
        (e.push({
          y: l,
          x: c,
          box: [16 * NR, 48 * NR, 10],
          draw: () => {
            ((t.globalAlpha = s.alpha),
              d ||
                ((t.fillStyle = `rgba(0,0,0,0.3)`),
                t.beginPath(),
                t.ellipse(
                  Math.round(c - n),
                  Math.round(l - r),
                  6 * NR,
                  2.5 * NR,
                  0,
                  0,
                  Math.PI * 2,
                ),
                t.fill()),
              g(c - n, l - r, () => IR(t, _, c - n, l - r + f, 10, 26)),
              (t.globalAlpha = 1),
              this.bar(t, s, c, l, 40 * NR * p, n, r));
          },
        }),
        d &&
          o.lights.push({
            x: c - n,
            y: l - r - PR(14),
            r: 40,
            color: `#8ef6ff`,
            a: 0.8 * s.alpha,
            z: PR(14),
          }),
        s.def.lamp)
      ) {
        let e = s.def.lamp;
        o.lights.push({
          x: c + ((s.dir === 3 ? 20 - e.dx : e.dx) - 10) * NR - n,
          y: l + e.dy * NR - r,
          r: e.r,
          color: e.color,
          a: e.a,
        });
      }
      if (s.def.kind === `archmage` && s.frame === 6) {
        let e = o.orbPos(s.x, s.y, s.dir, !0, 0);
        o.lights.push({
          x: e.x - n,
          y: e.y - r,
          r: 30,
          color: `#ffd166`,
          a: 0.8,
        });
      }
    }
  }
  bar(e, t, n, r, i, a, o) {
    let s = t.body;
    !s ||
      s.down ||
      s.max <= 0 ||
      s.hp >= s.max ||
      t.alpha < 0.5 ||
      this.g.hpBar(
        e,
        n,
        r,
        i,
        16,
        Math.max(0, s.hp) / s.max,
        s.mode === `fight` ? `#ff9a2a` : `#e03a4a`,
        a,
        o,
      );
  }
  labels() {
    if (!this.active) return [];
    let e = this.g,
      t = [];
    for (let n of this.folk) {
      if (n.alpha < 0.3) continue;
      let r = Math.hypot(e.me.x - n.x, e.me.y - n.y) < 7,
        i = n.bubble && n.bubble.until > e.real ? n.bubble.text : null;
      (r || i) &&
        t.push({
          id: n.def.id,
          x: n.x * 16,
          y: n.y * 16,
          name: n.def.name,
          color: n.def.color,
          bubble: i,
        });
    }
    return t;
  }
};
