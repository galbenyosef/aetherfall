// assets__index-BTsv3a2s 227 — math
// Lines 145016-145352 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function roe(e, t, n) {
  let r = t === 1 ? -1 : 1,
    i = noe[t],
    a = {
      L: i.L,
      R: i.R,
      props: { gl: n.moving ? 0.25 : 0, ph: 0, tear: 0, out: 0, st: 0 },
    };
  if (!e) return a;
  let o = S2(e.k),
    s = a.props,
    c = (e, t) => [e * r, t];
  switch (e.id) {
    case `cut`:
      if (((s.ph = 1), !e.landed))
        ((a.R = C2(i.R, t === 2 ? [-5, -26] : c(10, -29), o)),
          (s.gl = 0.4 * o));
      else {
        let n = S2(e.since / 0.08);
        ((a.R = C2(
          t === 2 ? [-5, -26] : c(10, -29),
          t === 2 ? [12, -17] : c(4, -12),
          n,
        )),
          (s.gl = 1 - n * 0.5),
          (a.lean = 1.5 * n));
      }
      return a;
    case `starfall`:
      return (
        (s.ph = 1),
        (s.tear = o),
        (s.st = e.landed ? 1.5 : o),
        (s.gl = 0.3),
        (a.R = C2(i.R, t === 2 ? [5, -44] : c(9, -42), o)),
        (a.rise = 1 * o),
        a
      );
    case `lightsout`:
      return (
        (s.out = e.landed ? 1 : o),
        (s.ph = 0.5),
        (a.L = C2(i.L, c(-11, -27), o)),
        (a.R = C2(i.R, c(11, -27), o)),
        a
      );
    case `slices`:
      if (((s.ph = 1), e.landed)) {
        let n = S2(e.since / 0.1);
        ((a.R = t === 2 ? C2([-3, -22], [13, -22], n) : c(-9 + 20 * n, -21)),
          (s.gl = 1 - n * 0.6));
      } else {
        let n = Math.floor(e.k * 5);
        ((a.R =
          t === 2
            ? [n % 2 ? 9 : 2, -30 + n * 3]
            : c(n % 2 ? 9 : -7, -30 + n * 3)),
          (s.gl = 0.4));
      }
      return a;
    case `afterimages`:
      return (
        (s.gl = 0.5 + o),
        (a.tremble = 1 + Math.round(o)),
        (a.L = C2(i.L, c(-9, -24), o)),
        (a.R = C2(i.R, c(9, -24), o)),
        a
      );
  }
  return a;
}
var ioe = (e) =>
  e < 5
    ? e - 1
    : e < 13
      ? 4 + (e - 5) * 0.3
      : e < 16
        ? 7 + (e - 13)
        : 9 + (e - 16) * 0.1;
