// assets__index-BTsv3a2s 142 — crystal
// Lines 86140-86478 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function oL(e) {
  return ZI(1, 1, 14, (t, n, r) => {
    let i = e === `idris`;
    (N(t, 3, r - 7, J.dk, 1, 6),
      N(t, 12, r - 7, J.dk, 1, 6),
      QI(t, 2, r - 5, 12, 4, 3, `#8a5a34`, `#5a3a22`),
      N(t, 3, r - 22 - (i ? 4 : 0), `#6b4424`, 10, 14 + (i ? 4 : 0)),
      N(
        t,
        4,
        r - 21 - (i ? 4 : 0),
        i ? `#5a3a5e` : `#7a4f2e`,
        8,
        11 + (i ? 4 : 0),
      ),
      N(t, 3, r - 22 - (i ? 4 : 0), `#9a6a3a`, 10, 1));
  });
}
function sL(e) {
  let t = e === `idris`,
    n = t ? null : EA[e];
  return ZI(1, 1, t ? 20 : 14, (e, r, i, a) => {
    let o = t ? 26 : 19,
      s = i - 6 - o;
    (N(e, 2, s, t ? `#d8d2e0` : `#6b4424`, 12, o),
      N(e, 3, s + 2, t ? DA.field : n.robe, 10, o - 6),
      N(e, 3, s + 2, t ? DA.crystal : n.trim, 10, 1),
      t && (N(e, 7, s - 3, DA.crystal, 2, 3), N(e, 7, s - 4, DA.hi, 2, 1)),
      QI(
        e,
        1,
        i - 1,
        14,
        5,
        5,
        t ? `#c6c0d2` : `#8a5a34`,
        t ? `#9d97ad` : `#5a3a22`,
      ),
      N(e, 3, i - 10, t ? DA.field : n.dark, 10, 3),
      t &&
        (N(e, 7, i - 16, `#f2e6c8`, 2, 6),
        N(e, 7, i - 11, `#f2e6c8`, 3, 1),
        N(e, 9, i - 10, `#f2e6c8`, 1, 5),
        N(e, 7, i - 18, `#ffd166`, 2, 2),
        N(e, 7, i - 19, `#fff3c4`, 1, 1),
        a(8, i - 17, 30, `#ffc46a`, 0.9, !0)));
  });
}
function cL(e, t) {
  return ZI(e, t, 2, (e, n, r) => {
    let i = t * 16 - 6;
    (QI(e, 0, r, n, i, 8, `#7a4f2e`, `#4a2e1c`),
      N(e, 6, r - 8 - i + 3, `#243b6b`, n - 12, i - 6),
      N(e, 6, r - 8 - i + 3, DA.crystal, n - 12, 1),
      N(e, 6, r - 8 - 4, DA.crystal, n - 12, 1),
      N(e, n / 2 - 14, r - 8 - i + 6, `#e6d8bc`, 28, 14),
      N(e, n / 2 - 13, r - 8 - i + 7, `#c9b48a`, 26, 12));
    for (let [t, a, o] of [
      [-6, 3, `#3f8f3b`],
      [4, 5, `#9c3b2e`],
      [-2, 8, `#2f6fcf`],
      [8, 2, `#5b3fb8`],
      [0, 6, DA.crystal],
    ])
      N(e, n / 2 + t, r - 8 - i + 7 + a, o, 2, 2);
    for (let t of [20, n - 34])
      (N(e, t, r - 8 - i + 8, `#f2e6c8`, 8, 6),
        N(e, t + 1, r - 8 - i + 10, `#8a7a5c`, 6, 1));
  });
}
function lL() {
  return ZI(2, 2, 10, (e, t, n, r) => {
    let i = n - 42;
    (N(e, 2, i + 8, `#9c3b2e`, t - 4, n - i - 8),
      P(e, t / 2, i + 10, t / 2 - 2, 8, `#9c3b2e`));
    for (let r = i + 10; r < n; r += 4)
      for (let n = 3 + ((r / 4) % 2) * 3; n < t - 4; n += 6)
        N(e, n, r, `#7a2a20`, 5, 1);
    (P(e, t / 2, n - 12, 7, 6, `#2b1d16`),
      N(e, t / 2 - 7, n - 12, `#2b1d16`, 14, 8),
      N(e, t / 2 - 5, n - 10, `#ff7a1a`, 10, 4),
      N(e, t / 2 - 3, n - 9, `#ffe08a`, 6, 2),
      N(e, t / 2 - 3, i - 4, CA.dk, 6, 10),
      N(e, 0, n - 3, `#6b2a20`, t, 3),
      r(t / 2, n - 9, 50, `#ff8a2a`, 0.9, !0));
  });
}
function uL(e) {
  return ZI(e, 1, 26, (e, t, n, r) => {
    let i = n - 40;
    N(e, 0, i, CA.mid, t, n - i);
    for (let r = i + 2; r < n; r += 5)
      for (let n = ((r / 5) % 2) * 5; n < t; n += 10) N(e, n, r, CA.st, 9, 4);
    (N(e, -1, i + 8, J.mid, t + 2, 3), N(e, -1, i + 8, J.lt, t + 2, 1));
    let a = Math.floor(t / 2) - 10;
    (N(e, a, i + 14, `#1b1426`, 20, n - i - 16),
      P(e, a + 10, i + 15, 10, 3, `#1b1426`),
      N(e, a + 3, n - 5, J.dk, 14, 2),
      P(e, a + 10, n - 9, 6, 5, `#ff7a1a`),
      P(e, a + 10, n - 8, 3.5, 3, `#ffd166`),
      N(e, a + 9, n - 15, `#ffe08a`, 2, 3),
      N(e, 6, i + 4, `#b9b3c7`, 3, 4),
      N(e, t - 10, i + 3, `#f2e6c8`, 2, 5),
      N(e, t - 10, i + 2, `#ffd166`, 2, 1),
      r(a + 10, n - 8, 70, `#ff8a2a`, 1, !0));
  });
}
function dL() {
  return ZI(2, 2, 12, (e, t, n, r) => {
    let i = n - 44;
    (N(e, t / 2 - 5, i, CA.dk, 10, 20),
      N(e, t / 2 - 8, i + 16, CA.mid, 16, 6),
      QI(e, 1, n, t - 2, 14, 12, CA.hi, CA.mid),
      N(e, 5, n - 25, `#2b1d16`, t - 10, 10),
      N(e, 7, n - 24, `#ff7a1a`, t - 14, 7));
    for (let t = 0; t < 6; t++)
      N(e, 8 + t * 4, n - 23 + (t % 2), `#ffe08a`, 2, 2);
    (N(e, t - 7, n - 20, `#6b4424`, 4, 6),
      r(t / 2, n - 22, 70, `#ff7a1a`, 1, !0));
  });
}
function fL() {
  return ZI(1, 1, 0, (e, t, n) => {
    (N(e, 5, n - 5, J.dk, 6, 5),
      N(e, 1, n - 11, `#4a4458`, 14, 3),
      N(e, 1, n - 11, `#8c8698`, 14, 1),
      N(e, 5, n - 8, `#3b3548`, 6, 3),
      N(e, 0, n - 10, `#4a4458`, 2, 1));
  });
}
function pL(e) {
  return ZI(1, 1, 4, (t, n, r) => {
    (N(t, 2, r - 17, J.st, 12, 16),
      N(t, 2, r - 17, J.lt, 3, 16),
      N(t, 11, r - 17, J.dk, 3, 16),
      N(t, 2, r - 14, `#4a4458`, 12, 1),
      N(t, 2, r - 5, `#4a4458`, 12, 1));
    let i =
      e === `water`
        ? `#5a8fc2`
        : e === `milk`
          ? `#f4f0e6`
          : e === `fish`
            ? `#6f93a8`
            : J.pale;
    (P(t, 8, r - 17, 6, 2.5, i),
      e === `water` && N(t, 5, r - 18, `#9fc4e8`, 4, 1),
      e === `fish` &&
        (N(t, 4, r - 20, `#8fb3c8`, 2, 4),
        N(t, 9, r - 21, `#8fb3c8`, 2, 5),
        N(t, 9, r - 21, `#dff6ff`)));
  });
}
function mL(e) {
  return ZI(e, 1, 14, (e, t, n) => {
    N(e, 0, n - 4, J.dk, t, 4);
    for (let r = 0; r < 2; r++)
      for (let i = r ? 8 : 2; i < t - 14; i += 15) {
        let t = n - 16 - r * 12;
        (N(e, i, t, J.st, 14, 11),
          N(e, i, t, J.lt, 14, 2),
          N(e, i + 4, t, `#4a4458`, 1, 11),
          N(e, i + 9, t, `#4a4458`, 1, 11),
          P(e, i + 1, t + 5, 2, 5, J.pale),
          N(e, i - 1, t + 5, `#c9a64a`, 2, 2));
      }
  });
}
function hL(e) {
  return ZI(1, 1, 2, (t, n, r) => {
    let i = e === `hides` ? `#8a5a34` : `#cdbfa6`;
    (P(t, 5, r - 6, 4.5, 5, i),
      P(t, 11, r - 5, 4.5, 4.5, i),
      P(t, 4, r - 8, 2, 2, I(i, 0.2)),
      N(t, 4, r - 11, I(i, -0.3), 2, 1),
      e === `coal` &&
        (P(t, 8, r - 10, 4, 2.5, `#2b2633`), N(t, 7, r - 11, `#4a4458`)));
  });
}
function gL() {
  return ZI(1, 1, 8, (e, t, n) => {
    let r = (t, n, r) => {
      (N(e, t, n, `#9c6c40`, r, r),
        N(e, t, n, `#b88a52`, r, 2),
        N(e, t, n + 2, J.dk, r, 1));
      for (let i = 0; i < r - 3; i++) N(e, t + 1 + i, n + 3 + i, J.dk);
      N(e, t + r - 1, n, J.dk, 1, r);
    };
    (r(1, n - 12, 12), r(4, n - 22, 9));
  });
}
function _L() {
  return ZI(1, 1, 16, (e, t, n) => {
    (N(e, 7, n - 12, J.dk, 2, 11),
      N(e, 4, n - 2, J.dk, 8, 2),
      N(e, 3, n - 24, `#8c8698`, 10, 11),
      N(e, 3, n - 24, `#c9ced8`, 10, 2),
      N(e, 7, n - 22, `#6f7580`, 2, 8),
      N(e, 1, n - 24, `#6f7580`, 3, 4),
      N(e, 12, n - 24, `#6f7580`, 3, 4),
      N(e, 5, n - 31, `#8c8698`, 6, 7),
      N(e, 5, n - 31, `#c9ced8`, 6, 1),
      N(e, 6, n - 28, `#2b2633`, 4, 1),
      N(e, 7, n - 33, `#b3261e`, 2, 2));
  });
}
function vL() {
  return ZI(1, 1, 4, (e, t, n, r) => {
    (N(e, 5, n - 3, `#ff7a1a`, 6, 2),
      P(e, 8, n - 8, 7, 5.5, `#2b2633`),
      P(e, 8, n - 12, 6, 2, `#5ccf4f`),
      P(e, 6, n - 12, 2, 1, `#bff0a8`),
      N(e, 1, n - 12, `#4a4458`, 14, 1),
      r(8, n - 13, 34, `#5ccf4f`, 0.8, !0));
  });
}
function yL(e, t) {
  return ZI(e, 1, 6, (e, n, r, i) => {
    (QI(e, 0, r, n, 8, 8, J.lt, J.st),
      N(e, 1, r - 20, `rgba(191,240,255,0.45)`, n - 2, 5),
      N(e, 1, r - 20, `#dff6ff`, n - 2, 1));
    let a = 4,
      o = 0;
    for (; a < n - 6;) a += $I(e, t, a, r - 16, o++) + 2;
    t === `gems` && i(n / 2, r - 18, 26, `#44c9f0`, 0.5);
  });
}
function bL(e) {
  let t = EA[VI[e % 4]];
  return ZI(1, 1, 12, (e, n, r, i) => {
    (N(e, 5, r - 4, CA.mid, 6, 4),
      N(e, 6, r - 14, CA.st, 4, 10),
      N(e, 4, r - 16, CA.hi, 8, 2),
      P(e, 8, r - 21, 4, 4, t.glow),
      P(e, 7, r - 22, 1.5, 1.5, t.orb),
      i(8, r - 21, 28, t.glow, 0.9, !0));
  });
}
function xL() {
  return ZI(1, 1, 16, (e, t, n, r) => {
    (N(e, 5, n - 2, `#4a4458`, 6, 2),
      N(e, 7, n - 24, `#4a4458`, 2, 22),
      N(e, 2, n - 24, `#4a4458`, 12, 2));
    for (let t of [2, 7, 12])
      (N(e, t, n - 30, `#f2e6c8`, 2, 6),
        N(e, t, n - 32, `#ffd166`, 2, 2),
        N(e, t, n - 33, `#fff3c4`));
    r(8, n - 30, 40, `#ffc46a`, 0.9, !0);
  });
}
function SL(e) {
  if (e === `straw`)
    return ZI(1, 1, 16, (e, t, n) => {
      (N(e, 7, n - 22, J.st, 2, 20),
        N(e, 2, n - 18, J.st, 12, 2),
        P(e, 8, n - 14, 4.5, 6, `#d9b44a`),
        P(e, 8, n - 25, 3.5, 3.5, `#e6c872`),
        N(e, 4, n - 15, `#8e3a2a`, 9, 2));
    });
  let t = EA[e];
  return ZI(1, 1, 16, (e, n, r) => {
    (N(e, 7, r - 8, J.dk, 2, 7),
      N(e, 4, r - 2, J.dk, 8, 2),
      N(e, 4, r - 26, t.robe, 8, 18),
      N(e, 3, r - 14, t.robe, 10, 6),
      N(e, 10, r - 26, t.dark, 2, 18),
      N(e, 4, r - 26, t.trim, 8, 1),
      N(e, 4, r - 16, t.trim, 8, 1),
      P(e, 8, r - 29, 2.5, 2.5, `#c9b48a`));
  });
}
function CL(e) {
  return ZI(1, 1, 10, (t, n, r) => {
    (N(t, 4, r - 7, `#9c3b2e`, 8, 7), N(t, 4, r - 7, `#c2574a`, 8, 1));
    let i = [`#3f8f3b`, `#4f6b3a`, `#5f8f3a`][e % 3];
    if (
      (P(t, 8, r - 14, 6, 6, i),
      P(t, 6, r - 17, 3, 3, I(i, 0.25)),
      P(t, 11, r - 12, 2.5, 2.5, I(i, -0.2)),
      e % 2)
    )
      for (let [e, n] of [
        [5, -15],
        [10, -18],
        [9, -11],
      ])
        N(t, e, r + n, `#ffd166`);
  });
}
function wL() {
  return ZI(1, 1, 10, (e, t, n) => {
    (N(e, 4, n - 16, J.lt, 8, 15),
      N(e, 4, n - 16, J.pale, 8, 2),
      N(e, 10, n - 16, J.st, 2, 15),
      N(e, 4, n - 12, `#4a4458`, 8, 1),
      N(e, 4, n - 5, `#4a4458`, 8, 1),
      N(e, 7, n - 26, J.dk, 2, 10),
      N(e, 5, n - 26, J.dk, 6, 1));
  });
}
function TL() {
  return ZI(1, 1, 4, (e, t, n, r) => {
    (N(e, 5, n - 3, `#ff7a1a`, 6, 2),
      N(e, 2, n - 14, `#6f7580`, 12, 11),
      P(e, 8, n - 14, 6, 2.5, `#f2e6c8`),
      N(e, 2, n - 14, `#8c8698`, 12, 1));
    for (let t of [5, 8, 11]) N(e, t, n - 22, `#f2e6c8`, 1, 8);
    (N(e, 3, n - 22, `#2b2633`, 10, 1), r(8, n - 6, 20, `#ff8a2a`, 0.6, !0));
  });
}
function EL(e, t) {
  return ZI(e, t, 14, (e, n, r) => {
    let i = t * 16 + 14,
      a = Math.floor(i / 7);
    for (let t = 0; t < 7; t++) {
      let i = r - (t + 1) * a;
      (N(e, 2, i, `#9a6a3a`, n - 4, a),
        N(e, 2, i, `#b88a52`, n - 4, 1),
        N(e, 2, i + a - 1, J.dk, n - 4, 1));
    }
    (N(e, 0, r - i, J.dk, 2, i),
      N(e, n - 2, r - i, J.dk, 2, i),
      N(e, n - 2, r - i - 6, J.lt, 2, 8));
  });
}
function DL() {
  return ZI(1, 1, 38, (e, t, n, r) => {
    (N(e, 1, n - 6, `#b9b3c7`, 14, 6),
      N(e, 1, n - 6, `#e6e0ee`, 14, 1),
      N(e, 3, n - 48, `#d8d2e0`, 10, 42),
      N(e, 3, n - 48, `#f0ecf6`, 3, 42),
      N(e, 10, n - 48, `#aca6bc`, 3, 42));
    for (let t = 5; t < 12; t += 3) N(e, t, n - 46, `#c6c0d2`, 1, 38);
    (N(e, 1, n - 52, `#b9b3c7`, 14, 5),
      N(e, 1, n - 52, `#e6e0ee`, 14, 1),
      N(e, 5, n - 50, DA.crystal, 6, 1),
      r(8, n - 50, 14, DA.crystal, 0.5));
  });
}
