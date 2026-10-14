// assets__index-BTsv3a2s 131 — math
// Lines 82763-83070 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
((WN[A.Grass] = HN([`#3f8f3b`, `#4a9c40`, `#367f35`, `#5aae4a`])),
  (WN[A.Grass2] = HN([`#377f3a`, `#428b3d`, `#2f7234`, `#4f9c46`])),
  (WN[A.Flowers] = HN([`#3f8f3b`, `#4a9c40`, `#367f35`, `#5aae4a`])),
  (WN[A.DarkGrass] = HN([`#23553a`, `#2a6142`, `#1d4a33`, `#33704b`])),
  (WN[A.Path] = HN([`#9c8a6a`, `#8a7a5c`, `#b09d7a`, `#7a6a50`])),
  (WN[A.Water] = HN([`#2a6fb0`, `#2f78bb`, `#2563a2`, `#3a86c8`])),
  (WN[A.DeepWater] = HN([`#1b3f78`, `#1f4787`, `#173768`, `#24508f`])),
  (WN[A.Sand] = HN([`#d8c48e`, `#e3d09c`, `#c9b47e`, `#eadba9`])),
  (WN[A.Snow] = HN([`#e6eef8`, `#f2f7fc`, `#d6e2f0`, `#ffffff`])),
  (WN[A.Ice] = HN([`#9fd4f0`, `#b4e0f5`, `#8cc6e6`, `#d3f0ff`])),
  (WN[A.Ash] = HN([`#3b3237`, `#453a40`, `#32292e`, `#50444a`])),
  (WN[A.Lava] = HN([`#d9481c`, `#ef6a22`, `#b8350f`, `#ffb03a`])),
  (WN[A.Plaza] = HN([`#7c768a`, `#878197`, `#6d677b`, `#948ea4`])),
  (WN[A.Bridge] = HN([`#7a5230`, `#8a5f38`, `#6a4527`, `#9c6c40`])),
  (WN[A.Cobble] = HN([`#8a8290`, `#7c7484`, `#978f9e`, `#6f6878`])),
  (WN[A.Dirt] = HN([`#8a6a48`, `#7d5f40`, `#997856`, `#6f5438`])),
  (WN[A.Soil] = HN([`#6b4c30`, `#5e4229`, `#7a5a3a`, `#4a3424`])),
  (WN[A.Wheat] = HN([`#c9a24a`, `#b8913e`, `#e3c46a`, `#9a7a32`])),
  (WN[A.Greens] = HN([`#6b4c30`, `#5e4229`, `#7a5a3a`, `#4a3424`])),
  (WN[A.BridgeH] = HN([`#7a5230`, `#8a5f38`, `#6a4527`, `#9c6c40`])),
  (WN[A.Dock] = HN([`#8a6a48`, `#9c7a54`, `#7a5c3e`, `#a8865e`])),
  (WN[A.Market] = HN([`#a07a6a`, `#8e6a5c`, `#b08a78`, `#7c5c50`])),
  (WN[A.Scrub] = HN([`#7d8a44`, `#6f7a3c`, `#8c9650`, `#5f6834`])),
  (WN[A.Courtyard] = HN([`#a9a3b9`, `#b5afc5`, `#9d97ad`, `#c1bbd1`])));
var GN = HN([`#ffd166`, `#ff6fa3`, `#b58aff`, `#ffffff`]),
  KN = 32,
  qN = new Uint8Array(KN),
  JN = new Uint8Array(KN),
  YN = new Uint8Array(KN),
  XN = new Uint8Array(KN);
for (let e of [A.Water, A.DeepWater, A.Lava]) qN[e] = 1;
for (let e of [A.Cobble, A.Market, A.Courtyard, A.Plaza]) JN[e] = 1;
for (let e of [A.Bridge, A.BridgeH, A.Dock]) YN[e] = 1;
for (let e of [
  A.Grass,
  A.Grass2,
  A.Flowers,
  A.DarkGrass,
  A.Sand,
  A.Snow,
  A.Ash,
  A.Scrub,
  A.Dirt,
  A.Path,
])
  XN[e] = 1;
var ZN = new Uint8Array(KN).fill(255);
((ZN[A.Grass] = ej.Grass),
  (ZN[A.Grass2] = ej.Grass),
  (ZN[A.Flowers] = ej.Grass),
  (ZN[A.DarkGrass] = ej.Shade),
  (ZN[A.Path] = ej.Dirt1),
  (ZN[A.Dirt] = ej.Dirt2),
  (ZN[A.Sand] = ej.Sand),
  (ZN[A.Scrub] = ej.Gravel),
  (ZN[A.Soil] = ej.Soil),
  (ZN[A.Wheat] = ej.Soil),
  (ZN[A.Greens] = ej.SoilW),
  (ZN[A.Cobble] = ej.Stone1),
  (ZN[A.Market] = ej.Stone1),
  (ZN[A.Courtyard] = ej.Sandst),
  (ZN[A.Plaza] = ej.Slab),
  (ZN[A.Water] = ej.Water),
  (ZN[A.DeepWater] = ej.Deep),
  (ZN[A.Snow] = ej.Snow),
  (ZN[A.Ice] = ej.Ice),
  (ZN[A.Bridge] = ej.Water),
  (ZN[A.BridgeH] = ej.Water),
  (ZN[A.Dock] = ej.Water));
