// assets__index-BTsv3a2s 44 — trim
// Lines 31886-32242 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Ih(e, t) {
  let [n, r] = M(16, 16),
    i = S[t].colors;
  ((r.fillStyle = `#140c20`), r.fillRect(0, 0, 16, 16));
  let a = typeof e == `string` ? e : e.kind,
    o = typeof e == `string` ? e : e.id,
    s = Um(`spell`, o);
  if (s)
    return (
      r.drawImage(s, 0, 0),
      (r.strokeStyle = i.trim),
      r.strokeRect(0.5, 0.5, 15, 15),
      n
    );
  let c = `#e6e9f2`,
    l = (e, t, n, a, o) => {
      for (let i = 0; i < o; i++) N(r, e + n * i, t + a * i, `#b98a52`);
      (N(r, e + n * o, t + a * o, c, 2, 2),
        N(r, e - n, t - a, i.glow),
        N(r, e - n * 2, t - a * 2, i.glow));
    };
  switch (o) {
    case `arrow`:
      return (
        l(3, 12, 1, -1, 8),
        N(r, 2, 12, i.glow),
        N(r, 3, 13, i.glow),
        (r.strokeStyle = i.trim),
        r.strokeRect(0.5, 0.5, 15, 15),
        n
      );
    case `volley`:
      return (
        l(2, 13, 1, -1, 7),
        l(2, 13, 1, 0, 9),
        l(2, 13, 0, -1, 9),
        (r.strokeStyle = i.trim),
        r.strokeRect(0.5, 0.5, 15, 15),
        n
      );
    case `arrowrain`:
      for (let e of [3, 8, 12]) l(e, 2 + (e % 3), 0, 1, 7);
      return (
        N(r, 1, 14, i.robe, 14, 1),
        (r.strokeStyle = i.trim),
        r.strokeRect(0.5, 0.5, 15, 15),
        n
      );
    case `shield`:
      return (
        [
          [3, 12],
          [3, 12],
          [3, 12],
          [3, 12],
          [3, 12],
          [4, 11],
          [4, 11],
          [5, 10],
          [6, 9],
          [7, 8],
        ].forEach(([e, t], n) => {
          (N(r, e, 3 + n, i.trim, t - e + 1, 1),
            t - e > 1 &&
              N(r, e + 1, 3 + n, n < 2 ? i.hat : i.robeDark, t - e - 1, 1));
        }),
        N(r, 7, 4, i.orb, 2, 7),
        N(r, 5, 6, i.orb, 6, 1),
        (r.strokeStyle = i.trim),
        r.strokeRect(0.5, 0.5, 15, 15),
        n
      );
    case `piercing`:
      l(2, 8, 1, 0, 11);
      for (let e of [4, 12]) N(r, 7, e, i.glow, 1, 1);
      return (
        N(r, 6, 5, i.spark, 3, 1),
        N(r, 6, 11, i.spark, 3, 1),
        N(r, 6, 5, i.spark, 1, 7),
        N(r, 8, 5, i.spark, 1, 7),
        (r.strokeStyle = i.trim),
        r.strokeRect(0.5, 0.5, 15, 15),
        n
      );
    case `explosive`:
      return (
        l(2, 13, 1, -1, 6),
        P(r, 11, 5, 3.5, 3.5, `#ff7a1a`),
        P(r, 11, 5, 2, 2, `#ffd166`),
        N(r, 11, 5, `#ffffff`),
        (r.strokeStyle = i.trim),
        r.strokeRect(0.5, 0.5, 15, 15),
        n
      );
    case `scatter`:
      for (let e = 0; e < 8; e++) {
        let t = (e / 8) * Math.PI * 2,
          n = Math.round(Math.cos(t)),
          r = Math.round(Math.sin(t));
        l(8 + n * 2, 8 + r * 2, n, r, 3);
      }
      return (
        N(r, 7, 7, i.spark, 2, 2),
        (r.strokeStyle = i.trim),
        r.strokeRect(0.5, 0.5, 15, 15),
        n
      );
    case `shieldbash`:
      [
        [2, 9],
        [2, 9],
        [2, 9],
        [3, 8],
        [4, 7],
        [5, 6],
      ].forEach(([e, t], n) => {
        (N(r, e, 5 + n, i.trim, t - e + 1, 1),
          t - e > 1 && N(r, e + 1, 5 + n, i.robeDark, t - e - 1, 1));
      });
      for (let [e, t] of [
        [12, 4],
        [13, 7],
        [12, 10],
        [11, 7],
      ])
        N(r, e, t, `#ffffff`, 2, 1);
      return (
        N(r, 14, 6, i.spark, 1, 3),
        (r.strokeStyle = i.trim),
        r.strokeRect(0.5, 0.5, 15, 15),
        n
      );
    case `aegis`:
      for (let e = Math.PI; e <= Math.PI * 2 + 0.01; e += 0.1)
        N(r, 8 + Math.cos(e) * 6, 12 + Math.sin(e) * 7, i.spark);
      for (let e = Math.PI + 0.3; e <= Math.PI * 2 - 0.3; e += 0.18)
        N(r, 8 + Math.cos(e) * 4, 12 + Math.sin(e) * 4.6, i.glow);
      return (
        N(r, 1, 12, i.trim, 14, 1),
        N(r, 7, 7, `#ffffff`, 2, 2),
        (r.strokeStyle = i.trim),
        r.strokeRect(0.5, 0.5, 15, 15),
        n
      );
    case `slash`:
    case `twinslash`:
      for (let e = -2.6; e <= 0.4; e += 0.12)
        (N(r, 8 + Math.cos(e) * 6, 9 + Math.sin(e) * 6, i.spark),
          N(
            r,
            8 + Math.cos(e) * 4.8,
            9 + Math.sin(e) * 4.8,
            e > -1.2 ? i.glow : i.orb,
          ),
          o === `twinslash` &&
            N(r, 8 + Math.cos(e) * 3.4, 9 + Math.sin(e) * 3.4, i.spark));
      for (let e = 0; e < 5; e++) N(r, 13 - e, 12 - e, e < 4 ? c : i.trim);
      return (
        N(r, 13, 13, i.trim, 2, 2),
        (r.strokeStyle = i.trim),
        r.strokeRect(0.5, 0.5, 15, 15),
        n
      );
    case `cleave`:
      for (let e = -2.2; e <= -0.4; e += 0.1)
        N(r, 7 + Math.cos(e) * 5.5, 10 + Math.sin(e) * 5.5, i.spark, 2, 1);
      for (let e = 0; e < 7; e++) N(r, 4 + e, 13 - e, i.trim);
      return (
        N(r, 9, 4, c, 4, 4),
        N(r, 12, 3, c, 2, 6),
        N(r, 9, 4, `#ffffff`, 1, 1),
        (r.strokeStyle = i.trim),
        r.strokeRect(0.5, 0.5, 15, 15),
        n
      );
    case `thrust`:
      for (let e = 0; e < 9; e++) N(r, 2 + e, 8, i.trim);
      (N(r, 11, 7, c, 2, 3), N(r, 13, 8, c, 1, 1));
      for (let e of [5, 11])
        for (let t = 0; t < 5; t++) N(r, 5 + t * 2, e, i.spark);
      return ((r.strokeStyle = i.trim), r.strokeRect(0.5, 0.5, 15, 15), n);
    case `sweep`:
      for (let e = -3.9; e <= 0.6; e += 0.1)
        N(
          r,
          8 + Math.cos(e) * 6,
          8.5 + Math.sin(e) * 5.5,
          e > -1 ? i.glow : i.spark,
        );
      for (let e = 0; e < 6; e++) N(r, 5 + e, 11 - e, i.trim);
      return (
        N(r, 10, 3, c, 3, 4),
        N(r, 9, 4, c, 1, 2),
        (r.strokeStyle = i.trim),
        r.strokeRect(0.5, 0.5, 15, 15),
        n
      );
    case `stab`: {
      let [e, t] = M(16, 16);
      for (let e = 0; e < 7; e++)
        (N(t, 7 + e, 8 - e, e < 6 ? c : `#ffffff`),
          N(t, 7 + e, 9 - e, `#8d96ac`));
      N(t, 14, 1, `#ffffff`);
      for (let [e, n] of [
        [4, 7],
        [5, 8],
        [6, 9],
        [7, 10],
        [8, 11],
      ])
        N(t, e, n, `#d8b46a`);
      for (let [e, n, r] of [
        [5, 10, 0],
        [4, 11, 1],
        [3, 12, 0],
        [5, 11, 1],
        [4, 12, 0],
      ])
        N(t, e, n, r ? i.hat : `#6b4424`);
      (N(t, 2, 13, `#d8b46a`, 2, 2), F(e, `#05030a`), r.drawImage(e, 0, 0));
      for (let [e, t] of [
        [9, 13],
        [10, 12],
        [11, 11],
      ])
        N(r, e, t, i.glow);
      for (let [e, t] of [
        [2, 6],
        [3, 5],
        [4, 4],
      ])
        N(r, e, t, i.glow);
      return (
        N(r, 12, 10, i.spark),
        N(r, 5, 3, i.spark),
        (r.strokeStyle = i.trim),
        r.strokeRect(0.5, 0.5, 15, 15),
        n
      );
    }
    case `veilstep`: {
      let e = [
          `................`,
          `......HHHH......`,
          `.....HHHHHH.....`,
          `.....HHHHSSS....`,
          `.....HHHHSES....`,
          `.....HHHHSSS....`,
          `......HHHHHH....`,
          `.....CCCCCCCC...`,
          `....CCCCCCCCC...`,
          `...CCCCCCCCCCC..`,
          `...CCCCCCCCCCC..`,
          `..CCCCCCCCCCCC..`,
          `..CCCCCCCCCCCC..`,
          `...CCC.CCCC.CC..`,
        ],
        [t, a] = M(16, 16);
      (e.forEach((e, t) => {
        let n = e.search(/[^.][.]*$/);
        for (let o = 0; o < 16; o++) {
          let s = e[o];
          s !== `.` &&
            (s === `S` || s === `E`
              ? N(a, o, t, s === `E` ? i.orb : `#0b1418`)
              : o <= 5
                ? (o <= 3 ? (o * 3 + t) % 4 == 0 : (o + t) % 2 == 0) &&
                  N(r, o, t, o <= 3 ? i.spark : i.glow)
                : N(
                    a,
                    o,
                    t,
                    o === n || t === 1 ? i.trim : o <= 7 ? `#3f8f86` : i.glow,
                  ));
        }
      }),
        F(t, `#05030a`),
        r.drawImage(t, 0, 0));
      for (let [e, t] of [
        [1, 4],
        [2, 7],
        [1, 11],
        [3, 2],
        [1, 14],
      ])
        N(r, e, t, i.spark);
      return ((r.strokeStyle = i.trim), r.strokeRect(0.5, 0.5, 15, 15), n);
    }
  }
  switch (a) {
    case `bolt`:
      for (let e = 0; e < 6; e++) N(r, 2 + e, 12 - e, i.robe, 2, 2);
      (P(r, 10.5, 5.5, 3.5, 3.5, i.glow),
        P(r, 10.5, 5.5, 2, 2, i.orb),
        N(r, 10, 5, `#fff`));
      break;
    case `nova`:
      (P(r, 8, 8, 6.5, 6.5, i.glow),
        P(r, 8, 8, 5, 5, `#140c20`),
        P(r, 8, 8, 2, 2, i.orb));
      break;
    case `strike`:
      for (let e = 0; e < 7; e++) N(r, 12 - e, 1 + e, i.spark, 2, 1);
      (P(r, 6, 10, 4, 3, i.glow),
        P(r, 6, 10, 2, 1.5, i.orb),
        N(r, 1, 14, i.robe, 14, 1));
      break;
    case `chain`: {
      let e = [
        [2, 2],
        [7, 6],
        [4, 9],
        [10, 11],
        [13, 14],
      ];
      for (let t = 0; t < e.length - 1; t++) {
        let [n, a] = e[t],
          [o, s] = e[t + 1];
        for (let e = 0; e <= 8; e++)
          N(
            r,
            n + ((o - n) * e) / 8,
            a + ((s - a) * e) / 8,
            e % 2 ? i.spark : `#fff`,
          );
      }
      break;
    }
    case `rift`:
      for (let e = 0; e < 26; e++) {
        let t = e * 0.25;
        N(
          r,
          8 + Math.cos(e * 0.6) * t,
          8 + Math.sin(e * 0.6) * t,
          e % 3 ? i.glow : i.orb,
        );
      }
      break;
    case `drain`:
      (P(r, 5, 6, 2.5, 2.5, i.glow), P(r, 10, 6, 2.5, 2.5, i.glow));
      for (let e = 0; e < 5; e++) N(r, 3 + e, 7 + e, i.glow, 10 - e * 2, 1);
      N(r, 5, 5, `#fff`);
      break;
    case `blink`:
      for (let e = 0; e < 4; e++)
        N(r, 2 + e * 3, 11 - e * 2, e === 3 ? i.orb : i.robe, 2, 3);
      P(r, 13, 4, 2, 2, `#fff`);
      break;
    case `dash`:
      for (let e = 0; e < 3; e++)
        N(r, 2 + e * 2, 11 - (e % 2), `#a89878`, 2, 1);
      (N(r, 9, 8, i.robe, 4, 3), N(r, 12, 7, i.trim, 2, 2));
      for (let e = 0; e < 4; e++) N(r, 3 + e * 2, 12, i.glow, 1, 1);
  }
  return ((r.strokeStyle = i.trim), r.strokeRect(0.5, 0.5, 15, 15), n);
}
