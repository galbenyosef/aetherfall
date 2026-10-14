// index-BTsv3a2s 278 — the
// Lines 170675-171007 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var w9 = [`inn`, `hall`, `library`, `initiates`, `study`],
  T9 = {
    bag: `General Goods`,
    anvil: `Smithy`,
    book: `Scribe & Bookseller`,
    bread: `Bakery`,
    mug: `Tavern`,
    potion: `Alchemist`,
    staff: `Staffwright`,
    gem: `Crystal Cutter`,
    robe: `Robe-maker`,
    herb: `Herbalist`,
    boot: `Cobbler`,
    cheese: `Cheesemonger`,
    candle: `Chandler`,
    sword: `Armourer`,
    fish: `Fishmonger`,
    lantern: `Lampwright`,
  },
  E9 = Object.keys(T9),
  D9 = [
    {
      name: `spawn`,
      usage: `spawn <creature> [count] [level]`,
      short: `Call creatures up round you.`,
      about: `Call creatures up three to six tiles round you, at their own level or the one you give (1-255). They fight as their kind does, never respawn, never sink at dawn, and stay until felled or despawned. Up to 25 at once.`,
      examples: [
        `spawn wolf`,
        `spawn rimebear 3`,
        `spawn golem 1 30`,
        `spawn shade wolf 5 12`,
      ],
    },
    {
      name: `despawn`,
      usage: `despawn`,
      short: `Send the console's creatures back.`,
      about: `Send back everything the console called up in this room.`,
    },
    {
      name: `kill`,
      usage: `kill [radius]`,
      short: `Fell everything near you: its XP and loot are yours.`,
      about: `Fell every creature within radius tiles of you (12; at most 40). Their XP and loot are yours, as if your spells had done it.`,
    },
    {
      name: `god`,
      usage: `god [on|off]`,
      short: `Nothing can hurt you; health and mana stay full.`,
      about: `God mode: no blow, spell, story foe or dungeon can hurt you, and your health and mana stay full. Without on or off it flips. It follows you from room to room on this realm server.`,
    },
    {
      name: `loot`,
      usage: `loot [rarity] [base] [count] [level]`,
      short: `Gear at your feet. Also loot unique, book and mats.`,
      about: `Roll gear at your feet (your own drops, as a kill's loot; up to 20). Rarity: plain, kindled, runed, resonant, remembered or skyfallen (or Common to Mythic); base: what it is (sword, shield, bow, staff, hat...), any by default; level is the item level (yours by default).`,
      more: [
        `loot unique <named item> [level]`,
        `loot book [spell] [count] [level]`,
        `loot mats [bundles]   (1000 Crowns, 20 Aether Dust, 10 shards, 3 motes, 10 chips each)`,
      ],
      examples: [
        `loot resonant 5`,
        `loot remembered 1 30`,
        `loot sword`,
        `loot runed bow 2 20`,
        `loot unique unfilledStaff`,
        `loot book blizzard`,
        `loot mats 3`,
      ],
    },
    {
      name: `level`,
      usage: `level <level>`,
      short: `Reach a level (1-200).`,
      about: `Pay the XP that takes you to that level (1-200, the wilds' highest), as kills would pay it: full health, and the realm hears of it. Never down.`,
      examples: [`level 4`, `level 18`, `level 30`],
    },
    {
      name: `enter`,
      usage: `enter <room or shop>`,
      short: `Step into a room, or a shop by its trade.`,
      about: `Step inside as its door would take you: a room (inn, hall, library, initiates, study, or a shop by its id, shop-1, shop-2 and on), or the first shop of a trade (bag or General Goods, anvil or Smithy, book or Scribe, and so on). Not your homestead (go home), not fallen, not Discordant.`,
      examples: [
        `enter bag`,
        `enter smithy`,
        `enter book`,
        `enter inn`,
        `enter shop-15`,
      ],
    },
    {
      name: `breach`,
      usage: `breach [gate]`,
      short: `Break the Ward now (the townsfolk's Breach).`,
      about: `Crack a gate's ward-stone now, as the realm's mind does every two or three days while mages are in Marizon: the crier rings the bell, the townsfolk decide, and a minute later the Hollow comes through. A gate (east, south, west, north), or any. Nothing while a breach is on.`,
      examples: [`breach`, `breach east`, `breach west`],
    },
    {
      name: `missing`,
      usage: `missing <townsperson> [gate]`,
      short: `Send a townsperson out past the Ward.`,
      about: `Send one of Marizon's townsfolk (by id: pip, baker, selva...) out past the Ward to the holding spot on a gate's side (east, south, west, north; the first if none), as a breach's creature carrying them off would: their kin decide what to do, some beg the mages passing, and you can lead them home. Needs the townsfolk's minds on.`,
      examples: [`missing pip west`, `missing selva east`],
    },
    {
      name: `drama`,
      usage: `drama <drama>`,
      short: `Start one of the townsfolk's dramas now.`,
      about: `Start one of the townsfolk's dramas (docs/aetherfall-npc-lives.md §8) now, if its people are in town and well: ${W$.map((e) => `${e.id} (${e.name})`).join(`, `)}. The mind starts one some days on its own, once a mage is about.`,
      examples: [`drama cat`, `drama fever`, `drama letter`],
    },
    {
      name: `deed`,
      usage: `deed <deed> <townsperson>`,
      short: `Do a deed the town will talk about.`,
      about: `As if you'd done it (docs/aetherfall-npc-lives.md §8b): ${z$.join(`, `)}, for or to a townsperson (by id). They and those close to them know at once; the rest hear it as it gets about, and the crier cries it. Talk to them after and they'll say so.`,
      examples: [`deed rescued pip`, `deed held crier`, `deed killed baker`],
    },
    {
      name: `floor`,
      usage: `floor <floor>`,
      short: `Down a dungeon the host runs: go to a floor.`,
      about: `On a dungeon run the host plays (docs/aetherfall-dungeons.md §11): go to that floor of it (1 is the first), fresh, and your party on the floor with you. To try a floor's bosses.`,
      examples: [`floor 2`, `floor 3`],
    },
    {
      name: `tp`,
      usage: `tp <x> <y>`,
      short: `On a dungeon floor: stand on a tile.`,
      about: `On a dungeon floor the host runs: stand on the tile at x, y (the floor's own tiles), if you can stand there.`,
      examples: [`tp 40 22`],
    },
    {
      name: `list`,
      usage: `list <what> [filter]`,
      short: `What spawn and loot take.`,
      about: `What spawn and loot take: list creatures, list uniques, list spells or list rarities, narrowed by a filter (list creatures husk).`,
    },
    {
      name: `status`,
      usage: `status`,
      short: `Is the console on here? And god mode?`,
      about: `Whether this realm server lets you use the console (DEV_CONSOLE), and god mode.`,
    },
    {
      name: `clear`,
      usage: `clear`,
      short: `Clear the terminal.`,
      about: `Clear the terminal.`,
    },
    {
      name: `help`,
      usage: `help [command]`,
      short: `This, or one command in full.`,
      about: `This, or one command in full.`,
    },
  ],
  O9 = U$.map((e) => e.id),
  k9 = H$.filter((e) => e.id !== `archmage`).map((e) => e.id),
  A9 = H$.filter((e) => e.id !== `archmage` && !e.watch).map((e) => e.id),
  j9 = W$.map((e) => e.id),
  M9 = {
    "?": `help`,
    h: `help`,
    cls: `clear`,
    ls: `list`,
    sp: `spawn`,
    st: `status`,
  },
  N9 = [`creatures`, `uniques`, `spells`, `rarities`],
  P9 = (e) => e.toLowerCase().replace(/[^a-z0-9]/g, ``),
  F9 = (e) => /^\d+$/.test(e);
