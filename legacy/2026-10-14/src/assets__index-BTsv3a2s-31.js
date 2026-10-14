// assets__index-BTsv3a2s 31 — desc
// Lines 26824-27115 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var Iu = (e, t, n, r, i, a) => ({
    id: e,
    between: n,
    gate: r,
    grant: () => ({ [e]: 1 }),
    notables: [Fu(t, 0, i[0]), Fu(t, 1, i[1]), Fu(t, 2, i[2])],
    keystone: a,
  }),
  Lu = [
    Iu(
      `fire`,
      `pyro`,
      [`strength`, `mana`],
      `The Ember Door`,
      [`Kindled Hand`, `Ring of Cinders`, `Starfall`],
      {
        name: `Heart of the Inferno`,
        desc: `Fireballs explode on impact, scorching every nearby foe. All spells deal 10% more damage.`,
        effect: { caps: { pyro: !0 }, globalDmg: 0.1 },
      },
    ),
    Iu(
      `lightning`,
      `storm`,
      [`mana`, `agility`],
      `The Storm Door`,
      [`Quick Current`, `Forked Path`, `Heaven's Answer`],
      {
        name: `Overcharge`,
        desc: `Spark Bolts have a 30% chance to arc into two nearby foes. All spells deal 10% more damage.`,
        effect: { caps: { storm: !0 }, globalDmg: 0.1 },
      },
    ),
    Iu(
      `frost`,
      `cryo`,
      [`agility`, `aether`],
      `The Winter Door`,
      [`Razor Rime`, `Winter's Halo`, `Howling White`],
      {
        name: `Absolute Zero`,
        desc: `Frost Shards pierce through every enemy in their path. All spells deal 10% more damage.`,
        effect: {
          pierce: { frostshard: !0 },
          caps: { cryo: !0 },
          globalDmg: 0.1,
        },
      },
    ),
    Iu(
      `void`,
      `void`,
      [`aether`, `lifeforce`],
      `The Veil Door`,
      [`Sliver of Nothing`, `Open Vein`, `Wound in the World`],
      {
        name: `Hunger of the Void`,
        desc: `Every spell you cast heals you for 12% of the damage it deals. All spells deal 10% more damage.`,
        effect: { caps: { void: !0 }, healAll: 0.12, globalDmg: 0.1 },
      },
    ),
    {
      id: `warden`,
      between: [`lifeforce`, `strength`],
      gate: `The Lumen Door`,
      grant: (e) =>
        e === 0
          ? { lifeforce: 1 }
          : e === 2
            ? { strength: 1 }
            : { strength: 1, lifeforce: 1 },
      notables: [
        {
          name: `Hearthstone`,
          desc: `+30 maximum health.`,
          effect: { hp: 30 },
        },
        {
          name: `Lumen Skin`,
          desc: `4% less damage taken.`,
          effect: { ward: 0.04 },
        },
        {
          name: `Hollow Vigil`,
          desc: `10% less damage from Hollow magic and husks.`,
          effect: { hollowguard: 0.1 },
        },
      ],
      keystone: {
        name: `Bastion of Marizon`,
        desc: `+50 maximum health, 8% less damage taken and 10% less from the Hollow.`,
        effect: { hp: 50, ward: 0.08, hollowguard: 0.1 },
      },
    },
  ];
function Ru(e) {
  return Tu.filter((t) => e[t])
    .map((t) => `+${e[t]} ${Au[t].name}`)
    .join(`, `);
}
var zu = 48,
  Bu = 96;
