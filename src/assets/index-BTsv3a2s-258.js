// index-BTsv3a2s 258 — children
// Lines 164392-165037 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Wle({
  inv: e,
  hud: t,
  school: n,
  initial: r,
  initialMode: i = `kindle`,
  actions: a,
  onClose: o,
}) {
  let { bag: s, worn: c, wornItems: l } = (0, v.useMemo)(() => x7(e), [e]),
    u = (0, v.useMemo)(() => [...Object.values(c), ...s], [c, s]),
    [d, f] = (0, v.useState)(r),
    [p, m] = (0, v.useState)(i),
    [h, g] = (0, v.useState)(!1),
    [_, y] = (0, v.useState)(null),
    [b, x] = (0, v.useState)(!1),
    [S, C] = (0, v.useState)(0),
    w =
      u.find((e) => e.doc._id === d) ??
      (p === `salvage` ? s[0] : (u.find((e) => !uo(e.item)) ?? u[0])) ??
      null,
    T = w?.item ?? null,
    E = t.atCrystal;
  ((0, v.useEffect)(() => {
    T?.hollowed && p === `kindle` && m(`cleanse`);
  }, [w?.doc._id]),
    l5(o));
  let D = t.passives.join(`,`),
    O = t.spells.join(`,`),
    k = t.loadout.join(`,`),
    ee = (0, v.useMemo)(
      () => M5(t.level, n, t.passives, t.spells, t.loadout),
      [t.level, n, D, O, k],
    ),
    te = (0, v.useMemo)(
      () =>
        jle(
          s.map((e) => e.item),
          l,
          ee,
        ),
      [s, l, ee],
    ),
    [ne, re] = (0, v.useState)(null),
    ie = (e) => te[e].items.map((e) => e.id).join(`,`),
    ae = (e) => ne?.rarity === e && ne.ids === ie(e);
  ((0, v.useEffect)(() => {
    if (!ne) return;
    let e = ne.ready
      ? setTimeout(() => re(null), 3550)
      : setTimeout(() => re({ ...ne, ready: !0 }), Ule);
    return () => clearTimeout(e);
  }, [ne]),
    (0, v.useEffect)(() => {
      ne && !ae(ne.rarity) && re(null);
    }, [te]));
  let oe = async (e) => {
      let t = te[e].items.map((e) => e.id);
      if (b || !t.length) return;
      if (!ae(e)) return re({ rarity: e, ids: ie(e), ready: !1 });
      if (!ne?.ready) return;
      (re(null), x(!0));
      let n = await a.salvageMany(t);
      (x(!1), n && f(null));
    },
    se = (0, v.useRef)(null);
  (0, v.useEffect)(() => {
    i === `salvage` && se.current?.scrollIntoView({ block: `nearest` });
  }, []);
  let ce = e.mats,
    le = (e) => Object.keys(e).every((t) => ce[t] >= (e[t] ?? 0)),
    ue = (e) =>
      (0, Q.jsx)(`div`, {
        className: `costs`,
        children: [`crowns`, `dust`, `shards`, `motes`, `chips`]
          .filter((t) => e[t])
          .map((t) =>
            (0, Q.jsxs)(
              `div`,
              {
                className: `cost ${ce[t] >= (e[t] ?? 0) ? `` : `short`}`,
                children: [
                  (0, Q.jsx)(`img`, {
                    className: `pixel`,
                    alt: ``,
                    src: r7(OY(t)),
                  }),
                  (0, Q.jsx)(`b`, { children: i7(e[t] ?? 0) }),
                  (0, Q.jsxs)(`span`, { children: [i7(ce[t]), ` held`] }),
                ],
              },
              t,
            ),
          ),
      }),
    de = (0, Q.jsx)(`div`, {
      className: `notice`,
      children: `Your satchel is empty.`,
    });
  if (w && T) {
    let e = a7(T),
      t = _a[T.rarity].maxEnchant,
      n = (0, Q.jsxs)(`div`, {
        className: `khead`,
        children: [
          (0, Q.jsxs)(
            `div`,
            {
              className: `bigslot ${_ ? `fx-${_.kind}` : ``}`,
              style: { "--r": e },
              children: [
                (0, Q.jsx)(`img`, {
                  className: `pixel`,
                  alt: ``,
                  src: r7(FY(T)),
                }),
                T.enchant >= 4 &&
                  (0, Q.jsx)(f7, { level: T.enchant, color: e, size: 104 }),
              ],
            },
            S,
          ),
          (0, Q.jsxs)(`div`, {
            children: [
              (0, Q.jsx)(`div`, {
                className: `kn`,
                style: { color: e },
                children: o7(T),
              }),
              (0, Q.jsxs)(`div`, {
                className: `muted`,
                children: [
                  (0, Q.jsx)(g7, { it: T }),
                  ` `,
                  s7[T.base],
                  ` · iLvl `,
                  T.ilvl,
                ],
              }),
              (0, Q.jsx)(`div`, {
                className: `ladder`,
                "aria-label": `Kindle level ${T.enchant} of ${t}`,
                children: Array.from({ length: 10 }, (e, n) => {
                  let r = n + 1,
                    i =
                      r <= T.enchant
                        ? `lit`
                        : r > t
                          ? `cap`
                          : r > 5
                            ? `risk`
                            : ``;
                  return (0, Q.jsx)(`i`, { className: i, title: `+${r}` }, r);
                }),
              }),
            ],
          }),
        ],
      });
    if (p === `kindle`) {
      let e = uo(T);
      if (e)
        de = (0, Q.jsxs)(Q.Fragment, {
          children: [
            n,
            (0, Q.jsx)(`div`, { className: `notice`, children: e }),
            _ &&
              (0, Q.jsx)(`div`, {
                className: `outcome ${_.kind}`,
                children: _.text,
              }),
          ],
        });
      else {
        let e = T.enchant + 1,
          t = lo(T),
          r = no[e],
          i = e >= 8,
          o = i && h && ce.chips > 0,
          s = { ...co(T, e), chips: +!!o },
          c = ao.find((t) => t.at === e),
          l = [
            ...qa(T).map((e) => ({ k: e.stat, v: e.value, spell: void 0 })),
            ...T.affixes.map((e) => ({
              k: e.stat,
              v: Ka(T, e),
              spell: e.spell,
            })),
          ],
          u =
            e <= 5
              ? `Always succeeds.`
              : i
                ? o
                  ? `On failure: stays +${T.enchant} (the chip is spent).`
                  : `On failure: drops to +${T.enchant - 1}.`
                : `On failure: stays +${T.enchant}. Reagents are spent.`;
        de = (0, Q.jsxs)(Q.Fragment, {
          children: [
            n,
            (0, Q.jsxs)(`div`, {
              className: `kgrid`,
              children: [
                (0, Q.jsxs)(`div`, {
                  children: [
                    (0, Q.jsxs)(`div`, {
                      className: `klabel`,
                      children: [
                        `+`,
                        T.enchant,
                        ` → +`,
                        e,
                        c &&
                          (0, Q.jsxs)(Q.Fragment, {
                            children: [
                              ` `,
                              `· becomes `,
                              (0, Q.jsx)(`span`, {
                                className: `gold`,
                                children: c.name,
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `preview`,
                      children: l.map((t, n) =>
                        (0, Q.jsxs)(
                          `div`,
                          {
                            className: `pv`,
                            children: [
                              (0, Q.jsx)(`span`, {
                                children: Ja(t.k, t.v, t.spell),
                              }),
                              (0, Q.jsx)(`span`, {
                                className: `arrow`,
                                children: `→`,
                              }),
                              (0, Q.jsx)(`span`, {
                                className: `gold`,
                                children: c7(
                                  t.k,
                                  (t.v / (1 + to[T.enchant])) * (1 + to[e]),
                                ),
                              }),
                            ],
                          },
                          n,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  children: [
                    (0, Q.jsx)(`div`, {
                      className: `klabel`,
                      children: `Chance`,
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `chance`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `cbar`,
                          children: [
                            (0, Q.jsx)(`i`, {
                              className: `base`,
                              style: { width: `${r * 100}%` },
                            }),
                            (0, Q.jsx)(`i`, {
                              className: `pity`,
                              style: {
                                left: `${r * 100}%`,
                                width: `${(t - r) * 100}%`,
                              },
                            }),
                          ],
                        }),
                        (0, Q.jsxs)(`b`, {
                          children: [Math.round(t * 100), `%`],
                        }),
                      ],
                    }),
                    T.failStacks
                      ? (0, Q.jsxs)(`div`, {
                          className: `gold small`,
                          children: [
                            `The crystal remembers `,
                            T.failStacks,
                            ` failed `,
                            T.failStacks > 1 ? `attempts` : `attempt`,
                            `: +`,
                            Math.round(Math.min(io, T.failStacks * ro) * 100),
                            `%`,
                          ],
                        })
                      : (0, Q.jsxs)(`div`, {
                          className: `muted small`,
                          children: [
                            `Each failure adds `,
                            ro * 100,
                            `% to this item's next try, up to `,
                            io * 100,
                            `%.`,
                          ],
                        }),
                    (0, Q.jsx)(`div`, {
                      className: `${i && !o ? `bad` : `muted`} small`,
                      children: u,
                    }),
                    i &&
                      (0, Q.jsxs)(`label`, {
                        className: `ward`,
                        children: [
                          (0, Q.jsx)(`input`, {
                            type: `checkbox`,
                            checked: h,
                            disabled: !ce.chips,
                            onChange: (e) => g(e.target.checked),
                          }),
                          ` Use a Ward-stone Chip (`,
                          ce.chips,
                          ` held)`,
                        ],
                      }),
                  ],
                }),
              ],
            }),
            ue(s),
            (0, Q.jsxs)(`div`, {
              className: `kact`,
              children: [
                (0, Q.jsx)(`button`, {
                  className: `pxb primary big`,
                  disabled: !E || b || !le(s),
                  onClick: async () => {
                    x(!0);
                    let e = await a.kindle(w.doc._id, o);
                    (x(!1),
                      e &&
                        (C((e) => e + 1),
                        e.ok
                          ? (y({
                              kind: `ok`,
                              text: `The crystal answers. +${e.enchant}`,
                            }),
                            q.sfx(`levelup`, 0.6))
                          : e.dropped
                            ? (y({
                                kind: `drop`,
                                text: `The light gutters and falls back. +${e.enchant}`,
                              }),
                              q.sfx(`death`, 0.4))
                            : (y({
                                kind: `fail`,
                                text: `The light gutters. Still +${e.enchant}. The crystal will remember.`,
                              }),
                              q.sfx(`death`, 0.3))));
                  },
                  children: `Kindle`,
                }),
                _
                  ? (0, Q.jsx)(`div`, {
                      className: `outcome ${_.kind}`,
                      children: _.text,
                    })
                  : (0, Q.jsx)(`div`, {
                      className: `muted small`,
                      children: `Hold the item to the crystal and let it take the light.`,
                    }),
              ],
            }),
          ],
        });
      }
    } else if (p === `cleanse`) {
      if (!T.hollowed)
        de = (0, Q.jsxs)(Q.Fragment, {
          children: [
            n,
            (0, Q.jsx)(`div`, {
              className: `notice`,
              children: `Only Hollowed items need Cleansing.`,
            }),
            _?.kind === `cleansed` &&
              (0, Q.jsx)(`div`, { className: `outcome ok`, children: _.text }),
          ],
        });
      else {
        let e = fo(T);
        de = (0, Q.jsxs)(Q.Fragment, {
          children: [
            n,
            (0, Q.jsx)(`div`, { className: `notice hol`, children: va.hunger }),
            (0, Q.jsx)(`p`, {
              className: `kp`,
              children: `Cleansing burns the Hollow out of it in the crystal's light. The item keeps its rarity, level and affixes, loses the Hollowed bonus (+25%) and the Hunger, and can be Kindled again. The echo trapped inside goes free.`,
            }),
            ue(e),
            (0, Q.jsx)(`div`, {
              className: `kact`,
              children: (0, Q.jsx)(`button`, {
                className: `pxb primary big`,
                disabled: !E || b || !le(e),
                onClick: async () => {
                  x(!0);
                  let e = await a.cleanse(w.doc._id);
                  (x(!1),
                    e &&
                      (y({
                        kind: `cleansed`,
                        text: `The Hollow burns out. Something small and bright goes up into the crystal.`,
                      }),
                      q.sfx(`levelup`, 0.6)));
                },
                children: `Cleanse`,
              }),
            }),
          ],
        });
      }
    } else {
      let e = po(T);
      de = Ua(T)
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              n,
              (0, Q.jsx)(`p`, {
                className: `kp`,
                children: `Salvaging breaks the item into reagents. Items you've Kindled return one extra Aether Shard for every two levels.`,
              }),
              (0, Q.jsx)(`div`, {
                className: `costs`,
                children: Object.keys(e)
                  .filter((t) => e[t])
                  .map((t) =>
                    (0, Q.jsxs)(
                      `div`,
                      {
                        className: `cost gain`,
                        children: [
                          (0, Q.jsx)(`img`, {
                            className: `pixel`,
                            alt: ``,
                            src: r7(OY(t)),
                          }),
                          (0, Q.jsxs)(`b`, { children: [`+`, e[t]] }),
                          (0, Q.jsx)(`span`, { children: so[t].name }),
                        ],
                      },
                      t,
                    ),
                  ),
              }),
              (0, Q.jsxs)(`div`, {
                className: `kact`,
                children: [
                  (0, Q.jsx)(`button`, {
                    className: `pxb danger big`,
                    disabled: b,
                    onClick: async () => {
                      (x(!0), await a.salvage(w.doc._id), x(!1), f(null));
                    },
                    children: `Salvage`,
                  }),
                  (0, Q.jsx)(`span`, {
                    className: `muted small`,
                    children: `This can't be undone.`,
                  }),
                ],
              }),
            ],
          })
        : (0, Q.jsxs)(Q.Fragment, {
            children: [
              n,
              (0, Q.jsx)(`div`, {
                className: `notice`,
                children: `Quest items can't be salvaged or traded.`,
              }),
            ],
          });
    }
  }
  let fe = (0, Q.jsxs)(`div`, {
    className: `bulk`,
    "aria-label": `Salvage several`,
    ref: se,
    children: [
      (0, Q.jsx)(`div`, {
        className: `klabel`,
        children: `Salvage several · from your satchel`,
      }),
      Z5.map((e) => {
        let t = te[e],
          n = t.items.length,
          r = ae(e),
          i = Nle(t);
        return (0, Q.jsxs)(
          `div`,
          {
            className: `bulkrow`,
            children: [
              (0, Q.jsx)(`button`, {
                className: `pxb danger ${r ? (ne?.ready ? `armed` : `armed wait`) : ``}`,
                "data-bulk": e,
                "data-armed": r ? (ne?.ready ? `ready` : `wait`) : void 0,
                disabled: b || !n,
                onClick: () => void oe(e),
                children: r
                  ? `Salvage ${n}? Press again`
                  : `Salvage all ${_a[e].name} · ${n}`,
              }),
              (0, Q.jsxs)(`span`, {
                className: `muted small`,
                children: [
                  n
                    ? `${n} for ${Q5(t.gain)}`
                    : `No ${_a[e].name} items to salvage`,
                  i &&
                    (0, Q.jsxs)(`span`, {
                      className: `kept`,
                      children: [` · `, i],
                    }),
                ],
              }),
            ],
          },
          e,
        );
      }),
    ],
  });
  return (0, Q.jsx)(`div`, {
    className: `items-ui items-overlay`,
    onMouseDown: (e) => e.target === e.currentTarget && o(),
    children: (0, Q.jsxs)(`section`, {
      className: `panel win kindling`,
      children: [
        (0, Q.jsxs)(`header`, {
          className: `win-head`,
          children: [
            (0, Q.jsx)(`h2`, { children: `Kindling` }),
            (0, Q.jsx)(`span`, {
              className: `muted`,
              children: `The Aether Crystal · Marizon`,
            }),
            (0, Q.jsx)(`button`, {
              className: `xbtn`,
              "aria-label": `Close`,
              onClick: o,
              children: `✕`,
            }),
          ],
        }),
        !E &&
          (0, Q.jsxs)(`div`, {
            className: `notice warn`,
            children: [
              `Kindling and Cleansing need a living crystal. Walk to the Aether Crystal in the Sanctum and press `,
              Bi(oG(`interact`)),
              `. Salvage works anywhere.`,
            ],
          }),
        (0, Q.jsx)(`div`, {
          className: `kmodes`,
          role: `tablist`,
          children: [
            [`kindle`, `Kindle`],
            [`cleanse`, `Cleanse`],
            [`salvage`, `Salvage`],
          ].map(([e, t]) =>
            (0, Q.jsx)(
              `button`,
              {
                role: `tab`,
                "aria-selected": p === e,
                "data-pad-first": e === i || void 0,
                className: `chip ${p === e ? `on` : ``}`,
                onClick: () => {
                  (m(e), y(null));
                },
                children: t,
              },
              e,
            ),
          ),
        }),
        (0, Q.jsxs)(`div`, {
          className: `kwrap`,
          children: [
            (0, Q.jsx)(`div`, {
              className: `klist`,
              "aria-label": `Your items`,
              children: u.map(({ doc: e, item: t }) =>
                (0, Q.jsxs)(
                  `button`,
                  {
                    className: `krow ${w?.doc._id === e._id ? `on` : ``}`,
                    style: { "--r": a7(t) },
                    onClick: () => {
                      (f(e._id),
                        y(null),
                        m(
                          t.hollowed
                            ? `cleanse`
                            : p === `cleanse`
                              ? `kindle`
                              : p,
                        ));
                    },
                    children: [
                      (0, Q.jsx)(`img`, {
                        className: `pixel`,
                        alt: ``,
                        src: r7(FY(t)),
                      }),
                      (0, Q.jsx)(`span`, {
                        className: `kname`,
                        children: o7(t),
                      }),
                      e.where === `equipped` &&
                        (0, Q.jsx)(`span`, {
                          className: `worn`,
                          children: `Worn`,
                        }),
                    ],
                  },
                  e._id,
                ),
              ),
            }),
            (0, Q.jsxs)(`div`, {
              className: `kbody`,
              children: [de, p === `salvage` && fe],
            }),
          ],
        }),
        (0, Q.jsx)(S7, { mats: e.mats }),
      ],
    }),
  });
}
