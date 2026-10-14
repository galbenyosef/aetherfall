// index-BTsv3a2s 99 — ffffff
// Lines 49854-49915 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function hD(e, t, n, r, i) {
  let a = i.draw ?? 1,
    o = i.total ?? 8,
    s = i.notes ?? 0,
    c = i.f ?? 0,
    l = i.seed ?? 3,
    u = t + (n - t) * a,
    d = (e) => {
      if (!i.snap) return 0;
      let t = Math.abs(e - i.snap.x);
      return t < 12 ? Math.round(((12 - t) / 12) * i.snap.k * 4) : 0;
    },
    f = (e) => !!i.snap && Math.abs(e - i.snap.x) < 1 + i.snap.k * 4;
  for (let n = 0; n < 5; n++)
    for (let a = t; a <= u; a++) {
      if (f(a)) continue;
      let t = L(a, n, l + c),
        o =
          t > 0.93 || (i.full && t > 0.75)
            ? `#ffffff`
            : n === 2
              ? rD
              : n % 2
                ? WE[3]
                : WE[2];
      N(e, a, r + n * 3 + d(a), o);
    }
  if (a < 1) {
    N(e, u, r - 1, `#ffffff`, 1, 15);
    return;
  }
  for (let i = t + 4; i < n; i += 5 + Math.floor(L(i, l) * 4)) {
    if (f(i)) continue;
    let t = 1 + Math.floor(L(i, l, 1) * 3);
    (N(e, i, r + 13 + d(i), nD[3], 1, t),
      N(e, i, r + 12 + t + d(i), `#ffffff`));
  }
  let p = t + 4;
  (N(e, p, r - 3, `#ffffff`, 1, 18),
    N(e, p + 1, r - 4, `#ffffff`),
    N(e, p + 2, r - 3, rD),
    N(e, p + 1, r - 2, rD),
    B(e, p, r + 8, 2.6, 2.6, rD),
    N(e, p - 1, r + 15, `#ffffff`, 2, 1),
    N(e, n, r, WE[3], 1, 13),
    N(e, n - 2, r, WE[2], 1, 13),
    N(e, Math.round((t + n) / 2 + 4), r, WE[2], 1, 13));
  for (let a = 0; a < Math.min(s, o); a++) {
    let [s, u] = mD(t, n, r, a, o, l);
    if (f(s)) continue;
    let p = u + d(s);
    i.hollow?.includes(a)
      ? (N(e, s - 2, p - 1, GE[1], 5, 4),
        N(e, s - 1, p, GE[3], 3, 1),
        N(e, s - 2, p + 1, GE[2], 3, 1),
        N(e, s, p, GE[4]),
        N(e, s + 1, p - 6, GE[3], 1, 6),
        N(e, s + 2, p - 6, GE[2]),
        c % 2 == 0 && N(e, s - 1, p - 2, GE[3]))
      : oD(e, s, p, nD[3], `#ffffff`, WE[4]);
  }
}
