// assets__index-BTsv3a2s 104 — math
// Lines 51114-51451 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var uO = () =>
    XE(
      `vesker-ring`,
      8,
      116,
      112,
      (e, t) => {
        if (t < 2) return;
        let n = t === 2 ? 10 : t <= 5 ? 17 : t === 6 ? 8 : 0;
        if (n === 0) return;
        let r = Array.from({ length: 12 }, (e, t) => {
            let n = (t / 12) * JE + 0.13;
            return {
              i: t,
              x: 58 + Math.cos(n) * 48,
              y: 62 + (Math.sin(n) * 48) / 1.1,
            };
          }),
          i = [...r].sort((e, t) => e.y - t.y);
        for (let a of i) {
          let i = r[(a.i + 1) % 12];
          (t >= 3 &&
            t <= 5 &&
            GD(e, a.x, a.y - n + 3, i.x, i.y - n + 3, {
              sag: [5, 6, 4][t - 3],
              weak: a.i % 4 == 1 ? [3] : [],
              phase: a.i,
            }),
            lO(e, Math.round(a.x), Math.round(a.y), n));
        }
      },
      (e, t) => {
        if (
          (t < 2 &&
            (e.save(),
            (e.globalAlpha = 0.25),
            pm(e, 58, 62, 44, 52, 1.1, () => qE[2]),
            e.restore(),
            YD(e, 58, 62, 48, (t + 1) / 2, 8, 0.13)),
          t === 2)
        )
          for (let t = 0; t < 12; t++) {
            let n = (t / 12) * JE + 0.13;
            _m(
              e,
              58 + Math.cos(n) * 48,
              62 + (Math.sin(n) * 48) / 1.1 - 4,
              0.4,
              5,
              8,
              KE,
              t,
              0.5,
            );
          }
        if (t >= 6)
          for (let n = 0; n < 12; n++) {
            let r = (n / 12) * JE + 0.13;
            JD(
              e,
              58 + Math.cos(r) * 48,
              62 + (Math.sin(r) * 48) / 1.1 - 2,
              3 + (t - 6) * 2,
              (t - 6) * 0.6,
              n,
            );
          }
        P(e, 58, 62, 2, 1.6, KE[2]);
      },
      HD,
      !1,
    ),
  dO = () =>
    XE(
      `vesker-post`,
      5,
      14,
      32,
      (e, t) => {
        let n = [0, 8, 20, 18, 18][t];
        n && lO(e, 7, 29, n);
      },
      (e, t) => {
        (t === 0 && (z(e, 2, 29, 12, 28, GE[2]), N(e, 7, 29, GE[3])),
          (t === 1 || t === 2) && _m(e, 7, 28, 0.3 + t * 0.2, 7, 7, KE, 3, 0.6),
          t >= 2 && JD(e, 7, 29, 3 + t, t / 5, t));
      },
      HD,
      !1,
    );
