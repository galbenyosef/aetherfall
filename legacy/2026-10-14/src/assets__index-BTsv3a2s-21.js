// assets__index-BTsv3a2s 21 — dmg
// Lines 23094-23112 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Jo(e, t, n, r = {}) {
  let i = r.players ?? 1,
    a = r.diff ?? `normal`,
    o = Po(t, n),
    s = Go[e],
    c = o.hp * (s?.hpMult ?? 1);
  return (
    n !== `normal` && (c *= Fo(i)),
    a === `hollowed` && (c *= 1.15),
    {
      kind: e,
      level: t,
      tier: n,
      hp: Math.round(c),
      dmg: Math.round(o.dmg * Lo(r.depth ?? 1, a)),
      xp: o.xp,
    }
  );
}
