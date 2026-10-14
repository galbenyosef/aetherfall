// index-BTsv3a2s 260 — children
// Lines 165350-165392 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function E7({ boss: e }) {
  let t = Math.max(0, Math.min(100, (e.hp / Math.max(1, e.max)) * 100));
  return (0, Q.jsxs)(`div`, {
    className: `boss-bar panel ${e.shielded ? `shielded` : ``}`,
    children: [
      (0, Q.jsxs)(`div`, {
        className: `bb-name`,
        children: [e.name, ` `, (0, Q.jsx)(`small`, { children: e.title })],
      }),
      (0, Q.jsxs)(`div`, {
        className: `bar hp enemy`,
        children: [
          (0, Q.jsx)(`div`, {
            className: `bar-fill`,
            style: { width: `${t}%` },
          }),
          (0, Q.jsx)(`span`, {
            className: `bar-label`,
            children: e.shielded
              ? (e.shieldText ?? `Shielded by the dead`)
              : `${Math.round(t)}%`,
          }),
        ],
      }),
      e.cast &&
        (0, Q.jsxs)(`div`, {
          className: `bb-cast`,
          children: [
            (0, Q.jsxs)(`div`, {
              className: `bb-cast-bar`,
              children: [
                (0, Q.jsx)(`div`, {
                  style: { width: `${Math.round(e.cast.k * 100)}%` },
                }),
                (0, Q.jsx)(`span`, { children: e.cast.label }),
              ],
            }),
            (0, Q.jsx)(`small`, { children: e.cast.hint }),
          ],
        }),
    ],
  });
}
