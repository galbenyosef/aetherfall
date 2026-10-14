// hd2d-FOjpdF4f 33 — face
// Lines 10187-10603 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
var Ol = class {
  src;
  atlas;
  o;
  root = new F();
  solids = [];
  mats = [];
  occl = yr();
  section = null;
  sectionTex = null;
  floorTex = null;
  fp = { gx0: 0, gy0: 0, fw: 0, fh: 0 };
  constructor(e, t, n) {
    ((this.src = e),
      (this.atlas = t),
      (this.o = n),
      (this.root.name = `hd2d-space-solids`),
      (this.root.matrixAutoUpdate = !1));
  }
  buildCpu() {
    let e = this.src,
      n = new Ar(),
      r = e.floor,
      i = r.frames.find((e) => !!e),
      a = i?.width ?? 0,
      o = i?.height ?? 0,
      s = i ? t(i) : 1,
      c = (e = {}) => ({
        x0: r.x,
        y0: r.y,
        ax: 0,
        ay: 0,
        aw: a,
        ah: o,
        baseY: 0,
        height: 0,
        dens: s,
        ...e,
      }),
      l = e.caps,
      u = (e) =>
        l
          ? {
              x0: r.x,
              y0: r.y - e,
              ax: 0,
              ay: 0,
              aw: l.width,
              ah: l.height,
              baseY: 0,
              height: 0,
              dens: t(l),
            }
          : null,
      d = (e, t, r, i, a, o) => {
        for (let s = e; s < t; s += Cl) {
          let e = Math.min(t, s + Cl),
            c = {
              x0: s,
              y0: r - a,
              ax: 0,
              ay: 0,
              aw: Cl,
              ah: wl,
              baseY: 0,
              height: 0,
            };
          n.at((s + e) / 2, r, xl).face(
            [
              [s, r, i],
              [e, r, i],
              [e, r, a],
              [s, r, a],
            ],
            o,
            c,
          );
        }
      },
      f = e.grid;
    if (f) {
      let e = (e, t) =>
          e < 0 || t < 0 || e >= f.cols || t >= f.rows
            ? 0
            : f.h[t * f.cols + e],
        t = (e, t) =>
          e < 0 ||
          t < 0 ||
          e >= f.cols ||
          t >= f.rows ||
          f.cap[t * f.cols + e] !== 0;
      for (let r = 0; r < f.rows; r++)
        for (let i = 0; i < f.cols; i++) {
          let a = r * f.cols + i,
            o = f.h[a];
          if (!o) continue;
          let s = f.x0 + i * vl,
            l = s + vl,
            p = f.y0 + r * vl,
            m = p + vl,
            h = s + 8,
            g = p + 8,
            _ = c({ baseY: m }),
            v = f.cap[a];
          v === 1 && u(o)
            ? n.at(h, g, bl).face(
                [
                  [s, p, o],
                  [l, p, o],
                  [l, m, o],
                  [s, m, o],
                ],
                [0, 0, 1],
                u(o),
              )
            : (v === 1 || v === 2) &&
              n.at(h, g, yl).face(
                [
                  [s, p, o],
                  [l, p, o],
                  [l, m, o],
                  [s, m, o],
                ],
                [0, 0, 1],
                _,
              );
          let y = e(i, r + 1),
            b = e(i, r - 1),
            x = e(i - 1, r),
            S = e(i + 1, r);
          y < o &&
            ((f.section ? f.section[a] === 1 : t(i, r + 1))
              ? d(s, l, m, y, o, [0, 1, 0])
              : n.at(h, g, yl).face(
                  [
                    [s, m, y],
                    [l, m, y],
                    [l, m, o],
                    [s, m, o],
                  ],
                  [0, 1, 0],
                  _,
                ));
          let C = n.at(h, g, yl);
          (b < o &&
            C.face(
              [
                [s, p, b],
                [l, p, b],
                [l, p, o],
                [s, p, o],
              ],
              [0, -1, 0],
              _,
            ),
            x < o &&
              C.face(
                [
                  [s, p, x],
                  [s, m, x],
                  [s, m, o],
                  [s, p, o],
                ],
                [-1, 0, 0],
                { ..._, x0: _.x0 - 0.5, shade: vr },
              ),
            S < o &&
              C.face(
                [
                  [l, p, S],
                  [l, m, S],
                  [l, m, o],
                  [l, p, o],
                ],
                [1, 0, 0],
                { ..._, x0: _.x0 + 0.5, shade: vr },
              ));
        }
    }
    for (let t of e.boxes) this.box(n, t, c, d);
    if (e.solids.length && this.atlas) {
      let t = new Ti();
      for (let { it: r, depth: i, foot: a } of e.solids) {
        let e = this.atlas.rect(r.c),
          o = r.x + r.c.width / 2,
          s = t.of(r.c),
          c = n.at(o, r.baseY, Sl + e.page);
        ki(c, r, e, s, i) || Ai(c, c, r, e, s, i, a);
      }
    }
    this.solids = n.list
      .filter((e) => e.b.vertices > 0)
      .map((e) => ({
        page: e.page,
        arrays: e.b.arrays(),
        b: [...e.b.bounds],
        mesh: null,
      }));
  }
  box(e, n, r, i) {
    let { x0: a, y0: o, x1: s, y1: c, h: l } = n;
    if (!(l > 0) || !(s > a) || !(c > o)) return;
    let u = (a + s) / 2,
      d = (o + c) / 2,
      f = this.src.floor,
      p = n.texX ?? f.x,
      m = n.texY ?? f.y,
      h = yl,
      g = r({ x0: p, y0: m, baseY: c });
    if (n.tex && this.atlas) {
      let e = this.atlas.rect(n.tex);
      ((h = Sl + e.page), (g = kl(e, p, m, c, t(n.tex))));
    }
    let _ = e.at(u, d, h);
    if (n.cap === `oblique`)
      _.face(
        [
          [a, o, l],
          [s, o, l],
          [s, c, l],
          [a, c, l],
        ],
        [0, 0, 1],
        g,
      );
    else if (n.cap === `own`) {
      let r = n.capTex ?? (n.tex ? void 0 : this.src.caps);
      if (n.capTex && this.atlas) {
        let r = this.atlas.rect(n.capTex);
        e.at(u, d, Sl + r.page).face(
          [
            [a, o, l],
            [s, o, l],
            [s, c, l],
            [a, c, l],
          ],
          [0, 0, 1],
          kl(r, p, m - l, c, t(n.capTex)),
        );
      } else
        r
          ? e.at(u, d, bl).face(
              [
                [a, o, l],
                [s, o, l],
                [s, c, l],
                [a, c, l],
              ],
              [0, 0, 1],
              {
                x0: f.x,
                y0: f.y - l,
                ax: 0,
                ay: 0,
                aw: r.width,
                ah: r.height,
                baseY: 0,
                height: 0,
                dens: t(r),
              },
            )
          : _.face(
              [
                [a, o, l],
                [s, o, l],
                [s, c, l],
                [a, c, l],
              ],
              [0, 0, 1],
              { ...g, y0: g.y0 - l },
            );
    }
    if (n.section && n.sectionTex && this.atlas) {
      let r = this.atlas.rect(n.sectionTex);
      e.at(u, d, Sl + r.page).face(
        [
          [a, c, 0],
          [s, c, 0],
          [s, c, l],
          [a, c, l],
        ],
        [0, 1, 0],
        kl(r, a, c - l, c, t(n.sectionTex)),
      );
    } else
      n.section
        ? i(a, s, c, 0, l, [0, 1, 0])
        : _.face(
            [
              [a, c, 0],
              [s, c, 0],
              [s, c, l],
              [a, c, l],
            ],
            [0, 1, 0],
            g,
          );
    let v = n.side ?? 0.6;
    (_.face(
      [
        [a, o, 0],
        [a, c, 0],
        [a, c, l],
        [a, o, l],
      ],
      [-1, 0, 0],
      { ...g, x0: g.x0 - 0.5, shade: v },
    ),
      _.face(
        [
          [s, o, 0],
          [s, c, 0],
          [s, c, l],
          [s, o, l],
        ],
        [1, 0, 0],
        { ...g, x0: g.x0 + 0.5, shade: v },
      ),
      n.back !== !1 &&
        _.face(
          [
            [a, o, 0],
            [s, o, 0],
            [s, o, l],
            [a, o, l],
          ],
          [0, -1, 0],
          g,
        ));
  }
  buildGpu(e, t) {
    (this.disposeGpu(), (this.floorTex = e), (this.section ??= Dl(this.o.bg)));
    let n = new He(this.section);
    ((n.flipY = !1),
      (n.colorSpace = ``),
      (n.generateMipmaps = !1),
      (n.magFilter = n.minFilter = R),
      (n.needsUpdate = !0),
      (this.sectionTex = n));
    let { lit: r, fog: i } = this.o,
      a = (e) =>
        e
          ? [
              Tr({ map: e, lit: r, occl: this.occl, pass: `cut`, fog: i }),
              Tr({ map: e, lit: r, occl: this.occl, pass: `shadow` }),
            ]
          : null;
    this.mats = [
      a(e),
      a(t),
      a(n),
      ...(this.atlas?.textures ?? []).map((e) => a(e)),
    ];
    for (let e of this.solids) {
      let t = this.mats[e.page];
      if (!t) continue;
      let n = Or(e.arrays);
      n.computeBoundingSphere();
      let r = new I(n, t[0]);
      ((r.customDepthMaterial = r.customDistanceMaterial = t[1]),
        (r.frustumCulled = !1),
        (r.matrixAutoUpdate = !1),
        (e.mesh = r),
        this.root.add(r));
    }
  }
  setFloor(e) {
    if (!e || e === this.floorTex) return;
    this.floorTex = e;
    let t = this.mats[yl];
    if (t) for (let n of t) n.uniforms.uMap.value = e;
  }
  update(e) {
    (this.occl.uOccl.value.set(e.occl.sx, e.occl.sy, e.occl.wy, 1),
      this.occl.uOcclView.value.set(e.cam.W, e.cam.H));
    let t = e.f.fp;
    this.fp = t;
    for (let e of this.solids)
      e.mesh &&
        (e.mesh.visible =
          e.b[3] >= t.gx0 &&
          e.b[0] <= t.gx0 + t.fw &&
          e.b[4] >= t.gy0 &&
          e.b[1] <= t.gy0 + t.fh + Tl);
  }
  casters(e) {
    let t = this.fp;
    for (let n of this.solids)
      n.mesh &&
        n.b[3] >= t.gx0 - El &&
        n.b[0] <= t.gx0 + t.fw + El &&
        n.b[4] >= t.gy0 - El &&
        n.b[1] <= t.gy0 + t.fh + El &&
        e.push(n.mesh);
  }
  stats() {
    return {
      vertices: this.solids.reduce(
        (e, t) => e + t.arrays.position.length / 3,
        0,
      ),
      meshes: this.solids.length,
    };
  }
  get texBytes() {
    return Cl * wl * 4;
  }
  disposeGpu() {
    for (let e of this.solids)
      e.mesh &&= (this.root.remove(e.mesh), e.mesh.geometry.dispose(), null);
    for (let e of this.mats) if (e) for (let t of e) t.dispose();
    ((this.mats = []), this.sectionTex?.dispose(), (this.sectionTex = null));
  }
  dispose() {
    (this.disposeGpu(), (this.solids = []));
  }
};
