// hd2d-FOjpdF4f 34 — colorspace
// Lines 10604-10652 of readable/assets/hd2d-FOjpdF4f.pretty.js (statement-aligned).
function kl(e, t, n, r, i = 1) {
  return {
    x0: t,
    y0: n,
    ax: e.x,
    ay: e.y,
    aw: e.w,
    ah: e.h,
    baseY: r,
    height: 0,
    dens: i,
  };
}
var Al = 160,
  jl = 160,
  Ml = 500,
  Nl = 10;
function Pl(e) {
  let t = new He(e);
  return (
    (t.flipY = !1),
    (t.colorSpace = ``),
    (t.generateMipmaps = !1),
    (t.magFilter = t.minFilter = R),
    (t.wrapS = t.wrapT = ze),
    (t.needsUpdate = !0),
    t
  );
}
function Fl(e, t, n) {
  let r = new Oe(e, t, n, Ie, Se);
  return (
    (r.unpackAlignment = 1),
    (r.colorSpace = ``),
    (r.magFilter = r.minFilter = R),
    (r.generateMipmaps = !1),
    (r.needsUpdate = !0),
    r
  );
}
function Il(e) {
  e.traverse((e) => {
    let t = e.material;
    if (t) for (let e of Array.isArray(t) ? t : [t]) vt(e) && _t(e, !0);
  });
}
function Ll(e) {
  return e.root.children[0]?.material.uniforms.uMap?.value ?? null;
}
