// index-BTsv3a2s 186 — tla
// Lines 122238-122479 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function mK() {
  return (
    pK ||
    ((pK = (async () => {
      if (typeof Image > `u`) return;
      let e = await Promise.all(
        oK.map(
          (e, t) =>
            new Promise((e) => {
              let n = dK[`./mana-${t}.png`];
              if (!n) return e(null);
              let r = new Image();
              ((r.onload = () => e(r)),
                (r.onerror = () => e(null)),
                (r.src = n));
            }),
        ),
      );
      e.every((e) => e) && (fK = e);
    })()),
    pK)
  );
}
function hK() {
  return fK !== null;
}
function gK(e) {
  return e in sK;
}
function _K(e, t, n, r, i, a) {
  let o = sK[t]?.[n * 8 + r];
  if (!fK || !o) return !1;
  let [s, c, l, u, d, f, p] = o;
  return (e.drawImage(fK[s], c, l, u, d, i + f, a + p, u, d), !0);
}
function vK(e, t, n, r, i) {
  let a = uK[t]?.[n];
  if (!fK || !a) return !1;
  let [o, s, c, l, u, d, f] = a;
  return (e.drawImage(fK[o], s, c, l, u, r + d, i + f, l, u), !0);
}
function yK() {
  return M(64, 64);
}
function bK(e, t, n, r) {
  let i = cK[`${e}:${t}`];
  return i ? Number(i[n * 8 + r]) : 5;
}
var xK = null;
function SK() {
  return fK
    ? ((xK ||= lK.map(([e, t, n, r, i, a, o, s]) => {
        let [c, l] = M(r, i);
        return (
          l.drawImage(fK[e], t, n, r, i, 0, 0, r, i),
          { c, mx: -a, my: -o, deg: s }
        );
      })),
      xK)
    : null;
}
var CK = { pyro: 8, cryo: 3, storm: 10, void: 2 },
  wK = {
    paladin: {
      m: { layers: [`0bas/humn/2`, `1out/fstr/5`, `4har/dap1/11`] },
      f: { layers: [`0bas/humn/3`, `1out/fstr/5`, `4har/bob1/4`] },
    },
    marksman: {
      m: { layers: [`0bas/humn/2`, `1out/fstr/1`, `4har/dap1/11`] },
      f: { layers: [`0bas/humn/3`, `1out/fstr/1`, `4har/bob1/4`] },
    },
    scout: {
      m: { layers: [`0bas/humn/2`, `1out/fstr/5`, `4har/bob1/4`] },
      f: { layers: [`0bas/humn/3`, `1out/fstr/5`, `4har/dap1/11`] },
    },
  },
  TK = {
    sword: [`6tla/sw01/1`, `6tla/sw01/3`, `6tla/sw01/4`, `6tla/sw01/5`],
    shield: [`7tlb/sh01/1`, `7tlb/sh02/1`, `7tlb/sh03/1`, `7tlb/sh02/5`],
    bow: [`6tla/bo01/1`, `6tla/bo02/2`, `6tla/bo03/3`, `6tla/bo03/5`],
    twinblade: [`6tla/sw02/1`, `6tla/sw02/3`, `6tla/sw02/4`, `6tla/sw02/5`],
    axe: [`6tla/ax01/1`, `6tla/ax01/3`, `6tla/ax01/4`, `6tla/ax01/5`],
    spear: [`6tla/sp01/1`, `6tla/sp01/3`, `6tla/sp02/4`, `6tla/sp02/5`],
    halberd: [`6tla/hb01/1`, `6tla/hb01/3`, `6tla/hb01/4`, `6tla/hb01/5`],
    dagger: [`6tla/sw01/1`, `6tla/sw01/3`, `6tla/sw01/4`, `6tla/sw01/5`],
  },
  EK = {
    sword: `sword`,
    twinblade: `sword`,
    axe: `sword`,
    shield: `sword`,
    bow: `bow`,
    spear: `pole`,
    halberd: `pole`,
    dagger: `sword`,
  },
  DK = [`7tlb/qv01/2`, `7tlb/qv01/1`, `7tlb/qv01/3`, `7tlb/qv01/4`];
