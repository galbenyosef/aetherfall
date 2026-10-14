// assets__index-BTsv3a2s 275 — children
// Lines 169586-169884 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Hue({
  doc: e,
  myId: t,
  level: n,
  school: r,
  inv: i,
  onTake: a,
  onTakeCrowns: o,
  onTakeAll: s,
  onClose: c,
}) {
  let l = Bue(250),
    { tip: u, onHover: d, clear: f } = y7(),
    [p, m] = (0, v.useState)(!1);
  l5(c);
  let h = (0, v.useMemo)(() => {
      let e = {};
      for (let t of i?.worn ?? []) t.slot && (e[t.slot] = t7(t));
      return e;
    }, [i]),
    g = e.victimId === t,
    _ = e.claimUntil > l && s8(e) !== t,
    y = Math.ceil((e.claimUntil - l) / 1e3),
    b = i ? Math.max(0, i.bagMax - i.bag.length) : 0,
    x = (e) => {
      p || (m(!0), f(), e().finally(() => m(!1)));
    },
    C = S[e.school]?.colors.trim ?? `#ffffff`,
    w = (0, v.useMemo)(() => OY(`crowns`).toDataURL(), []);
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsxs)(`div`, {
        className: `items-ui remains-panel panel`,
        onMouseDown: (e) => e.stopPropagation(),
        children: [
          (0, Q.jsxs)(`div`, {
            className: `rm-head`,
            children: [
              (0, Q.jsxs)(`div`, {
                children: [
                  (0, Q.jsx)(`span`, {
                    className: `t`,
                    style: { color: C },
                    children: e.grave
                      ? g
                        ? `Your grave`
                        : `${e.victim}'s grave`
                      : g
                        ? `Your leavings`
                        : `${e.victim}'s Leavings`,
                  }),
                  e.grave
                    ? (0, Q.jsxs)(`small`, {
                        children: [
                          e.killer
                            ? (0, Q.jsxs)(Q.Fragment, {
                                children: [`Fell to `, e.killer],
                              })
                            : (0, Q.jsx)(Q.Fragment, { children: `Fell here` }),
                          ` · crumbles in `,
                          e9((e.expiresAt - l) / 1e3),
                        ],
                      })
                    : (0, Q.jsxs)(`small`, {
                        children: [
                          `Slain by `,
                          (0, Q.jsx)(`b`, {
                            style: { color: e.killerId === t ? D8 : E8 },
                            children: e.killerId === t ? `you` : e.killer,
                          }),
                          ` · fades in`,
                          ` `,
                          e9((e.expiresAt - l) / 1e3),
                        ],
                      }),
                ],
              }),
              (0, Q.jsx)(`button`, {
                className: `xbtn`,
                onClick: c,
                "aria-label": `Close`,
                children: `✕`,
              }),
            ],
          }),
          _
            ? (0, Q.jsxs)(`p`, {
                className: `rm-claim`,
                children: [
                  e.grave
                    ? `${e.victim}'s alone for ${e9(y)} more.`
                    : `${e.killer}'s to take for ${y}s more.`,
                  ` Then anyone may.`,
                ],
              })
            : e.claimUntil > l
              ? (0, Q.jsxs)(`p`, {
                  className: `rm-claim yours`,
                  children: [
                    `Yours alone for `,
                    e.grave ? e9(y) : `${y}s`,
                    ` more.`,
                    e.grave ? ` Then anyone may take it.` : ``,
                  ],
                })
              : null,
          (0, Q.jsxs)(`div`, {
            className: `rm-grid`,
            children: [
              e.crowns > 0 &&
                (0, Q.jsxs)(`button`, {
                  className: `islot rm-crowns`,
                  "aria-label": `${e.crowns} Crowns`,
                  title: `${e.crowns} Crowns`,
                  onClick: _ || p ? void 0 : () => x(o),
                  style: { opacity: _ ? 0.28 : 1 },
                  children: [
                    (0, Q.jsx)(`img`, { className: `pixel`, alt: ``, src: w }),
                    (0, Q.jsx)(`span`, {
                      className: `ench`,
                      children: e.crowns,
                    }),
                  ],
                }),
              e.items.map((e) =>
                (0, Q.jsx)(
                  p7,
                  {
                    item: e,
                    level: n,
                    onHover: d,
                    compare: !0,
                    onClick: _ || p ? void 0 : () => x(() => a(e.id)),
                    dim: _,
                  },
                  e.id,
                ),
              ),
            ],
          }),
          (0, Q.jsxs)(`ul`, {
            className: `rm-list`,
            children: [
              e.crowns > 0 &&
                (0, Q.jsxs)(`li`, {
                  style: { color: `#ffd166` },
                  children: [e.crowns, ` Crowns`],
                }),
              e.items.map((e) =>
                (0, Q.jsx)(
                  `li`,
                  { style: { color: a7(e) }, children: o7(e) },
                  e.id,
                ),
              ),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `rm-foot`,
            children: [
              (0, Q.jsxs)(`span`, {
                className: b === 0 ? `full` : ``,
                children: [
                  `Satchel `,
                  i ? `${i.bag.length}/${i.bagMax}` : `…`,
                  b === 0 ? ` · full` : ``,
                ],
              }),
              (0, Q.jsx)(`button`, {
                className: `px-btn primary`,
                disabled: _ || p || (b === 0 && e.crowns <= 0),
                onClick: () => x(s),
                children: `Take all`,
              }),
            ],
          }),
        ],
      }),
      u &&
        (0, Q.jsx)(`div`, {
          className: `items-ui`,
          children: (0, Q.jsx)(b7, { tip: u, level: n, school: r, worn: h }),
        }),
    ],
  });
}
var t9 = [
  { minLevel: 4, cost: { crowns: 300, dust: 30 } },
  { minLevel: 10, cost: { crowns: 900, dust: 80, shards: 8 } },
  { minLevel: 18, cost: { crowns: 2500, dust: 160, shards: 24 } },
];
function n9(e) {
  return (
    30 +
    6 * (Number.isNaN(e) ? 0 : Math.min(t9.length, Math.max(0, Math.floor(e))))
  );
}
var r9 = { crowns: 150, dust: 10, shards: 8 },
  i9 = [1, 5, 10],
  Uue = [
    { crowns: 100, dust: 15 },
    { crowns: 300, dust: 40, shards: 3 },
    { crowns: 1e3, dust: 100, shards: 12 },
  ],
  a9 = {
    satchel: [`bag`],
    chip: [`anvil`],
    book: [`book`],
    kit: [`anvil`],
    arrows: [`sword`],
  },
  Wue = /^satchel:([1-9][0-9]?)$/,
  Gue = /^chip:(0|[1-9][0-9]{0,3})$/,
  Kue = /^kit:(0|[1-9][0-9]{0,3})$/,
  que = /^arrows:(fire|shock|explosive):(0|[1-9][0-9]{0,3})$/,
  o9 = 9999,
  s9 = `book:`,
  Jue = ee.flatMap((e) => S[e].spells.map((e) => e.id));