function Vu() {
  let e = (e, t = 1) => ({ [e]: t }),
    t = (e) => ({ name: Ru(e), kind: `minor`, attrs: e }),
    n = (e, t) => ({
      name: e.name,
      kind: `notable`,
      attrs: t,
      effect: e.effect,
      desc: e.desc,
    }),
    r = (e) => ({
      name: e.name,
      kind: `keystone`,
      attrs: {},
      effect: e.effect,
      desc: e.desc,
    }),
    i = (e) => Pu.find((t) => t.attr === e),
    a = (e) => Lu.find((t) => t.id === e),
    o = [],
    s = (e, t, n, r) => (o.push({ id: e, region: t, from: n, stars: r }), e),
    c = (r, a) =>
      s(r, a, Nu, [t(e(a)), t(e(a)), t(e(a)), n(i(a).notable, e(a, 2))]),
    l = (n, a, o) => s(n, a, o, [t(e(a)), t(e(a)), t(e(a)), r(i(a).keystone)]),
    u = (e, i) => {
      let o = a(e),
        [c, l] = o.between,
        u = (e) => o.grant(e),
        d = o.grant(1);
      s(`${e}-door`, e, i, [
        {
          name: o.gate,
          kind: `notable`,
          attrs: { [c]: 1, [l]: 1 },
          desc: `The way into ${e === `warden` ? `the Warden's ward` : Au[e].name}.`,
        },
        t(d),
        t(d),
        t(d),
      ]);
      let f = [`a`, `b`, `c`].map((r, i) =>
        s(`${e}-${r}`, e, `${e}-door-4`, [
          t(u(i)),
          t(u(i)),
          t(u(i)),
          n(
            o.notables[i],
            Object.fromEntries(
              Object.entries(u(i)).map(([e, t]) => [e, (t ?? 0) * 2]),
            ),
          ),
        ]),
      );
      s(`${e}-key`, e, `${f[1]}-4`, [t(d), t(d), t(d), r(o.keystone)]);
    };
  (c(`str`, `strength`),
    c(`mana`, `mana`),
    c(`agi`, `agility`),
    s(`life`, `lifeforce`, `str-4`, [
      t(e(`lifeforce`)),
      t(e(`lifeforce`)),
      n(i(`lifeforce`).notable, e(`lifeforce`, 2)),
      r(i(`lifeforce`).keystone),
    ]),
    l(`might`, `strength`, `str-4`),
    u(`warden`, `str-4`),
    u(`fire`, `str-4`),
    s(`aeth`, `aether`, `mana-4`, [
      t(e(`aether`)),
      n(i(`aether`).notable, e(`aether`, 2)),
      t(e(`aether`)),
      r(i(`aether`).keystone),
    ]),
    u(`void`, `aeth-2`),
    l(`bound`, `mana`, `mana-4`),
    u(`lightning`, `mana-4`),
    u(`frost`, `agi-4`),
    l(`quick`, `agility`, `agi-4`));
  let d = [
      {
        id: Nu,
        name: `The Heart`,
        kind: `heart`,
        x: 0,
        y: 0,
        region: `heart`,
        attrs: {},
        desc: `Where every mage begins. Strength, Mana and Agility grow from here; every other road branches off them.`,
      },
    ],
    f = [],
    p = new Map(),
    m = new Map([[Nu, 0]]);
  for (let e of o) {
    let t = e.from;
    e.stars.forEach((n, r) => {
      let i = `${e.id}-${r + 1}`;
      (d.push({ ...n, id: i, region: e.region, x: 0, y: 0 }),
        f.push([t, i]),
        p.set(t, [...(p.get(t) ?? []), i]),
        m.set(i, m.get(t) + 1),
        (t = i));
    });
  }
  let h = new Map(),
    g = new Map(d.map((e) => [e.id, e.kind])),
    _ = (e) => {
      let t =
        (p.get(e) ?? []).reduce((e, t) => e + _(t), 0) ||
        (g.get(e) === `keystone` ? 1.5 : 1);
      return (h.set(e, t), t);
    };
  _(Nu);
  let v = (e, t, n) => {
    let r = d.find((t) => t.id === e);
    if (e !== `heart`) {
      let i = (((t + n) / 2) * Math.PI) / 180,
        a = m.get(e) * zu;
      ((r.x = Math.round(a * Math.sin(i) * 10) / 10),
        (r.y = Math.round(-a * Math.cos(i) * 10) / 10));
    }
    let i = p.get(e) ?? [],
      a = e === `heart` ? i.length : h.get(e),
      o = t;
    for (let r of i) {
      let i = ((n - t) * (e === `heart` ? 1 : h.get(r))) / a;
      (v(r, o, o + i), (o += i));
    }
  };
  return (v(Nu, -96, Bu), { nodes: d, links: f });
}
var Hu = Vu(),
  Uu = new Map(Hu.nodes.map((e) => [e.id, e])),
  Wu = new Map(Hu.nodes.map((e) => [e.id, []]));
for (let [e, t] of Hu.links) (Wu.get(e).push(t), Wu.get(t).push(e));
function Gu(e) {
  return Uu.get(e);
}
function Ku(e) {
  return Wu.get(e) ?? [];
}
function qu(e) {
  let t = [];
  for (let n of e ?? [])
    n !== `heart` && Uu.has(n) && !t.includes(n) && t.push(n);
  return t;
}
function Ju(e) {
  return qu(e).length;
}
function Yu(e) {
  return 2 * e;
}
var Xu = Hu.nodes.filter((e) => e.id !== Nu).length;
function Zu(e, t) {
  return Math.max(0, Math.min(Yu(e), Xu) - Ju(t));
}
function Qu(e, t) {
  let n = {};
  for (let t of Tu) n[t] = ju[e]?.[t] ?? 0;
  for (let e of qu(t)) {
    let t = Uu.get(e);
    for (let e of Tu) n[e] += t.attrs[e] ?? 0;
  }
  return n;
}
function $u(e, t, n) {
  if (!Uu.has(n)) return `Unknown passive`;
  let r = qu(e);
  return n === `heart` || r.includes(n)
    ? `Already taken`
    : r.length >= Yu(t)
      ? `No passive points left`
      : Ku(n).some((e) => e === `heart` || r.includes(e))
        ? null
        : `Take a passive next to it first`;
}
function ed(e, t) {
  let n = qu(e);
  if (t === `heart`) return `The Heart can't be given back`;
  if (!n.includes(t)) return `Not taken`;
  let r = new Set(n.filter((e) => e !== t)),
    i = new Set([Nu]),
    a = [Nu];
  for (; a.length;) {
    let e = a.shift();
    for (let t of Ku(e)) r.has(t) && !i.has(t) && (i.add(t), a.push(t));
  }
  return i.size - 1 === r.size ? null : `Other passives hang from this one`;
}
