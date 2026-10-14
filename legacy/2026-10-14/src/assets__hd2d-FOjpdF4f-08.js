// assets__hd2d-FOjpdF4f 08 — math
// Lines 2775-3092 of readable/assets__hd2d-FOjpdF4f.pretty.js (statement-aligned).
var ri = class {
    o;
    root = new F();
    bins = [];
    mats = new Map();
    flowMats = new Map();
    tmp = { r: new N(), t: new N(), b: new N() };
    out = [];
    count;
    constructor(e, t) {
      ((this.o = t), (this.root.name = `hd2d-glb-props`));
      let n = new Map();
      for (let { it: t, p: r, a: i, m: a } of e) {
        let e = a
            ? {
                m: a,
                ox: t.x + t.c.width / 2,
                oy: t.baseY - 8,
                yaw: 0,
                s: 1,
                sy: 1,
                base: t.baseY,
                height: t.c.height,
                phase: 0,
                ownLights: !1,
              }
            : ni(t, r, i),
          o = `${i.meta.id}:${Math.floor(e.ox / 512)},${Math.floor(e.oy / 512)}`,
          s = n.get(o);
        (s ||
          ((s = {
            a: i,
            list: [],
            b: [1 / 0, 1 / 0, -1 / 0, -1 / 0, 0],
            mesh: null,
            spin: null,
            flow: null,
          }),
          n.set(o, s),
          this.bins.push(s)),
          s.list.push(e));
        let c = i.meta.sizePx,
          l = (Math.hypot(c.widthPx, c.depthPx) / 2) * Math.max(e.s, e.sy) + 1,
          u = s.b;
        ((u[0] = Math.min(u[0], e.ox - l)),
          (u[1] = Math.min(u[1], e.oy - l)),
          (u[2] = Math.max(u[2], e.ox + l)),
          (u[3] = Math.max(u[3], e.oy + l)),
          (u[4] = Math.max(u[4], e.height)));
      }
      this.count = e.length;
    }
    buildGpu() {
      for (let e of this.bins) {
        let t = this.mats.get(e.a);
        if (
          (t || ((t = ti(e.a, this.o)), this.mats.set(e.a, t)),
          (e.mesh = this.instanced(e, e.a.geo, t)),
          e.a.spin && (e.spin = this.instanced(e, e.a.spin.geo, t)),
          e.a.flow)
        ) {
          let t = this.flowMats.get(e.a);
          (t || ((t = ti(e.a, this.o, !0)), this.flowMats.set(e.a, t)),
            (e.flow = this.instanced(e, e.a.flow.geo, t)));
        }
      }
    }
    instanced(e, t, n) {
      let r = new L();
      for (let e of [`position`, `normal`, `uv`])
        r.setAttribute(e, t.getAttribute(e));
      r.setIndex(t.getIndex());
      let i = new Float32Array(e.list.length * 3);
      (e.list.forEach((e, t) => i.set([e.base, e.height, 1], t * 3)),
        r.setAttribute(`aBase`, new we(i, 3)));
      let a = new ve(r, n, e.list.length);
      return (
        e.list.forEach((e, t) => a.setMatrixAt(t, e.m)),
        (a.instanceMatrix.needsUpdate = !0),
        (a.frustumCulled = !1),
        (a.matrixAutoUpdate = !1),
        this.root.add(a),
        a
      );
    }
    disposeGpu() {
      for (let e of this.bins) {
        for (let t of [e.mesh, e.spin, e.flow])
          t && (this.root.remove(t), t.dispose());
        e.mesh = e.spin = e.flow = null;
      }
      for (let e of [...this.mats.values(), ...this.flowMats.values()])
        e.dispose();
      (this.mats.clear(), this.flowMats.clear());
    }
    update(e, t) {
      ei.value = t % 3600;
      let { r: n, t: r, b: i } = this.tmp;
      for (let a of this.bins) {
        if (!a.mesh) continue;
        let o = e(a.b[0], a.b[1], a.b[2], a.b[3], a.b[4]);
        ((a.mesh.visible = o), a.flow && (a.flow.visible = o));
        let s = a.a.spin,
          c = a.spin;
        c &&
          s &&
          ((c.visible = o),
          o &&
            (a.list.forEach((e, a) => {
              let o = t * (s.rpm / 60) * Math.PI * 2 + e.phase;
              (r.makeTranslation(s.center.x, s.center.y, s.center.z),
                n.makeRotationAxis(s.axis, o),
                i.multiplyMatrices(r, n),
                r.makeTranslation(-s.center.x, -s.center.y, -s.center.z),
                i.multiply(r),
                c.setMatrixAt(a, i.premultiply(e.m)));
            }),
            (c.instanceMatrix.needsUpdate = !0)));
      }
    }
    meshes(e, t) {
      for (let n of this.bins)
        n.mesh &&
          e(n.b[0], n.b[1], n.b[2], n.b[3]) &&
          (t.push(n.mesh), n.flow && t.push(n.flow));
    }
    moving(e) {
      for (let t of this.bins) t.spin?.visible && e.push(t.spin);
    }
    lights(e) {
      let t = this.out;
      t.length = 0;
      for (let n of this.bins) {
        let r = n.a.meta.glow?.lights;
        if (r?.length && n.mesh?.visible)
          for (let i of n.list) {
            if (i.ownLights) continue;
            let n = Math.cos(i.yaw),
              a = Math.sin(i.yaw);
            for (let o of r) {
              let r = o.flicker
                  ? 1 -
                    o.flicker *
                      (0.5 +
                        0.3 * Math.sin(e * 7.3 + i.phase) +
                        0.2 * Math.sin(e * 13.1 + i.phase * 2))
                  : 1,
                s = o.x * i.s,
                c = o.y * i.sy;
              t.push({
                x: i.ox + s * n - c * a,
                y: i.oy + s * a + c * n,
                z: o.z * i.s,
                r: o.r * i.s,
                color: o.color,
                a: o.a * r,
              });
            }
          }
      }
      return t;
    }
  },
  ii = class {
    o;
    root = new F();
    meshes = new Map();
    m = new N();
    q = new Ne();
    v = new V();
    sc = new V();
    constructor(e) {
      ((this.o = e), (this.root.name = `hd2d-glb-standins`));
    }
    meshFor(e, t) {
      let n = this.meshes.get(e);
      if (n && n.cap >= t) return n;
      n &&
        (this.root.remove(n.mesh),
        n.mesh.geometry.dispose(),
        n.mesh.material.dispose());
      let r = Math.max(8, t * 2),
        i = new L();
      for (let t of [`position`, `normal`, `uv`])
        i.setAttribute(t, e.geo.getAttribute(t));
      i.setIndex(e.geo.getIndex());
      let a = new we(new Float32Array(r * 3), 3);
      (a.setUsage(G), i.setAttribute(`aBase`, a));
      let o = new ve(i, ti(e, this.o), r);
      return (
        o.instanceMatrix.setUsage(G),
        (o.frustumCulled = !1),
        (o.matrixAutoUpdate = !1),
        this.root.add(o),
        (n = { mesh: o, base: a, cap: r }),
        this.meshes.set(e, n),
        n
      );
    }
    update(e) {
      let t = new Map();
      for (let n of e ?? []) {
        let e = Pr.get(n.target);
        if (!e) continue;
        let r = t.get(e);
        r ? r.push(n) : t.set(e, [n]);
      }
      for (let [e, n] of this.meshes) t.has(e) || (n.mesh.visible = !1);
      for (let [e, n] of t) {
        let t = this.meshFor(e, n.length),
          r = e.meta.sizePx;
        (n.forEach((e, n) => {
          let i = e.w / r.widthPx;
          (this.v.set(e.x, e.y - (r.depthPx / 2) * i, 0),
            this.m.compose(this.v, this.q, this.sc.set(i, i, i)),
            t.mesh.setMatrixAt(n, this.m),
            t.base.setXYZ(n, e.y, r.heightPx * i, e.gain));
        }),
          (t.mesh.count = n.length),
          (t.mesh.instanceMatrix.needsUpdate = !0),
          (t.base.needsUpdate = !0),
          (t.mesh.visible = !0));
      }
    }
    casters(e) {
      for (let t of this.meshes.values()) t.mesh.visible && e.push(t.mesh);
    }
    dispose() {
      for (let e of this.meshes.values())
        (this.root.remove(e.mesh),
          e.mesh.geometry.dispose(),
          e.mesh.material.dispose());
      this.meshes.clear();
    }
  },
  ai = 1024,
  oi = 256,
  si = 4096,
  ci = [24, 96, 24],
  li = 128,
  ui = 32,
  di = 600;
