// index-BTsv3a2s 146 — math
// Lines 87355-87693 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var pR = aR.attack.hit / aR.attack.fps,
  mR = aR.attack.n / aR.attack.fps,
  hR = {
    watchman: [
      [`#2c303d`, `#29292d`],
      [`#474e60`, `#3f3e44`],
      [`#6b7484`, `#5b595f`],
      [`#959eac`, `#79767a`],
      [`#c3cad3`, `#9b9899`],
      [`#eef1f3`, `#bbb7b4`],
      [`#4f1412`, `#2c201b`],
      [`#86221d`, `#46332a`],
      [`#bb3321`, `#654634`],
      [`#e05838`, `#8a6244`],
      [`#f49464`, `#a87e57`],
      [`#121a30`, `#171b26`],
      [`#1d2a4b`, `#252c3d`],
      [`#2a3f6b`, `#36405a`],
      [`#3a5688`, `#4c5875`],
      [`#5674a8`, `#6a7792`],
      [`#5e3f17`, `#3f3e44`],
      [`#a87a2c`, `#5b595f`],
      [`#e0b64a`, `#79767a`],
      [`#f6dc8c`, `#9b9899`],
    ],
    guard: [
      [`#4f1412`, `#141f3f`],
      [`#86221d`, `#1f3262`],
      [`#bb3321`, `#2e4a8a`],
      [`#e05838`, `#4467b0`],
      [`#f49464`, `#6c8bcb`],
      [`#5e3f17`, `#474e60`],
      [`#a87a2c`, `#6b7484`],
      [`#e0b64a`, `#959eac`],
      [`#f6dc8c`, `#c3cad3`],
    ],
    sergeant: [
      [`#4f1412`, `#6a6863`],
      [`#86221d`, `#99968e`],
      [`#bb3321`, `#c7c3b9`],
      [`#e05838`, `#e5e1d6`],
      [`#f49464`, `#faf7ef`],
      [`#5e3f17`, `#55411f`],
      [`#a87a2c`, `#8c6c32`],
      [`#e0b64a`, `#b8944a`],
      [`#f6dc8c`, `#dabf7d`],
    ],
    captain: [],
    vigilant: [
      [`#2c303d`, `#1b1c23`],
      [`#474e60`, `#2a2c37`],
      [`#6b7484`, `#3c3f4f`],
      [`#959eac`, `#545a6b`],
      [`#c3cad3`, `#798093`],
      [`#eef1f3`, `#a8aebd`],
      [`#4f1412`, `#131115`],
      [`#86221d`, `#211e24`],
      [`#bb3321`, `#332f39`],
      [`#e05838`, `#494451`],
      [`#f49464`, `#676171`],
      [`#121a30`, `#0c1125`],
      [`#1d2a4b`, `#15203f`],
      [`#2a3f6b`, `#203361`],
      [`#3a5688`, `#2f4a85`],
      [`#5674a8`, `#4a67a3`],
    ],
  },
  gR = {
    grizzled: [],
    black: [
      [`#2f2b2a`, `#1b1818`],
      [`#4d4845`, `#2a2424`],
      [`#6e6863`, `#3c3332`],
      [`#938c86`, `#554a47`],
    ],
    brown: [
      [`#2f2b2a`, `#2a1d16`],
      [`#4d4845`, `#46301f`],
      [`#6e6863`, `#6a4a30`],
      [`#938c86`, `#8d6644`],
    ],
    auburn: [
      [`#2f2b2a`, `#391c14`],
      [`#4d4845`, `#61301f`],
      [`#6e6863`, `#8a4a2e`],
      [`#938c86`, `#b0683e`],
    ],
    fair: [
      [`#2f2b2a`, `#6a5432`],
      [`#4d4845`, `#9a7d4a`],
      [`#6e6863`, `#c7a864`],
      [`#938c86`, `#e5cc8b`],
    ],
  },
  _R = [
    [],
    [
      [`#e4ad6d`, `#d1a96a`],
      [`#d18d5f`, `#c08a5c`],
      [`#a77453`, `#997250`],
      [`#7c5543`, `#725341`],
    ],
    [
      [`#e4ad6d`, `#af8b57`],
      [`#d18d5f`, `#a0714c`],
      [`#a77453`, `#805d42`],
      [`#7c5543`, `#5f4436`],
    ],
    [
      [`#e4ad6d`, `#785637`],
      [`#d18d5f`, `#6e4630`],
      [`#a77453`, `#583a2a`],
      [`#7c5543`, `#412a22`],
    ],
  ],
  vR = [`#c0685a`, `#d18d5f`],
  yR = (e) => `${e.rank}/${e.tone ?? 0}/${e.hair ?? `grizzled`}/${+!!e.scar}`,
  bR = (e) => `watch:${yR(e)}`;
