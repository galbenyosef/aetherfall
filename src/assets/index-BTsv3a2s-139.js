// index-BTsv3a2s 139 — floor
// Lines 85246-85591 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function FI(e, t) {
  let n = UF(`in/big-round-table-chairs-1`);
  if (!n) return null;
  let r = t.arg ?? `idris`,
    i = PI.get(r);
  if (!i) {
    let e =
      r === `idris`
        ? DA.crystal
        : r === `void`
          ? `#6a2fa0`
          : (EA[r]?.robe ?? DA.field);
    ((i = ag([n.c], e, (e, t, n) => {
      let [r, i] = ig(e, t, n);
      return i > 0.35 && (r < 20 || r > 330);
    })[0]),
      PI.set(r, i));
  }
  return TI(e, t, `in/big-round-table-chairs-1`, { c: i });
}
var II = {
  pyro: `in/bed-7`,
  cryo: `in/bed-8`,
  storm: `in/bed-4`,
  void: `in/bed-2`,
};
function LI(e, t, n) {
  let r = (n + 1) * 0.6180339 + e.seed * 0.001,
    i = (t) => SA(n * 13 + t, e.seed % 997, 23),
    a = t.w * LF;
  switch (t.name) {
    case `counter`:
      return AI(e, t, r);
    case `shelf`:
      return jI(e, t, r);
    case `bookshelf`:
      return EI(
        e,
        t,
        [
          `in/cabinet-24`,
          `in/cabinet-21`,
          `in/cabinet-16`,
          `in/cabinet-27`,
          `in/cabinet-25`,
        ].slice(Math.floor(i(1) * 3)),
      );
    case `rack`:
      return MI(e, t, r);
    case `table`:
      return NI(e, t, r, t.arg);
    case `bench`:
      return NI(e, t, r, t.arg ?? `tools`);
    case `longtable`: {
      let n = UF(`in/big-rect-table-3`),
        r = DI(a, `in/big-rect-table-3`);
      return n && r ? CI(e, t, [{ e: n, x: a / 2, c: r }]) : null;
    }
    case `stool`:
      return TI(e, t, `in/table-bench-1`);
    case `chair`:
      return TI(
        e,
        t,
        t.arg === `idris` ? `in/table-chairs-0` : `in/table-chairs-1`,
      );
    case `seat`:
      return FI(e, t);
    case `oven`:
      return TI(e, t, `in/stove2`, {
        lit: [{ x: a / 2, b: 18, r: 40, color: `#ff9a3a`, flicker: !0 }],
      });
    case `wardrobe`:
      return TI(e, t, `in/cabinet-11`);
    case `fireplace`:
      return TI(e, t, `in/fireplace-0`, {
        lit: [
          { x: a / 2, b: 14, r: 64, color: `#ff9a3a`, a: 0.95, flicker: !0 },
        ],
      });
    case `forge`:
      return TI(e, t, `in/fire-place2-75`, {
        lit: [
          { x: a / 2, b: 24, r: 58, color: `#ff7a2a`, a: 0.95, flicker: !0 },
        ],
      });
    case `barrel`:
      return TI(
        e,
        t,
        t.arg === `water` || t.arg === `milk` || t.arg === `fish`
          ? `in/barrels-2`
          : wI([`in/barrels-0`, `in/barrels-1`], i(2)),
      );
    case `kegs`:
      return TI(
        e,
        t,
        t.w >= 3 ? `in/storage-countertop2-2` : `in/storage-countertop2-3`,
      );
    case `sacks`:
      return TI(
        e,
        t,
        wI([`in/supply-bags-2`, `in/supply-bags-3`, `in/supply-bags-4`], i(3)),
      );
    case `crates`:
      return TI(e, t, wI([`in/crates-1`, `in/crates-2`, `in/crates-3`], i(4)));
    case `armor`:
      return TI(e, t, `in/decors-armor-8`);
    case `case`:
      return MI(e, { ...t, arg: t.arg ?? `goods` }, r);
    case `candles`:
      return TI(e, t, `in/candlesticks-10`, {
        lit: [{ x: a / 2, b: 48, r: 36, color: `#ffc46a`, flicker: !0 }],
      });
    case `plant`:
      return TI(e, t, `in/plants-${Math.floor(i(5) * 20)}`);
    case `globe`:
      return TI(e, t, `in/decors-globe`);
    case `bed`:
      return TI(e, t, II[t.arg ?? `pyro`] ?? `in/bed-5`);
    case `trunk`:
      return TI(e, t, wI([`in/chests-0`, `in/chests-1`, `in/chests-2`], i(6)));
    case `desk`: {
      let n = UF(`in/office-desk-5`);
      return n
        ? CI(e, t, [
            { e: n, x: a / 2 },
            ...OI(kI.letters, a / 2 - 24, a / 2 + 24, n.ay * IF - 8, r),
          ])
        : null;
    }
    case `lectern`:
      return TI(e, t, `in/office-desk-3`);
    case `dummy`:
      return t.arg === `straw` ? TI(e, t, `gl/dummy-plain`) : null;
  }
  return null;
}
var RI = `#07040f`,
  zI = `#2b2633`,
  BI = `#4a4458`,
  VI = [`pyro`, `cryo`, `storm`, `void`],
  HI = { marizon: 0, pyro: 1, cryo: 2, storm: 3, void: 4 },
  UI = {
    planks: {
      base: [`#8a5a34`, `#94623a`, `#7f5230`, `#8f5d36`],
      seam: `#553620`,
      hi: `#a8744a`,
    },
    darkplanks: {
      base: [`#5e3a24`, `#664028`, `#573520`, `#633d26`],
      seam: `#3a2416`,
      hi: `#7a4f32`,
    },
  };
