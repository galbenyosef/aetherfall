// index-BTsv3a2s 128 — math
// Lines 81741-82090 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function FM(e) {
  let t = PM.get(e.house);
  if (t) return t;
  let n = bA(e.house),
    [r, i] = M(AM.w, AM.h);
  return (
    i.drawImage(n.c, 38, 32, AM.w, AM.h, 0, 0, AM.w, AM.h),
    PM.set(e.house, r),
    r
  );
}
var IM = s({
  BARRACKS_OPTS: () => UM,
  INN_OPTS: () => HM,
  barn: () => YM,
  barracks: () => KM,
  farmhouse: () => JM,
  farmhouseOpts: () => WM,
  inn: () => GM,
  keep: () => BM,
  mourningHouse: () => qM,
  schoolHall: () => VM,
  stable: () => XM,
  watchtower: () => QM,
  windmill: () => ZM,
});
function LM(e, t, n, r, i = 3) {
  for (let a = 0; a < i; a++) {
    let i = r + a * 6;
    (N(e, Math.round(t - i / 2), n + a * 2, a % 2 ? CA.st : CA.lt, i, 2),
      N(e, Math.round(t - i / 2), n + a * 2 + 1, CA.dk, i, 1));
  }
}
function RM(e, t, n, r, i = 5) {
  (N(e, t, n, CA.mid, r, i), N(e, t, n, CA.lt, r, 1));
  for (let a = t + 3; a < t + r - 1; a += 7) N(e, a, n + 2, CA.dk, 1, i - 2);
}
function zM(e, t, n, r, i, a = `#3b3548`, o) {
  (P(e, t, n, r + 1.5, r + 1.5, a),
    P(e, t, n, r, r, i),
    P(e, t - r * 0.3, n - r * 0.3, r * 0.35, r * 0.35, `#ffffff`));
  for (let i = 0; i < 8; i++) {
    let o = (i / 8) * Math.PI * 2;
    for (let i = 1; i < r; i++)
      N(
        e,
        Math.round(t + Math.cos(o) * i - 0.5),
        Math.round(n + Math.sin(o) * i - 0.5),
        a,
      );
  }
  (P(e, t, n, 1.6, 1.6, a),
    o?.push({ x: t, y: n, r: r * 4, color: i, a: 0.9 }));
}
function BM() {
  let [e, t] = M(240, 192),
    n = [],
    r = nt(4242),
    i = it.marizon;
  AA(t, `white`, 92, 34, 56, 80, r);
  for (let e = 2; e <= 36; e++) {
    let n = (e - 2) / 34,
      r = Math.round(2 + n * 31);
    for (let n = 120 - r; n < 120 + r; n++) {
      let r = n >= 120 ? i[1] : i[0];
      ((e - 2) % 4 == 0 && (r = I(r, -0.25)), N(t, n, e, r));
    }
  }
  (N(t, 119, 2, i[2], 1, 32),
    N(t, 89, 36, I(i[1], -0.3), 62, 1),
    N(t, 119, 0, DA.hi, 2, 2),
    zM(t, 120, 50, 8, DA.crystal, `#3b3548`, n),
    AA(t, `white`, 33, 124, 173, 58, r, 151),
    MA(t, 28, 211, 88, 125, i, `slate`, 0.9),
    RM(t, 32, 182, 175, 6));
  let a = [1, 2, 3, 4];
  [56, 76, 150, 170].forEach((e) => {
    (FA(t, e, 130, 7, 12, { arched: !0, frame: `#4a4458` }, n),
      FA(t, e, 158, 7, 12, { arched: !0, frame: `#4a4458` }, n));
  });
  for (let e = 0; e < 4; e++) KA(t, [44, 94, 138, 188][e], 128, a[e], 22, 8);
  (IA(t, 111, 182, 18, 24, { arched: !0, color: `#4a2f1c`, double: !0 }),
    N(t, 108, 155, CA.hi, 24, 2),
    LM(t, 120, 183, 24, 4),
    n.push(
      { x: 106, y: 164, r: 24, color: `#ffd98a` },
      { x: 134, y: 164, r: 24, color: `#ffd98a` },
    ));
  for (let e of [104, 132])
    (N(t, e, 160, `#2b2633`, 4, 7), N(t, e + 1, 161, `#ffe08a`, 2, 5));
  for (let e of [0, 1]) {
    let a = e === 0 ? 0 : 182;
    (AA(t, `white`, a + 3, 121, 52, 66, r, 151),
      PA(t, a, a + 58 - 1, 75, 122, i, `slate`, `#c9c3d3`, `#6b6680`),
      RM(t, a + 2, 187, 54, 5),
      zM(t, a + 29, 111, 5, DA.crystal, `#3b3548`, n),
      FA(t, a + 12, 129, 7, 12, { arched: !0, frame: `#4a4458` }, n),
      FA(t, a + 58 - 19, 129, 7, 12, { arched: !0, frame: `#4a4458` }, n),
      FA(t, a + 12, 159, 7, 12, { arched: !0, frame: `#4a4458` }, n),
      FA(t, a + 58 - 19, 159, 7, 12, { arched: !0, frame: `#4a4458` }, n),
      KA(t, a + 29 - 5, 151, 0, 26, 10));
  }
  return (F(e, wA), { c: e, ax: 0, ay: e.height, lights: n });
}
function VM(e) {
  let t = EA[e],
    n = it[e],
    r = e === `void` ? `dark` : e === `cryo` ? `white` : `stone`,
    [i, a] = M(176, 156),
    o = [],
    s = nt(e.length * 97);
  (AA(a, r, 5, 104, 166, 44, s, 125),
    MA(a, 1, 174, 62, 105, n, `slate`, 0.9),
    RM(a, 4, 148, 168, 5));
  for (let t of [16, 34, 135, 153])
    (FA(
      a,
      t,
      109,
      7,
      10,
      {
        arched: !0,
        frame: `#3b3548`,
        glow: e === `void` ? `#d9a8ff` : e === `cryo` ? `#e6f6ff` : TA.lit,
      },
      o,
    ),
      FA(
        a,
        t,
        131,
        7,
        10,
        {
          arched: !0,
          frame: `#3b3548`,
          glow: e === `void` ? `#d9a8ff` : e === `cryo` ? `#e6f6ff` : TA.lit,
        },
        o,
      ));
  let c = r === `dark` ? `#4f4960` : r === `white` ? `#c9c3d3` : `#8c8698`;
  AA(a, r, 59, 94, 58, 58, s);
  let { apexY: l } = PA(a, 56, 119, 4, 95, n, `slate`, c, `#3b3548`);
  if (
    (RM(a, 58, 152, 60, 4),
    zM(a, 88, Math.round((l + 94) / 2) + 6, 8, t.glow, `#2b2633`, o),
    IA(a, 80, 152, 16, 20, { arched: !0, color: t.dark, double: !0 }),
    LM(a, 88, 153, 20, 2),
    KA(
      a,
      64,
      100,
      e === `pyro` ? 1 : e === `cryo` ? 2 : e === `storm` ? 3 : 4,
      26,
      9,
    ),
    KA(
      a,
      103,
      100,
      e === `pyro` ? 1 : e === `cryo` ? 2 : e === `storm` ? 3 : 4,
      26,
      9,
    ),
    N(a, 83, 123, `#2b2633`, 10, 6),
    N(a, 84, 124, t.trim, 8, 4),
    N(a, 87, 124, t.glow, 2, 4),
    e === `pyro`)
  )
    for (let e of [54, 117, 87]) {
      let t = e === 87 ? 1 : 64;
      (N(a, e, t + 4, `#5d586c`, 3, 4),
        N(a, e, t + 1, `#ff7a1a`, 3, 3),
        N(a, e + 1, t, `#ffe08a`, 1, 2),
        o.push({ x: e + 1, y: t + 2, r: 26, color: `#ff8a2a`, a: 0.9 }));
    }
  else if (e === `cryo`) {
    for (let e = 1; e < 174; e++) {
      let t = SA(e, 1, 5);
      (e > 55 && e < 120) ||
        (N(a, e, 106, `#e6f6ff`, 1, 1),
        t < 0.35 && N(a, e, 107, `#bfe3ff`, 1, 1 + Math.floor(t * 9)));
    }
    for (let e = 30; e < 146; e++) N(a, e, 62 + +(e % 5 == 0), `#f2f9ff`, 1, 2);
  } else if (e === `storm`) {
    (N(a, 87, 0, `#c98a4a`, 2, 10), N(a, 85, 8, `#8a5a2a`, 6, 2));
    for (let [e, t] of [
      [2, 0],
      [1, 1],
      [0, 2],
      [1, 3],
      [2, 3],
      [1, 4],
      [0, 5],
    ])
      N(a, 91 + e, 1 + t, `#fff36b`);
    o.push({ x: 92, y: 3, r: 22, color: `#fff7a1`, a: 0.9 });
  } else
    for (let [e, t, n] of [
      [22, 72, 10],
      [150, 76, 8],
      [36, 84, 6],
    ]) {
      for (let r = 0; r < n; r++) {
        let i = Math.max(1, Math.round((r / n) * 3));
        (N(a, e - i + 1, t + r, r < 2 ? `#f0b3ff` : `#b84dff`, i * 2, 1),
          N(a, e + i - 1, t + r, `#6a2aa0`, 1, 1));
      }
      o.push({ x: e, y: t + 5, r: 18, color: `#b84dff`, a: 0.8 });
    }
  return (F(i, wA), { c: i, ax: 0, ay: i.height, lights: o });
}
var HM = {
    w: 8,
    h: 6,
    stories: 2,
    wall: `plaster`,
    roof: it.red,
    style: `hip`,
    tex: `tile`,
    seed: 777,
    door: 0.5,
    chimney: !0,
    dormers: !0,
    boxes: !0,
    shop: { sign: `mug`, awning: [`#9c3b2e`, `#f2e6c8`] },
    lamp: !0,
  },
  UM = {
    w: 9,
    h: 6,
    stories: 2,
    wall: `stone`,
    roof: it.slate,
    style: `gable`,
    tex: `slate`,
    seed: 991,
    door: 0.5,
    chimney: !0,
    shutters: `#243b6b`,
    lamp: !0,
  };
