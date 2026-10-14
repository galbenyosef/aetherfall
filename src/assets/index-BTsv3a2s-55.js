// index-BTsv3a2s 55 — math
// Lines 35312-35649 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Dee(e, t, n, r, i, a, o, s) {
  let c = t - r * 16,
    l = n;
  switch (e.theme) {
    case `cistern`: {
      let e = m_.cistern;
      if (n < 3) return n === 0 ? e.lip[2] : o_(e.lip, 0.6 - n * 0.2, t, l);
      if (n === 3) return e.mortar[0];
      let u = Math.floor((n - 4) / 6),
        d = (t + (u % 2) * 8) % 16,
        f = (n - 4) % 6,
        p =
          0.45 +
          H(Math.floor((t + (u % 2) * 8) / 16), u, 2) * 0.25 +
          (d_(t * 0.3, n * 0.3, 3) - 0.5) * 0.2;
      (f === 0 && (p += 0.12), (d === 15 || f === 5) && (p -= 0.25));
      let m = o_(e.face, p, t, n);
      (d === 0 || (f === 0 && n > 4)) && (m = e.mortar[1]);
      let h = H(t >> 1, 7, 91);
      return (
        h < 0.2 && n < 6 + h * 60 && (m = s_(m, e.moss[2], 0.55)),
        n >= 19 && (m = s_(m, e.water[1], n === 21 ? 0.6 : 0.3)),
        H(r, 5, 92) < 0.06 &&
          c > 4 &&
          c < 12 &&
          n > 7 &&
          n < 15 &&
          (m =
            c === 5 || c === 11 || n === 8 || n === 14
              ? e.stone[7]
              : Math.abs(c - 8) < 1 || n === 11
                ? e.rune[1 + (Math.floor(i * 4) % 2)]
                : e.stone[1]),
        x_(m, c, a, o, s, e.lip[2])
      );
    }
    case `barrow`: {
      let e = m_.barrow,
        i = d_(t * 0.04, n * 0.35, 93),
        l = o_(e.face, 0.25 + i * 0.6 - n * 0.012, t, n),
        u = p_(t * 0.18, n * 0.3, 94);
      (u.id < 0.25 &&
        u.d1 < 0.34 &&
        (l = o_(
          e.stone,
          0.25 + u.id * 2 + (t * 0.18 < u.cx ? 0.25 : 0) - u.d1,
          t,
          n,
        )),
        n < 2 && (l = e.lip[n === 0 ? 2 : 1]),
        n < (H(t, 0, 95) < 0.18 ? 3 + Math.floor(H(t, 1, 95) * 12) : 0) &&
          (l = e.root[1 + +(n % 3 == 0)]));
      let d = ((r % 5) + 5) % 5 == 0 && c < 5;
      return (
        d &&
          (l = o_(
            e.wood,
            0.3 +
              (c === 0 ? 0.5 : c === 4 ? -0.2 : 0.15) +
              (H(0, n, r) - 0.5) * 0.15,
            t,
            n,
          )),
        d && (n === 3 || n === 4) && (l = e.wood[3]),
        x_(l, c, a, o, s, e.lip[2])
      );
    }
    case `rime`: {
      let e = m_.rime,
        r = f_(t * 0.09, n * 0.02, 96),
        i = 0.7 - n * 0.025 + (d_(t * 0.15, n * 0.1, 97) - 0.5) * 0.3;
      r > 0.93 && (i += 0.25);
      let l = o_(e.face, i, t, n),
        u = p_(t * 0.3, n * 0.3, 98);
      (u.id < 0.08 && Math.abs(u.d1 - 0.22) < 0.07 && (l = e.face[7]),
        n < 2 && (l = e.lip[n === 0 ? 2 : 1]));
      let d = H(t, 3, 99);
      return (
        n >= 2 &&
          n < 2 + d * 7 &&
          d > 0.55 &&
          (l = n < 4 ? e.lip[2] : e.lip[1]),
        n >= 20 && (l = e.snow[6]),
        x_(l, c, a, o, s, e.lip[1])
      );
    }
    case `ember`: {
      let e = m_.ember,
        r = Math.floor(t / 5),
        l = t % 5,
        u = Math.floor((n + H(r, 0, 4) * 8) / 8),
        d = (n + Math.floor(H(r, 0, 4) * 8)) % 8,
        f = 0.35 + H(r, u, 5) * 0.3 - n * 0.008;
      (l === 0 && (f += 0.18), l === 4 && (f -= 0.2));
      let p = o_(e.face, f, t, n);
      return (
        d === 0 && (p = e.face[0]),
        l === 4 &&
          H(r, 1, 6) < 0.3 &&
          (p = o_(
            e.glow,
            0.35 + 0.35 * (0.5 + 0.5 * Math.sin((i + H(r, 2)) * Math.PI * 2)),
            t,
            n,
          )),
        n < 3 && (p = s_(p, e.face[0], 0.6)),
        n === 0 && (p = e.lip[1]),
        x_(p, c, a, o, s, e.lip[2])
      );
    }
    case `folly`: {
      let r = m_.folly,
        l = e.corrupt,
        u;
      if (n < 2) u = n === 0 ? r.gold[1] : r.wood[1];
      else if (n < 12) {
        let e = t % 8,
          i = (n - 2) % 10;
        u =
          (Math.abs(e - 4) <= 1 && i >= 2 && i <= 6) ||
          (i === 4 && Math.abs(e - 4) <= 2) ||
          (i === 1 && e === 4)
            ? r.paper[4]
            : o_(r.paper, 0.35 + (d_(t * 0.2, n * 0.2, 7) - 0.5) * 0.3, t, n);
        let a = d_(t * 0.08, n * 0.15, 71) + l * 0.4;
        (a > 0.78 &&
          (u = o_(r.plaster, (a - 0.78) * 3 + (H(t, n) - 0.5) * 0.3, t, n)),
          a > 0.74 && a <= 0.78 && (u = r.paper[0]));
      } else if (n === 12) u = r.gold[3];
      else {
        let e = t % 16,
          i = e > 1 && e < 14 && n > 13 && n < 20;
        ((u = o_(
          r.wood,
          i
            ? 0.55 +
                (e === 2 || n === 14 ? 0.2 : 0) -
                (e === 13 || n === 19 ? 0.25 : 0)
            : 0.35,
          t,
          n,
        )),
          n === 21 && (u = r.wood[0]));
      }
      let d = H(t, 1, 72);
      return (
        l > 0.3 &&
          d < 0.035 * l &&
          n < 4 + H(t, 2, 72) * 18 * l &&
          (u = r.blood[n % 5 == 0 ? 4 : 3]),
        l > 0.2 &&
          f_(t * 0.1, n * 0.1, 73) > 0.988 - l * 0.015 &&
          (u =
            r.hollow[
              3 + (Math.sin((i * 2 + t * 0.05) * Math.PI) > 0.5 ? 2 : 0)
            ]),
        x_(u, c, a, o, s, r.gold[2])
      );
    }
  }
}
function x_(e, t, n, r, i, a) {
  return n && t === 0
    ? a
    : n && t === 1
      ? c_(e, 1.15)
      : r && t === 15
        ? c_(e, 0.5)
        : r && t === 14
          ? c_(e, 0.75)
          : i
            ? c_(e, 1.18)
            : e;
}
var S_ = [5, 3, 8],
  Oee = { cistern: gee, barrow: _ee, rime: vee, ember: yee, folly: bee },
  kee = {
    cistern: [!1, !0],
    barrow: [!0, !1],
    rime: [!1, !1],
    ember: [!1, !1],
    folly: [!0, !1],
  };
