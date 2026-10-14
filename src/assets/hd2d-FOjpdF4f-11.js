// hd2d-FOjpdF4f 11 — face
// Lines 3733-4063 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
function Di(e, t, n) {
  let r = null,
    i = -1;
  for (let a = 0; a <= t; a++) {
    let o = a < t && e[n * t + a] >= 128;
    (o && i < 0 && (i = a),
      !o &&
        i >= 0 &&
        ((!r || a - i > r[1] - r[0] + 1) && (r = [i, a - 1]), (i = -1)));
  }
  return r;
}
function Oi(e, t, n, r, i) {
  let a = Math.round(r),
    o = n - a;
  if (a < 2 || o < 2) return null;
  let s = Ei(e, t, n - a - 1);
  if (!s) return null;
  let c = [];
  for (let r = n - a; r < n; r++) {
    let i = Ei(e, t, r);
    if (!i) continue;
    let a = c[c.length - 1];
    a && a.l === i[0] && a.r === i[1] && a.z0 === n - r
      ? (a.z0 = n - r - 1)
      : c.push({ z0: n - r - 1, z1: n - r, l: i[0], r: i[1] });
  }
  if (!c.length) return null;
  if (c.length > 6) {
    let r = Ei(e, t, n - 1 - (a >> 1)) ?? [c[0].l, c[0].r];
    c = [{ z0: 0, z1: a, l: r[0], r: r[1] }];
  } else {
    ((c[0].z1 = a), (c[c.length - 1].z0 = 0));
    for (let e = 1; e < c.length; e++) c[e].z1 = c[e - 1].z0;
  }
  let l = s,
    u = Math.max(2, (s[1] - s[0] + 1) * 0.35);
  for (let r = 0; r < n - a; r++) {
    let n = Di(e, t, r);
    if (n && n[1] - n[0] + 1 >= u) {
      l = [Math.max(s[0], n[0]), Math.min(s[1], n[1])];
      break;
    }
  }
  let d = Math.min(i, o);
  return { Hw: a, Rr: o, bands: c, eave: s, ridge: l, dEff: d, R: o - d / 2 };
}
function ki(e, t, n, r, i) {
  let a = t.c.width,
    o = t.c.height;
  if (!t.fold || Math.abs(t.y + o - t.baseY) > 0.5) return !1;
  let s = Oi(r, a, o, t.fold.wallH, i);
  if (!s) return !1;
  let c = bi(t, n),
    l = bi(t, n, { x0: t.x - 0.5, shade: vr }),
    u = bi(t, n, { x0: t.x + 0.5, shade: vr }),
    d = t.baseY,
    f = d - s.dEff,
    p = d - s.dEff / 2,
    m = s.Hw + s.R,
    h = t.x + s.eave[0],
    g = t.x + s.eave[1] + 1,
    _ = t.x + s.ridge[0],
    v = t.x + s.ridge[1] + 1,
    y = s.Hw;
  s.bands.forEach((n, r) => {
    let i = t.x + n.l,
      a = t.x + n.r + 1,
      { z0: o, z1: p } = n;
    (e.face(
      [
        [i, d, o],
        [a, d, o],
        [a, d, p],
        [i, d, p],
      ],
      [0, 1, 0],
      c,
    ),
      e.face(
        [
          [i, f, o],
          [i, d, o],
          [i, d, p],
          [i, f, p],
        ],
        [-1, 0, 0],
        l,
      ),
      e.face(
        [
          [a, f, o],
          [a, d, o],
          [a, d, p],
          [a, f, p],
        ],
        [1, 0, 0],
        u,
      ),
      e.face(
        [
          [i, f, o],
          [a, f, o],
          [a, f, p],
          [i, f, p],
        ],
        [0, -1, 0],
        c,
      ));
    let m =
      r > 0 ? [t.x + s.bands[r - 1].l, t.x + s.bands[r - 1].r + 1] : [h, g];
    (m[0] > i || m[1] < a) &&
      e.face(
        [
          [i, f, p],
          [a, f, p],
          [a, d, p],
          [i, d, p],
        ],
        [0, 0, 1],
        c,
      );
  });
  let b = [h, d, y],
    x = [g, d, y],
    S = [h, f, y],
    C = [g, f, y],
    w = [_, p, m],
    T = [v, p, m];
  (e.face([b, x, T, w], [0, 1, 1], c),
    e.face([S, C, T, w], [0, -1, 1], c),
    e.face([b, w, S], [-1, 0, 0], _ > h ? c : l),
    e.face([x, T, C], [1, 0, 0], v < g ? c : u));
  let E = t.x + s.bands[0].l,
    D = t.x + s.bands[0].r + 1;
  (h < E || g > D) && e.face([b, x, C, S], [0, 0, -1], c);
  let O = Math.min(2, y);
  return (
    h < E &&
      e.face(
        [
          [h, d, y - O],
          [E, d, y - O],
          [E, d, y],
          [h, d, y],
        ],
        [0, 1, 0],
        c,
      ),
    g > D &&
      e.face(
        [
          [D, d, y - O],
          [g, d, y - O],
          [g, d, y],
          [D, d, y],
        ],
        [0, 1, 0],
        c,
      ),
    !0
  );
}
function Ai(e, t, n, r, i, a, o = 0) {
  let s = n.c.width,
    c = n.c.height,
    l = n.baseY - n.y - a;
  if (l < 8) {
    let e = 0.15,
      i = bi(n, r, { y0: n.y - e, height: 0 });
    t.face(
      [
        [n.x, n.y, e],
        [n.x + s, n.y, e],
        [n.x + s, n.y + c, e],
        [n.x, n.y + c, e],
      ],
      [0, 0, 1],
      i,
    );
    return;
  }
  let u = s,
    d = -1;
  for (let e = 0; e < c; e++) {
    let t = Ei(i, s, e);
    t && ((u = Math.min(u, t[0])), (d = Math.max(d, t[1])));
  }
  if (d < u) return;
  let f = n.x + u,
    p = n.x + d + 1,
    m = n.baseY,
    h = m - a,
    g = bi(n, r);
  if (
    (e.face(
      [
        [f, m, 0],
        [p, m, 0],
        [p, m, l],
        [f, m, l],
      ],
      [0, 1, 0],
      g,
    ),
    e.face(
      [
        [f, h, l],
        [p, h, l],
        [p, m, l],
        [f, m, l],
      ],
      [0, 0, 1],
      g,
    ),
    o > 0)
  ) {
    (ji(e, n, r, i, h, l, o),
      e.face(
        [
          [f, h, 0],
          [p, h, 0],
          [p, h, l],
          [f, h, l],
        ],
        [0, -1, 0],
        g,
      ));
    return;
  }
  (e.face(
    [
      [f, h, 0],
      [f, m, 0],
      [f, m, l],
      [f, h, l],
    ],
    [-1, 0, 0],
    bi(n, r, { x0: n.x - 0.5, shade: vr }),
  ),
    e.face(
      [
        [p, h, 0],
        [p, m, 0],
        [p, m, l],
        [p, h, l],
      ],
      [1, 0, 0],
      bi(n, r, { x0: n.x + 0.5, shade: vr }),
    ),
    e.face(
      [
        [f, h, 0],
        [p, h, 0],
        [p, h, l],
        [f, h, l],
      ],
      [0, -1, 0],
      g,
    ));
}
function ji(e, t, n, r, i, a, o) {
  let s = t.c.width,
    c = t.c.height,
    l = Math.max(0, c - o),
    u = s,
    d = -1;
  for (let e = l; e < c; e++) {
    let t = Ei(r, s, e);
    t && ((u = Math.min(u, t[0])), (d = Math.max(d, t[1])));
  }
  if (d < u) return;
  let f = t.baseY,
    p = t.y + l;
  for (let [r, o, s] of [
    [t.x + u, -1, -1.5],
    [t.x + d + 1, 1, 1.5],
  ]) {
    let c = [],
      l = [
        [i, 0],
        [f, 0],
        [f, a],
        [i, a],
      ];
    for (let e = 0; e < 4; e++) {
      let t = l[e],
        n = l[(e + 1) % 4],
        r = t[0] - t[1] - p,
        i = n[0] - n[1] - p;
      if ((r >= 0 && c.push(t), r >= 0 != i >= 0)) {
        let e = r / (r - i);
        c.push([t[0] + (n[0] - t[0]) * e, t[1] + (n[1] - t[1]) * e]);
      }
    }
    let u = bi(t, n, { x0: t.x + s, shade: vr });
    for (let t = 1; t + 1 < c.length; t++)
      e.face(
        [
          [r, c[0][0], c[0][1]],
          [r, c[t][0], c[t][1]],
          [r, c[t + 1][0], c[t + 1][1]],
        ],
        [o, 0, 0],
        u,
      );
  }
}
function Mi(e, t) {
  if (e.ref.t !== `tower`) return null;
  let n = e.ref.opts;
  if (!n.d || !n.bodyH) return null;
  let r = n.d * 16,
    i = Math.round(r * 0.32),
    a = n.roof ? Math.round(r * 0.95) : 0;
  return t.width !== r + 6 ||
    t.height !== i * 2 + n.bodyH + a + (n.flag ? 14 : 6) + 4
    ? null
    : {
        D: r,
        rx: r / 2 - 1,
        ry: i,
        bodyH: n.bodyH,
        roofH: a,
        roof: !!n.roof,
        flag: !!n.flag,
      };
}
var Ni = 24,
  Pi = 0.64,
  Fi = 1.5;
