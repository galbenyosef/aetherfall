// index-BTsv3a2s 24 — floor
// Lines 24427-24756 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var fs = (e, t, n, r, i, a = !1) => ({
    kind: e,
    layer: t,
    foot: n,
    blocks: r,
    weight: i,
    gore: a,
  }),
  ps = {
    cistern: [
      fs(`c_sluicegate`, `wall`, [2, 1], !1, 1),
      fs(`c_pipe`, `wall`, [1, 1], !1, 2),
      fs(`c_chain`, `wall`, [1, 1], !1, 1.5),
      fs(`c_statue`, `floor`, [1, 1], !0, 1),
      fs(`c_column`, `floor`, [1, 1], !0, 1.2),
      fs(`c_crates`, `floor`, [1, 1], !0, 1.2),
      fs(`c_pump`, `floor`, [1, 1], !0, 0.6),
      fs(`c_glowcaps`, `floor`, [1, 1], !1, 2),
      fs(`c_eggs`, `floor`, [1, 1], !1, 1.2),
      fs(`c_drain`, `decal`, [1, 1], !1, 1),
    ],
    barrow: [
      fs(`b_ossuary`, `wall`, [2, 1], !1, 2),
      fs(`b_banner`, `wall`, [1, 1], !1, 1.5),
      fs(`b_roots`, `wall`, [1, 1], !1, 1.5),
      fs(`b_sarcophagus`, `floor`, [2, 1], !0, 1.5),
      fs(`b_sarcophagus_open`, `floor`, [2, 1], !0, 0.8),
      fs(`b_pikes`, `floor`, [1, 1], !0, 0.8),
      fs(`b_gravestone`, `floor`, [1, 1], !0, 1.2),
      fs(`b_candles`, `floor`, [1, 1], !1, 2.6),
      fs(`b_bones`, `floor`, [1, 1], !1, 1.5),
      fs(`b_urns`, `floor`, [1, 1], !1, 1),
      fs(`b_rats`, `floor`, [1, 1], !1, 0.6),
      fs(`b_shroud`, `floor`, [2, 1], !1, 0.8),
      fs(`b_massgrave`, `decal`, [3, 2], !1, 0.7),
    ],
    rime: [
      fs(`r_icefall`, `wall`, [2, 1], !1, 1.2),
      fs(`r_icicles`, `wall`, [1, 1], !1, 2),
      fs(`r_column`, `floor`, [1, 1], !0, 1),
      fs(`r_frozen`, `floor`, [1, 1], !0, 1.2),
      fs(`r_boat`, `floor`, [3, 1], !0, 0.5),
      fs(`r_nets`, `floor`, [1, 1], !0, 0.8),
      fs(`r_stalagmite`, `floor`, [1, 1], !0, 1.5),
      fs(`r_shell`, `floor`, [2, 1], !0, 0.3),
      fs(`r_crystals`, `floor`, [1, 1], !1, 2),
      fs(`r_drift`, `floor`, [2, 1], !1, 1.5),
      fs(`r_wisp`, `floor`, [1, 1], !1, 1),
    ],
    ember: [
      fs(`e_lavafall`, `wall`, [1, 1], !1, 1),
      fs(`e_banner`, `wall`, [1, 1], !1, 1.2),
      fs(`e_bucket`, `wall`, [1, 1], !1, 1),
      fs(`e_spire`, `floor`, [1, 1], !0, 1.5),
      fs(`e_cart`, `floor`, [2, 1], !0, 0.7),
      fs(`e_anvil`, `floor`, [1, 1], !0, 0.6),
      fs(`e_nest`, `floor`, [2, 1], !1, 1.2),
      fs(`e_charred`, `floor`, [1, 1], !1, 1),
      fs(`e_geyser`, `floor`, [1, 1], !1, 1),
      fs(`e_brimstone`, `floor`, [1, 1], !1, 1.2),
      fs(`e_rails`, `decal`, [2, 1], !1, 0.8),
    ],
    folly: [
      fs(`f_chained`, `wall`, [1, 1], !1, 1.5, !0),
      fs(`f_chained_drained`, `wall`, [1, 1], !1, 1.2, !0),
      fs(`f_hooks`, `wall`, [2, 1], !1, 0.8, !0),
      fs(`f_portrait`, `wall`, [2, 1], !1, 0.6),
      fs(`f_writing`, `wall`, [2, 1], !1, 0.8, !0),
      fs(`f_hands`, `wall`, [1, 1], !1, 1, !0),
      fs(`f_cage`, `floor`, [1, 1], !0, 1, !0),
      fs(`f_brazier`, `floor`, [1, 1], !0, 1.2),
      fs(`f_basin`, `floor`, [1, 1], !0, 0.7, !0),
      fs(`f_growth`, `floor`, [1, 1], !0, 0.5),
      fs(`f_candles`, `floor`, [1, 1], !1, 1.5),
      fs(`f_bones`, `floor`, [1, 1], !1, 1, !0),
      fs(`f_torso`, `floor`, [1, 1], !1, 0.7, !0),
      fs(`f_drained`, `floor`, [2, 1], !1, 1, !0),
      fs(`f_chair`, `floor`, [1, 1], !1, 0.6),
      fs(`f_pool`, `decal`, [1, 1], !1, 2, !0),
      fs(`f_smear`, `decal`, [2, 1], !1, 1.2, !0),
      fs(`f_spray`, `decal`, [1, 1], !1, 1.2, !0),
      fs(`f_arm`, `decal`, [1, 1], !1, 0.8, !0),
      fs(`f_leg`, `decal`, [1, 1], !1, 0.8, !0),
      fs(`f_hand`, `decal`, [1, 1], !1, 0.8, !0),
      fs(`f_head`, `decal`, [1, 1], !1, 0.4, !0),
    ],
  },
  ms = {
    circle: `f_pentagram_s`,
    bigCircle: `f_pentagram`,
    crystal: `f_crystal`,
    kneelers: [`f_kneeler_a`, `f_kneeler_b`, `f_kneeler_c`],
    altar: `f_altar`,
    shrine: `f_shrine`,
    lectern: `f_lectern`,
  };
