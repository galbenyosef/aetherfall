// assets__index-BTsv3a2s 265 — children
// Lines 166654-167002 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function hue({
  game: e,
  hud: t,
  school: n,
  visible: r,
  chatOpen: i,
  whispered: a,
  onChat: o,
  journal: s,
  quests: c,
  questWaiting: l,
  bag: u,
  homes: d,
  hearth: f,
  onMenu: p,
}) {
  let [m, h] = (0, v.useState)(0),
    g = Math.ceil(t.loadout.length / N7),
    _ = (0, v.useMemo)(
      () => [
        ...t.loadout.map((e) => {
          let r = e ? Se(e) : void 0;
          return r
            ? {
                icon: Fh(r, xe[r.id] ?? n),
                cost: r.mana,
                stamina: ud(r, n).stamina ?? 0,
                unarmed: !ld(t.arms, r),
                name: r.name,
              }
            : null;
        }),
        ce(n)
          ? {
              icon: Fh(`blink`, n),
              cost: le.mana,
              stamina: 0,
              unarmed: !1,
              name: le.name,
            }
          : {
              icon: Fh(`dash`, n),
              cost: 0,
              stamina: se.stamina,
              unarmed: !1,
              name: se.name,
            },
      ],
      [t.loadout, t.arms, n],
    ),
    y = [...Array.from({ length: N7 }, (e, t) => m * N7 + t), QW];
  (0, v.useEffect)(() => {
    !r &&
      e &&
      ((e.stick = { x: 0, y: 0 }),
      (e.stickSprint = !1),
      (e.heldSlot = null),
      e.cancelBlinkHold(`touch`));
  }, [r, e]);
  let b = e?.talkable,
    x = t.cinematic || t.dead || !!e?.story?.chatting,
    S =
      !x &&
      (b
        ? (b.label ?? (b.note ? `[E] Look` : `[E] Talk`)).replace(
            /^\[[A-Z]\]\s*/,
            ``,
          )
        : t.pvp.remains
          ? `Search`
          : t.atCrystal
            ? `Kindle`
            : null),
    C = !x && !!t.node,
    w = (t) => (n) => {
      if ((n.preventDefault(), n.stopPropagation(), F7(n), q.init(), e)) {
        if (t === QW && e.holdsBlink()) {
          ((e.heldSlot = null), e.beginBlinkHold(`touch`));
          return;
        }
        (e.touchCast(t), (e.heldSlot = t === QW ? null : t));
      }
    },
    T = (t) => () => {
      e &&
        (t === QW && e.releaseBlinkHold(`touch`),
        e.heldSlot === t && (e.heldSlot = null));
    },
    E = (t) => () => {
      e &&
        (t === QW && e.cancelBlinkHold(`touch`),
        e.heldSlot === t && (e.heldSlot = null));
    };
  return (0, Q.jsxs)(`div`, {
    className: `touch-ui ${r ? `visible` : ``}`,
    children: [
      (0, Q.jsx)(gue, { game: e, running: !!t.stamina?.sprinting }),
      (0, Q.jsxs)(`div`, {
        className: `touch-actions`,
        children: [
          y.map((e, n) => {
            let r = _[e],
              i = t.cooldowns[e] ?? 0,
              a =
                !!r &&
                (t.mana < r.cost ||
                  r.unarmed ||
                  (!!t.stamina && t.stamina.v < r.stamina));
            return (0, Q.jsxs)(
              `button`,
              {
                className: `touch-slot s${n} ${r ? `` : `empty`} ${a ? `oom` : ``} ${i > 0 ? `cooling` : ``}`,
                "aria-label": r?.name ?? `Empty slot ${e + 1}`,
                disabled: !r,
                onPointerDown: w(e),
                onPointerUp: T(e),
                onPointerCancel: E(e),
                onContextMenu: (e) => e.preventDefault(),
                children: [
                  r &&
                    (0, Q.jsx)(`img`, {
                      src: r.icon,
                      alt: ``,
                      className: `pixel`,
                      draggable: !1,
                    }),
                  i > 0 &&
                    (0, Q.jsx)(`div`, {
                      className: `cd`,
                      style: { "--cd": `${i * 360}deg` },
                    }),
                  e === QW &&
                    t.blinkLeft > 0 &&
                    (0, Q.jsx)(`span`, {
                      className: `secs`,
                      children: tf(t.blinkLeft),
                    }),
                  r &&
                    r.cost > 0 &&
                    (0, Q.jsx)(`span`, { className: `cost`, children: r.cost }),
                  r &&
                    r.cost === 0 &&
                    r.stamina > 0 &&
                    (0, Q.jsx)(`span`, {
                      className: `cost stamina`,
                      children: r.stamina,
                    }),
                ],
              },
              n,
            );
          }),
          g > 1 &&
            (0, Q.jsxs)(`button`, {
              className: `touch-page`,
              "aria-label": `Spell page ${m + 1} of ${g}: show the next`,
              onPointerDown: I7(() => {
                (e && (e.heldSlot = null), h((e) => (e + 1) % g));
              }),
              children: [m + 1, `/`, g],
            }),
          S &&
            (0, Q.jsx)(`button`, {
              className: `touch-pill use`,
              onPointerDown: L7(() => XG(`interact`)),
              children: S,
            }),
          C &&
            (0, Q.jsx)(`button`, {
              className: `touch-pill road`,
              onPointerDown: L7(() => XG(`road`)),
              children: `Road`,
            }),
          d &&
            t.shop &&
            S !== `Trade` &&
            (0, Q.jsx)(`button`, {
              className: `touch-pill road`,
              onPointerDown: L7(() => XG(`market`)),
              children: `Market`,
            }),
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `touch-menu`,
        children: [
          u &&
            (0, Q.jsx)(`button`, {
              onPointerDown: I7(() => XG(`satchel`)),
              "aria-label": `Satchel ${u}`,
              children: `Bag`,
            }),
          s &&
            (0, Q.jsxs)(`button`, {
              className: l ? `has` : ``,
              "data-badge": l ? `!` : void 0,
              onPointerDown: I7(() => XG(`journal`)),
              "aria-label": `Journal: ${c ?? 0} open quest${c === 1 ? `` : `s`}${l ? `; the story's next part is waiting` : ``}`,
              children: [`Quests`, c ? ` ${c}` : ``],
            }),
          d &&
            s &&
            (0, Q.jsx)(`button`, {
              onPointerDown: I7(() => XG(`homestead`)),
              "aria-label": `Homestead`,
              children: `Home`,
            }),
          f &&
            s &&
            t.hearth &&
            (0, Q.jsx)(`button`, {
              className:
                t.hearth.k == null
                  ? t.hearth.cooldown > 0
                    ? `cooling`
                    : ``
                  : `on`,
              onPointerDown: I7(() => XG(`hearth`)),
              "aria-label":
                t.hearth.k == null ? `Hearthsong` : `Stop Hearthsong`,
              children:
                t.hearth.k == null
                  ? t.hearth.cooldown > 0
                    ? M7(t.hearth.cooldown)
                    : `Hearth`
                  : `Stop`,
            }),
          d &&
            (0, Q.jsx)(`button`, {
              onPointerDown: I7(() => XG(`provisions`)),
              "aria-label": `Provisions`,
              children: `Food`,
            }),
          (0, Q.jsx)(`button`, {
            className: t.attrPoints > 0 ? `has` : ``,
            "data-badge": t.attrPoints > 0 ? String(t.attrPoints) : void 0,
            onPointerDown: I7(() => XG(`spellbook`)),
            "aria-label":
              t.attrPoints > 0
                ? `Spellbook: ${t.attrPoints} passive point${t.attrPoints === 1 ? `` : `s`} to spend`
                : `Spellbook`,
            children: `Spells`,
          }),
          (0, Q.jsx)(`button`, {
            className: i ? `on` : a ? `has` : ``,
            onPointerDown: I7(o),
            "aria-label": `Chat`,
            children: `Chat`,
          }),
          (0, Q.jsx)(`button`, {
            onPointerDown: I7(p),
            "aria-label": `Menu`,
            children: `Menu`,
          }),
        ],
      }),
    ],
  });
}
function F7(e) {
  try {
    e.currentTarget.setPointerCapture(e.pointerId);
  } catch {}
}
function I7(e) {
  return (t) => {
    (t.preventDefault(),
      t.stopPropagation(),
      q.init(),
      q.sfx(`click`, 0.5),
      e());
  };
}
function L7(e) {
  let t = I7(e);
  return (e) => {
    (ZG(e, e.currentTarget), t(e));
  };
}
function gue({ game: e, running: t }) {
  let [n, r] = (0, v.useState)(null),
    i = (0, v.useRef)(null),
    a = (0, v.useRef)({ x: 0, y: 0 }),
    o = (0, v.useRef)(!1),
    s = (t, n) => {
      let i = t - a.current.x,
        s = n - a.current.y,
        c = Math.hypot(i, s),
        l = c >= pue || (o.current && c >= mue);
      ((o.current = l),
        c > P7 && ((i = (i / c) * P7), (s = (s / c) * P7)),
        e && ((e.stick = { x: i / P7, y: s / P7 }), (e.stickSprint = l)),
        r({ x: a.current.x, y: a.current.y, kx: i, ky: s, sprint: l }));
    },
    c = (t) => {
      t.pointerId === i.current &&
        ((i.current = null),
        (o.current = !1),
        e && ((e.stick = { x: 0, y: 0 }), (e.stickSprint = !1)),
        r(null));
    };
  return (0, Q.jsx)(`div`, {
    className: `touch-stick-zone`,
    onPointerDown: (e) => {
      if (i.current !== null) return;
      (e.preventDefault(), q.init(), (i.current = e.pointerId), F7(e));
      let t = e.currentTarget.getBoundingClientRect();
      ((a.current = { x: e.clientX - t.left, y: e.clientY - t.top }),
        (o.current = !1),
        s(a.current.x, a.current.y));
    },
    onPointerMove: (e) => {
      if (e.pointerId !== i.current) return;
      let t = e.currentTarget.getBoundingClientRect();
      s(e.clientX - t.left, e.clientY - t.top);
    },
    onPointerUp: c,
    onPointerCancel: c,
    children: n
      ? (0, Q.jsx)(`div`, {
          className: `touch-stick active${n.sprint && t ? ` sprint` : ``}`,
          style: { left: n.x, top: n.y },
          children: (0, Q.jsx)(`div`, {
            className: `knob`,
            style: { transform: `translate(${n.kx}px, ${n.ky}px)` },
          }),
        })
      : (0, Q.jsx)(`div`, {
          className: `touch-stick idle`,
          children: (0, Q.jsx)(`div`, { className: `knob` }),
        }),
  });
}
function _ue() {
  return (0, Q.jsxs)(`div`, {
    className: `rotate-prompt`,
    role: `alert`,
    children: [
      (0, Q.jsx)(`div`, {
        className: `rotate-phone`,
        children: (0, Q.jsx)(`div`, { className: `rotate-screen` }),
      }),
      (0, Q.jsx)(`h2`, { children: `Turn your device sideways` }),
      (0, Q.jsx)(`p`, {
        children: `Aetherfall is played in landscape. Rotate your phone to continue.`,
      }),
    ],
  });
}
