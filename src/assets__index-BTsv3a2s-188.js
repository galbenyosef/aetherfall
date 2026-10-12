// assets__index-BTsv3a2s 188 — children
// Lines 122800-123083 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function fq({
  school: e,
  hero: t = `m`,
  size: n = 4,
  walking: r = !0,
  look: i,
}) {
  let a = (0, v.useRef)(null);
  return (
    (0, v.useEffect)(() => {
      let o = a.current,
        s = o.getContext(`2d`);
      s.imageSmoothingEnabled = !1;
      let c = dh(e),
        l = AK(e, t, i),
        u = 0,
        d = performance.now(),
        f = (e) => {
          let t = Math.max(0, (e - d) / 1e3),
            i = r ? [0, 2, 1, 3][Math.floor(t / 2.2) % 4] : 0;
          if (
            (s.setTransform(1, 0, 0, 1, 0, 0),
            s.clearRect(0, 0, o.width, o.height),
            UK())
          )
            (s.setTransform(n, 0, 0, n, 0, 0),
              aq(s, l, 10, 27, {
                dir: i,
                moving: r,
                cast: !1,
                flash: !1,
                t,
                walk: !0,
                shadow: !1,
                menu: !0,
              }));
          else {
            let e = r ? 2 + (Math.floor(t * 7) % 4) : Math.floor(t * 2) % 2;
            s.drawImage(c.frames[i][e], 0, 0, 20 * n, 28 * n);
          }
          u = requestAnimationFrame(f);
        };
      return ((u = requestAnimationFrame(f)), () => cancelAnimationFrame(u));
    }, [e, t, n, r, i]),
    (0, Q.jsx)(`canvas`, {
      ref: a,
      width: 20 * n,
      height: 28 * n,
      className: `pixel`,
    })
  );
}
var pq = [
    [`m`, `Young man`],
    [`f`, `Young woman`],
  ],
  mq = (e, t) => (e === `mage` ? t : e);
