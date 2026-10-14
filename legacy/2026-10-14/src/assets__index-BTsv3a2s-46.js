// assets__index-BTsv3a2s 46 — math
// Lines 32584-32897 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function ig(e, t, n) {
  let r = Math.max(e, t, n) / 255,
    i = Math.min(e, t, n) / 255,
    a = (r + i) / 2,
    o = r - i;
  if (!o) return [0, 0];
  let s = o / (1 - Math.abs(2 * a - 1)),
    [c, l, u] = [e / 255, t / 255, n / 255];
  return [
    (r === c
      ? ((l - u) / o + 6) % 6
      : r === l
        ? (u - c) / o + 2
        : (c - l) / o + 4) * 60,
    s,
  ];
}
function ag(e, t, n) {
  let r = e.map((e) =>
      e.getContext(`2d`).getImageData(0, 0, e.width, e.height),
    ),
    i = (e, t) => e[t + 3] > 0 && (!n || n(e[t], e[t + 1], e[t + 2])),
    a = [];
  for (let e of r)
    for (let t = 0; t < e.data.length; t += 4)
      i(e.data, t) && a.push(rg(e.data[t], e.data[t + 1], e.data[t + 2]));
  if (!a.length) return e;
  a.sort((e, t) => e - t);
  let o = a[0],
    s = a[a.length >> 1],
    c = a[a.length - 1],
    l = Lp(t),
    u = l.map((e) => e * 0.42),
    d = l.map((e) => e + (255 - e) * 0.45);
  return r.map((t, n) => {
    let r = t.data;
    for (let e = 0; e < r.length; e += 4) {
      if (!i(r, e)) continue;
      let t = rg(r[e], r[e + 1], r[e + 2]),
        [n, a, f] =
          t <= s
            ? [u, l, s > o ? (t - o) / (s - o) : 1]
            : [l, d, c > s ? (t - s) / (c - s) : 0];
      for (let t = 0; t < 3; t++) r[e + t] = n[t] + (a[t] - n[t]) * f;
    }
    let [a, f] = M(t.width, t.height);
    return (f.putImageData(t, 0, 0), jp(a, Ap(e[n])));
  });
}
function og(e) {
  let t = [`#0b3a5a`, `#2a7fc9`, `#44c9f0`, `#8ef6ff`, `#e6fdff`].map(Lp),
    [n, r] = M(e.width, e.height);
  r.drawImage(e, 0, 0);
  let i = r.getImageData(0, 0, n.width, n.height),
    a = i.data;
  for (let e = 0; e < a.length; e += 4) {
    if (a[e + 3] < 20) continue;
    let n = (a[e] * 0.3 + a[e + 1] * 0.59 + a[e + 2] * 0.11) / 255,
      [r, i, o] = t[Math.min(t.length - 1, Math.floor(n * t.length * 1.15))];
    ((a[e] = r),
      (a[e + 1] = i),
      (a[e + 2] = o),
      (a[e + 3] = n < 0.12 ? 150 : 205));
  }
  return (r.putImageData(i, 0, 0), jp(n, Ap(e)));
}
function eee(e, t, n = 1) {
  let r = t.map(Lp),
    i = e.map((e) => e.getContext(`2d`).getImageData(0, 0, e.width, e.height)),
    a = (e, t) => (e[t] * 0.3 + e[t + 1] * 0.59 + e[t + 2] * 0.11) / 255,
    o = 1,
    s = 0;
  for (let e of i)
    for (let t = 0; t < e.data.length; t += 4) {
      if (e.data[t + 3] < 20) continue;
      let n = a(e.data, t);
      ((o = Math.min(o, n)), (s = Math.max(s, n)));
    }
  let c = Math.max(0.01, s - o);
  return i.map((t, i) => {
    let s = t.data;
    for (let e = 0; e < s.length; e += 4) {
      if (s[e + 3] < 20) continue;
      let t = ((a(s, e) - o) / c) ** +n,
        [i, l, u] = r[Math.min(r.length - 1, Math.round(t * (r.length - 1)))];
      ((s[e] = i), (s[e + 1] = l), (s[e + 2] = u));
    }
    let [l, u] = M(t.width, t.height);
    return (u.putImageData(t, 0, 0), jp(l, Ap(e[i])));
  });
}
var sg =
    (e, t, n) =>
    (r, i, a, o = 1, s = 1) =>
      N(e, r + t, i + n, a, o, s),
  cg = {
    black: `#12050a`,
    deep: `#3a0a18`,
    dark: `#5a0a1a`,
    red: `#b01a2a`,
    core: `#ffffff`,
  },
  lg = `#7ef9ff`;
