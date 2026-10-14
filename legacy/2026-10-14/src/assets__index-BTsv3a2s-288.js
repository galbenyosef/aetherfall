// assets__index-BTsv3a2s 288 — jsx
// Lines 175209-175508 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function qde({ hud: e, school: t, onHearth: n, onLoadout: r }) {
  let i = _5(),
    a = (0, v.useSyncExternalStore)(zX, RX, RX),
    o = J8(),
    s = o.device === `pad`,
    [c, l] = (0, v.useState)(null),
    u = c ?? e.loadout;
  (0, v.useEffect)(() => {
    c && c.every((t, n) => t === (e.loadout[n] ?? ``)) && l(null);
  }, [c, e.loadout]);
  let d = Ede(),
    [f, p] = (0, v.useState)(null),
    m = (e) => {
      r &&
        (l(e),
        p(null),
        q.sfx(`click`, 0.7),
        r(e).catch((e) => {
          (l(null), p(e instanceof Error ? e.message : String(e)));
        }));
    },
    h = (0, v.useMemo)(
      () =>
        [...u, `blink`].map((n, r) => {
          if (n === `blink`)
            return ce(t)
              ? {
                  id: n,
                  name: le.name,
                  mana: le.mana,
                  stamina: 0,
                  unarmed: !1,
                  icon: Fh(`blink`, t),
                }
              : {
                  id: n,
                  name: se.name,
                  mana: 0,
                  stamina: se.stamina,
                  unarmed: !1,
                  icon: Fh(`dash`, t),
                };
          let i = n ? Se(n) : void 0;
          if (!i)
            return {
              id: ``,
              name: `Empty slot ${r + 1}`,
              mana: 0,
              stamina: 0,
              unarmed: !1,
              icon: ``,
            };
          let a = ud(i, t),
            o = !ld(e.arms, i);
          return {
            id: n,
            name: o && i.needs ? `${i.name} (needs ${x[i.needs]})` : i.name,
            mana: i.mana,
            stamina: a.stamina ?? 0,
            unarmed: o,
            icon: Fh(i, xe[i.id] ?? t),
            bow: i.needs === `bow` && i.kind === `bolt`,
          };
        }),
      [u, e.arms, t],
    ),
    g = (e) => (e === QW ? (ce(t) ? le.name : se.name) : `slot ${e + 1}`),
    [_, y] = (0, v.useState)(null),
    b = f
      ? { text: f, bad: !0 }
      : d.slot === null
        ? d.msg
        : (d.msg ?? {
            text: s
              ? `Press RT, LT, RB or LB for ${g(d.slot)} (Y flips the page, B cancels)`
              : `Press a key for ${g(d.slot)} · Backspace clears · Esc cancels`,
            bad: !1,
          });
  return (0, Q.jsxs)(`div`, {
    className: `action-bar`,
    children: [
      (0, Q.jsx)(ile, { hud: e }),
      _ &&
        d.slot === null &&
        !b &&
        (0, Q.jsx)(ole, { info: Yde(h[_.i], _.i, t, s, !!r), x: _.x }),
      b &&
        (0, Q.jsx)(`div`, {
          className: `ab-remap ${b.bad ? `bad` : ``}`,
          role: `status`,
          children: b.text,
        }),
      (0, Q.jsxs)(`div`, {
        className: `ab-slots`,
        children: [
          h.map((t, n) => {
            let c = e.cooldowns[n] ?? 0,
              l =
                !!t.id &&
                (e.mana < t.mana ||
                  t.unarmed ||
                  (!!e.stamina && e.stamina.v < t.stamina)),
              f = n === 0 ? ` / LMB` : n === 1 ? ` / RMB` : ``,
              h = n !== QW,
              g = d.slot === n;
            return (0, Q.jsxs)(
              `div`,
              {
                "data-drop": h ? h5(n) : void 0,
                "data-remap": n,
                className: `slot ${t.id ? `` : `empty`} ${n === QW ? `blink` : ``} ${l ? `oom` : ``} ${c > 0 ? `cooling` : ``} ${g ? `remap` : ``} ${h && t.id && r ? `draggable` : ``}`,
                "aria-describedby": _?.i === n ? `slot-card` : void 0,
                onMouseEnter: (e) => {
                  if (GG) return;
                  let t = e.currentTarget;
                  y({ i: n, x: t.offsetLeft + t.offsetWidth / 2 });
                },
                onMouseLeave: () => y((e) => (e?.i === n ? null : e)),
                onContextMenu: (e) => {
                  (e.preventDefault(), p(null), y(null), d.start(n));
                },
                onPointerDown: (e) => {
                  if (!h || !t.id || !r || e.button !== 0) return;
                  y(null);
                  let i = t.id;
                  p5(e, {
                    kind: `spell`,
                    icon: t.icon || null,
                    size: 48,
                    onDrop: (e) => {
                      let t = g5(e);
                      if (t === void 0) return;
                      let r = m5(u, i, n, t);
                      r && m(r);
                    },
                  });
                },
                children: [
                  t.icon &&
                    (0, Q.jsx)(`img`, {
                      src: t.icon,
                      alt: t.name,
                      className: `pixel`,
                      draggable: !1,
                    }),
                  c > 0 &&
                    (0, Q.jsx)(`div`, {
                      className: `cd`,
                      style: { "--cd": `${c * 360}deg` },
                    }),
                  n === QW &&
                    e.blinkLeft > 0 &&
                    (0, Q.jsx)(`span`, {
                      className: `secs`,
                      children: tf(e.blinkLeft),
                    }),
                  g
                    ? (0, Q.jsx)(`span`, { className: `key`, children: `…` })
                    : s
                      ? (() => {
                          let e = GX(n, o.page, a);
                          return e
                            ? (0, Q.jsx)(`span`, {
                                className: `key`,
                                children: (0, Q.jsx)(Y8, { b: e }),
                              })
                            : null;
                        })()
                      : (0, Q.jsxs)(`span`, {
                          className: `key`,
                          children: [
                            Bi(i[n]),
                            t.id && t.id !== `blink` ? f : ``,
                          ],
                        }),
                  t.id &&
                    t.mana > 0 &&
                    (0, Q.jsx)(`span`, { className: `cost`, children: t.mana }),
                  t.id &&
                    t.mana === 0 &&
                    t.stamina > 0 &&
                    (0, Q.jsx)(`span`, {
                      className: `cost stamina`,
                      children: t.stamina,
                    }),
                  `bow` in t &&
                    t.bow &&
                    e.arrows &&
                    (0, Q.jsx)(`span`, {
                      className: `ammo`,
                      style: { "--ammo": e.arrows.color },
                      title: `${Pa[e.arrows.kind].name}: ${e.arrows.n}`,
                      children: e.arrows.n,
                    }),
                ],
              },
              n,
            );
          }),
          n && e.hearth && (0, Q.jsx)(due, { hearth: e.hearth, onClick: n }),
          s &&
            (0, Q.jsxs)(`span`, {
              className: `ab-page`,
              children: [(0, Q.jsx)(Y8, { b: `Y` }), ` `, o.page + 1, `/`, AX],
            }),
        ],
      }),
      (0, Q.jsx)(ale, { hud: e }),
    ],
  });
}
var Jde = {
    bolt: `Bolt`,
    nova: `Nova`,
    strike: `Strike`,
    chain: `Chain`,
    rift: `Rift`,
    drain: `Drain`,
    swing: `Blow`,
    guard: `Guard`,
    ward: `Ward`,
    veil: `Veil`,
  },
  J9 = (e) => `${Math.round(e * 10) / 10} tile${e === 1 ? `` : `s`}`,
  Y9 = (e) => `${Math.round(e * 100) / 100}s`;
