// index-BTsv3a2s 147 — skin
// Lines 87694-88021 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function RR(e) {
  let t = `skin${e.skin}`,
    n = `cloth${e.cloth}`,
    r = e.sleeves === null ? null : (e.sleeves ?? e.shirt),
    i = e.sex === `m` && e.cloth > 1,
    a = [
      [`r-leg-${t}`, e.tone],
      [`r-leg-${n}`, e.legs],
      [`r-arm-${t}`, e.tone],
      [`r-arm-${n}`, r],
      [`l-leg-${t}`, e.tone],
      [`l-leg-${n}`, e.legs],
      [`body-${t}`, e.tone],
      [`body-${n}`, e.shirt],
    ];
  return (
    e.sex === `m` && a.push([`waist-${n}`, e.belt]),
    i && a.push([`jacket-down-${n}`, e.vest]),
    a.push([`l-arm-${t}`, e.tone], [`l-arm-${n}`, r]),
    i && a.push([`jacket-up-${n}`, e.vest]),
    a.push([`head-${t}`, e.tone], [`hair${e.hair}`, e.hairColor]),
    a.filter((e) => e[1] !== null)
  );
}
var zR = new Map();
function BR(e, t) {
  let n = sM(e);
  if (!n) return null;
  if (!t) return n;
  let r = `${e}|${t}`,
    i = zR.get(r);
  return (
    i || zR.set(r, (i = ag(n.frames, t))),
    { frames: i, ax: n.ax, ay: n.ay }
  );
}
var VR = 40,
  HR = 58,
  UR = 20,
  WR = 56;
function GR(e) {
  let t = (t, n) => {
      let r = RR(e).map(([n, r]) => BR(`npc/part-${e.sex}-${n}-${t}`, r));
      if (!r.every((e) => e)) return null;
      let i = r[0].frames.length;
      return {
        frames: Array.from({ length: i }, (e, t) => {
          let [n, i] = M(VR, HR);
          for (let e of r)
            i.drawImage(
              e.frames[t % e.frames.length],
              UR - e.ax * LR,
              WR - e.ay * LR,
            );
          return jp(n, LR);
        }),
        ax: UR / LR,
        ay: WR / LR,
        fps: n,
      };
    },
    n = t(`idle`, 8);
  return n
    ? { idle: n, walk: t(`walk`, 10), work: null, rest: 0, shadow: !1 }
    : null;
}
var KR = [
    { skin: 1 },
    { skin: 2 },
    { skin: 2, tone: `#a0714c` },
    { skin: 1 },
    { skin: 2, tone: `#6e4630` },
    { skin: 2 },
  ],
  qR = [
    void 0,
    `#2a1d16`,
    void 0,
    `#8a5a3a`,
    `#c9a24a`,
    void 0,
    `#8a8a96`,
    `#9c3b2e`,
  ],
  JR = (e) =>
    [...e].reduce((e, t) => (Math.imul(e, 31) + t.charCodeAt(0)) >>> 0, 7);
