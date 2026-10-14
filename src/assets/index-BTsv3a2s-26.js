// index-BTsv3a2s 26 — the
// Lines 25182-25529 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var _s = {
    unshackleS: 3,
    safeRadius: 4,
    cutS: 1,
    healPerThread: 0.03,
    drinksToDrain: 3,
  },
  vs = [
    `Arne of the Highmore Watch`,
    `Wenna Dray`,
    `Old Tam the drover`,
    `Coll Brisket`,
    `Sister Aude`,
    `Pim and Nell Farrow`,
    `Hobb the carter`,
    `Maud Selwyn`,
    `Ivo Highmore-gate`,
    `Rook the tinker`,
    `Jory Pell`,
    `Anselm the miner`,
    `Gret Ashby`,
    `Eda of the south road`,
    `Tobin Wick`,
    `Lise Varden`,
    `Crane the ferryman`,
    `Mother Oake`,
    `Denny Holt`,
    `Bel Tanner`,
    `Fitch the shepherd`,
    `Rosalind Cray`,
    `Young Wat`,
  ];
function ys(e) {
  if (e.dungeon !== `folly`) return [];
  let t = e.props.filter((e) => e.kind === ms.crystal),
    n = e.rooms.find((e) => e.kind === `boss`),
    r = [];
  for (let i of e.props) {
    let a = `${e.index}:${i.x},${i.y}`;
    if (i.kind === `f_chained`)
      r.push({ id: a, x: i.x, y: i.y, room: i.room, how: `shackle` });
    else if (i.text === `siphoned`) {
      if (n && i.room === n.index) {
        r.push({ id: a, x: i.x, y: i.y, room: i.room, how: `thread` });
        continue;
      }
      let e = t
        .filter((e) => e.room === i.room)
        .sort(
          (e, t) =>
            Math.hypot(e.x - i.x, e.y - i.y) - Math.hypot(t.x - i.x, t.y - i.y),
        )[0];
      e &&
        r.push({
          id: a,
          x: i.x,
          y: i.y,
          room: i.room,
          how: `crystal`,
          crystal: `${e.x},${e.y}`,
        });
    }
  }
  return r;
}
function bs(e) {
  return e
    ? `You took them. All of them. ...Tell Arne's sister I'm sorry. No. Don't tell her anything from me.`
    : `Where did you get this.`;
}
var xs = [
    {
      at: 1,
      reward: `Quest: The Taken (the notice board list); a name crossed off`,
    },
    {
      at: 5,
      reward: `The refugees' thanks: a Highmore travel cloak (cosmetic)`,
    },
    { at: 12, reward: `Title: of the South Road` },
    {
      at: 23,
      reward: `Every name crossed off. Title: Who Brought Them Home; Holloway's Watch lantern relit gold`,
    },
    { at: 100, reward: `Title: She Keeps Taking More` },
  ],
  Ss = [`cisterns`, `barrowdeep`, `rimewell`, `emberdeep`, `folly`],
  Cs = { pyro: `ember`, cryo: `rime`, storm: `storm`, void: `void` };
