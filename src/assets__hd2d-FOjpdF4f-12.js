// assets__hd2d-FOjpdF4f 12 — math
// Lines 4064-4168 of readable/assets__hd2d-FOjpdF4f.pretty.js (statement-aligned).
function Ii(e, t, n, r) {
  let i = t.c.width,
    a = t.c.height,
    o = t.x + i / 2,
    s = t.baseY - r.D / 2,
    c = t.y + (a - 1 - r.ry),
    l = bi(t, n, { g: Pi, yc: s, y0: t.y + s - c }),
    u = r.rx + 1,
    d = r.bodyH,
    f = (e, t, n) => [
      o + e * Math.cos((n / Ni) * Math.PI * 2),
      s + e * Math.sin((n / Ni) * Math.PI * 2),
      t,
    ],
    p = (e, t = 0) => {
      let n = (e / Ni) * Math.PI * 2,
        r = Math.hypot(1, t);
      return [Math.cos(n) / r, Math.sin(n) / r, t / r];
    };
  for (let t = 0; t < Ni; t++) {
    let n = f(u, 0, t),
      r = f(u, 0, t + 1),
      i = f(u, d, t),
      a = f(u, d, t + 1);
    (e.smooth(n, r, a, p(t), p(t + 1), p(t + 1), l),
      e.smooth(n, a, i, p(t), p(t + 1), p(t), l));
  }
  let m = d;
  if (r.roof) {
    let t = r.rx + 4,
      n = [o, s, d + r.roofH],
      i = t / r.roofH;
    for (let r = 0; r < Ni; r++) {
      let a = f(t, d, r),
        o = f(t, d, r + 1),
        s = p(r, i),
        c = p(r + 1, i),
        m = p(r + 0.5, i);
      (e.smooth(a, o, n, s, c, m, l),
        e.face([f(u, d, r), f(u, d, r + 1), o, a], [0, 0, -1], l));
    }
    m = d + r.roofH;
  } else {
    let t = [o, s, d],
      n = (e) =>
        f(
          u +
            Fi *
              Math.min(1, 3 * Math.max(0, -Math.sin((e / Ni) * Math.PI * 2))),
          d,
          e,
        );
    for (let r = 0; r < Ni; r++) e.face([n(r), n(r + 1), t], [0, 0, 1], l);
  }
  let h = r.roof ? 16 : r.flag ? 22 : 0;
  h &&
    e.face(
      [
        [o - 4, s, m - 1],
        [o + 11, s, m - 1],
        [o + 11, s, m + h],
        [o - 4, s, m + h],
      ],
      [0, 1, 0],
      l,
    );
}
function Li(e, n, r) {
  let i = n.parent;
  if (!i || !n.door || !r.length) return null;
  let a = r[0],
    o = i.baseY + 0.5,
    s = t(n.door.frames[0]),
    c = a.w / s,
    l = {
      x0: n.x,
      y0: n.y + 0.5,
      ax: a.x,
      ay: a.y,
      aw: a.w,
      ah: a.h,
      baseY: i.baseY,
      height: p(i.c),
      dens: s,
    },
    u = i.baseY - n.y,
    d = u - a.h / s,
    f = e.vertices;
  return (
    e.face(
      [
        [n.x, o, d],
        [n.x + c, o, d],
        [n.x + c, o, u],
        [n.x, o, u],
      ],
      [0, 1, 0],
      l,
    ),
    { it: n, rects: r, page: a.page, start: f, count: e.vertices - f, shown: 0 }
  );
}
function Ri(e, t) {
  return Math.min(t - 1, Math.floor(e * t));
}
