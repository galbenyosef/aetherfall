// hd2d-FOjpdF4f 26 — push
// Lines 8134-8465 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
function As(e, t) {
  let n = u.w,
    r = u.h,
    i = (t) => (e.x0 + t) * X,
    a = (t) => (e.y0 + t) * X,
    o = (t) => Math.floor(t / X) - e.y0,
    {
      code: s,
      wall: c,
      floor: l,
      walk: d,
      across: f,
      faceAbove: p,
      sideDoor: m,
    } = ks(t),
    h = new Uint8Array(n * r);
  for (let e = 0; e < r; e++)
    for (let t = 0; t < n; t++)
      c(t, e) && p(t, e + 1) && (h[e * n + t] = c(t, e - 1) ? 28 : 12);
  let _ = new Uint8Array(n * r),
    v = new Uint8Array(n * r);
  for (let e = 0; e < n * r; e++) {
    if (v[e] || !c(e % n, Math.floor(e / n))) continue;
    let t = [],
      i = 0,
      a = [e];
    for (v[e] = 1; a.length;) {
      let e = a.pop();
      (t.push(e), (i = Math.max(i, h[e])));
      let o = e % n,
        s = Math.floor(e / n);
      for (let [e, t] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        let i = o + e,
          l = s + t,
          u = l * n + i;
        i < 0 ||
          l < 0 ||
          i >= n ||
          l >= r ||
          v[u] ||
          !c(i, l) ||
          ((v[u] = 1), a.push(u));
      }
    }
    for (let e of t) _[e] = i || 12;
  }
  let y = Array.from({ length: n }, () => []);
  for (let e = 0; e < n; e++) {
    let t = y[e];
    for (let o = 0; o < r;) {
      if (!c(e, o)) {
        o++;
        continue;
      }
      let r = o;
      for (; c(e, o);) o++;
      let s = o - 1,
        u = _[r * n + e],
        f = m(e, r - 1),
        g = f ? a(r) - Ts + Math.ceil(u * Es) : d(e, r - 1) ? a(r) : a(r) + u;
      if (f && u > 12) {
        let n = p(e, s + 1)
            ? a(s + 1) - Cs
            : m(e, s + 1)
              ? a(s + 1) + Ts
              : a(s + 1),
          o = a(r) - Ts + Math.ceil(12 * Es),
          c = Math.min(g, n);
        c > o &&
          t.push({
            x0: i(e),
            x1: i(e + 1),
            y0: o,
            y1: c,
            h: 12,
            kind: `top`,
            cut: c === n && !p(e, s + 1),
          });
      }
      if (p(e, s + 1)) {
        let o = h[s * n + e],
          c = a(s + 1);
        (t.push({
          x0: i(e),
          x1: i(e + 1),
          y0: c - Cs,
          y1: c,
          h: o,
          kind: `face`,
        }),
          s - (o === 28 ? 2 : 1) >= r &&
            g < c - Cs &&
            t.push({
              x0: i(e),
              x1: i(e + 1),
              y0: g,
              y1: c - Cs,
              h: u,
              kind: `top`,
            }));
        continue;
      }
      let v = d(e, r - 1) && !m(e, r - 1);
      for (let n = r; n <= s;) {
        let o = l(e - 1, n) || l(e + 1, n);
        if (v && !o) {
          n++;
          continue;
        }
        let c = n;
        for (; n <= s && (!v || l(e - 1, n) || l(e + 1, n));) n++;
        let d = n - 1,
          f = c === r ? g : a(c),
          p = d === s && m(e, s + 1) ? a(s + 1) + Ts : a(d + 1);
        p <= f ||
          t.push({
            x0: i(e),
            x1: i(e + 1),
            y0: f,
            y1: p,
            h: u,
            kind: `top`,
            cut: !0,
          });
      }
    }
  }
  let b = (e, t) => {
      if (e < 0 || e >= n) return 0;
      let r = 0;
      for (let n of y[e]) t >= n.y0 && t < n.y1 && (r = Math.max(r, n.h));
      return r;
    },
    x = [];
  for (let e = 0; e < n; e++)
    for (let t of y[e])
      for (let r of [-1, 1]) {
        let a = e + r,
          c = new Set([t.y0, t.y1]);
        for (let e = Math.ceil(t.y0 / X); e * X < t.y1; e++) c.add(e * X);
        if (a >= 0 && a < n)
          for (let e of y[a])
            for (let n of [e.y0, e.y1]) n > t.y0 && n < t.y1 && c.add(n);
        let l = [...c].sort((e, t) => e - t),
          u = null,
          d = null;
        for (let n = 0; n + 1 < l.length; n++) {
          let c = (l[n] + l[n + 1]) / 2,
            f = o(c),
            p = s(a, f) !== `.` && b(a, c) < t.h;
          ((d =
            g(s(e, f)) ??
            d ??
            g(s(e, o(t.y1 - 1))) ??
            g(s(e, o(t.y0))) ??
            `plaster`),
            p && u && u.wall === d && u.y1 === l[n]
              ? (u.y1 = l[n + 1])
              : p
                ? x.push(
                    (u = {
                      x: r < 0 ? i(e) - Ds : i(e + 1) + Ds,
                      y0: l[n],
                      y1: l[n + 1],
                      h: t.h,
                      out: r,
                      wall: d,
                    }),
                  )
                : (u = null));
        }
      }
  let S = [];
  for (let e = 0; e < r; e++)
    for (let t = 0; t < n; t++) {
      if (s(t, e) !== `+` || !f(t, e) || s(t, e + 1) === `+`) continue;
      let r = Math.max(
        t > 0 ? h[e * n + t - 1] : 0,
        t < n - 1 ? h[e * n + t + 1] : 0,
      );
      if (!r) continue;
      let o = a(e + 1);
      (S.push({
        x0: i(t),
        x1: i(t) + ws,
        y0: o - Cs,
        y1: o,
        h: r,
        kind: `post`,
      }),
        S.push({
          x0: i(t + 1) - ws,
          x1: i(t + 1),
          y0: o - Cs,
          y1: o,
          h: r,
          kind: `post`,
        }));
    }
  x.sort((e, t) => e.x - t.x || e.out - t.out || e.y0 - t.y0);
  let C = [];
  for (let e of x) {
    let t = C[C.length - 1];
    t &&
    t.x === e.x &&
    t.out === e.out &&
    t.wall === e.wall &&
    t.h === e.h &&
    t.y1 === e.y0
      ? (t.y1 = e.y1)
      : C.push({ ...e });
  }
  let w = js(y.flat());
  for (let t of w) {
    if (!t.cut) continue;
    let n = o(t.y1 - 1);
    ((t.litW = d(t.x0 / X - e.x0 - 1, n)), (t.litE = d(t.x1 / X - e.x0, n)));
  }
  return { boxes: [...w, ...S], inner: C };
}
function js(e) {
  let t = [],
    n = new Map();
  for (let t of e) {
    let e = `${t.kind}:${t.y0}:${t.y1}:${t.h}:${!!t.cut}`,
      r = n.get(e);
    (r || n.set(e, (r = [])), r.push(t));
  }
  for (let e of n.values()) {
    e.sort((e, t) => e.x0 - t.x0);
    let n = null;
    for (let r of e)
      n && n.x1 === r.x0 ? (n.x1 = r.x1) : t.push((n = { ...r }));
  }
  return t;
}
function Ms(e, t, n, r) {
  let [i, a] = h(e, t);
  return (
    (a.fillStyle = A),
    a.fillRect(0, 0, e, t),
    (a.fillStyle = T),
    a.fillRect(0, 0, e, 1),
    n && a.fillRect(0, 0, 1, t),
    r && a.fillRect(e - 1, 0, 1, t),
    i
  );
}
function Ns(e, n) {
  let { wall: r, faceAbove: i } = ks(n),
    a = t(e),
    [o, s] = h(e.width, e.height);
  (s.drawImage(e, 0, 0), (s.fillStyle = A));
  for (let e = 0; e < u.h; e++)
    for (let t = 0; t < u.w; t++)
      r(t, e) &&
        (i(t, e + 1) || (r(t, e + 1) && i(t, e + 2))) &&
        s.fillRect(t * X * a, e * X * a, X * a, X * a);
  return ne(o, a);
}
function Ps(e) {
  let t = e.room,
    n = t.x0 * X,
    r = t.y0 * X,
    i = e.base,
    [a] = h(t.w * X + 96, t.h * X + 96),
    o = {
      bounds: { x0: n, y0: r, x1: n + t.w * X, y1: r + t.h * X },
      floor: { x: n, y: r, frames: [i], skirt: { c: a, x: n - Os, y: r - Os } },
      boxes: [],
      props: [],
      solids: [],
      sun: !1,
    };
  if (e.flat) return o;
  for (let t of e.blocks)
    o.boxes.push({
      x0: t.x0,
      y0: t.y0,
      x1: t.x1,
      y1: t.y1,
      h: t.h,
      cap: `oblique`,
      tex: t.c,
      texX: t.texX,
      texY: t.texY,
      back: !1,
    });
  let s = As(t, e.house),
    c = new Map();
  for (let e of s.boxes) {
    let t = {
      x0: e.x0,
      y0: e.y0,
      x1: e.x1,
      y1: e.y1,
      h: e.h,
      cap: e.kind === `top` ? `own` : `oblique`,
      back: !1,
    };
    if (e.cut) {
      let n = `${e.x1 - e.x0}x${e.h}:${+!!e.litW}${+!!e.litE}`,
        r = c.get(n);
      (r || c.set(n, (r = Ms(e.x1 - e.x0, e.h, !!e.litW, !!e.litE))),
        (t.section = !0),
        (t.sectionTex = r));
    }
    o.boxes.push(t);
  }
  s.boxes.some((e) => e.kind === `top`) && (o.caps = Ns(i, e.house));
  let l = new Map();
  for (let e of s.inner) {
    let t = l.get(e.wall);
    (t || l.set(e.wall, (t = { faces: [], len: 0 })),
      t.faces.push(e),
      (t.len = Math.max(t.len, e.y1 - e.y0)));
  }
  if (l.size) {
    let e = [...l].map(([e, t]) => ({
      faces: t.faces,
      strip: oe(e, Math.max(1, Math.ceil(t.len / X))),
    }));
    o.extras = (t) =>
      e.map((e) => new Ss(e.faces, e.strip, { lit: t, fog: mt + ht }));
  }
  return o;
}
