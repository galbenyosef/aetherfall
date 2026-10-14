// assets__index-BTsv3a2s 13 — tile
// Lines 20410-20755 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var dr = {
  sowing: [120, 20],
  rimewater: [32, -128],
  mosslight: [-144, -28],
  cinderwell: [-62, 130],
  unremembered: [-172, 56],
  stormwatch: [164, -100],
  scorchglass: [100, 190],
  shoreglass: [-84, -180],
};
function fr(e, t) {
  return [
    [e - 1, t],
    [e, t],
    [e + 1, t],
    [e - 2, t - 1],
    [e + 2, t - 1],
    [e - 2, t + 2],
    [e + 2, t + 2],
  ];
}
var pr = {
  cisterns: [144, -14],
  barrowdeep: [-204, 28],
  rimewell: [-28, -174],
  emberdeep: [8, 170],
  folly: [-132, 188],
};
function mr(e, t) {
  return { x0: e - 3, y0: t - 3, x1: e + 3, y1: t + 3 };
}
var hr = {
    ".": { tile: null, name: `keep the map's own tile` },
    g: { tile: 0, name: `grass` },
    G: { tile: 1, name: `grass (darker)` },
    f: { tile: 2, name: `flowers` },
    d: { tile: 3, name: `dark grass` },
    p: { tile: 4, name: `path` },
    w: { tile: 5, name: `water` },
    s: { tile: 6, name: `sand` },
    n: { tile: 7, name: `snow` },
    i: { tile: 8, name: `ice` },
    a: { tile: 9, name: `ash` },
    l: { tile: 10, name: `lava` },
    P: { tile: 11, name: `plaza` },
    b: { tile: 12, name: `bridge (vertical)` },
    W: { tile: 13, name: `deep water` },
    c: { tile: 14, name: `cobble` },
    t: { tile: 15, name: `dirt` },
    o: { tile: 16, name: `soil` },
    h: { tile: 17, name: `wheat` },
    r: { tile: 18, name: `greens` },
    B: { tile: 19, name: `bridge (horizontal)` },
    k: { tile: 20, name: `dock` },
    m: { tile: 21, name: `market` },
    x: { tile: 22, name: `scrub` },
    y: { tile: 23, name: `courtyard` },
  },
  gr = new Set([
    `house`,
    `shop`,
    `hall`,
    `keep`,
    `inn`,
    `barracks`,
    `barn`,
    `mourning`,
    `wing`,
    `tower`,
    `windmill`,
    `stall`,
    `well`,
    `fountain`,
    `statue`,
  ]);
