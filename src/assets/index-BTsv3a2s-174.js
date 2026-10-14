// index-BTsv3a2s 174 — dng
// Lines 100520-100584 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function zH(e, t) {
  switch (t.kind) {
    case `sluicewarden`:
      return new Ire(e, t);
    case `motherbrim`:
      return new Rie(e, t);
    case `marrow`:
      return new zie(e, t);
    case `fenn`:
      return new qie(e, t);
    case `rimesow`:
      return new Jie(e, t);
    case `ilse`:
      return new tae(e, t);
    case `orenvey`:
      return new nae(e, t);
    case `kilnmother`:
      return new cae(e, t);
    case `wardenlock`:
      return new lae(e, t);
    case `tutor`:
      return new fae(e, t);
    case `lillith`:
      return new Rae(e, t);
  }
  return new Ez(e, t);
}
var Z = 16;
function zae(e) {
  return `inst-dng-${e.id}-f${e.floor}`;
}
function BH(e) {
  return (
    Ss.includes(e) ||
    (typeof location < `u` &&
      new URLSearchParams(location.search).get(`dungeons`) === `host`)
  );
}
var VH = (e) => e.replace(/_(ember|rime|storm|void|grey|greymini)$/, ``);
function Bae(e) {
  return !!e && e.startsWith(`inst-dng-`);
}
var Vae = new Set([
    `tonemote`,
    `wisp`,
    `hollowwisp`,
    `huskpyro`,
    `huskcryo`,
    `huskstorm`,
    `huskvoid`,
    `chorister`,
    `tallowlight`,
  ]),
  Hae = {
    cistern: `#7ef9ff`,
    barrow: `#ffcf7a`,
    rime: `#9fe8ff`,
    ember: `#ff9a3a`,
    folly: `#ffcf7a`,
  },
  Uae = [32 * NR, 64 * NR, 16],
  HH = 8;
function Wae(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
