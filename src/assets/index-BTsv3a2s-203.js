// index-BTsv3a2s 203 — device
// Lines 127302-127644 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function _X(e, t, n = mX) {
  let r = Math.hypot(e, t);
  if (!(r > n)) return { x: 0, y: 0 };
  let i = Math.min(1, (r - n) / (1 - n)) / r;
  return { x: e * i, y: t * i };
}
function vX(e, t) {
  let n = Array(cX).fill(!1);
  for (let r = 0; r < cX; r++) {
    let i = e.buttons[r];
    if (i) {
      if (r === oX.LT || r === oX.RT) {
        let e = typeof i.value == `number` ? i.value : +!!i.pressed;
        n[r] = t?.[r] ? e >= gX : e >= hX;
      } else n[r] = !!i.pressed;
    }
  }
  return n;
}
var yX = class {
    current = null;
    byPad = new Map();
    last = Array(cX).fill(!1);
    sticks = new Map();
    read(e) {
      let t = e.filter((e) => !!e && e.connected);
      if (!t.length) return (this.reset(), null);
      let n = new Map(),
        r = null;
      for (let e of t) {
        let t = this.byPad.get(e.index),
          i = vX(e, t);
        (n.set(e.index, i),
          !r &&
            e.index !== this.current &&
            i.some((e, n) => e && !t?.[n]) &&
            (r = e));
      }
      this.byPad = n;
      let i = t.find((e) => e.index === this.current) ?? null;
      (r && (i = r),
        (i ||= t.find((e) => e.mapping === `standard`) ?? t[0]),
        (this.current = i.index));
      let a = n.get(i.index),
        o = a.map((e, t) => e && !this.last[t]),
        s = a.map((e, t) => !e && this.last[t]);
      this.last = a;
      let c = _X(i.axes[0] ?? 0, i.axes[1] ?? 0),
        l = _X(i.axes[2] ?? 0, i.axes[3] ?? 0),
        u = Math.hypot(c.x, c.y),
        d = Math.hypot(l.x, l.y),
        f = this.sticks.get(i.index);
      this.sticks.set(i.index, [u, d]);
      let p = (e, t = 0) => e >= 0.5 && t < 0.5,
        m = o.some(Boolean) || p(u, f?.[0]) || p(d, f?.[1]);
      return {
        id: i.id,
        left: c,
        right: l,
        held: a,
        pressed: o,
        released: s,
        active: m,
      };
    }
    reset() {
      ((this.current = null),
        this.byPad.clear(),
        this.sticks.clear(),
        (this.last = Array(cX).fill(!1)));
    }
  },
  bX = 0.35,
  xX = 0.11,
  SX = class {
    dir = null;
    t = 0;
    next = bX;
    step(e, t) {
      return e
        ? e === this.dir
          ? ((this.t += t),
            this.t + 1e-9 < this.next ? null : ((this.next += xX), e))
          : ((this.dir = e), (this.t = 0), (this.next = bX), e)
        : ((this.dir = null), null);
    }
  };
function CX(e) {
  if (e.held[oX.UP]) return `up`;
  if (e.held[oX.DOWN]) return `down`;
  if (e.held[oX.LEFT]) return `left`;
  if (e.held[oX.RIGHT]) return `right`;
  let { x: t, y: n } = e.left;
  return Math.max(Math.abs(t), Math.abs(n)) < 0.6
    ? null
    : Math.abs(t) > Math.abs(n)
      ? t > 0
        ? `right`
        : `left`
      : n > 0
        ? `down`
        : `up`;
}
function wX(e, t, n) {
  return t
    ? n
      ? { latched: !0, fresh: !0 }
      : { latched: e, fresh: !1 }
    : { latched: !1, fresh: !1 };
}
var TX = [`A`, `UP`, `DOWN`, `LEFT`, `RIGHT`],
  EX = sX.map((e) => TX.includes(e)),
  DX = { rest: 0, ok: !1, wait: 1 };
function OX(e, t, n, r, i) {
  let a = !!(t.left.x || t.left.y || t.right.x || t.right.y),
    o = a || i || t.held.some(Boolean) ? 0 : e.rest + n;
  if (!r) return { rest: o, ok: o >= e.wait, wait: e.wait };
  let s = a || t.pressed.some((e, t) => e && !EX[t]);
  return e.ok && s
    ? { rest: o, ok: !1, wait: e.wait * 2 }
    : { rest: o, ok: e.ok && !i, wait: e.wait };
}
var kX = [`RT`, `LT`, `RB`, `LB`],
  AX = Math.ceil(8 / kX.length),
  jX = `aetherfall.padbinds.v1`;
function MX() {
  return Array.from({ length: 8 }, (e, t) => t);
}
function NX(e) {
  return !Array.isArray(e) || e.length !== 8
    ? MX()
    : e.every((e) => Number.isInteger(e) && e >= 0 && e < 8) &&
        new Set(e).size === 8
      ? e.slice()
      : MX();
}
function PX() {
  try {
    let e = typeof localStorage < `u` ? localStorage.getItem(jX) : null;
    return NX(e ? JSON.parse(e) : null);
  } catch {
    return MX();
  }
}
var FX = PX(),
  IX = new Set();