function I9(e, t, n) {
  let r = P9(e);
  if (!r) return { error: `none`, options: [] };
  let i = t.find((e) => P9(e) === r);
  if (i) return { id: i };
  let a = (e) => [P9(e), ...n(e).map(P9)],
    o = t.filter((e) => a(e).includes(r));
  if (o.length === 1) return { id: o[0] };
  let s = t.filter((e) => a(e).some((e) => e.startsWith(r)));
  if (s.length === 1) return { id: s[0] };
  let c = s.length ? s : t.filter((e) => a(e).some((e) => e.includes(r)));
  return c.length === 1
    ? { id: c[0] }
    : { error: c.length ? `many` : `none`, options: c };
}
var L9 = Object.keys(Fe),
  sde = (e) => [Fe[e].name],
  cde = (e) => [Aa[e].name],
  lde = (e) => [Se(e)?.name ?? e],
  ude = (e) => [_a[e].name, _a[e].common];
function R9(e, t) {
  return (
    e.slice(0, t).join(`, `) + (e.length > t ? ` and ${e.length - t} more` : ``)
  );
}
function z9(e) {
  return e.filter(F9).map(Number);
}
var B9 = (e) => e.filter((e) => !F9(e)).join(` `);
function dde(e) {
  let t = e.trim().split(/\s+/).filter(Boolean);
  if (t.length === 0) return { t: `none` };
  let n = t[0].toLowerCase(),
    r = M9[n] ?? n,
    i = t.slice(1);
  switch (r) {
    case `help`:
      return {
        t: `help`,
        topic: i[0] ? (M9[i[0].toLowerCase()] ?? i[0].toLowerCase()) : void 0,
      };
    case `clear`:
      return { t: `clear` };
    case `status`:
      return { t: `host`, command: { cmd: `status` } };
    case `despawn`:
      return { t: `host`, command: { cmd: `despawn` } };
    case `list`: {
      let e = N9.find((e) => i[0] && e.startsWith(i[0].toLowerCase()));
      return e
        ? { t: `list`, what: e, filter: i.slice(1).join(` `) }
        : {
            t: `error`,
            text: `list what? creatures, uniques, spells or rarities.`,
          };
    }
    case `spawn`: {
      let e = B9(i);
      if (!e)
        return {
          t: `error`,
          text: `spawn what? Try spawn wolf 3, or list creatures.`,
        };
      let t = I9(e, L9, sde);
      if (`error` in t)
        return {
          t: `error`,
          text:
            t.error === `many`
              ? `Which one? ${R9(t.options, 8)}.`
              : `No creature called "${e}". Try list creatures.`,
        };
      let [n, r] = z9(i);
      return {
        t: `host`,
        command: { cmd: `spawn`, kind: t.id, n: n ?? 1, level: r ?? 0 },
      };
    }
    case `kill`: {
      let [e] = z9(i);
      return B9(i)
        ? { t: `error`, text: `kill takes a radius in tiles: kill 20.` }
        : { t: `host`, command: { cmd: `kill`, radius: e ?? 0 } };
    }
    case `god`: {
      let e = (i[0] ?? ``).toLowerCase();
      return e
        ? [`on`, `1`, `true`, `yes`].includes(e)
          ? { t: `host`, command: { cmd: `god`, on: !0 } }
          : [`off`, `0`, `false`, `no`].includes(e)
            ? { t: `host`, command: { cmd: `god`, on: !1 } }
            : { t: `error`, text: `god on, god off, or just god to flip it.` }
        : { t: `host`, command: { cmd: `god` } };
    }
    case `loot`:
      return fde(i);
    case `level`: {
      let [e] = z9(i);
      return e === void 0 || B9(i)
        ? { t: `error`, text: `level takes a level: level 10 (1-200).` }
        : { t: `host`, command: { cmd: `level`, level: e } };
    }
    case `enter`:
      return pde(i.join(` `));
    case `floor`: {
      let [e] = z9(i);
      return e === void 0 || e < 1 || B9(i)
        ? { t: `error`, text: `floor takes a floor: floor 2 (1 is the first).` }
        : { t: `host`, command: { cmd: `floor`, n: e - 1 } };
    }
    case `tp`: {
      let [e, t] = z9(i);
      return e === void 0 || t === void 0 || B9(i)
        ? { t: `error`, text: `tp takes a tile: tp 40 22.` }
        : { t: `host`, command: { cmd: `tp`, x: e + 0.5, y: t + 0.6 } };
    }
    case `missing`: {
      let e = (i[0] ?? ``).toLowerCase(),
        t = (i[1] ?? ``).toLowerCase();
      return A9.includes(e)
        ? t && !O9.includes(t)
          ? { t: `error`, text: `out past which gate? ${O9.join(`, `)}.` }
          : {
              t: `host`,
              command: t
                ? { cmd: `missing`, kind: e, room: t }
                : { cmd: `missing`, kind: e },
            }
        : { t: `error`, text: `missing who? ${A9.join(`, `)}.` };
    }
    case `drama`: {
      let e = i[0] ?? ``,
        t = W$.find((t) => t.id.toLowerCase() === e.toLowerCase());
      return t
        ? { t: `host`, command: { cmd: `drama`, kind: t.id } }
        : { t: `error`, text: `drama which? ${j9.join(`, `)}.` };
    }
    case `deed`: {
      let e = (i[0] ?? ``).toLowerCase(),
        t = (i[1] ?? ``).toLowerCase();
      return z$.includes(e)
        ? k9.includes(t)
          ? { t: `host`, command: { cmd: `deed`, what: e, kind: t } }
          : { t: `error`, text: `${e} who? ${k9.join(`, `)}.` }
        : { t: `error`, text: `deed what? ${z$.join(`, `)}.` };
    }
    case `breach`: {
      let e = (i[0] ?? ``).toLowerCase();
      return e
        ? O9.includes(e)
          ? { t: `host`, command: { cmd: `breach`, room: e } }
          : {
              t: `error`,
              text: `breach at which gate? ${O9.join(`, `)}, or none for any.`,
            }
        : { t: `host`, command: { cmd: `breach` } };
    }
  }
  return { t: `error`, text: `Unknown command "${t[0]}". Type help.` };
}
