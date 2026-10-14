// index-BTsv3a2s 54 — math
// Lines 34963-35311 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function _ee(e) {
  let t = m_.barrow,
    { wx: n, wy: r } = e,
    i =
      0.42 +
      (d_(n * 0.04, r * 0.04, 1) - 0.5) * 0.5 +
      (d_(n * 0.25, r * 0.25, 4) - 0.5) * 0.3;
  ((i -= Math.max(0, 1.6 - e.wall) * 0.12),
    (i += Math.max(0, e.wall - 2) * 0.05));
  let a = o_(t.earth, i, n, r),
    o = p_(n * 0.22, r * 0.22, 5);
  if (o.id < 0.1 && o.d1 < 0.22) {
    let e = n * 0.22 - o.cx < -0.05 && r * 0.22 - o.cy < -0.05;
    a = o_(t.stone, 0.3 + o.id * 2 + (e ? 0.35 : 0) - o.d1, n, r);
  }
  return (
    e.wall < 2.2 &&
      f_(n * 0.06, r * 0.06, 21) > 0.955 &&
      (a = o_(t.root, 0.5 + H(n, r) * 0.5, n, r)),
    H(n >> 1, r >> 1, 33) < 0.0012 && (a = t.bone[H(n, r) < 0.5 ? 0 : 1]),
    a
  );
}
function vee(e) {
  let t = m_.rime,
    { wx: n, wy: r } = e,
    i = d_(n * 0.025, r * 0.12, 3) + Math.max(0, 1.8 - e.wall) * 0.25,
    a;
  if (i > 0.44)
    a = o_(
      t.snow,
      0.45 + (i - 0.44) * 0.9 + (d_(n * 0.3, r * 0.6, 7) - 0.5) * 0.18,
      n,
      r,
    );
  else {
    let e = p_(n * 0.07, r * 0.07, 12),
      i = 0.55 + (d_(n * 0.08, r * 0.08, 9) - 0.5) * 0.3;
    (e.d2 - e.d1 < 0.045 ? (i = 0.8) : e.d2 - e.d1 < 0.09 && (i -= 0.1),
      (a = o_(t.ice, i, n, r)));
  }
  let o = H(n, r, 40);
  return (
    o < 0.004 &&
      (a =
        (Math.floor(e.ph * 8) + Math.floor(o * 4e3)) % 5 == 0
          ? n_(`#ffffff`)
          : t.snow[7]),
    a
  );
}
function yee(e) {
  let t = m_.ember,
    { wx: n, wy: r } = e,
    i = n / 11,
    a = r / 9.5,
    o = Math.floor(a),
    s = i + (o % 2) * 0.5,
    c = Math.floor(s),
    l = s - c - 0.5,
    u = a - o - 0.5,
    d = Math.max(Math.abs(l) * 1.15 + Math.abs(u) * 0.55, Math.abs(u) * 1.1),
    f = H(c, o, 3),
    p = 0.3 + f * 0.35 + (d_(n * 0.2, r * 0.2, 5) - 0.5) * 0.2;
  (l < -0.2 && u < -0.1 && (p += 0.15), (l > 0.25 || u > 0.3) && (p -= 0.1));
  let m = o_(t.basalt, p, n, r);
  if (d > 0.52) {
    let i = Math.max(0, 1.7 - e.liq) / 1.7,
      a = 0.5 + 0.5 * Math.sin((e.ph + f) * Math.PI * 2);
    m =
      i > 0.25 && H(c, o, 2) < i * 0.95
        ? o_(t.glow, 0.15 + i * 0.4 + a * 0.2, n, r)
        : H(c, o, 9) < 0.04
          ? o_(t.glow, 0.1 + a * 0.12, n, r)
          : t.basalt[0];
  }
  let h = d_(n * 0.06, r * 0.06, 14);
  return (h > 0.66 && d <= 0.52 && (m = o_(t.ash, (h - 0.66) * 3, n, r)), m);
}
function bee(e) {
  let t = m_.folly,
    { wx: n, wy: r, tx: i, ty: a, lx: o, ly: s } = e,
    c = (i + a) % 2 == 0,
    l = f_(n * 0.045, r * 0.045, c ? 2 : 5),
    u = 0.55 + (d_(n * 0.07, r * 0.07, 8) - 0.5) * 0.3;
  ((o === 0 || s === 0) && (u += 0.12), (o === 15 || s === 15) && (u -= 0.22));
  let d = o_(c ? t.marbleL : t.marbleD, u, n, r);
  return (
    l > 0.93 && (d = o_(t.vein, (l - 0.93) * 12, n, r)),
    i % 2 == 0 &&
      a % 2 == 0 &&
      Math.abs(o) + Math.abs(s) < 3 &&
      (d = o_(t.gold, 0.5 + (o === 0 && s === 0 ? 0.4 : 0), n, r)),
    e.wall < 1.3 && H(n, r, 5) < (1.3 - e.wall) * 0.5 && (d = c_(d, 0.8)),
    xee(e, d)
  );
}
function xee(e, t) {
  let n = e.I.corrupt;
  if (n <= 0) return t;
  let r = m_.folly,
    { wx: i, wy: a } = e,
    o = d_(i * 0.02, a * 0.02, 60) + n * 0.45;
  if (o < 0.82) return t;
  let s = f_(i * 0.06, a * 0.06, 61),
    c = 0.978 - (o - 0.82) * 0.06;
  if (s > c) {
    let t = Math.max(
      0,
      Math.sin((e.ph * 2 - d_(i * 0.03, a * 0.03, 62) * 1.5) * Math.PI * 2),
    );
    return o_(r.hollow, 0.1 + (s - c) * 8 + t * 0.4, i, a);
  }
  return s > c - 0.03
    ? s_(t, r.hollow[0], 0.45)
    : o > 1.02
      ? s_(t, r.blood[3], Math.min(0.35, (o - 1.02) * 1.5))
      : t;
}
function See(e) {
  let { I: t, wx: n, wy: r, tx: i, ty: a, lx: o, ly: s } = e;
  if (t.theme !== `folly`) {
    let e = m_[t.theme],
      i = e.stone ?? e.basalt ?? e.ice ?? e.earth,
      a = o_(i, 0.35 + H(n >> 2, r >> 2, 3) * 0.45, n, r);
    (!(n & 3) || !(r & 3)) && (a = i[1]);
    let c = Math.hypot(o - 7.5, s - 7.5);
    return (Math.abs(c - 5.5) < 0.7 && (a = m_.cistern.rune[1]), a);
  }
  let c = m_.folly,
    l = t.t(i, a - 1) === Ao.RUG,
    u = t.t(i, a + 1) === Ao.RUG,
    d = t.t(i - 1, a) === Ao.RUG,
    f = t.t(i + 1, a) === Ao.RUG,
    p = (!l && s < 3) || (!u && s > 12) || (!d && o < 3) || (!f && o > 12),
    m =
      (!l && s === 0) ||
      (!u && s === 15) ||
      (!d && o === 0) ||
      (!f && o === 15),
    h;
  if (m) h = c.carpet[0];
  else if (p) h = o_(c.gold, 0.45 + ((n + r) % 4 == 0 ? 0.3 : 0), n, r);
  else {
    let e = ((n % 8) + 8) % 8,
      t = ((r % 8) + 8) % 8;
    ((h =
      Math.abs(e - 4) + Math.abs(t - 4) === 3
        ? c.carpet[4]
        : o_(c.carpet, 0.45 + (d_(n * 0.2, r * 0.2, 4) - 0.5) * 0.3, n, r)),
      e === 4 && t === 4 && (h = c.gold[2]));
  }
  let g = d_(n * 0.05, r * 0.05, 70) + t.corrupt * 0.4;
  return (
    g > 0.8 && (h = s_(h, c.blood[g > 0.9 ? 0 : 1], 0.75)),
    m && H(n, r, 2) < 0.3 && (h = o_(c.gold, 0.2, n, r)),
    h
  );
}
function Cee(e, t, n) {
  let { I: r, wx: i, wy: a, ph: o } = e;
  switch (r.theme) {
    case `cistern`: {
      let e = m_.cistern.water,
        r = s_(t, e[3], 0.55 + Math.min(0.25, n * 0.4)),
        s = p_(i * 0.08, a * 0.08, 30),
        c = ((o + s.id) % 1) * 1.1;
      return (
        Math.abs(s.d1 - c) < 0.07 &&
          c < 0.9 &&
          (r = s_(r, e[6], 0.7 * (1 - c))),
        n < 0.12 && (r = H(i, a, Math.floor(o * 8)) < 0.5 ? e[6] : e[5]),
        r
      );
    }
    case `barrow`: {
      let n = m_.barrow,
        { lx: r, ly: s } = e;
      if (s < 4 && r > 1 && r < 14) {
        let e = d_(i * 0.45, a * 0.45, 3);
        return e + (s === 0 ? -0.25 : 0) > 0.42
          ? o_(n.earth, 0.5 + e * 0.45 - (s === 3 ? 0.25 : 0), i, a)
          : t;
      }
      if (!(r > 2 && r < 13 && s >= 4 && s < 15)) return t;
      let c = Math.min(r - 2, 13 - r, s - 3, 15 - s),
        l = o_(
          n.earth,
          0.42 - c * 0.07 + (d_(i * 0.4, a * 0.4, 6) - 0.5) * 0.2,
          i,
          a,
        );
      return (
        s === 4 && (l = n.earth[0]),
        s === 14 && (l = n.earth[5]),
        r === 3 && (l = c_(l, 0.75)),
        r === 12 && (l = c_(l, 1.15)),
        H(i >> 1, a >> 1, 9) < 0.04 && c >= 2 && (l = n.bone[0]),
        H(e.tx, e.ty, 77) < 0.3 &&
          c >= 3 &&
          Math.sin((o + H(e.tx, e.ty)) * Math.PI * 2) > 0.7 &&
          H(i >> 1, a >> 1, 3) < 0.15 &&
          (l = m_.folly.hollow[3]),
        l
      );
    }
    case `rime`: {
      let e = m_.rime,
        t = p_(i * 0.11, a * 0.11, 44),
        r = 0.62 - n * 0.25 + (d_(i * 0.1, a * 0.1, 45) - 0.5) * 0.25;
      t.d2 - t.d1 < 0.05 && (r = 0.95);
      let s = ((i + a) * 0.02 - o * 1.5) % 1;
      return (
        Math.abs(s < 0 ? s + 1 : s) < 0.03 && (r += 0.25),
        n < 0.1 ? e.snow[6] : o_(e.ice, r, i, a)
      );
    }
    case `ember`: {
      let e = m_.ember,
        t = p_(i * 0.13, a * 0.13, 50),
        r = t.d2 - t.d1,
        s = 0.5 + 0.5 * Math.sin((o + t.id) * Math.PI * 2);
      if (r < 0.12) return o_(e.glow, 0.35 + s * 0.4 + (0.12 - r) * 2, i, a);
      let c = o_(e.crust, 0.3 + t.id * 0.5 - t.d1 * 0.3, i, a);
      return (
        i * 0.13 - t.cx < -0.2 && a * 0.13 - t.cy < -0.2 && (c = e.crust[3]),
        n < 0.1 && (c = e.basalt[1]),
        c
      );
    }
    case `folly`: {
      let n = h_[r.toneAt(e.tx, e.ty)],
        { lx: s, ly: c } = e,
        l = Math.hypot(s - 7.5, c - 7.5),
        u = 0.5 + 0.5 * Math.sin((o + (e.tx + e.ty) * 0.13) * Math.PI * 2),
        d = Math.abs(l - 6.6) < 0.6,
        f = l < 6.4 && y_(s - 7.5, c - 7.5, 6) < 0.55;
      return d || f
        ? o_(n, 0.45 + u * 0.5, i, a)
        : s_(t, n[1], 0.25 + u * 0.15);
    }
  }
}
function wee(e, t, n) {
  let { I: r, wx: i, wy: a, ph: o } = e;
  switch (r.theme) {
    case `cistern`: {
      let e = m_.cistern.water,
        t = d_((i - o * 64) * 0.06, a * 0.35, 31),
        r = o_(e, 0.18 + n * -0.08 + (t - 0.5) * 0.35, i, a);
      return (t > 0.72 && (r = e[4]), r);
    }
    case `barrow`: {
      let e = m_.barrow,
        t = Math.max(0, 0.35 - n * 0.5),
        r = o_(e.earth, t, i, a);
      return (
        n > 0.25 && H(i >> 1, a >> 1, 8) < 0.12 * (1 - n) && (r = e.bone[0]),
        n > 0.5 && (r = c_(r, 0.6)),
        r
      );
    }
    case `rime`: {
      let e = m_.rime,
        t = d_(i * 0.05 + o * 2, a * 0.08, 46),
        r = o_(e.water, 0.25 + (t - 0.5) * 0.6 + (1 - n) * 0.15, i, a),
        s = p_((i - o * 32) * 0.05, a * 0.09, 47),
        c = s.d1 + (d_(i * 0.3, a * 0.3, 48) - 0.5) * 0.18;
      return (
        s.id < 0.06 && c < 0.3
          ? (r = o_(e.ice, 0.45 + (0.3 - c) * 1.8, i, a))
          : s.id < 0.06 && c < 0.36 && (r = e.water[5]),
        H(i, a, Math.floor(o * 16)) < 0.003 && (r = e.snow[6]),
        r
      );
    }
    case `ember`: {
      let e = m_.ember,
        t = d_(i * 0.03 + o, a * 0.03, 52),
        r = d_(i * 0.07 + t * 2.5 - o * 2, a * 0.07 + t * 1.5, 53),
        s = o_(e.lava, 0.3 + r * 0.75 + (1 - Math.min(1, n * 2)) * 0.15, i, a);
      r < 0.32 && (s = o_(e.crust, (0.32 - r) * 3, i, a));
      let c = p_(i * 0.09, a * 0.09, 54),
        l = (o * 2 + c.id) % 1;
      return (
        c.id < 0.25 && c.d1 < 0.12 + l * 0.2 && l < 0.8 && (s = e.lava[7]),
        s
      );
    }
    case `folly`: {
      let e = m_.folly,
        t = d_(i * 0.04 + o, a * 0.04, 56),
        r = s_(n_(`#05020a`), n_(`#3a1452`), Math.max(0, t - 0.45) * 2);
      t > 0.7 && (r = s_(r, e.hollow[3], (t - 0.7) * 2));
      let s = H(i, a, 57);
      return (
        s < 0.01 &&
          (r =
            (Math.floor(o * 8) + Math.floor(s * 1e3)) % 3 == 0
              ? n_(`#ffffff`)
              : n_(`#b84dff`)),
        n < 0.08 && (r = n_(`#b84dff`)),
        r
      );
    }
  }
}
function Tee(e, t, n) {
  let { I: r, wx: i, wy: a } = e;
  switch (r.theme) {
    case `cistern`:
      return n > -0.08 ? m_.cistern.stone[6] : m_.cistern.stone[2];
    case `barrow`:
      return o_(m_.barrow.earth, 0.7 + n * 2, i, a);
    case `rime`:
      return o_(m_.rime.snow, 0.8 + n, i, a);
    case `ember`:
      return o_(m_.ember.glow, 0.55 + (n + 0.1) * 3, i, a);
    case `folly`:
      return H(i, a, 3) < 0.5 ? m_.folly.marbleD[0] : t;
  }
}
var Eee = (() => {
  let e = [0, 1, 2, 3, 4].map((e) => [
    Math.cos(-Math.PI / 2 + (e * 4 * Math.PI) / 5),
    Math.sin(-Math.PI / 2 + (e * 4 * Math.PI) / 5),
  ]);
  return e.map((t, n) => [t[0], t[1], e[(n + 1) % 5][0], e[(n + 1) % 5][1]]);
})();
function y_(e, t, n) {
  let r = 99;
  for (let [i, a, o, s] of Eee) {
    let c = i * n,
      l = a * n,
      u = o * n - c,
      d = s * n - l,
      f = Math.max(
        0,
        Math.min(1, ((e - c) * u + (t - l) * d) / (u * u + d * d)),
      );
    r = Math.min(r, Math.hypot(e - c - u * f, t - l - d * f));
  }
  return r;
}
function b_(e, t, n) {
  let r = m_[e.theme],
    i = d_(t * 0.08, n * 0.08, 90);
  return c_(o_(r.mass, i, t, n, 1), 0.85);
}
