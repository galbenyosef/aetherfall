// assets__index-BTsv3a2s 85 — math
// Lines 45501-45842 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var EC = 40,
  DC = () =>
    R(`dk-hollowing`, 6, 92, 82, (e, t) => {
      let n = EC,
        r = EC / 1.1;
      if (t < 3) {
        Sm(e, 46, 42, n, r, G[1], 0.28);
        let i = (t + 1) / 3;
        (Sm(e, 46, 42, n * i, r * i, G[0], 0.85),
          lC(e, 46, 42, n, r, t === 2 ? G[3] : G[2], {
            w: 5,
            stub: G[2],
            seed: 3,
          }),
          TC(e, 46, 44, 0.5 + t * 0.2, t));
        return;
      }
      P(e, 46, 42, n, r, G[0]);
      for (let i = 5; i <= 78.36363636363636; i++)
        for (let a = 6; a <= 86; a++) {
          let o = Math.hypot((a + 0.5 - 46) / n, (i + 0.5 - 42) / r);
          if (o > 0.97) continue;
          let s = (a - 6) % mC == 0,
            c = (i - 2) % mC == 0;
          s || c
            ? N(e, a, i, o < 0.35 ? G[2] : G[1])
            : L(a, i, 5) < 0.04 && N(e, a, i, `#000000`);
          let l =
            (Math.atan2((i + 0.5 - 42) * 1.1, a + 0.5 - 46) +
              o * 2.2 +
              t * 0.25) *
            (7 / (Math.PI * 2));
          Math.abs(l - Math.round(l)) < 0.06 &&
            o > 0.15 &&
            N(e, a, i, o < 0.5 ? G[3] : G[2]);
        }
      (t === 3 && B(e, 46, 42, 37, 33.36363636363636, G[4]),
        lC(e, 46, 42, n, r, t === 3 ? G[4] : t % 2 ? G[3] : G[2], {
          w: 5,
          stub: G[2],
          seed: 3,
        }),
        TC(e, 46, 44, 1.2, t),
        t === 3 && V(e, 46, 39, 8, 9, G, 4));
    }),
  mne = () =>
    R(`dk-motes`, 6, 44, 16, (e, t) => {
      for (let n = 0; n < 5; n++) {
        let r = (t / 6 + n / 5) % 1,
          i = 2 + cm(r) * 38,
          a = 8 + Math.sin(r * 9 + n * 2) * (1 - r) * 5,
          o = r < 0.3 ? qS[3] : r < 0.45 ? G[4] : r < 0.75 ? G[3] : G[2],
          s = r < 0.45 ? 2 : 1;
        (N(e, i - (s - 1), a - (s - 1), o, s, s), r < 0.3 && N(e, i, a, qS[4]));
        for (let t = 1; t <= Math.round(r * 4); t++)
          N(e, i - t * 1.5, a, r < 0.3 ? qS[2] : G[2]);
      }
      (N(e, 40, 7, G[0], 3, 3), N(e, 41, 8, t % 2 ? G[3] : G[2]));
    }),
  hne = () =>
    R(
      `dk-inverted`,
      4,
      14,
      22,
      (e, t) => {
        (TC(e, 7, 18 + (t === 1 || t === 2 ? -1 : 0), 1.3, t),
          t >= 2 && N(e, 7, 19 + (t - 2) * 1, G[t === 2 ? 4 : 3]));
      },
      { outline: $S },
    );
