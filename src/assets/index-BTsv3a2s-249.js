// index-BTsv3a2s 249 — children
// Lines 161675-161814 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var ele = new Set([
  `up`,
  `down`,
  `left`,
  `right`,
  `sprint`,
  `settings`,
  `mute`,
]);
function tle({
  homes: e,
  onClose: t,
  onParty: n,
  onSettings: r,
  onAtlas: i,
  onExit: a,
  onQuit: o,
}) {
  let [s, c] = (0, v.useState)(`main`),
    { muted: l } = x5(),
    u = J8().device === `pad`,
    d = (0, v.useRef)(s);
  d.current = s;
  let f = (0, v.useRef)(t);
  ((f.current = t),
    (0, v.useEffect)(() => {
      let e = (e) => {
        if (e.key !== `Escape`) {
          let t = CG(e);
          !(t && ele.has(t)) &&
            !e.ctrlKey &&
            !e.metaKey &&
            e.stopImmediatePropagation();
          return;
        }
        (e.preventDefault(),
          e.stopPropagation(),
          e.stopImmediatePropagation(),
          d.current === `main` ? f.current() : c(`main`),
          q.sfx(`click`, 0.5));
      };
      return (
        window.addEventListener(`keydown`, e, !0),
        () => window.removeEventListener(`keydown`, e, !0)
      );
    }, []));
  let p = (e, t, n = ``) =>
    (0, Q.jsx)(`button`, {
      type: `button`,
      className: `px-btn gm-btn ${n}`,
      onMouseDown: (e) => e.preventDefault(),
      onClick: () => {
        (q.sfx(`click`, 0.6), t());
      },
      children: e,
    });
  return (0, Q.jsx)(`div`, {
    className: `gm-backdrop`,
    onMouseDown: (e) => e.target === e.currentTarget && t(),
    children: (0, Q.jsxs)(`div`, {
      className: `gm-panel panel`,
      role: `dialog`,
      "aria-label": `Game menu`,
      onMouseDown: (e) => e.stopPropagation(),
      children: [
        s === `main` &&
          (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(`b`, { className: `gm-title`, children: `Game Menu` }),
              p(`Resume`, t, `primary`),
              i && p(`Atlas`, i),
              n && p(`Party`, n),
              p(`Settings`, r),
              p(`Controls`, () => c(`controls`)),
              a && p(`Change mage`, a),
              p(`Quit to title`, () => c(`quit`)),
              u
                ? (0, Q.jsxs)(`small`, {
                    className: `gm-hint`,
                    children: [
                      (0, Q.jsx)(Y8, { b: `B` }),
                      ` — back to the game`,
                    ],
                  })
                : !GG &&
                  (0, Q.jsx)(`small`, {
                    className: `gm-hint`,
                    children: `Esc — back to the game`,
                  }),
            ],
          }),
        s === `controls` &&
          (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(`b`, { className: `gm-title`, children: `Controls` }),
              (0, Q.jsxs)(`div`, {
                className: `gm-controls`,
                children: [
                  u
                    ? (0, Q.jsx)(Z8, { aws: WW.name === `aws`, homes: e })
                    : (0, Q.jsx)(o5, { touch: GG, muted: l }),
                  (0, Q.jsx)(`small`, {
                    children: `Inside the Lumen Ward is safe ground, and it heals you quickly. Outside it, other mages can fight you, and a mage they slay drops everything. Walk into a shop's door to go inside. A ! means someone has a quest for you, a ? that they're waiting to hear back: on a gold diamond for the story, a blue disc for a side quest.`,
                  }),
                ],
              }),
              p(`Back`, () => c(`main`)),
            ],
          }),
        s === `quit` &&
          (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(`b`, {
                className: `gm-title`,
                children: `Leave the realm?`,
              }),
              (0, Q.jsx)(`p`, {
                className: `gm-text`,
                children: `You'll go back to the title screen.`,
              }),
              p(`Quit to title`, o, `danger`),
              p(`Stay`, () => c(`main`)),
            ],
          }),
      ],
    }),
  });
}
var O5 = [
  {
    id: Rl.id,
    name: `The Aether Crystal`,
    x: Rl.x,
    y: Rl.y,
    region: `Marizon`,
    level: 1,
    lore: `The heart of the Chorus Road. Every journey has a way home.`,
  },
  ...Ll.map((e) => ({ ...Il[e], region: Rr[Il[e].region].name })),
];
