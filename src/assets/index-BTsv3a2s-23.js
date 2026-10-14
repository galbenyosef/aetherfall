// index-BTsv3a2s 23 — math
// Lines 24157-24426 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function es(e, t) {
  let n = $o[e].level;
  return t === `hollowed` ? Math.min(30, n + 5) : n;
}
function ts(e, t) {
  return es(e, t) - 2;
}
function ns(e, t, n) {
  let r = $o[e];
  if (n.length < Do.min) return `You need at least one mage.`;
  if (n.length > Do.max) return `At most ${Do.max} can go down together.`;
  let i = ts(e, t);
  for (let a of n) {
    if (a.level < i) return `${a.name} needs level ${i} (is ${a.level}).`;
    if (r.unlock.quest && !a.quests.includes(r.unlock.quest))
      return `${a.name} hasn't finished Chapter I (The Unremembered Field).`;
    if (r.unlock.notes && new Set(a.notes).size < r.unlock.notes)
      return `${a.name} has broken ${new Set(a.notes).size} of Lillith's ${r.unlock.notes} ward-notes. The road still bends away from the Folly.`;
    if (t === `hollowed` && !(a.cleared[e] ?? []).includes(`normal`))
      return `${a.name} hasn't cleared ${r.name} on Normal.`;
  }
  return null;
}
function rs(e) {
  return new Set(e).size >= 4;
}
function is(e, t, n) {
  return t.includes(To[e]) ? `spell` : n[e] > 0 ? `shard` : null;
}
function as(e) {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
function os(e) {
  let [t, n] = e.split(`:`);
  return n ? { kind: t, tone: n } : { kind: t };
}
var ss = [
  [1, 0],
  [0, 1],
  [0, -1],
  [-1, 0],
];
function cs(e, t, n, r) {
  let i = [0, Math.floor(r() * t)],
    a = [i],
    o = new Set([`${i[0]},${i[1]}`]),
    s = [1, 0];
  for (; a.length < n;) {
    let [n, i] = a[a.length - 1],
      c = ss.filter(([r, a]) => {
        let s = n + r,
          c = i + a;
        return s >= 0 && c >= 0 && s < e && c < t && !o.has(`${s},${c}`);
      });
    if (!c.length) return null;
    let l = c.map(
        ([e, t]) =>
          (e === s[0] && t === s[1] ? 2.2 : 1) *
          (e === 1 ? 1.6 : e === -1 ? 0.5 : 1),
      ),
      u = r() * l.reduce((e, t) => e + t, 0),
      d = c[c.length - 1];
    for (let e = 0; e < c.length; e++)
      if (((u -= l[e]), u <= 0)) {
        d = c[e];
        break;
      }
    s = d;
    let f = [n + d[0], i + d[1]];
    (a.push(f), o.add(`${f[0]},${f[1]}`));
  }
  return a;
}
function ls(e, t) {
  let n = cs(e.cols, e.rows, e.path.length, t);
  if (!n) return null;
  let r = n.map(([t, n], r) => ({
      cx: t,
      cy: n,
      span: { sx: t, sy: n, ex: t, ey: n },
      step: os(e.path[r]),
      parent: r - 1,
      onPath: !0,
    })),
    i = new Set(r.map((e) => `${e.cx},${e.cy}`)),
    a = (t, n) =>
      t >= 0 && n >= 0 && t < e.cols && n < e.rows && !i.has(`${t},${n}`);
  for (let e of r) {
    if (e.step.kind !== `boss`) continue;
    let n = [];
    for (let [t, r] of [
      [1, 1],
      [-1, 1],
      [1, -1],
      [-1, -1],
    ])
      a(e.cx + t, e.cy) &&
        a(e.cx, e.cy + r) &&
        a(e.cx + t, e.cy + r) &&
        n.push({
          sx: Math.min(e.cx, e.cx + t),
          sy: Math.min(e.cy, e.cy + r),
          ex: Math.max(e.cx, e.cx + t),
          ey: Math.max(e.cy, e.cy + r),
        });
    for (let t of [1, -1])
      !n.length &&
        a(e.cx + t, e.cy) &&
        n.push({
          sx: Math.min(e.cx, e.cx + t),
          sy: e.cy,
          ex: Math.max(e.cx, e.cx + t),
          ey: e.cy,
        });
    for (let t of [1, -1])
      !n.length &&
        a(e.cx, e.cy + t) &&
        n.push({
          sx: e.cx,
          sy: Math.min(e.cy, e.cy + t),
          ex: e.cx,
          ey: Math.max(e.cy, e.cy + t),
        });
    if (n.length) {
      e.span = n[Math.floor(t() * n.length)];
      for (let t = e.span.sy; t <= e.span.ey; t++)
        for (let n = e.span.sx; n <= e.span.ex; n++) i.add(`${n},${t}`);
    }
  }
  let o = r.length - 1;
  for (let n of e.branches) {
    let a = os(n),
      s = o;
    if (a.kind === `shard`) {
      let e = r.findIndex(
        (e) => e.onPath && e.step.kind === `lock` && e.step.tone === a.tone,
      );
      s = e >= 0 ? e - 1 : o;
    }
    let c = [];
    for (let t = 0; t < r.length; t++) {
      if (t > s || t === o) continue;
      let n = r[t];
      if (n.step.kind !== `boss` && n.step.kind !== `seal`)
        for (let [r, a] of ss) {
          let o = n.cx + r,
            s = n.cy + a;
          o < 0 ||
            s < 0 ||
            o >= e.cols ||
            s >= e.rows ||
            i.has(`${o},${s}`) ||
            c.push({ parent: t, cx: o, cy: s });
        }
    }
    if (!c.length) return null;
    let l = c[Math.floor(t() * c.length)];
    (i.add(`${l.cx},${l.cy}`),
      r.push({
        cx: l.cx,
        cy: l.cy,
        span: { sx: l.cx, sy: l.cy, ex: l.cx, ey: l.cy },
        step: a,
        parent: l.parent,
        onPath: !1,
      }));
  }
  return { cells: r };
}
var us = [`boss`, `mini`, `seal`];
function ds(e, t, n, r) {
  let i = t.x + Math.floor(t.w / 2),
    a = t.y + Math.floor(t.h / 2),
    o = (e) => {
      for (let r = t.y + 1; r < t.y + t.h - 1; r++)
        for (let o = t.x + 1; o < t.x + t.w - 1; o++) {
          let s = e(o, r, (o - i) / (t.w / 2), (r - a) / (t.h / 2));
          s !== null && n(o, r, s);
        }
    };
  switch (e) {
    case `cistern`:
      o((e, t, n, i) =>
        Math.abs(n) > 0.55 && Math.abs(n) < 0.8
          ? Math.abs(t - a) <= 1
            ? 10
            : 4
          : Math.hypot(n, i * 0.8) < 0.38 && r() < 0.7
            ? 3
            : null,
      );
      break;
    case `barrow`:
      o((e, n, a, o) =>
        Math.abs(a) > 0.7 && Math.abs(o) > 0.6
          ? 4
          : (n - t.y) % 4 == 2 &&
              (e - t.x) % 3 != 0 &&
              Math.abs(e - i) > 1 &&
              Math.abs(o) < 0.8 &&
              r() < 0.6
            ? 3
            : null,
      );
      break;
    case `rime`:
      o((e, t, n, r) => {
        let i = Math.hypot(n, r);
        return i < 0.62
          ? (Math.abs(n) < 0.14 && Math.abs(r) < 0.3) ||
            (Math.abs(n - 0.35) < 0.1 && Math.abs(r) < 0.14) ||
            (Math.abs(n + 0.35) < 0.1 && Math.abs(r) < 0.14)
            ? 3
            : 4
          : i < 0.8
            ? 3
            : null;
      });
      break;
    case `ember`:
      o((e, t, n, r) =>
        Math.abs(e - i) <= 1 ||
        Math.abs(t - a) <= 1 ||
        [
          [-0.5, -0.5],
          [0.5, -0.5],
          [-0.5, 0.5],
          [0.5, 0.5],
        ].some(([e, t]) => Math.abs(n - e) < 0.13 && Math.abs(r - t) < 0.12)
          ? null
          : [
                [-0.5, -0.5],
                [0.5, -0.5],
                [-0.5, 0.5],
                [0.5, 0.5],
              ].some(
                ([e, t]) => Math.abs(n - e) < 0.22 && Math.abs(r - t) < 0.2,
              )
            ? 3
            : 4,
      );
      break;
    case `folly`:
      o((e, t, n, r) =>
        Math.abs(n) < 0.22 && Math.abs(r) < 0.22
          ? 9
          : Math.abs(e - i) <= 1 || Math.abs(t - a) <= 1
            ? null
            : Math.abs(n) > 0.35 &&
                Math.abs(n) < 0.75 &&
                Math.abs(r) > 0.35 &&
                Math.abs(r) < 0.75
              ? 3
              : Math.abs(Math.abs(n) - Math.abs(r)) < 0.05 &&
                  Math.abs(n) > 0.3 &&
                  Math.abs(n) < 0.8
                ? 4
                : null,
      );
  }
}
