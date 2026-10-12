// assets__index-BTsv3a2s 95 — math
// Lines 48650-48996 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var iE = () =>
    R(`k1-aurek-stone`, 6, 34, 66, (e, t) => {
      if (
        (t < 2 &&
          (BT(e, 5, 54, 24, 10, t === 0 ? 0.4 : 0.9),
          Sm(e, 17, 59, 3 + t * 4, 1.5 + t, `#000000`, 0.4)),
        t === 1)
      ) {
        rE(e, 17, 30, `dark`);
        for (let t = 0; t < 3; t++)
          dm(e, 11 + t * 6, 0, 11 + t * 6, 4, FT[2], 2, 1, t);
      } else
        t >= 2 &&
          (Sm(e, 17, 59, 10, 3, `#000000`, 0.45),
          rE(e, 17, 60, t < 4 ? `dark` : t === 4 ? `pulse` : `sealed`),
          t === 2 &&
            (N(e, 5, 59, `#ffffff`, 24, 1), UT(e, 17, 58, 0.3, 10, 14, 4)),
          t === 3 && UT(e, 17, 58, 0.8, 10, 16, 4));
    }),
  aE = () =>
    R(`k1-aurek-break`, 6, 26, 40, (e, t) => {
      if (
        (rE(
          e,
          13,
          37,
          [`sealed`, `pulse`, `hit`, `cracked`, `broken`, `open`][t],
        ),
        t === 4)
      ) {
        V(e, 13, 22, 8, 7, Uw, 5);
        for (let t = 0; t < 6; t++)
          N(
            e,
            6 + L(t, 1) * 14,
            24 + L(t, 2) * 10,
            t % 2 ? Uw[3] : LT[3],
            2,
            1,
          );
      }
    });
function oE(e, t, n, r, i, a) {
  let o = Math.round(r * 0.42) - 3;
  for (let s = 0; s <= r; s++) {
    let c = 1 - s / r,
      l = s / r,
      u = (((t + a + i * 2) % 8) + 8) % 8,
      d = s - o,
      f = null;
    if (
      ((t + a) % 4 == 0
        ? (f = RT(c, l > 0.8 ? 2 : 3))
        : (t + s + i) % 2 == 0 && l < 0.75 && (f = RT(c, 1)),
      d >= 0 && d < 7)
    ) {
      let e = VT[6 - d];
      f = u < 7 && e[u] === `#` ? RT(d > 3 ? 0 : 1, d === 3 ? 4 : 3) : RT(c, 1);
    }
    (s === 0 && (f = Uw[3]),
      s === r && (t + i) % 2 == 0 && (f = FT[3]),
      f && N(e, t, n - s, f));
  }
}
var sE = () =>
  R(`k1-aurek-wall`, 4, 32, 30, (e, t) => {
    for (let n = 0; n < 32; n++) oE(e, n, 28, 24, t, 0);
  });
