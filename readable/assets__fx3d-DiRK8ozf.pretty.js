import {
  P as e,
  T as t,
  et as n,
  h as r,
  p as i,
  tt as a,
} from "./index-BTsv3a2s.js";
var o = `attached`,
  s = 1e3,
  c = 1001,
  l = 1002,
  u = 1003,
  d = 1004,
  f = 1005,
  p = 1006,
  m = 1007,
  h = 1008,
  g = 1009,
  _ = 1010,
  v = 1011,
  y = 1012,
  b = 1013,
  x = 1014,
  S = 1015,
  C = 1016,
  w = 1017,
  T = 1018,
  E = 1020,
  D = 35902,
  O = 35899,
  k = 1021,
  A = 1022,
  j = 1023,
  ee = 1026,
  M = 1027,
  N = 1028,
  te = 1029,
  P = 1030,
  ne = 1031,
  re = 1033,
  ie = 33776,
  ae = 33777,
  oe = 33778,
  se = 33779,
  ce = 35840,
  F = 35841,
  le = 35842,
  ue = 35843,
  de = 36196,
  fe = 37492,
  pe = 37496,
  me = 37488,
  he = 37489,
  ge = 37490,
  _e = 37491,
  ve = 37808,
  ye = 37809,
  be = 37810,
  xe = 37811,
  Se = 37812,
  Ce = 37813,
  we = 37814,
  Te = 37815,
  Ee = 37816,
  De = 37817,
  Oe = 37818,
  ke = 37819,
  Ae = 37820,
  je = 37821,
  Me = 36492,
  I = 36494,
  Ne = 36495,
  Pe = 36283,
  Fe = 36284,
  L = 36285,
  Ie = 36286,
  R = 2300,
  z = 2301,
  Le = 2302,
  Re = 2303,
  ze = 2400,
  Be = 2401,
  Ve = 2402,
  He = 2500,
  Ue = 3200,
  We = `srgb`,
  Ge = `srgb-linear`,
  Ke = `linear`,
  qe = `srgb`,
  Je = 7680,
  Ye = 35044,
  Xe = 35048,
  Ze = `300 es`,
  Qe = 2e3;
function $e(e) {
  for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
  return !1;
}
function et(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function tt(e) {
  return document.createElementNS(`http://www.w3.org/1999/xhtml`, e);
}
function nt() {
  let e = tt(`canvas`);
  return ((e.style.display = `block`), e);
}
var rt = {};
function it(...e) {
  let t = `THREE.` + e.shift();
  console.log(t, ...e);
}
function at(e) {
  let t = e[0];
  if (typeof t == `string` && t.startsWith(`TSL:`)) {
    let t = e[1];
    t && t.isStackTrace
      ? (e[0] += ` ` + t.getLocation())
      : (e[1] = `Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`);
  }
  return e;
}
function B(...e) {
  e = at(e);
  let t = `THREE.` + e.shift();
  {
    let n = e[0];
    n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
  }
}
function V(...e) {
  e = at(e);
  let t = `THREE.` + e.shift();
  {
    let n = e[0];
    n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
  }
}
function ot(...e) {
  let t = e.join(` `);
  t in rt || ((rt[t] = !0), B(...e));
}
function st(e, t, n) {
  return new Promise(function (r, i) {
    function a() {
      switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case e.WAIT_FAILED:
          i();
          break;
        case e.TIMEOUT_EXPIRED:
          setTimeout(a, n);
          break;
        default:
          r();
      }
    }
    setTimeout(a, n);
  });
}
var ct = { 0: 1, 2: 6, 4: 7, 3: 5, 1: 0, 6: 2, 7: 4, 5: 3 },
  lt = class {
    addEventListener(e, t) {
      this._listeners === void 0 && (this._listeners = {});
      let n = this._listeners;
      (n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t));
    }
    hasEventListener(e, t) {
      let n = this._listeners;
      return n !== void 0 && n[e] !== void 0 && n[e].indexOf(t) !== -1;
    }
    removeEventListener(e, t) {
      let n = this._listeners;
      if (n === void 0) return;
      let r = n[e];
      if (r !== void 0) {
        let e = r.indexOf(t);
        e !== -1 && r.splice(e, 1);
      }
    }
    dispatchEvent(e) {
      let t = this._listeners;
      if (t === void 0) return;
      let n = t[e.type];
      if (n !== void 0) {
        e.target = this;
        let t = n.slice(0);
        for (let n = 0, r = t.length; n < r; n++) t[n].call(this, e);
        e.target = null;
      }
    }
  },
  ut =
    `00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(
      `.`,
    ),
  dt = 1234567,
  ft = Math.PI / 180,
  pt = 180 / Math.PI;
function mt() {
  let e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0,
    r = (Math.random() * 4294967295) | 0;
  return (
    ut[e & 255] +
    ut[(e >> 8) & 255] +
    ut[(e >> 16) & 255] +
    ut[(e >> 24) & 255] +
    `-` +
    ut[t & 255] +
    ut[(t >> 8) & 255] +
    `-` +
    ut[((t >> 16) & 15) | 64] +
    ut[(t >> 24) & 255] +
    `-` +
    ut[(n & 63) | 128] +
    ut[(n >> 8) & 255] +
    `-` +
    ut[(n >> 16) & 255] +
    ut[(n >> 24) & 255] +
    ut[r & 255] +
    ut[(r >> 8) & 255] +
    ut[(r >> 16) & 255] +
    ut[(r >> 24) & 255]
  ).toLowerCase();
}
function H(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function ht(e, t) {
  return ((e % t) + t) % t;
}
function gt(e, t, n, r, i) {
  return r + ((e - t) * (i - r)) / (n - t);
}
function _t(e, t, n) {
  return e === t ? 0 : (n - e) / (t - e);
}
function vt(e, t, n) {
  return (1 - n) * e + n * t;
}
function yt(e, t, n, r) {
  return vt(e, t, 1 - Math.exp(-n * r));
}
function bt(e, t = 1) {
  return t - Math.abs(ht(e, t * 2) - t);
}
function xt(e, t, n) {
  return e <= t
    ? 0
    : e >= n
      ? 1
      : ((e = (e - t) / (n - t)), e * e * (3 - 2 * e));
}
function St(e, t, n) {
  return e <= t
    ? 0
    : e >= n
      ? 1
      : ((e = (e - t) / (n - t)), e * e * e * (e * (e * 6 - 15) + 10));
}
function Ct(e, t) {
  return e + Math.floor(Math.random() * (t - e + 1));
}
function wt(e, t) {
  return e + Math.random() * (t - e);
}
function Tt(e) {
  return e * (0.5 - Math.random());
}
function Et(e) {
  e !== void 0 && (dt = e);
  let t = (dt += 1831565813);
  return (
    (t = Math.imul(t ^ (t >>> 15), t | 1)),
    (t ^= t + Math.imul(t ^ (t >>> 7), t | 61)),
    ((t ^ (t >>> 14)) >>> 0) / 4294967296
  );
}
function Dt(e) {
  return e * ft;
}
function Ot(e) {
  return e * pt;
}
function kt(e) {
  return e > 0 && Number.isInteger(e) && 2 ** Math.round(Math.log2(e)) === e;
}
function At(e) {
  return 2 ** Math.ceil(Math.log(e) / Math.LN2);
}
function jt(e) {
  return 2 ** Math.floor(Math.log(e) / Math.LN2);
}
function Mt(e, t, n, r, i) {
  let a = Math.cos,
    o = Math.sin,
    s = a(n / 2),
    c = o(n / 2),
    l = a((t + r) / 2),
    u = o((t + r) / 2),
    d = a((t - r) / 2),
    f = o((t - r) / 2),
    p = a((r - t) / 2),
    m = o((r - t) / 2);
  switch (i) {
    case `XYX`:
      e.set(s * u, c * d, c * f, s * l);
      break;
    case `YZY`:
      e.set(c * f, s * u, c * d, s * l);
      break;
    case `ZXZ`:
      e.set(c * d, c * f, s * u, s * l);
      break;
    case `XZX`:
      e.set(s * u, c * m, c * p, s * l);
      break;
    case `YXY`:
      e.set(c * p, s * u, c * m, s * l);
      break;
    case `ZYZ`:
      e.set(c * m, c * p, s * u, s * l);
      break;
    default:
      B(
        `MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ` +
          i,
      );
  }
}
function Nt(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return e / 4294967295;
    case Uint16Array:
      return e / 65535;
    case Uint8Array:
    case Uint8ClampedArray:
      return e / 255;
    case Int32Array:
      return Math.max(e / 2147483647, -1);
    case Int16Array:
      return Math.max(e / 32767, -1);
    case Int8Array:
      return Math.max(e / 127, -1);
    default:
      throw Error(`THREE.MathUtils: Invalid component type.`);
  }
}
function Pt(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return Math.round(e * 4294967295);
    case Uint16Array:
      return Math.round(e * 65535);
    case Uint8Array:
    case Uint8ClampedArray:
      return Math.round(e * 255);
    case Int32Array:
      return Math.round(e * 2147483647);
    case Int16Array:
      return Math.round(e * 32767);
    case Int8Array:
      return Math.round(e * 127);
    default:
      throw Error(`THREE.MathUtils: Invalid component type.`);
  }
}
var Ft = {
    DEG2RAD: ft,
    RAD2DEG: pt,
    generateUUID: mt,
    clamp: H,
    euclideanModulo: ht,
    mapLinear: gt,
    inverseLerp: _t,
    lerp: vt,
    damp: yt,
    pingpong: bt,
    smoothstep: xt,
    smootherstep: St,
    randInt: Ct,
    randFloat: wt,
    randFloatSpread: Tt,
    seededRandom: Et,
    degToRad: Dt,
    radToDeg: Ot,
    isPowerOfTwo: kt,
    ceilPowerOfTwo: At,
    floorPowerOfTwo: jt,
    setQuaternionFromProperEuler: Mt,
    normalize: Pt,
    denormalize: Nt,
  },
  U = class e {
    static {
      e.prototype.isVector2 = !0;
    }
    constructor(e = 0, t = 0) {
      ((this.x = e), (this.y = t));
    }
    get width() {
      return this.x;
    }
    set width(e) {
      this.x = e;
    }
    get height() {
      return this.y;
    }
    set height(e) {
      this.y = e;
    }
    set(e, t) {
      return ((this.x = e), (this.y = t), this);
    }
    setScalar(e) {
      return ((this.x = e), (this.y = e), this);
    }
    setX(e) {
      return ((this.x = e), this);
    }
    setY(e) {
      return ((this.y = e), this);
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        default:
          throw Error(`THREE.Vector2: index is out of range: ` + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw Error(`THREE.Vector2: index is out of range: ` + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(e) {
      return ((this.x = e.x), (this.y = e.y), this);
    }
    add(e) {
      return ((this.x += e.x), (this.y += e.y), this);
    }
    addScalar(e) {
      return ((this.x += e), (this.y += e), this);
    }
    addVectors(e, t) {
      return ((this.x = e.x + t.x), (this.y = e.y + t.y), this);
    }
    addScaledVector(e, t) {
      return ((this.x += e.x * t), (this.y += e.y * t), this);
    }
    sub(e) {
      return ((this.x -= e.x), (this.y -= e.y), this);
    }
    subScalar(e) {
      return ((this.x -= e), (this.y -= e), this);
    }
    subVectors(e, t) {
      return ((this.x = e.x - t.x), (this.y = e.y - t.y), this);
    }
    multiply(e) {
      return ((this.x *= e.x), (this.y *= e.y), this);
    }
    multiplyScalar(e) {
      return ((this.x *= e), (this.y *= e), this);
    }
    divide(e) {
      return ((this.x /= e.x), (this.y /= e.y), this);
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    applyMatrix3(e) {
      let t = this.x,
        n = this.y,
        r = e.elements;
      return (
        (this.x = r[0] * t + r[3] * n + r[6]),
        (this.y = r[1] * t + r[4] * n + r[7]),
        this
      );
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        this
      );
    }
    clamp(e, t) {
      return (
        (this.x = H(this.x, e.x, t.x)),
        (this.y = H(this.y, e.y, t.y)),
        this
      );
    }
    clampScalar(e, t) {
      return ((this.x = H(this.x, e, t)), (this.y = H(this.y, e, t)), this);
    }
    clampLength(e, t) {
      let n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(H(n, e, t));
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        this
      );
    }
    ceil() {
      return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this);
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = Math.trunc(this.x)),
        (this.y = Math.trunc(this.y)),
        this
      );
    }
    negate() {
      return ((this.x = -this.x), (this.y = -this.y), this);
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    cross(e) {
      return this.x * e.y - this.y * e.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(e) {
      let t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      let n = this.dot(e) / t;
      return Math.acos(H(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      let t = this.x - e.x,
        n = this.y - e.y;
      return t * t + n * n;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n),
        (this.y = e.y + (t.y - e.y) * n),
        this
      );
    }
    equals(e) {
      return e.x === this.x && e.y === this.y;
    }
    fromArray(e, t = 0) {
      return ((this.x = e[t]), (this.y = e[t + 1]), this);
    }
    toArray(e = [], t = 0) {
      return ((e[t] = this.x), (e[t + 1] = this.y), e);
    }
    fromBufferAttribute(e, t) {
      return ((this.x = e.getX(t)), (this.y = e.getY(t)), this);
    }
    rotateAround(e, t) {
      let n = Math.cos(t),
        r = Math.sin(t),
        i = this.x - e.x,
        a = this.y - e.y;
      return (
        (this.x = i * n - a * r + e.x),
        (this.y = i * r + a * n + e.y),
        this
      );
    }
    random() {
      return ((this.x = Math.random()), (this.y = Math.random()), this);
    }
    *[Symbol.iterator]() {
      (yield this.x, yield this.y);
    }
  },
  It = class {
    constructor(e = 0, t = 0, n = 0, r = 1) {
      ((this.isQuaternion = !0),
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._w = r));
    }
    static slerpFlat(e, t, n, r, i, a, o) {
      let s = n[r + 0],
        c = n[r + 1],
        l = n[r + 2],
        u = n[r + 3],
        d = i[a + 0],
        f = i[a + 1],
        p = i[a + 2],
        m = i[a + 3];
      if (u !== m || s !== d || c !== f || l !== p) {
        let e = s * d + c * f + l * p + u * m;
        e < 0 && ((d = -d), (f = -f), (p = -p), (m = -m), (e = -e));
        let t = 1 - o;
        if (e < 0.9995) {
          let n = Math.acos(e),
            r = Math.sin(n);
          ((t = Math.sin(t * n) / r),
            (o = Math.sin(o * n) / r),
            (s = s * t + d * o),
            (c = c * t + f * o),
            (l = l * t + p * o),
            (u = u * t + m * o));
        } else {
          ((s = s * t + d * o),
            (c = c * t + f * o),
            (l = l * t + p * o),
            (u = u * t + m * o));
          let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
          ((s *= e), (c *= e), (l *= e), (u *= e));
        }
      }
      ((e[t] = s), (e[t + 1] = c), (e[t + 2] = l), (e[t + 3] = u));
    }
    static multiplyQuaternionsFlat(e, t, n, r, i, a) {
      let o = n[r],
        s = n[r + 1],
        c = n[r + 2],
        l = n[r + 3],
        u = i[a],
        d = i[a + 1],
        f = i[a + 2],
        p = i[a + 3];
      return (
        (e[t] = o * p + l * u + s * f - c * d),
        (e[t + 1] = s * p + l * d + c * u - o * f),
        (e[t + 2] = c * p + l * f + o * d - s * u),
        (e[t + 3] = l * p - o * u - s * d - c * f),
        e
      );
    }
    get x() {
      return this._x;
    }
    set x(e) {
      ((this._x = e), this._onChangeCallback());
    }
    get y() {
      return this._y;
    }
    set y(e) {
      ((this._y = e), this._onChangeCallback());
    }
    get z() {
      return this._z;
    }
    set z(e) {
      ((this._z = e), this._onChangeCallback());
    }
    get w() {
      return this._w;
    }
    set w(e) {
      ((this._w = e), this._onChangeCallback());
    }
    set(e, t, n, r) {
      return (
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._w = r),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(e) {
      return (
        (this._x = e.x),
        (this._y = e.y),
        (this._z = e.z),
        (this._w = e.w),
        this._onChangeCallback(),
        this
      );
    }
    setFromEuler(e, t = !0) {
      let n = e._x,
        r = e._y,
        i = e._z,
        a = e._order,
        o = Math.cos,
        s = Math.sin,
        c = o(n / 2),
        l = o(r / 2),
        u = o(i / 2),
        d = s(n / 2),
        f = s(r / 2),
        p = s(i / 2);
      switch (a) {
        case `XYZ`:
          ((this._x = d * l * u + c * f * p),
            (this._y = c * f * u - d * l * p),
            (this._z = c * l * p + d * f * u),
            (this._w = c * l * u - d * f * p));
          break;
        case `YXZ`:
          ((this._x = d * l * u + c * f * p),
            (this._y = c * f * u - d * l * p),
            (this._z = c * l * p - d * f * u),
            (this._w = c * l * u + d * f * p));
          break;
        case `ZXY`:
          ((this._x = d * l * u - c * f * p),
            (this._y = c * f * u + d * l * p),
            (this._z = c * l * p + d * f * u),
            (this._w = c * l * u - d * f * p));
          break;
        case `ZYX`:
          ((this._x = d * l * u - c * f * p),
            (this._y = c * f * u + d * l * p),
            (this._z = c * l * p - d * f * u),
            (this._w = c * l * u + d * f * p));
          break;
        case `YZX`:
          ((this._x = d * l * u + c * f * p),
            (this._y = c * f * u + d * l * p),
            (this._z = c * l * p - d * f * u),
            (this._w = c * l * u - d * f * p));
          break;
        case `XZY`:
          ((this._x = d * l * u - c * f * p),
            (this._y = c * f * u - d * l * p),
            (this._z = c * l * p + d * f * u),
            (this._w = c * l * u + d * f * p));
          break;
        default:
          B(`Quaternion: .setFromEuler() encountered an unknown order: ` + a);
      }
      return (t === !0 && this._onChangeCallback(), this);
    }
    setFromAxisAngle(e, t) {
      let n = t / 2,
        r = Math.sin(n);
      return (
        (this._x = e.x * r),
        (this._y = e.y * r),
        (this._z = e.z * r),
        (this._w = Math.cos(n)),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(e) {
      let t = e.elements,
        n = t[0],
        r = t[4],
        i = t[8],
        a = t[1],
        o = t[5],
        s = t[9],
        c = t[2],
        l = t[6],
        u = t[10],
        d = n + o + u;
      if (d > 0) {
        let e = 0.5 / Math.sqrt(d + 1);
        ((this._w = 0.25 / e),
          (this._x = (l - s) * e),
          (this._y = (i - c) * e),
          (this._z = (a - r) * e));
      } else if (n > o && n > u) {
        let e = 2 * Math.sqrt(1 + n - o - u);
        ((this._w = (l - s) / e),
          (this._x = 0.25 * e),
          (this._y = (r + a) / e),
          (this._z = (i + c) / e));
      } else if (o > u) {
        let e = 2 * Math.sqrt(1 + o - n - u);
        ((this._w = (i - c) / e),
          (this._x = (r + a) / e),
          (this._y = 0.25 * e),
          (this._z = (s + l) / e));
      } else {
        let e = 2 * Math.sqrt(1 + u - n - o);
        ((this._w = (a - r) / e),
          (this._x = (i + c) / e),
          (this._y = (s + l) / e),
          (this._z = 0.25 * e));
      }
      return (this._onChangeCallback(), this);
    }
    setFromUnitVectors(e, t) {
      let n = e.dot(t) + 1;
      return (
        n < 1e-8
          ? ((n = 0),
            Math.abs(e.x) > Math.abs(e.z)
              ? ((this._x = -e.y),
                (this._y = e.x),
                (this._z = 0),
                (this._w = n))
              : ((this._x = 0),
                (this._y = -e.z),
                (this._z = e.y),
                (this._w = n)))
          : ((this._x = e.y * t.z - e.z * t.y),
            (this._y = e.z * t.x - e.x * t.z),
            (this._z = e.x * t.y - e.y * t.x),
            (this._w = n)),
        this.normalize()
      );
    }
    angleTo(e) {
      return 2 * Math.acos(Math.abs(H(this.dot(e), -1, 1)));
    }
    rotateTowards(e, t) {
      let n = this.angleTo(e);
      if (n === 0) return this;
      let r = Math.min(1, t / n);
      return (this.slerp(e, r), this);
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return (
        (this._x *= -1),
        (this._y *= -1),
        (this._z *= -1),
        this._onChangeCallback(),
        this
      );
    }
    dot(e) {
      return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
    }
    lengthSq() {
      return (
        this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
      );
    }
    length() {
      return Math.sqrt(
        this._x * this._x +
          this._y * this._y +
          this._z * this._z +
          this._w * this._w,
      );
    }
    normalize() {
      let e = this.length();
      return (
        e === 0
          ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
          : ((e = 1 / e),
            (this._x *= e),
            (this._y *= e),
            (this._z *= e),
            (this._w *= e)),
        this._onChangeCallback(),
        this
      );
    }
    multiply(e) {
      return this.multiplyQuaternions(this, e);
    }
    premultiply(e) {
      return this.multiplyQuaternions(e, this);
    }
    multiplyQuaternions(e, t) {
      let n = e._x,
        r = e._y,
        i = e._z,
        a = e._w,
        o = t._x,
        s = t._y,
        c = t._z,
        l = t._w;
      return (
        (this._x = n * l + a * o + r * c - i * s),
        (this._y = r * l + a * s + i * o - n * c),
        (this._z = i * l + a * c + n * s - r * o),
        (this._w = a * l - n * o - r * s - i * c),
        this._onChangeCallback(),
        this
      );
    }
    slerp(e, t) {
      let n = e._x,
        r = e._y,
        i = e._z,
        a = e._w,
        o = this.dot(e);
      o < 0 && ((n = -n), (r = -r), (i = -i), (a = -a), (o = -o));
      let s = 1 - t;
      if (o < 0.9995) {
        let e = Math.acos(o),
          c = Math.sin(e);
        ((s = Math.sin(s * e) / c),
          (t = Math.sin(t * e) / c),
          (this._x = this._x * s + n * t),
          (this._y = this._y * s + r * t),
          (this._z = this._z * s + i * t),
          (this._w = this._w * s + a * t),
          this._onChangeCallback());
      } else
        ((this._x = this._x * s + n * t),
          (this._y = this._y * s + r * t),
          (this._z = this._z * s + i * t),
          (this._w = this._w * s + a * t),
          this.normalize());
      return this;
    }
    slerpQuaternions(e, t, n) {
      return this.copy(e).slerp(t, n);
    }
    random() {
      let e = 2 * Math.PI * Math.random(),
        t = 2 * Math.PI * Math.random(),
        n = Math.random(),
        r = Math.sqrt(1 - n),
        i = Math.sqrt(n);
      return this.set(
        r * Math.sin(e),
        r * Math.cos(e),
        i * Math.sin(t),
        i * Math.cos(t),
      );
    }
    equals(e) {
      return (
        e._x === this._x &&
        e._y === this._y &&
        e._z === this._z &&
        e._w === this._w
      );
    }
    fromArray(e, t = 0) {
      return (
        (this._x = e[t]),
        (this._y = e[t + 1]),
        (this._z = e[t + 2]),
        (this._w = e[t + 3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this._x),
        (e[t + 1] = this._y),
        (e[t + 2] = this._z),
        (e[t + 3] = this._w),
        e
      );
    }
    fromBufferAttribute(e, t) {
      return (
        (this._x = e.getX(t)),
        (this._y = e.getY(t)),
        (this._z = e.getZ(t)),
        (this._w = e.getW(t)),
        this._onChangeCallback(),
        this
      );
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(e) {
      return ((this._onChangeCallback = e), this);
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      (yield this._x, yield this._y, yield this._z, yield this._w);
    }
  },
  W = class e {
    static {
      e.prototype.isVector3 = !0;
    }
    constructor(e = 0, t = 0, n = 0) {
      ((this.x = e), (this.y = t), (this.z = n));
    }
    set(e, t, n) {
      return (
        n === void 0 && (n = this.z),
        (this.x = e),
        (this.y = t),
        (this.z = n),
        this
      );
    }
    setScalar(e) {
      return ((this.x = e), (this.y = e), (this.z = e), this);
    }
    setX(e) {
      return ((this.x = e), this);
    }
    setY(e) {
      return ((this.y = e), this);
    }
    setZ(e) {
      return ((this.z = e), this);
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        default:
          throw Error(`THREE.Vector3: index is out of range: ` + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw Error(`THREE.Vector3: index is out of range: ` + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(e) {
      return ((this.x = e.x), (this.y = e.y), (this.z = e.z), this);
    }
    add(e) {
      return ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
    }
    addScalar(e) {
      return ((this.x += e), (this.y += e), (this.z += e), this);
    }
    addVectors(e, t) {
      return (
        (this.x = e.x + t.x),
        (this.y = e.y + t.y),
        (this.z = e.z + t.z),
        this
      );
    }
    addScaledVector(e, t) {
      return (
        (this.x += e.x * t),
        (this.y += e.y * t),
        (this.z += e.z * t),
        this
      );
    }
    sub(e) {
      return ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
    }
    subScalar(e) {
      return ((this.x -= e), (this.y -= e), (this.z -= e), this);
    }
    subVectors(e, t) {
      return (
        (this.x = e.x - t.x),
        (this.y = e.y - t.y),
        (this.z = e.z - t.z),
        this
      );
    }
    multiply(e) {
      return ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
    }
    multiplyScalar(e) {
      return ((this.x *= e), (this.y *= e), (this.z *= e), this);
    }
    multiplyVectors(e, t) {
      return (
        (this.x = e.x * t.x),
        (this.y = e.y * t.y),
        (this.z = e.z * t.z),
        this
      );
    }
    applyEuler(e) {
      return this.applyQuaternion(Rt.setFromEuler(e));
    }
    applyAxisAngle(e, t) {
      return this.applyQuaternion(Rt.setFromAxisAngle(e, t));
    }
    applyMatrix3(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = e.elements;
      return (
        (this.x = i[0] * t + i[3] * n + i[6] * r),
        (this.y = i[1] * t + i[4] * n + i[7] * r),
        (this.z = i[2] * t + i[5] * n + i[8] * r),
        this
      );
    }
    applyNormalMatrix(e) {
      return this.applyMatrix3(e).normalize();
    }
    applyMatrix4(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = e.elements,
        a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
      return (
        (this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a),
        (this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a),
        (this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a),
        this
      );
    }
    applyQuaternion(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = e.x,
        a = e.y,
        o = e.z,
        s = e.w,
        c = 2 * (a * r - o * n),
        l = 2 * (o * t - i * r),
        u = 2 * (i * n - a * t);
      return (
        (this.x = t + s * c + a * u - o * l),
        (this.y = n + s * l + o * c - i * u),
        (this.z = r + s * u + i * l - a * c),
        this
      );
    }
    project(e) {
      return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
        e.projectionMatrix,
      );
    }
    unproject(e) {
      return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
        e.matrixWorld,
      );
    }
    transformDirection(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = e.elements;
      return (
        (this.x = i[0] * t + i[4] * n + i[8] * r),
        (this.y = i[1] * t + i[5] * n + i[9] * r),
        (this.z = i[2] * t + i[6] * n + i[10] * r),
        this.normalize()
      );
    }
    divide(e) {
      return ((this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this);
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        (this.z = Math.min(this.z, e.z)),
        this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        (this.z = Math.max(this.z, e.z)),
        this
      );
    }
    clamp(e, t) {
      return (
        (this.x = H(this.x, e.x, t.x)),
        (this.y = H(this.y, e.y, t.y)),
        (this.z = H(this.z, e.z, t.z)),
        this
      );
    }
    clampScalar(e, t) {
      return (
        (this.x = H(this.x, e, t)),
        (this.y = H(this.y, e, t)),
        (this.z = H(this.z, e, t)),
        this
      );
    }
    clampLength(e, t) {
      let n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(H(n, e, t));
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = Math.trunc(this.x)),
        (this.y = Math.trunc(this.y)),
        (this.z = Math.trunc(this.z)),
        this
      );
    }
    negate() {
      return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this);
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        (this.z += (e.z - this.z) * t),
        this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n),
        (this.y = e.y + (t.y - e.y) * n),
        (this.z = e.z + (t.z - e.z) * n),
        this
      );
    }
    cross(e) {
      return this.crossVectors(this, e);
    }
    crossVectors(e, t) {
      let n = e.x,
        r = e.y,
        i = e.z,
        a = t.x,
        o = t.y,
        s = t.z;
      return (
        (this.x = r * s - i * o),
        (this.y = i * a - n * s),
        (this.z = n * o - r * a),
        this
      );
    }
    projectOnVector(e) {
      let t = e.lengthSq();
      if (t === 0) return this.set(0, 0, 0);
      let n = e.dot(this) / t;
      return this.copy(e).multiplyScalar(n);
    }
    projectOnPlane(e) {
      return (Lt.copy(this).projectOnVector(e), this.sub(Lt));
    }
    reflect(e) {
      return this.sub(Lt.copy(e).multiplyScalar(2 * this.dot(e)));
    }
    angleTo(e) {
      let t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      let n = this.dot(e) / t;
      return Math.acos(H(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      let t = this.x - e.x,
        n = this.y - e.y,
        r = this.z - e.z;
      return t * t + n * n + r * r;
    }
    manhattanDistanceTo(e) {
      return (
        Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
      );
    }
    setFromSpherical(e) {
      return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
    }
    setFromSphericalCoords(e, t, n) {
      let r = Math.sin(t) * e;
      return (
        (this.x = r * Math.sin(n)),
        (this.y = Math.cos(t) * e),
        (this.z = r * Math.cos(n)),
        this
      );
    }
    setFromCylindrical(e) {
      return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
    }
    setFromCylindricalCoords(e, t, n) {
      return (
        (this.x = e * Math.sin(t)),
        (this.y = n),
        (this.z = e * Math.cos(t)),
        this
      );
    }
    setFromMatrixPosition(e) {
      let t = e.elements;
      return ((this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this);
    }
    setFromMatrixScale(e) {
      let t = this.setFromMatrixColumn(e, 0).length(),
        n = this.setFromMatrixColumn(e, 1).length(),
        r = this.setFromMatrixColumn(e, 2).length();
      return ((this.x = t), (this.y = n), (this.z = r), this);
    }
    setFromMatrixColumn(e, t) {
      return this.fromArray(e.elements, t * 4);
    }
    setFromMatrix3Column(e, t) {
      return this.fromArray(e.elements, t * 3);
    }
    setFromEuler(e) {
      return ((this.x = e._x), (this.y = e._y), (this.z = e._z), this);
    }
    setFromColor(e) {
      return ((this.x = e.r), (this.y = e.g), (this.z = e.b), this);
    }
    equals(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z;
    }
    fromArray(e, t = 0) {
      return ((this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this);
    }
    toArray(e = [], t = 0) {
      return ((e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e);
    }
    fromBufferAttribute(e, t) {
      return (
        (this.x = e.getX(t)),
        (this.y = e.getY(t)),
        (this.z = e.getZ(t)),
        this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        this
      );
    }
    randomDirection() {
      let e = Math.random() * Math.PI * 2,
        t = Math.random() * 2 - 1,
        n = Math.sqrt(1 - t * t);
      return (
        (this.x = n * Math.cos(e)),
        (this.y = t),
        (this.z = n * Math.sin(e)),
        this
      );
    }
    *[Symbol.iterator]() {
      (yield this.x, yield this.y, yield this.z);
    }
  },
  Lt = new W(),
  Rt = new It(),
  G = class e {
    static {
      e.prototype.isMatrix3 = !0;
    }
    constructor(e, t, n, r, i, a, o, s, c) {
      ((this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        e !== void 0 && this.set(e, t, n, r, i, a, o, s, c));
    }
    set(e, t, n, r, i, a, o, s, c) {
      let l = this.elements;
      return (
        (l[0] = e),
        (l[1] = r),
        (l[2] = o),
        (l[3] = t),
        (l[4] = i),
        (l[5] = s),
        (l[6] = n),
        (l[7] = a),
        (l[8] = c),
        this
      );
    }
    identity() {
      return (this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this);
    }
    copy(e) {
      let t = this.elements,
        n = e.elements;
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        this
      );
    }
    extractBasis(e, t, n) {
      return (
        e.setFromMatrix3Column(this, 0),
        t.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
      );
    }
    setFromMatrix4(e) {
      let t = e.elements;
      return (
        this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
        this
      );
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      let n = e.elements,
        r = t.elements,
        i = this.elements,
        a = n[0],
        o = n[3],
        s = n[6],
        c = n[1],
        l = n[4],
        u = n[7],
        d = n[2],
        f = n[5],
        p = n[8],
        m = r[0],
        h = r[3],
        g = r[6],
        _ = r[1],
        v = r[4],
        y = r[7],
        b = r[2],
        x = r[5],
        S = r[8];
      return (
        (i[0] = a * m + o * _ + s * b),
        (i[3] = a * h + o * v + s * x),
        (i[6] = a * g + o * y + s * S),
        (i[1] = c * m + l * _ + u * b),
        (i[4] = c * h + l * v + u * x),
        (i[7] = c * g + l * y + u * S),
        (i[2] = d * m + f * _ + p * b),
        (i[5] = d * h + f * v + p * x),
        (i[8] = d * g + f * y + p * S),
        this
      );
    }
    multiplyScalar(e) {
      let t = this.elements;
      return (
        (t[0] *= e),
        (t[3] *= e),
        (t[6] *= e),
        (t[1] *= e),
        (t[4] *= e),
        (t[7] *= e),
        (t[2] *= e),
        (t[5] *= e),
        (t[8] *= e),
        this
      );
    }
    determinant() {
      let e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        i = e[3],
        a = e[4],
        o = e[5],
        s = e[6],
        c = e[7],
        l = e[8];
      return (
        t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s
      );
    }
    invert() {
      let e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        i = e[3],
        a = e[4],
        o = e[5],
        s = e[6],
        c = e[7],
        l = e[8],
        u = l * a - o * c,
        d = o * s - l * i,
        f = c * i - a * s,
        p = t * u + n * d + r * f;
      if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      let m = 1 / p;
      return (
        (e[0] = u * m),
        (e[1] = (r * c - l * n) * m),
        (e[2] = (o * n - r * a) * m),
        (e[3] = d * m),
        (e[4] = (l * t - r * s) * m),
        (e[5] = (r * i - o * t) * m),
        (e[6] = f * m),
        (e[7] = (n * s - c * t) * m),
        (e[8] = (a * t - n * i) * m),
        this
      );
    }
    transpose() {
      let e,
        t = this.elements;
      return (
        (e = t[1]),
        (t[1] = t[3]),
        (t[3] = e),
        (e = t[2]),
        (t[2] = t[6]),
        (t[6] = e),
        (e = t[5]),
        (t[5] = t[7]),
        (t[7] = e),
        this
      );
    }
    getNormalMatrix(e) {
      return this.setFromMatrix4(e).invert().transpose();
    }
    transposeIntoArray(e) {
      let t = this.elements;
      return (
        (e[0] = t[0]),
        (e[1] = t[3]),
        (e[2] = t[6]),
        (e[3] = t[1]),
        (e[4] = t[4]),
        (e[5] = t[7]),
        (e[6] = t[2]),
        (e[7] = t[5]),
        (e[8] = t[8]),
        this
      );
    }
    setUvTransform(e, t, n, r, i, a, o) {
      let s = Math.cos(i),
        c = Math.sin(i);
      return (
        this.set(
          n * s,
          n * c,
          -n * (s * a + c * o) + a + e,
          -r * c,
          r * s,
          -r * (-c * a + s * o) + o + t,
          0,
          0,
          1,
        ),
        this
      );
    }
    scale(e, t) {
      return (
        ot(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),
        this.premultiply(zt.makeScale(e, t)),
        this
      );
    }
    rotate(e) {
      return (
        ot(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),
        this.premultiply(zt.makeRotation(-e)),
        this
      );
    }
    translate(e, t) {
      return (
        ot(
          `Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`,
        ),
        this.premultiply(zt.makeTranslation(e, t)),
        this
      );
    }
    makeTranslation(e, t) {
      return (
        e.isVector2
          ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
          : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
        this
      );
    }
    makeRotation(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (this.set(t, -n, 0, n, t, 0, 0, 0, 1), this);
    }
    makeScale(e, t) {
      return (this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this);
    }
    equals(e) {
      let t = this.elements,
        n = e.elements;
      for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
      return !0;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      let n = this.elements;
      return (
        (e[t] = n[0]),
        (e[t + 1] = n[1]),
        (e[t + 2] = n[2]),
        (e[t + 3] = n[3]),
        (e[t + 4] = n[4]),
        (e[t + 5] = n[5]),
        (e[t + 6] = n[6]),
        (e[t + 7] = n[7]),
        (e[t + 8] = n[8]),
        e
      );
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  },
  zt = new G(),
  Bt = new G().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322,
  ),
  Vt = new G().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715,
  );
function Ht() {
  let e = {
      enabled: !0,
      workingColorSpace: Ge,
      spaces: {},
      convert: function (e, t, n) {
        return this.enabled === !1 || t === n || !t || !n
          ? e
          : (this.spaces[t].transfer === `srgb` &&
              ((e.r = Ut(e.r)), (e.g = Ut(e.g)), (e.b = Ut(e.b))),
            this.spaces[t].primaries !== this.spaces[n].primaries &&
              (e.applyMatrix3(this.spaces[t].toXYZ),
              e.applyMatrix3(this.spaces[n].fromXYZ)),
            this.spaces[n].transfer === `srgb` &&
              ((e.r = Wt(e.r)), (e.g = Wt(e.g)), (e.b = Wt(e.b))),
            e);
      },
      workingToColorSpace: function (e, t) {
        return this.convert(e, this.workingColorSpace, t);
      },
      colorSpaceToWorking: function (e, t) {
        return this.convert(e, t, this.workingColorSpace);
      },
      getPrimaries: function (e) {
        return this.spaces[e].primaries;
      },
      getTransfer: function (e) {
        return e === `` ? Ke : this.spaces[e].transfer;
      },
      getToneMappingMode: function (e) {
        return (
          this.spaces[e].outputColorSpaceConfig.toneMappingMode || `standard`
        );
      },
      getLuminanceCoefficients: function (e, t = this.workingColorSpace) {
        return e.fromArray(this.spaces[t].luminanceCoefficients);
      },
      define: function (e) {
        Object.assign(this.spaces, e);
      },
      _getMatrix: function (e, t, n) {
        return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (e) {
        return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (e = this.workingColorSpace) {
        return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
      },
      fromWorkingColorSpace: function (t, n) {
        return (
          ot(
            `ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`,
          ),
          e.workingToColorSpace(t, n)
        );
      },
      toWorkingColorSpace: function (t, n) {
        return (
          ot(
            `ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`,
          ),
          e.colorSpaceToWorking(t, n)
        );
      },
    },
    t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    n = [0.2126, 0.7152, 0.0722],
    r = [0.3127, 0.329];
  return (
    e.define({
      [Ge]: {
        primaries: t,
        whitePoint: r,
        transfer: Ke,
        toXYZ: Bt,
        fromXYZ: Vt,
        luminanceCoefficients: n,
        workingColorSpaceConfig: { unpackColorSpace: We },
        outputColorSpaceConfig: { drawingBufferColorSpace: We },
      },
      [We]: {
        primaries: t,
        whitePoint: r,
        transfer: qe,
        toXYZ: Bt,
        fromXYZ: Vt,
        luminanceCoefficients: n,
        outputColorSpaceConfig: { drawingBufferColorSpace: We },
      },
    }),
    e
  );
}
var K = Ht();
function Ut(e) {
  return e < 0.04045
    ? e * 0.0773993808
    : (e * 0.9478672986 + 0.0521327014) ** 2.4;
}
function Wt(e) {
  return e < 0.0031308 ? e * 12.92 : 1.055 * e ** 0.41666 - 0.055;
}
var Gt,
  Kt = class {
    static getDataURL(e, t = `image/png`) {
      if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > `u`) return e.src;
      let n;
      if (e instanceof HTMLCanvasElement) n = e;
      else {
        (Gt === void 0 && (Gt = tt(`canvas`)),
          (Gt.width = e.width),
          (Gt.height = e.height));
        let t = Gt.getContext(`2d`);
        (e instanceof ImageData
          ? t.putImageData(e, 0, 0)
          : t.drawImage(e, 0, 0, e.width, e.height),
          (n = Gt));
      }
      return n.toDataURL(t);
    }
    static sRGBToLinear(e) {
      if (
        (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < `u` && e instanceof ImageBitmap)
      ) {
        let t = tt(`canvas`);
        ((t.width = e.width), (t.height = e.height));
        let n = t.getContext(`2d`);
        n.drawImage(e, 0, 0, e.width, e.height);
        let r = n.getImageData(0, 0, e.width, e.height),
          i = r.data;
        for (let e = 0; e < i.length; e++) i[e] = Ut(i[e] / 255) * 255;
        return (n.putImageData(r, 0, 0), t);
      }
      if (e.data) {
        let t = e.data.slice(0);
        for (let e = 0; e < t.length; e++)
          t instanceof Uint8Array || t instanceof Uint8ClampedArray
            ? (t[e] = Math.floor(Ut(t[e] / 255) * 255))
            : (t[e] = Ut(t[e]));
        return { data: t, width: e.width, height: e.height };
      }
      return (
        B(
          `ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`,
        ),
        e
      );
    }
  },
  qt = 0,
  Jt = class {
    constructor(e = null) {
      ((this.isTextureSource = !0),
        Object.defineProperty(this, "id", { value: qt++ }),
        (this.uuid = mt()),
        (this.data = e),
        (this.dataReady = !0),
        (this.version = 0));
    }
    getSize(e) {
      let t = this.data;
      return (
        typeof HTMLVideoElement < `u` && t instanceof HTMLVideoElement
          ? e.set(t.videoWidth, t.videoHeight, 0)
          : typeof VideoFrame < `u` && t instanceof VideoFrame
            ? e.set(t.displayWidth, t.displayHeight, 0)
            : t === null
              ? e.set(0, 0, 0)
              : e.set(t.width, t.height, t.depth || 0),
        e
      );
    }
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
    toJSON(e) {
      let t = e === void 0 || typeof e == `string`;
      if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
      let n = { uuid: this.uuid, url: `` },
        r = this.data;
      if (r !== null) {
        let e;
        if (Array.isArray(r)) {
          e = [];
          for (let t = 0, n = r.length; t < n; t++)
            r[t].isDataTexture ? e.push(Yt(r[t].image)) : e.push(Yt(r[t]));
        } else e = Yt(r);
        n.url = e;
      }
      return (t || (e.images[this.uuid] = n), n);
    }
  };
function Yt(e) {
  return (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < `u` && e instanceof ImageBitmap)
    ? Kt.getDataURL(e)
    : e.data
      ? {
          data: Array.from(e.data),
          width: e.width,
          height: e.height,
          type: e.data.constructor.name,
        }
      : (B(`Texture: Unable to serialize Texture.`), {});
}
var Xt = 0,
  Zt = new W(),
  Qt = class e extends lt {
    constructor(
      t = e.DEFAULT_IMAGE,
      n = e.DEFAULT_MAPPING,
      r = c,
      i = c,
      a = p,
      o = h,
      s = j,
      l = g,
      u = e.DEFAULT_ANISOTROPY,
      d = ``,
    ) {
      (super(),
        (this.isTexture = !0),
        Object.defineProperty(this, "id", { value: Xt++ }),
        (this.uuid = mt()),
        (this.name = ``),
        (this.source = new Jt(t)),
        (this.mipmaps = []),
        (this.mapping = n),
        (this.channel = 0),
        (this.wrapS = r),
        (this.wrapT = i),
        (this.magFilter = a),
        (this.minFilter = o),
        (this.anisotropy = u),
        (this.format = s),
        (this.internalFormat = null),
        (this.type = l),
        (this.offset = new U(0, 0)),
        (this.repeat = new U(1, 1)),
        (this.center = new U(0, 0)),
        (this.rotation = 0),
        (this.matrixAutoUpdate = !0),
        (this.matrix = new G()),
        (this.generateMipmaps = !0),
        (this.premultiplyAlpha = !1),
        (this.flipY = !0),
        (this.unpackAlignment = 4),
        (this.colorSpace = d),
        (this.userData = {}),
        (this.updateRanges = []),
        (this.version = 0),
        (this.onUpdate = null),
        (this.renderTarget = null),
        (this.isRenderTargetTexture = !1),
        (this.isArrayTexture = !!(t && t.depth && t.depth > 1)),
        (this.pmremVersion = 0),
        (this.normalized = !1));
    }
    get width() {
      return this.source.getSize(Zt).x;
    }
    get height() {
      return this.source.getSize(Zt).y;
    }
    get depth() {
      return this.source.getSize(Zt).z;
    }
    get image() {
      return this.source.data;
    }
    set image(e) {
      this.source.data = e;
    }
    updateMatrix() {
      this.matrix.setUvTransform(
        this.offset.x,
        this.offset.y,
        this.repeat.x,
        this.repeat.y,
        this.rotation,
        this.center.x,
        this.center.y,
      );
    }
    addUpdateRange(e, t) {
      this.updateRanges.push({ start: e, count: t });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (
        (this.name = e.name),
        (this.source = e.source),
        (this.mipmaps = e.mipmaps.slice(0)),
        (this.mapping = e.mapping),
        (this.channel = e.channel),
        (this.wrapS = e.wrapS),
        (this.wrapT = e.wrapT),
        (this.magFilter = e.magFilter),
        (this.minFilter = e.minFilter),
        (this.anisotropy = e.anisotropy),
        (this.format = e.format),
        (this.internalFormat = e.internalFormat),
        (this.type = e.type),
        (this.normalized = e.normalized),
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.center.copy(e.center),
        (this.rotation = e.rotation),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        this.matrix.copy(e.matrix),
        (this.generateMipmaps = e.generateMipmaps),
        (this.premultiplyAlpha = e.premultiplyAlpha),
        (this.flipY = e.flipY),
        (this.unpackAlignment = e.unpackAlignment),
        (this.colorSpace = e.colorSpace),
        (this.renderTarget = e.renderTarget),
        (this.isRenderTargetTexture = e.isRenderTargetTexture),
        (this.isArrayTexture = e.isArrayTexture),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        (this.needsUpdate = !0),
        this
      );
    }
    setValues(e) {
      for (let t in e) {
        let n = e[t];
        if (n === void 0) {
          B(`Texture.setValues(): parameter '${t}' has value of undefined.`);
          continue;
        }
        let r = this[t];
        if (r === void 0) {
          B(`Texture.setValues(): property '${t}' does not exist.`);
          continue;
        }
        (r && n && r.isVector2 && n.isVector2) ||
        (r && n && r.isVector3 && n.isVector3) ||
        (r && n && r.isMatrix3 && n.isMatrix3)
          ? r.copy(n)
          : (this[t] = n);
      }
    }
    toJSON(e) {
      let t = e === void 0 || typeof e == `string`;
      if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
      let n = {
        metadata: {
          version: 4.7,
          type: `Texture`,
          generator: `Texture.toJSON`,
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(e).uuid,
        mapping: this.mapping,
        channel: this.channel,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        normalized: this.normalized,
        colorSpace: this.colorSpace,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment,
      };
      return (
        Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        t || (e.textures[this.uuid] = n),
        n
      );
    }
    dispose() {
      this.dispatchEvent({ type: `dispose` });
    }
    transformUv(e) {
      if (this.mapping !== 300) return e;
      if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
        switch (this.wrapS) {
          case s:
            e.x -= Math.floor(e.x);
            break;
          case c:
            e.x = e.x < 0 ? 0 : 1;
            break;
          case l:
            Math.abs(Math.floor(e.x) % 2) === 1
              ? (e.x = Math.ceil(e.x) - e.x)
              : (e.x -= Math.floor(e.x));
        }
      if (e.y < 0 || e.y > 1)
        switch (this.wrapT) {
          case s:
            e.y -= Math.floor(e.y);
            break;
          case c:
            e.y = e.y < 0 ? 0 : 1;
            break;
          case l:
            Math.abs(Math.floor(e.y) % 2) === 1
              ? (e.y = Math.ceil(e.y) - e.y)
              : (e.y -= Math.floor(e.y));
        }
      return (this.flipY && (e.y = 1 - e.y), e);
    }
    set needsUpdate(e) {
      e === !0 && (this.version++, (this.source.needsUpdate = !0));
    }
    set needsPMREMUpdate(e) {
      e === !0 && this.pmremVersion++;
    }
  };
((Qt.DEFAULT_IMAGE = null),
  (Qt.DEFAULT_MAPPING = 300),
  (Qt.DEFAULT_ANISOTROPY = 1));
var $t = class e {
    static {
      e.prototype.isVector4 = !0;
    }
    constructor(e = 0, t = 0, n = 0, r = 1) {
      ((this.x = e), (this.y = t), (this.z = n), (this.w = r));
    }
    get width() {
      return this.z;
    }
    set width(e) {
      this.z = e;
    }
    get height() {
      return this.w;
    }
    set height(e) {
      this.w = e;
    }
    set(e, t, n, r) {
      return ((this.x = e), (this.y = t), (this.z = n), (this.w = r), this);
    }
    setScalar(e) {
      return ((this.x = e), (this.y = e), (this.z = e), (this.w = e), this);
    }
    setX(e) {
      return ((this.x = e), this);
    }
    setY(e) {
      return ((this.y = e), this);
    }
    setZ(e) {
      return ((this.z = e), this);
    }
    setW(e) {
      return ((this.w = e), this);
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        case 3:
          this.w = t;
          break;
        default:
          throw Error(`THREE.Vector4: index is out of range: ` + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw Error(`THREE.Vector4: index is out of range: ` + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(e) {
      return (
        (this.x = e.x),
        (this.y = e.y),
        (this.z = e.z),
        (this.w = e.w === void 0 ? 1 : e.w),
        this
      );
    }
    add(e) {
      return (
        (this.x += e.x),
        (this.y += e.y),
        (this.z += e.z),
        (this.w += e.w),
        this
      );
    }
    addScalar(e) {
      return ((this.x += e), (this.y += e), (this.z += e), (this.w += e), this);
    }
    addVectors(e, t) {
      return (
        (this.x = e.x + t.x),
        (this.y = e.y + t.y),
        (this.z = e.z + t.z),
        (this.w = e.w + t.w),
        this
      );
    }
    addScaledVector(e, t) {
      return (
        (this.x += e.x * t),
        (this.y += e.y * t),
        (this.z += e.z * t),
        (this.w += e.w * t),
        this
      );
    }
    sub(e) {
      return (
        (this.x -= e.x),
        (this.y -= e.y),
        (this.z -= e.z),
        (this.w -= e.w),
        this
      );
    }
    subScalar(e) {
      return ((this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this);
    }
    subVectors(e, t) {
      return (
        (this.x = e.x - t.x),
        (this.y = e.y - t.y),
        (this.z = e.z - t.z),
        (this.w = e.w - t.w),
        this
      );
    }
    multiply(e) {
      return (
        (this.x *= e.x),
        (this.y *= e.y),
        (this.z *= e.z),
        (this.w *= e.w),
        this
      );
    }
    multiplyScalar(e) {
      return ((this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this);
    }
    applyMatrix4(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = this.w,
        a = e.elements;
      return (
        (this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i),
        (this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i),
        (this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i),
        (this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i),
        this
      );
    }
    divide(e) {
      return (
        (this.x /= e.x),
        (this.y /= e.y),
        (this.z /= e.z),
        (this.w /= e.w),
        this
      );
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    setAxisAngleFromQuaternion(e) {
      this.w = 2 * Math.acos(e.w);
      let t = Math.sqrt(1 - e.w * e.w);
      return (
        t < 1e-4
          ? ((this.x = 1), (this.y = 0), (this.z = 0))
          : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
        this
      );
    }
    setAxisAngleFromRotationMatrix(e) {
      let t,
        n,
        r,
        i,
        a = 0.01,
        o = 0.1,
        s = e.elements,
        c = s[0],
        l = s[4],
        u = s[8],
        d = s[1],
        f = s[5],
        p = s[9],
        m = s[2],
        h = s[6],
        g = s[10];
      if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
        if (
          Math.abs(l + d) < o &&
          Math.abs(u + m) < o &&
          Math.abs(p + h) < o &&
          Math.abs(c + f + g - 3) < o
        )
          return (this.set(1, 0, 0, 0), this);
        t = Math.PI;
        let e = (c + 1) / 2,
          s = (f + 1) / 2,
          _ = (g + 1) / 2,
          v = (l + d) / 4,
          y = (u + m) / 4,
          b = (p + h) / 4;
        return (
          e > s && e > _
            ? e < a
              ? ((n = 0), (r = 0.707106781), (i = 0.707106781))
              : ((n = Math.sqrt(e)), (r = v / n), (i = y / n))
            : s > _
              ? s < a
                ? ((n = 0.707106781), (r = 0), (i = 0.707106781))
                : ((r = Math.sqrt(s)), (n = v / r), (i = b / r))
              : _ < a
                ? ((n = 0.707106781), (r = 0.707106781), (i = 0))
                : ((i = Math.sqrt(_)), (n = y / i), (r = b / i)),
          this.set(n, r, i, t),
          this
        );
      }
      let _ = Math.sqrt(
        (h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l),
      );
      return (
        Math.abs(_) < 0.001 && (_ = 1),
        (this.x = (h - p) / _),
        (this.y = (u - m) / _),
        (this.z = (d - l) / _),
        (this.w = Math.acos((c + f + g - 1) / 2)),
        this
      );
    }
    setFromMatrixPosition(e) {
      let t = e.elements;
      return (
        (this.x = t[12]),
        (this.y = t[13]),
        (this.z = t[14]),
        (this.w = t[15]),
        this
      );
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        (this.z = Math.min(this.z, e.z)),
        (this.w = Math.min(this.w, e.w)),
        this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        (this.z = Math.max(this.z, e.z)),
        (this.w = Math.max(this.w, e.w)),
        this
      );
    }
    clamp(e, t) {
      return (
        (this.x = H(this.x, e.x, t.x)),
        (this.y = H(this.y, e.y, t.y)),
        (this.z = H(this.z, e.z, t.z)),
        (this.w = H(this.w, e.w, t.w)),
        this
      );
    }
    clampScalar(e, t) {
      return (
        (this.x = H(this.x, e, t)),
        (this.y = H(this.y, e, t)),
        (this.z = H(this.z, e, t)),
        (this.w = H(this.w, e, t)),
        this
      );
    }
    clampLength(e, t) {
      let n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(H(n, e, t));
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        (this.w = Math.floor(this.w)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        (this.w = Math.ceil(this.w)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        (this.w = Math.round(this.w)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = Math.trunc(this.x)),
        (this.y = Math.trunc(this.y)),
        (this.z = Math.trunc(this.z)),
        (this.w = Math.trunc(this.w)),
        this
      );
    }
    negate() {
      return (
        (this.x = -this.x),
        (this.y = -this.y),
        (this.z = -this.z),
        (this.w = -this.w),
        this
      );
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
    }
    lengthSq() {
      return (
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    length() {
      return Math.sqrt(
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
      );
    }
    manhattanLength() {
      return (
        Math.abs(this.x) +
        Math.abs(this.y) +
        Math.abs(this.z) +
        Math.abs(this.w)
      );
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        (this.z += (e.z - this.z) * t),
        (this.w += (e.w - this.w) * t),
        this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n),
        (this.y = e.y + (t.y - e.y) * n),
        (this.z = e.z + (t.z - e.z) * n),
        (this.w = e.w + (t.w - e.w) * n),
        this
      );
    }
    equals(e) {
      return (
        e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
      );
    }
    fromArray(e, t = 0) {
      return (
        (this.x = e[t]),
        (this.y = e[t + 1]),
        (this.z = e[t + 2]),
        (this.w = e[t + 3]),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this.x),
        (e[t + 1] = this.y),
        (e[t + 2] = this.z),
        (e[t + 3] = this.w),
        e
      );
    }
    fromBufferAttribute(e, t) {
      return (
        (this.x = e.getX(t)),
        (this.y = e.getY(t)),
        (this.z = e.getZ(t)),
        (this.w = e.getW(t)),
        this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        (this.w = Math.random()),
        this
      );
    }
    *[Symbol.iterator]() {
      (yield this.x, yield this.y, yield this.z, yield this.w);
    }
  },
  en = class extends lt {
    constructor(e = 1, t = 1, n = {}) {
      (super(),
        (n = Object.assign(
          {
            generateMipmaps: !1,
            internalFormat: null,
            minFilter: p,
            depthBuffer: !0,
            stencilBuffer: !1,
            resolveColorBuffer: !0,
            resolveDepthBuffer: !0,
            resolveStencilBuffer: !0,
            storeMultisampledColorBuffer: !0,
            storeMultisampledDepthBuffer: !0,
            storeMultisampledStencilBuffer: !0,
            depthTexture: null,
            samples: 0,
            count: 1,
            depth: 1,
            multiview: !1,
            useArrayDepthTexture: !1,
          },
          n,
        )),
        (this.isRenderTarget = !0),
        (this.width = e),
        (this.height = t),
        (this.depth = n.depth),
        (this.scissor = new $t(0, 0, e, t)),
        (this.scissorTest = !1),
        (this.viewport = new $t(0, 0, e, t)),
        (this.textures = []));
      let r = new Qt({ width: e, height: t, depth: n.depth }),
        i = n.count;
      for (let e = 0; e < i; e++)
        ((this.textures[e] = r.clone()),
          (this.textures[e].isRenderTargetTexture = !0),
          (this.textures[e].renderTarget = this));
      (this._setTextureOptions(n),
        (this.depthBuffer = n.depthBuffer),
        (this.stencilBuffer = n.stencilBuffer),
        (this.resolveColorBuffer = n.resolveColorBuffer),
        (this.resolveDepthBuffer = n.resolveDepthBuffer),
        (this.resolveStencilBuffer = n.resolveStencilBuffer),
        (this.storeMultisampledColorBuffer = n.storeMultisampledColorBuffer),
        (this.storeMultisampledDepthBuffer = n.storeMultisampledDepthBuffer),
        (this.storeMultisampledStencilBuffer =
          n.storeMultisampledStencilBuffer),
        (this._depthTexture = null),
        (this.depthTexture = n.depthTexture),
        (this.samples = n.samples),
        (this.multiview = n.multiview),
        (this.useArrayDepthTexture = n.useArrayDepthTexture));
    }
    _setTextureOptions(e = {}) {
      let t = {
        minFilter: p,
        generateMipmaps: !1,
        flipY: !1,
        internalFormat: null,
      };
      (e.mapping !== void 0 && (t.mapping = e.mapping),
        e.wrapS !== void 0 && (t.wrapS = e.wrapS),
        e.wrapT !== void 0 && (t.wrapT = e.wrapT),
        e.wrapR !== void 0 && (t.wrapR = e.wrapR),
        e.magFilter !== void 0 && (t.magFilter = e.magFilter),
        e.minFilter !== void 0 && (t.minFilter = e.minFilter),
        e.format !== void 0 && (t.format = e.format),
        e.type !== void 0 && (t.type = e.type),
        e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy),
        e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace),
        e.flipY !== void 0 && (t.flipY = e.flipY),
        e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps),
        e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat));
      for (let e = 0; e < this.textures.length; e++)
        this.textures[e].setValues(t);
    }
    get texture() {
      return this.textures[0];
    }
    set texture(e) {
      this.textures[0] = e;
    }
    set depthTexture(e) {
      (this._depthTexture !== null &&
        this._depthTexture.renderTarget === this &&
        (this._depthTexture.renderTarget = null),
        e !== null && e.renderTarget === null && (e.renderTarget = this),
        (this._depthTexture = e));
    }
    get depthTexture() {
      return this._depthTexture;
    }
    setSize(e, t, n = 1) {
      if (this.width !== e || this.height !== t || this.depth !== n) {
        ((this.width = e), (this.height = t), (this.depth = n));
        for (let r = 0, i = this.textures.length; r < i; r++)
          ((this.textures[r].image.width = e),
            (this.textures[r].image.height = t),
            (this.textures[r].image.depth = n),
            this.textures[r].isData3DTexture !== !0 &&
              (this.textures[r].isArrayTexture =
                this.textures[r].image.depth > 1));
        this.dispose();
      }
      (this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t));
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      ((this.width = e.width),
        (this.height = e.height),
        (this.depth = e.depth),
        this.scissor.copy(e.scissor),
        (this.scissorTest = e.scissorTest),
        this.viewport.copy(e.viewport),
        (this.textures.length = 0));
      for (let t = 0, n = e.textures.length; t < n; t++) {
        ((this.textures[t] = e.textures[t].clone()),
          (this.textures[t].isRenderTargetTexture = !0),
          (this.textures[t].renderTarget = this));
        let n = Object.assign({}, e.textures[t].image);
        this.textures[t].source = new Jt(n);
      }
      if (
        ((this.depthBuffer = e.depthBuffer),
        (this.stencilBuffer = e.stencilBuffer),
        (this.resolveColorBuffer = e.resolveColorBuffer),
        (this.resolveDepthBuffer = e.resolveDepthBuffer),
        (this.resolveStencilBuffer = e.resolveStencilBuffer),
        (this.storeMultisampledColorBuffer = e.storeMultisampledColorBuffer),
        (this.storeMultisampledDepthBuffer = e.storeMultisampledDepthBuffer),
        (this.storeMultisampledStencilBuffer =
          e.storeMultisampledStencilBuffer),
        e.depthTexture !== null)
      ) {
        if (e.depthTexture.renderTarget === e) {
          let t = e.depthTexture.clone();
          ((t.renderTarget = null), (this.depthTexture = t));
        } else this.depthTexture = e.depthTexture;
      }
      return (
        (this.samples = e.samples),
        (this.multiview = e.multiview),
        (this.useArrayDepthTexture = e.useArrayDepthTexture),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: `dispose` });
    }
  },
  tn = class extends en {
    constructor(e = 1, t = 1, n = {}) {
      (super(e, t, n), (this.isWebGLRenderTarget = !0));
    }
  },
  nn = class extends Qt {
    constructor(e = null, t = 1, n = 1, r = 1) {
      (super(null),
        (this.isDataArrayTexture = !0),
        (this.image = { data: e, width: t, height: n, depth: r }),
        (this.magFilter = u),
        (this.minFilter = u),
        (this.wrapR = c),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1),
        (this.layerUpdates = new Set()));
    }
    copy(e) {
      return (super.copy(e), (this.wrapR = e.wrapR), this);
    }
    addLayerUpdate(e) {
      this.layerUpdates.add(e);
    }
    clearLayerUpdates() {
      this.layerUpdates.clear();
    }
  },
  rn = class extends Qt {
    constructor(e = null, t = 1, n = 1, r = 1) {
      (super(null),
        (this.isData3DTexture = !0),
        (this.image = { data: e, width: t, height: n, depth: r }),
        (this.magFilter = u),
        (this.minFilter = u),
        (this.wrapR = c),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1));
    }
    copy(e) {
      return (super.copy(e), (this.wrapR = e.wrapR), this);
    }
  },
  q = class e {
    static {
      e.prototype.isMatrix4 = !0;
    }
    constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
      ((this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        e !== void 0 &&
          this.set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h));
    }
    set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
      let g = this.elements;
      return (
        (g[0] = e),
        (g[4] = t),
        (g[8] = n),
        (g[12] = r),
        (g[1] = i),
        (g[5] = a),
        (g[9] = o),
        (g[13] = s),
        (g[2] = c),
        (g[6] = l),
        (g[10] = u),
        (g[14] = d),
        (g[3] = f),
        (g[7] = p),
        (g[11] = m),
        (g[15] = h),
        this
      );
    }
    identity() {
      return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
    }
    clone() {
      return new e().fromArray(this.elements);
    }
    copy(e) {
      let t = this.elements,
        n = e.elements;
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        (t[9] = n[9]),
        (t[10] = n[10]),
        (t[11] = n[11]),
        (t[12] = n[12]),
        (t[13] = n[13]),
        (t[14] = n[14]),
        (t[15] = n[15]),
        this
      );
    }
    copyPosition(e) {
      let t = this.elements,
        n = e.elements;
      return ((t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this);
    }
    setFromMatrix3(e) {
      let t = e.elements;
      return (
        this.set(
          t[0],
          t[3],
          t[6],
          0,
          t[1],
          t[4],
          t[7],
          0,
          t[2],
          t[5],
          t[8],
          0,
          0,
          0,
          0,
          1,
        ),
        this
      );
    }
    extractBasis(e, t, n) {
      return this.determinantAffine() === 0
        ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this)
        : (e.setFromMatrixColumn(this, 0),
          t.setFromMatrixColumn(this, 1),
          n.setFromMatrixColumn(this, 2),
          this);
    }
    makeBasis(e, t, n) {
      return (
        this.set(
          e.x,
          t.x,
          n.x,
          0,
          e.y,
          t.y,
          n.y,
          0,
          e.z,
          t.z,
          n.z,
          0,
          0,
          0,
          0,
          1,
        ),
        this
      );
    }
    extractRotation(e) {
      if (e.determinantAffine() === 0) return this.identity();
      let t = this.elements,
        n = e.elements,
        r = 1 / an.setFromMatrixColumn(e, 0).length(),
        i = 1 / an.setFromMatrixColumn(e, 1).length(),
        a = 1 / an.setFromMatrixColumn(e, 2).length();
      return (
        (t[0] = n[0] * r),
        (t[1] = n[1] * r),
        (t[2] = n[2] * r),
        (t[3] = 0),
        (t[4] = n[4] * i),
        (t[5] = n[5] * i),
        (t[6] = n[6] * i),
        (t[7] = 0),
        (t[8] = n[8] * a),
        (t[9] = n[9] * a),
        (t[10] = n[10] * a),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        this
      );
    }
    makeRotationFromEuler(e) {
      let t = this.elements,
        n = e.x,
        r = e.y,
        i = e.z,
        a = Math.cos(n),
        o = Math.sin(n),
        s = Math.cos(r),
        c = Math.sin(r),
        l = Math.cos(i),
        u = Math.sin(i);
      if (e.order === `XYZ`) {
        let e = a * l,
          n = a * u,
          r = o * l,
          i = o * u;
        ((t[0] = s * l),
          (t[4] = -s * u),
          (t[8] = c),
          (t[1] = n + r * c),
          (t[5] = e - i * c),
          (t[9] = -o * s),
          (t[2] = i - e * c),
          (t[6] = r + n * c),
          (t[10] = a * s));
      } else if (e.order === `YXZ`) {
        let e = s * l,
          n = s * u,
          r = c * l,
          i = c * u;
        ((t[0] = e + i * o),
          (t[4] = r * o - n),
          (t[8] = a * c),
          (t[1] = a * u),
          (t[5] = a * l),
          (t[9] = -o),
          (t[2] = n * o - r),
          (t[6] = i + e * o),
          (t[10] = a * s));
      } else if (e.order === `ZXY`) {
        let e = s * l,
          n = s * u,
          r = c * l,
          i = c * u;
        ((t[0] = e - i * o),
          (t[4] = -a * u),
          (t[8] = r + n * o),
          (t[1] = n + r * o),
          (t[5] = a * l),
          (t[9] = i - e * o),
          (t[2] = -a * c),
          (t[6] = o),
          (t[10] = a * s));
      } else if (e.order === `ZYX`) {
        let e = a * l,
          n = a * u,
          r = o * l,
          i = o * u;
        ((t[0] = s * l),
          (t[4] = r * c - n),
          (t[8] = e * c + i),
          (t[1] = s * u),
          (t[5] = i * c + e),
          (t[9] = n * c - r),
          (t[2] = -c),
          (t[6] = o * s),
          (t[10] = a * s));
      } else if (e.order === `YZX`) {
        let e = a * s,
          n = a * c,
          r = o * s,
          i = o * c;
        ((t[0] = s * l),
          (t[4] = i - e * u),
          (t[8] = r * u + n),
          (t[1] = u),
          (t[5] = a * l),
          (t[9] = -o * l),
          (t[2] = -c * l),
          (t[6] = n * u + r),
          (t[10] = e - i * u));
      } else if (e.order === `XZY`) {
        let e = a * s,
          n = a * c,
          r = o * s,
          i = o * c;
        ((t[0] = s * l),
          (t[4] = -u),
          (t[8] = c * l),
          (t[1] = e * u + i),
          (t[5] = a * l),
          (t[9] = n * u - r),
          (t[2] = r * u - n),
          (t[6] = o * l),
          (t[10] = i * u + e));
      }
      return (
        (t[3] = 0),
        (t[7] = 0),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        this
      );
    }
    makeRotationFromQuaternion(e) {
      return this.compose(sn, e, cn);
    }
    lookAt(e, t, n) {
      let r = this.elements;
      return (
        dn.subVectors(e, t),
        dn.lengthSq() === 0 && (dn.z = 1),
        dn.normalize(),
        ln.crossVectors(n, dn),
        ln.lengthSq() === 0 &&
          (Math.abs(n.z) === 1 ? (dn.x += 1e-4) : (dn.z += 1e-4),
          dn.normalize(),
          ln.crossVectors(n, dn)),
        ln.normalize(),
        un.crossVectors(dn, ln),
        (r[0] = ln.x),
        (r[4] = un.x),
        (r[8] = dn.x),
        (r[1] = ln.y),
        (r[5] = un.y),
        (r[9] = dn.y),
        (r[2] = ln.z),
        (r[6] = un.z),
        (r[10] = dn.z),
        this
      );
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      let n = e.elements,
        r = t.elements,
        i = this.elements,
        a = n[0],
        o = n[4],
        s = n[8],
        c = n[12],
        l = n[1],
        u = n[5],
        d = n[9],
        f = n[13],
        p = n[2],
        m = n[6],
        h = n[10],
        g = n[14],
        _ = n[3],
        v = n[7],
        y = n[11],
        b = n[15],
        x = r[0],
        S = r[4],
        C = r[8],
        w = r[12],
        T = r[1],
        E = r[5],
        D = r[9],
        O = r[13],
        k = r[2],
        A = r[6],
        j = r[10],
        ee = r[14],
        M = r[3],
        N = r[7],
        te = r[11],
        P = r[15];
      return (
        (i[0] = a * x + o * T + s * k + c * M),
        (i[4] = a * S + o * E + s * A + c * N),
        (i[8] = a * C + o * D + s * j + c * te),
        (i[12] = a * w + o * O + s * ee + c * P),
        (i[1] = l * x + u * T + d * k + f * M),
        (i[5] = l * S + u * E + d * A + f * N),
        (i[9] = l * C + u * D + d * j + f * te),
        (i[13] = l * w + u * O + d * ee + f * P),
        (i[2] = p * x + m * T + h * k + g * M),
        (i[6] = p * S + m * E + h * A + g * N),
        (i[10] = p * C + m * D + h * j + g * te),
        (i[14] = p * w + m * O + h * ee + g * P),
        (i[3] = _ * x + v * T + y * k + b * M),
        (i[7] = _ * S + v * E + y * A + b * N),
        (i[11] = _ * C + v * D + y * j + b * te),
        (i[15] = _ * w + v * O + y * ee + b * P),
        this
      );
    }
    multiplyScalar(e) {
      let t = this.elements;
      return (
        (t[0] *= e),
        (t[4] *= e),
        (t[8] *= e),
        (t[12] *= e),
        (t[1] *= e),
        (t[5] *= e),
        (t[9] *= e),
        (t[13] *= e),
        (t[2] *= e),
        (t[6] *= e),
        (t[10] *= e),
        (t[14] *= e),
        (t[3] *= e),
        (t[7] *= e),
        (t[11] *= e),
        (t[15] *= e),
        this
      );
    }
    determinant() {
      let e = this.elements,
        t = e[0],
        n = e[4],
        r = e[8],
        i = e[12],
        a = e[1],
        o = e[5],
        s = e[9],
        c = e[13],
        l = e[2],
        u = e[6],
        d = e[10],
        f = e[14],
        p = e[3],
        m = e[7],
        h = e[11],
        g = e[15],
        _ = s * f - c * d,
        v = o * f - c * u,
        y = o * d - s * u,
        b = a * f - c * l,
        x = a * d - s * l,
        S = a * u - o * l;
      return (
        t * (m * _ - h * v + g * y) -
        n * (p * _ - h * b + g * x) +
        r * (p * v - m * b + g * S) -
        i * (p * y - m * x + h * S)
      );
    }
    determinantAffine() {
      let e = this.elements,
        t = e[0],
        n = e[4],
        r = e[8],
        i = e[1],
        a = e[5],
        o = e[9],
        s = e[2],
        c = e[6],
        l = e[10];
      return t * (a * l - o * c) - n * (i * l - o * s) + r * (i * c - a * s);
    }
    transpose() {
      let e = this.elements,
        t;
      return (
        (t = e[1]),
        (e[1] = e[4]),
        (e[4] = t),
        (t = e[2]),
        (e[2] = e[8]),
        (e[8] = t),
        (t = e[6]),
        (e[6] = e[9]),
        (e[9] = t),
        (t = e[3]),
        (e[3] = e[12]),
        (e[12] = t),
        (t = e[7]),
        (e[7] = e[13]),
        (e[13] = t),
        (t = e[11]),
        (e[11] = e[14]),
        (e[14] = t),
        this
      );
    }
    setPosition(e, t, n) {
      let r = this.elements;
      return (
        e.isVector3
          ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
          : ((r[12] = e), (r[13] = t), (r[14] = n)),
        this
      );
    }
    invert() {
      let e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        i = e[3],
        a = e[4],
        o = e[5],
        s = e[6],
        c = e[7],
        l = e[8],
        u = e[9],
        d = e[10],
        f = e[11],
        p = e[12],
        m = e[13],
        h = e[14],
        g = e[15],
        _ = t * o - n * a,
        v = t * s - r * a,
        y = t * c - i * a,
        b = n * s - r * o,
        x = n * c - i * o,
        S = r * c - i * s,
        C = l * m - u * p,
        w = l * h - d * p,
        T = l * g - f * p,
        E = u * h - d * m,
        D = u * g - f * m,
        O = d * g - f * h,
        k = _ * O - v * D + y * E + b * T - x * w + S * C;
      if (k === 0)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      let A = 1 / k;
      return (
        (e[0] = (o * O - s * D + c * E) * A),
        (e[1] = (r * D - n * O - i * E) * A),
        (e[2] = (m * S - h * x + g * b) * A),
        (e[3] = (d * x - u * S - f * b) * A),
        (e[4] = (s * T - a * O - c * w) * A),
        (e[5] = (t * O - r * T + i * w) * A),
        (e[6] = (h * y - p * S - g * v) * A),
        (e[7] = (l * S - d * y + f * v) * A),
        (e[8] = (a * D - o * T + c * C) * A),
        (e[9] = (n * T - t * D - i * C) * A),
        (e[10] = (p * x - m * y + g * _) * A),
        (e[11] = (u * y - l * x - f * _) * A),
        (e[12] = (o * w - a * E - s * C) * A),
        (e[13] = (t * E - n * w + r * C) * A),
        (e[14] = (m * v - p * b - h * _) * A),
        (e[15] = (l * b - u * v + d * _) * A),
        this
      );
    }
    scale(e) {
      let t = this.elements,
        n = e.x,
        r = e.y,
        i = e.z;
      return (
        (t[0] *= n),
        (t[4] *= r),
        (t[8] *= i),
        (t[1] *= n),
        (t[5] *= r),
        (t[9] *= i),
        (t[2] *= n),
        (t[6] *= r),
        (t[10] *= i),
        (t[3] *= n),
        (t[7] *= r),
        (t[11] *= i),
        this
      );
    }
    getMaxScaleOnAxis() {
      let e = this.elements,
        t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
        n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
        r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
      return Math.sqrt(Math.max(t, n, r));
    }
    makeTranslation(e, t, n) {
      return (
        e.isVector3
          ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
          : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
        this
      );
    }
    makeRotationX(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this);
    }
    makeRotationY(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this);
    }
    makeRotationZ(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
    }
    makeRotationAxis(e, t) {
      let n = Math.cos(t),
        r = Math.sin(t),
        i = 1 - n,
        a = e.x,
        o = e.y,
        s = e.z,
        c = i * a,
        l = i * o;
      return (
        this.set(
          c * a + n,
          c * o - r * s,
          c * s + r * o,
          0,
          c * o + r * s,
          l * o + n,
          l * s - r * a,
          0,
          c * s - r * o,
          l * s + r * a,
          i * s * s + n,
          0,
          0,
          0,
          0,
          1,
        ),
        this
      );
    }
    makeScale(e, t, n) {
      return (this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this);
    }
    makeShear(e, t, n, r, i, a) {
      return (this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this);
    }
    compose(e, t, n) {
      let r = this.elements,
        i = t._x,
        a = t._y,
        o = t._z,
        s = t._w,
        c = i + i,
        l = a + a,
        u = o + o,
        d = i * c,
        f = i * l,
        p = i * u,
        m = a * l,
        h = a * u,
        g = o * u,
        _ = s * c,
        v = s * l,
        y = s * u,
        b = n.x,
        x = n.y,
        S = n.z;
      return (
        (r[0] = (1 - (m + g)) * b),
        (r[1] = (f + y) * b),
        (r[2] = (p - v) * b),
        (r[3] = 0),
        (r[4] = (f - y) * x),
        (r[5] = (1 - (d + g)) * x),
        (r[6] = (h + _) * x),
        (r[7] = 0),
        (r[8] = (p + v) * S),
        (r[9] = (h - _) * S),
        (r[10] = (1 - (d + m)) * S),
        (r[11] = 0),
        (r[12] = e.x),
        (r[13] = e.y),
        (r[14] = e.z),
        (r[15] = 1),
        this
      );
    }
    decompose(e, t, n) {
      let r = this.elements;
      ((e.x = r[12]), (e.y = r[13]), (e.z = r[14]));
      let i = this.determinantAffine();
      if (i === 0) return (n.set(1, 1, 1), t.identity(), this);
      let a = an.set(r[0], r[1], r[2]).length(),
        o = an.set(r[4], r[5], r[6]).length(),
        s = an.set(r[8], r[9], r[10]).length();
      (i < 0 && (a = -a), on.copy(this));
      let c = 1 / a,
        l = 1 / o,
        u = 1 / s;
      return (
        (on.elements[0] *= c),
        (on.elements[1] *= c),
        (on.elements[2] *= c),
        (on.elements[4] *= l),
        (on.elements[5] *= l),
        (on.elements[6] *= l),
        (on.elements[8] *= u),
        (on.elements[9] *= u),
        (on.elements[10] *= u),
        t.setFromRotationMatrix(on),
        (n.x = a),
        (n.y = o),
        (n.z = s),
        this
      );
    }
    makePerspective(e, t, n, r, i, a, o = Qe, s = !1) {
      let c = this.elements,
        l = (2 * i) / (t - e),
        u = (2 * i) / (n - r),
        d = (t + e) / (t - e),
        f = (n + r) / (n - r),
        p,
        m;
      if (s) ((p = i / (a - i)), (m = (a * i) / (a - i)));
      else if (o === 2e3)
        ((p = -(a + i) / (a - i)), (m = (-2 * a * i) / (a - i)));
      else if (o === 2001) ((p = -a / (a - i)), (m = (-a * i) / (a - i)));
      else
        throw Error(
          `THREE.Matrix4.makePerspective(): Invalid coordinate system: ` + o,
        );
      return (
        (c[0] = l),
        (c[4] = 0),
        (c[8] = d),
        (c[12] = 0),
        (c[1] = 0),
        (c[5] = u),
        (c[9] = f),
        (c[13] = 0),
        (c[2] = 0),
        (c[6] = 0),
        (c[10] = p),
        (c[14] = m),
        (c[3] = 0),
        (c[7] = 0),
        (c[11] = -1),
        (c[15] = 0),
        this
      );
    }
    makeOrthographic(e, t, n, r, i, a, o = Qe, s = !1) {
      let c = this.elements,
        l = 2 / (t - e),
        u = 2 / (n - r),
        d = -(t + e) / (t - e),
        f = -(n + r) / (n - r),
        p,
        m;
      if (s) ((p = 1 / (a - i)), (m = a / (a - i)));
      else if (o === 2e3) ((p = -2 / (a - i)), (m = -(a + i) / (a - i)));
      else if (o === 2001) ((p = -1 / (a - i)), (m = -i / (a - i)));
      else
        throw Error(
          `THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ` + o,
        );
      return (
        (c[0] = l),
        (c[4] = 0),
        (c[8] = 0),
        (c[12] = d),
        (c[1] = 0),
        (c[5] = u),
        (c[9] = 0),
        (c[13] = f),
        (c[2] = 0),
        (c[6] = 0),
        (c[10] = p),
        (c[14] = m),
        (c[3] = 0),
        (c[7] = 0),
        (c[11] = 0),
        (c[15] = 1),
        this
      );
    }
    equals(e) {
      let t = this.elements,
        n = e.elements;
      for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
      return !0;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      let n = this.elements;
      return (
        (e[t] = n[0]),
        (e[t + 1] = n[1]),
        (e[t + 2] = n[2]),
        (e[t + 3] = n[3]),
        (e[t + 4] = n[4]),
        (e[t + 5] = n[5]),
        (e[t + 6] = n[6]),
        (e[t + 7] = n[7]),
        (e[t + 8] = n[8]),
        (e[t + 9] = n[9]),
        (e[t + 10] = n[10]),
        (e[t + 11] = n[11]),
        (e[t + 12] = n[12]),
        (e[t + 13] = n[13]),
        (e[t + 14] = n[14]),
        (e[t + 15] = n[15]),
        e
      );
    }
  },
  an = new W(),
  on = new q(),
  sn = new W(0, 0, 0),
  cn = new W(1, 1, 1),
  ln = new W(),
  un = new W(),
  dn = new W(),
  fn = new q(),
  pn = new It(),
  mn = class e {
    constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
      ((this.isEuler = !0),
        (this._x = t),
        (this._y = n),
        (this._z = r),
        (this._order = i));
    }
    get x() {
      return this._x;
    }
    set x(e) {
      ((this._x = e), this._onChangeCallback());
    }
    get y() {
      return this._y;
    }
    set y(e) {
      ((this._y = e), this._onChangeCallback());
    }
    get z() {
      return this._z;
    }
    set z(e) {
      ((this._z = e), this._onChangeCallback());
    }
    get order() {
      return this._order;
    }
    set order(e) {
      ((this._order = e), this._onChangeCallback());
    }
    set(e, t, n, r = this._order) {
      return (
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._order = r),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(e) {
      return (
        (this._x = e._x),
        (this._y = e._y),
        (this._z = e._z),
        (this._order = e._order),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(e, t = this._order, n = !0) {
      let r = e.elements,
        i = r[0],
        a = r[4],
        o = r[8],
        s = r[1],
        c = r[5],
        l = r[9],
        u = r[2],
        d = r[6],
        f = r[10];
      switch (t) {
        case `XYZ`:
          ((this._y = Math.asin(H(o, -1, 1))),
            Math.abs(o) < 0.9999999
              ? ((this._x = Math.atan2(-l, f)), (this._z = Math.atan2(-a, i)))
              : ((this._x = Math.atan2(d, c)), (this._z = 0)));
          break;
        case `YXZ`:
          ((this._x = Math.asin(-H(l, -1, 1))),
            Math.abs(l) < 0.9999999
              ? ((this._y = Math.atan2(o, f)), (this._z = Math.atan2(s, c)))
              : ((this._y = Math.atan2(-u, i)), (this._z = 0)));
          break;
        case `ZXY`:
          ((this._x = Math.asin(H(d, -1, 1))),
            Math.abs(d) < 0.9999999
              ? ((this._y = Math.atan2(-u, f)), (this._z = Math.atan2(-a, c)))
              : ((this._y = 0), (this._z = Math.atan2(s, i))));
          break;
        case `ZYX`:
          ((this._y = Math.asin(-H(u, -1, 1))),
            Math.abs(u) < 0.9999999
              ? ((this._x = Math.atan2(d, f)), (this._z = Math.atan2(s, i)))
              : ((this._x = 0), (this._z = Math.atan2(-a, c))));
          break;
        case `YZX`:
          ((this._z = Math.asin(H(s, -1, 1))),
            Math.abs(s) < 0.9999999
              ? ((this._x = Math.atan2(-l, c)), (this._y = Math.atan2(-u, i)))
              : ((this._x = 0), (this._y = Math.atan2(o, f))));
          break;
        case `XZY`:
          ((this._z = Math.asin(-H(a, -1, 1))),
            Math.abs(a) < 0.9999999
              ? ((this._x = Math.atan2(d, c)), (this._y = Math.atan2(o, i)))
              : ((this._x = Math.atan2(-l, f)), (this._y = 0)));
          break;
        default:
          B(
            `Euler: .setFromRotationMatrix() encountered an unknown order: ` +
              t,
          );
      }
      return ((this._order = t), n === !0 && this._onChangeCallback(), this);
    }
    setFromQuaternion(e, t, n) {
      return (
        fn.makeRotationFromQuaternion(e),
        this.setFromRotationMatrix(fn, t, n)
      );
    }
    setFromVector3(e, t = this._order) {
      return this.set(e.x, e.y, e.z, t);
    }
    reorder(e) {
      return (pn.setFromEuler(this), this.setFromQuaternion(pn, e));
    }
    equals(e) {
      return (
        e._x === this._x &&
        e._y === this._y &&
        e._z === this._z &&
        e._order === this._order
      );
    }
    fromArray(e) {
      return (
        (this._x = e[0]),
        (this._y = e[1]),
        (this._z = e[2]),
        e[3] !== void 0 && (this._order = e[3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this._x),
        (e[t + 1] = this._y),
        (e[t + 2] = this._z),
        (e[t + 3] = this._order),
        e
      );
    }
    _onChange(e) {
      return ((this._onChangeCallback = e), this);
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      (yield this._x, yield this._y, yield this._z, yield this._order);
    }
  };
mn.DEFAULT_ORDER = `XYZ`;
var hn = class {
    constructor() {
      this.mask = 1;
    }
    set(e) {
      this.mask = ((1 << e) | 0) >>> 0;
    }
    enable(e) {
      this.mask |= (1 << e) | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(e) {
      this.mask ^= (1 << e) | 0;
    }
    disable(e) {
      this.mask &= ~((1 << e) | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(e) {
      return (this.mask & e.mask) !== 0;
    }
    isEnabled(e) {
      return !!(this.mask & ((1 << e) | 0));
    }
  },
  gn = 0,
  _n = new W(),
  vn = new It(),
  yn = new q(),
  bn = new W(),
  xn = new W(),
  Sn = new W(),
  Cn = new It(),
  wn = new W(1, 0, 0),
  Tn = new W(0, 1, 0),
  En = new W(0, 0, 1),
  Dn = { type: `added` },
  On = { type: `removed` },
  kn = { type: `childadded`, child: null },
  An = { type: `childremoved`, child: null },
  jn = class e extends lt {
    constructor() {
      (super(),
        (this.isObject3D = !0),
        Object.defineProperty(this, "id", { value: gn++ }),
        (this.uuid = mt()),
        (this.name = ``),
        (this.type = `Object3D`),
        (this.parent = null),
        (this.children = []),
        (this.up = e.DEFAULT_UP.clone()));
      let t = new W(),
        n = new mn(),
        r = new It(),
        i = new W(1, 1, 1);
      function a() {
        r.setFromEuler(n, !1);
      }
      function o() {
        n.setFromQuaternion(r, void 0, !1);
      }
      (n._onChange(a),
        r._onChange(o),
        Object.defineProperties(this, {
          position: { configurable: !0, enumerable: !0, value: t },
          rotation: { configurable: !0, enumerable: !0, value: n },
          quaternion: { configurable: !0, enumerable: !0, value: r },
          scale: { configurable: !0, enumerable: !0, value: i },
          modelViewMatrix: { value: new q() },
          normalMatrix: { value: new G() },
        }),
        (this.matrix = new q()),
        (this.matrixWorld = new q()),
        (this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE),
        (this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
        (this.matrixWorldNeedsUpdate = !1),
        (this.layers = new hn()),
        (this.visible = !0),
        (this.castShadow = !1),
        (this.receiveShadow = !1),
        (this.frustumCulled = !0),
        (this.renderOrder = 0),
        (this.animations = []),
        (this.customDepthMaterial = void 0),
        (this.customDistanceMaterial = void 0),
        (this.static = !1),
        (this.userData = {}),
        (this.pivot = null));
    }
    onBeforeShadow() {}
    onAfterShadow() {}
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
      (this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(e),
        this.matrix.decompose(this.position, this.quaternion, this.scale));
    }
    applyQuaternion(e) {
      return (this.quaternion.premultiply(e), this);
    }
    setRotationFromAxisAngle(e, t) {
      this.quaternion.setFromAxisAngle(e, t);
    }
    setRotationFromEuler(e) {
      this.quaternion.setFromEuler(e, !0);
    }
    setRotationFromMatrix(e) {
      this.quaternion.setFromRotationMatrix(e);
    }
    setRotationFromQuaternion(e) {
      this.quaternion.copy(e);
    }
    rotateOnAxis(e, t) {
      return (vn.setFromAxisAngle(e, t), this.quaternion.multiply(vn), this);
    }
    rotateOnWorldAxis(e, t) {
      return (vn.setFromAxisAngle(e, t), this.quaternion.premultiply(vn), this);
    }
    rotateX(e) {
      return this.rotateOnAxis(wn, e);
    }
    rotateY(e) {
      return this.rotateOnAxis(Tn, e);
    }
    rotateZ(e) {
      return this.rotateOnAxis(En, e);
    }
    translateOnAxis(e, t) {
      return (
        _n.copy(e).applyQuaternion(this.quaternion),
        this.position.add(_n.multiplyScalar(t)),
        this
      );
    }
    translateX(e) {
      return this.translateOnAxis(wn, e);
    }
    translateY(e) {
      return this.translateOnAxis(Tn, e);
    }
    translateZ(e) {
      return this.translateOnAxis(En, e);
    }
    localToWorld(e) {
      return (this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld));
    }
    worldToLocal(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        e.applyMatrix4(yn.copy(this.matrixWorld).invert())
      );
    }
    lookAt(e, t, n) {
      e.isVector3 ? bn.copy(e) : bn.set(e, t, n);
      let r = this.parent;
      (this.updateWorldMatrix(!0, !1),
        xn.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight
          ? yn.lookAt(xn, bn, this.up)
          : yn.lookAt(bn, xn, this.up),
        this.quaternion.setFromRotationMatrix(yn),
        r &&
          (yn.extractRotation(r.matrixWorld),
          vn.setFromRotationMatrix(yn),
          this.quaternion.premultiply(vn.invert())));
    }
    add(e) {
      if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
        return this;
      }
      return e === this
        ? (V(`Object3D.add: object can't be added as a child of itself.`, e),
          this)
        : (e && e.isObject3D
            ? (e.removeFromParent(),
              (e.parent = this),
              this.children.push(e),
              e.dispatchEvent(Dn),
              (kn.child = e),
              this.dispatchEvent(kn),
              (kn.child = null))
            : V(`Object3D.add: object not an instance of THREE.Object3D.`, e),
          this);
    }
    remove(e) {
      if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
        return this;
      }
      let t = this.children.indexOf(e);
      return (
        t !== -1 &&
          ((e.parent = null),
          this.children.splice(t, 1),
          e.dispatchEvent(On),
          (An.child = e),
          this.dispatchEvent(An),
          (An.child = null)),
        this
      );
    }
    removeFromParent() {
      let e = this.parent;
      return (e !== null && e.remove(this), this);
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        yn.copy(this.matrixWorld).invert(),
        e.parent !== null &&
          (e.parent.updateWorldMatrix(!0, !1),
          yn.multiply(e.parent.matrixWorld)),
        e.applyMatrix4(yn),
        e.removeFromParent(),
        (e.parent = this),
        this.children.push(e),
        e.updateWorldMatrix(!1, !0),
        e.dispatchEvent(Dn),
        (kn.child = e),
        this.dispatchEvent(kn),
        (kn.child = null),
        this
      );
    }
    getObjectById(e) {
      return this.getObjectByProperty(`id`, e);
    }
    getObjectByName(e) {
      return this.getObjectByProperty(`name`, e);
    }
    getObjectByProperty(e, t) {
      if (this[e] === t) return this;
      for (let n = 0, r = this.children.length; n < r; n++) {
        let r = this.children[n].getObjectByProperty(e, t);
        if (r !== void 0) return r;
      }
    }
    getObjectsByProperty(e, t, n = []) {
      this[e] === t && n.push(this);
      let r = this.children;
      for (let i = 0, a = r.length; i < a; i++)
        r[i].getObjectsByProperty(e, t, n);
      return n;
    }
    getWorldPosition(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        e.setFromMatrixPosition(this.matrixWorld)
      );
    }
    getWorldQuaternion(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(xn, e, Sn),
        e
      );
    }
    getWorldScale(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(xn, Cn, e),
        e
      );
    }
    getWorldDirection(e) {
      this.updateWorldMatrix(!0, !1);
      let t = this.matrixWorld.elements;
      return e.set(t[8], t[9], t[10]).normalize();
    }
    raycast() {}
    intersectsFrustum() {}
    traverse(e) {
      e(this);
      let t = this.children;
      for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
    }
    traverseVisible(e) {
      if (this.visible === !1) return;
      e(this);
      let t = this.children;
      for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
    }
    traverseAncestors(e) {
      let t = this.parent;
      t !== null && (e(t), t.traverseAncestors(e));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale);
      let e = this.pivot;
      if (e !== null) {
        let t = e.x,
          n = e.y,
          r = e.z,
          i = this.matrix.elements;
        ((i[12] += t - i[0] * t - i[4] * n - i[8] * r),
          (i[13] += n - i[1] * t - i[5] * n - i[9] * r),
          (i[14] += r - i[2] * t - i[6] * n - i[10] * r));
      }
      this.matrixWorldNeedsUpdate = !0;
    }
    updateMatrixWorld(e) {
      (this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || e) &&
          (this.matrixWorldAutoUpdate === !0 &&
            (this.parent === null
              ? this.matrixWorld.copy(this.matrix)
              : this.matrixWorld.multiplyMatrices(
                  this.parent.matrixWorld,
                  this.matrix,
                )),
          (this.matrixWorldNeedsUpdate = !1),
          (e = !0)));
      let t = this.children;
      for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
    }
    updateWorldMatrix(e, t, n = !1) {
      let r = this.parent;
      if (
        (e === !0 && r !== null && r.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || n) &&
          (this.matrixWorldAutoUpdate === !0 &&
            (this.parent === null
              ? this.matrixWorld.copy(this.matrix)
              : this.matrixWorld.multiplyMatrices(
                  this.parent.matrixWorld,
                  this.matrix,
                )),
          (this.matrixWorldNeedsUpdate = !1),
          (n = !0)),
        t === !0)
      ) {
        let e = this.children;
        for (let t = 0, r = e.length; t < r; t++)
          e[t].updateWorldMatrix(!1, !0, n);
      }
    }
    toJSON(e) {
      let t = e === void 0 || typeof e == `string`,
        n = {};
      t &&
        ((e = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
          skeletons: {},
          animations: {},
          nodes: {},
        }),
        (n.metadata = {
          version: 4.7,
          type: `Object`,
          generator: `Object3D.toJSON`,
        }));
      let r = {};
      ((r.uuid = this.uuid),
        (r.type = this.type),
        (r.name = this.name),
        (r.castShadow = this.castShadow),
        (r.receiveShadow = this.receiveShadow),
        (r.visible = this.visible),
        (r.frustumCulled = this.frustumCulled),
        (r.renderOrder = this.renderOrder),
        (r.static = this.static),
        (r.matrixAutoUpdate = this.matrixAutoUpdate),
        Object.keys(this.userData).length > 0 && (r.userData = this.userData),
        (r.layers = this.layers.mask),
        (r.matrix = this.matrix.toArray()),
        (r.up = this.up.toArray()),
        this.pivot !== null && (r.pivot = this.pivot.toArray()),
        this.morphTargetDictionary !== void 0 &&
          (r.morphTargetDictionary = Object.assign(
            {},
            this.morphTargetDictionary,
          )),
        this.morphTargetInfluences !== void 0 &&
          (r.morphTargetInfluences = this.morphTargetInfluences.slice()),
        this.isInstancedMesh &&
          ((r.type = `InstancedMesh`),
          (r.count = this.count),
          (r.instanceMatrix = this.instanceMatrix.toJSON()),
          this.instanceColor !== null &&
            (r.instanceColor = this.instanceColor.toJSON())),
        this.isBatchedMesh &&
          ((r.type = `BatchedMesh`),
          (r.perObjectFrustumCulled = this.perObjectFrustumCulled),
          (r.sortObjects = this.sortObjects),
          (r.drawRanges = this._drawRanges),
          (r.reservedRanges = this._reservedRanges),
          (r.geometryInfo = this._geometryInfo.map((e) => ({
            ...e,
            boundingBox: e.boundingBox ? e.boundingBox.toJSON() : void 0,
            boundingSphere: e.boundingSphere
              ? e.boundingSphere.toJSON()
              : void 0,
          }))),
          (r.instanceInfo = this._instanceInfo.map((e) => ({ ...e }))),
          (r.availableInstanceIds = this._availableInstanceIds.slice()),
          (r.availableGeometryIds = this._availableGeometryIds.slice()),
          (r.nextIndexStart = this._nextIndexStart),
          (r.nextVertexStart = this._nextVertexStart),
          (r.geometryCount = this._geometryCount),
          (r.maxInstanceCount = this._maxInstanceCount),
          (r.maxVertexCount = this._maxVertexCount),
          (r.maxIndexCount = this._maxIndexCount),
          (r.geometryInitialized = this._geometryInitialized),
          (r.matricesTexture = this._matricesTexture.toJSON(e)),
          (r.indirectTexture = this._indirectTexture.toJSON(e)),
          this._colorsTexture !== null &&
            (r.colorsTexture = this._colorsTexture.toJSON(e)),
          this.boundingSphere !== null &&
            (r.boundingSphere = this.boundingSphere.toJSON()),
          this.boundingBox !== null &&
            (r.boundingBox = this.boundingBox.toJSON())));
      function i(t, n) {
        return (t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid);
      }
      if (this.isScene)
        (this.background &&
          (this.background.isColor
            ? (r.background = this.background.toJSON())
            : this.background.isTexture &&
              (r.background = this.background.toJSON(e).uuid)),
          this.environment &&
            this.environment.isTexture &&
            this.environment.isRenderTargetTexture !== !0 &&
            (r.environment = this.environment.toJSON(e).uuid));
      else if (this.isMesh || this.isLine || this.isPoints) {
        r.geometry = i(e.geometries, this.geometry);
        let t = this.geometry.parameters;
        if (t !== void 0 && t.shapes !== void 0) {
          let n = t.shapes;
          if (Array.isArray(n))
            for (let t = 0, r = n.length; t < r; t++) {
              let r = n[t];
              i(e.shapes, r);
            }
          else i(e.shapes, n);
        }
      }
      if (
        (this.isSkinnedMesh &&
          ((r.bindMode = this.bindMode),
          (r.bindMatrix = this.bindMatrix.toArray()),
          this.skeleton !== void 0 &&
            (i(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
        this.material !== void 0)
      ) {
        if (Array.isArray(this.material)) {
          let t = [];
          for (let n = 0, r = this.material.length; n < r; n++)
            t.push(i(e.materials, this.material[n]));
          r.material = t;
        } else r.material = i(e.materials, this.material);
      }
      if (this.children.length > 0) {
        r.children = [];
        for (let t = 0; t < this.children.length; t++)
          r.children.push(this.children[t].toJSON(e).object);
      }
      if (this.animations.length > 0) {
        r.animations = [];
        for (let t = 0; t < this.animations.length; t++) {
          let n = this.animations[t];
          r.animations.push(i(e.animations, n));
        }
      }
      if (t) {
        let t = a(e.geometries),
          r = a(e.materials),
          i = a(e.textures),
          o = a(e.images),
          s = a(e.shapes),
          c = a(e.skeletons),
          l = a(e.animations),
          u = a(e.nodes);
        (t.length > 0 && (n.geometries = t),
          r.length > 0 && (n.materials = r),
          i.length > 0 && (n.textures = i),
          o.length > 0 && (n.images = o),
          s.length > 0 && (n.shapes = s),
          c.length > 0 && (n.skeletons = c),
          l.length > 0 && (n.animations = l),
          u.length > 0 && (n.nodes = u));
      }
      return ((n.object = r), n);
      function a(e) {
        let t = [];
        for (let n in e) {
          let r = e[n];
          (delete r.metadata, t.push(r));
        }
        return t;
      }
    }
    clone(e) {
      return new this.constructor().copy(this, e);
    }
    copy(e, t = !0) {
      if (
        ((this.name = e.name),
        this.up.copy(e.up),
        this.position.copy(e.position),
        (this.rotation.order = e.rotation.order),
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        (this.pivot = e.pivot === null ? null : e.pivot.clone()),
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
        (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
        (this.layers.mask = e.layers.mask),
        (this.visible = e.visible),
        (this.castShadow = e.castShadow),
        (this.receiveShadow = e.receiveShadow),
        (this.frustumCulled = e.frustumCulled),
        (this.renderOrder = e.renderOrder),
        (this.static = e.static),
        (this.animations = e.animations.slice()),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        t === !0)
      )
        for (let t = 0; t < e.children.length; t++) {
          let n = e.children[t];
          this.add(n.clone());
        }
      return this;
    }
    dispose() {
      this.dispatchEvent({ type: `dispose` });
    }
  };
((jn.DEFAULT_UP = new W(0, 1, 0)),
  (jn.DEFAULT_MATRIX_AUTO_UPDATE = !0),
  (jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0));
var Mn = class extends jn {
    constructor() {
      (super(), (this.isGroup = !0), (this.type = `Group`));
    }
  },
  Nn = { type: `move` },
  Pn = class {
    constructor() {
      ((this._targetRay = null), (this._grip = null), (this._hand = null));
    }
    getHandSpace() {
      return (
        this._hand === null &&
          ((this._hand = new Mn()),
          (this._hand.matrixAutoUpdate = !1),
          (this._hand.visible = !1),
          (this._hand.joints = {}),
          (this._hand.inputState = { pinching: !1 })),
        this._hand
      );
    }
    getTargetRaySpace() {
      return (
        this._targetRay === null &&
          ((this._targetRay = new Mn()),
          (this._targetRay.matrixAutoUpdate = !1),
          (this._targetRay.visible = !1),
          (this._targetRay.hasLinearVelocity = !1),
          (this._targetRay.linearVelocity = new W()),
          (this._targetRay.hasAngularVelocity = !1),
          (this._targetRay.angularVelocity = new W())),
        this._targetRay
      );
    }
    getGripSpace() {
      return (
        this._grip === null &&
          ((this._grip = new Mn()),
          (this._grip.matrixAutoUpdate = !1),
          (this._grip.visible = !1),
          (this._grip.hasLinearVelocity = !1),
          (this._grip.linearVelocity = new W()),
          (this._grip.hasAngularVelocity = !1),
          (this._grip.angularVelocity = new W()),
          (this._grip.eventsEnabled = !1)),
        this._grip
      );
    }
    dispatchEvent(e) {
      return (
        this._targetRay !== null && this._targetRay.dispatchEvent(e),
        this._grip !== null && this._grip.dispatchEvent(e),
        this._hand !== null && this._hand.dispatchEvent(e),
        this
      );
    }
    connect(e) {
      if (e && e.hand) {
        let t = this._hand;
        if (t) for (let n of e.hand.values()) this._getHandJoint(t, n);
      }
      return (this.dispatchEvent({ type: `connected`, data: e }), this);
    }
    disconnect(e) {
      return (
        this.dispatchEvent({ type: `disconnected`, data: e }),
        this._targetRay !== null && (this._targetRay.visible = !1),
        this._grip !== null && (this._grip.visible = !1),
        this._hand !== null && (this._hand.visible = !1),
        this
      );
    }
    update(e, t, n) {
      let r = null,
        i = null,
        a = null,
        o = this._targetRay,
        s = this._grip,
        c = this._hand;
      if (e && t.session.visibilityState !== `visible-blurred`) {
        if (c && e.hand) {
          a = !0;
          for (let r of e.hand.values()) {
            let e = t.getJointPose(r, n),
              i = this._getHandJoint(c, r);
            (e !== null &&
              (i.matrix.fromArray(e.transform.matrix),
              i.matrix.decompose(i.position, i.rotation, i.scale),
              (i.matrixWorldNeedsUpdate = !0),
              (i.jointRadius = e.radius)),
              (i.visible = e !== null));
          }
          let r = c.joints[`index-finger-tip`],
            i = c.joints[`thumb-tip`],
            o = r.position.distanceTo(i.position);
          c.inputState.pinching && o > 0.025
            ? ((c.inputState.pinching = !1),
              this.dispatchEvent({
                type: `pinchend`,
                handedness: e.handedness,
                target: this,
              }))
            : !c.inputState.pinching &&
              o <= 0.015 &&
              ((c.inputState.pinching = !0),
              this.dispatchEvent({
                type: `pinchstart`,
                handedness: e.handedness,
                target: this,
              }));
        } else
          s !== null &&
            e.gripSpace &&
            ((i = t.getPose(e.gripSpace, n)),
            i !== null &&
              (s.matrix.fromArray(i.transform.matrix),
              s.matrix.decompose(s.position, s.rotation, s.scale),
              (s.matrixWorldNeedsUpdate = !0),
              i.linearVelocity
                ? ((s.hasLinearVelocity = !0),
                  s.linearVelocity.copy(i.linearVelocity))
                : (s.hasLinearVelocity = !1),
              i.angularVelocity
                ? ((s.hasAngularVelocity = !0),
                  s.angularVelocity.copy(i.angularVelocity))
                : (s.hasAngularVelocity = !1),
              s.eventsEnabled &&
                s.dispatchEvent({
                  type: `gripUpdated`,
                  data: e,
                  target: this,
                })));
        o !== null &&
          ((r = t.getPose(e.targetRaySpace, n)),
          r === null && i !== null && (r = i),
          r !== null &&
            (o.matrix.fromArray(r.transform.matrix),
            o.matrix.decompose(o.position, o.rotation, o.scale),
            (o.matrixWorldNeedsUpdate = !0),
            r.linearVelocity
              ? ((o.hasLinearVelocity = !0),
                o.linearVelocity.copy(r.linearVelocity))
              : (o.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((o.hasAngularVelocity = !0),
                o.angularVelocity.copy(r.angularVelocity))
              : (o.hasAngularVelocity = !1),
            this.dispatchEvent(Nn)));
      }
      return (
        o !== null && (o.visible = r !== null),
        s !== null && (s.visible = i !== null),
        c !== null && (c.visible = a !== null),
        this
      );
    }
    _getHandJoint(e, t) {
      if (e.joints[t.jointName] === void 0) {
        let n = new Mn();
        ((n.matrixAutoUpdate = !1),
          (n.visible = !1),
          (e.joints[t.jointName] = n),
          e.add(n));
      }
      return e.joints[t.jointName];
    }
  },
  Fn = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  In = { h: 0, s: 0, l: 0 },
  Ln = { h: 0, s: 0, l: 0 };
function Rn(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * 6 * (2 / 3 - n)
          : e
  );
}
var J = class {
    constructor(e, t, n) {
      return (
        (this.isColor = !0),
        (this.r = 1),
        (this.g = 1),
        (this.b = 1),
        this.set(e, t, n)
      );
    }
    set(e, t, n) {
      if (t === void 0 && n === void 0) {
        let t = e;
        t && t.isColor
          ? this.copy(t)
          : typeof t == `number`
            ? this.setHex(t)
            : typeof t == `string` && this.setStyle(t);
      } else this.setRGB(e, t, n);
      return this;
    }
    setScalar(e) {
      return ((this.r = e), (this.g = e), (this.b = e), this);
    }
    setHex(e, t = We) {
      return (
        (e = Math.floor(e)),
        (this.r = ((e >> 16) & 255) / 255),
        (this.g = ((e >> 8) & 255) / 255),
        (this.b = (e & 255) / 255),
        K.colorSpaceToWorking(this, t),
        this
      );
    }
    setRGB(e, t, n, r = K.workingColorSpace) {
      return (
        (this.r = e),
        (this.g = t),
        (this.b = n),
        K.colorSpaceToWorking(this, r),
        this
      );
    }
    setHSL(e, t, n, r = K.workingColorSpace) {
      if (((e = ht(e, 1)), (t = H(t, 0, 1)), (n = H(n, 0, 1)), t === 0))
        this.r = this.g = this.b = n;
      else {
        let r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
          i = 2 * n - r;
        ((this.r = Rn(i, r, e + 1 / 3)),
          (this.g = Rn(i, r, e)),
          (this.b = Rn(i, r, e - 1 / 3)));
      }
      return (K.colorSpaceToWorking(this, r), this);
    }
    setStyle(e, t = We) {
      function n(t) {
        t !== void 0 &&
          parseFloat(t) < 1 &&
          B(`Color: Alpha component of ` + e + ` will be ignored.`);
      }
      let r;
      if ((r = /^(\w+)\(([^\)]*)\)/.exec(e))) {
        let i,
          a = r[1],
          o = r[2];
        switch (a) {
          case `rgb`:
          case `rgba`:
            if (
              (i =
                /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  o,
                ))
            )
              return (
                n(i[4]),
                this.setRGB(
                  Math.min(255, parseInt(i[1], 10)) / 255,
                  Math.min(255, parseInt(i[2], 10)) / 255,
                  Math.min(255, parseInt(i[3], 10)) / 255,
                  t,
                )
              );
            if (
              (i =
                /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  o,
                ))
            )
              return (
                n(i[4]),
                this.setRGB(
                  Math.min(100, parseInt(i[1], 10)) / 100,
                  Math.min(100, parseInt(i[2], 10)) / 100,
                  Math.min(100, parseInt(i[3], 10)) / 100,
                  t,
                )
              );
            break;
          case `hsl`:
          case `hsla`:
            if (
              (i =
                /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  o,
                ))
            )
              return (
                n(i[4]),
                this.setHSL(
                  parseFloat(i[1]) / 360,
                  parseFloat(i[2]) / 100,
                  parseFloat(i[3]) / 100,
                  t,
                )
              );
            break;
          default:
            B(`Color: Unknown color model ` + e);
        }
      } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
        let n = r[1],
          i = n.length;
        if (i === 3)
          return this.setRGB(
            parseInt(n.charAt(0), 16) / 15,
            parseInt(n.charAt(1), 16) / 15,
            parseInt(n.charAt(2), 16) / 15,
            t,
          );
        if (i === 6) return this.setHex(parseInt(n, 16), t);
        B(`Color: Invalid hex color ` + e);
      } else if (e && e.length > 0) return this.setColorName(e, t);
      return this;
    }
    setColorName(e, t = We) {
      let n = Fn[e.toLowerCase()];
      return (
        n === void 0 ? B(`Color: Unknown color ` + e) : this.setHex(n, t),
        this
      );
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(e) {
      return ((this.r = e.r), (this.g = e.g), (this.b = e.b), this);
    }
    copySRGBToLinear(e) {
      return ((this.r = Ut(e.r)), (this.g = Ut(e.g)), (this.b = Ut(e.b)), this);
    }
    copyLinearToSRGB(e) {
      return ((this.r = Wt(e.r)), (this.g = Wt(e.g)), (this.b = Wt(e.b)), this);
    }
    convertSRGBToLinear() {
      return (this.copySRGBToLinear(this), this);
    }
    convertLinearToSRGB() {
      return (this.copyLinearToSRGB(this), this);
    }
    getHex(e = We) {
      return (
        K.workingToColorSpace(zn.copy(this), e),
        Math.round(H(zn.r * 255, 0, 255)) * 65536 +
          Math.round(H(zn.g * 255, 0, 255)) * 256 +
          Math.round(H(zn.b * 255, 0, 255))
      );
    }
    getHexString(e = We) {
      return (`000000` + this.getHex(e).toString(16)).slice(-6);
    }
    getHSL(e, t = K.workingColorSpace) {
      K.workingToColorSpace(zn.copy(this), t);
      let n = zn.r,
        r = zn.g,
        i = zn.b,
        a = Math.max(n, r, i),
        o = Math.min(n, r, i),
        s,
        c,
        l = (o + a) / 2;
      if (o === a) ((s = 0), (c = 0));
      else {
        let e = a - o;
        switch (((c = l <= 0.5 ? e / (a + o) : e / (2 - a - o)), a)) {
          case n:
            s = (r - i) / e + (r < i ? 6 : 0);
            break;
          case r:
            s = (i - n) / e + 2;
            break;
          case i:
            s = (n - r) / e + 4;
        }
        s /= 6;
      }
      return ((e.h = s), (e.s = c), (e.l = l), e);
    }
    getRGB(e, t = K.workingColorSpace) {
      return (
        K.workingToColorSpace(zn.copy(this), t),
        (e.r = zn.r),
        (e.g = zn.g),
        (e.b = zn.b),
        e
      );
    }
    getStyle(e = We) {
      K.workingToColorSpace(zn.copy(this), e);
      let t = zn.r,
        n = zn.g,
        r = zn.b;
      return e === `srgb`
        ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`
        : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
    }
    offsetHSL(e, t, n) {
      return (this.getHSL(In), this.setHSL(In.h + e, In.s + t, In.l + n));
    }
    add(e) {
      return ((this.r += e.r), (this.g += e.g), (this.b += e.b), this);
    }
    addColors(e, t) {
      return (
        (this.r = e.r + t.r),
        (this.g = e.g + t.g),
        (this.b = e.b + t.b),
        this
      );
    }
    addScalar(e) {
      return ((this.r += e), (this.g += e), (this.b += e), this);
    }
    sub(e) {
      return (
        (this.r = Math.max(0, this.r - e.r)),
        (this.g = Math.max(0, this.g - e.g)),
        (this.b = Math.max(0, this.b - e.b)),
        this
      );
    }
    multiply(e) {
      return ((this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this);
    }
    multiplyScalar(e) {
      return ((this.r *= e), (this.g *= e), (this.b *= e), this);
    }
    lerp(e, t) {
      return (
        (this.r += (e.r - this.r) * t),
        (this.g += (e.g - this.g) * t),
        (this.b += (e.b - this.b) * t),
        this
      );
    }
    lerpColors(e, t, n) {
      return (
        (this.r = e.r + (t.r - e.r) * n),
        (this.g = e.g + (t.g - e.g) * n),
        (this.b = e.b + (t.b - e.b) * n),
        this
      );
    }
    lerpHSL(e, t) {
      (this.getHSL(In), e.getHSL(Ln));
      let n = vt(In.h, Ln.h, t),
        r = vt(In.s, Ln.s, t),
        i = vt(In.l, Ln.l, t);
      return (this.setHSL(n, r, i), this);
    }
    setFromVector3(e) {
      return ((this.r = e.x), (this.g = e.y), (this.b = e.z), this);
    }
    applyMatrix3(e) {
      let t = this.r,
        n = this.g,
        r = this.b,
        i = e.elements;
      return (
        (this.r = i[0] * t + i[3] * n + i[6] * r),
        (this.g = i[1] * t + i[4] * n + i[7] * r),
        (this.b = i[2] * t + i[5] * n + i[8] * r),
        this
      );
    }
    equals(e) {
      return e.r === this.r && e.g === this.g && e.b === this.b;
    }
    fromArray(e, t = 0) {
      return ((this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this);
    }
    toArray(e = [], t = 0) {
      return ((e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e);
    }
    fromBufferAttribute(e, t) {
      return (
        (this.r = e.getX(t)),
        (this.g = e.getY(t)),
        (this.b = e.getZ(t)),
        this
      );
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      (yield this.r, yield this.g, yield this.b);
    }
  },
  zn = new J();
J.NAMES = Fn;
var Bn = class extends jn {
    constructor() {
      (super(),
        (this.isScene = !0),
        (this.type = `Scene`),
        (this.background = null),
        (this.environment = null),
        (this.fog = null),
        (this.backgroundBlurriness = 0),
        (this.backgroundIntensity = 1),
        (this.backgroundRotation = new mn()),
        (this.environmentIntensity = 1),
        (this.environmentRotation = new mn()),
        (this.overrideMaterial = null),
        typeof __THREE_DEVTOOLS__ < `u` &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent(`observe`, { detail: this }),
          ));
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        e.background !== null && (this.background = e.background.clone()),
        e.environment !== null && (this.environment = e.environment.clone()),
        e.fog !== null && (this.fog = e.fog.clone()),
        (this.backgroundBlurriness = e.backgroundBlurriness),
        (this.backgroundIntensity = e.backgroundIntensity),
        this.backgroundRotation.copy(e.backgroundRotation),
        (this.environmentIntensity = e.environmentIntensity),
        this.environmentRotation.copy(e.environmentRotation),
        e.overrideMaterial !== null &&
          (this.overrideMaterial = e.overrideMaterial.clone()),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        this
      );
    }
    toJSON(e) {
      let t = super.toJSON(e);
      return (
        this.fog !== null && (t.object.fog = this.fog.toJSON()),
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
        (t.object.backgroundIntensity = this.backgroundIntensity),
        (t.object.backgroundRotation = this.backgroundRotation.toArray()),
        (t.object.environmentIntensity = this.environmentIntensity),
        (t.object.environmentRotation = this.environmentRotation.toArray()),
        t
      );
    }
  },
  Vn = new W(),
  Hn = new W(),
  Un = new W(),
  Wn = new W(),
  Gn = new W(),
  Kn = new W(),
  qn = new W(),
  Jn = new W(),
  Yn = new W(),
  Xn = new W(),
  Zn = new $t(),
  Qn = new $t(),
  $n = new $t(),
  er = class e {
    constructor(e = new W(), t = new W(), n = new W()) {
      ((this.a = e), (this.b = t), (this.c = n));
    }
    static getNormal(e, t, n, r) {
      (r.subVectors(n, t), Vn.subVectors(e, t), r.cross(Vn));
      let i = r.lengthSq();
      return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
    }
    static getBarycoord(e, t, n, r, i) {
      (Vn.subVectors(r, t), Hn.subVectors(n, t), Un.subVectors(e, t));
      let a = Vn.dot(Vn),
        o = Vn.dot(Hn),
        s = Vn.dot(Un),
        c = Hn.dot(Hn),
        l = Hn.dot(Un),
        u = a * c - o * o;
      if (u === 0) return (i.set(0, 0, 0), null);
      let d = 1 / u,
        f = (c * s - o * l) * d,
        p = (a * l - o * s) * d;
      return i.set(1 - f - p, p, f);
    }
    static containsPoint(e, t, n, r) {
      return (
        this.getBarycoord(e, t, n, r, Wn) !== null &&
        Wn.x >= 0 &&
        Wn.y >= 0 &&
        Wn.x + Wn.y <= 1
      );
    }
    static getInterpolation(e, t, n, r, i, a, o, s) {
      return this.getBarycoord(e, t, n, r, Wn) === null
        ? ((s.x = 0),
          (s.y = 0),
          `z` in s && (s.z = 0),
          `w` in s && (s.w = 0),
          null)
        : (s.setScalar(0),
          s.addScaledVector(i, Wn.x),
          s.addScaledVector(a, Wn.y),
          s.addScaledVector(o, Wn.z),
          s);
    }
    static getInterpolatedAttribute(e, t, n, r, i, a) {
      return (
        Zn.setScalar(0),
        Qn.setScalar(0),
        $n.setScalar(0),
        Zn.fromBufferAttribute(e, t),
        Qn.fromBufferAttribute(e, n),
        $n.fromBufferAttribute(e, r),
        a.setScalar(0),
        a.addScaledVector(Zn, i.x),
        a.addScaledVector(Qn, i.y),
        a.addScaledVector($n, i.z),
        a
      );
    }
    static isFrontFacing(e, t, n, r) {
      return (
        Vn.subVectors(n, t),
        Hn.subVectors(e, t),
        Vn.cross(Hn).dot(r) < 0
      );
    }
    set(e, t, n) {
      return (this.a.copy(e), this.b.copy(t), this.c.copy(n), this);
    }
    setFromPointsAndIndices(e, t, n, r) {
      return (this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this);
    }
    setFromAttributeAndIndices(e, t, n, r) {
      return (
        this.a.fromBufferAttribute(e, t),
        this.b.fromBufferAttribute(e, n),
        this.c.fromBufferAttribute(e, r),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this);
    }
    getArea() {
      return (
        Vn.subVectors(this.c, this.b),
        Hn.subVectors(this.a, this.b),
        Vn.cross(Hn).length() * 0.5
      );
    }
    getMidpoint(e) {
      return e
        .addVectors(this.a, this.b)
        .add(this.c)
        .multiplyScalar(1 / 3);
    }
    getNormal(t) {
      return e.getNormal(this.a, this.b, this.c, t);
    }
    getPlane(e) {
      return e.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t, n) {
      return e.getBarycoord(t, this.a, this.b, this.c, n);
    }
    getInterpolation(t, n, r, i, a) {
      return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
    }
    containsPoint(t) {
      return e.containsPoint(t, this.a, this.b, this.c);
    }
    isFrontFacing(t) {
      return e.isFrontFacing(this.a, this.b, this.c, t);
    }
    intersectsBox(e) {
      return e.intersectsTriangle(this);
    }
    closestPointToPoint(e, t) {
      let n = this.a,
        r = this.b,
        i = this.c,
        a,
        o;
      (Gn.subVectors(r, n), Kn.subVectors(i, n), Jn.subVectors(e, n));
      let s = Gn.dot(Jn),
        c = Kn.dot(Jn);
      if (s <= 0 && c <= 0) return t.copy(n);
      Yn.subVectors(e, r);
      let l = Gn.dot(Yn),
        u = Kn.dot(Yn);
      if (l >= 0 && u <= l) return t.copy(r);
      let d = s * u - l * c;
      if (d <= 0 && s >= 0 && l <= 0)
        return ((a = s / (s - l)), t.copy(n).addScaledVector(Gn, a));
      Xn.subVectors(e, i);
      let f = Gn.dot(Xn),
        p = Kn.dot(Xn);
      if (p >= 0 && f <= p) return t.copy(i);
      let m = f * c - s * p;
      if (m <= 0 && c >= 0 && p <= 0)
        return ((o = c / (c - p)), t.copy(n).addScaledVector(Kn, o));
      let h = l * p - f * u;
      if (h <= 0 && u - l >= 0 && f - p >= 0)
        return (
          qn.subVectors(i, r),
          (o = (u - l) / (u - l + (f - p))),
          t.copy(r).addScaledVector(qn, o)
        );
      let g = 1 / (h + m + d);
      return (
        (a = m * g),
        (o = d * g),
        t.copy(n).addScaledVector(Gn, a).addScaledVector(Kn, o)
      );
    }
    equals(e) {
      return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
    }
  },
  tr = class {
    constructor(
      e = new W(1 / 0, 1 / 0, 1 / 0),
      t = new W(-1 / 0, -1 / 0, -1 / 0),
    ) {
      ((this.isBox3 = !0), (this.min = e), (this.max = t));
    }
    set(e, t) {
      return (this.min.copy(e), this.max.copy(t), this);
    }
    setFromArray(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t += 3)
        this.expandByPoint(rr.fromArray(e, t));
      return this;
    }
    setFromBufferAttribute(e) {
      this.makeEmpty();
      for (let t = 0, n = e.count; t < n; t++)
        this.expandByPoint(rr.fromBufferAttribute(e, t));
      return this;
    }
    setFromPoints(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
      return this;
    }
    setFromCenterAndSize(e, t) {
      let n = rr.copy(t).multiplyScalar(0.5);
      return (this.min.copy(e).sub(n), this.max.copy(e).add(n), this);
    }
    setFromObject(e, t = !1) {
      return (this.makeEmpty(), this.expandByObject(e, t));
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (this.min.copy(e.min), this.max.copy(e.max), this);
    }
    makeEmpty() {
      return (
        (this.min.x = this.min.y = this.min.z = 1 / 0),
        (this.max.x = this.max.y = this.max.z = -1 / 0),
        this
      );
    }
    isEmpty() {
      return (
        this.max.x < this.min.x ||
        this.max.y < this.min.y ||
        this.max.z < this.min.z
      );
    }
    getCenter(e) {
      return this.isEmpty()
        ? e.set(0, 0, 0)
        : e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e) {
      return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
    }
    expandByPoint(e) {
      return (this.min.min(e), this.max.max(e), this);
    }
    expandByVector(e) {
      return (this.min.sub(e), this.max.add(e), this);
    }
    expandByScalar(e) {
      return (this.min.addScalar(-e), this.max.addScalar(e), this);
    }
    expandByObject(e, t = !1) {
      e.updateWorldMatrix(!1, !1);
      let n = e.geometry;
      if (n !== void 0) {
        let r = n.getAttribute(`position`);
        if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
          for (let t = 0, n = r.count; t < n; t++)
            (e.isMesh === !0
              ? e.getVertexPosition(t, rr)
              : rr.fromBufferAttribute(r, t),
              rr.applyMatrix4(e.matrixWorld),
              this.expandByPoint(rr));
        else
          (e.boundingBox === void 0
            ? (n.boundingBox === null && n.computeBoundingBox(),
              ir.copy(n.boundingBox))
            : (e.boundingBox === null && e.computeBoundingBox(),
              ir.copy(e.boundingBox)),
            ir.applyMatrix4(e.matrixWorld),
            this.union(ir));
      }
      let r = e.children;
      for (let e = 0, n = r.length; e < n; e++) this.expandByObject(r[e], t);
      return this;
    }
    containsPoint(e) {
      return (
        e.x >= this.min.x &&
        e.x <= this.max.x &&
        e.y >= this.min.y &&
        e.y <= this.max.y &&
        e.z >= this.min.z &&
        e.z <= this.max.z
      );
    }
    containsBox(e) {
      return (
        this.min.x <= e.min.x &&
        e.max.x <= this.max.x &&
        this.min.y <= e.min.y &&
        e.max.y <= this.max.y &&
        this.min.z <= e.min.z &&
        e.max.z <= this.max.z
      );
    }
    getParameter(e, t) {
      return t.set(
        (e.x - this.min.x) / (this.max.x - this.min.x),
        (e.y - this.min.y) / (this.max.y - this.min.y),
        (e.z - this.min.z) / (this.max.z - this.min.z),
      );
    }
    intersectsBox(e) {
      return (
        e.max.x >= this.min.x &&
        e.min.x <= this.max.x &&
        e.max.y >= this.min.y &&
        e.min.y <= this.max.y &&
        e.max.z >= this.min.z &&
        e.min.z <= this.max.z
      );
    }
    intersectsSphere(e) {
      return (
        this.clampPoint(e.center, rr),
        rr.distanceToSquared(e.center) <= e.radius * e.radius
      );
    }
    intersectsPlane(e) {
      let t, n;
      return (
        e.normal.x > 0
          ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
          : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
        e.normal.y > 0
          ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
          : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
        e.normal.z > 0
          ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
          : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
        t <= -e.constant && n >= -e.constant
      );
    }
    intersectsTriangle(e) {
      if (this.isEmpty()) return !1;
      (this.getCenter(dr),
        fr.subVectors(this.max, dr),
        ar.subVectors(e.a, dr),
        or.subVectors(e.b, dr),
        sr.subVectors(e.c, dr),
        cr.subVectors(or, ar),
        lr.subVectors(sr, or),
        ur.subVectors(ar, sr));
      let t = [
        0,
        -cr.z,
        cr.y,
        0,
        -lr.z,
        lr.y,
        0,
        -ur.z,
        ur.y,
        cr.z,
        0,
        -cr.x,
        lr.z,
        0,
        -lr.x,
        ur.z,
        0,
        -ur.x,
        -cr.y,
        cr.x,
        0,
        -lr.y,
        lr.x,
        0,
        -ur.y,
        ur.x,
        0,
      ];
      return !hr(t, ar, or, sr, fr) ||
        ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !hr(t, ar, or, sr, fr))
        ? !1
        : (pr.crossVectors(cr, lr),
          (t = [pr.x, pr.y, pr.z]),
          hr(t, ar, or, sr, fr));
    }
    clampPoint(e, t) {
      return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
      return this.clampPoint(e, rr).distanceTo(e);
    }
    getBoundingSphere(e) {
      return (
        this.isEmpty()
          ? e.makeEmpty()
          : (this.getCenter(e.center),
            (e.radius = this.getSize(rr).length() * 0.5)),
        e
      );
    }
    intersect(e) {
      return (
        this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
      );
    }
    union(e) {
      return (this.min.min(e.min), this.max.max(e.max), this);
    }
    applyMatrix4(e) {
      return this.isEmpty()
        ? this
        : (nr[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
          nr[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
          nr[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
          nr[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
          nr[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
          nr[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
          nr[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
          nr[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
          this.setFromPoints(nr),
          this);
    }
    translate(e) {
      return (this.min.add(e), this.max.add(e), this);
    }
    equals(e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    }
    toJSON() {
      return { min: this.min.toArray(), max: this.max.toArray() };
    }
    fromJSON(e) {
      return (this.min.fromArray(e.min), this.max.fromArray(e.max), this);
    }
  },
  nr = [new W(), new W(), new W(), new W(), new W(), new W(), new W(), new W()],
  rr = new W(),
  ir = new tr(),
  ar = new W(),
  or = new W(),
  sr = new W(),
  cr = new W(),
  lr = new W(),
  ur = new W(),
  dr = new W(),
  fr = new W(),
  pr = new W(),
  mr = new W();
function hr(e, t, n, r, i) {
  for (let a = 0, o = e.length - 3; a <= o; a += 3) {
    mr.fromArray(e, a);
    let o = i.x * Math.abs(mr.x) + i.y * Math.abs(mr.y) + i.z * Math.abs(mr.z),
      s = t.dot(mr),
      c = n.dot(mr),
      l = r.dot(mr);
    if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1;
  }
  return !0;
}
var gr = new W(),
  _r = new U(),
  vr = 0,
  yr = class extends lt {
    constructor(e, t, n = !1) {
      if ((super(), Array.isArray(e)))
        throw TypeError(
          `THREE.BufferAttribute: array should be a Typed Array.`,
        );
      ((this.isBufferAttribute = !0),
        Object.defineProperty(this, "id", { value: vr++ }),
        (this.name = ``),
        (this.array = e),
        (this.itemSize = t),
        (this.count = e === void 0 ? 0 : e.length / t),
        (this.normalized = n),
        (this.usage = Ye),
        (this.updateRanges = []),
        (this.gpuType = S),
        (this.version = 0));
    }
    onUploadCallback() {}
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
    setUsage(e) {
      return ((this.usage = e), this);
    }
    addUpdateRange(e, t) {
      this.updateRanges.push({ start: e, count: t });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(e) {
      return (
        (this.name = e.name),
        (this.array = new e.array.constructor(e.array)),
        (this.itemSize = e.itemSize),
        (this.count = e.count),
        (this.normalized = e.normalized),
        (this.usage = e.usage),
        (this.gpuType = e.gpuType),
        this
      );
    }
    copyAt(e, t, n) {
      ((e *= this.itemSize), (n *= t.itemSize));
      for (let r = 0, i = this.itemSize; r < i; r++)
        this.array[e + r] = t.array[n + r];
      return this;
    }
    copyArray(e) {
      return (this.array.set(e), this);
    }
    applyMatrix3(e) {
      if (this.itemSize === 2)
        for (let t = 0, n = this.count; t < n; t++)
          (_r.fromBufferAttribute(this, t),
            _r.applyMatrix3(e),
            this.setXY(t, _r.x, _r.y));
      else if (this.itemSize === 3)
        for (let t = 0, n = this.count; t < n; t++)
          (gr.fromBufferAttribute(this, t),
            gr.applyMatrix3(e),
            this.setXYZ(t, gr.x, gr.y, gr.z));
      return this;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (gr.fromBufferAttribute(this, t),
          gr.applyMatrix4(e),
          this.setXYZ(t, gr.x, gr.y, gr.z));
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (gr.fromBufferAttribute(this, t),
          gr.applyNormalMatrix(e),
          this.setXYZ(t, gr.x, gr.y, gr.z));
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (gr.fromBufferAttribute(this, t),
          gr.transformDirection(e),
          this.setXYZ(t, gr.x, gr.y, gr.z));
      return this;
    }
    set(e, t = 0) {
      return (this.array.set(e, t), this);
    }
    getComponent(e, t) {
      let n = this.array[e * this.itemSize + t];
      return (this.normalized && (n = Nt(n, this.array)), n);
    }
    setComponent(e, t, n) {
      return (
        this.normalized && (n = Pt(n, this.array)),
        (this.array[e * this.itemSize + t] = n),
        this
      );
    }
    getX(e) {
      let t = this.array[e * this.itemSize];
      return (this.normalized && (t = Nt(t, this.array)), t);
    }
    setX(e, t) {
      return (
        this.normalized && (t = Pt(t, this.array)),
        (this.array[e * this.itemSize] = t),
        this
      );
    }
    getY(e) {
      let t = this.array[e * this.itemSize + 1];
      return (this.normalized && (t = Nt(t, this.array)), t);
    }
    setY(e, t) {
      return (
        this.normalized && (t = Pt(t, this.array)),
        (this.array[e * this.itemSize + 1] = t),
        this
      );
    }
    getZ(e) {
      let t = this.array[e * this.itemSize + 2];
      return (this.normalized && (t = Nt(t, this.array)), t);
    }
    setZ(e, t) {
      return (
        this.normalized && (t = Pt(t, this.array)),
        (this.array[e * this.itemSize + 2] = t),
        this
      );
    }
    getW(e) {
      let t = this.array[e * this.itemSize + 3];
      return (this.normalized && (t = Nt(t, this.array)), t);
    }
    setW(e, t) {
      return (
        this.normalized && (t = Pt(t, this.array)),
        (this.array[e * this.itemSize + 3] = t),
        this
      );
    }
    setXY(e, t, n) {
      return (
        (e *= this.itemSize),
        this.normalized && ((t = Pt(t, this.array)), (n = Pt(n, this.array))),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        this
      );
    }
    setXYZ(e, t, n, r) {
      return (
        (e *= this.itemSize),
        this.normalized &&
          ((t = Pt(t, this.array)),
          (n = Pt(n, this.array)),
          (r = Pt(r, this.array))),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        (this.array[e + 2] = r),
        this
      );
    }
    setXYZW(e, t, n, r, i) {
      return (
        (e *= this.itemSize),
        this.normalized &&
          ((t = Pt(t, this.array)),
          (n = Pt(n, this.array)),
          (r = Pt(r, this.array)),
          (i = Pt(i, this.array))),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        (this.array[e + 2] = r),
        (this.array[e + 3] = i),
        this
      );
    }
    onUpload(e) {
      return ((this.onUploadCallback = e), this);
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      let e = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized,
      };
      return (
        (e.name = this.name),
        (e.usage = this.usage),
        (e.gpuType = this.gpuType),
        e
      );
    }
    dispose() {
      this.dispatchEvent({ type: `dispose` });
    }
  },
  br = class extends yr {
    constructor(e, t, n) {
      super(new Uint16Array(e), t, n);
    }
  },
  xr = class extends yr {
    constructor(e, t, n) {
      super(new Uint32Array(e), t, n);
    }
  },
  Sr = class extends yr {
    constructor(e, t, n) {
      super(new Float32Array(e), t, n);
    }
  },
  Cr = new tr(),
  wr = new W(),
  Tr = new W(),
  Er = class {
    constructor(e = new W(), t = -1) {
      ((this.isSphere = !0), (this.center = e), (this.radius = t));
    }
    set(e, t) {
      return (this.center.copy(e), (this.radius = t), this);
    }
    setFromPoints(e, t) {
      let n = this.center;
      t === void 0 ? Cr.setFromPoints(e).getCenter(n) : n.copy(t);
      let r = 0;
      for (let t = 0, i = e.length; t < i; t++)
        r = Math.max(r, n.distanceToSquared(e[t]));
      return ((this.radius = Math.sqrt(r)), this);
    }
    copy(e) {
      return (this.center.copy(e.center), (this.radius = e.radius), this);
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return (this.center.set(0, 0, 0), (this.radius = -1), this);
    }
    containsPoint(e) {
      return e.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(e) {
      return e.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(e) {
      let t = this.radius + e.radius;
      return e.center.distanceToSquared(this.center) <= t * t;
    }
    intersectsBox(e) {
      return e.intersectsSphere(this);
    }
    intersectsPlane(e) {
      return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(e, t) {
      let n = this.center.distanceToSquared(e);
      return (
        t.copy(e),
        n > this.radius * this.radius &&
          (t.sub(this.center).normalize(),
          t.multiplyScalar(this.radius).add(this.center)),
        t
      );
    }
    getBoundingBox(e) {
      return this.isEmpty()
        ? (e.makeEmpty(), e)
        : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
    }
    applyMatrix4(e) {
      return (
        this.center.applyMatrix4(e),
        (this.radius *= e.getMaxScaleOnAxis()),
        this
      );
    }
    translate(e) {
      return (this.center.add(e), this);
    }
    expandByPoint(e) {
      if (this.isEmpty()) return (this.center.copy(e), (this.radius = 0), this);
      wr.subVectors(e, this.center);
      let t = wr.lengthSq();
      if (t > this.radius * this.radius) {
        let e = Math.sqrt(t),
          n = (e - this.radius) * 0.5;
        (this.center.addScaledVector(wr, n / e), (this.radius += n));
      }
      return this;
    }
    union(e) {
      return e.isEmpty()
        ? this
        : this.isEmpty()
          ? (this.copy(e), this)
          : (this.center.equals(e.center) === !0
              ? (this.radius = Math.max(this.radius, e.radius))
              : (Tr.subVectors(e.center, this.center).setLength(e.radius),
                this.expandByPoint(wr.copy(e.center).add(Tr)),
                this.expandByPoint(wr.copy(e.center).sub(Tr))),
            this);
    }
    equals(e) {
      return e.center.equals(this.center) && e.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      return { radius: this.radius, center: this.center.toArray() };
    }
    fromJSON(e) {
      return ((this.radius = e.radius), this.center.fromArray(e.center), this);
    }
  },
  Dr = 0,
  Or = new q(),
  kr = new jn(),
  Ar = new W(),
  jr = new tr(),
  Mr = new tr(),
  Nr = new W(),
  Pr = class e extends lt {
    constructor() {
      (super(),
        (this.isBufferGeometry = !0),
        Object.defineProperty(this, "id", { value: Dr++ }),
        (this.uuid = mt()),
        (this.name = ``),
        (this.type = `BufferGeometry`),
        (this.index = null),
        (this.indirect = null),
        (this.indirectOffset = 0),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.morphTargetsRelative = !1),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.drawRange = { start: 0, count: 1 / 0 }),
        (this.userData = {}),
        (this._transformed = !1));
    }
    getIndex() {
      return this.index;
    }
    setIndex(e) {
      return (
        (this.index = Array.isArray(e) ? new ($e(e) ? xr : br)(e, 1) : e),
        this
      );
    }
    setIndirect(e, t = 0) {
      return ((this.indirect = e), (this.indirectOffset = t), this);
    }
    getIndirect() {
      return this.indirect;
    }
    getAttribute(e) {
      return this.attributes[e];
    }
    setAttribute(e, t) {
      return ((this.attributes[e] = t), this);
    }
    deleteAttribute(e) {
      return (delete this.attributes[e], this);
    }
    hasAttribute(e) {
      return this.attributes[e] !== void 0;
    }
    addGroup(e, t, n = 0) {
      this.groups.push({ start: e, count: t, materialIndex: n });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(e, t) {
      ((this.drawRange.start = e), (this.drawRange.count = t));
    }
    applyMatrix4(e) {
      let t = this.attributes.position;
      t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
      let n = this.attributes.normal;
      if (n !== void 0) {
        let t = new G().getNormalMatrix(e);
        (n.applyNormalMatrix(t), (n.needsUpdate = !0));
      }
      let r = this.attributes.tangent;
      return (
        r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        (this._transformed = !0),
        this
      );
    }
    applyQuaternion(e) {
      return (Or.makeRotationFromQuaternion(e), this.applyMatrix4(Or), this);
    }
    rotateX(e) {
      return (Or.makeRotationX(e), this.applyMatrix4(Or), this);
    }
    rotateY(e) {
      return (Or.makeRotationY(e), this.applyMatrix4(Or), this);
    }
    rotateZ(e) {
      return (Or.makeRotationZ(e), this.applyMatrix4(Or), this);
    }
    translate(e, t, n) {
      return (Or.makeTranslation(e, t, n), this.applyMatrix4(Or), this);
    }
    scale(e, t, n) {
      return (Or.makeScale(e, t, n), this.applyMatrix4(Or), this);
    }
    lookAt(e) {
      return (
        kr.lookAt(e),
        kr.updateMatrix(),
        this.applyMatrix4(kr.matrix),
        this
      );
    }
    center() {
      return (
        this.computeBoundingBox(),
        this.boundingBox.getCenter(Ar).negate(),
        this.translate(Ar.x, Ar.y, Ar.z),
        this
      );
    }
    setFromPoints(e) {
      let t = this.getAttribute(`position`);
      if (t === void 0) {
        let t = [];
        for (let n = 0, r = e.length; n < r; n++) {
          let r = e[n];
          t.push(r.x, r.y, r.z || 0);
        }
        this.setAttribute(`position`, new Sr(t, 3));
      } else {
        let n = Math.min(e.length, t.count);
        for (let r = 0; r < n; r++) {
          let n = e[r];
          t.setXYZ(r, n.x, n.y, n.z || 0);
        }
        (e.length > t.count &&
          B(
            `BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`,
          ),
          (t.needsUpdate = !0));
      }
      return this;
    }
    computeBoundingBox() {
      this.boundingBox === null && (this.boundingBox = new tr());
      let e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        (V(
          `BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,
          this,
        ),
          this.boundingBox.set(
            new W(-1 / 0, -1 / 0, -1 / 0),
            new W(1 / 0, 1 / 0, 1 / 0),
          ));
        return;
      }
      if (e !== void 0) {
        if ((this.boundingBox.setFromBufferAttribute(e), t))
          for (let e = 0, n = t.length; e < n; e++) {
            let n = t[e];
            (jr.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (Nr.addVectors(this.boundingBox.min, jr.min),
                  this.boundingBox.expandByPoint(Nr),
                  Nr.addVectors(this.boundingBox.max, jr.max),
                  this.boundingBox.expandByPoint(Nr))
                : (this.boundingBox.expandByPoint(jr.min),
                  this.boundingBox.expandByPoint(jr.max)));
          }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) ||
        isNaN(this.boundingBox.min.y) ||
        isNaN(this.boundingBox.min.z)) &&
        V(
          `BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,
          this,
        );
    }
    computeBoundingSphere() {
      this.boundingSphere === null && (this.boundingSphere = new Er());
      let e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        (V(
          `BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,
          this,
        ),
          this.boundingSphere.set(new W(), 1 / 0));
        return;
      }
      if (e) {
        let n = this.boundingSphere.center;
        if ((jr.setFromBufferAttribute(e), t))
          for (let e = 0, n = t.length; e < n; e++) {
            let n = t[e];
            (Mr.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (Nr.addVectors(jr.min, Mr.min),
                  jr.expandByPoint(Nr),
                  Nr.addVectors(jr.max, Mr.max),
                  jr.expandByPoint(Nr))
                : (jr.expandByPoint(Mr.min), jr.expandByPoint(Mr.max)));
          }
        jr.getCenter(n);
        let r = 0;
        for (let t = 0, i = e.count; t < i; t++)
          (Nr.fromBufferAttribute(e, t),
            (r = Math.max(r, n.distanceToSquared(Nr))));
        if (t)
          for (let i = 0, a = t.length; i < a; i++) {
            let a = t[i],
              o = this.morphTargetsRelative;
            for (let t = 0, i = a.count; t < i; t++)
              (Nr.fromBufferAttribute(a, t),
                o && (Ar.fromBufferAttribute(e, t), Nr.add(Ar)),
                (r = Math.max(r, n.distanceToSquared(Nr))));
          }
        ((this.boundingSphere.radius = Math.sqrt(r)),
          isNaN(this.boundingSphere.radius) &&
            V(
              `BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,
              this,
            ));
      }
    }
    computeTangents() {
      let e = this.index,
        t = this.attributes;
      if (
        e === null ||
        t.position === void 0 ||
        t.normal === void 0 ||
        t.uv === void 0
      ) {
        V(
          `BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`,
        );
        return;
      }
      let n = t.position,
        r = t.normal,
        i = t.uv,
        a = this.getAttribute(`tangent`);
      (a === void 0 || a.count !== n.count) &&
        ((a = new yr(new Float32Array(4 * n.count), 4)),
        this.setAttribute(`tangent`, a));
      let o = [],
        s = [];
      for (let e = 0; e < n.count; e++) ((o[e] = new W()), (s[e] = new W()));
      let c = new W(),
        l = new W(),
        u = new W(),
        d = new U(),
        f = new U(),
        p = new U(),
        m = new W(),
        h = new W();
      function g(e, t, r) {
        (c.fromBufferAttribute(n, e),
          l.fromBufferAttribute(n, t),
          u.fromBufferAttribute(n, r),
          d.fromBufferAttribute(i, e),
          f.fromBufferAttribute(i, t),
          p.fromBufferAttribute(i, r),
          l.sub(c),
          u.sub(c),
          f.sub(d),
          p.sub(d));
        let a = 1 / (f.x * p.y - p.x * f.y);
        isFinite(a) &&
          (m
            .copy(l)
            .multiplyScalar(p.y)
            .addScaledVector(u, -f.y)
            .multiplyScalar(a),
          h
            .copy(u)
            .multiplyScalar(f.x)
            .addScaledVector(l, -p.x)
            .multiplyScalar(a),
          o[e].add(m),
          o[t].add(m),
          o[r].add(m),
          s[e].add(h),
          s[t].add(h),
          s[r].add(h));
      }
      let _ = this.groups;
      _.length === 0 && (_ = [{ start: 0, count: e.count }]);
      for (let t = 0, n = _.length; t < n; ++t) {
        let n = _[t],
          r = n.start,
          i = n.count;
        for (let t = r, n = r + i; t < n; t += 3)
          g(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
      }
      let v = new W(),
        y = new W(),
        b = new W(),
        x = new W();
      function S(e) {
        (b.fromBufferAttribute(r, e), x.copy(b));
        let t = o[e];
        (v.copy(t),
          v.sub(b.multiplyScalar(b.dot(t))).normalize(),
          y.crossVectors(x, t));
        let n = y.dot(s[e]) < 0 ? -1 : 1;
        a.setXYZW(e, v.x, v.y, v.z, n);
      }
      for (let t = 0, n = _.length; t < n; ++t) {
        let n = _[t],
          r = n.start,
          i = n.count;
        for (let t = r, n = r + i; t < n; t += 3)
          (S(e.getX(t + 0)), S(e.getX(t + 1)), S(e.getX(t + 2)));
      }
      this._transformed = !0;
    }
    computeVertexNormals() {
      let e = this.index,
        t = this.getAttribute(`position`);
      if (t !== void 0) {
        let n = this.getAttribute(`normal`);
        if (n === void 0 || n.count !== t.count)
          ((n = new yr(new Float32Array(t.count * 3), 3)),
            this.setAttribute(`normal`, n));
        else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
        let r = new W(),
          i = new W(),
          a = new W(),
          o = new W(),
          s = new W(),
          c = new W(),
          l = new W(),
          u = new W();
        if (e)
          for (let d = 0, f = e.count; d < f; d += 3) {
            let f = e.getX(d + 0),
              p = e.getX(d + 1),
              m = e.getX(d + 2);
            (r.fromBufferAttribute(t, f),
              i.fromBufferAttribute(t, p),
              a.fromBufferAttribute(t, m),
              l.subVectors(a, i),
              u.subVectors(r, i),
              l.cross(u),
              o.fromBufferAttribute(n, f),
              s.fromBufferAttribute(n, p),
              c.fromBufferAttribute(n, m),
              o.add(l),
              s.add(l),
              c.add(l),
              n.setXYZ(f, o.x, o.y, o.z),
              n.setXYZ(p, s.x, s.y, s.z),
              n.setXYZ(m, c.x, c.y, c.z));
          }
        else
          for (let e = 0, o = t.count; e < o; e += 3)
            (r.fromBufferAttribute(t, e + 0),
              i.fromBufferAttribute(t, e + 1),
              a.fromBufferAttribute(t, e + 2),
              l.subVectors(a, i),
              u.subVectors(r, i),
              l.cross(u),
              n.setXYZ(e + 0, l.x, l.y, l.z),
              n.setXYZ(e + 1, l.x, l.y, l.z),
              n.setXYZ(e + 2, l.x, l.y, l.z));
        (this.normalizeNormals(), (n.needsUpdate = !0));
      }
    }
    normalizeNormals() {
      let e = this.attributes.normal;
      for (let t = 0, n = e.count; t < n; t++)
        (Nr.fromBufferAttribute(e, t),
          Nr.normalize(),
          e.setXYZ(t, Nr.x, Nr.y, Nr.z));
    }
    toNonIndexed() {
      function t(e, t) {
        let n = e.array,
          r = e.itemSize,
          i = e.normalized,
          a = new n.constructor(t.length * r),
          o = 0,
          s = 0;
        for (let i = 0, c = t.length; i < c; i++) {
          o = e.isInterleavedBufferAttribute
            ? t[i] * e.data.stride + e.offset
            : t[i] * r;
          for (let e = 0; e < r; e++) a[s++] = n[o++];
        }
        return new yr(a, r, i);
      }
      if (this.index === null)
        return (
          B(
            `BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`,
          ),
          this
        );
      let n = new e(),
        r = this.index.array,
        i = this.attributes;
      for (let e in i) {
        let a = i[e],
          o = t(a, r);
        n.setAttribute(e, o);
      }
      let a = this.morphAttributes;
      for (let e in a) {
        let i = [],
          o = a[e];
        for (let e = 0, n = o.length; e < n; e++) {
          let n = o[e],
            a = t(n, r);
          i.push(a);
        }
        n.morphAttributes[e] = i;
      }
      n.morphTargetsRelative = this.morphTargetsRelative;
      let o = this.groups;
      for (let e = 0, t = o.length; e < t; e++) {
        let t = o[e];
        n.addGroup(t.start, t.count, t.materialIndex);
      }
      return n;
    }
    toJSON() {
      let e = {
        metadata: {
          version: 4.7,
          type: `BufferGeometry`,
          generator: `BufferGeometry.toJSON`,
        },
      };
      if (
        ((e.uuid = this.uuid),
        (e.type =
          this.parameters !== void 0 && this._transformed === !0
            ? `BufferGeometry`
            : this.type),
        (e.name = this.name),
        Object.keys(this.userData).length > 0 && (e.userData = this.userData),
        this.parameters !== void 0 && this._transformed !== !0)
      ) {
        let t = this.parameters;
        for (let n in t) t[n] !== void 0 && (e[n] = t[n]);
        return e;
      }
      e.data = { attributes: {} };
      let t = this.index;
      t !== null &&
        (e.data.index = {
          type: t.array.constructor.name,
          array: Array.prototype.slice.call(t.array),
        });
      let n = this.attributes;
      for (let t in n) {
        let r = n[t];
        e.data.attributes[t] = r.toJSON(e.data);
      }
      let r = {},
        i = !1;
      for (let t in this.morphAttributes) {
        let n = this.morphAttributes[t],
          a = [];
        for (let t = 0, r = n.length; t < r; t++) {
          let r = n[t];
          a.push(r.toJSON(e.data));
        }
        a.length > 0 && ((r[t] = a), (i = !0));
      }
      i &&
        ((e.data.morphAttributes = r),
        (e.data.morphTargetsRelative = this.morphTargetsRelative));
      let a = this.groups;
      a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
      let o = this.boundingSphere;
      return (o !== null && (e.data.boundingSphere = o.toJSON()), e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      ((this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null));
      let t = {};
      this.name = e.name;
      let n = e.index;
      n !== null && this.setIndex(n.clone());
      let r = e.attributes;
      for (let e in r) {
        let n = r[e];
        this.setAttribute(e, n.clone(t));
      }
      let i = e.morphAttributes;
      for (let e in i) {
        let n = [],
          r = i[e];
        for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
        this.morphAttributes[e] = n;
      }
      this.morphTargetsRelative = e.morphTargetsRelative;
      let a = e.groups;
      for (let e = 0, t = a.length; e < t; e++) {
        let t = a[e];
        this.addGroup(t.start, t.count, t.materialIndex);
      }
      let o = e.boundingBox;
      o !== null && (this.boundingBox = o.clone());
      let s = e.boundingSphere;
      return (
        s !== null && (this.boundingSphere = s.clone()),
        (this.drawRange.start = e.drawRange.start),
        (this.drawRange.count = e.drawRange.count),
        (this.userData = e.userData),
        (this._transformed = e._transformed),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: `dispose` });
    }
  },
  Fr = class {
    constructor(e, t) {
      ((this.isInterleavedBuffer = !0),
        (this.array = e),
        (this.stride = t),
        (this.count = e === void 0 ? 0 : e.length / t),
        (this.usage = Ye),
        (this.updateRanges = []),
        (this.version = 0),
        (this.uuid = mt()));
    }
    onUploadCallback() {}
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
    setUsage(e) {
      return ((this.usage = e), this);
    }
    addUpdateRange(e, t) {
      this.updateRanges.push({ start: e, count: t });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(e) {
      return (
        (this.array = new e.array.constructor(e.array)),
        (this.count = e.count),
        (this.stride = e.stride),
        (this.usage = e.usage),
        this
      );
    }
    copyAt(e, t, n) {
      ((e *= this.stride), (n *= t.stride));
      for (let r = 0, i = this.stride; r < i; r++)
        this.array[e + r] = t.array[n + r];
      return this;
    }
    set(e, t = 0) {
      return (this.array.set(e, t), this);
    }
    clone(e) {
      (e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
        this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = mt()),
        e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
          (e.arrayBuffers[this.array.buffer._uuid] =
            this.array.slice(0).buffer));
      let t = new this.array.constructor(
          e.arrayBuffers[this.array.buffer._uuid],
        ),
        n = new this.constructor(t, this.stride);
      return (n.setUsage(this.usage), n);
    }
    onUpload(e) {
      return ((this.onUploadCallback = e), this);
    }
    toJSON(e) {
      (e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
        this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = mt()),
        e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
          (e.arrayBuffers[this.array.buffer._uuid] = Array.from(
            new Uint32Array(this.array.buffer),
          )));
      let t = {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      };
      return ((t.usage = this.usage), t);
    }
  },
  Ir = new W(),
  Lr = class e {
    constructor(e, t, n, r = !1) {
      ((this.isInterleavedBufferAttribute = !0),
        (this.name = ``),
        (this.data = e),
        (this.itemSize = t),
        (this.offset = n),
        (this.normalized = r));
    }
    get count() {
      return this.data.count;
    }
    get array() {
      return this.data.array;
    }
    set needsUpdate(e) {
      this.data.needsUpdate = e;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.data.count; t < n; t++)
        (Ir.fromBufferAttribute(this, t),
          Ir.applyMatrix4(e),
          this.setXYZ(t, Ir.x, Ir.y, Ir.z));
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (Ir.fromBufferAttribute(this, t),
          Ir.applyNormalMatrix(e),
          this.setXYZ(t, Ir.x, Ir.y, Ir.z));
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (Ir.fromBufferAttribute(this, t),
          Ir.transformDirection(e),
          this.setXYZ(t, Ir.x, Ir.y, Ir.z));
      return this;
    }
    getComponent(e, t) {
      let n = this.array[e * this.data.stride + this.offset + t];
      return (this.normalized && (n = Nt(n, this.array)), n);
    }
    setComponent(e, t, n) {
      return (
        this.normalized && (n = Pt(n, this.array)),
        (this.data.array[e * this.data.stride + this.offset + t] = n),
        this
      );
    }
    setX(e, t) {
      return (
        this.normalized && (t = Pt(t, this.array)),
        (this.data.array[e * this.data.stride + this.offset] = t),
        this
      );
    }
    setY(e, t) {
      return (
        this.normalized && (t = Pt(t, this.array)),
        (this.data.array[e * this.data.stride + this.offset + 1] = t),
        this
      );
    }
    setZ(e, t) {
      return (
        this.normalized && (t = Pt(t, this.array)),
        (this.data.array[e * this.data.stride + this.offset + 2] = t),
        this
      );
    }
    setW(e, t) {
      return (
        this.normalized && (t = Pt(t, this.array)),
        (this.data.array[e * this.data.stride + this.offset + 3] = t),
        this
      );
    }
    getX(e) {
      let t = this.data.array[e * this.data.stride + this.offset];
      return (this.normalized && (t = Nt(t, this.array)), t);
    }
    getY(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 1];
      return (this.normalized && (t = Nt(t, this.array)), t);
    }
    getZ(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 2];
      return (this.normalized && (t = Nt(t, this.array)), t);
    }
    getW(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 3];
      return (this.normalized && (t = Nt(t, this.array)), t);
    }
    setXY(e, t, n) {
      return (
        (e = e * this.data.stride + this.offset),
        this.normalized && ((t = Pt(t, this.array)), (n = Pt(n, this.array))),
        (this.data.array[e + 0] = t),
        (this.data.array[e + 1] = n),
        this
      );
    }
    setXYZ(e, t, n, r) {
      return (
        (e = e * this.data.stride + this.offset),
        this.normalized &&
          ((t = Pt(t, this.array)),
          (n = Pt(n, this.array)),
          (r = Pt(r, this.array))),
        (this.data.array[e + 0] = t),
        (this.data.array[e + 1] = n),
        (this.data.array[e + 2] = r),
        this
      );
    }
    setXYZW(e, t, n, r, i) {
      return (
        (e = e * this.data.stride + this.offset),
        this.normalized &&
          ((t = Pt(t, this.array)),
          (n = Pt(n, this.array)),
          (r = Pt(r, this.array)),
          (i = Pt(i, this.array))),
        (this.data.array[e + 0] = t),
        (this.data.array[e + 1] = n),
        (this.data.array[e + 2] = r),
        (this.data.array[e + 3] = i),
        this
      );
    }
    clone(t) {
      if (t === void 0) {
        it(
          `InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`,
        );
        let e = [];
        for (let t = 0; t < this.count; t++) {
          let n = t * this.data.stride + this.offset;
          for (let t = 0; t < this.itemSize; t++)
            e.push(this.data.array[n + t]);
        }
        return new yr(
          new this.array.constructor(e),
          this.itemSize,
          this.normalized,
        );
      }
      return (
        t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}),
        t.interleavedBuffers[this.data.uuid] === void 0 &&
          (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
        new e(
          t.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized,
        )
      );
    }
    toJSON(e) {
      if (e === void 0) {
        it(
          `InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`,
        );
        let e = [];
        for (let t = 0; t < this.count; t++) {
          let n = t * this.data.stride + this.offset;
          for (let t = 0; t < this.itemSize; t++)
            e.push(this.data.array[n + t]);
        }
        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: e,
          normalized: this.normalized,
        };
      }
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
    }
  },
  Rr = new W(),
  zr = new W(),
  Br = new G(),
  Vr = class {
    constructor(e = new W(1, 0, 0), t = 0) {
      ((this.isPlane = !0), (this.normal = e), (this.constant = t));
    }
    set(e, t) {
      return (this.normal.copy(e), (this.constant = t), this);
    }
    setComponents(e, t, n, r) {
      return (this.normal.set(e, t, n), (this.constant = r), this);
    }
    setFromNormalAndCoplanarPoint(e, t) {
      return (this.normal.copy(e), (this.constant = -t.dot(this.normal)), this);
    }
    setFromCoplanarPoints(e, t, n) {
      let r = Rr.subVectors(n, t).cross(zr.subVectors(e, t)).normalize();
      return (this.setFromNormalAndCoplanarPoint(r, e), this);
    }
    copy(e) {
      return (this.normal.copy(e.normal), (this.constant = e.constant), this);
    }
    normalize() {
      let e = 1 / this.normal.length();
      return (this.normal.multiplyScalar(e), (this.constant *= e), this);
    }
    negate() {
      return ((this.constant *= -1), this.normal.negate(), this);
    }
    distanceToPoint(e) {
      return this.normal.dot(e) + this.constant;
    }
    distanceToSphere(e) {
      return this.distanceToPoint(e.center) - e.radius;
    }
    projectPoint(e, t) {
      return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
    }
    intersectLine(e, t, n = !0) {
      let r = e.delta(Rr),
        i = this.normal.dot(r);
      if (i === 0)
        return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
      let a = -(e.start.dot(this.normal) + this.constant) / i;
      return n === !0 && (a < 0 || a > 1)
        ? null
        : t.copy(e.start).addScaledVector(r, a);
    }
    intersectsLine(e) {
      let t = this.distanceToPoint(e.start),
        n = this.distanceToPoint(e.end);
      return (t < 0 && n > 0) || (n < 0 && t > 0);
    }
    intersectsBox(e) {
      return e.intersectsPlane(this);
    }
    intersectsSphere(e) {
      return e.intersectsPlane(this);
    }
    coplanarPoint(e) {
      return e.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(e, t) {
      let n = t || Br.getNormalMatrix(e),
        r = this.coplanarPoint(Rr).applyMatrix4(e),
        i = this.normal.applyMatrix3(n).normalize();
      return ((this.constant = -r.dot(i)), this);
    }
    translate(e) {
      return ((this.constant -= e.dot(this.normal)), this);
    }
    equals(e) {
      return e.normal.equals(this.normal) && e.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      return { normal: this.normal.toArray(), constant: this.constant };
    }
    fromJSON(e) {
      return (
        this.normal.fromArray(e.normal),
        (this.constant = e.constant),
        this
      );
    }
  },
  Hr = 0,
  Ur = class extends lt {
    constructor() {
      (super(),
        (this.isMaterial = !0),
        Object.defineProperty(this, "id", { value: Hr++ }),
        (this.uuid = mt()),
        (this.name = ``),
        (this.type = `Material`),
        (this.blending = 1),
        (this.side = 0),
        (this.vertexColors = !1),
        (this.opacity = 1),
        (this.transparent = !1),
        (this.alphaHash = !1),
        (this.blendSrc = 204),
        (this.blendDst = 205),
        (this.blendEquation = 100),
        (this.blendSrcAlpha = null),
        (this.blendDstAlpha = null),
        (this.blendEquationAlpha = null),
        (this.blendColor = new J(0, 0, 0)),
        (this.blendAlpha = 0),
        (this.depthFunc = 3),
        (this.depthTest = !0),
        (this.depthWrite = !0),
        (this.stencilWriteMask = 255),
        (this.stencilFunc = 519),
        (this.stencilRef = 0),
        (this.stencilFuncMask = 255),
        (this.stencilFail = Je),
        (this.stencilZFail = Je),
        (this.stencilZPass = Je),
        (this.stencilWrite = !1),
        (this.clippingPlanes = null),
        (this.clipIntersection = !1),
        (this.clipShadows = !1),
        (this.shadowSide = null),
        (this.colorWrite = !0),
        (this.precision = null),
        (this.polygonOffset = !1),
        (this.polygonOffsetFactor = 0),
        (this.polygonOffsetUnits = 0),
        (this.dithering = !1),
        (this.alphaToCoverage = !1),
        (this.premultipliedAlpha = !1),
        (this.forceSinglePass = !1),
        (this.allowOverride = !0),
        (this.visible = !0),
        (this.toneMapped = !0),
        (this.userData = {}),
        (this.version = 0),
        (this._alphaTest = 0));
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(e) {
      (this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e));
    }
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(e) {
      if (e !== void 0)
        for (let t in e) {
          let n = e[t];
          if (n === void 0) {
            B(`Material: parameter '${t}' has value of undefined.`);
            continue;
          }
          let r = this[t];
          if (r === void 0) {
            B(`Material: '${t}' is not a property of THREE.${this.type}.`);
            continue;
          }
          r && r.isColor
            ? r.set(n)
            : (r && r.isVector2 && n && n.isVector2) ||
                (r && r.isEuler && n && n.isEuler) ||
                (r && r.isVector3 && n && n.isVector3)
              ? r.copy(n)
              : (this[t] = n);
        }
    }
    toJSON(e) {
      let t = e === void 0 || typeof e == `string`;
      t && (e = { textures: {}, images: {} });
      let n = {
        metadata: {
          version: 4.7,
          type: `Material`,
          generator: `Material.toJSON`,
        },
      };
      ((n.uuid = this.uuid),
        (n.type = this.type),
        (n.blending = this.blending),
        (n.side = this.side),
        (n.shadowSide = this.shadowSide),
        (n.vertexColors = this.vertexColors),
        (n.opacity = this.opacity),
        (n.transparent = this.transparent),
        (n.blendSrc = this.blendSrc),
        (n.blendDst = this.blendDst),
        (n.blendEquation = this.blendEquation),
        (n.blendSrcAlpha = this.blendSrcAlpha),
        (n.blendDstAlpha = this.blendDstAlpha),
        (n.blendEquationAlpha = this.blendEquationAlpha),
        (n.blendColor = this.blendColor.getHex()),
        (n.blendAlpha = this.blendAlpha),
        (n.depthFunc = this.depthFunc),
        (n.depthTest = this.depthTest),
        (n.depthWrite = this.depthWrite),
        (n.colorWrite = this.colorWrite),
        (n.clipIntersection = this.clipIntersection),
        (n.clipShadows = this.clipShadows),
        (n.stencilWriteMask = this.stencilWriteMask),
        (n.stencilFunc = this.stencilFunc),
        (n.stencilRef = this.stencilRef),
        (n.stencilFuncMask = this.stencilFuncMask),
        (n.stencilFail = this.stencilFail),
        (n.stencilZFail = this.stencilZFail),
        (n.stencilZPass = this.stencilZPass),
        (n.stencilWrite = this.stencilWrite),
        (n.polygonOffset = this.polygonOffset),
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
        (n.dithering = this.dithering),
        (n.alphaTest = this.alphaTest),
        (n.alphaHash = this.alphaHash),
        (n.alphaToCoverage = this.alphaToCoverage),
        (n.premultipliedAlpha = this.premultipliedAlpha),
        (n.forceSinglePass = this.forceSinglePass),
        (n.allowOverride = this.allowOverride),
        (n.visible = this.visible),
        (n.toneMapped = this.toneMapped),
        (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        this.roughness !== void 0 && (n.roughness = this.roughness),
        this.metalness !== void 0 && (n.metalness = this.metalness),
        this.sheen !== void 0 && (n.sheen = this.sheen),
        this.sheenColor &&
          this.sheenColor.isColor &&
          (n.sheenColor = this.sheenColor.getHex()),
        this.sheenRoughness !== void 0 &&
          (n.sheenRoughness = this.sheenRoughness),
        this.emissive &&
          this.emissive.isColor &&
          (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity !== void 0 &&
          (n.emissiveIntensity = this.emissiveIntensity),
        this.specular &&
          this.specular.isColor &&
          (n.specular = this.specular.getHex()),
        this.specularIntensity !== void 0 &&
          (n.specularIntensity = this.specularIntensity),
        this.specularColor &&
          this.specularColor.isColor &&
          (n.specularColor = this.specularColor.getHex()),
        this.shininess !== void 0 && (n.shininess = this.shininess),
        this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
        this.clearcoatRoughness !== void 0 &&
          (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap &&
          this.clearcoatMap.isTexture &&
          (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
        this.clearcoatRoughnessMap &&
          this.clearcoatRoughnessMap.isTexture &&
          (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
        this.clearcoatNormalMap &&
          this.clearcoatNormalMap.isTexture &&
          ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
          (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
        this.sheenColorMap &&
          this.sheenColorMap.isTexture &&
          (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid),
        this.sheenRoughnessMap &&
          this.sheenRoughnessMap.isTexture &&
          (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid),
        this.dispersion !== void 0 && (n.dispersion = this.dispersion),
        this.retroreflectivity !== void 0 &&
          (n.retroreflectivity = this.retroreflectivity),
        this.iridescence !== void 0 && (n.iridescence = this.iridescence),
        this.iridescenceIOR !== void 0 &&
          (n.iridescenceIOR = this.iridescenceIOR),
        this.iridescenceThicknessRange !== void 0 &&
          (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap &&
          this.iridescenceMap.isTexture &&
          (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
        this.iridescenceThicknessMap &&
          this.iridescenceThicknessMap.isTexture &&
          (n.iridescenceThicknessMap =
            this.iridescenceThicknessMap.toJSON(e).uuid),
        this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
        this.anisotropyRotation !== void 0 &&
          (n.anisotropyRotation = this.anisotropyRotation),
        this.anisotropyMap &&
          this.anisotropyMap.isTexture &&
          (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
        this.matcap &&
          this.matcap.isTexture &&
          (n.matcap = this.matcap.toJSON(e).uuid),
        this.alphaMap &&
          this.alphaMap.isTexture &&
          (n.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap &&
          this.lightMap.isTexture &&
          ((n.lightMap = this.lightMap.toJSON(e).uuid),
          (n.lightMapIntensity = this.lightMapIntensity)),
        this.aoMap &&
          this.aoMap.isTexture &&
          ((n.aoMap = this.aoMap.toJSON(e).uuid),
          (n.aoMapIntensity = this.aoMapIntensity)),
        this.bumpMap &&
          this.bumpMap.isTexture &&
          ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
          (n.bumpScale = this.bumpScale)),
        this.normalMap &&
          this.normalMap.isTexture &&
          ((n.normalMap = this.normalMap.toJSON(e).uuid),
          (n.normalMapType = this.normalMapType),
          (n.normalScale = this.normalScale.toArray())),
        this.displacementMap &&
          this.displacementMap.isTexture &&
          ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
          (n.displacementScale = this.displacementScale),
          (n.displacementBias = this.displacementBias)),
        this.roughnessMap &&
          this.roughnessMap.isTexture &&
          (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
        this.metalnessMap &&
          this.metalnessMap.isTexture &&
          (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
        this.emissiveMap &&
          this.emissiveMap.isTexture &&
          (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
        this.specularMap &&
          this.specularMap.isTexture &&
          (n.specularMap = this.specularMap.toJSON(e).uuid),
        this.specularIntensityMap &&
          this.specularIntensityMap.isTexture &&
          (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
        this.specularColorMap &&
          this.specularColorMap.isTexture &&
          (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
        this.envMap &&
          this.envMap.isTexture &&
          ((n.envMap = this.envMap.toJSON(e).uuid),
          this.combine !== void 0 && (n.combine = this.combine)),
        this.envMapRotation !== void 0 &&
          (n.envMapRotation = this.envMapRotation.toArray()),
        this.envMapIntensity !== void 0 &&
          (n.envMapIntensity = this.envMapIntensity),
        this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
        this.refractionRatio !== void 0 &&
          (n.refractionRatio = this.refractionRatio),
        this.gradientMap &&
          this.gradientMap.isTexture &&
          (n.gradientMap = this.gradientMap.toJSON(e).uuid),
        this.transmission !== void 0 && (n.transmission = this.transmission),
        this.transmissionMap &&
          this.transmissionMap.isTexture &&
          (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
        this.thickness !== void 0 && (n.thickness = this.thickness),
        this.thicknessMap &&
          this.thicknessMap.isTexture &&
          (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
        this.attenuationDistance !== void 0 &&
          (n.attenuationDistance = this.attenuationDistance),
        this.attenuationColor !== void 0 &&
          (n.attenuationColor = this.attenuationColor.getHex()),
        this.size !== void 0 && (n.size = this.size),
        this.sizeAttenuation !== void 0 &&
          (n.sizeAttenuation = this.sizeAttenuation),
        Array.isArray(this.clippingPlanes) &&
          this.clippingPlanes.length > 0 &&
          (n.clippingPlanes = this.clippingPlanes.map((e) => e.toJSON())),
        this.rotation !== void 0 && (n.rotation = this.rotation),
        this.depthPacking !== void 0 && (n.depthPacking = this.depthPacking),
        this.linewidth !== void 0 && (n.linewidth = this.linewidth),
        this.linecap !== void 0 && (n.linecap = this.linecap),
        this.linejoin !== void 0 && (n.linejoin = this.linejoin),
        this.dashSize !== void 0 && (n.dashSize = this.dashSize),
        this.gapSize !== void 0 && (n.gapSize = this.gapSize),
        this.scale !== void 0 && (n.scale = this.scale),
        this.wireframe !== void 0 && (n.wireframe = this.wireframe),
        this.wireframeLinewidth !== void 0 &&
          (n.wireframeLinewidth = this.wireframeLinewidth),
        this.wireframeLinecap !== void 0 &&
          (n.wireframeLinecap = this.wireframeLinecap),
        this.wireframeLinejoin !== void 0 &&
          (n.wireframeLinejoin = this.wireframeLinejoin),
        this.flatShading !== void 0 && (n.flatShading = this.flatShading),
        this.fog !== void 0 && (n.fog = this.fog),
        Object.keys(this.userData).length > 0 && (n.userData = this.userData));
      function r(e) {
        let t = [];
        for (let n in e) {
          let r = e[n];
          (delete r.metadata, t.push(r));
        }
        return t;
      }
      if (t) {
        let t = r(e.textures),
          i = r(e.images);
        (t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i));
      }
      return n;
    }
    fromJSON(e, t) {
      if (
        (e.uuid !== void 0 && (this.uuid = e.uuid),
        e.name !== void 0 && (this.name = e.name),
        e.color !== void 0 &&
          this.color !== void 0 &&
          this.color.setHex(e.color),
        e.roughness !== void 0 && (this.roughness = e.roughness),
        e.metalness !== void 0 && (this.metalness = e.metalness),
        e.sheen !== void 0 && (this.sheen = e.sheen),
        e.sheenColor !== void 0 &&
          (this.sheenColor = new J().setHex(e.sheenColor)),
        e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness),
        e.emissive !== void 0 &&
          this.emissive !== void 0 &&
          this.emissive.setHex(e.emissive),
        e.specular !== void 0 &&
          this.specular !== void 0 &&
          this.specular.setHex(e.specular),
        e.specularIntensity !== void 0 &&
          (this.specularIntensity = e.specularIntensity),
        e.specularColor !== void 0 &&
          this.specularColor !== void 0 &&
          this.specularColor.setHex(e.specularColor),
        e.shininess !== void 0 && (this.shininess = e.shininess),
        e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat),
        e.clearcoatRoughness !== void 0 &&
          (this.clearcoatRoughness = e.clearcoatRoughness),
        e.dispersion !== void 0 && (this.dispersion = e.dispersion),
        e.retroreflectivity !== void 0 &&
          (this.retroreflectivity = e.retroreflectivity),
        e.iridescence !== void 0 && (this.iridescence = e.iridescence),
        e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR),
        e.iridescenceThicknessRange !== void 0 &&
          (this.iridescenceThicknessRange = e.iridescenceThicknessRange),
        e.transmission !== void 0 && (this.transmission = e.transmission),
        e.thickness !== void 0 && (this.thickness = e.thickness),
        e.attenuationDistance !== void 0 &&
          (this.attenuationDistance = e.attenuationDistance),
        e.attenuationColor !== void 0 &&
          this.attenuationColor !== void 0 &&
          this.attenuationColor.setHex(e.attenuationColor),
        e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy),
        e.anisotropyRotation !== void 0 &&
          (this.anisotropyRotation = e.anisotropyRotation),
        e.fog !== void 0 && (this.fog = e.fog),
        e.flatShading !== void 0 && (this.flatShading = e.flatShading),
        e.blending !== void 0 && (this.blending = e.blending),
        e.combine !== void 0 && (this.combine = e.combine),
        e.side !== void 0 && (this.side = e.side),
        e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide),
        e.opacity !== void 0 && (this.opacity = e.opacity),
        e.transparent !== void 0 && (this.transparent = e.transparent),
        e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest),
        e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash),
        e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc),
        e.depthTest !== void 0 && (this.depthTest = e.depthTest),
        e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite),
        e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite),
        e.clippingPlanes !== void 0 &&
          (this.clippingPlanes = e.clippingPlanes.map((e) =>
            new Vr().fromJSON(e),
          )),
        e.clipIntersection !== void 0 &&
          (this.clipIntersection = e.clipIntersection),
        e.clipShadows !== void 0 && (this.clipShadows = e.clipShadows),
        e.depthPacking !== void 0 && (this.depthPacking = e.depthPacking),
        e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc),
        e.blendDst !== void 0 && (this.blendDst = e.blendDst),
        e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation),
        e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha),
        e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha),
        e.blendEquationAlpha !== void 0 &&
          (this.blendEquationAlpha = e.blendEquationAlpha),
        e.blendColor !== void 0 &&
          this.blendColor !== void 0 &&
          this.blendColor.setHex(e.blendColor),
        e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha),
        e.stencilWriteMask !== void 0 &&
          (this.stencilWriteMask = e.stencilWriteMask),
        e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc),
        e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef),
        e.stencilFuncMask !== void 0 &&
          (this.stencilFuncMask = e.stencilFuncMask),
        e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail),
        e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail),
        e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass),
        e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite),
        e.wireframe !== void 0 && (this.wireframe = e.wireframe),
        e.wireframeLinewidth !== void 0 &&
          (this.wireframeLinewidth = e.wireframeLinewidth),
        e.wireframeLinecap !== void 0 &&
          (this.wireframeLinecap = e.wireframeLinecap),
        e.wireframeLinejoin !== void 0 &&
          (this.wireframeLinejoin = e.wireframeLinejoin),
        e.rotation !== void 0 && (this.rotation = e.rotation),
        e.linewidth !== void 0 && (this.linewidth = e.linewidth),
        e.linecap !== void 0 && (this.linecap = e.linecap),
        e.linejoin !== void 0 && (this.linejoin = e.linejoin),
        e.dashSize !== void 0 && (this.dashSize = e.dashSize),
        e.gapSize !== void 0 && (this.gapSize = e.gapSize),
        e.scale !== void 0 && (this.scale = e.scale),
        e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset),
        e.polygonOffsetFactor !== void 0 &&
          (this.polygonOffsetFactor = e.polygonOffsetFactor),
        e.polygonOffsetUnits !== void 0 &&
          (this.polygonOffsetUnits = e.polygonOffsetUnits),
        e.dithering !== void 0 && (this.dithering = e.dithering),
        e.alphaToCoverage !== void 0 &&
          (this.alphaToCoverage = e.alphaToCoverage),
        e.premultipliedAlpha !== void 0 &&
          (this.premultipliedAlpha = e.premultipliedAlpha),
        e.forceSinglePass !== void 0 &&
          (this.forceSinglePass = e.forceSinglePass),
        e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride),
        e.visible !== void 0 && (this.visible = e.visible),
        e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped),
        e.userData !== void 0 && (this.userData = e.userData),
        e.vertexColors !== void 0 &&
          (this.vertexColors =
            typeof e.vertexColors == `number`
              ? e.vertexColors > 0
              : e.vertexColors),
        e.size !== void 0 && (this.size = e.size),
        e.sizeAttenuation !== void 0 &&
          (this.sizeAttenuation = e.sizeAttenuation),
        e.map !== void 0 && (this.map = t[e.map] || null),
        e.matcap !== void 0 && (this.matcap = t[e.matcap] || null),
        e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null),
        e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null),
        e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale),
        e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null),
        e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType),
        e.normalScale !== void 0)
      ) {
        let t = e.normalScale;
        (Array.isArray(t) === !1 && (t = [t, t]),
          (this.normalScale = new U().fromArray(t)));
      }
      return (
        e.displacementMap !== void 0 &&
          (this.displacementMap = t[e.displacementMap] || null),
        e.displacementScale !== void 0 &&
          (this.displacementScale = e.displacementScale),
        e.displacementBias !== void 0 &&
          (this.displacementBias = e.displacementBias),
        e.roughnessMap !== void 0 &&
          (this.roughnessMap = t[e.roughnessMap] || null),
        e.metalnessMap !== void 0 &&
          (this.metalnessMap = t[e.metalnessMap] || null),
        e.emissiveMap !== void 0 &&
          (this.emissiveMap = t[e.emissiveMap] || null),
        e.emissiveIntensity !== void 0 &&
          (this.emissiveIntensity = e.emissiveIntensity),
        e.specularMap !== void 0 &&
          (this.specularMap = t[e.specularMap] || null),
        e.specularIntensityMap !== void 0 &&
          (this.specularIntensityMap = t[e.specularIntensityMap] || null),
        e.specularColorMap !== void 0 &&
          (this.specularColorMap = t[e.specularColorMap] || null),
        e.envMap !== void 0 && (this.envMap = t[e.envMap] || null),
        e.envMapRotation !== void 0 &&
          this.envMapRotation.fromArray(e.envMapRotation),
        e.envMapIntensity !== void 0 &&
          (this.envMapIntensity = e.envMapIntensity),
        e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity),
        e.refractionRatio !== void 0 &&
          (this.refractionRatio = e.refractionRatio),
        e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null),
        e.lightMapIntensity !== void 0 &&
          (this.lightMapIntensity = e.lightMapIntensity),
        e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null),
        e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity),
        e.gradientMap !== void 0 &&
          (this.gradientMap = t[e.gradientMap] || null),
        e.clearcoatMap !== void 0 &&
          (this.clearcoatMap = t[e.clearcoatMap] || null),
        e.clearcoatRoughnessMap !== void 0 &&
          (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null),
        e.clearcoatNormalMap !== void 0 &&
          (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null),
        e.clearcoatNormalScale !== void 0 &&
          (this.clearcoatNormalScale = new U().fromArray(
            e.clearcoatNormalScale,
          )),
        e.iridescenceMap !== void 0 &&
          (this.iridescenceMap = t[e.iridescenceMap] || null),
        e.iridescenceThicknessMap !== void 0 &&
          (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null),
        e.transmissionMap !== void 0 &&
          (this.transmissionMap = t[e.transmissionMap] || null),
        e.thicknessMap !== void 0 &&
          (this.thicknessMap = t[e.thicknessMap] || null),
        e.anisotropyMap !== void 0 &&
          (this.anisotropyMap = t[e.anisotropyMap] || null),
        e.sheenColorMap !== void 0 &&
          (this.sheenColorMap = t[e.sheenColorMap] || null),
        e.sheenRoughnessMap !== void 0 &&
          (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      ((this.name = e.name),
        (this.blending = e.blending),
        (this.side = e.side),
        (this.vertexColors = e.vertexColors),
        (this.opacity = e.opacity),
        (this.transparent = e.transparent),
        (this.blendSrc = e.blendSrc),
        (this.blendDst = e.blendDst),
        (this.blendEquation = e.blendEquation),
        (this.blendSrcAlpha = e.blendSrcAlpha),
        (this.blendDstAlpha = e.blendDstAlpha),
        (this.blendEquationAlpha = e.blendEquationAlpha),
        this.blendColor.copy(e.blendColor),
        (this.blendAlpha = e.blendAlpha),
        (this.depthFunc = e.depthFunc),
        (this.depthTest = e.depthTest),
        (this.depthWrite = e.depthWrite),
        (this.stencilWriteMask = e.stencilWriteMask),
        (this.stencilFunc = e.stencilFunc),
        (this.stencilRef = e.stencilRef),
        (this.stencilFuncMask = e.stencilFuncMask),
        (this.stencilFail = e.stencilFail),
        (this.stencilZFail = e.stencilZFail),
        (this.stencilZPass = e.stencilZPass),
        (this.stencilWrite = e.stencilWrite));
      let t = e.clippingPlanes,
        n = null;
      if (t !== null) {
        let e = t.length;
        n = Array(e);
        for (let r = 0; r !== e; ++r) n[r] = t[r].clone();
      }
      return (
        (this.clippingPlanes = n),
        (this.clipIntersection = e.clipIntersection),
        (this.clipShadows = e.clipShadows),
        (this.shadowSide = e.shadowSide),
        (this.colorWrite = e.colorWrite),
        (this.precision = e.precision),
        (this.polygonOffset = e.polygonOffset),
        (this.polygonOffsetFactor = e.polygonOffsetFactor),
        (this.polygonOffsetUnits = e.polygonOffsetUnits),
        (this.dithering = e.dithering),
        (this.alphaTest = e.alphaTest),
        (this.alphaHash = e.alphaHash),
        (this.alphaToCoverage = e.alphaToCoverage),
        (this.premultipliedAlpha = e.premultipliedAlpha),
        (this.forceSinglePass = e.forceSinglePass),
        (this.allowOverride = e.allowOverride),
        (this.visible = e.visible),
        (this.toneMapped = e.toneMapped),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: `dispose` });
    }
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
  },
  Wr = new W(),
  Gr = new W(),
  Kr = new W(),
  qr = new W(),
  Jr = class {
    constructor(e = new W(), t = new W(0, 0, -1)) {
      ((this.origin = e), (this.direction = t));
    }
    set(e, t) {
      return (this.origin.copy(e), this.direction.copy(t), this);
    }
    copy(e) {
      return (
        this.origin.copy(e.origin),
        this.direction.copy(e.direction),
        this
      );
    }
    at(e, t) {
      return t.copy(this.origin).addScaledVector(this.direction, e);
    }
    lookAt(e) {
      return (this.direction.copy(e).sub(this.origin).normalize(), this);
    }
    recast(e) {
      return (this.origin.copy(this.at(e, Wr)), this);
    }
    closestPointToPoint(e, t) {
      t.subVectors(e, this.origin);
      let n = t.dot(this.direction);
      return n < 0
        ? t.copy(this.origin)
        : t.copy(this.origin).addScaledVector(this.direction, n);
    }
    distanceToPoint(e) {
      return Math.sqrt(this.distanceSqToPoint(e));
    }
    distanceSqToPoint(e) {
      let t = Wr.subVectors(e, this.origin).dot(this.direction);
      return t < 0
        ? this.origin.distanceToSquared(e)
        : (Wr.copy(this.origin).addScaledVector(this.direction, t),
          Wr.distanceToSquared(e));
    }
    distanceSqToSegment(e, t, n, r) {
      (Gr.copy(e).add(t).multiplyScalar(0.5),
        Kr.copy(t).sub(e).normalize(),
        qr.copy(this.origin).sub(Gr));
      let i = e.distanceTo(t) * 0.5,
        a = -this.direction.dot(Kr),
        o = qr.dot(this.direction),
        s = -qr.dot(Kr),
        c = qr.lengthSq(),
        l = Math.abs(1 - a * a),
        u,
        d,
        f,
        p;
      if (l > 0) {
        if (((u = a * s - o), (d = a * o - s), (p = i * l), u >= 0)) {
          if (d >= -p) {
            if (d <= p) {
              let e = 1 / l;
              ((u *= e),
                (d *= e),
                (f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c));
            } else
              ((d = i),
                (u = Math.max(0, -(a * d + o))),
                (f = -u * u + d * (d + 2 * s) + c));
          } else
            ((d = -i),
              (u = Math.max(0, -(a * d + o))),
              (f = -u * u + d * (d + 2 * s) + c));
        } else
          d <= -p
            ? ((u = Math.max(0, -(-a * i + o))),
              (d = u > 0 ? -i : Math.min(Math.max(-i, -s), i)),
              (f = -u * u + d * (d + 2 * s) + c))
            : d <= p
              ? ((u = 0),
                (d = Math.min(Math.max(-i, -s), i)),
                (f = d * (d + 2 * s) + c))
              : ((u = Math.max(0, -(a * i + o))),
                (d = u > 0 ? i : Math.min(Math.max(-i, -s), i)),
                (f = -u * u + d * (d + 2 * s) + c));
      } else
        ((d = a > 0 ? -i : i),
          (u = Math.max(0, -(a * d + o))),
          (f = -u * u + d * (d + 2 * s) + c));
      return (
        n && n.copy(this.origin).addScaledVector(this.direction, u),
        r && r.copy(Gr).addScaledVector(Kr, d),
        f
      );
    }
    intersectSphere(e, t) {
      if (e.radius < 0) return null;
      Wr.subVectors(e.center, this.origin);
      let n = Wr.dot(this.direction),
        r = Wr.dot(Wr) - n * n,
        i = e.radius * e.radius;
      if (r > i) return null;
      let a = Math.sqrt(i - r),
        o = n - a,
        s = n + a;
      return s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
    }
    intersectsSphere(e) {
      return e.radius < 0
        ? !1
        : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
    }
    distanceToPlane(e) {
      let t = e.normal.dot(this.direction);
      if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
      let n = -(this.origin.dot(e.normal) + e.constant) / t;
      return n >= 0 ? n : null;
    }
    intersectPlane(e, t) {
      let n = this.distanceToPlane(e);
      return n === null ? null : this.at(n, t);
    }
    intersectsPlane(e) {
      let t = e.distanceToPoint(this.origin);
      return t === 0 || e.normal.dot(this.direction) * t < 0;
    }
    intersectBox(e, t) {
      let n,
        r,
        i,
        a,
        o,
        s,
        c = 1 / this.direction.x,
        l = 1 / this.direction.y,
        u = 1 / this.direction.z,
        d = this.origin;
      return (
        c >= 0
          ? ((n = (e.min.x - d.x) * c), (r = (e.max.x - d.x) * c))
          : ((n = (e.max.x - d.x) * c), (r = (e.min.x - d.x) * c)),
        l >= 0
          ? ((i = (e.min.y - d.y) * l), (a = (e.max.y - d.y) * l))
          : ((i = (e.max.y - d.y) * l), (a = (e.min.y - d.y) * l)),
        n > a ||
        i > r ||
        ((i > n || isNaN(n)) && (n = i),
        (a < r || isNaN(r)) && (r = a),
        u >= 0
          ? ((o = (e.min.z - d.z) * u), (s = (e.max.z - d.z) * u))
          : ((o = (e.max.z - d.z) * u), (s = (e.min.z - d.z) * u)),
        n > s || o > r) ||
        ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0)
          ? null
          : this.at(n >= 0 ? n : r, t)
      );
    }
    intersectsBox(e) {
      return this.intersectBox(e, Wr) !== null;
    }
    intersectTriangle(e, t, n, r, i) {
      let a = this.origin,
        o = this.direction,
        s = o.x,
        c = o.y,
        l = o.z,
        u = e.x - a.x,
        d = e.y - a.y,
        f = e.z - a.z,
        p = t.x - a.x,
        m = t.y - a.y,
        h = t.z - a.z,
        g = n.x - a.x,
        _ = n.y - a.y,
        v = n.z - a.z,
        y = Math.abs(s),
        b = Math.abs(c),
        x = Math.abs(l),
        S,
        C,
        w,
        T,
        E,
        D,
        O,
        k,
        A,
        j,
        ee,
        M;
      if (
        (y >= b && y >= x
          ? ((w = s),
            (D = u),
            (A = p),
            (M = g),
            s >= 0
              ? ((S = c),
                (C = l),
                (T = d),
                (E = f),
                (O = m),
                (k = h),
                (j = _),
                (ee = v))
              : ((S = l),
                (C = c),
                (T = f),
                (E = d),
                (O = h),
                (k = m),
                (j = v),
                (ee = _)))
          : b >= x
            ? ((w = c),
              (D = d),
              (A = m),
              (M = _),
              c >= 0
                ? ((S = l),
                  (C = s),
                  (T = f),
                  (E = u),
                  (O = h),
                  (k = p),
                  (j = v),
                  (ee = g))
                : ((S = s),
                  (C = l),
                  (T = u),
                  (E = f),
                  (O = p),
                  (k = h),
                  (j = g),
                  (ee = v)))
            : ((w = l),
              (D = f),
              (A = h),
              (M = v),
              l >= 0
                ? ((S = s),
                  (C = c),
                  (T = u),
                  (E = d),
                  (O = p),
                  (k = m),
                  (j = g),
                  (ee = _))
                : ((S = c),
                  (C = s),
                  (T = d),
                  (E = u),
                  (O = m),
                  (k = p),
                  (j = _),
                  (ee = g))),
        w === 0)
      )
        return null;
      let N = S / w,
        te = C / w,
        P = 1 / w,
        ne = T - N * D,
        re = E - te * D,
        ie = O - N * A,
        ae = k - te * A,
        oe = j - N * M,
        se = ee - te * M,
        ce = oe * ae - se * ie,
        F = ne * se - re * oe,
        le = ie * re - ae * ne;
      if (r) {
        if (ce < 0 || F < 0 || le < 0) return null;
      } else if ((ce < 0 || F < 0 || le < 0) && (ce > 0 || F > 0 || le > 0))
        return null;
      let ue = ce + F + le;
      if (ue === 0) return null;
      let de = P * (ce * D + F * A + le * M);
      return (ue > 0 ? de < 0 : de > 0) ? null : this.at(de / ue, i);
    }
    applyMatrix4(e) {
      return (
        this.origin.applyMatrix4(e),
        this.direction.transformDirection(e),
        this
      );
    }
    equals(e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  },
  Yr = class extends Ur {
    constructor(e) {
      (super(),
        (this.isMeshBasicMaterial = !0),
        (this.type = `MeshBasicMaterial`),
        (this.color = new J(16777215)),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapRotation = new mn()),
        (this.combine = 0),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = `round`),
        (this.wireframeLinejoin = `round`),
        (this.fog = !0),
        this.setValues(e));
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        (this.specularMap = e.specularMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        this.envMapRotation.copy(e.envMapRotation),
        (this.combine = e.combine),
        (this.reflectivity = e.reflectivity),
        (this.refractionRatio = e.refractionRatio),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.fog = e.fog),
        this
      );
    }
  },
  Xr = new q(),
  Zr = new Jr(),
  Qr = new Er(),
  $r = new W(),
  ei = new W(),
  ti = new W(),
  ni = new W(),
  ri = new W(),
  ii = new W(),
  ai = new W(),
  oi = new W(),
  si = class extends jn {
    constructor(e = new Pr(), t = new Yr()) {
      (super(),
        (this.isMesh = !0),
        (this.type = `Mesh`),
        (this.geometry = e),
        (this.material = t),
        (this.morphTargetDictionary = void 0),
        (this.morphTargetInfluences = void 0),
        (this.count = 1),
        this.updateMorphTargets());
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        e.morphTargetInfluences !== void 0 &&
          (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
        e.morphTargetDictionary !== void 0 &&
          (this.morphTargetDictionary = Object.assign(
            {},
            e.morphTargetDictionary,
          )),
        (this.material = Array.isArray(e.material)
          ? e.material.slice()
          : e.material),
        (this.geometry = e.geometry),
        this
      );
    }
    updateMorphTargets() {
      let e = this.geometry.morphAttributes,
        t = Object.keys(e);
      if (t.length > 0) {
        let n = e[t[0]];
        if (n !== void 0) {
          ((this.morphTargetInfluences = []),
            (this.morphTargetDictionary = {}));
          for (let e = 0, t = n.length; e < t; e++) {
            let t = n[e].name || String(e);
            (this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[t] = e));
          }
        }
      }
    }
    getVertexPosition(e, t) {
      let n = this.geometry,
        r = n.attributes.position,
        i = n.morphAttributes.position,
        a = n.morphTargetsRelative;
      t.fromBufferAttribute(r, e);
      let o = this.morphTargetInfluences;
      if (i && o) {
        ii.set(0, 0, 0);
        for (let n = 0, r = i.length; n < r; n++) {
          let r = o[n],
            s = i[n];
          r !== 0 &&
            (ri.fromBufferAttribute(s, e),
            a ? ii.addScaledVector(ri, r) : ii.addScaledVector(ri.sub(t), r));
        }
        t.add(ii);
      }
      return t;
    }
    intersectsFrustum(e) {
      return e.intersectsObject(this);
    }
    raycast(e, t) {
      let n = this.geometry,
        r = this.material,
        i = this.matrixWorld;
      r !== void 0 &&
        (n.boundingSphere === null && n.computeBoundingSphere(),
        Qr.copy(n.boundingSphere),
        Qr.applyMatrix4(i),
        Zr.copy(e.ray).recast(e.near),
        !(
          Qr.containsPoint(Zr.origin) === !1 &&
          (Zr.intersectSphere(Qr, $r) === null ||
            Zr.origin.distanceToSquared($r) > (e.far - e.near) ** 2)
        ) &&
          (Xr.copy(i).invert(),
          Zr.copy(e.ray).applyMatrix4(Xr),
          (n.boundingBox === null || Zr.intersectsBox(n.boundingBox) !== !1) &&
            this._computeIntersections(e, t, Zr)));
    }
    _computeIntersections(e, t, n) {
      let r,
        i = this.geometry,
        a = this.material,
        o = i.index,
        s = i.attributes.position,
        c = i.attributes.uv,
        l = i.attributes.uv1,
        u = i.attributes.normal,
        d = i.groups,
        f = i.drawRange;
      if (o !== null) {
        if (Array.isArray(a))
          for (let i = 0, s = d.length; i < s; i++) {
            let s = d[i],
              p = a[s.materialIndex],
              m = Math.max(s.start, f.start),
              h = Math.min(
                o.count,
                Math.min(s.start + s.count, f.start + f.count),
              );
            for (let i = m, a = h; i < a; i += 3) {
              let a = o.getX(i),
                d = o.getX(i + 1),
                f = o.getX(i + 2);
              ((r = li(this, p, e, n, c, l, u, a, d, f)),
                r &&
                  ((r.faceIndex = Math.floor(i / 3)),
                  (r.face.materialIndex = s.materialIndex),
                  t.push(r)));
            }
          }
        else {
          let i = Math.max(0, f.start),
            s = Math.min(o.count, f.start + f.count);
          for (let d = i, f = s; d < f; d += 3) {
            let i = o.getX(d),
              s = o.getX(d + 1),
              f = o.getX(d + 2);
            ((r = li(this, a, e, n, c, l, u, i, s, f)),
              r && ((r.faceIndex = Math.floor(d / 3)), t.push(r)));
          }
        }
      } else if (s !== void 0) {
        if (Array.isArray(a))
          for (let i = 0, o = d.length; i < o; i++) {
            let o = d[i],
              p = a[o.materialIndex],
              m = Math.max(o.start, f.start),
              h = Math.min(
                s.count,
                Math.min(o.start + o.count, f.start + f.count),
              );
            for (let i = m, a = h; i < a; i += 3) {
              let a = i,
                s = i + 1,
                d = i + 2;
              ((r = li(this, p, e, n, c, l, u, a, s, d)),
                r &&
                  ((r.faceIndex = Math.floor(i / 3)),
                  (r.face.materialIndex = o.materialIndex),
                  t.push(r)));
            }
          }
        else {
          let i = Math.max(0, f.start),
            o = Math.min(s.count, f.start + f.count);
          for (let s = i, d = o; s < d; s += 3) {
            let i = s,
              o = s + 1,
              d = s + 2;
            ((r = li(this, a, e, n, c, l, u, i, o, d)),
              r && ((r.faceIndex = Math.floor(s / 3)), t.push(r)));
          }
        }
      }
    }
  };
function ci(e, t, n, r, i, a, o, s) {
  let c;
  if (
    ((c =
      t.side === 1
        ? r.intersectTriangle(o, a, i, !0, s)
        : r.intersectTriangle(i, a, o, t.side === 0, s)),
    c === null)
  )
    return null;
  (oi.copy(s), oi.applyMatrix4(e.matrixWorld));
  let l = n.ray.origin.distanceTo(oi);
  return l < n.near || l > n.far
    ? null
    : { distance: l, point: oi.clone(), object: e };
}
function li(e, t, n, r, i, a, o, s, c, l) {
  (e.getVertexPosition(s, ei),
    e.getVertexPosition(c, ti),
    e.getVertexPosition(l, ni));
  let u = ci(e, t, n, r, ei, ti, ni, ai);
  if (u) {
    let e = new W();
    (er.getBarycoord(ai, ei, ti, ni, e),
      i && (u.uv = er.getInterpolatedAttribute(i, s, c, l, e, new U())),
      a && (u.uv1 = er.getInterpolatedAttribute(a, s, c, l, e, new U())),
      o &&
        ((u.normal = er.getInterpolatedAttribute(o, s, c, l, e, new W())),
        u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1)));
    let t = { a: s, b: c, c: l, normal: new W(), materialIndex: 0 };
    (er.getNormal(ei, ti, ni, t.normal), (u.face = t), (u.barycoord = e));
  }
  return u;
}
var ui = new $t(),
  di = new $t(),
  fi = new $t(),
  pi = new $t(),
  mi = new q(),
  hi = new W(),
  gi = new Er(),
  _i = new q(),
  vi = new Jr(),
  yi = class extends si {
    constructor(e, t) {
      (super(e, t),
        (this.isSkinnedMesh = !0),
        (this.type = `SkinnedMesh`),
        (this.bindMode = o),
        (this.bindMatrix = new q()),
        (this.bindMatrixInverse = new q()),
        (this.boundingBox = null),
        (this.boundingSphere = null));
    }
    computeBoundingBox() {
      let e = this.geometry;
      (this.boundingBox === null && (this.boundingBox = new tr()),
        this.boundingBox.makeEmpty());
      let t = e.getAttribute(`position`);
      for (let e = 0; e < t.count; e++)
        (this.getVertexPosition(e, hi), this.boundingBox.expandByPoint(hi));
    }
    computeBoundingSphere() {
      let e = this.geometry;
      (this.boundingSphere === null && (this.boundingSphere = new Er()),
        this.boundingSphere.makeEmpty());
      let t = e.getAttribute(`position`);
      for (let e = 0; e < t.count; e++)
        (this.getVertexPosition(e, hi), this.boundingSphere.expandByPoint(hi));
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.bindMode = e.bindMode),
        this.bindMatrix.copy(e.bindMatrix),
        this.bindMatrixInverse.copy(e.bindMatrixInverse),
        (this.skeleton = e.skeleton),
        e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
        e.boundingSphere !== null &&
          (this.boundingSphere = e.boundingSphere.clone()),
        this
      );
    }
    raycast(e, t) {
      let n = this.material,
        r = this.matrixWorld;
      n !== void 0 &&
        (this.boundingSphere === null && this.computeBoundingSphere(),
        gi.copy(this.boundingSphere),
        gi.applyMatrix4(r),
        e.ray.intersectsSphere(gi) !== !1 &&
          (_i.copy(r).invert(),
          vi.copy(e.ray).applyMatrix4(_i),
          (this.boundingBox === null ||
            vi.intersectsBox(this.boundingBox) !== !1) &&
            this._computeIntersections(e, t, vi)));
    }
    getVertexPosition(e, t) {
      return (super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t);
    }
    bind(e, t) {
      ((this.skeleton = e),
        t === void 0 &&
          (this.updateMatrixWorld(!0),
          this.skeleton.calculateInverses(),
          (t = this.matrixWorld)),
        this.bindMatrix.copy(t),
        this.bindMatrixInverse.copy(t).invert());
    }
    pose() {
      this.skeleton.pose();
    }
    normalizeSkinWeights() {
      let e = new $t(),
        t = this.geometry.attributes.skinWeight;
      for (let n = 0, r = t.count; n < r; n++) {
        e.fromBufferAttribute(t, n);
        let r = 1 / e.manhattanLength();
        (r === 1 / 0 ? e.set(1, 0, 0, 0) : e.multiplyScalar(r),
          t.setXYZW(n, e.x, e.y, e.z, e.w));
      }
    }
    updateMatrixWorld(e) {
      (super.updateMatrixWorld(e),
        this.bindMode === `attached`
          ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
          : this.bindMode === `detached`
            ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
            : B(`SkinnedMesh: Unrecognized bindMode: ` + this.bindMode));
    }
    applyBoneTransform(e, t) {
      let n = this.skeleton,
        r = this.geometry;
      (di.fromBufferAttribute(r.attributes.skinIndex, e),
        fi.fromBufferAttribute(r.attributes.skinWeight, e),
        t.isVector4
          ? (ui.copy(t), t.set(0, 0, 0, 0))
          : (ui.set(...t, 1), t.set(0, 0, 0)),
        ui.applyMatrix4(this.bindMatrix));
      for (let e = 0; e < 4; e++) {
        let r = fi.getComponent(e);
        if (r !== 0) {
          let i = di.getComponent(e);
          (mi.multiplyMatrices(n.bones[i].matrixWorld, n.boneInverses[i]),
            t.addScaledVector(pi.copy(ui).applyMatrix4(mi), r));
        }
      }
      return (
        t.isVector4 && (t.w = ui.w),
        t.applyMatrix4(this.bindMatrixInverse)
      );
    }
  },
  bi = class extends jn {
    constructor() {
      (super(), (this.isBone = !0), (this.type = `Bone`));
    }
  },
  xi = class extends Qt {
    constructor(e = null, t = 1, n = 1, r, i, a, o, s, c = u, l = u, d, f) {
      (super(null, a, o, s, c, l, r, i, d, f),
        (this.isDataTexture = !0),
        (this.image = { data: e, width: t, height: n }),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1));
    }
  },
  Si = new q(),
  Ci = new q(),
  wi = class e {
    constructor(e = [], t = []) {
      ((this.uuid = mt()),
        (this.bones = e.slice(0)),
        (this.boneInverses = t),
        (this.boneMatrices = null),
        (this.boneTexture = null),
        this.init());
    }
    init() {
      let e = this.bones,
        t = this.boneInverses;
      if (
        ((this.boneMatrices = new Float32Array(e.length * 16)), t.length === 0)
      )
        this.calculateInverses();
      else if (e.length !== t.length) {
        (B(
          `Skeleton: Number of inverse bone matrices does not match amount of bones.`,
        ),
          (this.boneInverses = []));
        for (let e = 0, t = this.bones.length; e < t; e++)
          this.boneInverses.push(new q());
      }
    }
    calculateInverses() {
      this.boneInverses.length = 0;
      for (let e = 0, t = this.bones.length; e < t; e++) {
        let t = new q();
        (this.bones[e] && t.copy(this.bones[e].matrixWorld).invert(),
          this.boneInverses.push(t));
      }
    }
    pose() {
      for (let e = 0, t = this.bones.length; e < t; e++) {
        let t = this.bones[e];
        t && t.matrixWorld.copy(this.boneInverses[e]).invert();
      }
      for (let e = 0, t = this.bones.length; e < t; e++) {
        let t = this.bones[e];
        t &&
          (t.parent && t.parent.isBone
            ? (t.matrix.copy(t.parent.matrixWorld).invert(),
              t.matrix.multiply(t.matrixWorld))
            : t.matrix.copy(t.matrixWorld),
          t.matrix.decompose(t.position, t.quaternion, t.scale));
      }
    }
    update() {
      let e = this.bones,
        t = this.boneInverses,
        n = this.boneMatrices,
        r = this.boneTexture;
      for (let r = 0, i = e.length; r < i; r++) {
        let i = e[r] ? e[r].matrixWorld : Ci;
        (Si.multiplyMatrices(i, t[r]), Si.toArray(n, r * 16));
      }
      r !== null && (r.needsUpdate = !0);
    }
    clone() {
      return new e(this.bones, this.boneInverses);
    }
    computeBoneTexture() {
      let e = Math.sqrt(this.bones.length * 4);
      ((e = Math.ceil(e / 4) * 4), (e = Math.max(e, 4)));
      let t = new Float32Array(e * e * 4);
      t.set(this.boneMatrices);
      let n = new xi(t, e, e, j, S);
      return (
        (n.needsUpdate = !0),
        (this.boneMatrices = t),
        (this.boneTexture = n),
        this
      );
    }
    getBoneByName(e) {
      for (let t = 0, n = this.bones.length; t < n; t++) {
        let n = this.bones[t];
        if (n.name === e) return n;
      }
    }
    dispose() {
      this.boneTexture !== null &&
        (this.boneTexture.dispose(), (this.boneTexture = null));
    }
    fromJSON(e, t) {
      this.uuid = e.uuid;
      for (let n = 0, r = e.bones.length; n < r; n++) {
        let r = e.bones[n],
          i = t[r];
        (i === void 0 &&
          (B(`Skeleton: No bone found with UUID:`, r), (i = new bi())),
          this.bones.push(i),
          this.boneInverses.push(new q().fromArray(e.boneInverses[n])));
      }
      return (this.init(), this);
    }
    toJSON() {
      let e = {
        metadata: {
          version: 4.7,
          type: `Skeleton`,
          generator: `Skeleton.toJSON`,
        },
        bones: [],
        boneInverses: [],
      };
      e.uuid = this.uuid;
      let t = this.bones,
        n = this.boneInverses;
      for (let r = 0, i = t.length; r < i; r++) {
        let i = t[r];
        e.bones.push(i.uuid);
        let a = n[r];
        e.boneInverses.push(a.toArray());
      }
      return e;
    }
  },
  Ti = class extends yr {
    constructor(e, t, n, r = 1) {
      (super(e, t, n),
        (this.isInstancedBufferAttribute = !0),
        (this.meshPerAttribute = r));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.meshPerAttribute = e.meshPerAttribute),
        this
      );
    }
    toJSON() {
      let e = super.toJSON();
      return (
        (e.meshPerAttribute = this.meshPerAttribute),
        (e.isInstancedBufferAttribute = !0),
        e
      );
    }
  },
  Ei = new q(),
  Di = new q(),
  Oi = [],
  ki = new tr(),
  Ai = new q(),
  ji = new si(),
  Mi = new Er(),
  Ni = class extends si {
    constructor(e, t, n) {
      (super(e, t),
        (this.isInstancedMesh = !0),
        (this.instanceMatrix = new Ti(new Float32Array(n * 16), 16)),
        (this.instanceColor = null),
        (this.morphTexture = null),
        (this.count = n),
        (this.boundingBox = null),
        (this.boundingSphere = null));
      for (let e = 0; e < n; e++) this.setMatrixAt(e, Ai);
    }
    computeBoundingBox() {
      let e = this.geometry,
        t = this.count;
      (this.boundingBox === null && (this.boundingBox = new tr()),
        e.boundingBox === null && e.computeBoundingBox(),
        this.boundingBox.makeEmpty());
      for (let n = 0; n < t; n++)
        (this.getMatrixAt(n, Ei),
          ki.copy(e.boundingBox).applyMatrix4(Ei),
          this.boundingBox.union(ki));
    }
    computeBoundingSphere() {
      let e = this.geometry,
        t = this.count;
      (this.boundingSphere === null && (this.boundingSphere = new Er()),
        e.boundingSphere === null && e.computeBoundingSphere(),
        this.boundingSphere.makeEmpty());
      for (let n = 0; n < t; n++)
        (this.getMatrixAt(n, Ei),
          Mi.copy(e.boundingSphere).applyMatrix4(Ei),
          this.boundingSphere.union(Mi));
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        this.instanceMatrix.copy(e.instanceMatrix),
        e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()),
        e.instanceColor !== null &&
          (this.instanceColor = e.instanceColor.clone()),
        (this.count = e.count),
        e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
        e.boundingSphere !== null &&
          (this.boundingSphere = e.boundingSphere.clone()),
        this
      );
    }
    getColorAt(e, t) {
      return this.instanceColor === null
        ? t.setRGB(1, 1, 1)
        : t.fromArray(this.instanceColor.array, e * 3);
    }
    getMatrixAt(e, t) {
      return t.fromArray(this.instanceMatrix.array, e * 16);
    }
    getMorphAt(e, t) {
      let n = t.morphTargetInfluences,
        r = this.morphTexture.source.data.data,
        i = e * (n.length + 1) + 1;
      for (let e = 0; e < n.length; e++) n[e] = r[i + e];
    }
    raycast(e, t) {
      let n = this.matrixWorld,
        r = this.count;
      if (
        ((ji.geometry = this.geometry),
        (ji.material = this.material),
        ji.material !== void 0 &&
          (this.boundingSphere === null && this.computeBoundingSphere(),
          Mi.copy(this.boundingSphere),
          Mi.applyMatrix4(n),
          e.ray.intersectsSphere(Mi) !== !1))
      )
        for (let i = 0; i < r; i++) {
          (this.getMatrixAt(i, Ei),
            Di.multiplyMatrices(n, Ei),
            (ji.matrixWorld = Di),
            ji.raycast(e, Oi));
          for (let e = 0, n = Oi.length; e < n; e++) {
            let n = Oi[e];
            ((n.instanceId = i), (n.object = this), t.push(n));
          }
          Oi.length = 0;
        }
    }
    setColorAt(e, t) {
      return (
        this.instanceColor === null &&
          (this.instanceColor = new Ti(
            new Float32Array(this.instanceMatrix.count * 3).fill(1),
            3,
          )),
        t.toArray(this.instanceColor.array, e * 3),
        this
      );
    }
    setMatrixAt(e, t) {
      return (t.toArray(this.instanceMatrix.array, e * 16), this);
    }
    setMorphAt(e, t) {
      let n = t.morphTargetInfluences,
        r = n.length + 1;
      this.morphTexture === null &&
        (this.morphTexture = new xi(
          new Float32Array(r * this.count),
          r,
          this.count,
          N,
          S,
        ));
      let i = this.morphTexture.source.data.data,
        a = 0;
      for (let e = 0; e < n.length; e++) a += n[e];
      let o = this.geometry.morphTargetsRelative ? 1 : 1 - a,
        s = r * e;
      return ((i[s] = o), i.set(n, s + 1), this);
    }
    updateMorphTargets() {}
    dispose() {
      (super.dispose(),
        this.morphTexture !== null &&
          (this.morphTexture.dispose(), (this.morphTexture = null)));
    }
  },
  Pi = new Er(),
  Fi = new U(0.5, 0.5),
  Ii = new W(),
  Li = class {
    constructor(
      e = new Vr(),
      t = new Vr(),
      n = new Vr(),
      r = new Vr(),
      i = new Vr(),
      a = new Vr(),
    ) {
      this.planes = [e, t, n, r, i, a];
    }
    set(e, t, n, r, i, a) {
      let o = this.planes;
      return (
        o[0].copy(e),
        o[1].copy(t),
        o[2].copy(n),
        o[3].copy(r),
        o[4].copy(i),
        o[5].copy(a),
        this
      );
    }
    copy(e) {
      let t = this.planes;
      for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
      return this;
    }
    setFromProjectionMatrix(e, t = Qe, n = !1) {
      let r = this.planes,
        i = e.elements,
        a = i[0],
        o = i[1],
        s = i[2],
        c = i[3],
        l = i[4],
        u = i[5],
        d = i[6],
        f = i[7],
        p = i[8],
        m = i[9],
        h = i[10],
        g = i[11],
        _ = i[12],
        v = i[13],
        y = i[14],
        b = i[15];
      if (
        (r[0].setComponents(c - a, f - l, g - p, b - _).normalize(),
        r[1].setComponents(c + a, f + l, g + p, b + _).normalize(),
        r[2].setComponents(c + o, f + u, g + m, b + v).normalize(),
        r[3].setComponents(c - o, f - u, g - m, b - v).normalize(),
        n)
      )
        (r[4].setComponents(s, d, h, y).normalize(),
          r[5].setComponents(c - s, f - d, g - h, b - y).normalize());
      else if (
        (r[4].setComponents(c - s, f - d, g - h, b - y).normalize(), t === 2e3)
      )
        r[5].setComponents(c + s, f + d, g + h, b + y).normalize();
      else if (t === 2001) r[5].setComponents(s, d, h, y).normalize();
      else
        throw Error(
          `THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: ` +
            t,
        );
      return this;
    }
    intersectsObject(e) {
      if (e.boundingSphere !== void 0)
        (e.boundingSphere === null && e.computeBoundingSphere(),
          Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld));
      else {
        let t = e.geometry;
        (t.boundingSphere === null && t.computeBoundingSphere(),
          Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld));
      }
      return this.intersectsSphere(Pi);
    }
    intersectsSprite(e) {
      return (
        Pi.center.set(0, 0, 0),
        (Pi.radius = 0.7071067811865476 + Fi.distanceTo(e.center)),
        Pi.applyMatrix4(e.matrixWorld),
        this.intersectsSphere(Pi)
      );
    }
    intersectsSphere(e) {
      let t = this.planes,
        n = e.center,
        r = -e.radius;
      for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < r) return !1;
      return !0;
    }
    intersectsBox(e) {
      let t = this.planes;
      for (let n = 0; n < 6; n++) {
        let r = t[n];
        if (
          ((Ii.x = r.normal.x > 0 ? e.max.x : e.min.x),
          (Ii.y = r.normal.y > 0 ? e.max.y : e.min.y),
          (Ii.z = r.normal.z > 0 ? e.max.z : e.min.z),
          r.distanceToPoint(Ii) < 0)
        )
          return !1;
      }
      return !0;
    }
    containsPoint(e) {
      let t = this.planes;
      for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
      return !0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  },
  Ri = class extends Ur {
    constructor(e) {
      (super(),
        (this.isLineBasicMaterial = !0),
        (this.type = `LineBasicMaterial`),
        (this.color = new J(16777215)),
        (this.map = null),
        (this.linewidth = 1),
        (this.linecap = `round`),
        (this.linejoin = `round`),
        (this.fog = !0),
        this.setValues(e));
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.linewidth = e.linewidth),
        (this.linecap = e.linecap),
        (this.linejoin = e.linejoin),
        (this.fog = e.fog),
        this
      );
    }
  },
  zi = new W(),
  Bi = new W(),
  Vi = new q(),
  Hi = new Jr(),
  Ui = new Er(),
  Wi = new W(),
  Gi = new W(),
  Ki = class extends jn {
    constructor(e = new Pr(), t = new Ri()) {
      (super(),
        (this.isLine = !0),
        (this.type = `Line`),
        (this.geometry = e),
        (this.material = t),
        (this.morphTargetDictionary = void 0),
        (this.morphTargetInfluences = void 0),
        this.updateMorphTargets());
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.material = Array.isArray(e.material)
          ? e.material.slice()
          : e.material),
        (this.geometry = e.geometry),
        this
      );
    }
    computeLineDistances() {
      let e = this.geometry;
      if (e.index === null) {
        let t = e.attributes.position,
          n = [0];
        for (let e = 1, r = t.count; e < r; e++)
          (zi.fromBufferAttribute(t, e - 1),
            Bi.fromBufferAttribute(t, e),
            (n[e] = n[e - 1]),
            (n[e] += zi.distanceTo(Bi)));
        e.setAttribute(`lineDistance`, new Sr(n, 1));
      } else
        B(
          `Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`,
        );
      return this;
    }
    intersectsFrustum(e) {
      return e.intersectsObject(this);
    }
    raycast(e, t) {
      let n = this.geometry,
        r = this.matrixWorld,
        i = e.params.Line.threshold,
        a = n.drawRange;
      if (
        (n.boundingSphere === null && n.computeBoundingSphere(),
        Ui.copy(n.boundingSphere),
        Ui.applyMatrix4(r),
        (Ui.radius += i),
        e.ray.intersectsSphere(Ui) === !1)
      )
        return;
      (Vi.copy(r).invert(), Hi.copy(e.ray).applyMatrix4(Vi));
      let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        s = o * o,
        c = this.isLineSegments ? 2 : 1,
        l = n.index,
        u = n.attributes.position;
      if (l !== null) {
        let n = Math.max(0, a.start),
          r = Math.min(l.count, a.start + a.count);
        for (let i = n, a = r - 1; i < a; i += c) {
          let n = l.getX(i),
            r = l.getX(i + 1),
            a = qi(this, e, Hi, s, n, r, i);
          a && t.push(a);
        }
        if (this.isLineLoop) {
          let i = l.getX(r - 1),
            a = l.getX(n),
            o = qi(this, e, Hi, s, i, a, r - 1);
          o && t.push(o);
        }
      } else {
        let n = Math.max(0, a.start),
          r = Math.min(u.count, a.start + a.count);
        for (let i = n, a = r - 1; i < a; i += c) {
          let n = qi(this, e, Hi, s, i, i + 1, i);
          n && t.push(n);
        }
        if (this.isLineLoop) {
          let i = qi(this, e, Hi, s, r - 1, n, r - 1);
          i && t.push(i);
        }
      }
    }
    updateMorphTargets() {
      let e = this.geometry.morphAttributes,
        t = Object.keys(e);
      if (t.length > 0) {
        let n = e[t[0]];
        if (n !== void 0) {
          ((this.morphTargetInfluences = []),
            (this.morphTargetDictionary = {}));
          for (let e = 0, t = n.length; e < t; e++) {
            let t = n[e].name || String(e);
            (this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[t] = e));
          }
        }
      }
    }
  };
function qi(e, t, n, r, i, a, o) {
  let s = e.geometry.attributes.position;
  if (
    (zi.fromBufferAttribute(s, i),
    Bi.fromBufferAttribute(s, a),
    n.distanceSqToSegment(zi, Bi, Wi, Gi) > r)
  )
    return;
  Wi.applyMatrix4(e.matrixWorld);
  let c = t.ray.origin.distanceTo(Wi);
  if (!(c < t.near || c > t.far))
    return {
      distance: c,
      point: Gi.clone().applyMatrix4(e.matrixWorld),
      index: o,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: e,
    };
}
var Ji = new W(),
  Yi = new W(),
  Xi = class extends Ki {
    constructor(e, t) {
      (super(e, t), (this.isLineSegments = !0), (this.type = `LineSegments`));
    }
    computeLineDistances() {
      let e = this.geometry;
      if (e.index === null) {
        let t = e.attributes.position,
          n = [];
        for (let e = 0, r = t.count; e < r; e += 2)
          (Ji.fromBufferAttribute(t, e),
            Yi.fromBufferAttribute(t, e + 1),
            (n[e] = e === 0 ? 0 : n[e - 1]),
            (n[e + 1] = n[e] + Ji.distanceTo(Yi)));
        e.setAttribute(`lineDistance`, new Sr(n, 1));
      } else
        B(
          `LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`,
        );
      return this;
    }
  },
  Zi = class extends Ki {
    constructor(e, t) {
      (super(e, t), (this.isLineLoop = !0), (this.type = `LineLoop`));
    }
  },
  Qi = class extends Ur {
    constructor(e) {
      (super(),
        (this.isPointsMaterial = !0),
        (this.type = `PointsMaterial`),
        (this.color = new J(16777215)),
        (this.map = null),
        (this.alphaMap = null),
        (this.size = 1),
        (this.sizeAttenuation = !0),
        (this.fog = !0),
        this.setValues(e));
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.size = e.size),
        (this.sizeAttenuation = e.sizeAttenuation),
        (this.fog = e.fog),
        this
      );
    }
  },
  $i = new q(),
  ea = new Jr(),
  ta = new Er(),
  na = new W(),
  ra = class extends jn {
    constructor(e = new Pr(), t = new Qi()) {
      (super(),
        (this.isPoints = !0),
        (this.type = `Points`),
        (this.geometry = e),
        (this.material = t),
        (this.morphTargetDictionary = void 0),
        (this.morphTargetInfluences = void 0),
        this.updateMorphTargets());
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.material = Array.isArray(e.material)
          ? e.material.slice()
          : e.material),
        (this.geometry = e.geometry),
        this
      );
    }
    intersectsFrustum(e) {
      return e.intersectsObject(this);
    }
    raycast(e, t) {
      let n = this.geometry,
        r = this.matrixWorld,
        i = e.params.Points.threshold,
        a = n.drawRange;
      if (
        (n.boundingSphere === null && n.computeBoundingSphere(),
        ta.copy(n.boundingSphere),
        ta.applyMatrix4(r),
        (ta.radius += i),
        e.ray.intersectsSphere(ta) === !1)
      )
        return;
      ($i.copy(r).invert(), ea.copy(e.ray).applyMatrix4($i));
      let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        s = o * o,
        c = n.index,
        l = n.attributes.position;
      if (c !== null) {
        let n = Math.max(0, a.start),
          i = Math.min(c.count, a.start + a.count);
        for (let a = n, o = i; a < o; a++) {
          let n = c.getX(a);
          (na.fromBufferAttribute(l, n), ia(na, n, s, r, e, t, this));
        }
      } else {
        let n = Math.max(0, a.start),
          i = Math.min(l.count, a.start + a.count);
        for (let a = n, o = i; a < o; a++)
          (na.fromBufferAttribute(l, a), ia(na, a, s, r, e, t, this));
      }
    }
    updateMorphTargets() {
      let e = this.geometry.morphAttributes,
        t = Object.keys(e);
      if (t.length > 0) {
        let n = e[t[0]];
        if (n !== void 0) {
          ((this.morphTargetInfluences = []),
            (this.morphTargetDictionary = {}));
          for (let e = 0, t = n.length; e < t; e++) {
            let t = n[e].name || String(e);
            (this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[t] = e));
          }
        }
      }
    }
  };
function ia(e, t, n, r, i, a, o) {
  let s = ea.distanceSqToPoint(e);
  if (s < n) {
    let n = new W();
    (ea.closestPointToPoint(e, n), n.applyMatrix4(r));
    let c = i.ray.origin.distanceTo(n);
    if (c < i.near || c > i.far) return;
    a.push({
      distance: c,
      distanceToRay: Math.sqrt(s),
      point: n,
      index: t,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: o,
    });
  }
}
var aa = class extends Qt {
    constructor(e = [], t = 301, n, r, i, a, o, s, c, l) {
      (super(e, t, n, r, i, a, o, s, c, l),
        (this.isCubeTexture = !0),
        (this.flipY = !1));
    }
    get images() {
      return this.image;
    }
    set images(e) {
      this.image = e;
    }
  },
  oa = class extends Qt {
    constructor(e, t, n, r, i, a, o, s, c) {
      (super(e, t, n, r, i, a, o, s, c),
        (this.isCanvasTexture = !0),
        (this.needsUpdate = !0));
    }
  },
  sa = class extends Qt {
    constructor(e, t, n = x, r, i, a, o = u, s = u, c, l = ee, d = 1) {
      if (l !== 1026 && l !== 1027)
        throw Error(
          `THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`,
        );
      (super({ width: e, height: t, depth: d }, r, i, a, o, s, l, n, c),
        (this.isDepthTexture = !0),
        (this.flipY = !1),
        (this.generateMipmaps = !1),
        (this.compareFunction = null));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.source = new Jt(Object.assign({}, e.image))),
        (this.compareFunction = e.compareFunction),
        this
      );
    }
    toJSON(e) {
      let t = super.toJSON(e);
      return ((t.compareFunction = this.compareFunction), t);
    }
  },
  ca = class extends sa {
    constructor(e, t = x, n = 301, r, i, a = u, o = u, s, c = ee) {
      let l = { width: e, height: e, depth: 1 },
        d = [l, l, l, l, l, l];
      (super(e, e, t, n, r, i, a, o, s, c),
        (this.image = d),
        (this.isCubeDepthTexture = !0),
        (this.isCubeTexture = !0));
    }
    get images() {
      return this.image;
    }
    set images(e) {
      this.image = e;
    }
  },
  la = class extends Qt {
    constructor(e = null) {
      (super(), (this.sourceTexture = e), (this.isExternalTexture = !0));
    }
    copy(e) {
      return (super.copy(e), (this.sourceTexture = e.sourceTexture), this);
    }
  },
  ua = class e extends Pr {
    constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
      (super(),
        (this.type = `BoxGeometry`),
        (this.parameters = {
          width: e,
          height: t,
          depth: n,
          widthSegments: r,
          heightSegments: i,
          depthSegments: a,
        }));
      let o = this;
      ((r = Math.floor(r)), (i = Math.floor(i)), (a = Math.floor(a)));
      let s = [],
        c = [],
        l = [],
        u = [],
        d = 0,
        f = 0;
      (p(`z`, `y`, `x`, -1, -1, n, t, e, a, i, 0),
        p(`z`, `y`, `x`, 1, -1, n, t, -e, a, i, 1),
        p(`x`, `z`, `y`, 1, 1, e, n, t, r, a, 2),
        p(`x`, `z`, `y`, 1, -1, e, n, -t, r, a, 3),
        p(`x`, `y`, `z`, 1, -1, e, t, n, r, i, 4),
        p(`x`, `y`, `z`, -1, -1, e, t, -n, r, i, 5),
        this.setIndex(s),
        this.setAttribute(`position`, new Sr(c, 3)),
        this.setAttribute(`normal`, new Sr(l, 3)),
        this.setAttribute(`uv`, new Sr(u, 2)));
      function p(e, t, n, r, i, a, p, m, h, g, _) {
        let v = a / h,
          y = p / g,
          b = a / 2,
          x = p / 2,
          S = m / 2,
          C = h + 1,
          w = g + 1,
          T = 0,
          E = 0,
          D = new W();
        for (let a = 0; a < w; a++) {
          let o = a * y - x;
          for (let s = 0; s < C; s++)
            ((D[e] = (s * v - b) * r),
              (D[t] = o * i),
              (D[n] = S),
              c.push(D.x, D.y, D.z),
              (D[e] = 0),
              (D[t] = 0),
              (D[n] = m > 0 ? 1 : -1),
              l.push(D.x, D.y, D.z),
              u.push(s / h),
              u.push(1 - a / g),
              (T += 1));
        }
        for (let e = 0; e < g; e++)
          for (let t = 0; t < h; t++) {
            let n = d + t + C * e,
              r = d + t + C * (e + 1),
              i = d + (t + 1) + C * (e + 1),
              a = d + (t + 1) + C * e;
            (s.push(n, r, a), s.push(r, i, a), (E += 6));
          }
        (o.addGroup(f, E, _), (f += E), (d += T));
      }
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.width,
        t.height,
        t.depth,
        t.widthSegments,
        t.heightSegments,
        t.depthSegments,
      );
    }
  },
  da = class e extends Pr {
    constructor(
      e = 1,
      t = 1,
      n = 1,
      r = 32,
      i = 1,
      a = !1,
      o = 0,
      s = Math.PI * 2,
    ) {
      (super(),
        (this.type = `CylinderGeometry`),
        (this.parameters = {
          radiusTop: e,
          radiusBottom: t,
          height: n,
          radialSegments: r,
          heightSegments: i,
          openEnded: a,
          thetaStart: o,
          thetaLength: s,
        }));
      let c = this;
      ((r = Math.floor(r)), (i = Math.floor(i)));
      let l = [],
        u = [],
        d = [],
        f = [],
        p = 0,
        m = [],
        h = n / 2,
        g = 0;
      (_(),
        a === !1 && (e > 0 && v(!0), t > 0 && v(!1)),
        this.setIndex(l),
        this.setAttribute(`position`, new Sr(u, 3)),
        this.setAttribute(`normal`, new Sr(d, 3)),
        this.setAttribute(`uv`, new Sr(f, 2)));
      function _() {
        let a = new W(),
          _ = new W(),
          v = 0,
          y = (t - e) / n;
        for (let c = 0; c <= i; c++) {
          let l = [],
            g = c / i,
            v = g * (t - e) + e;
          for (let e = 0; e <= r; e++) {
            let t = e / r,
              i = t * s + o,
              c = Math.sin(i),
              m = Math.cos(i);
            ((_.x = v * c),
              (_.y = -g * n + h),
              (_.z = v * m),
              u.push(_.x, _.y, _.z),
              a.set(c, y, m).normalize(),
              d.push(a.x, a.y, a.z),
              f.push(t, 1 - g),
              l.push(p++));
          }
          m.push(l);
        }
        for (let n = 0; n < r; n++)
          for (let r = 0; r < i; r++) {
            let a = m[r][n],
              o = m[r + 1][n],
              s = m[r + 1][n + 1],
              c = m[r][n + 1];
            ((e > 0 || r !== 0) && (l.push(a, o, c), (v += 3)),
              (t > 0 || r !== i - 1) && (l.push(o, s, c), (v += 3)));
          }
        (c.addGroup(g, v, 0), (g += v));
      }
      function v(n) {
        let i = p,
          a = new U(),
          m = new W(),
          _ = 0,
          v = n === !0 ? e : t,
          y = n === !0 ? 1 : -1;
        for (let e = 1; e <= r; e++)
          (u.push(0, h * y, 0), d.push(0, y, 0), f.push(0.5, 0.5), p++);
        let b = p;
        for (let e = 0; e <= r; e++) {
          let t = (e / r) * s + o,
            n = Math.cos(t),
            i = Math.sin(t);
          ((m.x = v * i),
            (m.y = h * y),
            (m.z = v * n),
            u.push(m.x, m.y, m.z),
            d.push(0, y, 0),
            (a.x = n * 0.5 + 0.5),
            (a.y = i * 0.5 * y + 0.5),
            f.push(a.x, a.y),
            p++);
        }
        for (let e = 0; e < r; e++) {
          let t = i + e,
            r = b + e;
          (n === !0 ? l.push(r, r + 1, t) : l.push(r + 1, r, t), (_ += 3));
        }
        (c.addGroup(g, _, n === !0 ? 1 : 2), (g += _));
      }
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.radiusTop,
        t.radiusBottom,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  fa = class e extends Pr {
    constructor(e = [], t = [], n = 1, r = 0) {
      (super(),
        (this.type = `PolyhedronGeometry`),
        (this.parameters = { vertices: e, indices: t, radius: n, detail: r }));
      let i = [],
        a = [];
      (o(r),
        c(n),
        l(),
        this.setAttribute(`position`, new Sr(i, 3)),
        this.setAttribute(`normal`, new Sr(i.slice(), 3)),
        this.setAttribute(`uv`, new Sr(a, 2)),
        r === 0 ? this.computeVertexNormals() : this.normalizeNormals());
      function o(e) {
        let n = new W(),
          r = new W(),
          i = new W();
        for (let a = 0; a < t.length; a += 3)
          (f(t[a + 0], n), f(t[a + 1], r), f(t[a + 2], i), s(n, r, i, e));
      }
      function s(e, t, n, r) {
        let i = r + 1,
          a = [];
        for (let r = 0; r <= i; r++) {
          a[r] = [];
          let o = e.clone().lerp(n, r / i),
            s = t.clone().lerp(n, r / i),
            c = i - r;
          for (let e = 0; e <= c; e++)
            e === 0 && r === i
              ? (a[r][e] = o)
              : (a[r][e] = o.clone().lerp(s, e / c));
        }
        for (let e = 0; e < i; e++)
          for (let t = 0; t < 2 * (i - e) - 1; t++) {
            let n = Math.floor(t / 2);
            t % 2 == 0
              ? (d(a[e][n + 1]), d(a[e + 1][n]), d(a[e][n]))
              : (d(a[e][n + 1]), d(a[e + 1][n + 1]), d(a[e + 1][n]));
          }
      }
      function c(e) {
        let t = new W();
        for (let n = 0; n < i.length; n += 3)
          ((t.x = i[n + 0]),
            (t.y = i[n + 1]),
            (t.z = i[n + 2]),
            t.normalize().multiplyScalar(e),
            (i[n + 0] = t.x),
            (i[n + 1] = t.y),
            (i[n + 2] = t.z));
      }
      function l() {
        let e = new W();
        for (let t = 0; t < i.length; t += 3) {
          ((e.x = i[t + 0]), (e.y = i[t + 1]), (e.z = i[t + 2]));
          let n = h(e) / 2 / Math.PI + 0.5,
            r = g(e) / Math.PI + 0.5;
          a.push(n, 1 - r);
        }
        (p(), u());
      }
      function u() {
        for (let e = 0; e < a.length; e += 6) {
          let t = a[e + 0],
            n = a[e + 2],
            r = a[e + 4];
          Math.max(t, n, r) > 0.9 &&
            Math.min(t, n, r) < 0.1 &&
            (t < 0.2 && (a[e + 0] += 1),
            n < 0.2 && (a[e + 2] += 1),
            r < 0.2 && (a[e + 4] += 1));
        }
      }
      function d(e) {
        i.push(e.x, e.y, e.z);
      }
      function f(t, n) {
        let r = t * 3;
        ((n.x = e[r + 0]), (n.y = e[r + 1]), (n.z = e[r + 2]));
      }
      function p() {
        let e = new W(),
          t = new W(),
          n = new W(),
          r = new W(),
          o = new U(),
          s = new U(),
          c = new U();
        for (let l = 0, u = 0; l < i.length; l += 9, u += 6) {
          (e.set(i[l + 0], i[l + 1], i[l + 2]),
            t.set(i[l + 3], i[l + 4], i[l + 5]),
            n.set(i[l + 6], i[l + 7], i[l + 8]),
            o.set(a[u + 0], a[u + 1]),
            s.set(a[u + 2], a[u + 3]),
            c.set(a[u + 4], a[u + 5]),
            r.copy(e).add(t).add(n).divideScalar(3));
          let d = h(r);
          (m(o, u + 0, e, d), m(s, u + 2, t, d), m(c, u + 4, n, d));
        }
      }
      function m(e, t, n, r) {
        (r < 0 && e.x === 1 && (a[t] = e.x - 1),
          n.x === 0 && n.z === 0 && (a[t] = r / 2 / Math.PI + 0.5));
      }
      function h(e) {
        return Math.atan2(e.z, -e.x);
      }
      function g(e) {
        return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z));
      }
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(t.vertices, t.indices, t.radius, t.detail);
    }
  },
  pa = class e extends fa {
    constructor(e = 1, t = 0) {
      let n = (1 + Math.sqrt(5)) / 2,
        r = [
          -1,
          n,
          0,
          1,
          n,
          0,
          -1,
          -n,
          0,
          1,
          -n,
          0,
          0,
          -1,
          n,
          0,
          1,
          n,
          0,
          -1,
          -n,
          0,
          1,
          -n,
          n,
          0,
          -1,
          n,
          0,
          1,
          -n,
          0,
          -1,
          -n,
          0,
          1,
        ];
      (super(
        r,
        [
          0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4,
          11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3,
          8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
        ],
        e,
        t,
      ),
        (this.type = `IcosahedronGeometry`),
        (this.parameters = { radius: e, detail: t }));
    }
    static fromJSON(t) {
      return new e(t.radius, t.detail);
    }
  },
  ma = class e extends Pr {
    constructor(
      e = [new U(0, -0.5), new U(0.5, 0), new U(0, 0.5)],
      t = 12,
      n = 0,
      r = Math.PI * 2,
    ) {
      (super(),
        (this.type = `LatheGeometry`),
        (this.parameters = {
          points: e,
          segments: t,
          phiStart: n,
          phiLength: r,
        }),
        (t = Math.floor(t)),
        (r = H(r, 0, Math.PI * 2)));
      let i = [],
        a = [],
        o = [],
        s = [],
        c = [],
        l = 1 / t,
        u = new W(),
        d = new U(),
        f = new W(),
        p = new W(),
        m = new W(),
        h = 0,
        g = 0;
      for (let t = 0; t <= e.length - 1; t++)
        switch (t) {
          case 0:
            ((h = e[t + 1].x - e[t].x),
              (g = e[t + 1].y - e[t].y),
              (f.x = g * 1),
              (f.y = -h),
              (f.z = g * 0),
              m.copy(f),
              f.normalize(),
              s.push(f.x, f.y, f.z));
            break;
          case e.length - 1:
            s.push(m.x, m.y, m.z);
            break;
          default:
            ((h = e[t + 1].x - e[t].x),
              (g = e[t + 1].y - e[t].y),
              (f.x = g * 1),
              (f.y = -h),
              (f.z = g * 0),
              p.copy(f),
              (f.x += m.x),
              (f.y += m.y),
              (f.z += m.z),
              f.normalize(),
              s.push(f.x, f.y, f.z),
              m.copy(p));
        }
      for (let i = 0; i <= t; i++) {
        let f = n + i * l * r,
          p = Math.sin(f),
          m = Math.cos(f);
        for (let n = 0; n <= e.length - 1; n++) {
          ((u.x = e[n].x * p),
            (u.y = e[n].y),
            (u.z = e[n].x * m),
            a.push(u.x, u.y, u.z),
            (d.x = i / t),
            (d.y = n / (e.length - 1)),
            o.push(d.x, d.y));
          let r = s[3 * n + 0] * p,
            l = s[3 * n + 1],
            f = s[3 * n + 0] * m;
          c.push(r, l, f);
        }
      }
      for (let n = 0; n < t; n++)
        for (let t = 0; t < e.length - 1; t++) {
          let r = t + n * e.length,
            a = r,
            o = r + e.length,
            s = r + e.length + 1,
            c = r + 1;
          (i.push(a, o, c), i.push(s, c, o));
        }
      (this.setIndex(i),
        this.setAttribute(`position`, new Sr(a, 3)),
        this.setAttribute(`uv`, new Sr(o, 2)),
        this.setAttribute(`normal`, new Sr(c, 3)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(t.points, t.segments, t.phiStart, t.phiLength);
    }
  },
  ha = class e extends fa {
    constructor(e = 1, t = 0) {
      (super(
        [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
        [
          0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4,
          2,
        ],
        e,
        t,
      ),
        (this.type = `OctahedronGeometry`),
        (this.parameters = { radius: e, detail: t }));
    }
    static fromJSON(t) {
      return new e(t.radius, t.detail);
    }
  },
  ga = class e extends Pr {
    constructor(e = 1, t = 1, n = 1, r = 1) {
      (super(),
        (this.type = `PlaneGeometry`),
        (this.parameters = {
          width: e,
          height: t,
          widthSegments: n,
          heightSegments: r,
        }));
      let i = e / 2,
        a = t / 2,
        o = Math.floor(n),
        s = Math.floor(r),
        c = o + 1,
        l = s + 1,
        u = e / o,
        d = t / s,
        f = [],
        p = [],
        m = [],
        h = [];
      for (let e = 0; e < l; e++) {
        let t = e * d - a;
        for (let n = 0; n < c; n++) {
          let r = n * u - i;
          (p.push(r, -t, 0), m.push(0, 0, 1), h.push(n / o), h.push(1 - e / s));
        }
      }
      for (let e = 0; e < s; e++)
        for (let t = 0; t < o; t++) {
          let n = t + c * e,
            r = t + c * (e + 1),
            i = t + 1 + c * (e + 1),
            a = t + 1 + c * e;
          (f.push(n, r, a), f.push(r, i, a));
        }
      (this.setIndex(f),
        this.setAttribute(`position`, new Sr(p, 3)),
        this.setAttribute(`normal`, new Sr(m, 3)),
        this.setAttribute(`uv`, new Sr(h, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(t.width, t.height, t.widthSegments, t.heightSegments);
    }
  },
  _a = class e extends Pr {
    constructor(
      e = 1,
      t = 0.4,
      n = 12,
      r = 48,
      i = Math.PI * 2,
      a = 0,
      o = Math.PI * 2,
    ) {
      (super(),
        (this.type = `TorusGeometry`),
        (this.parameters = {
          radius: e,
          tube: t,
          radialSegments: n,
          tubularSegments: r,
          arc: i,
          thetaStart: a,
          thetaLength: o,
        }),
        (n = Math.floor(n)),
        (r = Math.floor(r)));
      let s = [],
        c = [],
        l = [],
        u = [],
        d = new W(),
        f = new W(),
        p = new W();
      for (let s = 0; s <= n; s++) {
        let m = a + (s / n) * o;
        for (let a = 0; a <= r; a++) {
          let o = (a / r) * i;
          ((f.x = (e + t * Math.cos(m)) * Math.cos(o)),
            (f.y = (e + t * Math.cos(m)) * Math.sin(o)),
            (f.z = t * Math.sin(m)),
            c.push(f.x, f.y, f.z),
            (d.x = e * Math.cos(o)),
            (d.y = e * Math.sin(o)),
            p.subVectors(f, d).normalize(),
            l.push(p.x, p.y, p.z),
            u.push(a / r),
            u.push(s / n));
        }
      }
      for (let e = 1; e <= n; e++)
        for (let t = 1; t <= r; t++) {
          let n = (r + 1) * e + t - 1,
            i = (r + 1) * (e - 1) + t - 1,
            a = (r + 1) * (e - 1) + t,
            o = (r + 1) * e + t;
          (s.push(n, i, o), s.push(i, a, o));
        }
      (this.setIndex(s),
        this.setAttribute(`position`, new Sr(c, 3)),
        this.setAttribute(`normal`, new Sr(l, 3)),
        this.setAttribute(`uv`, new Sr(u, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.radius,
        t.tube,
        t.radialSegments,
        t.tubularSegments,
        t.arc,
        t.thetaStart,
        t.thetaLength,
      );
    }
  };
function va(e) {
  let t = {};
  for (let n in e) {
    t[n] = {};
    for (let r in e[n]) {
      let i = e[n][r];
      if (ba(i))
        i.isRenderTargetTexture
          ? (B(
              `UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`,
            ),
            (t[n][r] = null))
          : (t[n][r] = i.clone());
      else if (Array.isArray(i)) {
        if (ba(i[0])) {
          let e = [];
          for (let t = 0, n = i.length; t < n; t++) e[t] = i[t].clone();
          t[n][r] = e;
        } else t[n][r] = i.slice();
      } else t[n][r] = i;
    }
  }
  return t;
}
function ya(e) {
  let t = {};
  for (let n = 0; n < e.length; n++) {
    let r = va(e[n]);
    for (let e in r) t[e] = r[e];
  }
  return t;
}
function ba(e) {
  return (
    e &&
    (e.isColor ||
      e.isMatrix3 ||
      e.isMatrix4 ||
      e.isVector2 ||
      e.isVector3 ||
      e.isVector4 ||
      e.isTexture ||
      e.isQuaternion)
  );
}
function xa(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) t.push(e[n].clone());
  return t;
}
function Sa(e) {
  let t = e.getRenderTarget();
  return t === null
    ? e.outputColorSpace
    : t.isXRRenderTarget === !0
      ? t.texture.colorSpace
      : K.workingColorSpace;
}
var Ca = { clone: va, merge: ya },
  wa = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Ta = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,
  Ea = class extends Ur {
    constructor(e) {
      (super(),
        (this.isShaderMaterial = !0),
        (this.type = `ShaderMaterial`),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.uniformsGroups = []),
        (this.vertexShader = wa),
        (this.fragmentShader = Ta),
        (this.linewidth = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.lights = !1),
        (this.clipping = !1),
        (this.forceSinglePass = !0),
        (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
        (this.defaultAttributeValues = {
          color: [1, 1, 1],
          uv: [0, 0],
          uv1: [0, 0],
        }),
        (this.index0AttributeName = void 0),
        (this.uniformsNeedUpdate = !1),
        (this.glslVersion = null),
        e !== void 0 && this.setValues(e));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.fragmentShader = e.fragmentShader),
        (this.vertexShader = e.vertexShader),
        (this.uniforms = va(e.uniforms)),
        (this.uniformsGroups = xa(e.uniformsGroups)),
        (this.defines = Object.assign({}, e.defines)),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.fog = e.fog),
        (this.lights = e.lights),
        (this.clipping = e.clipping),
        (this.extensions = Object.assign({}, e.extensions)),
        (this.glslVersion = e.glslVersion),
        (this.defaultAttributeValues = Object.assign(
          {},
          e.defaultAttributeValues,
        )),
        (this.index0AttributeName = e.index0AttributeName),
        (this.uniformsNeedUpdate = e.uniformsNeedUpdate),
        this
      );
    }
    toJSON(e) {
      let t = super.toJSON(e);
      ((t.glslVersion = this.glslVersion), (t.uniforms = {}));
      for (let n in this.uniforms) {
        let r = this.uniforms[n].value;
        r && r.isTexture
          ? (t.uniforms[n] = { type: `t`, value: r.toJSON(e).uuid })
          : r && r.isColor
            ? (t.uniforms[n] = { type: `c`, value: r.getHex() })
            : r && r.isVector2
              ? (t.uniforms[n] = { type: `v2`, value: r.toArray() })
              : r && r.isVector3
                ? (t.uniforms[n] = { type: `v3`, value: r.toArray() })
                : r && r.isVector4
                  ? (t.uniforms[n] = { type: `v4`, value: r.toArray() })
                  : r && r.isMatrix3
                    ? (t.uniforms[n] = { type: `m3`, value: r.toArray() })
                    : r && r.isMatrix4
                      ? (t.uniforms[n] = { type: `m4`, value: r.toArray() })
                      : (t.uniforms[n] = { value: r });
      }
      (Object.keys(this.defines).length > 0 && (t.defines = this.defines),
        (t.vertexShader = this.vertexShader),
        (t.fragmentShader = this.fragmentShader),
        (t.lights = this.lights),
        (t.clipping = this.clipping));
      let n = {};
      for (let e in this.extensions) this.extensions[e] === !0 && (n[e] = !0);
      return (Object.keys(n).length > 0 && (t.extensions = n), t);
    }
    fromJSON(e, t) {
      if ((super.fromJSON(e, t), e.uniforms !== void 0))
        for (let n in e.uniforms) {
          let r = e.uniforms[n];
          switch (((this.uniforms[n] = {}), r.type)) {
            case `t`:
              this.uniforms[n].value = t[r.value] || null;
              break;
            case `c`:
              this.uniforms[n].value = new J().setHex(r.value);
              break;
            case `v2`:
              this.uniforms[n].value = new U().fromArray(r.value);
              break;
            case `v3`:
              this.uniforms[n].value = new W().fromArray(r.value);
              break;
            case `v4`:
              this.uniforms[n].value = new $t().fromArray(r.value);
              break;
            case `m3`:
              this.uniforms[n].value = new G().fromArray(r.value);
              break;
            case `m4`:
              this.uniforms[n].value = new q().fromArray(r.value);
              break;
            default:
              this.uniforms[n].value = r.value;
          }
        }
      if (
        (e.defines !== void 0 && (this.defines = e.defines),
        e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader),
        e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader),
        e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion),
        e.extensions !== void 0)
      )
        for (let t in e.extensions) this.extensions[t] = e.extensions[t];
      return (
        e.lights !== void 0 && (this.lights = e.lights),
        e.clipping !== void 0 && (this.clipping = e.clipping),
        this
      );
    }
  },
  Da = class extends Ea {
    constructor(e) {
      (super(e),
        (this.isRawShaderMaterial = !0),
        (this.type = `RawShaderMaterial`));
    }
  },
  Oa = class extends Ur {
    constructor(e) {
      (super(),
        (this.isMeshStandardMaterial = !0),
        (this.type = `MeshStandardMaterial`),
        (this.defines = { STANDARD: `` }),
        (this.color = new J(16777215)),
        (this.roughness = 1),
        (this.metalness = 0),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new J(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new U(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.roughnessMap = null),
        (this.metalnessMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapRotation = new mn()),
        (this.envMapIntensity = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = `round`),
        (this.wireframeLinejoin = `round`),
        (this.flatShading = !1),
        (this.fog = !0),
        this.setValues(e));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.defines = { STANDARD: `` }),
        this.color.copy(e.color),
        (this.roughness = e.roughness),
        (this.metalness = e.metalness),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        this.emissive.copy(e.emissive),
        (this.emissiveMap = e.emissiveMap),
        (this.emissiveIntensity = e.emissiveIntensity),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.roughnessMap = e.roughnessMap),
        (this.metalnessMap = e.metalnessMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        this.envMapRotation.copy(e.envMapRotation),
        (this.envMapIntensity = e.envMapIntensity),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.flatShading = e.flatShading),
        (this.fog = e.fog),
        this
      );
    }
  },
  ka = class extends Oa {
    constructor(e) {
      (super(),
        (this.isMeshPhysicalMaterial = !0),
        (this.defines = { STANDARD: ``, PHYSICAL: `` }),
        (this.type = `MeshPhysicalMaterial`),
        (this.anisotropyRotation = 0),
        (this.anisotropyMap = null),
        (this.clearcoatMap = null),
        (this.clearcoatRoughness = 0),
        (this.clearcoatRoughnessMap = null),
        (this.clearcoatNormalScale = new U(1, 1)),
        (this.clearcoatNormalMap = null),
        (this.ior = 1.5),
        Object.defineProperty(this, "reflectivity", {
          get: function () {
            return H((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
          },
          set: function (e) {
            this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
          },
        }),
        (this.iridescenceMap = null),
        (this.iridescenceIOR = 1.3),
        (this.iridescenceThicknessRange = [100, 400]),
        (this.iridescenceThicknessMap = null),
        (this.sheenColor = new J(0)),
        (this.sheenColorMap = null),
        (this.sheenRoughness = 1),
        (this.sheenRoughnessMap = null),
        (this.transmissionMap = null),
        (this.thickness = 0),
        (this.thicknessMap = null),
        (this.attenuationDistance = 1 / 0),
        (this.attenuationColor = new J(1, 1, 1)),
        (this.specularIntensity = 1),
        (this.specularIntensityMap = null),
        (this.specularColor = new J(1, 1, 1)),
        (this.specularColorMap = null),
        (this._anisotropy = 0),
        (this._clearcoat = 0),
        (this._dispersion = 0),
        (this._iridescence = 0),
        (this._retroreflectivity = 0),
        (this._sheen = 0),
        (this._transmission = 0),
        this.setValues(e));
    }
    get anisotropy() {
      return this._anisotropy;
    }
    set anisotropy(e) {
      (this._anisotropy > 0 != e > 0 && this.version++, (this._anisotropy = e));
    }
    get clearcoat() {
      return this._clearcoat;
    }
    set clearcoat(e) {
      (this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e));
    }
    get iridescence() {
      return this._iridescence;
    }
    set iridescence(e) {
      (this._iridescence > 0 != e > 0 && this.version++,
        (this._iridescence = e));
    }
    get dispersion() {
      return this._dispersion;
    }
    set dispersion(e) {
      (this._dispersion > 0 != e > 0 && this.version++, (this._dispersion = e));
    }
    get retroreflectivity() {
      return this._retroreflectivity;
    }
    set retroreflectivity(e) {
      (this._retroreflectivity > 0 != e > 0 && this.version++,
        (this._retroreflectivity = e));
    }
    get sheen() {
      return this._sheen;
    }
    set sheen(e) {
      (this._sheen > 0 != e > 0 && this.version++, (this._sheen = e));
    }
    get transmission() {
      return this._transmission;
    }
    set transmission(e) {
      (this._transmission > 0 != e > 0 && this.version++,
        (this._transmission = e));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.defines = { STANDARD: ``, PHYSICAL: `` }),
        (this.anisotropy = e.anisotropy),
        (this.anisotropyRotation = e.anisotropyRotation),
        (this.anisotropyMap = e.anisotropyMap),
        (this.clearcoat = e.clearcoat),
        (this.clearcoatMap = e.clearcoatMap),
        (this.clearcoatRoughness = e.clearcoatRoughness),
        (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
        (this.clearcoatNormalMap = e.clearcoatNormalMap),
        this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
        (this.dispersion = e.dispersion),
        (this.ior = e.ior),
        (this.iridescence = e.iridescence),
        (this.iridescenceMap = e.iridescenceMap),
        (this.iridescenceIOR = e.iridescenceIOR),
        (this.iridescenceThicknessRange = [...e.iridescenceThicknessRange]),
        (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
        (this.retroreflectivity = e.retroreflectivity),
        (this.sheen = e.sheen),
        this.sheenColor.copy(e.sheenColor),
        (this.sheenColorMap = e.sheenColorMap),
        (this.sheenRoughness = e.sheenRoughness),
        (this.sheenRoughnessMap = e.sheenRoughnessMap),
        (this.transmission = e.transmission),
        (this.transmissionMap = e.transmissionMap),
        (this.thickness = e.thickness),
        (this.thicknessMap = e.thicknessMap),
        (this.attenuationDistance = e.attenuationDistance),
        this.attenuationColor.copy(e.attenuationColor),
        (this.specularIntensity = e.specularIntensity),
        (this.specularIntensityMap = e.specularIntensityMap),
        this.specularColor.copy(e.specularColor),
        (this.specularColorMap = e.specularColorMap),
        this
      );
    }
  },
  Aa = class extends Ur {
    constructor(e) {
      (super(),
        (this.isMeshDepthMaterial = !0),
        (this.type = `MeshDepthMaterial`),
        (this.depthPacking = Ue),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        this.setValues(e));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.depthPacking = e.depthPacking),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        this
      );
    }
  },
  ja = class extends Ur {
    constructor(e) {
      (super(),
        (this.isMeshDistanceMaterial = !0),
        (this.type = `MeshDistanceMaterial`),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        this.setValues(e));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        this
      );
    }
  };
function Ma(e, t) {
  return !e || e.constructor === t
    ? e
    : typeof t.BYTES_PER_ELEMENT == `number`
      ? new t(e)
      : Array.prototype.slice.call(e);
}
function Na(e) {
  return e !== void 0 && e.inTangents !== void 0 && e.outTangents !== void 0;
}
function Pa(e) {
  function t(t, n) {
    return e[t] - e[n];
  }
  let n = e.length,
    r = Array(n);
  for (let e = 0; e !== n; ++e) r[e] = e;
  return (r.sort(t), r);
}
function Fa(e, t, n) {
  let r = e.length,
    i = new e.constructor(r);
  for (let a = 0, o = 0; o !== r; ++a) {
    let r = n[a] * t;
    for (let n = 0; n !== t; ++n) i[o++] = e[r + n];
  }
  return i;
}
function Ia(e, t, n, r) {
  let i = 1,
    a = e[0];
  for (; a !== void 0 && a[r] === void 0;) a = e[i++];
  if (a === void 0) return;
  let o = a[r];
  if (o !== void 0) {
    if (Array.isArray(o))
      do
        ((o = a[r]),
          o !== void 0 && (t.push(a.time), n.push(...o)),
          (a = e[i++]));
      while (a !== void 0);
    else if (o.toArray !== void 0)
      do
        ((o = a[r]),
          o !== void 0 && (t.push(a.time), o.toArray(n, n.length)),
          (a = e[i++]));
      while (a !== void 0);
    else
      do
        ((o = a[r]), o !== void 0 && (t.push(a.time), n.push(o)), (a = e[i++]));
      while (a !== void 0);
  }
}
var La = class {
    constructor(e, t, n, r) {
      ((this.parameterPositions = e),
        (this._cachedIndex = 0),
        (this.resultBuffer = r === void 0 ? new t.constructor(n) : r),
        (this.sampleValues = t),
        (this.valueSize = n),
        (this.settings = null),
        (this.DefaultSettings_ = {}));
    }
    evaluate(e) {
      let t = this.parameterPositions,
        n = this._cachedIndex,
        r = t[n],
        i = t[n - 1];
      validate_interval: {
        seek: {
          let a;
          linear_scan: {
            forward_scan: if (!(e < r)) {
              for (let a = n + 2; ;) {
                if (r === void 0) {
                  if (e < i) break forward_scan;
                  return (
                    (n = t.length),
                    (this._cachedIndex = n),
                    this.copySampleValue_(n - 1)
                  );
                }
                if (n === a) break;
                if (((i = r), (r = t[++n]), e < r)) break seek;
              }
              a = t.length;
              break linear_scan;
            }
            if (!(e >= i)) {
              let o = t[1];
              e < o && ((n = 2), (i = o));
              for (let a = n - 2; ;) {
                if (i === void 0)
                  return ((this._cachedIndex = 0), this.copySampleValue_(0));
                if (n === a) break;
                if (((r = i), (i = t[--n - 1]), e >= i)) break seek;
              }
              ((a = n), (n = 0));
              break linear_scan;
            }
            break validate_interval;
          }
          for (; n < a;) {
            let r = (n + a) >>> 1;
            e < t[r] ? (a = r) : (n = r + 1);
          }
          if (((r = t[n]), (i = t[n - 1]), i === void 0))
            return ((this._cachedIndex = 0), this.copySampleValue_(0));
          if (r === void 0)
            return (
              (n = t.length),
              (this._cachedIndex = n),
              this.copySampleValue_(n - 1)
            );
        }
        ((this._cachedIndex = n), this.intervalChanged_(n, i, r));
      }
      return this.interpolate_(n, i, e, r);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(e) {
      let t = this.resultBuffer,
        n = this.sampleValues,
        r = this.valueSize,
        i = e * r;
      for (let e = 0; e !== r; ++e) t[e] = n[i + e];
      return t;
    }
    interpolate_() {
      throw Error(`THREE.Interpolant: Call to abstract method.`);
    }
    intervalChanged_() {}
  },
  Ra = class extends La {
    constructor(e, t, n, r) {
      (super(e, t, n, r),
        (this._weightPrev = -0),
        (this._offsetPrev = -0),
        (this._weightNext = -0),
        (this._offsetNext = -0),
        (this.DefaultSettings_ = { endingStart: ze, endingEnd: ze }));
    }
    intervalChanged_(e, t, n) {
      let r = this.parameterPositions,
        i = e - 2,
        a = e + 1,
        o = r[i],
        s = r[a];
      if (o === void 0)
        switch (this.getSettings_().endingStart) {
          case Be:
            ((i = e), (o = 2 * t - n));
            break;
          case Ve:
            ((i = r.length - 2), (o = t + r[i] - r[i + 1]));
            break;
          default:
            ((i = e), (o = n));
        }
      if (s === void 0)
        switch (this.getSettings_().endingEnd) {
          case Be:
            ((a = e), (s = 2 * n - t));
            break;
          case Ve:
            ((a = 1), (s = n + r[1] - r[0]));
            break;
          default:
            ((a = e - 1), (s = t));
        }
      let c = (n - t) * 0.5,
        l = this.valueSize;
      ((this._weightPrev = c / (t - o)),
        (this._weightNext = c / (s - n)),
        (this._offsetPrev = i * l),
        (this._offsetNext = a * l));
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = this._offsetPrev,
        u = this._offsetNext,
        d = this._weightPrev,
        f = this._weightNext,
        p = (n - t) / (r - t),
        m = p * p,
        h = m * p,
        g = -d * h + 2 * d * m - d * p,
        _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-0.5 + d) * p + 1,
        v = (-1 - f) * h + (1.5 + f) * m + 0.5 * p,
        y = f * h - f * m;
      for (let e = 0; e !== o; ++e)
        i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
      return i;
    }
  },
  za = class extends La {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = (n - t) / (r - t),
        u = 1 - l;
      for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l;
      return i;
    }
  },
  Ba = class extends La {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    interpolate_(e) {
      return this.copySampleValue_(e - 1);
    }
  },
  Va = class extends La {
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = this.inTangents,
        u = this.outTangents;
      if (!l || !u) {
        let e = (n - t) / (r - t),
          l = 1 - e;
        for (let t = 0; t !== o; ++t) i[t] = a[c + t] * l + a[s + t] * e;
        return i;
      }
      let d = o * 2,
        f = e - 1;
      for (let p = 0; p !== o; ++p) {
        let o = a[c + p],
          m = a[s + p],
          h = f * d + p * 2,
          g = u[h],
          _ = u[h + 1],
          v = e * d + p * 2,
          y = l[v],
          b = l[v + 1],
          x = Wa(n, t, g, y, r);
        i[p] = Ha(x, o, _, b, m);
      }
      return i;
    }
  };
function Ha(e, t, n, r, i) {
  let a = 1 - e;
  return a * a * a * t + 3 * a * a * e * n + 3 * a * e * e * r + e * e * e * i;
}
function Ua(e, t, n, r, i) {
  let a = 1 - e;
  return 3 * a * a * (n - t) + 6 * a * e * (r - n) + 3 * e * e * (i - r);
}
function Wa(e, t, n, r, i) {
  let a = (e - t) / (i - t);
  for (let o = 0; o < 8; o++) {
    let o = Ha(a, t, n, r, i) - e;
    if (Math.abs(o) < 1e-10) break;
    let s = Ua(a, t, n, r, i);
    if (Math.abs(s) < 1e-10) break;
    a = Math.max(0, Math.min(1, a - o / s));
  }
  return a;
}
var Ga = class {
  constructor(e, t, n, r) {
    if (e === void 0)
      throw Error(`THREE.KeyframeTrack: track name is undefined`);
    if (t === void 0 || t.length === 0)
      throw Error(`THREE.KeyframeTrack: no keyframes in track named ` + e);
    ((this.name = e),
      (this.times = Ma(t, this.TimeBufferType)),
      (this.values = Ma(n, this.ValueBufferType)),
      this.setInterpolation(r || this.DefaultInterpolation));
  }
  static toJSON(e) {
    let t = e.constructor,
      n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Ma(e.times, Array),
        values: Ma(e.values, Array),
      };
      let t = e.getInterpolation();
      (t !== e.DefaultInterpolation && (n.interpolation = t),
        Na(e.settings) &&
          (n.settings = {
            inTangents: Ma(e.settings.inTangents, Array),
            outTangents: Ma(e.settings.outTangents, Array),
          }));
    }
    return ((n.type = e.ValueTypeName), n);
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Ba(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new za(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Ra(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodBezier(e) {
    let t = new Va(this.times, this.values, this.getValueSize(), e);
    return (
      this.settings &&
        ((t.inTangents = this.settings.inTangents),
        (t.outTangents = this.settings.outTangents)),
      t
    );
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case R:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case z:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Le:
        t = this.InterpolantFactoryMethodSmooth;
        break;
      case Re:
        t = this.InterpolantFactoryMethodBezier;
    }
    if (t === void 0) {
      let t =
        `unsupported interpolation for ` +
        this.ValueTypeName +
        ` keyframe track named ` +
        this.name;
      if (this.createInterpolant === void 0) {
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw Error(t);
      }
      return (B(`KeyframeTrack:`, t), this);
    }
    return ((this.createInterpolant = t), this);
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return R;
      case this.InterpolantFactoryMethodLinear:
        return z;
      case this.InterpolantFactoryMethodSmooth:
        return Le;
      case this.InterpolantFactoryMethodBezier:
        return Re;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      let t = this.times;
      for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      let t = this.times;
      for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
      Na(this.settings) &&
        (Ka(this.settings.inTangents, e), Ka(this.settings.outTangents, e));
    }
    return this;
  }
  trim(e, t) {
    let n = this.times,
      r = n.length,
      i = 0,
      a = r - 1;
    for (; i !== r && n[i] < e;) ++i;
    for (; a !== -1 && n[a] > t;) --a;
    if ((++a, i !== 0 || a !== r)) {
      i >= a && ((a = Math.max(a, 1)), (i = a - 1));
      let e = this.getValueSize();
      ((this.times = n.slice(i, a)),
        (this.values = this.values.slice(i * e, a * e)));
    }
    return this;
  }
  validate() {
    let e = !0,
      t = this.getValueSize();
    t - Math.floor(t) !== 0 &&
      (V(`KeyframeTrack: Invalid value size in track.`, this), (e = !1));
    let n = this.times,
      r = this.values,
      i = n.length;
    i === 0 && (V(`KeyframeTrack: Track is empty.`, this), (e = !1));
    let a = null;
    for (let t = 0; t !== i; t++) {
      let r = n[t];
      if (typeof r == `number` && isNaN(r)) {
        (V(`KeyframeTrack: Time is not a valid number.`, this, t, r), (e = !1));
        break;
      }
      if (a !== null && a > r) {
        (V(`KeyframeTrack: Out of order keys.`, this, t, r, a), (e = !1));
        break;
      }
      a = r;
    }
    if (r !== void 0 && et(r))
      for (let t = 0, n = r.length; t !== n; ++t) {
        let n = r[t];
        if (isNaN(n)) {
          (V(`KeyframeTrack: Value is not a valid number.`, this, t, n),
            (e = !1));
          break;
        }
      }
    return e;
  }
  optimize() {
    let e = this.times.slice(),
      t = this.values.slice(),
      n = this.getValueSize(),
      r = this.getInterpolation() === Le,
      i = e.length - 1,
      a = 1;
    for (let o = 1; o < i; ++o) {
      let i = !1,
        s = e[o];
      if (s !== e[o + 1] && (o !== 1 || s !== e[0])) {
        if (r) i = !0;
        else {
          let e = o * n,
            r = e - n,
            a = e + n;
          for (let o = 0; o !== n; ++o) {
            let n = t[e + o];
            if (n !== t[r + o] || n !== t[a + o]) {
              i = !0;
              break;
            }
          }
        }
      }
      if (i) {
        if (o !== a) {
          e[a] = e[o];
          let r = o * n,
            i = a * n;
          for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
        }
        ++a;
      }
    }
    if (i > 0) {
      e[a] = e[i];
      for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o];
      ++a;
    }
    return (
      a === e.length
        ? ((this.times = e), (this.values = t))
        : ((this.times = e.slice(0, a)), (this.values = t.slice(0, a * n))),
      this
    );
  }
  clone() {
    let e = this.times.slice(),
      t = this.values.slice(),
      n = this.constructor,
      r = new n(this.name, e, t);
    return (
      (r.createInterpolant = this.createInterpolant),
      Na(this.settings) &&
        (r.settings = {
          inTangents: this.settings.inTangents.slice(),
          outTangents: this.settings.outTangents.slice(),
        }),
      r
    );
  }
};
function Ka(e, t) {
  for (let n = 0, r = e.length; n !== r; n += 2) e[n] *= t;
}
((Ga.prototype.ValueTypeName = ``),
  (Ga.prototype.TimeBufferType = Float32Array),
  (Ga.prototype.ValueBufferType = Float32Array),
  (Ga.prototype.DefaultInterpolation = z));
var qa = class extends Ga {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
((qa.prototype.ValueTypeName = `bool`),
  (qa.prototype.ValueBufferType = Array),
  (qa.prototype.DefaultInterpolation = R),
  (qa.prototype.InterpolantFactoryMethodLinear = void 0),
  (qa.prototype.InterpolantFactoryMethodSmooth = void 0));
var Ja = class extends Ga {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
};
Ja.prototype.ValueTypeName = `color`;
var Ya = class extends Ga {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
};
Ya.prototype.ValueTypeName = `number`;
var Xa = class extends La {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = (n - t) / (r - t),
        c = e * o;
      for (let e = c + o; c !== e; c += 4)
        It.slerpFlat(i, 0, a, c - o, a, c, s);
      return i;
    }
  },
  Za = class extends Ga {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    InterpolantFactoryMethodLinear(e) {
      return new Xa(this.times, this.values, this.getValueSize(), e);
    }
  };
((Za.prototype.ValueTypeName = `quaternion`),
  (Za.prototype.InterpolantFactoryMethodSmooth = void 0));
var Qa = class extends Ga {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
((Qa.prototype.ValueTypeName = `string`),
  (Qa.prototype.ValueBufferType = Array),
  (Qa.prototype.DefaultInterpolation = R),
  (Qa.prototype.InterpolantFactoryMethodLinear = void 0),
  (Qa.prototype.InterpolantFactoryMethodSmooth = void 0));
var $a = class extends Ga {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
};
$a.prototype.ValueTypeName = `vector`;
var eo = class {
  constructor(e = ``, t = -1, n = [], r = He) {
    ((this.name = e),
      (this.tracks = n),
      (this.duration = t),
      (this.blendMode = r),
      (this.uuid = mt()),
      (this.userData = {}),
      this.duration < 0 && this.resetDuration());
  }
  static parse(e) {
    let t = [],
      n = e.tracks,
      r = 1 / (e.fps || 1);
    for (let e = 0, i = n.length; e !== i; ++e) t.push(no(n[e]).scale(r));
    let i = new this(e.name, e.duration, t, e.blendMode);
    return (
      (i.uuid = e.uuid),
      (i.userData = JSON.parse(e.userData || `{}`)),
      i
    );
  }
  static toJSON(e) {
    let t = [],
      n = e.tracks,
      r = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
        userData: JSON.stringify(e.userData),
      };
    for (let e = 0, r = n.length; e !== r; ++e) t.push(Ga.toJSON(n[e]));
    return r;
  }
  static CreateFromMorphTargetSequence(e, t, n, r) {
    let i = t.length,
      a = [];
    for (let e = 0; e < i; e++) {
      let o = [],
        s = [];
      (o.push((e + i - 1) % i, e, (e + 1) % i), s.push(0, 1, 0));
      let c = Pa(o);
      ((o = Fa(o, 1, c)),
        (s = Fa(s, 1, c)),
        !r && o[0] === 0 && (o.push(i), s.push(s[0])),
        a.push(
          new Ya(`.morphTargetInfluences[` + t[e].name + `]`, o, s).scale(
            1 / n,
          ),
        ));
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      let t = e;
      n = (t.geometry && t.geometry.animations) || t.animations;
    }
    for (let e = 0; e < n.length; e++) if (n[e].name === t) return n[e];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    let r = {},
      i = /^([\w-]*?)([\d]+)$/;
    for (let t = 0, n = e.length; t < n; t++) {
      let n = e[t],
        a = n.name.match(i);
      if (a && a.length > 1) {
        let e = a[1],
          t = r[e];
        (t || (r[e] = t = []), t.push(n));
      }
    }
    let a = [];
    for (let e in r) a.push(this.CreateFromMorphTargetSequence(e, r[e], t, n));
    return a;
  }
  resetDuration() {
    let e = this.tracks,
      t = 0;
    for (let n = 0, r = e.length; n !== r; ++n) {
      let e = this.tracks[n];
      t = Math.max(t, e.times[e.times.length - 1]);
    }
    return ((this.duration = t), this);
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e &&= this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    let e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    let t = new this.constructor(this.name, this.duration, e, this.blendMode);
    return ((t.userData = JSON.parse(JSON.stringify(this.userData))), t);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
};
function to(e) {
  switch (e.toLowerCase()) {
    case `scalar`:
    case `double`:
    case `float`:
    case `number`:
    case `integer`:
      return Ya;
    case `vector`:
    case `vector2`:
    case `vector3`:
    case `vector4`:
      return $a;
    case `color`:
      return Ja;
    case `quaternion`:
      return Za;
    case `bool`:
    case `boolean`:
      return qa;
    case `string`:
      return Qa;
  }
  throw Error(`THREE.KeyframeTrack: Unsupported typeName: ` + e);
}
function no(e) {
  if (e.type === void 0)
    throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);
  let t = to(e.type);
  if (e.times === void 0) {
    let t = [],
      n = [];
    (Ia(e.keys, t, n, `value`), (e.times = t), (e.values = n));
  }
  let n;
  return (
    (n =
      t.parse === void 0
        ? new t(e.name, e.times, e.values, e.interpolation)
        : t.parse(e)),
    Na(e.settings) &&
      (n.settings = {
        inTangents: Ma(e.settings.inTangents, Float32Array),
        outTangents: Ma(e.settings.outTangents, Float32Array),
      }),
    n
  );
}
var ro = {
  enabled: !1,
  files: {},
  add: function (e, t) {
    this.enabled !== !1 && (io(e) || (this.files[e] = t));
  },
  get: function (e) {
    if (this.enabled !== !1 && !io(e)) return this.files[e];
  },
  remove: function (e) {
    delete this.files[e];
  },
  clear: function () {
    this.files = {};
  },
};
function io(e) {
  try {
    let t = e.slice(e.indexOf(`:`) + 1);
    return new URL(t).protocol === `blob:`;
  } catch {
    return !1;
  }
}
var ao = new (class {
    constructor(e, t, n) {
      let r = this,
        i = !1,
        a = 0,
        o = 0,
        s,
        c = [];
      ((this.onStart = void 0),
        (this.onLoad = e),
        (this.onProgress = t),
        (this.onError = n),
        (this._abortController = null),
        (this.itemStart = function (e) {
          (o++,
            i === !1 && r.onStart !== void 0 && r.onStart(e, a, o),
            (i = !0));
        }),
        (this.itemEnd = function (e) {
          (a++,
            r.onProgress !== void 0 && r.onProgress(e, a, o),
            a === o && ((i = !1), r.onLoad !== void 0 && r.onLoad()));
        }),
        (this.itemError = function (e) {
          r.onError !== void 0 && r.onError(e);
        }),
        (this.resolveURL = function (e) {
          return ((e = e.normalize(`NFC`)), s ? s(e) : e);
        }),
        (this.setURLModifier = function (e) {
          return ((s = e), this);
        }),
        (this.addHandler = function (e, t) {
          return (c.push(e, t), this);
        }),
        (this.removeHandler = function (e) {
          let t = c.indexOf(e);
          return (t !== -1 && c.splice(t, 2), this);
        }),
        (this.getHandler = function (e) {
          for (let t = 0, n = c.length; t < n; t += 2) {
            let n = c[t],
              r = c[t + 1];
            if ((n.global && (n.lastIndex = 0), n.test(e))) return r;
          }
          return null;
        }),
        (this.abort = function () {
          return (
            this.abortController.abort(),
            (this._abortController = null),
            this
          );
        }));
    }
    get abortController() {
      return (
        (this._abortController ||= new AbortController()),
        this._abortController
      );
    }
  })(),
  oo = class {
    constructor(e) {
      ((this.manager = e === void 0 ? ao : e),
        (this.crossOrigin = `anonymous`),
        (this.withCredentials = !1),
        (this.path = ``),
        (this.resourcePath = ``),
        (this.requestHeader = {}),
        typeof __THREE_DEVTOOLS__ < `u` &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent(`observe`, { detail: this }),
          ));
    }
    load() {}
    loadAsync(e, t) {
      let n = this;
      return new Promise(function (r, i) {
        n.load(e, r, t, i);
      });
    }
    parse() {}
    setCrossOrigin(e) {
      return ((this.crossOrigin = e), this);
    }
    setWithCredentials(e) {
      return ((this.withCredentials = e), this);
    }
    setPath(e) {
      return ((this.path = e), this);
    }
    setResourcePath(e) {
      return ((this.resourcePath = e), this);
    }
    setRequestHeader(e) {
      return ((this.requestHeader = e), this);
    }
    abort() {
      return this;
    }
  };
oo.DEFAULT_MATERIAL_NAME = `__DEFAULT`;
var so = {},
  co = class extends Error {
    constructor(e, t) {
      (super(e), (this.response = t));
    }
  },
  lo = class extends oo {
    constructor(e) {
      (super(e),
        (this.mimeType = ``),
        (this.responseType = ``),
        (this._abortController = new AbortController()));
    }
    load(e, t, n, r) {
      (e === void 0 && (e = ``),
        this.path !== void 0 && (e = this.path + e),
        (e = this.manager.resolveURL(e)));
      let i = ro.get(`file:${e}`);
      if (i !== void 0) {
        (this.manager.itemStart(e),
          setTimeout(() => {
            (t && t(i), this.manager.itemEnd(e));
          }, 0));
        return;
      }
      if (so[e] !== void 0) {
        so[e].push({ onLoad: t, onProgress: n, onError: r });
        return;
      }
      ((so[e] = []), so[e].push({ onLoad: t, onProgress: n, onError: r }));
      let a = new Request(e, {
          headers: new Headers(this.requestHeader),
          credentials: this.withCredentials ? `include` : `same-origin`,
          signal:
            typeof AbortSignal.any == `function`
              ? AbortSignal.any([
                  this._abortController.signal,
                  this.manager.abortController.signal,
                ])
              : this._abortController.signal,
        }),
        o = this.mimeType,
        s = this.responseType;
      (fetch(a)
        .then((t) => {
          if (t.status === 200 || t.status === 0) {
            if (
              (t.status === 0 && B(`FileLoader: HTTP Status 0 received.`),
              typeof ReadableStream > `u` ||
                t.body === void 0 ||
                t.body.getReader === void 0)
            )
              return t;
            let n = so[e],
              r = t.body.getReader(),
              i =
                t.headers.get(`X-File-Size`) || t.headers.get(`Content-Length`),
              a = i ? parseInt(i) : 0,
              o = a !== 0,
              s = 0,
              c = new ReadableStream({
                start(e) {
                  t();
                  function t() {
                    r.read().then(
                      ({ done: r, value: i }) => {
                        if (r) e.close();
                        else {
                          s += i.byteLength;
                          let r = new ProgressEvent(`progress`, {
                            lengthComputable: o,
                            loaded: s,
                            total: a,
                          });
                          for (let e = 0, t = n.length; e < t; e++) {
                            let t = n[e];
                            t.onProgress && t.onProgress(r);
                          }
                          (e.enqueue(i), t());
                        }
                      },
                      (t) => {
                        e.error(t);
                      },
                    );
                  }
                },
              });
            return new Response(c);
          }
          throw new co(
            `fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,
            t,
          );
        })
        .then((e) => {
          switch (s) {
            case `arraybuffer`:
              return e.arrayBuffer();
            case `blob`:
              return e.blob();
            case `document`:
              return e
                .text()
                .then((e) => new DOMParser().parseFromString(e, o));
            case `json`:
              return e.json();
            default:
              if (o === ``) return e.text();
              {
                let t = /charset="?([^;"\s]*)"?/i.exec(o),
                  n = t && t[1] ? t[1].toLowerCase() : void 0,
                  r = new TextDecoder(n);
                return e.arrayBuffer().then((e) => r.decode(e));
              }
          }
        })
        .then((t) => {
          ro.add(`file:${e}`, t);
          let n = so[e];
          delete so[e];
          for (let e = 0, r = n.length; e < r; e++) {
            let r = n[e];
            r.onLoad && r.onLoad(t);
          }
        })
        .catch((t) => {
          let n = so[e];
          if (n === void 0) throw (this.manager.itemError(e), t);
          delete so[e];
          for (let e = 0, r = n.length; e < r; e++) {
            let r = n[e];
            r.onError && r.onError(t);
          }
          this.manager.itemError(e);
        })
        .finally(() => {
          this.manager.itemEnd(e);
        }),
        this.manager.itemStart(e));
    }
    setResponseType(e) {
      return ((this.responseType = e), this);
    }
    setMimeType(e) {
      return ((this.mimeType = e), this);
    }
    abort() {
      return (
        this._abortController.abort(),
        (this._abortController = new AbortController()),
        this
      );
    }
  },
  uo = new WeakMap(),
  fo = class extends oo {
    constructor(e) {
      super(e);
    }
    load(e, t, n, r) {
      (this.path !== void 0 && (e = this.path + e),
        (e = this.manager.resolveURL(e)));
      let i = this,
        a = ro.get(`image:${e}`);
      if (a !== void 0) {
        if (a.complete === !0)
          (i.manager.itemStart(e),
            setTimeout(function () {
              (t && t(a), i.manager.itemEnd(e));
            }, 0));
        else {
          let e = uo.get(a);
          (e === void 0 && ((e = []), uo.set(a, e)),
            e.push({ onLoad: t, onError: r }));
        }
        return a;
      }
      let o = tt(`img`);
      function s() {
        (l(), t && t(this));
        let n = uo.get(this) || [];
        for (let e = 0; e < n.length; e++) {
          let t = n[e];
          t.onLoad && t.onLoad(this);
        }
        (uo.delete(this), i.manager.itemEnd(e));
      }
      function c(t) {
        (l(), r && r(t), ro.remove(`image:${e}`));
        let n = uo.get(this) || [];
        for (let e = 0; e < n.length; e++) {
          let r = n[e];
          r.onError && r.onError(t);
        }
        (uo.delete(this), i.manager.itemError(e), i.manager.itemEnd(e));
      }
      function l() {
        (o.removeEventListener(`load`, s, !1),
          o.removeEventListener(`error`, c, !1));
      }
      return (
        o.addEventListener(`load`, s, !1),
        o.addEventListener(`error`, c, !1),
        e.slice(0, 5) !== `data:` &&
          this.crossOrigin !== void 0 &&
          (o.crossOrigin = this.crossOrigin),
        ro.add(`image:${e}`, o),
        i.manager.itemStart(e),
        (o.src = e),
        o
      );
    }
  },
  po = class extends oo {
    constructor(e) {
      super(e);
    }
    load(e, t, n, r) {
      let i = new Qt(),
        a = new fo(this.manager);
      return (
        a.setCrossOrigin(this.crossOrigin),
        a.setPath(this.path),
        a.load(
          e,
          function (e) {
            ((i.image = e), (i.needsUpdate = !0), t !== void 0 && t(i));
          },
          n,
          r,
        ),
        i
      );
    }
  },
  mo = class extends jn {
    constructor(e, t = 1) {
      (super(),
        (this.isLight = !0),
        (this.type = `Light`),
        (this.color = new J(e)),
        (this.intensity = t));
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        this.color.copy(e.color),
        (this.intensity = e.intensity),
        this
      );
    }
    toJSON(e) {
      let t = super.toJSON(e);
      return (
        (t.object.color = this.color.getHex()),
        (t.object.intensity = this.intensity),
        t
      );
    }
  },
  ho = new q(),
  go = new W(),
  _o = new W(),
  vo = class {
    constructor(e) {
      ((this.camera = e),
        (this.intensity = 1),
        (this.bias = 0),
        (this.biasNode = null),
        (this.normalBias = 0),
        (this.radius = 1),
        (this.blurSamples = 8),
        (this.mapSize = new U(512, 512)),
        (this.mapType = g),
        (this.map = null),
        (this.mapPass = null),
        (this.matrix = new q()),
        (this.autoUpdate = !0),
        (this.needsUpdate = !1),
        (this._frustum = new Li()),
        (this._frameExtents = new U(1, 1)),
        (this._viewportCount = 1),
        (this._viewports = [new $t(0, 0, 1, 1)]));
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getCamera() {
      return this.camera;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(e) {
      let t = this.camera;
      (go.setFromMatrixPosition(e.matrixWorld),
        t.position.copy(go),
        _o.setFromMatrixPosition(e.target.matrixWorld),
        t.lookAt(_o),
        t.updateMatrixWorld(),
        this._updateMatrix(t, this.matrix, this._frustum));
    }
    _updateMatrix(e, t, n, r) {
      (ho.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        n.setFromProjectionMatrix(ho, e.coordinateSystem, e.reversedDepth));
      let i = this._frameExtents,
        a = r ? r.z / i.x : 1,
        o = r ? r.w / i.y : 1,
        s = r ? r.x / i.x : 0,
        c = r ? r.y / i.y : 0;
      (e.coordinateSystem === 2001 || e.reversedDepth
        ? t.set(
            0.5 * a,
            0,
            0,
            0.5 * a + s,
            0,
            0.5 * o,
            0,
            0.5 * o + c,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
          )
        : t.set(
            0.5 * a,
            0,
            0,
            0.5 * a + s,
            0,
            0.5 * o,
            0,
            0.5 * o + c,
            0,
            0,
            0.5,
            0.5,
            0,
            0,
            0,
            1,
          ),
        t.multiply(ho));
    }
    getViewport(e) {
      return this._viewports[e];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      (this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose());
    }
    copy(e) {
      return (
        (this.camera = e.camera.clone()),
        (this.intensity = e.intensity),
        (this.bias = e.bias),
        (this.radius = e.radius),
        (this.autoUpdate = e.autoUpdate),
        (this.needsUpdate = e.needsUpdate),
        (this.normalBias = e.normalBias),
        (this.blurSamples = e.blurSamples),
        this.mapSize.copy(e.mapSize),
        (this.biasNode = e.biasNode),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      let e = {};
      return (
        (e.intensity = this.intensity),
        (e.bias = this.bias),
        (e.normalBias = this.normalBias),
        (e.radius = this.radius),
        (e.blurSamples = this.blurSamples),
        (e.mapSize = this.mapSize.toArray()),
        (e.camera = this.camera.toJSON(!1).object),
        delete e.camera.matrix,
        e
      );
    }
  },
  yo = new W(),
  bo = new It(),
  xo = new W(),
  So = class extends jn {
    constructor() {
      (super(),
        (this.isCamera = !0),
        (this.type = `Camera`),
        (this.matrixWorldInverse = new q()),
        (this.projectionMatrix = new q()),
        (this.projectionMatrixInverse = new q()),
        (this.coordinateSystem = Qe),
        (this._reversedDepth = !1));
    }
    get reversedDepth() {
      return this._reversedDepth;
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        this.matrixWorldInverse.copy(e.matrixWorldInverse),
        this.projectionMatrix.copy(e.projectionMatrix),
        this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
        (this.coordinateSystem = e.coordinateSystem),
        this
      );
    }
    getWorldDirection(e) {
      return super.getWorldDirection(e).negate();
    }
    updateMatrixWorld(e) {
      (super.updateMatrixWorld(e),
        this.matrixWorld.decompose(yo, bo, xo),
        xo.x === 1 && xo.y === 1 && xo.z === 1
          ? this.matrixWorldInverse.copy(this.matrixWorld).invert()
          : this.matrixWorldInverse.compose(yo, bo, xo.set(1, 1, 1)).invert());
    }
    updateWorldMatrix(e, t, n = !1) {
      (super.updateWorldMatrix(e, t, n),
        this.matrixWorld.decompose(yo, bo, xo),
        xo.x === 1 && xo.y === 1 && xo.z === 1
          ? this.matrixWorldInverse.copy(this.matrixWorld).invert()
          : this.matrixWorldInverse.compose(yo, bo, xo.set(1, 1, 1)).invert());
    }
    clone() {
      return new this.constructor().copy(this);
    }
  },
  Co = new W(),
  wo = new U(),
  To = new U(),
  Eo = class extends So {
    constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
      (super(),
        (this.isPerspectiveCamera = !0),
        (this.type = `PerspectiveCamera`),
        (this.fov = e),
        (this.zoom = 1),
        (this.near = n),
        (this.far = r),
        (this.focus = 10),
        (this.aspect = t),
        (this.view = null),
        (this.filmGauge = 35),
        (this.filmOffset = 0),
        this.updateProjectionMatrix());
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.fov = e.fov),
        (this.zoom = e.zoom),
        (this.near = e.near),
        (this.far = e.far),
        (this.focus = e.focus),
        (this.aspect = e.aspect),
        (this.view = e.view === null ? null : Object.assign({}, e.view)),
        (this.filmGauge = e.filmGauge),
        (this.filmOffset = e.filmOffset),
        this
      );
    }
    setFocalLength(e) {
      let t = (0.5 * this.getFilmHeight()) / e;
      ((this.fov = pt * 2 * Math.atan(t)), this.updateProjectionMatrix());
    }
    getFocalLength() {
      let e = Math.tan(ft * 0.5 * this.fov);
      return (0.5 * this.getFilmHeight()) / e;
    }
    getEffectiveFOV() {
      return pt * 2 * Math.atan(Math.tan(ft * 0.5 * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    getViewBounds(e, t, n) {
      (Co.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
        t.set(Co.x, Co.y).multiplyScalar(-e / Co.z),
        Co.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
        n.set(Co.x, Co.y).multiplyScalar(-e / Co.z));
    }
    getViewSize(e, t) {
      return (this.getViewBounds(e, wo, To), t.subVectors(To, wo));
    }
    setViewOffset(e, t, n, r, i, a) {
      ((this.aspect = e / t),
        this.view === null &&
          (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1,
          }),
        (this.view.enabled = !0),
        (this.view.fullWidth = e),
        (this.view.fullHeight = t),
        (this.view.offsetX = n),
        (this.view.offsetY = r),
        (this.view.width = i),
        (this.view.height = a),
        this.updateProjectionMatrix());
    }
    clearViewOffset() {
      (this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix());
    }
    updateProjectionMatrix() {
      let e = this.near,
        t = (e * Math.tan(ft * 0.5 * this.fov)) / this.zoom,
        n = 2 * t,
        r = this.aspect * n,
        i = -0.5 * r,
        a = this.view;
      if (this.view !== null && this.view.enabled) {
        let e = a.fullWidth,
          o = a.fullHeight;
        ((i += (a.offsetX * r) / e),
          (t -= (a.offsetY * n) / o),
          (r *= a.width / e),
          (n *= a.height / o));
      }
      let o = this.filmOffset;
      (o !== 0 && (i += (e * o) / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(
          i,
          i + r,
          t,
          t - n,
          e,
          this.far,
          this.coordinateSystem,
          this.reversedDepth,
        ),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
    }
    toJSON(e) {
      let t = super.toJSON(e);
      return (
        (t.object.fov = this.fov),
        (t.object.zoom = this.zoom),
        (t.object.near = this.near),
        (t.object.far = this.far),
        (t.object.focus = this.focus),
        (t.object.aspect = this.aspect),
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        (t.object.filmGauge = this.filmGauge),
        (t.object.filmOffset = this.filmOffset),
        t
      );
    }
  },
  Do = class extends vo {
    constructor() {
      (super(new Eo(50, 1, 0.5, 500)),
        (this.isSpotLightShadow = !0),
        (this.focus = 1),
        (this.aspect = 1));
    }
    updateMatrices(e) {
      let t = this.camera,
        n = pt * 2 * e.angle * this.focus,
        r = (this.mapSize.width / this.mapSize.height) * this.aspect,
        i = e.distance || t.far;
      ((n !== t.fov || r !== t.aspect || i !== t.far) &&
        ((t.fov = n), (t.aspect = r), (t.far = i), t.updateProjectionMatrix()),
        super.updateMatrices(e));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.focus = e.focus),
        (this.aspect = e.aspect),
        this
      );
    }
    toJSON() {
      let e = super.toJSON();
      return ((e.focus = this.focus), (e.aspect = this.aspect), e);
    }
  },
  Oo = class extends mo {
    constructor(e, t, n = 0, r = Math.PI / 3, i = 0, a = 2) {
      (super(e, t),
        (this.isSpotLight = !0),
        (this.type = `SpotLight`),
        this.position.copy(jn.DEFAULT_UP),
        this.updateMatrix(),
        (this.target = new jn()),
        (this.distance = n),
        (this.angle = r),
        (this.penumbra = i),
        (this.decay = a),
        (this.map = null),
        (this.shadow = new Do()));
    }
    get power() {
      return this.intensity * Math.PI;
    }
    set power(e) {
      this.intensity = e / Math.PI;
    }
    dispose() {
      (super.dispose(), this.shadow.dispose());
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.distance = e.distance),
        (this.angle = e.angle),
        (this.penumbra = e.penumbra),
        (this.decay = e.decay),
        (this.target = e.target.clone()),
        (this.map = e.map),
        (this.shadow = e.shadow.clone()),
        this
      );
    }
    toJSON(e) {
      let t = super.toJSON(e);
      return (
        (t.object.distance = this.distance),
        (t.object.angle = this.angle),
        (t.object.decay = this.decay),
        (t.object.penumbra = this.penumbra),
        (t.object.target = this.target.uuid),
        this.map &&
          this.map.isTexture &&
          (t.object.map = this.map.toJSON(e).uuid),
        (t.object.shadow = this.shadow.toJSON()),
        t
      );
    }
  },
  ko = class extends vo {
    constructor() {
      (super(new Eo(90, 1, 0.5, 500)), (this.isPointLightShadow = !0));
    }
  },
  Ao = class extends mo {
    constructor(e, t, n = 0, r = 2) {
      (super(e, t),
        (this.isPointLight = !0),
        (this.type = `PointLight`),
        (this.distance = n),
        (this.decay = r),
        (this.shadow = new ko()));
    }
    get power() {
      return this.intensity * 4 * Math.PI;
    }
    set power(e) {
      this.intensity = e / (4 * Math.PI);
    }
    dispose() {
      (super.dispose(), this.shadow.dispose());
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.distance = e.distance),
        (this.decay = e.decay),
        (this.shadow = e.shadow.clone()),
        this
      );
    }
    toJSON(e) {
      let t = super.toJSON(e);
      return (
        (t.object.distance = this.distance),
        (t.object.decay = this.decay),
        (t.object.shadow = this.shadow.toJSON()),
        t
      );
    }
  },
  jo = class extends So {
    constructor(e = -1, t = 1, n = 1, r = -1, i = 0.1, a = 2e3) {
      (super(),
        (this.isOrthographicCamera = !0),
        (this.type = `OrthographicCamera`),
        (this.zoom = 1),
        (this.view = null),
        (this.left = e),
        (this.right = t),
        (this.top = n),
        (this.bottom = r),
        (this.near = i),
        (this.far = a),
        this.updateProjectionMatrix());
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.left = e.left),
        (this.right = e.right),
        (this.top = e.top),
        (this.bottom = e.bottom),
        (this.near = e.near),
        (this.far = e.far),
        (this.zoom = e.zoom),
        (this.view = e.view === null ? null : Object.assign({}, e.view)),
        this
      );
    }
    setViewOffset(e, t, n, r, i, a) {
      (this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
        (this.view.enabled = !0),
        (this.view.fullWidth = e),
        (this.view.fullHeight = t),
        (this.view.offsetX = n),
        (this.view.offsetY = r),
        (this.view.width = i),
        (this.view.height = a),
        this.updateProjectionMatrix());
    }
    clearViewOffset() {
      (this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix());
    }
    updateProjectionMatrix() {
      let e = (this.right - this.left) / (2 * this.zoom),
        t = (this.top - this.bottom) / (2 * this.zoom),
        n = (this.right + this.left) / 2,
        r = (this.top + this.bottom) / 2,
        i = n - e,
        a = n + e,
        o = r + t,
        s = r - t;
      if (this.view !== null && this.view.enabled) {
        let e = (this.right - this.left) / this.view.fullWidth / this.zoom,
          t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        ((i += e * this.view.offsetX),
          (a = i + e * this.view.width),
          (o -= t * this.view.offsetY),
          (s = o - t * this.view.height));
      }
      (this.projectionMatrix.makeOrthographic(
        i,
        a,
        o,
        s,
        this.near,
        this.far,
        this.coordinateSystem,
        this.reversedDepth,
      ),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
    }
    toJSON(e) {
      let t = super.toJSON(e);
      return (
        (t.object.zoom = this.zoom),
        (t.object.left = this.left),
        (t.object.right = this.right),
        (t.object.top = this.top),
        (t.object.bottom = this.bottom),
        (t.object.near = this.near),
        (t.object.far = this.far),
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        t
      );
    }
  },
  Mo = class extends vo {
    constructor() {
      (super(new jo(-5, 5, 5, -5, 0.5, 500)),
        (this.isDirectionalLightShadow = !0));
    }
  },
  No = class extends mo {
    constructor(e, t) {
      (super(e, t),
        (this.isDirectionalLight = !0),
        (this.type = `DirectionalLight`),
        this.position.copy(jn.DEFAULT_UP),
        this.updateMatrix(),
        (this.target = new jn()),
        (this.shadow = new Mo()));
    }
    dispose() {
      (super.dispose(), this.shadow.dispose());
    }
    copy(e) {
      return (
        super.copy(e),
        (this.target = e.target.clone()),
        (this.shadow = e.shadow.clone()),
        this
      );
    }
    toJSON(e) {
      let t = super.toJSON(e);
      return (
        (t.object.shadow = this.shadow.toJSON()),
        (t.object.target = this.target.uuid),
        t
      );
    }
  },
  Po = class {
    static extractUrlBase(e) {
      let t = e.lastIndexOf(`/`);
      return t === -1 ? `./` : e.slice(0, t + 1);
    }
    static resolveURL(e, t) {
      return typeof e != `string` || e === ``
        ? ``
        : (/^https?:\/\//i.test(t) &&
            /^\//.test(e) &&
            (t = t.replace(/(^https?:\/\/[^\/]+).*/i, `$1`)),
          /^(https?:)?\/\//i.test(e) ||
          /^data:.*,.*$/i.test(e) ||
          /^blob:.*$/i.test(e)
            ? e
            : t + e);
    }
  },
  Fo = class extends Pr {
    constructor() {
      (super(),
        (this.isInstancedBufferGeometry = !0),
        (this.type = `InstancedBufferGeometry`),
        (this.instanceCount = 1 / 0));
    }
    copy(e) {
      return (super.copy(e), (this.instanceCount = e.instanceCount), this);
    }
    toJSON() {
      let e = super.toJSON();
      return (
        (e.instanceCount = this.instanceCount),
        (e.isInstancedBufferGeometry = !0),
        e
      );
    }
  },
  Io = new WeakMap(),
  Lo = class extends oo {
    constructor(e) {
      (super(e),
        (this.isImageBitmapLoader = !0),
        typeof createImageBitmap > `u` &&
          B(`ImageBitmapLoader: createImageBitmap() not supported.`),
        typeof fetch > `u` && B(`ImageBitmapLoader: fetch() not supported.`),
        (this.options = { premultiplyAlpha: `none` }),
        (this._abortController = new AbortController()));
    }
    setOptions(e) {
      return ((this.options = e), this);
    }
    load(e, t, n, r) {
      (e === void 0 && (e = ``),
        this.path !== void 0 && (e = this.path + e),
        (e = this.manager.resolveURL(e)));
      let i = this,
        a = ro.get(`image-bitmap:${e}`);
      if (a !== void 0) {
        if ((i.manager.itemStart(e), a.then)) {
          a.then((n) => {
            Io.has(a) === !0
              ? (r && r(Io.get(a)),
                i.manager.itemError(e),
                i.manager.itemEnd(e))
              : (t && t(n), i.manager.itemEnd(e));
          });
          return;
        }
        setTimeout(function () {
          (t && t(a), i.manager.itemEnd(e));
        }, 0);
        return;
      }
      let o = {};
      ((o.credentials =
        this.crossOrigin === `anonymous` ? `same-origin` : `include`),
        (o.headers = this.requestHeader),
        (o.signal =
          typeof AbortSignal.any == `function`
            ? AbortSignal.any([
                this._abortController.signal,
                this.manager.abortController.signal,
              ])
            : this._abortController.signal));
      let s = fetch(e, o)
        .then(function (e) {
          return e.blob();
        })
        .then(function (e) {
          return createImageBitmap(
            e,
            Object.assign({}, i.options, { colorSpaceConversion: `none` }),
          );
        })
        .then(function (n) {
          return (
            ro.add(`image-bitmap:${e}`, n),
            t && t(n),
            i.manager.itemEnd(e),
            n
          );
        })
        .catch(function (t) {
          (r && r(t),
            Io.set(s, t),
            ro.remove(`image-bitmap:${e}`),
            i.manager.itemError(e),
            i.manager.itemEnd(e));
        });
      (ro.add(`image-bitmap:${e}`, s), i.manager.itemStart(e));
    }
    abort() {
      return (
        this._abortController.abort(),
        (this._abortController = new AbortController()),
        this
      );
    }
  },
  Ro = -90,
  zo = 1,
  Bo = class extends jn {
    constructor(e, t, n) {
      (super(),
        (this.type = `CubeCamera`),
        (this.renderTarget = n),
        (this.coordinateSystem = null),
        (this.activeMipmapLevel = 0));
      let r = new Eo(Ro, zo, e, t);
      ((r.layers = this.layers), this.add(r));
      let i = new Eo(Ro, zo, e, t);
      ((i.layers = this.layers), this.add(i));
      let a = new Eo(Ro, zo, e, t);
      ((a.layers = this.layers), this.add(a));
      let o = new Eo(Ro, zo, e, t);
      ((o.layers = this.layers), this.add(o));
      let s = new Eo(Ro, zo, e, t);
      ((s.layers = this.layers), this.add(s));
      let c = new Eo(Ro, zo, e, t);
      ((c.layers = this.layers), this.add(c));
    }
    updateCoordinateSystem() {
      let e = this.coordinateSystem,
        t = this.children.concat(),
        [n, r, i, a, o, s] = t;
      for (let e of t) this.remove(e);
      if (e === 2e3)
        (n.up.set(0, 1, 0),
          n.lookAt(1, 0, 0),
          r.up.set(0, 1, 0),
          r.lookAt(-1, 0, 0),
          i.up.set(0, 0, -1),
          i.lookAt(0, 1, 0),
          a.up.set(0, 0, 1),
          a.lookAt(0, -1, 0),
          o.up.set(0, 1, 0),
          o.lookAt(0, 0, 1),
          s.up.set(0, 1, 0),
          s.lookAt(0, 0, -1));
      else if (e === 2001)
        (n.up.set(0, -1, 0),
          n.lookAt(-1, 0, 0),
          r.up.set(0, -1, 0),
          r.lookAt(1, 0, 0),
          i.up.set(0, 0, 1),
          i.lookAt(0, 1, 0),
          a.up.set(0, 0, -1),
          a.lookAt(0, -1, 0),
          o.up.set(0, -1, 0),
          o.lookAt(0, 0, 1),
          s.up.set(0, -1, 0),
          s.lookAt(0, 0, -1));
      else
        throw Error(
          `THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: ` +
            e,
        );
      for (let e of t) (this.add(e), e.updateMatrixWorld());
    }
    update(e, t) {
      this.parent === null && this.updateMatrixWorld();
      let { renderTarget: n, activeMipmapLevel: r } = this;
      this.coordinateSystem !== e.coordinateSystem &&
        ((this.coordinateSystem = e.coordinateSystem),
        this.updateCoordinateSystem());
      let [i, a, o, s, c, l] = this.children,
        u = e.getRenderTarget(),
        d = e.getActiveCubeFace(),
        f = e.getActiveMipmapLevel(),
        p = e.xr.enabled;
      e.xr.enabled = !1;
      let m = n.texture.generateMipmaps;
      n.texture.generateMipmaps = !1;
      let h = !1;
      ((h =
        e.isWebGLRenderer === !0
          ? e.state.buffers.depth.getReversed()
          : e.reversedDepthBuffer),
        e.setRenderTarget(n, 0, r),
        h && e.autoClear === !1 && e.clearDepth(),
        e.render(t, i),
        e.setRenderTarget(n, 1, r),
        h && e.autoClear === !1 && e.clearDepth(),
        e.render(t, a),
        e.setRenderTarget(n, 2, r),
        h && e.autoClear === !1 && e.clearDepth(),
        e.render(t, o),
        e.setRenderTarget(n, 3, r),
        h && e.autoClear === !1 && e.clearDepth(),
        e.render(t, s),
        e.setRenderTarget(n, 4, r),
        h && e.autoClear === !1 && e.clearDepth(),
        e.render(t, c),
        (n.texture.generateMipmaps = m),
        e.setRenderTarget(n, 5, r),
        h && e.autoClear === !1 && e.clearDepth(),
        e.render(t, l),
        e.setRenderTarget(u, d, f),
        (e.xr.enabled = p),
        (n.texture.needsPMREMUpdate = !0));
    }
  },
  Vo = class extends Eo {
    constructor(e = []) {
      (super(),
        (this.isArrayCamera = !0),
        (this.isMultiViewCamera = !1),
        (this.cameras = e));
    }
  },
  Ho = `\\[\\]\\.:\\/`,
  Uo = RegExp(`[\\[\\]\\.:\\/]`, `g`),
  Wo = `[^\\[\\]\\.:\\/]`,
  Go = `[^` + Ho.replace(`\\.`, ``) + `]`,
  Ko = `((?:WC+[\\/:])*)`.replace(`WC`, Wo),
  qo = `(WCOD+)?`.replace(`WCOD`, Go),
  Jo = `(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`, Wo),
  Yo = `\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`, Wo),
  Xo = RegExp(`^` + Ko + qo + Jo + Yo + `$`),
  Zo = [`material`, `materials`, `bones`, `map`],
  Qo = class {
    constructor(e, t, n) {
      let r = n || $o.parseTrackName(t);
      ((this._targetGroup = e), (this._bindings = e.subscribe_(t, r)));
    }
    getValue(e, t) {
      this.bind();
      let n = this._targetGroup.nCachedObjects_,
        r = this._bindings[n];
      r !== void 0 && r.getValue(e, t);
    }
    setValue(e, t) {
      let n = this._bindings;
      for (
        let r = this._targetGroup.nCachedObjects_, i = n.length;
        r !== i;
        ++r
      )
        n[r].setValue(e, t);
    }
    bind() {
      let e = this._bindings;
      for (
        let t = this._targetGroup.nCachedObjects_, n = e.length;
        t !== n;
        ++t
      )
        e[t].bind();
    }
    unbind() {
      let e = this._bindings;
      for (
        let t = this._targetGroup.nCachedObjects_, n = e.length;
        t !== n;
        ++t
      )
        e[t].unbind();
    }
  },
  $o = class e {
    constructor(t, n, r) {
      ((this.path = n),
        (this.parsedPath = r || e.parseTrackName(n)),
        (this.node = e.findNode(t, this.parsedPath.nodeName)),
        (this.rootNode = t),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound));
    }
    static create(t, n, r) {
      return t && t.isAnimationObjectGroup
        ? new e.Composite(t, n, r)
        : new e(t, n, r);
    }
    static sanitizeNodeName(e) {
      return e.replace(/\s/g, `_`).replace(Uo, ``);
    }
    static parseTrackName(e) {
      let t = Xo.exec(e);
      if (t === null)
        throw Error(`THREE.PropertyBinding: Cannot parse trackName: ` + e);
      let n = {
          nodeName: t[2],
          objectName: t[3],
          objectIndex: t[4],
          propertyName: t[5],
          propertyIndex: t[6],
        },
        r = n.nodeName && n.nodeName.lastIndexOf(`.`);
      if (r !== void 0 && r !== -1) {
        let e = n.nodeName.substring(r + 1);
        Zo.indexOf(e) !== -1 &&
          ((n.nodeName = n.nodeName.substring(0, r)), (n.objectName = e));
      }
      if (n.propertyName === null || n.propertyName.length === 0)
        throw Error(
          `THREE.PropertyBinding: can not parse propertyName from trackName: ` +
            e,
        );
      return n;
    }
    static findNode(e, t) {
      if (
        t === void 0 ||
        t === `` ||
        t === `.` ||
        t === -1 ||
        t === e.name ||
        t === e.uuid
      )
        return e;
      if (e.skeleton) {
        let n = e.skeleton.getBoneByName(t);
        if (n !== void 0) return n;
      }
      if (e.children) {
        let n = function (e) {
            for (let r = 0; r < e.length; r++) {
              let i = e[r];
              if (i.name === t || i.uuid === t) return i;
              let a = n(i.children);
              if (a) return a;
            }
            return null;
          },
          r = n(e.children);
        if (r) return r;
      }
      return null;
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
      e[t] = this.targetObject[this.propertyName];
    }
    _getValue_array(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
    }
    _getValue_arrayElement(e, t) {
      e[t] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(e, t) {
      this.resolvedProperty.toArray(e, t);
    }
    _setValue_direct(e, t) {
      this.targetObject[this.propertyName] = e[t];
    }
    _setValue_direct_setNeedsUpdate(e, t) {
      ((this.targetObject[this.propertyName] = e[t]),
        (this.targetObject.needsUpdate = !0));
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
      ((this.targetObject[this.propertyName] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _setValue_array(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
    }
    _setValue_array_setNeedsUpdate(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
      this.targetObject.needsUpdate = !0;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_arrayElement(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t];
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
      ((this.resolvedProperty[this.propertyIndex] = e[t]),
        (this.targetObject.needsUpdate = !0));
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
      ((this.resolvedProperty[this.propertyIndex] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _setValue_fromArray(e, t) {
      this.resolvedProperty.fromArray(e, t);
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
      (this.resolvedProperty.fromArray(e, t),
        (this.targetObject.needsUpdate = !0));
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
      (this.resolvedProperty.fromArray(e, t),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _getValue_unbound(e, t) {
      (this.bind(), this.getValue(e, t));
    }
    _setValue_unbound(e, t) {
      (this.bind(), this.setValue(e, t));
    }
    bind() {
      let t = this.node,
        n = this.parsedPath,
        r = n.objectName,
        i = n.propertyName,
        a = n.propertyIndex;
      if (
        (t || ((t = e.findNode(this.rootNode, n.nodeName)), (this.node = t)),
        (this.getValue = this._getValue_unavailable),
        (this.setValue = this._setValue_unavailable),
        !t)
      ) {
        B(
          `PropertyBinding: No target node found for track: ` + this.path + `.`,
        );
        return;
      }
      if (r) {
        let e = n.objectIndex;
        switch (r) {
          case `materials`:
            if (!t.material) {
              V(
                `PropertyBinding: Can not bind to material as node does not have a material.`,
                this,
              );
              return;
            }
            if (!t.material.materials) {
              V(
                `PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,
                this,
              );
              return;
            }
            t = t.material.materials;
            break;
          case `bones`:
            if (!t.skeleton) {
              V(
                `PropertyBinding: Can not bind to bones as node does not have a skeleton.`,
                this,
              );
              return;
            }
            t = t.skeleton.bones;
            for (let n = 0; n < t.length; n++)
              if (t[n].name === e) {
                e = n;
                break;
              }
            break;
          case `map`:
            if (`map` in t) {
              t = t.map;
              break;
            }
            if (!t.material) {
              V(
                `PropertyBinding: Can not bind to material as node does not have a material.`,
                this,
              );
              return;
            }
            if (!t.material.map) {
              V(
                `PropertyBinding: Can not bind to material.map as node.material does not have a map.`,
                this,
              );
              return;
            }
            t = t.material.map;
            break;
          default:
            if (t[r] === void 0) {
              V(
                `PropertyBinding: Can not bind to objectName of node undefined.`,
                this,
              );
              return;
            }
            t = t[r];
        }
        if (e !== void 0) {
          if (t[e] === void 0) {
            V(
              `PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,
              this,
              t,
            );
            return;
          }
          t = t[e];
        }
      }
      let o = t[i];
      if (o === void 0) {
        let e = n.nodeName;
        V(
          `PropertyBinding: Trying to update property for track: ` +
            e +
            `.` +
            i +
            ` but it wasn't found.`,
          t,
        );
        return;
      }
      let s = this.Versioning.None;
      ((this.targetObject = t),
        t.isMaterial === !0
          ? (s = this.Versioning.NeedsUpdate)
          : t.isObject3D === !0 &&
            (s = this.Versioning.MatrixWorldNeedsUpdate));
      let c = this.BindingType.Direct;
      if (a !== void 0) {
        if (i === `morphTargetInfluences`) {
          if (!t.geometry) {
            V(
              `PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,
              this,
            );
            return;
          }
          if (!t.geometry.morphAttributes) {
            V(
              `PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,
              this,
            );
            return;
          }
          t.morphTargetDictionary[a] !== void 0 &&
            (a = t.morphTargetDictionary[a]);
        }
        ((c = this.BindingType.ArrayElement),
          (this.resolvedProperty = o),
          (this.propertyIndex = a));
      } else
        o.fromArray !== void 0 && o.toArray !== void 0
          ? ((c = this.BindingType.HasFromToArray), (this.resolvedProperty = o))
          : Array.isArray(o)
            ? ((c = this.BindingType.EntireArray), (this.resolvedProperty = o))
            : (this.propertyName = i);
      ((this.getValue = this.GetterByBindingType[c]),
        (this.setValue = this.SetterByBindingTypeAndVersioning[c][s]));
    }
    unbind() {
      ((this.node = null),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound));
    }
  };
(($o.Composite = Qo),
  ($o.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3,
  }),
  ($o.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2,
  }),
  ($o.prototype.GetterByBindingType = [
    $o.prototype._getValue_direct,
    $o.prototype._getValue_array,
    $o.prototype._getValue_arrayElement,
    $o.prototype._getValue_toArray,
  ]),
  ($o.prototype.SetterByBindingTypeAndVersioning = [
    [
      $o.prototype._setValue_direct,
      $o.prototype._setValue_direct_setNeedsUpdate,
      $o.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      $o.prototype._setValue_array,
      $o.prototype._setValue_array_setNeedsUpdate,
      $o.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      $o.prototype._setValue_arrayElement,
      $o.prototype._setValue_arrayElement_setNeedsUpdate,
      $o.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      $o.prototype._setValue_fromArray,
      $o.prototype._setValue_fromArray_setNeedsUpdate,
      $o.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
    ],
  ]),
  class e {
    static {
      e.prototype.isMatrix2 = !0;
    }
    constructor(e, t, n, r) {
      ((this.elements = [1, 0, 0, 1]), e !== void 0 && this.set(e, t, n, r));
    }
    identity() {
      return (this.set(1, 0, 0, 1), this);
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 4; n++) this.elements[n] = e[n + t];
      return this;
    }
    set(e, t, n, r) {
      let i = this.elements;
      return ((i[0] = e), (i[2] = t), (i[1] = n), (i[3] = r), this);
    }
  });
var es = new U(),
  ts = class {
    constructor(e = new U(1 / 0, 1 / 0), t = new U(-1 / 0, -1 / 0)) {
      ((this.isBox2 = !0), (this.min = e), (this.max = t));
    }
    set(e, t) {
      return (this.min.copy(e), this.max.copy(t), this);
    }
    setFromPoints(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
      return this;
    }
    setFromCenterAndSize(e, t) {
      let n = es.copy(t).multiplyScalar(0.5);
      return (this.min.copy(e).sub(n), this.max.copy(e).add(n), this);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (this.min.copy(e.min), this.max.copy(e.max), this);
    }
    makeEmpty() {
      return (
        (this.min.x = this.min.y = 1 / 0),
        (this.max.x = this.max.y = -1 / 0),
        this
      );
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y;
    }
    getCenter(e) {
      return this.isEmpty()
        ? e.set(0, 0)
        : e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e) {
      return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
    }
    expandByPoint(e) {
      return (this.min.min(e), this.max.max(e), this);
    }
    expandByVector(e) {
      return (this.min.sub(e), this.max.add(e), this);
    }
    expandByScalar(e) {
      return (this.min.addScalar(-e), this.max.addScalar(e), this);
    }
    containsPoint(e) {
      return (
        e.x >= this.min.x &&
        e.x <= this.max.x &&
        e.y >= this.min.y &&
        e.y <= this.max.y
      );
    }
    containsBox(e) {
      return (
        this.min.x <= e.min.x &&
        e.max.x <= this.max.x &&
        this.min.y <= e.min.y &&
        e.max.y <= this.max.y
      );
    }
    getParameter(e, t) {
      return t.set(
        (e.x - this.min.x) / (this.max.x - this.min.x),
        (e.y - this.min.y) / (this.max.y - this.min.y),
      );
    }
    intersectsBox(e) {
      return (
        e.max.x >= this.min.x &&
        e.min.x <= this.max.x &&
        e.max.y >= this.min.y &&
        e.min.y <= this.max.y
      );
    }
    clampPoint(e, t) {
      return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
      return this.clampPoint(e, es).distanceTo(e);
    }
    intersect(e) {
      return (
        this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
      );
    }
    union(e) {
      return (this.min.min(e.min), this.max.max(e.max), this);
    }
    translate(e) {
      return (this.min.add(e), this.max.add(e), this);
    }
    equals(e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    }
  };
function ns(e, t, n, r) {
  let i = rs(r);
  switch (n) {
    case k:
      return e * t;
    case N:
      return ((e * t) / i.components) * i.byteLength;
    case te:
      return ((e * t) / i.components) * i.byteLength;
    case P:
      return ((e * t * 2) / i.components) * i.byteLength;
    case ne:
      return ((e * t * 2) / i.components) * i.byteLength;
    case A:
      return ((e * t * 3) / i.components) * i.byteLength;
    case j:
      return ((e * t * 4) / i.components) * i.byteLength;
    case re:
      return ((e * t * 4) / i.components) * i.byteLength;
    case ie:
    case ae:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case oe:
    case se:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case F:
    case ue:
      return (Math.max(e, 16) * Math.max(t, 8)) / 4;
    case ce:
    case le:
      return (Math.max(e, 8) * Math.max(t, 8)) / 2;
    case de:
    case fe:
    case me:
    case he:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case pe:
    case ge:
    case _e:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case ve:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case ye:
      return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case be:
      return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case xe:
      return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case Se:
      return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Ce:
      return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case we:
      return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case Te:
      return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Ee:
      return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case De:
      return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case Oe:
      return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case ke:
      return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case Ae:
      return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case je:
      return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case Me:
    case I:
    case Ne:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
    case Pe:
    case Fe:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
    case L:
    case Ie:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
  }
  throw Error(`Unable to determine texture byte length for ${n} format.`);
}
function rs(e) {
  switch (e) {
    case g:
    case _:
      return { byteLength: 1, components: 1 };
    case y:
    case v:
    case C:
      return { byteLength: 2, components: 1 };
    case w:
    case T:
      return { byteLength: 2, components: 4 };
    case x:
    case b:
    case S:
      return { byteLength: 4, components: 1 };
    case D:
    case O:
      return { byteLength: 4, components: 3 };
  }
  throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`);
}
(typeof __THREE_DEVTOOLS__ < `u` &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent(`register`, { detail: { revision: `186` } }),
  ),
  typeof window < `u` &&
    (window.__THREE__
      ? B(`WARNING: Multiple instances of Three.js being imported.`)
      : (window.__THREE__ = `186`)));
function is() {
  let e = null,
    t = !1,
    n = null,
    r = null;
  function i(t, a) {
    ((r = e.requestAnimationFrame(i)), n(t, a));
  }
  return {
    start: function () {
      t !== !0 &&
        n !== null &&
        e !== null &&
        ((r = e.requestAnimationFrame(i)), (t = !0));
    },
    stop: function () {
      (e !== null && e.cancelAnimationFrame(r), (t = !1));
    },
    setAnimationLoop: function (e) {
      n = e;
    },
    setContext: function (t) {
      e = t;
    },
  };
}
function as(e) {
  let t = new WeakMap();
  function n(t, n) {
    let r = t.array,
      i = t.usage,
      a = r.byteLength,
      o = e.createBuffer();
    (e.bindBuffer(n, o), e.bufferData(n, r, i), t.onUploadCallback());
    let s;
    if (r instanceof Float32Array) s = e.FLOAT;
    else if (typeof Float16Array < `u` && r instanceof Float16Array)
      s = e.HALF_FLOAT;
    else if (r instanceof Uint16Array)
      s = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
    else if (r instanceof Int16Array) s = e.SHORT;
    else if (r instanceof Uint32Array) s = e.UNSIGNED_INT;
    else if (r instanceof Int32Array) s = e.INT;
    else if (r instanceof Int8Array) s = e.BYTE;
    else if (r instanceof Uint8Array) s = e.UNSIGNED_BYTE;
    else if (r instanceof Uint8ClampedArray) s = e.UNSIGNED_BYTE;
    else
      throw Error(
        `THREE.WebGLAttributes: Unsupported buffer data format: ` + r,
      );
    return {
      buffer: o,
      type: s,
      bytesPerElement: r.BYTES_PER_ELEMENT,
      version: t.version,
      size: a,
    };
  }
  function r(t, n, r) {
    let i = n.array,
      a = n.updateRanges;
    if ((e.bindBuffer(r, t), a.length === 0)) e.bufferSubData(r, 0, i);
    else {
      a.sort((e, t) => e.start - t.start);
      let t = 0;
      for (let e = 1; e < a.length; e++) {
        let n = a[t],
          r = a[e];
        r.start <= n.start + n.count + 1
          ? (n.count = Math.max(n.count, r.start + r.count - n.start))
          : (++t, (a[t] = r));
      }
      a.length = t + 1;
      for (let t = 0, n = a.length; t < n; t++) {
        let n = a[t];
        e.bufferSubData(r, n.start * i.BYTES_PER_ELEMENT, i, n.start, n.count);
      }
      n.clearUpdateRanges();
    }
    n.onUploadCallback();
  }
  function i(e) {
    return (e.isInterleavedBufferAttribute && (e = e.data), t.get(e));
  }
  function a(n) {
    n.isInterleavedBufferAttribute && (n = n.data);
    let r = t.get(n);
    r && (e.deleteBuffer(r.buffer), t.delete(n));
  }
  function o(e, i) {
    if (
      (e.isInterleavedBufferAttribute && (e = e.data), e.isGLBufferAttribute)
    ) {
      let n = t.get(e);
      (!n || n.version < e.version) &&
        t.set(e, {
          buffer: e.buffer,
          type: e.type,
          bytesPerElement: e.elementSize,
          version: e.version,
        });
      return;
    }
    let a = t.get(e);
    if (a === void 0) t.set(e, n(e, i));
    else if (a.version < e.version) {
      if (a.size !== e.array.byteLength)
        throw Error(
          `THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`,
        );
      (r(a.buffer, e, i), (a.version = e.version));
    }
  }
  return { get: i, remove: a, update: o };
}
var Y = {
    alphahash_fragment: `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
    alphahash_pars_fragment: `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
    alphamap_fragment: `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
    alphamap_pars_fragment: `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    alphatest_fragment: `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
    alphatest_pars_fragment: `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
    aomap_fragment: `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
    aomap_pars_fragment: `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
    batching_pars_vertex: `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,
    batching_vertex: `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
    begin_vertex: `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
    beginnormal_vertex: `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
    bsdfs: `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
    iridescence_fragment: `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
    bumpmap_pars_fragment: `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
    clipping_planes_fragment: `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
    clipping_planes_pars_fragment: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
    clipping_planes_pars_vertex: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
    clipping_planes_vertex: `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
    color_fragment: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,
    color_pars_fragment: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,
    color_pars_vertex: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,
    color_vertex: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,
    common: `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
    cube_uv_reflection_fragment: `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
    defaultnormal_vertex: `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,
    displacementmap_pars_vertex: `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
    displacementmap_vertex: `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
    emissivemap_fragment: `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
    emissivemap_pars_fragment: `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
    colorspace_fragment: `gl_FragColor = linearToOutputTexel( gl_FragColor );`,
    colorspace_pars_fragment: `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
    envmap_fragment: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,
    envmap_common_pars_fragment: `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,
    envmap_pars_fragment: `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
    envmap_pars_vertex: `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
    envmap_physical_pars_fragment: `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,
    envmap_vertex: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
    fog_vertex: `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
    fog_pars_vertex: `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
    fog_fragment: `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
    fog_pars_fragment: `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
    gradientmap_pars_fragment: `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
    lightmap_pars_fragment: `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
    lights_lambert_fragment: `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
    lights_lambert_pars_fragment: `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
    lights_pars_begin: `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,
    lights_toon_fragment: `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
    lights_toon_pars_fragment: `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
    lights_phong_fragment: `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
    lights_phong_pars_fragment: `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
    lights_physical_fragment: `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
    lights_physical_pars_fragment: `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
    lights_fragment_begin: `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
    lights_fragment_maps: `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
    lights_fragment_end: `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
    lightprobes_pars_fragment: `#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,
    logdepthbuf_fragment: `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
    logdepthbuf_pars_fragment: `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
    logdepthbuf_pars_vertex: `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
    logdepthbuf_vertex: `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
    map_fragment: `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
    map_pars_fragment: `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
    map_particle_fragment: `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
    map_particle_pars_fragment: `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    metalnessmap_fragment: `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
    metalnessmap_pars_fragment: `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
    morphinstance_vertex: `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
    morphcolor_vertex: `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
    morphnormal_vertex: `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
    morphtarget_pars_vertex: `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
    morphtarget_vertex: `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
    normal_fragment_begin: `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
    normal_fragment_maps: `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
    normal_pars_fragment: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    normal_pars_vertex: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    normal_vertex: `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,
    normalmap_pars_fragment: `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
    clearcoat_normal_fragment_begin: `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
    clearcoat_normal_fragment_maps: `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
    clearcoat_pars_fragment: `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
    iridescence_pars_fragment: `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
    opaque_fragment: `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
    packing: `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,
    premultiplied_alpha_fragment: `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
    project_vertex: `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
    dithering_fragment: `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
    dithering_pars_fragment: `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
    roughnessmap_fragment: `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
    roughnessmap_pars_fragment: `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
    shadowmap_pars_fragment: `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,
    shadowmap_pars_vertex: `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
    shadowmap_vertex: `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
    shadowmask_pars_fragment: `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
    skinbase_vertex: `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
    skinning_pars_vertex: `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
    skinning_vertex: `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
    skinnormal_vertex: `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
    specularmap_fragment: `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
    specularmap_pars_fragment: `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
    tonemapping_fragment: `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
    tonemapping_pars_fragment: `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
    transmission_fragment: `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
    transmission_pars_fragment: `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
    uv_pars_fragment: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
    uv_pars_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
    uv_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
    worldpos_vertex: `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,
    background_vert: `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
    background_frag: `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
    backgroundCube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
    backgroundCube_frag: `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
    cube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
    cube_frag: `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
    depth_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
    depth_frag: `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
    distance_vert: `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
    distance_frag: `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,
    equirect_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
    equirect_frag: `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
    linedashed_vert: `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
    linedashed_frag: `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
    meshbasic_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
    meshbasic_frag: `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    meshlambert_vert: `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    meshlambert_frag: `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    meshmatcap_vert: `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
    meshmatcap_frag: `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    meshnormal_vert: `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
    meshnormal_frag: `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
    meshphong_vert: `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    meshphong_frag: `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    meshphysical_vert: `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
    meshphysical_frag: `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    meshtoon_vert: `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    meshtoon_frag: `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    points_vert: `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
    points_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
    shadow_vert: `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    shadow_frag: `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
    sprite_vert: `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
    sprite_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  },
  X = {
    common: {
      diffuse: { value: new J(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new G() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new G() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new G() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new G() },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
      dfgLUT: { value: null },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new G() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new G() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new G() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new G() },
      normalScale: { value: new U(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new G() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new G() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new G() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new G() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new J(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      sunLights: { value: [], properties: { direction: {}, color: {} } },
      sunLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      sunShadowMatrix: { value: [] },
      sunShadowCascade: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
      probesSH: { value: null },
      probesMin: { value: new W() },
      probesMax: { value: new W() },
      probesResolution: { value: new W() },
    },
    points: {
      diffuse: { value: new J(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new G() },
      alphaTest: { value: 0 },
      uvTransform: { value: new G() },
    },
    sprite: {
      diffuse: { value: new J(16777215) },
      opacity: { value: 1 },
      center: { value: new U(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new G() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new G() },
      alphaTest: { value: 0 },
    },
  },
  os = {
    basic: {
      uniforms: ya([
        X.common,
        X.specularmap,
        X.envmap,
        X.aomap,
        X.lightmap,
        X.fog,
      ]),
      vertexShader: Y.meshbasic_vert,
      fragmentShader: Y.meshbasic_frag,
    },
    lambert: {
      uniforms: ya([
        X.common,
        X.specularmap,
        X.envmap,
        X.aomap,
        X.lightmap,
        X.emissivemap,
        X.bumpmap,
        X.normalmap,
        X.displacementmap,
        X.fog,
        X.lights,
        { emissive: { value: new J(0) }, envMapIntensity: { value: 1 } },
      ]),
      vertexShader: Y.meshlambert_vert,
      fragmentShader: Y.meshlambert_frag,
    },
    phong: {
      uniforms: ya([
        X.common,
        X.specularmap,
        X.envmap,
        X.aomap,
        X.lightmap,
        X.emissivemap,
        X.bumpmap,
        X.normalmap,
        X.displacementmap,
        X.fog,
        X.lights,
        {
          emissive: { value: new J(0) },
          specular: { value: new J(1118481) },
          shininess: { value: 30 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Y.meshphong_vert,
      fragmentShader: Y.meshphong_frag,
    },
    standard: {
      uniforms: ya([
        X.common,
        X.envmap,
        X.aomap,
        X.lightmap,
        X.emissivemap,
        X.bumpmap,
        X.normalmap,
        X.displacementmap,
        X.roughnessmap,
        X.metalnessmap,
        X.fog,
        X.lights,
        {
          emissive: { value: new J(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Y.meshphysical_vert,
      fragmentShader: Y.meshphysical_frag,
    },
    toon: {
      uniforms: ya([
        X.common,
        X.aomap,
        X.lightmap,
        X.emissivemap,
        X.bumpmap,
        X.normalmap,
        X.displacementmap,
        X.gradientmap,
        X.fog,
        X.lights,
        { emissive: { value: new J(0) } },
      ]),
      vertexShader: Y.meshtoon_vert,
      fragmentShader: Y.meshtoon_frag,
    },
    matcap: {
      uniforms: ya([
        X.common,
        X.bumpmap,
        X.normalmap,
        X.displacementmap,
        X.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Y.meshmatcap_vert,
      fragmentShader: Y.meshmatcap_frag,
    },
    points: {
      uniforms: ya([X.points, X.fog]),
      vertexShader: Y.points_vert,
      fragmentShader: Y.points_frag,
    },
    dashed: {
      uniforms: ya([
        X.common,
        X.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Y.linedashed_vert,
      fragmentShader: Y.linedashed_frag,
    },
    depth: {
      uniforms: ya([X.common, X.displacementmap]),
      vertexShader: Y.depth_vert,
      fragmentShader: Y.depth_frag,
    },
    normal: {
      uniforms: ya([
        X.common,
        X.bumpmap,
        X.normalmap,
        X.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Y.meshnormal_vert,
      fragmentShader: Y.meshnormal_frag,
    },
    sprite: {
      uniforms: ya([X.sprite, X.fog]),
      vertexShader: Y.sprite_vert,
      fragmentShader: Y.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new G() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Y.background_vert,
      fragmentShader: Y.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new G() },
      },
      vertexShader: Y.backgroundCube_vert,
      fragmentShader: Y.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Y.cube_vert,
      fragmentShader: Y.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Y.equirect_vert,
      fragmentShader: Y.equirect_frag,
    },
    distance: {
      uniforms: ya([
        X.common,
        X.displacementmap,
        {
          referencePosition: { value: new W() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Y.distance_vert,
      fragmentShader: Y.distance_frag,
    },
    shadow: {
      uniforms: ya([
        X.lights,
        X.fog,
        { color: { value: new J(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Y.shadow_vert,
      fragmentShader: Y.shadow_frag,
    },
  };
os.physical = {
  uniforms: ya([
    os.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new G() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new G() },
      clearcoatNormalScale: { value: new U(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new G() },
      dispersion: { value: 0 },
      retroreflectivity: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new G() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new G() },
      sheen: { value: 0 },
      sheenColor: { value: new J(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new G() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new G() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new G() },
      transmissionSamplerSize: { value: new U() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new G() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new J(0) },
      specularColor: { value: new J(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new G() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new G() },
      anisotropyVector: { value: new U() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new G() },
    },
  ]),
  vertexShader: Y.meshphysical_vert,
  fragmentShader: Y.meshphysical_frag,
};
var ss = { r: 0, b: 0, g: 0 },
  cs = new q(),
  ls = new G();
ls.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function us(e, t, n, r, i, a) {
  let o = new J(0),
    s = i === !0 ? 0 : 1,
    c,
    l,
    u = null,
    d = 0,
    f = null;
  function p(e) {
    let n = e.isScene === !0 ? e.background : null;
    if (n && n.isTexture) {
      let r = e.backgroundBlurriness > 0;
      n = t.get(n, r);
    }
    return n;
  }
  function m(t) {
    let r = !1,
      i = p(t);
    i === null ? g(o, s) : i && i.isColor && (g(i, 1), (r = !0));
    let c = e.xr.getEnvironmentBlendMode();
    (c === `additive`
      ? n.buffers.color.setClear(0, 0, 0, 1, a)
      : c === `alpha-blend` && n.buffers.color.setClear(0, 0, 0, 0, a),
      (e.autoClear || r) &&
        (n.buffers.depth.setTest(!0),
        n.buffers.depth.setMask(!0),
        n.buffers.color.setMask(!0),
        e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil)));
  }
  function h(t, n) {
    let i = p(n);
    i && (i.isCubeTexture || i.mapping === 306)
      ? (l === void 0 &&
          ((l = new si(
            new ua(1, 1, 1),
            new Ea({
              name: `BackgroundCubeMaterial`,
              uniforms: va(os.backgroundCube.uniforms),
              vertexShader: os.backgroundCube.vertexShader,
              fragmentShader: os.backgroundCube.fragmentShader,
              side: 1,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            }),
          )),
          l.geometry.deleteAttribute(`normal`),
          l.geometry.deleteAttribute(`uv`),
          (l.onBeforeRender = function (e, t, n) {
            this.matrixWorld.copyPosition(n.matrixWorld);
          }),
          Object.defineProperty(l.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          r.update(l)),
        (l.material.uniforms.envMap.value = i),
        (l.material.uniforms.backgroundBlurriness.value =
          n.backgroundBlurriness),
        (l.material.uniforms.backgroundIntensity.value = n.backgroundIntensity),
        l.material.uniforms.backgroundRotation.value
          .setFromMatrix4(cs.makeRotationFromEuler(n.backgroundRotation))
          .transpose(),
        i.isCubeTexture &&
          i.isRenderTargetTexture === !1 &&
          l.material.uniforms.backgroundRotation.value.premultiply(ls),
        (l.material.toneMapped = K.getTransfer(i.colorSpace) !== qe),
        (u !== i || d !== i.version || f !== e.toneMapping) &&
          ((l.material.needsUpdate = !0),
          (u = i),
          (d = i.version),
          (f = e.toneMapping)),
        l.layers.enableAll(),
        t.unshift(l, l.geometry, l.material, 0, 0, null))
      : i &&
        i.isTexture &&
        (c === void 0 &&
          ((c = new si(
            new ga(2, 2),
            new Ea({
              name: `BackgroundMaterial`,
              uniforms: va(os.background.uniforms),
              vertexShader: os.background.vertexShader,
              fragmentShader: os.background.fragmentShader,
              side: 0,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            }),
          )),
          c.geometry.deleteAttribute(`normal`),
          Object.defineProperty(c.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          r.update(c)),
        (c.material.uniforms.t2D.value = i),
        (c.material.uniforms.backgroundIntensity.value = n.backgroundIntensity),
        (c.material.toneMapped = K.getTransfer(i.colorSpace) !== qe),
        i.matrixAutoUpdate === !0 && i.updateMatrix(),
        c.material.uniforms.uvTransform.value.copy(i.matrix),
        (u !== i || d !== i.version || f !== e.toneMapping) &&
          ((c.material.needsUpdate = !0),
          (u = i),
          (d = i.version),
          (f = e.toneMapping)),
        c.layers.enableAll(),
        t.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function g(t, r) {
    (t.getRGB(ss, Sa(e)), n.buffers.color.setClear(ss.r, ss.g, ss.b, r, a));
  }
  function _() {
    (l !== void 0 && (l.geometry.dispose(), l.material.dispose(), (l = void 0)),
      c !== void 0 &&
        (c.geometry.dispose(), c.material.dispose(), (c = void 0)));
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (e, t = 1) {
      (o.set(e), (s = t), g(o, s));
    },
    getClearAlpha: function () {
      return s;
    },
    setClearAlpha: function (e) {
      ((s = e), g(o, s));
    },
    render: m,
    addToRenderList: h,
    dispose: _,
  };
}
function ds(e, t) {
  let n = e.getParameter(e.MAX_VERTEX_ATTRIBS),
    r = {},
    i = f(null),
    a = i,
    o = !1;
  function s(n, r, i, s, c) {
    let u = !1,
      f = d(n, s, i, r);
    (a !== f && ((a = f), l(a.object)),
      (u = p(n, s, i, c)),
      u && m(n, s, i, c),
      c !== null && t.update(c, e.ELEMENT_ARRAY_BUFFER),
      (u || o) &&
        ((o = !1),
        b(n, r, i, s),
        c !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(c).buffer)));
  }
  function c() {
    return e.createVertexArray();
  }
  function l(t) {
    return e.bindVertexArray(t);
  }
  function u(t) {
    return e.deleteVertexArray(t);
  }
  function d(e, t, n, i) {
    let a = i.wireframe === !0,
      o = r[t.id];
    o === void 0 && ((o = {}), (r[t.id] = o));
    let s = e.isInstancedMesh === !0 ? e.id : 0,
      l = o[s];
    l === void 0 && ((l = {}), (o[s] = l));
    let u = l[n.id];
    u === void 0 && ((u = {}), (l[n.id] = u));
    let d = u[a];
    return (d === void 0 && ((d = f(c())), (u[a] = d)), d);
  }
  function f(e) {
    let t = [],
      r = [],
      i = [];
    for (let e = 0; e < n; e++) ((t[e] = 0), (r[e] = 0), (i[e] = 0));
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: t,
      enabledAttributes: r,
      attributeDivisors: i,
      object: e,
      attributes: {},
      index: null,
    };
  }
  function p(e, t, n, r) {
    let i = a.attributes,
      o = t.attributes,
      s = 0,
      c = n.getAttributes();
    for (let t in c)
      if (c[t].location >= 0) {
        let n = i[t],
          r = o[t];
        if (
          (r === void 0 &&
            (t === `instanceMatrix` &&
              e.instanceMatrix &&
              (r = e.instanceMatrix),
            t === `instanceColor` && e.instanceColor && (r = e.instanceColor)),
          n === void 0 || n.attribute !== r || (r && n.data !== r.data))
        )
          return !0;
        s++;
      }
    return a.attributesNum !== s || a.index !== r;
  }
  function m(e, t, n, r) {
    let i = {},
      o = t.attributes,
      s = 0,
      c = n.getAttributes();
    for (let t in c)
      if (c[t].location >= 0) {
        let n = o[t];
        n === void 0 &&
          (t === `instanceMatrix` && e.instanceMatrix && (n = e.instanceMatrix),
          t === `instanceColor` && e.instanceColor && (n = e.instanceColor));
        let r = {};
        ((r.attribute = n), n && n.data && (r.data = n.data), (i[t] = r), s++);
      }
    ((a.attributes = i), (a.attributesNum = s), (a.index = r));
  }
  function h() {
    let e = a.newAttributes;
    for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
  }
  function g(e) {
    _(e, 0);
  }
  function _(t, n) {
    let r = a.newAttributes,
      i = a.enabledAttributes,
      o = a.attributeDivisors;
    ((r[t] = 1),
      i[t] === 0 && (e.enableVertexAttribArray(t), (i[t] = 1)),
      o[t] !== n && (e.vertexAttribDivisor(t, n), (o[t] = n)));
  }
  function v() {
    let t = a.newAttributes,
      n = a.enabledAttributes;
    for (let r = 0, i = n.length; r < i; r++)
      n[r] !== t[r] && (e.disableVertexAttribArray(r), (n[r] = 0));
  }
  function y(t, n, r, i, a, o, s) {
    s === !0
      ? e.vertexAttribIPointer(t, n, r, a, o)
      : e.vertexAttribPointer(t, n, r, i, a, o);
  }
  function b(n, r, i, a) {
    h();
    let o = a.attributes,
      s = i.getAttributes(),
      c = r.defaultAttributeValues;
    for (let r in s) {
      let i = s[r];
      if (i.location >= 0) {
        let s = o[r];
        if (
          (s === void 0 &&
            (r === `instanceMatrix` &&
              n.instanceMatrix &&
              (s = n.instanceMatrix),
            r === `instanceColor` && n.instanceColor && (s = n.instanceColor)),
          s !== void 0)
        ) {
          let r = s.normalized,
            o = s.itemSize,
            c = t.get(s);
          if (c === void 0) continue;
          let l = c.buffer,
            u = c.type,
            d = c.bytesPerElement,
            f = u === e.INT || u === e.UNSIGNED_INT || s.gpuType === 1013;
          if (s.isInterleavedBufferAttribute) {
            let t = s.data,
              c = t.stride,
              p = s.offset;
            if (t.isInstancedInterleavedBuffer) {
              for (let e = 0; e < i.locationSize; e++)
                _(i.location + e, t.meshPerAttribute);
              n.isInstancedMesh !== !0 &&
                a._maxInstanceCount === void 0 &&
                (a._maxInstanceCount = t.meshPerAttribute * t.count);
            } else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
            e.bindBuffer(e.ARRAY_BUFFER, l);
            for (let e = 0; e < i.locationSize; e++)
              y(
                i.location + e,
                o / i.locationSize,
                u,
                r,
                c * d,
                (p + (o / i.locationSize) * e) * d,
                f,
              );
          } else {
            if (s.isInstancedBufferAttribute) {
              for (let e = 0; e < i.locationSize; e++)
                _(i.location + e, s.meshPerAttribute);
              n.isInstancedMesh !== !0 &&
                a._maxInstanceCount === void 0 &&
                (a._maxInstanceCount = s.meshPerAttribute * s.count);
            } else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
            e.bindBuffer(e.ARRAY_BUFFER, l);
            for (let e = 0; e < i.locationSize; e++)
              y(
                i.location + e,
                o / i.locationSize,
                u,
                r,
                o * d,
                (o / i.locationSize) * e * d,
                f,
              );
          }
        } else if (c !== void 0) {
          let t = c[r];
          if (t !== void 0)
            switch (t.length) {
              case 2:
                e.vertexAttrib2fv(i.location, t);
                break;
              case 3:
                e.vertexAttrib3fv(i.location, t);
                break;
              case 4:
                e.vertexAttrib4fv(i.location, t);
                break;
              default:
                e.vertexAttrib1fv(i.location, t);
            }
        }
      }
    }
    v();
  }
  function x() {
    T();
    for (let e in r) {
      let t = r[e];
      for (let e in t) {
        let n = t[e];
        for (let e in n) {
          let t = n[e];
          for (let e in t) (u(t[e].object), delete t[e]);
          delete n[e];
        }
      }
      delete r[e];
    }
  }
  function S(e) {
    if (r[e.id] === void 0) return;
    let t = r[e.id];
    for (let e in t) {
      let n = t[e];
      for (let e in n) {
        let t = n[e];
        for (let e in t) (u(t[e].object), delete t[e]);
        delete n[e];
      }
    }
    delete r[e.id];
  }
  function C(e) {
    for (let t in r) {
      let n = r[t];
      for (let t in n) {
        let r = n[t];
        if (r[e.id] === void 0) continue;
        let i = r[e.id];
        for (let e in i) (u(i[e].object), delete i[e]);
        delete r[e.id];
      }
    }
  }
  function w(e) {
    for (let t in r) {
      let n = r[t],
        i = e.isInstancedMesh === !0 ? e.id : 0,
        a = n[i];
      if (a !== void 0) {
        for (let e in a) {
          let t = a[e];
          for (let e in t) (u(t[e].object), delete t[e]);
          delete a[e];
        }
        (delete n[i], Object.keys(n).length === 0 && delete r[t]);
      }
    }
  }
  function T() {
    (E(), (o = !0), a !== i && ((a = i), l(a.object)));
  }
  function E() {
    ((i.geometry = null), (i.program = null), (i.wireframe = !1));
  }
  return {
    setup: s,
    reset: T,
    resetDefaultState: E,
    dispose: x,
    releaseStatesOfGeometry: S,
    releaseStatesOfObject: w,
    releaseStatesOfProgram: C,
    initAttributes: h,
    enableAttribute: g,
    disableUnusedAttributes: v,
  };
}
function fs(e, t, n) {
  let r;
  function i(e) {
    r = e;
  }
  function a(t, i) {
    (e.drawArrays(r, t, i), n.update(i, r, 1));
  }
  function o(t, i, a) {
    a !== 0 && (e.drawArraysInstanced(r, t, i, a), n.update(i, r, a));
  }
  function s(e, i, a) {
    if (a === 0) return;
    t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r, e, 0, i, 0, a);
    let o = 0;
    for (let e = 0; e < a; e++) o += i[e];
    n.update(o, r, 1);
  }
  ((this.setMode = i),
    (this.render = a),
    (this.renderInstances = o),
    (this.renderMultiDraw = s));
}
function ps(e, t, n, r) {
  let i;
  function a() {
    if (i !== void 0) return i;
    if (t.has(`EXT_texture_filter_anisotropic`) === !0) {
      let n = t.get(`EXT_texture_filter_anisotropic`);
      i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function o(t) {
    return (
      t === 1023 ||
      r.convert(t) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function s(n) {
    let i =
      n === 1016 &&
      (t.has(`EXT_color_buffer_half_float`) || t.has(`EXT_color_buffer_float`));
    return !(
      n !== 1009 &&
      n !== 1015 &&
      !i &&
      r.convert(n) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)
    );
  }
  function c(t) {
    if (t === `highp`) {
      if (
        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision >
          0 &&
        e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision >
          0
      )
        return `highp`;
      t = `mediump`;
    }
    return t === `mediump` &&
      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision >
        0 &&
      e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision >
        0
      ? `mediump`
      : `lowp`;
  }
  let l = n.precision === void 0 ? `highp` : n.precision,
    u = c(l);
  u !== l &&
    (B(`WebGLRenderer:`, l, `not supported, using`, u, `instead.`), (l = u));
  let d = n.logarithmicDepthBuffer === !0,
    f = n.reversedDepthBuffer === !0 && t.has(`EXT_clip_control`);
  n.reversedDepthBuffer === !0 &&
    f === !1 &&
    B(
      `WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`,
    );
  let p = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
    m = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    h = e.getParameter(e.MAX_TEXTURE_SIZE),
    g = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
    _ = e.getParameter(e.MAX_VERTEX_ATTRIBS),
    v = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),
    y = e.getParameter(e.MAX_VARYING_VECTORS),
    b = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
    x = e.getParameter(e.MAX_SAMPLES),
    S = e.getParameter(e.SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: a,
    getMaxPrecision: c,
    textureFormatReadable: o,
    textureTypeReadable: s,
    precision: l,
    logarithmicDepthBuffer: d,
    reversedDepthBuffer: f,
    maxTextures: p,
    maxVertexTextures: m,
    maxTextureSize: h,
    maxCubemapSize: g,
    maxAttributes: _,
    maxVertexUniforms: v,
    maxVaryings: y,
    maxFragmentUniforms: b,
    maxSamples: x,
    samples: S,
  };
}
function ms(e) {
  let t = this,
    n = null,
    r = 0,
    i = !1,
    a = !1,
    o = new Vr(),
    s = new G(),
    c = { value: null, needsUpdate: !1 };
  ((this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (e, t) {
      let n = e.length !== 0 || t || r !== 0 || i;
      return ((i = t), (r = e.length), n);
    }),
    (this.beginShadows = function () {
      ((a = !0), u(null));
    }),
    (this.endShadows = function () {
      a = !1;
    }),
    (this.setGlobalState = function (e, t) {
      n = u(e, t, 0);
    }),
    (this.setState = function (t, o, s) {
      let d = t.clippingPlanes,
        f = t.clipIntersection,
        p = t.clipShadows,
        m = e.get(t);
      if (!i || d === null || d.length === 0 || (a && !p)) a ? u(null) : l();
      else {
        let e = a ? 0 : r,
          t = e * 4,
          i = m.clippingState || null;
        ((c.value = i), (i = u(d, o, t, s)));
        for (let e = 0; e !== t; ++e) i[e] = n[e];
        ((m.clippingState = i),
          (this.numIntersection = f ? this.numPlanes : 0),
          (this.numPlanes += e));
      }
    }));
  function l() {
    (c.value !== n && ((c.value = n), (c.needsUpdate = r > 0)),
      (t.numPlanes = r),
      (t.numIntersection = 0));
  }
  function u(e, n, r, i) {
    let a = e === null ? 0 : e.length,
      l = null;
    if (a !== 0) {
      if (((l = c.value), i !== !0 || l === null)) {
        let t = r + a * 4,
          i = n.matrixWorldInverse;
        (s.getNormalMatrix(i),
          (l === null || l.length < t) && (l = new Float32Array(t)));
        for (let t = 0, n = r; t !== a; ++t, n += 4)
          (o.copy(e[t]).applyMatrix4(i, s),
            o.normal.toArray(l, n),
            (l[n + 3] = o.constant));
      }
      ((c.value = l), (c.needsUpdate = !0));
    }
    return ((t.numPlanes = a), (t.numIntersection = 0), l);
  }
}
var hs = 4,
  gs = 6,
  _s = 20,
  vs = 256,
  ys = new jo(),
  bs = new J(),
  xs = null,
  Ss = 0,
  Cs = 0,
  ws = !1,
  Ts = new W(),
  Es = new W(),
  Ds = class {
    constructor(e) {
      ((this._renderer = e),
        (this._pingPongRenderTarget = null),
        (this._lodMax = 0),
        (this._cubeSize = 0),
        (this._sizeLods = []),
        (this._lodMeshes = []),
        (this._backgroundBox = null),
        (this._cubemapMaterial = null),
        (this._equirectMaterial = null),
        (this._blurMaterial = null),
        (this._ggxMaterial = null));
    }
    fromScene(e, t = 0, n = 0.1, r = 100, i = {}) {
      let { size: a = 256, position: o = Ts } = i;
      ((xs = this._renderer.getRenderTarget()),
        (Ss = this._renderer.getActiveCubeFace()),
        (Cs = this._renderer.getActiveMipmapLevel()),
        (ws = this._renderer.xr.enabled),
        (this._renderer.xr.enabled = !1),
        this._setSize(a));
      let s = this._allocateTargets();
      return (
        (s.depthBuffer = !0),
        this._sceneToCubeUV(e, n, r, s, o),
        t > 0 && this._blur(s, 0, 0, t),
        this._applyPMREM(s),
        this._cleanup(s),
        s
      );
    }
    fromEquirectangular(e, t = null) {
      return this._fromTexture(e, t);
    }
    fromCubemap(e, t = null) {
      return this._fromTexture(e, t);
    }
    compileCubemapShader() {
      this._cubemapMaterial === null &&
        ((this._cubemapMaterial = Ps()),
        this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      this._equirectMaterial === null &&
        ((this._equirectMaterial = Ns()),
        this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      (this._dispose(),
        this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
        this._equirectMaterial !== null && this._equirectMaterial.dispose(),
        this._backgroundBox !== null &&
          (this._backgroundBox.geometry.dispose(),
          this._backgroundBox.material.dispose()));
    }
    _setSize(e) {
      ((this._lodMax = Math.floor(Math.log2(e))),
        (this._cubeSize = 2 ** this._lodMax));
    }
    _dispose() {
      (this._blurMaterial !== null && this._blurMaterial.dispose(),
        this._ggxMaterial !== null && this._ggxMaterial.dispose(),
        this._pingPongRenderTarget !== null &&
          this._pingPongRenderTarget.dispose());
      for (let e = 0; e < this._lodMeshes.length; e++)
        this._lodMeshes[e].geometry.dispose();
    }
    _cleanup(e) {
      (this._renderer.setRenderTarget(xs, Ss, Cs),
        (this._renderer.xr.enabled = ws),
        (e.scissorTest = !1),
        As(e, 0, 0, e.width, e.height));
    }
    _fromTexture(e, t) {
      (e.mapping === 301 || e.mapping === 302
        ? this._setSize(
            e.image.length === 0
              ? 16
              : e.image[0].width || e.image[0].image.width,
          )
        : this._setSize(e.image.width / 4),
        (xs = this._renderer.getRenderTarget()),
        (Ss = this._renderer.getActiveCubeFace()),
        (Cs = this._renderer.getActiveMipmapLevel()),
        (ws = this._renderer.xr.enabled),
        (this._renderer.xr.enabled = !1));
      let n = t || this._allocateTargets();
      return (
        this._textureToCubeUV(e, n),
        this._applyPMREM(n),
        this._cleanup(n),
        n
      );
    }
    _allocateTargets() {
      let e = 3 * Math.max(this._cubeSize, 112),
        t = 4 * this._cubeSize,
        n = {
          magFilter: p,
          minFilter: p,
          generateMipmaps: !1,
          type: C,
          format: j,
          colorSpace: Ge,
          depthBuffer: !1,
        },
        r = ks(e, t, n);
      if (
        this._pingPongRenderTarget === null ||
        this._pingPongRenderTarget.width !== e ||
        this._pingPongRenderTarget.height !== t
      ) {
        (this._pingPongRenderTarget !== null && this._dispose(),
          (this._pingPongRenderTarget = ks(e, t, n)));
        let { _lodMax: r } = this;
        (({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods } = Os(r)),
          (this._blurMaterial = Ms(r, e, t)),
          (this._ggxMaterial = js(r, e, t)));
      }
      return r;
    }
    _compileMaterial(e) {
      let t = new si(new Pr(), e);
      this._renderer.compile(t, ys);
    }
    _sceneToCubeUV(e, t, n, r, i) {
      let a = new Eo(90, 1, t, n),
        o = [1, -1, 1, 1, 1, 1],
        s = [1, 1, 1, -1, -1, -1],
        c = this._renderer,
        l = c.autoClear,
        u = c.toneMapping;
      (c.getClearColor(bs),
        (c.toneMapping = 0),
        (c.autoClear = !1),
        c.state.buffers.depth.getReversed() &&
          (c.setRenderTarget(r), c.clearDepth(), c.setRenderTarget(null)),
        this._backgroundBox === null &&
          (this._backgroundBox = new si(
            new ua(),
            new Yr({
              name: `PMREM.Background`,
              side: 1,
              depthWrite: !1,
              depthTest: !1,
            }),
          )));
      let d = this._backgroundBox,
        f = d.material,
        p = !1,
        m = e.background;
      m
        ? m.isColor && (f.color.copy(m), (e.background = null), (p = !0))
        : (f.color.copy(bs), (p = !0));
      for (let t = 0; t < 6; t++) {
        let n = t % 3;
        n === 0
          ? (a.up.set(0, o[t], 0),
            a.position.set(i.x, i.y, i.z),
            a.lookAt(i.x + s[t], i.y, i.z))
          : n === 1
            ? (a.up.set(0, 0, o[t]),
              a.position.set(i.x, i.y, i.z),
              a.lookAt(i.x, i.y + s[t], i.z))
            : (a.up.set(0, o[t], 0),
              a.position.set(i.x, i.y, i.z),
              a.lookAt(i.x, i.y, i.z + s[t]));
        let l = this._cubeSize;
        (As(r, n * l, t > 2 ? l : 0, l, l),
          c.setRenderTarget(r),
          p && c.render(d, a),
          c.render(e, a));
      }
      ((c.toneMapping = u), (c.autoClear = l), (e.background = m));
    }
    _textureToCubeUV(e, t) {
      let n = this._renderer,
        r = e.mapping === 301 || e.mapping === 302;
      r
        ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ps()),
          (this._cubemapMaterial.uniforms.flipEnvMap.value =
            e.isRenderTargetTexture === !1 ? -1 : 1))
        : this._equirectMaterial === null && (this._equirectMaterial = Ns());
      let i = r ? this._cubemapMaterial : this._equirectMaterial,
        a = this._lodMeshes[0];
      a.material = i;
      let o = i.uniforms;
      o.envMap.value = e;
      let s = this._cubeSize;
      (As(t, 0, 0, 3 * s, 2 * s), n.setRenderTarget(t), n.render(a, ys));
    }
    _applyPMREM(e) {
      let t = this._renderer,
        n = t.autoClear;
      t.autoClear = !1;
      let r = this._lodMeshes.length;
      for (let t = 1; t < r; t++) this._applyGGXFilter(e, t - 1, t);
      t.autoClear = n;
    }
    _applyGGXFilter(e, t, n) {
      let r = this._renderer,
        i = this._pingPongRenderTarget,
        a = this._ggxMaterial,
        o = this._lodMeshes[n];
      o.material = a;
      let s = a.uniforms,
        c = n / (this._lodMeshes.length - 1),
        l = t / (this._lodMeshes.length - 1),
        u = Math.sqrt(c * c - l * l) * (c * 1.25),
        { _lodMax: d } = this,
        f = this._sizeLods[n],
        p = 3 * f * (n > d - hs ? n - d + hs : 0),
        m = 4 * (this._cubeSize - f);
      ((s.envMap.value = e.texture),
        (s.roughness.value = u),
        (s.mipInt.value = d - t),
        As(i, p, m, 3 * f, 2 * f),
        r.setRenderTarget(i),
        r.render(o, ys),
        (s.envMap.value = i.texture),
        (s.roughness.value = 0),
        (s.mipInt.value = d - n),
        As(e, p, m, 3 * f, 2 * f),
        r.setRenderTarget(e),
        r.render(o, ys));
    }
    _blur(e, t, n, r) {
      let i = this._pingPongRenderTarget,
        a = Math.min(r, Math.PI) / Math.SQRT2;
      (this._blurPass(e, i, t, n, a), this._blurPass(i, e, n, n, a));
    }
    _blurPass(e, t, n, r, i) {
      let a = this._renderer,
        o = this._blurMaterial,
        s = this._lodMeshes[r];
      s.material = o;
      let c = o.uniforms;
      ((c.envMap.value = e.texture),
        (c.sigma.value = i),
        (c.mipInt.value = this._lodMax - n));
      let l = this._sizeLods[r];
      (As(
        t,
        3 * l * (r > this._lodMax - hs ? r - this._lodMax + hs : 0),
        4 * (this._cubeSize - l),
        3 * l,
        2 * l,
      ),
        a.setRenderTarget(t),
        a.render(s, ys));
    }
  };
function Os(e) {
  let t = [],
    n = [],
    r = e,
    i = e - hs + 1 + gs;
  for (let e = 0; e < i; e++) {
    let e = 2 ** r;
    t.push(e);
    let i = 1 / (e - 2),
      a = -i,
      o = 1 + i,
      s = [a, a, o, a, o, o, a, a, o, o, a, o],
      c = new Float32Array(108),
      l = new Float32Array(108);
    for (let e = 0; e < 6; e++) {
      let t = ((e % 3) * 2) / 3 - 1,
        n = e > 2 ? 0 : -1,
        r = [
          t,
          n,
          0,
          t + 2 / 3,
          n,
          0,
          t + 2 / 3,
          n + 1,
          0,
          t,
          n,
          0,
          t + 2 / 3,
          n + 1,
          0,
          t,
          n + 1,
          0,
        ];
      c.set(r, 18 * e);
      for (let t = 0; t < 6; t++) {
        let n = s[t * 2] * 2 - 1,
          r = s[t * 2 + 1] * 2 - 1;
        (e === 0
          ? Es.set(1, r, n)
          : e === 1
            ? Es.set(-n, 1, -r)
            : e === 2
              ? Es.set(-n, r, 1)
              : e === 3
                ? Es.set(-1, r, -n)
                : e === 4
                  ? Es.set(-n, -1, r)
                  : Es.set(n, r, -1),
          Es.toArray(l, (e * 6 + t) * 3));
      }
    }
    let u = new Pr();
    (u.setAttribute(`position`, new yr(c, 3)),
      u.setAttribute(`outputDirection`, new yr(l, 3)),
      n.push(new si(u, null)),
      r > hs && r--);
  }
  return { lodMeshes: n, sizeLods: t };
}
function ks(e, t, n) {
  let r = new tn(e, t, n);
  return (
    (r.texture.mapping = 306),
    (r.texture.name = `PMREM.cubeUv`),
    (r.scissorTest = !0),
    r
  );
}
function As(e, t, n, r, i) {
  (e.viewport.set(t, n, r, i), e.scissor.set(t, n, r, i));
}
function js(e, t, n) {
  return new Ea({
    name: `PMREMGGXConvolution`,
    defines: {
      GGX_SAMPLES: vs,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / n,
      CUBEUV_MAX_MIP: `${e}.0`,
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 },
    },
    vertexShader: Fs(),
    fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ms(e, t, n) {
  return new Ea({
    name: `SphericalGaussianBlur`,
    defines: {
      SAMPLES: _s,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / n,
      CUBEUV_MAX_MIP: `${e}.0`,
    },
    uniforms: {
      envMap: { value: null },
      sigma: { value: 0 },
      mipInt: { value: 0 },
    },
    vertexShader: Fs(),
    fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ns() {
  return new Ea({
    name: `EquirectangularToCubeUV`,
    uniforms: { envMap: { value: null } },
    vertexShader: Fs(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ps() {
  return new Ea({
    name: `CubemapToCubeUV`,
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Fs(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Fs() {
  return `

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
var Is = class extends tn {
  constructor(e = 1, t = {}) {
    (super(e, e, t), (this.isWebGLCubeRenderTarget = !0));
    let n = { width: e, height: e, depth: 1 },
      r = [n, n, n, n, n, n];
    ((this.texture = new aa(r)),
      this._setTextureOptions(t),
      (this.texture.isRenderTargetTexture = !0));
  }
  fromEquirectangularTexture(e, t) {
    ((this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter));
    let n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      r = new ua(5, 5, 5),
      i = new Ea({
        name: `CubemapFromEquirect`,
        uniforms: va(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: 1,
        blending: 0,
      });
    i.uniforms.tEquirect.value = t;
    let a = new si(r, i),
      o = t.minFilter;
    return (
      t.minFilter === 1008 && (t.minFilter = p),
      new Bo(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t = !0, n = !0, r = !0) {
    let i = e.getRenderTarget();
    for (let i = 0; i < 6; i++) (e.setRenderTarget(this, i), e.clear(t, n, r));
    e.setRenderTarget(i);
  }
};
function Ls(e) {
  let t = new WeakMap(),
    n = new WeakMap(),
    r = null;
  function i(e, t = !1) {
    return e == null ? null : t ? o(e) : a(e);
  }
  function a(n) {
    if (n && n.isTexture) {
      let r = n.mapping;
      if (r === 303 || r === 304) {
        if (t.has(n)) {
          let e = t.get(n).texture;
          return s(e, n.mapping);
        }
        {
          let r = n.image;
          if (r && r.height > 0) {
            let i = new Is(r.height);
            return (
              i.fromEquirectangularTexture(e, n),
              t.set(n, i),
              n.addEventListener(`dispose`, l),
              s(i.texture, n.mapping)
            );
          }
          return null;
        }
      }
    }
    return n;
  }
  function o(t) {
    if (t && t.isTexture) {
      let i = t.mapping,
        a = i === 303 || i === 304,
        o = i === 301 || i === 302;
      if (a || o) {
        let i = n.get(t),
          s = i === void 0 ? 0 : i.texture.pmremVersion;
        if (t.isRenderTargetTexture && t.pmremVersion !== s)
          return (
            r === null && (r = new Ds(e)),
            (i = a ? r.fromEquirectangular(t, i) : r.fromCubemap(t, i)),
            (i.texture.pmremVersion = t.pmremVersion),
            n.set(t, i),
            i.texture
          );
        if (i !== void 0) return i.texture;
        {
          let s = t.image;
          return (a && s && s.height > 0) || (o && s && c(s))
            ? (r === null && (r = new Ds(e)),
              (i = a ? r.fromEquirectangular(t) : r.fromCubemap(t)),
              (i.texture.pmremVersion = t.pmremVersion),
              n.set(t, i),
              t.addEventListener(`dispose`, u),
              i.texture)
            : null;
        }
      }
    }
    return t;
  }
  function s(e, t) {
    return (t === 303 ? (e.mapping = 301) : t === 304 && (e.mapping = 302), e);
  }
  function c(e) {
    let t = 0;
    for (let n = 0; n < 6; n++) e[n] !== void 0 && t++;
    return t === 6;
  }
  function l(e) {
    let n = e.target;
    n.removeEventListener(`dispose`, l);
    let r = t.get(n);
    r !== void 0 && (t.delete(n), r.dispose());
  }
  function u(e) {
    let t = e.target;
    t.removeEventListener(`dispose`, u);
    let r = n.get(t);
    r !== void 0 && (n.delete(t), r.dispose());
  }
  function d() {
    ((t = new WeakMap()),
      (n = new WeakMap()),
      r !== null && (r.dispose(), (r = null)));
  }
  return { get: i, dispose: d };
}
function Rs(e) {
  let t = {};
  function n(n) {
    if (t[n] !== void 0) return t[n];
    let r = e.getExtension(n);
    return ((t[n] = r), r);
  }
  return {
    has: function (e) {
      return n(e) !== null;
    },
    init: function () {
      (n(`EXT_color_buffer_float`),
        n(`WEBGL_clip_cull_distance`),
        n(`OES_texture_float_linear`),
        n(`EXT_color_buffer_half_float`),
        n(`WEBGL_multisampled_render_to_texture`),
        n(`WEBGL_render_shared_exponent`));
    },
    get: function (e) {
      let t = n(e);
      return (
        t === null && ot(`WebGLRenderer: ` + e + ` extension not supported.`),
        t
      );
    },
  };
}
function zs(e, t, n, r) {
  let i = {},
    a = new WeakMap();
  function o(e) {
    let s = e.target;
    s.index !== null && t.remove(s.index);
    for (let e in s.attributes) t.remove(s.attributes[e]);
    (s.removeEventListener(`dispose`, o), delete i[s.id]);
    let c = a.get(s);
    (c && (t.remove(c), a.delete(s)),
      r.releaseStatesOfGeometry(s),
      s.isInstancedBufferGeometry === !0 && delete s._maxInstanceCount,
      n.memory.geometries--);
  }
  function s(e, t) {
    return i[t.id] === !0
      ? t
      : (t.addEventListener(`dispose`, o),
        (i[t.id] = !0),
        n.memory.geometries++,
        t);
  }
  function c(n) {
    let r = n.attributes;
    for (let n in r) t.update(r[n], e.ARRAY_BUFFER);
  }
  function l(e) {
    let n = [],
      r = e.index,
      i = e.attributes.position,
      o = 0;
    if (i === void 0) return;
    if (r !== null) {
      let e = r.array;
      o = r.version;
      for (let t = 0, r = e.length; t < r; t += 3) {
        let r = e[t + 0],
          i = e[t + 1],
          a = e[t + 2];
        n.push(r, i, i, a, a, r);
      }
    } else {
      let e = i.array;
      o = i.version;
      for (let t = 0, r = e.length / 3 - 1; t < r; t += 3) {
        let e = t + 0,
          r = t + 1,
          i = t + 2;
        n.push(e, r, r, i, i, e);
      }
    }
    let s = new (i.count >= 65535 ? xr : br)(n, 1);
    s.version = o;
    let c = a.get(e);
    (c && t.remove(c), a.set(e, s));
  }
  function u(e) {
    let t = a.get(e);
    if (t) {
      let n = e.index;
      n !== null && t.version < n.version && l(e);
    } else l(e);
    return a.get(e);
  }
  return { get: s, update: c, getWireframeAttribute: u };
}
function Bs(e, t, n) {
  let r;
  function i(e) {
    r = e;
  }
  let a, o;
  function s(e) {
    ((a = e.type), (o = e.bytesPerElement));
  }
  function c(t, i) {
    (e.drawElements(r, i, a, t * o), n.update(i, r, 1));
  }
  function l(t, i, s) {
    s !== 0 && (e.drawElementsInstanced(r, i, a, t * o, s), n.update(i, r, s));
  }
  function u(e, i, o) {
    if (o === 0) return;
    t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r, i, 0, a, e, 0, o);
    let s = 0;
    for (let e = 0; e < o; e++) s += i[e];
    n.update(s, r, 1);
  }
  ((this.setMode = i),
    (this.setIndex = s),
    (this.render = c),
    (this.renderInstances = l),
    (this.renderMultiDraw = u));
}
function Vs(e) {
  let t = { geometries: 0, textures: 0 },
    n = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function r(t, r, i) {
    switch ((n.calls++, r)) {
      case e.TRIANGLES:
        n.triangles += (t / 3) * i;
        break;
      case e.LINES:
        n.lines += (t / 2) * i;
        break;
      case e.LINE_STRIP:
        n.lines += i * (t - 1);
        break;
      case e.LINE_LOOP:
        n.lines += i * t;
        break;
      case e.POINTS:
        n.points += i * t;
        break;
      default:
        V(`WebGLInfo: Unknown draw mode:`, r);
    }
  }
  function i() {
    ((n.calls = 0), (n.triangles = 0), (n.points = 0), (n.lines = 0));
  }
  return {
    memory: t,
    render: n,
    programs: null,
    autoReset: !0,
    reset: i,
    update: r,
  };
}
function Hs(e, t, n) {
  let r = new WeakMap(),
    i = new $t();
  function a(a, o, s) {
    let c = a.morphTargetInfluences,
      l =
        o.morphAttributes.position ||
        o.morphAttributes.normal ||
        o.morphAttributes.color,
      u = l === void 0 ? 0 : l.length,
      d = r.get(o);
    if (d === void 0 || d.count !== u) {
      d !== void 0 && d.texture.dispose();
      let e = o.morphAttributes.position !== void 0,
        n = o.morphAttributes.normal !== void 0,
        a = o.morphAttributes.color !== void 0,
        s = o.morphAttributes.position || [],
        c = o.morphAttributes.normal || [],
        l = o.morphAttributes.color || [],
        f = 0;
      (e === !0 && (f = 1), n === !0 && (f = 2), a === !0 && (f = 3));
      let p = o.attributes.position.count * f,
        m = 1;
      p > t.maxTextureSize &&
        ((m = Math.ceil(p / t.maxTextureSize)), (p = t.maxTextureSize));
      let h = new Float32Array(p * m * 4 * u),
        g = new nn(h, p, m, u);
      ((g.type = S), (g.needsUpdate = !0));
      let _ = f * 4;
      for (let t = 0; t < u; t++) {
        let r = s[t],
          o = c[t],
          u = l[t],
          d = p * m * 4 * t;
        for (let t = 0; t < r.count; t++) {
          let s = t * _;
          (e === !0 &&
            (i.fromBufferAttribute(r, t),
            (h[d + s + 0] = i.x),
            (h[d + s + 1] = i.y),
            (h[d + s + 2] = i.z),
            (h[d + s + 3] = 0)),
            n === !0 &&
              (i.fromBufferAttribute(o, t),
              (h[d + s + 4] = i.x),
              (h[d + s + 5] = i.y),
              (h[d + s + 6] = i.z),
              (h[d + s + 7] = 0)),
            a === !0 &&
              (i.fromBufferAttribute(u, t),
              (h[d + s + 8] = i.x),
              (h[d + s + 9] = i.y),
              (h[d + s + 10] = i.z),
              (h[d + s + 11] = u.itemSize === 4 ? i.w : 1)));
        }
      }
      ((d = { count: u, texture: g, size: new U(p, m) }), r.set(o, d));
      function v() {
        (g.dispose(), r.delete(o), o.removeEventListener(`dispose`, v));
      }
      o.addEventListener(`dispose`, v);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      s.getUniforms().setValue(e, `morphTexture`, a.morphTexture, n);
    else {
      let t = 0;
      for (let e = 0; e < c.length; e++) t += c[e];
      let n = o.morphTargetsRelative ? 1 : 1 - t;
      (s.getUniforms().setValue(e, `morphTargetBaseInfluence`, n),
        s.getUniforms().setValue(e, `morphTargetInfluences`, c));
    }
    (s.getUniforms().setValue(e, `morphTargetsTexture`, d.texture, n),
      s.getUniforms().setValue(e, `morphTargetsTextureSize`, d.size));
  }
  return { update: a };
}
function Us(e, t, n, r, i) {
  let a = new WeakMap();
  function o(r) {
    let o = i.render.frame,
      s = r.geometry,
      l = t.get(r, s);
    if (
      (a.get(l) !== o && (t.update(l), a.set(l, o)),
      r.isInstancedMesh &&
        (r.hasEventListener(`dispose`, c) === !1 &&
          r.addEventListener(`dispose`, c),
        a.get(r) !== o &&
          (n.update(r.instanceMatrix, e.ARRAY_BUFFER),
          r.instanceColor !== null && n.update(r.instanceColor, e.ARRAY_BUFFER),
          a.set(r, o))),
      r.isSkinnedMesh)
    ) {
      let e = r.skeleton;
      a.get(e) !== o && (e.update(), a.set(e, o));
    }
    return l;
  }
  function s() {
    a = new WeakMap();
  }
  function c(e) {
    let t = e.target;
    (t.removeEventListener(`dispose`, c),
      r.releaseStatesOfObject(t),
      n.remove(t.instanceMatrix),
      t.instanceColor !== null && n.remove(t.instanceColor));
  }
  return { update: o, dispose: s };
}
var Ws = {
  1: `LINEAR_TONE_MAPPING`,
  2: `REINHARD_TONE_MAPPING`,
  3: `CINEON_TONE_MAPPING`,
  4: `ACES_FILMIC_TONE_MAPPING`,
  6: `AGX_TONE_MAPPING`,
  7: `NEUTRAL_TONE_MAPPING`,
  5: `CUSTOM_TONE_MAPPING`,
};
function Gs(e, t, n, r, i, a) {
  let o = new tn(t, n, {
      type: e,
      depthBuffer: i,
      stencilBuffer: a,
      samples: r ? 4 : 0,
      storeMultisampledDepthBuffer: !1,
      storeMultisampledStencilBuffer: !1,
      resolveDepthBuffer: !1,
      resolveStencilBuffer: !1,
    }),
    s = null,
    c = null,
    l = new Pr();
  (l.setAttribute(`position`, new Sr([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)),
    l.setAttribute(`uv`, new Sr([0, 2, 0, 0, 2, 0], 2)));
  let u = new Da({
      uniforms: { tDiffuse: { value: null } },
      vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
      fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,
      depthTest: !1,
      depthWrite: !1,
    }),
    d = new si(l, u),
    f = new jo(-1, 1, 1, -1, 0, 1),
    p = null,
    m = null,
    h = !1,
    g,
    _ = null,
    v = [],
    y = !1;
  ((this.setSize = function (e, t) {
    (o.setSize(e, t),
      s !== null && s.setSize(e, t),
      c !== null && c.setSize(e, t));
    for (let n = 0; n < v.length; n++) {
      let r = v[n];
      r.setSize && r.setSize(e, t);
    }
  }),
    (this.setEffects = function (e) {
      ((v = e), (y = v.length > 0 && v[0].isRenderPass === !0));
      let t = o.width,
        n = o.height;
      v.length > 0 &&
        s === null &&
        ((s = new tn(t, n, { type: C, depthBuffer: !1, stencilBuffer: !1 })),
        (c = new tn(t, n, { type: C, depthBuffer: !1, stencilBuffer: !1 })));
      for (let e = 0; e < v.length; e++) {
        let r = v[e];
        r.setSize && r.setSize(t, n);
      }
    }),
    (this.begin = function (e, t) {
      if (h || (e.toneMapping === 0 && v.length === 0)) return !1;
      if (((_ = t), t !== null)) {
        let e = t.width,
          n = t.height;
        (o.width !== e || o.height !== n) && this.setSize(e, n);
      }
      return (
        y === !1 && e.setRenderTarget(o),
        (g = e.toneMapping),
        (e.toneMapping = 0),
        !0
      );
    }),
    (this.hasRenderPass = function () {
      return y;
    }),
    (this.end = function (e, t) {
      ((e.toneMapping = g), (h = !0));
      let n = o,
        r = s;
      for (let i = 0; i < v.length; i++) {
        let a = v[i];
        a.enabled !== !1 &&
          (a.render(e, r, n, t),
          a.needsSwap !== !1 && ((n = r), (r = r === s ? c : s)));
      }
      if (p !== e.outputColorSpace || m !== e.toneMapping) {
        ((p = e.outputColorSpace),
          (m = e.toneMapping),
          (u.defines = {}),
          K.getTransfer(p) === `srgb` && (u.defines.SRGB_TRANSFER = ``));
        let t = Ws[m];
        (t && (u.defines[t] = ``), (u.needsUpdate = !0));
      }
      ((u.uniforms.tDiffuse.value = n.texture),
        e.setRenderTarget(_),
        e.render(d, f),
        (_ = null),
        (h = !1));
    }),
    (this.isCompositing = function () {
      return h;
    }),
    (this.dispose = function () {
      (o.dispose(),
        s !== null && s.dispose(),
        c !== null && c.dispose(),
        l.dispose(),
        u.dispose());
    }));
}
var Ks = new Qt(),
  qs = new sa(1, 1),
  Js = new nn(),
  Ys = new rn(),
  Xs = new aa(),
  Zs = [],
  Qs = [],
  $s = new Float32Array(16),
  ec = new Float32Array(9),
  tc = new Float32Array(4);
function nc(e, t, n) {
  let r = e[0];
  if (r <= 0 || r > 0) return e;
  let i = t * n,
    a = Zs[i];
  if ((a === void 0 && ((a = new Float32Array(i)), (Zs[i] = a)), t !== 0)) {
    r.toArray(a, 0);
    for (let r = 1, i = 0; r !== t; ++r) ((i += n), e[r].toArray(a, i));
  }
  return a;
}
function rc(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function ic(e, t) {
  for (let n = 0, r = t.length; n < r; n++) e[n] = t[n];
}
function ac(e, t) {
  let n = Qs[t];
  n === void 0 && ((n = new Int32Array(t)), (Qs[t] = n));
  for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
  return n;
}
function oc(e, t) {
  let n = this.cache;
  n[0] !== t && (e.uniform1f(this.addr, t), (n[0] = t));
}
function sc(e, t) {
  let n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) &&
      (e.uniform2f(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y));
  else {
    if (rc(n, t)) return;
    (e.uniform2fv(this.addr, t), ic(n, t));
  }
}
function cc(e, t) {
  let n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) &&
      (e.uniform3f(this.addr, t.x, t.y, t.z),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z));
  else if (t.r !== void 0)
    (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) &&
      (e.uniform3f(this.addr, t.r, t.g, t.b),
      (n[0] = t.r),
      (n[1] = t.g),
      (n[2] = t.b));
  else {
    if (rc(n, t)) return;
    (e.uniform3fv(this.addr, t), ic(n, t));
  }
}
function lc(e, t) {
  let n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) &&
      (e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z),
      (n[3] = t.w));
  else {
    if (rc(n, t)) return;
    (e.uniform4fv(this.addr, t), ic(n, t));
  }
}
function uc(e, t) {
  let n = this.cache,
    r = t.elements;
  if (r === void 0) {
    if (rc(n, t)) return;
    (e.uniformMatrix2fv(this.addr, !1, t), ic(n, t));
  } else {
    if (rc(n, r)) return;
    (tc.set(r), e.uniformMatrix2fv(this.addr, !1, tc), ic(n, r));
  }
}
function dc(e, t) {
  let n = this.cache,
    r = t.elements;
  if (r === void 0) {
    if (rc(n, t)) return;
    (e.uniformMatrix3fv(this.addr, !1, t), ic(n, t));
  } else {
    if (rc(n, r)) return;
    (ec.set(r), e.uniformMatrix3fv(this.addr, !1, ec), ic(n, r));
  }
}
function fc(e, t) {
  let n = this.cache,
    r = t.elements;
  if (r === void 0) {
    if (rc(n, t)) return;
    (e.uniformMatrix4fv(this.addr, !1, t), ic(n, t));
  } else {
    if (rc(n, r)) return;
    ($s.set(r), e.uniformMatrix4fv(this.addr, !1, $s), ic(n, r));
  }
}
function pc(e, t) {
  let n = this.cache;
  n[0] !== t && (e.uniform1i(this.addr, t), (n[0] = t));
}
function mc(e, t) {
  let n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) &&
      (e.uniform2i(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y));
  else {
    if (rc(n, t)) return;
    (e.uniform2iv(this.addr, t), ic(n, t));
  }
}
function hc(e, t) {
  let n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) &&
      (e.uniform3i(this.addr, t.x, t.y, t.z),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z));
  else {
    if (rc(n, t)) return;
    (e.uniform3iv(this.addr, t), ic(n, t));
  }
}
function gc(e, t) {
  let n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) &&
      (e.uniform4i(this.addr, t.x, t.y, t.z, t.w),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z),
      (n[3] = t.w));
  else {
    if (rc(n, t)) return;
    (e.uniform4iv(this.addr, t), ic(n, t));
  }
}
function _c(e, t) {
  let n = this.cache;
  n[0] !== t && (e.uniform1ui(this.addr, t), (n[0] = t));
}
function vc(e, t) {
  let n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) &&
      (e.uniform2ui(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y));
  else {
    if (rc(n, t)) return;
    (e.uniform2uiv(this.addr, t), ic(n, t));
  }
}
function yc(e, t) {
  let n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) &&
      (e.uniform3ui(this.addr, t.x, t.y, t.z),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z));
  else {
    if (rc(n, t)) return;
    (e.uniform3uiv(this.addr, t), ic(n, t));
  }
}
function bc(e, t) {
  let n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) &&
      (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z),
      (n[3] = t.w));
  else {
    if (rc(n, t)) return;
    (e.uniform4uiv(this.addr, t), ic(n, t));
  }
}
function xc(e, t, n) {
  let r = this.cache,
    i = n.allocateTextureUnit();
  r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i));
  let a;
  (this.type === e.SAMPLER_2D_SHADOW
    ? ((qs.compareFunction = n.isReversedDepthBuffer() ? 518 : 515), (a = qs))
    : (a = Ks),
    n.setTexture2D(t || a, i));
}
function Sc(e, t, n) {
  let r = this.cache,
    i = n.allocateTextureUnit();
  (r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i)),
    n.setTexture3D(t || Ys, i));
}
function Cc(e, t, n) {
  let r = this.cache,
    i = n.allocateTextureUnit();
  (r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i)),
    n.setTextureCube(t || Xs, i));
}
function wc(e, t, n) {
  let r = this.cache,
    i = n.allocateTextureUnit();
  (r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i)),
    n.setTexture2DArray(t || Js, i));
}
function Tc(e) {
  switch (e) {
    case 5126:
      return oc;
    case 35664:
      return sc;
    case 35665:
      return cc;
    case 35666:
      return lc;
    case 35674:
      return uc;
    case 35675:
      return dc;
    case 35676:
      return fc;
    case 5124:
    case 35670:
      return pc;
    case 35667:
    case 35671:
      return mc;
    case 35668:
    case 35672:
      return hc;
    case 35669:
    case 35673:
      return gc;
    case 5125:
      return _c;
    case 36294:
      return vc;
    case 36295:
      return yc;
    case 36296:
      return bc;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return xc;
    case 35679:
    case 36299:
    case 36307:
      return Sc;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Cc;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return wc;
  }
}
function Ec(e, t) {
  e.uniform1fv(this.addr, t);
}
function Dc(e, t) {
  let n = nc(t, this.size, 2);
  e.uniform2fv(this.addr, n);
}
function Oc(e, t) {
  let n = nc(t, this.size, 3);
  e.uniform3fv(this.addr, n);
}
function kc(e, t) {
  let n = nc(t, this.size, 4);
  e.uniform4fv(this.addr, n);
}
function Ac(e, t) {
  let n = nc(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, n);
}
function jc(e, t) {
  let n = nc(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, n);
}
function Mc(e, t) {
  let n = nc(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, n);
}
function Nc(e, t) {
  e.uniform1iv(this.addr, t);
}
function Pc(e, t) {
  e.uniform2iv(this.addr, t);
}
function Fc(e, t) {
  e.uniform3iv(this.addr, t);
}
function Ic(e, t) {
  e.uniform4iv(this.addr, t);
}
function Lc(e, t) {
  e.uniform1uiv(this.addr, t);
}
function Rc(e, t) {
  e.uniform2uiv(this.addr, t);
}
function zc(e, t) {
  e.uniform3uiv(this.addr, t);
}
function Bc(e, t) {
  e.uniform4uiv(this.addr, t);
}
function Vc(e, t, n) {
  let r = this.cache,
    i = t.length,
    a = ac(n, i);
  rc(r, a) || (e.uniform1iv(this.addr, a), ic(r, a));
  let o;
  o = this.type === e.SAMPLER_2D_SHADOW ? qs : Ks;
  for (let e = 0; e !== i; ++e) n.setTexture2D(t[e] || o, a[e]);
}
function Hc(e, t, n) {
  let r = this.cache,
    i = t.length,
    a = ac(n, i);
  rc(r, a) || (e.uniform1iv(this.addr, a), ic(r, a));
  for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || Ys, a[e]);
}
function Uc(e, t, n) {
  let r = this.cache,
    i = t.length,
    a = ac(n, i);
  rc(r, a) || (e.uniform1iv(this.addr, a), ic(r, a));
  for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || Xs, a[e]);
}
function Wc(e, t, n) {
  let r = this.cache,
    i = t.length,
    a = ac(n, i);
  rc(r, a) || (e.uniform1iv(this.addr, a), ic(r, a));
  for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || Js, a[e]);
}
function Gc(e) {
  switch (e) {
    case 5126:
      return Ec;
    case 35664:
      return Dc;
    case 35665:
      return Oc;
    case 35666:
      return kc;
    case 35674:
      return Ac;
    case 35675:
      return jc;
    case 35676:
      return Mc;
    case 5124:
    case 35670:
      return Nc;
    case 35667:
    case 35671:
      return Pc;
    case 35668:
    case 35672:
      return Fc;
    case 35669:
    case 35673:
      return Ic;
    case 5125:
      return Lc;
    case 36294:
      return Rc;
    case 36295:
      return zc;
    case 36296:
      return Bc;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Vc;
    case 35679:
    case 36299:
    case 36307:
      return Hc;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Uc;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Wc;
  }
}
var Kc = class {
    constructor(e, t, n) {
      ((this.id = e),
        (this.addr = n),
        (this.cache = []),
        (this.type = t.type),
        (this.setValue = Tc(t.type)));
    }
  },
  qc = class {
    constructor(e, t, n) {
      ((this.id = e),
        (this.addr = n),
        (this.cache = []),
        (this.type = t.type),
        (this.size = t.size),
        (this.setValue = Gc(t.type)));
    }
  },
  Jc = class {
    constructor(e) {
      ((this.id = e), (this.seq = []), (this.map = {}));
    }
    setValue(e, t, n) {
      let r = this.seq;
      for (let i = 0, a = r.length; i !== a; ++i) {
        let a = r[i];
        a.setValue(e, t[a.id], n);
      }
    }
  },
  Yc = /(\w+)(\])?(\[|\.)?/g;
function Xc(e, t) {
  (e.seq.push(t), (e.map[t.id] = t));
}
function Zc(e, t, n) {
  let r = e.name,
    i = r.length;
  for (Yc.lastIndex = 0; ;) {
    let a = Yc.exec(r),
      o = Yc.lastIndex,
      s = a[1],
      c = a[2] === `]`,
      l = a[3];
    if ((c && (s |= 0), l === void 0 || (l === `[` && o + 2 === i))) {
      Xc(n, l === void 0 ? new Kc(s, e, t) : new qc(s, e, t));
      break;
    }
    {
      let e = n.map[s];
      (e === void 0 && ((e = new Jc(s)), Xc(n, e)), (n = e));
    }
  }
}
var Qc = class {
  constructor(e, t) {
    ((this.seq = []), (this.map = {}));
    let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      let n = e.getActiveUniform(t, r);
      Zc(n, e.getUniformLocation(t, n.name), this);
    }
    let r = [],
      i = [];
    for (let t of this.seq)
      t.type === e.SAMPLER_2D_SHADOW ||
      t.type === e.SAMPLER_CUBE_SHADOW ||
      t.type === e.SAMPLER_2D_ARRAY_SHADOW
        ? r.push(t)
        : i.push(t);
    r.length > 0 && (this.seq = r.concat(i));
  }
  setValue(e, t, n, r) {
    let i = this.map[t];
    i !== void 0 && i.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    let r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let i = 0, a = t.length; i !== a; ++i) {
      let a = t[i],
        o = n[a.id];
      o.needsUpdate !== !1 && a.setValue(e, o.value, r);
    }
  }
  static seqWithValue(e, t) {
    let n = [];
    for (let r = 0, i = e.length; r !== i; ++r) {
      let i = e[r];
      i.id in t && n.push(i);
    }
    return n;
  }
};
function $c(e, t, n) {
  let r = e.createShader(t);
  return (e.shaderSource(r, n), e.compileShader(r), r);
}
var el = 37297,
  tl = 0;
function nl(e, t) {
  let n = e.split(`
`),
    r = [],
    i = Math.max(t - 6, 0),
    a = Math.min(t + 6, n.length);
  for (let e = i; e < a; e++) {
    let i = e + 1;
    r.push(`${i === t ? `>` : ` `} ${i}: ${n[e]}`);
  }
  return r.join(`
`);
}
var rl = new G();
function il(e) {
  K._getMatrix(rl, K.workingColorSpace, e);
  let t = `mat3( ${rl.elements.map((e) => e.toFixed(4))} )`;
  switch (K.getTransfer(e)) {
    case Ke:
      return [t, `LinearTransferOETF`];
    case qe:
      return [t, `sRGBTransferOETF`];
    default:
      return (
        B(`WebGLProgram: Unsupported color space: `, e),
        [t, `LinearTransferOETF`]
      );
  }
}
function al(e, t, n) {
  let r = e.getShaderParameter(t, e.COMPILE_STATUS),
    i = (e.getShaderInfoLog(t) || ``).trim();
  if (r && i === ``) return ``;
  let a = /ERROR: 0:(\d+)/.exec(i);
  if (a) {
    let r = parseInt(a[1]);
    return (
      n.toUpperCase() +
      `

` +
      i +
      `

` +
      nl(e.getShaderSource(t), r)
    );
  }
  return i;
}
function ol(e, t) {
  let n = il(t);
  return [
    `vec4 ${e}( vec4 value ) {`,
    `	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,
    `}`,
  ].join(`
`);
}
var sl = {
  1: `Linear`,
  2: `Reinhard`,
  3: `Cineon`,
  4: `ACESFilmic`,
  6: `AgX`,
  7: `Neutral`,
  5: `Custom`,
};
function cl(e, t) {
  let n = sl[t];
  return n === void 0
    ? (B(`WebGLProgram: Unsupported toneMapping:`, t),
      `vec3 ` + e + `( vec3 color ) { return LinearToneMapping( color ); }`)
    : `vec3 ` + e + `( vec3 color ) { return ` + n + `ToneMapping( color ); }`;
}
var ll = new W();
function ul() {
  return (
    K.getLuminanceCoefficients(ll),
    [
      `float luminance( const in vec3 rgb ) {`,
      `	const vec3 weights = vec3( ${ll.x.toFixed(4)}, ${ll.y.toFixed(4)}, ${ll.z.toFixed(4)} );`,
      `	return dot( weights, rgb );`,
      `}`,
    ].join(`
`)
  );
}
function dl(e) {
  return [
    e.extensionClipCullDistance
      ? `#extension GL_ANGLE_clip_cull_distance : require`
      : ``,
    e.extensionMultiDraw ? `#extension GL_ANGLE_multi_draw : require` : ``,
  ].filter(ml).join(`
`);
}
function fl(e) {
  let t = [];
  for (let n in e) {
    let r = e[n];
    r !== !1 && t.push(`#define ` + n + ` ` + r);
  }
  return t.join(`
`);
}
function pl(e, t) {
  let n = {},
    r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < r; i++) {
    let r = e.getActiveAttrib(t, i),
      a = r.name,
      o = 1;
    (r.type === e.FLOAT_MAT2 && (o = 2),
      r.type === e.FLOAT_MAT3 && (o = 3),
      r.type === e.FLOAT_MAT4 && (o = 4),
      (n[a] = {
        type: r.type,
        location: e.getAttribLocation(t, a),
        locationSize: o,
      }));
  }
  return n;
}
function ml(e) {
  return e !== ``;
}
function hl(e, t) {
  let n =
    t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return e
    .replace(/NUM_SUN_LIGHTS/g, t.numSunLights)
    .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, n)
    .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    .replace(/NUM_SUN_LIGHT_SHADOWS/g, t.numSunLightShadows)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function gl(e, t) {
  return e
    .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      t.numClippingPlanes - t.numClipIntersection,
    );
}
var _l = /^[ \t]*#include +<([\w\d./]+)>/gm;
function vl(e) {
  return e.replace(_l, bl);
}
var yl = new Map();
function bl(e, t) {
  let n = Y[t];
  if (n === void 0) {
    let e = yl.get(t);
    if (e !== void 0)
      ((n = Y[e]),
        B(
          `WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,
          t,
          e,
        ));
    else
      throw Error(`THREE.WebGLProgram: Can not resolve #include <` + t + `>`);
  }
  return vl(n);
}
var xl =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Sl(e) {
  return e.replace(xl, Cl);
}
function Cl(e, t, n, r) {
  let i = ``;
  for (let e = parseInt(t); e < parseInt(n); e++)
    i += r
      .replace(/\[\s*i\s*\]/g, `[ ` + e + ` ]`)
      .replace(/UNROLLED_LOOP_INDEX/g, e);
  return i;
}
function wl(e) {
  let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
  return (
    e.precision === `highp`
      ? (t += `
#define HIGH_PRECISION`)
      : e.precision === `mediump`
        ? (t += `
#define MEDIUM_PRECISION`)
        : e.precision === `lowp` &&
          (t += `
#define LOW_PRECISION`),
    t
  );
}
var Tl = { 1: `SHADOWMAP_TYPE_PCF`, 3: `SHADOWMAP_TYPE_VSM` };
function El(e) {
  return Tl[e.shadowMapType] || `SHADOWMAP_TYPE_BASIC`;
}
var Dl = {
  301: `ENVMAP_TYPE_CUBE`,
  302: `ENVMAP_TYPE_CUBE`,
  306: `ENVMAP_TYPE_CUBE_UV`,
};
function Ol(e) {
  return e.envMap === !1
    ? `ENVMAP_TYPE_CUBE`
    : Dl[e.envMapMode] || `ENVMAP_TYPE_CUBE`;
}
var kl = { 302: `ENVMAP_MODE_REFRACTION` };
function Al(e) {
  return e.envMap === !1
    ? `ENVMAP_MODE_REFLECTION`
    : kl[e.envMapMode] || `ENVMAP_MODE_REFLECTION`;
}
var jl = {
  0: `ENVMAP_BLENDING_MULTIPLY`,
  1: `ENVMAP_BLENDING_MIX`,
  2: `ENVMAP_BLENDING_ADD`,
};
function Ml(e) {
  return e.envMap === !1
    ? `ENVMAP_BLENDING_NONE`
    : jl[e.combine] || `ENVMAP_BLENDING_NONE`;
}
function Nl(e) {
  let t = e.envMapCubeUVHeight;
  if (t === null) return null;
  let n = Math.log2(t) - 2,
    r = 1 / t;
  return {
    texelWidth: 1 / (3 * Math.max(2 ** n, 112)),
    texelHeight: r,
    maxMip: n,
  };
}
function Pl(e, t, n, r) {
  let i = e.getContext(),
    a = n.defines,
    o = n.vertexShader,
    s = n.fragmentShader,
    c = El(n),
    l = Ol(n),
    u = Al(n),
    d = Ml(n),
    f = Nl(n),
    p = dl(n),
    m = fl(a),
    h = i.createProgram(),
    g,
    _,
    v = n.glslVersion
      ? `#version ` +
        n.glslVersion +
        `
`
      : ``;
  (n.isRawShaderMaterial
    ? ((g = [
        `#define SHADER_TYPE ` + n.shaderType,
        `#define SHADER_NAME ` + n.shaderName,
        m,
      ].filter(ml).join(`
`)),
      g.length > 0 &&
        (g += `
`),
      (_ = [
        `#define SHADER_TYPE ` + n.shaderType,
        `#define SHADER_NAME ` + n.shaderName,
        m,
      ].filter(ml).join(`
`)),
      _.length > 0 &&
        (_ += `
`))
    : ((g = [
        wl(n),
        `#define SHADER_TYPE ` + n.shaderType,
        `#define SHADER_NAME ` + n.shaderName,
        m,
        n.extensionClipCullDistance ? `#define USE_CLIP_DISTANCE` : ``,
        n.batching ? `#define USE_BATCHING` : ``,
        n.batchingColor ? `#define USE_BATCHING_COLOR` : ``,
        n.instancing ? `#define USE_INSTANCING` : ``,
        n.instancingColor ? `#define USE_INSTANCING_COLOR` : ``,
        n.instancingMorph ? `#define USE_INSTANCING_MORPH` : ``,
        n.useFog && n.fog ? `#define USE_FOG` : ``,
        n.useFog && n.fogExp2 ? `#define FOG_EXP2` : ``,
        n.map ? `#define USE_MAP` : ``,
        n.envMap ? `#define USE_ENVMAP` : ``,
        n.envMap ? `#define ` + u : ``,
        n.lightMap ? `#define USE_LIGHTMAP` : ``,
        n.aoMap ? `#define USE_AOMAP` : ``,
        n.bumpMap ? `#define USE_BUMPMAP` : ``,
        n.normalMap ? `#define USE_NORMALMAP` : ``,
        n.normalMapObjectSpace ? `#define USE_NORMALMAP_OBJECTSPACE` : ``,
        n.normalMapTangentSpace ? `#define USE_NORMALMAP_TANGENTSPACE` : ``,
        n.displacementMap ? `#define USE_DISPLACEMENTMAP` : ``,
        n.emissiveMap ? `#define USE_EMISSIVEMAP` : ``,
        n.anisotropy ? `#define USE_ANISOTROPY` : ``,
        n.anisotropyMap ? `#define USE_ANISOTROPYMAP` : ``,
        n.clearcoatMap ? `#define USE_CLEARCOATMAP` : ``,
        n.clearcoatRoughnessMap ? `#define USE_CLEARCOAT_ROUGHNESSMAP` : ``,
        n.clearcoatNormalMap ? `#define USE_CLEARCOAT_NORMALMAP` : ``,
        n.iridescenceMap ? `#define USE_IRIDESCENCEMAP` : ``,
        n.iridescenceThicknessMap ? `#define USE_IRIDESCENCE_THICKNESSMAP` : ``,
        n.specularMap ? `#define USE_SPECULARMAP` : ``,
        n.specularColorMap ? `#define USE_SPECULAR_COLORMAP` : ``,
        n.specularIntensityMap ? `#define USE_SPECULAR_INTENSITYMAP` : ``,
        n.roughnessMap ? `#define USE_ROUGHNESSMAP` : ``,
        n.metalnessMap ? `#define USE_METALNESSMAP` : ``,
        n.alphaMap ? `#define USE_ALPHAMAP` : ``,
        n.alphaHash ? `#define USE_ALPHAHASH` : ``,
        n.transmission ? `#define USE_TRANSMISSION` : ``,
        n.transmissionMap ? `#define USE_TRANSMISSIONMAP` : ``,
        n.thicknessMap ? `#define USE_THICKNESSMAP` : ``,
        n.sheenColorMap ? `#define USE_SHEEN_COLORMAP` : ``,
        n.sheenRoughnessMap ? `#define USE_SHEEN_ROUGHNESSMAP` : ``,
        n.mapUv ? `#define MAP_UV ` + n.mapUv : ``,
        n.alphaMapUv ? `#define ALPHAMAP_UV ` + n.alphaMapUv : ``,
        n.lightMapUv ? `#define LIGHTMAP_UV ` + n.lightMapUv : ``,
        n.aoMapUv ? `#define AOMAP_UV ` + n.aoMapUv : ``,
        n.emissiveMapUv ? `#define EMISSIVEMAP_UV ` + n.emissiveMapUv : ``,
        n.bumpMapUv ? `#define BUMPMAP_UV ` + n.bumpMapUv : ``,
        n.normalMapUv ? `#define NORMALMAP_UV ` + n.normalMapUv : ``,
        n.displacementMapUv
          ? `#define DISPLACEMENTMAP_UV ` + n.displacementMapUv
          : ``,
        n.metalnessMapUv ? `#define METALNESSMAP_UV ` + n.metalnessMapUv : ``,
        n.roughnessMapUv ? `#define ROUGHNESSMAP_UV ` + n.roughnessMapUv : ``,
        n.anisotropyMapUv
          ? `#define ANISOTROPYMAP_UV ` + n.anisotropyMapUv
          : ``,
        n.clearcoatMapUv ? `#define CLEARCOATMAP_UV ` + n.clearcoatMapUv : ``,
        n.clearcoatNormalMapUv
          ? `#define CLEARCOAT_NORMALMAP_UV ` + n.clearcoatNormalMapUv
          : ``,
        n.clearcoatRoughnessMapUv
          ? `#define CLEARCOAT_ROUGHNESSMAP_UV ` + n.clearcoatRoughnessMapUv
          : ``,
        n.iridescenceMapUv
          ? `#define IRIDESCENCEMAP_UV ` + n.iridescenceMapUv
          : ``,
        n.iridescenceThicknessMapUv
          ? `#define IRIDESCENCE_THICKNESSMAP_UV ` + n.iridescenceThicknessMapUv
          : ``,
        n.sheenColorMapUv
          ? `#define SHEEN_COLORMAP_UV ` + n.sheenColorMapUv
          : ``,
        n.sheenRoughnessMapUv
          ? `#define SHEEN_ROUGHNESSMAP_UV ` + n.sheenRoughnessMapUv
          : ``,
        n.specularMapUv ? `#define SPECULARMAP_UV ` + n.specularMapUv : ``,
        n.specularColorMapUv
          ? `#define SPECULAR_COLORMAP_UV ` + n.specularColorMapUv
          : ``,
        n.specularIntensityMapUv
          ? `#define SPECULAR_INTENSITYMAP_UV ` + n.specularIntensityMapUv
          : ``,
        n.transmissionMapUv
          ? `#define TRANSMISSIONMAP_UV ` + n.transmissionMapUv
          : ``,
        n.thicknessMapUv ? `#define THICKNESSMAP_UV ` + n.thicknessMapUv : ``,
        n.vertexTangents && n.flatShading === !1 ? `#define USE_TANGENT` : ``,
        n.vertexNormals ? `#define HAS_NORMAL` : ``,
        n.vertexColors ? `#define USE_COLOR` : ``,
        n.vertexAlphas ? `#define USE_COLOR_ALPHA` : ``,
        n.vertexUv1s ? `#define USE_UV1` : ``,
        n.vertexUv2s ? `#define USE_UV2` : ``,
        n.vertexUv3s ? `#define USE_UV3` : ``,
        n.pointsUvs ? `#define USE_POINTS_UV` : ``,
        n.flatShading ? `#define FLAT_SHADED` : ``,
        n.skinning ? `#define USE_SKINNING` : ``,
        n.morphTargets ? `#define USE_MORPHTARGETS` : ``,
        n.morphNormals && n.flatShading === !1
          ? `#define USE_MORPHNORMALS`
          : ``,
        n.morphColors ? `#define USE_MORPHCOLORS` : ``,
        n.morphTargetsCount > 0
          ? `#define MORPHTARGETS_TEXTURE_STRIDE ` + n.morphTextureStride
          : ``,
        n.morphTargetsCount > 0
          ? `#define MORPHTARGETS_COUNT ` + n.morphTargetsCount
          : ``,
        n.doubleSided ? `#define DOUBLE_SIDED` : ``,
        n.flipSided ? `#define FLIP_SIDED` : ``,
        n.shadowMapEnabled ? `#define USE_SHADOWMAP` : ``,
        n.shadowMapEnabled ? `#define ` + c : ``,
        n.sizeAttenuation ? `#define USE_SIZEATTENUATION` : ``,
        n.numLightProbes > 0 ? `#define USE_LIGHT_PROBES` : ``,
        n.logarithmicDepthBuffer ? `#define USE_LOGARITHMIC_DEPTH_BUFFER` : ``,
        n.reversedDepthBuffer ? `#define USE_REVERSED_DEPTH_BUFFER` : ``,
        `uniform mat4 modelMatrix;`,
        `uniform mat4 modelViewMatrix;`,
        `uniform mat4 projectionMatrix;`,
        `uniform mat4 viewMatrix;`,
        `uniform mat3 normalMatrix;`,
        `uniform vec3 cameraPosition;`,
        `uniform bool isOrthographic;`,
        `#ifdef USE_INSTANCING`,
        `	attribute mat4 instanceMatrix;`,
        `#endif`,
        `#ifdef USE_INSTANCING_COLOR`,
        `	attribute vec3 instanceColor;`,
        `#endif`,
        `#ifdef USE_INSTANCING_MORPH`,
        `	uniform sampler2D morphTexture;`,
        `#endif`,
        `attribute vec3 position;`,
        `attribute vec3 normal;`,
        `attribute vec2 uv;`,
        `#ifdef USE_UV1`,
        `	attribute vec2 uv1;`,
        `#endif`,
        `#ifdef USE_UV2`,
        `	attribute vec2 uv2;`,
        `#endif`,
        `#ifdef USE_UV3`,
        `	attribute vec2 uv3;`,
        `#endif`,
        `#ifdef USE_TANGENT`,
        `	attribute vec4 tangent;`,
        `#endif`,
        `#if defined( USE_COLOR_ALPHA )`,
        `	attribute vec4 color;`,
        `#elif defined( USE_COLOR )`,
        `	attribute vec3 color;`,
        `#endif`,
        `#ifdef USE_SKINNING`,
        `	attribute vec4 skinIndex;`,
        `	attribute vec4 skinWeight;`,
        `#endif`,
        `
`,
      ].filter(ml).join(`
`)),
      (_ = [
        wl(n),
        `#define SHADER_TYPE ` + n.shaderType,
        `#define SHADER_NAME ` + n.shaderName,
        m,
        n.useFog && n.fog ? `#define USE_FOG` : ``,
        n.useFog && n.fogExp2 ? `#define FOG_EXP2` : ``,
        n.alphaToCoverage ? `#define ALPHA_TO_COVERAGE` : ``,
        n.map ? `#define USE_MAP` : ``,
        n.matcap ? `#define USE_MATCAP` : ``,
        n.envMap ? `#define USE_ENVMAP` : ``,
        n.envMap ? `#define ` + l : ``,
        n.envMap ? `#define ` + u : ``,
        n.envMap ? `#define ` + d : ``,
        f ? `#define CUBEUV_TEXEL_WIDTH ` + f.texelWidth : ``,
        f ? `#define CUBEUV_TEXEL_HEIGHT ` + f.texelHeight : ``,
        f ? `#define CUBEUV_MAX_MIP ` + f.maxMip + `.0` : ``,
        n.lightMap ? `#define USE_LIGHTMAP` : ``,
        n.aoMap ? `#define USE_AOMAP` : ``,
        n.bumpMap ? `#define USE_BUMPMAP` : ``,
        n.normalMap ? `#define USE_NORMALMAP` : ``,
        n.normalMapObjectSpace ? `#define USE_NORMALMAP_OBJECTSPACE` : ``,
        n.normalMapTangentSpace ? `#define USE_NORMALMAP_TANGENTSPACE` : ``,
        n.packedNormalMap ? `#define USE_PACKED_NORMALMAP` : ``,
        n.emissiveMap ? `#define USE_EMISSIVEMAP` : ``,
        n.anisotropy ? `#define USE_ANISOTROPY` : ``,
        n.anisotropyMap ? `#define USE_ANISOTROPYMAP` : ``,
        n.clearcoat ? `#define USE_CLEARCOAT` : ``,
        n.clearcoatMap ? `#define USE_CLEARCOATMAP` : ``,
        n.clearcoatRoughnessMap ? `#define USE_CLEARCOAT_ROUGHNESSMAP` : ``,
        n.clearcoatNormalMap ? `#define USE_CLEARCOAT_NORMALMAP` : ``,
        n.dispersion ? `#define USE_DISPERSION` : ``,
        n.retroreflection ? `#define USE_RETROREFLECTION` : ``,
        n.iridescence ? `#define USE_IRIDESCENCE` : ``,
        n.iridescenceMap ? `#define USE_IRIDESCENCEMAP` : ``,
        n.iridescenceThicknessMap ? `#define USE_IRIDESCENCE_THICKNESSMAP` : ``,
        n.specularMap ? `#define USE_SPECULARMAP` : ``,
        n.specularColorMap ? `#define USE_SPECULAR_COLORMAP` : ``,
        n.specularIntensityMap ? `#define USE_SPECULAR_INTENSITYMAP` : ``,
        n.roughnessMap ? `#define USE_ROUGHNESSMAP` : ``,
        n.metalnessMap ? `#define USE_METALNESSMAP` : ``,
        n.alphaMap ? `#define USE_ALPHAMAP` : ``,
        n.alphaTest ? `#define USE_ALPHATEST` : ``,
        n.alphaHash ? `#define USE_ALPHAHASH` : ``,
        n.sheen ? `#define USE_SHEEN` : ``,
        n.sheenColorMap ? `#define USE_SHEEN_COLORMAP` : ``,
        n.sheenRoughnessMap ? `#define USE_SHEEN_ROUGHNESSMAP` : ``,
        n.transmission ? `#define USE_TRANSMISSION` : ``,
        n.transmissionMap ? `#define USE_TRANSMISSIONMAP` : ``,
        n.thicknessMap ? `#define USE_THICKNESSMAP` : ``,
        n.vertexTangents && n.flatShading === !1 ? `#define USE_TANGENT` : ``,
        n.vertexColors || n.instancingColor ? `#define USE_COLOR` : ``,
        n.vertexAlphas || n.batchingColor ? `#define USE_COLOR_ALPHA` : ``,
        n.vertexUv1s ? `#define USE_UV1` : ``,
        n.vertexUv2s ? `#define USE_UV2` : ``,
        n.vertexUv3s ? `#define USE_UV3` : ``,
        n.pointsUvs ? `#define USE_POINTS_UV` : ``,
        n.gradientMap ? `#define USE_GRADIENTMAP` : ``,
        n.flatShading ? `#define FLAT_SHADED` : ``,
        n.doubleSided ? `#define DOUBLE_SIDED` : ``,
        n.flipSided ? `#define FLIP_SIDED` : ``,
        n.shadowMapEnabled ? `#define USE_SHADOWMAP` : ``,
        n.shadowMapEnabled ? `#define ` + c : ``,
        n.premultipliedAlpha ? `#define PREMULTIPLIED_ALPHA` : ``,
        n.numLightProbes > 0 ? `#define USE_LIGHT_PROBES` : ``,
        n.numLightProbeGrids > 0 ? `#define USE_LIGHT_PROBES_GRID` : ``,
        n.decodeVideoTexture ? `#define DECODE_VIDEO_TEXTURE` : ``,
        n.decodeVideoTextureEmissive
          ? `#define DECODE_VIDEO_TEXTURE_EMISSIVE`
          : ``,
        n.logarithmicDepthBuffer ? `#define USE_LOGARITHMIC_DEPTH_BUFFER` : ``,
        n.reversedDepthBuffer ? `#define USE_REVERSED_DEPTH_BUFFER` : ``,
        `uniform mat4 viewMatrix;`,
        `uniform vec3 cameraPosition;`,
        `uniform bool isOrthographic;`,
        n.toneMapping === 0 ? `` : `#define TONE_MAPPING`,
        n.toneMapping === 0 ? `` : Y.tonemapping_pars_fragment,
        n.toneMapping === 0 ? `` : cl(`toneMapping`, n.toneMapping),
        n.dithering ? `#define DITHERING` : ``,
        n.opaque ? `#define OPAQUE` : ``,
        Y.colorspace_pars_fragment,
        ol(`linearToOutputTexel`, n.outputColorSpace),
        ul(),
        n.useDepthPacking ? `#define DEPTH_PACKING ` + n.depthPacking : ``,
        `
`,
      ].filter(ml).join(`
`))),
    (o = vl(o)),
    (o = hl(o, n)),
    (o = gl(o, n)),
    (s = vl(s)),
    (s = hl(s, n)),
    (s = gl(s, n)),
    (o = Sl(o)),
    (s = Sl(s)),
    n.isRawShaderMaterial !== !0 &&
      ((v = `#version 300 es
`),
      (g =
        [
          p,
          `#define attribute in`,
          `#define varying out`,
          `#define texture2D texture`,
        ].join(`
`) +
        `
` +
        g),
      (_ =
        [
          `#define varying in`,
          n.glslVersion === `300 es`
            ? ``
            : `layout(location = 0) out highp vec4 pc_fragColor;`,
          n.glslVersion === `300 es` ? `` : `#define gl_FragColor pc_fragColor`,
          `#define gl_FragDepthEXT gl_FragDepth`,
          `#define texture2D texture`,
          `#define textureCube texture`,
          `#define texture2DProj textureProj`,
          `#define texture2DLodEXT textureLod`,
          `#define texture2DProjLodEXT textureProjLod`,
          `#define textureCubeLodEXT textureLod`,
          `#define texture2DGradEXT textureGrad`,
          `#define texture2DProjGradEXT textureProjGrad`,
          `#define textureCubeGradEXT textureGrad`,
        ].join(`
`) +
        `
` +
        _)));
  let y = v + g + o,
    b = v + _ + s,
    x = $c(i, i.VERTEX_SHADER, y),
    S = $c(i, i.FRAGMENT_SHADER, b);
  (i.attachShader(h, x),
    i.attachShader(h, S),
    n.index0AttributeName === void 0
      ? n.hasPositionAttribute === !0 && i.bindAttribLocation(h, 0, `position`)
      : i.bindAttribLocation(h, 0, n.index0AttributeName),
    i.linkProgram(h));
  function C(t) {
    if (e.debug.checkShaderErrors) {
      let n = i.getProgramInfoLog(h) || ``,
        r = i.getShaderInfoLog(x) || ``,
        a = i.getShaderInfoLog(S) || ``,
        o = n.trim(),
        s = r.trim(),
        c = a.trim(),
        l = !0,
        u = !0;
      if (i.getProgramParameter(h, i.LINK_STATUS) === !1) {
        if (((l = !1), typeof e.debug.onShaderError == `function`))
          e.debug.onShaderError(i, h, x, S);
        else {
          let e = al(i, x, `vertex`),
            n = al(i, S, `fragment`);
          V(
            `WebGLProgram: Shader Error ` +
              i.getError() +
              ` - VALIDATE_STATUS ` +
              i.getProgramParameter(h, i.VALIDATE_STATUS) +
              `

Material Name: ` +
              t.name +
              `
Material Type: ` +
              t.type +
              `

Program Info Log: ` +
              o +
              `
` +
              e +
              `
` +
              n,
          );
        }
      } else
        o === ``
          ? (s === `` || c === ``) && (u = !1)
          : B(`WebGLProgram: Program Info Log:`, o);
      u &&
        (t.diagnostics = {
          runnable: l,
          programLog: o,
          vertexShader: { log: s, prefix: g },
          fragmentShader: { log: c, prefix: _ },
        });
    }
    (i.deleteShader(x), i.deleteShader(S), (w = new Qc(i, h)), (T = pl(i, h)));
  }
  let w;
  this.getUniforms = function () {
    return (w === void 0 && C(this), w);
  };
  let T;
  this.getAttributes = function () {
    return (T === void 0 && C(this), T);
  };
  let E = n.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return (E === !1 && (E = i.getProgramParameter(h, el)), E);
    }),
    (this.destroy = function () {
      (r.releaseStatesOfProgram(this),
        i.deleteProgram(h),
        (this.program = void 0));
    }),
    (this.type = n.shaderType),
    (this.name = n.shaderName),
    (this.id = tl++),
    (this.cacheKey = t),
    (this.usedTimes = 1),
    (this.program = h),
    (this.vertexShader = x),
    (this.fragmentShader = S),
    this
  );
}
var Fl = 0,
  Il = class {
    constructor() {
      ((this.shaderCache = new Map()), (this.materialCache = new Map()));
    }
    update(e, t, n) {
      let r = this._getShaderCacheForMaterial(e);
      return (
        r.has(t) === !1 && (r.add(t), t.usedTimes++),
        r.has(n) === !1 && (r.add(n), n.usedTimes++),
        this
      );
    }
    remove(e) {
      let t = this.materialCache.get(e);
      for (let e of t)
        (e.usedTimes--, e.usedTimes === 0 && this.shaderCache.delete(e.code));
      return (this.materialCache.delete(e), this);
    }
    getVertexShaderStage(e) {
      return this._getShaderStage(e.vertexShader);
    }
    getFragmentShaderStage(e) {
      return this._getShaderStage(e.fragmentShader);
    }
    dispose() {
      (this.shaderCache.clear(), this.materialCache.clear());
    }
    _getShaderCacheForMaterial(e) {
      let t = this.materialCache,
        n = t.get(e);
      return (n === void 0 && ((n = new Set()), t.set(e, n)), n);
    }
    _getShaderStage(e) {
      let t = this.shaderCache,
        n = t.get(e);
      return (n === void 0 && ((n = new Ll(e)), t.set(e, n)), n);
    }
  },
  Ll = class {
    constructor(e) {
      ((this.id = Fl++), (this.code = e), (this.usedTimes = 0));
    }
  };
function Rl(e) {
  return e === 1030 || e === 37490 || e === 36285;
}
function zl(e, t, n, r, i, a) {
  let o = new hn(),
    s = new Il(),
    c = new Set(),
    l = [],
    u = new Map(),
    d = r.logarithmicDepthBuffer,
    f = r.precision,
    p = {
      MeshDepthMaterial: `depth`,
      MeshDistanceMaterial: `distance`,
      MeshNormalMaterial: `normal`,
      MeshBasicMaterial: `basic`,
      MeshLambertMaterial: `lambert`,
      MeshPhongMaterial: `phong`,
      MeshToonMaterial: `toon`,
      MeshStandardMaterial: `physical`,
      MeshPhysicalMaterial: `physical`,
      MeshMatcapMaterial: `matcap`,
      LineBasicMaterial: `basic`,
      LineDashedMaterial: `dashed`,
      PointsMaterial: `points`,
      ShadowMaterial: `shadow`,
      SpriteMaterial: `sprite`,
    };
  function m(e) {
    return (c.add(e), e === 0 ? `uv` : `uv${e}`);
  }
  function h(i, o, l, u, h, g) {
    let _ = u.fog,
      v = h.geometry,
      y =
        i.isMeshStandardMaterial ||
        i.isMeshLambertMaterial ||
        i.isMeshPhongMaterial
          ? u.environment
          : null,
      b =
        i.isMeshStandardMaterial ||
        (i.isMeshLambertMaterial && !i.envMap) ||
        (i.isMeshPhongMaterial && !i.envMap),
      x = t.get(i.envMap || y, b),
      S = x && x.mapping === 306 ? x.image.height : null,
      C = p[i.type];
    i.precision !== null &&
      ((f = r.getMaxPrecision(i.precision)),
      f !== i.precision &&
        B(
          `WebGLProgram.getParameters:`,
          i.precision,
          `not supported, using`,
          f,
          `instead.`,
        ));
    let w =
        v.morphAttributes.position ||
        v.morphAttributes.normal ||
        v.morphAttributes.color,
      T = w === void 0 ? 0 : w.length,
      E = 0;
    (v.morphAttributes.position !== void 0 && (E = 1),
      v.morphAttributes.normal !== void 0 && (E = 2),
      v.morphAttributes.color !== void 0 && (E = 3));
    let D, O, k, A;
    if (C) {
      let e = os[C];
      ((D = e.vertexShader), (O = e.fragmentShader));
    } else {
      ((D = i.vertexShader), (O = i.fragmentShader));
      let e = s.getVertexShaderStage(i),
        t = s.getFragmentShaderStage(i);
      (s.update(i, e, t), (k = e.id), (A = t.id));
    }
    let j = e.getRenderTarget(),
      ee = e.state.buffers.depth.getReversed(),
      M = h.isInstancedMesh === !0,
      N = h.isBatchedMesh === !0,
      te = !!i.map,
      P = !!i.matcap,
      ne = !!x,
      re = !!i.aoMap,
      ie = !!i.lightMap,
      ae = !!i.bumpMap && i.wireframe === !1,
      oe = !!i.normalMap,
      se = !!i.displacementMap,
      ce = !!i.emissiveMap,
      F = !!i.metalnessMap,
      le = !!i.roughnessMap,
      ue = i.anisotropy > 0,
      de = i.clearcoat > 0,
      fe = i.dispersion > 0,
      pe = i.retroreflectivity > 0,
      me = i.iridescence > 0,
      he = i.sheen > 0,
      ge = i.transmission > 0,
      _e = ue && !!i.anisotropyMap,
      ve = de && !!i.clearcoatMap,
      ye = de && !!i.clearcoatNormalMap,
      be = de && !!i.clearcoatRoughnessMap,
      xe = me && !!i.iridescenceMap,
      Se = me && !!i.iridescenceThicknessMap,
      Ce = he && !!i.sheenColorMap,
      we = he && !!i.sheenRoughnessMap,
      Te = !!i.specularMap,
      Ee = !!i.specularColorMap,
      De = !!i.specularIntensityMap,
      Oe = ge && !!i.transmissionMap,
      ke = ge && !!i.thicknessMap,
      Ae = !!i.gradientMap,
      je = !!i.alphaMap,
      Me = i.alphaTest > 0,
      I = !!i.alphaHash,
      Ne = !!i.extensions,
      Pe = 0;
    i.toneMapped &&
      (j === null || j.isXRRenderTarget === !0) &&
      (Pe = e.toneMapping);
    let Fe = {
      shaderID: C,
      shaderType: i.type,
      shaderName: i.name,
      vertexShader: D,
      fragmentShader: O,
      defines: i.defines,
      customVertexShaderID: k,
      customFragmentShaderID: A,
      isRawShaderMaterial: i.isRawShaderMaterial === !0,
      glslVersion: i.glslVersion,
      precision: f,
      batching: N,
      batchingColor: N && h._colorsTexture !== null,
      instancing: M,
      instancingColor: M && h.instanceColor !== null,
      instancingMorph: M && h.morphTexture !== null,
      outputColorSpace:
        j === null
          ? e.outputColorSpace
          : j.isXRRenderTarget === !0
            ? j.texture.colorSpace
            : K.workingColorSpace,
      alphaToCoverage: !!i.alphaToCoverage,
      map: te,
      matcap: P,
      envMap: ne,
      envMapMode: ne && x.mapping,
      envMapCubeUVHeight: S,
      aoMap: re,
      lightMap: ie,
      bumpMap: ae,
      normalMap: oe,
      displacementMap: se,
      emissiveMap: ce,
      normalMapObjectSpace: oe && i.normalMapType === 1,
      normalMapTangentSpace: oe && i.normalMapType === 0,
      packedNormalMap: oe && i.normalMapType === 0 && Rl(i.normalMap.format),
      metalnessMap: F,
      roughnessMap: le,
      anisotropy: ue,
      anisotropyMap: _e,
      clearcoat: de,
      clearcoatMap: ve,
      clearcoatNormalMap: ye,
      clearcoatRoughnessMap: be,
      dispersion: fe,
      retroreflection: pe,
      iridescence: me,
      iridescenceMap: xe,
      iridescenceThicknessMap: Se,
      sheen: he,
      sheenColorMap: Ce,
      sheenRoughnessMap: we,
      specularMap: Te,
      specularColorMap: Ee,
      specularIntensityMap: De,
      transmission: ge,
      transmissionMap: Oe,
      thicknessMap: ke,
      gradientMap: Ae,
      opaque:
        i.transparent === !1 && i.blending === 1 && i.alphaToCoverage === !1,
      alphaMap: je,
      alphaTest: Me,
      alphaHash: I,
      combine: i.combine,
      mapUv: te && m(i.map.channel),
      aoMapUv: re && m(i.aoMap.channel),
      lightMapUv: ie && m(i.lightMap.channel),
      bumpMapUv: ae && m(i.bumpMap.channel),
      normalMapUv: oe && m(i.normalMap.channel),
      displacementMapUv: se && m(i.displacementMap.channel),
      emissiveMapUv: ce && m(i.emissiveMap.channel),
      metalnessMapUv: F && m(i.metalnessMap.channel),
      roughnessMapUv: le && m(i.roughnessMap.channel),
      anisotropyMapUv: _e && m(i.anisotropyMap.channel),
      clearcoatMapUv: ve && m(i.clearcoatMap.channel),
      clearcoatNormalMapUv: ye && m(i.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: be && m(i.clearcoatRoughnessMap.channel),
      iridescenceMapUv: xe && m(i.iridescenceMap.channel),
      iridescenceThicknessMapUv: Se && m(i.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ce && m(i.sheenColorMap.channel),
      sheenRoughnessMapUv: we && m(i.sheenRoughnessMap.channel),
      specularMapUv: Te && m(i.specularMap.channel),
      specularColorMapUv: Ee && m(i.specularColorMap.channel),
      specularIntensityMapUv: De && m(i.specularIntensityMap.channel),
      transmissionMapUv: Oe && m(i.transmissionMap.channel),
      thicknessMapUv: ke && m(i.thicknessMap.channel),
      alphaMapUv: je && m(i.alphaMap.channel),
      vertexTangents: !!v.attributes.tangent && (oe || ue),
      vertexNormals: !!v.attributes.normal,
      vertexColors: i.vertexColors,
      vertexAlphas:
        i.vertexColors === !0 &&
        !!v.attributes.color &&
        v.attributes.color.itemSize === 4,
      pointsUvs: h.isPoints === !0 && !!v.attributes.uv && (te || je),
      fog: !!_,
      useFog: i.fog === !0,
      fogExp2: !!_ && _.isFogExp2,
      flatShading:
        i.wireframe === !1 &&
        (i.flatShading === !0 ||
          (v.attributes.normal === void 0 &&
            oe === !1 &&
            (i.isMeshLambertMaterial ||
              i.isMeshPhongMaterial ||
              i.isMeshStandardMaterial ||
              i.isMeshPhysicalMaterial))),
      sizeAttenuation: i.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reversedDepthBuffer: ee,
      skinning: h.isSkinnedMesh === !0,
      hasPositionAttribute: v.attributes.position !== void 0,
      morphTargets: v.morphAttributes.position !== void 0,
      morphNormals: v.morphAttributes.normal !== void 0,
      morphColors: v.morphAttributes.color !== void 0,
      morphTargetsCount: T,
      morphTextureStride: E,
      numSunLights: o.sun.length,
      numDirLights: o.directional.length,
      numPointLights: o.point.length,
      numSpotLights: o.spot.length,
      numSpotLightMaps: o.spotLightMap.length,
      numRectAreaLights: o.rectArea.length,
      numHemiLights: o.hemi.length,
      numSunLightShadows: o.sunShadowMap.length,
      numDirLightShadows: o.directionalShadowMap.length,
      numPointLightShadows: o.pointShadowMap.length,
      numSpotLightShadows: o.spotShadowMap.length,
      numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
      numLightProbes: o.numLightProbes,
      numLightProbeGrids: g.length,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: i.dithering,
      shadowMapEnabled: e.shadowMap.enabled && l.length > 0,
      shadowMapType: e.shadowMap.type,
      toneMapping: Pe,
      decodeVideoTexture:
        te &&
        i.map.isVideoTexture === !0 &&
        K.getTransfer(i.map.colorSpace) === `srgb`,
      decodeVideoTextureEmissive:
        ce &&
        i.emissiveMap.isVideoTexture === !0 &&
        K.getTransfer(i.emissiveMap.colorSpace) === `srgb`,
      premultipliedAlpha: i.premultipliedAlpha,
      doubleSided: i.side === 2,
      flipSided: i.side === 1,
      useDepthPacking: i.depthPacking >= 0,
      depthPacking: i.depthPacking || 0,
      index0AttributeName: i.index0AttributeName,
      extensionClipCullDistance:
        Ne &&
        i.extensions.clipCullDistance === !0 &&
        n.has(`WEBGL_clip_cull_distance`),
      extensionMultiDraw:
        ((Ne && i.extensions.multiDraw === !0) || N) &&
        n.has(`WEBGL_multi_draw`),
      rendererExtensionParallelShaderCompile: n.has(
        `KHR_parallel_shader_compile`,
      ),
      customProgramCacheKey: i.customProgramCacheKey(),
    };
    return (
      (Fe.vertexUv1s = c.has(1)),
      (Fe.vertexUv2s = c.has(2)),
      (Fe.vertexUv3s = c.has(3)),
      c.clear(),
      Fe
    );
  }
  function g(t) {
    let n = [];
    if (
      (t.shaderID
        ? n.push(t.shaderID)
        : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)),
      t.defines !== void 0)
    )
      for (let e in t.defines) (n.push(e), n.push(t.defines[e]));
    return (
      t.isRawShaderMaterial === !1 &&
        (_(n, t), v(n, t), n.push(e.outputColorSpace)),
      n.push(t.customProgramCacheKey),
      n.join()
    );
  }
  function _(e, t) {
    (e.push(t.precision),
      e.push(t.outputColorSpace),
      e.push(t.envMapMode),
      e.push(t.envMapCubeUVHeight),
      e.push(t.mapUv),
      e.push(t.alphaMapUv),
      e.push(t.lightMapUv),
      e.push(t.aoMapUv),
      e.push(t.bumpMapUv),
      e.push(t.normalMapUv),
      e.push(t.displacementMapUv),
      e.push(t.emissiveMapUv),
      e.push(t.metalnessMapUv),
      e.push(t.roughnessMapUv),
      e.push(t.anisotropyMapUv),
      e.push(t.clearcoatMapUv),
      e.push(t.clearcoatNormalMapUv),
      e.push(t.clearcoatRoughnessMapUv),
      e.push(t.iridescenceMapUv),
      e.push(t.iridescenceThicknessMapUv),
      e.push(t.sheenColorMapUv),
      e.push(t.sheenRoughnessMapUv),
      e.push(t.specularMapUv),
      e.push(t.specularColorMapUv),
      e.push(t.specularIntensityMapUv),
      e.push(t.transmissionMapUv),
      e.push(t.thicknessMapUv),
      e.push(t.combine),
      e.push(t.fogExp2),
      e.push(t.sizeAttenuation),
      e.push(t.morphTargetsCount),
      e.push(t.morphAttributeCount),
      e.push(t.numSunLights),
      e.push(t.numDirLights),
      e.push(t.numPointLights),
      e.push(t.numSpotLights),
      e.push(t.numSpotLightMaps),
      e.push(t.numHemiLights),
      e.push(t.numRectAreaLights),
      e.push(t.numSunLightShadows),
      e.push(t.numDirLightShadows),
      e.push(t.numPointLightShadows),
      e.push(t.numSpotLightShadows),
      e.push(t.numSpotLightShadowsWithMaps),
      e.push(t.numLightProbes),
      e.push(t.shadowMapType),
      e.push(t.toneMapping),
      e.push(t.numClippingPlanes),
      e.push(t.numClipIntersection),
      e.push(t.depthPacking));
  }
  function v(e, t) {
    (o.disableAll(),
      t.instancing && o.enable(0),
      t.instancingColor && o.enable(1),
      t.instancingMorph && o.enable(2),
      t.matcap && o.enable(3),
      t.envMap && o.enable(4),
      t.normalMapObjectSpace && o.enable(5),
      t.normalMapTangentSpace && o.enable(6),
      t.clearcoat && o.enable(7),
      t.iridescence && o.enable(8),
      t.alphaTest && o.enable(9),
      t.vertexColors && o.enable(10),
      t.vertexAlphas && o.enable(11),
      t.vertexUv1s && o.enable(12),
      t.vertexUv2s && o.enable(13),
      t.vertexUv3s && o.enable(14),
      t.vertexTangents && o.enable(15),
      t.anisotropy && o.enable(16),
      t.alphaHash && o.enable(17),
      t.batching && o.enable(18),
      t.dispersion && o.enable(19),
      t.retroreflection && o.enable(24),
      t.batchingColor && o.enable(20),
      t.gradientMap && o.enable(21),
      t.packedNormalMap && o.enable(22),
      t.vertexNormals && o.enable(23),
      e.push(o.mask),
      o.disableAll(),
      t.fog && o.enable(0),
      t.useFog && o.enable(1),
      t.flatShading && o.enable(2),
      t.logarithmicDepthBuffer && o.enable(3),
      t.reversedDepthBuffer && o.enable(4),
      t.skinning && o.enable(5),
      t.morphTargets && o.enable(6),
      t.morphNormals && o.enable(7),
      t.morphColors && o.enable(8),
      t.premultipliedAlpha && o.enable(9),
      t.shadowMapEnabled && o.enable(10),
      t.doubleSided && o.enable(11),
      t.flipSided && o.enable(12),
      t.useDepthPacking && o.enable(13),
      t.dithering && o.enable(14),
      t.transmission && o.enable(15),
      t.sheen && o.enable(16),
      t.opaque && o.enable(17),
      t.pointsUvs && o.enable(18),
      t.decodeVideoTexture && o.enable(19),
      t.decodeVideoTextureEmissive && o.enable(20),
      t.alphaToCoverage && o.enable(21),
      t.numLightProbeGrids > 0 && o.enable(22),
      t.hasPositionAttribute && o.enable(23),
      e.push(o.mask));
  }
  function y(e) {
    let t = p[e.type],
      n;
    if (t) {
      let e = os[t];
      n = Ca.clone(e.uniforms);
    } else n = e.uniforms;
    return n;
  }
  function b(t, n) {
    let r = u.get(n);
    return (
      r === void 0
        ? ((r = new Pl(e, n, t, i)), l.push(r), u.set(n, r))
        : ++r.usedTimes,
      r
    );
  }
  function x(e) {
    if (--e.usedTimes === 0) {
      let t = l.indexOf(e);
      ((l[t] = l[l.length - 1]), l.pop(), u.delete(e.cacheKey), e.destroy());
    }
  }
  function S(e) {
    s.remove(e);
  }
  function C() {
    s.dispose();
  }
  return {
    getParameters: h,
    getProgramCacheKey: g,
    getUniforms: y,
    acquireProgram: b,
    releaseProgram: x,
    releaseShaderCache: S,
    programs: l,
    dispose: C,
  };
}
function Bl() {
  let e = new WeakMap();
  function t(t) {
    return e.has(t);
  }
  function n(t) {
    let n = e.get(t);
    return (n === void 0 && ((n = {}), e.set(t, n)), n);
  }
  function r(t) {
    e.delete(t);
  }
  function i(t, n, r) {
    e.get(t)[n] = r;
  }
  function a() {
    e = new WeakMap();
  }
  return { has: t, get: n, remove: r, update: i, dispose: a };
}
function Vl(e, t) {
  return e.groupOrder === t.groupOrder
    ? e.renderOrder === t.renderOrder
      ? e.material.id === t.material.id
        ? e.materialVariant === t.materialVariant
          ? e.z === t.z
            ? e.id - t.id
            : e.z - t.z
          : e.materialVariant - t.materialVariant
        : e.material.id - t.material.id
      : e.renderOrder - t.renderOrder
    : e.groupOrder - t.groupOrder;
}
function Hl(e, t) {
  return e.groupOrder === t.groupOrder
    ? e.renderOrder === t.renderOrder
      ? e.z === t.z
        ? e.id - t.id
        : t.z - e.z
      : e.renderOrder - t.renderOrder
    : e.groupOrder - t.groupOrder;
}
function Ul() {
  let e = [],
    t = 0,
    n = [],
    r = [],
    i = [];
  function a() {
    ((t = 0), (n.length = 0), (r.length = 0), (i.length = 0));
  }
  function o(e) {
    let t = 0;
    return (e.isInstancedMesh && (t += 2), e.isSkinnedMesh && (t += 1), t);
  }
  function s(n, r, i, a, s, c) {
    let l = e[t];
    return (
      l === void 0
        ? ((l = {
            id: n.id,
            object: n,
            geometry: r,
            material: i,
            materialVariant: o(n),
            groupOrder: a,
            renderOrder: n.renderOrder,
            z: s,
            group: c,
          }),
          (e[t] = l))
        : ((l.id = n.id),
          (l.object = n),
          (l.geometry = r),
          (l.material = i),
          (l.materialVariant = o(n)),
          (l.groupOrder = a),
          (l.renderOrder = n.renderOrder),
          (l.z = s),
          (l.group = c)),
      t++,
      l
    );
  }
  function c(e, t, a, o, c, l, u) {
    u.reversedDepth === !0 && (c = -c);
    let d = s(e, t, a, o, c, l);
    a.transmission > 0
      ? r.push(d)
      : a.transparent === !0
        ? i.push(d)
        : n.push(d);
  }
  function l(e, t, a, o, c, l) {
    let u = s(e, t, a, o, c, l);
    a.transmission > 0
      ? r.unshift(u)
      : a.transparent === !0
        ? i.unshift(u)
        : n.unshift(u);
  }
  function u(e, t) {
    (n.length > 1 && n.sort(e || Vl),
      r.length > 1 && r.sort(t || Hl),
      i.length > 1 && i.sort(t || Hl));
  }
  function d() {
    for (let n = t, r = e.length; n < r; n++) {
      let t = e[n];
      if (t.id === null) break;
      ((t.id = null),
        (t.object = null),
        (t.geometry = null),
        (t.material = null),
        (t.group = null));
    }
  }
  return {
    opaque: n,
    transmissive: r,
    transparent: i,
    init: a,
    push: c,
    unshift: l,
    finish: d,
    sort: u,
  };
}
function Wl() {
  let e = new WeakMap();
  function t(t, n) {
    let r = e.get(t),
      i;
    return (
      r === void 0
        ? ((i = new Ul()), e.set(t, [i]))
        : n >= r.length
          ? ((i = new Ul()), r.push(i))
          : (i = r[n]),
      i
    );
  }
  function n() {
    e = new WeakMap();
  }
  return { get: t, dispose: n };
}
function Gl() {
  let e = {};
  return {
    get: function (t) {
      if (e[t.id] !== void 0) return e[t.id];
      let n;
      switch (t.type) {
        case `SunLight`:
        case `DirectionalLight`:
          n = { direction: new W(), color: new J() };
          break;
        case `SpotLight`:
          n = {
            position: new W(),
            direction: new W(),
            color: new J(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case `PointLight`:
          n = { position: new W(), color: new J(), distance: 0, decay: 0 };
          break;
        case `HemisphereLight`:
          n = { direction: new W(), skyColor: new J(), groundColor: new J() };
          break;
        case `RectAreaLight`:
          n = {
            color: new J(),
            position: new W(),
            halfWidth: new W(),
            halfHeight: new W(),
          };
      }
      return ((e[t.id] = n), n);
    },
  };
}
function Kl() {
  let e = {};
  return {
    get: function (t) {
      if (e[t.id] !== void 0) return e[t.id];
      let n;
      switch (t.type) {
        case `SunLight`:
        case `DirectionalLight`:
          n = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new U(),
          };
          break;
        case `SpotLight`:
          n = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new U(),
          };
          break;
        case `PointLight`:
          n = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new U(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
      }
      return ((e[t.id] = n), n);
    },
  };
}
var ql = 0;
function Jl(e, t) {
  return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + +!!t.map - !!e.map;
}
function Yl(e) {
  let t = new Gl(),
    n = Kl(),
    r = {
      version: 0,
      hash: {
        sunLength: -1,
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numSunShadows: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      sun: [],
      sunShadow: [],
      sunShadowMap: [],
      sunShadowMatrix: [],
      sunShadowCascade: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let e = 0; e < 9; e++) r.probe.push(new W());
  let i = new W(),
    a = new q(),
    o = new q();
  function s(i) {
    let a = 0,
      o = 0,
      s = 0;
    for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
    let c = 0,
      l = 0,
      u = 0,
      d = 0,
      f = 0,
      p = 0,
      m = 0,
      h = 0,
      g = 0,
      _ = 0,
      v = 0,
      y = 0,
      b = 0,
      x = 0;
    i.sort(Jl);
    for (let e = 0, S = i.length; e < S; e++) {
      let S = i[e],
        C = S.color,
        w = S.intensity,
        T = S.distance,
        E = null;
      if (
        (S.shadow &&
          S.shadow.map &&
          (E =
            S.shadow.map.texture.format === 1030
              ? S.shadow.map.texture
              : S.shadow.map.depthTexture || S.shadow.map.texture),
        S.isAmbientLight)
      )
        ((a += C.r * w), (o += C.g * w), (s += C.b * w));
      else if (S.isLightProbe) {
        for (let e = 0; e < 9; e++)
          r.probe[e].addScaledVector(S.sh.coefficients[e], w);
        x++;
      } else if (S.isSunLight) {
        let e = t.get(S);
        if ((e.color.copy(S.color).multiplyScalar(S.intensity), S.castShadow)) {
          let e = S.shadow,
            t = n.get(S);
          ((t.shadowIntensity = e.intensity),
            (t.shadowBias = e.bias),
            (t.shadowNormalBias = e.normalBias),
            (t.shadowRadius = e.radius),
            t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),
            (r.sunShadow[l] = t),
            (r.sunShadowMap[l] = E));
          let i = e.getViewportCount();
          for (let t = 0; t < i; t++)
            ((r.sunShadowMatrix[u + t] = e.getMatrix(t)),
              (r.sunShadowCascade[u + t] = e._cascadeData[t]));
          ((u += i), l++);
        }
        ((r.sun[c] = e), c++);
      } else if (S.isDirectionalLight) {
        let e = t.get(S);
        if ((e.color.copy(S.color).multiplyScalar(S.intensity), S.castShadow)) {
          let e = S.shadow,
            t = n.get(S);
          ((t.shadowIntensity = e.intensity),
            (t.shadowBias = e.bias),
            (t.shadowNormalBias = e.normalBias),
            (t.shadowRadius = e.radius),
            (t.shadowMapSize = e.mapSize),
            (r.directionalShadow[d] = t),
            (r.directionalShadowMap[d] = E),
            (r.directionalShadowMatrix[d] = S.shadow.matrix),
            g++);
        }
        ((r.directional[d] = e), d++);
      } else if (S.isSpotLight) {
        let e = t.get(S);
        (e.position.setFromMatrixPosition(S.matrixWorld),
          e.color.copy(C).multiplyScalar(w),
          (e.distance = T),
          (e.coneCos = Math.cos(S.angle)),
          (e.penumbraCos = Math.cos(S.angle * (1 - S.penumbra))),
          (e.decay = S.decay),
          (r.spot[p] = e));
        let i = S.shadow;
        if (
          (S.map &&
            ((r.spotLightMap[y] = S.map),
            y++,
            i.updateMatrices(S),
            S.castShadow && b++),
          (r.spotLightMatrix[p] = i.matrix),
          S.castShadow)
        ) {
          let e = n.get(S);
          ((e.shadowIntensity = i.intensity),
            (e.shadowBias = i.bias),
            (e.shadowNormalBias = i.normalBias),
            (e.shadowRadius = i.radius),
            (e.shadowMapSize = i.mapSize),
            (r.spotShadow[p] = e),
            (r.spotShadowMap[p] = E),
            v++);
        }
        p++;
      } else if (S.isRectAreaLight) {
        let e = t.get(S);
        (e.color.copy(C).multiplyScalar(w),
          e.halfWidth.set(S.width * 0.5, 0, 0),
          e.halfHeight.set(0, S.height * 0.5, 0),
          (r.rectArea[m] = e),
          m++);
      } else if (S.isPointLight) {
        let e = t.get(S);
        if (
          (e.color.copy(S.color).multiplyScalar(S.intensity),
          (e.distance = S.distance),
          (e.decay = S.decay),
          S.castShadow)
        ) {
          let e = S.shadow,
            t = n.get(S);
          ((t.shadowIntensity = e.intensity),
            (t.shadowBias = e.bias),
            (t.shadowNormalBias = e.normalBias),
            (t.shadowRadius = e.radius),
            (t.shadowMapSize = e.mapSize),
            (t.shadowCameraNear = e.camera.near),
            (t.shadowCameraFar = e.camera.far),
            (r.pointShadow[f] = t),
            (r.pointShadowMap[f] = E),
            (r.pointShadowMatrix[f] = S.shadow.matrix),
            _++);
        }
        ((r.point[f] = e), f++);
      } else if (S.isHemisphereLight) {
        let e = t.get(S);
        (e.skyColor.copy(S.color).multiplyScalar(w),
          e.groundColor.copy(S.groundColor).multiplyScalar(w),
          (r.hemi[h] = e),
          h++);
      }
    }
    (m > 0 &&
      (e.has(`OES_texture_float_linear`) === !0
        ? ((r.rectAreaLTC1 = X.LTC_FLOAT_1), (r.rectAreaLTC2 = X.LTC_FLOAT_2))
        : ((r.rectAreaLTC1 = X.LTC_HALF_1), (r.rectAreaLTC2 = X.LTC_HALF_2))),
      (r.ambient[0] = a),
      (r.ambient[1] = o),
      (r.ambient[2] = s));
    let S = r.hash;
    (S.sunLength !== c ||
      S.directionalLength !== d ||
      S.pointLength !== f ||
      S.spotLength !== p ||
      S.rectAreaLength !== m ||
      S.hemiLength !== h ||
      S.numSunShadows !== l ||
      S.numDirectionalShadows !== g ||
      S.numPointShadows !== _ ||
      S.numSpotShadows !== v ||
      S.numSpotMaps !== y ||
      S.numLightProbes !== x) &&
      ((r.sun.length = c),
      (r.directional.length = d),
      (r.spot.length = p),
      (r.rectArea.length = m),
      (r.point.length = f),
      (r.hemi.length = h),
      (r.sunShadow.length = l),
      (r.sunShadowMap.length = l),
      (r.sunShadowMatrix.length = u),
      (r.sunShadowCascade.length = u),
      (r.directionalShadow.length = g),
      (r.directionalShadowMap.length = g),
      (r.directionalShadowMatrix.length = g),
      (r.pointShadow.length = _),
      (r.pointShadowMap.length = _),
      (r.pointShadowMatrix.length = _),
      (r.spotShadow.length = v),
      (r.spotShadowMap.length = v),
      (r.spotLightMatrix.length = v + y - b),
      (r.spotLightMap.length = y),
      (r.numSpotLightShadowsWithMaps = b),
      (r.numLightProbes = x),
      (S.sunLength = c),
      (S.directionalLength = d),
      (S.pointLength = f),
      (S.spotLength = p),
      (S.rectAreaLength = m),
      (S.hemiLength = h),
      (S.numSunShadows = l),
      (S.numDirectionalShadows = g),
      (S.numPointShadows = _),
      (S.numSpotShadows = v),
      (S.numSpotMaps = y),
      (S.numLightProbes = x),
      (r.version = ql++));
  }
  function c(e, t) {
    let n = 0,
      s = 0,
      c = 0,
      l = 0,
      u = 0,
      d = 0,
      f = t.matrixWorldInverse;
    for (let t = 0, p = e.length; t < p; t++) {
      let p = e[t];
      if (p.isSunLight) {
        let e = r.sun[n];
        (e.direction.setFromMatrixPosition(p.matrixWorld),
          e.direction.transformDirection(f),
          n++);
      } else if (p.isDirectionalLight) {
        let e = r.directional[s];
        (e.direction.setFromMatrixPosition(p.matrixWorld),
          i.setFromMatrixPosition(p.target.matrixWorld),
          e.direction.sub(i),
          e.direction.transformDirection(f),
          s++);
      } else if (p.isSpotLight) {
        let e = r.spot[l];
        (e.position.setFromMatrixPosition(p.matrixWorld),
          e.position.applyMatrix4(f),
          e.direction.setFromMatrixPosition(p.matrixWorld),
          i.setFromMatrixPosition(p.target.matrixWorld),
          e.direction.sub(i),
          e.direction.transformDirection(f),
          l++);
      } else if (p.isRectAreaLight) {
        let e = r.rectArea[u];
        (e.position.setFromMatrixPosition(p.matrixWorld),
          e.position.applyMatrix4(f),
          o.identity(),
          a.copy(p.matrixWorld),
          a.premultiply(f),
          o.extractRotation(a),
          e.halfWidth.set(p.width * 0.5, 0, 0),
          e.halfHeight.set(0, p.height * 0.5, 0),
          e.halfWidth.applyMatrix4(o),
          e.halfHeight.applyMatrix4(o),
          u++);
      } else if (p.isPointLight) {
        let e = r.point[c];
        (e.position.setFromMatrixPosition(p.matrixWorld),
          e.position.applyMatrix4(f),
          c++);
      } else if (p.isHemisphereLight) {
        let e = r.hemi[d];
        (e.direction.setFromMatrixPosition(p.matrixWorld),
          e.direction.transformDirection(f),
          d++);
      }
    }
  }
  return { setup: s, setupView: c, state: r };
}
function Xl(e) {
  let t = new Yl(e),
    n = [],
    r = [],
    i = [];
  function a(e) {
    ((d.camera = e), (n.length = 0), (r.length = 0), (i.length = 0));
  }
  function o(e) {
    n.push(e);
  }
  function s(e) {
    r.push(e);
  }
  function c(e) {
    i.push(e);
  }
  function l() {
    t.setup(n);
  }
  function u(e) {
    t.setupView(n, e);
  }
  let d = {
    lightsArray: n,
    shadowsArray: r,
    lightProbeGridArray: i,
    camera: null,
    lights: t,
    transmissionRenderTarget: {},
    textureUnits: 0,
  };
  return {
    init: a,
    state: d,
    setupLights: l,
    setupLightsView: u,
    pushLight: o,
    pushShadow: s,
    pushLightProbeGrid: c,
  };
}
function Zl(e) {
  let t = new WeakMap();
  function n(n, r = 0) {
    let i = t.get(n),
      a;
    return (
      i === void 0
        ? ((a = new Xl(e)), t.set(n, [a]))
        : r >= i.length
          ? ((a = new Xl(e)), i.push(a))
          : (a = i[r]),
      a
    );
  }
  function r() {
    t = new WeakMap();
  }
  return { get: n, dispose: r };
}
var Ql = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  $l = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,
  eu = [
    new W(1, 0, 0),
    new W(-1, 0, 0),
    new W(0, 1, 0),
    new W(0, -1, 0),
    new W(0, 0, 1),
    new W(0, 0, -1),
  ],
  tu = [
    new W(0, -1, 0),
    new W(0, -1, 0),
    new W(0, 0, 1),
    new W(0, 0, -1),
    new W(0, -1, 0),
    new W(0, -1, 0),
  ],
  nu = new q(),
  ru = new W(),
  iu = new W();
function au(e, t, n) {
  let r = new Li(),
    i = new U(),
    a = new U(),
    o = new $t(),
    s = new Aa(),
    c = new ja(),
    l = {},
    d = n.maxTextureSize,
    f = { 0: 1, 1: 0, 2: 2 },
    m = new Ea({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new U() },
        radius: { value: 4 },
      },
      vertexShader: Ql,
      fragmentShader: $l,
    }),
    h = m.clone();
  h.defines.HORIZONTAL_PASS = 1;
  let g = new Pr();
  g.setAttribute(
    `position`,
    new yr(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  );
  let _ = new si(g, m),
    v = this;
  ((this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = 1));
  let y = this.type;
  this.render = function (t, n, s) {
    if (
      v.enabled === !1 ||
      (v.autoUpdate === !1 && v.needsUpdate === !1) ||
      t.length === 0
    )
      return;
    this.type === 2 &&
      (B(
        `WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`,
      ),
      (this.type = 1));
    let c = e.getRenderTarget(),
      l = e.getActiveCubeFace(),
      f = e.getActiveMipmapLevel(),
      m = e.state;
    (m.setBlending(0),
      m.buffers.depth.getReversed() === !0
        ? m.buffers.color.setClear(0, 0, 0, 0)
        : m.buffers.color.setClear(1, 1, 1, 1),
      m.buffers.depth.setTest(!0),
      m.setScissorTest(!1));
    let h = y !== this.type;
    h &&
      n.traverse(function (e) {
        e.material &&
          (Array.isArray(e.material)
            ? e.material.forEach((e) => (e.needsUpdate = !0))
            : (e.material.needsUpdate = !0));
      });
    for (let c = 0, l = t.length; c < l; c++) {
      let l = t[c],
        f = l.shadow;
      if (f === void 0) {
        B(`WebGLShadowMap:`, l, `has no shadow.`);
        continue;
      }
      if (f.autoUpdate === !1 && f.needsUpdate === !1) continue;
      i.copy(f.mapSize);
      let g = f.getFrameExtents();
      (i.multiply(g),
        a.copy(f.mapSize),
        (i.x > d || i.y > d) &&
          (i.x > d &&
            ((a.x = Math.floor(d / g.x)),
            (i.x = a.x * g.x),
            (f.mapSize.x = a.x)),
          i.y > d &&
            ((a.y = Math.floor(d / g.y)),
            (i.y = a.y * g.y),
            (f.mapSize.y = a.y))));
      let _ = e.state.buffers.depth.getReversed();
      if (((f.camera._reversedDepth = _), f.map === null || h === !0)) {
        if (
          (f.map !== null &&
            (f.map.depthTexture !== null &&
              (f.map.depthTexture.dispose(), (f.map.depthTexture = null)),
            f.map.dispose()),
          this.type === 3)
        ) {
          if (l.isPointLight) {
            B(
              `WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`,
            );
            continue;
          }
          ((f.map = new tn(i.x, i.y, {
            format: P,
            type: C,
            minFilter: p,
            magFilter: p,
            generateMipmaps: !1,
          })),
            (f.map.texture.name = l.name + `.shadowMap`),
            (f.map.depthTexture = new sa(i.x, i.y, S)),
            (f.map.depthTexture.name = l.name + `.shadowMapDepth`),
            (f.map.depthTexture.format = ee),
            (f.map.depthTexture.compareFunction = null),
            (f.map.depthTexture.minFilter = u),
            (f.map.depthTexture.magFilter = u));
        } else
          (l.isPointLight
            ? ((f.map = new Is(i.x)), (f.map.depthTexture = new ca(i.x, x)))
            : ((f.map = new tn(i.x, i.y)),
              (f.map.depthTexture = new sa(i.x, i.y, x))),
            (f.map.depthTexture.name = l.name + `.shadowMap`),
            (f.map.depthTexture.format = ee),
            this.type === 1
              ? ((f.map.depthTexture.compareFunction = _ ? 518 : 515),
                (f.map.depthTexture.minFilter = p),
                (f.map.depthTexture.magFilter = p))
              : ((f.map.depthTexture.compareFunction = null),
                (f.map.depthTexture.minFilter = u),
                (f.map.depthTexture.magFilter = u)));
        f.camera.updateProjectionMatrix();
      }
      f.map.isWebGLCubeRenderTarget !== !0 &&
        (f.map.width !== i.x || f.map.height !== i.y) &&
        f.map.setSize(i.x, i.y);
      let v = f.map.isWebGLCubeRenderTarget ? 6 : f.getViewportCount();
      l.isPointLight !== !0 && f.updateMatrices(l, s);
      for (let t = 0; t < v; t++) {
        let i = f.getCamera(t);
        if (l.isPointLight) {
          let e = f.camera,
            n = f.matrix,
            r = l.distance || e.far;
          (r !== e.far && ((e.far = r), e.updateProjectionMatrix()),
            ru.setFromMatrixPosition(l.matrixWorld),
            e.position.copy(ru),
            iu.copy(e.position),
            iu.add(eu[t]),
            e.up.copy(tu[t]),
            e.lookAt(iu),
            e.updateMatrixWorld(),
            n.makeTranslation(-ru.x, -ru.y, -ru.z),
            nu.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
            f._frustum.setFromProjectionMatrix(
              nu,
              e.coordinateSystem,
              e.reversedDepth,
            ));
        }
        if (f.map.isWebGLCubeRenderTarget)
          (e.setRenderTarget(f.map, t), e.clear());
        else {
          t === 0 && (e.setRenderTarget(f.map), e.clear());
          let n = f.getViewport(t);
          (o.set(a.x * n.x, a.y * n.y, a.x * n.z, a.y * n.w), m.viewport(o));
        }
        ((r = f.getFrustum(t)), T(n, s, i, l, this.type));
      }
      (f.isPointLightShadow !== !0 && this.type === 3 && b(f, s),
        (f.needsUpdate = !1));
    }
    ((y = this.type), (v.needsUpdate = !1), e.setRenderTarget(c, l, f));
  };
  function b(n, r) {
    let a = t.update(_);
    (m.defines.VSM_SAMPLES !== n.blurSamples &&
      ((m.defines.VSM_SAMPLES = n.blurSamples),
      (h.defines.VSM_SAMPLES = n.blurSamples),
      (m.needsUpdate = !0),
      (h.needsUpdate = !0)),
      n.mapPass === null
        ? (n.mapPass = new tn(i.x, i.y, { format: P, type: C }))
        : (n.mapPass.width !== n.map.width ||
            n.mapPass.height !== n.map.height) &&
          n.mapPass.setSize(n.map.width, n.map.height),
      (m.uniforms.shadow_pass.value = n.map.depthTexture),
      m.uniforms.resolution.value.set(n.map.width, n.map.height),
      (m.uniforms.radius.value = n.radius),
      e.setRenderTarget(n.mapPass),
      e.clear(),
      e.renderBufferDirect(r, null, a, m, _, null),
      (h.uniforms.shadow_pass.value = n.mapPass.texture),
      h.uniforms.resolution.value.set(n.map.width, n.map.height),
      (h.uniforms.radius.value = n.radius),
      e.setRenderTarget(n.map),
      e.clear(),
      e.renderBufferDirect(r, null, a, h, _, null));
  }
  function w(t, n, r, i) {
    let a = null,
      o =
        r.isPointLight === !0
          ? t.customDistanceMaterial
          : t.customDepthMaterial;
    if (o !== void 0) a = o;
    else if (
      ((a = r.isPointLight === !0 ? c : s),
      (e.localClippingEnabled &&
        n.clipShadows === !0 &&
        Array.isArray(n.clippingPlanes) &&
        n.clippingPlanes.length !== 0) ||
        (n.displacementMap && n.displacementScale !== 0) ||
        (n.alphaMap && n.alphaTest > 0) ||
        (n.map && n.alphaTest > 0) ||
        n.alphaToCoverage === !0)
    ) {
      let e = a.uuid,
        t = n.uuid,
        r = l[e];
      r === void 0 && ((r = {}), (l[e] = r));
      let i = r[t];
      (i === void 0 &&
        ((i = a.clone()), (r[t] = i), n.addEventListener(`dispose`, E)),
        (a = i));
    }
    if (
      ((a.visible = n.visible),
      (a.wireframe = n.wireframe),
      i === 3
        ? (a.side = n.shadowSide === null ? n.side : n.shadowSide)
        : (a.side = n.shadowSide === null ? f[n.side] : n.shadowSide),
      (a.alphaMap = n.alphaMap),
      (a.alphaTest = n.alphaToCoverage === !0 ? 0.5 : n.alphaTest),
      (a.map = n.map),
      (a.clipShadows = n.clipShadows),
      (a.clippingPlanes = n.clippingPlanes),
      (a.clipIntersection = n.clipIntersection),
      (a.displacementMap = n.displacementMap),
      (a.displacementScale = n.displacementScale),
      (a.displacementBias = n.displacementBias),
      (a.wireframeLinewidth = n.wireframeLinewidth),
      (a.linewidth = n.linewidth),
      r.isPointLight === !0 && a.isMeshDistanceMaterial === !0)
    ) {
      let t = e.properties.get(a);
      t.light = r;
    }
    return a;
  }
  function T(n, i, a, o, s) {
    if (n.visible === !1) return;
    if (
      n.layers.test(i.layers) &&
      (n.isMesh || n.isLine || n.isPoints) &&
      (n.castShadow || (n.receiveShadow && s === 3)) &&
      (!n.frustumCulled || n.intersectsFrustum(r))
    ) {
      n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
      let r = t.update(n),
        c = n.material;
      if (Array.isArray(c)) {
        let t = r.groups;
        for (let l = 0, u = t.length; l < u; l++) {
          let u = t[l],
            d = c[u.materialIndex];
          if (d && d.visible) {
            let t = w(n, d, o, s);
            (n.onBeforeShadow(e, n, i, a, r, t, u),
              e.renderBufferDirect(a, null, r, t, n, u),
              n.onAfterShadow(e, n, i, a, r, t, u));
          }
        }
      } else if (c.visible) {
        let t = w(n, c, o, s);
        (n.onBeforeShadow(e, n, i, a, r, t, null),
          e.renderBufferDirect(a, null, r, t, n, null),
          n.onAfterShadow(e, n, i, a, r, t, null));
      }
    }
    let c = n.children;
    for (let e = 0, t = c.length; e < t; e++) T(c[e], i, a, o, s);
  }
  function E(e) {
    e.target.removeEventListener(`dispose`, E);
    for (let t in l) {
      let n = l[t],
        r = e.target.uuid;
      r in n && (n[r].dispose(), delete n[r]);
    }
  }
}
function ou(e, t) {
  function n() {
    let t = !1,
      n = new $t(),
      r = null,
      i = new $t(0, 0, 0, 0);
    return {
      setMask: function (n) {
        r !== n && !t && (e.colorMask(n, n, n, n), (r = n));
      },
      setLocked: function (e) {
        t = e;
      },
      setClear: function (t, r, a, o, s) {
        (s === !0 && ((t *= o), (r *= o), (a *= o)),
          n.set(t, r, a, o),
          i.equals(n) === !1 && (e.clearColor(t, r, a, o), i.copy(n)));
      },
      reset: function () {
        ((t = !1), (r = null), i.set(-1, 0, 0, 0));
      },
    };
  }
  function r() {
    let n = !1,
      r = !1,
      i = null,
      a = null,
      o = null;
    return {
      setReversed: function (e) {
        if (r !== e) {
          let n = t.get(`EXT_clip_control`);
          (e
            ? n.clipControlEXT(n.LOWER_LEFT_EXT, n.ZERO_TO_ONE_EXT)
            : n.clipControlEXT(n.LOWER_LEFT_EXT, n.NEGATIVE_ONE_TO_ONE_EXT),
            (r = e));
          let i = o;
          ((o = null), this.setClear(i));
        }
      },
      getReversed: function () {
        return r;
      },
      setTest: function (t) {
        t ? F(e.DEPTH_TEST) : le(e.DEPTH_TEST);
      },
      setMask: function (t) {
        i !== t && !n && (e.depthMask(t), (i = t));
      },
      setFunc: function (t) {
        if ((r && (t = ct[t]), a !== t)) {
          switch (t) {
            case 0:
              e.depthFunc(e.NEVER);
              break;
            case 1:
              e.depthFunc(e.ALWAYS);
              break;
            case 2:
              e.depthFunc(e.LESS);
              break;
            case 3:
              e.depthFunc(e.LEQUAL);
              break;
            case 4:
              e.depthFunc(e.EQUAL);
              break;
            case 5:
              e.depthFunc(e.GEQUAL);
              break;
            case 6:
              e.depthFunc(e.GREATER);
              break;
            case 7:
              e.depthFunc(e.NOTEQUAL);
              break;
            default:
              e.depthFunc(e.LEQUAL);
          }
          a = t;
        }
      },
      setLocked: function (e) {
        n = e;
      },
      setClear: function (t) {
        o !== t && ((o = t), r && (t = 1 - t), e.clearDepth(t));
      },
      reset: function () {
        ((n = !1), (i = null), (a = null), (o = null), (r = !1));
      },
    };
  }
  function i() {
    let t = !1,
      n = null,
      r = null,
      i = null,
      a = null,
      o = null,
      s = null,
      c = null,
      l = null;
    return {
      setTest: function (n) {
        t || (n ? F(e.STENCIL_TEST) : le(e.STENCIL_TEST));
      },
      setMask: function (r) {
        n !== r && !t && (e.stencilMask(r), (n = r));
      },
      setFunc: function (t, n, o) {
        (r !== t || i !== n || a !== o) &&
          (e.stencilFunc(t, n, o), (r = t), (i = n), (a = o));
      },
      setOp: function (t, n, r) {
        (o !== t || s !== n || c !== r) &&
          (e.stencilOp(t, n, r), (o = t), (s = n), (c = r));
      },
      setLocked: function (e) {
        t = e;
      },
      setClear: function (t) {
        l !== t && (e.clearStencil(t), (l = t));
      },
      reset: function () {
        ((t = !1),
          (n = null),
          (r = null),
          (i = null),
          (a = null),
          (o = null),
          (s = null),
          (c = null),
          (l = null));
      },
    };
  }
  let a = new n(),
    o = new r(),
    s = new i(),
    c = new WeakMap(),
    l = new WeakMap(),
    u = {},
    d = {},
    f = {},
    p = new WeakMap(),
    m = [],
    h = null,
    g = !1,
    _ = null,
    v = null,
    y = null,
    b = null,
    x = null,
    S = null,
    C = null,
    w = new J(0, 0, 0),
    T = 0,
    E = !1,
    D = null,
    O = null,
    k = null,
    A = null,
    j = null,
    ee = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
    M = !1,
    N = 0,
    te = e.getParameter(e.VERSION);
  te.indexOf(`WebGL`) === -1
    ? te.indexOf(`OpenGL ES`) !== -1 &&
      ((N = parseFloat(/^OpenGL ES (\d)/.exec(te)[1])), (M = N >= 2))
    : ((N = parseFloat(/^WebGL (\d)/.exec(te)[1])), (M = N >= 1));
  let P = null,
    ne = {},
    re = e.getParameter(e.SCISSOR_BOX),
    ie = e.getParameter(e.VIEWPORT),
    ae = new $t().fromArray(re),
    oe = new $t().fromArray(ie);
  function se(t, n, r, i) {
    let a = new Uint8Array(4),
      o = e.createTexture();
    (e.bindTexture(t, o),
      e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST),
      e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST));
    for (let o = 0; o < r; o++)
      t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY
        ? e.texImage3D(n, 0, e.RGBA, 1, 1, i, 0, e.RGBA, e.UNSIGNED_BYTE, a)
        : e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
    return o;
  }
  let ce = {};
  ((ce[e.TEXTURE_2D] = se(e.TEXTURE_2D, e.TEXTURE_2D, 1)),
    (ce[e.TEXTURE_CUBE_MAP] = se(
      e.TEXTURE_CUBE_MAP,
      e.TEXTURE_CUBE_MAP_POSITIVE_X,
      6,
    )),
    (ce[e.TEXTURE_2D_ARRAY] = se(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1)),
    (ce[e.TEXTURE_3D] = se(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1)),
    a.setClear(0, 0, 0, 1),
    o.setClear(1),
    s.setClear(0),
    F(e.DEPTH_TEST),
    o.setFunc(3),
    _e(!1),
    ve(1),
    F(e.CULL_FACE),
    he(0));
  function F(t) {
    u[t] !== !0 && (e.enable(t), (u[t] = !0));
  }
  function le(t) {
    u[t] !== !1 && (e.disable(t), (u[t] = !1));
  }
  function ue(t, n) {
    return (
      f[t] !== n &&
      (e.bindFramebuffer(t, n),
      (f[t] = n),
      t === e.DRAW_FRAMEBUFFER && (f[e.FRAMEBUFFER] = n),
      t === e.FRAMEBUFFER && (f[e.DRAW_FRAMEBUFFER] = n),
      !0)
    );
  }
  function de(t, n) {
    let r = m,
      i = !1;
    if (t) {
      ((r = p.get(n)), r === void 0 && ((r = []), p.set(n, r)));
      let a = t.textures;
      if (r.length !== a.length || r[0] !== e.COLOR_ATTACHMENT0) {
        for (let t = 0, n = a.length; t < n; t++)
          r[t] = e.COLOR_ATTACHMENT0 + t;
        ((r.length = a.length), (i = !0));
      }
    } else r[0] !== e.BACK && ((r[0] = e.BACK), (i = !0));
    i && e.drawBuffers(r);
  }
  function fe(t) {
    return h !== t && (e.useProgram(t), (h = t), !0);
  }
  let pe = {
    100: e.FUNC_ADD,
    101: e.FUNC_SUBTRACT,
    102: e.FUNC_REVERSE_SUBTRACT,
  };
  ((pe[103] = e.MIN), (pe[104] = e.MAX));
  let me = {
    200: e.ZERO,
    201: e.ONE,
    202: e.SRC_COLOR,
    204: e.SRC_ALPHA,
    210: e.SRC_ALPHA_SATURATE,
    208: e.DST_COLOR,
    206: e.DST_ALPHA,
    203: e.ONE_MINUS_SRC_COLOR,
    205: e.ONE_MINUS_SRC_ALPHA,
    209: e.ONE_MINUS_DST_COLOR,
    207: e.ONE_MINUS_DST_ALPHA,
    211: e.CONSTANT_COLOR,
    212: e.ONE_MINUS_CONSTANT_COLOR,
    213: e.CONSTANT_ALPHA,
    214: e.ONE_MINUS_CONSTANT_ALPHA,
  };
  function he(t, n, r, i, a, o, s, c, l, u) {
    if (t === 0) {
      g === !0 && (le(e.BLEND), (g = !1));
      return;
    }
    if ((g === !1 && (F(e.BLEND), (g = !0)), t !== 5)) {
      if (t !== _ || u !== E) {
        if (
          ((v !== 100 || x !== 100) &&
            (e.blendEquation(e.FUNC_ADD), (v = 100), (x = 100)),
          u)
        )
          switch (t) {
            case 1:
              e.blendFuncSeparate(
                e.ONE,
                e.ONE_MINUS_SRC_ALPHA,
                e.ONE,
                e.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case 2:
              e.blendFunc(e.ONE, e.ONE);
              break;
            case 3:
              e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
              break;
            case 4:
              e.blendFuncSeparate(
                e.DST_COLOR,
                e.ONE_MINUS_SRC_ALPHA,
                e.ZERO,
                e.ONE,
              );
              break;
            default:
              V(`WebGLState: Invalid blending: `, t);
          }
        else
          switch (t) {
            case 1:
              e.blendFuncSeparate(
                e.SRC_ALPHA,
                e.ONE_MINUS_SRC_ALPHA,
                e.ONE,
                e.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case 2:
              e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
              break;
            case 3:
              V(
                `WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`,
              );
              break;
            case 4:
              V(
                `WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`,
              );
              break;
            default:
              V(`WebGLState: Invalid blending: `, t);
          }
        ((y = null),
          (b = null),
          (S = null),
          (C = null),
          w.set(0, 0, 0),
          (T = 0),
          (_ = t),
          (E = u));
      }
      return;
    }
    ((a ||= n),
      (o ||= r),
      (s ||= i),
      (n !== v || a !== x) &&
        (e.blendEquationSeparate(pe[n], pe[a]), (v = n), (x = a)),
      (r !== y || i !== b || o !== S || s !== C) &&
        (e.blendFuncSeparate(me[r], me[i], me[o], me[s]),
        (y = r),
        (b = i),
        (S = o),
        (C = s)),
      (c.equals(w) === !1 || l !== T) &&
        (e.blendColor(c.r, c.g, c.b, l), w.copy(c), (T = l)),
      (_ = t),
      (E = !1));
  }
  function ge(t, n) {
    t.side === 2 ? le(e.CULL_FACE) : F(e.CULL_FACE);
    let r = t.side === 1;
    (n && (r = !r),
      _e(r),
      t.blending === 1 && t.transparent === !1
        ? he(0)
        : he(
            t.blending,
            t.blendEquation,
            t.blendSrc,
            t.blendDst,
            t.blendEquationAlpha,
            t.blendSrcAlpha,
            t.blendDstAlpha,
            t.blendColor,
            t.blendAlpha,
            t.premultipliedAlpha,
          ),
      o.setFunc(t.depthFunc),
      o.setTest(t.depthTest),
      o.setMask(t.depthWrite),
      a.setMask(t.colorWrite));
    let i = t.stencilWrite;
    (s.setTest(i),
      i &&
        (s.setMask(t.stencilWriteMask),
        s.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask),
        s.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
      be(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits),
      t.alphaToCoverage === !0
        ? F(e.SAMPLE_ALPHA_TO_COVERAGE)
        : le(e.SAMPLE_ALPHA_TO_COVERAGE));
  }
  function _e(t) {
    D !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), (D = t));
  }
  function ve(t) {
    (t === 0
      ? le(e.CULL_FACE)
      : (F(e.CULL_FACE),
        t !== O &&
          (t === 1
            ? e.cullFace(e.BACK)
            : t === 2
              ? e.cullFace(e.FRONT)
              : e.cullFace(e.FRONT_AND_BACK))),
      (O = t));
  }
  function ye(t) {
    t !== k && (M && e.lineWidth(t), (k = t));
  }
  function be(t, n, r) {
    t
      ? (F(e.POLYGON_OFFSET_FILL),
        (A !== n || j !== r) &&
          ((A = n),
          (j = r),
          o.getReversed() && (n = -n),
          e.polygonOffset(n, r)))
      : le(e.POLYGON_OFFSET_FILL);
  }
  function xe(t) {
    t ? F(e.SCISSOR_TEST) : le(e.SCISSOR_TEST);
  }
  function Se(t) {
    (t === void 0 && (t = e.TEXTURE0 + ee - 1),
      P !== t && (e.activeTexture(t), (P = t)));
  }
  function Ce(t, n, r) {
    r === void 0 && (r = P === null ? e.TEXTURE0 + ee - 1 : P);
    let i = ne[r];
    (i === void 0 && ((i = { type: void 0, texture: void 0 }), (ne[r] = i)),
      (i.type !== t || i.texture !== n) &&
        (P !== r && (e.activeTexture(r), (P = r)),
        e.bindTexture(t, n || ce[t]),
        (i.type = t),
        (i.texture = n)));
  }
  function we() {
    let t = ne[P];
    t !== void 0 &&
      t.type !== void 0 &&
      (e.bindTexture(t.type, null), (t.type = void 0), (t.texture = void 0));
  }
  function Te() {
    try {
      e.compressedTexImage2D(...arguments);
    } catch (e) {
      V(`WebGLState:`, e);
    }
  }
  function Ee() {
    try {
      e.compressedTexImage3D(...arguments);
    } catch (e) {
      V(`WebGLState:`, e);
    }
  }
  function De() {
    try {
      e.texSubImage2D(...arguments);
    } catch (e) {
      V(`WebGLState:`, e);
    }
  }
  function Oe() {
    try {
      e.texSubImage3D(...arguments);
    } catch (e) {
      V(`WebGLState:`, e);
    }
  }
  function ke() {
    try {
      e.compressedTexSubImage2D(...arguments);
    } catch (e) {
      V(`WebGLState:`, e);
    }
  }
  function Ae() {
    try {
      e.compressedTexSubImage3D(...arguments);
    } catch (e) {
      V(`WebGLState:`, e);
    }
  }
  function je() {
    try {
      e.texStorage2D(...arguments);
    } catch (e) {
      V(`WebGLState:`, e);
    }
  }
  function Me() {
    try {
      e.texStorage3D(...arguments);
    } catch (e) {
      V(`WebGLState:`, e);
    }
  }
  function I() {
    try {
      e.texImage2D(...arguments);
    } catch (e) {
      V(`WebGLState:`, e);
    }
  }
  function Ne() {
    try {
      e.texImage3D(...arguments);
    } catch (e) {
      V(`WebGLState:`, e);
    }
  }
  function Pe(t) {
    return d[t] === void 0 ? e.getParameter(t) : d[t];
  }
  function Fe(t, n) {
    d[t] !== n && (e.pixelStorei(t, n), (d[t] = n));
  }
  function L(t) {
    ae.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w), ae.copy(t));
  }
  function Ie(t) {
    oe.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w), oe.copy(t));
  }
  function R(t, n) {
    let r = l.get(n);
    r === void 0 && ((r = new WeakMap()), l.set(n, r));
    let i = r.get(t);
    i === void 0 && ((i = e.getUniformBlockIndex(n, t.name)), r.set(t, i));
  }
  function z(t, n) {
    let r = l.get(n).get(t);
    c.get(n) !== r &&
      (e.uniformBlockBinding(n, r, t.__bindingPointIndex), c.set(n, r));
  }
  function Le() {
    (e.disable(e.BLEND),
      e.disable(e.CULL_FACE),
      e.disable(e.DEPTH_TEST),
      e.disable(e.POLYGON_OFFSET_FILL),
      e.disable(e.SCISSOR_TEST),
      e.disable(e.STENCIL_TEST),
      e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),
      e.blendEquation(e.FUNC_ADD),
      e.blendFunc(e.ONE, e.ZERO),
      e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO),
      e.blendColor(0, 0, 0, 0),
      e.colorMask(!0, !0, !0, !0),
      e.clearColor(0, 0, 0, 0),
      e.depthMask(!0),
      e.depthFunc(e.LESS),
      o.setReversed(!1),
      e.clearDepth(1),
      e.stencilMask(4294967295),
      e.stencilFunc(e.ALWAYS, 0, 4294967295),
      e.stencilOp(e.KEEP, e.KEEP, e.KEEP),
      e.clearStencil(0),
      e.cullFace(e.BACK),
      e.frontFace(e.CCW),
      e.polygonOffset(0, 0),
      e.activeTexture(e.TEXTURE0),
      e.bindFramebuffer(e.FRAMEBUFFER, null),
      e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null),
      e.bindFramebuffer(e.READ_FRAMEBUFFER, null),
      e.useProgram(null),
      e.lineWidth(1),
      e.scissor(0, 0, e.canvas.width, e.canvas.height),
      e.viewport(0, 0, e.canvas.width, e.canvas.height),
      e.pixelStorei(e.PACK_ALIGNMENT, 4),
      e.pixelStorei(e.UNPACK_ALIGNMENT, 4),
      e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1),
      e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
      e.pixelStorei(
        e.UNPACK_COLORSPACE_CONVERSION_WEBGL,
        e.BROWSER_DEFAULT_WEBGL,
      ),
      e.pixelStorei(e.PACK_ROW_LENGTH, 0),
      e.pixelStorei(e.PACK_SKIP_PIXELS, 0),
      e.pixelStorei(e.PACK_SKIP_ROWS, 0),
      e.pixelStorei(e.UNPACK_ROW_LENGTH, 0),
      e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0),
      e.pixelStorei(e.UNPACK_SKIP_PIXELS, 0),
      e.pixelStorei(e.UNPACK_SKIP_ROWS, 0),
      e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0),
      (u = {}),
      (d = {}),
      (P = null),
      (ne = {}),
      (f = {}),
      (p = new WeakMap()),
      (m = []),
      (h = null),
      (g = !1),
      (_ = null),
      (v = null),
      (y = null),
      (b = null),
      (x = null),
      (S = null),
      (C = null),
      (w = new J(0, 0, 0)),
      (T = 0),
      (E = !1),
      (D = null),
      (O = null),
      (k = null),
      (A = null),
      (j = null),
      ae.set(0, 0, e.canvas.width, e.canvas.height),
      oe.set(0, 0, e.canvas.width, e.canvas.height),
      a.reset(),
      o.reset(),
      s.reset());
  }
  return {
    buffers: { color: a, depth: o, stencil: s },
    enable: F,
    disable: le,
    bindFramebuffer: ue,
    drawBuffers: de,
    useProgram: fe,
    setBlending: he,
    setMaterial: ge,
    setFlipSided: _e,
    setCullFace: ve,
    setLineWidth: ye,
    setPolygonOffset: be,
    setScissorTest: xe,
    activeTexture: Se,
    bindTexture: Ce,
    unbindTexture: we,
    compressedTexImage2D: Te,
    compressedTexImage3D: Ee,
    texImage2D: I,
    texImage3D: Ne,
    pixelStorei: Fe,
    getParameter: Pe,
    updateUBOMapping: R,
    uniformBlockBinding: z,
    texStorage2D: je,
    texStorage3D: Me,
    texSubImage2D: De,
    texSubImage3D: Oe,
    compressedTexSubImage2D: ke,
    compressedTexSubImage3D: Ae,
    scissor: L,
    viewport: Ie,
    reset: Le,
  };
}
function su(e, t, n, r, i, a, o) {
  let g = t.has(`WEBGL_multisampled_render_to_texture`)
      ? t.get(`WEBGL_multisampled_render_to_texture`)
      : null,
    _ =
      typeof navigator > `u` ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    v = new U(),
    y = new WeakMap(),
    b = new Set(),
    x,
    S = new WeakMap(),
    C = !1;
  try {
    C =
      typeof OffscreenCanvas < `u` &&
      new OffscreenCanvas(1, 1).getContext(`2d`) !== null;
  } catch {}
  function w(e, t) {
    return C ? new OffscreenCanvas(e, t) : tt(`canvas`);
  }
  function T(e, t, n) {
    let r = 1,
      i = Pe(e);
    if (
      ((i.width > n || i.height > n) && (r = n / Math.max(i.width, i.height)),
      r < 1)
    ) {
      if (
        (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < `u` && e instanceof ImageBitmap) ||
        (typeof VideoFrame < `u` && e instanceof VideoFrame)
      ) {
        let n = Math.floor(r * i.width),
          a = Math.floor(r * i.height);
        x === void 0 && (x = w(n, a));
        let o = t ? w(n, a) : x;
        return (
          (o.width = n),
          (o.height = a),
          o.getContext(`2d`).drawImage(e, 0, 0, n, a),
          B(
            `WebGLRenderer: Texture has been resized from (` +
              i.width +
              `x` +
              i.height +
              `) to (` +
              n +
              `x` +
              a +
              `).`,
          ),
          o
        );
      }
      return (
        `data` in e &&
          B(
            `WebGLRenderer: Image in DataTexture is too big (` +
              i.width +
              `x` +
              i.height +
              `).`,
          ),
        e
      );
    }
    return e;
  }
  function E(e) {
    return e.generateMipmaps;
  }
  function D(t) {
    e.generateMipmap(t);
  }
  function O(t) {
    return t.isWebGLCubeRenderTarget
      ? e.TEXTURE_CUBE_MAP
      : t.isWebGL3DRenderTarget
        ? e.TEXTURE_3D
        : t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture
          ? e.TEXTURE_2D_ARRAY
          : e.TEXTURE_2D;
  }
  function k(n, r, i, a, o, s = !1) {
    if (n !== null) {
      if (e[n] !== void 0) return e[n];
      B(
        `WebGLRenderer: Attempt to use non-existing WebGL internal format '` +
          n +
          `'`,
      );
    }
    let c;
    a &&
      ((c = t.get(`EXT_texture_norm16`)),
      c ||
        B(
          `WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`,
        ));
    let l = r;
    if (
      (r === e.RED &&
        (i === e.FLOAT && (l = e.R32F),
        i === e.HALF_FLOAT && (l = e.R16F),
        i === e.UNSIGNED_BYTE && (l = e.R8),
        i === e.UNSIGNED_SHORT && c && (l = c.R16_EXT),
        i === e.SHORT && c && (l = c.R16_SNORM_EXT)),
      r === e.RED_INTEGER &&
        (i === e.UNSIGNED_BYTE && (l = e.R8UI),
        i === e.UNSIGNED_SHORT && (l = e.R16UI),
        i === e.UNSIGNED_INT && (l = e.R32UI),
        i === e.BYTE && (l = e.R8I),
        i === e.SHORT && (l = e.R16I),
        i === e.INT && (l = e.R32I)),
      r === e.RG &&
        (i === e.FLOAT && (l = e.RG32F),
        i === e.HALF_FLOAT && (l = e.RG16F),
        i === e.UNSIGNED_BYTE && (l = e.RG8),
        i === e.UNSIGNED_SHORT && c && (l = c.RG16_EXT),
        i === e.SHORT && c && (l = c.RG16_SNORM_EXT)),
      r === e.RG_INTEGER &&
        (i === e.UNSIGNED_BYTE && (l = e.RG8UI),
        i === e.UNSIGNED_SHORT && (l = e.RG16UI),
        i === e.UNSIGNED_INT && (l = e.RG32UI),
        i === e.BYTE && (l = e.RG8I),
        i === e.SHORT && (l = e.RG16I),
        i === e.INT && (l = e.RG32I)),
      r === e.RGB_INTEGER &&
        (i === e.UNSIGNED_BYTE && (l = e.RGB8UI),
        i === e.UNSIGNED_SHORT && (l = e.RGB16UI),
        i === e.UNSIGNED_INT && (l = e.RGB32UI),
        i === e.BYTE && (l = e.RGB8I),
        i === e.SHORT && (l = e.RGB16I),
        i === e.INT && (l = e.RGB32I)),
      r === e.RGBA_INTEGER &&
        (i === e.UNSIGNED_BYTE && (l = e.RGBA8UI),
        i === e.UNSIGNED_SHORT && (l = e.RGBA16UI),
        i === e.UNSIGNED_INT && (l = e.RGBA32UI),
        i === e.BYTE && (l = e.RGBA8I),
        i === e.SHORT && (l = e.RGBA16I),
        i === e.INT && (l = e.RGBA32I)),
      r === e.RGB &&
        (i === e.UNSIGNED_SHORT && c && (l = c.RGB16_EXT),
        i === e.SHORT && c && (l = c.RGB16_SNORM_EXT),
        i === e.UNSIGNED_INT_5_9_9_9_REV && (l = e.RGB9_E5),
        i === e.UNSIGNED_INT_10F_11F_11F_REV && (l = e.R11F_G11F_B10F)),
      r === e.RGBA)
    ) {
      let t = s ? Ke : K.getTransfer(o);
      (i === e.FLOAT && (l = e.RGBA32F),
        i === e.HALF_FLOAT && (l = e.RGBA16F),
        i === e.UNSIGNED_BYTE && (l = t === `srgb` ? e.SRGB8_ALPHA8 : e.RGBA8),
        i === e.UNSIGNED_SHORT && c && (l = c.RGBA16_EXT),
        i === e.SHORT && c && (l = c.RGBA16_SNORM_EXT),
        i === e.UNSIGNED_SHORT_4_4_4_4 && (l = e.RGBA4),
        i === e.UNSIGNED_SHORT_5_5_5_1 && (l = e.RGB5_A1));
    }
    return (
      (l === e.R16F ||
        l === e.R32F ||
        l === e.RG16F ||
        l === e.RG32F ||
        l === e.RGBA16F ||
        l === e.RGBA32F) &&
        t.get(`EXT_color_buffer_float`),
      l
    );
  }
  function A(t, n) {
    let r;
    return (
      t
        ? n === null || n === 1014 || n === 1020
          ? (r = e.DEPTH24_STENCIL8)
          : n === 1015
            ? (r = e.DEPTH32F_STENCIL8)
            : n === 1012 &&
              ((r = e.DEPTH24_STENCIL8),
              B(
                `DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`,
              ))
        : n === null || n === 1014 || n === 1020
          ? (r = e.DEPTH_COMPONENT24)
          : n === 1015
            ? (r = e.DEPTH_COMPONENT32F)
            : n === 1012 && (r = e.DEPTH_COMPONENT16),
      r
    );
  }
  function j(e, t) {
    return E(e) === !0 ||
      (e.isFramebufferTexture && e.minFilter !== 1003 && e.minFilter !== 1006)
      ? Math.log2(Math.max(t.width, t.height)) + 1
      : e.mipmaps !== void 0 && e.mipmaps.length > 0
        ? e.mipmaps.length
        : e.isCompressedTexture && Array.isArray(e.image)
          ? t.mipmaps.length
          : 1;
  }
  function ee(e) {
    let t = e.target;
    (t.removeEventListener(`dispose`, ee),
      te(t),
      t.isVideoTexture && y.delete(t),
      t.isHTMLTexture && b.delete(t));
  }
  function N(e) {
    let t = e.target;
    (t.removeEventListener(`dispose`, N), ne(t));
  }
  function te(e) {
    let t = r.get(e);
    if (t.__webglInit === void 0) return;
    let n = e.source,
      i = S.get(n);
    if (i) {
      let r = i[t.__cacheKey];
      (r.usedTimes--,
        r.usedTimes === 0 && P(e),
        Object.keys(i).length === 0 && S.delete(n));
    }
    r.remove(e);
  }
  function P(t) {
    let n = r.get(t);
    e.deleteTexture(n.__webglTexture);
    let i = t.source,
      a = S.get(i);
    (delete a[n.__cacheKey], o.memory.textures--);
  }
  function ne(t) {
    let n = r.get(t);
    if (
      (t.depthTexture && (t.depthTexture.dispose(), r.remove(t.depthTexture)),
      t.isWebGLCubeRenderTarget)
    )
      for (let t = 0; t < 6; t++) {
        if (Array.isArray(n.__webglFramebuffer[t]))
          for (let r = 0; r < n.__webglFramebuffer[t].length; r++)
            e.deleteFramebuffer(n.__webglFramebuffer[t][r]);
        else e.deleteFramebuffer(n.__webglFramebuffer[t]);
        n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[t]);
      }
    else {
      if (Array.isArray(n.__webglFramebuffer))
        for (let t = 0; t < n.__webglFramebuffer.length; t++)
          e.deleteFramebuffer(n.__webglFramebuffer[t]);
      else e.deleteFramebuffer(n.__webglFramebuffer);
      if (
        (n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer),
        n.__webglMultisampledFramebuffer &&
          e.deleteFramebuffer(n.__webglMultisampledFramebuffer),
        n.__webglColorRenderbuffer)
      )
        for (let t = 0; t < n.__webglColorRenderbuffer.length; t++)
          n.__webglColorRenderbuffer[t] &&
            e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
      n.__webglDepthRenderbuffer &&
        e.deleteRenderbuffer(n.__webglDepthRenderbuffer);
    }
    let i = t.textures;
    for (let t = 0, n = i.length; t < n; t++) {
      let n = r.get(i[t]);
      (n.__webglTexture &&
        (e.deleteTexture(n.__webglTexture), o.memory.textures--),
        r.remove(i[t]));
    }
    r.remove(t);
  }
  let re = 0;
  function ie() {
    re = 0;
  }
  function ae() {
    return re;
  }
  function oe(e) {
    re = e;
  }
  function se() {
    let e = re;
    return (
      e >= i.maxTextures &&
        B(
          `WebGLTextures: Trying to use ` +
            (e + 1) +
            ` texture units while this GPU supports only ` +
            i.maxTextures,
        ),
      (re += 1),
      e
    );
  }
  function ce(e) {
    let t = [];
    return (
      t.push(e.wrapS),
      t.push(e.wrapT),
      t.push(e.wrapR || 0),
      t.push(e.magFilter),
      t.push(e.minFilter),
      t.push(e.anisotropy),
      t.push(e.internalFormat),
      t.push(e.format),
      t.push(e.type),
      t.push(e.generateMipmaps),
      t.push(e.premultiplyAlpha),
      t.push(e.flipY),
      t.push(e.unpackAlignment),
      t.push(e.colorSpace),
      t.join()
    );
  }
  function F(t, i) {
    let a = r.get(t);
    if (
      (t.isVideoTexture && I(t),
      t.isRenderTargetTexture === !1 &&
        t.isExternalTexture !== !0 &&
        t.version > 0 &&
        a.__version !== t.version)
    ) {
      let e = t.image;
      if (e === null)
        B(`WebGLRenderer: Texture marked for update but no image data found.`);
      else if (e.complete === !1)
        B(`WebGLRenderer: Texture marked for update but image is incomplete`);
      else {
        ye(a, t, i);
        return;
      }
    } else
      t.isExternalTexture &&
        (a.__webglTexture = t.sourceTexture ? t.sourceTexture : null);
    n.bindTexture(e.TEXTURE_2D, a.__webglTexture, e.TEXTURE0 + i);
  }
  function le(t, i) {
    let a = r.get(t);
    if (
      t.isRenderTargetTexture === !1 &&
      t.version > 0 &&
      a.__version !== t.version
    ) {
      ye(a, t, i);
      return;
    }
    (t.isExternalTexture &&
      (a.__webglTexture = t.sourceTexture ? t.sourceTexture : null),
      n.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture, e.TEXTURE0 + i));
  }
  function ue(t, i) {
    let a = r.get(t);
    if (
      t.isRenderTargetTexture === !1 &&
      t.version > 0 &&
      a.__version !== t.version
    ) {
      ye(a, t, i);
      return;
    }
    n.bindTexture(e.TEXTURE_3D, a.__webglTexture, e.TEXTURE0 + i);
  }
  function de(t, i) {
    let a = r.get(t);
    if (
      t.isCubeDepthTexture !== !0 &&
      t.version > 0 &&
      a.__version !== t.version
    ) {
      be(a, t, i);
      return;
    }
    n.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture, e.TEXTURE0 + i);
  }
  let fe = { [s]: e.REPEAT, [c]: e.CLAMP_TO_EDGE, [l]: e.MIRRORED_REPEAT },
    pe = {
      [u]: e.NEAREST,
      [d]: e.NEAREST_MIPMAP_NEAREST,
      [f]: e.NEAREST_MIPMAP_LINEAR,
      [p]: e.LINEAR,
      [m]: e.LINEAR_MIPMAP_NEAREST,
      [h]: e.LINEAR_MIPMAP_LINEAR,
    },
    me = {
      512: e.NEVER,
      519: e.ALWAYS,
      513: e.LESS,
      515: e.LEQUAL,
      514: e.EQUAL,
      518: e.GEQUAL,
      516: e.GREATER,
      517: e.NOTEQUAL,
    };
  function he(n, a) {
    if (
      (a.type === 1015 &&
        t.has(`OES_texture_float_linear`) === !1 &&
        (a.magFilter === 1006 ||
          a.magFilter === 1007 ||
          a.magFilter === 1005 ||
          a.magFilter === 1008 ||
          a.minFilter === 1006 ||
          a.minFilter === 1007 ||
          a.minFilter === 1005 ||
          a.minFilter === 1008) &&
        B(
          `WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`,
        ),
      e.texParameteri(n, e.TEXTURE_WRAP_S, fe[a.wrapS]),
      e.texParameteri(n, e.TEXTURE_WRAP_T, fe[a.wrapT]),
      (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) &&
        e.texParameteri(n, e.TEXTURE_WRAP_R, fe[a.wrapR]),
      e.texParameteri(n, e.TEXTURE_MAG_FILTER, pe[a.magFilter]),
      e.texParameteri(n, e.TEXTURE_MIN_FILTER, pe[a.minFilter]),
      a.compareFunction &&
        (e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE),
        e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, me[a.compareFunction])),
      t.has(`EXT_texture_filter_anisotropic`) === !0)
    ) {
      if (
        a.magFilter === 1003 ||
        (a.minFilter !== 1005 && a.minFilter !== 1008) ||
        (a.type === 1015 && t.has(`OES_texture_float_linear`) === !1)
      )
        return;
      if (a.anisotropy > 1 || r.get(a).__currentAnisotropy) {
        let o = t.get(`EXT_texture_filter_anisotropic`);
        (e.texParameterf(
          n,
          o.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(a.anisotropy, i.getMaxAnisotropy()),
        ),
          (r.get(a).__currentAnisotropy = a.anisotropy));
      }
    }
  }
  function ge(t, n) {
    let r = !1;
    t.__webglInit === void 0 &&
      ((t.__webglInit = !0), n.addEventListener(`dispose`, ee));
    let i = n.source,
      a = S.get(i);
    a === void 0 && ((a = {}), S.set(i, a));
    let s = ce(n);
    if (s !== t.__cacheKey) {
      (a[s] === void 0 &&
        ((a[s] = { texture: e.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (r = !0)),
        a[s].usedTimes++);
      let i = a[t.__cacheKey];
      (i !== void 0 && (a[t.__cacheKey].usedTimes--, i.usedTimes === 0 && P(n)),
        (t.__cacheKey = s),
        (t.__webglTexture = a[s].texture));
    }
    return r;
  }
  function _e(e, t, n) {
    return Math.floor(Math.floor(e / n) / t);
  }
  function ve(t, r, i, a) {
    let o = t.updateRanges;
    if (o.length === 0)
      n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r.width, r.height, i, a, r.data);
    else {
      o.sort((e, t) => e.start - t.start);
      let s = 0;
      for (let e = 1; e < o.length; e++) {
        let t = o[s],
          n = o[e],
          i = t.start + t.count,
          a = _e(n.start, r.width, 4),
          c = _e(t.start, r.width, 4);
        n.start <= i + 1 &&
        a === c &&
        _e(n.start + n.count - 1, r.width, 4) === a
          ? (t.count = Math.max(t.count, n.start + n.count - t.start))
          : (++s, (o[s] = n));
      }
      o.length = s + 1;
      let c = n.getParameter(e.UNPACK_ROW_LENGTH),
        l = n.getParameter(e.UNPACK_SKIP_PIXELS),
        u = n.getParameter(e.UNPACK_SKIP_ROWS);
      n.pixelStorei(e.UNPACK_ROW_LENGTH, r.width);
      for (let t = 0, s = o.length; t < s; t++) {
        let s = o[t],
          c = Math.floor(s.start / 4),
          l = Math.ceil(s.count / 4),
          u = c % r.width,
          d = Math.floor(c / r.width),
          f = l;
        (n.pixelStorei(e.UNPACK_SKIP_PIXELS, u),
          n.pixelStorei(e.UNPACK_SKIP_ROWS, d),
          n.texSubImage2D(e.TEXTURE_2D, 0, u, d, f, 1, i, a, r.data));
      }
      (t.clearUpdateRanges(),
        n.pixelStorei(e.UNPACK_ROW_LENGTH, c),
        n.pixelStorei(e.UNPACK_SKIP_PIXELS, l),
        n.pixelStorei(e.UNPACK_SKIP_ROWS, u));
    }
  }
  function ye(t, o, s) {
    let c = e.TEXTURE_2D;
    ((o.isDataArrayTexture || o.isCompressedArrayTexture) &&
      (c = e.TEXTURE_2D_ARRAY),
      o.isData3DTexture && (c = e.TEXTURE_3D));
    let l = ge(t, o),
      u = o.source;
    n.bindTexture(c, t.__webglTexture, e.TEXTURE0 + s);
    let d = r.get(u);
    if (u.version !== d.__version || l === !0) {
      if (
        (n.activeTexture(e.TEXTURE0 + s),
        !(typeof ImageBitmap < `u` && o.image instanceof ImageBitmap))
      ) {
        let t = K.getPrimaries(K.workingColorSpace),
          r = o.colorSpace === `` ? null : K.getPrimaries(o.colorSpace),
          i = o.colorSpace === `` || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
        (n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY),
          n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha),
          n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, i));
      }
      n.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment);
      let t = T(o.image, !1, i.maxTextureSize);
      t = Ne(o, t);
      let r = a.convert(o.format, o.colorSpace),
        f = a.convert(o.type),
        p = k(
          o.internalFormat,
          r,
          f,
          o.normalized,
          o.colorSpace,
          o.isVideoTexture,
        );
      he(c, o);
      let m,
        h = o.mipmaps,
        g = o.isVideoTexture !== !0,
        _ = d.__version === void 0 || l === !0,
        v = u.dataReady,
        y = j(o, t);
      if (o.isDepthTexture)
        ((p = A(o.format === M, o.type)),
          _ &&
            (g
              ? n.texStorage2D(e.TEXTURE_2D, 1, p, t.width, t.height)
              : n.texImage2D(
                  e.TEXTURE_2D,
                  0,
                  p,
                  t.width,
                  t.height,
                  0,
                  r,
                  f,
                  null,
                )));
      else if (o.isDataTexture) {
        if (h.length > 0) {
          g && _ && n.texStorage2D(e.TEXTURE_2D, y, p, h[0].width, h[0].height);
          for (let t = 0, i = h.length; t < i; t++)
            ((m = h[t]),
              g
                ? v &&
                  n.texSubImage2D(
                    e.TEXTURE_2D,
                    t,
                    0,
                    0,
                    m.width,
                    m.height,
                    r,
                    f,
                    m.data,
                  )
                : n.texImage2D(
                    e.TEXTURE_2D,
                    t,
                    p,
                    m.width,
                    m.height,
                    0,
                    r,
                    f,
                    m.data,
                  ));
          o.generateMipmaps = !1;
        } else
          g
            ? (_ && n.texStorage2D(e.TEXTURE_2D, y, p, t.width, t.height),
              v && ve(o, t, r, f))
            : n.texImage2D(
                e.TEXTURE_2D,
                0,
                p,
                t.width,
                t.height,
                0,
                r,
                f,
                t.data,
              );
      } else if (o.isCompressedTexture) {
        if (o.isCompressedArrayTexture) {
          g &&
            _ &&
            n.texStorage3D(
              e.TEXTURE_2D_ARRAY,
              y,
              p,
              h[0].width,
              h[0].height,
              t.depth,
            );
          for (let i = 0, a = h.length; i < a; i++)
            if (((m = h[i]), o.format !== 1023)) {
              if (r !== null) {
                if (g) {
                  if (v) {
                    if (o.layerUpdates.size > 0) {
                      let t = ns(m.width, m.height, o.format, o.type);
                      for (let a of o.layerUpdates) {
                        let o = m.data.subarray(
                          (a * t) / m.data.BYTES_PER_ELEMENT,
                          ((a + 1) * t) / m.data.BYTES_PER_ELEMENT,
                        );
                        n.compressedTexSubImage3D(
                          e.TEXTURE_2D_ARRAY,
                          i,
                          0,
                          0,
                          a,
                          m.width,
                          m.height,
                          1,
                          r,
                          o,
                        );
                      }
                    } else
                      n.compressedTexSubImage3D(
                        e.TEXTURE_2D_ARRAY,
                        i,
                        0,
                        0,
                        0,
                        m.width,
                        m.height,
                        t.depth,
                        r,
                        m.data,
                      );
                  }
                } else
                  n.compressedTexImage3D(
                    e.TEXTURE_2D_ARRAY,
                    i,
                    p,
                    m.width,
                    m.height,
                    t.depth,
                    0,
                    m.data,
                    0,
                    0,
                  );
              } else
                B(
                  `WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`,
                );
            } else
              g
                ? v &&
                  n.texSubImage3D(
                    e.TEXTURE_2D_ARRAY,
                    i,
                    0,
                    0,
                    0,
                    m.width,
                    m.height,
                    t.depth,
                    r,
                    f,
                    m.data,
                  )
                : n.texImage3D(
                    e.TEXTURE_2D_ARRAY,
                    i,
                    p,
                    m.width,
                    m.height,
                    t.depth,
                    0,
                    r,
                    f,
                    m.data,
                  );
          o.layerUpdates.size > 0 && o.clearLayerUpdates();
        } else {
          g && _ && n.texStorage2D(e.TEXTURE_2D, y, p, h[0].width, h[0].height);
          for (let t = 0, i = h.length; t < i; t++)
            ((m = h[t]),
              o.format === 1023
                ? g
                  ? v &&
                    n.texSubImage2D(
                      e.TEXTURE_2D,
                      t,
                      0,
                      0,
                      m.width,
                      m.height,
                      r,
                      f,
                      m.data,
                    )
                  : n.texImage2D(
                      e.TEXTURE_2D,
                      t,
                      p,
                      m.width,
                      m.height,
                      0,
                      r,
                      f,
                      m.data,
                    )
                : r === null
                  ? B(
                      `WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`,
                    )
                  : g
                    ? v &&
                      n.compressedTexSubImage2D(
                        e.TEXTURE_2D,
                        t,
                        0,
                        0,
                        m.width,
                        m.height,
                        r,
                        m.data,
                      )
                    : n.compressedTexImage2D(
                        e.TEXTURE_2D,
                        t,
                        p,
                        m.width,
                        m.height,
                        0,
                        m.data,
                      ));
        }
      } else if (o.isDataArrayTexture) {
        if (g) {
          if (
            (_ &&
              n.texStorage3D(
                e.TEXTURE_2D_ARRAY,
                y,
                p,
                t.width,
                t.height,
                t.depth,
              ),
            v)
          ) {
            if (o.layerUpdates.size > 0) {
              let i = ns(t.width, t.height, o.format, o.type);
              for (let a of o.layerUpdates) {
                let o = t.data.subarray(
                  (a * i) / t.data.BYTES_PER_ELEMENT,
                  ((a + 1) * i) / t.data.BYTES_PER_ELEMENT,
                );
                n.texSubImage3D(
                  e.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  a,
                  t.width,
                  t.height,
                  1,
                  r,
                  f,
                  o,
                );
              }
              o.clearLayerUpdates();
            } else
              n.texSubImage3D(
                e.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                t.width,
                t.height,
                t.depth,
                r,
                f,
                t.data,
              );
          }
        } else
          n.texImage3D(
            e.TEXTURE_2D_ARRAY,
            0,
            p,
            t.width,
            t.height,
            t.depth,
            0,
            r,
            f,
            t.data,
          );
      } else if (o.isData3DTexture)
        g
          ? (_ &&
              n.texStorage3D(e.TEXTURE_3D, y, p, t.width, t.height, t.depth),
            v &&
              n.texSubImage3D(
                e.TEXTURE_3D,
                0,
                0,
                0,
                0,
                t.width,
                t.height,
                t.depth,
                r,
                f,
                t.data,
              ))
          : n.texImage3D(
              e.TEXTURE_3D,
              0,
              p,
              t.width,
              t.height,
              t.depth,
              0,
              r,
              f,
              t.data,
            );
      else if (o.isFramebufferTexture) {
        if (_) {
          if (g) n.texStorage2D(e.TEXTURE_2D, y, p, t.width, t.height);
          else {
            let i = t.width,
              a = t.height;
            for (let t = 0; t < y; t++)
              (n.texImage2D(e.TEXTURE_2D, t, p, i, a, 0, r, f, null),
                (i >>= 1),
                (a >>= 1));
          }
        }
      } else if (o.isHTMLTexture) {
        if (`texElementImage2D` in e) {
          let n = e.canvas;
          if (
            (n.hasAttribute(`layoutsubtree`) ||
              n.setAttribute(`layoutsubtree`, `true`),
            t.parentNode !== n)
          ) {
            (n.appendChild(t),
              b.add(o),
              (n.onpaint = (e) => {
                let t = e.changedElements;
                for (let e of b) t.includes(e.image) && (e.needsUpdate = !0);
              }),
              n.requestPaint());
            return;
          }
          if (e.texElementImage2D.length === 3)
            e.texElementImage2D(e.TEXTURE_2D, e.RGBA8, t);
          else {
            let n = e.RGBA,
              r = e.RGBA,
              i = e.UNSIGNED_BYTE;
            e.texElementImage2D(e.TEXTURE_2D, 0, n, r, i, t);
          }
          (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE));
        }
      } else if (h.length > 0) {
        if (g && _) {
          let t = Pe(h[0]);
          n.texStorage2D(e.TEXTURE_2D, y, p, t.width, t.height);
        }
        for (let t = 0, i = h.length; t < i; t++)
          ((m = h[t]),
            g
              ? v && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, r, f, m)
              : n.texImage2D(e.TEXTURE_2D, t, p, r, f, m));
        o.generateMipmaps = !1;
      } else if (g) {
        if (_) {
          let r = Pe(t);
          n.texStorage2D(e.TEXTURE_2D, y, p, r.width, r.height);
        }
        v && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r, f, t);
      } else n.texImage2D(e.TEXTURE_2D, 0, p, r, f, t);
      (E(o) && D(c), (d.__version = u.version), o.onUpdate && o.onUpdate(o));
    }
    t.__version = o.version;
  }
  function be(t, o, s) {
    if (o.image.length !== 6) return;
    let c = ge(t, o),
      l = o.source;
    n.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + s);
    let u = r.get(l);
    if (l.version !== u.__version || c === !0) {
      n.activeTexture(e.TEXTURE0 + s);
      let t = K.getPrimaries(K.workingColorSpace),
        r = o.colorSpace === `` ? null : K.getPrimaries(o.colorSpace),
        d = o.colorSpace === `` || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
      (n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY),
        n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha),
        n.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment),
        n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, d));
      let f = o.isCompressedTexture || o.image[0].isCompressedTexture,
        p = o.image[0] && o.image[0].isDataTexture,
        m = [];
      for (let e = 0; e < 6; e++)
        (!f && !p
          ? (m[e] = T(o.image[e], !0, i.maxCubemapSize))
          : (m[e] = p ? o.image[e].image : o.image[e]),
          (m[e] = Ne(o, m[e])));
      let h = m[0],
        g = a.convert(o.format, o.colorSpace),
        _ = a.convert(o.type),
        v = k(o.internalFormat, g, _, o.normalized, o.colorSpace),
        y = o.isVideoTexture !== !0,
        b = u.__version === void 0 || c === !0,
        x = l.dataReady,
        S = j(o, h);
      he(e.TEXTURE_CUBE_MAP, o);
      let C;
      if (f) {
        y && b && n.texStorage2D(e.TEXTURE_CUBE_MAP, S, v, h.width, h.height);
        for (let t = 0; t < 6; t++) {
          C = m[t].mipmaps;
          for (let r = 0; r < C.length; r++) {
            let i = C[r];
            o.format === 1023
              ? y
                ? x &&
                  n.texSubImage2D(
                    e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                    r,
                    0,
                    0,
                    i.width,
                    i.height,
                    g,
                    _,
                    i.data,
                  )
                : n.texImage2D(
                    e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                    r,
                    v,
                    i.width,
                    i.height,
                    0,
                    g,
                    _,
                    i.data,
                  )
              : g === null
                ? B(
                    `WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`,
                  )
                : y
                  ? x &&
                    n.compressedTexSubImage2D(
                      e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                      r,
                      0,
                      0,
                      i.width,
                      i.height,
                      g,
                      i.data,
                    )
                  : n.compressedTexImage2D(
                      e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                      r,
                      v,
                      i.width,
                      i.height,
                      0,
                      i.data,
                    );
          }
        }
      } else {
        if (((C = o.mipmaps), y && b)) {
          C.length > 0 && S++;
          let t = Pe(m[0]);
          n.texStorage2D(e.TEXTURE_CUBE_MAP, S, v, t.width, t.height);
        }
        for (let t = 0; t < 6; t++)
          if (p) {
            y
              ? x &&
                n.texSubImage2D(
                  e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                  0,
                  0,
                  0,
                  m[t].width,
                  m[t].height,
                  g,
                  _,
                  m[t].data,
                )
              : n.texImage2D(
                  e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                  0,
                  v,
                  m[t].width,
                  m[t].height,
                  0,
                  g,
                  _,
                  m[t].data,
                );
            for (let r = 0; r < C.length; r++) {
              let i = C[r].image[t].image;
              y
                ? x &&
                  n.texSubImage2D(
                    e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                    r + 1,
                    0,
                    0,
                    i.width,
                    i.height,
                    g,
                    _,
                    i.data,
                  )
                : n.texImage2D(
                    e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                    r + 1,
                    v,
                    i.width,
                    i.height,
                    0,
                    g,
                    _,
                    i.data,
                  );
            }
          } else {
            y
              ? x &&
                n.texSubImage2D(
                  e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                  0,
                  0,
                  0,
                  g,
                  _,
                  m[t],
                )
              : n.texImage2D(
                  e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                  0,
                  v,
                  g,
                  _,
                  m[t],
                );
            for (let r = 0; r < C.length; r++) {
              let i = C[r];
              y
                ? x &&
                  n.texSubImage2D(
                    e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                    r + 1,
                    0,
                    0,
                    g,
                    _,
                    i.image[t],
                  )
                : n.texImage2D(
                    e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                    r + 1,
                    v,
                    g,
                    _,
                    i.image[t],
                  );
            }
          }
      }
      (E(o) && D(e.TEXTURE_CUBE_MAP),
        (u.__version = l.version),
        o.onUpdate && o.onUpdate(o));
    }
    t.__version = o.version;
  }
  function xe(t, i, o, s, c, l) {
    let u = a.convert(o.format, o.colorSpace),
      d = a.convert(o.type),
      f = k(o.internalFormat, u, d, o.normalized, o.colorSpace),
      p = r.get(i),
      m = r.get(o);
    if (((m.__renderTarget = i), !p.__hasExternalTextures)) {
      let t = Math.max(1, i.width >> l),
        r = Math.max(1, i.height >> l);
      c === e.TEXTURE_3D || c === e.TEXTURE_2D_ARRAY
        ? n.texImage3D(c, l, f, t, r, i.depth, 0, u, d, null)
        : n.texImage2D(c, l, f, t, r, 0, u, d, null);
    }
    (n.bindFramebuffer(e.FRAMEBUFFER, t),
      Me(i)
        ? g.framebufferTexture2DMultisampleEXT(
            e.FRAMEBUFFER,
            s,
            c,
            m.__webglTexture,
            0,
            je(i),
          )
        : (c === e.TEXTURE_2D ||
            (c >= e.TEXTURE_CUBE_MAP_POSITIVE_X &&
              c <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          e.framebufferTexture2D(e.FRAMEBUFFER, s, c, m.__webglTexture, l),
      n.bindFramebuffer(e.FRAMEBUFFER, null));
  }
  function Se(t, n, r) {
    if ((e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer)) {
      let i = n.depthTexture,
        a = i && i.isDepthTexture ? i.type : null,
        o = A(n.stencilBuffer, a),
        s = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
      (Me(n)
        ? g.renderbufferStorageMultisampleEXT(
            e.RENDERBUFFER,
            je(n),
            o,
            n.width,
            n.height,
          )
        : r
          ? e.renderbufferStorageMultisample(
              e.RENDERBUFFER,
              je(n),
              o,
              n.width,
              n.height,
            )
          : e.renderbufferStorage(e.RENDERBUFFER, o, n.width, n.height),
        e.framebufferRenderbuffer(e.FRAMEBUFFER, s, e.RENDERBUFFER, t));
    } else {
      let t = n.textures;
      for (let i = 0; i < t.length; i++) {
        let o = t[i],
          s = a.convert(o.format, o.colorSpace),
          c = a.convert(o.type),
          l = k(o.internalFormat, s, c, o.normalized, o.colorSpace);
        Me(n)
          ? g.renderbufferStorageMultisampleEXT(
              e.RENDERBUFFER,
              je(n),
              l,
              n.width,
              n.height,
            )
          : r
            ? e.renderbufferStorageMultisample(
                e.RENDERBUFFER,
                je(n),
                l,
                n.width,
                n.height,
              )
            : e.renderbufferStorage(e.RENDERBUFFER, l, n.width, n.height);
      }
    }
    e.bindRenderbuffer(e.RENDERBUFFER, null);
  }
  function Ce(t, i, o) {
    let s = i.isWebGLCubeRenderTarget === !0;
    if (
      (n.bindFramebuffer(e.FRAMEBUFFER, t),
      !(i.depthTexture && i.depthTexture.isDepthTexture))
    )
      throw Error(
        `THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`,
      );
    let c = r.get(i.depthTexture);
    if (
      ((c.__renderTarget = i),
      (!c.__webglTexture ||
        i.depthTexture.image.width !== i.width ||
        i.depthTexture.image.height !== i.height) &&
        ((i.depthTexture.image.width = i.width),
        (i.depthTexture.image.height = i.height),
        (i.depthTexture.needsUpdate = !0)),
      s)
    ) {
      if (
        (c.__webglInit === void 0 &&
          ((c.__webglInit = !0),
          i.depthTexture.addEventListener(`dispose`, ee)),
        c.__webglTexture === void 0)
      ) {
        ((c.__webglTexture = e.createTexture()),
          n.bindTexture(e.TEXTURE_CUBE_MAP, c.__webglTexture),
          he(e.TEXTURE_CUBE_MAP, i.depthTexture));
        let t = a.convert(i.depthTexture.format),
          r = a.convert(i.depthTexture.type),
          o;
        i.depthTexture.format === 1026
          ? (o = e.DEPTH_COMPONENT24)
          : i.depthTexture.format === 1027 && (o = e.DEPTH24_STENCIL8);
        for (let n = 0; n < 6; n++)
          e.texImage2D(
            e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
            0,
            o,
            i.width,
            i.height,
            0,
            t,
            r,
            null,
          );
      }
    } else F(i.depthTexture, 0);
    let l = c.__webglTexture,
      u = je(i),
      d = s ? e.TEXTURE_CUBE_MAP_POSITIVE_X + o : e.TEXTURE_2D,
      f =
        i.depthTexture.format === 1027
          ? e.DEPTH_STENCIL_ATTACHMENT
          : e.DEPTH_ATTACHMENT;
    if (i.depthTexture.format === 1026)
      Me(i)
        ? g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, f, d, l, 0, u)
        : e.framebufferTexture2D(e.FRAMEBUFFER, f, d, l, 0);
    else if (i.depthTexture.format === 1027)
      Me(i)
        ? g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, f, d, l, 0, u)
        : e.framebufferTexture2D(e.FRAMEBUFFER, f, d, l, 0);
    else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`);
  }
  function we(t) {
    let i = r.get(t),
      a = t.isWebGLCubeRenderTarget === !0;
    if (i.__boundDepthTexture !== t.depthTexture) {
      let e = t.depthTexture;
      if ((i.__depthDisposeCallback && i.__depthDisposeCallback(), e)) {
        let t = () => {
          (delete i.__boundDepthTexture,
            delete i.__depthDisposeCallback,
            e.removeEventListener(`dispose`, t));
        };
        (e.addEventListener(`dispose`, t), (i.__depthDisposeCallback = t));
      }
      i.__boundDepthTexture = e;
    }
    if (t.depthTexture && !i.__autoAllocateDepthBuffer) {
      if (a) for (let e = 0; e < 6; e++) Ce(i.__webglFramebuffer[e], t, e);
      else {
        let e = t.texture.mipmaps;
        e && e.length > 0
          ? Ce(i.__webglFramebuffer[0], t, 0)
          : Ce(i.__webglFramebuffer, t, 0);
      }
    } else if (a) {
      i.__webglDepthbuffer = [];
      for (let r = 0; r < 6; r++)
        if (
          (n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[r]),
          i.__webglDepthbuffer[r] === void 0)
        )
          ((i.__webglDepthbuffer[r] = e.createRenderbuffer()),
            Se(i.__webglDepthbuffer[r], t, !1));
        else {
          let n = t.stencilBuffer
              ? e.DEPTH_STENCIL_ATTACHMENT
              : e.DEPTH_ATTACHMENT,
            a = i.__webglDepthbuffer[r];
          (e.bindRenderbuffer(e.RENDERBUFFER, a),
            e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, a));
        }
    } else {
      let r = t.texture.mipmaps;
      if (
        (r && r.length > 0
          ? n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[0])
          : n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer),
        i.__webglDepthbuffer === void 0)
      )
        ((i.__webglDepthbuffer = e.createRenderbuffer()),
          Se(i.__webglDepthbuffer, t, !1));
      else {
        let n = t.stencilBuffer
            ? e.DEPTH_STENCIL_ATTACHMENT
            : e.DEPTH_ATTACHMENT,
          r = i.__webglDepthbuffer;
        (e.bindRenderbuffer(e.RENDERBUFFER, r),
          e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, r));
      }
    }
    n.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  function Te(t, n, i) {
    let a = r.get(t);
    (n !== void 0 &&
      xe(
        a.__webglFramebuffer,
        t,
        t.texture,
        e.COLOR_ATTACHMENT0,
        e.TEXTURE_2D,
        0,
      ),
      i !== void 0 && we(t));
  }
  function Ee(t) {
    let i = t.texture,
      s = r.get(t),
      c = r.get(i);
    t.addEventListener(`dispose`, N);
    let l = t.textures,
      u = t.isWebGLCubeRenderTarget === !0,
      d = l.length > 1;
    if (
      (d ||
        (c.__webglTexture === void 0 && (c.__webglTexture = e.createTexture()),
        (c.__version = i.version),
        o.memory.textures++),
      u)
    ) {
      s.__webglFramebuffer = [];
      for (let t = 0; t < 6; t++)
        if (i.mipmaps && i.mipmaps.length > 0) {
          s.__webglFramebuffer[t] = [];
          for (let n = 0; n < i.mipmaps.length; n++)
            s.__webglFramebuffer[t][n] = e.createFramebuffer();
        } else s.__webglFramebuffer[t] = e.createFramebuffer();
    } else {
      if (i.mipmaps && i.mipmaps.length > 0) {
        s.__webglFramebuffer = [];
        for (let t = 0; t < i.mipmaps.length; t++)
          s.__webglFramebuffer[t] = e.createFramebuffer();
      } else s.__webglFramebuffer = e.createFramebuffer();
      if (d)
        for (let t = 0, n = l.length; t < n; t++) {
          let n = r.get(l[t]);
          n.__webglTexture === void 0 &&
            ((n.__webglTexture = e.createTexture()), o.memory.textures++);
        }
      if (t.samples > 0 && Me(t) === !1) {
        ((s.__webglMultisampledFramebuffer = e.createFramebuffer()),
          (s.__webglColorRenderbuffer = []),
          n.bindFramebuffer(e.FRAMEBUFFER, s.__webglMultisampledFramebuffer));
        for (let n = 0; n < l.length; n++) {
          let r = l[n];
          ((s.__webglColorRenderbuffer[n] = e.createRenderbuffer()),
            e.bindRenderbuffer(e.RENDERBUFFER, s.__webglColorRenderbuffer[n]));
          let i = a.convert(r.format, r.colorSpace),
            o = a.convert(r.type),
            c = k(
              r.internalFormat,
              i,
              o,
              r.normalized,
              r.colorSpace,
              t.isXRRenderTarget === !0,
            ),
            u = je(t);
          (e.renderbufferStorageMultisample(
            e.RENDERBUFFER,
            u,
            c,
            t.width,
            t.height,
          ),
            e.framebufferRenderbuffer(
              e.FRAMEBUFFER,
              e.COLOR_ATTACHMENT0 + n,
              e.RENDERBUFFER,
              s.__webglColorRenderbuffer[n],
            ));
        }
        (e.bindRenderbuffer(e.RENDERBUFFER, null),
          t.depthBuffer &&
            ((s.__webglDepthRenderbuffer = e.createRenderbuffer()),
            Se(s.__webglDepthRenderbuffer, t, !0)),
          n.bindFramebuffer(e.FRAMEBUFFER, null));
      }
    }
    if (u) {
      (n.bindTexture(e.TEXTURE_CUBE_MAP, c.__webglTexture),
        he(e.TEXTURE_CUBE_MAP, i));
      for (let n = 0; n < 6; n++)
        if (i.mipmaps && i.mipmaps.length > 0)
          for (let r = 0; r < i.mipmaps.length; r++)
            xe(
              s.__webglFramebuffer[n][r],
              t,
              i,
              e.COLOR_ATTACHMENT0,
              e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
              r,
            );
        else
          xe(
            s.__webglFramebuffer[n],
            t,
            i,
            e.COLOR_ATTACHMENT0,
            e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
            0,
          );
      (E(i) && D(e.TEXTURE_CUBE_MAP), n.unbindTexture());
    } else if (d) {
      for (let i = 0, a = l.length; i < a; i++) {
        let a = l[i],
          o = r.get(a),
          c = e.TEXTURE_2D;
        ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) &&
          (c = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY),
          n.bindTexture(c, o.__webglTexture),
          he(c, a),
          xe(s.__webglFramebuffer, t, a, e.COLOR_ATTACHMENT0 + i, c, 0),
          E(a) && D(c));
      }
      n.unbindTexture();
    } else {
      let r = e.TEXTURE_2D;
      if (
        ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) &&
          (r = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY),
        n.bindTexture(r, c.__webglTexture),
        he(r, i),
        i.mipmaps && i.mipmaps.length > 0)
      )
        for (let n = 0; n < i.mipmaps.length; n++)
          xe(s.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, r, n);
      else xe(s.__webglFramebuffer, t, i, e.COLOR_ATTACHMENT0, r, 0);
      (E(i) && D(r), n.unbindTexture());
    }
    t.depthBuffer && we(t);
  }
  function De(e) {
    let t = e.textures;
    for (let i = 0, a = t.length; i < a; i++) {
      let a = t[i];
      if (E(a)) {
        let t = O(e),
          i = r.get(a).__webglTexture;
        (n.bindTexture(t, i), D(t), n.unbindTexture());
      }
    }
  }
  let Oe = [],
    ke = [];
  function Ae(t) {
    if (t.samples > 0) {
      if (Me(t) === !1) {
        let i = t.textures,
          a = t.width,
          o = t.height,
          s = e.COLOR_BUFFER_BIT,
          c = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT,
          l = r.get(t),
          u = i.length > 1;
        if (u)
          for (let t = 0; t < i.length; t++)
            (n.bindFramebuffer(e.FRAMEBUFFER, l.__webglMultisampledFramebuffer),
              e.framebufferRenderbuffer(
                e.FRAMEBUFFER,
                e.COLOR_ATTACHMENT0 + t,
                e.RENDERBUFFER,
                null,
              ),
              n.bindFramebuffer(e.FRAMEBUFFER, l.__webglFramebuffer),
              e.framebufferTexture2D(
                e.DRAW_FRAMEBUFFER,
                e.COLOR_ATTACHMENT0 + t,
                e.TEXTURE_2D,
                null,
                0,
              ));
        n.bindFramebuffer(e.READ_FRAMEBUFFER, l.__webglMultisampledFramebuffer);
        let d = t.texture.mipmaps;
        d && d.length > 0
          ? n.bindFramebuffer(e.DRAW_FRAMEBUFFER, l.__webglFramebuffer[0])
          : n.bindFramebuffer(e.DRAW_FRAMEBUFFER, l.__webglFramebuffer);
        for (let n = 0; n < i.length; n++) {
          if (
            (t.resolveDepthBuffer &&
              (t.depthBuffer && (s |= e.DEPTH_BUFFER_BIT),
              t.stencilBuffer &&
                t.resolveStencilBuffer &&
                (s |= e.STENCIL_BUFFER_BIT)),
            u)
          ) {
            e.framebufferRenderbuffer(
              e.READ_FRAMEBUFFER,
              e.COLOR_ATTACHMENT0,
              e.RENDERBUFFER,
              l.__webglColorRenderbuffer[n],
            );
            let t = r.get(i[n]).__webglTexture;
            e.framebufferTexture2D(
              e.DRAW_FRAMEBUFFER,
              e.COLOR_ATTACHMENT0,
              e.TEXTURE_2D,
              t,
              0,
            );
          }
          (e.blitFramebuffer(0, 0, a, o, 0, 0, a, o, s, e.NEAREST),
            _ === !0 &&
              ((Oe.length = 0),
              (ke.length = 0),
              Oe.push(e.COLOR_ATTACHMENT0 + n),
              t.depthBuffer &&
                t.storeMultisampledDepthBuffer === !1 &&
                (Oe.push(c),
                ke.push(c),
                e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, ke)),
              e.invalidateFramebuffer(e.READ_FRAMEBUFFER, Oe)));
        }
        if (
          (n.bindFramebuffer(e.READ_FRAMEBUFFER, null),
          n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null),
          u)
        )
          for (let t = 0; t < i.length; t++) {
            (n.bindFramebuffer(e.FRAMEBUFFER, l.__webglMultisampledFramebuffer),
              e.framebufferRenderbuffer(
                e.FRAMEBUFFER,
                e.COLOR_ATTACHMENT0 + t,
                e.RENDERBUFFER,
                l.__webglColorRenderbuffer[t],
              ));
            let a = r.get(i[t]).__webglTexture;
            (n.bindFramebuffer(e.FRAMEBUFFER, l.__webglFramebuffer),
              e.framebufferTexture2D(
                e.DRAW_FRAMEBUFFER,
                e.COLOR_ATTACHMENT0 + t,
                e.TEXTURE_2D,
                a,
                0,
              ));
          }
        n.bindFramebuffer(e.DRAW_FRAMEBUFFER, l.__webglMultisampledFramebuffer);
      } else if (t.depthBuffer && t.storeMultisampledDepthBuffer === !1 && _) {
        let n = t.stencilBuffer
          ? e.DEPTH_STENCIL_ATTACHMENT
          : e.DEPTH_ATTACHMENT;
        e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [n]);
      }
    }
  }
  function je(e) {
    return Math.min(i.maxSamples, e.samples);
  }
  function Me(e) {
    let n = r.get(e);
    return (
      e.samples > 0 &&
      t.has(`WEBGL_multisampled_render_to_texture`) === !0 &&
      n.__useRenderToTexture !== !1
    );
  }
  function I(e) {
    let t = o.render.frame;
    y.get(e) !== t && (y.set(e, t), e.update());
  }
  function Ne(e, t) {
    let n = e.colorSpace,
      r = e.format,
      i = e.type;
    return (
      e.isCompressedTexture === !0 ||
        e.isVideoTexture === !0 ||
        (n !== `srgb-linear` &&
          n !== `` &&
          (K.getTransfer(n) === `srgb`
            ? (r !== 1023 || i !== 1009) &&
              B(
                `WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`,
              )
            : V(`WebGLTextures: Unsupported texture color space:`, n))),
      t
    );
  }
  function Pe(e) {
    return (
      typeof HTMLImageElement < `u` && e instanceof HTMLImageElement
        ? ((v.width = e.naturalWidth || e.width),
          (v.height = e.naturalHeight || e.height))
        : typeof VideoFrame < `u` && e instanceof VideoFrame
          ? ((v.width = e.displayWidth), (v.height = e.displayHeight))
          : ((v.width = e.width), (v.height = e.height)),
      v
    );
  }
  ((this.allocateTextureUnit = se),
    (this.resetTextureUnits = ie),
    (this.getTextureUnits = ae),
    (this.setTextureUnits = oe),
    (this.setTexture2D = F),
    (this.setTexture2DArray = le),
    (this.setTexture3D = ue),
    (this.setTextureCube = de),
    (this.rebindTextures = Te),
    (this.setupRenderTarget = Ee),
    (this.updateRenderTargetMipmap = De),
    (this.updateMultisampleRenderTarget = Ae),
    (this.setupDepthRenderbuffer = we),
    (this.setupFrameBufferTexture = xe),
    (this.useMultisampledRTT = Me),
    (this.isReversedDepthBuffer = function () {
      return n.buffers.depth.getReversed();
    }));
}
function cu(e, t) {
  function n(n, r = ``) {
    let i,
      a = K.getTransfer(r);
    if (n === 1009) return e.UNSIGNED_BYTE;
    if (n === 1017) return e.UNSIGNED_SHORT_4_4_4_4;
    if (n === 1018) return e.UNSIGNED_SHORT_5_5_5_1;
    if (n === 35902) return e.UNSIGNED_INT_5_9_9_9_REV;
    if (n === 35899) return e.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === 1010) return e.BYTE;
    if (n === 1011) return e.SHORT;
    if (n === 1012) return e.UNSIGNED_SHORT;
    if (n === 1013) return e.INT;
    if (n === 1014) return e.UNSIGNED_INT;
    if (n === 1015) return e.FLOAT;
    if (n === 1016) return e.HALF_FLOAT;
    if (n === 1021) return e.ALPHA;
    if (n === 1022) return e.RGB;
    if (n === 1023) return e.RGBA;
    if (n === 1026) return e.DEPTH_COMPONENT;
    if (n === 1027) return e.DEPTH_STENCIL;
    if (n === 1028) return e.RED;
    if (n === 1029) return e.RED_INTEGER;
    if (n === 1030) return e.RG;
    if (n === 1031) return e.RG_INTEGER;
    if (n === 1033) return e.RGBA_INTEGER;
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779) {
      if (a === `srgb`) {
        if (((i = t.get(`WEBGL_compressed_texture_s3tc_srgb`)), i !== null)) {
          if (n === 33776) return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === 33777) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === 33778) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === 33779) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      } else if (((i = t.get(`WEBGL_compressed_texture_s3tc`)), i !== null)) {
        if (n === 33776) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === 33777) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === 33778) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === 33779) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    }
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843) {
      if (((i = t.get(`WEBGL_compressed_texture_pvrtc`)), i !== null)) {
        if (n === 35840) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === 35841) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === 35842) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === 35843) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    }
    if (
      n === 36196 ||
      n === 37492 ||
      n === 37496 ||
      n === 37488 ||
      n === 37489 ||
      n === 37490 ||
      n === 37491
    ) {
      if (((i = t.get(`WEBGL_compressed_texture_etc`)), i !== null)) {
        if (n === 36196 || n === 37492)
          return a === `srgb`
            ? i.COMPRESSED_SRGB8_ETC2
            : i.COMPRESSED_RGB8_ETC2;
        if (n === 37496)
          return a === `srgb`
            ? i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : i.COMPRESSED_RGBA8_ETC2_EAC;
        if (n === 37488) return i.COMPRESSED_R11_EAC;
        if (n === 37489) return i.COMPRESSED_SIGNED_R11_EAC;
        if (n === 37490) return i.COMPRESSED_RG11_EAC;
        if (n === 37491) return i.COMPRESSED_SIGNED_RG11_EAC;
      } else return null;
    }
    if (
      n === 37808 ||
      n === 37809 ||
      n === 37810 ||
      n === 37811 ||
      n === 37812 ||
      n === 37813 ||
      n === 37814 ||
      n === 37815 ||
      n === 37816 ||
      n === 37817 ||
      n === 37818 ||
      n === 37819 ||
      n === 37820 ||
      n === 37821
    ) {
      if (((i = t.get(`WEBGL_compressed_texture_astc`)), i !== null)) {
        if (n === 37808)
          return a === `srgb`
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : i.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809)
          return a === `srgb`
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : i.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810)
          return a === `srgb`
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : i.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811)
          return a === `srgb`
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : i.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812)
          return a === `srgb`
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : i.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813)
          return a === `srgb`
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : i.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814)
          return a === `srgb`
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : i.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815)
          return a === `srgb`
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : i.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816)
          return a === `srgb`
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : i.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817)
          return a === `srgb`
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : i.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818)
          return a === `srgb`
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : i.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819)
          return a === `srgb`
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : i.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820)
          return a === `srgb`
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : i.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821)
          return a === `srgb`
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : i.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    }
    if (n === 36492 || n === 36494 || n === 36495) {
      if (((i = t.get(`EXT_texture_compression_bptc`)), i !== null)) {
        if (n === 36492)
          return a === `srgb`
            ? i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : i.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === 36494) return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === 36495) return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    }
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286) {
      if (((i = t.get(`EXT_texture_compression_rgtc`)), i !== null)) {
        if (n === 36283) return i.COMPRESSED_RED_RGTC1_EXT;
        if (n === 36284) return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === 36285) return i.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === 36286) return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    }
    return n === 1020 ? e.UNSIGNED_INT_24_8 : e[n] === void 0 ? null : e[n];
  }
  return { convert: n };
}
var lu = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  uu = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,
  du = class {
    constructor() {
      ((this.texture = null),
        (this.mesh = null),
        (this.depthNear = 0),
        (this.depthFar = 0));
    }
    init(e, t) {
      if (this.texture === null) {
        let n = new la(e.texture);
        ((e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) &&
          ((this.depthNear = e.depthNear), (this.depthFar = e.depthFar)),
          (this.texture = n));
      }
    }
    getMesh(e) {
      if (this.texture !== null && this.mesh === null) {
        let t = e.cameras[0].viewport,
          n = new Ea({
            vertexShader: lu,
            fragmentShader: uu,
            uniforms: {
              depthColor: { value: this.texture },
              depthWidth: { value: t.z },
              depthHeight: { value: t.w },
            },
          });
        this.mesh = new si(new ga(20, 20), n);
      }
      return this.mesh;
    }
    reset() {
      ((this.texture = null), (this.mesh = null));
    }
    getDepthTexture() {
      return this.texture;
    }
  },
  fu = class extends lt {
    constructor(e, t) {
      super();
      let n = this,
        r = null,
        i = 1,
        a = null,
        o = `local-floor`,
        s = 1,
        c = null,
        l = null,
        u = null,
        d = null,
        f = null,
        p = null,
        m = typeof XRWebGLBinding < `u`,
        h = new du(),
        _ = {},
        v = t.getContextAttributes(),
        y = null,
        b = null,
        S = [],
        C = [],
        w = new U(),
        T = null,
        D = null,
        O = new Eo();
      O.viewport = new $t();
      let k = new Eo();
      k.viewport = new $t();
      let A = [O, k],
        N = new Vo(),
        te = null,
        P = null;
      ((this.cameraAutoUpdate = !0),
        (this.enabled = !1),
        (this.isPresenting = !1),
        (this.getController = function (e) {
          let t = S[e];
          return (
            t === void 0 && ((t = new Pn()), (S[e] = t)),
            t.getTargetRaySpace()
          );
        }),
        (this.getControllerGrip = function (e) {
          let t = S[e];
          return (
            t === void 0 && ((t = new Pn()), (S[e] = t)),
            t.getGripSpace()
          );
        }),
        (this.getHand = function (e) {
          let t = S[e];
          return (
            t === void 0 && ((t = new Pn()), (S[e] = t)),
            t.getHandSpace()
          );
        }));
      function ne(e) {
        let t = C.indexOf(e.inputSource);
        if (t === -1) return;
        let n = S[t];
        n !== void 0 &&
          (n.update(e.inputSource, e.frame, c || a),
          n.dispatchEvent({ type: e.type, data: e.inputSource }));
      }
      function re() {
        (r.removeEventListener(`select`, ne),
          r.removeEventListener(`selectstart`, ne),
          r.removeEventListener(`selectend`, ne),
          r.removeEventListener(`squeeze`, ne),
          r.removeEventListener(`squeezestart`, ne),
          r.removeEventListener(`squeezeend`, ne),
          r.removeEventListener(`end`, re),
          r.removeEventListener(`inputsourceschange`, ie));
        for (let e = 0; e < S.length; e++) {
          let t = C[e];
          t !== null && ((C[e] = null), S[e].disconnect(t));
        }
        ((te = null), (P = null), h.reset());
        for (let e in _) delete _[e];
        if (
          (e.setRenderTarget(y),
          (f = null),
          (d = null),
          (u = null),
          (r = null),
          (b = null),
          de.stop(),
          (n.isPresenting = !1),
          e.setPixelRatio(T),
          e.setSize(w.width, w.height, !1),
          D !== null)
        ) {
          let e = D.camera;
          ((e.fov = D.fov),
            (e.zoom = D.zoom),
            e.updateProjectionMatrix(),
            (D = null));
        }
        n.dispatchEvent({ type: `sessionend` });
      }
      ((this.setFramebufferScaleFactor = function (e) {
        ((i = e),
          n.isPresenting === !0 &&
            B(
              `WebXRManager: Cannot change framebuffer scale while presenting.`,
            ));
      }),
        (this.setReferenceSpaceType = function (e) {
          ((o = e),
            n.isPresenting === !0 &&
              B(
                `WebXRManager: Cannot change reference space type while presenting.`,
              ));
        }),
        (this.getReferenceSpace = function () {
          return c || a;
        }),
        (this.setReferenceSpace = function (e) {
          c = e;
        }),
        (this.getBaseLayer = function () {
          return d === null ? f : d;
        }),
        (this.getBinding = function () {
          return (u === null && m && (u = new XRWebGLBinding(r, t)), u);
        }),
        (this.getFrame = function () {
          return p;
        }),
        (this.getSession = function () {
          return r;
        }),
        (this.setSession = async function (l) {
          if (((r = l), r !== null)) {
            if (
              ((y = e.getRenderTarget()),
              r.addEventListener(`select`, ne),
              r.addEventListener(`selectstart`, ne),
              r.addEventListener(`selectend`, ne),
              r.addEventListener(`squeeze`, ne),
              r.addEventListener(`squeezestart`, ne),
              r.addEventListener(`squeezeend`, ne),
              r.addEventListener(`end`, re),
              r.addEventListener(`inputsourceschange`, ie),
              v.xrCompatible !== !0 && (await t.makeXRCompatible()),
              (T = e.getPixelRatio()),
              e.getSize(w),
              m && `createProjectionLayer` in XRWebGLBinding.prototype)
            ) {
              let n = null,
                a = null,
                o = null;
              v.depth &&
                ((o = v.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
                (n = v.stencil ? M : ee),
                (a = v.stencil ? E : x));
              let s = { colorFormat: t.RGBA8, depthFormat: o, scaleFactor: i };
              ((u = this.getBinding()),
                (d = u.createProjectionLayer(s)),
                r.updateRenderState({ layers: [d] }),
                e.setPixelRatio(1),
                e.setSize(d.textureWidth, d.textureHeight, !1),
                (b = new tn(d.textureWidth, d.textureHeight, {
                  format: j,
                  type: g,
                  depthTexture: new sa(
                    d.textureWidth,
                    d.textureHeight,
                    a,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    n,
                  ),
                  stencilBuffer: v.stencil,
                  colorSpace: e.outputColorSpace,
                  samples: v.antialias ? 4 : 0,
                  resolveDepthBuffer: d.ignoreDepthValues === !1,
                  resolveStencilBuffer: d.ignoreDepthValues === !1,
                  storeMultisampledDepthBuffer: d.ignoreDepthValues === !1,
                  storeMultisampledStencilBuffer: d.ignoreDepthValues === !1,
                })));
            } else {
              let n = {
                antialias: v.antialias,
                alpha: !0,
                depth: v.depth,
                stencil: v.stencil,
                framebufferScaleFactor: i,
              };
              ((f = new XRWebGLLayer(r, t, n)),
                r.updateRenderState({ baseLayer: f }),
                e.setPixelRatio(1),
                e.setSize(f.framebufferWidth, f.framebufferHeight, !1),
                (b = new tn(f.framebufferWidth, f.framebufferHeight, {
                  format: j,
                  type: g,
                  colorSpace: e.outputColorSpace,
                  stencilBuffer: v.stencil,
                  resolveDepthBuffer: f.ignoreDepthValues === !1,
                  resolveStencilBuffer: f.ignoreDepthValues === !1,
                  storeMultisampledDepthBuffer: f.ignoreDepthValues === !1,
                  storeMultisampledStencilBuffer: f.ignoreDepthValues === !1,
                })));
            }
            ((b.isXRRenderTarget = !0),
              this.setFoveation(s),
              (c = null),
              (a = await r.requestReferenceSpace(o)),
              de.setContext(r),
              de.start(),
              (n.isPresenting = !0),
              n.dispatchEvent({ type: `sessionstart` }));
          }
        }),
        (this.getEnvironmentBlendMode = function () {
          if (r !== null) return r.environmentBlendMode;
        }),
        (this.getDepthTexture = function () {
          return h.getDepthTexture();
        }));
      function ie(e) {
        for (let t = 0; t < e.removed.length; t++) {
          let n = e.removed[t],
            r = C.indexOf(n);
          r >= 0 && ((C[r] = null), S[r].disconnect(n));
        }
        for (let t = 0; t < e.added.length; t++) {
          let n = e.added[t],
            r = C.indexOf(n);
          if (r === -1) {
            for (let e = 0; e < S.length; e++)
              if (e >= C.length) {
                (C.push(n), (r = e));
                break;
              } else if (C[e] === null) {
                ((C[e] = n), (r = e));
                break;
              }
            if (r === -1) break;
          }
          let i = S[r];
          i && i.connect(n);
        }
      }
      let ae = new W(),
        oe = new W();
      function se(e, t, n) {
        (ae.setFromMatrixPosition(t.matrixWorld),
          oe.setFromMatrixPosition(n.matrixWorld));
        let r = ae.distanceTo(oe),
          i = t.projectionMatrix.elements,
          a = n.projectionMatrix.elements,
          o = i[14] / (i[10] - 1),
          s = i[14] / (i[10] + 1),
          c = (i[9] + 1) / i[5],
          l = (i[9] - 1) / i[5],
          u = (i[8] - 1) / i[0],
          d = (a[8] + 1) / a[0],
          f = o * u,
          p = o * d,
          m = r / (-u + d),
          h = m * -u;
        if (
          (t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
          e.translateX(h),
          e.translateZ(m),
          e.matrixWorld.compose(e.position, e.quaternion, e.scale),
          e.matrixWorldInverse.copy(e.matrixWorld).invert(),
          i[10] === -1)
        )
          (e.projectionMatrix.copy(t.projectionMatrix),
            e.projectionMatrixInverse.copy(t.projectionMatrixInverse));
        else {
          let t = o + m,
            n = s + m,
            i = f - h,
            a = p + (r - h),
            u = ((c * s) / n) * t,
            d = ((l * s) / n) * t;
          (e.projectionMatrix.makePerspective(i, a, u, d, t, n),
            e.projectionMatrixInverse.copy(e.projectionMatrix).invert());
        }
      }
      function ce(e, t) {
        (t === null
          ? e.matrixWorld.copy(e.matrix)
          : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
          e.matrixWorldInverse.copy(e.matrixWorld).invert());
      }
      this.updateCamera = function (e) {
        if (r === null) return;
        let t = e.near,
          n = e.far;
        (h.texture !== null &&
          (h.depthNear > 0 && (t = h.depthNear),
          h.depthFar > 0 && (n = h.depthFar)),
          (N.near = k.near = O.near = t),
          (N.far = k.far = O.far = n),
          (te !== N.near || P !== N.far) &&
            (r.updateRenderState({ depthNear: N.near, depthFar: N.far }),
            (te = N.near),
            (P = N.far)),
          (N.layers.mask = e.layers.mask | 6),
          (O.layers.mask = N.layers.mask & -5),
          (k.layers.mask = N.layers.mask & -3));
        let i = e.parent,
          a = N.cameras;
        ce(N, i);
        for (let e = 0; e < a.length; e++) ce(a[e], i);
        (a.length === 2
          ? se(N, O, k)
          : N.projectionMatrix.copy(O.projectionMatrix),
          D === null &&
            e.isPerspectiveCamera &&
            (D = { camera: e, fov: e.fov, zoom: e.zoom }),
          F(e, N, i));
      };
      function F(e, t, n) {
        (n === null
          ? e.matrix.copy(t.matrixWorld)
          : (e.matrix.copy(n.matrixWorld),
            e.matrix.invert(),
            e.matrix.multiply(t.matrixWorld)),
          e.matrix.decompose(e.position, e.quaternion, e.scale),
          e.updateMatrixWorld(!0),
          e.projectionMatrix.copy(t.projectionMatrix),
          e.projectionMatrixInverse.copy(t.projectionMatrixInverse),
          e.isPerspectiveCamera &&
            ((e.fov = pt * 2 * Math.atan(1 / e.projectionMatrix.elements[5])),
            (e.zoom = 1)));
      }
      ((this.getCamera = function () {
        return N;
      }),
        (this.getFoveation = function () {
          if (d !== null || f !== null) return s;
        }),
        (this.setFoveation = function (e) {
          ((s = e),
            d !== null && (d.fixedFoveation = e),
            f !== null &&
              f.fixedFoveation !== void 0 &&
              (f.fixedFoveation = e));
        }),
        (this.hasDepthSensing = function () {
          return h.texture !== null;
        }),
        (this.getDepthSensingMesh = function () {
          return h.getMesh(N);
        }),
        (this.getCameraTexture = function (e) {
          return _[e];
        }));
      let le = null;
      function ue(t, i) {
        if (((l = i.getViewerPose(c || a)), (p = i), l !== null)) {
          let t = l.views;
          f !== null &&
            (e.setRenderTargetFramebuffer(b, f.framebuffer),
            e.setRenderTarget(b));
          let i = !1;
          t.length !== N.cameras.length && ((N.cameras.length = 0), (i = !0));
          for (let n = 0; n < t.length; n++) {
            let r = t[n],
              a = null;
            if (f !== null) a = f.getViewport(r);
            else {
              let t = u.getViewSubImage(d, r);
              ((a = t.viewport),
                n === 0 &&
                  (e.setRenderTargetTextures(
                    b,
                    t.colorTexture,
                    t.depthStencilTexture,
                  ),
                  e.setRenderTarget(b)));
            }
            let o = A[n];
            (o === void 0 &&
              ((o = new Eo()),
              o.layers.enable(n),
              (o.viewport = new $t()),
              (A[n] = o)),
              o.matrix.fromArray(r.transform.matrix),
              o.matrix.decompose(o.position, o.quaternion, o.scale),
              o.projectionMatrix.fromArray(r.projectionMatrix),
              o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),
              o.viewport.set(a.x, a.y, a.width, a.height),
              n === 0 &&
                (N.matrix.copy(o.matrix),
                N.matrix.decompose(N.position, N.quaternion, N.scale)),
              i === !0 && N.cameras.push(o));
          }
          let a = r.enabledFeatures;
          if (
            a &&
            a.includes(`depth-sensing`) &&
            r.depthUsage == `gpu-optimized` &&
            m
          ) {
            u = n.getBinding();
            let e = u.getDepthInformation(t[0]);
            e && e.isValid && e.texture && h.init(e, r.renderState);
          }
          if (a && a.includes(`camera-access`) && m) {
            (e.state.unbindTexture(), (u = n.getBinding()));
            for (let e = 0; e < t.length; e++) {
              let n = t[e].camera;
              if (n) {
                let e = _[n];
                e || ((e = new la()), (_[n] = e));
                let t = u.getCameraImage(n);
                e.sourceTexture = t;
              }
            }
          }
        }
        for (let e = 0; e < S.length; e++) {
          let t = C[e],
            n = S[e];
          t !== null && n !== void 0 && n.update(t, i, c || a);
        }
        (le && le(t, i),
          i.detectedPlanes &&
            n.dispatchEvent({ type: `planesdetected`, data: i }),
          (p = null));
      }
      let de = new is();
      (de.setAnimationLoop(ue),
        (this.setAnimationLoop = function (e) {
          le = e;
        }),
        (this.dispose = function () {}));
    }
  },
  pu = new q(),
  mu = new G();
mu.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function hu(e, t) {
  function n(e, t) {
    (e.matrixAutoUpdate === !0 && e.updateMatrix(), t.value.copy(e.matrix));
  }
  function r(t, n) {
    (n.color.getRGB(t.fogColor.value, Sa(e)),
      n.isFog
        ? ((t.fogNear.value = n.near), (t.fogFar.value = n.far))
        : n.isFogExp2 && (t.fogDensity.value = n.density));
  }
  function i(e, t, n, r, i) {
    t.isNodeMaterial
      ? (t.uniformsNeedUpdate = !1)
      : t.isMeshBasicMaterial
        ? a(e, t)
        : t.isMeshLambertMaterial
          ? (a(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity))
          : t.isMeshToonMaterial
            ? (a(e, t), d(e, t))
            : t.isMeshPhongMaterial
              ? (a(e, t),
                u(e, t),
                t.envMap && (e.envMapIntensity.value = t.envMapIntensity))
              : t.isMeshStandardMaterial
                ? (a(e, t), f(e, t), t.isMeshPhysicalMaterial && p(e, t, i))
                : t.isMeshMatcapMaterial
                  ? (a(e, t), m(e, t))
                  : t.isMeshDepthMaterial
                    ? a(e, t)
                    : t.isMeshDistanceMaterial
                      ? (a(e, t), h(e, t))
                      : t.isMeshNormalMaterial
                        ? a(e, t)
                        : t.isLineBasicMaterial
                          ? (o(e, t), t.isLineDashedMaterial && s(e, t))
                          : t.isPointsMaterial
                            ? c(e, t, n, r)
                            : t.isSpriteMaterial
                              ? l(e, t)
                              : t.isShadowMaterial
                                ? (e.color.value.copy(t.color),
                                  (e.opacity.value = t.opacity))
                                : t.isShaderMaterial &&
                                  (t.uniformsNeedUpdate = !1);
  }
  function a(e, r) {
    ((e.opacity.value = r.opacity),
      r.color && e.diffuse.value.copy(r.color),
      r.emissive &&
        e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),
      r.map && ((e.map.value = r.map), n(r.map, e.mapTransform)),
      r.alphaMap &&
        ((e.alphaMap.value = r.alphaMap), n(r.alphaMap, e.alphaMapTransform)),
      r.bumpMap &&
        ((e.bumpMap.value = r.bumpMap),
        n(r.bumpMap, e.bumpMapTransform),
        (e.bumpScale.value = r.bumpScale),
        r.side === 1 && (e.bumpScale.value *= -1)),
      r.normalMap &&
        ((e.normalMap.value = r.normalMap),
        n(r.normalMap, e.normalMapTransform),
        e.normalScale.value.copy(r.normalScale),
        r.side === 1 && e.normalScale.value.negate()),
      r.displacementMap &&
        ((e.displacementMap.value = r.displacementMap),
        n(r.displacementMap, e.displacementMapTransform),
        (e.displacementScale.value = r.displacementScale),
        (e.displacementBias.value = r.displacementBias)),
      r.emissiveMap &&
        ((e.emissiveMap.value = r.emissiveMap),
        n(r.emissiveMap, e.emissiveMapTransform)),
      r.specularMap &&
        ((e.specularMap.value = r.specularMap),
        n(r.specularMap, e.specularMapTransform)),
      r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest));
    let i = t.get(r),
      a = i.envMap,
      o = i.envMapRotation;
    (a &&
      ((e.envMap.value = a),
      e.envMapRotation.value
        .setFromMatrix4(pu.makeRotationFromEuler(o))
        .transpose(),
      a.isCubeTexture &&
        a.isRenderTargetTexture === !1 &&
        e.envMapRotation.value.premultiply(mu),
      (e.reflectivity.value = r.reflectivity),
      (e.ior.value = r.ior),
      (e.refractionRatio.value = r.refractionRatio)),
      r.lightMap &&
        ((e.lightMap.value = r.lightMap),
        (e.lightMapIntensity.value = r.lightMapIntensity),
        n(r.lightMap, e.lightMapTransform)),
      r.aoMap &&
        ((e.aoMap.value = r.aoMap),
        (e.aoMapIntensity.value = r.aoMapIntensity),
        n(r.aoMap, e.aoMapTransform)));
  }
  function o(e, t) {
    (e.diffuse.value.copy(t.color),
      (e.opacity.value = t.opacity),
      t.map && ((e.map.value = t.map), n(t.map, e.mapTransform)));
  }
  function s(e, t) {
    ((e.dashSize.value = t.dashSize),
      (e.totalSize.value = t.dashSize + t.gapSize),
      (e.scale.value = t.scale));
  }
  function c(e, t, r, i) {
    (e.diffuse.value.copy(t.color),
      (e.opacity.value = t.opacity),
      (e.size.value = t.size * r),
      (e.scale.value = i * 0.5),
      t.map && ((e.map.value = t.map), n(t.map, e.uvTransform)),
      t.alphaMap &&
        ((e.alphaMap.value = t.alphaMap), n(t.alphaMap, e.alphaMapTransform)),
      t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest));
  }
  function l(e, t) {
    (e.diffuse.value.copy(t.color),
      (e.opacity.value = t.opacity),
      (e.rotation.value = t.rotation),
      t.map && ((e.map.value = t.map), n(t.map, e.mapTransform)),
      t.alphaMap &&
        ((e.alphaMap.value = t.alphaMap), n(t.alphaMap, e.alphaMapTransform)),
      t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest));
  }
  function u(e, t) {
    (e.specular.value.copy(t.specular),
      (e.shininess.value = Math.max(t.shininess, 1e-4)));
  }
  function d(e, t) {
    t.gradientMap && (e.gradientMap.value = t.gradientMap);
  }
  function f(e, t) {
    ((e.metalness.value = t.metalness),
      t.metalnessMap &&
        ((e.metalnessMap.value = t.metalnessMap),
        n(t.metalnessMap, e.metalnessMapTransform)),
      (e.roughness.value = t.roughness),
      t.roughnessMap &&
        ((e.roughnessMap.value = t.roughnessMap),
        n(t.roughnessMap, e.roughnessMapTransform)),
      t.envMap && (e.envMapIntensity.value = t.envMapIntensity));
  }
  function p(e, t, r) {
    ((e.ior.value = t.ior),
      t.sheen > 0 &&
        (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),
        (e.sheenRoughness.value = t.sheenRoughness),
        t.sheenColorMap &&
          ((e.sheenColorMap.value = t.sheenColorMap),
          n(t.sheenColorMap, e.sheenColorMapTransform)),
        t.sheenRoughnessMap &&
          ((e.sheenRoughnessMap.value = t.sheenRoughnessMap),
          n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform))),
      t.clearcoat > 0 &&
        ((e.clearcoat.value = t.clearcoat),
        (e.clearcoatRoughness.value = t.clearcoatRoughness),
        t.clearcoatMap &&
          ((e.clearcoatMap.value = t.clearcoatMap),
          n(t.clearcoatMap, e.clearcoatMapTransform)),
        t.clearcoatRoughnessMap &&
          ((e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap),
          n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)),
        t.clearcoatNormalMap &&
          ((e.clearcoatNormalMap.value = t.clearcoatNormalMap),
          n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform),
          e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),
          t.side === 1 && e.clearcoatNormalScale.value.negate())),
      t.dispersion > 0 && (e.dispersion.value = t.dispersion),
      t.retroreflectivity > 0 &&
        (e.retroreflectivity.value = t.retroreflectivity),
      t.iridescence > 0 &&
        ((e.iridescence.value = t.iridescence),
        (e.iridescenceIOR.value = t.iridescenceIOR),
        (e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0]),
        (e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1]),
        t.iridescenceMap &&
          ((e.iridescenceMap.value = t.iridescenceMap),
          n(t.iridescenceMap, e.iridescenceMapTransform)),
        t.iridescenceThicknessMap &&
          ((e.iridescenceThicknessMap.value = t.iridescenceThicknessMap),
          n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform))),
      t.transmission > 0 &&
        ((e.transmission.value = t.transmission),
        (e.transmissionSamplerMap.value = r.texture),
        e.transmissionSamplerSize.value.set(r.width, r.height),
        t.transmissionMap &&
          ((e.transmissionMap.value = t.transmissionMap),
          n(t.transmissionMap, e.transmissionMapTransform)),
        (e.thickness.value = t.thickness),
        t.thicknessMap &&
          ((e.thicknessMap.value = t.thicknessMap),
          n(t.thicknessMap, e.thicknessMapTransform)),
        (e.attenuationDistance.value = t.attenuationDistance),
        e.attenuationColor.value.copy(t.attenuationColor)),
      t.anisotropy > 0 &&
        (e.anisotropyVector.value.set(
          t.anisotropy * Math.cos(t.anisotropyRotation),
          t.anisotropy * Math.sin(t.anisotropyRotation),
        ),
        t.anisotropyMap &&
          ((e.anisotropyMap.value = t.anisotropyMap),
          n(t.anisotropyMap, e.anisotropyMapTransform))),
      (e.specularIntensity.value = t.specularIntensity),
      e.specularColor.value.copy(t.specularColor),
      t.specularColorMap &&
        ((e.specularColorMap.value = t.specularColorMap),
        n(t.specularColorMap, e.specularColorMapTransform)),
      t.specularIntensityMap &&
        ((e.specularIntensityMap.value = t.specularIntensityMap),
        n(t.specularIntensityMap, e.specularIntensityMapTransform)));
  }
  function m(e, t) {
    t.matcap && (e.matcap.value = t.matcap);
  }
  function h(e, n) {
    let r = t.get(n).light;
    (e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),
      (e.nearDistance.value = r.shadow.camera.near),
      (e.farDistance.value = r.shadow.camera.far));
  }
  return { refreshFogUniforms: r, refreshMaterialUniforms: i };
}
function gu(e, t, n, r) {
  let i = {},
    a = {},
    o = [],
    s = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(e, t) {
    let n = t.program;
    r.uniformBlockBinding(e, n);
  }
  function l(e, n) {
    let o = i[e.id];
    o === void 0 &&
      (g(e), (o = u(e)), (i[e.id] = o), e.addEventListener(`dispose`, v));
    let s = n.program;
    r.updateUBOMapping(e, s);
    let c = t.render.frame;
    a[e.id] !== c && (f(e), (a[e.id] = c));
  }
  function u(t) {
    let n = d();
    t.__bindingPointIndex = n;
    let r = e.createBuffer(),
      i = t.__size,
      a = t.usage;
    return (
      e.bindBuffer(e.UNIFORM_BUFFER, r),
      e.bufferData(e.UNIFORM_BUFFER, i, a),
      e.bindBuffer(e.UNIFORM_BUFFER, null),
      e.bindBufferBase(e.UNIFORM_BUFFER, n, r),
      r
    );
  }
  function d() {
    for (let e = 0; e < s; e++) if (o.indexOf(e) === -1) return (o.push(e), e);
    return (
      V(
        `WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`,
      ),
      0
    );
  }
  function f(t) {
    let n = i[t.id],
      r = t.uniforms,
      a = t.__cache;
    e.bindBuffer(e.UNIFORM_BUFFER, n);
    for (let e = 0, t = r.length; e < t; e++) {
      let t = r[e];
      if (Array.isArray(t))
        for (let n = 0, r = t.length; n < r; n++) p(t[n], e, n, a);
      else p(t, e, 0, a);
    }
    e.bindBuffer(e.UNIFORM_BUFFER, null);
  }
  function p(t, n, r, i) {
    if (h(t, n, r, i) === !0) {
      let n = t.__offset,
        r = t.value;
      if (Array.isArray(r)) {
        let e = 0;
        for (let n = 0; n < r.length; n++) {
          let i = r[n],
            a = _(i);
          (m(i, t.__data, e),
            typeof i != `number` &&
              typeof i != `boolean` &&
              !i.isMatrix3 &&
              !ArrayBuffer.isView(i) &&
              (e += a.storage / Float32Array.BYTES_PER_ELEMENT));
        }
      } else m(r, t.__data, 0);
      e.bufferSubData(e.UNIFORM_BUFFER, n, t.__data);
    }
  }
  function m(e, t, n) {
    typeof e == `number` || typeof e == `boolean`
      ? (t[0] = e)
      : e.isMatrix3
        ? ((t[0] = e.elements[0]),
          (t[1] = e.elements[1]),
          (t[2] = e.elements[2]),
          (t[3] = 0),
          (t[4] = e.elements[3]),
          (t[5] = e.elements[4]),
          (t[6] = e.elements[5]),
          (t[7] = 0),
          (t[8] = e.elements[6]),
          (t[9] = e.elements[7]),
          (t[10] = e.elements[8]),
          (t[11] = 0))
        : ArrayBuffer.isView(e)
          ? t.set(new e.constructor(e.buffer, e.byteOffset, t.length))
          : e.toArray(t, n);
  }
  function h(e, t, n, r) {
    let i = e.value,
      a = t + `_` + n;
    if (r[a] === void 0)
      return (
        (r[a] =
          typeof i == `number` || typeof i == `boolean`
            ? i
            : ArrayBuffer.isView(i)
              ? i.slice()
              : i.clone()),
        !0
      );
    {
      let e = r[a];
      if (typeof i == `number` || typeof i == `boolean`) {
        if (e !== i) return ((r[a] = i), !0);
      } else if (ArrayBuffer.isView(i)) return !0;
      else if (e.equals(i) === !1) return (e.copy(i), !0);
    }
    return !1;
  }
  function g(e) {
    let t = e.uniforms,
      n = 0;
    for (let e = 0, r = t.length; e < r; e++) {
      let r = Array.isArray(t[e]) ? t[e] : [t[e]];
      for (let e = 0, t = r.length; e < t; e++) {
        let t = r[e],
          i = Array.isArray(t.value) ? t.value : [t.value];
        for (let e = 0, r = i.length; e < r; e++) {
          let r = i[e],
            a = _(r),
            o = n % 16,
            s = o % a.boundary,
            c = o + s;
          ((n += s),
            c !== 0 && 16 - c < a.storage && (n += 16 - c),
            (t.__data = new Float32Array(
              a.storage / Float32Array.BYTES_PER_ELEMENT,
            )),
            (t.__offset = n),
            (n += a.storage));
        }
      }
    }
    let r = n % 16;
    return (r > 0 && (n += 16 - r), (e.__size = n), (e.__cache = {}), this);
  }
  function _(e) {
    let t = { boundary: 0, storage: 0 };
    return (
      typeof e == `number` || typeof e == `boolean`
        ? ((t.boundary = 4), (t.storage = 4))
        : e.isVector2
          ? ((t.boundary = 8), (t.storage = 8))
          : e.isVector3 || e.isColor
            ? ((t.boundary = 16), (t.storage = 12))
            : e.isVector4
              ? ((t.boundary = 16), (t.storage = 16))
              : e.isMatrix3
                ? ((t.boundary = 48), (t.storage = 48))
                : e.isMatrix4
                  ? ((t.boundary = 64), (t.storage = 64))
                  : e.isTexture
                    ? B(
                        `WebGLRenderer: Texture samplers can not be part of an uniforms group.`,
                      )
                    : ArrayBuffer.isView(e)
                      ? ((t.boundary = 16), (t.storage = e.byteLength))
                      : B(`WebGLRenderer: Unsupported uniform value type.`, e),
      t
    );
  }
  function v(t) {
    let n = t.target;
    n.removeEventListener(`dispose`, v);
    let r = o.indexOf(n.__bindingPointIndex);
    (o.splice(r, 1), e.deleteBuffer(i[n.id]), delete i[n.id], delete a[n.id]);
  }
  function y() {
    for (let t in i) e.deleteBuffer(i[t]);
    ((o = []), (i = {}), (a = {}));
  }
  return { bind: c, update: l, dispose: y };
}
var _u = new Uint16Array([
    12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545,
    13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829,
    15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880,
    14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410,
    14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958,
    11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039,
    14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743,
    12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751,
    14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764,
    13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387,
    14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782,
    10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831,
    14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886,
    11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600,
    14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104,
    12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205,
    14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603,
    8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451,
    15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932,
    10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381,
    14461, 8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256,
    10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787,
    14883, 9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411,
    7507, 14279, 7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759,
    15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898,
    8910, 14800, 8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067,
    14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677, 15325, 8769, 15305,
    8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328,
    14804, 8009, 14688, 7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088,
    6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613, 15322, 7804,
    15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810,
    7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007, 5528,
    15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302,
    6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611,
    14679, 6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359,
    4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508,
    15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678,
    5543, 14527, 5287, 14377, 4985, 14133, 4586, 13869, 4257, 15360, 1563,
    15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273,
    4429, 15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621,
    14517, 4386, 14359, 4156, 14083, 3795, 13808, 3437, 15360, 122, 15360, 137,
    15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223,
    15120, 3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344,
    3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1, 15359, 21, 15355, 89,
    15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749,
    14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702,
    1183,
  ]),
  vu = null;
function yu() {
  return (
    vu === null &&
      ((vu = new xi(_u, 16, 16, P, C)),
      (vu.name = `DFG_LUT`),
      (vu.minFilter = p),
      (vu.magFilter = p),
      (vu.wrapS = c),
      (vu.wrapT = c),
      (vu.generateMipmaps = !1),
      (vu.needsUpdate = !0)),
    vu
  );
}
var bu = class {
    constructor(e = {}) {
      let {
        canvas: t = nt(),
        context: n = null,
        depth: r = !0,
        stencil: i = !1,
        alpha: a = !1,
        antialias: o = !1,
        premultipliedAlpha: s = !0,
        preserveDrawingBuffer: c = !1,
        powerPreference: l = `default`,
        failIfMajorPerformanceCaveat: u = !1,
        reversedDepthBuffer: d = !1,
        outputBufferType: f = g,
      } = e;
      this.isWebGLRenderer = !0;
      let p;
      if (n !== null) {
        if (
          typeof WebGLRenderingContext < `u` &&
          n instanceof WebGLRenderingContext
        )
          throw Error(
            `THREE.WebGLRenderer: WebGL 1 is not supported since r163.`,
          );
        p = n.getContextAttributes().alpha;
      } else p = a;
      let m = f,
        _ = new Set([re, ne, te]),
        v = new Set([g, x, y, E, w, T]),
        b = new Uint32Array(4),
        S = new Int32Array(4),
        D = new W(),
        O = null,
        k = null,
        A = [],
        j = [],
        ee = null;
      ((this.domElement = t),
        (this.debug = {
          checkShaderErrors: !0,
          diagnostics: { keywords: !1 },
          onShaderError: null,
        }),
        (this.autoClear = !0),
        (this.autoClearColor = !0),
        (this.autoClearDepth = !0),
        (this.autoClearStencil = !0),
        (this.sortObjects = !0),
        (this.clippingPlanes = []),
        (this.localClippingEnabled = !1),
        (this.toneMapping = 0),
        (this.toneMappingExposure = 1),
        (this.transmissionResolutionScale = 1));
      let M = this,
        N = !1,
        P = null,
        ie = null,
        ae = null,
        oe = null;
      this._outputColorSpace = We;
      let se = 0,
        ce = 0,
        F = null,
        le = -1,
        ue = null,
        de = new $t(),
        fe = new $t(),
        pe = null,
        me = new J(0),
        he = 0,
        ge = t.width,
        _e = t.height,
        ve = 1,
        ye = null,
        be = null,
        xe = new $t(0, 0, ge, _e),
        Se = new $t(0, 0, ge, _e),
        Ce = !1,
        we = new Li(),
        Te = !1,
        Ee = !1,
        De = new q(),
        Oe = new W(),
        ke = new $t(),
        Ae = {
          background: null,
          fog: null,
          environment: null,
          overrideMaterial: null,
          isScene: !0,
        },
        je = !1;
      function Me() {
        return F === null ? ve : 1;
      }
      let I = n;
      function Ne(e, n) {
        return t.getContext(e, n);
      }
      let Pe,
        Fe,
        L,
        Ie,
        R,
        z,
        Le,
        Re,
        ze,
        Be,
        Ve,
        He,
        Ue,
        Ge,
        Ke,
        qe,
        Je,
        Ye,
        Xe,
        Ze,
        $e,
        et,
        tt;
      try {
        let e = {
          alpha: !0,
          depth: r,
          stencil: i,
          antialias: o,
          premultipliedAlpha: s,
          preserveDrawingBuffer: c,
          powerPreference: l,
          failIfMajorPerformanceCaveat: u,
        };
        if (
          (`setAttribute` in t &&
            t.setAttribute(`data-engine`, `three.js r186`),
          t.addEventListener(`webglcontextlost`, ot, !1),
          t.addEventListener(`webglcontextrestored`, ct, !1),
          t.addEventListener(`webglcontextcreationerror`, lt, !1),
          I === null)
        ) {
          let t = `webgl2`;
          if (((I = Ne(t, e)), I === null))
            throw Ne(t)
              ? Error(
                  `THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`,
                )
              : Error(`THREE.WebGLRenderer: Error creating WebGL context.`);
        }
        rt();
      } catch (e) {
        throw (
          t.removeEventListener(`webglcontextlost`, ot, !1),
          t.removeEventListener(`webglcontextrestored`, ct, !1),
          t.removeEventListener(`webglcontextcreationerror`, lt, !1),
          V(`WebGLRenderer: ` + e.message),
          e
        );
      }
      function rt() {
        ((Pe = new Rs(I)),
          Pe.init(),
          ($e = new cu(I, Pe)),
          (Fe = new ps(I, Pe, e, $e)),
          (L = new ou(I, Pe)),
          Fe.reversedDepthBuffer && d && L.buffers.depth.setReversed(!0),
          (ie = I.createFramebuffer()),
          (ae = I.createFramebuffer()),
          (oe = I.createFramebuffer()),
          (Ie = new Vs(I)),
          (R = new Bl()),
          (z = new su(I, Pe, L, R, Fe, $e, Ie)),
          (Le = new Ls(M)),
          (Re = new as(I)),
          (et = new ds(I, Re)),
          (ze = new zs(I, Re, Ie, et)),
          (Be = new Us(I, ze, Re, et, Ie)),
          (Ye = new Hs(I, Fe, z)),
          (Ke = new ms(R)),
          (Ve = new zl(M, Le, Pe, Fe, et, Ke)),
          (He = new hu(M, R)),
          (Ue = new Wl()),
          (Ge = new Zl(Pe)),
          (Je = new us(M, Le, L, Be, p, s)),
          (qe = new au(M, Be, Fe)),
          (tt = new gu(I, Ie, Fe, L)),
          (Xe = new fs(I, Pe, Ie)),
          (Ze = new Bs(I, Pe, Ie)),
          (Ie.programs = Ve.programs),
          (M.capabilities = Fe),
          (M.extensions = Pe),
          (M.properties = R),
          (M.renderLists = Ue),
          (M.shadowMap = qe),
          (M.state = L),
          (M.info = Ie));
      }
      m !== 1009 && (ee = new Gs(m, t.width, t.height, o, r, i));
      let at = new fu(M, I);
      ((this.xr = at),
        (this.getContext = function () {
          return I;
        }),
        (this.getContextAttributes = function () {
          return I.getContextAttributes();
        }),
        (this.forceContextLoss = function () {
          let e = Pe.get(`WEBGL_lose_context`);
          e && e.loseContext();
        }),
        (this.forceContextRestore = function () {
          let e = Pe.get(`WEBGL_lose_context`);
          e && e.restoreContext();
        }),
        (this.getPixelRatio = function () {
          return ve;
        }),
        (this.setPixelRatio = function (e) {
          e !== void 0 && ((ve = e), this.setSize(ge, _e, !1));
        }),
        (this.getSize = function (e) {
          return e.set(ge, _e);
        }),
        (this.setSize = function (e, n, r = !0) {
          if (at.isPresenting) {
            B(
              `WebGLRenderer: Can't change size while VR device is presenting.`,
            );
            return;
          }
          ((ge = e),
            (_e = n),
            (t.width = Math.floor(e * ve)),
            (t.height = Math.floor(n * ve)),
            r === !0 &&
              ((t.style.width = e + `px`), (t.style.height = n + `px`)),
            ee !== null && ee.setSize(t.width, t.height),
            this.setViewport(0, 0, e, n));
        }),
        (this.getDrawingBufferSize = function (e) {
          return e.set(ge * ve, _e * ve).floor();
        }),
        (this.setDrawingBufferSize = function (e, n, r) {
          ((ge = e),
            (_e = n),
            (ve = r),
            (t.width = Math.floor(e * r)),
            (t.height = Math.floor(n * r)),
            this.setViewport(0, 0, e, n));
        }),
        (this.setEffects = function (e) {
          if (m === 1009) {
            V(
              `WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`,
            );
            return;
          }
          if (e) {
            for (let t = 0; t < e.length; t++)
              if (e[t].isOutputPass === !0) {
                B(
                  `WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`,
                );
                break;
              }
          }
          ee.setEffects(e || []);
        }),
        (this.getCurrentViewport = function (e) {
          return e.copy(de);
        }),
        (this.getViewport = function (e) {
          return e.copy(xe);
        }),
        (this.setViewport = function (e, t, n, r) {
          (e.isVector4 ? xe.set(e.x, e.y, e.z, e.w) : xe.set(e, t, n, r),
            L.viewport(de.copy(xe).multiplyScalar(ve).round()));
        }),
        (this.getScissor = function (e) {
          return e.copy(Se);
        }),
        (this.setScissor = function (e, t, n, r) {
          (e.isVector4 ? Se.set(e.x, e.y, e.z, e.w) : Se.set(e, t, n, r),
            L.scissor(fe.copy(Se).multiplyScalar(ve).round()));
        }),
        (this.getScissorTest = function () {
          return Ce;
        }),
        (this.setScissorTest = function (e) {
          L.setScissorTest((Ce = e));
        }),
        (this.setOpaqueSort = function (e) {
          ye = e;
        }),
        (this.setTransparentSort = function (e) {
          be = e;
        }),
        (this.getClearColor = function (e) {
          return e.copy(Je.getClearColor());
        }),
        (this.setClearColor = function () {
          Je.setClearColor(...arguments);
        }),
        (this.getClearAlpha = function () {
          return Je.getClearAlpha();
        }),
        (this.setClearAlpha = function () {
          Je.setClearAlpha(...arguments);
        }),
        (this.clear = function (e = !0, t = !0, n = !0) {
          let r = 0;
          if (e) {
            let e = !1;
            if (F !== null) {
              let t = F.texture.format;
              e = _.has(t);
            }
            if (e) {
              let e = F.texture.type,
                t = v.has(e),
                n = Je.getClearColor(),
                r = Je.getClearAlpha(),
                i = n.r,
                a = n.g,
                o = n.b;
              t
                ? ((b[0] = i),
                  (b[1] = a),
                  (b[2] = o),
                  (b[3] = r),
                  I.clearBufferuiv(I.COLOR, 0, b))
                : ((S[0] = i),
                  (S[1] = a),
                  (S[2] = o),
                  (S[3] = r),
                  I.clearBufferiv(I.COLOR, 0, S));
            } else r |= I.COLOR_BUFFER_BIT;
          }
          (t &&
            ((r |= I.DEPTH_BUFFER_BIT), this.state.buffers.depth.setMask(!0)),
            n &&
              ((r |= I.STENCIL_BUFFER_BIT),
              this.state.buffers.stencil.setMask(4294967295)),
            r !== 0 && I.clear(r));
        }),
        (this.clearColor = function () {
          this.clear(!0, !1, !1);
        }),
        (this.clearDepth = function () {
          this.clear(!1, !0, !1);
        }),
        (this.clearStencil = function () {
          this.clear(!1, !1, !0);
        }),
        (this.setNodesHandler = function (e) {
          (e.setRenderer(this), (P = e));
        }),
        (this.dispose = function () {
          (t.removeEventListener(`webglcontextlost`, ot, !1),
            t.removeEventListener(`webglcontextrestored`, ct, !1),
            t.removeEventListener(`webglcontextcreationerror`, lt, !1),
            Je.dispose(),
            Ue.dispose(),
            Ge.dispose(),
            R.dispose(),
            Le.dispose(),
            Be.dispose(),
            et.dispose(),
            tt.dispose(),
            Ve.dispose(),
            at.dispose(),
            at.removeEventListener(`sessionstart`, ht),
            at.removeEventListener(`sessionend`, gt),
            _t.stop());
        }));
      function ot(e) {
        (e.preventDefault(), it(`WebGLRenderer: Context Lost.`), (N = !0));
      }
      function ct() {
        (it(`WebGLRenderer: Context Restored.`), (N = !1));
        let e = Ie.autoReset,
          t = qe.enabled,
          n = qe.autoUpdate,
          r = qe.needsUpdate,
          i = qe.type;
        (rt(),
          (Ie.autoReset = e),
          (qe.enabled = t),
          (qe.autoUpdate = n),
          (qe.needsUpdate = r),
          (qe.type = i));
      }
      function lt(e) {
        V(
          `WebGLRenderer: A WebGL context could not be created. Reason: `,
          e.statusMessage,
        );
      }
      function ut(e) {
        let t = e.target;
        (t.removeEventListener(`dispose`, ut), dt(t));
      }
      function dt(e) {
        (ft(e), R.remove(e));
      }
      function ft(e) {
        let t = R.get(e).programs;
        t !== void 0 &&
          (t.forEach(function (e) {
            Ve.releaseProgram(e);
          }),
          e.isShaderMaterial && Ve.releaseShaderCache(e));
      }
      this.renderBufferDirect = function (e, t, n, r, i, a) {
        t === null && (t = Ae);
        let o = i.isMesh && i.matrixWorld.determinantAffine() < 0,
          s = Dt(e, t, n, r, i);
        L.setMaterial(r, o);
        let c = n.index,
          l = 1;
        if (r.wireframe === !0) {
          if (((c = ze.getWireframeAttribute(n)), c === void 0)) return;
          l = 2;
        }
        let u = n.drawRange,
          d = n.attributes.position,
          f = u.start * l,
          p = (u.start + u.count) * l;
        (a !== null &&
          ((f = Math.max(f, a.start * l)),
          (p = Math.min(p, (a.start + a.count) * l))),
          c === null
            ? d != null && ((f = Math.max(f, 0)), (p = Math.min(p, d.count)))
            : ((f = Math.max(f, 0)), (p = Math.min(p, c.count))));
        let m = p - f;
        if (m < 0 || m === 1 / 0) return;
        et.setup(i, r, s, n, c);
        let h,
          g = Xe;
        if (
          (c !== null && ((h = Re.get(c)), (g = Ze), g.setIndex(h)), i.isMesh)
        )
          r.wireframe === !0
            ? (L.setLineWidth(r.wireframeLinewidth * Me()), g.setMode(I.LINES))
            : g.setMode(I.TRIANGLES);
        else if (i.isLine) {
          let e = r.linewidth;
          (e === void 0 && (e = 1),
            L.setLineWidth(e * Me()),
            i.isLineSegments
              ? g.setMode(I.LINES)
              : i.isLineLoop
                ? g.setMode(I.LINE_LOOP)
                : g.setMode(I.LINE_STRIP));
        } else
          i.isPoints
            ? g.setMode(I.POINTS)
            : i.isSprite && g.setMode(I.TRIANGLES);
        if (i.isBatchedMesh) {
          if (Pe.get(`WEBGL_multi_draw`))
            g.renderMultiDraw(
              i._multiDrawStarts,
              i._multiDrawCounts,
              i._multiDrawCount,
            );
          else {
            let e = i._multiDrawStarts,
              t = i._multiDrawCounts,
              n = i._multiDrawCount,
              a = c ? Re.get(c).bytesPerElement : 1,
              o = R.get(r).currentProgram.getUniforms();
            for (let r = 0; r < n; r++)
              (o.setValue(I, `_gl_DrawID`, r), g.render(e[r] / a, t[r]));
          }
        } else if (i.isInstancedMesh) g.renderInstances(f, m, i.count);
        else if (n.isInstancedBufferGeometry) {
          let e = n._maxInstanceCount === void 0 ? 1 / 0 : n._maxInstanceCount,
            t = Math.min(n.instanceCount, e);
          g.renderInstances(f, m, t);
        } else g.render(f, m);
      };
      function pt(e, t, n, r) {
        (P !== null && e.isNodeMaterial && P.setObject(r, e),
          Te === !0 && Ke.setState(e, n, !1),
          e.transparent === !0 && e.side === 2 && e.forceSinglePass === !1
            ? ((e.side = 1),
              (e.needsUpdate = !0),
              Ct(e, t, r),
              (e.side = 0),
              (e.needsUpdate = !0),
              Ct(e, t, r),
              (e.side = 2))
            : Ct(e, t, r));
      }
      ((this.compile = function (e, t, n = null) {
        (n === null && (n = e),
          P !== null && P.renderStart(e, t, n),
          (k = Ge.get(n)),
          k.init(t),
          j.push(k),
          n.traverseVisible(function (e) {
            e.isLight &&
              e.layers.test(t.layers) &&
              (k.pushLight(e), e.castShadow && k.pushShadow(e));
          }),
          e !== n &&
            e.traverseVisible(function (e) {
              e.isLight &&
                e.layers.test(t.layers) &&
                (k.pushLight(e), e.castShadow && k.pushShadow(e));
            }),
          k.setupLights(),
          P !== null && P.updateLights(k.state.lightsArray),
          (Ee = this.localClippingEnabled),
          (Te = Ke.init(this.clippingPlanes, Ee)),
          Te === !0 && Ke.setGlobalState(this.clippingPlanes, t),
          P !== null && qe.render(k.state.shadowsArray, n, t));
        let r = new Set();
        return (
          e.traverse(function (e) {
            if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite)) return;
            let i = e.material;
            if (i) {
              if (Array.isArray(i))
                for (let a = 0; a < i.length; a++) {
                  let o = i[a];
                  (pt(o, n, t, e), r.add(o));
                }
              else (pt(i, n, t, e), r.add(i));
            }
          }),
          (k = j.pop()),
          P !== null && P.renderEnd(),
          r
        );
      }),
        (this.compileAsync = function (e, t, n = null) {
          let r = this.compile(e, t, n);
          return new Promise((t) => {
            function n() {
              if (
                (r.forEach(function (e) {
                  let t = R.get(e).currentProgram;
                  (t === void 0 || t.isReady()) && r.delete(e);
                }),
                r.size === 0)
              ) {
                t(e);
                return;
              }
              setTimeout(n, 10);
            }
            Pe.get(`KHR_parallel_shader_compile`) === null
              ? setTimeout(n, 10)
              : n();
          });
        }));
      let mt = null;
      function H(e) {
        mt && mt(e);
      }
      function ht() {
        _t.stop();
      }
      function gt() {
        _t.start();
      }
      let _t = new is();
      (_t.setAnimationLoop(H),
        typeof self < `u` && _t.setContext(self),
        (this.setAnimationLoop = function (e) {
          ((mt = e),
            at.setAnimationLoop(e),
            e === null ? _t.stop() : _t.start());
        }),
        at.addEventListener(`sessionstart`, ht),
        at.addEventListener(`sessionend`, gt),
        (this.render = function (e, t) {
          if (t !== void 0 && t.isCamera !== !0) {
            V(
              `WebGLRenderer.render: camera is not an instance of THREE.Camera.`,
            );
            return;
          }
          if (N === !0) return;
          P !== null && P.renderStart(e, t);
          let n = at.enabled === !0 && at.isPresenting === !0,
            r = ee !== null && (F === null || n) && ee.begin(M, F);
          if (
            (e.matrixWorldAutoUpdate === !0 && e.updateMatrixWorld(),
            t.parent === null &&
              t.matrixWorldAutoUpdate === !0 &&
              t.updateMatrixWorld(),
            at.enabled === !0 &&
              at.isPresenting === !0 &&
              (ee === null || ee.isCompositing() === !1) &&
              (at.cameraAutoUpdate === !0 && at.updateCamera(t),
              (t = at.getCamera())),
            e.isScene === !0 && e.onBeforeRender(M, e, t, F),
            (k = Ge.get(e, j.length)),
            k.init(t),
            (k.state.textureUnits = z.getTextureUnits()),
            j.push(k),
            De.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
            we.setFromProjectionMatrix(De, Qe, t.reversedDepth),
            (Ee = this.localClippingEnabled),
            (Te = Ke.init(this.clippingPlanes, Ee)),
            (O = Ue.get(e, A.length)),
            O.init(),
            A.push(O),
            at.enabled === !0 && at.isPresenting === !0)
          ) {
            let e = M.xr.getDepthSensingMesh();
            e !== null && vt(e, t, -1 / 0, M.sortObjects);
          }
          (vt(e, t, 0, M.sortObjects),
            O.finish(),
            P !== null && P.updateLights(k.state.lightsArray),
            M.sortObjects === !0 && O.sort(ye, be),
            (je =
              at.enabled === !1 ||
              at.isPresenting === !1 ||
              at.hasDepthSensing() === !1),
            je && Je.addToRenderList(O, e),
            this.info.render.frame++,
            this.info.autoReset === !0 && this.info.reset(),
            Te === !0 && Ke.beginShadows());
          let i = k.state.shadowsArray;
          if (
            (qe.render(i, e, t),
            Te === !0 && Ke.endShadows(),
            (r && ee.hasRenderPass()) === !1)
          ) {
            let n = O.opaque,
              r = O.transmissive;
            if ((k.setupLights(), t.isArrayCamera)) {
              let i = t.cameras;
              if (r.length > 0)
                for (let t = 0, a = i.length; t < a; t++) {
                  let a = i[t];
                  bt(n, r, e, a);
                }
              je && Je.render(e);
              for (let t = 0, n = i.length; t < n; t++) {
                let n = i[t];
                yt(O, e, n, n.viewport);
              }
            } else
              (r.length > 0 && bt(n, r, e, t), je && Je.render(e), yt(O, e, t));
          }
          (F !== null &&
            ce === 0 &&
            (z.updateMultisampleRenderTarget(F), z.updateRenderTargetMipmap(F)),
            r && ee.end(M),
            e.isScene === !0 && e.onAfterRender(M, e, t),
            et.resetDefaultState(),
            (le = -1),
            (ue = null),
            j.pop(),
            j.length > 0
              ? ((k = j[j.length - 1]),
                z.setTextureUnits(k.state.textureUnits),
                Te === !0 &&
                  Ke.setGlobalState(M.clippingPlanes, k.state.camera))
              : (k = null),
            A.pop(),
            (O = A.length > 0 ? A[A.length - 1] : null),
            P !== null && P.renderEnd());
        }));
      function vt(e, t, n, r) {
        if (e.visible === !1) return;
        if (e.layers.test(t.layers)) {
          if (e.isGroup) n = e.renderOrder;
          else if (e.isLOD) e.autoUpdate === !0 && e.update(t);
          else if (e.isLightProbeGrid) k.pushLightProbeGrid(e);
          else if (e.isLight) (k.pushLight(e), e.castShadow && k.pushShadow(e));
          else if (e.isSprite) {
            if (!e.frustumCulled || e.intersectsFrustum(we)) {
              r && ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);
              let i = Be.update(e),
                a = e.material;
              a.visible && O.push(e, i, a, n, ke.z, null, t);
            }
          } else if (
            (e.isMesh || e.isLine || e.isPoints) &&
            (!e.frustumCulled || e.intersectsFrustum(we))
          ) {
            let i = Be.update(e),
              a = e.material;
            if (
              (r &&
                (e.boundingSphere === void 0
                  ? (i.boundingSphere === null && i.computeBoundingSphere(),
                    ke.copy(i.boundingSphere.center))
                  : (e.boundingSphere === null && e.computeBoundingSphere(),
                    ke.copy(e.boundingSphere.center)),
                ke.applyMatrix4(e.matrixWorld).applyMatrix4(De)),
              Array.isArray(a))
            ) {
              let r = i.groups;
              for (let o = 0, s = r.length; o < s; o++) {
                let s = r[o],
                  c = a[s.materialIndex];
                c && c.visible && O.push(e, i, c, n, ke.z, s, t);
              }
            } else a.visible && O.push(e, i, a, n, ke.z, null, t);
          }
        }
        let i = e.children;
        for (let e = 0, a = i.length; e < a; e++) vt(i[e], t, n, r);
      }
      function yt(e, t, n, r) {
        let { opaque: i, transmissive: a, transparent: o } = e;
        (k.setupLightsView(n),
          Te === !0 && Ke.setGlobalState(M.clippingPlanes, n),
          r && L.viewport(de.copy(r)),
          i.length > 0 && xt(i, t, n),
          a.length > 0 && xt(a, t, n),
          o.length > 0 && xt(o, t, n),
          L.buffers.depth.setTest(!0),
          L.buffers.depth.setMask(!0),
          L.buffers.color.setMask(!0),
          L.setPolygonOffset(!1));
      }
      function bt(e, t, n, r) {
        if ((n.isScene === !0 ? n.overrideMaterial : null) !== null) return;
        if (k.state.transmissionRenderTarget[r.id] === void 0) {
          let e =
            Pe.has(`EXT_color_buffer_half_float`) ||
            Pe.has(`EXT_color_buffer_float`);
          k.state.transmissionRenderTarget[r.id] = new tn(1, 1, {
            generateMipmaps: !0,
            type: e ? C : g,
            minFilter: h,
            samples: Math.max(4, Fe.samples),
            stencilBuffer: i,
            resolveDepthBuffer: !1,
            resolveStencilBuffer: !1,
            storeMultisampledDepthBuffer: !1,
            storeMultisampledStencilBuffer: !1,
            colorSpace: K.workingColorSpace,
          });
        }
        let a = k.state.transmissionRenderTarget[r.id],
          o = r.viewport || de;
        a.setSize(
          o.z * M.transmissionResolutionScale,
          o.w * M.transmissionResolutionScale,
        );
        let s = M.getRenderTarget(),
          c = M.getActiveCubeFace(),
          l = M.getActiveMipmapLevel();
        (M.setRenderTarget(a),
          M.getClearColor(me),
          (he = M.getClearAlpha()),
          he < 1 && M.setClearColor(16777215, 0.5),
          M.clear(),
          je && Je.render(n));
        let u = M.toneMapping;
        M.toneMapping = 0;
        let d = r.viewport;
        if (
          (r.viewport !== void 0 && (r.viewport = void 0),
          k.setupLightsView(r),
          Te === !0 && Ke.setGlobalState(M.clippingPlanes, r),
          xt(e, n, r),
          z.updateMultisampleRenderTarget(a),
          z.updateRenderTargetMipmap(a),
          Pe.has(`WEBGL_multisampled_render_to_texture`) === !1)
        ) {
          let e = !1;
          for (let i = 0, a = t.length; i < a; i++) {
            let { object: a, geometry: o, material: s, group: c } = t[i];
            if (s.side === 2 && a.layers.test(r.layers)) {
              let t = s.side;
              ((s.side = 1),
                (s.needsUpdate = !0),
                St(a, n, r, o, s, c),
                (s.side = t),
                (s.needsUpdate = !0),
                (e = !0));
            }
          }
          e === !0 &&
            (z.updateMultisampleRenderTarget(a), z.updateRenderTargetMipmap(a));
        }
        (M.setRenderTarget(s, c, l),
          M.setClearColor(me, he),
          d !== void 0 && (r.viewport = d),
          (M.toneMapping = u));
      }
      function xt(e, t, n) {
        let r = t.isScene === !0 ? t.overrideMaterial : null;
        for (let i = 0, a = e.length; i < a; i++) {
          let a = e[i],
            { object: o, geometry: s, group: c } = a,
            l = a.material;
          (l.allowOverride === !0 && r !== null && (l = r),
            o.layers.test(n.layers) && St(o, t, n, s, l, c));
        }
      }
      function St(e, t, n, r, i, a) {
        (P !== null && i.isNodeMaterial && P.setObject(e, i),
          e.onBeforeRender(M, t, n, r, i, a),
          e.modelViewMatrix.multiplyMatrices(
            n.matrixWorldInverse,
            e.matrixWorld,
          ),
          e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
          i.onBeforeRender(M, t, n, r, e, a),
          i.transparent === !0 && i.side === 2 && i.forceSinglePass === !1
            ? ((i.side = 1),
              (i.needsUpdate = !0),
              M.renderBufferDirect(n, t, r, i, e, a),
              (i.side = 0),
              (i.needsUpdate = !0),
              M.renderBufferDirect(n, t, r, i, e, a),
              (i.side = 2))
            : M.renderBufferDirect(n, t, r, i, e, a),
          e.onAfterRender(M, t, n, r, i, a));
      }
      function Ct(e, t, n) {
        t.isScene !== !0 && (t = Ae);
        let r = R.get(e),
          i = k.state.lights,
          a = k.state.shadowsArray,
          o = i.state.version,
          s = Ve.getParameters(
            e,
            i.state,
            a,
            t,
            n,
            k.state.lightProbeGridArray,
          ),
          c = Ve.getProgramCacheKey(s),
          l = r.programs;
        ((r.environment =
          e.isMeshStandardMaterial ||
          e.isMeshLambertMaterial ||
          e.isMeshPhongMaterial
            ? t.environment
            : null),
          (r.fog = t.fog));
        let u =
          e.isMeshStandardMaterial ||
          (e.isMeshLambertMaterial && !e.envMap) ||
          (e.isMeshPhongMaterial && !e.envMap);
        ((r.envMap = Le.get(e.envMap || r.environment, u)),
          (r.envMapRotation =
            r.environment !== null && e.envMap === null
              ? t.environmentRotation
              : e.envMapRotation),
          l === void 0 &&
            (e.addEventListener(`dispose`, ut),
            (l = new Map()),
            (r.programs = l)));
        let d = l.get(c);
        if (d !== void 0) {
          if (r.currentProgram === d && r.lightsStateVersion === o)
            return (Tt(e, s), d);
        } else
          ((s.uniforms = Ve.getUniforms(e)),
            P !== null && e.isNodeMaterial && P.build(e, n, s),
            e.onBeforeCompile(s, M),
            (d = Ve.acquireProgram(s, c)),
            l.set(c, d),
            (r.uniforms = s.uniforms));
        let f = r.uniforms;
        return (
          ((!e.isShaderMaterial && !e.isRawShaderMaterial) ||
            e.clipping === !0) &&
            (f.clippingPlanes = Ke.uniform),
          Tt(e, s),
          (r.needsLights = kt(e)),
          (r.lightsStateVersion = o),
          r.needsLights &&
            ((f.ambientLightColor.value = i.state.ambient),
            (f.lightProbe.value = i.state.probe),
            (f.sunLights.value = i.state.sun),
            (f.sunLightShadows.value = i.state.sunShadow),
            (f.directionalLights.value = i.state.directional),
            (f.directionalLightShadows.value = i.state.directionalShadow),
            (f.spotLights.value = i.state.spot),
            (f.spotLightShadows.value = i.state.spotShadow),
            (f.rectAreaLights.value = i.state.rectArea),
            (f.ltc_1.value = i.state.rectAreaLTC1),
            (f.ltc_2.value = i.state.rectAreaLTC2),
            (f.pointLights.value = i.state.point),
            (f.pointLightShadows.value = i.state.pointShadow),
            (f.hemisphereLights.value = i.state.hemi),
            (f.sunShadowMatrix.value = i.state.sunShadowMatrix),
            (f.sunShadowCascade.value = i.state.sunShadowCascade),
            (f.directionalShadowMatrix.value = i.state.directionalShadowMatrix),
            (f.spotLightMatrix.value = i.state.spotLightMatrix),
            (f.spotLightMap.value = i.state.spotLightMap),
            (f.pointShadowMatrix.value = i.state.pointShadowMatrix)),
          (r.lightProbeGrid = k.state.lightProbeGridArray.length > 0),
          (r.currentProgram = d),
          (r.uniformsList = null),
          d
        );
      }
      function wt(e) {
        if (e.uniformsList === null) {
          let t = e.currentProgram.getUniforms();
          e.uniformsList = Qc.seqWithValue(t.seq, e.uniforms);
        }
        return e.uniformsList;
      }
      function Tt(e, t) {
        let n = R.get(e);
        ((n.outputColorSpace = t.outputColorSpace),
          (n.batching = t.batching),
          (n.batchingColor = t.batchingColor),
          (n.instancing = t.instancing),
          (n.instancingColor = t.instancingColor),
          (n.instancingMorph = t.instancingMorph),
          (n.skinning = t.skinning),
          (n.morphTargets = t.morphTargets),
          (n.morphNormals = t.morphNormals),
          (n.morphColors = t.morphColors),
          (n.morphTargetsCount = t.morphTargetsCount),
          (n.numClippingPlanes = t.numClippingPlanes),
          (n.numIntersection = t.numClipIntersection),
          (n.vertexAlphas = t.vertexAlphas),
          (n.vertexTangents = t.vertexTangents),
          (n.toneMapping = t.toneMapping));
      }
      function Et(e, t) {
        if (e.length === 0) return null;
        if (e.length === 1) return e[0].texture === null ? null : e[0];
        D.setFromMatrixPosition(t.matrixWorld);
        for (let t = 0, n = e.length; t < n; t++) {
          let n = e[t];
          if (n.texture !== null && n.boundingBox.containsPoint(D)) return n;
        }
        return null;
      }
      function Dt(e, t, n, r, i) {
        (t.isScene !== !0 && (t = Ae), z.resetTextureUnits());
        let a = t.fog,
          o =
            r.isMeshStandardMaterial ||
            r.isMeshLambertMaterial ||
            r.isMeshPhongMaterial
              ? t.environment
              : null,
          s =
            F === null
              ? M.outputColorSpace
              : F.isXRRenderTarget === !0
                ? F.texture.colorSpace
                : K.workingColorSpace,
          c =
            r.isMeshStandardMaterial ||
            (r.isMeshLambertMaterial && !r.envMap) ||
            (r.isMeshPhongMaterial && !r.envMap),
          l = Le.get(r.envMap || o, c),
          u =
            r.vertexColors === !0 &&
            !!n.attributes.color &&
            n.attributes.color.itemSize === 4,
          d = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0),
          f = !!n.morphAttributes.position,
          p = !!n.morphAttributes.normal,
          m = !!n.morphAttributes.color,
          h = 0;
        r.toneMapped &&
          (F === null || F.isXRRenderTarget === !0) &&
          (h = M.toneMapping);
        let g =
            n.morphAttributes.position ||
            n.morphAttributes.normal ||
            n.morphAttributes.color,
          _ = g === void 0 ? 0 : g.length,
          v = R.get(r),
          y = k.state.lights;
        if (Te === !0 && (Ee === !0 || e !== ue)) {
          let t = e === ue && r.id === le;
          Ke.setState(r, e, t);
        }
        let b = !1;
        r.version === v.__version
          ? v.needsLights && v.lightsStateVersion !== y.state.version
            ? (b = !0)
            : v.outputColorSpace === s
              ? (i.isBatchedMesh && v.batching === !1) ||
                (!i.isBatchedMesh && v.batching === !0) ||
                (i.isBatchedMesh &&
                  v.batchingColor === !0 &&
                  i._colorsTexture === null) ||
                (i.isBatchedMesh &&
                  v.batchingColor === !1 &&
                  i._colorsTexture !== null) ||
                (i.isInstancedMesh && v.instancing === !1) ||
                (!i.isInstancedMesh && v.instancing === !0) ||
                (i.isSkinnedMesh && v.skinning === !1) ||
                (!i.isSkinnedMesh && v.skinning === !0) ||
                (i.isInstancedMesh &&
                  v.instancingColor === !0 &&
                  i.instanceColor === null) ||
                (i.isInstancedMesh &&
                  v.instancingColor === !1 &&
                  i.instanceColor !== null) ||
                (i.isInstancedMesh &&
                  v.instancingMorph === !0 &&
                  i.morphTexture === null) ||
                (i.isInstancedMesh &&
                  v.instancingMorph === !1 &&
                  i.morphTexture !== null)
                ? (b = !0)
                : v.envMap === l
                  ? (r.fog === !0 && v.fog !== a) ||
                    (v.numClippingPlanes !== void 0 &&
                      (v.numClippingPlanes !== Ke.numPlanes ||
                        v.numIntersection !== Ke.numIntersection))
                    ? (b = !0)
                    : v.vertexAlphas === u &&
                        v.vertexTangents === d &&
                        v.morphTargets === f &&
                        v.morphNormals === p &&
                        v.morphColors === m &&
                        v.toneMapping === h &&
                        v.morphTargetsCount === _
                      ? !!v.lightProbeGrid !=
                          k.state.lightProbeGridArray.length > 0 && (b = !0)
                      : (b = !0)
                  : (b = !0)
              : (b = !0)
          : ((b = !0), (v.__version = r.version));
        let x = v.currentProgram;
        b === !0 &&
          ((x = Ct(r, t, i)),
          P && r.isNodeMaterial && P.onUpdateProgram(r, x, v));
        let S = !1,
          C = !1,
          w = !1,
          T = x.getUniforms(),
          E = v.uniforms;
        if (
          (L.useProgram(x.program) && ((S = !0), (C = !0), (w = !0)),
          r.id !== le && ((le = r.id), (C = !0)),
          v.needsLights)
        ) {
          let e = Et(k.state.lightProbeGridArray, i);
          v.lightProbeGrid !== e && ((v.lightProbeGrid = e), (C = !0));
        }
        if (S || ue !== e) {
          (L.buffers.depth.getReversed() &&
            e.reversedDepth !== !0 &&
            ((e._reversedDepth = !0), e.updateProjectionMatrix()),
            T.setValue(I, `projectionMatrix`, e.projectionMatrix),
            T.setValue(I, `viewMatrix`, e.matrixWorldInverse));
          let t = T.map.cameraPosition;
          (t !== void 0 &&
            t.setValue(I, Oe.setFromMatrixPosition(e.matrixWorld)),
            Fe.logarithmicDepthBuffer &&
              T.setValue(
                I,
                `logDepthBufFC`,
                2 / (Math.log(e.far + 1) / Math.LN2),
              ),
            (r.isMeshPhongMaterial ||
              r.isMeshToonMaterial ||
              r.isMeshLambertMaterial ||
              r.isMeshBasicMaterial ||
              r.isMeshStandardMaterial ||
              r.isShaderMaterial) &&
              T.setValue(I, `isOrthographic`, e.isOrthographicCamera === !0),
            ue !== e && ((ue = e), (C = !0), (w = !0)));
        }
        if (
          (v.needsLights &&
            (y.state.sunShadowMap.length > 0 &&
              T.setValue(I, `sunShadowMap`, y.state.sunShadowMap, z),
            y.state.directionalShadowMap.length > 0 &&
              T.setValue(
                I,
                `directionalShadowMap`,
                y.state.directionalShadowMap,
                z,
              ),
            y.state.spotShadowMap.length > 0 &&
              T.setValue(I, `spotShadowMap`, y.state.spotShadowMap, z),
            y.state.pointShadowMap.length > 0 &&
              T.setValue(I, `pointShadowMap`, y.state.pointShadowMap, z)),
          i.isSkinnedMesh)
        ) {
          (T.setOptional(I, i, `bindMatrix`),
            T.setOptional(I, i, `bindMatrixInverse`));
          let e = i.skeleton;
          e &&
            (e.boneTexture === null && e.computeBoneTexture(),
            T.setValue(I, `boneTexture`, e.boneTexture, z));
        }
        i.isBatchedMesh &&
          (T.setOptional(I, i, `batchingTexture`),
          T.setValue(I, `batchingTexture`, i._matricesTexture, z),
          T.setOptional(I, i, `batchingIdTexture`),
          T.setValue(I, `batchingIdTexture`, i._indirectTexture, z),
          T.setOptional(I, i, `batchingColorTexture`),
          i._colorsTexture !== null &&
            T.setValue(I, `batchingColorTexture`, i._colorsTexture, z));
        let D = n.morphAttributes;
        if (
          ((D.position !== void 0 ||
            D.normal !== void 0 ||
            D.color !== void 0) &&
            Ye.update(i, n, x),
          (C || v.receiveShadow !== i.receiveShadow) &&
            ((v.receiveShadow = i.receiveShadow),
            T.setValue(I, `receiveShadow`, i.receiveShadow)),
          (r.isMeshStandardMaterial ||
            r.isMeshLambertMaterial ||
            r.isMeshPhongMaterial) &&
            r.envMap === null &&
            t.environment !== null &&
            (E.envMapIntensity.value = t.environmentIntensity),
          E.dfgLUT !== void 0 && (E.dfgLUT.value = yu()),
          C)
        ) {
          if (
            (T.setValue(I, `toneMappingExposure`, M.toneMappingExposure),
            v.needsLights && Ot(E, w),
            a && r.fog === !0 && He.refreshFogUniforms(E, a),
            He.refreshMaterialUniforms(
              E,
              r,
              ve,
              _e,
              k.state.transmissionRenderTarget[e.id],
            ),
            v.needsLights && v.lightProbeGrid)
          ) {
            let e = v.lightProbeGrid;
            ((E.probesSH.value = e.texture),
              E.probesMin.value.copy(e.boundingBox.min),
              E.probesMax.value.copy(e.boundingBox.max),
              E.probesResolution.value.copy(e.resolution));
          }
          Qc.upload(I, wt(v), E, z);
        }
        if (
          (r.isShaderMaterial &&
            r.uniformsNeedUpdate === !0 &&
            (Qc.upload(I, wt(v), E, z), (r.uniformsNeedUpdate = !1)),
          r.isSpriteMaterial && T.setValue(I, `center`, i.center),
          T.setValue(I, `modelViewMatrix`, i.modelViewMatrix),
          T.setValue(I, `normalMatrix`, i.normalMatrix),
          T.setValue(I, `modelMatrix`, i.matrixWorld),
          r.uniformsGroups !== void 0)
        ) {
          let e = r.uniformsGroups;
          for (let t = 0, n = e.length; t < n; t++) {
            let n = e[t];
            (tt.update(n, x), tt.bind(n, x));
          }
        }
        return x;
      }
      function Ot(e, t) {
        ((e.ambientLightColor.needsUpdate = t),
          (e.lightProbe.needsUpdate = t),
          (e.sunLights.needsUpdate = t),
          (e.sunLightShadows.needsUpdate = t),
          (e.directionalLights.needsUpdate = t),
          (e.directionalLightShadows.needsUpdate = t),
          (e.pointLights.needsUpdate = t),
          (e.pointLightShadows.needsUpdate = t),
          (e.spotLights.needsUpdate = t),
          (e.spotLightShadows.needsUpdate = t),
          (e.rectAreaLights.needsUpdate = t),
          (e.hemisphereLights.needsUpdate = t));
      }
      function kt(e) {
        return (
          e.isMeshLambertMaterial ||
          e.isMeshToonMaterial ||
          e.isMeshPhongMaterial ||
          e.isMeshStandardMaterial ||
          e.isShadowMaterial ||
          (e.isShaderMaterial && e.lights === !0)
        );
      }
      ((this.getActiveCubeFace = function () {
        return se;
      }),
        (this.getActiveMipmapLevel = function () {
          return ce;
        }),
        (this.getRenderTarget = function () {
          return F;
        }),
        (this.setRenderTargetTextures = function (e, t, n) {
          let r = R.get(e);
          ((r.__autoAllocateDepthBuffer = e.resolveDepthBuffer === !1),
            r.__autoAllocateDepthBuffer === !1 && (r.__useRenderToTexture = !1),
            (R.get(e.texture).__webglTexture = t),
            (R.get(e.depthTexture).__webglTexture = r.__autoAllocateDepthBuffer
              ? void 0
              : n),
            (r.__hasExternalTextures = !0));
        }),
        (this.setRenderTargetFramebuffer = function (e, t) {
          let n = R.get(e);
          ((n.__webglFramebuffer = t),
            (n.__useDefaultFramebuffer = t === void 0));
        }),
        (this.setRenderTarget = function (e, t = 0, n = 0) {
          ((F = e), (se = t), (ce = n));
          let r = null,
            i = !1,
            a = !1;
          if (e) {
            let o = R.get(e);
            if (o.__useDefaultFramebuffer !== void 0) {
              (L.bindFramebuffer(I.FRAMEBUFFER, o.__webglFramebuffer),
                de.copy(e.viewport),
                fe.copy(e.scissor),
                (pe = e.scissorTest),
                L.viewport(de),
                L.scissor(fe),
                L.setScissorTest(pe),
                (le = -1));
              return;
            }
            if (o.__webglFramebuffer === void 0) z.setupRenderTarget(e);
            else if (o.__hasExternalTextures)
              z.rebindTextures(
                e,
                R.get(e.texture).__webglTexture,
                R.get(e.depthTexture).__webglTexture,
              );
            else if (e.depthBuffer) {
              let t = e.depthTexture;
              if (o.__boundDepthTexture !== t) {
                if (
                  t !== null &&
                  R.has(t) &&
                  (e.width !== t.image.width || e.height !== t.image.height)
                )
                  throw Error(
                    `THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`,
                  );
                z.setupDepthRenderbuffer(e);
              }
            }
            let s = e.texture;
            (s.isData3DTexture ||
              s.isDataArrayTexture ||
              s.isCompressedArrayTexture) &&
              (a = !0);
            let c = R.get(e).__webglFramebuffer;
            (e.isWebGLCubeRenderTarget
              ? ((r = Array.isArray(c[t]) ? c[t][n] : c[t]), (i = !0))
              : (r =
                  e.samples > 0 && z.useMultisampledRTT(e) === !1
                    ? R.get(e).__webglMultisampledFramebuffer
                    : Array.isArray(c)
                      ? c[n]
                      : c),
              de.copy(e.viewport),
              fe.copy(e.scissor),
              (pe = e.scissorTest));
          } else
            (de.copy(xe).multiplyScalar(ve).floor(),
              fe.copy(Se).multiplyScalar(ve).floor(),
              (pe = Ce));
          if (
            (n !== 0 && (r = ie),
            L.bindFramebuffer(I.FRAMEBUFFER, r) && L.drawBuffers(e, r),
            L.viewport(de),
            L.scissor(fe),
            L.setScissorTest(pe),
            i)
          ) {
            let r = R.get(e.texture);
            I.framebufferTexture2D(
              I.FRAMEBUFFER,
              I.COLOR_ATTACHMENT0,
              I.TEXTURE_CUBE_MAP_POSITIVE_X + t,
              r.__webglTexture,
              n,
            );
          } else if (a) {
            let r = t;
            for (let t = 0; t < e.textures.length; t++) {
              let i = R.get(e.textures[t]);
              I.framebufferTextureLayer(
                I.FRAMEBUFFER,
                I.COLOR_ATTACHMENT0 + t,
                i.__webglTexture,
                n,
                r,
              );
            }
          } else if (e !== null && n !== 0) {
            let t = R.get(e.texture);
            I.framebufferTexture2D(
              I.FRAMEBUFFER,
              I.COLOR_ATTACHMENT0,
              I.TEXTURE_2D,
              t.__webglTexture,
              n,
            );
          }
          le = -1;
        }));
      function At(e) {
        let t = R.get(e);
        return (
          (t.__readFormat !== e.format || t.__readType !== e.type) &&
            ((t.__readFormat = e.format),
            (t.__readType = e.type),
            (t.__formatReadable = Fe.textureFormatReadable(e.format)),
            (t.__typeReadable = Fe.textureTypeReadable(e.type))),
          t
        );
      }
      ((this.readRenderTargetPixels = function (e, t, n, r, i, a, o, s = 0) {
        if (!(e && e.isWebGLRenderTarget)) {
          V(
            `WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`,
          );
          return;
        }
        let c = R.get(e).__webglFramebuffer;
        if ((e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o]), c)) {
          L.bindFramebuffer(I.FRAMEBUFFER, c);
          try {
            let o = e.textures[s],
              c = o.format,
              l = o.type;
            e.textures.length > 1 && I.readBuffer(I.COLOR_ATTACHMENT0 + s);
            let u = At(o);
            if (u.__formatReadable === !1) {
              V(
                `WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`,
              );
              return;
            }
            if (u.__typeReadable === !1) {
              V(
                `WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`,
              );
              return;
            }
            t >= 0 &&
              t <= e.width - r &&
              n >= 0 &&
              n <= e.height - i &&
              I.readPixels(t, n, r, i, $e.convert(c), $e.convert(l), a);
          } finally {
            let e = F === null ? null : R.get(F).__webglFramebuffer;
            L.bindFramebuffer(I.FRAMEBUFFER, e);
          }
        }
      }),
        (this.readRenderTargetPixelsAsync = async function (
          e,
          t,
          n,
          r,
          i,
          a,
          o,
          s = 0,
        ) {
          if (!(e && e.isWebGLRenderTarget))
            throw Error(
              `THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`,
            );
          let c = R.get(e).__webglFramebuffer;
          if ((e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o]), c)) {
            if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
              L.bindFramebuffer(I.FRAMEBUFFER, c);
              let o = e.textures[s],
                l = o.format,
                u = o.type;
              e.textures.length > 1 && I.readBuffer(I.COLOR_ATTACHMENT0 + s);
              let d = At(o);
              if (d.__formatReadable === !1)
                throw Error(
                  `THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`,
                );
              if (d.__typeReadable === !1)
                throw Error(
                  `THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`,
                );
              let f = I.createBuffer();
              (I.bindBuffer(I.PIXEL_PACK_BUFFER, f),
                I.bufferData(I.PIXEL_PACK_BUFFER, a.byteLength, I.STREAM_READ),
                I.readPixels(t, n, r, i, $e.convert(l), $e.convert(u), 0),
                I.bindBuffer(I.PIXEL_PACK_BUFFER, null));
              let p = F === null ? null : R.get(F).__webglFramebuffer;
              L.bindFramebuffer(I.FRAMEBUFFER, p);
              let m = I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE, 0);
              return (
                I.flush(),
                await st(I, m, 4),
                I.bindBuffer(I.PIXEL_PACK_BUFFER, f),
                I.getBufferSubData(I.PIXEL_PACK_BUFFER, 0, a),
                I.bindBuffer(I.PIXEL_PACK_BUFFER, null),
                I.deleteBuffer(f),
                I.deleteSync(m),
                a
              );
            }
            throw Error(
              `THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`,
            );
          }
        }),
        (this.copyFramebufferToTexture = function (e, t = null, n = 0) {
          let r = 2 ** -n,
            i = Math.floor(e.image.width * r),
            a = Math.floor(e.image.height * r),
            o = t === null ? 0 : t.x,
            s = t === null ? 0 : t.y;
          (z.setTexture2D(e, 0),
            I.copyTexSubImage2D(I.TEXTURE_2D, n, 0, 0, o, s, i, a),
            L.unbindTexture());
        }),
        (this.copyTextureToTexture = function (
          e,
          t,
          n = null,
          r = null,
          i = 0,
          a = 0,
        ) {
          let o,
            s,
            c,
            l,
            u,
            d,
            f,
            p,
            m,
            h = e.isCompressedTexture ? e.mipmaps[a] : e.image;
          if (n !== null)
            ((o = n.max.x - n.min.x),
              (s = n.max.y - n.min.y),
              (c = n.isBox3 ? n.max.z - n.min.z : 1),
              (l = n.min.x),
              (u = n.min.y),
              (d = n.isBox3 ? n.min.z : 0));
          else {
            let t = 2 ** -i;
            ((o = Math.floor(h.width * t)),
              (s = Math.floor(h.height * t)),
              (c = e.isDataArrayTexture
                ? h.depth
                : e.isData3DTexture
                  ? Math.floor(h.depth * t)
                  : 1),
              (l = 0),
              (u = 0),
              (d = 0));
          }
          r === null
            ? ((f = 0), (p = 0), (m = 0))
            : ((f = r.x), (p = r.y), (m = r.z));
          let g = $e.convert(t.format),
            _ = $e.convert(t.type),
            v;
          (t.isData3DTexture
            ? (z.setTexture3D(t, 0), (v = I.TEXTURE_3D))
            : t.isDataArrayTexture || t.isCompressedArrayTexture
              ? (z.setTexture2DArray(t, 0), (v = I.TEXTURE_2D_ARRAY))
              : (z.setTexture2D(t, 0), (v = I.TEXTURE_2D)),
            L.activeTexture(I.TEXTURE0),
            L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, t.flipY),
            L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha),
            L.pixelStorei(I.UNPACK_ALIGNMENT, t.unpackAlignment));
          let y = L.getParameter(I.UNPACK_ROW_LENGTH),
            b = L.getParameter(I.UNPACK_IMAGE_HEIGHT),
            x = L.getParameter(I.UNPACK_SKIP_PIXELS),
            S = L.getParameter(I.UNPACK_SKIP_ROWS),
            C = L.getParameter(I.UNPACK_SKIP_IMAGES);
          (L.pixelStorei(I.UNPACK_ROW_LENGTH, h.width),
            L.pixelStorei(I.UNPACK_IMAGE_HEIGHT, h.height),
            L.pixelStorei(I.UNPACK_SKIP_PIXELS, l),
            L.pixelStorei(I.UNPACK_SKIP_ROWS, u),
            L.pixelStorei(I.UNPACK_SKIP_IMAGES, d));
          let w = e.isDataArrayTexture || e.isData3DTexture,
            T = t.isDataArrayTexture || t.isData3DTexture;
          if (e.isDepthTexture) {
            let n = R.get(e),
              r = R.get(t),
              h = R.get(n.__renderTarget),
              g = R.get(r.__renderTarget);
            (L.bindFramebuffer(I.READ_FRAMEBUFFER, h.__webglFramebuffer),
              L.bindFramebuffer(I.DRAW_FRAMEBUFFER, g.__webglFramebuffer));
            for (let n = 0; n < c; n++)
              (w &&
                (I.framebufferTextureLayer(
                  I.READ_FRAMEBUFFER,
                  I.COLOR_ATTACHMENT0,
                  R.get(e).__webglTexture,
                  i,
                  d + n,
                ),
                I.framebufferTextureLayer(
                  I.DRAW_FRAMEBUFFER,
                  I.COLOR_ATTACHMENT0,
                  R.get(t).__webglTexture,
                  a,
                  m + n,
                )),
                I.blitFramebuffer(
                  l,
                  u,
                  o,
                  s,
                  f,
                  p,
                  o,
                  s,
                  I.DEPTH_BUFFER_BIT,
                  I.NEAREST,
                ));
            (L.bindFramebuffer(I.READ_FRAMEBUFFER, null),
              L.bindFramebuffer(I.DRAW_FRAMEBUFFER, null));
          } else if (i !== 0 || e.isRenderTargetTexture || R.has(e)) {
            let n = R.get(e),
              r = R.get(t);
            (L.bindFramebuffer(I.READ_FRAMEBUFFER, ae),
              L.bindFramebuffer(I.DRAW_FRAMEBUFFER, oe));
            for (let e = 0; e < c; e++)
              (w
                ? I.framebufferTextureLayer(
                    I.READ_FRAMEBUFFER,
                    I.COLOR_ATTACHMENT0,
                    n.__webglTexture,
                    i,
                    d + e,
                  )
                : I.framebufferTexture2D(
                    I.READ_FRAMEBUFFER,
                    I.COLOR_ATTACHMENT0,
                    I.TEXTURE_2D,
                    n.__webglTexture,
                    i,
                  ),
                T
                  ? I.framebufferTextureLayer(
                      I.DRAW_FRAMEBUFFER,
                      I.COLOR_ATTACHMENT0,
                      r.__webglTexture,
                      a,
                      m + e,
                    )
                  : I.framebufferTexture2D(
                      I.DRAW_FRAMEBUFFER,
                      I.COLOR_ATTACHMENT0,
                      I.TEXTURE_2D,
                      r.__webglTexture,
                      a,
                    ),
                i === 0
                  ? T
                    ? I.copyTexSubImage3D(v, a, f, p, m + e, l, u, o, s)
                    : I.copyTexSubImage2D(v, a, f, p, l, u, o, s)
                  : I.blitFramebuffer(
                      l,
                      u,
                      o,
                      s,
                      f,
                      p,
                      o,
                      s,
                      I.COLOR_BUFFER_BIT,
                      I.NEAREST,
                    ));
            (L.bindFramebuffer(I.READ_FRAMEBUFFER, null),
              L.bindFramebuffer(I.DRAW_FRAMEBUFFER, null));
          } else
            T
              ? e.isDataTexture || e.isData3DTexture
                ? I.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h.data)
                : t.isCompressedArrayTexture
                  ? I.compressedTexSubImage3D(v, a, f, p, m, o, s, c, g, h.data)
                  : I.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h)
              : e.isDataTexture
                ? I.texSubImage2D(I.TEXTURE_2D, a, f, p, o, s, g, _, h.data)
                : e.isCompressedTexture
                  ? I.compressedTexSubImage2D(
                      I.TEXTURE_2D,
                      a,
                      f,
                      p,
                      h.width,
                      h.height,
                      g,
                      h.data,
                    )
                  : I.texSubImage2D(I.TEXTURE_2D, a, f, p, o, s, g, _, h);
          (L.pixelStorei(I.UNPACK_ROW_LENGTH, y),
            L.pixelStorei(I.UNPACK_IMAGE_HEIGHT, b),
            L.pixelStorei(I.UNPACK_SKIP_PIXELS, x),
            L.pixelStorei(I.UNPACK_SKIP_ROWS, S),
            L.pixelStorei(I.UNPACK_SKIP_IMAGES, C),
            a === 0 && t.generateMipmaps && I.generateMipmap(v),
            L.unbindTexture());
        }),
        (this.initRenderTarget = function (e) {
          R.get(e).__webglFramebuffer === void 0 && z.setupRenderTarget(e);
        }),
        (this.initTexture = function (e) {
          (e.isCubeTexture
            ? z.setTextureCube(e, 0)
            : e.isData3DTexture
              ? z.setTexture3D(e, 0)
              : e.isDataArrayTexture || e.isCompressedArrayTexture
                ? z.setTexture2DArray(e, 0)
                : z.setTexture2D(e, 0),
            L.unbindTexture());
        }),
        (this.resetState = function () {
          ((se = 0), (ce = 0), (F = null), L.reset(), et.reset());
        }),
        typeof __THREE_DEVTOOLS__ < `u` &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent(`observe`, { detail: this }),
          ));
    }
    get coordinateSystem() {
      return Qe;
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(e) {
      this._outputColorSpace = e;
      let t = this.getContext();
      ((t.drawingBufferColorSpace = K._getDrawingBufferColorSpace(e)),
        (t.unpackColorSpace = K._getUnpackColorSpace()));
    }
  },
  xu = `
precision highp float;
precision highp int;
`,
  Su = `
float bayer4(vec2 fc) {
  ivec2 p = ivec2(mod(fc, 4.0));
  int i = p.x + p.y * 4;
  float m[16] = float[16](0., 8., 2., 10., 12., 4., 14., 6., 3., 11., 1., 9., 15., 7., 13., 5.);
  return (m[i] + 0.5) / 16.0;
}
`,
  Cu = `
uniform sampler2D uRamp;
vec3 rampAt(float row, float heat, float snap) {
  heat = clamp(heat, 0.0, 4.0);
  int r = int(row + 0.5);
  if (snap > 0.5) return texelFetch(uRamp, ivec2(int(floor(heat + 0.5)), r), 0).rgb;
  float lo = floor(heat);
  vec3 a = texelFetch(uRamp, ivec2(int(lo), r), 0).rgb;
  vec3 b = texelFetch(uRamp, ivec2(int(min(lo + 1.0, 4.0)), r), 0).rgb;
  return mix(a, b, heat - lo);
}
`,
  wu = `
#ifdef FX_HOSTED
uniform vec3 uView;
uniform vec3 uSV[2];
uniform float uSquash;
#define FX_VIEW uView
#define FX_SQUASH uSquash
#else
#define FX_VIEW vec3(0.0, 0.70710678, 0.70710678)
#define FX_SQUASH 0.7
#endif
`,
  Tu = (e) => (e ? { FX_HOSTED: `` } : {}),
  Eu = `
${xu}
in vec3 position;
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,
  Z = { glow: 0, spark: 1, smoke: 2, ring: 3, flare: 4 },
  Du = `${xu}
${wu}
in vec3 position;     // quad corner
in vec4 aP; in vec4 aV; in vec4 aA; in vec4 aB; in vec4 aC;
uniform mat4 projectionMatrix;
uniform float uTime;
uniform vec2 uWH;
out vec2 vQ; out float vRow; out float vHeat; out float vA; out float vI; out float vAdd;
flat out int vShape;
void main() {
  float age = uTime - aP.w;
  float life = aV.w;
  if (age < 0.0 || age >= life) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  float f = age / life;
  float drag = aA.x, grav = aA.y;
  float tl = age;
  vec3 p; vec3 v;
  if (aB.w > 9.5) {
    // orbit: round the centre aP on the ground ellipse (y squashed FX_SQUASH, as the telegraphs are);
    // aV = (radius, angular speed, rise, life), aA.xy = (radius decay rate, start angle). The angular
    // speed grows as the radius shrinks, so an inward spiral whirls faster as it closes.
    float r0 = aV.x, w = aV.y, k = drag, th0 = grav;
    float r = r0 * exp(-k * age);
    float ek = min(exp(k * age), 30.0);
    float th = th0 + (abs(k) > 1e-4 ? w * (ek - 1.0) / k : w * age);
    float cs = cos(th), sn = sin(th);
    p = aP.xyz + vec3(r * cs, r * sn * FX_SQUASH, aV.z * age);
    p.z = max(p.z, 0.0);
    float dr = -k * r, dth = w * ek;
    v = vec3(dr * cs - r * sn * dth, (dr * sn + r * cs * dth) * FX_SQUASH, aV.z);
  } else if (grav > 0.0) {
    float tland = (aV.z + sqrt(max(aV.z * aV.z + 2.0 * grav * aP.z, 0.0))) / grav;
    tl = min(age, tland);
    float m = drag > 0.0 ? (1.0 - exp(-drag * tl)) / drag : tl;
    p = vec3(aP.xy + aV.xy * m, max(aP.z + aV.z * tl - 0.5 * grav * tl * tl, 0.0));
    v = age < tland ? vec3(aV.xy * exp(-drag * tl), aV.z - grav * tl) : vec3(0.0);
  } else {
    float m = drag > 0.0 ? (1.0 - exp(-drag * tl)) / drag : tl;
    p = vec3(aP.xy + aV.xy * m, max(aP.z + aV.z * m, 0.0));
    v = vec3(aV.xyz) * exp(-drag * tl);
  }
  vec4 c = projectionMatrix * vec4(p, 1.0);
  float size = mix(aA.z, aA.w, f);
  vec2 q = position.xy;
  vec2 off;
#ifdef FX_HOSTED
  vec2 sv = vec2(dot(uSV[0], v), dot(uSV[1], v));
#else
  vec2 sv = vec2(v.x, v.y - v.z);
#endif
  float sp = length(sv);
  if (aC.w > 0.0 && sp > 1.0) {
    vec2 ax = sv / sp;
    vec2 pe = vec2(-ax.y, ax.x);
    off = ax * q.x * (size + sp * aC.w) + pe * q.y * size;
  } else off = q * size;
#ifdef FX_HOSTED
  // the quad keeps one depth, and HD-2D's tilted ground under its lower half is nearer than its
  // centre (about 1.2 px of depth per screen px at 35°): it takes the depth of a point pulled toward
  // the camera by its size, so a glow at rest on the ground isn't cut in half
  vec4 cd = projectionMatrix * vec4(p + uView * (size + 1.0), 1.0);
  c.z = cd.z / cd.w * c.w;
#endif
  c.xy += vec2(off.x * 2.0 / uWH.x, -off.y * 2.0 / uWH.y) * c.w;
  gl_Position = c;
  vQ = q;
  vRow = aB.x;
  vHeat = mix(aB.y, aB.z, f);
  vShape = int(aB.w > 9.5 ? aB.w - 10.0 + 0.5 : aB.w + 0.5);
  vI = aC.x;
  vAdd = aC.y;
  vA = aC.z * (1.0 - smoothstep(0.6, 1.0, f)) * smoothstep(0.0, 0.04, f + 0.001);
}
`,
  Ou = `${xu}
${Cu}
in vec2 vQ; in float vRow; in float vHeat; in float vA; in float vI; in float vAdd;
flat in int vShape;
out vec4 o;
void main() {
  float r2 = dot(vQ, vQ);
  float a;
  float heat = vHeat;
  if (vShape == 0) { a = exp(-r2 * 3.2); heat -= r2 * 1.6; }
  else if (vShape == 1) { a = exp(-vQ.y * vQ.y * 5.0) * smoothstep(1.0, 0.25, abs(vQ.x)); }
  else if (vShape == 2) { a = smoothstep(1.0, 0.15, sqrt(r2)); a *= a; }
  else if (vShape == 3) { float r = sqrt(r2); a = exp(-pow((r - 0.85) / 0.05, 2.0)); }
  else {
    float r = sqrt(r2);
    a = exp(-r2 * 7.0) + 0.55 * exp(-abs(vQ.x) * 16.0) * exp(-vQ.y * vQ.y * 1.4) + 0.55 * exp(-abs(vQ.y) * 16.0) * exp(-vQ.x * vQ.x * 1.4);
    heat -= r * 1.2;
  }
  a *= vA;
  if (a < 0.002) discard;
  vec3 col = rampAt(vRow, heat, 0.0) * vI;
  o = vec4(col * a, a * (1.0 - vAdd));
}
`,
  ku = class {
    cap;
    mesh;
    head = 0;
    arr;
    attrs;
    ends;
    spans = [];
    maxEnd = 0;
    wrapped = !1;
    geo;
    constructor(e, t, n = {}) {
      this.cap = e;
      let r = new Fo();
      (r.setAttribute(
        `position`,
        new yr(new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]), 3),
      ),
        r.setIndex([0, 1, 2, 0, 2, 3]));
      let i = [`aP`, `aV`, `aA`, `aB`, `aC`];
      ((this.arr = i.map(() => new Float32Array(e * 4))),
        (this.attrs = i.map((e, t) => {
          let n = new Ti(this.arr[t], 4);
          return (n.setUsage(Xe), r.setAttribute(e, n), n);
        })),
        (r.instanceCount = 0),
        (this.geo = r),
        (this.ends = new Float32Array(e)));
      let a = new Da({
        glslVersion: Ze,
        vertexShader: Du,
        fragmentShader: Ou,
        uniforms: t,
        defines: { ...n },
        transparent: !0,
        depthTest: !0,
        depthWrite: !1,
        side: 2,
        blending: 5,
        blendEquation: 100,
        blendSrc: 201,
        blendDst: 205,
        blendSrcAlpha: 201,
        blendDstAlpha: 205,
      });
      ((this.mesh = new si(r, a)),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = 10));
    }
    emit(e, t) {
      t >= this.maxEnd &&
        !this.spans.length &&
        ((this.head = 0), (this.wrapped = !1));
      let n = this.head;
      ((this.head = (this.head + 1) % this.cap),
        this.head === 0 && (this.wrapped = !0));
      let r = n * 4,
        i = t + (e.delay ?? 0);
      this.maxEnd = Math.max(this.maxEnd, i + e.life);
      let [a, o, s, c, l] = this.arr;
      ((a[r] = e.x),
        (a[r + 1] = e.y),
        (a[r + 2] = e.z ?? 0),
        (a[r + 3] = i),
        (o[r] = e.vx ?? 0),
        (o[r + 1] = e.vy ?? 0),
        (o[r + 2] = e.vz ?? 0),
        (o[r + 3] = e.life),
        (s[r] = e.drag ?? 0),
        (s[r + 1] = e.grav ?? 0),
        (s[r + 2] = e.s0 ?? 1),
        (s[r + 3] = e.s1 ?? e.s0 ?? 1),
        (c[r] = e.ramp),
        (c[r + 1] = e.h0 ?? 4),
        (c[r + 2] = e.h1 ?? e.h0 ?? 4),
        (c[r + 3] = e.shape ?? Z.glow),
        (l[r] = e.I ?? 1),
        (l[r + 1] =
          e.add === !1 ? 0 : e.add === !0 || e.add === void 0 ? 1 : e.add),
        (l[r + 2] = e.a ?? 1),
        (l[r + 3] = e.stretch ?? 0),
        (this.ends[n] = i + e.life));
      let u = this.spans[this.spans.length - 1];
      return (u && u[0] + u[1] === n ? u[1]++ : this.spans.push([n, 1]), n);
    }
    get busyUntil() {
      return this.maxEnd;
    }
    alive(e) {
      let t = 0;
      for (let n = 0; n < this.ends.length; n++) this.ends[n] > e && t++;
      return t;
    }
    flush(e) {
      if (
        (e >= this.maxEnd &&
          !this.spans.length &&
          ((this.head = 0), (this.wrapped = !1)),
        (this.geo.instanceCount = this.wrapped ? this.cap : this.head),
        this.spans.length)
      ) {
        for (let e of this.attrs) {
          e.clearUpdateRanges();
          for (let [t, n] of this.spans) e.addUpdateRange(t * 4, n * 4);
          e.needsUpdate = !0;
        }
        this.spans = [];
      }
    }
    clear() {
      for (let e of this.arr) e.fill(0);
      this.ends.fill(0);
      for (let e of this.attrs) (e.clearUpdateRanges(), (e.needsUpdate = !0));
      ((this.spans = []),
        (this.head = 0),
        (this.wrapped = !1),
        (this.maxEnd = 0));
    }
  },
  Au = {
    dust: [`#2e2219`, `#4f3b29`, `#7a5f43`, `#a3865f`, `#cdb68a`],
    spark: t.gilt,
  },
  ju = { ...t, ...Au },
  Mu = Object.keys(ju),
  Q = Object.fromEntries(Mu.map((e, t) => [e, t]));
function Nu(e) {
  let t = parseInt(e.slice(1), 16);
  return [(t >> 16) & 255, (t >> 8) & 255, t & 255];
}
function Pu(e, t) {
  let [n, r, i] = Nu(ju[Mu[e]][t]);
  return [n / 255, r / 255, i / 255];
}
function Fu() {
  let e = Mu.length,
    t = new Uint8Array(5 * e * 4);
  Mu.forEach((e, n) => {
    ju[e].forEach((e, r) => {
      let [i, a, o] = Nu(e);
      t.set([i, a, o, 255], (n * 5 + r) * 4);
    });
  });
  let n = new xi(t, 5, e, j, g);
  return (
    (n.magFilter = n.minFilter = u),
    (n.generateMipmaps = !1),
    (n.needsUpdate = !0),
    n
  );
}
var Iu = 16,
  Lu = Math.PI * 2,
  Ru = (e, t) => e + Math.random() * (t - e),
  zu = (e) => Math.max(0, Math.min(1, e)),
  Bu = new W(),
  Vu = new W(),
  Hu = new It(),
  Uu = new W(0, 0, 1),
  Wu = { dx: -0.5, dy: -15 },
  Gu = class {
    kit;
    st = new Map();
    shards = new Map();
    dt = 0;
    constructor(e) {
      this.kit = e;
    }
    update(e, t, n) {
      ((this.dt = t), (this.kit.now = e));
      for (let e of this.st.values()) e.seen = !1;
      for (let e of n.live) {
        if (!i(e.kind, e.a.id)) continue;
        let t = this.st.get(e.id);
        (t ||
          this.st.set(
            e.id,
            (t = {
              fired: new Set(),
              acc: {},
              core: -1,
              coreLight: null,
              spin: 0,
              prisms: [],
              seen: !0,
            }),
          ),
          (t.seen = !0),
          this.play(e, t, n));
      }
      for (let [e, t] of this.st)
        t.seen || (this.release(t), this.st.delete(e));
      this.flyShards(e, n);
    }
    clear() {
      for (let e of this.st.values()) this.release(e);
      this.st.clear();
      for (let e of this.shards.values())
        this.kit.layer.pools.shard.release(e.idx);
      this.shards.clear();
    }
    release(e) {
      let t = this.kit.layer;
      (e.core >= 0 && t.pools.core.release(e.core), (e.core = -1));
      for (let n of e.prisms) n.idx >= 0 && t.pools.prism.release(n.idx);
      ((e.prisms = []), e.coreLight && (e.coreLight.life = 0));
    }
    once(e, t, n, r) {
      n && !e.fired.has(t) && (e.fired.add(t), r());
    }
    every(e, t, n, r) {
      for (e.acc[t] = (e.acc[t] ?? 0) + this.dt * n; e.acc[t] >= 1;)
        (--e.acc[t], r());
    }
    heart(e, t, n, r, i, a) {
      let o = this.kit.layer;
      if (t <= 0.05) {
        (e.core >= 0 && o.pools.core.release(e.core), (e.core = -1));
        return;
      }
      if ((e.core < 0 && (e.core = o.pools.core.alloc(n, 1)), e.core < 0))
        return;
      e.spin += this.dt * (2 + t * 7);
      let s = 1.2 + t * 2.6;
      (o.pools.core.setLook(e.core, n, 0.6 + t * 1.6),
        o.pools.core.set(
          e.core,
          Bu.set(r, i + 2.5, a),
          Hu.setFromAxisAngle(Uu, e.spin),
          Vu.set(s, s, s),
        ));
    }
    play(t, n, i) {
      let a = this.kit,
        o = t.kind === `hollowwarden`,
        s = o ? Q.hollow : Q.aether,
        c = t.a,
        l = t.t - t.windup,
        u = c.hold ?? 0,
        d = zu(t.t / t.windup),
        f = Math.hypot(i.me.x - t.ox, i.me.y - t.oy) < 13,
        p = t.monsterId ? i.body(t.monsterId) : null,
        m = (p?.x ?? t.ox) * Iu,
        h = (p?.y ?? t.oy) * Iu,
        g = t.look?.from ?? Wu,
        _ = g.dx * (t.flip ? -1 : 1),
        v = t.ox * Iu + _,
        y = t.oy * Iu + 1,
        b = -g.dy,
        x = Math.max(0.6, (c.r * 2 * Iu) / 11);
      switch (c.id) {
        case `crush`: {
          let e = t.geo.shapes[0];
          if (!e || e.t !== `cone`) return;
          let r = (e.x + (Math.cos(e.a) * 17) / Iu) * Iu,
            c = (e.y + (Math.sin(e.a) * 17 * 0.8) / Iu) * Iu;
          (this.once(n, `fists`, t.t > t.windup * 0.25, () => {
            (a.light(m - 9, h, 46, s, 0.8, 18, t.windup * 0.75, !0),
              a.light(m + 9, h, 46, s, 0.8, 18, t.windup * 0.75, !0));
          }),
            t.landed ||
              this.every(n, `motes`, 40, () =>
                a.spray(m + Ru(-12, 12), h + 1, Ru(30, 48), 1, {
                  ramp: s,
                  speed: [4, 14],
                  up: [8, 22],
                  life: [0.3, 0.5],
                  h0: 4,
                  h1: 2.5,
                  s0: 0.7,
                  I: 3,
                  shape: Z.spark,
                  stretch: 0.05,
                }),
              ),
            this.once(n, `slam`, t.landed, () => {
              (a.shock(r, c, 50, 3.4, 0.45),
                a.rocks(r, c, 14, e.a, 1.1),
                a.dust(r, c, 14, e.a, 1.3, [30, 90]),
                a.sparks(r, c, 3, 22, s, e.a, 1.1, [40, 160]),
                a.flare(r, c, 5, 10.8, 0.22, s, 3),
                a.ring(r, c, 1, 6, 44, 0.32, s, 0.7),
                a.light(r, c, 6, s, 2.2, 34, 0.45),
                o && a.smoke(r, c, 3, 10),
                f && (a.ca(0.6), i.shake(3)));
            }));
          return;
        }
        case `shardquake`:
          (this.once(n, `crackLight`, t.t > 0.1, () =>
            a.light(m, h, 3, s, 1.2, 26, t.windup + 0.3, !0),
          ),
            t.landed ||
              this.every(n, `cracks`, 60, () => {
                let e = Math.random() * Lu,
                  t = Ru(4, 30) * d;
                a.spray(
                  m + Math.cos(e) * t,
                  h + Math.sin(e) * t * r.fx,
                  0.5,
                  1,
                  {
                    ramp: s,
                    speed: [1, 5],
                    up: [14, 36],
                    life: [0.4, 0.8],
                    h0: 4,
                    h1: 2.5,
                    s0: 0.6,
                    I: [2, 4],
                    shape: Z.spark,
                    stretch: 0.06,
                  },
                  !1,
                );
              }),
            this.once(n, `stamp`, t.landed, () => {
              (a.shock(m, h, 68, 3.8, 0.5),
                a.dust(m, h, 26, void 0, Math.PI, [55, 110]),
                a.rocks(m, h, 10, void 0, Math.PI, [40, 100]),
                a.flare(m, h, 3, 15.6, 0.24, s, 3),
                a.ring(m, h, 1, 8, 60, 0.35, s, 0.8),
                a.light(m, h, 4, s, 2.4, 44, 0.5),
                o && a.smoke(m, h, 2, 14),
                f && (a.ca(0.8), i.shake(4)));
            }));
          return;
        case `lattice`:
        case `inverted`:
        case `routenorth`: {
          let r = t.geo.beams ?? [],
            c = t.landed ? +(l <= u + 0.3) : d;
          if ((this.heart(n, c, s, v, y, b), !t.landed)) {
            (this.once(n, `dim`, !0, () => {
              (f && a.dim(o ? 0.3 : 0.38, t.windup + u + 0.1),
                (n.coreLight = a.light(
                  v,
                  y + 3,
                  b,
                  s,
                  0.4,
                  22,
                  t.windup + u,
                  !0,
                )));
            }),
              n.coreLight &&
                ((n.coreLight.I = 0.3 + 0.7 * d),
                (n.coreLight.rad = 16 + 14 * d)),
              this.every(n, `gather`, 140, () => {
                let e = Math.random() * Lu,
                  t = Ru(28, 60),
                  n = Ru(0.3, 0.5),
                  r = v + Math.cos(e) * t,
                  i = y + Math.sin(e) * t * 0.8,
                  o = b + Ru(-10, 28);
                a.layer.particles.emit(
                  {
                    x: r,
                    y: i,
                    z: o,
                    vx: (v - r) / n,
                    vy: (y + 2 - i) / n,
                    vz: (b - o) / n,
                    life: n,
                    ramp: s,
                    h0: 3,
                    h1: 4,
                    s0: 0.6,
                    I: 3.5,
                    shape: Z.spark,
                    stretch: 0.06,
                  },
                  a.now,
                );
              }),
              this.every(n, `survey`, 9, () => {
                for (let e of r) {
                  let t = qu(e),
                    n = Math.hypot(t.x - Ku(e).x, t.y - Ku(e).y) * Iu,
                    r = Math.atan2(t.y - Ku(e).y, t.x - Ku(e).x);
                  a.layer.particles.emit(
                    {
                      x: Ku(e).x * Iu,
                      y: Ku(e).y * Iu,
                      z: 0.5,
                      vx: Math.cos(r) * 170,
                      vy: Math.sin(r) * 170,
                      life: n / 170,
                      ramp: s,
                      h0: 4,
                      h1: 3,
                      s0: 0.6,
                      I: 3,
                      shape: Z.spark,
                      stretch: 0.04,
                    },
                    a.now,
                  );
                }
              }));
            return;
          }
          if (
            (this.once(n, `fire`, !0, () => {
              (a.flare(v, y + 3, b, 18, 0.3, s, 3),
                a.ring(v, y + 3, b, 6, 70, 0.35, s, 1.5),
                a.light(v, y, b, s, 2.2, 70, 0.35),
                a.shock(t.ox * Iu, t.oy * Iu, 46, 2.4, 0.35),
                f && (a.ca(1.2), i.shake(3)));
              for (let e of r) {
                let n = Ku(e),
                  r = qu(e),
                  i = e.t === `cone`;
                a.beam({
                  sx: v,
                  sy: y,
                  sz: b,
                  ang: Math.atan2(r.y - n.y, r.x - n.x),
                  len: Math.hypot(r.x - n.x, r.y - n.y) * Iu,
                  ez: 0,
                  sweep: t.geo.turn ?? 0,
                  life: u,
                  grow: 0.09,
                  fade: 0.22,
                  ramp: s,
                  r: i ? 2.6 : x,
                  I: i || x > 2 ? 0.8 : 1,
                  ticks: !0,
                  coils: !0,
                  hollow: o,
                });
              }
            }),
            l <= u)
          ) {
            this.every(n, `flick`, 14, () =>
              a.glow(v, y + 3, b, 8, 6, 0.1, s, 1.1, 4, 3.5),
            );
            let i = u > 0 ? l / u : 1;
            for (let n of r) {
              let r = e(n, t.geo.turn ?? 0, i),
                c = qu(r),
                l = c.x * Iu,
                u = c.y * Iu,
                d = Math.atan2(c.y - Ku(r).y, c.x - Ku(r).x);
              (a.sparks(l, u, 1, 1.2, s, d + Math.PI, 1.2, [40, 140]),
                a.spray(l, u, 1, 0.5, {
                  ramp: s,
                  speed: [5, 20],
                  up: [10, 30],
                  life: [0.25, 0.45],
                  h0: 4,
                  h1: 3,
                  s0: [4, 7],
                  s1: 2,
                  I: 2.5,
                  shape: Z.glow,
                }));
              let f = Ru(0.15, 1);
              (a.spray(v + (l - v) * f, y + (u - y) * f, b * (1 - f), 0.6, {
                ramp: s,
                speed: [3, 12],
                up: [6, 22],
                life: [0.4, 0.8],
                h0: 4,
                h1: 2.5,
                s0: 0.5,
                I: 3,
                shape: Z.spark,
                stretch: 0.05,
              }),
                o && a.smoke(l, u, 2, 0.25));
            }
          }
          this.once(n, `vent`, l > u, () => {
            (a.spray(v, y + 2, b, 18, {
              ramp: Q.stone,
              speed: [6, 22],
              up: [24, 44],
              drag: 1.2,
              life: [0.9, 1.5],
              h0: 4,
              h1: 3,
              s0: [3, 5],
              s1: 13,
              shape: Z.smoke,
              add: !1,
              a: 0.45,
            }),
              a.flare(v, y + 3, b, 8.4, 0.2, s, 3));
          });
          return;
        }
        case `facetweb`: {
          let e = a.layer,
            r = t.geo.points ?? [],
            c = t.landed ? +(l <= u + 0.3) : d;
          (this.heart(n, c, s, v, y, b),
            this.once(n, `dim`, !0, () => {
              f && a.dim(0.25, t.windup + u);
            }),
            !n.prisms.length &&
              !n.fired.has(`prisms`) &&
              this.once(n, `prisms`, !0, () => {
                n.prisms = r.map((t) => ({
                  x: t.x * Iu,
                  y: t.y * Iu,
                  idx: e.pools.prism.alloc(s, 0.5),
                  light: null,
                  landed: !1,
                  glow: 0.5,
                }));
              }));
          let p = Math.min(0.5, t.windup * 0.45);
          for (let r of n.prisms) {
            let n = p - t.t,
              o = n > 0 ? 150 * (1 - (1 - n / p) ** 2) : 0;
            (n > 0
              ? a.spray(r.x, r.y, o + 7, 2, {
                  ramp: s,
                  speed: [1, 4],
                  up: [30, 60],
                  life: [0.15, 0.3],
                  h0: 4,
                  h1: 2.5,
                  s0: 0.6,
                  I: 3,
                  shape: Z.spark,
                  stretch: 0.03,
                })
              : r.landed ||
                ((r.landed = !0),
                a.shock(r.x, r.y, 26, 2.2, 0.3),
                a.flare(r.x, r.y, 3, 8.4, 0.18, s, 3),
                a.sparks(r.x, r.y, 2, 12, s),
                a.dust(r.x, r.y, 6, void 0, Math.PI, [20, 50]),
                a.rocks(r.x, r.y, 3, void 0, Math.PI, [20, 60]),
                (r.light = a.light(
                  r.x,
                  r.y,
                  8,
                  s,
                  0.9,
                  16,
                  Math.max(0.3, t.windup - p + u),
                  !0,
                )),
                f && i.shake(2)),
              r.idx >= 0 &&
                (e.pools.prism.setLook(r.idx, s, r.glow),
                e.pools.prism.set(
                  r.idx,
                  Bu.set(r.x, r.y, o),
                  Hu.setFromAxisAngle(Uu, a.now * 1.6 + r.x),
                  Vu.set(10, 10, 15),
                )));
          }
          if (
            (this.once(n, `links`, t.landed, () => {
              for (let e of t.geo.beams ?? []) {
                if (e.t !== `line`) continue;
                let n = Math.hypot(e.x0 - t.ox, e.y0 - t.oy) < 0.05,
                  r = n ? v : e.x0 * Iu,
                  i = n ? y : e.y0 * Iu,
                  c = e.x1 * Iu,
                  l = e.y1 * Iu;
                a.beam({
                  sx: r,
                  sy: i,
                  sz: n ? b : 8,
                  ang: Math.atan2(l - i, c - r),
                  len: Math.hypot(c - r, l - i),
                  ez: 8,
                  life: u,
                  grow: 0.08,
                  fade: 0.2,
                  ramp: s,
                  r: x * (n ? 0.86 : 0.8),
                  I: n ? 1 : 0.9,
                  ticks: !0,
                  coils: !0,
                  hollow: o,
                });
              }
              for (let e of n.prisms)
                (a.flare(e.x, e.y, 8, 9.6, 0.2, s, 3),
                  (e.glow = 2),
                  e.light && (e.light.I = 1.6));
              (a.flare(v, y + 3, b, 14.4, 0.22, s, 3),
                a.light(v, y, b, s, 2, 60, 0.3),
                f && (a.ca(0.7), i.shake(2)));
            }),
            t.landed && l <= u)
          ) {
            for (let e of n.prisms)
              a.sparks(e.x, e.y, 8, 0.6, s, void 0, Math.PI, [20, 70]);
            for (let e of t.geo.beams ?? []) {
              if (e.t !== `line`) continue;
              let t = Math.random();
              a.spray(
                e.x0 * Iu + (e.x1 - e.x0) * Iu * t,
                e.y0 * Iu + (e.y1 - e.y0) * Iu * t,
                8,
                0.7,
                {
                  ramp: s,
                  speed: [3, 12],
                  up: [6, 22],
                  life: [0.4, 0.7],
                  h0: 4,
                  h1: 2.5,
                  s0: 0.5,
                  I: 3,
                  shape: Z.spark,
                  stretch: 0.05,
                },
              );
            }
          }
          this.once(n, `shatter`, t.landed && l > u, () => {
            for (let t of n.prisms)
              (a.shatter(t.x, t.y, 7, s, 1.6),
                o && a.smoke(t.x, t.y, 4, 6),
                t.idx >= 0 && e.pools.prism.release(t.idx),
                t.light && (t.light.life = 0));
            ((n.prisms = []), f && (a.ca(0.8), i.shake(2)));
          });
          return;
        }
      }
    }
    flyShards(e, t) {
      let n = this.kit.layer;
      for (let e of this.shards.values()) e.seen = !1;
      for (let r of t.shots) {
        let a = t.live.find((e) => e.id === r.id)?.kind;
        if (!a || r.a.id !== `shardquake` || !i(a, r.a.id)) continue;
        let o = `${r.id}:${r.n}`,
          s = a === `hollowwarden` ? Q.hollow : Q.aether,
          c = r.x * Iu,
          l = r.y * Iu + 7,
          u = this.shards.get(o);
        (u ||
          ((u = {
            idx: n.pools.shard.alloc(s, 1.4),
            light: this.kit.light(c, l, 7, s, 0.9, 11, 30, !0),
            axis: new W(Ru(-1, 1), Ru(-1, 1), Ru(-1, 1)).normalize(),
            spin: Ru(7, 12) * (Math.random() < 0.5 ? -1 : 1),
            x: c,
            y: l,
            t0: e,
            ramp: s,
            seen: !0,
          }),
          this.shards.set(o, u)),
          (u.seen = !0),
          (u.x = c),
          (u.y = l),
          (u.light.x = c),
          (u.light.y = l),
          u.idx >= 0 &&
            n.pools.shard.set(
              u.idx,
              Bu.set(c, l, 7),
              Hu.setFromAxisAngle(u.axis, u.spin * (e - u.t0)),
              Vu.setScalar(3.6),
            ),
          this.kit.spray(c, l, 7, 0.9, {
            ramp: s,
            speed: [2, 10],
            up: [-4, 8],
            life: [0.2, 0.4],
            h0: 4,
            h1: 2.5,
            s0: 0.5,
            I: 2.5,
            shape: Z.spark,
            stretch: 0.04,
          }));
      }
      for (let [e, t] of this.shards)
        t.seen ||
          (this.kit.shatter(t.x, t.y, 7, t.ramp, 0.8),
          t.idx >= 0 && n.pools.shard.release(t.idx),
          (t.light.life = 0),
          this.shards.delete(e));
    }
  };
function Ku(e) {
  return e.t === `line`
    ? { x: e.x0, y: e.y0 }
    : e.t === `cone`
      ? { x: e.x, y: e.y }
      : { x: 0, y: 0 };
}
function qu(e) {
  return e.t === `line`
    ? { x: e.x1, y: e.y1 }
    : e.t === `cone`
      ? { x: e.x + Math.cos(e.a) * e.r, y: e.y + Math.sin(e.a) * e.r }
      : { x: 0, y: 0 };
}
var Ju = { fire: 0, plasma: 1, void: 2, corona: 3 },
  Yu = `
float h3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vnoise(vec3 x) {
  vec3 i = floor(x), f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h3(i), h3(i + vec3(1, 0, 0)), f.x), mix(h3(i + vec3(0, 1, 0)), h3(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(h3(i + vec3(0, 0, 1)), h3(i + vec3(1, 0, 1)), f.x), mix(h3(i + vec3(0, 1, 1)), h3(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
float fbm(vec3 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p = p * 2.03 + vec3(1.7, 9.2, 3.1); a *= 0.5; } return s; }
`,
  Xu = `
attribute vec4 aOrb;   // kind, ramp row, intensity, seed
varying vec3 vN; varying vec3 vObj; varying vec4 vOrb;
void main() {
  mat4 m = modelMatrix * instanceMatrix;
  vec4 wp = m * vec4(position, 1.0);
  vN = normalize(inverse(transpose(mat3(m))) * normal);
  vObj = position;
  vOrb = aOrb;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  Zu = `
${Cu}
${Yu}
${wu}
uniform float uTime;
varying vec3 vN; varying vec3 vObj; varying vec4 vOrb;
void main() {
  vec3 V = FX_VIEW;
  vec3 N = normalize(vN);
  float ndv = dot(N, V);
  if (ndv < 0.0) discard;            // the near half only, whichever way the winding falls
  int kind = int(vOrb.x + 0.5);
  float row = vOrb.y, I = vOrb.z, seed = vOrb.w * 17.0;
  vec3 col; float a;
  if (kind == 0) {
    float n = fbm(vObj * 2.4 + vec3(uTime * 5.5, 0.0, -uTime * 1.5) + seed);
    float heat = 0.7 + pow(ndv, 1.4) * 2.6 + (n - 0.5) * 2.4;
    a = smoothstep(0.02, 0.45, ndv + (n - 0.5) * 0.35);
    col = rampAt(row, heat, 0.0) * I * (0.6 + 1.3 * smoothstep(3.2, 4.0, heat));
    gl_FragColor = vec4(col * a, a * 0.65);
  } else if (kind == 1) {
    float n = vnoise(vObj * 4.5 + vec3(uTime * 9.0, uTime * 5.0, seed));
    float fil = 1.0 - smoothstep(0.0, 0.07, abs(n - 0.5));
    float heat = 1.8 + ndv * 0.8 + fil * 0.4;
    a = smoothstep(0.0, 0.5, ndv) * (0.55 + 0.45 * ndv) + fil * 0.6 * smoothstep(0.0, 0.3, ndv);
    col = mix(rampAt(row, heat, 0.0), vec3(1.0), pow(ndv, 3.0) * 0.75 + fil * 0.5) * I * (1.0 + 1.2 * fil + 1.2 * pow(ndv, 4.0));
    gl_FragColor = vec4(col * a, a * 0.5);
  } else if (kind == 2) {
    float t = uTime * 2.2;
    vec3 q = vec3(vObj.x * cos(t) - vObj.y * sin(t), vObj.x * sin(t) + vObj.y * cos(t), vObj.z);
    float n = fbm(q * 3.0 + seed);
    float body = 0.93 * smoothstep(0.0, 0.3, ndv);
    float rim = pow(1.0 - ndv, 2.4);
    float band = smoothstep(0.6, 0.72, n) * smoothstep(0.15, 0.6, ndv);
    vec3 dark = rampAt(row, 0.4 + n * 0.5, 0.0) * 0.35;
    col = dark * body + rampAt(row, 3.3 + rim * 0.7, 0.0) * I * rim * 2.2 + rampAt(row, 3.0, 0.0) * I * band * 0.9;
    gl_FragColor = vec4(col, body * (1.0 - rim * 0.8));
  } else {
    float n = fbm(vObj * 2.0 + vec3(uTime * 4.0, 0.0, -uTime * 2.0) + seed);
    float rim = pow(1.0 - ndv, 1.4);
    float heat = 1.4 + rim * 2.0 + (n - 0.5) * 2.2;
    a = rim * smoothstep(0.0, 0.1, ndv) * (0.6 + n);
    col = rampAt(row, heat, 0.0) * I * (0.8 + 1.4 * smoothstep(3.2, 4.0, heat));
    gl_FragColor = vec4(col * a, 0.0);
  }
}
`,
  Qu = new q(),
  $u = new W(),
  ed = new It(),
  td = new W(),
  nd = new W(),
  rd = new W(1, 0, 0),
  id = new q().makeScale(0, 0, 0),
  ad = class {
    cap;
    mesh;
    look;
    free;
    dirty = !1;
    constructor(e, t = 96, n = {}) {
      this.cap = t;
      let r = new pa(1, 3);
      ((this.look = new Ti(new Float32Array(t * 4), 4)),
        this.look.setUsage(Xe),
        r.setAttribute(`aOrb`, this.look));
      let i = new Ea({
        vertexShader: Xu,
        fragmentShader: Zu,
        defines: { ...n },
        uniforms: { uTime: e.uTime, uRamp: e.uRamp, uView: e.uView },
        transparent: !0,
        depthTest: !0,
        depthWrite: !1,
        side: 2,
        blending: 5,
        blendEquation: 100,
        blendSrc: 201,
        blendDst: 205,
        blendSrcAlpha: 201,
        blendDstAlpha: 205,
      });
      ((this.mesh = new Ni(r, i, t)),
        this.mesh.instanceMatrix.setUsage(Xe),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = 8));
      for (let e = 0; e < t; e++) this.mesh.setMatrixAt(e, id);
      this.free = Array.from({ length: t }, (e, n) => t - 1 - n);
    }
    alloc(e, t, n = 1) {
      let r = this.free.pop();
      return r === void 0
        ? -1
        : (this.look.setXYZW(r, e, t, n, Math.random()), (this.dirty = !0), r);
    }
    set(e, t, n, r, i, a = 1, o = 0, s = 0, c = 1, l) {
      e < 0 ||
        (nd.set(a, o, s),
        nd.lengthSq() < 1e-6 && nd.set(1, 0, 0),
        ed.setFromUnitVectors(rd, nd.normalize()),
        this.mesh.setMatrixAt(
          e,
          Qu.compose($u.set(t, n, r), ed, td.set(i * c, i, i)),
        ),
        l !== void 0 && this.look.setZ(e, l),
        (this.dirty = !0));
    }
    release(e) {
      e < 0 ||
        (this.mesh.setMatrixAt(e, id), this.free.push(e), (this.dirty = !0));
    }
    get used() {
      return this.cap - this.free.length;
    }
    flush() {
      this.dirty &&=
        ((this.mesh.instanceMatrix.needsUpdate = !0),
        (this.look.needsUpdate = !0),
        !1);
    }
    clear() {
      for (let e = 0; e < this.cap; e++) this.mesh.setMatrixAt(e, id);
      ((this.free = Array.from(
        { length: this.cap },
        (e, t) => this.cap - 1 - t,
      )),
        (this.dirty = !0));
    }
  },
  od = 1500,
  sd = new W(0, Math.SQRT1_2, Math.SQRT1_2),
  cd = sd.clone(),
  ld = class extends So {
    camX = 0;
    camY = 0;
    W = 1;
    H = 1;
    k0 = 0;
    constructor() {
      (super(), (this.matrixAutoUpdate = !1));
    }
    set(e, t, n, r) {
      ((this.camX = e), (this.camY = t), (this.W = n), (this.H = r));
      let i = od;
      ((this.k0 = t + r / 2),
        this.projectionMatrix.set(
          2 / n,
          0,
          0,
          -(2 * e) / n - 1,
          0,
          -2 / r,
          2 / r,
          1 + (2 * t) / r,
          0,
          -1 / i,
          -1 / i,
          this.k0 / i,
          0,
          0,
          0,
          1,
        ),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
    }
    spriteDepth(e, t) {
      return (-(2 * e - t - this.k0) / od) * 0.5 + 0.5;
    }
  },
  ud = `
attribute vec4 aLook;   // ramp row, intensity, side (-1..1), core weight
varying vec4 vLook;
void main() {
  vLook = aLook;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
`,
  dd = `
${Cu}
varying vec4 vLook;
void main() {
  float s = vLook.z;
  float glow = exp(-s * s * 3.2) * (1.0 - s * s);
  float core = exp(-s * s * 34.0);
  vec3 c = rampAt(vLook.x, 1.9 + 0.8 * glow, 0.0) * glow * 0.9 + mix(rampAt(vLook.x, 4.0, 0.0), vec3(1.0), 0.7) * core * vLook.w * 2.4;
  // it covers a little of what's behind, so its colour reads true on any ground
  float al = clamp((glow * 0.3 + core * 0.5) * min(vLook.y, 1.5) / 1.5, 0.0, 0.85);
  gl_FragColor = vec4(c * vLook.y, al);
}
`,
  fd = 0.5,
  pd = class {
    capV;
    mesh;
    pos;
    look;
    idx;
    geo;
    nv = 0;
    ni = 0;
    constructor(e, t = 16384) {
      ((this.capV = t),
        (this.pos = new Float32Array(t * 3)),
        (this.look = new Float32Array(t * 4)),
        (this.idx = new Uint16Array(t * 3)));
      let n = new Pr(),
        r = new yr(this.pos, 3).setUsage(Xe),
        i = new yr(this.look, 4).setUsage(Xe),
        a = new yr(this.idx, 1).setUsage(Xe);
      (n.setAttribute(`position`, r),
        n.setAttribute(`aLook`, i),
        n.setIndex(a),
        n.setDrawRange(0, 0),
        (this.geo = n));
      let o = new Ea({
        vertexShader: ud,
        fragmentShader: dd,
        uniforms: { uRamp: e.uRamp },
        transparent: !0,
        depthTest: !0,
        depthWrite: !1,
        side: 2,
        blending: 5,
        blendEquation: 100,
        blendSrc: 201,
        blendDst: 205,
        blendSrcAlpha: 201,
        blendDstAlpha: 205,
      });
      ((this.mesh = new si(n, o)),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = 12));
    }
    get count() {
      return this.ni;
    }
    reset() {
      ((this.nv = 0), (this.ni = 0));
    }
    strip(e, t, n, r, i = 1, a = 0.25) {
      let o = e.length;
      if (
        o < 2 ||
        r <= 0.001 ||
        this.nv + o * 2 > this.capV ||
        this.ni + (o - 1) * 6 > this.idx.length
      )
        return;
      let s = this.nv,
        c = cd.z / cd.y;
      for (let s = 0; s < o; s++) {
        let l = e[Math.max(0, s - 1)],
          u = e[Math.min(o - 1, s + 1)],
          d = u[0] - l[0],
          f = (u[1] - l[1]) * c - (u[2] - l[2]),
          p = Math.hypot(d, f) || 1;
        ((d /= p), (f /= p));
        let m = s / (o - 1),
          h = t * (a + (1 - a) * Math.min(1, Math.sin(Math.PI * m) * 2.2)),
          g = -f * h,
          _ = d * h,
          v = e[s];
        for (let e = 0; e < 2; e++) {
          let t = e === 0 ? -1 : 1,
            a = (this.nv + e) * 3;
          ((this.pos[a] = v[0] + g * t),
            (this.pos[a + 1] = v[1]),
            (this.pos[a + 2] = v[2] - _ * t),
            c !== 1 &&
              this.pos[a + 2] < fd &&
              ((this.pos[a + 1] += (fd - this.pos[a + 2]) / c),
              (this.pos[a + 2] = fd)));
          let o = (this.nv + e) * 4;
          ((this.look[o] = n),
            (this.look[o + 1] = r),
            (this.look[o + 2] = t),
            (this.look[o + 3] = i));
        }
        this.nv += 2;
      }
      for (let e = 0; e < o - 1; e++) {
        let t = s + e * 2;
        (this.idx.set([t, t + 1, t + 2, t + 1, t + 3, t + 2], this.ni),
          (this.ni += 6));
      }
    }
    flush() {
      let e = this.geo,
        t = e.getAttribute(`position`),
        n = e.getAttribute(`aLook`),
        r = e.getIndex();
      for (let [e, i, a] of [
        [t, 3, this.nv],
        [n, 4, this.nv],
        [r, 1, this.ni],
      ])
        (e.clearUpdateRanges(),
          a > 0 && (e.addUpdateRange(0, a * i), (e.needsUpdate = !0)));
      e.setDrawRange(0, this.ni);
    }
  };
function md(e) {
  let t = (e * 2654435761) >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
var hd = new W(),
  gd = new W(),
  _d = new W();
function vd(e, t, n, r, i) {
  hd.set(t[0] - e[0], t[1] - e[1], t[2] - e[2]);
  let a = hd.length() || 1;
  (hd.divideScalar(a),
    gd.crossVectors(hd, cd),
    gd.lengthSq() < 1e-4 && gd.set(1, 0, 0),
    gd.normalize(),
    _d.crossVectors(hd, gd).normalize());
  let o = [e, t],
    s = a * n;
  for (let e = 0; e < r; e++) {
    let e = [o[0]];
    for (let t = 0; t < o.length - 1; t++) {
      let n = o[t],
        r = o[t + 1],
        a = (i() - 0.5) * 2 * s,
        c = (i() - 0.5) * 2 * s * 0.5;
      e.push(
        [
          (n[0] + r[0]) / 2 + gd.x * a + _d.x * c,
          (n[1] + r[1]) / 2 + gd.y * a + _d.y * c,
          Math.max(0, (n[2] + r[2]) / 2 + gd.z * a + _d.z * c),
        ],
        r,
      );
    }
    ((o = e), (s *= 0.52));
  }
  return o;
}
function yd(e, t, n, r, i, a, o) {
  (hd.set(t[0] - e[0], t[1] - e[1], t[2] - e[2]),
    hd.normalize(),
    gd.crossVectors(hd, cd),
    gd.lengthSq() < 1e-4 && gd.set(1, 0, 0),
    gd.normalize());
  let s = [];
  for (let c = 0; c <= n; c++) {
    let l = c / n,
      u = Math.sin(Math.PI * l),
      d = r * u + i * u * Math.sin(l * a * Math.PI * 2 + o);
    s.push([
      e[0] + (t[0] - e[0]) * l + gd.x * d,
      e[1] + (t[1] - e[1]) * l + gd.y * d,
      Math.max(0, e[2] + (t[2] - e[2]) * l + gd.z * d),
    ]);
  }
  return s;
}
var bd = { ring: 0, glow: 1, scorch: 2, frost: 3, swirl: 4 },
  xd = `${xu}
${wu}
in vec3 position;
in vec4 aP; in vec4 aR; in vec4 aL; in vec4 aE;
uniform mat4 projectionMatrix;
uniform float uTime;
out vec2 vQ; out float vF; out float vA; out float vSeed; out float vAs;
flat out int vKind; out float vRow; out float vI; out float vSpin;
void main() {
  float age = uTime - aP.w;
  float life = aR.z;
  if (age < 0.0 || age >= life) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  float f = age / life;
  float e = aE.x < 0.5 ? f : aE.x < 1.5 ? 1.0 - (1.0 - f) * (1.0 - f) : 1.0 - pow(1.0 - f, 4.0);
  float r = mix(aR.x, aR.y, e);
  vec2 q = position.xy;
  gl_Position = projectionMatrix * vec4(aP.x + q.x * r, aP.y + q.y * r * FX_SQUASH, aP.z, 1.0);
  float a = aE.y > 0.0 ? clamp(age / aE.y, 0.0, 1.0) : 1.0;
  a *= 1.0 - smoothstep(1.0 - max(aE.z, 0.001), 1.0, f);
  float sp = aE.w * age * 6.2831853;
  vQ = vec2(q.x * cos(sp) - q.y * sin(sp), q.x * sin(sp) + q.y * cos(sp));
  vF = f; vA = a; vSeed = aL.w; vAs = aL.z;
  vKind = int(aR.w + 0.5); vRow = aL.x; vI = aL.y; vSpin = aE.w;
}
`,
  Sd = `${xu}
${Cu}
uniform float uTime;
in vec2 vQ; in float vF; in float vA; in float vSeed; in float vAs;
flat in int vKind; in float vRow; in float vI; in float vSpin;
out vec4 o;
float h2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n2(vec2 x) { vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
float fbm2(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * n2(p); p = p * 2.07 + 3.1; a *= 0.5; } return s; }
void main() {
  float r = length(vQ);
  if (r > 1.0) discard;
  vec2 sq = vQ + vSeed * 13.0;
  vec3 col = vec3(0.0); float al = 0.0;
  if (vKind == 0) {
    float ring = exp(-pow((r - 0.9) / 0.055, 2.0));
    float fill = 0.16 * smoothstep(0.92, 0.35, r) * smoothstep(0.0, 0.9, r);
    float n = fbm2(sq * 5.0);
    col = rampAt(vRow, 1.8 + 1.0 * ring, 0.0) * (ring * (0.7 + 0.6 * n) + fill) * vI;
    al = ring * 0.4;
  } else if (vKind == 1) {
    float g = exp(-r * r * 3.5) * (1.0 - r);
    col = rampAt(vRow, 2.4 + 1.6 * exp(-r * r * 8.0), 0.0) * g * vI;
  } else if (vKind == 2) {
    float n = fbm2(sq * 3.0);
    float edge = r + (n - 0.5) * 0.4;
    al = smoothstep(1.0, 0.5, edge) * 0.72;
    float cr = smoothstep(0.58, 0.72, fbm2(sq * 7.0 + 5.0)) * smoothstep(0.95, 0.25, edge);
    float heat = (1.0 - vF) * (1.0 - vF) * cr;
    col = vec3(0.035, 0.028, 0.03) * al + rampAt(vRow, 2.0 + heat * 2.0, 0.0) * heat * vI * 2.2;
  } else if (vKind == 3) {
    // frost: the ground whitens in patches, with glints
    float n = fbm2(sq * 4.0);
    float edge = r + (n - 0.5) * 0.45;
    float body = smoothstep(1.0, 0.6, edge);
    float hf = fbm2(sq * 16.0 + 7.0);
    vec2 cell = floor(vQ * 22.0);
    float tw = step(0.97, h2(cell + vSeed)) * (0.5 + 0.5 * sin(uTime * 9.0 + h2(cell) * 40.0));
    al = body * (0.3 + 0.3 * smoothstep(0.35, 0.7, hf));
    col = rampAt(vRow, 3.5 + 0.5 * hf, 0.0) * al * 0.85 + rampAt(vRow, 4.0, 0.0) * tw * body * 1.2 * vI;
  } else {
    float th = atan(vQ.y, vQ.x);
    float arms = 0.5 + 0.5 * sin(th * 3.0 + log(r + 0.04) * 6.5 - uTime * vSpin * 2.0);
    float n = fbm2(sq * 4.0 + uTime * 0.5);
    arms = smoothstep(0.45, 1.0, arms * (0.7 + 0.6 * n)) * smoothstep(1.0, 0.45, r) * smoothstep(0.08, 0.3, r);
    float hole = smoothstep(0.42, 0.05, r);
    al = hole * 0.85 + arms * 0.25;
    col = rampAt(vRow, 2.2 + arms * 1.8, 0.0) * arms * vI + rampAt(vRow, 0.3, 0.0) * hole * 0.6;
  }
  o = vec4(col * vA, al * vA * vAs);
}
`,
  Cd = class {
    cap;
    mesh;
    arr;
    attrs;
    geo;
    head = 0;
    wrapped = !1;
    maxEnd = 0;
    spans = [];
    constructor(e, t = 256, n = {}) {
      this.cap = t;
      let r = new Fo();
      (r.setAttribute(
        `position`,
        new yr(new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]), 3),
      ),
        r.setIndex([0, 1, 2, 0, 2, 3]));
      let i = [`aP`, `aR`, `aL`, `aE`];
      ((this.arr = i.map(() => new Float32Array(t * 4))),
        (this.attrs = i.map((e, t) => {
          let n = new Ti(this.arr[t], 4);
          return (n.setUsage(Xe), r.setAttribute(e, n), n);
        })),
        (r.instanceCount = 0),
        (this.geo = r));
      let a = new Da({
        glslVersion: Ze,
        vertexShader: xd,
        fragmentShader: Sd,
        defines: { ...n },
        uniforms: { uTime: e.uTime, uRamp: e.uRamp, uSquash: e.uSquash },
        transparent: !0,
        depthTest: !0,
        depthWrite: !1,
        side: 2,
        blending: 5,
        blendEquation: 100,
        blendSrc: 201,
        blendDst: 205,
        blendSrcAlpha: 201,
        blendDstAlpha: 205,
      });
      ((this.mesh = new si(r, a)),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = 1));
    }
    add(e, t) {
      t >= this.maxEnd &&
        !this.spans.length &&
        ((this.head = 0), (this.wrapped = !1));
      let n = this.head;
      ((this.head = (this.head + 1) % this.cap),
        this.head === 0 && (this.wrapped = !0));
      let r = t + (e.delay ?? 0);
      this.maxEnd = Math.max(this.maxEnd, r + e.life);
      let i = n * 4,
        [a, o, s, c] = this.arr;
      (a.set([e.x, e.y, 0.25, r], i),
        o.set([e.r0, e.r1 ?? e.r0, e.life, e.kind], i),
        s.set([e.ramp, e.I ?? 1, e.a ?? 1, Math.random()], i),
        c.set([e.ease ?? 1, e.fadeIn ?? 0, e.fadeOut ?? 0.4, e.spin ?? 0], i));
      let l = this.spans[this.spans.length - 1];
      l && l[0] + l[1] === n ? l[1]++ : this.spans.push([n, 1]);
    }
    get busyUntil() {
      return this.maxEnd;
    }
    flush(e) {
      if (
        (e >= this.maxEnd &&
          !this.spans.length &&
          ((this.head = 0), (this.wrapped = !1)),
        (this.geo.instanceCount = this.wrapped ? this.cap : this.head),
        this.spans.length)
      ) {
        for (let e of this.attrs) {
          e.clearUpdateRanges();
          for (let [t, n] of this.spans) e.addUpdateRange(t * 4, n * 4);
          e.needsUpdate = !0;
        }
        this.spans = [];
      }
    }
    clear() {
      for (let e of this.arr) e.fill(0);
      for (let e of this.attrs) (e.clearUpdateRanges(), (e.needsUpdate = !0));
      ((this.spans = []),
        (this.head = 0),
        (this.wrapped = !1),
        (this.maxEnd = 0));
    }
  },
  wd = 16,
  Td = 0.6 * wd,
  Ed = 0.4 * wd,
  Dd = Math.PI * 2,
  Od = 0.35,
  $ = (e, t) => e + Math.random() * (t - e),
  kd = (e) => Math.max(0, Math.min(1, e)),
  Ad = (e, t, n) => {
    let r = kd((n - e) / (t - e));
    return r * r * (3 - 2 * r);
  },
  jd = new W(),
  Md = new W(),
  Nd = new It(),
  Pd = new It(),
  Fd = new W(1, 0, 0),
  Id = new W(0, 0, 1),
  Ld = {
    pyro: Q.ember,
    cryo: Q.rime,
    storm: Q.storm,
    void: Q.void,
    marksman: Q.blight,
    paladin: Q.gilt,
    scout: Q.rime,
  },
  Rd = (e) => Ld[e] ?? Q.aether,
  zd = (e, t, n) => [e * wd, t * wd + n, n],
  Bd = class {
    kit;
    bolts = new Map();
    rifts = new Map();
    meteors = new Map();
    lightning = [];
    tendrils = [];
    spikes = [];
    hail = [];
    emitters = [];
    timers = [];
    dt = 0;
    me = { x: 0, y: 0 };
    constructor(e) {
      ((this.kit = e), (e.lightStep[Q.storm] = 2));
    }
    get L() {
      return this.kit.layer;
    }
    get now() {
      return this.kit.now;
    }
    emit(e) {
      this.L.particles.emit(e, this.kit.now);
    }
    near(e, t, n) {
      return n || Math.hypot(this.me.x - e / wd, this.me.y - t / wd) < 10;
    }
    later(e, t) {
      this.timers.push({ at: this.now + e, fn: t });
    }
    emitter(e, t, n, r = 0) {
      this.emitters.push({
        t0: this.now + r,
        t1: this.now + r + e,
        rate: t,
        acc: 0,
        fn: n,
      });
    }
    every(e, t, n, r) {
      for (
        e[t] =
          (e[t] ?? Math.random()) +
          this.dt * n * this.kit.density * this.L.settings.density;
        e[t] >= 1;
      )
        (--e[t], r());
    }
    cast(e, t, r, i, o, s, c, l) {
      if ((n(e.id) || a(e.id)) && e.kind !== `nova` && e.kind !== `strike`)
        return;
      let u = Rd(t),
        d = zd(r, i, Td);
      switch ((this.castFlash(u, d), e.kind)) {
        case `nova`: {
          let n = (e.radius ?? 3) * wd;
          t === `cryo`
            ? this.glacialRing(r * wd, (i + 0.6) * wd, n, l)
            : this.flameNova(u, r * wd, (i + 0.6) * wd, n, l);
          break;
        }
        case `strike`: {
          let n = (e.radius ?? 2) * wd,
            r = e.delay ?? 0.6;
          e.id === `thunder` || t === `storm`
            ? this.gather(o * wd, s * wd, n, r, l)
            : e.id === `judgement`
              ? this.gather(o * wd, s * wd, n, r, l, Q.gilt)
              : this.meteorCall(o * wd, s * wd, n, r);
          break;
        }
        case `chain`:
          this.chain(u, [d, ...c.map((e) => zd(e.x, e.y, Ed))], l);
          break;
        case `drain`:
          this.drain(zd(o, s, Ed), d, l);
      }
    }
    land(e, t, n, r, i) {
      let a = (e.radius ?? 2) * wd;
      e.id === `thunder` || t === `storm`
        ? this.thunder(n * wd, r * wd, a, i)
        : e.id === `judgement`
          ? this.thunder(n * wd, r * wd, a, i, Q.gilt)
          : this.meteorImpact(n * wd, r * wd, a, i);
    }
    impact(e, t, n, i = !1) {
      let [a, o, s] = zd(e, t, Td),
        c = i ? 1.8 : 1,
        l = this.kit;
      switch (n) {
        case `pyro`:
          (l.flare(a, o, s, 10 * c, 0.18, Q.ember, 4),
            l.spray(a, o, s, 26 * c, {
              ramp: Q.ember,
              speed: [20, 85 * c],
              up: [-20, 50],
              drag: 3.5,
              life: [0.25, 0.5],
              h0: 3.4,
              h1: 0.8,
              s0: [2.5, 4 * c],
              s1: 1,
              I: 1.3,
              add: Od,
            }),
            l.sparks(a, o, s, 12 * c, Q.ember, void 0, Math.PI, [40, 130 * c]),
            l.spray(a, o, s, 6 * c, {
              ramp: Q.ash,
              speed: [5, 20],
              up: [10, 30],
              drag: 1.5,
              life: [0.6, 1],
              h0: 1.3,
              h1: 0.3,
              s0: [3, 5],
              s1: 10,
              shape: Z.smoke,
              add: !1,
              a: 0.4,
            }),
            l.ring(a, o, s, 2, 14 * c, 0.25, Q.ember, 2.2),
            l.light(a, o, s, Q.ember, 2.2 * c, 30 * c, 0.4),
            l.shock(a, o, 20 * c, 1.6 * c, 0.3, s),
            l.decal({
              x: a,
              y: o,
              r0: 6 * c,
              life: 2.5,
              kind: bd.scorch,
              ramp: Q.ember,
              I: 1,
              fadeIn: 0.05,
            }),
            i &&
              (l.decal({
                x: a,
                y: o,
                r0: 3,
                r1: 1.6 * wd,
                life: 0.35,
                kind: bd.ring,
                ramp: Q.ember,
                I: 2.6,
                ease: 2,
              }),
              l.radial(a, o, 2, 30, {
                ramp: Q.ember,
                speed: [1.6 * wd * 2.6, 1.6 * wd * 3],
                drag: 3,
                up: [5, 25],
                life: [0.35, 0.5],
                h0: 3.2,
                h1: 0.7,
                s0: [2.5, 4],
                s1: 4,
                I: 1.2,
                add: Od,
              })));
          break;
        case `cryo`:
          (l.shatter(a, o, s, Q.rime, 0.9 * c),
            l.spray(a, o, s, 8 * c, {
              ramp: Q.rime,
              speed: [8, 30],
              up: [0, 15],
              drag: 2,
              life: [0.5, 0.9],
              h0: 3.6,
              h1: 2.8,
              s0: [2, 3],
              s1: 8,
              shape: Z.smoke,
              add: !1,
              a: 0.3,
            }),
            l.decal({
              x: a,
              y: o,
              r0: 6 * c,
              r1: 8 * c,
              life: 2.5,
              kind: bd.frost,
              ramp: Q.rime,
              I: 1,
              fadeIn: 0.05,
            }));
          break;
        case `storm`:
          (l.flare(a, o, s, 8 * c, 0.15, Q.storm, 4),
            l.sparks(
              a,
              o,
              s,
              18 * c,
              Q.storm,
              void 0,
              Math.PI,
              [60, 200],
              [3, 6],
            ),
            l.ring(a, o, s, 2, 11 * c, 0.2, Q.storm, 2.2),
            l.light(a, o, s, Q.storm, 2 * c, 26 * c, 0.3));
          for (let e = 0; e < 4 * c; e++) {
            let e = Math.random() * Dd,
              t = $(6, 13);
            this.bolt(
              [a, o, s],
              [a + Math.cos(e) * t, o + Math.sin(e) * t * r.fx, 0],
              {
                life: 0.14,
                w: 0.9,
                I: 2.2,
                rough: 0.25,
                depth: 3,
                branches: 0,
                delay: $(0, 0.05),
              },
            );
          }
          l.decal({
            x: a,
            y: o,
            r0: 4 * c,
            life: 1.5,
            kind: bd.scorch,
            ramp: Q.storm,
            I: 0.8,
          });
          break;
        default: {
          let e = Q.void;
          (l.orbit(a, o, 20 * c, {
            ramp: e,
            r: [7, 13 * c],
            w: [7, 10],
            k: 6,
            z: [s - 3, s + 3],
            life: [0.18, 0.24],
            s0: [1, 1.5],
            s1: 0.4,
            h0: 4,
            h1: 3,
            I: [2, 3],
            shape: Z.spark,
            stretch: 0.015,
          }),
            this.L.vortex(a, o, 18 * c, 0.6, 0.4, 0.35, this.now, !1, s),
            this.later(0.16, () => {
              (l.flare(a, o, s, 9 * c, 0.2, e, 3.5),
                l.ring(a, o, s, 2, 13 * c, 0.25, e, 2),
                l.sparks(
                  a,
                  o,
                  s,
                  12 * c,
                  e,
                  void 0,
                  Math.PI,
                  [40, 120],
                  [2, 4],
                ),
                l.spray(a, o, s, 7 * c, {
                  ramp: e,
                  speed: [10, 35],
                  up: [5, 20],
                  drag: 2,
                  life: [0.5, 0.8],
                  h0: 0.6,
                  h1: 0.1,
                  s0: [3, 4],
                  s1: 9,
                  shape: Z.smoke,
                  add: !1,
                  a: 0.6,
                }),
                l.light(a, o, s, e, 1.8 * c, 24 * c, 0.4));
            }),
            l.decal({
              x: a,
              y: o,
              r0: 4,
              r1: 8 * c,
              life: 0.9,
              kind: bd.swirl,
              ramp: e,
              I: 1.2,
              spin: 1,
              fadeOut: 0.5,
            }));
        }
      }
    }
    arcs(e, t) {
      this.chain(
        Rd(e),
        t.map((e) => zd(e.x, e.y, Ed)),
        !1,
      );
    }
    blink(e, t, n, r, i) {
      let a = this.kit,
        o = Rd(e),
        s = [t * wd, n * wd, 10],
        c = [r * wd, i * wd, 10];
      (a.orbit(s[0], s[1], 18, {
        ramp: o,
        r: [8, 15],
        w: [6, 9],
        k: 7,
        z: [2, 20],
        life: [0.18, 0.26],
        s0: [1, 1.6],
        s1: 0.4,
        h0: 4,
        h1: 3,
        I: [2, 3],
        shape: Z.spark,
        stretch: 0.02,
      }),
        a.flare(s[0], s[1], s[2], 7, 0.18, o, 3),
        a.spray(s[0], s[1], 8, 8, {
          ramp: o,
          speed: [5, 18],
          up: [5, 15],
          drag: 2,
          life: [0.4, 0.7],
          h0: 0.8,
          h1: 0.2,
          s0: [4, 6],
          s1: 9,
          shape: Z.smoke,
          add: !1,
          a: 0.35,
          jitter: 4,
        }),
        e === `storm`
          ? this.bolt(s, c, {
              life: 0.22,
              w: 1.5,
              I: 3,
              rough: 0.12,
              depth: 5,
              branches: 1,
            })
          : this.tendrils.push({
              a: s,
              b: c,
              t0: this.now,
              life: 0.3,
              fadeIn: 0.02,
              fadeOut: 0.25,
              strands: [
                {
                  bow: 0,
                  amp: 1.2,
                  waves: 2,
                  speed: 20,
                  w: 2.6,
                  I: 2.6,
                  ramp: o,
                  core: 1,
                },
              ],
            }));
      for (let e = 0; e < 14; e++) {
        let t = (e + Math.random()) / 14;
        this.emit({
          x: s[0] + (c[0] - s[0]) * t,
          y: s[1] + (c[1] - s[1]) * t,
          z: 10 + $(-4, 4),
          vx: $(-8, 8),
          vy: $(-8, 8),
          vz: $(-5, 10),
          life: $(0.25, 0.5),
          s0: $(1, 1.8),
          s1: 0.3,
          ramp: o,
          h0: 4,
          h1: 2.5,
          I: 2,
        });
      }
      (a.flare(c[0], c[1], c[2], 9, 0.2, o, 3.5),
        a.decal({
          x: c[0],
          y: c[1],
          r0: 3,
          r1: 16,
          life: 0.32,
          kind: bd.ring,
          ramp: o,
          I: 2.4,
          ease: 2,
        }),
        a.sparks(c[0], c[1], c[2], 12, o, void 0, Math.PI, [40, 110]),
        a.light(c[0], c[1], c[2], o, 2, 28, 0.35),
        e === `pyro` &&
          a.spray(c[0], c[1], 4, 14, {
            ramp: o,
            speed: [15, 45],
            up: [10, 40],
            drag: 3,
            life: [0.25, 0.45],
            h0: 3.3,
            h1: 0.8,
            s0: [2, 3],
            s1: 0.8,
            I: 1.3,
            add: Od,
          }),
        e === `cryo` &&
          a.decal({
            x: c[0],
            y: c[1],
            r0: 9,
            r1: 11,
            life: 2,
            kind: bd.frost,
            ramp: o,
            I: 1,
          }),
        e === `void` &&
          (this.L.vortex(s[0], s[1], 16, 0.8, 0.3, 0.3, this.now, !1, s[2]),
          a.spray(c[0], c[1], 8, 6, {
            ramp: o,
            speed: [8, 25],
            up: [5, 15],
            drag: 2,
            life: [0.4, 0.7],
            h0: 0.6,
            h1: 0.1,
            s0: [3, 5],
            s1: 8,
            shape: Z.smoke,
            add: !1,
            a: 0.5,
          })));
    }
    update(e, t, n) {
      ((this.kit.now = e),
        (this.dt = t),
        (this.me = n.me),
        this.L.ribbons.reset());
      for (let t = this.timers.length - 1; t >= 0; t--)
        if (e >= this.timers[t].at) {
          let e = this.timers[t];
          (this.timers.splice(t, 1), e.fn());
        }
      for (let n = this.emitters.length - 1; n >= 0; n--) {
        let r = this.emitters[n];
        if (!(e < r.t0)) {
          for (
            r.acc += t * r.rate * this.kit.density * this.L.settings.density;
            r.acc >= 1;
          )
            (--r.acc, r.fn(e - r.t0));
          e >= r.t1 && this.emitters.splice(n, 1);
        }
      }
      for (let e of this.bolts.values()) e.seen = !1;
      for (let e of n.projectiles) {
        let t = this.bolts.get(e);
        (t || this.bolts.set(e, (t = this.newBolt(e))),
          (t.seen = !0),
          this.fly(e, t));
      }
      for (let [e, t] of this.bolts)
        t.seen || (this.dropBolt(t), this.bolts.delete(e));
      for (let e of this.rifts.values()) e.seen = !1;
      for (let e of n.rifts) {
        let t = this.rifts.get(e);
        (t || this.rifts.set(e, (t = this.openRift(e, n.time))),
          (t.seen = !0),
          this.riftFrame(e, t));
      }
      for (let [e, t] of this.rifts)
        t.seen || (this.closeRift(t), this.rifts.delete(e));
      for (let e of this.meteors.values()) e.seen = !1;
      for (let e of n.meteors) {
        let t = this.meteors.get(e);
        (t || this.meteors.set(e, (t = this.newMeteor())),
          (t.seen = !0),
          this.fall(e, t));
      }
      for (let [e, t] of this.meteors)
        t.seen || (this.dropMeteor(t), this.meteors.delete(e));
      (this.drawLightning(e),
        this.drawTendrils(e),
        this.growSpikes(e),
        this.fallHail(t));
    }
    clear() {
      for (let e of this.bolts.values()) this.dropBolt(e);
      this.bolts.clear();
      for (let e of this.rifts.values()) this.closeRift(e, !0);
      this.rifts.clear();
      for (let e of this.meteors.values()) this.dropMeteor(e);
      this.meteors.clear();
      for (let e of this.spikes) this.L.pools.prism.release(e.idx);
      for (let e of this.hail) this.L.pools.shard.release(e.idx);
      ((this.spikes = []),
        (this.hail = []),
        (this.lightning = []),
        (this.tendrils = []),
        (this.emitters = []),
        (this.timers = []));
    }
    castFlash(e, [t, n, r]) {
      let i = this.kit;
      (i.flare(t, n, r, 5, 0.16, e, 2.2),
        i.ring(t, n, r, 1.5, 9, 0.2, e, 1.6),
        i.sparks(t, n, r, 5, e, void 0, Math.PI, [20, 70], [1.5, 3]),
        i.light(t, n, r, e, 1, 18, 0.22));
    }
    bolt(e, t, n) {
      this.lightning.push({
        a: e,
        b: t,
        t0: this.now + (n.delay ?? 0),
        life: n.life,
        w: n.w,
        I: n.I,
        ramp: n.ramp ?? Q.storm,
        rough: n.rough ?? 0.16,
        depth: n.depth ?? 5,
        branches: n.branches ?? 1,
        hz: n.hz ?? 22,
        seed: Math.floor(Math.random() * 1e6),
        env: n.env,
        light: n.light ?? 0,
      });
    }
    drawLightning(e) {
      let t = this.L.ribbons;
      for (let n = this.lightning.length - 1; n >= 0; n--) {
        let r = this.lightning[n],
          i = e - r.t0;
        if (i < 0) continue;
        if (i > r.life) {
          this.lightning.splice(n, 1);
          continue;
        }
        let a = r.env
          ? r.env(i)
          : (i < 0.035 ? 1.3 : 0.7 + 0.3 * Math.random()) *
            (1 - Ad(r.life - 0.1, r.life, i));
        if (a <= 0.01) continue;
        let o = md(r.seed + Math.floor(i * r.hz)),
          s = vd(r.a, r.b, r.rough, r.depth, o);
        t.strip(s, r.w, r.ramp, r.I * a, 1, 0.5);
        let c = s.length,
          l = Math.hypot(r.b[0] - r.a[0], r.b[1] - r.a[1], r.b[2] - r.a[2]);
        for (let e = 0; e < r.branches; e++) {
          let e = Math.floor(c * (0.15 + o() * 0.55)),
            n = s[e],
            i = s[Math.min(c - 1, e + 1)],
            u = i[0] - n[0],
            d = i[1] - n[1],
            f = i[2] - n[2],
            p = Math.hypot(u, d, f) || 1;
          ((u = u / p + (o() - 0.5) * 1.4),
            (d = d / p + (o() - 0.5) * 1),
            (f = f / p + (o() - 0.5) * 1.4));
          let m = l * (0.12 + o() * 0.22),
            h = Math.hypot(u, d, f) || 1,
            g = [
              n[0] + (u / h) * m,
              n[1] + (d / h) * m,
              Math.max(0, n[2] + (f / h) * m),
            ];
          t.strip(
            vd(n, g, r.rough * 1.3, Math.max(2, r.depth - 2), o),
            r.w * 0.55,
            r.ramp,
            r.I * a * 0.7,
            0.6,
            0.15,
          );
        }
        r.light > 0 &&
          this.kit.lightLine(r.a, r.b, r.ramp, r.light * a, 12, 0.05);
      }
    }
    drawTendrils(e) {
      let t = this.L.ribbons;
      for (let n = this.tendrils.length - 1; n >= 0; n--) {
        let r = this.tendrils[n],
          i = e - r.t0;
        if (i < 0) continue;
        if (i > r.life) {
          this.tendrils.splice(n, 1);
          continue;
        }
        let a = Ad(0, r.fadeIn, i) * (1 - Ad(r.life - r.fadeOut, r.life, i));
        for (let e of r.strands)
          t.strip(
            yd(r.a, r.b, 28, e.bow, e.amp, e.waves, -i * e.speed),
            e.w,
            e.ramp,
            e.I * a,
            e.core,
            0.2,
          );
      }
    }
    newBolt(e) {
      let t = this.L,
        n = Rd(e.school),
        [r, i, a] = zd(e.x, e.y, Td),
        o = {
          orb: -1,
          shard: -1,
          light: this.kit.light(r, i, a, n, 1.3, 20, 1e9, !0),
          acc: {},
          spin: Math.random() * Dd,
          seen: !0,
        };
      return (
        e.school === `pyro`
          ? (o.orb = t.orbs.alloc(Ju.fire, Q.ember, 1))
          : e.school === `storm`
            ? (o.orb = t.orbs.alloc(Ju.plasma, Q.storm, 2))
            : e.school === `void`
              ? (o.orb = t.orbs.alloc(Ju.void, Q.void, 1.5))
              : (o.shard = t.pools.shard.alloc(Q.rime, 1.4, 0)),
        e.school === `pyro` && ((o.light.I = 1.6), (o.light.rad = 24)),
        e.school === `cryo` && ((o.light.I = 0.9), (o.light.rad = 18)),
        o
      );
    }
    dropBolt(e) {
      (this.L.orbs.release(e.orb),
        this.L.pools.shard.release(e.shard),
        (e.light.life = 0));
    }
    fly(e, t) {
      let n = this.L,
        [r, i, a] = zd(e.x, e.y, Td),
        o = Math.hypot(e.vx, e.vy) || 1,
        s = e.vx / o,
        c = e.vy / o,
        l = o * wd;
      ((t.light.x = r), (t.light.y = i), (t.light.z = a));
      let u = (e, t) => ({
        vx: -s * l * e + $(-t, t),
        vy: -c * l * e + $(-t, t),
      });
      switch (e.school) {
        case `pyro`:
          (n.orbs.set(t.orb, r, i, a, 4, s, c, 0, 1.4),
            this.every(t.acc, `flame`, 130, () =>
              this.emit({
                x: r + $(-2, 2),
                y: i + $(-2, 2),
                z: a + $(-1.5, 1.5),
                ...u(0.15, 12),
                vz: $(10, 30),
                drag: 2,
                life: $(0.25, 0.45),
                s0: $(2.8, 4),
                s1: 0.8,
                ramp: Q.ember,
                h0: 3.2,
                h1: 0.6,
                I: 1.2,
                add: Od,
              }),
            ),
            this.every(t.acc, `ember`, 30, () =>
              this.emit({
                x: r,
                y: i,
                z: a,
                ...u(0.2, 30),
                vz: $(20, 60),
                grav: 120,
                drag: 0.8,
                life: $(0.4, 0.8),
                s0: $(0.5, 0.8),
                ramp: Q.ember,
                h0: 4,
                h1: 2.5,
                I: $(2, 4),
                shape: Z.spark,
                stretch: 0.03,
              }),
            ),
            this.every(t.acc, `smoke`, 16, () =>
              this.emit({
                x: r,
                y: i,
                z: a + 1,
                ...u(0.05, 6),
                vz: $(12, 25),
                drag: 1.2,
                life: $(0.6, 1),
                s0: 2,
                s1: 7,
                ramp: Q.ash,
                h0: 1.2,
                h1: 0.4,
                shape: Z.smoke,
                add: !1,
                a: 0.35,
              }),
            ));
          break;
        case `cryo`:
          ((t.spin += this.dt * 14),
            Nd.setFromUnitVectors(Fd, jd.set(s, c, 0)).multiply(
              Pd.setFromAxisAngle(Fd, t.spin),
            ),
            n.pools.shard.set(
              t.shard,
              jd.set(r, i, a),
              Nd,
              Md.set(3.4, 2.8, 2.8),
            ),
            this.every(t.acc, `halo`, 60, () =>
              this.emit({
                x: r,
                y: i,
                z: a,
                life: 0.09,
                s0: 4.5,
                s1: 3.5,
                ramp: Q.rime,
                h0: 3,
                h1: 3,
                I: 0.35,
              }),
            ),
            this.every(t.acc, `frost`, 70, () =>
              this.emit({
                x: r + $(-1.5, 1.5),
                y: i + $(-1.5, 1.5),
                z: a + $(-1.5, 1.5),
                ...u(0.05, 15),
                vz: $(-8, 8),
                drag: 2,
                life: $(0.25, 0.45),
                s0: $(0.8, 1.3),
                s1: 0.3,
                ramp: Q.rime,
                h0: 4,
                h1: 2.5,
                I: 1.5,
              }),
            ),
            this.every(t.acc, `mist`, 22, () =>
              this.emit({
                x: r,
                y: i,
                z: a,
                ...u(0.04, 6),
                vz: $(-3, 4),
                drag: 1.5,
                life: $(0.5, 0.8),
                s0: 1.5,
                s1: 6,
                ramp: Q.rime,
                h0: 3.6,
                h1: 3,
                shape: Z.smoke,
                add: !1,
                a: 0.22,
              }),
            ),
            this.every(t.acc, `glint`, 14, () =>
              this.emit({
                x: r + $(-3, 3),
                y: i + $(-3, 3),
                z: a + $(-2, 2),
                life: 0.25,
                s0: 2.2,
                s1: 0.5,
                ramp: Q.rime,
                h0: 4,
                h1: 4,
                I: 3,
                shape: Z.flare,
              }),
            ));
          break;
        case `storm`: {
          (n.orbs.set(t.orb, r, i, a, 2.2, s, c, 0, 1.8, $(1.6, 2.4)),
            (t.light.I = $(0.7, 1.3)));
          let e = n.ribbons,
            o = md(Math.floor(Math.random() * 1e6));
          for (let t = 0; t < 2; t++) {
            let t = Math.random() * Dd,
              n = $(4, 8);
            e.strip(
              vd(
                [r, i, a],
                [
                  r + Math.cos(t) * n - s * 3,
                  i + Math.sin(t) * n * 0.5 - c * 3,
                  Math.max(0, a + Math.sin(t * 1.7) * n),
                ],
                0.3,
                3,
                o,
              ),
              0.9,
              Q.storm,
              $(1.2, 2),
              1,
              0.4,
            );
          }
          (this.every(t.acc, `streak`, 140, () =>
            this.emit({
              x: r,
              y: i,
              z: a,
              ...u(0.25, 40),
              vz: $(-30, 30),
              drag: 4,
              life: $(0.12, 0.25),
              s0: 0.6,
              ramp: Q.storm,
              h0: 4,
              h1: 3,
              I: 3,
              shape: Z.spark,
              stretch: 0.06,
            }),
          ),
            this.every(t.acc, `glow`, 60, () =>
              this.emit({
                x: r + $(-1, 1),
                y: i + $(-1, 1),
                z: a,
                life: 0.2,
                s0: 1.5,
                s1: 0.4,
                ramp: Q.storm,
                h0: 3.5,
                h1: 2,
                I: 1.6,
              }),
            ));
          break;
        }
        default:
          (n.orbs.set(t.orb, r, i, a, 3, s, c, 0, 1.2),
            (t.spin += this.dt * 16),
            this.every(t.acc, `helix`, 90, () => {
              let e = t.spin + (Math.random() < 0.5 ? 0 : Math.PI),
                n = -c * Math.cos(e) * 3.6,
                o = s * Math.cos(e) * 3.6,
                l = Math.sin(e) * 3.6;
              this.emit({
                x: r + n,
                y: i + o,
                z: a + l,
                vx: $(-4, 4),
                vy: $(-4, 4),
                vz: $(-2, 4),
                life: $(0.35, 0.5),
                s0: 1.2,
                s1: 0.4,
                ramp: Q.void,
                h0: 4,
                h1: 2.5,
                I: 2,
              });
            }),
            this.every(t.acc, `smoke`, 40, () =>
              this.emit({
                x: r,
                y: i,
                z: a,
                ...u(0.1, 8),
                vz: $(-4, 6),
                drag: 1.5,
                life: $(0.5, 0.8),
                s0: 2.5,
                s1: 7,
                ramp: Q.void,
                h0: 0.6,
                h1: 0.1,
                shape: Z.smoke,
                add: !1,
                a: 0.55,
              }),
            ));
      }
    }
    flameNova(e, t, n, i, a) {
      let o = this.kit;
      (o.decal({
        x: t,
        y: n,
        r0: 4,
        r1: i,
        life: 0.42,
        kind: bd.ring,
        ramp: e,
        I: 1.1,
        ease: 2,
        fadeOut: 0.5,
      }),
        o.decal({
          x: t,
          y: n,
          r0: i * 0.4,
          r1: i * 1.15,
          life: 0.7,
          kind: bd.glow,
          ramp: e,
          I: 0.5,
          fadeOut: 0.8,
        }),
        o.decal({
          x: t,
          y: n,
          r0: i * 0.85,
          r1: i * 0.95,
          life: 3,
          kind: bd.scorch,
          ramp: e,
          I: 1,
          fadeIn: 0.15,
          fadeOut: 0.4,
          a: 0.45,
        }),
        o.radial(t, n, 2, 80, {
          ramp: e,
          speed: [i * 3 * 0.92, i * 3 * 1.02],
          drag: 3,
          up: [6, 22],
          life: [0.42, 0.6],
          h0: 3.1,
          h1: 0.6,
          s0: [3.5, 5],
          s1: 6,
          I: [1, 1.3],
          add: Od,
        }),
        o.radial(t, n, 4, 50, {
          ramp: e,
          speed: [i * 3 * 0.85, i * 3],
          drag: 3,
          up: [30, 60],
          life: [0.3, 0.5],
          h0: 3.3,
          h1: 0.8,
          s0: [2, 3],
          s1: 1,
          I: 1.2,
          add: Od,
        }),
        o.radial(t, n, 3, 40, {
          ramp: e,
          speed: [i * 2, i * 4],
          drag: 2.5,
          up: [40, 110],
          grav: 220,
          life: [0.5, 0.9],
          shape: Z.spark,
          s0: [0.5, 0.8],
          h0: 4,
          h1: 2.5,
          I: [2, 4],
          stretch: 0.04,
        }),
        o.radial(t, n, 6, 20, {
          ramp: Q.ash,
          speed: [i * 2.2, i * 2.8],
          drag: 3,
          up: [15, 30],
          life: [0.9, 1.4],
          add: !1,
          a: 0.35,
          shape: Z.smoke,
          h0: 1.2,
          h1: 0.3,
          s0: 4,
          s1: 12,
        }),
        o.flare(t, n, 8, 10, 0.2, e, 2.5),
        o.light(t, n, 6, e, 3.2, i * 0.9, 0.55));
      for (let a = 0; a < 8; a++) {
        let s = (a / 8) * Dd;
        o.light(
          t + Math.cos(s) * i * 0.75,
          n + Math.sin(s) * i * 0.75 * r.fx,
          4,
          e,
          1.2,
          16,
          0.45,
        );
      }
      (o.shock(t, n, i * 1.1, 3.5, 0.5), a && o.ca(0.12));
    }
    glacialRing(e, t, n, i) {
      let a = this.kit,
        o = Q.rime;
      ([
        [0.36, 9, 0],
        [0.66, 14, 0.06],
        [0.94, 19, 0.12],
      ].forEach(([i, a, s], c) => {
        for (let l = 0; l < a; l++) {
          let u = ((l + Math.random() * 0.6) / a) * Dd + c * 0.4,
            d = n * i * $(0.92, 1.06),
            f = $(0.25, 0.5);
          this.spikes.push({
            idx: -1,
            x: e + Math.cos(u) * d,
            y: t + Math.sin(u) * d * r.fx,
            dir: new W(Math.cos(u) * f, Math.sin(u) * f * r.fx, 1).normalize(),
            roll: Math.random() * Dd,
            H: $(10, 15) * (0.85 + c * 0.15),
            w: $(5, 7),
            t0: this.now + s + $(0, 0.03),
            life: 0.5 + c * 0.06,
            ramp: o,
          });
        }
      }),
        a.decal({
          x: e,
          y: t,
          r0: 5,
          r1: n,
          life: 0.35,
          kind: bd.ring,
          ramp: o,
          I: 1.3,
          ease: 2,
        }),
        a.decal({
          x: e,
          y: t,
          r0: n * 0.6,
          r1: n * 1.05,
          life: 3.2,
          kind: bd.frost,
          ramp: o,
          I: 1,
          ease: 2,
          fadeIn: 0.1,
          fadeOut: 0.5,
        }),
        a.radial(e, t, 3, 60, {
          ramp: o,
          speed: [n * 2.6, n * 3.1],
          drag: 3,
          up: [3, 12],
          life: [0.6, 1],
          add: !1,
          a: 0.3,
          shape: Z.smoke,
          h0: 3.6,
          h1: 2.6,
          s0: [3, 5],
          s1: 9,
        }),
        a.radial(e, t, 4, 40, {
          ramp: o,
          speed: [n * 1.5, n * 3.5],
          drag: 2.5,
          up: [20, 60],
          life: [0.5, 0.9],
          s0: [0.6, 1.1],
          h0: 4,
          h1: 3.5,
          I: [1.5, 3],
        }),
        a.flare(e, t, 8, 10, 0.22, o, 2.5),
        a.light(e, t, 6, o, 1.5, n * 0.8, 0.5));
      for (let i = 0; i < 8; i++) {
        let s = (i / 8) * Dd;
        a.light(
          e + Math.cos(s) * n * 0.7,
          t + Math.sin(s) * n * 0.7 * r.fx,
          4,
          o,
          0.6,
          14,
          0.6,
        );
      }
      (a.shock(e, t, n * 1.1, 2.5, 0.45), i && a.ca(0.2));
    }
    growSpikes(e) {
      let t = this.L.pools.prism;
      for (let n = this.spikes.length - 1; n >= 0; n--) {
        let r = this.spikes[n],
          i = e - r.t0;
        if (i < 0) continue;
        if (r.idx < 0) {
          if (((r.idx = t.alloc(r.ramp, 0.55)), r.idx < 0)) {
            this.spikes.splice(n, 1);
            continue;
          }
          this.kit.spray(r.x, r.y, 1, 2, {
            ramp: r.ramp,
            speed: [5, 18],
            up: [5, 20],
            drag: 2,
            life: [0.4, 0.7],
            h0: 3.6,
            h1: 2.8,
            s0: 2,
            s1: 5,
            shape: Z.smoke,
            add: !1,
            a: 0.3,
          });
        }
        if (i > r.life) {
          let e = r.H * 0.6;
          (this.kit.crystalBits(
            r.x + r.dir.x * e,
            r.y + r.dir.y * e,
            r.dir.z * e,
            2,
            r.ramp,
            [20, 60],
          ),
            this.kit.sparks(
              r.x,
              r.y,
              r.dir.z * e,
              2,
              r.ramp,
              void 0,
              Math.PI,
              [20, 60],
              [1.5, 3],
            ),
            t.release(r.idx),
            this.spikes.splice(n, 1));
          continue;
        }
        let a = 1 - (1 - kd(i / 0.08)) ** 3;
        (Nd.setFromUnitVectors(Id, r.dir).multiply(
          Pd.setFromAxisAngle(Id, r.roll),
        ),
          t.set(
            r.idx,
            jd.set(r.x, r.y, -0.12 * r.H),
            Nd,
            Md.set(r.w, r.w, r.H * a),
          ));
      }
    }
    meteorCall(e, t, n, r) {
      this.kit.decal({
        x: e,
        y: t,
        r0: n * 0.4,
        r1: n * 0.95,
        life: r + 0.08,
        kind: bd.glow,
        ramp: Q.ember,
        I: 1,
        ease: 0,
        fadeIn: r * 0.9,
        fadeOut: 0.1,
      });
    }
    newMeteor() {
      let e = this.L;
      return {
        rock: e.pools.rock.alloc(Q.ember, 1.6, 2),
        orb: e.orbs.alloc(Ju.fire, Q.ember, 1.1),
        light: this.kit.light(0, 0, 0, Q.ember, 1.2, 40, 1e9, !0),
        spin: 0,
        axis: new W(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5,
        ).normalize(),
        acc: {},
        seen: !0,
        last: null,
      };
    }
    dropMeteor(e) {
      (this.L.pools.rock.release(e.rock),
        this.L.orbs.release(e.orb),
        (e.light.life = 0));
    }
    fall(e, t) {
      let n = this.L,
        r = kd(e.t / e.dur),
        i = r * r,
        a = e.x + (e.tx - e.x) * i,
        o = e.y + (e.ty - e.y) * i,
        s = e.ty,
        c = Math.max(0, e.ty - o),
        l = [a, s, c],
        u = t.last ?? [a + 3, s, c + 6],
        d = a - u[0],
        f = c - u[2],
        p = Math.hypot(d, f) || 1;
      ((d /= p), (f /= p));
      let m = p / Math.max(this.dt, 0.001);
      ((t.last = l),
        (t.spin += this.dt * 7),
        n.pools.rock.set(
          t.rock,
          jd.set(a, s, c),
          Nd.setFromAxisAngle(t.axis, t.spin),
          Md.set(5.5, 5.5, 5.5),
        ),
        n.orbs.set(t.orb, a - d * 6, s, c - f * 6, 6.5, d, 0, f, 1.9),
        (t.light.x = a),
        (t.light.y = s),
        (t.light.z = c),
        (t.light.I = 1.2 + 2.2 * i),
        (t.light.rad = 40 + 34 * i));
      let h = (e, t) => ({
        vx: -d * m * e + $(-t, t),
        vy: $(-t, t) * 0.5,
        vz: -f * m * e + $(-t, t),
      });
      (this.every(t.acc, `fire`, 200, () =>
        this.emit({
          x: a - d * 8 + $(-4, 4),
          y: s,
          z: c - f * 8 + $(-4, 4),
          ...h(0.12, 20),
          drag: 2.5,
          life: $(0.3, 0.6),
          s0: $(4.5, 7),
          s1: 1.5,
          ramp: Q.ember,
          h0: 3.3,
          h1: 0.6,
          I: 1.2,
          add: Od,
        }),
      ),
        this.every(t.acc, `smoke`, 45, () =>
          this.emit({
            x: a,
            y: s,
            z: c,
            ...h(0.04, 8),
            drag: 1.2,
            life: $(0.9, 1.5),
            s0: 4,
            s1: 13,
            ramp: Q.ash,
            h0: 1.2,
            h1: 0.2,
            shape: Z.smoke,
            add: !1,
            a: 0.45,
          }),
        ),
        this.every(t.acc, `ember`, 50, () =>
          this.emit({
            x: a,
            y: s,
            z: c,
            ...h(0.1, 40),
            grav: 150,
            drag: 0.6,
            life: $(0.5, 0.9),
            s0: $(0.5, 0.9),
            ramp: Q.ember,
            h0: 4,
            h1: 2.5,
            I: $(2, 4),
            shape: Z.spark,
            stretch: 0.03,
          }),
        ));
    }
    meteorImpact(e, t, n, i) {
      let a = this.kit,
        o = this.L,
        s = Q.ember;
      (a.flare(e, t, 10, 24, 0.3, s, 4),
        a.ring(e, t, 6, 4, n * 1.4, 0.35, s, 1.8),
        a.decal({
          x: e,
          y: t,
          r0: 6,
          r1: n * 1.25,
          life: 0.5,
          kind: bd.ring,
          ramp: s,
          I: 1.4,
          ease: 2,
        }),
        a.decal({
          x: e,
          y: t,
          r0: n,
          r1: n * 1.4,
          life: 1.4,
          kind: bd.glow,
          ramp: s,
          I: 1,
          fadeOut: 0.8,
        }),
        a.decal({
          x: e,
          y: t,
          r0: n * 0.95,
          life: 7,
          kind: bd.scorch,
          ramp: s,
          I: 1.3,
          fadeIn: 0.05,
          fadeOut: 0.3,
        }),
        a.spray(e, t, 6, 70, {
          ramp: s,
          speed: [30, 150],
          up: [20, 110],
          drag: 2.6,
          life: [0.4, 0.85],
          h0: 3.4,
          h1: 0.6,
          s0: [4, 7],
          s1: 2,
          I: [1.1, 1.5],
          add: Od,
        }),
        a.radial(e, t, 2, 50, {
          ramp: s,
          speed: [n * 2.5, n * 3.2],
          drag: 3,
          up: [5, 25],
          life: [0.5, 0.8],
          s0: [3, 5],
          s1: 6,
          h0: 3.2,
          h1: 0.7,
          I: 1.2,
          add: Od,
        }));
      let c = a.n(10);
      for (let n = 0; n < c; n++) {
        let n = Math.random() * Dd,
          i = $(50, 140);
        o.chunks.rock.spawn(
          e,
          t,
          4,
          Math.cos(n) * i,
          Math.sin(n) * i * r.fx,
          $(90, 200),
          $(1.6, 3),
          $(1.6, 2.4),
          s,
          1.4,
          2,
          this.now,
        );
      }
      (a.rocks(e, t, 8, void 0, Math.PI, [50, 140]),
        a.sparks(e, t, 6, 50, s, void 0, Math.PI, [60, 220], [2.5, 5]),
        a.dust(e, t, 26, void 0, Math.PI, [40, 120]),
        a.spray(e, t, 8, 30, {
          ramp: Q.ash,
          speed: [5, 30],
          up: [25, 60],
          drag: 1,
          life: [1.4, 2.4],
          s0: [6, 9],
          s1: 22,
          a: 0.5,
          h0: 0.9,
          h1: 0.2,
          add: !1,
          shape: Z.smoke,
          jitter: 6,
        }),
        a.light(e, t, 12, s, 4.5, n * 1.6, 0.9),
        a.shock(e, t, n * 1.7, 5.5, 0.55),
        this.near(e, t, i) && a.ca(i ? 0.7 : 0.3));
      let l = a.light(e, t, 6, s, 1.4, n, 1.8, !0);
      (this.emitter(1.6, 26, (i) => {
        let a = Math.random() * Dd,
          o = Math.sqrt(Math.random()) * n * 0.6,
          c = 1 - i / 1.6;
        (this.emit({
          x: e + Math.cos(a) * o,
          y: t + Math.sin(a) * o * r.fx,
          z: 1,
          vx: $(-4, 4),
          vy: $(-3, 3),
          vz: $(20, 45),
          drag: 1,
          life: $(0.3, 0.6),
          s0: $(2, 3) * (0.5 + c * 0.5),
          s1: 0.5,
          ramp: s,
          h0: 3.3,
          h1: 0.8,
          I: 1.2,
          add: Od,
        }),
          (l.I = 1.4 * c * $(0.8, 1.1)));
      }),
        this.emitter(1.6, 6, () =>
          this.emit({
            x: e + $(-n * 0.4, n * 0.4),
            y: t + $(-n * 0.3, n * 0.3),
            z: 2,
            vx: $(-3, 3),
            vy: $(-3, 3),
            vz: $(15, 30),
            drag: 0.8,
            life: $(1, 1.6),
            s0: 4,
            s1: 12,
            ramp: Q.ash,
            h0: 1,
            h1: 0.2,
            shape: Z.smoke,
            add: !1,
            a: 0.35,
          }),
        ));
    }
    gather(e, t, n, i, a, o = Q.storm) {
      let s = this.kit;
      (s.orbit(e, t, 26, {
        ramp: o,
        r: [n * 0.2, n * 1.1],
        w: [0.6, 1.2],
        k: -0.3,
        z: [130, 150],
        life: [i + 0.25, i + 0.6],
        add: !1,
        shape: Z.smoke,
        a: 0.55,
        h0: 0.6,
        h1: 0.2,
        s0: [10, 14],
        s1: 20,
      }),
        s.decal({
          x: e,
          y: t,
          r0: n * 0.5,
          r1: n,
          life: i,
          kind: bd.glow,
          ramp: o,
          I: 0.7,
          ease: 0,
          fadeIn: i * 0.9,
          fadeOut: 0.05,
        }),
        this.emitter(i, 18, () =>
          this.emit({
            x: e + $(-n, n),
            y: t,
            z: 140 + $(-8, 8),
            life: 0.09,
            s0: 14,
            s1: 18,
            ramp: o,
            h0: 2.2,
            h1: 2,
            I: 0.5,
          }),
        ),
        this.emitter(i, 4, () => {
          let r = [e + $(-n, n), t, 140 + $(-6, 6)];
          this.bolt(r, [r[0] + $(-20, 20), t, 140 + $(-8, 8)], {
            life: 0.08,
            w: 0.8,
            I: 1.6,
            rough: 0.25,
            depth: 3,
            branches: 0,
            ramp: o,
          });
        }),
        this.emitter(i, 14, () => {
          let i = Math.random() * Dd,
            a = [e + Math.cos(i) * n, t + Math.sin(i) * n * r.fx, 0.5],
            s = i + $(-0.35, 0.35);
          this.bolt(
            a,
            [
              e + Math.cos(s) * n * $(0.7, 1),
              t + Math.sin(s) * n * r.fx * $(0.7, 1),
              0.5,
            ],
            {
              life: 0.08,
              w: 0.6,
              I: 1.6,
              rough: 0.25,
              depth: 3,
              branches: 0,
              ramp: o,
            },
          );
        }),
        this.near(e, t, a) && s.dim(0.22, i + 0.15));
    }
    thunder(e, t, n, i, a = Q.storm) {
      let o = this.kit,
        s = [e + $(-25, 25), t, 260];
      (this.bolt(s, [e, t, 0], {
        life: 0.38,
        w: 2.6,
        I: 3,
        rough: 0.13,
        depth: 6,
        branches: 4,
        hz: 10,
        env: (e) =>
          e < 0.07
            ? 1.4
            : e < 0.11
              ? 0.15
              : e < 0.17
                ? 1.1
                : e < 0.21
                  ? 0.2
                  : e < 0.26
                    ? 0.9
                    : 0.9 * (1 - Ad(0.26, 0.38, e)),
        light: 2.5,
        ramp: a,
      }),
        o.flare(e, t, 6, 20, 0.28, a, 3.5),
        o.decal({
          x: e,
          y: t,
          r0: 4,
          r1: n * 1.35,
          life: 0.4,
          kind: bd.ring,
          ramp: a,
          I: 1.8,
          ease: 2,
        }),
        o.decal({
          x: e,
          y: t,
          r0: n * 0.8,
          r1: n * 1.3,
          life: 0.9,
          kind: bd.glow,
          ramp: a,
          I: 1,
          fadeOut: 0.8,
        }),
        o.decal({
          x: e,
          y: t,
          r0: n * 0.6,
          life: 5,
          kind: bd.scorch,
          ramp: a,
          I: 0.8,
          fadeIn: 0.05,
          fadeOut: 0.3,
        }));
      for (let i = 0; i < 9; i++) {
        let o = (i / 9) * Dd + $(-0.3, 0.3),
          s = n * $(0.6, 1.2);
        this.bolt(
          [e, t, 0.5],
          [e + Math.cos(o) * s, t + Math.sin(o) * s * r.fx, 0.5],
          {
            life: 0.25,
            w: 1.2,
            I: 2.5,
            rough: 0.2,
            depth: 4,
            branches: 1,
            delay: $(0, 0.08),
            ramp: a,
          },
        );
      }
      (o.sparks(e, t, 4, 50, a, void 0, Math.PI, [70, 240], [3, 6]),
        o.radial(e, t, 2, 30, {
          ramp: a,
          speed: [n * 2, n * 3.5],
          drag: 3,
          up: [10, 50],
          life: [0.3, 0.6],
          s0: [1, 1.6],
          s1: 0.4,
          h0: 4,
          h1: 3,
          I: [2, 3.5],
        }),
        o.dust(e, t, 20, void 0, Math.PI, [40, 110]),
        o.rocks(e, t, 6, void 0, Math.PI, [40, 120]),
        o.light(e, t, 30, a, 2.4, n * 1.8, 0.5),
        o.shock(e, t, n * 1.8, 5, 0.5),
        this.near(e, t, i) && o.ca(i ? 0.9 : 0.35));
    }
    chain(e, t, n) {
      let r = this.kit;
      for (let n = 0; n < t.length - 1; n++) {
        let i = n * 0.03;
        this.bolt(t[n], t[n + 1], {
          life: 0.36,
          w: 1.6,
          I: 3.2,
          rough: 0.16,
          depth: 5,
          branches: 2,
          hz: 25,
          delay: i,
          ramp: e,
          light: 1.6,
        });
        let [a, o, s] = t[n + 1];
        this.later(i, () => {
          (r.flare(a, o, s, 9, 0.2, e, 4),
            r.sparks(a, o, s, 16, e, void 0, Math.PI, [60, 180], [3, 5]),
            r.ring(a, o, s, 2, 12, 0.22, e, 2.2),
            r.light(a, o, s, e, 2.4, 26, 0.35),
            r.decal({
              x: a,
              y: o,
              r0: 4,
              life: 1.5,
              kind: bd.scorch,
              ramp: e,
              I: 0.8,
            }));
        });
      }
      n && r.ca(0.2);
    }
    drain(e, t, n) {
      let r = this.kit,
        i = Q.void;
      this.tendrils.push({
        a: e,
        b: t,
        t0: this.now,
        life: 0.62,
        fadeIn: 0.08,
        fadeOut: 0.22,
        strands: [
          {
            bow: $(-9, -4),
            amp: 3,
            waves: 1.5,
            speed: 14,
            w: 2,
            I: 1.9,
            ramp: i,
            core: 0.45,
          },
          {
            bow: $(4, 9),
            amp: 2.5,
            waves: 2,
            speed: 18,
            w: 1.5,
            I: 2,
            ramp: Q.blood,
            core: 0.35,
          },
          {
            bow: $(-2, 2),
            amp: 4,
            waves: 1,
            speed: 11,
            w: 1.1,
            I: 1.6,
            ramp: i,
            core: 0.3,
          },
        ],
      });
      let a = $(0.32, 0.4);
      (this.emitter(0.42, 55, () => {
        let n = $(0.3, 0.42),
          r = Math.random() < 0.45;
        this.emit({
          x: e[0] + $(-3, 3),
          y: e[1] + $(-2, 2),
          z: e[2] + $(-3, 3),
          vx: (t[0] - e[0]) / n,
          vy: (t[1] - e[1]) / n,
          vz: (t[2] - e[2]) / n + $(-8, 8),
          life: n,
          s0: $(1.6, 2.2),
          s1: 1,
          ramp: r ? Q.blood : i,
          h0: 4,
          h1: 3,
          I: 2.5,
        });
      }),
        r.ring(e[0], e[1], e[2], 14, 2, 0.3, i, 2),
        r.spray(e[0], e[1], e[2], 10, {
          ramp: i,
          speed: [10, 35],
          up: [0, 15],
          drag: 2,
          life: [0.4, 0.7],
          h0: 0.6,
          h1: 0.1,
          s0: [3, 4],
          s1: 8,
          shape: Z.smoke,
          add: !1,
          a: 0.55,
        }),
        r.sparks(
          e[0],
          e[1],
          e[2],
          10,
          Q.blood,
          void 0,
          Math.PI,
          [30, 90],
          [2, 4],
        ),
        this.L.vortex(e[0], e[1], 16, 0.6, 0.4, 0.5, this.now, !1, e[2]),
        r.lightLine(e, t, i, 2, 14, 0.6),
        this.later(a, () => {
          (r.flare(t[0], t[1], t[2], 7, 0.25, Q.blood, 3),
            r.ring(t[0], t[1], t[2], 2, 12, 0.25, Q.blood, 2),
            r.light(t[0], t[1], t[2], Q.blood, 1.8, 24, 0.4),
            r.orbit(t[0], t[1], 26, {
              ramp: Q.blood,
              r: [5, 9],
              w: [5, 8],
              k: 0.5,
              z: [0, 6],
              vz: [18, 32],
              life: [0.5, 0.8],
              s0: [0.9, 1.4],
              s1: 0.4,
              h0: 4,
              h1: 3,
              I: [2, 3],
            }));
        }),
        n && r.ca(0.1));
    }
    openRift(e, t) {
      let n = this.L,
        r = this.kit,
        i = e.x * wd,
        a = e.y * wd,
        o = (e.spell.radius ?? 2) * wd,
        s = Math.max(0.3, e.end - t),
        c = {
          R: o,
          light: r.light(i, a, 12, Rd(e.school), 1.6, o * 1.2, s, !0),
          orb: -1,
          vtx: null,
          ticks: e.ticks,
          acc: {},
          seen: !0,
          t0: this.now,
          x: i,
          y: a,
          school: e.school,
          mine: e.mine,
        };
      return (
        e.school === `cryo`
          ? ((c.light.z = 30),
            (c.light.I = 0.9),
            (c.light.rad = o * 1.3),
            r.decal({
              x: i,
              y: a,
              r0: o * 0.3,
              r1: o * 1.05,
              life: s + 1.2,
              kind: bd.frost,
              ramp: Q.rime,
              I: 1,
              ease: 1,
              fadeIn: 0.4,
              fadeOut: 0.25,
            }))
          : (r.decal({
              x: i,
              y: a,
              r0: o * 0.15,
              r1: o,
              life: s + 0.3,
              kind: bd.swirl,
              ramp: Q.void,
              I: 1.4,
              ease: 2,
              fadeIn: 0.2,
              fadeOut: 0.12,
              spin: 0.35,
            }),
            (c.orb = n.orbs.alloc(Ju.void, Q.void, 1.6)),
            (c.vtx = n.vortex(i, a, o * 1.05, 0.6, 0.12, s, this.now, !0)),
            r.flare(i, a, 12, 12, 0.25, Q.void, 3)),
        c
      );
    }
    riftFrame(e, t) {
      let n = this.kit,
        { x: i, y: a, R: o } = t,
        s = this.now - t.t0,
        c = e.ticks < t.ticks;
      if (((t.ticks = e.ticks), t.school === `cryo`)) {
        let e = Q.rime;
        ((t.light.I = 0.9 * $(0.85, 1.1)),
          this.every(t.acc, `cloud`, 55, () => {
            let e = Math.random() < 0.5;
            n.orbit(
              i,
              a,
              1,
              {
                ramp: Q.ash,
                r: [0, o * 1.15],
                w: [0.8, 1.4],
                z: e ? [66, 76] : [76, 92],
                vz: [-2, 2],
                life: [1.2, 1.8],
                add: !1,
                shape: Z.smoke,
                a: 0.42,
                h0: e ? 1.9 : 2.8,
                h1: e ? 1.6 : 2.4,
                s0: [12, 17],
                s1: 22,
              },
              !1,
            );
          }),
          this.every(t.acc, `lit`, 5, () =>
            n.orbit(
              i,
              a,
              1,
              {
                ramp: e,
                r: [0, o * 0.8],
                w: [1, 1.6],
                z: [70, 84],
                life: [0.4, 0.7],
                s0: [7, 10],
                s1: 12,
                h0: 2.2,
                h1: 1.8,
                I: 0.35,
              },
              !1,
            ),
          ),
          this.every(t.acc, `snow`, 70, () =>
            n.orbit(
              i,
              a,
              1,
              {
                ramp: e,
                r: [o * 0.1, o * 1.05],
                w: [2.5, 4.2],
                k: 0.1,
                z: [2, 60],
                vz: [-25, -8],
                life: [0.6, 1.1],
                s0: [0.5, 1],
                s1: 0.4,
                h0: 4,
                h1: 3.5,
                I: [1.2, 2.2],
                shape: Z.spark,
                stretch: 0.02,
              },
              !1,
            ),
          ),
          this.every(t.acc, `wind`, 25, () =>
            this.emit({
              x: i + $(-o, o) + 30,
              y: a + $(-r.fx, r.fx) * o,
              z: $(5, 60),
              vx: -110,
              vy: 15,
              vz: -35,
              life: 0.35,
              s0: 0.5,
              ramp: e,
              h0: 4,
              h1: 3.5,
              I: 1.4,
              shape: Z.spark,
              stretch: 0.05,
            }),
          ),
          this.every(t.acc, `hail`, 9, () => {
            let t = this.L.pools.shard.alloc(e, 1.2, 0);
            t < 0 ||
              this.hail.push({
                idx: t,
                p: new W(i + $(-0.9, 0.9) * o + 35, a + $(-0.6, 0.6) * o, 85),
                v: new W($(-60, -45), $(-6, 6), -230),
                roll: Math.random() * Dd,
                spin: $(8, 16),
                ramp: e,
              });
          }),
          c &&
            (n.decal({
              x: i,
              y: a,
              r0: o * 0.2,
              r1: o,
              life: 0.35,
              kind: bd.ring,
              ramp: e,
              I: 0.7,
              ease: 2,
            }),
            n.radial(i, a, 3, 16, {
              ramp: e,
              speed: [o * 2, o * 3],
              drag: 3,
              up: [3, 10],
              life: [0.5, 0.8],
              add: !1,
              a: 0.25,
              shape: Z.smoke,
              h0: 3.6,
              h1: 2.8,
              s0: 3,
              s1: 8,
            }),
            n.light(i, a, 8, e, 1.1, o, 0.3)));
        return;
      }
      let l = Q.void,
        u = Math.min(1, s / 0.3),
        d = 1 + 0.12 * Math.sin(s * 9);
      (this.L.orbs.set(t.orb, i, a, 12, 4 * u * d, 1, 0, 0, 1),
        (t.light.I = 1.6 * d),
        this.every(t.acc, `in`, 70, () =>
          n.orbit(
            i,
            a,
            1,
            {
              ramp: l,
              r: [o * 0.55, o * 1.05],
              w: [2.2, 3.2],
              k: 1.7,
              z: [1, 5],
              vz: [2, 10],
              life: [0.6, 0.9],
              s0: [0.9, 1.6],
              s1: 0.3,
              h0: 4,
              h1: 2.5,
              I: [1.6, 2.6],
            },
            !1,
          ),
        ),
        this.every(t.acc, `spark`, 30, () =>
          n.orbit(
            i,
            a,
            1,
            {
              ramp: l,
              r: [o * 0.5, o * 1],
              w: [2.6, 3.4],
              k: 1.9,
              z: [1, 6],
              vz: [3, 12],
              life: [0.5, 0.8],
              s0: 0.6,
              h0: 4,
              h1: 3,
              I: [2.5, 4],
              shape: Z.spark,
              stretch: 0.025,
            },
            !1,
          ),
        ),
        this.every(t.acc, `wisp`, 18, () =>
          n.orbit(
            i,
            a,
            1,
            {
              ramp: l,
              r: [o * 0.6, o * 1.1],
              w: [1.8, 2.6],
              k: 1.5,
              z: [2, 8],
              vz: [2, 8],
              life: [0.7, 1],
              add: !1,
              shape: Z.smoke,
              a: 0.45,
              h0: 0.5,
              h1: 0.1,
              s0: 3,
              s1: 6,
            },
            !1,
          ),
        ),
        this.every(t.acc, `rise`, 10, () =>
          this.emit({
            x: i + $(-4, 4),
            y: a + $(-3, 3),
            z: 0,
            vz: 30,
            life: 0.4,
            s0: 1,
            s1: 0.4,
            ramp: l,
            h0: 4,
            h1: 3,
            I: 2,
          }),
        ),
        this.near(i, a, t.mine) && n.dim(0.15, 0.1),
        c &&
          (n.decal({
            x: i,
            y: a,
            r0: o,
            r1: o * 0.15,
            life: 0.3,
            kind: bd.ring,
            ramp: l,
            I: 1.3,
            ease: 1,
          }),
          n.flare(i, a, 12, 9, 0.2, l, 3),
          n.ring(i, a, 12, 14, 2, 0.25, l, 2),
          n.light(i, a, 12, l, 2.2, o, 0.3),
          n.sparks(i, a, 12, 8, l, void 0, Math.PI, [40, 100], [2, 4])));
    }
    closeRift(e, t = !1) {
      let n = this.kit;
      if (
        ((e.light.life = 0),
        e.vtx && (e.vtx.life = 0),
        this.L.orbs.release(e.orb),
        t)
      )
        return;
      let { x: r, y: i, R: a } = e;
      if (e.school === `cryo`) {
        n.radial(r, i, 4, 24, {
          ramp: Q.rime,
          speed: [a * 2, a * 3],
          drag: 3,
          up: [5, 20],
          life: [0.6, 1],
          add: !1,
          a: 0.3,
          shape: Z.smoke,
          h0: 3.6,
          h1: 2.8,
          s0: 3,
          s1: 9,
        });
        return;
      }
      (n.flare(r, i, 12, 12, 0.25, Q.void, 4),
        n.ring(r, i, 12, 2, 18, 0.3, Q.void, 2.4),
        n.sparks(r, i, 12, 16, Q.void, void 0, Math.PI, [50, 140], [2, 4]),
        n.spray(r, i, 10, 8, {
          ramp: Q.void,
          speed: [10, 35],
          up: [5, 20],
          drag: 2,
          life: [0.5, 0.8],
          h0: 0.6,
          h1: 0.1,
          s0: [3, 5],
          s1: 10,
          shape: Z.smoke,
          add: !1,
          a: 0.55,
        }),
        n.light(r, i, 12, Q.void, 2.4, a, 0.4),
        n.shock(r, i, 30, 3, 0.4, 12));
    }
    fallHail(e) {
      let t = this.L.pools.shard;
      for (let n = this.hail.length - 1; n >= 0; n--) {
        let r = this.hail[n];
        if ((r.p.addScaledVector(r.v, e), (r.roll += r.spin * e), r.p.z <= 0)) {
          (this.kit.crystalBits(r.p.x, r.p.y, 1, 2, r.ramp, [15, 45]),
            this.kit.sparks(
              r.p.x,
              r.p.y,
              1,
              3,
              r.ramp,
              void 0,
              Math.PI,
              [20, 60],
              [1.5, 3],
            ),
            this.emit({
              x: r.p.x,
              y: r.p.y,
              z: 1,
              vx: $(-6, 6),
              vy: $(-4, 4),
              vz: $(2, 8),
              drag: 1.5,
              life: 0.6,
              s0: 2,
              s1: 5,
              ramp: r.ramp,
              h0: 3.6,
              h1: 3,
              shape: Z.smoke,
              add: !1,
              a: 0.25,
            }),
            t.release(r.idx),
            this.hail.splice(n, 1));
          continue;
        }
        (Nd.setFromUnitVectors(Fd, jd.copy(r.v).normalize()).multiply(
          Pd.setFromAxisAngle(Fd, r.roll),
        ),
          t.set(r.idx, r.p, Nd, Md.set(1.7, 1.5, 1.5)));
      }
    }
  },
  Vd = (e, t) => e + Math.random() * (t - e),
  Hd = (e) => (Array.isArray(e) ? Vd(e[0], e[1]) : e),
  Ud = class {
    layer;
    density = 1;
    now = 0;
    constructor(e) {
      this.layer = e;
    }
    n(e) {
      let t = e * this.density * this.layer.settings.density,
        n = Math.floor(t);
      return n + +(Math.random() < t - n);
    }
    spray(e, t, n, r, i, a = !0) {
      let o = this.layer,
        s = a ? this.n(r) : r;
      for (let r = 0; r < s; r++) {
        let r =
            i.dir === void 0
              ? Math.random() * Math.PI * 2
              : i.dir + Vd(-1, 1) * (i.spread ?? 0.4),
          a = Vd(i.speed[0], i.speed[1]),
          s = i.jitter ?? 0,
          c = Array.isArray(i.s0) ? Vd(i.s0[0], i.s0[1]) : (i.s0 ?? 1),
          l = Array.isArray(i.I) ? Vd(i.I[0], i.I[1]) : (i.I ?? 1);
        o.particles.emit(
          {
            x: e + Vd(-s, s),
            y: t + Vd(-s, s),
            z: n + Vd(-s, s) * 0.5,
            vx: Math.cos(r) * a,
            vy: Math.sin(r) * a,
            vz: i.up ? Vd(i.up[0], i.up[1]) : 0,
            life: Vd(i.life[0], i.life[1]),
            drag: i.drag ?? 0,
            grav: i.grav ?? 0,
            s0: c,
            s1: i.s1 ?? c,
            ramp: i.ramp,
            h0: i.h0 ?? 4,
            h1: i.h1 ?? 2,
            shape: i.shape ?? Z.glow,
            I: l,
            add: i.add ?? !0,
            a: i.a ?? 1,
            stretch: i.stretch ?? 0,
          },
          this.now,
        );
      }
    }
    orbit(e, t, n, r, i = !0) {
      let a = this.layer,
        o = i ? this.n(n) : n;
      for (let n = 0; n < o; n++) {
        let n = Hd(r.s0 ?? 1);
        a.particles.emit(
          {
            x: e,
            y: t,
            z: r.z ? Vd(r.z[0], r.z[1]) : 0,
            vx: Vd(r.r[0], r.r[1]),
            vy: Vd(r.w[0], r.w[1]),
            vz: r.vz ? Vd(r.vz[0], r.vz[1]) : 0,
            life: Vd(r.life[0], r.life[1]),
            delay: r.delay ? Vd(r.delay[0], r.delay[1]) : 0,
            drag: r.k ?? 0,
            grav: Math.random() * Math.PI * 2,
            s0: n,
            s1: r.s1 ?? n,
            ramp: r.ramp,
            h0: r.h0 ?? 4,
            h1: r.h1 ?? 2,
            shape: (r.shape ?? Z.glow) + 10,
            I: Hd(r.I ?? 1),
            add: r.add ?? !0,
            a: r.a ?? 1,
            stretch: r.stretch ?? 0,
          },
          this.now,
        );
      }
    }
    radial(e, t, n, i, a, o = r.fx) {
      let s = this.layer,
        c = this.n(i);
      for (let r = 0; r < c; r++) {
        let r = Math.random() * Math.PI * 2,
          i = Vd(a.speed[0], a.speed[1]),
          c = Hd(a.s0 ?? 1),
          l = a.jitter ?? 0;
        s.particles.emit(
          {
            x: e + Vd(-l, l),
            y: t + Vd(-l, l) * o,
            z: n,
            vx: Math.cos(r) * i,
            vy: Math.sin(r) * i * o,
            vz: a.up ? Vd(a.up[0], a.up[1]) : 0,
            life: Vd(a.life[0], a.life[1]),
            drag: a.drag ?? 0,
            grav: a.grav ?? 0,
            s0: c,
            s1: a.s1 ?? c,
            ramp: a.ramp,
            h0: a.h0 ?? 4,
            h1: a.h1 ?? 2,
            shape: a.shape ?? Z.glow,
            I: Hd(a.I ?? 1),
            add: a.add ?? !0,
            a: a.a ?? 1,
            stretch: a.stretch ?? 0,
          },
          this.now,
        );
      }
    }
    decal(e) {
      this.layer.decal(e, this.now);
    }
    lightLine(e, t, n, r, i, a) {
      return this.layer.lightLine(
        e,
        t,
        n,
        r,
        i,
        a,
        this.now,
        this.lightStep[n] ?? 3,
      );
    }
    glow(e, t, n, r, i, a, o, s = 2, c = 4, l = 3, u = Z.glow) {
      this.layer.particles.emit(
        {
          x: e,
          y: t,
          z: n,
          life: a,
          s0: r,
          s1: i,
          ramp: o,
          h0: c,
          h1: l,
          shape: u,
          I: s,
          add: !0,
        },
        this.now,
      );
    }
    flare(e, t, n, r, i, a, o = 4) {
      this.glow(e, t, n, r, r * 0.4, i, a, o, 4, 3, Z.flare);
    }
    ring(e, t, n, r, i, a, o, s = 1.3) {
      this.layer.particles.emit(
        {
          x: e,
          y: t,
          z: n,
          life: a,
          s0: r,
          s1: i,
          ramp: o,
          h0: 4,
          h1: 2.5,
          shape: Z.ring,
          I: s,
          add: !0,
        },
        this.now,
      );
    }
    lightStep = {};
    light(e, t, n, r, i, a, o, s = !1) {
      return this.layer.lightFromRamp(
        e,
        t,
        n,
        r,
        i,
        a,
        o,
        this.now,
        s,
        this.lightStep[r] ?? 3,
      );
    }
    shock(e, t, n = 48, r = 3, i = 0.45, a = 0) {
      this.layer.shock(e, t, this.now, n, r, i, a);
    }
    ca(e) {
      this.layer.kickCA(e);
    }
    dim(e, t) {
      this.layer.dim(e, this.now + t);
    }
    beam(e) {
      return this.layer.beam(e, this.now);
    }
    sparks(e, t, n, r, i, a, o = Math.PI, s = [40, 150], c = [2, 5]) {
      this.spray(e, t, n, r, {
        ramp: i,
        speed: s,
        up: [30, 140],
        grav: 260,
        drag: 0.8,
        life: [0.3, 0.65],
        h0: 4,
        h1: 2.5,
        s0: [0.5, 0.9],
        shape: Z.spark,
        I: c,
        stretch: 0.045,
        dir: a,
        spread: o,
      });
    }
    dust(e, t, n, r, i = Math.PI, a = [25, 80]) {
      this.spray(e, t, 2, n, {
        ramp: Q.dust,
        speed: a,
        up: [4, 20],
        drag: 2.6,
        life: [0.8, 1.4],
        h0: 3,
        h1: 2,
        s0: [4, 7],
        s1: 15,
        shape: Z.smoke,
        add: !1,
        a: 0.55,
        dir: r,
        spread: i,
        jitter: 3,
      });
    }
    smoke(e, t, n, r, i = Q.hollow) {
      this.spray(e, t, n, r, {
        ramp: i,
        speed: [4, 18],
        up: [10, 28],
        drag: 1.3,
        life: [0.8, 1.4],
        h0: 0.7,
        h1: 0,
        s0: [4, 6],
        s1: 14,
        shape: Z.smoke,
        add: !1,
        a: 0.7,
        jitter: 2,
      });
    }
    rocks(e, t, n, r, i = Math.PI, a = [30, 110]) {
      let o = this.layer,
        s = this.n(n);
      for (let n = 0; n < s; n++) {
        let n = r === void 0 ? Math.random() * Math.PI * 2 : r + Vd(-1, 1) * i,
          s = Vd(a[0], a[1]);
        o.chunks.rock.spawn(
          e,
          t,
          2,
          Math.cos(n) * s,
          Math.sin(n) * s,
          Vd(60, 160),
          Vd(1.1, 2.6),
          Vd(1.2, 2),
          Q.stone,
          0,
          1,
          this.now,
        );
      }
    }
    crystalBits(e, t, n, r, i, a = [30, 100]) {
      let o = this.layer,
        s = this.n(r);
      for (let r = 0; r < s; r++) {
        let r = Math.random() * Math.PI * 2,
          s = Vd(a[0], a[1]);
        o.chunks.crystal.spawn(
          e,
          t,
          n,
          Math.cos(r) * s,
          Math.sin(r) * s,
          Vd(40, 130),
          Vd(0.8, 1.8),
          Vd(0.9, 1.6),
          i,
          1.2,
          0,
          this.now,
        );
      }
    }
    shatter(e, t, n, r, i = 1) {
      (this.crystalBits(e, t, n, 5 * i, r),
        this.sparks(e, t, n, 10 * i, r),
        this.flare(e, t, n, 7 * i, 0.2, r, 2.5),
        this.ring(e, t, n, 2, 12 * i, 0.25, r, 2.5),
        this.light(e, t, n, r, 1.6 * i, 16 * i, 0.3));
    }
  },
  Wd = `
uniform float uLen; uniform float uR;
varying vec3 vN; varying float vAlong; varying vec3 vDir;
void main() {
  vec3 p = vec3(position.x * uLen, position.y * uR, position.z * uR);
  vAlong = position.x * uLen;
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vN = normalize(mat3(modelMatrix) * vec3(0.0, normal.y, normal.z));
  vDir = normalize(mat3(modelMatrix) * vec3(1.0, 0.0, 0.0));
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  Gd = `
${Cu}
${wu}
uniform float uLen; uniform float uTime; uniform float uI; uniform float uRow; uniform float uSeed;
uniform int uLayer; uniform float uHollow;
varying vec3 vN; varying float vAlong; varying vec3 vDir;
void main() {
  vec3 V = FX_VIEW;
  float maxN = sqrt(max(1.0 - pow(dot(vDir, V), 2.0), 0.04));
  float f = clamp(abs(dot(vN, V)) / maxN, 0.0, 1.0);
  float ends = smoothstep(2.0, 16.0, vAlong) * smoothstep(0.0, 2.0, uLen - vAlong);
  float flow = 0.72 + 0.2 * sin(vAlong * 0.33 - uTime * 26.0 + uSeed * 6.0) + 0.14 * sin(vAlong * 0.09 - uTime * 11.0 + uSeed * 3.0);
  if (uLayer == 0) {
    vec3 c = mix(rampAt(uRow, 3.0, 0.0), vec3(1.0), uHollow > 0.5 ? 0.3 : 0.5) * uI * 3.0 * pow(f, 0.6);
    gl_FragColor = vec4(c * ends, 0.0);
  } else if (uLayer == 1) {
    float a = pow(f, 1.7) * flow * ends;
    gl_FragColor = vec4(rampAt(uRow, uHollow > 0.5 ? 2.8 : 2.0, 0.0) * uI * 1.9 * a, 0.0);
  } else {
    float n = 0.6 + 0.4 * sin(vAlong * 0.21 - uTime * 17.0 + uSeed * 9.0) * sin(vAlong * 0.05 + uTime * 3.0);
    float a = pow(f, 3.2) * n * ends;
    if (uHollow > 0.5) {
      vec3 smoke = rampAt(uRow, 0.3, 0.0);
      gl_FragColor = vec4(smoke * a * 0.75, a * 0.75);
    } else {
      gl_FragColor = vec4(rampAt(uRow, 1.6, 0.0) * uI * 0.95 * a, 0.0);
    }
  }
}
`,
  Kd = `
${wu}
uniform float uLen; uniform float uTime; uniform float uPhase; uniform float uHR;
varying float vU; varying float vFront;
void main() {
  float along = position.x * uLen;
  float th = along / 15.0 * 6.2831853 - uTime * 10.0 + uPhase;
  float taper = smoothstep(4.0, 16.0, along) * smoothstep(0.0, 10.0, uLen - along);
  vec3 radial = vec3(0.0, cos(th), sin(th));
  vec3 p = vec3(along + position.y * 0.55, 0.0, 0.0) + radial * uHR * taper;
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vec3 wr = mat3(modelMatrix) * radial;
  vFront = dot(wr, FX_VIEW);
  vU = position.x;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  qd = `
${Cu}
uniform float uI; uniform float uRow;
varying float vU; varying float vFront;
void main() {
  float a = 0.35 + 0.65 * smoothstep(-0.6, 0.6, vFront);
  gl_FragColor = vec4(rampAt(uRow, 3.0, 0.0) * uI * 1.1 * a, 0.0);
}
`,
  Jd = `
attribute float aK;
uniform float uLen; uniform float uTime; uniform float uRingR;
varying float vVis;
void main() {
  float sp = 9.0;
  float along = mod(aK * sp + uTime * 34.0, 16.0 * sp);
  vVis = step(along, uLen - 3.0) * smoothstep(3.0, 12.0, along) * (1.0 - smoothstep(uLen - 20.0, uLen - 3.0, along) * 0.6);
  vec3 p = vec3(position.x * uRingR + along, position.y * uRingR, position.z * uRingR);
  if (vVis <= 0.0) p = vec3(0.0);
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(p, 1.0);
}
`,
  Yd = `
${Cu}
uniform float uI; uniform float uRow;
varying float vVis;
void main() {
  if (vVis <= 0.0) discard;
  gl_FragColor = vec4(rampAt(uRow, 4.0, 0.0) * uI * 1.5 * vVis, 0.0);
}
`;
function Xd(e) {
  return (
    (e.transparent = !0),
    (e.depthTest = !0),
    (e.depthWrite = !1),
    (e.side = 2),
    (e.blending = 5),
    (e.blendEquation = 100),
    (e.blendSrc = 201),
    (e.blendDst = 205),
    (e.blendSrcAlpha = 201),
    (e.blendDstAlpha = 205),
    e
  );
}
var Zd = null,
  Qd = null,
  $d = null;
function ef() {
  if (!Zd) {
    ((Zd = new da(1, 1, 1, 18, 1, !0)),
      Zd.rotateZ(-Math.PI / 2),
      Zd.translate(0.5, 0, 0));
    let e = new Float32Array(966),
      t = [];
    for (let n = 0; n <= 160; n++)
      if ((e.set([n / 160, -1, 0, n / 160, 1, 0], n * 6), n < 160)) {
        let e = n * 2;
        t.push(e, e + 1, e + 2, e + 1, e + 3, e + 2);
      }
    ((Qd = new Pr()),
      Qd.setAttribute(`position`, new yr(e, 3)),
      Qd.setIndex(t));
    let n = new _a(1, 0.1, 5, 22);
    (n.rotateY(Math.PI / 2),
      ($d = new Fo()),
      $d.setIndex(n.index),
      $d.setAttribute(`position`, n.getAttribute(`position`)),
      $d.setAttribute(`normal`, n.getAttribute(`normal`)),
      $d.setAttribute(
        `aK`,
        new Ti(new Float32Array(Array.from({ length: 16 }, (e, t) => t)), 1),
      ),
      ($d.instanceCount = 16));
  }
  return { tube: Zd, coil: Qd, tick: $d };
}
var tf = class e {
    group = new Mn();
    u;
    spec;
    t0 = 0;
    layers = [];
    coils = [];
    ticks;
    glowMesh;
    hazeMesh;
    constructor(e, t) {
      let n = ef();
      this.u = {
        uTime: e.uTime,
        uRamp: e.uRamp,
        uView: e.uView,
        uLen: { value: 1 },
        uI: { value: 1 },
        uRow: { value: 0 },
        uSeed: { value: Math.random() },
        uHollow: { value: 0 },
      };
      let r = (e, r) => {
        let i = Xd(
          new Ea({
            vertexShader: Wd,
            fragmentShader: Gd,
            defines: { ...t },
            uniforms: { ...this.u, uR: { value: r }, uLayer: { value: e } },
          }),
        );
        this.layers.push(i);
        let a = new si(n.tube, i);
        return (
          (a.frustumCulled = !1),
          (a.renderOrder = 4 - e),
          this.group.add(a),
          a
        );
      };
      (r(0, 0.45), (this.glowMesh = r(1, 1.5)), (this.hazeMesh = r(2, 3.6)));
      for (let e of [0, Math.PI]) {
        let r = Xd(
            new Ea({
              vertexShader: Kd,
              fragmentShader: qd,
              defines: { ...t },
              uniforms: {
                ...this.u,
                uPhase: { value: e },
                uHR: { value: 2.4 },
              },
            }),
          ),
          i = new si(n.coil, r);
        ((i.frustumCulled = !1),
          (i.renderOrder = 5),
          this.coils.push(i),
          this.group.add(i));
      }
      let i = Xd(
        new Ea({
          vertexShader: Jd,
          fragmentShader: Yd,
          uniforms: { ...this.u, uRingR: { value: 2.2 } },
        }),
      );
      ((this.ticks = new si(n.tick, i)),
        (this.ticks.frustumCulled = !1),
        (this.ticks.renderOrder = 6),
        this.group.add(this.ticks));
    }
    setup(e, t) {
      ((this.spec = e), (this.t0 = t + (e.delay ?? 0)));
      let n = e.r ?? 1;
      ((this.u.uRow.value = e.ramp),
        (this.u.uHollow.value = +!!e.hollow),
        (this.u.uSeed.value = Math.random()),
        (this.layers[0].uniforms.uR.value = 0.45 * n),
        (this.layers[1].uniforms.uR.value = 1.5 * n),
        (this.layers[2].uniforms.uR.value = 3.6 * n),
        (this.hazeMesh.renderOrder = e.hollow ? 0 : 2));
      for (let t of this.coils)
        ((t.visible = e.coils !== !1),
          (t.material.uniforms.uHR.value = 2.4 * n));
      ((this.ticks.visible = !!e.ticks),
        (this.ticks.material.uniforms.uRingR.value = 2.2 * n),
        (this.glowMesh.visible = !0));
    }
    state(e, t) {
      let n = this.spec,
        r = e - this.t0;
      if (((t.on = r >= 0 && r <= n.life), !t.on)) return t;
      let i = r / n.life,
        a = n.ang + (n.sweep ?? 0) * i,
        o = n.grow ? Math.min(1, r / n.grow) : 1,
        s = n.fade ? Math.min(1, (n.life - r) / n.fade) : 1;
      return (
        t.s.set(n.sx, n.sy, n.sz),
        t.e.set(n.sx + Math.cos(a) * n.len, n.sy + Math.sin(a) * n.len, n.ez),
        t.e.sub(t.s).multiplyScalar(o).add(t.s),
        (t.f = i),
        (t.k = s),
        t
      );
    }
    dispose() {
      this.group.traverse((e) => e.material?.dispose());
    }
    static tmp = { on: !1, s: new W(), e: new W(), f: 0, k: 1 };
    static q = new It();
    static d = new W();
    static X = new W(1, 0, 0);
    update(t) {
      let n = this.state(t, e.tmp);
      if (!n.on) return ((this.group.visible = t < this.t0), t < this.t0);
      this.group.visible = !0;
      let r = e.d.copy(n.e).sub(n.s),
        i = Math.max(0.01, r.length());
      return (
        r.divideScalar(i),
        this.group.position.copy(n.s),
        this.group.quaternion.copy(e.q.setFromUnitVectors(e.X, r)),
        this.group.scale.set(1, n.k * 0.85 + 0.15, n.k * 0.85 + 0.15),
        this.group.updateMatrixWorld(!0),
        (this.u.uLen.value = i),
        (this.u.uI.value =
          (this.spec.I ?? 1) *
          (0.25 + 0.75 * n.k) *
          (0.92 + 0.08 * Math.sin(t * 61 + this.u.uSeed.value * 40))),
        !0
      );
    }
  },
  nf = class {
    shared;
    defines;
    root = new Mn();
    live = [];
    pool = [];
    st = { on: !1, s: new W(), e: new W(), f: 0, k: 1 };
    constructor(e, t = {}) {
      ((this.shared = e), (this.defines = t));
    }
    add(e, t) {
      let n = this.pool.pop() ?? new tf(this.shared, this.defines);
      return (
        n.setup(e, t),
        this.live.push(n),
        this.root.add(n.group),
        n.update(t),
        n
      );
    }
    update(e) {
      for (let t = this.live.length - 1; t >= 0; t--) {
        let n = this.live[t];
        n.update(e) ||
          (this.root.remove(n.group),
          this.live.splice(t, 1),
          this.pool.push(n));
      }
    }
    *segments(e) {
      for (let t of this.live) {
        let n = t.state(e, this.st);
        n.on &&
          (yield {
            s: n.s,
            e: n.e,
            k: n.k,
            ramp: t.spec.ramp,
            I: t.spec.I ?? 1,
            hollow: !!t.spec.hollow,
          });
      }
    }
    clear() {
      for (let e of this.live) (this.root.remove(e.group), this.pool.push(e));
      this.live.length = 0;
    }
    dispose() {
      this.clear();
      for (let e of this.pool) e.dispose();
      this.pool = [];
      let e = ef();
      for (let t of [e.tube, e.coil, e.tick]) t.dispose();
    }
  },
  rf = `
attribute vec3 aLook;   // ramp row, inner glow (heat for molten), kind (0 crystal, 1 rock, 2 molten rock)
varying vec3 vW; varying vec3 vLook;
void main() {
  vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vW = wp.xyz;
  vLook = aLook;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  af = `
${Cu}
${wu}
uniform float uTime; uniform float uStone;
varying vec3 vW; varying vec3 vLook;
void main() {
  vec3 N = normalize(cross(dFdx(vW), dFdy(vW)));
  vec3 V = FX_VIEW;
  if (dot(N, V) < 0.0) N = -N;
  vec3 L = normalize(vec3(-0.45, -0.35, 0.82));
  float ndl = max(dot(N, L), 0.0);
  float ndv = max(dot(N, V), 0.0);
  float spec = pow(max(dot(reflect(-L, N), V), 0.0), 26.0);
  float facet = fract(sin(dot(floor(N * 3.0 + 0.5), vec3(12.9898, 78.233, 45.164))) * 43758.5453);
  vec3 col;
  if (vLook.z < 0.5) {
    float g = vLook.y;
    vec3 body = rampAt(vLook.x, 1.2 + ndl * 1.7 + facet * 0.5, 0.0);
    vec3 inner = rampAt(vLook.x, 3.4, 0.0) * g * (0.75 + 0.25 * sin(uTime * 7.0 + vW.x * 0.3 + vW.y * 0.2));
    vec3 rim = rampAt(vLook.x, 4.0, 0.0) * pow(1.0 - ndv, 2.2) * (0.8 + g * 1.4);
    col = body * 0.85 + inner * (0.35 + 0.65 * ndv) + rim + vec3(spec) * 2.2;
  } else if (vLook.z < 1.5) {
    col = rampAt(uStone, 0.8 + ndl * 2.7 + facet * 0.6, 0.0) + vec3(spec) * 0.12;
  } else {
    // molten rock: a dark crust, some faces still liquid, a burning rim (vLook.y = heat)
    vec3 crust = rampAt(uStone, 0.3 + ndl * 1.5 + facet * 0.4, 0.0) * 0.6;
    float lava = smoothstep(0.45, 0.6, facet);
    vec3 hot = rampAt(vLook.x, 2.4 + facet * 1.6, 0.0) * vLook.y * (1.4 + 0.3 * sin(uTime * 9.0 + vW.x * 0.7));
    col = mix(crust, hot, lava * min(1.0, vLook.y)) + rampAt(vLook.x, 3.0, 0.0) * pow(1.0 - ndv, 2.0) * vLook.y * 0.9;
  }
  gl_FragColor = vec4(col, 1.0);
}
`;
function of(e, t, n = {}) {
  return new Ea({
    vertexShader: rf,
    fragmentShader: af,
    defines: { ...n },
    uniforms: {
      uTime: e.uTime,
      uRamp: e.uRamp,
      uView: e.uView,
      uStone: { value: t },
    },
    side: 2,
    depthTest: !0,
    depthWrite: !0,
  });
}
function sf() {
  let e = new ma(
    [new U(0, -0.5), new U(0.24, -0.28), new U(0.27, 0.18), new U(0, 0.5)],
    6,
  );
  return (
    e.rotateX(Math.PI / 2),
    e.translate(0, 0, 0.5),
    e.index ? e.toNonIndexed() : e
  );
}
function cf() {
  let e = new ha(1, 0);
  return (e.scale(1.5, 0.55, 0.42), e.index ? e.toNonIndexed() : e);
}
function lf() {
  let e = new ha(1, 0);
  return (e.scale(0.85, 0.85, 1.3), e.index ? e.toNonIndexed() : e);
}
function uf() {
  let e = new pa(1, 0),
    t = e.getAttribute(`position`);
  for (let e = 0; e < t.count; e++) {
    let n =
        Math.sin(
          t.getX(e) * 12.9898 + t.getY(e) * 78.233 + t.getZ(e) * 37.719,
        ) * 43758.5453,
      r = 0.75 + (n - Math.floor(n)) * 0.5;
    t.setXYZ(e, t.getX(e) * r, t.getY(e) * r, t.getZ(e) * r * 0.8);
  }
  return e.index ? e.toNonIndexed() : e;
}
var df = new q(),
  ff = new q().makeScale(0, 0, 0),
  pf = class {
    cap;
    mesh;
    look;
    free;
    dirty = !1;
    constructor(e, t, n) {
      this.cap = n;
      let r = e.clone();
      ((this.look = new Ti(new Float32Array(n * 3), 3)),
        this.look.setUsage(Xe),
        r.setAttribute(`aLook`, this.look),
        (this.mesh = new Ni(r, t, n)),
        this.mesh.instanceMatrix.setUsage(Xe),
        (this.mesh.frustumCulled = !1));
      for (let e = 0; e < n; e++) this.mesh.setMatrixAt(e, ff);
      this.free = Array.from({ length: n }, (e, t) => n - 1 - t);
    }
    alloc(e, t, n = 0) {
      let r = this.free.pop();
      return r === void 0 ? -1 : (this.setLook(r, e, t, n), r);
    }
    setLook(e, t, n, r = 0) {
      (this.look.setXYZ(e, t, n, r), (this.dirty = !0));
    }
    set(e, t, n, r) {
      e < 0 ||
        (this.mesh.setMatrixAt(e, df.compose(t, n, r)), (this.dirty = !0));
    }
    release(e) {
      e < 0 ||
        (this.mesh.setMatrixAt(e, ff), this.free.push(e), (this.dirty = !0));
    }
    get used() {
      return this.cap - this.free.length;
    }
    flush() {
      this.dirty &&=
        ((this.mesh.instanceMatrix.needsUpdate = !0),
        (this.look.needsUpdate = !0),
        !1);
    }
    clear() {
      for (let e = 0; e < this.cap; e++) this.mesh.setMatrixAt(e, ff);
      ((this.free = Array.from(
        { length: this.cap },
        (e, t) => this.cap - 1 - t,
      )),
        (this.dirty = !0));
    }
  },
  mf = class {
    pool;
    bodies = [];
    q = new It();
    sv = new W();
    constructor(e) {
      this.pool = e;
    }
    spawn(e, t, n, r, i, a, o, s, c, l, u, d) {
      let f = this.pool.alloc(c, l, u);
      f < 0 ||
        this.bodies.push({
          i: f,
          p: new W(e, t, n),
          v: new W(r, i, a),
          axis: new W(
            Math.random() - 0.5,
            Math.random() - 0.5,
            Math.random() - 0.5,
          ).normalize(),
          ang: Math.random() * 6.28,
          spin: 6 + Math.random() * 14,
          s: o,
          t0: d,
          life: s,
        });
    }
    update(e, t) {
      for (let n = this.bodies.length - 1; n >= 0; n--) {
        let r = this.bodies[n],
          i = (e - r.t0) / r.life;
        if (i >= 1) {
          (this.pool.release(r.i), this.bodies.splice(n, 1));
          continue;
        }
        ((r.v.z -= 320 * t),
          r.p.addScaledVector(r.v, t),
          r.p.z < r.s * 0.5 &&
            ((r.p.z = r.s * 0.5),
            r.v.z < 0 &&
              ((r.v.z *= -0.32),
              (r.v.x *= 0.55),
              (r.v.y *= 0.55),
              (r.spin *= 0.5))),
          (r.ang += r.spin * t));
        let a = r.s * (i > 0.7 ? 1 - (i - 0.7) / 0.3 : 1);
        this.pool.set(
          r.i,
          r.p,
          this.q.setFromAxisAngle(r.axis, r.ang),
          this.sv.set(a, a, a),
        );
      }
    }
    get count() {
      return this.bodies.length;
    }
    clear() {
      for (let e of this.bodies) this.pool.release(e.i);
      this.bodies = [];
    }
  },
  hf = {
    high: {
      fxPixels: 14e5,
      msaa: 4,
      outP: 0,
      lightRes: 1,
      density: 1,
      bloom: 1,
      distort: !0,
      ca: !0,
    },
    medium: {
      fxPixels: 9e5,
      msaa: 0,
      outP: 3,
      lightRes: 0.5,
      density: 0.85,
      bloom: 1,
      distort: !0,
      ca: !0,
    },
    low: {
      fxPixels: 45e4,
      msaa: 0,
      outP: 2,
      lightRes: 0.5,
      density: 0.6,
      bloom: 1,
      distort: !1,
      ca: !1,
    },
    minimal: {
      fxPixels: 2e5,
      msaa: 0,
      outP: 1,
      lightRes: 0.5,
      density: 0.4,
      bloom: 0,
      distort: !1,
      ca: !1,
    },
  },
  gf = [`high`, `medium`, `low`, `minimal`],
  _f = (e, t, n) => ({ sx: e, sy: t - n }),
  vf = 32,
  yf = 16,
  bf = `${xu}
in vec2 vUv; out vec4 o;
uniform vec4 uCam;   // camX, camY, rt width, rt height (art px)
uniform vec4 uPt[${vf}]; uniform vec4 uPtC[${vf}]; uniform int uPtN;
uniform vec4 uLnA[${yf}]; uniform vec4 uLnB[${yf}]; uniform vec4 uLnC[${yf}]; uniform int uLnN;
uniform vec3 uAmb; uniform float uEnc;
void main() {
  vec3 P = vec3(uCam.xy + vec2(vUv.x, 1.0 - vUv.y) * uCam.zw, 0.0);
  vec3 L = uAmb;
  for (int i = 0; i < ${vf}; i++) {
    if (i >= uPtN) break;
    vec3 d = P - uPt[i].xyz;
    float r = uPt[i].w, dd = dot(d, d);
    L += uPtC[i].rgb * (r * r / (r * r + dd)) * exp(-sqrt(dd) / (r * 3.0));
  }
  for (int i = 0; i < ${yf}; i++) {
    if (i >= uLnN) break;
    vec3 a = uLnA[i].xyz, ab = uLnB[i].xyz - a;
    float t = clamp(dot(P - a, ab) / max(dot(ab, ab), 1e-3), 0.0, 1.0);
    vec3 d = P - (a + ab * t);
    float r = uLnA[i].w, dd = dot(d, d);
    L += uLnC[i].rgb * (r * r / (r * r + dd)) * exp(-sqrt(dd) / (r * 2.5));
  }
  o = vec4(L * uEnc, 1.0);
}
`,
  xf = `${xu}
#ifdef FX_HOSTED
uniform float uVtxSq;
#define VTX_SQUASH uVtxSq
#else
#define VTX_SQUASH 0.7
#endif
in vec2 vUv; out vec4 o;
uniform vec4 uCam; uniform float uTime; uniform float uEnc;
uniform vec4 uShock[8];
uniform vec4 uShim[16];
uniform vec4 uVtx[4]; uniform vec4 uVtxB[4];
void main() {
  vec2 w = uCam.xy + vec2(vUv.x, 1.0 - vUv.y) * uCam.zw;
  vec2 off = vec2(0.0);
  for (int i = 0; i < 8; i++) {
    vec4 s = uShock[i];
    if (s.w <= 0.0) continue;
    vec2 d = w - s.xy; float r = length(d); float k = (r - s.z) / 6.0;
    off -= (d / max(r, 0.001)) * s.w * exp(-k * k);
  }
  for (int i = 0; i < 16; i++) {
    vec4 g = uShim[i];
    if (g.x == g.z && g.y == g.w) continue;
    vec2 ab = g.zw - g.xy;
    float t = clamp(dot(w - g.xy, ab) / dot(ab, ab), 0.0, 1.0);
    float dist = length(w - (g.xy + ab * t));
    float k = 1.0 - smoothstep(3.0, 11.0, dist);
    off.y += sin(uTime * 25.0 + t * length(ab) * 0.5 + w.x * 0.27) * 1.3 * k;
  }
  for (int i = 0; i < 4; i++) {
    vec4 v = uVtx[i];
    if (v.z <= 0.0) continue;
    vec2 d = w - v.xy;
    vec2 dc = vec2(d.x, d.y / VTX_SQUASH);
    float r = length(dc) / v.z;
    if (r >= 1.0) continue;
    float k = (1.0 - r) * (1.0 - r);
    float a = v.w * k * (1.0 + 0.15 * sin(uTime * 3.0 + r * 6.0));
    vec2 rc = vec2(dc.x * cos(a) - dc.y * sin(a), dc.x * sin(a) + dc.y * cos(a)) * (1.0 + uVtxB[i].x * k);
    off += vec2(rc.x, rc.y * VTX_SQUASH) - d;
  }
  o = vec4(off * uEnc + (uEnc < 1.0 ? 0.5 : 0.0), 0.0, 1.0);
}
`,
  Sf = `${xu}
in vec2 vUv; out vec4 o;
uniform sampler2D uDepth;
uniform vec4 uView;     // camX, camY, view width, view height (art px)
uniform vec2 uSceneSize;
uniform float uDens;    // scene texels per art px (the depth canvas is the scene's size)
uniform float uK0;
void main() {
  vec2 rel = vec2(vUv.x, 1.0 - vUv.y) * uView.zw;
  vec4 d = texture(uDepth, (floor(rel * uDens) + 0.5) / uSceneSize);
  if (d.a < 0.9) discard;
  float v = floor(d.r * 255.0 + 0.5) * 256.0 + floor(d.g * 255.0 + 0.5);
  float ys = v - 512.0 + uView.y - 1.5;
  float sy = uView.y + rel.y;
  float key = 2.0 * ys - sy;
  gl_FragDepth = (-(key - uK0) / ${od.toFixed(1)}) * 0.5 + 0.5;
  o = vec4(0.0);
}
`,
  Cf = `${xu}
in vec2 vUv; out vec4 o;
uniform sampler2D uSrc; uniform vec2 uTexel; uniform float uThresh;
void main() {
  vec3 c = texture(uSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb + texture(uSrc, vUv + uTexel * vec2(1.0, -1.0)).rgb
         + texture(uSrc, vUv + uTexel * vec2(-1.0, 1.0)).rgb + texture(uSrc, vUv + uTexel * vec2(1.0, 1.0)).rgb;
  c *= 0.25;
  if (uThresh >= 0.0) { float br = max(c.r, max(c.g, c.b)); c *= max(br - uThresh, 0.0) / max(br, 1e-4); }
  o = vec4(min(c, vec3(8.0)), 1.0);
}
`,
  wf = `${xu}
in vec2 vUv; out vec4 o;
uniform sampler2D uSrc; uniform sampler2D uBase; uniform vec2 uTexel;
void main() {
  vec2 t = uTexel;
  vec3 c = texture(uSrc, vUv).rgb * 4.0
    + (texture(uSrc, vUv + vec2(t.x, 0.0)).rgb + texture(uSrc, vUv - vec2(t.x, 0.0)).rgb + texture(uSrc, vUv + vec2(0.0, t.y)).rgb + texture(uSrc, vUv - vec2(0.0, t.y)).rgb) * 2.0
    + texture(uSrc, vUv + t).rgb + texture(uSrc, vUv - t).rgb + texture(uSrc, vUv + vec2(t.x, -t.y)).rgb + texture(uSrc, vUv + vec2(-t.x, t.y)).rgb;
  o = vec4(texture(uBase, vUv).rgb + c / 16.0, 1.0);
}
`,
  Tf = `${xu}
in vec2 vUv; out vec4 o;
uniform sampler2D uScene; uniform sampler2D uLight; uniform sampler2D uDist; uniform sampler2D uFx; uniform sampler2D uBloom;
uniform vec4 uView; uniform vec2 uSceneSize; uniform vec2 uArt; uniform float uDens;
uniform float uBloomK; uniform float uCA; uniform float uUseLight; uniform float uUseDist; uniform float uEnc; uniform float uEncD; uniform float uAmb;
vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
void main() {
  vec2 rel = vec2(vUv.x, 1.0 - vUv.y) * uView.zw;            // art px from the view's top left
  vec2 luv = vec2(rel.x, uArt.y - rel.y) / uArt;              // the art-resolution passes
  vec2 off = vec2(0.0);
  if (uUseDist > 0.5) { off = texture(uDist, luv).rg; if (uEncD < 1.0) off = (off - 0.5) / uEncD; }
  vec2 sp = floor((rel + off) * uDens) + 0.5;                // whole scene texels: the world stays crisp
  vec3 scene = texture(uScene, sp / uSceneSize).rgb;
  vec3 L = uUseLight > 0.5 ? texture(uLight, luv).rgb / uEnc : vec3(1.0);
  // light on the art saturates softly (at most about double), so sprites stay readable; and it eases
  // into white rather than clipping, so light on snow or sand keeps its texture
  vec3 ex = max(L - uAmb, vec3(0.0));
  vec3 base = scene * min(L, vec3(uAmb));
  vec3 gain = scene * 1.15 * (1.0 - exp(-ex)) + (1.0 - exp(-ex * 0.6)) * 0.07;
  vec3 room = max(1.0 - base, vec3(0.04));
  vec3 lit = base + room * (1.0 - exp(-gain / room));
  vec4 fg = texture(uFx, vUv);
  vec3 fx = fg.rgb;
  vec3 bl = vec3(0.0);
  if (uBloomK > 0.0) bl = texture(uBloom, vUv).rgb * uBloomK;
  if (uCA > 0.0) {
    // the lens fringe on a big flash: red and blue apart
    vec2 ca = (vUv - 0.5) * uCA;
    fx = vec3(texture(uFx, vUv + ca).r, fg.g, texture(uFx, vUv - ca).b);
    if (uBloomK > 0.0) bl = vec3(texture(uBloom, vUv + ca * 1.6).r * uBloomK, bl.g, texture(uBloom, vUv - ca * 1.6).b * uBloomK);
  }
  o = vec4(lit * (1.0 - clamp(fg.a, 0.0, 1.0)) + aces(fx + bl), 1.0);
}
`,
  Ef = class {
    scene = new Bn();
    mat;
    mesh;
    constructor(e, t, n = {}) {
      this.mat = new Da({
        glslVersion: Ze,
        vertexShader: Eu,
        fragmentShader: e,
        uniforms: t,
        depthTest: !1,
        depthWrite: !1,
        blending: 0,
        ...n,
      });
      let r = new Pr();
      (r.setAttribute(
        `position`,
        new yr(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3),
      ),
        (this.mesh = new si(r, this.mat)),
        (this.mesh.frustumCulled = !1),
        this.scene.add(this.mesh));
    }
    get u() {
      return this.mat.uniforms;
    }
  },
  Df = (e) => ({ value: Array.from({ length: e }, () => new $t()) });
function Of(e, t) {
  return new Da({
    glslVersion: Ze,
    vertexShader: Eu,
    fragmentShader: xf,
    defines: Tu(!0),
    uniforms: {
      uCam: { value: new $t() },
      uTime: t,
      uEnc: { value: 1 },
      uVtxSq: { value: 0.7 },
      uShock: { value: e.shock },
      uShim: { value: e.shim },
      uVtx: { value: e.vtx },
      uVtxB: { value: e.vtxB },
    },
    depthTest: !1,
    depthWrite: !1,
    blending: 0,
  });
}
var kf = class {
  sceneCanvas;
  canvas;
  renderer;
  hosted;
  cam = new ld();
  particles;
  beams;
  orbs;
  ribbons;
  decals;
  lines = [];
  vortices = [];
  pools;
  chunks;
  lights = [];
  shocks = [];
  settings = {
    bloom: 1,
    light: !0,
    occlusion: !0,
    distort: !0,
    ca: !0,
    fxPixels: 14e5,
    msaa: 4,
    outP: 0,
    lightRes: 1,
    density: 1,
  };
  quality = `high`;
  choice = `auto`;
  user = { aa: null, glow: !0, light: !0, haze: !0, fringe: !0, particles: 1 };
  auto = !0;
  off = !1;
  gpu;
  software;
  outScale = 1;
  hdr;
  fxRes = { w: 1, h: 1 };
  lost = !1;
  get on() {
    return !this.gone() && !this.off;
  }
  gone() {
    return this.lost || this.renderer.getContext().isContextLost();
  }
  prof = null;
  profT = 0;
  amb = 1;
  dimAmt = 0;
  dimUntil = 0;
  ca = 0;
  get ambient() {
    return this.amb;
  }
  get caAmt() {
    return this.ca;
  }
  shared;
  fxScene = new Bn();
  dsrc = {
    shock: Df(8).value,
    shim: Df(16).value,
    vtx: Df(4).value,
    vtxB: Df(4).value,
    n: 0,
  };
  ptPool = [];
  lnPool = [];
  sceneTex;
  depthTex;
  texSize = new Map();
  prepass;
  light;
  dist;
  down;
  up;
  final;
  blitCam = new jo(-1, 1, 1, -1, 0, 1);
  lightRT;
  distRT;
  fxRT;
  bloomD = [];
  bloomU = [];
  Wv = 1;
  Hv = 1;
  sized = ``;
  lastNow = 0;
  constructor(e, t, n) {
    ((this.sceneCanvas = e),
      (this.hosted = !!n),
      n
        ? ((this.renderer = n.renderer), (this.canvas = n.renderer.domElement))
        : ((this.canvas = document.createElement(`canvas`)),
          (this.renderer = new bu({
            canvas: this.canvas,
            antialias: !1,
            alpha: !1,
            powerPreference: `high-performance`,
          })),
          this.renderer.setPixelRatio(1),
          (this.renderer.outputColorSpace = Ge),
          (this.renderer.autoClear = !1),
          (this.renderer.info.autoReset = !1)));
    let r = this.renderer.extensions;
    this.hdr =
      r.has(`EXT_color_buffer_float`) || r.has(`EXT_color_buffer_half_float`);
    let i = this.renderer.getContext(),
      a = i.getExtension(`WEBGL_debug_renderer_info`);
    ((this.gpu = String(
      a
        ? i.getParameter(a.UNMASKED_RENDERER_WEBGL)
        : i.getParameter(i.RENDERER),
    )),
      (this.software =
        /swiftshader|basic render|llvmpipe|softpipe|software/i.test(this.gpu)),
      n ||
        (this.canvas.addEventListener(`webglcontextlost`, (e) => {
          (e.preventDefault(), this.setLost(!0));
        }),
        this.canvas.addEventListener(`webglcontextrestored`, () =>
          this.setLost(!1),
        )),
      (this.shared = {
        uTime: { value: 0 },
        uRamp: { value: Fu() },
        uWH: { value: new U(1, 1) },
        uView: { value: sd.clone() },
        uSV: { value: [new W(1, 0, 0), new W(0, 1, -1)] },
        uSquash: { value: 0.7 },
      }));
    let o = Tu(this.hosted);
    ((this.particles = new ku(32768, this.shared, o)),
      (this.beams = new nf(this.shared, o)),
      (this.orbs = new ad(this.shared, void 0, o)),
      (this.ribbons = new pd(this.shared)),
      (this.decals = new Cd(this.shared, void 0, o)));
    let s = of(this.shared, Q.stone, o);
    ((this.pools = {
      shard: new pf(cf(), s, 192),
      prism: new pf(sf(), s, 80),
      core: new pf(lf(), s, 4),
      rock: new pf(uf(), s, 128),
    }),
      (this.chunks = {
        crystal: new mf(this.pools.shard),
        rock: new mf(this.pools.rock),
      }));
    let c = (e) => {
      let t = new oa(e);
      return (
        (t.magFilter = t.minFilter = u),
        (t.generateMipmaps = !1),
        (t.flipY = !1),
        (t.colorSpace = ``),
        t
      );
    };
    ((this.sceneTex = c(e)), (this.depthTex = c(t)));
    let l = { value: new $t() },
      d = { value: new $t() },
      f = { value: new U(1, 1) },
      p = { value: 1 };
    ((this.prepass = new Ef(
      Sf,
      {
        uDepth: { value: this.depthTex },
        uView: l,
        uSceneSize: f,
        uDens: p,
        uK0: { value: 0 },
      },
      { depthTest: !0, depthWrite: !0, depthFunc: 1, colorWrite: !1 },
    )),
      (this.prepass.mesh.renderOrder = -100),
      this.fxScene.add(
        this.prepass.mesh,
        this.decals.mesh,
        this.beams.root,
        this.particles.mesh,
        this.pools.shard.mesh,
        this.pools.prism.mesh,
        this.pools.core.mesh,
        this.pools.rock.mesh,
        this.orbs.mesh,
        this.ribbons.mesh,
      ),
      (this.light = new Ef(bf, {
        uCam: d,
        uAmb: { value: new W(1, 1, 1) },
        uEnc: { value: 1 },
        uPt: Df(vf),
        uPtC: Df(vf),
        uPtN: { value: 0 },
        uLnA: Df(yf),
        uLnB: Df(yf),
        uLnC: Df(yf),
        uLnN: { value: 0 },
      })));
    let m = this.dsrc;
    ((this.dist = new Ef(xf, {
      uCam: d,
      uTime: this.shared.uTime,
      uEnc: { value: 1 },
      uShock: { value: m.shock },
      uShim: { value: m.shim },
      uVtx: { value: m.vtx },
      uVtxB: { value: m.vtxB },
    })),
      (this.down = new Ef(Cf, {
        uSrc: { value: null },
        uTexel: { value: new U() },
        uThresh: { value: -1 },
      })),
      (this.up = new Ef(wf, {
        uSrc: { value: null },
        uBase: { value: null },
        uTexel: { value: new U() },
      })),
      (this.final = new Ef(Tf, {
        uScene: { value: this.sceneTex },
        uLight: { value: null },
        uDist: { value: null },
        uFx: { value: null },
        uBloom: { value: null },
        uView: l,
        uSceneSize: f,
        uDens: p,
        uArt: { value: new U(1, 1) },
        uBloomK: { value: 1 },
        uCA: { value: 0 },
        uUseLight: { value: 1 },
        uUseDist: { value: 1 },
        uEnc: { value: 1 },
        uEncD: { value: 1 },
        uAmb: { value: 1 },
      })),
      this.setQuality(this.software ? `low` : `high`),
      this.warm());
  }
  setLost(e) {
    ((this.lost = e), e || (this.sized = ``));
  }
  invalidateSize() {
    this.sized = ``;
  }
  async warm() {
    let e = this.renderer;
    this.beams.add(
      {
        sx: 0,
        sy: 0,
        sz: 0,
        ang: 0,
        len: 1,
        ez: 0,
        life: 0.001,
        ramp: 0,
        ticks: !0,
      },
      -10,
    );
    try {
      await e.compileAsync(this.fxScene, this.cam);
      for (let t of [
        this.prepass,
        this.light,
        this.dist,
        this.down,
        this.up,
        this.final,
      ])
        await e.compileAsync(t.scene, this.blitCam);
    } catch {}
  }
  own = `high`;
  cap = null;
  setQuality(e) {
    ((this.own = e), this.applyQuality());
  }
  capQuality(e) {
    e !== this.cap && ((this.cap = e), this.applyQuality());
  }
  applyQuality() {
    let e =
      this.cap && gf.indexOf(this.cap) > gf.indexOf(this.own)
        ? this.cap
        : this.own;
    ((this.quality = e), Object.assign(this.settings, hf[e]), this.applyUser());
  }
  choose(e) {
    if (e !== this.choice) {
      if (((this.choice = e), (this.slow = 0), e === `off`)) {
        ((this.off = !0), (this.auto = !1));
        return;
      }
      ((this.off = !1),
        (this.auto = e === `auto`),
        this.setQuality(e === `auto` ? (this.software ? `low` : `high`) : e));
    }
  }
  configure(e) {
    (Object.assign(this.user, e), this.applyUser());
  }
  applyUser() {
    let e = hf[this.quality],
      t = this.user,
      n = this.settings;
    ((n.msaa = t.aa ?? e.msaa),
      (n.bloom = t.glow ? e.bloom : 0),
      (n.light = t.light),
      (n.distort = t.haze && e.distort),
      (n.ca = t.fringe && e.ca),
      (n.density = e.density * t.particles),
      n.light || (this.amb = 1),
      (this.sized = ``));
  }
  slow = 0;
  base = 1 / 60;
  tick(e, t) {
    if (!this.auto || this.off) return;
    if (!t) {
      ((this.base += (e - this.base) * 0.05),
        (this.slow = Math.max(0, this.slow - e)));
      return;
    }
    if (
      (e > 1 / 45 && e > this.base + 0.006
        ? (this.slow += e)
        : (this.slow = Math.max(0, this.slow - e * 0.5)),
      this.slow < 1.2)
    )
      return;
    this.slow = 0;
    let n = gf.indexOf(this.own);
    n < gf.length - 1
      ? (this.setQuality(gf[n + 1]),
        console.info(
          `3D attack FX: frames were slow, quality ${gf[n]} -> ${gf[n + 1]} (${this.gpu})`,
        ))
      : ((this.off = !0),
        console.info(
          `3D attack FX: still slow at "minimal", back to 2D (${this.gpu})`,
        ));
  }
  rt(e, t, n = {}) {
    let r = new tn(Math.max(1, e), Math.max(1, t), {
      format: j,
      type: this.hdr ? C : g,
      magFilter: p,
      minFilter: p,
      depthBuffer: !1,
      stencilBuffer: !1,
      generateMipmaps: !1,
      ...n,
    });
    return ((r.texture.colorSpace = ``), r);
  }
  resize(e, t, n, r = 1) {
    ((this.Wv = e / n), (this.Hv = t / n), (this.final.u.uDens.value = r));
    let i = this.settings,
      a = `${e}x${t}x${n.toFixed(4)}x${r}x${i.fxPixels}x${i.msaa}x${i.outP}x${i.lightRes}`;
    if (a === this.sized) return;
    this.sized = a;
    let o = n,
      s = Math.round(n),
      c = Math.max(this.settings.outP, r);
    if (this.settings.outP > 0 && Math.abs(n - s) < 0.001 && s > c) {
      o = s;
      for (let e = c; e >= r; e--)
        if (s % e === 0 && e % r === 0) {
          o = e;
          break;
        }
    }
    this.outScale = n / o;
    let l = Math.round(e / this.outScale),
      u = Math.round(t / this.outScale);
    this.renderer.setSize(l, u, !1);
    let d = Math.min(1, Math.sqrt(this.settings.fxPixels / (l * u))),
      f = Math.round(l * d),
      p = Math.round(u * d);
    this.fxRes = { w: f, h: p };
    for (let e of [
      this.lightRT,
      this.distRT,
      this.fxRT,
      ...this.bloomD,
      ...this.bloomU,
    ])
      e?.dispose();
    let m = Math.ceil(this.Wv),
      h = Math.ceil(this.Hv);
    ((this.lightRT = this.rt(
      Math.max(1, Math.ceil(m * i.lightRes)),
      Math.max(1, Math.ceil(h * i.lightRes)),
    )),
      (this.distRT = this.rt(m, h)),
      (this.fxRT = this.rt(f, p, {
        depthBuffer: !0,
        samples: this.settings.msaa,
      })),
      (this.bloomD = []),
      (this.bloomU = []));
    let g = f,
      _ = p;
    for (let e = 0; e < 5; e++)
      ((g = Math.max(1, Math.ceil(g / 2))),
        (_ = Math.max(1, Math.ceil(_ / 2))),
        this.bloomD.push(this.rt(g, _)),
        this.bloomU.push(this.rt(g, _)));
    this.final.u.uArt.value.set(m, h);
  }
  lightFromRamp(e, t, n, r, i, a, o, s, c = !1, l = 3) {
    let [u, d, f] = Pu(r, l),
      p = {
        x: e,
        y: t,
        z: n,
        r: u,
        g: d,
        b: f,
        I: i,
        rad: a,
        life: o,
        hold: c,
        t0: s,
      };
    return (this.lights.push(p), p);
  }
  lightLine(e, t, n, r, i, a, o, s = 3) {
    let [c, l, u] = Pu(n, s),
      d = { a: e, b: t, r: c, g: l, b2: u, I: r, rad: i, life: a, t0: o };
    return (
      this.lines.push(d),
      this.lines.length > 48 && this.lines.shift(),
      d
    );
  }
  vortex(e, t, n, r, i, a, o, s = !1, c = 0) {
    let l = {
      x: e,
      y: t,
      z: c,
      R: n,
      ang: r,
      pinch: i,
      life: a,
      hold: s,
      t0: o,
    };
    return (
      this.vortices.length >= 4 && this.vortices.shift(),
      this.vortices.push(l),
      l
    );
  }
  decal(e, t) {
    this.decals.add(e, t);
  }
  shock(e, t, n, r = 48, i = 3, a = 0.45, o = 0) {
    (this.shocks.length >= 8 && this.shocks.shift(),
      this.shocks.push({ x: e, y: t, z: o, t0: n, dur: a, r, amp: i }));
  }
  dim(e, t) {
    ((this.dimAmt = Math.max(this.dimAmt, e)),
      (this.dimUntil = Math.max(this.dimUntil, t)));
  }
  kickCA(e) {
    this.ca = Math.min(1.5, this.ca + e);
  }
  beam(e, t) {
    return this.beams.add(e, t);
  }
  active(e) {
    return this.gone()
      ? !1
      : this.beams.live.length > 0 ||
          this.particles.busyUntil > e ||
          this.chunks.crystal.count + this.chunks.rock.count > 0 ||
          this.pools.shard.used + this.pools.prism.used + this.pools.core.used >
            0 ||
          this.lights.length > 0 ||
          this.shocks.length > 0 ||
          this.orbs.used > 0 ||
          this.ribbons.count > 0 ||
          this.decals.busyUntil > e ||
          this.lines.length > 0 ||
          this.vortices.length > 0 ||
          this.amb < 0.995 ||
          e < this.dimUntil;
  }
  clear() {
    (this.particles.clear(),
      this.beams.clear(),
      this.chunks.crystal.clear(),
      this.chunks.rock.clear());
    for (let e of Object.values(this.pools)) e.clear();
    ((this.lights.length = 0),
      (this.shocks.length = 0),
      this.orbs.clear(),
      this.ribbons.reset(),
      this.decals.clear(),
      (this.lines.length = 0),
      (this.vortices.length = 0),
      (this.amb = 1),
      (this.dimAmt = 0),
      (this.dimUntil = 0));
  }
  dispose() {
    if (!this.hosted) {
      this.renderer.dispose();
      return;
    }
    for (let e of [
      this.lightRT,
      this.distRT,
      this.fxRT,
      ...this.bloomD,
      ...this.bloomU,
    ])
      e?.dispose();
    this.beams.dispose();
    let e = new Set(),
      t = (t) => {
        t && !e.has(t) && (e.add(t), t.dispose());
      };
    for (let e of [
      this.fxScene,
      ...[
        this.prepass,
        this.light,
        this.dist,
        this.down,
        this.up,
        this.final,
      ].map((e) => e.scene),
    ])
      e.traverse((e) => {
        let n = e;
        t(n.geometry);
        for (let e of Array.isArray(n.material) ? n.material : [n.material])
          t(e);
      });
    (t(this.shared.uRamp.value), t(this.sceneTex), t(this.depthTex));
  }
  profPx = new Uint8Array(4);
  sync() {
    let e = this.renderer.getContext(),
      t = e.getParameter(e.FRAMEBUFFER_BINDING);
    (e.bindFramebuffer(e.FRAMEBUFFER, null),
      e.readPixels(0, 0, 1, 1, e.RGBA, e.UNSIGNED_BYTE, this.profPx),
      e.bindFramebuffer(e.FRAMEBUFFER, t));
  }
  mark(e) {
    if (!this.prof) return;
    this.sync();
    let t = performance.now();
    ((this.prof[e] = (this.prof[e] ?? 0) + t - this.profT), (this.profT = t));
  }
  fit(e) {
    let t = e.image,
      n = `${t.width}x${t.height}`,
      r = this.texSize.get(e);
    (r !== void 0 && r !== n && e.dispose(), this.texSize.set(e, n));
  }
  frame(e, t, n) {
    let r = this.renderer,
      i = this.settings;
    this.prof && (this.sync(), (this.profT = performance.now()));
    let a = Math.max(0, Math.min(0.1, n - this.lastNow));
    (r.info.reset(),
      this.obliqueView(),
      this.cam.set(e, t, this.Wv, this.Hv),
      this.cam.updateMatrixWorld(),
      this.final.u.uView.value.set(e, t, this.Wv, this.Hv),
      this.final.u.uSceneSize.value.set(
        this.sceneCanvas.width,
        this.sceneCanvas.height,
      ));
    let o = this.final.u.uArt.value;
    (this.light.u.uCam.value.set(e, t, o.x, o.y),
      (this.prepass.u.uK0.value = this.cam.k0),
      this.shared.uWH.value.set(this.Wv, this.Hv),
      this.fit(this.sceneTex),
      (this.sceneTex.needsUpdate = !0),
      (this.prepass.mesh.visible = i.occlusion),
      i.occlusion &&
        (this.fit(this.depthTex), (this.depthTex.needsUpdate = !0)),
      this.step(n, a));
    let s = this.hdr ? 1 : 0.25,
      c = i.light && (this.updateLights(n, s) > 0 || this.amb < 0.999),
      l = i.distort && this.updateDistort(n) > 0;
    if (
      (this.mark(`cpu`),
      c &&
        (r.setRenderTarget(this.lightRT),
        r.render(this.light.scene, this.blitCam)),
      this.mark(`light`),
      l &&
        ((this.dist.u.uEnc.value = this.hdr ? 1 : 1 / 16),
        r.setRenderTarget(this.distRT),
        r.render(this.dist.scene, this.blitCam)),
      this.mark(`distort`),
      r.setRenderTarget(this.fxRT),
      r.setClearColor(0, 0),
      r.clear(!0, !0, !1),
      r.render(this.fxScene, this.cam),
      this.mark(`fx`),
      i.bloom > 0)
    ) {
      let e = this.fxRT.texture,
        t = this.fxRT.width,
        n = this.fxRT.height;
      for (let i = 0; i < this.bloomD.length; i++)
        ((this.down.u.uSrc.value = e),
          this.down.u.uTexel.value.set(1 / t, 1 / n),
          (this.down.u.uThresh.value = i === 0 ? (this.hdr ? 1 : 0.6) : -1),
          r.setRenderTarget(this.bloomD[i]),
          r.render(this.down.scene, this.blitCam),
          (e = this.bloomD[i].texture),
          (t = this.bloomD[i].width),
          (n = this.bloomD[i].height));
      let i = this.bloomD[this.bloomD.length - 1];
      for (let e = this.bloomD.length - 2; e >= 0; e--)
        ((this.up.u.uSrc.value = i.texture),
          (this.up.u.uBase.value = this.bloomD[e].texture),
          this.up.u.uTexel.value.set(1 / i.width, 1 / i.height),
          r.setRenderTarget(this.bloomU[e]),
          r.render(this.up.scene, this.blitCam),
          (i = this.bloomU[e]));
    }
    this.mark(`bloom`);
    let u = this.final.u;
    return (
      (u.uLight.value = this.lightRT.texture),
      (u.uDist.value = this.distRT.texture),
      (u.uFx.value = this.fxRT.texture),
      (u.uBloom.value = this.bloomU[0].texture),
      (u.uBloomK.value = i.bloom * 0.32),
      (u.uCA.value = i.ca && this.ca > 0.01 ? this.ca * 0.014 : 0),
      (u.uUseLight.value = +!!c),
      (u.uUseDist.value = +!!l),
      (u.uEnc.value = s),
      (u.uEncD.value = this.hdr ? 1 : 1 / 16),
      (u.uAmb.value = c ? this.amb : 1),
      r.setRenderTarget(null),
      r.render(this.final.scene, this.blitCam),
      this.mark(`final`),
      r.info.render.calls
    );
  }
  step(e, t) {
    ((this.lastNow = e),
      (this.shared.uTime.value = e),
      this.beams.update(e),
      this.chunks.crystal.update(e, t),
      this.chunks.rock.update(e, t));
    for (let e of Object.values(this.pools)) e.flush();
    (this.particles.flush(e),
      this.orbs.flush(),
      this.ribbons.flush(),
      this.decals.flush(e));
    let n = e < this.dimUntil ? 1 - this.dimAmt : 1;
    (e >= this.dimUntil && (this.dimAmt = 0),
      (this.amb +=
        (n - this.amb) * (1 - Math.exp(-(n < this.amb ? 5 : 2.5) * t))),
      (this.ca *= Math.exp(-7 * t)));
    for (let t = this.shocks.length - 1; t >= 0; t--)
      e - this.shocks[t].t0 > this.shocks[t].dur && this.shocks.splice(t, 1);
    for (let t = this.vortices.length - 1; t >= 0; t--)
      e - this.vortices[t].t0 > this.vortices[t].life &&
        this.vortices.splice(t, 1);
  }
  hostView(e, t, n, r, i) {
    let a = this.shared;
    a.uView.value.copy(e);
    let o = a.uSV.value;
    (o[0].copy(t[0]),
      o[1].copy(t[1]),
      (a.uSquash.value = n),
      a.uWH.value.set(r, i),
      cd.copy(e),
      (this.prepass.mesh.visible = !1));
  }
  obliqueView() {
    let e = this.shared;
    e.uView.value.copy(sd);
    let t = e.uSV.value;
    (t[0].set(1, 0, 0),
      t[1].set(0, 1, -1),
      (e.uSquash.value = 0.7),
      cd.copy(sd));
  }
  collectLights(e, t) {
    let n = this.ptPool,
      r = this.lnPool,
      i = 0,
      a = 0,
      o = (e, t, r, a, o, s, c, l) => {
        let u =
          n[i] ?? (n[i] = { x: 0, y: 0, z: 0, r: 0, g: 0, b: 0, I: 0, rad: 0 });
        ((u.x = e),
          (u.y = t),
          (u.z = r),
          (u.r = a),
          (u.g = o),
          (u.b = s),
          (u.I = c),
          (u.rad = l),
          i++);
      },
      s = () =>
        r[a] ??
        (r[a] = {
          a: [0, 0, 0],
          b: [0, 0, 0],
          r: 0,
          g: 0,
          b2: 0,
          I: 0,
          rad: 0,
        });
    for (let t = this.lights.length - 1; t >= 0; t--) {
      let n = this.lights[t],
        r = e - n.t0;
      if (r > n.life) {
        this.lights.splice(t, 1);
        continue;
      }
      r < 0 || o(n.x, n.y, n.z, n.r, n.g, n.b, n.I * Af(n, r) * 0.5, n.rad);
    }
    for (let t = this.lines.length - 1; t >= 0; t--) {
      let n = this.lines[t],
        r = e - n.t0;
      if (r > n.life) {
        this.lines.splice(t, 1);
        continue;
      }
      if (r < 0) continue;
      let i = s();
      ((i.a[0] = n.a[0]),
        (i.a[1] = n.a[1]),
        (i.a[2] = n.a[2]),
        (i.b[0] = n.b[0]),
        (i.b[1] = n.b[1]),
        (i.b[2] = n.b[2]),
        (i.r = n.r),
        (i.g = n.g),
        (i.b2 = n.b2),
        (i.I = n.I * (1 - r / n.life) * 0.5),
        (i.rad = n.rad),
        a++);
    }
    for (let t of this.beams.segments(e)) {
      let [e, n, r] = Pu(t.ramp, 3),
        i = s();
      ((i.a[0] = t.s.x + (t.e.x - t.s.x) * 0.3),
        (i.a[1] = t.s.y + (t.e.y - t.s.y) * 0.3),
        (i.a[2] = t.s.z + (t.e.z - t.s.z) * 0.3),
        (i.b[0] = t.e.x),
        (i.b[1] = t.e.y),
        (i.b[2] = t.e.z),
        (i.r = e),
        (i.g = n),
        (i.b2 = r),
        (i.I = 0.7 * t.I * t.k),
        (i.rad = 9),
        a++,
        t.e.z < 2 && o(t.e.x, t.e.y, 2, e, n, r, 0.27 * t.k, 16));
    }
    t.pts.length = 0;
    for (let e = 0; e < i; e++) t.pts.push(n[e]);
    t.lines.length = 0;
    for (let e = 0; e < a; e++) t.lines.push(r[e]);
  }
  distortSources(e, t = this.lastNow) {
    let n = this.dsrc,
      r = 0,
      i = n.shock;
    for (let e = this.shocks.length - 1; e >= 0; e--)
      t - this.shocks[e].t0 > this.shocks[e].dur && this.shocks.splice(e, 1);
    for (let n = 0; n < 8; n++) {
      let a = this.shocks[n];
      if (!a || t < a.t0) {
        i[n].set(0, 0, 0, 0);
        continue;
      }
      let o = (t - a.t0) / a.dur,
        s = e(a.x, a.y, a.z);
      (i[n].set(s.sx, s.sy, a.r * (1 - (1 - o) * (1 - o)), a.amp * (1 - o)),
        r++);
    }
    let a = n.shim,
      o = 0;
    for (let n of this.beams.segments(t)) {
      if (o >= 16 || n.k < 0.3) continue;
      let t = e(n.s.x, n.s.y, n.s.z),
        r = e(n.e.x, n.e.y, n.e.z);
      a[o++].set(t.sx, t.sy, r.sx, r.sy);
    }
    for (r += o; o < 16; o++) a[o].set(0, 0, 0, 0);
    let s = n.vtx,
      c = n.vtxB;
    for (let e = this.vortices.length - 1; e >= 0; e--)
      t - this.vortices[e].t0 > this.vortices[e].life &&
        this.vortices.splice(e, 1);
    for (let n = 0; n < 4; n++) {
      let i = this.vortices[n],
        a = i ? t - i.t0 : -1;
      if (!i || a < 0) {
        s[n].set(0, 0, 0, 0);
        continue;
      }
      let o = i.hold
          ? Math.min(1, a / 0.25) * Math.min(1, (i.life - a) / 0.35)
          : 1 - a / i.life,
        l = e(i.x, i.y, i.z);
      (s[n].set(l.sx, l.sy, i.R, i.ang * o),
        c[n].set(i.pinch * o, 0, 0, 0),
        r++);
    }
    return ((n.n = r), n);
  }
  updateLights(e, t) {
    let n = this.light.u;
    (n.uAmb.value.setScalar(this.amb), (n.uEnc.value = t));
    let r = n.uPt.value,
      i = n.uPtC.value,
      a = 0;
    for (let t = this.lights.length - 1; t >= 0; t--) {
      let n = this.lights[t],
        o = e - n.t0;
      if (o > n.life) {
        this.lights.splice(t, 1);
        continue;
      }
      if (o < 0 || a >= vf) continue;
      let s = n.I * Af(n, o) * 0.5;
      (r[a].set(n.x, n.y, n.z, n.rad),
        i[a].set(n.r * s, n.g * s, n.b * s, 0),
        a++);
    }
    let o = n.uLnA.value,
      s = n.uLnB.value,
      c = n.uLnC.value,
      l = 0;
    for (let t = this.lines.length - 1; t >= 0; t--) {
      let n = this.lines[t],
        r = e - n.t0;
      if (r > n.life) {
        this.lines.splice(t, 1);
        continue;
      }
      if (r < 0 || l >= yf) continue;
      let i = r / n.life,
        a = n.I * (1 - i) * 0.5;
      (o[l].set(n.a[0], n.a[1], n.a[2], n.rad),
        s[l].set(n.b[0], n.b[1], n.b[2], 0),
        c[l].set(n.r * a, n.g * a, n.b2 * a, 0),
        l++);
    }
    for (let t of this.beams.segments(e)) {
      if (l >= yf) break;
      let [e, n, u] = Pu(t.ramp, 3),
        d = 0.7 * t.I * t.k;
      (o[l].set(
        t.s.x + (t.e.x - t.s.x) * 0.3,
        t.s.y + (t.e.y - t.s.y) * 0.3,
        t.s.z + (t.e.z - t.s.z) * 0.3,
        9,
      ),
        s[l].set(t.e.x, t.e.y, t.e.z, 0),
        c[l].set(e * d, n * d, u * d, 0),
        l++,
        t.e.z < 2 &&
          a < vf &&
          (r[a].set(t.e.x, t.e.y, 2, 16),
          i[a].set(e * 0.8 * t.k, n * 0.8 * t.k, u * 0.8 * t.k, 0),
          a++));
    }
    return ((n.uPtN.value = a), (n.uLnN.value = l), a + l);
  }
  updateDistort(e) {
    return this.distortSources(_f, e).n;
  }
};
function Af(e, t) {
  let n = t / e.life;
  return e.hold
    ? Math.min(1, t / 0.08) * Math.min(1, (e.life - t) / 0.2)
    : (1 - n) * (1 - n);
}
function jf(e, t, n) {
  let r = new kf(e, t, n),
    i = new Ud(r);
  return { layer: r, kit: i, golem: new Gu(i), mage: new Bd(i) };
}
export {
  l as $,
  Ni as A,
  $t as At,
  p as B,
  S as C,
  Oo as Ct,
  Lo as D,
  x as Dt,
  C as E,
  g as Et,
  z as F,
  Po as G,
  m as H,
  Ki as I,
  q as J,
  Ur as K,
  Ri as L,
  Lr as M,
  tn as Mt,
  La as N,
  Ti as O,
  U as Ot,
  R as P,
  Oa as Q,
  Zi as R,
  lo as S,
  Er as St,
  Mn as T,
  po as Tt,
  Ge as U,
  h as V,
  oo as W,
  Yr as X,
  si as Y,
  ka as Z,
  xi as _,
  We as _t,
  bu as a,
  jo as at,
  No as b,
  wi as bt,
  ts as c,
  jf as createFx3D,
  ra as ct,
  Pr as d,
  It as dt,
  u as et,
  So as f,
  Za as ft,
  K as g,
  s as gt,
  J as h,
  N as ht,
  xu as i,
  jn as it,
  Fr as j,
  $a as jt,
  Fo as k,
  W as kt,
  tr as l,
  Qi as lt,
  c as m,
  Da as mt,
  Su as n,
  d as nt,
  eo as o,
  Eo as ot,
  oa as p,
  j as pt,
  Ft as q,
  Eu as r,
  Ya as rt,
  bi as s,
  Ao as st,
  Of as t,
  f as tt,
  yr as u,
  $o as ut,
  ee as v,
  Bn as vt,
  Ze as w,
  Qt as wt,
  Xe as x,
  yi as xt,
  sa as y,
  Ea as yt,
  Xi as z,
};
