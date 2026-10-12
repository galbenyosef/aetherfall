// assets__index-BTsv3a2s 234 — math
// Lines 148047-148359 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function Q6(e) {
  return new Set(
    e.filter((e) => e.kind === `fence`).map((e) => `${e.x},${e.y}`),
  );
}
function $6(e, t) {
  return (
    t.kind === `fence` &&
    (e.has(`${t.x - 1},${t.y}`) ||
      e.has(`${t.x + 1},${t.y}`) ||
      !(e.has(`${t.x},${t.y - 1}`) || e.has(`${t.x},${t.y + 1}`)))
  );
}
function e8(e) {
  let t = Mp(e.c),
    n = Math.round(e.x + t / 2);
  return {
    x: n,
    box: [
      Math.ceil(Math.max(n - e.x, e.x + t - n)) + 1,
      Math.ceil(e.baseY - e.y) + 1,
      Math.ceil(Math.max(0, e.y + Np(e.c) - e.baseY)) + 1,
    ],
  };
}
function t8(e) {
  return Number(e.replace(/\D/g, ``)) || 1;
}
function n8(e, t = !1) {
  return t
    ? `${e} Crowns back`
    : e > 0
      ? `${e} Crowns`
      : e < 0
        ? `${-e} Crowns back`
        : `free`;
}
function r8(e, t, n, r, i, a, o = e) {
  ((o.fillStyle = `rgba(255,217,138,0.05)`), o.fillRect(t, n, r, i));
  let s = Math.floor(a * 8) % 8;
  e.fillStyle = `#ffd98a`;
  for (let a = -s; a < r; a += 8) {
    if (a + 4 <= 0) continue;
    let o = Math.max(0, a),
      s = Math.min(4, a + 4 - o, r - o);
    (e.fillRect(t + o, n, s, 1), e.fillRect(t + o, n + i - 1, s, 1));
  }
  for (let a = -s; a < i; a += 8) {
    if (a + 4 <= 0) continue;
    let o = Math.max(0, a),
      s = Math.min(4, a + 4 - o, i - o);
    (e.fillRect(t, n + o, 1, s), e.fillRect(t + r - 1, n + o, 1, s));
  }
}
var xse = class {
  k = 0;
  dx = 0;
  dy = 0;
  sprint = 0;
  step(e, t, n, r = !1) {
    let i = rH(`mage`),
      a = Math.hypot(t, n);
    if (a > 0) {
      let o = t / a,
        s = n / a;
      if (this.k > 0) {
        let e = o * this.dx + s * this.dy,
          t = Math.min(this.k, 0.3 + 0.35 * (1 + e));
        ((this.sprint *= t / this.k), (this.k = t));
      }
      return (
        (this.k = i.accel > 0 ? Math.min(1, this.k + e / i.accel) : 1),
        (this.sprint = r
          ? i.sprintAccel > 0
            ? Math.min(1, this.sprint + e / i.sprintAccel)
            : 1
          : 0),
        (this.dx = o),
        (this.dy = s),
        { dx: t, dy: n, k: this.k, sprint: this.sprint }
      );
    }
    return (
      this.k > 0 &&
        (this.k = i.decel > 0 ? Math.max(0, this.k - e / i.decel) : 0),
      (this.k <= 0 || !r) && (this.sprint = 0),
      this.k > 0
        ? { dx: this.dx, dy: this.dy, k: this.k, sprint: this.sprint }
        : null
    );
  }
  stop() {
    ((this.k = 0), (this.sprint = 0));
  }
};
function Sse(e, t) {
  let n = e.held && e.spent,
    r =
      e.held &&
      !n &&
      e.maxStamina > 0 &&
      !e.busy &&
      (e.moving || (e.gliding && t.sprinting)),
    i = r && fe(t),
    a = r && !i && t.sprinting;
  return { sprinting: i, spent: n || a, outOfBreath: a };
}
function Cse(e, t, n, r) {
  let i = Math.min(Math.max(t, 0), n),
    a = i - e.v;
  Math.abs(a) > 8 && !(a > 0 && r - e.at < 1) && (e.v = i);
}
var wse = `modulepreload`,
  Tse = function (e) {
    return `/` + e;
  },
  i8 = {},
  a8 = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      function s(e) {
        return import.meta.resolve
          ? import.meta.resolve(e)
          : new URL(e, import.meta.url).href;
      }
      r = o(
        t
          .map((t) => {
            if (((t = Tse(t, n)), (t = s(t)), t in i8)) return;
            i8[t] = !0;
            let r = t.endsWith(`.css`);
            for (let n = e.length - 1; n >= 0; n--) {
              let i = e[n];
              if (i.href === t && (!r || i.rel === `stylesheet`)) return;
            }
            let i = document.createElement(`link`);
            if (
              ((i.rel = r ? `stylesheet` : wse),
              r || (i.as = `script`),
              (i.crossOrigin = ``),
              (i.href = t),
              a && i.setAttribute(`nonce`, a),
              document.head.appendChild(i),
              r)
            )
              return new Promise((e, n) => {
                (i.addEventListener(`load`, e),
                  i.addEventListener(`error`, () =>
                    n(Error(`Unable to preload CSS for ${t}`)),
                  ));
              });
          })
          .filter((e) => e !== void 0),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  Ese = 8,
  Dse = 75,
  o8 = [
    [0, 0],
    [-0.4, -0.4],
    [0.4, -0.4],
    [-0.4, 0.4],
    [0.4, 0.4],
  ];
function s8(e) {
  return e.grave ? e.victimId : e.killerId;
}
var Ose = [``, `Noted`, `Marked`, `Hunted`, `Proscribed`, `Anathema`],
  kse = 4,
  Ase = 0.4,
  jse = 0.14;
function c8(e, t) {
  return e >= 1
    ? t
    : (n) => {
        (n.save(), (n.globalAlpha *= e), t(n), n.restore());
      };
}
var l8 = 1.1,
  u8 = 1.4,
  Mse = [60, 104, 26],
  d8 = [32, 64, 16],
  f8 = [16, 80, 12],
  p8 = 45,
  m8 = 0.35,
  Nse = 0.5,
  Pse = 0.5,
  Fse = 0.28,
  Ise = [16 * NR, 48 * NR, 10],
  Lse = 32,
  h8 = 20,
  Rse = 0.4,
  zse = 1.3,
  Bse = 4,
  Vse = 12,
  Hse = 0.6,
  Use = 96,
  Wse = 24,
  Gse = 1,
  Kse = new Set(),
  g8 = (e) =>
    e.kind === `homestead`
      ? `homestead`
      : e.kind === `house`
        ? `house`
        : `room`,
  _8 = { down: 0, up: 1, right: 2, left: 3 },
  v8 = [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 },
  ];
