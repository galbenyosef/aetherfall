// index-BTsv3a2s 198 — metal
// Lines 125642-126120 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var uY = {
    staff: (e) => {
      let { ctx: t, m: n, tier: r, gem: i } = e,
        a = {
          w: n.wood.mid,
          W: n.wood.hi,
          d: n.wood.lo,
          g: i.mid,
          G: i.hi,
          l: i.lo,
          m: n.metal.mid,
          M: n.metal.hi,
          n: n.metal.lo,
          r: n.rune,
          c: n.cloth.mid,
          C: n.cloth.lo,
          "*": `#ffffff`,
        };
      (aY(
        t,
        {
          1: [
            `................`,
            `..........ww....`,
            `.........wGgw...`,
            `........wgGgdw..`,
            `........wlgld...`,
            `.........w.dw...`,
            `.........wd.....`,
          ],
          2: [
            `..........www...`,
            `.........wW..wd.`,
            `.........r.Gg.d.`,
            `.........w.gl.d.`,
            `.........r...d..`,
            `.........w......`,
            `........Mn......`,
          ],
          3: [
            `...........*....`,
            `..........Gg....`,
            `.........mGgl.m.`,
            `.........mggl.m.`,
            `.........Mgll.m.`,
            `..........mmmm..`,
            `.........mn.....`,
          ],
          4: [
            `..........*..G..`,
            `.........WW..*..`,
            `........W...Gg..`,
            `........W..Ggl..`,
            `........W...l...`,
            `.........WW.....`,
            `.........Mm.....`,
          ],
        }[r],
        a,
      ),
        aY(
          t,
          [
            `........wd......`,
            `.......wd.......`,
            `......wd........`,
            `.....wd.........`,
            `....cC..........`,
            `...wd...........`,
            `..wd............`,
            `.nn.............`,
          ],
          a,
          0,
          7,
        ));
    },
    wand: (e) => {
      let { P: t, m: n, tier: r, gem: i, ctx: a } = e;
      (iY(a, 6, 10, 10, 6, n.wood.mid),
        iY(a, 7, 10, 11, 6, n.wood.lo),
        aY(
          a,
          [`.cC.`, `cCC.`, `cC..`, `nn..`],
          { c: n.cloth.mid, C: n.cloth.lo, n: n.metal.lo },
          3,
          10,
        ),
        r >= 2 && t(6, 10, n.metal.mid, 2, 1),
        r >= 3 && (t(10, 5, n.metal.mid, 3, 1), t(12, 4, n.metal.lo, 1, 2)),
        lY(t, 11, 3, i, !0),
        t(13, 1, i.hi),
        r >= 2 && t(14, 3, i.mid),
        r === 4 && (t(9, 1, `#ffffff`), t(14, 0, i.hi)));
    },
    sword: (e) => {
      let { P: t, m: n, tier: r, gem: i, ctx: a } = e;
      (iY(a, 5, 10, 12, 3, n.metal.hi),
        iY(a, 6, 10, 12, 4, n.metal.mid),
        iY(a, 6, 11, 13, 4, n.metal.lo),
        iY(a, 3, 8, 7, 12, r >= 3 ? n.metal.hi : n.wood.mid),
        aY(
          a,
          [`.cC`, `cC.`, `n..`],
          { c: n.cloth.mid, C: n.cloth.lo, n: n.metal.lo },
          2,
          11,
        ),
        r >= 2 && lY(t, 5, 10, i),
        r === 4 && t(13, 2, `#ffffff`));
    },
    shield: (e) => {
      let { P: t, m: n, tier: r, gem: i, ctx: a } = e,
        o = r === 1 ? n.wood : n.metal;
      (aY(
        a,
        [
          `rrrrrrrrrr`,
          `rFFFFFFFFr`,
          `rFffffffFr`,
          `rFffffffFr`,
          `rFffffffFr`,
          `.rFffffFr.`,
          `.rFffffFr.`,
          `..rFffFr..`,
          `...rFFr...`,
          `....rr....`,
        ],
        { r: r >= 3 ? n.metal.hi : n.metal.mid, F: o.hi, f: o.mid },
        3,
        3,
      ),
        r === 1 && t(7, 4, n.wood.lo, 2, 6),
        r >= 2 && lY(t, 7, 7, i, !0),
        r === 4 && t(5, 4, `#ffffff`));
    },
    twinblade: (e) => uY.sword(e),
    dagger: (e) => {
      let { P: t, m: n, tier: r, gem: i, ctx: a } = e;
      (iY(a, 7, 9, 11, 5, n.metal.hi),
        iY(a, 8, 9, 11, 6, n.metal.lo),
        iY(a, 5, 8, 8, 11, r >= 3 ? n.metal.hi : n.metal.mid),
        aY(
          a,
          [`.cC`, `cC.`, `n..`],
          { c: n.cloth.mid, C: n.cloth.lo, n: n.metal.lo },
          4,
          10,
        ),
        r >= 2 && lY(t, 6, 9, i),
        r === 4 && t(12, 4, `#ffffff`));
    },
    axe: (e) => {
      let { P: t, m: n, ctx: r } = e;
      (iY(r, 4, 13, 10, 5, n.wood.mid),
        aY(
          r,
          [`..mm`, `.mMm`, `mMMm`, `.mMm`, `..mm`],
          { m: n.metal.mid, M: n.metal.hi },
          9,
          2,
        ),
        t(4, 13, n.metal.lo));
    },
    spear: (e) => {
      let { P: t, m: n, ctx: r } = e;
      (iY(r, 2, 14, 11, 5, n.wood.mid),
        aY(r, [`..M`, `.Mm`, `Mm.`], { m: n.metal.mid, M: n.metal.hi }, 11, 2),
        t(2, 14, n.metal.lo));
    },
    halberd: (e) => {
      let { P: t, m: n, ctx: r } = e;
      (iY(r, 2, 14, 12, 4, n.wood.mid),
        aY(
          r,
          [`mm..`, `mMm.`, `.mMm`, `..mm`],
          { m: n.metal.mid, M: n.metal.hi },
          7,
          4,
        ),
        t(12, 3, n.metal.hi),
        t(2, 14, n.metal.lo));
    },
    bow: (e) => {
      let { P: t, m: n, tier: r, gem: i, ctx: a } = e;
      (aY(
        a,
        [
          `..ww`,
          `.w..`,
          `w...`,
          `w...`,
          `w...`,
          `w...`,
          `w...`,
          `.w..`,
          `..ww`,
        ],
        { w: n.wood.mid },
        4,
        3,
      ),
        aY(
          a,
          [
            `...d`,
            `..d.`,
            `.d..`,
            `.d..`,
            `.d..`,
            `.d..`,
            `.d..`,
            `..d.`,
            `...d`,
          ],
          { d: n.wood.lo },
          4,
          3,
        ),
        t(4, 7, n.cloth.mid, 1, 2),
        iY(a, 8, 3, 8, 11, `#e8e2d0`),
        r >= 2 && lY(t, 3, 7, i),
        r >= 3 && (t(7, 2, n.metal.mid), t(7, 12, n.metal.mid)),
        r === 4 && t(9, 6, i.hi));
    },
    orb: (e) => {
      let { P: t, m: n, tier: r, gem: i, ctx: a } = e;
      r === 1
        ? (t(5, 12, n.wood.mid, 6, 2),
          t(4, 11, n.wood.hi, 8, 1),
          t(6, 14, n.wood.lo, 4, 1))
        : r === 2
          ? (t(5, 13, n.metal.lo, 6, 2),
            t(6, 12, n.metal.mid, 4, 1),
            t(3, 9, n.metal.mid, 1, 3),
            t(12, 9, n.metal.mid, 1, 3))
          : r === 3
            ? (t(5, 13, n.metal.lo, 6, 2),
              t(6, 12, n.metal.mid, 4, 1),
              t(2, 6, n.metal.mid, 1, 6),
              t(13, 6, n.metal.mid, 1, 6),
              t(3, 11, n.metal.hi, 1, 1),
              t(12, 11, n.metal.lo, 1, 1))
            : P(a, 8, 14, 3.5, 0.8, `rgba(126,249,255,0.45)`);
      let o = r === 4 ? 6 : 6.5;
      (P(a, 8, o, 4.8, 4.8, i.lo),
        P(a, 8, o, 3.6, 3.6, i.mid),
        P(a, 8.5, o + 0.8, 1.8, 1.8, i.hi),
        t(5, 4, `#ffffff`, 2, 1),
        t(5, 5, `#ffffff`),
        r >= 2 && t(8, 7, `#ffffff`),
        r === 4 &&
          (t(2, 6, n.metal.mid, 1, 2),
          t(13, 6, n.metal.mid, 1, 2),
          t(3, 8, n.metal.lo),
          t(12, 5, n.metal.hi),
          t(1, 2, i.hi),
          t(14, 10, i.hi)));
    },
    tome: (e) => {
      let { P: t, m: n, tier: r, gem: i } = e,
        a =
          r === 1
            ? n.wood
            : r === 2
              ? n.cloth
              : r === 3
                ? { hi: `#8a3a6a`, mid: `#5e1f48`, lo: `#3a0f2c` }
                : n.cloth;
      (t(3, 2, a.mid, 10, 12),
        t(3, 2, a.hi, 10, 1),
        t(3, 2, a.lo, 2, 12),
        t(13, 3, `#efe6d0`, 1, 10),
        t(12, 13, `#efe6d0`, 1, 1),
        t(5, 3, n.metal.mid),
        t(12, 3, n.metal.mid),
        t(5, 12, n.metal.mid),
        t(12, 12, n.metal.mid),
        r === 1
          ? (t(8, 5, n.rune),
            t(7, 6, n.rune, 3, 1),
            t(6, 7, n.rune, 5, 1),
            t(7, 8, n.rune, 3, 1),
            t(8, 9, n.rune))
          : (t(7, 5, n.metal.lo, 4, 4), lY(t, 8, 6, i, !0)),
        t(12, 7, n.metal.hi, 2, 2),
        r >= 3 && t(4, 4, n.rune, 1, 8));
    },
    spellbook: (e) => {
      let { P: t, m: n, school: r } = e,
        i = S[r].colors;
      (t(3, 1, i.robeDark, 10, 13),
        t(4, 1, i.robe, 9, 12),
        t(4, 1, i.trim, 9, 1),
        t(3, 1, i.robeDark, 2, 13),
        t(3, 4, i.trim, 2, 1),
        t(3, 10, i.trim, 2, 1),
        t(13, 2, `#efe6d0`, 1, 11),
        t(7, 4, i.glow, 4, 1),
        t(7, 10, i.glow, 4, 1),
        t(6, 5, i.glow, 1, 5),
        t(11, 5, i.glow, 1, 5),
        t(8, 6, i.orb, 2, 3),
        t(8, 6, i.spark),
        t(12, 12, n.metal.hi));
    },
    lantern: (e) => {
      let { P: t, m: n, tier: r, gem: i } = e;
      (t(7, 1, n.metal.lo, 2, 1),
        t(6, 2, n.metal.mid, 4, 1),
        t(5, 3, n.metal.mid, 6, 1),
        t(5, 4, n.metal.lo, 1, 8),
        t(10, 4, n.metal.lo, 1, 8),
        t(6, 4, i.lo, 4, 8),
        t(7, 6, i.mid, 2, 4),
        t(7, 7, i.hi, 2, 2),
        t(8, 7, `#ffffff`),
        t(4, 12, n.metal.mid, 8, 1),
        t(5, 13, n.metal.lo, 6, 1),
        r >= 2 && t(7, 4, n.metal.mid, 2, 1),
        r >= 3 && (t(4, 3, n.metal.hi), t(11, 3, n.metal.hi)),
        r === 4 && (t(2, 7, i.hi), t(13, 6, i.hi)));
    },
    wardstone: (e) => {
      let { P: t, m: n, tier: r } = e,
        i =
          r === 1
            ? { hi: `#a8a2b8`, mid: `#7c7690`, lo: `#524c66` }
            : r === 2
              ? { hi: `#b8c2d8`, mid: `#8290b0`, lo: `#4f5a7a` }
              : r === 3
                ? { hi: `#d8c8a8`, mid: `#a89070`, lo: `#6e5a40` }
                : { hi: `#ffffff`, mid: `#d8eef8`, lo: `#9cc0d8` };
      (t(4, 3, i.mid, 8, 11),
        t(5, 2, i.mid, 6, 1),
        t(4, 3, i.hi, 1, 10),
        t(5, 2, i.hi, 5, 1),
        t(11, 4, i.lo, 1, 10),
        t(4, 13, i.lo, 8, 1));
      let a = n.rune;
      (t(7, 5, a, 2, 1),
        t(6, 6, a),
        t(9, 6, a),
        t(7, 7, a, 2, 3),
        t(6, 10, a, 4, 1),
        r >= 2 && t(8, 8, `#ffffff`),
        r >= 3 && t(3, 12, n.metal.mid, 10, 2));
    },
    hat: (e) => {
      let { P: t, tier: n, school: r, gem: i } = e,
        a = S[r].colors;
      (t(8, 1, a.hat, 2, 2),
        t(10, 2, a.hatDark),
        t(7, 3, a.hat, 3, 2),
        t(6, 5, a.hat, 5, 2),
        t(5, 7, a.hat, 6, 2),
        t(9, 3, a.hatDark, 1, 6),
        t(10, 7, a.hatDark, 1, 2),
        t(5, 9, n === 1 ? a.hatDark : a.trim, 6, 1),
        t(2, 10, a.hat, 12, 2),
        t(2, 11, a.hatDark, 12, 1),
        t(3, 12, a.hatDark, 10, 1),
        n >= 2 && t(7, 5, a.trim),
        n >= 3 && (lY(t, 7, 8, i, !0), t(12, 1, a.spark)),
        n === 4 && (t(8, 0, `#ffffff`), t(4, 4, a.spark), t(13, 5, a.spark)));
    },
    robe: (e) => {
      let { P: t, tier: n, school: r, m: i } = e,
        a = S[r].colors;
      (t(3, 2, a.robe, 10, 3),
        t(1, 4, a.robe, 3, 6),
        t(12, 4, a.robe, 3, 6),
        t(1, 9, a.robeDark, 3, 1),
        t(12, 9, a.robeDark, 3, 1),
        t(4, 5, a.robe, 8, 5),
        t(3, 10, a.robe, 10, 4),
        t(9, 5, a.robeDark, 3, 9),
        t(12, 11, a.robeDark, 1, 3),
        t(6, 2, a.robeDark, 4, 1),
        t(7, 3, a.robeDark, 2, 1),
        t(7, 4, a.trim, 1, 10),
        t(3, 13, a.trim, 10, 1),
        t(4, 8, n === 1 ? a.robeDark : i.metal.mid, 8, 1),
        n >= 2 && (t(1, 9, a.trim, 3, 1), t(12, 9, a.trim, 3, 1)),
        n >= 3 &&
          (t(3, 2, a.trim, 3, 1),
          t(10, 2, a.trim, 3, 1),
          t(7, 8, i.gem.mid, 2, 1)),
        n === 4 && (t(5, 11, a.spark), t(10, 12, a.spark)));
    },
    gloves: (e) => {
      let { P: t, m: n, tier: r, gem: i } = e,
        a =
          r === 1
            ? n.cloth
            : r === 2
              ? { hi: `#9a78c8`, mid: `#6a4c98`, lo: `#3e2a62` }
              : n.metal;
      (t(5, 5, a.mid, 6, 6),
        t(5, 2, a.mid, 1, 3),
        t(7, 1, a.mid, 1, 4),
        t(9, 2, a.mid, 1, 3),
        t(3, 6, a.mid, 2, 2),
        t(10, 5, a.lo, 1, 6),
        t(6, 3, a.lo),
        t(8, 3, a.lo),
        t(5, 5, a.hi, 1, 3),
        t(4, 11, r === 1 ? n.cloth.lo : n.metal.lo, 8, 3),
        t(4, 11, r === 1 ? n.cloth.mid : n.metal.mid, 8, 1),
        r >= 2 && t(7, 7, n.rune, 2, 2),
        r >= 3 && lY(t, 7, 12, i));
    },
    boots: (e) => {
      let { P: t, m: n, tier: r } = e,
        i =
          r === 1
            ? n.wood
            : r === 2
              ? { hi: `#8a7a6a`, mid: `#5a4a3c`, lo: `#3a2e24` }
              : r === 3
                ? { hi: `#6a5a8a`, mid: `#46385e`, lo: `#2a2040` }
                : n.cloth;
      (t(4, 2, i.mid, 5, 8),
        t(4, 2, i.hi, 1, 8),
        t(8, 2, i.lo, 1, 8),
        t(4, 10, i.mid, 9, 3),
        t(11, 11, i.mid, 2, 2),
        t(4, 13, i.lo, 9, 1),
        t(3, 2, r >= 3 ? n.metal.mid : i.hi, 7, 2),
        r >= 2 && t(5, 6, n.metal.mid, 3, 1),
        r === 4 &&
          (t(12, 8, `#ffffff`), t(1, 11, n.gem.hi), t(2, 9, n.gem.mid)));
    },
    amulet: (e) => {
      let { P: t, m: n, tier: r, gem: i, ctx: a } = e,
        o = r === 1 ? n.cloth.lo : n.metal.mid;
      (iY(a, 2, 1, 7, 8, o),
        iY(a, 13, 1, 8, 8, o),
        t(6, 8, n.metal.mid, 4, 1),
        t(5, 9, n.metal.mid, 6, 3),
        t(6, 12, n.metal.mid, 4, 1),
        t(7, 13, n.metal.lo, 2, 1),
        t(6, 9, i.lo, 4, 3),
        t(7, 9, i.mid, 2, 2),
        t(7, 9, i.hi),
        r >= 3 && (t(4, 10, n.metal.hi), t(11, 10, n.metal.hi)));
    },
    ring: (e) => {
      let { P: t, m: n, gem: r, tier: i } = e;
      (oY(e.ctx, n.metal),
        t(6, 5, n.metal.lo, 5, 2),
        t(6, 3, r.lo, 5, 3),
        t(7, 2, r.mid, 3, 3),
        t(7, 2, r.hi),
        i >= 3 && (t(5, 4, n.metal.hi), t(11, 4, n.metal.hi)),
        i === 4 && t(12, 1, `#ffffff`));
    },
    shard: (e) => {
      let { P: t, gem: n, tier: r, ctx: i } = e,
        a = r === 1 ? 8 : r === 2 ? 10 : 12,
        o = 14 - a;
      for (let e = 0; e < a; e++) {
        let r = e < 3 ? 1 + e : e > a - 3 ? 3 : 4,
          i = 8 - Math.floor(r / 2) + (e < a / 2 ? 0 : -1 + (e % 2));
        (t(i, o + e, n.mid, r, 1),
          t(i, o + e, n.hi),
          t(i + r - 1, o + e, n.lo));
      }
      (t(8, o + 2, `#ffffff`, 1, 2),
        r >= 3 &&
          (t(4, 12, n.lo, 2, 2),
          t(4, 12, n.mid),
          t(11, 11, n.lo, 2, 3),
          t(11, 11, n.hi)),
        r === 4 &&
          (P(i, 8, 13.5, 3, 0.8, n.lo), t(2, 5, n.hi), t(13, 3, n.hi)));
    },
  },
  dY = new Map();