function fi(e, t, n, r) {
  ((n[r] =
    t.ax === void 0 || e.strip ? e.x : e.footX + t.ax - Math.round(t.ax)),
    (n[r + 1] =
      t.ay === void 0 || e.strip ? e.y : e.footY + t.ay - Math.round(t.ay)));
}
function pi(e, t, n, r = 1) {
  let i = n ?? {
      footX: 0,
      footY: 0,
      x: 0,
      y: 0,
      hw: 0,
      up: 0,
      down: 0,
      strip: !1,
    },
    a = si / r;
  if (
    ((i.footY = Math.round(e.y) + Math.round((e.fy ?? e.y) - e.y)),
    e.x === void 0)
  ) {
    let e = Math.min(a / 2, Math.ceil(t.fw / 2));
    return (
      (i.footX = t.gx0 + e),
      (i.x = i.footX),
      (i.y = i.footY),
      (i.hw = e),
      (i.up = li),
      (i.down = ui),
      (i.strip = !0),
      i
    );
  }
  let o = e.box ?? ci,
    s = Math.max(0, Math.ceil(o[1]));
  return (
    (i.footX = Math.round(e.x)),
    (i.x = e.x),
    (i.y = e.fy ?? e.y),
    (i.hw = Math.min(a / 2, Math.max(1, Math.ceil(o[0])))),
    (i.up = Math.min(a, s)),
    (i.down = Math.min(a - i.up, Math.max(0, Math.ceil(o[2])))),
    (i.strip = !1),
    i
  );
}
function mi(e, t, n, r, i = [0, 0]) {
  return (
    (i[0] = t + e.hw - (e.footX - r.gx0)),
    (i[1] = n + e.up - (e.footY - r.gy0)),
    i
  );
}
function hi(e, t, n, r, i, a, o) {
  for (let e = 0; e < n; e++) o[e] = e;
  let s = o.subarray(0, n).sort((e, n) => t[n] - t[e] || e - n),
    c = 0,
    l = 0,
    u = 0,
    d = 0;
  for (let n of s) {
    let o = e[n],
      s = t[n];
    if ((c + o > r && ((l += u), (c = 0), (u = 0)), o > r || l + s > i)) {
      ((a[n * 2] = -1), (a[n * 2 + 1] = -1));
      continue;
    }
    ((a[n * 2] = c),
      (a[n * 2 + 1] = l),
      (c += o),
      (u = Math.max(u, s)),
      (d = Math.max(d, l + s)));
  }
  return d;
}
