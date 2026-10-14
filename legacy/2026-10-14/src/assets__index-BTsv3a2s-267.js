// assets__index-BTsv3a2s 267 — children
// Lines 167339-167610 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function xue({
  id: e,
  delves: t,
  name: n,
  level: r,
  partyDown: i,
  partyAway: a,
  onEnter: o,
  onClose: s,
}) {
  l5(s);
  let c = $o[e],
    [l, u] = (0, v.useState)(`normal`),
    [d, f] = (0, v.useState)(!1),
    [p, m] = (0, v.useState)(!1),
    h = (0, v.useMemo)(() => {
      let e = {};
      for (let n of t?.cleared ?? []) {
        let [t, r] = n.split(`:`);
        (e[t] ??= []).push(r);
      }
      return {
        name: n,
        level: r,
        quests: t?.chapterOne ? [`m6-field`] : [],
        notes: t?.notes ?? [],
        cleared: e,
      };
    }, [t, n, r]),
    g =
      ns(e, l, [h])
        ?.replace(`${n} needs`, `You need`)
        .replace(`${n} hasn't`, `You haven't`)
        .replace(`${n} has`, `You have`) ?? (a && BH(e) ? fc(a) : null),
    _ = h.cleared[e] ?? [],
    y = V7(4, 300),
    b = c.note,
    x = !!b && (t?.notes ?? []).includes(b),
    S = c.bosses.map((e) => ({
      kind: e,
      final: Xo[e].room === `boss`,
      floor: Xo[e].floor,
    }));
  return (0, Q.jsxs)(`div`, {
    className: `dng-panel panel`,
    onMouseDown: (e) => e.stopPropagation(),
    children: [
      (0, Q.jsxs)(`div`, {
        className: `dp-head`,
        children: [
          (0, Q.jsx)(z7, { c: Oy(e, y).c, scale: 1, className: `dp-art` }),
          (0, Q.jsxs)(`div`, {
            children: [
              (0, Q.jsx)(`b`, { children: c.name }),
              (0, Q.jsx)(`small`, { children: c.subtitle }),
              (0, Q.jsxs)(`div`, {
                className: `dp-meta`,
                children: [
                  `Level `,
                  es(e, l),
                  ` · enter from `,
                  ts(e, l),
                  ` · `,
                  c.floors.length,
                  ` floors · ~`,
                  c.minutes,
                  ` min`,
                ],
              }),
            ],
          }),
          (0, Q.jsx)(`button`, {
            className: `link-btn dp-x`,
            onClick: s,
            children: `✕`,
          }),
        ],
      }),
      (0, Q.jsx)(`p`, { className: `dp-entrance`, children: c.entrance }),
      (0, Q.jsxs)(`p`, {
        className: `dp-giver`,
        children: [
          (0, Q.jsxs)(`b`, { children: [c.giver.who, `:`] }),
          ` “`,
          c.giver.line,
          `”`,
        ],
      }),
      (0, Q.jsxs)(`button`, {
        className: `link-btn dp-lore-btn`,
        onClick: () => m((e) => !e),
        children: [p ? `▾` : `▸`, ` What's down there`],
      }),
      p && (0, Q.jsx)(`p`, { className: `dp-lore`, children: c.lore }),
      (0, Q.jsx)(`div`, {
        className: `dp-floors`,
        children: c.floors.map((e, t) => {
          let n = S.filter((e) => e.floor === t + 1);
          return (0, Q.jsxs)(
            `div`,
            {
              className: `dp-floor`,
              children: [
                (0, Q.jsx)(`span`, { className: `dp-depth`, children: t + 1 }),
                ` `,
                e.name,
                n.map((e) =>
                  (0, Q.jsx)(
                    `span`,
                    {
                      className: e.final ? `dp-boss final` : `dp-boss`,
                      children: bue(e.kind),
                    },
                    e.kind,
                  ),
                ),
              ],
            },
            t,
          );
        }),
      }),
      (0, Q.jsxs)(`div`, {
        className: `dp-row`,
        children: [
          b
            ? (0, Q.jsxs)(`span`, {
                className: `dp-note`,
                style: { color: Eo[b] },
                children: [
                  (0, Q.jsx)(z7, {
                    c: By(b, x),
                    scale: 1.5,
                    className: `inline`,
                  }),
                  ` Lillith's `,
                  b,
                  ` note `,
                  x ? `(broken)` : `is down here`,
                ],
              })
            : (0, Q.jsxs)(`span`, {
                className: `dp-note`,
                children: [
                  Co.map((e) =>
                    (0, Q.jsx)(
                      z7,
                      {
                        c: By(e, (t?.notes ?? []).includes(e)),
                        scale: 1.5,
                        className: `inline`,
                      },
                      e,
                    ),
                  ),
                  ` `,
                  `Her four notes: `,
                  (t?.notes ?? []).length,
                  ` of 4 broken`,
                ],
              }),
          (0, Q.jsxs)(`span`, {
            className: `dp-ember`,
            children: [
              (0, Q.jsx)(z7, { c: Ry(!0, y), scale: 1.5, className: `inline` }),
              ` The Ember of Marizon: `,
              Oo[l],
              ` rises`,
            ],
          }),
        ],
      }),
      e === `folly` &&
        (0, Q.jsxs)(`div`, {
          className: `dp-taken`,
          children: [
            `The Taken: `,
            Math.min(t?.taken ?? 0, vs.length),
            ` of `,
            vs.length,
            ` names crossed off`,
            (t?.taken ?? 0) > vs.length
              ? `, and ${(t?.taken ?? 0) - vs.length} strangers`
              : ``,
            `.`,
            (0, Q.jsxs)(`small`, {
              children: [
                ` `,
                `Break a circle's crystal, unshackle the chained, and cut her threads before her fourth drink.`,
                (() => {
                  let e = xs.find((e) => (t?.taken ?? 0) < e.at);
                  return e ? ` Next: ${e.at} brought home.` : ``;
                })(),
              ],
            }),
          ],
        }),
      (0, Q.jsx)(`div`, {
        className: `dp-diff`,
        children: [`normal`, `hollowed`].map((e) =>
          (0, Q.jsxs)(
            `button`,
            {
              className: `dp-df ${l === e ? `on` : ``} ${e}`,
              onClick: () => u(e),
              children: [
                (0, Q.jsx)(z7, { c: Vy(e), scale: 1.5, className: `inline` }),
                ` `,
                e === `normal` ? `Normal` : `Hollowed`,
                _.includes(e) && (0, Q.jsx)(`em`, { children: `cleared` }),
              ],
            },
            e,
          ),
        ),
      }),
      l === `hollowed` &&
        (0, Q.jsx)(`p`, {
          className: `dp-small`,
          children: `Five levels higher, three rises, bosses hit harder and more often. Boss loot once a day.`,
        }),
      BH(e)
        ? (0, Q.jsx)(`p`, {
            className: `dp-small`,
            children: i
              ? `${i} is down there: you'll join their run, on their floor, at its difficulty.`
              : a
                ? `${a} is down there on another realm server.`
                : `Your party goes down together: the floors are built for it, and a member who comes to this door after you joins you.`,
          })
        : (0, Q.jsx)(`p`, {
            className: `dp-small`,
            children: `You go down alone for now: the dungeon is your own. Its foes are built for one; its bosses for a few.`,
          }),
      g ? (0, Q.jsx)(`div`, { className: `dp-block`, children: g }) : null,
      (0, Q.jsx)(`button`, {
        className: `px-btn primary dp-go`,
        disabled: !!g || d,
        onClick: () => {
          (f(!0), o(l).finally(() => f(!1)));
        },
        children: d ? `Going down…` : `Go down`,
      }),
    ],
  });
}
function V7(e, t) {
  let [n, r] = (0, v.useState)(0);
  return (
    (0, v.useEffect)(() => {
      let n = window.setInterval(() => r((t) => (t + 1) % e), t);
      return () => window.clearInterval(n);
    }, [e, t]),
    n
  );
}
var H7 = {
    ember: `#ff9a4a`,
    rime: `#7fd6ff`,
    storm: `#fff36b`,
    void: `#d08bff`,
    arcane: `#e6d8ff`,
    hollow: `#ff5c6c`,
  },
  Sue = {
    ember: `Ember`,
    rime: `Rime`,
    storm: `Storm`,
    void: `Void`,
    arcane: `Arcane`,
    hollow: `Hollow`,
  };
