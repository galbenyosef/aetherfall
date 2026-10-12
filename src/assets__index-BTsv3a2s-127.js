// assets__index-BTsv3a2s 127 — push
// Lines 81395-81740 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function aM() {
  return (
    rM ||
    ((rM = (async () => {
      if (typeof Image > `u`) return;
      let e = await Promise.all(
        $j.map(
          (e, t) =>
            new Promise((e) => {
              let n = tM[`./epic-${t}.png`];
              if (!n) return e(null);
              let r = new Image();
              ((r.onload = () => e(r)),
                (r.onerror = () => e(null)),
                (r.src = n));
            }),
        ),
      );
      e.every((e) => e) && (nM = e);
    })()),
    rM)
  );
}
function oM() {
  return nM !== null;
}
function sM(e, t = !1) {
  if (!nM) return null;
  let n = t ? `${e}~flip` : e,
    r = iM.get(n);
  if (r) return r;
  let i = eM[e];
  if (!i) return null;
  let a = nM[i.p],
    o = i.f.map(([e, t, n, r, o, s]) => {
      let [c, l] = M(i.w, i.h);
      return (l.drawImage(a, e, t, n, r, o, s, n, r), jp(c, 2));
    }),
    s = i.ax;
  t && ((o = o.map(Ip)), (s = i.w - i.ax));
  let c = { c: o[0], frames: o, ax: s / 2, ay: i.ay / 2 };
  return (iM.set(n, c), c);
}
var cM = 2,
  lM = 32,
  uM = new Map();
function dM(e) {
  let t = e.pack ? et(e.pack) : void 0;
  if (!t) return null;
  let n = `${t.id}|${+!!e.flip}|${e.shop?.sign ?? ``}`,
    r = uM.get(n);
  if (r) return r;
  let i = sM(`house/${t.id}`, !!e.flip);
  if (!i) return null;
  let a = t.w * lM,
    o = t.h * lM,
    [s, c] = M(a, o);
  if (
    (c.drawImage(i.c, Math.floor((a - i.c.width) / 2), o - i.c.height), e.shop)
  ) {
    let [n, r] = M(16, 11);
    RA(r, 1, 1, e.shop.sign);
    let i = (e.flip ? t.w - t.door : t.door) * lM,
      s = i + 26 + 32 <= a;
    c.drawImage(n, s ? i + 26 : i - 26 - 32, o - 118, 32, 22);
  }
  let l = {
    c: jp(s, cM),
    ax: 0,
    ay: t.h * 16,
    lights: vM(c, a, o),
    fold: { wallH: Math.round(t.wallH * 16) },
  };
  return (uM.set(n, l), l);
}
var fM = [
    [129, 211, 243],
    [109, 163, 192],
    [191, 226, 239],
  ],
  pM = 30,
  mM = 24,
  hM = 8,
  gM = 12,
  _M = { r: 18, color: `#ffb347`, a: 0.7 };
function vM(e, t, n) {
  let r = e.getImageData(0, 0, t, n).data,
    i = new Uint8Array(t * n);
  for (let e = 0; e < t * n; e++) {
    if (r[e * 4 + 3] < 250) continue;
    let t = r[e * 4],
      n = r[e * 4 + 1],
      a = r[e * 4 + 2];
    fM.some(
      ([e, r, i]) => Math.abs(t - e) + Math.abs(n - r) + Math.abs(a - i) < pM,
    ) && (i[e] = 1);
  }
  let a = [],
    o = [];
  for (let e = 0; e < t * n; e++) {
    if (i[e] !== 1) continue;
    let r = 0,
      s = t,
      c = n,
      l = 0,
      u = 0;
    for (i[e] = 2, o.push(e); o.length;) {
      let e = o.pop(),
        a = e % t,
        d = (e - a) / t;
      (r++,
        (s = Math.min(s, a)),
        (l = Math.max(l, a)),
        (c = Math.min(c, d)),
        (u = Math.max(u, d)));
      for (let r of [e - 1, e + 1, e - t, e + t])
        r < 0 ||
          r >= t * n ||
          i[r] !== 1 ||
          (r === e - 1 && a === 0) ||
          (r === e + 1 && a === t - 1) ||
          ((i[r] = 2), o.push(r));
    }
    r >= mM && a.push({ x: (s + l + 1) / 2 / cM, y: (c + u + 1) / 2 / cM });
  }
  let s = [];
  for (let e of a) {
    let t = s.find(
      (t) => Math.abs(t.x / t.n - e.x) < gM && Math.abs(t.y / t.n - e.y) < gM,
    );
    t ? ((t.x += e.x), (t.y += e.y), t.n++) : s.push({ ...e, n: 1 });
  }
  return s.slice(0, hM).map((e) => ({ ..._M, x: e.x / e.n, y: e.y / e.n }));
}
var yM = 63,
  bM = 30,
  xM = [32, 47],
  SM = 33,
  CM = 7,
  wM = 10,
  TM = 7,
  EM = {
    brick: {
      house: `houseBrick`,
      door: `doorRed`,
      sky: `skyBrick`,
      dormer: `dormerBrick`,
      P: 16,
      L: 5,
      R: 9,
      band: 12,
    },
    plank: {
      house: `housePlank`,
      door: `doorOrange`,
      sky: `skyPlank`,
      dormer: `dormerPlank`,
      P: 6,
      L: 5,
      R: 6,
      band: 11,
    },
    slate: {
      house: `houseSlate`,
      door: `doorPurple`,
      sky: `skySlate`,
      dormer: `dormerSlate`,
      P: 6,
      L: 5,
      R: 5,
      band: 13,
    },
  };
