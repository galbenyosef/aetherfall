// assets__index-BTsv3a2s 43 — map
// Lines 31567-31885 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function vh(e, t) {
  let n = `#2a2426`,
    r = `#7d776c`,
    i = `#5a554c`,
    a = `#b01a2a`,
    o = [0, 1, 0, -1][t];
  (N(e, 6 + o, 17, i, 2, 5),
    N(e, 10 - o, 17, i, 2, 5),
    N(e, 5 + o, 21, n, 3, 1),
    N(e, 9 - o, 21, n, 3, 1));
  for (let r = 8; r <= 17; r++) {
    let i = Math.floor((17 - r) / 3),
      a = r < 11 ? 6 : 8;
    for (let t = 0; t < a; t++) N(e, 4 + i + t, r, t < 2 ? `#3d3436` : n);
    r > 14 && (r + t) % 2 == 0 && N(e, 3 + i, r, n);
  }
  (N(e, 9, 11, a, 1, 4),
    N(e, 9, 12, `#ffffff`, 1, 1),
    N(e, 10, 10 + (t % 2), i, 5, 2),
    N(e, 15, 10 + (t % 2), r, 1, 1),
    N(e, 15, 12 + (t % 2), r, 1, 1),
    N(e, 9, 4, r, 5, 5),
    N(e, 9, 4, i, 1, 5),
    N(e, 12, 6, `#1a0a0e`, 2, 2),
    N(e, 13, 6, a, 1, 1),
    N(e, 12, 6, `#ffe0e0`, 1, 1),
    N(e, 11, 8, `#1a0a0e`, 3, 1),
    N(e, 8, 3, n, 4, 2));
}
var yh = {
    recalled: { w: 18, h: 23, ax: 8, ay: 21, draw: vh },
    slime: { w: 22, h: 18, ax: 11, ay: 15, draw: ph },
    wisp: { w: 22, h: 22, ax: 11, ay: 19, draw: mh },
    wolf: { w: 30, h: 20, ax: 14, ay: 17, draw: hh },
    imp: { w: 20, h: 21, ax: 11, ay: 18, draw: gh },
    golem: { w: 38, h: 38, ax: 18, ay: 34, draw: _h },
  },
  bh = new Map();
