// assets__index-BTsv3a2s 98 — math
// Lines 49549-49853 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var UE = [
    PT,
    uE,
    {
      id: `hessa`,
      name: `Mother Hessa`,
      title: `The Grey Pilgrim`,
      page: `keys`,
      lore: `A hedge-witch whose spark was too small for any school. She buried her children in the Carthis catacombs during the Grey Fever, and watched them get back up. Now she preaches Drakkar's promise in the mining towns. Her lantern holds a Hollowed shard: it keeps Slatebridge's husks docile, and it drinks from the people who follow her.`,
      meta: `Key · Level 21 world boss · incursions from the Stormcrown road (east) · Slatebridge arc`,
      palette: [pg.hessa, dE[2], dE[3], pE[2], mE[2], fE[2], fE[3], Uw[3]],
      source: `attackFx/keys1.ts · KEYS_1[2]`,
      portrait: () => xg(`hessa`)[0],
      moves: [
        {
          id: `crook`,
          name: `Crook`,
          tier: `basic`,
          form: `swing`,
          windup: 0.6,
          lore: `A crooked staff swung like a shepherd's. The lantern swings with it, and its light goes grey behind it.`,
          read: `130° cone, 2.4 tiles, 0.6 s. The dust it leaves is cosmetic.`,
          kit: `Was Cleave (KEY_KIT). Same numbers.`,
          strips: () => [
            Gw(`Swing arc`, bE(), {
              note: `Facing right; light at the lead, dust behind`,
              anchor: `Hessa's feet + (10, -22)`,
            }),
            Gw(`Dust curl`, xE(), { note: `Left where the trail ends` }),
          ],
        },
        {
          id: `volley`,
          name: `Lantern Volley`,
          tier: `special`,
          form: `ring`,
          windup: 0.8,
          lore: `She lifts the lantern and it lets go of some of what it holds: sixteen motes of grey-gold light, each with a red pinpoint where the shard shows through.`,
          read: `The lantern flares for 0.8 s, then 16 motes go out in every direction at 5 tiles a second. They are slow: find a gap and walk through it.`,
          kit: `Was Volley (ring ×16, speed 5). Same numbers; the bolts are lantern motes.`,
          strips: () => [
            Gw(`Flare`, SE(), {
              caps: [``, ``, `shafts`, `release`, ``],
              note: `Sprite scale, the raised lantern`,
              anchor: `cell (12, 10) on the lantern's top bar, cast-frame sprite (22, 3)`,
            }),
            Gw(`Mote`, CE(), { note: `Flies right; light, no outline` }),
            Gw(`Gutter`, wE(), { note: `When a mote hits or runs out` }),
            Gw(`Volley`, TE(), {
              caps: [`gather`, `born`, ``, ``, ``, ``, ``, ``],
              note: `Radial, 16 motes`,
              scale: 2,
            }),
          ],
        },
        {
          id: `tokens`,
          name: `Grave Tokens`,
          tier: `special`,
          form: `rain`,
          windup: 1,
          lore: `She throws the tokens off her cord, the four she carries for her children, and where each one lands, the dust of the Carthis catacombs comes up out of the ground. She picks them up again after.`,
          read: `Four cord-rimmed circles, r 1.2, round you; the tokens on each rim light as the fuse runs (1.0 s). Each bursts into catacomb dust that hangs for 3 s; inside it, health doesn't regenerate (it is the Grey Fever's dust). Stand between them.`,
          kit: `New. Rain ×4 (r 1.2, 1.0 s), each leaving a 3 s zone that stops health regeneration (like the Fever Ghouls' haze).`,
          strips: () => [
            Gw(`Token`, EE(), { note: `Thrown; tumbles, cord end trailing` }),
            Gw(`Telegraph`, DE(), {
              caps: [``, ``, ``, `lands`],
              note: `Cord rim with four tokens; r 1.2 tiles`,
            }),
            Gw(`Catacomb dust`, OE(), {
              caps: [`land`, `rise`, `column`, `settle`, `thin`, `lie`],
            }),
            Gw(`Dust zone`, kE(), {
              note: `Zone, 3 s, loops; no health regeneration inside`,
            }),
          ],
          scene: VE,
          sceneCap: `Two have burst; two are still coming down. The Voidweaver is in the middle of the four.`,
        },
        {
          id: `gaze`,
          name: `Lantern Gaze`,
          tier: `special`,
          form: `beam`,
          windup: 1.1,
          lore: `She holds the lantern up and turns it slowly, the way she walks the streets of Slatebridge at night. Whatever it lights, the husks look at.`,
          read: `A cord is laid on the ground where the light will start (1.1 s). Then a 40° cone of lantern light, 7 tiles long, turns 120° over 3 s; the cord always shows where it's going next. It does little damage, but anyone it touches is marked for 4 s and the husks within 10 tiles come for them. Stay behind the light.`,
          kit: `New form: beam (a cone, swept). Marks the target; husks within 10 tiles switch to it.`,
          strips: () => [
            Gw(`Gaze`, ME(), {
              caps: [
                `cord`,
                `light`,
                `turn`,
                `turn`,
                `turn`,
                `turn`,
                `turn`,
                `fade`,
              ],
              note: `Radial, turning clockwise; the cone is shortened to fit`,
              scale: 2,
            }),
            Gw(`Marked`, NE(), {
              note: `Over the head of anyone the light touched, 4 s`,
            }),
          ],
          scene: HE,
          sceneCap: `The Pyromancer is marked and the husks have turned; the Cryomancer is behind the light.`,
        },
        {
          id: `sermon`,
          name: `The Sermon`,
          tier: `signature`,
          form: `phase`,
          windup: 2,
          lore: `She preaches before she fights: that everyone will be remembered, that the dead are only waiting. While she speaks, the lantern pulses over the crowd and drinks from every one of her faithful through a thread they can't see, and the husks among them stand quiet.`,
          read: `At the start of the fight and at 50%: 8 s of preaching, no attacks. The lantern pulses every 2 s, a slow ring out to 3.5 tiles (light damage; step over it). Each Orc Warrior within 8 tiles is threaded to the lantern and heals her 1% of her health a second: talk it down, or stand on its thread to cut it. Or break the lantern (it has its own health): she can't heal again, but every husk nearby wakes and attacks anyone in reach, Faithful included.`,
          kit: `New forms: phase + tether (one per Faithful). The lantern is a breakable part; breaking it turns the husks hostile to everyone (codex hook).`,
          strips: () => [
            Gw(`Pulse`, FE(), {
              caps: [`flare`, ``, ``, ``, ``, `fade`],
              note: `Radial, from her feet, every 2 s`,
              scale: 2,
            }),
            Gw(`Thread`, LE(), {
              note: `The Siphon: 32 px tile, loops along x; flows toward +x (the lantern)`,
            }),
            Gw(`The lantern`, RE(), {
              caps: [`lit`, `drinks`, `struck`, `cracked`, `breaks`, `shard`],
              note: `Sprite scale, on her staff`,
              anchor: `cell (10, 8) on the lantern's top bar`,
            }),
            Gw(`The husks wake`, zE(), {
              caps: [`shard`, ``, ``, ``, ``, ``],
              note: `Radial, from the fallen shard`,
              scale: 2,
            }),
          ],
          scene: BE,
          sceneCap: `The Sermon. Four Faithful threaded to the lantern, the Goblins quiet among them. The Stormcaller has decided to break it.`,
        },
      ],
    },
  ],
  WE = rm.rime,
  GE = rm.hollow,
  KE = rm.bone,
  qE = rm.ash,
  JE = Math.PI * 2,
  YE = (e, t, n = {}) => ({ label: e, frames: t, ...n });
