// index-BTsv3a2s 33 — u16
// Lines 27459-27805 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Id(e, t = 0) {
  let n = new ArrayBuffer(7),
    r = new DataView(n);
  return (
    r.setUint8(0, vd.ping),
    r.setUint32(1, e >>> 0, !0),
    r.setUint16(5, Ad(Math.round(t), 0, 65535), !0),
    n
  );
}
function Ld(e) {
  let t = (e / 65536) * Math.PI * 2;
  return t > Math.PI ? t - Math.PI * 2 : t;
}
var Rd = class {
  off = 0;
  v;
  b;
  ok = !0;
  constructor(e) {
    ((this.v = new DataView(e)), (this.b = new Uint8Array(e)));
  }
  need(e) {
    return this.off + e > this.b.length ? ((this.ok = !1), !1) : !0;
  }
  u8() {
    return this.need(1) ? this.v.getUint8(this.off++) : 0;
  }
  u16() {
    if (!this.need(2)) return 0;
    let e = this.v.getUint16(this.off, !0);
    return ((this.off += 2), e);
  }
  u32() {
    if (!this.need(4)) return 0;
    let e = this.v.getUint32(this.off, !0);
    return ((this.off += 4), e);
  }
  str(e) {
    if (!this.need(e)) return ``;
    let t = kd.decode(this.b.subarray(this.off, this.off + e));
    return ((this.off += e), t);
  }
  str8() {
    return this.str(this.u8());
  }
  str16() {
    return this.str(this.u16());
  }
  remaining() {
    return this.b.length - this.off;
  }
};
function zd(e) {
  let t = new Rd(e),
    n = t.u8(),
    r = null;
  switch (n) {
    case yd.welcome: {
      let e = {
        t: `welcome`,
        entityId: t.u16(),
        tickHz: t.u8(),
        snapshotHz: t.u8(),
        mapVersion: t.u16(),
        serverMs: t.u32(),
        roomId: t.str8(),
      };
      if (t.ok && t.remaining() > 0) {
        let n = { blinkMs: t.u16(), spells: [] },
          r = t.u8();
        for (let e = 0; e < r && t.ok; e++)
          n.spells.push({ spell: t.u8(), ms: t.u16() });
        e.cooldowns = n;
      }
      r = e;
      break;
    }
    case yd.snapshot: {
      let e = t.u16(),
        n = t.u16(),
        i = t.u16(),
        a = [];
      for (let e = 0; e < i && t.ok; e++) {
        let e = { id: t.u16(), mask: t.u8() };
        if (
          (e.mask & Sd.spawn &&
            ((e.kind = t.u8()),
            e.kind === 0
              ? (e.player = {
                  school: t.u8(),
                  level: t.u16(),
                  name: t.str8(),
                  hero: t.u8(),
                })
              : (e.monster = { level: t.u8(), maxHp: t.u16() })),
          e.mask & Sd.pos && ((e.x = t.u16() / 16), (e.y = t.u16() / 16)),
          e.mask & Sd.hp && (e.hp = t.u8()),
          e.mask & Sd.flags && (e.flags = t.u16()),
          e.mask & Sd.look)
        ) {
          let n = t.u8(),
            r = {};
          for (let [e, i] of [
            [1, `hat`],
            [2, `robe`],
            [4, `main`],
            [8, `off`],
          ])
            n & e &&
              (r[i] = {
                base: e >= 4 ? t.u8() : void 0,
                unique: t.u8(),
                ilvl: t.u8(),
                school: t.u8(),
                hollowed: !!(t.u8() & 1),
              });
          e.look = r;
        }
        (e.mask & Sd.rite && (e.rite = { altar: t.u8() }), a.push(e));
      }
      let o = [],
        s = t.u8();
      for (let e = 0; e < s && t.ok; e++) o.push(t.u16());
      let c = [],
        l = t.u8();
      for (let e = 0; e < l && t.ok; e++)
        c.push({ kind: t.u8(), a: t.u16(), b: t.u16(), value: t.u16() });
      r = {
        t: `snapshot`,
        tick: e,
        ackSeq: n,
        entities: a,
        removed: o,
        events: c,
      };
      break;
    }
    case yd.pong:
      r = { t: `pong`, clientMs: t.u32(), serverMs: t.u32() };
      break;
    case yd.transfer:
      ((r = {
        t: `transfer`,
        reason: t.u8(),
        target: t.str8(),
        ticket: t.str16(),
        url: ``,
      }),
        t.ok && t.remaining() > 0 && (r.url = t.str8()));
      break;
    case yd.notice:
      r = { t: `notice`, code: t.u8(), text: t.str8() };
      break;
    case yd.self: {
      let e = {
        t: `self`,
        hp: t.u16(),
        maxHp: t.u16(),
        level: t.u16(),
        xpGained: t.u32(),
        mana: 0,
        maxMana: 0,
        speed: 0,
        stamina: 0,
        maxStamina: 0,
      };
      (t.ok &&
        t.remaining() >= 6 &&
        ((e.mana = t.u16()), (e.maxMana = t.u16()), (e.speed = t.u16())),
        t.ok &&
          t.remaining() >= 4 &&
          ((e.stamina = t.u16()), (e.maxStamina = t.u16())),
        (r = e));
      break;
    }
    case yd.attack: {
      let e = {
          t: `attack`,
          id: t.u16(),
          monster: t.u16(),
          kind: t.u8(),
          index: t.u8(),
          ox: t.u16() / 16,
          oy: t.u16() / 16,
          tx: t.u16() / 16,
          ty: t.u16() / 16,
          windupMs: t.u16(),
          points: [],
        },
        n = t.u8();
      for (let r = 0; r < n && t.ok; r++)
        e.points.push({ x: t.u16() / 16, y: t.u16() / 16 });
      r = e;
      break;
    }
    case yd.heard:
      r = {
        t: `heard`,
        speaker: t.u16(),
        school: t.u8(),
        name: t.str8(),
        text: t.str16(),
      };
  }
  return t.ok ? r : null;
}
var Bd = 0.1,
  Vd = 1.5,
  Hd = 0.25,
  Ud = 0.13;
