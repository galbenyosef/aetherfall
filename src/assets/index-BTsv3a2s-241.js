// index-BTsv3a2s 241 — children
// Lines 159472-159790 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Ace({ capture: e, onSpellbook: t }) {
  let n = (0, v.useSyncExternalStore)(zX, RX, RX),
    { map: r, binds: i } = a5(),
    a = J8().connected,
    [o, s] = (0, v.useState)(null),
    [c, l] = (0, v.useState)(null),
    [u, d] = (0, v.useState)(!1),
    f = (0, v.useRef)(!1),
    p = (0, v.useRef)(o);
  p.current = o;
  let m = (e) => {
      ((f.current = !1), s(e), l(null), d(!1));
    },
    h = () => {
      ((f.current = !1), s(null));
    };
  (0, v.useEffect)(() => {
    let t = (e) => {
      e.ok
        ? (q.sfx(`chime`, 0.6),
          (f.current = !1),
          s(null),
          l(e.note ? { text: e.note, bad: !1 } : null))
        : (q.sfx(`click`, 0.4), l({ text: e.error, bad: !0 }));
    };
    return (
      (e.current = (e, n) => {
        let r = p.current;
        if (!r) {
          let t = document.activeElement;
          if (
            !n &&
            !e.repeat &&
            (e.key === `Enter` || e.key === ` `) &&
            t instanceof HTMLElement &&
            t.classList.contains(`st-keycap`)
          ) {
            let e = kce(t.dataset.target);
            if (e) return ((f.current = !1), s(e), l(null), d(!1), !0);
          }
          return !1;
        }
        let i = document.activeElement;
        if (dl(i?.tagName, i instanceof HTMLInputElement ? i.type : void 0))
          return ((f.current = !1), s(null), l(null), !1);
        if (!Mi(e.isTrusted, e.key))
          return ((p.current = null), (f.current = !1), s(null), !1);
        let a = r.t === `action` && !fi(r.a).held,
          o = ji(
            { shiftDown: f.current },
            {
              type: n ? `up` : `down`,
              key: e.key,
              code: e.code,
              shiftKey: e.shiftKey,
              ctrlKey: e.ctrlKey,
              metaKey: e.metaKey,
              altKey: e.altKey,
              repeat: e.repeat,
            },
            a,
            DG(r),
            nG,
          );
        return (
          (f.current = o.shiftDown),
          o.act === `cancel`
            ? (s(null), l(null))
            : o.act === `clear`
              ? t(PG(r))
              : o.act === `refuse`
                ? (q.sfx(`click`, 0.4),
                  l({ text: o.msg ?? `Pick another key.`, bad: !0 }))
                : o.act === `bind` &&
                  o.name &&
                  t(NG(r, o.name, { swapActions: !0 })),
          !n
        );
      }),
      () => {
        ((e.current = null), (f.current = !1));
      }
    );
  }, [e]);
  let g = (e, t, n = !1) => {
      let r = Dce(o, e),
        i = Bi(t);
      return (0, Q.jsx)(`button`, {
        type: `button`,
        className: `st-keycap ${r ? `wait` : ``} ${t ? `` : n ? `none` : `empty`}`,
        "data-target": Oce(e),
        "aria-label": `${DG(e)}${e.t === `action` ? `, key ${e.i + 1}` : ``}: ${i || `none`}. Press to change`,
        "aria-pressed": r,
        title: i || void 0,
        onClick: (t) => {
          t.detail === 0 || !r ? m(e) : h();
        },
        children: r ? `…` : i || `—`,
      });
    },
    _ = (e) => {
      let [t, n] = r[e.id],
        i = !t && !n && !e.optional;
      return (0, Q.jsxs)(
        `div`,
        {
          className: `st-krow ${i ? `unbound` : ``}`,
          children: [
            (0, Q.jsxs)(`span`, {
              children: [
                e.name,
                e.note &&
                  (0, Q.jsxs)(`span`, {
                    className: `st-knote`,
                    children: [` (`, e.note, `)`],
                  }),
                a &&
                  QX(e.id) &&
                  (0, Q.jsxs)(Q.Fragment, {
                    children: [` `, (0, Q.jsx)(Y8, { b: QX(e.id) })],
                  }),
              ],
            }),
            g({ t: `action`, a: e.id, i: 0 }, t, i),
            g({ t: `action`, a: e.id, i: 1 }, n),
          ],
        },
        e.id,
      );
    },
    y = o
      ? `${c?.bad ? `${c.text} ` : ``}Press a key for ${DG(o)}… Esc cancels · Backspace clears`
      : (c?.text ??
        `Press a key cell, then the key you want for it. Two keys per action.`);
  return (0, Q.jsxs)(`div`, {
    className: `st-controls`,
    children: [
      (0, Q.jsx)(`p`, {
        className: `st-kstatus ${c?.bad ? `bad` : ``}`,
        "aria-live": `polite`,
        children: y,
      }),
      (0, Q.jsxs)(`section`, {
        className: `st-kgroup`,
        children: [
          (0, Q.jsx)(`h3`, { children: `Move` }),
          oi.filter((e) => e.group === `move`).map(_),
        ],
      }),
      (0, Q.jsxs)(`section`, {
        className: `st-kgroup`,
        children: [
          (0, Q.jsx)(`h3`, { children: `Spells` }),
          Ece.map((e) =>
            (0, Q.jsxs)(
              `div`,
              {
                className: `st-krow`,
                children: [
                  (0, Q.jsxs)(`span`, {
                    children: [
                      e === QW ? `Blink` : `Spell slot ${e + 1}`,
                      a &&
                        $X(e, n) &&
                        (0, Q.jsxs)(Q.Fragment, {
                          children: [
                            ` `,
                            (0, Q.jsx)(Y8, { b: $X(e, n) }),
                            e !== QW &&
                              (HX(e, n) ?? 0) > 0 &&
                              (0, Q.jsxs)(`span`, {
                                className: `st-knote`,
                                children: [` (page `, (HX(e, n) ?? 0) + 1, `)`],
                              }),
                          ],
                        }),
                    ],
                  }),
                  g({ t: `slot`, i: e }, i[e] ?? ``),
                  e === QW && TG()
                    ? (0, Q.jsx)(`span`, {
                        className: `st-kalso`,
                        title: `Shift Blinks too while no other key uses it`,
                        children: `Shift`,
                      })
                    : (0, Q.jsx)(`span`, {}),
                ],
              },
              e,
            ),
          ),
          t &&
            (0, Q.jsx)(`button`, {
              type: `button`,
              className: `link-btn st-klink`,
              onClick: t,
              children: HG(`Arrange spells: Spellbook [K]`),
            }),
        ],
      }),
      Tce.map(({ group: e, title: t }) =>
        (0, Q.jsxs)(
          `section`,
          {
            className: `st-kgroup`,
            children: [
              (0, Q.jsx)(`h3`, { children: t }),
              oi.filter((t) => t.group === e).map(_),
            ],
          },
          e,
        ),
      ),
      (0, Q.jsxs)(`section`, {
        className: `st-kgroup st-kfixed`,
        children: [
          (0, Q.jsx)(`h3`, { children: `Can't be changed` }),
          _i.map((e) =>
            (0, Q.jsxs)(
              `div`,
              {
                className: `st-krow`,
                children: [
                  (0, Q.jsx)(`span`, { children: e.name }),
                  (0, Q.jsx)(`span`, {
                    className: `st-kfixed-keys`,
                    children: e.keys.map((e) =>
                      (0, Q.jsx)(`kbd`, { children: e }, e),
                    ),
                  }),
                ],
              },
              e.name,
            ),
          ),
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `st-foot`,
        children: [
          (0, Q.jsx)(`small`, { children: `Kept in this browser.` }),
          u
            ? (0, Q.jsxs)(`span`, {
                className: `st-kconfirm`,
                children: [
                  `Reset every key?`,
                  ` `,
                  (0, Q.jsx)(`button`, {
                    type: `button`,
                    className: `link-btn danger`,
                    onClick: () => {
                      (h(),
                        d(!1),
                        FG(),
                        WX(),
                        l({
                          text: `Every key is back on its default.`,
                          bad: !1,
                        }),
                        q.sfx(`chime`, 0.6));
                    },
                    children: `Reset`,
                  }),
                  ` `,
                  (0, Q.jsx)(`button`, {
                    type: `button`,
                    className: `link-btn`,
                    onClick: () => d(!1),
                    children: `Keep`,
                  }),
                ],
              })
            : (0, Q.jsx)(`button`, {
                type: `button`,
                className: `link-btn`,
                onClick: () => {
                  (h(), d(!0));
                },
                children: `Reset keys`,
              }),
        ],
      }),
    ],
  });
}
function c5(e) {
  let t = (0, v.useRef)(e);
  return ((t.current = e), t);
}
function l5(e) {
  let t = c5(e);
  (0, v.useEffect)(() => {
    let e = (e) => {
      e.key === `Escape` && t.current();
    };
    return (
      window.addEventListener(`keydown`, e),
      () => window.removeEventListener(`keydown`, e)
    );
  }, [t]);
}
function u5(e) {
  let [, t] = (0, v.useState)(0);
  (0, v.useEffect)(() => {
    let n = window.setInterval(() => t((e) => e + 1), e);
    return () => window.clearInterval(n);
  }, [e]);
}
var d5 = null;
function f5(e, t) {
  return document.elementFromPoint(e, t)?.closest(`[data-drop]`) ?? null;
}
function jce() {
  let e = (e) => {
    (e.stopPropagation(), e.preventDefault());
  };
  (window.addEventListener(`click`, e, { capture: !0, once: !0 }),
    window.setTimeout(() => window.removeEventListener(`click`, e, !0), 0));
}
