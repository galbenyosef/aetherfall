// index-BTsv3a2s 207 — idris
// Lines 129864-129980 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function* YZ(e) {
  let t = e.g;
  (yield e.camTo(SZ.x - 1.1, SZ.y - 0.5, 1.2, 0.85),
    yield* e.wovenStrike(),
    (t.dome.breach = 1),
    yield e.wait_(0.5));
  for (let t = 0; t < 4; t++)
    e.spawnLocal(`recalled`, SZ.x + 1.2 - (t % 2) * 0.8, SZ.y - 1.6 + t * 0.9);
  (yield e.wait_(0.6),
    yield* GZ(e, `idris`, `Hold the Circle. I'll go to her. Alone.`),
    (e.npc(`idris`).channel = !1),
    e.blinkNpc(`idris`, DZ.x, DZ.y),
    e.cine(!1),
    yield* UZ(e),
    (e.siege = !0),
    (e.slain = 0),
    e.setObjective(`Cut through the Recalled`, 4),
    e.track(() => e.slain),
    yield e.until(() => e.slain >= 4),
    (e.siege = !1),
    e.setObjective(`Follow Master Idris to the breach`),
    e.track(() => 0),
    (e.marker = e.npc(`idris`)),
    yield e.until(() => e.distTo(`idris`) < 2.6),
    (e.marker = null),
    e.cine(!0));
  let n = e.npc(`lillith`);
  (e.moveNpc(`lillith`, DZ.x + 2.4, DZ.y - 0.4, 1.4),
    e.face(`idris`, DZ.x + 2.4, DZ.y),
    yield e.camTo(DZ.x + 1, DZ.y - 0.8, 1.4, 1),
    yield e.say(
      `lillith`,
      `You taught me the Ward, Master. You taught me where it's weakest.`,
    ),
    yield e.say(
      `idris`,
      `I did. And I won't fight you, Lillith. Not tonight. Not ever.`,
    ),
    yield e.say(
      `lillith`,
      `No. You never would fight. Not for Caelan, and not for this town.`,
    ),
    e.startUnmaking(),
    (e.night = 0.78),
    yield e.wait_(1.4),
    yield e.say(`idris`, `{name}, stay back. Whatever happens now, stay back.`),
    e.face(`idris`, kZ.x, kZ.y),
    yield e.camTo((DZ.x + kZ.x) / 2, (DZ.y + kZ.y) / 2, 1.2, 0.4),
    e.startPour(),
    e.skipping || q.sfx(`levelup`, 0.7),
    yield e.wait_(2.4),
    e.stopPour(),
    e.stopUnmaking(),
    (t.dome.target = 2.6),
    (t.dome.breach = 0),
    (t.dome.cracks = []),
    e.startShock(),
    e.removeLocal(),
    e.skipping ||
      ((t.shake = 12),
      q.sfx(`boom`, 1),
      (t.flash = { color: `#ffffff`, a: 0.9 })),
    (e.night = 0.66),
    yield e.wait_(0.35),
    e.moveNpc(`lillith`, SZ.x + 9.4, SZ.y - 1.2, 0.6),
    yield e.wait_(1),
    (t.dome.target = 1),
    yield e.camTo(SZ.x + 6.9, SZ.y - 1.2, 1.2, 1),
    yield e.say(`lillith`, `No. No, Master, I didn't... I never meant...`),
    e.skipping ||
      (t.particles.burst(
        n.x * 16,
        n.y * 16 - 30,
        90,
        [...Bh.map((e) => zh[e].glow), `#ffffff`],
        120,
      ),
      q.sfx(`blink`, 0.8)),
    (n.visible = !1),
    yield e.wait_(1),
    yield e.camTo(kZ.x, kZ.y + 1.5, 2.4, 1),
    e.skipping || (t.flash = { color: `#bff7ff`, a: 0.4 }),
    yield e.say(
      `crystal`,
      `The Crystal remembers you, {name}. Whenever you fall, I'll be here to say it: rise, mage.`,
    ));
}
function* XZ(e) {
  let t = e.g;
  (e.startDawn(4),
    (t.dome.target = 0.6),
    e.showCaption(`DAWN`, `Refugees from Highmore reach Marizon's gates.`, 4.2),
    yield e.wait_(3.2),
    yield* GZ(
      e,
      `ysolde`,
      `Highmore's ward opened from the inside. Aldmere is pulling every mage it can behind its own walls. No help is coming.`,
    ),
    yield* GZ(
      e,
      `varra`,
      `Then we stop waiting for help and start hitting back.`,
    ),
    yield* GZ(
      e,
      `ysolde`,
      `{name}. The Circle will hold Marizon. Someone has to warn the towns still standing, take back the ones that fell, and learn what happened at Vespertine.`,
    ),
    yield e.say(`ysolde`, `Idris would have sent you first. So go.`),
    (e.siege = !1),
    (t.dome.target = 0.35),
    e.showTitle(`PROLOGUE COMPLETE`, `The Night of Keys  ·  +60 XP`, 4.2),
    e.skipping || q.sfx(`levelup`, 1),
    yield e.wait_(4.2),
    e.cine(!1),
    e.finish());
}
