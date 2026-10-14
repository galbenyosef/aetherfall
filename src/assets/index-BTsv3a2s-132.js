// index-BTsv3a2s 132 — math
// Lines 83071-83393 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function _P(e, t, n) {
  let { tiles: r } = Vr(),
    i = zN(),
    a = BN(),
    o = (e, t) => (e < 0 || t < 0 || e >= Or || t >= kr ? -1 : r[t * Or + e]);
  for (let s = n * 32; s < Math.min(kr, (n + 1) * 32); s++)
    for (let c = t * 32; c < Math.min(Or, (t + 1) * 32); c++) {
      let l = r[s * Or + c],
        u = o(c, s - 1),
        d = o(c, s + 1),
        f = o(c - 1, s),
        p = o(c + 1, s),
        m = XN[l] === 1,
        h = JN[l] === 1,
        g = qN[l] === 1,
        _ = u >= 0 && !JN[u] && !YN[u],
        v = d >= 0 && !JN[d] && !YN[d],
        y = f >= 0 && !JN[f] && !YN[f],
        b = p >= 0 && !JN[p] && !YN[p],
        x = u >= 0 && !qN[u] && !YN[u],
        S = d >= 0 && !qN[d] && !YN[d],
        C = f >= 0 && !qN[f] && !YN[f],
        w = p >= 0 && !qN[p] && !YN[p],
        T = u >= 0 && qN[u] === 1;
      for (let r = 0; r < 16; r++) {
        let o = s * 16 + r,
          E = (o - n * 512) * 512 * 4;
        for (let n = 0; n < 16; n++) {
          let D = c * 16 + n,
            O = oP(
              a && (l === A.Greens || l === A.Wheat) ? A.Soil : l,
              D,
              o,
              n,
              r,
              c,
              s,
            ),
            k = 255;
          if (m && (r < 3 || r > 12 || n < 3 || n > 12)) {
            let e = -1,
              t = 9;
            (r < 3 && u !== l && u >= 0 && XN[u]
              ? ((e = u), (t = r))
              : r > 12 && d !== l && d >= 0 && XN[d]
                ? ((e = d), (t = 15 - r))
                : n < 3 && f !== l && f >= 0 && XN[f]
                  ? ((e = f), (t = n))
                  : n > 12 &&
                    p !== l &&
                    p >= 0 &&
                    XN[p] &&
                    ((e = p), (t = 15 - n)),
              e >= 0 &&
                t + iP(D >> 1, o >> 1, 41) * 2.2 < 2.4 &&
                iP(D, o, 42) < 0.75 &&
                (O = oP(e, D, o, n, r, c, s)));
          }
          if (
            (h &&
              ((r === 0 && _) ||
                (r === 15 && v) ||
                (n === 0 && y) ||
                (n === 15 && b)) &&
              (O = UN(92, 86, 106)),
            g)
          ) {
            let e = Math.min(
              x ? r : 99,
              S ? 15 - r : 99,
              C ? n : 99,
              w ? 15 - n : 99,
            );
            if (l === A.Lava) e < 2 && (O = UN(60, 30, 25));
            else if (!i)
              e < 2
                ? (O =
                    l === A.DeepWater ? UN(180, 215, 240) : UN(120, 190, 225))
                : iP(D >> 2, o, 23) < 0.02 && (O = UN(150, 205, 235));
            else if (e < 2)
              O = e === 0 && iP(D >> 1, o >> 1, 24) < 0.8 ? uP : dP;
            else if (e < 6 && lP(D, o) < (6 - e) / 5) ((O = fP), (k = pP));
            else if (l === A.DeepWater) {
              let e = Math.min(
                u === A.Water ? r : 99,
                d === A.Water ? 15 - r : 99,
                f === A.Water ? n : 99,
                p === A.Water ? 15 - n : 99,
              );
              lP(D, o) < Math.min(1, (e + 1) / 9)
                ? ((O = mP), (k = hP))
                : (k = 0);
            } else k = 0;
          } else T && r < 3 && (O = gP(O));
          let ee = E + ((D - t * 512) << 2);
          ((e[ee] = O >> 16),
            (e[ee + 1] = (O >> 8) & 255),
            (e[ee + 2] = O & 255),
            (e[ee + 3] = k));
        }
      }
    }
}
var vP = {
    [A.Grass]: `tile/ground-grass`,
    [A.Grass2]: `tile/ground-grass`,
    [A.Flowers]: `tile/ground-grass`,
    [A.DarkGrass]: `tile/ground-dark`,
    [A.Cobble]: `tile/ground-cobble`,
    [A.Market]: `tile/ground-market`,
    [A.Plaza]: `tile/ground-plaza`,
    [A.Courtyard]: `tile/ground-courtyard`,
    [A.Ash]: `tile/ground-ash`,
    [A.Lava]: `tile/lava`,
  },
  yP = `tile/ash-crack`,
  bP = `tile/lava-cliff`,
  xP = UN(255, 222, 110),
  SP = UN(246, 132, 42),
  CP = { [A.Grass2]: 0.95 },
  wP = 2,
  TP = null;