function hs(e) {
  let {
      theme: t,
      floorIndex: n,
      rooms: r,
      props: i,
      spawns: a,
      T: o,
      rng: s,
      keep: c,
    } = e,
    l = new Set(),
    u = (e, t) => `${e},${t}`;
  for (let e of i) l.add(u(e.x, e.y));
  for (let e of a) l.add(u(Math.floor(e.x), Math.floor(e.y)));
  (l.add(u(e.exit.x, e.exit.y)), l.add(u(e.entry.x, e.entry.y)));
  let d = t === `folly`,
    f = d ? ([0.45, 0.9, 1.3][n] ?? 1) : 1,
    p = ps[t],
    m = (e, t) => {
      let r = p.filter(
          (n) => n.layer === e && (t === void 0 || n.blocks === t),
        ),
        i = r.map((e) => e.weight * (e.gore ? f : d && n === 0 ? 1.8 : 1)),
        a = s() * i.reduce((e, t) => e + t, 0);
      for (let e = 0; e < r.length; e++) if ((a -= i[e]) <= 0) return r[e];
      return r[r.length - 1];
    },
    h = (e, t, n) => t >= e.x && n >= e.y && t < e.x + e.w && n < e.y + e.h,
    g = (e, t) => o(e, t) === 1 || o(e, t) === 9,
    _ = (e, t, n, r) => {
      for (let i = 0; i < t.foot[1]; i++)
        for (let a = 0; a < t.foot[0]; a++) {
          let o = n + a,
            s = r - i;
          if (
            !h(e, o, s) ||
            !g(o, s) ||
            l.has(u(o, s)) ||
            (t.blocks && c(e, o, s))
          )
            return !1;
        }
      return !0;
    },
    v = (e, t, n, r, a, o, c, d = {}) => {
      for (let e = 0; e < a[1]; e++)
        for (let t = 0; t < a[0]; t++) c !== `decal` && l.add(u(n + t, r - e));
      i.push({
        x: n,
        y: r,
        kind: t,
        room: e.index,
        w: a[0],
        h: a[1],
        blocks: o,
        layer: c,
        variant: Math.floor(s() * 8),
        ...d,
      });
    },
    y = (e, t, n) => {
      for (let r = 0; r < 12 && n.length; r++) {
        let [r, i] = n[Math.floor(s() * n.length)];
        if (_(e, t, r, i))
          return (v(e, t.kind, r, i, t.foot, t.blocks, t.layer), !0);
      }
      return !1;
    },
    b = (e, t) => {
      let n = [];
      for (let r = e.y; r < e.y + e.h; r++)
        for (let i = e.x; i < e.x + e.w; i++) t(i, r) && n.push([i, r]);
      return n;
    };
  for (let e of r) {
    let r = e.x + Math.floor(e.w / 2),
      a = e.y + Math.floor(e.h / 2),
      x = b(e, (t, n) => !c(e, t, n) && g(t, n));
    if (d) {
      if (e.kind === `boss`) {
        i.push({
          x: r - 2,
          y: a + 2,
          kind: ms.bigCircle,
          room: e.index,
          w: 5,
          h: 5,
          blocks: !1,
          layer: `decal`,
        });
        for (let t = 0; t < 5; t++) {
          let n = -Math.PI / 2 + (t * 2 * Math.PI) / 5,
            i = Math.round(r + Math.cos(n) * 2.6),
            s = Math.round(a + Math.sin(n) * 2.6);
          !l.has(u(i, s)) &&
            jo(o(i, s)) &&
            v(e, ms.kneelers[t % 3], i, s, [1, 1], !1, `floor`, {
              text: `siphoned`,
            });
        }
      } else if (
        (e.kind === `hall` || e.kind === `pylon` || e.kind === `elite`) &&
        x.length &&
        s() < [0.35, 0.8, 1][n]
      ) {
        let t = x.filter(
          ([e, t]) =>
            g(e, t) &&
            !l.has(u(e, t)) &&
            Math.abs(e - r) >= 3 &&
            Math.abs(t - a) >= 2,
        );
        if (t.length) {
          let [n, r] = t[Math.floor(s() * t.length)];
          (i.push({
            x: n - 1,
            y: r + 1,
            kind: ms.circle,
            room: e.index,
            w: 3,
            h: 3,
            blocks: !1,
            layer: `decal`,
          }),
            v(e, ms.crystal, n, r, [1, 1], !0, `floor`));
          let a = [
              [n - 1, r + 1],
              [n + 1, r + 1],
              [n - 1, r - 1],
              [n + 1, r - 1],
              [n, r + 1],
            ],
            o = 2 + Math.floor(s() * 2);
          for (let [t, n] of a) {
            if (o <= 0) break;
            h(e, t, n) &&
              g(t, n) &&
              !l.has(u(t, n)) &&
              (v(
                e,
                ms.kneelers[Math.floor(s() * 3)],
                t,
                n,
                [1, 1],
                !1,
                `floor`,
                { text: `siphoned` },
              ),
              o--);
          }
        }
      }
      if (e.kind === `waystone` && n >= 1) {
        let t = { foot: [3, 1], blocks: !0 },
          n = x.filter(([n, r]) => _(e, t, n, r));
        if (n.length) {
          let [t, r] = n[Math.floor(s() * n.length)];
          v(e, ms.altar, t, r, [3, 1], !0, `floor`);
        }
      }
      if (e.kind === `lore`) {
        let t =
            n === 0
              ? { kind: ms.shrine, foot: [2, 1] }
              : { kind: ms.lectern, foot: [1, 1] },
          r = x.filter(([n, r]) => _(e, { foot: t.foot, blocks: !0 }, n, r));
        if (r.length) {
          let [n, i] = r[Math.floor(s() * r.length)];
          v(e, t.kind, n, i, t.foot, !0, `floor`);
        }
      }
    }
    if (t === `barrow` && e.kind === `boss`) {
      let t = x.filter(([e, t]) => g(e, t) && !l.has(u(e, t)));
      for (let n = 0; n < 6 && t.length; n++) {
        let [n, r] = t.splice(Math.floor(s() * t.length), 1)[0];
        v(e, `b_candles`, n, r, [1, 1], !1, `floor`);
      }
    }
    let S = [];
    for (let t = e.x; t < e.x + e.w; t++)
      o(t, e.y - 1) === 2 &&
        (t - e.x - 1) % 4 != 0 &&
        !l.has(u(t, e.y - 1)) &&
        S.push(t);
    let C = Math.max(1, Math.floor(e.w / 7));
    for (let t = 0; t < 10 && C > 0 && S.length; t++) {
      let t = m(`wall`),
        n = S[Math.floor(s() * S.length)],
        r = !0;
      for (let i = 0; i < t.foot[0]; i++)
        (!S.includes(n + i) || l.has(u(n + i, e.y - 1))) && (r = !1);
      r && (v(e, t.kind, n, e.y - 1, t.foot, !1, `wall`), C--);
    }
    let w = e.w * e.h,
      T = Math.min(e.kind === `boss` ? 8 : 5, Math.round(w / 26)),
      E = b(
        e,
        (e, t) => g(e, t) && (Math.abs(e - r) > 1 || Math.abs(t - a) > 1),
      );
    for (let t = 0; t < T; t++) {
      let t = m(`floor`, x.length > 0 && s() < 0.45);
      y(e, t, t.blocks ? x : E);
    }
    if (p.some((e) => e.layer === `decal`)) {
      let t = Math.min(
          d ? 12 : 4,
          Math.round((w / (d ? 24 : 40)) * (d ? f : 1)),
        ),
        n = b(e, (e, t) => g(e, t));
      for (let o = 0; o < t; o++) {
        let t = m(`decal`),
          [o, c] = n[Math.floor(s() * n.length)] ?? [r, a],
          l = !0;
        for (let n = 0; n < t.foot[1]; n++)
          for (let r = 0; r < t.foot[0]; r++)
            (!h(e, o + r, c - n) || !g(o + r, c - n)) && (l = !1);
        l &&
          i.push({
            x: o,
            y: c,
            kind: t.kind,
            room: e.index,
            w: t.foot[0],
            h: t.foot[1],
            blocks: !1,
            layer: `decal`,
            variant: Math.floor(s() * 8),
          });
      }
    }
  }
}
