// assets__index-BTsv3a2s 102 — math
// Lines 50588-50846 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function LD() {
  let [e, t] = Tm(240, 168, `ice`, 17);
  (FD(t, 240, 168, 18),
    eD(t, 120, 92, 51, 61, WE[1], 0.3),
    pD(t, 120, 92, 56, 0.8, 52),
    B(t, 120, 92, 24, 24 / 1.1, nD[1], (e) => L(Math.round(e * 30), 1) > 0.4));
  let n = [];
  for (let e = 0; e < 9; e++) {
    let t = (e / 9) * JE + 0.3;
    n.push({
      x: 120 + Math.cos(t) * 24,
      y: 92 + (Math.sin(t) * 24) / 1.1,
      h: 0,
      kind: 2,
    });
  }
  for (let e = 0; e < 16; e++) {
    let t = (e / 16) * JE + L(e, 2) * 0.25,
      r = 40 + (L(e, 3) - 0.5) * 5;
    n.push({
      x: 120 + Math.cos(t) * r,
      y: 92 + (Math.sin(t) * r) / 1.1,
      h: 8 + L(e, 4) * 7,
      kind: 0,
    });
  }
  let r = (e) => e.y > 92,
    i = (e, t) => {
      e.kind === 0
        ? fD(t, Math.round(e.x), Math.round(e.y), e.h, 5, nD)
        : mm(t, e.x, e.y - 3, L(Math.round(e.x), 2) * JE, 4, 2, nD);
    },
    a = M(240, 168);
  (n
    .filter((e) => !r(e))
    .sort((e, t) => e.y - t.y)
    .forEach((e) => i(e, a[1])),
    F(a[0], iD),
    t.drawImage(a[0], 0, 0),
    ZE(t, `maelis`, 2, 120, 92),
    QE(t, `pyro`, 95, 101, 2));
  let o = M(240, 168);
  (n
    .filter(r)
    .sort((e, t) => e.y - t.y)
    .forEach((e) => i(e, o[1])),
    F(o[0], iD),
    t.drawImage(o[0], 0, 0));
  let s = M(240, 168);
  for (let e of n)
    e.kind === 0 &&
      L(Math.round(e.x), 5) > 0.6 &&
      V(s[1], e.x, e.y - e.h, 4, 3, WE, 1);
  for (let e of n)
    if (e.kind === 2)
      for (let t = 0; t < 3; t++)
        N(
          s[1],
          e.x + (L(e.x, t) - 0.5) * 8,
          e.y - L(e.y, t) * 5,
          t ? WE[2] : `#ffffff`,
        );
  return (
    bm(t, s[0], 0, 0, 3, 0.8),
    t.drawImage(s[0], 0, 0),
    ym(t, 120, 62, 9, GE[3], 0.7),
    QE(t, `storm`, 210, 150, 2),
    Dm(t, 240, 168, 0.3),
    e
  );
}
function RD() {
  let [e, t] = Tm(240, 160, `ice`, 25);
  FD(t, 240, 160, 26);
  let [n, r] = ZE(t, `maelis`, 2, 56, 104)(15, 38);
  [
    [112, 64],
    [124, 122],
    [172, 90],
  ].forEach(([e, i], a) => {
    for (let o = 0.12; o < 0.86; o += 0.055)
      N(
        t,
        om(n, e, o),
        om(r, i, o) + Math.sin(o * 14 + a) * 2,
        o > 0.6 ? WE[3] : WE[2],
      );
  });
  let i = TD();
  (t.drawImage(i[0], 99, 54), t.drawImage(i[1], 111, 112));
  let a = M(240, 160);
  (a[1].drawImage(DD()[2], 159, 57),
    a[1].drawImage(DD()[3], 159, 53),
    bm(t, a[0], 0, 0, 3, 0.7),
    t.drawImage(a[0], 0, 0),
    ym(t, 172, 66, 12, `#ffffff`, 0.45),
    QE(t, `pyro`, 214, 112, 3, !0));
  let o = M(240, 160);
  return (
    _m(o[1], 176, 90, 0.5, 8, 10, rm.ember, 3),
    bm(t, o[0], 0, 0, 2, 0.8),
    t.drawImage(o[0], 0, 0),
    QE(t, `storm`, 160, 148, 1),
    Dm(t, 240, 160, 0.3),
    e
  );
}
function zD() {
  let [e, t] = Tm(240, 168, `ice`, 21);
  FD(t, 240, 168, 22);
  let [n, r] = ZE(t, `maelis`, 2, 120, 92)(15, 13),
    i = M(240, 168);
  [
    [34, 0],
    [58, 1],
  ].forEach(([e, t]) => {
    let a = (t * 3 + 2) % 16,
      o = (t * Math.PI) / 16;
    for (let t of [-2, 0, 2])
      B(i[1], n, r, e + t, e + t, t ? WE[1] : WE[2], (n) => {
        let r = Math.floor((((n - o) / JE) * 16 + 64 + 0.5) % 16);
        return (
          r !== a && r !== (a + 1) % 16 && Math.round(n * (e + t)) % 3 != 0
        );
      });
    for (let t = 0; t < 16; t++) {
      let s = o + (t / 16) * JE,
        c = n + Math.cos(s) * e,
        l = r + Math.sin(s) * e;
      t === a || t === (a + 1) % 16
        ? sD(i[1], c, l, WE[3])
        : cD(i[1], Math.round(c), Math.round(l) + 3, nD, t % 2);
    }
  });
  let a = M(240, 168);
  (a[1].drawImage(i[0], 0, 0),
    bm(t, i[0], 0, 0, 3, 0.6),
    t.drawImage(a[0], 0, 0),
    ym(t, n, r, 10, GE[3], 0.8));
  let o = (2 * JE) / 16 + JE / 16 / 2;
  return (
    QE(t, `void`, n + Math.cos(o) * 34, r + Math.sin(o) * 34 + 12, 3),
    QE(t, `cryo`, 30, 150, 2),
    Dm(t, 240, 168, 0.3),
    e
  );
}
var BD = [`#141519`, `#34373f`, `#5a5f69`, `#8a8f99`, `#d8dce4`],
  VD = [`#5a4418`, `#8a6f2e`, `#c9a64a`],
  HD = `#0a080c`;
