// index-BTsv3a2s 254 — children
// Lines 163168-163509 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function v7({
  item: e,
  level: t,
  school: n,
  worn: r,
  compare: i,
  children: a,
  known: o,
}) {
  let s = a7(e),
    c = pa(e.ilvl),
    l = e.unique ? Aa[e.unique] : null,
    u = po(e),
    d = [...ao].reverse().find((t) => e.enchant >= t.at),
    f = null,
    p = xo(e);
  if (i && r && !p) {
    let t = vle(e, r);
    if (!t.length)
      f = (0, Q.jsx)(`div`, {
        className: `tt-cap`,
        children: `Slot is empty: pure gain`,
      });
    else {
      let n = m7(Za([e]), Za(t));
      f = (0, Q.jsxs)(Q.Fragment, {
        children: [
          (0, Q.jsxs)(`div`, {
            className: `tt-cap`,
            children: [`Instead of `, t.map(o7).join(` + `)],
          }),
          n.length
            ? n.map((e) => (0, Q.jsx)(h7, { x: e }, e.k))
            : (0, Q.jsx)(`div`, { children: `No change` }),
        ],
      });
    }
  }
  return (0, Q.jsxs)(`div`, {
    className: `tt`,
    style: { "--c": s },
    children: [
      (0, Q.jsxs)(`div`, {
        className: `tt-head`,
        children: [
          (0, Q.jsx)(`img`, {
            className: `pixel tt-icon`,
            alt: ``,
            src: r7(FY(e)),
          }),
          (0, Q.jsxs)(`div`, {
            children: [
              (0, Q.jsxs)(`div`, {
                className: `tt-name`,
                children: [
                  Xa(e),
                  e.enchant > 0 &&
                    (0, Q.jsxs)(`span`, {
                      className: `gold`,
                      children: [` +`, e.enchant],
                    }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `tt-type`,
                children: [
                  e.hollowed &&
                    (0, Q.jsx)(`span`, {
                      className: `hol`,
                      children: `Hollowed `,
                    }),
                  (0, Q.jsx)(g7, { it: e }),
                  ` `,
                  s7[e.base],
                ],
              }),
            ],
          }),
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `tt-row`,
        children: [
          (0, Q.jsx)(`span`, {
            children: l ? Wa(e) : `${ha[ma(e.ilvl)]} tier`,
          }),
          (0, Q.jsxs)(`span`, { children: [`Item level `, e.ilvl] }),
        ],
      }),
      _7(e.base) && (0, Q.jsx)(Rle, { weapon: _7(e.base), school: n }),
      Ra(e) &&
        (0, Q.jsxs)(`div`, {
          className: `tt-row durability${Ba(e) ? ` broken` : ``}`,
          "data-durability": !0,
          children: [
            (0, Q.jsx)(`span`, {
              children: Ba(e)
                ? `Broken: gives nothing until mended`
                : `Durability`,
            }),
            (0, Q.jsxs)(`span`, {
              children: [Math.max(0, za(e) - (e.wear ?? 0)), ` / `, za(e)],
            }),
          ],
        }),
      p
        ? (0, Q.jsxs)(`div`, {
            className: `tt-sec book`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `imp`,
                children: [
                  p.name,
                  ` · `,
                  S[xe[p.id]].name,
                  ` `,
                  ie(p.id) ? `art` : `spell`,
                ],
              }),
              (0, Q.jsx)(`div`, { className: `muted`, children: p.desc }),
              (0, Q.jsxs)(`div`, {
                className: `muted`,
                children: [
                  p.mana,
                  ` mana · `,
                  p.cd,
                  `s cooldown`,
                  p.range ? ` · ${p.range} tiles` : ``,
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `muted`,
                children: [
                  `Draws on `,
                  rd[p.id].scale
                    .map(([e, t]) => `${Au[e].name} ${Math.round(t * 100)}%`)
                    .join(` · `),
                ],
              }),
              o?.includes(p.id)
                ? (0, Q.jsxs)(`div`, {
                    className: `gold`,
                    children: [
                      `You already know this `,
                      ie(p.id) ? `art` : `spell`,
                      `. Trade it, or salvage it.`,
                    ],
                  })
                : ie(p.id) && xe[p.id] !== n
                  ? (0, Q.jsxs)(`div`, {
                      className: `bad`,
                      children: [
                        `Only a `,
                        S[xe[p.id]].name,
                        ` can learn this art. Trade it, or salvage it.`,
                      ],
                    })
                  : (0, Q.jsxs)(`div`, {
                      className: `up`,
                      children: [`Read it to learn `, p.name, `.`],
                    }),
            ],
          })
        : (0, Q.jsxs)(`div`, {
            className: `tt-row`,
            children: [
              (0, Q.jsxs)(`span`, {
                className: c > t ? `bad` : `muted`,
                children: [`Requires level `, c],
              }),
              !Ua(e) &&
                (0, Q.jsx)(`span`, {
                  className: `gold`,
                  children: `Quest item · can't be traded`,
                }),
            ],
          }),
      (0, Q.jsx)(`div`, {
        className: `tt-sec`,
        children: qa(e).map((e) =>
          (0, Q.jsx)(
            `div`,
            { className: `imp`, children: Ja(e.stat, e.value) },
            e.stat,
          ),
        ),
      }),
      e.affixes.length > 0 &&
        (0, Q.jsx)(`div`, {
          className: `tt-sec`,
          children: e.affixes.map((t, r) => {
            let i = t.spell ? Fle(t.spell) : null,
              a = i && !ae(t.spell) && (o ? !o.includes(t.spell) : i !== n);
            return (0, Q.jsxs)(
              `div`,
              {
                className:
                  t.stat === `leech` && e.hollowed
                    ? `hol`
                    : a
                      ? `aff offs`
                      : `aff`,
                children: [
                  Ja(t.stat, Ka(e, t), t.spell),
                  a &&
                    (0, Q.jsxs)(`span`, {
                      className: `off`,
                      children: [
                        ` `,
                        ie(t.spell)
                          ? `${S[i].name}'s art`
                          : o
                            ? `spell you don't know`
                            : `${S[i].name} spell`,
                      ],
                    }),
                ],
              },
              r,
            );
          }),
        }),
      l &&
        (0, Q.jsxs)(`div`, {
          className: `tt-sec power`,
          children: [
            (0, Q.jsx)(`span`, { className: `dia`, children: `◆` }),
            ` `,
            l.power,
          ],
        }),
      e.unique === `unfilledStaff` &&
        (0, Q.jsxs)(`div`, {
          className: `sockets`,
          children: [
            [`pyro`, `cryo`, `storm`, `void`].map((t, n) => {
              let r = e.sockets?.[n];
              return (0, Q.jsx)(
                `span`,
                {
                  className: `sock ${r ? `set` : ``}`,
                  style: { "--g": r ? S[r].colors.orb : `transparent` },
                  title: r ? S[r].name : `Empty`,
                },
                n,
              );
            }),
            (0, Q.jsxs)(`span`, {
              className: `muted`,
              children: [
                e.sockets?.length ?? 0,
                ` of 4 set · fell a Key to set its gem`,
              ],
            }),
          ],
        }),
      e.hollowed &&
        (0, Q.jsxs)(`div`, {
          className: `tt-sec hol`,
          children: [
            va.hunger,
            (0, Q.jsx)(`div`, {
              className: `muted`,
              children: `Cleanse it at the Aether Crystal to lift it.`,
            }),
          ],
        }),
      e.enchant > 0 &&
        (0, Q.jsxs)(`div`, {
          className: `tt-row gold`,
          children: [
            (0, Q.jsxs)(`span`, {
              children: [`Kindled +`, e.enchant, d ? ` · ${d.name}` : ``],
            }),
            (0, Q.jsxs)(`span`, {
              children: [`+`, Math.round(to[e.enchant] * 100), `% all stats`],
            }),
          ],
        }),
      (e.rarity === `remembered` || e.rarity === `skyfallen`) &&
        (0, Q.jsxs)(`div`, {
          className: `tt-mem`,
          children: [
            (0, Q.jsxs)(`div`, {
              className: `tt-row`,
              children: [
                (0, Q.jsx)(`span`, { children: `Remembrance` }),
                (0, Q.jsxs)(`span`, {
                  children: [
                    e.memory,
                    ` / `,
                    mo(e.ilvl),
                    ` kills → iLvl `,
                    e.ilvl + 1,
                  ],
                }),
              ],
            }),
            (0, Q.jsx)(`div`, {
              className: `mbar`,
              children: (0, Q.jsx)(`i`, {
                style: {
                  width: `${Math.min(100, (e.memory / mo(e.ilvl)) * 100)}%`,
                },
              }),
            }),
          ],
        }),
      l &&
        (0, Q.jsxs)(`div`, {
          className: `flavor`,
          children: [`"`, l.flavor.replace(/^"|"$/g, ``), `"`],
        }),
      Ua(e) &&
        (0, Q.jsxs)(`div`, {
          className: `tt-foot`,
          children: [
            `Salvages into`,
            ` `,
            Object.keys(u)
              .filter((e) => u[e])
              .map((e) => `${u[e]} ${so[e].name}`)
              .join(`, `),
          ],
        }),
      f && (0, Q.jsx)(`div`, { className: `tt-sec cmp`, children: f }),
      a && (0, Q.jsx)(`div`, { className: `tt-actions`, children: a }),
    ],
  });
}
function y7() {
  let [e, t] = (0, v.useState)(null);
  return {
    tip: e,
    onHover: (e, n, r) => {
      if (!e || !n) return t(null);
      let i = n.getBoundingClientRect();
      t({ item: e, x: i.right, y: i.top, compare: !!r });
    },
    clear: () => t(null),
  };
}