function ws(e) {
  return e === `boss` ? 3.2 : e === `named` ? 3 : 1;
}
function Ts(e, t, n) {
  let r = t.kind === `lillith` ? 2.2 : ws(t.tier);
  return Jo(t.kind, t.level, t.tier, { players: r, depth: e.depth, diff: n });
}
function Es(e, t) {
  let n = e.rooms[t.room];
  return n?.kind === `pylon` && n.tone
    ? wo[n.tone]
    : n?.tone
      ? n.tone
      : Co[Math.floor((((t.x * 7 + t.y * 13 + e.seed) % 97) / 97) * 4) % 4];
}
function Ds(e, t) {
  let n = e.rooms.find((e) => e.kind === t);
  return n
    ? (e.spawns.find((e) => e.room === n.index && Xo[e.kind]) ?? null)
    : null;
}
function Os(e, t) {
  let n = Ds(e, `mini`);
  return n && !t.bosses.includes(n.kind)
    ? `${Go[n.kind]?.name ?? `Something`} still guards the way down.`
    : e.rooms.some((e) => e.kind === `seal`) &&
        !t.opened.includes(
          ks(
            e.index,
            `lock`,
            String(e.rooms.find((e) => e.kind === `seal`).index),
          ),
        )
      ? `The seal is still whole.`
      : null;
}
function ks(e, t, n) {
  return `${e}:${t}:${n}`;
}
function As(e) {
  return e.props.filter(
    (t) => t.kind === `pylon` && e.rooms[t.room]?.kind === `pylon`,
  );
}
function js(e, t) {
  return As(e).every((n) => t.includes(ks(e.index, `pylon`, `${n.x},${n.y}`)));
}
ko.lanternRadius;
var Ms = {
    "cistern-plaque": {
      title: `A bronze plaque, green with runoff`,
      lines: [
        `CUT IN THE YEAR 206 OF THE SHATTERED VEIL BY THE FIRST SCHOOLS, THAT MARIZON NOT CHOKE ON ITS OWN LUCK.`,
        `Under it, scratched much later with a knife: the wheels stopped on the Night of Keys. Nobody came to turn them.`,
      ],
    },
    "cistern-ledger": {
      title: `A sluice-keeper's ledger`,
      lines: [
        `Year 1041. Runoff high. Slimes large but cheerful. Wheel four sticks.`,
        `Year 1042, spring. Something is humming in the vault. It isn't Marizon's note. It sounds like a thunderstorm a long way off, and it's getting closer.`,
        `The last page is wet through.`,
      ],
    },
    "barrow-names": {
      title: `A capstone, chiselled smooth`,
      lines: [
        `Every name on this stone was cut away in 618, on the Conclave's order. Someone has scratched them back in, badly, by lamplight: Joss. Wenna. Old Tam's father. Hobb of Pellandor.`,
        `Four thousand commoners, and a few dozen names. Whoever was doing it stopped in the middle of one.`,
      ],
    },
    "barrow-letter": {
      title: `A letter tucked under a helm`,
      lines: [
        `To whoever finds this. We asked to be remembered. We were told the crystals had no room. We held the line anyway.`,
        `If you are a mage, you will come back. We won't. Remember that when you are deciding who to put down here next. — A. Fenn, Captain of the Commons`,
      ],
    },
    "rime-nets": {
      title: `Frozen fishing nets`,
      lines: [
        `The knots are Rimewater Catch knots, the fishermen's own. The nets froze in the shape they were tied, with the wisps still in them.`,
        `The wisps come for the water, the fishermen say. It tastes like home.`,
      ],
    },
    "rime-hymn": {
      title: `Words cut into the ice`,
      lines: [
        `Sing it with me. Sing it lower. Lower than the well, lower than the lake, down where the star is drowning.`,
        `The last line has been scratched out, again and again, by someone who wanted very badly to stop singing it.`,
      ],
    },
    "ember-camp": {
      title: `A scorched satchel`,
      lines: [
        `Ember Camp rations, a map of the tubes, and a note in a Cindergate hand: the ground at the camp is warmer every night. The imps aren't nesting. Something down here is keeping them warm.`,
      ],
    },
    "ember-oren": {
      title: `A letter, burned at the edges`,
      lines: [
        `Varra — if this reaches you, the Emberheart is dark and I am going down after whatever put it out. I can still light my orb. Most days.`,
        `If I come back wrong, don't be kind about it. — Oren`,
      ],
    },
    "folly-caelan": {
      title: `A child's room, kept`,
      lines: [
        `A cot made up with care, toys set out in a row, and a chip of Hollowed crystal on the pillow. Everything else in the house is rot and blood. Not this.`,
        `On the wall, in a girl's hand, then a woman's: CAELAN. CAELAN. CAELAN.`,
      ],
    },
    "folly-letters": {
      title: `A bundle of letters`,
      lines: [
        `From Teodor, every week since spring. The east-wall rotations. The bread in the south market. Whether she's eating.`,
        `None of them have been opened, and none of them have been thrown away.`,
      ],
    },
    "folly-slate": {
      title: `A practice slate`,
      lines: [
        `Idris's hand: Every tone is a door. Learn to knock on all of them.`,
        `Under it, in chalk, the four tones drawn over and over, and in the corner, very small: I can hear him. Master, I can hear him. Why won't you let me listen?`,
      ],
    },
  },
  Ns = {
    max: Do.max,
    reach: 20,
    fightSeconds: 30,
    gapMax: 5,
    share: [0, 1, 0.6, 0.45, 0.375, 0.32],
    inviteMs: 6e4,
    againMs: 12e4,
    pending: 3,
    offlineMs: 6e5,
    followMs: 3e5,
    statMs: 1e3,
    statFullMs: 4e3,
    staleMs: 12e3,
  },
  Ps = { mouse: 4, touch: 8 },
  Fs = `mage:`;
