// assets__index-BTsv3a2s 183 — error
// Lines 106165-106505 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function ZW(e) {
  let t = XW.get(e);
  return (t || ((t = Fp(e, `#07040f`)), XW.set(e, t)), t);
}
var QW = 8,
  $W = `aetherfall.keybinds.v1`;
function eG() {
  return [...Array.from({ length: 8 }, (e, t) => String(t + 1)), ` `];
}
var tG = new Map();
function nG(e) {
  return (
    e.code &&
      e.key.length === 1 &&
      !e.shiftKey &&
      !e.ctrlKey &&
      !e.altKey &&
      !e.metaKey &&
      tG.set(e.code, e.key.toLowerCase()),
    bi(e, (e) => tG.get(e))
  );
}
try {
  globalThis.navigator?.keyboard
    ?.getLayoutMap?.()
    .then((e) =>
      e.forEach((e, t) => {
        !tG.has(t) &&
          typeof e == `string` &&
          e.length === 1 &&
          tG.set(t, e.toLowerCase());
      }),
    )
    .catch(() => {});
} catch {}
var rG = null;
function iG() {
  let e = _l().controls;
  return (
    (!rG || rG.controls !== e) && (rG = { controls: e, map: ki(e) }),
    rG.map
  );
}
function aG(e) {
  return iG()[e];
}
function oG(e) {
  let [t, n] = aG(e);
  return t || n;
}
function sG(e, t) {
  if (!t) return null;
  for (let n of oi) if (e[n.id][0] === t || e[n.id][1] === t) return n.id;
  return null;
}
function cG(e) {
  return xi(e) ? Si(e) : Ti(e) ? `shift+${e}` : null;
}
function lG(e) {
  if (Ci(Si(e))) return !0;
  let t = iG();
  if (sG(t, e)) return !0;
  let n = cG(e);
  if (n && sG(t, n)) return !0;
  if (e === `shift`) {
    for (let e of oi)
      for (let n of t[e.id]) if (xi(n) || (n === `shift` && !e.held)) return !0;
  }
  return !1;
}
function uG(e, t = lG) {
  let n = eG(),
    r = Array.isArray(e) ? e : [],
    i = [];
  for (let e = 0; e < n.length; e++) {
    let n = r[e],
      a =
        typeof n == `string` &&
        (n === `` || (Ei(n, !0) && !t(n) && !i.includes(n)));
    i.push(a ? n : null);
  }
  return i.map((e, r) => e ?? (i.includes(n[r]) || t(n[r]) ? `` : n[r]));
}
var dG = pG(),
  fG = new Set();
