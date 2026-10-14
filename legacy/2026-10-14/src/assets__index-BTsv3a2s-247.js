// assets__index-BTsv3a2s 247 — children
// Lines 161142-161303 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Zce({ s: e, status: t }) {
  let n = e.fxQuality === `off`,
    r = Math.round(e.fxParticles * 100);
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsxs)(`section`, {
        role: `tabpanel`,
        "aria-label": `Graphics`,
        children: [
          (0, Q.jsx)(`h3`, { children: `World` }),
          (0, Q.jsx)(T5, {
            name: `renderer`,
            label: `Renderer`,
            values: Pc,
            names: S5,
            value: e.renderer,
            onPick: (e) => yl({ renderer: e }),
          }),
          (0, Q.jsx)(`p`, {
            className: `st-gfxnote`,
            children: Yce(e.renderer),
          }),
          (0, Q.jsx)(`h3`, { className: `st-gap`, children: `3D effects` }),
          (0, Q.jsx)(T5, {
            name: `quality`,
            label: `Quality`,
            values: Ac,
            names: Bce,
            value: e.fxQuality,
            onPick: (e) => yl({ fxQuality: e }),
          }),
          (0, Q.jsx)(`p`, { className: `st-gfxnote`, children: Jce(e, t) }),
          (0, Q.jsxs)(`div`, {
            className: n ? `st-dim` : ``,
            children: [
              (0, Q.jsx)(T5, {
                name: `aa`,
                label: `Anti-aliasing`,
                values: jc,
                names: Hce,
                value: e.fxAA,
                onPick: (e) => yl({ fxAA: e }),
              }),
              (0, Q.jsxs)(`div`, {
                className: `st-row`,
                children: [
                  (0, Q.jsx)(`label`, {
                    htmlFor: `st-particles`,
                    children: `Particles`,
                  }),
                  (0, Q.jsx)(`input`, {
                    id: `st-particles`,
                    type: `range`,
                    min: Nc * 100,
                    max: 100,
                    step: 5,
                    value: r,
                    onChange: (e) =>
                      yl({ fxParticles: Number(e.target.value) / 100 }),
                  }),
                  (0, Q.jsxs)(`span`, {
                    className: `st-pct`,
                    children: [r, `%`],
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `st-checks`,
                children: [
                  (0, Q.jsx)(E5, {
                    checked: e.fxGlow,
                    label: `Glow`,
                    onToggle: () => yl({ fxGlow: !e.fxGlow }),
                  }),
                  (0, Q.jsx)(E5, {
                    checked: e.fxLight,
                    label: `Light on the world`,
                    onToggle: () => yl({ fxLight: !e.fxLight }),
                  }),
                  (0, Q.jsx)(E5, {
                    checked: e.fxHaze,
                    label: `Heat haze`,
                    onToggle: () => yl({ fxHaze: !e.fxHaze }),
                  }),
                  (0, Q.jsx)(E5, {
                    checked: e.fxFringe,
                    label: `Lens fringe`,
                    onToggle: () => yl({ fxFringe: !e.fxFringe }),
                  }),
                ],
              }),
              (0, Q.jsx)(`small`, {
                className: `st-help`,
                children: `Auto picks by your GPU and steps down by itself when frames run slow. Whatever the boxes say, Low drops Heat haze and Lens fringe, and Minimal Glow too. Under HD-2D, Anti-aliasing smooths the world's edges too.`,
              }),
            ],
          }),
          (0, Q.jsx)(`h3`, { className: `st-gap`, children: `Display` }),
          (0, Q.jsx)(E5, {
            checked: e.showFps,
            label: `Show FPS`,
            onToggle: () => yl({ showFps: !e.showFps }),
          }),
        ],
      }),
      (0, Q.jsx)(D5, { onReset: () => void LG() }),
    ],
  });
}
function D5({ onReset: e }) {
  return (0, Q.jsxs)(`div`, {
    className: `st-foot`,
    children: [
      !GG && (0, Q.jsx)(`small`, { children: `Esc: back` }),
      (0, Q.jsx)(`button`, {
        type: `button`,
        className: `link-btn`,
        title: `Keeps the chat box's channel, your other keys and the mages you ignore`,
        onClick: e,
        children: `Reset to defaults`,
      }),
    ],
  });
}
function Qce({ list: e }) {
  return (0, Q.jsxs)(`div`, {
    className: `st-ignored`,
    children: [
      (0, Q.jsx)(`span`, { id: `st-ignored-label`, children: `Ignored mages` }),
      e.length
        ? (0, Q.jsx)(`ul`, {
            "aria-labelledby": `st-ignored-label`,
            children: e.map((e) =>
              (0, Q.jsxs)(
                `li`,
                {
                  children: [
                    (0, Q.jsx)(`span`, { className: `st-iname`, children: e }),
                    (0, Q.jsx)(`button`, {
                      type: `button`,
                      className: `link-btn`,
                      "aria-label": `Unignore ${e}`,
                      onClick: () => yl({ ignored: Js(_l().ignored, e) }),
                      children: `Unignore`,
                    }),
                  ],
                },
                e,
              ),
            ),
          })
        : (0, Q.jsxs)(`p`, {
            className: `st-note`,
            children: [
              `No one. `,
              GG ? `Tap` : `Click`,
              ` a mage's name over their head for Ignore; their words, whispers and bubbles then don't show here.`,
            ],
          }),
    ],
  });
}
