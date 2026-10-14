// assets__index-BTsv3a2s 178 — room
// Lines 104679-105015 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
for (
  var xU = [],
    SU = {
      name: `aws`,
      Root: GH ? ({ children: e }) => e : null,
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
        let t = nU();
        if (
          ((0, v.useEffect)(() => void rU(e), [e]),
          t.token !== e || t.characters === void 0)
        )
          return;
        let n = Pl(t.characters, jl());
        return n ? { name: n.name, level: n.level, school: n.school } : null;
      },
      useRoster: (e) => {
        let t = nU();
        (0, v.useEffect)(() => void rU(e), [e]);
        let n = t.token === e && t.characters !== void 0;
        return (0, v.useMemo)(
          () =>
            n
              ? {
                  mages: t.characters.map(oU),
                  max: t.max,
                  error: t.charactersError,
                }
              : void 0,
          [n, t.characters, t.max, t.charactersError],
        );
      },
      useOnlinePlayers: () => {
        let e = nU();
        return (0, v.useMemo)(() => (e.me ? [e.me] : void 0), [e.me]);
      },
      useMonsters: () => xU,
      useRecentFx: () => xU,
      useChat: () => nU().chat,
      useInventory: (e) => {
        let t = nU(),
          n = (0, v.useMemo)(() => gU(t), [t.inv, t.me, t.mats]);
        return t.token === e ? n : void 0;
      },
      useGround: (e) => {
        let t = nU();
        return t.token === e ? t.ground : void 0;
      },
      useQuests: (e) => {
        let t = nU();
        return t.token === e ? t.quests : void 0;
      },
      useAltars: () => nU().altars?.docs,
      useDelves: (e) => {
        let t = nU();
        return t.token === e ? t.delves : void 0;
      },
      useRemains: () => nU().remains?.docs,
      useWanted: () => nU().wanted?.list,
      useWrit: () => nU().writ,
      useHome: (e) => {
        let t = nU();
        return t.token === e ? t.home : JH;
      },
      useParty: () => {
        let e = nU();
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
      useActions: bU,
      userError: (e) => (e instanceof mu || e instanceof vf ? e.message : null),
      attachZone: (e) => {
        KH = e;
      },
      handlePush: (e) => {
        let t = e;
        if (t?.push === `folk`) {
          let { push: e, ...n } = t;
          KH?.folk(n);
          return;
        }
        if (t?.push === `folkBodies`) {
          KH?.folkBodies({
            room: t.room,
            v: t.v,
            bodies: t.bodies,
            breach: t.breach,
          });
          return;
        }
        if (t?.push === `party`) {
          t.party
            ? vU(t.party)
            : eU({ party: null, partyStats: {}, partyHere: null });
          return;
        }
        if (t?.push === `partyStat`) {
          let e = performance.now(),
            n = { ...QH.partyStats };
          for (let { id: r, age: i, ...a } of t.stats)
            n[r] = { ...a, seen: e - Math.max(0, i) };
          let r = QH.partyHere,
            i = t.room
              ? r && r.room === t.room && r.host === t.host
                ? r
                : { room: t.room, host: t.host }
              : r;
          eU({ partyStats: yU(QH.party ?? null, n), partyHere: i });
          return;
        }
        if (t?.push === `dungeonPaid`) {
          let { push: e, ...n } = t;
          KH?.dungeonPaid(n);
          return;
        }
        if (t?.push === `dungeonFx`) {
          KH?.dungeonFx(t.room, t.fx);
          return;
        }
        if (t?.push === `joined`) {
          QH.offers.length && eU({ offers: [] });
          return;
        }
        if (t?.push === `partyInvite` || t?.push === `partyAsk`) {
          let e = t.push === `partyAsk` ? `ask` : `invite`,
            n = Date.now(),
            r = ec(e, t, n);
          eU({
            offers: [
              ...QH.offers.filter(
                (r) => (r.from !== t.from || r.kind !== e) && r.until > n,
              ),
              r,
            ],
          });
          return;
        }
        if (t?.push === `wanted`) {
          let e = QH.wanted;
          if (e && e.room === t.room && t.v <= e.v) return;
          eU({ wanted: { room: t.room, v: t.v, list: t.wanted } });
          return;
        }
        if (t?.push === `remains`) {
          let e = QH.remains;
          if (e && e.room === t.room && t.v <= e.v) return;
          eU({ remains: { room: t.room, v: t.v, docs: t.remains.map(dU) } });
          return;
        }
        if (t?.push === `chat`) {
          eU({ chat: cU(QH.chat, t.lines) });
          return;
        }
        if (t?.push === `home`) {
          let e = QH.home.here;
          if (e && e.room === t.room && t.v <= e.v) return;
          eU({ home: { ...QH.home, here: t } });
          return;
        }
        if (t?.push === `invite`) {
          let e = [
            ...QH.home.invites.filter(
              (e) => e.owner !== t.owner && e.until > Date.now(),
            ),
            t,
          ];
          eU({ home: { ...QH.home, invites: e } });
          return;
        }
        if (t?.push === `note`) {
          eU({
            home: {
              ...QH.home,
              notes: [...QH.home.notes, { id: ++YH, text: t.text }].slice(-5),
            },
          });
          return;
        }
        if (t?.push === `altars`) {
          let e = QH.altars;
          if (e && e.room === t.room && t.v <= e.v) return;
          if (e && e.room === t.room) {
            let n = new Map(e.wire.map((e) => [e.altarId, e]));
            for (let e of t.altars)
              for (let t of pU(n.get(e.altarId), e)) KH?.effect(t);
          }
          let n =
            QH.home.here && QH.home.here.room !== t.room ? null : QH.home.here;
          eU({
            altars: {
              room: t.room,
              v: t.v,
              wire: t.altars,
              docs: t.altars.map(fU),
            },
            home: n === QH.home.here ? QH.home : { ...QH.home, here: n },
          });
          return;
        }
        if (!t || !QH.me || t.id !== QH.me._id) return;
        let n = QH.me._id;
        switch (t.push) {
          case `profile`: {
            let e = QH.characters?.find((e) => e.id === t.id);
            if (!e) return;
            eU({
              characters: QH.characters.map((e) =>
                e.id === t.id ? { ...e, level: t.profile.level } : e,
              ),
              me: lU(e, t.profile, t.attuned, t.wanted),
              mats: t.profile.mats,
              partyClosed: !!t.profile.partyClosed,
              followUntil: Cc(t.followIn, performance.now()),
            });
            return;
          }
          case `gift`: {
            let e = Il[t.altar];
            if (!e) return;
            KH?.effect({
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
            KH?.hearth(t);
            return;
          case `folkLine`:
            KH?.folkLine({
              npc: t.npc,
              why: t.why,
              line: t.line,
              text: t.text,
              plea: t.plea,
            });
            return;
          case `inv`:
            eU({ inv: t });
            return;
          case `writ`:
            eU({
              writ: {
                seq: (QH.writ?.seq ?? 0) + 1,
                victim: t.victim,
                crowns: t.crowns,
              },
            });
            return;
          case `ground`:
            eU({
              ground: t.ground.map((e) =>
                mU(e, n, `ground`, { x: e.x, y: e.y, expiresAt: e.expiresAt }),
              ),
            });
            return;
          case `delves`: {
            let { push: e, id: n, ...r } = t;
            eU({ delves: r });
            break;
          }
          case `quests`:
            eU({ quests: t.quests });
            return;
          case `provisions`:
            eU({ home: { ...QH.home, provisions: t } });
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
