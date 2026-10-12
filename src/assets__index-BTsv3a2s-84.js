// assets__index-BTsv3a2s 84 — math
// Lines 45198-45500 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function CC(e, t, n, r, i, a, o = {}) {
  let s = Math.round(t - r / 2),
    c = Math.round(n - i / 2),
    l = s + Math.round(r),
    u = c + Math.round(i),
    d = o.lens ?? 0;
  for (let r = c - 8; r < u + 8; r++)
    for (let f = s - 9; f < l + 9; f++) {
      if (f >= s && f < l && r >= c && r < u) {
        let i = r - Math.round(a * 1.5 * Math.sign(r + 0.5 - n)),
          o = L(f, i, 41),
          s = XS[0];
        (o < 0.035
          ? (s = XS[4])
          : o < 0.075
            ? (s = XS[3])
            : o < 0.11
              ? (s = XS[2])
              : o < 0.2 && (s = XS[1]),
          f === Math.round(t) &&
            (r + a) % 3 != 0 &&
            (s = o < 0.5 ? XS[4] : XS[3]),
          N(e, f, r, s));
        continue;
      }
      let p = Math.max(s - f, 0, f - (l - 1)),
        m = Math.max(c - r, 0, r - (u - 1)),
        h = Math.hypot(p, m * 0.8);
      d > 0 &&
        (h -=
          d * Math.sqrt(Math.max(0, 1 - ((r + 0.5 - n) / (i / 2 + 2)) ** 2)));
      let g = Math.floor(p > m ? r / 2 : f / 2),
        _ =
          2 +
          L(g, p > m ? (f < t ? 1 : 2) : r < n ? 3 : 4, 42) * 4 +
          +(L(g, a, 43) < 0.2);
      if (h > _) continue;
      let v = h / _;
      N(
        e,
        f,
        r,
        v < 0.25
          ? o.flash
            ? G[4]
            : G[3]
          : v < 0.55
            ? G[2]
            : v < 0.85
              ? G[1]
              : G[0],
      );
    }
  (N(e, s, c, XS[4], l - s, 1),
    N(e, s, u - 1, XS[4], l - s, 1),
    N(e, s, c, XS[4], 1, u - c),
    N(e, l - 1, c, XS[4], 1, u - c));
}
function wC(e, t, n, r, i, a) {
  for (let o = Math.round(n - r / 2); o <= Math.round(n + r / 2); o++) {
    let s = Math.abs(o - n) / (r / 2),
      c = Math.round((1 - s * s) * (1 + i * 3));
    for (let n = -c - 1; n <= c + 1; n++) {
      let r = Math.abs(n);
      (r === c + 1 && L(o, a, 44) > 0.5 * i + 0.2) ||
        N(
          e,
          t + n,
          o,
          r === 0 ? G[4] : r <= c - 1 ? G[3] : r <= c ? G[2] : G[1],
        );
    }
    i > 0.3 &&
      L(o, 45) < i * 0.25 &&
      N(e, t + (L(o, 46) < 0.5 ? -c - 2 : c + 2), o, G[2]);
  }
}
var rne = () =>
    R(`dk-volley-windup`, 5, 58, 34, (e, t) => {
      let n = am((t - 1) / 2),
        r = (e) => {
          let r = iC(e, t * 0.35),
            i = 4 + e * 5;
          return {
            x: 18 + r.x + (i - 18 - r.x) * sm(n),
            y: 21 + r.y + (-16 - r.y) * sm(n),
            behind: r.behind && n < 0.5,
          };
        },
        i = (i) => {
          for (let a = 0; a < 7; a++) {
            if (t === 4 && a === 6) continue;
            let o = r(a);
            o.behind === i &&
              (n < 1
                ? rC(e, o.x, o.y, o.behind, n)
                : (N(e, o.x - 2, o.y - 2, ZS.dark, 3, 1),
                  N(e, o.x - 2, o.y, ZS.dark, 3, 1),
                  N(e, o.x - 2, o.y - 1, ZS.red, 3, 1),
                  N(e, o.x + 1, o.y - 1, G[4], 1, 1)));
          }
        };
      (i(!0),
        e.drawImage($h(), 17, 0, 33, 26, 2, 9, 33, 26),
        i(!1),
        t >= 3 && dm(e, 39, 4, 57, 4, t === 3 ? G[2] : G[3], 3, 2, -t * 2),
        t === 4 && (V(e, 37, 4, 6, 5, G, 4), uC(e, 47, 4, 0, 11, 4)));
    }),
  ine = () =>
    R(
      `dk-shard-body`,
      4,
      24,
      10,
      (e, t) => uC(e, 16, 5, 0, 13, 4 + (t % 2) * 0.5),
      { outline: $S },
    ),
  ane = () =>
    R(`dk-shard`, 4, 24, 10, (e, t) => {
      (dC(e, 10, 5, 10, t * 2), e.drawImage(ine()[t], 0, 0));
    }),
  one = () =>
    R(
      `dk-spent-body`,
      4,
      24,
      10,
      (e, t) => uC(e, 16, 5, 0, 13, 4, [1, 0.8, 0.5, 0][t]),
      { outline: $S },
    ),
  sne = () =>
    R(`dk-return`, 4, 24, 10, (e, t) => {
      (dC(e, 10, 5, 6 + t, t * 2, t < 2), e.drawImage(one()[t], 0, 0));
    }),
  cne = () =>
    R(`dk-impact`, 5, 26, 26, (e, t) => {
      if (t === 0) {
        (P(e, 13, 13, 3, 3, G[3]),
          N(e, 12, 12, G[4], 2, 2),
          V(e, 13, 13, 6, 7, G, 2),
          cC(e, 13, 13, 2, 0, 4, () => G[4]));
        return;
      }
      let n = [0, 0, 3, 6, 8][t],
        r = [0, 10, 10, 10, 10][t];
      (cC(e, 13, 13, 2, n, r, (e) =>
        t === 1
          ? e < 5
            ? G[4]
            : G[3]
          : t === 2
            ? e < 6
              ? G[3]
              : G[2]
            : t === 3
              ? G[2]
              : G[1],
      ),
        _m(e, 13, 13, 0.2 + t * 0.2, 9, 12, G, 7));
    }),
  lne = fC(5, 4, 11, 0.8, 0.5),
  une = () =>
    R(`dk-maze-decal`, 6, 84, 68, (e, t) => {
      let n = [0.4, 0.65, 0.85, 1, 1, 1][t],
        r = [0.1, 0.2, 0.35, 0.55, 0.7, 1][t],
        i = { x: 2.5, y: 2 },
        a = 3.4,
        o = new Set();
      for (let s of lne) {
        let c = s.x + (s.v ? 0 : 0.5),
          l = s.y + (s.v ? 0.5 : 0),
          u = Math.hypot(c - i.x, l - i.y) / a;
        if (u > n) continue;
        let d = 2 + s.x * mC,
          f = 2 + s.y * mC,
          p = s.v ? d : d + mC,
          m = s.v ? f + mC : f;
        (bC(e, d, f, p, m, t >= 3 ? r : r * (1 - u * 0.5), t),
          o.add(`${d},${f}`),
          o.add(`${p},${m}`));
      }
      if (t >= 2)
        for (let n of o) {
          let [r, i] = n.split(`,`).map(Number);
          N(e, r - 1, i - 1, t >= 5 ? G[4] : G[3], 2, 2);
        }
      if (t < 3) {
        let r = t * 2.1 + 0.5;
        N(
          e,
          2 + i.x * mC + Math.cos(r) * n * a * mC - 1,
          2 + i.y * mC + Math.sin(r) * n * a * mC * 0.8 - 1,
          G[4],
          2,
          2,
        );
      }
    }),
  dne = () =>
    R(`dk-wall-rise`, 6, 22, 26, (e, t) => {
      if (t === 0) {
        (N(e, 3, 20, G[3], 16, 2),
          N(e, 4, 20, G[4], 14, 1),
          _m(e, 11, 20, 0.35, 6, 6, G, 3, -0.6));
        return;
      }
      let n = [0, 0, 8, 12, pC, pC][t];
      if (t === 1) {
        N(e, 3, 20, G[3], 16, 2);
        for (let t = 0; t < 7; t++) {
          let n = 4 + Math.floor(L(t, 8) * 14),
            r = 3 + Math.floor(L(t, 9) * 7);
          (fm(
            e,
            [
              [n - 1.5, 22],
              [n, 21 - r],
              [n + 1.5, 22],
            ],
            t % 2 ? YS[2] : YS[3],
          ),
            N(e, n, 21 - r + 1, G[3]));
        }
        N(e, 5, 21, G[4], 12, 1);
        return;
      }
      (_C(e, 3, 21, 16, n, 5, {
        heat: t <= 2 ? 1 : t === 3 ? 0.5 : t === 4 ? 0.2 : 0,
      }),
        t >= 4 &&
          (yC(e, 3, 21, n, { heat: t === 4 ? 0.5 : 0 }),
          yC(e, 19, 21, n, { heat: t === 4 ? 0.5 : 0 })),
        t === 5 &&
          (vm(e, 5, 23, 2.5, JS[2], 0.4, 3), vm(e, 17, 23, 2, JS[2], 0.6, 4)));
    }),
  fne = () =>
    R(`dk-wall-pieces`, 4, 28, 40, (e, t) => {
      t === 0
        ? (_C(e, 6, 34, 16, pC, 7), yC(e, 6, 34, pC), yC(e, 22, 34, pC))
        : t === 1
          ? (vC(e, 14, 18, 16, pC, 8), yC(e, 14, 18, pC), yC(e, 14, 34, pC))
          : t === 2
            ? (vC(e, 6, 18, 16, pC, 9),
              yC(e, 6, 18, pC),
              _C(e, 6, 34, 16, pC, 9),
              yC(e, 6, 34, pC),
              yC(e, 22, 34, pC))
            : yC(e, 14, 34, pC);
    }),
  pne = () =>
    R(`dk-wall-sink`, 5, 22, 26, (e, t) => {
      let n = [pC, 10, 5, 2, 0][t];
      if (t === 4) {
        N(e, 3, 20, G[1], 16, 2);
        for (let t = 0; t < 16; t += 3) N(e, 3 + t, 20, G[2]);
        vm(e, 11, 20, 5, JS[1], 0.8, 6);
        return;
      }
      if (
        (_C(e, 3, 21, 16, n, 5, { dark: t >= 1, cracks: t === 0 ? 0.5 : 1 }),
        yC(e, 3, 21, n, { dark: !0 }),
        yC(e, 19, 21, n, { dark: !0 }),
        t >= 1 &&
          (vm(e, 6, 22, 2 + t, JS[2], t / 4, 7),
          vm(e, 16, 22, 2 + t, JS[1], t / 4, 8)),
        t === 0)
      )
        for (let t = 0; t < 4; t++)
          N(
            e,
            5 + Math.floor(L(t, 11) * 12),
            15 - Math.floor(L(t, 12) * 6),
            YS[4],
          );
    });
function TC(e, t, n, r, i) {
  let a = 3 * r,
    o = 7 * r;
  (fm(
    e,
    [
      [t - a, n - o],
      [t + a, n - o],
      [t + a * 0.6, n - o * 0.55],
      [t, n],
      [t - a * 0.6, n - o * 0.55],
    ],
    G[1],
  ),
    fm(
      e,
      [
        [t, n - o],
        [t + a, n - o],
        [t + a * 0.6, n - o * 0.55],
        [t, n],
      ],
      i % 2 ? G[2] : G[3],
    ),
    z(e, t, n - o + 1, t, n - 2, G[3]),
    N(e, t, n - o * 0.4, G[4]),
    N(e, t - a, n - o, G[2], a * 2, 1));
}
