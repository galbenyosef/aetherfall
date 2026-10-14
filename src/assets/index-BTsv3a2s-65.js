// index-BTsv3a2s 65 — math
// Lines 39068-39408 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Iee(e) {
  let t = ly.get(e);
  if (t) return t;
  let n = { open: [], liquid: [], deep: [], face: [], light: [], shallow: [] },
    r = (t, n) =>
      t < 0 || n < 0 || t >= e.w || n >= e.h ? Ao.VOID : e.tiles[n * e.w + t];
  for (let t = 0; t < e.h; t++)
    for (let i = 0; i < e.w; i++) {
      let e = r(i, t);
      (jo(e, !0) && n.open.push([i, t]),
        (e === Ao.SHALLOW || e === Ao.DEEP) && n.liquid.push([i, t]),
        e === Ao.SHALLOW && n.shallow.push([i, t]),
        e === Ao.DEEP && n.deep.push([i, t]),
        e === Ao.WALL && jo(r(i, t + 1), !0) && n.face.push([i, t]));
    }
  for (let t of e.props)
    (ry[t.kind]?.light || t.kind === `sconce` || t.kind === `waystone`) &&
      n.light.push([t.x, t.y]);
  return (ly.set(e, n), n);
}
function uy(e, t, n, r) {
  let i = cy[e.theme],
    a = Iee(e),
    o = [];
  return (
    i.emitters.forEach((i, s) => {
      let c = a[i.where];
      if (!c.length) return;
      let l = Math.max(i.min ?? 0, Math.round((c.length * i.density) / 100));
      for (let a = 0; a < l; a++) {
        let l = (t) => H(a, s * 31 + t, e.seed + e.index * 7),
          u = (t * i.cycles + l(1)) % 1,
          d =
            ((Math.floor(t * i.cycles + l(1)) % i.cycles) + i.cycles) %
            i.cycles,
          f = c[Math.floor(H(a, d, s * 13 + 5) * c.length)],
          p = f[0] * 16 + H(a, d, s + 1) * 16,
          m =
            f[1] * 16 +
            (i.lift ? 16 - i.lift + H(a, d, s + 2) * 3 : H(a, d, s + 2) * 16),
          h = i.sway
            ? Math.sin((u * (i.swayFreq ?? 1) + l(3)) * Math.PI * 2) * i.sway
            : 0,
          g = p + i.vx * u + h,
          _ = m + i.vy * u;
        if (
          n &&
          (g < n.x - 8 || _ < n.y - 8 || g > n.x + n.w + 8 || _ > n.y + n.h + 8)
        )
          continue;
        let v = i.alpha;
        if (
          (i.fade === `inout`
            ? (v *= Math.sin(u * Math.PI))
            : i.fade === `out`
              ? (v *= 1 - u)
              : (v *= u < 0.5 ? (Math.sin(u * Math.PI * 4) > 0 ? 1 : 0.15) : 0),
          v <= 0.02)
        )
          continue;
        let y = i.colors[Math.floor(l(4) * i.colors.length)];
        i.toned && (y = Fee[Lee(e, f[0], f[1])][Math.floor(l(5) * 2)]);
        let b = i.size[0] + Math.floor(l(6) * (i.size[1] - i.size[0] + 1));
        r?.foot
          ? o.push({
              x: g,
              y: _,
              size: b,
              color: y,
              alpha: v,
              add: i.add,
              foot: i.lift ? f[1] * 16 + 16 : i.vy > 0 ? m + i.vy : m,
              where: i.where,
            })
          : o.push({ x: g, y: _, size: b, color: y, alpha: v, add: i.add });
      }
    }),
    o
  );
}
function Lee(e, t, n) {
  let r = e.rooms.find(
    (e) => t >= e.x && n >= e.y && t < e.x + e.w && n < e.y + e.h,
  );
  if (r?.tone) return r.tone;
  if (r && r.kind === `boss`) {
    let e = t < r.x + r.w / 2;
    return n < r.y + r.h / 2 ? (e ? `ember` : `rime`) : e ? `storm` : `void`;
  }
  return Co[Math.floor(H(Math.floor(t / 5), Math.floor(n / 5), 9) * 4)];
}
var dy = new Map();
function fy(e, t) {
  let n = e + t,
    r = dy.get(n);
  if (r) return r;
  let [i, a] = M(64, 64),
    o = a.createImageData(64, 64),
    [s, c, l] = [
      parseInt(e.slice(1, 3), 16),
      parseInt(e.slice(3, 5), 16),
      parseInt(e.slice(5, 7), 16),
    ],
    u = (e, t, n) => {
      let r = Math.floor(e),
        i = Math.floor(t),
        a = e - r,
        o = t - i,
        s = (e) => e * e * (3 - 2 * e),
        c = (e, t) => H(((e % 8) + 8) % 8, ((t % 8) + 8) % 8, n),
        l = c(r, i),
        u = c(r + 1, i),
        d = c(r, i + 1),
        f = c(r + 1, i + 1),
        p = s(a),
        m = s(o);
      return l + (u - l) * p + (d - l) * m + (l - u - d + f) * p * m;
    };
  for (let e = 0; e < 64; e++)
    for (let t = 0; t < 64; t++) {
      let n =
          (u((t / 64) * 8, (e / 64) * 8, 1) * 0.65 +
            u((t / 64) * 8 * 2, (e / 64) * 8 * 2, 2) * 0.35 * 1) /
          1,
        r = Math.max(0, (n - 0.35) / 0.65),
        i = (e * 64 + t) * 4;
      ((o.data[i] = s),
        (o.data[i + 1] = c),
        (o.data[i + 2] = l),
        (o.data[i + 3] = Math.round(r * 255)));
    }
  a.putImageData(o, 0, 0);
  let [d, f] = M(64 * t, 64 * t);
  return (
    (f.imageSmoothingEnabled = !1),
    f.drawImage(i, 0, 0, 64 * t, 64 * t),
    dy.set(n, d),
    d
  );
}
function py(e, t, n = 0.25) {
  let r = t * 8 + H(e, 1) * 8,
    i = Math.floor(r),
    a = r - i,
    o = H(e, i % 8);
  return 1 - n * (o + (H(e, (i + 1) % 8) - o) * a * a * (3 - 2 * a));
}
function Ree(e, t, n, r, i = {}) {
  let a = cy[t.theme];
  if (a.fog) {
    let i = fy(a.fog.color, a.fog.scale),
      [o, s] = M(r.w, r.h),
      c = (((r.x + a.fog.speed[0] * n * 8) % i.width) + i.width) % i.width,
      l = (((r.y + a.fog.speed[1] * n * 8) % i.height) + i.height) % i.height;
    for (let e = -l; e < r.h; e += i.height)
      for (let t = -c; t < r.w; t += i.width)
        s.drawImage(i, Math.round(t), Math.round(e));
    if (a.fog.low) {
      ((s.globalCompositeOperation = `destination-in`), (s.fillStyle = `#000`));
      for (let e = Math.floor(r.y / 16); e <= Math.ceil((r.y + r.h) / 16); e++)
        for (
          let n = Math.floor(r.x / 16);
          n <= Math.ceil((r.x + r.w) / 16);
          n++
        )
          jo(
            n < 0 || e < 0 || n >= t.w || e >= t.h
              ? Ao.VOID
              : t.tiles[e * t.w + n],
            !0,
          ) && s.fillRect(n * 16 - r.x, e * 16 - r.y, 16, 16);
      s.globalCompositeOperation = `source-over`;
    }
    ((e.globalAlpha = a.fog.alpha), e.drawImage(o, 0, 0), (e.globalAlpha = 1));
  }
  if (a.haze) {
    let i = e.getTransform().a,
      a = Math.round(r.w * i),
      o = Math.round(r.h * i),
      s = e.getImageData(0, 0, a, o),
      c = new Uint8ClampedArray(s.data);
    for (let e = Math.floor(r.y / 16); e <= Math.ceil((r.y + r.h) / 16); e++)
      for (let l = Math.floor(r.x / 16); l <= Math.ceil((r.x + r.w) / 16); l++)
        if (!(
          l < 0 ||
          e < 1 ||
          l >= t.w ||
          e >= t.h ||
          t.tiles[e * t.w + l] !== Ao.DEEP
        ))
          for (let t = (e - 1) * 16; t < (e + 1) * 16; t++) {
            let e = Math.round(Math.sin(t * 0.5 + n * Math.PI * 2 * 3)) * i;
            if (e)
              for (let n = 0; n < i; n++) {
                let u = Math.round((t - r.y) * i) + n;
                if (!(u < 0 || u >= o))
                  for (let t = l * 16 * i; t < (l + 1) * 16 * i; t++) {
                    let n = t - Math.round(r.x * i),
                      o = n + e;
                    if (n < 0 || n >= a || o < 0 || o >= a) continue;
                    let l = (u * a + n) * 4,
                      d = (u * a + o) * 4;
                    ((s.data[l] = c[d]),
                      (s.data[l + 1] = c[d + 1]),
                      (s.data[l + 2] = c[d + 2]));
                  }
              }
          }
    e.putImageData(s, 0, 0);
  }
  for (let i of uy(t, n, r)) {
    ((e.globalCompositeOperation = i.add ? `lighter` : `source-over`),
      (e.globalAlpha = i.alpha),
      (e.fillStyle = i.color));
    let t = Math.round(i.x - r.x),
      n = Math.round(i.y - r.y);
    if (i.size > 3) {
      let r = i.size * 1.6,
        a = e.createRadialGradient(t, n, 0, t, n, r);
      (a.addColorStop(0, i.color),
        a.addColorStop(1, `rgba(0,0,0,0)`),
        (e.fillStyle = a),
        (e.globalAlpha = i.alpha * 0.8),
        e.fillRect(t - r, n - r, r * 2, r * 2));
    } else e.fillRect(t, n, i.size, i.size);
  }
  ((e.globalAlpha = 1),
    (e.globalCompositeOperation = `source-over`),
    i.grade !== !1 && my(e, t, r.w, r.h, { vignette: i.vignette }));
}
function my(e, t, n, r, i = {}) {
  let a = cy[t.theme];
  if (
    (i.grade !== !1 &&
      ((e.globalAlpha = a.grade.alpha),
      (e.fillStyle = a.grade.tint),
      (e.globalCompositeOperation = `multiply`),
      e.fillRect(0, 0, n, r),
      (e.globalCompositeOperation = `source-over`),
      (e.globalAlpha = 1)),
    a.grade.vignette > 0 && i.vignette !== !1)
  ) {
    let t = e.createRadialGradient(
      n / 2,
      r / 2,
      Math.min(n, r) * 0.35,
      n / 2,
      r / 2,
      Math.max(n, r) * 0.7,
    );
    (t.addColorStop(0, `rgba(0,0,0,0)`),
      t.addColorStop(1, `rgba(4,2,8,${a.grade.vignette})`),
      (e.fillStyle = t),
      e.fillRect(0, 0, n, r));
  }
}
var hy = `#7ef9ff`,
  gy = `#120b1a`,
  _y = {
    black: `#12050a`,
    deep: `#3a0a18`,
    dark: `#5a0a1a`,
    mid: `#861222`,
    red: `#b01a2a`,
    hot: `#e0484e`,
    core: `#ffffff`,
  },
  vy = {
    ember: [`#7a1d10`, `#ff7a1a`, `#ffb238`, `#ffe08a`],
    rime: [`#173a78`, `#5cc8ff`, `#8ef6ff`, `#ffffff`],
    storm: [`#2e1f66`, `#a8b8ff`, `#fff36b`, `#fffbd1`],
    void: [`#140a22`, `#7a2fb8`, `#b84dff`, `#ff9cf5`],
  };
