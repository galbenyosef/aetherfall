// assets__index-BTsv3a2s 162 — math
// Lines 93743-93864 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function TV(e, t, n = {}) {
  return e.map((e) => {
    let r = e.width,
      i = e.height,
      [a, o] = M(r, i),
      s = e.getContext(`2d`).getImageData(0, 0, r, i).data,
      c = o.createImageData(r, i);
    for (let e = 0; e < r * i; e++) {
      if (s[e * 4 + 3] === 0) continue;
      let i =
        `#` +
        [s[e * 4], s[e * 4 + 1], s[e * 4 + 2]]
          .map((e) => e.toString(16).padStart(2, `0`))
          .join(``);
      if (!t(e % r, Math.floor(e / r), i)) continue;
      let [a, o, l] = n[i] ? Lp(n[i]) : [s[e * 4], s[e * 4 + 1], s[e * 4 + 2]];
      c.data.set([a, o, l, s[e * 4 + 3]], e * 4);
    }
    return (o.putImageData(c, 0, 0), a);
  });
}
var EV = null,
  DV = -1;
function OV() {
  DV !== Wp() && ((DV = Wp()), (EV = null), AV.clear());
}
function kV(e) {
  return (
    OV(),
    (EV ??= TV(
      e.slice(1, 4),
      (e, t, n) => n === `#f2fbff` && !(t === 4 && e >= 2 && e <= 4),
    ))
  );
}
var AV = new Map();
function jV(e, t) {
  OV();
  let n = AV.get(t);
  if (n) return n;
  let r = `#ff7a1a`,
    i = `#fff36b`,
    a = { [r]: t, [i]: t };
  return (
    (n = TV(
      [e[0], e[1]],
      (e, t, n) =>
        ((e === 25 || e === 26) && t >= 3 && t <= 12) ||
        [13, 39].some(
          (a) =>
            Math.abs(e - a) + Math.abs(t - 8) * 0.75 <= 3.4 ||
            ((n === r || n === i) && Math.hypot(e - a, t - 8) <= 4.6),
        ),
      a,
    )),
    n.push(...TV([e[3]], () => !0, a)),
    AV.set(t, n),
    n
  );
}
var Zie = null;
function Qie(e) {
  return (Zie ??= TV(
    [e[0]],
    (e, t, n) => Math.hypot(e - 56, t - 32) < 13 && !Yie.has(n),
  ));
}
var MV = new WeakMap();
function $ie(e) {
  let t = MV.get(e);
  return (
    t ||
      ((t = [
        [1, 1],
        [-1, 1],
        [1, -1],
        [-1, -1],
      ].map(([t, n]) =>
        e.map((e) => {
          let [r, i] = M(e.width, e.height);
          return (
            i.translate(t < 0 ? e.width : 0, n < 0 ? e.height : 0),
            i.scale(t, n),
            i.drawImage(e, 0, 0),
            r
          );
        }),
      )),
      MV.set(e, t)),
    t
  );
}
function eae(e, t, n, r, i, a) {
  let o = Math.max(6, Math.round(r / 3.2)),
    s = Math.ceil(r * 14);
  for (let c = 0; c < s; c++) {
    let l = (c / s) * vV,
      u = Math.sin(l * o + i),
      d = r + u * a;
    ((e.fillStyle = u > 0.6 ? yV[4] : u > -0.3 ? yV[3] : yV[2]),
      e.fillRect(
        Math.round(t + Math.cos(l) * d - 0.5),
        Math.round(n + (Math.sin(l) * d) / 1.1 - 0.5),
        1,
        1,
      ));
  }
}
function NV(e, t, n, r) {
  let i = n.x - e.x,
    a = (n.y - e.y) * 1.1,
    o = Math.hypot(i, a);
  if (o < 0.01 || t + r < o || Math.abs(t - r) > o) return [];
  let s = (t * t - r * r + o * o) / (2 * o),
    c = Math.sqrt(Math.max(0, t * t - s * s)),
    l = i / o,
    u = a / o;
  return [-1, 1].map((t) => ({
    x: e.x + l * s - u * c * t,
    y: e.y + (u * s + l * c * t) / 1.1,
  }));
}
