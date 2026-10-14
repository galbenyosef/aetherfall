// index-BTsv3a2s 52 — math
// Lines 34327-34616 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var qg = {
  baker: { base: () => Tg(`baker`), opts: {} },
  sweeper: { base: () => Tg(`sweeper`), opts: {} },
  crier: {
    base: () => Tg(`crier`),
    opts: { keep: [`#c9a64a`, `#8a6f2e`, `#fff3c4`] },
  },
  gilded: {
    base: () => Jh(`watchman`),
    opts: {
      recolor: {
        "#2a3f6b": `#5a1a2a`,
        "#1a2848": `#3a0f1c`,
        "#44c9f0": `#e0b64a`,
      },
      keep: [`#e0b64a`],
      saturation: 0.55,
      dim: 0.85,
      actionFrom: 0,
      habit: (e, t) => {
        let n = `#8a8d94`,
          r = `#a3a3a0`;
        t === 0
          ? (e.clearRect(5, 14, 1, 6),
            N(e, 4, 12, n, 1, 3),
            N(e, 5, 11, n, 1, 1),
            N(e, 6, 10, n, 1, 1),
            N(e, 7, 9, r, 2, 1))
          : t === 2 &&
            (e.clearRect(12, 14, 4, 3),
            N(e, 13, 12, n, 1, 3),
            N(e, 14, 11, n, 1, 1),
            N(e, 14, 9, r, 1, 2));
      },
    },
  },
  lord: {
    base: () => Tg(`lord`),
    opts: { saturation: 0.6, dim: 0.88, keep: [`#e0b64a`] },
  },
  lady: {
    base: () => Tg(`lady`),
    opts: { saturation: 0.6, dim: 0.88, keep: [`#e0b64a`, `#8ef6ff`] },
  },
  pit: { base: () => Tg(`miner`), opts: { keep: [`#ffcf6a`] } },
  charred: { base: () => Tg(`forgewright`), opts: { flavor: `charred` } },
  icelocked: {
    base: () => Tg(`refugee`),
    opts: { flavor: `frost`, actionFrom: 2 },
  },
};
function Jg(e) {
  let t = qg[e];
  return Gg(`husk:npc:${e}`, t.base(), t.opts);
}
function Yg(e, t) {
  let n = `#d9d2c0`,
    r = `#a89f8a`,
    i = `#7a4a2a`,
    a = `#a0643a`,
    o = `#4f7a3a`,
    s = [0, 1, 0, -1][t];
  (N(e, 15, 4, `#5a3a22`, 1, 12),
    N(e, 13, 3, i, 5, 1),
    N(e, 13, 0, i, 1, 3),
    N(e, 15, 0, i, 1, 3),
    N(e, 17, 1, i, 1, 2),
    N(e, 7 + s, 16, n, 1, 6),
    N(e, 10 - s, 16, r, 1, 6),
    N(e, 7 + s, 19, r),
    N(e, 6 + s, 22, n, 2, 1),
    N(e, 9 - s, 22, r, 2, 1),
    N(e, 6 + s, 22, `#3a3024`),
    N(e, 6, 15, r, 6, 2),
    N(e, 9, 8, r, 1, 8));
  for (let t of [9, 11, 13]) (N(e, 6, t, n, 7, 1), N(e, 9, t, r));
  (N(e, 7, 10, o, 2, 1),
    N(e, 10, 12, o, 2, 1),
    N(e, 8, 14, `#6f9a4a`),
    N(e, 10, 10, cg.dark, 2, 1),
    N(e, 11, 10, cg.red),
    N(e, 5, 8, i, 3, 7),
    N(e, 5, 8, a, 1, 6),
    N(e, 6, 14, `#5a3a22`, 2, 1),
    N(e, 11, 7, i, 3, 2),
    N(e, 11, 7, a, 2, 1),
    N(e, 4, 9, n, 1, 6),
    N(e, 3, 15, n, 2, 1),
    N(e, 9, 2, n, 5, 5),
    N(e, 9, 2, r, 1, 5),
    N(e, 10, 3, cg.red, 1, 1),
    N(e, 10, 4, cg.core),
    N(e, 12, 4, `#1a1210`),
    N(e, 11, 5, `#1a1210`),
    N(e, 10, 7 + (t % 2), n, 4, 1),
    N(e, 8, 1, i, 7, 2),
    N(e, 8, 1, a, 3, 1),
    N(e, 12, 1, `#5a3a22`),
    N(e, 13, 9, n, 1, 1),
    N(e, 13, 10, n, 1, 2),
    N(e, 14, 10, r, 2, 1));
}
function Xg(e, t, n) {
  let r = [0, 1, 0, -1][t],
    i = t % 2;
  for (let r = 0; r < 4; r++)
    N(e, 4 - r, 8 + r * 2 + ((t + r) % 2), n.clothD, 1, 2);
  (N(e, 6 + r, 18, n.clothD, 2, 4),
    N(e, 9 - r, 18, n.clothDD, 2, 4),
    N(e, 6 + r, 21, n.skin, 2, 1),
    N(e, 5, 7, n.cloth, 7, 12),
    N(e, 10, 7, n.clothD, 2, 12));
  for (let t = 7; t < 19; t += 3) N(e, 5 + ((t * 2) % 5), t, n.clothDD, 2, 1);
  (N(e, 5, 10, n.bind, 7, 1),
    N(e, 5, 15, n.bind, 7, 1),
    N(e, 7, 11, n.skin, 2, 3),
    N(e, 7, 12, cg.dark, 2, 1),
    N(e, 8, 12, cg.red),
    N(e, 6, 1, n.cloth, 5, 6),
    N(e, 10, 1, n.clothD, 1, 6),
    N(e, 6, 3, n.clothDD, 5, 1),
    N(e, 7, 2, cg.red),
    N(e, 7, 3, cg.core),
    N(e, 9, 3, cg.dark),
    N(e, 7, 5, n.clothDD, 3, 1),
    N(e, 12, 9 + i, n.skin, 4, 1),
    N(e, 12, 9 + i, n.clothD, 1, 1),
    N(e, 16, 9 + i, n.skin, 1, 2));
}
function Zg(e, t) {
  (Xg(e, t, {
    cloth: `#c9c3b0`,
    clothD: `#a8a394`,
    clothDD: `#7d786a`,
    bind: `#6b5a3a`,
    skin: `#8a8a86`,
  }),
    [
      [1, 4],
      [14, 2],
      [16, 15],
      [2, 19],
      [13, 20],
    ].forEach(([n, r], i) =>
      N(e, n + ((t + i) % 2), r - ((t + i) % 3), i % 2 ? `#7d8471` : `#9aa08a`),
    ));
}
function Qg(e, t) {
  (Xg(e, t, {
    cloth: `#8a8468`,
    clothD: `#6a6650`,
    clothDD: `#4a4838`,
    bind: `#3a3024`,
    skin: `#6f7a62`,
  }),
    N(e, 5, 15, `#3a3024`, 7, 4),
    N(e, 5, 15, `#4a3c2c`, 7, 1),
    N(e, 6, 0, `#4f7a3a`, 3, 1),
    N(e, 5, 1, `#4f7a3a`, 1, 4),
    N(e, 11, 7, `#6f9a4a`, 1, 4),
    N(e, 5, 7, `#4f7a3a`, 1, 3),
    N(e, 6 + (t % 2), 19 + (t % 3), `#3a5a5a`),
    N(e, 11, 12 + ((t + 1) % 3), `#3a5a5a`));
}
function $g(e) {
  let t = Ig[e],
    n = {
      barrowhusk: [`#3a3024`, `#5a4a38`, `#2a2219`],
      feverhusk: [`#4a463e`, `#6f6a60`, `#35322c`],
      boghusk: [`#2a3a3a`, `#5a7a7a`, `#8ab0b0`],
    }[e];
  return [
    Math.round(t.h * 0.62),
    Math.round(t.h * 0.4),
    Math.round(t.h * 0.16),
    0,
  ].map((r, i) => {
    let [a, o] = M(t.w + 2, t.h + 2);
    (o.translate(1, 1), t.draw(o, 0));
    let [s, c] = M(t.w + 2, t.h + 2);
    c.drawImage(a, 0, r);
    let l = t.ay + 1;
    if ((c.clearRect(0, l, s.width, s.height - l), e === `boghusk`)) {
      P(c, t.ax + 1, l, 7, 1.6, n[0]);
      for (let e = -6; e <= 6; e += 2)
        N(c, t.ax + 1 + e, l - 1 + +(Math.abs(e) > 4), n[1]);
      (i === 1 || i === 2) &&
        (N(c, t.ax - 5 + i, l - 4 - i, n[2]),
        N(c, t.ax + 6 - i, l - 5 + i, n[2]));
    } else
      (P(c, t.ax + 1, l, i === 3 ? 5 : 7, 2, n[0]),
        P(c, t.ax, l - 0.5, i === 3 ? 3.5 : 5, 1.2, n[1]),
        (i === 1 || i === 2) &&
          (N(c, t.ax - 6 + i, l - 4 - i, n[1], 2, 1),
          N(c, t.ax + 5 - i, l - 6 + i, n[0], 1, 1),
          N(c, t.ax + 7, l - 2, n[2], 1, 1)));
    return (F(s), s);
  });
}
var e_ = 6,
  t_ = new Map();
