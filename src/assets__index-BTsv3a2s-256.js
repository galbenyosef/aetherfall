// assets__index-BTsv3a2s 256 — children
// Lines 163572-164154 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Ble({
  inv: e,
  hud: t,
  school: n,
  name: r,
  actions: i,
  bestBusy: a,
  run: o,
  setRun: s,
  onClose: c,
  hero: l,
}) {
  let u = (0, v.useRef)(null);
  (0, v.useEffect)(() => {
    let e = document.activeElement;
    return (
      u.current?.querySelector(`[aria-label="Close equipment"]`)?.focus(),
      () => {
        e instanceof HTMLElement && e.isConnected && e.focus();
      }
    );
  }, []);
  let { bag: d, worn: f, wornItems: p } = (0, v.useMemo)(() => x7(e), [e]),
    { tip: m, onHover: h, clear: g } = y7(),
    [_, y] = (0, v.useState)(null),
    [b, x] = (0, v.useState)(`all`),
    [C, w] = (0, v.useState)(null),
    [T, E] = (0, v.useState)(null);
  (0, v.useEffect)(() => {
    if (!T) return;
    let e = window.setTimeout(() => E(null), 3500);
    return () => window.clearTimeout(e);
  }, [T]);
  let D = t.level,
    O = S[n],
    k = _
      ? ([...d, ...Object.values(f)].find((e) => e.doc._id === _) ?? null)
      : null,
    ee = (0, v.useRef)(null);
  (0, v.useEffect)(() => {
    _ &&
      ee.current?.scrollIntoView({
        block: `nearest`,
        behavior: matchMedia(`(prefers-reduced-motion: reduce)`).matches
          ? `auto`
          : `smooth`,
      });
  }, [_]);
  let te = (0, v.useRef)({ pinned: _, onClose: c });
  ((te.current = { pinned: _, onClose: c }),
    (0, v.useLayoutEffect)(() => {
      let e = (e) => {
        e.key === `Escape` &&
          (te.current.pinned ? y(null) : te.current.onClose());
      };
      return (
        window.addEventListener(`keydown`, e),
        () => window.removeEventListener(`keydown`, e)
      );
    }, []));
  let ne = Za(Object.values(p)),
    re = (e) => `${((ne[e] ?? 0) * 100).toFixed(1)}%`,
    ie = Object.values(p),
    ae = ie.length
      ? Math.round(ie.reduce((e, t) => e + t.ilvl, 0) / ie.length)
      : 0,
    oe = p.mainhand && Da[p.mainhand.base].type === `staff`,
    se = t.passives.join(`,`),
    ce = t.spells.join(`,`),
    le = t.loadout.join(`,`),
    ue = (0, v.useMemo)(
      () => M5(D, n, t.passives, t.spells, t.loadout),
      [D, n, se, ce, le],
    ),
    de = (0, v.useMemo)(
      () =>
        Y5(
          d.map((e) => e.item),
          p,
          e.bagMax,
          ue,
        ),
      [d, p, e.bagMax, ue],
    ),
    fe = (0, v.useMemo)(
      () => new Set(d.filter((e) => ble(e.item, p, ue)).map((e) => e.doc._id)),
      [d, p, ue],
    );
  (0, v.useEffect)(() => {
    o?.finished && !o.seen && s((e) => (e?.finished ? { ...e, seen: !0 } : e));
  }, [o?.finished, o?.seen, s]);
  let pe = async () => {
      if (a) return;
      (g(), y(null));
      let t = {
        before: p,
        bag: d.map((e) => e.item),
        bagMax: e.bagMax,
        level: D,
        plan: de,
        done: 0,
        error: null,
      };
      if (!de.steps.length) return s({ ...t, finished: !0 });
      s({ ...t, finished: !1 });
      let n = await i.equipBest(de.steps, (e) =>
        s((t) => t && { ...t, done: e }),
      );
      s((e) => e && { ...e, done: n.done, error: n.error, finished: !0 });
    },
    me = (e, t) =>
      b === `all` ||
      (b === `named` && !!e.unique) ||
      (b === `hollowed` && e.hollowed) ||
      (b === `upgrades` && fe.has(t)),
    he = (e) => Ea[Ha(e)] ?? [],
    ge = (e) =>
      C ? !C.worn && he(C.item).includes(e) && pa(C.item.ilvl) <= D : void 0,
    _e = (e, t, n) => {
      a ||
        p5(e, {
          kind: `item`,
          icon: r7(FY(t.item)),
          size: 52,
          onStart: () => {
            (g(), E(null), w({ item: t.item, worn: n }));
          },
          onEnd: () => w(null),
          onDrop: (e) => {
            if (!e) return;
            let r = t.item;
            if (n) {
              e === `bag` &&
                (q.sfx(`click`, 0.5),
                i
                  .unequip(n)
                  .then(() => y((e) => (e === t.doc._id ? null : e))));
              return;
            }
            if (e !== `doll` && !e.startsWith(`worn:`)) return;
            let a = he(r);
            if (r.base === `spellbook`)
              return E(`A spellbook is read, not worn: pin it and Read it.`);
            if (!a.length) return E(`${o7(r)} can't be worn.`);
            let o = pa(r.ilvl);
            if (o > D) return E(`${o7(r)} needs level ${o}.`);
            let s = e === `doll` ? void 0 : e.slice(5);
            if (s && !a.includes(s))
              return E(
                `${o7(r)} goes in the ${a.map((e) => Ta[e]).join(` or `)} slot, not the ${Ta[s]}.`,
              );
            (q.sfx(`click`, 0.5),
              i
                .equip(t.doc._id, s)
                .then(() => y((e) => (e === t.doc._id ? null : e))));
          },
        });
    },
    ve = (e) => {
      let t = f[e],
        n = e === `offhand` && oe && !t;
      return (0, Q.jsxs)(
        `div`,
        {
          className: `eqcell`,
          children: [
            (0, Q.jsx)(`span`, {
              className: `eqlab`,
              children: n ? `Two-handed` : Ta[e],
            }),
            (0, Q.jsx)(p7, {
              item: t?.item ?? null,
              level: D,
              glyph: Ple[e],
              locked: n,
              selected: !!t && _ === t.doc._id,
              drop: `worn:${e}`,
              fit: ge(e),
              onDragStart: t ? (n) => _e(n, t, e) : void 0,
              onHover: h,
              onClick: () => {
                t && (q.sfx(`click`, 0.5), g(), y(t.doc._id));
              },
            }),
          ],
        },
        e,
      );
    },
    ye = [];
  for (let t = 0; t < Math.max(e.bagMax, d.length); t++) {
    let n = d[t];
    ye.push(
      (0, Q.jsx)(
        p7,
        {
          item: n?.item ?? null,
          level: D,
          dim: !!n && !me(n.item, n.doc._id),
          selected: !!n && _ === n.doc._id,
          over: t >= e.bagMax,
          compare: !0,
          drop: `bag`,
          onDragStart: n ? (e) => _e(e, n, null) : void 0,
          onHover: h,
          onClick: () => {
            n && (q.sfx(`click`, 0.5), g(), y(n.doc._id));
          },
        },
        n?.doc._id ?? `empty${t}`,
      ),
    );
  }
  let be = [
      [
        `Spell damage`,
        `×${(Ve(D) * (1 + (ne.power ?? 0))).toFixed(2)}`,
        `level ×${Ve(D).toFixed(2)} · gear +${re(`power`)}`,
      ],
      [`Health`, i7(t.maxHp), `+${Math.round(ne.vitality ?? 0)} gear`],
      [`Mana`, i7(t.maxMana), `+${Math.round(ne.wisdom ?? 0)} gear`],
      [`Precision`, re(`crit`), `crit chance`],
      [`Haste`, re(`haste`), `cooldowns`],
      [`Ward`, re(`ward`), `less damage`],
      [`Hollowguard`, re(`hollowguard`), `vs Hollow`],
      [`Swiftness`, re(`swiftness`), `move speed`],
      [`Siphon`, re(`leech`), `of damage`],
    ],
    xe = [
      [`all`, `All`],
      [`upgrades`, `Upgrades`],
      [`named`, `Named`],
      [`hollowed`, `Hollowed`],
    ],
    Se = k && k.doc.where === `equipped`;
  return (0, Q.jsxs)(`div`, {
    className: `items-ui items-overlay reliquary-overlay`,
    role: `dialog`,
    "aria-modal": `true`,
    "aria-labelledby": `reliquary-title`,
    ref: u,
    onKeyDown: (e) => {
      if (e.key !== `Tab`) return;
      let t = [
          ...e.currentTarget.querySelectorAll(`button:not(:disabled)`),
        ].filter((e) => e.getClientRects().length),
        n = t[0],
        r = t[t.length - 1];
      e.shiftKey && document.activeElement === n
        ? (e.preventDefault(), r?.focus())
        : !e.shiftKey &&
          document.activeElement === r &&
          (e.preventDefault(), n?.focus());
    },
    onMouseDown: (e) => e.target === e.currentTarget && c(),
    children: [
      (0, Q.jsxs)(`div`, {
        className: `reliquary-shell`,
        children: [
          (0, Q.jsxs)(`header`, {
            className: `reliquary-head`,
            children: [
              (0, Q.jsxs)(`div`, {
                children: [
                  (0, Q.jsx)(`small`, { children: `The things we carry` }),
                  (0, Q.jsx)(`h1`, {
                    id: `reliquary-title`,
                    children: `The Wanderer’s Reliquary`,
                  }),
                ],
              }),
              (0, Q.jsxs)(`button`, {
                onClick: c,
                "aria-label": `Close equipment`,
                children: [
                  `Close `,
                  (0, Q.jsx)(`kbd`, { "aria-hidden": `true`, children: `Esc` }),
                ],
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `items-row`,
            children: [
              (0, Q.jsxs)(`section`, {
                className: `panel win equip`,
                style: { "--accent": O.colors.glow },
                children: [
                  (0, Q.jsxs)(`header`, {
                    className: `win-head`,
                    children: [
                      (0, Q.jsx)(`h2`, { children: r }),
                      (0, Q.jsxs)(`span`, {
                        className: `muted`,
                        children: [O.name, ` · Level `, D, ` `, Ie(D)],
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `doll`,
                    children: [
                      (0, Q.jsx)(`div`, {
                        className: `eqcol`,
                        children: [
                          `hat`,
                          `amulet`,
                          `robe`,
                          `gloves`,
                          `boots`,
                        ].map(ve),
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `dollmid ${C && !C.worn && he(C.item).length ? `fits` : ``}`,
                        "data-drop": `doll`,
                        title: `Drop an item on your hero to wear it`,
                        children: [
                          (0, Q.jsx)(zle, { school: n, hero: l, worn: p }),
                          (0, Q.jsx)(`div`, { className: `plinth` }),
                        ],
                      }),
                      (0, Q.jsx)(`div`, {
                        className: `eqcol`,
                        children: [
                          `mainhand`,
                          `offhand`,
                          `ring1`,
                          `ring2`,
                          `relic`,
                        ].map(ve),
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `gearlvl`,
                    children: [
                      (0, Q.jsx)(`span`, { children: `Gear level` }),
                      (0, Q.jsx)(`b`, { children: ae }),
                    ],
                  }),
                  (0, Q.jsx)(`dl`, {
                    className: `stats`,
                    children: be.map(([e, t, n], r) =>
                      (0, Q.jsxs)(
                        `div`,
                        {
                          className: r === 0 ? `wide` : ``,
                          children: [
                            (0, Q.jsx)(`dt`, { children: e }),
                            (0, Q.jsxs)(`dd`, {
                              children: [
                                t,
                                n && (0, Q.jsx)(`small`, { children: n }),
                              ],
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                  (0, Q.jsx)(`p`, {
                    className: `drop-note ${T ? `bad` : ``}`,
                    role: `status`,
                    children:
                      T ??
                      (C
                        ? C.worn
                          ? `Drop it in your satchel to take it off.`
                          : `Drop it on a lit slot, or on your hero, to wear it.`
                        : `Drag an item onto a slot to wear it, or back to the satchel to take it off.`),
                  }),
                  ne.hunger
                    ? (0, Q.jsxs)(`div`, {
                        className: `hol small`,
                        children: [
                          `Hunger ×`,
                          ne.hunger,
                          `: a Hollowed item feeds on you in combat.`,
                        ],
                      })
                    : null,
                ],
              }),
              (0, Q.jsxs)(`section`, {
                className: `panel win satchel ${C?.worn ? `takes` : ``}`,
                "data-drop": `bag`,
                children: [
                  (0, Q.jsxs)(`header`, {
                    className: `win-head`,
                    children: [
                      (0, Q.jsx)(`h2`, { children: `Travelling possessions` }),
                      (0, Q.jsxs)(`span`, {
                        className: d.length > e.bagMax ? `bad` : `muted`,
                        title:
                          d.length > e.bagMax
                            ? `More than your satchel holds: salvage or drop some`
                            : void 0,
                        children: [d.length, ` / `, e.bagMax],
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `sat-tools`,
                    "data-pad-flow": !0,
                    children: [
                      (0, Q.jsx)(`div`, {
                        className: `chips`,
                        role: `group`,
                        "aria-label": `Filter`,
                        children: xe.map(([e, t]) =>
                          (0, Q.jsx)(
                            `button`,
                            {
                              "data-pad-first": e === `all` || void 0,
                              "aria-pressed": b === e,
                              className: `chip ${b === e ? `on` : ``}`,
                              onClick: () => x(e),
                              children: t,
                            },
                            e,
                          ),
                        ),
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `sat-acts`,
                        children: [
                          (0, Q.jsx)(`button`, {
                            className: `pxb salv`,
                            onClick: i.openSalvage,
                            title: `Break down every Plain or every Kindled item in your satchel at once, in Kindling's Salvage tab. Upgrades (what Wear or Equip best would put on), Kindled-up, Hollowed and named items and unread spellbooks stay.`,
                            children: `Salvage…`,
                          }),
                          (0, Q.jsx)(`button`, {
                            className: `pxb primary best`,
                            disabled: !!a,
                            onClick: () => void pe(),
                            title: `Wear the best item you carry for each slot. Spellpower counts most, then the stats your attributes favour; spell stats count for the spells on your hotbar. Named and Hollowed items are left to you.`,
                            children: a
                              ? `Wearing… ${a.done}/${a.n}`
                              : de.changed.length
                                ? `Equip best · ${de.changed.length}`
                                : `Equip best`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `sat-body ${o?.finished ? `reporting` : ``}`,
                    children: [
                      (0, Q.jsx)(`div`, { className: `bag`, children: ye }),
                      (0, Q.jsx)(S7, { mats: e.mats }),
                      (0, Q.jsx)(Hle, { inv: e, actions: i }),
                      (0, Q.jsx)(`p`, {
                        className: `hint`,
                        children: HG(
                          `Hover for details, click to pin, drag onto a slot to wear. Equip best wears your strongest gear. Walk over your drops to pick them up. [I] or Esc closes.`,
                        ),
                      }),
                      o?.finished &&
                        (0, Q.jsx)(Vle, {
                          run: o,
                          ctx: ue,
                          onClose: () => s(null),
                          pinnable: (e) =>
                            [...d, ...Object.values(f)].some(
                              (t) => t?.doc._id === e,
                            ),
                          onPin: (e) => {
                            (q.sfx(`click`, 0.5), g(), y(e));
                          },
                        }),
                    ],
                  }),
                ],
              }),
              !k &&
                (0, Q.jsxs)(`aside`, {
                  className: `reliquary-empty`,
                  children: [
                    (0, Q.jsx)(`svg`, {
                      viewBox: `0 0 90 110`,
                      "aria-hidden": `true`,
                      children: (0, Q.jsx)(`path`, {
                        d: `M45 4 70 40 65 79 45 104 25 79 20 40Zm0 0v100M20 40l25 15 25-15M25 79l20-24 20 24M12 55H2m86 0H78M45 10 33 40 45 55 57 40Z`,
                      }),
                    }),
                    (0, Q.jsx)(`h3`, { children: `Every object has a story.` }),
                    (0, Q.jsx)(`p`, {
                      children: `Select something you carry to inspect its powers, compare it with your equipment, or choose what happens next.`,
                    }),
                    (0, Q.jsx)(`small`, {
                      children: `Worn · Carried · Remembered`,
                    }),
                  ],
                }),
              k &&
                (0, Q.jsx)(`aside`, {
                  className: `pinwrap`,
                  ref: ee,
                  children: (0, Q.jsxs)(v7, {
                    item: k.item,
                    level: D,
                    school: n,
                    worn: p,
                    compare: !Se,
                    known: t.spells,
                    children: [
                      k.item.base === `spellbook`
                        ? (0, Q.jsx)(`button`, {
                            className: `pxb primary`,
                            disabled:
                              !!a || t.spells.includes(k.item.spell ?? ``),
                            onClick: () =>
                              void i.read(k.doc._id).then(() => y(null)),
                            children: `Read`,
                          })
                        : Se
                          ? (0, Q.jsx)(`button`, {
                              className: `pxb`,
                              disabled: !!a,
                              onClick: () =>
                                void i.unequip(k.doc.slot).then(() => y(null)),
                              children: `Take off`,
                            })
                          : (0, Q.jsx)(`button`, {
                              className: `pxb primary`,
                              disabled: !!a,
                              onClick: () =>
                                void i.equip(k.doc._id).then(() => y(null)),
                              children: `Wear`,
                            }),
                      k.item.base !== `spellbook` &&
                        (0, Q.jsx)(`button`, {
                          className: `pxb`,
                          onClick: () => i.openKindling(k.doc._id),
                          children: k.item.hollowed ? `Cleanse` : `Kindle`,
                        }),
                      Ra(k.item) &&
                        (k.item.wear ?? 0) > 0 &&
                        i.mendWithKit &&
                        (0, Q.jsx)(`button`, {
                          className: `pxb`,
                          disabled: !!a || (e.kits ?? 0) <= 0,
                          title:
                            (e.kits ?? 0) > 0
                              ? `Use a repair kit (you have ${e.kits})`
                              : `No repair kit: a Smithy sells them, or mends it for Crowns`,
                          onClick: () => void i.mendWithKit(k.doc._id),
                          children: `Mend · kit`,
                        }),
                      Ua(k.item) &&
                        (0, Q.jsx)(`button`, {
                          className: `pxb danger`,
                          disabled: !!a,
                          onClick: () =>
                            void i.salvage(k.doc._id).then(() => y(null)),
                          children: `Salvage`,
                        }),
                      (0, Q.jsx)(`button`, {
                        className: `pxb`,
                        onClick: () => y(null),
                        children: `Close`,
                      }),
                    ],
                  }),
                }),
            ],
          }),
        ],
      }),
      m &&
        !k &&
        (0, Q.jsx)(b7, {
          tip: m,
          level: D,
          school: n,
          worn: p,
          known: t.spells,
        }),
    ],
  });
}
