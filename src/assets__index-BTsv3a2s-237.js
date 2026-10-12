// assets__index-BTsv3a2s 237 — math
// Lines 157732-158012 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var I8 = { heart: 26, minor: 8, notable: 15, keystone: 22 },
  rce = 0.25,
  ice = 2.6,
  ace = (() => {
    let e = 1 / 0,
      t = -1 / 0,
      n = 1 / 0,
      r = -1 / 0;
    for (let i of Hu.nodes) {
      let a = I8[i.kind] + (i.kind === `keystone` ? 6 : 0);
      if (
        ((e = Math.min(e, i.x - a)),
        (t = Math.max(t, i.x + a)),
        (n = Math.min(n, i.y - a)),
        (r = Math.max(r, i.y + a)),
        i.kind === `keystone`)
      ) {
        let n = i.name.length * 4.5;
        ((e = Math.min(e, i.x - n)),
          (t = Math.max(t, i.x + n)),
          (r = Math.max(r, i.y + I8.keystone + 20)));
      }
    }
    return { x0: e, x1: t, y0: n, y1: r };
  })();
function L8(e) {
  return Math.max(15, 9 / Math.max(e, 1e-6));
}
var R8 = 0.77;
function oce(e, t, n, r) {
  let i = (r * R8 * L8(e.k) * e.k) / 2,
    a = e.x + n * e.k,
    o = 4 + i,
    s = t - 4 - i,
    c = o > s ? t / 2 : Math.min(s, Math.max(o, a));
  return Math.max(-i, Math.min(i, c - a)) / e.k;
}
function sce(e, t) {
  let n = ace,
    r = Math.max(
      0.05,
      Math.min((e - 24) / (n.x1 - n.x0), (t - 24) / (n.y1 - n.y0)),
    );
  return {
    k: r,
    x: e / 2 - ((n.x0 + n.x1) / 2) * r,
    y: t / 2 - ((n.y0 + n.y1) / 2) * r,
  };
}
function z8(e, t) {
  let n = L8(e.k) * e.k,
    r = Hu.nodes
      .filter((e) => e.kind === `keystone`)
      .map((r) => ({
        id: r.id,
        cx: e.x + r.x * e.k,
        y: e.y + r.y * e.k,
        half: (r.name.length * R8 * n) / 2,
        s: oce(e, t, r.x, r.name.length) * e.k,
      })),
    i = (e, n) =>
      Math.max(
        0,
        n < 0
          ? Math.min(e.s + e.half, e.cx + e.s - e.half - 4)
          : Math.min(e.half - e.s, t - 4 - (e.cx + e.s + e.half)),
      );
  for (let e = 0; e < 4; e++) {
    r.sort((e, t) => e.cx + e.s - (t.cx + t.s));
    let e = !1;
    for (let t = 0; t < r.length; t++)
      for (let a = t + 1; a < r.length; a++) {
        let o = r[t],
          s = r[a];
        if (Math.abs(o.y - s.y) >= n * 0.75) continue;
        let c = o.cx + o.s + o.half + 8 - (s.cx + s.s - s.half);
        if (c <= 1e-9) continue;
        let l = i(o, -1),
          u = i(s, 1),
          d = Math.min(l, c / 2),
          f = Math.min(u, c - d);
        ((d = Math.min(l, c - f)),
          (o.s -= d),
          (s.s += f),
          d + f > 1e-9 && (e = !0));
      }
    if (!e) break;
  }
  return new Map(r.map((t) => [t.id, t.s / e.k]));
}
function B8(e, t) {
  let n = L8(e.k),
    r = z8(e, t),
    i = [];
  for (let t of Hu.nodes) {
    let a = e.x + t.x * e.k,
      o = e.y + t.y * e.k,
      s = (I8[t.kind] + (t.kind === `keystone` ? 6 : 0)) * e.k;
    if (
      (i.push({ x: a - s, y: o - s, w: 2 * s, h: 2 * s }),
      t.kind !== `keystone`)
    )
      continue;
    let c = (t.name.length * R8 * n * e.k) / 2,
      l = a + (r.get(t.id) ?? 0) * e.k,
      u = o + (I8.keystone + 1 + n) * e.k;
    i.push({ x: l - c, y: u - n * e.k, w: 2 * c, h: n * e.k * 1.2 });
  }
  return i;
}
function V8(e, t, n, r = 2) {
  return B8(e, t).some((e) =>
    n.some(
      (t) =>
        e.x < t.x + t.w + r &&
        t.x - r < e.x + e.w &&
        e.y < t.y + t.h + r &&
        t.y - r < e.y + e.h,
    ),
  );
}
var H8 = 0.6;
function cce(e, t, n) {
  let r = sce(e, t);
  if (!n.length || !V8(r, e, n)) return r;
  let i = (n) =>
      n.every((n) => n.x >= 0 && n.y >= 0 && n.x + n.w <= e && n.y + n.h <= t),
    a = (e, t, r) =>
      !e.some((e) =>
        n.some(
          (n) =>
            e.x + t < n.x + n.w + 2 &&
            n.x - 2 < e.x + t + e.w &&
            e.y + r < n.y + n.h + 2 &&
            n.y - 2 < e.y + r + e.h,
        ),
      );
  for (let o = 1; 0.97 ** o >= H8; o++) {
    let s = W8(r, r.k * 0.97 ** o, e / 2, t / 2),
      c = B8(s, e),
      l = Math.min(...c.map((e) => e.x)),
      u = Math.max(...c.map((e) => e.x + e.w)),
      d = Math.min(...c.map((e) => e.y)),
      f = Math.max(...c.map((e) => e.y + e.h)),
      p = [];
    for (let n = Math.ceil(-l / 4); n * 4 <= e - u; n++)
      for (let e = Math.ceil(-d / 4); e * 4 <= t - f; e++)
        p.push([n * 4, e * 4]);
    p.sort((e, t) => Math.hypot(...e) - Math.hypot(...t));
    for (let [t, r] of p) {
      if (!a(c, t, r)) continue;
      let o = { k: s.k, x: s.x + t, y: s.y + r };
      if (i(B8(o, e)) && !V8(o, e, n)) return o;
    }
  }
  return W8(r, r.k * H8, e / 2, t / 2);
}
function U8(e, t) {
  return Math.min(ice, Math.max(Math.min(rce, t), e));
}
function W8(e, t, n, r) {
  return { k: t, x: n - ((n - e.x) * t) / e.k, y: r - ((r - e.y) * t) / e.k };
}
function lce(e, t, n, r) {
  let i = e * (t === 1 ? 16 : t === 2 ? r : 1);
  return Math.min(2, Math.max(0.5, Math.exp(-i * (n ? 0.01 : 0.002))));
}
function G8(e, t, n, r = 22) {
  let i = null,
    a = 1 / 0;
  for (let o of Hu.nodes) {
    let s = I8[o.kind] * e.k,
      c = Math.hypot(e.x + o.x * e.k - t, e.y + o.y * e.k - n);
    c > Math.max(r, s) || (c - s < a && ((a = c - s), (i = o.id)));
  }
  return i;
}
function uce(e, t, n, r, i) {
  return { k: e.k, x: e.x + (r - t) / 2, y: e.y + (i - n) / 2 };
}
function K8(e, t, n, r, i) {
  return { k: e.k, x: t / 2 - r * e.k, y: n / 2 - i * e.k };
}
function dce(e, t) {
  if (e.ctrlKey || e.metaKey || e.altKey) return null;
  for (let n of t === void 0 ? [e.key] : [e.key, t]) {
    if (n === `+` || n === `=`) return `in`;
    if (n === `-`) return `out`;
    if (n === `0`) return `fit`;
  }
  return null;
}
function fce(e, t, n) {
  return t
    ? null
    : dce(e, n.name(e)) ||
        (e.key === `Shift` &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.altKey &&
        n.slotOf(e) !== null
          ? `hold`
          : null);
}
function q8(e) {
  return (
    typeof e?.closest == `function` &&
    !!e.closest(`button, .ptree-tools, .ptree-zoom`)
  );
}
function J8() {
  return (0, v.useSyncExternalStore)(oZ, aZ, aZ);
}
function Y8({ b: e, fam: t }) {
  let n = J8(),
    r = t ?? n.family;
  return (0, Q.jsx)(`kbd`, {
    className: `pad-glyph ${r} b-${e}`,
    children: pX(e, r),
  });
}
function pce() {
  return (
    (0, v.useLayoutEffect)(() => p1(null), []),
    (0, Q.jsxs)(`div`, {
      className: `panel aim-prompt`,
      role: `dialog`,
      "aria-label": `Controller aim assist`,
      onMouseDown: (e) => e.stopPropagation(),
      children: [
        (0, Q.jsx)(`b`, { children: `Controller connected` }),
        (0, Q.jsx)(`p`, {
          children: `Turn on aim assist for the controller? Spells find the nearest foe the way you move or aim, and the right stick still aims by hand. Change it any time in Settings.`,
        }),
        (0, Q.jsxs)(`div`, {
          className: `aim-prompt-actions`,
          children: [
            (0, Q.jsx)(`button`, {
              type: `button`,
              className: `ap-btn primary`,
              "data-pad-first": !0,
              onClick: () => yl({ padAim: `on` }),
              children: `Turn on`,
            }),
            (0, Q.jsx)(`button`, {
              type: `button`,
              className: `ap-btn`,
              onClick: () => yl({ padAim: `off` }),
              children: `No thanks`,
            }),
          ],
        }),
        (0, Q.jsxs)(`small`, {
          className: `aim-prompt-hint`,
          children: [
            (0, Q.jsx)(Y8, { b: `LEFT` }),
            ` `,
            (0, Q.jsx)(Y8, { b: `RIGHT` }),
            ` choose, `,
            (0, Q.jsx)(Y8, { b: `A` }),
            ` answer, or just play on.`,
          ],
        }),
      ],
    })
  );
}
function X8({ b: e, children: t }) {
  return (0, Q.jsxs)(`div`, {
    className: `pad-line`,
    children: [
      (0, Q.jsx)(`span`, {
        className: `pad-keys`,
        children: e.map((e) => (0, Q.jsx)(Y8, { b: e }, e)),
      }),
      ` `,
      `— `,
      t,
    ],
  });
}
