// assets__index-BTsv3a2s 199 — gem
// Lines 126121-126159 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function fY(e, t) {
  let n = dY.get(e);
  return (n || ((n = t()), dY.set(e, n)), n);
}
function pY(e, t, n = `pyro`, r = !1) {
  if (Vm(e) && Bm()) {
    let i = Gm(e) && (!!Da[e].schoolDyed || r);
    return fY(
      `raven:${e}:${t}:${i ? n : ``}`,
      () => Jm(e, t - 1, i ? hY(e, n) : void 0) ?? gY(e, t, n, r),
    );
  }
  return gY(e, t, n, r);
}
var mY = (e) => {
  let [t, n, r] = Lp(e);
  return 0.3 * t + 0.59 * n + 0.11 * r;
};
function hY(e, t) {
  let n = S[t].colors;
  if (e === `hat`)
    return [I(n.hat, 0.35), n.hat, n.hatDark, I(n.hatDark, -0.35)];
  if (e === `robe`)
    return [I(n.robe, 0.35), n.robe, n.robeDark, I(n.robeDark, -0.35)];
  let r = [n.spark, n.orb, n.glow].sort((e, t) => mY(t) - mY(e));
  return [...r, I(r[2], -0.45)];
}
function gY(e, t, n, r) {
  return fY(`base:${e}:${t}:${n}:${r}`, () => {
    let [i, a] = M(16, 16),
      o = sY[t],
      s = r ? cY(n) : o.gem;
    return (
      uY[e]({ P: rY(a), ctx: a, m: o, tier: t, gem: s, school: n }),
      F(i, nY),
      i
    );
  });
}
