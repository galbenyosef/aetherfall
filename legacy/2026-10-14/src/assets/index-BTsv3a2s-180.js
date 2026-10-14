// index-BTsv3a2s 180 — token
// Lines 105360-105677 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var CW = Object.defineProperty,
  wW = (e, t, n) =>
    t in e
      ? CW(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  TW = (e, t, n) => wW(e, typeof t == `symbol` ? t : t + ``, n),
  EW = class {
    constructor(e) {
      (TW(this, `createWatch`),
        TW(this, `queries`),
        TW(this, `listeners`),
        (this.createWatch = e),
        (this.queries = {}),
        (this.listeners = new Set()));
    }
    setQueries(e) {
      for (let t of Object.keys(e)) {
        let { query: n, args: r, paginationOptions: i } = e[t];
        if ((uW(n), this.queries[t] === void 0))
          this.addQuery(t, n, r, i ? { paginationOptions: i } : {});
        else {
          let e = this.queries[t];
          (uW(n) !== uW(e.query) ||
            JSON.stringify(ZU(r)) !== JSON.stringify(ZU(e.args)) ||
            JSON.stringify(i) !== JSON.stringify(e.paginationOptions)) &&
            (this.removeQuery(t),
            this.addQuery(t, n, r, i ? { paginationOptions: i } : {}));
        }
      }
      for (let t of Object.keys(this.queries))
        e[t] === void 0 && this.removeQuery(t);
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        () => {
          this.listeners.delete(e);
        }
      );
    }
    getLocalResults(e) {
      let t = {};
      for (let n of Object.keys(e)) {
        let { query: r, args: i } = e[n],
          a = e[n].paginationOptions;
        uW(r);
        let o = this.createWatch(r, i, a ? { paginationOptions: a } : {}),
          s;
        try {
          s = o.localQueryResult();
        } catch (e) {
          if (e instanceof Error) s = e;
          else throw e;
        }
        t[n] = s;
      }
      return t;
    }
    setCreateWatch(e) {
      this.createWatch = e;
      for (let e of Object.keys(this.queries)) {
        let {
            query: t,
            args: n,
            watch: r,
            paginationOptions: i,
          } = this.queries[e],
          a = `journal` in r ? r.journal() : void 0;
        (this.removeQuery(e),
          this.addQuery(e, t, n, {
            ...(a ? { journal: a } : []),
            ...(i ? { paginationOptions: i } : {}),
          }));
      }
    }
    destroy() {
      for (let e of Object.keys(this.queries)) this.removeQuery(e);
      this.listeners = new Set();
    }
    addQuery(e, t, n, { paginationOptions: r, journal: i }) {
      if (this.queries[e] !== void 0)
        throw Error(
          `Tried to add a new query with identifier ${e} when it already exists.`,
        );
      let a = this.createWatch(t, n, {
          ...(i ? { journal: i } : []),
          ...(r ? { paginationOptions: r } : {}),
        }),
        o = a.onUpdate(() => this.notifyListeners());
      this.queries[e] = {
        query: t,
        args: n,
        watch: a,
        unsubscribe: o,
        ...(r ? { paginationOptions: r } : {}),
      };
    }
    removeQuery(e) {
      let t = this.queries[e];
      if (t === void 0) throw Error(`No query found with identifier ${e}.`);
      (t.unsubscribe(), delete this.queries[e]);
    }
    notifyListeners() {
      for (let e of this.listeners) e();
    }
  };
function DW(e) {
  let t = vW();
  if (t === void 0)
    throw Error(
      "Could not find Convex client! `useQuery` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app",
    );
  return OW(
    e,
    (0, v.useMemo)(
      () =>
        (e, n, { journal: r, paginationOptions: i }) =>
          i
            ? t.watchPaginatedQuery(e, n, i)
            : t.watchQuery(e, n, r ? { journal: r } : {}),
      [t],
    ),
  );
}
function OW(e, t) {
  let [n] = (0, v.useState)(() => new EW(t));
  return (
    n.createWatch !== t && n.setCreateWatch(t),
    (0, v.useEffect)(() => () => n.destroy(), [n]),
    mW(
      (0, v.useMemo)(
        () => ({
          getCurrentValue: () => n.getLocalResults(e),
          subscribe: (t) => (n.setQueries(e), n.subscribe(t)),
        }),
        [n, e],
      ),
    )
  );
}
function kW(e, t) {
  return new Proxy(
    {},
    {
      get(n, r) {
        if (typeof r == `string`) return kW(e, [...t, r]);
        if (r === oW) {
          if (t.length < 1) {
            let n = [e, ...t].join(`.`);
            throw Error(
              `API path is expected to be of the form \`${e}.childComponent.functionName\`. Found: \`${n}\``,
            );
          }
          return `_reference/childComponent/` + t.join(`/`);
        }
      },
    },
  );
}
var AW = () => kW(`components`, []),
  convexApi = pW;
