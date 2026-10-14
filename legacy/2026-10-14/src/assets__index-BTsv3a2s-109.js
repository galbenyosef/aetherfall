// assets__index-BTsv3a2s 109 — math
// Lines 52394-52741 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function UO(e, t, n = 7) {
  let r = ((((e / BO) % 1) + 1) % 1) * n,
    i = Math.floor(r),
    a = r - i,
    o = a * a * (3 - 2 * a);
  return om(L(i % n, t), L((i + 1) % n, t), o);
}
function WO(e, t, n, r = !1, i = !1, a = K) {
  let o = Math.round(t),
    s = Math.round(n);
  (r && N(e, o - 1, s - 1, a[2], 3, 3),
    N(e, o - 1, s - 1, a[3], 2, 2),
    N(e, o - 1, s - 1, i ? FO : a[4]));
}
function GO(e, t, n, r, i, a, o = {}) {
  let s = o.r ?? K,
    c = o.sag ?? 0,
    l = Math.max(1, Math.hypot(r - t, i - n)),
    u = -(i - n) / l,
    d = (r - t) / l,
    f = o.from ?? 0,
    p = o.to ?? 1,
    m = o.w ?? 1,
    h = (e) => [t + (r - t) * e, n + (i - n) * e + Math.sin(e * Math.PI) * c],
    g = Math.ceil(l * 1.6);
  if (o.twin === !1)
    for (let t = 0; t <= g; t++) {
      let n = t / g;
      if (n < f || n > p) continue;
      let [r, i] = h(n);
      N(e, r - (m - 1) / 2, i - (m - 1) / 2, s[2], m, m);
    }
  else {
    let t = m > 1 ? 1.8 : 1.2;
    for (let n of [!0, !1])
      for (let r = 0; r <= g; r++) {
        let i = r / g;
        if (i < f || i > p) continue;
        let [o, c] = h(i),
          _ = (i * l) / 3 + a * BO;
        for (let r of [1, -1]) {
          let i = Math.cos(_) * r > 0;
          if (i === n) continue;
          let a = Math.sin(_) * t * r;
          N(e, o + u * a, c + d * a, i ? (m > 1 ? s[3] : s[2]) : s[1]);
        }
      }
  }
  let _ = o.gap ?? 0;
  if (_ > 0)
    for (let t = (1 - (((a % 1) + 1) % 1)) * _; t < l; t += _) {
      let n = t / l;
      if (n < f || n > p || n < 0.03) continue;
      let [r, i] = h(n);
      WO(e, r + 0.5, i + 0.5, o.big, o.hot, s);
    }
}
function KO(e, t, n, r, i, a, o = {}) {
  let s = r / 1.1,
    c = o.drawn ?? 1,
    l = o.seed ?? 1;
  (o.fill !== !1 &&
    (Sm(e, t, n, r, s, K[1], 0.3),
    i > 0 && Sm(e, t, n, r * i, s * i, K[2], 0.32)),
    B(e, t, n, r, s, K[2], (e) => HO(e) <= c));
  let u = Math.max(5, Math.round(r / 3.2));
  for (let o = 0; o < u; o++) {
    let l = -Math.PI / 2 + ((o + (a % 4) * 0.25) / u) * BO;
    HO(l) > c ||
      WO(
        e,
        t + Math.cos(l) * r + 0.5,
        n + Math.sin(l) * s + 0.5,
        !1,
        i > 0.85 && o % 2 == 0,
      );
  }
  let d = Math.max(3, Math.round(r / 4.5));
  for (let o = 0; o < d; o++) {
    let u = 0.3 + L(o, l, 1) * (Math.PI - 0.6);
    if (HO(u) > c) continue;
    let d = Math.round(t + Math.cos(u) * r - 0.5),
      f = Math.round(n + Math.sin(u) * s - 0.5),
      p = 1 + Math.floor((1 + L(o, l, 2) * 2.5) * (0.35 + i * 0.9));
    (N(e, d, f + 1, K[2], 1, p),
      (a + o) % 3 == 2 ? N(e, d, f + 3 + p, K[2]) : N(e, d, f + 1 + p, K[3]));
  }
}
function qO(e, t, n, r, i, a = !0) {
  let o = Math.cos(r),
    s = Math.sin(r),
    c = -s,
    l = o,
    u = t - o * i * 0.5,
    d = n - s * i * 0.5;
  for (let t = 1; t <= i; t += 0.5) {
    let n = 1.3 * (1 - t / i) + 0.15;
    for (let r = -n; r <= n; r += 0.5)
      N(e, u + o * t + c * r, d + s * t + l * r, r < -0.25 ? zO[3] : zO[2]);
  }
  (P(e, u + o * 1.6, d + s * 1.6, 1.6, 1.6, K[2]),
    N(e, u + o * 1.2 - c * 0.8, d + s * 1.2 - l * 0.8, K[3]),
    N(e, u + o * (i - 1.2), d + s * (i - 1.2), a ? FO : zO[3]));
}
function JO(e, t, n, r, i, a = K, o = !0, s = 1.1) {
  if (r < 1) {
    N(e, t, n, a[2]);
    return;
  }
  for (let o = Math.floor(n - r); o <= Math.ceil(n + r); o++)
    for (let c = Math.floor(t - r * 1.3); c <= Math.ceil(t + r * 1.3); c++) {
      let l = c + 0.5 - t,
        u = (o + 0.5 - n) * s,
        d = Math.hypot(l, u),
        f = r * (0.72 + 0.4 * UO(Math.atan2(u, l), i, 6));
      if (d > f) continue;
      let p = d / f,
        m = r < 2.6,
        h = m ? a[2] : a[1];
      (!m &&
        p > 0.8 &&
        (h = l + u < -r * 0.3 ? a[2] : l + u > r * 0.3 ? a[0] : a[1]),
        N(e, c, o, h));
    }
  if (r > 2) {
    let i = Math.max(2, Math.round(r * 0.45));
    (N(e, t - r * 0.45, n - r * 0.35, a[2], i, 1),
      N(e, t - r * 0.45, n - r * 0.35, a[3], Math.max(1, i - 2), 1));
  }
  if (!o) return;
  let c = 2 + Math.floor(L(i, 7) * 3);
  for (let o = 0; o < c; o++) {
    let c = L(o, i, 3) * BO,
      l = r * (1.2 + L(o, i, 4) * 0.5) + 1,
      u = L(o, i, 5) > 0.6 && r > 3 ? 2 : 1;
    N(e, t + Math.cos(c) * l, n + (Math.sin(c) * l) / s, a[2], u, u);
  }
}
function YO(e, t, n, r, i, a, o = K) {
  let s = Math.sin(am(r * 1.4) * Math.PI),
    c = i * (0.28 + 0.22 * sm(r));
  for (let r of [!1, !0]) {
    for (let l = 0; l < 9; l++) {
      let u = (l / 9) * BO + L(l, a) * 0.35;
      if (Math.sin(u) > 0 !== r) continue;
      let d = t + Math.cos(u) * c,
        f = n + Math.sin(u) * c * 0.5,
        p = s * i * (0.3 + L(l, a, 1) * 0.35);
      if (p < 1) continue;
      let m = Math.cos(u) * p * 0.4;
      (z(e, d, f, d + m, f - p, r ? o[2] : o[1]),
        r && N(e, d + m * 0.5, f - p * 0.5, o[3]),
        N(e, d + m * 1.1, f - p - 1.5, r ? o[3] : o[2]));
    }
    !r && s > 0.15 && B(e, t, n, c, c * 0.5, o[2]);
  }
  for (let s = 0; s < 10; s++) {
    let c = L(s, a, 4) * BO,
      l = i * (0.35 + L(s, a, 5) * 0.4),
      u = i * (0.35 + L(s, a, 6) * 0.5);
    N(
      e,
      t + Math.cos(c) * l * r,
      n + Math.sin(c) * l * r * 0.5 - u * 4 * r * (1 - r),
      r > 0.9 ? o[1] : r < 0.25 ? o[4] : o[3],
    );
  }
}
function XO(e, t, n, r, i) {
  let a = Math.floor(L(r, 31, 7) * 4096) | 2,
    o = Math.round(t),
    s = Math.round(n);
  for (let t = 0; t < 4; t++)
    for (let n = 0; n < 3; n++) a & (1 << (t * 3 + n)) && N(e, o + n, s + t, i);
}
function ZO(e, t, n, r = Math.PI / 2) {
  let i = n - 6;
  return [0, 1, 2, 3, 4].map((n) => {
    let a = r + (n * BO) / 5;
    return [e + Math.cos(a) * i, t + (Math.sin(a) * i) / 1.1];
  });
}
function QO(e, t, n, r, i = {}) {
  let a = i.lit ?? 1,
    o = i.seed ?? 1,
    s = i.rot ?? Math.PI / 2;
  Sm(e, t, n, r + 2, (r + 2) / 1.1, `#0a0204`, 0.45);
  let c = (e) =>
      e > a
        ? K[1]
        : a >= 1
          ? K[3]
          : a - e < 0.025
            ? FO
            : a - e < 0.07
              ? K[4]
              : K[3],
    l = (e) => (e > a ? K[0] : K[1]),
    u = ZO(t, n, r, s),
    d = Math.ceil(BO * r * 1.3),
    f = [
      [r, 0, 0.32],
      [r - 6, 0.32, 0.1],
    ],
    p = (e) => {
      for (let r = 0; r < d; r++) {
        let i = r / d,
          a = s + i * BO;
        for (let [r, o, s] of f)
          e(t + Math.cos(a) * r, n + (Math.sin(a) * r) / 1.1, o + i * s);
      }
      for (let t = 0; t < 5; t++) {
        let [n, r] = u[t],
          [i, a] = u[(t + 2) % 5],
          o = Math.ceil(Math.hypot(i - n, a - r) * 1.3);
        for (let s = 0; s <= o; s++)
          e(om(n, i, s / o), om(r, a, s / o), 0.42 + 0.116 * (t + s / o));
      }
    };
  (p((t, n, r) => N(e, t, n + 1, l(r))), p((t, n, r) => N(e, t, n, c(r))));
  let m = Math.floor((BO * (r - 3)) / 6);
  for (let i = 0; i < m; i++) {
    let c = i / m,
      l = s + c * BO,
      u = c * 0.32,
      d = u > a ? K[1] : a < 1 && a - u < 0.06 ? K[4] : PO[2];
    XO(
      e,
      t + Math.cos(l) * (r - 3) - 1,
      n + (Math.sin(l) * (r - 3)) / 1.1 - 2,
      i + o * 50,
      d,
    );
  }
  if (i.chase !== void 0)
    for (let a = 0; a < 3; a++) {
      let o = s + (i.chase - a * 0.012) * BO;
      WO(
        e,
        t + Math.cos(o) * r + 0.5,
        n + (Math.sin(o) * r) / 1.1 + 0.5,
        a === 0,
        a === 0,
      );
    }
  let h = i.flare ?? 0;
  return (
    u.forEach(([t, n], r) => {
      (P(e, t, n, 1.6, 1.4, a > 0.95 ? K[3] : K[1]),
        h > 0 &&
          (P(e, t, n, 1.5 + h * 1.5, 1.3 + h * 1.3, K[3]),
          N(e, t - 0.5, n - 0.5, FO, 2, 1),
          h > 0.6 && V(e, t, n, 5, 3 + h * 4, K, r + o, 0.3)));
    }),
    u
  );
}
function $O(e, t, n, r, i, a) {
  let o = (e) => e / 1.1;
  (Sm(e, t, n, r, o(r), K[0], 0.25 + i * 0.25),
    B(e, t, n, r - 7, o(r - 7), K[1]),
    B(e, t, n, r, o(r), K[1]));
  let s = Math.floor((BO * (r - 3.5)) / 5);
  for (let a = 0; a < s; a++) {
    let c = a / s,
      l = -Math.PI / 2 + c * BO,
      u = c < i - 0.03 ? K[3] : c < i ? FO : PO[1];
    XO(
      e,
      t + Math.cos(l) * (r - 3.5) - 1,
      n + Math.sin(l) * o(r - 3.5) - 2,
      a + 300,
      u,
    );
  }
  let c = r - 15;
  B(
    e,
    t,
    n,
    c,
    o(c),
    i > 0.5 ? K[2] : K[1],
    (e) => Math.round(e * 14) % 3 != 0,
  );
  for (let r = 0; r < 10; r++) {
    let a = r / 10,
      o = -Math.PI / 2 + a * BO,
      s = Math.cos(o),
      l = Math.sin(o) / 1.1,
      u = t + s * c,
      d = n + l * c,
      f = a < i;
    (z(e, u - s * 4, d - l * 4, u + s * 4, d + l * 4, f ? K[3] : K[1]),
      f &&
        z(
          e,
          u - l * 3 - s * 2,
          d + s * 3 - l * 2,
          u + l * 3 + s * 2,
          d - s * 3 + l * 2,
          i - a < 0.1 ? FO : K[4],
        ));
  }
  for (let r = 0; r < 8; r++) {
    let s = (r / 8) * BO + Math.PI / 8;
    dm(
      e,
      t + Math.cos(s) * 10,
      n + Math.sin(s) * o(10),
      t + Math.cos(s) * (c - 5),
      n + Math.sin(s) * o(c - 5),
      i > 0.6 ? K[2] : K[1],
      2,
      2,
      a,
    );
  }
  if ((B(e, t, n, 9, o(9), i > 0.9 ? K[3] : K[2]), i > 0)) {
    let s = Math.ceil(BO * r * 1.5 * i);
    for (let a = 0; a <= s; a++) {
      let c = -Math.PI / 2 + (a / Math.max(1, s)) * i * BO;
      (N(e, t + Math.cos(c) * (r + 1), n + Math.sin(c) * o(r + 1), K[3]),
        N(e, t + Math.cos(c) * r, n + Math.sin(c) * o(r), FO));
    }
    let c = -Math.PI / 2 + i * BO,
      l = t + Math.cos(c) * r,
      u = n + Math.sin(c) * o(r);
    i < 1 &&
      (P(e, l, u, 2, 2, K[3]),
      N(e, l - 0.5, u - 0.5, FO, 2, 2),
      V(e, l, u, 5, 4, K, a, a * 0.5));
  }
}
function ek(e, t, n, r, i = 0) {
  let a = ay(t, i);
  e.drawImage(a.c, Math.round(n - a.ax), Math.round(r - a.ay));
}
function tk(e, t = 20) {
  let n = e.getContext(`2d`).getImageData(0, 0, e.width, e.height).data,
    r = [];
  for (let i = 0; i < e.height; i++)
    for (let a = 0; a < e.width; a++) {
      let o = (i * e.width + a) * 4;
      n[o + 3] > t && r.push([a, i, `rgb(${n[o]},${n[o + 1]},${n[o + 2]})`]);
    }
  return r;
}
