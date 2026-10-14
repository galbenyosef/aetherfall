// assets__index-BTsv3a2s 25 — kind
// Lines 24757-25181 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function gs(e, t, n = 1042, r = {}) {
  let i = $o[e],
    a = i.floors[t],
    o = r.diff ?? `normal`,
    s = r.players ?? Do.tuned,
    c = es(e, o),
    l = (n * 31 + t * 977 + e.length * 7919) >>> 0,
    u = null,
    d = null,
    f = (e) =>
      e.cells.every(
        (e) =>
          e.step.kind !== `boss` ||
          (e.span.ex > e.span.sx && e.span.ey > e.span.sy),
      );
  for (let e = 0; e < 400 && !u; e++) {
    let t = ls(a, as(l + e * 101));
    t && (f(t) ? (u = t) : (d ??= t));
  }
  if (((u ??= d), !u)) throw Error(`no layout for ${e} floor ${t}`);
  let p = as(l ^ 2654435769),
    m = a.cols * 16 + 2,
    h = a.rows * 13 + 2,
    g = new Uint8Array(m * h),
    _ = (e, t) => (e < 0 || t < 0 || e >= m || t >= h ? 0 : g[t * m + e]),
    v = (e, t, n) => {
      e >= 0 && t >= 0 && e < m && t < h && (g[t * m + e] = n);
    },
    y = (e, t) => e + Math.floor(p() * (t - e + 1)),
    b = u.cells.map((e, t) => {
      let n = us.includes(e.step.kind),
        r =
          e.step.kind === `shard` ||
          e.step.kind === `lore` ||
          e.step.kind === `cache`,
        i = (e.span.ex - e.span.sx + 1) * 16,
        a = (e.span.ey - e.span.sy + 1) * 13,
        o = n ? i - 3 : r ? y(7, 9) : y(9, 12),
        s = n ? a - 3 : r ? y(6, 7) : y(7, 9),
        c = 1 + e.span.sx * 16 + 1 + Math.floor(p() * (i - 2 - o)),
        l = 1 + e.span.sy * 13 + 1 + Math.floor(p() * (a - 2 - s));
      return {
        index: t,
        kind: e.step.kind,
        ...(e.step.tone ? { tone: e.step.tone } : {}),
        cx: e.cx,
        cy: e.cy,
        x: c,
        y: l,
        w: o,
        h: s,
        parent: e.parent,
        onPath: e.onPath,
      };
    });
  for (let e of b)
    for (let t = e.y; t < e.y + e.h; t++)
      for (let n = e.x; n < e.x + e.w; n++) v(n, t, 1);
  let x = [],
    S = (e, t) => {
      (_(e, t) === 0 || _(e, t) === 2) && v(e, t, 1);
    };
  for (let e of b) {
    if (e.parent < 0) continue;
    let t = b[e.parent],
      n =
        t.cy === e.cy ||
        (u.cells[e.index].span.sy <= t.cy &&
          t.cy <= u.cells[e.index].span.ey &&
          t.cx !== e.cx),
      r =
        e.kind === `lock` && e.tone
          ? e.tone
          : e.kind === `seal`
            ? `seal`
            : null;
    if (n) {
      let [n, i] = t.x < e.x ? [t, e] : [e, t],
        a = Math.max(n.y + 1, i.y + 1),
        o = Math.min(n.y + n.h - 2, i.y + i.h - 2),
        s = a <= o ? y(a, o) : Math.round((n.y + n.h / 2 + i.y + i.h / 2) / 2),
        c = n.x + n.w,
        l = i.x - 1,
        u = Math.round((c + l) / 2),
        d = Math.max(n.y + 1, Math.min(n.y + n.h - 2, s)),
        f = Math.max(i.y + 1, Math.min(i.y + i.h - 2, s));
      for (let e = c; e <= u; e++) for (let t = -1; t <= 1; t++) S(e, d + t);
      for (let e = u; e <= l; e++) for (let t = -1; t <= 1; t++) S(e, f + t);
      for (let e = Math.min(d, f) - 1; e <= Math.max(d, f) + 1; e++)
        for (let t = -1; t <= 1; t++) S(u + t, e);
      let p = e === i ? l : c,
        m = e === i ? f : d;
      for (let e = -1; e <= 1; e++) v(p, m + e, r ? 6 : 5);
      r && x.push({ x: p, y: m - 1, w: 1, h: 3, tone: r, room: e.index });
    } else {
      let [n, i] = t.y < e.y ? [t, e] : [e, t],
        a = Math.max(n.x + 1, i.x + 1),
        o = Math.min(n.x + n.w - 2, i.x + i.w - 2),
        s = a <= o ? y(a, o) : Math.round((n.x + n.w / 2 + i.x + i.w / 2) / 2),
        c = n.y + n.h,
        l = i.y - 1,
        u = Math.round((c + l) / 2),
        d = Math.max(n.x + 1, Math.min(n.x + n.w - 2, s)),
        f = Math.max(i.x + 1, Math.min(i.x + i.w - 2, s));
      for (let e = c; e <= u; e++) for (let t = -1; t <= 1; t++) S(d + t, e);
      for (let e = u; e <= l; e++) for (let t = -1; t <= 1; t++) S(f + t, e);
      for (let e = Math.min(d, f) - 1; e <= Math.max(d, f) + 1; e++)
        for (let t = -1; t <= 1; t++) S(e, u + t);
      let p = e === i ? f : d,
        m = e === i ? l : c;
      for (let e = -1; e <= 1; e++) v(p + e, m, r ? 6 : 5);
      r && x.push({ x: p - 1, y: m, w: 3, h: 1, tone: r, room: e.index });
    }
  }
  let C = (e, t, n) => {
      let r = e.x + Math.floor(e.w / 2),
        i = e.y + Math.floor(e.h / 2);
      return (
        t <= e.x ||
        n <= e.y ||
        t >= e.x + e.w - 1 ||
        n >= e.y + e.h - 1 ||
        Math.abs(t - r) <= 1 ||
        Math.abs(n - i) <= 1
      );
    },
    w = (e) => {
      let t = [];
      for (let n = e.y + 1; n < e.y + e.h - 1; n++)
        for (let r = e.x + 1; r < e.x + e.w - 1; r++)
          C(e, r, n) || t.push([r, n]);
      return t;
    },
    T = [];
  for (let e of b) {
    let t = w(e);
    if (
      (e.kind === `hall` ||
        e.kind === `elite` ||
        e.kind === `boss` ||
        e.kind === `mini` ||
        e.kind === `lock`) &&
      t.length
    ) {
      let n =
        e.kind === `boss`
          ? `arena`
          : [`pools`, `scatter`, `pillars`][Math.floor(p() * 3)];
      if (n === `arena`) ds(i.theme, e, v, p);
      else if (n === `pools`) {
        let n = e.x + Math.floor(e.w / 2),
          r = e.y + Math.floor(e.h / 2),
          i = [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1],
          ].filter(() => p() < 0.6);
        for (let [a, o] of i)
          for (let [i, s] of t)
            Math.sign(i - n) === a &&
              Math.sign(s - r) === o &&
              v(
                i,
                s,
                i === e.x + 1 ||
                  s === e.y + 1 ||
                  i === e.x + e.w - 2 ||
                  s === e.y + e.h - 2 ||
                  Math.abs(i - n) === 2 ||
                  Math.abs(s - r) === 2
                  ? 3
                  : 4,
              );
      } else if (n === `scatter`)
        for (let [e, n] of t) p() < 0.22 && v(e, n, 3);
      else
        for (let [n, r] of t)
          (n - e.x) % 3 == 2 && (r - e.y) % 3 == 2 && v(n, r, 2);
    }
    if (
      i.theme === `folly` &&
      (e.kind === `entry` ||
        e.kind === `lore` ||
        e.kind === `waystone` ||
        e.kind === `boss`)
    ) {
      let t = e.y + Math.floor(e.h / 2);
      for (let n = e.x + 1; n < e.x + e.w - 1; n++)
        for (let e = -1; e <= 1; e++) _(n, t + e) === 1 && v(n, t + e, 9);
    }
    if (i.theme === `barrow` && (e.kind === `hall` || e.kind === `boss`))
      for (let t = e.x + 1; t < e.x + e.w - 1; t += 3)
        _(t, e.y) === 1 && p() < 0.7 && v(t, e.y, 3);
  }
  let E = (e) => e !== 0 && e !== 2;
  for (let e = 0; e < h; e++)
    for (let t = 0; t < m; t++) {
      if (_(t, e) !== 0) continue;
      let n = !1;
      for (let r = -1; r <= 1 && !n; r++)
        for (let i = -1; i <= 1 && !n; i++) E(_(t + i, e + r)) && (n = !0);
      n && v(t, e, 2);
    }
  let D = (e) => ({
      x: e.x + Math.floor(e.w / 2),
      y: e.y + Math.floor(e.h / 2),
    }),
    O = b[0],
    k = D(O);
  v(k.x, k.y, 8);
  let ee = b[a.path.length - 1],
    te = ee.kind === `boss` ? `boss` : `stair`,
    ne = te === `stair` ? D(ee) : { x: ee.x + Math.floor(ee.w / 2), y: ee.y };
  te === `stair` && v(ne.x, ne.y, 7);
  let re = (e, t, n) => {
      let r = { x: e, y: t, d: 1 / 0 };
      for (let i = n.y; i < n.y + n.h; i++)
        for (let a = n.x; a < n.x + n.w; a++)
          if (jo(_(a, i))) {
            let n = Math.hypot(a - e, i - t);
            n < r.d && (r = { x: a, y: i, d: n });
          }
      return r;
    },
    ie = (e, t = () => !0) => {
      let n = [];
      for (let r = e.y + 1; r < e.y + e.h - 1; r++)
        for (let i = e.x + 1; i < e.x + e.w - 1; i++)
          _(i, r) === 1 && t(i, r) && n.push([i, r]);
      return n;
    },
    ae = (e) => (e.length ? e.splice(Math.floor(p() * e.length), 1)[0] : null),
    oe = 0;
  for (let t of b) {
    let n = D(t);
    for (let e = t.x + 1; e < t.x + t.w - 1; e += 4)
      _(e, t.y - 1) === 2 &&
        T.push({ x: e, y: t.y - 1, kind: `sconce`, room: t.index });
    if (
      (t.kind === `entry` &&
        t.index === 0 &&
        T.push({ x: n.x + 2, y: n.y, kind: `waystone`, room: t.index }),
      t.kind === `waystone` &&
        T.push({ x: n.x, y: n.y, kind: `waystone`, room: t.index }),
      t.kind === `shard` &&
        t.tone &&
        T.push({
          x: n.x,
          y: n.y,
          kind: `toneshard`,
          tone: t.tone,
          room: t.index,
        }),
      t.kind === `pylon` &&
        t.tone &&
        T.push({
          x: n.x,
          y: n.y - 1,
          kind: `pylon`,
          tone: t.tone,
          room: t.index,
        }),
      t.kind === `lore` &&
        T.push({
          x: n.x,
          y: t.y + 1,
          kind: `lore`,
          room: t.index,
          text: a.lore?.[oe++] ?? ``,
        }),
      t.kind === `cache` &&
        T.push({ x: n.x, y: n.y, kind: `cache`, room: t.index }),
      t.kind === `boss` &&
        i.note &&
        T.push({
          x: n.x,
          y: t.y + 1,
          kind: `wardnote`,
          tone: i.note,
          room: t.index,
        }),
      t.kind === `boss` && e === `folly`)
    )
      for (let e of Co)
        T.push({
          x: e === `ember` || e === `storm` ? t.x + 1 : t.x + t.w - 2,
          y: e === `ember` || e === `rime` ? t.y + 1 : t.y + t.h - 2,
          kind: `pylon`,
          tone: e,
          room: t.index,
        });
    t.kind === `seal` &&
      T.push({ x: n.x, y: n.y, kind: `seal`, room: t.index });
  }
  let se = [],
    ce = (e) => {
      let t = p() * e.reduce((e, t) => e + t.weight, 0);
      for (let n of e) if ((t -= n.weight) <= 0) return n;
      return e[e.length - 1];
    },
    le = (e) =>
      i.bosses.filter(
        (n) =>
          Xo[n].room === (e === `boss` ? `boss` : `mini`) &&
          Xo[n].floor === t + 1,
      )[0],
    ue = 0;
  for (let e of b) {
    let t = D(e),
      n = ie(e, (e, n) => Math.hypot(e - t.x, n - t.y) > 1.5),
      r = (t, r, i, a) => {
        let o = a
            ? n.filter(([e, t]) => Math.hypot(e - a[0], t - a[1]) < 3)
            : n,
          s = ae(o.length ? o : n);
        if (!s) return;
        let l = n.findIndex(([e, t]) => e === s[0] && t === s[1]);
        (l >= 0 && n.splice(l, 1),
          se.push({
            x: s[0] + 0.5,
            y: s[1] + 0.5,
            kind: t,
            tier: r,
            level: c,
            room: e.index,
            pack: i,
          }));
      },
      a = (e) => {
        let t = ue++,
          a = n.length ? n[Math.floor(p() * n.length)] : void 0;
        for (let n = 0; n < e + Io(s); n++) {
          let e = ce(i.roster);
          r(e.kind, e.tier, t, a);
        }
      };
    switch (e.kind) {
      case `hall`:
        (a(y(2, 3)), p() < 0.5 && a(2));
        break;
      case `lock`:
      case `shard`:
      case `stair`:
      case `cache`:
        a(2);
        break;
      case `pylon`:
        (a(2), e.tone && r(`tonemote`, `normal`, ue - 1));
        break;
      case `elite`: {
        let e = ce(i.elites),
          t = ue++;
        (r(e.kind, e.tier === `normal` ? `normal` : `elite`, t), a(2));
        break;
      }
      case `mini`:
      case `boss`: {
        let n = le(e.kind),
          r =
            e.kind === `boss` && i.theme !== `rime` && i.theme !== `folly`
              ? { x: t.x, y: e.y + Math.floor(e.h / 3) }
              : t,
          a = re(r.x, r.y, e);
        if (
          (n &&
            se.push({
              x: a.x + 0.5,
              y: a.y + 0.5,
              kind: n,
              tier: e.kind === `boss` ? `boss` : `named`,
              level: c,
              room: e.index,
              pack: ue++,
            }),
          n === `fenn`)
        ) {
          let t = re(a.x + 3, a.y, e);
          se.push({
            x: t.x + 0.5,
            y: t.y + 0.5,
            kind: `standard`,
            tier: `elite`,
            level: c,
            room: e.index,
            pack: ue - 1,
          });
        }
        break;
      }
    }
  }
  return (
    hs({
      id: e,
      theme: i.theme,
      floorIndex: t,
      rooms: b,
      props: T,
      spawns: se,
      T: _,
      rng: p,
      keep: C,
      exit: ne,
      entry: k,
    }),
    {
      dungeon: e,
      index: t,
      name: a.name,
      depth: a.depth,
      theme: i.theme,
      seed: n,
      w: m,
      h,
      tiles: g,
      rooms: b,
      spawns: se,
      props: T,
      locks: x,
      entry: k,
      exit: { ...ne, kind: te },
    }
  );
}
