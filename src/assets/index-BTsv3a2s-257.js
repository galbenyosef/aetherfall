// index-BTsv3a2s 257 — children
// Lines 164155-164391 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Vle({ run: e, ctx: t, onClose: n, pinnable: r, onPin: i }) {
  let { plan: a } = e,
    o = a.steps.length,
    s = (0, v.useMemo)(
      () =>
        H5(a.steps.slice(0, e.done), e.bag, e.before, e.bagMax, e.level).worn,
      [a, e.done, e.bag, e.before, e.bagMax, e.level],
    ),
    c = (t) => Object.values(e.before).some((e) => e?.id === t.id),
    l = wa.filter((t) => e.before[t]?.id !== s[t]?.id),
    u = (e) => Object.values(e).filter(Boolean),
    d = m7(Za(u(s)), Za(u(e.before))),
    f = (e) =>
      e
        ? r(e.id)
          ? (0, Q.jsx)(`button`, {
              className: `best-name`,
              style: { color: a7(e) },
              title: `Pin it`,
              onClick: () => i(e.id),
              children: o7(e),
            })
          : (0, Q.jsx)(`span`, { style: { color: a7(e) }, children: o7(e) })
        : (0, Q.jsx)(`span`, { className: `muted`, children: `empty` }),
    p = (e) => {
      let t = e.slice(0, 3),
        n = e.length - t.length;
      return t.map((e, r) =>
        (0, Q.jsxs)(
          `span`,
          {
            children: [
              r > 0 && (r === t.length - 1 && !n ? ` and ` : `, `),
              f(e),
            ],
          },
          e.id,
        ),
      );
    },
    m = (e) => (e.length > 3 ? ` and ${e.length - 3} more` : ``),
    h = (e) => (e.unique ? `Named` : `Hollowed`),
    g = a.over;
  return (0, Q.jsxs)(`div`, {
    className: `best-report`,
    role: `status`,
    children: [
      (0, Q.jsxs)(`div`, {
        className: `best-head`,
        children: [
          (0, Q.jsx)(`b`, { children: `Equip best` }),
          (0, Q.jsx)(`button`, {
            className: `pxb`,
            onClick: n,
            children: `OK`,
          }),
        ],
      }),
      l.map((t) =>
        (0, Q.jsxs)(
          `div`,
          { children: [Ta[t], `: `, f(e.before[t]), ` → `, f(s[t])] },
          t,
        ),
      ),
      d.length > 0 &&
        (0, Q.jsx)(`div`, {
          className: `cmp`,
          children: d.map((e) => (0, Q.jsx)(h7, { x: e }, e.k)),
        }),
      l.length > 0 &&
        (0, Q.jsxs)(`div`, {
          children: [
            `Gear score `,
            Math.round(N5(e.before, t)),
            ` → `,
            Math.round(N5(s, t)),
          ],
        }),
      a.skipped.map((e) =>
        (0, Q.jsxs)(
          `div`,
          {
            className: `muted`,
            children: [
              f(e.item),
              ` `,
              c(e.item) ? `is in your satchel now.` : `stays in your satchel.`,
              ` `,
              e.why,
            ],
          },
          e.item.id,
        ),
      ),
      e.error &&
        (0, Q.jsxs)(`div`, {
          className: `bad`,
          children: [`Stopped after `, e.done, ` of `, o, `: `, e.error],
        }),
      a.better.length > 0 &&
        (0, Q.jsx)(`div`, {
          className: `muted`,
          children:
            a.better.length === 1
              ? (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    f(a.better[0]),
                    ` would score higher, but it's `,
                    h(a.better[0]),
                    `, and Equip best leaves Named and Hollowed items to you. Pick its name to pin it, and press Wear to put it on.`,
                  ],
                })
              : (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    p(a.better),
                    m(a.better),
                    ` would score higher, but Equip best leaves Named and Hollowed items to you. Pick one's name to pin it, and press Wear to put it on.`,
                  ],
                }),
        }),
      !o &&
        !a.skipped.length &&
        (0, Q.jsx)(`div`, {
          className: `muted`,
          children: a.pool
            ? a.better.length
              ? `Of the rest, you're already wearing your best.`
              : `You're already wearing your best.`
            : g.length
              ? (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    g.length === 1
                      ? (0, Q.jsxs)(Q.Fragment, {
                          children: [
                            f(g[0]),
                            ` needs level `,
                            pa(g[0].ilvl),
                            F5(g[0])
                              ? `, and it's ${h(g[0])}: Equip best leaves Named and Hollowed items to you.`
                              : `.`,
                          ],
                        })
                      : (0, Q.jsxs)(Q.Fragment, {
                          children: [
                            p(g),
                            m(g),
                            ` need a higher level (from level `,
                            pa(g[0].ilvl),
                            `).`,
                          ],
                        }),
                    a.kept > a.better.length
                      ? ` Equip best leaves your Named and Hollowed gear to you.`
                      : ``,
                    a.better.length
                      ? ``
                      : ` Nothing else here fits a slot at your level.`,
                  ],
                })
              : a.kept
                ? a.better.length
                  ? `Nothing else here fits a slot at your level.`
                  : `Named and Hollowed gear is left to you; nothing else here fits a slot at your level.`
                : `Nothing in your satchel fits a slot at your level.`,
        }),
    ],
  });
}
function S7({ mats: e }) {
  return (0, Q.jsx)(`div`, {
    className: `pouch`,
    children: [`crowns`, `dust`, `shards`, `motes`, `chips`].map((t) =>
      (0, Q.jsxs)(
        `div`,
        {
          className: `reag`,
          title: so[t].desc,
          children: [
            (0, Q.jsx)(`img`, { className: `pixel`, alt: ``, src: r7(OY(t)) }),
            (0, Q.jsx)(`b`, { children: i7(e[t]) }),
            (0, Q.jsx)(`span`, { children: so[t].name }),
          ],
        },
        t,
      ),
    ),
  });
}
function Hle({ inv: e, actions: t }) {
  let n = e.quiver ?? {};
  return !Na.some((e) => (n[e] ?? 0) > 0) && !(e.kits ?? 0)
    ? null
    : (0, Q.jsxs)(`div`, {
        className: `quiver`,
        "aria-label": `Quiver`,
        children: [
          Na.map((e) => {
            let r = Pa[e],
              i = n[e] ?? 0,
              a = n.loaded === e;
            return (0, Q.jsxs)(
              `button`,
              {
                className: `reag arrows${a ? ` on` : ``}`,
                title: `${r.name}: ${r.desc}${a ? ` Loaded: press for plain arrows.` : i ? ` Press to load.` : ``}`,
                disabled: !t.loadQuiver || (!i && !a),
                "aria-pressed": a,
                onClick: () => void t.loadQuiver?.(a ? `` : e),
                children: [
                  (0, Q.jsx)(`img`, {
                    className: `pixel`,
                    alt: ``,
                    src: r7(MY(r.color, r.spark)),
                  }),
                  (0, Q.jsx)(`b`, { children: i7(i) }),
                  (0, Q.jsxs)(`span`, {
                    children: [r.name, a ? ` · loaded` : ``],
                  }),
                ],
              },
              e,
            );
          }),
          (0, Q.jsxs)(`div`, {
            className: `reag`,
            title: `Repair kits mend one worn or broken weapon, shield, staff or wand, anywhere.`,
            children: [
              (0, Q.jsx)(`img`, { className: `pixel`, alt: ``, src: r7(jY()) }),
              (0, Q.jsx)(`b`, { children: i7(e.kits ?? 0) }),
              (0, Q.jsx)(`span`, { children: `Repair kits` }),
            ],
          }),
        ],
      });
}
var Ule = 450;
