// index-BTsv3a2s 155 — arc
// Lines 90318-90610 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var dB = [18.5, 20],
  fB = [19.5, 24],
  pB = [10, -22],
  fie = {
    crush: (e) => ({
      arc: e.arc(`crush`, `Swing arc`, [10, 22], e.sp(pB)),
      impact: e.s(`crush`, `Grit`),
    }),
    shardquake: (e) => ({
      windup: e.onFeet(`shardquake`, `Stamp`, [40, 24], [0, 0]),
      sprite: e.at(`shardquake`, `Shard`, [10, 9]),
      impact: e.s(`shardquake`, `Shatter`),
    }),
    lattice: (e) => ({
      windup: e.onSprite(`lattice`, `Core opens`, [13, 13], dB),
      from: e.feet(dB),
      beam: e.s(`lattice`, `Beam`),
      muzzle: e.s(`lattice`, `Muzzle`),
      splash: e.s(`lattice`, `Splash`),
    }),
    facetweb: (e) => ({
      windup: e.onSprite(`lattice`, `Core opens`, [13, 13], dB),
      from: e.feet(dB),
      spark: e.at(`facetweb`, `Prism`, [8, 22]),
      beam: e.s(`facetweb`, `Link`),
    }),
  },
  pie = {
    crush: (e) => ({
      arc: e.arc(`crush`, `Swing arc`, [10, 22], e.sp(pB)),
      impact: e.s(`crush`, `Grit`),
    }),
    fissure: (e) => ({
      impact: e.s(`fissure`, `Fissure`, [3, 3]),
      zone: e.s(`fissure`, `Fissure`, [4, 5]),
    }),
    inverted: (e) => ({
      windup: e.onSprite(`inverted`, `Core inverts`, [13, 13], dB),
      from: e.feet(dB),
      beam: e.s(`inverted`, `Hollow beam`),
      zone: e.s(`inverted`, `Scorch`),
      zoneOnce: !0,
      zoneAlong: !0,
    }),
    routenorth: (e) => ({
      windup: e.onSprite(`routenorth`, `Runes flare`, [20, 20], [20, 20]),
      from: e.feet(dB),
      beam: e.s(`routenorth`, `Seam beam`),
      beamW: 3,
    }),
  },
  mie = {
    cleave: (e) => ({
      arc: e.arc(`cleave`, `Swing arc`, [10, 22], e.sp(pB)),
      impact: e.at(`cleave`, `Drip`, [10, 21]),
    }),
    meteors: (e) => ({
      tele: e.s(`meteors`, `Telegraph`),
      drop: e.at(`meteors`, `Glob`, [9, 23]),
      impact: e.at(`meteors`, `Splash`, [26, 24]),
      zone: e.s(`meteors`, `Puddle`),
      zoneOnce: !0,
    }),
    shed: (e) => ({
      spark: e.at(`shed`, `Hatch · Cinder`, [13, 29], [0, 3]),
      hatch: e.at(`shed`, `Hatch · Cinder`, [13, 29], [4, 7]),
      below: {
        spark: e.at(`shed`, `Hatch · Blackfire`, [13, 29], [0, 3]),
        hatch: e.at(`shed`, `Hatch · Blackfire`, [13, 29], [4, 7]),
      },
    }),
    vent: (e) => ({
      windup: e.onSprite(`vent`, `Grate opens`, [14, 16], fB),
      from: e.feet(fB),
      tele: e.s(`vent`, `Vent`, [0, 2]),
      beam: e.s(`vent`, `Furnace beam`),
      opened: e.onSprite(`vent`, `Exposed`, [14, 16], fB, { once: !0 }),
    }),
    caldera: (e) => ({
      bands: e.at(`caldera`, `Geyser`, [9, 42]),
      opened: e.onSprite(`vent`, `Exposed`, [14, 16], fB, { once: !0 }),
    }),
  },
  hie = {
    keystaff: (e) => ({
      arc: e.arc(`keystaff`, `Swing arc`, [10, 22], e.sp(pB)),
      impact: e.s(`keystaff`, `Click`),
    }),
    wardline: (e) => ({ tele: e.s(`wardline`, `Ward-line`, [0, 3]) }),
    loupe: (e) => ({
      ramp: rm.gilt,
      windup: e.onSprite(`loupe`, `Loupe`, [9, 9], [16, 9]),
      from: e.feet([16, 9]),
      aim: e.s(`loupe`, `Reticle`),
      beam: e.s(`loupe`, `Loupe beam`),
      impact: e.s(`loupe`, `Keyhole`),
    }),
    lockstep: (e) => ({ impact: e.at(`lockstep`, `Eruption`, [9, 38]) }),
    seal: (e) => ({
      wall: uB(
        e.at(`seal`, `Ward-stone`, [17, 60]),
        e.at(`seal`, `Breaking it`, [13, 37], [0, 1]),
        {
          fall: e.at(`seal`, `Breaking it`, [13, 37], [2, 5]),
          span: e.at(`seal`, `Wall`, [16, 28]),
        },
      ),
    }),
  },
  mB = [22, 3],
  gie = {
    crook: (e) => ({
      arc: e.arc(`crook`, `Swing arc`, [10, 22], e.sp(pB)),
      impact: e.s(`crook`, `Dust curl`),
    }),
    volley: (e) => ({
      windup: e.onSprite(`volley`, `Flare`, [12, 10], mB),
      sprite: e.at(`volley`, `Mote`, [15, 6]),
      impact: e.at(`volley`, `Gutter`, [10, 14]),
    }),
    tokens: (e) => ({
      ramp: rm.bone,
      tele: e.at(`tokens`, `Telegraph`, [23, 30]),
      drop: e.s(`tokens`, `Token`),
      impact: e.at(`tokens`, `Catacomb dust`, [24, 30]),
      zone: e.s(`tokens`, `Dust zone`),
    }),
    gaze: (e) => ({ hit: e.onFeet(`gaze`, `Marked`, [7, 9], [0, -35]) }),
    sermon: (e) => ({
      channel: {
        aura: e.onSprite(`sermon`, `The lantern`, [10, 8], mB, { f: [0, 1] }),
        broken: e.onSprite(`sermon`, `The lantern`, [10, 8], mB, { f: [2, 5] }),
        pulse: e.s(`sermon`, `Pulse`),
        thread: e.mirror(`sermon`, `Thread`),
        threadAt: e.feet([mB[0] + 2, mB[1] + 3.5]),
      },
    }),
  },
  hB = [0, -85],
  _ie = {
    hem: (e) => ({
      arc: e.arc(`hem`, `Sweep`, [10, 22], e.sp(pB)),
      zone: e.s(`hem`, `Rime crust`),
      zoneOnce: !0,
    }),
    hymn: (e) => ({
      windup: e.onSprite(`hymn`, `Breath`, [13, 13], [15, 14]),
      sprite: e.at(`hymn`, `Note`, [12, 12]),
      upright: !0,
      impact: e.s(`hymn`, `Chill`),
    }),
    crescendo: (e) => ({ bands: e.at(`crescendo`, `Spike`, [8, 25]) }),
    faces: (e) => ({
      spark: e.at(`faces`, `Face-shard`, [13, 10]),
      stamp: e.at(`faces`, `Freed`, [13, 33]),
    }),
    choir: (e) => ({
      windup: e.onFeet(`choir`, `Stave`, [50, 17], hB, { f: [0, 1] }),
      channel: {
        aura: e.onFeet(`choir`, `Stave`, [50, 17], hB, { f: [2, 5], once: !0 }),
        broken: e.onFeet(`choir`, `Snap`, [26, 17], [hB[0] - 24, hB[1]]),
        thread: e.s(`choir`, `Thread`),
        threadAt: { dx: hB[0], dy: hB[1] + 7 },
        follower: e.onFeet(`choir`, `Seal`, [14, 36], [0, 0]),
      },
    }),
  },
  gB = [7, 22],
  vie = {
    flail: (e) => ({
      arc: e.arc(`flail`, `Flail`, [8, 22], gB),
      impact: e.at(`flail`, `Lash`, [13, 16]),
    }),
    hook: (e) => ({
      tele: e.s(`hook`, `Lane`),
      from: e.feet(gB),
      sprite: e.at(`hook`, `Hook`, [17, 9]),
      chain: e.s(`hook`, `Chain`),
      weak: e.s(`hook`, `Red link`),
      impact: e.s(`hook`, `Catch`),
      snap: e.at(`hook`, `Snap`, [17, 8]),
    }),
    smoke: (e) => ({
      ramp: rm.ash,
      windup: e.onSprite(`smoke`, `Censer`, [16, 2], [23, 6]),
      tele: e.at(`smoke`, `Grave-smoke`, [34, 32], [0, 1]),
      zone: e.at(`smoke`, `Grave-smoke`, [34, 32], [2, 5]),
      zoneOnce: !0,
      raise: e.at(`smoke`, `Recall`, [19, 30]),
    }),
    ring: (e) => ({
      wall: uB(
        e.at(`ring`, `Post`, [7, 29], [0, 2]),
        e.at(`ring`, `Post`, [7, 29], [3, 4]),
        { span: e.s(`hook`, `Chain`) },
      ),
      weak: e.s(`hook`, `Red link`),
      snap: e.at(`hook`, `Snap`, [17, 8]),
    }),
    rite: (e) => ({
      chain: e.s(`hook`, `Chain`),
      weak: e.s(`hook`, `Red link`),
      snap: e.at(`hook`, `Snap`, [17, 8]),
      raise: e.at(`smoke`, `Recall`, [19, 30]),
      channel: {
        mage: e.onFeet(`rite`, `Shackle`, [16, 5], [0, 0], { once: !0 }),
      },
    }),
    grave: (e) => ({ impact: e.at(`rite`, `Rite`, [62, 58], [7, 7]) }),
  },
  _B = {
    cut: (e) => ({
      arc: e.arc(`cut`, `Cuts`, [10, 22], e.sp(pB)),
      hit: e.onFeet(`cut`, `Absence`, [12, 12], [0, -12], { once: !0 }),
    }),
    starfall: (e) => ({
      tele: e.s(`starfall`, `Mark`),
      drop: e.at(`starfall`, `Falling`, [8, 23]),
      impact: e.s(`starfall`, `Hole`),
    }),
    afterimages: (e) => ({
      blinkOut: e.at(`afterimages`, `Split`, [31, 45]),
      spark: e.at(`afterimages`, `Copy`, [15, 44]),
      stamp: e.at(`afterimages`, `Pop`, [21, 44]),
    }),
    slices: (e) => ({
      lane: e.s(`slices`, `Hairline`),
      wall: uB(e.s(`slices`, `Slice`, [0, 2]), e.s(`slices`, `Slice`, [3, 3]), {
        fall: e.s(`slices`, `Slice`, [4, 5]),
        along: !0,
      }),
    }),
    lightsout: (e) => ({
      channel: {
        aura: e.onSprite(`lightsout`, `Glimpse`, [15, 44], [15, 44]),
        mage: e.onFeet(`lightsout`, `Pool`, [50, 45], [0, -6], { once: !0 }),
      },
      opened: e.onSprite(`lightsout`, `Reveal`, [17, 45], [15, 44], {
        once: !0,
      }),
    }),
  },
  vB = {
    golem: { op: `golem`, moves: fie },
    hollowwarden: { op: `warden`, moves: pie },
    gorrath: { op: `gorrath`, moves: mie },
    aurek: { op: `aurek`, moves: hie },
    hessa: { op: `hessa`, moves: gie },
    maelis: { op: `maelis`, moves: _ie },
    vesker: { op: `vesker`, moves: vie },
    unseen: { op: `unseen`, moves: _B },
    paleface: {
      op: `maelis`,
      moves: { nova: (e) => ({ impact: e.s(`faces`, `Burst`) }) },
    },
    unseencopy: { op: `unseen`, moves: { cut: _B.cut } },
  };
Object.keys(vB);
function yB(e) {
  for (let [t, n] of Object.entries(e))
    n === void 0
      ? delete e[t]
      : n &&
        typeof n == `object` &&
        Object.getPrototypeOf(n) === Object.prototype &&
        !(`frames` in n) &&
        (yB(n), Object.keys(n).length || delete e[t]);
  return e;
}
var bB = new Map(),
  xB = -1;
function SB(e, t) {
  xB !== Wp() && (bB.clear(), (xB = Wp()));
  let n = `${e}/${t}`,
    r = bB.get(n);
  if (r !== void 0) return r;
  let i = e.replace(/_(ember|rime|storm|void)$/, ``),
    a = vB[i],
    o = a?.op ?? Jk(i),
    s = o ? qk[o] : void 0;
  if (!o || !s) r = null;
  else {
    let n = a?.moves[t];
    r = yB({ rim: s.rim, ramp: s.ramp, ...n?.(die(o)) });
    let i = tB(e),
      c = cB(o)[1];
    if (r?.from && i && c > 0) {
      let e = i.idle.ay / c;
      r = { ...r, from: { dx: r.from.dx * e, dy: r.from.dy * e } };
    }
  }
  return (bB.set(n, r), r);
}
