// assets__index-BTsv3a2s 159 — math
// Lines 91493-92593 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var Rie = class extends Ez {
    busyUntil = 0;
    nextGob = 0;
    gobUntil = 0;
    jump = null;
    lane = null;
    roll = null;
    noteAt = -99;
    struckAt = -99;
    arcs = [];
    crawlers = [];
    groundFx = [];
    bodyFx = [];
    wheelList = null;
    patchList = null;
    hollowed() {
      return this.run.run.diff === `hollowed`;
    }
    busy() {
      return (
        this.t < this.busyUntil || !!this.jump || !!this.lane || !!this.roll
      );
    }
    pools() {
      return this.run.zones.filter((e) => e.label === `runoff`);
    }
    at(e) {
      return e.shape;
    }
    body() {
      let e = Py(`motherbrim`),
        t = aB(`motherbrim`);
      return t
        ? { ax: t.ax, ay: t.ay, w: Mp(t.frames[0]), k: t.ay / e.ay, own: e }
        : { ax: e.ax, ay: e.ay, w: e.frames[0].width, k: 1, own: e };
    }
    origin(e, t) {
      let n = this.m,
        r = this.body(),
        i = n.rx * 16,
        a = n.ry * 16;
      if (n.lunge > 0) {
        let e = Math.sin((n.lunge / 0.25) * Math.PI) * 5;
        ((i += n.lungeDir.x * e), (a += n.lungeDir.y * e));
      }
      let o = n.doc.facing < 0,
        s = r.w;
      return {
        x: Math.round(i - (o ? s - r.ax : r.ax) - e),
        y: Math.round(a - r.ay - t),
        flip: o,
        w: s,
        sq: [0, 1, 2, 1][Math.floor(n.anim) % 4],
      };
    }
    core(e, t) {
      let n = this.origin(e, t),
        r = this.body(),
        i = n.x + (n.flip ? n.w - r.ax : r.ax),
        a = (35 - r.own.ax) * r.k;
      return {
        x: i + (n.flip ? -a - 1 : a),
        y: n.y + r.ay + (24 + n.sq - r.own.ay) * r.k,
      };
    }
    rim(e) {
      let t = [0, 1, 2, 1][Math.floor(this.m.anim) % 4],
        n = this.body().k,
        r = (27 + t) * n,
        i = (19 - t) * n;
      return {
        x: this.m.rx + (Math.cos(e) * r) / 16,
        y: this.m.ry + (-i + Math.sin(e) * i) / 16,
      };
    }
    mouth() {
      let e = this.body().k;
      return {
        x: this.m.rx + ((this.m.doc.facing < 0 ? -12 : 12) * e) / 16,
        y: this.m.ry - (20 * e) / 16,
      };
    }
    put(e, t, n, r, i, a = {}) {
      t?.length && e.push({ frames: t, x: n, y: r, t0: this.t, dur: i, ...a });
    }
    pinned(e, t, n, r, i, a, o, s, c) {
      if (!t.length) return;
      let l = QB(t[0].width / 2 - i, t[0].height / 2 - a, o);
      this.put(e, t, n + l.x / 16, r + l.y / 16, s, { angle: o, sort: c });
    }
    pushFx(e, t, n, r, i) {
      let a = (t.sort ?? t.y) * 16,
        o = (this.t - t.t0) / t.dur;
      e.push({
        y: a,
        x: t.x * 16,
        box:
          o >= 0 && o < 1
            ? Sz(Rk(t.frames, o), t.x * 16, t.y * 16, a, t)
            : void 0,
        draw: () => this.drawFx(n, t, r, i),
      });
    }
    drawFx(e, t, n, r) {
      let i = (this.t - t.t0) / t.dur;
      if (i < 0 || i >= 1) return;
      let a = Rk(t.frames, i);
      t.angle === void 0
        ? Bk(e, a, t.x * 16 - n, t.y * 16 - r, { ax: t.ax, ay: t.ay })
        : Uk(e, a, t.x * 16 - n, t.y * 16 - r, t.angle);
    }
    use(e) {
      if (this.busy()) return !1;
      (e === `slam` && this.slam(),
        e === `split` && this.overflow(),
        e === `arc` && this.note(),
        e === `drown` && this.brimful());
    }
    move(e) {
      let t = this.m,
        n = this.me;
      if (this.busy() || this.t < this.gobUntil) return;
      let r = n.x - t.rx,
        i = n.y - t.ry,
        a = Math.hypot(r, i);
      if (
        (Math.abs(r) > 0.05 && (t.doc.facing = r < 0 ? -1 : 1),
        a <= 8 && this.t >= this.nextGob)
      ) {
        this.gob();
        return;
      }
      a > 4.5 &&
        (this.inRoom(n.x, n.y, 0) || this.inRoom(t.rx, t.ry, -1)) &&
        this.run.step(this.mob, n.x, n.y, this.mob.speed * e, !0);
    }
    gob(e = this.me.x, t = this.me.y) {
      ((this.nextGob = this.t + 2.5), (this.gobUntil = this.t + 0.5));
      let n = { t: `circle`, x: e, y: t, r: 1 };
      this.hitShape(
        n,
        0.8,
        `#6fdc5a`,
        this.mob.dmg,
        () =>
          this.put(this.bodyFx, rV(`gob`, `Splat`), n.x, n.y, 0.42, {
            ax: 16,
            ay: 19,
            sort: n.y + 0.05,
          }),
        this.look(`gob`, { tele: `Landing`, rim: !1 }),
      );
      let r = this.mouth();
      (this.run.lob(rV(`gob`, `Gob`), r.x, r.y, n.x, n.y, 0.8, {
        h: 2.2,
        spin: !0,
      }),
        (this.m.lunge = 0.2));
      let i = Math.hypot(n.x - this.m.rx, n.y - this.m.ry) || 1;
      ((this.m.lungeDir = {
        x: (n.x - this.m.rx) / i,
        y: (n.y - this.m.ry) / i,
      }),
        q.sfx(`cast`, 0.3));
    }
    slam(e = this.me.x, t = this.me.y) {
      let n = { t: `circle`, x: e, y: t, r: 2.6 };
      ((this.busyUntil = this.t + YB + 0.3),
        (this.jump = {
          x0: this.m.rx,
          y0: this.m.ry,
          x1: n.x,
          y1: n.y,
          t0: this.t,
        }),
        (this.m.lunge = 0.25),
        (this.m.lungeDir = { x: 0, y: 1 }),
        this.hitShape(
          n,
          YB,
          `#6fdc5a`,
          { frac: 0.16 },
          () => this.splashdown(n.x, n.y),
          this.look(`slam`, { tele: `Telegraph`, rim: !1 }),
        ),
        q.sfx(`cast`, 0.4));
    }
    hop(e) {
      let t = this.jump,
        n = am((e - 0.15) / 0.85),
        r = sm(am(n / 0.5)),
        i = n <= 0 ? 0 : n < 0.4 ? sm(n / 0.4) : 1 - cm((n - 0.4) / 0.6);
      return {
        x: t.x0 + (t.x1 - t.x0) * r,
        y: t.y0 + (t.y1 - t.y0) * r,
        up: i * Oie,
        air: n > 0,
      };
    }
    splashdown(e, t) {
      ((this.jump = null),
        (this.m.ghost = this.mob.ghost),
        (this.m.rx = e),
        (this.m.ry = t),
        (this.m.lunge = 0.25),
        (this.m.lungeDir = { x: 0, y: 1 }),
        (this.g.shake = Math.max(this.g.shake, 7)),
        q.sfx(`boom`, 0.6),
        this.put(this.groundFx, rV(`slam`, `Splashdown`), e, t, 0.5, {
          ax: 50,
          ay: 44,
        }),
        this.run.zone({ t: `circle`, x: e, y: t, r: 2.2 }, 30, 0, qB[2], {
          slow: 0.3,
          label: `runoff`,
          look: this.look(`slam`, { frames: `Runoff pool`, ramp: qB }),
        }));
    }
    landing(e, t) {
      for (let n = t; n > 1.5; n -= 0.25) {
        let t = this.m.rx + Math.cos(e) * n,
          r = this.m.ry + Math.sin(e) * n;
        if (
          this.run.walkTile(Math.floor(t), Math.floor(r)) &&
          this.inRoom(t, r, -1)
        )
          return { x: t, y: r };
      }
      return this.spot(0);
    }
    overflow(e) {
      let t = this.hollowed();
      ((this.busyUntil = this.t + 1.4),
        this.run.say(
          this.name(),
          t
            ? `* Four Brimlings bud off her, and the blight takes them as they land. They won't heal her. Kill one and it splits.`
            : `* Four Brimlings bud off her, one of each tone, and start crawling home.`,
          3,
        ),
        Co.forEach((n, r) => {
          let i =
              e && e.length >= r * 2 + 2
                ? { x: e[r * 2], y: e[r * 2 + 1] }
                : this.landing((r / 4) * Math.PI * 2, r % 2 ? 3 : 4),
            a = Math.atan2(i.y - this.m.ry, i.x - this.m.rx),
            o = Math.cos(a) < -0.001,
            s = this.rim(a),
            c = o ? 76 : 8,
            l = o ? a - Math.PI : a;
          this.pinned(
            this.bodyFx,
            kie(n, o),
            s.x,
            s.y,
            c,
            21,
            l,
            1,
            this.m.ry + 0.02,
          );
          let u = QB((o ? 54 : 30) - c, -5, l);
          this.after(1, () => {
            let e = aB(`brimling_${n}`) ?? Py(`brimling_${n}`);
            this.run.lob(
              e.frames,
              s.x + u.x / 16,
              s.y + u.y / 16,
              i.x,
              i.y - 6 / 16,
              0.35,
              { h: 0.9, land: () => this.landed(n, i.x, i.y, t) },
            );
          });
        }),
        q.sfx(`cast`, 0.5));
    }
    landed(e, t, n, r) {
      if (
        (this.put(this.groundFx, Aie(e), t, n, 0.2, { ax: 14, ay: 14 }), !r)
      ) {
        this.hosted || this.brimling(`brimling_${e}`, t, n, e, 0.55);
        return;
      }
      let i = aB(`brimling_grey`);
      (i
        ? this.put(this.bodyFx, i.frames, t, n, 0.45, {
            ax: i.ax,
            ay: i.ay,
            sort: n,
          })
        : this.put(this.bodyFx, Nie(e), t, n, 0.45, { ax: 8, ay: 13, sort: n }),
        this.hosted ||
          this.after(0.45, () =>
            this.brimling(`brimling_grey`, t, n, `grey`, 0.55),
          ));
    }
    brimling(e, t, n, r, i, a = !1) {
      let o = this.run.spawn(e, t, n, {
        tier: `normal`,
        room: this.room.index,
        level: this.mob.level,
        summoned: !0,
        hunt: !1,
        object: !0,
        logical: `brimling`,
      });
      return (
        (o.m.doc.hp = o.m.doc.maxHp =
          Math.max(1, Math.round(o.m.doc.maxHp * i))),
        (o.tone = r === `grey` ? void 0 : r),
        (o.speed = 1.1),
        this.adds.push(o),
        this.crawlers.push({ mob: o, x0: t, y0: n, kind: r }),
        r === `grey` && !a && (o.onDeath = () => this.splitAgain(o)),
        o
      );
    }
    splitAgain(e) {
      let t = e.m.rx,
        n = e.m.ry;
      (this.splitFx(e.m, t, n),
        this.after(0.5, () => {
          for (let e of [-1, 1]) {
            let r = t + (e * 15) / 16;
            this.brimling(
              `brimling_greymini`,
              this.run.walkTile(Math.floor(r), Math.floor(n)) ? r : t,
              n,
              `grey`,
              0.3,
              !0,
            );
          }
        }));
    }
    splitFx(e, t, n) {
      (e && (e.dying = Math.min(e.dying, 0.1)),
        this.put(this.bodyFx, rV(`grey`, `Split again`), t, n, 0.5, {
          ax: 22,
          ay: 24,
          sort: n,
        }),
        q.sfx(`hurt`, 0.3));
    }
    body0(e) {
      return e.mob?.m ?? (e.id ? this.g.monsters.get(e.id) : void 0);
    }
    homecoming(e, t) {
      let n = this.body0(e);
      if (((e.gone = this.t), !n)) return;
      ((n.doc.dead = !0), (n.dying = 0.3));
      let r = Math.atan2(n.ry - this.m.ry, n.rx - this.m.rx),
        i = Math.cos(r) > 0,
        a = this.rim(r),
        o = e.kind === `grey`,
        s = jie(e.kind, i);
      if (
        (this.pinned(
          this.bodyFx,
          o ? s.slice(0, 1) : s,
          a.x,
          a.y,
          i ? 8 : 32,
          24,
          i ? r : r + Math.PI,
          o ? 0.2 : 0.5,
          this.m.ry + 0.02,
        ),
        o)
      ) {
        this.g.floater(
          this.m.rx * 16,
          this.m.ry * 16 - 44,
          `No heal`,
          KB[3],
          !1,
        );
        return;
      }
      let c = t ?? Math.round(this.m.doc.maxHp * 0.08);
      (this.hosted ||
        (this.m.doc.hp = Math.min(this.m.doc.maxHp, this.m.doc.hp + c)),
        this.g.floater(
          this.m.rx * 16,
          this.m.ry * 16 - 44,
          `+${c}`,
          `#6fdc5a`,
          !1,
        ),
        q.sfx(`chime`, 0.3));
    }
    note() {
      ((this.busyUntil = this.t + 1.6), (this.noteAt = this.t));
      let e = this.look(`note`, { tele: `Crackle`, rim: !1 });
      for (let t of this.pools())
        this.run.telegraph(t.shape, 1.4, `#fff36b`, void 0, e);
      (this.run.say(
        this.name(),
        `* The note in her core crackles. Get out of the runoff!`,
        2,
      ),
        q.sfx(`cast`, 0.5),
        this.after(1.4, () => this.discharge()));
    }
    discharge() {
      this.struckAt = this.t;
      let e = this.me,
        t = this.pools(),
        n =
          this.run.tile(Math.floor(e.x), Math.floor(e.y + 0.1)) ===
            Ao.SHALLOW || t.some((t) => wf(t.shape, e.x, e.y));
      ((this.g.flash = { color: `#fff36b`, a: 0.3 }),
        q.sfx(`zap`, 0.8),
        n && this.run.hitMe(this.mh() * 0.22, { heavy: !0 }));
      let r = this.core(0, 0),
        i = [
          ...t.map((e) => ({ x: this.at(e).x * 16, y: this.at(e).y * 16 })),
          ...this.patches()
            .filter((e) => e.tiles.length >= 3)
            .map((e) => ({ x: e.cx * 16, y: e.cy * 16 })),
        ],
        a = this.t + 0.45;
      for (let e of i)
        this.arcs.push({
          x0: r.x,
          y0: r.y,
          x1: e.x,
          y1: e.y,
          until: a,
          z0: this.m.ry * 16 - r.y,
        });
      t.forEach((e, n) => {
        let r = this.at(e),
          i = null;
        for (let n of t)
          n !== e &&
            (!i ||
              Math.hypot(this.at(n).x - r.x, this.at(n).y - r.y) <
                Math.hypot(this.at(i).x - r.x, this.at(i).y - r.y)) &&
            (i = n);
        (i &&
          t.indexOf(i) > n &&
          this.arcs.push({
            x0: r.x * 16,
            y0: r.y * 16,
            x1: this.at(i).x * 16,
            y1: this.at(i).y * 16,
            until: a,
          }),
          this.play(`note`, `Discharge`, r.x, r.y, { dur: 0.5 }));
      });
    }
    brimful(e) {
      let t = this.m,
        n = e?.a ?? this.angleToMe(),
        r = Math.cos(n),
        i = Math.sin(n),
        a = e?.x ?? t.rx,
        o = e?.y ?? t.ry,
        s = 0;
      if (e) s = e.len;
      else
        for (
          let e = 0.25;
          e < 40 &&
          this.run.walkTile(Math.floor(t.rx + r * e), Math.floor(t.ry + i * e));
          e += 0.25
        )
          s = e;
      let c = {
        t: `line`,
        x0: a,
        y0: o,
        x1: a + r * s,
        y1: o + i * s,
        w: ZB * 2,
      };
      ((this.lane = { shape: c, t0: this.t }),
        this.run.telegraph(c, 2, qB[2], void 0, this.look(`brimful`)),
        (this.busyUntil = this.t + 2 + XB + 0.3),
        Math.abs(r) > 0.05 && (t.doc.facing = r < 0 ? -1 : 1),
        this.run.say(
          this.name(),
          `* She fills up, wobbling, and lines herself up on you. Get out of her way!`,
          2.5,
        ),
        this.after(2, () => {
          ((this.lane = null),
            (this.roll = {
              x0: e ? a : t.rx,
              y0: e ? o : t.ry,
              ux: r,
              uy: i,
              len: s,
              t0: this.t,
              hit: !1,
              done: new Set(),
            }),
            q.sfx(`boom`, 0.5));
        }));
    }
    swallow(e, t) {
      this.run.zones = this.run.zones.filter((t) => t !== e);
      let n = this.at(e);
      this.pinned(
        this.groundFx,
        rV(`brimful`, `Swallow`),
        n.x,
        n.y,
        34,
        35,
        t,
        0.45,
      );
    }
    wheels() {
      if (this.wheelList) return this.wheelList;
      let e = this.room,
        t = e.x + Math.floor(e.w / 2),
        n = e.y + Math.floor(e.h / 2),
        r = [];
      for (let i of [-1, 1]) {
        let a = -1;
        for (let r = t; r > e.x && r < e.x + e.w - 1; r += i)
          if (this.run.tile(r, n - 2) === Ao.DEEP) {
            a = r - i;
            break;
          }
        if (!(a < 0))
          for (let e of [-2, 2, -3, 3, -4, 4]) {
            let t = n + e;
            if (
              this.run.walkTile(a, t) &&
              this.run.tile(a, t) !== Ao.SHALLOW &&
              !this.run.f.props.some(
                (e) =>
                  e.kind !== `sconce` &&
                  Math.abs(e.x - a) <= 1 &&
                  Math.abs(e.y - t) <= 1,
              )
            ) {
              r.push({ x: a + 0.5, y: t + 0.85, side: i, spin: 0 });
              break;
            }
          }
      }
      return (this.wheelList = r);
    }
    sideOf(e) {
      return this.at(e).x < this.room.x + this.room.w / 2 ? -1 : 1;
    }
    targets() {
      return this.wheels()
        .filter((e) => this.pools().some((t) => this.sideOf(t) === e.side))
        .map((e) => ({
          label: `Turn the sluice wheel (drain the runoff)`,
          x: e.x,
          y: e.y,
          reach: 1.7,
          use: () => {
            ((e.spin = this.t + 2.1),
              this.run.channelAt(`Turning the sluice wheel`, 2, e.x, e.y, () =>
                this.hosted
                  ? void this.g.api.dungeon.touch?.(`wheel`).catch(() => {})
                  : this.drain(e),
              ));
          },
        }));
    }
    drain(e) {
      ((e.spin = this.t + 1.2), q.sfx(`chime`, 0.4));
      for (let t of this.pools())
        this.sideOf(t) === e.side &&
          ((this.run.zones = this.run.zones.filter((e) => e !== t)),
          this.put(
            this.groundFx,
            rV(`slam`, `Drain`),
            this.at(t).x,
            this.at(t).y,
            1.2,
          ));
    }
    patches() {
      if (this.patchList) return this.patchList;
      let e = this.roomTiles((e) => e === Ao.SHALLOW),
        t = new Set(e.map((e) => $B(e.x, e.y))),
        n = new Set(),
        r = [];
      for (let i of e) {
        if (n.has($B(i.x, i.y))) continue;
        n.add($B(i.x, i.y));
        let e = [i];
        for (let r = 0; r < e.length; r++)
          for (let [i, a] of [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
          ]) {
            let o = $B(e[r].x + i, e[r].y + a);
            t.has(o) &&
              !n.has(o) &&
              (n.add(o), e.push({ x: e[r].x + i, y: e[r].y + a }));
          }
        let a = e.reduce((e, t) => e + t.x, 0) / e.length + 0.5,
          o = e.reduce((e, t) => e + t.y, 0) / e.length + 0.5,
          s =
            Math.max(
              ...e.map((e) => Math.hypot(e.x + 0.5 - a, e.y + 0.5 - o)),
            ) + 0.5;
        r.push({
          tiles: e,
          set: new Set(e.map((e) => $B(e.x, e.y))),
          cx: a,
          cy: o,
          r: s,
        });
      }
      return (this.patchList = r);
    }
    tick(e) {
      let t = this.m,
        n = this.me;
      if (this.jump) {
        let e = this.hop((this.t - this.jump.t0) / YB);
        (this.hosted || ((t.rx = e.x), (t.ry = e.y)),
          (t.ghost = e.air || this.mob.ghost));
      }
      let r = this.roll;
      if (r) {
        let e = am((this.t - r.t0) / XB),
          i = r.len * e;
        this.hosted || ((t.rx = r.x0 + r.ux * i), (t.ry = r.y0 + r.uy * i));
        let a = (n.x - r.x0) * r.ux + (n.y - r.y0) * r.uy,
          o = Math.abs(-(n.x - r.x0) * r.uy + (n.y - r.y0) * r.ux);
        !this.hosted &&
          !r.hit &&
          o <= ZB &&
          a >= 0 &&
          a <= Math.min(r.len, i + 0.6) &&
          ((r.hit = !0),
          this.run.hitMe(this.mh() * 0.3, { heavy: !0 }),
          this.g.slash(n.x * 16, n.y * 16 - 8, !0));
        let s = Math.atan2(r.uy, r.ux);
        for (let e of this.pools()) {
          let t = this.at(e),
            n = (t.x - r.x0) * r.ux + (t.y - r.y0) * r.uy;
          Math.abs(-(t.x - r.x0) * r.uy + (t.y - r.y0) * r.ux) <= ZB + t.r &&
            n <= i + 1 &&
            this.swallow(e, s);
        }
        if (e >= 1) {
          for (let e of this.pools())
            this.swallow(
              e,
              Math.atan2(t.ry - this.at(e).y, t.rx - this.at(e).x),
            );
          ((this.roll = null), (this.g.shake = Math.max(this.g.shake, 5)));
        }
      }
      for (let n of this.crawlers) {
        if (n.gone) continue;
        let r = this.body0(n);
        if (!r) {
          n.lx !== void 0 && (n.gone = this.t);
          continue;
        }
        if (r.doc.dead) {
          ((n.gone = this.t), (n.lx = r.rx), (n.ly = r.ry));
          continue;
        }
        ((n.lx = r.rx), (n.ly = r.ry));
        let i = n.mob;
        if (!i) continue;
        (this.run.step(i, t.rx, t.ry, i.speed * e, !1),
          (i.m.fx0 = i.m.tx = i.m.rx),
          (i.m.fy0 = i.m.ty = i.m.ry));
        let a = (i.m.rx - t.rx) / 1.9,
          o = (i.m.ry - t.ry) / 1;
        !t.ghost &&
          !this.roll &&
          a * a + o * o < 1 &&
          ((n.lx = i.m.rx), (n.ly = i.m.ry), this.homecoming(n));
      }
      ((this.crawlers = this.crawlers.filter(
        (e) => !e.gone || this.t - e.gone < 1.2,
      )),
        (this.groundFx = this.groundFx.filter((e) => this.t - e.t0 < e.dur)),
        (this.bodyFx = this.bodyFx.filter((e) => this.t - e.t0 < e.dur)),
        (this.arcs = this.arcs.filter((e) => this.t < e.until)));
    }
    onReset() {
      ((this.jump = this.lane = this.roll = null),
        (this.crawlers = []),
        (this.groundFx = []),
        (this.bodyFx = []),
        (this.arcs = []),
        (this.noteAt = this.struckAt = -99),
        (this.busyUntil = this.nextGob = this.gobUntil = 0));
    }
    onEnd() {
      ((this.jump = this.lane = this.roll = null),
        (this.m.ghost = this.mob.ghost));
    }
    hostTick(e) {
      (this.engaged || this.crawlers.length || this.jump || this.roll) &&
        this.tick(e);
    }
    hostEvent(e) {
      let t = e.x ?? this.m.rx,
        n = e.y ?? this.m.ry,
        r = e.args ?? [];
      switch (e.name) {
        case `gob`:
          this.gob(t, n);
          break;
        case `slam`:
          this.slam(t, n);
          break;
        case `overflow`:
          this.overflow(r);
          break;
        case `brimling`: {
          let e = r[1] >= 4 ? `grey` : (Co[r[1]] ?? `ember`);
          this.crawlers.push({ id: `zm:${r[0]}`, x0: t, y0: n, kind: e });
          break;
        }
        case `split`:
          this.splitFx(this.g.monsters.get(`zm:${r[0]}`), t, n);
          break;
        case `home`: {
          let e = `zm:${r[0]}`,
            i = this.crawlers.find((t) => t.id === e) ?? {
              id: e,
              x0: t,
              y0: n,
              kind: r[1] ? `grey` : `ember`,
            };
          ((i.lx = t), (i.ly = n), this.homecoming(i, r[2] ?? 0));
          break;
        }
        case `note`:
          this.note();
          break;
        case `brimful`:
          this.brimful({ a: r[0] ?? 0, len: r[1] ?? 0, x: t, y: n });
          break;
        case `drain`: {
          let e = this.wheels().find((e) => e.side === r[0]);
          e && this.drain(e);
          break;
        }
        default:
          super.hostEvent(e);
      }
    }
    hostLook(e) {
      return e === `runoff`
        ? this.look(`slam`, { frames: `Runoff pool`, ramp: qB })
        : void 0;
    }
    drawGround(e, t, n) {
      for (let r of this.crawlers) {
        let i = Mie(r.kind)[0];
        if (!i) continue;
        let a = this.body0(r),
          o = r.gone || !a ? (r.lx ?? r.x0) : a.rx,
          s = r.gone || !a ? (r.ly ?? r.y0) : a.ry,
          c = r.gone ? 1 - (this.t - r.gone) / 1.2 : 1;
        Lie(
          e,
          i,
          r.x0 * 16 - t,
          r.y0 * 16 - n,
          o * 16 - t,
          s * 16 - n,
          this.t * 14,
          c * 0.9,
        );
      }
      for (let r of this.groundFx) this.drawFx(e, r, t, n);
      if (this.lane) {
        let r = this.lane.shape,
          i = rV(`brimful`, `Lane`);
        i.length &&
          Wk(
            e,
            i,
            this.t - this.lane.t0,
            r.x0 * 16 - t,
            r.y0 * 16 - n,
            r.x1 * 16 - t,
            r.y1 * 16 - n,
            { fps: 8 },
          );
      }
      this.drawRunoff(e, t, n);
    }
    drawRunoff(e, t, n) {
      let r = (this.t - this.noteAt) / 1.4,
        i = (this.t - this.struckAt) / 0.4,
        a = r >= 0 && r < 1,
        o = i >= 0 && i < 1;
      if (!a && !o) return;
      let s = Math.floor(this.t * 10) % 4;
      for (let a of this.patches()) {
        for (let c of a.tiles) {
          let l = c.x * 16 - t,
            u = c.y * 16 - n;
          if (!(
            l < -16 ||
            u < -16 ||
            l > e.canvas.width ||
            u > e.canvas.height
          )) {
            if (o) {
              ((e.globalAlpha = (1 - i) * 0.75),
                (e.fillStyle = i < 0.35 ? JB[4] : qB[3]),
                e.fillRect(l, u, 16, 16),
                (e.globalAlpha = 1));
              continue;
            }
            if (
              Math.hypot(c.x + 0.5 - a.cx, c.y + 0.5 - a.cy) <=
              a.r * Math.max(0.25, r)
            ) {
              e.fillStyle = JB[2];
              for (let t = 0; t < 16; t++) {
                let n = ((-(c.x * 16 + c.y * 16 + t + s) % 3) + 3) % 3;
                for (let r = n; r < 16; r += 3) e.fillRect(l + r, u + t, 1, 1);
              }
            }
            for (let [t, n] of [
              [0, -1],
              [1, 0],
              [0, 1],
              [-1, 0],
            ])
              if (!a.set.has($B(c.x + t, c.y + n)))
                for (let r = 0; r < 16; r++) {
                  if ((r + s + c.x * 3 + c.y) % 5 == 0) continue;
                  let i = r % 2,
                    a = t === 0 ? r : t > 0 ? 15 - i : i,
                    o = n === 0 ? r : n > 0 ? 15 - i : i;
                  ((e.fillStyle = (r + c.x + c.y) % 4 === s ? JB[4] : JB[3]),
                    e.fillRect(l + a, u + o, 1, 1));
                }
          }
        }
        for (let r = 0; r < 2 + s; r++) {
          let i =
              a.tiles[
                Math.floor(L(r, s, Math.floor(this.t * 5)) * a.tiles.length)
              ],
            o = i.x * 16 + 4 + L(r, 3) * 8 - t,
            c = i.y * 16 + 4 + L(r, 4) * 8 - n;
          (z(e, o, c, o + 3, c - 2, JB[3]),
            z(e, o + 3, c - 2, o + 5, c + 1, JB[3]),
            z(e, o + 5, c + 1, o + 8, c - 2, JB[4]));
        }
      }
    }
    collect(e, t, n, r) {
      let i = Iie();
      for (let a of this.wheels()) {
        let o = i[a.spin > this.t ? Math.floor(this.t * 10) % 4 : 0],
          s = Math.round(a.x * 16 - 12 - n),
          c = Math.round(a.y * 16 - 23 - r),
          l = a.x * 16,
          u = a.y * 16;
        e.push({
          y: u,
          x: l,
          box: bz(l, u, l - 12, u - 23, l + 12, u + 3),
          draw: () => t.drawImage(o, s, c),
        });
      }
      if (this.jump && this.m.ghost) {
        let i = this.hop((this.t - this.jump.t0) / YB),
          a = aB(`motherbrim`),
          o = a ?? Py(`motherbrim`),
          s = this.m.doc.facing < 0,
          c = (s ? o.flipped : o.frames)[a || i.up > 1 ? 0 : 2],
          l = Mp(c),
          u = Np(c),
          d = Math.round(i.x * 16 - (s ? l - o.ax : o.ax) - n),
          f = Math.round((i.y - i.up) * 16 - o.ay - r),
          p = d + n,
          m = f + r;
        e.push({
          y: i.y * 16 + 1,
          x: i.x * 16,
          fy: i.y * 16,
          box: bz(i.x * 16, i.y * 16, p, m, p + l, m + u),
          draw: () => Pp(t, c, d, f),
        });
        let h = this.body().k;
        this.g.lights.push({
          x: i.x * 16 - n,
          y: (i.y - i.up) * 16 - 22 * h - r,
          r: 54,
          color: `#6fdc5a`,
          a: 0.6,
          z: i.up * 16 + 22 * h,
        });
      }
      for (let i of this.bodyFx) this.pushFx(e, i, t, n, r);
      let a = this.roll;
      if (a) {
        let i = rV(`brimful`, `Bow wave`);
        if (i.length) {
          let o = Math.atan2(a.uy, a.ux),
            s = 1 / Math.hypot(Math.cos(o) / 27, Math.sin(o) / 19),
            c = {
              x: this.m.rx * 16 + a.ux * (s - 12),
              y: this.m.ry * 16 - 19 + a.uy * (s - 12),
            },
            l = QB(4, -2, o),
            u = zk(i, this.t - a.t0, 12),
            d = this.m.ry * 16 + 2;
          e.push({
            y: d,
            x: this.m.rx * 16,
            box: Sz(u, c.x + l.x, c.y + l.y, d, { angle: o }),
            draw: () => Uk(t, u, c.x + l.x - n, c.y + l.y - r, o),
          });
        }
      }
    }
    drawAfterLight(e, t, n) {
      let r = (this.t - this.noteAt) / 1.4;
      if (r >= 0 && r < 1.3 && !this.done) {
        let i = rV(`note`, `Core`);
        if (i.length) {
          let a =
              r < 1
                ? i[Math.min(3, Math.floor(r * 4))]
                : r < 1.12
                  ? i[4]
                  : i[5],
            o = this.core(t, n);
          (Gk(
            e,
            o.x,
            o.y,
            10 + Math.min(1, r) * 10,
            JB[3],
            0.25 + Math.min(1, r) * 0.4,
          ),
            a && Bk(e, a, o.x, o.y));
        }
      }
      let i = rV(`note`, `Arc`);
      for (let r of this.arcs) {
        if (!i.length) break;
        (Wk(e, i, this.t, r.x0 - t, r.y0 - n, r.x1 - t, r.y1 - n, {
          fps: 16,
          alpha: Math.min(1, (r.until - this.t) / 0.15),
        }),
          Gk(e, r.x1 - t, r.y1 - n, 16, JB[3], 0.5));
      }
    }
    coreFrame() {
      let e = (this.t - this.noteAt) / 1.4,
        t = rV(`note`, `Core`);
      return !(e >= 0 && e < 1.3) || this.done || !t.length
        ? null
        : {
            fr:
              e < 1
                ? t[Math.min(3, Math.floor(e * 4))]
                : e < 1.12
                  ? t[4]
                  : t[5],
            k: e,
          };
    }
    collectHd(e, t, n, r) {
      let i = this.coreFrame();
      if (!i?.fr) return;
      let a = this.core(0, 0);
      xz(e, t, i.fr, a.x, a.y, this.m.ry * 16 + 2, n, r);
    }
    uprightsHd(e) {
      let t = this.coreFrame();
      if (!t) return;
      let n = this.core(0, 0);
      Cz(
        e,
        n.x,
        this.m.ry * 16 + 3,
        this.m.ry * 16 - n.y,
        10 + Math.min(1, t.k) * 10,
        JB[3],
        0.25 + Math.min(1, t.k) * 0.4,
      );
    }
    linesHd(e) {
      for (let t of this.arcs) {
        let n = t.z0 ?? 3;
        e.push({
          x0: t.x0,
          y0: t.y0 + (t.z0 ?? 0),
          z0: n,
          x1: t.x1,
          y1: t.y1,
          z1: t.z0 === void 0 ? 3 : 0,
          r: 25.6,
          color: JB[3],
          a: 0.9 * Math.min(1, (t.until - this.t) / 0.15),
        });
      }
    }
    drawAfterLightHd(e, t, n, r) {
      let i = rV(`note`, `Arc`);
      for (let a of this.arcs) {
        if (!i.length) break;
        let o = a.z0 ?? 0;
        (Tz(t, i, this.t, 16, a.x0, a.y0 + o, o, a.x1, a.y1, 0, {
          a: Math.min(1, (a.until - this.t) / 0.15),
          bow: a.z0 === void 0 ? 6 : 0,
        }),
          Gk(e.looseAdd, a.x1 - n, a.y1 - r, 16, JB[3], 0.5));
      }
    }
  },
  zie = class extends Ez {
    use(e) {
      if (e === `howl`) {
        (this.run.say(
          this.name(),
          `* Marrow howls. Something answers from the dark.`,
          2.5,
        ),
          q.sfx(`hurt`, 0.5));
        let e = this.run.run.diff === `hollowed` && this.hp() < 0.3 ? 3 : 2;
        for (let t = 0; t < e; t++) {
          let e = this.spot(5);
          this.add(`hollowmaw`, e.x, e.y);
        }
      }
      if (e === `maul`) {
        let e = this.atMe(1.5, 0.8, yz, 0.2, (t) => {
          if (((this.m.rx = e.x), (this.m.ry = e.y), t)) {
            let e = Math.round(this.m.doc.maxHp * 0.03);
            ((this.m.doc.hp = Math.min(this.m.doc.maxHp, this.m.doc.hp + e)),
              this.g.floater(
                this.m.rx * 16,
                this.m.ry * 16 - 30,
                `+${e}`,
                yz,
                !1,
              ));
          }
        });
      }
    }
    hostEvent(e) {
      if (e.name === `howl`) {
        (this.run.say(
          this.name(),
          `* Marrow howls. Something answers from the dark.`,
          2.5,
        ),
          q.sfx(`hurt`, 0.5));
        return;
      }
      if (e.name === `maul`) {
        let t = e.args?.[0] ?? 0;
        t > 0 &&
          this.g.floater(
            (e.x ?? this.m.rx) * 16,
            (e.y ?? this.m.ry) * 16 - 30,
            `+${t}`,
            yz,
            !1,
          );
        return;
      }
      super.hostEvent(e);
    }
    every(e, t) {
      let n = this.run.run.diff === `hollowed` && this.hp() < 0.3 ? 0.7 : 1;
      return super.every(e, t) * n;
    }
  },
  uV = 1.8,
  Bie = (100 * Math.PI) / 180,
  dV = 22,
  Vie = 0.3,
  Hie = 8,
  fV = rm.ember,
  Uie = (e, t, n) => ({
    x: e * Math.cos(n) - t * Math.sin(n),
    y: e * Math.sin(n) + t * Math.cos(n),
  }),
  pV = (e, t) => t * 4096 + e,
  mV = (e, t) => Lk(`fenn`, e, t) ?? [],
  hV = new Map(),
  gV = -1;
