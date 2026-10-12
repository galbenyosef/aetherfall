// assets__index-BTsv3a2s 83 — math
// Lines 44855-45197 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function rC(e, t, n, r = !1, i = 0) {
  (e.save(),
    r && (e.globalAlpha = 0.6),
    N(e, t - 1, n - 2, i > 0.66 ? G[2] : ZS.dark, 2, 4),
    N(e, t - 0.5, n - 1, i > 0.33 ? G[3] : ZS.red, 1, 2),
    N(e, t - 0.25, n - 0.25, ZS.core),
    i > 0.66 && N(e, t - 1, n - 2, G[4], 1, 1),
    e.restore());
}
function iC(e, t) {
  let n = (e / 7) * Math.PI * 2 + t;
  return {
    x: Math.cos(n) * 17,
    y: Math.sin(n) * 5 - 4,
    behind: Math.sin(n) < 0,
  };
}
function aC(e, t, n, r, i, a = {}) {
  for (let o = 0; o < 7; o++) {
    if (a.skip?.(o)) continue;
    let s = iC(o, r);
    (i !== `back` || s.behind) &&
      ((i === `front` && s.behind) ||
        rC(e, t + s.x, n + s.y, s.behind, a.hot?.(o) ?? 0));
  }
}
var tne = null,
  nne = () => (tne ??= Ip($h()));
function oC(e, t, n, r = {}) {
  let i = r.flip ? nne() : $h(),
    a = t - eC,
    o = n - tC,
    s = a + 33,
    c = o + 12,
    l = r.t ?? 0.4;
  return (
    ym(e, t, o + 46, 44, G[2], r.aura ?? 0.45),
    aC(e, s, c, l, `back`, r),
    Em(e, i, eC, tC, t, n, 22),
    aC(e, s, c, l, `front`, r),
    {
      hx: s,
      hy: c,
      handX: r.flip ? a + 65 - nC : a + nC,
      handY: o + ene,
      ox: a,
      oy: o,
    }
  );
}
function sC(e, t, n, r, i = 3, a = 0) {
  Em(e, dh(t).frames[i][a], 10, 26, n, r, 5);
}
function cC(e, t, n, r, i, a, o, s = 0) {
  let c = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ],
    l = t,
    u = n;
  for (let t = 0; t < a; t++) {
    let [n, a] = c[(t + s) % 4],
      d = Math.floor(t / 2 + 1) * r,
      f = l + n * d,
      p = u + a * d;
    (t >= i && z(e, l, u, f, p, o(t)), (l = f), (u = p));
  }
}
function lC(e, t, n, r, i, a, o = {}) {
  let s = o.w ?? (r > 24 ? 4 : 3),
    c = o.seed ?? 0,
    l = Math.PI * 2,
    u = -Math.PI / 2,
    d = Math.max(6, Math.round((l * r) / 15)),
    f = o.prog ?? 1,
    p = (e) => ((((e - u) % l) + l) % l) / l,
    m = (e) => p(e) <= f,
    h = (e) => Math.floor(p(e) * d),
    g = (e) => (p(e) * d) % 1,
    _ = Math.min(0.2, 2 / ((l * r) / d)),
    v = (e, t) => (o.broken ? L(Math.round(e * 20), t, c) < o.broken : !1),
    y = r - s,
    b = i - s / 1.1;
  (B(
    e,
    t,
    n,
    r,
    i,
    a,
    (e) =>
      m(e) && !v(e, 1) && !(L(h(e), c, 1) < 0.4 && Math.abs(g(e) - 0.55) < _),
  ),
    B(
      e,
      t,
      n,
      y,
      b,
      a,
      (e) =>
        m(e) && !v(e, 2) && !(L(h(e), c, 2) < 0.4 && Math.abs(g(e) - 0.25) < _),
    ));
  for (let f = 0; f < d; f++) {
    let p = u + (f / d) * l;
    if (!m(p) || (o.broken && L(f, c, 5) < o.broken)) continue;
    let h = Math.cos(p),
      g = Math.sin(p);
    if (
      (L(f, c, 3) < 0.55 && z(e, t + h * y, n + g * b, t + h * r, n + g * i, a),
      o.stub && L(f, c, 4) < 0.35)
    ) {
      let r = p + (l / d) * 0.6,
        i = Math.max(2, s * 0.75);
      z(
        e,
        t + Math.cos(r) * y,
        n + Math.sin(r) * b,
        t + Math.cos(r) * (y - i),
        n + Math.sin(r) * (b - i / 1.1),
        o.stub,
      );
    }
  }
  if (o.hot && f < 1) {
    let a = u + f * l;
    N(
      e,
      t + Math.cos(a) * (r - s / 2) - 1,
      n + Math.sin(a) * (i - s / 2.2) - 1,
      o.hot,
      3,
      3,
    );
  }
}
function uC(e, t, n, r, i, a, o = 0) {
  mm(
    e,
    t,
    n,
    r,
    i,
    a,
    o > 0.66
      ? [G[0], G[0], G[1], G[1], G[2]]
      : o > 0.33
        ? [G[0], G[1], G[1], G[2], G[3]]
        : G,
  );
}
function dC(e, t, n, r, i, a = !1) {
  for (let o = 0; o < r; o++) {
    let s = t - o,
      c = Math.floor((o + i) / 3) % 2 == 0,
      l = o / r;
    if (l > 0.6 && L(s, i, 3) < (l - 0.6) * 2) continue;
    let u = a
      ? l < 0.4
        ? G[2]
        : G[1]
      : l < 0.25
        ? G[3]
        : l < 0.6
          ? G[2]
          : G[1];
    (N(e, s, n + (c ? -1 : 1), u), (o + i) % 3 == 0 && N(e, s, n, u));
  }
}
function fC(e, t, n, r, i) {
  let a = (t, n) => n * e + t,
    o = new Uint8Array(e * t),
    s = new Set(),
    c = [Math.floor(e / 2), Math.floor(t / 2)],
    l = [c];
  o[a(...c)] = 1;
  let u = 0;
  for (; l.length;) {
    let [r, i] = l[l.length - 1],
      c = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]
        .map(([e, t]) => [r + e, i + t])
        .filter(([n, r]) => n >= 0 && r >= 0 && n < e && r < t && !o[a(n, r)]);
    if (!c.length) {
      l.pop();
      continue;
    }
    let [d, f] = c[Math.floor(L(u++, n) * c.length)];
    (d === r
      ? s.add(`h${r},${Math.max(i, f)}`)
      : s.add(`v${Math.max(r, d)},${i}`),
      (o[a(d, f)] = 1),
      l.push([d, f]));
  }
  let d = [];
  for (let a = 0; a < t; a++)
    for (let t = 0; t <= e; t++)
      s.has(`v${t},${a}`) ||
        (L(t, a, n + 1) < (t === 0 || t === e ? i : r) &&
          d.push({ x: t, y: a, v: !0 }));
  for (let a = 0; a <= t; a++)
    for (let o = 0; o < e; o++)
      s.has(`h${o},${a}`) ||
        (L(o, a, n + 2) < (a === 0 || a === t ? i : r) &&
          d.push({ x: o, y: a, v: !1 }));
  return d;
}
var pC = 14,
  mC = 16;
