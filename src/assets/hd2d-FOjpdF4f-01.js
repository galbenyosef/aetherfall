// hd2d-FOjpdF4f 01 — math
// Lines 12-162 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
import {
  $ as e,
  A as t,
  B as n,
  C as r,
  D as i,
  E as a,
  F as o,
  G as s,
  H as c,
  I as l,
  J as u,
  K as d,
  L as f,
  M as p,
  N as m,
  O as h,
  Q as g,
  R as _,
  S as v,
  U as y,
  V as b,
  W as x,
  X as S,
  Y as C,
  Z as w,
  _ as T,
  a as E,
  b as D,
  c as O,
  d as k,
  f as ee,
  g as A,
  i as te,
  j as ne,
  k as re,
  l as ie,
  m as ae,
  n as oe,
  o as se,
  q as ce,
  r as le,
  s as ue,
  t as de,
  u as fe,
  v as pe,
  w as me,
  x as he,
  y as ge,
  z as _e,
} from "./index-BTsv3a2s.js";
import {
  A as ve,
  At as j,
  B as M,
  C as ye,
  Dt as be,
  E as xe,
  Et as Se,
  J as N,
  Mt as Ce,
  O as we,
  Ot as P,
  St as Te,
  T as F,
  U as Ee,
  V as De,
  Y as I,
  _ as Oe,
  a as ke,
  at as Ae,
  c as je,
  createFx3D as Me,
  d as L,
  dt as Ne,
  et as R,
  f as Pe,
  gt as Fe,
  h as z,
  ht as Ie,
  i as B,
  k as Le,
  kt as V,
  l as Re,
  m as ze,
  mt as H,
  n as Be,
  ot as Ve,
  p as He,
  pt as Ue,
  r as We,
  t as Ge,
  u as U,
  v as Ke,
  vt as qe,
  w as W,
  wt as Je,
  x as G,
  y as Ye,
  yt as Xe,
} from "./fx3d-DiRK8ozf.js";
var Ze = 2048,
  Qe = 1;
function $e(e, t = Ze) {
  let n = e
      .map((e, t) => ({ g: e, i: t, h: Math.max(0, ...e.map((e) => e.h)) }))
      .sort((e, t) => t.h - e.h || e.i - t.i),
    r = e.map(() => []),
    i = [],
    a = -1,
    o = 0,
    s = 0,
    c = 0,
    l = () => {
      (i.push({ w: t, h: 0 }), (a = i.length - 1), (o = s = c = 0));
    },
    u = (e) => {
      let n = o,
        r = s,
        i = c,
        l = [];
      for (let o of e) {
        let e = o.w + Qe,
          s = o.h + Qe;
        if ((n + e > t && ((r += i), (n = 0), (i = 0)), n + e > t || r + s > t))
          return null;
        (l.push({ page: a, x: n, y: r }), (n += e), (i = Math.max(i, s)));
      }
      return ((o = n), (s = r), (c = i), l);
    };
  for (let { g: e, i: o } of n) {
    if (!e.length) continue;
    if (e.some((e) => e.w + Qe > t || e.h + Qe > t)) {
      let t = e.reduce((e, t) => e + t.w + Qe, 0),
        n = Math.max(...e.map((e) => e.h + Qe));
      i.push({ w: t, h: n });
      let s = 0;
      ((r[o] = e.map((e) => {
        let t = { page: i.length - 1, x: s, y: 0 };
        return ((s += e.w + Qe), t);
      })),
        (a = -1));
      continue;
    }
    a < 0 && l();
    let n = u(e);
    ((n ||= (l(), u(e))), (r[o] = n), (i[a].h = Math.max(i[a].h, s + c)));
  }
  for (let e of i) e.h = Math.ceil(Math.max(e.h, 1) / 16) * 16;
  return { at: r, pages: i };
}