function DM(e) {
  let t = Object.keys(it).find((t) => it[t][0] === e.roof[0]) ?? `red`;
  return t === `red` || t === `terracotta` || t === `pyro`
    ? `brick`
    : t === `brown` || t === `thatch` || t === `green`
      ? `plank`
      : `slate`;
}
var OM = new Map();
function kM(e) {
  let t = OM.get(e);
  if (t) return t;
  let n = bA(e);
  if (!n) return null;
  let r = n.c.getContext(`2d`).getImageData(0, 0, n.c.width, n.c.height);
  return (OM.set(e, r), r);
}
var AM = { w: 14, h: 11 },
  jM = { r: 18, color: `#ffb347`, a: 0.7 };
function MM(e, t = e.shop?.sign) {
  let n = EM[DM(e)],
    r = kM(n.house);
  if (!r || e.h < 3 || e.w < 3) return null;
  let i = (t) => SA(e.seed, t, 977),
    a = e.w * 16,
    o = e.h * 16,
    s = a - 1 - ((((a - 1 - yM) % n.P) + n.P) % n.P),
    c = Math.floor((a - s) / 2),
    l = e.stories === 2 && o - 63 >= 0 ? 2 : 1,
    u = 18 + (l === 2 ? 15 : 0),
    d = o - bM - u,
    f = Math.floor(d / 10),
    p = d - f * 10;
  u += p;
  let m = [];
  for (let e = 0; e < n.band; e++) m.push(e);
  for (let e = 0; e < f; e++)
    for (let e = n.band; e < n.band + 10; e++) m.push(e);
  for (let e = n.band; e < bM; e++) m.push(e);
  let h = [30, 31];
  for (let e = 0; e < p; e++) h.push(SM);
  if (l === 2) for (let e = xM[0]; e < xM[1]; e++) h.push(e);
  for (let e = xM[0]; e <= xM[1]; e++) h.push(e);
  let g = [...m, ...h],
    _ = m.length,
    [v, y] = M(a, o),
    b = y.createImageData(a, o),
    x = b.data,
    S = r.data,
    C = (e) =>
      e < n.L ? e : e >= s - n.R ? yM - (s - e) : n.L + ((e - n.L) % n.P),
    w = (e) => (e < CM ? e : e >= s - TM ? yM - (s - e) : wM),
    T = o - g.length;
  g.forEach((e, t) => {
    let n = t < _;
    for (let r = 0; r < s; r++) {
      let i = n ? C(r) : w(r),
        o = (e * yM + i) * 4,
        s = ((T + t) * a + c + r) * 4;
      ((x[s] = S[o]),
        (x[s + 1] = S[o + 1]),
        (x[s + 2] = S[o + 2]),
        (x[s + 3] = S[o + 3]));
    }
  });
  let E = o - 16,
    D = E - 15,
    O = c + CM,
    k = c + s - TM - 1,
    ee = [],
    te = [],
    ne = [],
    re = (e, t) =>
      e >= O + 1 && t <= k - 1 && ee.every(([n, r]) => t < n - 2 || e > r + 2),
    ie = (e, t, n, r) => {
      let i = bA(e);
      i &&
        (ee.push([t, t + i.c.width - 1]),
        ne.push(() => y.drawImage(i.c, t, n)),
        r && te.push({ ...jM, x: t + i.c.width / 2, y: n + 5 }));
    },
    ae = ut(e),
    oe = Math.round(ae.x + ae.w / 2 - 8),
    se = bA(n.door);
  se && (ee.push([oe, oe + 15]), ne.push(() => y.drawImage(se.c, oe, E)));
  let ce = (e, t, r) => {
    i(r) < 0.22
      ? ie(`winShutter`, e, t, !0)
      : (ee.push([e, e + AM.w - 1]),
        ne.push(() => y.drawImage(FM(n), e, t)),
        te.push({ ...jM, x: e + AM.w / 2, y: t + 5 }));
  };
  if (e.shop) {
    let e = oe - O >= k - (oe + 15) ? oe - 4 - 16 : oe + 16 + 4;
    re(e, e + 15) && ie(i(1) < 0.5 ? `winAwning` : `winAwningGrey`, e, E, !0);
  }
  for (let e = O + 3, t = 2; e + AM.w <= k - 2; e += 4, t++)
    re(e, e + AM.w - 1) && (ce(e, E, t), (e += AM.w));
  if (l === 2) {
    let e = Math.max(1, Math.floor((k - O - 4) / 20)),
      r = (k - O + 1 - e * AM.w) / (e + 1),
      i = [];
    for (let t = 0; t < e; t++) {
      let e = Math.round(O + r + t * (AM.w + r));
      (i.push([e, e + AM.w - 1]),
        ne.push(() => y.drawImage(FM(n), e, D)),
        te.push({ ...jM, x: e + AM.w / 2, y: D + 5 }));
    }
    if (t) {
      let e = Math.max(O + 1, Math.min(k - 15, oe)),
        n = i.every(([t, n]) => e + 15 < t - 1 || e > n + 1);
      ne.push(() => RA(y, e + 1, n ? D + 2 : E - 12, t));
    }
  } else t && ne.push(() => RA(y, oe + 1, E - 13, t));
  let le = [];
  {
    let e = O;
    for (let [t, n] of [...ee].sort((e, t) => e[0] - t[0]))
      (t - 1 >= e && le.push([e, t - 1]), (e = Math.max(e, n + 1)));
    k >= e && le.push([e, k]);
  }
  for (let [e, t] of le)
    t - e + 1 >= 16 &&
      NM(b, r, a, Math.round((e + t) / 2) - 2, o - h.length, h);
  let ue = i(3) < 0.3 ? n.dormer : i(3) < 0.6 ? n.sky : null;
  if ((y.putImageData(b, 0, 0), ue)) {
    let e = bA(ue);
    if (e) {
      let t = s - n.L - n.R - e.c.width;
      if (t > 4) {
        let r = n.L + Math.floor(i(4) * t),
          a = (((e.ax - n.L) % n.P) + n.P) % n.P,
          o = r - ((((r - n.L - a) % n.P) + n.P) % n.P),
          s = T + e.ay + f * 10;
        o >= n.L && y.drawImage(e.c, c + o, s);
      }
    }
  }
  for (let e of ne) e();
  let de = [];
  {
    let e = O + 1;
    for (let [t, n] of [...ee].sort((e, t) => e[0] - t[0]))
      (t - 2 >= e && de.push([e, t - 2]), (e = Math.max(e, n + 2)));
    k - 1 >= e && de.push([e, k - 1]);
  }
  return {
    c: v,
    ax: 0,
    ay: o,
    lights: te,
    front: de,
    door: se ? { x: oe, y: E, frames: se.frames } : void 0,
    fold: { wallH: h.length },
  };
}
function NM(e, t, n, r, i, a) {
  let o = e.data,
    s = t.data,
    c = (e, t) => (t * yM + e) * 4;
  a.forEach((e, t) => {
    e >= xM[1] ||
      (e < xM[0] ? [2, 3, 4, 5] : [5, 3, 4, 5]).forEach((a, l) => {
        let u = c(a, e),
          d = ((i + t) * n + r + l) * 4;
        ((o[d] = s[u]),
          (o[d + 1] = s[u + 1]),
          (o[d + 2] = s[u + 2]),
          (o[d + 3] = s[u + 3]));
      });
  });
}
var PM = new Map();
