// index-BTsv3a2s 208 — the
// Lines 129981-130880 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var ZZ = [],
  QZ = { id: `ch1`, title: `Chapter I · The First Key`, region: `Qaesh` },
  $Z = (e, t) => ({ x: Ar + e, y: jr + t }),
  eQ = (e, t) => $Z(e * 2, t * 2),
  tQ = {
    eastScorch: eQ(52.5, 0.6),
    trail1: eQ(61.5, 0.6),
    trail2: eQ(69.5, 0.6),
    trail3: eQ(77.5, 0.6),
    coldCamp: eQ(-76, 18.5),
    yew: $Z(-99.5, -44.5),
    pellsGrave: $Z(-108.5, -27.5),
    eastGateStone: $Z(90, 0.6),
    northGateStone: $Z(0.6, -90),
    southGateStone: $Z(0.6, 90),
    target1: $Z(-53.5, 110),
    target2: $Z(-49.5, 110),
    target3: $Z(-45.5, 110),
    target4: $Z(-41.5, 110),
    milestone: eQ(-44, 50),
    lillithField: eQ(-86, 25),
  },
  nQ = [
    {
      id: `m1-morning`,
      title: `The Morning After`,
      kind: `main`,
      level: 2,
      giver: `circle:ysolde`,
      summary: `Lillith fled the east gate after Master Idris stopped her Unmaking. Ysolde wants to know which way she went.`,
      offer: [
        `{name}. You should be asleep. So should I.`,
        `Lillith is gone, but not far. She never runs far from something she hasn't finished, and she hasn't finished Marizon.`,
        `Captain Holloway had men on the east wall when she fell back. Ask him what they saw. Then go and see it for yourself.`,
      ],
      steps: [
        {
          t: `talk`,
          text: `Ask Captain Holloway what the Watch saw`,
          npcs: [`circle:holloway`],
          lines: [
            [
              `Ysolde sent you? Good. She won't ask me herself. Thinks I'll say something about mages.`,
              `My lads on the east wall saw her go. Four colours over the fields, then a fifth, black and red. Then nothing, like she'd stepped out of the world.`,
              `She left a mark on the road outside the east gate you could read by. Go and look, if you've the stomach.`,
            ],
          ],
        },
        {
          t: `inspect`,
          text: `Examine the scorch outside the east gate`,
          spots: [
            {
              ...tQ.eastScorch,
              name: `Scorched cobbles`,
              lines: [
                `* The cobbles outside the gate are fused into glass, streaked in four colours: ember, rime, storm and void.`,
                `* Threaded through them is a fifth, black-red with a white-hot core. The Hollow's colours.`,
                `* Where the fifth colour runs, the glass has cracked from the inside, as if something drank the heat back out of it.`,
              ],
            },
          ],
        },
        {
          t: `talk`,
          text: `Report to Ysolde Maren in the Sanctum`,
          npcs: [`circle:ysolde`],
          lines: [
            [
              `Black-red, through all four tones. I was afraid of that.`,
              `The Unmaking draws on the Hollow, and the Hollow takes from whoever calls it. She began the Canticle, and Idris stopped her halfway.`,
              `Half a Forbidden Canticle is still inside her, {name}. It's eating her. So she's weak, and she's somewhere close, trying not to die.`,
              `Varra has been asking to be useful since Cindergate went dark. Go and let her.`,
            ],
          ],
        },
      ],
      reward: { xp: 50, crowns: 30 },
    },
    {
      id: `m2-trail`,
      title: `Four Colours in the Grass`,
      kind: `main`,
      level: 3,
      giver: `circle:varra`,
      after: [`m1-morning`],
      summary: `Lillith's trail runs east along the road into the Verdant Glade. The Glade's blobs have been drinking the Aether she spilled.`,
      offer: [
        `Ysolde says she's bleeding Hollow. Good. Anything that bleeds leaves a trail, and I've been itching to follow one since the Emberheart went out.`,
        `I can't leave the Ward-line. You can. Follow the scorch out along the east road.`,
        `Mind the blobs in the Glade. They drink spilled Aether, and she spilled plenty. They'll be swollen with it, and mean.`,
      ],
      steps: [
        {
          t: `inspect`,
          text: `Follow the scorch trail along the east road`,
          spots: [
            {
              ...tQ.trail1,
              name: `Scorch on the road`,
              lines: [
                `* Another scorch, smaller, in rime and void. The frost in it hasn't melted, though the sun has been on it all morning.`,
              ],
            },
            {
              ...tQ.trail2,
              name: `Scorched bridge rail`,
              lines: [
                `* The bridge rail is scorched storm-yellow. In the stream below, something glows faintly: her Aether, spilled into the water.`,
                `* The blobs along the bank have been drinking it.`,
              ],
            },
            {
              ...tQ.trail3,
              name: `A ring of burnt grass`,
              lines: [
                `* The trail ends in a ring of burnt grass: four colours at the edge, the Hollow at the centre.`,
                `* No footprints lead away. She didn't walk from here. She Blinked, and far.`,
              ],
            },
          ],
        },
        {
          t: `kill`,
          text: `Slay swollen Blobs`,
          kinds: [`slime`],
          count: 6,
          region: `glade`,
        },
        {
          t: `talk`,
          text: `Return to Varra Kest`,
          npcs: [`circle:varra`],
          lines: [
            [
              `A ring of burnt grass, and no footprints. She Blinked out of it. Show-off. She always was.`,
              `A long Blink leaves a seam in the Veil for a day or so, if you know how to look. I don't. Oriel does.`,
              `Half this town thinks every Voidweaver followed Vespertine into the dark. Go to Oriel anyway. Tell them I sent you, and watch their face.`,
            ],
          ],
        },
      ],
      reward: { xp: 100, crowns: 45, item: { rarity: `kindled` } },
    },
    {
      id: `m3-shallow`,
      title: `Where the Hollow Runs Shallow`,
      kind: `main`,
      level: 4,
      giver: `circle:oriel`,
      after: [`m2-trail`],
      summary: `Oriel followed Lillith's Blink through the Veil. It comes out in the Whispering Woods, near the Unremembered Field.`,
      offer: [
        `Varra sent you. Varra has never sent anyone to me. Things must be bad.`,
        `I felt her seam last night. It runs west, under the town, and comes out in the Whispering Woods, where the Unremembered War was fought.`,
        `Thousands died there that no crystal would keep. The Hollow runs shallow under that ground. If half a Canticle is eating her, that's where she'd go to feed it.`,
        `The mutant rats let the Hollow in years ago. If she's been feeding, they've been feeding with her. Thin them out, and find where she sleeps.`,
      ],
      steps: [
        {
          t: `kill`,
          text: `Thin out the Mutant Rats in the Whispering Woods`,
          kinds: [`wolf`],
          count: 6,
          region: `woods`,
        },
        {
          t: `inspect`,
          text: `Find Lillith's camp near the Unremembered Field`,
          spots: [
            {
              ...tQ.coldCamp,
              name: `A cold camp`,
              lines: [
                `* A cold camp by the river: ash, a bedroll of good Highmore wool, and nothing else a mage would need.`,
                `* Half-buried in the ash is a child's toy, a wooden Stormcaller worn smooth by a thumb. Carved into the base: C.H.`,
                `* You take it with you.`,
              ],
            },
          ],
        },
        {
          t: `talk`,
          text: `Bring what you found to Oriel Duskwright`,
          npcs: [`circle:oriel`],
          lines: [
            [
              `C.H. Caelan Highmore. Her little brother.`,
              `He had a spark, and he was a good student. But he was twelve when he fell sick, and no one attunes a child: it would have killed him. The Conclave told her so, and when he died, they did nothing. That's where all of this started.`,
              `Keep it safe. She'll want it back, and that may matter more than any spell you know.`,
              `And {name}: Teodor has been pacing the courtyard since dawn. I think he has something to tell you. I think he's wanted to tell someone for months.`,
            ],
          ],
        },
      ],
      reward: { xp: 160, crowns: 60, item: { rarity: `runed` } },
    },
    {
      id: `m4-letters`,
      title: `Letters to Highmore`,
      kind: `main`,
      level: 5,
      giver: `circle:teodor`,
      after: [`m3-shallow`],
      summary: `Teodor has been writing to Lillith since spring, and the letters always vanish. He wants you to carry the next one to the old yew in the Once-Graves.`,
      offer: [
        `You found her camp. Then you should hear this from me before you hear it from anyone else.`,
        `I've been writing to her. Since spring, since the first strike on the Ward. She was my hero before she was anyone's enemy. I thought if someone just talked to her...`,
        `She never answered. But the letters were always gone by morning. I leave them in the old yew at the Once-Graves, where she used to leave me notes when we were students.`,
        `Take this one there. Please. And don't read it. It's only a letter.`,
      ],
      steps: [
        {
          t: `choice`,
          text: `Decide what to do with Teodor's letter`,
          npc: `circle:teodor`,
          prompt: [
            `* Teodor holds out a letter sealed with Thunderspire blue wax. His hand isn't quite steady.`,
          ],
          options: [
            {
              id: `sealed`,
              label: `Carry it sealed, as he asked`,
              lines: [
                `> I'll take it. Sealed.`,
                `Thank you. Truly. She'll read it. She always reads them.`,
              ],
            },
            {
              id: `shown`,
              label: `Take it, and show it to Ysolde first`,
              lines: [
                `> I'll take it.`,
                `Thank you. Truly. She'll read it. She always reads them.`,
              ],
            },
          ],
        },
        {
          t: `talk`,
          text: `Show Teodor's letter to Ysolde Maren`,
          when: `shown`,
          npcs: [`circle:ysolde`],
          lines: [
            [
              `Teodor's hand. Of course it is.`,
              `...It's a boy's letter. He misses her. He hates the dawn vigil. He complains that I've put him on the east wall three nights running.`,
              `Nothing that matters, then. Seal it again and take it where he asked. And {name}: don't tell him I read it.`,
              `* As she hands it back, she looks at it a moment too long.`,
            ],
          ],
        },
        {
          t: `inspect`,
          text: `Leave the letter in the old yew at the Once-Graves`,
          spots: [
            {
              ...tQ.yew,
              name: `The old yew`,
              lines: [
                `* The yew is older than the graveyard around it. There's a hollow in the trunk at the height of a child's hand.`,
                `* You leave Teodor's letter. Something is already waiting there: a letter sealed with the Highmore crest, in a tight, perfect hand.`,
                `* It's addressed to Master Idris's last Initiate.`,
              ],
            },
          ],
        },
        {
          t: `talk`,
          text: `Tell Teodor what was waiting in the yew`,
          npcs: [`circle:teodor`],
          lines: [
            [
              `She wrote back? Not to me. To you.`,
              `...No, that's fair. Read it. Out loud, if you don't mind. I'd like to hear her words, even if they aren't for me.`,
              `* "Come to the Unremembered Field after dark. Come alone. Bring what you took from my camp. I want to know what he said at the end. L."`,
              `Alone. She said alone. {name}, go to Captain Holloway before you go anywhere near her.`,
            ],
          ],
        },
      ],
      reward: { xp: 220, crowns: 80 },
    },
    {
      id: `m5-lantern`,
      title: `A Light to Carry`,
      kind: `main`,
      level: 6,
      giver: `circle:holloway`,
      after: [`m4-letters`],
      summary: `Holloway won't let you meet a Key in the dark without crystal-light. The Brassdeep forgewright can make a Watch lantern, if you bring him embers from the Ashen Wastes' imps.`,
      offer: [
        `Alone, at night, in the one place in Qaesh where the dead get up by themselves. She's good, I'll give her that.`,
        `You'll go anyway. Your lot always do. So you'll go with a light.`,
        `The Watch carries crystal lanterns on the night rounds. Husks won't stand in the light of one. The forgewright behind the east stalls can make one, but he'll want embers, and the only good embers left in Qaesh are in the Ashen Wastes' imps.`,
        `The Ashen Wastes, south. Bring him five.`,
      ],
      steps: [
        {
          t: `loot`,
          text: `Collect embers from Imps in the Ashen Wastes`,
          kinds: [`imp`, `blackfireimp`],
          count: 5,
          chance: 0.6,
          item: `Imp embers`,
        },
        {
          t: `talk`,
          text: `Take the embers to the Brassdeep forgewright`,
          npcs: [`folk:forgewright`],
          lines: [
            [
              `Embers from Gorrath's imps. Still warm. Aye, these'll burn.`,
              `Brassdeep glass, a chip of ward-stone for the heart, and your embers for the flame. Crystal-light you can carry.`,
              `* He works without speaking for a long time, then hands you a lantern that hums faintly, the way the crystal does.`,
              `Tell Holloway it's on the Watch's account. He'll hate that.`,
            ],
          ],
        },
        {
          t: `talk`,
          text: `Return to Captain Holloway`,
          npcs: [`circle:holloway`],
          lines: [
            [
              `On the Watch's account, is it. Hm.`,
              `Keep it lit. Anything the Hollow is holding up won't stand near it for long, and that goes for whatever she raises.`,
              `Pell carried one of those. He didn't have it lit, the night he died. I think about that.`,
              `Ysolde's waiting for you. She's the one who'll send you. Don't make me the one who watches you go.`,
            ],
          ],
        },
      ],
      reward: {
        xp: 300,
        crowns: 100,
        item: { rarity: `runed`, base: `lantern` },
      },
    },
    {
      id: `m6-field`,
      title: `The Unremembered Field`,
      kind: `main`,
      level: 7,
      giver: `circle:ysolde`,
      after: [`m5-lantern`],
      summary: `Lillith asked Idris's last Initiate to meet her on the Unremembered Field, alone, after dark. Ysolde is letting you go.`,
      offer: [
        `Teodor told me about the letter. All of it.`,
        `I should forbid you. The Circle would. Idris wouldn't have, and I've been trying very hard to do what he wouldn't have. It hasn't worked once.`,
        `She asked for you because he attuned you. She wants to know what he said at the end. So do I, a little.`,
        `If it turns, and it will, don't try to win. If she begins a Canticle, break it. Then run for the Ward. Go.`,
      ],
      acceptLabel: `Go to the field`,
      steps: [
        {
          t: `boss`,
          text: `Meet Lillith on the Unremembered Field`,
          boss: `lillith`,
          ...tQ.lillithField,
          r: 9,
          name: `The Unremembered Field`,
        },
        {
          t: `talk`,
          text: `Return to Ysolde Maren`,
          npcs: [`circle:ysolde`],
          lines: [
            [
              `You're alive. And she's gone.`,
              `* You tell her everything: the carved Stormcaller, the promise, the shard that Drakkar keeps close.`,
              `Caelan, in a Hollowed shard, all this time. And Drakkar holds the other end of the string.`,
              `She could have finished the Unmaking on you. Out there, with no one to stop her. She stopped herself. Remember that, whatever comes next.`,
              `She'll go back to him, because he has her brother. And she'll come back to Marizon, because he'll send her. Next time with an army.`,
              `* "Let Teodor sleep," she said. Ysolde goes very still when you tell her that.`,
              `...The Circle will hold the Ward. You've earned your rest, {name}. Take it while it still holds.`,
            ],
          ],
        },
      ],
      reward: {
        xp: 650,
        crowns: 200,
        mats: { shards: 2 },
        item: { rarity: `resonant` },
      },
    },
  ],
  rQ = [
    {
      id: `s-ember`,
      title: `Ember`,
      kind: `side`,
      level: 2,
      giver: `note:inn/notice`,
      summary: `Odile at the Rising Mage has lost her grey cat, Ember. It was last seen near the Once-Graves.`,
      offer: [
        `* Pinned under the Circle's orders is a smaller note, in a round, careful hand:`,
        `* LOST: a grey cat, answers to Ember. Hates rain, loves the fire. Last seen near the Once-Graves. Please ask for Odile.`,
      ],
      acceptLabel: `Look for Ember`,
      steps: [
        {
          t: `inspect`,
          text: `Look for Ember at the Once-Graves, west of town`,
          spots: [
            {
              ...tQ.pellsGrave,
              name: `A fresh grave`,
              lines: [
                `* A grey cat is curled on a fresh grave, the only one here without moss on it yet.`,
                `* The marker is plain wood: PELL, OF THE MARIZON WATCH.`,
                `* The cat doesn't want to leave him. It lets you pick it up anyway, and complains the whole way.`,
              ],
            },
          ],
        },
        {
          t: `talk`,
          text: `Bring Ember back to Odile at the Rising Mage`,
          npcs: [`room:inn/innkeeper`],
          lines: [
            [
              `Ember! You wretched thing. Where were you?`,
              `...On Pell's grave. Of course. He fed her scraps under that table every night for six years.`,
              `Here, for your trouble. And the next time you're on the walls, {name}, you come in here after. First cup's on me, for as long as the Ward holds.`,
            ],
          ],
        },
      ],
      reward: { xp: 60, crowns: 40 },
    },
    {
      id: `s-bread`,
      title: `Half-Price for Refugees`,
      kind: `side`,
      level: 2,
      giver: `folk:baker`,
      summary: `The baker at the south bread stall wants three loaves taken to the Highmore refugees in the south market.`,
      offer: [
        `Fresh bread, while the Ward holds. You there, Initiate. You've got legs.`,
        `The Highmore folk in the south market won't come to the stall. Too proud, or too tired. Take them these, would you? Three loaves, one each.`,
      ],
      steps: [
        {
          t: `talk`,
          text: `Bring bread to the Highmore refugees in the south market`,
          npcs: [`folk:refugee-a`, `folk:refugee-b`, `folk:refugee-c`],
          lines: [
            [
              `Bread? From the baker? ...Tell her thank you. Tell her we'll pay, when there's anything to pay with.`,
            ],
            [
              `The Highmore guard held the Hall gates to the end. I keep thinking one of them would've liked this bread.`,
              `Thank you.`,
            ],
            [
              `Two nights walking, and the first thing anyone gives us is bread. I could cry. I think I will, later.`,
            ],
          ],
        },
        {
          t: `talk`,
          text: `Return to the baker`,
          npcs: [`folk:baker`],
          lines: [
            [
              `All three? Good. Don't tell the Watch. They'll want half-price too.`,
              `Here, take a loaf yourself. Mages forget to eat. Master Idris did, forty years, and look how thin he got.`,
            ],
          ],
        },
      ],
      reward: { xp: 70, crowns: 30, mats: { dust: 2 } },
    },
    {
      id: `s-targets`,
      title: `Every Tone Is a Door`,
      kind: `side`,
      level: 2,
      giver: `room:initiates/initiate-b`,
      summary: `Initiate Corwin hasn't slept since the Night of Keys. He wants to watch someone strike all four rune targets at the Training Field.`,
      offer: [
        `I haven't slept since. Every time I close my eyes I hear the crystal ringing.`,
        `Ysolde says to keep up our studies. I can't even cast straight. You were on the walls. How do you do it?`,
        `Would you go to the Training Field, south of town, and wake all four rune targets, one for each school? I'll watch from the tower window. I just need to see someone do it.`,
      ],
      steps: [
        {
          t: `inspect`,
          text: `Wake the four rune targets at the Training Field`,
          spots: [
            {
              ...tQ.target1,
              name: `Ember rune target`,
              lines: [
                `* You touch your focus to the ember target. The rune in its heart flares orange and hums, like a hearth catching.`,
              ],
            },
            {
              ...tQ.target2,
              name: `Rime rune target`,
              lines: [
                `* The rime target frosts over at your touch. The rune glows pale blue, and your breath fogs.`,
              ],
            },
            {
              ...tQ.target3,
              name: `Storm rune target`,
              lines: [
                `* The storm target crackles. Every hair on your arm stands up before the rune settles, yellow-white.`,
              ],
            },
            {
              ...tQ.target4,
              name: `Void rune target`,
              lines: [
                `* The void target goes quiet at your touch, quieter than silence, and the rune turns a deep violet.`,
              ],
            },
          ],
        },
        {
          t: `talk`,
          text: `Tell Initiate Corwin in the Initiates' Hall`,
          npcs: [`room:initiates/initiate-b`],
          lines: [
            [
              `I saw! All four, even the ones that aren't your school. Master Idris used to make us do that.`,
              `"Every tone is a door," he said. "Learn to knock on all of them." I'd forgotten that. Thank you, {name}.`,
              `I think I might sleep tonight.`,
            ],
          ],
        },
      ],
      reward: { xp: 70, crowns: 25, mats: { dust: 3 } },
    },
    {
      id: `s-mazewright`,
      title: `The Mazewright's Mark`,
      kind: `side`,
      level: 3,
      giver: `folk:forgewright`,
      summary: `The Brassdeep forgewright suspects Aurek Sunder left marks in Marizon's gate ward-stones, as he did in Highmore's.`,
      offer: [
        `Ward-stones? Aurek Sunder designed half the ones in the realm. Highmore's among them. And Highmore's opened from the inside.`,
        `Marizon's gate-stones are Brassdeep work, older than me. I've been wanting a look at them, but the Watch won't let a forgewright up the arches.`,
        `They'll let a mage. Check the ward-stones in the east, north and south gates. Look for a mark like a little maze, cut where nobody would think to look.`,
      ],
      steps: [
        {
          t: `inspect`,
          text: `Inspect the ward-stones in the east, north and south gates`,
          spots: [
            {
              ...tQ.eastGateStone,
              name: `East gate ward-stone`,
              lines: [
                `* On the underside of the ward-stone, where only a mason's eye would go: a tiny square maze, cut clean.`,
                `* It has no way in. You look for a long time before you find the one wall that's a hair too thin.`,
              ],
            },
            {
              ...tQ.northGateStone,
              name: `North gate ward-stone`,
              lines: [
                `* The same maze on the underside of the north gate's stone. The thin wall is in the same place.`,
              ],
            },
            {
              ...tQ.southGateStone,
              name: `South gate ward-stone`,
              lines: [
                `* The south gate's stone has the maze too, but someone scratched a line straight through it long ago. The hand is steady and old.`,
              ],
            },
          ],
        },
        {
          t: `talk`,
          text: `Tell the Brassdeep forgewright what you found`,
          npcs: [`folk:forgewright`],
          lines: [
            [
              `A maze with one thin wall. That's his mark, and that's a back door, cut into the stone when it was made.`,
              `And the south one's been scratched through. Someone found it before us and closed it. Your old master, if I had to bet.`,
              `I'll recut the other two tonight. Tell Ysolde and nobody else. And take this chip for your trouble: Brassdeep stone, no mazes in it. I checked.`,
            ],
          ],
        },
      ],
      reward: { xp: 120, crowns: 50, mats: { chips: 1 } },
    },
    {
      id: `s-nightwatch`,
      title: `Moths at the Window`,
      kind: `side`,
      level: 3,
      giver: `circle:holloway`,
      summary: `Every night Highmore's husks gather along the roads at the edge of the Ward's light. Holloway wants some of them put down.`,
      offer: [
        `You lot get to come back. We don't. So I'll not ask you to do anything I wouldn't.`,
        `Every night since the Night, Highmore's husks come up the roads and stand at the edge of the Ward's light, like moths at a window. My lads can't reach them from the walls.`,
        `Go out after dark and put eight of them down. Mind the ones with bells: they call the rest.`,
      ],
      steps: [
        {
          t: `kill`,
          text: `Put down husks at the edge of the Ward`,
          kinds: [`husk`, `husksweeper`, `bellhusk`],
          count: 8,
          night: !0,
        },
        {
          t: `talk`,
          text: `Report to Captain Holloway`,
          npcs: [`circle:holloway`],
          lines: [
            [
              `Eight. Most of them will be back up at nightfall, unless you burned them to nothing.`,
              `Still. Eight fewer at the window tonight. My lads slept.`,
            ],
          ],
        },
      ],
      reward: { xp: 140, crowns: 50 },
    },
    {
      id: `s-frozen-nets`,
      title: `Frozen Nets`,
      kind: `side`,
      level: 3,
      giver: `shop:Rimewater Catch`,
      summary: `Frost Elementals wandering down from Frostmere are freezing the fishmonger's nets on the Rimewater.`,
      offer: [
        `Frost Elementals, all down the Rimewater. They wander down from Frostmere and freeze my nets solid overnight.`,
        `Folk say they're souls that slipped away from Nethermere when it fell. I don't want to think about that, and I can't sell fish frozen into a net.`,
        `Clear six of them off the north shore, would you?`,
      ],
      steps: [
        {
          t: `kill`,
          text: `Disperse Frost Elementals in Frostmere Reach`,
          kinds: [`wisp`],
          count: 6,
          region: `frost`,
        },
        {
          t: `talk`,
          text: `Return to Rimewater Catch`,
          npcs: [`shop:Rimewater Catch`],
          lines: [
            [
              `Six? The nets are thawing already. Hear that? That's the ice letting go.`,
              `My cousin married a Nethermere man. I keep wondering if one of those elementals... No. Don't answer that. Take your coin.`,
            ],
          ],
        },
      ],
      reward: { xp: 110, crowns: 45, mats: { dust: 2 } },
    },
    {
      id: `s-grey-promise`,
      title: `The Grey Pilgrim's Promise`,
      kind: `side`,
      level: 4,
      giver: `folk:miner-a`,
      summary: `Mother Hessa has sent word to a Slatebridge miner that his wife is only waiting to be remembered. He wants to know if a husk can ever come back.`,
      offer: [
        `Mother Hessa's sent word down the Stormcrown road. She says my Tilde isn't gone. Says she's only waiting to be remembered.`,
        `Tilde got back up, the night Slatebridge fell. I saw her. She walked past me like I was a post.`,
        `You mages have books on this. Ask them, would you? Can a husk come back as itself? I'll not go back to Hessa on a maybe.`,
      ],
      steps: [
        {
          t: `talk`,
          text: `Ask Archivist Maudry in the Library of the Circle`,
          npcs: [`room:library/archivist`],
          lines: [
            [
              `Can a husk come back as itself? You're the second to ask me this week. The first was from the Conclave, and I lied to him.`,
              `The truth is, nobody knows. A husk has no soul in it. If its crystal was Hollowed, the soul is caught inside, waiting. If the crystal simply died, the soul slid down into the Hollow, and no one has ever brought one back from there.`,
              `Slatebridge's crystal was Hollowed. So his wife's soul is somewhere. That's all the Library can honestly say. It's also exactly what Hessa is selling.`,
            ],
          ],
        },
        {
          t: `choice`,
          text: `Tell the Slatebridge miner what you learned`,
          npc: `folk:miner-a`,
          prompt: [`Well? What do your books say?`],
          options: [
            {
              id: `truth`,
              label: `Tell him everything the Archivist said`,
              lines: [
                `> Her soul is caught in the Deepvein. Nobody knows if it can come back. Hessa doesn't either.`,
                `Caught. Not gone. Caught.`,
                `...That's more than Hessa said, and less. I'll stay. For now. If anyone ever does bring one back, you come and tell me first.`,
              ],
            },
            {
              id: `never`,
              label: `Tell him no one has ever come back`,
              lines: [
                `> No one has ever come back. Not from Carthis, not from anywhere.`,
                `No one. Right.`,
                `...Then Hessa's lying, and I knew she was. Thank you for saying it plain. I'll stay in Marizon.`,
              ],
            },
          ],
        },
      ],
      reward: { xp: 110, crowns: 40 },
    },
    {
      id: `s-ash`,
      title: `Ash in the Gutters`,
      kind: `side`,
      level: 5,
      giver: `folk:sweeper`,
      summary: `Imps keep setting the tents of the Ember Camp alight. The street sweeper asks you to thin them out.`,
      offer: [
        `Ash in the gutters again. It blows up from Cindergate, and the imps come with it.`,
        `The Ember Camp's down south, past the Training Field. Cindergate folk, in tents. The imps set their canvas alight every other night, and they've nothing else.`,
        `I sweep. That's what I can do. You can do better. Eight imps, near the camp.`,
      ],
      steps: [
        {
          t: `kill`,
          text: `Slay Imps in the Ashen Wastes`,
          kinds: [`imp`],
          count: 8,
          region: `ash`,
        },
        {
          t: `talk`,
          text: `Tell the street sweeper`,
          npcs: [`folk:sweeper`],
          lines: [
            [
              `Eight. Good. That's eight fewer fires in those tents.`,
              `Varra Kest goes down to the camp some nights, did you know? Sits by the fire with the Cindergate folk and doesn't say anything. I sweep round her.`,
            ],
          ],
        },
      ],
      reward: { xp: 200, crowns: 60 },
    },
    {
      id: `s-unremembered`,
      title: `The Unremembered`,
      kind: `side`,
      level: 5,
      giver: `circle:holloway`,
      after: [`s-nightwatch`],
      summary: `On dark nights the bones of the Unremembered War stand up on their own. Holloway wants them laid to rest.`,
      offer: [
        `There's another lot, west, out on the old battlefield. The Unremembered War. Common folk who wanted the crystals to remember them too, six hundred years back.`,
        `On dark nights their bones stand up by themselves, no dead crystal needed. Mages say the Hollow runs shallow there. I say they've never been let rest.`,
        `Put six of them down. Gently, if there's a gentle way. There isn't.`,
      ],
      steps: [
        {
          t: `kill`,
          text: `Lay the Mummies to rest on the Unremembered Field`,
          kinds: [`barrowhusk`],
          count: 6,
          night: !0,
        },
        {
          t: `talk`,
          text: `Report to Captain Holloway`,
          npcs: [`circle:holloway`],
          lines: [
            [
              `Six. On the field.`,
              `Those were people like me. No spark. They asked to be remembered and got an army for an answer.`,
              `Don't look at me like that. I'm not saying the Concord's wrong. I'm saying somebody should remember them. May as well be you.`,
            ],
          ],
        },
      ],
      reward: { xp: 220, crowns: 70, mats: { dust: 3 } },
    },
    {
      id: `s-highmore-badge`,
      title: `Word of Highmore`,
      kind: `side`,
      level: 6,
      giver: `room:inn/refugee-1`,
      after: [`m1-morning`],
      summary: `A refugee at the Rising Mage saw her brother, a Highmore guard, get back up. She wants his badge from the old Highmore milestone.`,
      offer: [
        `My brother Arne was in the Highmore guard. He held the Hall gates. I saw him get back up.`,
        `I don't want word of him. I want his badge. The guard made a stand at the old milestone on the Highmore way before they fell back. He'd have lost it there.`,
        `It's south-west of town, off the road, past where the Watch will go. Please.`,
      ],
      steps: [
        {
          t: `inspect`,
          text: `Search the old Highmore milestone, south-west of Marizon`,
          spots: [
            {
              ...tQ.milestone,
              name: `The Highmore milestone`,
              lines: [
                `* A milestone, cracked in half: HIGHMORE 9 · MARIZON 3. The grass around it is trampled flat and scorched with ward-light.`,
                `* In the grass lies a household badge in violet and gold. On the back, scratched with a knife point: ARNE.`,
              ],
            },
          ],
        },
        {
          t: `talk`,
          text: `Bring the badge to the refugee at the Rising Mage`,
          npcs: [`room:inn/refugee-1`],
          lines: [
            [
              `That's his. That's his.`,
              `He always said he'd scratch his name on it so nobody could say he ran. He didn't run.`,
              `If you go further down that road, and you see him... Don't tell me. Just let him rest, if you can.`,
            ],
          ],
        },
      ],
      reward: { xp: 200, crowns: 60 },
    },
    {
      id: `s-bristles`,
      title: `Shard Bristles`,
      kind: `side`,
      level: 7,
      giver: `shop:Shardcutter`,
      summary: `The Shardcutter needs clean crystal. The moose of the Verdant Glade grow shard in their antlers.`,
      offer: [
        `Crystal's dear since the Night. Every cart from Aldmere comes in half empty, and the Conclave keeps the rest.`,
        `But the moose out in the Glade grow shard in their antlers, grazing crystal-fed fields. Most of it shatters when they fall. Some doesn't.`,
        `Bring me six good tines and I'll make it worth your while.`,
      ],
      steps: [
        {
          t: `loot`,
          text: `Collect shard tines from the moose in the Verdant Glade`,
          kinds: [`boar`],
          count: 6,
          chance: 0.7,
          item: `Shard tines`,
          region: `glade`,
        },
        {
          t: `talk`,
          text: `Bring the tines to the Shardcutter`,
          npcs: [`shop:Shardcutter`],
          lines: [
            [
              `Now these are clean. Look at the grain on that one: Aether Crystal stock, near enough.`,
              `The Glade only grows shard like this near a happy crystal. Ours is still happy. Keep it that way, would you?`,
            ],
          ],
        },
      ],
      reward: { xp: 260, crowns: 80, mats: { shards: 2 } },
    },
    {
      id: `s-grey-glade`,
      title: `Grey in the Glade`,
      kind: `side`,
      level: 8,
      giver: `shop:The Glade Basket`,
      summary: `Something is turning the far Glade grey from the root. The herbalist wants to know if the blight is spreading.`,
      offer: [
        `Something's turning the far Glade grey. Not autumn. The grass goes grey from the root, and the blobs out there have gone black-red and hungry.`,
        `Blight Blobs, the Watch calls them. A blob is what happens when a crystal is too happy. These are what happens when one is Hollowed.`,
        `Clear some of them out past the farmsteads, and I'll know whether it's spreading or sitting still.`,
      ],
      steps: [
        {
          t: `kill`,
          text: `Slay Blight Blobs in the far Verdant Glade`,
          kinds: [`blightslime`],
          count: 6,
        },
        {
          t: `talk`,
          text: `Return to the Glade Basket`,
          npcs: [`shop:The Glade Basket`],
          lines: [
            [
              `Six, and they split when you struck them? Then they're feeding. It's spreading.`,
              `Slatebridge is east, past the Golem Grounds. Its crystal is Hollowed now. The blight's coming down the Stormcrown road a field at a time.`,
              `Take this. And if you're ever out that way, don't eat anything that grows grey.`,
            ],
          ],
        },
      ],
      reward: { xp: 320, crowns: 90, item: { rarity: `runed` } },
    },
  ],
  iQ = [...nQ, ...rQ];
