// assets__index-BTsv3a2s 87 — note
// Lines 46165-46488 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var tw = (e, t, n = {}) => ({ label: e, frames: t, ...n }),
  nw = [
    {
      id: `drakkar`,
      name: `Drakkar Labyrinth`,
      title: `The Dark Mage`,
      page: `drakkar`,
      lore: `A foundling from the catacombs under Carthis, named for where he was found. His magic is the Hollow cut into a maze: black glass, red seams, white-hot cores, every line at a right angle. He uses every Canticle but the Unmaking (a soul unmade is one he can't bring through his door), and he never fires Caelan's shard.`,
      meta: `Final boss · the Labyrinth under Old Carthis · not in the world yet · phases at 66% and 33%`,
      palette: [G[0], G[1], G[2], G[3], G[4], YS[1], YS[3], XS[3], qS[3]],
      source: `attackFx/drakkar.ts · DRAKKAR[0]`,
      portrait: () =>
        R(`dk-portrait`, 1, 66, 84, (e) => {
          (aC(e, 33, 12, 0.4, `back`),
            e.drawImage($h(), 0, 0),
            aC(e, 33, 12, 0.4, `front`));
        })[0],
      moves: [
        {
          id: `volley`,
          name: `Shard Volley`,
          tier: `basic`,
          form: `bolt`,
          windup: 0.5,
          lore: `His crown is seven shards of Hollowed crystal. He fires them the way anyone else fires a bolt, and calls them back. Caelan's shard stays in his hand.`,
          read: `The crown stops turning and the shards line up on you for 0.5 s; the dashed line is their path. Seven bolts follow it 0.1 s apart, then fly back down the same line 1 s later. Step off the line and don't step back onto it.`,
          kit: `New. Bolt ×7 down one line, 0.1 s apart, speed 9, then the same seven back. Each hit leaves the square spiral.`,
          strips: () => [
            tw(`Wind-up`, rne(), {
              caps: [`turning`, `slowing`, `lining up`, `aimed`, `first`],
              note: `The crown; the head is the sprite's own, for placement`,
              anchor: `head (sprite 33, 12) at cell (18, 21)`,
              scale: 4,
            }),
            tw(`Shard`, ane(), {
              note: `Rotate to heading; the trail is a square wave, the corridor it ran down`,
            }),
            tw(`Impact`, cne(), {
              caps: [`hit`, `spiral`, `closing`, `closing`, `out`],
            }),
            tw(`Return`, sne(), {
              caps: [`spent`, `cooling`, `relighting`, `relit`],
              note: `Flies back to its place in the crown; still hits`,
            }),
          ],
        },
        {
          id: `labyrinth`,
          name: `The Labyrinth`,
          tier: `signature`,
          form: `wall`,
          windup: 1.4,
          lore: `He carries the maze with him. Red lines are drawn on the floor along the tile edges, and walls of black glass rise along them with the Hollow running in the seams. Aurek built the real one under Old Carthis; this one rearranges the same way.`,
          read: `Red lines are drawn on the tile edges round him over 1.4 s, out to 5 tiles; they go white just before they rise. Stand in a cell, not on a line: a wall rising under you deals 30% of your health and throws you into the nearer cell. Walls block movement, bolts and his Tithe threads for 10 s. Every 2.5 s one sinks and a new line is drawn, so watch the red.`,
          kit: `New form: wall. One-tile segments on tile edges, a decal first, then solid for 10 s; one swaps every 2.5 s. Uses the 16 px tile grid, no 1 : 1.1 squash.`,
          strips: () => [
            tw(`Maze lines`, une(), {
              caps: [`drawn`, `drawn`, `drawn`, `fuse`, `fuse`, `rise`],
              note: `Telegraph, 5 × 4 tiles shown; drawn out from him`,
              scale: 2,
            }),
            tw(`Wall rises`, dne(), {
              caps: [`line`, `breaks`, `rises`, `rises`, `up`, `set`],
              note: `One east-west tile edge`,
              anchor: `the tile edge at cell (3, 21)`,
            }),
            tw(`Pieces`, fne(), {
              caps: [`east-west`, `north-south`, `corner`, `post`],
              note: `Posts go on every joint, 2 px taller`,
            }),
            tw(`Wall sinks`, pne(), {
              caps: [`dies`, `sinks`, `sinks`, `sinks`, `line cools`],
            }),
          ],
          scene: YC,
          sceneCap: `One wall sinks, three lines are drawn. The Pyromancer has a cell; the Stormcaller is standing on a line.`,
        },
        {
          id: `hollowing`,
          name: `The Hollowing`,
          tier: `special`,
          form: `zone`,
          windup: 1.2,
          lore: `The second Canticle, cast small. He turns a patch of floor over the way he turned Carthis's dead crystal: the light goes out of it, and any Aether near it is dragged to the middle and comes out red.`,
          read: `A 2.5-tile circle under you with a maze rim; the fuse is darkness filling from the middle, 1.2 s. It lasts 10 s: inside, you lose 6% mana and 2% health a second, he heals for it, and your light stops at your feet. Walk out over the rim; it doesn't follow.`,
          kit: `New form: zone. One at a time; two at once below 66%.`,
          strips: () => [
            tw(`Inversion`, DC(), {
              caps: [`fuse`, `fuse`, `fuse`, `turns`, `hollow`, `hollow`],
              note: `r 2.5 tiles: the tile seams light up instead of the tiles`,
              scale: 2,
            }),
            tw(`Motes`, mne(), {
              note: `Aether dragged in: cyan, white, red. The centre is the right edge; rotate to it`,
              scale: 4,
            }),
            tw(`Inverted core`, hne(), {
              note: `Hangs point-down over the middle`,
              anchor: `tip at the zone centre`,
            }),
          ],
          scene: ZC,
          sceneCap: `The Cryomancer's own Aether is pulled off her staff as she walks out.`,
        },
        {
          id: `recall`,
          name: `The Recall`,
          tier: `special`,
          form: `summon`,
          windup: 1.5,
          lore: `The third Canticle. He reads a soul out of a Hollowed crystal and writes it into one of Old Carthis's husks, top to bottom, a line at a time, and what gets up is bound to him. It looks like what it is: a stored pattern pushed into a reclaimed body.`,
          read: `From 66%. Four glyph circles, 1 tile across, are drawn round the room with a 1.5 s fuse while a pattern comes down over each. Stand in one to spoil it: the pattern needs an empty body. Every circle left empty raises a Recalled. Fire or crystal light puts them down for good.`,
          kit: `New form: summon ×4 (Fever husks into Recalled, who fight with defaultKit). Every 20 s from 66%.`,
          strips: () => [
            tw(`Glyph circle`, gne(), {
              caps: [`drawn`, `drawn`, `drawn`, `fuse`, `pattern`, `taken`],
            }),
            tw(`Pattern`, AC(), {
              note: `Between two straight rails, a line at a time`,
              anchor: `bottom ring on the glyph centre`,
            }),
            tw(`Rise, bound`, MC(), {
              note: `huskRiseFrames('feverhusk') with the pattern written into it`,
              caps: [`writing`, `writing`, `writing`, `bound`],
            }),
            tw(`Bound mark`, NC(), {
              note: `Over a Recalled's head while he holds it`,
            }),
          ],
          scene: QC,
          sceneCap: `Two husks taking a pattern, one already his. The Cryomancer is standing in the fourth.`,
        },
        {
          id: `tithe`,
          name: `The Tithe`,
          tier: `phase`,
          form: `tether`,
          windup: 1,
          lore: `The first Canticle, from everyone at once. Every Hollowed town pays him a tithe of the living; in his own hall he collects it himself. A thread runs from each of you to a shard of his crown, and he counts. He calls it arithmetic.`,
          read: `At 66%, then every 30 s. A tally is counted over every head, four strokes and the bar, 1 s. Then a thread pulls tight from each of you to his crown: 2% of your max health a second, and he heals for it. Cut it by getting 9 tiles away or putting a Labyrinth wall between you and him.`,
          kit: `New form: tether, one per player. Phase set piece at 66%, then on a 30 s cooldown.`,
          strips: () => [
            tw(`Tally`, PC(), {
              caps: [`1`, `2`, `3`, `4`, `taken`],
              note: `Over every head`,
              anchor: `head + (0, -16)`,
            }),
            tw(`Hook`, LC(), {
              caps: [`closing`, `closing`, `closing`, `taken`, `held`, `held`],
              note: `A maze cell closes on your chest; the open side faces him`,
              anchor: `chest at cell (8, 9)`,
            }),
            tw(`Thread`, IC(), {
              note: `32 px tile, loops along x toward him; a notch every 8 px`,
            }),
            tw(`Crown drinks`, RC(), {
              caps: [`1`, `2`, `3`, `4`, `5`, `full`],
              note: `Fed shards whiten; the head is the sprite's own, for placement`,
              anchor: `head (sprite 33, 12) at cell (29, 20)`,
              scale: 3,
            }),
            tw(`Snap`, zC(), {
              caps: [`strain`, `snap`, `falls`, `falls`, `gone`],
              note: `Cut by a wall or by distance`,
            }),
          ],
          scene: $C,
          sceneCap: `Three threads drinking. The Voidweaver put a wall between them and hers snapped.`,
        },
        {
          id: `rending`,
          name: `The Rending`,
          tier: `ultimate`,
          form: `phase`,
          windup: 2.5,
          lore: `The fifth Canticle, not cast since the Aetherfall. He tears the Veil and makes the tear a door: behind it is the fold, black and full of stars, and out of it come glyphs in the Steersman's tongue, every stroke straight. In that tongue his name means door. He turns his shoulder as it opens, to keep Caelan's shard out of its pull.`,
          read: `At 33%, then every 45 s; he raises the Labyrinth first. For 2.5 s a red seam hangs in the air and streaks on the floor run to the spot under it. Then the door opens for 8 s and pulls everyone toward that spot at 1.5 tiles a second; inside 2 tiles you take 10% of your max health a second. Walls block the pull: get behind one. Glyphs drift out and land as 1-tile circles, 0.8 s each.`,
          kit: `New form: phase. A pull toward a point that walls block, plus rain (the glyphs). At 33%, then a 45 s cooldown.`,
          strips: () => [
            tw(`Door`, BC(), {
              caps: [
                `seam`,
                `frays`,
                `tears`,
                `squares`,
                `open`,
                `open`,
                `closing`,
                `shut`,
              ],
              note: `In the air, 4 tiles over the floor; the opening is a perfect rectangle`,
              scale: 2,
            }),
            tw(`Pull`, WC(), {
              caps: [`1`, `2`, `3`, `4, loops`],
              note: `On the floor under the door: streaks crawl in over 3.5 tiles; damage inside the rim (2 tiles)`,
              scale: 2,
            }),
            tw(`Glyphs`, VC(), {
              caps: [`a`, `b`, `c`, `d`, `e`, `f`],
              note: `A set, not a sequence. Kharun's tongue: one bar, straight strokes, the old cyan behind`,
            }),
            tw(`Glyph lands`, HC(), {
              caps: [`falls`, `falls`, `lands`, `burns`, `cools`],
            }),
            tw(`The tell`, KC(), {
              caps: [`about to cast`, `turns`, `turns`, `shielded`],
              note: `Over the sprite's hand: the robe covers Caelan's shard`,
              anchor: `sprite (36, 25)`,
              scale: 5,
            }),
          ],
          scene: ew,
          sceneCap: `The door open over the room. The Cryomancer is behind a wall; the Stormcaller isn't.`,
        },
      ],
    },
  ],
  rw = rm.aether,
  iw = rm.hollow,
  aw = rm.stone,
  ow = [`ember`, `rime`, `storm`, `void`];
