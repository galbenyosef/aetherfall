// index-BTsv3a2s 34 — location
// Lines 27806-27908 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function nf(e, t, n, r, i) {
  let a = t.x - e.x,
    o = t.y - e.y,
    s = Math.hypot(a, o);
  if (s < 0.01) return null;
  let c = Math.min(s, n),
    l = { x: e.x, y: e.y },
    u = null;
  for (let t = Hd; t <= c + 1e-9; t += Hd) {
    let n = { x: e.x + (a / s) * t, y: e.y + (o / s) * t };
    if (!r(l.x, l.y, n.x, n.y)) break;
    ((l = n), i(n.x, n.y) && (u = n));
  }
  if (!u) return null;
  let d = u;
  return qd(d.x, d.y, (e, t) => i(e, t) && r(d.x, d.y, e, t));
}
function rf(e, t) {
  let n = e[e.length - 1],
    r = !!t.sprint,
    i = !!t.guard;
  (n &&
  !!n.sprint === r &&
  !!n.guard === i &&
  Pd(n.dx) === Pd(t.dx) &&
  Pd(n.dy) === Pd(t.dy) &&
  n.ms + t.ms <= 250
    ? ((n.ms += t.ms), (n.x = t.x), (n.y = t.y))
    : e.push({ ...t, sprint: r, guard: i }),
    e.length > 200 && e.splice(0, e.length - 200));
}
function af(e, t) {
  if (t && e)
    return {
      base: e,
      unique: ja[t.unique - 1],
      ilvl: t.ilvl,
      school: k[t.school - 1],
      hollowed: t.hollowed,
    };
}
var of = yu,
  sf = 16,
  cf = 50,
  lf = 16,
  uf = 2e3,
  df = 0.1,
  ff = 0.75,
  pf = 4,
  mf = { down: 0, up: 1, right: 2, left: 3 };
function parseZoneOverride(e = typeof location > `u` ? `` : location.search) {
  let t = (new URLSearchParams(e).get(`zone`) ?? void 0 ?? ``).trim();
  return !t || t === `off` ? null : t === `auto` ? `auto` : normalizeZoneUrl(t);
}
function parseRoomOverride(e = typeof location > `u` ? `` : location.search) {
  return new URLSearchParams(e).get(`room`) || `marizon-1`;
}
function normalizeZoneUrl(e) {
  let t = e.replace(/\/+$/, ``);
  return (
    t.startsWith(`wss://`)
      ? (t = `https://` + t.slice(6))
      : t.startsWith(`ws://`)
        ? (t = `http://` + t.slice(5))
        : /^https?:\/\//.test(t) ||
          (t =
            (/^(localhost|127\.|\[::1\])/.test(t) ? `http://` : `https://`) +
            t),
    t
  );
}
var ZoneError = class extends Error {
    refused;
    unanswered;
    constructor(e, t = !1, n = !1) {
      (super(e),
        (this.name = `ZoneError`),
        (this.refused = t),
        (this.unanswered = n));
    }
  },
  ZONE_REQUEST_TIMEOUT = 1e4;
function describeTransportError(e) {
  let t = e?.data;
  return typeof t == `string` ? t : e instanceof Error ? e.message : String(e);
}
function fetchDevTicket(e) {
  return async (t, n) => {
    let r = new URLSearchParams({
        room: t,
        name: n.name,
        school: n.school,
        cid: String(n._id),
        level: String(n.level),
        maxHp: String(n.maxHp),
        x: String(n.x),
        y: String(n.y),
      }),
      i = await fetch(`${e}/dev/ticket?${r}`, { method: `POST` });
    if (!i.ok) throw Error(`ticket: ${i.status} ${await i.text()}`);
    return (await i.text()).trim();
  };
}
