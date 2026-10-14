// index-BTsv3a2s 210 — math
// Lines 131230-131508 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function JQ(e, t, n, r) {
  let i = VQ(e, t),
    a = qQ(e, t, n, r);
  if (!a.length) return [[0, i]];
  let o = [];
  for (let e = 0; e + 1 < a.length; e++)
    a[e + 1][0] > a[e][1] && o.push([a[e][1], a[e + 1][0]]);
  let s = a[0][0] + i;
  return (s > a[a.length - 1][1] && o.push([a[a.length - 1][1], s]), o);
}
function YQ(e, t, n, r, i, a, o, s) {
  let c = VQ(e, t),
    [l, u] = WQ(e, t, r),
    d = Math.max(n - a, l - o),
    f = Math.min(n + a, u + o),
    p = BQ(a),
    m = null;
  for (let e of i) {
    let t = e[1] - e[0] >= c,
      [r, i] = t ? [d, f] : e;
    for (let e of t ? [0] : [-c, 0, c]) {
      let t = Math.max(r + e, d),
        o = Math.min(i + e, f);
      if (o - t < p) continue;
      let s = Math.min(a, o - t),
        c = MQ(n, t + s / 2, o - s / 2),
        l = Math.abs(c - n);
      (!m || l < m.off - 1e-9 || (Math.abs(l - m.off) <= 1e-9 && s > m.l)) &&
        (m = { c, l: s, off: l });
    }
  }
  if (!m && s) {
    for (let r of i)
      if (!(r[1] - r[0] >= c))
        for (let i of [-c, 0, c]) {
          let o = r[0] + i,
            c = r[1] + i;
          if (!(c - o < p))
            for (let r of [Math.min(a, c - o), p]) {
              let i = MQ(n, o + r / 2, c - r / 2),
                a = UQ(e, t, i);
              if (Math.abs(e$(Math.atan2(a.y - s.y, a.x - s.x), s.angle)) > jQ)
                continue;
              let l = Math.abs(i - n);
              (!m || l < m.off - 1e-9) && (m = { c: i, l: r, off: l });
              break;
            }
        }
  }
  return m && { c: NQ(m.c, c), l: m.l };
}
function XQ(e, t, n, r, i) {
  let a = r === `top` || r === `bottom` ? t : e,
    o = Math.min(2 * i, 0.2 * a),
    s = new Set();
  for (let a of n) {
    let n =
        r === `top`
          ? a.y
          : r === `bottom`
            ? t - (a.y + a.h)
            : r === `left`
              ? a.x
              : e - (a.x + a.w),
      c =
        r === `top`
          ? a.y + a.h
          : r === `bottom`
            ? t - a.y
            : r === `left`
              ? a.x + a.w
              : e - a.x;
    if (n - 6 >= i) continue;
    let l = c + 6;
    l > 0 && l <= o && s.add(l);
  }
  return [...s].sort((e, t) => e - t);
}
function ZQ(e, t, n, r) {
  return n === `top`
    ? { x: 0, y: r, w: e, h: t - r }
    : n === `bottom`
      ? { x: 0, y: 0, w: e, h: t - r }
      : n === `left`
        ? { x: r, y: 0, w: e - r, h: t }
        : { x: 0, y: 0, w: e - r, h: t };
}
function QQ(e, t, n, r, i, a, o, s) {
  let c = r.x - n.x,
    l = r.y - n.y,
    u = Math.atan2(l, c),
    d = (r, d) => {
      let f = r ?? { x: 0, y: 0, w: e, h: t },
        p = r
          ? i.flatMap((e) => {
              let t = e.x - r.x,
                n = e.y - r.y;
              return t + e.w + 6 <= 0 ||
                n + e.h + 6 <= 0 ||
                t - 6 >= r.w ||
                n - 6 >= r.h
                ? []
                : [{ x: t, y: n, w: e.w, h: e.h }];
            })
          : i,
        m = r || !s ? JQ(f.w, f.h, p, o) : s,
        h = { x: n.x - f.x, y: n.y - f.y },
        g = KQ({ x: 0, y: 0, w: f.w, h: f.h }, h.x, h.y, c, l),
        _ = YQ(
          f.w,
          f.h,
          HQ(f.w, f.h, g.x, g.y, g.side),
          g.side,
          m,
          a,
          o,
          d ? { ...h, angle: u } : void 0,
        );
      if (!_) return null;
      let v = UQ(f.w, f.h, _.c);
      return {
        ..._,
        f: r,
        off: Math.abs(e$(Math.atan2(v.y - h.y, v.x - h.x), u)),
      };
    },
    f = (e) => e && { c: e.c, l: e.l, f: e.f },
    p = d(null, !1);
  if (p) return f(p);
  let m = KQ({ x: 0, y: 0, w: e, h: t }, n.x, n.y, c, l).side,
    h = (n) => XQ(e, t, i, n, o).map((r) => ZQ(e, t, n, r)),
    g = (e, t) => {
      let n = null;
      for (let r of e) {
        let e = d(r, t);
        e && (!n || e.off < n.off - 1e-9) && (n = e);
      }
      return n;
    };
  return f(
    g(h(m), !1) ??
      g([null, ...[`top`, `right`, `bottom`, `left`].flatMap(h)], !0),
  );
}
function $Q(e, t) {
  return !e || !t
    ? !e && !t
    : Math.abs(e.x - t.x) < 0.5 &&
        Math.abs(e.y - t.y) < 0.5 &&
        Math.abs(e.w - t.w) < 0.5 &&
        Math.abs(e.h - t.h) < 0.5;
}
function e$(e, t) {
  let n = t - e;
  return n - 2 * Math.PI * Math.round(n / (2 * Math.PI));
}
function t$(e, t, n, r, i) {
  let a = VQ(e, t),
    o = NQ(n - r / 2, a),
    s = r,
    c = [];
  for (let n = 0; s > 1e-9 && n < 5; n++) {
    let { side: n } = UQ(e, t, o),
      [r, l] = WQ(e, t, n),
      u = Math.min(l, o + s),
      d = o - r <= 1e-9,
      f = u >= l - 1e-9;
    (c.push(n$(e, t, n, o, u, d, f, i)), (s -= u - o), (o = NQ(u, a)));
  }
  return c;
}
function n$(e, t, n, r, i, a, o, s) {
  let c = VQ(e, t),
    l = (e) => (e ? s : 0);
  if (n === `top`) {
    let e = r - l(a),
      t = i + l(o);
    return { x: e, y: -s, w: t - e, h: s * 2 };
  }
  if (n === `right`) {
    let t = r - e - l(a),
      n = i - e + l(o);
    return { x: e - s, y: t, w: s * 2, h: n - t };
  }
  if (n === `bottom`) {
    let n = 2 * e + t - r + l(a),
      c = 2 * e + t - i - l(o);
    return { x: c, y: t - s, w: n - c, h: s * 2 };
  }
  let u = c - r + l(a),
    d = c - i - l(o);
  return { x: -s, y: d, w: s * 2, h: u - d };
}
function r$(e, t, n, r, i) {
  if (!t) return { ...e, k: RQ(e.k, 0, n) };
  let a = t.f ?? null;
  if (e.k < 0.02 || e.p !== i)
    return { c: t.c, l: t.l, k: RQ(e.k, 1, n), p: i, f: a };
  if (!$Q(e.f, a)) return { ...e, k: RQ(e.k, 0, n) };
  let o = a ? VQ(a.w, a.h) : i,
    s = GQ(e.c, t.c, o);
  return Math.abs(s) > r
    ? { ...e, k: RQ(e.k, 0, n) }
    : {
        c: NQ(e.c + s * (1 - Math.exp(-12 * n)), o),
        l: LQ(e.l, t.l, n),
        k: RQ(e.k, 1, n),
        p: i,
        f: a,
      };
}
function i$(e, t) {
  let n = Math.max(0, e.y - 60);
  return { x: 0, y: n, w: e.x + e.w + 60, h: Math.max(0, t - n) };
}
function a$(e, t, n) {
  if (!e || !(e.w >= 1 && e.h >= 1)) return { x: 0, y: 0, w: t, h: n };
  let r = MQ(e.x, 0, t),
    i = MQ(e.y, 0, n),
    a = MQ(e.x + e.w, r, t),
    o = MQ(e.y + e.h, i, n);
  return a - r >= 1 && o - i >= 1
    ? { x: r, y: i, w: a - r, h: o - i }
    : { x: 0, y: 0, w: t, h: n };
}
function o$(e, t, n, r, i, a, o = []) {
  let { x: s, y: c } = e,
    l = s !== 0 || c !== 0,
    u = (e) => ({ x: e.x - s, y: e.y - c, w: e.w, h: e.h }),
    d = EQ(
      { w: e.w, h: e.h },
      { x: t.x - s, y: t.y - c },
      { x: n.x - s, y: n.y - c },
      l ? r.map(u) : r,
      i,
      a && l ? u(a) : a,
      l ? o.map(u) : o,
    );
  return !d || !l
    ? d
    : {
        ...d,
        x: d.x + s,
        y: d.y + c,
        label: { x: d.label.x + s, y: d.label.y + c, align: d.label.align },
      };
}
function s$(e, t, n, r) {
  let i = e.y - 30 * t - n - 2,
    a = { x: e.x - 8 * t, y: i, w: 16 * t, h: e.y - i };
  if (!r) return a;
  let o = Math.min(a.x, r.x),
    s = Math.min(a.y, r.y);
  return {
    x: o,
    y: s,
    w: Math.max(a.x + a.w, r.x + r.w) - o,
    h: Math.max(a.y + a.h, r.y + r.h) - s,
  };
}
function c$(e, t, n) {
  return {
    x: MQ(t.x, e.x + n, e.x + e.w - n),
    y: MQ(t.y, e.y + n, e.y + e.h - n),
  };
}
function l$(e, t, n, r, i, a = `behind`) {
  let o = Math.cos(n),
    s = Math.sin(n),
    c = t.x + o * r,
    l = t.y + s * r,
    u = wQ({ x: c - e.x, y: l - e.y }, o, s, e.w, i, a).at;
  return {
    x: c,
    y: l,
    angle: n,
    label: { x: u.x + e.x, y: u.y + e.y, align: u.align },
  };
}
