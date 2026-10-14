// index-BTsv3a2s 259 — children
// Lines 165038-165349 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function C7({
  icon: e,
  label: t,
  title: n,
  badge: r,
  className: i,
  onClick: a,
}) {
  return (0, Q.jsxs)(`button`, {
    type: `button`,
    className: `hud-btn ${i ?? ``}`,
    title: n,
    "aria-label": n,
    onMouseDown: (e) => e.preventDefault(),
    onClick: a,
    children: [
      (0, Q.jsx)(`img`, { className: `pixel`, alt: ``, src: r7(e) }),
      (0, Q.jsx)(`span`, { children: t }),
      r && (0, Q.jsx)(`b`, { className: `hud-badge`, children: r }),
    ],
  });
}
function Gle({ count: e, max: t, onClick: n }) {
  a5();
  let r = J8(),
    i = r.device === `pad` ? pX(`DOWN`, r.family) : Bi(oG(`satchel`));
  return (0, Q.jsx)(C7, {
    className: `satchel-btn`,
    icon: zY(`runed`),
    label: `${i ? `[${i}] ` : ``}${e}/${t}`,
    title: `Satchel${i ? ` [${i}]` : ``}: ${e} of ${t}`,
    onClick: n,
  });
}
var Kle = `.minimap-panel, .hud .panel, .hud .action-bar, .hud-menu, .hud .help, .skill-point-btn, .pvp-stack > *, .zone-pill, .touch-menu, .touch-actions > *`,
  qle = 3600,
  Jle = 2e3;
