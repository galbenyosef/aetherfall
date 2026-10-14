// index-BTsv3a2s 56 — math
// Lines 35650-35995 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function D_(e, t, n, r, i, a, o, s, c) {
  if (c) {
    if (!s(r, i)) {
      let e = 9;
      return (
        s(r, i - 1) && (e = Math.min(e, o)),
        s(r, i + 1) && (e = Math.min(e, 15 - o)),
        s(r - 1, i) && (e = Math.min(e, a)),
        s(r + 1, i) && (e = Math.min(e, 15 - a)),
        e < 9 ? -(e + 1) / 16 : -1
      );
    }
    let e = 8;
    return (
      s(r, i - 1) || (e = Math.min(e, o)),
      s(r, i + 1) || (e = Math.min(e, 15 - o)),
      s(r - 1, i) || (e = Math.min(e, a)),
      s(r + 1, i) || (e = Math.min(e, 15 - a)),
      e / 8
    );
  }
  return (
    (hee(e, t, n, s) + (d_(t * 0.14, n * 0.14, 120) - 0.5) * 0.22 - 0.5) * 2
  );
}
function Mee(e, t, n, r, i, a) {
  if (e.theme === `cistern`)
    return n < 2 || n > 13
      ? m_.cistern.stone[n < 2 ? 6 : 1]
      : o_(
          m_.cistern.stone,
          0.55 + (d_(r * 0.3, i * 0.3, 3) - 0.5) * 0.3 - (t === 15 ? 0.2 : 0),
          r,
          i,
        );
  if (e.theme === `rime`)
    return n < 1 || n > 14
      ? a
      : o_(m_.rime.snow, 0.7 + (d_(r * 0.2, i * 0.2, 5) - 0.5) * 0.4, r, i);
  let o =
    e.theme === `folly`
      ? m_.folly.wood
      : e.theme === `barrow`
        ? m_.barrow.wood
        : r_(`#2a1a10`, `#3d2616`, `#5a3a22`, `#6f4a2c`);
  if (n < 1 || n > 14) return a;
  let s = Math.floor(r / 4);
  if (r % 4 == 3) return o[0];
  let c = o_(o, 0.45 + H(s, 0, 3) * 0.35 + (n === 1 ? 0.2 : 0), r, i);
  return ((n === 3 || n === 12) && (c = n_(`#8a7a5a`)), c);
}
function Nee(e, t = 0) {
  return C_(e, 0, 0, e.w, e.h, t);
}
function O_(e, t) {
  let [n, r] = M(16, 16),
    i = m_[e],
    a = (e) => `rgb(${e[0] | 0},${e[1] | 0},${e[2] | 0})`;
  if (t) {
    ((r.fillStyle = a(i.lip[1])), r.fillRect(1, 1, 14, 14));
    for (let e = 0; e < 6; e++) {
      let t = 1 - e / 6;
      ((r.fillStyle = a(s_(i.lip[2], [0, 0, 0], 1 - t * 0.9))),
        r.fillRect(2 + (e >> 1), 2 + e * 2, 12 - (e >> 1) * 2, 2),
        (r.fillStyle = a(s_(i.mass[0], [0, 0, 0], 0.5))),
        r.fillRect(2 + (e >> 1), 3 + e * 2, 12 - (e >> 1) * 2, 1));
    }
    ((r.fillStyle = `#000`), r.fillRect(5, 13, 6, 2));
  } else
    for (let e = 0; e < 6; e++) {
      let t = e / 6;
      ((r.fillStyle = a(s_(i.lip[0], i.lip[2], t))),
        r.fillRect(1 + ((5 - e) >> 1), 1 + e * 2, 14 - ((5 - e) >> 1) * 2, 2),
        (r.fillStyle = a(i.mass[2])),
        r.fillRect(1 + ((5 - e) >> 1), 2 + e * 2, 14 - ((5 - e) >> 1) * 2, 1));
    }
  return (F(n), n);
}
function k_(e, t, n, r, i) {
  let [a, o] = M(16, 16),
    s = e === `seal` ? Co : [e],
    c = h_[s[((r % s.length) + s.length) % s.length]],
    l = (e, t = 1) => `rgba(${e[0] | 0},${e[1] | 0},${e[2] | 0},${t})`;
  if ((o.save(), i || (o.translate(16, 0), o.rotate(Math.PI / 2)), t))
    return (
      (o.fillStyle = l(c[2], 0.55)),
      o.fillRect(0, 7, 16, 2),
      o.restore(),
      a
    );
  let u = 0.5 + 0.5 * Math.sin(n * Math.PI * 2);
  for (let e = 2; e < 14; e++) {
    let t = (1 - Math.abs(e - 7.5) / 6) * (0.35 + u * 0.25);
    ((o.fillStyle = l(c[2], t)), o.fillRect(0, e, 16, 1));
  }
  ((o.fillStyle = l(c[3], 0.9)), o.fillRect(0, 7, 16, 2));
  for (let e = 0; e < 4; e++) {
    let t = (e + Math.floor(n * 8) + r) % 4 == 0,
      i = 1 + e * 4;
    ((o.fillStyle = l(t ? c[4] : c[2], 0.95)),
      o.fillRect(i, 4, 2, 8),
      (o.fillStyle = l(c[0], 0.9)),
      o.fillRect(i, 3, 2, 1),
      o.fillRect(i, 12, 2, 1));
  }
  return (o.restore(), a);
}
var A_ = new Map();
function j_(e, t, n) {
  let r = `c:${e}:${t}:${((n % 4) + 4) % 4}`,
    i = A_.get(r);
  if (i) return i;
  let [a, o] = M(16, 20);
  A_.set(r, a);
  let s = e === `seal` ? Co : [e],
    c = h_[s[((n % s.length) + s.length) % s.length]],
    l = (e, t = 1) => `rgba(${e[0] | 0},${e[1] | 0},${e[2] | 0},${t})`,
    u = 0.5 + 0.5 * Math.sin(t * Math.PI * 2);
  for (let e = 0; e < 20; e++) {
    let t = (19 - e) / 19;
    ((o.fillStyle = l(c[2], (1 - t) * (1 - t) * (0.4 + u * 0.25))),
      o.fillRect(0, e, 16, 1));
  }
  ((o.fillStyle = l(c[3], 0.9)), o.fillRect(0, 18, 16, 2));
  for (let e = 0; e < 4; e++) {
    let r = (e + Math.floor(t * 8) + n) % 4 == 0,
      i = 1 + e * 4;
    ((o.fillStyle = l(r ? c[4] : c[2], 0.95)),
      o.fillRect(i, 6, 2, 12),
      (o.fillStyle = l(c[0], 0.9)),
      o.fillRect(i, 5, 2, 1));
  }
  return a;
}
function M_(e, t, n) {
  let r = `g:${e}:${t}:${((n % 4) + 4) % 4}`,
    i = A_.get(r);
  if (i) return i;
  let [a, o] = M(16, 16);
  A_.set(r, a);
  let s = e === `seal` ? Co : [e],
    c = h_[s[((n % s.length) + s.length) % s.length]],
    l = (e, t = 1) => `rgba(${e[0] | 0},${e[1] | 0},${e[2] | 0},${t})`,
    u = 0.5 + 0.5 * Math.sin(t * Math.PI * 2);
  for (let e = 2; e < 14; e++)
    ((o.fillStyle = l(c[2], (1 - Math.abs(e - 7.5) / 6) * (0.35 + u * 0.25))),
      o.fillRect(0, e, 16, 1));
  return ((o.fillStyle = l(c[3], 0.9)), o.fillRect(0, 7, 16, 2), a);
}
var N_ = `#120b1a`,
  P_ = -0.52,
  F_ = -0.62,
  I_ = 0.59;