function UD(e, t, n, r, i, a, o = !1) {
  let s = -i,
    c = r,
    l = o ? 1.6 : 1.1;
  for (let o of [-1, 0, 1])
    (N(e, t + r * o + s * l, n + i * o + c * l, a[3]),
      N(e, t + r * o - s * l, n + i * o - c * l, a[2]));
  (N(e, t + r * 2, n + i * 2, a[2]),
    N(e, t - r * 2, n - i * 2, a[2]),
    o &&
      (N(e, t + r * 2 + s, n + i * 2 + c, a[3]),
      N(e, t - r * 2 + s, n - i * 2 + c, a[3]),
      N(e, t, n, a[4])));
}
function WD(e, t, n, r, i, a, o = 1.5) {
  for (let s = -o; s <= o; s += 0.5) N(e, t + r * s, n + i * s, a[3]);
  N(e, t, n, a[4]);
}
function GD(e, t, n, r, i, a = {}) {
  let o = a.r ?? BD,
    s = [],
    c = a.sag ?? 0,
    l = (e) => [om(t, r, e), om(n, i, e) + c * 4 * e * (1 - e)],
    u = Math.hypot(r - t, i - n) + Math.abs(c),
    d = Math.max(1, Math.round(u / 3)),
    f = a.mid ? [Math.round(d / 2)] : a.weak;
  for (let t = 0; t <= d; t++) {
    let n = t / d,
      [r, i] = l(n),
      [c, u] = l(Math.min(1, n + 0.02)),
      [p, m] = l(Math.max(0, n - 0.02)),
      h = Math.hypot(c - p, u - m) || 1,
      g = (c - p) / h,
      _ = (u - m) / h;
    f?.includes(t)
      ? (UD(e, r, i, g, _, GE, !0), s.push([r, i]))
      : (t + (a.phase ?? 0)) % 2 == 0
        ? UD(e, r, i, g, _, o)
        : WD(e, r, i, g, _, o);
  }
  return s;
}
function KD(e, t, n, r, i) {
  let a = Math.cos(r),
    o = Math.sin(r),
    s = -o,
    c = a,
    l = (r, i, l) => N(e, t + a * r + s * i, n + o * r + c * i, l);
  (l(-7, -1, BD[3]), l(-8, 0, BD[3]), l(-7, 1, BD[2]), l(-6, 0, BD[2]));
  for (let e = -5; e <= 4; e++) (l(e, 0, BD[3]), l(e, 0.6, BD[2]));
  (l(0, 0, BD[4]), l(5, 0, BD[4]));
  let u = [1, 0.45, 1, 0.45][i % 4],
    d = i % 2 == 0 ? [1, -1] : [i === 1 ? 1 : -1];
  for (let e of d) {
    for (let t = 0; t <= 1.95; t += 0.15) {
      let n = 1 + Math.cos(t) * 4.2,
        r = Math.sin(t) * 4.2 * e * u;
      (l(n, r, t < 0.6 ? BD[3] : BD[2]), l(n - 0.6, r * 0.82, BD[2]));
    }
    (l(-0.6, 3.6 * e * u, BD[4]), l(0.2, 2.8 * e * u, BD[3]));
  }
}
function qD(e, t, n, r, i) {
  let a = Math.cos(r),
    o = Math.sin(r),
    s = -o,
    c = a,
    l = (r, i, l) => N(e, t + a * r + s * i, n + o * r + c * i, l);
  (l(-3, -1, KE[4]), l(-3, 1, KE[3]), l(-4, 1, KE[3]));
  for (let e = 0; e < 9; e++) {
    let t = -4 - e,
      n = 2 + Math.sin(e * 0.8 - i * 1.6) * (0.4 + e * 0.18);
    (l(t, n, e < 4 ? KE[3] : KE[2]),
      e < 6 && l(t, n + 1, KE[2]),
      e < 5 && e > 1 && l(t + 1, n + 2.5 + Math.sin(e + i) * 0.6, KE[1]));
  }
}
function JD(e, t, n, r, i, a) {
  if ((lD(e, t, n, r, i, a, qE[3], qE[2], qE[1]), i < 0.6))
    for (let i = 0; i < 5; i++) {
      let o = i / 4;
      N(
        e,
        t - r * 0.6 + o * r * 1.1,
        n - r * 0.75 + Math.sin(o * 5 + a) * 1.2,
        i % 2 ? KE[3] : KE[2],
      );
    }
}
function YD(e, t, n, r, i, a = 0, o = 0) {
  let s = Math.max(8, Math.round((r * JE) / 3 / 2) * 2);
  for (let c = 0; c < s; c++) {
    let l = o + (c / s) * JE,
      u = t + Math.cos(l) * r,
      d = n + (Math.sin(l) * r) / 1.1,
      f = -Math.sin(l),
      p = Math.cos(l) / 1.1,
      m = Math.hypot(f, p),
      h = c / s < i ? BD : [BD[0], BD[0], BD[1], BD[2], BD[3]];
    a && c % a === Math.floor(a / 2) && c % 2 == 0
      ? UD(e, u, d, f / m, p / m, GE, !0)
      : c % 2 == 0
        ? UD(e, u, d, f / m, p / m, h)
        : WD(e, u, d, f / m, p / m, h, 1);
  }
}
function XD(e, t, n, r) {
  for (let i = 0; i < 4; i++) (N(e, t + i, n - i, r), N(e, t + i, n + i, r));
}
