// index-BTsv3a2s 277 — children
// Lines 170008-170674 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function ode({
  shop: e,
  trade: t,
  keeper: n,
  greeting: r,
  level: i,
  school: a,
  spells: o,
  inv: s,
  provisions: c,
  onBuy: l,
  onSell: u,
  onBuySeeds: d,
  onRead: f,
  onRepair: p,
  onClose: m,
}) {
  (l5(m), u5(5e3));
  let h = s?.mats,
    g = s?.satchel ?? 0,
    _ = s?.bag ?? [],
    y = _.filter((e) => e.base === `spellbook` && e.spell),
    b = y.map((e) => e.spell),
    x = {
      level: i,
      school: a,
      spells: o,
      satchel: g,
      chips: h?.chips ?? 0,
      bagCount: _.length,
      carrying: b,
      kits: s?.kits ?? 0,
      quiver: s?.quiver,
    },
    C = tde(t, x),
    w = a9.kit.includes(t)
      ? [...(s?.worn ?? []), ..._]
          .map((e) => ({ doc: e, item: t7(e) }))
          .filter(({ item: e }) => Ra(e) && (e.wear ?? 0) > 0)
          .sort((e, t) => Number(Ba(t.item)) - Number(Ba(e.item)))
      : [],
    T = c?.goods ?? {},
    E = c?.market ?? {},
    D = Date.now(),
    O = vt
      .filter((e) => (T[e] ?? 0) > 0 && vn(e, t) > 0)
      .sort((e, t) => h9.indexOf(_t[e].kind) - h9.indexOf(_t[t].kind)),
    k = ft.filter((e) => Cn(e, t)),
    ee = C.length > 0 || k.length > 0,
    [te] = (0, v.useState)(() =>
      C.length || (k.length && !O.length) ? `buy` : `sell`,
    ),
    [ne, re] = (0, v.useState)(te),
    [ie, ae] = (0, v.useState)(!1),
    oe = (0, v.useRef)(!1),
    se = (e) => {
      oe.current ||
        ((oe.current = !0),
        ae(!0),
        Promise.resolve()
          .then(e)
          .catch(() => null)
          .finally(() => {
            ((oe.current = !1), ae(!1));
          }));
    },
    ce = `${i}:${g}:${g9.map((e) => h?.[e] ?? 0).join(`,`)}:${s?.kits ?? 0}:${JSON.stringify(s?.quiver ?? {})}`,
    [le, ue] = (0, v.useState)(() => x9),
    de = (e) => {
      ((x9 = e), ue(e));
    },
    fe = (0, v.useRef)(0),
    [pe, me] = (0, v.useState)(!1);
  (0, v.useEffect)(() => {
    if (!pe) return;
    let e = window.setTimeout(() => me(!1), b9);
    return () => window.clearTimeout(e);
  }, [pe]);
  let he = () => {
      ((fe.current = performance.now() + b9), me(!0));
    },
    ge = (e) => e.detail > 1 || performance.now() < fe.current,
    _e = (e) => (t) => {
      ge(t) ||
        se(async () => {
          try {
            await e();
          } finally {
            he();
          }
        });
    },
    ve = ie || pe,
    ye = (e) => {
      (re(e), (fe.current = 0), me(!1));
    };
  return (0, Q.jsxs)(`div`, {
    className: `home-panel market shop panel`,
    "data-trade": t,
    onMouseDown: (e) => e.stopPropagation(),
    children: [
      (0, Q.jsxs)(`div`, {
        className: `hp-head`,
        children: [
          (0, Q.jsxs)(`div`, {
            children: [
              (0, Q.jsx)(`b`, { children: e }),
              (0, Q.jsxs)(`small`, {
                children: [
                  n ? `${n} · ` : ``,
                  vn(`sludge`, t) > 0 || t === `bag`
                    ? `Buys most things`
                    : `Trades in what it knows`,
                ],
              }),
              (0, Q.jsx)(`span`, {
                className: `sh-pouch`,
                "aria-label": `Your pouch`,
                children: nde.map((e) =>
                  (0, Q.jsxs)(
                    `span`,
                    {
                      className: `sh-reag`,
                      title: y9(e),
                      "data-reagent": e,
                      children: [
                        (0, Q.jsx)(`img`, {
                          className: `pixel`,
                          alt: y9(e),
                          src: v9(`reagent:${e}`, () => OY(e)),
                          width: 16,
                          height: 16,
                        }),
                        (0, Q.jsx)(`b`, { children: h?.[e] ?? 0 }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            ],
          }),
          (0, Q.jsx)(`button`, {
            className: `link-btn hp-x`,
            "aria-label": `Close`,
            onClick: m,
            children: `✕`,
          }),
        ],
      }),
      r && (0, Q.jsxs)(`p`, { className: `sh-greet`, children: [`“`, r, `”`] }),
      (0, Q.jsxs)(`div`, {
        className: `tabs`,
        role: `tablist`,
        children: [
          (0, Q.jsxs)(`button`, {
            role: `tab`,
            "aria-selected": ne === `buy`,
            className: ne === `buy` ? `on` : ``,
            disabled: !ee,
            "data-pad-first": (te === `buy` && ee) || void 0,
            onClick: () => ye(`buy`),
            children: [`Buy`, ee ? `` : ` (nothing here)`],
          }),
          (0, Q.jsx)(`button`, {
            role: `tab`,
            "aria-selected": ne === `sell`,
            className: ne === `sell` ? `on` : ``,
            "data-pad-first": te === `sell` || !ee || void 0,
            onClick: () => ye(`sell`),
            children: `Sell`,
          }),
        ],
      }),
      ne === `buy` &&
        C.map((e) => {
          let n =
            e.kind === `satchel` && e.bought
              ? null
              : (e.blocker ??
                (le && le.offer === e.offer && le.at === ce ? le.why : null));
          if (e.kind === `chip`) {
            let t = ade(h, e.cost),
              r = (t) =>
                _e(async () => {
                  let n = await l(e.offer, t);
                  n && de({ offer: e.offer, why: n, at: ce });
                });
            return (0, Q.jsxs)(
              `div`,
              {
                className: `mk-row sh-offer`,
                "data-offer": e.offer,
                "data-kind": `chip`,
                children: [
                  (0, Q.jsx)(`img`, {
                    className: `pixel`,
                    src: v9(`reagent:chips`, () => OY(`chips`)),
                    width: 28,
                    height: 28,
                    alt: ``,
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `mk-body`,
                    children: [
                      (0, Q.jsx)(`b`, { children: `Ward-stone Chip` }),
                      (0, Q.jsx)(S9, {
                        cost: e.cost,
                        mats: h,
                        now: !e.blocker,
                        each: !0,
                      }),
                      (0, Q.jsxs)(`small`, {
                        className: `muted`,
                        children: [
                          `Keeps a failed Kindling to +8, +9 or +10 from costing a level · you hold `,
                          e.held,
                        ],
                      }),
                      !e.blocker &&
                        t.n > 0 &&
                        t.n < Math.max(...i9) &&
                        (0, Q.jsxs)(`small`, {
                          className: `sh-afford`,
                          children: [
                            `Enough `,
                            rde(t.first.map(y9)),
                            ` for `,
                            t.n,
                            `.`,
                          ],
                        }),
                      n &&
                        !e.blocker &&
                        (0, Q.jsx)(`small`, {
                          className: `sh-why`,
                          children: n,
                        }),
                    ],
                  }),
                  e.blocker
                    ? (0, Q.jsx)(`span`, {
                        className: `sh-note why`,
                        children: e.blocker,
                      })
                    : i9.map((t) => {
                        let n = p9(e.offer, t);
                        return (0, Q.jsxs)(
                          `button`,
                          {
                            className: `hbtn`,
                            "data-lot": t,
                            "data-wait": ve || void 0,
                            "aria-busy": ve || void 0,
                            title: n ? `${t} for ${G7(n)}` : void 0,
                            disabled: !n || !C9(h, n),
                            onClick: r(t),
                            children: [`×`, t],
                          },
                          t,
                        );
                      }),
                ],
              },
              `chip`,
            );
          }
          if (e.kind === `kit` || e.kind === `arrows`) {
            let r = (e.kind, [1, 5]),
              i = e.kind === `arrows` ? Pa[e.arrow] : null,
              a = (t) =>
                _e(async () => {
                  let n = await l(e.offer, t);
                  n && de({ offer: e.offer, why: n, at: ce });
                });
            return (0, Q.jsxs)(
              `div`,
              {
                className: `mk-row sh-offer`,
                "data-offer": e.offer,
                "data-kind": e.kind,
                children: [
                  (0, Q.jsx)(`img`, {
                    className: `pixel`,
                    src: i
                      ? v9(`arrows:${i.name}`, () => MY(i.color, i.spark))
                      : v9(`kit`, jY),
                    width: 28,
                    height: 28,
                    alt: ``,
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `mk-body`,
                    children: [
                      (0, Q.jsx)(`b`, {
                        children: i ? `${i.name} (20)` : `Repair kit`,
                      }),
                      (0, Q.jsx)(S9, {
                        cost: e.cost,
                        mats: h,
                        now: !e.blocker,
                        each: !0,
                      }),
                      (0, Q.jsxs)(`small`, {
                        className: `muted`,
                        children: [
                          i
                            ? i.desc
                            : `Mends one worn or broken weapon, shield, staff or wand, anywhere.`,
                          ` · you hold `,
                          e.held,
                        ],
                      }),
                      n &&
                        !e.blocker &&
                        (0, Q.jsx)(`small`, {
                          className: `sh-why`,
                          children: n,
                        }),
                    ],
                  }),
                  e.blocker
                    ? (0, Q.jsx)(`span`, {
                        className: `sh-note why`,
                        children: e.blocker,
                      })
                    : r.map((n) => {
                        let r = p9(e.offer, n),
                          i = m9(e.offer, n, t, x);
                        return (0, Q.jsxs)(
                          `button`,
                          {
                            className: `hbtn`,
                            "data-lot": n,
                            "data-wait": ve || void 0,
                            "aria-busy": ve || void 0,
                            title: i ?? (r ? `${n} for ${G7(r)}` : void 0),
                            disabled: !r || !!i || !C9(h, r),
                            onClick: a(n),
                            children: [`×`, n],
                          },
                          n,
                        );
                      }),
                ],
              },
              i ? `arrows:${e.offer.split(`:`)[1]}` : `kit`,
            );
          }
          if (e.kind === `book`) {
            let t = Se(e.spell),
              r = e.carried ? y.find((t) => t.spell === e.spell) : void 0;
            return (0, Q.jsxs)(
              `div`,
              {
                className: `mk-row sh-offer`,
                "data-offer": e.offer,
                "data-kind": `book`,
                children: [
                  (0, Q.jsx)(`img`, {
                    className: `pixel`,
                    src: v9(`book:${e.spell}`, () =>
                      FY(bo(() => 0, e.spell, l9(e.spell))),
                    ),
                    width: 28,
                    height: 28,
                    alt: ``,
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `mk-body`,
                    children: [
                      (0, Q.jsx)(`b`, { children: t?.name ?? e.spell }),
                      !r &&
                        (0, Q.jsx)(S9, {
                          cost: e.cost,
                          mats: h,
                          now: !e.blocker,
                        }),
                      (0, Q.jsxs)(`small`, {
                        className: `muted`,
                        children: [
                          S[xe[e.spell]]?.name,
                          ` `,
                          ide[e.tier],
                          ` ·`,
                          ` `,
                          r
                            ? `In your satchel. Read it before you leave the Ward: if another mage slays you, an unread book falls with your satchel.`
                            : t?.desc,
                        ],
                      }),
                    ],
                  }),
                  r
                    ? (0, Q.jsx)(`button`, {
                        className: `hbtn primary`,
                        "data-wait": ve || void 0,
                        "aria-busy": ve || void 0,
                        onClick: _e(() => f(r._id)),
                        children: `Read`,
                      })
                    : n
                      ? (0, Q.jsx)(`span`, {
                          className: `sh-note why`,
                          children: n,
                        })
                      : (0, Q.jsx)(`button`, {
                          className: `hbtn primary`,
                          "data-wait": ve || void 0,
                          "aria-busy": ve || void 0,
                          disabled: !ie && !C9(h, e.cost),
                          onClick: _e(async () => {
                            let t = await l(e.offer);
                            t && de({ offer: e.offer, why: t, at: ce });
                          }),
                          children: `Buy`,
                        }),
                ],
              },
              e.offer,
            );
          }
          return (0, Q.jsxs)(
            `div`,
            {
              className: `mk-row sh-offer${e.bought ? ` bought` : ``}`,
              "data-offer": e.offer,
              children: [
                (0, Q.jsx)(`img`, {
                  className: `pixel`,
                  src: v9(`satchel`, AY),
                  width: 28,
                  height: 28,
                  alt: ``,
                }),
                (0, Q.jsxs)(`div`, {
                  className: `mk-body`,
                  children: [
                    (0, Q.jsxs)(`b`, {
                      children: [`Satchel row `, e.row, ` of `, t9.length],
                    }),
                    e.bought
                      ? (0, Q.jsx)(`small`, {
                          className: `muted`,
                          children: `Yours for good: a death can't take it.`,
                        })
                      : (0, Q.jsx)(S9, {
                          cost: e.cost,
                          mats: h,
                          now: !e.blocker,
                        }),
                    (0, Q.jsxs)(`small`, {
                      className: `muted`,
                      children: [
                        6,
                        ` more slots: `,
                        n9(e.row - 1),
                        ` → `,
                        n9(e.row),
                      ],
                    }),
                  ],
                }),
                e.bought
                  ? (0, Q.jsx)(`span`, {
                      className: `sh-note`,
                      children: `Bought`,
                    })
                  : n
                    ? (0, Q.jsx)(`span`, {
                        className: `sh-note why`,
                        children: n,
                      })
                    : (0, Q.jsx)(`button`, {
                        className: `hbtn primary`,
                        disabled: ie || !C9(h, e.cost),
                        onClick: () =>
                          se(async () => {
                            let t = await l(e.offer);
                            t && de({ offer: e.offer, why: t, at: ce });
                          }),
                        children: `Buy`,
                      }),
              ],
            },
            e.offer,
          );
        }),
      ne === `buy` &&
        w.length > 0 &&
        (0, Q.jsx)(`h3`, { className: `sh-h`, children: `Mend` }),
      ne === `buy` &&
        p &&
        w.map(({ doc: e, item: t }) => {
          let n = Va(t),
            r = za(t),
            i = Ba(t);
          return (0, Q.jsxs)(
            `div`,
            {
              className: `mk-row sh-offer${i ? ` broken` : ``}`,
              "data-kind": `mend`,
              "data-item": e._id,
              children: [
                (0, Q.jsx)(`img`, {
                  className: `pixel`,
                  src: v9(`item:${e._id}:${t.wear}`, () => FY(t)),
                  width: 28,
                  height: 28,
                  alt: ``,
                }),
                (0, Q.jsxs)(`div`, {
                  className: `mk-body`,
                  children: [
                    (0, Q.jsx)(`b`, { children: Xa(t) }),
                    (0, Q.jsx)(S9, { cost: n, mats: h, now: !0 }),
                    (0, Q.jsxs)(`small`, {
                      className: `muted`,
                      children: [
                        i
                          ? `Broken: it gives nothing until it's mended`
                          : `Durability ${r - (t.wear ?? 0)} of ${r}`,
                        ` · `,
                        e.where === `equipped` ? `worn` : `in your satchel`,
                      ],
                    }),
                  ],
                }),
                (0, Q.jsx)(`button`, {
                  className: `hbtn primary`,
                  "data-wait": ve || void 0,
                  "aria-busy": ve || void 0,
                  disabled: !C9(h, n),
                  onClick: _e(() => p(e._id)),
                  children: `Mend`,
                }),
              ],
            },
            `mend:${e._id}`,
          );
        }),
      ne === `buy` &&
        C.length > 0 &&
        k.length > 0 &&
        (0, Q.jsx)(`h3`, { className: `sh-h`, children: `Seeds` }),
      ne === `buy` &&
        k.map((e) => {
          let n = Cn(e, t),
            r = T[`seed:${e}`] ?? 0,
            i = 40 - r,
            a = (e) =>
              (h?.crowns ?? 0) >= n.crowns * e &&
              (h?.dust ?? 0) >= n.dust * e &&
              i >= e;
          return (0, Q.jsxs)(
            `div`,
            {
              className: `mk-row`,
              children: [
                (0, Q.jsx)(J7, { id: `seed:${e}`, size: 28 }),
                (0, Q.jsxs)(`div`, {
                  className: `mk-body`,
                  children: [
                    (0, Q.jsxs)(`b`, { children: [dt[e].name, ` Seeds`] }),
                    (0, Q.jsxs)(`small`, {
                      className: `muted`,
                      children: [
                        G7({ crowns: n.crowns, dust: n.dust }),
                        ` each · `,
                        dt[e].growMin,
                        ` min · you have `,
                        r,
                      ],
                    }),
                  ],
                }),
                [1, 5, 10].map((t) =>
                  (0, Q.jsxs)(
                    `button`,
                    {
                      className: `hbtn`,
                      "data-lot": t,
                      "data-wait": ve || void 0,
                      "aria-busy": ve || void 0,
                      disabled: !a(t),
                      onClick: _e(() => d(e, t)),
                      children: [`×`, t],
                    },
                    t,
                  ),
                ),
              ],
            },
            e,
          );
        }),
      ne === `sell` &&
        (O.length
          ? O.map((e) => {
              let n = T[e],
                r = Sn(e, t, 1, E[e], D),
                i = Sn(e, t, n, E[e], D),
                a = bn(E[e], D).n,
                o = vn(e, t);
              return (0, Q.jsxs)(
                `div`,
                {
                  className: `mk-row`,
                  children: [
                    (0, Q.jsx)(J7, { id: e, size: 28 }),
                    (0, Q.jsxs)(`div`, {
                      className: `mk-body`,
                      children: [
                        (0, Q.jsx)(`b`, { children: _t[e].name }),
                        (0, Q.jsxs)(`small`, {
                          className: `muted`,
                          children: [
                            `× `,
                            n,
                            ` · `,
                            r?.crowns ?? 0,
                            ` each`,
                            o < 100 ? ` (${o}% here)` : ``,
                            a > 10 ? ` · glutted: ${xn(a)}%` : ``,
                          ],
                        }),
                      ],
                    }),
                    (0, Q.jsx)(`button`, {
                      className: `hbtn`,
                      "data-wait": ve || void 0,
                      "aria-busy": ve || void 0,
                      onClick: _e(() => u(e, 1)),
                      children: `Sell 1`,
                    }),
                    (0, Q.jsxs)(`button`, {
                      className: `hbtn`,
                      "data-wait": ve || void 0,
                      "aria-busy": ve || void 0,
                      onClick: _e(() => u(e, n)),
                      children: [`All · `, i?.crowns ?? 0],
                    }),
                  ],
                },
                e,
              );
            })
          : (0, Q.jsxs)(`p`, {
              className: `hp-lore`,
              children: [
                c
                  ? `Nothing you carry is wanted here.`
                  : `Looking through your Provisions…`,
                ` `,
                c && t !== `bag`
                  ? `General Goods buys anything, for less.`
                  : ``,
              ],
            })),
      ne === `sell` &&
        (0, Q.jsx)(`p`, {
          className: `muted small`,
          children: `Selling a lot of one thing at once fetches less: the price comes back over the next hours.`,
        }),
    ],
  });
}
