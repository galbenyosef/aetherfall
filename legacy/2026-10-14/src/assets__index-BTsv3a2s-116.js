// assets__index-BTsv3a2s 116 — math
// Lines 54406-54755 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var Kk = class {
    list = [];
    add(e, t, n, r = {}) {
      e &&
        e.length &&
        (this.list.length > 160 && this.list.shift(),
        this.list.push({
          frames: e,
          x: t,
          y: n,
          t: 0,
          dur: r.dur ?? e.length / 12,
          angle: r.angle,
          add: r.add,
          ax: r.ax,
          ay: r.ay,
          loop: r.loop,
        }));
    }
    update(e) {
      for (let t of this.list) t.t += e;
      this.list = this.list.filter((e) => e.t < e.dur);
    }
    clear() {
      this.list = [];
    }
    draw(e, t, n) {
      for (let r of this.list) {
        let i = r.loop ? zk(r.frames, r.t) : Rk(r.frames, r.t / r.dur),
          a = r.x * jk - t,
          o = r.y * jk - n;
        r.angle === void 0
          ? Bk(e, i, a, o, { add: r.add, ax: r.ax, ay: r.ay })
          : Uk(e, i, a, o, r.angle, { add: r.add });
      }
    }
  },
  mre = { hollowwarden: `warden` },
  qk = {
    golem: { rim: `route`, ramp: rm.aether },
    warden: { rim: `route`, ramp: rm.hollow },
    tutor: { rim: `chalk`, ramp: rm.ash },
    lillith: { rim: `blood`, ramp: rm.blood },
    drakkar: { rim: `maze`, ramp: rm.hollow },
    gorrath: { rim: `crust`, ramp: rm.slag },
    aurek: { rim: `ward`, ramp: rm.ward },
    hessa: { rim: `cord`, ramp: rm.gilt },
    maelis: { rim: `stave`, ramp: rm.rime },
    vesker: { rim: `chain`, ramp: rm.bone },
    unseen: {
      rim: `shear`,
      ramp: [`#05030a`, `#1a1428`, `#3a3050`, `#6a5a8a`, `#e8e0ff`],
    },
    motherbrim: { rim: `bubble`, ramp: rm.blight },
    fenn: { rim: `tally`, ramp: rm.bone },
    ilse: { rim: `wave`, ramp: rm.rime },
    kilnmother: { rim: `brick`, ramp: rm.slag },
  };
