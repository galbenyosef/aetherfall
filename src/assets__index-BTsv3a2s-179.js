// assets__index-BTsv3a2s 179 — error
// Lines 105016-105359 of readable/assets__index-BTsv3a2s.pretty.js (statement-aligned).
function AU(e) {
  for (
    var t, n = e.length, r = n % 3, i = [], a = 16383, o = 0, s = n - r;
    o < s;
    o += a
  )
    i.push(kU(e, o, o + a > s ? s : o + a));
  return (
    r === 1
      ? ((t = e[n - 1]), i.push(CU[t >> 2] + CU[(t << 4) & 63] + `==`))
      : r === 2 &&
        ((t = (e[n - 2] << 8) + e[n - 1]),
        i.push(CU[t >> 10] + CU[(t >> 4) & 63] + CU[(t << 2) & 63] + `=`)),
    i.join(``)
  );
}
function jU(e) {
  if (e === void 0) return {};
  if (!MU(e))
    throw Error(
      `The arguments to a Convex function must be an object. Received: ${e}`,
    );
  return e;
}
function MU(e) {
  let t = typeof e == `object`,
    n = Object.getPrototypeOf(e),
    r =
      n === null || n === Object.prototype || n?.constructor?.name === `Object`;
  return t && r;
}
var NU = !0,
  PU = BigInt(`-9223372036854775808`),
  FU = BigInt(`9223372036854775807`),
  IU = BigInt(`0`),
  LU = BigInt(`8`),
  RU = `This commit timestamp is unresolved: its value is assigned when the mutation commits. Read the document after the mutation completes to get its value.`,
  zU = class {
    [Symbol.toPrimitive](e) {
      if (e === `string`) return this.toString();
      throw Error(RU);
    }
    valueOf() {
      throw Error(RU);
    }
    toJSON() {
      throw Error(RU);
    }
    toString() {
      return `[unresolved commit timestamp]`;
    }
  };
