// assets__index-BTsv3a2s 244 — children
// Lines 160360-160417 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Nce({ school: e, values: t }) {
  return (0, Q.jsxs)(`div`, {
    className: `arc-attributes`,
    children: [
      (0, Q.jsxs)(`div`, {
        className: `arc-ledger-label`,
        children: [
          (0, Q.jsx)(`p`, {
            className: `arc-eyebrow`,
            children: `Your nature`,
          }),
          (0, Q.jsx)(`small`, { children: `Origin + woven passives` }),
        ],
      }),
      (0, Q.jsx)(`div`, {
        className: `arc-attribute-values`,
        children: Tu.map((n) =>
          (0, Q.jsxs)(
            `span`,
            {
              className: `arc-attribute ${t[n] ? `active` : ``}`,
              title: `${Au[n].name}: ${Au[n].desc}${ju[e][n] ? ` (+${ju[e][n]} from your school)` : ``}`,
              children: [
                (0, Q.jsx)(P8, { name: n }),
                (0, Q.jsx)(`strong`, { children: t[n] }),
                (0, Q.jsx)(`small`, { children: Au[n].name }),
              ],
            },
            n,
          ),
        ),
      }),
    ],
  });
}
function v5(e) {
  return re(e) === `mage` ? ee : [e, ...ee];
}
function y5(e) {
  return e === `marksman` || e === `paladin`
    ? [...S[e].spells, ...C[e]]
    : S[e].spells;
}
function b5(e) {
  return v5(e).flatMap(y5);
}
var Pce = [`I`, `II`, `III`, `IV`, `V`, `VI`, `VII`, `VIII`],
  Fce = {
    bolt: `Projectile`,
    nova: `Area of effect`,
    strike: `Targeted strike`,
    chain: `Chain`,
    rift: `Lingering area`,
    drain: `Life drain`,
    swing: `Melee sweep`,
    guard: `Block`,
    ward: `Ward`,
  };
