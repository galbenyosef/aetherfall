// index-BTsv3a2s 201 — unique
// Lines 126609-126953 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function TY(e) {
  return Bm() && Wm(`unique`, e)
    ? fY(`raven-unique:${e}`, () => Um(`unique`, e) ?? EY(e))
    : EY(e);
}
function EY(e) {
  return fY(`unique:${e}`, () => {
    let [t, n] = M(16, 16);
    return (wY[e](rY(n), n), F(t, nY), t);
  });
}
var DY = {
  crowns: (e, t) => {
    aY(
      t,
      [
        `..........mmm...`,
        `.........mhhhm..`,
        `..hhhh..mhkhkhm.`,
        `.mhhhhm.mhkkkhm.`,
        `.lmmmml.mhhhhhm.`,
        `.mhhhhm.mhhhhhm.`,
        `.lmmmml..mhhhm..`,
        `.mhhhhm...mmm...`,
        `.lmmmml.........`,
        `.mhhhhm.........`,
        `.lmmmml.........`,
        `..llll..........`,
      ],
      { h: `#e6ebf5`, m: `#a9b1c4`, l: `#5a627a`, k: `#5a627a` },
      0,
      2,
    );
  },
  dust: (e, t) => {
    (P(t, 8, 11.5, 5.5, 3, `#2aa8c0`),
      P(t, 8, 10.5, 3.8, 2.4, `#7ef9ff`),
      e(7, 9, `#ffffff`, 2, 1));
    for (let [t, n] of [
      [3, 5],
      [6, 3],
      [11, 4],
      [13, 7],
      [9, 6],
    ])
      e(t, n, n % 2 ? `#ffffff` : `#7ef9ff`);
  },
  shards: (e) => {
    let t = (t, n, r) => {
      for (let i = 0; i < r; i++) {
        let r = i === 0 ? 1 : 2;
        (e(t, n + i, `#7ef9ff`, r, 1), e(t, n + i, `#ffffff`));
      }
      e(t + 1, n + r - 2, `#2aa8c0`, 1, 2);
    };
    (t(3, 6, 7), t(7, 2, 11), t(11, 7, 6));
  },
  motes: (e, t) => {
    (e(6, 1, `#8a5a34`, 4, 2),
      e(6, 3, `#aab8cc`, 4, 2),
      P(t, 8, 9, 4.5, 4.8, `#5a6a88`),
      P(t, 8, 9, 3.5, 3.8, `#1a2a48`),
      P(t, 8, 9.3, 2.2, 2.2, `#ffd166`),
      e(7, 8, `#ffffff`, 2, 2),
      e(5, 6, `#dfe6f0`),
      e(11, 11, `#ffd166`));
  },
  chips: (e, t) => {
    (e(3, 5, `#8290b0`, 10, 8),
      e(4, 4, `#8290b0`, 7, 1),
      e(3, 5, `#b8c2d8`, 1, 7),
      e(12, 6, `#4f5a7a`, 1, 7),
      e(3, 12, `#4f5a7a`, 10, 1),
      e(6, 7, `#7ef9ff`, 4, 1),
      e(7, 8, `#7ef9ff`, 2, 3),
      e(7, 8, `#ffffff`),
      t.clearRect(12, 5, 1, 2));
  },
};
function OY(e) {
  return Bm() && Wm(`reagent`, e)
    ? fY(`raven-reagent:${e}`, () => Um(`reagent`, e) ?? kY(e))
    : kY(e);
}
function kY(e) {
  return fY(`reagent:${e}`, () => {
    let [t, n] = M(16, 16);
    return (DY[e](rY(n), n), F(t, nY), t);
  });
}
function AY() {
  return fY(`satchel`, () => {
    let [e, t] = M(16, 16);
    return (
      aY(
        t,
        [
          `....oooooooo....`,
          `...o........o...`,
          `..o..........o..`,
          `.mmmmmmmmmmmmmm.`,
          `.mhhhhhhhhhhhhm.`,
          `.mhffffffffffhm.`,
          `.mhffffffffffhm.`,
          `.mhffffggffffhm.`,
          `.mmmmmmgkmmmmmm.`,
          `.mllllllllllllm.`,
          `.mllllllllllllm.`,
          `.mllllllllllllm.`,
          `.mllllllllllllm.`,
          `..mmmmmmmmmmmm..`,
        ],
        {
          o: `#6a4426`,
          m: `#5a3a20`,
          h: `#c08850`,
          f: `#a8703f`,
          l: `#7a4e2c`,
          g: `#ffd166`,
          k: `#a87a2a`,
        },
        0,
        1,
      ),
      F(e, nY),
      e
    );
  });
}
function jY() {
  return fY(`kit`, () => {
    let [e, t] = M(16, 16);
    return (
      aY(
        t,
        [
          `................`,
          `....mmmmmm......`,
          `...mhhhhhhm.....`,
          `...mhhhhhhm.....`,
          `....mmmwmm......`,
          `.......w........`,
          `.......w........`,
          `.......w........`,
          `.......w........`,
          `..ssssssssssss..`,
          `.sggggggggggggs.`,
          `.sggggggggggggs.`,
          `..ssssssssssss..`,
        ],
        {
          m: `#5a5e6a`,
          h: `#c8ccd8`,
          w: `#8a5a32`,
          s: `#3a3a44`,
          g: `#7a7e8a`,
        },
        0,
        1,
      ),
      F(e, nY),
      e
    );
  });
}
function MY(e, t) {
  return fY(`arrows:${e}`, () => {
    let [n, r] = M(16, 16);
    return (
      aY(
        r,
        [
          `...........hH...`,
          `........hH.Hs...`,
          `........Hs.w....`,
          `........w..w..hH`,
          `........w..w..Hs`,
          `........w..w..w.`,
          `........w..w..w.`,
          `.......w..w..w..`,
          `.......w..w..w..`,
          `......w..w..w...`,
          `......f..w..w...`,
          `.....ff.f..w....`,
          `.........ff.f...`,
          `...........ff...`,
        ],
        { h: e, H: t, s: e, w: `#b98a52`, f: `#e8e2d0` },
        0,
        1,
      ),
      F(n, nY),
      n
    );
  });
}
var NY = [`#12050a`, `#3a0a18`, `#5a0a1a`, `#8a1222`, `#b01a2a`, `#e0404e`];
function PY(e) {
  let [t, n] = M(e.width, e.height);
  n.drawImage(e, 0, 0);
  let r = n.getImageData(0, 0, t.width, t.height),
    i = r.data,
    a = NY.map(Lp),
    o = -1,
    s = -1;
  for (let e = 0; e < i.length; e += 4) {
    if (i[e + 3] < 20) continue;
    let t = 0.3 * i[e] + 0.59 * i[e + 1] + 0.11 * i[e + 2];
    if (t < 30) continue;
    let n = Math.min(a.length - 1, Math.floor((t / 256) * a.length));
    (([i[e], i[e + 1], i[e + 2]] = a[n]), t > o && ((o = t), (s = e)));
  }
  return (
    s >= 0 && (i[s] = i[s + 1] = i[s + 2] = 255),
    n.putImageData(r, 0, 0),
    t
  );
}
function FY(e) {
  let t = ma(e.ilvl),
    n = e.school ?? `pyro`,
    r = Bm() && (e.unique ? Wm(`unique`, e.unique) : Vm(e.base));
  return fY(
    `item:${e.unique ?? e.base}:${t}:${n}:${e.hollowed}:${e.sockets?.join(``) ?? ``}:${r}`,
    () => {
      let i = e.unique
        ? TY(e.unique)
        : pY(
            e.base,
            t,
            n,
            e.base === `staff` || e.base === `wand` || e.base === `orb`,
          );
      return (
        e.unique === `unfilledStaff` &&
          e.sockets?.length &&
          (i = LY(i, e.sockets, r ? Im : IY)),
        e.hollowed ? PY(i) : i
      );
    },
  );
}
var IY = [
  [10, 2],
  [13, 2],
  [10, 5],
  [13, 5],
];
function LY(e, t, n) {
  let [r, i] = M(16, 16);
  return (
    i.drawImage(e, 0, 0),
    t.forEach((e, t) => N(i, n[t][0], n[t][1], S[e].colors.orb)),
    r
  );
}
function RY(e, t, n, r = 20) {
  if (e < 4) return null;
  let [i, a] = M(r, r),
    o = r / 2;
  if (
    (e >= 7 &&
      ((a.globalAlpha = 0.25 + 0.2 * Math.sin(t * 0.25)),
      (a.fillStyle = n),
      a.fillRect(1, 1, r - 2, 1),
      a.fillRect(1, r - 2, r - 2, 1),
      a.fillRect(1, 1, 1, r - 2),
      a.fillRect(r - 2, 1, 1, r - 2),
      (a.globalAlpha = 1)),
    e >= 10)
  )
    for (let e = 0; e < 4; e++) {
      let r = t * 0.12 + (e * Math.PI) / 2;
      N(
        a,
        o + Math.cos(r) * (o - 2) - 0.5,
        o + Math.sin(r) * (o - 2) - 0.5,
        e % 2 ? `#ffffff` : n,
      );
    }
  let s = e >= 7 ? 2 : 1;
  for (let e = 0; e < s; e++) {
    let i = (t + e * 17) % 34;
    if (i > 8) continue;
    let o = 4 + ((e * 7 + Math.floor((t + e * 17) / 34) * 5) % (r - 8)),
      s = 3 + ((e * 11 + Math.floor((t + e * 17) / 34) * 7) % (r - 8)),
      c = i < 4 ? i : 8 - i;
    N(a, o, s, `#ffffff`);
    for (let e = 1; e <= Math.min(2, c); e++)
      (N(a, o - e, s, n),
        N(a, o + e, s, n),
        N(a, o, s - e, n),
        N(a, o, s + e, n));
  }
  return i;
}
function zY(e) {
  if (Bm() && Wm(`hud`, `pouch`)) {
    let t = _a[e].color;
    return fY(
      `raven-pouch:${e}`,
      () => Um(`hud`, `pouch`, [I(t, 0.35), t], 1) ?? BY(e),
    );
  }
  return BY(e);
}
function BY(e) {
  return fY(`pouch:${e}`, () => {
    let [t, n] = M(12, 12),
      r = rY(n);
    return (
      P(n, 6, 7.5, 4.2, 3.6, `#8a6a44`),
      P(n, 5.4, 7, 3, 2.6, `#b08a5a`),
      r(4, 2, `#8a6a44`, 4, 2),
      r(4, 4, _a[e].color, 4, 1),
      r(7, 9, `#5e4a2e`, 2, 1),
      F(t, nY),
      t
    );
  });
}
function VY() {
  return Bm() && Wm(`hud`, `journal`)
    ? fY(`raven-journal`, () => Um(`hud`, `journal`, void 0, 1) ?? HY())
    : HY();
}
function HY() {
  return fY(`journal`, () => {
    let [e, t] = M(12, 12),
      n = rY(t);
    return (
      n(2, 1, `#4a2c18`, 2, 9),
      n(4, 1, `#8a5a34`, 6, 9),
      n(4, 1, `#b07a48`, 6, 1),
      n(4, 9, `#5e3a22`, 6, 1),
      n(10, 2, `#efe6d0`, 1, 7),
      n(6, 3, `#ffd166`, 2, 1),
      n(5, 4, `#ffd166`, 4, 2),
      n(6, 6, `#ffd166`, 2, 1),
      n(8, 9, `#d62d45`, 1, 2),
      F(e, nY),
      e
    );
  });
}
