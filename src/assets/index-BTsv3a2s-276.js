// index-BTsv3a2s 276 — cost
// Lines 169885-170007 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function tde(e, t) {
  let n = [];
  if (
    (a9.satchel.includes(e) &&
      t9.forEach((r, i) => {
        let a = Yue(i + 1);
        n.push({
          offer: a,
          kind: `satchel`,
          row: i + 1,
          cost: p9(a, 1),
          blocker: m9(a, 1, e, t),
          bought: i + 1 <= t.satchel,
        });
      }),
    a9.chip.includes(e))
  ) {
    let r = Xue(t.chips),
      i = t.chips > o9 ? `Your pouch can't hold more chips.` : m9(r, 1, e, t);
    n.push({
      offer: r,
      kind: `chip`,
      held: t.chips,
      cost: u9(r9, 1),
      blocker: i,
    });
  }
  if (a9.kit.includes(e)) {
    let r = t.kits ?? 0,
      i = Zue(r);
    n.push({
      offer: i,
      kind: `kit`,
      held: r,
      cost: u9(La.cost, 1),
      blocker: r > o9 ? `Your pouch can't hold more kits.` : m9(i, 1, e, t),
    });
  }
  if (a9.arrows.includes(e))
    for (let r of Na) {
      let i = t.quiver?.[r] ?? 0,
        a = Que(r, i);
      n.push({
        offer: a,
        kind: `arrows`,
        arrow: r,
        held: i,
        cost: u9(Pa[r].cost, 1),
        blocker: m9(a, 1, e, t),
      });
    }
  if (a9.book.includes(e)) {
    let r = od(t.school, t.spells);
    for (let i of ede) {
      if (r.includes(i)) continue;
      let a = $ue(i);
      n.push({
        offer: a,
        kind: `book`,
        spell: i,
        tier: yo(i),
        cost: p9(a, 1),
        blocker: m9(a, 1, e, t),
        carried: t.carrying.includes(i),
      });
    }
  }
  return n;
}
var h9 = [`crop`, `potion`, `dish`, `seed`, `junk`],
  g9 = [`crowns`, `dust`, `shards`, `motes`, `chips`],
  nde = [`crowns`, `dust`, `shards`, `chips`],
  _9 = new Map();
function v9(e, t) {
  let n = _9.get(e);
  return (n || ((n = t().toDataURL()), _9.set(e, n)), n);
}
var y9 = (e) => (e === `crowns` ? `Crowns` : so[e].name),
  rde = (e) =>
    e.length < 2
      ? e.join(``)
      : `${e.slice(0, -1).join(`, `)} and ${e[e.length - 1]}`,
  b9 = 500,
  x9 = null,
  ide = [`bolt`, `second spell`, `ultimate`];
function S9({ cost: e, mats: t, now: n, each: r }) {
  let i = g9.filter((t) => e[t] > 0);
  return (0, Q.jsxs)(`small`, {
    className: `sh-cost`,
    children: [
      r ? `Each: ` : ``,
      i.map((r, i) => {
        let a = t?.[r] ?? 0,
          o = n && a < e[r];
        return (0, Q.jsxs)(
          `span`,
          {
            children: [
              i ? ` · ` : ``,
              (0, Q.jsxs)(`span`, {
                className: o ? `short` : void 0,
                "data-reagent": r,
                children: [e[r], ` `, y9(r), o ? ` (you have ${a})` : ``],
              }),
            ],
          },
          r,
        );
      }),
    ],
  });
}
var C9 = (e, t) => g9.every((n) => (e?.[n] ?? 0) >= t[n]);
function ade(e, t) {
  let n = 1 / 0,
    r = [];
  for (let i of g9) {
    if (t[i] <= 0) continue;
    let a = Math.floor((e?.[i] ?? 0) / t[i]);
    a < n ? ([n, r] = [a, [i]]) : a === n && r.push(i);
  }
  return { n: Number.isFinite(n) ? n : 0, first: r };
}
