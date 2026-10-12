// assets__index-BTsv3a2s 240 — children
// Lines 159145-159471 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Cce({ id: e, x: t, y: n, w: r, h: i, state: a, road: o }) {
  let s = Gu(e);
  if (!s) return null;
  let c = Tu.filter((e) => s.attrs[e]).map((e) => ({
      a: e,
      t: `+${s.attrs[e]} ${Au[e].name}`,
    })),
    l = s.desc ?? (c.length ? Au[c[0].a].desc : null),
    u = t + 250 > r ? Math.max(8, t - 246) : t + 16,
    d = Math.min(Math.max(8, n + 16), Math.max(8, i - 170));
  return (0, Q.jsxs)(`div`, {
    className: `arc-hover`,
    role: `tooltip`,
    style: { left: u, top: d, "--c": Q8(s.region) },
    children: [
      (0, Q.jsxs)(`span`, {
        className: `arc-hover-kind`,
        children: [$8(s.region), ` · `, s.kind],
      }),
      (0, Q.jsx)(`b`, { children: s.name }),
      c.length > 0 &&
        (0, Q.jsx)(`div`, {
          className: `arc-hover-gains`,
          children: c.map((e) =>
            (0, Q.jsx)(
              `span`,
              { style: { color: Au[e.a].color }, children: e.t },
              e.a,
            ),
          ),
        }),
      l && (0, Q.jsx)(`p`, { children: l }),
      (0, Q.jsx)(`small`, {
        children:
          a === `taken`
            ? `Woven`
            : a === `open`
              ? `Within reach · 1 point`
              : o
                ? `${o} points away`
                : `Out of reach`,
      }),
    ],
  });
}
function wce() {
  return (0, Q.jsxs)(`g`, {
    className: `arc-chart-ornaments`,
    "aria-hidden": `true`,
    children: [
      (0, Q.jsx)(`circle`, { r: `641` }),
      (0, Q.jsx)(`circle`, { r: `656` }),
      (0, Q.jsx)(`circle`, { r: `676` }),
      (0, Q.jsx)(`circle`, { r: `307`, strokeDasharray: `2 7` }),
      (0, Q.jsx)(`circle`, { r: `128` }),
      Array.from({ length: 120 }, (e, t) => {
        let n = (t * Math.PI) / 60,
          r = t % 5 == 0 ? 664 : 670;
        return (0, Q.jsx)(
          `path`,
          {
            d: `M${Math.cos(n) * r} ${Math.sin(n) * r}L${Math.cos(n) * 676} ${Math.sin(n) * 676}`,
          },
          t,
        );
      }),
      Array.from({ length: 90 }, (e, t) =>
        (0, Q.jsx)(
          `circle`,
          {
            className: `arc-star`,
            cx: Math.sin(t * 73.13) * 680,
            cy: Math.cos(t * 29.27) * 680,
            r: t % 7 == 0 ? 1.7 : 0.8,
            style: {
              animationDelay: `${(t * 0.37) % 5}s`,
              animationDuration: `${3 + (t % 4)}s`,
            },
          },
          `s${t}`,
        ),
      ),
    ],
  });
}
function a5() {
  return (0, v.useSyncExternalStore)(bG, yG, yG);
}
function o5({ touch: e, muted: t }) {
  let n = WW.name === `aws`,
    { map: r, binds: i } = a5(),
    { holdBlink: a, autoAim: o } = (0, v.useSyncExternalStore)(xl, _l, _l);
  if (e)
    return (0, Q.jsxs)(Q.Fragment, {
      children: [
        (0, Q.jsx)(`div`, {
          children: `Left thumb — move (the stick appears where you touch)`,
        }),
        n &&
          (0, Q.jsx)(`div`, {
            children: `Drag the stick well past its rim — sprint (the gold bar is your stamina)`,
          }),
        (0, Q.jsx)(`div`, {
          children: `Tap the world — cast your first spell there (hold to keep casting); a mage's name — their menu`,
        }),
        (0, Q.jsxs)(`div`, {
          children: [
            `Big button — first spell, `,
            o
              ? `at the nearest foe the way you're heading`
              : `where the stick points`,
            ` (Auto-aim, in Settings)`,
          ],
        }),
        (0, Q.jsxs)(`div`, {
          children: [
            `Small buttons — second spell, ultimate, blink (blink follows the stick`,
            a ? `; hold it to jump further` : ``,
            `)`,
          ],
        }),
        (0, Q.jsxs)(`div`, {
          children: [
            `Gold button — talk / look / Kindle / an altar`,
            n ? ` / trade with a shopkeeper` : ``,
            `, when there's something here`,
          ],
        }),
        (0, Q.jsx)(`div`, {
          children: `Road — the Chorus Road (at an altar or the Aether Crystal)`,
        }),
        n &&
          (0, Q.jsx)(`div`, {
            children: `Market — in a shop: buy what its keeper sells, sell your Provisions`,
          }),
        n &&
          (0, Q.jsx)(`div`, {
            children: `Hearth — sing home to the Aether Crystal (tap again, or Stop, to end it)`,
          }),
        (0, Q.jsx)(`div`, {
          children: `Bag · Quests · Spells · Chat — along the top right`,
        }),
        (0, Q.jsxs)(`div`, {
          children: [
            `Chat — `,
            n
              ? `Realm/Near/Party picks who hears you; tap a name to whisper; `
              : ``,
            `Settings hides realm news`,
          ],
        }),
        (0, Q.jsxs)(`div`, {
          children: [
            `Menu — the game menu: `,
            n ? `your party, ` : ``,
            `settings, controls, change mage, quit`,
          ],
        }),
        (0, Q.jsx)(`div`, { children: `Tap — advance dialogue` }),
        (0, Q.jsx)(`div`, {
          children: `Veiled / Bared — whether your spells hurt other mages outside the Ward`,
        }),
      ],
    });
  let s = (e) => Bi(oG(e)),
    c = [Bi(i[QW]), TG() ? `Shift` : ``].filter(Boolean).join(` / `);
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsxs)(`div`, { children: [UG(), ` — move`] }),
      n &&
        oG(`sprint`) &&
        (0, Q.jsxs)(`div`, {
          children: [
            s(`sprint`),
            ` (hold) — sprint while you walk (the gold bar is your stamina)`,
          ],
        }),
      (0, Q.jsxs)(`div`, {
        children: [
          `Mouse — aim`,
          o
            ? ` (Auto-aim is on: keys and clicks go to the foe under it, or the nearest along its line)`
            : ` (Auto-aim, in Settings: keys and clicks go to the nearest foe along it)`,
        ],
      }),
      (0, Q.jsxs)(`div`, {
        children: [
          WG(),
          ` — your hotbar spells (LMB and RMB cast the first two)`,
        ],
      }),
      c &&
        (0, Q.jsxs)(`div`, {
          children: [
            c,
            ` — blink`,
            a
              ? ` (hold to jump further, as far as the cursor; Esc lets go)`
              : ``,
          ],
        }),
      (0, Q.jsxs)(`div`, {
        children: [
          s(`spellbook`),
          ` — Spellbook: passive tree (+ − 0 zoom; giving back is free), spells, hotbar`,
        ],
      }),
      (0, Q.jsxs)(`div`, {
        children: [
          s(`interact`),
          ` — talk / look, Kindle (at the Aether Crystal), a Crystal Altar, search leavings`,
          n ? `, trade with a shopkeeper who has no quest for you` : ``,
        ],
      }),
      (0, Q.jsxs)(`div`, {
        children: [
          s(`road`),
          ` — the Chorus Road (at an altar or the Aether Crystal)`,
        ],
      }),
      n &&
        (0, Q.jsxs)(`div`, {
          children: [
            s(`hearth`),
            ` — Hearthsong: home to the Aether Crystal (`,
            s(`hearth`),
            ` again to stop)`,
          ],
        }),
      (0, Q.jsxs)(`div`, {
        children: [
          s(`journal`),
          ` — journal, or the book at the bottom left · 1-4 — pick a reply`,
        ],
      }),
      (0, Q.jsxs)(`div`, {
        children: [
          s(`atlas`),
          ` — world atlas, or open it from the minimap or game menu`,
        ],
      }),
      (0, Q.jsxs)(`div`, {
        children: [
          s(`satchel`),
          ` — satchel, or the pouch beside it (Equip best) · Alt — loot labels`,
        ],
      }),
      (0, Q.jsxs)(`div`, {
        children: [
          s(`stance`),
          ` — bare or veil (Bared, your spells hurt other mages outside the Ward)`,
        ],
      }),
      (0, Q.jsxs)(`div`, {
        children: [
          `Click a mage's name — their menu: `,
          n ? `whisper, invite to your party, ` : ``,
          `ignore (out of a fight)`,
          oG(`mageMenu`) ? ` · ${s(`mageMenu`)} — the nearest mage's menu` : ``,
        ],
      }),
      n &&
        (0, Q.jsx)(`div`, {
          children: oG(`party`)
            ? `${s(`party`)} — Party: your party, invitations, the mages near you`
            : `Party (in the game menu) — your party, invitations, the mages near you`,
        }),
      n &&
        (0, Q.jsxs)(`div`, {
          children: [
            s(`homestead`),
            ` — your homestead · `,
            s(`build`),
            ` — build there · `,
            s(`provisions`),
            ` — Provisions · `,
            s(`market`),
            ` — the shop you stand in: buy, sell`,
          ],
        }),
      n
        ? (0, Q.jsxs)(`div`, {
            children: [
              ta(r.chat),
              ` — chat`,
              oG(`chat`)
                ? ` · / — a command: /s nearby, /w name whisper, /r reply, /p your party`
                : ``,
              ` · Tab — to the realm, nearby or your party`,
            ],
          })
        : (0, Q.jsxs)(`div`, { children: [ta(r.chat), ` — chat`] }),
      (0, Q.jsxs)(`div`, {
        children: [
          s(`mute`),
          ` — `,
          t ? `unmute` : `mute`,
          ` · `,
          s(`settings`),
          ` — settings: graphics, sound, screen, text, chat, quest guidance, casting (Blink's hold, auto-aim); Controls: every key`,
        ],
      }),
      (0, Q.jsx)(`div`, {
        children: `Esc — the game menu (when nothing else is open)`,
      }),
    ],
  });
}
var s5 = `Inside the Lumen Ward is safe ground, and it heals you quickly. Outside it, other mages can fight you, and a mage they slay drops everything. Walk into a shop's door to go inside. A ! means someone has a quest for you, a ? that they're waiting to hear back: on a gold diamond for the story, a blue disc for a side quest.`,
  Tce = [
    { group: `world`, title: `In the world` },
    { group: `panels`, title: `Panels` },
  ],
  Ece = Array.from({ length: QW + 1 }, (e, t) => t),
  Dce = (e, t) =>
    !!e &&
    e.t === t.t &&
    e.i === t.i &&
    (e.t === `slot` || (t.t === `action` && e.a === t.a)),
  Oce = (e) => (e.t === `slot` ? `s:${e.i}` : `a:${e.a}:${e.i}`);
function kce(e) {
  let t = /^(?:s:(\d+)|a:([A-Za-z]+):([01]))$/.exec(e ?? ``);
  if (!t) return null;
  if (t[1] !== void 0) return { t: `slot`, i: Number(t[1]) };
  let n = oi.find((e) => e.id === t[2]);
  return n ? { t: `action`, a: n.id, i: Number(t[3]) } : null;
}