function sw(e, t, n, r, i, a, o, s = !1) {
  let c = 4 + r * 4,
    l = 3 + r * 2.5;
  if (
    (fm(
      e,
      [
        [t, n - c],
        [t + l, n],
        [t, n + c],
        [t - l, n],
      ],
      a[2],
    ),
    fm(
      e,
      [
        [t, n - c],
        [t + l, n],
        [t, n],
      ],
      a[3],
    ),
    fm(
      e,
      [
        [t, n],
        [t - l, n],
        [t, n + c],
      ],
      a[1],
    ),
    r > 0.3)
  )
    for (let r = -2; r <= 2; r++)
      (s && (r + o) % 2) ||
        z(e, t - l * 0.6, n + r * 2, t + l * 0.6, n + r * 2 - 1, a[4]);
  N(e, t - 0.5, n - 0.5, a[4], 2, 2);
  let u = r * 4,
    d = (r, i) => {
      let a = t + r * (2 + u) - (r < 0 ? 5 : 0),
        o = n + i * (2 + u) - (i < 0 ? 5 : 0);
      (N(e, a, o, aw[1], 5, 5),
        N(e, a, o, aw[2], 5, 1),
        N(e, r < 0 ? a + 4 : a, o, aw[3], 1, 5));
    };
  if ((r < 1 && (d(-1, -1), d(1, -1), d(-1, 1), d(1, 1)), i > 0))
    for (let r = 0; r < 14; r++) {
      let o = L(r, 7) * Math.PI * 2,
        s = (1 - i) * 11 + L(r, 8) * 3;
      N(e, t + Math.cos(o) * s, n + Math.sin(o) * s, r % 3 ? a[3] : a[4]);
    }
}
function cw(e, t, n, r, i, a, o, s, c) {
  for (let l = 0; l < r; l++) {
    let u = a + (l / r) * Math.PI * 2,
      d = Math.cos(u),
      f = Math.sin(u),
      p = i * (0.45 + 0.55 * sm(o));
    dm(
      e,
      t + d * 6,
      n + f * 6,
      t + d * p,
      n + f * p,
      o > 0.66 ? s[3] : s[2],
      3,
      2,
      -c * 2,
    );
    for (let r = 10; r < p; r += 8) {
      let i = t + d * r,
        a = n + f * r,
        o = r % 16 == 2 ? 2 : 1;
      z(e, i - f * o, a + d * o, i + f * o, a - d * o, s[1]);
    }
  }
}
function lw(e, t, n, r, i, a, o, s, c, l, u = {}) {
  let d = u.from ?? 0;
  for (let f = 0; f < r; f++) {
    let p = a + (f / r) * Math.PI * 2;
    gm(
      e,
      t + Math.cos(p) * d,
      n + Math.sin(p) * d,
      t + Math.cos(p) * i,
      n + Math.sin(p) * i,
      o,
      s,
      c + f,
      { k: l, facets: u.facets, jitter: u.jitter },
    );
  }
}
function uw(e, t, n, r, i, a) {
  let o = r / 3;
  (P(e, t, n, 3.5 - o * 2, 3.5 - o * 2, i[3]),
    N(e, t - 1, n - 1, i[4], 2, 2),
    V(e, t, n, 5, 4 + r * 1.5, i, a + r, r * 0.4),
    _m(e, t, n, 0.3 + o * 0.6, 8, 7, i, a));
}