function _r(e) {
  if (e.mode === `point`) return [[e.tx, e.ty]];
  let t = [];
  for (let n = e.ty; n < e.ty + e.h; n++)
    for (let r = e.tx; r < e.tx + e.w; r++) t.push([r, n]);
  return t;
}
function vr(e, t, n, r, i) {
  let a = [],
    o = (e, t) => e >= 0 && t >= 0 && e < r && t < i;
  (t.tiles ?? []).forEach((n, i) => {
    for (let a = 0; a < n.length; a++) {
      let s = hr[n[a]]?.tile,
        c = t.x + a,
        l = t.y + i;
      s != null && o(c, l) && (e.tiles[l * r + c] = s);
    }
  });
  let s = new Set(),
    c = new Set((t.remove ?? []).map(([e, t]) => `${e},${t}`));
  for (let n of e.placements) {
    let e = n.tx >= t.x && n.ty >= t.y && n.tx < t.x + t.w && n.ty < t.y + t.h;
    ((t.clear && e && n.mode === `point` && !gr.has(n.kind)) ||
      c.has(`${n.tx},${n.ty}`)) &&
      s.add(n);
  }
  if (s.size) {
    e.placements = e.placements.filter((e) => !s.has(e));
    for (let t of s)
      for (let [n, i] of _r(t)) o(n, i) && (e.blocked[i * r + n] = 0);
  }
  for (let i of t.props ?? []) {
    let s = n(i.like);
    if (!s) {
      a.push(
        `${t.title}: no generated sprite "${i.like}" to copy (${i.kind} at ${i.x}, ${i.y})`,
      );
      continue;
    }
    let c = {
      ...s,
      tx: i.x,
      ty: i.y,
      ...(i.model ? { key: `model:${i.model}` } : {}),
    };
    if ((e.placements.push(c), c.blocks))
      for (let [t, n] of _r(c)) o(t, n) && (e.blocked[n * r + t] = 1);
  }
  return a;
}
function yr(e) {
  return `${e.key}@${e.tx},${e.ty}`;
}
function br(e) {
  let t = new Map(),
    n = new Map();
  for (let r of e) (t.set(yr(r), r), n.has(r.key) || n.set(r.key, r));
  return (e) =>
    t.get(e) ?? n.get(e.includes(`@`) ? e.slice(0, e.lastIndexOf(`@`)) : e);
}
function xr(e, t, n, r, i) {
  let a = [];
  if (
    !t.tiles.length &&
    !t.remove.length &&
    !t.add.length &&
    !t.block.length &&
    !t.open.length
  )
    return a;
  let o = (e, t) => e >= 0 && t >= 0 && e < r && t < i;
  for (let [n, i, a] of t.tiles) o(n, i) && (e.tiles[i * r + n] = a);
  let s = new Uint8Array(r * i);
  for (let t of e.placements)
    if (t.blocks) for (let [e, n] of _r(t)) o(e, n) && (s[n * r + e] = 1);
  let c = new Uint8Array(r * i);
  for (let t = 0; t < c.length; t++) c[t] = e.blocked[t] && !s[t] ? 1 : 0;
  let l = [];
  for (let e of t.add) {
    let t = n(e.like);
    if (!t) {
      a.push(
        `Tiled: nothing on the map like "${e.like}" to copy (at ${e.x}, ${e.y})`,
      );
      continue;
    }
    let r = { ...t, tx: e.x, ty: e.y, like: e.like };
    (e.art ? (r.art = e.art) : delete r.art,
      e.flip ? (r.flip = !0) : delete r.flip,
      l.push(r));
  }
  if (t.remove.length) {
    let n = new Set(t.remove),
      i = [];
    e.placements = e.placements.filter((e) => !n.has(yr(e)) || (i.push(e), !1));
    for (let e of n)
      i.some((t) => yr(t) === e) ||
        a.push(`Tiled: nothing on the map is ${e} to take out`);
    if (i.length) {
      s.fill(0);
      for (let t of e.placements)
        if (t.blocks) for (let [e, n] of _r(t)) o(e, n) && (s[n * r + e] = 1);
      for (let t of i)
        for (let [n, i] of _r(t))
          o(n, i) &&
            !c[i * r + n] &&
            !s[i * r + n] &&
            (e.blocked[i * r + n] = 0);
    }
  }
  for (let t of l)
    if ((e.placements.push(t), t.blocks))
      for (let [n, i] of _r(t)) o(n, i) && (e.blocked[i * r + n] = 1);
  for (let [n, i] of t.block) o(n, i) && (e.blocked[i * r + n] = 1);
  for (let [n, i] of t.open) o(n, i) && (e.blocked[i * r + n] = 0);
  return a;
}
function Sr(e) {
  let t = [];
  for (let n of e)
    (n.folk ?? []).forEach((e, r) => {
      t.push({
        id: e.id || `${n.id}-${r + 1}`,
        look: e.look,
        x: e.x,
        y: e.y,
        dir: e.dir ?? 0,
        name: e.name || `Townsfolk`,
        lines: (e.lines ?? []).filter((e) => e.trim()),
        title: e.title,
        color: e.color,
      });
    });
  return t;
}
var Cr = [];
function wr() {
  return Cr;
}
function Tr(e) {
  Cr = e;
}
var Er = [
    {
      id: `hollowed-warden-post`,
      title: `The Hollowed Warden's post`,
      x: 404,
      y: 387,
      w: 11,
      h: 10,
      tiles: [
        `...........`,
        `....ddd....`,
        `..ddaaadd..`,
        `.ddaaaaadd.`,
        `.daaaaaaad.`,
        `.daaaaaaad.`,
        `.ddaaaaadd.`,
        `..ddaaadd..`,
        `...ddddd...`,
        `...........`,
      ],
      clear: !0,
      props: [
        {
          kind: `obsidian`,
          like: `obsidian-1`,
          model: `hollowed-crystal`,
          x: 409,
          y: 391,
        },
      ],
    },
    {
      id: `wardens-way-cradle`,
      title: `A cradle on the Wardens' Way`,
      x: 380,
      y: 81,
      w: 11,
      h: 6,
      props: [
        {
          kind: `runeStone`,
          like: `runeStone-0`,
          model: `crystal-altar`,
          x: 385,
          y: 83,
        },
      ],
    },
  ],
  Dr = { tiles: [], remove: [], add: [], block: [], open: [] },
  Or = 448,
  kr = 448,
  Ar = 224,
  jr = 224,
  Mr = 224,
  Nr = 230,
  Pr = 98,
  Fr = Mr + 0.5,
  Ir = Nr + 12,
  Lr = 11,
  Rr = {
    sanctum: {
      name: `Marizon`,
      subtitle: `The Aether Sanctum, where every mage's path begins`,
      tint: `#8be9ff`,
    },
    glade: {
      name: $n.glade.name,
      subtitle: $n.glade.subtitle,
      tint: `#9be26b`,
    },
    woods: {
      name: $n.woods.name,
      subtitle: $n.woods.subtitle,
      tint: `#5fb58a`,
    },
    frost: {
      name: $n.frost.name,
      subtitle: $n.frost.subtitle,
      tint: `#bfe3ff`,
    },
    ash: { name: $n.ash.name, subtitle: $n.ash.subtitle, tint: `#ff8a4c` },
  },
  zr = [`sanctum`, `glade`, `woods`, `frost`, `ash`],
  Br = null;
