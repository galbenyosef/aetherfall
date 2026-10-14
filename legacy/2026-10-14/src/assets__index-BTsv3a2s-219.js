// assets__index-BTsv3a2s 219 — math
// Lines 140400-140523 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function B1(e, t) {
  let n = `${t}`,
    r = z1.get(n);
  if (r) return r;
  let [i, a] = M(e.width, e.height);
  ((a.globalAlpha = 0.18 + 0.06 * t),
    a.drawImage(e, 0, 0),
    (a.globalAlpha = 1));
  let o = Ap(e);
  for (let n = 0; n < 24; n++) {
    let r = Math.sin(n * 127.1 + t * 311.7) * 43758.5453,
      i = Math.sin(t * 269.5 + n * 183.3) * 43758.5453;
    ((a.fillStyle = R1[n % 4]),
      a.fillRect(
        Math.floor((r - Math.floor(r)) * e.width),
        Math.floor((i - Math.floor(i)) * e.height),
        o,
        o,
      ));
  }
  let s = jp(i, o);
  return (z1.set(n, s), s);
}
function V1(e, t, n) {
  let r = sM(`dg/${e}`);
  if (!r) return null;
  let i = r.frames[Math.floor(n * 8) % r.frames.length];
  return { c: t ? B1(i, Math.floor(n * 3) % 2) : i, ax: r.ax, ay: r.ay };
}
var H1 = [-56, 56];
function U1() {
  return oM() && !!sM(`ar/cist-shrine`);
}
var W1 = class {
  p = 0;
  rising = !1;
  last = -1;
  update(e, t) {
    let n = this.last < 0 ? 0 : Math.min(0.1, Math.max(0, e - this.last));
    this.last = e;
    let r = +!!t;
    if (this.p === r) return;
    this.rising = r > this.p;
    let i = 12 / 10;
    this.p = this.rising
      ? Math.min(r, this.p + n * i)
      : Math.max(r, this.p - n * i);
  }
  get open() {
    return this.p;
  }
  draw(e, t, n, r) {
    let i = sM(`ar/cist-shrine`);
    if (!i) return;
    G1(e, i.c, t - i.ax, n - i.ay);
    let a = this.open,
      o = sM(`ar/cist-gate-open`),
      s = sM(`ar/cist-gate-close`);
    if (o && s) {
      let r;
      ((r =
        a <= 0
          ? o.frames[0]
          : a >= 1
            ? o.frames[o.frames.length - 1]
            : this.rising
              ? o.frames[Math.round(a * (o.frames.length - 1))]
              : s.frames[Math.round((1 - a) * (s.frames.length - 1))]),
        G1(e, r, t - o.ax, n - o.ay));
    }
    let c = sM(`ar/cist-fall`);
    c &&
      H1.forEach((i, a) =>
        G1(
          e,
          c.frames[(Math.floor(r * 10) + a * 3) % c.frames.length],
          t + i - c.ax,
          n - c.ay,
        ),
      );
  }
  river(e, t, n) {
    let r = sM(`ar/cist-river`);
    if (!r) return null;
    let i = n - 16 - Np(r.c);
    return {
      top: i,
      box: [Mp(r.c) / 2 + 8, 8, Np(r.c) + 8],
      draw: (n, a, o, s) =>
        G1(
          n,
          r.frames[(Math.floor(a * 10) + e * 3) % r.frames.length],
          t + H1[e] - r.ax - o,
          i - s,
        ),
    };
  }
  box() {
    let e = sM(`ar/cist-shrine`);
    return [
      Math.max(e ? Mp(e.c) / 2 : 48, Math.max(...H1.map(Math.abs)) + 16) + 8,
      (e ? e.ay : 16) + 8,
      (e ? Np(e.c) - e.ay : 64) + 8,
    ];
  }
};
function G1(e, t, n, r) {
  let i = Ap(t);
  e.drawImage(t, n, r, t.width / i, t.height / i);
}
var $ = 16,
  K1 = Math.PI * 2,
  q1 = new WeakMap();
function J1(e) {
  let t = q1.get(e);
  return (t || q1.set(e, (t = Ip(e))), t);
}
function Y1(e, t, n, r, i, a) {
  let o = i - n,
    s = a - r,
    c = o * o + s * s,
    l = c > 0 ? Math.max(0, Math.min(1, ((e - n) * o + (t - r) * s) / c)) : 0;
  return Math.hypot(e - (n + o * l), t - (r + s * l));
}