function XE(e, t, n, r, i, a, o, s = !1) {
  return R(e, t, n, r, (e, c) => {
    a && !s && a(e, c, t);
    let [l, u] = M(n, r);
    (i(u, c, t), F(l, o), e.drawImage(l, 0, 0), a && s && a(e, c, t));
  });
}
function ZE(e, t, n, r, i, a = 9) {
  let o = mg[t];
  return (
    Em(e, xg(t)[n], o.ax, o.ay, r, i, a),
    (e, t) => [r - o.ax + e, i - o.ay + t]
  );
}
function QE(e, t, n, r, i = 3, a = !1) {
  Em(e, dh(t).frames[i][a ? 6 : 0], 10, 26, n, r, 5);
}
function $E(e, t, n, r, i, a, o, s, c) {
  let l = -1.13,
    u = l + 2.27 * Math.min(1, (t + 1) / 2),
    d = am((t - 1) / (n - 2));
  return (
    pm(e, r, i, a, o, 1.15, (e, t) => {
      if (t < l || t > u) return null;
      let n = (t - l) / Math.max(0.01, u - l);
      return L(Math.round(t * 40), Math.round(e * 10), s) <
        d * 0.85 * (1 - n * 0.6)
        ? null
        : c(e, n);
    }),
    u
  );
}
function eD(e, t, n, r, i, a, o) {
  (e.save(), (e.globalAlpha = o), pm(e, t, n, r, i, 1.1, () => a), e.restore());
}
function tD(e, t, n) {
  let r = !1;
  for (let i = 0, a = e.length - 1; i < e.length; a = i++) {
    let [o, s] = e[i],
      [c, l] = e[a];
    s > n != l > n && t < ((c - o) * (n - s)) / (l - s) + o && (r = !r);
  }
  return r;
}
var nD = [`#1a2c48`, `#4a6f94`, `#8ec5e8`, `#bfe0f5`, `#ffffff`],
  rD = `#8ef6ff`,
  iD = `#0a1430`,
  aD = [GE[0], GE[1], GE[2], GE[3], GE[4]];
