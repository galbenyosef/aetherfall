// assets__index-BTsv3a2s 209 — math
// Lines 130881-131229 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function aQ(e, t) {
  let n = new Map(t.map((e) => [e.id, e])),
    r = e.map((e) => n.get(e.id) ?? e);
  for (let n of t) e.some((e) => e.id === n.id) || r.push(n);
  return r;
}
var oQ = aQ(iQ, ZZ),
  sQ = new Map(oQ.map((e) => [e.id, e]));
function cQ(e) {
  return sQ.get(e);
}
function lQ(e) {
  switch (e.t) {
    case `talk`:
      return e.npcs.length;
    case `inspect`:
      return e.spots.length;
    case `kill`:
    case `loot`:
      return e.count;
    default:
      return 1;
  }
}
function uQ(e) {
  return e.t === `talk` || e.t === `inspect`;
}
function dQ(e, t) {
  if (!uQ(e)) return Math.min(t, lQ(e));
  let n = 0;
  for (let r = 0; r < lQ(e); r++) t & (1 << r) && n++;
  return n;
}
function fQ(e) {
  return Math.max(1, e.level - 2);
}
function pQ(e, t, n) {
  let r = Array.isArray(n) ? new Map(n.map((e) => [e.questId, e])) : n;
  return r.has(e.id) || t < fQ(e)
    ? !1
    : (e.after ?? []).every((e) => r.get(e)?.status === `done`);
}
var mQ = 1.8;
function hQ(e, t, n = oQ) {
  let r = Array.isArray(e) ? new Map(e.map((e) => [e.questId, e])) : e,
    i = n.filter((e) => e.kind === `main`),
    a = (e) => r.get(e.id)?.status === `done`,
    o = i.filter(a).length,
    s = i.findIndex((e) => !a(e)),
    c = s >= 0 ? i[s] : null,
    l = `done`,
    u = null;
  c &&
    (r.get(c.id)?.status === `active`
      ? (l = `active`)
      : pQ(c, t, r)
        ? (l = `ready`)
        : (c.after ?? []).every((e) => r.get(e)?.status === `done`) && t < fQ(c)
          ? ((l = `level`), (u = fQ(c)))
          : (l = `locked`));
  let d = i.map((e) => e.level),
    f = QZ.title;
  return {
    id: QZ.id,
    title: f,
    short: f.split(` · `)[0],
    total: i.length,
    done: o,
    at: c ? s + 1 : i.length,
    band: d.length ? [Math.min(...d), Math.max(...d)] : [1, 1],
    status: l,
    questId: c?.id ?? null,
    opensAt: u,
    pips: i.map((e, t) => (a(e) ? `done` : t === s ? `now` : `later`)),
  };
}
function gQ(e, t, n = oQ) {
  if (e.status === `level`)
    return `The next part of the story opens at level ${e.opensAt}.`;
  if (e.status !== `ready` || !e.questId) return null;
  let r = n.find((t) => t.id === e.questId);
  return `${(r && t(r.giver)) || `Someone in Marizon`} has the next part of the story.`;
}
function _Q(e, t, n) {
  return t || (e.startsWith(`circle:`) ? (n[e.slice(7)]?.name ?? null) : null);
}
function vQ(e, t) {
  return t.status === `ready` || t.status === `level` ? e : null;
}
function yQ(e, t, n) {
  return e > 0 || vQ(t, n) !== null;
}
function bQ(e, t) {
  let n = Math.max(1, e),
    r = { row: !0, n, more: !0, next: t, head: !0, title: !0 },
    i = [r];
  for (let e = n; e >= 1; e--) i.push({ ...r, row: !1, n: e });
  (i.push({ ...r, row: !1, n: 1, more: !1 }),
    t && i.push({ ...r, row: !1, n: 1, more: !1, next: !1 }),
    i.push({ ...r, row: !1, n: 1, more: !1, next: !1, head: !1 }));
  let a = { ...r, row: !1, n: 1, more: !1, next: !1, head: !1, title: !1 };
  i.push(a);
  for (let e = 4; e >= 1; e--) i.push({ ...a, lines: e });
  return i;
}
function xQ(e, t) {
  let n = Math.max(1, t);
  if (e.length <= n) return [...e];
  let r = e.slice(0, n);
  if (r.some((e) => e.tracked)) return r;
  let i = e.find((e) => e.tracked);
  return i ? [...e.slice(0, n - 1), i] : r;
}
function SQ(e, t = oQ) {
  let n = t.filter((e) => e.kind === `main`),
    r = n.findIndex((t) => t.id === e);
  return r >= 0 ? { n: r + 1, total: n.length } : null;
}
function CQ(e, t, n = 0) {
  return (
    e.x < t.x + t.w + n &&
    t.x - n < e.x + e.w &&
    e.y < t.y + t.h + n &&
    t.y - n < e.y + e.h
  );
}
function wQ(e, t, n, r, i, a = `behind`) {
  let { r: o, labelW: s, labelH: c } = i,
    l = a !== `behind`,
    u = e.x < r * 0.4 ? `left` : e.x > r * 0.6 ? `right` : `center`,
    d = l
      ? u === `left`
        ? e.x - o
        : u === `right`
          ? e.x + o
          : e.x
      : e.x - t * o * 3,
    f =
      a === `below`
        ? e.y + o + 3 + c
        : a === `above`
          ? e.y - o - 3 - c * 0.25
          : e.y - n * o * 3 + c * 0.4,
    p = l ? u : d > r * 0.7 ? `right` : d < r * 0.3 ? `left` : `center`,
    m = p === `right` ? d - s : p === `left` ? d : d - s / 2;
  return {
    arrow: { x: e.x - o, y: e.y - o, w: o * 2, h: o * 2 },
    label: { x: m, y: f - c, w: s, h: c * 1.25 },
    at: { x: d, y: f, align: p },
  };
}
var TQ = (e, t) =>
  e.x >= t.x && e.y >= t.y && e.x + e.w <= t.x + t.w && e.y + e.h <= t.y + t.h;
