// assets__index-BTsv3a2s 68 — draw
// Lines 40040-40385 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function cte(e, t) {
  let n = [0, -1, -1, 0][t],
    r = `#c9d8e0`,
    i = `#173a78`;
  for (let t = 18; t <= 36; t++) {
    let r = 3.5 + (t - 18) * 0.42;
    for (let a = Math.round(12 - r); a <= Math.round(12 + r); a++) {
      let o = t > 28 ? `#9fd0ea` : `#2f6fcf`;
      (t > 28 && (a + t) % 7 == 0 && (o = `#dff6ff`),
        a < 12 - r + 1.5 && (o = t > 28 ? `#5f95b8` : i),
        N(e, a, t + (t > 30 ? 0 : n), o));
    }
  }
  for (let [t, n] of [
    [8, 32],
    [15, 33],
  ])
    (N(e, t, n, `#5f95b8`, 3, 2),
      N(e, t, n, `#173a78`),
      N(e, t + 2, n, `#173a78`));
  (N(e, 5, 17 + n, i, 3, 7),
    N(e, 17, 16 + n, i, 3, 6),
    N(e, 19, 15 + n - (t === 2 ? 3 : 0), r, 2, 2),
    N(e, 4, 23 + n, r, 2, 1));
  for (let r = 0; r < 6; r++)
    N(e, 8 + r, 3 + n - (r % 3) - (t % 2), `#e8f4f8`, 1, 6 + (r % 2));
  (N(e, 9, 7 + n, r, 7, 8),
    N(e, 9, 7 + n, `#9fb2c0`, 1, 8),
    N(e, 10, 10 + n, `#5f7a8a`, 2, 1),
    N(e, 13, 10 + n, `#5f7a8a`, 2, 1),
    N(e, 12, 12 + n, `#1a2a3a`, 2, 2 + (t % 2)),
    N(e, 11, 15 + n, r, 3, 2));
  for (let r = 0; r < 3; r++) {
    let i = ((t + r * 1.33) / 4) * Math.PI * 2,
      a = 12 + Math.cos(i) * 7,
      o = 5 + n + Math.sin(i) * 2;
    (P(e, a, o, 1.8, 1.8, `#4aa6ff`), N(e, a, o, `#ffffff`));
  }
  N(e, 12, 15 + n, _y.red);
}
function lte(e, t) {
  let n = `#8a2a18`,
    r = `#5a1a0c`,
    i = [0, 1, 0, -1][t];
  (N(e, 7 + i, 17, r, 2, 4),
    N(e, 11 - i, 17, r, 2, 4),
    P(e, 10, 13, 5, 5, n),
    N(e, 5, 9, `#3d1410`, 2, 3),
    P(e, 13, 7, 3.4, 3, n),
    N(e, 11, 3, `#bfae8a`, 1, 2),
    N(e, 15, 4, `#bfae8a`, 1, 2),
    N(e, 14, 6, `#ffb238`, 2, 1),
    N(e, 13, 9, `#2a0b06`, 3, 1),
    N(e, 12, 10, `#e8e0cc`),
    N(e, 1, 9, `#6b4424`, 20, 1));
  for (let n of [0, 17])
    (N(e, n, 10, `#45404f`, 4, 5),
      N(e, n, 10, t % 2 ? `#ff7a1a` : `#c2361f`, 4, 1));
}
function ute(e, t) {
  (P(e, 9, 11, 8.5, 3, `#3a2c2e`), P(e, 9, 10, 7, 2, `#1f191b`));
  let n = [`#c2361f`, `#ff7a1a`, `#ffb238`, `#ff7a1a`][t];
  for (let [t, r] of [
    [5, 7],
    [9, 6],
    [13, 7],
    [9, 9],
  ])
    (P(e, t, r, 2.4, 3, `#2a1f24`), N(e, t - 1, r - 1, n, 1, 2), N(e, t, r, n));
  t === 2 && xy(e, 8, 4, 10, 7, `#ffe08a`);
}
function dte(e, t) {
  let n = [0, 1, 0, -1][t];
  (N(e, 7 + n, 22, `#3a2e28`, 2, 4), N(e, 11 - n, 22, `#3a2e28`, 2, 4));
  for (let t = 10; t <= 23; t++) {
    let n = 3 + (t - 10) * 0.28;
    for (let r = Math.round(10 - n); r <= Math.round(10 + n); r++)
      (t > 20 && (r * 3 + t) % 4 == 0) ||
        N(
          e,
          r,
          t,
          r < 10 - n + 1.5
            ? `#3a1612`
            : (r + t) % 5 == 0
              ? `#1f0c0a`
              : `#5a241c`,
        );
  }
  (N(e, 9, 13, _y.red, 2, 2),
    N(e, 10, 13, _y.core),
    N(e, 8, 3, `#5a4a44`, 6, 7),
    N(e, 8, 3, `#3a2e2a`, 6, 2),
    N(e, 11, 6, _y.core),
    N(e, 12, 5, _y.red),
    N(e, 10, 8, `#1a0a0e`, 3, 1),
    N(e, 16, 6, `#3d2716`, 1, 18),
    P(e, 16.5, 5, 2.4, 2.4, `#2a1a14`),
    xy(e, 15, 4, 18, 6, `#ff7a1a`),
    t === 2 &&
      (N(e, 19, 2, `#ff7a1a`, 2, 2),
      N(e, 21, 1, _y.red),
      N(e, 18, 0, `#ffe08a`)));
}
function fte(e, t) {
  let n = `#2a1a1c`,
    r = [`#ff7a1a`, `#ffb238`, `#ff7a1a`, `#c2361f`][t],
    i = t === 2;
  (N(e, 14, 38, n, 6, 5),
    N(e, 32, 38, n, 6, 5),
    P(e, 26, 26, 21, 15, n),
    P(e, 23, 22, 15, 9, `#3e2628`),
    P(e, 27, 29, 10, 8, i ? `#ffe08a` : _y.black));
  for (let t = 0; t < 4; t++)
    P(e, 22 + t * 3.5, 30 + (t % 2) * 2, 1.8, 2.2, i ? `#ff7a1a` : `#3a1a14`);
  if (!i) for (let t = 0; t < 5; t++) N(e, 19 + t * 4, 21, `#6f6a7a`, 1, 16);
  (N(e, 17, 21, `#8a8f99`, 20, 1), N(e, 17, 37, `#8a8f99`, 20, 1));
  for (let n = 0; n < 6; n++)
    N(e, 16 + n * 4, 18 - ((n + t) % 3), n % 2 ? _y.red : _y.black, 2, 3);
  (N(e, 27, 16, _y.core),
    by(e, 8, 14, 14, 10, 12, 18, `#3d1410`),
    by(e, 38, 10, 44, 14, 40, 18, `#3d1410`),
    P(e, 40, 12, 7, 6, n),
    N(e, 36, 4, `#bfae8a`, 2, 4),
    N(e, 44, 5, `#bfae8a`, 2, 4),
    N(e, 42, 10, r, 3, 2),
    N(e, 39, 15, `#e8e0cc`, 6, 1),
    N(e, 40, 16, `#2a0b06`, 4, 1));
  for (let [t, n] of [
    [10, 28],
    [12, 30],
    [40, 32],
    [42, 30],
    [30, 12],
  ])
    N(e, t, n, r, 2, 1);
}
function jy(e) {
  return (t, n) => {
    let r = vy[e],
      i = (n / 4) * Math.PI * 2;
    (P(t, 6, 6, 3.4, 3.4, r[1]), P(t, 6, 6, 2, 2, r[2]), N(t, 6, 6, r[3]));
    for (let e = 0; e < 3; e++) {
      let n = i + (e * Math.PI * 2) / 3;
      N(t, 6 + Math.cos(n) * 5, 6 + Math.sin(n) * 5, r[2]);
    }
  };
}
function pte(e, t) {
  let n = `#8c8698`,
    r = `#b9b3c7`,
    i = `#5d586c`,
    a = [0, -1, -1, 0][t];
  (N(e, 12, 44 - a, i, 3, 2),
    N(e, 24, 45 + a, i, 2, 2),
    N(e, 10, 6 + a, n, 20, 34),
    N(e, 10, 6 + a, r, 3, 34),
    N(e, 27, 6 + a, i, 3, 34),
    N(e, 13, 2 + a, n, 14, 4),
    N(e, 17, 0 + a, n, 6, 2),
    P(e, 20, 10 + a, 3.4, 3.4, `#e0b64a`),
    N(e, 19, 9 + a, `#7a1d2a`, 2, 2));
  for (let [t, n, r, i] of [
    [13, 16, 14, 1],
    [13, 16, 1, 6],
    [26, 16, 1, 10],
    [16, 19, 8, 1],
    [16, 19, 1, 8],
    [19, 22, 7, 1],
    [13, 26, 10, 1],
    [22, 26, 1, 8],
    [13, 30, 6, 1],
    [16, 33, 10, 1],
  ])
    N(e, t, n + a, _y.dark, r, i);
  (P(e, 20, 24 + a, 2.6, 2.6, _y.black),
    N(e, 19, 25 + a, _y.black, 3, 5),
    N(e, 19, 24 + a, t === 2 ? _y.core : _y.red, 3, 2));
  let o = [0, 1, 1, 0][t];
  for (let t of [1, 32])
    (N(e, t, 18 + o, n, 7, 8),
      N(e, t, 18 + o, r, 7, 1),
      N(e, t + 3, 21 + o, t < 10 ? hy : _y.red, 1, 3));
}
function mte(e, t) {
  let n = `#8a8296`,
    r = `#5a5468`,
    i = `#b0a8bc`,
    a = t % 2;
  (N(e, 13, 36 - a, r, 6, 8 + a),
    N(e, 25, 36 - (1 - a), r, 6, 8 + (1 - a)),
    N(e, 10, 14, n, 24, 23),
    N(e, 10, 14, i, 24, 2),
    N(e, 30, 16, r, 4, 21),
    P(e, 22, 24, 4, 4, `#3a3448`),
    P(e, 22, 24, 2.4, 2.4, t === 2 ? `#ffffff` : hy));
  for (let t = 0; t < 4; t++) N(e, 12, 18 + t * 3, `#f0f0f0`, 3, 1);
  ([
    [2, 12, `ember`],
    [36, 12, `rime`],
    [2, 26, `storm`],
    [36, 26, `void`],
  ].forEach(([i, a, o], s) => {
    let c = (t + s) % 4 == 0 ? -2 : 0;
    (N(e, i, a + c, r, 7, 5), N(e, i, a + c, n, 7, 2));
    let l = i < 10 ? i - 1 : i + 7;
    (P(e, l + 1, a + 2 + c, 2.2, 2.2, vy[o][1]),
      N(e, l + 1, a + 2 + c, vy[o][3]));
  }),
    N(e, 15, 4, n, 13, 10),
    N(e, 15, 4, i, 13, 2),
    N(e, 18, 8, `#2a2436`, 7, 2),
    N(e, 19, 8, hy, 2, 1),
    N(e, 23, 8, hy, 2, 1));
}
function My(e) {
  return (t, n) => {
    t.drawImage(Ty(e, !0, n).c, 0, 0);
  };
}
function hte(e, t) {
  (e.save(), e.translate(0, 8), Ig.rimebear.draw(e, t), e.restore());
  for (let [t, n] of [
    [12, 9],
    [16, 13],
    [20, 10],
    [24, 7],
  ])
    (by(e, t - 2, 12, t + 2, 12, t, 12 - n, `#8ef6ff`),
      N(e, t, 12 - n + 2, `#ffffff`, 1, 3));
}
var gte = {
    leech: { w: 22, h: 12, ax: 11, ay: 10, draw: Qee },
    lockwork: { w: 26, h: 28, ax: 12, ay: 27, draw: (e, t) => ky(e, t) },
    sluicewarden: {
      w: 32,
      h: 35,
      ax: 15,
      ay: 34,
      draw: (e, t) => ky(e, t, !0),
    },
    brimling_ember: { w: 14, h: 13, ax: 7, ay: 12, draw: Ay(`ember`) },
    brimling_rime: { w: 14, h: 13, ax: 7, ay: 12, draw: Ay(`rime`) },
    brimling_storm: { w: 14, h: 13, ax: 7, ay: 12, draw: Ay(`storm`) },
    brimling_void: { w: 14, h: 13, ax: 7, ay: 12, draw: Ay(`void`) },
    motherbrim: { w: 60, h: 46, ax: 30, ay: 45, draw: $ee },
    tallowlight: { w: 15, h: 20, ax: 7, ay: 18, draw: ete },
    pikehusk: { w: 28, h: 26, ax: 10, ay: 25, draw: nte },
    marrow: { w: 42, h: 25, ax: 20, ay: 24, draw: rte },
    fenn: { w: 27, h: 33, ax: 13, ay: 32, draw: ite },
    standard: { w: 18, h: 41, ax: 5, ay: 40, draw: ate },
    glaciermite: { w: 13, h: 10, ax: 6, ay: 9, draw: ote },
    frostmaw: { w: 36, h: 17, ax: 18, ay: 15, draw: ste },
    rimesow: { w: 36, h: 36, ax: 17, ay: 34, draw: hte },
    ilse: { w: 25, h: 38, ax: 12, ay: 37, draw: cte },
    slagtender: { w: 22, h: 22, ax: 10, ay: 21, draw: lte },
    clutch: { w: 19, h: 15, ax: 9, ay: 14, draw: ute },
    orenvey: { w: 23, h: 27, ax: 10, ay: 26, draw: dte },
    kilnmother: { w: 50, h: 44, ax: 26, ay: 43, draw: fte },
    tonemote_ember: { w: 13, h: 13, ax: 6, ay: 12, draw: jy(`ember`) },
    tonemote_rime: { w: 13, h: 13, ax: 6, ay: 12, draw: jy(`rime`) },
    tonemote_storm: { w: 13, h: 13, ax: 6, ay: 12, draw: jy(`storm`) },
    tonemote_void: { w: 13, h: 13, ax: 6, ay: 12, draw: jy(`void`) },
    wardenlock: { w: 40, h: 48, ax: 20, ay: 46, draw: pte },
    tutor: { w: 46, h: 45, ax: 22, ay: 44, draw: mte },
    pylon_ember: { w: 18, h: 40, ax: 9, ay: 37, draw: My(`ember`) },
    pylon_rime: { w: 18, h: 40, ax: 9, ay: 37, draw: My(`rime`) },
    pylon_storm: { w: 18, h: 40, ax: 9, ay: 37, draw: My(`storm`) },
    pylon_void: { w: 18, h: 40, ax: 9, ay: 37, draw: My(`void`) },
  },
  Ny = new Map();