function WI(e, t) {
  let n = t.w * 16,
    r = t.h * 16;
  if (t.floor === `planks` || t.floor === `darkplanks`) {
    let i = UI[t.floor];
    for (let a = 0; a < r; a += 4) {
      let r = a / 4,
        o = Math.floor(SA(r, 1, t.seed) * 24);
      for (let s = -o; s < n; s += 24) {
        let n = i.base[Math.floor(SA(s + o, r, t.seed) * 4)];
        (N(e, s, a, n, 24, 4),
          N(e, s, a, i.hi, 24, 1),
          N(e, s, a + 3, i.seam, 24, 1),
          N(e, s, a, i.seam, 1, 4),
          SA(s, r, 7) < 0.25 &&
            N(e, s + 6 + Math.floor(SA(s, r, 8) * 10), a + 1, i.seam, 2, 1));
      }
    }
  } else if (t.floor === `flag`) {
    N(e, 0, 0, `#6a635a`, n, r);
    for (let i = 0; i < r; i += 8) {
      let r = (i / 8) % 2 ? 6 : 0;
      for (let a = -r; a < n; a += 12) {
        let n = SA(a, i, t.seed),
          r = n < 0.33 ? `#8f877c` : n < 0.66 ? `#998f84` : `#877f74`;
        (N(e, a + 1, i + 1, r, 11, 7), N(e, a + 1, i + 1, I(r, 0.15), 11, 1));
      }
    }
  } else {
    for (let i = 0; i < r; i += 16)
      for (let r = 0; r < n; r += 16) {
        let n = (r / 16 + i / 16) % 2 == 1;
        (N(e, r, i, n ? `#b9b3c7` : `#d8d2e0`, 16, 16),
          N(e, r, i, n ? `#c6c0d2` : `#e6e0ee`, 16, 1));
        let a = Math.floor(SA(r, i, t.seed) * 12);
        for (let t = 0; t < 5; t++)
          N(e, r + a + t, i + 3 + t * 2 + (t % 2), n ? `#a49eb4` : `#c6c0d2`);
      }
    for (let t = 0; t < n; t += 16) N(e, t, 0, `#9d97ad`, 1, r);
    for (let t = 0; t < r; t += 16) N(e, 0, t, `#9d97ad`, n, 1);
  }
}
var GI = 32;
function KI(e, t) {
  let n = t.w * 16;
  switch (t.wall) {
    case `plaster`:
      N(e, 0, 0, `#e6d8bc`, n, GI);
      for (let r = 0; r < 40; r++)
        N(
          e,
          Math.floor(SA(r, 1, t.seed) * n),
          6 + Math.floor(SA(r, 2, t.seed) * 14),
          `#d6c6a6`,
          2,
          1,
        );
      (N(e, 0, 4, J.mid, n, 3), N(e, 0, 4, J.lt, n, 1));
      for (let t = 8; t < n; t += 48) N(e, t, 7, J.mid, 3, 15);
      (N(e, 0, 22, J.st, n, 9), N(e, 0, 22, J.pale, n, 1));
      for (let t = 4; t < n; t += 12) N(e, t, 24, J.dk, 1, 6);
      N(e, 0, 31, J.dk, n, 1);
      break;
    case `timber`:
      for (let r = 0; r < n; r += 6) {
        let n = [`#7a4f2e`, `#83562f`, `#71482a`][
          Math.floor(SA(r, 3, t.seed) * 3)
        ];
        (N(e, r, 0, n, 6, GI), N(e, r, 0, `#5a3a22`, 1, GI));
      }
      (N(e, 0, 4, J.dk, n, 3),
        N(e, 0, 15, J.dk, n, 2),
        N(e, 0, 15, J.pale, n, 1),
        N(e, 0, 30, J.dk, n, 2));
      break;
    case `stone`:
      N(e, 0, 0, CA.dk, n, GI);
      for (let r = 4; r < GI; r += 6) {
        let i = (r / 6) % 2 ? 7 : 0;
        for (let a = -i; a < n; a += 14) {
          let n = [CA.mid, CA.st, `#86809a`][Math.floor(SA(a, r, t.seed) * 3)];
          (N(e, a + 1, r + 1, n, 13, 5), N(e, a + 1, r + 1, CA.lt, 13, 1));
        }
      }
      N(e, 0, 30, CA.deep, n, 2);
      break;
    case `castle`:
      N(e, 0, 0, `#aca6bc`, n, GI);
      for (let r = 4; r < 24; r += 5) {
        let i = (r / 5) % 2 ? 8 : 0;
        for (let a = -i; a < n; a += 16) {
          let n = [`#d8d2e0`, `#cfc9da`, `#c6c0d2`][
            Math.floor(SA(a, r, t.seed) * 3)
          ];
          (N(e, a + 1, r + 1, n, 15, 4), N(e, a + 1, r + 1, `#e6e0ee`, 15, 1));
        }
      }
      (N(e, 0, 24, DA.field, n, 7), N(e, 0, 24, DA.crystal, n, 1));
      for (let t = 6; t < n; t += 16)
        (N(e, t, 26, DA.dark, 4, 3), N(e, t + 1, 27, DA.crystal, 2, 1));
      N(e, 0, 31, DA.dark, n, 1);
  }
  (N(e, 0, 0, zI, n, 4), N(e, 0, 3, BI, n, 1));
}
function qI(e, t) {
  let n = t.w * 16,
    r = t.h * 16;
  for (let t = 0; t < 6; t++)
    N(e, 16, GI + t, `rgba(12,6,24,${0.32 - t * 0.05})`, n - 32, 1);
  for (let t of [0, 1]) {
    N(e, t ? n - 16 : 0, 0, RI, 16, r);
    let i = t ? n - 16 : 12;
    (N(e, i, 0, zI, 4, r - 16 + 5), N(e, t ? i : i + 3, 4, BI, 1, r - 16 + 1));
    for (let i = 0; i < 4; i++)
      N(
        e,
        t ? n - 16 - 1 - i : 16 + i,
        GI,
        `rgba(12,6,24,${0.25 - i * 0.06})`,
        1,
        r - GI - 16,
      );
  }
  let i = r - 16;
  (N(e, 0, i, RI, n, 16),
    N(e, 12, i, zI, n - 32 + 8, 5),
    N(e, 12, i, BI, n - 32 + 8, 1));
  let a = [...t.cells.keys()]
    .filter((e) => t.cells[e] === On.EXIT)
    .map((e) => e % t.w);
  if (a.length) {
    let t = Math.min(...a) * 16,
      n = (Math.max(...a) + 1) * 16;
    (N(e, t + 1, i, `#8c8698`, n - t - 2, 6),
      N(e, t + 1, i, `#b9b3c7`, n - t - 2, 1),
      N(e, t + 1, i + 6, `#3b3548`, n - t - 2, 10));
    for (let r = 0; r < 8; r++)
      N(
        e,
        t + 1,
        i + 6 + r,
        `rgba(255,236,190,${0.35 - r * 0.04})`,
        n - t - 2,
        1,
      );
    (N(e, t - 1, i, zI, 2, 6), N(e, n - 1, i, zI, 2, 6));
    let r = n - t - 4;
    (N(e, t + 2, i - 9, `#6b3a2a`, r, 8),
      N(e, t + 3, i - 8, `#8e4a34`, r - 2, 6));
    for (let n = t + 4; n < t + r; n += 3) N(e, n, i - 7, `#a8603f`, 1, 4);
  }
}
function JI(e, t) {
  let n = t.lx * 16,
    r = t.ly * 16,
    i = t.w * 16,
    a = t.h * 16;
  if (t.color === `dais`) {
    N(e, n, r, `#e6e0ee`, i, a - 6);
    for (let t = n; t < n + i; t += 16) N(e, t, r, `#cfc9da`, 1, a - 6);
    (N(e, n, r + a - 6, `#e0b64a`, i, 1),
      N(e, n, r + a - 5, `#9d97ad`, i, 2),
      N(e, n - 2, r + a - 3, `#b9b3c7`, i + 4, 1),
      N(e, n - 2, r + a - 2, `#7c768a`, i + 4, 2));
    let t = n + Math.floor(i / 2);
    (N(e, t - 2, r + a - 14, DA.crystal, 4, 4),
      N(e, t - 1, r + a - 15, DA.hi, 2, 6));
    return;
  }
  let o = I(t.color, -0.35),
    s = I(t.color, 0.25);
  (N(e, n + 2, r + 2, o, i - 4, a - 4),
    N(e, n + 3, r + 3, t.color, i - 6, a - 6),
    N(e, n + 5, r + 5, s, i - 10, 1),
    N(e, n + 5, r + a - 6, s, i - 10, 1),
    N(e, n + 5, r + 5, s, 1, a - 10),
    N(e, n + i - 6, r + 5, s, 1, a - 10));
  let c = n + i / 2,
    l = r + a / 2;
  for (let t = 0; t < 4; t++) N(e, c - t, l - 3 + t, `#e6c872`, 2 * t + 1, 1);
  for (let t = 0; t < 3; t++)
    N(e, c - 2 + t, l + 1 + t, `#e6c872`, 5 - 2 * t, 1);
  if (i >= a)
    for (let t = r + 3; t < r + a - 3; t += 2)
      (N(e, n + 1, t, `#e6d8bc`), N(e, n + i - 2, t, `#e6d8bc`));
  else
    for (let t = n + 3; t < n + i - 3; t += 2)
      (N(e, t, r + 1, `#e6d8bc`), N(e, t, r + a - 2, `#e6d8bc`));
}