function oD(e, t, n, r, i, a) {
  (N(e, t - 1, n, r, 3, 1),
    N(e, t - 2, n + 1, r, 3, 1),
    N(e, t + 1, n - 4, i, 1, 4),
    a && N(e, t - 1, n, a));
}
function sD(e, t, n, r) {
  (N(e, t, n - 2, r),
    N(e, t + 1, n - 1, r),
    N(e, t, n, r),
    N(e, t + 1, n + 1, r),
    N(e, t, n + 2, r, 2, 1));
}
function cD(e, t, n, r, i) {
  (N(e, t - 1, n - 1, r[3], 4, 1),
    N(e, t - 2, n, r[3], 5, 1),
    N(e, t - 3, n + 1, r[2], 5, 1),
    N(e, t - 2, n + 2, r[1], 3, 1),
    N(e, t + 1, n + 1, r[1]),
    N(e, t - 1, n, r[4]),
    N(e, t + 2, n - 9, r[3], 1, 9),
    N(e, t + 2, n - 9, r[4]),
    i >= 0 &&
      (N(e, t + 3, n - 8, r[3]),
      N(e, t + 4, n - 7, r[3]),
      N(e, t + 4 + i, n - 6, r[2]),
      N(e, t + 4 + i, n - 5, r[2]),
      N(e, t + 3 + i, n - 4, r[2])));
}
function lD(e, t, n, r, i, a, o, s, c) {
  let l = 0.9 * (1 - i * 0.7);
  for (let i = Math.floor(n - r); i <= Math.ceil(n + r); i++)
    for (let u = Math.floor(t - r); u <= Math.ceil(t + r); u++) {
      let d = Math.hypot((u + 0.5 - t) / r, (i + 0.5 - n) / (r * 0.8));
      if (d > 1 || L(u, i, a) > l * (1.1 - d)) continue;
      let f = (i - n) / r;
      N(e, u, i, f < -0.4 ? o : f < 0.25 ? s : c);
    }
}
function uD(e, t, n) {
  (N(e, t, n, `#9cc0e0`, 3, 3),
    N(e, t, n + 1, nD[1]),
    N(e, t + 2, n + 1, nD[1]),
    N(e, t + 1, n + 2, nD[1]));
}
function dD(e, t, n, r) {
  (N(e, t - 2, n, r, 5, 1),
    N(e, t, n - 2, r, 1, 5),
    N(e, t - 1, n - 1, r),
    N(e, t + 1, n - 1, r),
    N(e, t - 1, n + 1, r),
    N(e, t + 1, n + 1, r));
}
function fD(e, t, n, r, i, a) {
  r < 1.5 ||
    (fm(
      e,
      [
        [t - i / 2, n + 0.5],
        [t + 0.5, n - r],
        [t + 0.5, n + 0.5],
      ],
      a[3],
    ),
    fm(
      e,
      [
        [t + 0.5, n + 0.5],
        [t + 0.5, n - r],
        [t + i / 2 + 1, n + 0.5],
      ],
      a[2],
    ),
    N(e, Math.round(t - i / 2), Math.round(n), a[1], i + 1, 1),
    N(e, t, n - r + 1, a[4]),
    r > 6 && z(e, t - 1, n - r * 0.7, t - 1, n - r * 0.35, a[4]));
}
function pD(e, t, n, r, i, a) {
  for (let i of [-2, 0, 2])
    B(
      e,
      t,
      n,
      r + i,
      (r + i) / 1.1,
      i === 0 ? WE[2] : WE[1],
      (e) => Math.round(e * (r + i)) % 3 != 2,
    );
  let o = Math.max(5, Math.round(r / 3.2));
  for (let s = 0; s < o; s++) {
    let c = ((s + 0.5) / o) * JE - Math.PI / 2,
      l = [-2, 0, 2][Math.floor(L(s, a) * 3)],
      u = t + Math.cos(c) * (r + l),
      d = n + (Math.sin(c) * (r + l)) / 1.1,
      f = (s + 1) / o <= i + 0.001;
    oD(e, u, d, f ? WE[3] : nD[1], f ? WE[4] : nD[2], f ? WE[4] : void 0);
  }
}
function mD(e, t, n, r, i, a) {
  return [
    Math.round(e + 14 + ((t - e - 22) * r) / Math.max(1, i - 1)),
    n + 11 - Math.floor(L(r, a, 2) * 7) * 1.5,
  ];
}
