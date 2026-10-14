// index-BTsv3a2s 206 — the
// Lines 129544-129863 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function* HZ(e, t) {
  let n = e.g,
    r = e.teacher;
  if ((t <= Ke.PROLOGUE ? yield* KZ(e) : yield* qZ(e, t), t <= Ke.MEET)) {
    (e.save(Ke.MEET), e.setObjective(`Report to {teacher} at the east gate`));
    let t = () => Math.abs(n.me.x - Ar) < 33 && Math.abs(n.me.y - jr) < 31;
    (t() && ((e.marker = CZ), yield e.until(() => !t() || e.distTo(r) < 2.4)),
      (e.marker = e.npc(r)),
      yield e.until(() => e.distTo(r) < 2.4),
      (e.marker = null));
    let i = VZ[n.school] ?? BZ[r];
    yield* WZ(e, r, [
      [r, i[0]],
      [
        `holloway`,
        `Captain Holloway, Marizon Watch. Keep your fire off my people and we'll get along fine, Initiate.`,
      ],
      [r, i[1]],
    ]);
  }
  (t > Ke.MEET && t < Ke.BREACH && (yield* UZ(e)),
    t <= Ke.POWER && (e.recalledKeep = 2),
    t <= Ke.FOCUS &&
      (e.save(Ke.FOCUS),
      (e.hits[0] = 0),
      e.setObjective(`Strike the Recalled with {s1}  [Left Click / 1]`, 3),
      e.track(() => e.hits[0]),
      yield e.until(() => e.hits[0] >= 3),
      yield* WZ(e, r, [
        [r, `Good. Now your {s2}. I want control, not just power.`],
      ])));
  let i = oe(n.school);
  if (
    (t <= Ke.CONTROL &&
      (e.save(Ke.CONTROL),
      (e.hits[1] = 0),
      (e.blocks = 0),
      i[1].kind === `guard`
        ? (e.setObjective(
            `Turn aside a Recalled's claw with your {s2}  [Hold Right Click / 2]`,
            1,
          ),
          e.track(() => e.blocks),
          yield e.until(() => e.blocks >= 1))
        : (e.setObjective(`Hit the Recalled with {s2}  [Right Click / 2]`, 1),
          e.track(() => e.hits[1]),
          yield e.until(() => e.hits[1] >= 1)),
      yield e.wait_(0.5),
      yield* WZ(e, r, [
        [
          r,
          re(n.school) === `mage`
            ? `Now the spell they never let Initiates cast inside the walls. Tonight, cast it.`
            : `Now the art they never let Initiates use inside the walls. Tonight, use it.`,
        ],
      ])),
    t <= Ke.POWER &&
      (e.save(Ke.POWER),
      (e.hits[2] = 0),
      e.setObjective(
        i[2].kind === `ward`
          ? `Raise {s3} on the Ward-line  [3]`
          : i[2].kind === `veil`
            ? `Step into the Veil with {s3}: let them lose you  [3]`
            : `Unleash {s3} on the Recalled  [3]`,
        1,
      ),
      e.track(() => e.hits[2]),
      yield e.until(() => e.hits[2] >= 1),
      (e.recalledKeep = 0),
      yield e.wait_(0.8),
      e.removeLocal()),
    t <= Ke.BLINK)
  ) {
    e.save(Ke.BLINK);
    let t = e.npc(`watchman`);
    (e.cine(!0), yield e.camTo(t.x - 1, t.y - 0.5, 0.9));
    for (let n = 0; n < 2; n++)
      e.spawnLocal(`recalled`, SZ.x + 1.6, t.y - 0.8 + n * 1.6, `watchman`);
    (yield e.say(`watchman`, `Captain! They're through, they're on me!`),
      yield e.say(
        `holloway`,
        `Pell! Initiate, you're faster than any of us. Get to him!`,
      ),
      e.cine(!1),
      (e.blinks = 0),
      e.setObjective(
        ce(n.school)
          ? `Blink to Watchman Pell's side  [Space]`
          : `Dash to Watchman Pell's side  [Space]`,
      ),
      e.track(() => 0),
      (e.marker = t),
      yield e.until(
        () => e.blinks > 0 && Math.hypot(n.me.x - t.x, n.me.y - t.y) < 2,
      ),
      (e.marker = null),
      e.cine(!0),
      e.launch(0.12, 1.5, !1, `storm`, 0.5, () => {
        (e.wardImpact(0.12, 1.5, !1),
          e.skipping ||
            (n.particles.burst(
              t.x * 16,
              t.y * 16 - 10,
              50,
              [zh.storm.glow, `#ffffff`],
              110,
            ),
            (n.flash = { color: `#ffffff`, a: 0.4 })),
          (t.fallen = !0),
          e.removeLocal());
      }),
      yield e.wait_(1.2),
      e.moveNpc(`holloway`, t.x - 0.9, t.y - 0.2, 0.8),
      yield e.camTo(t.x - 0.5, t.y - 0.3, 0.8),
      yield e.say(`holloway`, `Pell? ...Pell.`),
      yield e.say(
        `holloway`,
        `No crystal remembers the Watch. You know that, Initiate? No spark, no attunement.`,
      ),
      yield e.say(`holloway`, `You lot get to come back. We don't.`),
      yield e.say(r, `...I'm sorry, Bram.`),
      e.moveNpc(`holloway`, OZ.x, OZ.y, 1),
      e.cine(!1));
  }
  ((e.skillsTaught = !0),
    t <= Ke.SKILLS &&
      (e.save(Ke.SKILLS),
      yield* WZ(e, r, [
        [
          r,
          `Grieve later, {name}. Right now, decide what kind of mage you'll be. Open your passive tree, and choose what grows in you.`,
        ],
      ]),
      e.setObjective(`Take a passive on your tree  [K]`),
      yield e.until(() => Ju(n.meDoc?.passives) >= 1),
      yield e.wait_(0.8)),
    e.save(Ke.BREACH),
    yield* JZ(e),
    yield* YZ(e),
    yield* XZ(e));
}
function* UZ(e) {
  let t = e.g,
    n = () => Math.hypot(t.me.x - EZ.x, t.me.y - EZ.y) > 10;
  if (!n()) return;
  let r = e.objective;
  (e.setObjective(`Return to the east gate`), e.track(() => 0));
  let i = () => Math.abs(t.me.x - Ar) < 33 && Math.abs(t.me.y - jr) < 31;
  for (; n();)
    ((e.marker = i() ? CZ : EZ),
      yield e.until(() => !n() || (e.marker === CZ && !i())));
  ((e.marker = null), (e.objective = r));
}
function* WZ(e, t, n) {
  let r = e.g;
  e.cine(!0);
  let i = e.npc(t),
    a = i.dir;
  (e.face(t, r.me.x, r.me.y),
    yield e.camTo((r.me.x + i.x) / 2, (r.me.y + i.y) / 2 - 0.5, 0.8));
  for (let [t, r] of n) yield e.say(t, r);
  ((i.dir = a), e.cine(!1));
}
function* GZ(e, t, n) {
  let r = e.npc(t),
    i = e.cam ?? e.g.cam,
    a = Math.hypot(i.x / 16 - r.x, i.y / 16 - r.y) > 20;
  (yield e.camTo(r.x, r.y - 0.6, a ? 0 : 0.8), yield e.say(t, n));
}
function* KZ(e) {
  let t = e.g;
  (e.cine(!0),
    e.fadeTo(1, 0),
    (t.me.x = TZ.hero.x),
    (t.me.y = TZ.hero.y),
    (t.me.dir = 1),
    e.showCard(`realm`),
    yield e.wait_(0.4),
    e.fadeTo(0, 1.6),
    yield e.wait_(1.2),
    yield e.narrate(
      `A thousand years ago the sky broke, and magic fell into the world as living crystal.`,
      5,
    ),
    yield e.narrate(
      `Twenty crystals light the realm. They feed the land, and they remember every soul attuned to them.`,
      5.5,
    ),
    e.fadeTo(1, 0.8),
    yield e.wait_(0.9),
    e.showCard(`drakkar`),
    e.skipping || q.sfx(`boom`, 0.5),
    e.fadeTo(0, 1.2),
    yield e.wait_(1),
    yield e.narrate(
      `Beneath dead Carthis, the Dark Mage Drakkar Labyrinth has spent nine years forging seven Might Mages.`,
      5.5,
    ),
    yield e.narrate(`He calls them his Keys.`, 3),
    yield e.narrate(`Tonight, seven hands reach for the crystals.`, 4),
    e.fadeTo(1, 1.2),
    yield e.wait_(1.3),
    e.showCard(null),
    (e.siege = !0),
    yield e.camTo(bZ, xZ - 2, 0, 0.55),
    e.fadeTo(0, 2.5),
    e.camTo(SZ.x - 1.6, SZ.y - 0.5, 8, 0.62),
    e.showCaption(`MARIZON`, `The Aether Sanctum, on the Night of Keys`, 4.6),
    yield e.wait_(5),
    e.showCaption(
      `For weeks, Lillith Highmore has struck the Lumen Ward.`,
      `The Conclave calls it a family grudge, and sends no help.`,
      4.6,
    ),
    yield e.wait_(4.8),
    yield e.camTo(bZ + 0.5, xZ + 2.2, 3, 1),
    yield e.say(
      `idris`,
      `Hold still, {name}. Forty years of Initiates, and you still fidget the most.`,
    ),
    yield e.say(
      `idris`,
      `The Aether Crystal remembers every mage attuned to it. In a moment, it will remember you.`,
    ),
    e.skipping ||
      (t.lightPillar(t.me.x * 16, t.me.y * 16, `#8ef6ff`),
      (t.flash = { color: `#bff7ff`, a: 0.5 }),
      q.sfx(`levelup`, 0.8)),
    yield e.wait_(1.6),
    yield e.say(
      `idris`,
      `There. Attuned. Whatever happens now, the crystal knows your name.`,
    ),
    e.launch(0, 2, !1, `ember`, 0.5, () => e.ringWard()),
    yield e.wait_(0.9),
    yield e.say(`idris`, `Right on time. She always was punctual.`),
    yield e.say(
      `idris`,
      `Go to the eastern wall, {name}. {teacher} will teach you what the books left out. I'll hold the Ward.`,
    ),
    e.moveNpc(`idris`, wZ.idris.x, wZ.idris.y, 2.4),
    (e.npc(`idris`).dir = 2),
    e.showTitle(`AETHERFALL`, `Prologue  ·  The Night of Keys`, 4),
    yield e.wait_(4),
    (e.npc(`idris`).channel = !0),
    e.cine(!1));
}
function* qZ(e, t) {
  let n = e.g;
  (e.cine(!0),
    (e.siege = !0),
    (e.npc(`idris`).channel = !0),
    e.fadeTo(1, 0),
    yield e.camTo(n.me.x, n.me.y - 0.5, 0, 1),
    e.fadeTo(0, 1.5),
    e.showCaption(
      `MARIZON`,
      t >= Ke.BREACH
        ? `The Night of Keys. The Ward is failing.`
        : `The Night of Keys. The Ward is thinning.`,
      3.4,
    ),
    yield e.wait_(3),
    e.cine(!1));
}
function* JZ(e) {
  let t = e.g;
  (e.cine(!0),
    (e.siege = !1),
    yield e.camTo(SZ.x - 2.1, SZ.y - 0.5, 1.2, 0.8),
    e.launch(-0.05, 2, !1, `void`, 0.6),
    yield e.wait_(1),
    yield* GZ(
      e,
      `ysolde`,
      `She hit the eastern arc the moment the vigil turned. Again.`,
    ),
    yield* GZ(
      e,
      `varra`,
      `Three nights running. Someone is feeding her our rotations.`,
    ),
    yield* GZ(e, `oriel`, `Say it, then. You're all thinking it.`),
    yield* GZ(
      e,
      `teodor`,
      `Enough! Let me go out to her. She'll listen to me, I know she will.`,
    ),
    yield* GZ(e, `idris`, `No one leaves the Circle tonight. Hold your arcs.`));
  for (let t of e.npcs) t.channel && (t.stagger = 0.6);
  (e.skipping ||
    ((t.flash = { color: `#b01a2a`, a: 0.35 }),
    (t.shake = 6),
    q.sfx(`death`, 0.6)),
    yield e.wait_(0.8),
    e.fadeTo(1, 0.6),
    yield e.wait_(0.7),
    e.showCard(`silence`),
    e.fadeTo(0, 0.8),
    yield e.wait_(1),
    e.fall(`Cindergate`),
    yield e.say(`varra`, `The Emberheart. Cindergate's... gone dark.`),
    e.fall(`Nethermere`),
    e.fall(`Highmore`),
    yield e.say(`ysolde`, `Nethermere. And Highmore. Gods, Highmore too.`),
    e.fall(`Slatebridge`),
    e.fall(`Duskford`),
    yield e.say(`teodor`, `Slatebridge. Duskford. Five voices, all at once.`),
    e.fall(`Vespertine`),
    yield e.say(`oriel`, `Vespertine isn't dark. It's just... quiet.`),
    yield e.say(
      `idris`,
      `The whole realm is falling tonight. Marizon is only one front.`,
    ),
    e.fadeTo(1, 0.8),
    yield e.wait_(0.9),
    e.showCard(null),
    e.fadeTo(0, 1));
}
