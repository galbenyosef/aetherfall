// index-BTsv3a2s 287 — children
// Lines 174989-175208 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Hde({ id: e, school: t, hero: n, art: r }) {
  let i = (0, v.useRef)(null);
  return (
    (0, v.useEffect)(() => {
      let a = i.current,
        o =
          r === `hero` || (!r && e === `hero`)
            ? (GK(AK(t, n ?? `m`)) ?? ng(`hero`, t))
            : r
              ? (jre(r) ?? rR(r))
              : (Mre(e) ?? ng(e, t));
      ((a.width = o.width * 4), (a.height = o.height * 4));
      let s = a.getContext(`2d`);
      ((s.imageSmoothingEnabled = !1), s.drawImage(o, 0, 0, a.width, a.height));
    }, [e, t, n, r]),
    (0, Q.jsx)(`canvas`, { ref: i, className: `pixel` })
  );
}
function Ude({ dialogue: e, school: t, hero: n, onAdvance: r, onPick: i }) {
  let a = e.voice,
    o = a
      ? { name: a.name, title: a.title, color: a.color, portrait: `crystal` }
      : yZ[e.speaker],
    s = J8();
  return (0, Q.jsxs)(`div`, {
    className: `dialogue ${a ? `folk` : e.speaker}`,
    style: { "--accent": o.color },
    onMouseDown: r,
    children: [
      (0, Q.jsx)(`div`, {
        className: `dialogue-portrait`,
        children: (0, Q.jsx)(Hde, {
          id: o.portrait,
          school: t,
          hero: n,
          art: a?.art,
        }),
      }),
      (0, Q.jsxs)(`div`, {
        className: `dialogue-body`,
        children: [
          o.name
            ? (0, Q.jsxs)(`div`, {
                className: `dialogue-name`,
                children: [
                  o.name,
                  ` `,
                  (0, Q.jsx)(`small`, { children: o.title }),
                ],
              })
            : null,
          (0, Q.jsx)(`p`, { children: e.text }),
          e.choices
            ? (0, Q.jsx)(`div`, {
                className: `dialogue-choices`,
                children: e.choices.map((e, t) =>
                  (0, Q.jsxs)(
                    `button`,
                    {
                      className: `dialogue-choice`,
                      onMouseDown: (e) => {
                        (e.stopPropagation(), i(t));
                      },
                      children: [(0, Q.jsx)(`b`, { children: t + 1 }), e],
                    },
                    t,
                  ),
                ),
              })
            : (0, Q.jsx)(`span`, {
                className: `dialogue-next ${e.full ? `ready` : ``}`,
                children: e.full
                  ? s.device === `pad`
                    ? `▼ ${pX(`A`, s.family)}`
                    : GG
                      ? `▼ Tap`
                      : `▼ Space`
                  : ``,
              }),
        ],
      }),
    ],
  });
}
function Wde({ objective: e, onSkip: t }) {
  let [n, r] = (0, v.useState)(!1),
    i = J8();
  return (0, Q.jsxs)(
    `div`,
    {
      className: `objective panel`,
      children: [
        (0, Q.jsx)(`div`, {
          className: `objective-head`,
          children: `Prologue · The Night of Keys`,
        }),
        (0, Q.jsxs)(`div`, {
          className: `objective-text`,
          children: [
            (0, Q.jsx)(`span`, { className: `diamond`, children: `◆` }),
            ` `,
            mZ(e.text, i),
            e.total
              ? (0, Q.jsxs)(`b`, {
                  children: [` `, `(`, e.count ?? 0, `/`, e.total, `)`],
                })
              : null,
          ],
        }),
        n
          ? (0, Q.jsxs)(`div`, {
              className: `objective-skip`,
              children: [
                `Skip the rest of the tutorial?`,
                ` `,
                (0, Q.jsx)(`button`, {
                  className: `link-btn danger`,
                  onClick: t,
                  children: `Skip`,
                }),
                ` `,
                (0, Q.jsx)(`button`, {
                  className: `link-btn`,
                  onClick: () => r(!1),
                  children: `Stay`,
                }),
              ],
            })
          : (0, Q.jsx)(`button`, {
              className: `link-btn objective-skip`,
              onClick: () => r(!0),
              children: `Skip tutorial`,
            }),
      ],
    },
    e.text,
  );
}
function q9({ value: e, max: t, className: n, label: r }) {
  let i = Math.max(0, Math.min(100, (e / Math.max(1, t)) * 100));
  return (0, Q.jsxs)(`div`, {
    className: `bar ${n}`,
    children: [
      (0, Q.jsx)(`div`, { className: `bar-fill`, style: { width: `${i}%` } }),
      (0, Q.jsx)(`span`, {
        className: `bar-label`,
        children: r ?? `${Math.ceil(e)} / ${Math.round(t)}`,
      }),
    ],
  });
}
function Gde({ hud: e, name: t, school: n, hero: r }) {
  return (0, Q.jsxs)(`div`, {
    className: `player-frame panel`,
    style: { "--accent": S[n].colors.glow },
    children: [
      (0, Q.jsxs)(`div`, {
        className: `portrait`,
        children: [
          (0, Q.jsx)(fq, { school: n, hero: r, size: 2, walking: !1 }),
          (0, Q.jsx)(`span`, { className: `lvl`, children: e.level }),
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `frame-bars`,
        children: [
          (0, Q.jsxs)(`div`, {
            className: `frame-name`,
            children: [
              t,
              ` `,
              (0, Q.jsxs)(`small`, { children: [Ie(e.level), ` `, S[n].name] }),
            ],
          }),
          (0, Q.jsx)(q9, { value: e.hp, max: e.maxHp, className: `hp` }),
          (0, Q.jsx)(q9, { value: e.mana, max: e.maxMana, className: `mana` }),
          e.stamina &&
            (0, Q.jsx)(q9, {
              value: e.stamina.v,
              max: e.stamina.max,
              className: `stamina${e.stamina.v >= e.stamina.max ? ` full` : ``}${e.stamina.winded ? ` winded` : ``}`,
              label: ``,
            }),
          (0, Q.jsx)(q9, {
            value: e.xp,
            max: e.xpNext,
            className: `xp`,
            label: (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(`span`, { children: `XP ${e.xp} / ${e.xpNext}` }),
                (0, Q.jsx)(`span`, { children: ` · ${e.kills} slain` }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Kde({ target: e, myLevel: t, belowRite: n }) {
  let r = e.level - t;
  return (0, Q.jsxs)(`div`, {
    className: `target-frame panel ${e.boss ? `boss` : ``} ${n ? `below-rite` : ``}`,
    children: [
      (0, Q.jsxs)(`div`, {
        className: `frame-name`,
        children: [
          e.name,
          ` `,
          (0, Q.jsxs)(`small`, {
            style: { color: Ep(r) },
            title: r > 0 ? `${r} level${r === 1 ? `` : `s`} above you` : void 0,
            children: [r > 5 ? `☠ ` : ``, `Lv `, e.level],
          }),
        ],
      }),
      (0, Q.jsx)(q9, { value: e.hp, max: e.maxHp, className: `hp enemy` }),
    ],
  });
}
