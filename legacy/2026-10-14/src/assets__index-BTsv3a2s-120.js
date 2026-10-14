// assets__index-BTsv3a2s 120 — math
// Lines 55802-56134 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Dre() {
  return (
    _A ||
    ((_A = new Promise((e) => {
      if (typeof Image > `u`) return e();
      let t = new Image();
      ((t.onload = () => {
        ((gA = t), e());
      }),
        (t.onerror = () => e()),
        (t.src = Tre));
    })),
    _A)
  );
}
function yA() {
  return gA !== null;
}
function bA(e) {
  if (!gA) return null;
  let t = vA.get(e);
  if (t) return t;
  let n = Ere[e],
    r = n.f.map(([e, t, n, r]) => {
      let [i, a] = M(n, r);
      return (a.drawImage(gA, e, t, n, r, 0, 0, n, r), i);
    }),
    i = { c: r[0], frames: r, ax: n.ax, ay: n.ay };
  return (vA.set(e, i), i);
}
function xA(e, t) {
  let n = e.length;
  return e[((Math.floor(t) % n) + n) % n];
}
function SA(e, t, n = 1) {
  let r = (e * 374761393 + t * 668265263 + n * 144269504) | 0;
  return (
    (r = Math.imul(r ^ (r >>> 13), 1274126177)),
    (r ^= r >>> 16),
    (r >>> 0) / 4294967296
  );
}
var CA = {
    dk: `#5d586c`,
    mid: `#7c768a`,
    st: `#8c8698`,
    lt: `#948ea4`,
    hi: `#b9b3c7`,
    deep: `#45404f`,
    ink: `#110d18`,
  },
  J = {
    dk: `#3d2716`,
    mid: `#5a3a22`,
    st: `#6b4424`,
    lt: `#9a6a3a`,
    pale: `#b88a52`,
  },
  wA = `#140d0a`,
  TA = { lit: `#ffd98a`, hi: `#fff3c4`, dim: `#c9934a` },
  Ore = [`#e0417a`, `#ffd166`, `#b58aff`, `#ff8a4c`, `#ffffff`],
  EA = {
    pyro: {
      name: `Pyromancer`,
      robe: `#b3261e`,
      dark: `#6e1510`,
      trim: `#ffb238`,
      glow: `#ff7a1a`,
      orb: `#ffd166`,
    },
    cryo: {
      name: `Cryomancer`,
      robe: `#2f6fcf`,
      dark: `#173a78`,
      trim: `#dff6ff`,
      glow: `#5cc8ff`,
      orb: `#bff0ff`,
    },
    storm: {
      name: `Stormcaller`,
      robe: `#5b3fb8`,
      dark: `#2e1f66`,
      trim: `#fff36b`,
      glow: `#a8b8ff`,
      orb: `#fffbd1`,
    },
    void: {
      name: `Voidweaver`,
      robe: `#2a1740`,
      dark: `#140a22`,
      trim: `#d06bff`,
      glow: `#b84dff`,
      orb: `#f0b3ff`,
    },
  },
  DA = { field: `#243b6b`, dark: `#15244a`, crystal: `#44c9f0`, hi: `#8ef6ff` };
