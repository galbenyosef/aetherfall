// index-BTsv3a2s 164 — map
// Lines 94999-95073 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function HV(e) {
  let t = VV.get(e);
  return (t || VV.set(e, (t = e.map(Ip))), t);
}
var UV = new WeakMap();
function oae(e) {
  let t = UV.get(e);
  if (t) return t;
  let n = (e, t) =>
    `#` +
    [e[t], e[t + 1], e[t + 2]]
      .map((e) => e.toString(16).padStart(2, `0`))
      .join(``);
  return (
    (t = e.map((e) => {
      let t = e.width,
        r = e.height,
        [i, a] = M(t, r),
        o = e.getContext(`2d`).getImageData(0, 0, t, r),
        s = o.data;
      for (let e = 0; e < t; e++) {
        let i = -1;
        for (let a = 0; a < r; a++)
          s[(a * t + e) * 4 + 3] &&
            n(s, (a * t + e) * 4) === `#fff7d1` &&
            (i = a);
        let a = 9;
        if (i >= 0) {
          let o = i + 1;
          for (; o < r && n(s, (o * t + e) * 4) === `#ffb84a`;) o++;
          a = Math.max(a, o - 1);
        }
        for (let n = a + 1; n < r; n++) s[(n * t + e) * 4 + 3] = 0;
      }
      return (a.putImageData(o, 0, 0), i);
    })),
    UV.set(e, t),
    t
  );
}
var WV = null;
function sae() {
  if (aB(`kilnmother`)) return null;
  if (WV) return WV;
  let e = Py(`kilnmother`);
  if (!e) return null;
  let t = (e, t) => {
    let [n, r] = M(23, 19);
    return (r.drawImage(e, t, 21, 23, 19, 0, 0, 23, 19), n);
  };
  return (WV = [t(e.frames[0], 17), t(e.flipped[0], 12)]);
}
var GV = new WeakMap();
function KV(e) {
  let t = GV.get(e);
  return (
    t ||
    ((t = e.map((e) => {
      let [t, n] = M(e.width, e.height),
        r = e.getContext(`2d`).getImageData(0, 0, e.width, e.height),
        i = r.data;
      for (let e = 0; e < i.length; e += 4) {
        let t =
          `#` +
          [i[e], i[e + 1], i[e + 2]]
            .map((e) => e.toString(16).padStart(2, `0`))
            .join(``);
        aae.has(t) && (i[e + 3] = 0);
      }
      return (n.putImageData(r, 0, 0), t);
    })),
    GV.set(e, t),
    t)
  );
}
