// assets__index-BTsv3a2s 93 — note
// Lines 47964-48303 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function NT() {
  let [e, t] = Tm(240, 160, `ash`, 25),
    n = DT(`cinder`, Xw),
    r = DT(`black`, eT);
  (t.drawImage(n[7], 21, 103), t.drawImage(r[7], 193, 21));
  let [i, a] = Jw(t, `gorrath`, 1, 112, 84, 16)(19.5, 24),
    o = M(240, 160);
  ([
    [52, 96],
    [84, 140],
    [160, 138],
    [196, 98],
    [170, 40],
  ].forEach(([e, n], r) => {
    for (let r = 0; r < 22; r++) {
      let i = (r / 22) * Ww;
      N(
        t,
        e + Math.cos(i) * 7,
        n + Math.sin(i) * 3,
        r % 4 == 0 ? Yw[3] : iT[2],
      );
    }
    let s = 0.45 + r * 0.1,
      c = (t) => [om(i, e, t), om(a, n, t) - Math.sin(Math.PI * t) * 34];
    for (let e = 0.04; e < s; e += 0.025) {
      let [t, n] = c(e);
      s - e < 0.12
        ? N(o[1], t, n, Yw[4], 2, 2)
        : (e * 40) % 2 < 1 && N(o[1], t, n, s - e < 0.3 ? Yw[3] : iT[2]);
    }
    let [l, u] = c(s);
    (P(o[1], l, u, 2.6, 2.4, Yw[3]), P(o[1], l, u, 1.3, 1.3, Yw[4]));
  }),
    V(o[1], i, a, 12, 14, Yw, 6),
    bm(t, o[0], 0, 0, 3, 0.8),
    t.drawImage(o[0], 0, 0),
    ym(t, i, a, 22, $w[3], 0.8));
  let s = xh(`imp`),
    c = Vg(`imp`);
  return (
    Em(t, s.frames[1], s.ax, s.ay, 34, 132, 5),
    Em(t, c.flipped[0], c.ax, c.ay, 206, 50, 5),
    t.drawImage(n[3], 137, 75),
    qw(t, `void`, 151, 104, 3),
    Dm(t, 240, 160, 0.35),
    e
  );
}
var PT = {
    id: `gorrath`,
    name: `Gorrath Cinderborn`,
    title: `Key of Cindergate`,
    page: `keys`,
    lore: `A Pyromancer who fused with the Emberheart's fire as he Hollowed it: more furnace than man, slag-iron cracked with fire, the Hollowed core behind a chest grate. The imps of the Ashen Wastes are sparks thrown off him. The simplest of the Keys, and the hardest to put out.`,
    meta: `Key · Level 15 world boss · incursions from the Ashen Wastes (south) · Cindergate arc`,
    palette: [pg.gorrath, Zw[2], iT[2], Yw[2], Yw[3], Yw[4], $w[1], $w[4]],
    source: `attackFx/keys1.ts · KEYS_1[0]`,
    portrait: () => xg(`gorrath`)[0],
    moves: [
      {
        id: `cleave`,
        name: `Slag Cleave`,
        tier: `basic`,
        form: `swing`,
        windup: 0.6,
        lore: `A fist of slag-iron, swung wide. It is hot enough that it drips: the smear it leaves is crust outside and white metal in the middle.`,
        read: `130° cone, 2.4 tiles, 0.6 s. The drips land under the arc and are cosmetic. Step back out of it.`,
        kit: `Was Cleave (KEY_KIT). Same numbers; molten arc and drips.`,
        strips: () => [
          Gw(`Swing arc`, hT(), {
            note: `Facing right; flip for left`,
            anchor: `Gorrath's feet + (10, -22)`,
          }),
          Gw(`Drip`, gT(), {
            caps: [`form`, `stretch`, `fall`, `spatter`, `crust`, `cinder`],
            note: `Falls from the arc to the ground`,
          }),
        ],
      },
      {
        id: `meteors`,
        name: `Slag Meteors`,
        tier: `special`,
        form: `rain`,
        windup: 1.1,
        lore: `His Reckoning. He raises a fist and the Emberheart throws up what it can't hold: six crusted globs that come down burning round whoever he is looking at.`,
        read: `Six crust-rimmed circles, r 1.3, round you. The seams crack open and brighten for 1.1 s, then all six land together. Each leaves a slag puddle that burns for 4 s, so the safe gaps get smaller with every volley.`,
        kit: `Was Reckoning (rain ×6, r 1.3, 1.1 s). Same numbers; adds a 4 s zone where each lands.`,
        strips: () => [
          Gw(`Telegraph`, _T(), {
            caps: [``, ``, ``, `now`],
            note: `Crust rim; seams widen with the fuse. r 1.3 tiles`,
          }),
          Gw(`Glob`, vT(), {
            note: `Falls straight down onto its circle`,
            anchor: `glob centre (9, 23)`,
          }),
          Gw(`Splash`, yT(), {
            caps: [`land`, `crown`, `crown`, `fall`, `fall`, `cinders`],
          }),
          Gw(`Puddle`, bT(), {
            caps: [`molten`, `crusting`, `crusted`, `cold`],
            note: `Zone, 4 s; burns while it glows`,
          }),
        ],
        scene: MT,
        sceneCap: `Six circles; the Pyromancer stands in the one gap last volley's slag didn't take.`,
      },
      {
        id: `shed`,
        name: `Shed Imps`,
        tier: `special`,
        form: `summon`,
        windup: 0.9,
        lore: `He burns down as you fight him, and what comes off him doesn't go out. Every spark that lands smoulders, then gets up as an Imp. Once the Emberheart is fully Hollow, they get up as Blackfire.`,
        read: `At 80, 60, 40 and 20% health he shudders (0.9 s) and throws 5 sparks 1.5 to 2.5 tiles out. Each smoulders in a small crust ring for 1.5 s, then hatches. Step on a spark to stamp it out (a little fire damage). Below 40% they hatch as Blackfire Imps, which burn mana.`,
        kit: `New form: summon, on health thresholds. Imps use KITS.imp; below 40%, KITS.blackfireimp.`,
        strips: () => [
          Gw(`Shed`, ET(), {
            caps: [`shudder`, `throw`, ``, ``, ``, `land`],
            note: `Radial, from his chest to the ground`,
          }),
          Gw(`Hatch · Cinder`, DT(`cinder`, Xw), {
            caps: [
              `land`,
              `smoulder`,
              `smoulder`,
              `ready`,
              `rise`,
              `rise`,
              `hatch`,
              `ash`,
            ],
            note: `The imp sprite spawns on 'hatch'`,
          }),
          Gw(`Hatch · Blackfire`, DT(`black`, eT), {
            caps: [
              `land`,
              `smoulder`,
              `smoulder`,
              `ready`,
              `rise`,
              `rise`,
              `hatch`,
              `ash`,
            ],
            note: `Under 40%: black flame, white core`,
          }),
        ],
        scene: NT,
        sceneCap: `The 20% shudder: five more sparks in the air. Earlier ones have hatched, an Imp and, after 40%, a Blackfire. The Voidweaver is standing on a spark before it gets up.`,
      },
      {
        id: `vent`,
        name: `Vent`,
        tier: `signature`,
        form: `beam`,
        windup: 1.3,
        lore: `The Emberheart doesn't fit in him. When the heat gets too much, the bars of his chest grate slide up and the Hollowed core pours out in front of him, and for a few seconds there is nothing between it and you.`,
        read: `The bars glow and lift for 1.3 s while a crust fan is drawn in front of him: 6 tiles long, 1 wide at his chest, 3 wide at the end. The blast holds 2 s and turns up to 30° after its target. The grate then stays open 2 s more while the core cools. He only takes full damage while it's open (×0.3 while shut), so stand beside him, not in front.`,
        kit: `New form: beam (held, flared, swept). Adds the codex damage gate: ×0.3 damage taken while the grate is shut.`,
        strips: () => [
          Gw(`Grate opens`, ST(), {
            caps: [
              `shut`,
              `heat`,
              `heat`,
              `lift`,
              `lift`,
              `open`,
              `vent`,
              `vent`,
            ],
            note: `Sprite scale, over the chest grate`,
            anchor: `cell (14, 16) on sprite (19.5, 24)`,
          }),
          Gw(`Vent`, TT(), {
            caps: [
              `fan`,
              `fan`,
              `ignite`,
              `blast`,
              `blast`,
              `blast`,
              `blast`,
              `smoke`,
            ],
            note: `Facing right; mouth at (6, 32)`,
            scale: 2,
          }),
          Gw(`Furnace beam`, wT(), {
            note: `32 px tile, loops along x; billows roll, no facets`,
          }),
          Gw(`Exposed`, CT(), {
            caps: [`bare`, `bare`, `cooling`, `shuts`],
            note: `The damage window: full damage until the bars drop`,
            anchor: `cell (14, 16) on sprite (19.5, 24)`,
          }),
        ],
        scene: jT,
        sceneCap: `Grate open. The Cryomancer and the Stormcaller are beside him, not in front, and every hit counts in full.`,
      },
      {
        id: `caldera`,
        name: `Caldera`,
        tier: `ultimate`,
        form: `phase`,
        windup: 2,
        lore: `Cindergate was built on the rim of a living caldera. At a quarter of his health he remembers it: he drives both fists into the ground and opens the grate downward, and the ground round him erupts in rings.`,
        read: `Once, at 25%. Cracks spread for 2 s. Then three rings erupt outward, 1.2 s apart (0.5 to 1.2, 1.6 to 2.4, 2.8 to 3.5 tiles), each with one gap, and the gaps don't line up. Stand inside the next ring before it fires, or use its gap. Afterwards he is spent: the grate stays open for 6 s.`,
        kit: `New. Phase set piece; reuses slam-ring shapes (ring form on the ground) with gaps.`,
        strips: () => [
          Gw(`Caldera`, kT(), {
            caps: [
              `crack`,
              `warn 1`,
              `erupt 1`,
              `erupt 2`,
              `erupt 3`,
              `fade`,
              `smoke`,
              `spent`,
            ],
            note: `Radial; each ring warns one beat before it erupts`,
            scale: 2,
          }),
          Gw(`Geyser`, AT(), {
            caps: [`crack`, `spurt`, `jet`, `jet`, `fall`, `smoke`],
            note: `A ring's eruption up close (side view)`,
          }),
        ],
      },
    ],
  },
  FT = rm.ward,
  IT = [`#2a1e08`, `#5a4214`, `#8a6f2e`, `#c9a64a`, `#ffe9a8`],
  LT = [`#25222e`, `#3a3644`, `#5d586c`, `#8c8698`, `#b9b3c7`],
  RT = (e, t) => (e < 0.5 ? FT[t] : Uw[t]);
