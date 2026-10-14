// index-BTsv3a2s 78 — math
// Lines 43166-43511 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function gS(e, t, n, r, i, a, o, s, c, l, u, d, f) {
  let p = (a / o) * c * 2;
  for (let a = u; a < u + f; a++)
    for (let o = l; o < l + d; o++) {
      let l = Math.hypot(o + 0.5 - t, (a + 0.5 - n) * 1.6),
        u = Math.hypot(o + 0.5 - r, (a + 0.5 - i) * 1.6);
      if (l > s && u > s) continue;
      let d = ((((l - p) % c) + c) % c) / c,
        f = ((((u - p - c / 2) % c) + c) % c) / c,
        m = l < s && l > 3 && (d < 0.12 || d > 0.94),
        h = u < s && u > 3 && (f < 0.12 || f > 0.94);
      if (m && h) N(e, o, a, W[4]);
      else if (m || h) {
        let t = (m ? l : u) / s;
        if (t > 0.75 && (o + a) % 2) continue;
        N(e, o, a, t < 0.5 ? W[3] : W[2]);
      }
    }
}
function _S(e, t, n, r, i, a, o, s) {
  let c = (i / a) * s * 2,
    l = [],
    u = Math.hypot(n - e, (r - t) * 1.6);
  for (let i = 0; i < 12; i++) {
    let a = (((c % s) + s) % s) + i * s;
    if (!(a < 3 || a > o))
      for (let i = 0; i < 12; i++) {
        let d = ((((c + s / 2) % s) + s) % s) + i * s;
        if (d < 3 || d > o || a + d < u || Math.abs(a - d) > u) continue;
        let f = (n - e) / u,
          p = ((r - t) * 1.6) / u,
          m = (a * a - d * d + u * u) / (2 * u),
          h = Math.sqrt(Math.max(0, a * a - m * m));
        for (let n of [-1, 1]) {
          let r = e + f * m - p * h * n,
            i = t + (p * m + f * h * n) / 1.6;
          l.push([r, i]);
        }
      }
  }
  return l;
}
var Cte = () =>
    R(`ilse-harmony`, 8, 112, 72, (e, t) => {
      let n = [32, 40],
        r = [80, 30];
      gS(e, n[0], n[1], r[0], r[1], t, 8, 56, 11, 0, 0, 112, 72);
      for (let [i, a] of _S(n[0], n[1], r[0], r[1], t, 8, 56, 11))
        i < 1 ||
          a < 1 ||
          i > 110 ||
          a > 70 ||
          (N(e, i - 1, a, W[4], 3, 1),
          N(e, i, a - 1, W[4], 1, 3),
          N(e, i, a - 2, `#ffffff`));
      (P(e, n[0], n[1], 2.5, 2, W[3]),
        N(e, n[0], n[1] - 1, W[4]),
        P(e, r[0], r[1], 2, 1.6, W[1]),
        N(e, r[0], r[1], W[3]));
    }),
  vS = () =>
    R(`ilse-spout`, 5, 16, 26, (e, t) => {
      let n = [3, 9, 15, 10, 0][t];
      (Yx(e, 8, 22, 3 + t * 1.2, 1.4 + t * 0.5, W, t >= 3 ? 0.4 : 0, t),
        n > 0 && $x(e, 8, 22, 5, n, W, t),
        t >= 2 && Qx(e, 8, 22 - n, am((t - 1) / 3), 7, 7, W, 3),
        t === 2 && N(e, 8, 22 - n - 1, `#ffffff`));
    }),
  yS = () =>
    R(`ilse-echo`, 4, 24, 22, (e, t) => {
      for (let n = 0; n < 6; n++) {
        let r = (n / 6) * jx + 0.26,
          i = n % 2 ? 4 : 7;
        for (let n = 2; n < i; n++)
          (n + t) % 2 == 0 &&
            N(e, 12 + Math.cos(r) * n, 11 + Math.sin(r) * n * 0.8, W[2]);
      }
      (P(e, 12, 11, 2, 1.6, t === 1 ? W[3] : W[2]),
        N(e, 12, 11, W[4]),
        t >= 1 &&
          Yx(
            e,
            12,
            11,
            3 + t * 2.6,
            (3 + t * 2.6) * 0.7,
            W,
            t === 3 ? 0.5 : 0,
            t,
          ));
    }),
  bS = () =>
    R(`ilse-farlight`, 5, 28, 48, (e, t) => {
      let n = [0.25, 0.6, 1, 0.85, 1][t],
        r = 40 - 38 * n;
      for (let n = Math.round(r); n < 40; n++) {
        let i = (n - r) / (40 - r);
        (i < 0.25 && (n + t) % 2) ||
          (N(e, 14, n, i < 0.5 ? Mx[3] : Mx[4]),
          i > 0.4 && (N(e, 13, n, Mx[2]), N(e, 15, n, Mx[2])));
      }
      let i = 3 + n * 4;
      (z(e, 14 - i, 40, 14 + i, 40, Mx[3]),
        z(e, 14, 40 - i * 0.6, 14, 40 + i * 0.6, Mx[3]));
      for (let t = 0; t < 4; t++) {
        let n = (t / 4) * jx + Math.PI / 4;
        N(e, 14 + Math.cos(n) * 2, 40 + Math.sin(n) * 2, Mx[4]);
      }
      (P(e, 14, 40, 1.6, 1.2, Nx[3]),
        N(e, 14, 40, Nx[4]),
        t === 4 && V(e, 14, 40, 8, 9, Mx, 2));
    }),
  wte = () =>
    R(`ilse-thread`, 4, 32, 7, (e, t) => {
      (N(e, 0, 2, Nx[1], 32, 3), N(e, 0, 3, Nx[2], 32, 1));
      for (let n = (t * 4) % 16; n < 32; n += 16)
        (N(e, n, 3, Nx[4], 3, 1), N(e, n - 1, 3, Nx[3]), N(e, n + 3, 3, Nx[3]));
      for (let t = 5; t < 32; t += 11)
        (N(e, t, 1, Fx[3]), N(e, t + 1, 5, Fx[4]));
    }),
  xS = () =>
    R(`ilse-answer`, 6, 56, 44, (e, t) => {
      let n = [24, 19, 14, 9.5, 5.5, 0][t];
      if (n > 0) {
        let r = [];
        for (let e = 0; e < 12; e++) {
          let i = (e / 12) * jx + t * 0.05;
          r.push([28 + Math.cos(i) * n, 22 + Math.sin(i) * n * 0.75]);
        }
        for (let t = 0; t < 12; t++)
          z(e, r[t][0], r[t][1], r[(t + 1) % 12][0], r[(t + 1) % 12][1], Mx[1]);
        r.forEach(([t, r], i) => {
          (mm(
            e,
            t,
            r,
            Math.atan2(22 - r, 28 - t),
            n > 8 ? 8 : 5,
            n > 8 ? 2.6 : 2,
            Mx,
          ),
            i % 3 == 0 && N(e, t, r, Mx[4]));
        });
      }
      (t >= 3 && t < 5 && P(e, 28, 22, 1.5, 1.5, Nx[2]),
        t === 5 &&
          (V(e, 28, 22, 8, 12, Mx, 3),
          P(e, 28, 22, 2.4, 2, Nx[3]),
          N(e, 28, 22, Nx[4])));
    }),
  Tte = () =>
    R(`ilse-seals`, 4, 52, 14, (e, t) => {
      let n = `#ff7a1a`,
        r =
          t === 0
            ? [null, null]
            : t === 1 || t === 2
              ? [n, null]
              : [n, `#fff36b`];
      (tS(e, 0, 4, 52, 0.55 + t * 0.05, t, { split: !0, broke: r }),
        t === 2 && B(e, 39, 8, 5, 5, n, (e) => Math.round(e * 8) % 2 == 0),
        t === 3 && V(e, 26, 8, 8, 8, Mx, 9));
    });
