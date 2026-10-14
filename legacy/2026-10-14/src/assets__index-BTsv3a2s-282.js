// assets__index-BTsv3a2s 282 — children
// Lines 171725-171953 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function U9({
  label: e,
  cls: t = ``,
  first: n,
  disabled: r,
  title: i,
  onClick: a,
}) {
  return (0, Q.jsx)(`button`, {
    type: `button`,
    className: `hbtn ${t}`,
    disabled: r,
    title: i,
    ...(n ? { "data-pad-first": `` } : {}),
    onMouseDown: (e) => e.preventDefault(),
    onClick: a,
    children: e,
  });
}
function Dde() {
  return [...document.querySelectorAll(`.party-cards .party-card`)].map((e) => {
    let t = e.getBoundingClientRect();
    return { x: t.left, y: t.top, w: t.width, h: t.height };
  });
}
function Ode({ target: e, anchor: t, me: n, onPick: r, onClose: i }) {
  let a = (0, v.useRef)(null);
  (0, v.useLayoutEffect)(() => {
    let n = a.current;
    if (!n) return;
    let r,
      i = e.at,
      o = 0,
      s = () => {
        i = t?.() ?? i;
        let a = Hs(
          i,
          n.offsetWidth,
          n.offsetHeight,
          window.innerWidth,
          window.innerHeight,
          { ...(r ? { side: r } : { avoid: e.others }), keepOff: Dde() },
        );
        ((r = a.side),
          (n.style.left = `${a.left}px`),
          (n.style.top = `${a.top}px`));
      },
      c = () => {
        (s(), (o = requestAnimationFrame(c)));
      };
    return (s(), (o = requestAnimationFrame(c)), () => cancelAnimationFrame(o));
  }, [e, t]);
  let o = c5({ onClose: i, target: e });
  (0, v.useEffect)(() => {
    let e = (e) => {
        e.key === `Escape` && o.current.onClose();
      },
      t = (e) => {
        let t = e.target,
          { onClose: n, target: r } = o.current;
        t instanceof Node &&
          !a.current?.contains(t) &&
          ((t instanceof HTMLCanvasElement &&
            t.classList.contains(`game-canvas`)) ||
            (r.fixed &&
              t instanceof Element &&
              t.closest(`[data-mage="${CSS.escape(r.key)}"]`)) ||
            n());
      };
    return (
      window.addEventListener(`keydown`, e),
      window.addEventListener(`pointerdown`, t, !0),
      () => {
        (window.removeEventListener(`keydown`, e),
          window.removeEventListener(`pointerdown`, t, !0));
      }
    );
  }, [o]);
  let s = Vs(e, n),
    c = !!n.party?.members.includes(e.name),
    l = Ec(n.followIn ?? 0, n.discordant);
  return (0, Q.jsxs)(`div`, {
    ref: a,
    className: `mage-menu panel`,
    role: `group`,
    "aria-label": e.level > 0 ? `${e.name}, level ${e.level}` : e.name,
    children: [
      (0, Q.jsxs)(`div`, {
        className: `mm-head`,
        children: [
          (0, Q.jsxs)(`b`, {
            style: { color: c ? O8 : H9(e.school) },
            children: [
              c && `◆ `,
              e.outlaw &&
                (0, Q.jsx)(`span`, {
                  style: { color: `#ff4d5e` },
                  children: `☠ `,
                }),
              !e.outlaw &&
                e.hostile &&
                (0, Q.jsx)(`span`, {
                  style: { color: `#ffa040` },
                  children: `⚔ `,
                }),
              e.name,
            ],
          }),
          (0, Q.jsxs)(`small`, {
            children: [
              e.level > 0 && `Lv ${e.level}`,
              e.wanted > 0 &&
                (0, Q.jsxs)(`span`, {
                  style: { color: `#ffd166` },
                  children: [` `, `★`.repeat(e.wanted)],
                }),
            ],
          }),
        ],
      }),
      s.map((e, t) =>
        (0, Q.jsxs)(
          `button`,
          {
            type: `button`,
            className: `mm-item ${e}`,
            ...(t === 0 ? { "data-pad-first": `` } : {}),
            disabled: e === `follow` && !!l,
            title: e === `follow` ? l?.title : void 0,
            onMouseDown: (e) => e.preventDefault(),
            onClick: () => r(e),
            children: [
              Bs[e],
              e === `follow` &&
                l &&
                (0, Q.jsxs)(`small`, { children: [` `, l.short] }),
            ],
          },
          e,
        ),
      ),
    ],
  });
}
function W9({ o: e, now: t, first: n, inParty: r, onAnswer: i }) {
  let a = tc(e).slice(e.name.length),
    o = !!r && e.kind === `invite`;
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsxs)(`span`, {
        className: `pc-text`,
        children: [
          (0, Q.jsx)(`b`, { style: { color: H9(e.school) }, children: e.name }),
          a,
        ],
      }),
      (0, Q.jsxs)(`span`, {
        className: `pc-btns`,
        children: [
          (0, Q.jsx)(U9, {
            label: `Accept`,
            cls: `pc-yes`,
            first: n && !o,
            disabled: o,
            title: o ? `Leave your party first.` : void 0,
            onClick: () => i(e, !0),
          }),
          (0, Q.jsx)(U9, {
            label: `Decline`,
            cls: `pc-no`,
            onClick: () => i(e, !1),
          }),
          (0, Q.jsxs)(`small`, {
            className: `pc-left`,
            children: [ac(e, t), ` s`],
          }),
        ],
      }),
    ],
  });
}
var kde = 64;
function Ade({ children: e }) {
  let t = (0, v.useRef)(null),
    n = (0, v.useRef)(null);
  return (
    (0, v.useLayoutEffect)(() => {
      let e = t.current,
        r = n.current,
        i = e?.closest(`.hud`);
      if (!e || !r || !i) return;
      let a = () => {
        let t = e.offsetHeight;
        t > 0
          ? i.style.setProperty(`--party-h`, `${t + 8}px`)
          : i.style.removeProperty(`--party-h`);
        let n = r.offsetParent ? r.offsetHeight : null,
          a =
            parseFloat(getComputedStyle(i).getPropertyValue(`--text-scale`)) ||
            1;
        i.classList.toggle(
          `party-crowded`,
          t > 0 && n !== null && n - t - 8 < kde * a,
        );
      };
      a();
      let o = new ResizeObserver(a);
      return (
        o.observe(e),
        o.observe(r),
        () => {
          (o.disconnect(),
            i.style.removeProperty(`--party-h`),
            i.classList.remove(`party-crowded`));
        }
      );
    }, []),
    (0, Q.jsxs)(Q.Fragment, {
      children: [
        (0, Q.jsx)(`div`, { className: `party-hud`, ref: t, children: e }),
        (0, Q.jsx)(`i`, {
          className: `party-room`,
          ref: n,
          "aria-hidden": `true`,
        }),
      ],
    })
  );
}
