// index-BTsv3a2s 66 — math
// Lines 39409-39722 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Bee(e, t, n) {
  return wy(20, 30, 10, 27, (r) => {
    let i =
      e === `folly`
        ? [`#cfc6b8`, `#e6dfd3`, `#9a8f80`]
        : e === `rime`
          ? [`#9fc8dc`, `#dff6ff`, `#6f9db8`]
          : [`#6f6a7a`, `#9a95a6`, `#45404f`];
    (N(r, 2, 22, i[0], 16, 4),
      N(r, 2, 22, i[1], 16, 1),
      N(r, 4, 26, i[2], 12, 2),
      N(r, 5, 23, t ? hy : `#3a3f4a`, 2, 1),
      N(r, 13, 23, t ? hy : `#3a3f4a`, 2, 1));
    let a = t ? [0, -1, -1, 0][n % 4] : 0,
      o = t
        ? [`#2a8fb0`, hy, `#dffcff`, `#ffffff`]
        : [`#2a2f3a`, `#3e4452`, `#555c6c`, `#6a7282`];
    (by(r, 5, 21 + a, 15, 21 + a, 10, 2 + a, o[0]),
      by(r, 7, 21 + a, 12, 21 + a, 9.5, 5 + a, o[1]),
      by(r, 8, 16 + a, 10, 16 + a, 9, 8 + a, o[2]),
      N(r, 9, 9 + a, o[3]),
      t || (xy(r, 8, 12, 11, 17, `#1a1d24`), xy(r, 11, 17, 9, 20, `#1a1d24`)));
  });
}
function Vee(e, t) {
  return wy(14, 22, 7, 20, (n) => {
    let r = vy[e];
    (N(n, 2, 16, `#5d586c`, 10, 3), N(n, 2, 16, `#8c8698`, 10, 1));
    let i = [0, -1, -2, -1][t % 4];
    (by(n, 3, 9 + i, 11, 9 + i, 7, 1 + i, r[1]),
      by(n, 3, 9 + i, 11, 9 + i, 7, 14 + i, r[0]),
      N(n, 6, 5 + i, r[2], 2, 4),
      N(n, 6, 5 + i, r[3]));
  });
}
function Ty(e, t, n) {
  return wy(18, 40, 9, 37, (r) => {
    let i = vy[e],
      a = `#e0b64a`,
      o = `#9a7a2a`;
    (N(r, 3, 33, `#5a4668`, 12, 4),
      N(r, 3, 33, `#7a6688`, 12, 1),
      N(r, 8, 16, o, 2, 17),
      N(r, 8, 16, a, 1, 17),
      N(r, 3, 3, o, 12, 2),
      N(r, 3, 15, o, 12, 2));
    for (let e of [3, 8, 13]) N(r, e, 5, a, 2, 10);
    if ((N(r, 7, 0, a, 4, 3), t)) {
      let e = [0, 1, 2, 1][n % 4];
      (P(r, 9, 10, 3.4 + e * 0.2, 4, i[1]),
        P(r, 9, 10, 2, 2.6, i[2]),
        N(r, 8, 9 - (e > 1), i[3], 2, 2));
    } else (N(r, 6, 8, `#2a2233`, 6, 5), xy(r, 5, 6, 12, 14, `#1a1422`));
  });
}
function Hee(e, t) {
  switch (e) {
    case `cistern`:
      return wy(20, 18, 10, 17, (e) => {
        (N(e, 2, 2, `#8a6a3a`, 16, 12), N(e, 3, 3, `#c49a52`, 14, 10));
        for (let t = 0; t < 4; t++)
          N(e, 5, 5 + t * 2, `#6a4a22`, 10 - (t % 2) * 3, 1);
        N(e, 8, 14, `#5d586c`, 4, 3);
      });
    case `barrow`:
      return wy(20, 26, 10, 24, (e) => {
        (N(e, 4, 2, `#77604a`, 12, 22),
          N(e, 4, 2, `#8a735c`, 2, 22),
          N(e, 14, 2, `#5a4636`, 2, 22));
        for (let t = 0; t < 6; t++)
          N(e, 7, 5 + t * 3, `#4a3a2c`, 6 - (t % 3), 1);
        (N(e, 16, 19, `#efe6cf`, 2, 4),
          N(e, 16, 17 + (t % 2), `#ffd166`, 2, 2));
      });
    case `rime`:
      return wy(24, 22, 12, 21, (e) => {
        (N(e, 2, 2, `#6b4424`, 2, 18),
          N(e, 20, 2, `#6b4424`, 2, 18),
          N(e, 2, 2, `#9a6a3a`, 20, 2));
        for (let t = 4; t < 20; t += 3) xy(e, t, 4, t + 2, 16, `#dff6ff`);
        for (let t = 6; t < 16; t += 3) xy(e, 4, t, 20, t + 1, `#9fd0ea`);
        N(e, 9, 16, `#ffffff`, 2, 3);
      });
    case `ember`:
      return wy(20, 18, 10, 17, (e) => {
        (P(e, 10, 11, 7, 5, `#6b3a22`),
          P(e, 10, 10, 6, 3.5, `#8a4a2a`),
          N(e, 7, 4, `#efe6cf`, 6, 6));
        for (let t = 0; t < 3; t++) N(e, 8, 5 + t * 2, `#8a7f6a`, 4, 1);
        N(e, 3, 13, `#ff7a1a`, 3, 1);
      });
    case `folly`:
      return wy(22, 26, 11, 24, (e) => {
        (N(e, 2, 12, `#6b4630`, 18, 3),
          N(e, 2, 12, `#8a5e40`, 18, 1),
          N(e, 3, 15, `#4a2e20`, 2, 9),
          N(e, 17, 15, `#4a2e20`, 2, 9),
          N(e, 4, 8, `#2a2a30`, 8, 5),
          N(e, 5, 9, `#dcdcdc`, 3, 1),
          N(e, 5, 11, `#dcdcdc`, 5, 1),
          N(e, 14, 5, `#9a6a3a`, 3, 7),
          N(e, 14, 3, `#5b3fb8`, 3, 2),
          N(e, 15, 1, `#5b3fb8`, 1, 2),
          N(e, 15, 6, `#fff36b`));
      });
  }
}
function Uee(e, t) {
  return wy(18, 16, 9, 15, (n) => {
    let r =
      e === `folly`
        ? [`#7a1d2a`, `#e0b64a`]
        : e === `rime`
          ? [`#6b4424`, `#dff6ff`]
          : [`#6b4424`, `#9a95a6`];
    (N(n, 2, 5, r[0], 14, 9),
      N(n, 2, 5, I(r[0], 0.25), 14, 2),
      N(n, 2, 9, r[1], 14, 1),
      N(n, 8, 8, r[1], 2, 3),
      t % 4 == 2 && N(n, 12, 3, `#ffffff`));
  });
}
function Wee(e, t, n = !1) {
  return wy(22, 30, 11, 28, (r) => {
    let i = vy[e];
    if ((N(r, 4, 23, `#45404f`, 14, 4), N(r, 4, 23, `#6f6a7a`, 14, 1), n)) {
      (by(r, 5, 23, 10, 23, 7, 14, `#3a3f4a`),
        by(r, 11, 23, 17, 23, 15, 12, `#3a3f4a`));
      return;
    }
    let a = [0, -1, -1, 0][t % 4];
    (P(r, 11, 14 + a, 6, 8, i[0]),
      P(r, 11, 13 + a, 4.5, 6.5, i[1]),
      N(r, 8, 10 + a, i[3], 6, 1),
      N(r, 9, 9 + a, vy.ember[1]),
      N(r, 10, 9 + a, vy.rime[1]),
      N(r, 12, 9 + a, vy.storm[2]),
      N(r, 13, 9 + a, vy.void[2]),
      N(r, 11, 12 + a, i[3], 1, 6),
      N(r, 9, 15 + a, i[2], 5, 1),
      t % 4 == 1 && N(r, 6, 7 + a, i[3]),
      t % 4 == 3 && N(r, 16, 17 + a, i[3]));
  });
}
function Gee(e, t = 0) {
  return wy(30, 26, 15, 24, (n) => {
    (N(n, 2, 18, `#5a4668`, 26, 6),
      N(n, 2, 18, `#7a6688`, 26, 1),
      P(n, 15, 11, 11, 9, `#2a1740`),
      P(n, 15, 11, 9, 7, `#1a0f28`),
      Co.forEach((e, r) => {
        let [i, a] = [
            [9, 6],
            [21, 6],
            [9, 14],
            [21, 14],
          ][r],
          o = vy[e],
          s = r < t;
        (P(n, i, a, 2.6, 2.4, s ? o[1] : o[0]), N(n, i, a, s ? o[3] : o[1]));
      }),
      N(n, 14, 5, `#e0b64a`, 2, 13),
      N(n, 10, 10, `#e0b64a`, 10, 2),
      e % 4 == 2 && N(n, 15, 11, `#ffffff`));
  });
}
function Kee(e) {
  return wy(22, 24, 11, 22, (t) => {
    (N(t, 9, 12, `#45404f`, 4, 10),
      N(t, 3, 20, `#5d586c`, 16, 3),
      P(t, 11, 10, 8, 8, `#8a5a2a`),
      P(t, 11, 10, 6, 6, `#2d3934`));
    let n = (e % 4) * (Math.PI / 8);
    for (let e = 0; e < 4; e++) {
      let r = n + (e * Math.PI) / 4;
      xy(
        t,
        11 - Math.cos(r) * 7,
        10 - Math.sin(r) * 7,
        11 + Math.cos(r) * 7,
        10 + Math.sin(r) * 7,
        `#c49a52`,
      );
    }
    (P(t, 11, 10, 1.6, 1.6, `#c49a52`), N(t, 5, 4, hy, 2, 1));
  });
}
function Ey(e, t = {}) {
  let n = t.theme ?? `cistern`,
    r = t.frame ?? 0,
    i = `prop:${e}:${n}:${t.tone}:${t.lit}:${r}`,
    a = Dy.get(i);
  if (a) return a;
  let o;
  switch (e) {
    case `sconce`:
      o = zee(n, t.lit ?? !0, r);
      break;
    case `waystone`:
      o = Bee(n, t.lit ?? !1, r);
      break;
    case `toneshard`:
      o = Vee(t.tone ?? `storm`, r);
      break;
    case `pylon`:
      o = Ty(t.tone ?? `ember`, t.lit ?? !0, r);
      break;
    case `lore`:
      o = Hee(n, r);
      break;
    case `cache`:
      o = Uee(n, r);
      break;
    case `wardnote`:
      o = Wee(t.tone ?? `storm`, r, t.lit === !1);
      break;
    case `seal`:
      o = Gee(r, 0);
      break;
    default:
      if (ry[e]) return ay(e, r);
      o = wy(4, 4, 2, 3, (e) => N(e, 1, 1, `#ff00ff`, 2, 2));
  }
  return (Dy.set(i, o), o);
}
var Dy = new Map();
function qee(e) {
  return wy(58, 48, 29, 45, (t) => {
    (P(t, 29, 43, 20, 3.5, `#2f9c78`),
      P(t, 29, 43, 12, 2, `#7fe0b0`),
      N(t, 12, 18, `#687a70`, 30, 24),
      N(t, 12, 18, `#8a9a90`, 30, 2));
    for (let e = 22; e < 42; e += 5) N(t, 12, e, `#4d5d55`, 30, 1);
    for (let e = 22, n = 0; e < 42; e += 5, n++)
      for (let r = 12 + (n % 2) * 5; r < 42; r += 10)
        N(t, r, e + 1, `#4d5d55`, 1, 4);
    (by(t, 8, 19, 46, 19, 27, 4, `#3a4652`),
      by(t, 12, 19, 42, 19, 27, 7, `#4a5866`));
    for (let e = 0; e < 5; e++)
      N(t, 14 + e * 6, 16 - (e === 2 ? 2 : 0), `#2a333c`, 4, 1);
    (N(t, 21, 28, `#101815`, 12, 14),
      P(t, 27, 28, 6, 4, `#101815`),
      N(t, 25, 22, hy, 4, 1),
      N(t, 26, 21, hy, 2, 3),
      N(t, 22, 40, `#2f9c78`, 10, 2));
    let n = Kee(0).c;
    (t.drawImage(n, 38, 18),
      P(t, 50, 42, 5, 1.5, `#1f6e55`),
      e % 4 == 1 && N(t, 27, 36, `#7fe0b0`));
  });
}
function Jee(e) {
  return wy(66, 42, 33, 38, (t) => {
    (P(t, 33, 30, 31, 11, `#3f5a2f`), P(t, 33, 27, 28, 9, `#4f7a3a`));
    for (let e = 0; e < 16; e++)
      N(t, 6 + e * 3.4, 20 + (e % 3), `#63944a`, 2, 1);
    (N(t, 24, 22, `#77604a`, 18, 16),
      N(t, 22, 20, `#8a735c`, 22, 4),
      N(t, 27, 26, `#0a0706`, 12, 12));
    for (let e = 0; e < 4; e++) N(t, 25 + e * 4, 21, `#5a4636`, 3, 1);
    (xy(t, 44, 4, 36, 26, `#4a2e18`),
      xy(t, 45, 4, 37, 26, `#5a3a22`),
      xy(t, 38, 20, 30, 37, `#4a2e18`),
      P(t, 50, 8, 10, 7, `#1d4a35`),
      P(t, 47, 6, 6, 4, `#2b6a48`),
      N(t, 46, 12, `#4a2e18`, 3, 8),
      N(t, 22, 34, `#efe6cf`, 2, 3),
      N(t, 22, 32 + (e % 2), `#ffd166`, 2, 2),
      e % 4 == 2 && (N(t, 31, 30, _y.core), N(t, 35, 30, _y.core)));
  });
}
function Yee(e) {
  return wy(64, 50, 32, 46, (t) => {
    let n = [`#3d6f93`, `#5f95b8`, `#7fb4d4`, `#9fd0ea`];
    for (let e = 0; e < 64; e++) {
      let r =
        10 +
        Math.round(
          4 * Math.sin(e * 0.21) +
            3 * Math.sin(e * 0.53 + 1) +
            (e < 6 || e > 57 ? 10 : 0),
        );
      for (let i = r; i < 44; i++) {
        let r = Math.floor((e + Math.floor(i / 6) * 3) / 5) % 4;
        N(t, e, i, n[r]);
      }
      (N(t, e, r - 2, `#e8f8ff`, 1, 3),
        e % 7 == 3 && N(t, e, r + 1, `#dff6ff`, 1, 2 + (e % 3)));
    }
    (P(t, 32, 34, 12, 12, `#0d1a2a`),
      N(t, 20, 34, `#0d1a2a`, 24, 11),
      P(t, 32, 36, 8, 8, `#08111c`));
    for (let e = 0; e < 7; e++)
      by(
        t,
        21 + e * 3.4,
        23 + (e % 2),
        24 + e * 3.4,
        23 + (e % 2),
        22.5 + e * 3.4,
        27 + (e % 3) * 2,
        `#e8f8ff`,
      );
    for (let e = 17; e < 25; e += 2) xy(t, e, 27, e + 1, 43, `#b9dcec`);
    for (let e = 30; e < 43; e += 3) xy(t, 17, e, 25, e + 1, `#8fbcd3`);
    (P(t, 32, 46, 30, 3.5, `#e8f8ff`),
      N(t, 50, 32, `#6b4424`, 1, 12),
      N(t, 51, 32 + (e % 2), `#b3261e`, 3, 1));
    let r = 36 - (e % 4);
    (P(t, 34, r, 2.6, 2.6, `#4aa6ff`),
      P(t, 34, r, 1.5, 1.5, `#aee6ff`),
      N(t, 34, r, `#ffffff`));
  });
}
