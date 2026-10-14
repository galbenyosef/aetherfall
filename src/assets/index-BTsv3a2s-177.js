// index-BTsv3a2s 177 — realmrequest
// Lines 104467-104678 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function useGameApi(e) {
  return (0, v.useMemo)(() => {
    let t = () => {
      let e = realmSession.me;
      if (!e) throw new GateError(400, `Choose a character first.`);
      return e;
    };
    return {
      join: async (e, t, n) => {
        let r = connectGateSession(e),
          i = realmSession.characters ?? (await r.characters()),
          a = resumeMage(i, lastMageId());
        return (
          a ||
            ((a = await r.createCharacter(t, n)),
            setSession({ characters: [...i, a] })),
          enterCharacter(r, a)
        );
      },
      leave: () => {},
      move: noopAsync,
      cast: noopAsync,
      hitMonster: noopAsync,
      struck: noopAsync,
      respawn: (e) => realmRequest(`respawn`, { at: e }),
      say: (e) => realmRequest(`say`, { text: e }),
      sayNear: (e) => realmRequest(`sayNear`, { text: e }),
      whisper: (e, t) => realmRequest(`whisper`, { to: e, text: t }),
      enterZone: async (n) => {
        let r = await connectGateSession(e).enter(t()._id, { avoid: n });
        return { url: r.url, room: r.room, ticket: r.ticket };
      },
      allocatePassive: (e) => realmRequest(`allocate`, { node: e }),
      refundPassive: (e) => realmRequest(`refund`, { node: e }),
      resetPassives: () => realmRequest(`resetPassives`),
      setLoadout: (e) => realmRequest(`loadout`, { slots: e }),
      storyAdvance: (e) => realmRequest(`storyAdvance`, { step: e }),
      storyComplete: () => realmRequest(`storyComplete`),
      equip: (e, t) => realmRequest(`equip`, t ? { itemId: e, slot: t } : { itemId: e }),
      unequip: (e) => realmRequest(`unequip`, { slot: e }),
      pickup: (e) => realmRequest(`pickup`, { itemId: e }),
      salvage: (e) => realmRequest(`salvage`, { itemId: e }),
      salvageMany: (e) => realmRequest(`salvage`, { itemIds: e }),
      readSpellbook: (e) => realmRequest(`read`, { itemId: e }),
      kindle: (e, t) => realmRequest(`kindle`, { itemId: e, warded: t }),
      cleanse: (e) => realmRequest(`cleanse`, { itemId: e }),
      repair: (e, t) => realmRequest(`repair`, { itemId: e, kit: !!t }),
      loadQuiver: (e) => realmRequest(`quiver`, { arrow: e }),
      shopBuy: (e, t) =>
        realmRequest(`shopBuy`, t === void 0 ? { offer: e } : { offer: e, n: t }),
      questAccept: (e) => realmRequest(`questAccept`, { questId: e }),
      questProgress: (e, t, n) =>
        realmRequest(`questProgress`, { questId: e, step: t, index: n }),
      questChoose: (e, t, n) =>
        realmRequest(`questChoose`, { questId: e, step: t, option: n }),
      questAbandon: (e) => realmRequest(`questAbandon`, { questId: e }),
      questPhase: (e) => realmRequest(`questPhase`, { on: e }).then((e) => e === !0),
      questBoss: (e) => realmRequest(`questBoss`, { questId: e }),
      storyHurt: (e) => realmRequest(`storyHurt`, { amount: e }),
      altarBegin: (e) => realmRequest(`altarBegin`, { altarId: e }),
      altarTouch: async (e) => {
        await realmRequest(`altarTouch`, { altarId: e });
        let n = Il[e];
        return (
          activeZone?.effect({
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
      travel: (e) => realmRequest(`travel`, { to: e }),
      hearth: (e) => (e && activeZone?.flushInput(), realmRequest(`hearth`, { on: e })),
      door: (e, t, n) => realmRequest(`door`, { room: e, way: t, to: n }),
      hostile: (e) => realmRequest(`hostile`, { on: e }).then((e) => e === !0),
      dev: (e) =>
        realmRequest(`dev`, { ...e }).then((e) => {
          let t = e ?? {};
          return { ...t, items: t.items?.map(withAffixes) };
        }),
      loot: (e, t) =>
        realmRequest(`loot`, { remains: e, itemId: t?.itemId, crowns: t?.crowns }).then(
          (e) => {
            let t = e;
            return t ? { items: t.items.map(withAffixes), crowns: t.crowns } : null;
          },
        ),
      party: {
        invite: (e) =>
          realmRequest(
            `partyInvite`,
            e.entity == null ? { name: e.name } : { entity: e.entity },
          ),
        ask: (e) =>
          realmRequest(
            `partyAsk`,
            e.entity == null ? { name: e.name } : { entity: e.entity },
          ),
        answer: async (e, t) => {
          setSession({ offers: realmSession.offers.filter((t) => t.from !== e) });
          let n = await realmRequest(`partyAnswer`, { from: e, yes: t });
          return (n?.party && applyPartySnapshot(n.party), n);
        },
        hush: (e, t) => (
          setSession({ offers: realmSession.offers.filter((n) => n.from !== e || n.kind !== t) }),
          realmRequest(`partyHush`, { from: e, ask: t === `ask` })
        ),
        prefs: async (e) => {
          let t = await realmRequest(`partyPrefs`, { closed: e });
          return (setSession({ partyClosed: e, offers: e ? [] : realmSession.offers }), t);
        },
        leave: () => realmRequest(`partyLeave`),
        kick: (e) => realmRequest(`partyKick`, { member: e }),
        lead: (e) => realmRequest(`partyLead`, { member: e }),
        follow: (e, t) => realmRequest(`partyFollow`, { member: e, room: t }),
        say: (e) => realmRequest(`sayParty`, { text: e }),
      },
      home: {
        go: () => realmRequest(`homeGo`),
        leave: () => realmRequest(`homeLeave`),
        invite: (e) => realmRequest(`homeInvite`, { name: e }),
        visit: (e) => realmRequest(`homeVisit`, { owner: e }),
        kick: (e) => realmRequest(`homeKick`, { guest: e }),
        build: (e, t, n) => realmRequest(`build`, { kind: e, x: t, y: n }),
        unbuild: (e) => realmRequest(`unbuild`, { structure: e }),
        deed: () => realmRequest(`deed`),
        plant: (e, t) => realmRequest(`plant`, { bed: e, crop: t }),
        water: (e) => realmRequest(`water`, { bed: e }),
        drawWater: () => realmRequest(`drawWater`, {}),
        dust: (e) => realmRequest(`dust`, { bed: e }),
        harvest: (e) => realmRequest(`harvest`, { bed: e }),
        put: (e, t) => realmRequest(`storePut`, { store: e, ...t }),
        take: (e, t, n) => realmRequest(`storeTake`, { store: e, slot: t, n: n ?? 0 }),
        craft: (e, t, n) =>
          realmRequest(`craft`, { station: e, ingredients: t, batches: n }),
        consume: (e) => realmRequest(`consume`, { good: e }),
        sell: (e, t) => realmRequest(`sell`, { good: e, n: t }),
        buySeeds: (e, t) => realmRequest(`buySeeds`, { crop: e, n: t }),
        houseDoor: (e) => realmRequest(`houseDoor`, { way: e }),
        paint: (e) => realmRequest(`housePaint`, { paint: e }),
        furnish: (e, t, n, r) =>
          realmRequest(`furnish`, { kind: e, x: t, y: n, arg: r ?? `` }),
        unfurnish: (e) => realmRequest(`unfurnish`, { structure: e }),
        rest: (e) => realmRequest(`rest`, { structure: e }),
      },
      mages: {
        play: async (t) => {
          let n = connectGateSession(e),
            r = (realmSession.characters ?? (await n.characters())).find(
              (e) => e.id === t,
            );
          if (!r)
            throw new GateError(404, `That mage isn't on this account any more.`);
          try {
            return await enterCharacter(n, r);
          } catch (t) {
            throw (t instanceof GateError && t.status === 404 && refreshRoster(e), t);
          }
        },
        forge: async (t, n, r) => {
          let i = await connectGateSession(e).createCharacter(t, n, r);
          return (
            setSession({
              characters: [
                ...(realmSession.characters ?? []).filter((e) => e.id !== i.id),
                i,
              ],
            }),
            toCharacterSummary(i)
          );
        },
        remove: async (t) => {
          try {
            await connectGateSession(e).deleteCharacter(t);
          } catch (e) {
            if (!(e instanceof GateError && e.status === 404)) throw e;
          }
          (forgetMageId(t), setSession({ characters: realmSession.characters?.filter((e) => e.id !== t) }));
        },
        refresh: async () => {
          (connectGateSession(e),
            setSession({ characters: void 0, charactersError: null }),
            await refreshRoster(e));
        },
      },
      dungeon: {
        enter: (e, t) =>
          realmRequest(`dungeonEnter`, {
            dungeon: e,
            diff: t,
            ...(BH(e) ? { hosted: !0 } : {}),
          }),
        leave: () => realmRequest(`dungeonLeave`),
        hurt: (e, t) => realmRequest(`dungeonHurt`, { amount: e, lethal: t }),
        heal: (e) => realmRequest(`dungeonHeal`, { amount: e }),
        touch: (e) => realmRequest(`dungeonTouch`, { what: e }),
        kill: (e, t) => realmRequest(`dungeonKill`, { floor: e, index: t }),
        boss: (e, t) => realmRequest(`dungeonBoss`, { floor: e, kind: t }),
        open: (e, t, n) => realmRequest(`dungeonOpen`, { floor: e, what: t, where: n }),
        descend: () => realmRequest(`dungeonDescend`),
        unmade: () => realmRequest(`dungeonUnmade`),
        pick: (e) => realmRequest(`dungeonPick`, { echo: e }),
        surgeKill: (e, t, n) =>
          realmRequest(`dungeonSurgeKill`, { floor: e, surge: t, slot: n }),
      },
    };
  }, [e]);
}