function pG() {
  try {
    let e = localStorage.getItem($W);
    return uG(e ? JSON.parse(e) : null);
  } catch {
    return uG(null);
  }
}
function mG() {
  try {
    localStorage.setItem($W, JSON.stringify(dG));
  } catch {}
  for (let e of fG) e();
}
function hG() {
  return dG;
}
function gG() {
  ((dG = uG(eG())), mG());
}
function _G(e) {
  return (fG.add(e), () => fG.delete(e));
}
var vG = null;
function yG() {
  let e = iG();
  return (
    (!vG || vG.map !== e || vG.binds !== dG) && (vG = { map: e, binds: dG }),
    vG
  );
}
function bG(e) {
  let t = xl(e),
    n = _G(e);
  return () => {
    (t(), n());
  };
}
var xG = (e) => Ci(e.key.toLowerCase()) !== null;
function SG(e) {
  let t = nG(e);
  if (e.shiftKey && e.key.length === 1 && e.key !== ` ` && !vi(e.key)) {
    let n = e.key.toLowerCase();
    if (n !== t && OG(n)) return n;
  }
  return t;
}
function CG(e) {
  if (e.ctrlKey || e.metaKey || xG(e)) return null;
  let t = SG(e),
    n = iG();
  if (e.shiftKey && t !== `shift`) {
    let e = sG(n, `shift+${t}`);
    if (e) return e;
  }
  return sG(n, t);
}
function wG(e, t) {
  return CG(e) === t;
}
function TG() {
  let e = iG();
  for (let t of oi)
    for (let n of e[t.id]) if (n === `shift` || xi(n)) return !1;
  return !dG.includes(`shift`);
}
function EG(e) {
  if (e.ctrlKey || e.metaKey || xG(e)) return null;
  let t = SG(e);
  if (e.shiftKey && t !== `shift` && sG(iG(), `shift+${t}`)) return null;
  let n = dG.indexOf(t);
  return n >= 0 ? n : t === `shift` && TG() ? QW : null;
}
function DG(e) {
  return e.t === `action`
    ? fi(e.a).name
    : e.i === QW
      ? `Blink`
      : `Spell slot ${e.i + 1}`;
}
function OG(e, t = iG(), n = dG) {
  if (!e) return null;
  for (let n of oi) {
    let r = t[n.id].indexOf(e);
    if (r >= 0) return { t: `action`, a: n.id, i: r };
  }
  let r = n.indexOf(e);
  return r >= 0 ? { t: `slot`, i: r } : null;
}
var kG = (e) => (e[0] ? [e[0], e[1] === e[0] ? `` : e[1]] : [e[1], ``]);
function AG(e) {
  if (e !== `shift` || OG(`shift`) || TG()) return;
  let t = iG(),
    n = oi.find((e) => t[e.id].some(xi));
  if (!n) return;
  let r = t[n.id].find(xi);
  return `Shift is free, but doesn't Blink while ${n.name} is on ${Bi(r)}${n.id === `chat` ? ` (Settings → General → Open chat with)` : ``}.`;
}
var jG = (...e) => e.filter(Boolean).join(` `) || void 0;
function MG(e, t, n = ``) {
  for (let t of oi)
    if (!t.optional && !e[t.id][0] && !e[t.id][1])
      return `${t.name} needs a key. Give it another key first.`;
  for (let t of oi)
    if (t.held) {
      for (let n of e[t.id])
        if (xi(n))
          return `${t.name} can't take ${Bi(n)}: it's held, so no Shift chords. Give ${t.name} another key first.`;
    }
  for (let e = 0; e < t.length; e++)
    if (xi(t[e]))
      return `${DG({ t: `slot`, i: e })} can't take ${Bi(t[e])}: it's held, so no Shift chords. Give it another key first.`;
  let r = null;
  for (let i of oi)
    for (let [a, o] of e[i.id].entries()) {
      if (!xi(o)) continue;
      let s = { t: `action`, a: i.id, i: a };
      r ??= { k: o, who: s };
      let c = OG(Si(o), e, t);
      if (!(!c || (c.t === `action` && c.a === i.id)))
        return n === Si(o)
          ? `${Bi(n)} goes with ${Bi(o)}, which belongs to ${i.name}. Pick another key.`
          : `${Bi(o)} goes with ${Bi(Si(o))}, which belongs to ${DG(c)}. Pick another key.`;
    }
  if (r) {
    let i = OG(`shift`, e, t);
    if (i && (i.t === `slot` || !fi(i.a).held))
      return n === `shift`
        ? `${DG(i)} can't take Shift: ${Bi(r.k)} (${DG(r.who)}) would set it off too.`
        : `Shift belongs to ${DG(i)}: a Shift chord would set it off too.`;
  }
  return null;
}
function NG(e, t, { swapActions: n = !0 } = {}) {
  let r = t.toLowerCase(),
    i = e.t === `slot` || !!fi(e.a).held,
    a = Ci(Si(r));
  if (a) return { ok: !1, error: `${Bi(Si(r))} can't be bound: ${a}.` };
  if (xi(r) && i)
    return {
      ok: !1,
      error: `Press the key on its own: ${DG(e)} can't take a Shift chord.`,
    };
  if (xi(r) && !Ti(Si(r)))
    return {
      ok: !1,
      error: `${Bi(r)} can't be a chord: Shift chords take a letter or a named key, like Shift + Q or Shift + F2.`,
    };
  if (!Ei(r, i)) return { ok: !1, error: `${Bi(r)} can't be bound here.` };
  let o = iG(),
    s = Object.fromEntries(oi.map((e) => [e.id, [...o[e.id]]])),
    c = [...dG],
    l = e.t === `action` ? o[e.a][e.i] : dG[e.i];
  if (l === r) return { ok: !0 };
  let u = OG(r),
    d;
  if (u?.t === `action` && e.t === `action` && u.a === e.a) s[e.a][u.i] = l;
  else if (u?.t === `action`) {
    let e = fi(u.a);
    if (!n)
      return {
        ok: !1,
        error: `${Bi(r)} belongs to ${e.name} (Settings [${Bi(oG(`settings`))}] → Controls). Pick another key.`,
      };
    let t = s[u.a][+!u.i];
    if (!l && !t && !e.optional)
      return {
        ok: !1,
        error: `${Bi(r)} is the only key ${e.name} has. Give ${e.name} another key first.`,
      };
    if (l && xi(l) && e.held)
      return {
        ok: !1,
        error: `${e.name} can't take ${Bi(l)}: it's held, so no Shift chords. Give ${e.name} another key first.`,
      };
    ((s[u.a][u.i] = l), (s[u.a] = [...kG(s[u.a])]));
    let i = s[u.a][0];
    d = i
      ? `${e.name} moved from ${Bi(r)} to ${Bi(i)}.`
      : `${e.name} gave up ${Bi(r)} and has no key now${si[e.id] ? `: ${si[e.id]}` : ``}.`;
  } else if (u?.t === `slot`) {
    let e = l && !xi(l) ? l : ``;
    ((c[u.i] = e),
      (d = e
        ? `${DG(u)} moved from ${Bi(r)} to ${Bi(e)}.`
        : `${DG(u)} gave up ${Bi(r)} and has no key now.`));
  }
  e.t === `action`
    ? ((s[e.a][e.i] = r), (s[e.a] = [...kG(s[e.a])]))
    : (c[e.i] = r);
  let f = Object.fromEntries(
      oi.map((e) => [e.id, [s[e.id][0] ?? ``, s[e.id][1] ?? ``]]),
    ),
    p = MG(f, c, r);
  return p
    ? { ok: !1, error: p }
    : (c.some((e, t) => e !== dG[t]) && ((dG = c), mG()),
      yl({ controls: Ai(f) }),
      { ok: !0, note: jG(d, AG(l)) });
}
function PG(e) {
  if (e.t === `action`) {
    let t = aG(e.a);
    if (!t[e.i]) return { ok: !0 };
    let n = t[+!e.i],
      r = fi(e.a);
    if (!n && !r.optional)
      return {
        ok: !1,
        error: `${r.name} needs a key. Give it another key first, then clear this one.`,
      };
    if (
      (yl({ controls: Ai({ ...iG(), [e.a]: [n, ``] }) }), !n && e.a === `chat`)
    )
      return {
        ok: !0,
        note: `Open chat has no key now: a click on the chat box opens it (Click only).`,
      };
    if (!n && si[e.a])
      return { ok: !0, note: `${r.name} has no key now: ${si[e.a]}.` };
    let i = AG(t[e.i]);
    return i ? { ok: !0, note: i } : { ok: !0 };
  }
  return dG[e.i]
    ? ((dG = dG.map((t, n) => (n === e.i ? `` : t))),
      mG(),
      e.i === QW && TG()
        ? { ok: !0, note: `Blink has no key now; Shift still Blinks.` }
        : { ok: !0, note: `${DG(e)} has no key now.` })
    : { ok: !0 };
}
function FG() {
  (yl({ controls: {} }), gG());
}
function IG(e) {
  let t = li[e],
    n = iG();
  for (let e of t)
    if (e)
      for (let t of new Set([e, Si(e)])) {
        let e = OG(t, n);
        if (e && (e.t !== `action` || e.a !== `chat`))
          return {
            ok: !1,
            error: `${Bi(t)} belongs to ${DG(e)}. Give it another key in Controls first.`,
          };
      }
  let r = { ...n, chat: t },
    i = MG(r, dG);
  return i ? { ok: !1, error: i } : (yl({ controls: Ai(r) }), { ok: !0 });
}
function LG() {
  bl();
  let e = ui(fi(`chat`).keys);
  return e ? IG(e) : { ok: !0 };
}
