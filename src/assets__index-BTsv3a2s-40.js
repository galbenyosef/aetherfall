// assets__index-BTsv3a2s 40 — math
// Lines 30596-30903 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var rm = {
    aether: [`#0b2a3a`, `#1a6a8a`, `#3fc6e0`, `#7ef9ff`, `#ffffff`],
    hollow: [`#12050a`, `#3a0a18`, `#861222`, `#e0484e`, `#ffffff`],
    blood: [`#1e0208`, `#5c0614`, `#a3101f`, `#e8283e`, `#ffd6dc`],
    ember: [`#3a0f06`, `#7a1d10`, `#ff7a1a`, `#ffb238`, `#ffe08a`],
    rime: [`#0d1f45`, `#173a78`, `#5cc8ff`, `#8ef6ff`, `#ffffff`],
    storm: [`#1a1240`, `#2e1f66`, `#a8b8ff`, `#fff36b`, `#fffbd1`],
    void: [`#0a0512`, `#140a22`, `#7a2fb8`, `#b84dff`, `#ff9cf5`],
    stone: [`#1e1b24`, `#45404f`, `#6f6a7a`, `#9a95a6`, `#cfcad8`],
    slag: [`#140806`, `#3a1a12`, `#8a2a10`, `#ff7a1a`, `#ffe08a`],
    bone: [`#2a2620`, `#5a5244`, `#a89e88`, `#d8d0c0`, `#ffffff`],
    blight: [`#14200a`, `#2f4a16`, `#5f8f2a`, `#8fd14f`, `#e8ffb0`],
    ward: [`#0a2a30`, `#14606a`, `#36b8c8`, `#7ef9ff`, `#ffffff`],
    gilt: [`#3a2a08`, `#7a5a14`, `#c9a032`, `#ffd98a`, `#fff6d8`],
    ash: [`#141216`, `#2a2630`, `#4a4452`, `#7a7484`, `#b8b2c4`],
  },
  im = { ember: rm.ember, rime: rm.rime, storm: rm.storm, void: rm.void };
function L(e, t = 0, n = 0) {
  let r = Math.sin(e * 127.1 + t * 311.7 + n * 74.7) * 43758.5453;
  return r - Math.floor(r);
}
var am = (e, t = 0, n = 1) => Math.max(t, Math.min(n, e)),
  om = (e, t, n) => e + (t - e) * n,
  sm = (e) => 1 - (1 - e) * (1 - e),
  cm = (e) => e * e,
  lm = new Map();