function LX(e) {
  FX = e;
  try {
    typeof localStorage < `u` && localStorage.setItem(jX, JSON.stringify(e));
  } catch {}
  for (let e of IX) e();
}
function RX() {
  return FX;
}
function zX(e) {
  return (IX.add(e), () => IX.delete(e));
}
function BX(e, t) {
  let n = kX.indexOf(t);
  return n < 0 || e < 0 || e >= AX ? null : e * kX.length + n;
}
function VX(e, t, n = FX) {
  let r = BX(e, t);
  if (r === null) return null;
  let i = n.indexOf(r);
  return i < 0 ? null : i;
}
function HX(e, t = FX) {
  return e < 0 || e >= 8 ? null : Math.floor(t[e] / kX.length);
}
function UX(e, t, n) {
  if (e === QW)
    return { ok: !1, error: `Blink stays on B (it's also Back and Skip).` };
  if (e < 0 || e >= 8) return { ok: !1, error: `No such slot.` };
  let r = BX(t, n);
  if (r === null)
    return {
      ok: !1,
      error: `Spells go on ${kX.join(`, `)}: press one of those (Y flips the page).`,
    };
  let i = FX.slice(),
    a = i.indexOf(r);
  if (a === e) return { ok: !0 };
  let o =
    a >= 0 ? `Slot ${a + 1} moved to slot ${e + 1}'s old button.` : void 0;
  return (a >= 0 && (i[a] = i[e]), (i[e] = r), LX(i), { ok: !0, note: o });
}
function WX() {
  LX(MX());
}
function GX(e, t, n = FX) {
  if (e === QW) return `B`;
  if (e < 0 || e >= 8) return null;
  let r = n[e];
  return Math.floor(r / kX.length) === t ? kX[r % kX.length] : null;
}
var KX = null;
function qX(e) {
  return (
    (KX = e),
    () => {
      KX === e && (KX = null);
    }
  );
}
function JX(e) {
  let t = KX;
  if (!t) return !1;
  for (let n = 0; n < cX; n++) {
    if (!e.pressed[n]) continue;
    let r = sX[n];
    (r === `Y` && cZ(nZ.page + 1), t(r, nZ.page));
  }
  return !0;
}
var YX = {
  interact: `interact`,
  road: `road`,
  market: `market`,
  hearth: `hearth`,
  journal: `journal`,
  satchel: `satchel`,
  spellbook: `spellbook`,
  homestead: `homestead`,
  help: `help`,
  settings: `settings`,
  provisions: `provisions`,
  stance: `stance`,
};
function XX(e, t = 1 / 0) {
  return e.chatting
    ? `escape`
    : e.locked || e.cine
      ? `skip`
      : e.dialogue || e.narration || t < 0.5
        ? null
        : `blink`;
}
var ZX = {
  sprint: `L3`,
  interact: `A`,
  road: `X`,
  market: `X`,
  hearth: `X`,
  journal: `UP`,
  satchel: `DOWN`,
  spellbook: `LEFT`,
  homestead: `RIGHT`,
  help: `VIEW`,
  mageMenu: `R3`,
};
function QX(e) {
  return ZX[e] ?? null;
}
function $X(e, t = FX) {
  return GX(e, e === QW ? 0 : (HX(e, t) ?? 0), t);
}
function eZ(e) {
  let t = (e) => {
    let t = Gu(e);
    return t ? Math.atan2(t.x, -t.y) : 0;
  };
  return [...e]
    .map((e) => ({ id: e, a: t(e) }))
    .sort((e, t) => e.a - t.a || (e.id < t.id ? -1 : +(e.id > t.id)))
    .map((e) => e.id);
}
var tZ = GG ? `touch` : `keys`,
  nZ = { device: tZ, connected: !1, family: `xbox`, page: 0 },
  rZ = new Set();
function iZ(e) {
  let t = { ...nZ, ...e };
  if (
    t.device !== nZ.device ||
    t.connected !== nZ.connected ||
    t.family !== nZ.family ||
    t.page !== nZ.page
  ) {
    ((nZ = t),
      typeof document < `u` &&
        document.documentElement?.classList.toggle(`pad`, nZ.device === `pad`));
    for (let e of rZ) e();
  }
}
function aZ() {
  return nZ;
}
function oZ(e) {
  return (rZ.add(e), () => rZ.delete(e));
}
function sZ(e) {
  iZ({ device: e });
}
function cZ(e) {
  iZ({ page: ((e % AX) + AX) % AX });
}
function lZ(e) {
  iZ({ connected: !0, family: uX(e) });
}
function uZ(e) {
  iZ(
    e
      ? { connected: !0 }
      : { connected: !1, device: nZ.device === `pad` ? tZ : nZ.device },
  );
}
function dZ(e, t = aZ()) {
  if (t.device !== `pad`) return JG(e);
  let n = /^\[([^\]]+)\]\s*/.exec(e);
  if (!n) return e;
  let r = n[1] === `E` ? `A` : n[1] === `R` ? `X` : null;
  return r
    ? `[${pX(r, t.family)}] ${e.slice(n[0].length)}`
    : e.slice(n[0].length);
}
function fZ(e, t = aZ()) {
  return t.device === `touch`
    ? null
    : t.device === `pad`
      ? `${pX(`B`, t.family)} TO SKIP${e === `scene` ? ` SCENE` : ``}`
      : e === `scene`
        ? `ESC TO SKIP SCENE`
        : `SPACE / CLICK TO SKIP`;
}
var pZ = {
  "Left Click / 1": `RT`,
  "Right Click / 2": `LT`,
  3: `RB`,
  Space: `B`,
  K: `LEFT`,
};
function mZ(e, t = aZ()) {
  return t.device === `pad`
    ? e.replace(/\s*\[([^\]]+)\]\s*$/, (e, n) =>
        pZ[n] ? `  [${pX(pZ[n], t.family)}]` : ``,
      )
    : t.device === `touch` && GG
      ? qG(e)
      : HG(e);
}
var hZ = typeof window < `u` && typeof window.addEventListener == `function`;
