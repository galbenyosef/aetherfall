// assets__index-BTsv3a2s 177 — characters
// Lines 104467-104678 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function bU(e) {
  return (0, v.useMemo)(() => {
    let t = () => {
      let e = QH.me;
      if (!e) throw new mu(400, `Choose a character first.`);
      return e;
    };
    return {
      join: async (e, t, n) => {
        let r = rU(e),
          i = QH.characters ?? (await r.characters()),
          a = Pl(i, jl());
        return (
          a ||
            ((a = await r.createCharacter(t, n)),
            eU({ characters: [...i, a] })),
          sU(r, a)
        );
      },
      leave: () => {},
      move: _U,
      cast: _U,
      hitMonster: _U,
      struck: _U,
      respawn: (e) => qH(`respawn`, { at: e }),
      say: (e) => qH(`say`, { text: e }),
      sayNear: (e) => qH(`sayNear`, { text: e }),
      whisper: (e, t) => qH(`whisper`, { to: e, text: t }),
      enterZone: async (n) => {
        let r = await rU(e).enter(t()._id, { avoid: n });
        return { url: r.url, room: r.room, ticket: r.ticket };
      },
      allocatePassive: (e) => qH(`allocate`, { node: e }),
      refundPassive: (e) => qH(`refund`, { node: e }),
      resetPassives: () => qH(`resetPassives`),
      setLoadout: (e) => qH(`loadout`, { slots: e }),
      storyAdvance: (e) => qH(`storyAdvance`, { step: e }),
      storyComplete: () => qH(`storyComplete`),
      equip: (e, t) => qH(`equip`, t ? { itemId: e, slot: t } : { itemId: e }),
      unequip: (e) => qH(`unequip`, { slot: e }),
      pickup: (e) => qH(`pickup`, { itemId: e }),
      salvage: (e) => qH(`salvage`, { itemId: e }),
      salvageMany: (e) => qH(`salvage`, { itemIds: e }),
      readSpellbook: (e) => qH(`read`, { itemId: e }),
      kindle: (e, t) => qH(`kindle`, { itemId: e, warded: t }),
      cleanse: (e) => qH(`cleanse`, { itemId: e }),
      repair: (e, t) => qH(`repair`, { itemId: e, kit: !!t }),
      loadQuiver: (e) => qH(`quiver`, { arrow: e }),
      shopBuy: (e, t) =>
        qH(`shopBuy`, t === void 0 ? { offer: e } : { offer: e, n: t }),
      questAccept: (e) => qH(`questAccept`, { questId: e }),
      questProgress: (e, t, n) =>
        qH(`questProgress`, { questId: e, step: t, index: n }),
      questChoose: (e, t, n) =>
        qH(`questChoose`, { questId: e, step: t, option: n }),
      questAbandon: (e) => qH(`questAbandon`, { questId: e }),
      questPhase: (e) => qH(`questPhase`, { on: e }).then((e) => e === !0),
      questBoss: (e) => qH(`questBoss`, { questId: e }),
      storyHurt: (e) => qH(`storyHurt`, { amount: e }),
      altarBegin: (e) => qH(`altarBegin`, { altarId: e }),
      altarTouch: async (e) => {
        await qH(`altarTouch`, { altarId: e });
        let n = Il[e];
        return (
          KH?.effect({
            kind: `attune`,
            spell: e,
            playerId: t()._id,
            school: t().school,
            x: n.x + 0.5,
            y: n.y + 0.5,
          }),
          !0
        );
      },
      travel: (e) => qH(`travel`, { to: e }),
      hearth: (e) => (e && KH?.flushInput(), qH(`hearth`, { on: e })),
      door: (e, t, n) => qH(`door`, { room: e, way: t, to: n }),
      hostile: (e) => qH(`hostile`, { on: e }).then((e) => e === !0),
      dev: (e) =>
        qH(`dev`, { ...e }).then((e) => {
          let t = e ?? {};
          return { ...t, items: t.items?.map(uU) };
        }),
      loot: (e, t) =>
        qH(`loot`, { remains: e, itemId: t?.itemId, crowns: t?.crowns }).then(
          (e) => {
            let t = e;
            return t ? { items: t.items.map(uU), crowns: t.crowns } : null;
          },
        ),
      party: {
        invite: (e) =>
          qH(
            `partyInvite`,
            e.entity == null ? { name: e.name } : { entity: e.entity },
          ),
        ask: (e) =>
          qH(
            `partyAsk`,
            e.entity == null ? { name: e.name } : { entity: e.entity },
          ),
        answer: async (e, t) => {
          eU({ offers: QH.offers.filter((t) => t.from !== e) });
          let n = await qH(`partyAnswer`, { from: e, yes: t });
          return (n?.party && vU(n.party), n);
        },
        hush: (e, t) => (
          eU({ offers: QH.offers.filter((n) => n.from !== e || n.kind !== t) }),
          qH(`partyHush`, { from: e, ask: t === `ask` })
        ),
        prefs: async (e) => {
          let t = await qH(`partyPrefs`, { closed: e });
          return (eU({ partyClosed: e, offers: e ? [] : QH.offers }), t);
        },
        leave: () => qH(`partyLeave`),
        kick: (e) => qH(`partyKick`, { member: e }),
        lead: (e) => qH(`partyLead`, { member: e }),
        follow: (e, t) => qH(`partyFollow`, { member: e, room: t }),
        say: (e) => qH(`sayParty`, { text: e }),
      },
      home: {
        go: () => qH(`homeGo`),
        leave: () => qH(`homeLeave`),
        invite: (e) => qH(`homeInvite`, { name: e }),
        visit: (e) => qH(`homeVisit`, { owner: e }),
        kick: (e) => qH(`homeKick`, { guest: e }),
        build: (e, t, n) => qH(`build`, { kind: e, x: t, y: n }),
        unbuild: (e) => qH(`unbuild`, { structure: e }),
        deed: () => qH(`deed`),
        plant: (e, t) => qH(`plant`, { bed: e, crop: t }),
        water: (e) => qH(`water`, { bed: e }),
        drawWater: () => qH(`drawWater`, {}),
        dust: (e) => qH(`dust`, { bed: e }),
        harvest: (e) => qH(`harvest`, { bed: e }),
        put: (e, t) => qH(`storePut`, { store: e, ...t }),
        take: (e, t, n) => qH(`storeTake`, { store: e, slot: t, n: n ?? 0 }),
        craft: (e, t, n) =>
          qH(`craft`, { station: e, ingredients: t, batches: n }),
        consume: (e) => qH(`consume`, { good: e }),
        sell: (e, t) => qH(`sell`, { good: e, n: t }),
        buySeeds: (e, t) => qH(`buySeeds`, { crop: e, n: t }),
        houseDoor: (e) => qH(`houseDoor`, { way: e }),
        paint: (e) => qH(`housePaint`, { paint: e }),
        furnish: (e, t, n, r) =>
          qH(`furnish`, { kind: e, x: t, y: n, arg: r ?? `` }),
        unfurnish: (e) => qH(`unfurnish`, { structure: e }),
        rest: (e) => qH(`rest`, { structure: e }),
      },
      mages: {
        play: async (t) => {
          let n = rU(e),
            r = (QH.characters ?? (await n.characters())).find(
              (e) => e.id === t,
            );
          if (!r)
            throw new mu(404, `That mage isn't on this account any more.`);
          try {
            return await sU(n, r);
          } catch (t) {
            throw (t instanceof mu && t.status === 404 && iU(e), t);
          }
        },
        forge: async (t, n, r) => {
          let i = await rU(e).createCharacter(t, n, r);
          return (
            eU({
              characters: [
                ...(QH.characters ?? []).filter((e) => e.id !== i.id),
                i,
              ],
            }),
            oU(i)
          );
        },
        remove: async (t) => {
          try {
            await rU(e).deleteCharacter(t);
          } catch (e) {
            if (!(e instanceof mu && e.status === 404)) throw e;
          }
          (Nl(t), eU({ characters: QH.characters?.filter((e) => e.id !== t) }));
        },
        refresh: async () => {
          (rU(e),
            eU({ characters: void 0, charactersError: null }),
            await iU(e));
        },
      },
      dungeon: {
        enter: (e, t) =>
          qH(`dungeonEnter`, {
            dungeon: e,
            diff: t,
            ...(BH(e) ? { hosted: !0 } : {}),
          }),
        leave: () => qH(`dungeonLeave`),
        hurt: (e, t) => qH(`dungeonHurt`, { amount: e, lethal: t }),
        heal: (e) => qH(`dungeonHeal`, { amount: e }),
        touch: (e) => qH(`dungeonTouch`, { what: e }),
        kill: (e, t) => qH(`dungeonKill`, { floor: e, index: t }),
        boss: (e, t) => qH(`dungeonBoss`, { floor: e, kind: t }),
        open: (e, t, n) => qH(`dungeonOpen`, { floor: e, what: t, where: n }),
        descend: () => qH(`dungeonDescend`),
        unmade: () => qH(`dungeonUnmade`),
        pick: (e) => qH(`dungeonPick`, { echo: e }),
        surgeKill: (e, t, n) =>
          qH(`dungeonSurgeKill`, { floor: e, surge: t, slot: n }),
      },
    };
  }, [e]);
}