AW();
function useConvexInventory(e) {
  let t = yW(convexApi.items.mine, { token: e });
  return (0, v.useMemo)(() => t && { ...t, satchel: 0 }, [t]);
}
function useConvexActions(e) {
  let t = bW(convexApi.players.join),
    n = bW(convexApi.players.leave),
    r = bW(convexApi.players.move),
    i = bW(convexApi.combat.cast),
    a = bW(convexApi.combat.hitMonster),
    o = bW(convexApi.combat.struck),
    s = bW(convexApi.players.respawn),
    c = bW(convexApi.chat.send),
    l = xW(convexApi.zones.enter),
    u = bW(convexApi.skills.allocate),
    d = bW(convexApi.skills.refund),
    f = bW(convexApi.skills.reset),
    p = bW(convexApi.skills.setLoadout),
    m = bW(convexApi.items.read),
    h = bW(convexApi.story.advance),
    g = bW(convexApi.story.complete),
    _ = bW(convexApi.items.equip),
    y = bW(convexApi.items.unequip),
    b = bW(convexApi.items.pickup),
    x = bW(convexApi.items.salvage),
    S = bW(convexApi.items.kindle),
    C = bW(convexApi.items.cleanse),
    w = bW(convexApi.quests.accept),
    T = bW(convexApi.quests.progress),
    E = bW(convexApi.quests.choose),
    D = bW(convexApi.quests.abandon),
    O = bW(convexApi.quests.phase),
    k = bW(convexApi.quests.bossDone),
    ee = bW(convexApi.quests.storyHurt),
    te = bW(convexApi.altars.begin),
    ne = bW(convexApi.altars.touch),
    re = bW(convexApi.altars.travel),
    ie = bW(convexApi.dungeons.enter),
    ae = bW(convexApi.dungeons.leave),
    oe = bW(convexApi.dungeons.hurt),
    se = bW(convexApi.dungeons.heal),
    ce = bW(convexApi.dungeons.kill),
    le = bW(convexApi.dungeons.boss),
    ue = bW(convexApi.dungeons.open),
    de = bW(convexApi.dungeons.descend),
    fe = bW(convexApi.dungeons.unmade),
    pe = bW(convexApi.dungeons.pick),
    me = bW(convexApi.dungeons.surgeKill);
  return (0, v.useMemo)(
    () => ({
      join: (e, n, r) => t({ token: e, name: n, school: r }),
      leave: () => void n({ token: e }).catch(() => {}),
      move: (t, n, i, a) => r({ token: e, x: t, y: n, dir: i, moving: a }),
      cast: (t, n, r, a, o, s) =>
        i({ token: e, spell: t, x: n, y: r, tx: a, ty: o, points: s }),
      hitMonster: (t, n) => a({ token: e, monsterId: t, spell: n }),
      struck: (t, n) => o({ token: e, fxId: t, n }),
      respawn: (t) => s({ token: e, at: t }),
      say: (t) => c({ token: e, text: t }),
      sayNear: awsChatUnsupported,
      whisper: awsChatUnsupported,
      enterZone: () => l({ token: e }),
      allocatePassive: (t) => u({ token: e, node: t }),
      refundPassive: (t) => d({ token: e, node: t }),
      resetPassives: () => f({ token: e }),
      setLoadout: (t) => p({ token: e, slots: t }),
      storyAdvance: (t) => h({ token: e, step: t }),
      storyComplete: () => g({ token: e }),
      equip: (t) => _({ token: e, itemId: t }),
      unequip: (t) => y({ token: e, slot: t }),
      pickup: (t) => b({ token: e, itemId: t }),
      salvage: (t) => x({ token: e, itemId: t }),
      salvageMany: awsSalvageUnsupported,
      readSpellbook: (t) => m({ token: e, itemId: t }),
      kindle: (t, n) => S({ token: e, itemId: t, warded: n }),
      cleanse: (t) => C({ token: e, itemId: t }),
      repair: awsShopsUnsupported,
      loadQuiver: awsShopsUnsupported,
      shopBuy: awsShopsUnsupported,
      questAccept: (t) => w({ token: e, questId: t }),
      questProgress: (t, n, r) =>
        T({ token: e, questId: t, step: n, index: r }),
      questChoose: (t, n, r) => E({ token: e, questId: t, step: n, option: r }),
      questAbandon: (t) => D({ token: e, questId: t }),
      questPhase: (t) => O({ token: e, on: t }),
      questBoss: (t) => k({ token: e, questId: t }),
      storyHurt: (t) => ee({ token: e, amount: t }),
      altarBegin: (t) => te({ token: e, altarId: t }),
      altarTouch: (t) => ne({ token: e, altarId: t }),
      travel: (t) => re({ token: e, to: t }),
      hearth: awsHearthUnsupported,
      door: async () => null,
      dungeon: {
        enter: (t, n) => ie({ token: e, dungeon: t, diff: n }),
        leave: () => ae({ token: e }),
        hurt: (t, n) => oe({ token: e, amount: t, lethal: n }),
        heal: (t) => se({ token: e, amount: t }),
        kill: (t, n) => ce({ token: e, floor: t, index: n }),
        boss: (t, n) => le({ token: e, floor: t, kind: n }),
        open: (t, n, r) => ue({ token: e, floor: t, what: n, where: r }),
        descend: () => de({ token: e }),
        unmade: () => fe({ token: e }),
        pick: (t) => pe({ token: e, echo: t }),
        surgeKill: (t, n, r) => me({ token: e, floor: t, surge: n, slot: r }),
      },
      home: awsHomeStub,
      mages: awsMagesStub,
    }),
    [
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      y,
      b,
      x,
      S,
      C,
      w,
      T,
      E,
      D,
      O,
      k,
      ee,
      te,
      ne,
      re,
      ie,
      ae,
      oe,
      se,
      ce,
      le,
      ue,
      de,
      fe,
      pe,
      me,
    ],
  );
}
