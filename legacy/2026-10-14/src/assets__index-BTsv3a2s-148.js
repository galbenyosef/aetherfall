// assets__index-BTsv3a2s 148 — math
// Lines 88022-88337 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function nz(e) {
  let [t, n] = ez[e],
    r = (e, t, n) => {
      let [r, i] = ig(e, t, n);
      return i > 0.25 && r >= 175 && r < 260;
    },
    i = (e, t, n) => {
      let [r, i] = ig(e, t, n);
      return i > 0.25 && r >= 120 && r < 175;
    },
    a = (e) => ag(ag(e, t, r), n, i),
    o = ZR(`npc/wizard-idle`, 8, a);
  return (
    o && {
      idle: o,
      walk: null,
      work: ZR(`npc/wizard-work`, 10, a),
      rest: 6,
      shadow: !1,
      hurt: ZR(`npc/wizard-hurt`, 15, a),
    }
  );
}
function rz(e) {
  let t = (e) =>
    e && { frames: e.frames.map(og), ax: e.ax, ay: e.ay, fps: e.fps };
  return (
    e && {
      idle: t(e.idle),
      walk: null,
      work: t(e.work),
      rest: e.rest,
      shadow: !0,
      hurt: null,
    }
  );
}
var iz = new Map();
function az(e, t) {
  return oM() ? (iz.has(e) || iz.set(e, t()), iz.get(e)) : null;
}
function oz(e, t = 0) {
  return az(`realm:${e}#${t}`, () => {
    if (e === `forgewright`) return QR();
    if (e === `archmage`) return nz(`archmage`);
    if (e === `idrisRemembered`) return rz(nz(`idris`));
    let n = XR[e];
    return n ? GR(n[t % n.length]) : null;
  });
}
function sz(e) {
  let t = xR(e);
  return t
    ? kR(t)
    : !oM() || nm(`folk:${e}`)
      ? null
      : az(e, () => {
          let [t, n] = e.split(`#`),
            r = Number(n ?? 0) || 0;
          if (t.startsWith(`realm:`)) return oz(t.slice(6), r);
          if (t.startsWith(`npc:`)) return cz(t.slice(4));
          if (t === `refugee`) return oz(`refugee`, r);
          if (t === `smith`) return QR();
          if (t === `fishmonger`) return $R();
          if (ez[t] && t !== `archmage`) return nz(t);
          let i = KL[t];
          return i ? GR(YR(t, i, r)) : null;
        });
}
function cz(e) {
  return e === `holloway`
    ? nm(`watch:captain`)
      ? null
      : uz()
    : tz.has(e)
      ? az(`npc:${e}`, () => nz(e))
      : null;
}
var lz = null;
function uz() {
  if (lz) return lz;
  let e = fR(`idle`);
  if (!e) return null;
  let t = fR(`walk`),
    n = fR(`attack`),
    r = fR(`death`);
  return (
    (lz = {
      idle: { ...e },
      walk: t && { ...t },
      work: null,
      rest: 0,
      shadow: !1,
      attack: n && { ...n },
      death: r && { ...r },
    }),
    lz
  );
}
var dz = { dx: 7, dy: -16 };
function fz(e, t, n) {
  return { x: e + (n === 3 ? -dz.dx : dz.dx) * NR, y: t + dz.dy * NR };
}
var pz = (e) => Math.round(e * LR) / LR;
function mz(e, t, n, r, i) {
  let a = t.idle,
    o = Math.max(0, i.t),
    s = !1;
  if (i.death !== void 0 && t.death)
    ((a = t.death), (o = Math.max(0, i.death)), (s = !0));
  else if (i.hurt !== void 0 && t.hurt)
    ((a = t.hurt), (o = Math.max(0, i.hurt)), (s = !0));
  else if (
    i.attack !== void 0 &&
    t.attack &&
    i.attack >= 0 &&
    i.attack < t.attack.frames.length / t.attack.fps
  )
    ((a = t.attack), (o = i.attack), (s = !0));
  else if (
    i.cast !== void 0 &&
    t.cast &&
    i.cast >= 0 &&
    i.cast < t.cast.frames.length / t.cast.fps
  )
    ((a = t.cast), (o = i.cast), (s = !0));
  else if (i.moving && t.walk) a = t.walk;
  else if (i.working && t.work) {
    let e = t.work.frames.length / t.work.fps,
      n = o % (e + t.rest);
    n < e ? ((a = t.work), (o = n)) : (o = n - e);
  }
  let c = Math.floor(o * a.fps),
    l = hz(
      a,
      s ? Math.min(c, a.frames.length - 1) : c % a.frames.length,
      i.dir === 3,
    ),
    u = l.width / LR,
    d = Math.ceil(a.ax * LR * NR) / LR,
    f = i.dir === 3 ? u - d : d,
    p = Math.ceil(a.ay * LR * NR - 0.5) / LR,
    m = i.moving && !t.walk && !s ? -Math.round(Math.abs(Math.sin(o * 8))) : 0;
  (i.shadow !== !1 &&
    !t.shadow &&
    ((e.fillStyle = `rgba(0,0,0,0.3)`),
    e.beginPath(),
    e.ellipse(pz(n), pz(r), 6 * NR, 2.5 * NR, 0, 0, Math.PI * 2),
    e.fill()),
    e.drawImage(l, pz(n - f), pz(r - p + m), u, l.height / LR));
}
function hz(e, t, n) {
  let r = (e.big ??= []),
    i = r[t];
  if (!i) {
    let n = e.frames[t],
      a = MR(
        n.getContext(`2d`).getImageData(0, 0, n.width, n.height),
        NR,
        Math.round(e.ax * LR),
      ),
      [o, s] = M(a.img.width, a.img.height);
    (s.putImageData(a.img, 0, 0), (i = r[t] = jp(o, LR)));
  }
  if (!n) return i;
  let a = (e.bigFlipped ??= []);
  return (a[t] ??= jp(Ip(i), LR));
}
function gz(e) {
  let t = 0,
    n = 0,
    r = 0;
  for (let i of [e.idle, e.walk, e.work, e.hurt, e.attack, e.death, e.cast]) {
    if (!i) continue;
    let e = i.frames[0].width / LR;
    ((t = Math.max(t, i.ax, e - i.ax)),
      (n = Math.max(n, i.ay)),
      (r = Math.max(r, i.frames[0].height / LR - i.ay)));
  }
  return [t * NR + 4, n * NR + 4, r * NR + 4];
}
var _z = new Map();
function jre(e) {
  if (e.startsWith(`note:`)) return null;
  let t = sz(e);
  return t ? vz(e, t) : null;
}
function Mre(e) {
  let t = cz(e);
  return t ? vz(`npc:${e}`, t) : null;
}
function vz(e, t) {
  let n = _z.get(e);
  if (n) return n;
  let r = t.idle.frames[0],
    i = r.getContext(`2d`).getImageData(0, 0, r.width, r.height).data,
    a = 0;
  for (; a < r.height - 1 && !Nre(i, r.width, a);) a++;
  let [o, s] = M(40, 34);
  return (
    s.drawImage(r, 20 - Math.round(t.idle.ax * LR), 1 - a),
    _z.set(e, o),
    o
  );
}
function Nre(e, t, n) {
  for (let r = 0; r < t; r++) if (e[(n * t + r) * 4 + 3] > 0) return !0;
  return !1;
}
var yz = `#b01a2a`;
function bz(e, t, n, r, i, a) {
  return [
    Math.max(e - n, i - e) + 2,
    Math.max(0, t - r) + 2,
    Math.max(0, a - t) + 2,
  ];
}
function xz(e, t, n, r, i, a, o, s, c = {}) {
  let l = c.alpha === void 0 ? void 0 : { alpha: c.alpha };
  e.push({
    y: a,
    x: r,
    box: Sz(n, r, i, a, c),
    draw: () =>
      c.angle === void 0
        ? Bk(t, n, r - o, i - s, { ax: c.ax, ay: c.ay, alpha: c.alpha })
        : Uk(t, n, r - o, i - s, c.angle, l),
  });
}
function Sz(e, t, n, r, i) {
  if (i.angle !== void 0) {
    let i = Math.ceil(Math.hypot(e.width, e.height) / 2) + 1;
    return bz(t, r, t - i, n - i, t + i, n + i);
  }
  let a = i.ax ?? e.width / 2,
    o = i.ay ?? e.height / 2;
  return bz(t, r, t - a, n - o, t - a + e.width, n - o + e.height);
}
function Cz(e, t, n, r, i, a, o) {
  let s = Bp(a, i),
    c = s.width / 2;
  e.push({
    img: s,
    x0: Math.round(t - c),
    y: n,
    w: s.width,
    z0: r - c,
    z1: r + c,
    a: Math.max(0, Math.min(1, o)),
    add: !0,
  });
}
var wz = new WeakMap();
function Pre(e) {
  let t = wz.get(e);
  if (t) return t;
  let n = e.width,
    r = e.height,
    i = e.getContext(`2d`).getImageData(0, 0, n, r).data;
  t = [];
  for (let e = 0; e < n; e++) {
    let a = [];
    for (let t = 0; t < r; t++) {
      let o = (t * n + e) * 4;
      i[o + 3] < 8 ||
        a.push({
          d: t + 0.5 - r / 2,
          color:
            `#` +
            [i[o], i[o + 1], i[o + 2]]
              .map((e) => e.toString(16).padStart(2, `0`))
              .join(``),
          a: i[o + 3] / 255,
        });
    }
    t.push(a);
  }
  return (wz.set(e, t), t);
}
var Fre = 4096;
function Tz(e, t, n, r, i, a, o, s, c, l, u = {}) {
  let d = Math.hypot(s - i, c - a, l - o);
  if (d < 1 || !t.length) return;
  let f = zk(t, n, r),
    p = Pre(f),
    m = s - i,
    h = c - a - (l - o),
    g = Math.hypot(m, h) || 1,
    _ = u.widthK ?? 1,
    v = (-h / g) * _,
    y = (-m / g) * _,
    b = Math.floor(d),
    x = Fre;
  for (let t = 0; t < b && x > 0; t++) {
    let n = (t + 0.5) / d,
      r = i + (s - i) * n,
      m = a + (c - a) * n,
      h = o + (l - o) * n + (u.bow ? Math.sin(n * Math.PI) * u.bow : 0);
    for (let n of p[t % f.width])
      if (
        (hA(
          e,
          r + v * n.d,
          m,
          h + y * n.d,
          n.color,
          n.a * (u.a ?? 1),
          !1,
          !u.lit,
          1,
        ),
        --x <= 0)
      )
        break;
  }
}
