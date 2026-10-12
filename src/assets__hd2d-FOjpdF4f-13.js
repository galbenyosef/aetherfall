// assets__hd2d-FOjpdF4f 13 — mesh
// Lines 4169-4465 of readable/assets__hd2d-FOjpdF4f.pretty.js (statement-aligned).
var zi = 320,
  Bi = class {
    host;
    o;
    root = new F();
    cam;
    occl = yr();
    atlas = null;
    props = null;
    glb = null;
    standIns;
    solids = [];
    doors = [];
    mats = [];
    ver = -1;
    glbVer = -1;
    fp = { gx0: 0, gy0: 0, fw: 0, fh: 0 };
    constructor(e, t) {
      ((this.host = e),
        (this.o = t),
        (this.root.name = `hd2d-scenery`),
        (this.cam = t.cam ?? Ot()),
        (this.standIns = new ii({
          lit: t.lit,
          occl: this.occl,
          fog: t.fog ?? ``,
        })),
        this.root.add(this.standIns.root),
        Hr(
          new Set(
            e.scenery.items
              .map((e) => e.art ?? e.key)
              .filter((e) => e.startsWith(`model:`))
              .map((e) => e.slice(6)),
          ),
        ),
        this.buildCpu(),
        this.buildGpu());
    }
    buildCpu() {
      ((this.ver = a()), (this.glbVer = Br()));
      let e = this.host.scenery,
        t = new et(),
        n = [],
        r = [],
        i = [],
        o = [],
        s = [],
        c = [],
        u = new Set(),
        f = new Set();
      for (let t of e.items) {
        if (t.wall || t.door || t.kind === `dressing`) continue;
        let n = e.sourceOf(t)?.p,
          r = qr(t, n);
        r && (c.push({ it: t, p: n, a: r }), u.add(t), f.add(t.key));
      }
      for (let a of e.items) {
        if (
          u.has(a) ||
          (a.parent && u.has(a.parent)) ||
          (a.kind === `dressing` && f.has(a.key.replace(/-front-\d+$/, ``)))
        )
          continue;
        if (a.wall) {
          (n.push(a), t.want(a.c));
          continue;
        }
        if (a.door && a.parent && a.door.frames.length) {
          (r.push(a), t.wantFrames(a.door.frames));
          continue;
        }
        let c = e.sourceOf(a)?.p;
        if (c && !a.frames) {
          let e = c.mode === `tower` ? Mi(c, Ci(a.c)) : null;
          if (e) {
            (o.push({ it: a, s: e }), t.want(a.c));
            continue;
          }
          if (c.mode === `rect` || c.mode === `tower`) {
            (i.push({ it: a, p: c }), t.want(a.c));
            continue;
          }
        }
        (s.push(a), a.frames ? t.wantFrames(a.frames) : t.want(a.c));
      }
      t.pack();
      let p = new Ar(),
        h = new Ar(),
        g = new Ar(),
        _ = new Ti(),
        v = x().walls,
        y = ae(),
        b = (e) =>
          (v.pal?.[e] ?? 0) === 0 && y
            ? null
            : v.flag[e] & d.ARCH
              ? Wr(`gate`)
              : Wr(`wall:${v.pal?.[e] ?? 0}`);
      yi(n, t, p, v, (e, t) => !!b(t * v.n + e));
      for (let { it: e, p: n } of i) {
        let r = t.rect(e.c),
          i = wi(e),
          a = i.x + i.c.width / 2,
          o = _.of(i.c);
        ki(p.at(a, i.baseY, r.page), i, r, o, n.h * 16) ||
          Ai(
            p.at(a, i.baseY, r.page),
            h.at(a, i.baseY, r.page),
            i,
            r,
            o,
            n.h * 16,
          );
      }
      for (let { it: e, s: n } of o) {
        let r = t.rect(e.c),
          i = wi(e);
        Ii(p.at(i.x + i.c.width / 2, i.baseY, r.page), i, r, n);
      }
      let S = new Map();
      for (let e of r) {
        let n = t.frames(e.door.frames),
          r = e.parent,
          i = g.at(r.x + m(r.c) / 2, r.baseY, n[0].page),
          a = Li(i, e, n);
        a && S.set(i, [...(S.get(i) ?? []), a]);
      }
      let C = (e, t) =>
        e.list
          .filter((e) => e.b.vertices > 0)
          .map((e) => ({
            page: e.page,
            arrays: e.b.arrays(),
            b: [...e.b.bounds],
            casts: t,
            mesh: null,
          }));
      ((this.solids = [...C(p, !0), ...C(h, !1)]),
        (this.doors = g.list
          .filter((e) => e.b.vertices > 0)
          .map((e) => ({
            page: e.page,
            arrays: e.b.arrays(),
            b: [...e.b.bounds],
            casts: !0,
            mesh: null,
            quads: S.get(e.b) ?? [],
          }))),
        (this.atlas = t),
        (this.props = new vi(s, t, { lit: this.o.lit, cam: this.cam })));
      for (let [e, t] of Gr()) {
        let n = l[e.slice(8)];
        if (!n) continue;
        let r = t.meta.sizePx.widthPx,
          i = { width: r, height: t.meta.sizePx.heightPx };
        c.push({
          it: {
            key: e,
            kind: `door`,
            c: i,
            x: n.x * 16 + 8 - r / 2,
            y: n.y * 16 + 16 - t.meta.sizePx.heightPx,
            baseY: n.y * 16 + 16,
            tx: n.x,
            ty: n.y,
          },
          p: void 0,
          a: t,
        });
      }
      (c.push(...Ui(v, b)),
        (this.glb = c.length
          ? new ri(c, {
              lit: this.o.lit,
              occl: this.occl,
              fog: this.o.fog ?? ``,
            })
          : null));
    }
    buildGpu() {
      let e = this.atlas;
      if (!e) return;
      e.buildGpu();
      let { lit: t, fog: n } = this.o;
      this.mats = e.textures.map((e) => [
        Tr({ map: e, lit: t, occl: this.occl, pass: `cut`, fog: n }),
        Tr({ map: e, lit: t, occl: this.occl, pass: `shadow` }),
      ]);
      let r = (e, t) => {
        let n = Or(e.arrays, t ? [`aAtlas`] : []);
        (n.computeBoundingSphere(), n.computeBoundingBox());
        let [r, i] = this.mats[e.page],
          a = new I(n, r);
        (e.casts && (a.customDepthMaterial = a.customDistanceMaterial = i),
          (a.frustumCulled = !1),
          (a.matrixAutoUpdate = !1),
          (e.mesh = a),
          this.root.add(a));
      };
      for (let e of this.solids) r(e, !1);
      for (let e of this.doors) r(e, !0);
      (this.props && (this.props.buildGpu(), this.root.add(this.props.root)),
        this.glb && (this.glb.buildGpu(), this.root.add(this.glb.root)));
    }
    disposeGpu() {
      for (let e of [...this.solids, ...this.doors])
        e.mesh &&= (this.root.remove(e.mesh), e.mesh.geometry.dispose(), null);
      for (let e of this.mats) for (let t of e) t.dispose();
      ((this.mats = []),
        this.props &&
          (this.props.disposeGpu(), this.root.remove(this.props.root)),
        this.glb && (this.glb.disposeGpu(), this.root.remove(this.glb.root)),
        this.atlas?.disposeGpu());
    }
    update(e) {
      (this.standIns.update(e.f.standIns),
        (a() !== this.ver || Br() !== this.glbVer) &&
          (this.disposeGpu(), this.buildCpu(), this.buildGpu()),
        kt(this.cam, e),
        this.occl.uOccl.value.set(e.occl.sx, e.occl.sy, e.occl.wy, 1),
        this.occl.uOcclView.value.set(e.cam.W, e.cam.H));
      let t = e.f.fp;
      this.fp = t;
      let n = (e, n, r, i, a) =>
        r >= t.gx0 && e <= t.gx0 + t.fw && i >= t.gy0 && n <= t.gy0 + t.fh + a;
      for (let e of this.solids)
        e.mesh && (e.mesh.visible = n(e.b[0], e.b[1], e.b[3], e.b[4], e.b[5]));
      for (let e of this.doors) {
        if (!e.mesh) continue;
        e.mesh.visible = n(e.b[0], e.b[1], e.b[3], e.b[4], e.b[5]);
        let t = !1;
        for (let n of e.quads) {
          let r = Ri(n.it.door.open, n.rects.length);
          if (r === n.shown) continue;
          n.shown = r;
          let i = n.rects[r],
            a = e.arrays.aAtlas;
          for (let e = n.start; e < n.start + n.count; e++)
            a.set([i.x, i.y, i.w, i.h], e * 4);
          t = !0;
        }
        t && (e.mesh.geometry.getAttribute(`aAtlas`).needsUpdate = !0);
      }
      (this.props?.update(this.host.time, n),
        this.glb?.update(n, this.host.time));
    }
    lights() {
      return this.glb?.lights(this.host.time) ?? [];
    }
    casters(e) {
      let t = this.fp,
        n = (e, n, r, i) =>
          r >= t.gx0 - zi &&
          e <= t.gx0 + t.fw + zi &&
          i >= t.gy0 - zi &&
          n <= t.gy0 + t.fh + zi,
        r = [];
      if (e === `dynamic`) {
        for (let e of this.doors)
          e.mesh && n(e.b[0], e.b[1], e.b[3], e.b[4]) && r.push(e.mesh);
        return (this.standIns.casters(r), this.glb?.moving(r), r);
      }
      for (let e of this.solids)
        e.mesh &&
          e.casts &&
          n(e.b[0], e.b[1], e.b[3], e.b[4]) &&
          r.push(e.mesh);
      return (this.props?.meshes(n, r), this.glb?.meshes(n, r), r);
    }
    rebuild() {
      (this.disposeGpu(), this.standIns.dispose(), this.buildGpu());
    }
    dispose() {
      (this.disposeGpu(),
        this.standIns.dispose(),
        (this.solids = []),
        (this.doors = []),
        (this.props = null),
        (this.glb = null),
        (this.atlas = null));
    }
    stats() {
      return {
        atlasPages: this.atlas?.pages.length ?? 0,
        atlasBytes: this.atlas?.bytes ?? 0,
        props: this.props?.instances ?? 0,
        solidVertices: this.solids.reduce(
          (e, t) => e + t.arrays.position.length / 3,
          0,
        ),
        doors: this.doors.reduce((e, t) => e + t.quads.length, 0),
      };
    }
  },
  Vi = 1,
  Hi = 2.2;
