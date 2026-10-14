// assets__index-BTsv3a2s 200 — mid
// Lines 126160-126608 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var _Y = { hi: `#ffe08a`, mid: `#ff9a2a`, lo: `#c2410c` },
  vY = { hi: `#ffffff`, mid: `#bff0ff`, lo: `#5cc8ff` },
  yY = { hi: `#fffbd1`, mid: `#fff36b`, lo: `#a8b8ff` },
  bY = { hi: `#ff9cf5`, mid: `#d06bff`, lo: `#6a2a9a` },
  xY = { hi: `#7a7480`, mid: `#4a4450`, lo: `#26222c` },
  SY = { hi: `#fffbee`, mid: `#e8dcc0`, lo: `#b0a080` },
  CY = `#7ef9ff`,
  wY = {
    cinderbornGrate: (e, t) => {
      (P(t, 8, 7, 5.5, 5.5, xY.mid),
        P(t, 8, 7, 4, 4, _Y.lo),
        P(t, 8, 7.5, 2.5, 2.5, _Y.mid),
        e(7, 7, _Y.hi, 2, 2));
      for (let t of [5, 8, 11]) e(t, 3, xY.lo, 1, 9);
      (e(4, 6, xY.lo, 9, 1),
        e(4, 9, xY.lo, 9, 1),
        e(5, 2, xY.hi, 2, 1),
        e(5, 13, xY.lo, 6, 2),
        e(12, 1, _Y.hi),
        e(2, 2, _Y.mid));
    },
    slagIronVestments: (e) => {
      (e(3, 2, xY.mid, 10, 3),
        e(1, 4, xY.mid, 3, 6),
        e(12, 4, xY.mid, 3, 6),
        e(4, 5, xY.mid, 8, 5),
        e(3, 10, xY.mid, 10, 4),
        e(9, 5, xY.lo, 3, 9),
        e(6, 2, xY.lo, 4, 1),
        e(3, 2, xY.hi, 3, 1),
        e(5, 5, _Y.mid, 1, 2),
        e(6, 7, _Y.mid),
        e(5, 8, _Y.hi),
        e(10, 10, _Y.mid, 1, 2),
        e(11, 12, _Y.lo),
        e(2, 7, _Y.mid),
        e(13, 6, _Y.lo),
        e(4, 12, _Y.mid, 2, 1),
        e(7, 4, _Y.lo, 2, 2),
        e(7, 4, _Y.hi));
    },
    mazewrightsLoupe: (e, t) => {
      (P(t, 7, 7, 5.5, 5.5, `#c28a1e`), P(t, 7, 7, 4.3, 4.3, `#1a2a3a`));
      for (let t = -3; t <= 3; t += 2)
        e(4, 7 + t, t < 0 ? CY : `#b01a2a`, 6, 1);
      (e(4, 4, CY, 1, 3),
        e(9, 6, CY, 1, 2),
        e(5, 8, `#b01a2a`, 1, 2),
        e(9, 9, `#b01a2a`, 1, 2),
        e(4, 3, `#ffd166`, 3, 1),
        iY(t, 11, 11, 14, 14, `#8a5a34`),
        iY(t, 11, 12, 13, 14, `#5e3a1f`));
    },
    keystaffOfSunder: (e, t) => {
      (iY(t, 2, 14, 9, 7, `#5a5a6a`),
        iY(t, 3, 14, 10, 7, `#34343e`),
        P(t, 11.5, 4, 3, 3, `#ffd166`),
        t.clearRect(11, 3, 2, 2),
        e(12, 2, `#fff0b0`),
        e(10, 5, `#c28a1e`),
        e(4, 10, CY, 2, 1),
        e(4, 11, CY),
        e(6, 9, `#b01a2a`, 2, 1),
        e(7, 10, `#b01a2a`));
    },
    highmoreSignet: (e, t) => {
      (oY(t, { hi: `#fff0b0`, mid: `#ffd166`, lo: `#c28a1e` }),
        e(5, 1, `#c28a1e`, 7, 6),
        e(6, 2, `#b3261e`, 5, 3),
        e(7, 5, `#b3261e`, 3, 1),
        e(8, 6, `#b3261e`),
        e(6, 3, `#ffd166`, 5, 1));
    },
    graveTokenCord: (e, t) => {
      (iY(t, 1, 2, 8, 9, `#6a5a4a`), iY(t, 14, 2, 8, 9, `#6a5a4a`));
      for (let [t, n] of [
        [2, 4],
        [4, 6],
        [11, 5],
        [9, 8],
        [13, 3],
      ])
        (e(t, n, SY.mid, 2, 2), e(t, n, SY.hi));
      (e(6, 10, `#4a4450`, 4, 4),
        e(7, 11, `#b01a2a`, 2, 2),
        e(7, 11, `#ffffff`));
    },
    pilgrimsLantern: (e) => {
      let t = { hi: `#b8b0a8`, mid: `#7a746e`, lo: `#4a4642` };
      (e(7, 1, t.lo, 2, 1),
        e(5, 2, t.mid, 6, 2),
        e(5, 4, t.lo, 1, 8),
        e(10, 4, t.lo, 1, 8),
        e(6, 4, `#1a3a48`, 4, 8),
        e(7, 5, `#4fb8e0`, 2, 5),
        e(7, 6, CY, 2, 3),
        e(8, 6, `#ffffff`),
        e(4, 12, t.mid, 8, 2),
        e(3, 3, `#8a7a5a`, 2, 1),
        e(2, 4, `#8a7a5a`, 1, 3));
    },
    hemOfThePaleChoir: (e) => {
      let t = { hi: `#ffffff`, mid: `#dfe6f0`, lo: `#aab8cc` };
      (e(4, 1, t.mid, 8, 3),
        e(3, 4, t.mid, 10, 6),
        e(9, 1, t.lo, 3, 9),
        e(2, 10, vY.mid, 12, 3),
        e(1, 12, vY.lo, 14, 2),
        e(3, 10, vY.hi, 2, 1),
        e(4, 11, `#5a7a9a`),
        e(6, 11, `#5a7a9a`),
        e(10, 11, `#5a7a9a`),
        e(12, 11, `#5a7a9a`),
        e(5, 12, `#3a5a7a`),
        e(11, 12, `#3a5a7a`),
        e(7, 3, `#b01a2a`, 2, 1));
    },
    drownedStarShard: (e, t) => {
      let n = { hi: `#9fe8ff`, mid: `#2f6fcf`, lo: `#173a78` };
      for (let t = 0; t < 12; t++) {
        let r = t < 3 ? 1 + t : 4,
          i = 8 - Math.floor(r / 2);
        (e(i, 2 + t, n.mid, r, 1),
          e(i, 2 + t, n.hi),
          e(i + r - 1, 2 + t, n.lo));
      }
      (e(7, 8, `#ffffff`, 2, 1),
        e(8, 7, `#ffffff`),
        e(7, 9, `#fff7a1`),
        e(3, 5, vY.hi),
        e(2, 8, vY.mid),
        e(12, 3, vY.hi),
        P(t, 8, 14.2, 3, 0.7, n.lo));
    },
    chainwrightsCenser: (e, t) => {
      for (let t = 0; t < 4; t++) e(7 + (t % 2), 1 + t * 2, `#8d95a8`, 1, 2);
      (P(t, 8, 11, 4, 3.5, `#3a3440`),
        e(5, 9, `#6a6070`, 6, 1),
        e(6, 11, `#b01a2a`, 4, 1),
        e(7, 11, `#ffffff`, 1, 1),
        e(11, 6, `#8a8a9a`, 2, 1),
        e(12, 5, `#6a6a7a`, 2, 1),
        e(13, 3, `#6a6a7a`),
        e(3, 7, `#6a6a7a`, 2, 1),
        e(2, 5, `#8a8a9a`));
    },
    funeralStole: (e, t) => {
      (aY(
        t,
        [
          `....hhhhhhh.....`,
          `...hmmmmmmmh....`,
          `..hmm.....mmh...`,
          `..hml.....hml...`,
          `..hml.....hml...`,
          `..hmlk...khml...`,
          `..hml.....hml...`,
          `..hml.....hml...`,
          `..hmlk...khml...`,
          `..hml.....hml...`,
          `..hml.....hml...`,
          `..kkk.....kkk...`,
          `..k.k.....k.k...`,
        ],
        { h: SY.hi, m: SY.mid, l: SY.lo, k: `#26222c` },
        0,
        1,
      ),
        e(7, 3, `#8d95a8`, 2, 2));
    },
    veilstoneSignet: (e, t) => {
      (oY(t, { hi: `#8a78b0`, mid: `#5a4a78`, lo: `#342a4a` }),
        P(t, 8, 4, 3.3, 3.3, bY.lo),
        P(t, 8, 4, 2, 2, `#140a22`),
        e(7, 3, bY.hi),
        e(9, 5, bY.mid),
        e(8, 4, `#ffffff`));
    },
    absentStep: (e) => {
      let t = { hi: `#4a3a6a`, mid: `#2a1f44`, lo: `#140a22` };
      (e(4, 2, t.mid, 5, 4),
        e(4, 2, t.hi, 1, 4),
        e(3, 2, bY.mid, 7, 1),
        e(4, 7, t.mid, 5, 2),
        e(4, 10, t.mid, 8, 1),
        e(5, 12, t.mid, 9, 1),
        e(6, 6, `#ffffff`),
        e(10, 9, `#ffffff`),
        e(3, 11, bY.hi),
        e(12, 13, bY.mid));
    },
    golemCoreHeart: (e, t) => {
      (P(t, 8, 8, 5.5, 5.2, `#7c7690`),
        P(t, 7, 7, 4, 3.8, `#a8a2b8`),
        e(10, 10, `#524c66`, 3, 2),
        e(8, 3, CY, 1, 8),
        e(7, 4, CY),
        e(9, 4, CY),
        e(6, 8, CY, 5, 1),
        e(8, 5, `#ffffff`),
        e(4, 11, `#4a7a3a`, 2, 1));
    },
    ringOfTheUnremembered: (e, t) => {
      (oY(t, { hi: `#b4b6c0`, mid: `#7d7f8a`, lo: `#4f515c` }),
        e(3, 9, `#4a7a3a`, 2, 2),
        e(12, 8, `#6a9a4a`),
        e(10, 12, `#4a7a3a`, 2, 1),
        e(6, 7, `#d8dae2`, 2, 1));
    },
    overjoyedOrb: (e, t) => {
      (e(5, 13, `#8a5a34`, 6, 2),
        e(6, 12, `#b98652`, 4, 1),
        P(t, 8, 7, 5, 4.8, `#2f9a3a`),
        P(t, 8, 7, 3.9, 3.8, `#6fdc5a`),
        e(5, 4, `#d8ffb0`, 2, 1),
        e(6, 6, `#12301a`, 1, 2),
        e(10, 6, `#12301a`, 1, 2),
        e(6, 9, `#12301a`),
        e(10, 9, `#12301a`),
        e(7, 10, `#12301a`, 3, 1));
    },
    fourGemCirclet: (e, t) => {
      (P(t, 8, 9, 6.5, 3.8, `#c3cbdb`),
        t.clearRect(4, 8, 8, 3),
        e(3, 9, `#f0f4fb`, 1, 2));
      let n = [_Y, vY, yY, bY],
        r = [2, 5, 9, 12],
        i = [8, 5, 5, 8];
      for (let t = 0; t < 4; t++)
        (e(r[t], i[t], n[t].lo, 2, 2), e(r[t], i[t], n[t].hi));
      (e(7, 3, `#ffffff`, 2, 2), e(7, 3, CY));
    },
    unfilledStaff: (e, t) => {
      (iY(t, 2, 14, 10, 6, `#8a7a6a`),
        iY(t, 3, 14, 11, 6, `#5a4a3c`),
        e(4, 11, `#ff7a1a`),
        e(5, 10, `#5cc8ff`),
        e(6, 9, `#fff36b`),
        e(7, 8, `#b84dff`),
        P(t, 11.5, 3.8, 3.5, 3.5, `#a8a2b8`),
        P(t, 11.5, 3.8, 2.4, 2.4, `#7c7690`));
      for (let [t, n] of [
        [10, 2],
        [13, 2],
        [10, 5],
        [13, 5],
      ])
        e(t, n, `#26222c`);
      (e(11, 3, CY, 2, 2), e(11, 3, `#ffffff`));
    },
    seamThread: (e, t) => {
      let n = [
        [2, 12],
        [4, 9],
        [6, 11],
        [8, 7],
        [10, 9],
        [12, 4],
      ];
      for (let e = 0; e < n.length - 1; e++)
        iY(
          t,
          n[e][0],
          n[e][1],
          n[e + 1][0],
          n[e + 1][1],
          e % 2 ? bY.hi : `#ffffff`,
        );
      (iY(t, 12, 4, 14, 1, `#dfe6f0`),
        e(13, 2, `#8d95a8`),
        e(2, 13, CY),
        e(5, 5, `#ffffff`),
        e(9, 12, bY.mid));
    },
    sluicekey: (e, t) => {
      let n = { hi: `#f0b27a`, mid: `#b8703a`, lo: `#6e3f1c` };
      (P(t, 5, 5, 3.6, 3.6, n.mid),
        P(t, 5, 5, 1.6, 1.6, `#1a2a24`),
        e(3, 3, n.hi, 2, 1),
        iY(t, 7, 7, 13, 13, n.mid),
        iY(t, 8, 7, 14, 13, n.lo),
        e(11, 12, n.mid, 2, 2),
        e(13, 10, n.mid, 2, 2),
        e(2, 6, `#5ab89a`, 2, 1),
        e(6, 2, `#5ab89a`),
        e(10, 10, `#5ab89a`),
        e(4, 4, `#ffe7a0`),
        e(14, 15, `#7fe0b0`));
    },
    brimfulorb: (e, t) => {
      (e(5, 13, `#4a3a2a`, 6, 2),
        e(6, 12, `#7a5a3a`, 4, 1),
        P(t, 8, 7, 5.2, 5, `#1f6a5a`),
        P(t, 8, 7.4, 4.2, 4, `#2f9c78`),
        e(5, 6, _Y.mid, 2, 2),
        e(9, 5, vY.lo, 2, 2),
        e(6, 9, yY.mid, 2, 2),
        e(10, 9, bY.mid, 2, 2),
        e(5, 3, `#d8fff0`, 2, 1),
        e(4, 4, `#ffffff`),
        e(12, 2, yY.hi),
        e(13, 3, yY.mid),
        e(1, 6, yY.mid));
    },
    commonsstandard: (e, t) => {
      (iY(t, 3, 15, 10, 2, `#6a4a2a`),
        iY(t, 4, 15, 11, 2, `#3e2a18`),
        e(5, 3, `#c8b89a`, 7, 6),
        e(5, 3, `#e8dcc0`, 7, 1));
      for (let t = 6; t <= 10; t += 2) e(t, 5, `#8a1a1a`, 1, 2);
      (e(6, 8, `#26222c`, 5, 1),
        e(11, 4, `#8a1a1a`),
        P(t, 11.5, 1.5, 1.6, 1.6, bY.lo),
        e(11, 1, bY.hi));
    },
    tallowlantern: (e, t) => {
      (e(6, 1, xY.lo, 4, 1),
        e(7, 0, xY.mid, 2, 1),
        e(4, 2, xY.mid, 8, 2),
        e(4, 4, xY.lo, 1, 8),
        e(11, 4, xY.lo, 1, 8),
        e(5, 4, `#3a2a18`, 6, 8),
        e(6, 8, SY.mid, 4, 4),
        e(6, 8, SY.hi, 1, 4),
        e(7, 5, `#ffcf7a`, 2, 3),
        e(7, 6, `#fff4c8`, 1, 2),
        e(3, 12, xY.mid, 10, 2),
        P(t, 8, 6, 1, 1, `#ffffff`),
        e(5, 13, `#6a6070`, 1, 1),
        e(7, 13, `#6a6070`, 1, 1),
        e(9, 13, `#6a6070`, 1, 1));
    },
    tuningfork: (e, t) => {
      (iY(t, 3, 14, 7, 9, `#8aa0c0`),
        iY(t, 4, 14, 8, 9, `#4a6080`),
        e(7, 8, vY.mid, 2, 2),
        iY(t, 7, 8, 7, 2, vY.hi),
        iY(t, 8, 8, 11, 3, vY.mid),
        e(7, 1, `#ffffff`),
        e(11, 2, `#ffffff`));
      for (let [t, n] of [
        [12, 6],
        [13, 5],
        [14, 7],
        [3, 4],
        [2, 6],
      ])
        e(t, n, vY.lo);
      P(t, 5, 14.4, 2, 0.6, `#26222c`);
    },
    netofrimewater: (e, t) => {
      (aY(
        t,
        [
          `..kmkmk.kmkmk...`,
          `..mkmkm.mkmkm...`,
          `..kmkmk.kmkmk...`,
          `..mkmkm.mkmkm...`,
          `..kmkmkkkmkmk...`,
          `...mkmkmkmkm....`,
          `...kmkmkmkmk....`,
          `....hhhhhhh.....`,
        ],
        { k: `#dff6ff`, m: `#5a86a8`, h: vY.lo },
        0,
        3,
      ),
        e(2, 3, vY.hi),
        e(13, 4, `#ffffff`),
        e(7, 11, `#ffffff`, 2, 1));
    },
    kilntongs: (e, t) => {
      (e(2, 3, `#4a2a1c`, 5, 8),
        e(9, 3, `#4a2a1c`, 5, 8),
        e(2, 3, `#7a4a2a`, 5, 1),
        e(9, 3, `#7a4a2a`, 5, 1),
        e(3, 11, `#2a1810`, 3, 3),
        e(10, 11, `#2a1810`, 3, 3),
        P(t, 8, 8, 2.4, 2.8, `#c2410c`),
        P(t, 8, 8, 1.4, 1.7, _Y.mid),
        e(8, 7, _Y.hi),
        e(4, 6, _Y.lo, 1, 3),
        e(11, 5, _Y.lo, 1, 2));
    },
    clutchheart: (e, t) => {
      (P(t, 8, 8.5, 4.6, 5.6, `#3a2a2a`),
        P(t, 7.5, 8, 3.6, 4.6, `#5a4040`),
        e(6, 4, `#8a6a6a`, 2, 1),
        iY(t, 6, 6, 9, 9, _Y.mid),
        iY(t, 9, 9, 8, 12, _Y.mid),
        iY(t, 7, 6, 10, 9, _Y.hi),
        e(9, 10, `#ffffff`),
        e(3, 13, `#2a1810`, 10, 2),
        e(12, 3, _Y.lo));
    },
    weaverslesson: (e) => {
      (e(3, 2, `#3a2a44`, 10, 12),
        e(4, 2, `#5a4468`, 9, 11),
        e(4, 12, `#e8dcc0`, 9, 1),
        e(12, 3, `#e8dcc0`, 1, 9),
        e(6, 4, `#ffffff`, 5, 1),
        e(6, 4, `#ffffff`, 1, 5),
        e(10, 4, `#ffffff`, 1, 5),
        e(6, 8, `#ffffff`, 5, 1),
        e(8, 4, `#ffffff`, 1, 5));
      let t = [_Y, vY, yY, bY];
      for (let n = 0; n < 4; n++) e(5 + n * 2, 14, t[n].mid, 1, 2);
    },
    highmoresilks: (e) => {
      (e(4, 1, `#e8d8b8`, 8, 3),
        e(3, 4, `#d8c4a0`, 10, 7),
        e(2, 11, `#b8a07a`, 12, 3),
        e(9, 1, `#b8a07a`, 3, 10),
        e(3, 4, `#ffd166`, 1, 7),
        e(12, 4, `#ffd166`, 1, 7),
        e(2, 13, `#c28a1e`, 12, 1),
        e(5, 6, _Y.mid, 2, 2),
        e(9, 8, vY.lo, 2, 2),
        e(4, 10, yY.mid, 2, 1),
        e(10, 11, bY.mid, 2, 2),
        e(7, 2, `#b3261e`, 2, 1));
    },
    thinplace: (e, t) => {
      for (let t = 0; t < 11; t++) {
        let n = t < 5 ? 3 + t * 2 : 13 - (t - 5) * 2,
          r = 8 - Math.floor(n / 2),
          i = t < 3 ? _Y : t < 6 ? vY : t < 8 ? yY : bY;
        (e(r, 3 + t, i.mid, Math.max(1, n), 1), e(r, 3 + t, i.hi));
      }
      (iY(t, 6, 4, 10, 12, `#140a22`),
        e(8, 8, `#ffffff`),
        e(3, 2, CY),
        e(13, 3, CY));
    },
    caelansstormcaller: (e, t) => {
      (iY(t, 3, 14, 10, 5, `#b98652`),
        iY(t, 4, 14, 11, 5, `#7a5a3a`),
        P(t, 11.5, 4, 2.6, 2.6, `#e8c890`),
        e(11, 2, yY.mid),
        e(12, 3, yY.mid),
        e(11, 4, yY.mid),
        e(12, 5, yY.hi),
        e(5, 11, `#3e2a18`),
        e(6, 10, `#3e2a18`),
        e(7, 9, `#3e2a18`),
        e(1, 3, yY.hi),
        e(14, 9, yY.lo));
    },
  };
