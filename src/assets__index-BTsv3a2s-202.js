// assets__index-BTsv3a2s 202 — trim
// Lines 126954-127301 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function UY(e) {
  return fY(`remains:${e}`, () => {
    let [t, n] = M(20, 16),
      r = rY(n),
      i = S[e].colors;
    return (
      (n.fillStyle = `rgba(0,0,0,0.35)`),
      n.fillRect(4, 14, 13, 2),
      n.fillRect(3, 13, 15, 1),
      r(3, 4, `#5e4426`, 1, 4),
      r(4, 3, `#5e4426`, 12, 1),
      r(16, 4, `#5e4426`, 1, 4),
      P(n, 10, 10, 7, 4.2, `#7a5a36`),
      P(n, 9, 9.4, 5, 2.8, `#9c7646`),
      r(4, 6, `#6a4c2c`, 12, 3),
      r(5, 6, `#82603a`, 10, 1),
      r(4, 9, `#4e3820`, 12, 1),
      r(9, 8, `#ffd166`, 2, 2),
      r(10, 8, `#a8842a`),
      r(13, 10, i.robe, 2, 3),
      r(15, 12, i.robe, 2, 1),
      r(16, 13, i.robeDark, 2, 1),
      r(13, 10, i.trim),
      F(t, nY),
      t
    );
  });
}
function WY(e) {
  return fY(`grave:${e}`, () => {
    let [t, n] = M(18, 24),
      r = rY(n),
      i = S[e].colors;
    return (
      (n.fillStyle = `rgba(0,0,0,0.35)`),
      n.fillRect(2, 22, 14, 2),
      r(5, 2, `#8a8a92`, 8, 1),
      r(4, 3, `#8a8a92`, 10, 1),
      r(3, 4, `#8a8a92`, 12, 16),
      r(4, 4, `#a4a4ac`, 3, 15),
      r(13, 4, `#6a6a72`, 2, 16),
      r(8, 7, `#4a4a52`, 2, 6),
      r(6, 9, `#4a4a52`, 6, 1),
      r(11, 14, `#5a5a62`, 1, 2),
      r(12, 16, `#5a5a62`, 1, 2),
      r(3, 17, i.robe, 12, 1),
      r(3, 18, i.trim, 12, 1),
      r(1, 20, `#5a4630`, 16, 2),
      r(13, 19, `#7a5a36`, 4, 2),
      r(14, 18, `#5e4426`, 3, 1),
      F(t, nY),
      t
    );
  });
}
var GY = new Map(),
  KY = 64;
function qY(e, t, n = 64, r = !1) {
  let i = `${e}|${t}|${n}|${r}`,
    a = GY.get(i);
  return (
    a ||
      ((a = JY(e, t, n, r)),
      GY.size >= KY && GY.delete(GY.keys().next().value),
      GY.set(i, a)),
    a
  );
}
function JY(e, t, n, r) {
  let [i, a] = M(12, n),
    [o, s, c] = Lp(r ? va.color : e),
    l = 0.75 + 0.25 * Math.sin(t * 0.2);
  for (let e = 0; e < n; e++) {
    let t = (e / n) ** 1.6 * l;
    ((a.fillStyle = `rgba(${o},${s},${c},${(t * 0.35).toFixed(3)})`),
      a.fillRect(2, e, 8, 1),
      (a.fillStyle = `rgba(${o},${s},${c},${(t * 0.75).toFixed(3)})`),
      a.fillRect(4, e, 4, 1),
      (a.fillStyle = r
        ? `rgba(255,255,255,${(t * 0.9).toFixed(3)})`
        : `rgba(255,255,255,${(t * 0.6).toFixed(3)})`),
      a.fillRect(5, e, 2, 1));
  }
  for (let e = 0; e < 3; e++) {
    let i = n - 4 - ((t * 1.3 + (n / 3) * e) % (n - 6));
    N(a, 3 + ((e * 3 + t) % 6), i, r ? `#ffffff` : `rgb(${o},${s},${c})`);
  }
  return i;
}
var YY = new WeakMap();
function XY(e, t) {
  let n = Math.round(Math.sin(t * 0.15) * 1.5),
    r = e.rarity === `plain` || e.rarity === `kindled`,
    i = r ? zY(e.rarity) : FY(e),
    a = YY.get(i);
  a || YY.set(i, (a = new Map()));
  let o = a.get(n);
  if (!o) {
    let e;
    (([o, e] = M(18, 22)),
      (e.fillStyle = `rgba(0,0,0,0.35)`),
      e.fillRect(4, 19, 10, 2),
      e.fillRect(5, 18, 8, 1),
      r
        ? e.drawImage(i, i.width > 12 ? 0 : 3, (i.width > 12 ? 0 : 7) + n)
        : e.drawImage(i, 1, 1 + n),
      a.set(n, o));
  }
  return o;
}
function ZY(e) {
  return fY(`empty:${e}`, () => {
    let t = gY(e, 1, `pyro`, !1),
      [n, r] = M(16, 16);
    return (
      r.drawImage(t, 0, 0),
      (r.globalCompositeOperation = `source-in`),
      (r.fillStyle = `rgba(160,140,200,0.18)`),
      r.fillRect(0, 0, 16, 16),
      n
    );
  });
}
var QY = {
    1: (e) => S[e].colors.robeDark,
    2: (e) => S[e].colors.trim,
    3: () => `#ffd166`,
    4: () => `#fff0b0`,
  },
  $Y = {
    robe: `#5a0a1a`,
    robeDark: `#2a0610`,
    trim: `#b01a2a`,
    hat: `#4a0a16`,
    hatDark: `#26050c`,
    band: `#b01a2a`,
  };
