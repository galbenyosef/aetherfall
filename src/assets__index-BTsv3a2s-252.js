// assets__index-BTsv3a2s 252 — slot
// Lines 162494-162838 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function H5(e, t, n, r, i) {
  let a = [...t],
    o = { ...n };
  for (let t of e) {
    if (t.kind === `unequip`) {
      let e = o[t.slot];
      if (!e) continue;
      if (a.length >= r)
        return { bag: a, worn: o, refused: `Your satchel is full.` };
      (delete o[t.slot], a.push(e));
      continue;
    }
    let e = a.findIndex((e) => e.id === t.item.id);
    if (e < 0)
      return {
        bag: a,
        worn: o,
        refused: `Only items in your satchel can be worn.`,
      };
    let n = a[e];
    if (pa(n.ilvl) > i)
      return { bag: a, worn: o, refused: `Requires level ${pa(n.ilvl)}.` };
    let s = I5(n, o);
    if (!s) return { bag: a, worn: o, refused: `That can't be worn.` };
    if (a.length - 1 + s.off.length > r)
      return { bag: a, worn: o, refused: `Your satchel is full.` };
    a.splice(e, 1);
    for (let e of s.off) (a.push(o[e]), delete o[e]);
    o[s.slot] = n;
  }
  return { bag: a, worn: o, refused: null };
}
var U5 = [
    { id: `hands`, slots: [`mainhand`, `offhand`] },
    { id: `hat`, slots: [`hat`] },
    { id: `robe`, slots: [`robe`] },
    { id: `gloves`, slots: [`gloves`] },
    { id: `boots`, slots: [`boots`] },
    { id: `amulet`, slots: [`amulet`] },
    { id: `rings`, slots: [`ring1`, `ring2`] },
    { id: `relic`, slots: [`relic`] },
  ],
  W5 = (e) => Da[e.base].type,
  G5 = (e) => Object.values(e).reduce((e, t) => e + (t?.ilvl ?? 0), 0),
  K5 = (e, t) => {
    let n = (e) =>
      Object.values(e)
        .filter(Boolean)
        .map((e) => e.id)
        .sort()
        .join(`,`);
    return n(e) === n(t);
  };
