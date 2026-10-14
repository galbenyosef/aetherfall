// index-BTsv3a2s 137 — math
// Lines 84564-84901 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function FF(e) {
  let t = `built:${e}:${!!bA(`tree01`)}:${QP()}`,
    n = EF.get(t);
  if (!n) {
    let r = wF(e, { across: !0, seed: 1 }),
      [i, a] = M(32, 32);
    a.imageSmoothingEnabled = !1;
    let o = Math.min(1.5 / Ap(r.c), 28 / Math.max(r.c.width, r.c.height)),
      s = Math.round(r.c.width * o),
      c = Math.round(r.c.height * o);
    (a.drawImage(r.c, Math.round((32 - s) / 2), 32 - c - 2, s, c),
      (n = i),
      EF.set(t, n));
  }
  let r = NF.get(n);
  return (r || ((r = n.toDataURL()), NF.set(n, r)), r);
}
var IF = 2,
  LF = 32,
  RF = 64,
  zF = 8,
  BF = `#07040f`,
  VF = `#2b2633`,
  HF = `#4a4458`,
  UF = (e) => sM(e);
function WF() {
  return oM() && !!UF(`tile/in-floor-planks`);
}
var GF = {
    "grey-stone": 81,
    "red-brick": 86,
    olive: 86,
    pink: 86,
    cream: 86,
    "grey-cobble": 85,
    "brown-cobble": 85,
    sandstone: 86,
    yellow: 86,
  },
  KF = new Set([`olive`, `pink`, `cream`]),
  qF = 10,
  JF = {
    plaster: `cream`,
    timber: `red-brick`,
    stone: `grey-cobble`,
    castle: `grey-stone`,
  },
  YF = {
    potion: `olive`,
    herb: `olive`,
    robe: `pink`,
    gem: `pink`,
    candle: `yellow`,
    lantern: `brown-cobble`,
  };
function XF(e) {
  return e.wall === `castle` || e.wall === `stone`
    ? JF[e.wall]
    : (e.trade && YF[e.trade]) || JF[e.wall];
}
var ZF = new Map();
function QF(e) {
  let t = ZF.get(e);
  if (t) return t;
  let n = UF(`tile/in-wall-${e}`);
  if (!n) return null;
  let r = n.c,
    i = GF[e],
    [a, o] = M(r.width, RF);
  return (
    o.drawImage(r, 0, 0, r.width, zF, 0, 0, r.width, zF),
    KF.has(e)
      ? (o.drawImage(r, 0, zF, r.width, 46, 0, zF, r.width, 46),
        o.drawImage(r, 0, zF + i - qF, r.width, qF, 0, 54, r.width, qF))
      : (o.drawImage(r, 0, zF, r.width, 56, 0, zF, r.width, 56),
        (o.fillStyle = `rgba(10,8,18,0.45)`),
        o.fillRect(0, 62, r.width, 2)),
    ZF.set(e, jp(a, IF)),
    a
  );
}
function $F(e) {
  return QF(JF[e]);
}
function eI(e) {
  return QF(XF(e));
}
var tI = {
    planks: `planks`,
    darkplanks: `darkplanks`,
    flag: `flag`,
    marble: `diamond-blue`,
    grass: `planks`,
  },
  nI = {
    book: `parquet`,
    gem: `check-blue`,
    robe: `herring`,
    bread: `slabs`,
    potion: `check-green`,
    cheese: `brownflag`,
  };
