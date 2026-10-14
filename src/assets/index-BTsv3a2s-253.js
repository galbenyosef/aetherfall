// index-BTsv3a2s 253 — classname
// Lines 162839-163167 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Ale(e, t, n, r, i = z5(e, t, n)) {
  let a = [],
    o = [],
    s = [],
    c = Ole;
  for (let l of e) {
    if (l.rarity !== r) continue;
    let e = kle(l, t, n, i);
    if (e) {
      (o.push(l), s.includes(e) || s.push(e));
      continue;
    }
    (a.push(l), (c = Mle(c, po(l))));
  }
  return (
    s.sort((e, t) => e7.indexOf(e) - e7.indexOf(t)),
    { items: a, gain: c, kept: o, why: s }
  );
}
function jle(e, t, n) {
  let r = z5(e, t, n);
  return Object.fromEntries(Z5.map((i) => [i, Ale(e, t, n, i, r)]));
}
function Mle(e, t) {
  return {
    crowns: e.crowns + t.crowns,
    dust: e.dust + t.dust,
    shards: e.shards + t.shards,
    motes: e.motes + t.motes,
    chips: e.chips + t.chips,
  };
}
function Q5(e) {
  return (
    Object.keys(so)
      .filter((t) => e[t] > 0)
      .map((t) => `${e[t]} ${so[t].name}`)
      .join(`, `) || `nothing`
  );
}
var $5 = {
    upgrade: `upgrades`,
    best: `what Equip best would put on`,
    later: `upgrades for a later level`,
    book: `spellbooks you haven't read`,
    enchanted: `Kindled +1 or more`,
    hollowed: `Hollowed`,
    named: `named`,
    quest: `quest items`,
  },
  e7 = Object.keys($5);
function Nle(e) {
  return e.kept.length
    ? `${e.kept.length} kept: ${e.why.map((e) => $5[e]).join(`, `)}`
    : ``;
}
function t7(e) {
  return {
    id: e._id,
    base: e.base,
    rarity: e.rarity,
    ilvl: e.ilvl,
    school: e.school,
    affixes: e.affixes.map((e) => ({
      stat: e.stat,
      roll: e.roll,
      spell: e.spell,
    })),
    unique: e.unique,
    enchant: e.enchant,
    failStacks: e.failStacks,
    hollowed: e.hollowed,
    memory: e.memory,
    sockets: e.sockets,
    spell: e.spell,
    wear: e.wear,
  };
}
var n7 = new WeakMap();
function r7(e) {
  let t = n7.get(e);
  return (t || ((t = e.toDataURL()), n7.set(e, t)), t);
}
var i7 = (e) => Math.round(e).toLocaleString(`en-US`);
function a7(e) {
  return e.hollowed ? va.color : _a[e.rarity].color;
}
function o7(e) {
  return Xa(e) + (e.enchant ? ` +${e.enchant}` : ``);
}
var s7 = {
    staff: `Staff · Two-handed`,
    wand: `Wand`,
    orb: `Focus · Orb`,
    tome: `Focus · Tome`,
    lantern: `Focus · Lantern`,
    wardstone: `Focus · Ward-stone`,
    sword: `Sword · Main hand`,
    shield: `Shield · Off hand`,
    bow: `Bow · Two-handed`,
    twinblade: `Twin-blade · Main hand · Rare`,
    axe: `Axe · Main hand`,
    spear: `Spear · Two-handed`,
    halberd: `Halberd · Two-handed`,
    dagger: `Dagger · Belt · Beside a bow`,
    hat: `Hat`,
    robe: `Robe`,
    gloves: `Gloves`,
    boots: `Boots`,
    amulet: `Amulet`,
    ring: `Ring`,
    shard: `Relic · Crystal shard`,
    spellbook: `Spellbook · read it to learn`,
  },
  Ple = {
    mainhand: `staff`,
    offhand: `orb`,
    hat: `hat`,
    robe: `robe`,
    gloves: `gloves`,
    boots: `boots`,
    amulet: `amulet`,
    ring1: `ring`,
    ring2: `ring`,
    relic: `shard`,
  };
function Fle(e) {
  return xe[e] ?? null;
}
function Ile(e) {
  let [t, n] = e.split(`:`),
    r = ya[t];
  return r
    ? n
      ? `${
          Object.values(S)
            .flatMap((e) => e.spells)
            .find((e) => e.id === n)?.name ?? n
        } ${t === `spellDmg` ? `damage` : `mana cost`}`
      : r.name
    : e;
}
function c7(e, t) {
  let n = e.split(`:`)[0],
    r = ya[n];
  if (!r) return String(t);
  let i = t > 0 ? `+` : `−`,
    a = Math.abs(t);
  return r.pct
    ? `${i}${(a * 100).toFixed(1)}%`
    : n === `clarity`
      ? `${i}${a.toFixed(1)}/s`
      : `${i}${Math.round(a)}`;
}
var l7 = new Set(),
  u7 = 0;
