// index-BTsv3a2s 143 — f2e6c8
// Lines 86479-86798 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function OL() {
  return ZI(1, 1, 12, (e, t, n, r) => {
    (N(e, 4, n - 3, J.dk, 8, 3),
      N(e, 6, n - 16, J.st, 4, 13),
      N(e, 0, n - 22, J.lt, 16, 6),
      N(e, 1, n - 25, `#f2e6c8`, 6, 5),
      N(e, 9, n - 25, `#f2e6c8`, 6, 5),
      N(e, 7, n - 24, `#7a2f2a`, 2, 5));
    for (let t = 0; t < 3; t++)
      (N(e, 2, n - 24 + t * 2, `#8a7a5c`, 4, 1),
        N(e, 10, n - 24 + t * 2, `#8a7a5c`, 4, 1));
    (N(e, 14, n - 20, DA.crystal, 1, 6), r(8, n - 24, 18, `#fff1cc`, 0.5));
  });
}
function kL() {
  return ZI(1, 1, 12, (e, t, n) => {
    (N(e, 5, n - 3, J.dk, 6, 3),
      N(e, 7, n - 10, J.dk, 2, 7),
      P(e, 8, n - 17, 6, 6, `#2f6fcf`),
      P(e, 6, n - 19, 2.5, 2, `#3f8f3b`),
      P(e, 10, n - 15, 2, 1.5, `#3f8f3b`),
      N(e, 5, n - 21, `#9fc4e8`, 2, 1));
    for (let t = -6; t <= 6; t++)
      N(e, 8 + Math.round(Math.sin((t / 6) * 1.2) * 7), n - 17 + t, `#e0b64a`);
  });
}
function AL(e) {
  let t = EA[e];
  return ZI(1, 2, 6, (e, n, r) => {
    let i = r - 32 - 6;
    (N(e, 0, i, J.dk, n, 8),
      N(e, 0, i, J.lt, n, 1),
      N(e, 1, i + 6, `#f2e6c8`, n - 2, r - i - 10),
      N(e, 2, i + 8, `#ffffff`, n - 4, 5),
      N(e, 1, i + 15, t.robe, n - 2, r - i - 19),
      N(e, 1, i + 15, t.trim, n - 2, 1),
      N(e, n - 3, i + 16, t.dark, 2, r - i - 20),
      N(e, 0, r - 5, J.st, n, 5));
  });
}
function jL() {
  return ZI(1, 1, 2, (e, t, n) => {
    (QI(e, 1, n, 14, 5, 7, `#8a5a34`, `#6b4424`),
      N(e, 1, n - 12, `#4a4458`, 14, 1),
      N(e, 7, n - 8, `#e0b64a`, 2, 2),
      N(e, 3, n - 11, `#4a4458`, 1, 11),
      N(e, 12, n - 11, `#4a4458`, 1, 11));
  });
}
function ML(e) {
  return ZI(e, 1, 6, (e, t, n, r) => {
    (QI(e, 0, n, t, 9, 12, `#6b4424`, `#4a2e1c`),
      N(e, 4, n - 10, `#3a2416`, 10, 8),
      N(e, t - 14, n - 10, `#3a2416`, 10, 8),
      N(e, 8, n - 7, `#e0b64a`, 2, 1),
      N(e, t - 10, n - 7, `#e0b64a`, 2, 1),
      N(e, 8, n - 20, `#f2e6c8`, 9, 6));
    for (let t = 0; t < 3; t++) N(e, 9, n - 19 + t * 2, `#8a7a5c`, 7, 1);
    (N(e, 26, n - 19, `#f2e6c8`, 9, 5),
      N(e, 27, n - 18, `#3a2a5a`, 6, 1),
      N(e, 20, n - 18, `#1b1030`, 3, 3),
      N(e, 22, n - 24, `#e6ddf5`, 1, 7),
      N(e, 40, n - 19, DA.crystal, 2, 3),
      r(41, n - 18, 12, DA.crystal, 0.5));
  });
}
function NL() {
  return ZI(1, 1, 22, (e, t, n) => {
    for (let t = 0; t < 34; t++)
      N(e, 5 + Math.floor(t / 9), n - 2 - t, t % 2 ? J.st : J.mid);
    let r = n - 40;
    (N(e, 6, r, `#8c8698`, 8, 2),
      [EA.pyro.trim, EA.cryo.trim, EA.storm.trim, EA.void.trim].forEach(
        (t, n) => {
          (N(e, 5 + n * 3, r - 3, t, 2, 2),
            N(e, 5 + n * 3, r - 3, `#1b1030`, 1, 1));
        },
      ));
  });
}
function PL() {
  return Ph().brazier[0];
}
function FL(e, t = 1, n, r) {
  let i = (Array.isArray(e) ? e : [e]).map((e) => bA(e));
  if (i.some((e) => !e)) return null;
  let a = Math.max(16, r ?? 0, ...i.map((e) => e.ay)) + 2,
    [o, s] = M(t * 16 + 2, a);
  for (let e = 0; e < t; e++) {
    let t = i[e % i.length];
    s.drawImage(n ?? t.c, 1 + e * 16 + 8 - t.ax, a - 1 - (r ?? t.ay));
  }
  return { c: o };
}
var IL = new Map();
function LL(e) {
  let t = IL.get(e);
  if (t) return t;
  let n = bA(`barrel04`);
  if (!n) return null;
  let [r, i] = M(n.c.width, n.c.height);
  if ((i.drawImage(n.c, 0, 0), e === `milk`)) {
    let e = i.getImageData(0, 0, r.width, r.height),
      t = e.data,
      n = {
        "45,160,195": [223, 246, 245],
        "139,236,242": [255, 255, 255],
        "224,246,245": [255, 255, 255],
        "54,120,169": [196, 200, 188],
      };
    for (let e = 0; e < t.length; e += 4) {
      let i = n[`${t[e]},${t[e + 1]},${t[e + 2]}`];
      i && e < r.width * 8 * 4 && ([t[e], t[e + 1], t[e + 2]] = i);
    }
    i.putImageData(e, 0, 0);
  } else
    for (let [e, t] of [
      [5, 1],
      [9, 2],
    ])
      (N(i, e, t, `#39314b`, 3, 5),
        N(i, e + 1, t + 1, `#8c9090`, 1, 4),
        N(i, e, t + 1, `#c4c8bc`, 1, 1));
  return (IL.set(e, r), r);
}
var RL = [`plant01`, `plant02`, `plant03`, `plant04`, `plant05`, `plant06`];
function zL(e, t, n, r) {
  switch (e) {
    case `plant`:
      return FL(RL[r % RL.length]);
    case `barrel`:
      if (n === `milk` || n === `fish`) {
        let e = LL(n);
        return e ? FL(`barrel04`, 1, e) : null;
      }
      return FL(n === `water` ? `barrel04` : `barrel01`);
    case `kegs`:
      return FL([`barrel01`, `barrel01`, `barrel02`], t);
    case `crates`:
      return FL(`crate07`);
    case `trunk`:
      return FL(`chest`);
  }
  return null;
}
function BL(e, t, n, r, i) {
  let a = zL(e, t, r, i);
  if (a) return a;
  switch (e) {
    case `counter`:
      return nL(t, r);
    case `shelf`:
      return eL(t, r ?? `goods`);
    case `bookshelf`:
      return eL(t, null, 26);
    case `rack`:
      return tL(t, r ?? `goods`);
    case `table`:
      return rL(t, r);
    case `bench`:
      return iL(t, r ?? `tools`);
    case `stool`:
      return aL();
    case `chair`:
      return oL(r);
    case `seat`:
      return sL(r ?? `idris`);
    case `longtable`:
      return cL(t, n);
    case `oven`:
      return lL();
    case `fireplace`:
      return uL(t);
    case `forge`:
      return dL();
    case `anvil`:
      return fL();
    case `barrel`:
      return pL(r);
    case `kegs`:
      return mL(t);
    case `sacks`:
      return hL(r);
    case `crates`:
      return gL();
    case `armor`:
      return _L();
    case `cauldron`:
      return vL();
    case `case`:
      return yL(t, r ?? `goods`);
    case `orb`:
      return bL(i);
    case `candles`:
      return xL();
    case `dummy`:
      return SL(r ?? `straw`);
    case `plant`:
      return CL(i);
    case `churn`:
      return wL();
    case `vat`:
      return TL();
    case `stairs`:
      return EL(t, n);
    case `column`:
      return DL();
    case `lectern`:
      return OL();
    case `globe`:
      return kL();
    case `bed`:
      return AL(r ?? `pyro`);
    case `trunk`:
      return jL();
    case `desk`:
      return ML(t);
    case `idrisStaff`:
      return NL();
  }
  return gL();
}
var VL = new Map();
function HL(e, t, n) {
  if (WF())
    return SI(e, t, !!n?.hd, (r) => {
      let [i, a] = M(e.w * 16, GI);
      return (YI(a, e, r, t, n), i);
    });
  let [r, i] = M(e.w * 16, e.h * 16);
  WI(i, e);
  for (let t of e.rugs) JI(i, t);
  KI(i, e);
  for (let r of e.decor) YI(i, e, r, t, n);
  return (qI(i, e), r);
}
function UL(e, t) {
  if (e.kind === `homestead`) return dF(e);
  let n = WF() ? `epic` : `own`;
  if (t?.hd) {
    let r = `${e.id}:hd:${n}`,
      i = VL.get(r);
    if (i) return i;
    let a = UL(e),
      o = { base: HL(e, [], t), items: a.items, lights: a.lights };
    return (VL.set(r, o), o);
  }
  let r = VL.get(`${e.id}:${n}`);
  if (r) return r;
  let i = [],
    a = HL(e, i),
    o = [];
  e.furniture.forEach((t, r) => {
    let a = t.tx * 16,
      s = (t.ty + t.h) * 16;
    if (t.name === `brazier`) {
      let n = bA(`brazier`),
        i = n ?? PL();
      o.push({
        key: `${e.id}-${r}`,
        kind: `furniture`,
        gameKey: `brazier`,
        c: i.c,
        frames: n?.frames,
        fps: n ? 8 : void 0,
        x: a + 8 - i.ax,
        y: s - 2 - i.ay,
        baseY: s - 2,
        tx: t.tx,
        ty: t.ty,
      });
      return;
    }
    let c = n === `epic` ? LI(e, t, r) : null;
    if (c) {
      o.push({
        key: `${e.id}-${r}`,
        kind: `furniture`,
        c: c.c,
        frames: c.frames,
        fps: c.fps,
        x: c.x,
        y: c.y,
        baseY: s - 1,
        tx: t.tx,
        ty: t.ty,
      });
      for (let e of c.lights)
        i.push({ ...e, x: c.x + e.x, y: c.y + e.y, z: s - 1 - (c.y + e.y) });
      return;
    }
    let l = BL(t.name, t.w, t.h, t.arg, r + e.seed),
      u = a - 1,
      d = s + 1 - l.c.height;
    o.push({
      key: `${e.id}-${r}`,
      kind: `furniture`,
      c: l.c,
      x: u,
      y: d,
      baseY: s - 1,
      tx: t.tx,
      ty: t.ty,
    });
    for (let e of l.lights ?? [])
      i.push({ ...e, x: u + e.x, y: d + e.y, z: s - 1 - (d + e.y) });
  });
  let s = { base: a, items: o, lights: i };
  return (VL.set(`${e.id}:${n}`, s), s);
}
function WL(e, t) {
  let n = WF() ? eI(e) : null;
  if (n) {
    let [e, r] = M(t * 16 * 2, n.height);
    for (let t = 0; t < e.width; t += n.width) r.drawImage(n, t, 0);
    return jp(e, 2);
  }
  let [r, i] = M(t * 16, GI);
  return (KI(i, { wall: e.wall, w: t, seed: e.seed }), r);
}
