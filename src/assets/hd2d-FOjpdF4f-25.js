// hd2d-FOjpdF4f 25 — arrays
// Lines 7979-8133 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
function bs(e, t = `relief`) {
  let n = e.floor,
    r = ls(n, t),
    i = vs(n),
    [a, o] = h(n.w * rs, n.h * rs),
    s = [];
  for (let e = 0; e < n.h; e++)
    r.hgt.subarray(e * n.w, (e + 1) * n.w).some((e) => e > 0) && s.push(e);
  s.reverse();
  let c = 0;
  return {
    relief: r,
    bounds: { x0: 0, y0: 0, x1: n.w * rs, y1: n.h * rs },
    floor: { x: 0, y: 0, frames: hs(e) },
    caps: a,
    grid: ys(n, r),
    boxes: [],
    props: [],
    solids: [],
    fog: _s(n),
    haze: i ? { mask: i, cols: n.w, rows: n.h } : void 0,
    sun: !1,
    reliefAt: (e, r) => ds(n, e, r, t),
    prepare(e) {
      let t = performance.now();
      for (
        let r = 0;
        s.length && (r === 0 || performance.now() - t + c <= e);
        r++
      ) {
        let e = performance.now(),
          t = s.pop();
        (o.drawImage(me(n, t, 1), 0, t * rs), (c = performance.now() - e));
      }
      return s.length === 0;
    },
  };
}
function xs(e, t, n, r, i = 1) {
  let a = Math.min(Math.round(t.y1 - t.y0), Math.floor(n / i));
  for (let o = 0; o < a; o++) {
    let a = t.y0 + o,
      s = {
        x0: t.x - o - 0.5,
        y0: -32,
        ax: 0,
        ay: 0,
        aw: n,
        ah: r,
        g: 0,
        yc: 0,
        shade: vr,
        baseY: 0,
        height: 0,
        dens: i,
      };
    e.face(
      [
        [t.x, a, 0],
        [t.x, a + 1, 0],
        [t.x, a + 1, t.h],
        [t.x, a, t.h],
      ],
      [t.out, 0, 0],
      s,
    );
  }
}
var Ss = class {
    strip;
    o;
    root = new F();
    arrays = null;
    mesh = null;
    tex = null;
    mats = [];
    occl = yr();
    constructor(e, n, r) {
      ((this.strip = n),
        (this.o = r),
        (this.root.name = `hd2d-space-sides`),
        (this.root.matrixAutoUpdate = !1));
      let i = new Dr();
      for (let r of e) xs(i, r, n.width, n.height, t(n));
      (i.vertices && (this.arrays = i.arrays()), this.buildGpu());
    }
    buildGpu() {
      if (!this.arrays) return;
      let e = new He(this.strip);
      ((e.flipY = !1),
        (e.colorSpace = ``),
        (e.generateMipmaps = !1),
        (e.magFilter = e.minFilter = R),
        (e.needsUpdate = !0),
        (this.tex = e));
      let t = Tr({
        map: e,
        lit: this.o.lit,
        occl: this.occl,
        pass: `cut`,
        fog: this.o.fog,
      });
      setHdSpace(t, !0);
      let n = Tr({ map: e, lit: this.o.lit, occl: this.occl, pass: `shadow` });
      this.mats = [t, n];
      let r = new I(Or(this.arrays), t);
      ((r.customDepthMaterial = r.customDistanceMaterial = n),
        (r.frustumCulled = !1),
        (r.matrixAutoUpdate = !1),
        (this.mesh = r),
        this.root.add(r));
    }
    update(e) {}
    casters(e) {
      return e === `static` && this.mesh ? [this.mesh] : [];
    }
    get vertices() {
      return this.arrays ? this.arrays.position.length / 3 : 0;
    }
    disposeGpu() {
      this.mesh &&=
        (this.root.remove(this.mesh), this.mesh.geometry.dispose(), null);
      for (let e of this.mats) e.dispose();
      ((this.mats = []), this.tex?.dispose(), (this.tex = null));
    }
    rebuild() {
      (this.disposeGpu(), this.buildGpu());
    }
    dispose() {
      (this.disposeGpu(), (this.arrays = null));
    }
  },
  X = 16,
  Cs = 4,
  ws = 2,
  Ts = 3,
  Es = 1.5,
  Ds = 0.25,
  Os = 48;
function ks(e) {
  let t = (t, n) => S(e, t, n),
    n = (e, n) => !!g(t(e, n)),
    r = (e, n) => !!C(t(e, n)),
    i = (e, n) => w(t(e, n)),
    a = (e, t) => n(e - 1, t) || n(e + 1, t);
  return {
    code: t,
    wall: n,
    floor: r,
    walk: i,
    across: a,
    faceAbove: (e, n) => r(e, n) || (t(e, n) === `+` && a(e, n)),
    sideDoor: (e, n) => t(e, n) === `+` && !a(e, n),
  };
}
