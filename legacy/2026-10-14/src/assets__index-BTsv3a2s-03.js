// assets__index-BTsv3a2s 03 — door
// Lines 15445-15635 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Ie(e) {
  return e >= 20 ? `Magus` : e >= 10 ? `Adept` : `Initiate`;
}
function Le(e) {
  return Math.round(40 * e ** 1.55);
}
function Re(e) {
  return 90 + 14 * (e - 1);
}
function ze(e) {
  return 100 + 10 * (e - 1);
}
function Be(e) {
  return 9 + e * 0.6;
}
function Ve(e) {
  return 1 + 0.09 * (e - 1);
}
var He = 4.6,
  Ue = 48e4;
function We(e) {
  return (e % Ue) / Ue;
}
function Ge(e) {
  let t = We(e);
  return t < 0.25 || t >= 0.75;
}
var Ke = {
  PROLOGUE: 0,
  MEET: 1,
  FOCUS: 2,
  CONTROL: 3,
  POWER: 4,
  BLINK: 5,
  SKILLS: 6,
  BREACH: 7,
  DONE: 8,
};
function qe(e) {
  return e.tutorial ?? Ke.PROLOGUE;
}
function Je(e, t, n = 1337) {
  let r = (e * 374761393 + t * 668265263 + n * 144269504) | 0;
  return (
    (r = Math.imul(r ^ (r >>> 13), 1274126177)),
    (r ^= r >>> 16),
    (r >>> 0) / 4294967296
  );
}
function Ye(e) {
  return e * e * (3 - 2 * e);
}
function Xe(e, t, n = 1337) {
  let r = Math.floor(e),
    i = Math.floor(t),
    a = Ye(e - r),
    o = Ye(t - i),
    s = Je(r, i, n),
    c = Je(r + 1, i, n),
    l = Je(r, i + 1, n),
    u = Je(r + 1, i + 1, n);
  return s + (c - s) * a + (l - s) * o + (s - c - l + u) * a * o;
}
function Ze(e, t, n = 1337, r = 4) {
  let i = 0,
    a = 0.5,
    o = 1,
    s = 0;
  for (let c = 0; c < r; c++)
    ((i += Xe(e * o, t * o, n + c * 101) * a), (s += a), (a *= 0.5), (o *= 2));
  return i / s;
}
var Qe = [
    {
      id: `A`,
      w: 13,
      h: 11,
      door: 4.95,
      wallH: 6.8,
      use: [`house`, `shop`, `grand`],
    },
    { id: `B`, w: 12, h: 9, door: 5.8, wallH: 4.6, use: [`house`, `shop`] },
    { id: `C`, w: 10, h: 8, door: 4.6, wallH: 3.2, use: [`house`, `shop`] },
    { id: `D`, w: 12, h: 12, door: 6.2, wallH: 5.3, use: [`house`, `shop`] },
    { id: `E`, w: 13, h: 12, door: 6.5, wallH: 7.9, use: [`grand`, `shop`] },
    {
      id: `F`,
      w: 14,
      h: 12,
      door: 7,
      wallH: 7.4,
      use: [`house`, `shop`, `grand`],
    },
    { id: `G`, w: 13, h: 13, door: 9.8, wallH: 5, use: [`house`, `shop`] },
    { id: `J`, w: 12, h: 16, door: 6, wallH: 5.5, use: [`grand`] },
    { id: `M`, w: 13, h: 8, door: 6.3, wallH: 3, use: [`shop`] },
    {
      id: `Q`,
      w: 8,
      h: 13,
      door: 3.8,
      wallH: 9,
      use: [`house`, `shop`, `narrow`],
    },
    {
      id: `R`,
      w: 8,
      h: 13,
      door: 3.85,
      wallH: 8.8,
      use: [`house`, `shop`, `narrow`],
    },
    { id: `L`, w: 6, h: 6, door: 2.6, wallH: 1.5, use: [`frost`] },
  ],
  $e = new Map(Qe.map((e) => [e.id, e]));
function et(e) {
  return $e.get(e);
}
function tt(e, t = !1) {
  return Math.min(e.w - 1, Math.max(0, Math.floor(t ? e.w - e.door : e.door)));
}
function nt(e) {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) | 0;
    let e = Math.imul(t ^ (t >>> 15), 1 | t);
    return (
      (e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
var rt = (e, t) => t[Math.floor(e() * t.length) % t.length],
  it = {
    red: [`#9c3b2e`, `#6e2419`, `#c2574a`],
    blue: [`#3b5c9c`, `#243b6b`, `#5a7cc2`],
    brown: [`#7a5a3a`, `#523a24`, `#9c7a52`],
    green: [`#4f6b3a`, `#324a24`, `#6f8f52`],
    slate: [`#565a6e`, `#3a3d4e`, `#7a7f96`],
    terracotta: [`#b5562e`, `#853a1c`, `#d8784a`],
    plum: [`#6b3b6e`, `#482449`, `#8e5a91`],
    teal: [`#2f6f6a`, `#1d4a46`, `#4f948d`],
    thatch: [`#c9a24a`, `#94702c`, `#e6c872`],
    pyro: [`#b3261e`, `#6e1510`, `#e0503a`],
    cryo: [`#2f6fcf`, `#173a78`, `#6fa6ef`],
    storm: [`#5b3fb8`, `#2e1f66`, `#8a70e0`],
    void: [`#2a1740`, `#140a22`, `#4a2e6e`],
    marizon: [`#243b6b`, `#15244a`, `#3b5c9c`],
  },
  at = [`plaster`, `plaster`, `cream`, `rose`, `sage`, `stone`, `brick`],
  ot = [`red`, `blue`, `brown`, `green`, `slate`, `terracotta`, `plum`, `teal`],
  st = [void 0, void 0, `#3f6b4a`, `#3b5c9c`, `#8e3a2a`, `#6b3b6e`],
  ct = [
    [`#c2362f`, `#f2e6c8`],
    [`#3f8f3b`, `#f2e6c8`],
    [`#2f6fcf`, `#f2e6c8`],
    [`#6b3b6e`, `#ffd166`],
    [`#d9791f`, `#f2e6c8`],
    [`#2f6f6a`, `#e6d8bc`],
  ];
function lt(e, t, n, r = {}) {
  let i = nt(n * 7 + 3),
    a = t >= 5 || (t === 4 && i() < 0.35) ? 2 : 1,
    o = rt(i, ot),
    s = e <= 4 && i() < 0.45 ? `front` : i() < 0.25 ? `gable` : `hip`;
  return {
    w: e,
    h: t,
    stories: a,
    wall: rt(i, at),
    roof: it[o],
    style: s,
    tex: o === `slate` ? `slate` : o === `terracotta` ? `tile` : `shingle`,
    seed: n,
    door: 0.3 + i() * 0.4,
    chimney: i() < 0.7,
    dormers: a === 2 && s !== `front` && i() < 0.5,
    shutters: rt(i, st),
    boxes: i() < 0.5,
    ...r,
  };
}
function ut(e) {
  let t = e.pack ? et(e.pack) : void 0;
  if (t) return { x: tt(t, e.flip) * 16 + 4, w: 8 };
  let n = e.w * 16 - 4,
    r = n - 3 + 1,
    i = e.shop ? 9 : 8,
    a = Math.round(3 + r * (e.door ?? 0.5) - i / 2);
  return { x: Math.max(6, Math.min(n - i - 3, a)), w: i };
}
