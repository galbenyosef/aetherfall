// index-BTsv3a2s 218 — math
// Lines 140058-140399 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Q$(e, t, n) {
  let r = e.x + e.w / 2,
    i = e.y + e.h / 2,
    a = -1,
    o = 1 / 0;
  for (let e = 0; e < t.length; e++) {
    let s = t[e],
      c = s.x + s.w / 2 - r,
      l = s.y + s.h / 2 - i,
      u = n === `up` ? -l : n === `down` ? l : n === `left` ? -c : c;
    if (u <= 0.5) continue;
    let d = u + 2 * Math.abs(n === `up` || n === `down` ? c : l);
    d < o && ((o = d), (a = e));
  }
  return a;
}
function $$(e, t) {
  return e.y <= t && t <= e.y + e.h;
}
function e1(e, t, n) {
  let r = e.x + e.w / 2,
    i = e.y + e.h / 2,
    a = -1;
  if (n === `left` || n === `right`) {
    let o = 1 / 0;
    for (let s = 0; s < t.length; s++) {
      let c = t[s];
      if (!$$(c, i) && !$$(e, c.y + c.h / 2)) continue;
      let l = (n === `right` ? 1 : -1) * (c.x + c.w / 2 - r);
      l > 0.5 && l < o && ((o = l), (a = s));
    }
    return a;
  }
  let o = n === `down` ? 1 : -1,
    s = (t) => o * (t.y + t.h / 2 - i) > e.h / 2,
    c = -1,
    l = 1 / 0;
  for (let e = 0; e < t.length; e++) {
    let n = o * (t[e].y + t[e].h / 2 - i);
    s(t[e]) && n < l && ((l = n), (c = e));
  }
  if (c < 0) return -1;
  let u = t[c],
    d = u.y + u.h / 2,
    f = 1 / 0;
  for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (!s(r) || (!$$(r, d) && !$$(u, r.y + r.h / 2))) continue;
    let i = Math.max(0, r.x - (e.x + e.w), e.x - (r.x + r.w));
    (a < 0 || i < f - 0.5 || (i <= f + 0.5 && r.x < t[a].x)) &&
      ((f = Math.min(i, f)), (a = n));
  }
  return a;
}
function t1(e, t, n) {
  let r = n === `right` ? e + 1 : n === `left` ? e - 1 : -1;
  return e >= 0 && r >= 0 && r < t ? r : -1;
}
var n1 = `button, [role=button], [role=tab], input[type=checkbox], input[type=radio], input[type=range], select, a[href]`,
  r1 = `.panel, .dialogue, .death-screen`,
  i1 = null,
  a1 = null;
