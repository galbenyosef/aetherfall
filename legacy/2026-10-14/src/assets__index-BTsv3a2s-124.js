// assets__index-BTsv3a2s 124 — map
// Lines 59495-59772 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function lj() {
  return (
    cj ||
    ((cj = (async () => {
      if (typeof Image > `u` || typeof document > `u`) return;
      let e = await Promise.all(
        QA.map(
          (e, t) =>
            new Promise((e) => {
              let n = oj[`./ground-${t}.png`];
              if (!n) return e(null);
              let r = new Image();
              ((r.onload = () => e(r)),
                (r.onerror = () => e(null)),
                (r.src = n));
            }),
        ),
      );
      e.every((e) => e) &&
        (sj = e.map((e) => {
          let t = document.createElement(`canvas`);
          ((t.width = e.width), (t.height = e.height));
          let n = t.getContext(`2d`);
          return (
            n.drawImage(e, 0, 0),
            {
              px: new Uint32Array(
                n.getImageData(0, 0, e.width, e.height).data.buffer,
              ),
              w: e.width,
            }
          );
        }));
    })()),
    cj)
  );
}
function uj() {
  return sj !== null;
}
var dj = null;
function fj() {
  return (
    dj ||
      !sj ||
      (dj = ($A.water[15] ?? []).map(([e, t]) => {
        let [n, r] = M(32, 32),
          i = r.createImageData(32, 32),
          a = new Uint32Array(i.data.buffer),
          o = sj[e];
        for (let e = 0; e < 32; e++)
          for (let n = 0; n < 32; n++)
            a[e * 32 + n] = o.px[((t >> 6) * 32 + e) * o.w + (t & 63) * 32 + n];
        return (r.putImageData(i, 0, 0), jp(n, 2));
      })),
    dj
  );
}
var pj = new Map();
function mj(e) {
  let t = pj.get(e);
  if (!t) {
    t = [];
    let n = $A[e];
    for (let e = 1; e < 16; e++) {
      let r = n[e];
      if (!r) continue;
      let i = r.map(([e, t]) => (e << 16) | t),
        a = r.map((e) => e[2] ?? 1);
      t[e] = { refs: i, w: a, sum: a.reduce((e, t) => e + t, 0) };
    }
    pj.set(e, t);
  }
  return t;
}
function hj(e, t, n) {
  let r = (e * 374761393 + t * 668265263 + n * 144269504) | 0;
  return (
    (r = Math.imul(r ^ (r >>> 13), 1274126177)),
    (r ^= r >>> 16),
    (r >>> 0) / 4294967296
  );
}
function gj(e, t, n, r, i) {
  let a = mj(e)[t];
  if (!a) return -1;
  if (a.refs.length === 1) return a.refs[0];
  let o = hj(n, r, 501 + i) * a.sum;
  for (let e = 0; e < a.refs.length; e++)
    if (((o -= a.w[e]), o <= 0)) return a.refs[e];
  return a.refs[a.refs.length - 1];
}
var _j = (e, t) => mj(e)[t] !== void 0,
  vj = {},
  yj = (e, t) => e * 16 + t,
  bj = (e, t, n) => (vj[yj(e, t)] = n);
(bj(10, 17, `stone1/grass`),
  bj(10, 16, `stone1/shade`),
  bj(10, 6, `stone1/dirt1`),
  bj(10, 5, `stone1/dirt2`),
  bj(10, 9, `stone1/gravel`),
  bj(6, 17, `dirt1/grass`),
  bj(6, 16, `dirt1/shade`),
  bj(5, 17, `dirt2/grass`),
  bj(5, 16, `dirt2/shade`),
  bj(5, 6, `dirt2/dirt1`),
  bj(16, 17, `shade/grass`),
  bj(17, 2, `grass/sand`),
  bj(16, 2, `shade/sand`),
  bj(9, 17, `gravel/grass`),
  bj(9, 16, `gravel/shade`),
  bj(9, 6, `gravel/dirt1`),
  bj(9, 5, `gravel/dirt2`),
  bj(0, 17, `soil/grass`),
  bj(1, 17, `soilw/grass`),
  bj(15, 17, `tall/grass`),
  bj(3, 17, `over/snow`),
  bj(3, 16, `over/snow`),
  bj(3, 15, `over/snow`),
  bj(4, 3, `ice/snow`),
  bj(7, 3, `over/fdirt`),
  bj(8, 3, `over/fdirt2`),
  bj(7, 17, `over/fdirt`),
  bj(8, 17, `over/fdirt2`),
  bj(8, 7, `over/fdirt2`));
var xj = {
    17: `over/grass`,
    16: `over/shade`,
    15: `over/grass`,
    6: `over/dirt1`,
    5: `over/dirt2`,
    2: `over/sand`,
    9: `over/gravel`,
    11: `over/flag`,
    12: `over/sandst`,
    13: `over/sandstg`,
    14: `over/slab`,
    3: `over/snow`,
    7: `over/fdirt`,
    8: `over/fdirt2`,
  },
  Sj = {
    0: `soil/grass`,
    1: `soilw/grass`,
    2: `over/sand`,
    3: `over/snow`,
    4: `ice/snow`,
    7: `over/fdirt`,
    8: `over/fdirt2`,
    5: `dirt2/grass`,
    6: `dirt1/grass`,
    9: `gravel/grass`,
    10: `stone1/grass`,
    11: `over/flag`,
    14: `over/slab`,
    12: `over/sandst`,
    13: `over/sandstg`,
    15: `tall/grass`,
    16: `shade/grass`,
    17: `fill/grass`,
    18: `water`,
    19: `water`,
    20: `water`,
    21: `water`,
  },
  Cj = [],
  wj = [];
