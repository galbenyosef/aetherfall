// assets__index-BTsv3a2s 158 — math
// Lines 91288-91492 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var rV = (e, t) => Lk(`motherbrim`, e, t) ?? [],
  iV = (e) => [
    parseInt(e.slice(1, 3), 16),
    parseInt(e.slice(3, 5), 16),
    parseInt(e.slice(5, 7), 16),
  ];
function aV(e, t) {
  let n = [];
  for (let [e, r] of t) e.forEach((e, t) => n.push([...iV(e), iV(r[t])]));
  return e.map((e) => {
    let [t, r] = M(e.width, e.height);
    r.drawImage(e, 0, 0);
    let i = r.getImageData(0, 0, t.width, t.height),
      a = i.data;
    for (let e = 0; e < a.length; e += 4) {
      if (a[e + 3] === 0) continue;
      let t = n.find(
        ([t, n, r]) =>
          Math.abs(a[e] - t) +
            Math.abs(a[e + 1] - n) +
            Math.abs(a[e + 2] - r) <=
          4,
      );
      t && ([a[e], a[e + 1], a[e + 2]] = t[3]);
    }
    return (r.putImageData(i, 0, 0), t);
  });
}
var oV = (e) => (e === `grey` ? KB : im[e]);
function sV(e, t, n, r, i) {
  let a = GB.map(iV);
  return e.map((e) => {
    let [o, s] = M(e.width, e.height);
    s.drawImage(e, 0, 0);
    let c = s.getImageData(0, 0, o.width, o.height),
      l = c.data;
    for (let e = 0; e < l.length; e += 4) {
      let s = (e / 4) % o.width,
        c = Math.floor(e / 4 / o.width);
      l[e + 3] === 0 ||
        ((s + 0.5 - t) / r) ** 2 + ((c + 0.5 - n) / i) ** 2 > 1.05 ||
        (a.some(
          ([t, n, r]) =>
            Math.abs(l[e] - t) +
              Math.abs(l[e + 1] - n) +
              Math.abs(l[e + 2] - r) <=
            4,
        ) &&
          (l[e + 3] = 0));
    }
    return (s.putImageData(c, 0, 0), o);
  });
}
var kie = (e, t) =>
    nV(`bud:${e}:${t}`, () => {
      let n = sV(
        aV(rV(`overflow`, `Bud`), [[im.ember, oV(e)]]).slice(0, 3),
        -10,
        21.6,
        18,
        19.8,
      );
      return t ? n.map(Ip) : n;
    }),
  Aie = (e) =>
    nV(`land:${e}`, () => {
      let t = aV(rV(`overflow`, `Bud`), [[im.ember, oV(e)]])[4],
        [n, r] = M(28, 20);
      return (t && r.drawImage(t, 52, 14, 28, 20, 0, 0, 28, 20), [n]);
    }),
  jie = (e, t) =>
    nV(`home:${e}:${t}`, () => {
      let n = sV(
        aV(rV(`overflow`, `Homecoming`), [[im.void, oV(e)]]).slice(2),
        50,
        24,
        18,
        22,
      );
      return t ? n.map(Ip) : n;
    }),
  Mie = (e) =>
    nV(`trail:${e}`, () => {
      let t = rV(`overflow`, `Trail`);
      return e === `grey`
        ? aV(t.slice(2, 3), [
            [JB, KB],
            [GB, KB],
          ])
        : [t[Co.indexOf(e)]].filter(Boolean);
    }),
  Nie = (e) =>
    nV(`greying:${e}`, () => aV(rV(`grey`, `Greying`), [[vy.storm, vy[e]]])),
  cV = null;
function Pie() {
  if (cV) return cV;
  let e = Py(`brimling_storm`),
    t = e.frames.map((e) => {
      let [t, n] = M(e.width, e.height);
      n.drawImage(e, 0, 0);
      let r = n.getImageData(0, 0, t.width, t.height),
        i = r.data;
      for (let e = 0; e < i.length; e += 4) {
        if (i[e + 3] < 20) continue;
        let t = (0.3 * i[e] + 0.59 * i[e + 1] + 0.11 * i[e + 2]) / 255;
        t < 0.12 ||
          ([i[e], i[e + 1], i[e + 2]] = iV(
            KB[t < 0.3 ? 1 : t < 0.55 ? 2 : t < 0.8 ? 3 : 4],
          ));
      }
      return (n.putImageData(r, 0, 0), t);
    });
  return (cV = {
    frames: t,
    flipped: t.map(Ip),
    flash: t.map((e) => Fp(e)),
    ax: e.ax,
    ay: e.ay,
  });
}
var lV = null;
function Fie() {
  if (lV) return lV;
  let e = rV(`grey`, `Split again`),
    t = [4, 5, 4, 5].map((t) => {
      let [n, r] = M(14, 12);
      return (e[t] && r.drawImage(e[t], 1, 16, 12, 10, 1, 1, 12, 10), F(n), n);
    });
  return (lV = {
    frames: t,
    flipped: t.map(Ip),
    flash: t.map((e) => Fp(e)),
    ax: 7,
    ay: 9,
  });
}
((jB.brimling_grey ??= {
  body: { t: `beast`, sprite: Pie },
  anim: 6,
  shadow: 5,
  lights: [{ dy: -5, r: 10, color: KB[3], a: 0.3 }],
}),
  (jB.brimling_greymini ??= {
    body: { t: `beast`, sprite: Fie },
    anim: 6,
    shadow: 3,
    lights: [{ dy: -3, r: 8, color: KB[3], a: 0.25 }],
  }));
var Iie = () =>
  nV(`wheel`, () =>
    [0, 1, 2, 3].map((e) => {
      let [t, n] = M(24, 26);
      (n.translate(1, 1),
        N(n, 9, 12, `#45404f`, 4, 10),
        N(n, 3, 20, `#5d586c`, 16, 3),
        P(n, 11, 10, 8, 8, `#8a5a2a`),
        P(n, 11, 10, 6, 6, `#2d3934`));
      let r = (Math.PI / 8) * e;
      for (let e = 0; e < 4; e++) {
        let t = r + (e * Math.PI) / 4;
        z(
          n,
          11 - Math.cos(t) * 7,
          10 - Math.sin(t) * 7,
          11 + Math.cos(t) * 7,
          10 + Math.sin(t) * 7,
          `#c49a52`,
        );
      }
      return (
        P(n, 11, 10, 1.6, 1.6, `#c49a52`),
        N(n, 5, 4, `#7ef9ff`, 2, 1),
        F(t),
        t
      );
    }),
  );
function Lie(e, t, n, r, i, a, o, s = 1) {
  let c = Math.hypot(i - n, a - r);
  if (c < 1) return;
  (e.save(),
    (e.imageSmoothingEnabled = !1),
    (e.globalAlpha = am(s)),
    e.translate(Math.round(n), Math.round(r)),
    e.rotate(Math.atan2(a - r, i - n)));
  let l = t.width,
    u = ((Math.floor(o) % l) + l) % l;
  for (let n = u - l; n < c; n += l) {
    let r = Math.max(0, n),
      i = Math.min(c, n + l);
    i > r &&
      e.drawImage(
        t,
        r - n,
        0,
        i - r,
        t.height,
        r,
        -Math.floor(t.height / 2),
        i - r,
        t.height,
      );
  }
  e.restore();
}
