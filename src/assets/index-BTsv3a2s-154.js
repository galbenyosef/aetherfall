// index-BTsv3a2s 154 — math
// Lines 90119-90317 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function $z(e, t) {
  let n = sM(`mon/${e.base}-${t}`);
  if (!n) return null;
  let r = NR * (e.size ?? 1),
    i = Math.abs(r - 1) > 1e-6,
    a = Math.round(n.ax * Yz),
    o = i ? Math.ceil(a * r) + Math.ceil((n.c.width - a) * r) : n.c.width,
    s = null,
    c = [],
    l = [],
    u = [],
    d = [],
    f = (t) => {
      let o = c[t];
      if (!o) {
        s ??= sie(e.dye, n.frames);
        let l = s[t];
        if (i) {
          let e = MR(
              l.getContext(`2d`).getImageData(0, 0, l.width, l.height),
              r,
              a,
            ),
            [t, n] = M(e.img.width, e.img.height);
          (n.putImageData(e.img, 0, 0), (o = jp(t, Yz)));
        } else o = l;
        c[t] = o;
      }
      return o;
    };
  return {
    n: n.frames.length,
    fps: aie[t],
    ax: i ? Math.ceil(a * r) / Yz : n.ax,
    ay: i ? Math.ceil(n.ay * Yz * r - 0.5) / Yz : n.ay,
    w: o / Yz,
    frame(e, t, n) {
      let r = f(e);
      return n
        ? t
          ? (d[e] ??= jp(Ip(Fp(r)), Yz))
          : (u[e] ??= jp(Fp(r), Yz))
        : t
          ? (l[e] ??= jp(Ip(r), Yz))
          : r;
    },
  };
}
var eB = new Map();
function tB(e) {
  let t = iie[e];
  if (!t || !oM()) return null;
  if (eB.has(e)) return eB.get(e);
  let n = $z(t, `idle`),
    r = n
      ? {
          idle: n,
          walk: $z(t, `walk`) ?? n,
          attack: $z(t, `attack`) ?? n,
          death: $z(t, `death`),
        }
      : null;
  return (eB.set(e, r), r);
}
function cie(e) {
  let t = tB(e)?.death;
  return t ? t.n / t.fps + nB : 0;
}
var nB = 0.45,
  rB = new Map();
function lie(e) {
  let t = rB.get(e);
  if (t !== void 0) return t;
  let n = tB(e);
  if (!n) return 0;
  let r = n.idle.frame(0, !1, !1),
    i = r.getContext(`2d`).getImageData(0, 0, r.width, r.height).data,
    a = r.height,
    o = 0;
  for (let e = 0; e < r.height; e++)
    for (let t = 0; t < r.width; t++)
      i[(e * r.width + t) * 4 + 3] > 40 &&
        ((a = Math.min(a, e)), (o = Math.max(o, e)));
  let s = r.width,
    c = -1;
  for (let e = Math.max(a, Math.round(o - (o - a) * 0.25)); e <= o; e++)
    for (let t = 0; t < r.width; t++)
      i[(e * r.width + t) * 4 + 3] > 40 &&
        ((s = Math.min(s, t)), (c = Math.max(c, t)));
  let l = c >= s ? (c - s + 1) / Yz : 0;
  return (rB.set(e, l), l);
}
var iB = new Map();
function aB(e) {
  if (iB.has(e)) return iB.get(e);
  let t = tB(e);
  if (!t) return null;
  let n = t.idle,
    r = Math.min(4, n.n),
    i = Array.from({ length: r }, (e, t) => Math.floor((t * n.n) / r)),
    a = {
      frames: i.map((e) => n.frame(e, !1, !1)),
      flipped: i.map((e) => n.frame(e, !0, !1)),
      flash: i.map((e) => n.frame(e, !1, !0)),
      ax: n.ax,
      ay: n.ay,
    };
  return (iB.set(e, a), a);
}
var uie = new WeakMap(),
  oB = new WeakMap();
function sB(e, t, n) {
  let r = `${t},${n}`,
    i = oB.get(e);
  i || oB.set(e, (i = new Map()));
  let a = i.get(r);
  if (!a) {
    let o = 2 * Math.max(t, e.width - t),
      s = 2 * Math.max(n, e.height - n),
      [c, l] = M(o, s);
    (l.drawImage(e, o / 2 - t, s / 2 - n), i.set(r, (a = c)));
  }
  return a;
}
function cB(e) {
  if (e === `golem` || e === `warden`) {
    let e = xh(`golem`);
    return [e.ax, e.ay];
  }
  let t = mg[e];
  return t ? [t.ax, t.ay] : [0, 0];
}
var lB = (e) => `(${e[0]}, ${e[1]})`;
function die(e) {
  let [t, n] = cB(e),
    r = (e, t) => (e && uie.set(e, t), e),
    i = (e, t, n) =>
      `${e}/"${t}"${n ? ` ${n[0] === n[1] ? n[0] : `${n[0]}-${n[1]}`}` : ``}`,
    a = (t, n, r) => {
      let i = Lk(e, t, n);
      if (!i || !i.length) return;
      let a = Ik(i, r ? i.slice(r[0], r[1] + 1) : i.slice());
      return a.length ? a : void 0;
    },
    o = (e, t, n, i, o, s) => {
      let c = a(e, t, o.f);
      if (!c) return;
      let l = c[0].width,
        u = c[0].height,
        d = { frames: c, dx: i[0] + l / 2 - n[0], dy: i[1] + u / 2 - n[1] };
      return (o.once && (d.once = !0), r(d, s));
    };
  return {
    s: (e, t, n) => r(a(e, t, n), i(e, t, n)),
    at: (e, t, n, o) => {
      let s = a(e, t, o);
      return r(
        s &&
          Ik(
            s,
            s.map((e) => sB(e, n[0], n[1])),
          ),
        `${i(e, t, o)} @ ${lB(n)}`,
      );
    },
    mirror: (e, t, n) => {
      let o = a(e, t, n);
      return r(o && Ik(o, o.map(Ip)), `${i(e, t, n)} mirrored`);
    },
    onSprite: (e, r, a, s, c = {}) =>
      o(
        e,
        r,
        a,
        [s[0] - t, s[1] - n],
        c,
        `${i(e, r, c.f)} cell ${lB(a)} on sprite ${lB(s)}`,
      ),
    onFeet: (e, t, n, r, a = {}) =>
      o(e, t, n, r, a, `${i(e, t, a.f)} cell ${lB(n)} at feet + ${lB(r)}`),
    arc: (e, o, s, c) => {
      let l = a(e, o);
      if (!l) return;
      let u = l[0].width,
        d = {
          frames: l.map((e) => sB(e, u / 2, s[1])),
          dx: c[0] - t,
          dy: c[1] - n,
          dist: u / 2 - s[0],
        };
      return r(d, `${i(e, o)} pivot ${lB(s)} on sprite ${lB(c)}`);
    },
    feet: (e) => ({ dx: e[0] - t, dy: e[1] - n }),
    sp: (e) => [t + e[0], n + e[1]],
  };
}
function uB(e, t, n = {}) {
  return e && t ? { rise: e, stand: t, ...n } : void 0;
}
