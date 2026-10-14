// index-BTsv3a2s 105 — math
// Lines 51452-51555 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function EO(e, t, n, r, i) {
  let a = L(t, n, r);
  N(
    e,
    t,
    n,
    a > 0.975
      ? L(t, n, i + 9) > 0.35
        ? `#ffffff`
        : CO
      : a > 0.95
        ? SO[2]
        : (t + n) % 2
          ? SO[0]
          : SO[1],
  );
}
function DO(e, t, n, r, i, a, o, s) {
  for (let c = Math.ceil(t); c <= n; c++) {
    let l = (c - t) / Math.max(1, n - t),
      u = Math.max(0, Math.sin(Math.PI * l)) ** 0.5,
      d = (i * a * u) / 2,
      f = L(Math.floor((c - t) / 7), o, 5),
      p = d > 2 ? (f > 0.72 ? 1 : f < 0.22 ? -1 : 0) : 0;
    if (d < 0.75) {
      a > 0 && u > 0.2 && N(e, c, r, SO[3]);
      continue;
    }
    let m = Math.round(r - d) + p,
      h = Math.round(r + d) + p;
    for (let t = m + 1; t < h; t++) EO(e, c, t, o, s);
    (N(e, c, m, SO[4]),
      N(e, c, h, CO),
      a > 0.6 &&
        L(c, o, s + 3) > 0.94 &&
        N(e, c, L(c, o) > 0.5 ? m - 2 : h + 2, L(c, s) > 0.5 ? `#ffffff` : CO));
  }
}
function OO(e, t, n, r, i, a, o) {
  let s = Math.round(t),
    c = 0;
  for (; s < n;) {
    let t = 6 + Math.floor(L(c, a) * 8),
      l = L(c, a, 1),
      u = l > 0.7 ? 1 : l < 0.25 ? -1 : 0;
    for (let a = 0; a < t && s < n; a++, s++)
      (s + o) % (i > 0.5 ? 2 : 3) == 0 && N(e, s, r + u, i > 0.66 ? CO : SO[3]);
    c++;
  }
}
var _ne = (e) =>
  e < 5
    ? e - 1
    : e < 13
      ? 4 + (e - 5) * 0.3
      : e < 16
        ? 7 + (e - 13)
        : 9 + (e - 16) * 0.1;
function kO(e, t, n, r, i) {
  for (let a = 2; a <= 42; a++) {
    let o = _ne(a),
      s = Math.round(14 - o),
      c = Math.round(14 + o);
    if (r === `fill`)
      for (let r = s; r <= c; r++)
        a > 38
          ? N(e, t + r + 1, n + a + 1, (r + a) % 3 == 0 ? wO[1] : wO[0])
          : EO(e, t + r + 1, n + a + 1, 77, i);
    else
      (N(e, t + s, n + a + 1, TO),
        N(e, t + c + 2, n + a + 1, TO),
        (a === 2 || a === 42) &&
          N(e, t + s, n + a + (a === 2 ? 0 : 2), TO, c - s + 3, 1));
  }
}
function AO(e, t, n = {}) {
  let r = xg(`unseen`)[e],
    i = n.pad ?? 0,
    [a, o] = M(r.width + i * 2, r.height);
  for (let e = 0; e < r.height; e += 3) {
    let a = e / 3;
    if (!t(a) || (n.hem === !1 && e >= 39)) continue;
    let s = Math.min(3, r.height - e),
      c = i + (n.shift?.(a) ?? 0);
    o.drawImage(r, 0, e, r.width, s, c, e, r.width, s);
  }
  if (
    (n.tint &&
      (o.save(),
      (o.globalCompositeOperation = `source-atop`),
      (o.globalAlpha = n.tintA ?? 0.5),
      (o.fillStyle = n.tint),
      o.fillRect(0, 0, a.width, a.height),
      o.restore()),
    n.lips)
  ) {
    let e = o.getImageData(0, 0, a.width, a.height).data;
    for (let n = 0; n < r.height; n += 3)
      if (t(n / 3))
        for (let t = 0; t < a.width; t++)
          e[(n * a.width + t) * 4 + 3] > 20 && L(t, n) > 0.3 && N(o, t, n, CO);
  }
  return a;
}