function OC(e, t, n, r, i = !1) {
  let a = 15 / 1.1;
  if (i) {
    (Sm(e, t, n, 15, a, G[1], 0.2),
      lC(e, t, n, 15, a, G[2], {
        w: 3,
        seed: 6,
        broken: 0.35 + (r % 2) * 0.15,
      }),
      cC(e, t, n, 2, 0, 6, (e) => (L(e, r) < 0.5 ? G[1] : G[2])));
    for (let i = 0; i < 4; i++)
      N(
        e,
        t + (L(i, r, 1) - 0.5) * 15 * 2,
        n + (L(i, r, 2) - 0.5) * a * 2,
        G[3],
      );
    return;
  }
  (Sm(e, t, n, 15, a, G[1], r >= 4 ? 0.4 : 0.25),
    r < 4 && r > 0 && Sm(e, t, n, (15 * r) / 3, (a * r) / 3, G[2], 0.35),
    lC(e, t, n, 15, a, r >= 3 ? G[3] : G[2], {
      w: 3,
      stub: G[2],
      seed: 6,
      prog: Math.min(1, (r + 1) / 3),
      hot: G[4],
    }));
  let o = Math.min(9, 2 + r * 2);
  cC(e, t, n, 2, 0, o, (e) =>
    r === 3 || r === 4
      ? e < 4
        ? G[4]
        : G[3]
      : r >= 5
        ? G[2]
        : e >= o - 2
          ? G[4]
          : G[3],
  );
}
var gne = () =>
  R(`dk-recall-glyph`, 6, 36, 34, (e, t) => {
    (OC(e, 18, 17, t),
      t === 4 && (N(e, 17, 0, G[4], 2, 17), V(e, 18, 17, 8, 8, G, 2)),
      t === 5 && _m(e, 18, 15, 0.5, 10, 12, G, 4, -0.3));
  });
function kC(e, t, n, r, i, a = 14) {
  for (let o = 0; o < r; o += 2) {
    let s = n - o,
      c = o / r,
      l = c < 0.08 ? G[4] : c < 0.35 ? G[3] : c < 0.7 ? G[2] : G[1];
    for (let n = 0; n < a; n++)
      L(Math.floor(n / 2), Math.floor((s + i * 0) / 2), 7) > 0.35 &&
        N(e, t - a / 2 + n, s, l);
  }
}
var AC = () =>
  R(`dk-recall-pattern`, 6, 24, 58, (e, t) => {
    let n = 10 + t * 8;
    (dm(e, 3, 0, 3, Math.min(n + 2, 52), G[1], 2, 2, t),
      dm(e, 20, 0, 20, Math.min(n + 2, 52), G[1], 2, 2, t),
      kC(e, 12, Math.min(n, 52), Math.min(n, 26), t),
      B(e, 12, 53, 9, 3, t === 5 ? G[4] : G[2]),
      t === 5 && V(e, 12, 52, 6, 6, G, 8));
  });
function jC(e, t, n, r, i, a) {
  let o = t.getContext(`2d`).getImageData(0, 0, t.width, t.height).data;
  for (let s = Math.max(0, i - r); s < Math.min(t.height, a - r); s++)
    if (!((s + r) % 2))
      for (let i = 0; i < t.width; i++)
        o[(s * t.width + i) * 4 + 3] > 20 &&
          N(e, n + i, r + s, s + r === a - 2 || s + r === a - 1 ? G[4] : G[3]);
}
var MC = () =>
    R(`dk-recall-rise`, 4, 34, 48, (e, t) => {
      let n = $g(`feverhusk`)[t];
      (OC(e, 17, 42, 5),
        t < 3 && kC(e, 17, 21 + t * 4, 10 + t * 2, t, 10),
        e.drawImage(n, 7, 19));
      let r = [35, 25, 33, 41][t];
      (jC(e, n, 7, 19, r - 6, r),
        t === 3 &&
          (cC(e, 17, 18, 1, 0, 6, (e) => (e < 3 ? G[4] : G[3])),
          N(e, 17, 25, G[4])));
    }),
  NC = () =>
    R(
      `dk-bound`,
      4,
      11,
      11,
      (e, t) => {
        (cC(e, 5, 5, 2, 0, 5, (e) => (e <= t ? G[4] : G[3])),
          N(e, 5, 5, t === 3 ? G[4] : G[3]));
      },
      { outline: $S },
    ),
  PC = () =>
    R(
      `dk-tally`,
      5,
      18,
      13,
      (e, t) => {
        for (let n = 0; n < Math.min(t + 1, 4); n++) {
          let r = 4 + n * 3;
          (N(e, r, 2, n === t ? G[4] : G[3], 1, 8), N(e, r, 2, G[4], 1, 1));
        }
        t === 4 &&
          (z(e, 2, 9, 15, 3, G[4]),
          z(e, 2, 10, 15, 4, G[3]),
          N(e, 8, 6, G[4], 2, 1));
      },
      { outline: $S },
    );
