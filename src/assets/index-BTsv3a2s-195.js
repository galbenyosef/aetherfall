// index-BTsv3a2s 195 — math
// Lines 124922-124980 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function qJ(e, t, n) {
  let r = [],
    i = new Map(),
    a = (e) => {
      let t = i.get(e);
      if (t === void 0) {
        let a = n(e);
        ((t = a ? r.push({ x: a.x, y: a.y }) - 1 : -1), i.set(e, t));
      }
      return t;
    };
  for (let n = t + 1; n < e.beats.length; n++) {
    let t = e.beats[n];
    if (t.do === `cam`) break;
    if (t.do === `say`) {
      if (t.who === `crystal` || t.who === `voice`) continue;
      let e = a(t.who);
      e >= 0 && (r[e].speaks = !0);
    } else
      t.do === `move` || t.do === `blink`
        ? (a(t.who), i.set(t.who, r.push({ x: t.x, y: t.y }) - 1))
        : t.do === `face` && a(t.who);
  }
  return r;
}
function JJ(e, t, n, r) {
  let i = e;
  return (
    r.w < KJ.phoneW && (i = Math.min(i, 1)),
    (i = Math.min(i, YJ(t, n, r))),
    Math.min(e, Math.max(i, Math.min(KJ.zoomMin, e)))
  );
}
function YJ(e, t, n) {
  let r = 0,
    i = 0,
    a = 0,
    o = 0;
  for (let n of t)
    ((r = Math.max(
      r,
      Math.abs(n.x - e.x) * (n.y > e.y ? KJ.nearWide : 1) + KJ.sideRoom,
    )),
      (i = Math.max(i, e.y - n.y + KJ.headRoom)),
      (a = Math.max(a, n.y - e.y + KJ.footRoom)),
      n.speaks && (o = Math.max(o, n.y - e.y)));
  let s = n.h * (0.5 - KJ.bars),
    c = (e, t) => (e > 0 ? t / (e * GJ) : 1 / 0);
  return Math.min(c(r, n.w / 2), c(i, s), c(a, s), c(o, n.h * (0.5 - KJ.talk)));
}
var XJ = (e) => e;
function ZJ(e, t, n) {
  let r = t - e.x,
    i = n - e.y;
  return Math.abs(r) > Math.abs(i) ? (r > 0 ? 2 : 3) : i > 0 ? 0 : 1;
}
function QJ(e) {
  throw Error(`A beat the scene player doesn't know: ${JSON.stringify(e)}`);
}