function SS(e, t, n, r, i = 3, a = 0) {
  Em(e, dh(t).frames[i][a], 10, 26, n, r, 5);
}
function CS(e, t, n, r, i) {
  return (a, o) => {
    let s = Math.atan2((o - t) / r, (a - e) / n),
      c =
        1 + (qx(s * 2.5 + 10, 0.5, i) - 0.5) * 0.3 + Math.sin(s * 3 + i) * 0.04;
    return ((a - e) / n) ** 2 + ((o - t) / r) ** 2 <= c * c;
  };
}
function wS(e, t, n) {
  return (
    Math.sin(e * 0.09 + t * 0.45 + n) + Math.sin(e * 0.041 - t * 0.21 + n * 2)
  );
}
function TS(e, t, n, r, i, a) {
  let o = CS(t, n, r, i, a);
  for (let s = Math.floor(n - i * 1.3); s <= n + i * 1.3; s++)
    for (let n = Math.floor(t - r * 1.3); n <= t + r * 1.3; n++) {
      if (!o(n, s)) continue;
      let t = Px[1];
      if (!o(n, s - 1)) t = Fx[3];
      else if (!o(n, s - 2) || !o(n, s - 3)) t = Fx[0];
      else if (!o(n, s + 1)) t = Px[2];
      else {
        let e = wS(n, s, a);
        e > 1.6 ? (t = Px[2]) : e < -1.2 && (n + s) % 2 == 0 && (t = Px[0]);
      }
      N(e, n, s, t);
    }
  for (let s = 0; s < 9; s++) {
    let c = t + (L(s, a, 1) - 0.5) * r * 1.4,
      l = n + (L(s, a, 2) - 0.5) * i * 1.2;
    for (let t = 0; t < 5; t++)
      o(c + t, l) && o(c + t, l - 3) && N(e, c + t, l, t === 2 ? Px[4] : Px[3]);
  }
}
function ES(e, t, n, r, i, a) {
  let o = [];
  for (let e = 0; e < 7; e++) {
    let s = (e / 7) * jx,
      c = 0.8 + L(e, a) * 0.3;
    o.push([t + Math.cos(s) * r * 0.5 * c, n + Math.sin(s) * i * 0.5 * c]);
  }
  (fm(
    e,
    o.map(([e, t]) => [e, t + 2]),
    Fx[0],
  ),
    fm(e, o, Fx[3]),
    fm(
      e,
      o.map(([e, r]) => [t + (e - t) * 0.7, n + (r - n) * 0.7 - 1]),
      Fx[4],
    ),
    z(e, t - r * 0.2, n, t + r * 0.1, n + 1, Fx[2]));
}
function DS(e, t, n, r, i, a, o = []) {
  let s = CS(t, n, r, i, a);
  for (let o = Math.floor(n - i * 1.3); o <= n + i * 1.3; o++)
    for (let n = Math.floor(t - r * 1.3); n <= t + r * 1.3; n++) {
      if (!s(n, o)) continue;
      let t = Fx[1];
      (s(n, o - 1)
        ? s(n, o + 1)
          ? (n + o * 2 + a * 7) % 29 < 2 && Math.sin(n * 0.35 + a) > 0.2
            ? (t = Fx[2])
            : wS(n, o, a) < -1.3 && (n + o) % 2 == 0 && (t = Fx[0])
          : (t = Fx[0])
        : (t = Fx[3]),
        N(e, n, o, t));
    }
  for (let o = 0; o < 5; o++) {
    let c = t + (L(o, a, 3) - 0.5) * r,
      l = n + (L(o, a, 4) - 0.5) * i;
    s(c, l) && P(e, c, l, 3 + L(o, a) * 3, 1.5, Fx[0]);
  }
  for (let [t, n, r] of o)
    e.drawImage(Ly(r), Math.round(t - 8), Math.round(n - 8));
}
function Ete() {
  let [e, t] = Tm(224, 160, `ice`, 21);
  (TS(t, 112, 92, 92, 52, 3),
    DS(t, 52, 124, 30, 16, 1, [
      [46, 120, 1],
      [60, 128, 2],
    ]),
    DS(t, 178, 74, 26, 14, 2, [[176, 72, 1]]),
    ES(t, 178, 126, 30, 14, 4),
    ES(t, 150, 52, 20, 9, 5));
  let n = Py(`ilse`);
  (Sm(t, 108, 100, 13, 4, Px[0], 0.8),
    Em(t, n.frames[2], n.ax, n.ay, 108, 100, 0));
  let r = M(224, 160);
  (r[1].drawImage(uS()[3], 88, 53),
    tS(r[1], 82, 44, 52, 4 / 6, 3, { cracks: 0.6 }),
    bm(t, r[0], 0, 0, 3, 0.7),
    t.drawImage(r[0], 0, 0),
    ym(t, 108, 48, 30, W[3], 0.35));
  let i = xh(`wisp`);
  for (let [e, n, r] of [
    [56, 62, !0],
    [168, 40, !1],
  ])
    (Em(t, i.frames[1], i.ax, i.ay, e, n, 4),
      nS(t, e, n - 9, 11, 1, r),
      ym(t, e, n - 9, 14, W[2], 0.4));
  SS(t, `pyro`, 22, 150, 2, 6);
  let a = M(224, 160);
  for (let e = 0; e < 18; e++)
    N(a[1], 82 + e * 0.95, 86 - e * 0.5, e > 12 ? Ix[4] : Ix[3], 2, 2);
  return (
    V(a[1], 100, 77, 7, 6, Ix, 3),
    bm(t, a[0], 0, 0, 3, 0.8),
    t.drawImage(a[0], 0, 0),
    SS(t, `storm`, 178, 128, 3, 6),
    Dm(t, 224, 160, 0.4),
    e
  );
}
function Dte() {
  let [e, t] = Tm(224, 160, `ice`, 23);
  (TS(t, 62, 58, 54, 40, 7),
    DS(t, 146, 112, 74, 42, 4, [[96, 104, 0]]),
    ES(t, 40, 84, 30, 13, 8),
    rS(t, 150, 122, 1, 1.5),
    t.drawImage(hS()[2], 112, 92),
    t.drawImage(mS()[1], 148, 76),
    t.drawImage(pS()[2], 158, 110),
    SS(t, `pyro`, 176, 126, 3, 6));
  let n = Py(`frostmaw`);
  Em(t, n.frames[2], n.ax, n.ay, 70, 52, 0);
  let r = M(224, 160);
  return (
    Yx(r[1], 70, 52, 20, 4.5, W, 0.1, 2),
    Qx(r[1], 84, 44, 0.4, 10, 10, W, 3),
    bm(t, r[0], 0, 0, 2, 0.6),
    t.drawImage(r[0], 0, 0),
    SS(t, `cryo`, 40, 86, 2, 0),
    ym(t, 176, 122, 22, W[3], 0.45),
    Dm(t, 224, 160, 0.45),
    e
  );
}
function Ote() {
  let [e, t] = Tm(240, 156, `ice`, 25);
  TS(t, 120, 84, 116, 64, 9);
  let n = [74, 98],
    r = [176, 52],
    i = M(240, 156);
  (gS(i[1], n[0], n[1], r[0], r[1], 3, 8, 104, 18, 0, 0, 240, 156),
    t.save(),
    (t.globalAlpha = 0.85),
    t.drawImage(i[0], 0, 0),
    t.restore());
  let a = M(240, 156);
  (_S(n[0], n[1], r[0], r[1], 3, 8, 104, 18).forEach(([e, t], n) => {
    e < 2 ||
      t < 2 ||
      e > 238 ||
      t > 154 ||
      (L(n, 31) < 0.22
        ? a[1].drawImage(vS()[2], Math.round(e - 8), Math.round(t - 22))
        : (N(a[1], e - 1, t, W[4], 3, 1),
          N(a[1], e, t - 1, W[4], 1, 3),
          N(a[1], e, t, `#ffffff`)));
  }),
    bm(t, a[0], 0, 0, 3, 0.8),
    t.drawImage(a[0], 0, 0),
    t.drawImage(yS()[1], r[0] - 12, r[1] - 11),
    ym(t, r[0], r[1], 18, W[2], 0.6));
  let o = Py(`ilse`);
  return (
    Em(t, o.frames[1], o.ax, o.ay, n[0], n[1] + 4, 0),
    tS(t, n[0] - 26, n[1] - 52, 52, 2 / 6, 1),
    ym(t, n[0], n[1] - 20, 24, W[3], 0.4),
    SS(t, `cryo`, 128, 142, 1, 0),
    SS(t, `void`, 214, 112, 3, 6),
    Dm(t, 240, 156, 0.45),
    e
  );
}