function OK(e) {
  let t = {};
  for (let n of D[e] ?? [])
    t[n === `shield` || n === `dagger` ? `off` : `main`] = {
      base: n,
      ilvl: 1,
      hollowed: !1,
    };
  return t;
}
var kK = {
  sword: [`pONE1`, `pONE2`, `pONE3`],
  bow: [`pBOW1`, `pBOW2`, `pBOW3`],
  pole: [`pPOL1`, `pPOL2`, `pPOL3`],
};
function AK(e, t, n) {
  let r = re(e);
  if (r === `marksman` || r === `paladin` || r === `scout`) {
    let i = wK[r][t],
      a = i.layers.filter(gK),
      o = n === void 0 ? OK(e) : (n ?? {}),
      s = (e) => (e && b.includes(e.base) ? e.base : void 0),
      c = (e) => (e ? ma(e.ilvl) : 1) - 1,
      l = s(o.main),
      u = [],
      d;
    if (
      (l && EK[l] !== `sword`
        ? ((d = EK[l]),
          u.push(TK[l][c(o.main)]),
          l === `bow` && u.push(DK[c(o.main)]))
        : (l
            ? u.push(TK[l][c(o.main)])
            : s(o.off) === `dagger` && u.push(TK.dagger[c(o.off)]),
          s(o.off) === `shield` && u.push(TK.shield[c(o.off)]),
          u.length && (d = `sword`)),
      !d)
    )
      return { layers: a };
    let f = kK[d][2];
    return [...i.layers, ...u].every((e) => gK(`${f}:${e}`))
      ? { layers: a, gear: u, kit: d }
      : { layers: a };
  }
  let i = `2clo/mnpl/${CK[e] ?? 3}`;
  return {
    layers: (t === `f`
      ? [`0bas/humn/3`, `1out/pfdr/5`, i, `4har/pon1/4`]
      : [`0bas/humn/2`, `1out/alch/1`, i, `4har/spk2/11`]
    ).filter(gK),
  };
}
var jK = 64,
  MK = 2,
  NK = 1.5,
  PK = 1.5,
  FK = 2,
  IK = new Map(),
  LK = new Map();
function RK(e, t, n, r) {
  if (t === `p1`) return e.layers;
  let i = e.layers.map((e) => `${t}:${e}`),
    a = (e.gear ?? []).map((e) => ({
      name: `${t}:${e}`,
      rank: bK(t, e.slice(0, 4), n, r),
    }));
  return [
    ...a
      .filter((e) => e.rank < 3)
      .sort((e, t) => e.rank - t.rank)
      .map((e) => e.name),
    ...i,
    ...a
      .filter((e) => e.rank >= 3)
      .sort((e, t) => e.rank - t.rank)
      .map((e) => e.name),
  ];
}
function zK(e, t, n, r, i) {
  let a = `${e.layers.join(`+`)}|${(e.gear ?? []).join(`+`)}:${t}:${n}:${r}:${i}`,
    o = IK.get(a);
  if (!o) {
    let [, s] = yK();
    for (let i of RK(e, t, n, r)) _K(s, i, n, r, 0, 0);
    let c = MR(s.getImageData(0, 0, jK, jK), i, jK / 2),
      [l, u] = M(c.img.width, c.img.height);
    (u.putImageData(c.img, 0, 0),
      (o = { c: jp(l, MK), fx: c.cx / MK, fy: Math.ceil(44 * i - 0.5) / MK }),
      IK.set(a, o));
  }
  return o;
}
function BK(e, t, n, r, i) {
  let a = `${e.layers.join(`+`)}|${(e.gear ?? []).join(`+`)}:${t}:${n}:${r}:${i}`,
    o = LK.get(a);
  if (!o) {
    let s = zK(e, t, n, r, i).c,
      [c, l] = M(s.width, s.height);
    (l.drawImage(s, 0, 0),
      (l.globalCompositeOperation = `source-in`),
      (l.fillStyle = `#ffffff`),
      l.fillRect(0, 0, s.width, s.height),
      (o = jp(c, MK)),
      LK.set(a, o));
  }
  return o;
}
var VK = new Map();
function HK(e) {
  if (!hK()) return null;
  let t = [...e.layers, ...(e.gear ?? [])].join(`+`),
    n = VK.get(t);
  if (!n) {
    let [r, i] = M(40, 56);
    ((i.imageSmoothingEnabled = !1),
      i.setTransform(2, 0, 0, 2, 0, 0),
      aq(i, e, 10, 27, {
        dir: 0,
        moving: !1,
        cast: !1,
        flash: !1,
        t: 0,
        shadow: !1,
        menu: !0,
      }),
      (n = r),
      VK.set(t, n));
  }
  return n;
}
function UK() {
  return hK();
}
var WK = new Map();
function GK(e) {
  if (!hK()) return null;
  let t = e.layers.join(`+`),
    n = WK.get(t);
  if (!n) {
    let r = zK(e, `p1`, 0, 0, FK),
      [i, a] = M(40, 34);
    (a.drawImage(r.c, 20 - r.fx * MK, -26), (n = i), WK.set(t, n));
  }
  return n;
}