function q5(e, t) {
  let n = {};
  for (let r of t) e[r] && (n[r] = e[r]);
  return n;
}
function Sle(e, t, n, r, i) {
  let a = q5(n, t),
    o = [a];
  if (e === `rings`) {
    let e = [`ring1`, `ring2`].filter((e) => n[e] && (F5(n[e]) || i.has(e))),
      t = [
        ...[`ring1`, `ring2`]
          .filter((t) => n[t] && !e.includes(t))
          .map((e) => n[e]),
        ...r.filter((e) => W5(e) === `ring`),
      ],
      a = 2 - e.length,
      s = Math.min(a, t.length),
      c = {};
    for (let t of e) c[t] = n[t];
    let l = [`ring1`, `ring2`].filter((t) => !e.includes(t)),
      u = (e) => {
        let t = { ...c };
        return (e.forEach((e, n) => (t[l[n]] = e)), t);
      };
    if (s === 1) for (let e of t) o.push(u([e]));
    if (s === 2)
      for (let e = 0; e < t.length; e++)
        for (let n = e + 1; n < t.length; n++) o.push(u([t[e], t[n]]));
    return o;
  }
  if (e === `hands`) {
    let e = n.mainhand,
      t = n.offhand,
      i = !!e && F5(e),
      s = !!t && F5(t),
      c = !!e && !!Da[e.base].twoHanded;
    if (i && c) return o;
    let l = r.filter((e) => W5(e) === `staff`),
      u = r.filter((e) => W5(e) === `wand`),
      d = r.filter((e) => W5(e) === `focus`);
    if (!i && !s) for (let e of l) o.push({ mainhand: e });
    let f = i
        ? [e]
        : [...(e && !c ? [e] : []), ...u, ...(!e || c ? [void 0] : [])],
      p = s ? [t] : [...(t ? [t] : []), ...d, ...(t ? [] : [void 0])];
    for (let e of f)
      for (let t of p) {
        if (c && !e && !t) continue;
        let n = {};
        (e && (n.mainhand = e), t && (n.offhand = t), K5(n, a) || o.push(n));
      }
    return o;
  }
  let s = t[0];
  if (n[s] && F5(n[s])) return o;
  for (let e of r) Ea[W5(e)].includes(s) && o.push({ [s]: e });
  return o;
}
function J5(e, t, n) {
  let r = { ...e };
  for (let e of t) delete r[e];
  return Object.assign(r, n);
}
function Cle(e, t, n, r) {
  let i = (e, t) => ({ kind: `equip`, item: e, slot: t });
  if (e === `rings`) {
    let e = new Set(Object.values(n).map((e) => e.id)),
      a = { ring1: t.ring1, ring2: t.ring2 },
      o = Object.values(n)
        .filter((e) => e && e.id !== t.ring1?.id && e.id !== t.ring2?.id)
        .map((e) => e)
        .sort((e, t) => N5([t], r) - N5([e], r)),
      s = [];
    for (let t of o) {
      let n = I5(t, a),
        r = a[n.slot];
      !r || !e.has(r.id)
        ? (s.push({ steps: [i(t, n.slot)], slot: n.slot, item: t, why: V5 }),
          (a[n.slot] = t))
        : (s.push({
            steps: [
              { kind: `unequip`, slot: `ring2`, item: a.ring2 },
              i(t, `ring2`),
            ],
            slot: `ring2`,
            item: t,
            why: B5,
          }),
          (a.ring2 = t));
    }
    return s;
  }
  if (e === `hands`) {
    let e = n.mainhand,
      r = n.offhand;
    if (e && W5(e) === `staff`)
      return e.id === t.mainhand?.id
        ? []
        : [
            {
              steps: [i(e, `mainhand`)],
              slot: `mainhand`,
              item: e,
              why: t.mainhand && t.offhand ? xle : V5,
            },
          ];
    let a = [];
    return (
      e && e.id !== t.mainhand?.id && a.push(i(e, `mainhand`)),
      r && r.id !== t.offhand?.id && a.push(i(r, `offhand`)),
      a.length ? [{ steps: a, slot: a[0].slot, item: a[0].item, why: V5 }] : []
    );
  }
  let [a, o] = Object.entries(n)[0] ?? [];
  return !o || o.id === t[a]?.id
    ? []
    : [{ steps: [i(o, a)], slot: a, item: o, why: V5 }];
}
function wle(e, t) {
  let n = { ...t },
    r = 0,
    i = 0;
  for (let t of e) {
    if (t.kind === `unequip`) (delete n[t.slot], (r += 1));
    else {
      let e = I5(t.item, n);
      r += -1 + e.off.length;
      for (let t of e.off) delete n[t];
      n[e.slot] = t.item;
    }
    i = Math.max(i, r);
  }
  return { delta: r, peak: i };
}
function Y5(e, t, n, r) {
  let i = new Set(),
    a = new Set(),
    o = [],
    s = (e) => {
      o.some((t) => t.item.id === e.item.id) || o.push(e);
    },
    c = X5(e, t, n, r, i, a);
  for (let o = 0; o < 4 && c.skipped.length; o++) {
    for (let e of c.skipped)
      (e.slot === `ring2` && e.why === B5 ? a.add(`ring2`) : i.add(e.item.id),
        s(e));
    c = X5(e, t, n, r, i, a);
  }
  for (let e of c.skipped) s(e);
  if (a.has(`ring2`)) {
    let a = H5(c.steps, e, t, n, r.level),
      o = X5(a.bag, a.worn, n + 1, r, i, new Set()).target.ring2;
    o &&
      o.id !== a.worn.ring2?.id &&
      o.id !== a.worn.ring1?.id &&
      s({ slot: `ring2`, item: o, why: B5 });
  }
  let l = new Set(wa.map((e) => c.target[e]?.id).filter(Boolean)),
    u = (e) => Ea[W5(e)].length > 0;
  return {
    ...c,
    skipped: o.filter((e) => !l.has(e.item.id)),
    pool: e.filter((e) => P5(e, r.level)).length,
    kept: e.filter((e) => F5(e) && u(e) && pa(e.ilvl) <= r.level).length,
    better: e
      .filter((e) => F5(e) && u(e) && pa(e.ilvl) <= r.level)
      .map((e) => ({ it: e, gain: L5(e, c.target, r) }))
      .filter((e) => e.gain > 1e-6)
      .sort((e, t) => t.gain - e.gain)
      .map((e) => e.it),
    over: e
      .filter((e) => u(e) && pa(e.ilvl) > r.level)
      .sort((e, t) => e.ilvl - t.ilvl),
  };
}
function X5(e, t, n, r, i, a) {
  let o = e.filter((e) => P5(e, r.level) && !i.has(e.id)),
    s = {};
  for (let e of U5) s[e.id] = q5(t, e.slots);
  let c = new Map(U5.map((e) => [e.id, Sle(e.id, e.slots, t, o, a)])),
    l = () => U5.reduce((e, t) => Object.assign(e, s[t.id]), {});
  for (let e = 0; e < 4; e++) {
    let e = !1;
    for (let t of U5) {
      let n = c.get(t.id);
      if (n.length < 2) continue;
      let i = l(),
        a = s[t.id],
        o = N5(J5(i, t.slots, a), r);
      for (let e of n) {
        if (e === a || K5(e, a)) continue;
        let n = N5(J5(i, t.slots, e), r);
        (n > o + 1e-6 ||
          (Math.abs(n - o) <= 1e-6 && !K5(a, s[t.id]) && G5(e) > G5(a))) &&
          ((a = e), (o = n));
      }
      K5(a, s[t.id]) || ((s[t.id] = a), (e = !0));
    }
    if (!e) break;
  }
  let u = U5.map((e) => {
      let n = Cle(e.id, t, s[e.id], r),
        { delta: i, peak: a } = wle(
          n.flatMap((e) => e.steps),
          t,
        );
      return { bs: n, rank: i < 0 ? 0 : a <= 0 ? 1 : 2, delta: i };
    })
      .filter((e) => e.bs.length)
      .sort((e, t) => e.rank - t.rank || e.delta - t.delta),
    d = [],
    f = [],
    p = [...e],
    m = { ...t };
  for (let { bs: e } of u)
    for (let t = 0; t < e.length; t++) {
      let i = e[t],
        a = H5(i.steps, p, m, n, r.level);
      if (a.refused) {
        for (let n of i.slot === `ring2` || i.slot === `ring1`
          ? [i]
          : e.slice(t))
          f.push({
            slot: n.slot,
            item: n.item,
            why: a.refused === `Your satchel is full.` ? n.why : a.refused,
          });
        if (i.slot === `ring2` || i.slot === `ring1`) continue;
        break;
      }
      (d.push(...i.steps), (p = a.bag), (m = a.worn));
    }
  let h = wa.filter((e) => t[e]?.id !== m[e]?.id);
  return {
    steps: d,
    skipped: f,
    target: m,
    changed: h,
    before: N5(t, r),
    after: N5(m, r),
    pool: o.length,
  };
}
var Tle = `Equip best is still at work.`;
function Ele() {
  let e = !1;
  return (t) => {
    if (e) return Promise.resolve({ done: 0, error: Tle });
    e = !0;
    let n = () => {
        e = !1;
      },
      r;
    try {
      r = t();
    } catch (e) {
      return (n(), Promise.reject(e));
    }
    return r.finally(n);
  };
}
async function Dle(e, t, n, r) {
  for (let i = 0; i < e.length; i++) {
    let a = e[i];
    try {
      a.kind === `equip` ? await t.equip(a.item.id) : await t.unequip(a.slot);
    } catch (e) {
      return { done: i, error: r(e) };
    }
    n(i + 1);
  }
  return { done: e.length, error: null };
}
var Z5 = [`plain`, `kindled`],
  Ole = { crowns: 0, dust: 0, shards: 0, motes: 0, chips: 0 };
function kle(e, t, n, r) {
  if (!Ua(e)) return `quest`;
  if (e.unique) return `named`;
  if (e.hollowed) return `hollowed`;
  if (e.enchant > 0) return `enchanted`;
  let i = R5(e, t, n);
  return !i && !r.has(e.id)
    ? null
    : e.base === `spellbook`
      ? `book`
      : pa(e.ilvl) > n.level
        ? `later`
        : i
          ? `upgrade`
          : `best`;
}
