// index-BTsv3a2s 248 — children
// Lines 161304-161674 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function $ce({ s: e, setVolume: t, touched: n }) {
  let { map: r, binds: i } = a5(),
    a = J8(),
    o = ui(r.chat),
    [s, c] = (0, v.useState)(null),
    l = (e) => {
      (c(e.ok ? null : e.error), e.ok || q.sfx(`click`, 0.4));
    },
    u = (e) => l(IG(e));
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsxs)(`section`, {
        children: [
          (0, Q.jsx)(`h3`, { children: `Sound` }),
          Rce.map(({ field: r, label: i }) => {
            let a = `st-${r}`,
              o = Math.round(e[r] * 100);
            return (0, Q.jsxs)(
              `div`,
              {
                className: `st-row`,
                children: [
                  (0, Q.jsx)(`label`, { htmlFor: a, children: i }),
                  (0, Q.jsx)(`input`, {
                    id: a,
                    type: `range`,
                    min: 0,
                    max: 100,
                    step: 5,
                    value: o,
                    onChange: (e) => {
                      (t(r, Number(e.target.value) / 100),
                        r !== `music` && (n.current = r));
                    },
                    onKeyUp: (e) => {
                      Gce.has(e.key) &&
                        ((n.current = null),
                        r !== `music` && q.sfx(`chime`, 0.6));
                    },
                  }),
                  (0, Q.jsxs)(`span`, {
                    className: `st-pct`,
                    children: [o, `%`],
                  }),
                ],
              },
              r,
            );
          }),
          (0, Q.jsxs)(`label`, {
            className: `st-check`,
            children: [
              (0, Q.jsx)(`input`, {
                type: `checkbox`,
                checked: e.muted,
                onChange: () => yl({ muted: !e.muted }),
              }),
              `Mute all`,
              !GG &&
                (0, Q.jsxs)(`small`, {
                  className: `st-key`,
                  children: [`[`, Bi(oG(`mute`)), `]`],
                }),
            ],
          }),
        ],
      }),
      (0, Q.jsxs)(`section`, {
        children: [
          (0, Q.jsx)(`h3`, { children: `Screen` }),
          (0, Q.jsxs)(`div`, {
            className: `st-row st-shake`,
            children: [
              (0, Q.jsx)(`span`, {
                id: `st-shake-label`,
                children: `Screen shake`,
              }),
              (0, Q.jsx)(`div`, {
                className: `st-seg`,
                role: `radiogroup`,
                "aria-labelledby": `st-shake-label`,
                children: kc.map((t) =>
                  (0, Q.jsxs)(
                    `label`,
                    {
                      className: e.shake === t ? `on` : ``,
                      children: [
                        (0, Q.jsx)(`input`, {
                          type: `radio`,
                          name: `st-shake`,
                          value: t,
                          checked: e.shake === t,
                          onChange: () => yl({ shake: t }),
                        }),
                        zce[t],
                      ],
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
          (0, Q.jsxs)(`label`, {
            className: `st-check`,
            children: [
              (0, Q.jsx)(`input`, {
                type: `checkbox`,
                checked: e.lootLabels,
                onChange: () => yl({ lootLabels: !e.lootLabels }),
              }),
              `Loot labels`,
              !GG &&
                (0, Q.jsx)(`small`, { className: `st-key`, children: `[Alt]` }),
            ],
          }),
        ],
      }),
      (0, Q.jsxs)(`section`, {
        children: [
          (0, Q.jsx)(`h3`, { children: `Text` }),
          (0, Q.jsxs)(`div`, {
            className: `st-row st-text`,
            children: [
              (0, Q.jsx)(`span`, {
                id: `st-text-label`,
                children: `Text size`,
              }),
              (0, Q.jsx)(`div`, {
                className: `st-seg`,
                role: `radiogroup`,
                "aria-labelledby": `st-text-label`,
                children: Lc.map((t) =>
                  (0, Q.jsxs)(
                    `label`,
                    {
                      className: e.textSize === t ? `on` : ``,
                      children: [
                        (0, Q.jsx)(`input`, {
                          type: `radio`,
                          name: `st-text`,
                          value: t,
                          checked: e.textSize === t,
                          onChange: () => yl({ textSize: t }),
                        }),
                        Uce[t],
                      ],
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
          (0, Q.jsxs)(`label`, {
            className: `st-check`,
            children: [
              (0, Q.jsx)(`input`, {
                type: `checkbox`,
                checked: e.readableFont,
                onChange: () => yl({ readableFont: !e.readableFont }),
              }),
              `Readable font`,
              (0, Q.jsx)(`small`, {
                className: `st-key`,
                children: `clearer letters; titles stay pixel`,
              }),
            ],
          }),
        ],
      }),
      (0, Q.jsxs)(`section`, {
        children: [
          (0, Q.jsx)(`h3`, { children: `Chat` }),
          !GG &&
            (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `st-row st-pick`,
                  children: [
                    (0, Q.jsx)(`span`, {
                      id: `st-chatkey-label`,
                      children: `Open chat with`,
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `st-seg`,
                      role: `radiogroup`,
                      "aria-labelledby": `st-chatkey-label`,
                      children: ci.map((e) =>
                        (0, Q.jsxs)(
                          `label`,
                          {
                            className: o === e ? `on` : ``,
                            children: [
                              (0, Q.jsx)(`input`, {
                                type: `radio`,
                                name: `st-chatkey`,
                                value: e,
                                checked: o === e,
                                onChange: () => u(e),
                              }),
                              Zi[e],
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, Q.jsx)(`p`, {
                  className: `st-note ${s ? `bad` : ``}`,
                  "aria-live": `polite`,
                  children:
                    s ??
                    `${o ? Wce[o] : `${r.chat.filter(Boolean).map(Bi).join(` or `)} opens it (moved in Controls).`} A click on the box always opens it.`,
                }),
              ],
            }),
          (0, Q.jsxs)(`label`, {
            className: `st-check`,
            children: [
              (0, Q.jsx)(`input`, {
                type: `checkbox`,
                checked: e.chatNews,
                onChange: () => yl({ chatNews: !e.chatNews }),
              }),
              `Realm news in chat`,
              (0, Q.jsx)(`small`, {
                className: `st-key`,
                children: `joins, levels, rites; lines naming you stay`,
              }),
            ],
          }),
          (0, Q.jsxs)(`label`, {
            className: `st-check`,
            children: [
              (0, Q.jsx)(`input`, {
                type: `checkbox`,
                checked: e.chatDim,
                onChange: () => yl({ chatDim: !e.chatDim }),
              }),
              `Dim chat when idle`,
            ],
          }),
          (0, Q.jsx)(Qce, { list: e.ignored }),
        ],
      }),
      (0, Q.jsxs)(`section`, {
        children: [
          (0, Q.jsx)(`h3`, { children: `Quest guidance` }),
          (0, Q.jsxs)(`label`, {
            className: `st-check`,
            children: [
              (0, Q.jsx)(`input`, {
                type: `checkbox`,
                checked: e.guide,
                onChange: () => yl({ guide: !e.guide }),
              }),
              `Glow and arrow toward your quest`,
            ],
          }),
          (0, Q.jsxs)(`label`, {
            className: `st-check st-sub${e.guide ? `` : ` off`}`,
            children: [
              (0, Q.jsx)(`input`, {
                type: `checkbox`,
                disabled: !e.guide,
                checked: e.guideArrow,
                onChange: () => yl({ guideArrow: !e.guideArrow }),
              }),
              `Arrow at your mage's feet`,
            ],
          }),
          (0, Q.jsxs)(`label`, {
            className: `st-check st-sub${e.guide ? `` : ` off`}`,
            children: [
              (0, Q.jsx)(`input`, {
                type: `checkbox`,
                disabled: !e.guide,
                checked: e.guideHideInCombat,
                onChange: () => yl({ guideHideInCombat: !e.guideHideInCombat }),
              }),
              `Hide while fighting`,
            ],
          }),
          (0, Q.jsx)(`p`, {
            className: `st-note`,
            children: `Toward the quest you track in the Journal: the glow and arrow while it's off screen, the arrow at your feet until you're close. Fighting means a blow given or taken, or a creature's attack aimed near you, in the last 6 s.`,
          }),
        ],
      }),
      (0, Q.jsxs)(`section`, {
        children: [
          (0, Q.jsx)(`h3`, { children: `Casting` }),
          (0, Q.jsxs)(`label`, {
            className: `st-check`,
            children: [
              (0, Q.jsx)(`input`, {
                type: `checkbox`,
                checked: e.holdBlink,
                onChange: () => yl({ holdBlink: !e.holdBlink }),
              }),
              `Hold Blink to stretch it`,
              !GG &&
                i[QW] &&
                (0, Q.jsxs)(`small`, {
                  className: `st-key`,
                  children: [`[`, Bi(i[QW]), `]`],
                }),
            ],
          }),
          (0, Q.jsxs)(`p`, {
            className: `st-note`,
            children: [
              `Tap to step; hold to reach further, up to `,
              1 + le.stretch,
              `× as far after `,
              le.chargeSecs,
              ` s`,
              GG ? ` (a little longer on a phone)` : ``,
              `, and the cooldown stretches with it. Off, Blink goes on the press.`,
            ],
          }),
          (0, Q.jsxs)(`label`, {
            className: `st-check`,
            children: [
              (0, Q.jsx)(`input`, {
                type: `checkbox`,
                checked: e.autoAim,
                onChange: () => yl({ autoAim: !e.autoAim }),
              }),
              `Auto-aim`,
            ],
          }),
          (0, Q.jsx)(`p`, {
            className: `st-note`,
            children: GG
              ? `Spell buttons find the nearest foe the way you're heading; off, they cast along the stick. A tap on the world still aims by hand.`
              : `Keys and clicks go to the foe under the cursor, or the nearest one along its line; Blink keeps its own aim.`,
          }),
          (a.connected || e.padAim !== `ask`) &&
            (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsxs)(`label`, {
                  className: `st-check`,
                  children: [
                    (0, Q.jsx)(`input`, {
                      type: `checkbox`,
                      checked: e.padAim === `on`,
                      onChange: () =>
                        yl({ padAim: e.padAim === `on` ? `off` : `on` }),
                    }),
                    `Controller aim assist`,
                  ],
                }),
                (0, Q.jsxs)(`p`, {
                  className: `st-note`,
                  children: [
                    `Spells find the nearest foe the way you move or aim; the right stick still aims by hand.`,
                    a.connected ? ` ${lX[a.family]} buttons.` : ``,
                  ],
                }),
              ],
            }),
        ],
      }),
      (0, Q.jsx)(D5, { onReset: () => l(LG()) }),
    ],
  });
}
