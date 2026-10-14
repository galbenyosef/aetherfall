// index-BTsv3a2s 79 — math
// Lines 43512-43792 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function kte() {
  let [e, t] = Tm(224, 168, `ice`, 27);
  (TS(t, 100, 112, 90, 46, 11),
    DS(t, 178, 140, 34, 16, 6, [[172, 138, 1]]),
    t.drawImage(bS()[3], 182, 0),
    ym(t, 196, 40, 26, Mx[3], 0.7));
  let n = Py(`ilse`),
    r = 84 - n.ax + 13,
    i = 116 - n.ay + 16,
    a = M(224, 168),
    o = Math.hypot(196 - r, 40 - i),
    s = (e) => [r + ((196 - r) * e) / o, i + ((40 - i) * e) / o];
  for (let e = 0; e < o; e += 0.5)
    N(a[1], s(e)[0] - 0.5, s(e)[1] - 0.5, Nx[1], 2, 2);
  for (let e = 0; e < o; e += 0.5)
    N(a[1], s(e)[0], s(e)[1], Math.round(e) % 14 < 3 ? Nx[4] : Nx[2]);
  for (let e = 6; e < o; e += 11) N(a[1], s(e)[0] + 1, s(e)[1] - 1, Fx[4]);
  (bm(t, a[0], 0, 0, 2, 0.6),
    t.drawImage(a[0], 0, 0),
    Sm(t, 84, 116, 13, 4, Px[0], 0.8),
    Em(t, n.frames[2], n.ax, n.ay, 84, 116, 0));
  let c = M(224, 168);
  return (
    c[1].drawImage(xS()[2], r - 28, i - 22),
    bm(t, c[0], 0, 0, 2, 0.6),
    t.drawImage(c[0], 0, 0),
    ym(t, r, i, 10, Nx[3], 0.6),
    tS(t, 58, 54, 52, 0.6, 2, { split: !0, broke: [`#ff7a1a`, null] }),
    SS(t, `pyro`, 28, 156, 2, 6),
    SS(t, `storm`, 140, 160, 1, 6),
    Dm(t, 224, 168, 0.5),
    e
  );
}
function OS(e, t, n, r, i, a = !0) {
  for (let o = Math.floor(n - r - 2); o <= Math.ceil(n + r + 2); o++)
    for (let s = Math.floor(t - r - 2); s <= Math.ceil(t + r + 2); s++) {
      let c = Math.hypot(s + 0.5 - t, o + 0.5 - n),
        l = (L(s, o, i) - 0.5) * 1.3;
      if (c > r + 0.6 + l) continue;
      let u = c > r - 0.4 + l * 0.5 ? Rx[3] : Rx[1];
      (u === Rx[1] &&
        s + 0.5 - t + (o + 0.5 - n) < -r * 0.5 &&
        L(s, o, i + 1) > 0.35 &&
        (u = Rx[2]),
        a && c < r * 0.34 ? (u = Rx[4]) : a && c < r * 0.52 && (u = Rx[3]),
        N(e, s, o, u));
    }
}
function kS(e, t, n, r, i, a, o) {
  let s = Math.cos(r),
    c = Math.sin(r),
    l = [];
  for (let e = 0; e <= i; e += 0.5) {
    let r = e / i,
      u = Math.sin(e * 0.7 + o) * r * 1.4;
    l.push([t + s * e - c * u, n + c * e + s * u, a * (1 - r * 0.85)]);
  }
  for (let [t, n, r] of l) P(e, t, n, r + 0.5, r + 0.5, Rx[3]);
  for (let [t, n, r] of l) r > 0.8 && P(e, t, n, r - 0.3, r - 0.3, Rx[1]);
}
function Ate(e, t, n, r, i, a, o, s, c, l) {
  for (let u = 0; u < l; u++)
    for (let l = 0; l < c; l++) {
      let c = l + 0.5 - t,
        d = (u + 0.5 - n) * 1.1,
        f = Math.hypot(c, d),
        p = Math.atan2(d, c);
      if (f < 1.5 || f > i + 6 || Math.abs(p) > r + 0.1) continue;
      let m = f / i,
        h =
          qx(f / 6 - o * 1.4, p * 7, 11) * 0.6 +
          qx(f / 3 - o * 2.1, p * 15, 12) * 0.4,
        g = 1 - Math.abs(p) / r,
        _ =
          h * 0.85 +
          g * 0.42 -
          Math.max(0, m - 0.8) * 2.2 -
          a * (0.55 + (1 - m) * 0.5);
      if (_ < 0.5) continue;
      let v = _ < 0.545 || (_ < 0.58 && (l + u) % 2 == 0) ? Rx[3] : Rx[1];
      (v === Rx[1] && qx(f / 4 - o * 1.8, p * 11, 13) > 0.68 && (v = Rx[2]),
        s && Math.abs(p) < 0.035 + (1 - m) * 0.05 && m < 0.5
          ? (v = Rx[4])
          : s && Math.abs(p) < 0.08 + (1 - m) * 0.07 && m < 0.62 && (v = Rx[3]),
        N(e, l, u, v));
    }
}
function AS(e, t, n, r = !0) {
  let i = 0,
    a = 0;
  for (let [e, n] of t) ((i += e), (a += n));
  ((i /= t.length), (a /= t.length));
  let o = n >= 1 ? Ix[4] : n > 0.6 ? Ix[3] : n > 0.3 ? Lx[2] : Hx[0],
    s = 0,
    c = r ? t.length : t.length - 1;
  for (let n = 0; n < c; n++) {
    let [r, c] = t[n],
      [l, u] = t[(n + 1) % t.length],
      d = Math.hypot(l - r, u - c);
    if (d < 0.01) continue;
    let f = (l - r) / d,
      p = (u - c) / d,
      m = -p,
      h = f,
      g = (r + l) / 2,
      _ = (c + u) / 2;
    (i - g) * m + (a - _) * h < 0 && ((m = -m), (h = -h));
    for (let t = 0; t < d; t += 0.5) {
      let n = r + f * t,
        i = c + p * t,
        a = s + t;
      for (let t = 0; t < 2; t++) {
        let r = (((a + t * 3) % 6) + 6) % 6 < 1,
          s = t * 2.5;
        (N(e, n + m * s - 0.5, i + h * s - 0.5, r ? o : Hx[3]),
          N(
            e,
            n + m * (s + 1) - 0.5,
            i + h * (s + 1) - 0.5,
            r ? o : t === 0 ? Hx[2] : Hx[1],
          ));
      }
    }
    s += d;
  }
}
function jte(e, t, n, r, i = 48) {
  let a = [];
  for (let o = 0; o < i; o++)
    a.push([e + Math.cos((o / i) * jx) * n, t + Math.sin((o / i) * jx) * r]);
  return a;
}
function jS(e, t, n, r, i) {
  let a = [[e, t]];
  for (let o = 0; o <= 16; o++) {
    let s = n - r + (2 * r * o) / 16;
    a.push([e + Math.cos(s) * i, t + (Math.sin(s) * i) / 1.1]);
  }
  return a;
}
function MS(e, t, n, r = !1) {
  let i = (e) => (r ? 32 / e : 0),
    a = (n / 4) * jx,
    o = Math.cos(a) * 2.5,
    s = Math.sin(a) * 2.5,
    c = r ? 40 : 3,
    l =
      qx(e / 16, t / 16, c, i(16)) * 0.5 +
      qx(e / 8, t / 8, c + 1, i(8)) * 0.32 +
      qx(e / 4, t / 4, c + 2, i(4)) * 0.18;
  if (l > 0.62) return l > 0.67 ? (l > 0.74 ? Vx[4] : Vx[3]) : Kx[0];
  let u = qx((e + l * 14 + o) / 8, (t + l * 10 + s) / 8, c + 3, i(8)),
    d = Math.abs(u - 0.5);
  return d < 0.018
    ? Kx[6]
    : d < 0.036
      ? Kx[5]
      : d < 0.062
        ? Kx[4]
        : l > 0.48
          ? Kx[1]
          : l > 0.34
            ? Kx[2]
            : Kx[3];
}
function NS(e, t, n, r, i, a, o, s = !1) {
  for (let c = n; c < n + i; c++)
    for (let n = t; n < t + r; n++)
      (!o || o(n, c)) && N(e, n, c, MS(n, c, a, s));
}
function PS(e, t) {
  let n = 7.5,
    r = Math.round(t / n),
    i = 1e9,
    a = 1e9,
    o = 0,
    s = 0,
    c = 0;
  for (let l = r - 1; l <= r + 1; l++) {
    let r = (l & 1) * (9 / 2),
      u = Math.round((e - r) / 9);
    for (let d = u - 1; d <= u + 1; d++) {
      let u = d * 9 + r,
        f = l * n,
        p = Math.hypot(e + 0.5 - u, (t + 0.5 - f) * 1.15);
      p < i
        ? ((a = i), (i = p), (o = u), (s = f), (c = d * 131 + l * 17))
        : p < a && (a = p);
    }
  }
  return { id: c, hx: o, hy: s, edge: a - i };
}
function FS(e, t, n, r, i, a, o = {}) {
  let s = (e, a) => ((e - t) / r) ** 2 + ((a - n) / i) ** 2 <= 1,
    c = (e) => (o.sunk ? o.sunk(L(e, a)) : 0),
    l = Math.floor(t - r - 6),
    u = Math.ceil(t + r + 6),
    d = Math.floor(n - i - 6),
    f = Math.ceil(n + i + 8);
  for (let t = d; t <= f; t++)
    for (let n = l; n <= u; n++) {
      let r = PS(n, t);
      if (!(s(r.hx, r.hy) && c(r.id) < 1))
        for (let r = 1; r <= 3; r++) {
          let i = PS(n, t - r);
          if (!s(i.hx, i.hy)) continue;
          let a = c(i.id);
          if (!(a >= 1 || r > Math.round(3 * (1 - a)))) {
            N(
              e,
              n,
              t,
              r === Math.round(3 * (1 - a)) ? (o.rim ?? zx[1]) : Bx[1],
            );
            break;
          }
        }
    }
  for (let t = d; t <= f; t++)
    for (let n = l; n <= u; n++) {
      let r = PS(n, t);
      if (!s(r.hx, r.hy)) continue;
      let i = c(r.id);
      if (i >= 1) continue;
      let l = L(r.id, a, 3),
        u = l > 0.6 ? Bx[3] : l > 0.25 ? Bx[2] : Bx[1];
      (i > 0 && (u = Bx[1]),
        r.edge < 0.8
          ? (u =
              (o.seamAll || L(r.id, a, 4) < 0.18 || i > 0) && o.seam
                ? o.hot && r.edge < 0.4 && L(n, t, a) > 0.72
                  ? o.hot
                  : o.seam
                : Bx[0])
          : r.edge < 1.5 &&
            (u = t + 0.5 < r.hy - 1 ? Bx[4] : t + 0.5 > r.hy + 1.5 ? Bx[1] : u),
        N(e, n, t, u));
    }
}
function Mte(e, t, n, r) {
  r < 0.45
    ? (N(e, t, n, Wx[3]), N(e, t, n - 1, Wx[4]), N(e, t + 1, n, Wx[2]))
    : r < 0.7
      ? (N(e, t, n, Rx[4]), N(e, t + 1, n, Rx[3]), N(e, t, n + 1, Wx[3]))
      : r < 1 && N(e, t, n, r < 0.85 ? `#6a6474` : `#45404f`);
}
function IS(e, t, n, r, i = 3.4, a = 4.6, o = 0.5) {
  let s = [];
  for (let e = 0; e < 16; e++) {
    let o = (e / 16) * jx,
      c = Math.cos(o) * i,
      l = Math.sin(o) * a;
    s.push([
      t + c * Math.cos(r) - l * Math.sin(r),
      n + c * Math.sin(r) + l * Math.cos(r),
    ]);
  }
  fm(e, s, Gx[1]);
  for (let o = 0; o < 4; o++) {
    let s = (L(o, 3) - 0.5) * i,
      c = (L(o, 4) - 0.5) * a * 1.4;
    N(
      e,
      t + s * Math.cos(r) - c * Math.sin(r),
      n + s * Math.sin(r) + c * Math.cos(r),
      Gx[2],
    );
  }
  let c = o > 0.7 ? Ix[4] : o > 0.35 ? Ix[3] : Ix[2];
  for (let a = -i + 1; a <= i - 1; a += 0.5) {
    let i = Math.sin(a * 2.2) * 1.2 - 0.5;
    N(
      e,
      t + a * Math.cos(r) - i * Math.sin(r),
      n + a * Math.sin(r) + i * Math.cos(r),
      c,
    );
  }
  N(e, t - Math.sin(r) * -a * 0.5 - 1, n + Math.cos(r) * -a * 0.5, Gx[2]);
}
