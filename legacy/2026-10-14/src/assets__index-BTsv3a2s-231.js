// assets__index-BTsv3a2s 231 — floor
// Lines 146768-147115 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function C6(e, t, n) {
  let r = S6(e);
  if (!r) return null;
  let i = rse(e, r.rise);
  if (t.width !== i.w || t.height !== i.h) return null;
  let a = e.tx * x6,
    o = (e.ty + e.h) * x6;
  return {
    x0: a + r.bx,
    x1: a + r.bx + r.bw,
    y0: o - r.d - 1,
    y1: o,
    h: r.z,
    texX: n.x,
    texY: n.y,
  };
}
var w6 = new WeakMap();
function ise(e, t) {
  let n = w6.get(t);
  if (n === void 0) {
    let r = T6(e);
    try {
      n = !!r && t.getContext(`2d`).getImageData(r.x, r.y, 1, 1).data[3] >= 128;
    } catch {
      n = !1;
    }
    w6.set(t, n);
  }
  return n;
}
function T6(e) {
  let t = S6(e);
  if (!t) return null;
  let n = e.h * x6 + t.rise;
  return { x: 1 + t.bx + Math.floor(t.bw / 2), y: n - 1 };
}
var E6 = 7178,
  D6 = {
    bedstead: `bed`,
    trunk: `trunk`,
    bookshelf: `bookshelf`,
    wardrobe: `wardrobe`,
    stove: `stove`,
    table: `table`,
    longtable: `longtable`,
    desk: `desk`,
    chair: `chair`,
    stool: `stool`,
    fireplace: `fireplace`,
    candles: `candles`,
    plant: `plant`,
    globe: `globe`,
    lectern: `lectern`,
    armor: `armor`,
    barrel: `barrel`,
    kegs: `kegs`,
    shelf: `shelf`,
    rugSmall: `rug`,
    rug: `rug`,
    rugLarge: `rug`,
    window: `window`,
    portrait: `portrait`,
    banner: `banner`,
    sconce: `sconce`,
    shield: `shield`,
  };
function ase(e) {
  return D6[e];
}
var ose = { stove: `oven` };
function O6() {
  return WF() ? `epic` : `own`;
}
var k6 = (e) => (e === `epic` ? 2 : 1);
function A6(e, t, n, r, i, a, o, s, c, l) {
  let u = Ap(t);
  e.drawImage(t, n * u, r * u, i * u, a * u, o, s, c, l);
}
var j6 = new Map();
function M6(e) {
  let t = O6(),
    n = `${t}:${e}`,
    r = j6.get(n);
  if (!r) {
    let i = t === `epic` ? iI(e) : null;
    if (i) {
      let [e, t] = M(Ht.w * 16 * 2, Ht.h * 16 * 2);
      (aI(t, i, 0, 0, e.width, e.height), (r = jp(e, 2)));
    } else {
      let [t, n] = M(Ht.w * 16, Ht.h * 16);
      (WI(n, { floor: e, w: Ht.w, h: Ht.h, seed: E6 }), (r = t));
    }
    j6.set(n, r);
  }
  return r;
}
var N6 = new Map();
function P6(e) {
  let t = O6(),
    n = `${t}:${e}`,
    r = N6.get(n);
  if (!r) {
    let i = t === `epic` ? $F(e) : null;
    if (i) {
      let [e, t] = M(Ht.w * 16 * 2, 64);
      for (let n = 0; n < e.width; n += i.width) t.drawImage(i, n, 0);
      r = jp(e, 2);
    } else {
      let [t, n] = M(Ht.w * 16, 32);
      (KI(n, { wall: e, w: Ht.w, seed: E6 }), (r = t));
    }
    N6.set(n, r);
  }
  return r;
}
function sse(e, t) {
  let n = P6(e),
    r = Ap(n),
    [i, a] = M(t * 16 * r, 32 * r);
  for (let e = 0; e < i.width; e += n.width) a.drawImage(n, e, 0);
  return jp(i, r);
}
function cse(e, t, n) {
  for (let [r, i] of [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]) {
    let a = Xt(nn(e, t + r, n + i));
    if (a) return a;
  }
  return `planks`;
}
var F6 = (e) => !!Zt(e),
  I6 = (e, t, n) => F6(nn(e, t - 1, n)) || F6(nn(e, t + 1, n));