function R(e, t, n, r, i, a = {}) {
  let o = lm.get(e);
  if (o) return o;
  let s = [];
  for (let e = 0; e < t; e++) {
    let [o, c] = M(n, r);
    (i(c, e, t), a.outline && F(o, a.outline), s.push(o));
  }
  return (lm.set(e, s), s);
}
function um(e, t) {
  let n = Math.ceil(Math.hypot(e.width, e.height)) + 2,
    [r, i] = M(n, n),
    a = e.getContext(`2d`).getImageData(0, 0, e.width, e.height).data,
    o = i.createImageData(n, n),
    s = Math.cos(-t),
    c = Math.sin(-t),
    l = e.width / 2,
    u = e.height / 2;
  for (let t = 0; t < n; t++)
    for (let r = 0; r < n; r++) {
      let i = r + 0.5 - n / 2,
        d = t + 0.5 - n / 2,
        f = Math.floor(l + i * s - d * c),
        p = Math.floor(u + i * c + d * s);
      if (f < 0 || p < 0 || f >= e.width || p >= e.height) continue;
      let m = (p * e.width + f) * 4,
        h = (t * n + r) * 4;
      ((o.data[h] = a[m]),
        (o.data[h + 1] = a[m + 1]),
        (o.data[h + 2] = a[m + 2]),
        (o.data[h + 3] = a[m + 3]));
    }
  return (i.putImageData(o, 0, 0), r);
}
function z(e, t, n, r, i, a, o = 1) {
  let s = Math.max(Math.abs(r - t), Math.abs(i - n), 1),
    c = Math.floor(o / 2);
  for (let l = 0; l <= s; l++)
    N(e, t + ((r - t) * l) / s - c, n + ((i - n) * l) / s - c, a, o, o);
}
function dm(e, t, n, r, i, a, o = 2, s = 2, c = 0) {
  let l = Math.max(Math.abs(r - t), Math.abs(i - n), 1);
  for (let u = 0; u <= l; u++)
    (u + c) % (o + s) >= o ||
      N(e, t + ((r - t) * u) / l, n + ((i - n) * u) / l, a);
}
function fm(e, t, n) {
  e.fillStyle = n;
  let r = t.map((e) => e[1]),
    i = Math.floor(Math.min(...r)),
    a = Math.ceil(Math.max(...r));
  for (let n = i; n <= a; n++) {
    let r = n + 0.5,
      i = [];
    for (let e = 0; e < t.length; e++) {
      let [n, a] = t[e],
        [o, s] = t[(e + 1) % t.length];
      ((a <= r && s > r) || (s <= r && a > r)) &&
        i.push(n + ((r - a) / (s - a)) * (o - n));
    }
    i.sort((e, t) => e - t);
    for (let t = 0; t + 1 < i.length; t += 2) {
      let r = Math.round(i[t]),
        a = Math.round(i[t + 1]);
      a > r && e.fillRect(r, n, a - r, 1);
    }
  }
}
function B(e, t, n, r, i, a, o) {
  let s = Math.max(12, Math.ceil(Math.PI * 2 * Math.max(r, i))),
    c = NaN,
    l = NaN;
  for (let u = 0; u < s; u++) {
    let d = (u / s) * Math.PI * 2,
      f = Math.round(t + Math.cos(d) * r - 0.5),
      p = Math.round(n + Math.sin(d) * i - 0.5);
    (f !== c || p !== l) && ((c = f), (l = p), (!o || o(d)) && N(e, f, p, a));
  }
}
function pm(e, t, n, r, i, a, o) {
  for (let s = Math.floor(n - i / a - 1); s <= Math.ceil(n + i / a + 1); s++)
    for (let c = Math.floor(t - i - 1); c <= Math.ceil(t + i + 1); c++) {
      let l = c + 0.5 - t,
        u = (s + 0.5 - n) * a,
        d = Math.hypot(l, u);
      if (d < r || d > i) continue;
      let f = o((d - r) / Math.max(0.001, i - r), Math.atan2(u, l));
      f && N(e, c, s, f);
    }
}
function mm(e, t, n, r, i, a, o) {
  let s = Math.cos(r),
    c = Math.sin(r),
    l = -c,
    u = s,
    d = [t + s * i * 0.6, n + c * i * 0.6],
    f = [t - s * i * 0.4, n - c * i * 0.4],
    p = [t + l * a * 0.5, n + u * a * 0.5],
    m = [t - l * a * 0.5, n - u * a * 0.5];
  (fm(e, [d, p, f, m], o[1]),
    fm(e, [d, p, [t, n]], o[3]),
    fm(e, [d, [t, n], m], o[2]),
    N(e, d[0] - s, d[1] - c, o[4]));
}
function hm(e, t, n, r, i, a, o) {
  let s = Math.cos(r),
    c = Math.sin(r),
    l = t - s * (i / 2 - a),
    u = n - c * (i / 2 - a);
  (P(e, l, u, a, a, o[2]),
    fm(
      e,
      [
        [t + s * i * 0.5, n + c * i * 0.5],
        [l - c * a, u + s * a],
        [l + c * a, u - s * a],
      ],
      o[2],
    ),
    N(e, l - c * a * 0.5 - s * 0.5, u + s * a * 0.5 - c * 0.5, o[3]),
    N(e, t + s * i * 0.25, n + c * i * 0.25, o[4]));
}
function gm(e, t, n, r, i, a, o, s, c = {}) {
  let l = c.k ?? 1,
    u = Math.hypot(r - t, i - n);
  if (u < 1) return;
  let d = (r - t) / u,
    f = (i - n) / u,
    p = -f,
    m = d,
    h = a * l;
  if (h < 0.5) return;
  let g = [
    [h / 2 + 1, o[0]],
    [h / 2, o[1]],
    [h * 0.36, o[2]],
    [h * 0.2, o[3]],
    [Math.max(0.5, h * 0.08), o[4]],
  ];
  for (let r = 0; r <= u; r += 0.5) {
    let i = c.jitter ? (L(Math.floor(r / 3), s) - 0.5) * c.jitter : 0;
    for (let [a, o] of g) {
      let s = a + i * (a / (h / 2 + 1));
      if (!(s <= 0))
        for (let i = -s; i <= s; i += 0.5)
          N(e, t + d * r + p * i, n + f * r + m * i, o);
    }
  }
  if (c.facets && h >= 2) {
    let r = c.facets;
    for (let i = (s * 3) % r; i <= u; i += r)
      for (let r = -h / 2; r <= h / 2; r += 0.5)
        N(e, t + d * i + p * r, n + f * i + m * r, o[4]);
  }
}
function V(e, t, n, r, i, a, o = 0, s = 0) {
  for (let c = 0; c < r; c++) {
    let l = s + (c / r) * Math.PI * 2 + (L(c, o) - 0.5) * 0.4,
      u = i * (0.6 + L(c, o, 1) * 0.4);
    for (let r = 0; r < u; r += 0.5) {
      let i = r / u;
      N(
        e,
        t + Math.cos(l) * r,
        n + Math.sin(l) * r,
        i < 0.3 ? a[4] : i < 0.6 ? a[3] : a[2],
      );
    }
  }
}
function _m(e, t, n, r, i, a, o, s = 0, c = 0) {
  for (let l = 0; l < i; l++) {
    let i = L(l, s) * Math.PI * 2,
      u = 0.4 + L(l, s, 2) * 0.6,
      d = a * u * sm(r),
      f = t + Math.cos(i) * d,
      p = n + Math.sin(i) * d * 0.8 + c * r * r * a;
    (r > 0.85 && L(l, s, 3) > 0.5) ||
      (N(e, f, p, r < 0.35 ? o[4] : r < 0.7 ? o[3] : o[2]),
      r < 0.5 && u > 0.7 && N(e, f - Math.cos(i), p - Math.sin(i) * 0.8, o[2]));
  }
}
function vm(e, t, n, r, i, a, o = 0) {
  for (let s = Math.floor(n - r); s <= Math.ceil(n + r); s++)
    for (let c = Math.floor(t - r); c <= Math.ceil(t + r); c++) {
      let l = L(c, s, o) * 0.35;
      Math.hypot(c + 0.5 - t, (s + 0.5 - n) * 1.15) / r > 1 - l * 0.6 ||
        (a > 0 && !((c + s) & 1) && a > 0.35) ||
        (a > 0.7 && !(c & 1)) ||
        N(e, c, s, i);
    }
}
function ym(e, t, n, r, i, a = 0.6) {
  let o = Bp(i, r);
  (e.save(),
    (e.globalCompositeOperation = `lighter`),
    (e.globalAlpha = a),
    e.drawImage(o, Math.round(t - o.width / 2), Math.round(n - o.height / 2)),
    e.restore());
}
function bm(e, t, n, r, i, a = 0.7) {
  (e.save(),
    (e.globalCompositeOperation = `lighter`),
    (e.globalAlpha = a),
    (e.filter = `blur(${i}px)`),
    e.drawImage(t, Math.round(n), Math.round(r)),
    e.restore());
}
function xm(e, t, n, r, i = 1) {
  (e.save(),
    (e.globalCompositeOperation = `lighter`),
    (e.globalAlpha = i),
    e.drawImage(t, Math.round(n), Math.round(r)),
    e.restore());
}
function Sm(e, t, n, r, i, a, o) {
  (e.save(), (e.globalAlpha = o), P(e, t, n, r, i, a), e.restore());
}
function Cm(e, t, n, r, i, a, o) {
  let s = r / 1.1;
  if (
    (Sm(e, t, n, r, s, i[1], 0.28),
    a > 0 && Sm(e, t, n, r * a, s * a, i[2], 0.35),
    o)
  ) {
    let i = Math.ceil(r * 6.3);
    for (let a = 0; a < i; a++) {
      let c = (a / i) * Math.PI * 2;
      o(e, c, t + Math.cos(c) * r, n + Math.sin(c) * s);
    }
  } else B(e, t, n, r, s, i[3]);
}
var wm = {
  stone: [`#1a1624`, `#221c2e`, `#2c2540`],
  grass: [`#1c2a1a`, `#22331f`, `#2c4227`],
  folly: [`#1a0e14`, `#241219`, `#2e1620`],
  ice: [`#14243a`, `#1a2e48`, `#26405e`],
  lava: [`#1a0c0a`, `#26120e`, `#381a12`],
  cistern: [`#0f1c1e`, `#152628`, `#1d3436`],
  barrow: [`#14120e`, `#1c1914`, `#26221a`],
  ash: [`#1c1a1e`, `#252228`, `#2f2b33`],
  marsh: [`#121a14`, `#18221a`, `#202e22`],
  void: [`#07050c`, `#0c0814`, `#120c1c`],
};
function Tm(e, t, n, r = 1) {
  let [i, a] = M(e, t),
    [o, s, c] = wm[n];
  for (let n = 0; n < t; n += 16)
    for (let t = 0; t < e; t += 16) {
      let e = L(t, n, r);
      (N(a, t, n, e < 0.5 ? o : s, 16, 16),
        N(a, t, n, c, 16, 1),
        N(a, t, n, c, 1, 16));
      for (let e = 0; e < 5; e++)
        N(
          a,
          t + Math.floor(L(t, n, e + r) * 16),
          n + Math.floor(L(n, t, e + r) * 16),
          c,
        );
    }
  return [i, a];
}
function Em(e, t, n, r, i, a, o = 0) {
  (o > 0 && Sm(e, i, a, o, Math.max(1.5, o * 0.35), `#000000`, 0.45),
    e.drawImage(t, Math.round(i - n), Math.round(a - r)));
}
function Dm(e, t, n, r = 0.45) {
  let i = e.createRadialGradient(
    t / 2,
    n / 2,
    Math.min(t, n) * 0.25,
    t / 2,
    n / 2,
    Math.max(t, n) * 0.75,
  );
  (i.addColorStop(0, `rgba(0,0,0,0)`),
    i.addColorStop(1, `rgba(0,0,0,${r})`),
    (e.fillStyle = i),
    e.fillRect(0, 0, t, n));
}