function L_(e, t, n, r) {
  let i = Math.floor(
    Math.max(0, Math.min(0.9999, t)) * e.length + a_(n, r) * 0.7,
  );
  return e[Math.max(0, Math.min(e.length - 1, i))];
}
function R_(e, t, n, r, i, a, o = 0) {
  for (let s = Math.floor(n - i); s <= Math.ceil(n + i); s++)
    for (let c = Math.floor(t - r); c <= Math.ceil(t + r); c++) {
      let l = (c + 0.5 - t) / r,
        u = (s + 0.5 - n) / i,
        d = l * l + u * u;
      if (d > 1) continue;
      let f = Math.sqrt(1 - d),
        p = Math.max(0, l * P_ + u * F_ + f * I_);
      N(e, c, s, L_(a, 0.12 + p * 0.95 + o, c, s));
    }
}
function z_(e, t, n, r, i, a, o = 0) {
  for (let s = 0; s < r; s++) {
    let c = ((s + 0.5) / r) * 2 - 1,
      l = Math.sqrt(Math.max(0, 1 - c * c)),
      u = 0.15 + Math.max(0, c * P_ + l * I_) * 0.95 + o;
    for (let r = 0; r < i; r++)
      N(e, t + s, n + r, L_(a, u - (r / i) * 0.12, t + s, n + r));
  }
}
function B_(e, t, n, r, i, a, o, s = 0) {
  for (let c = 0; c < i; c++)
    for (let l = 0; l < r; l++) {
      let u = c < a ? 0.78 - (c / a) * 0.08 : 0.5 - ((c - a) / (i - a)) * 0.2;
      (l === 0 && (u += 0.08),
        l >= r - 2 && (u -= 0.18),
        c === a && (u -= 0.1),
        N(e, t + l, n + c, L_(o, u + s, t + l, n + c)));
    }
}
function V_(e, t, n) {
  let r = t.map((e) => e[1]);
  e.fillStyle = n;
  for (
    let n = Math.floor(Math.min(...r));
    n <= Math.ceil(Math.max(...r));
    n++
  ) {
    let r = [];
    for (let e = 0; e < t.length; e++) {
      let [i, a] = t[e],
        [o, s] = t[(e + 1) % t.length];
      ((a <= n + 0.5 && s > n + 0.5) || (s <= n + 0.5 && a > n + 0.5)) &&
        r.push(i + ((n + 0.5 - a) / (s - a)) * (o - i));
    }
    r.sort((e, t) => e - t);
    for (let t = 0; t + 1 < r.length; t += 2)
      e.fillRect(
        Math.round(r[t]),
        n,
        Math.round(r[t + 1]) - Math.round(r[t]),
        1,
      );
  }
}
function H_(e, t, n, r, i, a, o = 1) {
  let s = Math.max(Math.abs(r - t), Math.abs(i - n), 1);
  for (let c = 0; c <= s; c++)
    N(e, t + ((r - t) * c) / s, n + ((i - n) * c) / s, a, o, o);
}
function U_(e, t, n, r, i, a = 0.5) {
  let [o, s, c] = n_(i);
  for (let i = -r; i <= r; i++)
    for (let l = -r; l <= r; l++) {
      let u = Math.hypot(l, i) / r;
      u > 1 ||
        ((e.fillStyle = `rgba(${o},${s},${c},${(1 - u) * (1 - u) * a})`),
        e.fillRect(t + l, n + i, 1, 1));
    }
}
function W_(e, t, n, r, i, a) {
  let o = [0, 1, 0, -1, 1, 0, -1, 0][i % 8];
  (V_(
    e,
    [
      [t - r, n],
      [t + r, n],
      [t + r * 0.6, n - r * 1.3],
      [t + o * 0.6, n - r * 2.6 - (i % 3 == 0)],
      [t - r * 0.6, n - r * 1.3],
    ],
    a[0],
  ),
    V_(
      e,
      [
        [t - r * 0.6, n],
        [t + r * 0.6, n],
        [t + o * 0.3, n - r * 1.7],
      ],
      a[1],
    ),
    N(e, t - 0.5, n - r * 0.7, a[2], 1, Math.max(1, r * 0.6)));
}
var U = {
    stone: [`#26221f`, `#3a3531`, `#514a45`, `#6a625c`, `#857c75`, `#a39a92`],
    mstone: [`#1c2622`, `#2a3631`, `#3a4a42`, `#4d5f55`, `#63776b`, `#7c9184`],
    iron: [`#15131a`, `#24212b`, `#37333f`, `#4f4a58`, `#6f6a78`, `#9a95a6`],
    rust: [`#2a140c`, `#4a2412`, `#6e3818`, `#8f5022`, `#b0703a`],
    copper: [`#2a1a10`, `#5a3a1a`, `#8a5a2a`, `#b87a3a`, `#d8a05a`, `#f0c88a`],
    verdigris: [`#1f4a3a`, `#2f6e55`, `#4fa88a`, `#7fd0b0`],
    wood: [`#1f130c`, `#2e1c10`, `#452a18`, `#5e3a22`, `#7a5030`, `#96683e`],
    bone: [`#5a5244`, `#7a705e`, `#a0957e`, `#c4b89e`, `#e0d6bf`, `#f4ecd8`],
    cloth: [`#2a2420`, `#3e362e`, `#564a3e`, `#6e604e`, `#8a7a62`],
    linen: [`#6a6254`, `#8a8070`, `#aaa08c`, `#c8bea8`, `#e0d8c4`],
    skin: [`#5a3424`, `#7e4a32`, `#a06444`, `#c08058`, `#dca07a`, `#f0c49c`],
    skinD: [`#2a1812`, `#3e241a`, `#583424`, `#744630`, `#8e5a3e`],
    drained: [`#2a2630`, `#3c3844`, `#524d5a`, `#6a6472`, `#847e8c`, `#a09aa6`],
    blood: [`#1a0306`, `#2e050a`, `#4a0a10`, `#6a1018`, `#8a1a22`, `#a8262e`],
    hollow: [
      `#12050a`,
      `#3a0a18`,
      `#5a0a1a`,
      `#861222`,
      `#b01a2a`,
      `#e0484e`,
      `#ffd0d0`,
    ],
    gold: [`#3a2608`, `#6a4a14`, `#9a7a2a`, `#c89a3a`, `#e0b64a`, `#ffe08a`],
    ice: [
      `#16324a`,
      `#2a587c`,
      `#3a6f96`,
      `#5089b0`,
      `#6ea6c8`,
      `#94c4de`,
      `#c4e4f2`,
      `#f0faff`,
    ],
    snow: [`#8fbcd6`, `#aad0e4`, `#c6e3f0`, `#e6f5fb`, `#ffffff`],
    lava: [
      `#5a1208`,
      `#9a2008`,
      `#d8400c`,
      `#ff7a1a`,
      `#ffb238`,
      `#ffe08a`,
      `#fff7d1`,
    ],
    basalt: [`#0e0b0c`, `#1c1719`, `#2d2528`, `#42373b`, `#5a4a50`, `#74626a`],
    earth: [`#1a120d`, `#2b1f16`, `#403023`, `#5a4634`, `#735a42`],
    moss: [`#1c3318`, `#274a20`, `#35642a`, `#4f7a3a`, `#6f9a4a`],
    water: [
      `#0f3a2c`,
      `#155040`,
      `#1f6e55`,
      `#2f9c78`,
      `#5cc8a0`,
      `#9fe8c8`,
      `#e0fff4`,
    ],
    rune: [`#1a6f86`, `#3fb8d0`, `#7ef9ff`, `#dffcff`],
    slime: [`#1f5a24`, `#2f8f3a`, `#5ccf4f`, `#9ae57a`, `#d0ffb0`],
    marble: [`#7f7465`, `#a39888`, `#c4baa8`, `#ddd5c8`, `#f4f0e8`],
    crimson: [`#2a070d`, `#3a0c14`, `#521420`, `#6e1a2a`, `#8a2434`, `#a83244`],
    imp: [`#3a0e08`, `#5a1a0c`, `#8a2a18`, `#c2361f`, `#e05a2a`],
  },
  G_ = [`#3a0a18`, `#b01a2a`, `#ffffff`],
  K_ = [`#ff7a1a`, `#ffd166`, `#fff7d1`],
  q_ = [`#5a0a1a`, `#e0484e`, `#ffd0d0`],
  J_ = [
    {
      skin: U.skin,
      shirt: [`#1e2a14`, `#2e4020`, `#43582c`, `#5a7038`],
      hair: `#3a2414`,
      extra: `hat`,
    },
    {
      skin: [`#3a2016`, `#4e2c1e`, `#66402a`, `#7e5238`, `#966448`, `#ac7856`],
      shirt: [`#1a2a24`, `#27403a`, `#36584f`, `#4a7064`],
      hair: `#120c0a`,
      extra: `cloak`,
    },
    {
      skin: [`#6a4a34`, `#8a6246`, `#aa7c5a`, `#c89670`, `#e0b08a`, `#f0caa6`],
      shirt: [`#2a2a30`, `#3c3c46`, `#50505c`, `#666674`],
      hair: `#5a4a3a`,
      extra: `lamp`,
    },
    {
      skin: U.skin,
      shirt: [`#3a1a14`, `#5a2a1e`, `#7a3a2a`, `#9a4e38`],
      hair: `#8a5a2a`,
      extra: `kerchief`,
    },
  ];
