// index-BTsv3a2s 233 — math
// Lines 147209-148046 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var bse = class {
  myId;
  here = null;
  build = null;
  hand = null;
  openStore = null;
  goods = {};
  skew = 0;
  tool = null;
  blocked = new Set();
  lids = new Map();
  staticsCache = null;
  blocksCache = null;
  plot = null;
  houseRoomCache = null;
  stroke = null;
  constructor(e) {
    this.myId = e;
  }
  room() {
    return (
      (this.plot ||= Zr().find((e) => e.kind === `homestead`) ?? null),
      this.plot
    );
  }
  houseRoom() {
    return (
      (this.houseRoomCache ||= Zr().find((e) => e.kind === `house`) ?? null),
      this.houseRoomCache
    );
  }
  house() {
    return this.here ? tn(this.here.home) : vse;
  }
  set(e) {
    if (((this.here = e), this.blocked.clear(), e)) {
      this.skew = e.now - Date.now();
      let t = this.room();
      if (t)
        for (let n of e.home.structures)
          kt[n.kind]?.blocks && this.blocked.add(`${t.x0 + n.x},${t.y0 + n.y}`);
      let n = this.houseRoom();
      if (n)
        for (let [t, r] of gn(tn(e.home)))
          this.blocked.add(`${n.x0 + t},${n.y0 + r}`);
    }
    (!e || e.owner !== this.myId) &&
      ((this.build = null), (this.tool = null), (this.stroke = null));
  }
  setGoods(e) {
    ((this.goods = e ?? {}),
      this.hand && !this.goods[`seed:${this.hand}`] && (this.hand = null));
  }
  seeds(e) {
    return this.goods[`seed:${e}`] ?? 0;
  }
  water() {
    return this.goods.water ?? 0;
  }
  now() {
    return Date.now() + this.skew;
  }
  on(e) {
    return !!this.here && !!e && (e.kind === `homestead` || e.kind === `house`);
  }
  inHouse(e) {
    return !!this.here && e?.kind === `house`;
  }
  mine() {
    return !!this.here && this.here.owner === this.myId;
  }
  building(e) {
    return !this.mine() || !e
      ? !1
      : e.kind === `house`
        ? !!this.tool
        : e.kind === `homestead` && !!this.build;
  }
  stopBuilding() {
    ((this.build = null), (this.tool = null), (this.stroke = null));
  }
  title() {
    return this.here ? `${this.here.ownerName}'s Homestead` : `Homestead`;
  }
  subtitle() {
    return this.here
      ? `A ${Ot[this.here.home.tier].name} in the Tithefields`
      : ``;
  }
  houseTitle() {
    return this.here ? `${this.here.ownerName}'s Cottage` : `Cottage`;
  }
  clear(e, t) {
    if (!this.blocked.size) return !0;
    let n = (e, t) => this.blocked.has(`${Math.floor(e)},${Math.floor(t)}`);
    return (
      !n(e - J6.left, t - J6.up) &&
      !n(e + J6.right, t - J6.up) &&
      !n(e - J6.left, t + J6.down) &&
      !n(e + J6.right, t + J6.down)
    );
  }
  local(e, t) {
    let n = this.room();
    if (!n) return null;
    let r = Math.floor(e) - n.x0,
      i = Math.floor(t) - n.y0;
    return r < 0 || i < 0 || r >= n.w || i >= n.h ? null : { x: r, y: i };
  }
  structureAt(e, t) {
    return (
      this.here?.home.structures.find((n) => n.x === e && n.y === t) ?? null
    );
  }
  thirsty(e, t = this.now()) {
    let n = e.bed;
    return !n || Ft(n, t) ? !1 : n.wetUntil <= t + (Nt(n.crop) * Mt) / 4;
  }
  nearest(e, t) {
    let n = this.here,
      r = this.room();
    if (!n || !r) return null;
    let i = n.owner === this.myId,
      a = this.now(),
      o = null,
      s = 1.7,
      c = (n, r, i) => {
        if (!r) return;
        let a = Math.hypot(n.x - e, n.y - 0.2 - t);
        a < s && ((s = a), (o = { what: n, label: r, name: i }));
      },
      l = Dt.basket;
    c(
      { t: `store`, id: `basket`, x: r.x0 + l.x + 0.5, y: r.y0 + l.y + 0.5 },
      `[E] Basket`,
      `Harvest basket`,
    );
    let u = Dt.well;
    c(
      {
        t: `well`,
        id: `well`,
        x: Math.max(r.x0 + u.x, Math.min(r.x0 + u.x + u.w, e)),
        y: Math.max(r.y0 + u.y, Math.min(r.y0 + u.y + u.h, t)) + 0.2,
      },
      this.water() >= 10 ? `[E] Well · can's full` : `[E] Draw water`,
      `Well`,
    );
    for (let e of n.home.structures) {
      let t = r.x0 + e.x + 0.5,
        n = r.y0 + e.y + 0.5,
        o = kt[e.kind];
      if (o) {
        if (e.kind === `bed`) {
          let r = e.bed,
            s;
          ((s = r
            ? Ft(r, a)
              ? `[E] Harvest`
              : this.thirsty(e, a)
                ? this.water() > 0
                  ? `[E] Water · ${this.water()} left`
                  : `[E] Water · can's empty`
                : `[E] Look`
            : i
              ? this.hand && this.seeds(this.hand) > 0
                ? `[E] Plant ${dt[this.hand].name}`
                : `[E] Plant`
              : null),
            c(
              { t: `bed`, id: e.id, s: e, x: t, y: n },
              s,
              r ? dt[r.crop].name : o.name,
            ));
        } else
          o.slots
            ? c({ t: `store`, id: e.id, x: t, y: n }, `[E] Open`, o.name)
            : o.station &&
              c(
                { t: `station`, id: e.id, station: o.station, x: t, y: n },
                i ? (o.station === `cookfire` ? `[E] Cook` : `[E] Brew`) : null,
                o.name,
              );
      }
    }
    return o;
  }
  nearestInHouse(e, t) {
    let n = this.here,
      r = this.houseRoom();
    if (!n || !r) return null;
    let i = n.owner === this.myId,
      a = null,
      o = 1.9;
    for (let n of this.house().items) {
      let s = un[n.kind];
      if (!s || s.layer !== `stand`) continue;
      let c = null,
        l = null,
        u = this.furnCentre(n);
      if (
        (s.slots
          ? ((c = { t: `store`, id: n.id, ...u }), (l = `[E] Open`))
          : s.station && i
            ? ((c = { t: `station`, id: n.id, station: s.station, ...u }),
              (l = `[E] Cook`))
            : s.rest &&
              i &&
              ((c = { t: `rest`, id: n.id, ...u }), (l = `[E] Rest`)),
        !c || !l)
      )
        continue;
      let d = Math.max(r.x0 + n.x, Math.min(r.x0 + n.x + s.w, e)),
        f = Math.max(r.y0 + n.y, Math.min(r.y0 + n.y + s.h, t)),
        p = Math.hypot(d - e, f - t);
      p < o && ((o = p), (a = { what: c, label: l, name: s.name }));
    }
    return a;
  }
  furnCentre(e) {
    let t = this.houseRoom(),
      n = un[e.kind];
    return { x: t.x0 + e.x + n.w / 2, y: t.y0 + e.y + n.h / 2 };
  }
  posOf(e) {
    let t = this.here,
      n = this.room();
    if (!t || !n) return null;
    if (e === `basket`)
      return { x: n.x0 + Dt.basket.x + 0.5, y: n.y0 + Dt.basket.y + 0.5 };
    let r = t.home.structures.find((t) => t.id === e);
    if (r) return { x: n.x0 + r.x + 0.5, y: n.y0 + r.y + 0.5 };
    let i = this.house().items.find((t) => t.id === e);
    return i && this.houseRoom() ? this.furnCentre(i) : null;
  }
  claim() {
    let e = this.room();
    if (!this.here || !e) return null;
    let t = Ot[this.here.home.tier].claim;
    return { x: e.x0 + t.x, y: e.y0 + t.y, w: t.w, h: t.h };
  }
  blocker(e, t, n) {
    let r = this.here,
      i = this.room();
    if (!r || !i || !this.build) return `Nothing to build.`;
    if (n && Math.hypot(n.x - (i.x0 + e + 0.5), n.y - (i.y0 + t + 0.5)) > yse)
      return `Walk a little closer to build there.`;
    if (this.build === `pickup`) {
      let n = this.structureAt(e, t);
      return n
        ? n.bed
          ? `Harvest it first.`
          : n.slots?.some((e) => e)
            ? `Empty it first.`
            : null
        : `Nothing there to take up.`;
    }
    return Vt(r.home, this.build, e, t);
  }
  drawGround(e, t, n) {
    let r = this.here,
      i = this.room();
    if (!r || !i) return;
    let a = this.now();
    for (let o of r.home.structures)
      X6.has(o.kind) &&
        Pp(
          e,
          wF(o.kind, {
            wet: !!o.bed && o.bed.wetUntil > a,
            seed: o.x * 31 + o.y * 7,
          }).c,
          (i.x0 + o.x) * 16 - t,
          (i.y0 + o.y) * 16 - n,
        );
  }
  collect(e, t, n, r, i, a, o, s, c = !1) {
    let l = this.here,
      u = this.room();
    if (!l || !u) return;
    let d = this.now(),
      f = Q6(l.home.structures);
    for (let p of l.home.structures) {
      let l = (u.x0 + p.x) * 16,
        m = (u.y0 + p.y) * 16 + 14;
      if (p.kind === `bed`) {
        let a = p.bed;
        if (!a) continue;
        let o = Pt(a, d),
          s = TF(a.crop, o),
          c = o >= 1,
          u = this.thirsty(p, d),
          f = s ? Z6(s.c, s.ax, s.ay - 1, 25) : [5, 26, 1];
        e.push({
          y: m,
          x: l + 8,
          box: [Math.max(6, f[0]), f[1], f[2]],
          draw: () => {
            if (s)
              t.drawImage(
                s.c,
                Math.round(l + 8 - s.ax - n),
                Math.round(m + 1 - s.ay - r),
              );
            else {
              t.fillStyle = dt[a.crop].color;
              let e = 2 + Math.round(o * 6);
              t.fillRect(
                Math.round(l + 8 - e / 2 - n),
                Math.round(m - e - r),
                e,
                e,
              );
            }
            if (c && Math.floor(i * 2 + p.x * 0.7 + p.y * 0.3) % 4 == 0) {
              let e = Math.round(l + 4 + ((p.x * 5 + p.y * 3) % 8) - n),
                i = Math.round(m - 14 - r);
              ((t.fillStyle = `#ffffff`),
                t.fillRect(e, i - 1, 1, 3),
                t.fillRect(e - 1, i, 3, 1));
            }
            if (u) {
              let e = Math.round(Math.sin(i * 3 + p.x) * 1.5),
                a = Math.round(l + 6 - n),
                o = Math.round(m - 22 + e - r);
              ((t.fillStyle = `#0c0618`),
                t.fillRect(a, o - 1, 4, 6),
                (t.fillStyle = `#5bb8ff`),
                t.fillRect(a + 1, o, 2, 4),
                (t.fillStyle = `#cfefff`),
                t.fillRect(a + 1, o, 1, 1));
            }
          },
        });
        continue;
      }
      if (p.kind === `flowers`) continue;
      let h = kt[p.kind],
        g = 0;
      if (h?.slots) {
        let e =
          a.some(
            (e) =>
              Math.hypot(e.x - (u.x0 + p.x + 0.5), e.y - (u.y0 + p.y + 0.5)) <
              1.6,
          ) || this.openStore === p.id;
        ((g = Math.max(
          0,
          Math.min(1, (this.lids.get(p.id) ?? 0) + (e ? s : -s) * 5),
        )),
          this.lids.set(p.id, g));
      }
      let _ = $6(f, p),
        v = wF(p.kind, { open: g, t: i, across: _, seed: p.x * 31 + p.y * 7 }),
        y = Math.round(l + 8 - v.ax),
        b = Math.round(m - v.ay);
      if (
        ((!c || !Y6.has(p.kind)) &&
          e.push({
            y: m,
            x: l + 8,
            box: Z6(v.c, v.ax, v.ay),
            draw: () => Pp(t, v.c, y - n, b - r),
          }),
        v.light)
      ) {
        let e =
          p.kind === `cookfire`
            ? 0.85 + Math.sin(i * 13 + p.x) * 0.08 + Math.random() * 0.07
            : 1;
        o.push({
          x: l + 8 - n,
          y: m + v.light.dy - r,
          r: v.light.r * e,
          color: v.light.color,
          a: 0.75 * e,
          z: -v.light.dy,
        });
      }
    }
    let p = Dt.basket,
      m =
        a.some(
          (e) =>
            Math.hypot(e.x - (u.x0 + p.x + 0.5), e.y - (u.y0 + p.y + 0.5)) <
            1.6,
        ) || this.openStore === `basket`;
    this.lids.set(
      `basket`,
      Math.max(
        0,
        Math.min(1, (this.lids.get(`basket`) ?? 0) + (m ? s : -s) * 5),
      ),
    );
  }
  statics() {
    let e = this.here,
      t = this.room();
    if (!e || !t) return { key: `none`, items: [] };
    let n = !!bA(`tree01`),
      r = this.staticsCache;
    if (r && r.here === e && r.live === n) return r;
    let i = Q6(e.home.structures),
      a = [],
      o = 2166136261;
    for (let n of e.home.structures) {
      if (!Y6.has(n.kind)) continue;
      let e = $6(i, n),
        r = wF(n.kind, { across: e, seed: n.x * 31 + n.y * 7 }),
        s = (t.y0 + n.y) * 16 + 14,
        c = Math.round((t.x0 + n.x) * 16 + 8 - r.ax),
        l = Math.round(s - r.ay);
      a.push({
        key: `home-built-${n.id}`,
        kind: n.kind === `fence` ? `fence` : mF.has(n.kind) ? `tree` : `prop`,
        c: r.c,
        x: c,
        y: l,
        baseY: s,
        tx: t.x0 + n.x,
        ty: t.y0 + n.y,
        ...(n.kind === `fence` && !e ? { run: `ns` } : {}),
      });
      for (let t of `${n.kind}${n.x},${n.y}${e ? `-` : `|`};`)
        o = Math.imul(o ^ t.charCodeAt(0), 16777619);
    }
    return (
      (this.staticsCache = {
        here: e,
        live: n,
        key: `${a.length}:${(o >>> 0).toString(36)}:${n}`,
        items: a,
      }),
      this.staticsCache
    );
  }
  drawBuild(e, t, n, r, i, a, o, s) {
    let c = this.here,
      l = this.room(),
      u = this.build;
    if (!c || !l || !u || !this.mine()) return;
    let d = o ?? e,
      f = Ot[c.home.tier].claim;
    (r8(
      e,
      (l.x0 + f.x) * 16 - t,
      (l.y0 + f.y) * 16 - n,
      f.w * 16,
      f.h * 16,
      i,
      d,
    ),
      (d.fillStyle = `rgba(255,90,106,0.12)`));
    for (let e = Math.max(f.y, Dt.path.y0); e < f.y + f.h; e++)
      for (let r = f.x; r < f.x + f.w; r++)
        Rt(r, e) &&
          d.fillRect((l.x0 + r) * 16 - t, (l.y0 + e) * 16 - n, 16, 16);
    let p = this.local(r.x, r.y);
    if (!p) return;
    let m = this.blocker(p.x, p.y, a),
      h = (l.x0 + p.x) * 16 - t,
      g = (l.y0 + p.y) * 16 - n;
    if (u !== `pickup`) {
      let r = wF(u, { across: !0, seed: p.x * 31 + p.y * 7 });
      if (!X6.has(u) && s) {
        let e = s.ctx,
          i = (l.x0 + p.x) * 16 + 8,
          a = (l.y0 + p.y) * 16 + 14,
          o = Math.round(i - r.ax),
          c = Math.round(a - r.ay);
        s.ds.push({
          y: a,
          x: i,
          box: Z6(r.c, r.ax, r.ay),
          draw: () => {
            ((e.globalAlpha = 0.55),
              Pp(e, r.c, o - t, c - n),
              (e.globalAlpha = 1));
          },
        });
      } else {
        let t = X6.has(u) ? d : e;
        ((t.globalAlpha = 0.55),
          X6.has(u)
            ? Pp(t, r.c, h, g)
            : Pp(t, r.c, Math.round(h + 8 - r.ax), Math.round(g + 14 - r.ay)),
          (t.globalAlpha = 1));
      }
    }
    let _ = m ? `#ff5a6a` : u === `pickup` ? `#ffd166` : `#7dffb0`;
    ((e.fillStyle = _),
      e.fillRect(h, g, 16, 1),
      e.fillRect(h, g + 16 - 1, 16, 1),
      e.fillRect(h, g, 1, 16),
      e.fillRect(h + 16 - 1, g, 1, 16),
      (d.fillStyle = _),
      (d.globalAlpha = 0.18),
      d.fillRect(h, g, 16, 16),
      (d.globalAlpha = 1));
  }
  houseLocal(e, t) {
    let n = this.houseRoom();
    if (!n) return null;
    let r = Math.floor(e) - n.x0,
      i = Math.floor(t) - n.y0;
    return r < 0 || i < 0 || r >= Ht.w || i >= Ht.h ? null : { x: r, y: i };
  }
  furnSpot(e, t, n) {
    let r = un[e],
      i = t - Math.floor((r.w - 1) / 2);
    if (r.layer === `wall`) {
      let e = this.house();
      return {
        x: i,
        y:
          Zt(nn(e, t, n)) && Zt(nn(e, t, n + 1)) && Xt(nn(e, t, n + 2))
            ? n + 1
            : n,
      };
    }
    return { x: i, y: n - Math.floor((r.h - 1) / 2) };
  }
  furnUnder(e, t) {
    let n = this.house();
    return (
      pn(n, `stand`, e, t) ??
      pn(n, `wall`, e, t) ??
      pn(n, `floor`, e, t) ??
      pn(n, `stand`, e, t + 1) ??
      null
    );
  }
  houseDown(e, t) {
    let n = this.tool,
      r = this.here;
    if (!n || !r) return null;
    if (n.t === `furn`) {
      let i = this.furnSpot(n.kind, e, t),
        a = hn(r.home, n.kind, i.x, i.y, n.arg);
      return a
        ? { why: a }
        : { furnish: { kind: n.kind, x: i.x, y: i.y, arg: n.arg } };
    }
    if (n.t === `takeup`) {
      let n = this.furnUnder(e, t);
      return n
        ? n.slots?.some(Boolean)
          ? { why: `Empty it first.` }
          : { unfurnish: n }
        : { why: `Nothing there to take up.` };
    }
    return n.t === `room` && this.stroke && !this.stroke.down
      ? this.finish(e, t)
      : ((this.stroke = {
          x0: e,
          y0: t,
          tiles: [],
          seen: new Set(),
          down: !0,
          lx: e,
          ly: t,
        }),
        n.t !== `room` && this.addTile(e, t),
        null);
  }
  houseDrag(e, t) {
    let n = this.stroke;
    if (!n?.down || (n.lx === e && n.ly === t)) return;
    if (this.tool?.t === `room`) {
      ((n.lx = e), (n.ly = t));
      return;
    }
    let r = n.lx,
      i = n.ly,
      a = Math.abs(e - r),
      o = -Math.abs(t - i),
      s = r < e ? 1 : -1,
      c = i < t ? 1 : -1,
      l = a + o;
    for (; this.addTile(r, i), r !== e || i !== t;) {
      let e = 2 * l;
      (e >= o && ((l += o), (r += s)), e <= a && ((l += a), (i += c)));
    }
    ((n.lx = e), (n.ly = t));
  }
  houseUp(e) {
    let t = this.stroke;
    if (!t?.down || !this.tool) return null;
    let n = e?.x ?? t.lx,
      r = e?.y ?? t.ly;
    return this.tool.t === `room`
      ? n === t.x0 && r === t.y0
        ? ((t.down = !1), null)
        : this.finish(n, r)
      : (this.houseDrag(n, r), this.finish(n, r));
  }
  cancelStroke() {
    let e = !!this.stroke;
    return ((this.stroke = null), e);
  }
  addTile(e, t) {
    let n = this.stroke;
    if (!n || e < 0 || t < 0 || e >= Ht.w || t >= Ht.h || n.tiles.length >= 400)
      return;
    let r = t * Ht.w + e;
    n.seen.has(r) || (n.seen.add(r), n.tiles.push([e, t]));
  }
  finish(e, t) {
    let n = this.strokePaint(e, t);
    if (((this.stroke = null), !n || !this.here)) return null;
    let r = _n(this.here.home, n);
    return r.changes.length
      ? { paint: n, plan: r }
      : { why: r.why ?? `Nothing to change there.` };
  }
  strokePaint(e, t) {
    let n = this.tool,
      r = this.stroke;
    if (!n) return null;
    if (n.t === `room`)
      return r
        ? {
            tool: `room`,
            floor: n.floor,
            wall: n.wall,
            rect: {
              x: Math.min(r.x0, e),
              y: Math.min(r.y0, t),
              w: Math.abs(e - r.x0) + 1,
              h: Math.abs(t - r.y0) + 1,
            },
          }
        : null;
    let i = r?.down ? r.tiles : [[e, t]];
    switch (n.t) {
      case `floor`:
        return { tool: `floor`, floor: n.floor, tiles: i };
      case `wall`:
        return { tool: `wall`, wall: n.wall, tiles: i };
      case `door`:
        return { tool: `door`, tiles: i };
      case `erase`:
        return { tool: `erase`, tiles: i };
    }
    return null;
  }
  collectHouse(e, t, n, r, i, a) {
    let o = this.houseRoom();
    if (o)
      for (let s of this.house().items) {
        if (un[s.kind]?.layer !== `stand`) continue;
        let c = W6(o, s, t8(s.id));
        a?.has(s.id) ||
          e.push({
            y: c.baseY,
            ...e8(c),
            draw: () => Pp(t, c.c, c.x - n, c.y - r),
          });
        for (let e of c.lights) i.push({ ...e, z: c.baseY - e.y });
      }
  }
  houseBlocks() {
    let e = this.houseRoom(),
      t = this.house().items,
      n = O6(),
      r = this.blocksCache;
    if (r && r.items === t && r.look === n) return r;
    let i = [];
    if (e)
      for (let n of t) {
        let t = un[n.kind];
        if (t?.layer !== `stand`) continue;
        let r = W6(e, n, t8(n.id));
        if (Ap(r.c) !== 1) continue;
        let a = {
            name: ase(n.kind),
            arg: n.arg,
            tx: e.x0 + n.x,
            ty: e.y0 + n.y,
            w: t.w,
            h: t.h,
          },
          o = C6(a, r.c, r);
        o && ise(a, r.c) && i.push({ id: n.id, c: r.c, ...o });
      }
    return (
      (this.blocksCache = {
        items: t,
        look: n,
        list: i,
        ids: new Set(i.map((e) => e.id)),
      }),
      this.blocksCache
    );
  }
  cursorNote = null;
  drawHouseBuild(e, t, n, r, i, a, o) {
    this.cursorNote = null;
    let s = this.here,
      c = this.houseRoom(),
      l = this.tool;
    if (!s || !c || !l || !this.mine()) return;
    let u = a ?? e,
      d = Ut[s.home.tier];
    (d.w < Ht.w || d.h < Ht.h) &&
      r8(
        e,
        (c.x0 + d.x) * 16 - t,
        (c.y0 + d.y) * 16 - n,
        d.w * 16,
        d.h * 16,
        i,
        u,
      );
    let f = this.stroke,
      p = this.houseLocal(r.x, r.y);
    if ((!p && f && (p = { x: f.lx, y: f.ly }), !p)) return;
    f?.down && this.houseDrag(p.x, p.y);
    let m = (e) => (c.x0 + e) * 16 - t,
      h = (e) => (c.y0 + e) * 16 - n,
      g = (t, n, r, i, a) => {
        ((e.fillStyle = a),
          e.fillRect(m(t), h(n), r * 16, 1),
          e.fillRect(m(t), h(n) + i * 16 - 1, r * 16, 1),
          e.fillRect(m(t), h(n), 1, i * 16),
          e.fillRect(m(t) + r * 16 - 1, h(n), 1, i * 16),
          (u.fillStyle = a),
          (u.globalAlpha = 0.16),
          u.fillRect(m(t), h(n), r * 16, i * 16),
          (u.globalAlpha = 1));
      },
      _ = (e, t) =>
        (this.cursorNote = {
          x: (c.x0 + p.x + 0.5) * 16,
          y: (c.y0 + p.y) * 16 - 6,
          text: e,
          color: t,
        });
    if (l.t === `furn`) {
      let r = un[l.kind],
        i = this.furnSpot(l.kind, p.x, p.y),
        a = hn(s.home, l.kind, i.x, i.y, l.arg);
      if (r.layer === `stand`) {
        let r = W6(
          c,
          { id: `ghost`, kind: l.kind, x: i.x, y: i.y, arg: l.arg },
          1,
        );
        if (o) {
          let e = o.ctx;
          o.ds.push({
            y: r.baseY,
            ...e8(r),
            draw: () => {
              ((e.globalAlpha = 0.6),
                Pp(e, r.c, r.x - t, r.y - n),
                (e.globalAlpha = 1));
            },
          });
        } else
          ((e.globalAlpha = 0.6),
            Pp(e, r.c, r.x - t, r.y - n),
            (e.globalAlpha = 1));
      } else
        ((u.globalAlpha = 0.6),
          Pp(
            u,
            U6(l.kind, l.arg),
            m(i.x),
            h(r.layer === `wall` ? i.y - 1 : i.y),
          ),
          (u.globalAlpha = 1));
      (r.layer === `wall`
        ? g(i.x, i.y - 1, r.w, 2, a ? `#ff5a6a` : `#7dffb0`)
        : g(i.x, i.y, r.w, r.h, a ? `#ff5a6a` : `#7dffb0`),
        a && _(a, `#ff9a8a`));
      return;
    }
    if (l.t === `takeup`) {
      let e = this.furnUnder(p.x, p.y);
      if (!e) {
        g(p.x, p.y, 1, 1, `#ff5a6a`);
        return;
      }
      let t = un[e.kind],
        n = e.slots?.some(Boolean);
      (t.layer === `wall`
        ? g(e.x, e.y - 1, t.w, 2, n ? `#ff5a6a` : `#ffd166`)
        : g(e.x, e.y, t.w, t.h, n ? `#ff5a6a` : `#ffd166`),
        _(
          n ? `Empty it first.` : `${t.name}: ${n8(t.cost.crowns ?? 0, !0)}`,
          n ? `#ff9a8a` : `#ffd166`,
        ));
      return;
    }
    let v = this.strokePaint(p.x, p.y);
    if (!v) {
      g(p.x, p.y, 1, 1, `#7dffb0`);
      return;
    }
    let y = _n(s.home, v);
    u.globalAlpha = 0.75;
    for (let [e, t, n] of y.changes) use(u, n, m(e), h(t));
    if (
      ((u.globalAlpha = 1),
      v.tool === `room`
        ? g(
            v.rect.x,
            v.rect.y,
            v.rect.w,
            v.rect.h,
            y.changes.length ? `#7dffb0` : `#ff5a6a`,
          )
        : g(
            p.x,
            p.y,
            1,
            1,
            y.changes.length
              ? l.t === `erase`
                ? `#ffd166`
                : `#7dffb0`
              : `#ff5a6a`,
          ),
      !y.changes.length)
    ) {
      f && _(y.why ?? `Nothing to change there.`, `#ff9a8a`);
      return;
    }
    _(
      `${y.changes.length} tile${y.changes.length === 1 ? `` : `s`} · ${n8(y.crowns)}`,
      y.crowns > 0 ? `#ffd98a` : `#b8f08a`,
    );
  }
  static goodName(e) {
    return _t[e]?.name ?? e;
  }
};
