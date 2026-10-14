// index-BTsv3a2s 271 — children
// Lines 168497-168800 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var $7 = {
  "": `Bare`,
  candles: `Candles`,
  books: `Books`,
  bread: `Bread`,
  scrolls: `Scrolls`,
  potions: `Potions`,
  bottles: `Bottles`,
  herbs: `Herbs`,
  pyro: `Pyromancy`,
  cryo: `Cryomancy`,
  storm: `Stormcalling`,
  void: `Voidweaving`,
  marizon: `Marizon`,
  plain: `Plain`,
};
function jue({ here: e, mats: t, tool: n, onTool: r, onClose: i }) {
  U7(i);
  let a = e.home.tier,
    o = e.home.house?.items ?? [],
    [s, c] = (0, v.useState)(
      n?.t === `furn`
        ? un[n.kind].layer === `stand`
          ? `furniture`
          : `decor`
        : `rooms`,
    ),
    [l, u] = (0, v.useState)(n && `floor` in n ? n.floor : `planks`),
    [d, f] = (0, v.useState)(n && `wall` in n ? n.wall : `plaster`),
    [p, m] = (0, v.useState)({}),
    h = Ut[a],
    g = (e) => o.filter((t) => t.kind === e).length,
    _ = (e) => r(e),
    y = (e) => {
      (u(e),
        n?.t === `floor`
          ? _({ t: `floor`, floor: e })
          : n?.t === `room`
            ? _({ ...n, floor: e })
            : _({ t: `floor`, floor: e }));
    },
    b = (e) => {
      (f(e),
        n?.t === `wall`
          ? _({ t: `wall`, wall: e })
          : n?.t === `room`
            ? _({ ...n, wall: e })
            : _({ t: `wall`, wall: e }));
    },
    x = n?.t === `furn` ? un[n.kind] : null,
    S;
  switch (n?.t) {
    case `room`:
      S = `Drag out a room (3×3 or more): ${Gt[n.wall].name} walls, ${Wt[n.floor].name} floor.`;
      break;
    case `floor`:
      S = `Drag to lay ${Wt[n.floor].name}: ${Wt[n.floor].crowns} Crowns a tile.`;
      break;
    case `wall`:
      S = `Drag to build ${Gt[n.wall].name}: ${Gt[n.wall].crowns} Crowns a tile.`;
      break;
    case `door`:
      S = `Click a wall for a doorway: 12 Crowns.`;
      break;
    case `erase`:
      S = `Drag to take tiles up and get their cost back.`;
      break;
    case `takeup`:
      S = `Click furniture to take it up and get its cost back.`;
      break;
    case `furn`:
      S = `${x.name}: ${G7(x.cost)}`;
      break;
    default:
      S = GG
        ? `Pick a tool, then tap or drag.`
        : `Pick a tool, then click or drag. Esc to stop.`;
  }
  let C = (e) => {
      let r = un[e],
        i = g(e),
        a = !K7(t, r.cost),
        o = n?.t === `furn` && n.kind === e,
        s = p[e] ?? r.args?.[0];
      return (0, Q.jsxs)(
        `button`,
        {
          className: `bb-item ${o ? `on` : ``} ${a ? `dim` : ``}`,
          title: `${r.name}: ${r.desc} (${G7(r.cost)})${i ? ` · ${i} placed` : ``}`,
          onClick: () =>
            _(o ? null : { t: `furn`, kind: e, arg: r.args ? s : void 0 }),
          children: [
            (0, Q.jsx)(`img`, {
              className: `pixel hb-icon`,
              src: q6(e, s),
              alt: ``,
            }),
            (0, Q.jsx)(`span`, { children: r.name }),
            (0, Q.jsx)(`small`, { children: Q7(r.cost) }),
          ],
        },
        e,
      );
    },
    w = x?.args;
  return (0, Q.jsxs)(`div`, {
    className: `build-bar house-bar panel`,
    onMouseDown: (e) => e.stopPropagation(),
    children: [
      (0, Q.jsxs)(`div`, {
        className: `bb-head`,
        children: [
          (0, Q.jsx)(`b`, { children: `Cottage` }),
          (0, Q.jsx)(`small`, { children: S }),
          (0, Q.jsx)(`button`, {
            className: `link-btn`,
            onClick: i,
            children: `✕`,
          }),
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `hb-tabs`,
        children: [
          [
            [`rooms`, `Rooms & walls`],
            [`furniture`, `Furniture`],
            [`decor`, `Rugs & wall hangings`],
          ].map(([e, t]) =>
            (0, Q.jsx)(
              `button`,
              {
                className: s === e ? `on` : ``,
                onClick: () => c(e),
                children: t,
              },
              e,
            ),
          ),
          (0, Q.jsxs)(`span`, {
            className: `muted hb-plan`,
            children: [
              `Your deed: `,
              h.w,
              `×`,
              h.h,
              ` tiles · `,
              t?.crowns ?? 0,
              ` Crowns`,
            ],
          }),
        ],
      }),
      s === `rooms` &&
        (0, Q.jsx)(Q.Fragment, {
          children: (0, Q.jsxs)(`div`, {
            className: `bb-row`,
            children: [
              (0, Q.jsxs)(`button`, {
                className: `bb-item ${n?.t === `room` ? `on` : ``}`,
                onClick: () =>
                  _(n?.t === `room` ? null : { t: `room`, floor: l, wall: d }),
                title: `A whole room: walls round it, floor inside`,
                children: [
                  (0, Q.jsx)(`span`, { className: `bb-glyph`, children: `▣` }),
                  (0, Q.jsx)(`span`, { children: `Room` }),
                  (0, Q.jsx)(`small`, { children: `\xA0` }),
                ],
              }),
              (0, Q.jsxs)(`button`, {
                className: `bb-item ${n?.t === `door` ? `on` : ``}`,
                onClick: () => _(n?.t === `door` ? null : { t: `door` }),
                title: `A doorway in a wall`,
                children: [
                  (0, Q.jsx)(`span`, { className: `bb-glyph`, children: `⌂` }),
                  (0, Q.jsx)(`span`, { children: `Doorway` }),
                  (0, Q.jsx)(`small`, { children: 12 }),
                ],
              }),
              (0, Q.jsxs)(`button`, {
                className: `bb-item ${n?.t === `erase` ? `on` : ``}`,
                onClick: () => _(n?.t === `erase` ? null : { t: `erase` }),
                title: `Take floors and walls up`,
                children: [
                  (0, Q.jsx)(`span`, { className: `bb-glyph`, children: `⌫` }),
                  (0, Q.jsx)(`span`, { children: `Take up` }),
                  (0, Q.jsx)(`small`, { children: `tiles` }),
                ],
              }),
              (0, Q.jsx)(`span`, { className: `hb-sep`, children: `Floor` }),
              Kt.map((e) =>
                (0, Q.jsxs)(
                  `button`,
                  {
                    className: `bb-item ${n?.t === `floor` && n.floor === e ? `on` : ``} ${n?.t === `room` && n.floor === e ? `picked` : ``}`,
                    title: `${Wt[e].name}: ${Wt[e].crowns} Crowns a tile`,
                    onClick: () => y(e),
                    children: [
                      (0, Q.jsx)(`img`, {
                        className: `pixel hb-icon`,
                        src: gse(e),
                        alt: ``,
                      }),
                      (0, Q.jsx)(`span`, { children: Wt[e].name }),
                      (0, Q.jsx)(`small`, { children: Wt[e].crowns }),
                    ],
                  },
                  e,
                ),
              ),
              (0, Q.jsx)(`span`, { className: `hb-sep`, children: `Wall` }),
              qt.map((e) =>
                (0, Q.jsxs)(
                  `button`,
                  {
                    className: `bb-item ${n?.t === `wall` && n.wall === e ? `on` : ``} ${n?.t === `room` && n.wall === e ? `picked` : ``}`,
                    title: `${Gt[e].name}: ${Gt[e].crowns} Crowns a tile`,
                    onClick: () => b(e),
                    children: [
                      (0, Q.jsx)(`img`, {
                        className: `pixel hb-icon`,
                        src: _se(e),
                        alt: ``,
                      }),
                      (0, Q.jsx)(`span`, { children: Gt[e].name }),
                      (0, Q.jsx)(`small`, { children: Gt[e].crowns }),
                    ],
                  },
                  e,
                ),
              ),
            ],
          }),
        }),
      s !== `rooms` &&
        (0, Q.jsxs)(`div`, {
          className: `bb-row`,
          children: [
            dn
              .filter((e) =>
                s === `furniture`
                  ? un[e].layer === `stand`
                  : un[e].layer !== `stand`,
              )
              .map(C),
            (0, Q.jsxs)(`button`, {
              className: `bb-item pickup ${n?.t === `takeup` ? `on` : ``}`,
              onClick: () => _(n?.t === `takeup` ? null : { t: `takeup` }),
              title: `Take furniture up`,
              children: [
                (0, Q.jsx)(`span`, { className: `bb-glyph`, children: `⤒` }),
                (0, Q.jsx)(`span`, { children: `Take up` }),
                (0, Q.jsx)(`small`, { children: `\xA0` }),
              ],
            }),
          ],
        }),
      x &&
        w &&
        n?.t === `furn` &&
        (0, Q.jsxs)(`div`, {
          className: `hb-looks`,
          children: [
            (0, Q.jsx)(`span`, { className: `muted`, children: `Look:` }),
            w.map((e) =>
              (0, Q.jsxs)(
                `button`,
                {
                  className: `hb-look ${n.arg === e ? `on` : ``}`,
                  onClick: () => {
                    (m((t) => ({ ...t, [n.kind]: e })),
                      _({ t: `furn`, kind: n.kind, arg: e }));
                  },
                  title: $7[e] ?? e,
                  children: [
                    e.startsWith(`#`)
                      ? (0, Q.jsx)(`i`, { style: { background: e } })
                      : (0, Q.jsx)(`img`, {
                          className: `pixel`,
                          src: q6(n.kind, e),
                          alt: ``,
                        }),
                    !e.startsWith(`#`) &&
                      (0, Q.jsx)(`span`, { children: $7[e] ?? e }),
                  ],
                },
                e,
              ),
            ),
          ],
        }),
    ],
  });
}
function Mue(e, t) {
  let n = e.structures.find((e) => e.id === t);
  if (n) {
    let e = kt[n.kind];
    return e?.slots ? { name: e.name, size: e.slots, slots: n.slots } : null;
  }
  let r = e.house?.items.find((e) => e.id === t),
    i = r ? un[r.kind] : null;
  return r && i?.slots ? { name: i.name, size: i.slots, slots: r.slots } : null;
}