function EP() {
  if (TP) return !0;
  if (!oM()) return !1;
  let e = new Map();
  for (let t of new Set([...Object.values(vP), yP, bP])) {
    let n = sM(t);
    if (!n) return !1;
    e.set(
      t,
      n.frames.map((e) => {
        let t = e.getContext(`2d`).getImageData(0, 0, e.width, e.height).data,
          n = new Uint32Array(e.width * e.height),
          r = new Uint8Array(e.width * e.height);
        for (let e = 0; e < n.length; e++)
          ((n[e] = (t[e * 4] << 16) | (t[e * 4 + 1] << 8) | t[e * 4 + 2]),
            (r[e] = t[e * 4 + 3]));
        return { rgb: n, a: r };
      }),
    );
  }
  return ((TP = e), !0);
}
function DP() {
  return EP() ? wP : 1;
}
function OP(e, t, n, r, i, a = !1) {
  let o = a ? rP()[n * Or + t] : ZN[e];
  if (o !== 255 && !rj(o) && uj()) {
    let e = t * 32 + r + 16,
      a = n * 32 + i + 16;
    return qj(o, e >> 5, a >> 5, e & 31, a & 31);
  }
  let s = vP[e],
    c = r >> 1,
    l = i >> 1,
    u = t * 16 + c,
    d = n * 16 + l;
  if (s && TP) {
    let a = TP.get(e === A.Ash && iP(t, n, 978) < 0.1 ? yP : s),
      o = e === A.Lava ? a[0] : a[Math.floor(iP(t, n, 977) * a.length)],
      c = i * 32 + r;
    if (o.a[c] > 128) {
      let t = o.rgb[c],
        n = CP[e];
      return (
        n &&
          (t =
            (Math.round(((t >> 16) & 255) * n) << 16) |
            (Math.round(((t >> 8) & 255) * n) << 8) |
            Math.round((t & 255) * n)),
        e === A.Flowers &&
          iP(u >> 2, d >> 2, 21) > 0.7 &&
          iP(u, d, 3) < 0.3 &&
          (t = GN[Math.floor(iP(u >> 2, d >> 2, 22) * 4)]),
        t
      );
    }
  }
  return oP(e, u, d, c, l, t, n);
}
function kP(e, t, n, r = 0, i = 32) {
  let { tiles: a } = Vr(),
    o = zN(),
    s = BN(),
    c = (e, t) => (e < 0 || t < 0 || e >= Or || t >= kr ? -1 : a[t * Or + e]),
    l = 512 * wP,
    u = uj(),
    d = u ? rP() : null,
    f = (e, t) =>
      d[
        Math.min(kr - 1, Math.max(0, t)) * Or + Math.min(Or - 1, Math.max(0, e))
      ];
  for (let d = n * 32 + r; d < Math.min(kr, n * 32 + i); d++)
    for (let r = t * 32; r < Math.min(Or, (t + 1) * 32); r++) {
      if (u) {
        let e = !1;
        for (let t = -1; t <= 1 && !e; t++)
          for (let n = -1; n <= 1; n++) f(r + n, d + t) === 255 && (e = !0);
        if (!e) continue;
      }
      let i = a[d * Or + r],
        p = s && (i === A.Greens || i === A.Wheat) ? A.Soil : i,
        m = c(r, d - 1),
        h = c(r, d + 1),
        g = c(r - 1, d),
        _ = c(r + 1, d),
        v = XN[i] === 1,
        y = JN[i] === 1,
        b = qN[i] === 1,
        x = m >= 0 && !JN[m] && !YN[m],
        S = h >= 0 && !JN[h] && !YN[h],
        C = g >= 0 && !JN[g] && !YN[g],
        w = _ >= 0 && !JN[_] && !YN[_],
        T = m >= 0 && !qN[m] && !YN[m],
        E = h >= 0 && !qN[h] && !YN[h],
        D = g >= 0 && !qN[g] && !YN[g],
        O = _ >= 0 && !qN[_] && !YN[_],
        k = m >= 0 && qN[m] === 1,
        ee = TP?.get(bP),
        te = !b && h === A.Lava && !!ee,
        ne = !b && !!ee && (m === A.Lava || g === A.Lava || _ === A.Lava),
        re = ee ? ee[r % ee.length] : null;
      for (let a = 0; a < 32; a++) {
        let s = (d * 32 + a - n * l) * l * 4,
          c = a / wP;
        for (let n = 0; n < 32; n++) {
          let f = n / wP,
            ie = r * 32 + n,
            ae = d * 32 + a,
            oe = OP(p, r, d, n, a, !0),
            se = 255;
          if (re && (te || ne)) {
            let e = Math.min(
              m === A.Lava ? c : 99,
              g === A.Lava ? f : 99,
              _ === A.Lava ? 15.5 - f : 99,
            );
            if (te) {
              let e = (32 + a) * 32 + n;
              oe = re.a[e] > 128 ? re.rgb[e] : OP(A.Lava, r, d, n, a);
            } else if (e + iP(ie >> 1, ae >> 1, 43) * 1.5 < 4) {
              let e = a * 32 + n;
              re.a[e] > 128 && (oe = re.rgb[e]);
            }
            e < 0.5 ? (oe = xP) : e < 1 && (oe = SP);
          }
          if (v && (c < 3 || c > 12.5 || f < 3 || f > 12.5)) {
            let e = -1,
              t = 9;
            (c < 3 && m !== i && m >= 0 && XN[m]
              ? ((e = m), (t = c))
              : c > 12.5 && h !== i && h >= 0 && XN[h]
                ? ((e = h), (t = 15.5 - c))
                : f < 3 && g !== i && g >= 0 && XN[g]
                  ? ((e = g), (t = f))
                  : f > 12.5 &&
                    _ !== i &&
                    _ >= 0 &&
                    XN[_] &&
                    ((e = _), (t = 15.5 - f)),
              e >= 0 &&
                t + iP(ie >> 1, ae >> 1, 41) * 2.2 < 2.4 &&
                iP(ie, ae, 42) < 0.75 &&
                (oe = OP(e, r, d, n, a)));
          }
          if (
            (y &&
              ((a === 0 && x) ||
                (a === 31 && S) ||
                (n === 0 && C) ||
                (n === 31 && w)) &&
              (oe = UN(92, 86, 106)),
            b)
          ) {
            let e = Math.min(
              T ? c : 99,
              E ? 15.5 - c : 99,
              D ? f : 99,
              O ? 15.5 - f : 99,
            );
            if (i === A.Lava)
              ee
                ? e < 1 && lP(ie, ae) < 0.4 && (oe = SP)
                : e < 2 && (oe = UN(60, 30, 25));
            else if (!o)
              e < 2
                ? (oe =
                    i === A.DeepWater ? UN(180, 215, 240) : UN(120, 190, 225))
                : iP(ie >> 3, ae >> 1, 23) < 0.02 && (oe = UN(150, 205, 235));
            else if (u) {
              let e = Vr().regions[d * Or + r] === eP;
              ((se = 0),
                e && ((oe = UN(52, 84, 116)), (se = 96)),
                i === A.DeepWater &&
                  lP(ie, ae) < 0.8 &&
                  ((oe = e ? UN(14, 32, 56) : mP), (se = e ? 150 : hP)));
            } else if (e < 2)
              oe = e < 0.5 && iP(ie >> 1, ae >> 1, 24) < 0.8 ? uP : dP;
            else if (e < 6 && lP(ie, ae) < (6 - e) / 5) ((oe = fP), (se = pP));
            else if (i === A.DeepWater) {
              let e = Math.min(
                m === A.Water ? c : 99,
                h === A.Water ? 15.5 - c : 99,
                g === A.Water ? f : 99,
                _ === A.Water ? 15.5 - f : 99,
              );
              lP(ie, ae) < Math.min(1, (e + 1) / 9)
                ? ((oe = mP), (se = hP))
                : (se = 0);
            } else se = 0;
          } else k && c < 3 && (oe = gP(oe));
          let ce = s + ((ie - t * l) << 2);
          ((e[ce] = oe >> 16),
            (e[ce + 1] = (oe >> 8) & 255),
            (e[ce + 2] = oe & 255),
            (e[ce + 3] = se));
        }
      }
    }
  u && (jP(e, t, n, r, i, f), AP(e, t, n, r, i));
}
