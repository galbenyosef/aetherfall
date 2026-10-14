// assets__index-BTsv3a2s 242 — icon
// Lines 159791-159901 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function p5(e, t) {
  if (e.button !== 0 || d5) return;
  let n = e.clientX,
    r = e.clientY,
    i = e.pointerId,
    a = t.size ?? 48,
    o = !1,
    s = (e, t) => {
      if (!d5) return;
      d5.ghost.style.transform = `translate(${Math.round(e - a / 2)}px, ${Math.round(t - a / 2)}px)`;
      let n = f5(e, t);
      n !== d5.over &&
        (d5.over?.classList.remove(`drop-over`),
        n?.classList.add(`drop-over`),
        (d5.over = n));
    },
    c = () => {
      o = !0;
      let e = document.createElement(`div`);
      if (
        ((e.className = `drag-ghost`),
        (e.style.width = e.style.height = `${a}px`),
        typeof t.icon == `string`)
      ) {
        let n = document.createElement(`img`);
        ((n.src = t.icon),
          (n.className = `pixel`),
          (n.alt = ``),
          e.appendChild(n));
      } else if (t.icon) {
        let n = t.icon.cloneNode(!0),
          r =
            t.icon instanceof HTMLCanvasElement
              ? t.icon
              : t.icon.querySelector(`canvas`),
          i = n instanceof HTMLCanvasElement ? n : n.querySelector(`canvas`);
        (r && i && i.getContext(`2d`)?.drawImage(r, 0, 0), e.appendChild(n));
      }
      (document.body.appendChild(e),
        document.documentElement.classList.add(
          `dragging`,
          `dragging-${t.kind}`,
        ),
        (d5 = { ghost: e, over: null }),
        t.onStart?.());
    },
    l = (e) => {
      if (e.pointerId === i) {
        if (!o) {
          if (Math.hypot(e.clientX - n, e.clientY - r) < 6) return;
          c();
        }
        (e.preventDefault(), s(e.clientX, e.clientY));
      }
    },
    u = (e, n) => {
      if (
        e.pointerId !== i ||
        (window.removeEventListener(`pointermove`, l, !0),
        window.removeEventListener(`pointerup`, d, !0),
        window.removeEventListener(`pointercancel`, f, !0),
        window.removeEventListener(`keydown`, p, !0),
        !o || !d5)
      )
        return;
      let r = n ? f5(e.clientX, e.clientY) : null;
      (d5.over?.classList.remove(`drop-over`),
        d5.ghost.remove(),
        document.documentElement.classList.remove(
          `dragging`,
          `dragging-${t.kind}`,
        ),
        (d5 = null),
        jce(),
        t.onEnd?.(),
        n && t.onDrop(r?.dataset.drop ?? null, r));
    },
    d = (e) => u(e, !0),
    f = (e) => u(e, !1),
    p = (e) => {
      e.key === `Escape` &&
        d5 &&
        (e.preventDefault(),
        e.stopImmediatePropagation(),
        u({ pointerId: i, clientX: 0, clientY: 0 }, !1));
    };
  (window.addEventListener(`pointermove`, l, !0),
    window.addEventListener(`pointerup`, d, !0),
    window.addEventListener(`pointercancel`, f, !0),
    window.addEventListener(`keydown`, p, !0),
    e.currentTarget?.releasePointerCapture?.(i));
}
function m5(e, t, n, r) {
  let i = Array.from({ length: 8 }, (t, n) => e[n] ?? ``);
  if (!t) return null;
  if (r === null) return n === null || i[n] !== t ? null : ((i[n] = ``), i);
  if (r < 0 || r >= 8) return null;
  let a = n ?? i.indexOf(t);
  if (a === r) return null;
  let o = i[r];
  return ((i[r] = t), a >= 0 && a < 8 && (i[a] = o), i);
}
var h5 = (e) => `slot:${e}`;
function g5(e) {
  if (e === null) return null;
  let t = /^slot:(\d+)$/.exec(e);
  return t ? Number(t[1]) : void 0;
}
function _5() {
  return (0, v.useSyncExternalStore)(_G, hG, hG);
}
