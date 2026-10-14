// assets__index-BTsv3a2s 39 — math
// Lines 30247-30595 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function mp(e, t, n, r) {
  let i = e.summon,
    a = [],
    o = r() * lp;
  for (let e = 0; e < i.n; e++) {
    let s = o + (e / i.n) * lp,
      c = i.spread * (0.6 + r() * 0.4);
    a.push({ x: t + Math.cos(s) * c, y: n + Math.sin(s) * c * 0.85 });
  }
  return a;
}
function hp(e, t, n) {
  if (!t || !n) return e;
  let r = t * n;
  if (e.t === `cone`) return { ...e, a: e.a + r };
  if (e.t !== `line`) return e;
  let i = Math.cos(r),
    a = Math.sin(r),
    o = e.x1 - e.x0,
    s = e.y1 - e.y0;
  return { ...e, x1: e.x0 + o * i - s * a, y1: e.y0 + o * a + s * i };
}
function gp(e, t) {
  return e.zone
    ? t.beams
      ? t.beams.map((e) => hp(e, t.turn ?? 0, 1))
      : t.shapes
    : [];
}
function _p(e) {
  let t = 0;
  for (let n of e.beats ?? []) t = Math.max(t, n);
  for (let n of e.bands ?? []) t = Math.max(t, n[2]);
  return (
    e.form === `wall` &&
      e.layout === `rows` &&
      (t = Math.max(t, 0.3 * ((e.n ?? 5) - 1))),
    t
  );
}
function vp(e) {
  let t = Cp(e) + _p(e);
  return (
    (e.form === `beam` || e.form === `wall` || e.chain) &&
      (t = Math.max(t, (e.hold ?? 0) + _p(e))),
    e.form === `rings` && (t = Math.max(t, _p(e))),
    e.zone && (t = Math.max(t, e.zone.hold + _p(e))),
    t
  );
}
function yp(e, t, n, r = Math.random) {
  let i = e.n ?? 3,
    a = [{ x: t, y: n }],
    o = r() * Math.PI * 2;
  for (let s = 1; s < i; s++) {
    let c = o + (s / (i - 1)) * Math.PI * 2,
      l = e.r * 2 + 0.3 + r() * 0.8;
    a.push({ x: t + Math.cos(c) * l, y: n + Math.sin(c) * l * 0.85 });
  }
  return a;
}
function bp(e) {
  return e.form === `rain` ||
    e.form === `wall` ||
    e.form === `summon` ||
    e.form === `channel` ||
    e.form === `blink`
    ? !1
    : e.form !== `slam` || e.at !== `target`;
}
function xp(e, t, n, r) {
  return (
    (n === 0 && r === 0) ||
    Math.abs(Cf(Math.atan2(r, n), e)) <= (t * Math.PI) / 360
  );
}
function Sp(e) {
  switch (e.form) {
    case `bolt`:
      return 1 + (e.beats?.length ?? 0);
    case `spread`:
      return 2 + (e.beats?.length ?? 0);
    case `ring`:
      return 2 + (e.beats?.length ?? 0);
    case `blink`:
      return 0;
    case `rings`:
      return e.bands?.length || 1;
    case `wall`:
      return e.layout === `rows` ? 2 : 1;
    case `channel`:
      return e.channel?.pulse
        ? Math.floor(e.channel.dur / e.channel.pulse.every)
        : 0;
    default:
      return 1;
  }
}
function Cp(e) {
  return e.form === `bolt` || e.form === `spread` || e.form === `ring`
    ? (Math.max(e.max, 4) + 3) / (e.speed ?? 8)
    : 0;
}
function wp(e) {
  if (e <= 0) return Math.max(0.75, 1 + 0.05 * e);
  let t = Math.min(e, 25),
    n = 1 + 0.1 * Math.min(t, 5);
  return t > 5 ? n * 1.2 ** (t - 5) : n;
}
function Tp(e) {
  if (e <= 0) return Math.min(1.15, 1 - 0.03 * e);
  let t = Math.min(e, 25),
    n = 1 / (1 + 0.07 * Math.min(t, 5));
  return t > 5 ? n * 0.85 ** (t - 5) : n;
}
function Ep(e) {
  return e <= -5
    ? `#9a9aa8`
    : e < 3
      ? `#ffffff`
      : e < 5
        ? `#ffd166`
        : e <= 5
          ? `#ff9a3a`
          : `#ff4a4a`;
}
var Dp = 0.25;
function Op() {
  if (kp) return kp;
  let e = 1;
  try {
    typeof location < `u` &&
      (e = new URLSearchParams(location.search).get(`dens`) === `1` ? 1 : 2);
  } catch {}
  return (kp = e);
}
var kp = 0;
function Ap(e) {
  return e.dens ?? 1;
}
function jp(e, t) {
  return ((e.dens = t), e);
}
function Mp(e) {
  return e.width / Ap(e);
}
function Np(e) {
  return e.height / Ap(e);
}
function Pp(e, t, n, r) {
  let i = Ap(t);
  i === 1
    ? e.drawImage(t, n, r)
    : e.drawImage(t, n, r, t.width / i, t.height / i);
}
function M(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = e), (n.height = t));
  let r = n.getContext(`2d`);
  return ((r.imageSmoothingEnabled = !1), [n, r]);
}
function N(e, t, n, r, i = 1, a = 1) {
  ((e.fillStyle = r), e.fillRect(Math.round(t), Math.round(n), i, a));
}
function P(e, t, n, r, i, a) {
  e.fillStyle = a;
  for (let a = Math.floor(n - i); a <= Math.ceil(n + i); a++)
    for (let o = Math.floor(t - r); o <= Math.ceil(t + r); o++) {
      let s = (o + 0.5 - t) / r,
        c = (a + 0.5 - n) / i;
      s * s + c * c <= 1 && e.fillRect(o, a, 1, 1);
    }
}
function F(e, t = `#120b1a`) {
  let n = e.getContext(`2d`),
    r = n.getImageData(0, 0, e.width, e.height).data,
    i = e.width,
    a = e.height,
    o = (e, t) =>
      e >= 0 && t >= 0 && e < i && t < a && r[(t * i + e) * 4 + 3] > 20,
    s = [];
  for (let e = 0; e < a; e++)
    for (let t = 0; t < i; t++)
      o(t, e) ||
        ((o(t + 1, e) || o(t - 1, e) || o(t, e + 1) || o(t, e - 1)) &&
          s.push(t, e));
  n.fillStyle = t;
  for (let e = 0; e < s.length; e += 2) n.fillRect(s[e], s[e + 1], 1, 1);
}
function Fp(e, t = `#ffffff`) {
  let [n, r] = M(e.width, e.height);
  return (
    r.drawImage(e, 0, 0),
    (r.globalCompositeOperation = `source-in`),
    (r.fillStyle = t),
    r.fillRect(0, 0, e.width, e.height),
    jp(n, Ap(e))
  );
}
function Ip(e) {
  let [t, n] = M(e.width, e.height);
  return (
    n.translate(e.width, 0),
    n.scale(-1, 1),
    n.drawImage(e, 0, 0),
    jp(t, Ap(e))
  );
}
function Lp(e) {
  if (e.startsWith(`rgb`)) {
    let t = e.match(/\d+/g).map(Number);
    return [t[0], t[1], t[2]];
  }
  let t = parseInt(e.slice(1), 16);
  return [(t >> 16) & 255, (t >> 8) & 255, t & 255];
}
function I(e, t) {
  let [n, r, i] = Lp(e),
    a = (e) =>
      Math.max(
        0,
        Math.min(255, Math.round(t >= 0 ? e + (255 - e) * t : e * (1 + t))),
      );
  return `rgb(${a(n)},${a(r)},${a(i)})`;
}
function Rp(e, t) {
  let [n, r, i] = Lp(e);
  return `rgba(${n},${r},${i},${t})`;
}
var zp = new Map();
function Bp(e, t) {
  let n = Math.max(2, Math.round(t)),
    r = e + n,
    i = zp.get(r);
  if (i) return i;
  zp.size > 400 && (zp = new Map());
  let [a, o] = M(n * 2, n * 2),
    s = o.createRadialGradient(n, n, 0, n, n, n);
  return (
    s.addColorStop(0, Rp(e, 1)),
    s.addColorStop(0.35, Rp(e, 0.45)),
    s.addColorStop(1, Rp(e, 0)),
    (o.fillStyle = s),
    o.fillRect(0, 0, n * 2, n * 2),
    zp.set(r, a),
    (i = a),
    i
  );
}
var Vp = new Map(),
  Hp = 0,
  Up = 0;