function rI(e) {
  return (
    UF(`tile/in-floor-${(e.trade && nI[e.trade]) || tI[e.floor]}`) ??
    UF(`tile/in-floor-planks`)
  );
}
function iI(e) {
  return rI({ floor: e })?.c ?? null;
}
function aI(e, t, n, r, i, a, o = 0, s = 0) {
  oI(e, t, n, r, i, a, o, s);
}
function oI(e, t, n, r, i, a, o = 0, s = 0) {
  let c = e.createPattern(t, `repeat`);
  c &&
    (e.save(),
    e.translate(o, s),
    (e.fillStyle = c),
    e.fillRect(n - o, r - s, i, a),
    e.restore());
}
function sI(e, t, n, r, i, a, o) {
  let s = t.width,
    c = t.height,
    l = Math.min(o, Math.floor(i / 2), Math.floor((s - 1) / 2)),
    u = Math.min(o, Math.floor(a / 2), Math.floor((c - 1) / 2)),
    d = [
      [0, l, n, l],
      [l, s - 2 * l, n + l, i - 2 * l],
      [s - l, l, n + i - l, l],
    ],
    f = [
      [0, u, r, u],
      [u, c - 2 * u, r + u, a - 2 * u],
      [c - u, u, r + a - u, u],
    ];
  for (let [n, r, i, a] of f)
    for (let [o, s, c, l] of d)
      if (!(s <= 0 || r <= 0 || l <= 0 || a <= 0))
        for (let u = 0; u < a; u += r)
          for (let d = 0; d < l; d += s) {
            let f = Math.min(s, l - d),
              p = Math.min(r, a - u);
            e.drawImage(t, o, n, f, p, c + d, i + u, f, p);
          }
}
var cI = (e, t, n) => ig(e, t, n)[1] > 0.15,
  lI = new Map();
function uI(e) {
  let t =
      e.h >= 2 * e.w && e.h >= 3
        ? `runner-red`
        : e.w >= 2 && e.h >= 2
          ? `big-green`
          : `brown`,
    n = `${t}|${e.color}`,
    r = lI.get(n);
  if (r) return r;
  let i = UF(`tile/in-rug-${t}`);
  if (!i) return null;
  let a = ag([i.c], e.color, cI)[0];
  return (lI.set(n, a), a);
}
function dI(e, t) {
  fI(e, t);
}
function fI(e, t) {
  let n = t.lx * LF,
    r = t.ly * LF,
    i = t.w * LF,
    a = t.h * LF;
  if (t.color === `dais`) {
    let t = UF(`tile/in-floor-stone`);
    (t && oI(e, t.c, n, r, i, a - 12, n, r),
      (e.fillStyle = `#e0b64a`),
      e.fillRect(n, r + a - 12, i, 2),
      (e.fillStyle = `#9d97ad`),
      e.fillRect(n, r + a - 10, i, 4),
      (e.fillStyle = `#b9b3c7`),
      e.fillRect(n - 4, r + a - 6, i + 8, 2),
      (e.fillStyle = `#7c768a`),
      e.fillRect(n - 4, r + a - 4, i + 8, 4));
    let o = n + Math.floor(i / 2);
    ((e.fillStyle = DA.crystal),
      e.fillRect(o - 4, r + a - 28, 8, 8),
      (e.fillStyle = DA.hi),
      e.fillRect(o - 2, r + a - 30, 4, 12));
    return;
  }
  let o = uI(t);
  o && sI(e, o, n + 4, r + 4, i - 8, a - 8, 10);
}
function pI(e, t, n, r, i) {
  if (!t) return;
  let a = i ?? t.c;
  e.drawImage(a, Math.round(n - a.width / 2), Math.round(r));
}
function mI(e, t, n, r, i) {
  t &&
    e.drawImage(i ?? t.c, Math.round(n - t.ax * IF), Math.round(r - t.ay * IF));
}
var hI = {
    1: [`windows2-3`, `windows3-11`, `windows2-15`],
    2: [`windows1-5`, `windows3-7`, `windows4-3`, `windows1-8`, `windows3-8`],
    3: [`windows3-0`, `windows3-1`],
  },
  gI = new Map();