function C_(e, t, n, r, i, a = 0) {
  let o = __(e),
    [s, c] = M(r * 16, i * 16),
    l = c.createImageData(r * 16, i * 16),
    u = l.data,
    d = (e, t) => jo(o.t(e, t), !0),
    f = (e, t) => o.t(e, t) === Ao.WALL && d(e, t + 1),
    p = Oee[o.theme],
    m = kee[o.theme];
  for (let e = 0; e < i * 16; e++) {
    let i = n * 16 + e,
      s = Math.floor(i / 16),
      c = i - s * 16;
    for (let n = 0; n < r * 16; n++) {
      let l = t * 16 + n,
        h = Math.floor(l / 16),
        g = l - h * 16,
        _ = o.t(h, s),
        v;
      if (_ === Ao.WALL || _ === Ao.VOID) {
        let e = f(h, s),
          t = !e && c >= 10 && f(h, s + 1);
        if (e || t) {
          let t = h,
            n = e ? c + e_ : c - 10,
            r = e ? s : s + 1;
          v = Dee(
            o,
            l,
            n,
            t,
            a,
            !f(t - 1, r),
            !f(t + 1, r),
            (g < 3 && d(t - 1, r) && !f(t - 1, r)) ||
              (g > 12 && d(t + 1, r) && !f(t + 1, r)),
          );
        } else v = w_(o, d, h, s, g, c, l, i);
      } else {
        let e = {
          I: o,
          wx: l,
          wy: i,
          tx: h,
          ty: s,
          lx: g,
          ly: c,
          ph: a,
          wall: v_(o, o.dWall, l, i),
          liq: v_(o, o.dLiq, l, i),
        };
        v = _ === Ao.RUG ? See(e) : p(e);
        let t = (e, t) => o.lvl(e, t) >= 1,
          n = (e, t) => o.lvl(e, t) >= 2;
        if (o.lvl(h, s) >= 1 || o.dLiq[s * o.W + h] <= 1) {
          let r = D_(o, l, i, h, s, g, c, t, m[0]);
          r >= 0 && (v = Cee(e, v, r));
          let a = D_(o, l, i, h, s, g, c, n, m[1]);
          (a >= 0
            ? (v = wee(e, v, a))
            : a > -0.14 && o.lvl(h, s) <= 2 && (v = Tee(e, v, a)),
            r < 0 &&
              r > -0.12 &&
              (v = c_(v, o.theme === `ember` ? 1.25 : 0.82)));
        }
        _ === Ao.BRIDGE && (v = Mee(o, g, c, l, i, v));
        let r = 1;
        ((o.t(h, s - 1) === Ao.WALL || o.t(h, s - 1) === Ao.VOID) &&
          (r *= c < 5 ? 0.55 + c * 0.09 : 1),
          (o.t(h - 1, s) === Ao.WALL || o.t(h - 1, s) === Ao.VOID) &&
            g < 3 &&
            (r *= 0.72 + g * 0.09),
          (o.t(h + 1, s) === Ao.WALL || o.t(h + 1, s) === Ao.VOID) &&
            g > 13 &&
            (r *= 0.85),
          (v = c_(v, r)));
      }
      let y = (e * r * 16 + n) * 4;
      ((u[y] = v[0]), (u[y + 1] = v[1]), (u[y + 2] = v[2]), (u[y + 3] = 255));
    }
  }
  return (c.putImageData(l, 0, 0), s);
}
function w_(e, t, n, r, i, a, o, s) {
  let c = t(n, r - 1) && a < 2,
    l = t(n - 1, r) && i < 2,
    u = t(n + 1, r) && i > 13,
    d = m_[e.theme].lip,
    f = !jee(e, n, r, 1),
    p = f ? S_ : b_(e, o, s);
  if (c) p = d[a === 0 ? 2 : 1];
  else if (l) p = d[+(i === 0)];
  else if (u) p = i === 15 ? c_(d[0], 0.6) : d[0];
  else if (f) {
    let t = Math.min(1, (E_(e, n, r) - 1 + a / 16) / 1.2);
    p = s_(b_(e, o, s), S_, t);
  }
  return p;
}
function Aee(e, t = 0, n = e.h - t, r = 0, i = e.w - r) {
  let a = __(e),
    o = Math.max(0, Math.min(n, e.h - t)),
    s = Math.max(0, Math.min(i, e.w - r)),
    [c, l] = M(Math.max(1, s * 16), Math.max(1, o * 16));
  if (!o || !s) return c;
  let u = l.createImageData(s * 16, o * 16),
    d = u.data,
    f = (e, t) => jo(a.t(e, t), !0);
  for (let e = 0; e < o * 16; e++) {
    let n = t * 16 + e,
      i = Math.floor(n / 16),
      o = n - i * 16;
    for (let t = 0; t < s * 16; t++) {
      let c = r * 16 + t,
        l = Math.floor(c / 16),
        u = a.t(l, i),
        p =
          (u === Ao.WALL || u === Ao.VOID) && E_(a, l, i) < 3
            ? w_(a, f, l, i, c - l * 16, o, c, n)
            : S_,
        m = (e * s * 16 + t) * 4;
      ((d[m] = p[0]), (d[m + 1] = p[1]), (d[m + 2] = p[2]), (d[m + 3] = 255));
    }
  }
  return (l.putImageData(u, 0, 0), c);
}
function jee(e, t, n, r) {
  return E_(e, t, n) <= r;
}
var T_ = new WeakMap();
function E_(e, t, n) {
  let r = T_.get(e);
  if (!r) {
    r = new Float32Array(e.W * e.H).fill(9);
    let t = [];
    for (let n = 0; n < e.H; n++)
      for (let i = 0; i < e.W; i++)
        jo(e.t(i, n), !0) && ((r[n * e.W + i] = 0), t.push(n * e.W + i));
    for (let n = 0; n < t.length; n++) {
      let i = t[n],
        a = i % e.W,
        o = (i - a) / e.W;
      for (let n = -1; n <= 1; n++)
        for (let s = -1; s <= 1; s++) {
          let c = a + s,
            l = o + n;
          if (c < 0 || l < 0 || c >= e.W || l >= e.H) continue;
          let u = l * e.W + c;
          r[u] > r[i] + 1 && ((r[u] = r[i] + 1), t.push(u));
        }
    }
    T_.set(e, r);
  }
  return t < 0 || n < 0 || t >= e.W || n >= e.H ? 9 : r[n * e.W + t];
}
