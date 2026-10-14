// fx3d-DiRK8ozf 11 — life
// Lines 31961-31971 of readable/assets/fx3d-DiRK8ozf.pretty.js (statement-aligned).
function lightFalloff(e, t) {
  let n = t / e.life;
  return e.hold
    ? Math.min(1, t / 0.08) * Math.min(1, (e.life - t) / 0.2)
    : (1 - n) * (1 - n);
}
function createFx3D(e, t, n) {
  let r = new Fx3dLayer(e, t, n),
    i = new FxKit(r);
  return { layer: r, kit: i, golem: new GolemFx(i), mage: new MageFx(i) };
}
