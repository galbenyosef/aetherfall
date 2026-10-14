// index-BTsv3a2s 81 — math
// Lines 44196-44499 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function US(e, t) {
  let n = 1e9;
  for (let r of HS)
    for (let i = 0; i + 1 < r.length; i++) {
      let [a, o] = r[i],
        [s, c] = r[i + 1],
        l = (s - a) ** 2 + (c - o) ** 2,
        u = am(((e - a) * (s - a) + (t - o) * (c - o)) / Math.max(0.01, l));
      n = Math.min(n, Math.hypot(e - (a + (s - a) * u), t - (o + (c - o) * u)));
    }
  return n;
}
var Vte = () =>
    R(`kiln-lavawarn`, 4, 32, 32, (e, t) => {
      let n = [zx[0], zx[1], zx[2], zx[3]][t];
      for (let r of HS) {
        for (let i = 0; i + 1 < r.length; i++)
          (z(e, r[i][0], r[i][1], r[i + 1][0], r[i + 1][1], n),
            t >= 2 &&
              z(
                e,
                r[i][0],
                r[i][1] + 1,
                r[i + 1][0],
                r[i + 1][1] + 1,
                zx[t - 1],
              ));
        if (t === 3)
          for (let [t, n] of r.slice(1, -1)) P(e, t, n, 1.4, 1.2, zx[3]);
      }
      for (let n = 0; n < t * 3; n++) {
        let r = 2 + L(n, 5) * 28,
          i = 4 + L(n, 6) * 24 - ((t * 3) % 4);
        (N(e, r, i, Ix[1]), N(e, r + 1, i - 2, Ix[1]));
      }
    }),
  Hte = () =>
    R(`kiln-lavaflood`, 6, 32, 32, (e, t) => {
      let n = [0.6, 2.5, 5, 9, 16, 99][t];
      for (let r = 0; r < 32; r++)
        for (let i = 0; i < 32; i++) {
          let a = US(i + 0.5, r + 0.5) + L(i, r, 7) * 1.2;
          if (a > n) continue;
          let o = n - a < 1.2 && t < 5;
          N(e, i, r, o ? Kx[5] : MS(i, r, t % 4, !0));
        }
    }),
  Ute = () =>
    R(`kiln-lavasurface`, 4, 32, 32, (e, t) =>
      NS(e, 0, 0, 32, 32, t, void 0, !0),
    ),
  Wte = () =>
    R(`kiln-shore`, 4, 48, 20, (e, t) => {
      let n = (e) =>
        9 +
        Math.round(
          Math.sin(e * 0.35) * 1.2 + (L(Math.floor(e / 7), 3) - 0.5) * 2,
        );
      for (let r = 0; r < 48; r++) {
        let i = n(r);
        for (let n = i; n < 20; n++) N(e, r, n, MS(r, n, t));
        let a = Math.max(
          0,
          Math.round(Math.sin(r * 0.5 - (Math.PI / 2) * t) * 1.5),
        );
        (N(e, r, i - a, zx[4]), a > 0 && N(e, r, i - a + 1, zx[3], 1, a));
      }
      FS(e, 24, -2, 34, 9, 4, { rim: zx[2] });
      for (let r = 0; r < 48; r++) L(r, t) > 0.92 && N(e, r, n(r) - 3, Ix[3]);
    }),
  WS = () =>
    R(`kiln-bubble`, 5, 12, 12, (e, t) => {
      (t === 0 && P(e, 6, 8, 2, 1.4, zx[3]),
        t === 1 && (P(e, 6, 7, 3, 2.6, zx[3]), N(e, 5, 5, zx[4], 2, 1)),
        t === 2 &&
          (P(e, 6, 7, 4, 3.4, zx[3]),
          P(e, 6, 7, 2.4, 2, zx[1]),
          N(e, 4, 4, zx[4], 2, 1)),
        t === 3 &&
          (B(e, 6, 8, 4, 2, zx[3]),
          _m(e, 6, 6, 0.5, 6, 6, zx, 2, 0.6),
          N(e, 6, 2, zx[4])),
        t === 4 &&
          B(e, 6, 8, 5, 2.4, zx[1], (e) => Math.round(e * 6) % 2 == 0));
    }),
  Gte = () =>
    R(`kiln-ebb`, 4, 32, 32, (e, t) => {
      for (let n = 0; n < 32; n++)
        for (let r = 0; r < 32; r++) {
          let i = US(r + 0.5, n + 0.5),
            a = [99, 5, 2, 0.8][t];
          if (i < a) {
            N(e, r, n, t === 0 ? MS(r, n, 1) : i < a * 0.4 ? zx[3] : zx[1]);
            continue;
          }
          let o = L(Math.floor(r / 5), Math.floor(n / 4), 3);
          N(
            e,
            r,
            n,
            t === 1 ? (o > 0.5 ? Vx[4] : zx[0]) : o > 0.5 ? Vx[3] : Vx[2],
          );
        }
    }),
  Kte = () =>
    R(`kiln-sink`, 6, 48, 36, (e, t) => {
      NS(e, 0, 0, 48, 36, t % 4);
      let n = [0, 0.15, 0.4, 0.65, 0.88, 1.1][t];
      if (
        (FS(e, 24, 15, 17, 9, 7, {
          seam: Rx[3],
          hot: t % 2 ? Rx[4] : Rx[3],
          seamAll: t >= 1,
          sunk: (e) => am((n - e * 0.6) / 0.4),
        }),
        t >= 2 && t <= 4)
      ) {
        for (let n = 0; n < 3; n++)
          vm(e, 14 + n * 10, 8 - t, 3 + (t - 2), `#45404f`, (t - 2) / 3, n);
        for (let n = 0; n < 5; n++)
          N(e, 10 + L(n, t) * 28, 10 + L(t, n) * 14, zx[4]);
      }
      t === 5 && B(e, 24, 17, 14, 6, zx[3], (e) => Math.round(e * 10) % 3 == 0);
    }),
  qte = () =>
    R(`kiln-return`, 4, 48, 36, (e, t) => {
      NS(e, 0, 0, 48, 36, (t + 2) % 4);
      let n = [0.85, 0.55, 0.2, 0][t];
      if (
        (FS(e, 24, 15, 17, 9, 7, {
          seam: t < 3 ? zx[3] : zx[1],
          seamAll: t < 2,
          sunk: (e) => am(n - (1 - e) * 0.3),
        }),
        t <= 2)
      ) {
        for (let t = 0; t < 8; t++)
          N(e, 10 + L(t, 3) * 28, 9 + L(t, 4) * 12, zx[3 + (t % 2)], 1, 2);
        vm(e, 24, 6, 4 + t, `#6a6474`, 0.3 + t * 0.25, 9);
      }
    });
