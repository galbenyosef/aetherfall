// index-BTsv3a2s 284 — children
// Lines 172245-172629 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Fde({
  party: e,
  offers: t,
  closed: n,
  myId: r,
  stats: i,
  live: a,
  place: o,
  me: s,
  near: c,
  ignoredOf: l,
  homeInvite: u,
  here: d,
  onAnswer: f,
  onInvite: p,
  onItem: m,
  onPrefs: h,
  onLeave: g,
  onClose: _,
}) {
  u5(1e3);
  let [y, b] = (0, v.useState)(``),
    [x, S] = (0, v.useState)(() => new Set()),
    [C, w] = (0, v.useState)(() => new Map());
  l5(_);
  let T = Date.now(),
    E = performance.now(),
    D = t
      .filter((e) => e.until > T && !l(e.name))
      .sort((e, t) => e.until - t.until),
    O = e ? Qs(e) : [],
    k = e?.leader === r,
    ee = c().filter((e) => !O.some((t) => t.name === e.name)),
    te = !0,
    ne = () => {
      let e = te;
      return ((te = !1), e);
    },
    re = (e) => x.has(e) || (C.get(e) ?? 0) > T,
    ie = (e, t, n = 0) => {
      if (re(e)) return;
      let r = t();
      r &&
        (S((t) => new Set(t).add(e)),
        r.then((t) => {
          (S((t) => {
            let n = new Set(t);
            return (n.delete(e), n);
          }),
            t === !0 && n && w((t) => new Map(t).set(e, Date.now() + n)));
        }));
    },
    ae = (e, t) => {
      let n = `${e}:${Ws(t.name)}`;
      e === `invite` || e === `ask`
        ? ie(n, () => m(e, t), Ns.inviteMs)
        : e === `lead` || e === `kick` || e === `follow`
          ? ie(n, () => m(e, t))
          : m(e, t);
    },
    oe = Ec(s.followIn ?? 0, s.discordant),
    se = (e, t) =>
      (e === `follow` && !!oe) ||
      ((e === `invite` ||
        e === `ask` ||
        e === `lead` ||
        e === `kick` ||
        e === `follow`) &&
        re(`${e}:${Ws(t)}`));
  return (0, Q.jsx)(`div`, {
    className: `party-overlay`,
    onMouseDown: (e) => e.target === e.currentTarget && _(),
    children: (0, Q.jsxs)(`div`, {
      className: `party-panel panel`,
      role: `dialog`,
      "aria-label": `Party`,
      "data-pad-rows": ``,
      onMouseDown: (e) => e.stopPropagation(),
      children: [
        (0, Q.jsxs)(`div`, {
          className: `hp-head`,
          children: [
            (0, Q.jsxs)(`div`, {
              children: [
                (0, Q.jsx)(`b`, { children: `Party` }),
                (0, Q.jsx)(`small`, {
                  children: e
                    ? `${e.members.length} of ${Ns.max}`
                    : `You're in no party. Invite a mage, or ask to join theirs.`,
                }),
              ],
            }),
            (0, Q.jsx)(`button`, {
              className: `link-btn hp-x`,
              onMouseDown: (e) => e.preventDefault(),
              onClick: _,
              "aria-label": `Close`,
              children: `✕`,
            }),
          ],
        }),
        e &&
          (0, Q.jsxs)(`section`, {
            children: [
              (0, Q.jsx)(`h3`, { children: `Members` }),
              O.map((t) => {
                let n = t.id === r,
                  c = n ? null : Sc(t, i[t.id], o, E),
                  f = n
                    ? []
                    : Vs(
                        { name: t.name, partied: !0, follow: c },
                        { ...s, ignored: l(t.name) },
                      ).filter(
                        (e) =>
                          e !== `ignore` &&
                          e !== `unignore` &&
                          !(e === `lead` && t.off),
                      );
                return (0, Q.jsxs)(
                  `div`,
                  {
                    className: `hp-row pp-member${t.off ? ` away` : ``}`,
                    children: [
                      (0, Q.jsxs)(`span`, {
                        className: `pp-who`,
                        children: [
                          (0, Q.jsxs)(`span`, {
                            children: [
                              t.id === e.leader &&
                                (0, Q.jsx)(`span`, {
                                  className: `pp-crown`,
                                  title: `Leader`,
                                  children: `♛ `,
                                }),
                              (0, Q.jsx)(`b`, {
                                style: { color: H9(t.school) },
                                children: t.name,
                              }),
                              n &&
                                (0, Q.jsx)(`small`, {
                                  className: `muted`,
                                  children: ` (you)`,
                                }),
                            ],
                          }),
                          !n &&
                            (0, Q.jsx)(Pde, {
                              m: t,
                              s: i[t.id],
                              seen: a[Ws(t.name)],
                              here: o,
                              now: E,
                            }),
                        ],
                      }),
                      (0, Q.jsxs)(`span`, {
                        className: `pc-btns`,
                        children: [
                          f.map((e) =>
                            (0, Q.jsx)(
                              U9,
                              {
                                label:
                                  e === `follow` && oe
                                    ? `${G9[e]} ${oe.short}`
                                    : G9[e],
                                first: ne(),
                                disabled: se(e, t.name),
                                title:
                                  e === `follow`
                                    ? (oe?.title ?? `Join ${t.name}'s layer`)
                                    : void 0,
                                onClick: () =>
                                  ae(e, { id: t.id, name: t.name, room: c }),
                              },
                              e,
                            ),
                          ),
                          !n &&
                            !t.off &&
                            u &&
                            !d(t.name) &&
                            (0, Q.jsx)(U9, {
                              label: `Invite home`,
                              first: ne(),
                              onClick: () => u(t.name),
                            }),
                        ],
                      }),
                    ],
                  },
                  t.id,
                );
              }),
              k &&
                (0, Q.jsx)(`p`, {
                  className: `muted small`,
                  children: `You lead the party: you can pass the lead and remove members. Anyone in it can invite.`,
                }),
            ],
          }),
        D.length > 0 &&
          (0, Q.jsxs)(`section`, {
            children: [
              (0, Q.jsx)(`h3`, { children: `Waiting for your answer` }),
              D.map((t) =>
                (0, Q.jsx)(
                  `div`,
                  {
                    className: `hp-row`,
                    children: (0, Q.jsx)(W9, {
                      o: t,
                      now: T,
                      first: ne(),
                      inParty: !!e,
                      onAnswer: f,
                    }),
                  },
                  `${t.kind}:${t.from}`,
                ),
              ),
            ],
          }),
        (0, Q.jsxs)(`section`, {
          children: [
            (0, Q.jsx)(`h3`, { children: `Invite by name` }),
            (0, Q.jsxs)(`form`, {
              className: `hp-invite`,
              onSubmit: (e) => {
                e.preventDefault();
                let t = y.trim();
                t && ie(`byName`, () => p(t).then((e) => (e && b(``), e)));
              },
              children: [
                (0, Q.jsx)(`input`, {
                  value: y,
                  maxLength: 24,
                  placeholder: `A mage's name…`,
                  onChange: (e) => b(e.target.value),
                  onKeyDown: (e) => e.key !== `Escape` && e.stopPropagation(),
                }),
                (0, Q.jsx)(`button`, {
                  className: `hbtn`,
                  type: `submit`,
                  disabled: !y.trim() || x.has(`byName`),
                  children: `Invite`,
                }),
              ],
            }),
          ],
        }),
        (0, Q.jsxs)(`section`, {
          children: [
            (0, Q.jsx)(`h3`, { children: `Mages near you` }),
            ee.length
              ? ee.map((e) => {
                  let t = Vs(e, { ...s, ignored: l(e.name) });
                  return (0, Q.jsxs)(
                    `div`,
                    {
                      className: `hp-row`,
                      children: [
                        (0, Q.jsxs)(`span`, {
                          children: [
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
                            (0, Q.jsx)(`b`, {
                              style: { color: H9(e.school) },
                              children: e.name,
                            }),
                            ` `,
                            (0, Q.jsxs)(`small`, {
                              className: `muted`,
                              children: [`Lv `, e.level],
                            }),
                            e.partied &&
                              (0, Q.jsx)(`small`, {
                                className: `muted`,
                                children: ` · in a party`,
                              }),
                          ],
                        }),
                        (0, Q.jsx)(`span`, {
                          className: `pc-btns`,
                          children: t.map((t) =>
                            (0, Q.jsx)(
                              U9,
                              {
                                label:
                                  se(t, e.name) &&
                                  (t === `invite` || t === `ask`) &&
                                  !x.has(`${t}:${Ws(e.name)}`)
                                    ? t === `invite`
                                      ? `Invited`
                                      : `Asked`
                                    : G9[t],
                                cls:
                                  t === `ignore` || t === `unignore`
                                    ? `pp-quiet`
                                    : ``,
                                first: ne(),
                                disabled: se(t, e.name),
                                onClick: () =>
                                  ae(t, {
                                    key: e.key,
                                    entity: e.entity,
                                    name: e.name,
                                  }),
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    },
                    e.key,
                  );
                })
              : (0, Q.jsxs)(`p`, {
                  className: `muted small`,
                  children: [`No other mage within `, Ns.reach, ` tiles.`],
                }),
          ],
        }),
        (0, Q.jsxs)(`section`, {
          children: [
            (0, Q.jsx)(`h3`, { children: `Invitations` }),
            (0, Q.jsxs)(`div`, {
              className: `pp-prefs`,
              role: `radiogroup`,
              "aria-label": `Who may invite you`,
              children: [
                (0, Q.jsx)(U9, {
                  label: `Anyone`,
                  cls: n ? `` : `on`,
                  first: ne(),
                  onClick: () => n && h(!1),
                }),
                (0, Q.jsx)(U9, {
                  label: `No one`,
                  cls: n ? `on` : ``,
                  onClick: () => !n && h(!0),
                }),
              ],
            }),
            (0, Q.jsxs)(`p`, {
              className: `muted small`,
              children: [
                n
                  ? `Every invitation and request to join is turned away, from anyone.`
                  : `Anyone may invite you, or ask to join your party.`,
                ` Kept on your mage, wherever you play.`,
              ],
            }),
          ],
        }),
        e &&
          (0, Q.jsxs)(`section`, {
            children: [
              (0, Q.jsx)(`p`, {
                className: `muted small pp-share`,
                children: cc(e.members.length),
              }),
              (0, Q.jsx)(U9, {
                label: `Leave party`,
                cls: `pp-leave`,
                disabled: x.has(`leave`),
                onClick: () => ie(`leave`, g),
              }),
            ],
          }),
      ],
    }),
  });
}