function FC(e, t, n, r, i, a, o = {}) {
  let s = Math.hypot(r - t, i - n);
  if (s < 1) return;
  let c = (r - t) / s,
    l = (i - n) / s,
    u = -l,
    d = c;
  for (let r = 0; r <= s; r += 0.5) N(e, t + c * r + u, n + l * r + d, G[1]);
  for (let r = 0; r <= s; r += 0.5) N(e, t + c * r, n + l * r, G[2]);
  for (let r = 8; r < s - 2; r += 8) {
    let i = t + c * r,
      a = n + l * r;
    z(e, i - u, a - d, i + u, a + d, G[2]);
  }
  if (o.beads !== !1)
    for (let r = (a * 4) % 16; r < s; r += 16) {
      let i = t + c * r,
        a = n + l * r;
      (N(e, i - c, a - l, G[3]), N(e, i, a, G[4]));
    }
}
var IC = () => R(`dk-thread`, 4, 32, 7, (e, t) => FC(e, 0, 3, 32, 3, t)),
  LC = () =>
    R(`dk-hook`, 6, 26, 18, (e, t) => {
      let n = [6, 5, 4, 3, 2, 2][t],
        r = t === 3 ? G[4] : t < 1 ? G[2] : G[3];
      if (t === 0)
        (dm(e, 8 - n, 9 - n, 8 + n, 9 - n, r, 2, 1),
          dm(e, 8 - n, 9 + n, 8 + n, 9 + n, r, 2, 1),
          dm(e, 8 - n, 9 - n, 8 - n, 9 + n, r, 2, 1),
          dm(e, 8 + n, 9 - n, 8 + n, 9 + n, r, 2, 1));
      else {
        (z(e, 8 - n, 9 - n, 8 + n, 9 - n, r),
          z(e, 8 - n, 9 + n, 8 + n, 9 + n, r),
          z(e, 8 - n, 9 - n, 8 - n, 9 + n, r),
          t < 3 && z(e, 8 + n, 9 - n, 8 + n, 9 + n, r));
        for (let [t, r] of [
          [-1, -1],
          [1, -1],
          [-1, 1],
          [1, 1],
        ])
          N(e, 8 + t * n, 9 + r * n, G[4]);
      }
      (t >= 3 && FC(e, 8 + n, 9, 26, 9, t, { beads: t >= 4 }),
        t === 3 && V(e, 8, 9, 6, 5, G, 6));
    }),
  RC = () =>
    R(`dk-crown-drinks`, 6, 58, 38, (e, t) => {
      let n = t / 5,
        r = 0.25 + t * 0.1,
        i = [
          [0, 26],
          [0, 37],
          [57, 30],
          [57, 37],
        ],
        a = [],
        o = [];
      for (let [e, t] of i) {
        let n = -1,
          i = 1 / 0;
        for (let o = 0; o < 7; o++) {
          if (a.includes(o)) continue;
          let s = iC(o, r),
            c = Math.hypot(29 + s.x - e, 20 + s.y - t);
          c < i && ((i = c), (n = o));
        }
        a.push(n);
        let s = iC(n, r);
        o.push([e, t, 29 + s.x, 20 + s.y + 2]);
      }
      let s = (e) => (a.includes(e) ? n : 0);
      (aC(e, 29, 20, r, `back`, { hot: s }),
        e.drawImage($h(), 17, 0, 33, 26, 13, 8, 33, 26));
      for (let [n, r, i, a] of o) FC(e, n, r, i, a, t);
      if ((aC(e, 29, 20, r, `front`, { hot: s }), t === 5))
        for (let t of a) {
          let n = iC(t, r);
          V(e, 29 + n.x, 20 + n.y, 4, 3, G, t);
        }
    }),
  zC = () =>
    R(`dk-snap`, 5, 34, 14, (e, t) => {
      if (t === 0) {
        FC(e, 0, 6, 34, 6, 2);
        for (let t = 12; t < 22; t++) N(e, t, 6 + (t % 2 ? -1 : 1), G[3]);
        return;
      }
      let n = [0, 2, 6, 10, 14][t],
        r = t * 1.2;
      for (let i = 0; i < 17 - n; i++) {
        let a = i / (17 - n);
        (t >= 3 && L(i, t, 2) < (t - 2) * 0.3) ||
          N(e, i, 6 + Math.round(a * a * r), a > 0.8 ? G[3] : G[2]);
      }
      for (let i = 17 + n; i < 34; i++) {
        let a = (34 - i) / (17 - n);
        (t >= 3 && L(i, t, 3) < (t - 2) * 0.3) ||
          N(e, i, 6 - Math.round(a * a * r * 0.6), a > 0.8 ? G[3] : G[2]);
      }
      (t === 1 && (P(e, 17, 6, 2, 2, G[4]), V(e, 17, 6, 6, 5, G, 9)),
        _m(e, 17, 6, t / 4, 8, 9, G, 5, 0.5));
    }),
  BC = () =>
    R(`dk-door`, 8, 56, 76, (e, t) => {
      (t === 0
        ? wC(e, 28, 38, 46, 0, t)
        : t === 1
          ? wC(e, 28, 38, 48, 1, t)
          : t === 2
            ? CC(e, 28, 38, 4, 40, t, { lens: 5 })
            : t === 3
              ? CC(e, 28, 38, 12, 42, t, { lens: 2 })
              : t === 4 || t === 5
                ? CC(e, 28, 38, 18, 44, t)
                : t === 6
                  ? CC(e, 28, 38, 6, 44, t, { flash: !0 })
                  : (N(e, 28, 16, G[4], 1, 44),
                    V(e, 28, 38, 10, 14, G, 3),
                    _m(e, 28, 38, 0.6, 14, 18, G, 6, 0.4)),
        (t === 4 || t === 5) &&
          (SC(e, 40 + (t - 4) * 3, 24 + (t - 4) * 2, 4, XS[4], qS[2]),
          t === 5 && SC(e, 7, 42, 7, G[3])));
    }),
  VC = () =>
    R(`dk-glyphs`, 6, 12, 15, (e, t) => {
      SC(e, 2, 2, [1, 4, 5, 7, 10, 14][t], XS[4], qS[2]);
    }),
  HC = () =>
    R(`dk-glyph-lands`, 5, 38, 44, (e, t) => {
      let n = 15 / 1.1;
      if (t < 2) {
        (Sm(e, 19, 32, 15, n, G[1], 0.25),
          Sm(e, 19, 32, (15 * (t + 1)) / 2, (n * (t + 1)) / 2, G[2], 0.3),
          lC(e, 19, 32, 15, n, G[2], { w: 3, stub: G[2], seed: 12 }),
          SC(e, 16, 2 + t * 9, 5, XS[4], qS[2]),
          dm(e, 19, 14 + t * 9, 19, 32, G[2], 1, 2));
        return;
      }
      let r = t === 2 ? XS[4] : t === 3 ? G[3] : G[2];
      for (let [t, n, i, a] of xC(5))
        z(e, 13 + t * 6, 26 + n * 3.3, 13 + i * 6, 26 + a * 3.3, r);
      (lC(e, 19, 32, 15, n, t === 2 ? G[4] : t === 3 ? G[3] : G[1], {
        w: 3,
        seed: 12,
      }),
        t === 2 && V(e, 19, 32, 10, 12, G, 5),
        t >= 3 && _m(e, 19, 30, (t - 2) / 3, 10, 12, G, 8, -0.4));
    }),
  UC = 56,
  WC = () =>
    R(`dk-pull`, 4, 116, 104, (e, t) => {
      GC(e, 58, 52, UC, t);
    });
