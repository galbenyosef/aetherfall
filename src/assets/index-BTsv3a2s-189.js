// index-BTsv3a2s 189 — children
// Lines 123084-123432 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function vq({
  roster: e,
  selected: t,
  busy: n,
  onSelect: r,
  onPlay: i,
  onForge: a,
  onRetry: o,
  onClearError: s,
  onDelete: c,
}) {
  let [l, u] = (0, v.useState)(null),
    [d, f] = (0, v.useState)(``),
    [p, m] = (0, v.useState)(!1),
    h = (0, v.useRef)(new Map()),
    { mages: g, max: _ } = e,
    y = Math.max(0, _ - g.length),
    b = (0, v.useRef)({
      mages: g,
      selected: t,
      confirming: l,
      deleting: p,
      busy: n,
      onSelect: r,
      onPlay: i,
      onClearError: s,
    });
  if (
    ((b.current = {
      mages: g,
      selected: t,
      confirming: l,
      deleting: p,
      busy: n,
      onSelect: r,
      onPlay: i,
      onClearError: s,
    }),
    (0, v.useEffect)(() => {
      let e = (e) => {
        let {
          mages: t,
          selected: n,
          confirming: r,
          deleting: i,
          busy: a,
          onSelect: o,
          onPlay: s,
          onClearError: c,
        } = b.current;
        if (r) {
          e.key === `Escape` && !i && (e.preventDefault(), u(null), f(``), c());
          return;
        }
        if (
          e.ctrlKey ||
          e.metaKey ||
          e.altKey ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          t.length === 0
        )
          return;
        let l = e.key.toLowerCase(),
          d = l === `arrowup` || aG(`up`).includes(l);
        if (d || l === `arrowdown` || aG(`down`).includes(l)) {
          e.preventDefault();
          let r = n ? t.findIndex((e) => e.id === n.id) : -1,
            i =
              t[
                r < 0
                  ? 0
                  : Math.min(t.length - 1, Math.max(0, r + (d ? -1 : 1)))
              ];
          i.id !== n?.id && (q.sfx(`click`), o(i.id));
          let a = h.current.get(i.id);
          (a?.focus({ preventScroll: !0 }), _q(a));
          return;
        }
        let p =
          e.target instanceof HTMLElement &&
          e.target.classList.contains(`mage-row`);
        e.key === `Enter` &&
          !e.repeat &&
          n &&
          !a &&
          (e.target === document.body || p) &&
          (e.preventDefault(), s(n));
      };
      return (
        window.addEventListener(`keydown`, e),
        () => window.removeEventListener(`keydown`, e)
      );
    }, []),
    (0, v.useEffect)(() => {
      t && !l && _q(h.current.get(t.id));
    }, [t?.id, l]),
    e.error)
  )
    return (0, Q.jsxs)(`div`, {
      className: `mage-select`,
      children: [
        (0, Q.jsx)(`div`, { className: `error`, children: e.error }),
        (0, Q.jsx)(`button`, {
          className: `px-btn`,
          onClick: () => {
            (q.sfx(`click`), o());
          },
          children: `Try again`,
        }),
      ],
    });
  if (l) {
    let e = l,
      t = d.trim().toLowerCase() === e.name.toLowerCase(),
      n = () => {
        (u(null), f(``), s());
      };
    return (0, Q.jsx)(`div`, {
      className: `mage-select`,
      children: (0, Q.jsxs)(`form`, {
        className: `panel mage-confirm`,
        onSubmit: async (r) => {
          if ((r.preventDefault(), !t || p)) return;
          m(!0);
          let i = await c(e);
          (m(!1), i && n());
        },
        children: [
          (0, Q.jsxs)(`h3`, { children: [`Delete `, e.name, `?`] }),
          (0, Q.jsxs)(`p`, {
            children: [
              `Level `,
              e.level,
              ` `,
              gq(e),
              `. Their satchel, everything they wear, their Crowns, quests and homestead (its cottage, the furniture and everything kept in them) go with them, and the name `,
              e.name,
              ` becomes free for anyone. This can't be undone.`,
            ],
          }),
          (0, Q.jsx)(`input`, {
            autoFocus: !0,
            value: d,
            onChange: (e) => f(e.target.value),
            placeholder: `Type ${e.name} to confirm`,
            "aria-label": `Type ${e.name} to confirm`,
            autoComplete: `off`,
            autoCapitalize: `off`,
            autoCorrect: `off`,
            spellCheck: !1,
            maxLength: e.name.length + 8,
          }),
          (0, Q.jsx)(`button`, {
            type: `submit`,
            className: `px-btn danger`,
            disabled: !t || p,
            children: p ? `Deleting…` : `Delete ${e.name} forever`,
          }),
          (0, Q.jsxs)(`button`, {
            type: `button`,
            className: `link-btn`,
            disabled: p,
            onClick: n,
            children: [`← keep `, e.name],
          }),
        ],
      }),
    });
  }
  if (g.length === 0)
    return (0, Q.jsx)(`div`, {
      className: `mage-select`,
      children: (0, Q.jsx)(`button`, {
        className: `px-btn primary`,
        disabled: n,
        onClick: () => {
          (q.sfx(`click`), a());
        },
        children: `Begin your legend`,
      }),
    });
  let x = t;
  return (0, Q.jsxs)(`div`, {
    className: `mage-select`,
    children: [
      (0, Q.jsx)(`div`, {
        className: `mage-list`,
        role: `listbox`,
        "aria-label": `Your mages`,
        children: g.map((e) => {
          let t = e.id === x?.id;
          return (0, Q.jsxs)(
            `button`,
            {
              ref: (t) => {
                t ? h.current.set(e.id, t) : h.current.delete(e.id);
              },
              type: `button`,
              role: `option`,
              "aria-selected": t,
              className: `mage-row${t ? ` selected` : ``}`,
              style: { "--accent": S[e.school]?.colors.glow },
              onClick: () => {
                (q.sfx(`click`), r(e.id));
              },
              onDoubleClick: () => {
                n || i(e);
              },
              children: [
                (0, Q.jsx)(fq, {
                  school: e.school,
                  hero: e.hero,
                  size: 2,
                  walking: t,
                }),
                (0, Q.jsxs)(`span`, {
                  className: `mage-name`,
                  children: [
                    (0, Q.jsx)(`b`, { children: e.name }),
                    (0, Q.jsxs)(`small`, {
                      children: [`Lv `, e.level, ` `, gq(e)],
                    }),
                  ],
                }),
              ],
            },
            e.id,
          );
        }),
      }),
      (0, Q.jsxs)(`div`, {
        className: `mage-actions`,
        children: [
          x &&
            (0, Q.jsxs)(`button`, {
              className: `px-btn primary`,
              disabled: n,
              onClick: () => {
                (q.sfx(`click`), i(x));
              },
              children: [
                n ? `Opening the Veil…` : `Continue as ${x.name}`,
                (0, Q.jsxs)(`small`, {
                  children: [`Lv `, x.level, ` `, gq(x)],
                }),
              ],
            }),
          (0, Q.jsxs)(`button`, {
            className: `px-btn`,
            disabled: y === 0 || n,
            onClick: () => {
              (q.sfx(`click`), a());
            },
            children: [
              `Forge a new mage`,
              (0, Q.jsx)(`small`, {
                children:
                  y > 0 ? `${y} of ${_} slots free` : `All ${_} slots taken`,
              }),
            ],
          }),
        ],
      }),
      y === 0 &&
        (0, Q.jsxs)(`div`, {
          className: `menu-note`,
          children: [
            `An account holds at most `,
            _,
            ` mages. Delete one to forge another.`,
          ],
        }),
      x &&
        (0, Q.jsxs)(`button`, {
          className: `link-btn danger`,
          disabled: n,
          onClick: () => {
            (f(``), u(x), s());
          },
          children: [`Delete `, x.name, `…`],
        }),
    ],
  });
}
var yq = 0.22;
function bq(e, t, n) {
  return e.x !== 0 || e.y !== 0
    ? { x: e.x, y: e.y }
    : n - t.at < 0.3
      ? { x: t.x, y: t.y }
      : { x: 0, y: 0 };
}
function xq(e, t, n, r, i) {
  let a = t ? Math.hypot(t.x - e.x, t.y - e.y) : 0;
  if (t && a >= 1) return t;
  let o = Math.hypot(n.x, n.y);
  return o > yq
    ? { x: e.x + (n.x / o) * i, y: e.y + (n.y / o) * i }
    : t && a >= 0.25
      ? { x: e.x + ((t.x - e.x) / a) * i, y: e.y + ((t.y - e.y) / a) * i }
      : { x: e.x + r.x * i, y: e.y + r.y * i };
}
var Sq = { w: 1102, h: 700 };
function Cq(e, t, n) {
  return !n && e >= Sq.w && t >= Sq.h;
}
function wq(e, t, n) {
  return Cq(e, t, n) ? 136 : 96;
}
var Tq = { wide: [540, 430], lifted: [600, 480] };
function Eq(e, t, n) {
  if (n) return t <= 560 ? 0.62 : t <= 820 ? 0.85 : 1;
  let [r, i] = e < 1102 ? Tq.lifted : Tq.wide;
  return t < i ? 0.62 : t < r ? 0.8 : 1;
}
function Dq(e, t, n) {
  if (n) return t < 700 ? 2 : t < 760 ? 3 : 4;
  let r = t / Eq(e, t, !1) - (e < 1102 ? 82 : 0);
  return r < 640 ? 1 : r < 700 ? 2 : r < 760 ? 3 : 4;
}
var Oq = 200,
  kq = (e, t, n) =>
    e.x < t.x + t.w + n &&
    t.x < e.x + e.w + n &&
    e.y < t.y + t.h + n &&
    t.y < e.y + e.h + n,
  Aq = (e, t) => ({ x: e.x, y: e.y - t, w: e.w, h: e.h }),
  jq = 1.15;
function Mq(e, t = 1) {
  return Math.max(12, Math.round(e * 1.2 * t));
}
function Nq(e) {
  return Math.max(2, Math.round(e * 0.16));
}
function Pq(e, t) {
  let n = Nq(t) + 4;
  return e === `main` ? t * jq + n / Math.SQRT2 : t + n / 2;
}
function Fq(e, t, n, r) {
  return { x: e - n, y: t - n - r, w: n * 2, h: n * 2 + r * 2 };
}
function Iq(e, t, n, r) {
  return Fq(e, t - n - r, n, r);
}
var Lq = {
  "!": [`..##..`, `..##..`, `..##..`, `..##..`, `......`, `..##..`, `..##..`],
  "?": [`.####.`, `##..##`, `...##.`, `..##..`, `......`, `..##..`, `..##..`],
};
