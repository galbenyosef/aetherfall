// index-BTsv3a2s 113 — math
// Lines 53635-53937 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function yk(e, t, n, r, i = 3, a = 0) {
  return (Em(e, dh(t).frames[i][a], 10, 26, n, r, 5), { x: n, y: r - 12 });
}
function bk(e, t, n, r) {
  return (
    Sm(e, t, n, 7, 2.5, `#000000`, 0.45),
    e.drawImage(Zh(`hollow`)[r], Math.round(t - 14), Math.round(n - 38 - 3)),
    {
      hand: { x: t + 6, y: n - 33 },
      chest: { x: t + 1, y: n - 25 },
      throat: { x: t + 1, y: n - 28 },
    }
  );
}
function xk(e, t, n) {
  (N(e, t.x - 1, t.y - 1, PO[2]),
    N(e, t.x - 1, t.y, n ? K[4] : K[3]),
    N(e, t.x, t.y + 1, n ? FO : K[3]),
    ym(e, t.x, t.y, 8, PO[3], n ? 0.7 : 0.4));
}
function Sk(e, t, n) {
  let r = [0, 0, 0, 1, 1, 1, 0, 0][n % 8];
  return { x: e + (n % 8 == 5 ? 1 : n % 8 == 6 ? -1 : 0), y: t - 14 + r };
}
function Ck(e, t, n, r, i, a = !1) {
  let o = [`f_kneeler_a`, `f_kneeler_b`, `f_kneeler_c`][t],
    s = ay(o, i);
  (Sm(e, n, r - 1, 8, 2.2, `#000000`, 0.4),
    e.drawImage(s.c, Math.round(n - s.ax), Math.round(r - s.ay)));
  let { x: c, y: l } = Sk(n, r, i);
  if (a) {
    let n = J_[t];
    (N(e, c - 1, l, n.shirt[1], 3, 2), N(e, c, l, PO[1]));
  } else ym(e, c, l, 7, K[3], 0.5);
  return { x: c, y: l };
}
function wk(e, t, n, r) {
  for (let i = 0; i < n; i++)
    for (let a = 0; a < t; a++) {
      let t = a % 32,
        o = L(a >> 1, i >> 1, r) < 0.5 ? `#2a070d` : `#300a10`;
      (i < 3
        ? (o = i === 2 ? `#3a0c14` : `#16030a`)
        : i >= n - 6 && i < n - 4
          ? (o = i === n - 6 ? `#9a7a2a` : `#6a4a14`)
          : i >= n - 4
            ? (o = i === n - 1 ? `#0e0206` : `#1a0408`)
            : i > 5 &&
              i < n - 9 &&
              t > 3 &&
              t < 29 &&
              (i === 6 || t === 4
                ? (o = `#521420`)
                : (i === n - 10 || t === 28) && (o = `#16030a`)),
        N(e, a, i, o));
    }
  for (let i = 0; i < t / 14; i++) {
    let a = Math.floor(L(i, r, 2) * t),
      o = 4 + Math.floor(L(i, r, 3) * (n - 8));
    (N(e, a, 3, K[1], 1, o), N(e, a, 3 + o, K[2]));
  }
  ((e.fillStyle = `rgba(0,0,0,0.4)`), e.fillRect(0, n, t, 4));
}
function Tk(e, t, n, r, i = 3, a = 0.85) {
  let [o, s] = M(t, n);
  (r(s), bm(e, o, 0, 0, i, a), e.drawImage(o, 0, 0));
}
function Ek(e, t, n, r) {
  e.drawImage(t, Math.round(n - t.width / 2), Math.round(r - t.height / 2));
}
function Dk(e, t, n, r) {
  (P(e, t, n, 2.2, 2.2, K[2]), N(e, t - 1, n - 1, r ? FO : K[4], 2, 2));
}
function Ok(e, t, n, r, i, a, o, s, c) {
  let l = Math.hypot(r - t, i - n),
    u = -(i - n) / l,
    d = (r - t) / l;
  for (let c = -1; c <= 1; c += 2)
    for (let l = a; l <= o; l += 0.006) {
      let f = Math.sin(((l - a) / (o - a)) * Math.PI) * s;
      N(e, om(t, r, l) + u * f * c, om(n, i, l) + d * f * c, K[3]);
    }
  let f = (a + o) / 2;
  for (let a = 0; a < 9; a++)
    N(
      e,
      om(t, r, f) + (L(a, c) - 0.5) * 10,
      om(n, i, f) + (L(c, a) - 0.5) * 9,
      a % 3 ? IO[3] : IO[4],
    );
}
function ore() {
  let [e, t] = Tm(240, 170, `folly`, 21);
  (wk(t, 240, 30, 3),
    ek(t, `f_writing`, 40, 30, 0),
    ek(t, `f_hands`, 104, 30),
    ek(t, `f_writing`, 212, 30, 1),
    ek(t, `f_pentagram_s`, 178, 66, 2),
    ek(t, `f_smear`, 214, 104),
    ek(t, `f_pool`, 22, 148),
    ek(t, `f_hand`, 140, 160),
    ek(t, `f_torso`, 66, 156),
    ek(t, `f_drained`, 210, 156),
    ek(t, `f_spray`, 120, 80));
  for (let e = -0.8; e <= 0.62; e += 0.008) {
    let n = 50 + Math.cos(e) * 96,
      r = 114 + (Math.sin(e) * 96) / 1.1,
      i = Math.round(e * 125);
    (i % 5 < 2 && N(t, n, r, K[1]), i % 22 == 0 && WO(t, n + 0.5, r + 0.5));
  }
  ek(t, `f_crystal`, 178, 68, 3);
  let n = Ck(t, 0, 168, 83, 2),
    r = Ck(t, 2, 188, 83, 5),
    i = bk(t, 50, 114, 2),
    a = { x: 142, y: 114 },
    o = 0.5,
    s = om(i.hand.x, a.x, o),
    c = om(i.hand.y, a.y, o) + 7;
  return (
    yk(t, `pyro`, Math.round(s), Math.round(c) + 12, 1, 0),
    yk(t, `cryo`, a.x, a.y + 12, 2, 3),
    Tk(t, 240, 170, (e) => {
      let t = { x: 178, y: 47 };
      (GO(e, t.x, t.y, n.x, n.y, 0.4, { gap: 7, sag: 2 }),
        GO(e, t.x, t.y, r.x, r.y, 0.8, { gap: 7, sag: 2 }),
        GO(e, i.hand.x, i.hand.y, a.x, a.y, 0.35, {
          sag: 7,
          gap: 10,
          to: 0.43,
        }),
        GO(e, i.hand.x, i.hand.y, a.x, a.y, 0.35, {
          sag: 7,
          gap: 10,
          from: 0.5700000000000001,
        }),
        Ok(e, i.hand.x, i.hand.y + 7, a.x, a.y + 7, 0.42, 0.58, 2.5, 3),
        Ek(e, ok()[2], a.x - 2, a.y),
        P(e, i.hand.x, i.hand.y, 2.6, 2.6, K[2]),
        N(e, i.hand.x - 1, i.hand.y - 1, FO, 2, 2));
    }),
    xk(t, i.throat, !0),
    ym(t, i.hand.x, i.hand.y, 14, K[3], 0.7),
    ym(t, a.x, a.y, 10, K[3], 0.6),
    ym(t, s, c, 10, IO[3], 0.35),
    ym(t, 178, 47, 22, PO[3], 0.6),
    Dm(t, 240, 170, 0.45),
    e
  );
}
function sre() {
  let [e, t] = Tm(240, 170, `folly`, 23);
  (wk(t, 240, 26, 5),
    ek(t, `f_hooks`, 36, 26, 1),
    ek(t, `f_writing`, 120, 26, 2),
    ek(t, `f_hooks`, 204, 26, 3),
    ek(t, `f_bones`, 24, 112),
    ek(t, `f_arm`, 214, 150),
    ek(t, `f_spray`, 70, 52),
    ek(t, `f_pool`, 196, 60),
    ek(t, `f_candles`, 222, 104, 2),
    B(t, 120, 96, 15, 13.6, K[1], (e) => Math.round(e * 10) % 2 == 0),
    B(t, 120, 96, 10, 9, K[2]));
  let n = Math.PI / ck + (2 * BO) / ck,
    r = Math.round(120 + Math.cos(n) * 66),
    i = Math.round(96 + (Math.sin(n) * 66) / 1.1);
  dm(
    t,
    120 + Math.cos(n) * 42,
    96 + (Math.sin(n) * 42) / 1.1,
    r - 3,
    i - 2,
    K[2],
    2,
    2,
  );
  let a = M(240, 170);
  (lk(a[1], 120, 96, 82, 0, 1, 10), lk(a[1], 120, 96, 38, Math.PI / ck, 2, 10));
  let o = M(240, 170);
  (o[1].drawImage(a[0], 0, 0, 240, 96, 0, 0, 240, 96),
    bm(t, o[0], 0, 0, 3, 0.85),
    t.drawImage(o[0], 0, 0));
  let s = bk(t, 120, 96, 0);
  (yk(t, `storm`, r, i + 4, 3, 0), yk(t, `void`, 26, 160, 2, 6));
  let c = M(240, 170);
  return (
    c[1].drawImage(a[0], 0, 96, 240, 74, 0, 96, 240, 74),
    bm(t, c[0], 0, 0, 3, 0.85),
    t.drawImage(c[0], 0, 0),
    B(t, s.chest.x, s.chest.y, 12, 12, K[3], (e) => Math.round(e * 8) % 2 == 0),
    Dk(t, s.chest.x, s.chest.y, !0),
    xk(t, s.throat, !0),
    ym(t, s.chest.x, s.chest.y + 2, 18, K[3], 0.35),
    Dm(t, 240, 170, 0.45),
    e
  );
}
function cre() {
  let [e, t] = Tm(240, 170, `folly`, 25);
  (wk(t, 240, 26, 7),
    ek(t, `f_writing`, 64, 26, 1),
    ek(t, `f_hands`, 150, 26),
    ek(t, `f_writing`, 216, 26, 2),
    ek(t, `f_head`, 22, 160),
    ek(t, `f_smear`, 152, 162),
    ek(t, `f_arm`, 150, 64));
  let n = dk(),
    r = mk(),
    i = [88, 60],
    a = [92, 150],
    o = [196, 60],
    s = [150, 110],
    c = [204, 146];
  (Ek(t, r[1], i[0], i[1]),
    Ek(t, r[3], a[0], a[1]),
    Ek(t, n[5], s[0], s[1]),
    Ek(t, n[2], c[0], c[1]));
  let l = bk(t, 36, 114, 2);
  return (
    yk(t, `cryo`, i[0] + 2, i[1] + 5, 2, 3),
    yk(t, `pyro`, 234, 130, 1, 3),
    Tk(
      t,
      240,
      170,
      (e) => {
        let t = s[1] - 58;
        for (let n = 0; n < 7; n++)
          N(
            e,
            s[0] + Math.round(Math.sin(n * 0.9) * 1.2),
            t + n,
            n < 3 ? K[1] : K[2],
          );
        for (let n = t + 10; n < s[1] - 42; n += 2) N(e, s[0], n, K[1]);
        Ek(e, fk()[2], s[0], s[1] - 38);
        let n = c[1] - 52;
        (GO(e, c[0], n - 12, c[0], n, 0.3, { twin: !1 }),
          P(e, c[0], n + 2, 2, 2.6, K[2]),
          N(e, c[0] - 1, n + 1, K[4]),
          Ek(e, pk()[2], o[0], o[1] - 4),
          P(e, l.hand.x, l.hand.y, 2.4, 2.4, K[2]),
          N(e, l.hand.x - 1, l.hand.y - 1, FO, 2, 2));
        for (let t = 0; t < 6; t++)
          N(e, i[0] - 4 + t * 2, i[1] + 4 - (t % 2) * 2, K[3]);
      },
      2,
      0.75,
    ),
    xk(t, l.throat, !1),
    ym(t, l.hand.x, l.hand.y, 12, K[3], 0.6),
    ym(t, o[0], o[1] - 8, 16, K[3], 0.5),
    ym(t, s[0], s[1] - 38, 10, K[3], 0.5),
    Dm(t, 240, 170, 0.45),
    e
  );
}
function lre() {
  let [e, t] = Tm(240, 170, `folly`, 27);
  (wk(t, 240, 26, 9),
    ek(t, `f_portrait`, 60, 26),
    ek(t, `f_writing`, 170, 26, 0),
    ek(t, `f_drained`, 30, 156),
    ek(t, `f_pool`, 214, 152),
    ek(t, `f_chair`, 222, 48),
    ek(t, `f_leg`, 132, 150));
  for (let e = 0; e < 11; e++) {
    let n = (e / 11) * BO + L(e, 3) * 0.4,
      r = 26 + L(e, 12) * 52;
    for (let e = 0; e < 16; e++) {
      let i = r - e * 1.1,
        a = n + (e * 1.6) / r;
      N(
        t,
        66 + Math.cos(a) * i,
        108 + (Math.sin(a) * i) / 1.1,
        e > 12 ? K[2] : K[1],
      );
    }
  }
  Ek(t, hk()[5], 66, 108);
  for (let e = 0; e < 30; e++) {
    let n = e / 30 + (L(e, 4) - 0.5) / 30,
      r = om(72, 180, n) + (L(e, 5) - 0.5) * 3,
      i = om(96, 82, n) - Math.sin(n * Math.PI) * 26 + (L(e, 6) - 0.5) * 4;
    (e % 6 == 3 && vm(t, r, i, 3, K[1], 0.5, e),
      N(t, r, i, n > 0.75 ? K[3] : K[2], L(e, 7) > 0.7 ? 2 : 1, 1));
  }
  (vm(t, 184, 86, 12, K[1], 0.5, 3),
    JO(t, 184, 105, 7, 4, K, !0, 1.8),
    yk(t, `pyro`, 104, 138, 2, 4));
  for (let e = 0; e < 4; e++) {
    let n = 120 + e * 5;
    z(t, 110 - e, n, 96 - e * 2, n + 2 - e, K[2]);
  }
  return (
    nk(t, Zh(`hollow`)[0], 170, 63, 0.4, 7),
    yk(t, `storm`, 132, 70, 2, 6),
    ym(t, 66, 108, 22, K[3], 0.7),
    ym(t, 184, 84, 18, K[3], 0.6),
    Dm(t, 240, 170, 0.45),
    e
  );
}
