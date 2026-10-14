// index-BTsv3a2s 280 — tone
// Lines 171241-171382 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function bde(e, t) {
  switch (e.cmd) {
    case `status`:
      return [
        t.on
          ? {
              text: `The console is on here (${t.room}). God mode ${t.god ? `on` : `off`}.`,
              tone: `ok`,
            }
          : {
              text: `This realm server keeps the console off. Set DEV_CONSOLE on the zone hosts (DEV_MODE=1 turns it on for everyone).`,
              tone: `err`,
            },
      ];
    case `spawn`:
      return [
        {
          text: `Called up ${t.n} × ${t.name ?? e.kind} (lv ${t.level}).`,
          tone: `ok`,
        },
      ];
    case `despawn`:
      return [
        {
          text: t.n
            ? `Sent ${t.n} back.`
            : `Nothing the console called up is standing here.`,
          tone: t.n ? `ok` : `muted`,
        },
      ];
    case `kill`:
      return [
        {
          text: t.n ? `Felled ${t.n}.` : `Nothing in reach.`,
          tone: t.n ? `ok` : `muted`,
        },
      ];
    case `god`:
      return [
        {
          text: t.god ? `God mode on: nothing can hurt you.` : `God mode off.`,
          tone: `ok`,
        },
      ];
    case `loot`: {
      let e = t.items ?? [],
        n = yde
          .filter(([e]) => (t.mats?.[e] ?? 0) > 0)
          .map(([e, n]) => `+${t.mats[e]} ${n}`),
        r = [];
      e.length &&
        r.push({
          text: `Laid ${e.length} at your feet (Alt shows their names):`,
          tone: `ok`,
        });
      for (let t of e)
        r.push({
          text: `  ${Xa(t)} · ${_a[t.rarity].name}, item level ${t.ilvl}`,
          color: _a[t.rarity].color,
        });
      return (
        n.length &&
          r.push({ text: `Into your pouch: ${n.join(`, `)}.`, tone: `ok` }),
        r.length ? r : [{ text: `Nothing came of it.`, tone: `muted` }]
      );
    }
    case `level`:
      return [{ text: `You're level ${t.level}.`, tone: `ok` }];
    case `enter`: {
      let e = t.trade ? T9[t.trade] : void 0;
      return [
        {
          text: e
            ? `Stepped into the ${e}, ${t.room}.`
            : `Stepped into the ${t.room}.`,
          tone: `ok`,
        },
      ];
    }
    case `drama`:
      return [
        {
          text: `${W$.find((t) => t.id === e.kind)?.name ?? e.kind}: if its people are in town and well, it starts now.`,
          tone: `ok`,
        },
      ];
    case `deed`: {
      let t = H$.find((t) => t.id === e.kind)?.name ?? e.kind;
      return [
        {
          text: `Done: ${e.what}, ${t}. They know it, and so do theirs; give it a minute to get about.`,
          tone: `ok`,
        },
      ];
    }
    case `missing`:
      return [
        {
          text: `${H$.find((t) => t.id === e.kind)?.name ?? e.kind} is out past the Ward${e.room ? ` beyond ${U$.find((t) => t.id === e.room)?.name}` : ``}. Their kin will notice.`,
          tone: `ok`,
        },
      ];
    case `breach`: {
      let e = U$.find((e) => e.id === t.room)?.name;
      return [
        {
          text: `The Ward will break ${e ? `at ${e}` : `at a gate`} as soon as a mage is in Marizon: listen for the bell.`,
          tone: `ok`,
        },
      ];
    }
    case `floor`:
      return [{ text: `To floor ${(t.floor ?? e.n) + 1}.`, tone: `ok` }];
    case `tp`:
      return [
        {
          text: `Standing at ${Math.floor(e.x)}, ${Math.floor(e.y)}.`,
          tone: `ok`,
        },
      ];
  }
}
function xde(e) {
  return e.trim().replace(/\s+/g, ` `);
}
var V9 = `aetherfall.devterm.history.v1`;
function Sde() {
  try {
    let e = JSON.parse(localStorage.getItem(V9) ?? `[]`);
    return Array.isArray(e)
      ? e.filter((e) => typeof e == `string`).slice(-60)
      : [];
  } catch {
    return [];
  }
}
function Cde(e) {
  try {
    localStorage.setItem(V9, JSON.stringify(e.slice(-60)));
  } catch {}
}
var wde = `The dev console talks to a zone host that keeps characters: play on the AWS realm (?backend=aws, with docker compose up for the local stack).`;