function yy(e, t, n = 0) {
  let r = Math.sin(e * 127.1 + t * 311.7 + n * 74.7) * 43758.5453;
  return r - Math.floor(r);
}
function by(e, t, n, r, i, a, o, s) {
  e.fillStyle = s;
  let c = (r - t) * (o - n) - (a - t) * (i - n);
  if (c !== 0)
    for (
      let s = Math.floor(Math.min(n, i, o));
      s <= Math.ceil(Math.max(n, i, o));
      s++
    )
      for (
        let l = Math.floor(Math.min(t, r, a));
        l <= Math.ceil(Math.max(t, r, a));
        l++
      ) {
        let u = l + 0.5,
          d = s + 0.5,
          f = ((r - u) * (o - d) - (a - u) * (i - d)) / c,
          p = ((a - u) * (n - d) - (t - u) * (o - d)) / c;
        f >= 0 && p >= 0 && 1 - f - p >= 0 && e.fillRect(l, s, 1, 1);
      }
}
function xy(e, t, n, r, i, a) {
  let o = Math.max(Math.abs(r - t), Math.abs(i - n), 1);
  for (let s = 0; s <= o; s++)
    N(e, t + ((r - t) * s) / o, n + ((i - n) * s) / o, a);
}
var Sy = new Map();
function Cy(e, t, n, r) {
  let i = Sy.get(e);
  if (i) return i;
  let [a, o] = M(t, n);
  return (r(o, a), Sy.set(e, a), a);
}
var wy = (e, t, n, r, i, a = gy) => {
  let [o, s] = M(e, t);
  return (i(s), a && F(o, a), { c: o, ax: n, ay: r });
};
function zee(e, t, n) {
  return wy(12, 16, 6, 20, (r) => {
    let i = e === `folly` ? `#e0b64a` : e === `rime` ? `#9fd0ea` : `#6f6a7a`;
    if (
      (N(r, 3, 10, i, 6, 2),
      N(r, 5, 12, i, 2, 3),
      N(r, 4, 9, I(i, -0.3), 4, 1),
      e === `folly` || e === `barrow`)
    ) {
      if ((N(r, 4, 5, `#efe6cf`, 2, 4), N(r, 7, 6, `#efe6cf`, 2, 3), t)) {
        let e = [0, 1, 0, -1][n % 4];
        (N(r, 4, 3 + +(e > 0), `#ffd166`, 2, 2),
          N(r, 7, 4, `#ffb238`, 2, 2),
          N(r, 4 + +(e < 0), 2, `#fff7d1`));
      }
    } else {
      let i = t
        ? e === `ember`
          ? [`#c2361f`, `#ff7a1a`, `#ffe08a`]
          : [`#2a8fb0`, hy, `#ffffff`]
        : [`#3a3f4a`, `#4a5060`, `#5a6070`];
      (by(r, 3, 9, 9, 9, 6, 1 - (t && n % 2 ? 1 : 0), i[0]),
        by(r, 4, 9, 7, 9, 5.5, 3, i[1]),
        N(r, 5, 5, i[2]));
    }
  });
}