function Yle({ toasts: e, onDone: t }) {
  let n = (0, v.useRef)(null),
    r = (0, v.useRef)(new Map());
  return (
    (0, v.useEffect)(() => {
      let e = r.current;
      return () => {
        for (let t of e.values()) window.clearTimeout(t);
        e.clear();
      };
    }, []),
    (0, v.useLayoutEffect)(() => {
      let i = n.current,
        a = [...(i?.children ?? [])],
        o = e.map((e) => e.id);
      for (let [e, t] of r.current)
        o.includes(e) || (window.clearTimeout(t), r.current.delete(e));
      if (!i) return;
      let s = OQ(
          document.querySelector(`.game-screen > .hud`),
          window.innerWidth,
        ),
        c = { left: 0, top: 0 },
        l = DQ(document.querySelectorAll(Kle), c, s),
        u = () => {
          let [e] = DQ([i], c, s);
          return (
            !e ||
            (e.y >= 0 &&
              e.y + e.h <= window.innerHeight &&
              !l.some((t) => CQ(e, t)))
          );
        },
        d = GG && window.matchMedia(`(max-height: 560px)`).matches ? 3 : 5;
      a.forEach(
        (e, t) => (e.style.display = r.current.has(o[t]) ? `` : `none`),
      );
      let f = r.current.size,
        p = [];
      for (let e = a.length - 1; e >= 0; e--)
        if (!r.current.has(o[e])) {
          if (f >= d) break;
          if (((a[e].style.display = ``), f > 0 && !u())) {
            a[e].style.display = `none`;
            break;
          }
          (f++, p.push(o[e]));
        }
      let m = a.length > f;
      for (let e of p)
        r.current.set(
          e,
          window.setTimeout(() => (r.current.delete(e), t(e)), m ? Jle : qle),
        );
    }, [e, t]),
    (0, Q.jsx)(`div`, {
      className: `items-ui toasts`,
      "aria-live": `polite`,
      ref: n,
      children: e.map((e) =>
        (0, Q.jsxs)(
          `div`,
          {
            className: `toast`,
            style: { "--c": e.color ?? `#efe7ff` },
            children: [
              e.item &&
                (0, Q.jsx)(`img`, {
                  className: `pixel ti`,
                  alt: ``,
                  src: r7(FY(e.item)),
                }),
              (0, Q.jsx)(`span`, {
                style: { color: e.item ? e.color : void 0 },
                children: e.text,
              }),
            ],
          },
          e.id,
        ),
      ),
    })
  );
}
function Xle(e, t) {
  let n = e.steps[t.step],
    r = n ? lQ(n) : 1;
  return n && r > 1 ? `${dQ(n, t.progress)}/${r}` : ``;
}
function Zle(e, t) {
  let n = [],
    r = t.status === `done` ? e.steps.length : t.step + 1;
  for (let i = 0; i < r && i < e.steps.length; i++) {
    let r = e.steps[i];
    (r.when === void 0 || r.when === t.choice) &&
      n.push({ s: r, done: t.status === `done` || i < t.step, i });
  }
  return n;
}
function w7(e) {
  let t = e.reward,
    n = [`${t.xp} XP`, `${t.crowns} Crowns`];
  return (
    t.mats?.dust && n.push(`${t.mats.dust} Aether Dust`),
    t.mats?.shards &&
      n.push(`${t.mats.shards} Aether Shard${t.mats.shards > 1 ? `s` : ``}`),
    t.mats?.motes &&
      n.push(`${t.mats.motes} Chorus Mote${t.mats.motes > 1 ? `s` : ``}`),
    t.mats?.chips &&
      n.push(`${t.mats.chips} Ward-stone Chip${t.mats.chips > 1 ? `s` : ``}`),
    t.item &&
      n.push(
        `a ${_a[t.item.rarity].name} ${t.item.base === `lantern` ? `lantern` : `item`}`,
      ),
    n.join(` · `)
  );
}
function T7({ ch: e, next: t, compact: n }) {
  let [r, i] = e.band,
    a = r === i ? `${r}` : `${r}–${i}`,
    o =
      e.status === `done`
        ? `complete`
        : n
          ? `${e.at}/${e.total}`
          : `${e.at} of ${e.total}`;
  return (0, Q.jsxs)(`div`, {
    className: `chapter ${n ? `compact` : ``}`,
    title: `${e.title}: main quest ${e.at} of ${e.total}, for levels ${r} to ${i}`,
    children: [
      (0, Q.jsxs)(`div`, {
        className: `ch-top`,
        children: [n ? e.short : e.title, ` · `, o],
      }),
      (0, Q.jsxs)(`div`, {
        className: `ch-row`,
        children: [
          (0, Q.jsx)(`span`, {
            className: `ch-pips`,
            role: `progressbar`,
            "aria-label": `${e.short}: ${e.done} of ${e.total} done`,
            "aria-valuemin": 0,
            "aria-valuemax": e.total,
            "aria-valuenow": e.done,
            children: e.pips.map((e, t) =>
              (0, Q.jsx)(`i`, { className: e }, t),
            ),
          }),
          (0, Q.jsx)(`span`, {
            className: `ch-band`,
            children: n ? `Lv ${a}` : `Levels ${a}`,
          }),
        ],
      }),
      !n && t && (0, Q.jsx)(`small`, { className: `ch-next`, children: t }),
    ],
  });
}
function Qle({ open: e, waiting: t, onClick: n }) {
  a5();
  let r = J8(),
    i = r.device === `pad` ? pX(`UP`, r.family) : Bi(oG(`journal`)),
    a = `Journal${i ? ` [${i}]` : ``}: ${e} open quest${e === 1 ? `` : `s`}${t ? `; the story's next part is waiting` : ``}`;
  return (0, Q.jsx)(C7, {
    className: `journal-btn`,
    icon: VY(),
    label: `${i ? `[${i}] ` : ``}${e}`,
    title: a,
    badge: t ? `!` : null,
    onClick: n,
  });
}
function $le({ hud: e, onTrack: t, onOpen: n }) {
  a5();
  let { textSize: r } = x5(),
    i = J8(),
    a = (0, v.useRef)(null),
    o = e.chapter,
    s = vQ(e.next, o),
    c = Math.min(Dq(window.innerWidth, window.innerHeight, GG), ol(r)),
    l = `${window.innerWidth}x${window.innerHeight} ${r} ${s ?? ``} ${e.entries.map((e) => `${e.id}:${e.text}:${e.count ?? ``}:${+!!e.tracked}`).join(`|`)}`,
    [u, d] = (0, v.useState)({ says: ``, shed: 0 }),
    f = bQ(Math.max(1, c - +!!s), !!s),
    p = Math.min(u.says === l ? u.shed : 0, f.length - 1),
    m = f[p];
  if (
    ((0, v.useLayoutEffect)(() => {
      let e = a.current;
      e &&
        getComputedStyle(e).overflowY === `hidden` &&
        e.scrollHeight > e.clientHeight + 1 &&
        p + 1 < f.length &&
        d({ says: l, shed: p + 1 });
    }),
    !yQ(e.entries.length, e.next, o))
  )
    return null;
  let h = xQ(e.entries, m.n);
  return (0, Q.jsxs)(`div`, {
    ref: a,
    className: `quest-tracker panel ${m.row ? `` : `no-ch-row`}`,
    children: [
      m.head &&
        (0, Q.jsxs)(`div`, {
          className: `qt-head`,
          children: [
            o.total > 0
              ? (0, Q.jsx)(T7, { ch: o, compact: !0 })
              : (0, Q.jsx)(`span`, { children: `Quests` }),
            (0, Q.jsx)(`button`, {
              className: `link-btn`,
              onMouseDown: (e) => e.preventDefault(),
              onClick: n,
              children:
                i.device === `pad`
                  ? `Journal [${pX(`UP`, i.family)}]`
                  : HG(`Journal [J]`),
            }),
          ],
        }),
      s &&
        m.next &&
        (0, Q.jsxs)(`div`, {
          className: `qt-next`,
          children: [(0, Q.jsx)(`b`, { children: `◆` }), ` `, s],
        }),
      h.map((e) =>
        (0, Q.jsxs)(
          `button`,
          {
            className: `qt-entry ${e.tracked ? `tracked` : ``}`,
            style: { "--q": h$[e.kind] },
            onMouseDown: (e) => e.preventDefault(),
            onClick: () => t(e.id),
            title: `Track this quest`,
            children: [
              m.title &&
                (0, Q.jsxs)(`span`, {
                  className: `qt-title`,
                  children: [e.tracked ? `◆ ` : ``, e.title],
                }),
              (0, Q.jsxs)(`span`, {
                className: `qt-text ${m.lines ? `clamped` : ``}`,
                style: m.lines ? { "--qt-lines": m.lines } : void 0,
                children: [
                  !m.title && e.tracked
                    ? (0, Q.jsx)(`b`, { children: `◆ ` })
                    : null,
                  e.text,
                  e.total
                    ? (0, Q.jsxs)(`b`, {
                        children: [` `, e.count ?? 0, `/`, e.total],
                      })
                    : null,
                  e.waiting
                    ? (0, Q.jsxs)(`em`, { children: [` (`, e.waiting, `)`] })
                    : null,
                ],
              }),
            ],
          },
          e.id,
        ),
      ),
      m.more &&
        e.entries.length > h.length &&
        (0, Q.jsxs)(`button`, {
          className: `qt-more`,
          onMouseDown: (e) => e.preventDefault(),
          onClick: n,
          children: [`+`, e.entries.length - h.length, ` more in your Journal`],
        }),
    ],
  });
}
