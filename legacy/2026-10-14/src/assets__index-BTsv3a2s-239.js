// assets__index-BTsv3a2s 239 — children
// Lines 158246-159144 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Sce({
  school: e,
  level: t,
  passives: n,
  known: r,
  onAllocate: i,
  onRefund: a,
  onReset: o,
  onError: s,
  error: c,
  ref: l,
}) {
  let u = (0, v.useMemo)(() => qu(n), [n]),
    d = (0, v.useMemo)(() => new Set([Nu, ...u]), [u]),
    f = (0, v.useRef)(null),
    p = (0, v.useRef)(null),
    [m, h] = (0, v.useState)({}),
    [g, _] = (0, v.useState)({ w: 0, h: 0 }),
    [y, b] = (0, v.useState)(null),
    [x, S] = (0, v.useState)(() => u.at(-1) ?? `heart`),
    [C, w] = (0, v.useState)(!1),
    [T, E] = (0, v.useState)(null),
    [D, O] = (0, v.useState)(!1),
    [k, ee] = (0, v.useState)(null),
    te = Zu(t, u),
    ne = J8(),
    re = (0, v.useRef)(null),
    [ie, ae] = (0, v.useState)(0),
    oe = (0, v.useRef)(null),
    se = (0, v.useRef)(null),
    ce = (0, v.useRef)(!0),
    le = (e) => {
      ((oe.current = e), b(e));
    },
    ue = (0, v.useRef)(1),
    de = () => ue.current,
    fe = () => {
      let e = f.current;
      return e
        ? [...e.querySelectorAll(`.ptree-tools, .ptree-zoom`)].map((e) => ({
            x: e.offsetLeft,
            y: e.offsetTop,
            w: e.offsetWidth,
            h: e.offsetHeight,
          }))
        : [];
    },
    pe = (e, t) => {
      let n = cce(e, t, fe());
      return ((ue.current = n.k), n);
    };
  ((0, v.useEffect)(() => {
    let e = f.current;
    if (!e) return;
    let t = () => {
      let t = e.clientWidth,
        n = e.clientHeight;
      if (!t || !n) return;
      let r = se.current;
      if (r && r.w === t && r.h === n) return;
      ((se.current = { w: t, h: n }), _({ w: t, h: n }));
      let i = oe.current,
        a = pe(t, n);
      le(!i || !r || ce.current ? a : uce(i, r.w, r.h, t, n));
    };
    t();
    let n = new ResizeObserver(t);
    return (n.observe(e), () => n.disconnect());
  }, []),
    (0, v.useEffect)(() => {
      let e = f.current;
      if (!e) return;
      let t = (t) => {
        let n = oe.current,
          r = se.current;
        if (!n || !r) return;
        t.preventDefault();
        let i = i5(e, t);
        ((ce.current = !1),
          le(
            W8(
              n,
              U8(
                n.k * lce(t.deltaY, t.deltaMode, t.ctrlKey, e.clientHeight),
                de(),
              ),
              i.x,
              i.y,
            ),
          ));
      };
      return (
        e.addEventListener(`wheel`, t, { passive: !1 }),
        () => e.removeEventListener(`wheel`, t)
      );
    }, []));
  let me = (0, v.useRef)(new Map()),
    he = (0, v.useRef)(null),
    ge = (e) => {
      let t = oe.current;
      if (!t || q8(e.target) || (e.pointerType === `mouse` && e.button !== 0))
        return;
      (e.currentTarget.setPointerCapture(e.pointerId),
        me.current.set(e.pointerId, i5(e.currentTarget, e)));
      let n = [...me.current.values()];
      if (n.length >= 2) {
        let [e, r] = n;
        ((he.current = {
          kind: `pinch`,
          start: t,
          d0: Math.max(1, Math.hypot(e.x - r.x, e.y - r.y)),
          mx0: (e.x + r.x) / 2,
          my0: (e.y + r.y) / 2,
        }),
          (ce.current = !1));
      } else
        he.current = {
          kind: `drag`,
          id: e.pointerId,
          start: t,
          ax: n[0].x,
          ay: n[0].y,
          moved: !1,
        };
    },
    _e = (e) => {
      if (!me.current.has(e.pointerId)) {
        let t = oe.current;
        if (e.pointerType !== `mouse` || !t || me.current.size || q8(e.target))
          return E(null);
        let n = i5(e.currentTarget, e),
          r = G8(t, n.x, n.y);
        E(r ? { id: r, x: n.x, y: n.y } : null);
        return;
      }
      E(null);
      let t = i5(e.currentTarget, e);
      me.current.set(e.pointerId, t);
      let n = he.current;
      if (!n) return;
      if (n.kind === `pinch`) {
        let [e, t] = [...me.current.values()];
        if (!t) return;
        let r = U8((n.start.k * Math.hypot(e.x - t.x, e.y - t.y)) / n.d0, de()),
          i = W8(n.start, r, n.mx0, n.my0);
        le({
          k: r,
          x: i.x + (e.x + t.x) / 2 - n.mx0,
          y: i.y + (e.y + t.y) / 2 - n.my0,
        });
        return;
      }
      if (e.pointerId !== n.id) return;
      let r = t.x - n.ax,
        i = t.y - n.ay;
      (!n.moved && Math.hypot(r, i) > 6 && ((n.moved = !0), (ce.current = !1)),
        n.moved && le({ ...n.start, x: n.start.x + r, y: n.start.y + i }));
    },
    ve = (e) => {
      if (!me.current.has(e.pointerId)) return;
      me.current.delete(e.pointerId);
      let t = he.current,
        n = oe.current;
      if (me.current.size > 0) {
        let [[e, t]] = [...me.current.entries()];
        he.current = n
          ? { kind: `drag`, id: e, start: n, ax: t.x, ay: t.y, moved: !0 }
          : null;
        return;
      }
      if (
        ((he.current = null),
        e.type !== `pointerup` || !n || t?.kind !== `drag` || t.moved)
      )
        return;
      let r = i5(e.currentTarget, e),
        i = G8(n, r.x, r.y);
      i && i === x ? Se(i) : ye(i);
    },
    ye = (e) => {
      (e !== x && s(null), S(e), O(!1), e && ee(null));
    },
    be = (e) => {
      let t = oe.current,
        n = se.current;
      t &&
        n &&
        ((ce.current = !1), le(W8(t, U8(t.k * e, de()), n.w / 2, n.h / 2)));
    },
    xe = () => {
      let e = se.current;
      e && ((ce.current = !0), le(pe(e.w, e.h)));
    };
  (0, v.useImperativeHandle)(
    l,
    () => ({
      zoomBy: be,
      fit: xe,
      escape: () =>
        D
          ? (O(!1), !0)
          : x && (x !== re.current || aZ().device !== `pad`)
            ? (S(null), !0)
            : !1,
    }),
    [D, x],
  );
  let Se = async (e) => {
      let t = n5(u, e);
      if (C || !t || t.length === 0) return;
      let n = t5(t.length, te);
      if (n) {
        (s(n), q.sfx(`click`, 0.4));
        return;
      }
      (w(!0), s(null));
      try {
        for (let e of t) await i(e);
        q.sfx(`chime`, 0.8);
      } catch (e) {
        s(r5(e));
      } finally {
        w(!1);
      }
    },
    Ce = async (e) => {
      if (C) return;
      let t = ed(u, e);
      if (t) return s(t);
      w(!0);
      try {
        (await a(e), s(null));
      } catch (e) {
        s(r5(e));
      } finally {
        w(!1);
      }
    },
    we = async () => {
      if (!C) {
        (w(!0), s(null));
        try {
          (await o(), O(!1), ee(Yu(t)), q.sfx(`chime`, 0.8));
        } catch (e) {
          (s(r5(e)), q.sfx(`click`, 0.4));
        } finally {
          w(!1);
        }
      }
    },
    Te = (0, v.useMemo)(
      () =>
        new Set(
          Hu.nodes
            .filter((e) => !d.has(e.id) && Ku(e.id).some((e) => d.has(e)))
            .map((e) => e.id),
        ),
      [d],
    ),
    Ee = (0, v.useMemo)(
      () => (ne.device === `pad` ? eZ(Te) : []),
      [ne.device, Te],
    ),
    De = (e) => {
      let t = Gu(e),
        n = oe.current,
        r = se.current;
      ((re.current = e),
        ae(Math.max(0, Ee.indexOf(e))),
        ye(e),
        t && n && r && ((ce.current = !1), le(K8(n, r.w, r.h, t.x, t.y))));
    },
    Oe = x ? Gu(x) : void 0,
    ke = Oe && !d.has(Oe.id) ? n5(u, Oe.id) : null,
    Ae = new Set(ke ?? []),
    je = Oe && d.has(Oe.id) && Oe.id !== `heart` ? ed(u, Oe.id) : null,
    Me = ke && ke.length ? t5(ke.length, te) : null,
    Ne = u.length,
    Pe = Ne > 0;
  ((0, v.useLayoutEffect)(() => {
    let e = p.current;
    if (!e) return;
    let t = {};
    for (let n of e.querySelectorAll(`.arc-branch:not(.edge)`))
      t[n.dataset.region ?? ``] = n.offsetWidth;
    Object.entries(t).some(([e, t]) => m[e] !== t) &&
      h((e) => ({ ...e, ...t }));
  }),
    (0, v.useLayoutEffect)(() => {
      let e = se.current;
      if (!e) return;
      let t = pe(e.w, e.h);
      ce.current && le(t);
    }, [Pe]));
  let Fe = y ? L8(y.k) : 15,
    Ie = (0, v.useMemo)(() => (y ? z8(y, g.w) : null), [y, g.w]),
    Le = c && c !== Me ? c : null,
    Re = Qu(e, u),
    ze = ke?.length ? Qu(e, [...u, ...ke]) : Re,
    Be = r.filter((e) => rd[e] && id(e, Re) < 10 && id(e, ze) >= 10),
    Ve = (e) =>
      Au[e.region] || e.region === `warden` || e.region === `heart`
        ? e.region
        : (Object.keys(e.attrs)[0] ?? `heart`),
    He = (e) => {
      let t = Gu(e),
        n = oe.current,
        r = se.current;
      t &&
        n &&
        r &&
        ((ce.current = !1),
        ye(e),
        le(K8({ ...n, k: Math.max(n.k, 0.7) }, r.w, r.h, t.x, t.y)));
    };
  return (0, Q.jsxs)(`div`, {
    className: `ptree firmament-layout`,
    children: [
      (0, Q.jsxs)(`div`, {
        className: `firmament-chart`,
        children: [
          (0, Q.jsxs)(`header`, {
            className: `firmament-heading`,
            children: [
              (0, Q.jsxs)(`div`, {
                children: [
                  (0, Q.jsx)(`p`, {
                    className: `arc-eyebrow`,
                    children: `Constellations of the self`,
                  }),
                  (0, Q.jsx)(`p`, {
                    children: `Trace the person you are becoming.`,
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `arc-point-seal`,
                children: [
                  (0, Q.jsx)(`strong`, { children: te }),
                  (0, Q.jsxs)(`span`, {
                    children: [`Points`, (0, Q.jsx)(`br`, {}), `unspent`],
                  }),
                ],
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            ref: f,
            className: `ptree-map firmament-map`,
            onPointerDown: ge,
            onPointerMove: _e,
            onPointerUp: ve,
            onPointerCancel: ve,
            onPointerLeave: () => E(null),
            children: [
              y &&
                (0, Q.jsx)(`svg`, {
                  width: g.w,
                  height: g.h,
                  role: `img`,
                  "aria-label": `Passive skill constellations. Use the inspector to select any passive with a keyboard.`,
                  children: (0, Q.jsxs)(`g`, {
                    transform: `translate(${y.x} ${y.y}) scale(${y.k})`,
                    children: [
                      (0, Q.jsx)(wce, {}),
                      Hu.links.map(([e, t]) => {
                        let n = Gu(e),
                          r = Gu(t),
                          i = d.has(e) && d.has(t),
                          a =
                            (d.has(e) && Te.has(t)) || (d.has(t) && Te.has(e)),
                          o =
                            (Ae.has(e) || d.has(e)) &&
                            (Ae.has(t) || d.has(t)) &&
                            !i;
                        return (0, Q.jsx)(
                          `line`,
                          {
                            x1: n.x,
                            y1: n.y,
                            x2: r.x,
                            y2: r.y,
                            className: `pl ${i ? `lit` : o ? `plan` : a ? `next` : ``}`,
                          },
                          `${e}-${t}`,
                        );
                      }),
                      Hu.nodes.map((e) => {
                        let t = d.has(e.id)
                            ? `taken`
                            : Ae.has(e.id)
                              ? `plan`
                              : Te.has(e.id)
                                ? `open`
                                : `shut`,
                          n = I8[e.kind];
                        return (0, Q.jsxs)(
                          `g`,
                          {
                            "data-node": e.id,
                            className: `pn ${e.kind} ${t} ${x === e.id ? `sel` : ``}`,
                            transform: `translate(${e.x} ${e.y})`,
                            children: [
                              (0, Q.jsxs)(`title`, {
                                children: [
                                  e.name,
                                  ` · `,
                                  t === `taken`
                                    ? `woven`
                                    : t === `open`
                                      ? `within reach`
                                      : `unwoven`,
                                ],
                              }),
                              (e.kind === `keystone` || x === e.id) &&
                                (0, Q.jsx)(`circle`, {
                                  r: n + 6,
                                  className: `halo`,
                                }),
                              (0, Q.jsx)(`circle`, { r: n, className: `body` }),
                              e.kind === `minor`
                                ? (0, Q.jsx)(`circle`, {
                                    r: `2`,
                                    className: `core`,
                                  })
                                : (0, Q.jsx)(`use`, {
                                    className: `arc-node-glyph`,
                                    href: `#arc-${Ve(e)}`,
                                    x: -n * 0.78,
                                    y: -n * 0.78,
                                    width: n * 1.56,
                                    height: n * 1.56,
                                  }),
                              e.kind === `keystone` &&
                                (0, Q.jsx)(`text`, {
                                  x: Ie?.get(e.id) ?? 0,
                                  y: I8.keystone + 1 + Fe,
                                  className: `lbl`,
                                  style: {
                                    fontSize: Fe,
                                    strokeWidth: (4 * Fe) / 15,
                                  },
                                  children: e.name,
                                }),
                              e.kind === `notable` &&
                                (y.k > 0.75 || x === e.id) &&
                                (0, Q.jsx)(`text`, {
                                  y: -I8.notable - 12,
                                  className: `lbl`,
                                  style: { fontSize: Math.max(13, 10 / y.k) },
                                  children: e.name,
                                }),
                            ],
                          },
                          e.id,
                        );
                      }),
                    ],
                  }),
                }),
              y &&
                (0, Q.jsx)(`nav`, {
                  ref: p,
                  className: `arc-branches`,
                  "aria-label": `Branches`,
                  children: vce.map((e) => {
                    let t = Math.abs(Math.sin(e.a)) > 0.6,
                      n = (e.far + yce) * y.k,
                      r = Math.cos(e.a) < -0.1 ? -1 : 1,
                      i = t
                        ? y.x + (e.ex + r * bce) * y.k
                        : y.x + Math.cos(e.a) * n,
                      a = t ? y.y + e.ey * y.k : y.y + Math.sin(e.a) * n,
                      o = i < 0 || a < 0 || i > g.w || a > g.h,
                      s = o
                        ? 2 * e5.x
                        : (m[e.region] ?? e.name.length * 11 + 32) - xce + e5.y,
                      c = o || r > 0 ? e5.y : s,
                      l = o || r < 0 ? g.w - e5.y : g.w - s,
                      u = Math.max(c, Math.min(l, i)),
                      d = Math.max(e5.y, Math.min(g.h - e5.y, a));
                    return (0, Q.jsxs)(
                      `button`,
                      {
                        type: `button`,
                        "aria-label": e.name,
                        "data-region": e.region,
                        className: `arc-branch ${e.region} ${o ? `edge` : r < 0 ? `left` : ``}`,
                        style: { left: u, top: d, "--c": e.color },
                        title: `${e.name}: find it on the chart`,
                        onClick: () => He(e.end),
                        children: [
                          (0, Q.jsx)(`i`, { "aria-hidden": `true` }),
                          (0, Q.jsx)(`span`, { children: e.name }),
                        ],
                      },
                      e.region,
                    );
                  }),
                }),
              y &&
                T &&
                (0, Q.jsx)(Cce, {
                  id: T.id,
                  x: T.x,
                  y: T.y,
                  w: g.w,
                  h: g.h,
                  state: d.has(T.id) ? `taken` : Te.has(T.id) ? `open` : `shut`,
                  road: d.has(T.id) ? 0 : (n5(u, T.id)?.length ?? 0),
                }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `firmament-chart-footer`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `arc-chart-legend`,
                children: [
                  (0, Q.jsx)(`span`, { children: `◆ Woven` }),
                  (0, Q.jsx)(`span`, { children: `◇ Within reach` }),
                  (0, Q.jsx)(`span`, { children: `◌ Unwoven` }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `ptree-zoom`,
                children: [
                  (0, Q.jsx)(`button`, {
                    onClick: () => be(0.8),
                    "aria-label": `Zoom out`,
                    title: `Zoom out (−)`,
                    children: `−`,
                  }),
                  (0, Q.jsx)(`button`, {
                    className: `fit`,
                    onClick: xe,
                    "aria-label": `Fit the whole tree`,
                    title: `Fit the whole tree (0)`,
                    children: `Fit chart`,
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => be(1.25),
                    "aria-label": `Zoom in`,
                    title: `Zoom in (+)`,
                    children: `+`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, Q.jsxs)(`aside`, {
        className: `ptree-card firmament-inspector`,
        "aria-label": `Selected passive`,
        children: [
          (0, Q.jsxs)(`p`, {
            className: `arc-eyebrow`,
            children: [
              `A thread to follow `,
              (0, Q.jsx)(`span`, { "aria-hidden": `true`, children: `✧` }),
            ],
          }),
          (0, Q.jsxs)(`label`, {
            className: `arc-inspect-label`,
            children: [
              `Inspect a passive`,
              (0, Q.jsxs)(`select`, {
                value: x ?? ``,
                onChange: (e) => ye(e.target.value || null),
                children: [
                  (0, Q.jsx)(`option`, {
                    value: ``,
                    children: `Choose a star…`,
                  }),
                  gce.map((e) =>
                    (0, Q.jsx)(
                      `optgroup`,
                      {
                        label:
                          Au[e]?.name ??
                          { heart: `The Heart`, warden: `The Warden` }[e] ??
                          e,
                        children: Hu.nodes
                          .filter((t) => t.region === e)
                          .map((e, t) =>
                            (0, Q.jsxs)(
                              `option`,
                              {
                                value: e.id,
                                children: [
                                  e.name,
                                  e.kind === `minor` ? ` · ${t + 1}` : ``,
                                  d.has(e.id) ? ` · woven` : ``,
                                ],
                              },
                              e.id,
                            ),
                          ),
                      },
                      e,
                    ),
                  ),
                ],
              }),
            ],
          }),
          Le &&
            (0, Q.jsx)(`div`, {
              className: `arc-error`,
              role: `alert`,
              children: Le,
            }),
          D
            ? (0, Q.jsxs)(`div`, {
                className: `arc-node-details`,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: `arc-medallion`,
                    children: (0, Q.jsx)(P8, { name: `heart` }),
                  }),
                  (0, Q.jsx)(`h3`, { children: `Unweave your path?` }),
                  (0, Q.jsxs)(`p`, {
                    children: [
                      `Give back all `,
                      Ne,
                      ` passive`,
                      Ne === 1 ? `` : `s`,
                      ` for `,
                      Ne,
                      ` point`,
                      Ne === 1 ? `` : `s`,
                      `. Your learned spells and prepared bar remain. Maximum health falls by what these passives gave.`,
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `ptree-actions`,
                    children: [
                      (0, Q.jsx)(`button`, {
                        className: `arc-primary`,
                        disabled: C,
                        onClick: () => void we(),
                        children: C ? `Unweaving…` : `Reset tree · free`,
                      }),
                      (0, Q.jsx)(`button`, {
                        className: `arc-quiet`,
                        disabled: C,
                        onClick: () => O(!1),
                        children: `Keep them`,
                      }),
                    ],
                  }),
                ],
              })
            : Oe
              ? (0, Q.jsxs)(`div`, {
                  className: `arc-node-details`,
                  children: [
                    (0, Q.jsx)(`div`, {
                      className: `arc-medallion`,
                      children: (0, Q.jsx)(P8, { name: Ve(Oe) }),
                    }),
                    (0, Q.jsxs)(`p`, {
                      className: `arc-node-kind`,
                      children: [
                        Au[Oe.region]?.name ??
                          (Oe.region === `warden` ? `The Warden` : Oe.region),
                        ` · `,
                        Oe.kind,
                      ],
                    }),
                    (0, Q.jsx)(`h3`, { children: Oe.name }),
                    (0, Q.jsx)(`p`, {
                      className: `arc-node-lore`,
                      children:
                        Au[Oe.region]?.lore ??
                        (Oe.id === `heart`
                          ? `Where every mage begins.`
                          : `One thread leads to another.`),
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `arc-node-benefits`,
                      children: [
                        Tu.filter((e) => Oe.attrs[e]).map((e) =>
                          (0, Q.jsxs)(
                            `div`,
                            {
                              className: `arc-attribute-gain`,
                              children: [
                                (0, Q.jsxs)(`strong`, {
                                  children: [`+`, Oe.attrs[e], ` `, Au[e].name],
                                }),
                                !d.has(Oe.id) &&
                                  (0, Q.jsxs)(`span`, {
                                    children: [Re[e], ` → `, ze[e]],
                                  }),
                              ],
                            },
                            e,
                          ),
                        ),
                        (0, Q.jsx)(`p`, {
                          children: Oe.desc ?? Au[Ve(Oe)]?.desc,
                        }),
                      ],
                    }),
                    Be.length > 0
                      ? (0, Q.jsxs)(`div`, {
                          className: `arc-awakening-preview`,
                          children: [
                            (0, Q.jsx)(`p`, {
                              className: `arc-eyebrow`,
                              children: `This path awakens`,
                            }),
                            Be.map((e) =>
                              (0, Q.jsx)(
                                `p`,
                                { children: rd[e].awaken.name },
                                e,
                              ),
                            ),
                            (0, Q.jsxs)(`small`, {
                              children: [10, ` power unlocks each awakening.`],
                            }),
                          ],
                        })
                      : Oe.id !== `heart` &&
                        (0, Q.jsxs)(`div`, {
                          className: `arc-awakening-preview`,
                          children: [
                            (0, Q.jsx)(`p`, {
                              className: `arc-eyebrow`,
                              children: d.has(Oe.id)
                                ? `Already part of you`
                                : ke?.length === 1
                                  ? `Within your reach`
                                  : `The road to this star`,
                            }),
                            (0, Q.jsx)(`p`, {
                              children: d.has(Oe.id)
                                ? `A thread already woven.`
                                : ke?.length === 1
                                  ? `The next step is yours.`
                                  : `${ke?.length ?? 0} connected passives`,
                            }),
                          ],
                        }),
                    je &&
                      (0, Q.jsxs)(`p`, {
                        className: `ptree-why`,
                        children: [
                          je,
                          `. Refund the outer passives first, or reset the tree.`,
                        ],
                      }),
                    Me &&
                      (0, Q.jsx)(`p`, { className: `ptree-why`, children: Me }),
                    (0, Q.jsx)(`div`, {
                      className: `ptree-actions`,
                      children: d.has(Oe.id)
                        ? Oe.id !== `heart` &&
                          (0, Q.jsx)(`button`, {
                            className: `arc-primary`,
                            disabled: C || !!je,
                            onClick: () => void Ce(Oe.id),
                            children: C
                              ? `Returning…`
                              : `↶ Refund this passive`,
                          })
                        : ke &&
                          (0, Q.jsx)(`button`, {
                            className: `arc-primary`,
                            disabled:
                              C ||
                              !!Me ||
                              !!(ke.length === 1 && $u(u, t, Oe.id)),
                            onClick: () => void Se(Oe.id),
                            children: C
                              ? `Weaving…`
                              : ke.length === 1
                                ? `✧ Weave this thread`
                                : `✧ Weave the path · ${ke.length} points`,
                          }),
                    }),
                    Oe.id !== `heart` &&
                      (0, Q.jsx)(`p`, {
                        className: `arc-cost-note`,
                        children: d.has(Oe.id)
                          ? `Returns 1 point · No cost`
                          : ke && !Me
                            ? `${ke.length} point${ke.length === 1 ? `` : `s`} · ${te - ke.length} remaining after allocation`
                            : `Choose a shorter path or earn more points.`,
                      }),
                    (0, Q.jsx)(`button`, {
                      className: `arc-quiet arc-find-star`,
                      onClick: () => {
                        if (!Oe || !oe.current || !se.current) return;
                        let e = oe.current,
                          t = se.current;
                        ((ce.current = !1),
                          le(
                            K8(
                              { ...e, k: Math.max(e.k, 0.85) },
                              t.w,
                              t.h,
                              Oe.x,
                              Oe.y,
                            ),
                          ));
                      },
                      children: `◎ Find on the chart`,
                    }),
                  ],
                })
              : (0, Q.jsxs)(`div`, {
                  className: `arc-node-details arc-node-empty`,
                  children: [
                    (0, Q.jsx)(`div`, {
                      className: `arc-medallion`,
                      children: (0, Q.jsx)(P8, { name: `heart` }),
                    }),
                    (0, Q.jsx)(`h3`, {
                      children:
                        k === null
                          ? `Choose your next thread`
                          : `A new beginning`,
                    }),
                    (0, Q.jsx)(`p`, {
                      children:
                        k === null
                          ? `Select a star on the chart or in the inspector. Its gifts and the road to it appear here.`
                          : `The tree is clear: ${k} points to spend.`,
                    }),
                    ne.device === `pad` &&
                      (0, Q.jsxs)(`p`, {
                        children: [
                          `Move between the available passives. `,
                          (0, Q.jsx)(Y8, { b: `A` }),
                          ` weaves the highlighted one.`,
                        ],
                      }),
                  ],
                }),
          (0, Q.jsxs)(`div`, {
            className: `arc-inspector-footer`,
            children: [
              (0, Q.jsxs)(`p`, {
                children: [
                  `Drag to explore · Scroll or pinch to zoom.`,
                  (0, Q.jsx)(`br`, {}),
                  `Passives may be refunded freely.`,
                  (0, Q.jsx)(`br`, {}),
                  `A connected path must remain.`,
                ],
              }),
              Pe &&
                (0, Q.jsx)(`button`, {
                  className: `arc-text-button`,
                  disabled: C,
                  onClick: () => {
                    (O(!0), S(null), ee(null), s(null));
                  },
                  children: `Reset tree · free`,
                }),
            ],
          }),
        ],
      }),
      Ee.length > 0 &&
        (0, Q.jsx)(`div`, {
          className: `ptree-pad`,
          "aria-label": `Passives you can take`,
          children: Ee.map((e, t) => {
            let n = Gu(e);
            return (0, Q.jsxs)(
              `button`,
              {
                type: `button`,
                className: `pxb ptree-pick ${x === e ? `sel` : ``}`,
                "data-pad-first":
                  t === Math.min(ie, Ee.length - 1) ? `` : void 0,
                onFocus: () => De(e),
                onClick: () => (x === e ? void Se(e) : De(e)),
                children: [
                  n.name,
                  (0, Q.jsx)(`small`, {
                    children: Tu.filter((e) => n.attrs[e])
                      .map((e) => `+${n.attrs[e]} ${Au[e].name}`)
                      .join(` `),
                  }),
                ],
              },
              e,
            );
          }),
        }),
    ],
  });
}