function n_(e) {
  let t = t_.get(e);
  if (!t) {
    let n = parseInt(e.slice(1), 16);
    ((t = [(n >> 16) & 255, (n >> 8) & 255, n & 255]), t_.set(e, t));
  }
  return t;
}
var r_ = (...e) => e.map(n_),
  i_ = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map(
    (e) => (e + 0.5) / 16 - 0.5,
  );
function a_(e, t) {
  return i_[(t & 3) * 4 + (e & 3)];
}
function o_(e, t, n, r, i = 0.6) {
  let a = Math.floor(
    Math.max(0, Math.min(0.9999, t)) * e.length + a_(n, r) * i,
  );
  return e[Math.max(0, Math.min(e.length - 1, a))];
}
function s_(e, t, n) {
  return [
    e[0] + (t[0] - e[0]) * n,
    e[1] + (t[1] - e[1]) * n,
    e[2] + (t[2] - e[2]) * n,
  ];
}
function c_(e, t) {
  return [e[0] * t, e[1] * t, e[2] * t];
}
function H(e, t, n = 0) {
  let r =
    (Math.imul(e | 0, 374761393) +
      Math.imul(t | 0, 668265263) +
      Math.imul(n | 0, 1442695041)) |
    0;
  return (
    (r = Math.imul(r ^ (r >>> 13), 1274126177)),
    (r ^= r >>> 16),
    (r >>> 0) / 4294967296
  );
}
var l_ = (e) => e * e * (3 - 2 * e);
function u_(e, t, n = 0) {
  let r = Math.floor(e),
    i = Math.floor(t),
    a = l_(e - r),
    o = l_(t - i),
    s = H(r, i, n),
    c = H(r + 1, i, n),
    l = H(r, i + 1, n),
    u = H(r + 1, i + 1, n);
  return s + (c - s) * a + (l - s) * o + (s - c - l + u) * a * o;
}
function d_(e, t, n = 0, r = 3) {
  let i = 0,
    a = 0.5,
    o = 0;
  for (let s = 0; s < r; s++)
    ((i += u_(e, t, n + s * 17) * a),
      (o += a),
      (e *= 2.03),
      (t *= 2.03),
      (a *= 0.5));
  return i / o;
}
function f_(e, t, n = 0) {
  return 1 - Math.abs(d_(e, t, n, 3) - 0.5) * 2;
}
function p_(e, t, n = 0) {
  let r = Math.floor(e),
    i = Math.floor(t),
    a = 9,
    o = 9,
    s = 0,
    c = 0,
    l = 0;
  for (let u = -1; u <= 1; u++)
    for (let d = -1; d <= 1; d++) {
      let f = r + d + H(r + d, i + u, n),
        p = i + u + H(r + d, i + u, n + 7),
        m = Math.hypot(f - e, p - t);
      m < a
        ? ((o = a), (a = m), (s = H(r + d, i + u, n + 3)), (c = f), (l = p))
        : m < o && (o = m);
    }
  return { d1: a, d2: o, id: s, cx: c, cy: l };
}
