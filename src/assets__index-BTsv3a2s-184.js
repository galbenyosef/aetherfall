// assets__index-BTsv3a2s 184 — classname
// Lines 106506-106792 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var RG = new Map([
  [`E`, `interact`],
  [`R`, `road`],
  [`G`, `hearth`],
  [`P`, `stance`],
  [`Y`, `homestead`],
  [`B`, `build`],
  [`O`, `provisions`],
  [`T`, `market`],
  [`I`, `satchel`],
  [`J`, `journal`],
  [`K`, `spellbook`],
  [`L`, `settings`],
  [`H`, `help`],
  [`M`, `mute`],
  [`Shift + Enter`, `chat`],
  [`W`, `up`],
  [`S`, `down`],
  [`A`, `left`],
  [`D`, `right`],
  [`Shift`, `sprint`],
  [`Space`, QW],
  ...Array.from({ length: 8 }, (e, t) => [String(t + 1), t]),
]);
function zG(e) {
  return typeof e == `string`
    ? Bi(oG(e))
    : dG[e]
      ? Bi(dG[e])
      : e === QW && TG()
        ? `Shift`
        : ``;
}
var BG = new Map(),
  VG = () => BG.clear();
(xl(VG), _G(VG));
function HG(e) {
  let t = BG.get(e);
  if (t !== void 0) return t;
  let n = e.replace(/(\s*)\[([^\]]*)\]/g, (e, t, n) => {
    let r = n
      .split(` / `)
      .map((e) => {
        let t = RG.get(e);
        return t === void 0 ? e : zG(t);
      })
      .filter(Boolean);
    return r.length ? `${t}[${r.join(` / `)}]` : ``;
  });
  return (BG.size > 500 && BG.clear(), BG.set(e, n), n);
}
function UG() {
  let e = [`up`, `left`, `down`, `right`],
    t = e.map((e) => Bi(aG(e)[0])),
    n = e.map((e) => aG(e)[1]),
    r = n.every(
      (e, t) => e === [`arrowup`, `arrowleft`, `arrowdown`, `arrowright`][t],
    ),
    i = t.every((e) => e.length === 1) ? t.join(``) : t.join(` `);
  return r
    ? `${i} / Arrows`
    : n.every(Boolean)
      ? `${i} / ${n.map(Bi).join(` `)}`
      : i;
}
function WG() {
  let e = dG.slice(0, 8);
  return e.every((e, t) => e === String(t + 1))
    ? `1-8`
    : e.filter(Boolean).map(Bi).join(` `);
}
var GG =
  typeof window < `u` &&
  typeof window.matchMedia == `function` &&
  window.matchMedia(`(hover: none) and (pointer: coarse)`).matches;
GG && typeof document < `u` && document.documentElement.classList.add(`touch`);
var KG = {
  "Left Click / 1": `Tap / 1st spell`,
  "Right Click / 2": `2nd spell`,
  3: `3rd spell`,
  Space: `Blink`,
  K: `Skills`,
};
function qG(e) {
  return GG
    ? e.replace(/\s*\[([^\]]+)\]\s*$/, (e, t) => (KG[t] ? `  [${KG[t]}]` : ``))
    : e;
}
function JG(e) {
  return GG ? e.replace(/^\[[A-Z]\]\s*/, ``) : HG(e);
}
function YG(e, t = !1) {
  let n = (typeof document < `u` && document.body) || window;
  (n.dispatchEvent(
    new KeyboardEvent(`keydown`, {
      key: e,
      shiftKey: t,
      bubbles: !0,
      cancelable: !0,
    }),
  ),
    n.dispatchEvent(
      new KeyboardEvent(`keyup`, {
        key: e,
        shiftKey: t,
        bubbles: !0,
        cancelable: !0,
      }),
    ));
}
function XG(e) {
  let t = oG(e);
  t && YG(Si(t), xi(t));
}
function ZG(e, t) {
  e.pointerType === `touch` &&
    t.addEventListener(`touchend`, QG, { once: !0, passive: !1 });
}
var QG = (e) => e.preventDefault(),
  $G = !1;
