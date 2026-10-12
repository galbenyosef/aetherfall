// assets__index-BTsv3a2s 221 — math
// Lines 141645-141965 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function $1(e) {
  switch (e.t) {
    case `line`:
      return { x: (e.x0 + e.x1) / 2, y: (e.y0 + e.y1) / 2 };
    case `cone`:
      return {
        x: e.x + Math.cos(e.a) * e.r * 0.6,
        y: e.y + Math.sin(e.a) * e.r * 0.6,
      };
    case `rect`:
      return { x: e.x + e.w / 2, y: e.y + e.h / 2 };
    default:
      return { x: e.x, y: e.y };
  }
}
function e0(e, t, n, r, i, a, o, s) {
  let c = Math.round(t * $ - o),
    l = Math.round(n * $ - s),
    u = r > 0.5 ? 3 : 2;
  (e.drawImage(Bp(i, 7), c - 7, l - 7),
    (e.fillStyle = i),
    e.fillRect(c - u, l - u, u * 2, u * 2),
    (e.fillStyle = a),
    e.fillRect(c - 1, l - 1, 2, 2));
}
function t0(e, t, n, r, i, a, o) {
  switch (
    (e.save(),
    (e.globalAlpha = Math.max(0, r)),
    (e.fillStyle = n),
    (e.strokeStyle = n),
    (e.lineWidth = 1),
    e.beginPath(),
    t.t)
  ) {
    case `circle`:
      e.ellipse(
        t.x * $ - i,
        t.y * $ - a,
        Math.max(0.5, t.r * $),
        Math.max(0.5, (t.r * $) / 1.1),
        0,
        0,
        Math.PI * 2,
      );
      break;
    case `ring`:
      (e.ellipse(
        t.x * $ - i,
        t.y * $ - a,
        t.r1 * $,
        (t.r1 * $) / 1.1,
        0,
        0,
        Math.PI * 2,
      ),
        e.ellipse(
          t.x * $ - i,
          t.y * $ - a,
          Math.max(0.5, t.r0 * $),
          Math.max(0.5, (t.r0 * $) / 1.1),
          0,
          0,
          Math.PI * 2,
          !0,
        ));
      break;
    case `line`: {
      let n = Math.atan2(t.y1 - t.y0, t.x1 - t.x0),
        r = (-Math.sin(n) * t.w) / 2,
        o = (Math.cos(n) * t.w) / 2;
      (e.moveTo((t.x0 + r) * $ - i, (t.y0 + o) * $ - a),
        e.lineTo((t.x1 + r) * $ - i, (t.y1 + o) * $ - a),
        e.lineTo((t.x1 - r) * $ - i, (t.y1 - o) * $ - a),
        e.lineTo((t.x0 - r) * $ - i, (t.y0 - o) * $ - a),
        e.closePath());
      break;
    }
    case `cone`:
      (e.moveTo(t.x * $ - i, t.y * $ - a),
        e.arc(
          t.x * $ - i,
          t.y * $ - a,
          t.r * $,
          t.a - t.spread / 2,
          t.a + t.spread / 2,
        ),
        e.closePath());
      break;
    case `rect`:
      e.rect(t.x * $ - i, t.y * $ - a, t.w * $, t.h * $);
  }
  (e.fill(`evenodd`),
    o > 0 &&
      ((e.globalAlpha = Math.min(1, Math.max(0, r) * 2.5) * o), e.stroke()),
    e.restore());
}
function n0(e, t) {
  switch (e.t) {
    case `circle`:
      return { ...e, r: e.r * t };
    case `ring`:
      return { ...e, r1: e.r0 + (e.r1 - e.r0) * t };
    case `line`:
      return {
        ...e,
        x1: e.x0 + (e.x1 - e.x0) * t,
        y1: e.y0 + (e.y1 - e.y0) * t,
      };
    case `cone`:
      return { ...e, r: e.r * t };
    case `rect`:
      return {
        ...e,
        x: e.x + (e.w * (1 - t)) / 2,
        y: e.y + (e.h * (1 - t)) / 2,
        w: e.w * t,
        h: e.h * t,
      };
  }
}
var r0 = (e, t, n, r, i = 0, a = 1, o = !1) => ({
  sh: [e, t],
  fh: [n, r],
  ang: i,
  len: a,
  far: o,
});
function i0(e) {
  return e === 2
    ? r0(12, 15, 8, 16.5)
    : e === 1
      ? r0(2, 16, 12.5, 17.5)
      : r0(13, 16, 3.5, 17.5);
}
function a0(e, t, n = 1) {
  let r = i0(e);
  return e === 2
    ? { ...r, sh: [r.sh[0] + 0.4 + 0.4 * n * t, r.sh[1]], ang: 0.07 * n * t }
    : {
        ...r,
        sh: [r.sh[0], r.sh[1] + 0.5 * n * t],
        fh: [r.fh[0], r.fh[1] - 0.8 * n * t],
      };
}
var o0 = (e) => Math.max(-1.6, Math.min(1.6, e)),
  s0 = (e, t, n) =>
    e === 2
      ? r0(14.5, 13.5 + n * 2, 11, 14.5, o0(Math.atan2(t, -n) * 0.85), 1, !0)
      : e === 1
        ? r0(4 + t * 2, 14, 12, 15.5, t * 0.9, 0.75)
        : r0(10.5 + t * 2, 15, 5, 15, t * 0.9, 0.7),
  c0 = (e) =>
    e === 2
      ? r0(10.5, 14.5, 8, 16.5, -0.35)
      : e === 1
        ? r0(1.5, 14.5, 12.5, 17, -0.15)
        : r0(13.5, 14.5, 3.5, 17, 0.2),
  l0 = (e) =>
    e === 2
      ? r0(12.5, 8.5, 13, 11.5, 0.25, 1, !0)
      : e === 1
        ? r0(3, 9, 12, 8.5, -0.15)
        : r0(12, 9, 3.5, 8.5, 0.15),
  u0 = (e) =>
    e === 2
      ? r0(11, 8.5, 10, 9.5, -0.15, 1, !0)
      : e === 1
        ? r0(6, 9, 10, 9.5)
        : r0(10, 9, 6, 9.5),
  d0 = (e) =>
    e === 2
      ? r0(13, 18.5, 12, 18, 0.1, 1, !0)
      : e === 1
        ? r0(4, 19, 7, 16.5, 0, 0.85)
        : r0(12, 19, 9, 16.5, 0, 0.85),
  f0 = (e, t) =>
    e === 2
      ? t >= 0
        ? r0(10, 13, 6.5, 12, -0.7, 1, !0)
        : r0(14, 13, 14, 12, 0.7, 1, !0)
      : e === 1
        ? r0(1, 13, 13.5, 13, -0.3)
        : r0(14.5, 13, 2, 13, 0.3);
