// assets__hd2d-FOjpdF4f 14 — math
// Lines 4466-4610 of readable/assets__hd2d-FOjpdF4f.pretty.js (statement-aligned).
function Ui(e, t) {
  let n = e.n,
    r = [],
    i = (t, r) => t >= 0 && r >= 0 && t < n && r < n && e.h[r * n + t] > 0,
    a = (t, r) => i(t, r) && (e.flag[r * n + t] & d.ARCH) !== 0,
    o = new V(0, 0, 1),
    s = (e, t, n, i, a, s, c, l) => {
      let u = e.meta.sizePx,
        d = new N().compose(
          new V(t, n, 0),
          new Ne().setFromAxisAngle(o, i),
          new V(a / u.widthPx, s / u.depthPx, c / u.heightPx),
        ),
        f = {
          key: `wall-piece-${t},${n}`,
          kind: `wall`,
          c: { width: a, height: c },
          x: t - a / 2,
          y: l - c,
          baseY: l,
          tx: Math.floor(t / 16),
          ty: Math.floor(n / 16),
        };
      r.push({ it: f, p: void 0, a: e, m: d });
    },
    c = new Set();
  for (let r = 0; r < n; r++)
    for (let i = 0; i < n; i++) {
      let o = r * n + i;
      if (!a(i, r) || a(i - 1, r) || a(i, r - 1)) continue;
      let l = t(o);
      if (!l) continue;
      let u = 0;
      for (; a(i + u, r);) u++;
      let d = 0;
      for (; a(i, r + d);) d++;
      let f = i - Vi,
        p = i + u + Vi,
        m = r - 0.5,
        h = r + d + 0.5;
      for (let e = Math.floor(m); e < Math.ceil(h); e++)
        for (let t = f; t < p; t++) c.add(e * n + t);
      s(
        l,
        ((f + p) / 2) * 16,
        ((m + h) / 2) * 16,
        0,
        (p - f) * 16,
        (h - m) * 16,
        e.h[o] * Hi,
        h * 16,
      );
    }
  for (let r = 0; r < n; r++)
    for (let o = 0; o < n; o++) {
      let l = r * n + o,
        u = e.h[l];
      if (!u || a(o, r) || c.has(l)) continue;
      let d = t(l);
      if (!d) continue;
      let f = o * 16 + 8,
        p = r * 16 + 8,
        m = i(o - 1, r) || i(o + 1, r),
        h = i(o, r - 1) || i(o, r + 1),
        g = (r + 1) * 16;
      if (
        (m && s(d, f, p, 0, 16, 16, u, g),
        h && s(d, f, p, Math.PI / 2, 16, 16, u, g),
        !m && !h)
      ) {
        let e = i(o + 1, r - 1) || i(o - 1, r + 1),
          t = i(o - 1, r - 1) || i(o + 1, r + 1);
        (e && s(d, f, p, -Math.PI / 4, 16 * Math.SQRT2, 16, u, g),
          t && s(d, f, p, Math.PI / 4, 16 * Math.SQRT2, 16, u, g),
          !e && !t && s(d, f, p, 0, 16, 16, u, g));
      }
    }
  return r;
}
var q = Math.PI / 180,
  Wi = 35 * q,
  Gi = 16 * q,
  Ki = 2048,
  qi = () => new Float64Array(16);
function Ji(e, t, n) {
  for (let r = 0; r < 4; r++) {
    let i = n[r * 4],
      a = n[r * 4 + 1],
      o = n[r * 4 + 2],
      s = n[r * 4 + 3];
    for (let n = 0; n < 4; n++)
      e[r * 4 + n] = t[n] * i + t[4 + n] * a + t[8 + n] * o + t[12 + n] * s;
  }
  return e;
}
function Yi(e, t) {
  let [n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _] = t,
    v = n * s - r * o,
    y = n * c - i * o,
    b = n * l - a * o,
    x = r * c - i * s,
    S = r * l - a * s,
    C = i * l - a * c,
    w = u * h - d * m,
    T = u * g - f * m,
    E = u * _ - p * m,
    D = d * g - f * h,
    O = d * _ - p * h,
    k = f * _ - p * g,
    ee = v * k - y * O + b * D + x * E - S * T + C * w;
  if (ee === 0) return e.fill(0);
  let A = 1 / ee;
  return (
    (e[0] = (s * k - c * O + l * D) * A),
    (e[1] = (i * O - r * k - a * D) * A),
    (e[2] = (h * C - g * S + _ * x) * A),
    (e[3] = (f * S - d * C - p * x) * A),
    (e[4] = (c * E - o * k - l * T) * A),
    (e[5] = (n * k - i * E + a * T) * A),
    (e[6] = (g * b - m * C - _ * y) * A),
    (e[7] = (u * C - f * b + p * y) * A),
    (e[8] = (o * O - s * E + l * w) * A),
    (e[9] = (r * E - n * O - a * w) * A),
    (e[10] = (m * S - h * b + _ * v) * A),
    (e[11] = (d * b - u * S - p * v) * A),
    (e[12] = (s * T - o * D - c * w) * A),
    (e[13] = (n * D - r * T + i * w) * A),
    (e[14] = (h * y - m * x - g * v) * A),
    (e[15] = (u * x - d * y + f * v) * A),
    e
  );
}
function Xi(e, t, n) {
  let r = e[3] * t + e[7] * n - e[11] + e[15],
    i = e[3] * t + e[7] * n + e[11] + e[15],
    a = (e[0] * t + e[4] * n - e[8] + e[12]) / r,
    o = (e[1] * t + e[5] * n - e[9] + e[13]) / r,
    s = (e[2] * t + e[6] * n - e[10] + e[14]) / r,
    c = (e[0] * t + e[4] * n + e[8] + e[12]) / i,
    l = (e[1] * t + e[5] * n + e[9] + e[13]) / i,
    u = (e[2] * t + e[6] * n + e[10] + e[14]) / i - s;
  if (!(u < -1e-9)) return null;
  let d = -s / u;
  return { x: a + (c - a) * d, y: o + (l - o) * d };
}
