// index-BTsv3a2s 245 — children
// Lines 160418-160818 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Ice({
  school: e,
  selected: t,
  values: n,
  known: r,
  arms: i,
  loadout: a,
  held: o,
  saving: s,
  onBrowse: c,
  onPrepare: l,
  onDrag: u,
}) {
  let d = [...v5(e), `weapons`],
    f = Se(t) ?? S[e].spells[0],
    p = ae(f.id),
    m = p ? `weapons` : (xe[f.id] ?? e),
    h = Math.max(0, d.indexOf(m)),
    g = m === `weapons` ? M8 : j8[m],
    _ = m === `weapons` ? b.map((e) => w[e]) : y5(m),
    v = m === `weapons` ? M8.lore : S[m].lore,
    y = (e) => {
      let t = ae(e.id);
      return t ? i.includes(t) : r.includes(e.id);
    },
    C = y(f),
    D = rd[f.id],
    O = id(f.id, n),
    k = O >= 10,
    ee = ie(f.id) ? `manual` : `spellbook`,
    te = p && T[p] === re(e),
    ne = (e) => Number(e.toFixed(2));
  return (0, Q.jsxs)(`div`, {
    className: `arc-book-wrap`,
    children: [
      (0, Q.jsxs)(`div`, {
        className: `arc-book`,
        children: [
          (0, Q.jsxs)(`section`, {
            className: `arc-leaf arc-index`,
            "aria-label": `Spell index`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `arc-running`,
                children: [
                  (0, Q.jsx)(`span`, {
                    children:
                      m === `weapons`
                        ? `Arms in hand`
                        : re(e) === `mage`
                          ? `The four disciplines`
                          : `The order and the four disciplines`,
                  }),
                  (0, Q.jsx)(`span`, { children: `Vol. I` }),
                ],
              }),
              (0, Q.jsxs)(`h3`, {
                className: `arc-chapter`,
                children: [
                  (0, Q.jsxs)(`i`, { children: [Pce[h], `.`] }),
                  ` `,
                  g.name,
                ],
              }),
              (0, Q.jsx)(`p`, { className: `arc-chapter-lore`, children: v }),
              (0, Q.jsx)(`div`, {
                className: `arc-ink-divider`,
                "aria-hidden": `true`,
                children: `✧`,
              }),
              (0, Q.jsxs)(`div`, {
                className: `arc-index-heading`,
                children: [
                  (0, Q.jsx)(`span`, { children: `Inscriptions` }),
                  (0, Q.jsxs)(`span`, {
                    children: [
                      _.filter(y).length,
                      ` / `,
                      _.length,
                      ` `,
                      m === `weapons` ? `in hand` : `learned`,
                    ],
                  }),
                ],
              }),
              (0, Q.jsx)(`div`, {
                className: `arc-inscriptions`,
                children: _.map((e) => {
                  let t = ae(e.id),
                    n = y(e),
                    r = a.indexOf(e.id);
                  return (0, Q.jsxs)(
                    `button`,
                    {
                      className: `arc-inscription ${n ? `draggable` : `unknown`}`,
                      "aria-pressed": f.id === e.id,
                      onClick: () => c(e.id),
                      onPointerDown: n ? (t) => u(t, e.id) : void 0,
                      title: n ? `Drag onto a hotbar slot` : void 0,
                      children: [
                        (0, Q.jsx)(F8, { spell: e }),
                        (0, Q.jsxs)(`span`, {
                          children: [
                            (0, Q.jsx)(`strong`, { children: e.name }),
                            (0, Q.jsx)(`small`, {
                              children: n
                                ? r >= 0
                                  ? `Prepared · slot ${r + 1}`
                                  : t
                                    ? `In hand · unprepared`
                                    : `Learned · unprepared`
                                : t
                                  ? `Hold ${x[t]} to use it`
                                  : `Unlearned · Find its ${ie(e.id) ? `manual` : `spellbook`}`,
                            }),
                          ],
                        }),
                        (0, Q.jsx)(`span`, {
                          "aria-hidden": `true`,
                          children: n ? (r >= 0 ? `◆` : `✧`) : `?`,
                        }),
                      ],
                    },
                    e.id,
                  );
                }),
              }),
              (0, Q.jsxs)(`div`, {
                className: `arc-margin-note`,
                children: [
                  (0, Q.jsx)(`span`, { "aria-hidden": `true`, children: `❧` }),
                  (0, Q.jsxs)(`p`, {
                    children: [
                      `“Power is not the flame.`,
                      (0, Q.jsx)(`br`, {}),
                      `It is the hand that knows when to let it go.”`,
                    ],
                  }),
                  (0, Q.jsx)(`small`, { children: `A note in the margin` }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `arc-discovery`,
                children: [
                  (0, Q.jsx)(P8, { name: `heart` }),
                  (0, Q.jsx)(`p`, {
                    children:
                      m === `weapons`
                        ? (0, Q.jsxs)(Q.Fragment, {
                            children: [
                              `A weapon’s skill is the weapon’s.`,
                              (0, Q.jsx)(`br`, {}),
                              `Take it up to use it; set it down and it goes.`,
                            ],
                          })
                        : m === `marksman` || m === `paladin`
                          ? (0, Q.jsxs)(Q.Fragment, {
                              children: [
                                `An order’s further arts are in its manuals.`,
                                (0, Q.jsx)(`br`, {}),
                                `Find them in the world and read them.`,
                              ],
                            })
                          : (0, Q.jsxs)(Q.Fragment, {
                              children: [
                                `New spells are found in the world.`,
                                (0, Q.jsx)(`br`, {}),
                                `Read their spellbooks to learn them.`,
                              ],
                            }),
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `arc-page-number`,
                children: [
                  (0, Q.jsx)(`span`, { children: `Collected along the road.` }),
                  (0, Q.jsxs)(`span`, { children: [`— `, 18 + h * 2, ` —`] }),
                ],
              }),
            ],
          }),
          (0, Q.jsxs)(`section`, {
            className: `arc-leaf arc-spell-detail`,
            "aria-label": `Selected spell`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `arc-running`,
                children: [
                  (0, Q.jsxs)(`span`, {
                    children: [
                      g.short,
                      ` · Inscription `,
                      _.findIndex((e) => e.id === f.id) + 1,
                    ],
                  }),
                  (0, Q.jsx)(`span`, {
                    children: p
                      ? C
                        ? `In hand`
                        : `Not in hand`
                      : C
                        ? `Remembered`
                        : `Yet to be found`,
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `arc-spell-title`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    children: [
                      (0, Q.jsx)(`h3`, { children: f.name }),
                      (0, Q.jsxs)(`p`, {
                        children: [Fce[f.kind] ?? f.kind, ` · `, g.short],
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`span`, {
                    className: `arc-learned-seal`,
                    children: p
                      ? C
                        ? `In hand`
                        : `Not held`
                      : C
                        ? `Learned`
                        : `Unlearned`,
                  }),
                ],
              }),
              (0, Q.jsx)(nce, { spell: f }),
              (0, Q.jsx)(`p`, {
                className: `arc-spell-description`,
                children: f.desc,
              }),
              (0, Q.jsxs)(`div`, {
                className: `arc-spell-stats`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    children: [
                      (0, Q.jsx)(`strong`, { children: f.dmg }),
                      (0, Q.jsx)(`small`, { children: `Base damage` }),
                    ],
                  }),
                  f.mana > 0 || !f.stamina
                    ? (0, Q.jsxs)(`div`, {
                        children: [
                          (0, Q.jsx)(`strong`, { children: f.mana }),
                          (0, Q.jsx)(`small`, { children: `Base mana` }),
                        ],
                      })
                    : (0, Q.jsxs)(`div`, {
                        children: [
                          (0, Q.jsx)(`strong`, { children: f.stamina }),
                          (0, Q.jsx)(`small`, {
                            children:
                              f.kind === `guard`
                                ? `Stamina an attack`
                                : `Base stamina`,
                          }),
                        ],
                      }),
                  (0, Q.jsxs)(`div`, {
                    children: [
                      (0, Q.jsxs)(`strong`, {
                        children: [
                          ne(f.cd),
                          (0, Q.jsx)(`em`, { children: ` s` }),
                        ],
                      }),
                      (0, Q.jsx)(`small`, { children: `Base recovery` }),
                    ],
                  }),
                ],
              }),
              p &&
                (0, Q.jsx)(`p`, {
                  className: `arc-power-source`,
                  children: te
                    ? `Your order’s weapon: its skill at its full.`
                    : f.kind === `guard`
                      ? `Outside its order: blocks cost half again, ${E.offClass.arc}° wide.`
                      : `Outside its order: ${Math.round(E.offClass.dmg * 100)}% of its damage.`,
                }),
              f.needs &&
                !p &&
                !i.includes(f.needs) &&
                (0, Q.jsxs)(`p`, {
                  className: `arc-power-source`,
                  children: [`Needs `, x[f.needs], ` in hand.`],
                }),
              !C &&
                (0, Q.jsx)(`p`, {
                  className: `arc-unlearned`,
                  children: p
                    ? `It comes with ${x[p]}: take one up and it is yours while you hold it.`
                    : `An empty place in your memory. Find this ${ie(f.id) ? `art’s manual` : `spell’s book`} on your travels and read it to claim the inscription.`,
                }),
              (0, Q.jsxs)(`div`, {
                className: `arc-awakening`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    children: [
                      (0, Q.jsx)(`span`, {
                        children: k ? `✧ Awakened` : `Awakening`,
                      }),
                      (0, Q.jsxs)(`span`, {
                        children: [ne(O), ` / `, 10, ` power`],
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`div`, {
                    className: `arc-power-track`,
                    role: `progressbar`,
                    "aria-label": `${f.name} awakening`,
                    "aria-valuemin": 0,
                    "aria-valuemax": 10,
                    "aria-valuenow": Math.min(10, O),
                    "aria-valuetext": `${ne(O)} power${k ? `, awakened` : `, awakens at 10`}`,
                    children: (0, Q.jsx)(`i`, {
                      style: { width: `${Math.min(100, (O / 10) * 100)}%` },
                    }),
                  }),
                  (0, Q.jsx)(`h4`, { children: D.awaken.name }),
                  (0, Q.jsx)(`p`, { children: D.awaken.desc }),
                ],
              }),
              (0, Q.jsxs)(`p`, {
                className: `arc-power-source`,
                children: [
                  `Draws on `,
                  D.scale
                    .map(([e, t]) => `${Math.round(t * 100)}% ${Au[e].name}`)
                    .join(` + `),
                  ` · +`,
                  ne(O * Eu * 100),
                  `% damage from power`,
                ],
              }),
              (0, Q.jsx)(`button`, {
                className: `arc-primary`,
                disabled: !C || s,
                onClick: () => l(f.id),
                children: C
                  ? o === f.id
                    ? `Choose a slot below ↓`
                    : `◇ Prepare this inscription`
                  : p
                    ? `Hold ${x[p]} to use it`
                    : `Find its ${ee} to learn`,
              }),
              (0, Q.jsxs)(`div`, {
                className: `arc-page-number`,
                children: [
                  (0, Q.jsx)(`span`, {
                    children: k
                      ? `What slept in ink now wakes.`
                      : `Practice gives the ink its power.`,
                  }),
                  (0, Q.jsxs)(`span`, { children: [`— `, 19 + h * 2, ` —`] }),
                ],
              }),
            ],
          }),
          (0, Q.jsx)(`span`, {
            className: `arc-binding`,
            "aria-hidden": `true`,
          }),
          (0, Q.jsx)(`span`, {
            className: `arc-ribbon`,
            "aria-hidden": `true`,
          }),
        ],
      }),
      (0, Q.jsx)(`nav`, {
        className: `arc-bookmarks`,
        "aria-label": `Chapters`,
        children: d.map((e) => {
          let t = e === `weapons` ? M8 : j8[e],
            n =
              e === `weapons`
                ? w[b.find((e) => i.includes(e)) ?? `sword`]
                : y5(e)[0];
          return (0, Q.jsxs)(
            `button`,
            {
              "aria-label": `${t.short} ${e === `weapons` ? `skills` : `spells`}`,
              "aria-pressed": m === e,
              onClick: () => c(n.id),
              children: [
                (0, Q.jsx)(P8, { name: t.glyph }),
                (0, Q.jsx)(`span`, { children: t.short }),
              ],
            },
            e,
          );
        }),
      }),
    ],
  });
}