function d7(e) {
  let t = Math.floor(e / 60);
  for (let e of l7) e(t);
  u7 = l7.size ? requestAnimationFrame(d7) : 0;
}
function Lle(e) {
  let t = (0, v.useRef)(e);
  ((t.current = e),
    (0, v.useEffect)(() => {
      let e = (e) => t.current(e);
      return (
        l7.add(e),
        (u7 ||= requestAnimationFrame(d7)),
        () => {
          l7.delete(e);
        }
      );
    }, []));
}
function f7({ level: e, color: t, size: n = 52 }) {
  let r = (0, v.useRef)(null),
    i = (0, v.useMemo)(
      () => matchMedia(`(prefers-reduced-motion: reduce)`).matches,
      [],
    );
  return (
    Lle((n) => {
      let a = r.current;
      if (!a) return;
      let o = a.getContext(`2d`);
      o.clearRect(0, 0, 20, 20);
      let s = RY(e, i ? 0 : n, t, 20);
      s && o.drawImage(s, 0, 0);
    }),
    (0, Q.jsx)(`canvas`, {
      ref: r,
      className: `aura pixel`,
      width: 20,
      height: 20,
      style: { width: n, height: n },
    })
  );
}
function p7({
  item: e,
  level: t,
  glyph: n,
  locked: r,
  dim: i,
  selected: a,
  onClick: o,
  onHover: s,
  compare: c,
  over: l,
  drop: u,
  fit: d,
  onDragStart: f,
}) {
  let p = d === void 0 ? `` : d ? `fits` : `nofit`;
  if (!e)
    return (0, Q.jsx)(`button`, {
      className: `islot empty ${r ? `locked` : ``} ${p}`,
      tabIndex: -1,
      "aria-label": `Empty slot`,
      "data-drop": u,
      children:
        n &&
        (0, Q.jsx)(`img`, {
          className: `pixel glyph`,
          alt: ``,
          src: r7(ZY(n)),
        }),
    });
  let m = a7(e),
    h = e.rarity === `remembered` || e.rarity === `skyfallen` || e.hollowed;
  return (0, Q.jsxs)(`button`, {
    className: `islot ${h ? `glow` : ``} ${e.hollowed ? `hollowed` : ``} ${i ? `dim` : ``} ${a ? `selected` : ``} ${l ? `over` : ``} ${f ? `draggable` : ``} ${p}`,
    style: { "--r": m },
    "aria-label": o7(e),
    "data-drop": u,
    onClick: o,
    onPointerDown: f,
    onMouseEnter: (t) => s?.(e, t.currentTarget, c),
    onMouseLeave: () => s?.(null),
    children: [
      (0, Q.jsx)(`img`, {
        className: `pixel`,
        alt: ``,
        src: r7(FY(e)),
        draggable: !1,
      }),
      e.enchant >= 4 && (0, Q.jsx)(f7, { level: e.enchant, color: m }),
      e.enchant > 0 &&
        (0, Q.jsxs)(`span`, { className: `ench`, children: [`+`, e.enchant] }),
      pa(e.ilvl) > t &&
        (0, Q.jsx)(`span`, {
          className: `req`,
          title: `Requires level ${pa(e.ilvl)}`,
        }),
    ],
  });
}
function m7(e, t, n = 6) {
  return [...new Set([...Object.keys(e), ...Object.keys(t)])]
    .filter((e) => e !== `hunger`)
    .map((n) => ({ k: n, d: (e[n] ?? 0) - (t[n] ?? 0) }))
    .filter((e) => Math.abs(e.d) > 1e-4)
    .sort((e, t) => Math.abs(t.d) - Math.abs(e.d))
    .slice(0, n);
}
function h7({ x: e }) {
  return (0, Q.jsxs)(`div`, {
    className: e.d < 0 ? `down` : `up`,
    children: [e.d < 0 ? `▼` : `▲`, ` `, c7(e.k, e.d), ` `, Ile(e.k)],
  });
}
function g7({ it: e }) {
  let t = _a[e.rarity];
  return (0, Q.jsxs)(`span`, {
    className: `rtag`,
    style: { color: t.color },
    children: [t.name, ` · `, t.common],
  });
}
function _7(e) {
  return b.find((t) => t === e);
}
function Rle({ weapon: e, school: t }) {
  let n = w[e],
    r = T[e] === re(t),
    i = S[T[e]].name;
  return (0, Q.jsxs)(`div`, {
    className: `tt-sec book`,
    children: [
      (0, Q.jsxs)(`div`, {
        className: `imp`,
        children: [
          `Gives `,
          n.name,
          ` · `,
          n.stamina,
          ` stamina`,
          n.kind === `guard` ? ` an attack` : ``,
        ],
      }),
      (0, Q.jsx)(`div`, { className: `muted`, children: n.desc }),
      r
        ? (0, Q.jsxs)(`div`, {
            className: `up`,
            children: [`A `, i, `'s own weapon: used in full.`],
          })
        : n.kind === `guard`
          ? (0, Q.jsxs)(`div`, {
              className: `bad`,
              children: [
                `Not your order's: its blocks cost half again and cover `,
                E.offClass.arc,
                `°.`,
              ],
            })
          : (0, Q.jsxs)(`div`, {
              className: `bad`,
              children: [
                `Not your order's: `,
                Math.round(E.offClass.dmg * 100),
                `% of its damage (`,
                i,
                `s use it in full).`,
              ],
            }),
    ],
  });
}
