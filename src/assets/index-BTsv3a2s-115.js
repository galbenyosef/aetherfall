// index-BTsv3a2s 115 — the
// Lines 54076-54405 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var kk = (e, t, n = {}) => ({
    label: e,
    frames: t,
    ...n,
    caps: n.caps?.map((e, t) => e || `${t + 1}`),
  }),
  fre = [
    {
      id: `lillith`,
      name: `Lillith Highmore`,
      title: `The First Key`,
      page: `lillith`,
      lore: `The only Key who earned her power: a Might Mage, four tones, and her hair shows which. She has fed on other people since the spring siege, and since the night Idris beat her, half an Unmaking has been eating her from inside; only their lives keep it quiet. Her blood magic is the Siphon made liquid: other people's lives, drawn out along a thread and thrown back.`,
      meta: `Final boss · the Gilded Folly, the Weaving Hall · level 25 · 18,050 health for five`,
      palette: [K[0], K[1], K[2], K[3], K[4], PO[3], FO, IO[3]],
      source: `attackFx/lillith.ts · LILLITH[0]`,
      portrait: () => Zh(`hollow`)[2],
      moves: [
        {
          id: `needles`,
          name: `Sanguine Needles`,
          tier: `basic`,
          form: `spread`,
          windup: 0.5,
          lore: `What the Siphon draws, she can throw back. Five drops bead on her fingertips and harden into needles in the air, white-hot at the point.`,
          read: `Her hand comes up, five drops bead on it and five faint beaded lines show the fan, 0.5 s. Five needles over 50°, 8 tiles a second, 7% each. Step between the lines or out of the fan. Close in, the gaps are too narrow to use.`,
          kit: `Replaces her tone bolt (Lillith.move(): about one every 2 s, 7%) in every phase: the blood is always there. Spread form, 5 needles, same damage each.`,
          strips: () => [
            kk(`Bead`, Rne(), {
              caps: [`call`, `call`, `bead`, `harden`, `harden`, `flick`],
              anchor: `her raised hand (cast frame): feet + (6, -33)`,
            }),
            kk(`Needle`, zne(), {
              note: `Rotate to heading; the thread trails behind`,
            }),
            kk(`Volley`, Bne(), {
              caps: [`read`, `read`, `flick`, ``, ``, ``],
              note: `The whole fan, 50°`,
            }),
            kk(`Hit`, Vne(), {
              note: `On a player or a wall; the splat lasts 2 s`,
            }),
          ],
        },
        {
          id: `siphon`,
          name: `Siphon Thread`,
          tier: `signature`,
          form: `tether`,
          windup: 1,
          lore: `The first Canticle, done to one person at a time: a thread from her hand into your chest, and your life runs back along it in beads. Drakkar taught her this one first, so she would always need him.`,
          read: `A dotted, beaded line runs from her hand to you for 1 s. Then the thread hooks in: for up to 4 s it drains 4% of your health a second and heals her 0.5% a second. It snaps if you get more than 6 tiles from her, if you Blink, or if someone else stands in it for 1 s, as with the Weaving Hall's threads.`,
          kit: `New form: tether. From 75%, every 14 s, on whoever hit her last. On Hollowed the beads are the Hollow motes: step into one before it reaches her and it doesn't heal her.`,
          strips: () => [
            kk(`Aim`, Hne(), {
              caps: [`read`, `read`, `cast`, `hook`, `drink`],
              note: `Her hand at the left, you at the right`,
            }),
            kk(
              `Thread`,
              ak(`lil-siphon-thread`, {
                w: 1,
                gap: 16,
                big: !1,
                hot: !0,
                speed: 4,
              }),
              {
                note: `32 px tile, loops along x; the beads run toward her (-x)`,
              },
            ),
            kk(`Hook`, ok(), { anchor: `the target's chest` }),
            kk(`Drink`, Une(), { anchor: `her raised hand` }),
            kk(`Snap`, Wne(), {
              caps: [`fray`, `snap`, ``, ``, ``, ``],
              note: `Out of range, a Blink, or cut`,
            }),
          ],
          scene: ore,
          sceneCap: `The Rimecaller runs for the edge of her reach; the Pyromancer has stepped into the thread to cut it.`,
        },
        {
          id: `heartbeat`,
          name: `Heartbeat`,
          tier: `special`,
          form: `ring`,
          windup: 1.2,
          lore: `Half a Canticle beats inside her like a second heart. When it beats hard enough, it beats out of her: two rings of blood, lub and dub.`,
          read: `She goes still and the floor under her pulses twice, 1.2 s; red ticks show where the first ring's orbs go, dark ticks the second's. Two rings of 16 orbs, 0.4 s apart, 10% each, 5 tiles a second. The second is offset half a gap, so the gap you slip through in the first is the path of an orb in the second. Step sideways between the beats, or stand far off, where the gaps are wide.`,
          kit: `New. Ring form, fired twice with the second turned 11.25°. From 75%, every 12 s.`,
          strips: () => [
            kk(`Pulse`, Gne(), {
              caps: [``, ``, `lub`, ``, `dub`, `out`],
              anchor: `her chest: feet + (1, -25)`,
            }),
            kk(`Orb`, sk(), {
              note: `It beats as it flies; rotate to heading`,
            }),
            kk(`Pop`, qne(), { note: `On a hit or at 9 tiles` }),
            kk(`Beats`, Kne(), {
              caps: [`read`, `read`, `lub`, ``, `dub`, ``, ``, ``],
              note: `The whole move, radial: the dub comes down the lub's gaps`,
              scale: 2,
            }),
          ],
          scene: sre,
          sceneCap: `The Stormcaller slipped through the lub. The dub is coming down the same line.`,
        },
        {
          id: `hemorrhage`,
          name: `Hemorrhage Rain`,
          tier: `special`,
          form: `rain`,
          windup: 1.4,
          lore: `She pulls threads taut across the hall over your heads and cuts them. What they were carrying comes down.`,
          read: `Drips spot the floor and a 1.2-tile circle is written under each player and at two more places, filling for 1.4 s. Then the drop: 12% and a splash. Each leaves a pool for 6 s that slows you by 40%. Get out before the fill reaches the rim, and don't fight from inside a pool.`,
          kit: `New. Rain form for the drops, then zone for the pools (5 circles, 1.2 tiles). From 45% (Where the ward is thin), every 15 s.`,
          strips: () => [
            kk(`Drips`, dk(), {
              caps: [`1.4 s`, ``, ``, ``, ``, `now`],
              note: `Telegraph: the circle is written clockwise`,
            }),
            kk(`Drop`, fk(), { note: `Falls 2 tiles in 0.25 s` }),
            kk(`Splash`, pk()),
            kk(`Pool`, mk(), { note: `Zone, 6 s, loops` }),
          ],
          scene: cre,
          sceneCap: `One landing, one falling, one forming. The Rimecaller is stuck in an old pool.`,
        },
        {
          id: `veilstep`,
          name: `Veil Step`,
          tier: `special`,
          form: `blink`,
          windup: 0.8,
          lore: `The Void door, the way she opens it now: she comes apart into blood and mist and pours herself back together across the hall. What she leaves behind keeps turning, and pulls.`,
          read: `Red cracks run through her and a 1-tile circle marks her spot, 0.8 s. She's gone (12% if you're in the circle) and re-forms at least 5 tiles from you, and a vortex pulls everyone within 5 tiles toward it at 1.3 tiles a second for 4 s. Walk out at an angle. She does the same, without the wind-up, if you get within 2.5 tiles.`,
          kit: `Was Veil Step (a void rift). Same numbers; the rift becomes a blood vortex, and the Blink comes apart in blood instead of a void flash.`,
          strips: () => [
            kk(`Comes apart`, Jne(), {
              caps: [`cracks`, ``, ``, ``, ``, `gone`],
              note: `Her sprite (hollow, idle) dissolving from the hem up`,
            }),
            kk(`Re-forms`, Yne(), {
              caps: [``, ``, ``, ``, ``, `back`],
              note: `The same, backwards, at least 5 tiles from you`,
            }),
            kk(`Vortex`, hk(), {
              caps: [`0.8 s`, ``, `burst`, `pull`, ``, ``, ``, `4 s`],
              note: `Where she stood; 1-tile burst, then the pull`,
            }),
          ],
          scene: lre,
          sceneCap: `Back together across the hall. The Pyromancer is being dragged into what she left.`,
        },
        {
          id: `drink`,
          name: `Drink the Circle`,
          tier: `phase`,
          form: `phase`,
          windup: 2,
          lore: `The Siphoned kneel at the five points of the great circle under her, and their threads run up into her. Every 20 s she drinks. She tells herself keeping them alive makes her better than the Keys who burn people. She knows it doesn't.`,
          read: `75-15%, every 20 s. The circle lights round the rim and down the star over 2 s and the five threads brighten. She heals 3% for every thread still whole. Stand in a thread for 1 s to cut it (a gold bar fills over its villager); they slump free, alive. A thread still whole on her fourth drink runs dry, and that villager is lost. About a minute for all five.`,
          kit: `As in dungeons.ts (drink: 2 s, every 20 s; RESCUE: 3% a thread, 1 s to cut, the fourth drink drains). These are the effects for the circle waking, drawSiphonThread's drink glow, the cut and the run-dry.`,
          strips: () => [
            kk(`The circle wakes`, Xne(), {
              caps: [``, `rim`, ``, `star`, `points`, `drink`],
              note: `The great circle under her; her heart above its centre`,
              scale: 2,
            }),
            kk(`Drinking thread`, Zne(), {
              note: `32 px tile while she drinks: thicker and hotter; play it 3x as fast (drawSiphonThread's drink glow)`,
            }),
            kk(`Heal`, $ne(), {
              caps: [``, ``, ``, `+3% each`, ``, ``],
              anchor: `her chest`,
            }),
            kk(`Cut`, ere(), {
              caps: [`0.25 s`, `0.5`, `0.75`, `1 s`, `free`, ``],
              note: `Kneeler at bottom left, her at top right`,
            }),
            kk(`Runs dry`, tre(), {
              caps: [`4th drink`, ``, `dry`, ``, `lost`],
            }),
          ],
          scene: ure,
          sceneCap: `Her second drink. One thread is cut and that villager is free; the Stormcaller is standing in another.`,
        },
        {
          id: `unmaking`,
          name: `The Unmaking`,
          tier: `ultimate`,
          form: `phase`,
          windup: 10,
          lore: `The fourth Forbidden Canticle, the one she turned on Idris. The Ember of Marizon is his voice, carried down for you, and she writes the Canticle on it in blood, to take your rises out of the crystal's memory for good.`,
          read: `At 15% a sigil is written under the party and a white-hot line closes round it clockwise over 10 s, one tally mark struck a second. Deal 15% of her health in those 10 s and it breaks. If it closes, a pillar comes down on the Ember: it loses two rises and everyone takes half their health. On Hollowed, with the Ember spent, it kills.`,
          kit: `As in dungeons.ts (10 s, break it with 15%). New art for the sigil (was dungeonSprites.unmakingSigil), the break, the pillar and the deletion.`,
          strips: () => [
            kk(`Sigil`, nre(), {
              caps: [`0 s`, `1.4`, `2.9`, `4.3`, `5.7`, `7.1`, `8.6`, `10 s`],
              note: `Ground, under the party; 3 tiles`,
              scale: 2,
            }),
            kk(`Broken`, rre(), {
              caps: [`15% dealt`, ``, ``, ``, ``, ``],
              scale: 2,
            }),
            kk(`Pillar`, ire(), {
              caps: [`closed`, ``, ``, ``, ``, ``],
              note: `If it lands: on the Ember`,
            }),
            kk(`Unmade`, are(), {
              caps: [``, ``, ``, ``, ``, ``, ``, ``],
              note: `A rise, deleted: what the crystal remembered comes apart in squares, not drops`,
            }),
          ],
          scene: dre,
          sceneCap: `It closed. Two rises of the Ember come apart in squares.`,
        },
      ],
    },
    ...nw,
    ...Hw,
    ...Pne,
    ...$te,
  ],
  Ak = Object.fromEntries(fre.map((e) => [e.id, e])),
  jk = 16,
  Mk = Math.PI * 2,
  Nk = new Map(),
  Pk = new WeakMap(),
  Fk = new WeakMap();
