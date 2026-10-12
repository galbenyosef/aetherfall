// assets__index-BTsv3a2s 190 — math
// Lines 123433-123779 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Rq(e, t) {
  let n = Nq(e),
    r =
      t === `main`
        ? (e * jq - n - 0.5) / 5.5
        : (e - n / 2 - 0.5) / Math.hypot(2, 3.5);
  return Math.max(2, Math.min(Math.round((e * 1.15) / 7), Math.floor(r)));
}
function zq(e, t, n, r, i) {
  let a = Rq(r, i),
    o = Lq[e],
    s = o[0].length,
    c = Math.round(t) - (s / 2) * a,
    l = Math.round(Math.round(n) - (o.length * a) / 2),
    u = [];
  return (
    o.forEach((e, t) => {
      for (let n = 0; n < s;) {
        if (e[n] !== `#`) {
          n++;
          continue;
        }
        let r = n;
        for (; r < s && e[r] === `#`;) r++;
        (u.push({ x: c + n * a, y: l + t * a, w: (r - n) * a, h: a }), (n = r));
      }
    }),
    u
  );
}
function Bq(e) {
  return e + Math.round(e * 0.3) * 2;
}
function Vq(e, t, n, r, i) {
  let a = Bq(r);
  return { x: e - n / 2, y: t + 1 - a - i, w: n, h: a + i * 2 };
}
function Hq(e, t, n) {
  let r = t.filter((t) => e.x < t.x + t.w + n && t.x < e.x + e.w + n);
  return r.some((t) => kq(e, t, n))
    ? { ...e, y: Math.min(...r.map((e) => e.y)) - n - e.h - 0.5 }
    : e;
}
function Uq(e, t, n, r, i = !1) {
  let a = t.y + t.h / 2 - e.h / 2,
    o = n.filter((t) => t.y < a + e.h + r && a < t.y + t.h + r),
    s = i
      ? Math.max(t.x + t.w, ...o.map((e) => e.x + e.w)) + r + 0.5
      : Math.min(t.x, ...o.map((e) => e.x)) - r - e.w - 0.5;
  return { ...e, x: s, y: a };
}
function Wq(e, t = 0) {
  let n = e.map((e) => ({ ...e, boxes: [...e.boxes] })),
    r = n.map((e, t) => t),
    i = (e) => (r[e] === e ? e : (r[e] = i(r[e]))),
    a = n
      .map((e, t) =>
        e.group !== void 0 && e.label !== void 0 && !e.fixed ? t : -1,
      )
      .filter((e) => e >= 0);
  for (let e = 0; e < a.length; e++)
    for (let o = e + 1; o < a.length; o++) {
      let s = a[e],
        c = a[o];
      n[s].group === n[c].group &&
        kq(n[s].boxes[n[s].label], n[c].boxes[n[c].label], t) &&
        (r[i(c)] = i(s));
    }
  let o = new Map();
  for (let e of a) {
    let t = i(e);
    o.set(t, [...(o.get(t) ?? []), e]);
  }
  for (let e of o.values()) {
    if (e.length < 2) continue;
    e.sort((e, t) => e - t);
    let t = n[e[0]],
      r = e.map((e) => n[e].boxes[n[e].label]),
      i = r.reduce((e, t) => e + t.x + t.w / 2, 0) / r.length,
      a = Math.max(...r.map((e) => e.w)),
      o = Math.max(...r.map((e) => e.h));
    ((t.boxes[t.label] = { x: i - a / 2, y: r[0].y, w: a, h: o }),
      (t.compact = void 0));
    for (let t of e.slice(1)) {
      let e = n[t];
      (e.boxes.splice(e.label, 1), (e.label = void 0), (e.compact = void 0));
    }
  }
  return n;
}
function Gq(e, t) {
  let n = [],
    r = t.keepOut ?? [],
    i = new Map(),
    a = (e, r) => e.every((e) => !n.some((n) => kq(Aq(e, r), n, t.gap))),
    o = (e, n) => e.some((e) => r.some((r) => kq(Aq(e, n), r, t.gap))),
    s = (e) =>
      e.some((e) =>
        r.some((n) => kq(e, n, t.gap) && n.y + n.h - e.y < e.y + e.h - n.y),
      ),
    c = (e, t, r, a, o) => {
      let s = t.map((e) => Aq(e, r));
      (n.push(...s),
        i.set(e.key, {
          lift: r,
          label: a === void 0 ? null : s[a],
          boxes: s,
          ...(o === void 0 ? {} : { compact: o }),
        }));
    },
    l = (e, i, s) => {
      let c = Math.min(...e.map((e) => e.y)) - i,
        l = Math.max(...e.map((e) => e.y + e.h)) - i,
        u = (n) => {
          let r = new Set([0]);
          for (let a of e)
            for (let e of n) r.add(e.y + e.h + t.gap + 0.5 - (a.y - i));
          return [...r]
            .filter((e) => e >= 0 && c + e <= s)
            .sort((e, t) => e - t);
        },
        d = u(r).find((t) => !o(e, i - t));
      if (d === void 0) return null;
      for (let t of u([...n, ...r]))
        if (t >= d && (t === d || l + t <= s) && a(e, i - t) && !o(e, i - t))
          return i - t;
      return null;
    };
  for (let n of Wq(e, t.gap)) {
    if (n.fixed) {
      c(n, n.boxes, 0, n.label);
      continue;
    }
    let e = !1,
      i = n.boxes.filter((e, t) => t !== n.label),
      o = n.label === void 0 ? null : n.boxes[n.label],
      u =
        o && i.length
          ? Math.max(0, o.y + o.h - Math.max(...i.map((e) => e.y + e.h)))
          : 0;
    if (n.floor !== void 0 && r.length && s(n.boxes)) {
      for (let [t, r] of [n.boxes, ...(n.compact ?? [])].entries()) {
        let i = l(r, 0, n.floor);
        if (i !== null) {
          (c(n, r, i, n.label, t ? t - 1 : void 0), (e = !0));
          break;
        }
      }
      if (!e && i.length && o) {
        let t = [
          [i, -u, void 0],
          ...(n.compact ?? []).map((e, t) => [
            e.filter((e, t) => t !== n.label),
            0,
            t,
          ]),
        ];
        for (let [r, i, a] of t) {
          let t = l(r, i, n.floor);
          if (t !== null) {
            (c(n, r, t, void 0, a), (e = !0));
            break;
          }
        }
      }
      if (e) continue;
    }
    for (let r = 0; r <= t.steps && !e; r++)
      a(n.boxes, r * t.step) && (c(n, n.boxes, r * t.step, n.label), (e = !0));
    if (!e) {
      for (let r = 0; r <= Oq && !e; r++)
        a(i, r * t.step - u) && (c(n, i, r * t.step - u, void 0), (e = !0));
      e || c(n, i, 0, void 0);
    }
  }
  return i;
}
function Kq(e) {
  let t = /^\[([^\]]{1,16})\]\s*(.*)$/.exec(e);
  return t ? { key: t[1], rest: t[2] } : { key: null, rest: e };
}
function qq(e) {
  return /[A-Za-z]{2}/.test(e);
}
function Jq(e, t, n, r) {
  return e.words
    ? e.big
      ? r
        ? $c(Math.round(n * 1.4), !0)
        : `${Math.round(t * 1.6)}px ${Qc}`
      : $c(n, r)
    : `${e.big ? Math.round(t * 1.6) : t}px ${Qc}`;
}
function Yq(e, t, n) {
  let { key: r, rest: i } = Kq(e),
    a = Math.round(t * 0.5),
    o = Math.round(t * 0.3),
    s = Math.round(t * 0.4),
    c = Math.round(t * 0.3),
    l = r ? n(r) + c * 2 : 0,
    u = i ? n(i) : 0;
  return {
    key: r,
    rest: i,
    w: a * 2 + l + (r && i ? s : 0) + u,
    h: Bq(t),
    padX: a,
    padY: o,
    gap: s,
    capW: l,
    capPad: c,
  };
}
function Xq(e, t) {
  return e + 1 - Bq(t) / 2;
}
function Zq(e, t, n, r, i, a, o) {
  (e.save(), (e.font = o));
  let s = Yq(t, a, (t) => e.measureText(t).width),
    c = Math.round(n - s.w / 2),
    l = Math.round(r - s.h / 2);
  ((e.fillStyle = `rgba(6,3,12,0.85)`), e.fillRect(c, l, s.w, s.h));
  let u = e.globalAlpha;
  ((e.globalAlpha = u * 0.6),
    (e.strokeStyle = i),
    (e.lineWidth = 1),
    e.strokeRect(c + 0.5, l + 0.5, s.w - 1, s.h - 1),
    (e.globalAlpha = u),
    (e.textAlign = `left`),
    (e.textBaseline = `middle`));
  let d = c + s.padX;
  if (s.key) {
    let t = Math.max(1, Math.round(s.padY / 2));
    ((e.fillStyle = i),
      e.fillRect(d, l + t, s.capW, s.h - t * 2),
      (e.fillStyle = `#1b1030`),
      e.fillText(s.key, d + s.capPad, r),
      (d += s.capW + (s.rest ? s.gap : 0)));
  }
  return (
    s.rest && ((e.fillStyle = i), e.fillText(s.rest, d, r)),
    e.restore(),
    s.h
  );
}
var Qq = [null, `pyro`, `cryo`, `storm`, `void`],
  $q = 0,
  eJ = 1,
  tJ = 2,
  nJ = 3,
  rJ = 4,
  iJ = {
    trees: [`tree04`, `tree03`, `tree13`, `tree01`, `tree04`],
    sapling: `tree05`,
    rocks: [`rock21`, `rock22`, `rock23`, `rock24`, `rock32`, `rock33`],
  },
  aJ = {
    trees: [`tree02`],
    sapling: `tree05`,
    rocks: [`rock28`, `rock29`, `rock30`, `rock31`],
  },
  oJ = {
    trees: [`tree09`, `tree10`, `tree12`, `tree09`, `tree11`],
    sapling: `tree08`,
    rocks: [`rock37`, `rock38`, `rock37`, `rock38`, `rock39`],
  },
  sJ = (e) => (e === tJ ? aJ : e === nJ ? oJ : iJ),
  cJ = (e, t) => e[Math.min(e.length - 1, Math.floor(t * e.length))],
  lJ = new Map();