function aoe(e, t, n, r) {
  let i = t.props.gl,
    a = t.props.out,
    o = t.props.st,
    s = Math.floor(t.t * (1.5 + 14 * i)),
    c = Math.floor(t.t * 1.2),
    l = n === 2 ? 0.7 : 1,
    u = +(n === 2);
  for (let t = 2; t <= 42; t++) {
    let d = ioe(t) * l,
      f = Math.floor(t / 3),
      p = h3(f, s + 1);
    if (t > 13 && p < 0.12 + i * 0.12) continue;
    let m =
        t > 13 && p > 0.88 - i * 0.15
          ? ((s + f) % 2 ? 1 : -1) * (2 + Math.round(i * 2))
          : 0,
      h = (t < 13 ? u : 0) + (n === 2 ? -0.5 : 0),
      g = Math.round(h - d) + m,
      _ = Math.round(h + d) + m,
      v = t - 43 + (t < 38 ? r : 0);
    for (let n = g; n <= _; n++) {
      let r = f3;
      if (t > 38) r = (n + t) % 3 == 0 ? `#d06bff` : `#2a1740`;
      else {
        let e = h3(n * 3, t * 7),
          i = h3(n * 5 + c, t * 3),
          s =
            e > 0.965 - o * 0.03
              ? `#ffffff`
              : e > 0.915 - o * 0.03 || i > 0.985
                ? m3
                : null;
        s && h3(n, t + 99) >= a && (r = s);
      }
      e.P(n, v, r);
    }
  }
}
function ooe(e, t, n, r) {
  let i = t.props.out < 0.8 && !t.hurt;
  r === 0
    ? (e.P(-3, -35 + n, d3.dark, 7, 5),
      e.P(-2, -36 + n, d3.dark, 5, 1),
      e.P(-2, -35 + n, `#000000`, 5, 4),
      e.P(-2, -31 + n, d3.red, 5, 1),
      e.P(-3, -32 + n, d3.red),
      e.P(3, -32 + n, d3.red),
      i && (e.P(-2, -34 + n, `#ffffff`), e.P(2, -34 + n, `#ffffff`)))
    : r === 2 &&
      (e.P(1, -35 + n, d3.dark, 4, 5),
      e.P(2, -35 + n, `#000000`, 3, 4),
      e.P(2, -31 + n, d3.red, 3, 1),
      e.P(4, -32 + n, d3.red),
      i && e.P(3, -34 + n, `#ffffff`));
}
function soe(e, t, n, r) {
  let i = toe[n],
    a = t.props.ph;
  for (let [o, s] of [
    [-1, t.L],
    [1, t.R],
  ]) {
    if (n === 2 && o < 0) continue;
    let t = o < 0 ? i.L : i.R,
      c = e.arm([t[0], t[1] + r], [s[0], s[1] + r], n === 1 ? -o : o, f3, {
        len: 6,
        w: 3,
        bend: 0.4,
      });
    a > 0.5 &&
      o > 0 &&
      (e.P(Math.round(c[0]) - 1, Math.round(c[1]) - 1, p3, 3, 2),
      e.P(Math.round(c[0]) + 2 * (n === 1 ? -1 : 1), Math.round(c[1]) - 2, p3));
  }
}
function coe(e, t, n) {
  let r = t.props.tear;
  if (r < 0.1) return;
  let i = Math.round(26 * r);
  for (let r = -23 - Math.round(i / 2); r < -23 + Math.round(i / 2); r++) {
    let i = n + Math.round(Math.sin(r * 1.3 + t.t * 3) * 1.2);
    (e.P(i, r, r % 5 == 0 ? `#ffffff` : `#e6d9ff`),
      r % 3 == 0 && e.P(i + 1, r, m3));
  }
}
function loe(e, t) {
  let n = t.bob,
    r = t.v;
  (aoe(e, t, r, n),
    ooe(e, t, n, r),
    e.crown(+(r === 2), -45 + n, r),
    soe(e, t, r, n),
    coe(e, t, r === 1 ? -13 : 13));
}
var uoe = {
    id: `unseen`,
    gait: `glide`,
    stride: 10,
    top: 45,
    ticks: 8,
    hemFrom: -8,
    props: { gl: 0, ph: 0, tear: 0, out: 0, st: 0 },
    linger: { starfall: 0.5, slices: 0.5 },
    pose: roe,
    paint: loe,
  },
  g3 = { red: `#b01a2a`, core: `#ffffff` },
  _3 = `#1c1a20`,
  v3 = `#34303c`,
  y3 = `#0e0c12`,
  b3 = `#d9d2c0`,
  x3 = `#a89f8a`,
  S3 = `#8a8f99`,
  C3 = `#5a5f69`,
  w3 = `#cfc6bc`,
  doe = `#c9a64a`,
  T3 = `#8a6f2e`,
  E3 = {
    0: { L: [-7, -24], R: [7.5, -24] },
    1: { L: [7, -24], R: [-7.5, -24] },
    2: { L: [-2, -24], R: [1, -24] },
  },
  foe = {
    0: { L: [-7, -15], R: [8, -18] },
    1: { L: [7, -15], R: [-8, -18] },
    2: { L: [-3, -15], R: [4, -18] },
  },
  D3 = [-7, -20],
  O3 = [8, -37];
