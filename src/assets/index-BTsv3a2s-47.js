// index-BTsv3a2s 47 — math
// Lines 32898-33156 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function hg(e, t) {
  let n = sg(e, 1, 1),
    r = t === 2,
    i = t === 1 ? -1 : 0,
    a = `#b9cfe0`,
    o = `#bfe0f5`,
    s = `#8ec5e8`,
    c = `#eef2f6`,
    l = `#c9d6e2`,
    u = `#8fb4dc`,
    d = `#cfe6ff`,
    f = `#5f86b4`;
  for (let e = 14; e <= 38; e++) {
    let r = 3.5 + (e - 14) * 0.38,
      c = Math.round(14 - r),
      l = Math.round(14 + r);
    for (let r = c; r <= l; r++) {
      let u = e > 27,
        d = u ? o : `#e8f1f8`;
      (r <= c + 1 && (d = u ? `#e6fdff` : `#ffffff`),
        r >= l - 1 && (d = u ? s : a),
        (e !== 38 || (r + t) % 3 == 0) && n(r, e + i, d));
    }
  }
  for (let e = 0; e < 6; e++)
    n(6 + e * 3 + (e % 2), 39 + i, e % 2 ? s : o, 1, 2 + (e % 2));
  for (let [e, t] of [
    [8, 31],
    [14, 33],
    [19, 30],
  ])
    (n(e, t + i, `#9cc0e0`, 3, 3),
      n(e, t + 1 + i, `#4a6f94`),
      n(e + 2, t + 1 + i, `#4a6f94`),
      n(e + 1, t + 2 + i, `#4a6f94`));
  (n(12, 14 + i, a, 5, 2),
    n(13, 16 + i, a, 3, 1),
    r
      ? (n(5, 13 + i, a, 5, 2),
        n(3, 11 + i, a, 3, 2),
        n(2, 10 + i, c, 2, 1),
        n(19, 13 + i, a, 5, 2),
        n(22, 11 + i, a, 3, 2),
        n(24, 10 + i, c, 2, 1))
      : (n(9, 14 + i, a, 3, 6),
        n(17, 14 + i, a, 3, 6),
        n(12, 18 + i, c, 5, 2),
        n(12, 19 + i, l, 5, 1)),
    n(9, 5 + i, u, 11, 3),
    n(9, 7 + i, u, 2, 16),
    n(18, 7 + i, u, 2, 16),
    n(9, 12 + i, f, 1, 10),
    n(19, 10 + i, f, 1, 12),
    n(10, 5 + i, d, 3, 1),
    n(9, 8 + i, d, 1, 4),
    n(11, 6 + i, c, 7, 7),
    n(17, 6 + i, l, 1, 7),
    n(11, 6 + i, u, 7, 1),
    n(12, 9 + i, `#6a86a6`, 2, 1),
    n(15, 9 + i, `#6a86a6`, 2, 1),
    n(14, 11 + i, `#3a2a4a`, 1, r ? 2 : 1),
    n(13, 13 + i, cg.red, 3, 1),
    n(14, 13 + i, cg.core),
    n(10, 4 + i, `#e6fdff`, 9, 1),
    n(11, 3 + i, `#e6fdff`),
    n(17, 3 + i, `#e6fdff`),
    fg(n, 14, 0 + i, t));
  let p = r
    ? [
        [1, 5],
        [24, 3],
        [21, 0],
      ]
    : [[23, t === 1 ? 6 : 8]];
  for (let [e, t] of p)
    (n(e, t + 2, `#bff0ff`, 2, 2),
      n(e + 1, t, `#bff0ff`, 1, 2),
      n(e + 2, t, `#bff0ff`));
}
function gg(e, t) {
  let n = sg(e, 1, 1),
    r = t === 2,
    i = +(t === 1),
    a = `#6f6a66`,
    o = `#4a4644`,
    s = `#8f8a85`,
    c = `#cfae90`,
    l = `#a0806a`;
  (n(9, 34, `#3a2a22`, 3, 2), n(13, 34, `#3a2a22`, 3, 2));
  for (let e = 12; e <= 34; e++) {
    let t = 4.5 + (e - 12) * 0.2,
      r = Math.round(12 - t),
      i = Math.round(12 + t);
    for (let t = r; t <= i; t++)
      (e >= 32 && dg(t, e) < 0.35) ||
        n(t, e, t <= r + 1 ? s : t >= i - 1 ? o : a);
  }
  (n(10, 16, `#5a4a3a`, 5, 18),
    n(12, 16, `#4a3a2e`, 1, 18),
    n(7, 17, `#5a4a3a`, 11, 1));
  for (let e of [8, 11, 14, 16]) n(e, 18, `#e8dcc0`, 1, 2);
  (n(6, 5, a, 12, 9),
    n(7, 4, a, 10, 1),
    n(6, 5, s, 2, 9),
    n(16, 5, o, 2, 9),
    n(8, 6, `#2a2628`, 8, 8),
    n(9, 8, c, 6, 6),
    n(14, 8, l, 1, 6),
    n(8, 9, `#e6e6e6`, 1, 4),
    n(10, 10, `#e6e0f5`),
    n(13, 10, `#e6e0f5`),
    n(10, 11, l, 1, 1),
    n(13, 11, l, 1, 1),
    n(12, 11, l, 1, 2),
    n(11, 13, l, 3, 1),
    fg(n, 12, 0, t),
    n(4, 15, s, 3, 6),
    n(6, 20, c, 2, 2));
  let u = r ? -4 : 0;
  (n(20, 6 + u, `#5a3a22`, 1, 30 - u),
    n(19, 4 + u, `#5a3a22`, 3, 2),
    n(21, 3 + u, `#5a3a22`, 2, 1),
    n(18, 16, a, 3, 5),
    n(19, 18 + u / 2, c, 2, 2));
  let d = 21 + i,
    f = 6 + u;
  (n(d + 1, f - 1, `#3a3438`, 1, 1),
    n(d, f, `#3a3438`, 4, 1),
    n(d, f + 1, `#3a3438`, 1, 5),
    n(d + 3, f + 1, `#3a3438`, 1, 5),
    n(d, f + 6, `#3a3438`, 4, 1),
    n(d + 1, f + 1, cg.dark, 2, 5),
    n(d + 1, f + 2, cg.red, 2, 3),
    n(d + 1, f + 3, cg.core, r ? 2 : 1, 1));
}
function _g(e, t) {
  let n = sg(e, 1, 1),
    r = t === 2,
    i = `#1c1a20`,
    a = `#34303c`,
    o = `#d9d2c0`,
    s = `#a89f8a`,
    c = `#8a8f99`,
    l = `#5a5f69`;
  for (let e = 16; e <= 40; e++) {
    let t = 4 + (e - 16) * 0.25,
      r = Math.round(14 - t),
      o = Math.round(14 + t);
    for (let t = r; t <= o; t++)
      n(t, e, t <= r + 1 ? a : t >= o - 1 ? `#0e0c12` : i);
  }
  (n(11, 15, o, 2, 20),
    n(16, 15, o, 2, 20),
    n(12, 15, s, 1, 20),
    n(17, 15, s, 1, 20));
  for (let e = 17; e < 34; e += 4)
    (n(11, e, `#6f6a7a`), n(16, e + 2, `#6f6a7a`));
  (n(11, 35, s, 2, 2),
    n(16, 35, s, 2, 2),
    n(9, 5, i, 11, 11),
    n(10, 3, i, 9, 2),
    n(12, 2, i, 5, 1),
    n(9, 5, a, 1, 11),
    n(11, 8, `#2a2630`, 7, 6));
  for (let e = 8; e < 14; e++)
    for (let t = 11; t < 18; t++) (t + e) % 2 == 0 && n(t, e, `#3e3846`);
  (n(12, 10, r ? cg.core : cg.red),
    n(16, 10, r ? cg.core : cg.red),
    n(13, 14, `#cfc6bc`, 3, 1),
    fg(n, 14, -1, t));
  let u = r ? -5 : 0;
  n(5, 16 + u, i, 4, 10);
  for (let e = 17; e < 25; e += 2) n(5, e + u, e % 4 == 1 ? c : l, 4, 1);
  n(6, 26 + u, `#cfc6bc`, 2, 1);
  let d = [];
  for (let e = 0; e < 12; e++) d.push([6 - Math.floor(e / 3), 27 + u + e]);
  for (let e = 0; e < 10; e++) d.push([3 + e, 40]);
  d.forEach(([e, t], r) => {
    t > 40 || n(e, t, r === 7 || r === 16 ? cg.red : r % 2 ? c : l);
  });
  let f = r ? 0 : [0, 1, 0][t],
    p = r ? 13 : 28;
  (n(20, 16, i, 4, 8), n(21, 23, `#cfc6bc`, 2, 1));
  for (let e = 24; e < p; e++) n(22 + (e > 25 ? f : 0), e, l);
  r && (n(20, 5, i, 4, 11), n(21, 4, `#cfc6bc`, 2, 1), n(22, 5, l, 1, 8));
  let m = 21 + f;
  (n(m, p, `#8a6f2e`, 4, 3),
    n(m, p, `#c9a64a`, 4, 1),
    n(m + 1, p + 1, cg.red, 2, 1),
    n(m + 1, p + 3, `#8a6f2e`, 2, 1),
    n(m + 1 - (t % 2), p - 2, `#6f6a7a`, 2, 1),
    n(m + 2, p - 4, `#56535f`, 2, 1));
}
function vg(e, t) {
  let n = sg(e, 1, 1),
    r = t === 2,
    i = (e) =>
      e < 5
        ? e - 1
        : e < 13
          ? 4 + (e - 5) * 0.3
          : e < 16
            ? 7 + (e - 13)
            : 9 + (e - 16) * 0.1;
  for (let e = 2; e <= 42; e++) {
    let r = i(e),
      a = dg(Math.floor(e / 3), t + 1);
    if (e > 13 && a < 0.14) continue;
    let o = e > 13 && a > 0.86 ? (t % 2 ? 2 : -2) : 0,
      s = Math.round(14 - r) + o,
      c = Math.round(14 + r) + o;
    for (let r = s; r <= c; r++) {
      let i = dg(r * 3 + t, e * 7),
        a = `#07050c`;
      (i > 0.97 ? (a = `#ffffff`) : i > 0.93 && (a = `#9aa4d6`),
        e > 38 && (a = (r + e) % 3 == 0 ? `#d06bff` : `#2a1740`),
        n(r, e, a));
    }
  }
  if (
    (n(11, 8, cg.dark, 7, 5),
    n(12, 7, cg.dark, 5, 1),
    n(12, 8, `#000000`, 5, 4),
    n(12, 12, cg.red, 5, 1),
    n(11, 11, cg.red, 1, 1),
    n(17, 11, cg.red, 1, 1),
    n(12, 9, `#ffffff`),
    n(16, 9, `#ffffff`),
    fg(n, 14, -2, t),
    r)
  ) {
    (n(22, 20, `#9a93a8`, 3, 2), n(25, 19, `#9a93a8`, 1, 1));
    for (let e = 8; e < 34; e++) {
      let t = 27 + Math.round(Math.sin(e * 1.3) * 1.2);
      (n(t, e, e % 5 == 0 ? `#ffffff` : `#e6d9ff`),
        e % 3 == 0 && n(t + 1, e, `#9aa4d6`));
    }
  }
}
var yg = {
    aurek: tee,
    gorrath: nee,
    maelis: hg,
    hessa: gg,
    vesker: _g,
    unseen: vg,
  },
  bg = new Map();
function xg(e) {
  let t = bg.get(e);
  if (t) return t;
  let { w: n, h: r } = mg[e],
    i = [];
  for (let t = 0; t < 3; t++) {
    let [a, o] = M(n, r);
    (yg[e](o, t), F(a, `#050208`), i.push(a));
  }
  return (bg.set(e, i), i);
}