function YR(e, t, n) {
  let r = JR(e),
    i = t.skirt ? `f` : `m`,
    a = n % 3 == 2 ? (i === `m` ? `f` : `m`) : i;
  return {
    sex: a,
    ...KR[(r + n * 2) % KR.length],
    hair: ((r + n) % 4) + 1,
    hairColor: qR[(r * 3 + n * 5) % qR.length],
    cloth:
      a === `m` ? (t.apron ? (r % 2 ? 3 : 2) : 1) : (((r >>> 2) + n) % 3) + 1,
    shirt: t.tunic,
    sleeves: t.rolled ? null : t.tunic,
    legs: t.legs,
    belt: t.belt,
    vest: t.apron,
  };
}
var XR = {
  refugee: [
    {
      sex: `m`,
      skin: 1,
      hair: 3,
      cloth: 1,
      shirt: `#8a7a5a`,
      sleeves: `#6b5040`,
      legs: `#4a4038`,
      belt: `#3d2716`,
    },
    {
      sex: `f`,
      skin: 2,
      hair: 2,
      hairColor: `#4a3a30`,
      cloth: 2,
      shirt: `#7a6a58`,
      sleeves: `#6b5040`,
      legs: `#4a4038`,
    },
    {
      sex: `m`,
      skin: 2,
      tone: `#a0714c`,
      hair: 4,
      cloth: 1,
      shirt: `#6a5a48`,
      sleeves: `#5a4a38`,
      legs: `#4a4038`,
      belt: `#3d2716`,
    },
  ],
  miner: [
    {
      sex: `m`,
      skin: 2,
      tone: `#a0714c`,
      hair: 4,
      cloth: 3,
      shirt: `#5a5f69`,
      legs: `#3a3438`,
      belt: `#5a3a22`,
      vest: `#6b4424`,
    },
    {
      sex: `m`,
      skin: 1,
      hair: 3,
      hairColor: `#2a1d16`,
      cloth: 2,
      shirt: `#5a5f69`,
      legs: `#3a3438`,
      belt: `#5a3a22`,
      vest: `#4a4038`,
    },
  ],
  baker: [
    {
      sex: `m`,
      skin: 1,
      hair: 1,
      cloth: 2,
      shirt: `#c9b48a`,
      sleeves: null,
      legs: `#5a4a3a`,
      belt: `#8a6f4a`,
      vest: `#f0ebe0`,
    },
  ],
  sweeper: [
    {
      sex: `m`,
      skin: 2,
      tone: `#a0714c`,
      hair: 3,
      hairColor: `#3a2a22`,
      cloth: 1,
      shirt: `#a89a7a`,
      legs: `#6a5a48`,
      belt: `#5a4a38`,
    },
  ],
  crier: [
    {
      sex: `m`,
      skin: 1,
      hair: 1,
      hairColor: `#8a5a3a`,
      cloth: 2,
      shirt: `#6b4424`,
      legs: `#3a3438`,
      belt: `#c9a64a`,
      vest: `#2f5a3a`,
    },
  ],
  lord: [
    {
      sex: `m`,
      skin: 1,
      hair: 3,
      hairColor: `#8a8a96`,
      cloth: 3,
      shirt: `#5a1a2a`,
      legs: `#2a1a22`,
      belt: `#e0b64a`,
      vest: `#3a0f1c`,
    },
  ],
  lady: [
    {
      sex: `f`,
      skin: 1,
      hair: 4,
      hairColor: `#4a2a3a`,
      cloth: 1,
      shirt: `#4a1f3a`,
      legs: `#4a1f3a`,
    },
  ],
  fletcher: [
    {
      sex: `m`,
      skin: 1,
      hair: 3,
      hairColor: `#5a3a22`,
      cloth: 3,
      shirt: `#5a6b3a`,
      sleeves: `#6b5040`,
      legs: `#3a3438`,
      belt: `#6b4424`,
      vest: `#6b4424`,
    },
  ],
  seamstress: [
    {
      sex: `f`,
      skin: 1,
      hair: 2,
      hairColor: `#3a2a22`,
      cloth: 2,
      shirt: `#4a5a6b`,
      legs: `#3a3a48`,
    },
  ],
  delver: [
    {
      sex: `f`,
      skin: 2,
      tone: `#6e4630`,
      hair: 4,
      hairColor: `#2a1a10`,
      cloth: 3,
      shirt: `#6b4424`,
      legs: `#3a2a22`,
    },
  ],
  boy: [
    {
      sex: `m`,
      skin: 1,
      hair: 1,
      hairColor: `#8a5a3a`,
      cloth: 1,
      shirt: `#7a8a5a`,
      legs: `#5a4a3a`,
      belt: `#3d2716`,
    },
  ],
  girl: [
    {
      sex: `f`,
      skin: 1,
      hair: 3,
      hairColor: `#6b3a22`,
      cloth: 1,
      shirt: `#8a5a6b`,
      legs: `#5a3a48`,
    },
    {
      sex: `f`,
      skin: 2,
      hair: 2,
      hairColor: `#2a1d16`,
      cloth: 2,
      shirt: `#6a6a7a`,
      legs: `#4a4038`,
    },
  ],
};
function ZR(e, t, n) {
  let r = sM(e);
  return r
    ? { frames: n ? n(r.frames) : r.frames, ax: r.ax, ay: r.ay, fps: t }
    : null;
}
function QR() {
  let e = ZR(`npc/blacksmith-idle`, 8);
  return (
    e && {
      idle: e,
      walk: null,
      work: ZR(`npc/blacksmith-work`, 12),
      rest: 4,
      shadow: !1,
    }
  );
}
function $R() {
  let e = ZR(`npc/fishmonger-idle`, 8);
  return e && { idle: e, walk: null, work: null, rest: 0, shadow: !0 };
}
var ez = {
    archmage: [`#e9e4f2`, `#e0b64a`],
    steward: [`#243b6b`, `#8ef6ff`],
    archivist: [`#3a3560`, `#e6d8bc`],
    idris: [`#7d7a86`, `#c9c3d6`],
    varra: [S.pyro.colors.robe, `#f4ecff`],
    ysolde: [S.cryo.colors.robe, `#f4ecff`],
    teodor: [S.storm.colors.robe, `#f4ecff`],
    oriel: [S.void.colors.robe, `#f4ecff`],
  },
  tz = new Set([`idris`, `varra`, `ysolde`, `teodor`, `oriel`]);