function Yde(e, t, n, r, i) {
  let a = `Right-click to change its ${r ? `button` : `key`}`;
  if (t === QW)
    return ce(n)
      ? {
          name: le.name,
          kind: `Always yours`,
          desc: le.desc,
          stats: [
            { k: `Aether`, v: `${le.mana}`, cost: `mana` },
            { k: `Recovery`, v: Y9(le.cd) },
            { k: `Distance`, v: J9(le.range) },
            { k: `Held`, v: J9(le.range * le.stretch) },
          ],
          note: `Tap to step toward your aim; hold to stretch it further. ${a}`,
        }
      : {
          name: se.name,
          kind: `Always yours`,
          desc: se.desc,
          stats: [
            { k: `Stamina`, v: `${se.stamina}`, cost: `stamina` },
            { k: `Recovery`, v: Y9(se.cd) },
            { k: `Distance`, v: J9(se.range) },
          ],
          note: a,
        };
  let o = e.id ? Se(e.id) : void 0;
  if (!o)
    return {
      name: `Empty slot ${t + 1}`,
      kind: `Unbound`,
      desc: i
        ? `Drag a spell here, or place one from the Spellbook.`
        : `Place a spell here from the Spellbook.`,
      stats: [],
      note: a,
    };
  let s = ud(o, n),
    c = o.needs ? x[o.needs] : S[xe[o.id] ?? n]?.name,
    l = [];
  return (
    s.dmg > 0 &&
      l.push({
        k: `Damage`,
        v: `${Math.round(s.dmg)}${s.ticks && s.ticks > 1 ? ` × ${s.ticks}` : ``}`,
      }),
    s.heal && l.push({ k: `Heals`, v: `${Math.round(s.heal * 100)}% of it` }),
    s.mana > 0
      ? l.push({ k: `Aether`, v: `${s.mana}`, cost: `mana` })
      : s.stamina &&
        l.push({
          k: `Stamina`,
          v: `${Math.round(s.stamina)}`,
          cost: `stamina`,
        }),
    l.push({ k: `Recovery`, v: Y9(s.cd) }),
    s.range > 0
      ? l.push({ k: `Range`, v: J9(s.range) })
      : s.radius && l.push({ k: `Radius`, v: J9(s.radius) }),
    {
      name: o.name,
      kind: [Jde[o.kind] ?? o.kind, c].filter(Boolean).join(` · `),
      desc: o.desc,
      stats: l,
      note:
        e.unarmed && o.needs
          ? `Needs ${x[o.needs]} in hand.`
          : i
            ? `Drag to move it, off the bar to clear it. ${a}`
            : a,
    }
  );
}
var X9 = () => yl({ muted: !_l().muted });