function Is(e, t, n, r, i) {
  let a = t * r,
    o = n * r,
    s = null,
    c = 1 / 0;
  for (let [t, n] of e) {
    let e = n.label;
    if (
      !e ||
      !t.startsWith(Fs) ||
      a < e.x - i ||
      a > e.x + e.w + i ||
      o < e.y - i ||
      o > e.y + e.h + i
    )
      continue;
    let r = a - (e.x + e.w / 2),
      l = o - (e.y + e.h / 2),
      u = r * r + l * l;
    u < c && ((c = u), (s = { id: t.slice(5), box: e }));
  }
  return s;
}
function Ls(e) {
  return !e.inCombat && !e.casting && !e.foeUnder;
}
function Rs(e) {
  return e.hit === null
    ? e.open === null
      ? e.shut && !e.fight
        ? `drop`
        : `cast`
      : e.fight
        ? `close-cast`
        : `close`
    : e.hit === e.open
      ? e.repeat
        ? `keep`
        : `close`
      : `open`;
}
function zs(e) {
  let t = /^z:(\d+)$/.exec(e);
  return t ? Number(t[1]) : null;
}
var Bs = {
  whisper: `Whisper`,
  invite: `Invite to party`,
  ask: `Ask to join their party`,
  follow: `Join their layer`,
  lead: `Make leader`,
  kick: `Remove from party`,
  ignore: `Ignore`,
  unignore: `Unignore`,
};
function Vs(e, t) {
  let n = [];
  return (
    t.whispers && n.push(`whisper`),
    t.parties &&
      ((t.party?.members.some((t) => Ws(t) === Ws(e.name)) ?? !1)
        ? (e.follow && n.push(`follow`),
          t.party?.leader && n.push(`lead`, `kick`))
        : e.partied
          ? t.party || n.push(`ask`)
          : t.party?.full || n.push(`invite`)),
    n.push(t.ignored ? `unignore` : `ignore`),
    n
  );
}
function Hs(e, t, n, r, i, a = {}) {
  let o = a.margin ?? 8,
    s = a.gap ?? 4,
    c = (e, t, n) => Math.max(t, Math.min(n, e)),
    l = c(e.x + e.w / 2 - t / 2, o, Math.max(o, r - t - o)),
    u = { below: e.y + e.h + s, above: e.y - s - n },
    d = (e) => (e === `below` ? u.below + n + o <= i : u.above >= o),
    f = (e) =>
      (a.avoid ?? []).some(
        (r) =>
          l < r.x + r.w && r.x < l + t && u[e] < r.y + r.h && r.y < u[e] + n,
      ),
    p = (e) => (e === `below` ? `above` : `below`),
    m;
  m = a.side
    ? d(a.side) || !d(p(a.side))
      ? a.side
      : p(a.side)
    : ([`below`, `above`].find((e) => d(e) && !f(e)) ??
      (d(`below`) ? `below` : `above`));
  let h = c(u[m], o, Math.max(o, i - n - o));
  for (let e of a.keepOff ?? [])
    l < e.x + e.w &&
      e.x < l + t &&
      h < e.y + e.h &&
      e.y < h + n &&
      (e.x + e.w + s + t + o <= r
        ? (l = e.x + e.w + s)
        : e.x - s - t >= o && (l = e.x - s - t));
  return { left: l, top: h, side: m };
}
var Us = (e) => e.split(/\s+/).filter(Boolean).join(` `);
function Ws(e) {
  return Us(e).toLowerCase();
}
function Gs(e) {
  let t = [],
    n = new Set();
  for (let r of e) {
    if (typeof r != `string`) continue;
    let e = Us(r),
      i = [...e].length;
    i < 1 || i > 32 || n.has(Ws(e)) || (n.add(Ws(e)), t.push(e));
  }
  return t.slice(-100);
}