function c9(e) {
  let t = Wue.exec(e);
  if (t) return { kind: `satchel`, row: Number(t[1]) };
  let n = Gue.exec(e);
  if (n) return { kind: `chip`, held: Number(n[1]) };
  let r = Kue.exec(e);
  if (r) return { kind: `kit`, held: Number(r[1]) };
  let i = que.exec(e);
  if (i) return { kind: `arrows`, arrow: i[1], held: Number(i[2]) };
  let a = e.startsWith(s9) ? e.slice(5) : null;
  return a !== null && Jue.includes(a) ? { kind: `book`, spell: a } : null;
}
var Yue = (e) => `satchel:${e}`,
  Xue = (e) => `chip:${e}`,
  Zue = (e) => `kit:${e}`,
  Que = (e, t) => `arrows:${e}:${t}`,
  $ue = (e) => s9 + e,
  l9 = (e) => _o[yo(e)] ?? 1,
  u9 = (e, t) => ({
    crowns: (e.crowns ?? 0) * t,
    dust: (e.dust ?? 0) * t,
    shards: (e.shards ?? 0) * t,
    motes: (e.motes ?? 0) * t,
    chips: (e.chips ?? 0) * t,
  }),
  d9 = (e) => Number.isInteger(e) && e >= 1 && e <= 10,
  f9 = (e, t) => Number.isInteger(e) && e >= 1 && e <= t;
function p9(e, t) {
  let n = c9(e);
  if (!n) return null;
  if (n.kind === `chip`) return d9(t) ? u9(r9, t) : null;
  if (n.kind === `kit`) return f9(t, 5) ? u9(La.cost, t) : null;
  if (n.kind === `arrows`) return f9(t, 5) ? u9(Pa[n.arrow].cost, t) : null;
  if (n.kind === `book`) return u9(Uue[yo(n.spell)], 1);
  let r = t9[n.row - 1];
  return r ? u9(r.cost, 1) : null;
}
function m9(e, t, n, r) {
  let i = c9(e);
  if (!i || !a9[i.kind].includes(n)) return `They don't sell that here.`;
  if (i.kind === `chip`)
    return d9(t)
      ? i.held === r.chips
        ? null
        : `Your pouch changed. Look again.`
      : `Buy how many?`;
  if (i.kind === `kit`)
    return f9(t, 5)
      ? i.held === (r.kits ?? 0)
        ? null
        : `Your pouch changed. Look again.`
      : `Buy how many?`;
  if (i.kind === `arrows`) {
    if (!f9(t, 5)) return `Buy how many?`;
    let e = r.quiver?.[i.arrow] ?? 0;
    return i.held === e
      ? e + t * 20 > 999
        ? `Your quiver can't hold that many.`
        : null
      : `Your quiver changed. Look again.`;
  }
  if (t !== 1) return `Buy how many?`;
  if (i.kind === `book`) {
    if (od(r.school, r.spells).includes(i.spell))
      return `You already know this spell.`;
    if (r.carrying.includes(i.spell))
      return `You're carrying that book. Read it.`;
    let e = l9(i.spell);
    return r.level < e
      ? `Come back at level ${e}.`
      : r.bagCount >= n9(r.satchel)
        ? `Your satchel is full.`
        : null;
  }
  if (i.row > t9.length) return `Your satchel can't grow any more.`;
  if (i.row <= r.satchel) return `You already bought that row.`;
  if (i.row > r.satchel + 1) return `Buy the rows in order.`;
  let a = t9[i.row - 1].minLevel;
  return r.level < a ? `Come back at level ${a}.` : null;
}
var ede = [0, 1, 2].flatMap((e) => ee.map((t) => S[t].spells[e].id));
