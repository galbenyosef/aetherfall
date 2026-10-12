// assets__index-BTsv3a2s 262 — children
// Lines 165763-166026 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function tue(e, t, n, r) {
  let i = (0, v.useRef)(null);
  (0, v.useEffect)(() => {
    if (!e) return;
    let a = i.current;
    if (((i.current = new Map(e.map((e) => [e.questId, e]))), a))
      for (let i of e) {
        let e = cQ(i.questId);
        if (!e) continue;
        let o = h$[e.kind],
          s = a.get(i.questId);
        if (!s) {
          n({ text: `Quest accepted: ${e.title}`, color: o });
          continue;
        }
        if (i.status === `done` && s.status !== `done`) {
          (n({ text: `Quest complete: ${e.title} · ${w7(e)}`, color: o }),
            e.kind === `main` && r(e));
          continue;
        }
        let c = e.steps[s.step];
        c &&
          (i.step === s.step
            ? i.progress !== s.progress &&
              lQ(c) > 1 &&
              n({
                text: `${c.t === `loot` ? c.item : t(c.text)}: ${dQ(c, i.progress)}/${lQ(c)}`,
                color: o,
              })
            : n({ text: `✓ ${t(c.text)}`, color: o }));
      }
  }, [e, t, n, r]);
}
function D7(e, t) {
  return e
    ? {
        id: t,
        state: e.state,
        since: e.since,
        readyAt: e.readyAt,
        resonance: e.resonance,
        wave: e.wave,
        waveEndsAt: e.waveEndsAt,
        players: e.players,
        night: e.night,
      }
    : Yl(t);
}
function O7(e) {
  let t = new Map((e ?? []).map((e) => [e.altarId, e]));
  return Ll.map((e) => D7(t.get(e), e));
}
function k7({ c: e, scale: t = 2, className: n }) {
  let r = (0, v.useMemo)(() => e.toDataURL(), [e]);
  return (0, Q.jsx)(`img`, {
    src: r,
    width: e.width * t,
    height: e.height * t,
    className: `pixel ${n ?? ``}`,
    alt: ``,
  });
}
var A7 = (e) =>
    `${Math.floor(e / 60)}:${String(Math.max(0, Math.floor(e % 60))).padStart(2, `0`)}`,
  nue = {
    quiet: `Quiet`,
    rite: `A rite is open`,
    singing: `Singing`,
    hollowed: `Hollowed`,
    reclaim: `Being reclaimed`,
  };
