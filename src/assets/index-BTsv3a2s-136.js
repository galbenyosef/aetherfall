// index-BTsv3a2s 136 — data
// Lines 84229-84563 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function gF(e, t, n, r) {
  let i = `tile:${e}:${t}:${r ? n % 16 : 0}`,
    a = _F.get(i);
  if (a) return a;
  let o = Wj(e, e, e, e, n % 7, n % 5),
    [s, c] = M(32, 32),
    l = c.createImageData(32, 32);
  new Uint32Array(l.data.buffer).set(o);
  for (let n = 0; n < 32; n++)
    for (let r = 0; r < 32; r++) {
      let i = e !== ej.Grass && (r < 2 || n < 2 || r > 29 || n > 29),
        a = (t ? 0.68 : 1) * (i ? 0.8 : 1);
      if (a === 1) continue;
      let o = (n * 32 + r) * 4;
      ((l.data[o] = Math.round(l.data[o] * a)),
        (l.data[o + 1] = Math.round(l.data[o + 1] * a)),
        (l.data[o + 2] = Math.round(l.data[o + 2] * (t ? 0.8 : a))));
    }
  if ((c.putImageData(l, 0, 0), r))
    for (let e = 0; e < 3; e++) {
      let t = sM(eF(n, 0, iF(n, e, 5)));
      t &&
        c.drawImage(
          t.c,
          Math.round((6 + iF(n, e, 6) * 8 - t.ax) * 2),
          Math.round((9 + iF(n, e, 8) * 6 - t.ay) * 2),
        );
    }
  let u = { c: jp(s, 2), ax: 8, ay: 15 };
  return (_F.set(i, u), u);
}
var _F = new Map();
function vF(e) {
  let t = e % 4,
    n = `flowers:${t}`,
    r = _F.get(n);
  if (r) return r;
  let [i, a] = M(16, 16),
    o = a.createImageData(16, 16);
  for (let e = 0; e < 16; e++)
    for (let n = 0; n < 16; n++) {
      let r = sP(A.Flowers, n + t * 16, e + t * 32),
        i = (e * 16 + n) * 4;
      ((o.data[i] = r >> 16),
        (o.data[i + 1] = (r >> 8) & 255),
        (o.data[i + 2] = r & 255),
        (o.data[i + 3] = 255));
    }
  a.putImageData(o, 0, 0);
  let s = { c: i, ax: 8, ay: 15 };
  return (_F.set(n, s), s);
}
function yF(e, t) {
  let n = [`tree01`, `tree03`, `tree04`, `tree13`],
    r = SF(
      bA(e === `pine` ? `tree02` : n[Math.floor(iF(t, 11, 9) * n.length)]),
    );
  if (r) return r;
  let i = `sapling:${e}`,
    a = _F.get(i);
  if (a) return a;
  let [o, s] = M(14, 22);
  (N(s, 6, 14, `#6b4424`, 2, 8),
    P(s, 7, 8, 6, 7, e === `pine` ? `#2f6a4a` : `#4f9a3a`),
    F(o, XP));
  let c = { c: o, ax: 7, ay: 21 };
  return (_F.set(i, c), c);
}
function bF(e) {
  let t = `soil:${e}`,
    n = _F.get(t);
  if (n) return n;
  let [r, i] = M(16, 16),
    a = i.createImageData(16, 16);
  for (let t = 0; t < 16; t++)
    for (let n = 0; n < 16; n++) {
      let r = sP(A.Soil, n, t);
      e &&
        (r =
          ((((r >> 16) * 0.62) | 0) << 16) |
          (((((r >> 8) & 255) * 0.6) | 0) << 8) |
          ((r & 255) * 0.72) |
          0);
      let i = n === 0 || t === 0 || n === 15 || t === 15,
        o = (t * 16 + n) * 4;
      ((a.data[o] = r >> 16),
        (a.data[o + 1] = (r >> 8) & 255),
        (a.data[o + 2] = r & 255),
        (a.data[o + 3] = i ? 140 : 255));
    }
  i.putImageData(a, 0, 0);
  let o = { c: r, ax: 8, ay: 15 };
  return (_F.set(t, o), o);
}
function xF() {
  let e = _F.get(`cauldron`);
  if (e) return e;
  let [t, n] = M(18, 20);
  (N(n, 6, 16, `#ff7a1a`, 6, 2),
    N(n, 7, 18, `#ffd166`, 4, 1),
    P(n, 9, 11, 7, 5.5, `#2b2633`),
    P(n, 9, 7, 6, 2, `#5ccf4f`),
    P(n, 7, 7, 2, 1, `#bff0a8`),
    N(n, 2, 7, `#4a4458`, 14, 1),
    N(n, 3, 15, `#2b2633`, 2, 4),
    N(n, 13, 15, `#2b2633`, 2, 4),
    F(t, XP));
  let r = { c: t, ax: 9, ay: 19, light: { dy: -12, r: 30, color: `#5ccf4f` } };
  return (_F.set(`cauldron`, r), r);
}
function SF(e, t = 0) {
  return e
    ? { c: e.frames[Math.min(t, e.frames.length - 1)], ax: e.ax, ay: e.ay }
    : null;
}
function CF(e) {
  let t = sM(e ? `hl/fence-h` : `hl/fence-v`);
  if (t) return { c: t.c, ax: t.ax, ay: t.ay - 2 };
  let n = _N(e);
  return { c: n.c, ax: n.ax, ay: n.ay };
}
function wF(e, t = {}) {
  switch (e) {
    case `bed`:
      return QP() ? gF(ej.Soil, !!t.wet, t.seed ?? 0, !1) : bF(!!t.wet);
    case `crate`:
    case `strongbox`:
    case `coffer`: {
      let n =
          e === `crate`
            ? `chestWood`
            : e === `strongbox`
              ? `chestIron`
              : `chestWarded`,
        r = Math.round((t.open ?? 0) * 3);
      return SF(bA(n), r) ?? SF(bA(`chest`)) ?? { ...cN(), light: void 0 };
    }
    case `cookfire`: {
      let e = bA(`campfire`);
      return e
        ? {
            c: xA(e.frames, (t.t ?? 0) * 8),
            ax: e.ax,
            ay: e.ay,
            light: { dy: -9, r: 44, color: `#ff8a2a` },
          }
        : { c: bF(!1).c, ax: 8, ay: 15 };
    }
    case `cauldron`:
      return xF();
    case `fence`:
      return CF(!!t.across);
    case `lamp`: {
      let e = hF([`prop/lamp-post2`]);
      if (e) return { ...e, light: { dy: -27, r: 44, color: `#ffd98a` } };
      let t = SF(bA(`lamp04`));
      return t
        ? { ...t, light: { dy: -20, r: 40, color: `#ffd98a` } }
        : { ...CF(!1), light: { dy: -10, r: 30, color: `#ffd98a` } };
    }
    case `barrel`:
      return (
        hF([`prop/barrels-1`, `prop/barrels-3`], t.seed) ??
        SF(bA(`barrel01`)) ?? { ...cN() }
      );
    case `planter`: {
      let e = hF(
        [
          `prop/potted-flower-10`,
          `prop/potted-flower-11`,
          `prop/potted-flower-12`,
          `prop/potted-flower-13`,
          `prop/potted-flower-9`,
        ],
        t.seed,
      );
      if (e) return e;
      let n = [
        `plant10`,
        `plant11`,
        `plant12`,
        `plant13`,
        `plant14`,
        `plant15`,
      ];
      return SF(bA(n[Math.floor(iF(t.seed ?? 0, 3, 7) * n.length)])) ?? bF(!1);
    }
    case `tree`:
      return (
        hF(
          [
            `ar/birch-trees-0`,
            `ar/birch-trees-1`,
            `ar/birch-trees-2`,
            `ar/birch-trees-3`,
            `ar/birch-trees-6`,
            `ar/birch-trees-7`,
          ],
          t.seed,
        ) ?? yF(e, t.seed ?? 0)
      );
    case `pine`:
      return (
        hF(
          [`prop/pine-tree-6`, `prop/pine-tree-7`, `prop/pine-tree-8`],
          t.seed,
        ) ?? yF(e, t.seed ?? 0)
      );
    case `flowers`:
      return QP() ? gF(ej.Grass, !1, t.seed ?? 0, !0) : vF(t.seed ?? 0);
  }
}
function TF(e, t) {
  let n = bA(`grow${dt[e].sheet}`);
  if (!n) return null;
  let r = It(e, t);
  return { c: n.frames[Math.min(r, n.frames.length - 1)], ax: n.ax, ay: n.ay };
}
var EF = new Map();
function DF(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function OF(e) {
  let t = `${e}:${!!bA(`tree01`)}`,
    n = EF.get(t);
  if (n) return n;
  let r = _t[e],
    [i, a] = M(24, 24);
  if (((a.imageSmoothingEnabled = !1), r?.crop)) {
    let e = bA(`icon${DF(r.crop)}`),
      t = r.kind === `seed` ? 1 : 1.5;
    if (e) {
      let n = Math.round(e.c.width * t),
        i = Math.round(e.c.height * t);
      a.drawImage(
        e.c,
        Math.round((24 - n) / 2),
        Math.round((24 - i) / 2) - (r.kind === `seed` ? 3 : 0),
        n,
        i,
      );
    } else P(a, 12, 12, 6, 6, dt[r.crop].color);
    r.kind === `seed` && AF(a, dt[r.crop].color);
  } else
    r?.kind === `potion` || r?.kind === `junk`
      ? jF(
          a,
          r.kind === `junk` ? `#6b6152` : r.color,
          r.use?.minutes ? `tall` : `round`,
        )
      : r?.kind === `dish`
        ? MF(a, e, r.color)
        : r?.kind === `water`
          ? kF(a)
          : e === `rested`
            ? (P(a, 10, 12, 7, 7, `#ffe08a`),
              (a.globalCompositeOperation = `destination-out`),
              P(a, 14, 10, 6, 6, `#000`),
              (a.globalCompositeOperation = `source-over`),
              N(a, 15, 3, `#cfe6ff`, 5, 1),
              N(a, 18, 4, `#cfe6ff`, 1, 1),
              N(a, 17, 5, `#cfe6ff`, 1, 1),
              N(a, 16, 6, `#cfe6ff`, 1, 1),
              N(a, 15, 7, `#cfe6ff`, 5, 1),
              N(a, 19, 10, `#9fc4e8`, 3, 1),
              N(a, 20, 11, `#9fc4e8`, 1, 1),
              N(a, 19, 12, `#9fc4e8`, 3, 1))
            : P(a, 12, 12, 6, 6, `#888`);
  return (EF.set(t, i), i);
}
function kF(e) {
  let [t, n] = M(24, 24);
  (N(n, 5, 10, `#8c98a8`, 11, 9),
    N(n, 5, 10, `#b9c4d2`, 11, 2),
    N(n, 6, 7, `#6f7a8a`, 2, 4),
    N(n, 6, 6, `#6f7a8a`, 8, 1),
    N(n, 13, 7, `#6f7a8a`, 1, 4),
    N(n, 16, 12, `#8c98a8`, 2, 2),
    N(n, 18, 10, `#8c98a8`, 2, 2),
    N(n, 19, 9, `#b9c4d2`, 2, 1),
    N(n, 20, 13, `#5bb8ff`, 2, 3),
    N(n, 20, 13, `#cfefff`, 1, 1),
    F(t, XP),
    e.drawImage(t, 0, 0));
}
function AF(e, t) {
  let [n, r] = M(24, 24);
  (N(r, 8, 15, `#c9a77a`, 9, 7),
    N(r, 9, 14, `#b08a5a`, 7, 1),
    N(r, 10, 13, `#8a6a48`, 5, 1),
    N(r, 8, 15, `#e3c9a0`, 9, 1),
    N(r, 10, 18, t, 2, 2),
    N(r, 13, 17, t, 2, 2),
    F(n, XP),
    e.drawImage(n, 0, 0));
}
function jF(e, t, n) {
  let [r, i] = M(24, 24);
  (n === `round`
    ? (P(i, 12, 15, 6, 6, `#d8e6f0`),
      P(i, 12, 16, 5, 4.5, t),
      N(i, 10, 4, `#d8e6f0`, 4, 6),
      N(i, 9, 3, `#8a5a32`, 6, 2),
      N(i, 9, 13, I(t, 0.5), 2, 2))
    : (N(i, 8, 8, `#d8e6f0`, 8, 14),
      N(i, 9, 11, t, 6, 10),
      N(i, 10, 3, `#d8e6f0`, 4, 5),
      N(i, 9, 2, `#8a5a32`, 6, 2),
      N(i, 9, 11, I(t, 0.5), 1, 6)),
    F(r, XP),
    e.drawImage(r, 0, 0));
}
function MF(e, t, n) {
  let [r, i] = M(24, 24);
  if (t === `dish:bread`) {
    (P(i, 12, 14, 8, 5, `#c48a3e`), P(i, 12, 12, 7, 4, `#e6b46a`));
    for (let e = 0; e < 3; e++) N(i, 8 + e * 3, 11, `#a86a28`, 2, 1);
  } else
    t === `dish:thundercake` || t === `dish:skytart` || t === `dish:lanternpie`
      ? (N(i, 4, 15, `#e6e0ee`, 16, 3),
        P(i, 12, 13, 7, 3.5, t === `dish:lanternpie` ? `#c48a3e` : `#e6b46a`),
        P(i, 12, 12, 5, 2, n),
        t === `dish:lanternpie` && N(i, 9, 11, `#a86a28`, 6, 1))
      : (P(i, 12, 15, 8, 4, `#8a6a48`),
        P(i, 12, 13, 7, 2.5, n),
        N(i, 6, 17, `#6b4c30`, 12, 2),
        N(i, 15, 9, `#c9c1d9`, 1, 4));
  (F(r, XP), e.drawImage(r, 0, 0));
}
var NF = new WeakMap();
function PF(e) {
  let t = OF(e),
    n = NF.get(t);
  return (n || ((n = t.toDataURL()), NF.set(t, n)), n);
}
