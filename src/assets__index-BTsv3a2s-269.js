// assets__index-BTsv3a2s 269 — children
// Lines 167846-168152 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function wue({ s: e, onLeave: t, onStay: n }) {
  let r = $o[e.dungeon];
  return (0, Q.jsxs)(`div`, {
    className: `dng-clear panel`,
    onMouseDown: (e) => e.stopPropagation(),
    children: [
      (0, Q.jsx)(`h2`, { children: e.ended ? `The Ember goes out` : r.name }),
      (0, Q.jsx)(`div`, {
        className: `dc-sub`,
        children: e.ended
          ? `${r.name}${e.diff === `hollowed` ? ` (Hollowed)` : ``} · reached floor ${e.floorReached ?? 1} of ${r.floors.length} in ${B7(e.seconds)}`
          : `Cleared${e.diff === `hollowed` ? ` on Hollowed` : ``} in ${B7(e.seconds)} · ${e.rises ? `${e.rises} rise${e.rises === 1 ? `` : `s`} spent` : `no rises spent`}`,
      }),
      e.ended &&
        (0, Q.jsx)(`div`, {
          className: `dc-story`,
          children: `Everything you earned down there is still yours. The floors will be different next time.`,
        }),
      e.echoes &&
        e.echoes.length > 0 &&
        (0, Q.jsxs)(`div`, {
          className: `dc-echoes`,
          children: [
            `Echoes: `,
            [...new Set(e.echoes)]
              .map(
                (t) =>
                  `${sA[t]?.name ?? t}${e.echoes.filter((e) => e === t).length > 1 ? ` ×${e.echoes.filter((e) => e === t).length}` : ``}`,
              )
              .join(`, `),
          ],
        }),
      e.note &&
        (0, Q.jsxs)(`div`, {
          className: `dc-note`,
          style: { color: Eo[e.note] },
          children: [
            (0, Q.jsx)(z7, {
              c: By(e.note, !0),
              scale: 2,
              className: `inline`,
            }),
            ` Lillith's `,
            e.note,
            ` ward-note is broken: `,
            e.notes,
            ` of 4.`,
            e.notes >= 4 ? ` The road to the Gilded Folly is open.` : ``,
          ],
        }),
      e.parting &&
        (0, Q.jsxs)(`blockquote`, {
          className: `dc-parting`,
          children: [`“`, e.parting, `”`],
        }),
      e.names.length > 0 &&
        (0, Q.jsxs)(`div`, {
          className: `dc-taken`,
          children: [
            (0, Q.jsxs)(`b`, {
              children: [`Brought home alive (`, e.names.length, `):`],
            }),
            ` `,
            e.names.join(`, `),
            `.`,
            e.lost
              ? (0, Q.jsxs)(`span`, {
                  className: `red`,
                  children: [` `, e.lost, ` lost.`],
                })
              : null,
          ],
        }),
      e.story &&
        (0, Q.jsx)(`div`, {
          className: `dc-story`,
          children: `She left you Caelan's Stormcaller. It's in your satchel.`,
        }),
      (0, Q.jsxs)(`div`, {
        className: `dc-xp`,
        children: [`+`, e.xp, ` XP this run`],
      }),
      e.loot.length > 0 &&
        (0, Q.jsx)(`ul`, {
          className: `dc-loot`,
          children: e.loot.map((e, t) =>
            (0, Q.jsxs)(
              `li`,
              {
                style: { color: _a[e.rarity]?.color },
                children: [
                  e.name,
                  e.ground
                    ? (0, Q.jsx)(`small`, {
                        children: ` (your satchel was full: it waits at the door)`,
                      })
                    : null,
                ],
              },
              t,
            ),
          ),
        }),
      (0, Q.jsxs)(`div`, {
        className: `dc-btns`,
        children: [
          (0, Q.jsx)(`button`, {
            className: `px-btn primary`,
            onClick: e.ended ? n : t,
            children: e.ended ? `Back into the light` : `Return to the surface`,
          }),
          !e.ended &&
            (0, Q.jsx)(`button`, {
              className: `link-btn`,
              onClick: n,
              children: `Stay a while`,
            }),
        ],
      }),
    ],
  });
}
function Tue(e) {
  return _a[e]?.color ?? `#ffffff`;
}
function U7(e) {
  let t = (0, v.useRef)(e);
  ((t.current = e),
    (0, v.useEffect)(() => {
      let e = (e) => {
        e.key === `Escape` && t.current();
      };
      return (
        window.addEventListener(`keydown`, e),
        () => window.removeEventListener(`keydown`, e)
      );
    }, []));
}
var W7 = [`crowns`, `dust`, `shards`, `motes`, `chips`];
function G7(e) {
  let t = W7.filter((t) => (e[t] ?? 0) > 0).map(
    (t) => `${e[t]} ${t === `crowns` ? `Crowns` : so[t].name}`,
  );
  return t.length ? t.join(` · `) : `Free`;
}
function K7(e, t) {
  return W7.every((n) => (e?.[n] ?? 0) >= (t[n] ?? 0));
}
var q7 = (e) => {
  let t = Math.max(0, Math.ceil(e / 1e3));
  return t >= 3600
    ? `${Math.floor(t / 3600)}h ${Math.floor((t % 3600) / 60)}m`
    : `${Math.floor(t / 60)}:${String(t % 60).padStart(2, `0`)}`;
};
function J7({ id: e, size: t = 24 }) {
  return (0, Q.jsx)(`img`, {
    className: `pixel`,
    src: PF(e),
    width: t,
    height: t,
    alt: ``,
  });
}
function Y7(e) {
  return e === `rested` ? `Well Rested` : (_t[e]?.name ?? e);
}
function X7(e) {
  let t = e === `rested` ? Ct : _t[e]?.use;
  if (!t) return ``;
  let n = [];
  (t.heal && n.push(`+${Math.round(t.heal * 100)}% health`),
    t.mana && n.push(`+${Math.round(t.mana * 100)}% mana`));
  for (let [e, r] of Object.entries(t.attrs ?? {}))
    n.push(`+${r} ${e[0].toUpperCase()}${e.slice(1)}`);
  let r = {
    vitality: (e) => `+${e} health`,
    clarity: (e) => `+${e} mana/s`,
    crit: (e) => `+${Math.round(e * 100)}% crit`,
    swiftness: (e) => `+${Math.round(e * 100)}% speed`,
    haste: (e) => `+${Math.round(e * 100)}% haste`,
    ward: (e) => `−${Math.round(e * 100)}% harm`,
    hollowguard: (e) => `−${Math.round(e * 100)}% Hollow harm`,
    leech: (e) => `${Math.round(e * 100)}% siphon`,
  };
  for (let [e, i] of Object.entries(t.stats ?? {}))
    n.push(r[e]?.(i) ?? `${e} +${i}`);
  return (
    t.xp && n.push(`+${Math.round(t.xp * 100)}% XP`),
    t.minutes && n.push(`${t.minutes} min`),
    n.join(` · `)
  );
}
function Z7({ id: e, n: t, onClick: n, title: r, dim: i }) {
  return (0, Q.jsxs)(`button`, {
    className: `islot good ${i ? `dim` : ``}`,
    onClick: n,
    title: r ?? `${_t[e]?.name ?? e} × ${t}`,
    children: [
      (0, Q.jsx)(J7, { id: e, size: 36 }),
      (0, Q.jsx)(`span`, { className: `cnt`, children: t }),
    ],
  });
}
function Eue({ name: e, k: t }) {
  return (0, Q.jsxs)(`div`, {
    className: `channel-bar panel home-walk`,
    children: [
      (0, Q.jsx)(`span`, { children: e ? `Going to ${e}'s` : `Going home` }),
      (0, Q.jsx)(`div`, {
        children: (0, Q.jsx)(`i`, {
          style: { width: `${Math.round(t * 100)}%` },
        }),
      }),
    ],
  });
}
function Due({
  here: e,
  mine: t,
  building: n,
  inHouse: r,
  onPanel: i,
  onBuild: a,
  onLeave: o,
}) {
  (u5(1e3), a5());
  let s = e.closingAt ? e.closingAt - Date.now() : 0;
  return (0, Q.jsxs)(`div`, {
    className: `home-hud panel`,
    children: [
      (0, Q.jsxs)(`b`, {
        children: [e.ownerName, `'s `, r ? `Cottage` : `Homestead`],
      }),
      (0, Q.jsxs)(`small`, {
        children: [
          Ot[e.home.tier].name,
          e.guests.length > 0 &&
            ` · ${e.guests.length} guest${e.guests.length === 1 ? `` : `s`}`,
        ],
      }),
      s > 0 &&
        (0, Q.jsxs)(`div`, {
          className: `home-closing`,
          children: [
            e.ownerName,
            ` left. Closing in `,
            Math.ceil(s / 1e3),
            `s.`,
          ],
        }),
      (0, Q.jsxs)(`div`, {
        className: `home-hud-btns`,
        children: [
          t &&
            (0, Q.jsxs)(`button`, {
              className: `hbtn ${n ? `on` : ``}`,
              onMouseDown: (e) => e.preventDefault(),
              onClick: a,
              children: [
                `Build `,
                !GG && (0, Q.jsx)(`kbd`, { children: Bi(oG(`build`)) }),
              ],
            }),
          (0, Q.jsxs)(`button`, {
            className: `hbtn`,
            onMouseDown: (e) => e.preventDefault(),
            onClick: i,
            children: [
              `Homestead `,
              !GG && (0, Q.jsx)(`kbd`, { children: Bi(oG(`homestead`)) }),
            ],
          }),
          (0, Q.jsx)(`button`, {
            className: `hbtn`,
            onMouseDown: (e) => e.preventDefault(),
            onClick: o,
            children: `Leave`,
          }),
        ],
      }),
    ],
  });
}
function Oue({ buffs: e }) {
  u5(1e3);
  let t = Date.now(),
    n = e.filter((e) => e.until > t);
  return n.length
    ? (0, Q.jsx)(`div`, {
        className: `buff-strip`,
        children: n.map((e) =>
          (0, Q.jsxs)(
            `div`,
            {
              className: `buff ${e.until - t < 6e4 ? `ending` : ``}`,
              title: `${Y7(e.good)}: ${X7(e.good)}`,
              children: [
                (0, Q.jsx)(J7, { id: e.good, size: 24 }),
                (0, Q.jsx)(`span`, { children: q7(e.until - t) }),
              ],
            },
            e.slot,
          ),
        ),
      })
    : null;
}
