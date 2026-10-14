// index-BTsv3a2s 69 — math
// Lines 40386-40710 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function zy(e) {
  return Cy(`shardicon:${e}`, 12, 14, (t, n) => {
    let r = vy[e];
    (by(t, 2, 7, 10, 7, 6, 0, r[1]),
      by(t, 2, 7, 10, 7, 6, 13, r[0]),
      N(t, 5, 3, r[3], 1, 3),
      F(n));
  });
}
function By(e, t) {
  return Cy(`noteicon:${e}:${t}`, 14, 14, (n, r) => {
    let i = vy[e];
    (P(n, 7, 7, 5, 5.5, t ? `#3a3348` : i[0]),
      P(n, 7, 6.5, 3.6, 4, t ? `#4a4458` : i[1]),
      t ? xy(n, 4, 2, 10, 12, gy) : N(n, 6, 5, i[3], 2, 2),
      F(r));
  });
}
function Vy(e) {
  return Cy(`badge:${e}`, 18, 18, (t, n) => {
    (e === `normal`
      ? (P(t, 9, 9, 7, 7, `#2a8fb0`),
        P(t, 9, 9, 5, 5, hy),
        N(t, 8, 5, `#ffffff`, 2, 8),
        N(t, 5, 8, `#ffffff`, 8, 2))
      : (P(t, 9, 9, 7, 7, _y.black),
        P(t, 9, 9, 5, 5, _y.dark),
        P(t, 9, 9, 3, 3, _y.red),
        N(t, 8, 8, _y.core, 2, 2)),
      F(n));
  });
}
function Hy(e, t = !1) {
  return Cy(`mapicon:${e}:${t}`, 16, 16, (n, r) => {
    let i = {
      cisterns: `#7fe0b0`,
      barrowdeep: `#ffcf7a`,
      rimewell: `#9fe8ff`,
      emberdeep: `#ff9a3a`,
      folly: `#e0b64a`,
    };
    if (
      (N(n, 2, 3, `#2a2233`, 12, 12),
      P(n, 8, 6, 4, 3, t ? `#3a3348` : i[e]),
      N(n, 4, 6, t ? `#3a3348` : i[e], 8, 8),
      N(n, 6, 7, `#0b0616`, 4, 7),
      P(n, 8, 7, 2, 1.5, `#0b0616`),
      t)
    )
      for (let e = 0; e < 4; e++)
        N(n, 3 + e * 3, 2 + (e % 2) * 12, vy[Co[e]][2]);
    F(r);
  });
}
function Uy(e) {
  let t = e.w ?? 1,
    n = e.h ?? 1;
  return ry[e.kind]?.layer === `decal`
    ? { x: (e.x + t / 2) * 16, y: (e.y + 1 - n / 2) * 16 }
    : { x: (e.x + t / 2) * 16, y: (e.y + 1) * 16 };
}
var Wy = [`#0f2a14`, `#2f8f3a`, `#5ccf4f`, `#b6f59a`, `#f0ffe0`],
  Gy = [`#1c221c`, `#4a5448`, `#7a8a78`, `#a8b4a4`, `#e2e8de`],
  Ky = [`#0a2422`, `#145a50`, `#2f9c78`, `#6fe0c0`, `#dcfff4`],
  qy = rm.storm,
  Jy = rm.blight,
  Yy = `#0a1a0c`,
  Xy = [Ky[1], Ky[3], Ky[4], qy[3], `#ffffff`],
  Zy = rm.bone,
  Qy = rm.hollow,
  $y = [`#14120e`, `#2a2219`, `#3a3024`, `#5a4a38`, `#8a7454`],
  eb = [`#3a2e14`, `#6a5a2a`, `#a08a4a`, `#d8c07a`, `#fff0c0`],
  tb = [`#3a2408`, `#8a5a1a`, `#e0a040`, `#ffcf7a`, `#fff7d1`],
  nb = [`#1e2028`, `#4a4e58`, `#8a8f99`, `#b9bec8`, `#e8ecf2`],
  rb = im.void,
  ib = `#6b4424`,
  ab = `#8a857a`,
  ob = `#5f5a52`,
  sb = [`ember`, `rime`, `storm`, `void`],
  cb = (e, t, n = {}) => ({ label: e, frames: t, ...n });
