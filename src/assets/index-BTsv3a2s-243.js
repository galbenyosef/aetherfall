// index-BTsv3a2s 243 — children
// Lines 159902-160359 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Mce({
  school: e,
  hud: t,
  onAllocate: n,
  onRefund: r,
  onReset: i,
  onLoadout: a,
  onClose: o,
  tab: s,
}) {
  let [c, l] = (0, v.useState)(s ?? (t.attrPoints > 0 ? `tree` : `spells`)),
    [u, d] = (0, v.useState)(null),
    f = (0, v.useRef)(null),
    p = (0, v.useRef)(null),
    [m, h] = (0, v.useState)(S[e].spells[0].id),
    [g, _] = (0, v.useState)(!1),
    y = (0, v.useRef)(!1),
    [b, x] = (0, v.useState)(``),
    [C, w] = (0, v.useState)(null),
    [T, E] = (0, v.useState)(null),
    [D, O] = (0, v.useState)(null),
    [k, ee] = (0, v.useState)(!1),
    te = _5();
  a5();
  let ne = S[e],
    re = Qu(e, t.passives),
    ie = T ?? t.loadout,
    ae = t.spells;
  ((0, v.useEffect)(() => {
    let e = document.activeElement;
    return (
      p.current?.querySelector(`[role="tab"][aria-selected="true"]`)?.focus(),
      () => {
        e instanceof HTMLElement && e.isConnected && e.focus();
      }
    );
  }, []),
    (0, v.useEffect)(() => {
      T && T.every((e, n) => e === t.loadout[n]) && E(null);
    }, [T, t.loadout]));
  let oe = c5({ onClose: o, remap: D, held: C, tab: c });
  ((0, v.useEffect)(() => {
    let e = (e) => {
      let { onClose: t, remap: n, held: r, tab: i } = oe.current;
      if (n !== null) {
        if ((e.preventDefault(), e.stopImmediatePropagation(), e.repeat))
          return;
        if (e.key === `Escape`) return O(null);
        let t = NG({ t: `slot`, i: n }, nG(e), { swapActions: !1 });
        if (!t.ok) {
          (d(t.error), q.sfx(`click`, 0.4));
          return;
        }
        (d(null), O(null), q.sfx(`chime`, 0.6));
        return;
      }
      let a = document.activeElement,
        o =
          a instanceof HTMLInputElement ||
          a instanceof HTMLTextAreaElement ||
          a instanceof HTMLSelectElement;
      if (i === `tree`) {
        let t = fce(e, o, { name: nG, slotOf: EG });
        if (t === `hold`) {
          e.stopImmediatePropagation();
          return;
        }
        if (t) {
          (e.preventDefault(),
            e.stopImmediatePropagation(),
            t === `fit`
              ? f.current?.fit()
              : f.current?.zoomBy(t === `in` ? 1.25 : 0.8));
          return;
        }
        if (!o && e.key === `Escape` && f.current?.escape()) {
          e.stopPropagation();
          return;
        }
      }
      e.key === `Escape` && (e.stopPropagation(), r ? w(null) : t());
    };
    return (
      window.addEventListener(`keydown`, e, !0),
      () => window.removeEventListener(`keydown`, e, !0)
    );
  }, [oe]),
    (0, v.useEffect)(() => {
      if (D !== null)
        return qX((e, t) => {
          if (e === `Y`) return;
          if (e === `B`) return O(null);
          let n = UX(D, t, e);
          if (!n.ok) {
            (d(n.error), q.sfx(`click`, 0.4));
            return;
          }
          (d(null), x(n.note ?? ``), O(null), q.sfx(`chime`, 0.6));
        });
    }, [D]));
  let se = (e, t, n) => {
      y.current ||
        k ||
        p5(e, {
          kind: `spell`,
          icon: e.currentTarget.querySelector(`svg, img`),
          size: 44,
          onStart: () => {
            (w(null), d(null));
          },
          onDrop: (e) => {
            let r = g5(e);
            if (r === void 0) return;
            let i = m5(ie, t, n, r);
            i && (q.sfx(`click`, 0.7), ue(i));
          },
        });
    },
    le = (e) => {
      (l(e), w(null), O(null), ee(!1), d(null));
    },
    ue = async (e) => {
      if (!y.current) {
        ((y.current = !0), _(!0), x(``), d(null), E(e));
        try {
          (await a(e), x(`Your prepared spells have been updated.`));
        } catch (e) {
          (E(null), d(r5(e)));
        } finally {
          ((y.current = !1), _(!1));
        }
      }
    };
  return (0, Q.jsx)(`div`, {
    className: `arcana-overlay`,
    onMouseDown: (e) => e.target === e.currentTarget && o(),
    children: (0, Q.jsxs)(`section`, {
      ref: p,
      className: `arcana-panel panel ${c}`,
      role: `dialog`,
      "aria-modal": `true`,
      "aria-labelledby": `arcana-title`,
      onKeyDown: (e) => {
        if (e.key !== `Tab`) return;
        let t = [
            ...e.currentTarget.querySelectorAll(
              `button:not(:disabled), select:not(:disabled), [tabindex="0"]`,
            ),
          ].filter((e) => e.getClientRects().length),
          n = t[0],
          r = t.at(-1);
        e.shiftKey && document.activeElement === n
          ? (e.preventDefault(), r?.focus())
          : !e.shiftKey &&
            document.activeElement === r &&
            (e.preventDefault(), n?.focus());
      },
      children: [
        (0, Q.jsx)(tce, {}),
        (0, Q.jsxs)(`header`, {
          className: `arcana-head`,
          children: [
            (0, Q.jsxs)(`div`, {
              children: [
                (0, Q.jsx)(`p`, {
                  className: `arc-eyebrow`,
                  children:
                    c === `tree`
                      ? `Every power begins with a single thread`
                      : `What is learned in ink, is remembered in fire`,
                }),
                (0, Q.jsx)(`h2`, {
                  id: `arcana-title`,
                  children:
                    c === `tree`
                      ? `The Inner Firmament`
                      : `The Arcanist’s Grimoire`,
                }),
              ],
            }),
            (0, Q.jsxs)(`div`, {
              className: `arc-character`,
              children: [
                (0, Q.jsx)(`span`, { children: ne.title }),
                (0, Q.jsxs)(`small`, {
                  children: [
                    `Level `,
                    t.level,
                    ` · `,
                    ae.length,
                    ` inscriptions learned`,
                  ],
                }),
              ],
            }),
            (0, Q.jsx)(`button`, {
              className: `arc-close`,
              onClick: o,
              "aria-label": `Close spellbook`,
              title: HG(`Close [K] / [Esc]`),
              children: `✕`,
            }),
          ],
        }),
        (0, Q.jsxs)(`div`, {
          className: `arc-tabs`,
          role: `tablist`,
          "aria-label": `Inner arts`,
          onKeyDown: (e) => {
            if (![`ArrowLeft`, `ArrowRight`, `Home`, `End`].includes(e.key))
              return;
            (e.preventDefault(), e.stopPropagation());
            let t =
              e.key === `Home`
                ? `tree`
                : e.key === `End` || c === `tree`
                  ? `spells`
                  : `tree`;
            (le(t), p.current?.querySelector(`#arc-tab-${t}`)?.focus());
          },
          children: [
            (0, Q.jsxs)(`button`, {
              id: `arc-tab-tree`,
              role: `tab`,
              "aria-controls": `arc-content-tree`,
              "aria-selected": c === `tree`,
              tabIndex: c === `tree` ? 0 : -1,
              onClick: () => le(`tree`),
              children: [
                `✧ Skills `,
                (0, Q.jsxs)(`small`, { children: [t.attrPoints, ` unspent`] }),
              ],
            }),
            (0, Q.jsxs)(`button`, {
              id: `arc-tab-spells`,
              role: `tab`,
              "aria-controls": `arc-content-spells`,
              "aria-selected": c === `spells`,
              tabIndex: c === `spells` ? 0 : -1,
              "data-pad-first": c === `spells` ? `` : void 0,
              onClick: () => le(`spells`),
              children: [
                `◇ Spellbook `,
                (0, Q.jsxs)(`small`, {
                  children: [
                    b5(e).filter((e) => ae.includes(e.id)).length,
                    ` / `,
                    b5(e).length,
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, Q.jsx)(`div`, {
          id: `arc-content-${c}`,
          role: `tabpanel`,
          "aria-labelledby": `arc-tab-${c}`,
          children:
            c === `tree`
              ? (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    (0, Q.jsx)(Sce, {
                      ref: f,
                      school: e,
                      level: t.level,
                      passives: t.passives,
                      known: ae,
                      onAllocate: n,
                      onRefund: r,
                      onReset: i,
                      onError: d,
                      error: u,
                    }),
                    (0, Q.jsx)(Nce, { school: e, values: re }),
                  ],
                })
              : (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    (0, Q.jsx)(Ice, {
                      school: e,
                      selected: m,
                      values: re,
                      known: ae,
                      arms: t.arms,
                      loadout: ie,
                      held: C?.id ?? null,
                      saving: g,
                      onBrowse: h,
                      onDrag: (e, t) => se(e, t, null),
                      onPrepare: (e) => {
                        (ee(!1), O(null), d(null));
                        let t = ie.indexOf(e);
                        (w({ id: e, from: t < 0 ? null : t }),
                          p.current
                            ?.querySelector(`.arc-loadout button`)
                            ?.focus({ preventScroll: !0 }));
                      },
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `arc-prepared`,
                      children: [
                        (0, Q.jsx)(`div`, {
                          className: `arc-prepared-heading`,
                          children: (0, Q.jsxs)(`div`, {
                            children: [
                              (0, Q.jsx)(`p`, {
                                className: `arc-eyebrow`,
                                children: `Committed to memory`,
                              }),
                              (0, Q.jsx)(`p`, {
                                children: g
                                  ? `Preparing your spells…`
                                  : C
                                    ? `Choose a slot for ${Se(C.id)?.name}. Occupied slots swap when moving a prepared spell.`
                                    : `Drag an inscription onto a slot, or select it and prepare it for the road.`,
                              }),
                            ],
                          }),
                        }),
                        (0, Q.jsx)(Lce, {
                          loadout: ie,
                          binds: te,
                          held: C,
                          keysMode: k,
                          remap: D,
                          saving: g,
                          onTap: (e) => {
                            if (!y.current) {
                              if ((d(null), k)) {
                                O(e);
                                return;
                              }
                              if (e !== QW) {
                                if (C) {
                                  let t = [...ie],
                                    n = t[e],
                                    r = t.indexOf(C.id);
                                  ((t[e] = C.id),
                                    r >= 0 && r !== e && (t[r] = n),
                                    w(null),
                                    q.sfx(`click`, 0.7),
                                    ue(t));
                                  return;
                                }
                                ie[e] && (h(ie[e]), w({ id: ie[e], from: e }));
                              }
                            }
                          },
                          onDrag: (e, t) => ie[t] && se(e, ie[t], t),
                          dash: !ce(e),
                        }),
                        (0, Q.jsx)(`div`, {
                          className: `arc-loadout-tools`,
                          children: C
                            ? (0, Q.jsxs)(Q.Fragment, {
                                children: [
                                  (0, Q.jsxs)(`span`, {
                                    children: [
                                      `Placing `,
                                      (0, Q.jsx)(`b`, {
                                        children: Se(C.id)?.name,
                                      }),
                                    ],
                                  }),
                                  C.from !== null &&
                                    (0, Q.jsx)(`button`, {
                                      disabled: g,
                                      onClick: () => {
                                        if (!C || C.from === null || y.current)
                                          return;
                                        let e = [...ie];
                                        ((e[C.from] = ``), w(null), ue(e));
                                      },
                                      children: `Take it off the bar`,
                                    }),
                                  (0, Q.jsx)(`button`, {
                                    onClick: () => w(null),
                                    children: `Cancel`,
                                  }),
                                ],
                              })
                            : k
                              ? (0, Q.jsxs)(Q.Fragment, {
                                  children: [
                                    (0, Q.jsx)(`span`, {
                                      children:
                                        D === null
                                          ? `Choose a slot, then press its new key or controller button.`
                                          : `Press a key or controller button for ${D === QW ? `Blink` : `slot ${D + 1}`}… (Esc cancels)`,
                                    }),
                                    (0, Q.jsx)(`button`, {
                                      onClick: () => {
                                        (gG(), WX(), O(null), d(null));
                                      },
                                      children: `Default keys`,
                                    }),
                                    (0, Q.jsx)(`button`, {
                                      onClick: () => {
                                        (ee(!1), O(null));
                                      },
                                      children: `Done`,
                                    }),
                                  ],
                                })
                              : (0, Q.jsxs)(Q.Fragment, {
                                  children: [
                                    (0, Q.jsx)(`span`, {
                                      children: `Drag a prepared spell to move it, or off the bar to clear it.`,
                                    }),
                                    (0, Q.jsx)(`button`, {
                                      disabled: g,
                                      onClick: () => {
                                        (ee(!0), d(null));
                                      },
                                      children: `Change keys`,
                                    }),
                                  ],
                                }),
                        }),
                        u &&
                          (0, Q.jsx)(`div`, {
                            className: `arc-error`,
                            role: `alert`,
                            children: u,
                          }),
                        (0, Q.jsx)(`p`, {
                          className: `arc-status`,
                          role: `status`,
                          children: b,
                        }),
                      ],
                    }),
                  ],
                }),
        }),
        (0, Q.jsxs)(`footer`, {
          className: `arcana-foot`,
          children: [
            (0, Q.jsx)(`span`, {
              children:
                c === `tree`
                  ? `Two passive points per level · Free refunds`
                  : `Spells are found in the world, then learned from their books.`,
            }),
            (0, Q.jsxs)(`span`, {
              children: [
                HG(`[K] / [Esc] Close`),
                ` `,
                !GG && c === `tree` && `· + / − Zoom · 0 Fit`,
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
