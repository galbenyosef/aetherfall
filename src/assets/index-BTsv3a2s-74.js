// index-BTsv3a2s 74 — math
// Lines 41895-42110 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Sx(e, t, n, r) {
  let i = Math.round(t - 7),
    a = Math.round(n - 3);
  for (let t = 0; t < 6; t++)
    P(
      e,
      i + 1 + t * 2.6,
      a - 2 + L(t, r) * 1.2,
      2 + L(t, r, 1) * 1.2,
      1.5,
      t % 2 ? $y[3] : $y[2],
    );
  for (let t = 0; t < 4; t++) N(e, i + 2 + t * 3.5, a - 3 + (t % 2), $y[4]);
  for (let t = 0; t < 4; t++)
    N(e, i - 2 + L(t, r, 2) * 18, a + 9 + L(t, r, 3) * 3, $y[3], 2, 1);
  (N(e, i, a, $y[2], 14, 2),
    N(e, i, a + 2, $y[1], 14, 1),
    N(e, i, a + 3, $y[0], 14, 5),
    N(e, i, a, $y[1], 1, 8),
    N(e, i + 13, a, $y[1], 1, 8),
    N(e, i, a + 8, $y[3], 14, 1),
    L(r, 1) > 0.4 && N(e, i + 3 + Math.floor(L(r, 2) * 6), a + 5, Zy[2], 3, 1));
}
function Cx(e, t, n, r) {
  let i = rm.ember;
  for (let a = 0; a < 4; a++) {
    let o = t + 2 + a * 2.5,
      s = 5 + L(a, r) * 6;
    (fm(
      e,
      [
        [o - 2, n + 10],
        [o + 2, n + 10],
        [o, n + 10 - s],
      ],
      i[2],
    ),
      fm(
        e,
        [
          [o - 1, n + 10],
          [o + 1, n + 10],
          [o, n + 10 - s * 0.6],
        ],
        i[3],
      ));
  }
  _m(e, t + 6, n + 4, 0.5, 8, 8, i, r, -0.5);
}
function wx(e, t, n, r, i, a, o) {
  let [s, c] = M(t.width, t.height);
  (c.drawImage(t, 0, o),
    c.clearRect(0, r, t.width, t.height - r),
    e.drawImage(s, Math.round(i - n), Math.round(a - r)),
    P(e, i, a, 7, 2, $y[2]),
    P(e, i - 1, a - 0.5, 4.5, 1.2, $y[3]));
}
function Tx(e, t, n, r, i = !1) {
  let a = Py(`fenn`);
  Em(e, (i ? a.flipped : a.frames)[r], a.ax, a.ay, t, n, 8);
}
function Ex(e, t, n, r) {
  let i = Py(`standard`);
  return (
    Em(e, i.frames[r], i.ax, i.ay, t, n, 4),
    { fx: t - i.ax + 6, fy: n - i.ay + 3 }
  );
}
function Dx() {
  let [e, t] = Tm(240, 168, `barrow`, 3);
  for (let [e, n, r] of [
    [157, 30, 1],
    [183, 30, 2],
    [209, 30, 3],
    [26, 34, 4],
    [206, 100, 5],
  ])
    Sx(t, e, n, r);
  let n = lx()[4];
  xm(t, n, 24, 52, 0.9);
  let r = [
      [172, 132, 0],
      [140, 66, 2],
      [34, 144, 1],
    ],
    i = M(240, 168);
  for (let [e, t] of r)
    for (let n = 0; n < 1; n += 0.004) {
      let r = 74 + (e - 74) * n,
        a = 96 + (t - 4 - 98 + 2) * n - Math.sin(n * Math.PI) * 10;
      (N(i[1], r, a, Qy[2]),
        Math.floor(n * 250) % 10 == 0 && N(i[1], r, a - 1, Qy[4], 1, 3));
    }
  (bm(t, i[0], 0, 0, 3, 0.8), t.drawImage(i[0], 0, 0));
  let a = $g(`barrowhusk`);
  for (let [e, n, i] of r)
    (ex(t, e - 9, n, e + 9, n + 1, 0.8, e), t.drawImage(a[i], e - 11, n - 23));
  let o = dx()[5];
  t.drawImage(o, 156, 102);
  let { fx: s, fy: c } = Ex(t, 74, 98, 1);
  return (
    Tx(t, 114, 100, 0),
    nx(t, s, c, 1, !0),
    ym(t, s, c, 8, rb[3], 0.5),
    ym(t, 74, 96, 22, Qy[3], 0.5),
    Sx(t, 214, 146, 6),
    Cx(t, 207, 141, 2),
    Vb(t, `pyro`, 192, 162, 2, !0),
    ym(t, 214, 146, 22, rm.ember[3], 0.7),
    Vb(t, `cryo`, 112, 152, 1, !0),
    Dm(t, 240, 168, 0.6),
    e
  );
}
function Ox() {
  let [e, t] = Tm(240, 160, `barrow`, 7);
  (Sx(t, 40, 30, 1), Sx(t, 26, 142, 2));
  let n = Ey(`b_candles`, { frame: 1 });
  t.drawImage(n.c, 212 - n.ax, 34 - n.ay);
  let r = { x: 125, y: 101 },
    i = Math.atan2(102, 14) + Math.PI / 2,
    a = Math.cos(i),
    o = Math.sin(i),
    s = M(240, 160);
  for (let e = -40; e <= 40; e += 0.5)
    for (let t = -10; t <= 10; t += 0.5)
      N(s[1], r.x + a * e - o * t, r.y + o * e + a * t, Qy[1]);
  (t.save(), (t.globalAlpha = 0.35), t.drawImage(s[0], 0, 0), t.restore());
  for (let e = -36; e <= 36; e += 12)
    (Jb(t, r.x + a * e - o * 12, r.y + o * e + a * 12, i, Qy[3], Qy[4], 4, 3),
      Jb(
        t,
        r.x + a * (e + 6) + o * 12,
        r.y + o * (e + 6) - a * 12,
        i,
        Qy[3],
        Qy[4],
        4,
        3,
      ));
  Tx(t, 118, 48, 2);
  let c = [];
  for (let e = -36; e <= 36; e += 8)
    c.push({ s: e, x: r.x + a * e, y: r.y + o * e });
  c.sort((e, t) => e.y - t.y);
  let l = Py(`pikehusk`);
  for (let e of c)
    if ([-28, -4, 20].some((t) => Math.abs(e.s - t) < 4))
      (ex(t, e.x - 7, e.y + 1, e.x + 7, e.y + 2, 0.8, e.s + 70),
        wx(
          t,
          l.flipped[0],
          l.frames[0].width - l.ax,
          l.ay,
          e.x,
          e.y,
          Math.round(7 + L(e.s, 1) * 5),
        ));
    else {
      ex(t, e.x - 3, e.y, e.x + 3, e.y, 1, e.s + 90);
      let n = M(12, 50);
      ($b(n[1], 5, 46, 30 + L(e.s, 2) * 6, 1, 0.15, e.s),
        bm(t, n[0], e.x - 5, e.y - 46, 2, 0.5),
        t.drawImage(n[0], Math.round(e.x - 5), Math.round(e.y - 46)));
    }
  return (
    Vb(t, `storm`, 132, 150, 1, !0),
    Vb(t, `pyro`, 34, 104, 2),
    Vb(t, `void`, 214, 96, 3),
    Dm(t, 240, 160, 0.55),
    ym(t, 212, 28, 26, tb[3], 0.55),
    e
  );
}
function kx() {
  let [e, t] = Tm(240, 168, `barrow`, 11),
    n = [];
  for (let e of [88, 136]) for (let t of [37, 89, 145, 197]) n.push([t, e]);
  n.forEach(([e, n], r) => Sx(t, e, n, r + 1));
  let [r, i] = n[0];
  for (let e = i; e < i + 5; e++)
    for (let n = r - 7; n < r + 7; n++)
      (n + e) % 2 == 0 && N(t, n, e, `#1c1a1e`);
  for (let e = 0; e < 4; e++)
    N(t, r - 5 + e * 3, i + 1 + (e % 2) * 2, rm.ember[2 + (e % 2)]);
  let a = M(108, 98);
  (tx(a[1], 54, 49, 40, 1, 2), t.drawImage(a[0], 6, -9));
  let o = $g(`barrowhusk`),
    s = bx(),
    c = xx(),
    l = (e) => ({ x: n[e][0], y: n[e][1] }),
    u = l(1);
  t.drawImage(s[4], u.x - 17, u.y - 16);
  let d = l(2);
  (t.drawImage(s[5], d.x - 17, d.y - 16),
    t.drawImage(c[3], d.x - 14, d.y + 3 - 26));
  let f = l(5);
  (ex(t, f.x - 8, f.y + 3, f.x + 8, f.y + 4, 1, 4),
    t.drawImage(o[2], f.x - 11, f.y + 4 - 23));
  let p = l(7);
  (ex(t, p.x - 8, p.y + 3, p.x + 8, p.y + 4, 1, 5),
    t.drawImage(o[1], p.x - 11, p.y + 4 - 23));
  for (let e of [u, d, f, p]) ym(t, e.x, e.y, 16, Qy[3], 0.6);
  let { fx: m, fy: h } = Ex(t, 60, 40, 2);
  (nx(t, m, h, 2), ym(t, 60, 40, 34, tb[3], 0.3), Tx(t, 112, 46, 0));
  let g = Ey(`b_candles`, { frame: 2 });
  return (
    t.drawImage(g.c, n[4][0] - 14 - g.ax, n[4][1] + 2 - g.ay),
    Vb(t, `pyro`, 118, 116, 3, !0),
    Vb(t, `storm`, 222, 112, 3),
    Dm(t, 240, 168, 0.6),
    ym(t, n[4][0] - 14, n[4][1] - 6, 24, tb[3], 0.55),
    ym(t, r, i + 2, 10, rm.ember[2], 0.4),
    e
  );
}
