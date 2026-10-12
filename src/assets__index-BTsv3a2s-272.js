// assets__index-BTsv3a2s 272 — children
// Lines 168801-168960 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Nue({
  here: e,
  store: t,
  inv: n,
  provisions: r,
  level: i,
  school: a,
  onPut: o,
  onTake: s,
  onClose: c,
}) {
  U7(c);
  let { tip: l, onHover: u, clear: d } = y7(),
    f = t === `basket`,
    p = f ? null : Mue(e.home, t),
    m = f ? e.home.basket.length : (p?.size ?? 0),
    h = f
      ? e.home.basket
      : Array.from({ length: m }, (e, t) => p?.slots?.[t] ?? null),
    g = f ? `Harvest basket` : (p?.name ?? `Storage`),
    _ = r?.goods ?? {},
    y = (0, v.useMemo)(() => (n?.bag ?? []).map((e) => t7(e)), [n]);
  if (!f && !p) return null;
  let b = h.filter(Boolean).length;
  return (0, Q.jsxs)(`div`, {
    className: `items-ui items-overlay`,
    onMouseDown: (e) => e.target === e.currentTarget && c(),
    children: [
      (0, Q.jsxs)(`div`, {
        className: `items-row`,
        children: [
          (0, Q.jsxs)(`section`, {
            className: `panel win home-store`,
            children: [
              (0, Q.jsxs)(`header`, {
                className: `win-head`,
                children: [
                  (0, Q.jsx)(`h2`, { children: g }),
                  (0, Q.jsxs)(`span`, {
                    className: `muted`,
                    children: [b, `/`, m, ` · `, e.ownerName, `'s`],
                  }),
                  (0, Q.jsx)(`button`, {
                    className: `xbtn`,
                    onClick: c,
                    children: `✕`,
                  }),
                ],
              }),
              (0, Q.jsx)(`p`, {
                className: `hint`,
                children: f
                  ? `Guests' harvest lands here.`
                  : `Click to take out. Shift-click for one.`,
              }),
              (0, Q.jsx)(`div`, {
                className: `store-grid`,
                children: h.map((e, t) =>
                  e
                    ? e.item
                      ? (0, Q.jsx)(
                          p7,
                          {
                            item: e.item,
                            level: i,
                            onHover: u,
                            onClick: () => {
                              (d(), s(t));
                            },
                          },
                          t,
                        )
                      : (0, Q.jsx)(
                          Z7,
                          {
                            id: e.good,
                            n: e.n ?? 0,
                            onClick: (e) => s(t, e.shiftKey ? 1 : void 0),
                          },
                          t,
                        )
                    : (0, Q.jsx)(p7, { item: null, level: i }, t),
                ),
              }),
            ],
          }),
          (0, Q.jsxs)(`section`, {
            className: `panel win home-carry`,
            children: [
              (0, Q.jsxs)(`header`, {
                className: `win-head`,
                children: [
                  (0, Q.jsx)(`h2`, { children: `You carry` }),
                  (0, Q.jsx)(`span`, {
                    className: `muted`,
                    children: `click to put in`,
                  }),
                ],
              }),
              !f &&
                (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    (0, Q.jsx)(`h3`, { className: `sub`, children: `Satchel` }),
                    (0, Q.jsx)(`div`, {
                      className: `store-grid`,
                      children: y.length
                        ? y.map((e) =>
                            (0, Q.jsx)(
                              p7,
                              {
                                item: e,
                                level: i,
                                dim: !Ua(e),
                                onHover: u,
                                onClick: () => {
                                  (d(), Ua(e) && o({ itemId: e.id }));
                                },
                              },
                              e.id,
                            ),
                          )
                        : (0, Q.jsx)(`p`, {
                            className: `muted small`,
                            children: `Your satchel's empty.`,
                          }),
                    }),
                  ],
                }),
              (0, Q.jsx)(`h3`, { className: `sub`, children: `Provisions` }),
              (0, Q.jsx)(`div`, {
                className: `store-grid`,
                children: vt.filter((e) => (_[e] ?? 0) > 0 && e !== `water`)
                  .length
                  ? vt
                      .filter((e) => (_[e] ?? 0) > 0 && e !== `water`)
                      .map((e) =>
                        (0, Q.jsx)(
                          Z7,
                          {
                            id: e,
                            n: _[e],
                            onClick: (t) =>
                              o({ good: e, n: t.shiftKey ? 1 : _[e] }),
                          },
                          e,
                        ),
                      )
                  : (0, Q.jsx)(`p`, {
                      className: `muted small`,
                      children: `No crops, seeds, meals or potions.`,
                    }),
              }),
            ],
          }),
        ],
      }),
      l && (0, Q.jsx)(b7, { tip: l, level: i, school: a, worn: {} }),
    ],
  });
}
