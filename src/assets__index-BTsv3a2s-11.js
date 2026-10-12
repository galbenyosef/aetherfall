// assets__index-BTsv3a2s 11 — math
// Lines 18045-18212 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var Kn = `homestead-house`;
function qn(e) {
  for (let t = 0; t < e.h; t++)
    for (let n = 0; n < e.w; n++)
      e.cells[t * e.w + n] =
        t === 0 || t === e.h - 1 || n === 0 || n === e.w - 1
          ? On.WALL
          : On.FLOOR;
  e.exit(Ht.door);
}
var Jn = `homestead`;
function Yn(e) {
  for (let t = 0; t < e.h; t++)
    for (let n = 0; n < e.w; n++)
      e.cells[t * e.w + n] =
        t === 0 || t === e.h - 1 || n === 0 || n === e.w - 1
          ? On.WALL
          : On.FLOOR;
  for (let t = 0; t < Dt.gate.w; t++) e.exit(Dt.gate.x + t);
  let t = Dt.cottage;
  (e.put(`cottage`, t.x, t.y, t.w, t.h),
    e.put(`well`, Dt.well.x, Dt.well.y, Dt.well.w, Dt.well.h),
    e.put(`basket`, Dt.basket.x, Dt.basket.y));
}
var A = (function (e) {
    return (
      (e[(e.Grass = 0)] = `Grass`),
      (e[(e.Grass2 = 1)] = `Grass2`),
      (e[(e.Flowers = 2)] = `Flowers`),
      (e[(e.DarkGrass = 3)] = `DarkGrass`),
      (e[(e.Path = 4)] = `Path`),
      (e[(e.Water = 5)] = `Water`),
      (e[(e.Sand = 6)] = `Sand`),
      (e[(e.Snow = 7)] = `Snow`),
      (e[(e.Ice = 8)] = `Ice`),
      (e[(e.Ash = 9)] = `Ash`),
      (e[(e.Lava = 10)] = `Lava`),
      (e[(e.Plaza = 11)] = `Plaza`),
      (e[(e.Bridge = 12)] = `Bridge`),
      (e[(e.DeepWater = 13)] = `DeepWater`),
      (e[(e.Cobble = 14)] = `Cobble`),
      (e[(e.Dirt = 15)] = `Dirt`),
      (e[(e.Soil = 16)] = `Soil`),
      (e[(e.Wheat = 17)] = `Wheat`),
      (e[(e.Greens = 18)] = `Greens`),
      (e[(e.BridgeH = 19)] = `BridgeH`),
      (e[(e.Dock = 20)] = `Dock`),
      (e[(e.Market = 21)] = `Market`),
      (e[(e.Scrub = 22)] = `Scrub`),
      (e[(e.Courtyard = 23)] = `Courtyard`),
      e
    );
  })({}),
  Xn = { ARCH: 1, SPAN: 2, BANNER: 4 };
function Zn(e) {
  return {
    n: e,
    h: new Uint8Array(e * e),
    flag: new Uint8Array(e * e),
    pal: new Uint8Array(e * e),
    banner: new Uint8Array(e * e),
  };
}
var Qn = [`marizon`, `glade`, `woods`, `frost`, `ash`],
  $n = {
    marizon: {
      name: `Marizon`,
      subtitle: `The teaching town around the Aether Sanctum`,
    },
    glade: {
      name: `Verdant Glade`,
      subtitle: `Farmland kept green by the Aether Crystal`,
    },
    woods: {
      name: `Whispering Woods`,
      subtitle: `The trees remember the old war`,
    },
    frost: {
      name: `Frostmere Reach`,
      subtitle: `Wisps drift down from fallen Nethermere`,
    },
    ash: {
      name: `The Ashen Wastes`,
      subtitle: `Gorrath's imps push north from Cindergate`,
    },
  },
  er = 2,
  j = (e, t) => t * 448 + e,
  tr = (e, t) => e >= 0 && t >= 0 && e < 448 && t < 448,
  nr = (e, t, n) => {
    let r = Math.max(0, Math.min(1, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  },
  rr = (e, t) =>
    Math.max(
      Math.abs(e),
      Math.abs(t),
      (Math.abs(e) + Math.abs(t)) / Math.SQRT2,
    ),
  ir = (e, t, n, r) => Math.abs(e) <= n && Math.abs(t) <= r;
function ar(e, t) {
  let n = e - 224,
    r = t - 224,
    i =
      Math.atan2(r, n) +
      (Xe((e / 2) * 0.04, (t / 2) * 0.04, 77) - 0.5) * 0.7 +
      (Xe((e / 2) * 0.25, (t / 2) * 0.25, 78) - 0.5) * 0.16,
    a = Math.PI / 4,
    o = (i + Math.PI * 4) % (Math.PI * 2);
  return o < a || o >= 7 * a
    ? `glade`
    : o < 3 * a
      ? `ash`
      : o < 5 * a
        ? `woods`
        : `frost`;
}
var or = [
  [152, -4],
  [149, 12],
  [141, 29],
  [128, 42],
  [112, 50],
  [94, 52],
  [77, 54],
  [62, 61],
  [52, 75],
  [49, 94],
  [48, 112],
  [45, 130],
  [37, 146],
  [23, 158],
  [8, 165],
  [-4, 169],
];
function sr(e, t) {
  let n = 1e9;
  for (let r = 0; r < or.length - 1; r++) {
    let [i, a] = or[r],
      [o, s] = or[r + 1];
    if (
      e < Math.min(i, o) - 6 ||
      e > Math.max(i, o) + 6 ||
      t < Math.min(a, s) - 6 ||
      t > Math.max(a, s) + 6
    )
      continue;
    let c = o - i,
      l = s - a,
      u = Math.max(
        0,
        Math.min(1, ((e - i) * c + (t - a) * l) / (c * c + l * l)),
      ),
      d = Math.hypot(e - (i + c * u), t - (a + l * u));
    d < n && (n = d);
  }
  return n;
}
var cr = {
    STONE: 1,
    STONES: 56,
    GRASS: 64,
    GRASSES: 33,
    PEBBLE: 100,
    PEBBLES: 12,
    OVERGROWN: 120,
  },
  lr = [10, 8];
