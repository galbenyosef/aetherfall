// index-BTsv3a2s 71 — math
// Lines 40956-41292 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var Ab = () =>
    R(`brim-trail`, 4, 32, 10, (e, t) => {
      kb(e, -4, 5, 36, 5, sb[t], 1, t * 3 + 1, 4);
    }),
  jb = (e) =>
    R(`brim-home-${e}`, 6, 40, 40, (t, n) => {
      let r = im[e];
      if (
        (pb(t, `right`, 40, 40),
        n === 0 &&
          (fb(t, 10, 30, 5, 4, r, null),
          N(t, 12, 29, Yy, 1, 2),
          N(t, 14, 29, Yy, 1, 2)),
        n === 1 && fb(t, 21, 23, 6, 3.5, r, null),
        n === 2)
      ) {
        (P(t, 31, 24, 3, 4, r[1]), P(t, 31, 23.5, 2, 3, r[2]));
        for (let e = 0; e < 9; e++) {
          let n = Math.PI * 0.75 + (e / 8) * Math.PI * 0.6,
            i = 5 + L(e, 4) * 7;
          N(
            t,
            30 + Math.cos(n) * i,
            23 + Math.sin(n) * i * 1.2,
            r[e % 2 ? 2 : 3],
            2,
            2,
          );
        }
        (B(t, 34, 24, 6, 8, Wy[3], (e) => Math.cos(e) < -0.3),
          B(t, 36, 24, 9, 11, Wy[3], (e) => Math.cos(e) < -0.5));
      }
      if (n >= 3) {
        let e = (n - 3) / 2;
        for (let n = 0; n < 16; n++) {
          let i = 30 + (L(n, 7) - 0.3) * 9,
            a = 24 + (L(n, 8) - 0.5) * 14;
          L(n, 9) < e || N(t, i, a, r[2]);
        }
        for (let e = 0; e < 4; e++) {
          let r = 22 - (n - 3) * 7 - e * 4 + (e % 2) * 2,
            i = 18 + e * 4 + (e % 2);
          if (r < 1) continue;
          let a = (n + e) % 2 ? Wy[4] : Wy[3];
          (N(t, i - 1, r, a, 3, 1), N(t, i, r - 1, a, 1, 3));
        }
      }
    }),
  Mb = () =>
    R(`brim-core`, 6, 30, 30, (e, t) =>
      bb(e, 15, 15, [0.1, 0.3, 0.55, 0.8, 1, 0.35][t], t),
    ),
  Nb = () =>
    R(`brim-crackle`, 4, 80, 70, (e, t) => {
      hb(e, 40, 35, 35, t, Ky, 3);
      let n = (t + 1) / 4;
      for (let r = 0; r <= 70; r++)
        for (let i = 5; i <= 75; i++)
          Math.hypot(i + 0.5 - 40, (r + 0.5 - 35) * 1.1) > 29.75 * n ||
            (i + r + t) % 3 ||
            N(e, i, r, qy[2]);
      for (let n = 0; n < 46; n++) {
        if ((n + t) % 5 == 0) continue;
        let r = (n / 46) * Math.PI * 2,
          i =
            35 *
              (1 + 0.06 * Math.sin(3 * r + 3) + 0.04 * Math.sin(5 * r + 6.9)) +
            ((n % 2) * 2 - 1);
        N(
          e,
          40 + Math.cos(r) * i,
          35 + (Math.sin(r) * i) / 1.1,
          n % 4 == t % 4 ? qy[4] : qy[3],
        );
      }
      for (let n = 0; n < 2 + t; n++) {
        let r = 40 + (L(n, t, 31) - 0.5) * 35 * 1.2,
          i = 35 + (L(n, t, 32) - 0.5) * 35 * 0.7;
        vb(e, _b(r, i, r + 4 + L(n, 33) * 4, i - 3, 2, 0.8, n + t * 5), qy);
      }
    }),
  Pb = () =>
    R(`brim-arc`, 4, 32, 18, (e, t) => {
      yb(e, -2, 9, 34, 9, 40 + t * 3, qy, !0, 0.3);
    }),
  Fb = () =>
    R(`brim-discharge`, 5, 80, 70, (e, t) => {
      if (
        (hb(
          e,
          40,
          35,
          35,
          t,
          t === 0 ? Xy : t === 1 ? [Ky[1], Ky[2], Ky[3], qy[3], `#ffffff`] : Ky,
          3,
        ),
        t < 3)
      ) {
        let n = t === 0 ? 7 : t === 1 ? 5 : 3;
        for (let r = 0; r < n; r++) {
          let i = (r / n) * Math.PI * 2 + L(r, t, 51),
            a = 33.25;
          yb(
            e,
            40,
            35,
            40 + Math.cos(i) * a,
            35 + (Math.sin(i) * a) / 1.1,
            60 + r + t * 9,
            qy,
            t === 0,
          );
        }
      }
      if ((t === 0 && V(e, 40, 35, 10, 10, qy, 2), t >= 2))
        for (let n = 0; n < 4; n++)
          vm(
            e,
            40 + (L(n, 61) - 0.5) * 35 * 1.3,
            35 + (L(n, 62) - 0.5) * 35 * 0.6 - (t - 2) * 5,
            3 + (t - 2) * 1.5,
            `#cfe8e0`,
            (t - 2) / 2.5,
            n,
          );
    }),
  Ib = () =>
    R(`brim-lane`, 4, 32, 44, (e, t) => {
      (e.save(), (e.globalAlpha = 0.3), N(e, 0, 3, Ky[1], 32, 38), e.restore());
      for (let n = 0; n < 2; n++) {
        let r = (t * 4 + n * 16) % 32;
        for (let t = -6; t <= 6; t++)
          N(
            e,
            r + 6 - Math.abs(t) * 0.6,
            22 + t,
            Math.abs(t) < 2 ? Ky[3] : Ky[2],
          );
      }
      for (let n = 0; n < 4; n++) {
        let r = (n * 8 + t * 2) % 32;
        (lb(e, r + 2, 4 + (n % 2), 1 + (n % 2), Ky),
          lb(e, (r + 5) % 32, 40 - (n % 2), 1 + ((n + 1) % 2), Ky));
      }
    }),
  Lb = () =>
    R(`brim-bow`, 5, 52, 40, (e, t) => {
      for (let n = 0; n < 7; n++) {
        let r = 13 + n * 3,
          i = Math.round(L(n, t, 4) * 9);
        (z(e, i, r, 16 + (n % 2) * 2, r, n % 3 == 0 ? Wy[2] : Wy[1]),
          N(e, i + ((t * 3 + n * 5) % 10), r, Wy[3]));
      }
      let n = 16 + (t % 2);
      for (let r = -1.25; r <= 1.25; r += 0.02)
        for (let i = n - 5; i <= n; i += 0.5) {
          let a = 22 + Math.cos(r) * i,
            o = 22 + Math.sin(r) * i * 1.05,
            s = (i - (n - 5)) / 5;
          N(
            e,
            a,
            o,
            s > 0.8
              ? L(Math.round(r * 50), t) > 0.5
                ? Ky[4]
                : Ky[3]
              : s > 0.4
                ? Ky[2]
                : Ky[1],
          );
        }
      _m(e, 22 + n, 22, 0.25 + (t % 3) * 0.25, 14, 14, Ky, t + 3, 0.2);
      for (let r = 0; r < 5; r++) {
        let i = 10 + r * 6;
        N(e, 22 + n + 2 + ((r * 3 + t * 4) % 9), i, Ky[3], 2, 1);
      }
    }),
  Rb = () =>
    R(`brim-swallow`, 5, 96, 70, (e, t) => {
      let n = t / 4;
      (t > 0 && gb(e, 34, 35, 33, 5, 0.4),
        t < 4 &&
          hb(e, 34, 35, 33, t, Ky, 5, { pull: n * 0.9, scale: 1 - n * 0.45 }));
      for (let t = 0; t < 6 * n; t++) {
        let r = 22 + t * 5,
          i = 52 + n * 30 + (L(t, 71) - 0.5) * 8;
        (z(e, i - 6, r, i, r, Ky[3]), N(e, i, r, Ky[4]));
      }
    }),
  zb = () =>
    R(`brim-greying`, 5, 16, 15, (e, t) => {
      let n = Py(`brimling_storm`);
      e.drawImage(n.frames[t % 4], 0, 0);
      let r = (t / 4) * 18,
        i = e.getImageData(0, 0, 16, 15),
        a = i.data,
        o = (e) => [
          parseInt(e.slice(1, 3), 16),
          parseInt(e.slice(3, 5), 16),
          parseInt(e.slice(5, 7), 16),
        ];
      for (let e = 0; e < 15; e++)
        for (let t = 0; t < 16; t++) {
          let n = (e * 16 + t) * 4;
          if (a[n + 3] < 20 || t > r + (L(e, 3) - 0.5) * 3) continue;
          let i = (0.3 * a[n] + 0.59 * a[n + 1] + 0.11 * a[n + 2]) / 255;
          if (i < 0.12) continue;
          let [s, c, l] = o(Gy[i < 0.3 ? 1 : i < 0.55 ? 2 : i < 0.8 ? 3 : 4]);
          ((a[n] = s), (a[n + 1] = c), (a[n + 2] = l));
        }
      if ((e.putImageData(i, 0, 0), t > 0 && t < 4))
        for (let t = 4; t < 12; t += 2)
          N(e, r + (L(t, 3) - 0.5) * 3, t, `#5a0a1a`);
    }),
  Bb = () =>
    R(`brim-splitagain`, 6, 44, 30, (e, t) => {
      let n = (t, n, r, i, a) => {
        (P(e, t, n, r, i, Gy[1]),
          P(e, t - 0.5, n - 0.5, r - 1, i - 1, Gy[2]),
          N(e, t - r * 0.4, n - i * 0.5, Gy[3]),
          a && (N(e, t + 1, n - 1, Yy), N(e, t + 3, n - 1, Yy)));
      };
      if (
        (t === 0 &&
          (n(22, 19, 7, 5.5, !0),
          z(e, 18, 16, 22, 20, `#5a0a1a`),
          z(e, 22, 20, 25, 17, `#5a0a1a`)),
        t === 1)
      ) {
        mb(e, 22, 24, 0.2, 9, Gy, 11);
        for (let t = 0; t < 5; t++)
          vm(e, 16 + t * 3, 16 - (t % 2) * 3, 2, Jy[1], 0.4, t);
      }
      if (t >= 2) {
        let r = am((t - 2) / 2),
          i = Math.sin(r * Math.PI) * 9;
        Sm(e, 22, 24, 9 - t, 2, Gy[1], 0.5);
        for (let e of [-1, 1]) {
          let a = 22 + e * (3 + r * 12),
            o = 21 - (t < 4 ? i : 0),
            s = +(t === 4);
          n(a, o + s, 3.6 + s, 2.8 - s * 0.6, t >= 4);
        }
        if (t === 2)
          for (let t = 0; t < 4; t++)
            vm(e, 22 + (t - 1.5) * 4, 14 - t, 2.5, Jy[1], 0.5, t + 4);
      }
    });