function EQ(e, t, n, r, i, a, o = []) {
  if (
    !Number.isFinite(t.x) ||
    !Number.isFinite(t.y) ||
    !Number.isFinite(n.x) ||
    !Number.isFinite(n.y)
  )
    return null;
  let { r: s, edge: c, pad: l } = i,
    u = { x: c, y: c, w: e.w - c * 2, h: e.h - c * 2 },
    d = { x: 0, y: 0, w: e.w, h: e.h },
    f = (e) => !r.some((t) => CQ(e, t, l)),
    p = { x: n.x - s, y: n.y - s, w: s * 2, h: s * 2 };
  if (TQ(p, u) && f(p)) return null;
  let m = {
      x: Math.min(u.x + u.w, Math.max(u.x, t.x)),
      y: Math.min(u.y + u.h, Math.max(u.y, t.y)),
    },
    h = n.x - m.x,
    g = n.y - m.y,
    _ = Math.hypot(h, g);
  if (!Number.isFinite(_) || _ < 1) return null;
  let v = h / _,
    y = g / _,
    b = Math.atan2(g, h),
    x = v > 0 ? (u.x + u.w - m.x) / v : v < 0 ? (u.x - m.x) / v : 1 / 0,
    S = y > 0 ? (u.y + u.h - m.y) / y : y < 0 ? (u.y - m.y) / y : 1 / 0,
    C = Math.max(0, Math.min(_, x, S)),
    w = Math.min(C, s * 3),
    T = (t, n = `behind`) => {
      let r = { x: m.x + v * t, y: m.y + y * t };
      return {
        x: r.x,
        y: r.y,
        angle: b,
        label: wQ(r, v, y, e.w, i, n).at,
        ...(n === `behind` ? {} : { side: n }),
      };
    },
    E = (e) => f(e) && !(a && CQ(e, a, l)),
    D = (e) => !o.some((t) => CQ(e, t, 2)),
    O = -1,
    k = (t) => {
      for (let n = C; ; n = Math.max(w, n - 4)) {
        let r = { x: m.x + v * n, y: m.y + y * n },
          a = wQ(r, v, y, e.w, i).arrow,
          o = E(a) && D(a);
        if ((o && O < 0 && (O = n), o))
          for (let a of t) {
            let t = wQ(r, v, y, e.w, i, a);
            if (E(t.label) && TQ(t.label, d) && D(t.label)) return T(n, a);
          }
        if (n <= w) break;
      }
      return null;
    };
  return (
    (k([`behind`]) ?? k([`below`, `above`])) ||
    (O >= 0 ? { ...T(O), bare: !0 } : { ...T(w), hidden: !0 })
  );
}
function DQ(e, t, n = 1) {
  let r = [];
  for (let i of e) {
    if (
      i.checkVisibility?.({ opacityProperty: !0, visibilityProperty: !0 }) ===
      !1
    )
      continue;
    let e = i.getBoundingClientRect();
    if (e.width < 1 || e.height < 1) continue;
    let a = i.closest(`.hud`) ? n : 1;
    r.push({
      x: e.left * a - t.left,
      y: e.top * a - t.top,
      w: e.width * a,
      h: e.height * a,
    });
  }
  return r;
}
function OQ(e, t) {
  let n = e?.getBoundingClientRect().width ?? 0;
  if (n < 1) return 1;
  let r = t / n;
  return Math.abs(r - 1) < 0.01 ? 1 : r;
}
var kQ = 0.3,
  AQ = 0.5,
  jQ = Math.PI / 4,
  MQ = (e, t, n) => Math.max(t, Math.min(n, e)),
  NQ = (e, t) => ((e % t) + t) % t;
