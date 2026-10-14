// index-BTsv3a2s 76 — math
// Lines 42447-42685 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function qx(e, t, n, r = 0) {
  let i = Math.floor(e),
    a = Math.floor(t),
    o = e - i,
    s = t - a,
    c = o * o * (3 - 2 * o),
    l = s * s * (3 - 2 * s),
    u = (e) => (r ? ((e % r) + r) % r : e),
    d = (e, t) => L(u(e), u(t), n),
    f = d(i, a),
    p = d(i + 1, a),
    m = d(i, a + 1),
    h = d(i + 1, a + 1);
  return f + (p - f) * c + (m - f) * l + (f - p - m + h) * c * l;
}
function Jx(e, t, n, r, i = W) {
  if (!r) return N(e, t, n, i[3]);
  (N(e, t, n - 1, i[3]),
    N(e, t - 1, n, i[3]),
    N(e, t + 1, n, i[2]),
    N(e, t, n + 1, i[2]),
    N(e, t - 1, n - 1, i[4]));
}
function Yx(e, t, n, r, i, a, o = 0, s = 0) {
  let c = (e) => o > 0 && L(Math.round(e * 24), s) < o;
  (B(e, t, n, r, i, a[2], (e) => Math.sin(e) < 0 && !c(e)),
    B(
      e,
      t,
      n,
      r,
      i,
      a[3],
      (e) => Math.sin(e) >= 0 && Math.abs(Math.cos(e)) >= 0.45 && !c(e),
    ),
    B(
      e,
      t,
      n,
      r,
      i,
      o < 0.5 ? a[4] : a[3],
      (e) => Math.sin(e) >= 0 && Math.abs(Math.cos(e)) < 0.45 && !c(e),
    ));
}
function Xx(e, t, n, r, i, a, o = W, s = 1.5) {
  let c = r / 1.1;
  (Sm(e, t, n, r, c, o[1], 0.28),
    i > 0 && Sm(e, t, n, r * i, c * i, o[2], 0.35),
    Zx(e, t, n, r, a, o, s));
}
function Zx(e, t, n, r, i, a = W, o = 1.5) {
  let s = Math.max(6, Math.round(r / 3.2)),
    c = Math.ceil(r * 14);
  for (let l = 0; l < c; l++) {
    let u = (l / c) * jx,
      d = Math.sin(u * s + i),
      f = r + d * o;
    N(
      e,
      t + Math.cos(u) * f - 0.5,
      n + (Math.sin(u) * f) / 1.1 - 0.5,
      d > 0.6 ? a[4] : d > -0.3 ? a[3] : a[2],
    );
  }
}
function Qx(e, t, n, r, i, a, o, s) {
  for (let c = 0; c < i; c++) {
    let i = -Math.PI / 2 + (L(c, s) - 0.5) * 2,
      l = 0.55 + L(c, s, 1) * 0.45,
      u = t + Math.cos(i) * a * l * r * 0.9,
      d = n + Math.sin(i) * a * l * r * 2 + a * r * r * 1.6;
    d > n + 1 ||
      (N(e, u, d, r < 0.45 ? o[4] : o[3]), r < 0.7 && N(e, u, d + 1, o[2]));
  }
}
function $x(e, t, n, r, i, a, o) {
  for (let s = 0; s < i; s++) {
    let c = s / i,
      l = (r / 2) * (1 - c * 0.3) + Math.sin(s * 0.55 + o * 1.7) * 0.8;
    for (let r = -Math.round(l); r <= Math.round(l); r++) {
      let i = Math.abs(r) / Math.max(1, l) > 0.75 ? a[3] : a[2];
      ((r * 2 + s + o * 3) % 7 == 0 && (i = a[4]),
        !(c > 0.88 && L(r, s, o) > 0.5) && N(e, t + r, n - s, i));
    }
  }
}
function eS(e, t, n, r, i, a, o, s, c = 1.1) {
  for (let l = 0; l < i; l++) {
    let i = r + (L(l, s) - 0.5) * 1.1,
      u = t + Math.cos(i) * a,
      d = n + (Math.sin(i) * a) / c;
    (z(e, t, n, u, d, o), (t = u), (n = d));
  }
  return [t, n];
}
function tS(e, t, n, r, i, a, o = {}) {
  let s = t + r - 1;
  (N(e, t + 1, n, Fx[3], r - 2, 1),
    N(e, t + 1, n + 8 - 1, Fx[0], r - 2, 1),
    N(e, t, n + 1, Fx[2], 1, 6),
    N(e, s, n + 1, Fx[1], 1, 6),
    N(e, t + 1, n + 1, Px[1], r - 2, 6));
  let c = t + 1 + Math.round((r - 2) * i);
  for (let r = t + 1; r < s; r++) {
    let t = r < c,
      i =
        n + 4 + Math.round(Math.sin(r * 0.75 + a * 1.3) * 1.6 * (t ? 1 : 0.4));
    t
      ? (N(e, r, n + 1, W[1], 1, 6),
        N(e, r, n + 5, W[2], 1, 2),
        N(e, r, i, W[4]),
        r === c - 1 && N(e, r, n + 1, W[4], 1, 6))
      : (r + a) % 3 == 0 && N(e, r, i, Px[2]);
  }
  N(e, t + 2, n + 1, Fx[4], 3, 1);
  for (let a = 1; a <= 6; a++) {
    let o = t + Math.round(((r - 1) * a) / 6),
      s = i >= a / 6 - 0.001;
    N(e, o - +(a === 6), n - 2, s ? W[4] : Fx[1], 1, 2);
  }
  if (o.split) {
    let i = t + Math.floor(r / 2);
    (N(e, i - 1, n - 1, Nx[1], 2, 10),
      N(e, i, n + 2, Nx[3], 1, 4),
      N(e, i, n + 3, Nx[4], 1, 2));
    for (let [t, a] of [
      [-1, o.broke?.[0]],
      [1, o.broke?.[1]],
    ]) {
      let o = i + t * Math.round(r / 4),
        s = n + 4;
      if (
        (fm(
          e,
          [
            [o, s - 4],
            [o + 3, s],
            [o, s + 4],
            [o - 3, s],
          ],
          a ? Fx[0] : Fx[1],
        ),
        fm(
          e,
          [
            [o, s - 3],
            [o + 2, s],
            [o, s + 3],
            [o - 2, s],
          ],
          a ? Px[1] : Fx[3],
        ),
        !a)
      )
        N(e, o - 1, s - 1, Fx[4]);
      else {
        for (let t = 0; t < 4; t++) {
          let n = (t / 4) * jx + 0.6;
          z(e, o, s, o + Math.cos(n) * 4, s + Math.sin(n) * 4, a);
        }
        N(e, o, s, `#ffffff`);
      }
    }
  }
  if (o.cracks && o.cracks > 0) {
    let i = Math.ceil(o.cracks * 6);
    for (let a = 0; a < i; a++) {
      let i = t + 5 + L(a, 41) * (r - 10),
        s = n + 2 + L(a, 42) * 4;
      for (let t = 0; t < 3; t++)
        eS(
          e,
          i,
          s,
          L(a, t, 43) * jx,
          2,
          1.8 + o.cracks * 1.5,
          Fx[4],
          a * 5 + t,
          1,
        );
    }
  }
}
function nS(e, t, n, r, i, a) {
  for (let a = 0; a < Math.ceil(r * 9); a++) {
    let o = (a / Math.ceil(r * 9)) * jx,
      s = r + Math.sin(o * 5 + i * 1.6) * 0.6;
    N(
      e,
      t + Math.cos(o) * s - 0.5,
      n + Math.sin(o) * s - 0.5,
      Math.cos(o + 2.4) > 0.55 ? W[4] : Math.sin(o) > 0 ? W[3] : W[2],
    );
  }
  (N(e, t - r * 0.5, n - r * 0.55, W[4], 2, 1),
    N(e, t - r * 0.6, n - r * 0.35, W[4]));
  for (let a = 0; a < 3; a++) {
    let o = i * 0.9 + (a / 3) * jx;
    N(e, t + Math.cos(o) * r * 0.6, n + Math.sin(o) * r * 0.6, W[2]);
  }
  a &&
    (V(e, t + r, n - 1, 5, 4, Mx, 7),
    B(e, t, n, r - 2, r - 2, W[4], (e) => Math.cos(e) > 0.3));
}
function rS(e, t, n, r, i = 1) {
  let a = i,
    o = (i, o, s, c, l) => {
      let u = (t, n, r) => {
        !l || (Math.round(t) + Math.round(n)) % 2 == 0
          ? N(e, t + i, n + o, r)
          : N(e, t + i, n + o, c);
      };
      for (let e = 0; e <= 15 * a; e++) {
        let i = e / (15 * a),
          o = (1 - i) * 2.6 * a + 0.8,
          c = n + Math.sin(i * 3 + r * 1.4) * 1.2 * i;
        for (let n = -o; n <= o; n += 0.5) u(t - e, c + n * 0.7, s);
      }
      for (let e = -2.4 * a; e <= 2.4 * a; e++)
        for (let r = -3 * a; r <= 3 * a; r++)
          (r / (3 * a)) ** 2 + (e / (2.4 * a)) ** 2 <= 1 &&
            u(t + 2 * a + r, n + e, s);
      for (let e = 0; e < 5; e++)
        for (let i = 0; i < 13 * a; i++) {
          let o = t - 3 * a - i,
            s =
              n -
              2 * a +
              e * a * 0.9 +
              Math.sin(i * 0.45 + r * 1.5 + e) * (0.4 + i * 0.12);
          (i + e) % 3 != 2 && u(o, s, c);
        }
    };
  (o(-1, -1, Fx[2], Fx[2], !1),
    o(0, 0, Px[0], Px[1], !0),
    N(e, t + 0.5 * a, n + 1, Nx[2]));
}