function Wd(e, t, n, r = 0) {
  return Math.round(md(le, n - Math.max(e + r, t)) * 255);
}
function Gd(e, t, n) {
  if (!(e > 0) || !(le.stretch > 0)) return 0;
  let r = pd(le, t).range,
    i = n + Bd;
  if (i <= r) return 0;
  let a = Math.min(
    e,
    Math.max(0, Math.ceil(((i - r) / (r * le.stretch)) * 255)),
  );
  for (; a > 0 && pd(le, t, (a - 1) / 255).range >= i;) a--;
  for (; a < e && pd(le, t, a / 255).range < i;) a++;
  return a;
}
var Kd = 1 / 16;
function qd(e, t, n) {
  let r = Math.floor(e * 16) / 16,
    i = Math.floor(t * 16) / 16,
    a = 1 / 16;
  return (
    [
      { x: r, y: i },
      { x: r + a, y: i },
      { x: r, y: i + a },
      { x: r + a, y: i + a },
    ]
      .sort(
        (n, r) => Math.hypot(n.x - e, n.y - t) - Math.hypot(r.x - e, r.y - t),
      )
      .find((e) => n(e.x, e.y)) ?? null
  );
}
function Jd(e, t, n, r) {
  let i = 1 / 16,
    a = Math.round(e * 16),
    o = Math.round(t * 16),
    s = null,
    c = Vd,
    l = (l, u) => {
      let d = (a + l) * i,
        f = (o + u) * i,
        p = Math.hypot(d - e, f - t);
      p > c + 1e-9 ||
        !n(d, f) ||
        (s && p > c - 1e-9 && r(d, f) <= r(s.x, s.y)) ||
        ((s = { x: d, y: f }), (c = p));
    };
  l(0, 0);
  for (let e = 1; (e - 1) * i <= c; e++)
    for (let t = -e; t <= e; t++)
      (l(t, -e), l(t, e), t > -e && t < e && (l(-e, t), l(e, t)));
  return s;
}
function Yd(e, t, n, r, i, a, o) {
  let s = Math.min(a, i),
    c = n / i,
    l = r / i,
    u = (n, r) => Math.hypot(n - e, r - t) <= a + Kd && o(n, r),
    d = (n) => {
      let r = e + c * n,
        i = t + l * n;
      return o(r, i) ? qd(r, i, u) : null;
    },
    f = null,
    p = 0;
  for (let e = Hd; e <= s; e += Hd) {
    let t = d(e);
    t && ((f = t), (p = e));
  }
  if (s > 0 && (!f || p < s)) {
    let n = d(s);
    if (n) f = n;
    else if (i < a - 1e-6) {
      let n = (n, r) => (n - e) * c + (r - t) * l,
        r = Jd(e + c * s, t + l * s, (e, t) => n(e, t) >= Hd && u(e, t), n);
      r && (f = r);
    }
  }
  return f && (f.x !== e || f.y !== t)
    ? { x: f.x, y: f.y, s: Math.hypot(f.x - e, f.y - t) }
    : null;
}
function Xd(e, t, n, r, i, a) {
  let o = n.x - t.x,
    s = n.y - t.y,
    c = Math.hypot(o, s) || 1,
    l = pd(le, i, r / 255).range,
    u = Yd(e.x, e.y, o, s, c, l, a);
  if (!u) return null;
  let d = Gd(r, i, u.s);
  return { ...u, spent: d, cd: pd(le, i, d / 255).cd, reach: l };
}
function Zd(e, t) {
  return e || (t.sends > 0 && (t.buttons & bd.blink) !== 0 && t.charge > 0)
    ? bd.charge
    : 0;
}
function Qd(e, t) {
  return e.code && t.code ? t.code === e.code : t.key === e.key;
}
function $d(e, t) {
  return `${e.toFixed(1)} tiles · ${t.toFixed(1)} s cooldown`;
}
function ef(e, t, n, r, i, a, o, s) {
  let c = o + 4,
    l = Math.max(c, i),
    u = (e, t, n) => Math.min(Math.max(e, t), Math.max(t, n)),
    d = e.x,
    f = e.y + o + 6 * a,
    p = null;
  if (e.x >= 0 && e.x <= n && e.y >= 15 * a && e.y <= r)
    f > l && (f = e.y - 18 * a);
  else {
    ((d = t.x), (f = t.y + o + 6 * a));
    let r = 8 * a,
      i = u(t.x, r, n - r),
      s = u(t.y - 8 * a, r, l - r),
      c = e.x - i,
      m = e.y - 8 * a - s,
      h = 1;
    (c > 0
      ? (h = Math.min(h, (n - r - i) / c))
      : c < 0 && (h = Math.min(h, (r - i) / c)),
      m > 0
        ? (h = Math.min(h, (l - r - s) / m))
        : m < 0 && (h = Math.min(h, (r - s) / m)),
      (h = Math.max(0, h)),
      (p = { x: i + c * h, y: s + m * h, a: Math.atan2(m, c) }));
  }
  return { x: u(d, s, n - s), y: u(f, c, l), arrow: p };
}
function tf(e) {
  return e > 0 ? (Math.ceil(e * 10 - 1e-9) / 10).toFixed(1) : ``;
}