function WM(e) {
  return {
    w: 5 + (e % 2),
    h: 4,
    stories: 1,
    wall: e % 3 == 0 ? `wood` : `plaster`,
    roof: it.thatch,
    style: `thatch`,
    tex: `thatch`,
    seed: e,
    door: 0.4,
    chimney: !0,
    shutters: `#3f6b4a`,
    boxes: !0,
  };
}
function GM() {
  let e = UA(HM),
    t = e.c.getContext(`2d`),
    n = e.c.height - 60;
  return (
    N(t, 4, n, `#2b2633`, 14, 2),
    N(t, 4, n - 3, `#2b2633`, 2, 5),
    N(t, 7, n + 2, `#2b2633`, 1, 2),
    N(t, 14, n + 2, `#2b2633`, 1, 2),
    RA(t, 4, n + 4, `mug`),
    e
  );
}
function KM() {
  let e = UA(UM),
    t = e.c.getContext(`2d`),
    n = e.c.height;
  return (
    KA(t, 30, n - 58, 0, 20, 9),
    KA(t, 104, n - 58, 0, 20, 9),
    RA(t, 65, n - 58, `lantern`),
    e
  );
}
function qM() {
  let e = UA({
      w: 4,
      h: 5,
      stories: 1,
      wall: `stone`,
      roof: it.slate,
      style: `front`,
      tex: `slate`,
      seed: 313,
      door: 0.5,
    }),
    t = e.c.getContext(`2d`);
  return (
    N(t, 30, 12, `#2b2633`, 4, 6),
    N(t, 31, 13, `#ffe08a`, 2, 4),
    {
      ...e,
      lights: [...(e.lights ?? []), { x: 32, y: 15, r: 26, color: `#ffd98a` }],
    }
  );
}
function JM(e) {
  return UA(WM(e));
}
function YM(e) {
  let t = UA({
      w: 6,
      h: 5,
      stories: 1,
      wall: `barn`,
      roof: it.brown,
      style: `gable`,
      tex: `shingle`,
      seed: e,
      door: 0.5,
    }),
    n = t.c.getContext(`2d`),
    r = t.c.height;
  (N(n, 35, r - 29, J.dk, 26, 25), N(n, 36, r - 28, `#6e2a1e`, 24, 24));
  for (let e = 0; e < 24; e++)
    (N(n, 36 + e, r - 28 + Math.floor((e * 24) / 24), `#e6d8bc`),
      N(n, 59 - e, r - 28 + Math.floor((e * 24) / 24), `#e6d8bc`));
  return (
    N(n, 47, r - 28, `#e6d8bc`, 2, 24),
    N(n, 35, r - 29, `#e6d8bc`, 26, 1),
    N(n, 42, r - 50, J.dk, 12, 9),
    N(n, 43, r - 49, `#d9b44a`, 10, 7),
    t
  );
}
function XM() {
  let [e, t] = M(96, 78),
    n = e.height;
  N(t, 3, n - 30, `#5a3a22`, 90, 26);
  for (let e = 6; e < 90; e += 22)
    (N(t, e, n - 26, `#2b1d16`, 18, 22),
      N(t, e + 2, n - 10, `#d9b44a`, 14, 6),
      N(t, e + 1, n - 16, J.lt, 16, 2));
  for (let e = 3; e < 96; e += 22) N(t, e, n - 30, J.st, 3, 26);
  return (
    N(t, 2, n - 4, CA.mid, 92, 4),
    NA(t, 0, 95, 32, n - 30, it.brown, `shingle`),
    F(e, wA),
    { c: e, ax: 0, ay: n }
  );
}
