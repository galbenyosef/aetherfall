// index-BTsv3a2s 187 — cols
// Lines 122480-122799 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var KK = 135,
  qK = [0, 1, 6, 3, 4, 7],
  JK = [80, 55, 125, 80, 55, 125],
  YK = {
    slash: {
      sword: [
        {
          page: 2,
          block: 0,
          cols: [0, 1, 2, 3],
          ms: [90, 50, 50, 100],
          blow: [1, 2],
        },
        {
          page: 2,
          block: 0,
          cols: [4, 5, 6, 7],
          ms: [90, 50, 50, 100],
          blow: [1, 2],
        },
      ],
    },
    twinslash: {
      sword: [
        {
          page: 2,
          block: 0,
          cols: [0, 1, 2, 3],
          ms: [70, 40, 40, 70],
          blow: [1, 2],
        },
        {
          page: 2,
          block: 0,
          cols: [4, 5, 6, 7],
          ms: [70, 40, 40, 70],
          blow: [1, 2],
        },
      ],
    },
    cleave: {
      sword: [
        {
          page: 2,
          block: 0,
          cols: [0, 1, 2, 3],
          ms: [150, 70, 70, 160],
          blow: [1, 2],
        },
      ],
    },
    thrust: {
      pole: [
        { page: 2, block: 4, cols: [0, 1, 2], ms: [80, 60, 120], blow: [1, 2] },
        { page: 2, block: 4, cols: [3, 4, 5], ms: [80, 60, 120], blow: [1, 2] },
      ],
    },
    sweep: {
      pole: [
        {
          page: 2,
          block: 0,
          cols: [0, 1, 2, 3],
          ms: [150, 70, 70, 160],
          blow: [1, 2],
        },
      ],
    },
    aegis: {
      sword: [
        {
          page: 2,
          block: 4,
          cols: [4, 5, 6, 7],
          ms: [140, 60, 60, 160],
          blow: [1, 2],
        },
      ],
    },
    shieldbash: {
      sword: [
        {
          page: 2,
          block: 4,
          cols: [4, 5, 6, 7],
          ms: [110, 60, 60, 140],
          blow: [1, 2],
        },
      ],
    },
    consecrate: {
      sword: [
        {
          page: 2,
          block: 0,
          cols: [4, 5, 6, 7],
          ms: [110, 60, 60, 140],
          blow: [1, 2],
        },
      ],
    },
    judgement: {
      sword: [
        {
          page: 2,
          block: 4,
          cols: [0, 1, 2, 3],
          ms: [140, 60, 60, 160],
          blow: [1, 2],
        },
      ],
    },
    stab: {
      sword: [
        {
          page: 2,
          block: 4,
          cols: [0, 1, 2, 3],
          ms: [50, 35, 35, 60],
          blow: [1, 2],
        },
      ],
    },
    arrow: {
      bow: [
        {
          page: 2,
          block: 4,
          cols: [4, 5, 6, 7],
          ms: [40, 70, 60, 70],
          blow: [1, 2],
        },
      ],
    },
    volley: {
      bow: [
        {
          page: 2,
          block: 4,
          cols: [3, 4, 5, 6, 7],
          ms: [60, 60, 70, 60, 80],
          blow: [2, 3],
        },
      ],
    },
    piercing: {
      bow: [
        {
          page: 2,
          block: 4,
          cols: [3, 4, 5, 6, 7],
          ms: [70, 90, 60, 60, 80],
          blow: [2, 3],
        },
      ],
    },
    explosive: {
      bow: [
        {
          page: 2,
          block: 4,
          cols: [3, 4, 5, 6, 7],
          ms: [70, 90, 60, 60, 80],
          blow: [2, 3],
        },
      ],
    },
    scatter: {
      bow: [
        {
          page: 2,
          block: 0,
          cols: [3, 4, 5, 6, 7],
          ms: [70, 80, 60, 60, 90],
          blow: [2, 3],
        },
      ],
    },
    arrowrain: {
      bow: [
        {
          page: 2,
          block: 0,
          cols: [2, 3, 4, 5, 6, 7],
          ms: [70, 70, 90, 70, 60, 90],
          blow: [3, 4],
        },
      ],
    },
  };
function XK(e) {
  if (!e.blow) return e;
  let [t, n] = e.blow;
  return { ...e, cols: e.cols.slice(t, n + 1), ms: e.ms.slice(t, n + 1) };
}
var ZK = { page: 1, block: 0, cols: [0, 1, 2, 3], ms: [200, 200, 200, 200] },
  QK = { page: 1, block: 0, cols: [4, 5, 6, 7], ms: [100, 100, 140, 170] },
  $K = { page: 0, block: 0, cols: [5], ms: [1] },
  eq = { page: 1, block: 4, cols: [0], ms: [1] };
