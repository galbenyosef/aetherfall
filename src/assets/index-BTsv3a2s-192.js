// index-BTsv3a2s 192 — prop
// Lines 124013-124448 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function AJ(e, t, n) {
  let r = SA(e.tx, e.ty, 902),
    i = SA(e.tx, e.ty, 903) < 0.5,
    a = e.ref;
  if (a.t === `building` && a.opts.pack === `L`) {
    let e = sM(r < 0.5 ? `hl/cabin-2` : `hl/cabin-3`, i);
    if (e)
      return { s: { c: e.c, ax: e.ax, ay: e.ay }, art: `epic:hl/longhouse` };
  }
  if (a.t === `building` && a.opts.pack) {
    let e = dM(a.opts);
    return e ? { s: e, art: `epic:house/${a.opts.pack}` } : null;
  }
  if (a.t === `building`) {
    if (e.kind !== `house` && e.kind !== `shop`) return null;
    let t = MM(a.opts);
    return t ? { s: t } : null;
  }
  if (a.t === `tower`) {
    let e = sM(`ruins/bastion`);
    return e
      ? { s: { c: e.c, ax: e.ax, ay: e.ay }, art: `epic:ruins/bastion` }
      : null;
  }
  if (a.t === `landmark` && a.name === `keep`) {
    let e = sM(`ruins/temple`);
    return e
      ? { s: { c: e.c, ax: e.ax, ay: e.ay }, art: `epic:ruins/temple` }
      : null;
  }
  if (a.t === `landmark` && a.name === `watchtower`) return xJ(`gl/watchtower`);
  if (a.t === `landmark` && a.name === `windmill`) {
    let e = sM(`anim/windmill`);
    return e
      ? {
          s: { c: e.c, ax: e.ax, ay: e.ay },
          frames: e.frames,
          fps: 8,
          art: `epic:anim/windmill`,
        }
      : null;
  }
  if (a.t === `landmark`) {
    let e =
      a.name === `inn`
        ? MM(HM)
        : a.name === `barracks`
          ? MM(UM, `lantern`)
          : a.name === `farmhouse`
            ? MM(WM(typeof a.arg == `number` ? a.arg : 0))
            : null;
    return e ? { s: e } : null;
  }
  if (a.t === `prop`) {
    switch (a.name) {
      case `barrel`:
        return (
          xJ(
            cJ(
              [
                `prop/barrels-0`,
                `prop/barrels-1`,
                `prop/barrels-2`,
                `prop/barrels-3`,
              ],
              r,
            ),
            i,
          ) ?? uJ(r < 0.75 ? `barrel01` : `barrel04`, i)
        );
      case `crates`: {
        let e = typeof a.arg == `number` ? a.arg : 1;
        return (
          xJ(
            e >= 3
              ? `prop/crates-pack-0`
              : e === 2
                ? `prop/crates-pack-1`
                : r < 0.5
                  ? `prop/crates-0`
                  : `prop/crates-1`,
            i,
          ) ??
          uJ(
            e >= 3
              ? `crate08`
              : e === 2
                ? `crate07`
                : r < 0.5
                  ? `crate03`
                  : `crate06`,
            i,
          )
        );
      }
      case `campfire`: {
        let e = sM(`anim/campfire`);
        if (e)
          return {
            s: {
              c: e.c,
              ax: e.ax,
              ay: e.ay,
              lights: [
                { x: e.ax, y: e.ay - 12, r: 44, color: `#ff8a2a`, a: 0.9 },
              ],
            },
            frames: e.frames,
            fps: 8,
            art: `epic:anim/campfire`,
          };
        let t = bA(`campfire`);
        return t
          ? SJ(`campfire`, 8, {}, [
              { x: t.ax, y: t.ay - 9, r: 44, color: `#ff8a2a`, a: 0.9 },
            ])
          : null;
      }
      case `planter`:
        return (
          xJ(
            cJ(
              [
                `prop/potted-plant-pack-0`,
                `prop/potted-plant-pack-1`,
                `prop/potted-plant-pack-2`,
                `prop/potted-plant-pack-3`,
              ],
              r,
            ),
          ) ??
          uJ(
            cJ(
              [
                `plant10`,
                `plant11`,
                `plant12`,
                `plant13`,
                `plant14`,
                `plant15`,
              ],
              r,
            ),
          )
        );
      case `fruitTree`:
        return (
          xJ(
            cJ(
              [
                `ar/birch-trees-0`,
                `ar/birch-trees-1`,
                `ar/birch-trees-2`,
                `ar/birch-trees-4`,
              ],
              r,
            ),
            i,
          ) ?? EJ(typeof a.arg == `number` ? a.arg : 0)
        );
      case `stall`: {
        let [e] = Array.isArray(a.arg) ? a.arg : [`produce`],
          t = gJ(String(e));
        return t ? { s: t, art: `epic:stall/${e}` } : null;
      }
      case `well`:
        return xJ(`gl/well`);
      case `cart`:
        return xJ(`gl/carriage`, i);
      case `signpost`:
        return xJ(`gl/sign-post`, i);
      case `fence`:
        return xJ(a.arg === 1 ? `hl/fence-h` : `hl/fence-v`);
      case `gravestone`:
        return xJ(
          cJ(
            [
              `ar/ancient-stones-0`,
              `ar/ancient-stones-2`,
              `ar/ancient-stones-4`,
              `ar/ancient-stones-6`,
              `ar/ancient-stones-8`,
              `ar/ancient-stones-9`,
            ],
            r,
          ),
          i,
        );
      case `runeStone`:
        return xJ(
          cJ(
            t === nJ
              ? [
                  `hl/poi3-rocks-1`,
                  `hl/poi3-rocks-2`,
                  `hl/poi3-rocks-9`,
                  `hl/poi3-rocks-5`,
                ]
              : [
                  `ar/ancient-stones-12`,
                  `ar/ancient-stones-14`,
                  `ar/ancient-stones-16`,
                  `ar/ancient-stones-18`,
                  `ar/ancient-stones-19`,
                ],
            r,
          ),
          i,
        );
      case `wispCircle`: {
        let e = sM(`hl/poi3`);
        return e
          ? {
              s: { c: e.c, ax: e.c.width / 4, ay: 0 },
              art: `epic:hl/poi3`,
              glow: `#9fd8ff`,
            }
          : null;
      }
      case `iceTree`: {
        let e = sM(`anim/ice-tree`);
        return e
          ? {
              s: {
                c: e.c,
                ax: e.ax,
                ay: e.ay,
                lights: [
                  { x: e.ax, y: e.ay - 60, r: 70, color: `#7ef9ff`, a: 0.6 },
                ],
              },
              frames: e.frames,
              fps: 8,
              art: `epic:anim/ice-tree`,
            }
          : null;
      }
      case `tent`:
        return xJ(`ds/tent`, i);
      case `sacks`:
        return xJ(
          cJ(
            [
              `prop/grain-sacks-pack-0`,
              `prop/grain-sacks-pack-1`,
              `prop/grain-sacks-pack-2`,
            ],
            r,
          ),
          i,
        );
      case `haybale`:
        return xJ(cJ([`prop/hay-4`, `prop/hay-6`, `prop/hay-5`], r), i);
      case `logpile`:
        return xJ(cJ([`prop/logs-5`, `prop/logs-6`, `prop/logs-7`], r), i);
      case `bench`:
        return xJ(`prop/table-bench2`, i);
      case `obeliskStand`: {
        let e = sM(`ruins/obelisk-stand`);
        return e
          ? {
              s: { c: e.c, ax: e.c.width / 4, ay: 0 },
              art: `epic:ruins/obelisk-stand`,
              glow: `#7ef9ff`,
            }
          : null;
      }
      case `manaFountain`: {
        let e = sM(`anim/mana-fountain`);
        return e
          ? {
              s: {
                c: e.c,
                ax: e.ax,
                ay: e.ay,
                lights: [
                  { x: e.ax, y: e.ay - 20, r: 40, color: `#5cc8ff`, a: 0.7 },
                ],
              },
              frames: e.frames,
              fps: 8,
              art: `epic:anim/mana-fountain`,
            }
          : null;
      }
      case `guardian`:
        return xJ(
          cJ(
            [`ruins/guardian-0`, `ruins/guardian-1`, `ruins/guardian-2`],
            typeof a.arg == `number` ? (a.arg + 0.5) / 3 : r,
          ),
          i,
        );
      case `ritualRing`: {
        let e = sM(`ruins/ritual-ring`);
        return e
          ? {
              s: { c: e.c, ax: e.c.width / 4, ay: 0 },
              art: `epic:ruins/ritual-ring`,
            }
          : null;
      }
      case `ruin`:
        return OJ(a.arg);
      case `cliff`:
        return xJ(`gl/cliff-cisterns`);
      case `bannerPole`: {
        let e = Qq[typeof a.arg == `number` ? a.arg : 0];
        return e ? xJ(`op/banner-${e}`) : null;
      }
      case `dummy`:
        return xJ(`gl/dummy-${typeof a.arg == `string` ? a.arg : `plain`}`, i);
      case `runeTarget`: {
        let e = typeof a.arg == `string` ? a.arg : `pyro`,
          t = sM(`ar/rune-target-${e}`);
        return t
          ? {
              s: {
                c: t.c,
                ax: t.ax,
                ay: t.ay,
                lights: [{ x: t.ax, y: 6, r: 20, color: EA[e].glow, a: 0.8 }],
              },
              art: `epic:ar/rune-target-${e}`,
            }
          : null;
      }
      case `rowboat`: {
        let e = sM(`sa/rowboat-up`);
        return e
          ? {
              s: { c: e.c, ax: e.ax, ay: 0 },
              frames: e.frames,
              fps: 6,
              art: `epic:sa/rowboat-up`,
            }
          : null;
      }
      case `shardCluster`: {
        let e = r < 0.5 ? `dm/shard-cluster-0` : `dm/shard-cluster-1`,
          t = sM(e, i);
        return t
          ? {
              s: {
                c: t.c,
                ax: t.ax,
                ay: t.ay,
                lights: [
                  { x: t.ax, y: t.ay - 8, r: 30, color: `#5cf0ff`, a: 0.75 },
                ],
              },
              flip: i,
              art: `epic:${e}`,
            }
          : null;
      }
      case `statue`:
        return t === $q ? xJ(`ruins/statue`) : null;
      case `fountain`: {
        if (t !== $q) return null;
        let e = sM(`anim/fountain`);
        return e
          ? {
              s: { c: e.c, ax: e.ax, ay: e.ay },
              frames: e.frames,
              fps: 6,
              art: `epic:anim/fountain`,
            }
          : null;
      }
    }
    return null;
  }
  if (a.t !== `game`) return null;
  let o = sJ(t),
    s = bJ[t],
    c = (e) => (e?.length ? xJ(cJ(e, r), i) : null);
  switch (a.key) {
    case `tree`:
    case `darktree`:
    case `pine`:
      return n && t === $q
        ? (c(_J) ?? uJ(cJ(o.trees, r), i))
        : (c(t === rJ ? bJ[eJ].trees : s?.trees) ?? uJ(cJ(o.trees, r), i));
    case `deadtree`:
      return c(
        t === rJ
          ? bJ[rJ].trees
          : [`ds/dead-tree1`, `ds/dead-tree2`, `ds/dead-tree3`],
      );
    case `obsidian`:
      return c(vJ);
    case `mushroom`:
      return c(yJ);
    case `bush`:
      return c(s?.bushes) ?? uJ(o.sapling, i);
    case `rock`:
      return c(s?.rocks) ?? uJ(cJ(o.rocks, r), i);
    case `crystal`: {
      let e = sM(`anim/aether-obelisk`);
      return e
        ? {
            s: { c: e.c, ax: e.ax, ay: e.ay },
            frames: e.frames,
            fps: 10,
            art: `epic:anim/aether-obelisk`,
          }
        : null;
    }
    case `brazier`: {
      let e = sM(n && t === $q ? `anim/chalice` : `anim/brazier`);
      return e
        ? {
            s: { c: e.c, ax: e.ax, ay: e.ay },
            frames: e.frames,
            fps: 8,
            glow: `#ffe08a`,
            art: `epic:anim/chalice`,
          }
        : n
          ? SJ(`brazierBlue`, 8, { glow: `#44c9f0` })
          : SJ(`brazier`, 8);
    }
    case `pillar`:
      return a.v === 1 && !(n && t === $q)
        ? xJ(`ar/pillar-broken-${Math.floor(r * 14)}`, i)
        : xJ(cJ([`ruins/pillar-a`, `ruins/pillar-b`, `ruins/pillar-c`], r), i);
    case `lamp`: {
      let e =
        xJ(r < 0.5 ? `prop/lamp-post1` : `prop/lamp-post2`, i) ??
        uJ(t === $q ? `lamp01` : r < 0.5 ? `lamp04` : `lamp05`);
      return e && t === $q ? { ...e, glow: `#cdeeff` } : e;
    }
  }
  return null;
}