var QN = {
    [A.Path]: ej.FDirt,
    [A.Dirt]: ej.FDirt2,
    [A.Water]: ej.CWater,
    [A.DeepWater]: ej.CDeep,
    [A.Bridge]: ej.CWater,
    [A.BridgeH]: ej.CWater,
    [A.Dock]: ej.CWater,
  },
  $N = (e) => e === A.Bridge || e === A.BridgeH || e === A.Dock,
  eP = 3,
  tP = new Set([`tree`, `darktree`, `pine`, `fruitTree`, `border`]),
  nP = null;
function rP() {
  if (nP) return nP;
  let e = Vr(),
    t = new Uint8Array(Or * kr),
    n = new Uint8Array(Or * kr);
  for (let t = 0; t < kr; t++)
    for (let r = 0; r < Or; r++) {
      let i = e.tiles[t * Or + r];
      if (i === A.Snow || i === A.Ice)
        for (let e = -4; e <= 4; e++)
          for (let i = -4; i <= 4; i++) {
            let a = r + i,
              o = t + e;
            a >= 0 && o >= 0 && a < Or && o < kr && (n[o * Or + a] = 1);
          }
    }
  for (let r = 0; r < t.length; r++) {
    let i = e.tiles[r],
      a = e.regions[r] === eP ? QN[i] : void 0;
    t[r] =
      a !== void 0 && (n[r] || a === ej.CWater || a === ej.CDeep) ? a : ZN[i];
  }
  for (let n = 0; n < t.length; n++) {
    if (!$N(e.tiles[n])) continue;
    let r = n % Or,
      i = (n - r) / Or,
      a = 0,
      o = 0,
      s = 0;
    for (let t = -3; t <= 3; t++)
      for (let n = -3; n <= 3; n++) {
        let c = r + n,
          l = i + t;
        if (c < 0 || l < 0 || c >= Or || l >= kr) continue;
        let u = e.tiles[l * Or + c];
        u === A.Ice
          ? a++
          : u === A.Lava
            ? o++
            : (u === A.Water || u === A.DeepWater) && s++;
      }
    o > s && o >= a ? (t[n] = 255) : a > s && (t[n] = ej.Ice);
  }
  for (let n = 0; n < kr; n++)
    for (let r = 0; r < Or; r++) {
      let i = n * Or + r,
        a = e.regions[i];
      t[i] === ej.Grass &&
      (((a === 1 || a === 2) && iP(r, n, 61) < 0.022) ||
        e.marks[i] === cr.OVERGROWN)
        ? (t[i] = ej.Tall)
        : t[i] === ej.Sandst &&
          (a !== 0 || Xe(r / 4, n / 4, 62) > 0.62) &&
          (t[i] = ej.SandstG);
    }
  for (let n of e.placements)
    if (tP.has(n.kind))
      for (let e = -1; e <= 1; e++)
        for (let r = -1; r <= 1; r++) {
          if (e !== 0 && r !== 0) continue;
          let i = n.tx + r,
            a = n.ty + e;
          if (i < 0 || a < 0 || i >= Or || a >= kr) continue;
          let o = a * Or + i;
          (t[o] === ej.Grass || t[o] === ej.Tall) && (t[o] = ej.Shade);
        }
  return (nP = t);
}
function iP(e, t, n) {
  let r = (e * 374761393 + t * 668265263 + n * 144269504) | 0;
  return (
    (r = Math.imul(r ^ (r >>> 13), 1274126177)),
    (r ^= r >>> 16),
    (r >>> 0) / 4294967296
  );
}
var aP = UN(88, 82, 100);
function oP(e, t, n, r, i, a, o) {
  let s = WN[e],
    c = iP(t, n, 3),
    l = iP(t >> 1, n >> 1, 11),
    u = s[l < 0.5 ? 0 : l < 0.75 ? 1 : l < 0.92 ? 2 : 3];
  switch (e) {
    case A.Grass:
    case A.Grass2:
    case A.DarkGrass:
      c < 0.06 ? (u = s[3]) : c < 0.12 && (u = s[2]);
      break;
    case A.Flowers:
      iP(t >> 2, n >> 2, 21) > 0.7 &&
        c < 0.3 &&
        (u = GN[Math.floor(iP(t >> 2, n >> 2, 22) * 4)]);
      break;
    case A.Scrub:
      c < 0.05 ? (u = UN(150, 140, 80)) : c < 0.08 && (u = UN(70, 60, 60));
      break;
    case A.Plaza: {
      let e = (Math.floor(i / 8) % 2) * 4;
      i % 8 == 0 || (r + e) % 8 == 0
        ? (u = aP)
        : (i % 8 == 1 || (r + e) % 8 == 1) && c < 0.7 && (u = s[3]);
      break;
    }
    case A.Courtyard: {
      let e = n >> 3,
        r = (e % 2) * 5;
      ((u = s[Math.floor(iP(Math.floor((t + r) / 10), e, 12) * 4)]),
        n % 8 == 0 || (t + r) % 10 == 0
          ? (u = UN(124, 118, 138))
          : (n % 8 == 1 || (t + r) % 10 == 1) &&
            c < 0.8 &&
            (u = UN(210, 204, 222)));
      break;
    }
    case A.Cobble: {
      let e = n >> 2,
        r = (e % 2) * 2,
        i = (t + r) & 3,
        a = n & 3;
      ((u = s[Math.floor(iP((t + r) >> 2, e, 14) * 4)]),
        a === 3 || i === 3
          ? (u = UN(90, 83, 100))
          : a === 0 && i === 0
            ? (u = UN(176, 168, 184))
            : a === 2 && i === 2 && c < 0.5 && (u = UN(100, 94, 110)));
      break;
    }
    case A.Market: {
      let e = t >> 2,
        r = n >> 2,
        i = t & 3,
        a = n & 3,
        o = (e + r) % 2 == 0,
        c = o ? a >> 1 : i >> 1;
      ((u = s[Math.floor(iP(e * 2 + c, r, 15) * 4)]),
        (o ? a === 1 || a === 3 : i === 1 || i === 3) && (u = UN(94, 70, 62)));
      break;
    }
    case A.Path: {
      let e = Math.floor((r + (Math.floor(i / 5) % 2) * 3) / 6),
        t = Math.floor(i / 5);
      ((u = s[Math.floor(iP(a * 5 + e, o * 5 + t, 44) * 4)]),
        (i % 5 == 0 || (r + (Math.floor(i / 5) % 2) * 3) % 6 == 0) &&
          (u = UN(106, 92, 70)));
      break;
    }
    case A.Dirt:
      c < 0.04 ? (u = UN(160, 140, 110)) : c < 0.07 && (u = UN(90, 70, 50));
      break;
    case A.Soil:
      u = n % 4 == 0 ? s[3] : n % 4 == 1 ? s[2] : s[c < 0.5 ? 0 : 1];
      break;
    case A.Wheat:
      if (n % 5 == 4) u = UN(110, 82, 44);
      else {
        let e = (t + (Math.floor(n / 5) % 2)) % 2 == 0;
        ((u = e
          ? s[iP(t, n >> 1, 16) < 0.5 ? 0 : 2]
          : s[iP(t, n, 17) < 0.5 ? 1 : 3]),
          n % 5 == 0 && e && (u = UN(242, 214, 120)));
      }
      break;
    case A.Greens: {
      let e = t & 3,
        r = n % 5;
      if (
        ((u = r === 4 ? UN(74, 52, 36) : UN(107, 76, 48)),
        r < 4 && e < 3 && (r > 0 || e === 1))
      ) {
        let i =
          iP(t >> 2, Math.floor(n / 5), 18) < 0.5
            ? UN(92, 207, 79)
            : UN(63, 143, 59);
        u = (e + r) % 3 == 0 ? UN(154, 224, 106) : i;
      }
      break;
    }
    case A.Bridge:
      ((u = i % 4 == 0 ? UN(70, 44, 24) : s[Math.floor(iP(a, i >> 2, 9) * 4)]),
        (r < 1 || r > 14) && (u = UN(50, 32, 18)));
      break;
    case A.BridgeH:
      ((u = r % 4 == 0 ? UN(70, 44, 24) : s[Math.floor(iP(r >> 2, o, 9) * 4)]),
        (i < 1 || i > 14) && (u = UN(50, 32, 18)));
      break;
    case A.Dock:
      ((u =
        r % 4 == 0
          ? UN(92, 64, 38)
          : s[Math.floor(iP((t >> 2) + 3, n >> 3, 19) * 4)]),
        (r === 1 || r === 14) && (i === 1 || i === 14) && (u = UN(60, 40, 24)));
      break;
    case A.Ash:
      c < 0.015 && (u = UN(255, 110, 40));
      break;
    case A.Snow:
      c < 0.02 && (u = UN(200, 220, 245));
      break;
    case A.Ice:
      (t + n) % 11 == 0 && c < 0.6 && (u = UN(230, 248, 255));
  }
  return u;
}
function sP(e, t, n) {
  return oP(
    e,
    t,
    n,
    ((t % 16) + 16) % 16,
    ((n % 16) + 16) % 16,
    Math.floor(t / 16),
    Math.floor(n / 16),
  );
}
var cP = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5],
  lP = (e, t) => (cP[(t & 3) * 4 + (e & 3)] + 0.5) / 16,
  uP = UN(214, 246, 250),
  dP = UN(124, 214, 230),
  fP = UN(150, 232, 240),
  pP = 64,
  mP = UN(6, 18, 58),
  hP = 100,
  gP = (e) =>
    (Math.round(((e >> 16) & 255) * 0.7) << 16) |
    (Math.round(((e >> 8) & 255) * 0.7) << 8) |
    Math.round((e & 255) * 0.7);