function poe(e, t, n) {
  let r = t === 1 ? -1 : 1,
    i = foe[t],
    a = n.moving ? n.walk * 0.5 : Math.sin(n.t * 1.8) * 0.3,
    o = {
      L: i.L,
      R: i.R,
      props: {
        cs: a * r,
        cl: 5,
        wh: 0,
        ch: Math.max(-4, Math.min(4, -n.vx * 0.08)),
        ey: 0,
        hk: 0,
      },
    };
  if (!e) return o;
  let s = S2(e.k),
    c = o.props,
    l = (e, t) => [e * r, t];
  switch (e.id) {
    case `flail`:
    case `hook`:
      return (
        (o.L = C2(i.L, l(D3[0], D3[1]), Math.min(1, s * 2))),
        (c.wh = e.landed ? 0 : s),
        (c.hk = e.landed && e.id === `hook` ? 1 : 0),
        (c.ey = s),
        (o.lean = e.landed ? 1 : -0.5 * s),
        o
      );
    case `rite`: {
      let t = e.landed ? Math.sin(e.age * 2) * 0.8 : 0;
      return (
        (o.R = C2(i.R, l(O3[0], O3[1]), s)),
        (o.L = C2(i.L, l(-7, -22), s)),
        (c.cs = t * r),
        (c.cl = 5 + 4 * s),
        (c.ey = 1),
        (o.rise = 0.5 * s),
        o
      );
    }
    case `grave`:
      if (!e.landed)
        ((o.L = C2(i.L, l(-6, -30), s)),
          (o.R = C2(i.R, l(7, -33), s)),
          (o.rise = 1 * s));
      else {
        let t = S2(e.since / 0.08);
        ((o.L = C2(l(-6, -30), l(-6, -11), t)),
          (o.R = C2(l(7, -33), l(6, -11), t)),
          (o.rise = -2 * t));
      }
      return ((c.ey = 1), o);
    case `smoke`:
      return (
        (o.R = C2(i.R, l(O3[0], O3[1]), Math.min(1, s * 1.6))),
        (c.cs = 0),
        (c.cl = 9),
        o
      );
    case `ring`:
      return (
        (o.L = C2(i.L, l(-12, -22), s)),
        (o.R = C2(i.R, l(12, -22), s)),
        (c.wh = e.landed ? 0 : s),
        (c.cs = 0.8 * s * r),
        (o.rise = e.landed ? -1 : 0),
        o
      );
  }
  return o;
}
function k3(e, t, n, r, i, a = 0) {
  let o = Math.max(1, Math.round(Math.max(Math.abs(r - t), Math.abs(i - n))));
  for (let s = 0; s <= o; s++) {
    let c = a + s;
    e.P(
      Math.round(t + ((r - t) * s) / o),
      Math.round(n + ((i - n) * s) / o),
      c % 9 == 7 ? g3.red : c % 2 ? S3 : C3,
    );
  }
  return a + o + 1;
}
function A3(e, t, n, r) {
  if (t.props.hk > 0.5) {
    e.P(Math.round(n[0]), Math.round(n[1]) + 1, S3, 1, 2);
    return;
  }
  let i = t.props.wh,
    a = 0;
  if (i > 0.2) {
    let r = n[0],
      a = n[1] - 5,
      o = 2 + 3 * i,
      s = t.t * 14;
    for (let t = 0; t < 14; t++) {
      let n = s + (t / 14) * Math.PI * 2 * i;
      e.P(
        Math.round(r + Math.cos(n) * o * 1.2),
        Math.round(a + Math.sin(n) * o * 0.6),
        t % 9 == 7 ? g3.red : t % 2 ? S3 : C3,
      );
    }
    e.P(
      Math.round(r + Math.cos(s + Math.PI * 2 * i) * o * 1.2),
      Math.round(a + Math.sin(s + Math.PI * 2 * i) * o * 0.6),
      w3,
    );
    return;
  }
  let o = n[0] + r * 3 + t.props.ch;
  ((a = k3(e, n[0], n[1] + 1, o, -1)),
    k3(e, o + 1, -1, o + 1 + 9 + t.props.ch * 0.5, -1, a));
}
function j3(e, t, n, r) {
  let i = e.arm(t, n, r, _3, { len: 5, w: 4, bend: 0.25 }),
    a = [t[0] + (i[0] - t[0]) * 0.45, t[1] + (i[1] - t[1]) * 0.45];
  for (let t = 0; t < 4; t++) {
    let n = (t + 0.5) / 4,
      r = a[0] + (i[0] - a[0]) * n,
      o = a[1] + (i[1] - a[1]) * n;
    e.P(Math.round(r) - 2, Math.round(o), t % 2 ? S3 : C3, 4, 1);
  }
  return (e.P(Math.round(i[0]) - 1, Math.round(i[1]), w3, 2, 1), i);
}