function cE() {
  let [e, t] = Tm(240, 182, `stone`, 31),
    n = [
      [40, 36],
      [120, 36],
      [200, 36],
      [200, 104],
      [200, 172],
      [120, 172],
      [40, 172],
      [40, 104],
    ];
  for (let e = 40; e <= 200; e += 3) (N(t, e, 36, LT[1]), N(t, e, 172, LT[1]));
  for (let e = 36; e <= 172; e += 3) (N(t, 40, e, LT[1]), N(t, 200, e, LT[1]));
  let r = M(240, 182),
    i = (e, t) => {
      if (t === 3) return;
      let [r, i] = n[t],
        [a, o] = n[(t + 1) % 8];
      if (i === o)
        for (let t = Math.min(r, a) + 8; t <= Math.max(r, a) - 8; t++)
          oE(e, t, i, 24, 1, 0);
      else {
        let t = Math.min(i, o) + 2,
          n = Math.max(i, o) - 2;
        for (let i = t; i <= n; i++)
          for (let n = 0; n <= 24; n++) {
            let a = i - n;
            if (a < t - 24 + 6 && n < 24) continue;
            let o = n / 24,
              s = n === 0 ? Uw[3] : o > 0.55 ? FT[3] : o > 0.3 ? FT[2] : Uw[2];
            (n > 0 && n < 24 && (i + n) % 3 == 0) ||
              (N(e, r - 1, a, s),
              (n === 24 || (i + n) % 4 == 0) &&
                N(e, r, a, o > 0.5 ? FT[4] : Uw[3]));
          }
      }
    };
  ([0, 1, 2, 6, 7].forEach((e) => i(r[1], e)),
    bm(t, r[0], 0, 0, 3, 0.5),
    t.drawImage(r[0], 0, 0));
  let a = M(240, 182);
  [4, 5].forEach((e) => i(a[1], e));
  let o = [];
  (n.forEach(([e, n], r) =>
    o.push([
      n + 0.5,
      () => rE(t, e, n, r === 3 ? `broken` : r === 4 ? `cracked` : `sealed`),
    ]),
  ),
    o.push([
      171.9,
      () => {
        (bm(t, a[0], 0, 0, 3, 0.5), t.drawImage(a[0], 0, 0));
      },
    ]),
    o.push([100, () => Jw(t, `aurek`, 2, 120, 100, 9)]),
    o.push([140, () => qw(t, `storm`, 222, 140, 2, 2)]),
    o.push([140, () => qw(t, `pyro`, 160, 140, 2, 6)]),
    o.sort((e, t) => e[0] - t[0]).forEach(([, e]) => e()));
  let [s, c] = n[4],
    l = M(240, 182);
  return (
    z(l[1], 170, 124, s - 3, c - 13, rm.ember[2], 2),
    z(l[1], 170, 124, s - 3, c - 13, rm.ember[4]),
    bm(t, l[0], 0, 0, 2, 0.8),
    t.drawImage(l[0], 0, 0),
    V(t, s - 2, c - 13, 6, 6, Uw, 2),
    n.forEach(([e, n], r) => r !== 3 && ym(t, e, n - 22, 9, FT[3], 0.35)),
    Dm(t, 240, 182, 0.4),
    e
  );
}
function lE() {
  let [e, t] = Tm(240, 168, `stone`, 33);
  (Jw(t, `aurek`, 2, 50, 96, 9),
    BT(t, 111, 61, 82, 76, 0, 1, !1),
    XT(t, 112, 62, 4));
  let n = QT()[2],
    r = QT()[1],
    i = (e, n) => {
      let r = M(240, 168);
      (JT.forEach((t, i) =>
        t.forEach((t, a) => {
          t &&
            e(i) &&
            r[1].drawImage(
              n,
              112 + a * 16 + 8 - 9,
              Math.round(62 + (i + 0.5) * YT) + 4 - 42,
            );
        }),
      ),
        bm(t, r[0], 0, 0, 4, 0.7),
        t.drawImage(r[0], 0, 0));
    };
  return (
    i((e) => e <= 1, n),
    qw(t, `cryo`, 168, 90, 1, 2),
    i((e) => e >= 2, r),
    ym(t, 152, 92, 56, FT[3], 0.25),
    Dm(t, 240, 168, 0.4),
    e
  );
}
var uE = {
    id: `aurek`,
    name: `Aurek Sunder`,
    title: `The Mazewright`,
    page: `keys`,
    lore: `Once the Conclave's master of wards. He designed half the ward-stones in the realm, Highmore's among them, and he opened Highmore's from the inside in the time it took to say the word. Now he designs the Labyrinth. Cold and exact: he thinks of towns as locks, and of the ground round him as one too.`,
    meta: `Key · Level 18 world boss · incursions from the road to Highmore (south-west) · Highmore arc`,
    palette: [pg.aurek, LT[2], LT[4], FT[1], FT[3], Uw[2], Uw[3], `#ffffff`],
    source: `attackFx/keys1.ts · KEYS_1[1]`,
    portrait: () => xg(`aurek`)[0],
    moves: [
      {
        id: `keystaff`,
        name: `Keystaff`,
        tier: `basic`,
        form: `swing`,
        windup: 0.6,
        lore: `The key-shaped staff, swung like a key in a lock. The arc it leaves is laid in ward tiles: cyan where it leads, already turned where it trails, and the bit's brass teeth on the outside.`,
        read: `130° cone, 2.4 tiles, 0.6 s. Where it lands a lock clicks shut (cosmetic).`,
        kit: `Was Cleave (KEY_KIT). Same numbers.`,
        strips: () => [
          Gw(`Swing arc`, WT(), {
            note: `Facing right; a mosaic of 2 × 2 ward tiles`,
            anchor: `Aurek's feet + (10, -22)`,
          }),
          Gw(`Click`, GT(), {
            caps: [`close`, `close`, `lock`, `chips`, `chips`, `spent`],
            note: `Where the bit lands`,
          }),
        ],
      },
      {
        id: `wardline`,
        name: `Ward-line`,
        tier: `special`,
        form: `lunge`,
        windup: 0.9,
        lore: `His Charge. He doesn't run: he lays a road of ward glyphs from his feet to yours and slides down it, and each glyph locks behind him.`,
        read: `A glyph road 7 tiles long and 2.6 wide is laid from his feet for 0.9 s, then flashes. He slides to the far end. Step off the side; the glyphs are already lit where it's going.`,
        kit: `Was Charge (lunge 7, r 1.3, 0.9 s). Same numbers; the line is drawn as a road of glyphs.`,
        strips: () => [
          Gw(`Ward-line`, KT(), {
            caps: [`lay`, `lay`, `laid`, `flash`, `slide`, `locked`],
            note: `Facing right, from his feet`,
            scale: 2,
          }),
          Gw(`Glyph`, qT(), {
            caps: [`dark`, `lit`, `locked`, `spent`],
            note: `Decal; cyan above the split, red below`,
          }),
        ],
      },
      {
        id: `loupe`,
        name: `Loupe`,
        tier: `special`,
        form: `beam`,
        windup: 1,
        lore: `He looks at you through the brass loupe the way he once looked at a ward-stone: to find exactly where it breaks. Then a thread of ward-light goes through the lens to that spot.`,
        read: `A brass ring tightens on you for 0.8 s; its brackets square up when it locks, and the beam fires 0.2 s later at the locked spot. Move as it squares. Leaves a keyhole burnt in the floor for 3 s (cosmetic).`,
        kit: `New form: beam ×1, aimed, short (0.15 s), 9 tiles. A fast bolt in all but name.`,
        strips: () => [
          Gw(`Loupe`, $T(), {
            caps: [`gather`, `gather`, `gather`, `fire`],
            note: `At his eye`,
            anchor: `cell (9, 9) on sprite (16, 9)`,
          }),
          Gw(`Reticle`, eE(), {
            caps: [`track`, `track`, `track`, `lock`, `fire`],
            note: `On the target's feet`,
          }),
          Gw(`Loupe beam`, tE(), { note: `32 px tile, loops along x` }),
          Gw(`Keyhole`, nE(), {
            caps: [`burn`, ``, `turned`, ``, `scorch`],
            note: `Decal where the beam lands`,
          }),
        ],
      },
      {
        id: `lockstep`,
        name: `Lockstep`,
        tier: `special`,
        form: `zone`,
        windup: 1.4,
        lore: `A ward-maze laid on the floor round you, the way he lays them in the Labyrinth. The lit tiles are the walls. The dark ones are the way out, if you can read a maze in a second and a half.`,
        read: `A 5 × 5 tile square round you lights tile by tile for 1.4 s. The dark tiles are a corridor from your feet to the edge, with at most two turns and one dead end. Then ward-light erupts from every lit tile. Walk the dark tiles out.`,
        kit: `New form: zone (tile grid). Ward-light columns, one hit.`,
        strips: () => [
          Gw(`Maze`, ZT(), {
            caps: [`square`, `light`, `lit`, `now`, `erupt`, `spent`],
            note: `5 × 5 tiles; 1 = lit, 0 = corridor`,
            scale: 2,
          }),
          Gw(`Eruption`, QT(), {
            caps: [`tile`, `rise`, `column`, `thin`, `chips`, `spent`],
            note: `One lit tile, side view`,
          }),
        ],
        scene: lE,
        sceneCap: `It has just gone off. The Cryomancer read the corridor and is walking out of the top of the maze.`,
      },
      {
        id: `seal`,
        name: `Seal`,
        tier: `signature`,
        form: `wall`,
        windup: 1.5,
        lore: `He opened Highmore's ward from the inside. Now he locks you in his own: eight ward-stones drop in a square round the fight and wall it shut. Each stone is split like his tablet, and only the Hollow half can be broken.`,
        read: `At 70% and 35%. Eight lock squares mark a square 10 tiles across round him for 1.5 s (don't stand on them). Then the stones land at its corners and the middle of each side, and walls stand between them for 25 s; touching a wall knocks you back. Hit a stone's red half to break it and the stretch of wall clockwise from it comes down. The cyan half can't be hurt.`,
        kit: `New form: wall (8 segments, a square). Each stone has its own health; the Hollow half is the weak point (codex hook).`,
        strips: () => [
          Gw(`Ward-stone`, iE(), {
            caps: [`mark`, `fall`, `slam`, `dust`, `light`, `sealed`],
            note: `Bottom centre on the mark`,
          }),
          Gw(`Breaking it`, aE(), {
            caps: [`sealed`, `pulse`, `hit`, `cracked`, `breaks`, `open`],
            note: `Only the red half takes damage`,
          }),
          Gw(`Wall`, sE(), {
            note: `Between stones; loops along x, one curtain per stretch`,
          }),
        ],
        scene: cE,
        sceneCap: `The lock is shut but for one stretch. The Stormcaller broke that stone and is out; the Pyromancer is on the corner.`,
      },
    ],
  },
  dE = [`#1a1614`, `#342e2a`, `#564e46`, `#857a6c`, `#c2b6a0`],
  fE = [`#241c10`, `#5e4c22`, `#a89448`, `#e6d898`, `#fffbe6`],
  pE = [`#5a5244`, `#a89e88`, `#e8dcc0`],
  mE = [`#2a2018`, `#5a4a3a`, `#8a7458`],
  hE = `#3a3438`;
