// assets__index-BTsv3a2s 290 — school
// Lines 175753-175921 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function $de() {
  let [e, t] = (0, v.useState)(Ol),
    [n, r] = (0, v.useState)(`title`),
    [i, a] = (0, v.useState)(null),
    [o, s] = (0, v.useState)(null),
    [c, l] = (0, v.useState)(!1),
    [u, d] = (0, v.useState)(null),
    [f, p] = (0, v.useState)(!1),
    [m, h] = (0, v.useState)(!1),
    g = WW.useMe(e),
    _ = WW.useRoster(e),
    y = WW.useActions(e),
    b = _ ? Pl(_.mages, u, jl()) : null,
    x = (e) =>
      s(WW.userError(e) ?? (e instanceof Error ? e.message : String(e))),
    S = async (e) => {
      if (!f) {
        (p(!0), s(null));
        try {
          let t = await e();
          (a(t), r(`game`));
        } catch (e) {
          x(e);
        } finally {
          p(!1);
        }
      }
    },
    C = (n, r, i = !1) =>
      S(async () => {
        let a = e;
        return (
          i && ((a = kl()), t(a)),
          { playerId: await y.join(a, n, r), name: n, school: r }
        );
      }),
    w = (e) =>
      S(async () => ({
        playerId: await y.mages.play(e.id),
        name: e.name,
        school: e.school,
        hero: e.hero,
      })),
    T = (e, t, n) =>
      S(async () => {
        let i = await y.mages.forge(e, t, n);
        d(i.id);
        try {
          return {
            playerId: await y.mages.play(i.id),
            name: i.name,
            school: i.school,
            hero: i.hero,
          };
        } catch (e) {
          throw (h(!0), r(`title`), e);
        }
      }),
    E = async (e) => {
      s(null);
      try {
        return (await y.mages.remove(e.id), u === e.id && d(null), !0);
      } catch (e) {
        return (x(e), !1);
      }
    },
    D = () => {
      (a(null), s(null), h(!0), r(`title`));
    },
    O = () => {
      (a(null), s(null), h(!1), r(`title`));
    };
  return n === `game` && i
    ? (0, Q.jsx)(Vde, { token: e, ...i, onExit: _ ? D : void 0, onQuit: O })
    : n === `create`
      ? (0, Q.jsx)(hq, {
          defaultName: ``,
          defaultSchool: _
            ? (k.find((e) => !_.mages.some((t) => t.school === e)) ?? `pyro`)
            : `pyro`,
          heroes: !!_,
          error: o,
          onBack: () => {
            (s(null), _ && h(!0), r(`title`));
          },
          onEnter: (e, t, n) => (_ ? T(e, t, n) : C(e, t, c)),
        })
      : (0, Q.jsx)(rK, {
          loading: _ === void 0 || (_ === null && g === void 0),
          existing:
            !_ && g ? { name: g.name, level: g.level, school: g.school } : null,
          onContinue: () => g && C(g.name, g.school),
          onNew: () => {
            (q.init(), l(!_ && !!g), r(`create`));
          },
          error: o,
          school: b?.school,
          startAwake: m,
          menu:
            _ === null
              ? void 0
              : _
                ? (0, Q.jsx)(vq, {
                    roster: _,
                    selected: b,
                    busy: f,
                    onSelect: (e) => {
                      (d(e), s(null));
                    },
                    onPlay: w,
                    onForge: () => {
                      (q.init(), s(null), r(`create`));
                    },
                    onRetry: () => {
                      (s(null), y.mages.refresh());
                    },
                    onClearError: () => s(null),
                    onDelete: E,
                  })
                : null,
        });
}
var efe = {
    target: { t: `scenery`, key: `model:crystal-altar` },
    fw: 59,
    fh: 63,
    cols: 1,
    rows: 1,
    ax: 26,
    ay: 43,
    anims: { loop: { frames: [0], fps: 8 } },
  },
  tfe = {
    target: { t: `scenery`, key: `model:hollowed-crystal` },
    fw: 82,
    fh: 92,
    cols: 1,
    rows: 1,
    ax: 38,
    ay: 65,
    anims: { loop: { frames: [0], fps: 8 } },
  },
  nfe = `/assets/scenery.model_crystal-altar-DbFiH9cg.png`,
  Z9 = `/assets/scenery.model_hollowed-crystal-7MXhcKhh.png`,
  rfe = Object.assign({
    "./scenery.model_crystal-altar.json": efe,
    "./scenery.model_hollowed-crystal.json": tfe,
  }),
  ife = Object.assign({
    "./scenery.model_crystal-altar.png": nfe,
    "./scenery.model_hollowed-crystal.png": Z9,
  }),
  afe = Object.entries(rfe).flatMap(([e, t]) => {
    let n = ife[e.replace(/\.json$/, `.png`)];
    return n ? [{ id: e.slice(2, -5), meta: t, url: n }] : [];
  }),
  Q9 = (0, y.createRoot)(document.getElementById(`root`)),
  { Root: $9 } = WW;
Promise.all([Dre(), aM(), mK(), zm(), cR(), lj(), Zp(afe)]).then(() => {
  $9
    ? Q9.render(
        (0, Q.jsx)(v.StrictMode, {
          children: (0, Q.jsxs)($9, {
            children: [(0, Q.jsx)($de, {}), (0, Q.jsx)(_ue, {})],
          }),
        }),
      )
    : Q9.render(WW.setup);
});
