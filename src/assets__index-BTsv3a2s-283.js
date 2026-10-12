// assets__index-BTsv3a2s 283 — classname
// Lines 171954-172244 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function jde({
  party: e,
  myId: t,
  stats: n,
  live: r,
  here: i,
  phone: a,
  column: o,
  menuFor: s,
  still: c,
  followIn: l,
  discordant: u,
  onRow: d,
  onFollow: f,
  onMore: p,
}) {
  u5(1e3);
  let { textSize: m } = x5(),
    h = (0, v.useRef)(null),
    g = Qs(e).filter((e) => e.id !== t),
    _ = `${g.map((e) => e.id).join(`,`)} ${o} ${window.innerWidth}x${window.innerHeight} ${m} ${a}`,
    [y, b] = (0, v.useState)({ says: ``, level: 0 }),
    x = y.says === _ ? y.level : 0;
  (0, v.useLayoutEffect)(() => {
    let e = h.current?.closest(a ? `.hud-left` : `.party-hud`);
    x >= 3 ||
      !e ||
      !g.length ||
      (e.scrollHeight > e.clientHeight + 1 && b({ says: _, level: x + 1 }));
  });
  let { shown: S, more: C } = yc(g.length, x);
  if (!S && !C)
    return (0, Q.jsx)(`div`, { className: `party-frames`, ref: h, hidden: !0 });
  let w = performance.now(),
    T = Ec(l, u);
  return (0, Q.jsxs)(`div`, {
    className: `party-frames${c ? ` still` : ``}`,
    ref: h,
    onMouseDown: (e) => e.stopPropagation(),
    onTouchStart: (e) => e.stopPropagation(),
    children: [
      g.slice(0, S).map((t) => {
        let o = n[t.id],
          p = r[Ws(t.name)],
          m = vc(p, o),
          h = gc(t, o, i, w, !!p),
          g = p?.level ?? o?.level,
          _ = bc(t.id),
          v =
            o && o.maxMana > 0 && !t.off
              ? Math.max(0, Math.min(1, o.mana / o.maxMana))
              : null,
          y = a ? null : Sc(t, o, i, w);
        return (0, Q.jsxs)(
          `div`,
          {
            className: `pf-item`,
            children: [
              (0, Q.jsxs)(`button`, {
                type: `button`,
                "data-mage": _,
                "aria-disabled": c || void 0,
                className: `pf-row panel${_c(t, o, w) ? ` dim` : ``}${m?.dead ? ` dead` : ``}${s === _ ? ` open` : ``}${y ? ` joinable` : ``}`,
                title: `${t.name}: ${h}`,
                onMouseDown: (e) => e.preventDefault(),
                onClick: (e) => {
                  if (c) return;
                  let n = e.currentTarget.getBoundingClientRect();
                  d(t, { x: n.left, y: n.top, w: n.width, h: n.height });
                },
                children: [
                  (0, Q.jsxs)(`span`, {
                    className: `pf-top`,
                    children: [
                      t.id === e.leader &&
                        (0, Q.jsx)(`span`, {
                          className: `pf-crown`,
                          title: `Leader`,
                          children: `♛`,
                        }),
                      (0, Q.jsx)(`b`, {
                        style: { color: H9(t.school) },
                        children: t.name,
                      }),
                      g !== void 0 &&
                        (0, Q.jsxs)(`small`, {
                          className: `pf-lvl`,
                          children: [`Lv `, g],
                        }),
                      m?.dead &&
                        (0, Q.jsx)(`span`, {
                          className: `pf-skull`,
                          title: `Fallen`,
                          children: `☠`,
                        }),
                      (0, Q.jsx)(`small`, {
                        className: `pf-where`,
                        children: h,
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`span`, {
                    className: `bar hp pf-hp`,
                    children: (0, Q.jsx)(`span`, {
                      className: `bar-fill`,
                      style: { width: `${(m?.k ?? 0) * 100}%` },
                    }),
                  }),
                  v !== null &&
                    (0, Q.jsx)(`span`, {
                      className: `bar mana pf-mana`,
                      children: (0, Q.jsx)(`span`, {
                        className: `bar-fill`,
                        style: { width: `${v * 100}%` },
                      }),
                    }),
                ],
              }),
              y &&
                (0, Q.jsx)(`button`, {
                  type: `button`,
                  className: `pf-join hbtn`,
                  disabled: c || !!T,
                  title: T?.title ?? `Join ${t.name}'s layer`,
                  onMouseDown: (e) => e.preventDefault(),
                  onClick: () => !c && f(t, y),
                  children: l > 0 && !u ? `${l} min` : `Join`,
                }),
            ],
          },
          t.id,
        );
      }),
      C > 0 &&
        (0, Q.jsx)(`button`, {
          type: `button`,
          className: `pf-more panel`,
          "aria-disabled": c || void 0,
          onMouseDown: (e) => e.preventDefault(),
          onClick: () => !c && p(),
          children: S ? `+${C} more` : `◆ Party: ${C} more`,
        }),
    ],
  });
}
function Mde({
  offers: e,
  ignored: t,
  phone: n,
  inParty: r,
  lead: i,
  padUp: a,
  onAnswer: o,
}) {
  u5(500);
  let s = J8().device === `pad` && a,
    c = Date.now(),
    { shown: l, more: u } = rc(e, c, t, (n ? 1 : 3) - !!i, r);
  return !l.length && !i && !u
    ? null
    : (0, Q.jsxs)(`div`, {
        className: `party-cards`,
        onMouseDown: (e) => e.stopPropagation(),
        onTouchStart: (e) => e.stopPropagation(),
        children: [
          i,
          l.map((e, t) =>
            (0, Q.jsx)(
              `div`,
              {
                className: `party-card panel`,
                children: (0, Q.jsx)(W9, {
                  o: e,
                  now: c,
                  first: t === 0 && !i,
                  onAnswer: o,
                }),
              },
              `${e.kind}:${e.from}`,
            ),
          ),
          (u > 0 || s) &&
            (0, Q.jsxs)(`small`, {
              className: `pc-more`,
              children: [
                u > 0 && `+${u} more in the Party panel`,
                s &&
                  (0, Q.jsxs)(Q.Fragment, {
                    children: [
                      u > 0 && ` · `,
                      (0, Q.jsx)(Y8, { b: `UP` }),
                      ` to answer`,
                    ],
                  }),
              ],
            }),
        ],
      });
}
function Nde({
  name: e,
  school: t,
  room: n,
  followIn: r,
  discordant: i,
  onJoin: a,
  onDismiss: o,
}) {
  let s = Ec(r, i);
  return (0, Q.jsxs)(`div`, {
    className: `party-card panel follow-card`,
    children: [
      (0, Q.jsxs)(`span`, {
        className: `pc-text`,
        children: [
          (0, Q.jsx)(`b`, { style: { color: H9(t) }, children: e }),
          Dc(e, n).slice(e.length),
        ],
      }),
      (0, Q.jsxs)(`span`, {
        className: `pc-btns`,
        children: [
          (0, Q.jsx)(U9, {
            label: `Join them`,
            cls: `pc-yes`,
            first: !s,
            disabled: !!s,
            title: s?.title,
            onClick: a,
          }),
          (0, Q.jsx)(U9, {
            label: `Not now`,
            cls: `pc-no`,
            first: !!s,
            onClick: o,
          }),
          s && (0, Q.jsx)(`small`, { className: `pc-left`, children: s.short }),
        ],
      }),
    ],
  });
}
function Pde({ m: e, s: t, seen: n, here: r, now: i }) {
  let a = vc(n, t),
    o = gc(e, t, r, i, !!n),
    s = n?.level ?? t?.level,
    c =
      t && t.maxMana > 0 && !e.off
        ? Math.max(0, Math.min(1, t.mana / t.maxMana))
        : null;
  return (0, Q.jsxs)(`span`, {
    className: `pp-vitals${_c(e, t, i) ? ` dim` : ``}${a?.dead ? ` dead` : ``}`,
    children: [
      (0, Q.jsxs)(`small`, {
        className: `muted`,
        children: [s !== void 0 && `Lv ${s} · `, a?.dead && `fallen · `, o],
      }),
      !e.off &&
        (0, Q.jsxs)(`span`, {
          className: `pp-bars`,
          children: [
            (0, Q.jsx)(`span`, {
              className: `bar hp`,
              children: (0, Q.jsx)(`span`, {
                className: `bar-fill`,
                style: { width: `${(a?.k ?? 0) * 100}%` },
              }),
            }),
            c !== null &&
              (0, Q.jsx)(`span`, {
                className: `bar mana`,
                children: (0, Q.jsx)(`span`, {
                  className: `bar-fill`,
                  style: { width: `${c * 100}%` },
                }),
              }),
          ],
        }),
    ],
  });
}
var G9 = {
  whisper: `Whisper`,
  invite: `Invite`,
  ask: `Ask to join`,
  follow: `Join layer`,
  lead: `Make leader`,
  kick: `Remove`,
  ignore: `Ignore`,
  unignore: `Unignore`,
};