function L6(e, t, n) {
  let r = nn(e, t, n);
  return !!Xt(r) || (r === `+` && I6(e, t, n));
}
function lse(e, t, n, r) {
  let i = nn(t, n, r),
    a = n * 16,
    o = r * 16,
    s = Xt(i) ?? (i === `+` || i === `X` ? cse(t, n, r) : null);
  if (s) {
    if ((A6(e, M6(s), a, o, 16, 16, a, o, 16, 16), F6(nn(t, n, r - 1))))
      for (let t = 0; t < 6; t++)
        N(e, a, o + t, `rgba(12,6,24,${0.32 - t * 0.05})`, 16, 1);
    if (F6(nn(t, n - 1, r)))
      for (let t = 0; t < 4; t++)
        N(e, a + t, o, `rgba(12,6,24,${0.25 - t * 0.06})`, 1, 16);
    if (F6(nn(t, n + 1, r)))
      for (let t = 0; t < 4; t++)
        N(e, a + 16 - 1 - t, o, `rgba(12,6,24,${0.25 - t * 0.06})`, 1, 16);
  }
  if (i === `+`) {
    if (I6(t, n, r)) {
      let i = nn(t, n, r - 1),
        s = nn(t, n, r + 1);
      N(e, a + 2, o, J.dk, 12, 16);
      for (let t = a + 3; t < a + 16 - 3; t += 3) N(e, t, o, J.st, 2, 16);
      ((F6(i) || i === `+`) && N(e, a + 2, o, `rgba(12,6,24,0.28)`, 12, 16),
        N(e, a, o, J.mid, 2, 16),
        N(e, a + 16 - 2, o, J.mid, 2, 16),
        N(e, a + 1, o, J.lt, 1, 16),
        N(e, a + 16 - 2, o, J.lt, 1, 16));
      for (let t = 0; t < 3; t++)
        (N(e, a + 2 + t, o, `rgba(12,6,24,${0.3 - t * 0.09})`, 1, 16),
          N(e, a + 16 - 3 - t, o, `rgba(12,6,24,${0.3 - t * 0.09})`, 1, 16));
      (s !== `+` && N(e, a + 2, o + 16 - 2, J.dk, 12, 2),
        i !== `+` &&
          !F6(i) &&
          (N(e, a, o, zI, 16, 3), N(e, a, o + 2, BI, 16, 1)));
    } else
      (N(e, a, o, zI, 16, 3),
        N(e, a, o + 16 - 3, zI, 16, 3),
        N(e, a, o + 2, BI, 16, 1),
        N(e, a + 2, o + 4, J.dk, 1, 8),
        N(e, a + 16 - 3, o + 4, J.dk, 1, 8));
    return;
  }
  if (i === `X`) {
    (N(e, a, o, RI, 16, 16),
      N(e, a + 1, o, `#8c8698`, 14, 6),
      N(e, a + 1, o, `#b9b3c7`, 14, 1),
      N(e, a + 1, o + 6, `#3b3548`, 14, 10));
    for (let t = 0; t < 8; t++)
      N(e, a + 1, o + 6 + t, `rgba(255,236,190,${0.35 - t * 0.04})`, 14, 1);
    (N(e, a - 1, o, zI, 2, 6),
      N(e, a + 16 - 1, o, zI, 2, 6),
      N(e, a + 2, o - 9, `#6b3a2a`, 12, 8),
      N(e, a + 3, o - 8, `#8e4a34`, 10, 6));
    for (let t = a + 4; t < a + 16 - 3; t += 3) N(e, t, o - 7, `#a8603f`, 1, 4);
    return;
  }
  let c = Zt(i);
  if (!c) return;
  let l = nn(t, n, r + 1),
    u = nn(t, n, r - 1);
  if (L6(t, n, r + 1))
    (A6(e, P6(c), a, 16, 16, 16, a, o, 16, 16),
      F6(u) || (N(e, a, o, zI, 16, 4), N(e, a, o + 3, BI, 16, 1)));
  else if (F6(l) && L6(t, n, r + 2)) A6(e, P6(c), a, 0, 16, 16, a, o, 16, 16);
  else {
    N(e, a, o, zI, 16, 16);
    let i = (e) => Qt(e) || e === `X`;
    (i(nn(t, n - 1, r)) && N(e, a, o, BI, 1, 16),
      i(nn(t, n + 1, r)) && N(e, a + 16 - 1, o, BI, 1, 16),
      i(u) && N(e, a, o, BI, 16, 1),
      !F6(l) && !i(l) && N(e, a, o + 16 - 1, RI, 16, 1));
  }
}
function use(e, t, n, r) {
  let i = Xt(t);
  if (i) {
    A6(e, M6(i), 0, 0, 16, 16, n, r, 16, 16);
    return;
  }
  let a = Zt(t);
  if (a) {
    (A6(e, P6(a), 0, 16, 16, 16, n, r, 16, 16),
      N(e, n, r, zI, 16, 4),
      N(e, n, r + 3, BI, 16, 1));
    return;
  }
  if (t === `+`) {
    (N(e, n, r, J.mid, 16, 16),
      N(e, n + 2, r, `#1b1426`, 12, 16),
      N(e, n, r, J.lt, 1, 16),
      N(e, n + 16 - 1, r, J.lt, 1, 16));
    return;
  }
  N(e, n, r, RI, 16, 16);
  for (let t = 2; t < 14; t++)
    (N(e, n + t, r + t, `#ff5a6a`), N(e, n + 16 - 1 - t, r + t, `#ff5a6a`));
}
var R6 = null;
function dse(e, t) {
  let n = O6(),
    r = t.items
      .filter((e) => un[e.kind]?.layer !== `stand`)
      .map((e) => [e.kind, e.x, e.y, e.arg ?? ``]),
    i = `${n}|${e.x0},${e.y0}|${t.tiles}|${JSON.stringify(r)}`;
  if (R6?.key === i) return R6.art;
  let a = k6(n),
    [o, s] = M(e.w * 16 * a, e.h * 16 * a);
  ((s.imageSmoothingEnabled = !1),
    (s.fillStyle = RI),
    s.fillRect(0, 0, o.width, o.height),
    s.scale(a, a));
  for (let e = 0; e < Ht.h; e++) for (let n = 0; n < Ht.w; n++) lse(s, t, n, e);
  let c = [];
  for (let r of t.items) {
    let t = un[r.kind];
    if (!t) continue;
    let i = r.arg ?? t.args?.[0] ?? `#7a2f2a`;
    if ((s.save(), t.layer === `floor`))
      n === `epic`
        ? (s.setTransform(1, 0, 0, 1, 0, 0),
          dI(s, { lx: r.x, ly: r.y, w: t.w, h: t.h, color: i }))
        : JI(s, { lx: r.x, ly: r.y, w: t.w, h: t.h, color: i });
    else if (t.layer === `wall`) {
      let i = {
          x0: e.x0 + r.x,
          y0: e.y0 + r.y - 1,
          seed: e.seed + r.x * 7 + r.y * 13,
        },
        o = { name: D6[r.kind], arg: r.arg || void 0, lx: 0, w: t.w };
      (s.setTransform(1, 0, 0, 1, r.x * 16 * a, (r.y - 1) * 16 * a),
        (n !== `epic` || !bI(s, i, o, c)) && (s.scale(a, a), YI(s, i, o, c)));
    }
    s.restore();
  }
  let l = { base: jp(o, a), lights: c };
  return ((R6 = { key: i, art: l }), l);
}
function fse() {
  return ZI(2, 1, 28, (e, t, n) => {
    (QI(e, 1, n, t - 2, 6, 36, `#6b4424`, `#5a3a22`),
      N(e, 0, n - 42, `#8a5a34`, t, 3),
      N(e, 0, n - 42, `#a8744a`, t, 1),
      N(e, Math.floor(t / 2), n - 33, `#3d2716`, 1, 31));
    for (let r of [4, Math.floor(t / 2) + 3])
      (N(e, r, n - 30, `#7a4f2e`, Math.floor(t / 2) - 7, 24),
        N(e, r, n - 30, `#8a5a34`, Math.floor(t / 2) - 7, 1));
    (N(e, Math.floor(t / 2) - 3, n - 19, `#e0b64a`, 2, 3),
      N(e, Math.floor(t / 2) + 2, n - 19, `#e0b64a`, 2, 3),
      N(e, 2, n - 2, `#3d2716`, 3, 2),
      N(e, t - 5, n - 2, `#3d2716`, 3, 2));
  });
}
function pse() {
  return ZI(1, 1, 18, (e, t, n, r) => {
    (N(e, 9, n - 34, `#2b2633`, 3, 16),
      N(e, 9, n - 34, `#4a4458`, 1, 16),
      N(e, 8, n - 34, `#2b2633`, 5, 2),
      QI(e, 1, n, t - 2, 5, 13, `#3b3548`, `#2b2633`),
      N(e, 4, n - 10, `#1b1426`, 8, 7),
      N(e, 5, n - 9, `#ff8a3a`, 6, 5),
      N(e, 6, n - 7, `#ffd166`, 4, 3));
    for (let t = 5; t < 11; t += 2) N(e, t, n - 9, `#1b1426`, 1, 5);
    (N(e, 2, n - 1, `#1b1426`, 2, 1),
      N(e, t - 4, n - 1, `#1b1426`, 2, 1),
      N(e, 2, n - 22, `#6f7580`, 6, 4),
      N(e, 2, n - 22, `#8c8698`, 6, 1),
      N(e, 1, n - 21, `#6f7580`, 1, 2),
      r(8, n - 6, 30, `#ff9a4a`, 0.8, !0));
  });
}
var z6 = new Map();
function B6(e, t, n) {
  let r = un[e],
    i = `${e}:${t ?? ``}:${e === `plant` ? n % 6 : 0}`,
    a = z6.get(i);
  return (
    a ||
      ((a =
        e === `wardrobe`
          ? fse()
          : e === `stove`
            ? pse()
            : BL(D6[e], r.w, r.h, t || void 0, n)),
      z6.set(i, a)),
    a
  );
}
function mse(e, t, n, r, i) {
  let a = un[t];
  return {
    name: ose[t] ?? D6[t],
    arg: i || void 0,
    tx: e.x0 + n,
    ty: e.y0 + r,
    w: a.w,
    h: a.h,
    blocks: !0,
  };
}
var hse = { id: `icon`, x0: -8, y0: 0, w: 32, h: 32, seed: E6, furniture: [] },
  V6 = new Map();
function H6(e, t, n, r, i, a) {
  let o = `${e.id}:${t}:${i ?? ``}:${n},${r}:${a}`;
  if (V6.has(o)) return V6.get(o);
  let s = LI(e, mse(e, t, n, r, i), a);
  return (V6.set(o, s), s);
}
