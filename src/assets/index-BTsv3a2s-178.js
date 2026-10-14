// index-BTsv3a2s 178 — realmsession
// Lines 104679-105015 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
for (
  var EMPTY_LIST = [],
    awsBackend = {
      name: `aws`,
      Root: GATE_BASE_URL ? ({ children: e }) => e : null,
      setup: (0, Q.jsxs)(`div`, {
        className: `setup`,
        children: [
          (0, Q.jsx)(`h1`, { children: `AETHERFALL` }),
          (0, Q.jsx)(`p`, {
            children: `No gate configured for the AWS backend.`,
          }),
          (0, Q.jsxs)(`p`, {
            children: [
              `Start the local stack (`,
              (0, Q.jsx)(`code`, { children: `docker compose up --build` }),
              `) and open the game from `,
              (0, Q.jsx)(`code`, { children: `localhost` }),
              `, or set`,
              ` `,
              (0, Q.jsx)(`code`, { children: `VITE_GATE_URL` }),
              ` (or `,
              (0, Q.jsx)(`code`, { children: `?gate=…` }),
              `).`,
            ],
          }),
        ],
      }),
      useMe: (e) => {
        let t = useRealmSession();
        if (
          ((0, v.useEffect)(() => void connectGateSession(e), [e]),
          t.token !== e || t.characters === void 0)
        )
          return;
        let n = resumeMage(t.characters, lastMageId());
        return n ? { name: n.name, level: n.level, school: n.school } : null;
      },
      useRoster: (e) => {
        let t = useRealmSession();
        (0, v.useEffect)(() => void connectGateSession(e), [e]);
        let n = t.token === e && t.characters !== void 0;
        return (0, v.useMemo)(
          () =>
            n
              ? {
                  mages: t.characters.map(toCharacterSummary),
                  max: t.max,
                  error: t.charactersError,
                }
              : void 0,
          [n, t.characters, t.max, t.charactersError],
        );
      },
      useOnlinePlayers: () => {
        let e = useRealmSession();
        return (0, v.useMemo)(() => (e.me ? [e.me] : void 0), [e.me]);
      },
      useMonsters: () => EMPTY_LIST,
      useRecentFx: () => EMPTY_LIST,
      useChat: () => useRealmSession().chat,
      useInventory: (e) => {
        let t = useRealmSession(),
          n = (0, v.useMemo)(() => toInventoryView(t), [t.inv, t.me, t.mats]);
        return t.token === e ? n : void 0;
      },
      useGround: (e) => {
        let t = useRealmSession();
        return t.token === e ? t.ground : void 0;
      },
      useQuests: (e) => {
        let t = useRealmSession();
        return t.token === e ? t.quests : void 0;
      },
      useAltars: () => useRealmSession().altars?.docs,
      useDelves: (e) => {
        let t = useRealmSession();
        return t.token === e ? t.delves : void 0;
      },
      useRemains: () => useRealmSession().remains?.docs,
      useWanted: () => useRealmSession().wanted?.list,
      useWrit: () => useRealmSession().writ,
      useHome: (e) => {
        let t = useRealmSession();
        return t.token === e ? t.home : EMPTY_HOME;
      },
      useParty: () => {
        let e = useRealmSession();
        return (0, v.useMemo)(
          () => ({
            party: e.party,
            offers: e.offers,
            closed: e.partyClosed,
            stats: e.partyStats,
            followUntil: e.followUntil,
            here: e.partyHere,
          }),
          [
            e.party,
            e.offers,
            e.partyClosed,
            e.partyStats,
            e.followUntil,
            e.partyHere,
          ],
        );
      },
      useActions: useGameApi,
      userError: (e) => (e instanceof GateError || e instanceof ZoneError ? e.message : null),
      attachZone: (e) => {
        activeZone = e;
      },
      handlePush: (e) => {
        let t = e;
        if (t?.push === `folk`) {
          let { push: e, ...n } = t;
          activeZone?.folk(n);
          return;
        }
        if (t?.push === `folkBodies`) {
          activeZone?.folkBodies({
            room: t.room,
            v: t.v,
            bodies: t.bodies,
            breach: t.breach,
          });
          return;
        }
        if (t?.push === `party`) {
          t.party
            ? applyPartySnapshot(t.party)
            : setSession({ party: null, partyStats: {}, partyHere: null });
          return;
        }
        if (t?.push === `partyStat`) {
          let e = performance.now(),
            n = { ...realmSession.partyStats };
          for (let { id: r, age: i, ...a } of t.stats)
            n[r] = { ...a, seen: e - Math.max(0, i) };
          let r = realmSession.partyHere,
            i = t.room
              ? r && r.room === t.room && r.host === t.host
                ? r
                : { room: t.room, host: t.host }
              : r;
          setSession({ partyStats: prunePartyStats(realmSession.party ?? null, n), partyHere: i });
          return;
        }
        if (t?.push === `dungeonPaid`) {
          let { push: e, ...n } = t;
          activeZone?.dungeonPaid(n);
          return;
        }
        if (t?.push === `dungeonFx`) {
          activeZone?.dungeonFx(t.room, t.fx);
          return;
        }
        if (t?.push === `joined`) {
          realmSession.offers.length && setSession({ offers: [] });
          return;
        }
        if (t?.push === `partyInvite` || t?.push === `partyAsk`) {
          let e = t.push === `partyAsk` ? `ask` : `invite`,
            n = Date.now(),
            r = partyOfferRecord(e, t, n);
          setSession({
            offers: [
              ...realmSession.offers.filter(
                (r) => (r.from !== t.from || r.kind !== e) && r.until > n,
              ),
              r,
            ],
          });
          return;
        }
        if (t?.push === `wanted`) {
          let e = realmSession.wanted;
          if (e && e.room === t.room && t.v <= e.v) return;
          setSession({ wanted: { room: t.room, v: t.v, list: t.wanted } });
          return;
        }
        if (t?.push === `remains`) {
          let e = realmSession.remains;
          if (e && e.room === t.room && t.v <= e.v) return;
          setSession({ remains: { room: t.room, v: t.v, docs: t.remains.map(normalizeRemains) } });
          return;
        }
        if (t?.push === `chat`) {
          setSession({ chat: mergeChatLines(realmSession.chat, t.lines) });
          return;
        }
        if (t?.push === `home`) {
          let e = realmSession.home.here;
          if (e && e.room === t.room && t.v <= e.v) return;
          setSession({ home: { ...realmSession.home, here: t } });
          return;
        }
        if (t?.push === `invite`) {
          let e = [
            ...realmSession.home.invites.filter(
              (e) => e.owner !== t.owner && e.until > Date.now(),
            ),
            t,
          ];
          setSession({ home: { ...realmSession.home, invites: e } });
          return;
        }
        if (t?.push === `note`) {
          setSession({
            home: {
              ...realmSession.home,
              notes: [...realmSession.home.notes, { id: ++noteSeq, text: t.text }].slice(-5),
            },
          });
          return;
        }
        if (t?.push === `altars`) {
          let e = realmSession.altars;
          if (e && e.room === t.room && t.v <= e.v) return;
          if (e && e.room === t.room) {
            let n = new Map(e.wire.map((e) => [e.altarId, e]));
            for (let e of t.altars)
              for (let t of altarRiteEvents(n.get(e.altarId), e)) activeZone?.effect(t);
          }
          let n =
            realmSession.home.here && realmSession.home.here.room !== t.room ? null : realmSession.home.here;
          setSession({
            altars: {
              room: t.room,
              v: t.v,
              wire: t.altars,
              docs: t.altars.map(altarDoc),
            },
            home: n === realmSession.home.here ? realmSession.home : { ...realmSession.home, here: n },
          });
          return;
        }
        if (!t || !realmSession.me || t.id !== realmSession.me._id) return;
        let n = realmSession.me._id;
        switch (t.push) {
          case `profile`: {
            let e = realmSession.characters?.find((e) => e.id === t.id);
            if (!e) return;
            setSession({
              characters: realmSession.characters.map((e) =>
                e.id === t.id ? { ...e, level: t.profile.level } : e,
              ),
              me: hydratePlayer(e, t.profile, t.attuned, t.wanted),
              mats: t.profile.mats,
              partyClosed: !!t.profile.partyClosed,
              followUntil: Cc(t.followIn, performance.now()),
            });
            return;
          }
          case `gift`: {
            let e = Il[t.altar];
            if (!e) return;
            activeZone?.effect({
              kind: `gift`,
              spell: t.altar,
              playerId: n,
              school: [t.grade, t.first ? `first` : ``, t.best].join(`|`),
              x: e.x + 0.5,
              y: e.y + 0.5,
              value: t.dust,
              tx: t.xp,
              ty: t.crowns,
            });
            return;
          }
          case `hearth`:
            activeZone?.hearth(t);
            return;
          case `folkLine`:
            activeZone?.folkLine({
              npc: t.npc,
              why: t.why,
              line: t.line,
              text: t.text,
              plea: t.plea,
            });
            return;
          case `inv`:
            setSession({ inv: t });
            return;
          case `writ`:
            setSession({
              writ: {
                seq: (realmSession.writ?.seq ?? 0) + 1,
                victim: t.victim,
                crowns: t.crowns,
              },
            });
            return;
          case `ground`:
            setSession({
              ground: t.ground.map((e) =>
                toOwnedItem(e, n, `ground`, { x: e.x, y: e.y, expiresAt: e.expiresAt }),
              ),
            });
            return;
          case `delves`: {
            let { push: e, id: n, ...r } = t;
            setSession({ delves: r });
            break;
          }
          case `quests`:
            setSession({ quests: t.quests });
            return;
          case `provisions`:
            setSession({ home: { ...realmSession.home, provisions: t } });
            return;
        }
      },
    },
    CU = [],
    wU = [],
    TU = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,
    EU = 0,
    DU = TU.length;
  EU < DU;
  ++EU
)
  ((CU[EU] = TU[EU]), (wU[TU.charCodeAt(EU)] = EU));
((wU[45] = 62), (wU[95] = 63));
function OU(e) {
  return (
    CU[(e >> 18) & 63] + CU[(e >> 12) & 63] + CU[(e >> 6) & 63] + CU[e & 63]
  );
}
function kU(e, t, n) {
  for (var r, i = [], a = t; a < n; a += 3)
    ((r =
      ((e[a] << 16) & 16711680) + ((e[a + 1] << 8) & 65280) + (e[a + 2] & 255)),
      i.push(OU(r)));
  return i.join(``);
}