function gE(e, t, n, r = !1) {
  (N(e, t - 2, n - 3, `#14100c`, 5, 6),
    N(e, t - 1, n - 2, r ? fE[3] : pE[1], 3, 4),
    N(e, t - 1, n - 2, r ? fE[4] : pE[2], 2, 1),
    N(e, t, n, r ? Uw[3] : pE[0]));
}
function _E(e, t, n, r, i, a, o = Math.PI / 4) {
  Cm(e, t, n, r, i, a, (e, t, n, i) => {
    let a = Math.round(t * r);
    (N(e, n, i, a % 3 == 0 ? mE[1] : mE[2]),
      a % 9 == 0 && N(e, n + Math.cos(t), i + Math.sin(t) / 1.1, mE[1]));
  });
  for (let i = 0; i < 4; i++) {
    let s = o + (i * Math.PI) / 2;
    gE(e, t + Math.cos(s) * r, n + (Math.sin(s) * r) / 1.1 + 1, a > 0.66);
  }
}
function vE(e, t, n, r, i = `whole`) {
  if (
    (N(e, t + 1, n - 1, hE),
    N(e, t, n, hE, 4, 1),
    N(e, t, n + 1, hE, 1, 5),
    N(e, t + 3, n + 1, hE, 1, 5),
    N(e, t, n + 6, hE, 4, 1),
    i === `struck`)
  ) {
    N(e, t, n, `#ffffff`, 4, 7);
    return;
  }
  if (i === `broken`) {
    N(e, t + 1, n + 1, `#0c0a0c`, 2, 5);
    return;
  }
  (N(e, t + 1, n + 1, r > 0.5 ? fE[2] : Uw[1], 2, 5),
    N(e, t + 1, n + 2, r > 0.5 ? fE[3] : Uw[3], 2, 3),
    N(e, t + 1, n + 3, r > 0.8 ? `#ffffff` : Uw[3], 2, 1),
    N(e, t + 1, n + 3, r > 0.5 ? Uw[3] : Uw[4]),
    i === `cracked` &&
      (N(e, t + 2, n + 1, `#0c0a0c`, 1, 2),
      N(e, t + 1, n + 4, `#0c0a0c`, 1, 2)));
}