function Py(e) {
  let t = Ny.get(e);
  if (t) return t;
  let n = gte[e];
  if (!n) return null;
  let r = [];
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
  return (Ny.set(e, i), i);
}
function Fy(e, t = 0.5) {
  return Cy(`woven-strike:${e}:${t.toFixed(2)}`, 64, 32, (n) => {
    ((n.fillStyle = `rgba(255,255,255,${0.12 + t * 0.25})`),
      n.beginPath(),
      n.ellipse(32, 16, 30 * t, 15 * t, 0, 0, Math.PI * 2),
      n.fill());
    for (let t = 0; t < 64; t++) {
      let r = (t / 64) * Math.PI * 2 + e * 0.08;
      N(
        n,
        32 + Math.cos(r) * 30,
        16 + Math.sin(r) * 15,
        vy[Co[Math.floor(t / 16)]][2],
      );
    }
  });
}
function Iy(e) {
  return Cy(`rise:${e}`, 24, 12, (t) => {
    let n = 4 + e * 4;
    (P(t, 12, 6, n / 2 + 1, 2 + e * 0.5, `rgba(58,10,24,0.7)`),
      xy(t, 12 - n / 2, 6, 12 + n / 2, 6, _y.red),
      e > 1 && xy(t, 12 - n / 3, 5, 12 + n / 4, 7, _y.hot),
      e === 3 && N(t, 11, 5, _y.core, 2, 1));
  });
}
function Ly(e) {
  return Cy(`crack:${e}`, 16, 16, (t) => {
    let n = [
      [8, 8, 3, 3],
      [8, 8, 14, 5],
      [8, 8, 6, 14],
      [3, 3, 1, 8],
      [14, 5, 15, 12],
      [6, 14, 12, 15],
    ];
    for (let r = 0; r <= Math.min(n.length - 1, e * 2 + 1); r++)
      xy(t, ...n[r], `#ffffff`);
    e === 3 && ((t.fillStyle = `rgba(13,26,42,0.7)`), t.fillRect(5, 5, 7, 7));
  });
}
function Ry(e, t = 0) {
  return Cy(`embericon:${e}:${t}`, 14, 16, (n, r) => {
    let i = e
        ? [`#2a8fb0`, hy, `#ffd166`, `#ffffff`]
        : [`#2a2233`, `#3a3348`, `#4a4458`, `#5a5468`],
      a = e ? [0, 1, 0, -1][t % 4] : 0;
    (P(n, 7, 10, 5, 5, i[0]),
      by(n, 2, 10, 12, 10, 7 + a * 0.5, 0, i[0]),
      P(n, 7, 11, 3.4, 3.4, i[1]),
      by(n, 4, 11, 10, 11, 7, 3, i[1]),
      P(n, 7, 12, 1.6, 1.8, i[2]),
      N(n, 7, 12, i[3]),
      F(r));
  });
}
