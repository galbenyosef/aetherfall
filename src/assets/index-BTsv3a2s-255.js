// index-BTsv3a2s 255 — worn
// Lines 163510-163571 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function b7({ tip: e, level: t, school: n, worn: r, known: i }) {
  let a = (0, v.useRef)(null),
    [o, s] = (0, v.useState)({ left: e.x + 8, top: e.y });
  return (
    (0, v.useEffect)(() => {
      let t = a.current;
      if (!t) return;
      let n = t.offsetWidth,
        r = t.offsetHeight,
        i = e.x + 8;
      i + n > innerWidth - 8 && (i = Math.max(8, e.x - 60 - n - 8));
      let o = Math.max(8, Math.min(e.y, innerHeight - r - 8));
      s({ left: i, top: o });
    }, [e]),
    (0, Q.jsx)(`div`, {
      ref: a,
      className: `tip-float`,
      style: o,
      children: (0, Q.jsx)(v7, {
        item: e.item,
        level: t,
        school: n,
        worn: r,
        compare: e.compare,
        known: i,
      }),
    })
  );
}
function x7(e) {
  let t = e.bag.map((e) => ({ doc: e, item: t7(e) })),
    n = {};
  for (let t of e.worn) t.slot && (n[t.slot] = { doc: t, item: t7(t) });
  return {
    bag: t,
    worn: n,
    wornItems: Object.fromEntries(
      Object.entries(n).map(([e, t]) => [e, t.item]),
    ),
  };
}
function zle({ school: e, hero: t, worn: n }) {
  let r = (0, v.useMemo)(
    () => ({
      hat: $a(n.hat),
      robe: $a(n.robe),
      main: $a(n.mainhand),
      off: $a(n.offhand),
    }),
    [n.hat, n.robe, n.mainhand, n.offhand],
  );
  return (0, Q.jsx)(`div`, {
    className: `worn-hero`,
    children: (0, Q.jsx)(fq, {
      school: e,
      hero: t ?? `m`,
      size: 6,
      walking: !0,
      look: r,
    }),
  });
}
