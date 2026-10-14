// index-BTsv3a2s 125 — shore
// Lines 59773-59983 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Bj(e, t, n) {
  let r =
      +!nj(e[0]) | (nj(e[1]) ? 0 : 2) | (nj(e[2]) ? 0 : 4) | (nj(e[3]) ? 0 : 8),
    i = e.filter((e) => !nj(e)),
    a = -1,
    o = -1;
  for (let e of i) {
    let t = i.filter((t) => t === e).length;
    (t > o || (t === o && e < a)) && ((o = t), (a = e));
  }
  let s =
      +!!aj(e[0]) |
      (aj(e[1]) ? 2 : 0) |
      (aj(e[2]) ? 4 : 0) |
      (aj(e[3]) ? 8 : 0),
    c =
      +!!ij(e[0]) |
      (ij(e[1]) ? 2 : 0) |
      (ij(e[2]) ? 4 : 0) |
      (ij(e[3]) ? 8 : 0),
    l =
      a < 0
        ? 0
        : a === 2
          ? 2
          : a === 3 || a === 7 || a === 8
            ? 4
            : a === 4
              ? 5
              : tj(a) || a <= 9
                ? 1
                : 3,
    u =
      l === 1
        ? gj(a === 16 ? `shore/shade` : `shore/grass`, r, t, n, 4)
        : l === 2
          ? gj(`shore/sand`, r, t, n, 4)
          : l === 4
            ? gj(`shore/snow`, r, t, n, 4)
            : l === 5
              ? gj(`shore/ice`, r, t, n, 4)
              : -1,
    d =
      l === 5
        ? +(e[0] === 3) |
          (e[1] === 3 ? 2 : 0) |
          (e[2] === 3 ? 4 : 0) |
          (e[3] === 3 ? 8 : 0)
        : 0,
    f = d ? gj(`over/snow`, d, t, n, 5) : -1,
    p = l === 3 || (l === 1 && !tj(a)) ? gj(Sj[a], 15, t, n, 0) : -1,
    m = `w${r}:${s}:${c}:${u}:${p}:${f}:${l}:${l === 3 ? gj(`fill/grass`, 15, t, n, 7) : 0}`,
    h = Dj.get(m);
  if (h) return h;
  let g = new Uint32Array(1024);
  if (
    (p >= 0 &&
      (l === 3 && Rj(g, gj(`fill/grass`, 15, t, n, 7), r), Rj(g, p, r)),
    u >= 0 && Rj(g, u),
    f >= 0 && Rj(g, f),
    l === 3 && Vj(g, r),
    c)
  ) {
    let e = c & 1 ? 1 : 0,
      t = c & 2 ? 1 : 0,
      n = c & 4 ? 1 : 0,
      r = c & 8 ? 1 : 0;
    for (let i = 0; i < 32; i++) {
      let a = (i + 0.5) / 32;
      for (let o = 0; o < 32; o++) {
        let s = i * 32 + o;
        if (g[s] >>> 24) continue;
        let c = (o + 0.5) / 32,
          l = (e * (1 - c) + t * c) * (1 - a) + (r * (1 - c) + n * c) * a;
        l > 0 && (g[s] = Oj(Fj[0], Fj[1], Fj[2], Math.round(Fj[3] * l)));
      }
    }
  }
  if (s) {
    let e = s & 1 ? 1 : 0,
      t = s & 2 ? 1 : 0,
      n = s & 4 ? 1 : 0,
      r = s & 8 ? 1 : 0;
    for (let i = 0; i < 32; i++) {
      let a = (i + 0.5) / 32;
      for (let o = 0; o < 32; o++) {
        let s = i * 32 + o;
        if (g[s] >>> 24 && g[s] >>> 24 > Fj[3]) continue;
        let l = (o + 0.5) / 32,
          u = (e * (1 - l) + t * l) * (1 - a) + (r * (1 - l) + n * l) * a,
          d = u * u * (3 - 2 * u);
        (Lj[(i & 3) * 4 + (o & 3)] + 0.5) / 16 < d * 0.8 &&
          (!(g[s] >>> 24) || c) &&
          (g[s] = c ? Ij : Pj);
      }
    }
  }
  return (Dj.size > 6e3 && Dj.clear(), Dj.set(m, g), g);
}
function Vj(e, t) {
  let n = (e) => !!(t & (1 << e)),
    r = (t, n, r) => {
      t >= 0 && n >= 0 && t < 32 && n < 32 && (e[n * 32 + t] = r);
    };
  for (let e = 0; e < 4; e++) {
    if (!n(e)) continue;
    let t = Hj[e],
      i = Uj[e],
      a = e === 0 ? 1 : e === 3 ? 2 : -1,
      o = e === 1 ? 0 : e === 2 ? 3 : -1,
      s = e === 0 ? 3 : e === 1 ? 2 : -1,
      c = e === 3 ? 0 : e === 2 ? 1 : -1;
    for (let e = 0; e < 16; e++) {
      let l = e === 0;
      if (s >= 0 && !n(s)) {
        let n = i + 15;
        r(t + e, n - 9, Mj);
        for (let i = 8; i >= 4; i--)
          r(t + e, n - i, l ? jj : i === 8 ? Aj : kj);
        for (let i = 3; i >= 1; i--)
          r(t + e, n - i, l ? Mj : i === 1 ? jj : Aj);
        (r(t + e, n, Mj),
          r(t + e, n + 1, Nj),
          r(t + e, n + 2, Nj),
          r(t + e, n + 3, Nj));
      }
      if (c >= 0 && !n(c)) {
        r(t + e, i, Mj);
        for (let n = 1; n <= 5; n++)
          r(t + e, i + n, l ? jj : n === 1 ? Aj : kj);
        r(t + e, i + 6, Mj);
      }
      if (a >= 0 && !n(a)) {
        let n = t + 15;
        (r(n, i + e, Mj), r(n - 1, i + e, jj));
        for (let t = 2; t <= 5; t++) r(n - t, i + e, l ? jj : kj);
        r(n - 6, i + e, Mj);
      }
      if (o >= 0 && !n(o)) {
        (r(t, i + e, Mj), r(t + 1, i + e, jj));
        for (let n = 2; n <= 5; n++) r(t + n, i + e, l ? jj : kj);
        r(t + 6, i + e, Mj);
      }
    }
  }
}
var Hj = [0, 16, 16, 0],
  Uj = [0, 0, 16, 16];
