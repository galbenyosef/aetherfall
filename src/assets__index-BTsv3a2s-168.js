// assets__index-BTsv3a2s 168 — math
// Lines 96407-96613 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function eH(e) {
  return [e[0], e[2], e[3], e[3], e[4]];
}
function pae(e, t, n, r, i, a, o, s) {
  let c = Math.hypot(r - t, i - n);
  if (c < 1 || s <= 0) return;
  let l = (-(i - n) / c) * (a / 2),
    u = ((r - t) / c) * (a / 2);
  (e.save(),
    (e.globalAlpha = Math.min(1, s)),
    (e.fillStyle = o),
    e.beginPath(),
    e.moveTo(t + l, n + u),
    e.lineTo(r + l, i + u),
    e.lineTo(r - l, i - u),
    e.lineTo(t - l, n - u),
    e.fill(),
    e.restore());
}
function mae(e, t, n) {
  let r = 99;
  return (
    e > 1e-6 && (r = Math.min(r, XV.x1 / e)),
    e < -1e-6 && (r = Math.min(r, XV.x0 / e)),
    t > 1e-6 && (r = Math.min(r, (XV.y1 + n) / t)),
    t < -1e-6 && (r = Math.min(r, (XV.y0 + n) / t)),
    r
  );
}
function hae(e) {
  return Se(e)?.name ?? e;
}
var gae = {},
  X = (e, t, n, r, i, a, o, s) => ({
    group: e,
    key: t,
    label: n,
    def: r,
    min: i,
    max: a,
    step: o,
    hint: s,
  });
function tH(e) {
  let t = (t, n, r, i, a, o, s, c) => X(t, n, r, e[n] ?? i, a, o, s, c);
  return [
    t(
      `Gait`,
      `liftAmp`,
      `Foot lift`,
      1.5,
      0,
      4,
      0.1,
      `px a foot rises in the front and back views`,
    ),
    t(
      `Gait`,
      `legAmp`,
      `Side step`,
      1.5,
      0,
      4,
      0.1,
      `px a foot swings in the side view`,
    ),
    t(
      `Gait`,
      `bobAmp`,
      `Bob`,
      1,
      0,
      3,
      0.1,
      `px the body dips as the feet pass`,
    ),
    t(`Gait`, `bobF`, `Bob response`, 5, 1, 15, 0.5, `Hz`),
    t(
      `Gait`,
      `bobZ`,
      `Bob damping`,
      0.5,
      0.1,
      1.5,
      0.05,
      `below 1 it bounces on each step`,
    ),
    t(
      `Gait`,
      `hover`,
      `Hover`,
      0,
      0,
      10,
      0.5,
      `px off the ground (floating Keys)`,
    ),
    t(`Gait`, `hoverAmp`, `Hover bob`, 0, 0, 4, 0.1, `px it rises and sinks`),
    t(`Gait`, `hoverHz`, `Hover rate`, 0.3, 0.05, 1.5, 0.01, `Hz`),
    t(`Cloth`, `hemF`, `Hem response`, 2.8, 0.5, 10, 0.1, `Hz`),
    t(
      `Cloth`,
      `hemZ`,
      `Hem damping`,
      0.35,
      0.05,
      1.2,
      0.05,
      `low: it swings and overshoots`,
    ),
    t(`Cloth`, `hemK`, `Hem drag`, 0.03, 0, 0.1, 0.005, `px of trail per px/s`),
    t(`Cloth`, `hemMax`, `Hem reach`, 2, 0, 5, 0.5, `px at the bottom`),
    t(
      `Cloth`,
      `waddle`,
      `Step sway`,
      6,
      0,
      30,
      1,
      `the cloth's kick at each footfall`,
    ),
    t(
      `Cloth`,
      `flutHz`,
      `Flutter`,
      3,
      0,
      10,
      0.5,
      `steps a second a ragged hem (or a flame) changes`,
    ),
    t(
      `Arms`,
      `armF`,
      `Arm response`,
      5,
      1,
      15,
      0.5,
      `Hz: how fast the hands go to a move`,
    ),
    t(
      `Arms`,
      `armZ`,
      `Arm damping`,
      0.6,
      0.15,
      1.2,
      0.05,
      `below 1 they overshoot and settle`,
    ),
    t(
      `Arms`,
      `propF`,
      `Prop response`,
      3,
      0.5,
      10,
      0.5,
      `Hz: a lantern, a censer, a tablet, a grate`,
    ),
    t(`Arms`, `propZ`, `Prop damping`, 0.45, 0.1, 1.2, 0.05, `low: it swings`),
    t(
      `Lean`,
      `leanK`,
      `Lean`,
      0.02,
      0,
      0.06,
      0.002,
      `px the top leans per px/s it moves`,
    ),
    t(`Lean`, `leanF`, `Lean response`, 3, 0.5, 10, 0.5, `Hz`),
    t(`Lean`, `leanZ`, `Lean damping`, 0.55, 0.1, 1.2, 0.05),
    t(
      `Lean`,
      `turn`,
      `Turn round`,
      0.1,
      0,
      0.3,
      0.01,
      `s it faces you on the way round`,
    ),
    t(
      `Pixels`,
      `snap`,
      `Snap hysteresis`,
      0.5,
      0,
      1,
      0.05,
      `px a part must move before it redraws`,
    ),
    t(
      `Pixels`,
      `drawHz`,
      `Draw rate`,
      0,
      0,
      30,
      1,
      `0 = every frame; 8-12 holds poses like hand animation`,
    ),
  ];
}
