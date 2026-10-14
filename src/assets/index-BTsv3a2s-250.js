// index-BTsv3a2s 250 — children
// Lines 161815-162160 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function nle({
  minimap: e,
  here: t,
  indoors: n,
  attuned: r,
  marks: i,
  canTravel: a,
  onRoad: o,
  onClose: s,
}) {
  let [c, l] = (0, v.useState)(Rl.id),
    [u, d] = (0, v.useState)(1),
    [f, p] = (0, v.useState)(`all`),
    m = (0, v.useRef)(null),
    h = (0, v.useRef)(null),
    g = (0, v.useRef)(s);
  g.current = s;
  let _ = O5.find((e) => e.id === c),
    y = (e) => e === Rl.id || r.includes(e);
  ((0, v.useEffect)(() => {
    let t = m.current?.getContext(`2d`);
    t &&
      e &&
      ((t.imageSmoothingEnabled = !1),
      t.clearRect(0, 0, Or, kr),
      t.drawImage(e, 0, 0, Or, kr));
  }, [e]),
    (0, v.useEffect)(() => {
      let e = document.activeElement;
      h.current?.querySelector(`[aria-label="Close atlas"]`)?.focus();
      let t = (e) => {
        (e.key === `Escape` || CG(e) === `atlas`) &&
          (e.preventDefault(), e.stopImmediatePropagation(), g.current());
      };
      return (
        window.addEventListener(`keydown`, t, !0),
        () => {
          (window.removeEventListener(`keydown`, t, !0),
            e instanceof HTMLElement && e.isConnected && e.focus());
        }
      );
    }, []),
    (0, v.useEffect)(() => {
      h.current
        ?.querySelector(`.atlas-pin.selected`)
        ?.scrollIntoView({ block: `nearest`, inline: `nearest` });
    }, [c, u]));
  let b = (e) => ({
    left: `${Math.max(0, Math.min(100, (e.x / Or) * 100))}%`,
    top: `${Math.max(0, Math.min(100, (e.y / kr) * 100))}%`,
  });
  return (0, Q.jsx)(`div`, {
    className: `atlas-overlay`,
    onMouseDown: (e) => e.target === e.currentTarget && s(),
    children: (0, Q.jsxs)(`section`, {
      className: `atlas panel`,
      ref: h,
      role: `dialog`,
      "aria-modal": `true`,
      "aria-labelledby": `atlas-title`,
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
      children: [
        (0, Q.jsxs)(`header`, {
          className: `atlas-head`,
          children: [
            (0, Q.jsxs)(`div`, {
              children: [
                (0, Q.jsx)(`small`, {
                  children: `By road, by ruin, by starlight`,
                }),
                (0, Q.jsx)(`h2`, {
                  id: `atlas-title`,
                  children: `The Cartographer’s Atlas`,
                }),
              ],
            }),
            (0, Q.jsxs)(`button`, {
              onClick: s,
              "aria-label": `Close atlas`,
              children: [
                `Close `,
                (0, Q.jsx)(`kbd`, { "aria-hidden": `true`, children: `Esc` }),
              ],
            }),
          ],
        }),
        (0, Q.jsxs)(`div`, {
          className: `atlas-body`,
          children: [
            (0, Q.jsxs)(`div`, {
              className: `atlas-chart`,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `atlas-chart-head`,
                  children: [
                    (0, Q.jsxs)(`div`, {
                      children: [
                        (0, Q.jsx)(`small`, { children: `The continent` }),
                        (0, Q.jsx)(`b`, { children: `Qaesh` }),
                      ],
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `atlas-zoom`,
                      role: `group`,
                      "aria-label": `Zoom`,
                      children: [1, 2, 3].map((e) =>
                        (0, Q.jsxs)(
                          `button`,
                          {
                            "aria-pressed": u === e,
                            onClick: () => d(e),
                            children: [e, `×`],
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, Q.jsx)(`div`, {
                  className: `atlas-map-scroll`,
                  tabIndex: 0,
                  "aria-label": `World map; scroll to explore when zoomed`,
                  children: (0, Q.jsxs)(`div`, {
                    className: `atlas-map`,
                    style: { width: `${u * 100}%` },
                    children: [
                      (0, Q.jsx)(`canvas`, {
                        ref: m,
                        width: Or,
                        height: kr,
                        "aria-label": `Terrain, roads and buildings of Ithra`,
                      }),
                      O5.map((e) =>
                        (0, Q.jsxs)(
                          `button`,
                          {
                            className: `atlas-pin ${e.id === Rl.id ? `hub` : ``} ${c === e.id ? `selected` : ``} ${y(e.id) ? `attuned` : ``}`,
                            style: b(e),
                            title: e.name,
                            "aria-label": e.name,
                            "aria-pressed": c === e.id,
                            onClick: () => l(e.id),
                            children: [
                              (0, Q.jsx)(`i`, { "aria-hidden": `true` }),
                              (0, Q.jsxs)(`span`, {
                                "aria-hidden": `true`,
                                children: [
                                  e.name,
                                  e.id === Rl.id ? `` : ` · ${e.level}`,
                                ],
                              }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                      i.map((e, t) =>
                        (0, Q.jsx)(
                          `i`,
                          {
                            className: `atlas-quest-mark`,
                            style: b(e),
                            title: `Quest activity`,
                            "aria-label": `Quest activity`,
                          },
                          t,
                        ),
                      ),
                      (0, Q.jsx)(`i`, {
                        className: `atlas-you`,
                        style: b(t),
                        title: n ? `Your entrance` : `You are here`,
                        "aria-label": n ? `Your entrance` : `You are here`,
                      }),
                    ],
                  }),
                }),
                (0, Q.jsxs)(`div`, {
                  className: `atlas-legend`,
                  "aria-hidden": `true`,
                  children: [
                    (0, Q.jsx)(`span`, {
                      className: `attuned`,
                      children: `Attuned`,
                    }),
                    (0, Q.jsx)(`span`, {
                      className: `unknown`,
                      children: `Not yet`,
                    }),
                    (0, Q.jsx)(`span`, {
                      className: `tale`,
                      children: `Your tale`,
                    }),
                    (0, Q.jsx)(`span`, {
                      className: `you`,
                      children: n ? `Your entrance` : `You`,
                    }),
                  ],
                }),
              ],
            }),
            (0, Q.jsxs)(`aside`, {
              className: `atlas-notes`,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `atlas-entry`,
                  children: [
                    (0, Q.jsxs)(`small`, {
                      children: [
                        _.region,
                        ` · `,
                        _.id === Rl.id ? `Home` : `Level ${_.level}`,
                      ],
                    }),
                    (0, Q.jsx)(`h3`, { children: _.name }),
                    (0, Q.jsx)(`b`, {
                      className: y(_.id) ? `on` : ``,
                      children: y(_.id) ? `Attuned` : `Not yet attuned`,
                    }),
                    (0, Q.jsx)(`p`, { children: _.lore }),
                    (0, Q.jsx)(`button`, {
                      className: `atlas-road`,
                      disabled: !a,
                      onClick: o,
                      children: `Chorus Road`,
                    }),
                    (0, Q.jsx)(`p`, {
                      className: `atlas-road-note`,
                      children: a
                        ? `Choose a destination on the Chorus Road.`
                        : `Stand by the Aether Crystal or an altar to travel the Chorus Road.`,
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `atlas-filters`,
                  role: `group`,
                  "aria-label": `Landmark filters`,
                  children: [
                    (0, Q.jsx)(`button`, {
                      "data-pad-first": !0,
                      "aria-pressed": f === `all`,
                      onClick: () => p(`all`),
                      children: `All landmarks`,
                    }),
                    (0, Q.jsx)(`button`, {
                      "aria-pressed": f === `attuned`,
                      onClick: () => p(`attuned`),
                      children: `Attuned`,
                    }),
                  ],
                }),
                (0, Q.jsx)(`nav`, {
                  className: `atlas-places`,
                  "aria-label": `Landmarks`,
                  children: O5.filter((e) => f === `all` || y(e.id)).map((e) =>
                    (0, Q.jsxs)(
                      `button`,
                      {
                        className: `${c === e.id ? `selected` : ``} ${y(e.id) ? `attuned` : ``}`,
                        "aria-pressed": c === e.id,
                        onClick: () => l(e.id),
                        children: [
                          (0, Q.jsx)(`i`, { "aria-hidden": `true` }),
                          (0, Q.jsxs)(`span`, {
                            children: [
                              e.name,
                              (0, Q.jsx)(`small`, { children: e.region }),
                            ],
                          }),
                          (0, Q.jsx)(`em`, {
                            children: e.id === Rl.id ? `Home` : `Lv ${e.level}`,
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
var rle = 0.3,
  k5 = (e, t) => `${Math.max(0, Math.min(100, (e / Math.max(1, t)) * 100))}%`;
function A5({ kind: e, label: t, value: n, max: r, low: i }) {
  let a = Math.max(0, Math.min(r, n));
  return (0, Q.jsxs)(`div`, {
    className: `dock-meter ${e}${i ? ` low` : ``}`,
    role: `meter`,
    "aria-label": t,
    "aria-valuemin": 0,
    "aria-valuemax": Math.max(1, Math.round(r)),
    "aria-valuenow": Math.ceil(a),
    children: [
      (0, Q.jsx)(`i`, { className: `dock-fill`, style: { width: k5(a, r) } }),
      (0, Q.jsx)(`span`, {
        className: `dock-name`,
        "aria-hidden": `true`,
        children: t,
      }),
      (0, Q.jsxs)(`b`, {
        className: `dock-reading`,
        "aria-hidden": `true`,
        children: [Math.ceil(a), ` / `, Math.round(r)],
      }),
    ],
  });
}
function ile({ hud: e }) {
  return (0, Q.jsxs)(`div`, {
    className: `dock-bars`,
    children: [
      (0, Q.jsx)(A5, {
        kind: `hp`,
        label: `Vitality`,
        value: e.hp,
        max: e.maxHp,
        low: e.hp < e.maxHp * rle,
      }),
      (0, Q.jsx)(A5, {
        kind: `mana`,
        label: `Aether`,
        value: e.mana,
        max: e.maxMana,
      }),
    ],
  });
}