new zU();
function BU(e) {
  return Number.isNaN(e) || !Number.isFinite(e) || Object.is(e, -0);
}
function VU(e) {
  e < IU && (e -= PU + PU);
  let t = e.toString(16);
  t.length % 2 == 1 && (t = `0` + t);
  let n = new Uint8Array(new ArrayBuffer(8)),
    r = 0;
  for (let i of t.match(/.{2}/g).reverse())
    (n.set([parseInt(i, 16)], r++), (e >>= LU));
  return AU(n);
}
function HU(e) {
  if (e < PU || FU < e)
    throw Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);
  let t = new ArrayBuffer(8);
  return (new DataView(t).setBigInt64(0, e, !0), AU(new Uint8Array(t)));
}
var UU = DataView.prototype.setBigInt64 ? HU : VU;
DataView.prototype.getBigInt64;
var WU = 1024;
function GU(e) {
  if (e.length > WU)
    throw Error(`Field name ${e} exceeds maximum field name length ${WU}.`);
  if (e.startsWith(`$`))
    throw Error(`Field name ${e} starts with a '$', which is reserved.`);
  for (let t = 0; t < e.length; t += 1) {
    let n = e.charCodeAt(t);
    if (n < 32 || n >= 127)
      throw Error(
        `Field name ${e} has invalid character '${e[t]}': Field names can only contain non-control ASCII characters`,
      );
  }
}
var KU = 16384;
function qU(e) {
  let t = JSON.stringify(e, (e, t) =>
    t === void 0 ? `undefined` : typeof t == `bigint` ? `${t.toString()}n` : t,
  );
  if (t.length > KU) {
    let e = 16370,
      n = t.codePointAt(e - 1);
    return (
      n !== void 0 && n > 65535 && --e,
      t.substring(0, e) + `[...truncated]`
    );
  }
  return t;
}
function JU(e, t, n, r) {
  if (e === void 0) {
    let e = n && ` (present at path ${n} in original object ${qU(t)})`;
    throw Error(
      `undefined is not a valid Convex value${e}. To learn about Convex's supported types, see https://docs.convex.dev/using/types.`,
    );
  }
  if (e === null) return e;
  if (typeof e == `bigint`) {
    if (e < PU || FU < e)
      throw Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);
    return { $integer: UU(e) };
  }
  if (typeof e == `number`) {
    if (BU(e)) {
      let t = new ArrayBuffer(8);
      return (
        new DataView(t).setFloat64(0, e, NU),
        { $float: AU(new Uint8Array(t)) }
      );
    }
    return e;
  }
  if (typeof e == `boolean` || typeof e == `string`) return e;
  if (e instanceof ArrayBuffer) return { $bytes: AU(new Uint8Array(e)) };
  if (e instanceof zU) return { $commitTs: null };
  if (Array.isArray(e)) return e.map((e, r) => JU(e, t, n + `[${r}]`, !1));
  if (e instanceof Set) throw Error(YU(n, `Set`, [...e], t));
  if (e instanceof Map) throw Error(YU(n, `Map`, [...e], t));
  if (!MU(e)) {
    let r = e?.constructor?.name,
      i = r ? `${r} ` : ``;
    throw Error(YU(n, i, e, t));
  }
  let i = {},
    a = Object.entries(e);
  a.sort(([e, t], [n, r]) => (e === n ? 0 : e < n ? -1 : 1));
  for (let [e, o] of a)
    o === void 0
      ? r && (GU(e), (i[e] = XU(o, t, n + `.${e}`)))
      : (GU(e), (i[e] = JU(o, t, n + `.${e}`, !1)));
  return i;
}
function YU(e, t, n, r) {
  return e
    ? `${t}${qU(n)} is not a supported Convex type (present at path ${e} in original object ${qU(r)}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`
    : `${t}${qU(n)} is not a supported Convex type.`;
}
function XU(e, t, n) {
  if (e === void 0) return { $undefined: null };
  if (t === void 0)
    throw Error(
      `Programming error. Current value is ${qU(e)} but original value is undefined`,
    );
  return JU(e, t, n, !1);
}
function ZU(e) {
  return JU(e, e, ``, !1);
}
var QU = Object.defineProperty,
  $U = (e, t, n) =>
    t in e
      ? QU(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  eW = (e, t, n) => $U(e, typeof t == `symbol` ? t : t + ``, n),
  tW,
  nW,
  rW = Symbol.for(`ConvexError`),
  iW = class extends ((nW = Error), (tW = rW), nW) {
    constructor(e) {
      (super(typeof e == `string` ? e : qU(e)),
        eW(this, `name`, `ConvexError`),
        eW(this, `data`),
        eW(this, tW, !0),
        (this.data = e));
    }
  },
  aW = Symbol.for(`functionName`),
  oW = Symbol.for(`toReferencePath`);
function sW(e) {
  return e[oW] ?? null;
}
function cW(e) {
  return e.startsWith(`function://`);
}
function lW(e) {
  let t;
  if (typeof e == `string`) t = cW(e) ? { functionHandle: e } : { name: e };
  else if (e[aW]) t = { name: e[aW] };
  else {
    let n = sW(e);
    if (!n) throw Error(`${e} is not a functionReference`);
    t = { reference: n };
  }
  return t;
}
function uW(e) {
  let t = lW(e);
  if (t.name === void 0)
    throw t.functionHandle === void 0
      ? t.reference === void 0
        ? Error(
            `Expected function reference like "api.file.func" or "internal.file.func", but received ${JSON.stringify(t)}`,
          )
        : Error(
            `Expected function reference in the current component like "api.file.func" or "internal.file.func", but received reference ${t.reference}`,
          )
      : Error(
          `Expected function reference like "api.file.func" or "internal.file.func", but received function handle ${t.functionHandle}`,
        );
  if (typeof e == `string`) return e;
  let n = e[aW];
  if (!n) throw Error(`${e} is not a functionReference`);
  return n;
}
function dW(e) {
  return { [aW]: e };
}
function fW(e = []) {
  return new Proxy(
    {},
    {
      get(t, n) {
        if (typeof n == `string`) return fW([...e, n]);
        if (n === aW) {
          if (e.length < 2) {
            let t = [`api`, ...e].join(`.`);
            throw Error(
              `API path is expected to be of the form \`api.moduleName.functionName\`. Found: \`${t}\``,
            );
          }
          let t = e.slice(0, -1).join(`/`),
            n = e[e.length - 1];
          return n === "default" ? t : t + `:` + n;
        }
        if (n === Symbol.toStringTag) return `FunctionReference`;
      },
    },
  );
}
var pW = fW();
function mW({ getCurrentValue: e, subscribe: t }) {
  let [n, r] = (0, v.useState)(() => ({
      getCurrentValue: e,
      subscribe: t,
      value: e(),
    })),
    i = n.value;
  return (
    (n.getCurrentValue !== e || n.subscribe !== t) &&
      ((i = e()), r({ getCurrentValue: e, subscribe: t, value: i })),
    (0, v.useEffect)(() => {
      let n = !1,
        i = () => {
          n ||
            r((n) => {
              if (n.getCurrentValue !== e || n.subscribe !== t) return n;
              let r = e();
              return n.value === r ? n : { ...n, value: r };
            });
        },
        a = t(i);
      return (
        i(),
        () => {
          ((n = !0), a());
        }
      );
    }, [e, t]),
    i
  );
}
if (v.default === void 0) throw Error(`Required dependency 'react' not found`);
function hW(e, t, n) {
  function r(r) {
    return (SW(r), t.mutation(e, r, { optimisticUpdate: n }));
  }
  return (
    (r.withOptimisticUpdate = function (r) {
      if (n !== void 0)
        throw Error(
          `Already specified optimistic update for mutation ${uW(e)}`,
        );
      return hW(e, t, r);
    }),
    r
  );
}
function gW(e, t) {
  return function (n) {
    return t.action(e, n);
  };
}
var _W = v.createContext(void 0);
function vW() {
  return (0, v.useContext)(_W);
}
function yW(e, ...t) {
  let n = t[0] === `skip`,
    r = t[0] === `skip` ? {} : jU(t[0]),
    i = typeof e == `string` ? dW(e) : e,
    a = uW(i),
    o = DW(
      (0, v.useMemo)(
        () => (n ? {} : { query: { query: i, args: r } }),
        [JSON.stringify(ZU(r)), a, n],
      ),
    ).query;
  if (o instanceof Error) throw o;
  return o;
}
function bW(e) {
  let t = typeof e == `string` ? dW(e) : e,
    n = (0, v.useContext)(_W);
  if (n === void 0)
    throw Error(
      "Could not find Convex client! `useMutation` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app",
    );
  return (0, v.useMemo)(() => hW(t, n), [n, uW(t)]);
}
function xW(e) {
  let t = (0, v.useContext)(_W),
    n = typeof e == `string` ? dW(e) : e;
  if (t === void 0)
    throw Error(
      "Could not find Convex client! `useAction` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app",
    );
  return (0, v.useMemo)(() => gW(n, t), [t, uW(n)]);
}
function SW(e) {
  if (
    typeof e == `object` &&
    e &&
    `bubbles` in e &&
    `persist` in e &&
    `isDefaultPrevented` in e
  )
    throw Error(
      "Convex function called with SyntheticEvent object. Did you use a Convex function as an event handler directly? Event handlers like onClick receive an event object as their first argument. These SyntheticEvent objects are not valid Convex values. Try wrapping the function like `const handler = () => myMutation();` and using `handler` in the event handler.",
    );
}
