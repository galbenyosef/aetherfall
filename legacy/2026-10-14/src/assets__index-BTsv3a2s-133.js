// assets__index-BTsv3a2s 133 — math
// Lines 83394-83559 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function AP(e, t, n, r, i) {
  let { tiles: a, regions: o } = Vr(),
    s = new Uint32Array(e.buffer, e.byteOffset, e.length >> 2),
    c = 512 * wP,
    l = (e, t) => (e < 0 || t < 0 || e >= Or || t >= kr ? -1 : a[t * Or + e]),
    u = (e, r, i) => {
      if (!e) return;
      let a = (r - t * 32) * 32,
        o = (i - n * 32) * 32;
      for (let t = 0; t < 32; t++) {
        let n = (o + t) * c + a,
          r = t * 32;
        for (let t = 0; t < 32; t++, n++, r++) {
          let t = e[r],
            i = t >>> 24;
          if (i !== 0) {
            if (i === 255 || !(s[n] >>> 24)) s[n] = t;
            else {
              let e = i / 255,
                r = s[n],
                a = Math.round((t & 255) * e + (r & 255) * (1 - e)),
                o = Math.round(
                  ((t >>> 8) & 255) * e + ((r >>> 8) & 255) * (1 - e),
                ),
                c = Math.round(
                  ((t >>> 16) & 255) * e + ((r >>> 16) & 255) * (1 - e),
                );
              s[n] = ((255 << 24) | (c << 16) | (o << 8) | a) >>> 0;
            }
          }
        }
      }
    };
  for (let e = n * 32 + r; e < Math.min(kr, n * 32 + i); e++)
    for (let n = t * 32; n < Math.min(Or, (t + 1) * 32); n++) {
      let t = a[e * Or + n],
        r = o[e * Or + n] === eP;
      if (t === A.Bridge || t === A.Dock) {
        let i = l(n - 1, e) === t ? (l(n + 1, e) === t ? 1 : 2) : 0;
        u(Kj(r ? `bridge/v-snow` : `bridge/v`, (e & 1) * 3 + i), n, e);
      } else if (t === A.BridgeH) {
        let i = l(n, e - 1) === t ? (l(n, e + 1) === t ? 1 : 2) : 0;
        (u(Kj(r ? `bridge/h-snow` : `bridge/h`, i * 5 + (n % 5)), n, e),
          i === 2 &&
            u(
              Kj(r ? `bridge/h-rails-snow` : `bridge/h-rails`, 5 + (n % 5)),
              n,
              e,
            ));
      } else {
        if (t !== A.Water && t !== A.DeepWater && t !== A.Ice) continue;
        let r = l(n, e + 1),
          i = l(n, e - 1),
          a = (e) => o[e * Or + n] === eP;
        (r === A.BridgeH &&
          u(
            Kj(a(e + 1) ? `bridge/h-rails-snow` : `bridge/h-rails`, n % 5),
            n,
            e,
          ),
          i === A.BridgeH &&
            u(
              Kj(
                a(e - 1) ? `bridge/h-rails-snow` : `bridge/h-rails`,
                10 + (n % 5),
              ),
              n,
              e,
            ));
      }
    }
}
function jP(e, t, n, r, i, a) {
  let o = new Uint32Array(e.buffer, e.byteOffset, e.length >> 2),
    s = 512 * wP,
    c = t * s,
    l = n * s,
    u = (n * 32 + r) * 32,
    d = Math.min(kr, n * 32 + i) * 32,
    f = c,
    p = Math.min(Or * 32, c + s);
  for (let e = n * 32 + r; e <= Math.min(kr, n * 32 + i); e++)
    for (let n = t * 32; n <= Math.min(Or, (t + 1) * 32); n++) {
      let t = a(n - 1, e - 1),
        r = a(n, e - 1),
        i = a(n, e),
        m = a(n - 1, e);
      if (t === 255 || r === 255 || i === 255 || m === 255) continue;
      let h = Wj(t, r, i, m, n, e),
        g = Math.max(f, n * 32 - 16),
        _ = Math.min(p, n * 32 + 16),
        v = Math.max(u, e * 32 - 16),
        y = Math.min(d, e * 32 + 16);
      for (let t = v; t < y; t++) {
        let r = (t - (e * 32 - 16)) * 32 + (g - (n * 32 - 16)),
          i = (t - l) * s + (g - c);
        for (let e = g; e < _; e++) o[i++] = h[r++];
      }
    }
}
var MP = [
    [0, 1, 2, 3, 4].map((e) => `gl/items-flowers1-${e}`),
    [0, 1, 2, 3].map((e) => `gl/items-flowers2-${e}`),
    [0, 1, 2, 3, 4, 5].map((e) => `gl/items-flowers3-${e}`),
    [0, 1, 2, 3, 4, 5].map((e) => `gl/items-flowers5-${e}`),
    [0, 1, 2, 3, 4, 5].map((e) => `gl/items-flowers6-${e}`),
  ],
  NP = [8, 9, 10, 11, 12, 14, 16, 18].map((e) => `hl/wooden-logs-${e}`),
  PP = [2, 3, 4, 5, 6, 9].map((e) => `hl/rocks-snow-${e}`),
  FP = [
    ...[3, 4, 5, 6].map((e) => `gl/items-mushrooms1-${e}`),
    ...[3, 4, 5, 6].map((e) => `gl/items-mushrooms2-${e}`),
    ...[3, 4, 5, 6].map((e) => `gl/items-mushrooms4-${e}`),
  ],
  IP = [
    `gl/crops-carrot-5`,
    `gl/crops-pumpkin-5`,
    `gl/crops-red-cabagge-5`,
    `gl/crops-corn-taller`,
    `gl/crops-potato-5`,
    `gl/crops-cauliflower-5`,
    `gl/crops-broccoli-5`,
    `gl/crops-eggplant-5`,
    `gl/crops-melon-5`,
    `gl/crops-tomato-5`,
    `gl/crops-bok-chok-5`,
  ],
  LP = [
    `crop16`,
    `crop15`,
    `crop07`,
    `crop17`,
    `crop11`,
    `crop13`,
    `crop20`,
    `crop06`,
    `crop05`,
  ],
  RP = null;
function zP(e, t) {
  if (!RP) {
    let { tiles: e } = Vr(),
      t = new Int32Array(Or * kr),
      n = 0,
      r = [];
    for (let i = 0; i < t.length; i++)
      if (!(e[i] !== A.Greens || t[i]))
        for (t[i] = ++n, r.push(i); r.length;) {
          let i = r.pop(),
            a = i % Or,
            o = (i - a) / Or;
          for (let [i, s] of [
            [a + 1, o],
            [a - 1, o],
            [a, o + 1],
            [a, o - 1],
          ]) {
            if (i < 0 || s < 0 || i >= Or || s >= kr) continue;
            let a = s * Or + i;
            e[a] === A.Greens && !t[a] && ((t[a] = n), r.push(a));
          }
        }
    RP = t;
  }
  return RP[t * Or + e];
}
