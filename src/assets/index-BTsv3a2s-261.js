// index-BTsv3a2s 261 — children
// Lines 165393-165762 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function eue({
  rows: e,
  tracked: t,
  chapter: n,
  next: r,
  fmt: i,
  onTrack: a,
  onAbandon: o,
  onClose: s,
}) {
  let [c, l] = (0, v.useState)(`active`),
    [u, d] = (0, v.useState)(t),
    [f, p] = (0, v.useState)(null),
    m = (0, v.useRef)(null),
    h = e.filter((e) => cQ(e.questId)),
    g = h.filter((e) => e.status === `active`),
    _ = h.filter((e) => e.status === `done`),
    y = g.filter((e) => cQ(e.questId).kind !== `main`),
    b = [...(c === `done` ? _ : c === `side` ? y : g)].sort((e, t) => {
      let n = cQ(e.questId),
        r = cQ(t.questId);
      return (
        (n.kind === r.kind ? 0 : n.kind === `main` ? -1 : 1) ||
        n.level - r.level
      );
    }),
    x =
      b.find((e) => e.questId === u) ??
      b.find((e) => e.questId === t) ??
      b[0] ??
      null,
    S = x ? cQ(x.questId) : null,
    C = S ? SQ(S.id) : null,
    w = x ? b.indexOf(x) : -1,
    T = (e) => {
      (d(e), p(null));
    },
    E = (e) => {
      (l(e), p(null));
    };
  return (
    (0, v.useEffect)(() => {
      let e = document.activeElement;
      return (
        m.current?.querySelector(`[data-pad-first]`)?.focus(),
        () => {
          e instanceof HTMLElement && e.isConnected && e.focus();
        }
      );
    }, []),
    (0, Q.jsx)(`div`, {
      className: `quests-overlay`,
      onMouseDown: (e) => e.target === e.currentTarget && s(),
      children: (0, Q.jsxs)(`section`, {
        className: `panel journal`,
        ref: m,
        role: `dialog`,
        "aria-modal": `true`,
        "aria-labelledby": `journal-title`,
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
            className: `jl-head`,
            children: [
              (0, Q.jsxs)(`div`, {
                children: [
                  (0, Q.jsx)(`span`, {
                    className: `jl-overline`,
                    children: QZ.region,
                  }),
                  (0, Q.jsx)(`h2`, {
                    id: `journal-title`,
                    children: `The Wanderer’s Journal`,
                  }),
                ],
              }),
              n.total > 0 && (0, Q.jsx)(T7, { ch: n, next: r }),
              (0, Q.jsxs)(`button`, {
                className: `jl-x`,
                onClick: s,
                "aria-label": `Close journal`,
                children: [
                  `Close `,
                  (0, Q.jsx)(`kbd`, { "aria-hidden": `true`, children: `Esc` }),
                ],
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `jl-body`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `jl-leaf jl-left`,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: `jl-filters`,
                    role: `group`,
                    "aria-label": `Quest categories`,
                    children: [
                      [`active`, `Ongoing`, g.length],
                      [`side`, `Small tales`, y.length],
                      [`done`, `Remembered`, _.length],
                    ].map(([e, t, n]) =>
                      (0, Q.jsxs)(
                        `button`,
                        {
                          className: c === e ? `on` : ``,
                          "aria-pressed": c === e,
                          onClick: () => E(e),
                          "data-pad-first": e === `active` || void 0,
                          children: [
                            t,
                            ` `,
                            (0, Q.jsx)(`span`, { children: n }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                  (0, Q.jsxs)(`nav`, {
                    className: `jl-list`,
                    "aria-label": `Quest entries`,
                    children: [
                      b.map((e) => {
                        let n = cQ(e.questId);
                        return (0, Q.jsxs)(
                          `button`,
                          {
                            className: `jl-item ${x?.questId === e.questId ? `sel` : ``} ${e.status}`,
                            "aria-pressed": x?.questId === e.questId,
                            onClick: () => T(e.questId),
                            children: [
                              (0, Q.jsx)(`span`, {
                                className: `jl-entry-mark ${n.kind === `main` ? `main` : ``}`,
                                "aria-hidden": `true`,
                              }),
                              (0, Q.jsxs)(`span`, {
                                children: [
                                  (0, Q.jsx)(`strong`, { children: n.title }),
                                  (0, Q.jsxs)(`small`, {
                                    children: [
                                      n.kind === `main`
                                        ? `Main story`
                                        : `Side quest`,
                                      ` · Level `,
                                      n.level,
                                      t === e.questId && e.status === `active`
                                        ? ` · Tracked`
                                        : ``,
                                    ],
                                  }),
                                ],
                              }),
                              (0, Q.jsx)(`span`, {
                                className: `jl-tag`,
                                "aria-hidden": `true`,
                                children:
                                  e.status === `done`
                                    ? `Done`
                                    : t === e.questId
                                      ? `Following`
                                      : Xle(n, e),
                              }),
                            ],
                          },
                          e.questId,
                        );
                      }),
                      !b.length &&
                        (0, Q.jsx)(`p`, {
                          className: `jl-empty`,
                          children:
                            c === `done`
                              ? `The story is still being written. Completed quests will be kept here.`
                              : c === `side`
                                ? `No small tales in progress. Look for ! over the people you meet.`
                                : `No ongoing quests. Look for ! over the people of Marizon.`,
                        }),
                    ],
                  }),
                ],
              }),
              (0, Q.jsx)(`article`, {
                className: `jl-leaf jl-detail`,
                "aria-label": S ? `Quest: ${S.title}` : `Quest details`,
                children:
                  S && x
                    ? (0, Q.jsxs)(Q.Fragment, {
                        children: [
                          (0, Q.jsxs)(`div`, {
                            className: `jl-kind`,
                            children: [
                              C
                                ? `Main tale · part ${C.n} of ${C.total}`
                                : `Small tale`,
                              ` · Level `,
                              S.level,
                              x.status === `done` ? ` · Remembered` : ``,
                            ],
                          }),
                          (0, Q.jsx)(`h3`, { children: S.title }),
                          (0, Q.jsx)(`p`, {
                            className: `jl-summary`,
                            children: i(S.summary),
                          }),
                          (0, Q.jsx)(`h4`, {
                            className: `jl-section-label`,
                            children:
                              x.status === `done`
                                ? `Promises kept`
                                : `What remains`,
                          }),
                          (0, Q.jsxs)(`ol`, {
                            className: `jl-steps`,
                            children: [
                              Zle(S, x).map(({ s: e, done: t, i: n }) => {
                                let r = lQ(e),
                                  a = t ? r : dQ(e, x.progress);
                                return (0, Q.jsxs)(
                                  `li`,
                                  {
                                    className: t ? `done` : `now`,
                                    children: [
                                      (0, Q.jsx)(`span`, {
                                        className: `tick`,
                                        role: `img`,
                                        "aria-label": t
                                          ? `Completed`
                                          : `Current objective`,
                                      }),
                                      (0, Q.jsxs)(`span`, {
                                        children: [
                                          i(e.text),
                                          r > 1 &&
                                            (0, Q.jsxs)(`b`, {
                                              children: [` `, a, `/`, r],
                                            }),
                                          e.night &&
                                            !t &&
                                            (0, Q.jsx)(`em`, {
                                              children: ` (after dark)`,
                                            }),
                                        ],
                                      }),
                                    ],
                                  },
                                  n,
                                );
                              }),
                              x.status === `active` &&
                                x.step + 1 < S.steps.length &&
                                (0, Q.jsxs)(`li`, {
                                  className: `later`,
                                  children: [
                                    (0, Q.jsx)(`span`, {
                                      className: `tick`,
                                      "aria-hidden": `true`,
                                    }),
                                    (0, Q.jsx)(`span`, {
                                      children: `The next page is still unwritten…`,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, Q.jsxs)(`div`, {
                            className: `jl-reward`,
                            children: [
                              (0, Q.jsx)(`span`, {
                                children:
                                  x.status === `done`
                                    ? `Received`
                                    : `At the end`,
                              }),
                              w7(S),
                            ],
                          }),
                          x.status === `active` &&
                            (0, Q.jsxs)(`div`, {
                              className: `jl-actions`,
                              children: [
                                (0, Q.jsx)(`button`, {
                                  className: `px-btn jl-track`,
                                  disabled: t === S.id,
                                  onClick: () => a(S.id),
                                  children:
                                    t === S.id
                                      ? `Following`
                                      : `Follow this tale`,
                                }),
                                f === S.id
                                  ? (0, Q.jsxs)(Q.Fragment, {
                                      children: [
                                        (0, Q.jsx)(`span`, {
                                          className: `muted`,
                                          children: `Abandon it? The giver will offer it again.`,
                                        }),
                                        (0, Q.jsx)(`button`, {
                                          className: `link-btn danger`,
                                          onClick: () => {
                                            (p(null), o(S.id));
                                          },
                                          children: `Abandon`,
                                        }),
                                        (0, Q.jsx)(`button`, {
                                          className: `link-btn`,
                                          onClick: () => p(null),
                                          children: `Keep`,
                                        }),
                                      ],
                                    })
                                  : (0, Q.jsx)(`button`, {
                                      className: `link-btn danger`,
                                      onClick: () => p(S.id),
                                      children: `Abandon…`,
                                    }),
                              ],
                            }),
                        ],
                      })
                    : (0, Q.jsxs)(`div`, {
                        className: `jl-blank`,
                        children: [
                          (0, Q.jsx)(`span`, { "aria-hidden": `true` }),
                          (0, Q.jsx)(`h3`, { children: `A new page awaits.` }),
                          (0, Q.jsx)(`p`, {
                            children: `Choose a tale from the list, or return to the road and find one worth remembering.`,
                          }),
                        ],
                      }),
              }),
            ],
          }),
          (0, Q.jsxs)(`footer`, {
            className: `jl-book-foot`,
            children: [
              (0, Q.jsx)(`button`, {
                disabled: w <= 0,
                onClick: () => T(b[w - 1].questId),
                children: `← Previous entry`,
              }),
              (0, Q.jsx)(`span`, {
                children:
                  w < 0 ? `An unwritten page` : `Entry ${w + 1} of ${b.length}`,
              }),
              (0, Q.jsx)(`button`, {
                disabled: w < 0 || w >= b.length - 1,
                onClick: () => T(b[w + 1].questId),
                children: `Next entry →`,
              }),
            ],
          }),
        ],
      }),
    })
  );
}
