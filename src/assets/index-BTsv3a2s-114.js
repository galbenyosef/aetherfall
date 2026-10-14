// index-BTsv3a2s 114 — math
// Lines 53938-54075 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function ure() {
  let [e, t] = Tm(240, 186, `folly`, 29);
  (wk(t, 240, 28, 11),
    ek(t, `f_portrait`, 30, 28),
    ek(t, `f_writing`, 120, 28, 1),
    ek(t, `f_hands`, 176, 28),
    ek(t, `f_writing`, 216, 28, 2),
    ek(t, `f_drained`, 24, 174),
    ek(t, `f_smear`, 214, 170),
    ek(t, `f_arm`, 218, 98),
    ek(t, `f_hand`, 20, 104),
    ek(t, `f_bones`, 18, 50),
    ek(t, `f_head`, 226, 62));
  let n = QO(t, 120, 112, 72, { lit: 1, flare: 0.7, chase: 0.62, seed: 4 }),
    r = [0, 1, 2, 1, 0],
    i = [0, 6, 3, 1, 4],
    a = (e) => [Math.round(n[e][0]), Math.round(n[e][1]) + 4],
    o = n.map((e, t) => Sk(...a(t), i[t])),
    s = (e) => Ck(t, r[e], ...a(e), i[e], e === 1),
    c = n[4],
    l = { x: 121, y: 87 };
  (s(2), s(3));
  let u = M(240, 186),
    d = u[1],
    f = { x: 152, y: 118 };
  (n.forEach((e, t) => {
    if (t === 0 || t === 1) return;
    let n = o[t];
    if (t === 4) {
      let e = 0.4,
        t = 0.6;
      (GO(d, l.x, l.y, n.x, n.y, 0.3, { gap: 8, big: !0, to: e }),
        GO(d, l.x, l.y, n.x, n.y, 0.3, { gap: 8, big: !0, from: t }),
        Ok(d, l.x, l.y, n.x, n.y, e, t, 3, 5));
      return;
    }
    GO(d, l.x, l.y, n.x, n.y, (t * 0.37) % 1, {
      gap: 8,
      big: !0,
      hot: t === 2,
      sag: -3,
    });
  }),
    bm(t, u[0], 0, 0, 3, 0.9),
    t.drawImage(u[0], 0, 0));
  let p = bk(t, 120, 112, 2);
  return (
    yk(t, `storm`, f.x, f.y, 3, 0),
    s(1),
    s(4),
    yk(t, `pyro`, 30, 140, 2, 6),
    s(0),
    Tk(
      t,
      240,
      186,
      (e) => {
        let t = o[4];
        (Ok(e, l.x, l.y, t.x, t.y, 0.4, 0.6, 3, 5),
          GO(e, l.x, l.y, o[0].x, o[0].y, 0.15, {
            gap: 8,
            big: !0,
            hot: !0,
            from: 0.32,
          }));
        let n = o[1];
        for (let t = 0; t < 14; t++)
          N(
            e,
            n.x + 2 + t,
            n.y + 13 - Math.min(t, 3) + Math.sin(t * 0.9) * 0.8,
            t < 4 ? K[2] : K[1],
          );
        for (let t = 0; t < 4; t++)
          N(e, n.x - 2 + t * 2, n.y - 10 - t * 3, IO[3 + (t % 2)]);
        (N(e, c[0] - 6, c[1] - 28, `#1a0408`, 12, 2),
          N(e, c[0] - 6, c[1] - 28, IO[3], 8, 2),
          B(e, l.x, l.y, 9, 8, K[3], (e) => Math.round(e * 6) % 2 == 0),
          Dk(e, l.x, l.y, !0));
      },
      2,
      0.8,
    ),
    xk(t, p.throat, !0),
    ym(t, l.x, l.y, 28, K[3], 0.6),
    n.forEach(([e, n], r) => ym(t, e, n, 12, K[3], r === 1 ? 0.15 : 0.45)),
    ym(t, f.x, f.y - 14, 10, IO[3], 0.35),
    Dm(t, 240, 186, 0.45),
    e
  );
}
function dre() {
  let [e, t] = Tm(240, 182, `folly`, 31);
  (wk(t, 240, 28, 13),
    ek(t, `f_writing`, 28, 28, 0),
    ek(t, `f_portrait`, 90, 28),
    ek(t, `f_writing`, 212, 28, 2),
    ek(t, `f_drained`, 26, 166),
    ek(t, `f_bones`, 104, 58),
    ek(t, `f_pool`, 70, 150),
    ek(t, `f_candles`, 22, 56, 3),
    $O(t, 164, 132, 50, 1, 3));
  let n = bk(t, 50, 108, 2);
  return (
    yk(t, `pyro`, 140, 130, 1, 0),
    yk(t, `cryo`, 190, 134, 1, 0),
    yk(t, `storm`, 165, 156, 1, 0),
    Tk(
      t,
      240,
      182,
      (e) => {
        for (let t = 0; t < 14; t++) {
          let r = t / 14;
          XO(
            e,
            om(n.hand.x + 4, 112, r),
            om(n.hand.y, 126, r) - Math.sin(r * Math.PI) * 16,
            t + 900,
            t % 4 == 0 ? K[4] : K[3],
          );
        }
        (gm(e, 164, -6, 164, 106, 12, RO, 1, { jitter: 2 }),
          B(e, 164, 106, 14, 6, FO));
      },
      4,
      0.9,
    ),
    t.drawImage(Ry(!0, 1), 157, 92),
    rk(t, Ry(!0, 1), 150, 92, 0.3, 5, 3),
    rk(t, Ry(!0, 2), 179, 96, 0.45, 9, 3),
    xk(t, n.throat, !0),
    ym(t, n.hand.x, n.hand.y, 14, K[3], 0.7),
    ym(t, 164, 98, 24, `#7ef9ff`, 0.35),
    Dm(t, 240, 182, 0.5),
    e
  );
}
