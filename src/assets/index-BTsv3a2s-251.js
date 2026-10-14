// index-BTsv3a2s 251 — children
// Lines 162161-162493 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function ale({ hud: e }) {
  let t = e.stamina;
  return (0, Q.jsxs)(`div`, {
    className: `dock-lines`,
    children: [
      t &&
        (0, Q.jsxs)(`div`, {
          className: `dock-stamina${t.v >= t.max ? ` full` : ``}${t.winded ? ` winded` : ``}`,
          role: `meter`,
          "aria-label": t.winded ? `Stamina, winded` : `Stamina`,
          "aria-valuemin": 0,
          "aria-valuemax": Math.max(1, Math.round(t.max)),
          "aria-valuenow": Math.ceil(Math.max(0, Math.min(t.max, t.v))),
          children: [
            (0, Q.jsx)(`span`, {
              className: `dock-track`,
              children: (0, Q.jsx)(`i`, { style: { width: k5(t.v, t.max) } }),
            }),
            t.winded &&
              (0, Q.jsx)(`span`, {
                className: `dock-tag`,
                "aria-hidden": `true`,
                children: `Winded`,
              }),
          ],
        }),
      (0, Q.jsxs)(`div`, {
        className: `dock-xp`,
        role: `meter`,
        "aria-label": `Experience, level ${e.level}`,
        "aria-valuemin": 0,
        "aria-valuemax": Math.max(1, e.xpNext),
        "aria-valuenow": e.xp,
        children: [
          (0, Q.jsx)(`span`, {
            className: `dock-track`,
            children: (0, Q.jsx)(`i`, { style: { width: k5(e.xp, e.xpNext) } }),
          }),
          (0, Q.jsxs)(`span`, {
            className: `dock-tag`,
            "aria-hidden": `true`,
            children: [
              `Lv `,
              e.level,
              ` · `,
              Math.floor((e.xp / Math.max(1, e.xpNext)) * 100),
              `%`,
            ],
          }),
        ],
      }),
    ],
  });
}
function ole({ info: e, x: t }) {
  return (0, Q.jsxs)(`div`, {
    className: `slot-card`,
    role: `tooltip`,
    id: `slot-card`,
    style: { "--x": `${t}px` },
    children: [
      (0, Q.jsxs)(`div`, {
        className: `sc-head`,
        children: [
          (0, Q.jsx)(`b`, { children: e.name }),
          e.key && (0, Q.jsx)(`kbd`, { children: e.key }),
        ],
      }),
      (0, Q.jsx)(`span`, { className: `sc-kind`, children: e.kind }),
      (0, Q.jsx)(`p`, { children: e.desc }),
      e.stats.length > 0 &&
        (0, Q.jsx)(`dl`, {
          children: e.stats.map((e) =>
            (0, Q.jsxs)(
              `div`,
              {
                className: e.cost ?? ``,
                children: [
                  (0, Q.jsx)(`dt`, { children: e.k }),
                  (0, Q.jsx)(`dd`, { children: e.v }),
                ],
              },
              e.k,
            ),
          ),
        }),
      e.note && (0, Q.jsx)(`small`, { children: e.note }),
    ],
  });
}
function sle({ items: e }) {
  return (0, Q.jsx)(`nav`, {
    className: `hud-menu`,
    "aria-label": `Menus`,
    children: e.map((e) =>
      (0, Q.jsxs)(
        `button`,
        {
          type: `button`,
          className: `hm-btn ${e.id}`,
          title: e.title,
          "aria-label": e.title,
          onMouseDown: (e) => e.preventDefault(),
          onClick: e.onClick,
          children: [
            (0, Q.jsx)(`svg`, {
              "aria-hidden": `true`,
              viewBox: `0 0 24 24`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `1.6`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              children: (0, Q.jsx)(`path`, { d: e.icon }),
            }),
            (0, Q.jsx)(`span`, { className: `hm-key`, children: e.hint }),
            e.badge &&
              (0, Q.jsx)(`b`, { className: `hm-badge`, children: e.badge }),
          ],
        },
        e.id,
      ),
    ),
  });
}
var j5 = {
  satchel: `M6 8 H18 L17 20 H7 Z M9 8 V6 a3 3 0 0 1 6 0 V8`,
  journal: `M5 4 H11 a1 1 0 0 1 1 1 V20 a2 2 0 0 0 -2 -2 H5 Z M19 4 H13 a1 1 0 0 0 -1 1 V20 a2 2 0 0 1 2 -2 H19 Z`,
  arts: `M12 3 L14 9 L20 9 L15 13 L17 19 L12 15 L7 19 L9 13 L4 9 L10 9 Z`,
  atlas: `M4 6 L9 4 L15 6 L20 4 V18 L15 20 L9 18 L4 20 Z M9 4 V18 M15 6 V20`,
  menu: `M5 7 H19 M5 12 H19 M5 17 H19`,
};
function cle({ tabs: e, current: t }) {
  return (0, Q.jsx)(`nav`, {
    className: `win-tabs`,
    "aria-label": `Windows`,
    children: e.map((e) =>
      (0, Q.jsxs)(
        `button`,
        {
          type: `button`,
          className: `wt-tab ${e.id}${e.id === t ? ` on` : ``}`,
          "aria-current": e.id === t ? `page` : void 0,
          title: e.title,
          onMouseDown: (e) => e.preventDefault(),
          onClick: e.onClick,
          children: [
            (0, Q.jsx)(`svg`, {
              "aria-hidden": `true`,
              viewBox: `0 0 24 24`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `1.6`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              children: (0, Q.jsx)(`path`, { d: e.icon }),
            }),
            (0, Q.jsx)(`span`, { children: e.label }),
            e.hint && (0, Q.jsx)(`kbd`, { children: e.hint }),
            e.badge &&
              (0, Q.jsx)(`b`, { className: `hm-badge`, children: e.badge }),
          ],
        },
        e.id,
      ),
    ),
  });
}
function lle({ game: e }) {
  let [t, n] = (0, v.useState)(null);
  if (
    ((0, v.useEffect)(() => {
      let t = () => n(e.current?.gfxStatus() ?? null);
      t();
      let r = window.setInterval(t, 500);
      return () => window.clearInterval(r);
    }, [e]),
    !t)
  )
    return null;
  let r =
      t.state === `on`
        ? `3D ${t.quality}${t.auto ? ` (auto)` : ``}${t.software ? ` · software` : ``}`
        : t.state === `gave-up`
          ? `3D off (too slow)`
          : t.state === `off`
            ? `3D off`
            : t.state === `lost`
              ? `3D lost`
              : t.state === `loading`
                ? `3D loading`
                : `2D`,
    i = Math.round(t.fps);
  return (0, Q.jsxs)(`div`, {
    className: `fps-meter ${i < 30 ? `slow` : i < 50 ? `fair` : ``}`,
    "aria-live": `off`,
    children: [(0, Q.jsx)(`b`, { children: i }), ` fps · `, r],
  });
}
function M5(e, t, n, r, i) {
  return {
    level: e,
    attrs: Qu(t, n),
    treeWard: ad(t, n).ward,
    spells: r,
    loadout: i,
  };
}
var ule = {
    power: 1,
    spellDmg: 0.8,
    spellCost: 0.4,
    vitality: 0.6,
    wisdom: 0.6,
    clarity: 0.6,
    crit: 0.6,
    haste: 0.6,
    swiftness: 0.6,
    ward: 0.6,
    leech: 0.6,
    hollowguard: 0.3,
    might: 1,
  },
  dle = 1e6,
  fle = {
    vitality: [`strength`, `lifeforce`],
    wisdom: [`mana`],
    clarity: [`mana`],
    crit: [`agility`],
    haste: [`agility`],
    swiftness: [`agility`],
    leech: [`lifeforce`],
  },
  ple = 0.04,
  mle = 0.25;
