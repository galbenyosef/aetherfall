// assets__index-BTsv3a2s 151 — math
// Lines 89211-89509 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Kre(e, t, n, r = !1) {
  let i = n % 8,
    a =
      e === `quiet`
        ? 0
        : e === `singing` || e === `hollowed`
          ? 8
          : Math.round(8 * Math.max(0, Math.min(1, t))),
    o = r ? 96 : 40;
  return Mz(`glyph:${e}:${a}:${i}:${r ? `r` : `e`}`, () => {
    let [t, n] = M(96, o),
      s = e === `hollowed`,
      c = s ? Y.red : Oz,
      l = s
        ? Y.deep
        : e === `quiet`
          ? `rgba(126,249,255,0.18)`
          : `rgba(126,249,255,0.32)`,
      u =
        e === `quiet`
          ? `rgba(126,249,255,0.22)`
          : s
            ? Y.dark
            : `rgba(126,249,255,0.55)`,
      d = o / 2,
      f = (t, r) => {
        let a = Math.round(Math.max(t, r) * 7);
        for (let o = 0; o < a; o++) {
          let c = (o / a) * Math.PI * 2;
          if (s && Nz(o, t) < 0.22) continue;
          let l = u;
          (e === `singing` &&
            Math.abs(
              ((c - (i / 8) * Math.PI * 2 + Math.PI * 4) % (Math.PI * 2)) -
                Math.PI,
            ) >
              Math.PI - 0.5 &&
            (l = kz),
            N(
              n,
              Math.round(48 + Math.cos(c) * t),
              Math.round(d + Math.sin(c) * r),
              l,
            ));
        }
      };
    (f(46, r ? 46 : 19), f(34, r ? 34 : 13.5));
    for (let e = 0; e < 8; e++) {
      let t = Math.PI / 2 + (e / 8) * Math.PI * 2,
        o = Math.round(48 + Math.cos(t) * 40) - 1,
        u = Math.round(d + Math.sin(t) * (r ? 40 : 16.3)) - 1,
        f = e < a ? c : l;
      (Gre[e].forEach((e, t) => {
        for (let r = 0; r < 3; r++) e[r] === `x` && N(n, o + r, u + t, f);
      }),
        e < a && !s && (i + e) % 8 == 0 && N(n, o + 1, u + 1, kz));
    }
    return t;
  });
}
function zz(e, t = 120, n = !1) {
  let [r, i] = M(16, t),
    a = 0.8 + 0.2 * Math.sin(e * 0.35),
    [o, s, c] = Lp(n && e % 16 < 5 ? Y.hot : `#44c9f0`);
  for (let n = 0; n < t; n++) {
    let r = (0.25 + 0.75 * (n / t) ** 0.8) * a,
      l = Math.round(Math.sin(n * 0.3 + e * 0.6) * 0.6);
    ((i.fillStyle = `rgba(${o},${s},${c},${(r * 0.22).toFixed(3)})`),
      i.fillRect(2 + l, n, 12, 1),
      (i.fillStyle = `rgba(${o},${s},${c},${(r * 0.6).toFixed(3)})`),
      i.fillRect(5 + l, n, 6, 1),
      (i.fillStyle = `rgba(255,255,255,${(r * 0.85).toFixed(3)})`),
      i.fillRect(7 + l, n, 2, 1));
  }
  for (let n = 0; n < 4; n++) {
    let r = t - 6 - ((e * 2.2 + (t / 4) * n) % (t - 10)),
      a = n % 2 ? 3 : 11;
    (N(i, a, r, kz), N(i, a, r + 1, Oz), N(i, a + (n % 2 ? 1 : -1), r - 1, Oz));
  }
  return r;
}
function qre(e, t) {
  let n = Math.max(0, Math.min(1, e)),
    [r, i] = M(36, 18),
    a = Math.round(4 + 12 * n);
  n > 0 && P(i, 18, 11, a + 3, 3 + 2 * n, `rgba(18,5,10,0.45)`);
  for (let e = -a; e <= a; e++) {
    let r = 1 - Math.abs(e) / (a + 1),
      o = Math.round((Nz(e, 7) - 0.5) * 2),
      s = Math.max(0, Math.round(r * 3.2 * n + (r > 0.4 ? 0.5 : 0))),
      c = Math.round(18 + e),
      l = 11 + o * +(Math.abs(e) > 2);
    if (s === 0) {
      N(i, c, l, Y.dark);
      continue;
    }
    (N(i, c, l - s - 1, Y.mid),
      N(i, c, l - s, Y.black, 1, s * 2 + 1),
      N(i, c, l + s + 1, Y.red),
      r > 0.25 && N(i, c, l, (t + e) % 6 < 3 ? Y.core : Y.hot));
  }
  if (n > 0.5)
    for (let e = 0; e < 5; e++) {
      let n = (t * 1.5 + e * 3.7) % 10,
        r = Math.round(18 - a * 0.7 + Nz(e, 1) * a * 1.4),
        o = Math.round(9 - n);
      o >= 0 && N(i, r, o, e % 2 ? Y.red : e % 3 ? Y.hot : kz);
    }
  return r;
}
function Jre(e, t) {
  let n = Az(e),
    r = t >= 4,
    i = t % 2,
    a = r || i === 0 ? 0 : -1,
    o = r ? 2 : 0;
  for (let e = 0; e < 5; e++) {
    let t = 3 + e * 3 + o,
      r = (e + i) % 2 == 0;
    (n(t, 9 + a, Y.black, 1, r ? 2 : 3),
      n(t + (r ? -1 : 1), r ? 11 : 12, Y.black),
      n(t, 9 + a, Y.mid));
  }
  (P(e, 9 + o, 7 + a, 7.5, 3.8, Y.black),
    P(e, 9 + o, 6.2 + a, 6.5, 2.8, Y.deep));
  for (let e = 0; e < 5; e++)
    (n(3 + e * 3 + o, 4 + a, Y.dark, 2, 1),
      n(5 + e * 3 + o, 5 + a, Y.black, 1, 3),
      n(4 + e * 3 + o, 2 + a + (e % 2), Y.red, 1, 2 - (e % 2)));
  n(4 + o, 3 + a, Y.hot);
  let s = (r ? 17 : 15) + o;
  (P(e, s - 1, 7 + a, 3, 3, Y.black),
    r
      ? (n(s, 4, Y.red, 3, 6),
        n(s + 1, 5, Y.black, 2, 4),
        n(s + 1, 6, Y.core, 1, 2),
        n(s + 2, 6, Y.hot, 1, 2))
      : (n(s, 6 + a, Y.red, 2, 3), n(s + 1, 7 + a, i ? Y.core : Y.hot)),
    (t % 3 == 0 || r) && n(8 + o, 7 + a, Y.core));
}
function Yre(e, t) {
  let n = Az(e),
    r = t < 3 ? (t + 1) / 4 : 1,
    i = t < 3 ? 0 : [0, 1, 0, -1][t - 3],
    a = Math.round(40 * r);
  (P(e, 10, 44, 7, 2, Y.black),
    n(3, 43, Y.dark, 3, 1),
    n(14, 43, Y.dark, 3, 1));
  for (let e = 0; e < a; e++) {
    let t = e / 40,
      r = 43 - e,
      a = Math.round(10 + Math.sin(t * 5 + 0.5) * 2.2 * t + i * t * t * 3),
      o = Math.max(1, Math.round(4 - t * 3));
    (n(a - Math.floor(o / 2), r, Y.black, o, 1),
      o >= 2 && n(a - Math.floor(o / 2), r, Y.deep),
      o >= 3 && n(a + Math.ceil(o / 2) - 1, r, Y.mid));
  }
  if (r === 1) {
    let e = Math.round(10 + Math.sin(5.5) * 2.2 + i * 3);
    (n(e - 1, 3, Y.black, 3, 1),
      n(e - 3, 4, Y.black, 2, 1),
      n(e - 4, 5, Y.red));
  }
  for (let e = 0; e < 3; e++) {
    let o = Math.round(((e * 13 + (40 - ((t * 4) % 40))) % 40) * r);
    if (o >= a) continue;
    let s = o / 40,
      c = Math.round(10 + Math.sin(s * 5 + 0.5) * 2.2 * s + i * s * s * 3);
    (n(c, 43 - o, Y.core), n(c, 44 - o, Y.hot));
  }
}
function Xre(e, t) {
  let n = Az(e),
    r = t === 4 || t === 5,
    i = t === 6,
    a = t === 1 || t === 3 ? -1 : 0,
    o = i ? -2 : 0,
    s = `#1a1018`,
    c = Y.dark,
    l = `#a89c8e`,
    u = a;
  for (let e = 14; e < 43; e++) {
    let t = (e - 14) / 29,
      r = Math.round(4 + t * 9),
      i = Math.round(o * (1 - t));
    (n(16 - r + i, e + u * +(e < 40), s, r * 2, 1),
      n(16 - r + i, e + u * +(e < 40), `#2e1c28`, 2, 1));
  }
  !r && !i && n(t < 2 ? 25 : 22, 42, s, 4, 1);
  for (let [e, t, r, i] of [
    [10, 20, 8, 1],
    [10, 20, 1, 6],
    [10, 26, 5, 1],
    [14, 23, 1, 4],
    [18, 22, 1, 8],
    [18, 30, 6, 1],
    [8, 32, 1, 6],
    [8, 38, 9, 1],
    [12, 33, 6, 1],
    [22, 34, 1, 6],
    [20, 25, 4, 1],
  ])
    n(e + Math.round(o * 0.5), t + u, c, r, i);
  let d = 16 + o;
  for (let e = 2; e < 15; e++) {
    let t = e < 5 ? e - 1 : Math.min(6, 3 + Math.floor((e - 2) / 2));
    n(d - t, e + u, s, t * 2, 1);
  }
  (n(d - 1, 1 + u, s, 2, 1),
    n(d - 3, 7 + u, `#d9d0c4`, 7, 6),
    n(d - 3, 7 + u, l, 1, 6),
    n(d + 3, 7 + u, l, 1, 6),
    n(d - 2, 8 + u, Y.red, 2, 2),
    n(d + 1, 8 + u, Y.red, 2, 2),
    n(d - 2, 8 + u, i ? Y.dark : kz),
    n(d + 2, 8 + u, i ? Y.dark : kz),
    r
      ? (n(d - 1, 11 + u, Y.black, 3, 2), n(d, 11 + u, Y.red))
      : n(d - 1, 11 + u, `#2a1a1a`, 3, 1));
  let f = (e, t, r) => {
    (n(e, t, Y.dark, 3, 5),
      n(e + 1, t - 1, Y.red),
      n(e + 1, t + 5, Y.dark),
      n(e + 1, t + 1, r ? kz : Y.hot, 1, 3),
      n(e + 2, t + 1, Y.red, 1, 2));
  };
  if (r) {
    (n(d - 7, 5 + u, s, 3, 10),
      n(d + 5, 5 + u, s, 3, 10),
      n(d - 7, 4 + u, `#8f8578`, 3, 2),
      n(d + 5, 4 + u, `#8f8578`, 3, 2),
      f(d + 5, 4 + u - 5, !0));
    let e =
      t === 4
        ? [
            [4, 6],
            [27, 10],
            [6, 18],
          ]
        : [
            [3, 10],
            [28, 5],
            [26, 18],
          ];
    for (let [t, r] of e) (n(t, r, Y.red, 3, 1), n(t + 1, r - 1, Y.hot, 1, 3));
  } else
    i
      ? (n(d + 3, 16, s, 3, 7), n(d + 3, 22, `#8f8578`, 2, 2), f(d + 5, 22, !1))
      : (n(d + 3, 15 + u, s, 4, 4),
        n(d + 6, 17 + u, `#8f8578`, 2, 2),
        f(d + 7, 15 + u, t % 2 == 0),
        n(d - 6, 16 + u, s, 3, 9),
        n(d - 6, 25 + u, `#8f8578`, 2, 2));
  (n(d - 1, 19 + u, Y.red, 2, 2), n(d - 1, 19 + u, r ? kz : Y.hot));
}
var Zre = {
    gnawer: { w: 24, h: 15, ax: 10, ay: 13, frames: 6, draw: Jre },
    tether: { w: 20, h: 46, ax: 10, ay: 44, frames: 7, draw: Yre },
    cantor: { w: 34, h: 45, ax: 16, ay: 43, frames: 7, draw: Xre },
  },
  Bz = new Map();