function eX(e) {
  if (e.hollowed) return $Y;
  if (e.unique === `slagIronVestments`)
    return { robe: `#4a4450`, robeDark: `#26222c`, trim: `#ff9a2a` };
  if (e.unique === `hemOfThePaleChoir`)
    return { robe: `#dfe6f0`, robeDark: `#9aa8bc`, trim: `#5cc8ff` };
  if (e.unique === `highmoresilks`)
    return { robe: `#d8c4a0`, robeDark: `#9a8460`, trim: `#ffd166` };
  let t = S[e.school ?? `pyro`].colors;
  return {
    robe: t.robe,
    robeDark: t.robeDark,
    trim: QY[ma(e.ilvl)](e.school ?? `pyro`),
  };
}
function tX(e) {
  if (e.hollowed) return $Y;
  if (e.unique === `mazewrightsLoupe`)
    return { hat: `#4a5068`, hatDark: `#2e3346`, band: `#c28a1e` };
  let t = S[e.school ?? `pyro`].colors;
  return {
    hat: t.hat,
    hatDark: t.hatDark,
    band: QY[ma(e.ilvl)](e.school ?? `pyro`),
  };
}
var nX = {
  pyro: `#ff7a1a`,
  cryo: `#9fe8ff`,
  storm: `#fff36b`,
  void: `#d06bff`,
  marksman: `#9ad65a`,
  paladin: `#f5d66b`,
  scout: `#6fd6c8`,
};
function rX(e) {
  return e
    ? `${e.unique ?? e.base}.${ma(e.ilvl)}.${e.school ?? ``}.${e.hollowed ? `h` : ``}`
    : `-`;
}
function iX(e, t) {
  let n = aX(e, t);
  return fh(n.key, n.colors, n.decorate);
}
function aX(e, t) {
  let { hat: n, robe: r } = t,
    i = t.tone ?? e,
    a = S[e].colors,
    o = { ...a },
    s = r ? eX(r) : null,
    c = n ? tX(n) : null;
  (s && Object.assign(o, s),
    c && Object.assign(o, { hat: c.hat, hatDark: c.hatDark }));
  let l = c?.band ?? o.trim,
    u = n ? ma(n.ilvl) : 2,
    d = r ? ma(r.ilvl) : 2,
    f = n ? S[n.school ?? e].colors.orb : a.orb,
    p = n?.unique === `fourGemCirclet`;
  return {
    key: `worn:${e}:${rX(n)}:${rX(r)}:${p ? i : ``}`,
    colors: o,
    decorate: (e, t, s, c, m) => {
      let h = (t, n, r, i = 1, a = 1) => N(e, t + 2, n + 2, r, i, a),
        g = t === 2,
        _ = t === 1,
        v = s;
      if (p) {
        if ((e.clearRect(0, 0, e.canvas.width, 7 + v + 2), !m)) {
          let e = g ? 12 : _ ? 2 : 13,
            t = 7 + (c ? -3 : 0) + s;
          for (let n = t; n <= 6 + v; n++)
            h(e, n, n === t + 1 ? `#9a6a3a` : `#6b4424`);
          (h(e - 1, t - 3, a.orb, 3, 3),
            h(e, t - 4, a.orb),
            h(e, t - 2, `#ffffff`),
            h(e + 1, t - 3, a.glow));
        }
        let t = nX[i];
        (_
          ? h(5, 5 + v, t, 6, 7)
          : g
            ? (h(6, 5 + v, t, 5, 2), h(5, 6 + v, t, 1, 5))
            : (h(5, 5 + v, t, 6, 2),
              h(4, 6 + v, t, 1, 5),
              h(11, 6 + v, t, 1, 5)),
          h(g ? 6 : 5, 6 + v, `#c3cbdb`, g ? 5 : 6, 1),
          _ ||
            [`#ff9a2a`, `#bff0ff`, `#fff36b`, `#d06bff`].forEach((e, t) =>
              g
                ? t < 2 && h(8 + t * 2, 6 + v, e)
                : h(5 + t + +(t >= 2), 6 + v, e),
            ));
        return;
      }
      if (
        (n &&
          (h(4, 5 + v, l, 8, 1),
          _ || h(7, 3 + v, u === 1 ? o.hatDark : l),
          u >= 3 && !_ && h(g ? 9 : 7, 5 + v, f),
          u === 4 && h(g ? 2 : 8, -1 + v, `#ffffff`),
          n.unique === `mazewrightsLoupe` && !_) &&
          (h(8, 8 + v, `#c28a1e`, 3, 1),
          h(8, 10 + v, `#c28a1e`, 3, 1),
          h(10, 9 + v, `#c28a1e`),
          h(9, 9 + v, `#7ef9ff`)),
        r)
      ) {
        let e = s;
        if (
          (d >= 3 && !g && h(6, 12 + e, o.trim, 4, 1),
          d >= 3 && g && h(7, 12 + e, o.trim, 3, 1),
          d === 4 &&
            !_ &&
            (h(g ? 7 : 5, 18 + e, `#ffffff`), h(g ? 9 : 10, 15 + e, `#ffffff`)),
          r.unique === `slagIronVestments` &&
            (h(g ? 7 : 6, 14 + e, `#ff9a2a`),
            h(g ? 8 : 9, 18 + e, `#ff9a2a`),
            h(g ? 9 : 5, 19 + e, `#c2410c`),
            _ || h(g ? 9 : 7, 13 + e, `#ffe08a`, g ? 1 : 2, 1)),
          r.unique === `hemOfThePaleChoir`)
        ) {
          for (let e = 3; e <= 12; e++) (e + t) % 3 == 0 && h(e, 21, `#5a7a9a`);
          !_ && !g && h(7, 12 + e, `#b01a2a`, 2, 1);
        }
        r.hollowed && !_ && h(g ? 8 : 7, 14 + e, `#ffffff`);
      }
    },
  };
}
var oX = {
    A: 0,
    B: 1,
    X: 2,
    Y: 3,
    LB: 4,
    RB: 5,
    LT: 6,
    RT: 7,
    VIEW: 8,
    MENU: 9,
    L3: 10,
    R3: 11,
    UP: 12,
    DOWN: 13,
    LEFT: 14,
    RIGHT: 15,
  },
  sX = Object.keys(oX),
  cX = sX.length,
  lX = { xbox: `Xbox`, ps: `PlayStation`, nintendo: `Nintendo` };
function uX(e) {
  return /054c|playstation|dualshock|dualsense/i.test(e)
    ? `ps`
    : /057e|nintendo|switch|joy-con|pro controller/i.test(e)
      ? `nintendo`
      : `xbox`;
}
var dX = [`▲`, `▼`, `◀`, `▶`],
  fX = {
    xbox: [
      `A`,
      `B`,
      `X`,
      `Y`,
      `LB`,
      `RB`,
      `LT`,
      `RT`,
      `View`,
      `Menu`,
      `LS`,
      `RS`,
      ...dX,
    ],
    ps: [
      `✕`,
      `○`,
      `□`,
      `△`,
      `L1`,
      `R1`,
      `L2`,
      `R2`,
      `Create`,
      `Options`,
      `L3`,
      `R3`,
      ...dX,
    ],
    nintendo: [
      `B`,
      `A`,
      `Y`,
      `X`,
      `L`,
      `R`,
      `ZL`,
      `ZR`,
      `−`,
      `+`,
      `LS`,
      `RS`,
      ...dX,
    ],
  };
function pX(e, t = `xbox`) {
  return fX[t][oX[e]];
}
var mX = 0.22,
  hX = 0.5,
  gX = 0.3;
