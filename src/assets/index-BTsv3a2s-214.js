// index-BTsv3a2s 214 — the
// Lines 133848-133932 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function A$(e) {
  let t = E$[e.post].name,
    n = `The Watch has no spark and no crystal remembers it: a watchman killed on the wall stays dead, and the Watch's dead are carved on the gatehouse wall, Watchman Pell's the newest.`;
  switch (e.rank) {
    case `watchman`:
      return `${e.name} is a watchman of the Marizon Watch, posted at ${t}. ${n} Watchmen get the Circle's coin, an iron cap, a spear and the night shifts nobody else wants.`;
    case `guard`:
      return `${e.name} is a guard of the Marizon Watch in its steel and navy, posted at ${t}. ${n} Guards check every cart and every face through the gates, and since the Night of Keys they check the faces twice.`;
    case `sergeant`:
      return `${e.name} is a sergeant of the Marizon Watch, in its white crest, and keeps a gate from ${t}: its spears, its lamps and its roster, answering to Captain Holloway. ${n}`;
    case `captain`:
      return `${e.name} is one of the Marizon Watch's captains under Captain Bram Holloway, and walks the Crystal Market round the Sanctum all day: the stalls, the shops on the ring road, and crowds the refugees have doubled. ${n}`;
    case `vigilant`:
      return `${e.name} is a Vigilant of the Black Vigil, posted at ${t}: a Paladin, a Sworn Blade of the Lumen Ward, whose spark answered no tone and was sworn to the Ward instead. Marizon's Circle lends five of them to the Watch, in blackened steel, to keep the way to the Aether Crystal. Unlike the Watch they're attuned, and the Crystal remembers them. They leave their post only for someone in the town being hurt, or when a breach gets out of hand.`;
  }
}
var j$ = {
    watchman: [`the Watch`, `the town's people`, `the pay`],
    guard: [`the Watch`, `the gate`, `the town's people`],
    sergeant: [`the gate`, `their watchmen`, `the Watch's good name`],
    captain: [`order in the market`, `the Watch`, `Captain Holloway's trust`],
    vigilant: [
      `the Lumen Ward`,
      `the Vigil's oath`,
      `the lives of the unremembered`,
    ],
  },
  M$ = {
    watchman: `a cot in the Watch's barracks by the south gate`,
    guard: `a bunk in the Watch's barracks by the south gate`,
    sergeant: `the sergeants' room in the Watch's barracks by the south gate`,
    captain: `the captains' rooms over the Watch's barracks by the south gate`,
    vigilant: `the Black Vigil's cells in the Sanctum's gatehouse`,
  };
function N$(e) {
  return e.rank === `captain`
    ? (e.round ?? `patrolSunwise`)
    : e.rank === `vigilant`
      ? `standVigil`
      : `keepGate`;
}
function P$() {
  return D$.map((e) => {
    let t = T$[e.rank],
      n = N$(e);
    return {
      id: e.id,
      name: e.name,
      title: t.title,
      pronoun: e.pronoun,
      people: e.people,
      backstory: `${A$(e)} ${e.who}`,
      traits: e.traits,
      values: j$[e.rank],
      age: e.age,
      household: M$[e.rank],
      faith: e.faith,
      wants: e.wants,
      fears: e.fears,
      secret: e.secret,
      home: e.post,
      routine: { dawn: n, morning: n, noon: n, dusk: n, night: n },
      verbs: [],
      bonds: [],
      token: e.token,
      lines: [
        { id: `says`, text: e.says, when: `their own words, to anyone` },
        {
          id: `confides`,
          text: e.confides,
          when: `their secret, told only to a mage they trust`,
          minStanding: 4,
        },
        ...O$,
        ...k$[e.rank],
      ],
      hp: t.hp,
      level: t.level,
      fights: !0,
      watch: e.rank,
      ...(e.rank === `captain` ? { speed: 1.1 } : {}),
    };
  });
}
({ ...E$ });
