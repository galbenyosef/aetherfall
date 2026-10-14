// index-BTsv3a2s 197 — mid
// Lines 125572-125641 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function iY(e, t, n, r, i, a) {
  let o = Math.abs(r - t),
    s = -Math.abs(i - n),
    c = t < r ? 1 : -1,
    l = n < i ? 1 : -1,
    u = o + s;
  for (; N(e, t, n, a), t !== r || n !== i;) {
    let e = 2 * u;
    (e >= s && ((u += s), (t += c)), e <= o && ((u += o), (n += l)));
  }
}
function aY(e, t, n, r = 0, i = 0) {
  t.forEach((t, a) => {
    for (let o = 0; o < t.length; o++) {
      let s = n[t[o]];
      s && N(e, r + o, i + a, s);
    }
  });
}
function oY(e, t) {
  for (let n = 5; n <= 14; n++)
    for (let r = 2; r <= 14; r++) {
      let i = (r + 0.5 - 8) / 5.2,
        a = (n + 0.5 - 10) / 3.6,
        o = (r + 0.5 - 8) / 3.4,
        s = (n + 0.5 - 10) / 2;
      i * i + a * a > 1 ||
        o * o + s * s <= 1 ||
        N(e, r, n, n < 9 ? t.hi : n > 11 ? t.lo : t.mid);
    }
}
var sY = {
  1: {
    wood: { hi: `#b98652`, mid: `#8a5a34`, lo: `#5e3a1f` },
    metal: { hi: `#b4b6c0`, mid: `#7d7f8a`, lo: `#4f515c` },
    gem: { hi: `#d8f2f6`, mid: `#7fb8c4`, lo: `#4a7c88` },
    cloth: { hi: `#d8ccb0`, mid: `#b09f80`, lo: `#7a6a52` },
    rune: `#9fb8c0`,
  },
  2: {
    wood: { hi: `#8a5c44`, mid: `#5f3c2c`, lo: `#3b2418` },
    metal: { hi: `#f0f4fb`, mid: `#c3cbdb`, lo: `#838ca2` },
    gem: { hi: `#e6ffff`, mid: `#7ef9ff`, lo: `#2aa8c0` },
    cloth: { hi: `#aab8d8`, mid: `#6f7fa8`, lo: `#454f73` },
    rune: `#7ef9ff`,
  },
  3: {
    wood: { hi: `#6a4a6a`, mid: `#46304a`, lo: `#2a1a30` },
    metal: { hi: `#fff0b0`, mid: `#ffd166`, lo: `#c28a1e` },
    gem: { hi: `#ffffff`, mid: `#9fe8ff`, lo: `#4fb8e0` },
    cloth: { hi: `#e8d8ff`, mid: `#b9a2e8`, lo: `#7a62b0` },
    rune: `#ffd166`,
  },
  4: {
    wood: { hi: `#ffffff`, mid: `#cfefff`, lo: `#86b8d8` },
    metal: { hi: `#fff8d8`, mid: `#ffe08a`, lo: `#d4a23a` },
    gem: { hi: `#ffffff`, mid: `#b8fbff`, lo: `#6ad8f0` },
    cloth: { hi: `#ffffff`, mid: `#dff6ff`, lo: `#9cc8e0` },
    rune: `#ffffff`,
  },
};
function cY(e) {
  let t = S[e].colors;
  return { hi: t.spark, mid: t.orb, lo: t.glow };
}
function lY(e, t, n, r, i = !1) {
  i
    ? (e(t, n, r.mid, 2, 2), e(t, n, r.hi), e(t + 1, n + 1, r.lo))
    : e(t, n, r.mid);
}