function _I(e) {
  let t = UF(`in/banner-1`);
  if (!t) return null;
  let n = gI.get(e);
  if (!n) {
    let r =
      e === `marizon`
        ? DA.field
        : e === `void`
          ? `#4a2a70`
          : (EA[e]?.robe ?? DA.field);
    ((n = ag([t.c], r, (e, t, n) => {
      let [r, i] = ig(e, t, n);
      return i > 0.2 && r >= 80 && r <= 190;
    })[0]),
      gI.set(e, n));
  }
  return { e: t, c: n };
}
var vI = new Map();
function yI(e, t, n, r, i, a) {
  let o = n.lx * LF,
    s = n.w * LF,
    c = o + s / 2,
    l = (e, i, a, o, s = 0.85, c = !1, l = !1) =>
      r.push({
        x: t.x0 * 16 + e,
        y: t.y0 * 16 + i,
        r: a,
        color: o,
        a: s,
        flicker: c,
        day: l,
        z: n.name === `window` ? 4 : 34 - i,
      }),
    u = t.seed + n.lx * 7;
  switch (n.name) {
    case `window`: {
      let t = hI[Math.min(3, Math.max(1, n.w))],
        r = t[Math.floor(SA(u, 3, 41) * t.length)],
        a = UF(`in/${r}`);
      if (!a) break;
      let d = 58 - a.c.height;
      if ((pI(e, a, c, Math.max(10, d)), !i)) {
        let t = UF(`in/${r}-sunlight`);
        t && ((e.globalAlpha = 0.85), pI(e, t, c, RF), (e.globalAlpha = 1));
      }
      l(o / IF + s / IF / 2, 38, 40, `#fff1cc`, 0.7, !1, !0);
      return;
    }
    case `rose`:
      (pI(e, UF(`in/windows2-6`), c, 12),
        l(c / IF, 20, 70, DA.crystal, 0.9, !1, !0));
      return;
    case `banner`: {
      let t = _I(n.arg ?? `marizon`);
      t && pI(e, t.e, c, 10, t.c);
      return;
    }
    case `shield`: {
      let t = n.arg === `marizon`,
        r = UF(t ? `in/decor-shields-3` : `in/decor-shields-0`);
      if (!r) return;
      let i = vI.get(n.arg ?? ``);
      (i ||
        ((i = t
          ? ag([r.c], DA.field, (e, t, n) => ig(e, t, n)[1] > 0.25)[0]
          : r.c),
        vI.set(n.arg ?? ``, i)),
        pI(e, r, c, 16, i));
      return;
    }
    case `portrait`:
      pI(e, UF(`in/decors-paintings-0`), c, 12);
      return;
    case `tools`:
      pI(e, UF(`in/decors-weapon2-8`), c, 14);
      return;
    case `sconce`:
      (pI(e, UF(`in/candlesticks-12`), o + 16, 18),
        l(o / IF + 8, 10, 44, `#ffc46a`, 0.9, !0));
      return;
    case `hang`: {
      let t = UF(`in/shelves-7`),
        r = Math.max(1, Math.round(s / 48));
      for (let n = 0; n < r; n++) pI(e, t, o + ((n + 0.5) * s) / r, 30);
      let i = {
          bread: [
            `kitchen-props2-27`,
            `kitchen-props2-28`,
            `kitchen-props2-29`,
            `kitchen-props2-10`,
          ],
          herbs: [`pots-1`, `pots-7`, `pots-11`, `pots-4`],
          rope: [`supply-bags-11`, `supply-bags-13`, `supply-bags-15`],
          tapers: [`candlestickss-0`, `candlestickss-2`, `candlestickss-4`],
          lanterns: [`candlesticks-12`, `candlesticks-14`],
        },
        a = i[n.arg ?? `herbs`] ?? i.herbs;
      for (let t = 0, r = o + 10; r < o + s - 8; r += 14, t++) {
        let i = UF(`in/${a[t % a.length]}`);
        (mI(e, i, r, 32),
          n.arg === `lanterns` &&
            i &&
            l(r / IF, 32 / IF - 6, 18, `#ffd98a`, 0.8, !0));
      }
      return;
    }
  }
  let d = a(n);
  d &&
    ((e.imageSmoothingEnabled = !1),
    e.drawImage(
      d,
      Math.max(0, n.lx * 16 - 4),
      0,
      n.w * 16 + 8,
      32,
      Math.max(0, o - 8),
      0,
      s + 16,
      RF,
    ));
}
function bI(e, t, n, r) {
  return [`window`, `portrait`, `banner`, `sconce`, `shield`].includes(n.name)
    ? (yI(e, t, n, r, !1, () => null), !0)
    : !1;
}
