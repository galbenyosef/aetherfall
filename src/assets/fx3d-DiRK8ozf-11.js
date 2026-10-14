// fx3d-DiRK8ozf 11 — life
// Lines 31961-31971 of readable/assets/fx3d-DiRK8ozf.pretty.js (statement-aligned).
function Af(e, t) {
  let n = t / e.life;
  return e.hold
    ? Math.min(1, t / 0.08) * Math.min(1, (e.life - t) / 0.2)
    : (1 - n) * (1 - n);
}
function jf(e, t, n) {
  let r = new kf(e, t, n),
    i = new Ud(r);
  return { layer: r, kit: i, golem: new Gu(i), mage: new Bd(i) };
}
