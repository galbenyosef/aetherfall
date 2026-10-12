// assets__index-BTsv3a2s 181 — children
// Lines 105678-105799 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var PW = () =>
    Promise.reject(Error(`Homesteads are on the AWS realm (?backend=aws).`)),
  FW = {
    go: PW,
    leave: PW,
    invite: PW,
    visit: PW,
    kick: PW,
    build: PW,
    unbuild: PW,
    deed: PW,
    drawWater: PW,
    plant: PW,
    water: PW,
    dust: PW,
    harvest: PW,
    put: PW,
    take: PW,
    craft: PW,
    consume: PW,
    sell: PW,
    buySeeds: PW,
    houseDoor: PW,
    paint: PW,
    furnish: PW,
    unfurnish: PW,
    rest: PW,
  },
  IW = () =>
    Promise.reject(
      new iW(`Several mages per account are on the AWS realm (?backend=aws).`),
    ),
  LW = { play: IW, forge: IW, remove: IW, refresh: IW },
  RW = () =>
    Promise.reject(
      new iW(`Nearby chat and whispers are on the AWS realm (?backend=aws).`),
    ),
  zW = () =>
    Promise.reject(
      new iW(`Salvaging several at once is on the AWS realm (?backend=aws).`),
    ),
  BW = () =>
    Promise.reject(new iW(`Shops are on the AWS realm (?backend=aws).`)),
  VW = () =>
    Promise.reject(new iW(`Hearthsong is on the AWS realm (?backend=aws).`)),
  HW = {
    name: `convex`,
    Root: null,
    setup: (0, Q.jsxs)(`div`, {
      className: `setup`,
      children: [
        (0, Q.jsx)(`h1`, { children: `AETHERFALL` }),
        (0, Q.jsx)(`p`, { children: `No Convex backend configured.` }),
        (0, Q.jsxs)(`p`, {
          children: [
            `Run `,
            (0, Q.jsx)(`code`, { children: `npx convex dev` }),
            ` in the project folder. It creates `,
            (0, Q.jsx)(`code`, { children: `.env.local` }),
            ` with`,
            ` `,
            (0, Q.jsx)(`code`, { children: `VITE_CONVEX_URL` }),
            `, then restart `,
            (0, Q.jsx)(`code`, { children: `npm run dev` }),
            `.`,
          ],
        }),
        (0, Q.jsxs)(`p`, {
          children: [
            `Or play on the AWS backend (the local stack, `,
            (0, Q.jsx)(`code`, { children: `docker compose up` }),
            `): open the page with`,
            ` `,
            (0, Q.jsx)(`code`, { children: `?backend=aws` }),
            `.`,
          ],
        }),
      ],
    }),
    useMe: (e) => yW(jW.players.me, { token: e }),
    useRoster: () => null,
    useOnlinePlayers: () => yW(jW.players.online),
    useMonsters: (e) => yW(jW.combat.monsters, e ? {} : `skip`),
    useRecentFx: (e) => yW(jW.combat.recentFx, e ? {} : `skip`),
    useChat: () => yW(jW.chat.recent),
    useInventory: MW,
    useGround: (e) => yW(jW.items.ground, { token: e }),
    useQuests: (e) => yW(jW.quests.mine, { token: e }),
    useAltars: () => yW(jW.altars.list),
    useDelves: (e) => yW(jW.dungeons.state, { token: e }),
    useHome: () => null,
    useActions: NW,
    userError: (e) => (e instanceof iW ? String(e.data) : null),
  },
  UW =
    (typeof location < `u` &&
      new URLSearchParams(location.search).get(`backend`)) ||
    `aws`,
  WW = UW === `aws` || (UW !== `convex` && !HW.Root) ? SU : HW,
  GW = class {
    camX;
    camY;
    kind = `classic`;
    constructor(e, t) {
      ((this.camX = e), (this.camY = t));
    }
    toScreen(e, t, n = 0) {
      return { sx: e - this.camX, sy: t - this.camY - n };
    }
    toGround(e, t) {
      return { x: e + this.camX, y: t + this.camY };
    }
    toward(e, t, n = 0) {
      return this.toScreen(e, t, n);
    }
  },
  KW = { cos: 0.7, aoe: 0.7, decal: 0.6, fx: 0.7 };
function qW(e) {
  e === `hd2d`
    ? ((KW.cos = 1), (KW.aoe = 1 / 1.15), (KW.decal = 1), (KW.fx = 1))
    : ((KW.cos = 0.7), (KW.aoe = 0.7), (KW.decal = 0.6), (KW.fx = 0.7));
}
