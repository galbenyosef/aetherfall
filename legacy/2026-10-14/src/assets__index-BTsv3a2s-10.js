// assets__index-BTsv3a2s 10 — kind
// Lines 17598-18044 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Gn(e, t) {
  let n = [];
  for (let t of e.placements)
    if (t.kind === `shop` && t.ref.t === `building` && t.ref.opts.shop)
      n.push({
        kind: `shop`,
        p: t,
        doorCol: Un(t, t.ref.opts),
        doorX: Wn(t, t.ref.opts),
        trade: t.ref.opts.shop.sign,
      });
    else if (t.kind === `inn`) {
      let e = t.ref.t === `building` ? t.ref.opts : Hn;
      n.push({ kind: `inn`, p: t, doorCol: Un(t, e), doorX: Wn(t, e) });
    } else
      t.kind === `keep`
        ? n.push({
            kind: `hall`,
            p: t,
            doorCol: t.tx + Math.floor(t.w / 2),
            doorX: (t.tx + Math.floor(t.w / 2) + 0.5) * 16,
          })
        : t.kind === `wing` &&
          t.ref.t === `building` &&
          n.push({
            kind: t.ref.opts.shop?.sign === `book` ? `library` : `initiates`,
            p: t,
            doorCol: Un(t, t.ref.opts),
            doorX: Wn(t, t.ref.opts),
          });
  let r = {
    hall: 0,
    library: 1,
    initiates: 2,
    study: 3,
    inn: 4,
    shop: 5,
    homestead: 6,
    house: 7,
  };
  n.sort((e, t) => r[e.kind] - r[t.kind] || e.p.ty - t.p.ty || e.p.tx - t.p.tx);
  let i = [],
    a = new Set(),
    o = new Map(),
    s = Nn(An, nt(1042)),
    c = Nn(jn, nt(310)),
    l = 0,
    u = 0,
    d = (e, t) => {
      let { x0: n, y0: r } = Pn(u++, e.w, e.h),
        a = new Mn(n, r, e.w, e.h);
      t(a);
      let o = a.exits[Math.floor(a.exits.length / 2)],
        s = {
          ...e,
          x0: n,
          y0: r,
          cells: a.cells,
          blocked: a.blocked,
          furniture: a.furniture,
          decor: a.decor,
          rugs: a.rugs,
          folk: a.folk,
          notes: a.notes,
          entry: { x: o.tx + 0.5, y: o.ty - 0.6 },
          exits: a.exits,
          doors: a.doors,
        };
      return (i.push(s), { it: s, r: a });
    };
  for (let e of n) {
    let n = e.p,
      r = n.ty + n.h - 1,
      u = { x: e.doorCol + 0.5, y: r + 1.6 };
    if (!t(u.x, r + 1.2)) continue;
    let f = { tx: e.doorCol, ty: r },
      p = n.tx * 131 + n.ty * 7,
      m = i.length,
      h = nt(p);
    if (e.kind === `shop`) {
      let t = kn[e.trade],
        n = o.get(e.trade) ?? 0;
      o.set(e.trade, n + 1);
      let r = t.names[n % t.names.length];
      (a.has(r) && (r = `${r} ${[`II`, `III`, `IV`][n % 3]}`), a.add(r));
      let i = `${s[l % s.length]} ${c[(l * 7) % c.length]}`,
        m = `shop-${++l}`,
        { r: g } = d(
          {
            id: m,
            kind: `shop`,
            name: r,
            subtitle: `${t.subtitle} · ${i}`,
            w: 13,
            h: 10,
            floor: t.floor,
            wall: t.wall,
            seed: p,
            door: f,
            outside: u,
            trade: e.trade,
          },
          (t) => {
            ((t.mirror = h() < 0.5), In(t, e.trade, h));
          },
        );
      g.folk.push({
        id: `${m}-keeper`,
        look: `${t.look}#${l}`,
        name: i,
        title: `${t.title} · ${r}`,
        color: t.color,
        ...g.at(6.5, 3.5),
        dir: 0,
        talks: t.talks,
      });
    } else if (e.kind === `inn`) {
      let { r: e } = d(
        {
          id: `inn`,
          kind: `inn`,
          name: `The Rising Mage`,
          subtitle: `Inn & Tavern`,
          w: 19,
          h: 12,
          floor: `darkplanks`,
          wall: `timber`,
          seed: p,
          door: f,
          outside: u,
        },
        Ln,
      );
      (e.folk.push({
        id: `innkeeper`,
        look: `innkeeper`,
        name: `Odile Harrow`,
        title: `Innkeeper · The Rising Mage`,
        color: `#d99a2a`,
        ...e.at(5.5, 3.5),
        dir: 0,
        talks: [
          [
            `Welcome to the Rising Mage. The name's a joke, Initiate.`,
            `Your lot get up again. My regulars just get up late.`,
          ],
          [
            `Every room's full of Highmore folk. I've put three families in the loft and I'm not charging them. Don't tell the Conclave.`,
          ],
          [
            `Master Idris sat by that fire every Restday for thirty years. Nobody's taken his seat since.`,
          ],
        ],
      }),
        e.folk.push({
          id: `refugee-1`,
          look: `refugee`,
          name: `A Highmore refugee`,
          title: `Arrived at dawn`,
          color: `#c9b48a`,
          ...e.at(12.5, 6.4),
          dir: 0,
          talks: [
            [
              `We walked all night from Highmore. The ward opened from the inside.`,
              `Someone let them in.`,
            ],
            [
              `My brother's still there. I saw him get back up.`,
              `It wasn't him. It had his coat on.`,
            ],
          ],
        }),
        e.folk.push({
          id: `refugee-2`,
          look: `refugee2`,
          name: `A Highmore refugee`,
          title: `Arrived at dawn`,
          color: `#c9b48a`,
          ...e.at(3.5, 8.4),
          dir: 1,
          talks: [
            [
              `Is it true you mages come back when you fall? Then why didn't Highmore's?`,
              `...Sorry. I know it isn't your doing.`,
            ],
          ],
        }),
        e.notes.push({
          id: `notice`,
          name: `Notice board`,
          title: `The Rising Mage`,
          icon: `board`,
          ...e.at(10, 2.2),
          talks: [
            [
              `BY ORDER OF THE CIRCLE: the Ward is sealed from sundown. No one leaves by the east gate after dark.`,
              `WANTED: word of Highmore, any at all. Ask for Odile.`,
              `LOST: a grey cat, answers to Ember. Last seen near the Once-Graves.`,
            ],
          ],
        }));
    } else if (e.kind === `hall`) {
      let { r: e } = d(
        {
          id: `hall`,
          kind: `hall`,
          name: `Hall of the Circle`,
          subtitle: `The keep of the Aether Sanctum`,
          w: 27,
          h: 17,
          floor: `marble`,
          wall: `castle`,
          seed: p,
          door: f,
          outside: u,
        },
        Rn,
      );
      (e.folk.push({
        id: `steward`,
        look: `steward`,
        name: `Steward Ansel`,
        title: `Keeper of the Hall`,
        color: `#8ef6ff`,
        ...e.at(8.5, 10.5),
        dir: 2,
        talks: [
          [
            `The Circle holds its councils here. Since the Night, we've kept Master Idris's chair empty.`,
          ],
          [
            `One seat for each school, and the Senior's chair between them, facing the door. He liked to see who came in.`,
            `He always did.`,
          ],
          [
            `His study's through the door at the back. The Circle says any Initiate of his may go in. That means you, {name}.`,
          ],
        ],
      }),
        e.notes.push({
          id: `chair`,
          name: `The Senior's chair`,
          title: `Master Idris Calloway`,
          icon: `candle`,
          ...e.at(13.5, 4.4),
          talks: [
            [
              `Master Idris's chair. Someone has left a candle burning on the seat.`,
              `The wax has run down one leg, and nobody has cleaned it.`,
            ],
          ],
        }));
    } else {
      let t = e.kind === `library`,
        { r: n } = d(
          {
            id: e.kind,
            kind: e.kind,
            name: t ? `Library of the Circle` : `Initiates' Hall`,
            subtitle: t
              ? `Every attunement since the founding`
              : `Where Marizon's Initiates sleep and study`,
            w: 17,
            h: 13,
            floor: t ? `darkplanks` : `planks`,
            wall: `castle`,
            seed: p,
            door: f,
            outside: u,
          },
          t ? zn : Bn,
        );
      t
        ? (n.folk.push({
            id: `archivist`,
            look: `archivist`,
            name: `Archivist Maudry`,
            title: `Library of the Circle`,
            color: `#a8b8ff`,
            ...n.at(11.5, 3.5),
            dir: 0,
            talks: [
              [
                `Every attunement since the founding is written in that book. Yours is the last entry in Master Idris's hand.`,
              ],
              [
                `The Concord is shelved under Law. The arguments against it are shelved under Law as well. It's a long shelf.`,
              ],
            ],
          }),
          n.notes.push({
            id: `attunements`,
            name: `The Book of Attunements`,
            title: `Library of the Circle`,
            icon: `book`,
            ...n.at(8.5, 4.4),
            talks: [
              [
                `The last page is in Master Idris's small, slanted hand:`,
                `"{name}. Initiate. Attuned to the Aether Crystal on the Night of Keys. The last I will attune."`,
                `The ink has run where the page got wet.`,
              ],
            ],
          }))
        : (n.folk.push({
            id: `initiate-a`,
            look: `initiate:storm`,
            name: `Initiate Wren`,
            title: `Initiate of Marizon`,
            color: `#a8b8ff`,
            ...n.at(4.5, 6.6),
            dir: 2,
            talks: [
              [
                `Did you see it? The whole Ward went white. I thought the sky was breaking again.`,
              ],
              [
                `They say you were at the east gate that night. Is it true about the Watchman?`,
              ],
            ],
          }),
          n.folk.push({
            id: `initiate-b`,
            look: `initiate:cryo`,
            name: `Initiate Corwin`,
            title: `Initiate of Marizon`,
            color: `#5cc8ff`,
            ...n.at(12.5, 9.6),
            dir: 3,
            talks: [
              [
                `I haven't slept since. Every time I close my eyes I hear the crystal ringing.`,
              ],
              [
                `Ysolde says we're to keep up our studies. As if I can think about frost-glyphs now.`,
              ],
            ],
          }));
    }
    i[m] && (i[m].doorX = e.doorX);
  }
  let f = i.find((e) => e.id === `hall`),
    p = f ? f.cells.findIndex((e) => e === On.DOOR) : -1;
  if (f && p >= 0) {
    let e = p % f.w,
      { it: t, r: n } = d(
        {
          id: `study`,
          kind: `study`,
          name: `Idris's Study`,
          subtitle: `As he left it`,
          w: 11,
          h: 9,
          floor: `darkplanks`,
          wall: `castle`,
          seed: 4242,
          door: null,
          outside: { x: f.x0 + e + 0.5, y: f.y0 + 2.6 },
        },
        Vn,
      );
    (n.notes.push({
      id: `letter`,
      name: `A letter on the desk`,
      title: `Master Idris Calloway`,
      icon: `letter`,
      ...n.at(6.5, 4.8),
      talks: [
        [
          `To whoever sits at this desk next:`,
          `"The Ward is not the crystal's. It is ours. Keep it that way."`,
          `"And be kind to Ysolde. She will pretend she doesn't need it. — I.C."`,
        ],
      ],
    }),
      n.notes.push({
        id: `draft`,
        name: `An unfinished letter`,
        title: `Master Idris Calloway`,
        icon: `letter`,
        ...n.at(4.5, 4.8),
        talks: [
          [
            `A fresh page with only a name on it, written three times, each a little smaller:`,
            `Lillith. Lillith. Lillith.`,
          ],
        ],
      }),
      n.notes.push({
        id: `staff`,
        name: `Master Idris's staff`,
        title: `Four sockets, all empty`,
        icon: `staff`,
        ...n.at(9.5, 5.8),
        talks: [
          [
            `His staff leans where he left it. Four crystal sockets, one for each school, all empty.`,
            `He earned the stones once, and gave them back.`,
          ],
        ],
      }),
      f.doors.push({
        tx: f.x0 + e,
        ty: f.y0 + 1,
        to: t.id,
        x: t.entry.x,
        y: t.entry.y,
      }));
  }
  let { it: m } = d(
      {
        id: Jn,
        kind: `homestead`,
        name: `Homestead`,
        subtitle: `A Holding in the Tithefields`,
        w: Dt.w,
        h: Dt.h,
        floor: `grass`,
        wall: `timber`,
        seed: 7177,
        door: null,
        outside: { x: 0, y: 0 },
      },
      Yn,
    ),
    h = Dt.door;
  return (
    d(
      {
        id: Kn,
        kind: `house`,
        name: `Cottage`,
        subtitle: `Home`,
        w: Ht.w,
        h: Ht.h,
        floor: `planks`,
        wall: `plaster`,
        seed: 7178,
        door: null,
        outside: { x: m.x0 + h.x + h.w / 2, y: m.y0 + h.y + 0.6 },
      },
      qn,
    ),
    i
  );
}