function zT(e, t, n, r, i) {
  let [a, o] = M(t, n);
  (i(o), e.save(), (e.globalAlpha = r), e.drawImage(a, 0, 0), e.restore());
}
function BT(e, t, n, r, i, a, o = 1, s = !0) {
  let c = e.canvas.width,
    l = e.canvas.height,
    u = t + r * o;
  if (
    (s &&
      zT(e, c, l, 0.26, (e) => {
        (N(e, t, n, FT[1], Math.round(u - t), Math.round(i / 2)),
          N(
            e,
            t,
            n + Math.round(i / 2),
            Uw[1],
            Math.round(u - t),
            i - Math.round(i / 2),
          ));
      }),
    a > 0 && s)
  ) {
    let o = r * a,
      s = i * a,
      d = t + (r - o) / 2,
      f = n + (i - s) / 2;
    zT(e, c, l, 0.3, (e) => {
      for (let t = Math.floor(f); t < f + s; t++)
        N(e, d, t, RT((t - n) / i, 2), Math.max(0, Math.min(o, u - d)), 1);
    });
  }
  let d = a > 0.66,
    f = (t, r, a = 3) => {
      t > u || N(e, t, r, RT((r - n) / (i - 1), a));
    };
  for (let e = 0; e < r; e++)
    if ((f(t + e, n), f(t + e, n + i - 1), e > 3 && e < r - 4 && e % 4 == 2)) {
      let r = (e / 4) % 2 < 1 ? 2 : 1;
      for (let a = 1; a <= r; a++)
        (f(t + e, n + a, d && a === r ? 4 : 2),
          f(t + e, n + i - 1 - a, d && a === r ? 4 : 2));
    }
  for (let e = 0; e < i; e++)
    (f(t, n + e),
      f(t + r - 1, n + e),
      e > 3 &&
        e < i - 4 &&
        e % 4 == 2 &&
        (f(t + 1, n + e, 2), f(t + r - 2, n + e, 2)));
  for (let [e, a, o, s] of [
    [t, n, 1, 1],
    [t + r - 1, n, -1, 1],
    [t, n + i - 1, 1, -1],
    [t + r - 1, n + i - 1, -1, -1],
  ])
    (f(e + o * 2, a + s * 2, d ? 4 : 3),
      f(e + o * 3, a + s * 2, 3),
      f(e + o * 2, a + s * 3, 3),
      f(e + o * 3, a + s * 3, 2));
}
var VT = [
  `#######`,
  `#.....#`,
  `#.###.#`,
  `#.#.#.#`,
  `#...#.#`,
  `#####.#`,
  `......#`,
];
function HT(e, t, n, r) {
  if (
    (VT.forEach((i, a) => {
      for (let o = 0; o < 7; o++) {
        if (i[o] !== `#`) continue;
        let s = a / 6,
          c;
        ((c =
          r === `dark`
            ? RT(s, 1)
            : r === `lit`
              ? a === 3
                ? `#ffffff`
                : RT(s, 3)
              : r === `locked`
                ? a < 3
                  ? FT[4]
                  : a === 3
                    ? `#ffffff`
                    : Uw[3]
                : s < 0.5
                  ? FT[1]
                  : Uw[2]),
          N(e, t + o, n + a, c));
      }
    }),
    r === `locked`)
  )
    for (let r = -1; r <= 7; r++)
      (N(e, t + r, n - 1, FT[3]), N(e, t + r, n + 7, Uw[3]));
}
