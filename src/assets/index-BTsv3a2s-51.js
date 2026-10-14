// index-BTsv3a2s 51 — math
// Lines 34023-34326 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function oee(e, t) {
  let [n, r] = M(e.width, e.height);
  r.drawImage(e, 0, 0);
  let i = r.getImageData(0, 0, n.width, n.height),
    a = i.data,
    o = 1,
    s = 0,
    c = (e) => (a[e] * 0.3 + a[e + 1] * 0.59 + a[e + 2] * 0.11) / 255;
  for (let e = 0; e < a.length; e += 4) {
    if (a[e + 3] < 20) continue;
    let t = c(e);
    ((o = Math.min(o, t)), (s = Math.max(s, t)));
  }
  let l = Math.max(0.01, s - o);
  for (let e = 0; e < a.length; e += 4) {
    if (a[e + 3] < 20) continue;
    let n = ((c(e) - o) / l) ** +t,
      [r, i, s] = zg[Math.min(zg.length - 1, Math.round(n * (zg.length - 1)))];
    ((a[e] = r), (a[e + 1] = i), (a[e + 2] = s));
  }
  return (r.putImageData(i, 0, 0), n);
}
var see = { slime: 1.1, wolf: 1.15, wisp: 1, imp: 0.85, golem: 1.9 },
  cee = {
    slime: (e, t) => {
      let n = 14 - (5.5 - [0, 1, 2, 1][t] * 0.5);
      (P(e, 11, n + 2, 2.2, 1.8, cg.red),
        N(e, 11, Math.round(n + 2), cg.core, 1, 1),
        N(e, 12, Math.round(n), cg.core, 1, 2),
        N(e, 15, Math.round(n), cg.core, 1, 2));
    },
    wolf: (e, t) => {
      (N(e, 11, 9, cg.red, 4, 1),
        N(e, 14, 10, cg.red, 1, 2),
        N(e, 13, 9, cg.core),
        N(e, 18, 10 + (t % 2), cg.red, 2, 1),
        N(e, 23, 7, cg.core, 2, 1));
    },
    wisp: (e) => {
      (N(e, 12, 11, cg.black), N(e, 14, 11, cg.black));
    },
    imp: (e, t) => {
      let n = [0, 1, 0, 1][t];
      (N(e, 14, 5 + n, cg.core, 2, 1),
        N(e, 12, 12 + n, cg.red, 1, 3),
        N(e, 12, 13 + n, cg.core));
    },
    golem: (e) => {
      (N(e, 9, 16, cg.red, 1, 2),
        N(e, 10, 18, cg.red, 1, 2),
        N(e, 9, 20, cg.red, 1, 2),
        N(e, 10, 22, cg.red, 1, 1),
        N(e, 24, 25, cg.red, 1, 4),
        N(e, 16, 7, cg.red, 1, 3),
        N(e, 19, 9, cg.core, 3, 2));
    },
  },
  Bg = new Map();
function Vg(e) {
  let t = Bg.get(e);
  if (t) return t;
  let n = xh(e),
    r = n.frames.map((t, n) => {
      let r = oee(t, see[e]);
      return (cee[e](r.getContext(`2d`), n), r);
    }),
    i = {
      frames: r,
      flipped: r.map(Ip),
      flash: r.map((e) => Fp(e)),
      ax: n.ax,
      ay: n.ay,
    };
  return (Bg.set(e, i), i);
}
var lee = new Set(
    [
      `#f1c7a1`,
      `#c9936b`,
      `#e0b08a`,
      ...Object.values(Sg).flatMap((e) => [e.skin, e.skinD]),
    ].map((e) => Lp(e).join(`,`)),
  ),
  uee = Lp(`#120b1a`).join(`,`),
  dee = Lp(`#1b1030`).join(`,`),
  fee = [0, 1, 0, 1, 0, 1, 0],
  Hg = Lp(`#bfe0f5`);
