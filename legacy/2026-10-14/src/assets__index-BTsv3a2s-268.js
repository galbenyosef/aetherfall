// assets__index-BTsv3a2s 268 — children
// Lines 167611-167845 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Cue({ hud: e, onLeave: t, onPick: n }) {
  let r = V7(4, 250),
    i = J8().device === `pad`,
    [a, o] = (0, v.useState)(!1),
    s = Co.filter((t) => e.shards[t] > 0);
  return (0, Q.jsxs)(`div`, {
    className: `dng-hud`,
    children: [
      (0, Q.jsxs)(`div`, {
        className: `dh-strip panel`,
        children: [
          (0, Q.jsxs)(`div`, {
            className: `dh-title`,
            children: [
              (0, Q.jsx)(z7, {
                c: Vy(e.diff),
                scale: 1.5,
                className: `inline`,
              }),
              ` `,
              e.name,
              (0, Q.jsxs)(`small`, {
                children: [
                  ` `,
                  `· `,
                  e.floorName,
                  ` · floor `,
                  e.floor + 1,
                  ` of `,
                  e.floors,
                ],
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `dh-row`,
            children: [
              (0, Q.jsx)(`span`, {
                className: `dh-ember`,
                title: `The Ember of Marizon: the rises you have left`,
                children: Array.from({ length: e.emberMax }, (t, n) =>
                  (0, Q.jsx)(
                    z7,
                    {
                      c: Ry(n < e.ember, r + n),
                      scale: 1.5,
                      className: `inline`,
                    },
                    n,
                  ),
                ),
              }),
              s.map((t) =>
                (0, Q.jsxs)(
                  `span`,
                  {
                    className: `dh-shard`,
                    style: { color: Eo[t] },
                    title: `${t} Tone Shards`,
                    children: [
                      (0, Q.jsx)(z7, {
                        c: zy(t),
                        scale: 1.5,
                        className: `inline`,
                      }),
                      `×`,
                      e.shards[t],
                    ],
                  },
                  t,
                ),
              ),
              e.taken &&
                (0, Q.jsxs)(`span`, {
                  className: `dh-taken`,
                  title: `The Taken brought out alive, lost, and still kneeling on this floor`,
                  children: [
                    `Taken: `,
                    (0, Q.jsxs)(`b`, {
                      className: `cy`,
                      children: [e.taken.freed, ` freed`],
                    }),
                    e.taken.lost
                      ? (0, Q.jsxs)(`b`, {
                          className: `red`,
                          children: [` · `, e.taken.lost, ` lost`],
                        })
                      : null,
                    e.taken.waiting
                      ? (0, Q.jsxs)(`span`, {
                          className: `dim`,
                          children: [` · `, e.taken.waiting, ` here`],
                        })
                      : null,
                  ],
                }),
              (0, Q.jsxs)(`span`, {
                className: `dh-tide ${e.tide.paused ? `paused` : ``}`,
                title: `The Hollow Tide: when it fills, a Surge climbs out of a rift near you. Keep moving.`,
                children: [
                  `Tide`,
                  (0, Q.jsx)(`span`, {
                    className: `dh-tbar`,
                    children: (0, Q.jsx)(`span`, {
                      style: { width: `${Math.round(e.tide.k * 100)}%` },
                    }),
                  }),
                  e.tide.surges > 0 &&
                    (0, Q.jsx)(`small`, { children: e.tide.surges }),
                ],
              }),
              a
                ? (0, Q.jsxs)(`span`, {
                    className: `dh-leave`,
                    children: [
                      `Leave? The run ends.`,
                      ` `,
                      (0, Q.jsx)(`button`, {
                        className: `link-btn danger`,
                        onClick: t,
                        children: `Leave`,
                      }),
                      (0, Q.jsx)(`button`, {
                        className: `link-btn`,
                        onClick: () => o(!1),
                        children: `Stay`,
                      }),
                    ],
                  })
                : (0, Q.jsx)(`button`, {
                    className: `link-btn dh-leave`,
                    onClick: () => o(!0),
                    children: e.cleared ? `Return to the surface` : `Leave`,
                  }),
            ],
          }),
        ],
      }),
      e.echoes.length > 0 &&
        (0, Q.jsx)(`div`, {
          className: `dh-echoes`,
          title: `Echoes: powers for this run`,
          children: e.echoes.map((e) =>
            (0, Q.jsxs)(
              `span`,
              {
                style: { color: H7[e.family] },
                children: [e.name, e.n > 1 ? ` ×${e.n}` : ``],
              },
              e.id,
            ),
          ),
        }),
      e.offer &&
        (0, Q.jsxs)(`div`, {
          className: `dh-draft`,
          onMouseDown: (e) => e.stopPropagation(),
          onTouchStart: (e) => e.stopPropagation(),
          children: [
            (0, Q.jsxs)(`div`, {
              className: `dd-title`,
              children: [
                `An Echo answers. Choose one.`,
                i &&
                  (0, Q.jsxs)(Q.Fragment, {
                    children: [` `, (0, Q.jsx)(Y8, { b: `UP` })],
                  }),
              ],
            }),
            (0, Q.jsx)(`div`, {
              className: `dd-cards`,
              children: e.offer.map((e, t) =>
                (0, Q.jsxs)(
                  `button`,
                  {
                    className: `dd-card panel ${e.family === `hollow` ? `hollow` : ``}`,
                    style: { borderColor: H7[e.family] },
                    "data-pad-first": t === 0 ? `` : void 0,
                    onClick: () => n(e.id),
                    children: [
                      (0, Q.jsxs)(`span`, {
                        className: `dd-fam`,
                        style: { color: H7[e.family] },
                        children: [
                          Sue[e.family],
                          e.max > 1 ? ` · ${e.n}/${e.max}` : ``,
                        ],
                      }),
                      (0, Q.jsx)(`b`, { children: e.name }),
                      (0, Q.jsx)(`span`, {
                        className: `dd-desc`,
                        children: e.desc,
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
      e.boss &&
        (0, Q.jsx)(`div`, {
          className: `dh-boss`,
          children: (0, Q.jsx)(E7, { boss: e.boss }),
        }),
      e.bark &&
        (0, Q.jsxs)(
          `div`,
          {
            className: `dh-bark panel`,
            children: [
              (0, Q.jsx)(`b`, { children: e.bark.who }),
              ` `,
              e.bark.text,
            ],
          },
          e.bark.text,
        ),
      e.channel &&
        (0, Q.jsxs)(`div`, {
          className: `dh-channel panel`,
          children: [
            (0, Q.jsx)(`span`, { children: e.channel.label }),
            (0, Q.jsx)(`div`, {
              className: `dh-cbar`,
              children: (0, Q.jsx)(`div`, {
                style: { width: `${Math.round(e.channel.k * 100)}%` },
              }),
            }),
          ],
        }),
    ],
  });
}
