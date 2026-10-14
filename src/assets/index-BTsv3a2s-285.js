// index-BTsv3a2s 285 — hud
// Lines 172630-172656 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var Ide = {},
  Lde = {},
  Rde = 5e3,
  zde = new Set([
    `spellbook`,
    `settings`,
    `satchel`,
    `journal`,
    `atlas`,
    `party`,
    `stance`,
    `homestead`,
    `build`,
    `provisions`,
    `market`,
    `hearth`,
    `road`,
    `interact`,
  ]),
  Bde = `.hud .panel, .hud .action-bar, .hud-menu, .hud .help, .hud-rail, .minimap-panel, .skill-point-btn, .market-btn, .pvp-stack > *, .zone-pill, .fps-meter, .settings-panel, .mage-menu, .touch-menu, .touch-actions > *, .touch-stick`,
  K9 = (e) =>
    !e ||
    !!e.cine ||
    !!e.story?.chatting ||
    !!e.story?.locked ||
    !!e.story?.dialogue ||
    !!e.story?.narration;