function PQ(e, t) {
  let n = e.guide && !(t && e.guideHideInCombat);
  return { edge: n, arrow: n && e.guideArrow };
}
function FQ(e, t) {
  return Math.hypot((e.tx ?? e.x) - t.x, (e.ty ?? e.y) - t.y) < 4;
}
function IQ(e, t, n) {
  return !n && e - t < 6;
}
function LQ(e, t, n) {
  return e + (t - e) * (1 - Math.exp(-12 * n));
}
function RQ(e, t, n, r = kQ) {
  let i = n / r;
  return e + MQ(t - e, -i, i);
}
function zQ(e, t) {
  let n = Math.min(e, t);
  return { len: MQ(n * 0.4, 140, 360), depth: MQ(n * 0.12, 44, 100) };
}
function BQ(e) {
  return Math.max(48, 0.3 * e);
}
function VQ(e, t) {
  return 2 * (e + t);
}
function HQ(e, t, n, r, i) {
  return i === `top`
    ? n
    : i === `right`
      ? e + r
      : i === `bottom`
        ? e + t + (e - n)
        : 2 * e + t + (t - r);
}
function UQ(e, t, n) {
  let r = NQ(n, VQ(e, t));
  return r < e
    ? { x: r, y: 0, side: `top` }
    : r < e + t
      ? { x: e, y: r - e, side: `right` }
      : r < 2 * e + t
        ? { x: e - (r - e - t), y: t, side: `bottom` }
        : { x: 0, y: t - (r - 2 * e - t), side: `left` };
}
function WQ(e, t, n) {
  return n === `top`
    ? [0, e]
    : n === `right`
      ? [e, e + t]
      : n === `bottom`
        ? [e + t, 2 * e + t]
        : [2 * e + t, VQ(e, t)];
}
function GQ(e, t, n) {
  let r = t - e;
  return r - n * Math.round(r / n);
}
function KQ(e, t, n, r, i) {
  let a = e.x,
    o = e.y,
    s = e.x + e.w,
    c = e.y + e.h,
    l = MQ(t, a, s),
    u = MQ(n, o, c),
    d = Math.hypot(r, i);
  if (!(d > 0) || !Number.isFinite(d))
    return { x: (a + s) / 2, y: o, side: `top`, t: u - o };
  let f = r / d,
    p = i / d,
    m = f > 0 ? (s - l) / f : f < 0 ? (a - l) / f : 1 / 0,
    h = p > 0 ? (c - u) / p : p < 0 ? (o - u) / p : 1 / 0,
    g = Math.min(m, h),
    _ = m <= h ? (f > 0 ? `right` : `left`) : p > 0 ? `bottom` : `top`;
  return {
    x: _ === `right` ? s : _ === `left` ? a : MQ(l + f * g, a, s),
    y: _ === `bottom` ? c : _ === `top` ? o : MQ(u + p * g, o, c),
    side: _,
    t: g,
  };
}
function qQ(e, t, n, r) {
  let i = [];
  for (let a of n) {
    let n = Math.max(0, a.x - 6),
      o = Math.max(0, a.y - 6),
      s = Math.min(e, a.x + a.w + 6),
      c = Math.min(t, a.y + a.h + 6);
    s > n &&
      c > o &&
      (o < r && i.push([n, s]),
      s > e - r && i.push([e + o, e + c]),
      c > t - r && i.push([e + t + (e - s), e + t + (e - n)]),
      n < r && i.push([2 * e + t + (t - c), 2 * e + t + (t - o)]));
  }
  i.sort((e, t) => e[0] - t[0]);
  let a = [];
  for (let e of i) {
    let t = a[a.length - 1];
    t && e[0] <= t[1] ? (t[1] = Math.max(t[1], e[1])) : a.push([e[0], e[1]]);
  }
  return a;
}