function j7(e = 500) {
  let [t, n] = (0, v.useState)(Date.now());
  return (
    (0, v.useEffect)(() => {
      let t = window.setInterval(() => n(Date.now()), e);
      return () => window.clearInterval(t);
    }, [e]),
    t
  );
}
function rue({
  id: e,
  doc: t,
  attuned: n,
  level: r,
  pos: i,
  onBegin: a,
  onTouch: o,
  onRoad: s,
  onClose: c,
}) {
  (l5(c), a5());
  let l = j7(),
    u = Il[e],
    d = D7(t, e),
    f = n.includes(e),
    p = Kl[u.tier],
    m = Xl(d, l, r),
    h = lu(d, n, i.x, i.y),
    g = $l(u, `flickering`, {
      night: !1,
      reclaim: d.state === `hollowed`,
      firstAttune: !1,
    }),
    _ = $l(u, `radiant`, {
      night: !1,
      reclaim: d.state === `hollowed`,
      firstAttune: !f,
    }),
    v = Math.ceil((d.since + Bl.hollowSettleSeconds * 1e3 - l) / 1e3),
    y = Math.ceil((d.since + Bl.hollowMaxSeconds * 1e3 - l) / 1e3),
    b = Wz(
      f || d.state === `hollowed`
        ? d.state
        : d.state === `quiet`
          ? `unattuned`
          : d.state,
      Math.floor(l / 250),
    );
  return (0, Q.jsxs)(`div`, {
    className: `altar-panel panel`,
    onMouseDown: (e) => e.stopPropagation(),
    children: [
      (0, Q.jsxs)(`div`, {
        className: `ap-head`,
        children: [
          (0, Q.jsx)(k7, { c: b, scale: 2 }),
          (0, Q.jsxs)(`div`, {
            children: [
              (0, Q.jsx)(`b`, {
                className: d.state === `hollowed` ? `red` : ``,
                children: u.name,
              }),
              (0, Q.jsxs)(`small`, {
                children: [`Level `, u.level, ` · `, Rr[u.region].name],
              }),
            ],
          }),
          (0, Q.jsx)(`button`, {
            className: `link-btn ap-x`,
            onClick: c,
            children: `✕`,
          }),
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `ap-state st-${d.state}`,
        children: [
          nue[d.state],
          d.state === `singing` && ` · ${A7(uu(d, l))} left`,
          ` · `,
          f
            ? (0, Q.jsxs)(`span`, {
                className: `cy`,
                children: [
                  (0, Q.jsx)(k7, { c: Kz(), scale: 1.5, className: `inline` }),
                  ` attuned`,
                ],
              })
            : `you are not attuned`,
        ],
      }),
      (0, Q.jsxs)(`p`, { className: `ap-lore`, children: [`“`, u.lore, `”`] }),
      d.state === `quiet` &&
        (0, Q.jsxs)(`p`, {
          children: [
            `Begin the Rite and the shard opens. The Hollow comes up for it: `,
            (0, Q.jsxs)(`b`, { children: [p, ` waves`] }),
            `, then a `,
            (0, Q.jsx)(`b`, { className: `red`, children: `Hollow Cantor` }),
            `. Anyone nearby can help, and everyone who does is attuned.`,
          ],
        }),
      (d.state === `rite` || d.state === `reclaim`) &&
        (0, Q.jsxs)(`p`, {
          children: [
            `A rite is open. Hold the shard: kill the `,
            (0, Q.jsx)(`b`, { className: `red`, children: `Gnawers` }),
            ` on its steps, cut the `,
            (0, Q.jsx)(`b`, { className: `red`, children: `Tethers` }),
            `, and break the Cantor's song. Strike anything it called up and you share in the Gift.`,
          ],
        }),
      d.state === `singing` &&
        (f
          ? (0, Q.jsx)(`p`, {
              children: `The shard is singing. Travel here is free while it sings, and no rite can begin until it quiets.`,
            })
          : (0, Q.jsx)(`p`, {
              children: `Someone held the rite here and the shard is still singing. While it sings, it takes anyone's note: no rite, no fight.`,
            })),
      d.state === `hollowed` &&
        (0, Q.jsxs)(`p`, {
          children: [
            `The Hollow took it. Reclaim it: one more wave than the rite, two levels higher, and the shard starts at `,
            (0, Q.jsx)(`b`, { children: `35%` }),
            ` Resonance.`,
            v > 0 ? ` It can be reclaimed in ${A7(v)}.` : ``,
            ` Left alone, the Chorus sings it back in `,
            A7(Math.max(0, y)),
            `.`,
          ],
        }),
      (d.state === `quiet` || d.state === `hollowed`) &&
        (0, Q.jsxs)(`div`, {
          className: `ap-rew`,
          children: [
            !f && (0, Q.jsx)(`span`, { children: `Attunement` }),
            (0, Q.jsxs)(`span`, {
              children: [
                (0, Q.jsx)(k7, {
                  c: OY(`dust`),
                  scale: 1,
                  className: `inline`,
                }),
                ` `,
                g,
                `–`,
                _,
                ` Aether Dust`,
              ],
            }),
            (0, Q.jsx)(`span`, { children: `The Altar's Gift` }),
            (0, Q.jsxs)(`span`, { children: [eu(u, !f), ` XP`] }),
          ],
        }),
      (0, Q.jsxs)(`div`, {
        className: `ap-btns`,
        children: [
          (d.state === `quiet` || d.state === `hollowed`) &&
            (0, Q.jsx)(`button`, {
              className: `px-btn primary`,
              disabled: !m.ok,
              title: m.ok ? `` : m.reason,
              onClick: a,
              children: d.state === `hollowed` ? `Reclaim` : `Begin the Rite`,
            }),
          d.state === `singing` &&
            !f &&
            (0, Q.jsx)(`button`, {
              className: `px-btn primary`,
              disabled: !!h,
              title: h ?? ``,
              onClick: o,
              children: `Touch the shard · attune`,
            }),
          (0, Q.jsxs)(`button`, {
            className: `px-btn`,
            onClick: s,
            children: [
              `Chorus Road `,
              (0, Q.jsx)(`small`, { children: HG(`[R]`) }),
            ],
          }),
        ],
      }),
      !m.ok &&
        (d.state === `quiet` || d.state === `hollowed`) &&
        (0, Q.jsx)(`div`, { className: `ap-why`, children: m.reason }),
    ],
  });
}
var iue = (e) => Rr[Il[e].region].name;
