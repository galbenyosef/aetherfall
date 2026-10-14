// index-BTsv3a2s 144 — none
// Lines 86799-87044 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function GL(e) {
  let [t, n] = M(20, 17);
  switch (e) {
    case `board`:
      (N(n, 2, 3, J.dk, 16, 12),
        N(n, 3, 4, `#a0714c`, 14, 10),
        N(n, 4, 5, `#f2e6c8`, 5, 6),
        N(n, 10, 6, `#f2e6c8`, 6, 5),
        N(n, 6, 5, `#c2362f`));
      break;
    case `candle`:
      (N(n, 8, 6, `#f2e6c8`, 4, 10),
        N(n, 9, 3, `#ffd166`, 2, 3),
        N(n, 9, 2, `#fff3c4`, 1, 1),
        N(n, 11, 9, `#f2e6c8`, 2, 1));
      break;
    case `book`:
      (N(n, 2, 5, `#7a2f2a`, 16, 11),
        N(n, 3, 5, `#f2e6c8`, 6, 9),
        N(n, 11, 5, `#f2e6c8`, 6, 9));
      for (let e = 0; e < 4; e++)
        (N(n, 4, 7 + e * 2, `#8a7a5c`, 4, 1),
          N(n, 12, 7 + e * 2, `#8a7a5c`, 4, 1));
      break;
    case `letter`:
      N(n, 4, 3, `#f2e6c8`, 12, 13);
      for (let e = 0; e < 5; e++)
        N(n, 6, 5 + e * 2, `#3a2a5a`, 8 - (e === 4 ? 4 : 0), 1);
      break;
    case `staff`:
      for (let e = 0; e < 14; e++) N(n, 9, 3 + e, J.st);
      [EA.pyro.trim, EA.cryo.trim, EA.storm.trim, EA.void.trim].forEach(
        (e, t) => N(n, 5 + t * 3, 1, e, 2, 2),
      );
      break;
    default:
      zA(n, 6, 5, `book`);
  }
  return (F(t, wA), t);
}
var KL = {
    baker: {
      tunic: `#c9b48a`,
      legs: `#5a4a3a`,
      belt: `#8a6f4a`,
      apron: `#f0ebe0`,
      hat: `toque`,
      extra: `none`,
      tool: `none`,
      rolled: !0,
    },
    barkeep: {
      tunic: `#6b3a2a`,
      legs: `#3a3438`,
      belt: `#2b1d16`,
      apron: `#f0ebe0`,
      hat: `none`,
      extra: `towel`,
      tool: `none`,
      rolled: !0,
    },
    smith: {
      tunic: `#4a4458`,
      legs: `#3a2a22`,
      belt: `#2b1d16`,
      apron: `#6b4424`,
      hat: `band`,
      hatColor: `#9c3b2e`,
      extra: `none`,
      tool: `hammer`,
      rolled: !0,
    },
    armorer: {
      tunic: `#5a5f69`,
      legs: `#3a3438`,
      belt: `#5a3a22`,
      hat: `none`,
      extra: `mail`,
      tool: `hammer`,
    },
    alchemist: {
      tunic: `#3f6b4a`,
      legs: `#2f4a3a`,
      belt: `#8a6f2e`,
      skirt: !0,
      hat: `none`,
      extra: `goggles`,
      extraColor: `#5ccf4f`,
      tool: `ladle`,
    },
    staffwright: {
      tunic: `#7a5a3a`,
      legs: `#4a3a2a`,
      belt: `#3d2716`,
      apron: `#c9a46a`,
      hat: `band`,
      hatColor: `#3f6b4a`,
      extra: `none`,
      tool: `none`,
      rolled: !0,
    },
    scholar: {
      tunic: `#2f4a6b`,
      legs: `#2f4a6b`,
      belt: `#c9a64a`,
      skirt: !0,
      hat: `none`,
      extra: `glasses`,
      tool: `quill`,
    },
    gemcutter: {
      tunic: `#5a3a5e`,
      legs: `#3a2a3a`,
      belt: `#c9a64a`,
      hat: `none`,
      extra: `goggles`,
      extraColor: `#44c9f0`,
      tool: `loupe`,
    },
    tailor: {
      tunic: `#6b3b6e`,
      legs: `#4a2a4e`,
      belt: `#e6c872`,
      skirt: !0,
      hat: `none`,
      extra: `tape`,
      tool: `shears`,
    },
    herbalist: {
      tunic: `#4f6b3a`,
      legs: `#3a4a2a`,
      belt: `#8a6a3a`,
      skirt: !0,
      hat: `kerchief`,
      hatColor: `#9ae06a`,
      extra: `none`,
      tool: `none`,
    },
    cobbler: {
      tunic: `#6b5040`,
      legs: `#3a3438`,
      belt: `#2b1d16`,
      apron: `#8a5a34`,
      hat: `cap`,
      hatColor: `#4a4458`,
      extra: `none`,
      tool: `hammer`,
      rolled: !0,
    },
    grocer: {
      tunic: `#8a6f2e`,
      legs: `#4a3a2a`,
      belt: `#3d2716`,
      apron: `#e6d8bc`,
      hat: `cap`,
      hatColor: `#3f6b4a`,
      extra: `none`,
      tool: `none`,
    },
    cheesemonger: {
      tunic: `#c9b48a`,
      legs: `#5a4a3a`,
      belt: `#8a6f4a`,
      apron: `#f4f0e6`,
      skirt: !0,
      hat: `kerchief`,
      hatColor: `#f2c84a`,
      extra: `none`,
      tool: `none`,
      rolled: !0,
    },
    chandler: {
      tunic: `#7a2f2a`,
      legs: `#3a2a22`,
      belt: `#2b1d16`,
      apron: `#f2e6c8`,
      hat: `cap`,
      hatColor: `#5a3a22`,
      extra: `none`,
      tool: `none`,
    },
    fishmonger: {
      tunic: `#2f4a6b`,
      legs: `#3a3438`,
      belt: `#2b1d16`,
      apron: `#3f5a6a`,
      hat: `brim`,
      hatColor: `#c9a24a`,
      extra: `none`,
      tool: `none`,
      rolled: !0,
    },
    lampwright: {
      tunic: `#4a4458`,
      legs: `#3a3438`,
      belt: `#5a3a22`,
      apron: `#6b4424`,
      hat: `none`,
      extra: `goggles`,
      extraColor: `#ffd98a`,
      tool: `none`,
    },
    innkeeper: {
      tunic: `#8e3a2a`,
      legs: `#5a3a22`,
      belt: `#2b1d16`,
      apron: `#f0ebe0`,
      skirt: !0,
      hat: `none`,
      extra: `scarf`,
      extraColor: `#e6c872`,
      tool: `none`,
      rolled: !0,
    },
    refugee2: {
      tunic: `#6a5a48`,
      legs: `#4a4038`,
      belt: `#3d2716`,
      skirt: !0,
      hat: `hood`,
      hatColor: `#6b5a7a`,
      extra: `scarf`,
      extraColor: `#8a7a5c`,
      tool: `none`,
    },
  },
  qL = [
    [`#f1c7a1`, `#c9936b`],
    [`#e0b08a`, `#b8865e`],
    [`#c9956b`, `#a0714c`],
    [`#8d5a3b`, `#6a4028`],
    [`#e8c4a0`, `#c29a78`],
    [`#6a4028`, `#4a2a1a`],
  ],
  JL = [
    `#3a2a22`,
    `#6b4a2a`,
    `#1a1210`,
    `#8a5a3a`,
    `#c9a24a`,
    `#8a8a96`,
    `#9c3b2e`,
    `#d8d2e0`,
  ],
  YL = [`short`, `long`, `bun`, `short`, `tied`, `bald`],
  XL = `#1b1030`;
