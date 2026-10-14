// assets__index-BTsv3a2s 246 — children
// Lines 160819-161141 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Lce({
  loadout: e,
  binds: t,
  held: n,
  keysMode: r,
  remap: i,
  saving: a,
  onTap: o,
  onDrag: s,
  dash: c,
}) {
  let l = c ? se.name : le.name;
  return (0, Q.jsxs)(`div`, {
    className: `arc-loadout ${n ? `placing` : ``} ${r ? `keys` : ``}`,
    "aria-label": `Prepared spells`,
    children: [
      (0, Q.jsx)(`div`, {
        className: `arc-editable-slots`,
        children: Array.from({ length: 8 }, (c, l) => {
          let u = Se(e[l] ?? ``);
          return (0, Q.jsxs)(
            `button`,
            {
              "data-drop": h5(l),
              className: `arc-slot ${u ? `draggable` : `empty`} ${n?.from === l ? `held` : ``} ${i === l ? `remap` : ``}`,
              disabled: a,
              onClick: () => o(l),
              onPointerDown: u ? (e) => s(e, l) : void 0,
              "aria-label": `Slot ${l + 1}: ${u?.name ?? `empty`}${r ? `, change key` : n ? `, place ${Se(n.id)?.name}` : ``}`,
              children: [
                (0, Q.jsx)(`kbd`, { children: i === l ? `…` : Bi(t[l]) }),
                u
                  ? (0, Q.jsx)(F8, { spell: u })
                  : (0, Q.jsx)(`span`, {
                      className: `arc-empty-rune`,
                      "aria-hidden": `true`,
                      children: `✧`,
                    }),
                (0, Q.jsx)(`span`, { children: u?.name ?? `Unbound` }),
              ],
            },
            l,
          );
        }),
      }),
      (0, Q.jsxs)(`button`, {
        className: `arc-blink ${i === QW ? `remap` : ``}`,
        "aria-label": r ? `Change ${l} key` : `${l}, always prepared`,
        disabled: !r || a,
        onClick: () => o(QW),
        children: [
          (0, Q.jsx)(`kbd`, { children: i === QW ? `…` : Bi(t[QW]) }),
          (0, Q.jsx)(P8, { name: c ? `agility` : `aether` }),
          (0, Q.jsxs)(`span`, {
            children: [
              l,
              (0, Q.jsx)(`small`, {
                children: c ? `${se.stamina} stamina` : `Always with you`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function x5() {
  return (0, v.useSyncExternalStore)(xl, _l, _l);
}
var Rce = [
    { field: `master`, label: `Master` },
    { field: `music`, label: `Music` },
    { field: `effects`, label: `Effects` },
  ],
  zce = { on: `On`, reduced: `Reduced`, off: `Off` },
  Bce = {
    auto: `Auto`,
    high: `High`,
    medium: `Medium`,
    low: `Low`,
    minimal: `Minimal`,
    off: `Off`,
  },
  S5 = { classic: `Classic`, hd2d: `HD-2D`, auto: `Auto` },
  Vce = g6(),
  Hce = { auto: `Auto`, off: `Off`, "2x": `2×`, "4x": `4×`, "8x": `8×` },
  Uce = { normal: `Normal`, large: `Large`, larger: `Larger` },
  Wce = {
    enter: `Enter opens it, and still shows a conversation's next line first.`,
    "shift-enter": `Enter is left to conversations and scenes.`,
    click: `No key opens it, not even /.`,
  },
  Gce = new Set([
    `ArrowLeft`,
    `ArrowRight`,
    `ArrowUp`,
    `ArrowDown`,
    `Home`,
    `End`,
    `PageUp`,
    `PageDown`,
  ]),
  C5 = [
    { id: `general`, label: `General` },
    { id: `graphics`, label: `Graphics` },
    { id: `controls`, label: `Controls` },
  ],
  Kce = GG ? C5.filter((e) => e.id !== `controls`) : C5,
  w5 = `general`;
function qce(e, t) {
  if (t) return `no GPU: the browser is drawing on the CPU`;
  if (!e) return ``;
  let n =
    /^ANGLE \([^,]+, (.+?)(?: \(0x[0-9a-f]+\))?(?: Direct3D| OpenGL| Vulkan| Metal|,|\)$)/i.exec(
      e,
    );
  return (n ? n[1] : e).trim();
}
function Jce(e, t) {
  if (e.fxQuality === `off`) return `Off: every spell and attack draws in 2D.`;
  if (!t) return ``;
  switch (t.state) {
    case `loading`:
      return `Loading the 3D effects…`;
    case `none`:
      return `Unavailable here (no WebGL2): spells and attacks draw in 2D.`;
    case `lost`:
      return `The GPU reset: 2D until the page reloads.`;
    case `gave-up`:
      return `Turned off: frames were too slow even at Minimal. Pick a quality to try again.`;
    case `off`:
      return `Off: every spell and attack draws in 2D.`;
    default: {
      let e = t.quality ? t.quality[0].toUpperCase() + t.quality.slice(1) : ``,
        n = qce(t.gpu, t.software);
      return `${t.auto ? `Auto: now ${e}` : e}${n ? ` · ${n}` : ``}`;
    }
  }
}
function Yce(e, t = Vce, n = h6()) {
  return n
    ? `The address (?renderer=${n}) picks ${S5[n]} on this page; this setting applies without it.`
    : e !== t && e !== `classic`
      ? `Takes effect when the page reloads.`
      : e === `classic`
        ? `The pixel art as it always was.`
        : e === `auto`
          ? `HD-2D where the GPU can carry it, Classic elsewhere.`
          : `The world in 3D under the pixel art: light, shadows and depth.`;
}
function T5({ name: e, label: t, values: n, names: r, value: i, onPick: a }) {
  let o = `st-${e}-label`;
  return (0, Q.jsxs)(`div`, {
    className: `st-row st-segrow`,
    children: [
      (0, Q.jsx)(`span`, { id: o, children: t }),
      (0, Q.jsx)(`div`, {
        className: `st-seg`,
        role: `radiogroup`,
        "aria-labelledby": o,
        children: n.map((t) =>
          (0, Q.jsxs)(
            `label`,
            {
              className: i === t ? `on` : ``,
              children: [
                (0, Q.jsx)(`input`, {
                  type: `radio`,
                  name: `st-${e}`,
                  value: t,
                  checked: i === t,
                  onChange: () => a(t),
                }),
                r[t],
              ],
            },
            t,
          ),
        ),
      }),
    ],
  });
}
function E5({ checked: e, label: t, hint: n, onToggle: r }) {
  return (0, Q.jsxs)(`label`, {
    className: `st-check`,
    children: [
      (0, Q.jsx)(`input`, { type: `checkbox`, checked: e, onChange: r }),
      t,
      n && (0, Q.jsx)(`small`, { className: `st-key`, children: n }),
    ],
  });
}
function Xce({ onClose: e, gfx: t, onSpellbook: n }) {
  let r = x5();
  a5();
  let [i, a] = (0, v.useState)(w5),
    o = (e) => {
      ((w5 = e), a(e));
    },
    s = (0, v.useRef)(null),
    c = (0, v.useRef)(e);
  c.current = e;
  let l = (0, v.useRef)(null),
    u = (0, v.useRef)(null),
    d = (0, v.useRef)(t);
  d.current = t;
  let [f, p] = (0, v.useState)(() => t?.() ?? null);
  return (
    (0, v.useEffect)(() => {
      if (i !== `graphics`) return;
      let e = window.setInterval(() => p(d.current?.() ?? null), 500);
      return () => window.clearInterval(e);
    }, [i]),
    (0, v.useEffect)(() => {
      let e = (e) => {
          if (l.current?.(e, !1)) {
            (e.preventDefault(),
              e.stopPropagation(),
              e.stopImmediatePropagation());
            return;
          }
          let t = document.activeElement,
            n = dl(t?.tagName, t instanceof HTMLInputElement ? t.type : void 0);
          ll(
            e.key,
            e.repeat,
            n,
            e.ctrlKey || e.metaKey || e.altKey,
            wG(e, `settings`),
          ) &&
            (e.preventDefault(),
            e.stopPropagation(),
            e.stopImmediatePropagation(),
            c.current());
        },
        t = () => {
          window.setTimeout(() => {
            let e = document.activeElement;
            (e instanceof HTMLElement && s.current?.contains(e) && e.blur(),
              (u.current &&= (q.sfx(`chime`, 0.6), null)));
          }, 0);
        },
        n = (e) => void l.current?.(e, !0);
      return (
        window.addEventListener(`keydown`, e, !0),
        window.addEventListener(`keyup`, n, !0),
        window.addEventListener(`pointerup`, t, !0),
        window.addEventListener(`pointercancel`, t, !0),
        () => {
          (window.removeEventListener(`keydown`, e, !0),
            window.removeEventListener(`keyup`, n, !0),
            window.removeEventListener(`pointerup`, t, !0),
            window.removeEventListener(`pointercancel`, t, !0));
        }
      );
    }, []),
    (0, Q.jsxs)(`div`, {
      ref: s,
      className: `settings-panel panel`,
      role: `dialog`,
      "aria-label": `Settings`,
      "data-pad-rows": !0,
      onMouseDown: (e) => e.stopPropagation(),
      children: [
        (0, Q.jsxs)(`div`, {
          className: `st-head`,
          children: [
            (0, Q.jsxs)(`div`, {
              children: [
                (0, Q.jsx)(`b`, { children: `Settings` }),
                (0, Q.jsxs)(`small`, {
                  children: [`Kept in this browser.`, r.muted ? ` Muted.` : ``],
                }),
              ],
            }),
            (0, Q.jsx)(`button`, {
              type: `button`,
              className: `link-btn st-x`,
              onClick: e,
              "aria-label": `Close settings`,
              children: `✕`,
            }),
          ],
        }),
        (0, Q.jsx)(`div`, {
          className: `st-tabs`,
          role: `tablist`,
          "aria-label": `Settings`,
          children: Kce.map((e) =>
            (0, Q.jsx)(
              `button`,
              {
                type: `button`,
                role: `tab`,
                "aria-selected": i === e.id,
                className: i === e.id ? `on` : ``,
                onMouseDown: (e) => e.preventDefault(),
                onClick: () => {
                  (o(e.id), q.sfx(`click`, 0.5));
                },
                children: e.label,
              },
              e.id,
            ),
          ),
        }),
        !GG && i === `controls`
          ? (0, Q.jsx)(Ace, { capture: l, onSpellbook: n })
          : i === `graphics`
            ? (0, Q.jsx)(Zce, { s: r, status: f })
            : (0, Q.jsx)($ce, {
                s: r,
                setVolume: (e, t) => {
                  let n = {};
                  ((n[e] = t), yl(n));
                },
                touched: u,
              }),
      ],
    })
  );
}
