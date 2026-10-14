// index-BTsv3a2s 140 — math
// Lines 85592-85804 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function YI(e, t, n, r, i) {
  let a = n.lx * 16,
    o = n.w * 16,
    s = (e, i, a, o, s = 0.85, c = !1, l = !1) =>
      r.push({
        x: t.x0 * 16 + e,
        y: t.y0 * 16 + i,
        r: a,
        color: o,
        a: s,
        flicker: c,
        day: l,
        z: n.name === `window` ? 4 : 34 - i,
      });
  switch (n.name) {
    case `window`: {
      let t = a + 4,
        n = o - 8;
      (N(e, t - 2, 7, `#3b3548`, n + 4, 19),
        N(e, t, 9, `#9fc4e8`, n, 15),
        N(e, t, 9, `#cfe6ff`, n, 4));
      for (let n = 0; n < 4; n++) N(e, t + 2 + n * 2, 10 + n, `#e6f4ff`, 2, 1);
      if (
        (N(e, t + Math.floor(n / 2), 9, `#3b3548`, 1, 15),
        N(e, t, 16, `#3b3548`, n, 1),
        N(e, t - 3, 25, `#b9b3c7`, n + 6, 2),
        N(e, t - 3, 25, `#e6e0ee`, n + 6, 1),
        !i?.hd)
      )
        for (let r = 0; r < 14; r++)
          N(
            e,
            t + 2 + Math.floor(r * 0.6),
            GI + r,
            `rgba(255,244,214,${0.16 - r * 0.01})`,
            n - 2,
            1,
          );
      s(a + o / 2, 38, 40, `#fff1cc`, 0.7, !1, !0);
      break;
    }
    case `rose`: {
      let t = a + o / 2;
      (P(e, t, 15, 12, 12, `#3b3548`),
        P(e, t, 15, 10, 10, DA.crystal),
        P(e, t, 15, 6, 6, `#b58aff`),
        P(e, t, 15, 2.5, 2.5, `#fff3c4`));
      for (let n = 0; n < 8; n++) {
        let r = (n / 8) * Math.PI * 2;
        for (let n = 3; n < 10; n++)
          N(
            e,
            Math.round(t + Math.cos(r) * n - 0.5),
            Math.round(15 + Math.sin(r) * n - 0.5),
            `#3b3548`,
          );
      }
      s(t, 20, 70, DA.crystal, 0.9, !1, !0);
      break;
    }
    case `hang`:
      N(e, a + 2, 8, J.dk, o - 4, 2);
      for (let t = 0, r = Math.floor((o - 6) / 7); t < r; t++) {
        let r = a + 5 + t * 7;
        (N(e, r + 1, 10, `#2b2633`, 1, 2),
          XI(e, n.arg ?? `herbs`, r, 12, t),
          n.arg === `lanterns` && s(a + 6 + t * 7, 17, 18, `#ffd98a`, 0.8, !0));
      }
      break;
    case `sign`:
      RA(e, a + Math.floor((o - 14) / 2), 10, `mug`);
      break;
    case `tools`:
      (N(e, a + 2, 8, `#a0714c`, o - 4, 14),
        N(e, a + 2, 8, `#b88a52`, o - 4, 1));
      for (let t = 0; t < o - 8; t += 9) {
        let n = a + 5 + t,
          r = (t / 9) % 3;
        r === 0
          ? (N(e, n + 2, 11, J.dk, 1, 9), N(e, n, 10, `#6f7580`, 5, 3))
          : r === 1
            ? (N(e, n + 1, 10, `#6f7580`, 1, 10),
              N(e, n + 3, 10, `#6f7580`, 1, 10),
              N(e, n + 1, 13, `#6f7580`, 3, 1))
            : (N(e, n, 11, `#8c8698`, 6, 4), N(e, n + 5, 15, J.dk, 1, 4));
      }
      break;
    case `shield`: {
      let t = a + 3,
        r = n.arg === `marizon`,
        i = r ? DA.field : `#8c8698`;
      (N(e, t, 8, `#2b2633`, 10, 10),
        N(e, t + 1, 9, i, 8, 8),
        N(e, t + 2, 17, i, 6, 2),
        N(e, t + 3, 19, i, 4, 1),
        N(e, t + 1, 9, I(i, 0.25), 8, 1),
        r
          ? (N(e, t + 4, 11, DA.crystal, 2, 5),
            N(e, t + 3, 12, DA.crystal, 4, 3))
          : (N(e, t + 1, 12, `#243b6b`, 8, 2),
            N(e, t + 4, 14, `#ffe08a`, 2, 2)));
      break;
    }
    case `nets`:
      for (let t = 7; t < 24; t += 3)
        for (let n = a + 2; n < a + o - 2; n += 3)
          N(e, n + ((t / 3) % 2), t, `#9a8a6a`);
      N(e, a + 2, 7, `#6b5040`, o - 4, 1);
      for (let t = a + 10; t < a + o - 6; t += 18)
        (P(e, t, 22, 2, 2, `#e0503a`), N(e, t - 1, 21, `#ffb0a0`));
      break;
    case `sconce`: {
      let t = a + 8;
      (N(e, t - 2, 16, `#2b2633`, 5, 2),
        N(e, t - 1, 11, `#2b2633`, 3, 5),
        N(e, t - 1, 9, `#f2e6c8`, 2, 4),
        N(e, t - 1, 7, `#ffd166`, 2, 2),
        N(e, t, 6, `#fff3c4`),
        s(t, 10, 44, `#ffc46a`, 0.9, !0));
      break;
    }
    case `board`:
      (N(e, a + 3, 7, J.dk, o - 6, 17), N(e, a + 4, 8, `#a0714c`, o - 8, 15));
      for (let [t, n, r, i] of [
        [6, 9, 8, 9],
        [15, 10, 7, 7],
        [23, 9, 6, 10],
        [9, 18, 7, 4],
      ])
        if (!(a + t + r > a + o - 4)) {
          N(e, a + t, n, `#f2e6c8`, r, i);
          for (let o = n + 2; o < n + i - 1; o += 2)
            N(e, a + t + 1, o, `#8a7a5c`, r - 2, 1);
          N(e, a + t + Math.floor(r / 2), n, `#c2362f`);
        }
      break;
    case `banner`:
      KA(e, a + 4, 5, HI[n.arg ?? `marizon`] ?? 0, 19, 8);
      break;
    case `doorway`: {
      let t = a + 1;
      (N(e, t, 5, `#8c8698`, 14, 27),
        N(e, t + 2, 8, `#1b1426`, 10, 24),
        P(e, t + 7, 9, 5, 3, `#1b1426`));
      for (let n = 0; n < 10; n++)
        N(e, t + 2, 31 - n, `rgba(255,200,120,${0.22 - n * 0.02})`, 10, 1);
      (N(e, t, 5, `#b9b3c7`, 14, 1),
        N(e, t + 6, 3, DA.crystal, 2, 2),
        s(a + 8, 26, 26, `#ffb85a`, 0.6, !0));
      break;
    }
    case `portrait`: {
      let t = a + 1;
      (N(e, t, 6, `#8a6f2e`, 14, 17),
        N(e, t + 1, 7, `#e0b64a`, 12, 15),
        N(e, t + 2, 8, `#243b6b`, 10, 13),
        N(e, t + 2, 17, `#3f6b4a`, 10, 4),
        N(e, t + 6, 10, DA.crystal, 2, 8),
        N(e, t + 5, 12, DA.crystal, 4, 4),
        N(e, t + 6, 11, DA.hi, 1, 3));
      break;
    }
  }
}
function XI(e, t, n, r, i) {
  switch (t) {
    case `bread`:
      (P(e, n + 2, r + 3, 2.5, 3, `#c98a4a`),
        N(e, n + 1, r + 1, `#e6b070`, 2, 1));
      break;
    case `herbs`: {
      let t = [`#5f8f3a`, `#7aa84a`, `#8e9a4a`, `#6b8f5a`][i % 4];
      N(e, n + 1, r, `#8a6a3a`, 2, 2);
      for (let i = 0; i < 4; i++)
        N(e, n + i, r + 2 + (i % 2), t, 1, 6 - (i % 2));
      break;
    }
    case `rope`:
      (P(e, n + 2, r + 4, 3, 3.5, `#c9a86a`),
        P(e, n + 2, r + 4, 1.5, 2, `#8a6f4a`));
      break;
    case `tapers`:
      (N(e, n, r, `#f2e6c8`, 1, 8),
        N(e, n + 3, r, [`#f2e6c8`, `#e6c47a`, `#c2362f`][i % 3], 1, 8),
        N(e, n, r, `#8a7a5c`, 4, 1));
      break;
    case `lanterns`:
      (N(e, n, r, `#2b2633`, 5, 7),
        N(e, n + 1, r + 1, `#ffd98a`, 3, 5),
        N(e, n + 2, r + 2, `#fff3c4`, 1, 2));
  }
}
function ZI(e, t, n, r) {
  let i = e * 16,
    a = t * 16 + n,
    [o, s] = M(i + 2, a + 2),
    c = [];
  return (
    s.translate(1, 1),
    r(s, i, a, (e, t, n, r, i = 0.85, a = !1) =>
      c.push({ x: e + 1, y: t + 1, r: n, color: r, a: i, flicker: a }),
    ),
    s.setTransform(1, 0, 0, 1, 0, 0),
    F(o, wA),
    { c: o, lights: c }
  );
}
function QI(e, t, n, r, i, a, o, s) {
  (N(e, t, n - a - i, o, r, i),
    N(e, t, n - a - i, I(o, 0.18), r, 1),
    N(e, t, n - a, s, r, a),
    N(e, t, n - a, I(s, -0.25), r, 1));
}
