// index-BTsv3a2s 135 — math
// Lines 83909-84228 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var XP = `#140d0a`,
  ZP = { x: 3, y: 12, w: 38, h: 17 };
function QP() {
  return oM() && uj();
}
var $P = [
  [0, 1, 2, 3, 4].map((e) => `gl/items-flowers1-${e}`),
  [0, 1, 2, 3].map((e) => `gl/items-flowers2-${e}`),
  [0, 1, 2, 3, 4, 5].map((e) => `gl/items-flowers3-${e}`),
  [0, 1, 2, 3, 4, 5].map((e) => `gl/items-flowers5-${e}`),
  [0, 1, 2, 3, 4, 5].map((e) => `gl/items-flowers6-${e}`),
];
function eF(e, t, n) {
  let r =
    $P[Math.floor(iF(Math.floor(e / 5), Math.floor(t / 5), 63) * $P.length)];
  return r[Math.floor(n * r.length)];
}
function tF(e, t, n) {
  return rF(e, t, n) === A.Path ? ej.Dirt1 : ej.Grass;
}
function nF(e, t, n, r, i, a, o) {
  let s = n * 32,
    c = r * 32,
    [l, u] = M(s, c),
    d = u.createImageData(s, c),
    f = new Uint32Array(d.data.buffer);
  for (let l = t; l <= t + r; l++)
    for (let r = e; r <= e + n; r++) {
      let n = Wj(
          tF(r - 1, l - 1, o),
          tF(r, l - 1, o),
          tF(r, l, o),
          tF(r - 1, l, o),
          i + r,
          a + l,
        ),
        u = (r - e) * 32 - 16,
        d = (l - t) * 32 - 16;
      for (let e = Math.max(0, d); e < Math.min(c, d + 32); e++) {
        let t = (e - d) * 32 + Math.max(0, u) - u,
          r = e * s + Math.max(0, u);
        for (let e = Math.max(0, u); e < Math.min(s, u + 32); e++)
          f[r++] = n[t++];
      }
    }
  (u.putImageData(d, 0, 0), (u.imageSmoothingEnabled = !1));
  for (let i = t; i < t + r; i++)
    for (let r = e; r < e + n; r++) {
      let n = iF(r, i, 701),
        a = iF(r, i, 702),
        s = null,
        c = rF(r, i, o);
      c === A.Flowers && n < 0.75
        ? (s = eF(r, i, a))
        : c !== A.Path &&
          n <
            ([
              rF(r + 1, i, o),
              rF(r - 1, i, o),
              rF(r, i + 1, o),
              rF(r, i - 1, o),
            ].includes(A.Path)
              ? 0.28
              : 0.04) &&
          (s = `gl/grass-tufts-${Math.floor(a * 32)}`);
      let l = s ? sM(s) : null;
      if (!l) continue;
      let d = Math.round((iF(r, i, 703) - 0.5) * 8),
        f = Math.round((iF(r, i, 704) - 0.5) * 6);
      u.drawImage(
        l.c,
        ((r - e) * 16 + 8 + d - l.ax) * 2,
        ((i - t) * 16 + 13 + f - l.ay) * 2,
      );
    }
  return jp(l, 2);
}
function rF(e, t, n = !1) {
  let r = Dt.path;
  if (
    (e >= r.x && e < r.x + r.w && t >= r.y0 && (t <= r.y1 || n)) ||
    (t >= Dt.door.y &&
      t <= Dt.door.y + 1 &&
      e >= Dt.cottage.x - 1 &&
      e <= Dt.cottage.x + Dt.cottage.w)
  )
    return A.Path;
  let i = ZP;
  return (e < i.x || e >= i.x + i.w || t < i.y || t >= i.y + i.h) &&
    iF(e, t, 5) < 0.18
    ? A.Flowers
    : A.Grass;
}
function iF(e, t, n) {
  let r = (e * 374761393 + t * 668265263 + n * 144269504) | 0;
  return (
    (r = Math.imul(r ^ (r >>> 13), 1274126177)),
    (r ^= r >>> 16),
    (r >>> 0) / 4294967296
  );
}
function aF(e, t, n) {
  return e.cells[n * e.w + t] === On.WALL ? n === 0 || n === e.h - 1 : null;
}
var oF = 160,
  sF = 64,
  cF = 160,
  lF = 24,
  uF = new Map();