function eK() {
  if (!GG || $G) return;
  $G = !0;
  let e = document.documentElement,
    t = () => {
      screen.orientation?.lock?.(`landscape`).catch(() => {});
    };
  try {
    let n = (
      e.requestFullscreen?.bind(e) ?? e.webkitRequestFullscreen?.bind(e)
    )?.({ navigationUI: `hide` });
    n && typeof n.then == `function` ? n.then(t, () => {}) : t();
  } catch {}
}
var tK = `0.7.16`;
function nK({ school: e }) {
  let t = (0, v.useRef)(null),
    n = (0, v.useRef)(null);
  return (
    (0, v.useEffect)(() => {
      let e = new YW(t.current);
      return ((n.current = e), e.start(), () => e.dispose());
    }, []),
    (0, v.useEffect)(() => {
      n.current && (n.current.school = e);
    }, [e]),
    (0, Q.jsx)(`canvas`, { ref: t, className: `backdrop` })
  );
}
function rK({
  loading: e,
  existing: t,
  onContinue: n,
  onNew: r,
  error: i,
  menu: a,
  school: o,
  startAwake: s,
}) {
  let [c, l] = (0, v.useState)(!!s),
    u = a !== void 0;
  return (
    (0, v.useEffect)(
      () =>
        q.preload(
          `start_chime`,
          `title_theme`,
          `marizon_idle`,
          `marizon_fight`,
        ),
      [],
    ),
    (0, v.useEffect)(() => {
      s && q.playTrack(`title_theme`);
    }, []),
    (0, v.useEffect)(() => {
      if (c) return;
      let e = () => {
        (eK(),
          q.init(),
          q
            .play(`start_chime`)
            .then((e) =>
              q.playTrack(
                `title_theme`,
                e ? { at: e.start + e.duration, fadeIn: 0 } : {},
              ),
            ),
          l(!0));
      };
      return (
        window.addEventListener(`keydown`, e, { once: !0 }),
        window.addEventListener(`pointerup`, e, { once: !0 }),
        () => {
          (window.removeEventListener(`keydown`, e),
            window.removeEventListener(`pointerup`, e));
        }
      );
    }, [c]),
    (0, Q.jsxs)(`div`, {
      className: `screen title-screen${u ? ` with-roster` : ``}`,
      children: [
        (0, Q.jsx)(nK, { school: o ?? t?.school ?? `void` }),
        (0, Q.jsx)(`div`, { className: `letterbox top` }),
        (0, Q.jsx)(`div`, { className: `letterbox bottom` }),
        (0, Q.jsxs)(`div`, {
          className: `title-content`,
          children: [
            (0, Q.jsxs)(`div`, {
              className: `logo`,
              children: [
                (0, Q.jsx)(`span`, {
                  className: `logo-sub`,
                  children: `~ Chronicles of the Shattered Veil ~`,
                }),
                (0, Q.jsx)(`h1`, {
                  className: `logo-main`,
                  "data-text": `AETHERFALL`,
                  children: `AETHERFALL`,
                }),
              ],
            }),
            c
              ? (0, Q.jsxs)(`div`, {
                  className: `menu fade-in`,
                  children: [
                    e
                      ? (0, Q.jsx)(`div`, {
                          className: `menu-note`,
                          children: `Reaching the Veil…`,
                        })
                      : u
                        ? a
                        : t
                          ? (0, Q.jsxs)(Q.Fragment, {
                              children: [
                                (0, Q.jsxs)(`button`, {
                                  className: `px-btn primary`,
                                  onClick: () => {
                                    (q.sfx(`click`), n());
                                  },
                                  children: [
                                    `Continue as `,
                                    t.name,
                                    (0, Q.jsxs)(`small`, {
                                      children: [
                                        `Lv `,
                                        t.level,
                                        ` `,
                                        S[t.school]?.name,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Q.jsx)(`button`, {
                                  className: `px-btn`,
                                  onClick: () => {
                                    (q.sfx(`click`), r());
                                  },
                                  children: `Forge a new mage`,
                                }),
                              ],
                            })
                          : (0, Q.jsx)(`button`, {
                              className: `px-btn primary`,
                              onClick: () => {
                                (q.sfx(`click`), r());
                              },
                              children: `Begin your legend`,
                            }),
                    i && (0, Q.jsx)(`div`, { className: `error`, children: i }),
                  ],
                })
              : (0, Q.jsx)(`div`, {
                  className: `press-start blink`,
                  children: GG ? `TAP TO BEGIN` : `PRESS ANY KEY`,
                }),
          ],
        }),
        (0, Q.jsxs)(`div`, {
          className: `credits`,
          children: [`A multiplayer pixel-art saga · v`, tK],
        }),
      ],
    })
  );
}