function y8(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function b8(e, t, n) {
  return e + (t - e) * n;
}
function qse(e, t, n, r) {
  let i = r / (2 * n.n),
    a = 1 / (2 * n.n) - 1 / (2 * n.s),
    o = (e) => (i * e + r / 2) / (a * e + 1),
    s = e,
    c = t;
  for (let n = 0; n < 24; n++) {
    let n = (s + c) / 2;
    o(e - n) + o(t - n) > r ? (s = n) : (c = n);
  }
  return (s + c) / 2;
}
function x8(e) {
  return (
    (e = y8(e, 0, 1)),
    e < 0.5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2
  );
}
function Jse(e, t) {
  return (
    ti(e - 0.28, t - 0.12) &&
    ti(e + 0.28, t - 0.12) &&
    ti(e - 0.28, t + 0.18) &&
    ti(e + 0.28, t + 0.18)
  );
}
var Yse = {
  slime: [`#5ccf4f`, `#b6f59a`, `#2f8f3a`],
  wisp: [`#aee6ff`, `#4aa6ff`, `#ffffff`],
  wolf: [`#5b4f78`, `#3a3150`, `#ff3355`],
  imp: [`#e05a2a`, `#ffb238`, `#c2361f`],
  golem: [`#9a95a6`, `#7ef9ff`, `#6f6a7a`],
  recalled: [`#3d3436`, `#b01a2a`, `#ffffff`],
};
function S8(e) {
  return Fe[e]?.size ?? 0.45;
}
var C8 = null;
function Xse() {
  if (C8) return C8;
  let [e, t] = M(1, 48),
    n = t.createLinearGradient(0, 0, 0, 48);
  return (
    n.addColorStop(0, Rp(`#7ef9ff`, 0)),
    n.addColorStop(0.7, Rp(`#7ef9ff`, 0.5)),
    n.addColorStop(1, Rp(`#dffcff`, 1)),
    (t.fillStyle = n),
    t.fillRect(0, 0, 1, 48),
    (C8 = e),
    e
  );
}
function w8(e, t) {
  let n = (e - t) % (Math.PI * 2);
  return (
    n > Math.PI && (n -= Math.PI * 2),
    n < -Math.PI && (n += Math.PI * 2),
    n
  );
}
function T8(e, t) {
  return {
    id: e,
    kind: t.doc.kind,
    x: t.rx,
    y: t.ry,
    flip: t.doc.facing < 0,
    hp: t.doc.hp / Math.max(1, t.doc.maxHp),
    dead: t.doc.dead,
  };
}