function Jk(e) {
  let t = e.replace(/_(ember|rime|storm|void)$/, ``),
    n = mre[t] ?? t;
  return Ak[n] ? n : null;
}
function Yk(e, t, n, r, i = 1, a = 1) {
  ((e.fillStyle = r), e.fillRect(Math.round(t), Math.round(n), i, a));
}
function Xk(e, t, n, r, i, a, o, s, c, l) {
  let u = -Math.sin(s),
    d = Math.cos(s);
  switch (t) {
    case `route`:
      ((a + Math.floor(l * 12)) % 5 < 3 && Yk(e, r, i, c > 0.66 ? n[3] : n[2]),
        a % 8 == 0 &&
          (Yk(e, r + u * 2, i + d * 2, n[1]),
          Yk(e, r - u * 2, i - d * 2, n[1])));
      return;
    case `chalk`:
      (a * 7) % 11 < 8 && Yk(e, r, i, (a * 13) % 7 < 2 ? `#c8c4d0` : `#f0f0f0`);
      return;
    case `blood`:
      (Yk(e, r, i, n[2]),
        (a + Math.floor(l * 10)) % 9 == 0 && Yk(e, r - 1, i - 1, n[3], 2, 2),
        d > 0.6 && a % 13 == 0 && Yk(e, r, i + 1 + ((a >> 2) % 3), n[1], 1, 2));
      return;
    case `maze`:
      (a % 12 < 8 && Yk(e, r, i, n[3]),
        a % 12 == 9 &&
          (Yk(e, r - u * 2, i - d * 2, n[2]), Yk(e, r - u, i - d, n[2])));
      return;
    case `crust`:
      (Yk(e, r, i, n[1]),
        a % 6 < 1 + Math.floor(c * 3) && Yk(e, r, i, c > 0.6 ? n[4] : n[3]));
      return;
    case `ward`:
      Yk(
        e,
        r + (a % 8 < 4 ? u : 0),
        i + (a % 8 < 4 ? d : 0),
        a < o / 2 ? `#e0484e` : n[3],
      );
      return;
    case `cord`:
      (Yk(e, r, i, n[1]),
        a % 22 == 0 &&
          Yk(e, r - 1, i - 1, c > (a % 88) / 88 ? n[4] : n[2], 3, 3));
      return;
    case `stave`:
      (a % 2 == 0 &&
        (Yk(e, r, i, n[2]),
        Yk(e, r + u * 2, i + d * 2, n[1]),
        Yk(e, r - u * 2, i - d * 2, n[1])),
        a % 19 == 0 &&
          Yk(e, r - 1, i - 1, (a % 57) / 57 < c ? n[4] : n[3], 2, 2));
      return;
    case `chain`: {
      let t = a % 6,
        o = Math.floor(a / 6) % 5 == 2 ? `#e0484e` : n[3];
      t === 0 || t === 5
        ? Yk(e, r, i, o)
        : t < 5 && (Yk(e, r + u, i + d, o), Yk(e, r - u, i - d, o));
      return;
    }
    case `shear`: {
      let t = Math.floor(a / 3) % 2;
      (Yk(e, r + u * t, i + d * t, n[3]), a % 17 == 0 && Yk(e, r, i, n[4]));
      return;
    }
    case `bubble`:
      if ((Yk(e, r, i, n[2]), a % 10 == 0)) {
        let t = 1 + ((a >> 3) % 2);
        ((e.fillStyle = n[3]),
          e.fillRect(Math.round(r - t), Math.round(i - t - 1), t * 2, 1),
          e.fillRect(Math.round(r - t), Math.round(i + t - 1), t * 2, 1));
      }
      return;
    case `tally`:
      if (a % 3 == 0) {
        let t = Math.floor(a / 3) % 6;
        t < 4
          ? (Yk(e, r - u * 2, i - d * 2, n[3]),
            Yk(e, r, i, n[3]),
            Yk(e, r + u * 2, i + d * 2, n[3]))
          : t === 4 && Yk(e, r, i, `#e0484e`);
      }
      return;
    case `wave`: {
      let t = Math.sin(a * 0.5 - l * 9) * 1.6;
      Yk(e, r + u * t, i + d * t, Math.abs(t) > 1.2 ? n[4] : n[3]);
      return;
    }
    case `brick`: {
      let t = a % 7;
      (Yk(e, r, i, t === 0 ? (c > 0.5 ? n[4] : n[3]) : n[1]),
        Yk(e, r + u, i + d, t === 0 ? n[2] : n[0]));
      return;
    }
    default:
      Yk(e, r, i, n[3]);
  }
}
function Zk(e, t, n) {
  let r = [],
    i = (e, t, n, i) => {
      let a = n / 1.1,
        o = Math.max(12, Math.ceil(Mk * n));
      for (let s = 0; s < o; s++) {
        let c = (s / o) * Mk;
        i?.(c) ||
          r.push({
            x: e + Math.cos(c) * n,
            y: t + Math.sin(c) * a,
            a: c + Math.PI / 2,
          });
      }
    },
    a = (e, t, n, i) => {
      let a = Math.max(1, Math.ceil(Math.hypot(n - e, i - t))),
        o = Math.atan2(i - t, n - e);
      for (let s = 0; s < a; s++)
        r.push({ x: e + ((n - e) * s) / a, y: t + ((i - t) * s) / a, a: o });
    };
  switch (e.t) {
    case `circle`:
      i(e.x * jk - t, e.y * jk - n, e.r * jk);
      break;
    case `ring`: {
      let r = e.gap,
        a =
          r === void 0
            ? void 0
            : (t) =>
                Math.abs(((t - r + Math.PI * 3) % Mk) - Math.PI) <
                (e.gapW ?? 0) / 2;
      (i(e.x * jk - t, e.y * jk - n, e.r1 * jk, a),
        e.r0 > 0.2 && i(e.x * jk - t, e.y * jk - n, e.r0 * jk, a));
      break;
    }
    case `line`: {
      let r = Math.atan2(e.y1 - e.y0, e.x1 - e.x0),
        i = (-Math.sin(r) * e.w * jk) / 2,
        o = (Math.cos(r) * e.w * jk) / 2,
        s = e.x0 * jk - t,
        c = e.y0 * jk - n,
        l = e.x1 * jk - t,
        u = e.y1 * jk - n;
      (a(s + i, c + o, l + i, u + o), a(l - i, u - o, s - i, c - o));
      break;
    }
    case `cone`: {
      let i = e.x * jk - t,
        o = e.y * jk - n,
        s = e.r * jk,
        c = e.a - e.spread / 2,
        l = e.a + e.spread / 2;
      a(i, o, i + Math.cos(c) * s, o + Math.sin(c) * s);
      let u = Math.max(4, Math.ceil(s * e.spread));
      for (let e = 0; e <= u; e++) {
        let t = c + ((l - c) * e) / u;
        r.push({
          x: i + Math.cos(t) * s,
          y: o + Math.sin(t) * s,
          a: t + Math.PI / 2,
        });
      }
      a(i + Math.cos(l) * s, o + Math.sin(l) * s, i, o);
      break;
    }
    case `rect`: {
      let r = e.x * jk - t,
        i = e.y * jk - n,
        o = e.w * jk,
        s = e.h * jk;
      (a(r, i, r + o, i),
        a(r + o, i, r + o, i + s),
        a(r + o, i + s, r, i + s),
        a(r, i + s, r, i));
      break;
    }
  }
  return r;
}
function Qk(e, t, n, r, i, a) {
  switch (
    (e.save(),
    (e.globalAlpha = Math.max(0, Math.min(1, r))),
    (e.fillStyle = n),
    e.beginPath(),
    t.t)
  ) {
    case `circle`:
      e.ellipse(
        t.x * jk - i,
        t.y * jk - a,
        Math.max(0.5, t.r * jk),
        Math.max(0.5, (t.r * jk) / 1.1),
        0,
        0,
        Mk,
      );
      break;
    case `ring`:
      (e.ellipse(
        t.x * jk - i,
        t.y * jk - a,
        t.r1 * jk,
        (t.r1 * jk) / 1.1,
        0,
        0,
        Mk,
      ),
        e.ellipse(
          t.x * jk - i,
          t.y * jk - a,
          Math.max(0.5, t.r0 * jk),
          Math.max(0.5, (t.r0 * jk) / 1.1),
          0,
          0,
          Mk,
          !0,
        ));
      break;
    case `line`: {
      let n = Math.atan2(t.y1 - t.y0, t.x1 - t.x0),
        r = (-Math.sin(n) * t.w) / 2,
        o = (Math.cos(n) * t.w) / 2;
      (e.moveTo((t.x0 + r) * jk - i, (t.y0 + o) * jk - a),
        e.lineTo((t.x1 + r) * jk - i, (t.y1 + o) * jk - a),
        e.lineTo((t.x1 - r) * jk - i, (t.y1 - o) * jk - a),
        e.lineTo((t.x0 - r) * jk - i, (t.y0 - o) * jk - a),
        e.closePath());
      break;
    }
    case `cone`:
      (e.moveTo(t.x * jk - i, t.y * jk - a),
        e.arc(
          t.x * jk - i,
          t.y * jk - a,
          t.r * jk,
          t.a - t.spread / 2,
          t.a + t.spread / 2,
        ),
        e.closePath());
      break;
    case `rect`:
      e.rect(t.x * jk - i, t.y * jk - a, t.w * jk, t.h * jk);
  }
  (e.fill(`evenodd`), e.restore());
}
function $k(e, t) {
  switch (e.t) {
    case `circle`:
      return { ...e, r: e.r * t };
    case `ring`:
      return { ...e, r1: e.r0 + (e.r1 - e.r0) * t };
    case `line`:
      return {
        ...e,
        x1: e.x0 + (e.x1 - e.x0) * t,
        y1: e.y0 + (e.y1 - e.y0) * t,
      };
    case `cone`:
      return { ...e, r: e.r * t };
    case `rect`:
      return {
        ...e,
        x: e.x + (e.w * (1 - t)) / 2,
        y: e.y + (e.h * (1 - t)) / 2,
        w: e.w * t,
        h: e.h * t,
      };
  }
}
function eA(e, t, n, r, i, a, o, s, c = -1) {
  if (c >= 0) {
    Qk(e, t, r[3], 0.5 * (1 - c), o, s);
    return;
  }
  (Qk(e, t, r[1], 0.16 + 0.08 * Math.abs(Math.sin(a * 8)), o, s),
    i > 0 && Qk(e, $k(t, Math.min(1, i)), r[2], 0.28, o, s));
  let l = Zk(t, o, s);
  for (let t = 0; t < l.length; t++)
    Xk(e, n, r, l[t].x, l[t].y, t, l.length, l[t].a, i, a);
}
function hre(e, t, n, r, i, a, o) {
  (Qk(e, t, n[1], 0.16 + 0.08 * Math.abs(Math.sin(i * 8)), a, o),
    r > 0 && Qk(e, $k(t, Math.min(1, r)), n[2], 0.28, a, o));
}
function tA(e, t, n, r, i, a) {
  Qk(e, t, n, r, i, a);
}
