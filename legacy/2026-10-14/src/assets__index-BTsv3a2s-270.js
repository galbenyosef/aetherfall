// assets__index-BTsv3a2s 270 — children
// Lines 168153-168496 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function kue({
  here: e,
  myId: t,
  invites: n,
  mats: r,
  canGo: i,
  onGo: a,
  onVisit: o,
  onLeave: s,
  onInvite: c,
  onKick: l,
  onDeed: u,
  onBuild: d,
  onClose: f,
}) {
  (U7(f), u5(1e3));
  let [p, m] = (0, v.useState)(``),
    h = !!e && e.owner === t,
    g = Date.now(),
    _ = n.filter((e) => e.until > g),
    y = e?.home.tier ?? 1,
    b = y < 3 ? Ot[y + 1] : null;
  return (0, Q.jsxs)(`div`, {
    className: `home-panel panel`,
    onMouseDown: (e) => e.stopPropagation(),
    children: [
      (0, Q.jsxs)(`div`, {
        className: `hp-head`,
        children: [
          (0, Q.jsx)(`img`, {
            className: `pixel`,
            src: FF(`crate`),
            width: 48,
            height: 48,
            alt: ``,
          }),
          (0, Q.jsxs)(`div`, {
            children: [
              (0, Q.jsx)(`b`, {
                children: e ? `${e.ownerName}'s Homestead` : `Your Homestead`,
              }),
              (0, Q.jsx)(`small`, {
                children: e ? Ot[e.home.tier].name : `Your own plot`,
              }),
            ],
          }),
          (0, Q.jsx)(`button`, {
            className: `link-btn hp-x`,
            onClick: f,
            children: `✕`,
          }),
        ],
      }),
      !e &&
        (0, Q.jsxs)(`section`, {
          children: [
            (0, Q.jsx)(`p`, {
              className: `hp-lore`,
              children: `Grow crops, cook, brew and store what you can't carry.`,
            }),
            (0, Q.jsxs)(`button`, {
              className: `px-btn primary`,
              disabled: !!i,
              onClick: a,
              children: [
                `Go home`,
                (0, Q.jsx)(`small`, {
                  children: i ?? `Stand still for 3 seconds`,
                }),
              ],
            }),
          ],
        }),
      _.length > 0 &&
        (0, Q.jsxs)(`section`, {
          children: [
            (0, Q.jsx)(`h3`, { children: `Invitations` }),
            _.map((e) =>
              (0, Q.jsxs)(
                `div`,
                {
                  className: `hp-row`,
                  children: [
                    (0, Q.jsxs)(`span`, {
                      children: [
                        (0, Q.jsx)(`b`, { children: e.from }),
                        ` `,
                        (0, Q.jsxs)(`small`, {
                          className: `muted`,
                          children: [`· `, q7(e.until - g)],
                        }),
                      ],
                    }),
                    (0, Q.jsx)(`button`, {
                      className: `hbtn`,
                      disabled: !!i,
                      title: i ?? void 0,
                      onClick: () => o(e),
                      children: `Go`,
                    }),
                  ],
                },
                e.owner,
              ),
            ),
          ],
        }),
      h &&
        e &&
        (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsxs)(`section`, {
              children: [
                (0, Q.jsx)(`h3`, { children: `The deed` }),
                (0, Q.jsxs)(`div`, {
                  className: `hp-row`,
                  children: [
                    (0, Q.jsxs)(`span`, {
                      children: [
                        Ot[y].name,
                        `: `,
                        Ot[y].claim.w,
                        `×`,
                        Ot[y].claim.h,
                        ` outside, `,
                        Ut[y].w,
                        `×`,
                        Ut[y].h,
                        ` inside`,
                      ],
                    }),
                    (0, Q.jsx)(`button`, {
                      className: `hbtn`,
                      onClick: d,
                      children: `Build`,
                    }),
                  ],
                }),
                b
                  ? (0, Q.jsxs)(`div`, {
                      className: `hp-row`,
                      children: [
                        (0, Q.jsxs)(`span`, {
                          children: [
                            (0, Q.jsx)(`b`, { children: b.name }),
                            `: `,
                            b.claim.w,
                            `×`,
                            b.claim.h,
                            ` outside, `,
                            Ut[y + 1].w,
                            `×`,
                            Ut[y + 1].h,
                            ` inside `,
                            (0, Q.jsxs)(`small`, {
                              className: `muted`,
                              children: [`· `, G7(b.cost)],
                            }),
                          ],
                        }),
                        (0, Q.jsx)(`button`, {
                          className: `hbtn`,
                          disabled: !K7(r, b.cost),
                          onClick: u,
                          children: `Upgrade`,
                        }),
                      ],
                    })
                  : (0, Q.jsx)(`p`, {
                      className: `muted small`,
                      children: `The largest deed.`,
                    }),
              ],
            }),
            (0, Q.jsxs)(`section`, {
              children: [
                (0, Q.jsx)(`h3`, { children: `Guests` }),
                e.guests.length
                  ? e.guests.map((e) =>
                      (0, Q.jsxs)(
                        `div`,
                        {
                          className: `hp-row`,
                          children: [
                            (0, Q.jsx)(`span`, { children: e.name }),
                            (0, Q.jsx)(`button`, {
                              className: `hbtn`,
                              onClick: () => l(e.id),
                              children: `Show out`,
                            }),
                          ],
                        },
                        e.id,
                      ),
                    )
                  : (0, Q.jsx)(`p`, {
                      className: `muted small`,
                      children: `No guests.`,
                    }),
                (0, Q.jsxs)(`form`, {
                  className: `hp-invite`,
                  onSubmit: (e) => {
                    e.preventDefault();
                    let t = p.trim();
                    t && c(t).then((e) => e && m(``));
                  },
                  children: [
                    (0, Q.jsx)(`input`, {
                      value: p,
                      maxLength: 24,
                      placeholder: `Name…`,
                      onChange: (e) => m(e.target.value),
                      onKeyDown: (e) =>
                        e.key !== `Escape` && e.stopPropagation(),
                    }),
                    (0, Q.jsx)(`button`, {
                      className: `hbtn`,
                      type: `submit`,
                      disabled: !p.trim(),
                      children: `Invite`,
                    }),
                  ],
                }),
                (0, Q.jsx)(`p`, {
                  className: `muted small`,
                  children: `Guests can water, harvest into your basket and use your storage.`,
                }),
              ],
            }),
          ],
        }),
      e &&
        !h &&
        (0, Q.jsx)(`p`, {
          className: `hp-lore`,
          children: `You can water, harvest and use the storage.`,
        }),
      e &&
        (0, Q.jsxs)(`button`, {
          className: `px-btn hp-leave`,
          onClick: s,
          children: [
            `Leave`,
            (0, Q.jsx)(`small`, { children: `Back where you were` }),
          ],
        }),
    ],
  });
}
function Aue({ here: e, mats: t, tool: n, onTool: r, onClose: i }) {
  U7(i);
  let a = (t) => e.home.structures.filter((e) => e.kind === t).length,
    o = n && n !== `pickup` ? kt[n] : null,
    s = Ot[e.home.tier].claim;
  return (0, Q.jsxs)(`div`, {
    className: `build-bar panel`,
    onMouseDown: (e) => e.stopPropagation(),
    children: [
      (0, Q.jsxs)(`div`, {
        className: `bb-head`,
        children: [
          (0, Q.jsx)(`b`, { children: `Build` }),
          (0, Q.jsx)(`small`, {
            children: o
              ? `${o.name}: ${G7(o.cost)}`
              : n === `pickup`
                ? `Click to take up and get its cost back.`
                : GG
                  ? `Pick, then tap a tile.`
                  : `Pick, then click a tile. Esc to stop.`,
          }),
          (0, Q.jsx)(`button`, {
            className: `link-btn`,
            onClick: i,
            children: `✕`,
          }),
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `bb-row`,
        children: [
          At.map((e) => {
            let i = kt[e],
              o = a(e),
              s = !K7(t, i.cost);
            return (0, Q.jsxs)(
              `button`,
              {
                className: `bb-item ${n === e ? `on` : ``} ${s ? `dim` : ``}`,
                title: `${i.name}: ${i.desc} (${G7(i.cost)})${o ? ` · ${o} built` : ``}`,
                onClick: () => r(n === e ? null : e),
                children: [
                  (0, Q.jsx)(`img`, {
                    className: `pixel`,
                    src: FF(e),
                    width: 32,
                    height: 32,
                    alt: ``,
                  }),
                  (0, Q.jsx)(`span`, { children: i.name }),
                  (0, Q.jsx)(`small`, { children: Q7(i.cost) }),
                ],
              },
              e,
            );
          }),
          (0, Q.jsxs)(`button`, {
            className: `bb-item pickup ${n === `pickup` ? `on` : ``}`,
            onClick: () => r(n === `pickup` ? null : `pickup`),
            title: `Take something up`,
            children: [
              (0, Q.jsx)(`span`, { className: `bb-glyph`, children: `⤒` }),
              (0, Q.jsx)(`span`, { children: `Take up` }),
              (0, Q.jsx)(`small`, { children: `\xA0` }),
            ],
          }),
          (0, Q.jsxs)(`span`, {
            className: `muted hb-plan`,
            children: [
              `Your deed: `,
              s.w,
              `×`,
              s.h,
              ` tiles · `,
              t?.crowns ?? 0,
              ` Crowns`,
            ],
          }),
        ],
      }),
    ],
  });
}
function Q7(e) {
  return (
    [
      e.crowns ? `${e.crowns}` : ``,
      e.dust ? `${e.dust} Dust` : ``,
      e.shards ? `${e.shards} Sh.` : ``,
    ]
      .filter(Boolean)
      .join(` · `) || `free`
  );
}
