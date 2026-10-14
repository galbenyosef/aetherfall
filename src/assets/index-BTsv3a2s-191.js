// index-BTsv3a2s 191 — pine
// Lines 123780-124012 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var _J = [
    `ar/trees-0`,
    `ar/trees-1`,
    `ar/trees-3`,
    `ar/trees-4`,
    `ar/birch-trees-4`,
    `ar/birch-trees-5`,
    `ar/birch-trees-8`,
    `ar/birch-trees-1`,
  ],
  vJ = [
    ...[0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 14, 15].map((e) => `vol/rocks1-${e}`),
    ...[0, 1, 2, 3, 4].map((e) => `vol/sharp-rocks-${e}`),
  ],
  yJ = [
    ...[0, 1, 2, 3, 4, 5].map((e) => `gl/items-mushrooms5-${e}`),
    ...[0, 1, 2, 3, 4, 5].map((e) => `gl/items-mushrooms6-${e}`),
  ],
  bJ = {
    [$q]: { trees: dJ, bushes: [fJ], rocks: pJ },
    [eJ]: {
      trees: dJ,
      bushes: [
        `ds/bush-0`,
        `ds/bush-1`,
        `ds/bush-2`,
        `ds/bush-3`,
        `ds/bush-4`,
        `ds/bush-5`,
      ],
      rocks: pJ,
    },
    [tJ]: {
      trees: [
        `ar/trees-6`,
        `ar/trees-7`,
        `ar/trees-9`,
        `ar/trees-11`,
        `hl/pine-tree-big`,
        `hl/pine-tree-medium`,
        `hl/pine-tree2-big`,
        `hl/pine-tree2-medium`,
        `ar/birch-trees-0`,
        `ar/birch-trees-3`,
        `ar/birch-trees-6`,
      ],
      bushes: [`ar/bushes-6`, `ar/bushes-7`, `ar/bushes-10`, `ar/bushes-11`],
      rocks: pJ,
    },
    [nJ]: {
      trees: [
        `hl/pine-tree-big-snow`,
        `hl/pine-tree-big-snow2`,
        `hl/pine-tree-medium-snow`,
        `hl/pine-tree-medium-snow2`,
        `hl/pine-tree2-big-snow`,
        `hl/pine-tree2-medium-snow`,
        `hl/pine-tree2-medium-snow2`,
        `hl/pine-tree-big-snow`,
        `hl/pine-tree2-big-snow2`,
        `hl/pine-tree2-snow-no-leaves-0`,
      ],
      bushes: [
        `hl/pine-tree-small-snow`,
        `hl/pine-tree-small-snow2`,
        `hl/pine-tree2-small-snow`,
      ],
      rocks: [
        `hl/rocks-snow-0`,
        `hl/rocks-snow-1`,
        `hl/rocks-snow-7`,
        `hl/rocks-snow-8`,
        `hl/rocks-snow-10`,
        `hl/rocks-snow-11`,
        `hl/pine-tree-snow-no-leaves-4`,
        `hl/pine-tree-snow-no-leaves-6`,
        `hl/pine-tree-snow-no-leaves-8`,
        `hl/pine-tree-snow-no-leaves-10`,
        `hl/wooden-logs-4`,
        `hl/wooden-logs-6`,
      ],
    },
    [rJ]: {
      trees: [
        `ds/dead-tree1`,
        `ds/dead-tree2`,
        `ds/dead-tree3`,
        `ds/dead-tree1`,
        `ds/dead-tree2`,
        `vol/tiny-volcanos-0`,
        `vol/tiny-volcanos-1`,
        `vol/tiny-volcanos-2`,
      ],
      bushes: [
        `vol/rocks1-4`,
        `vol/rocks1-5`,
        `vol/rocks1-12`,
        `vol/rocks1-13`,
      ],
      rocks: [
        `vol/big-rocks-0`,
        `vol/big-rocks-2`,
        `vol/big-rocks-3`,
        `vol/big-rocks-5`,
        `vol/big-rocks-7`,
        `vol/big-rocks-1`,
        `vol/big-rocks-4`,
      ],
    },
  };
function xJ(e, t = !1) {
  let n = sM(e, t);
  return n
    ? { s: { c: n.c, ax: n.ax, ay: n.ay }, flip: t, art: `epic:${e}` }
    : null;
}
function SJ(e, t, n = {}, r) {
  let i = bA(e);
  return i
    ? {
        s: { c: i.c, ax: i.ax, ay: i.ay, lights: r },
        frames: i.frames,
        fps: t,
        name: e,
        ...n,
      }
    : null;
}
var CJ = [
    [`#e6482e`, `#aa3838`],
    [`#f47f14`, `#ae6e1d`],
  ],
  wJ = new Set([`57,123,68`, `113,170,52`, `60,89,86`, `182,213,60`]),
  TJ = [];