function xh(e) {
  let t = bh.get(e);
  if (t) return t;
  let n = yh[e] ?? yh.slime,
    r = [];
  for (let e = 0; e < 4; e++) {
    let [t, i] = M(n.w + 2, n.h + 2);
    (i.translate(1, 1), n.draw(i, e), F(t), r.push(t));
  }
  let i = {
    frames: r,
    flipped: r.map(Ip),
    flash: r.map((e) => Fp(e)),
    ax: n.ax + 1,
    ay: n.ay + 1,
  };
  return (bh.set(e, i), i);
}
function Sh(e, t) {
  let [n, r] = M(34, 42),
    i = `#5a3a22`;
  (N(r, 15, 28, i, 5, 12),
    N(r, 18, 28, `#3d2716`, 2, 12),
    N(r, 13, 38, i, 9, 2));
  let a = t ? `#1d4a35` : `#2c6b2f`,
    o = t ? `#2b6a48` : `#3f8f3b`,
    s = t ? `#3f8a5c` : `#63b84f`,
    c = t ? `#62ad7c` : `#9ae06a`,
    l = e * 1.3;
  (P(r, 17, 20, 13, 10, a),
    P(r, 11 + l, 16, 8, 7, o),
    P(r, 22 - l, 15, 8, 7, o),
    P(r, 17, 10, 9, 7, o),
    P(r, 14, 9, 5, 4, s),
    P(r, 9 + l, 14, 4, 3, s),
    P(r, 13, 7, 2, 1.5, c));
  for (let t = 0; t < 14; t++)
    N(
      r,
      6 + ((t * 37 + e * 11) % 22),
      6 + ((t * 53 + e * 7) % 18),
      t % 2 ? s : a,
    );
  return (F(n, `#0c1a10`), { c: n, ax: 17, ay: 39 });
}
function Ch(e) {
  let [t, n] = M(28, 44);
  N(n, 12, 34, `#4a3020`, 4, 8);
  for (let t = 0; t < 4; t++) {
    let r = 4 + t * 8;
    for (let e = 0; e < 12; e++) {
      let i = 2 + e * (0.55 + t * 0.08);
      for (let t = Math.round(14 - i); t <= Math.round(14 + i); t++) {
        let a = t > 14 + i * 0.3 ? `#1d4a3a` : `#2c6a52`;
        N(n, t, r + e, a);
      }
    }
    for (let i = -4 - t * 2; i <= 2 + t; i++)
      N(n, 13 + i, r + 3 + ((i + e) % 2 == 0 ? 0 : 1), `#eaf6ff`);
  }
  return (
    N(n, 13, 2, `#eaf6ff`, 2, 3),
    F(t, `#0b1a1a`),
    { c: t, ax: 14, ay: 41 }
  );
}
function wh() {
  let [e, t] = M(26, 36),
    n = `#2d2426`;
  return (
    N(t, 11, 12, n, 4, 22),
    N(t, 11, 12, `#4a3d3f`, 1, 22),
    N(t, 6, 14, n, 6, 2),
    N(t, 4, 10, n, 2, 5),
    N(t, 15, 8, n, 2, 6),
    N(t, 16, 6, n, 5, 2),
    N(t, 20, 3, n, 2, 4),
    N(t, 9, 4, n, 2, 9),
    N(t, 7, 2, n, 2, 3),
    N(t, 9, 32, n, 8, 2),
    N(t, 13, 20, `#ff6a2a`, 1, 1),
    F(e, `#0d0809`),
    { c: e, ax: 13, ay: 33 }
  );
}
function Th(e, t) {
  let [n, r] = M(20, e ? 22 : 14);
  if (e) {
    let e = `#1e1627`;
    (N(r, 5, 6, e, 10, 14),
      N(r, 7, 2, e, 5, 6),
      N(r, 12, 8, `#130d1a`, 4, 12),
      N(r, 7, 3, `#5a3f7a`, 1, 8),
      N(r, 8, 3, `#8e6bb8`, 1, 3),
      N(r, 5, 15, `#ff5a1f`, 2, 1),
      N(r, 10 + t, 12, `#ff5a1f`, 1, 2));
  } else
    (P(r, 10, 8, 8, 5, `#6c6878`),
      P(r, 9, 7, 6, 3.5, `#8f8b9c`),
      P(r, 7, 6, 2.5, 1.5, `#b7b3c4`),
      N(r, 13, 10, `#56526a`, 3, 1),
      t > 1 && N(r, 4, 9, `#4f7a3a`, 3, 1));
  return (F(n, `#100c18`), { c: n, ax: 10, ay: e ? 20 : 12 });
}
function Eh(e) {
  let [t, n] = M(20, 16);
  return (
    P(n, 10, 9, 8, 6, `#2c6b2f`),
    P(n, 8, 7, 5, 4, `#3f8f3b`),
    P(n, 7, 6, 2, 1.5, `#7ccf5a`),
    e % 2 == 0 &&
      (N(n, 12, 8, `#e0417a`), N(n, 6, 11, `#e0417a`), N(n, 14, 11, `#e0417a`)),
    F(t, `#0c1a10`),
    { c: t, ax: 10, ay: 14 }
  );
}
function Dh() {
  let [e, t] = M(14, 12);
  return (
    N(t, 3, 6, `#d9d1c0`, 2, 4),
    P(t, 4, 5, 3.5, 2.2, `#35d3e8`),
    N(t, 3, 4, `#c8fbff`),
    N(t, 9, 7, `#d9d1c0`, 2, 3),
    P(t, 10, 6, 2.5, 1.8, `#26a9c9`),
    F(e, `#07161c`),
    { c: e, ax: 7, ay: 10 }
  );
}
function Oh(e) {
  let [t, n] = M(16, 38),
    r = `#8c8698`,
    i = `#5d586c`,
    a = `#b9b3c7`,
    o = e % 2 == 1,
    s = o ? 9 : 3;
  return (
    N(n, 2, 33, i, 12, 4),
    N(n, 2, 33, r, 12, 1),
    N(n, 4, s, r, 8, 30 - s + 3),
    N(n, 4, s, a, 2, 30 - s + 3),
    N(n, 10, s, i, 2, 30 - s + 3),
    o
      ? (N(n, 4, s - 2, r, 3, 2), N(n, 9, s - 1, r, 2, 1))
      : (N(n, 2, 1, r, 12, 3), N(n, 2, 1, a, 12, 1)),
    N(n, 7, 18, `#7ef9ff`, 2, 4),
    N(n, 6, 19, `#7ef9ff`, 4, 1),
    N(n, 5, 28, `#4f7a3a`, 3, 2),
    F(t, `#110d18`),
    { c: t, ax: 8, ay: 36 }
  );
}
function kh() {
  let [e, t] = M(30, 58);
  (N(t, 5, 50, `#5d586c`, 20, 6),
    N(t, 5, 50, `#8c8698`, 20, 2),
    N(t, 8, 46, `#6f6a7a`, 14, 4));
  for (let e = 2; e < 46; e++) {
    let n = e < 14 ? (e - 2) / 12 : 1 - (e - 14) / 50,
      r = Math.max(1, Math.round(7 * n));
    for (let n = 15 - r; n < 15 + r; n++) {
      let i =
        n < 15 - r / 3 ? `#8ef6ff` : n < 15 + r / 3 ? `#44c9f0` : `#2a7fc9`;
      N(t, n, e, i);
    }
  }
  for (let e = 8; e < 40; e += 3) N(t, 11, e, `#e6fdff`, 1, 2);
  N(t, 14, 20, `#ffffff`, 2, 6);
  for (let e = 0; e < 12; e++) {
    let n = Math.max(1, Math.round(2.5 * (1 - Math.abs(e - 5) / 7)));
    (N(t, 5 - n + 1, 34 + e, `#b58aff`, n * 2, 1),
      N(t, 25 - n, 32 + e, `#44c9f0`, n * 2, 1));
  }
  return (F(e, `#0b1030`), { c: e, ax: 15, ay: 54 });
}
function Ah() {
  let [e, t] = M(14, 18);
  return (
    N(t, 5, 8, `#5d586c`, 4, 8),
    N(t, 3, 15, `#5d586c`, 8, 2),
    N(t, 1, 5, `#8c8698`, 12, 3),
    N(t, 1, 5, `#b9b3c7`, 12, 1),
    N(t, 3, 3, `#ff9a2a`, 8, 2),
    N(t, 5, 1, `#ffe08a`, 4, 2),
    F(e, `#110d18`),
    { c: e, ax: 7, ay: 16 }
  );
}
function jh(e) {
  let [t, n] = M(56, 62),
    r = [
      [`#9c3b2e`, `#6e2419`, `#c2574a`],
      [`#3b5c9c`, `#243b6b`, `#5a7cc2`],
      [`#7a5a3a`, `#523a24`, `#9c7a52`],
      [`#4f6b3a`, `#324a24`, `#6f8f52`],
    ][e % 4],
    i = e % 2 == 0 ? `#d9c9a8` : `#cdbfa6`,
    a = `#5a3a22`;
  (N(n, 4, 30, i, 48, 27), N(n, 44, 30, I(i, -0.12), 8, 27));
  for (let e of [4, 20, 35, 51]) N(n, e, 30, a, 1, 27);
  (N(n, 4, 30, a, 48, 1),
    N(n, 4, 44, a, 48, 1),
    N(n, 3, 56, `#7c768a`, 50, 5),
    N(n, 3, 56, `#948ea4`, 50, 1));
  for (let e = 5; e < 52; e += 6) N(n, e, 58, `#5d586c`, 1, 3);
  (N(n, 24, 45, `#3d2716`, 8, 12),
    N(n, 25, 44, `#3d2716`, 6, 1),
    N(n, 25, 46, `#6b4424`, 6, 11),
    N(n, 28, 46, `#4a3020`, 1, 11),
    N(n, 30, 51, `#ffd166`));
  for (let e of [9, 39])
    (N(n, e, 34, a, 9, 8),
      N(n, e + 1, 35, `#ffd98a`, 7, 6),
      N(n, e + 1, 35, `#fff3c4`, 3, 2),
      N(n, e + 4, 35, a, 1, 6),
      N(n, e + 1, 37, a, 7, 1),
      N(n, e - 1, 42, `#6b4424`, 11, 1),
      N(n, e, 43, `#e0417a`, 2, 1),
      N(n, e + 4, 43, `#ffd166`, 2, 1),
      N(n, e + 7, 43, `#b58aff`, 2, 1));
  (N(n, 38, 2, `#7c768a`, 6, 14), N(n, 37, 1, `#948ea4`, 8, 2));
  for (let e = 6; e <= 31; e++) {
    let t = (e - 6) / 25,
      i = Math.round(12 - t * 12),
      a = Math.round(43 + t * 12);
    for (let t = i; t <= a; t++) {
      let o = r[0];
      (t > i + (a - i) * 0.68 && (o = r[1]),
        (e - 6) % 4 == 0
          ? (o = I(o, -0.2))
          : (t + (Math.floor((e - 6) / 4) % 2) * 3) % 6 == 0 &&
            (o = I(o, -0.1)),
        N(n, t, e, o));
    }
  }
  return (
    N(n, 12, 6, r[2], 32, 1),
    N(n, 0, 31, I(r[1], -0.2), 56, 1),
    F(t, `#140d0a`),
    { c: t, ax: 28, ay: 59 }
  );
}
function Mh() {
  let [e, t] = M(12, 32);
  return (
    N(t, 5, 9, `#2b2633`, 2, 20),
    N(t, 5, 9, `#4a4458`, 1, 20),
    N(t, 3, 28, `#2b2633`, 6, 2),
    N(t, 3, 3, `#2b2633`, 6, 7),
    N(t, 4, 4, `#ffe08a`, 4, 5),
    N(t, 5, 5, `#ffffff`, 2, 2),
    N(t, 2, 2, `#3b3548`, 8, 1),
    N(t, 5, 0, `#3b3548`, 2, 2),
    F(e, `#0c0a12`),
    { c: e, ax: 6, ay: 29 }
  );
}
var Nh = null;
function Ph() {
  return (
    Nh ||
    ((Nh = {
      tree: [0, 1, 2, 3].map((e) => Sh(e, !1)),
      darktree: [0, 1, 2, 3].map((e) => Sh(e, !0)),
      pine: [0, 1, 2].map((e) => Ch(e)),
      deadtree: [wh()],
      rock: [0, 1, 2].map((e) => Th(!1, e)),
      obsidian: [0, 1, 2].map((e) => Th(!0, e)),
      bush: [0, 1].map((e) => Eh(e)),
      mushroom: [Dh()],
      pillar: [0, 1].map((e) => Oh(e)),
      crystal: [kh()],
      brazier: [Ah()],
      house: [0, 1, 2, 3].map((e) => jh(e)),
      lamp: [Mh()],
    }),
    Nh)
  );
}
function Fh(e, t) {
  return Ih(e, t).toDataURL();
}
