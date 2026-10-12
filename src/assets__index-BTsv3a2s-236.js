// assets__index-BTsv3a2s 236 — jsx
// Lines 157406-157731 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function k8(e, t, n) {
  let r = `${n?.party ? `◆ ` : ``}${n?.outlaw ? `☠ ` : n?.hostile ? `⚔ ` : ``}${e}  Lv${t}`,
    i = n?.wanted;
  return i && (i.level > 0 || i.writ > 0)
    ? [r, `${`★`.repeat(i.level)}${i.writ > 0 ? ` Writ ${i.writ}` : ``}`]
    : [r];
}
function A8(e) {
  let t = [`plain`, `kindled`, `runed`, `resonant`, `remembered`, `skyfallen`],
    n = null;
  for (let r of e) (!n || t.indexOf(r.rarity) > t.indexOf(n.rarity)) && (n = r);
  return n;
}
var j8 = {
    pyro: {
      name: `The Ember Oath`,
      glyph: `fire`,
      short: `Fire`,
      caption: `The first flame remembers.`,
    },
    cryo: {
      name: `The Still Winter`,
      glyph: `frost`,
      short: `Frost`,
      caption: `Patience, given an edge.`,
    },
    storm: {
      name: `Thousand Thunders`,
      glyph: `lightning`,
      short: `Lightning`,
      caption: `The sky, briefly unbound.`,
    },
    void: {
      name: `Beyond the Veil`,
      glyph: `void`,
      short: `Void`,
      caption: `A thread of the impossible.`,
    },
    marksman: {
      name: `The Warden's Eye`,
      glyph: `agility`,
      short: `Marksman`,
      caption: `Aimed, and let go.`,
    },
    paladin: {
      name: `The Lumen Ward`,
      glyph: `warden`,
      short: `Paladin`,
      caption: `The Ward's light, carried on a blade.`,
    },
    scout: {
      name: `The Veil's Edge`,
      glyph: `agility`,
      short: `Scout`,
      caption: `Seen, then not.`,
    },
  },
  M8 = {
    name: `What the Hand Holds`,
    glyph: `strength`,
    short: `Arms`,
    caption: `Not learned: held.`,
    lore: `A sword, a shield, a bow, a dagger: anyone may take one up, and its skill comes with it. Its own order wields it best.`,
  };