function Ik(e, t) {
  let n = Fk.get(e);
  return (n !== void 0 && Fk.set(t, n), t);
}
function pre(e) {
  let t = Pk.get(e);
  if (t) return t;
  let n = Xp(e, `loop`, `idle`),
    { fw: r, fh: i, ax: a, ay: o } = e.meta,
    s = a - Math.floor(r / 2),
    c = o - Math.floor(i / 2);
  return (
    (t =
      !s && !c
        ? n.frames.slice()
        : n.frames.map((e) => {
            let [t, n] = M(r + 2 * Math.abs(s), i + 2 * Math.abs(c));
            return (n.drawImage(e, Math.abs(s) - s, Math.abs(c) - c), t);
          })),
    Fk.set(t, n.fps),
    Pk.set(e, t),
    t
  );
}
function Lk(e, t, n) {
  let r = `${e}/${t}/${n}`,
    i = Yp(`fx`, r);
  if (i) return pre(i);
  let a = Nk.get(r);
  return a === void 0
    ? ((a =
        Ak[e]?.moves
          .find((e) => e.id === t)
          ?.strips()
          .find((e) => e.label === n)?.frames ?? null),
      Nk.set(r, a),
      a)
    : a;
}
function Rk(e, t) {
  return e[Math.max(0, Math.min(e.length - 1, Math.floor(t * e.length)))];
}
function zk(e, t, n = 10) {
  return ((n = Fk.get(e) ?? n), e[Math.floor(Math.max(0, t) * n) % e.length]);
}
function Bk(e, t, n, r, i = {}) {
  let a = Ap(t),
    o = i.ax ?? t.width / a / 2,
    s = i.ay ?? t.height / a / 2,
    c = Math.round(n - o),
    l = Math.round(r - s),
    u = () =>
      a === 1
        ? e.drawImage(t, c, l)
        : e.drawImage(t, c, l, t.width / a, t.height / a);
  i.alpha !== void 0 || i.add
    ? (e.save(),
      i.alpha !== void 0 && (e.globalAlpha = Math.max(0, Math.min(1, i.alpha))),
      i.add && (e.globalCompositeOperation = `lighter`),
      u(),
      e.restore())
    : u();
}
var Vk = new WeakMap(),
  Hk = 32;
