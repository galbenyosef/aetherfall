// index-BTsv3a2s 89 — math
// Lines 46835-46984 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Iw() {
  let [e, t] = Tm(240, 168, `grass`, 3),
    n = xh(`golem`),
    r = 120 - n.ax + 18.5,
    i = 92 - n.ay + 20,
    a = M(240, 168),
    o = 0.17;
  return (
    lw(a[1], r, i, 8, 220, o, 6, rw, 2, 1, { facets: 8, from: 5 }),
    bm(t, a[0], 0, 0, 4, 0.55),
    t.drawImage(a[0], 0, 0),
    Fw(t, `golem`, 120, 92, 1, rw, 2),
    ym(t, r, i, 12, rw[3], 0.7),
    V(t, r, i, 8, 5, rw, 3, o),
    Pw(t, `storm`, 176, 124, 2),
    e
  );
}
function Lw() {
  let [e, t] = Tm(240, 150, `stone`, 5),
    { cx: n, cy: r } = Fw(t, `golem`, 50, 96, 1, rw, 1),
    i = [
      [150, 46],
      [206, 82],
      [150, 122],
      [100, 82],
    ],
    a = M(240, 150);
  for (let e = 0; e < 4; e++) {
    let [t, n] = i[e],
      [r, o] = i[(e + 1) % 4];
    gm(a[1], t, n - 8, r, o - 8, 3.5, rw, e, { jitter: 1.2 });
  }
  (gm(a[1], n, r, i[3][0], i[3][1] - 8, 5, rw, 4, { facets: 6 }),
    dm(t, i[0][0], i[0][1] - 8, i[2][0], i[2][1] - 8, rw[2], 3, 2),
    bm(t, a[0], 0, 0, 4, 0.7),
    t.drawImage(a[0], 0, 0));
  let o = Cw(`ae`, rw);
  for (let [e, n] of i)
    (t.drawImage(o[4], e - 8, n - 22), ym(t, e, n - 8, 12, rw[3], 0.6));
  return (Pw(t, `cryo`, 150, 92, 3), e);
}
function Rw() {
  let [e, t] = Tm(200, 180, `ash`, 7),
    n = Vg(`golem`),
    r = M(200, 180);
  for (let e = -Math.PI / 2 - 0.5; e <= -Math.PI / 2 + 0.5; e += 0.012)
    for (let t = 20; t < 200; t += 1) {
      let n = 100 + Math.cos(e) * t,
        i = 134 + Math.sin(e) * t;
      (Math.round(t) + Math.round(e * 90)) % 7 == 0 && N(r[1], n, i, iw[2]);
    }
  (t.save(),
    (t.globalAlpha = 0.6),
    t.drawImage(r[0], 0, 0),
    t.restore(),
    Em(t, n.frames[2], n.ax, n.ay, 100, 156, 13));
  let i = 100 - n.ax + 18.5,
    a = 156 - n.ay + 20,
    o = M(200, 180),
    s = -Math.PI / 2 + 0.22;
  gm(o[1], i, a, i + Math.cos(s) * 240, a + Math.sin(s) * 240, 24, iw, 1, {
    jitter: 3,
  });
  for (let e = 6; e < 240; e += 12)
    for (let t = -5; t <= 5; t++)
      L(e, t, 1) > 0.45 &&
        N(
          o[1],
          i + Math.cos(s) * e - Math.sin(s) * t,
          a + Math.sin(s) * e + Math.cos(s) * t,
          t % 3 == 0 ? rw[4] : rw[3],
        );
  return (
    bm(t, o[0], 0, 0, 7, 0.9),
    t.drawImage(o[0], 0, 0),
    ym(t, i, a, 30, iw[3], 0.9),
    V(t, i, a, 10, 10, iw, 2),
    Pw(t, `pyro`, 36, 120, 2),
    Pw(t, `void`, 168, 70, 3),
    Dm(t, 200, 180, 0.5),
    e
  );
}
function zw() {
  let [e, t] = Tm(240, 168, `ash`, 9),
    n = Vg(`golem`),
    r = 120 - n.ax + 18.5,
    i = 92 - n.ay + 20,
    a = Dw();
  for (let e = 0; e < 8; e++) {
    let n = (e / 8) * Math.PI * 2 + 0.05;
    for (let e = 20; e < 200; e += 30) {
      let o = a[Math.min(3, Math.floor(e / 60))];
      (t.save(),
        t.translate(r + Math.cos(n) * e, i + 18 + Math.sin(n) * e),
        t.rotate(n),
        t.drawImage(o, -16, -6),
        t.restore());
    }
  }
  let o = M(240, 168);
  return (
    lw(o[1], r, i, 8, 220, 0.3, 6, iw, 1, 1, { jitter: 1.8, from: 5 }),
    bm(t, o[0], 0, 0, 4, 0.6),
    t.drawImage(o[0], 0, 0),
    Em(t, n.frames[0], n.ax, n.ay, 120, 92, 13),
    sw(t, r, i, 1, 0, iw, 1, !0),
    ym(t, r, i, 12, iw[3], 0.7),
    Pw(t, `cryo`, 70, 140, 2),
    Dm(t, 240, 168, 0.45),
    e
  );
}
function Bw() {
  let [e, t] = Tm(220, 168, `folly`, 11),
    n = Py(`tutor`),
    r = 110 - n.ax + 23,
    i = 104 - n.ay + 25,
    a = jw()[4];
  for (let e = 0; e < 4; e++)
    (t.save(),
      t.translate(r, i + 18),
      t.rotate((e * Math.PI) / 2 + Math.PI / 4),
      t.drawImage(a, 8, -6),
      t.restore());
  let o = M(220, 168);
  return (
    ow.forEach((e, t) => {
      let n = 0.35 + (t * Math.PI) / 2;
      gm(
        o[1],
        r + Math.cos(n) * 5,
        i + Math.sin(n) * 5,
        r + Math.cos(n) * 200,
        i + Math.sin(n) * 200,
        6,
        im[e],
        t,
        { jitter: 1 },
      );
    }),
    bm(t, o[0], 0, 0, 4, 0.6),
    t.drawImage(o[0], 0, 0),
    Em(t, n.frames[2], n.ax, n.ay, 110, 104, 15),
    ym(t, r, i, 10, `#ffffff`, 0.6),
    Pw(t, `storm`, 40, 150, 2),
    e
  );
}