function ug(e, t, n, r, i, a, o, s) {
  e.fillStyle = s;
  let c = Math.floor(Math.min(t, r, a)),
    l = Math.ceil(Math.max(t, r, a)),
    u = Math.floor(Math.min(n, i, o)),
    d = Math.ceil(Math.max(n, i, o)),
    f = (r - t) * (o - n) - (a - t) * (i - n);
  if (f !== 0)
    for (let s = u; s <= d; s++)
      for (let u = c; u <= l; u++) {
        let c = u + 0.5,
          l = s + 0.5,
          d = ((r - c) * (o - l) - (a - c) * (i - l)) / f,
          p = ((a - c) * (n - l) - (t - c) * (o - l)) / f,
          m = 1 - d - p;
        d >= 0 && p >= 0 && m >= 0 && e.fillRect(u, s, 1, 1);
      }
}
function dg(e, t) {
  let n = Math.sin(e * 127.1 + t * 311.7) * 43758.5453;
  return n - Math.floor(n);
}
function fg(e, t, n, r) {
  let i = r === 1 ? -1 : 0;
  for (let [r, a] of [
    [-3, 1],
    [0, 0],
    [3, 1],
  ])
    (e(t + r, n + a + i, cg.dark, 1, 3), e(t + r, n + a + i + 1, cg.red));
  e(t, n + 1 + i, cg.core);
}
var pg = {
    gorrath: `#ff7a1a`,
    aurek: `#e0b64a`,
    hessa: `#ffcf6a`,
    maelis: `#8ef6ff`,
    vesker: `#e0484e`,
    unseen: `#b58aff`,
  },
  mg = {
    aurek: { w: 30, h: 42, ax: 14, ay: 40 },
    gorrath: { w: 40, h: 48, ax: 20, ay: 46 },
    maelis: { w: 30, h: 46, ax: 15, ay: 44 },
    hessa: { w: 28, h: 38, ax: 13, ay: 36 },
    vesker: { w: 32, h: 44, ax: 15, ay: 42 },
    unseen: { w: 32, h: 46, ax: 15, ay: 44 },
  };
