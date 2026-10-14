// assets__index-BTsv3a2s 90 — note
// Lines 46985-47332 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var Vw = (e, t, n = {}) => ({ label: e, frames: t, ...n }),
  Hw = [
    {
      id: `golem`,
      name: `Stone Golem`,
      title: `Warden of the road to the Seam`,
      page: `golems`,
      lore: `Built by the early schools around 120 SV and still at its post. Its core is the one place the machine shows through: the light inside is too straight, the facets repeat, and when it fires, the beams tick like a ruler.`,
      meta: `Level 10 boss · the Glade and the north road`,
      palette: [aw[1], aw[2], aw[3], rw[1], rw[2], rw[3], rw[4]],
      source: `attackFx/golems.ts · GOLEMS[0]`,
      portrait: () => xh(`golem`).frames[0],
      moves: [
        {
          id: `crush`,
          name: `Crush`,
          tier: `basic`,
          form: `swing`,
          windup: 0.7,
          lore: `A stone fist, slow and sure. Crystal grit flies off the knuckles where the Aether seeps through the cracks.`,
          read: `120° cone, 2.6 tiles. The fist rises for 0.7 s first. Step back or round it.`,
          strips: () => [
            Vw(`Swing arc`, fw(`ae`, rw), {
              note: `Facing right; flip for left`,
              anchor: `golem's feet + (10, -22)`,
            }),
            Vw(`Grit`, pw(`ae`, rw), { note: `Where the arc lands` }),
          ],
        },
        {
          id: `shardquake`,
          name: `Shard Quake`,
          tier: `special`,
          form: `ring`,
          windup: 1,
          lore: `It stamps, and the crystal in the ground answers: twelve shards skate out across the grass.`,
          read: `The ground cracks cyan under it for 1 s, then a ring of 12 shards. Find a gap or Blink through.`,
          kit: `Was Quake Ring (earth-brown bolts). Same numbers; the bolts become crystal shards.`,
          strips: () => [
            Vw(`Stamp`, mw(`ae`, rw), { note: `Ground, under the golem` }),
            Vw(`Shard`, hw(`ae`, rw), {
              note: `Tumbles as it flies; rotate to heading`,
            }),
            Vw(`Shatter`, gw(`ae`, rw)),
          ],
        },
        {
          id: `lattice`,
          name: `Prism Lattice`,
          tier: `signature`,
          form: `beam`,
          windup: 1.2,
          lore: `The chest plates slide apart and the core takes aim in every direction at once. Eight crystal lasers, as straight as anything in Ithra has ever been, turn slowly like the hand of a clock.`,
          read: `Survey lines with ruler ticks show all eight beams for 1.2 s. Stand in a gap: the beams sweep half a gap (22.5°) clockwise over 2 s, so walk with them.`,
          kit: `New form: beam ×8, swept. Replaces Quake Ring as the special; Shard Quake moves to the second special.`,
          strips: () => [
            Vw(`Core opens`, _w(`ae`, rw), {
              note: `Over the chest rune`,
              anchor: `sprite (18.5, 20)`,
            }),
            Vw(`Route`, vw(`ae`, 8, rw), {
              note: `Telegraph: the beams' paths`,
            }),
            Vw(`Beam`, yw(`ae`, rw, 9, 14, { facets: 8, jitter: 0.6 }), {
              note: `32 px tile, loops along x; facets scroll`,
            }),
            Vw(`Muzzle`, bw(`ae`, rw)),
            Vw(`Splash`, xw(`ae`, rw), { note: `Where a beam meets a wall` }),
            Vw(`Lattice`, Sw(`ae`, 8, rw, { facets: 8 }), {
              caps: [
                `route`,
                `route`,
                `fire`,
                `sweep`,
                `sweep`,
                `sweep`,
                `fade`,
                `out`,
              ],
              note: `The whole move, radial, 8 frames`,
              scale: 2,
            }),
          ],
          scene: Iw,
          sceneCap: `Mid-sweep in the Glade. The Stormcaller stands in a gap and walks with it.`,
        },
        {
          id: `facetweb`,
          name: `Facet Web`,
          tier: `special`,
          form: `rain`,
          windup: 1.1,
          lore: `It flings four prisms round you like survey stakes, then joins them with light. A route for something that isn't coming any more.`,
          read: `Four prisms land round you (rain points). 1.1 s later links fire prism to prism and from the core to the nearest. Step out of the square before it closes; break a prism to open a side.`,
          kit: `New. Rain form for the prisms, beam form for the links.`,
          strips: () => [
            Vw(`Prism`, Cw(`ae`, rw), {
              caps: [`fall`, `fall`, `fall`, `land`, `hover`, `hover`],
            }),
            Vw(`Link`, ww(`ae`, rw), { note: `Thin beam, loops along x` }),
          ],
          scene: Lw,
          sceneCap: `The square is closing; one side is still a route.`,
        },
      ],
    },
    {
      id: `warden`,
      name: `Hollow Golem`,
      title: `Hollowed Stone Golem`,
      page: `golems`,
      lore: `A golem whose post fell inside the Labyrinth's lattice. Its runes burn white-hot and its lasers came back black-red, but its route still points north, toward the Seam, and the old cyan shows through when it fires that way.`,
      meta: `Level 28 world boss · the south-east road`,
      palette: [iw[0], iw[1], iw[2], iw[3], iw[4], rw[3]],
      source: `attackFx/golems.ts · GOLEMS[1]`,
      portrait: () => Vg(`golem`).frames[0],
      moves: [
        {
          id: `crush`,
          name: `Crush`,
          tier: `basic`,
          form: `swing`,
          windup: 0.75,
          lore: `The same fist, with the Hollow bleeding out of the cracks.`,
          read: `120° cone, 2.8 tiles.`,
          strips: () => [
            Vw(`Swing arc`, fw(`ho`, iw)),
            Vw(`Grit`, pw(`ho`, iw)),
          ],
        },
        {
          id: `fissure`,
          name: `Hollow Fissure`,
          tier: `special`,
          form: `zone`,
          windup: 1.1,
          lore: `It slams the ground open. Down there is the machine's reclamation, and it feeds the Warden while anyone stands near it.`,
          read: `A 3.2-tile circle with a fuse, 1.1 s. When it lands the cracks stay open: standing in one heals the Warden (motes drift to it).`,
          kit: `Was Hollow Fissure (slam). Adds the lasting zone and the feeding motes from the codex hook.`,
          strips: () => [
            Vw(`Fissure`, Tw(), {
              caps: [`fuse`, `fuse`, `fuse`, `open`, `feed`, `feed`],
              scale: 2,
            }),
            Vw(`Motes`, Ew(), {
              note: `Rise from open cracks, drift to the Warden`,
            }),
          ],
        },
        {
          id: `inverted`,
          name: `Inverted Lattice`,
          tier: `signature`,
          form: `beam`,
          windup: 1.2,
          lore: `The Prism Lattice, turned over to the Hollow. The facets are broken now, and the beams burn a split into the ground as they turn.`,
          read: `Like the Prism Lattice, but the scorch it leaves behind stays hot for 4 s: the gap you walked through is now a Hollow Fissure.`,
          kit: `New form: beam ×8, swept, leaves zone.`,
          strips: () => [
            Vw(`Core inverts`, _w(`ho`, iw, !0)),
            Vw(`Hollow beam`, yw(`ho`, iw, 9, 14, { jitter: 2.4 }), {
              note: `No facets: they're broken`,
            }),
            Vw(`Scorch`, Dw(), {
              caps: [`hot`, ``, ``, `cool`],
              note: `Left along each beam's path`,
            }),
            Vw(`Lattice`, Sw(`ho`, 8, iw, { jitter: 2.4 }), {
              caps: [
                `route`,
                `route`,
                `fire`,
                `sweep`,
                `sweep`,
                `sweep`,
                `fade`,
                `out`,
              ],
              scale: 2,
            }),
          ],
          scene: zw,
          sceneCap: `Every gap it has swept through is still burning.`,
        },
        {
          id: `routenorth`,
          name: `Route North`,
          tier: `ultimate`,
          form: `beam`,
          windup: 2,
          lore: `At a third of its health it remembers what it was for. It turns north and fires one beam, three tiles wide, at the Seam. The cyan of the old route breaks through the red as it goes.`,
          read: `Its whole body lights up for 2 s and a fan is drawn on the ground. The beam sweeps 30° either side of north over 3 s. Get south of it.`,
          kit: `New. A held, wide beam; once per fight at 33%.`,
          strips: () => [
            Vw(`Runes flare`, kw(), { note: `Its whole body, 2 s` }),
            Vw(`Seam beam`, Ow(), {
              note: `48 px tile, 24 px wide; the cyan is the old route`,
            }),
          ],
          scene: Rw,
          sceneCap: `Pointing at the Seam, three tiles wide.`,
        },
      ],
    },
    {
      id: `tutor`,
      name: `The Four-Handed Tutor`,
      title: `A training golem Idris built for one student`,
      page: `golems`,
      lore: `Four arms, four tones, and Lillith's height chalked on its shoulder every year from nine to nineteen. It still teaches the only lesson it knows: every tone is a door. It draws the lesson on the floor in chalk before it fires.`,
      meta: `Named · the Gilded Folly, by the seal`,
      palette: [
        im.ember[2],
        im.rime[2],
        im.storm[3],
        im.void[3],
        `#f0f0f0`,
        `#8a8296`,
      ],
      source: `attackFx/golems.ts · GOLEMS[2]`,
      portrait: () => Py(`tutor`).frames[0],
      moves: [
        {
          id: `knocks`,
          name: `Four Knocks`,
          tier: `basic`,
          form: `swing`,
          windup: 0.5,
          lore: `Knock on every door: four swings, one per arm, in the order Idris taught.`,
          read: `Four quick cones, alternating high and low, one tone each. The colour tells you which spell it will shrug off next.`,
          strips: () => [
            Vw(`Knock arcs`, Aw(), {
              caps: [`ember`, `rime`, `storm`, `void`],
            }),
          ],
        },
        {
          id: `chalk`,
          name: `Chalk Lesson`,
          tier: `special`,
          form: `beam`,
          windup: 1,
          lore: `It draws a line on the floor, the way it drew lines for her: stand here, aim there. Then it fires down the line.`,
          read: `The chalk line is the telegraph: it's drawn over 1 s, ending in a tick. A tone beam follows it. Don't stand on chalk.`,
          kit: `New. Beam ×1, aimed, along a drawn line.`,
          strips: () => [
            Vw(`Chalk line`, jw(), {
              note: `Drawn left to right; the tick means now`,
            }),
            Vw(`Tone beams`, Mw(), {
              caps: [`ember`, `rime`, `storm`, `void`],
              note: `Loop along x`,
            }),
          ],
        },
        {
          id: `doors`,
          name: `Four Doors`,
          tier: `signature`,
          form: `beam`,
          windup: 1.2,
          lore: `A cross of four beams from the sounding-stone in its chest, one per tone, turning a quarter turn.`,
          read: `Four chalk lines first. The cross turns 90° over 2.4 s; each arm is a different tone, so pick which door you stand next to.`,
          kit: `New form: beam ×4, swept.`,
          strips: () => [
            Vw(`Doors`, Nw(), {
              caps: [
                `chalk`,
                `fire`,
                `turn`,
                `turn`,
                `turn`,
                `turn`,
                `turn`,
                `fade`,
              ],
              scale: 2,
            }),
          ],
          scene: Bw,
          sceneCap: `Last turn's chalk still under its feet.`,
        },
      ],
    },
  ],
  Uw = rm.hollow,
  Ww = Math.PI * 2,
  Gw = (e, t, n = {}) => ({ label: e, frames: t, ...n });