function OA(e, t, n, r, i) {
  for (let a = 0; a < r.length; a++)
    for (let o = 0; o < r[a].length; o++) {
      let s = i[r[a][o]];
      s && N(e, t + o, n + a, s);
    }
}
function kre(e) {
  if (e.startsWith(`rgb`)) {
    let t = e.match(/\d+/g).map(Number);
    return [t[0], t[1], t[2]];
  }
  let t = parseInt(e.slice(1), 16);
  return [(t >> 16) & 255, (t >> 8) & 255, t & 255];
}
var kA = {
  plaster: `#d9c9a8`,
  cream: `#e6d8bc`,
  rose: `#dcc0b2`,
  sage: `#c9ccb0`,
};
function AA(e, t, n, r, i, a, o, s = -1) {
  let c = n + Math.round(i * 0.84);
  if (t in kA) {
    let l = kA[t];
    ((e.fillStyle = l),
      e.fillRect(n, r, i, a),
      (e.fillStyle = I(l, -0.12)),
      e.fillRect(c, r, n + i - c, a));
    for (let t = 0; t < (i * a) / 30; t++)
      N(
        e,
        n + Math.floor(o() * i),
        r + Math.floor(o() * a),
        I(l, o() < 0.5 ? -0.06 : 0.05),
      );
    let u = t === `sage` ? `#4a3020` : J.mid;
    for (let t = n; t < n + i; t += 15 + Math.floor(o() * 3))
      N(e, t, r, u, 1, a);
    if ((N(e, n + i - 1, r, u, 1, a), N(e, n, r, u, i, 1), s > 0)) {
      N(e, n, s, u, i, 2);
      for (let t = n; t + 15 < n + i; t += 30)
        for (let n = 0; n < Math.min(12, s - r - 1); n++)
          N(e, t + 1 + n, s - 1 - n, u);
    }
    return;
  }
  let l = {
    stone: [`#8c8698`, `#7c768a`, `#948ea4`, `#86809a`],
    dark: [`#4f4960`, `#443f54`, `#5a546c`, `#3d384b`],
    white: [`#c9c3d3`, `#bdb7c9`, `#d6d0e0`, `#b3adc0`],
    brick: [`#9a4a36`, `#8a3f2e`, `#a85640`, `#7e3a2a`],
    wood: [`#8a5f38`, `#7a5230`, `#9c6c40`, `#6b4424`],
    barn: [`#8e3a2a`, `#7e3224`, `#a0463a`, `#6e2a1e`],
  }[t];
  if (t === `wood` || t === `barn`) {
    for (let t = n; t < n + i; t++) {
      let i = Math.floor((t - n) / 3),
        o = l[Math.floor(SA(i, 3, 17) * 4)];
      for (let i = r; i < r + a; i++) {
        let r = o;
        ((t - n) % 3 == 0
          ? (r = I(o, -0.25))
          : SA(t, i, 5) < 0.04 && (r = I(o, -0.15)),
          t >= c && (r = I(r, -0.14)),
          N(e, t, i, r));
      }
    }
    (N(e, n, r, I(l[0], -0.35), i, 1),
      t === `barn` && N(e, n, r + Math.floor(a / 2), `#e6d8bc`, i, 1));
    return;
  }
  let u = t === `brick` ? 3 : 4,
    d =
      t === `brick`
        ? `#5e2e22`
        : t === `dark`
          ? `#2b2735`
          : t === `white`
            ? `#9690a6`
            : `#5d586c`;
  for (let o = r; o < r + a; o++) {
    let a = Math.floor((o - r) / u),
      s = (a % 2) * (t === `brick` ? 3 : 5);
    for (let f = n; f < n + i; f++) {
      let i = t === `brick` ? 6 : 9,
        p = Math.floor((f - n + s) / i),
        m = l[Math.floor(SA(p, a, t.length * 7) * 4)];
      (((o - r) % u === 0 || (f - n + s) % i === 0) && (m = d),
        f >= c && (m = I(m, -0.14)),
        N(e, f, o, m));
    }
  }
  s > 0 && N(e, n, s, I(l[0], 0.12), i, 1);
}
function Are(e, t, n, r, i) {
  (N(e, t, n, CA.mid, r, i), N(e, t, n, CA.lt, r, 1));
  for (let a = t + 2; a < t + r - 1; a += 6) N(e, a, n + 2, CA.dk, 1, i - 2);
}
function jA(e, t, n, r, i) {
  let a = i ? e[1] : e[0];
  switch (t) {
    case `shingle`: {
      let e = Math.floor(r / 4);
      r % 4 == 0
        ? (a = I(a, -0.2))
        : (n + (e % 2) * 3) % 6 == 0
          ? (a = I(a, -0.1))
          : SA(n, r, 91) < 0.03 && (a = I(a, 0.1));
      break;
    }
    case `tile`: {
      let e = (n + (Math.floor(r / 4) % 2) * 2) % 4;
      r % 4 == 3
        ? (a = I(a, -0.25))
        : e === 0
          ? (a = I(a, 0.12))
          : e === 3 && (a = I(a, -0.1));
      break;
    }
    case `slate`: {
      let e = Math.floor(r / 3);
      r % 3 == 0
        ? (a = I(a, -0.22))
        : (n + (e % 2) * 2) % 5 == 0
          ? (a = I(a, -0.12))
          : SA(n >> 1, e, 93) < 0.12 && (a = I(a, 0.07));
      break;
    }
    case `thatch`: {
      let e = SA(n, Math.floor(r / 3), 97);
      ((a = e < 0.25 ? I(a, -0.12) : e > 0.8 ? I(a, 0.1) : a),
        r % 6 == 5 && (a = I(a, -0.18)));
      break;
    }
  }
  return a;
}
function MA(e, t, n, r, i, a, o, s = 0.5) {
  let c = i - r,
    l = n - t,
    u = Math.min(Math.round(c * s), Math.round(l * 0.3));
  for (let s = r; s <= i; s++) {
    let i = (s - r) / c,
      l = t + Math.round((1 - i) * u),
      d = n - Math.round((1 - i) * u);
    o === `thatch` && s - r < 3 && ((l += 3 - (s - r)), (d -= 3 - (s - r)));
    for (let n = l; n <= d; n++) {
      let i = n > l + (d - l) * 0.68;
      N(e, n, s, jA(a, o, n - t, s - r, i));
    }
  }
  if ((N(e, t + u, r, a[2], l - 2 * u + 1, 1), o === `thatch`))
    for (let r = t; r <= n; r++) SA(r, 1, 99) < 0.5 && N(e, r, i + 1, a[1]);
  else N(e, t, i, I(a[1], -0.2), l + 1, 1);
}
function NA(e, t, n, r, i, a, o) {
  let s = n - t;
  for (let c = r; c <= i; c++)
    for (let i = t; i <= n; i++) {
      let n = i > t + s * 0.8,
        l = jA(a, o, i - t, c - r, n);
      (c - r < 2 && (l = c === r ? a[2] : I(a[2], -0.1)), N(e, i, c, l));
    }
  (N(e, t, r, J.mid, 2, i - r + 1),
    N(e, n - 1, r, J.dk, 2, i - r + 1),
    N(e, t, i, I(a[1], -0.2), s + 1, 1));
}
function PA(e, t, n, r, i, a, o, s, c = J.mid) {
  let l = (t + n) / 2,
    u = (n - t) / 2,
    d = i - r,
    f = r + Math.round(d * 0.42),
    p = f - r;
  for (let r = t + 2; r <= n - 2; r++) {
    let t = Math.abs(r + 0.5 - l) / u,
      n = Math.round(f + t * (i - f));
    for (let t = n; t <= i; t++) N(e, r, t, r > l + u * 0.55 ? I(s, -0.12) : s);
  }
  for (let s = t; s <= n; s++) {
    let t = Math.abs(s + 0.5 - l) / u,
      n = Math.round(f + t * (i - f)),
      d = Math.max(r, n - p);
    for (let t = d; t <= n + 1; t++) {
      let r = n + 1 - t,
        i = jA(a, o, Math.round(Math.abs(s - l)), r, s > l);
      (t >= n && (i = t === n + 1 ? wA : c), N(e, s, t, i));
    }
  }
  return (N(e, Math.floor(l), r, a[2], 1, f - r + 1), { apexY: f, cx: l });
}
function FA(e, t, n, r = 7, i = 7, a = {}, o) {
  let s = a.frame ?? J.mid,
    c = a.lit ?? !0,
    l = a.glow ?? (c ? TA.lit : `#3b4a6a`);
  if (
    (N(e, t - 1, n - 1, s, r + 2, i + 2),
    N(e, t, n, l, r, i),
    N(e, t, n, c ? TA.hi : `#6a7fa8`, 2, 2),
    a.arched &&
      (N(e, t - 1, n - 1, `rgba(0,0,0,0)`, 1, 1),
      e.clearRect(t - 1, n - 1, 2, 1),
      e.clearRect(t + r - 1, n - 1, 2, 1),
      e.clearRect(t - 1, n - 1, 1, 2),
      e.clearRect(t + r, n - 1, 1, 2),
      N(e, t, n - 1, s, 1, 1),
      N(e, t + r - 1, n - 1, s, 1, 1),
      N(e, t + 1, n - 2, s, r - 2, 1),
      N(e, t + 1, n - 1, l, r - 2, 1)),
    N(e, t + Math.floor(r / 2), n, s, 1, i),
    N(e, t, n + Math.floor(i / 2), s, r, 1),
    N(e, t - 2, n + i + 1, J.st, r + 4, 1),
    a.shutters &&
      (N(e, t - 3, n - 1, a.shutters, 2, i + 2),
      N(e, t + r + 1, n - 1, I(a.shutters, -0.2), 2, i + 2)),
    a.box)
  ) {
    N(e, t - 1, n + i + 2, J.dk, r + 2, 2);
    for (let a = 0; a < r + 2; a += 2)
      N(e, t - 1 + a, n + i + 1, Ore[Math.floor(SA(t + a, n, 3) * 4)]);
  }
  o?.push({ x: t + r / 2, y: n + i / 2, r: 18, color: `#ffb347`, a: 0.7 });
}
function IA(e, t, n, r = 8, i = 12, a = {}) {
  let o = a.color ?? J.st;
  (N(e, t - 1, n - i - 1, J.dk, r + 2, i + 1),
    N(e, t, n - i, o, r, i),
    a.arched &&
      (e.clearRect(t - 1, n - i - 1, 2, 1),
      e.clearRect(t + r - 1, n - i - 1, 2, 1),
      N(e, t - 1, n - i - 1, J.dk, 1, 1)));
  for (let a = 2; a < r; a += 3) N(e, t + a, n - i + 1, I(o, -0.25), 1, i - 1);
  (a.double && N(e, t + Math.floor(r / 2), n - i, J.dk, 1, i),
    N(e, t + r - 2, n - Math.round(i / 2), `#ffd166`),
    a.double &&
      N(e, t + Math.floor(r / 2) - 2, n - Math.round(i / 2), `#ffd166`));
}