function N8(e) {
  return ae(e.id) ? M8 : j8[xe[e.id] ?? `pyro`];
}
function tce() {
  return (0, Q.jsx)(`svg`, {
    className: `arcana-symbols`,
    "aria-hidden": `true`,
    children: (0, Q.jsxs)(`defs`, {
      children: [
        (0, Q.jsx)(`symbol`, {
          id: `arc-fire`,
          viewBox: `0 0 80 80`,
          children: (0, Q.jsx)(`path`, {
            d: `M43 7c5 20-16 23-10 39 6-3 7-10 7-10s21 11 15 27C77 47 61 30 56 24c2 12-5 15-5 15S53 20 43 7ZM30 26C8 51 20 72 41 73c-14-10-19-24-11-47ZM41 53c-13 13-4 21 4 21s12-10-4-21Z`,
          }),
        }),
        (0, Q.jsx)(`symbol`, {
          id: `arc-frost`,
          viewBox: `0 0 80 80`,
          children: (0, Q.jsx)(`path`, {
            d: `M40 5v70M10 22l60 36M10 58l60-36M28 12l12 12 12-12M28 68l12-12 12 12M10 36l16-4-4-16M58 64l-4-16 16-4M10 44l16 4-4 16M58 16l-4 16 16 4M40 27l12 13-12 13-12-13Z`,
          }),
        }),
        (0, Q.jsx)(`symbol`, {
          id: `arc-lightning`,
          viewBox: `0 0 80 80`,
          children: (0, Q.jsx)(`path`, {
            d: `M48 6 19 43h19L30 75l33-44H43ZM19 15l6 8M61 58l6 9M7 42h9M63 13l-6 9M11 66l10-8M66 40h9`,
          }),
        }),
        (0, Q.jsxs)(`symbol`, {
          id: `arc-void`,
          viewBox: `0 0 80 80`,
          children: [
            (0, Q.jsx)(`path`, {
              d: `M5 40Q40 0 75 40 40 80 5 40ZM40 3v9M40 68v9M14 12l7 9M66 12l-7 9M14 68l7-9M66 68l-7-9`,
            }),
            (0, Q.jsx)(`ellipse`, { cx: `40`, cy: `40`, rx: `11`, ry: `25` }),
            (0, Q.jsx)(`circle`, { cx: `40`, cy: `40`, r: `5` }),
          ],
        }),
        (0, Q.jsx)(`symbol`, {
          id: `arc-aether`,
          viewBox: `0 0 80 80`,
          children: (0, Q.jsx)(`path`, {
            d: `m40 5 22 35-22 35L18 40ZM40 5v70M18 40h44M9 17l10 8M71 17l-10 8M9 63l10-8M71 63l-10-8M40 24l10 16-10 16-10-16Z`,
          }),
        }),
        (0, Q.jsx)(`symbol`, {
          id: `arc-strength`,
          viewBox: `0 0 80 80`,
          children: (0, Q.jsx)(`path`, {
            d: `M40 7 65 18v27c0 14-25 28-25 28S15 59 15 45V18ZM40 17v44M28 31h24M26 53l14-13 14 13`,
          }),
        }),
        (0, Q.jsx)(`symbol`, {
          id: `arc-mana`,
          viewBox: `0 0 80 80`,
          children: (0, Q.jsx)(`path`, {
            d: `M40 6C29 28 17 38 17 50a23 23 0 0 0 46 0C63 38 51 28 40 6ZM27 48c0 11 6 16 13 16M40 27v19M34 39l6 7 6-7`,
          }),
        }),
        (0, Q.jsx)(`symbol`, {
          id: `arc-agility`,
          viewBox: `0 0 80 80`,
          children: (0, Q.jsx)(`path`, {
            d: `M67 10C37 6 18 31 15 64c21-5 50-18 52-54ZM15 64l-6 9M22 58l28-31M30 50V34M42 38h14M36 43l-1-17`,
          }),
        }),
        (0, Q.jsx)(`symbol`, {
          id: `arc-lifeforce`,
          viewBox: `0 0 80 80`,
          children: (0, Q.jsx)(`path`, {
            d: `M40 72V24M40 52C10 53 11 27 11 27s27-2 29 25ZM40 37C66 38 69 12 69 12S42 11 40 37ZM26 73h28`,
          }),
        }),
        (0, Q.jsxs)(`symbol`, {
          id: `arc-warden`,
          viewBox: `0 0 80 80`,
          children: [
            (0, Q.jsx)(`path`, {
              d: `M14 66h52M20 66V30l20-19 20 19v36M32 66V44h16v22M13 31h54M40 3v9M33 8h14`,
            }),
            (0, Q.jsx)(`circle`, { cx: `40`, cy: `31`, r: `5` }),
          ],
        }),
        (0, Q.jsxs)(`symbol`, {
          id: `arc-heart`,
          viewBox: `0 0 80 80`,
          children: [
            (0, Q.jsx)(`path`, {
              d: `m40 3 9 27 28 10-28 9-9 28-9-28L3 40l28-10Z`,
            }),
            (0, Q.jsx)(`circle`, { cx: `40`, cy: `40`, r: `13` }),
            (0, Q.jsx)(`path`, { d: `m40 32 8 8-8 8-8-8Z` }),
          ],
        }),
      ],
    }),
  });
}
function P8({ name: e, ...t }) {
  return (0, Q.jsx)(`svg`, {
    viewBox: `0 0 80 80`,
    "aria-hidden": `true`,
    ...t,
    children: (0, Q.jsx)(`use`, { href: `#arc-${e}` }),
  });
}
function F8({ spell: e, ...t }) {
  let n = N8(e).glyph;
  return (0, Q.jsx)(`svg`, {
    viewBox: `0 0 80 80`,
    "aria-hidden": `true`,
    ...t,
    children:
      e.kind === `nova`
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(`circle`, { cx: `40`, cy: `40`, r: `29` }),
              (0, Q.jsx)(`circle`, {
                cx: `40`,
                cy: `40`,
                r: `22`,
                strokeDasharray: `2 6`,
              }),
              (0, Q.jsx)(`use`, {
                href: `#arc-${n}`,
                x: `25`,
                y: `25`,
                width: `30`,
                height: `30`,
              }),
            ],
          })
        : e.kind === `strike`
          ? e.id === `meteor`
            ? (0, Q.jsxs)(Q.Fragment, {
                children: [
                  (0, Q.jsx)(`path`, {
                    d: `M19 53 57 8M29 58 69 16M36 63 74 27M12 43 42 5`,
                  }),
                  (0, Q.jsx)(`circle`, { cx: `22`, cy: `57`, r: `14` }),
                  (0, Q.jsx)(`path`, { d: `m15 55 10-7 6 11-9 8-7-12` }),
                ],
              })
            : (0, Q.jsx)(`path`, {
                d: `m47 4-26 34h20l-8 23 29-35H42ZM12 66l10-10M68 66 58 56M40 68v9M7 76h66`,
              })
          : e.kind === `chain`
            ? (0, Q.jsx)(`path`, {
                d: `m43 5-20 32h21L30 75l26-39H36ZM24 36l-14 12 10 9-14 13M52 37l18-12-8-9 11-11`,
              })
            : e.kind === `rift`
              ? (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    (0, Q.jsx)(`ellipse`, {
                      cx: `40`,
                      cy: `40`,
                      rx: `23`,
                      ry: `34`,
                    }),
                    (0, Q.jsx)(`ellipse`, {
                      cx: `40`,
                      cy: `40`,
                      rx: `14`,
                      ry: `28`,
                    }),
                    (0, Q.jsx)(`use`, {
                      href: `#arc-${n}`,
                      x: `29`,
                      y: `25`,
                      width: `22`,
                      height: `30`,
                    }),
                    (0, Q.jsx)(`path`, {
                      d: `M7 21 16 29M64 50l9 8M8 59l9-9M63 29l9-8`,
                    }),
                  ],
                })
              : e.kind === `drain`
                ? (0, Q.jsx)(`path`, {
                    d: `M40 68C-8 34 19 9 40 30 61 9 88 34 40 68ZM40 36v19M29 45h22M40 4v12M9 12l9 9M71 12l-9 9`,
                  })
                : e.kind === `swing`
                  ? (0, Q.jsx)(`path`, {
                      d: `M12 64C16 32 40 12 70 12M20 68C26 42 46 26 70 24M28 72C36 52 52 40 70 36M62 4l10 8-8 10`,
                    })
                  : e.kind === `guard`
                    ? (0, Q.jsx)(`use`, { href: `#arc-strength` })
                    : e.kind === `ward`
                      ? (0, Q.jsxs)(Q.Fragment, {
                          children: [
                            (0, Q.jsx)(`path`, {
                              d: `M8 62a32 32 0 0 1 64 0M4 62h72M16 62a24 24 0 0 1 48 0`,
                              strokeDasharray: `3 5`,
                            }),
                            (0, Q.jsx)(`use`, {
                              href: `#arc-${n}`,
                              x: `27`,
                              y: `30`,
                              width: `26`,
                              height: `26`,
                            }),
                          ],
                        })
                      : (0, Q.jsx)(`use`, { href: `#arc-${n}` }),
  });
}
function nce({ spell: e }) {
  let t = N8(e);
  return (0, Q.jsxs)(`div`, {
    className: `arc-diagram`,
    children: [
      (0, Q.jsxs)(`svg`, {
        viewBox: `0 0 480 196`,
        "aria-hidden": `true`,
        children: [
          (0, Q.jsxs)(`g`, {
            opacity: `.35`,
            children: [
              (0, Q.jsx)(`circle`, { cx: `240`, cy: `98`, r: `78` }),
              (0, Q.jsx)(`circle`, { cx: `240`, cy: `98`, r: `72` }),
              Array.from({ length: 48 }, (e, t) => {
                let n = (t * Math.PI) / 24;
                return (0, Q.jsx)(
                  `path`,
                  {
                    d: `M${240 + Math.cos(n) * 80} ${98 + Math.sin(n) * 80}L${240 + Math.cos(n) * (t % 4 == 0 ? 90 : 84)} ${98 + Math.sin(n) * (t % 4 == 0 ? 90 : 84)}`,
                  },
                  t,
                );
              }),
              (0, Q.jsx)(`path`, {
                d: `M101 98h50M329 98h50M240 4v12M240 180v12M170 28l140 140M310 28 170 168`,
                strokeDasharray: `2 4`,
              }),
            ],
          }),
          (0, Q.jsx)(F8, {
            spell: e,
            x: `190`,
            y: `48`,
            width: `100`,
            height: `100`,
          }),
          (0, Q.jsxs)(`g`, {
            opacity: `.5`,
            children: [
              (0, Q.jsx)(`path`, {
                d: `M115 47h35m-28 5h19M332 145h36m-31 5h22M104 124l48-12M335 77l39-12`,
              }),
              (0, Q.jsx)(`circle`, { cx: `106`, cy: `125`, r: `2` }),
              (0, Q.jsx)(`circle`, { cx: `374`, cy: `65`, r: `2` }),
            ],
          }),
        ],
      }),
      (0, Q.jsx)(`span`, { children: t.caption }),
    ],
  });
}
