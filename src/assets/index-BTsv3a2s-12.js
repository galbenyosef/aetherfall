// index-BTsv3a2s 12 — math
// Lines 18213-20409 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function ur(e = 1042, t = {}) {
  let n = nt(e),
    r = new Uint8Array(200704),
    i = new Uint8Array(200704),
    a = new Uint8Array(200704),
    o = Zn(448),
    s = [],
    c = [],
    l = new Map(),
    u = (e, t, n) => tr(e, t) && (r[j(e, t)] = n),
    d = (e, t) => (tr(e, t) ? r[j(e, t)] : -1),
    f = (e, t) => {
      l.get(j(e, t)) && (l.delete(j(e, t)), (a[j(e, t)] = 0));
    },
    p = (e, t, n, r, i) => {
      if (!tr(e, t) || a[j(e, t)]) return;
      let o = {
        kind: i,
        ref: { t: `game`, key: n, v: r },
        key: `${n}-${r}`,
        mode: `point`,
        tx: e,
        ty: t,
        w: 1,
        h: 1,
        blocks: i !== `mushroom`,
      };
      (l.set(j(e, t), o), (a[j(e, t)] = 1));
    },
    m = (e, t, n, r) => {
      for (let i = t; i < t + r; i++)
        for (let t = e; t < e + n; t++)
          if (!tr(t, i) || a[j(t, i)] || o.h[j(t, i)]) return !1;
      return !0;
    },
    h = (e, t, n, r) => {
      for (let i = t; i < t + r; i++)
        for (let t = e; t < e + n; t++) tr(t, i) && f(t, i);
    },
    g = (e, t, n, r, i, o, c, l, u = !0) => {
      h(r, i, o, c);
      for (let e = i; e < i + c; e++)
        for (let t = r; t < r + o; t++) a[j(t, e)] = 1;
      let d = {
        kind: e,
        ref: t,
        key: n,
        mode: `rect`,
        tx: r,
        ty: i,
        w: o,
        h: c,
        blocks: u,
        name: l,
      };
      return (s.push(d), d);
    },
    _ = (e, t, n, r, i, c = !0) => {
      if (!tr(r, i) || a[j(r, i)] || o.h[j(r, i)]) return null;
      a[j(r, i)] = 1;
      let l = {
        kind: e,
        ref: t,
        key: n,
        mode: `point`,
        tx: r,
        ty: i,
        w: 1,
        h: 1,
        blocks: c,
      };
      return (s.push(l), l);
    },
    v = (e, t, n, r, i = !0) =>
      _(
        e,
        { t: `prop`, name: e, arg: r },
        `${e}${r === void 0 ? `` : `-` + r}`,
        t,
        n,
        i,
      ),
    y = (e, t, n, r = 0) =>
      _(e, { t: `game`, key: e, v: r }, `${e}-${r}`, t, n),
    b = new Float32Array(200704);
  for (let e = 0; e < 448; e++)
    for (let t = 0; t < 448; t++) {
      let n = j(t, e),
        a = t - 224,
        o = e - 224,
        s = t / 2,
        c = e / 2,
        l = Math.hypot(a, o) / 2,
        u = ar(t, e);
      i[n] = rr(a, o) <= 97 ? 0 : Qn.indexOf(u);
      let d = nr(58, 74, l + (Xe(s * 0.08, c * 0.08, 301) - 0.5) * 16);
      b[n] = d;
      let f = Ze(s * 0.05, c * 0.05, 9001),
        m = Ze(s * 0.1, c * 0.1, 4242),
        h = Je(t, e, 555),
        g = Je(t, e, 777),
        _ = +(m > 0.55);
      if (d < 0.5 || u === `glade`)
        (m > 0.6 && h > 0.82 && (_ = 2),
          d < 0.5
            ? (u === `ash` && d > 0.2 + (m - 0.5) && (_ = 22),
              u === `frost` && e < 144 && d > 0.3 + (m - 0.5) * 0.8 && (_ = 7),
              u === `woods` && m > 0.5 && (_ = 1),
              l > 54 &&
                (h < 0.012
                  ? p(
                      t,
                      e,
                      u === `frost` && _ === 7 ? `pine` : `tree`,
                      Math.floor(g * 4),
                      `tree`,
                    )
                  : h < 0.022
                    ? p(t, e, `bush`, Math.floor(g * 2), `bush`)
                    : h < 0.026 && p(t, e, `rock`, Math.floor(g * 3), `rock`)))
            : f < 0.3
              ? (_ = 5)
              : f < 0.335
                ? (_ = 6)
                : h < 0.02
                  ? p(t, e, `tree`, Math.floor(g * 4), `tree`)
                  : h < 0.045
                    ? p(t, e, `bush`, Math.floor(g * 2), `bush`)
                    : h < 0.055 && p(t, e, `rock`, Math.floor(g * 3), `rock`));
      else if (u === `woods`) {
        if (((_ = m > 0.5 ? 3 : 1), f < 0.27)) _ = 5;
        else {
          let n = (0.2 * d + 0.02) / 3;
          h < n && (m > 0.35 || h < 0.033)
            ? p(t, e, `darktree`, Math.floor(g * 4), `tree`)
            : h >= n && h < n + 0.03 * d
              ? p(t, e, `mushroom`, 0, `mushroom`)
              : h >= n &&
                h < n + 0.05 * d &&
                p(t, e, `bush`, Math.floor(g * 2), `bush`);
        }
      } else
        u === `frost`
          ? ((_ = 7),
            f < 0.25
              ? (_ = 13)
              : f < 0.32
                ? (_ = 8)
                : h < 0.045
                  ? p(t, e, `pine`, Math.floor(g * 3), `pine`)
                  : h < 0.065 && p(t, e, `rock`, Math.floor(g * 3), `rock`))
          : ((_ = d < 0.7 && m > 0.45 ? 22 : 9),
            f < 0.33
              ? (_ = 10)
              : h < 0.04
                ? p(t, e, `obsidian`, Math.floor(g * 3), `obsidian`)
                : h < 0.052
                  ? p(t, e, `deadtree`, 0, `deadtree`)
                  : g < 0.005 && p(t, e, `brazier`, 0, `brazier`));
      r[n] = _;
    }
  let x = new Set();
  for (let e = 0; e < 448; e++) {
    let t = e / 2,
      n =
        (12 +
          Xe(t * 0.07, 3, 5) * 12 -
          Math.max(0, Math.abs(t - 140) - 60) * 0.4) *
        2;
    for (let t = 0; t < 448; t++)
      t < n && (u(e, t, t < n - 6 ? 13 : 8), f(e, t), x.add(j(e, t)));
  }
  for (let e = 0; e < 448; e++)
    for (let t = 0; t < 448; t++) {
      let n = sr((t + 0.5) / 2, (e + 0.5) / 2),
        r = 1.7 + Xe((t / 2) * 0.09, (e / 2) * 0.09, 12) * 0.9;
      if (n < r) {
        let a = e < 92 && i[j(t, e)] === 3;
        (u(t, e, a ? 8 : n < r - 1.6 ? 13 : 5), f(t, e));
      } else if (n < r + 1.2 / 2) {
        f(t, e);
        let n = d(t, e);
        (n === 0 || n === 1) && Je(t, e, 88) < 0.35 && u(t, e, 6);
      }
    }
  let S = new Set(),
    C = (e, t, n, r) => {
      if (!tr(e, t)) return;
      if (x.has(j(e, t))) {
        (!x.has(j(e, t + 1)) || !x.has(j(e, t + 2))) && u(e, t, 20);
        return;
      }
      let i = d(e, t);
      (i === 5 || i === 13 || i === 10 || i === 8
        ? u(e, t, r)
        : i !== 12 && i !== 19 && u(e, t, n),
        f(e, t),
        S.add(j(e, t)));
    },
    w = (e, t) => {
      if (!tr(e, t) || x.has(j(e, t))) return !1;
      let n = d(e, t);
      return n === 5 || n === 13 || n === 10 || n === 8 || n === 12 || n === 19;
    },
    T = null,
    E = null;
  for (let e = 0; e < 448; e++) {
    let t = (e) => Math.abs(e - 224),
      n = (e) => nr(100, 128, t(e)),
      r = (Xe((e / 2) * 0.06, 0, 31) - 0.5) * 7 * 2 * n(e),
      i = Math.round(224 + r);
    if (
      ((T !== null || [-2, 0, er].some((t) => w(i + t, e))) && (i = T ??= i),
      T !== null && ![-3, 0, 3].some((t) => w(T + t, e)) && (T = null),
      t(e) > 96)
    )
      for (let t = -2; t <= er; t++) C(i + t, e, 4, 12);
    let a = (Xe(0, (e / 2) * 0.06, 32) - 0.5) * 7 * 2 * n(e),
      o = Math.round(224 + a);
    if (
      ((E !== null || [-2, 0, er].some((t) => w(e, o + t))) && (o = E ??= o),
      E !== null && ![-3, 0, 3].some((t) => w(e, E + t)) && (E = null),
      t(e) > 96)
    )
      for (let t = -2; t <= er; t++) C(e, o + t, 4, 19);
  }
  let D = {
      court: [24, 22],
      castle: [28, 26],
      lawn: [32, 30],
      moat: [36, 34],
      market: [50, 48],
      ring: [54, 52],
    },
    O = (e, t, n) => ir(e, t, n[0], n[1]),
    k = new Uint8Array(200704);
  for (let e = 0; e < 448; e++)
    for (let t = 0; t < 448; t++) {
      let n = t - 224,
        a = e - 224,
        s = rr(n, a);
      if (s > 96.01) continue;
      let c = j(t, e);
      f(t, e);
      let l = Math.abs(n) <= er,
        u = Je(t, e, 9) < 0.12 ? 2 : 1;
      (O(n, a, D.court)
        ? (u = 23)
        : O(n, a, D.castle)
          ? ((u = 23), (o.h[c] = 32))
          : O(n, a, D.lawn)
            ? (u = l && a > 0 ? 14 : Je(t, e, 10) < 0.2 ? 2 : 1)
            : O(n, a, D.moat)
              ? (u = l && a > 0 ? 12 : 5)
              : O(n, a, D.market)
                ? (u = 21)
                : O(n, a, D.ring)
                  ? (u = 14)
                  : s > 94
                    ? ((u = 15), (o.h[c] = 32))
                    : (s > 90 || l || Math.abs(a) <= er) && (u = 14),
        (r[c] = u),
        (u === 14 || u === 21 || u === 12 || u === 5) && (k[c] = 1),
        (i[c] = 0));
    }
  let ee = (e, t) => {
      let n = e - 224,
        r = t - 224;
      return (
        rr(n, r) <= 90 &&
        !O(n, r, D.ring) &&
        Math.abs(n) > er &&
        Math.abs(r) > er
      );
    },
    te = (e, t) => (Math.floor(Je(e, t, 606) * 3) - 1) * 2,
    ne = D.ring[0] + 1,
    re = (e, t) => e >= t && e <= t + 2;
  for (let e = 0; e < 448; e++)
    for (let t = 0; t < 448; t++) {
      if (!ee(t, e)) continue;
      let n = t - 224,
        i = e - 224,
        a = Math.abs(n),
        o = Math.abs(i),
        s = i < 0,
        c = +(n > 0) + (s ? 0 : 2),
        l = !1;
      if (a >= ne) {
        let e = (s ? [10, 19, 28, 37] : [9, 18, 27, 36]).map((e) => e * 2);
        for (let t of e) re(o, t + (t === 20 && s ? 0 : te(c, t))) && (l = !0);
        (re(a, 70 + te(c, 35)) && !(s && o <= 18) && (l = !0),
          re(a, 82) && o > 40 && Je(c, 41, 3) < 0.6 && (l = !0));
      } else {
        re(o, 72) && (l = !0);
        for (let e of [10, 23]) re(a, e * 2 + (s ? 0 : te(c, e))) && (l = !0);
      }
      l && ((r[j(t, e)] = 14), (k[j(t, e)] = 1));
    }
  for (let e = 0; e < 200704; e++) k[e] && (a[e] = 2);
  let ie = o,
    ae = (e, t) => {
      let n = j(224 + e, 224 + t);
      ((ie.h[n] = 0), (ie.flag[n] = 0));
    };
  for (let e = 0; e < 200704; e++) ie.h[e] && (a[e] = 1);
  for (let e of [-1, 1])
    for (let t = -3; t <= 3; t++)
      for (let n of [95, 96])
        for (let [i, o] of [
          [e * n, t],
          [t, e * n],
        ])
          (ae(i, o),
            (r[j(224 + i, 224 + o)] = Math.abs(t) <= er ? 14 : 15),
            (a[j(224 + i, 224 + o)] = 2));
  for (let e = 0; e < 200704; e++) {
    if (!ie.h[e] || ie.pal[e] !== 0 || ie.h[e] !== 32) continue;
    let t = e % 448,
      n = Math.floor(e / 448);
    ie.h[e + 448] ||
      (Je(t, n, 1201) < 0.09 &&
        ((ie.flag[e] |= Xn.BANNER), (ie.banner[e] = 0)));
  }
  let oe = (e, t, n, i, o) => {
      let c = Math.round(e - n / 2),
        l = Math.round(t - n / 2);
      for (let e = l; e < l + n; e++)
        for (let t = c; t < c + n; t++)
          ((ie.h[j(t, e)] = 0),
            (ie.flag[j(t, e)] = 0),
            f(t, e),
            (a[j(t, e)] = 1),
            r[j(t, e)] === 5 && (r[j(t, e)] = 15));
      s.push({
        kind: `tower`,
        ref: { t: `tower`, opts: i },
        key: o,
        mode: `tower`,
        tx: c,
        ty: l,
        w: n,
        h: n,
        blocks: !0,
      });
    },
    se = (e, t) => e * t + 0.5,
    ce = 96 * (Math.SQRT2 - 1),
    le = (e, t, n) =>
      oe(
        224 + e,
        224 + t,
        4,
        {
          d: 4,
          bodyH: 50,
          roof: null,
          pal: 0,
          seed: n,
          flag: n % 2 ? `#44c9f0` : void 0,
        },
        `tower-town-${n % 2}`,
      ),
    ue = 0;
  for (let e of [-1, 1])
    for (let t of [-1, 1]) {
      (le(se(e, 95.5), se(t, ce), ue++), le(se(e, ce), se(t, 95.5), ue++));
      let n = (95 * Math.SQRT2) / 2;
      le(se(e, n), se(t, n), ue++);
    }
  for (let e of [-1, 1])
    (le(se(e, 95.5), -5.5, ue++),
      le(se(e, 95.5), 6, ue++),
      le(-5.5, se(e, 95.5), ue++),
      le(6, se(e, 95.5), ue++));
  let de = D.court[1] + 1,
    fe = D.castle[1];
  for (let e = -3; e <= 3; e++)
    for (let t = de; t <= fe; t++)
      (ae(e, t), (r[j(224 + e, 224 + t)] = 23), (a[j(224 + e, 224 + t)] = 2));
  (le(-5.5, de + 2, ue++), le(6, de + 2, ue++));
  let pe = (e, t, n, r) => {
      let i = { pyro: `pyro`, cryo: `cryo`, storm: `storm`, void: `void` },
        a = {
          pyro: `#ffb238`,
          cryo: `#dff6ff`,
          storm: `#fff36b`,
          void: `#d06bff`,
        };
      oe(
        224 + e,
        224 + t,
        4,
        {
          d: 4,
          bodyH: 70,
          roof: i[n],
          pal: 1,
          seed: 50 + r,
          flag: a[n],
          window: a[n],
        },
        `tower-castle-${n}`,
      );
    },
    me = D.castle[0] - 0.5,
    he = D.castle[1] - 0.5;
  (pe(-me + 0.5, -he + 0.5, `cryo`, 0),
    pe(me + 0.5, -he + 0.5, `pyro`, 1),
    pe(-me + 0.5, he + 0.5, `void`, 2),
    pe(me + 0.5, he + 0.5, `storm`, 3));
  let ge = { x: 224, y: 230 };
  (g(
    `keep`,
    { t: `landmark`, name: `keep` },
    `hall-of-the-circle`,
    213,
    224 - D.court[1],
    23,
    19,
    `Hall of the Circle`,
  ),
    y(`crystal`, ge.x, ge.y),
    _(
      `ritualRing`,
      { t: `prop`, name: `ritualRing` },
      `ritualRing`,
      ge.x,
      ge.y - 3,
      !1,
    ),
    _(
      `obeliskStand`,
      { t: `prop`, name: `obeliskStand` },
      `obeliskStand`,
      ge.x,
      ge.y - 2,
      !1,
    ));
  let _e = D.court,
    ve = (e, t, n) => {
      a[j(e, t)] !== 1 && (r[j(e, t)] = n);
    };
  for (let e = 224 - _e[1]; e <= 224 + _e[1]; e++)
    for (let t = 224 - _e[0]; t <= 224 + _e[0]; t++) {
      let n = t - 224,
        r = e - 224;
      rr(t - ge.x, e - ge.y) <= 8.5 ||
      (r >= -3 && r <= -1 && Math.abs(n) <= 11) ||
      (r > 0 && Math.abs(n) <= er)
        ? ve(t, e, 11)
        : ((r >= 15 && Math.abs(n) >= 6) ||
            (r <= -5 && Math.abs(n) >= 12 && Math.abs(n) <= 16)) &&
          ve(t, e, Je(t, e, 31) < 0.14 ? 2 : 1);
    }
  for (let e = 224 + _e[1] + 1; e <= 224 + D.lawn[1]; e++)
    for (let t = 222; t <= 226; t++)
      (r[j(t, e)] === 23 || r[j(t, e)] === 14) && (r[j(t, e)] = 11);
  let ye = { a: 15, b: 22, y0: 1, y1: 11 };
  for (let e of [-1, 1])
    for (let t = ye.y0; t <= ye.y1; t++)
      for (let n = ye.a; n <= ye.b; n++) {
        let i = j(224 + e * n, 224 + t);
        ((r[i] = 5), (a[i] = 1));
      }
  for (let e of [-1, 1])
    for (let t = 16; t <= 21; t++)
      for (let n = 14; n <= 21; n++)
        ve(224 + e * n, 224 + t, Je(n, t, 33) < 0.18 ? 1 : 15);
  for (let e = 0; e < 8; e++) {
    let t = ((e + 0.5) / 8) * Math.PI * 2;
    y(
      `pillar`,
      Math.round(ge.x + Math.cos(t) * 8.9),
      Math.round(ge.y + Math.sin(t) * 8.9),
      +(e % 3 == 0),
    );
  }
  for (let [e, t] of [
    [-4, -2],
    [4, -2],
    [-4, 7],
    [4, 7],
  ])
    y(`brazier`, ge.x + e, ge.y + t);
  let be = (e, t, n, r) => {
      let i = et(e);
      return {
        w: i.w,
        h: i.h,
        stories: 2,
        wall: `plaster`,
        roof: it.marizon,
        style: `hip`,
        seed: t,
        pack: e,
        flip: n,
        ...(r ? { shop: { sign: r } } : {}),
      };
    },
    xe = (e, t, n, r, i, a) => {
      let o = et(t);
      g(
        `wing`,
        { t: `building`, opts: be(t, r, a, i) },
        `wing-${r}`,
        e,
        224 - D.court[1] + 1,
        o.w,
        o.h,
        n,
      );
    };
  (xe(224 - D.court[0], `Q`, `Library of the Circle`, 8101, `book`, !1),
    xe(224 + D.court[0] - 7, `R`, `Initiates' Hall`, 8102, `staff`, !0));
  let Se = { pyro: 1, cryo: 2, storm: 3, void: 4 };
  (v(`bannerPole`, 211, 221, Se.cryo),
    v(`bannerPole`, 237, 221, Se.pyro),
    v(`bannerPole`, 218, ge.y + 9, Se.void),
    v(`bannerPole`, 230, ge.y + 9, Se.storm));
  for (let [e, t, n] of [
    [-19, 17, `cryo`],
    [-16, 17, `void`],
    [19, 17, `pyro`],
    [16, 17, `storm`],
  ])
    (v(`runeTarget`, 224 + e, 224 + t, n), v(`dummy`, 224 + e, 224 + t + 3, n));
  for (let e of [-1, 1])
    g(
      `manaFountain`,
      { t: `prop`, name: `manaFountain` },
      `manaFountain`,
      e < 0 ? 204 : 241,
      223,
      4,
      2,
    );
  for (let [e, t, n] of [
    [-6, -2, 0],
    [6, -2, 0],
    [-4, 18, 1],
    [4, 18, 1],
    [-4, 21, 2],
    [4, 21, 2],
  ])
    v(`guardian`, 224 + e, 224 + t, n);
  for (let [e, t] of [
    [-23, 16],
    [23, 16],
    [-23, 21],
    [23, 21],
    [-9, 21],
    [9, 21],
    [-10, 16],
    [10, 16],
    [-14, -6],
    [14, -6],
    [-14, -12],
    [14, -12],
    [-14, -18],
    [14, -18],
  ])
    y(`tree`, 224 + e, 224 + t, (e + t + 40) % 4);
  (g(`well`, { t: `prop`, name: `well` }, `well`, 212, 242, 2, 2),
    v(`bench`, 217, 242),
    v(`bench`, 231, 242));
  let Ce = 224 + D.moat[1] + 2;
  (g(
    `statue`,
    { t: `prop`, name: `statue` },
    `statue`,
    218,
    Ce,
    2,
    2,
    `Statue of the First Listener`,
  ),
    g(`statue`, { t: `prop`, name: `statue` }, `statue`, 228, Ce, 2, 2));
  let we = Math.round((D.moat[0] + D.market[0]) / 2);
  for (let [e, t] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    g(
      `fountain`,
      { t: `prop`, name: `fountain` },
      `fountain`,
      224 + e * (we + 1) - 1,
      224 + t * we - 1,
      3,
      3,
    );
  let Te = 0,
    Ee = (e, t) => {
      if (!m(e, t, 3, 2)) return;
      let n = [
          `produce`,
          `cloth`,
          `potions`,
          `crystals`,
          `bread`,
          `fish`,
          `flowers`,
          `herbs`,
        ],
        r = n[Te % n.length];
      (g(
        `stall`,
        { t: `prop`, name: `stall`, arg: [r, Te] },
        `stall-${r}-${Te % 3}`,
        e,
        t,
        3,
        2,
      ),
        Te++);
    },
    De = (e, t) => {
      for (let n = 0; n < 2; n++)
        for (let r = 0; r < 3; r++) a[j(e + r, t + n)] = 0;
      Ee(e, t);
    };
  for (let e of [-1, 1])
    for (let t of [we])
      for (let n = 224 - we + 3; n <= 224 + we - 6; n += 4)
        Math.abs(n + 1 - 224) <= 5 || De(n, 224 + e * t - +(e < 0));
  for (let e of [-1, 1])
    for (let t of [we])
      for (let n = 224 - we + 4; n <= 224 + we - 6; n += 3)
        Math.abs(n - 224) <= 4 || De(224 + e * t - 1, n);
  for (let e = 224 - D.moat[1] - 2; e <= 224 + D.moat[1] + 2; e++)
    for (let t = 224 - D.moat[0] - 2; t <= 224 + D.moat[0] + 2; t++)
      r[j(t, e)] === 21 && !O(t - 224, e - 224, D.moat) && (r[j(t, e)] = 11);
  let Oe = (e, t) => (a[j(e, t)] = a[j(e, t)] === 2 ? 0 : a[j(e, t)]),
    ke = D.moat[1] + 1;
  for (let e = -D.moat[0] + 2; e <= D.moat[0] - 2; e += 4)
    if (!(Math.abs(e) <= 3))
      for (let [t, n] of [
        [224 + e, 224 - ke],
        [224 + e, 224 + ke],
        [224 - ke - 1, 224 + e],
        [224 + ke + 1, 224 + e],
      ])
        (Oe(t, n), y(`lamp`, t, n));
  let Ae = (e, t, n, i) => {
      for (let o = t; o < t + i; o++)
        for (let t = e; t < e + n; t++)
          ((a[j(t, o)] = 0),
            k[j(t, o)] && ((k[j(t, o)] = 0), (r[j(t, o)] = 1)));
    },
    je = [
      [`pyro`, 248, 156, `Pyromancer Hall`],
      [`cryo`, 180, 156, `Cryomancer Hall`],
      [`storm`, 284, 206, `Stormcaller Hall`],
      [`void`, 144, 206, `Voidweaver Hall`],
    ],
    Me = et(`J`);
  je.forEach(([e, t, n, r], i) => {
    (Ae(t, n, 22, 16),
      g(
        `hall`,
        { t: `building`, opts: be(`J`, 900 + i, i % 2 == 1) },
        `hall-${e}`,
        t + Math.floor((22 - Me.w) / 2),
        n + 16 - Me.h,
        Me.w,
        Me.h,
        r,
      ),
      v(`dummy`, t - 1, n + 16 - 1, e),
      v(`runeTarget`, t + 22, n + 16 - 1, e));
  });
  for (let e of [254, 262]) (Oe(e, 172), y(`brazier`, e, 172));
  let Ne = et(`E`);
  (Ae(206, 284, Ne.w, Ne.h),
    g(
      `inn`,
      { t: `building`, opts: be(`E`, 777, !1, `mug`) },
      `inn-rising-mage`,
      206,
      284,
      Ne.w,
      Ne.h,
      `The Rising Mage`,
    ),
    v(`barrel`, 205, 284 + Ne.h - 1),
    v(`barrel`, 205, 284 + Ne.h - 2));
  let Pe = et(`A`),
    Fe = 315 - Pe.h;
  (Ae(244, Fe, Pe.w, Pe.h),
    g(
      `barracks`,
      { t: `building`, opts: be(`A`, 991, !0) },
      `watch-barracks`,
      244,
      Fe,
      Pe.w,
      Pe.h,
      `Watch Barracks`,
    ));
  let Ie = nt(e * 31 + 7);
  for (let e = 0; e < 358; e++) n();
  let Le = (e, t) => tr(e, t) && ee(e, t) && !k[j(e, t)] && !ie.h[j(e, t)],
    Re = new Uint8Array(200704),
    ze = [];
  for (let e = 0; e < 448; e++)
    for (let t = 0; t < 448; t++) {
      if (Re[j(t, e)] || !Le(t, e)) continue;
      let n = [],
        r = [j(t, e)];
      for (Re[j(t, e)] = 1; r.length;) {
        let e = r.pop();
        n.push(e);
        let t = e % 448,
          i = Math.floor(e / 448);
        for (let [e, n] of [
          [1, 0],
          [-1, 0],
          [0, 1],
          [0, -1],
        ]) {
          let a = t + e,
            o = i + n;
          Le(a, o) && !Re[j(a, o)] && ((Re[j(a, o)] = 1), r.push(j(a, o)));
        }
      }
      ze.push(n);
    }
  let Be = [
      `bread`,
      `mug`,
      `anvil`,
      `potion`,
      `staff`,
      `book`,
      `gem`,
      `robe`,
      `herb`,
      `boot`,
      `bag`,
      `cheese`,
      `candle`,
      `sword`,
      `fish`,
      `lantern`,
    ],
    Ve = Qe.filter((e) => e.use.includes(`house`) || e.use.includes(`shop`)),
    He = (e, t) => {
      let n = d(e, t),
        r = e - 224,
        i = t - 224;
      return (
        n === 21 ||
        O(r, i, D.ring) ||
        ((Math.abs(r) <= er || Math.abs(i) <= er) && n === 14)
      );
    },
    Ue = (e, t) => tr(e, t) && (k[j(e, t)] === 1 || d(e, t) === 15),
    We = [],
    Ge = 5001;
  for (let t of ze) {
    let n = new Set(t),
      i = (e, t) => tr(e, t) && n.has(j(e, t)),
      o = 448,
      s = 0,
      c = 448,
      l = 0;
    for (let e of t) {
      let t = e % 448,
        n = Math.floor(e / 448);
      ((o = Math.min(o, t)),
        (s = Math.max(s, t)),
        (c = Math.min(c, n)),
        (l = Math.max(l, n)));
    }
    let u = (e, t) => i(e, t) && a[j(e, t)] !== 1,
      d = l;
    for (; d >= c + 7;) {
      let t = (e) => {
          let t = 0;
          for (; t < 16 && u(e, d - t);) t++;
          return t;
        },
        n = 0,
        c = o;
      for (; c <= s;) {
        let r = Ve.filter((e) => {
          if (c + e.w - 1 > s) return !1;
          for (let n = c; n < c + e.w; n++) if (t(n) < e.h) return !1;
          return !0;
        });
        if (!r.length) {
          c++;
          continue;
        }
        let i = r[Math.floor(Ie() * r.length)],
          a = Ie() < 0.5,
          o = !1;
        for (let e = c; e < c + i.w; e++) He(e, d + 1) && (o = !0);
        let l = e * 1e3 + Ge++,
          u = g(
            `house`,
            { t: `building`, opts: be(i.id, l, a) },
            `bld-${l}`,
            c,
            d - i.h + 1,
            i.w,
            i.h,
          );
        (We.push({ p: u, prime: o }),
          (n = Math.max(n, i.h)),
          (c += i.w + +(Ie() < 0.35)));
      }
      if (!n) break;
      let l = d - n - 1;
      for (let e = l; e >= l - 1; e--)
        for (let t = o; t <= s; t++)
          i(t, e) && a[j(t, e)] !== 1 && ((r[j(t, e)] = 15), (a[j(t, e)] = 2));
      d = l - 2;
    }
    for (let e of t) {
      if (a[e]) continue;
      let t = e % 448,
        n = Math.floor(e / 448),
        r = Je(t, n, 4040);
      r < 0.04 && m(t - 1, n - 1, 3, 2) && !Ue(t, n + 1)
        ? y(`tree`, t, n, Math.floor(r * 57) % 4)
        : r < 0.06
          ? v(
              rt(Ie, [`barrel`, `crates`, `sacks`, `planter`, `haybale`]),
              t,
              n,
              Math.floor(r * 100) % 3,
            )
          : r < 0.09
            ? y(`bush`, t, n, Math.floor(r * 99) % 2)
            : r < 0.095 &&
              m(t, n - 1, 2, 2) &&
              g(`well`, { t: `prop`, name: `well` }, `well`, t, n - 1, 2, 2);
    }
  }
  let Ke = (e, t) => {
      let n = e.p.ref;
      ((n.opts = { ...n.opts, shop: { sign: t } }), (e.p.kind = `shop`));
    },
    qe = [...We.filter((e) => e.prime), ...We.filter((e) => !e.prime)],
    Ye = 0;
  for (let e of qe) {
    if (Ye >= Be.length) break;
    Ke(e, Be[Ye++]);
  }
  for (let e of We.filter((e) => e.prime && e.p.kind === `house`))
    Ie() < 0.35 && Ke(e, Be[Ye++ % Be.length]);
  for (let e = D.ring[0] + 3; e <= 89; e += 10)
    for (let [t, n] of [
      [0, -1],
      [0, 1],
      [1, 0],
      [-1, 0],
    ])
      for (let r of [-3, 3]) {
        let i = 224 + t * e + (t === 0 ? r : 0),
          o = 224 + n * e + (n === 0 ? r : 0);
        tr(i, o) && !a[j(i, o)] && !k[j(i, o)] && y(`lamp`, i, o);
      }
  let $e = 91,
    tt = (e, t) => rr(e - 224, t - 224) > 97.5,
    at = (e, t) => S.has(j(e, t)),
    ot = (e, n) =>
      (t.altars ?? []).some(
        ([t, r]) => ((e - t) / lr[0]) ** 2 + ((n - r) / lr[1]) ** 2 <= 1,
      );
  for (let [e, n] of t.altars ?? [])
    for (let t = n - lr[1]; t <= n + lr[1]; t++)
      for (let n = e - lr[0]; n <= e + lr[0]; n++) ot(n, t) && f(n, t);
  let st = t.cisterns,
    ct = (e, t) =>
      !!st && Math.abs(e - st[0]) <= 14 && t >= st[1] - 11 && t <= st[1] + 8,
    ut = (e, t, n) =>
      n.some((n) => e >= n.x0 && e <= n.x1 && t >= n.y0 && t <= n.y1),
    dt = [],
    ft = (e, t, n, r) => {
      for (let i = t; i < t + r; i++)
        for (let t = e; t < e + n; t++) {
          if (
            !tr(t, i) ||
            !tt(t, i) ||
            at(t, i) ||
            ie.h[j(t, i)] ||
            ot(t, i) ||
            ct(t, i) ||
            ut(t, i, dt)
          )
            return !1;
          let e = d(t, i);
          if (
            e === 5 ||
            e === 13 ||
            e === 10 ||
            e === 8 ||
            e === 12 ||
            e === 19 ||
            (a[j(t, i)] === 1 && !l.has(j(t, i)))
          )
            return !1;
        }
      return !0;
    };
  if (st) {
    let [e, t] = st,
      n = t - 3,
      r = (e, t) => d(e, t) === 5 || d(e, t) === 13,
      i = e - 4,
      o = t - 50,
      s = 1 / 0;
    for (let a = t - 80; a <= n - 16; a++)
      for (let t = e - 32; t <= e + 24; t++) {
        if (!tr(t, a) || !r(t, a)) continue;
        let c = (t - e) ** 2 + (a - n) ** 2;
        c < s && ((s = c), (i = t), (o = a));
      }
    let c = i + 0.5,
      l = o + 0.5,
      m = e + 0.5,
      h = n - 7,
      g = Math.hypot(m - c, h - l) || 1,
      v = Math.max(2, Math.round(g)),
      y = [];
    for (let e = 0; e <= v; e++) {
      let t = e / v,
        n = Math.sin(t * Math.PI) * (Xe(t * 2.5, 0.5, 1811) - 0.5) * 9;
      y.push([
        c + (m - c) * t - ((h - l) / g) * n,
        l + (h - l) * t + ((m - c) / g) * n,
      ]);
    }
    let b = [m, n - 5];
    y.push(b);
    let x = [b, [e - 3, n - 3], [e - 3, n]],
      S = [b, [e + 4, n - 3], [e + 4, n]],
      C = (e, t, n, r) => {
        let i = r[0] - n[0],
          a = r[1] - n[1],
          o = Math.max(
            0,
            Math.min(
              1,
              ((e - n[0]) * i + (t - n[1]) * a) / (i * i + a * a || 1),
            ),
          );
        return Math.hypot(e - (n[0] + i * o), t - (n[1] + a * o));
      },
      w = (e, t, n) => {
        let r = 1 / 0;
        for (let i = 0; i + 1 < n.length; i++)
          r = Math.min(r, C(e, t, n[i], n[i + 1]));
        return r;
      };
    for (let t = Math.min(o, n) - 2; t < n; t++)
      for (let r = Math.min(i, e) - 14; r <= Math.max(i, e) + 14; r++) {
        if (!tr(r, t)) continue;
        let e = r + 0.5,
          i = t + 0.5;
        if (
          w(e, i, y) <= 1.6 ||
          (t >= n - 6 && (w(e, i, x) <= 1.05 || w(e, i, S) <= 1.05))
        ) {
          u(r, t, 5);
          for (let e = -1; e <= 1; e++)
            for (let n = -1; n <= 1; n++) f(r + n, t + e);
        }
      }
    let [T, E] = y[Math.floor(y.length / 2)],
      D = Math.floor(E),
      O = Math.floor(T),
      k = O;
    for (; O > Math.floor(T) - 4 && d(O - 1, D) === 5 && d(O - 1, D + 1) === 5;)
      O--;
    for (; k < Math.floor(T) + 4 && d(k + 1, D) === 5 && d(k + 1, D + 1) === 5;)
      k++;
    let ee = Math.floor(T);
    if ([D - 1, D, D + 1, D + 2].every((e) => d(ee, e) === 5)) {
      for (let e = O; e <= k; e++)
        if (d(e, D) === 5 && d(e, D + 1) === 5)
          for (let t of [D, D + 1]) u(e, t, 19);
      dt.push({ x0: O - 5, y0: D - 2, x1: k + 5, y1: D + 3 });
    }
    for (let t = e - 10; t <= e + 10; t++) (f(t, n), u(t, n, 0));
    _(`cliff`, { t: `prop`, name: `cliff` }, `cliff-cisterns`, e - 10, n);
    for (let t = e - 10; t <= e + 10; t++) a[j(t, n)] = 1;
    for (let t = n - 4; t < n; t++)
      for (let n = e - 2; n <= e + 2; n++)
        (f(n, t), d(n, t) !== 5 && (a[j(n, t)] = 1));
    for (let t = n - 1; t < n; t++)
      for (let n = e - 10; n <= e + 10; n++) {
        if (d(n, t) === 5 || (n >= e - 2 && n <= e + 2)) continue;
        (f(n, t),
          d(n, t) !== 0 && d(n, t) !== 1 && d(n, t) !== 2 && u(n, t, 0));
        let r = Je(n, t, 1821);
        (p(
          n,
          t,
          r < 0.8 ? `bush` : `rock`,
          Math.floor(Je(n, t, 1822) * 3),
          r < 0.8 ? `bush` : `rock`,
        ),
          (a[j(n, t)] = 1));
      }
    for (let t of [-1, 1]) {
      let r = e + t * 10;
      for (let [e, i, a] of [
        [r, n + 1, `tree`],
        [r + t, n - 2, `tree`],
        [r + t, n, `bush`],
        [r + 2 * t, n + 1, `bush`],
      ])
        (f(e, i), p(e, i, a, Math.floor(Je(e, i, 1823) * 3), a));
    }
    for (let t = n + 1; t <= n + 4; t++)
      for (let r = e - 8; r <= e + 8; r++) {
        if (r >= e - 2 && r <= e + 2) continue;
        let i = Math.abs(r - (e + 0.5)) - 2.5,
          a =
            2.6 +
            (Xe(r * 0.45, 3.5, 1831) - 0.5) * 1.6 -
            Math.max(0, i - 3.5) * 0.9;
        t - (n + 1) >= a || (f(r, t), u(r, t, 5));
      }
    for (let t = n + 1; t <= n + 5; t++)
      for (let n = e - 2; n <= e + 2; n++)
        (f(n, t), u(n, t, 0), (a[j(n, t)] = 2));
    let te = null;
    s = 1 / 0;
    for (let t = n + 6; t <= n + 19; t++)
      for (let i = e - 10; i <= e + 10; i++) {
        if (!tr(i, t) || !r(i, t)) continue;
        let a = (i - (e - 4)) ** 2 + (t - (n + 4)) ** 2;
        a < s && ((s = a), (te = [i + 0.5, t + 0.5]));
      }
    if (te) {
      let t = [[e - 5, n + 3.5], [e - 5, n + 5.5], te];
      for (let r = n + 4; r <= Math.ceil(te[1]); r++)
        for (let i = e - 9; i <= e + 9; i++)
          (i >= e - 2 && i <= e + 2 && r <= n + 5) ||
            (w(i + 0.5, r + 0.5, t) <= 1.4 && (f(i, r), u(i, r, 5)));
    }
  }
  let pt = Qe.filter((e) => e.use.includes(`house`) && e.w * e.h <= 169),
    mt = et(`L`),
    ht = (e = !1) => {
      let t = pt[Math.floor(n() * pt.length)];
      return e ? mt : t;
    },
    gt = (t, r, i) => {
      let o = i.w,
        s = i.h;
      if (!ft(t, r, o, s)) return !1;
      let c = e * 1e3 + $e++,
        l = { ...lt(o, s, c), pack: i.id, flip: n() < 0.5 };
      g(`house`, { t: `building`, opts: l }, `bld-${c}`, t, r, o, s);
      for (let e = t; e < t + o; e++)
        tr(e, r + s) &&
          !at(e, r + s) &&
          !a[j(e, r + s)] &&
          d(e, r + s) !== 5 &&
          u(e, r + s, 15);
      return !0;
    },
    _t = (t, n, r, i, a, o, s = !0) => {
      if (s && !ft(r, i, a.w, a.h)) return !1;
      let c = e * 1e3 + $e++;
      return (
        g(
          t,
          { t: `building`, opts: { ...lt(a.w, a.h, c), pack: a.id } },
          n,
          r,
          i,
          a.w,
          a.h,
          o,
        ),
        !0
      );
    };
  {
    let e = et(`M`);
    h(104, 236, 20, 13);
    for (let e = 236; e < 249; e++)
      for (let t = 104; t < 124; t++)
        d(t, e) !== 5 && d(t, e) !== 13 && !at(t, e) && u(t, e, 15);
    _t(`sawmill`, `sawmill`, 105, 236, e, `Lumber Yard`);
    for (let [e, t] of [
      [16, 3],
      [16, 7],
      [3, 11],
      [8, 11],
    ])
      v(`logpile`, 104 + e, 236 + t);
    (v(`cart`, 117, 247), v(`crates`, 122, 246, 2));
  }
  _t(`stable`, `stable`, 232, 332 - et(`M`).h, et(`M`));
  let vt = (e, t) => {
    for (let n = 0; n < 448; n++) {
      let r = t ? n : e,
        i = t ? e : n;
      if (at(r, i) && (t ? at(r + 4, i) : at(r, i + 4))) return n + er;
    }
    return 224;
  };
  for (let e of [-1, 1]) {
    let t = 224 + e * 104;
    for (let r = 0; r < 7; r++) {
      let r = ht(),
        i = r.w,
        a = e > 0 ? t : t - i + 1,
        o = vt(Math.round(a + i / 2), !1);
      (gt(a, o - er - 1 - r.h + 1, r),
        n() < 0.7 && gt(a + (n() < 0.5 ? 0 : 1), o + er + 2, ht()),
        (t += e * (i + 2 + Math.floor(n() * 4))));
    }
    t = 224 + e * (96 + (e < 0 ? 6 : 4) * 2);
    for (let r = 0; r < (e > 0 ? 3 : 6); r++) {
      let r = i[j(224, t)] === Qn.indexOf(`frost`),
        a = ht(r),
        o = ht(r),
        s = Math.max(a.h, o.h),
        c = e > 0 ? t : t - s + 1,
        l = vt(Math.round(c + s / 2), !0);
      (gt(l - er - 1 - a.w, c + s - a.h, a),
        gt(l + er + 2, c + s - o.h, o),
        (t += e * (s + 3 + Math.floor(n() * 3))));
    }
  }
  for (let e = 128; e <= 138; e++) for (let t = 364; t <= 408; t++) f(t, e);
  for (let [e, t] of [
    [344, 196],
    [368, 248],
    [340, 272],
  ]) {
    let n = et(`C`),
      r = et(`G`),
      i = (e, t) =>
        ft(e, t + 4 - n.h, n.w, n.h + 3) &&
        ft(e + n.w + 1, t + 4 - r.h, r.w, r.h + 3),
      a = [0, 8, -8, 16, -16]
        .flatMap((n) => [0, 10, -10].map((r) => [e + r, t + n]))
        .find(([e, t]) => i(e, t));
    if (!a) continue;
    let [o, s] = a;
    (_t(`farmhouse`, `farmhouse-${o}`, o, s + 4 - n.h, n),
      _t(`barn`, `barn-${o}`, o + n.w + 1, s + 4 - r.h, r),
      h(o, s + 4, n.w + r.w + 1, 3),
      v(`haybale`, o + n.w + 3, s + 5),
      v(`haybale`, o + n.w + 6, s + 5),
      v(`cart`, o + 3, s + 5));
  }
  let yt = [],
    bt = [17, 18, 17, 16, 18];
  for (let e = 0; e < 1600 && yt.length < 104; e++) {
    let e = 6 + Math.floor(n() * 6),
      t = 4 + Math.floor(n() * 3),
      r = 328 + Math.floor(n() * 32 * 2),
      i = 140 + Math.floor(n() * 84 * 2);
    if (!ft(r - 1, i - 1, e + 2, t + 2)) continue;
    let o = !0;
    for (let n = i - 2; n <= i + t + 1 && o; n++)
      for (let t = r - 2; t <= r + e + 1 && o; t++) at(t, n) && (o = !1);
    if (
      !o ||
      yt.some(
        (n) =>
          r < n.x + n.w + 2 &&
          r + e + 2 > n.x &&
          i < n.y + n.h + 2 &&
          i + t + 2 > n.y,
      )
    )
      continue;
    let s = bt[yt.length % bt.length];
    (yt.push({ x: r, y: i, w: e, h: t }), h(r - 1, i - 1, e + 2, t + 2));
    for (let n = i; n < i + t; n++)
      for (let t = r; t < r + e; t++) (u(t, n, s), (a[j(t, n)] = 2));
    for (let n = r - 1; n <= r + e; n++)
      (n !== r + Math.floor(e / 2) && v(`fence`, n, i - 1, 1, !0),
        v(`fence`, n, i + t, 1, !0));
    for (let n = i; n < i + t; n++)
      (v(`fence`, r - 1, n, 0, !0), v(`fence`, r + e, n, 0, !0));
    n() < 0.6 &&
      v(`scarecrow`, r + Math.floor(e / 2), i + Math.floor(t / 2) + 0, void 0);
  }
  for (let [e, t, n] of [
    [356, 172, 1],
    [376, 284, 2],
    [388, 212, 3],
  ])
    if (ft(e - 1, t - 1, 4, 3)) {
      h(e - 1, t - 1, 4, 3);
      for (let n = t - 1; n <= t + 1; n++)
        for (let t = e - 1; t <= e + 1; t++) a[j(t, n)] = 1;
      s.push({
        kind: `windmill`,
        ref: { t: `landmark`, name: `windmill`, arg: n },
        key: `windmill-${n}`,
        mode: `point`,
        tx: e,
        ty: t + 1,
        w: 1,
        h: 1,
        blocks: !0,
      });
    }
  for (let e = 296; e <= 316; e += 3)
    for (let t = 328; t <= 360; t += 3)
      ft(t - 1, e - 1, 3, 2) &&
        !a[j(t, e)] &&
        _(
          `fruitTree`,
          { t: `prop`, name: `fruitTree`, arg: (t + e) % 2 },
          `fruitTree-${(t + e) % 2}`,
          t,
          e,
        );
  for (let e = 234; e < 284; e++)
    for (let t = 84; t < 124; t++)
      if (
        d(e, t) === 5 &&
        d(e, t + 1) !== 5 &&
        d(e, t + 1) !== 13 &&
        (e - 224) % 6 == 0
      ) {
        (u(e, t, 20), u(e, t - 1, d(e, t - 1) === 5 ? 20 : d(e, t - 1)));
        let n = e + 2,
          r = (e) => d(n, e) === 5 || d(n, e) === 13,
          i = [t - 6, t - 7].find((e) =>
            [1, 2, 3, 4, 5].every((t) => r(e + t)),
          );
        i !== void 0 && v(`rowboat`, n, i, void 0, !1);
      }
  for (let [e, t] of [
    [240, 114],
    [264, 112],
  ])
    gt(e, t, i[j(e, t)] === Qn.indexOf(`frost`) ? mt : et(`C`));
  let xt = (e, t, n) => {
    for (let r = t - n; r <= t + n; r++)
      for (let i = e - n; i <= e + n; i++)
        tr(i, r) && (i - e) ** 2 + ((r - t) * 1.2) ** 2 <= n * n && f(i, r);
  };
  (xt(288, 72, 7),
    _(`iceTree`, { t: `prop`, name: `iceTree` }, `iceTree`, 288, 72),
    c.push({
      text: `THE RIME TREE`,
      x: 4616,
      y: 1200,
      size: 1,
      kind: `landmark`,
    }),
    xt(162, 88, 8),
    _(
      `wispCircle`,
      { t: `prop`, name: `wispCircle` },
      `wispCircle`,
      162,
      86,
      !1,
    ));
  for (let e = 0; e < 7; e++) {
    let t = (e / 7) * Math.PI * 2 + 0.35;
    v(
      `runeStone`,
      Math.round(162 + Math.cos(t) * 5.5),
      Math.round(88 + Math.sin(t) * 4.4),
      e,
    );
  }
  c.push({
    text: `THE WISP CIRCLE`,
    x: 2600,
    y: 1504,
    size: 1,
    kind: `landmark`,
  });
  {
    h(107, 175, 20, 28);
    for (let e = 176; e < 202; e++)
      for (let t = 108; t < 126; t++)
        d(t, e) !== 5 && d(t, e) !== 13 && u(t, e, 3);
    let e = et(`J`);
    _t(`mourning`, `mourning-house`, 111, 176, e, `The Once-Graves`, !1);
    for (let t = 176 + e.h + 3; t < 201; t += 3)
      for (let e = 109; e < 125; e += 2)
        d(e, t) === 3 &&
          Math.abs(e - 117) > 1 &&
          v(`gravestone`, e, t, (e * 3 + t) % 3);
    for (let e = 107; e <= 126; e++)
      (v(`fence`, e, 175, 1), e !== 117 && v(`fence`, e, 202, 1));
    for (let e = 176; e < 202; e++)
      (v(`fence`, 107, e, 0), v(`fence`, 126, e, 0));
    (y(`tree`, 124, 178, 1), y(`lamp`, 118, 203));
  }
  {
    h(167, 329, 20, 12);
    for (let e = 330; e < 340; e++)
      for (let t = 168; t < 186; t++)
        at(t, e) || u(t, e, Je(t, e, 5) < 0.3 ? 22 : 15);
    let e = [`pyro`, `cryo`, `storm`, `void`];
    for (let t = 0; t < 4; t++)
      (v(`runeTarget`, 170 + t * 4, 332, e[t]),
        v(`dummy`, 170 + t * 4, 336, e[t]),
        v(`dummy`, 172 + t * 4, 336, null));
    for (let e = 167; e <= 186; e++)
      (v(`fence`, e, 329, 1), Math.abs(e - 177) > 1 && v(`fence`, e, 340, 1));
    for (let e = 330; e < 340; e++)
      (v(`fence`, 167, e, 0), v(`fence`, 186, e, 0));
    (c.push({
      text: `TRAINING FIELD`,
      x: 2832,
      y: 5466,
      size: 1,
      kind: `landmark`,
    }),
      _(
        `watchtower`,
        { t: `landmark`, name: `watchtower` },
        `watchtower`,
        162,
        338,
      ));
  }
  {
    for (let e = 340; e < 352; e++)
      for (let t = 244; t < 262; t++)
        !at(t, e) &&
          d(t, e) !== 10 &&
          (f(t, e), Je(t, e, 6) < 0.6 && u(t, e, 15));
    let e = 0;
    for (let t of [345, 351]) for (let n of [247, 259]) v(`tent`, n, t, e++);
    (v(`campfire`, 253, 344),
      v(`campfire`, 253, 349),
      v(`cart`, 252, 341),
      v(`crates`, 251, 351, 3),
      v(`sacks`, 255, 341),
      c.push({
        text: `EMBER CAMP`,
        x: 4048,
        y: 5654,
        size: 1,
        kind: `landmark`,
      }));
  }
  let St = (e, t, n, r, i) => {
    for (let r = t - n - 1; r <= t + n + 1; r++)
      for (let a = e - n - 1; a <= e + n + 1; a++)
        if (Math.hypot(a - e, r - t) <= n + 1.2 && tr(a, r)) {
          f(a, r);
          let e = d(a, r);
          i !== null && e !== 5 && e !== 13 && e !== 10 && u(a, r, i);
        }
    for (let r = 0; r < 10; r++) {
      let i = (r / 10) * Math.PI * 2,
        a = Math.round(e + Math.cos(i) * n),
        o = Math.round(t + Math.sin(i) * n * 0.9);
      r % 2 ? y(`pillar`, a, o, +(r % 4 == 1)) : v(`runeStone`, a, o, r);
    }
    (v(`shardCluster`, e, t),
      c.push({
        text: r,
        x: e * 16 + 8,
        y: (t + n + 2) * 16 + 4,
        size: 1,
        kind: `landmark`,
      }));
  };
  (St(384, 68, 5, `GOLEM GROUND`, null), St(416, 160, 5, `GOLEM GROUND`, null));
  for (let e = 260; e <= 276; e++)
    for (let t = 46; t <= 66; t++)
      tr(t, e) &&
        Math.hypot((t - 56) / 10, (e - 268) / 8) < 1 &&
        !at(t, e) &&
        (f(t, e), d(t, e) !== 5 && u(t, e, Je(t, e, 7) < 0.4 ? 3 : 1));
  for (let e = 0; e < 16; e++) {
    let t = 48 + Math.floor(Je(e, 1, 91) * 17),
      n = 262 + Math.floor(Je(e, 2, 91) * 13);
    e % 3 == 0
      ? y(`pillar`, t, n, 1)
      : e % 3 == 1
        ? y(`deadtree`, t, n)
        : v(`gravestone`, t, n, e);
  }
  c.push({
    text: `UNREMEMBERED FIELD`,
    x: 904,
    y: 4448,
    size: 1,
    kind: `landmark`,
  });
  let Ct = new Uint8Array(200704);
  {
    let e = [[0, 0]],
      n = [
        [-1, 0],
        [0, 0],
        [1, 0],
      ],
      s = [
        [-1, -1],
        [0, -1],
        [1, -1],
        [-1, 0],
        [0, 0],
        [1, 0],
      ],
      d = [...s, [-2, 0], [2, 0]],
      p = [
        [-1, 0],
        [0, 0],
        [1, 0],
        [-2, -1],
        [-1, -1],
        [0, -1],
        [1, -1],
        [2, -1],
        [0, -2],
      ],
      m = [
        [-1, 0],
        [0, 0],
        [1, 0],
        [-2, -1],
        [-1, -1],
        [0, -1],
        [1, -1],
        [2, -1],
      ],
      h = [
        [-1, 0],
        [0, 0],
        [0, -1],
        [1, -1],
      ],
      g = [
        [-1, 0],
        [2, 0],
      ],
      v = (e, t, n) => Je(e, t, 1700 + n),
      y = (e, t, n, r, i, a = !1, o = !1) => ({
        kind: e,
        v: t,
        x: n,
        y: r,
        foot: a ? i.map(([e, t]) => [-e, t]) : i,
        flip: a,
        walk: o,
      }),
      x = (e) => e === 0 || e === 1 || e === 2 || e === 3,
      S = Qn.indexOf(`glade`),
      C = Qn.indexOf(`woods`),
      w = [
        [384, 68, 14],
        [416, 160, 14],
        [56, 268, 24],
        [117, 189, 24],
        [114, 256, 20],
        [177, 335, 20],
        [253, 346, 20],
        [72, 261, 10],
        [136, 324, 8],
      ],
      T = (e, n) =>
        (e >= 360 && e <= 412 && n >= 124 && n <= 142) ||
        ct(e, n) ||
        ut(e, n, dt) ||
        w.some(([t, r, i]) => (e - t) ** 2 + (n - r) ** 2 < i * i) ||
        (t.altars ?? []).some(
          ([t, r]) => ((e - t) / 17) ** 2 + ((n - r) / 14) ** 2 <= 1,
        ) ||
        (t.keep ?? []).some(
          (t) =>
            e >= t.x0 - 4 && e <= t.x1 + 4 && n >= t.y0 - 4 && n <= t.y1 + 4,
        ),
      E = new Uint8Array(200704),
      D = new Uint8Array(200704);
    for (let e = 0; e < 448; e++)
      for (let t = 0; t < 448; t++)
        if ([7, 8, 9, 22, 10].includes(r[j(t, e)]))
          for (let n = Math.max(0, e - 3); n <= Math.min(447, e + 3); n++)
            for (let e = Math.max(0, t - 3); e <= Math.min(447, t + 3); e++)
              D[j(e, n)] = 1;
    for (let e = 9; e < 439; e++)
      for (let t = 9; t < 439; t++) {
        let n = j(t, e),
          a = i[n];
        !x(r[n]) ||
          D[n] ||
          at(t, e) ||
          o.h[n] ||
          a === 0 ||
          (a !== S && a !== C && b[n] >= 0.5) ||
          (rr(t - 224, e - 224) > 110 && !T(t, e) && (E[n] = 1));
      }
    let O = (e, t) =>
        tr(e, t) && E[j(e, t)] === 1 && (!a[j(e, t)] || l.has(j(e, t))),
      k = (e, t, n, r) => {
        for (let i = t - n; i <= t + n; i++)
          for (let t = e - n; t <= e + n; t++) if (r(t, i)) return !0;
        return !1;
      },
      ee = (e, t) => {
        if (
          !tr(e, t) ||
          at(e, t) ||
          o.h[j(e, t)] ||
          (a[j(e, t)] && !l.has(j(e, t)))
        )
          return !1;
        let n = r[j(e, t)];
        return x(n) || n === 23;
      },
      te = (e, t) =>
        (Ct[j(e, t)] = cr.STONE + Math.floor(v(e, t, 41) * cr.STONES)),
      ne = (e, t, n, i) => {
        let a = e + n * 7,
          o = t + i * 7,
          s = 0,
          c = 1681;
        for (let n = t - 40; n <= t + 40; n++)
          for (let r = e - 40; r <= e + 40; r++) {
            if (!tr(r, n) || !at(r, n)) continue;
            let i = (r - e) ** 2 + (n - t) ** 2;
            i < c && ((c = i), (a = r), (o = n));
          }
        if (c === 1681) {
          let n = 41;
          for (let [r, i, c] of oe) {
            let l = Math.hypot(r - e, i - t) - c;
            l > 2 && l < n && ((n = l), (a = r), (o = i), (s = c * 0.7));
          }
        }
        let l = e,
          u = t;
        for (
          let e = 0;
          e < 90 &&
          !(
            !ee(l, u) ||
            (s && Math.hypot(a - l, o - u) <= s) ||
            (f(l, u),
            r[j(l, u)] !== 23 && (e < 3 || v(l, u, 40) < 0.8) && te(l, u),
            l === a && u === o)
          );
          e++
        ) {
          let t = a - l,
            r = o - u;
          e < 2
            ? ((l += n), (u += i))
            : t &&
                (Math.abs(t) > Math.abs(r)
                  ? v(l, u, 42) < 0.8
                  : v(l, u, 42) < 0.25)
              ? (l += Math.sign(t))
              : r
                ? (u += Math.sign(r))
                : (l += Math.sign(t));
        }
      },
      re = (e) => {
        for (let [t, n] of [[0, 0], ...e.foot])
          for (let [r, i] of [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
          ]) {
            let o = e.x + t + r,
              s = e.y + n + i;
            ee(o, s) &&
              !a[j(o, s)] &&
              !Ct[j(o, s)] &&
              v(o, s, 43) < 0.35 &&
              (Ct[j(o, s)] = cr.GRASS + Math.floor(v(o, s, 44) * cr.GRASSES));
          }
      },
      ie = (e) => {
        if (
          !_(
            `ruin`,
            {
              t: `prop`,
              name: `ruin`,
              arg: e.flip ? [e.kind, e.v, 1] : [e.kind, e.v],
            },
            `ruin-${e.kind}-${e.v}${e.flip ? `-f` : ``}`,
            e.x,
            e.y,
            !e.walk,
          )
        )
          return !1;
        for (let [t, n] of e.foot) a[j(e.x + t, e.y + n)] = 1;
        return (re(e), !0);
      },
      ae = (e) => [[0, 0], ...e.foot].every(([t, n]) => O(e.x + t, e.y + n)),
      oe = [],
      se = (t, n, i) => {
        let o = 0,
          s = 0;
        for (let e = n - i.ry; e <= n + i.ry; e++)
          for (let r = t - i.rx; r <= t + i.rx; r++)
            if (!(((r - t) / i.rx) ** 2 + ((e - n) / i.ry) ** 2 > 1)) {
              if (tr(r, e) && at(r, e)) return !1;
              (o++, O(r, e) && s++);
            }
        if (s < o * 0.88 || !ae(i.pieces[0])) return !1;
        for (let e = n - i.ry - 1; e <= n + i.ry + 3; e++)
          for (let r = t - i.rx - 1; r <= t + i.rx + 1; r++)
            ((r - t) / (i.rx + 1)) ** 2 +
              ((e - n) / (i.ry + (e > n ? 3 : 1))) ** 2 <=
              1 &&
              tr(r, e) &&
              E[j(r, e)] &&
              f(r, e);
        for (let e = n - i.ry; e <= n + i.ry && i.pave > 0; e++)
          for (let r = t - i.rx; r <= t + i.rx; r++) {
            let a =
              ((r - t) / i.rx) ** 2 +
              ((e - n) / i.ry) ** 2 +
              (Xe(r * 0.35, e * 0.35, 1771) - 0.5) * 0.7;
            O(r, e) &&
              (a < i.pave - 0.14 || (a < i.pave && v(r, e, 48) < 0.45)) &&
              u(r, e, 23);
          }
        for (let e of i.pieces) ae(e) && ie(e);
        for (let r = 0, o = 0; r < (i.debris ?? 2) && o < 24; o++) {
          let s = v(t, n, 80 + o) * Math.PI * 2,
            c = 0.35 + v(t, n, 110 + o) * 0.5,
            u = Math.round(t + Math.cos(s) * i.rx * c),
            d = Math.round(n + Math.sin(s) * i.ry * c);
          if (
            k(
              u,
              d,
              1,
              (e, t) => tr(e, t) && a[j(e, t)] === 1 && !l.has(j(e, t)),
            )
          )
            continue;
          let f = v(u, d, 81),
            p =
              f < 0.5
                ? y(
                    `rubble`,
                    Math.floor(v(u, d, 82) * 10),
                    u,
                    d,
                    e,
                    v(u, d, 83) < 0.5,
                  )
                : f < 0.85
                  ? le(u, d, 84)
                  : y(`head`, 0, u, d, e, v(u, d, 83) < 0.5);
          ae(p) && ie(p) && r++;
        }
        for (let e = n - i.ry; e <= n + i.ry; e++)
          for (let o = t - i.rx; o <= t + i.rx; o++) {
            if (!tr(o, e) || Ct[j(o, e)] || !ee(o, e) || a[j(o, e)]) continue;
            let s = ((o - t) / i.rx) ** 2 + ((e - n) / i.ry) ** 2;
            s > 0.45 && s < 1.15 && r[j(o, e)] !== 23 && v(o, e, 47) < 0.06
              ? (Ct[j(o, e)] = cr.OVERGROWN)
              : s < 1 &&
                v(o, e, 45) < 0.05 &&
                (Ct[j(o, e)] =
                  cr.PEBBLE + Math.floor(v(o, e, 46) * cr.PEBBLES));
          }
        for (let [e, t] of i.stones ?? []) te(e, t);
        for (let [e, t, n, r] of i.doors) ne(e, t, n, r);
        return (
          i.label &&
            c.push({
              text: i.label,
              x: t * 16 + 8,
              y: (n + i.ry + 1) * 16,
              size: 1,
              kind: `landmark`,
            }),
          oe.push([t, n, Math.max(i.rx, i.ry)]),
          !0
        );
      },
      ce = (t, n, r) => {
        let i = v(t, n, r);
        return i < 0.62
          ? y(
              `pillar`,
              Math.floor(v(t, n, r + 1) * 21),
              t,
              n,
              e,
              v(t, n, r + 2) < 0.5,
            )
          : i < 0.88
            ? y(
                `rubble`,
                Math.floor(v(t, n, r + 1) * 10),
                t,
                n,
                e,
                v(t, n, r + 2) < 0.5,
              )
            : null;
      },
      le = (t, n, r) =>
        y(`rock`, Math.floor(v(t, n, r) * 41), t, n, e, v(t, n, r + 1) < 0.5),
      ue = (...e) => e.filter((e) => e !== null),
      de = (t, n) => {
        let r = Math.floor(v(t, n, 1) * 12),
          i =
            r < 8
              ? y(`shrine`, r, t, n, r >= 4 ? d : s)
              : r < 10
                ? y(`shrineSmall`, r - 8, t, n, d)
                : y(`gate`, r - 10, t, n, d),
          a = v(t, n, 3) < 0.5 ? -1 : 1;
        return {
          pieces: [
            i,
            y(`pyramid`, 0, t - 3, n + 1, e),
            y(`pyramid`, 0, t + 3, n + 1, e),
            ...ue(v(t, n, 2) < 0.5 ? le(t + a * 5, n - 1, 4) : null),
          ],
          rx: 7,
          ry: 5,
          pave: 0.6,
          doors: [[t, n + 2, 0, 1]],
        };
      },
      fe = (e, t) => {
        let n = [y(`pavilion`, Math.floor(v(e, t, 1) * 8), e, t + 1, p)],
          r = v(e, t, 2),
          i = e + (v(e, t, 4) < 0.5 ? -6 : 6);
        return (
          r < 0.3
            ? n.push(y(`pillarRing`, Math.floor(v(e, t, 3) * 2), i, t + 3, m))
            : r < 0.5 &&
              n.push(
                y(`openPavilion`, Math.floor(v(e, t, 3) * 2), i, t + 3, m),
              ),
          n.push(le(e - 4, t - 3, 5)),
          { pieces: n, rx: 9, ry: 6, pave: 0.4, doors: [[e, t + 2, 0, 1]] }
        );
      },
      pe = (t, n) => {
        let r = v(t, n, 6) < 0.5 ? -1 : 1;
        return {
          pieces: [
            y(`arch`, 0, t, n, g, !1, !0),
            ...ue(...[t - 4, t - 7, t + 5, t + 8].map((e) => ce(e, n, 5))),
            y(`fallenPillar`, 0, t + r * 5, n + 3, h, r < 0),
            ...ue(
              v(t, n, 7) < 0.6
                ? y(`rubble`, Math.floor(v(t, n, 8) * 10), t - r * 3, n - 3, e)
                : null,
            ),
          ],
          rx: 11,
          ry: 5,
          pave: 0.25,
          doors: [
            [t, n + 1, 0, 1],
            [t + 1, n - 1, 0, -1],
          ],
          stones: [
            [t, n],
            [t + 1, n],
          ],
        };
      },
      me = (t, r) => {
        let i = v(t, r, 10) < 0.5,
          a = i ? 8 : -8;
        return {
          pieces: [
            y(
              `fallenWall`,
              Math.floor(v(t, r, 11) * 6),
              t + (i ? -2 : 2),
              r,
              n,
              !i,
            ),
            ...ue(
              ...[-3, 3].flatMap((e) =>
                [-2, -1, 0, 1, 2].map((n) => ce(t + n * 3, r + e, 9)),
              ),
            ),
            v(t, r, 12) < 0.5
              ? y(`knight`, Math.floor(v(t, r, 13) * 3), t + a, r, e, !i)
              : y(`pedestal`, Math.floor(v(t, r, 13) * 11), t + a, r, e),
          ],
          rx: 10,
          ry: 6,
          pave: 0.8,
          doors: [[t - a, r, i ? -1 : 1, 0]],
        };
      },
      he = (t, r, i = !1) => {
        let a = i ? 7 : 5,
          o = Math.round(a * 0.75) + 3,
          s = [
            y(`sunStand`, 0, t, r - 2, [], !1, !0),
            i || v(t, r, 14) < 0.6
              ? y(`obelisk`, 3, t, r, e)
              : y(
                  `brokenObelisk`,
                  4 + Math.floor(v(t, r, 15) * 3),
                  t + 3,
                  r + 2,
                  h,
                ),
          ],
          c = i ? 8 : 5,
          l = v(t, r, 17) * Math.PI * 2;
        for (let o = 0; o < c; o++) {
          let u = l + (o / c) * Math.PI * 2,
            d = Math.round(t + Math.cos(u) * a),
            f = Math.round(r + Math.sin(u) * a * 0.75),
            p = v(d, f, 18),
            m = Math.floor(v(d, f, 19) * 4);
          p < (i ? 0.55 : 0.4)
            ? s.push(y(`obelisk`, [0, 1, 2, 4][m], d, f, e))
            : p < 0.82
              ? s.push(
                  y(
                    `brokenObelisk`,
                    m,
                    d,
                    f,
                    m === 3 ? n : e,
                    v(d, f, 20) < 0.5,
                  ),
                )
              : s.push(y(`pyramid`, 0, d, f, e));
        }
        return {
          pieces: s,
          rx: a + 4,
          ry: o,
          pave: i ? 0.45 : 0.3,
          doors: [[t, r + o - 1, 0, 1]],
          label: i ? `THE SUN STONES` : void 0,
        };
      },
      ge = (t, r) => {
        let i = v(t, r, 24) < 0.5 ? -1 : 1,
          a = (t, n) =>
            v(t, r, 23) < 0.8
              ? y(`knight`, Math.floor(v(t, r, 25) * 3), t, r - 1, e, n)
              : y(`rubble`, Math.floor(v(t, r, 25) * 10), t, r - 1, e);
        return {
          pieces: [
            y(`fountain`, v(t, r, 21) < 0.5 ? 0 : 1, t, r, s),
            a(t - 4, !1),
            a(t + 4, !0),
            ...[
              [-6, -3],
              [6, -3],
              [-6, 3],
              [6, 3],
            ].map(
              ([n, i]) =>
                ce(t + n, r + i, 22) ??
                y(
                  `rubble`,
                  Math.floor(v(t + n, r + i, 26) * 10),
                  t + n,
                  r + i,
                  e,
                ),
            ),
            y(
              `fallenWall`,
              Math.floor(v(t, r, 27) * 6),
              t + i * 3,
              r - 4,
              n,
              i < 0,
            ),
          ],
          rx: 9,
          ry: 6,
          pave: 0.62,
          doors: [[t, r + 1, 0, 1]],
          debris: 1,
        };
      },
      _e = (t, n) => ({
        pieces: [
          ...[0, -1, 1].map((r) =>
            v(t + r * 4, n, 26) < 0.75
              ? y(
                  `knight`,
                  Math.floor(v(t + r * 4, n, 27) * 3),
                  t + r * 4,
                  n,
                  e,
                  r > 0,
                )
              : y(
                  `rubble`,
                  Math.floor(v(t + r * 4, n, 27) * 10),
                  t + r * 4,
                  n,
                  e,
                ),
          ),
          ...ue(
            ...[-2, 2].map((r) =>
              v(t + r, n, 28) < 0.6
                ? y(`pedestal`, Math.floor(v(t + r, n, 29) * 11), t + r, n, e)
                : null,
            ),
          ),
          y(
            `head`,
            0,
            t + (v(t, n, 30) < 0.5 ? -3 : 3),
            n + 3,
            e,
            v(t, n, 31) < 0.5,
          ),
        ],
        rx: 8,
        ry: 5,
        pave: 0.5,
        doors: [[t, n + 1, 0, 1]],
      }),
      ve = (t, r) => ({
        pieces: [
          y(`colossusFoot`, 1, t, r, s),
          y(`sword`, 1, t + 9, r + 3, e),
          y(`head`, 0, t - 7, r + 4, e),
          y(`fallenWall`, 1, t - 3, r + 5, n),
          y(`fallenWall`, 4, t + 5, r - 4, n, !0),
          y(`fallenPillar`, 0, t + 4, r + 6, h),
          y(`rubble`, 6, t + 5, r + 1, e),
          y(`rubble`, 3, t - 6, r - 2, e, !0),
          le(t + 1, r + 4, 32),
          le(t - 10, r + 1, 33),
          le(t + 11, r - 2, 34),
        ],
        rx: 13,
        ry: 9,
        pave: 0,
        doors: [[t, r + 1, 0, 1]],
        label: `THE FALLEN COLOSSUS`,
      }),
      ye = (t, n) => ({
        pieces: [
          y(`sword`, 0, t, n, e),
          le(t - 3, n + 1, 35),
          le(t + 3, n + 2, 36),
          y(`rubble`, 9, t + 2, n - 2, e),
        ],
        rx: 7,
        ry: 5,
        pave: 0,
        doors: [],
        label: `THE STONE SWORD`,
      }),
      be = (e, t, n) => {
        for (let r = 0; r <= 36; r++)
          for (let i = t - r; i <= t + r; i++)
            for (let a = e - r; a <= e + r; a++)
              if (
                Math.max(Math.abs(a - e), Math.abs(i - t)) === r &&
                se(a, i, n(a, i))
              )
                return;
      };
    (be(404, 108, ve), be(396, 304, (e, t) => he(e, t, !0)), be(40, 168, ye));
    let xe = [de, de, fe, fe, pe, me, he, ge, _e],
      Se = [];
    for (let e = 0; e * 26 < 448; e++)
      for (let t = 0; t * 26 < 448; t++)
        Se.push([
          t * 26 + Math.floor(v(t, e, 60) * 26),
          e * 26 + Math.floor(v(t, e, 61) * 26),
          v(t, e, 62),
        ]);
    Se.sort((e, t) => e[2] - t[2]);
    for (let [e, t, n] of Se) {
      if (!O(e, t) || oe.some(([n, r, i]) => Math.hypot(n - e, r - t) < i + 12))
        continue;
      let r = Math.floor(n * 1e6) % xe.length;
      done: for (let [n, i] of [
        [0, 0],
        [3, 0],
        [-3, 0],
        [0, 3],
        [0, -3],
      ])
        for (let a = 0; a < xe.length; a++)
          if (se(e + n, t + i, xe[(r + a) % xe.length](e + n, t + i)))
            break done;
    }
    for (let t = 0; t * 9 < 448; t++)
      for (let r = 0; r * 9 < 448; r++) {
        if (v(r, t, 70) > 0.17) continue;
        let i = r * 9 + Math.floor(v(r, t, 71) * 9),
          o = t * 9 + Math.floor(v(r, t, 72) * 9);
        if (
          !O(i, o) ||
          oe.some(([e, t, n]) => Math.hypot(e - i, t - o) < n + 5)
        )
          continue;
        let s = v(i, o, 50),
          c = v(i, o, 51) < 0.5,
          l = v(i, o, 52),
          u =
            s < 0.3
              ? y(`pillar`, Math.floor(l * 21), i, o, e, c)
              : s < 0.45
                ? y(`rubble`, Math.floor(l * 10), i, o, e, c)
                : s < 0.55
                  ? y(`fallenWall`, Math.floor(l * 6), i, o, n, c)
                  : s < 0.62
                    ? l < 0.5
                      ? y(`fallenPillar`, 0, i, o, h, c)
                      : y(`fallenPillar`, 1, i, o, n, c)
                    : s < 0.72
                      ? y(
                          `brokenObelisk`,
                          Math.floor(l * 4),
                          i,
                          o,
                          Math.floor(l * 4) === 3 ? n : e,
                          c,
                        )
                      : s < 0.8
                        ? y(`plinth`, Math.floor(l * 6), i, o, e)
                        : s < 0.86
                          ? y(`pedestal`, Math.floor(l * 11), i, o, e)
                          : s < 0.9
                            ? y(`head`, 0, i, o, e, c)
                            : le(i, o, 53);
        if (ae(u)) {
          for (let e = o - 2; e <= o + 3; e++)
            for (let t = i - 2; t <= i + 2; t++)
              tr(t, e) && E[j(t, e)] && f(t, e);
          if (ie(u) && (oe.push([i, o, 3]), v(i, o, 54) < 0.3)) {
            let e = v(i, o, 55) < 0.5 ? -1 : 1;
            for (let t = 0; t < 3 + Math.floor(v(i, o, 56) * 4); t++) {
              let n = i + e * (t + 2),
                r = o + 1 + Math.round((v(n, o, 57) - 0.5) * 1.6);
              ee(n, r) && !a[j(n, r)] && v(n, r, 58) < 0.8 && te(n, r);
            }
          }
        }
      }
  }
  for (let e = 0; e < 448; e++)
    for (let t = 0; t < 448; t++) {
      if (Math.min(t, e, 447 - t, 447 - e) >= 3 + Xe(t * 0.2, e * 0.2, 5) * 4)
        continue;
      let n = j(t, e);
      if (at(t, e)) continue;
      let o = r[n];
      if (o === 5 || o === 13 || o === 8 || o === 10 || o === 12 || o === 19)
        continue;
      let s = Qn[i[n]];
      (!a[n] || l.has(n)) &&
        (f(t, e),
        p(
          t,
          e,
          s === `frost`
            ? `pine`
            : s === `ash`
              ? `obsidian`
              : s === `woods`
                ? `darktree`
                : `tree`,
          Math.floor(Je(t, e, 71) * 4),
          `border`,
        ));
    }
  for (let e of l.values()) s.push(e);
  (c.push({ text: `QAESH`, x: 960, y: 960, size: 3, kind: `title` }),
    c.push({ text: `MARIZON`, x: 3592, y: 1968, size: 3, kind: `town` }),
    c.push({
      text: `VERDANT GLADE`,
      x: 6272,
      y: 2176,
      size: 2,
      kind: `region`,
    }),
    c.push({
      text: `WHISPERING WOODS`,
      x: 960,
      y: 2304,
      size: 2,
      kind: `region`,
    }),
    c.push({
      text: `FROSTMERE REACH`,
      x: 2304,
      y: 832,
      size: 2,
      kind: `region`,
    }),
    c.push({
      text: `THE ASHEN WASTES`,
      x: 4864,
      y: 6400,
      size: 2,
      kind: `region`,
    }),
    c.push({ text: `FROSTMERE`, x: 4864, y: 256, size: 2, kind: `water` }),
    c.push({ text: `RIMEWATER`, x: 1152, y: 2240, size: 1, kind: `water` }),
    c.push({
      text: `AETHER SANCTUM`,
      x: 3592,
      y: 3968,
      size: 1,
      kind: `landmark`,
    }),
    c.push({
      text: `CRYSTAL MARKET`,
      x: 3592,
      y: (224 + we) * 16 + 4,
      size: 1,
      kind: `landmark`,
    }));
  for (let [, e, t, n] of je)
    c.push({
      text: n.toUpperCase(),
      x: (e + 11) * 16,
      y: (t + 16) * 16 + 12,
      size: 1,
      kind: `landmark`,
    });
  (c.push({
    text: `THE RISING MAGE`,
    x: (206 + Ne.w / 2) * 16,
    y: (284 + Ne.h) * 16 + 12,
    size: 1,
    kind: `landmark`,
  }),
    c.push({
      text: `WATCH BARRACKS`,
      x: (244 + Pe.w / 2) * 16,
      y: (Fe + Pe.h) * 16 + 12,
      size: 1,
      kind: `landmark`,
    }),
    c.push({
      text: `THE ONCE-GRAVES`,
      x: 1872,
      y: 3272,
      size: 1,
      kind: `landmark`,
    }),
    c.push({
      text: `LUMBER YARD`,
      x: 1824,
      y: 4104,
      size: 1,
      kind: `landmark`,
    }),
    c.push({
      text: `FARMSTEADS`,
      x: 5696,
      y: 3648,
      size: 1,
      kind: `landmark`,
    }));
  let wt = new Uint8Array(200704);
  for (let e = 0; e < 200704; e++) wt[e] = +(a[e] === 1);
  for (let e of s) !e.blocks && e.mode === `point` && (wt[j(e.tx, e.ty)] = 0);
  for (let e = 0; e < 200704; e++)
    (o.h[e] && !(o.flag[e] & Xn.ARCH) && (wt[e] = 1),
      o.flag[e] & Xn.ARCH && (wt[e] = 0));
  return {
    tiles: r,
    regions: i,
    occ: a,
    blocked: wt,
    marks: Ct,
    walls: o,
    placements: s,
    labels: c,
    crystal: ge,
  };
}
