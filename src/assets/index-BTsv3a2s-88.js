// index-BTsv3a2s 88 — math
// Lines 46489-46834 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function dw(e, t, n, r, i, a) {
  let o = t / (n - 1),
    s = -1.35,
    c = -1.35 + 2.4 * Math.min(1, (t + 1) / 2),
    l = am((t - 1) / (n - 2));
  (pm(e, 10, 22, 20, 31, 1.15, (e, t) => {
    if (t < s || t > c) return null;
    let n = (t - s) / (c - s);
    return e < 0.15 + l * 0.6 ||
      L(Math.round(t * 40), Math.round(e * 10), a) < l * 0.8 * (1 - n)
      ? null
      : e > 0.85
        ? n > 0.7
          ? i[4]
          : i[3]
        : n > 0.8
          ? i[3]
          : n > 0.45
            ? r[3]
            : r[2];
  }),
    t >= 1 &&
      _m(
        e,
        10 + Math.cos(c) * 27,
        22 + Math.sin(c) * 27,
        am(o + 0.2),
        9,
        10,
        i,
        a,
        0.4,
      ));
}
var fw = (e, t) =>
    R(`golem-crush-${e}`, 5, 48, 44, (e, n, r) => dw(e, n, r, aw, t, 3)),
  pw = (e, t) =>
    R(`golem-grit-${e}`, 6, 24, 24, (e, n) => {
      let r = n / 5;
      for (let t = 0; t < 6; t++) {
        let n = -Math.PI / 2 + (L(t, 4) - 0.5) * 2.2,
          i = 6 + L(t, 5) * 6,
          a = 12 + Math.cos(n) * i * r,
          o = 16 + Math.sin(n) * i * r + 14 * r * r,
          s = L(t, 6) > 0.5 ? 2 : 1;
        (N(e, a, o, aw[2], s + 1, s), N(e, a, o, aw[3], 1, 1));
      }
      (_m(e, 12, 16, r, 10, 9, t, 11, 0.6),
        n < 3 && vm(e, 12, 18 - n, 4 + n * 1.5, aw[1], n / 3, 2));
    }),
  mw = (e, t) =>
    R(`golem-stamp-${e}`, 6, 80, 44, (e, n) => {
      let r = n / 5;
      for (let r = 0; r < 7; r++) {
        let i = (r / 7) * Math.PI * 2 + L(r, 1) * 0.5,
          a = 8 + L(r, 2) * 10,
          o = (L(r, 3) - 0.5) * 6,
          s = 40 + Math.cos(i) * a * 0.5 - Math.sin(i) * o * 0.3,
          c = 24 + (Math.sin(i) * a * 0.5) / 1.1,
          l = 40 + Math.cos(i) * a,
          u = 24 + (Math.sin(i) * a) / 1.1,
          d = n < 2 ? t[4] : n < 4 ? t[3] : t[2];
        (z(e, 40, 24, s, c, n < 5 ? d : t[1]),
          z(e, s, c, l, u, n < 5 ? d : t[1]));
      }
      let i = 6 + sm(r) * 32;
      (pm(e, 40, 24, i - 3, i, 1.1, (e, t) =>
        L(Math.round(t * 30), n, 9) < r * 0.6 ? null : e > 0.6 ? aw[3] : aw[2],
      ),
        n < 2 && V(e, 40, 24, 8, 6, t, 4));
    }),
  hw = (e, t) =>
    R(
      `golem-shard-${e}`,
      4,
      18,
      18,
      (e, n) => {
        for (let r = 1; r <= 3; r++)
          N(e, 9 - r * 2 - 2, 9 + ((r + n) % 2), t[2 - Math.min(1, r - 1)]);
        mm(e, 10, 9, (n * Math.PI) / 4, 11, 5, t);
      },
      { outline: `#071018` },
    ),
  gw = (e, t) =>
    R(`golem-shatter-${e}`, 5, 22, 22, (e, n) => {
      let r = n / 4;
      n === 0 && V(e, 11, 11, 6, 6, t, 1);
      for (let i = 0; i < 5; i++) {
        let a = L(i, 3) * Math.PI * 2,
          o = 2 + sm(r) * 8;
        (r > 0.75 && i % 2) ||
          mm(e, 11 + Math.cos(a) * o, 11 + Math.sin(a) * o, a + n, 4, 2, t);
      }
      _m(e, 11, 11, r, 8, 10, t, 5);
    }),
  _w = (e, t, n = !1) =>
    R(`golem-core-${e}`, 6, 26, 26, (e, r) => {
      (sw(e, 13, 13, sm(am(r / 3)), r >= 2 && r < 5 ? (r - 1) / 3 : 0, t, r, n),
        r === 5 && V(e, 13, 13, 8, 12, t, 3));
    }),
  vw = (e, t, n) =>
    R(`golem-route-${e}`, 4, 96, 96, (e, r) => {
      (cw(e, 48, 48, t, 46, 0, r / 3, n, r), P(e, 48, 48, 2, 2, n[3]));
    }),
  yw = (e, t, n, r, i) =>
    R(`golem-beam-${e}`, 4, 32, r, (e, a) => {
      if (
        (gm(e, -8, r / 2, 40, r / 2, n, t, a, {
          facets: void 0,
          jitter: i.jitter,
        }),
        i.facets)
      )
        for (let o = a * 2; o < 40; o += i.facets)
          for (let i = -n * 0.3; i <= n * 0.3; i += 1) N(e, o, r / 2 + i, t[4]);
    }),
  bw = (e, t) =>
    R(`golem-muzzle-${e}`, 4, 18, 18, (e, n) => {
      (P(e, 9, 9, 5 - (n % 2), 5 - (n % 2), t[2]),
        P(e, 9, 9, 3, 3, t[3]),
        V(e, 9, 9, 4, 8, t, n, (n * Math.PI) / 8),
        N(e, 8, 8, t[4], 2, 2));
    }),
  xw = (e, t) =>
    R(`golem-splash-${e}`, 4, 20, 20, (e, n) => uw(e, 10, 10, n, t, 13)),
  Sw = (e, t, n, r = {}) =>
    R(`golem-lattice-${e}`, 8, 116, 116, (e, i) => {
      let a = (Math.PI * 2) / t / 2,
        o = i < 2 ? 0 : (a * (i - 2)) / 5;
      if (i < 2) cw(e, 58, 58, t, 56, 0, (i + 1) / 2, n, i);
      else {
        let a = i === 2 ? 0.45 : i === 6 ? 0.5 : i === 7 ? 0.15 : 1;
        if ((lw(e, 58, 58, t, 58, o, r.width ?? 9, n, i, a, r), i === 7))
          for (let r = 0; r < t; r++)
            _m(
              e,
              58 + Math.cos(o + (r / t) * Math.PI * 2) * 30,
              58 + Math.sin(o + (r / t) * Math.PI * 2) * 30,
              0.6,
              5,
              10,
              n,
              r,
            );
      }
      (P(e, 58, 58, i >= 2 && i < 7 ? 5 : 3, i >= 2 && i < 7 ? 5 : 3, n[3]),
        N(e, 57, 57, n[4], 3, 3));
    }),
  Cw = (e, t) =>
    R(
      `golem-prism-${e}`,
      6,
      16,
      26,
      (e, n) => {
        let r = n < 3 ? 2 + n * 5 : 13 - (n % 2);
        (n >= 3 &&
          (B(e, 8, 22, 6, 2.5, t[2], (e) => Math.round(e * 4) % 2 == 0),
          N(e, 7, 22, t[3], 3, 1)),
          n === 3 && V(e, 8, 14, 6, 6, t, 2),
          fm(
            e,
            [
              [8, r - 6],
              [12, r],
              [8, r + 6],
              [4, r],
            ],
            t[2],
          ),
          fm(
            e,
            [
              [8, r - 6],
              [12, r],
              [8, r],
            ],
            t[3],
          ),
          z(e, 6, r - 1, 10, r - 1, t[4]),
          z(e, 6, r + 2, 10, r + 2, t[3]),
          n < 3 && dm(e, 8, r + 8, 8, 24, t[1], 1, 2));
      },
      { outline: `#071018` },
    ),
  ww = (e, t) =>
    R(`golem-link-${e}`, 4, 32, 9, (e, n) => {
      gm(e, -6, 4.5, 38, 4.5, 3.5, t, n, { jitter: 1.2 });
      for (let r = n * 2; r < 32; r += 8) N(e, r, 4, t[4], 1, 2);
    }),
  Tw = () =>
    R(`warden-fissure`, 6, 112, 64, (e, t) => {
      t < 3 &&
        Cm(e, 56, 32, 51, iw, (t + 1) / 3, (e, t, n, r) => {
          Math.round(t * 30) % 3 == 0
            ? N(e, n, r, iw[3])
            : Math.round(t * 30) % 3 == 1 && N(e, n, r, iw[2]);
        });
      let n = t >= 3 ? 1 : t / 4;
      for (let r = 0; r < 9; r++) {
        let i = (r / 9) * Math.PI * 2 + L(r, 2) * 0.4,
          a = 56,
          o = 32,
          s = 45 * (0.55 + L(r, 3) * 0.45) * n;
        for (let n = 0; n < 5; n++) {
          let c = a + (Math.cos(i + (L(r, n) - 0.5) * 0.9) * s) / 5,
            l = o + (Math.sin(i + (L(r, n) - 0.5) * 0.9) * s) / 5 / 1.1,
            u = t >= 3 ? (n < 2 ? 3 : n < 4 ? 2 : 1) : 1;
          (z(e, a, o, c, l, t >= 3 ? iw[2] : iw[1], u),
            t >= 3 && z(e, a, o, c, l, t % 2 ? iw[3] : iw[4], 1),
            (a = c),
            (o = l));
        }
      }
      if ((t === 3 && V(e, 56, 32, 10, 14, iw, 6), t >= 4))
        for (let n = 0; n < 10; n++)
          N(
            e,
            56 + (L(n, t) - 0.5) * 51 * 1.4,
            32 + (L(t, n) - 0.5) * 51 * 0.8 - t,
            iw[n % 2 ? 3 : 4],
          );
    }),
  Ew = () =>
    R(`warden-motes`, 6, 14, 26, (e, t) => {
      for (let n = 0; n < 4; n++) {
        let r = (t / 6 + n / 4) % 1,
          i = 7 + Math.sin(r * 6 + n) * 3,
          a = 24 - r * 22,
          o = r < 0.7 ? 2 : 1;
        (N(e, i - o / 2, a - o / 2, iw[2], o + 1, o + 1),
          N(e, i, a, r < 0.5 ? iw[4] : iw[3]));
      }
    }),
  Dw = () =>
    R(`warden-scorch`, 4, 32, 12, (e, t) => {
      for (let n = 0; n < 32; n++) {
        let r = 6 + Math.round(Math.sin(n * 0.7) * 1.2 + (L(n, 1) - 0.5)),
          i = 3 - t;
        (N(e, n, r - 1, iw[1], 1, 3),
          i > 0 && N(e, n, r, iw[Math.min(4, i + 1)]),
          i > 1 &&
            L(n, 4) > 0.6 &&
            N(e, n, r - 2 - Math.floor(L(n, t) * 2), iw[3]));
      }
    }),
  Ow = () =>
    R(`warden-seam`, 4, 48, 34, (e, t) => {
      gm(e, -10, 17, 58, 17, 24, iw, t, { jitter: 3 });
      for (let n = (t * 4) % 12; n < 48; n += 12)
        for (let r = -6; r <= 6; r++)
          L(n, r, t) > 0.35 && N(e, n, 17 + r, r % 3 == 0 ? rw[4] : rw[3]);
    }),
  kw = () =>
    R(`warden-runes`, 4, 40, 40, (e, t) => {
      ([
        [12, 10],
        [20, 8],
        [27, 13],
        [10, 20],
        [19, 19],
        [29, 22],
        [14, 28],
        [24, 30],
        [32, 30],
      ].forEach(([n, r], i) => {
        i > t * 3 + 2 ||
          (N(e, n - 1, r, iw[3], 3, 1),
          N(e, n, r - 1, iw[3], 1, 3),
          N(e, n, r, iw[4]));
      }),
        t === 3 && V(e, 20, 18, 12, 18, iw, 5),
        dm(e, 20, 18, 20, 0, t === 3 ? iw[4] : iw[2], 2, 2, t));
    }),
  Aw = () =>
    R(`tutor-knocks`, 4, 48, 44, (e, t) => {
      let n = im[ow[t]],
        r = t % 2 == 0;
      (e.save(),
        r || (e.translate(0, 44), e.scale(1, -1)),
        dw(e, 2, 5, n, n, t + 2),
        e.restore());
    }),
  jw = () =>
    R(`tutor-chalk`, 5, 64, 12, (e, t) => {
      let n = Math.min(64, (t + 1) * 15);
      for (let t = 1; t < n; t++) {
        if (L(t, 3) < 0.18) continue;
        let n =
          6 + Math.round(Math.sin(t * 0.21) * 0.8 + (L(t, 1) - 0.5) * 0.9);
        (N(e, t, n, L(t, 2) > 0.3 ? `#f0f0f0` : `#c8c4d0`),
          L(t, 5) > 0.82 && N(e, t, n + 1, `#8a8696`));
      }
      t === 4 && (z(e, 58, 2, 62, 9, `#ffffff`), z(e, 62, 9, 63, 6, `#ffffff`));
    }),
  Mw = () =>
    R(`tutor-tonebeams`, 4, 32, 12, (e, t) => {
      let n = im[ow[t]];
      gm(e, -6, 6, 38, 6, 7, n, t, { jitter: 1 });
      for (let t = 4; t < 32; t += 8) N(e, t, 5, n[4], 1, 3);
    }),
  Nw = () =>
    R(`tutor-doors`, 8, 108, 108, (e, t) => {
      let n = (t / 8) * (Math.PI / 2);
      if (t === 0)
        for (let t = 0; t < 4; t++)
          dm(
            e,
            54,
            54,
            54 + Math.cos((t * Math.PI) / 2) * 52,
            54 + Math.sin((t * Math.PI) / 2) * 52,
            `#f0f0f0`,
            3,
            3,
          );
      else
        ow.forEach((r, i) => {
          let a = n + (i * Math.PI) / 2,
            o = t === 1 || t === 7 ? 0.4 : 1;
          gm(
            e,
            54,
            54,
            54 + Math.cos(a) * 54,
            54 + Math.sin(a) * 54,
            8,
            im[r],
            t + i,
            { k: o, jitter: 1 },
          );
        });
      (P(e, 54, 54, 4, 4, `#3a3448`),
        P(e, 54, 54, 2.4, 2.4, t % 2 ? `#ffffff` : rw[3]));
    });
function Pw(e, t, n, r, i = 3) {
  Em(e, dh(t).frames[i][0], 10, 26, n, r, 5);
}
function Fw(e, t, n, r, i, a, o) {
  let s = t === `golem` ? xh(`golem`) : Vg(`golem`);
  Em(e, s.frames[0], s.ax, s.ay, n, r, 13);
  let c = n - s.ax + 18.5,
    l = r - s.ay + 20;
  return (sw(e, c, l, i, 0, a, o, t === `warden`), { cx: c, cy: l });
}
