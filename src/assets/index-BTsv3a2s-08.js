// index-BTsv3a2s 08 — the
// Lines 16903-17315 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var wn = 3e3,
  Tn = 48,
  En = 36,
  Dn = 6,
  On = { VOID: 0, FLOOR: 1, WALL: 2, EXIT: 3, DOOR: 4 },
  kn = {
    bread: {
      names: [`The Warm Hearth`, `Oven & Ember`, `The Rising Loaf`],
      subtitle: `Bakery`,
      look: `baker`,
      title: `Baker`,
      color: `#e6c47a`,
      floor: `planks`,
      wall: `plaster`,
      talks: [
        [
          `Fresh from the oven, Initiate. Mind, it's hot.`,
          `I've been baking double since dawn. The Highmore folk came in with nothing but what they ran in.`,
        ],
        [
          `Flour's dear again. Every cart from the Glade comes in by the east gate now, and the Watch opens every sack.`,
        ],
        [
          `My mother baked for the Circle when Master Idris was young. He paid for his own bread. Every loaf, forty years.`,
        ],
      ],
    },
    mug: {
      names: [`The Tipped Cauldron`, `The Last Lamp`, `The Ward & Tankard`],
      subtitle: `Tavern`,
      look: `barkeep`,
      title: `Barkeep`,
      color: `#d99a2a`,
      floor: `darkplanks`,
      wall: `timber`,
      talks: [
        [
          `Sit, sit. First cup's free for anyone who stood on the walls that night.`,
        ],
        [
          `You hear things behind a bar. They say Cindergate's streets are full of folk who won't stay down.`,
          `I don't serve that kind of talk after sundown.`,
        ],
        [
          `The Watch drinks here. Mages drink at the Rising Mage. Don't take it personally, Initiate.`,
        ],
      ],
    },
    anvil: {
      names: [`Forge of the East Gate`, `Hammerfall Smithy`, `The Red Anvil`],
      subtitle: `Smithy`,
      look: `smith`,
      title: `Smith`,
      color: `#ff8a4c`,
      floor: `flag`,
      wall: `stone`,
      talks: [
        [
          `Mages think a staff's all you need. Then the Recalled get close.`,
          `The Watch buys every blade I can hammer.`,
        ],
        [`Brassdeep iron's late. Everything's late since the Night.`],
        [
          `Stand back from the forge. I've seen what a spark does to a Voidweaver's sleeve.`,
        ],
      ],
    },
    sword: {
      names: [`The Watchman's Rack`, `Steel & Oath`, `Gatehouse Arms`],
      subtitle: `Armourer`,
      look: `armorer`,
      title: `Armourer`,
      color: `#b9c4d6`,
      floor: `flag`,
      wall: `stone`,
      talks: [
        [
          `Captain's orders: every Watchman gets a new blade before the next siege.`,
        ],
        [
          `That one on the end is Pell's. It's paid for.`,
          `Nobody's come to take it.`,
        ],
        [`No spark, no attunement, no second life. So we make the steel good.`],
      ],
    },
    potion: {
      names: [
        `The Green Alembic`,
        `Draughts & Tinctures`,
        `Mother Wick's Cures`,
      ],
      subtitle: `Alchemist`,
      look: `alchemist`,
      title: `Alchemist`,
      color: `#5ccf4f`,
      floor: `darkplanks`,
      wall: `timber`,
      talks: [
        [
          `Mana draughts, frostbite salve, a tincture for bad dreams. That last one's sold out since the Night of Keys.`,
        ],
        [`Don't lean on the cauldron. It isn't soup.`],
        [
          `Oriel buys lampblack and silverleaf here. An odd mix.`,
          `Not my business what a Voidweaver does with it.`,
        ],
      ],
    },
    staff: {
      names: [`The Four Sockets`, `Ashwood Staves`, `Orb & Rod`],
      subtitle: `Staffwright`,
      look: `staffwright`,
      title: `Staffwright`,
      color: `#c98a4a`,
      floor: `planks`,
      wall: `timber`,
      talks: [
        [
          `Every Initiate wants a staff with a crystal socket. You'll earn one.`,
        ],
        [
          `Master Idris's staff had four sockets, all empty.`,
          `He said he'd earned the stones once, and given them back.`,
        ],
        [
          `Brassdeep makes the realm's staves. I make Marizon's. Ask anyone which ones don't crack.`,
        ],
      ],
    },
    book: {
      names: [`Quill & Concord`, `The Open Page`, `Leaves of the Veil`],
      subtitle: `Scribe & Bookseller`,
      look: `scholar`,
      title: `Scribe`,
      color: `#a8b8ff`,
      floor: `darkplanks`,
      wall: `plaster`,
      talks: [
        [
          `The Concord of Keeping, third printing. Everyone's reading it again.`,
          `Looking for the page where it proves the limit is real.`,
        ],
        [`There isn't one, by the way. I've read it eleven times.`],
        [
          `The Chorus hymns are on the left. Nobody's bought a copy this week. It's hard to sing along with five voices gone.`,
        ],
      ],
    },
    gem: {
      names: [`Shardcutter`, `The Humming Stone`, `Facet & Flame`],
      subtitle: `Crystal Cutter`,
      look: `gemcutter`,
      title: `Crystal Cutter`,
      color: `#44c9f0`,
      floor: `flag`,
      wall: `plaster`,
      talks: [
        [
          `Shards from the Aetherfall are all I cut. Little ones.`,
          `They hum if you hold them to your ear.`,
        ],
        [
          `Since the Night, some of my shards have gone quiet.`,
          `I keep them in a drawer. I can't sell a stone that's stopped singing.`,
        ],
        [
          `Careful with the cyan ones. They remember whoever holds them too long.`,
        ],
      ],
    },
    robe: {
      names: [`Needle & Veil`, `The Four Colours`, `Hem & Hood`],
      subtitle: `Robe-maker`,
      look: `tailor`,
      title: `Robe-maker`,
      color: `#b58aff`,
      floor: `planks`,
      wall: `plaster`,
      talks: [
        [
          `Pyromancer red is selling slow. Folk don't want to look like Cindergate.`,
        ],
        [
          `Voidweaver black? I'll have to order it in. Nobody's buying it this week.`,
        ],
        [
          `Stand still, Initiate. You've torn your hem on something with claws.`,
        ],
      ],
    },
    herb: {
      names: [`The Glade Basket`, `Root & Leaf`, `Greenhand's`],
      subtitle: `Herbalist`,
      look: `herbalist`,
      title: `Herbalist`,
      color: `#9ae06a`,
      floor: `planks`,
      wall: `timber`,
      talks: [
        [
          `The Glade grows anything while the crystal sings. Mint in winter, if you like.`,
        ],
        [
          `If you find hollowroot out past the walls, don't touch it bare-handed. Bring it to me in a cloth.`,
        ],
        [
          `Chamomile for the Initiates. Half of them haven't slept since the Night.`,
        ],
      ],
    },
    boot: {
      names: [`Soles of Marizon`, `The Last Stitch`, `Cobble & Awl`],
      subtitle: `Cobbler`,
      look: `cobbler`,
      title: `Cobbler`,
      color: `#c9a46a`,
      floor: `planks`,
      wall: `timber`,
      talks: [
        [
          `The walls are hard on soles. The Watch wore through theirs in a week.`,
        ],
        [`Going out to the Wastes? Double stitching. Ash eats thread.`],
      ],
    },
    bag: {
      names: [`Everything & Rope`, `The Crossroads Store`, `Pack & Provision`],
      subtitle: `General Goods`,
      look: `grocer`,
      title: `Shopkeeper`,
      color: `#d9a93a`,
      floor: `planks`,
      wall: `timber`,
      talks: [
        [`Rope, lamp oil, travel bread. Everyone's packing for somewhere.`],
        [
          `The Highmore families bought every blanket I had. I didn't have the heart to charge the children.`,
        ],
        [
          `You're one of the Initiates they're sending out, aren't you? Take care on the roads.`,
        ],
      ],
    },
    cheese: {
      names: [`The Cold Cellar`, `Wheel & Rind`, `Glade Dairy`],
      subtitle: `Cheesemonger`,
      look: `cheesemonger`,
      title: `Cheesemonger`,
      color: `#f2c84a`,
      floor: `flag`,
      wall: `plaster`,
      talks: [
        [
          `Aged in the cellars under the market. The cold down there is Ysolde's doing.`,
          `She says it's practice.`,
        ],
        [
          `A wheel of Glade blue keeps a month on the road. Longer, if nobody's hungry.`,
        ],
      ],
    },
    candle: {
      names: [`The Night Candle`, `Wick & Wax`, `Lumen Lights`],
      subtitle: `Chandler`,
      look: `chandler`,
      title: `Chandler`,
      color: `#ffd98a`,
      floor: `planks`,
      wall: `plaster`,
      talks: [
        [
          `The Once-Graves want a candle a night for every name. We can't pour them fast enough.`,
        ],
        [
          `Mages come back. The rest of us get a candle.`,
          `So I make good candles.`,
        ],
      ],
    },
    fish: {
      names: [`Rimewater Catch`, `The Frozen Net`, `Pike & Perch`],
      subtitle: `Fishmonger`,
      look: `fishmonger`,
      title: `Fishmonger`,
      color: `#6fa6c8`,
      floor: `flag`,
      wall: `stone`,
      talks: [
        [
          `The river's running cold and early. Fish from up by Frostmere taste of ice this year.`,
        ],
        [
          `Wisps have been coming down the river at night. The fish won't bite when they're about.`,
        ],
      ],
    },
    lantern: {
      names: [`The Lamplighter`, `Glass & Flame`, `Wardlight Lanterns`],
      subtitle: `Lampwright`,
      look: `lampwright`,
      title: `Lampwright`,
      color: `#ffe08a`,
      floor: `planks`,
      wall: `stone`,
      talks: [
        [
          `Lanterns for the Once-Graves, lanterns for the walls.`,
          `Crystal light's the one thing a husk can't abide. Mine's the next best thing.`,
        ],
        [
          `Aether glass, blown here in Marizon. It holds a flame through a Frostmere gale.`,
        ],
      ],
    },
  },
  An =
    `Alder.Brisa.Cato.Dorin.Elsbeth.Fennick.Gisla.Hobb.Iselle.Jory.Liesl.Mott.Nell.Osric.Petra.Quill.Rosalind.Sabin.Tamsin.Ulric.Vesna.Yara.Bartholo.Tobin.Greta.Ivo`.split(
      `.`,
    ),
  jn = [
    `Thatch`,
    `Cole`,
    `Mill`,
    `Fenn`,
    `Vale`,
    `Tanner`,
    `Rook`,
    `Ashby`,
    `Lark`,
    `Moss`,
    `Pike`,
    `Wick`,
    `Dunmore`,
    `Reed`,
    `Brightwater`,
  ],
  Mn = class {
    x0;
    y0;
    w;
    h;
    cells;
    blocked;
    furniture = [];
    decor = [];
    rugs = [];
    folk = [];
    notes = [];
    exits = [];
    doors = [];
    mirror = !1;
    constructor(e, t, n, r) {
      ((this.x0 = e),
        (this.y0 = t),
        (this.w = n),
        (this.h = r),
        (this.cells = new Uint8Array(n * r)),
        (this.blocked = new Uint8Array(n * r)));
      for (let e = 0; e < r; e++)
        for (let t = 0; t < n; t++)
          this.cells[e * n + t] =
            e < 2 || e === r - 1 || t === 0 || t === n - 1 ? On.WALL : On.FLOOR;
    }
    mx(e, t = 1) {
      return this.mirror ? this.w - e - t : e;
    }
    exit(e) {
      ((this.cells[(this.h - 1) * this.w + e] = On.EXIT),
        this.exits.push({ tx: this.x0 + e, ty: this.y0 + this.h - 1 }));
    }
    free(e, t, n = 1, r = 1) {
      for (let i = t; i < t + r; i++)
        for (let t = e; t < e + n; t++)
          if (
            t < 1 ||
            i < 2 ||
            t > this.w - 2 ||
            i > this.h - 2 ||
            this.blocked[i * this.w + t]
          )
            return !1;
      return !0;
    }
    put(e, t, n, r = 1, i = 1, a, o = !0) {
      let s = this.mx(t, r);
      if (!this.free(s, n, r, i)) return !1;
      if (
        (this.furniture.push({
          name: e,
          arg: a,
          tx: this.x0 + s,
          ty: this.y0 + n,
          w: r,
          h: i,
          blocks: o,
        }),
        o)
      )
        for (let e = n; e < n + i; e++)
          for (let t = s; t < s + r; t++) this.blocked[e * this.w + t] = 1;
      return !0;
    }
    wall(e, t, n = 1, r) {
      this.decor.push({ name: e, arg: r, lx: this.mx(t, n), w: n });
    }
    rug(e, t, n, r, i) {
      this.rugs.push({ lx: this.mx(e, n), ly: t, w: n, h: r, color: i });
    }
    at(e, t) {
      return { x: this.x0 + (this.mirror ? this.w - e : e), y: this.y0 + t };
    }
  };
