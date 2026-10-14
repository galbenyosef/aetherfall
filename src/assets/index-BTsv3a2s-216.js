// index-BTsv3a2s 216 — dir
// Lines 138941-139252 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function G$(e) {
  let t = H$.find((t) => t.id === e);
  if (!t) throw Error(`townsfolk: no mind for ${e}`);
  return { name: t.name, title: t.title };
}
var K$ = [
  {
    id: `archmage`,
    kind: `archmage`,
    ...G$(`archmage`),
    color: `#ffd166`,
    lines: [
      `Aldmere sends its regards. Only its regards.`,
      `The Conclave is watching Marizon with great interest.`,
      `Your Ward is thin on the east side. I've noted it.`,
    ],
    stops: [{ x: -8.75, y: 7.7, wait: 8, dir: 0, act: !0 }],
    habit: { frames: [6], fps: 1 },
  },
  {
    id: `refugee-a`,
    kind: `refugee`,
    ...G$(`refugee-a`),
    color: `#c9b79a`,
    lines: [
      `We ran from our own dead.`,
      `My mother's still in Highmore. She walks the Gilded Hall at night.`,
      `They say the husks follow the light. Is that true?`,
    ],
    stops: [{ x: -19.5, y: 24.2, wait: 1, dir: 0 }],
  },
  {
    id: `refugee-b`,
    kind: `refugee`,
    n: 1,
    ...G$(`refugee-b`),
    color: `#c9b79a`,
    lines: [
      `The Highmore guard held the Hall gates to the end. Some of them still do.`,
      `Don't go southwest after dark.`,
    ],
    stops: [{ x: -18.2, y: 25, wait: 1, dir: 3 }],
  },
  {
    id: `refugee-c`,
    kind: `refugee`,
    n: 2,
    ...G$(`refugee-c`),
    color: `#c9b79a`,
    lines: [`Is there bread? Anyone?`, `We walked two nights to get here.`],
    stops: [
      { x: -14, y: 24.4, wait: 6, dir: 0 },
      { x: -6.5, y: 24.4, wait: 5, dir: 1 },
      { x: -10, y: 25.5, wait: 7, dir: 0 },
    ],
    speed: 1.2,
    phase: 11,
  },
  {
    id: `miner-a`,
    kind: `miner`,
    ...G$(`miner-a`),
    color: `#ffcf6a`,
    lines: [
      `Slatebridge opened its gates. I didn't.`,
      `Mother Hessa promised no one would be forgotten. She meant it. That's the trouble.`,
    ],
    stops: [{ x: 24.2, y: 2.5, wait: 1, dir: 2 }],
    lamp: { dx: 11, dy: -24, r: 16, color: `#ffcf6a`, a: 0.7 },
  },
  {
    id: `miner-b`,
    kind: `miner`,
    n: 1,
    ...G$(`miner-b`),
    color: `#ffcf6a`,
    lines: [
      `The crawlers are coming up out of the old workings.`,
      `Keep your lamp lit. The Faithful's burn red now.`,
    ],
    stops: [{ x: 26.2, y: 2.5, wait: 1, dir: 3 }],
    lamp: { dx: 6, dy: -24, r: 16, color: `#ffcf6a`, a: 0.7 },
  },
  {
    id: `forgewright`,
    kind: `forgewright`,
    ...G$(`forgewright`),
    color: `#e0a060`,
    lines: [
      `Ward-stones? Aurek designed half of them. Think on that.`,
      `Staves, ward-stones, hinges. Mostly ward-stones, lately.`,
    ],
    stops: [{ x: 24, y: -8.4, wait: 1, dir: 3, act: !0 }],
    habit: { frames: [0, 6], fps: 1.6 },
  },
  {
    id: `baker`,
    kind: `baker`,
    ...G$(`baker`),
    color: `#f0e0c0`,
    lines: [
      `Fresh bread, while the Ward holds.`,
      `Half-price for refugees. Don't tell the Watch.`,
    ],
    stops: [{ x: 4.5, y: 23.8, wait: 1, dir: 0, act: !0 }],
    habit: { frames: [0, 6, 0, 6, 0, 0], fps: 1.5 },
  },
  {
    id: `sweeper`,
    kind: `sweeper`,
    ...G$(`sweeper`),
    color: `#b9b3c7`,
    lines: [
      `Ash in the gutters again. It blows up from Cindergate.`,
      `Mind the step. I've just done it.`,
    ],
    stops: [
      { x: 0.5, y: 25, wait: 3, dir: 0, act: !0 },
      { x: 0.5, y: 33, wait: 5, dir: 0, act: !0 },
      { x: -0.5, y: 42, wait: 5, dir: 0, act: !0 },
      { x: 0.5, y: 33, wait: 2, dir: 1 },
    ],
    speed: 1,
    habit: { frames: [6, 0], fps: 2 },
  },
  {
    id: `crier`,
    kind: `crier`,
    ...G$(`crier`),
    color: `#e0b64a`,
    lines: [
      `Hear ye! The Ward holds! Stay inside the light after dark!`,
      `Hear ye! Five towns have fallen! Marizon stands!`,
      `Hear ye! Refugees to the south market, by order of the Circle!`,
    ],
    stops: [{ x: -2.4, y: 20.6, wait: 1, dir: 0, act: !0 }],
    habit: { frames: [6, 1, 6, 1, 0, 0, 0, 0], fps: 3 },
    hear: 9,
  },
  {
    id: `ninette`,
    kind: `girl`,
    ...G$(`ninette`),
    color: `#f0d8c0`,
    lines: [
      `Rye or wheat! ...Mum, nobody's buying.`,
      `Pell let me trim the Watch's wicks. Said I had steady hands.`,
    ],
    stops: [{ x: 5.6, y: 24.2, wait: 1, dir: 0 }],
    small: 0.9,
  },
  {
    id: `pip`,
    kind: `boy`,
    ...G$(`pip`),
    color: `#d8e0b0`,
    lines: [
      `Have you seen a grey cat? She's called Ember.`,
      `Fwoosh! That's a fireball. I'm practising.`,
    ],
    stops: [
      { x: 1.2, y: 33, wait: 6, dir: 0 },
      { x: 1.5, y: 19, wait: 8, dir: 1 },
    ],
    speed: 1.4,
    phase: 7,
    small: 0.72,
  },
  {
    id: `selva`,
    kind: `delver`,
    ...G$(`selva`),
    color: `#e0a060`,
    lines: [
      `Need something hit? I've a hammer and a free afternoon.`,
      `Brassdeep's three weeks up the east road. Nobody's come down it since spring.`,
    ],
    stops: [{ x: 25.4, y: -7.6, wait: 1, dir: 3 }],
  },
  {
    id: `wenna`,
    kind: `seamstress`,
    ...G$(`wenna`),
    color: `#b9c4d6`,
    lines: [
      `Quivers for the Watch. Strings for the Marksmen.`,
      `A mage. Of course. Excuse me.`,
    ],
    stops: [{ x: -30, y: 1.8, wait: 1, dir: 0 }],
  },
  {
    id: `gil`,
    kind: `fletcher`,
    ...G$(`gil`),
    color: `#c9d6a0`,
    lines: [
      `Straight shafts, goose fletching. They fly true. Most things don't.`,
      `Hold still. You're in my light.`,
    ],
    stops: [{ x: -29, y: 1.8, wait: 1, dir: 0 }],
  },
  {
    id: `bess`,
    kind: `girl`,
    n: 1,
    ...G$(`bess`),
    color: `#c9b79a`,
    lines: [
      `Hold still. I'm drawing you.`,
      `They're only sleeping. The ones at the edge.`,
    ],
    stops: [{ x: -17.4, y: 24.8, wait: 1, dir: 0 }],
    small: 0.8,
  },
  {
    id: `idris`,
    kind: `idrisRemembered`,
    name: `Idris, Remembered`,
    color: `#8ef6ff`,
    lines: [`The Crystal remembers you.`, `Rise, mage.`],
    stops: [{ x: Mr - Ar - 1.4, y: Nr - jr + 1.8, wait: 1, dir: 0 }],
    echo: !0,
  },
  ...q$(),
];
function q$() {
  let e = (e, t) => {
    let n = E$[e];
    return { x: n.at[0] / 2, y: n.at[1] / 2, wait: t, dir: n.dir };
  };
  return D$.map((t) => {
    let n = H$.find((e) => e.id === t.id),
      r = t.round && R$.find((e) => e.id === t.round),
      i =
        r && `route` in r
          ? [...r.route.map((t) => e(t, 0.5)), e(r.at, 8)]
          : [e(t.post, 1)];
    return {
      id: t.id,
      ...G$(t.id),
      color: t.rank === `vigilant` ? `#f5d66b` : `#d8c49a`,
      lines: [
        t.says,
        ...n.lines
          .filter(
            (e) =>
              !e.id.startsWith(`watch`) &&
              !e.acts &&
              !e.minStanding &&
              !e.maxStanding &&
              e.talk !== !1 &&
              !e.reply,
          )
          .slice(2, 4)
          .map((e) => e.text),
      ],
      stops: i,
      speed: n.speed,
      watch: { rank: t.rank, tone: t.tone, hair: t.hair },
    };
  });
}
function J$(e, t) {
  let n = e.path,
    r = n[n.length - 1],
    i = (e, t) => (Math.abs(e) > Math.abs(t) ? (e > 0 ? 2 : 3) : +(t < 0)),
    a = e.dir < 0 ? 0 : e.dir;
  if (n.length < 2 || e.speed <= 0 || t >= e.arrive) {
    if (e.dir < 0 && n.length > 1) {
      let e = n[n.length - 2];
      a = i(r[0] - e[0], r[1] - e[1]);
    }
    return { x: r[0], y: r[1], moving: !1, dir: a };
  }
  if (t <= e.t0)
    return {
      x: n[0][0],
      y: n[0][1],
      moving: !1,
      dir: i(n[1][0] - n[0][0], n[1][1] - n[0][1]),
    };
  let o = ((t - e.t0) / 1e3) * e.speed;
  for (let e = 1; e < n.length; e++) {
    let [t, r] = n[e - 1],
      a = n[e][0] - t,
      s = n[e][1] - r,
      c = Math.hypot(a, s);
    if (o <= c && c > 0)
      return {
        x: t + (a * o) / c,
        y: r + (s * o) / c,
        moving: !0,
        dir: i(a, s),
      };
    o -= c;
  }
  return { x: r[0], y: r[1], moving: !1, dir: a };
}
var Y$ = (e) => (e < 0 ? 3 : 2);
function X$(e) {
  let t = e.speed ?? 1.2,
    n = [],
    r = 0;
  return (
    e.stops.forEach((i, a) => {
      let o = e.stops[(a - 1 + e.stops.length) % e.stops.length],
        s = e.stops.length > 1 ? Math.hypot(i.x - o.x, i.y - o.y) / t : 0;
      (n.push({ from: o, to: i, walk: s, t0: r }), (r += s + i.wait));
    }),
    { legs: n, period: Math.max(1, r) }
  );
}