function Vr() {
  if (!Br) {
    Br = ur(void 0, {
      altars: Object.values(dr).map(([e, t]) => [Ar + e, jr + t]),
      cisterns: [Ar + pr.cisterns[0], jr + pr.cisterns[1]],
      keep: [
        ...Object.values(pr).map(([e, t]) => mr(Ar + e, jr + t)),
        ...Er.map((e) => ({
          x0: e.x,
          y0: e.y,
          x1: e.x + e.w - 1,
          y1: e.y + e.h - 1,
        })),
      ],
    });
    for (let [e, t] of Object.values(dr))
      for (let [n, r] of fr(Ar + e, jr + t)) Br.blocked[r * 448 + n] = 1;
    let e = Br;
    for (let [t, n] of Object.values(pr)) {
      let r = mr(Ar + t, jr + n),
        i = (e) => e.tx >= r.x0 && e.tx <= r.x1 && e.ty >= r.y0 && e.ty <= r.y1;
      for (let t of e.placements)
        t.mode === `point` && i(t) && (e.blocked[t.ty * 448 + t.tx] = 0);
      e.placements = e.placements.filter((e) => e.mode !== `point` || !i(e));
    }
    Hr = {
      tiles: new Uint8Array(e.tiles),
      blocked: new Uint8Array(e.blocked),
      placements: [...e.placements],
    };
    let t = Wr(Hr.placements);
    for (let n of Er) vr(e, n, t, 448, 448);
    (Tr(Sr(Er)),
      (Ur = {
        tiles: new Uint8Array(e.tiles),
        blocked: new Uint8Array(e.blocked),
        placements: [...e.placements],
      }),
      xr(e, Dr, br(Ur.placements), 448, 448));
  }
  return Br;
}
var Hr = null,
  Ur = null;