function fO(e, t, n, r) {
  (N(e, t - 1, n - 1, r, 3, 1),
    N(e, t - 1, n, r, 1, 2),
    N(e, t + 1, n, r, 1, 2));
}
function pO(e, t, n, r, i, a) {
  let o = (e) => ((e + Math.PI / 2 + JE) % JE) / JE <= i;
  (B(e, t, n, r, r / 1.1, KE[3], o),
    B(e, t, n, r - 5, (r - 5) / 1.1, KE[2], o));
  let s = Math.round(r / 3);
  for (let i = 0; i < s; i++) {
    let c = (i / s) * JE - Math.PI / 2;
    if (!o(c)) continue;
    let l = t + Math.cos(c) * (r - 2.5),
      u = n + (Math.sin(c) * (r - 2.5)) / 1.1,
      d = (i + 1) / s <= a;
    fO(e, l, u + 1, d ? GE[3] : KE[3]);
  }
}
function mO(e, t, n, r, i) {
  (B(
    e,
    t,
    n,
    6,
    2.4,
    BD[3],
    (e) => e > -Math.PI + (1 - r) * 2.2 || e < Math.PI - (1 - r) * 2.2,
  ),
    B(e, t, n + 1, 6, 2.4, BD[2], (e) => (e > 0 && e < Math.PI) || r > 0.9),
    i && UD(e, t - 8, n, 1, 0, GE, !0));
}
var hO = () =>
    XE(
      `vesker-rite`,
      8,
      124,
      112,
      (e, t) => {
        if (t < 2 || t > 6) return;
        let n = [
            [30, 30],
            [100, 50],
            [44, 92],
          ],
          r = t <= 2 ? 0 : (t - 2) / 5;
        n.forEach(([n, i], a) => {
          let o = om(n, 62, r * 0.55),
            s = om(i, 58, r * 0.55);
          (GD(e, 62, 58, o, s, {
            weak: [Math.round(Math.hypot(o - 62, s - 58) / 6)],
            phase: a,
            sag: 2,
          }),
            mO(e, o, s + 2, t === 2 ? 0.6 : 1, !1));
        });
      },
      (e, t) => {
        if (
          (t < 7 &&
            (e.save(),
            (e.globalAlpha = t === 0 ? 0.1 : 0.22),
            P(e, 62, 58, 56, 56 / 1.1, KE[1]),
            e.restore(),
            pO(e, 62, 58, 56, t === 0 ? 0.5 : 1, t <= 2 ? 0 : (t - 2) / 4)),
          B(
            e,
            62,
            58,
            32,
            29,
            t >= 5 ? GE[2] : KE[1],
            (e) => Math.round(e * 16) % 2 == 0,
          ),
          t === 6 &&
            (V(e, 62, 58, 12, 22, GE, 12),
            pm(e, 62, 58, 26, 34, 1.1, (e, t) =>
              L(Math.round(t * 30), 6) > 0.5 ? (e > 0.5 ? KE[3] : GE[3]) : null,
            )),
          t === 7)
        ) {
          for (let t = 0; t < 10; t++)
            JD(
              e,
              62 + (L(t, 7) - 0.5) * 50,
              58 + (L(t, 8) - 0.5) * 36,
              4 + L(t, 9) * 3,
              0.4,
              t,
            );
          pO(e, 62, 58, 30, 1, 1);
        }
        (P(e, 62, 58, 2.5, 2, GE[2]), N(e, 62, 58, GE[4]));
      },
      HD,
      !1,
    ),
  gO = () =>
    R(`vesker-shackle`, 4, 26, 12, (e, t) => {
      (GD(e, 0, 6, 9, 6, { phase: t }),
        mO(e, 16, 5, [0.3, 0.7, 1, 1][t], !1),
        t === 2 && V(e, 16, 5, 5, 4, BD, 2),
        t === 3 && UD(e, 4, 6, 1, 0, GE, !0));
    });
