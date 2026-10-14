// assets__index-BTsv3a2s 38 — math
// Lines 29907-30246 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function ap(e, t = 1) {
  return ip[e.replace(/_(ember|rime|storm|void)$/, ``)] ?? Qf(t);
}
function op(e, t) {
  return t === cp.volleying
    ? sp.volleying
    : t === cp.vengeful
      ? sp.vengeful
      : t === 0
        ? e.basic
        : t === 1
          ? e.special
          : t >= 2
            ? e.more?.[t - 2]
            : void 0;
}
var sp = {
    volleying: {
      id: `volley`,
      name: `Volley`,
      form: `ring`,
      windup: 0.8,
      mult: 0.5,
      cd: 6,
      min: 0,
      max: 8,
      r: 0.4,
      n: 10,
      speed: 5,
      color: `#ff9a3a`,
    },
    vengeful: {
      id: `volley`,
      name: `Volley`,
      form: `ring`,
      windup: 0.35,
      mult: 0.55,
      cd: 6,
      min: 0,
      max: 8,
      r: 0.4,
      n: 12,
      speed: 5,
      color: `#e0484e`,
    },
  },
  cp = { volleying: 250, vengeful: 251 },
  lp = Math.PI * 2;
function up(e, t, n, r, i, a, o = Math.random) {
  let s = r - t,
    c = i - n,
    l = Math.hypot(s, c) || 1,
    u = s / l,
    d = c / l,
    f = Math.atan2(c, s),
    p = e.speed ?? 8,
    m = (Math.max(e.max, 4) + 3) / p;
  switch (e.form) {
    case `swing`:
      return {
        shapes: [
          { t: `cone`, x: t, y: n, a: f, spread: e.arc ?? Math.PI / 2, r: e.r },
        ],
        shots: [],
      };
    case `lunge`: {
      let r = e.len ?? 4,
        i = {
          t: `line`,
          x0: t,
          y0: n,
          x1: t + u * r,
          y1: n + d * r,
          w: e.r * 2,
        };
      return e.chain
        ? { shapes: [i], shots: [] }
        : {
            shapes: [i],
            shots: [],
            moveTo: { x: t + u * (r - 0.4), y: n + d * (r - 0.4) },
          };
    }
    case `slam`: {
      if (e.layout === `grid`) return pp(e, r, i, a, o);
      let s = e.at === `target` ? { x: r, y: i } : { x: t, y: n };
      return { shapes: [{ t: `circle`, x: s.x, y: s.y, r: e.r }], shots: [] };
    }
    case `bolt`: {
      let r = [];
      for (let i of [0, ...(e.beats ?? [])]) {
        let a = { x: t, y: n, vx: u * p, vy: d * p, r: e.r, life: m };
        (i > 0 && (a.d = i), r.push(a));
      }
      return { shapes: [], shots: r };
    }
    case `spread`: {
      let r = e.n ?? 3,
        i = e.arc ?? 0.8,
        a = [];
      for (let o of [0, ...(e.beats ?? [])])
        for (let s = 0; s < r; s++) {
          let c = f + (r === 1 ? 0 : s / (r - 1) - 0.5) * i,
            l = {
              x: t,
              y: n,
              vx: Math.cos(c) * p,
              vy: Math.sin(c) * p,
              r: e.r,
              life: m,
            };
          (o > 0 && (l.d = o), a.push(l));
        }
      return { shapes: [], shots: a };
    }
    case `ring`: {
      let r = e.n ?? 8,
        i = [],
        a = [0, ...(e.beats ?? [])],
        o = e.rests ?? 0;
      for (let s = 0; s < a.length; s++)
        for (let c = 0; c < r; c++) {
          if (o > 0 && (((c - s) % r) + r) % r < o) continue;
          let l = f + ((c + 0.5) / r) * Math.PI * 2,
            u = {
              x: t,
              y: n,
              vx: Math.cos(l) * p,
              vy: Math.sin(l) * p,
              r: e.r,
              life: m,
            };
          (a[s] > 0 && (u.d = a[s]), i.push(u));
        }
      return { shapes: [], shots: i };
    }
    case `rain`:
      return {
        shapes: (a ?? yp(e, r, i, o)).map((t) => ({
          t: `circle`,
          x: t.x,
          y: t.y,
          r: e.r,
        })),
        shots: [],
      };
    case `blink`: {
      if (a?.[0])
        return {
          shapes: [],
          shots: [],
          moveTo: a[0],
          ...(e.summon ? { points: a } : {}),
        };
      let s = o() < 0.5 ? 1 : -1,
        c = { x: r - u * 1.2 - d * 1.2 * s, y: i - d * 1.2 + u * 1.2 * s };
      return e.summon
        ? { shapes: [], shots: [], moveTo: c, points: [c, ...mp(e, t, n, o)] }
        : { shapes: [], shots: [], moveTo: c };
    }
    case `beam`:
      return dp(e, t, n, f, r, i, a, o);
    case `rings`: {
      let r = e.bands ?? [],
        i = [],
        s = [];
      for (let c = 0; c < r.length; c++) {
        let [l, u, d] = r[c],
          f = { t: `ring`, x: t, y: n, r0: l, r1: u };
        if (e.gap) {
          let r = a?.[c],
            s = r ? Math.atan2((r.y - n) * 1.1, r.x - t) : o() * lp - Math.PI;
          (r ||
            i.push({ x: t + Math.cos(s) * 4, y: n + (Math.sin(s) * 4) / 1.1 }),
            (f.gap = s),
            (f.gapW = e.gap));
        }
        (d > 0 && (f.d = d), s.push(f));
      }
      return { shapes: s, shots: [], ...(e.gap ? { points: a ?? i } : {}) };
    }
    case `wall`:
      return fp(e, t, n, r, i);
    case `summon`: {
      let r = a && a.length ? a : mp(e, t, n, o);
      return {
        shapes: r.map((e) => ({ t: `circle`, x: e.x, y: e.y, r: 0.6 })),
        shots: [],
        points: r,
      };
    }
    case `channel`:
      return { shapes: [], shots: [] };
  }
}
function dp(e, t, n, r, i, a, o, s) {
  let c = e.len ?? 8,
    l = e.r * 2;
  if (e.layout === `web`) {
    let r = e.n ?? 4,
      u = o;
    if (!u) {
      let e = s() * lp;
      u = [];
      for (let t = 0; t < r; t++)
        u.push({
          x: i + Math.cos(e + (t / r) * lp) * c,
          y: a + Math.sin(e + (t / r) * lp) * c * 0.85,
        });
    }
    let d = [];
    for (let e = 0; e < u.length; e++) {
      let t = u[e],
        n = u[(e + 1) % u.length];
      d.push({ t: `line`, x0: t.x, y0: t.y, x1: n.x, y1: n.y, w: l });
    }
    let f = u[0];
    for (let e of u)
      Math.hypot(e.x - t, e.y - n) < Math.hypot(f.x - t, f.y - n) && (f = e);
    return (
      d.push({ t: `line`, x0: t, y0: n, x1: f.x, y1: f.y, w: l }),
      { shapes: [], shots: [], beams: d, turn: 0, points: u }
    );
  }
  let u = e.n ?? 1,
    d = (e.aim === `north` ? -Math.PI / 2 : r) + (e.from ?? 0),
    f = e.sweep ?? 0,
    p;
  if (e.either && f) {
    let e = o?.[0],
      r = e ? (e.y < n ? -1 : 1) : s() < 0.5 ? -1 : 1;
    ((p = e ? o : [{ x: t, y: n + r }]), (f *= r));
  }
  let m = [];
  for (let r = 0; r < u; r++) {
    let i = d + (r / u) * lp;
    e.arc
      ? m.push({ t: `cone`, x: t, y: n, a: i, spread: e.arc, r: c })
      : m.push({
          t: `line`,
          x0: t,
          y0: n,
          x1: t + Math.cos(i) * c,
          y1: n + Math.sin(i) * c,
          w: l,
        });
  }
  return {
    shapes: [],
    shots: [],
    beams: m,
    turn: f,
    ...(p ? { points: p } : {}),
  };
}
function fp(e, t, n, r, i) {
  let a = e.w ?? 0.6,
    o = [];
  if (e.layout === `rows`) {
    let t = e.n ?? 5,
      n = (e.len ?? 9) / 2;
    for (let s = 0; s < t; s++) {
      let c = i + (s - (t - 1) / 2) * e.r,
        l = { t: `line`, x0: r - n, y0: c, x1: r + n, y1: c, w: a };
      (s > 0 && (l.d = s * 0.3), o.push(l));
    }
  } else if (e.layout === `box`) {
    let r = e.r,
      i = [
        { x: t - r, y: n - r },
        { x: t, y: n - r },
        { x: t + r, y: n - r },
        { x: t + r, y: n },
        { x: t + r, y: n + r },
        { x: t, y: n + r },
        { x: t - r, y: n + r },
        { x: t - r, y: n },
      ];
    for (let e = 0; e < i.length; e++) {
      let t = i[e],
        n = i[(e + 1) % i.length];
      o.push({ t: `line`, x0: t.x, y0: t.y, x1: n.x, y1: n.y, w: a });
    }
  } else {
    let r = e.n ?? 12;
    for (let i = 0; i < r; i++) {
      let s = (i / r) * lp,
        c = ((i + 1) / r) * lp;
      o.push({
        t: `line`,
        x0: t + Math.cos(s) * e.r,
        y0: n + (Math.sin(s) * e.r) / 1.1,
        x1: t + Math.cos(c) * e.r,
        y1: n + (Math.sin(c) * e.r) / 1.1,
        w: a,
      });
    }
  }
  return { shapes: o.map((e) => ({ ...e })), shots: [], walls: o };
}
function pp(e, t, n, r, i) {
  let a = e.n ?? 5,
    o = Math.floor(a / 2),
    s = Math.floor(t),
    c = Math.floor(n),
    l = r;
  if (!l) {
    l = [{ x: s + 0.5, y: c + 0.5 }];
    let e = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
      ],
      t = 0,
      n = 0,
      r = Math.floor(i() * 4),
      u = 0;
    for (
      let d = 0;
      d < a * 2 &&
      (u < 2 &&
        d > 0 &&
        i() < 0.35 &&
        ((r = (r + (i() < 0.5 ? 1 : 3)) % 4), u++),
      (t += e[r][0]),
      (n += e[r][1]),
      !(Math.abs(t) > o || Math.abs(n) > o));
      d++
    )
      l.push({ x: s + t + 0.5, y: c + n + 0.5 });
  }
  let u = new Set(l.map((e) => `${Math.floor(e.x)},${Math.floor(e.y)}`)),
    d = [];
  for (let e = -o; e <= o; e++)
    for (let t = -o; t <= o; t++)
      u.has(`${s + t},${c + e}`) ||
        d.push({ t: `rect`, x: s + t, y: c + e, w: 1, h: 1 });
  return { shapes: d, shots: [], points: l };
}