function hq({
  defaultName: e,
  defaultSchool: t,
  heroes: n,
  error: r,
  onBack: i,
  onEnter: a,
}) {
  let [o, s] = (0, v.useState)(e),
    [c, l] = (0, v.useState)(t),
    [u, d] = (0, v.useState)(re(t) === `mage` ? t : `pyro`),
    [f, p] = (0, v.useState)(`m`),
    [m, h] = (0, v.useState)(!1),
    g = S[c],
    _ = re(c),
    y = o.trim().length >= 2,
    b = async () => {
      y && !m && (q.sfx(`chime`), h(!0), await a(o, c, f), h(!1));
    };
  return (0, Q.jsxs)(`div`, {
    className: `screen create-screen`,
    children: [
      (0, Q.jsx)(nK, { school: c }),
      (0, Q.jsxs)(`div`, {
        className: `create-panel fade-in`,
        children: [
          (0, Q.jsx)(`h2`, {
            className: `panel-title`,
            children: `Choose your Path`,
          }),
          (0, Q.jsx)(`div`, {
            className: `classes`,
            role: `radiogroup`,
            "aria-label": `Your class`,
            children: te.map((e) => {
              let t = mq(e, u);
              return (0, Q.jsxs)(
                `button`,
                {
                  role: `radio`,
                  "aria-checked": e === _,
                  className: `school-card ${e === _ ? `selected` : ``}`,
                  style: { "--accent": S[t].colors.glow },
                  onClick: () => {
                    (q.sfx(`click`), l(t));
                  },
                  children: [
                    (0, Q.jsx)(fq, {
                      school: t,
                      hero: f,
                      size: 4,
                      walking: e === _,
                    }),
                    (0, Q.jsx)(`span`, { children: ne[e].name }),
                  ],
                },
                e,
              );
            }),
          }),
          _ === `mage` &&
            (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(`h3`, {
                  className: `create-subtitle`,
                  children: `Choose your School`,
                }),
                (0, Q.jsx)(`div`, {
                  className: `schools`,
                  children: ee.map((e) =>
                    (0, Q.jsxs)(
                      `button`,
                      {
                        className: `school-card ${e === c ? `selected` : ``}`,
                        style: { "--accent": S[e].colors.glow },
                        onClick: () => {
                          (q.sfx(`click`), l(e), d(e));
                        },
                        children: [
                          (0, Q.jsx)(fq, {
                            school: e,
                            hero: f,
                            size: 4,
                            walking: e === c,
                          }),
                          (0, Q.jsx)(`span`, { children: S[e].name }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
          (0, Q.jsxs)(`div`, {
            className: `school-detail`,
            style: { "--accent": g.colors.glow },
            children: [
              (0, Q.jsx)(`div`, {
                className: `detail-head`,
                children: (0, Q.jsxs)(`div`, {
                  children: [
                    (0, Q.jsx)(`h3`, { children: g.name }),
                    (0, Q.jsxs)(`div`, {
                      className: `school-title`,
                      children: [g.title, ` · Seat: `, g.seat],
                    }),
                  ],
                }),
              }),
              (0, Q.jsxs)(`p`, {
                className: `lore`,
                children: [`“`, g.lore, `”`],
              }),
              _ !== `mage` &&
                _ !== `scout` &&
                (0, Q.jsxs)(`p`, {
                  className: `class-note`,
                  children: [
                    `Starts with `,
                    _ === `paladin` ? `a sword and a shield` : `a bow`,
                    ` in hand: `,
                    _ === `paladin` ? `Slash and Shield` : `Arrow`,
                    `, paid in stamina, are the weapon's own and go with whoever holds it, used in full only by its order. Its arts draw on `,
                    _ === `paladin` ? `Strength` : `Agility`,
                    `. Spellbooks found in the world teach it spells as they teach any mage.`,
                  ],
                }),
              _ === `scout` &&
                (0, Q.jsx)(`p`, {
                  className: `class-note`,
                  children: `Starts with a bow in hand and a dagger on the belt: Arrow and Stab, paid in stamina, go with whoever holds them. The dagger is the Scout's own; the bow is the Marksman's, so a Scout looses it at less than full strength. Twice the others' head start in Agility, which also grows the sprint bar: a Scout runs longest. Spellbooks found in the world teach it spells as they teach any mage.`,
                }),
              (0, Q.jsx)(`ul`, {
                className: `spell-list`,
                children: oe(c).map((e, t) =>
                  (0, Q.jsxs)(
                    `li`,
                    {
                      children: [
                        (0, Q.jsx)(`img`, {
                          src: Fh(e, c),
                          alt: ``,
                          className: `pixel`,
                        }),
                        (0, Q.jsxs)(`div`, {
                          children: [
                            (0, Q.jsxs)(`b`, {
                              children: [`[`, t + 1, `] `, e.name],
                            }),
                            (0, Q.jsx)(`span`, { children: e.desc }),
                          ],
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
            ],
          }),
          n &&
            (0, Q.jsx)(`div`, {
              className: `hero-pick`,
              role: `radiogroup`,
              "aria-label": `Your hero`,
              style: { "--accent": g.colors.glow },
              children: pq.map(([e, t]) =>
                (0, Q.jsx)(
                  `button`,
                  {
                    type: `button`,
                    role: `radio`,
                    "aria-checked": e === f,
                    className: `hero-option ${e === f ? `selected` : ``}`,
                    onClick: () => {
                      (q.sfx(`click`), p(e));
                    },
                    children: t,
                  },
                  e,
                ),
              ),
            }),
          (0, Q.jsxs)(`form`, {
            className: `name-row`,
            onSubmit: (e) => {
              (e.preventDefault(), b());
            },
            children: [
              (0, Q.jsx)(`input`, {
                autoFocus: !0,
                maxLength: 16,
                placeholder:
                  _ === `mage` ? `Your mage's name` : `Your hero's name`,
                value: o,
                onChange: (e) => s(e.target.value),
              }),
              (0, Q.jsx)(`button`, {
                type: `submit`,
                className: `px-btn primary`,
                disabled: !y || m,
                children: m ? `Opening the Veil…` : `Enter Aetherfall`,
              }),
            ],
          }),
          r && (0, Q.jsx)(`div`, { className: `error`, children: r }),
          (0, Q.jsx)(`button`, {
            className: `link-btn`,
            onClick: i,
            children: `← back`,
          }),
        ],
      }),
    ],
  });
}
var gq = (e) => S[e.school]?.name ?? e.school;
function _q(e) {
  let t = e?.parentElement;
  if (!e || !t) return;
  let n = e.getBoundingClientRect(),
    r = t.getBoundingClientRect();
  n.top < r.top
    ? (t.scrollTop -= r.top - n.top + 6)
    : n.bottom > r.bottom && (t.scrollTop += n.bottom - r.bottom + 6);
}
