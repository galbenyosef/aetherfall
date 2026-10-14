// index-BTsv3a2s 141 — a6a3a
// Lines 85805-86139 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function $I(e, t, n, r, i) {
  let a = SA(i, n, 5);
  switch (t) {
    case `bread`:
      return (
        P(e, n + 3, r - 2, 3.5, 2, `#c98a4a`),
        N(e, n + 1, r - 3, `#e6b070`, 3, 1),
        N(e, n + 2, r - 2, `#9a5a2a`),
        8
      );
    case `bottles`:
    case `potions`: {
      let a =
        t === `bottles`
          ? [`#3f6b4a`, `#6b3a2a`, `#8a6f2e`][i % 3]
          : [`#5ccf4f`, `#e0417a`, `#44c9f0`, `#b58aff`, `#ffd166`][i % 5];
      return (
        N(e, n + 1, r - 5, a, 3, 5),
        N(e, n + 2, r - 7, a, 1, 2),
        N(e, n + 1, r - 5, I(a, 0.4)),
        N(e, n + 2, r - 8, `#8a6a3a`),
        5
      );
    }
    case `gems`: {
      let t = [`#44c9f0`, `#b58aff`, `#e0417a`, `#5ccf4f`, `#ffd166`][i % 5];
      return (
        N(e, n + 1, r - 3, t, 3, 3),
        N(e, n + 2, r - 4, t),
        N(e, n + 1, r - 3, `#ffffff`),
        5
      );
    }
    case `fabric`: {
      let t = [
        EA.pyro.robe,
        EA.cryo.robe,
        EA.storm.robe,
        EA.void.robe,
        `#c9b48a`,
        `#e6ddf5`,
      ][i % 6];
      return (
        N(e, n, r - 4, t, 6, 4),
        N(e, n, r - 4, I(t, 0.3), 6, 1),
        N(e, n + 5, r - 4, I(t, -0.3), 1, 4),
        7
      );
    }
    case `goods`: {
      let t = i % 3;
      return (
        t === 0
          ? (N(e, n, r - 5, `#c9b48a`, 5, 5),
            N(e, n, r - 5, `#e6d8bc`, 5, 1),
            N(e, n + 1, r - 6, `#8a6a3a`, 3, 1))
          : t === 1
            ? (P(e, n + 2.5, r - 3, 2.5, 3, `#9fc4e8`),
              N(e, n + 1, r - 6, `#8a6a3a`, 3, 1))
            : (N(e, n, r - 4, `#9c6c40`, 6, 4),
              N(e, n, r - 4, `#b88a52`, 6, 1)),
        7
      );
    }
    case `cheese`:
      return (
        P(e, n + 3, r - 2, 3.5, 2.2, `#f2c84a`),
        N(e, n, r - 2, `#d9a93a`, 7, 2),
        N(e, n + 2, r - 3, `#fff3c4`),
        8
      );
    case `ice`:
    case `fish`:
      return (
        t === `ice` && N(e, n - 1, r - 2, `#dff6ff`, 9, 2),
        N(e, n, r - 4, `#8fb3c8`, 6, 2),
        N(e, n + 6, r - 5, `#6f93a8`, 2, 4),
        N(e, n + 1, r - 4, `#dff6ff`),
        9
      );
    case `books`: {
      let t = [`#7a2f2a`, `#2f4a6b`, `#3f6b4a`, `#6b3b6e`, `#8a6f2e`][i % 5];
      return (
        N(e, n, r - 3, t, 6, 3),
        N(e, n, r - 3, `#f2e6c8`, 6, 1),
        a < 0.5 && N(e, n + 1, r - 5, I(t, 0.3), 5, 2),
        7
      );
    }
    case `scrolls`:
      return (
        N(e, n, r - 3, `#f2e6c8`, 7, 3),
        N(e, n, r - 3, `#c9b48a`, 1, 3),
        N(e, n + 6, r - 3, `#c9b48a`, 1, 3),
        8
      );
    case `boots`:
      return (
        N(e, n, r - 5, `#6b4424`, 3, 5),
        N(e, n, r - 1, `#6b4424`, 5, 1),
        N(e, n + 1, r - 5, `#8a5a34`, 1, 4),
        6
      );
    case `candles`:
      return (
        N(e, n + 1, r - 6, [`#f2e6c8`, `#e6c47a`, `#c2362f`][i % 3], 2, 6),
        N(e, n + 1, r - 7, `#ffd166`, 1, 1),
        4
      );
    case `lanterns`:
      return (
        N(e, n, r - 7, `#2b2633`, 5, 7),
        N(e, n + 1, r - 6, `#ffd98a`, 3, 5),
        7
      );
    case `mugs`:
      return (
        N(e, n, r - 4, `#b9b3c7`, 3, 4),
        N(e, n + 3, r - 3, `#8c8698`, 1, 2),
        N(e, n, r - 4, `#f2e6c8`, 3, 1),
        6
      );
    case `blades`:
      return (
        N(e, n, r - 2, `#c9ced8`, 9, 1),
        N(e, n, r - 1, `#8c8698`, 9, 1),
        N(e, n + 9, r - 3, `#e0b64a`, 1, 3),
        N(e, n + 10, r - 2, J.dk, 2, 1),
        13
      );
    case `tools`:
      return (
        N(e, n, r - 2, J.dk, 5, 1),
        N(e, n + 5, r - 3, `#6f7580`, 2, 3),
        9
      );
    case `orbs`: {
      let t = EA[VI[i % 4]];
      return (
        P(e, n + 2, r - 3, 2.5, 2.5, t.glow),
        N(e, n + 1, r - 4, t.orb),
        N(e, n, r - 1, `#3b3548`, 5, 1),
        7
      );
    }
    case `herbs`:
      return (
        N(e, n, r - 3, `#c9a86a`, 6, 3),
        N(e, n + 1, r - 5, [`#5f8f3a`, `#7aa84a`, `#8e9a4a`][i % 3], 4, 2),
        7
      );
    case `letters`:
      return (
        N(e, n, r - 2, `#f2e6c8`, 7, 2),
        N(e, n + 1, r - 2, `#8a7a5c`, 5, 1),
        9
      );
  }
  return 6;
}
function eL(e, t, n = 22) {
  return ZI(e, 1, n, (e, r, i) => {
    let a = i - 16 - n + 4;
    (N(e, 0, a, J.dk, r, i - a),
      N(e, 2, a + 2, `#3a2416`, r - 4, i - a - 4),
      N(e, 0, a, J.lt, r, 2));
    let o = t === `weapons` || t === `staves` ? [] : [a + 12, a + 22, a + 32];
    for (let n of o) {
      if (n > i - 3) continue;
      N(e, 2, n, J.lt, r - 4, 2);
      let a = 4,
        o = 0;
      for (; a < r - 8;)
        if (t === null) {
          let t = 6 + Math.floor(SA(a, n, 3) * 4),
            r = [
              `#7a2f2a`,
              `#2f4a6b`,
              `#3f6b4a`,
              `#6b3b6e`,
              `#8a6f2e`,
              `#4a4458`,
            ][Math.floor(SA(a, n, 4) * 6)];
          (N(e, a, n - t, r, 2, t),
            N(e, a, n - t + 1, I(r, 0.35), 2, 1),
            (a += SA(a, n, 5) < 0.12 ? 4 : 2));
        } else a += $I(e, t, a, n, o++);
    }
    if (t === `weapons` || t === `staves`) {
      (N(e, 2, a + 8, J.lt, r - 4, 2), N(e, 2, i - 6, J.lt, r - 4, 2));
      for (let n = 5, o = 0; n < r - 5; n += 6, o++)
        if (t === `staves`) {
          let t = EA[VI[o % 4]];
          (N(e, n, a + 6, J.st, 1, i - a - 8),
            P(e, n + 0.5, a + 5, 2, 2, t.glow),
            N(e, n, a + 4, t.orb));
        } else
          (N(e, n, a + 3, `#c9ced8`, 2, i - a - 12),
            N(e, n, a + 3, `#ffffff`, 1, 3),
            N(e, n - 2, i - 10, `#e0b64a`, 6, 1),
            N(e, n, i - 9, J.dk, 2, 4));
    }
  });
}
function tL(e, t) {
  return t === `weapons` || t === `staves`
    ? eL(e, t)
    : t === `shields`
      ? ZI(e, 1, 22, (e, t, n) => {
          let r = n - 34;
          (N(e, 0, r, J.dk, t, 3), N(e, 0, r, J.lt, t, 1));
          for (let n = 3, i = 0; n < t - 10; n += 12, i++) {
            let t = [DA.field, `#8c8698`, `#7a2f2a`][i % 3];
            (N(e, n, r + 4, t, 10, 12),
              N(e, n + 1, r + 16, t, 8, 3),
              N(e, n + 3, r + 19, t, 4, 2),
              N(e, n, r + 4, I(t, 0.3), 10, 1),
              N(e, n + 4, r + 6, `#e0b64a`, 2, 10),
              N(e, n + 1, r + 10, `#e0b64a`, 8, 2));
          }
          N(e, 0, n - 4, J.st, t, 4);
        })
      : eL(
          e,
          t === `herbs`
            ? `herbs`
            : t === `boots`
              ? `boots`
              : t === `candles`
                ? `candles`
                : t === `lanterns`
                  ? `lanterns`
                  : `goods`,
        );
}
function nL(e, t) {
  return ZI(e, 1, 6, (e, n, r) => {
    QI(e, 0, r, n, 8, 12, `#b88a52`, `#6b4424`);
    for (let t = 6; t < n; t += 8) N(e, t, r - 11, `#553620`, 1, 11);
    if ((N(e, 0, r - 12, `#9a6a3a`, n, 1), t)) {
      let i = 5,
        a = 0;
      for (; i < n - 10;)
        ((i += $I(e, t, i, r - 13, a++) + 3), a % 3 == 2 && (i += 6));
    }
  });
}
function rL(e, t) {
  return ZI(e, 1, 4, (e, n, r) => {
    (N(e, 3, r - 8, J.dk, 2, 8),
      N(e, n - 5, r - 8, J.dk, 2, 8),
      QI(e, 0, r - 6, n, 10, 4, `#a8744a`, `#6b4424`),
      t === `candles`
        ? (N(e, n / 2 - 1, r - 20, `#f2e6c8`, 2, 5),
          N(e, n / 2 - 1, r - 22, `#ffd166`, 2, 2))
        : t &&
          ($I(e, t, 5, r - 12, 0),
          $I(e, t, n - 12, r - 13, 1),
          t === `mugs` && $I(e, t, n / 2 - 1, r - 14, 2)));
  });
}
function iL(e, t) {
  return ZI(e, 1, 12, (e, n, r) => {
    (N(e, 2, r - 10, J.dk, 2, 10),
      N(e, n - 4, r - 10, J.dk, 2, 10),
      N(e, 2, r - 4, J.mid, n - 4, 1),
      QI(e, 0, r - 8, n, 8, 3, `#9a6a3a`, `#5a3a22`));
    let i = r - 13;
    switch (t) {
      case `dough`:
        (P(e, n / 2, i + 1, 7, 3, `#f2e6c8`),
          P(e, n / 2 - 2, i, 3, 1.5, `#fff9ee`),
          N(e, 4, i + 1, `#8a6a3a`, 8, 2));
        break;
      case `alembic`:
        (P(e, 10, i - 3, 4, 4, `#bff0d0`),
          P(e, 10, i - 2, 3, 2.5, `#5ccf4f`),
          N(e, 12, i - 10, `#bff0d0`, 1, 6));
        for (let t = 0; t < 10; t++)
          N(e, 13 + t, i - 10 + Math.floor(t / 2), `#bff0d0`);
        (N(e, 23, i - 5, `#9fc4e8`, 4, 5),
          N(e, 6, i + 1, `#3b3548`, 8, 2),
          N(e, 8, i + 2, `#ff8a2a`, 4, 1));
        for (let t = 0; t < 4; t++) $I(e, `potions`, 32 + t * 6, i + 3, t);
        break;
      case `lathe`:
        (N(e, 6, i - 3, `#4a4458`, 4, 4),
          N(e, n - 14, i - 3, `#4a4458`, 4, 4),
          N(e, 10, i - 2, `#c98a4a`, n - 24, 2),
          N(e, 10, i - 2, `#e6b070`, n - 24, 1));
        for (let t = 0; t < 6; t++) N(e, 14 + t * 5, i + 2, `#e6c872`, 2, 1);
        break;
      case `gemwheel`:
        (P(e, 12, i - 3, 5, 5, `#8c8698`),
          P(e, 12, i - 3, 2, 2, `#4a4458`),
          N(e, 18, i - 3, DA.hi, 1, 1),
          N(e, 20, i - 5, DA.crystal, 1, 1));
        for (let t = 0; t < 4; t++) $I(e, `gems`, 30 + t * 6, i + 3, t + 1);
        break;
      case `sewing`:
        (N(e, 6, i - 1, EA.storm.robe, 14, 3),
          N(e, 6, i - 1, EA.storm.trim, 14, 1));
        for (let t = 0; t < 4; t++) {
          let n = [EA.pyro.robe, EA.cryo.robe, `#e6ddf5`, EA.void.trim][t];
          (N(e, 26 + t * 5, i - 2, n, 3, 4),
            N(e, 26 + t * 5, i - 2, `#c9b48a`, 3, 1));
        }
        N(e, 48, i, `#c9ced8`, 6, 1);
        break;
      case `mortar`:
        (P(e, 10, i, 4, 3, `#8c8698`),
          N(e, 7, i - 2, `#6f7580`, 6, 1),
          N(e, 11, i - 6, `#b9b3c7`, 2, 5));
        for (let t = 0; t < 4; t++) $I(e, `herbs`, 22 + t * 8, i + 2, t);
        break;
      case `cobbler`:
        (N(e, 8, i - 3, `#4a4458`, 3, 4),
          N(e, 6, i - 5, `#6b4424`, 7, 3),
          N(e, 18, i - 1, `#8a5a34`, 12, 3),
          $I(e, `boots`, 36, i + 2, 0),
          $I(e, `boots`, 44, i + 2, 1));
        break;
      default:
        for (let t = 0; t < 5; t++) $I(e, `tools`, 5 + t * 11, i + 2, t);
    }
  });
}
function aL() {
  return ZI(1, 1, 0, (e, t, n) => {
    (N(e, 5, n - 6, J.dk, 1, 5),
      N(e, 10, n - 6, J.dk, 1, 5),
      P(e, 8, n - 8, 5, 2.5, `#9a6a3a`),
      P(e, 8, n - 9, 4, 1.5, `#b88a52`));
  });
}