function Uk(e, t, n, r, i, a = {}) {
  let o = ((Math.round((i / Mk) * Hk) % Hk) + Hk) % Hk,
    s = Vk.get(t);
  s || Vk.set(t, (s = []));
  let c = s[o];
  (c || (s[o] = c = o === 0 ? t : jp(um(t, (o / Hk) * Mk), Ap(t))),
    Bk(e, c, n, r, a));
}
function Wk(e, t, n, r, i, a, o, s = {}) {
  let c = Math.hypot(a - r, o - i);
  if (c < 1) return;
  let l = zk(t, n, s.fps ?? 14);
  (e.save(),
    (e.imageSmoothingEnabled = !1),
    s.alpha !== void 0 && (e.globalAlpha = Math.max(0, Math.min(1, s.alpha))),
    e.translate(Math.round(r), Math.round(i)),
    e.rotate(Math.atan2(o - i, a - r)));
  let u = s.widthK ?? 1;
  u !== 1 && e.scale(1, u);
  for (let t = 0; t < c; t += l.width) {
    let n = Math.min(l.width, c - t);
    e.drawImage(l, 0, 0, n, l.height, t, -l.height / 2, n, l.height);
  }
  e.restore();
}
function Gk(e, t, n, r, i, a = 0.5) {
  let o = Bp(i, r);
  (e.save(),
    (e.globalCompositeOperation = `lighter`),
    (e.globalAlpha = a),
    e.drawImage(o, Math.round(t - o.width / 2), Math.round(n - o.height / 2)),
    e.restore());
}