function EJ(e) {
  let t = e % 2;
  if (TJ[t]) return TJ[t];
  let n = bA(`tree04`);
  if (!n) return null;
  let [r, i] = M(n.c.width, n.c.height);
  i.drawImage(n.c, 0, 0);
  let a = i.getImageData(0, 0, r.width, r.height).data,
    o = (e, t) => {
      let n = (t * r.width + e) * 4;
      return (
        e >= 0 &&
        t >= 0 &&
        e < r.width &&
        t < r.height &&
        a[n + 3] === 255 &&
        wJ.has(`${a[n]},${a[n + 1]},${a[n + 2]}`)
      );
    },
    [s, c] = CJ[t],
    l = 0;
  for (let e = 0; e < 400 && l < 12; e++) {
    let a = 4 + Math.floor(SA(e, t, 41) * (r.width - 9)),
      u = 4 + Math.floor(SA(e, t, 42) * (n.ay - 16));
    o(a, u) &&
      o(a + 1, u) &&
      o(a, u + 1) &&
      o(a + 1, u + 1) &&
      o(a - 1, u) &&
      o(a + 2, u + 1) &&
      ((i.fillStyle = s),
      i.fillRect(a, u, 2, 2),
      (i.fillStyle = c),
      i.fillRect(a + 1, u + 1, 1, 1),
      l++);
  }
  return ((TJ[t] = { s: { c: r, ax: n.ax, ay: n.ay } }), TJ[t]);
}
var DJ = {
  pavilion: (e) => `ar/pavilion-${e % 8}`,
  shrine: (e) => `ar/shrine-${e % 8}`,
  shrineSmall: (e) => `ar/shrine-small-${e % 2}`,
  gate: (e) => `ar/gate-${e % 2}`,
  openPavilion: (e) => `ar/pavilion-open-${e % 2}`,
  pillarRing: (e) => `ar/pillar-ring-${e % 2}`,
  arch: () => `ar/arch`,
  pillar: (e) =>
    e < 14 ? `ar/pillar-broken-${e}` : `ar/pillar-${(e - 14) % 7}`,
  rubble: (e) => `ar/rubble-${e % 10}`,
  fallenWall: (e) => `ar/fallen-wall-${e % 6}`,
  fallenPillar: (e) => `ar/fallen-pillar-${e % 2}`,
  plinth: (e) => `ar/plinth-${e % 6}`,
  pedestal: (e) => `ar/pedestal-${e % 11}`,
  colossusFoot: (e) => `ar/feet-${e % 2}`,
  sword: (e) => `ar/sword-${e % 2}`,
  obelisk: (e) => `ar/obelisk-${1 + (e % 5)}`,
  brokenObelisk: (e) => `ar/obelisk-broken-${e % 7}`,
  sunStand: () => `ar/sun-stand`,
  pyramid: () => `ar/pyramid`,
  fountain: (e) => `ar/fountain-dry-${e % 2}`,
  knight: (e) => `ar/knight-${e % 3}`,
  head: () => `ar/head`,
  rock: (e) => `ar/rocks-${12 + (e % 41)}`,
};
function OJ([e, t, n]) {
  let r = DJ[e]?.(t),
    i = r ? sM(r, n === 1) : null;
  return !i || !r
    ? null
    : e === `sunStand`
      ? { s: { c: i.c, ax: i.c.width / 4, ay: 0 }, art: `epic:${r}` }
      : e === `arch`
        ? { s: { c: i.c, ax: i.ax - 9, ay: i.ay }, art: `epic:${r}` }
        : {
            s: { c: i.c, ax: i.ax, ay: i.ay },
            flip: n === 1,
            art: `epic:${r}`,
          };
}
function kJ(e, t, n) {
  let r = AJ(e, t, n);
  if (
    !e.art ||
    !r ||
    r.frames ||
    (r.art === `epic:${e.art}` && !!r.flip == !!e.flip)
  )
    return r;
  let i = sM(e.art, !!e.flip);
  return i
    ? {
        ...r,
        s: { ...r.s, c: i.c, ax: i.ax, ay: i.ay, fold: void 0 },
        art: `epic:${e.art}`,
        flip: !!e.flip,
        name: void 0,
      }
    : r;
}
