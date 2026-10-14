// index-BTsv3a2s 274 — children
// Lines 169276-169585 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Lue({
  s: e,
  now: t,
  mine: n,
  dust: r,
  onWater: i,
  onDust: a,
  onClose: o,
}) {
  (U7(o), u5(1e3));
  let s = e.bed;
  if (!s) return null;
  let c = t(),
    l = Pt(s, c),
    u = s.wetUntil > c,
    d = !Ft(s, c) && s.wetUntil <= c + (Nt(s.crop) * 0.5) / 4;
  return (0, Q.jsxs)(`div`, {
    className: `home-panel bed panel`,
    onMouseDown: (e) => e.stopPropagation(),
    children: [
      (0, Q.jsxs)(`div`, {
        className: `hp-head`,
        children: [
          (0, Q.jsx)(J7, { id: s.crop, size: 40 }),
          (0, Q.jsxs)(`div`, {
            children: [
              (0, Q.jsx)(`b`, { children: dt[s.crop].name }),
              (0, Q.jsx)(`small`, { children: dt[s.crop].desc }),
            ],
          }),
          (0, Q.jsx)(`button`, {
            className: `link-btn hp-x`,
            onClick: o,
            children: `✕`,
          }),
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `bed-bar`,
        children: [
          (0, Q.jsx)(`i`, { style: { width: `${Math.round(l * 100)}%` } }),
          (0, Q.jsx)(`span`, {
            children: l >= 1 ? `Ripe` : `${Math.floor(l * 100)}%`,
          }),
        ],
      }),
      (0, Q.jsxs)(`p`, {
        className: `small`,
        children: [
          l >= 1
            ? `Ready to harvest.`
            : u
              ? `Watered for ${q7(s.wetUntil - c)}.`
              : `Dry: half speed.`,
          ` `,
          l < 1 &&
            (0, Q.jsxs)(`span`, {
              className: `muted`,
              children: [`Ripe in `, q7(Iue(s, c)), `.`],
            }),
        ],
      }),
      (0, Q.jsxs)(`p`, {
        className: `small muted`,
        children: [
          `Gives `,
          dt[s.crop].yield,
          s.dusted ? ` + 1` : ``,
          ` `,
          dt[s.crop].name,
          `.`,
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `hp-btns`,
        children: [
          (0, Q.jsx)(`button`, {
            className: `hbtn`,
            disabled: !d,
            onClick: i,
            children: `Water`,
          }),
          n &&
            (0, Q.jsx)(`button`, {
              className: `hbtn`,
              disabled: s.dusted || r < 1 || l >= 1,
              onClick: a,
              title: `One Aether Dust: one more at harvest`,
              children: s.dusted ? `Dusted` : `Dust with Aether (1)`,
            }),
        ],
      }),
    ],
  });
}
var Rue = {
  crop: `Crops`,
  seed: `Seeds`,
  potion: `Potions`,
  dish: `Meals`,
  junk: `Other`,
  water: `Watering can`,
};
function zue({ provisions: e, buffs: t, potionAt: n, onUse: r, onClose: i }) {
  (U7(i), u5(1e3));
  let a = e?.goods ?? {},
    o = Date.now(),
    s = n + wt - o,
    c = [`potion`, `dish`, `crop`, `seed`, `water`, `junk`]
      .map((e) => ({
        k: e,
        list: vt.filter((t) => _t[t].kind === e && (a[t] ?? 0) > 0),
      }))
      .filter((e) => e.list.length);
  return (0, Q.jsxs)(`div`, {
    className: `home-panel provisions panel`,
    onMouseDown: (e) => e.stopPropagation(),
    children: [
      (0, Q.jsxs)(`div`, {
        className: `hp-head`,
        children: [
          (0, Q.jsxs)(`div`, {
            children: [
              (0, Q.jsx)(`b`, { children: `Provisions` }),
              (0, Q.jsxs)(`small`, { children: [`Up to `, 40, ` of each.`] }),
            ],
          }),
          (0, Q.jsx)(`button`, {
            className: `link-btn hp-x`,
            onClick: i,
            children: `✕`,
          }),
        ],
      }),
      t.some((e) => e.until > o) &&
        (0, Q.jsxs)(`section`, {
          children: [
            (0, Q.jsx)(`h3`, { children: `Working on you` }),
            t
              .filter((e) => e.until > o)
              .map((e) =>
                (0, Q.jsxs)(
                  `div`,
                  {
                    className: `hp-row`,
                    children: [
                      (0, Q.jsxs)(`span`, {
                        children: [
                          (0, Q.jsx)(J7, { id: e.good, size: 20 }),
                          ` `,
                          Y7(e.good),
                          ` `,
                          (0, Q.jsxs)(`small`, {
                            className: `muted`,
                            children: [`· `, X7(e.good)],
                          }),
                        ],
                      }),
                      (0, Q.jsx)(`span`, {
                        className: `gold`,
                        children: q7(e.until - o),
                      }),
                    ],
                  },
                  e.slot,
                ),
              ),
          ],
        }),
      c.length
        ? c.map(({ k: e, list: t }) =>
            (0, Q.jsxs)(
              `section`,
              {
                children: [
                  (0, Q.jsx)(`h3`, { children: Rue[e] }),
                  t.map((e) => {
                    let t = _t[e].use,
                      n = t && !t.minutes;
                    return (0, Q.jsxs)(
                      `div`,
                      {
                        className: `hp-row`,
                        title: _t[e].desc,
                        children: [
                          (0, Q.jsxs)(`span`, {
                            children: [
                              (0, Q.jsx)(J7, { id: e, size: 20 }),
                              ` `,
                              _t[e].name,
                              ` `,
                              (0, Q.jsxs)(`small`, {
                                className: `muted`,
                                children: [`× `, a[e]],
                              }),
                              t &&
                                (0, Q.jsxs)(`small`, {
                                  className: `muted`,
                                  children: [` · `, X7(e)],
                                }),
                            ],
                          }),
                          t &&
                            (0, Q.jsx)(`button`, {
                              className: `hbtn`,
                              disabled: !!n && s > 0,
                              onClick: () => r(e),
                              children:
                                n && s > 0
                                  ? `${Math.ceil(s / 1e3)}s`
                                  : t.slot === `meal`
                                    ? `Eat`
                                    : `Drink`,
                            }),
                        ],
                      },
                      e,
                    );
                  }),
                ],
              },
              e,
            ),
          )
        : (0, Q.jsxs)(`p`, {
            className: `hp-lore`,
            children: [
              `Nothing yet. Grow crops on your homestead`,
              GG ? `` : ` (${Bi(oG(`homestead`))})`,
              `, cook them into meals and brew them into potions.`,
            ],
          }),
    ],
  });
}
function Bue(e) {
  let [t, n] = (0, v.useState)(() => Date.now());
  return (
    (0, v.useEffect)(() => {
      let t = window.setInterval(() => n(Date.now()), e);
      return () => window.clearInterval(t);
    }, [e]),
    t
  );
}
function e9(e) {
  let t = Math.max(0, Math.ceil(e));
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, `0`)}`;
}
function Vue({ pvp: e, onToggle: t }) {
  a5();
  let n = e.wanted;
  return (0, Q.jsxs)(`div`, {
    className: `pvp-stack`,
    children: [
      n &&
        (0, Q.jsxs)(`div`, {
          className: `pvp-wanted`,
          title: `Your record with the Circle. It fades with time; whoever slays you while you're Discordant claims the writ.`,
          children: [
            (0, Q.jsxs)(`b`, { children: [`★`.repeat(n.level), ` `, n.name] }),
            n.writ > 0 &&
              (0, Q.jsxs)(`span`, {
                className: `t`,
                children: [`Writ `, n.writ],
              }),
          ],
        }),
      e.outlaw > 0 &&
        (0, Q.jsxs)(`div`, {
          className: `pvp-outlaw`,
          title: `Anyone's spells can hurt you without penalty, and the Lumen Ward won't open to you until this runs out. Falling to another mage clears it.`,
          children: [
            (0, Q.jsx)(`b`, { children: `☠ Discordant` }),
            (0, Q.jsx)(`span`, { className: `t`, children: e9(e.outlaw) }),
            (0, Q.jsx)(`small`, { children: `The Ward is closed to you` }),
          ],
        }),
      (0, Q.jsxs)(`button`, {
        className: `pvp-stance ${e.hostile ? `on` : ``} ${e.exposed ? `exposed` : `safe`}`,
        onMouseDown: (e) => e.preventDefault(),
        onClick: t,
        title: HG(
          e.hostile
            ? `Bared: your spells hurt any mage outside the Ward. Striking an innocent makes you Discordant and is a crime on your record. [P] to veil.`
            : `Veiled: your spells only hurt monsters and the Discordant. [P] to bare.`,
        ),
        children: [
          (0, Q.jsx)(`span`, {
            className: `ico`,
            "aria-hidden": !0,
            children: e.hostile ? `⚔` : `✦`,
          }),
          (0, Q.jsxs)(`span`, {
            className: `lbl`,
            children: [
              e.hostile ? `Bared` : `Veiled`,
              (0, Q.jsxs)(`small`, {
                children: [
                  GG ? `` : `${HG(`[P]`)} · `,
                  e.exposed ? `outside the Ward` : `the Ward keeps the peace`,
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