function _O(e, t, n) {
  let [r, i] = M(e.width, e.height);
  return (i.drawImage(e, 0, n), i.clearRect(0, t + 1, r.width, r.height), r);
}
function vO(e, t, n, r) {
  for (let i = 0; i < 6; i++) {
    let a = L(i, r) * t,
      o = L(i, r, 1) * n;
    (P(e, a, o, 10 + L(i, r, 2) * 10, 4 + L(i, r, 3) * 3, `#0f1a1c`),
      B(e, a, o, 8, 3, `#1e3234`, (e) => Math.round(e * 5) % 2 == 0));
  }
  for (let i = 0; i < 14; i++) {
    let a = Math.round(L(i, r, 4) * t),
      o = Math.round(L(i, r, 5) * n);
    (N(e, a, o - 4, `#2f4a2a`, 1, 4), N(e, a + 2, o - 3, `#3f5a34`, 1, 3));
  }
}
function yO() {
  let [e, t] = Tm(244, 180, `marsh`, 23);
  vO(t, 244, 180, 24);
  let n = M(244, 180);
  (V(n[1], 160, 75, 6, 5, GE, 3),
    t.save(),
    (t.globalAlpha = 0.2),
    P(t, 122, 102, 56, 51, KE[1]),
    t.restore(),
    pO(t, 122, 102, 56, 1, 0.6),
    B(t, 122, 102, 32, 29, KE[1], (e) => Math.round(e * 16) % 2 == 0));
  let r = Rg(`chainbound`);
  (t.drawImage(cO()[4], 141, 58),
    t.drawImage(_O(r.frames[0], r.ay, 12 - sO[4] - 3), 160 - r.ax, 88 - r.ay),
    Em(t, r.flipped[1], r.ax, r.ay, 84, 134, 6));
  let i = M(244, 180),
    [[a, o]] = GD(i[1], 118, 100, 74, 76, { mid: !0, sag: 3 });
  (mO(i[1], 74, 78, 1, !1), GD(i[1], 126, 101, 158, 126, { sag: 4 }));
  let s = iO()[2];
  (F(i[0], HD), t.drawImage(i[0], 0, 0));
  let c = ZE(t, `vesker`, 2, 122, 102);
  (QE(t, `cryo`, 74, 78, 2),
    t.drawImage(s, 149, 120),
    QE(t, `void`, 190, 134, 2, !0));
  let [l, u] = c(23, 14);
  (JD(t, l + 2, u - 6, 5, 0.3, 3), JD(t, l + 6, u - 13, 4, 0.6, 4));
  for (let e = 0; e < 6; e++)
    JD(
      t,
      122 + Math.cos(e * 1.1 + 0.4) * 58,
      102 + (Math.sin(e * 1.1 + 0.4) * 58) / 1.1 - 3,
      6,
      0.3,
      e + 9,
    );
  return (
    bm(t, n[0], 0, 0, 3, 0.8),
    t.drawImage(n[0], 0, 0),
    ym(t, l, u, 8, GE[3], 0.6),
    ym(t, 160, 74, 10, GE[3], 0.5),
    ym(t, 166, 128, 9, GE[3], 0.6),
    ym(t, a, o, 6, GE[3], 0.6),
    Dm(t, 244, 180, 0.45),
    e
  );
}
function bO() {
  let [e, t] = Tm(236, 156, `marsh`, 27);
  vO(t, 236, 156, 28);
  let n = $D()[3];
  (t.save(),
    (t.globalAlpha = 0.45),
    t.translate(178, 89),
    t.rotate(Math.PI + 0.12),
    t.drawImage(n, 0, -13),
    t.restore());
  let [r, i] = ZE(t, `vesker`, 0, 186, 92)(7, 27);
  for (let e = 0; e < 5; e++)
    JD(t, 66 - e * 7, 105 + (e % 2), 4 - e * 0.5, 0.2 + e * 0.15, e);
  let a = M(236, 156),
    [[o, s]] = GD(a[1], r, i, 84, 92, { mid: !0, sag: -2 });
  (KD(a[1], 80, 92, Math.PI - 0.12, 0), F(a[0], HD), t.drawImage(a[0], 0, 0));
  let c = M(236, 156);
  (qD(c[1], 80, 92, Math.PI - 0.12, 1),
    t.drawImage(c[0], 0, 0),
    QE(t, `pyro`, 76, 106, 2));
  let l = rO()[1];
  (t.drawImage(l, 64, 78), QE(t, `cryo`, 118, 48, 0, !0));
  let u = M(236, 156),
    d = Math.atan2(s - 36, o - 118);
  mm(u[1], om(118, o, 0.72), om(36, s, 0.72), d, 11, 5, WE);
  for (let e = 1; e < 8; e++)
    N(
      u[1],
      om(118, o, 0.66 - e * 0.06),
      om(36, s, 0.66 - e * 0.06),
      e < 3 ? WE[3] : WE[2],
    );
  return (
    bm(t, u[0], 0, 0, 3, 0.9),
    t.drawImage(u[0], 0, 0),
    ym(t, o, s, 8, GE[3], 0.7),
    Dm(t, 236, 156, 0.4),
    e
  );
}
function xO() {
  let [e, t] = Tm(236, 156, `marsh`, 31);
  (vO(t, 236, 156, 32),
    t.save(),
    (t.globalAlpha = 0.75),
    t.drawImage(oO()[3], 116, 64),
    t.restore());
  let n = Rg(`chainbound`),
    r = cO()[4];
  (t.drawImage(r, 115, 82),
    t.drawImage(_O(n.frames[0], n.ay, 12 - sO[4] - 3), 134 - n.ax, 112 - n.ay),
    t.drawImage(_O(n.flipped[0], n.ay, 14), 170 - n.ax, 86 - n.ay));
  let i = iO()[4];
  t.drawImage(i, 153, 68);
  let [a, o] = ZE(t, `vesker`, 2, 62, 100)(23, 14);
  for (let e = 0; e < 6; e++)
    JD(
      t,
      a + 6 + e * 11,
      o - 4 + e * 4 + Math.sin(e) * 3,
      3 + e * 0.8,
      0.15 + e * 0.05,
      e + 40,
    );
  let s = M(236, 156);
  return (
    V(s[1], 134, 99, 6, 5, GE, 2),
    bm(t, s[0], 0, 0, 3, 0.8),
    t.drawImage(s[0], 0, 0),
    ym(t, 134, 100, 12, GE[3], 0.6),
    ym(t, a, o, 7, GE[3], 0.6),
    ym(t, 170, 76, 7, GE[3], 0.5),
    QE(t, `pyro`, 206, 140, 3, !0),
    Dm(t, 236, 156, 0.45),
    e
  );
}
var SO = [`#020104`, `#07050c`, `#1c1630`, `#6a5a8a`, `#c8d0ff`],
  CO = `#9aa4d6`,
  wO = [`#2a1740`, `#d06bff`],
  TO = `#e6d9ff`;
