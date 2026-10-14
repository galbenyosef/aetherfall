// index-BTsv3a2s 181 — aws
// Lines 105678-105799 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var awsUnsupported = () =>
    Promise.reject(Error(`Homesteads are on the AWS realm (?backend=aws).`)),
  awsHomeStub = {
    go: awsUnsupported,
    leave: awsUnsupported,
    invite: awsUnsupported,
    visit: awsUnsupported,
    kick: awsUnsupported,
    build: awsUnsupported,
    unbuild: awsUnsupported,
    deed: awsUnsupported,
    drawWater: awsUnsupported,
    plant: awsUnsupported,
    water: awsUnsupported,
    dust: awsUnsupported,
    harvest: awsUnsupported,
    put: awsUnsupported,
    take: awsUnsupported,
    craft: awsUnsupported,
    consume: awsUnsupported,
    sell: awsUnsupported,
    buySeeds: awsUnsupported,
    houseDoor: awsUnsupported,
    paint: awsUnsupported,
    furnish: awsUnsupported,
    unfurnish: awsUnsupported,
    rest: awsUnsupported,
  },
  awsMagesUnsupported = () =>
    Promise.reject(
      new iW(`Several mages per account are on the AWS realm (?backend=aws).`),
    ),
  awsMagesStub = { play: awsMagesUnsupported, forge: awsMagesUnsupported, remove: awsMagesUnsupported, refresh: awsMagesUnsupported },
  awsChatUnsupported = () =>
    Promise.reject(
      new iW(`Nearby chat and whispers are on the AWS realm (?backend=aws).`),
    ),
  awsSalvageUnsupported = () =>
    Promise.reject(
      new iW(`Salvaging several at once is on the AWS realm (?backend=aws).`),
    ),
  awsShopsUnsupported = () =>
    Promise.reject(new iW(`Shops are on the AWS realm (?backend=aws).`)),
  awsHearthUnsupported = () =>
    Promise.reject(new iW(`Hearthsong is on the AWS realm (?backend=aws).`)),
  convexBackend = {
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
    useMe: (e) => yW(convexApi.players.me, { token: e }),
    useRoster: () => null,
    useOnlinePlayers: () => yW(convexApi.players.online),
    useMonsters: (e) => yW(convexApi.combat.monsters, e ? {} : `skip`),
    useRecentFx: (e) => yW(convexApi.combat.recentFx, e ? {} : `skip`),
    useChat: () => yW(convexApi.chat.recent),
    useInventory: useConvexInventory,
    useGround: (e) => yW(convexApi.items.ground, { token: e }),
    useQuests: (e) => yW(convexApi.quests.mine, { token: e }),
    useAltars: () => yW(convexApi.altars.list),
    useDelves: (e) => yW(convexApi.dungeons.state, { token: e }),
    useHome: () => null,
    useActions: useConvexActions,
    userError: (e) => (e instanceof iW ? String(e.data) : null),
  },
  backendParam =
    (typeof location < `u` &&
      new URLSearchParams(location.search).get(`backend`)) ||
    `aws`,
  activeBackend = backendParam === `aws` || (backendParam !== `convex` && !convexBackend.Root) ? awsBackend : convexBackend,
  ClassicCamera = class {
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
  RENDER_SCALE = { cos: 0.7, aoe: 0.7, decal: 0.6, fx: 0.7 };
function setRenderScaleMode(e) {
  e === `hd2d`
    ? ((RENDER_SCALE.cos = 1), (RENDER_SCALE.aoe = 1 / 1.15), (RENDER_SCALE.decal = 1), (RENDER_SCALE.fx = 1))
    : ((RENDER_SCALE.cos = 0.7), (RENDER_SCALE.aoe = 0.7), (RENDER_SCALE.decal = 0.6), (RENDER_SCALE.fx = 0.7));
}