function xR(e) {
  if (!e.startsWith(`watch:`)) return null;
  let [t, n, r, i] = e.slice(6).split(`/`);
  return t in hR
    ? {
        rank: t,
        tone: Number(n) || 0,
        hair: r in gR ? r : `grizzled`,
        scar: i === `1`,
      }
    : null;
}
var SR = (e) => {
  let [t, n, r] = Lp(e);
  return (t << 16) | (n << 8) | r;
};
function CR(e) {
  let t = new Map(),
    n = (e) => {
      for (let [n, r] of e) t.set(SR(n), SR(r));
    };
  (n(hR[e.rank]),
    n(gR[e.hair ?? `grizzled`]),
    e.scar || t.set(SR(vR[0]), SR(vR[1])));
  let r = new Map();
  for (let [t, n] of _R[e.tone ?? 0] ?? []) r.set(SR(t), SR(n));
  for (let [e, n] of t) {
    let i = r.get(n);
    i !== void 0 && t.set(e, i);
  }
  for (let [e, n] of r) t.has(e) || t.set(e, n);
  return t;
}
var wR = new Map(),
  TR = new Map();
function ER(e) {
  let t = uR();
  if (!t) return null;
  let n = yR(e),
    r = wR.get(n);
  if (r) return r;
  let [i, a] = M(t.width, t.height);
  a.drawImage(t, 0, 0);
  let o = CR(e);
  if (o.size) {
    let e = a.getImageData(0, 0, i.width, i.height),
      t = e.data;
    for (let e = 0; e < t.length; e += 4) {
      if (!t[e + 3]) continue;
      let n = o.get((t[e] << 16) | (t[e + 1] << 8) | t[e + 2]);
      n !== void 0 &&
        ((t[e] = n >> 16), (t[e + 1] = (n >> 8) & 255), (t[e + 2] = n & 255));
    }
    a.putImageData(e, 0, 0);
  }
  return (wR.set(n, (r = i)), r);
}
function DR(e, t) {
  let n = `${yR(e)}:${t}`,
    r = TR.get(n);
  if (r) return r;
  let i = ER(e);
  if (!i) return null;
  let a = dR(i, t);
  return (TR.set(n, a), a);
}
var OR = new Map();
function kR(e) {
  let t = yR(e),
    n = OR.get(t);
  if (n) return n;
  let r = (t) => {
      let n = DR(e, t);
      return n && { ...n };
    },
    i = r(`idle`);
  if (!i) return null;
  let a = {
    idle: i,
    walk: r(`walk`),
    work: null,
    rest: 0,
    shadow: !1,
    attack: r(`attack`),
    death: r(`death`),
    cast: r(`cast`),
  };
  return (OR.set(t, a), a);
}
var AR = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ],
  jR = [24, 24, 24, 255];
