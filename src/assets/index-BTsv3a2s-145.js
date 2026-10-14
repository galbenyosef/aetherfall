// index-BTsv3a2s 145 — fps
// Lines 87045-87354 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function ZL(e, t, n, r, i, a, o) {
  let s = (t, n, r, i = 1, a = 1) => N(e, t + 2, n + 2, r, i, a),
    [c, l] = qL[n % qL.length],
    u = JL[(n * 5 + 1) % JL.length],
    d = t.hat === `hood` ? `short` : YL[(n * 3 + 2) % YL.length],
    f = d !== `long` && d !== `bun` && n % 3 == 1,
    p = r === 2,
    m = r === 1,
    h = a,
    g = I(t.tunic, -0.28);
  if (
    (s(p ? 6 + i : 5, 22 - (p ? 0 : Math.max(0, i)), `#2b1d16`, 3, 2),
    s(p ? 8 - i : 9, 22 - (p ? 0 : Math.max(0, -i)), `#2b1d16`, 3, 2),
    s(5, 18, t.legs, 7, 4),
    m && d === `long` && s(5, 10 + h, u, 6, 4),
    t.skirt)
  )
    for (let e = 17; e <= 23; e++) {
      let n = 3.6 + (e - 17) * (p ? 0.18 : 0.3),
        r = Math.round(7.5 - n),
        i = Math.round(7.5 + n);
      for (let n = r; n <= i; n++)
        s(
          n,
          e,
          n >= i - 1 ? I(t.legs, -0.25) : n <= r ? I(t.legs, 0.15) : t.legs,
        );
    }
  if (
    (s(p ? 5 : 4, 11 + h, t.tunic, p ? 7 : 8, 7),
    s(p ? 9 : 10, 11 + h, g, 2, 7),
    s(4, 17 + h, t.belt, 8, 1),
    t.extra === `mail` && !m)
  )
    for (let e = 12; e < 17; e += 2)
      for (let t = p ? 6 : 5; t < 11; t += 2)
        s(t + (e % 4 ? 1 : 0), e + h, `#8c8698`);
  (t.apron &&
    !m &&
    (s(p ? 7 : 5, 12 + h, t.apron, p ? 4 : 6, t.skirt ? 10 : 9),
    s(p ? 7 : 5, 12 + h, I(t.apron, -0.12), p ? 4 : 6, 1),
    t.apron === `#f2e6c8` && s(p ? 8 : 7, 15 + h, `#e6c47a`)),
    t.extra === `tape` &&
      !m &&
      (s(p ? 8 : 6, 11 + h, `#e6c872`, 1, 6),
      p || s(9, 11 + h, `#e6c872`, 1, 6)),
    t.extra === `scarf` && s(p ? 5 : 4, 10 + h, t.extraColor, p ? 7 : 8, 2));
  let _ = t.tunic,
    v = t.rolled ? c : _,
    y = o && !m;
  if (
    (p
      ? (s(9, 12 + h + (y ? -3 : 0), _, 2, 2),
        s(11, 12 + h + (y ? -3 : 0), v, 1, 2),
        s(12, 13 + h + (y ? -4 : 0), c))
      : (s(3, 11 + h, _, 1, 3),
        s(3, 14 + h, v, 1, 2),
        s(3, 16 + h, c),
        y
          ? (s(12, 7 + h, v, 1, 4), s(12, 10 + h, _, 1, 1), s(12, 6 + h, c))
          : (s(12, 11 + h, _, 1, 3), s(12, 14 + h, v, 1, 2), s(12, 16 + h, c)),
        t.extra === `towel` && s(11, 10 + h, `#f0ebe0`, 2, 4)),
    !m && t.tool !== `none`)
  ) {
    let e = y ? (p ? 9 : 6) : 16;
    switch (t.tool) {
      case `hammer`:
        (s(12, e - 4 + h, `#6b4424`, 1, 5),
          s(11, e - 5 + h, `#6f7580`, 3, 2),
          s(11, e - 5 + h, `#a7adb8`, 3, 1));
        break;
      case `ladle`:
        (s(12, e - 5 + h, `#8c8698`, 1, 5), s(11, e + h, `#8c8698`, 3, 2));
        break;
      case `quill`:
        (s(12, e - 5 + h, `#e6ddf5`, 1, 5), s(13, e - 6 + h, `#e6ddf5`, 1, 2));
        break;
      case `shears`:
        (s(12, e - 3 + h, `#c9ced8`, 1, 4), s(11, e + h, `#e0b64a`, 3, 1));
        break;
      case `loupe`:
        (s(11, e - 3 + h, `#44c9f0`, 2, 2), s(12, e - 1 + h, `#4a4458`, 1, 2));
    }
  }
  (s(5, 5 + h, c, 6, 6),
    m
      ? d === `bald`
        ? s(5, 5 + h, l, 6, 1)
        : s(5, 5 + h, u, 6, 5)
      : p
        ? (s(9, 7 + h, XL),
          s(10, 8 + h, l),
          d !== `bald` && s(5, 5 + h, u, 3, d === `long` ? 7 : 4),
          f && s(7, 9 + h, u, 4, 2))
        : (s(10, 5 + h, l, 1, 6),
          s(6, 7 + h, XL),
          s(9, 7 + h, XL),
          f
            ? (s(5, 9 + h, u, 6, 2), s(6, 11 + h, u, 4, 1))
            : s(7, 9 + h, l, 2, 1),
          d !== `bald` &&
            (s(5, 5 + h, u, 6, 1),
            d === `long`
              ? (s(4, 5 + h, u, 1, 8), s(11, 5 + h, u, 1, 8))
              : d !== `short` &&
                (s(4, 5 + h, u, 1, 3), s(11, 5 + h, u, 1, 3)))),
    d === `bun` && t.hat === `none` && s(p ? 4 : 6, 2 + h, u, p ? 3 : 4, 3),
    d === `tied` && t.hat === `none` && !m && s(p ? 4 : 11, 7 + h, u, 1, 3),
    d !== `bald` && t.hat === `none` && s(5, 4 + h, u, 6, 1),
    t.extra === `glasses` &&
      !m &&
      (p
        ? s(8, 7 + h, `#c9a64a`, 3, 1)
        : (s(5, 7 + h, `#c9a64a`, 2, 1),
          s(8, 7 + h, `#c9a64a`, 3, 1),
          s(6, 7 + h, XL),
          s(9, 7 + h, XL))),
    t.extra === `goggles` &&
      (s(4, 4 + h, `#4a4458`, 8, 1),
      m ||
        (s(p ? 8 : 5, 3 + h, `#4a4458`, p ? 3 : 6, 2),
        s(p ? 9 : 6, 3 + h, t.extraColor, 1, 1),
        p || s(9, 3 + h, t.extraColor, 1, 1))));
  let b = t.hatColor ?? `#4a4458`;
  switch (t.hat) {
    case `cap`:
      (s(4, 3 + h, b, 8, 3),
        s(4, 5 + h, I(b, -0.3), 8, 1),
        m || s(p ? 10 : 5, 5 + h, I(b, -0.3), p ? 3 : 6, 1));
      break;
    case `kerchief`:
      (s(4, 3 + h, b, 8, 3),
        s(5, 2 + h, b, 6, 1),
        m && s(6, 6 + h, b, 4, 3),
        !m && !p && s(5, 4 + h, I(b, 0.3), 2, 1));
      break;
    case `band`:
      (d !== `bald` && s(5, 3 + h, u, 6, 2), s(4, 5 + h, b, 8, 1));
      break;
    case `brim`:
      (s(5, 1 + h, b, 6, 3),
        s(3, 4 + h, I(b, -0.2), 10, 1),
        s(5, 3 + h, I(b, -0.35), 6, 1));
      break;
    case `toque`:
      (s(4, 3 + h, `#f4f0e6`, 8, 3),
        s(5, 1 + h, `#f4f0e6`, 6, 2),
        s(4, 5 + h, `#d9d2c0`, 8, 1),
        !m && !p && s(6, 8 + h, `#f4f0e6`));
      break;
    case `hood`:
      (s(4, 3 + h, b, 8, 3),
        s(5, 2 + h, b, 6, 1),
        m
          ? s(4, 5 + h, b, 8, 7)
          : p
            ? s(4, 5 + h, b, 3, 6)
            : (s(4, 5 + h, b, 1, 6), s(11, 5 + h, I(b, -0.25), 1, 6)),
        s(p ? 5 : 3, 10 + h, b, p ? 6 : 10, 2),
        m ||
          (s(p ? 2 : 11, 12 + h, `#a08a64`, 3, 5),
          s(p ? 2 : 11, 14 + h, `#6b4424`, 3, 1)));
  }
}
var QL = new Map();
function $L(e, t, n) {
  let r = [
      [0, 0, !1],
      [0, 1, !1],
      [1, 0, !1],
      [0, 1, !1],
      [-1, 0, !1],
      [0, 1, !1],
      [0, 0, !0],
    ],
    i = [];
  for (let e of [0, 1, 2])
    i[e] = r.map(([r, i, a]) => {
      let [o, s] = M(20, 28);
      return (ZL(s, t, n, e, r, i, a), F(o), o);
    });
  i[3] = i[2].map(Ip);
  let a = tm(`folk:${e}`, {
    frames: i,
    flash: i.map((e) => e.map((e) => Fp(e))),
  });
  return (QL.set(e, a), a);
}
var eR = {
  steward: {
    robe: `#243b6b`,
    robeDark: `#15244a`,
    trim: `#8ef6ff`,
    hat: `#243b6b`,
    hatDark: `#15244a`,
    orb: `#44c9f0`,
    glow: `#8ef6ff`,
    spark: `#ffffff`,
  },
  archivist: {
    robe: `#3a3560`,
    robeDark: `#241f40`,
    trim: `#e6d8bc`,
    hat: `#3a3560`,
    hatDark: `#241f40`,
    orb: `#a8b8ff`,
    glow: `#a8b8ff`,
    spark: `#ffffff`,
  },
};
function tR(e) {
  let t = nm(`folk:${e}`);
  if (t) return t;
  let n = QL.get(e);
  if (n) return n;
  let [r, i] = e.split(`#`),
    a = Number(i ?? 0) || 0;
  return r === `refugee`
    ? Tg(`refugee`)
    : r.startsWith(`npc:`)
      ? Jh(r.slice(4))
      : r.startsWith(`realm:`)
        ? Tg(r.slice(6))
        : r.startsWith(`watch:`)
          ? Jh(/^watch:(captain|vigilant)\//.test(r) ? `holloway` : `watchman`)
          : eR[r]
            ? fh(`folk:${r}`, eR[r])
            : r.startsWith(`initiate:`)
              ? fh(`folk:${r}`, S[r.split(`:`)[1]].colors)
              : $L(e, KL[r] ?? KL.grocer, a);
}
var nR = new Map();
function rR(e) {
  let t = nR.get(e);
  if (t) return t;
  let n;
  if (e.startsWith(`note:`)) n = GL(e.slice(5));
  else {
    let t = tR(e).frames[0][0],
      [r, i] = M(t.width, 17);
    (i.drawImage(t, 0, 0), (n = r));
  }
  return (nR.set(e, n), n);
}
var iR = `/assets/holloway-CMcWwWa1.png`,
  aR = {
    idle: { y: 0, w: 64, h: 64, n: 10, fps: 8, ax: 32, ay: 62 },
    walk: { y: 64, w: 64, h: 64, n: 10, fps: 10, ax: 32, ay: 62 },
    attack: {
      y: 128,
      w: 96,
      h: 64,
      n: 9,
      fps: 12,
      ax: 32,
      ay: 62,
      hit: 4,
      blow: [4, 6],
    },
    death: { y: 192, w: 112, h: 64, n: 11, fps: 10, ax: 32, ay: 62 },
    cast: {
      y: 256,
      w: 64,
      h: 64,
      n: 8,
      fps: 10,
      ax: 32,
      ay: 62,
      hit: 4,
      hand: [17, 8],
    },
  },
  oR = null,
  sR = null;
function cR() {
  return (
    sR ||
    ((sR = new Promise((e) => {
      if (typeof Image > `u`) return e();
      let t = new Image();
      ((t.onload = () => {
        ((oR = t), e());
      }),
        (t.onerror = () => e()),
        (t.src = iR));
    })),
    sR)
  );
}
var lR = new Map();
function uR() {
  return oR;
}
function dR(e, t) {
  let n = aR[t];
  return {
    frames: Array.from({ length: n.n }, (t, r) => {
      let [i, a] = M(n.w, n.h);
      return (a.drawImage(e, r * n.w, n.y, n.w, n.h, 0, 0, n.w, n.h), jp(i, 2));
    }),
    ax: n.ax / 2,
    ay: n.ay / 2,
    fps: n.fps,
  };
}
function fR(e) {
  if (!oR) return null;
  let t = lR.get(e);
  return (t || lR.set(e, (t = dR(oR, e))), t);
}