function tq(e, t, n = !1) {
  let r = e.ms.reduce((e, t) => e + t, 0),
    i = t * 1e3;
  if (n && i >= r) return -1;
  i = ((i % r) + r) % r;
  for (let t = 0; t < e.cols.length; t++) {
    if (i < e.ms[t]) return e.cols[t];
    i -= e.ms[t];
  }
  return e.cols[e.cols.length - 1];
}
function nq(e) {
  return tq({ page: 0, block: 0, cols: qK, ms: JK }, e);
}
var rq = (e) => Math.round(e * MK) / MK;
function iq(e, t) {
  return Math.abs(e) > Math.abs(t) ? (e > 0 ? 2 : 3) : t > 0 ? 0 : 1;
}
function aq(e, t, n, r, i) {
  let a = i.menu ? PK : NK,
    o = Math.max(0, Math.min(3, i.dir | 0)),
    s = `p1`,
    c = o,
    l = 0,
    u = t.kit ? kK[t.kit] : null,
    d = i.art && t.kit ? YK[i.art.id]?.[t.kit] : void 0,
    f = d?.[i.art.n % d.length],
    p = f && i.moving && !i.menu ? XK(f) : f,
    m = u && p ? tq(p, i.art.t, !0) : -1,
    h = (e, t) => {
      ((s = u[e.page]), (c = e.block + o), (l = tq(e, t)));
    };
  (u && i.guard
    ? i.moving
      ? h(QK, i.t)
      : h(eq, 0)
    : u && p && m >= 0
      ? ((o = Math.max(0, Math.min(3, i.art.dir | 0))),
        (s = u[p.page]),
        (c = p.block + o),
        (l = m))
      : i.cast && (!d || !u)
        ? (l = 2)
        : u && i.menu
          ? h(i.moving ? QK : ZK, i.t)
          : u && i.armed && !i.moving
            ? h(i.flash ? $K : ZK, i.t)
            : i.moving &&
              ((c = 4 + o),
              (l = i.walk
                ? Math.floor((Math.max(0, i.t) * 1e3) / KK) % 6
                : nq(i.t))),
    i.shadow !== !1 &&
      ((e.fillStyle = `rgba(0,0,0,0.3)`),
      e.beginPath(),
      e.ellipse(rq(n), rq(r), 6, 2.5, 0, 0, Math.PI * 2),
      e.fill()));
  let g = zK(t, s, c, l, a);
  Pp(e, i.flash ? BK(t, s, c, l, a) : g.c, rq(n - g.fx), rq(r - g.fy));
}
function oq(e) {
  return e in YK;
}
function sq(e, t) {
  return !!t && !!YK[e]?.[t];
}
var cq = new Map();
function lq(e, t, n, r, i, a = !1) {
  let o = (i < 0.07 ? 0 : i < 0.16 ? 1 : -1) + (a && i < 0.16 ? 2 : 0);
  if (o < 0) return !1;
  let s = Math.max(0, Math.min(3, r | 0)),
    c = `${s}:${o}`,
    l = cq.get(c);
  if (!l) {
    let [e, t] = yK();
    if (!vK(t, s, o, 0, 0)) return !1;
    let n = Math.ceil(jK * NK),
      [r, i] = M(n, n);
    ((i.imageSmoothingEnabled = !1),
      i.drawImage(e, 0, 0, jK, jK, 0, 0, jK * NK, jK * NK),
      (l = {
        c: jp(r, MK),
        fx: ((jK / 2) * NK) / MK,
        fy: Math.ceil(44 * NK - 0.5) / MK,
      }),
      cq.set(c, l));
  }
  return (Pp(e, l.c, rq(t - l.fx), rq(n - l.fy)), !0);
}
var uq = new Map();
function dq(e, t, n, r) {
  let i = SK();
  if (!i?.length) return !1;
  let a = ((((r * 180) / Math.PI) % 360) + 360) % 360,
    o = { i: 0, fx: !1, fy: !1, d: 1 / 0 };
  i.forEach((e, t) => {
    for (let n of [!1, !0])
      for (let r of [!1, !0]) {
        let i = (r ? -1 : 1) * (n ? 180 - e.deg : e.deg),
          s = Math.abs(((((i - a) % 360) + 540) % 360) - 180);
        s < o.d - 0.01 && (o = { i: t, fx: n, fy: r, d: s });
      }
  });
  let s = `${o.i}:${o.fx}:${o.fy}`,
    c = uq.get(s);
  if (!c) {
    let e = i[o.i],
      [t, n] = M(e.c.width, e.c.height);
    (n.translate(o.fx ? e.c.width : 0, o.fy ? e.c.height : 0),
      n.scale(o.fx ? -1 : 1, o.fy ? -1 : 1),
      n.drawImage(e.c, 0, 0));
    let r = o.fx ? e.c.width - e.mx : e.mx,
      a = o.fy ? e.c.height - e.my : e.my,
      l = MR(n.getImageData(0, 0, t.width, t.height), NK, Math.round(r)),
      [u, d] = M(l.img.width, l.img.height);
    (d.putImageData(l.img, 0, 0),
      (c = { c: jp(u, MK), mx: l.cx / MK, my: (a * NK) / MK }),
      uq.set(s, c));
  }
  return (Pp(e, c.c, rq(t - c.mx), rq(n - c.my)), !0);
}