function Wp() {
  return Up;
}
var Gp = (e, t) => `${e}:${t}`;
function Kp(e, t) {
  let n = [];
  for (let r = 0; r < t.rows; r++)
    for (let i = 0; i < t.cols; i++) {
      let [a, o] = M(t.fw, t.fh);
      (o.drawImage(e, i * t.fw, r * t.fh, t.fw, t.fh, 0, 0, t.fw, t.fh),
        n.push(a));
    }
  return n;
}
function qp(e, t) {
  let n = {};
  for (let [r, i] of Object.entries(e.anims ?? {})) {
    let e = i.frames.map((e) => t[e]).filter(Boolean);
    if (!e.length) continue;
    let a = e.map((e) => Fp(e));
    n[r] = {
      frames: e,
      flipped: e.map(Ip),
      flash: a,
      flashFlipped: a.map(Ip),
      fps: i.fps || 6,
    };
  }
  if (!Object.keys(n).length && t.length) {
    let e = t.map((e) => Fp(e));
    n.loop = {
      frames: t,
      flipped: t.map(Ip),
      flash: e,
      flashFlipped: e.map(Ip),
      fps: 6,
    };
  }
  return { meta: e, cells: t, seqs: n };
}
function Jp(e, t) {
  let n = Gp(e.target.t, e.target.key);
  if ((Up++, !t)) {
    Vp.delete(n);
    return;
  }
  Vp.set(n, qp(e, Kp(t, e)));
}
function Yp(e, t) {
  return Hp > 0 || !Vp.size ? null : (Vp.get(Gp(e, t)) ?? null);
}
function Xp(e, ...t) {
  for (let n of t) if (e.seqs[n]) return e.seqs[n];
  return Object.values(e.seqs)[0];
}
function Zp(e) {
  return typeof Image > `u` || !e.length
    ? Promise.resolve()
    : Promise.all(
        e.map(
          (e) =>
            new Promise((t) => {
              let n = new Image();
              ((n.onload = () => {
                (Jp(e.meta, n), t());
              }),
                (n.onerror = () => t()),
                (n.src = e.url));
            }),
        ),
      ).then(() => void 0);
}
var Qp = new WeakMap(),
  $p = new Map(),
  em = new WeakMap();
function tm(e, t) {
  return (Qp.set(t, e), $p.has(e) || $p.set(e, t), t);
}
function nm(e) {
  let t = Yp(`sheet`, e);
  if (!t) return null;
  let n = em.get(t);
  if (n) return n;
  let r = t.meta,
    i = [
      ...(r.anims.idle?.frames ?? [0, 1]).slice(0, 2),
      ...(r.anims.walk?.frames ?? [2, 3, 4, 5]).slice(0, 4),
      ...(r.anims.cast?.frames ?? [6]).slice(0, 1),
    ];
  for (; i.length < 7;) i.push(i[i.length - 1] ?? 0);
  let a = (e) =>
      i.map((n) => t.cells[e * r.cols + Math.min(n, r.cols - 1)] ?? t.cells[0]),
    o = [a(0), a(Math.min(1, r.rows - 1)), a(Math.min(2, r.rows - 1))];
  o[3] = r.rows >= 4 ? a(3) : o[2].map(Ip);
  let s = { frames: o, flash: o.map((e) => e.map((e) => Fp(e))) };
  return (Qp.set(s, e), em.set(t, s), s);
}
