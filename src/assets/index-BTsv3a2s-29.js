// index-BTsv3a2s 29 — the
// Lines 26220-26561 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Jl(e) {
  let t = ql(e),
    n = [],
    r = (e.x * 7 + e.y * 13) % 360;
  for (let i = 0; i < t; i++) {
    let a = ((r + (360 / t) * i) * Math.PI) / 180,
      o = !1;
    for (let t = 8; t >= 5 && !o; t--)
      for (let r = 0; r <= 30 && !o; r += 10)
        for (let i of [1, -1]) {
          let s = a + (i * r * Math.PI) / 180,
            c = Math.round(e.x + Math.cos(s) * t),
            l = Math.round(e.y + Math.sin(s) * t * 0.8);
          if (ei(c, l) && !n.some((e) => Math.hypot(e.x - c, e.y - l) < 3)) {
            (n.push({ x: c + 0.5, y: l + 0.5 }), (o = !0));
            break;
          }
        }
  }
  return n;
}
function Yl(e, t = 0) {
  return {
    id: e,
    state: `quiet`,
    since: t,
    readyAt: t,
    resonance: Vl.max,
    wave: 0,
    waveEndsAt: 0,
    players: 0,
    night: !1,
  };
}
function Xl(e, t, n) {
  let r = Il[e.id];
  return n < r.level - 4
    ? {
        ok: !1,
        reason: `The shard doesn't answer you yet (level ${r.level - 4}).`,
      }
    : e.state === `rite` || e.state === `reclaim`
      ? { ok: !1, reason: `A rite is already open. Help hold it.` }
      : e.state === `singing`
        ? { ok: !1, reason: `The altar is still singing.` }
        : t < e.readyAt
          ? { ok: !1, reason: `The shard is resting.` }
          : e.state === `hollowed`
            ? t - e.since < Bl.hollowSettleSeconds * 1e3
              ? {
                  ok: !1,
                  reason: `The blight is still settling. It can't be reclaimed yet.`,
                }
              : { ok: !0, reclaim: !0 }
            : { ok: !0, reclaim: !1 };
}
var Zl = 1.25,
  Ql = 1.5;
