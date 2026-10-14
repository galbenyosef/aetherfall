// hd2d-FOjpdF4f 21 — math
// Lines 6984-7015 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
function vo(e, t, n, r, i = 1) {
  let a = Math.sqrt(r / Math.max(1, e * t));
  return a >= n * yo ? n : Math.max(Math.min(i, n), a);
}
var yo = 0.97;
function bo(e, t, n, r) {
  let i = Math.min(t ?? e.msaa, r);
  for (; i >= 2 && n * i > e.samplePx;) i /= 2;
  let a = i >= 2 ? Math.floor(i) : 0;
  return { samples: a, fxaa: a === 0 && t !== 0 };
}
function xo(e) {
  return e.forced
    ? e.forced
    : e.software
      ? `minimal`
      : e.coarse || (e.memGB !== void 0 && e.memGB <= 4)
        ? `low`
        : `high`;
}
function So() {
  try {
    return {
      coarse:
        typeof matchMedia == `function` &&
        matchMedia(`(pointer: coarse)`).matches,
      memGB: navigator.deviceMemory,
    };
  } catch {
    return { coarse: !1, memGB: void 0 };
  }
}