function hle(e, t) {
  let [n, r] = e.split(`:`);
  if (!(n in ya)) return 0;
  let i = ule[n];
  if (r) return t.loadout.includes(r) ? i : t.spells.includes(r) ? i * mle : 0;
  if (n === `might`) return t.loadout.some((e) => xa.includes(e)) ? i : 0;
  let a = fle[n];
  if (!a) return i;
  let o = Math.max(0, ...a.map((e) => t.attrs[e] ?? 0));
  return Math.min(1, i + ple * o);
}
function gle(e) {
  return (Array.isArray(e) ? e : Object.values(e)).filter(Boolean);
}
function _le(e) {
  return b.filter((t) => e.some((e) => e.base === t));
}
function N5(e, t) {
  let n = gle(e),
    r = Za(n),
    i = _le(n),
    a = 0;
  for (let e of t.loadout) {
    let t = e ? Se(e)?.needs : void 0;
    t && !i.includes(t) && (a += dle);
  }
  r.ward !== void 0 &&
    (r.ward = Math.min(r.ward, Math.max(0, (Sa.ward ?? 0.4) - t.treeWard)));
  let o = 0;
  for (let [e, n] of Object.entries(r)) {
    let r = hle(e, t);
    r && (o += (r * n) / ya[e.split(`:`)[0]].perPoint);
  }
  return o - a;
}
function P5(e, t) {
  return (
    Ea[Da[e.base].type].length > 0 &&
    !e.unique &&
    !e.hollowed &&
    pa(e.ilvl) <= t
  );
}
function F5(e) {
  return !!e.unique || e.hollowed;
}
function I5(e, t) {
  let n = Ea[Da[e.base].type];
  if (!n.length) return null;
  let r = n.find((e) => !t[e]) ?? n[0],
    i = [],
    a = (e) => t[e] && !i.includes(e) && i.push(e);
  (a(r), Da[e.base].twoHanded && !Oa(t.offhand?.base) && a(`offhand`));
  let o = t.mainhand;
  return (
    r === `offhand` &&
      o &&
      Da[o.base].twoHanded &&
      !Oa(e.base) &&
      a(`mainhand`),
    { slot: r, off: i }
  );
}
function vle(e, t) {
  return (I5(e, t)?.off ?? []).map((e) => t[e]);
}
function L5(e, t, n) {
  let r = I5(e, t);
  if (!r) return 0;
  let i = { ...t };
  for (let e of r.off) delete i[e];
  return ((i[r.slot] = e), N5(i, n) - N5(t, n));
}
var yle = 1e-6;
function R5(e, t, n) {
  return e.base === `spellbook`
    ? !n.spells.includes(e.spell ?? ``)
    : L5(e, t, n) > yle;
}
function ble(e, t, n) {
  return R5(e, t, n) && (e.base === `spellbook` || pa(e.ilvl) <= n.level);
}
function z5(e, t, n) {
  let r = new Set(e.map((e) => e.id)),
    i = e.length + wa.length,
    a = new Set();
  for (let o of [n, { ...n, level: 1 / 0 }]) {
    let { target: n } = Y5(e, t, i, o);
    for (let e of wa) {
      let t = n[e]?.id;
      t && r.has(t) && a.add(t);
    }
  }
  return a;
}
var B5 = `Make room for one more item in your satchel to swap your second ring.`,
  xle = `Make room for one more item in your satchel to trade your wand and focus for this staff.`,
  V5 = `Make room for one more item in your satchel to wear it.`;