function $l(e, t, n) {
  let r = 5 + e.level * 0.5,
    i = Hl[t].dust * (n.night ? Zl : 1) * (n.reclaim ? Ql : 1);
  return Math.round(r * i) + (n.firstAttune ? 15 : 0);
}
function eu(e, t) {
  return Wl(e.level, `normal`).xp * 4 * (t ? 2 : 1);
}
var tu = {
  channelSeconds: 3,
  nodeRange: 3,
  combatSeconds: 6,
  arrivalShimmerSeconds: 2,
  dustPerLeg: 80,
  hearthChannelSeconds: 10,
  hearthCooldownSeconds: 1200,
};
function nu(e, t) {
  let n = zl(e),
    r = zl(t);
  return Math.hypot(n.x - r.x, n.y - r.y);
}
function ru(e, t, n) {
  return t === Rl.id || n === `singing`
    ? 0
    : 1 + Math.ceil(nu(e, t) / tu.dustPerLeg);
}
function iu(e) {
  if (e.inPrologue) return `The road opens after the Night of Keys.`;
  if (e.indoors) return `Step outside first.`;
  if (!e.from) return `Stand at an altar or the Aether Crystal.`;
  if (e.from === e.to) return `You're already here.`;
  if (e.sinceCombat < tu.combatSeconds)
    return `The Chorus can't hear you over the fighting.`;
  if (e.to !== Rl.id && !e.attuned.includes(e.to))
    return `You aren't attuned to that altar.`;
  if (e.toState === `hollowed` || e.toState === `reclaim`)
    return `That altar has been Hollowed. The road ends in the dark.`;
  let t = ru(e.from, e.to, e.toState);
  return e.dust < t ? `You need ${t} Aether Dust.` : null;
}
function au(e) {
  return e >= 60 ? `${Math.ceil(e / 60)} min` : `${e} s`;
}
function ou(e) {
  return e.inPrologue
    ? `Hearthsong wakes after the Night of Keys.`
    : e.dead
      ? `You have fallen.`
      : e.inRun
        ? `Leave the dungeon first.`
        : e.homestead
          ? `Leave the homestead first.`
          : e.instance
            ? `The Chorus can't reach you here.`
            : e.phased
              ? `Not in the middle of a story fight.`
              : e.indoors
                ? `Step outside first.`
                : e.outlaw
                  ? `The Lumen Ward won't open to the Discordant.`
                  : e.atHome
                    ? `You're already by the Aether Crystal.`
                    : e.cooldown > 0
                      ? `Hearthsong returns in ${au(e.cooldown)}.`
                      : e.sinceCombat < tu.combatSeconds
                        ? `The Chorus can't hear you over the fighting.`
                        : null;
}
function su(e, t) {
  return e
    ? Math.max(0, Math.ceil((e + tu.hearthCooldownSeconds * 1e3 - t) / 1e3))
    : 0;
}
function cu(e, t) {
  if (Math.hypot(e - Mr - 0.5, t - Nr - 0.5) <= tu.nodeRange + 3) return Rl.id;
  for (let n of Ll) {
    let r = Il[n];
    if (Math.hypot(e - r.x - 0.5, t - r.y - 0.5) <= tu.nodeRange) return n;
  }
  return null;
}
Pr + 8;
function lu(e, t, n, r) {
  if (t.includes(e.id)) return `You're already attuned here.`;
  if (e.state !== `singing`)
    return `Only a singing altar takes a note without a rite.`;
  let i = Il[e.id];
  return Math.hypot(n - i.x - 0.5, r - i.y - 0.5) > tu.nodeRange
    ? `Come closer to the shard.`
    : null;
}
function uu(e, t) {
  return e.state === `singing`
    ? Math.max(0, Math.ceil((e.since + Bl.singingSeconds * 1e3 - t) / 1e3))
    : 0;
}
function du(e) {
  return e === `quiet` || e === `singing`;
}
function fu(e, t, n, r) {
  let i = new Map(r.map((e) => [e.id, e.state])),
    a = [];
  for (let r of n) {
    if (!du(i.get(r) ?? `quiet`)) continue;
    let n = zl(r);
    a.push({ node: r, ...n, distance: Math.hypot(n.x - e, n.y - t) });
  }
  let o = zl(Rl.id);
  return (
    a.push({ node: Rl.id, ...o, distance: Math.hypot(o.x - e, o.y - t) }),
    a.sort((e, t) => e.distance - t.distance)
  );
}
function pu(e) {
  let t = Il[e];
  return { x: t.x + 0.5, y: t.y + 0.6 };
}
var mu = class extends Error {
    status;
    retryAfter;
    constructor(e, t, n) {
      (super(t),
        (this.name = `GateError`),
        (this.status = e),
        (this.retryAfter = n));
    }
  },
  hu = (e) => new Promise((t) => setTimeout(t, e)),
  gu = class {
    base;
    deviceToken;
    session = null;
    sessionExp = 0;
    fetchImpl;
    constructor(e, t, n = (...e) => fetch(...e)) {
      ((this.base = e.replace(/\/+$/, ``)),
        (this.deviceToken = t),
        (this.fetchImpl = n));
    }
    async raw(e, t, n, r) {
      let i;
      try {
        i = await this.fetchImpl(this.base + t, {
          method: e,
          headers: {
            ...(n === void 0 ? {} : { "Content-Type": `application/json` }),
            ...(r ? { Authorization: `Bearer ${r}` } : {}),
          },
          body: n === void 0 ? void 0 : JSON.stringify(n),
        });
      } catch {
        throw new mu(0, `Can't reach the realm's gate. Check your connection.`);
      }
      let a = await i.json().catch(() => ({}));
      if (!i.ok)
        throw new mu(
          i.status,
          a.error ?? `The gate answered ${i.status}.`,
          a.retryAfter,
        );
      return a;
    }
    async auth(e = !1) {
      if (!e && this.session && Date.now() < this.sessionExp - 3e5)
        return this.session;
      let t = await this.raw(
        `POST`,
        `/v1/guest`,
        { deviceToken: this.deviceToken },
        null,
      );
      return (
        (this.session = t.session),
        (this.sessionExp = t.expiresAt),
        t.session
      );
    }
    async call(e, t, n) {
      try {
        return await this.raw(e, t, n, await this.auth());
      } catch (r) {
        if (r instanceof mu && r.status === 401)
          return await this.raw(e, t, n, await this.auth(!0));
        throw r;
      }
    }
    async roster() {
      let e = await this.call(`GET`, `/v1/characters`);
      return { characters: e.characters, max: e.max ?? 8 };
    }
    async characters() {
      return (await this.roster()).characters;
    }
    character(e) {
      return this.call(`GET`, `/v1/characters/${encodeURIComponent(e)}`);
    }
    createCharacter(e, t, n) {
      return this.call(`POST`, `/v1/characters`, {
        name: e,
        school: t,
        hero: n,
      });
    }
    deleteCharacter(e) {
      return this.call(`DELETE`, `/v1/characters/${encodeURIComponent(e)}`);
    }
    async enter(e, t = {}) {
      for (let n = 0; ; n++)
        try {
          return await this.call(`POST`, `/v1/enter`, { characterId: e, ...t });
        } catch (e) {
          if (e instanceof mu && e.status === 409 && e.retryAfter && n < 6) {
            await hu(e.retryAfter * 1e3 + Math.random() * 1e3);
            continue;
          }
          throw e;
        }
    }
  };
function _u() {
  let e =
    typeof location < `u` &&
    /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  return (
    (typeof location < `u` && e
      ? new URLSearchParams(location.search).get(`gate`)
      : null) || `https://t5xbd6rn22.execute-api.sa-east-1.amazonaws.com`
  );
}
var vu = [`tonemote`, `brimling`, `pylon`],
  yu = (() => {
    let e = Object.keys(Fe),
      t = (t) => {
        e.includes(t) || e.push(t);
      };
    for (let e of Object.keys(Go)) t(e);
    for (let e of vu) for (let n of Co) t(`${e}_${n}`);
    return (t(`ritecrystal`), t(`brimling_grey`), t(`brimling_greymini`), e);
  })();
function bu() {
  return {
    dmg: {},
    cost: {},
    cd: {},
    radius: {},
    extra: {},
    heal: {},
    pierce: {},
    caps: {},
    healAll: 0,
    globalDmg: 0,
    crit: 0,
    hp: 0,
    mana: 0,
    regen: 0,
    speed: 0,
    blinkCd: 0,
    blinkRange: 0,
    cdAll: 0,
    ward: 0,
    hollowguard: 0,
    stamina: 0,
    staminaRegen: 0,
  };
}
var xu = [`dmg`, `cost`, `cd`, `radius`, `extra`, `heal`],
  Su = [`pierce`, `caps`],
  Cu = [
    `healAll`,
    `globalDmg`,
    `crit`,
    `hp`,
    `mana`,
    `regen`,
    `speed`,
    `blinkCd`,
    `blinkRange`,
    `cdAll`,
    `ward`,
    `hollowguard`,
    `stamina`,
    `staminaRegen`,
  ];