function Tj(e, t = 15) {
  e < 0 || (Cj.push(e), wj.push(t));
}
function Ej(e, t, n, r, i, a) {
  ((Cj.length = 0), (wj.length = 0));
  let o = [e, t, n, r];
  if ((Tj(gj(`fill/grass`, 15, i, a, 7)), e === t && t === n && n === r)) {
    e !== 17 && Tj(gj(Sj[e], 15, i, a, 0));
    return;
  }
  let s = [...new Set(o)];
  if (s.length === 2)
    for (let [o, c] of [
      [s[0], s[1]],
      [s[1], s[0]],
    ]) {
      let s = vj[yj(o, c)];
      if (!s) continue;
      let l =
        (e === o) | (t === o ? 2 : 0) | (n === o ? 4 : 0) | (r === o ? 8 : 0);
      if (_j(s, l)) {
        (c !== 17 && Tj(gj(Sj[c], 15, i, a, 0)), Tj(gj(s, l, i, a, 1)));
        return;
      }
    }
  let c = o.filter((e) => !tj(e));
  if (!c.length) {
    for (let o of [16, 15]) {
      let s =
        (e === o) | (t === o ? 2 : 0) | (n === o ? 4 : 0) | (r === o ? 8 : 0);
      if (!s) continue;
      let c = vj[yj(o, 17)];
      _j(c, s) ? Tj(gj(c, s, i, a, 1)) : Tj(gj(Sj[o], 15, i, a, 0), s);
    }
    return;
  }
  let l = c[0],
    u = -1;
  for (let e of c) {
    let t = c.filter((t) => t === e).length;
    (t > u || (t === u && e < l)) && ((u = t), (l = e));
  }
  let d = o.map((e) => (tj(e) ? l : e)),
    f = [...new Set(d)].sort((e, t) => e - t);
  Tj(gj(Sj[f[0]], 15, i, a, 0));
  for (let e = 1; e < f.length; e++) {
    let t = f[e],
      n =
        +(d[0] === t) |
        (d[1] === t ? 2 : 0) |
        (d[2] === t ? 4 : 0) |
        (d[3] === t ? 8 : 0),
      r = f.length === 2 ? vj[yj(t, f[0])] : void 0,
      o = xj[t];
    r && _j(r, n)
      ? Tj(gj(r, n, i, a, 1))
      : o && _j(o, n)
        ? Tj(gj(o, n, i, a, 2))
        : Tj(gj(Sj[t], 15, i, a, 0), n);
  }
  for (let e of [17, 16]) {
    let t =
      +(o[0] === e || (e === 17 && o[0] === 15)) |
      (o[1] === e || (e === 17 && o[1] === 15) ? 2 : 0) |
      (o[2] === e || (e === 17 && o[2] === 15) ? 4 : 0) |
      (o[3] === e || (e === 17 && o[3] === 15) ? 8 : 0);
    t && _j(xj[e], t) && Tj(gj(xj[e], t, i, a, 3));
  }
}
var Dj = new Map(),
  Oj = (e, t, n, r = 255) => ((r << 24) | (n << 16) | (t << 8) | e) >>> 0,
  kj = Oj(238, 222, 174),
  Aj = Oj(208, 186, 132),
  jj = Oj(150, 126, 90),
  Mj = Oj(70, 56, 48),
  Nj = Oj(8, 24, 52, 120),
  Pj = Oj(6, 18, 58, 100),
  Fj = [52, 84, 116, 96],
  Ij = Oj(14, 32, 56, 150),
  Lj = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
function Rj(e, t, n = 15) {
  if (t < 0) return;
  let r = sj[t >>> 16],
    i = t & 65535,
    a = (i & 63) * 32,
    o = (i >> 6) * 32;
  for (let t = 0; t < 4; t++)
    if (n & (1 << t))
      for (let n = Uj[t]; n < Uj[t] + 16; n++) {
        let i = (o + n) * r.w + a + Hj[t],
          s = n * 32 + Hj[t];
        for (let t = 0; t < 16; t++, i++, s++) {
          let t = r.px[i],
            n = t >>> 24;
          n !== 0 && (e[s] = n === 255 || !(e[s] >>> 24) ? t : zj(t, e[s]));
        }
      }
}
function zj(e, t) {
  let n = (e >>> 24) / 255,
    r = Math.round((e & 255) * n + (t & 255) * (1 - n)),
    i = Math.round(((e >>> 8) & 255) * n + ((t >>> 8) & 255) * (1 - n));
  return (
    ((255 << 24) |
      (Math.round(((e >>> 16) & 255) * n + ((t >>> 16) & 255) * (1 - n)) <<
        16) |
      (i << 8) |
      r) >>>
    0
  );
}