function Qre(e) {
  let t = Bz.get(e);
  if (t) return t;
  let n = Zre[e],
    r = [];
  for (let e = 0; e < n.frames; e++) {
    let [t, i] = M(n.w, n.h);
    (n.draw(i, e), F(t, Dz), r.push(t));
  }
  let i = {
    frames: r,
    flipped: r.map(Ip),
    flash: r.map((e) => Fp(e)),
    ax: n.ax,
    ay: n.ay,
  };
  return (Bz.set(e, i), i);
}
function $re(e, t, n, r, i, a) {
  let o = Math.hypot(r - t, i - n),
    s = Math.max(2, Math.round(o)),
    c = -(i - n) / o,
    l = (r - t) / o,
    [u, d, f] = Lp(`#7ef9ff`),
    [p, m, h] = Lp(Y.red);
  for (let o = 0; o <= s; o++) {
    let g = o / s,
      _ = Math.sin(g * Math.PI * 3 - a * 0.8) * 1.3 * Math.sin(g * Math.PI),
      v = Math.round(t + (r - t) * g + c * _),
      y = Math.round(n + (i - n) * g + l * _),
      b = (e, t) => Math.round(e + (t - e) * g);
    N(e, v, y, `rgb(${b(u, p)},${b(d, m)},${b(f, h)})`);
  }
  for (let o = 0; o < 3; o++) {
    let s = (((a * 0.07 + o / 3) % 1) + 1) % 1;
    N(e, Math.round(t + (r - t) * s), Math.round(n + (i - n) * s), kz);
  }
}