function Kw(e, t, n, r, i = `#0a0406`) {
  let [a, o] = M(t, n);
  (r(o), F(a, i), e.drawImage(a, 0, 0));
}
function qw(e, t, n, r, i = 3, a = 0) {
  Em(e, dh(t).frames[i][a], 10, 26, n, r, 5);
}
function Jw(e, t, n, r, i, a) {
  let o = mg[t];
  return (
    Em(e, xg(t)[n], o.ax, o.ay, r, i, a),
    (e, t) => [r - o.ax + e, i - o.ay + t]
  );
}
var Yw = rm.slag,
  Xw = rm.ember,
  Zw = [`#0c080a`, `#150e12`, `#2a1f24`, `#4a3538`, `#6a5054`],
  Qw = [
    `#12050a`,
    `#5a0a1a`,
    `#c2361f`,
    `#ff7a1a`,
    `#ffb238`,
    `#ffe08a`,
    `#ffffff`,
  ],
  $w = [`#12050a`, `#5a0a1a`, `#c2361f`, `#ff7a1a`, `#ffffff`],
  eT = [`#050208`, `#12050a`, `#3a1a2a`, `#b01a2a`, `#ffffff`],
  tT = [Yw[0], $w[1], $w[2], Xw[3], Xw[4]],
  nT = [Yw[1], Yw[2], Yw[3], Yw[4], Yw[4]],
  rT = (e) => Qw[Math.max(0, Math.min(6, Math.floor(e * 6.99)))],
  iT = [`#2a1f24`, `#4a3538`, `#6e5450`, `#94766a`],
  aT = `#3e3438`;
