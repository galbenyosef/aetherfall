// assets__index-BTsv3a2s 86 — draw
// Lines 45843-46164 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function GC(e, t, n, r, i) {
  for (let a = 0; a < 22; a++) {
    let o = (a / 22) * Math.PI * 2 + (L(a, 31) - 0.5) * 0.25,
      s = Math.cos(o),
      c = Math.sin(o) / 1.1;
    for (let o = 10; o < r; o++) {
      if ((o + i * 3 + a * 5) % 12 >= 5) continue;
      let l = o / r;
      N(e, t + s * o, n + c * o, l < 0.4 ? G[3] : l < 0.75 ? G[2] : G[1]);
    }
  }
  for (let a = 0; a < 12; a++) {
    let o = L(a, 32) * Math.PI * 2,
      s = r * (1 - ((i / 4 + L(a, 33)) % 1));
    N(e, t + Math.cos(o) * s, n + (Math.sin(o) * s) / 1.1, JS[3]);
  }
  (lC(e, t, n, 32, 32 / 1.1, G[3], { stub: G[2], seed: 34 }),
    N(e, t - 9, n - 2, G[3], 18, 1),
    N(e, t - 9, n + 2, G[3], 18, 1),
    N(e, t - 9, n - 2, G[3], 1, 5),
    N(e, t + 8, n - 2, G[3], 1, 5),
    N(e, t - 7, n, i % 2 ? G[4] : G[3], 14, 1));
}
var KC = () =>
    R(`dk-shoulder`, 4, 14, 16, (e, t) => {
      if ((e.drawImage($h(), 36, 25, 14, 16, 0, 0, 14, 16), t === 0)) {
        (N(e, 6, 4, `#e6f4ff`, 1, 2), N(e, 5, 6, `#9fb7d6`, 3, 1));
        return;
      }
      let n = [0, 5, 10, 14][t];
      for (let t = 1; t < 15; t++) {
        let r = n - (Math.floor(t / 4) % 2) * 2;
        r <= 0 ||
          (N(e, 0, t, t % 10 == 0 ? QS.wall : QS.black, r, 1),
          N(e, r - 1, t, QS.rim, 1, 1));
      }
      t === 3 && N(e, 7, 7, G[2]);
    }),
  qC = (e) => e.sort((e, t) => e.y - t.y).forEach((e) => e.draw());