function lb(e, t, n, r, i) {
  if (r < 1.5) {
    (N(e, t - 1, n - 1, i[2], 2, 2), N(e, t - 1, n - 1, i[4]));
    return;
  }
  (B(e, t, n, r, r, i[3]), N(e, t - r * 0.45, n - r * 0.45, i[4]));
}
function ub(e, t, n, r) {
  for (let [i, a] of [
    [-2, 0],
    [2, 0],
    [0, -2],
    [0, 2],
  ])
    N(e, t + i, n + a, r[3]);
  for (let [i, a] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    N(e, t + i, n + a, r[4]);
}
function db(e, t, n, r, i, a, o, s = 0) {
  let c = r / 1.1;
  (Sm(e, t, n, r, c, o[1], 0.3),
    i > 0 && Sm(e, t, n, r * i, c * i, o[2], 0.35),
    B(e, t, n, r, c, o[1]));
  let l = Math.max(6, Math.round((r * 2 * Math.PI) / 6.5));
  for (let i = 0; i < l; i++) {
    let u = (i / l) * Math.PI * 2 + (L(i, s) - 0.5) * 0.3,
      d = Math.sin(a * 1.7 + i * 2.1) * 0.8,
      f = 1 + Math.floor(L(i, s, 1) * 2.4),
      p = t + Math.cos(u) * (r + d),
      m = n + Math.sin(u) * (c + d);
    L(i, a, s + 3) > 0.84 ? ub(e, p, m, o) : lb(e, p, m, f, o);
  }
}
function fb(e, t, n, r, i, a, o, s = 0) {
  if (
    (P(e, t, n, r, i, a[1]),
    P(e, t - 0.5, n - 0.5, Math.max(1, r - 1), Math.max(1, i - 1), a[2]),
    o)
  ) {
    let a = t + Math.cos(s * 1.6) * r * 0.35,
      c = n + 0.5 + Math.sin(s * 1.6) * i * 0.3;
    (N(e, a, c, o[2], 2, 2), N(e, a, c, o[3]));
  }
  (N(e, t - r * 0.5, n - i * 0.55, a[3], 2, 1),
    N(e, t - r * 0.5, n - i * 0.55, a[4]));
}
function pb(e, t, n, r) {
  let i = t === `left` ? -10 : r + 10,
    a = t === `left` ? 1 : -1;
  (P(e, i, n * 0.6, 18, n * 0.55, Wy[1]),
    P(e, i - a, n * 0.6, 17, n * 0.55 - 1, Wy[2]),
    P(e, i - a * 3, n * 0.45, 12, n * 0.3, Wy[3]),
    P(e, i - a * 4, n * 0.42, 11, n * 0.27, Wy[2]));
  for (let i = Math.round(n * 0.3); i < n * 0.9; i += 5)
    N(e, t === `left` ? 4 + (i % 2) : r - 5 - (i % 2), i, Wy[3]);
}
function mb(e, t, n, r, i, a, o) {
  let s = i * (0.35 + sm(r) * 0.65);
  for (let r = 0; r < 9; r++) {
    let i = (r / 9) * Math.PI * 2 + L(r, o) * 0.6,
      c = s * (0.7 + L(r, o, 1) * 0.5);
    P(
      e,
      t + Math.cos(i) * c,
      n + Math.sin(i) * c * 0.42,
      1.2 + L(r, o, 2) * 1.3,
      0.9,
      a[1],
    );
  }
  if (
    (P(e, t, n, s, s * 0.42, a[1]),
    P(
      e,
      t - 0.5,
      n - 0.5,
      Math.max(1, s - 1.5),
      Math.max(1, s * 0.42 - 1),
      r < 0.85 ? a[2] : a[1],
    ),
    r < 0.3)
  )
    for (let r = 0; r < 8; r++) {
      let i = Math.PI + (r / 7) * Math.PI,
        c = t + Math.cos(i) * s,
        l = n + Math.sin(i) * s * 0.42,
        u = 2 + L(r, o, 3) * 3;
      (z(e, c, l, c + Math.cos(i) * 1.5, l - u, a[2]),
        N(e, c + Math.cos(i) * 1.5, l - u, a[3]));
    }
  let c = r * 1.05 + 0.1;
  for (let r = 0; r < 8; r++) {
    let s = (r - 3.5) * (0.35 + L(r, o, 4) * 0.25) * i * 0.22,
      l = i * (0.9 + L(r, o, 5) * 0.6),
      u = t + s * c * 3,
      d = n - 1 - l * c * 2 + l * 2 * c * c;
    (d > n - 1 && c > 0.4) || (N(e, u, d, a[2], 2, 2), N(e, u, d, a[3]));
  }
  if (r > 0.6)
    for (let r = 0; r < 3; r++)
      lb(
        e,
        t + (L(r, o, 6) - 0.5) * s * 1.2,
        n + (L(r, o, 7) - 0.5) * s * 0.4,
        1,
        a,
      );
}
function hb(e, t, n, r, i, a, o, s = {}) {
  let c = r * (s.scale ?? 1);
  if (c < 1) return;
  let l = s.pull ?? 0,
    u = 1 + l * 1.4,
    d = 1 - l * 0.75,
    f = t + l * r * 0.9,
    p = c / 1.1;
  for (
    let t = Math.floor(n - p * d * 1.2) - 1;
    t <= Math.ceil(n + p * d * 1.2) + 1;
    t++
  )
    for (
      let r = Math.floor(f - c * u * 1.2) - 1;
      r <= Math.ceil(f + c * u * 1.2) + 1;
      r++
    ) {
      let l = (r + 0.5 - f) / u,
        m = ((t + 0.5 - n) * 1.1) / d,
        h = Math.hypot(l, m),
        g = Math.atan2(m, l),
        _ =
          c *
          (1 +
            0.06 * Math.sin(3 * g + o) +
            0.04 * Math.sin(5 * g + o * 2.3) +
            0.02 * Math.sin(9 * g + i * 1.3));
      if (h > _ || (s.fade && L(r, t, o) < s.fade)) continue;
      let v;
      ((v =
        _ - h < 1.2
          ? L(r, t, i + o) > 0.75
            ? a[4]
            : a[3]
          : _ - h < 2.5
            ? a[2]
            : _ - h < 6
              ? (r + t) & 1
                ? a[2]
                : a[1]
              : L(r, t, o + 5) < 0.08
                ? a[2]
                : a[1]),
        s.swirl &&
          _ - h >= 1.2 &&
          Math.sin(g * 3 + h * 0.45 - i * 1.4) > 0.82 &&
          (v = a[3]));
      for (let e = 0; e < 2; e++) {
        let l = f + (L(e, o, 1) - 0.5) * c * u,
          m = n + (L(e, o, 2) - 0.5) * p * d,
          h = ((i / 4 + L(e, o, 3)) % 1) * c * 0.35,
          g = Math.hypot(r + 0.5 - l, (t + 0.5 - m) * 1.4);
        Math.abs(g - h) < 0.55 && h > 1.2 && !s.swirl && (v = a[3]);
      }
      N(e, r, t, v);
    }
  for (let t = 0; t < 4; t++)
    (i + t) % 3 != 0 &&
      N(
        e,
        f + (L(t, o, 8) - 0.5) * c * u,
        n + (L(t, o, 9) - 0.5) * p * d,
        a[4],
        2,
        1,
      );
}
function gb(e, t, n, r, i, a = 0.6) {
  (e.save(), (e.globalAlpha = a));
  for (let a = Math.floor(n - r); a <= n + r; a++)
    for (let o = Math.floor(t - r); o <= t + r; o++)
      Math.hypot(o + 0.5 - t, (a + 0.5 - n) * 1.1) >
        r * (0.9 + L(o, a, i) * 0.12) ||
        (o + a) & 1 ||
        N(e, o, a, Ky[0]);
  e.restore();
}
function _b(e, t, n, r, i, a, o) {
  let s = [
    [e, t],
    [n, r],
  ];
  for (let e = 0; e < i; e++) {
    let t = [s[0]];
    for (let n = 0; n < s.length - 1; n++) {
      let [r, i] = s[n],
        [c, l] = s[n + 1],
        u = Math.hypot(c - r, l - i) || 1,
        d = (L(n, e, o) - 0.5) * u * a;
      t.push(
        [(r + c) / 2 - ((l - i) / u) * d, (i + l) / 2 + ((c - r) / u) * d],
        s[n + 1],
      );
    }
    s = t;
  }
  return s;
}
function vb(e, t, n, r = !1) {
  let i = (n, r) => {
    for (let i = 0; i < t.length - 1; i++)
      z(e, t[i][0], t[i][1], t[i + 1][0], t[i + 1][1], n, r);
  };
  (i(n[1], r ? 3 : 2), i(n[3], r ? 2 : 1), r && i(n[4], 1));
}
function yb(e, t, n, r, i, a, o, s = !1, c = 0.55) {
  let l = _b(t, n, r, i, 4, c, a);
  vb(e, l, o, s);
  let u = Math.hypot(r - t, i - n),
    d = Math.atan2(i - n, r - t);
  for (let [t, n] of [
    [5, 1],
    [10, -1],
  ]) {
    let r = l[Math.min(l.length - 1, t)],
      i = d + n * (0.7 + L(a, t) * 0.4);
    vb(
      e,
      _b(
        r[0],
        r[1],
        r[0] + Math.cos(i) * u * 0.28,
        r[1] + Math.sin(i) * u * 0.28,
        2,
        0.6,
        a + t,
      ),
      o,
    );
  }
}