function uJ(e, t = !1, n) {
  let r = bA(e);
  if (!r) return null;
  if (!t) return { s: { c: r.c, ax: r.ax, ay: r.ay, lights: n }, name: e };
  let i = lJ.get(e);
  return (
    i || ((i = Ip(r.c)), lJ.set(e, i)),
    {
      s: { c: i, ax: i.width - 1 - r.ax, ay: r.ay, lights: n },
      name: e,
      flip: t,
    }
  );
}
var dJ = [
    `prop/pine-tree-3`,
    `prop/pine-tree-4`,
    `prop/pine-tree-5`,
    `prop/pine-tree-6`,
    `prop/pine-tree-7`,
    `prop/pine-tree-8`,
    `prop/pine-tree-9`,
    `prop/pine-tree-10`,
    `prop/pine-tree-11`,
  ],
  fJ = `prop/pine-tree-12`,
  pJ = [
    `hl/rocks-0`,
    `hl/rocks-1`,
    `hl/rocks-2`,
    `hl/rocks-3`,
    `hl/rocks-4`,
    `hl/rocks-5`,
    `hl/rocks-6`,
    `hl/rocks-7`,
    `hl/rocks-13`,
    `hl/rocks-14`,
    `hl/rocks-15`,
    `hl/rocks-16`,
  ],
  mJ = {
    produce: [`prop/grain-crate-1`, `prop/grain-crate-2`],
    cloth: [`prop/cloths-0`, `prop/cloths-2`, `prop/cloths-1`],
    potions: [`prop/pot-4`, `prop/pot-5`, `prop/pot-6`],
    crystals: [`prop/pot-8`, `prop/pot-9`, `prop/pot-10`],
    bread: [`prop/grain-sacks-0`, `prop/grain-sacks-1`, `prop/grain-sacks-2`],
    fish: [`prop/bucket2`, `prop/washbasin1`, `prop/bucket4`],
    flowers: [
      `prop/potted-flower-0`,
      `prop/potted-flower-4`,
      `prop/potted-flower-7`,
    ],
    herbs: [
      `prop/potted-flower-8`,
      `prop/potted-flower-5`,
      `prop/potted-flower-3`,
    ],
  },
  hJ = new Map();
function gJ(e) {
  let t = hJ.get(e);
  if (t) return t;
  let n = mJ[e] ?? mJ.produce,
    r = sM(`ds/awning-${e in mJ ? e : `produce`}`),
    i = sM(`prop/table4`);
  if (!r || !i) return null;
  let [a, o] = M(96, 104);
  o.drawImage(r.c, Math.round((96 - r.c.width) / 2), 0);
  let s = 104 - i.c.height;
  o.drawImage(i.c, Math.round((96 - i.c.width) / 2), s);
  let c = n.map((e) => sM(e)).filter((e) => !!e),
    l = c.reduce((e, t) => e + t.c.width, 0) + 2 * (c.length - 1),
    u = Math.round((96 - l) / 2);
  for (let e of c)
    (o.drawImage(e.c, u, s + 14 - e.c.height), (u += e.c.width + 2));
  let d = { c: jp(a, 2), ax: 0, ay: 52 };
  return (hJ.set(e, d), d);
}
