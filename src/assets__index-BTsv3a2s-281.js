// assets__index-BTsv3a2s 281 — current
// Lines 171383-171724 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Tde({ dev: e, onGod: t, onJump: n }) {
  let [r, i] = (0, v.useState)(!1),
    [a, o] = (0, v.useState)([]),
    [s, c] = (0, v.useState)(``),
    [l, u] = (0, v.useState)(null),
    [d, f] = (0, v.useState)(!1),
    p = (0, v.useRef)(Sde()),
    m = (0, v.useRef)(null),
    h = (0, v.useRef)(``),
    g = (0, v.useRef)(null),
    _ = (0, v.useRef)(null),
    y = (0, v.useRef)(0),
    b = (0, v.useRef)(!1),
    x = (0, v.useRef)(r);
  x.current = r;
  let S = (0, v.useCallback)((e) => {
      o((t) =>
        [...t, ...e.map((e) => ({ ...e, id: ++y.current }))].slice(-400),
      );
    }, []),
    C = (0, v.useCallback)(
      async (r) => {
        if (!e) throw Error(wde);
        let i = await e(r);
        return (
          r.cmd === `status` &&
            (u({ on: !!i.on, god: !!i.god, room: i.room }),
            t(!!i.on && !!i.god)),
          r.cmd === `god` &&
            i.god !== void 0 &&
            (u((e) => ({ on: !0, room: e?.room, god: !!i.god })), t(!!i.god)),
          r.cmd === `enter` &&
            typeof i.x == `number` &&
            typeof i.y == `number` &&
            n(i.x, i.y),
          i
        );
      },
      [e, t, n],
    ),
    w = (0, v.useCallback)(
      (e) =>
        S([
          {
            text:
              WW.userError(e) ?? (e instanceof Error ? e.message : String(e)),
            tone: `err`,
          },
        ]),
      [S],
    ),
    T = (0, v.useCallback)(async () => {
      if (x.current) {
        g.current?.focus();
        return;
      }
      let t = () =>
        !b.current &&
        ((b.current = !0),
        S([
          {
            text: `Aetherfall dev console. help lists the commands.`,
            tone: `muted`,
          },
        ]),
        !0);
      if (e)
        try {
          (await C({ cmd: `status` })).on && (i(!0), t());
        } catch {}
    }, [e, w, S, C]);
  ((0, v.useEffect)(() => {
    if (!e) return;
    let t = 0,
      n = 0,
      r = () => {
        C({ cmd: `status` }).catch(() => {
          ++t < 6 && (n = window.setTimeout(r, 3e3));
        });
      };
    return ((n = window.setTimeout(r, 1500)), () => window.clearTimeout(n));
  }, [e, C]),
    (0, v.useEffect)(() => {
      let e = (e) => {
        if (e.key !== `:` || e.ctrlKey || e.metaKey || e.altKey) return;
        let t = document.activeElement;
        t instanceof HTMLInputElement ||
          t instanceof HTMLTextAreaElement ||
          (e.preventDefault(), T());
      };
      return (
        window.addEventListener(`keydown`, e),
        () => window.removeEventListener(`keydown`, e)
      );
    }, [T]),
    (0, v.useEffect)(() => {
      r ? (g.current?.focus(), q.sfx(`click`, 0.4)) : g.current?.blur();
    }, [r]),
    (0, v.useEffect)(() => {
      _.current?.scrollTo({ top: _.current.scrollHeight });
    }, [a, r]));
  let E = async (e) => {
      let t = xde(e);
      if (!t) return;
      S([{ text: t, tone: `echo` }]);
      let n = p.current;
      n[n.length - 1] !== t && (n.push(t), Cde(n));
      let r = dde(t);
      switch (r.t) {
        case `none`:
          return;
        case `help`:
          S(gde(r.topic));
          return;
        case `clear`:
          o([]);
          return;
        case `list`:
          S(vde(r.what, r.filter));
          return;
        case `error`:
          S([{ text: r.text, tone: `err` }]);
          return;
        case `host`:
          f(!0);
          try {
            S(bde(r.command, await C(r.command)));
          } catch (e) {
            w(e);
          } finally {
            f(!1);
          }
      }
    },
    D = () => {
      let { from: e, options: t } = mde(s);
      if (t.length === 0) return;
      if (t.length === 1) {
        c(s.slice(0, e) + t[0] + ` `);
        return;
      }
      let n = hde(t);
      n.length > s.length - e
        ? c(s.slice(0, e) + n)
        : S([{ text: t.join(`   `), tone: `muted` }]);
    },
    O = (e) => {
      let t = p.current;
      if (t.length === 0) return;
      let n = m.current;
      if (n === null) {
        if (e === 1) return;
        ((h.current = s), (n = t.length));
      }
      ((n = Math.max(0, Math.min(t.length, n + e))),
        (m.current = n === t.length ? null : n),
        c(n === t.length ? h.current : t[n]));
    },
    k = s.trimStart().split(/\s+/)[0]?.toLowerCase() ?? ``,
    ee = D9.find((e) => e.name === k)?.usage;
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      l?.god &&
        (0, Q.jsx)(`div`, {
          className: `dev-god`,
          "aria-live": `polite`,
          children: `God mode`,
        }),
      r &&
        (0, Q.jsxs)(`section`, {
          className: `dev-term`,
          "aria-label": `Dev console`,
          onMouseDown: (e) =>
            e.target === e.currentTarget && g.current?.focus(),
          children: [
            (0, Q.jsxs)(`header`, {
              className: `dev-term-bar`,
              children: [
                (0, Q.jsx)(`span`, {
                  className: `dev-term-title`,
                  children: `Dev console`,
                }),
                (0, Q.jsx)(`span`, {
                  className: `dev-chip ${l === null ? `` : l.on ? `is-on` : `is-off`}`,
                  children:
                    l === null
                      ? `realm …`
                      : l.on
                        ? `on · ${l.room ?? ``}`
                        : `off here`,
                }),
                l?.god &&
                  (0, Q.jsx)(`span`, {
                    className: `dev-chip is-god`,
                    children: `god`,
                  }),
                (0, Q.jsx)(`button`, {
                  className: `dev-term-close`,
                  onClick: () => i(!1),
                  "aria-label": `Close the dev console`,
                  children: `esc`,
                }),
              ],
            }),
            (0, Q.jsx)(`div`, {
              className: `dev-term-log`,
              ref: _,
              role: `log`,
              children: a.map((e) =>
                (0, Q.jsx)(
                  `div`,
                  {
                    className: `dev-line ${e.tone ? `is-` + e.tone : ``} ${e.aside ? `has-aside` : ``}`,
                    style: e.color ? { color: e.color } : void 0,
                    children: e.aside
                      ? (0, Q.jsxs)(Q.Fragment, {
                          children: [
                            (0, Q.jsx)(`span`, { children: e.text }),
                            (0, Q.jsx)(`span`, {
                              className: `dev-aside`,
                              children: e.aside,
                            }),
                          ],
                        })
                      : e.text,
                  },
                  e.id,
                ),
              ),
            }),
            (0, Q.jsxs)(`form`, {
              className: `dev-term-input ${d ? `is-busy` : ``}`,
              onSubmit: (e) => {
                e.preventDefault();
                let t = s;
                (c(``), (m.current = null), E(t));
              },
              children: [
                (0, Q.jsx)(`span`, {
                  className: `dev-prompt`,
                  "aria-hidden": !0,
                  children: `›`,
                }),
                (0, Q.jsx)(`input`, {
                  ref: g,
                  value: s,
                  spellCheck: !1,
                  autoComplete: `off`,
                  "aria-label": `Dev command`,
                  placeholder: `spawn wolf 3 · loot resonant · god`,
                  onChange: (e) => {
                    (c(e.target.value), (m.current = null));
                  },
                  onKeyDown: (e) => {
                    (e.stopPropagation(),
                      e.key === `Escape`
                        ? (e.preventDefault(), i(!1))
                        : e.key === `Tab`
                          ? (e.preventDefault(), D())
                          : e.key === `ArrowUp` || e.key === `ArrowDown`
                            ? (e.preventDefault(),
                              O(e.key === `ArrowUp` ? -1 : 1))
                            : e.key === `:` &&
                              s === `` &&
                              (e.preventDefault(), i(!1)));
                  },
                }),
                ee &&
                  (0, Q.jsx)(`span`, { className: `dev-usage`, children: ee }),
              ],
            }),
          ],
        }),
    ],
  });
}
function Ede({ keys: e = !0 } = {}) {
  let [t, n] = (0, v.useState)(null),
    [r, i] = (0, v.useState)(null);
  return (
    (0, v.useEffect)(() => {
      if (t === null) return;
      let r = (e) => {
          if (!e.ok) {
            (i({ text: e.error, bad: !0 }), q.sfx(`click`, 0.4));
            return;
          }
          (i(e.note ? { text: e.note, bad: !1 } : null),
            n(null),
            q.sfx(`chime`, 0.6));
        },
        a = qX((e, a) => {
          if (e !== `Y`) {
            if (e === `B`) {
              (n(null), i(null));
              return;
            }
            r(UX(t, a, e));
          }
        }),
        o = (e) => {
          if ((e.preventDefault(), e.stopImmediatePropagation(), !e.repeat)) {
            if (e.key === `Escape`) {
              (n(null), i(null));
              return;
            }
            if (e.key === `Backspace` || e.key === `Delete`)
              return r(PG({ t: `slot`, i: t }));
            r(NG({ t: `slot`, i: t }, nG(e), { swapActions: !1 }));
          }
        },
        s = (e) => {
          e.target?.closest?.(`[data-remap="${t}"]`) || (n(null), i(null));
        };
      return (
        e && window.addEventListener(`keydown`, o, !0),
        window.addEventListener(`pointerdown`, s, !0),
        () => {
          (a(),
            e && window.removeEventListener(`keydown`, o, !0),
            window.removeEventListener(`pointerdown`, s, !0));
        }
      );
    }, [t, e]),
    (0, v.useEffect)(() => {
      if (t !== null || !r) return;
      let e = window.setTimeout(() => i(null), 4e3);
      return () => window.clearTimeout(e);
    }, [t, r]),
    {
      slot: t,
      msg: r,
      setMsg: i,
      start: (e) => {
        (i(null), n((t) => (t === e ? null : e)));
      },
      cancel: () => n(null),
      isBlink: t === QW,
    }
  );
}
var H9 = (e) => S[e]?.colors.trim ?? `#ffffff`;