function Vb(e, t, n, r, i = 3, a = !1) {
  Em(e, dh(t).frames[i][a ? 6 : 0], 10, 26, n, r, 5);
}
function Hb(e, t, n, r, i, a = 0.7) {
  (Vb(e, t, n, r, i), xm(e, dh(t).flash[i][0], n - 10, r - 26, a));
}
function Ub(e, t, n, r) {
  let i = Py(`motherbrim`);
  Em(e, i.frames[r], i.ax, i.ay, t, n, 26);
  let a = 19 - [0, 1, 2, 1][r];
  return { cx: t - i.ax + 35, cy: n - i.ay + (44 - a) - 1 };
}
function Wb(e, t, n, r) {
  (N(e, t - 2, n - 12, `#45404f`, 4, 12),
    N(e, t - 8, n - 2, `#5d586c`, 16, 3),
    P(e, t, n - 14, 8, 8, `#120b1a`),
    P(e, t, n - 14, 7, 7, `#8a5a2a`),
    P(e, t, n - 14, 5, 5, `#2d3934`));
  for (let i = 0; i < 4; i++) {
    let a = r * 0.4 + (i * Math.PI) / 4;
    z(
      e,
      t - Math.cos(a) * 6,
      n - 14 - Math.sin(a) * 6,
      t + Math.cos(a) * 6,
      n - 14 + Math.sin(a) * 6,
      `#c49a52`,
    );
  }
  P(e, t, n - 14, 1.6, 1.6, `#e0b64a`);
}
function Gb() {
  let [e, t] = Tm(240, 160, `cistern`, 4);
  (gb(t, 58, 122, 30, 9, 0.5),
    hb(t, 58, 122, 30, 2, Ky, 9, { scale: 0.55, swirl: 1 }),
    hb(t, 206, 136, 24, 1, Ky, 13),
    Wb(t, 30, 70, 2));
  for (let e = 0; e < 6; e++) N(t, 40 + e * 2, 76 + (e % 2), Ky[3]);
  Vb(t, `cryo`, 50, 76, 3, !0);
  let n = wb()[2];
  (t.drawImage(n, 104, 50), Vb(t, `storm`, 180, 102, 2));
  let r = Py(`motherbrim`);
  Em(t, r.frames[0], r.ax, r.ay, 150, 62, 0);
  for (let e = 0; e < 5; e++) {
    let n = 132 + e * 9,
      r = 66 + ((e * 7) % 13);
    (N(t, n, r, Wy[2], 1, 2), N(t, n, r, Wy[3]));
  }
  return (Vb(t, `pyro`, 108, 150, 1), Dm(t, 240, 160, 0.35), e);
}
function Kb() {
  let [e, t] = Tm(240, 168, `cistern`, 6);
  (hb(t, 40, 140, 26, 1, Ky, 17),
    hb(t, 210, 46, 22, 3, Ky, 19),
    kb(t, 186, 106, 160, 106, `ember`, 1, 3),
    kb(t, 124, 154, 124, 138, `rime`, 2, 5),
    kb(t, 54, 100, 64, 100, `storm`, 0, 7),
    kb(t, 90, 44, 102, 66, `void`, 3, 9));
  let { cx: n, cy: r } = Ub(t, 120, 104, 0),
    i = (e, n, r, i) => {
      let a = Py(`brimling_${e}`);
      Em(t, (n > 120 ? a.flipped : a.frames)[i], a.ax, a.ay, n, r, 5);
    };
  (i(`ember`, 158, 107, 1), i(`rime`, 125, 138, 2));
  let a = Cb(`storm`, im.storm)[1];
  (t.drawImage(a, 48, 81),
    _m(t, 64, 94, 0.5, 12, 12, rm.ember, 3),
    Vb(t, `pyro`, 30, 92, 2, !0));
  let o = im.void;
  (P(t, 104, 68, 4, 2.5, o[1]), P(t, 103.5, 67.5, 2.5, 1.5, o[2]));
  for (let e = 0; e < 7; e++)
    N(t, 104 + (L(e, 5) - 0.5) * 14, 70 + L(e, 6) * 8, o[2]);
  for (let e = 0; e < 6; e++) N(t, 96 + e * 3, 64 - (e % 3) * 3, o[3], 2, 1);
  for (let e = 0; e < 4; e++) {
    let n = 94 + e * 8,
      r = 56 - (e % 2) * 6;
    (N(t, n - 1, r, Wy[4], 3, 1), N(t, n, r - 1, Wy[4], 1, 3));
  }
  return (
    ym(t, 104, 62, 14, Wy[3], 0.45),
    ym(t, n, r, 8, qy[3], 0.35),
    Vb(t, `cryo`, 206, 120, 3, !0),
    Vb(t, `storm`, 66, 54, 2),
    Dm(t, 240, 168, 0.35),
    e
  );
}