function p0(e, t, n) {
  return e === 2 && t < -0.2
    ? r0(10, 13.5, 8, 16, o0(Math.atan2(t, -n)))
    : s0(e, t, n);
}
function m0(e, t, n = 0) {
  return e === `chain`
    ? t >= 0.05 && t <= 0.34
    : e === `drain`
      ? t >= 0.06 && t <= 0.56
      : e === `strike`
        ? t >= 0.12 && t <= Math.max(0.2, n) + 0.12
        : e === `rift` && t >= 0.2 && t <= 0.44;
}
var h0 = {
  bolt: () => [
    [0, (e) => i0(e)],
    [0.07, (e) => c0(e)],
    [0.15, s0],
    [0.24, s0],
    [0.4, (e) => i0(e)],
  ],
  nova: () => [
    [0, (e) => i0(e)],
    [0.2, (e) => u0(e)],
    [0.29, (e) => d0(e)],
    [0.42, (e) => d0(e)],
    [0.64, (e) => i0(e)],
  ],
  strike: (e) => [
    [0, (e) => i0(e)],
    [0.18, (e) => l0(e)],
    [Math.max(0.2, e), (e) => l0(e)],
    [Math.max(0.2, e) + 0.1, s0],
    [Math.max(0.2, e) + 0.38, (e) => i0(e)],
  ],
  rift: () => [
    [0, (e) => i0(e)],
    [
      0.12,
      (e, t) =>
        e === 2
          ? r0(10.5, 14.5, 8, 16, -0.9)
          : e === 1
            ? r0(1, 14, 12.5, 16, -0.8)
            : r0(14, 14, 3.5, 16, 0.8 * (t >= 0 ? -1 : 1)),
    ],
    [
      0.34,
      (e, t) =>
        e === 2
          ? r0(14, 14.5, 12.5, 14.5, 1.1, 1, !0)
          : e === 1
            ? r0(5 + t * 2, 14, 11 + t * 2, 14)
            : r0(11 + t * 2, 15, 5 + t * 2.5, 14, 0.8 * (t >= 0 ? 1 : -1)),
    ],
    [0.55, (e) => i0(e)],
  ],
  chain: () => [
    [0, (e) => i0(e)],
    [
      0.08,
      (e, t, n) =>
        e === 2
          ? r0(11, 15.5, 14.5, 13 + n * 2, -0.25, 1, !0)
          : e === 1
            ? r0(2, 16, 11 + t * 2.5, 13.5)
            : r0(13.5, 16, 6.5 + t * 3, 14, 0.15),
    ],
    [
      0.32,
      (e, t, n) =>
        e === 2
          ? r0(11, 15.5, 14.5, 13 + n * 2, -0.25, 1, !0)
          : e === 1
            ? r0(2, 16, 11 + t * 2.5, 13.5)
            : r0(13.5, 16, 6.5 + t * 3, 14, 0.15),
    ],
    [0.45, (e) => i0(e)],
  ],
  drain: () => [
    [0, (e) => i0(e)],
    [
      0.1,
      (e, t) =>
        e === 2
          ? r0(12, 15.5, 15, 14, 0, 1, !0)
          : e === 1
            ? r0(2, 16, 11 + t * 3, 13.5)
            : r0(13, 16, 5.5 + t * 3, 13.5),
    ],
    [
      0.5,
      (e) =>
        e === 2
          ? r0(12, 15.5, 10, 14.5, 0, 1, !0)
          : e === 1
            ? r0(2, 16, 10, 14.5)
            : r0(13, 16, 6, 14.5),
    ],
    [0.66, (e) => i0(e)],
  ],
  blink: () => [
    [0, f0],
    [0.1, f0],
    [0.42, (e) => i0(e)],
  ],
};
function g0(e, t = 0) {
  let n = (h0[e] ?? h0.bolt)(t);
  return n[n.length - 1][0];
}
var _0 = (e, t, n) => e + (t - e) * n;
function v0(e, t, n) {
  return {
    sh: [_0(e.sh[0], t.sh[0], n), _0(e.sh[1], t.sh[1], n)],
    fh: [_0(e.fh[0], t.fh[0], n), _0(e.fh[1], t.fh[1], n)],
    ang: _0(e.ang, t.ang, n),
    len: _0(e.len, t.len, n),
    far: n < 0.5 ? e.far : t.far,
  };
}
function y0(e, t, n, r, i, a = 0) {
  let o = (h0[e] ?? h0.bolt)(a);
  if (t < 0 || t > o[o.length - 1][0]) return null;
  let s = (e) => (typeof e[1] == `function` ? e[1](n, r, i) : e[1]);
  for (let e = 0; e < o.length - 1; e++) {
    let [n] = o[e],
      [r] = o[e + 1];
    if (t <= r) {
      let i = r > n ? (t - n) / (r - n) : 1,
        a = i * i * (3 - 2 * i);
      return v0(s(o[e]), s(o[e + 1]), a);
    }
  }
  return s(o[o.length - 1]);
}
