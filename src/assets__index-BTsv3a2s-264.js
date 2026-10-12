// assets__index-BTsv3a2s 264 — children
// Lines 166361-166653 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function sue({ cantor: e }) {
  return (0, Q.jsx)(`div`, {
    className: `rite-cantor`,
    children: (0, Q.jsx)(E7, {
      boss: {
        name: `Hollow Cantor`,
        title: `Level ${e.level}`,
        hp: e.hp,
        max: e.maxHp,
        shielded: !1,
        cast: e.staggered
          ? {
              label: `The song is broken`,
              k: 0,
              hint: `Staggered. Strike now.`,
            }
          : e.song === null
            ? {
                label: `Walking to the shard`,
                k: 0,
                hint: `When it reaches the altar it sings the Hollowing.`,
              }
            : {
                label: `Singing the Hollowing`,
                k: e.song,
                hint: `Deal 12% of its health inside one song to break it. If it finishes: −30 Resonance.`,
              },
      },
    }),
  });
}
function cue({ gift: e, onClose: t, onRoad: n }) {
  l5(t);
  let r = c5(t);
  (0, v.useEffect)(() => {
    let e = window.setTimeout(() => r.current(), 2e4);
    return () => window.clearTimeout(e);
  }, [e, r]);
  let i = Il[e.altar],
    a = Hl[e.grade in Hl ? e.grade : `steady`],
    o = e.best in _a ? e.best : null;
  return (0, Q.jsxs)(`div`, {
    className: `gift-panel panel`,
    onMouseDown: (e) => e.stopPropagation(),
    children: [
      (0, Q.jsxs)(`div`, {
        className: `gp-head`,
        children: [
          (0, Q.jsxs)(`span`, {
            className: `t`,
            children: [`The `, i.name, ` sings`],
          }),
          (0, Q.jsx)(`span`, {
            className: `grade`,
            style: { color: a.color, borderColor: a.color },
            children: a.name,
          }),
        ],
      }),
      e.first &&
        (0, Q.jsxs)(`div`, {
          className: `gp-att`,
          children: [
            (0, Q.jsx)(k7, { c: Kz(), scale: 2, className: `inline` }),
            ` Attuned. The road to the `,
            i.name,
            ` is open, and you'll rise here when you fall nearby.`,
          ],
        }),
      (0, Q.jsxs)(`p`, { className: `gp-line`, children: [`“`, a.line, `”`] }),
      (0, Q.jsxs)(`div`, {
        className: `gp-mats`,
        children: [
          (0, Q.jsxs)(`div`, {
            children: [
              (0, Q.jsx)(k7, { c: OY(`dust`), scale: 2 }),
              (0, Q.jsxs)(`b`, { children: [`+`, e.dust] }),
              (0, Q.jsxs)(`small`, {
                children: [
                  `Aether Dust`,
                  e.first ? ` · incl. 15 for attuning` : ``,
                ],
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            children: [
              (0, Q.jsx)(k7, { c: OY(`crowns`), scale: 2 }),
              (0, Q.jsxs)(`b`, { children: [`+`, e.crowns] }),
              (0, Q.jsx)(`small`, { children: `Crowns` }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            children: [
              (0, Q.jsx)(`span`, { className: `xp`, children: `XP` }),
              (0, Q.jsxs)(`b`, { children: [`+`, e.xp] }),
              (0, Q.jsx)(`small`, {
                children: e.first ? `first rite ×2` : `the rite`,
              }),
            ],
          }),
        ],
      }),
      (0, Q.jsxs)(`p`, {
        className: `gp-where`,
        children: [
          `The Altar's Gift lies at the altar's foot, for you alone`,
          o
            ? (0, Q.jsxs)(Q.Fragment, {
                children: [
                  ` `,
                  `(best: `,
                  (0, Q.jsx)(`b`, {
                    style: { color: _a[o].color },
                    children: _a[o].name,
                  }),
                  `)`,
                ],
              })
            : null,
          `.`,
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `gp-btns`,
        children: [
          (0, Q.jsx)(`button`, {
            className: `px-btn primary`,
            onClick: t,
            children: `Close`,
          }),
          (0, Q.jsx)(`button`, {
            className: `px-btn`,
            onClick: n,
            children: `Open the Chorus Road`,
          }),
        ],
      }),
    ],
  });
}
function lue({ to: e, k: t }) {
  return (0, Q.jsxs)(`div`, {
    className: `channel-bar panel`,
    children: [
      (0, Q.jsxs)(`span`, {
        children: [
          `Singing across to `,
          e === Rl.id ? `the Aether Crystal` : Il[e].name,
        ],
      }),
      (0, Q.jsx)(`div`, {
        children: (0, Q.jsx)(`i`, {
          style: { width: `${Math.round(t * 100)}%` },
        }),
      }),
    ],
  });
}
function uue({ k: e, onStop: t }) {
  a5();
  let n = J8().device === `pad`;
  return (0, Q.jsxs)(`div`, {
    className: `channel-bar panel hearth-bar`,
    children: [
      (0, Q.jsx)(`span`, {
        children: `Hearthsong · home to the Aether Crystal`,
      }),
      (0, Q.jsx)(`div`, {
        children: (0, Q.jsx)(`i`, {
          style: { width: `${Math.round(e * 100)}%` },
        }),
      }),
      (0, Q.jsx)(`button`, {
        type: `button`,
        className: `hb-stop`,
        onMouseDown: (e) => e.preventDefault(),
        onClick: t,
        children: n
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [`Stop `, (0, Q.jsx)(Y8, { b: `X` })],
            })
          : GG
            ? `Stop`
            : `Stop [${Bi(oG(`hearth`))}]`,
      }),
    ],
  });
}
var M7 = (e) => (e >= 60 ? `${Math.ceil(e / 60)}m` : `${e}s`);
function due({ hearth: e, onClick: t }) {
  let n = e.k != null,
    r = !n && e.cooldown > 0;
  a5();
  let i = J8().device === `pad`,
    a = Bi(oG(`hearth`)),
    o = n
      ? `Singing Hearthsong: ${a} or a click to stop`
      : (e.why ??
        `Hearthsong [${a}]: home to the Aether Crystal from anywhere. ${tu.hearthChannelSeconds} s; moving, casting or a blow breaks it. Once every ${tu.hearthCooldownSeconds / 60} minutes.`);
  return (0, Q.jsxs)(`div`, {
    className: `slot hearth ${n ? `singing` : r ? `cooling` : e.why ? `blocked` : ``}`,
    role: `button`,
    "aria-label": `Hearthsong`,
    title: o,
    onClick: t,
    children: [
      (0, Q.jsx)(k7, { c: Gz(), scale: 3 }),
      r &&
        (0, Q.jsx)(`div`, {
          className: `cd`,
          style: {
            "--cd": `${Math.min(1, e.cooldown / tu.hearthCooldownSeconds) * 360}deg`,
          },
        }),
      n &&
        (0, Q.jsx)(`div`, {
          className: `sing`,
          style: { height: `${Math.round((e.k ?? 0) * 100)}%` },
        }),
      (0, Q.jsx)(`span`, {
        className: `key`,
        children: i ? (0, Q.jsx)(Y8, { b: `X` }) : a,
      }),
      r && (0, Q.jsx)(`span`, { className: `cost`, children: M7(e.cooldown) }),
    ],
  });
}
function fue({ docs: e, attuned: t, pos: n, outlaw: r, onRise: i }) {
  let a = O7(e),
    o = fu(n.x, n.y, t, a),
    s = r ? o.filter((e) => !ii(e.x, e.y)) : o,
    c = a.filter((e) => t.includes(e.id) && !s.some((t) => t.node === e.id)),
    l = (e) => (e === Rl.id ? `the Aether Crystal` : `the ${Il[e].name}`);
  return (0, Q.jsxs)(`div`, {
    className: `rise-list`,
    children: [
      s.map((e, t) =>
        (0, Q.jsxs)(
          `button`,
          {
            className: `px-btn ${t === 0 ? `primary` : ``}`,
            onClick: () => i(e.node),
            children: [
              `Rise at `,
              l(e.node),
              (0, Q.jsxs)(`small`, {
                children: [
                  Math.round(e.distance),
                  ` tiles`,
                  t === 0 ? ` · nearest` : ``,
                  e.node === Rl.id ? ` · home` : ``,
                ],
              }),
            ],
          },
          e.node,
        ),
      ),
      s.length === 0 &&
        (0, Q.jsxs)(`button`, {
          className: `px-btn primary`,
          onClick: () => i(Rl.id),
          children: [
            `Rise outside the Ward`,
            (0, Q.jsx)(`small`, {
              children: `the nearest ground the Ward allows`,
            }),
          ],
        }),
      c.map((e) =>
        (0, Q.jsxs)(
          `div`,
          {
            className: `rise-blocked`,
            children: [
              Il[e.id].name,
              `: `,
              e.state === `hollowed` || e.state === `reclaim`
                ? `Hollowed. It will never take you.`
                : `a rite is open there. The door can't take you back.`,
            ],
          },
          e.id,
        ),
      ),
    ],
  });
}
var N7 = 4,
  P7 = 46,
  pue = 1.5 * P7,
  mue = 1.25 * P7;