function hC(e) {
  let t = e.heat ?? 0;
  return e.dark
    ? [G[1], G[1]]
    : t > 0.6
      ? [G[4], G[4]]
      : t > 0.25
        ? [G[3], G[4]]
        : [G[2], G[3]];
}
function gC(e, t, n) {
  (n(e), t && n(t));
}
function _C(e, t, n, r, i, a, o = {}) {
  let [s, c] = hC(o),
    l = n + 2;
  if (i > 0) {
    (N(e, t, l - i, YS[1], r, i), N(e, t, l - i, YS[2], 1, i));
    for (let n = 0; n < 2; n++) {
      let o = t + 3 + Math.floor(L(a, n, 1) * (r - 7));
      for (let t = 0; t < Math.min(i - 3, 7); t++)
        N(e, o + Math.floor(t / 2), l - i + 2 + t, YS[2]);
    }
    if (i >= 7) {
      let n = l - Math.round(i * 0.4),
        u = L(a, 3) < 0.5 ? -2 : 2,
        d = t + 4 + Math.floor(L(a, 2) * (r - 8));
      gC(e, o.fx, (e) => {
        (z(e, t + 1, n, d, n, s),
          z(e, d, n, d, n + u, s),
          z(e, d, n + u, t + r - 2, n + u, s),
          N(e, d, n, c));
      });
    }
    if (o.cracks)
      for (let n = 0; n < 3; n++) {
        let s = t + 2 + Math.floor(L(a, n, 5) * (r - 4)),
          c = Math.round(i * o.cracks * (0.4 + L(a, n, 6) * 0.5));
        z(e, s, l - i, s + (n % 2 ? 1 : -1), l - i + c, YS[4]);
      }
    gC(e, o.fx, (e) => N(e, t, l - 1, s, r, 1));
  }
  (N(e, t, l - i - 4, YS[3], r, 4),
    N(e, t, l - i - 1, YS[4], r, 1),
    gC(e, o.fx, (e) => N(e, t, l - i - 3, c, r, 1)),
    (o.heat ?? 0) > 0.5 && gC(e, o.fx, (e) => N(e, t, l - i - 4, G[4], r, 1)));
}
function vC(e, t, n, r, i, a, o = {}) {
  let [s, c] = hC(o);
  (N(e, t - 2, n - i, YS[3], 4, r),
    N(e, t - 2, n - i, YS[4], 1, r),
    N(e, t + 1, n - i, YS[2], 1, r),
    gC(e, o.fx, (e) => N(e, t, n - i, c, 1, r)),
    i > 0 &&
      (N(e, t - 2, n + r - i, YS[1], 4, i),
      N(e, t - 2, n + r - i, YS[2], 1, i),
      gC(e, o.fx, (e) => {
        if (i >= 6) {
          let o = n + r - Math.round(i * (0.3 + L(a, 4) * 0.4));
          (z(e, t, n + r - i, t, o, s), N(e, t - 1, o, c));
        }
        N(e, t - 2, n + r - 1, s, 4, 1);
      }),
      o.cracks &&
        z(
          e,
          t - 1,
          n + r - i,
          t - 1,
          n + r - i + Math.round(i * o.cracks * 0.7),
          YS[4],
        )),
    (o.heat ?? 0) > 0.5 && gC(e, o.fx, (e) => N(e, t, n - i, G[4], 1, r)));
}
function yC(e, t, n, r, i = {}) {
  let a = r + 2;
  (N(e, t - 2, n + 2 - a, YS[1], 4, a),
    N(e, t - 2, n + 2 - a, YS[2], 1, a),
    N(e, t - 2, n - 2 - a, YS[3], 4, 4),
    N(e, t - 2, n + 1 - a, YS[4], 4, 1),
    gC(e, i.fx, (e) =>
      N(
        e,
        t - 1,
        n - 1 - a,
        i.dark ? G[1] : (i.heat ?? 0) > 0.25 ? G[4] : G[2],
        2,
        1,
      ),
    ));
}
function bC(e, t, n, r, i, a, o) {
  if (a < 0.5) dm(e, t, n, r, i, a < 0.25 ? G[2] : G[3], 3, 1, o);
  else if (a < 0.85) {
    z(e, t, n, r, i, G[3]);
    let a = Math.max(Math.abs(r - t), Math.abs(i - n));
    for (let s = (o * 3) % 5; s <= a; s += 5)
      N(e, t + ((r - t) * s) / a, n + ((i - n) * s) / a, G[4]);
  } else {
    let a = t === r;
    (z(e, t - +!!a, n - +!a, r - +!!a, i - +!a, G[2]),
      z(e, t + +!!a, n + +!a, r + +!!a, i + +!a, G[2]),
      z(e, t, n, r, i, G[4]));
  }
}
function xC(e) {
  let t = [[0, 0, 2, 0]],
    n = e % 3;
  t.push([n, 0, n, 2 + (e % 2)]);
  let r = [];
  for (let e = 1; e < 4; e++)
    for (let t = 0; t < 3; t++)
      (t < 2 && r.push([t, e, t + 1, e]),
        e < 3 && r.push([t, e, t, e + 1]),
        t < 2 && e < 3 && r.push([t, e, t + 1, e + 1]),
        t > 0 && e < 3 && r.push([t, e, t - 1, e + 1]));
  for (let n = 0; n < 3; n++) t.push(r[Math.floor(L(e, n, 21) * r.length)]);
  return t;
}
function SC(e, t, n, r, i, a) {
  let o = xC(r);
  if (a)
    for (let [r, i, s, c] of o)
      z(e, t + r * 3 + 1, n + i * 3 + 1, t + s * 3 + 1, n + c * 3 + 1, a);
  for (let [r, a, s, c] of o)
    z(e, t + r * 3, n + a * 3, t + s * 3, n + c * 3, i);
  r % 3 == 2 && N(e, t + 3, n + 11, i);
}
