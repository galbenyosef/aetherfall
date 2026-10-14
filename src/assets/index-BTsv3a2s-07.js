// index-BTsv3a2s 07 — wall
// Lines 16712-16902 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function fn(e) {
  let t = un[e.kind];
  if (!t) return [];
  let n = [];
  if (t.layer === `wall`) {
    for (let r = 0; r < t.w; r++) n.push([e.x + r, e.y], [e.x + r, e.y - 1]);
    return n;
  }
  for (let r = e.y; r < e.y + t.h; r++)
    for (let i = e.x; i < e.x + t.w; i++) n.push([i, r]);
  return n;
}
function pn(e, t, n, r) {
  return e.items.find(
    (e) =>
      un[e.kind]?.layer === t && fn(e).some(([e, t]) => e === n && t === r),
  );
}
function mn(e, t, n) {
  return !!Zt(nn(e, t, n)) && !!Zt(nn(e, t, n - 1)) && !!Xt(nn(e, t, n + 1));
}
function hn(e, t, n, r, i, a = !1) {
  let o = un[t];
  if (!o) return `You can't put that in a house.`;
  if (!Number.isInteger(n) || !Number.isInteger(r)) return `Pick a tile.`;
  if (o.args ? !o.args.includes(i ?? ``) : i !== void 0 && i !== ``)
    return `It doesn't come like that.`;
  let s = tn(e),
    c = Ut[e.tier],
    l = fn({ kind: t, x: n, y: r });
  if (l.some(([e, t]) => !on(c, e, t)))
    return `That's outside your house's ground. A better deed gives you more.`;
  if (o.layer === `wall`) {
    for (let e = 0; e < o.w; e++)
      if (!mn(s, n + e, r))
        return `Hang it on a wall two tiles tall, with floor in front of it.`;
  } else
    for (let [e, t] of l) {
      if (!Xt(nn(s, e, t))) return `It needs floor under it.`;
      if (o.layer === `stand` && an(e, t) === `entry`)
        return `Keep the way in clear.`;
    }
  return l.some(([e, t]) => pn(s, o.layer, e, t))
    ? `Something's already there.`
    : o.layer === `stand` && a
      ? `Someone's standing there.`
      : null;
}
function gn(e) {
  let t = [],
    n = new Set(),
    r = (e, r) => {
      let i = r * Ht.w + e;
      n.has(i) || (n.add(i), t.push([e, r]));
    };
  for (let t = 0; t < Ht.h; t++)
    for (let n = 0; n < Ht.w; n++) Qt(e.tiles[t * Ht.w + n] ?? `.`) || r(n, t);
  for (let t of e.items)
    if (un[t.kind]?.layer === `stand`) for (let [e, n] of fn(t)) r(e, n);
  return t;
}
function _n(e, t, n = () => !1) {
  let r = tn(e),
    i = Ut[e.tier],
    a = [];
  if (t.tool === `room`) {
    let e = t.rect;
    if (!Wt[t.floor] || !Gt[t.wall])
      return { changes: [], crowns: 0, why: `Pick a floor and a wall.` };
    if (e.w < 3 || e.h < 3)
      return {
        changes: [],
        crowns: 0,
        why: `A room needs to be at least three tiles each way.`,
      };
    for (let n = e.y; n < e.y + e.h; n++)
      for (let i = e.x; i < e.x + e.w; i++) {
        if (nn(r, i, n) !== `.` || i < 0 || n < 0 || i >= Ht.w || n >= Ht.h)
          continue;
        let o =
          i === e.x || n === e.y || i === e.x + e.w - 1 || n === e.y + e.h - 1;
        a.push([i, n, o ? Gt[t.wall].code : Wt[t.floor].code]);
      }
  } else {
    if (t.tiles.length > 400)
      return { changes: [], crowns: 0, why: `That's too much at once.` };
    let e;
    if (t.tool === `floor`) {
      if (!Wt[t.floor]) return { changes: [], crowns: 0, why: `Pick a floor.` };
      e = Wt[t.floor].code;
    } else if (t.tool === `wall`) {
      if (!Gt[t.wall]) return { changes: [], crowns: 0, why: `Pick a wall.` };
      e = Gt[t.wall].code;
    } else e = t.tool === `door` ? `+` : `.`;
    for (let [n, r] of t.tiles) a.push([n, r, e]);
  }
  let o = [],
    s = new Set(),
    c = null,
    l = 0,
    u = (e) => {
      c ??= e;
    };
  for (let [e, t, c] of a) {
    if (
      !Number.isInteger(e) ||
      !Number.isInteger(t) ||
      e < 0 ||
      t < 0 ||
      e >= Ht.w ||
      t >= Ht.h
    ) {
      u(`That's off the house's ground.`);
      continue;
    }
    let a = t * Ht.w + e;
    if (s.has(a)) continue;
    s.add(a);
    let d = nn(r, e, t);
    if (d === c) continue;
    if (!on(i, e, t)) {
      u(`That's outside your house's ground. A better deed gives you more.`);
      continue;
    }
    let f = an(e, t);
    if (f === `door`) {
      u(`The front door stays where it is.`);
      continue;
    }
    if (f === `entry` && !Xt(c)) {
      u(`Keep the way in clear.`);
      continue;
    }
    if (rn(e, t) && (Xt(c) || c === `+`)) {
      u(`The edge of the house is for walls.`);
      continue;
    }
    if (c === `+` && !Zt(d)) {
      u(`A doorway goes in a wall.`);
      continue;
    }
    let p = Qt(c);
    if (!Xt(c) && (pn(r, `stand`, e, t) || pn(r, `floor`, e, t))) {
      u(`Move the furniture first.`);
      continue;
    }
    if (pn(r, `wall`, e, t) || (!Xt(c) && pn(r, `wall`, e, t - 1))) {
      u(`Take down what's hanging there first.`);
      continue;
    }
    if (!p && n(e, t)) {
      u(`Someone's standing there.`);
      continue;
    }
    ((l += $t(c) - $t(d)), o.push([e, t, c]));
  }
  return {
    changes: o,
    crowns: l,
    why: o.length ? null : (c ?? `Nothing to change there.`),
  };
}
function vn(e, t) {
  let n = _t[e];
  return n ? (n.buyers.includes(t) ? 100 : t === `bag` ? 75 : 0) : 0;
}
var yn = 18e5;
function bn(e, t) {
  if (!e || e.n <= 0) return { n: 0, at: t };
  let n = Math.floor(Math.max(0, t - e.at) / yn);
  return n >= e.n ? { n: 0, at: t } : { n: e.n - n, at: e.at + n * yn };
}
function xn(e) {
  return Math.max(40, 100 - 3 * Math.max(0, e - 10));
}
function Sn(e, t, n, r, i) {
  let a = vn(e, t);
  if (a <= 0 || n <= 0) return null;
  let o = _t[e].price,
    s = bn(r, i),
    c = s.n,
    l = 0;
  for (let e = 0; e < n; e++) ((l += o * a * xn(c)), c++);
  return { crowns: Math.floor(l / 1e4), glut: { n: c, at: s.at } };
}
function Cn(e, t) {
  let n = dt[e];
  return !n || !n.sellers.includes(t)
    ? null
    : { crowns: n.seedCrowns, dust: n.seedDust };
}
