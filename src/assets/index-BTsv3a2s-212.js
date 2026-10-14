// index-BTsv3a2s 212 — lineto
// Lines 132112-132179 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function p$(e, t) {
  return e.kind === `shop` && t.endsWith(`-keeper`);
}
function m$(e, t) {
  let n = [`room:${e.id}/${t}`];
  return (p$(e, t) && n.push(`shop:${e.name}`), n);
}
var h$ = { main: `#ffd166`, side: `#9fd8ff` },
  g$ = `#ffb35a`;
function _$(e, t, n, r, i, a, o) {
  (e.save(),
    e.translate(t, n),
    e.rotate(r),
    (e.fillStyle = a),
    (e.strokeStyle = `#12091c`),
    (e.lineWidth = o),
    e.beginPath(),
    e.moveTo(i, 0),
    e.lineTo(-i * 0.7, i * 0.75),
    e.lineTo(-i * 0.3, 0),
    e.lineTo(-i * 0.7, -i * 0.75),
    e.closePath(),
    e.stroke(),
    e.fill(),
    e.restore());
}
var v$;
function y$() {
  return (
    v$ === void 0 &&
      (v$ =
        typeof matchMedia == `function`
          ? matchMedia(`(prefers-reduced-motion: reduce)`)
          : null),
    !!v$?.matches
  );
}
function b$(e, t, n, r, i, a) {
  let o = Math.round(t),
    s = Math.round(n),
    c = Bp(r.color, i * 2.3);
  ((e.globalAlpha = y$() ? 0.5 : 0.4 + 0.2 * Math.sin(a * 2.6)),
    e.drawImage(c, Math.round(o - c.width / 2), Math.round(s - c.height / 2)),
    (e.globalAlpha = 1));
  let l = r.glyph === `?`,
    u = Nq(i);
  if ((e.beginPath(), r.kind === `main`)) {
    let t = i * jq;
    (e.moveTo(o, s - t),
      e.lineTo(o + t, s),
      e.lineTo(o, s + t),
      e.lineTo(o - t, s),
      e.closePath());
  } else e.arc(o, s, i, 0, Math.PI * 2);
  let d = e.lineJoin;
  ((e.lineJoin = `miter`),
    (e.lineWidth = u + 4),
    (e.strokeStyle = `#12091c`),
    e.stroke(),
    (e.fillStyle = l ? r.color : `rgba(18,9,28,0.94)`),
    e.fill(),
    (e.lineWidth = u),
    (e.strokeStyle = l ? `#fff6dc` : r.color),
    e.stroke(),
    (e.fillStyle = l ? `#12091c` : r.color));
  for (let t of zq(r.glyph, o, s, i, r.kind)) e.fillRect(t.x, t.y, t.w, t.h);
  e.lineJoin = d;
}
