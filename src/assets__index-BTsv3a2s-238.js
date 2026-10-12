// assets__index-BTsv3a2s 238 — children
// Lines 158013-158245 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Z8({ aws: e, homes: t }) {
  let n = _l().padAim === `on`;
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsxs)(X8, {
        b: [`L3`],
        children: [
          `left stick: move`,
          e ? `; click it in while you walk to sprint` : ``,
        ],
      }),
      (0, Q.jsxs)(X8, {
        b: [`R3`],
        children: [
          `right stick: aim; aim assist is `,
          n ? `on` : `off`,
          ` (Settings → Casting). Click it in: the menu of the mage it points at`,
        ],
      }),
      (0, Q.jsx)(X8, {
        b: [`RT`, `LT`, `RB`, `LB`],
        children: `hotbar slots 1–4, hold to keep casting`,
      }),
      (0, Q.jsx)(X8, { b: [`Y`], children: `the other page: slots 5–8` }),
      (0, Q.jsx)(X8, {
        b: [`B`],
        children: `Blink (hold to stretch it); walk away from a conversation; skip a scene; put the chat box away`,
      }),
      (0, Q.jsxs)(X8, {
        b: [`A`],
        children: [
          `talk, look, use`,
          t ? `, trade with a shopkeeper who has no quest for you` : ``,
          `; the next line`,
        ],
      }),
      (0, Q.jsxs)(X8, {
        b: [`X`],
        children: [
          `the Chorus Road at an altar or the Crystal`,
          t ? `, the shop you stand in` : ``,
          e ? `, else Hearthsong` : ``,
        ],
      }),
      (0, Q.jsxs)(X8, {
        b: [`UP`, `DOWN`, `LEFT`, `RIGHT`],
        children: [
          `Journal, Satchel, Spellbook`,
          t ? `, Homestead` : ``,
          `; Up takes you to a dungeon's Echoes`,
          e ? `, or a party invitation` : ``,
        ],
      }),
      (0, Q.jsxs)(X8, {
        b: [`MENU`, `VIEW`],
        children: [
          `the game menu (with `,
          e ? `Party and ` : ``,
          `Settings), Help`,
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `pad-line`,
        children: [
          `In a panel: the d-pad or the left stick moves the highlight, `,
          (0, Q.jsx)(Y8, { b: `A` }),
          ` presses it, `,
          (0, Q.jsx)(Y8, { b: `B` }),
          ` backs out.`,
        ],
      }),
    ],
  });
}
function mce({
  aws: e,
  homes: t,
  muted: n,
  onMute: r,
  onSettings: i,
  onSkipTutorial: a,
  onClose: o,
}) {
  let [s, c] = (0, v.useState)(!1),
    l = (e) => () => {
      (o(), e());
    };
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsx)(`b`, { children: `Controller` }),
      (0, Q.jsx)(Z8, { aws: e, homes: t }),
      (0, Q.jsxs)(`div`, {
        className: `pad-help-actions`,
        children: [
          t &&
            (0, Q.jsx)(`button`, {
              type: `button`,
              className: `link-btn`,
              onClick: l(() => XG(`provisions`)),
              children: `Provisions`,
            }),
          (0, Q.jsx)(`button`, {
            type: `button`,
            className: `link-btn`,
            onClick: l(() => XG(`stance`)),
            children: `Bare or veil`,
          }),
          (0, Q.jsx)(`button`, {
            type: `button`,
            className: `link-btn`,
            onClick: l(r),
            children: n ? `Unmute audio` : `Mute audio`,
          }),
          (0, Q.jsx)(`button`, {
            type: `button`,
            className: `link-btn`,
            onClick: l(i),
            children: `Settings`,
          }),
          a &&
            (s
              ? (0, Q.jsxs)(`span`, {
                  className: `objective-skip`,
                  children: [
                    `Skip the rest of the tutorial?`,
                    ` `,
                    (0, Q.jsx)(`button`, {
                      type: `button`,
                      className: `link-btn danger`,
                      onClick: l(a),
                      children: `Skip`,
                    }),
                    ` `,
                    (0, Q.jsx)(`button`, {
                      type: `button`,
                      className: `link-btn`,
                      "data-pad-first": !0,
                      onClick: () => c(!1),
                      children: `Stay`,
                    }),
                  ],
                })
              : (0, Q.jsx)(`button`, {
                  type: `button`,
                  className: `link-btn`,
                  onClick: () => c(!0),
                  children: `Skip tutorial`,
                })),
        ],
      }),
    ],
  });
}
var hce = { heart: `#ffd98a`, warden: `#e8d9a0` },
  gce = [
    `heart`,
    ...new Set(Hu.nodes.map((e) => e.region).filter((e) => e !== `heart`)),
  ];
function Q8(e) {
  return hce[e] ?? Au[e]?.color ?? `#c9c1d9`;
}
var _ce = {
  fire: `Pyromancy`,
  frost: `Cryomancy`,
  lightning: `Stormcalling`,
  void: `Voidweaving`,
  warden: `The Warden`,
};
function $8(e) {
  return (
    _ce[e] ??
    Au[e]?.name ??
    (e === `heart` ? `The Heart` : e === `bridge` ? `A bridge` : `A crossing`)
  );
}
var vce = [...Tu, `warden`].flatMap((e) => {
    let t = Hu.nodes.filter((t) => t.region === e);
    if (!t.length) return [];
    let n = t.reduce((e, t) => e + t.x, 0) / t.length,
      r = t.reduce((e, t) => e + t.y, 0) / t.length,
      i = t.reduce((e, t) =>
        Math.hypot(t.x, t.y) > Math.hypot(e.x, e.y) ? t : e,
      );
    return [
      {
        region: e,
        name: $8(e),
        color: Q8(e),
        a: Math.atan2(r, n),
        far: Math.hypot(i.x, i.y),
        end: i.id,
        ex: i.x,
        ey: i.y,
      },
    ];
  }),
  yce = 50,
  bce = 40,
  e5 = { x: 70, y: 14 },
  xce = 8;
function t5(e, t) {
  return e <= t
    ? null
    : t > 0
      ? `That road takes ${e} points; you have ${t}.`
      : `No passive points left.`;
}
function n5(e, t) {
  let n = new Set([Nu, ...e]);
  if (n.has(t)) return [];
  let r = new Map(),
    i = [];
  for (let e of n) (r.set(e, null), i.push(e));
  for (; i.length;) {
    let e = i.shift();
    if (e === t) break;
    for (let t of Ku(e)) r.has(t) || (r.set(t, e), i.push(t));
  }
  if (!r.has(t)) return null;
  let a = [];
  for (let e = t; e && !n.has(e); e = r.get(e) ?? null) a.unshift(e);
  return a;
}
var r5 = (e) =>
  e instanceof Error
    ? e.message.replace(/^.*Uncaught (Convex)?Error: /, ``).split(`
`)[0]
    : String(e);
function i5(e, t) {
  let n = e.getBoundingClientRect(),
    r = n.width > 0 ? e.clientWidth / n.width : 1;
  return { x: (t.clientX - n.left) * r, y: (t.clientY - n.top) * r };
}
