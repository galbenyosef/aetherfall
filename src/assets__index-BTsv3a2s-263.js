// assets__index-BTsv3a2s 263 — children
// Lines 166027-166360 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function aue({
  docs: e,
  attuned: t,
  dust: n,
  from: r,
  inPrologue: i,
  sinceCombat: a,
  minimap: o,
  onTravel: s,
  onClose: c,
}) {
  l5(c);
  let l = j7(250),
    u = O7(e),
    d = (e) => (e === Rl.id ? `hub` : u.find((t) => t.id === e).state),
    f = [Rl.id, ...Ll],
    p = f.find((e) => e !== r && !iu(g(e))) ?? f.find((e) => e !== r) ?? Rl.id,
    [m, h] = (0, v.useState)(p);
  function g(e) {
    return {
      from: r,
      to: e,
      toState: d(e),
      attuned: t,
      dust: n,
      inPrologue: i,
      indoors: !1,
      sinceCombat: a,
    };
  }
  let _ = (0, v.useRef)(null);
  (0, v.useEffect)(() => {
    let e = _.current;
    if (!e || !o) return;
    let n = e.getContext(`2d`);
    ((n.imageSmoothingEnabled = !1),
      n.drawImage(o, 0, 0, 448, 448),
      (n.fillStyle = `rgba(10,6,24,0.28)`),
      n.fillRect(0, 0, 448, 448));
    let i = 448 / Or,
      a = (e) =>
        e === Rl.id
          ? { x: Rl.x * i, y: (Rl.y - 6) * i }
          : { x: (Il[e].x + 0.5) * i, y: (Il[e].y + 0.5) * i };
    (n.setLineDash([3, 4]), (n.lineWidth = 1));
    for (let e of Ll)
      ((n.strokeStyle =
        d(e) === `hollowed` ? `rgba(224,72,78,0.6)` : `rgba(126,249,255,0.3)`),
        n.beginPath(),
        n.moveTo(a(Rl.id).x, a(Rl.id).y),
        n.lineTo(a(e).x, a(e).y),
        n.stroke());
    (r &&
      m !== r &&
      (n.setLineDash([6, 4]),
      (n.lineWidth = 3),
      (n.strokeStyle = `#7ef9ff`),
      n.beginPath(),
      n.moveTo(a(r).x, a(r).y),
      n.lineTo(a(m).x, a(m).y),
      n.stroke()),
      n.setLineDash([]));
    let s = Math.floor(l / 250),
      c = (e, t, r) =>
        n.drawImage(e, Math.round(t - 16), Math.round(r - 26), 32, 32);
    c(Gz(), a(Rl.id).x, a(Rl.id).y + 6);
    for (let e of Ll) {
      let n = d(e);
      c(
        Wz(t.includes(e) || n !== `quiet` ? n : `unattuned`, s),
        a(e).x,
        a(e).y,
      );
    }
    ((n.strokeStyle = `#ffd166`),
      (n.lineWidth = 2),
      n.strokeRect(Math.round(a(m).x - 20), Math.round(a(m).y - 30), 40, 40),
      r &&
        ((n.fillStyle = `#fff36b`),
        n.beginPath(),
        n.arc(a(r).x, a(r).y + 12, 4, 0, Math.PI * 2),
        n.fill()));
  });
  let y = (e) => {
      if (e === r)
        return (0, Q.jsx)(`span`, {
          className: `yl`,
          children: `You are here`,
        });
      if (e === Rl.id)
        return (0, Q.jsx)(`span`, { className: `cy`, children: `Free` });
      let n = d(e);
      if (!t.includes(e))
        return (0, Q.jsx)(`span`, {
          className: `dim`,
          children: `Not attuned`,
        });
      if (n === `hollowed` || n === `reclaim`)
        return (0, Q.jsx)(`span`, {
          className: `red`,
          children: `Hollowed · no road`,
        });
      if (n === `singing`)
        return (0, Q.jsx)(`span`, {
          className: `cy`,
          children: `Singing · free`,
        });
      let i = r ? ru(r, e, n) : null;
      return (0, Q.jsxs)(`span`, {
        className: n === `rite` ? `or` : ``,
        children: [n === `rite` ? `Rite open · ` : ``, i ?? `—`, ` dust`],
      });
    },
    b = iu(g(m)),
    x = r && !b ? ru(r, m, d(m)) : null,
    S = (e) => (e === Rl.id ? `The Aether Crystal` : Il[e].name);
  return (0, Q.jsxs)(`div`, {
    className: `road-panel panel`,
    onMouseDown: (e) => e.stopPropagation(),
    children: [
      (0, Q.jsxs)(`div`, {
        className: `rp-head`,
        children: [
          (0, Q.jsx)(`span`, { className: `t`, children: `The Chorus Road` }),
          (0, Q.jsx)(`span`, {
            className: `sub`,
            children: `Sing across to any altar you're attuned to`,
          }),
          (0, Q.jsxs)(`span`, {
            className: `pouch`,
            children: [
              (0, Q.jsx)(k7, { c: OY(`dust`), scale: 1, className: `inline` }),
              ` `,
              n,
              ` Aether Dust`,
            ],
          }),
          (0, Q.jsx)(`button`, {
            className: `link-btn`,
            onClick: c,
            children: `✕`,
          }),
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `rp-body`,
        children: [
          (0, Q.jsx)(`canvas`, {
            ref: _,
            width: 448,
            height: 448,
            className: `rp-map pixel`,
          }),
          (0, Q.jsxs)(`div`, {
            className: `rp-list`,
            children: [
              f.map((e) =>
                (0, Q.jsxs)(
                  `button`,
                  {
                    className: `rp-row ${e === m ? `sel` : ``} ${e === r ? `here` : ``}`,
                    onClick: () => h(e),
                    children: [
                      (0, Q.jsx)(k7, {
                        c:
                          e === Rl.id
                            ? Gz()
                            : Wz(
                                t.includes(e) || d(e) !== `quiet`
                                  ? d(e)
                                  : `unattuned`,
                                1,
                              ),
                        scale: 1.5,
                      }),
                      (0, Q.jsxs)(`div`, {
                        children: [
                          (0, Q.jsx)(`b`, { children: S(e) }),
                          (0, Q.jsx)(`small`, {
                            children:
                              e === Rl.id
                                ? `Marizon · home`
                                : `Lv ${Il[e].level} · ${iue(e)}`,
                          }),
                        ],
                      }),
                      y(e),
                    ],
                  },
                  e,
                ),
              ),
              (0, Q.jsxs)(`div`, {
                className: `rp-go`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    children: [
                      (0, Q.jsxs)(`b`, {
                        children: [r ? S(r) : `Nowhere`, ` → `, S(m)],
                      }),
                      (0, Q.jsx)(`small`, {
                        children:
                          b ??
                          `3 s channel · moving or taking damage breaks it`,
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`button`, {
                    className: `px-btn primary`,
                    disabled: !!b,
                    onClick: () => s(m),
                    children: [
                      (0, Q.jsx)(k7, {
                        c: OY(`dust`),
                        scale: 1,
                        className: `inline`,
                      }),
                      ` Sing across`,
                      x === null ? `` : x ? ` · ${x}` : ` · free`,
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function oue({ rite: e }) {
  let t = Math.floor(Date.now() / 250),
    n =
      Hl[
        e.resonance >= Hl.radiant.min
          ? `radiant`
          : e.resonance >= Hl.steady.min
            ? `steady`
            : `flickering`
      ],
    r = e.resonance < Hl.steady.min;
  return (0, Q.jsxs)(`div`, {
    className: `rite-hud panel`,
    children: [
      (0, Q.jsxs)(`div`, {
        className: `rh-title`,
        children: [
          (0, Q.jsx)(k7, {
            c: tie(r ? `low` : `full`),
            scale: 1.5,
            className: `inline`,
          }),
          ` `,
          e.reclaim ? `Reclaiming` : `The Rite`,
          ` · `,
          e.name,
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `rh-pips`,
        children: [
          Array.from({ length: e.waves }, (n, r) =>
            (0, Q.jsx)(
              k7,
              {
                c: nie(
                  r === e.waves - 1
                    ? `final`
                    : r < e.wave
                      ? `done`
                      : r === e.wave
                        ? `now`
                        : `todo`,
                  t,
                ),
                scale: 2,
                className: r === e.wave ? `now` : ``,
              },
              r,
            ),
          ),
          (0, Q.jsxs)(`span`, {
            children: [
              e.wave >= e.waves - 1
                ? `Final wave`
                : `Wave ${e.wave + 1} of ${e.waves}`,
              e.breather
                ? ` · next in ${e.timer}s`
                : e.wave < e.waves - 1
                  ? ` · ${e.timer}s`
                  : ``,
            ],
          }),
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `rh-res`,
        children: [
          (0, Q.jsxs)(`div`, {
            className: `rh-label`,
            children: [
              (0, Q.jsx)(`span`, { children: `Resonance` }),
              (0, Q.jsxs)(`b`, {
                style: { color: n.color },
                children: [Math.round(e.resonance), `% · `, n.name],
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `rh-bar`,
            children: [
              (0, Q.jsx)(`i`, {
                style: { width: `${Math.max(0, Math.min(100, e.resonance))}%` },
                className: r ? `low` : ``,
              }),
              (0, Q.jsx)(`em`, { style: { left: `${Hl.steady.min}%` } }),
              (0, Q.jsx)(`em`, { style: { left: `${Hl.radiant.min}%` } }),
            ],
          }),
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `rh-who`,
        children: [
          e.holding,
          ` mage`,
          e.holding === 1 ? `` : `s`,
          ` holding the rite`,
          e.left ? ` · ${e.left} of the Hollow's left` : ``,
        ],
      }),
    ],
  });
}