function Ug(e, t, n, r, i, a) {
  let [o, s] = M(t, r - n + 1);
  (s.drawImage(e.canvas, 0, n, t, r - n + 1, 0, 0, t, r - n + 1),
    e.clearRect(0, n, t, r - n + 1),
    e.drawImage(o, i, n + a));
}
function pee(e, t, n, r) {
  let i = e.width,
    a = e.height,
    [o, s] = M(i, a);
  s.drawImage(e, 0, 0);
  let c = s.getImageData(0, 0, i, a),
    l = c.data,
    u = (e) => new Set((e ?? []).map((e) => Lp(e).join(`,`))),
    d = u(r.orb),
    f = u(r.keep),
    p = new Map(
      Object.entries(r.recolor ?? {}).map(([e, t]) => [Lp(e).join(`,`), Lp(t)]),
    ),
    m = [],
    h = [];
  for (let e = 0; e < a; e++)
    for (let a = 0; a < i; a++) {
      let o = (e * i + a) * 4;
      if (l[o + 3] < 20) continue;
      let s = `${l[o]},${l[o + 1]},${l[o + 2]}`;
      if (s === uee) {
        l[o + 3] = 0;
        continue;
      }
      let c = p.get(s);
      if (
        (c && (([l[o], l[o + 1], l[o + 2]] = c), (s = c.join(`,`))), s === dee)
      ) {
        m.push([a, e]);
        continue;
      }
      if (d.size && (d.has(s) || s === `255,255,255`)) {
        h.push([a, e, l[o], l[o + 1], l[o + 2]]);
        continue;
      }
      if (f.has(s)) continue;
      if (
        r.tatter &&
        e >= r.tatter[0] &&
        e <= r.tatter[1] &&
        dg(a * 7, e + t * 13) < 0.3
      ) {
        l[o + 3] = 0;
        continue;
      }
      let u = l[o] * 0.3 + l[o + 1] * 0.59 + l[o + 2] * 0.11,
        g = lee.has(s),
        _;
      if (r.flavor === `charred`) {
        let t = u / 255;
        _ = Lp(t > 0.55 ? `#4a3538` : t > 0.3 ? `#2a1f24` : `#150e12`);
        let r = dg(a * 3, e * 5 + (n % 2));
        r < 0.06 ? (_ = Lp(`#ff7a1a`)) : r < 0.11 && (_ = Lp(`#7a1d10`));
      } else if (g) _ = [u * 0.86, u * 0.86, u * 0.84];
      else {
        let n = dg(a * 5 + t, e * 3) < 0.14 ? 0.72 : 1,
          i = (r.dim ?? 0.78) * n,
          s = r.saturation ?? 0.35;
        _ = [
          (u + (l[o] - u) * s) * i,
          (u + (l[o + 1] - u) * s) * i,
          (u + (l[o + 2] - u) * s) * i + 4,
        ];
      }
      (r.flavor === `frost` &&
        ((_ = [
          _[0] * 0.6 + Hg[0] * 0.4,
          _[1] * 0.6 + Hg[1] * 0.4,
          _[2] * 0.6 + Hg[2] * 0.4,
        ]),
        g && dg(a * 11, e * 7) < 0.18 && (_ = Lp(`#e6fdff`))),
        ([l[o], l[o + 1], l[o + 2]] = _));
    }
  for (let [e, t] of m) {
    let n = ((t - 1) * i + e) * 4;
    t > 0 && l[n + 3] > 20 && ([l[n], l[n + 1], l[n + 2]] = Lp(cg.red));
    let r = (t * i + e) * 4;
    l[r + 3] = 0;
  }
  (s.putImageData(c, 0, 0),
    Ug(s, i, 0, 12, 0, 1),
    t === 2 && Ug(s, i, 0, 17, 1, 0));
  let g = (e, n) => {
      let r = n <= 12 ? n + 1 : n;
      return [e + +(t === 2 && r <= 17), r];
    },
    _ = fee[n] ?? 0,
    v = (e, t) =>
      e >= 0 &&
      t >= 0 &&
      e < i &&
      t < a &&
      s.getImageData(e, t, 1, 1).data[3] > 20,
    y = m.map(([e, t]) => g(e, t));
  for (let [e, t] of y) N(s, e, t, cg.core);
  if (t === 0 && y.length === 2 && y[0][1] === y[1][1]) {
    let [[e, t], [n]] = y;
    Math.abs(n - e) > 1 &&
      N(s, Math.min(e, n) + 1, t + 2, `#1a0a0e`, Math.abs(n - e) - 1, 1);
  }
  if (t !== 1) {
    let e = 16 + _;
    for (let [t, n, r] of [
      [11, e, cg.dark],
      [12, e, cg.dark],
      [11, e + 1, cg.red],
      [12, e + 1, cg.dark],
    ])
      v(t, n) && N(s, t, n, r);
  }
  if (h.length) {
    let e = { x0: i, y0: a, x1: 0, y1: 0 };
    for (let [t, r, i, a, o] of h) {
      let [c, l] = g(t, r),
        u = i === 255 && a === 255 && o === 255,
        d = n === 6 && dg(c, l) < 0.5;
      (N(
        s,
        c,
        l,
        u
          ? cg.red
          : d
            ? `rgb(${i},${a},${o})`
            : `rgb(${i * 0.35},${a * 0.35},${o * 0.35})`,
      ),
        (e.x0 = Math.min(e.x0, c)),
        (e.y0 = Math.min(e.y0, l)),
        (e.x1 = Math.max(e.x1, c)),
        (e.y1 = Math.max(e.y1, l)));
    }
    if (n === 6 && r.spell) {
      let t = [
        [e.x0 - 2, e.y0, r.spell.glow],
        [e.x1 + 2, e.y0 - 1, cg.red],
        [e.x0, e.y0 - 2, r.spell.spark],
        [e.x1 + 1, e.y1 + 2, r.spell.glow],
        [e.x0 - 1, e.y1 + 3, cg.red],
      ];
      for (let [e, n, r] of t)
        e >= 0 && n >= 0 && e < i && n < a && N(s, e, n, r);
    }
  }
  if (
    (r.flavor === `charred` &&
      (t === 2
        ? [
            [3, 14],
            [2, 10],
            [4, 7],
            [1, 17],
          ]
        : [
            [3, 9],
            [16, 7],
            [4, 4],
            [15, 12],
          ]
      ).forEach(([e, t], r) =>
        N(s, e, t - ((n + r) % 3), r % 2 ? `#5a5560` : `#8a8578`),
      ),
    r.flavor === `frost`)
  ) {
    let e = s.getImageData(0, 0, i, a).data;
    for (let t = 1; t < a; t++)
      for (let n = 0; n < i; n++)
        e[(t * i + n) * 4 + 3] > 20 &&
          e[((t - 1) * i + n) * 4 + 3] <= 20 &&
          dg(n, t) < 0.7 &&
          N(s, n, t, `#e6fdff`);
    if (n === 6) {
      for (let e = 19; e <= 25; e++) {
        let t = 5 + (e - 19) * 0.4;
        for (let n = Math.round(10 - t); n <= Math.round(10 + t); n++)
          dg(n, e * 3) < 0.85 &&
            N(s, n, e, n > 10 + t / 3 ? `#8ec5e8` : `#bfe0f5`);
      }
      (N(s, 6, 20, `#ffffff`, 1, 3), N(s, 8, 24, `#e6fdff`, 3, 1));
    }
  }
  return (n === 6 && r.habit?.(s, t), F(o), o);
}
var Wg = new Map();
function Gg(e, t, n = {}) {
  let r = nm(e);
  if (r) return r;
  let i = Wg.get(e);
  if (i) return i;
  let a = [];
  for (let e of [0, 1, 2])
    a[e] = t.frames[e].map((r, i) =>
      pee(
        i === 6 && n.actionFrom !== void 0 ? t.frames[e][n.actionFrom] : r,
        e,
        i,
        n,
      ),
    );
  a[3] = a[2].map(Ip);
  let o = tm(e, { frames: a, flash: a.map((e) => e.map((e) => Fp(e))) });
  return (Wg.set(e, o), o);
}
function Kg(e) {
  let t = S[e].colors;
  return Gg(`husk:mage:${e}`, dh(e), {
    orb: [t.orb, t.glow],
    spell: { glow: t.glow, spark: t.spark },
    saturation: 0.5,
    tatter: [22, 23],
  });
}