function GS(e, t, n, r, i = !1) {
  let a = Py(`kilnmother`);
  return (
    Em(e, a.frames[r], a.ax, a.ay, t, n, i ? 0 : 22),
    i &&
      (NS(
        e,
        t - 24,
        n - 4,
        48,
        6,
        1,
        (e, r) => Math.hypot((e - t) / 24, (r - n + 1) / 3) < 1,
      ),
      B(e, t, n - 1, 22, 3, zx[4], (e) => Math.sin(e) > 0)),
    {
      gx: t - a.ax + 28,
      gy: n - a.ay + 30,
      mx: t - a.ax + 42,
      my: n - a.ay + 16,
    }
  );
}
function Jte() {
  let [e, t] = M(240, 168);
  NS(t, 0, 0, 240, 168, 1);
  let n = M(240, 168);
  (n[1].drawImage(e, 0, 0),
    bm(t, n[0], 0, 0, 4, 0.35),
    [
      [56, 52, 30, 16],
      [184, 44, 28, 15],
      [150, 132, 34, 17],
    ].forEach(([e, n, r, i], a) => {
      (FS(t, e, n, r, i, a + 3, { seam: zx[1], rim: `#ffffff` }),
        ym(t, e, n, r + 10, `#ffffff`, 0.18));
    }));
  for (let [e, n] of [
    [96, 28],
    [26, 120],
    [216, 104],
    [110, 154],
  ])
    t.drawImage(WS()[(e + n) % 5], e - 6, n - 8);
  let r = Py(`clutch`);
  (Em(t, r.frames[1], r.ax, r.ay, 192, 46, 6),
    t.drawImage(RS()[2], 176, 25),
    SS(t, `pyro`, 56, 56, 0, 0),
    SS(t, `cryo`, 140, 136, 2, 0),
    SS(t, `storm`, 164, 132, 3, 6));
  let i = GS(t, 92, 112, 1, !0);
  ym(t, i.gx, i.gy, 16, Ix[3], 0.5);
  let a = Vg(`imp`);
  return (
    Em(t, a.frames[1], a.ax, a.ay, 216, 80, 0),
    Sm(t, 216, 92, 5, 2, `#000000`, 0.4),
    Dm(t, 240, 168, 0.4),
    e
  );
}
function Yte() {
  let [e, t] = Tm(240, 160, `lava`, 31);
  (NS(t, 0, 0, 240, 22, 2, (e, t) => t < 16 + Math.sin(e * 0.12) * 4),
    FS(t, 200, 140, 40, 14, 9, { seam: zx[1] }));
  let n = GS(t, 70, 112, 2),
    r = n.gx + 6,
    i = n.gy,
    a = M(240, 160),
    o = jS(r, i, -0.08, 0.7, 56);
  ((a[1].globalAlpha = 0.14),
    fm(a[1], o, Rx[3]),
    (a[1].globalAlpha = 1),
    AS(a[1], o, 1),
    t.drawImage(a[0], 0, 0));
  let s = M(240, 160),
    c = VS()[2];
  (s[1].save(),
    s[1].translate(r - 3, i),
    s[1].rotate(-0.08),
    s[1].drawImage(c, 0, -32),
    s[1].restore(),
    bm(t, s[0], 0, 0, 3, 0.6),
    t.drawImage(s[0], 0, 0),
    t.drawImage(BS()[4], n.gx - 13, n.gy - 11),
    ym(t, n.gx, n.gy, 22, Ix[4], 0.6),
    ym(t, r + 20, i, 20, Rx[3], 0.35),
    SS(t, `storm`, 120, 60, 3, 6),
    SS(t, `void`, 36, 150, 1, 6));
  let l = M(240, 160);
  for (let e = 0; e < 22; e++)
    N(l[1], 112 - e * 1.2, 46 + e * 1.9, e > 16 ? rm.storm[4] : rm.storm[3]);
  return (
    bm(t, l[0], 0, 0, 2, 0.8),
    t.drawImage(l[0], 0, 0),
    Dm(t, 240, 160, 0.4),
    e
  );
}
function Xte() {
  let [e, t] = M(240, 160);
  NS(t, 0, 0, 240, 160, 3);
  let n = M(240, 160);
  (n[1].drawImage(e, 0, 0),
    bm(t, n[0], 0, 0, 4, 0.3),
    FS(t, 60, 124, 46, 26, 11, { seam: zx[1] }),
    FS(t, 184, 60, 32, 17, 12, { seam: zx[1] }),
    FS(t, 192, 136, 28, 14, 13, { seam: zx[1] }));
  let r = GS(t, 58, 126, 0),
    i = r.gx,
    a = r.gy - 4;
  for (let e = 0; e <= 40; e++) {
    let n = e / 40,
      r = i + (176 - i) * n,
      o = a + (58 - a) * n - Math.sin(n * Math.PI) * 52;
    e % 3 == 0 && N(t, r, o, Lx[3]);
  }
  t.drawImage(LS()[2], 109, 17);
  let o = M(240, 160);
  (AS(o[1], jte(176, 58, 9, 8, 24), 0.5), t.drawImage(o[0], 0, 0));
  let s = Py(`clutch`);
  (Em(t, s.frames[2], s.ax, s.ay, 196, 138, 6), t.drawImage(zS()[3], 184, 120));
  let c = xh(`imp`);
  return (
    Em(t, c.frames[0], c.ax, c.ay, 214, 128, 4),
    Em(t, c.frames[1], c.ax, c.ay, 178, 126, 4),
    ym(t, 196, 132, 16, Ix[3], 0.5),
    Em(t, s.frames[0], s.ax, s.ay, 196, 66, 6),
    t.drawImage(RS()[4], 180, 45),
    SS(t, `cryo`, 160, 72, 2, 6),
    Dm(t, 240, 160, 0.4),
    e
  );
}
function Zte() {
  let [e, t] = M(220, 150);
  NS(t, 0, 0, 220, 150, 0);
  let n = M(220, 150);
  (n[1].drawImage(e, 0, 0),
    bm(t, n[0], 0, 0, 4, 0.35),
    FS(t, 50, 44, 30, 16, 21, { seam: zx[1], rim: `#ffffff` }),
    FS(t, 166, 108, 34, 17, 22, { seam: zx[1], rim: `#ffffff` }),
    FS(t, 168, 38, 30, 15, 23, {
      seam: Rx[3],
      hot: Rx[4],
      seamAll: !0,
      sunk: (e) => am((0.3 - e * 0.6) / 0.4),
    }));
  let r = M(220, 150);
  for (let e = 0; e < 10; e++)
    N(r[1], 146 + L(e, 1) * 44, 30 + L(e, 2) * 18, e % 2 ? Rx[4] : Rx[3]);
  return (
    bm(t, r[0], 0, 0, 2, 0.8),
    t.drawImage(r[0], 0, 0),
    vm(t, 176, 26, 6, `#45404f`, 0.4, 3),
    SS(t, `pyro`, 50, 48, 0, 0),
    SS(t, `storm`, 158, 110, 1, 0),
    SS(t, `void`, 126, 76, 3, 2),
    dm(t, 160, 44, 132, 70, rm.void[3], 1, 2),
    GS(t, 70, 128, 1, !0),
    Dm(t, 220, 150, 0.4),
    e
  );
}
