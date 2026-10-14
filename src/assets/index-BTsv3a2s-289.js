// index-BTsv3a2s 289 — children
// Lines 175509-175752 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Xde({
  onSettings: e,
  onExit: t,
  onMenu: n,
  took: r,
  waits: i,
  onOpen: a,
  homes: o,
  onSkipTutorial: s,
}) {
  let [c, l] = (0, v.useState)(!1),
    u = (0, v.useRef)(c);
  u.current = c;
  let { muted: d } = x5(),
    f = J8().device === `pad`,
    p = (0, v.useRef)(null);
  return (
    (0, v.useEffect)(() => a?.(c), [c, a]),
    (0, v.useEffect)(() => {
      let e = (e) => {
          if (r(e)) return;
          if (
            e.key === `Escape` &&
            p.current?.contains(document.activeElement)
          ) {
            l(!1);
            return;
          }
          if (document.activeElement instanceof HTMLInputElement) return;
          let t = CG(e);
          ((t === `help` || t === `mute`) && e.preventDefault(),
            t === `help` && (u.current || !i()) && l((e) => !e),
            t === `mute` && !e.repeat && X9());
        },
        t = (e) => {
          e.key === `Escape` && u.current && (e.preventDefault(), l(!1));
        };
      return (
        window.addEventListener(`keydown`, e),
        window.addEventListener(`keydown`, t, !0),
        () => {
          (window.removeEventListener(`keydown`, e),
            window.removeEventListener(`keydown`, t, !0));
        }
      );
    }, [r, i]),
    (0, Q.jsx)(`div`, {
      className: `help`,
      children:
        c && f
          ? (0, Q.jsx)(`div`, {
              ref: p,
              className: `panel help-panel`,
              children: (0, Q.jsx)(mce, {
                aws: WW.name === `aws`,
                homes: o,
                muted: d,
                onMute: X9,
                onSettings: e,
                onSkipTutorial: s,
                onClose: () => l(!1),
              }),
            })
          : c && GG
            ? (0, Q.jsxs)(`div`, {
                className: `panel help-panel`,
                onMouseDown: () => l(!1),
                children: [
                  (0, Q.jsx)(`b`, { children: `Controls` }),
                  (0, Q.jsx)(o5, { touch: !0, muted: d }),
                  (0, Q.jsx)(`button`, {
                    className: `link-btn`,
                    onMouseDown: X9,
                    children: d ? `Unmute audio` : `Mute audio`,
                  }),
                  (0, Q.jsx)(`button`, {
                    className: `link-btn`,
                    onMouseDown: (e) => e.stopPropagation(),
                    onClick: () => {
                      (l(!1), e());
                    },
                    children: `Settings`,
                  }),
                  t &&
                    (0, Q.jsx)(`button`, {
                      className: `link-btn`,
                      onMouseDown: (e) => e.stopPropagation(),
                      onClick: t,
                      children: `Change mage`,
                    }),
                  (0, Q.jsxs)(`small`, { children: [s5, ` Tap to close.`] }),
                ],
              })
            : c
              ? (0, Q.jsxs)(`div`, {
                  className: `panel help-panel`,
                  children: [
                    (0, Q.jsx)(`b`, { children: `Controls` }),
                    (0, Q.jsx)(o5, { touch: !1, muted: d }),
                    (0, Q.jsxs)(`div`, {
                      children: [Bi(oG(`help`)), ` — close`],
                    }),
                    t &&
                      (0, Q.jsx)(`button`, {
                        className: `link-btn`,
                        onClick: t,
                        children: `Change mage`,
                      }),
                    (0, Q.jsx)(`small`, { children: s5 }),
                  ],
                })
              : (0, Q.jsxs)(`span`, {
                  className: `hint`,
                  children: [
                    (0, Q.jsxs)(`button`, {
                      type: `button`,
                      onMouseDown: (e) => e.preventDefault(),
                      onClick: () => l(!0),
                      children: [
                        f ? (0, Q.jsx)(Y8, { b: `VIEW` }) : HG(`[H]`),
                        ` help`,
                      ],
                    }),
                    ` · `,
                    (0, Q.jsxs)(`button`, {
                      type: `button`,
                      onMouseDown: (e) => e.preventDefault(),
                      onClick: X9,
                      children: [
                        f ? `` : `${HG(`[M]`)} `,
                        d ? `muted` : `sound`,
                      ],
                    }),
                    ` · `,
                    (0, Q.jsxs)(`button`, {
                      type: `button`,
                      onMouseDown: (e) => e.preventDefault(),
                      onClick: e,
                      children: [f ? `` : `${HG(`[L]`)} `, `settings`],
                    }),
                    ` · `,
                    (0, Q.jsxs)(`button`, {
                      type: `button`,
                      onMouseDown: (e) => e.preventDefault(),
                      onClick: n,
                      children: [
                        f ? (0, Q.jsx)(Y8, { b: `MENU` }) : `[Esc]`,
                        ` menu`,
                      ],
                    }),
                  ],
                }),
    })
  );
}
function Zde({ shown: e, onSkip: t }) {
  let [n, r] = (0, v.useState)(!1),
    [i, a] = (0, v.useState)(e);
  return (
    e !== i && (a(e), r(!e)),
    (0, v.useEffect)(() => {
      if (!n) return;
      let e = window.setTimeout(() => r(!1), Ni * 1e3);
      return () => window.clearTimeout(e);
    }, [n]),
    !e && !n
      ? null
      : (0, Q.jsx)(`button`, {
          type: `button`,
          className: `scene-skip ${e ? `` : `leaving`}`,
          "aria-hidden": !e || void 0,
          tabIndex: e ? void 0 : -1,
          onPointerDown: (t) => {
            e || (t.preventDefault(), t.stopPropagation());
          },
          onClick: () => {
            e && t();
          },
          children: `Skip ›`,
        })
  );
}
function Qde({ zone: e }) {
  let [t, n] = (0, v.useState)(null),
    r = (0, v.useRef)(null);
  if (
    ((0, v.useEffect)(() => {
      let t = window.setInterval(() => n(e.current?.status() ?? null), 500);
      return () => window.clearInterval(t);
    }, [e]),
    (0, v.useEffect)(() => {
      let e = r.current;
      if (!e) return;
      let t = document.documentElement.style,
        n = new ResizeObserver(() =>
          t.setProperty(`--zone-pill-h`, `${e.offsetHeight + 6}px`),
        );
      return (
        n.observe(e),
        () => {
          (n.disconnect(), t.removeProperty(`--zone-pill-h`));
        }
      );
    }, [t !== null]),
    !t)
  )
    return null;
  let i =
      t.state === `online`
        ? `#7dffb0`
        : t.state === `connecting` || t.state === `waiting`
          ? `#ffd166`
          : `#ff7a8a`,
    a = t.state !== `online` || !!t.note;
  return (0, Q.jsxs)(`div`, {
    ref: r,
    className: `zone-pill ${a ? `trouble` : ``}`,
    title: t.url,
    style: { "--zone": i },
    children: [
      (0, Q.jsxs)(`span`, {
        className: `zone-state`,
        children: [`● zone `, t.state],
      }),
      ` · `,
      t.room || `finding a room`,
      t.rtt !== null &&
        (0, Q.jsxs)(Q.Fragment, {
          children: [` · `, Math.round(t.rtt), ` ms`],
        }),
      ` · `,
      t.players,
      ` mages · `,
      t.monsters,
      ` foes · drift `,
      t.drift.toFixed(2),
      (0, Q.jsxs)(`span`, {
        className: `zone-version`,
        children: [` · v`, tK],
      }),
      t.note && (0, Q.jsx)(`div`, { className: `zone-note`, children: t.note }),
    ],
  });
}
