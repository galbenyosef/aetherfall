// assets__index-BTsv3a2s 80 — math
// Lines 43793-44195 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var Nte = () =>
    R(`kiln-gather`, 5, 24, 24, (e, t) => {
      let n = t / 4;
      if (t < 4)
        for (let r = 0; r < 5; r++) {
          let i = (r / 5) * jx + t * 0.55,
            a = 10 - n * 5;
          kS(
            e,
            12 + Math.cos(i) * a,
            12 + Math.sin(i) * a,
            i + Math.PI - 0.5,
            4 + n * 2,
            1.2,
            r + t,
          );
        }
      (OS(e, 12, 12, 1.2 + n * 2.4, 3 + t, t >= 2),
        t === 4 && V(e, 12, 12, 7, 10, Rx, 2));
    }),
  Pte = () =>
    R(
      `kiln-spit`,
      4,
      22,
      14,
      (e, t) => {
        for (let n = 0; n < 3; n++)
          kS(
            e,
            14,
            7,
            Math.PI + (n - 1) * 0.42 + (L(n, t) - 0.5) * 0.3,
            6 + L(n, t, 2) * 4,
            1.6,
            t * 1.7 + n,
          );
        (OS(e, 15, 7, 3.4, 11 + t),
          N(e, 3 + ((t * 3) % 5), 4 + (t % 2) * 6, Rx[3]),
          N(e, 1 + ((t * 2) % 4), 7, Rx[4]));
      },
      { outline: `#08030a` },
    ),
  Fte = () =>
    R(`kiln-manaburn`, 6, 28, 28, (e, t) => {
      let n = t / 5;
      if (
        (t === 0 && (OS(e, 14, 17, 4.5, 2), V(e, 14, 17, 8, 8, Rx, 4)),
        t >= 1 && t <= 4)
      )
        for (let n = 0; n < 4; n++) {
          let r = 14 + (n - 1.5) * 3.5,
            i =
              (8 - Math.abs(n - 1.5) * 1.8) *
              (t === 4 ? 0.5 : t === 1 ? 0.7 : 1);
          kS(e, r, 21, -Math.PI / 2 + (L(n, t) - 0.5) * 0.5, i, 1.8, t + n);
        }
      for (let t = 0; t < 8; t++) {
        let r = L(t, 11) * jx,
          i = 7 + L(t, 12) * 5,
          a = am(n * 1.35 - L(t, 13) * 0.35 + 0.05);
        Mte(
          e,
          14 + Math.cos(r + a * 2.2) * i * (1 - a * 0.6),
          17 + Math.sin(r + a * 2.2) * i * 0.55 * (1 - a * 0.6) - a * 10,
          a,
        );
      }
      t === 5 &&
        (vm(e, 14, 14, 5, Rx[1], 0.5, 3),
        N(e, 12, 9, `#6a6474`),
        N(e, 17, 6, `#45404f`));
    }),
  Ite = () =>
    R(`kiln-draught`, 5, 32, 24, (e, t) => {
      let n = t / 4;
      if (t < 4)
        for (let n = 0; n < 8; n++) {
          let r = (t / 4 + L(n, 1)) % 1,
            i = 30 - r * 22,
            a = 12 + (L(n, 2) - 0.5) * 20 * (1 - r);
          for (let t = 0; t < 4; t++)
            N(
              e,
              i + t,
              a + Math.round(Math.sin((i + t) * 0.8) * 0.6),
              t === 0 ? Ix[3] : Ix[1],
            );
        }
      (P(e, 5, 12, 1.5 + n * 3, 1.5 + n * 2.5, Ix[2]),
        P(e, 5, 12, 0.8 + n * 1.8, 0.8 + n * 1.5, Ix[3]),
        N(e, 5, 12, Ix[4]),
        t === 4 &&
          (V(e, 8, 12, 7, 12, Ix, 4, 0), _m(e, 9, 12, 0.4, 10, 16, Ix, 7)));
    }),
  Lte = () =>
    R(
      `kiln-cinder`,
      4,
      14,
      12,
      (e, t) => {
        let n = (t * Math.PI) / 4,
          r = [];
        for (let e = 0; e < 5; e++) {
          let t = 2.6 + L(e, 7) * 1.2;
          r.push([
            8 + Math.cos(n + (e / 5) * jx) * t,
            6 + Math.sin(n + (e / 5) * jx) * t,
          ]);
        }
        (fm(e, r, Lx[2]),
          z(
            e,
            8 - Math.cos(n) * 2,
            6 - Math.sin(n) * 2,
            8 + Math.cos(n) * 2,
            6 + Math.sin(n) * 2,
            Ix[3],
          ),
          N(e, 8, 6, Ix[4]),
          N(e, 2 + (t % 2), 5, Ix[3]),
          N(e, 1, 7 - (t % 2), Ix[2]));
      },
      { outline: `#140806` },
    ),
  Rte = () =>
    R(`kiln-crust`, 5, 24, 14, (e, t) => {
      let n = [];
      for (let e = 0; e < 7; e++)
        n.push([3 + L(e, 21) * 18, 2 + L(e, 22) * 10]);
      for (let r = 0; r < 14; r++)
        for (let i = 0; i < 24; i++) {
          let a = Math.hypot((i + 0.5 - 12) / 10.5, (r + 0.5 - 7) / 5.5);
          if (a > 1 - L(i, r, 2) * 0.15) continue;
          let o = 1e9,
            s = 1e9,
            c = 0;
          n.forEach(([e, t], n) => {
            let a = Math.hypot(i + 0.5 - e, (r + 0.5 - t) * 1.4);
            a < o ? ((s = o), (o = a), (c = n)) : a < s && (s = a);
          });
          let l = s - o < 1.1,
            u = L(c, 23) > 0.5,
            d;
          ((d =
            t === 0
              ? a < 0.5
                ? Kx[6]
                : Kx[5]
              : t === 1
                ? l
                  ? Kx[5]
                  : a < 0.6
                    ? Kx[4]
                    : Kx[3]
                : t === 2
                  ? l
                    ? Kx[4]
                    : u
                      ? Vx[4]
                      : Vx[3]
                  : t === 3
                    ? l
                      ? Kx[2]
                      : u
                        ? Vx[3]
                        : Vx[2]
                    : l
                      ? L(i, r) > 0.6
                        ? Kx[1]
                        : Vx[4]
                      : u
                        ? Vx[2]
                        : Vx[1]),
            N(e, i, r, d));
        }
      (t === 0 && _m(e, 12, 7, 0.35, 8, 10, Ix, 3, 0.4),
        t >= 2 && N(e, 9 + t, 1, t < 4 ? `#6a6474` : `#45404f`));
    }),
  LS = () =>
    R(
      `kiln-lob`,
      6,
      18,
      18,
      (e, t) => {
        let n = (t % 3) / 3;
        (N(e, 3 - n * 2, 13 + n * 3, n < 0.5 ? Ix[3] : Lx[2]),
          IS(e, 10, 7, (t * Math.PI) / 3, 3.4, 4.6, 0.5 + (t % 2) * 0.3));
      },
      { outline: `#0a0606` },
    ),
  zte = () =>
    R(`kiln-land`, 5, 32, 24, (e, t) => {
      let n = t / 4;
      if (
        (t === 0 &&
          (P(e, 16, 18, 6, 2.4, zx[3]),
          IS(e, 16, 15, 0.2, 3.4, 4.4, 1),
          V(e, 16, 16, 8, 9, zx, 2)),
        t >= 1)
      ) {
        let n = 7 + t * 1.4;
        for (let r = -4; r <= 4; r++)
          for (let i = -n; i <= n; i++) {
            let a = Math.hypot(i / n, r / 3.2);
            if (a > 1 - L(i, r, 4) * 0.2) continue;
            let o = L(Math.floor(i / 3), r, 6) > 0.7;
            N(
              e,
              16 + i,
              18 + r,
              t === 1
                ? a < 0.5
                  ? zx[4]
                  : zx[3]
                : t === 2
                  ? o
                    ? zx[3]
                    : zx[1]
                  : o
                    ? zx[1 + +(t === 3)]
                    : Vx[t === 3 ? 3 : 2],
            );
          }
        t >= 3 && B(e, 16, 17, 6, 2.6, Vx[4]);
      }
      (Qx(e, 16, 17, am(0.15 + n * 0.85), 10, 12, Lx, 3),
        t >= 2 && vm(e, 19, 12 - t, 3 + t * 0.6, `#45404f`, t / 4, 2));
    }),
  RS = () =>
    R(`kiln-hatchclock`, 6, 32, 29, (e, t) => {
      let n = t * 2;
      for (let t = 0; t < 10; t++) {
        let r = (t / 10) * jx - Math.PI / 2 + 0.06,
          i = r + jx / 10 - 0.18,
          a = t < n;
        for (let t = r; t <= i; t += 0.02)
          for (let n = 0; n < 2; n++) {
            let r = 14 - n;
            N(
              e,
              16 + Math.cos(t) * r - 0.5,
              15 + (Math.sin(t) * r) / 1.1 - 0.5,
              a ? (n === 0 ? Ix[4] : Ix[3]) : n === 0 ? Hx[3] : Hx[1],
            );
          }
      }
      t === 5 && V(e, 16, 15, 10, 10, Ix, 5);
    }),
  zS = () =>
    R(`kiln-hatch`, 6, 24, 24, (e, t) => {
      if (
        (t <= 1 &&
          [
            [-4, -1],
            [0, -2],
            [4, -1],
            [0, 1],
          ].forEach(([n, r], i) => {
            let a = t === 0 ? 3 : 6;
            for (let t = 0; t < 3; t++) {
              let o = -Math.PI / 2 + (t - 1) * 0.5 + (L(i, t) - 0.5) * 0.3;
              z(
                e,
                12 + n,
                16 + r,
                12 + n + Math.cos(o) * a,
                16 + r + Math.sin(o) * a,
                t === 1 ? Ix[4] : Ix[3],
              );
            }
          }),
        t === 2 && (V(e, 12, 14, 10, 11, Ix, 6), P(e, 12, 15, 4, 3, Ix[4])),
        t >= 2)
      ) {
        let n = (t - 2) / 3;
        for (let t = 0; t < 9; t++) {
          let r = -Math.PI / 2 + (L(t, 8) - 0.5) * 3,
            i = 7 + L(t, 9) * 5,
            a = 12 + Math.cos(r) * i * (0.4 + n * 0.6),
            o = 15 + Math.sin(r) * i * (0.5 + n * 0.3) + n * n * 9;
          o > 19 ||
            (N(e, a, o, Gx[1], 2, 1), N(e, a, o + 1, t % 3 ? Gx[2] : Ix[2]));
        }
      }
      if (
        t >= 3 &&
        (vm(e, 12, 12, 6 - (t - 3), `#2a2630`, (t - 3) / 2.5, 4), t < 5)
      )
        for (let t = 0; t < 4; t++) {
          let n = 5 + t * 4 + (t % 2),
            r = 10 + (t % 2) * 3;
          (N(e, n, r, Ix[4]), N(e, n + 2, r, Ix[4]));
        }
    }),
  BS = () =>
    R(`kiln-grate`, 6, 26, 22, (e, t) => {
      (P(
        e,
        13,
        11,
        9.5,
        7.5,
        t <= 1 ? Rx[0] : t === 2 ? Lx[1] : t === 5 ? Ix[1] : Ix[2],
      ),
        t >= 3 &&
          (P(e, 13, 10, 7.5, 5, t === 5 ? Ix[2] : Ix[3]),
          P(e, 13, 9, 4.5, 2.6, t === 5 ? Ix[3] : Ix[4]),
          t === 4 && N(e, 12, 8, `#ffffff`, 3, 1)));
      for (let [n, r] of [
        [-4, -1],
        [1, -2],
        [-6, 3],
        [-1, 3],
        [4, 2],
      ]) {
        let i = 13 + n,
          a = 11 + r;
        (P(e, i, a, 1.9, 2.4, t <= 1 ? `#3a1a14` : Gx[1]),
          N(e, i - 1, a - 1, t <= 1 ? `#4a2a20` : Gx[2]),
          t >= 2 &&
            (N(e, i + 1, a - 2, t >= 3 ? Ix[4] : Ix[2], 1, 2),
            N(e, i - 2, a + 1, t >= 3 ? Ix[3] : Lx[2])));
      }
      if (t === 4) {
        for (let t = 0; t < 4; t++)
          kS(e, 21, 8 + t * 2, (t - 1.5) * 0.3, 5 + (t % 2) * 2, 1.4, t);
        (kS(e, 9, 4, -Math.PI / 2, 4, 1.3, 2),
          kS(e, 16, 4, -Math.PI / 2 + 0.3, 5, 1.3, 3));
      }
      if (
        (N(e, 3, 3, Ux[3], 20, 1),
        N(e, 3, 19, Ux[3], 20, 1),
        N(e, 3, 4, Ux[1], 20, 1),
        t <= 2)
      )
        for (let n = 0; n < 5; n++) {
          let r = 5 + n * 4;
          for (let i = 4; i < 19; i++) {
            let a = Math.abs(i - 11) < 16 / 3,
              o = t === 2 && a ? Math.round(Math.sign(n - 2) * 0.8) : 0,
              s = Ux[2];
            (t === 1 && a && (s = Rx[3]),
              t === 2 &&
                (s = a ? (Math.abs(i - 11) < 2 ? `#ffffff` : Ix[4]) : Rx[3]),
              N(e, r + o, i, s));
          }
        }
      else
        (N(e, 2, 3, Ux[2], 2, 17),
          N(e, 22, 3, Ux[2], 2, 17),
          N(e, 2, 3, Ux[4], 1, 17));
      t === 5 && B(e, 13, 11, 11, 9, Ix[4], (e) => Math.round(e * 12) % 2 == 0);
    }),
  Bte = () =>
    R(`kiln-venttele`, 4, 64, 64, (e, t) => {
      let n = (t + 1) / 4,
        r = jS(3, 32, 0, 0.7, 56);
      (e.save(),
        (e.globalAlpha = 0.3),
        fm(e, r, Rx[2]),
        (e.globalAlpha = 0.35),
        fm(e, jS(3, 32, 0, 0.7, 56 * n), Rx[3]),
        e.restore(),
        AS(e, r, n));
      for (let n = 0; n < 6; n++)
        N(
          e,
          14 + n * 8,
          28 + ((n * 7 + t * 3) % 9),
          t >= 2 ? Ix[2] : Lx[2],
          1,
          2,
        );
    }),
  VS = () =>
    R(`kiln-blast`, 6, 64, 64, (e, t) => {
      let n = [20, 42, 56, 58, 56, 50][t],
        r = [0, 0, 0, 0.2, 0.45, 0.75][t];
      (Ate(e, 3, 32, 0.7, n, r, t, t >= 1 && t <= 3, 64, 64),
        t <= 3 && (P(e, 4, 32, 2.6, 3.6, Ix[3]), N(e, 3, 31, Ix[4], 2, 3)),
        t >= 4 &&
          (vm(e, 22 + t * 4, 26, 7, Rx[1], r, 5),
          _m(e, 30, 32, 0.45 + t * 0.08, 12, 24, Rx, 9, -0.2)));
    }),
  HS = (() => {
    let e = [];
    for (let t = 0; t < 5; t++) {
      let n = 2 + L(t, 1) * 28,
        r = 2 + L(t, 2) * 28,
        i = L(t, 3) * jx,
        a = [[n, r]];
      for (let e = 0; e < 6; e++)
        ((i += (L(t, e, 4) - 0.5) * 1.4),
          (n += Math.cos(i) * 4),
          (r += Math.sin(i) * 4),
          a.push([n, r]));
      e.push(a);
    }
    return e;
  })();
