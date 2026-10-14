// assets__index-BTsv3a2s 279 — tolowercase
// Lines 171008-171240 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function fde(e) {
  let t = (e[0] ?? ``).toLowerCase(),
    n = e.slice(1);
  if (t === `mats` || t === `reagents`) {
    let [e] = z9(n);
    return { t: `host`, command: { cmd: `loot`, what: `mats`, n: e ?? 1 } };
  }
  if (t === `unique` || t === `named`) {
    let e = B9(n);
    if (!e) return { t: `error`, text: `loot unique what? Try list uniques.` };
    let t = I9(e, ja, cde);
    if (`error` in t)
      return {
        t: `error`,
        text:
          t.error === `many`
            ? `Which one? ${R9(t.options, 8)}.`
            : `No named item called "${e}". Try list uniques.`,
      };
    let [r] = z9(n);
    return {
      t: `host`,
      command: { cmd: `loot`, what: `unique`, unique: t.id, level: r ?? 0 },
    };
  }
  if (t === `book` || t === `spellbook`) {
    let e = B9(n),
      t;
    if (e) {
      let n = I9(e, be, lde);
      if (`error` in n)
        return {
          t: `error`,
          text:
            n.error === `many`
              ? `Which one? ${R9(n.options, 8)}.`
              : `No spell called "${e}". Try list spells.`,
        };
      t = n.id;
    }
    let [r, i] = z9(n);
    return {
      t: `host`,
      command: {
        cmd: `loot`,
        what: `book`,
        spell: t,
        n: r ?? 1,
        level: i ?? 0,
      },
    };
  }
  let r = t === `gear` ? n : e,
    i = r.find((e) => ka.includes(e.toLowerCase()))?.toLowerCase(),
    a = B9(r.filter((e) => e.toLowerCase() !== i)),
    o;
  if (a) {
    let e = I9(a, ga, ude);
    if (`error` in e)
      return { t: `error`, text: `No rarity called "${a}": ${ga.join(`, `)}.` };
    o = e.id;
  }
  let [s, c] = z9(r);
  return {
    t: `host`,
    command: {
      cmd: `loot`,
      what: `gear`,
      rarity: o,
      base: i,
      n: s ?? 1,
      level: c ?? 0,
    },
  };
}
function pde(e) {
  let t = e.trim().toLowerCase();
  if (!t)
    return {
      t: `error`,
      text: `enter where? A room (inn, shop-10) or a trade (bag, smithy, book). Tab lists them.`,
    };
  if (w9.includes(t) || /^shop-\d+$/.test(t))
    return { t: `host`, command: { cmd: `enter`, room: t } };
  let n = I9(t, E9, (e) => [T9[e]]);
  return `id` in n
    ? { t: `host`, command: { cmd: `enter`, room: n.id } }
    : n.error === `many`
      ? {
          t: `error`,
          text: `Which one? ${R9(
            n.options.map((e) => `${e} (${T9[e]})`),
            8,
          )}.`,
        }
      : { t: `host`, command: { cmd: `enter`, room: t } };
}
function mde(e) {
  let t = e.split(/\s+/),
    n = t[t.length - 1],
    r = e.length - n.length,
    i = t
      .slice(0, -1)
      .map((e) => e.toLowerCase())
      .filter(Boolean),
    a = i[0] ? (M9[i[0]] ?? i[0]) : void 0,
    o = n.toLowerCase(),
    s = (e) => e.filter((e) => e.toLowerCase().startsWith(o)),
    c = [];
  return (
    a
      ? a === `help` && i.length === 1
        ? (c = D9.map((e) => e.name))
        : a === `spawn` && i.length === 1
          ? (c = L9.filter((e) => !Fe[e].rite))
          : a === `god` && i.length === 1
            ? (c = [`on`, `off`])
            : a === `list` && i.length === 1
              ? (c = N9)
              : a === `loot` && i.length === 1
                ? (c = [`unique`, `book`, `mats`, ...ga, ...ka])
                : a === `loot` && i.length === 2 && i[1] === `unique`
                  ? (c = ja)
                  : a === `loot` && i.length === 2 && i[1] === `book`
                    ? (c = be)
                    : a === `enter` && i.length === 1
                      ? (c = [...w9, ...E9])
                      : a === `breach` && i.length === 1
                        ? (c = O9)
                        : a === `missing` && i.length === 1
                          ? (c = A9)
                          : a === `missing` && i.length === 2
                            ? (c = O9)
                            : a === `drama` && i.length === 1
                              ? (c = j9)
                              : a === `deed` && i.length === 1
                                ? (c = z$)
                                : a === `deed` && i.length === 2 && (c = k9)
      : (c = D9.map((e) => e.name)),
    { from: r, options: s(c) }
  );
}
function hde(e) {
  if (e.length === 0) return ``;
  let t = e[0];
  for (let n of e)
    for (; !n.toLowerCase().startsWith(t.toLowerCase());) t = t.slice(0, -1);
  return t;
}
function gde(e) {
  if (e) {
    let t = D9.find((t) => t.name === e);
    return t
      ? [
          { text: t.usage, tone: `head` },
          ...(t.more ?? []).map((e) => ({ text: e, tone: `head` })),
          { text: t.about },
          ...(t.examples?.length
            ? [{ text: `e.g. ` + t.examples.join(`  ·  `), tone: `muted` }]
            : []),
        ]
      : [{ text: `No command "${e}". Type help.`, tone: `err` }];
  }
  return [
    ...D9.map((e) => ({ text: e.usage, aside: e.short, tone: `head` })),
    {
      text: `Tab completes, ↑ ↓ walk your history, Esc closes. help <command> for more.`,
      tone: `muted`,
    },
  ];
}
function _de(e) {
  return [
    e.incursion
      ? `Key`
      : e.boss
        ? `boss`
        : e.named
          ? `named`
          : e.elite
            ? `elite`
            : ``,
    e.night ? `night` : ``,
    e.rite ? `rite only` : ``,
    e.summoned ? `summoned` : ``,
  ]
    .filter(Boolean)
    .join(`, `);
}
function vde(e, t) {
  let n = P9(t),
    r = (...e) => !n || e.some((e) => P9(e).includes(n)),
    i = [];
  return (
    (i =
      e === `creatures`
        ? L9.filter((e) => r(e, Fe[e].name))
            .sort((e, t) => Fe[e].level - Fe[t].level || e.localeCompare(t))
            .map((e) => {
              let t = Fe[e],
                n = _de(t);
              return {
                text: `${e.padEnd(14)} ${t.name.padEnd(24)} lv ${String(t.level).padStart(2)}${n ? `  ` + n : ``}`,
                tone: t.rite ? `muted` : void 0,
              };
            })
        : e === `uniques`
          ? ja
              .filter((e) => r(e, Aa[e].name))
              .map((e) => ({
                text: `${e.padEnd(22)} ${Aa[e].name}`,
                color: _a[Aa[e].rarity].color,
              }))
          : e === `spells`
            ? be
                .filter((e) => r(e, Se(e)?.name ?? ``))
                .map((e) => ({ text: `${e.padEnd(14)} ${Se(e)?.name ?? ``}` }))
            : ga
                .filter((e) => r(e, _a[e].name, _a[e].common))
                .map((e) => ({
                  text: `${e.padEnd(12)} ${_a[e].common}`,
                  color: _a[e].color,
                }))),
    i.length ? i : [{ text: `Nothing in ${e} matches "${t}".`, tone: `muted` }]
  );
}
var yde = [
  [`crowns`, `Crowns`],
  [`dust`, `Aether Dust`],
  [`shards`, `shards`],
  [`motes`, `motes`],
  [`chips`, `chips`],
];
