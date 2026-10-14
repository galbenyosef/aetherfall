// index-BTsv3a2s 273 — children
// Lines 168961-169275 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Pue({ station: e, name: t, provisions: n, onCraft: r, onClose: i }) {
  U7(i);
  let a = n?.goods ?? {},
    o = new Set(n?.recipes ?? []),
    s = xt.filter((t) => bt[t].station === e),
    c = s.filter((e) => o.has(e) || bt[e].known),
    l = s.filter((e) => !c.includes(e)),
    [u, d] = (0, v.useState)({}),
    [f, p] = (0, v.useState)({}),
    [m, h] = (0, v.useState)(!1),
    [g, _] = (0, v.useState)(null),
    y = e === `cookfire`,
    b = y ? `Cook` : `Brew`,
    x = (e) =>
      Math.min(
        10,
        ...Object.entries(e).map(([e, t]) => Math.floor((a[e] ?? 0) / t)),
      ),
    S = async (e, t) => {
      h(!0);
      let n = await r(e, t);
      (h(!1),
        n &&
          (n.recipe
            ? _(
                `${_t[n.good]?.name ?? n.good} × ${n.n}${n.discovered ? `: new recipe!` : ``}`,
              )
            : _(`Murky Sludge × ${n.n}: not a recipe.`)));
    },
    C = Object.keys(f).filter((e) => f[e] > 0),
    w = ft.filter((e) => (a[e] ?? 0) > 0),
    T = y ? `a meal` : `a potion`;
  return (0, Q.jsxs)(`div`, {
    className: `home-panel station panel`,
    onMouseDown: (e) => e.stopPropagation(),
    children: [
      (0, Q.jsxs)(`div`, {
        className: `hp-head`,
        children: [
          (0, Q.jsx)(`img`, {
            className: `pixel`,
            src: FF(e),
            width: 48,
            height: 48,
            alt: ``,
          }),
          (0, Q.jsxs)(`div`, {
            children: [
              (0, Q.jsx)(`b`, {
                children: t ?? (y ? `Cookfire` : `Brewing Cauldron`),
              }),
              (0, Q.jsx)(`small`, {
                children: y
                  ? `Meals last 30 minutes.`
                  : `Timed potions last 10 minutes.`,
              }),
            ],
          }),
          (0, Q.jsx)(`button`, {
            className: `link-btn hp-x`,
            onClick: i,
            children: `✕`,
          }),
        ],
      }),
      g && (0, Q.jsx)(`div`, { className: `st-last`, children: g }),
      (0, Q.jsxs)(`section`, {
        children: [
          (0, Q.jsx)(`h3`, { children: `Recipe book` }),
          c.map((e) => {
            let t = bt[e],
              n = x(t.needs),
              r = Math.max(1, Math.min(u[e] ?? 1, Math.max(1, n)));
            return (0, Q.jsxs)(
              `div`,
              {
                className: `st-recipe`,
                children: [
                  (0, Q.jsx)(J7, { id: t.makes, size: 32 }),
                  (0, Q.jsxs)(`div`, {
                    className: `st-body`,
                    children: [
                      (0, Q.jsxs)(`b`, {
                        children: [
                          _t[t.makes].name,
                          ` `,
                          (0, Q.jsxs)(`small`, {
                            className: `muted`,
                            children: [`× `, t.n],
                          }),
                        ],
                      }),
                      (0, Q.jsx)(`small`, {
                        className: `muted`,
                        children: X7(t.makes),
                      }),
                      (0, Q.jsx)(`div`, {
                        className: `st-needs`,
                        children: Object.entries(t.needs).map(([e, t]) =>
                          (0, Q.jsxs)(
                            `span`,
                            {
                              className: (a[e] ?? 0) >= t * r ? `ok` : `short`,
                              title: _t[e].name,
                              children: [
                                (0, Q.jsx)(J7, { id: e, size: 16 }),
                                ` `,
                                t * r,
                                ` `,
                                _t[e].name,
                                ` `,
                                (0, Q.jsxs)(`small`, {
                                  children: [`(`, a[e] ?? 0, `)`],
                                }),
                              ],
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `st-go`,
                    children: [
                      (0, Q.jsxs)(`div`, {
                        className: `st-n`,
                        children: [
                          (0, Q.jsx)(`button`, {
                            className: `hbtn`,
                            disabled: r <= 1,
                            onClick: () => d({ ...u, [e]: r - 1 }),
                            children: `−`,
                          }),
                          (0, Q.jsxs)(`span`, { children: [`×`, r] }),
                          (0, Q.jsx)(`button`, {
                            className: `hbtn`,
                            disabled: r >= n,
                            onClick: () => d({ ...u, [e]: r + 1 }),
                            children: `+`,
                          }),
                        ],
                      }),
                      (0, Q.jsx)(`button`, {
                        className: `hbtn primary`,
                        disabled: m || n < 1,
                        onClick: () => void S(t.needs, r),
                        children: b,
                      }),
                    ],
                  }),
                ],
              },
              e,
            );
          }),
          l.length > 0 &&
            (0, Q.jsx)(`div`, {
              className: `st-unknown`,
              children: l.map((e) => {
                let t = Object.keys(bt[e].needs)[0];
                return (0, Q.jsxs)(
                  `div`,
                  {
                    className: `st-hint`,
                    children: [
                      (0, Q.jsx)(`span`, { className: `q`, children: `?` }),
                      ` Something `,
                      T === `a meal` ? `to eat` : `to drink`,
                      ` with `,
                      (0, Q.jsx)(`b`, { children: _t[t].name }),
                      `, and `,
                      Object.keys(bt[e].needs).length - 1,
                      ` more…`,
                    ],
                  },
                  e,
                );
              }),
            }),
        ],
      }),
      (0, Q.jsxs)(`section`, {
        children: [
          (0, Q.jsx)(`h3`, { children: `Try something new` }),
          (0, Q.jsxs)(`p`, {
            className: `muted small`,
            children: [
              `Up to `,
              4,
              ` kinds of crop. A combination that's a recipe teaches it to you; one that isn't makes sludge.`,
            ],
          }),
          (0, Q.jsx)(`div`, {
            className: `st-mix`,
            children: w.length
              ? w.map((e) => {
                  let t = f[e] ?? 0,
                    n = !t && C.length >= 4;
                  return (0, Q.jsxs)(
                    `div`,
                    {
                      className: `st-chip ${t ? `on` : ``} ${n ? `dim` : ``}`,
                      children: [
                        (0, Q.jsx)(J7, { id: e, size: 24 }),
                        (0, Q.jsx)(`span`, { children: dt[e].name }),
                        (0, Q.jsx)(`button`, {
                          className: `hbtn`,
                          disabled: !t,
                          onClick: () => p({ ...f, [e]: t - 1 }),
                          children: `−`,
                        }),
                        (0, Q.jsx)(`b`, { children: t }),
                        (0, Q.jsx)(`button`, {
                          className: `hbtn`,
                          disabled: n || t >= Math.min(4, a[e] ?? 0),
                          onClick: () => p({ ...f, [e]: t + 1 }),
                          children: `+`,
                        }),
                      ],
                    },
                    e,
                  );
                })
              : (0, Q.jsx)(`p`, {
                  className: `muted small`,
                  children: `No crops yet.`,
                }),
          }),
          (0, Q.jsxs)(`button`, {
            className: `hbtn primary`,
            disabled: m || !C.length,
            onClick: () => {
              let e = Object.fromEntries(C.map((e) => [e, f[e]]));
              S(e, 1).then(() => p({}));
            },
            children: [b, ` it`],
          }),
        ],
      }),
    ],
  });
}
function Fue({ provisions: e, onPick: t, onClose: n }) {
  U7(n);
  let r = e?.goods ?? {},
    i = ft.filter((e) => (r[`seed:${e}`] ?? 0) > 0);
  return (0, Q.jsxs)(`div`, {
    className: `home-panel seeds panel`,
    onMouseDown: (e) => e.stopPropagation(),
    children: [
      (0, Q.jsxs)(`div`, {
        className: `hp-head`,
        children: [
          (0, Q.jsxs)(`div`, {
            children: [
              (0, Q.jsx)(`b`, { children: `Plant` }),
              (0, Q.jsx)(`small`, {
                children: `E at another bare bed plants the same seed.`,
              }),
            ],
          }),
          (0, Q.jsx)(`button`, {
            className: `link-btn hp-x`,
            onClick: n,
            children: `✕`,
          }),
        ],
      }),
      i.length
        ? (0, Q.jsx)(`div`, {
            className: `seed-list`,
            children: i.map((e) =>
              (0, Q.jsxs)(
                `button`,
                {
                  className: `seed`,
                  onClick: () => t(e),
                  title: dt[e].desc,
                  children: [
                    (0, Q.jsx)(J7, { id: `seed:${e}`, size: 32 }),
                    (0, Q.jsxs)(`span`, {
                      children: [
                        (0, Q.jsx)(`b`, { children: dt[e].name }),
                        (0, Q.jsxs)(`small`, {
                          children: [
                            `× `,
                            r[`seed:${e}`],
                            ` · ripe in `,
                            dt[e].growMin,
                            ` min watered`,
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                e,
              ),
            ),
          })
        : (0, Q.jsx)(`p`, {
            className: `hp-lore`,
            children: `No seeds. Buy them at the Herbalist or General Goods.`,
          }),
    ],
  });
}
function Iue(e, t) {
  let n = Nt(e.crop),
    r = 1 - Pt(e, t);
  if (r <= 0) return 0;
  let i = Math.max(0, e.wetUntil - t);
  return i / n >= r ? r * n : i + ((r - i / n) * n) / jt;
}
