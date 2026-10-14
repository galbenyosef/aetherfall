// index-BTsv3a2s 152 — math
// Lines 89510-89802 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function eie(e) {
  let t = ((e % 3) + 3) % 3;
  return Mz(`blight:${t}`, () => {
    let [e, n] = M(48, 24);
    for (let e = 0; e < 24; e++)
      for (let r = 0; r < 48; r++) {
        let i = (r - 24) / 23,
          a = (e - 12) / 11,
          o = i * i + a * a + (Nz(r + t * 50, e) - 0.5) * 0.35;
        if (o > 1) continue;
        let s = o > 0.75 ? 0.35 : 0.6;
        N(
          n,
          r,
          e,
          Nz(r, e + t) < 0.18 ? `rgba(58,10,24,${s})` : `rgba(40,30,34,${s})`,
        );
      }
    for (let e = 0; e < 4; e++) {
      let r = Nz(e, t) * Math.PI * 2,
        i = 8 + Nz(t, e) * 12;
      Pz(
        n,
        24,
        12,
        24 + Math.cos(r) * i,
        12 + Math.sin(r) * i * 0.5,
        e % 2 ? Y.dark : Y.mid,
      );
    }
    for (let e = 0; e < 5; e++) {
      let r = 6 + Math.floor(Nz(e + 9, t) * 36),
        i = 5 + Math.floor(Nz(t + 3, e) * 15);
      (N(n, r, i, `#5a4a3a`), N(n, r + 1, i - 1, `#4a3c30`));
    }
    let r =
      t === 0
        ? [
            [14, 10],
            [33, 15],
          ]
        : t === 1
          ? [[26, 8]]
          : [
              [10, 15],
              [22, 12],
              [38, 9],
            ];
    for (let [e, t] of r)
      (N(n, e, t - 3, Y.red, 1, 4),
        N(n, e + 1, t - 1, Y.dark, 1, 2),
        N(n, e, t - 2, kz),
        N(n, e - 1, t, Y.black, 3, 1));
    return e;
  });
}
function Vz(e) {
  let t = Math.max(0, Math.min(7, e));
  return Mz(`depart:${t}`, () => {
    let [e, n] = M(24, 72),
      r = t / 7,
      i = r < 0.7 ? r / 0.7 : 1 - (r - 0.7) / 0.3,
      a = 70 - Math.round(r * 26);
    for (let e = 0; e < 20; e++) {
      let t = (e / 20) * Math.PI * 2;
      N(
        n,
        Math.round(12 + Math.cos(t) * 9),
        Math.round(a + Math.sin(t) * 2),
        Math.sin(t) > 0 ? kz : Oz,
      );
    }
    for (let e = 0; e < 72; e++) {
      let t = i * (0.2 + (e / 72) * 0.8);
      ((n.fillStyle = Rp(`#44c9f0`, t * 0.3)),
        n.fillRect(5, e, 14, 1),
        (n.fillStyle = Rp(`#ffffff`, t * 0.7)),
        n.fillRect(10, e, 4, 1));
    }
    if (r > 0.3)
      for (let e = 0; e < 6; e++) {
        let t = Math.round(60 - (r - 0.3) * 90 - e * 7);
        if (t < 0) continue;
        let i = 4 + Math.round(Nz(e, 2) * 16);
        (N(n, i, t, e % 2 ? Oz : kz), N(n, i, t + 1, Oz));
      }
    return e;
  });
}
function Hz(e) {
  let t = Math.max(0, Math.min(7, e));
  return Mz(`arrive:${t}`, () => {
    let [e, n] = M(48, 72),
      r = t / 7,
      i = t < 3 ? 1 : 1 - (t - 2) / 5,
      a = t === 0 ? 2 : t < 3 ? 8 : Math.max(2, 8 - (t - 2) * 1.5);
    for (let e = 0; e < 71; e++)
      (t !== 0 || e < 40) &&
        ((n.fillStyle = Rp(`#7ef9ff`, i * 0.35)),
        n.fillRect(24 - a, e, a * 2, 1),
        (n.fillStyle = Rp(`#ffffff`, i * 0.85)),
        n.fillRect(24 - Math.ceil(a / 3), e, Math.ceil(a / 3) * 2, 1));
    if (t >= 1) {
      let e = 4 + r * 19,
        i = Math.round(e * 5);
      for (let a = 0; a < i; a++) {
        let o = (a / i) * Math.PI * 2;
        Nz(a, t) < r * 0.5 ||
          N(
            n,
            Math.round(24 + Math.cos(o) * e),
            Math.round(69 + Math.sin(o) * e * 0.35),
            r > 0.6 ? Oz : kz,
          );
      }
    }
    if (t >= 1 && t <= 5)
      for (let e = 0; e < 6; e++) {
        let r = (e / 6) * Math.PI * 2 + 0.3,
          i = 3 + t * 3;
        N(
          n,
          Math.round(24 + Math.cos(r) * i),
          Math.round(58 + Math.sin(r) * i * 0.6),
          e % 2 ? kz : Oz,
        );
      }
    return e;
  });
}
function Uz(e, t, n = 0) {
  let [r, i] = M(e.width, e.height),
    a = Math.max(0, Math.min(1, t));
  for (let t = 0; t < e.height; t++) {
    let r = a * 1.6 - (1 - t / e.height) * 0.6;
    if (r >= 1 || (r > 0 && Nz(t, n) < r)) continue;
    let o = r > 0 ? Math.round((Nz(t * 3, n) - 0.5) * 4 * r) : 0;
    i.drawImage(e, 0, t, e.width, 1, o, t, e.width, 1);
  }
  return (
    a > 0 &&
      ((i.globalCompositeOperation = `source-atop`),
      (i.fillStyle = Rp(`#7ef9ff`, Math.min(0.75, a * 1.2))),
      i.fillRect(0, 0, r.width, r.height)),
    r
  );
}
function Wz(e, t = 0) {
  let n = t % 4;
  return Mz(`icon:${e}:${n}`, () => {
    let [t, r] = M(16, 16),
      i = Az(r),
      a =
        e === `unattuned`
          ? { hi: `#6f6a80`, mid: `#55506a`, lo: `#3a3650` }
          : e === `hollowed`
            ? { hi: `#5a4a58`, mid: `#3e3340`, lo: `#261e28` }
            : { hi: `#c4c0cf`, mid: `#9994a6`, lo: `#6c6680` },
      o =
        e === `unattuned`
          ? { hi: `#8a8698`, mid: `#6a6680`, lo: `#4a4660` }
          : e === `quiet`
            ? { hi: `#bdfcff`, mid: `#44c9f0`, lo: `#2a7fc9` }
            : e === `hollowed`
              ? { hi: Y.hot, mid: Y.red, lo: Y.deep }
              : { hi: `#f0feff`, mid: `#7ef9ff`, lo: `#2aa8c0` };
    (i(3, 13, a.lo, 10, 2),
      i(4, 12, a.mid, 8, 1),
      i(5, 11, a.hi, 6, 1),
      i(3, 6, a.mid, 1, 5),
      i(4, 4, a.mid, 1, 2),
      i(12, 6, a.mid, 1, 5),
      i(11, 4, a.mid, 1, 2));
    let s = 2 + (e === `singing` && n % 2 ? -1 : 0);
    for (let e = 0; e < 8; e++) {
      let t = e < 3 ? e + 1 : Math.max(1, 3 - Math.floor((e - 3) / 2));
      for (let n = 8 - t; n < 8 + t; n++)
        i(n, s + e, n < 7 ? o.hi : n < 9 ? o.mid : o.lo);
    }
    return (
      e === `hollowed` && i(7, s + 3, kz, 1, 3),
      (e === `rite` || e === `reclaim`) &&
        (i(2, 9 + (n % 2), Y.red),
        i(13, 8 + ((n + 1) % 2), Y.red),
        i(7, 0, kz, 2, 1)),
      e === `singing` && (i(1, 3 + (n % 2), kz), i(14, 5 - (n % 2), Oz)),
      F(t, Dz),
      t
    );
  });
}
function Gz() {
  return Mz(`icon:hub`, () => {
    let [e, t] = M(16, 16),
      n = Az(t);
    (n(4, 13, `#5d586c`, 8, 2), n(5, 12, `#8c8698`, 6, 1));
    for (let e = 0; e < 11; e++) {
      let t = e < 3 ? e + 1 : Math.max(1, 3 - Math.floor((e - 3) / 3));
      for (let r = 8 - t; r < 8 + t; r++)
        n(r, 1 + e, r < 7 ? `#8ef6ff` : r < 9 ? `#44c9f0` : `#2a7fc9`);
    }
    return (
      n(7, 4, kz, 1, 3),
      n(2, 9, `#b58aff`, 1, 3),
      n(13, 8, `#44c9f0`, 1, 3),
      F(e, `#0b1030`),
      e
    );
  });
}
function tie(e = `full`) {
  return Mz(`icon:res:${e}`, () => {
    let [t, n] = M(16, 16),
      r = Az(n),
      i =
        e === `hollow`
          ? { hi: Y.hot, mid: Y.red, lo: Y.deep }
          : e === `low`
            ? { hi: `#ffe0b0`, mid: `#ff9a6a`, lo: `#b0503a` }
            : { hi: `#bdfcff`, mid: `#44c9f0`, lo: `#2a7fc9` };
    for (let e = 0; e < 13; e++) {
      let t =
        e < 4
          ? Math.ceil((e + 1) * 0.9)
          : Math.max(1, 4 - Math.floor((e - 4) / 2.5));
      for (let n = 6 - t; n < 6 + t; n++)
        r(n, 1 + e, n < 5 ? i.hi : n < 7 ? i.mid : i.lo);
    }
    r(4, 4, kz, 1, 3);
    let a = e === `hollow` ? Y.red : Oz;
    return (
      r(13, 3, a, 1, 7),
      r(11, 9, a, 3, 2),
      r(14, 3, a, 1, 1),
      r(15, 4, a, 1, 1),
      F(t, Dz),
      t
    );
  });
}
function nie(e, t = 0) {
  let n = t % 4;
  return Mz(`pip:${e}:${n}`, () => {
    let [t, r] = M(10, 10),
      i = Az(r);
    if (e === `final`)
      (i(3, 1, Y.dark, 4, 8),
        i(4, 0, Y.red, 2, 1),
        i(4, 9, Y.dark, 2, 1),
        i(4, 2, n < 2 ? kz : Y.hot, 1, 5),
        i(5, 2, Y.red, 1, 4));
    else {
      let t = e === `done` ? Oz : e === `now` ? (n < 2 ? kz : Oz) : `#3a3650`;
      (i(4, 1, t, 2, 8),
        i(1, 4, t, 8, 2),
        i(2, 2, t, 6, 6),
        e === `done` && i(4, 4, kz, 2, 2),
        e === `todo` && i(3, 3, `#1a1628`, 4, 4));
    }
    return (F(t, Dz), t);
  });
}
function Kz() {
  return Mz(`icon:attuned`, () => {
    let [e, t] = M(9, 9),
      n = Az(t);
    return (
      n(4, 0, Oz, 1, 9),
      n(1, 3, Oz, 7, 1),
      n(2, 6, Oz, 5, 1),
      n(4, 3, kz),
      F(e, Dz),
      e
    );
  });
}
var qz = new Map();
function Jz(e, t, n) {
  let r = `${e}:${t}:${n}`,
    i = qz.get(r);
  if (!i) {
    let a = Qre(e);
    ((i = {
      frames: a.frames.slice(t, n),
      flipped: a.flipped.slice(t, n),
      flash: a.flash.slice(t, n),
      ax: a.ax,
      ay: a.ay,
    }),
      qz.set(r, i));
  }
  return i;
}