function JC(e, t, n, r, i) {
  return fC(e, t, n, r, 0.35).filter((e) => !i(e));
}
function YC() {
  let [e, t] = Tm(240, 192, `stone`, 13),
    n = M(240, 192),
    r = JC(13, 9, 17, 0.8, (e) =>
      e.v ? e.x >= 5 && e.x <= 8 && e.y <= 4 : e.x >= 4 && e.x <= 8 && e.y <= 4,
    ),
    i = r
      .map((e, t) => ({ e, i: t }))
      .filter(({ e }) => e.y >= 5 && e.y <= 8)
      .sort((e, t) => L(e.i, 77) - L(t.i, 77)),
    a = i.find(({ e }) => !e.v && e.x >= 7).i,
    o = i.filter(({ i: e }) => e !== a).map(({ i: e }) => e),
    s = new Set([a, o[0], o[1]]),
    c = o[2],
    l = o[3],
    u = [],
    d = new Map();
  r.forEach((e, r) => {
    let i = 16 + e.x * mC,
      a = 32 + e.y * mC,
      o = e.v ? i : i + mC,
      f = e.v ? a + mC : a;
    if (s.has(r)) {
      (bC(t, i, a, o, f, 0.9, 2), bC(n[1], i, a, o, f, 0.9, 2));
      return;
    }
    let p = r === l ? 5 : r === c ? 9 : pC,
      m =
        r === l
          ? { dark: !0, cracks: 1, fx: n[1] }
          : r === c
            ? { heat: 1, fx: n[1] }
            : { fx: n[1] };
    e.v
      ? u.push({ y: a + mC, draw: () => vC(t, i, a, mC, p, r, m) })
      : u.push({ y: a + 2, draw: () => _C(t, i, a, mC, p, r, m) });
    for (let [e, t] of [
      [i, a],
      [o, f],
    ]) {
      let n = `${e},${t}`,
        r = d.get(n);
      (!r || r.h < p) && d.set(n, { h: p, o: m });
    }
  });
  for (let [e, n] of d) {
    let [r, i] = e.split(`,`).map(Number);
    u.push({ y: i + 2.1, draw: () => yC(t, r, i, n.h, n.o) });
  }
  u.push({ y: 92, draw: () => oC(t, 120, 92, { t: 0.9, aura: 0.55 }) });
  let f = r[a],
    p = 16 + f.x * mC + 13,
    m = 32 + f.y * mC + 1;
  u.push({ y: m, draw: () => sC(t, `storm`, p, m, 3, 2) });
  let h = XC(r, 13, 9),
    [g, _] = h ? [16 + h[0] * mC + 8, 32 + h[1] * mC + 12] : [40, 170];
  return (
    u.push({ y: _, draw: () => sC(t, `pyro`, g, _, 2) }),
    qC(u),
    bm(t, n[0], 0, 0, 3, 0.8),
    Dm(t, 240, 192, 0.45),
    e
  );
}
function XC(e, t, n) {
  let r = (t, n, r) => e.some((e) => e.x === t && e.y === n && e.v === r);
  for (let e = n - 2; e >= 5; e--)
    for (let n = 0; n < t / 2; n++)
      if (!r(n, e + 1, !1) && r(n, e, !1) && r(n, e, !0) && r(n + 1, e, !0))
        return [n, e];
  return null;
}
function ZC() {
  let [e, t] = Tm(240, 176, `stone`, 19),
    n = DC()[5];
  t.drawImage(n, 106, 78);
  let r = [];
  (r.push({ y: 92, draw: () => oC(t, 56, 92, { t: 2.1 }) }),
    r.push({ y: 138, draw: () => sC(t, `cryo`, 184, 138, 2, 3) }),
    r.push({ y: 166, draw: () => sC(t, `pyro`, 98, 166, 2) }),
    qC(r));
  let i = [];
  for (let e = 0; e < 9; e++) {
    let t = 0.06 + e * 0.105,
      n = Math.sin(t * Math.PI) * 14,
      r = 190 + -38 * cm(t) - n * 0.3,
      a = 116 + 0 * t - n,
      o = t < 0.35 ? qS[3] : t < 0.5 ? G[4] : t < 0.8 ? G[3] : G[2];
    i.push([r, a, o, t < 0.5 ? 2 : 1]);
  }
  (Dm(t, 240, 176, 0.55),
    t.save(),
    (t.globalAlpha = 0.35),
    P(t, 152, 120, 38, EC / 1.1 - 2, `#000000`),
    t.restore(),
    ym(t, 152, 114, 10, G[3], 0.6),
    ym(t, 190, 116, 10, qS[3], 0.6));
  for (let [e, n, r, a] of i)
    (N(t, e, n, r, a, a),
      ym(t, e, n, a === 2 ? 5 : 3, r === qS[3] ? qS[3] : G[3], 0.5));
  return e;
}
function QC() {
  let [e, t] = Tm(240, 180, `barrow`, 23),
    n = M(240, 180),
    r = [
      { x: 132, y: 84, s: `pattern` },
      { x: 182, y: 90, s: `risen` },
      { x: 148, y: 152, s: `denied` },
      { x: 212, y: 156, s: `rising` },
    ];
  for (let e of r)
    e.s === `denied`
      ? OC(t, e.x, e.y, 2, !0)
      : OC(t, e.x, e.y, e.s === `pattern` ? 3 : 5);
  let i = [],
    a = { x: 54, y: 33 };
  i.push({ y: 104, draw: () => oC(t, 54, 104, { t: 1.3 }) });
  let o = $g(`feverhusk`);
  (i.push({
    y: r[0].y,
    draw: () => t.drawImage(o[1], r[0].x - 10, r[0].y - 23),
  }),
    i.push({
      y: r[3].y,
      draw: () => t.drawImage(o[2], r[3].x - 10, r[3].y - 23),
    }));
  let s = xh(`recalled`);
  (i.push({
    y: r[1].y,
    draw: () => Em(t, s.frames[1], s.ax + 1, s.ay + 1, r[1].x, r[1].y, 6),
  }),
    i.push({ y: r[2].y, draw: () => sC(t, `cryo`, r[2].x, r[2].y + 1, 3) }),
    i.push({ y: 168, draw: () => sC(t, `pyro`, 104, 168, 2, 6) }),
    qC(i));
  let c = (e, t) => {
    let r = a.x + 17,
      i = a.y - 4,
      o = e.x;
    (dm(n[1], r, i, o, i, G[2], 3, 1),
      dm(n[1], o, i, o, t, G[2], 3, 1),
      N(n[1], o - 1, i - 1, G[3], 3, 3));
  };
  (c(r[0], 30),
    c(r[3], 104),
    kC(n[1], r[0].x, 66, 30, 0, 12),
    kC(n[1], r[3].x, 140, 30, 1, 12),
    jC(n[1], o[1], r[0].x - 10, r[0].y - 23, 60, 68),
    jC(n[1], o[2], r[3].x - 10, r[3].y - 23, 140, 146));
  let l = NC()[2];
  return (
    n[1].drawImage(l, r[1].x - 5, r[1].y - 32),
    bm(t, n[0], 0, 0, 3, 0.85),
    t.drawImage(n[0], 0, 0),
    Dm(t, 240, 180, 0.5),
    e
  );
}
function $C() {
  let [e, t] = Tm(240, 192, `stone`, 29),
    n = M(240, 192),
    r = 0.25,
    i = [
      { s: `pyro`, x: 34, y: 150, i: 3 },
      { s: `cryo`, x: 92, y: 176, i: 2 },
      { s: `storm`, x: 168, y: 172, i: 1 },
      { s: `void`, x: 222, y: 150, i: 0, cut: !0 },
    ],
    a = i.filter((e) => !e.cut).map((e) => e.i),
    o = [];
  o.push({
    y: 96,
    draw: () =>
      oC(t, 120, 96, {
        t: r,
        aura: 0.5,
        hot: (e) => (a.includes(e) ? 0.9 : 0),
      }),
  });
  for (let e = 0; e < 3; e++)
    (o.push({
      y: 96 + (e + 1) * mC,
      draw: () => vC(t, 192, 96 + e * mC, mC, pC, 3 + e, { fx: n[1] }),
    }),
      o.push({
        y: 96 + e * mC + 2.1,
        draw: () => yC(t, 192, 96 + e * mC, pC, { fx: n[1] }),
      }));
  o.push({ y: 146.1, draw: () => yC(t, 192, 144, pC, { fx: n[1] }) });
  for (let e of i)
    o.push({ y: e.y, draw: () => sC(t, e.s, e.x, e.y, e.x < 120 ? 2 : 3) });
  qC(o);
  let s = PC();
  for (let e of i) {
    let i = iC(e.i, r),
      a = 120 + i.x,
      o = 25 + i.y + 2,
      c = e.x,
      l = e.y - 14;
    if (e.cut) {
      let e = (195 - c) / (a - c);
      FC(n[1], c, l, c + (a - c) * e, l + (o - l) * e, 1, { beads: !1 });
      let r = zC()[2];
      (t.save(),
        t.translate(192, l + (o - l) * e),
        t.rotate(Math.atan2(o - l, a - c)),
        t.drawImage(r, -17, -6),
        t.restore());
      continue;
    }
    (FC(n[1], c, l, a, o, 2 + e.i),
      t.drawImage(s[4], e.x - 9, e.y - 42),
      z(t, c - 2, l - 2, c + 2, l - 2, G[3]),
      z(t, c - 2, l + 2, c + 2, l + 2, G[3]),
      z(t, c - 2, l - 2, c - 2, l + 2, G[3]),
      z(t, c + 2, l - 2, c + 2, l + 2, G[3]),
      N(t, c - 2, l - 2, G[4]),
      N(t, c + 2, l + 2, G[4]));
  }
  return (
    bm(t, n[0], 0, 0, 3, 0.9),
    t.drawImage(n[0], 0, 0),
    aC(t, 120, 25, r, `front`, { hot: (e) => (a.includes(e) ? 0.9 : 0) }),
    ym(t, 120, 21, 26, G[3], 0.7),
    Dm(t, 240, 192, 0.45),
    e
  );
}
function ew() {
  let [e, t] = Tm(240, 192, `void`, 31),
    n = M(240, 192);
  GC(t, 150, 122, UC, 2);
  let r = HC();
  (t.drawImage(r[3], 177, 140), t.drawImage(r[4], 67, 138));
  let i = [],
    a = { x: 0, y: 0 };
  (i.push({
    y: 150,
    draw: () => {
      let e = oC(t, 50, 150, { flip: !0, t: 2.6, aura: 0.6 });
      a = { x: e.handX, y: e.handY };
      let n = Ip(KC()[3]);
      t.drawImage(n, e.ox + 66 - 36 - 14, e.oy + 25);
    },
  }),
    i.push({ y: 158, draw: () => _C(t, 128, 156, mC, pC, 4, { fx: n[1] }) }),
    i.push({ y: 158, draw: () => _C(t, 144, 156, mC, pC, 5, { fx: n[1] }) }));
  for (let e of [128, 144, 160])
    i.push({ y: 158.1, draw: () => yC(t, e, 156, pC, { fx: n[1] }) });
  (i.push({ y: 182, draw: () => sC(t, `cryo`, 146, 182, 0) }),
    i.push({ y: 116, draw: () => sC(t, `storm`, 214, 116, 2, 3) }),
    qC(i));
  for (let e = 0; e < 3; e++)
    dm(t, 222 + e * 4, 108 + e * 3, 236 + e * 4, 108 + e * 3, G[2], 2, 2, e);
  let o = BC()[5];
  n[1].drawImage(o, 122, 20);
  for (let e = 0; e < 4; e++) {
    let t = 166 + e * 11,
      r = 40 + e * 7;
    SC(
      n[1],
      t,
      r,
      [3, 8, 11, 6][e],
      e < 2 ? XS[4] : e === 2 ? G[3] : G[2],
      e < 2 ? qS[2] : void 0,
    );
  }
  return (
    SC(n[1], 120, 64, 9, XS[4], qS[2]),
    SC(n[1], 112, 76, 2, G[3]),
    bm(t, n[0], 0, 0, 5, 0.9),
    t.drawImage(n[0], 0, 0),
    ym(t, 150, 58, 34, G[3], 0.5),
    xm(t, o, 122, 20, 0.15),
    ym(t, a.x, a.y, 6, G[2], 0.3),
    Dm(t, 240, 192, 0.5),
    e
  );
}