function o1() {
  return (
    document.querySelector(`.settings-panel`) ??
    document.querySelector(`.gm-panel`) ??
    document.querySelector(`.mage-menu`) ??
    document.querySelector(`.aim-prompt`) ??
    document.querySelector(`.dialogue-choices`)?.closest(`.dialogue`) ??
    document.querySelector(`.death-screen`)
  );
}
function s1(e, t) {
  return e.disabled ||
    e.getAttribute(`aria-disabled`) === `true` ||
    e.getAttribute(`tabindex`) === `-1` ||
    !e.getClientRects().length ||
    e.closest(`.hud:not(.visible)`) ||
    e.closest(`.touch-ui`)
    ? !1
    : a1
      ? a1.contains(e)
      : !e.closest(r1) || (e.closest(`.hud`) && !e.closest(`.help-panel`))
        ? !1
        : !t || t.contains(e);
}
function c1() {
  let e = a1 ? null : o1(),
    t = [];
  for (let n of document.querySelectorAll(n1)) s1(n, e) && t.push(n);
  return t;
}
function l1(e) {
  let t = e.getBoundingClientRect();
  return { x: t.left, y: t.top, w: t.width, h: t.height };
}
function u1(e) {
  return (
    /^close\b/i.test(e.getAttribute(`aria-label`) ?? ``) ||
    e.textContent?.trim() === `✕`
  );
}
function d1(e) {
  let t = e.find((e) => e.hasAttribute(`data-pad-first`));
  if (t) return t;
  let n = e.filter((e) => !u1(e)),
    r = n.length ? n : e,
    i = r[0],
    a = l1(i);
  for (let e of r) {
    let t = l1(e);
    (Math.round(t.y) < Math.round(a.y) ||
      (Math.round(t.y) === Math.round(a.y) && t.x < a.x)) &&
      ((i = e), (a = t));
  }
  return i;
}
function f1(e) {
  let t = i1;
  t !== e &&
    (t?.classList.remove(`pad-focus`),
    (i1 = e),
    e.classList.add(`pad-focus`),
    t?.isConnected
      ? t.dispatchEvent(
          new MouseEvent(`mouseout`, { bubbles: !0, relatedTarget: e }),
        )
      : e.dispatchEvent(
          new MouseEvent(`mouseover`, { bubbles: !0, relatedTarget: null }),
        ),
    e.focus());
}
function p1(e) {
  if (typeof document > `u`) return;
  let t = c1();
  if (!t.length) return;
  if (!i1 || !t.includes(i1)) {
    f1(d1(t));
    return;
  }
  if (!e) return;
  if (
    i1 instanceof HTMLInputElement &&
    i1.type === `range` &&
    (e === `left` || e === `right`)
  ) {
    (e === `left` ? i1.stepDown() : i1.stepUp(),
      i1.dispatchEvent(new Event(`input`, { bubbles: !0 })),
      i1.dispatchEvent(new Event(`change`, { bubbles: !0 })));
    return;
  }
  if (i1.closest(`[data-pad-rows]`)) {
    let n = (e) => l1(e.closest(`label`) ?? e),
      r = e1(n(i1), t.map(n), e);
    r >= 0 && f1(t[r]);
    return;
  }
  let n = i1.closest(`[data-pad-flow]`);
  if (n) {
    let r = t.filter((e) => n.contains(e)),
      i = t1(r.indexOf(i1), r.length, e);
    if (i >= 0) {
      f1(r[i]);
      return;
    }
  }
  let r = Q$(l1(i1), t.map(l1), e);
  r >= 0 && f1(t[r]);
}
function m1() {
  let e = i1;
  if (!e || !e.isConnected) return;
  let t = { bubbles: !0, cancelable: !0, button: 0 };
  (e.dispatchEvent(new MouseEvent(`mousedown`, t)),
    e.dispatchEvent(new MouseEvent(`mouseup`, t)),
    e.click());
}
function h1() {
  return !i1 || !i1.isConnected || typeof document > `u`
    ? !1
    : s1(i1, a1 ? null : o1());
}
function g1() {
  let e = i1;
  ((i1 = null),
    (a1 = null),
    e &&
      (e.classList.remove(`pad-focus`),
      e.isConnected &&
        e.dispatchEvent(
          new MouseEvent(`mouseout`, { bubbles: !0, relatedTarget: null }),
        ),
      typeof document < `u` && document.activeElement === e && e.blur()));
}
function _1(e) {
  if (typeof document > `u`) return !1;
  let t = document.querySelector(e);
  if (!t) return !1;
  let n = a1;
  a1 = t;
  let r = c1();
  return r.length ? (f1(d1(r)), !0) : ((a1 = n), !1);
}
function v1(e) {
  return typeof document < `u` && document.querySelector(e) !== null;
}
function y1() {
  return (a1 && !a1.isConnected && g1(), a1 !== null);
}
oZ(() => {
  aZ().device !== `pad` && g1();
});
var b1 = {
  cone: 0.906,
  turn: 1,
  sticky: 1.3,
  away: 0.819,
  ahead: 4,
  under: 1.2,
};
function x1(e, t) {
  let n = Math.hypot(e, t);
  return n < 1e-6 ? null : { x: e / n, y: t / n };
}
function S1(e, t, n, r) {
  let i = t ? Math.hypot(t.x, t.y) : 0,
    a = i > 1e-6 ? t.x / i : 0,
    o = i > 1e-6 ? t.y / i : 0,
    s = i > 1e-6,
    c = null,
    l = 1 / 0,
    u = 1,
    d = null,
    f = 1 / 0,
    p = 1;
  for (let t of n) {
    let n = t.x - e.x,
      i = t.y - e.y,
      m = Math.hypot(n, i);
    if (m > r.reach) continue;
    if (r.pin && t.id === r.pin) return t;
    let h = s && m > 0.001 ? (n * a + i * o) / m : 1;
    if (r.cone !== void 0 && h < r.cone) continue;
    let g = m * (1 + b1.turn * (1 - h));
    (g < l && ((l = g), (u = h), (c = t)),
      r.prev && t.id === r.prev && ((d = t), (f = g), (p = h)));
  }
  let m = u >= b1.cone && p < b1.away;
  return d && f <= l * b1.sticky && !m ? d : c;
}
function C1(e, t) {
  return e === `pad` ? t.padAim === `on` : t.autoAim;
}
function w1(e, t, n) {
  let r = n ? Math.min(b1.under, Math.hypot(n.x - e.x, n.y - e.y)) : b1.under;
  for (let n of t) if (Math.hypot(n.x - e.x, n.y - e.y) < r) return !0;
  return !1;
}
function T1(e, t, n, r) {
  let i = Math.hypot(t.x, t.y);
  if (!(i > 1e-6)) return !1;
  let a = Math.hypot(r.pick.x - e.x, r.pick.y - e.y);
  for (let o of n) {
    let n = o.x - e.x,
      s = o.y - e.y,
      c = Math.hypot(n, s);
    if (
      !(c > r.reach || c >= a) &&
      (c <= 0.001 || (n * t.x + s * t.y) / (c * i) >= r.cone)
    )
      return !0;
  }
  return !1;
}
function E1() {
  return oM() && !!sM(`ar/altar-floor-meadow`);
}
var D1 = [
  { pos: `bl`, dx: -29.5, dy: -17 },
  { pos: `br`, dx: 29.5, dy: -17 },
  { pos: `fl`, dx: -29.5, dy: 32 },
  { pos: `fr`, dx: 29.5, dy: 32 },
];
function O1(e) {
  return Math.round(Math.sin(e * 1.6) * 1.5);
}
var k1 = (e, t) => (t === `hollowed` ? `hollow` : e);
function A1(e) {
  return e === `rite` || e === `reclaim` || e === `singing`;
}
function j1(e, t) {
  let n = sM(`ar/altar-floor-${k1(e, t)}`);
  return n
    ? { dim: n, lit: n.frames.length > 1 ? { ...n, c: n.frames[1] } : null }
    : null;
}
function M1(e, t, n) {
  let r = sM(`ar/altar-pillar-${k1(e, t)}-${n}`);
  return r
    ? A1(t) && r.frames.length > 1
      ? { ...r, c: r.frames[1] }
      : r
    : null;
}
function N1(e, t, n) {
  if (e === `hollowed`) {
    let e = sM(`ar/altar-obelisk-hollow`);
    return e ? { c: e.c, ax: e.ax, ay: e.ay, bob: !0 } : null;
  }
  if (e === `singing`) {
    let e = sM(`ar/altar-obelisk-sing`);
    return e
      ? {
          c: e.frames[Math.floor(n * 10) % e.frames.length],
          ax: e.ax,
          ay: e.ay,
          bob: !1,
        }
      : null;
  }
  let r = sM(`ar/altar-obelisk-wake`);
  if (!r) return null;
  let i =
    e === `rite` || e === `reclaim`
      ? Math.round(Math.min(1, t) * (r.frames.length - 1))
      : 0;
  return { c: r.frames[i], ax: r.ax, ay: r.ay, bob: !0 };
}
function P1() {
  return sM(`ar/altar-bolt`);
}
function F1() {
  return sM(`ar/altar-beam`);
}
function I1() {
  return sM(`vol/rift`);
}
function L1() {
  return sM(`vol/blight`);
}
var R1 = [`#ff7a1a`, `#5cc8ff`, `#fff36b`, `#b84dff`],
  z1 = new Map();