function Wj(e, t, n, r, i, a) {
  if (nj(e) || nj(t) || nj(n) || nj(r)) return Bj([e, t, n, r], i, a);
  Ej(e, t, n, r, i, a);
  let o = ``;
  for (let e = 0; e < Cj.length; e++) o += Cj[e] + `:` + wj[e] + `,`;
  let s = Dj.get(o);
  if (s) return s;
  s = new Uint32Array(1024);
  let c = sj;
  for (let e = 0; e < Cj.length; e++) {
    let t = Cj[e],
      n = c[t >>> 16],
      r = t & 65535,
      i = (r & 63) * 32,
      a = (r >> 6) * 32;
    for (let t = 0; t < 4; t++)
      if (wj[e] & (1 << t))
        for (let e = Uj[t]; e < Uj[t] + 16; e++) {
          let r = (a + e) * n.w + i + Hj[t],
            o = e * 32 + Hj[t];
          for (let e = 0; e < 16; e++, r++, o++) {
            let e = n.px[r],
              t = e >>> 24;
            if (t === 0) continue;
            if (t === 255) {
              s[o] = e;
              continue;
            }
            let i = s[o],
              a = t / 255,
              c = Math.round((e & 255) * a + (i & 255) * (1 - a)),
              l = Math.round(
                ((e >>> 8) & 255) * a + ((i >>> 8) & 255) * (1 - a),
              ),
              u = Math.round(
                ((e >>> 16) & 255) * a + ((i >>> 16) & 255) * (1 - a),
              );
            s[o] = (255 << 24) | (u << 16) | (l << 8) | c;
          }
        }
  }
  return (Dj.size > 6e3 && Dj.clear(), Dj.set(o, s), s);
}
var Gj = new Map();
function Kj(e, t) {
  if (!sj) return null;
  let n = `${e}:${t}`,
    r = Gj.get(n);
  if (r) return r;
  let i = $A[e][15];
  if (!i?.[t]) return null;
  let [a, o] = i[t],
    s = sj[a];
  r = new Uint32Array(1024);
  for (let e = 0; e < 32; e++)
    for (let t = 0; t < 32; t++)
      r[e * 32 + t] = s.px[((o >> 6) * 32 + e) * s.w + (o & 63) * 32 + t];
  return (Gj.set(n, r), r);
}
function qj(e, t, n, r, i) {
  let a = Wj(e, e, e, e, t, n)[i * 32 + r];
  return ((a & 255) << 16) | (((a >>> 8) & 255) << 8) | ((a >>> 16) & 255);
}