function tee(e, t) {
  let n = sg(e, 1, 1),
    r = t === 2,
    i = +(t === 1),
    a = `#3d4257`,
    o = `#262a3a`,
    s = `#5d6480`,
    c = `#c9a64a`,
    l = `#d9c3b0`,
    u = `#a88f7c`;
  (n(9, 37, `#1a1c26`, 3, 2), n(14, 37, `#1a1c26`, 3, 2));
  for (let e = 13; e <= 36; e++) {
    let t = 4 + Math.floor((e - 13) * 0.2);
    for (let r = 13 - t; r <= 13 + t; r++) {
      let i = a;
      (r <= 13 - t + 1 && (i = s),
        r >= 13 + t - 1 && (i = o),
        n(r, e, e === 36 ? c : i));
    }
  }
  (n(11, 14, c, 1, 22), n(15, 14, c, 1, 22), n(12, 14, `#1d2030`, 3, 22));
  for (let e = 15; e < 35; e += 3) {
    let t = e < 25 ? lg : cg.red;
    (n(e % 2 ? 12 : 13, e, t, 2, 1), n(e % 2 ? 13 : 12, e + 1, t, 1, 1));
  }
  (n(6, 12 + i, o, 15, 3),
    n(6, 14 + i, c, 15, 1),
    n(8, 7 + i, o, 2, 6),
    n(17, 7 + i, o, 2, 6),
    n(9, 8 + i, c, 1, 5),
    n(17, 8 + i, c, 1, 5),
    n(10, 5 + i, `#d8d8e2`, 7, 2),
    n(11, 6 + i, l, 6, 6),
    n(16, 6 + i, u, 1, 6),
    n(10, 6 + i, `#d8d8e2`, 1, 2),
    n(12, 8 + i, `#1b1030`),
    n(14, 7 + i, c, 2, 2),
    n(14, 8 + i, `#ffffff`),
    n(13, 9 + i, u),
    n(12, 10 + i, u, 3, 1),
    n(12, 11 + i, `#b9b9c6`, 3, 1),
    fg(n, 13, 1, t));
  let d = r ? -3 : 0;
  (n(22, 5 + d, `#6f7580`, 1, 34 - d),
    n(22, 5 + d, `#a7adb8`, 1, 3),
    n(21, 0 + d, c, 3, 1),
    n(20, 1 + d, c, 1, 3),
    n(24, 1 + d, c, 1, 3),
    n(21, 4 + d, c, 3, 1),
    n(21, 1 + d, cg.dark, 3, 3),
    n(22, 2 + d, r ? cg.core : cg.red),
    r && n(21, 2 + d, cg.red, 3, 1),
    n(23, 7 + d, c, 2, 1),
    n(23, 9 + d, c, 1, 1),
    n(23, 11 + d, c, 2, 1),
    n(19, 13 + i, a, 3, 7),
    n(21, 19 + i + d, l, 2, 2));
  let f = r ? 15 : 22 - (t === 1);
  (n(5, 13 + i, s, 3, 7),
    n(5, 20 + i, l, 2, 1),
    n(0, f, `#5d586c`, 6, 7),
    n(0, f, `#8c8698`, 5, 6),
    n(0, f, `#b9b3c7`, 5, 1),
    n(1, f + 2, lg, 3, 1),
    n(1, f + 2, lg, 1, 2),
    n(3, f + 3, r ? cg.core : cg.red, 1, 2),
    n(1, f + 4, cg.red, 3, 1));
}
function nee(e, t) {
  let n = sg(e, 1, 1),
    r = t === 2,
    i = `#2a1f24`,
    a = `#4a3538`,
    o = `#150e12`,
    s = `#ff7a1a`,
    c = `#ffd166`,
    l = `#c2361f`;
  (n(10, 35, i, 6, 9),
    n(21, 35, i, 6, 9),
    n(10, 35, a, 1, 9),
    n(21, 35, a, 1, 9),
    n(9, 42, o, 8, 2),
    n(20, 42, o, 8, 2),
    n(12, 38, s, 1, 2),
    n(24, 37, s, 1, 3));
  for (let e = 14; e <= 35; e++) {
    let t = e < 20 ? 12 : Math.max(8, 12 - (e - 20) * 0.3),
      r = Math.round(18 - t),
      s = Math.round(18 + t);
    for (let t = r; t <= s; t++) n(t, e, t <= r + 1 ? a : t >= s - 2 ? o : i);
  }
  ([
    [9, 18],
    [10, 19],
    [11, 20],
    [11, 21],
    [10, 22],
    [10, 23],
    [11, 24],
    [12, 25],
    [11, 26],
    [11, 27],
    [26, 17],
    [25, 18],
    [25, 19],
    [26, 20],
    [27, 21],
    [26, 22],
    [25, 23],
    [25, 24],
    [26, 25],
    [15, 30],
    [16, 31],
    [17, 31],
    [18, 32],
    [20, 31],
    [21, 30],
    [22, 31],
  ].forEach(([e, r], i) => n(e, r, (i + t) % 4 == 0 ? c : s)),
    n(13, 18, o, 11, 10),
    n(14, 19, cg.dark, 9, 8),
    P(e, 19.5, 24, 3.5 + (t === 1 ? 0.5 : 0), 3, cg.red),
    P(e, 19.5, 24, 1.6, 1.4, cg.core));
  for (let e of [15, 18, 21]) n(e, 19, o, 1, 8);
  (n(14, 17, s, 2, 1),
    n(18 + (t % 2), 16, c, 2, 1),
    n(21, 17, s, 2, 1),
    n(3, 12, a, 9, 5),
    n(25, 12, a, 9, 5),
    n(3, 16, l, 9, 1),
    n(25, 16, l, 9, 1));
  for (let e = 0; e < 4; e++) {
    let r = 2 + ((e + t) % 3);
    (n(4 + e * 2, 12 - r, e % 2 ? s : l, 1, r),
      n(26 + e * 2, 12 - (5 - r), e % 2 ? l : s, 1, 5 - r));
  }
  (n(2, 17, i, 6, 14),
    n(2, 17, a, 1, 14),
    n(1, 30, i, 8, 6),
    n(2, 31, s, 6, 1),
    r
      ? (n(29, 3, i, 6, 14),
        n(33, 3, o, 2, 14),
        n(28, 0, i, 8, 5),
        P(e, 33, 0.5, 3.5, 2.5, s),
        P(e, 33, 0.5, 2, 1.5, c),
        n(32, 0, cg.core, 1, 1))
      : (n(29, 17, i, 6, 14),
        n(33, 17, o, 2, 14),
        n(28, 30, i, 8, 6),
        n(29, 31, s, 6, 1)),
    n(14, 7, i, 9, 8),
    n(14, 7, a, 9, 1),
    n(15, 10, c, 7, 1),
    n(17, 10, cg.core, 3, 1),
    n(16, 12, o, 5, 1),
    n(17, 12, s, 3, 1));
  for (let e = 0; e < 7; e++) {
    let r = 3 + ((e * 5 + t * 3) % 4);
    n(14 + e + +(e > 3), 7 - r, e % 2 ? c : s, 1, r);
  }
  (n(15, 5, l, 7, 2), fg(n, 18, 0, t));
}
