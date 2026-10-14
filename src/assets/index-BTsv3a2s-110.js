// index-BTsv3a2s 110 — math
// Lines 52742-52821 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function nk(e, t, n, r, i, a) {
  let o = t.height;
  for (let [s, c, l] of tk(t)) {
    let t = L(s, c, a) * 0.5 + (1 - c / o) * 0.5;
    if (t >= i) {
      let a = t - i;
      N(
        e,
        n + s,
        r + c,
        i > 0 && a < 0.05 ? K[3] : i > 0 && a < 0.1 ? K[2] : l,
      );
      continue;
    }
    let u = am((i - t) / 0.4);
    if (u >= 1) continue;
    let d = L(s, c, a + 2);
    if (d < 0.45) continue;
    let f = (L(s, c, a + 1) - 0.5) * 9 * u,
      p = u * u * 16 - u * 3 * L(c, s, a),
      m = d > 0.9 ? K[4] : u < 0.35 ? K[3] : u < 0.7 ? K[2] : K[1];
    N(e, n + s + f, r + c + p, m);
  }
}
function Ine(e, t, n, r, i) {
  let a = new Set(tk(t, 200).map(([e, t]) => `${e},${t}`));
  for (let t = 0; t < 6; t++) {
    let o = 9 + Math.floor(L(t, i) * 11),
      s = 6 + Math.floor(L(t, i, 1) * 22);
    for (let c = 0; c < 9; c++)
      (a.has(`${o},${s}`) && N(e, n + o, r + s, c < 2 ? K[4] : K[3]),
        (o += L(t, c, i) < 0.5 ? -1 : 1),
        (s += +(L(c, t, i) < 0.75)));
  }
}
function Lne(e, t, n, r, i, a) {
  for (let [o, s, c] of tk(t, 200)) {
    if (L(o, s, a) < i * 0.75) continue;
    let t = Math.atan2(s - r, o - n),
      l = Math.floor(((t + Math.PI) / BO) * 9),
      u = ((l + 0.5) / 9) * BO - Math.PI,
      d = 4 + L(l, a) * 7;
    N(
      e,
      o + Math.cos(u) * d * i,
      s + Math.sin(u) * d * i + i * i * 16,
      i < 0.3 ? c : i < 0.6 ? K[2] : K[1],
    );
  }
}
function rk(e, t, n, r, i, a, o = 3) {
  let s = t.width,
    c = t.height;
  for (let [l, u, d] of tk(t)) {
    let t = L(l, u, a),
      f = am(i * 1.6 - t * 0.6);
    if (f >= 1 || (f > 0.5 && (l + u + Math.floor(i * 20)) % 3 == 0)) continue;
    let p = l - s / 2 + 0.5,
      m = u - c / 2 + 0.5,
      h = Math.atan2(m, p) + (L(l, u, a + 1) - 0.5) * 1.2,
      g = cm(f) * (10 + L(l, u, a + 2) * 14),
      _ = n + p * o + Math.cos(h) * g,
      v = r + m * o + Math.sin(h) * g - cm(f) * 10,
      y = f < 0.25 ? d : f < 0.55 ? FO : f < 0.8 ? K[3] : K[2],
      b = f < 0.6 ? 2 : 1;
    L(l, u, a + 3) > 0.86 && f > 0.15 && f < 0.7
      ? (N(e, _ - 1, v - 1, y, 3, 1),
        N(e, _ - 1, v + 1, y, 3, 1),
        N(e, _ - 1, v, y),
        N(e, _ + 1, v, y))
      : N(e, _, v, y, b, b);
  }
}
function ik(e, t, n, r, i, a) {
  return R(e, t, n, r, (e, t) => {
    i && i(e, t);
    let [o, s] = M(n, r);
    (a(s, t), F(o, Fne), e.drawImage(o, 0, 0));
  });
}