function dF(e, t) {
  let n = !!t?.hd,
    r = !!bA(`tree01`),
    i = QP(),
    a = `${e.id}:${r}:${i}${n ? `:hd` : ``}`,
    o = uF.get(a);
  if (o) return o;
  let s = e.w * 16,
    c = e.h * 16,
    l,
    u;
  if (i)
    ((l = nF(0, 0, e.w, e.h, e.x0, e.y0, n)),
      (u = l.getContext(`2d`)),
      u.scale(2, 2));
  else {
    [l, u] = M(s, c);
    let t = u.createImageData(s, c);
    for (let r = 0; r < c; r++)
      for (let i = 0; i < s; i++) {
        let a = sP(
            rF(Math.floor(i / 16), Math.floor(r / 16), n),
            e.x0 * 16 + i,
            e.y0 * 16 + r,
          ),
          o = (r * s + i) * 4;
        ((t.data[o] = a >> 16),
          (t.data[o + 1] = (a >> 8) & 255),
          (t.data[o + 2] = a & 255),
          (t.data[o + 3] = 255));
      }
    u.putImageData(t, 0, 0);
  }
  for (let e of [1, 2]) {
    let t = Ot[e].claim;
    for (let [n, r] of [
      [t.x, t.y],
      [t.x + t.w, t.y],
      [t.x, t.y + t.h],
      [t.x + t.w, t.y + t.h],
    ])
      (N(u, n * 16 - 1, r * 16 - 6, `#6b4424`, 2, 6),
        N(u, n * 16 - 1, r * 16 - 6, [`#e6d8bc`, `#ffd166`][e - 1], 2, 2));
  }
  let d = [],
    f = [],
    p = CF(!0),
    m = CF(!1);
  for (let t = 0; t < e.h; t++)
    for (let r = 0; r < e.w; r++) {
      let i = aF(e, r, t);
      if (i === null) continue;
      let a = i ? p : m,
        o = r * 16 + 8 - a.ax,
        s = t * 16 + 14;
      if (t === e.h - 1 || n) {
        let c = t === e.h - 1 ? `home-fence-${r}` : `home-fence-${r}-${t}`;
        d.push({
          key: c,
          kind: `fence`,
          c: a.c,
          x: e.x0 * 16 + o,
          y: e.y0 * 16 + s - a.ay,
          baseY: e.y0 * 16 + s,
          tx: e.x0 + r,
          ty: e.y0 + t,
          ...(n && !i ? { run: `ns` } : {}),
        });
      } else Pp(u, a.c, o, s - a.ay);
    }
  (e.furniture.forEach((e) => {
    let t = e.tx * 16,
      r = (e.ty + e.h) * 16;
    if (e.name === `cottage`) {
      let i = {
          ...WM(7),
          w: e.w,
          h: e.h,
          roof: it.brown,
          door: 0.5,
          chimney: !0,
          boxes: !0,
        },
        a = dM({ ...i, pack: Dt.cottage.pack }) ?? MM(i) ?? UA(i),
        o = t + Math.round((e.w * 16 - Mp(a.c)) / 2);
      d.push({
        key: `home-cottage`,
        kind: `building`,
        c: a.c,
        x: o,
        y: r - a.ay,
        baseY: r,
        tx: e.tx,
        ty: e.ty,
        lights: a.lights,
        ...(n ? { fold: a.fold } : {}),
      });
      for (let e of a.lights ?? []) {
        let t = r - a.ay + e.y;
        f.push({
          x: o + e.x,
          y: t,
          r: e.r,
          color: e.color,
          a: e.a ?? 0.8,
          flicker: !0,
          ...(n ? { z: r - 1 - t } : {}),
        });
      }
      return;
    }
    if (e.name === `well`) {
      let n = sM(`gl/well`),
        i = n ? { c: n.c, ax: n.ax, ay: n.ay } : rN(),
        a = n
          ? Math.round(t + (e.w * 16) / 2 - n.ax)
          : t + Math.round((e.w * 16 - i.c.width) / 2);
      d.push({
        key: `home-well`,
        kind: `prop`,
        c: i.c,
        x: a,
        y: r - i.ay,
        baseY: r,
        tx: e.tx,
        ty: e.ty,
      });
      return;
    }
    if (e.name === `basket`) {
      let n = sM(`prop/grain-crate-0`),
        r = bA(`crate02`),
        i = n
          ? { c: n.c, ax: n.ax, ay: n.ay }
          : r
            ? { c: r.c, ax: r.ax, ay: r.ay }
            : cN();
      d.push({
        key: `home-basket`,
        kind: `prop`,
        c: i.c,
        x: t + 8 - i.ax,
        y: e.ty * 16 + 14 - i.ay,
        baseY: e.ty * 16 + 14,
        tx: e.tx,
        ty: e.ty,
      });
    }
  }),
    jp(l, i ? 2 : 1));
  let h = n
    ? { base: l, items: d, lights: f, skirt: i ? fF(e, l) : pF(e, l), key: a }
    : { base: l, items: d, lights: f };
  return (uF.set(a, h), h);
}
function fF(e, t) {
  let n = cF / 16,
    r = oF / 16,
    i = sF / 16,
    a = nF(-n, -r, e.w + 2 * n, e.h + r + i, e.x0, e.y0, !0),
    o = a.getContext(`2d`),
    s = a.width,
    c = a.height,
    l = o.getImageData(0, 0, s, c);
  for (let e = 0; e < c; e++)
    for (let t = 0; t < s; t++) {
      let n = Math.min(t + 1, e + 1, s - t, c - e) / 48;
      n >= 1 ||
        (l.data[(e * s + t) * 4 + 3] = Math.round(255 * n * n * (3 - 2 * n)));
    }
  return (
    o.putImageData(l, 0, 0),
    o.drawImage(t, 320, 320),
    { c: a, x: e.x0 * 16 - cF, y: e.y0 * 16 - oF }
  );
}
function pF(e, t) {
  let n = e.w * 16 + 320,
    r = e.h * 16 + oF + sF,
    i = e.x0 * 16 - cF,
    a = e.y0 * 16 - oF,
    [o, s] = M(n, r),
    c = s.createImageData(n, r);
  for (let t = 0; t < r; t++) {
    let o = t >= oF && t < oF + e.h * 16;
    for (let s = 0; s < n; s++) {
      if (o && s >= cF && s < cF + e.w * 16) continue;
      let l = sP(
          rF(Math.floor((s - cF) / 16), Math.floor((t - oF) / 16), !0),
          i + s,
          a + t,
        ),
        u = Math.min(s + 1, t + 1, n - s, r - t) / lF,
        d = (t * n + s) * 4;
      ((c.data[d] = l >> 16),
        (c.data[d + 1] = (l >> 8) & 255),
        (c.data[d + 2] = l & 255),
        (c.data[d + 3] = u >= 1 ? 255 : Math.round(255 * u * u * (3 - 2 * u))));
    }
  }
  return (
    s.putImageData(c, 0, 0),
    s.drawImage(t, cF, oF),
    { c: o, x: i, y: a }
  );
}
var mF = new Set([`tree`, `pine`]);
function hF(e, t = 0) {
  let n = sM(e[Math.floor(iF(t, 3, 7) * e.length) % e.length]);
  return n ? { c: n.c, ax: n.ax, ay: n.ay } : null;
}
