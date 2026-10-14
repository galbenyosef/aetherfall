// assets__index-BTsv3a2s 15 — shiftdown
// Lines 21104-21445 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
var wi = new Set([
  `shift`,
  `control`,
  `alt`,
  `meta`,
  `os`,
  `altgraph`,
  `super`,
  `hyper`,
  `capslock`,
  `fn`,
  `fnlock`,
  `numlock`,
  `scrolllock`,
]);
function Ti(e) {
  return vi(e) || (e.length > 1 && !wi.has(e) && !e.includes(`+`));
}
function Ei(e, t = !1) {
  return typeof e != `string` ||
    e.length < 1 ||
    e.length > 24 ||
    e !== e.toLowerCase() ||
    Ci(Si(e))
    ? !1
    : xi(e)
      ? !t && Ti(Si(e))
      : !e.startsWith(`shift+`);
}
function Di(e) {
  if (typeof e != `object` || !e || Array.isArray(e)) return {};
  let t = e,
    n = {};
  for (let e of oi) {
    let r = t[e.id];
    if (
      !Array.isArray(r) ||
      r.length !== 2 ||
      typeof r[0] != `string` ||
      typeof r[1] != `string`
    )
      continue;
    if (e.optional && r[0] === `` && r[1] === ``) {
      n[e.id] = [``, ``];
      continue;
    }
    let i = r[0].toLowerCase(),
      a = r[1].toLowerCase();
    (Ei(i, !!e.held) || (i = ``),
      (!Ei(a, !!e.held) || a === i) && (a = ``),
      i || ([i, a] = [a, ``]),
      i && (n[e.id] = [i, a]));
  }
  return n;
}
var Oi = (e) => [e[0] ?? ``, e[1] ?? ``];
function ki(e) {
  let t = {},
    n = new Map(),
    r = (e, r, i) => {
      let a = t[e.id] ?? [];
      for (let t of r)
        !t ||
          n.has(t) ||
          a.length >= 2 ||
          (i && !Ei(t, !!e.held)) ||
          (n.set(t, e.id), a.push(t));
      t[e.id] = a;
    };
  for (let t of oi) {
    let n = e[t.id];
    n && r(t, n, !0);
  }
  for (let t of oi) e[t.id] || r(t, t.keys, !1);
  let i = (t) => !!t.optional && !!e[t.id] && !e[t.id][0] && !e[t.id][1];
  for (let e = 0; e <= oi.length; e++) {
    let e = oi.some((e) => !e.held && t[e.id].includes(`shift`)),
      a = (t, r) => {
        let i = n.get(Si(t));
        return !e && (i === void 0 || i === r);
      },
      o = !1;
    for (let e of oi)
      t[e.id] = t[e.id].filter((t) =>
        !xi(t) || a(t, e.id) ? !0 : (n.delete(t), (o = !0), !1),
      );
    for (let e of oi)
      t[e.id].length ||
        i(e) ||
        (r(
          e,
          e.keys.filter((t) => !xi(t) || a(t, e.id)),
          !1,
        ),
        t[e.id].length && (o = !0));
    if (!o) break;
  }
  return Object.fromEntries(oi.map((e) => [e.id, Oi(t[e.id])]));
}
function Ai(e) {
  let t = {};
  for (let n of oi) {
    let r = e[n.id];
    (r[0] !== n.keys[0] || r[1] !== n.keys[1]) && (t[n.id] = [r[0], r[1]]);
  }
  return t;
}
function ji(e, t, n, r = `This one`, i = (e) => bi(e)) {
  let a = t.key.toLowerCase();
  if (t.type === `up`)
    return a === `shift` && e.shiftDown
      ? { act: `bind`, name: `shift`, shiftDown: !1 }
      : { act: `ignore`, shiftDown: e.shiftDown };
  if (t.repeat) return { act: `ignore`, shiftDown: e.shiftDown };
  if (a === `escape`) return { act: `cancel`, shiftDown: !1 };
  if (a === `backspace` || a === `delete`)
    return { act: `clear`, shiftDown: !1 };
  if (a === `shift`) return { act: `wait`, shiftDown: !0 };
  if (t.ctrlKey || t.metaKey || t.altKey)
    return {
      act: `refuse`,
      msg: `Press the key on its own: Ctrl, Cmd and Alt are the browser's.`,
      shiftDown: !1,
    };
  let o = i(t),
    s = Ci(o) ?? Ci(a);
  if (s)
    return {
      act: `refuse`,
      msg: `${Bi(Ci(o) ? o : a)} can't be bound: ${s}.`,
      shiftDown: !1,
    };
  let c = t.shiftKey && !yi(t.key);
  return c && !n
    ? {
        act: `refuse`,
        msg: `Press the key on its own: ${r} can't take a Shift chord.`,
        shiftDown: !1,
      }
    : { act: `bind`, name: (c ? `shift+` : ``) + o, shiftDown: !1 };
}
function Mi(e, t) {
  return e || t === `Escape`;
}
var Ni = 0.5;
function Pi(e, t) {
  return t.choice && /^[1-4]$/.test(e);
}
function Fi(e, t, n) {
  return (
    (e === ` ` || e === `enter` || (t && n.chatting)) &&
    (n.locked || n.dialogue || n.narration)
  );
}
function Ii(e, t, n) {
  return Pi(e, n) || Fi(e, t, n) || (n.cine && (e === ` ` || e === `enter`));
}
function Li(e, t, n) {
  return e === ` ` || t !== null || (n !== null && !!fi(n).held);
}
var Ri = class {
    names = new Set();
    at = new Map();
    down(e, t) {
      (this.at.set(e || t, t), this.names.add(t));
    }
    up(e, t) {
      let n = e || t,
        r = this.at.get(n) ?? t;
      this.at.delete(n);
      for (let e of this.at.values()) if (e === r) return;
      this.names.delete(r);
    }
    has(e) {
      return this.names.has(e);
    }
    clear() {
      (this.names.clear(), this.at.clear());
    }
  },
  zi = {
    " ": `Space`,
    arrowup: `↑`,
    arrowdown: `↓`,
    arrowleft: `←`,
    arrowright: `→`,
    escape: `Esc`,
    pageup: `PgUp`,
    pagedown: `PgDn`,
    insert: `Ins`,
    delete: `Del`,
    control: `Ctrl`,
    meta: `Cmd`,
  };
