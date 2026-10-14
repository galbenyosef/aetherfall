// index-BTsv3a2s 266 — current
// Lines 167003-167338 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function vue({
  messages: e,
  myId: t,
  myName: n,
  channels: r,
  parties: i,
  inParty: a,
  disabled: o,
  unfolded: s,
  took: c,
  onSend: l,
  whisper: u,
}) {
  let [d, f] = (0, v.useState)(``),
    p = (0, v.useRef)(null),
    m = (0, v.useRef)(null),
    h = (0, v.useRef)(o);
  h.current = o;
  let g = (0, v.useRef)(c);
  g.current = c;
  let _ = x5(),
    y = a5().map.chat,
    [b, x] = (0, v.useState)(`off`),
    [C, w] = (0, v.useState)(!1);
  ((0, v.useEffect)(() => {
    a || x((e) => (e === `on` ? `gone` : e));
  }, [a]),
    (0, v.useEffect)(() => {
      b === `gone` && !d.trim() && !C && x(`off`);
    }, [b, d, C]));
  let T = b === `gone` || (b === `on` && !a),
    E = r ? (b === `off` ? _.chatChannel : `party`) : `realm`,
    D = () => {
      let e = Vi(E, !!a && !T);
      (x(e === `party` ? `on` : `off`),
        yl({ chatChannel: e === `party` ? `realm` : e }));
    },
    O = (0, v.useRef)(-1 / 0),
    k = (0, v.useRef)(0);
  (0, v.useEffect)(() => {
    let e = (e) => {
      k.current++;
      let t = performance.now(),
        n = wG(e, `chat`),
        r = e.ctrlKey || e.metaKey || e.altKey,
        i = Qi(e.key, n, r);
      if (h.current || g.current?.(e)) {
        i && (O.current = t);
        return;
      }
      let a = document.activeElement,
        o = $i({
          key: e.key,
          chat: n,
          shift: e.shiftKey,
          modified: r,
          repeat: e.repeat,
          textFocus: dl(
            a?.tagName,
            a instanceof HTMLInputElement ? a.type : void 0,
          ),
          quiet: t - O.current < 500,
          clickOnly: !oG(`chat`),
        });
      if (o) {
        if ((e.preventDefault(), o === `swallow`)) {
          i && (O.current = t);
          return;
        }
        (o === `command` && f((e) => e || `/`), p.current?.focus());
      }
    };
    return (
      window.addEventListener(`keydown`, e),
      () => window.removeEventListener(`keydown`, e)
    );
  }, []);
  let ee = (0, v.useMemo)(() => la(e, _.chatNews, n), [e, _.chatNews, n]),
    te = ee.length ? ee[ee.length - 1] : null,
    ne = te?._id ?? null,
    re = (0, v.useRef)(!0),
    ie = () => {
      let e = m.current;
      e && (re.current = e.scrollHeight - e.scrollTop - e.clientHeight < 8);
    };
  (0, v.useEffect)(() => {
    ((re.current || te?.playerId === t) &&
      m.current?.scrollTo({ top: m.current.scrollHeight }),
      te?.playerId === t && (re.current = !0));
  }, [ne, _.chatNews]);
  let [ae, oe] = (0, v.useState)(() => performance.now()),
    [se, ce] = (0, v.useState)(!1),
    [le, ue] = (0, v.useState)(!1),
    de = () => oe(performance.now());
  (0, v.useEffect)(() => {
    let e = performance.now(),
      t = da(e, ae, C, se, _.chatDim);
    if ((ue(t), t || C || se || !_.chatDim)) return;
    let n = window.setTimeout(() => ue(!0), ae + ua - e);
    return () => window.clearTimeout(n);
  }, [ae, C, se, _.chatDim]);
  let fe = (0, v.useMemo)(() => {
    for (let t = e.length - 1; t >= 0; t--)
      if (ia(e[t]) !== `news`) return e[t]._id;
    return null;
  }, [e]);
  (0, v.useEffect)(() => {
    fe && de();
  }, [fe]);
  let pe = (0, v.useRef)(!1);
  ((0, v.useLayoutEffect)(() => {
    s && (oe(performance.now()), ue(!1), (pe.current = !0));
  }, [s]),
    (0, v.useLayoutEffect)(() => {
      pe.current &&
        !le &&
        ((pe.current = !1),
        m.current?.scrollTo({ top: m.current.scrollHeight }));
    }));
  let me = na(y, E, r, GG),
    he = me.join(`
`),
    [ge, _e] = (0, v.useState)(me[0]);
  (0, v.useLayoutEffect)(() => {
    let e = p.current,
      t = he.split(`
`);
    if (!e || t.length < 2) {
      _e(t[0]);
      return;
    }
    let n = !0,
      r = () => n && _e(ra(t, yue(e)));
    r();
    let i = new ResizeObserver(r);
    return (
      i.observe(e),
      document.fonts?.ready.then(r),
      () => {
        ((n = !1), i.disconnect());
      }
    );
  }, [he, _.textSize, _.readableFont]);
  let ve = (e) => {
      (f((t) => Ki(e) + (t.startsWith(`/`) ? `` : t.trimStart())),
        p.current?.focus());
    },
    ye = (0, v.useRef)(0);
  (0, v.useEffect)(() => {
    u && u.n !== ye.current && ((ye.current = u.n), ve(u.name));
  });
  let be = (e, t, n) =>
    n && r
      ? (0, Q.jsxs)(`b`, {
          className: `who`,
          style: { color: t },
          title: `Whisper to ${e}`,
          onMouseDown: (t) => {
            (t.preventDefault(), ve(e));
          },
          children: [e, `:`],
        })
      : (0, Q.jsxs)(`b`, { style: { color: t }, children: [e, `:`] });
  return (0, Q.jsxs)(`div`, {
    className: `chat panel${le ? ` idle` : ``}`,
    onPointerDown: de,
    onPointerEnter: (e) => {
      e.pointerType === `mouse` && ce(!0);
    },
    onPointerLeave: (e) => {
      e.pointerType === `mouse` && (ce(!1), de());
    },
    onClick: (e) => {
      let t = e.target,
        n = m.current;
      ea({
        touch: GG,
        disabled: h.current,
        onControl: !!t.closest(`button, input, .who`),
        onScrollbar: !!n && t === n && e.nativeEvent.offsetX >= n.clientWidth,
        selecting: window.getSelection()?.isCollapsed === !1,
      }) && p.current?.focus();
    },
    children: [
      (0, Q.jsx)(`div`, {
        className: `chat-log`,
        ref: m,
        onScroll: ie,
        children: ee.map((e) => {
          let n = ia(e);
          if (e.system)
            return (0, Q.jsxs)(
              `div`,
              {
                className:
                  n === `whisper`
                    ? `sys whisper`
                    : n === `party`
                      ? `sys party`
                      : `sys`,
                children: [n === `party` ? `◆` : `✦`, ` `, e.text],
              },
              e._id,
            );
          let r = S[e.school]?.colors.trim,
            i = e.playerId === t;
          return e.to
            ? (0, Q.jsxs)(
                `div`,
                {
                  className: `whisper`,
                  children: [
                    (0, Q.jsx)(`span`, {
                      className: `chan`,
                      children: i ? `to` : `from`,
                    }),
                    i ? be(e.to, void 0, !0) : be(e.name, r, !0),
                    ` `,
                    e.text,
                  ],
                },
                e._id,
              )
            : (0, Q.jsxs)(
                `div`,
                {
                  className: n,
                  children: [
                    e.near &&
                      (0, Q.jsx)(`span`, {
                        className: `chan`,
                        children: `near`,
                      }),
                    n === `party` &&
                      (0, Q.jsx)(`span`, {
                        className: `chan`,
                        children: `party`,
                      }),
                    be(e.name, r, !i),
                    ` `,
                    e.text,
                  ],
                },
                e._id,
              );
        }),
      }),
      (0, Q.jsxs)(`form`, {
        onSubmit: (n) => {
          n.preventDefault();
          let r = Yi(d, E, Gi(e, t), { parties: i, inParty: a, ended: T });
          if (r?.to === `error`) {
            l(r);
            return;
          }
          if (r) {
            let e = d;
            ((k.current = 0),
              Promise.resolve(l(r)).then((t) => {
                if (t !== !1) return;
                f((t) => t || e);
                let n = document.activeElement;
                !k.current &&
                  !h.current &&
                  !dl(
                    n?.tagName,
                    n instanceof HTMLInputElement ? n.type : void 0,
                  ) &&
                  p.current?.focus();
              }));
          }
          (f(``), p.current?.blur());
        },
        children: [
          r &&
            (0, Q.jsx)(`button`, {
              type: `button`,
              className: `chat-chan ${E}${T ? ` ended` : ``}`,
              title: T
                ? `Your party has ended: who hears you? (Tab)`
                : `Who hears you (Tab)`,
              onMouseDown: (e) => e.preventDefault(),
              onClick: D,
              children:
                E === `near` ? `Near` : E === `party` ? `Party` : `Realm`,
            }),
          (0, Q.jsx)(`input`, {
            ref: p,
            value: d,
            maxLength: 180,
            placeholder: ge,
            onChange: (e) => f(e.target.value),
            onFocus: () => w(!0),
            onBlur: () => {
              (w(!1), de());
            },
            onKeyDown: (e) => {
              e.key === `Escape`
                ? (d === `/` && f(``), p.current?.blur())
                : e.key === `Tab` &&
                  r &&
                  !e.ctrlKey &&
                  !e.metaKey &&
                  !e.altKey &&
                  (e.preventDefault(), D());
            },
          }),
        ],
      }),
    ],
  });
}
var R7;
function yue(e) {
  let t = getComputedStyle(e),
    n = e.clientWidth - parseFloat(t.paddingLeft) - parseFloat(t.paddingRight);
  R7 ??= document.createElement(`canvas`).getContext(`2d`);
  let r = R7;
  return !r || n <= 0
    ? () => n > 0
    : ((r.font = `${t.fontStyle} ${t.fontWeight} ${t.fontSize} ${t.fontFamily}`),
      (e) => r.measureText(e).width <= n);
}
function z7({ c: e, scale: t = 2, className: n }) {
  let r = (0, v.useMemo)(() => e.toDataURL(), [e]);
  return (0, Q.jsx)(`img`, {
    src: r,
    width: e.width * t,
    height: e.height * t,
    className: `pixel ${n ?? ``}`,
    alt: ``,
  });
}
var B7 = (e) =>
    `${Math.floor(e / 60)}:${String(Math.max(0, Math.floor(e % 60))).padStart(2, `0`)}`,
  bue = (e) => Go[e]?.name ?? e;