function oT(e, t, n, r, i, a, o, s) {
  let c = a - Math.floor(a);
  if (c < 0.12 + o * 0.26) {
    let a = c < 0.05 + o * 0.13;
    (N(e, t, n, a ? Yw[4] : Yw[3]),
      N(e, t - r, n - i, o > 0.5 ? Yw[3] : Yw[2]),
      a && o > 0.6 && N(e, t + r, n + i, Yw[2]));
  } else
    (N(e, t, n, i < -0.35 || L(Math.floor(a), s, 2) > 0.7 ? iT[3] : iT[2]),
      N(e, t - r, n - i, Yw[2]),
      (L(Math.floor(a), s, 1) > 0.4 || c > 0.6) && N(e, t + r, n + i, iT[1]));
}
function sT(e, t, n) {
  return (r, i, a, o) => {
    let s = (i / Ww) * t + Math.sin(i * 3 + n) * 0.5;
    oT(r, a, o, Math.cos(i), Math.sin(i) / 1.1, s, e, n);
  };
}
function cT(e, t, n, r, i, a, o) {
  let s = Math.hypot(r - t, i - n),
    c = (r - t) / s,
    l = (i - n) / s;
  for (let r = 0; r <= s; r += 0.5) {
    let i = r / 7 + Math.sin(r * 0.4 + o) * 0.2;
    oT(e, t + c * r, n + l * r, l, -c, i, a, o);
  }
}