function Bi(e) {
  return e
    ? xi(e)
      ? `Shift + ${Bi(Si(e))}`
      : zi[e] ||
        (e.length === 1 ? e.toUpperCase() : e[0].toUpperCase() + e.slice(1))
    : ``;
}
function Vi(e, t) {
  return e === `realm` ? `near` : e === `near` && t ? `party` : `realm`;
}
var Hi = `Your party has ended, so that line went nowhere. Tab picks who hears it.`,
  Ui = `/s <words>, /w <name> <words> or /r <words>`,
  Wi = `/s <words>, /p <words>, /w <name> <words> or /r <words>`;
function Gi(e, t) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r.to && !r.system && r.playerId !== t) return r.name;
  }
  return null;
}
function Ki(e) {
  return !/\s/.test(e) && !e.startsWith(`"`)
    ? `/w ${e} `
    : `/w "${e.replace(/["\\]/g, (e) => `\\` + e)}" `;
}
function qi(e) {
  let t = ``;
  for (let n = 1; n < e.length; n++) {
    let r = e[n];
    if (r === `\\` && (e[n + 1] === `"` || e[n + 1] === `\\`)) t += e[++n];
    else if (r === `"`) return { name: t, after: e.slice(n + 1) };
    else t += r;
  }
  return { name: t, after: null };
}
var Ji = (e) => e.split(/\s+/).filter(Boolean).join(` `);
function Yi(e, t, n, r = {}) {
  let i = Xi(e.trim(), t, n, r);
  if (i && i.to !== `error` && `text` in i && i.text.length > 140) {
    let e = i.text.length - 140;
    return {
      to: `error`,
      text: `That's ${e} ${e === 1 ? `letter` : `letters`} too long (140 at most).`,
    };
  }
  return i;
}
function Xi(e, t, n, r) {
  if (!e || e === `/`) return null;
  if (
    (!e.startsWith(`/`) || e.startsWith(`//`)) &&
    t === `party` &&
    (r.ended || !r.inParty)
  )
    return { to: `error`, text: Hi };
  if (!e.startsWith(`/`)) return { to: t, text: e };
  if (e.startsWith(`//`)) return { to: t, text: e.slice(1) };
  let i = r.parties ? Wi : Ui,
    a = /^\/(\S+)\s*([\s\S]*)$/.exec(e);
  if (!a)
    return { to: `error`, text: `There's no command after the "/". Try ${i}.` };
  let o = a[1].toLowerCase(),
    s = a[2].trim(),
    c = {
      to: `error`,
      text: `You're not in a party. Invite a mage with /invite <name>, or from their menu.`,
    };
  switch (r.parties ? o : ``) {
    case `p`:
    case `party`:
      return r.inParty ? (s ? { to: `party`, text: s } : null) : c;
    case `invite`:
    case `inv`: {
      let e = Ji(s.startsWith(`"`) ? qi(s).name : s);
      return e
        ? { to: `invite`, name: e }
        : { to: `error`, text: `Invite whom? /invite <name>` };
    }
    case `leave`:
      return r.inParty ? { to: `leave` } : c;
  }
  switch (o) {
    case `s`:
    case `say`:
      return s ? { to: `near`, text: s } : null;
    case `realm`:
      return s ? { to: `realm`, text: s } : null;
    case `w`:
    case `whisper`: {
      let e, t;
      if (s.startsWith(`"`)) {
        let n = qi(s);
        ((e = Ji(n.name)), (t = n.after?.trim() ?? ``));
      } else {
        let n = s.search(/\s/);
        ((e = n < 0 ? s : s.slice(0, n)),
          (t = n < 0 ? `` : s.slice(n + 1).trim()));
      }
      return e
        ? t
          ? { to: `whisper`, name: e, text: t }
          : { to: `error`, text: `Whisper what to ${e}?` }
        : { to: `error`, text: `Whisper to whom? /w <name> <words>` };
    }
    case `r`:
    case `reply`:
      return n
        ? s
          ? { to: `whisper`, name: n, text: s }
          : { to: `error`, text: `Reply what to ${n}?` }
        : { to: `error`, text: `No one has whispered to you yet.` };
    default:
      return { to: `error`, text: `There's no /${o}. Try ${i}.` };
  }
}
var Zi = {
  enter: `Enter`,
  "shift-enter": `Shift + Enter`,
  click: `Click only`,
};
function Qi(e, t, n) {
  return !n && (e === `Enter` || t);
}
function $i(e) {
  return e.textFocus
    ? null
    : e.chat && !e.modified
      ? !e.repeat && (e.shift || !e.quiet)
        ? `open`
        : `swallow`
      : e.key === `Enter`
        ? `swallow`
        : e.key === `/` && !e.modified
          ? e.clickOnly
            ? `swallow`
            : `command`
          : null;
}
function ea(e) {
  return (
    !e.touch && !e.disabled && !e.onControl && !e.onScrollbar && !e.selecting
  );
}
function ta(e) {
  let t = e.filter(Boolean).map(Bi);
  return t.length ? `${t.join(`, `)} or a click` : `A click on the chat box`;
}
