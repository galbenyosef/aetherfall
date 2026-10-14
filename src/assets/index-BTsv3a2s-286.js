// index-BTsv3a2s 286 — current
// Lines 172657-174988 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Vde({
  token: e,
  playerId: t,
  name: n,
  school: r,
  hero: i,
  onExit: a,
  onQuit: o,
}) {
  a5();
  let s = (0, v.useRef)(null),
    c = (0, v.useRef)(null),
    l = (0, v.useRef)(null),
    [u, d] = (0, v.useState)(null),
    f = (0, v.useMemo)(() => (activeBackend.name === `aws` ? `auto` : parseZoneOverride()), []),
    p = (0, v.useRef)(null),
    m = activeBackend.useOnlinePlayers(),
    h = activeBackend.useMonsters(!f),
    g = activeBackend.useRecentFx(!f),
    _ = activeBackend.useChat(),
    y = activeBackend.useActions(e),
    [b, x] = (0, v.useState)(!1),
    [S, C] = (0, v.useState)(void 0),
    [w, T] = (0, v.useState)(0),
    [E, D] = (0, v.useState)(!1),
    [O, k] = (0, v.useState)(!1),
    [ee, te] = (0, v.useState)(!1),
    ne = (0, v.useRef)(!1),
    [re, ie] = (0, v.useState)(!1),
    ae = J8(),
    oe = x5(),
    se = (0, v.useMemo)(() => _ && Zs(_, oe.ignored, t), [_, oe.ignored, t]),
    ce = activeBackend.useInventory(e),
    le = activeBackend.useGround(e),
    [ue, de] = (0, v.useState)(!1),
    fe = (0, v.useRef)(ue);
  fe.current = ue;
  let [pe] = (0, v.useState)(() => Ele()),
    [me, he] = (0, v.useState)(null),
    [ge, _e] = (0, v.useState)(null);
  (0, v.useEffect)(() => {
    ue || _e((e) => (e?.seen ? null : e));
  }, [ue]);
  let [ve, ye] = (0, v.useState)(null),
    [be, xe] = (0, v.useState)([]),
    Ce = (0, v.useRef)(!1),
    we = (0, v.useCallback)((e) => {
      ((Ce.current = e), l.current && (l.current.god = e));
    }, []),
    Te = (0, v.useCallback)((e, t) => l.current?.devJump(e, t), []),
    Ee = activeBackend.useQuests(e),
    [De, Oe] = (0, v.useState)(!1),
    [ke, Ae] = (0, v.useState)(!1),
    je = activeBackend.useAltars(),
    [Me, Ne] = (0, v.useState)(null),
    [Pe, Fe] = (0, v.useState)(!1),
    [Ie, Le] = (0, v.useState)(null),
    Re = activeBackend.useDelves(e),
    [ze, Be] = (0, v.useState)(null),
    [Ve, He] = (0, v.useState)(null),
    [Ue, We] = (0, v.useState)(null),
    Ge = activeBackend.useRemains?.(),
    Ke = activeBackend.useWanted?.(),
    qe = activeBackend.useWrit?.(),
    [Je, Ye] = (0, v.useState)(null),
    [Xe, Ze] = (0, v.useState)(null),
    Qe = (0, v.useCallback)(() => Ze(null), []),
    $e = (0, v.useCallback)(() => {
      let e = l.current?.mageMenuAt(),
        t = s.current?.getBoundingClientRect();
      return e && t ? { ...e, x: e.x + t.left, y: e.y + t.top } : null;
    }, []),
    [et, tt] = (0, v.useState)(null),
    nt = activeBackend.useParty?.(),
    rt = !!nt && !!y.party,
    it = (0, v.useRef)(rt);
  it.current = rt;
  let [at, ot] = (0, v.useState)(!1),
    st = (0, v.useCallback)(() => ot(!1), []),
    [ct, lt] = (0, v.useState)(null),
    ut = (0, v.useRef)(!1),
    ft = activeBackend.useHome(e),
    pt = ft !== null,
    mt = (0, v.useRef)(ft);
  mt.current = ft;
  let [ht, gt] = (0, v.useState)(!1),
    [vt, yt] = (0, v.useState)(!1),
    [bt, xt] = (0, v.useState)(null),
    [Ct, wt] = (0, v.useState)(null),
    [Tt, Et] = (0, v.useState)(null),
    [Dt, Ot] = (0, v.useState)(null),
    [kt, At] = (0, v.useState)(null),
    jt = !!kt,
    Mt = c5(kt),
    [Nt, Pt] = (0, v.useState)(!1),
    It = (0, v.useRef)(0),
    Lt = (0, v.useRef)(0),
    Rt = (0, v.useCallback)((e) => {
      let t = ++It.current;
      xe((n) => [{ ...e, id: t }, ...n].slice(0, 8));
    }, []),
    zt = (0, v.useCallback)((e) => xe((t) => t.filter((t) => t.id !== e)), []),
    Bt = (0, v.useCallback)(
      (e) => {
        let t = activeBackend.userError(e) ?? `Something went wrong.`;
        Rt({ text: t, color: `#ff7a8a` });
      },
      [Rt],
    ),
    Vt = (e) =>
      y.readSpellbook(e).then((e) => {
        let t = typeof e == `string` ? Se(e) : void 0;
        (q.sfx(`chime`, 0.8),
          Rt({
            text: HG(
              t
                ? `You learned ${t.name}. It's in your Spellbook [K].`
                : `You learned a new spell. It's in your Spellbook [K].`,
            ),
            color: `#ffd166`,
          }));
      }, Bt),
    Ht = (0, v.useRef)(null);
  (0, v.useEffect)(() => {
    (Ht.current !== null &&
      Ht.current !== ae.connected &&
      Rt({
        text: ae.connected
          ? `Controller connected.`
          : `Controller disconnected.`,
        color: `#7ef9ff`,
      }),
      (Ht.current = ae.connected));
  }, [ae.connected, Rt]);
  let Ut = (e) =>
      e.to === `error`
        ? (Rt({ text: e.text, color: `#ff7a8a` }), Promise.resolve(!1))
        : e.to === `invite`
          ? (Vn(`invite`, { name: e.name }) ?? Promise.resolve(!1))
          : e.to === `leave`
            ? Hn()
            : (e.to === `party`
                ? (y.party?.say(e.text) ??
                  Promise.reject(Error(`There's no party here.`)))
                : e.to === `near`
                  ? y.sayNear(e.text)
                  : e.to === `whisper`
                    ? y.whisper(e.name, e.text)
                    : y.say(e.text)
              ).then(
                () => !0,
                (e) => (Bt(e), !1),
              ),
    Wt = (0, v.useMemo)(() => {
      let e = se ?? [];
      for (let n = e.length - 1; n >= 0; n--) {
        let r = e[n];
        if (r.to && !r.system && r.playerId !== t) return r._id;
      }
      return null;
    }, [se, t]),
    [Gt, Kt] = (0, v.useState)(null);
  (0, v.useEffect)(() => {
    (E || !GG) && Kt(Wt);
  }, [E, Wt]);
  let qt = (e) => {
      let n = l.current,
        r = mt.current?.here;
      if (!n || !r) return;
      let i = r.owner === t,
        a = (t, r) => n.floater(e.x * 16, e.y * 16 - 18, t, r, !1);
      if (e.t === `store`) {
        ((n.home.openStore = e.id), xt(e.id));
        return;
      }
      if (e.t === `station`) {
        i &&
          wt({
            id: e.id,
            station: e.station,
            name: r.home.house?.items.some((t) => t.id === e.id)
              ? `Stove`
              : void 0,
          });
        return;
      }
      if (e.t === `well`) {
        y.home.drawWater().then((e) => {
          (a(`Can filled · ${e ?? 10} pours`, `#7ec8ff`), q.sfx(`click`, 0.4));
        }, Bt);
        return;
      }
      if (e.t === `rest`) {
        y.home.rest(e.id).then(() => {
          (a(`Well Rested`, `#cfe6ff`),
            Rt({
              text: `You rest a while. Well Rested: ${X7(St)}.`,
              color: `#cfe6ff`,
            }),
            q.sfx(`chime`, 0.5));
        }, Bt);
        return;
      }
      let o = r.home.structures.find((t) => t.id === e.id) ?? e.s,
        s = o.bed,
        c = n.home.now();
      if (!s) {
        if (!i) return;
        let e = n.home.hand;
        e && n.home.seeds(e) > 0
          ? y.home.plant(o.id, e).then(() => {
              (a(`${dt[e].name} planted`, `#b8f08a`), q.sfx(`click`, 0.5));
            }, Bt)
          : Ot(o.id);
        return;
      }
      if (Ft(s, c)) {
        y.home.harvest(o.id).then((e) => {
          e &&
            (a(
              `+${e.n} ${dt[e.crop]?.name ?? e.crop}${e.seeds ? ` · +1 seed` : ``}`,
              `#ffd98a`,
            ),
            e.basket && i
              ? Rt({
                  text: `Provisions full: ${e.basket} to the basket.`,
                  color: `#ffd98a`,
                })
              : e.basket &&
                Rt({ text: `Into ${r.ownerName}'s basket.`, color: `#b8f08a` }),
            q.sfx(`chime`, 0.45));
        }, Bt);
        return;
      }
      if (n.home.thirsty(o, c)) {
        if (n.home.water() <= 0) {
          (a(`Your can's empty`, `#ff9a8a`),
            Rt({
              text: `Your can's empty. Fill it at the well.`,
              color: `#7ec8ff`,
            }));
          return;
        }
        y.home.water(o.id).then(() => {
          (a(`Watered`, `#7ec8ff`), q.sfx(`click`, 0.4));
        }, Bt);
        return;
      }
      Et(o.id);
    },
    Jt = (0, v.useRef)(() => {}),
    Yt = (0, v.useCallback)(() => Jt.current(), []),
    Xt = (0, v.useRef)(() => {}),
    Zt = (0, v.useCallback)(() => Xt.current(), []),
    Qt = (0, v.useRef)(() => !1),
    $t = (0, v.useRef)({
      act: y,
      toast: Rt,
      fail: Bt,
      setAltarOpen: Ne,
      setRoadOpen: Fe,
      setGift: Le,
      setDungeonOpen: Be,
      setCleared: He,
      setRemainsOpen: Ye,
      setMageMenu: Ze,
      setMarket: At,
      toggleStance: Yt,
      toggleHearth: Zt,
      homeUse: qt,
    });
  $t.current = {
    act: y,
    toast: Rt,
    fail: Bt,
    setAltarOpen: Ne,
    setRoadOpen: Fe,
    setGift: Le,
    setDungeonOpen: Be,
    setCleared: He,
    setRemainsOpen: Ye,
    setMageMenu: Ze,
    setMarket: At,
    toggleStance: Yt,
    toggleHearth: Zt,
    homeUse: qt,
  };
  let en = (e) => Error(activeBackend.userError(e) ?? `Something went wrong.`);
  ((0, v.useEffect)(() => {
    let e = 0,
      i = (e, t) =>
        p.current
          ? p.current.request(e, t).then(
              (e) => {
                let t = e;
                return t?.off
                  ? `They're not listening.`
                  : t?.busy
                    ? `One thing at a time.`
                    : null;
              },
              (e) => (e instanceof Error ? e.message : `They didn't hear you.`),
            )
          : Promise.resolve(`They can't hear you from here.`),
      a = new $se(s.current, {
        myId: t,
        school: r,
        name: n,
        api: {
          move: (t, n, r, i) => {
            (p.current && Date.now() - e < 3e3) ||
              ((e = Date.now()),
              $t.current.act.move(t, n, r, i).catch(() => {}));
          },
          folkLine: (e, t) =>
            void p.current
              ?.request(`folkLine`, { npc: e, why: t })
              .catch(() => {}),
          folkTalked: (e, t) =>
            void p.current
              ?.request(`folkTalked`, { npc: e, line: t })
              .catch(() => {}),
          folkHelp: (e) =>
            p.current
              ? p.current.request(`folkHelp`, { npc: e }).then(
                  () => null,
                  (e) =>
                    e instanceof Error ? e.message : `Couldn't help them up.`,
                )
              : Promise.resolve(`You can't help them from here.`),
          folkPlea: (e, t, n) =>
            p.current
              ? p.current
                  .request(`folkPlea`, { npc: e, missing: t, answer: n })
                  .then(
                    () => void 0,
                    () => void 0,
                  )
              : Promise.resolve(),
          folkRescue: (e) =>
            p.current
              ? p.current.request(`folkRescue`, { npc: e }).then(
                  () => null,
                  (e) => (e instanceof Error ? e.message : `They won't come.`),
                )
              : Promise.resolve(`You can't reach them from here.`),
          folkAsk: (e, t) => i(`folkAsk`, { npc: e, about: t }),
          folkNews: (e) =>
            p.current
              ? p.current.request(`folkNews`, { npc: e }).then(
                  (e) => e?.news ?? [],
                  () => [],
                )
              : Promise.resolve([]),
          folkTell: (e, t) => i(`folkTell`, { npc: e, deed: t }),
          folkGive: (e, t) => i(`folkGive`, { npc: e, crowns: t }),
          cast: (e, t, n, r, i, a, o) => {
            if (p.current)
              return l.current?.inDungeon()
                ? void 0
                : p.current.cast(e, r, i, o);
            $t.current.act.cast(e, t, n, r, i, a).catch(() => {});
          },
          hitMonster: async (e, t) => {
            if (p.current) return null;
            let n = await $t.current.act.hitMonster(e, t),
              r = n?.loot?.best;
            return (
              (r === `remembered` || r === `skyfallen`) &&
                ($t.current.toast({
                  text: `A ${_a[r].name} item fell!`,
                  color: _a[r].color,
                }),
                q.sfx(`chime`, 0.8)),
              n
            );
          },
          pickup: (e) => {
            $t.current.act
              .pickup(e)
              .then((e) => {
                e &&
                  ($t.current.toast({ text: o7(e), color: a7(e), item: e }),
                  q.sfx(`click`, 0.7));
              })
              .catch((e) => {
                activeBackend.userError(e)?.includes(`full`) &&
                  Date.now() - Lt.current > 5e3 &&
                  ((Lt.current = Date.now()),
                  $t.current.toast({
                    text: `Your satchel is full.`,
                    color: `#ff7a8a`,
                  }));
              });
          },
          struck: (e, t) =>
            p.current
              ? Promise.resolve(null)
              : $t.current.act.struck(e, t).catch(() => null),
          advanceTutorial: (e) =>
            void $t.current.act.storyAdvance(e).catch(() => {}),
          completeTutorial: () =>
            void $t.current.act.storyComplete().catch(() => {}),
          questAccept: (e) =>
            $t.current.act.questAccept(e).catch($t.current.fail),
          questProgress: (e, t, n) =>
            $t.current.act.questProgress(e, t, n).catch($t.current.fail),
          questChoose: (e, t, n) =>
            $t.current.act.questChoose(e, t, n).catch($t.current.fail),
          questBoss: (e) => $t.current.act.questBoss(e).catch($t.current.fail),
          questPhase: (e) => $t.current.act.questPhase(e).catch(() => !1),
          storyHurt: (e) => void $t.current.act.storyHurt(e).catch(() => {}),
          altarMenu: (e) => {
            ($t.current.setRoadOpen(!1),
              $t.current.setAltarOpen((t) => (t === e ? null : e)));
          },
          travel: (e) =>
            $t.current.act.travel(e).catch((e) => ($t.current.fail(e), null)),
          door: (e, t, n) =>
            void $t.current.act.door(e, t, n).catch($t.current.fail),
          gift: (e) => $t.current.setGift(e),
          dungeonMenu: (e) => {
            ($t.current.setAltarOpen(null),
              $t.current.setDungeonOpen((t) => (t === e ? null : e)));
          },
          remainsMenu: (e) => {
            ($t.current.setAltarOpen(null),
              $t.current.setRemainsOpen((t) => (t === e ? null : e)));
          },
          shopsOpen: () => !!mt.current,
          shopMenu: (e) =>
            $t.current.setMarket(Mt.current ? null : { greeting: e() }),
          mageMenu: (e) => {
            let t = s.current?.getBoundingClientRect(),
              n = (e) => (t ? { ...e, x: e.x + t.left, y: e.y + t.top } : e);
            $t.current.setMageMenu(
              e && { ...e, at: n(e.at), others: e.others?.map(n) },
            );
          },
          gameMenu: () => Qt.current(),
          dungeon: {
            leave: () => $t.current.act.dungeon.leave().catch(() => null),
            hurt: (e, t) => $t.current.act.dungeon.hurt(e, t).catch(() => null),
            heal: (e) => void $t.current.act.dungeon.heal(e).catch(() => {}),
            touch: (e) =>
              (
                $t.current.act.dungeon.touch?.(e) ?? Promise.resolve(null)
              ).catch((e) => {
                throw en(e);
              }),
            kill: (e, t) => $t.current.act.dungeon.kill(e, t).catch(() => null),
            boss: (e, t) => $t.current.act.dungeon.boss(e, t).catch(() => null),
            open: (e, t, n) =>
              $t.current.act.dungeon.open(e, t, n).catch((e) => {
                throw en(e);
              }),
            descend: () =>
              $t.current.act.dungeon.descend().catch((e) => {
                throw en(e);
              }),
            unmade: () => $t.current.act.dungeon.unmade().catch(() => null),
            pick: (e) => $t.current.act.dungeon.pick(e).catch(() => null),
            surgeKill: (e, t, n) =>
              $t.current.act.dungeon.surgeKill(e, t, n).catch(() => null),
            cleared: (e) => $t.current.setCleared(e),
            loot: (e) => {
              for (let t of e)
                $t.current.toast({
                  text: t.ground
                    ? `${t.name} (at the door: satchel full)`
                    : t.name,
                  color: Tue(t.rarity),
                });
              e.some(
                (e) => e.rarity === `remembered` || e.rarity === `skyfallen`,
              ) && q.sfx(`chime`, 0.8);
            },
            toast: (e, t) => $t.current.toast({ text: e, color: t }),
          },
          home: {
            use: (e) => $t.current.homeUse(e),
            build: (e, t, n) =>
              void $t.current.act.home.build(e, t, n).catch($t.current.fail),
            unbuild: (e) =>
              void $t.current.act.home.unbuild(e).catch($t.current.fail),
            go: (e) =>
              (e
                ? $t.current.act.home.visit(e)
                : $t.current.act.home.go()
              ).then(
                () => !0,
                (e) => ($t.current.fail(e), !1),
              ),
            leave: () =>
              $t.current.act.home.leave().then(
                () => !0,
                (e) => ($t.current.fail(e), !1),
              ),
            houseDoor: (e) =>
              void $t.current.act.home.houseDoor(e).catch($t.current.fail),
            house: (e) => {
              let { act: t, fail: n } = $t.current;
              `paint` in e
                ? t.home.paint(e.paint).catch(n)
                : `furnish` in e
                  ? t.home
                      .furnish(
                        e.furnish.kind,
                        e.furnish.x,
                        e.furnish.y,
                        e.furnish.arg,
                      )
                      .catch(n)
                  : t.home.unfurnish(e.unfurnish.id).catch(n);
            },
          },
        },
      });
    if (((l.current = a), (a.god = Ce.current), f)) {
      a.net = { glide: 0.12 };
      let e = f === `auto`,
        n = new ZoneClient(a, {
          seat: e ? (e) => $t.current.act.enterZone(e) : void 0,
          url: e ? void 0 : f,
          room: e ? void 0 : parseRoomOverride(),
          myId: t,
          onNotice: (e) => $t.current.toast({ text: e, color: `#7ef9ff` }),
          onPush: (e) => activeBackend.handlePush?.(e),
        });
      ((p.current = n), activeBackend.attachZone?.(n), n.start());
    }
    (a.attachMinimap(c.current),
      a.start(),
      q.init(),
      q.setCombat(!1),
      q.playTrack(`marizon_idle`, { fight: `marizon_fight` }));
    let o = window.setInterval(() => d(a.getHud()), 60),
      u = () => $t.current.act.leave();
    return (
      window.addEventListener(`beforeunload`, u),
      () => {
        (window.clearInterval(o),
          window.removeEventListener(`beforeunload`, u),
          p.current?.stop(),
          (p.current = null),
          activeBackend.attachZone?.(null),
          a.dispose(),
          (l.current = null));
      }
    );
  }, [t, r, n, e, f]),
    (0, v.useEffect)(() => {
      m &&
        (p.current ? p.current.setConvexPlayers(m) : l.current?.setPlayers(m));
    }, [m]),
    (0, v.useEffect)(() => {
      h && l.current?.setMonsters(h);
    }, [h]),
    (0, v.useEffect)(() => {
      g && l.current?.setFx(g);
    }, [g]),
    (0, v.useEffect)(() => {
      _ && l.current?.setMessages(_);
    }, [_]),
    (0, v.useEffect)(() => {
      je && l.current?.setAltars(je);
    }, [je]),
    (0, v.useEffect)(() => {
      Re !== void 0 && l.current?.setDelves(Re);
    }, [Re, u?.ready]),
    (0, v.useEffect)(() => {
      let e = l.current;
      if (!ze || !e) return;
      let t = $o[ze];
      (Math.hypot(e.me.x - t.x, e.me.y - t.y) > 5 || u?.dead || e.dungeon) &&
        Be(null);
    }, [u, ze]),
    (0, v.useEffect)(() => {
      (Me && u && u.node !== Me && Ne(null), u?.dead && (Ne(null), Fe(!1)));
    }, [u, Me]),
    (0, v.useEffect)(() => {
      Ee && l.current?.quests.setRows(Ee);
    }, [Ee]),
    (0, v.useEffect)(() => {
      l.current?.setHome(ft?.here ?? null);
    }, [ft?.here, u?.ready]),
    (0, v.useEffect)(() => {
      l.current?.home.setGoods(ft?.provisions?.goods);
    }, [ft?.provisions, u?.ready]));
  let tn = (0, v.useRef)(0),
    nn = (0, v.useRef)(new Set());
  ((0, v.useEffect)(() => {
    for (let e of ft?.notes ?? [])
      e.id <= tn.current ||
        ((tn.current = e.id), Rt({ text: e.text, color: `#b8f08a` }));
    for (let e of ft?.invites ?? []) {
      let t = `${e.owner}:${e.until}`;
      nn.current.has(t) ||
        (nn.current.add(t),
        Rt({
          text: `${e.from} invites you over. ${GG ? `Tap Home` : HG(`[Y]`)} to go.`,
          color: `#ffd98a`,
        }),
        q.sfx(`chime`, 0.6));
    }
  }, [ft?.notes, ft?.invites, Rt]),
    (0, v.useEffect)(() => {
      let e = l.current,
        t = !!u?.home,
        n = (t) => {
          if (!e || !t) return !0;
          let n = e.home.posOf(t);
          return !n || Math.hypot(e.me.x - n.x, e.me.y - n.y) > 3.2;
        };
      (bt && (!t || n(bt)) && xt(null),
        Ct && (!t || n(Ct.id)) && wt(null),
        Tt && (!t || n(Tt)) && Et(null),
        Dt && (!t || n(Dt)) && Ot(null),
        vt && !u?.home?.mine && yt(!1),
        jt &&
          (e?.room?.kind !== `shop` || !e.room.trade || u?.dead) &&
          At(null));
    }, [u, ft?.here, bt, Ct, Tt, Dt, vt, jt]),
    (0, v.useEffect)(() => {
      let e = l.current;
      e && (e.home.openStore = bt);
    }, [bt]),
    (0, v.useEffect)(() => {
      let e = l.current;
      e && !vt && e.home.stopBuilding();
    }, [vt]));
  let rn = !!u?.home?.inHouse;
  (0, v.useEffect)(() => yt(!1), [rn]);
  let an = (0, v.useCallback)((e) => l.current?.story?.fmt(e) ?? e, []);
  tue(
    Ee,
    an,
    Rt,
    (0, v.useCallback)((e) => {
      let t = l.current;
      t &&
        ((t.banner = {
          title: `QUEST COMPLETE`,
          subtitle: e.title,
          t0: t.real,
          dur: 4,
          color: `#ffd166`,
        }),
        q.sfx(`levelup`, 0.8));
    }, []),
  );
  let on = (0, v.useCallback)((e) => {
      (l.current?.quests.track(e), We(e));
    }, []),
    sn = (0, v.useCallback)((e) => {
      let t = l.current;
      t?.story?.done &&
        !t.story.locked &&
        (We(t.quests.trackedQuest()?.q.id ?? null),
        Oe((t) => e ?? !t),
        q.sfx(`click`, 0.6));
    }, []);
  ((0, v.useEffect)(() => {
    l.current?.setRemains(Ge ?? []);
  }, [Ge]),
    (0, v.useEffect)(() => {
      l.current?.setWanted(Ke ?? []);
    }, [Ke]));
  let cn = (0, v.useRef)(qe?.seq ?? 0);
  (0, v.useEffect)(() => {
    !qe ||
      qe.seq <= cn.current ||
      ((cn.current = qe.seq),
      q.sfx(`chime`, 0.9),
      Rt({
        text: `The Circle's writ on ${qe.victim}: +${qe.crowns} Crowns`,
        color: `#ffd166`,
      }));
  }, [qe, Rt]);
  let ln = u?.pvp.remains ?? null;
  (0, v.useEffect)(() => {
    Je && (ln !== Je || !Ge?.some((e) => e.id === Je)) && Ye(null);
  }, [Je, ln, Ge]);
  let un = (0, v.useCallback)(() => {
    let e = l.current;
    if (!e?.meDoc || !y.hostile) return;
    if (!e.story?.done)
      return Rt({
        text: `Not before the Night of Keys is over.`,
        color: `#ff7a8a`,
      });
    let t = !e.meDoc.hostile;
    y.hostile(t).then((e) => {
      (q.sfx(e ? `zap` : `click`, 0.6),
        Rt(
          e
            ? {
                text: `Bared: your spells will hurt any mage outside the Ward.`,
                color: `#ffa040`,
              }
            : {
                text: `Veiled: your spells spare other mages (the Discordant excepted).`,
                color: `#bdfcff`,
              },
        ));
    }, Bt);
  }, [y, Rt, Bt]);
  Jt.current = un;
  let dn = (0, v.useCallback)(() => {
      let e = l.current;
      e?.hearth &&
        y.hearth(!1).then((t) => {
          t !== !0 && e.zoneHearth({ state: `broken` });
        }, Bt);
    }, [y, Bt]),
    fn = (0, v.useCallback)(() => {
      let e = l.current;
      if (!e?.meDoc) return;
      if (e.hearth) return dn();
      if (!e.story?.done || e.story.locked || e.story.chatting || e.cine)
        return;
      let t = e.hearthBegin();
      if (t) return Rt({ text: t, color: `#ff7a8a` });
      y.hearth(!0).catch(Bt);
    }, [y, Rt, Bt, dn]);
  Xt.current = fn;
  let pn = (0, v.useCallback)(
      (e, t) =>
        (y.loot ? y.loot(e, t) : Promise.resolve(null)).then((e) => {
          if (!e || (!e.items.length && !e.crowns)) return;
          let { items: t, crowns: n } = e;
          (q.sfx(`chime`, 0.6),
            n && Rt({ text: `+${n} Crowns`, color: `#ffd166` }),
            t.length === 1
              ? Rt({ text: o7(t[0]), color: a7(t[0]), item: t[0] })
              : t.length > 1 &&
                Rt({ text: `Took ${t.length} items.`, color: `#ffd166` }));
        }, Bt),
      [y, Rt, Bt],
    ),
    mn = (0, v.useRef)(null);
  (0, v.useEffect)(() => {
    if (!le) return;
    l.current?.setDrops(
      le.map((e) => ({ id: e._id, item: t7(e), x: e.x ?? 0, y: e.y ?? 0 })),
    );
    let e = mn.current;
    if (((mn.current = new Set(le.map((e) => e._id))), e && p.current)) {
      for (let t of le)
        if (!(
          e.has(t._id) ||
          (t.rarity !== `remembered` && t.rarity !== `skyfallen`)
        )) {
          (Rt({
            text: `A ${_a[t.rarity].name} item fell!`,
            color: _a[t.rarity].color,
          }),
            q.sfx(`chime`, 0.8));
          break;
        }
    }
  }, [le, Rt]);
  let hn = (0, v.useCallback)(() => {
      let e = l.current;
      e?.story?.done && !K9(e) && (Ae((e) => !e), q.sfx(`click`, 0.6));
    }, []),
    gn = u?.ready && !u.cinematic,
    _n = !!u?.cinematic;
  ((0, v.useEffect)(() => {
    let e = (e) => {
      if (
        l.current?.took(e) ||
        document.activeElement instanceof HTMLInputElement
      )
        return;
      let t = CG(e);
      if (
        (t && zde.has(t) && e.preventDefault(),
        (t === `satchel` ||
          t === `journal` ||
          t === `spellbook` ||
          t === `atlas`) &&
          (t !== `satchel` && de(!1),
          t !== `journal` && Oe(!1),
          t !== `spellbook` && x(!1),
          t !== `atlas` && Ae(!1)),
        t === `spellbook` &&
          !l.current?.story?.locked &&
          (C(void 0), x((e) => !e), q.sfx(`click`, 0.6)),
        t === `settings` &&
          !e.repeat &&
          !e.altKey &&
          (k(!0), q.sfx(`click`, 0.6)),
        t === `satchel` &&
          !l.current?.story?.locked &&
          (ye(null), de((e) => !e), q.sfx(`click`, 0.6)),
        t === `journal` && sn(),
        t === `atlas` && !e.repeat && hn(),
        e.key === `Escape` && Oe(!1),
        e.key === `Escape` &&
          !e.defaultPrevented &&
          !e.repeat &&
          !bn.current &&
          xn.current < e.timeStamp &&
          !K9(l.current) &&
          !(
            e.target instanceof HTMLInputElement ||
            e.target instanceof HTMLTextAreaElement
          ) &&
          (ut.current
            ? ((ut.current = !1), lt(null))
            : (te(!0), q.sfx(`click`, 0.6))),
        t === `party` && !e.repeat && it.current)
      ) {
        let e = l.current?.story;
        e?.done &&
          !e.locked &&
          !e.chatting &&
          !l.current?.cine &&
          (ot((e) => !e), q.sfx(`click`, 0.6));
      }
      t === `stance` &&
        !e.repeat &&
        !l.current?.story?.locked &&
        !l.current?.story?.chatting &&
        $t.current.toggleStance();
      let n = l.current;
      (mt.current &&
        n &&
        !n.story?.locked &&
        !n.story?.chatting &&
        !n.cine &&
        (t === `homestead` &&
          n.story?.done &&
          (gt((e) => !e), q.sfx(`click`, 0.6)),
        t === `build` &&
          n.home.on(n.room) &&
          n.home.mine() &&
          (yt((e) => !e), q.sfx(`click`, 0.6)),
        t === `provisions` && (Pt((e) => !e), q.sfx(`click`, 0.6)),
        t === `market` &&
          !e.repeat &&
          n.room?.kind === `shop` &&
          n.room.trade &&
          (At((e) => (e ? null : { greeting: null })), q.sfx(`click`, 0.6))),
        t === `hearth` &&
          !e.repeat &&
          !e.altKey &&
          activeBackend.name === `aws` &&
          n?.story?.done &&
          !n.story.locked &&
          !n.story.chatting &&
          !n.cine &&
          $t.current.toggleHearth(),
        t === `road` &&
          !l.current?.story?.locked &&
          !l.current?.story?.chatting &&
          l.current?.nodeHere() &&
          (Ne(null), Le(null), Fe((e) => !e), q.sfx(`click`, 0.6)),
        t === `interact` &&
          l.current?.atCrystal() &&
          !l.current.talkable &&
          !l.current.story?.locked &&
          !l.current.story?.chatting &&
          (de(!1),
          ye((e) => (e ? null : { initial: null })),
          q.sfx(`click`, 0.6)));
    };
    return (
      window.addEventListener(`keydown`, e),
      () => window.removeEventListener(`keydown`, e)
    );
  }, [sn, hn]),
    (0, v.useEffect)(() => {
      let e = () => {
        let e = l.current,
          t = s.current;
        if (!e || !t) return;
        let n = t.getBoundingClientRect(),
          r = window.innerWidth - n.left,
          i = window.innerHeight - n.top,
          a = DQ(
            document.querySelectorAll(Bde),
            n,
            OQ(
              document.querySelector(`.game-screen > .hud`),
              window.innerWidth,
            ),
          ),
          [o] = DQ(document.querySelectorAll(`.touch-stick.active`), n);
        (o && a.push(i$(o, i)), (e.hudRects = a));
        let c = document.querySelector(`.safe-probe`)?.getBoundingClientRect();
        e.hudScreen = {
          w: r,
          h: i,
          safe: a$(
            c
              ? {
                  x: c.left - n.left,
                  y: c.top - n.top,
                  w: c.width,
                  h: c.height,
                }
              : null,
            r,
            i,
          ),
        };
      };
      e();
      let t = window.setInterval(e, 250),
        n = 0,
        r = () => {
          (cancelAnimationFrame(n), (n = requestAnimationFrame(e)));
        },
        i = GG ? [`pointerdown`, `pointerup`, `pointercancel`] : [];
      for (let e of i)
        window.addEventListener(e, r, { capture: !0, passive: !0 });
      return (
        window.addEventListener(`resize`, r),
        () => {
          (window.clearInterval(t), cancelAnimationFrame(n));
          for (let e of i) window.removeEventListener(e, r, { capture: !0 });
          window.removeEventListener(`resize`, r);
        }
      );
    }, []));
  let vn = (0, v.useCallback)((e) => !!l.current?.took(e), []),
    yn = (0, v.useCallback)(
      () => !!l.current?.cine || !!l.current?.story?.locked,
      [],
    );
  (0, v.useEffect)(() => {
    _n &&
      (Ze(null),
      ot(!1),
      x(!1),
      de(!1),
      ye(null),
      Oe(!1),
      Ae(!1),
      Ne(null),
      Fe(!1),
      Be(null),
      gt(!1),
      At(null),
      Pt(!1));
  }, [_n]);
  let bn = (0, v.useRef)(!1),
    xn = (0, v.useRef)(-1),
    Sn =
      ee ||
      O ||
      ue ||
      !!ve ||
      b ||
      De ||
      ke ||
      !!Me ||
      Pe ||
      !!Ie ||
      ht ||
      vt ||
      !!bt ||
      !!Ct ||
      jt ||
      Nt ||
      !!Dt ||
      !!Tt ||
      !!ze ||
      !!Ve ||
      !!Je ||
      !!Xe ||
      at ||
      E ||
      re;
  (bn.current && !Sn && (xn.current = performance.now()),
    (bn.current = Sn),
    (Qt.current = () => {
      if (O) return !1;
      if (ee) te(!1);
      else if (bn.current || K9(l.current)) return !1;
      else te(!0);
      return (q.sfx(`click`, 0.6), !0);
    }));
  let Cn = l.current,
    wn = Cn?.meDoc,
    Tn = wn?.attuned ?? [],
    En = () => {
      (Ne(null), Le(null), Fe(!0));
    },
    Dn = u?.story,
    On =
      ue ||
      !!ve ||
      b ||
      De ||
      ke ||
      !!Me ||
      Pe ||
      !!Ie ||
      !!ze ||
      !!Ve ||
      !!Je ||
      at ||
      ht ||
      vt ||
      !!bt ||
      !!Ct ||
      !!Tt ||
      !!Dt ||
      jt ||
      Nt ||
      O ||
      ee ||
      (re && !!gn) ||
      !!Dn?.dialogue?.choices ||
      (!!u?.dead && !_n),
    kn = On || !!Xe;
  (0, v.useLayoutEffect)(() => {
    On && Xe && Ze(null);
  }, [On, Xe]);
  let An =
      ae.device === `pad` &&
      oe.padAim === `ask` &&
      !!gn &&
      !!u?.calm &&
      !!u.padAsk &&
      !u.dead &&
      !Dn?.dialogue &&
      !kn,
    jn = kn || An;
  (0, v.useLayoutEffect)(() => {
    l.current &&
      ((l.current.uiOpen = jn),
      (l.current.askUp = An),
      (l.current.mageMenuFor = Xe?.key ?? null));
  }, [jn, An, u?.ready, Xe]);
  let Mn = nt?.party ?? null,
    Nn = wc(nt?.followUntil, performance.now()),
    Pn = (u?.pvp.outlaw ?? 0) > 0,
    Fn = (e) => ({
      whispers: activeBackend.name === `aws`,
      ignored: e,
      parties: rt,
      party: Mn
        ? {
            leader: Mn.leader === t,
            full: $s(Mn),
            members: Mn.members.map((e) => e.name),
          }
        : null,
      followIn: Nn,
      discordant: Pn,
    });
  ((0, v.useEffect)(() => {
    l.current?.setParty(Mn?.members ?? null);
  }, [Mn, u?.ready]),
    (0, v.useEffect)(() => {
      l.current?.setOffers(nt?.offers ?? []);
    }, [nt?.offers, u?.ready]));
  let In = (0, v.useRef)(-1 / 0),
    Ln = (e, t) => {
      let n = performance.now();
      n - In.current < 400 ||
        ((In.current = n),
        q.sfx(`click`, 0.6),
        y.party?.answer(e.from, t).then((n) => {
          (t &&
            Rt({
              text:
                e.kind === `ask`
                  ? `${e.name} has joined your party.`
                  : `You've joined ${e.name}'s party.`,
              color: `#b8f5bf`,
            }),
            t &&
              n?.follow &&
              lt({ ...n.follow, until: Date.now() + Ns.inviteMs }));
        }, Bt));
    },
    Rn = nt?.offers;
  (0, v.useEffect)(() => {
    let e = y.party;
    if (e && Rn)
      for (let t of Rn)
        Ks(oe.ignored, t.name) && e.hush(t.from, t.kind).catch(() => {});
  }, [Rn, oe.ignored, y.party]);
  let zn = (0, v.useRef)({ busy: !1, until: 0 }),
    Bn = (e, t) => {
      let n = y.party,
        r = zn.current;
      if (!n || r.busy || performance.now() < r.until)
        return Promise.resolve(!1);
      r.busy = !0;
      let i = Mn?.members.find((t) => t.id === e)?.name ?? `them`;
      return (
        q.sfx(`click`, 0.6),
        n.follow(e, t).then(
          () => (
            (r.busy = !1),
            (r.until = performance.now() + Rde),
            lt(null),
            Rt({
              text: `You slip into Layer ${mc(t) ?? `?`}, where ${i} is.`,
              color: `#b8f5bf`,
            }),
            !0
          ),
          (e) => ((r.busy = !1), Bt(e), !1),
        )
      );
    };
  (0, v.useEffect)(() => {
    if (!ct) return;
    if (!Mn?.members.some((e) => e.id === ct.member)) {
      lt(null);
      return;
    }
    let e = window.setTimeout(
      () => lt(null),
      Math.max(0, ct.until - Date.now()),
    );
    return () => window.clearTimeout(e);
  }, [ct, Mn]);
  let Vn = (e, t) => {
      let n = y.party;
      if (!n) return;
      let r = t.entity == null ? { name: t.name } : { entity: t.entity },
        i = t.id ?? Mn?.members.find((e) => Ws(e.name) === Ws(t.name))?.id,
        a = (e) =>
          e.then(
            () => !0,
            (e) => (Bt(e), !1),
          );
      if (e === `invite`)
        return a(
          n.invite(r).then((e) =>
            Rt({
              text: `Invitation sent to ${e.invited}.`,
              color: `#b8f5bf`,
            }),
          ),
        );
      if (e === `ask`)
        return a(
          n.ask(r).then((e) =>
            Rt({
              text: `You asked ${e.asked}, who leads their party, to let you in.`,
              color: `#b8f5bf`,
            }),
          ),
        );
      if (e === `lead` && i) return a(n.lead(i));
      if (e === `kick` && i) return a(n.kick(i));
    },
    Hn = () =>
      y.party
        ? y.party.leave().then(
            () => (
              Rt({ text: `You've left the party.`, color: `#b8f5bf` }),
              q.sfx(`click`, 0.6),
              !0
            ),
            (e) => (Bt(e), !1),
          )
        : Promise.resolve(!1),
    Un = nt?.stats ?? Ide,
    Wn = p.current?.roomId ?? ``,
    Gn = nt?.here,
    Kn = Gn && Gn.room === Wn ? Gn.host : void 0,
    qn = (0, v.useMemo)(() => ({ room: Wn, host: Kn }), [Wn, Kn]),
    Jn = (0, v.useMemo)(
      () => (Mn ? Oc(Mn.members, Un, t, qn) : []),
      [Mn, Un, t, qn],
    ),
    Yn = (0, v.useMemo)(
      () => (Mn && ze ? dc(Mn.members, Un, t, ze, qn) : null),
      [Mn, Un, t, ze, qn],
    ),
    A =
      rt && nt && Cn?.story?.done && u
        ? (() => {
            let e = ct && Mn?.members.find((e) => e.id === ct.member);
            if (!ct || !e) return null;
            let t = Un[e.id],
              n = t ? Sc(e, t, qn, performance.now()) : ct.room;
            return n
              ? (0, Q.jsx)(Nde, {
                  name: e.name,
                  school: e.school,
                  room: n,
                  followIn: Nn,
                  discordant: Pn,
                  onJoin: () => void Bn(e.id, n),
                  onDismiss: () => lt(null),
                })
              : null;
          })()
        : null;
  ut.current = !!A;
  let Xn = !!A;
  ((0, v.useEffect)(() => {
    l.current?.setFollowCard(Xn);
  }, [Xn, u?.ready]),
    (0, v.useEffect)(() => {
      l.current?.setPartyMap(Jn);
    }, [Jn, u?.ready]));
  let Zn = (0, v.useRef)(-1 / 0),
    Qn = (e, t) => {
      let n = l.current;
      if (n?.cine || n?.story?.locked) return;
      let r = bc(e.id);
      if (Xe?.key === r) {
        performance.now() - Zn.current >= 400 && Ze(null);
        return;
      }
      let i = l.current?.mageMarks(e.name);
      ((Zn.current = performance.now()),
        q.sfx(`click`, 0.5),
        Ze({
          key: r,
          entity: null,
          name: e.name,
          school: e.school,
          level: i?.level ?? Un[e.id]?.level ?? 0,
          outlaw: !!i?.outlaw,
          hostile: !!i?.hostile,
          wanted: i?.wanted ?? 0,
          partied: !0,
          at: t,
          fixed: !0,
          follow: Sc(e, Un[e.id], qn, performance.now()),
        }));
    };
  (0, v.useEffect)(() => {
    Xe?.fixed && !Mn?.members.some((e) => bc(e.id) === Xe.key) && Ze(null);
  }, [Xe, Mn]);
  let $n = (e, t) => {
      let n = t ?? Xe;
      if ((t || Ze(null), !n)) return;
      if (e === `follow`) {
        let e = t?.id ?? Mn?.members.find((e) => Ws(e.name) === Ws(n.name))?.id,
          r = t ? t.room : Xe?.follow;
        return e && r ? Bn(e, r) : void 0;
      }
      if (
        (q.sfx(`click`, 0.6),
        e === `invite` || e === `ask` || e === `lead` || e === `kick`)
      )
        return Vn(e, n);
      if (e === `whisper`) {
        (t && ot(!1),
          GG && D(!0),
          tt((e) => ({ name: n.name, n: (e?.n ?? 0) + 1 })));
        return;
      }
      let r = _l().ignored;
      if (e === `unignore`) {
        (yl({ ignored: Js(r, n.name) }),
          Rt({ text: `${n.name}'s words show again.`, color: `#bdfcff` }));
        return;
      }
      if (r.length >= 100 && !Ks(r, n.name)) {
        Rt({
          text: `You ignore 100 mages already: unignore one in Settings → Chat first.`,
          color: `#ff7a8a`,
        });
        return;
      }
      (yl({ ignored: qs(r, n.name) }),
        Rt({
          text: `Ignoring ${n.name}: their words, whispers, bubbles and invitations won't show here (Settings → Chat to undo).`,
          color: `#bdfcff`,
        }));
    },
    er = ae.device === `pad`,
    j = [];
  if (
    (ce &&
      j.push({
        id: `satchel`,
        title: `Satchel [${Bi(oG(`satchel`))}]: ${ce.bag.length} of ${ce.bagMax}`,
        hint: er ? (0, Q.jsx)(Y8, { b: `DOWN` }) : Bi(oG(`satchel`)),
        badge: ce.bag.length >= ce.bagMax ? `!` : null,
        icon: j5.satchel,
        onClick: () => de((e) => !e),
      }),
    u && Cn?.story?.done)
  ) {
    let e = !!u.quests.next && u.quests.chapter.status === `ready`;
    j.push({
      id: `journal`,
      title: `Journal [${Bi(oG(`journal`))}]: ${u.quests.entries.length} open${e ? `; the story's next part is waiting` : ``}`,
      hint: er ? (0, Q.jsx)(Y8, { b: `UP` }) : Bi(oG(`journal`)),
      badge: e ? `!` : null,
      icon: j5.journal,
      onClick: () => sn(),
    });
  }
  if (u && (!Dn || Dn.skillsTaught)) {
    let e = u.attrPoints;
    j.push({
      id: `arts`,
      title: `Inner Arts [${Bi(oG(`spellbook`))}]${e > 0 ? `: ${e} passive point${e === 1 ? `` : `s`} to spend` : ``}`,
      hint: er ? (0, Q.jsx)(Y8, { b: `LEFT` }) : Bi(oG(`spellbook`)),
      badge: e > 0 ? String(e) : null,
      icon: j5.arts,
      onClick: () => {
        (C(void 0), x((e) => !e));
      },
    });
  }
  (Cn?.story?.done &&
    j.push({
      id: `atlas`,
      title: `Atlas [${Bi(oG(`atlas`))}]`,
      hint: er ? `` : Bi(oG(`atlas`)),
      icon: j5.atlas,
      onClick: hn,
    }),
    j.push({
      id: `menu`,
      title: `Game menu [Esc]`,
      hint: er ? (0, Q.jsx)(Y8, { b: `MENU` }) : `Esc`,
      icon: j5.menu,
      onClick: () => {
        (te(!0), q.sfx(`click`, 0.6));
      },
    }));
  let tr =
      ue && ce ? `satchel` : De ? `journal` : b ? `arts` : ke ? `atlas` : null,
    nr = (e) => {
      e !== tr &&
        (de(e === `satchel`),
        x(e === `arts`),
        Ae(e === `atlas`),
        e === `journal` ? sn(!0) : Oe(!1),
        e === `arts` && C(void 0),
        e !== `journal` && q.sfx(`click`, 0.6));
    },
    rr = {
      satchel: `Satchel`,
      journal: `Journal`,
      arts: `Inner Arts`,
      atlas: `Atlas`,
    },
    ir = j
      .filter((e) => e.id in rr)
      .map((e) => ({ ...e, label: rr[e.id], onClick: () => nr(e.id) })),
    ar = !!tr && ir.length > 1;
  return (0, Q.jsxs)(`div`, {
    className: `screen game-screen ${_n ? `in-scene` : ``}${ar ? ` with-tabs` : ``}`,
    children: [
      (0, Q.jsx)(`canvas`, { ref: s, className: `game-canvas` }),
      (0, Q.jsx)(`i`, {
        className: `safe-probe`,
        "aria-hidden": `true`,
        style: {
          position: `absolute`,
          left: `env(safe-area-inset-left, 0px)`,
          top: `env(safe-area-inset-top, 0px)`,
          right: `env(safe-area-inset-right, 0px)`,
          bottom: `env(safe-area-inset-bottom, 0px)`,
          visibility: `hidden`,
          pointerEvents: `none`,
        },
      }),
      !u?.ready &&
        (0, Q.jsx)(`div`, {
          className: `loading`,
          children: `Weaving the world…`,
        }),
      f && (0, Q.jsx)(Qde, { zone: p }),
      (0, Q.jsx)(Tde, { dev: y.dev, onGod: we, onJump: Te }),
      GG &&
        u &&
        (0, Q.jsx)(hue, {
          game: Cn,
          hud: u,
          school: r,
          visible:
            !!gn &&
            !u.dead &&
            !Dn?.dialogue &&
            !ue &&
            !ve &&
            !b &&
            !De &&
            !ke &&
            !Me &&
            !Pe &&
            !Ie &&
            !ht &&
            !bt &&
            !Ct &&
            !jt &&
            !Nt &&
            !Dt &&
            !Tt &&
            !O &&
            !ee &&
            !at &&
            ae.device !== `pad`,
          chatOpen: E,
          whispered: Wt !== null && Wt !== Gt,
          onChat: () => D((e) => !e),
          journal: !!Cn?.story?.done,
          quests: u.quests.entries.length,
          questWaiting: !!u.quests.next && u.quests.chapter.status === `ready`,
          hearth: activeBackend.name === `aws`,
          bag: ce ? `${ce.bag.length}/${ce.bagMax}` : null,
          homes: pt,
          onMenu: () => te(!0),
        }),
      (0, Q.jsxs)(`div`, {
        className: `hud ${gn ? `visible` : ``} ${E ? `chat-open` : ``}`,
        children: [
          (0, Q.jsxs)(`div`, {
            className: `hud-left`,
            children: [
              u && (0, Q.jsx)(Gde, { hud: u, name: n, school: r, hero: i }),
              u &&
                y.hostile &&
                Cn?.story?.done &&
                !u.dungeon &&
                !u.home &&
                (0, Q.jsx)(Vue, { pvp: u.pvp, onToggle: un }),
              rt &&
                nt &&
                Cn?.story?.done &&
                u &&
                (0, Q.jsxs)(Ade, {
                  children: [
                    Mn &&
                      (0, Q.jsx)(jde, {
                        party: Mn,
                        myId: t,
                        stats: Un,
                        live: u.partyLive,
                        here: qn,
                        phone: GG && window.innerHeight <= 560,
                        column: `${rc(nt.offers, Date.now(), oe.ignored, GG && window.innerHeight <= 560 ? 1 : 3, !0).shown.length}${ct ? `f` : ``}${u.pvp.outlaw ? `o` : ``}${u.pvp.wanted ? `w` : ``}`,
                        menuFor: Xe?.fixed ? Xe.key : null,
                        still: On,
                        followIn: Nn,
                        discordant: Pn,
                        onRow: Qn,
                        onFollow: (e, t) => void Bn(e.id, t),
                        onMore: () => {
                          (Ze(null), ot(!0));
                        },
                      }),
                    (0, Q.jsx)(Mde, {
                      offers: nt.offers,
                      ignored: oe.ignored,
                      phone: GG && window.innerHeight <= 560,
                      inParty: !!Mn,
                      lead: A,
                      padUp: !kn,
                      onAnswer: Ln,
                    }),
                  ],
                }),
              !Dn?.objective &&
                Cn?.story?.done &&
                u &&
                yQ(u.quests.entries.length, u.quests.next, u.quests.chapter) &&
                (0, Q.jsx)($le, {
                  hud: u.quests,
                  onTrack: (e) => on(e),
                  onOpen: () => sn(!0),
                }),
            ],
          }),
          u?.rite && !u.quests.boss && (0, Q.jsx)(oue, { rite: u.rite }),
          u?.rite?.cantor &&
            !u.quests.boss &&
            (0, Q.jsx)(sue, { cantor: u.rite.cantor }),
          u?.channel && (0, Q.jsx)(lue, { to: u.channel.to, k: u.channel.k }),
          u?.hearth?.k != null &&
            (0, Q.jsx)(uue, { k: u.hearth.k, onStop: dn }),
          u?.homeWalk &&
            (0, Q.jsx)(Eue, { name: u.homeWalk.name, k: u.homeWalk.k }),
          u?.home &&
            ft?.here &&
            (0, Q.jsx)(Due, {
              here: ft.here,
              mine: u.home.mine,
              building: vt,
              inHouse: u.home.inHouse,
              onPanel: () => gt((e) => !e),
              onBuild: () => yt((e) => !e),
              onLeave: () => l.current?.homeLeave(),
            }),
          pt && (0, Q.jsx)(Oue, { buffs: wn?.buffs ?? [] }),
          pt &&
            u?.shop &&
            !jt &&
            !GG &&
            (0, Q.jsxs)(`button`, {
              className: `hbtn market-btn`,
              onMouseDown: (e) => e.preventDefault(),
              onClick: () => At({ greeting: null }),
              children: [
                `Market `,
                ae.device === `pad`
                  ? (0, Q.jsx)(Y8, { b: `X` })
                  : (0, Q.jsx)(`kbd`, { children: Bi(oG(`market`)) }),
              ],
            }),
          u?.quests.boss
            ? (0, Q.jsx)(E7, { boss: u.quests.boss })
            : u?.target &&
              !u.dungeon?.boss &&
              (0, Q.jsx)(Kde, {
                target: u.target,
                myLevel: u.level,
                belowRite: !!u.rite || !!u.dungeon,
              }),
          u?.dungeon &&
            (0, Q.jsx)(Cue, {
              hud: u.dungeon,
              onPick: (e) => l.current?.dungeon?.pick(e),
              onLeave: () => {
                (He(null), l.current?.dungeon?.leave());
              },
            }),
          (0, Q.jsxs)(`div`, {
            className: `minimap-panel`,
            hidden: !!ft?.here,
            children: [
              (0, Q.jsx)(`canvas`, {
                ref: c,
                width: 150,
                height: 150,
                className: `minimap pixel`,
              }),
              Cn?.story?.done &&
                (0, Q.jsx)(`button`, {
                  className: `minimap-atlas`,
                  onClick: hn,
                  children: HG(`Atlas [V]`),
                }),
              (0, Q.jsxs)(`div`, {
                className: `mini-info`,
                children: [
                  u?.place
                    ? (0, Q.jsx)(`span`, {
                        style: { color: `#ffd98a` },
                        children: u.place,
                      })
                    : (0, Q.jsx)(`span`, {
                        style: { color: u ? Rr[u.region].tint : void 0 },
                        children: u ? Rr[u.region].name : ``,
                      }),
                  (0, Q.jsxs)(`span`, {
                    children: [
                      `☾ `,
                      u?.clock,
                      ` · `,
                      u?.online ?? 1,
                      ` online`,
                    ],
                  }),
                ],
              }),
            ],
          }),
          u &&
            (0, Q.jsx)(qde, {
              hud: u,
              school: r,
              onHearth: activeBackend.name === `aws` ? fn : void 0,
              onLoadout: (e) => y.setLoadout(e),
            }),
          u &&
            u.attrPoints > 0 &&
            !b &&
            (!Dn || Dn.skillsTaught) &&
            (0, Q.jsxs)(`button`, {
              className: `skill-point-btn`,
              onMouseDown: (e) => e.preventDefault(),
              onClick: () => {
                (C(void 0), x(!0));
              },
              children: [
                `✦ `,
                u.attrPoints,
                ` passive point`,
                u.attrPoints === 1 ? `` : `s`,
                ` `,
                (0, Q.jsx)(`small`, {
                  children:
                    ae.device === `pad`
                      ? (0, Q.jsx)(Y8, { b: `LEFT` })
                      : HG(`[K]`),
                }),
              ],
            }),
          Dn?.objective &&
            (0, Q.jsx)(Wde, {
              objective: Dn.objective,
              onSkip: () => {
                l.current?.story?.skipTutorial();
              },
            }),
          u && (0, Q.jsx)(sle, { items: j }),
          (0, Q.jsxs)(`div`, {
            className: `hud-dock-left`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `hud-rail`,
                children: [
                  ce &&
                    (0, Q.jsx)(Gle, {
                      count: ce.bag.length,
                      max: ce.bagMax,
                      onClick: () => de((e) => !e),
                    }),
                  u &&
                    Cn?.story?.done &&
                    (0, Q.jsx)(Qle, {
                      open: u.quests.entries.length,
                      waiting:
                        !!u.quests.next && u.quests.chapter.status === `ready`,
                      onClick: () => sn(),
                    }),
                ],
              }),
              (0, Q.jsx)(vue, {
                messages: se ?? [],
                myId: t,
                myName: n,
                channels: activeBackend.name === `aws`,
                parties: rt,
                inParty: !!Mn,
                unfolded: !GG || E,
                disabled:
                  _n ||
                  b ||
                  !!Dn?.dialogue ||
                  !!Cn?.story?.narration ||
                  O ||
                  ee,
                took: vn,
                onSend: Ut,
                whisper: et,
              }),
            ],
          }),
          (0, Q.jsx)(Xde, {
            onSettings: () => {
              (k((e) => !e), q.sfx(`click`, 0.6));
            },
            onExit: a,
            onMenu: () => {
              (te(!0), q.sfx(`click`, 0.6));
            },
            took: vn,
            waits: yn,
            onOpen: ie,
            homes: pt,
            onSkipTutorial: Dn?.objective
              ? () => l.current?.story?.skipTutorial()
              : void 0,
          }),
          (0, Q.jsx)(Yle, { toasts: be, onDone: zt }),
        ],
      }),
      ue &&
        ce &&
        u &&
        (0, Q.jsx)(Ble, {
          inv: ce,
          hud: u,
          school: r,
          name: n,
          hero: i,
          onClose: () => de(!1),
          bestBusy: me,
          run: ge,
          setRun: _e,
          actions: {
            equip: (e, t) => y.equip(e, t).then(() => q.sfx(`click`, 0.6), Bt),
            unequip: (e) => y.unequip(e).then(() => void 0, Bt),
            equipBest: (e, t) =>
              pe(() => {
                let n = e.length;
                return (
                  he({ done: 0, n }),
                  Dle(
                    e,
                    { equip: (e) => y.equip(e), unequip: (e) => y.unequip(e) },
                    (e) => {
                      (he({ done: e, n }), t(e));
                    },
                    (e) => activeBackend.userError(e) ?? `Something went wrong.`,
                  )
                    .then(
                      (e) => (
                        e.done && q.sfx(e.error ? `click` : `chime`, 0.7),
                        e.error &&
                          !fe.current &&
                          Rt({
                            text: `Equip best stopped after ${e.done} of ${n}: ${e.error}`,
                            color: `#ff7a8a`,
                          }),
                        e
                      ),
                    )
                    .finally(() => he(null))
                );
              }),
            salvage: (e) =>
              y
                .salvage(e)
                .then(
                  () =>
                    Rt({ text: `Salvaged into reagents.`, color: `#7ef9ff` }),
                  Bt,
                ),
            read: Vt,
            openKindling: (e) => {
              (de(!1), ye({ initial: e }));
            },
            openSalvage: () => {
              (de(!1), ye({ initial: null, mode: `salvage` }));
            },
            mendWithKit: (e) =>
              y
                .repair(e, !0)
                .then(
                  () =>
                    Rt({ text: `Mended with a repair kit.`, color: `#b8f08a` }),
                  Bt,
                ),
            loadQuiver: (e) => y.loadQuiver(e).then(() => void 0, Bt),
          },
        }),
      ve &&
        ce &&
        u &&
        (0, Q.jsx)(Wle, {
          inv: ce,
          hud: u,
          school: r,
          initial: ve.initial,
          initialMode: ve.mode,
          onClose: () => ye(null),
          actions: {
            kindle: (e, t) => y.kindle(e, t).catch((e) => (Bt(e), null)),
            cleanse: (e) =>
              y.cleanse(e).then(
                () => !0,
                (e) => (Bt(e), !1),
              ),
            salvage: (e) =>
              y
                .salvage(e)
                .then(
                  () =>
                    Rt({ text: `Salvaged into reagents.`, color: `#7ef9ff` }),
                  Bt,
                ),
            salvageMany: (e) =>
              y.salvageMany(e).then(
                (t) => (
                  Rt({
                    text: `Salvaged ${e.length} ${e.length === 1 ? `item` : `items`} into ${t ? Q5(t) : `reagents`}.`,
                    color: `#7ef9ff`,
                  }),
                  !0
                ),
                (e) => (Bt(e), !1),
              ),
          },
        }),
      Me &&
        u &&
        Cn &&
        (0, Q.jsx)(rue, {
          id: Me,
          doc: je?.find((e) => e.altarId === Me),
          attuned: Tn,
          level: u.level,
          pos: { x: Cn.me.x, y: Cn.me.y },
          onClose: () => Ne(null),
          onRoad: En,
          onBegin: () =>
            y.altarBegin(Me).then(() => {
              (Ne(null), q.sfx(`chime`, 0.8));
            }, Bt),
          onTouch: () => y.altarTouch(Me).then(() => Ne(null), Bt),
        }),
      Pe &&
        Cn &&
        (0, Q.jsx)(aue, {
          docs: je,
          attuned: Tn,
          dust: ce?.mats.dust ?? 0,
          from: Cn.nodeHere(),
          inPrologue: !Cn.story?.done,
          sinceCombat:
            (Date.now() - Math.max(wn?.lastHurtAt ?? 0, wn?.lastHitAt ?? 0)) /
            1e3,
          minimap: Cn.minimap,
          onClose: () => Fe(!1),
          onTravel: (e) => {
            if ((Fe(!1), Cn.hearth))
              return Rt({
                text: `You're singing Hearthsong.`,
                color: `#ff7a8a`,
              });
            Cn.startChannel(e);
          },
        }),
      Ie && (0, Q.jsx)(cue, { gift: Ie, onClose: () => Le(null), onRoad: En }),
      at &&
        rt &&
        nt &&
        (0, Q.jsx)(Fde, {
          party: nt.party,
          offers: nt.offers,
          closed: nt.closed,
          myId: t,
          stats: Un,
          live: u?.partyLive ?? Lde,
          place: qn,
          me: Fn(!1),
          near: () => l.current?.magesNear(lc, 10) ?? [],
          ignoredOf: (e) => Ks(oe.ignored, e),
          homeInvite: u?.home?.mine
            ? (e) =>
                void y.home.invite(e).then(
                  () =>
                    Rt({
                      text: `Invitation sent to ${e}.`,
                      color: `#b8f08a`,
                    }),
                  Bt,
                )
            : null,
          here: (e) =>
            !!l.current
              ?.magesNear(1 / 0, 1 / 0)
              .some((t) => Ws(t.name) === Ws(e)),
          onAnswer: Ln,
          onInvite: (e) =>
            y.party.invite({ name: e }).then(
              (e) => (
                Rt({
                  text: `Invitation sent to ${e.invited}.`,
                  color: `#b8f5bf`,
                }),
                !0
              ),
              (e) => (Bt(e), !1),
            ),
          onItem: (e, t) => $n(e, t),
          onPrefs: (e) =>
            void y.party?.prefs(e).then(
              () =>
                Rt({
                  text: e
                    ? `Invitations: No one. Every invitation and request is turned away.`
                    : `Invitations: Anyone.`,
                  color: `#b8f5bf`,
                }),
              Bt,
            ),
          onLeave: Hn,
          onClose: st,
        }),
      Xe &&
        (0, Q.jsx)(Ode, {
          target: Xe,
          anchor: Xe.fixed ? void 0 : $e,
          me: Fn(Ks(oe.ignored, Xe.name)),
          onPick: (e) => $n(e),
          onClose: Qe,
        }),
      Je &&
        u &&
        Ge?.some((e) => e.id === Je) &&
        (0, Q.jsx)(Hue, {
          doc: Ge.find((e) => e.id === Je),
          myId: t,
          level: u.level,
          school: r,
          inv: ce,
          onTake: (e) => pn(Je, { itemId: e }),
          onTakeCrowns: () => pn(Je, { crowns: !0 }),
          onTakeAll: () => pn(Je),
          onClose: () => Ye(null),
        }),
      ze &&
        u &&
        (0, Q.jsx)(xue, {
          id: ze,
          delves: Re,
          name: n,
          level: u.level,
          partyDown: Yn?.join ?? null,
          partyAway: Yn?.away ?? null,
          onClose: () => Be(null),
          onEnter: (e) =>
            y.dungeon.enter(ze, e).then(() => {
              (Be(null), He(null), q.sfx(`chime`, 0.8));
            }, Bt),
        }),
      Ve &&
        (0, Q.jsx)(wue, {
          s: Ve,
          onStay: () => He(null),
          onLeave: () => {
            (He(null), l.current?.dungeon?.leave());
          },
        }),
      ht &&
        ft &&
        u &&
        (0, Q.jsx)(kue, {
          here: u.home ? ft.here : null,
          myId: t,
          invites: ft.invites,
          mats: ce?.mats,
          canGo: u.dead
            ? `You have fallen.`
            : u.dungeon
              ? `Leave the dungeon first.`
              : u.homeWalk
                ? `On your way…`
                : u.hearth?.k == null
                  ? u.home?.mine
                    ? `You're home.`
                    : null
                  : `You're singing Hearthsong.`,
          onGo: () => {
            (gt(!1), l.current?.startHomeWalk(null, null));
          },
          onVisit: (e) => {
            (gt(!1), l.current?.startHomeWalk(e.owner, e.from));
          },
          onLeave: () => {
            (gt(!1), l.current?.homeLeave());
          },
          onInvite: (e) =>
            y.home.invite(e).then(
              () => (
                Rt({ text: `Invitation sent to ${e}.`, color: `#b8f08a` }),
                !0
              ),
              (e) => (Bt(e), !1),
            ),
          onKick: (e) => void y.home.kick(e).catch(Bt),
          onDeed: () =>
            y.home.deed().then(() => {
              (Rt({
                text: `New deed: more ground to build on.`,
                color: `#ffd166`,
              }),
                q.sfx(`levelup`, 0.6));
            }, Bt),
          onBuild: () => {
            (gt(!1), yt(!0));
          },
          onClose: () => gt(!1),
        }),
      vt &&
        u?.home?.mine &&
        ft?.here &&
        u.home.inHouse &&
        (0, Q.jsx)(jue, {
          here: ft.here,
          mats: ce?.mats,
          tool: u.home.tool,
          onTool: (e) => {
            let t = l.current;
            t && (t.home.cancelStroke(), (t.home.tool = e));
          },
          onClose: () => yt(!1),
        }),
      vt &&
        u?.home?.mine &&
        ft?.here &&
        !u.home.inHouse &&
        (0, Q.jsx)(Aue, {
          here: ft.here,
          mats: ce?.mats,
          tool: u.home.build,
          onTool: (e) => {
            l.current && (l.current.home.build = e);
          },
          onClose: () => yt(!1),
        }),
      bt &&
        ft?.here &&
        u &&
        (0, Q.jsx)(Nue, {
          here: ft.here,
          store: bt,
          inv: ce,
          provisions: ft.provisions,
          level: u.level,
          school: r,
          onPut: (e) =>
            void y.home.put(bt, e).then(() => q.sfx(`click`, 0.5), Bt),
          onTake: (e, t) =>
            void y.home.take(bt, e, t).then(() => q.sfx(`click`, 0.5), Bt),
          onClose: () => xt(null),
        }),
      Ct &&
        ft &&
        (0, Q.jsx)(Pue, {
          station: Ct.station,
          name: Ct.name,
          provisions: ft.provisions,
          onCraft: (e, t) =>
            y.home.craft(Ct.id, e, t).then(
              (e) => (
                e?.discovered
                  ? (Rt({
                      text: `New recipe: ${_t[e.good]?.name ?? e.good}!`,
                      color: `#ffd166`,
                    }),
                    q.sfx(`levelup`, 0.6))
                  : q.sfx(e?.recipe ? `chime` : `click`, 0.5),
                e
              ),
              (e) => (Bt(e), null),
            ),
          onClose: () => wt(null),
        }),
      Dt &&
        ft &&
        (0, Q.jsx)(Fue, {
          provisions: ft.provisions,
          onPick: (e) => {
            let t = Dt;
            (Ot(null),
              l.current && (l.current.home.hand = e),
              y.home.plant(t, e).then(() => q.sfx(`click`, 0.5), Bt));
          },
          onClose: () => Ot(null),
        }),
      Tt &&
        ft?.here &&
        (() => {
          let e = ft.here.home.structures.find((e) => e.id === Tt),
            n = l.current;
          return !e?.bed || !n
            ? null
            : (0, Q.jsx)(Lue, {
                s: e,
                now: () => n.home.now(),
                mine: ft.here.owner === t,
                dust: ce?.mats.dust ?? 0,
                onWater: () =>
                  void y.home.water(Tt).then(() => q.sfx(`click`, 0.4), Bt),
                onDust: () =>
                  void y.home.dust(Tt).then(() => q.sfx(`chime`, 0.5), Bt),
                onClose: () => Et(null),
              });
        })(),
      jt &&
        u?.shop &&
        (0, Q.jsx)(ode, {
          shop: u.shop.name,
          trade: u.shop.trade,
          keeper: u.shop.keeper,
          greeting: kt?.greeting ?? null,
          level: u.level,
          school: r,
          spells: u.spells,
          inv: ce,
          provisions: ft?.provisions ?? null,
          onBuy: (e, t) =>
            y.shopBuy(e, t).then(
              (e) => {
                let t = e ? c9(e.offer) : null,
                  n = e
                    ? t?.kind === `chip`
                      ? `Bought ${e.n} Ward-stone Chip${e.n === 1 ? `` : `s`}: you hold ${t.held + e.n}.`
                      : t?.kind === `kit`
                        ? `Bought ${e.n} repair kit${e.n === 1 ? `` : `s`}: you hold ${t.held + e.n}.`
                        : t?.kind === `arrows`
                          ? `Bought ${e.n * 20} ${Pa[t.arrow].name}: you hold ${t.held + e.n * 20}.`
                          : t?.kind === `book`
                            ? `Bought Spellbook: ${Se(t.spell)?.name ?? t.spell}. Read it before you leave the Ward: an unread book falls with your satchel.`
                            : `Your satchel holds ${e.bagMax} now.`
                    : `Bought.`;
                return (
                  Rt({ text: n, color: `#b8f08a` }),
                  q.sfx(`chime`, 0.6),
                  null
                );
              },
              (e) => {
                let t = activeBackend.userError(e) ?? `Something went wrong.`,
                  n = e instanceof ZoneError && e.unanswered;
                return (
                  Rt({
                    text: n
                      ? `${t.replace(/\s*Try again in a moment\.$/, ``)} Look at your pouch before buying again.`
                      : t,
                    color: `#ff7a8a`,
                  }),
                  e instanceof ZoneError && e.refused ? t : null
                );
              },
            ),
          onRepair: (e) =>
            y.repair(e).then(() => {
              (Rt({ text: `Mended.`, color: `#b8f08a` }), q.sfx(`chime`, 0.6));
            }, Bt),
          onSell: (e, t) =>
            y.home.sell(e, t).then((n) => {
              (n &&
                Rt({
                  text: `Sold ${t} ${_t[e]?.name ?? e} for ${n.crowns} Crowns.`,
                  color: `#ffd166`,
                }),
                q.sfx(`click`, 0.6));
            }, Bt),
          onBuySeeds: (e, t) =>
            y.home.buySeeds(e, t).then(() => {
              (Rt({
                text: `Bought ${t} ${dt[e].name} seed${t === 1 ? `` : `s`}.`,
                color: `#b8f08a`,
              }),
                q.sfx(`click`, 0.6));
            }, Bt),
          onRead: Vt,
          onClose: () => At(null),
        }),
      Nt &&
        ft &&
        (0, Q.jsx)(zue, {
          provisions: ft.provisions,
          buffs: wn?.buffs ?? [],
          potionAt: wn?.potionAt ?? 0,
          onUse: (e) =>
            void y.home.consume(e).then(() => {
              let t = _t[e];
              (Rt({
                text: `${t?.use?.slot === `meal` ? `You eat` : `You drink`} the ${t?.name ?? e}.`,
                color: t?.color ?? `#b8f08a`,
              }),
                q.sfx(`chime`, 0.4));
            }, Bt),
          onClose: () => Pt(!1),
        }),
      ke &&
        Cn &&
        u &&
        (0, Q.jsx)(nle, {
          minimap: Cn.minimap,
          here: Cn.outdoorPos(),
          indoors: !!Cn.room || !!Cn.dungeon,
          attuned: Tn,
          marks: [...Cn.quests.minimapMarks(), ...Cn.graveMarks()],
          canTravel: !!Cn.nodeHere(),
          onRoad: () => {
            (Ae(!1), En());
          },
          onClose: () => Ae(!1),
        }),
      De &&
        Ee &&
        (0, Q.jsx)(eue, {
          rows: Ee,
          tracked: Ue,
          chapter: u?.quests.chapter ?? hQ(Ee, 1),
          next: u?.quests.next ?? null,
          fmt: an,
          onTrack: (e) => on(e),
          onAbandon: (e) => {
            (y.questAbandon(e).catch(Bt), Ue === e && on(null));
          },
          onClose: () => Oe(!1),
        }),
      Dn?.dialogue &&
        (0, Q.jsx)(Ude, {
          dialogue: Dn.dialogue,
          school: r,
          hero: i,
          onAdvance: () => l.current?.story?.advance(),
          onPick: (e) => l.current?.story?.pick(e),
        }),
      (0, Q.jsx)(Zde, {
        shown: !!u?.skip && ae.device === `touch`,
        onSkip: () => l.current?.skipScene(),
      }),
      b &&
        u &&
        (0, Q.jsx)(
          Mce,
          {
            school: r,
            hud: u,
            tab: S,
            onClose: () => {
              (x(!1), C(void 0));
            },
            onAllocate: async (e) => {
              await y.allocatePassive(e);
            },
            onRefund: async (e) => {
              await y.refundPassive(e);
            },
            onReset: async () => {
              await y.resetPassives();
            },
            onLoadout: async (e) => {
              await y.setLoadout(e);
            },
          },
          w,
        ),
      ar && tr && (0, Q.jsx)(cle, { tabs: ir, current: tr }),
      u?.dead &&
        !u.cinematic &&
        !u.dungeon?.hosted &&
        (0, Q.jsxs)(`div`, {
          className: `death-screen fade-in-slow`,
          children: [
            u.pvp.slainBy
              ? (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    (0, Q.jsxs)(`h1`, {
                      className: `slain-by`,
                      children: [`SLAIN BY `, u.pvp.slainBy.toUpperCase()],
                    }),
                    (0, Q.jsxs)(`p`, {
                      className: `lost`,
                      children: [
                        `Everything you carried and wore, and every Crown, lies in your leavings where you fell, save what no hand can take. `,
                        u.pvp.slainBy,
                        ` may claim it first; after a minute, anyone may.`,
                      ],
                    }),
                    u.pvp.writLost &&
                      (0, Q.jsxs)(`p`, {
                        className: `lost`,
                        children: [
                          `The Circle's writ on your head went to `,
                          u.pvp.slainBy,
                          `.`,
                        ],
                      }),
                  ],
                })
              : (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    (0, Q.jsx)(`h1`, { children: `YOU HAVE FALLEN` }),
                    Cn &&
                      Cn.graveMarks().length > 0 &&
                      (0, Q.jsxs)(`p`, {
                        className: `lost`,
                        children: [
                          `Your satchel and every Crown lie in your grave where you fell, and what you wear took a beating. The grave is yours alone for `,
                          Math.round(Ia.claimSecs / 60),
                          ` minutes, then anyone's, and it crumbles at `,
                          Math.round(Ia.fadeSecs / 60),
                          `. Its stone is on your map.`,
                        ],
                      }),
                  ],
                }),
            (0, Q.jsxs)(`p`, {
              children: [
                `The Crystal remembers you.`,
                ` `,
                u.pvp.outlaw > 0
                  ? `But the Ward is closed to the Discordant: the Chorus will set you down outside it.`
                  : `The Chorus will set you down at the nearest altar that can take you.`,
              ],
            }),
            Cn
              ? (0, Q.jsx)(fue, {
                  docs: je,
                  attuned: Tn,
                  pos: { x: Cn.me.x, y: Cn.me.y },
                  outlaw: u.pvp.outlaw > 0,
                  onRise: (e) => void y.respawn(e),
                })
              : (0, Q.jsx)(`button`, {
                  className: `px-btn primary`,
                  onClick: () => void y.respawn(),
                  children: `Return to the Crystal`,
                }),
          ],
        }),
      oe.showFps && (0, Q.jsx)(lle, { game: l }),
      ee &&
        (0, Q.jsx)(tle, {
          homes: pt,
          onAtlas: Cn?.story?.done
            ? () => {
                (te(!1), hn());
              }
            : void 0,
          onClose: () => te(!1),
          onParty:
            rt && Cn?.story?.done
              ? () => {
                  (te(!1), ot(!0));
                }
              : void 0,
          onSettings: () => {
            (te(!1), (ne.current = !0), k(!0));
          },
          onExit: a,
          onQuit: o ?? a ?? (() => location.reload()),
        }),
      An && (0, Q.jsx)(pce, {}),
      O &&
        (0, Q.jsx)(Xce, {
          gfx: () => l.current?.gfxStatus() ?? null,
          onClose: () => {
            (k(!1), ne.current && ((ne.current = !1), te(!0)));
          },
          onSpellbook: Cn?.story?.locked
            ? void 0
            : () => {
                ((ne.current = !1), k(!1), C(`spells`), T((e) => e + 1), x(!0));
              },
        }),
    ],
  });
}