function MR(e, t, n) {
  let r = e.width,
    i = e.height,
    a = e.data,
    o = Math.ceil(n * t),
    s = o + Math.ceil((r - n) * t),
    c = Math.ceil(i * t),
    l = new Int32Array(s),
    u = new Int32Array(c);
  for (let e = 0; e < s; e++)
    l[e] =
      e >= o
        ? n + Math.floor((e - o + 0.5) / t)
        : n - 1 - Math.floor((o - 1 - e + 0.5) / t);
  for (let e = 0; e < c; e++) u[e] = Math.floor((e + 0.5) / t);
  let d = (e, t) => (l[e] >= 0 && l[e] < r && u[t] < i ? u[t] * r + l[e] : -1),
    f = (e, t) =>
      e >= 0 && t >= 0 && e < r && t < i && a[(t * r + e) * 4 + 3] >= 128,
    p = new Uint8Array(r * i),
    m = new Uint8Array(r * i);
  for (let e = 0; e < i; e++)
    for (let t = 0; t < r; t++) {
      if (!f(t, e)) continue;
      let n = AR.some(([n, r]) => !f(t + n, e + r));
      (n ? p : m)[e * r + t] = 1;
    }
  let h = new Int32Array(r * i).fill(-1),
    g = [];
  for (let e = 0; e < r * i; e++) {
    if (h[e] >= 0 || !(p[e] || m[e])) continue;
    let t = g.length,
      n = !1,
      i = [e];
    for (h[e] = t; i.length;) {
      let e = i.pop();
      n ||= m[e] === 1;
      let a = e % r,
        o = (e - a) / r;
      for (let e = -1; e <= 1; e++)
        for (let n = -1; n <= 1; n++) {
          let s = (o + e) * r + a + n;
          f(a + n, o + e) && h[s] < 0 && ((h[s] = t), i.push(s));
        }
    }
    g.push(n);
  }
  let _ = (e) => {
      if (p[e] !== 1 || !g[h[e]]) return !1;
      let t = e % r,
        n = (e - t) / r;
      return !AR.some(
        ([e, i]) => f(t + e, n + i) && m[(n + i) * r + t + e] === 1,
      );
    },
    v = new ImageData(s, c),
    y = v.data,
    b = new Uint8Array(s * c),
    x = (e, t, n, r = 0) => {
      let i = (t * s + e) * 4;
      ((y[i] = n[r]),
        (y[i + 1] = n[r + 1]),
        (y[i + 2] = n[r + 2]),
        (y[i + 3] = n[r + 3]));
    };
  for (let e = 0; e < c; e++)
    for (let t = 0; t < s; t++) {
      let n = d(t, e);
      n < 0 || !m[n] || ((b[e * s + t] = 1), x(t, e, a, n * 4));
    }
  for (let e = 0; e < c; e++)
    for (let t = 0; t < s; t++) {
      if (
        b[e * s + t] ||
        !AR.some(
          ([n, r]) =>
            t + n >= 0 &&
            e + r >= 0 &&
            t + n < s &&
            e + r < c &&
            b[(e + r) * s + t + n],
        )
      )
        continue;
      let n = Math.min(r - 1, Math.max(0, l[t])),
        o = Math.min(i - 1, u[e]),
        d = -1,
        f = 1 / 0;
      for (let e = 0; e <= 2 && d < 0; e++)
        for (let t = o - e; t <= o + e; t++)
          for (let a = n - e; a <= n + e; a++) {
            if (a < 0 || t < 0 || a >= r || t >= i || !p[t * r + a]) continue;
            let e = (a - n) ** 2 + (t - o) ** 2;
            e < f && ((f = e), (d = (t * r + a) * 4));
          }
      d >= 0 ? x(t, e, a, d) : x(t, e, jR);
    }
  for (let e = 0; e < c; e++)
    for (let t = 0; t < s; t++) {
      let n = d(t, e);
      n >= 0 && y[(e * s + t) * 4 + 3] === 0 && _(n) && x(t, e, a, n * 4);
    }
  return { img: v, cx: o };
}
var NR = 4 / 3;
function PR(e) {
  return Math.round(e * NR);
}
var FR = new WeakMap();
function IR(e, t, n, r, i, a) {
  let o = FR.get(t);
  if (!o) {
    let e = Ap(t),
      n = MR(
        t.getContext(`2d`).getImageData(0, 0, t.width, t.height),
        NR,
        Math.round(i * e),
      ),
      [r, s] = M(n.img.width, n.img.height);
    (s.putImageData(n.img, 0, 0),
      (o = { c: jp(r, e), ax: n.cx / e, ay: Math.ceil(a * e * NR - 0.5) / e }),
      FR.set(t, o));
  }
  Pp(e, o.c, Math.round(n - o.ax), Math.round(r - o.ay));
}
var LR = 2;
