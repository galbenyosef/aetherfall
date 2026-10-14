// hd2d-FOjpdF4f 32 — tex
// Lines 9978-10186 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
var _l = class {
    root = new F();
    pools = new Mc();
    u;
    geo;
    mesh;
    frames;
    skirt;
    tex;
    skirtTex = null;
    aniso;
    renderer;
    shown = 0;
    bytes = 0;
    constructor(e, n) {
      ((this.frames = e.frames),
        (this.skirt = e.skirt),
        (this.tex = e.frames.map(() => null)),
        (this.aniso = Math.max(1, n.anisotropy ?? 1)),
        (this.renderer = n.renderer ?? null));
      let r = n.fog ?? il,
        i = e.frames.find((e) => !!e),
        a = n.bg ?? 459791;
      ((this.u = {
        ...n.lit,
        ...n.overlay,
        ...n.space,
        ...this.pools.uniforms,
        uMap: { value: null },
        uRect: {
          value: new j(
            e.x,
            e.y,
            Math.max(1, i ? m(i) : 1),
            Math.max(1, i ? p(i) : 1),
          ),
        },
        uFDens: { value: new P(i ? t(i) : 1, e.skirt ? t(e.skirt.c) : 1) },
        uSkirt: { value: null },
        uSkRect: {
          value: new j(
            e.skirt?.x ?? 0,
            e.skirt?.y ?? 0,
            Math.max(1, e.skirt ? m(e.skirt.c) : 1),
            Math.max(1, e.skirt ? p(e.skirt.c) : 1),
          ),
        },
        uSkirtOn: { value: 0 },
        uBg: { value: new V() },
        uCal: { value: 0 },
        uLodK: { value: 1 },
      }),
        this.setBg(a));
      let [o, s, c, l] = gl(e);
      ((this.geo = new L()),
        this.geo.setAttribute(
          `position`,
          new U(new Float32Array([o, s, 0, c, s, 0, c, l, 0, o, l, 0]), 3),
        ),
        this.geo.setIndex([0, 1, 2, 0, 2, 3]),
        (this.geo.boundingSphere = new Te(
          new V((o + c) / 2, (s + l) / 2, 0),
          Math.hypot(c - o, l - s) / 2 + 1,
        )));
      let u = new H({
        glslVersion: W,
        vertexShader: dl,
        fragmentShader: fl(r, pl(r)),
        uniforms: this.u,
        side: 2,
        depthTest: !0,
        depthWrite: !0,
        blending: 0,
      });
      ((this.mesh = new I(this.geo, u)),
        (this.mesh.matrixAutoUpdate = !1),
        (this.mesh.renderOrder = 10),
        (this.mesh.visible = !1),
        (this.root.matrixAutoUpdate = !1),
        this.root.add(this.mesh));
    }
    setBg(e) {
      this.u.uBg.value.set(
        ((e >> 16) & 255) / 255,
        ((e >> 8) & 255) / 255,
        (e & 255) / 255,
      );
    }
    setFrames(e) {
      this.frames = e;
      for (let t = 0; t < Math.max(e.length, this.tex.length); t++)
        this.tex[t] && e[t] !== this.tex[t].image && this.drop(t);
      this.tex.length = e.length;
      for (let t = 0; t < e.length; t++) this.tex[t] ??= null;
      this.phase(this.shown);
    }
    get ready() {
      return this.tex.some(Boolean);
    }
    pending() {
      let e = this.skirt && !this.skirtTex ? 1 : 0;
      for (let t = 0; t < this.frames.length; t++)
        this.frames[t] && !this.tex[t] && e++;
      return e;
    }
    step() {
      for (let e = 0; e < this.frames.length; e++) {
        let t = this.frames[e];
        if (!t || this.tex[e]) continue;
        let n = ml(t, this.aniso);
        return (
          (this.tex[e] = n),
          this.renderer?.initTexture(n),
          (e === this.shown || !this.tex[this.shown]) && this.phase(this.shown),
          (this.bytes += hl(t)),
          hl(t)
        );
      }
      if (this.skirt && !this.skirtTex) {
        let e = ml(this.skirt.c, this.aniso);
        return (
          (this.skirtTex = e),
          this.renderer?.initTexture(e),
          (this.u.uSkirt.value = e),
          (this.u.uSkirtOn.value = 1),
          (this.bytes += hl(this.skirt.c)),
          hl(this.skirt.c)
        );
      }
      return 0;
    }
    phase(e) {
      this.shown = e;
      let t = Math.min(e, this.tex.length - 1);
      for (; t > 0 && !this.tex[t];) t--;
      let n = this.tex[t] ?? this.tex.find(Boolean) ?? null;
      ((this.u.uMap.value = n), (this.mesh.visible = !!n));
    }
    refresh(e) {
      let t = this.tex[e];
      t && (t.needsUpdate = !0);
    }
    drop(e) {
      let t = this.tex[e];
      t && ((this.bytes -= hl(t.image)), t.dispose(), (this.tex[e] = null));
    }
    update(e) {
      let t = this.u;
      ((t.uCal.value = +!!e.cam.cal),
        (t.uLodK.value =
          e.tier === `low` || e.tier === `minimal` ? Math.SQRT2 : 1));
      let n = e.f.fp;
      (this.pools.fill(
        e.f.lights2d,
        n.gx0,
        n.gy0,
        e.cam.focus.x,
        e.cam.focus.y,
      ),
        this.pools.subs(e.lit));
    }
    stats() {
      return { texBytes: this.bytes, vertices: 4 };
    }
    casters() {
      return [];
    }
    rebuild() {
      for (let e = 0; e < this.tex.length; e++) {
        let t = this.tex[e];
        t && (t.dispose(), (this.tex[e] = ml(t.image, this.aniso)));
      }
      (this.skirtTex &&
        (this.skirtTex.dispose(),
        (this.skirtTex = ml(this.skirt.c, this.aniso)),
        (this.u.uSkirt.value = this.skirtTex)),
        this.pools.rebuild(),
        this.phase(this.shown));
    }
    dispose() {
      for (let e of this.tex) e?.dispose();
      (this.tex.fill(null),
        this.skirtTex?.dispose(),
        (this.skirtTex = null),
        this.mesh.material.dispose(),
        this.geo.dispose(),
        this.pools.dispose(),
        (this.bytes = 0));
    }
  },
  vl = 16,
  yl = 0,
  bl = 1,
  xl = 2,
  Sl = 3,
  Cl = 256,
  wl = 64,
  Tl = 48,
  El = 160;
function Dl(e) {
  let [t, n] = h(Cl, wl);
  return (
    (n.fillStyle = `#${e.toString(16).padStart(6, `0`)}`),
    n.fillRect(0, 0, Cl, wl),
    (n.fillStyle = ns),
    n.fillRect(0, 0, Cl, 1),
    t
  );
}
