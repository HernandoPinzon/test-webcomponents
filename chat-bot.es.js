var Xw = Object.defineProperty;
var Qw = (t, r, a) => r in t ? Xw(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a;
var zc = (t, r, a) => Qw(t, typeof r != "symbol" ? r + "" : r, a);
function Zw(t, r) {
  for (var a = 0; a < r.length; a++) {
    const i = r[a];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const u in i)
        if (u !== "default" && !(u in t)) {
          const s = Object.getOwnPropertyDescriptor(i, u);
          s && Object.defineProperty(t, u, s.get ? s : {
            enumerable: !0,
            get: () => i[u]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
function ll(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Mc = { exports: {} }, li = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sg;
function Kw() {
  if (Sg) return li;
  Sg = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function a(i, u, s) {
    var c = null;
    if (s !== void 0 && (c = "" + s), u.key !== void 0 && (c = "" + u.key), "key" in u) {
      s = {};
      for (var d in u)
        d !== "key" && (s[d] = u[d]);
    } else s = u;
    return u = s.ref, {
      $$typeof: t,
      type: i,
      key: c,
      ref: u !== void 0 ? u : null,
      props: s
    };
  }
  return li.Fragment = r, li.jsx = a, li.jsxs = a, li;
}
var Eg;
function Jw() {
  return Eg || (Eg = 1, Mc.exports = Kw()), Mc.exports;
}
var _ = Jw(), Lc = { exports: {} }, ai = {}, jc = { exports: {} }, Uc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kg;
function $w() {
  return kg || (kg = 1, function(t) {
    function r(B, $) {
      var G = B.length;
      B.push($);
      e: for (; 0 < G; ) {
        var ve = G - 1 >>> 1, w = B[ve];
        if (0 < u(w, $))
          B[ve] = $, B[G] = w, G = ve;
        else break e;
      }
    }
    function a(B) {
      return B.length === 0 ? null : B[0];
    }
    function i(B) {
      if (B.length === 0) return null;
      var $ = B[0], G = B.pop();
      if (G !== $) {
        B[0] = G;
        e: for (var ve = 0, w = B.length, X = w >>> 1; ve < X; ) {
          var ae = 2 * (ve + 1) - 1, E = B[ae], ue = ae + 1, ge = B[ue];
          if (0 > u(E, G))
            ue < w && 0 > u(ge, E) ? (B[ve] = ge, B[ue] = G, ve = ue) : (B[ve] = E, B[ae] = G, ve = ae);
          else if (ue < w && 0 > u(ge, G))
            B[ve] = ge, B[ue] = G, ve = ue;
          else break e;
        }
      }
      return $;
    }
    function u(B, $) {
      var G = B.sortIndex - $.sortIndex;
      return G !== 0 ? G : B.id - $.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var s = performance;
      t.unstable_now = function() {
        return s.now();
      };
    } else {
      var c = Date, d = c.now();
      t.unstable_now = function() {
        return c.now() - d;
      };
    }
    var m = [], h = [], g = 1, y = null, b = 3, x = !1, k = !1, C = !1, z = !1, T = typeof setTimeout == "function" ? setTimeout : null, Y = typeof clearTimeout == "function" ? clearTimeout : null, j = typeof setImmediate < "u" ? setImmediate : null;
    function Q(B) {
      for (var $ = a(h); $ !== null; ) {
        if ($.callback === null) i(h);
        else if ($.startTime <= B)
          i(h), $.sortIndex = $.expirationTime, r(m, $);
        else break;
        $ = a(h);
      }
    }
    function I(B) {
      if (C = !1, Q(B), !k)
        if (a(m) !== null)
          k = !0, R || (R = !0, te());
        else {
          var $ = a(h);
          $ !== null && oe(I, $.startTime - B);
        }
    }
    var R = !1, F = -1, q = 5, Z = -1;
    function O() {
      return z ? !0 : !(t.unstable_now() - Z < q);
    }
    function ne() {
      if (z = !1, R) {
        var B = t.unstable_now();
        Z = B;
        var $ = !0;
        try {
          e: {
            k = !1, C && (C = !1, Y(F), F = -1), x = !0;
            var G = b;
            try {
              t: {
                for (Q(B), y = a(m); y !== null && !(y.expirationTime > B && O()); ) {
                  var ve = y.callback;
                  if (typeof ve == "function") {
                    y.callback = null, b = y.priorityLevel;
                    var w = ve(
                      y.expirationTime <= B
                    );
                    if (B = t.unstable_now(), typeof w == "function") {
                      y.callback = w, Q(B), $ = !0;
                      break t;
                    }
                    y === a(m) && i(m), Q(B);
                  } else i(m);
                  y = a(m);
                }
                if (y !== null) $ = !0;
                else {
                  var X = a(h);
                  X !== null && oe(
                    I,
                    X.startTime - B
                  ), $ = !1;
                }
              }
              break e;
            } finally {
              y = null, b = G, x = !1;
            }
            $ = void 0;
          }
        } finally {
          $ ? te() : R = !1;
        }
      }
    }
    var te;
    if (typeof j == "function")
      te = function() {
        j(ne);
      };
    else if (typeof MessageChannel < "u") {
      var re = new MessageChannel(), le = re.port2;
      re.port1.onmessage = ne, te = function() {
        le.postMessage(null);
      };
    } else
      te = function() {
        T(ne, 0);
      };
    function oe(B, $) {
      F = T(function() {
        B(t.unstable_now());
      }, $);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, t.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : q = 0 < B ? Math.floor(1e3 / B) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, t.unstable_next = function(B) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = b;
      }
      var G = b;
      b = $;
      try {
        return B();
      } finally {
        b = G;
      }
    }, t.unstable_requestPaint = function() {
      z = !0;
    }, t.unstable_runWithPriority = function(B, $) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var G = b;
      b = B;
      try {
        return $();
      } finally {
        b = G;
      }
    }, t.unstable_scheduleCallback = function(B, $, G) {
      var ve = t.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? ve + G : ve) : G = ve, B) {
        case 1:
          var w = -1;
          break;
        case 2:
          w = 250;
          break;
        case 5:
          w = 1073741823;
          break;
        case 4:
          w = 1e4;
          break;
        default:
          w = 5e3;
      }
      return w = G + w, B = {
        id: g++,
        callback: $,
        priorityLevel: B,
        startTime: G,
        expirationTime: w,
        sortIndex: -1
      }, G > ve ? (B.sortIndex = G, r(h, B), a(m) === null && B === a(h) && (C ? (Y(F), F = -1) : C = !0, oe(I, G - ve))) : (B.sortIndex = w, r(m, B), k || x || (k = !0, R || (R = !0, te()))), B;
    }, t.unstable_shouldYield = O, t.unstable_wrapCallback = function(B) {
      var $ = b;
      return function() {
        var G = b;
        b = $;
        try {
          return B.apply(this, arguments);
        } finally {
          b = G;
        }
      };
    };
  }(Uc)), Uc;
}
var Cg;
function Ww() {
  return Cg || (Cg = 1, jc.exports = $w()), jc.exports;
}
var Bc = { exports: {} }, _e = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ag;
function eS() {
  if (Ag) return _e;
  Ag = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.iterator;
  function b(w) {
    return w === null || typeof w != "object" ? null : (w = y && w[y] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var x = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, k = Object.assign, C = {};
  function z(w, X, ae) {
    this.props = w, this.context = X, this.refs = C, this.updater = ae || x;
  }
  z.prototype.isReactComponent = {}, z.prototype.setState = function(w, X) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, w, X, "setState");
  }, z.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function T() {
  }
  T.prototype = z.prototype;
  function Y(w, X, ae) {
    this.props = w, this.context = X, this.refs = C, this.updater = ae || x;
  }
  var j = Y.prototype = new T();
  j.constructor = Y, k(j, z.prototype), j.isPureReactComponent = !0;
  var Q = Array.isArray, I = { H: null, A: null, T: null, S: null, V: null }, R = Object.prototype.hasOwnProperty;
  function F(w, X, ae, E, ue, ge) {
    return ae = ge.ref, {
      $$typeof: t,
      type: w,
      key: X,
      ref: ae !== void 0 ? ae : null,
      props: ge
    };
  }
  function q(w, X) {
    return F(
      w.type,
      X,
      void 0,
      void 0,
      void 0,
      w.props
    );
  }
  function Z(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }
  function O(w) {
    var X = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(ae) {
      return X[ae];
    });
  }
  var ne = /\/+/g;
  function te(w, X) {
    return typeof w == "object" && w !== null && w.key != null ? O("" + w.key) : X.toString(36);
  }
  function re() {
  }
  function le(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (typeof w.status == "string" ? w.then(re, re) : (w.status = "pending", w.then(
          function(X) {
            w.status === "pending" && (w.status = "fulfilled", w.value = X);
          },
          function(X) {
            w.status === "pending" && (w.status = "rejected", w.reason = X);
          }
        )), w.status) {
          case "fulfilled":
            return w.value;
          case "rejected":
            throw w.reason;
        }
    }
    throw w;
  }
  function oe(w, X, ae, E, ue) {
    var ge = typeof w;
    (ge === "undefined" || ge === "boolean") && (w = null);
    var se = !1;
    if (w === null) se = !0;
    else
      switch (ge) {
        case "bigint":
        case "string":
        case "number":
          se = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case t:
            case r:
              se = !0;
              break;
            case g:
              return se = w._init, oe(
                se(w._payload),
                X,
                ae,
                E,
                ue
              );
          }
      }
    if (se)
      return ue = ue(w), se = E === "" ? "." + te(w, 0) : E, Q(ue) ? (ae = "", se != null && (ae = se.replace(ne, "$&/") + "/"), oe(ue, X, ae, "", function(tt) {
        return tt;
      })) : ue != null && (Z(ue) && (ue = q(
        ue,
        ae + (ue.key == null || w && w.key === ue.key ? "" : ("" + ue.key).replace(
          ne,
          "$&/"
        ) + "/") + se
      )), X.push(ue)), 1;
    se = 0;
    var ke = E === "" ? "." : E + ":";
    if (Q(w))
      for (var Te = 0; Te < w.length; Te++)
        E = w[Te], ge = ke + te(E, Te), se += oe(
          E,
          X,
          ae,
          ge,
          ue
        );
    else if (Te = b(w), typeof Te == "function")
      for (w = Te.call(w), Te = 0; !(E = w.next()).done; )
        E = E.value, ge = ke + te(E, Te++), se += oe(
          E,
          X,
          ae,
          ge,
          ue
        );
    else if (ge === "object") {
      if (typeof w.then == "function")
        return oe(
          le(w),
          X,
          ae,
          E,
          ue
        );
      throw X = String(w), Error(
        "Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return se;
  }
  function B(w, X, ae) {
    if (w == null) return w;
    var E = [], ue = 0;
    return oe(w, E, "", "", function(ge) {
      return X.call(ae, ge, ue++);
    }), E;
  }
  function $(w) {
    if (w._status === -1) {
      var X = w._result;
      X = X(), X.then(
        function(ae) {
          (w._status === 0 || w._status === -1) && (w._status = 1, w._result = ae);
        },
        function(ae) {
          (w._status === 0 || w._status === -1) && (w._status = 2, w._result = ae);
        }
      ), w._status === -1 && (w._status = 0, w._result = X);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var G = typeof reportError == "function" ? reportError : function(w) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var X = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
        error: w
      });
      if (!window.dispatchEvent(X)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", w);
      return;
    }
    console.error(w);
  };
  function ve() {
  }
  return _e.Children = {
    map: B,
    forEach: function(w, X, ae) {
      B(
        w,
        function() {
          X.apply(this, arguments);
        },
        ae
      );
    },
    count: function(w) {
      var X = 0;
      return B(w, function() {
        X++;
      }), X;
    },
    toArray: function(w) {
      return B(w, function(X) {
        return X;
      }) || [];
    },
    only: function(w) {
      if (!Z(w))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return w;
    }
  }, _e.Component = z, _e.Fragment = a, _e.Profiler = u, _e.PureComponent = Y, _e.StrictMode = i, _e.Suspense = m, _e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, _e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(w) {
      return I.H.useMemoCache(w);
    }
  }, _e.cache = function(w) {
    return function() {
      return w.apply(null, arguments);
    };
  }, _e.cloneElement = function(w, X, ae) {
    if (w == null)
      throw Error(
        "The argument must be a React element, but you passed " + w + "."
      );
    var E = k({}, w.props), ue = w.key, ge = void 0;
    if (X != null)
      for (se in X.ref !== void 0 && (ge = void 0), X.key !== void 0 && (ue = "" + X.key), X)
        !R.call(X, se) || se === "key" || se === "__self" || se === "__source" || se === "ref" && X.ref === void 0 || (E[se] = X[se]);
    var se = arguments.length - 2;
    if (se === 1) E.children = ae;
    else if (1 < se) {
      for (var ke = Array(se), Te = 0; Te < se; Te++)
        ke[Te] = arguments[Te + 2];
      E.children = ke;
    }
    return F(w.type, ue, void 0, void 0, ge, E);
  }, _e.createContext = function(w) {
    return w = {
      $$typeof: c,
      _currentValue: w,
      _currentValue2: w,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, w.Provider = w, w.Consumer = {
      $$typeof: s,
      _context: w
    }, w;
  }, _e.createElement = function(w, X, ae) {
    var E, ue = {}, ge = null;
    if (X != null)
      for (E in X.key !== void 0 && (ge = "" + X.key), X)
        R.call(X, E) && E !== "key" && E !== "__self" && E !== "__source" && (ue[E] = X[E]);
    var se = arguments.length - 2;
    if (se === 1) ue.children = ae;
    else if (1 < se) {
      for (var ke = Array(se), Te = 0; Te < se; Te++)
        ke[Te] = arguments[Te + 2];
      ue.children = ke;
    }
    if (w && w.defaultProps)
      for (E in se = w.defaultProps, se)
        ue[E] === void 0 && (ue[E] = se[E]);
    return F(w, ge, void 0, void 0, null, ue);
  }, _e.createRef = function() {
    return { current: null };
  }, _e.forwardRef = function(w) {
    return { $$typeof: d, render: w };
  }, _e.isValidElement = Z, _e.lazy = function(w) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: w },
      _init: $
    };
  }, _e.memo = function(w, X) {
    return {
      $$typeof: h,
      type: w,
      compare: X === void 0 ? null : X
    };
  }, _e.startTransition = function(w) {
    var X = I.T, ae = {};
    I.T = ae;
    try {
      var E = w(), ue = I.S;
      ue !== null && ue(ae, E), typeof E == "object" && E !== null && typeof E.then == "function" && E.then(ve, G);
    } catch (ge) {
      G(ge);
    } finally {
      I.T = X;
    }
  }, _e.unstable_useCacheRefresh = function() {
    return I.H.useCacheRefresh();
  }, _e.use = function(w) {
    return I.H.use(w);
  }, _e.useActionState = function(w, X, ae) {
    return I.H.useActionState(w, X, ae);
  }, _e.useCallback = function(w, X) {
    return I.H.useCallback(w, X);
  }, _e.useContext = function(w) {
    return I.H.useContext(w);
  }, _e.useDebugValue = function() {
  }, _e.useDeferredValue = function(w, X) {
    return I.H.useDeferredValue(w, X);
  }, _e.useEffect = function(w, X, ae) {
    var E = I.H;
    if (typeof ae == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return E.useEffect(w, X);
  }, _e.useId = function() {
    return I.H.useId();
  }, _e.useImperativeHandle = function(w, X, ae) {
    return I.H.useImperativeHandle(w, X, ae);
  }, _e.useInsertionEffect = function(w, X) {
    return I.H.useInsertionEffect(w, X);
  }, _e.useLayoutEffect = function(w, X) {
    return I.H.useLayoutEffect(w, X);
  }, _e.useMemo = function(w, X) {
    return I.H.useMemo(w, X);
  }, _e.useOptimistic = function(w, X) {
    return I.H.useOptimistic(w, X);
  }, _e.useReducer = function(w, X, ae) {
    return I.H.useReducer(w, X, ae);
  }, _e.useRef = function(w) {
    return I.H.useRef(w);
  }, _e.useState = function(w) {
    return I.H.useState(w);
  }, _e.useSyncExternalStore = function(w, X, ae) {
    return I.H.useSyncExternalStore(
      w,
      X,
      ae
    );
  }, _e.useTransition = function() {
    return I.H.useTransition();
  }, _e.version = "19.1.0", _e;
}
var Tg;
function uu() {
  return Tg || (Tg = 1, Bc.exports = eS()), Bc.exports;
}
var Ic = { exports: {} }, Ot = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _g;
function tS() {
  if (_g) return Ot;
  _g = 1;
  var t = uu();
  function r(m) {
    var h = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        h += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + m + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function a() {
  }
  var i = {
    d: {
      f: a,
      r: function() {
        throw Error(r(522));
      },
      D: a,
      C: a,
      L: a,
      m: a,
      X: a,
      S: a,
      M: a
    },
    p: 0,
    findDOMNode: null
  }, u = Symbol.for("react.portal");
  function s(m, h, g) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: y == null ? null : "" + y,
      children: m,
      containerInfo: h,
      implementation: g
    };
  }
  var c = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(m, h) {
    if (m === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return Ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, Ot.createPortal = function(m, h) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(r(299));
    return s(m, h, null, g);
  }, Ot.flushSync = function(m) {
    var h = c.T, g = i.p;
    try {
      if (c.T = null, i.p = 2, m) return m();
    } finally {
      c.T = h, i.p = g, i.d.f();
    }
  }, Ot.preconnect = function(m, h) {
    typeof m == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, i.d.C(m, h));
  }, Ot.prefetchDNS = function(m) {
    typeof m == "string" && i.d.D(m);
  }, Ot.preinit = function(m, h) {
    if (typeof m == "string" && h && typeof h.as == "string") {
      var g = h.as, y = d(g, h.crossOrigin), b = typeof h.integrity == "string" ? h.integrity : void 0, x = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      g === "style" ? i.d.S(
        m,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: y,
          integrity: b,
          fetchPriority: x
        }
      ) : g === "script" && i.d.X(m, {
        crossOrigin: y,
        integrity: b,
        fetchPriority: x,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, Ot.preinitModule = function(m, h) {
    if (typeof m == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var g = d(
            h.as,
            h.crossOrigin
          );
          i.d.M(m, {
            crossOrigin: g,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && i.d.M(m);
  }, Ot.preload = function(m, h) {
    if (typeof m == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var g = h.as, y = d(g, h.crossOrigin);
      i.d.L(m, g, {
        crossOrigin: y,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, Ot.preloadModule = function(m, h) {
    if (typeof m == "string")
      if (h) {
        var g = d(h.as, h.crossOrigin);
        i.d.m(m, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: g,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else i.d.m(m);
  }, Ot.requestFormReset = function(m) {
    i.d.r(m);
  }, Ot.unstable_batchedUpdates = function(m, h) {
    return m(h);
  }, Ot.useFormState = function(m, h, g) {
    return c.H.useFormState(m, h, g);
  }, Ot.useFormStatus = function() {
    return c.H.useHostTransitionStatus();
  }, Ot.version = "19.1.0", Ot;
}
var Rg;
function a0() {
  if (Rg) return Ic.exports;
  Rg = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Ic.exports = tS(), Ic.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dg;
function nS() {
  if (Dg) return ai;
  Dg = 1;
  var t = Ww(), r = uu(), a = a0();
  function i(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        n += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function s(e) {
    var n = e, l = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, (n.flags & 4098) !== 0 && (l = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? l : null;
  }
  function c(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function d(e) {
    if (s(e) !== e)
      throw Error(i(188));
  }
  function m(e) {
    var n = e.alternate;
    if (!n) {
      if (n = s(e), n === null) throw Error(i(188));
      return n !== e ? null : e;
    }
    for (var l = e, o = n; ; ) {
      var f = l.return;
      if (f === null) break;
      var p = f.alternate;
      if (p === null) {
        if (o = f.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (f.child === p.child) {
        for (p = f.child; p; ) {
          if (p === l) return d(f), e;
          if (p === o) return d(f), n;
          p = p.sibling;
        }
        throw Error(i(188));
      }
      if (l.return !== o.return) l = f, o = p;
      else {
        for (var v = !1, S = f.child; S; ) {
          if (S === l) {
            v = !0, l = f, o = p;
            break;
          }
          if (S === o) {
            v = !0, o = f, l = p;
            break;
          }
          S = S.sibling;
        }
        if (!v) {
          for (S = p.child; S; ) {
            if (S === l) {
              v = !0, l = p, o = f;
              break;
            }
            if (S === o) {
              v = !0, o = p, l = f;
              break;
            }
            S = S.sibling;
          }
          if (!v) throw Error(i(189));
        }
      }
      if (l.alternate !== o) throw Error(i(190));
    }
    if (l.tag !== 3) throw Error(i(188));
    return l.stateNode.current === l ? e : n;
  }
  function h(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = h(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign, y = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), Y = Symbol.for("react.consumer"), j = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), O = Symbol.for("react.memo_cache_sentinel"), ne = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object" ? null : (e = ne && e[ne] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var re = Symbol.for("react.client.reference");
  function le(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === re ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case k:
        return "Fragment";
      case z:
        return "Profiler";
      case C:
        return "StrictMode";
      case I:
        return "Suspense";
      case R:
        return "SuspenseList";
      case Z:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case x:
          return "Portal";
        case j:
          return (e.displayName || "Context") + ".Provider";
        case Y:
          return (e._context.displayName || "Context") + ".Consumer";
        case Q:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case F:
          return n = e.displayName || null, n !== null ? n : le(e.type) || "Memo";
        case q:
          n = e._payload, e = e._init;
          try {
            return le(e(n));
          } catch {
          }
      }
    return null;
  }
  var oe = Array.isArray, B = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ve = [], w = -1;
  function X(e) {
    return { current: e };
  }
  function ae(e) {
    0 > w || (e.current = ve[w], ve[w] = null, w--);
  }
  function E(e, n) {
    w++, ve[w] = e.current, e.current = n;
  }
  var ue = X(null), ge = X(null), se = X(null), ke = X(null);
  function Te(e, n) {
    switch (E(se, n), E(ge, e), E(ue, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Km(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = Km(n), e = Jm(n, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ae(ue), E(ue, e);
  }
  function tt() {
    ae(ue), ae(ge), ae(se);
  }
  function rt(e) {
    e.memoizedState !== null && E(ke, e);
    var n = ue.current, l = Jm(n, e.type);
    n !== l && (E(ge, e), E(ue, l));
  }
  function vt(e) {
    ge.current === e && (ae(ue), ae(ge)), ke.current === e && (ae(ke), Wa._currentValue = G);
  }
  var Ce = Object.prototype.hasOwnProperty, Se = t.unstable_scheduleCallback, be = t.unstable_cancelCallback, ze = t.unstable_shouldYield, Ae = t.unstable_requestPaint, Ve = t.unstable_now, kt = t.unstable_getCurrentPriorityLevel, Fe = t.unstable_ImmediatePriority, Pe = t.unstable_UserBlockingPriority, ct = t.unstable_NormalPriority, rr = t.unstable_LowPriority, jn = t.unstable_IdlePriority, lr = t.log, pt = t.unstable_setDisableYieldValue, P = null, ee = null;
  function he(e) {
    if (typeof lr == "function" && pt(e), ee && typeof ee.setStrictMode == "function")
      try {
        ee.setStrictMode(P, e);
      } catch {
      }
  }
  var me = Math.clz32 ? Math.clz32 : an, He = Math.log, Rt = Math.LN2;
  function an(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (He(e) / Rt | 0) | 0;
  }
  var Ht = 256, Cn = 4194304;
  function Qt(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function bt(e, n, l) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var f = 0, p = e.suspendedLanes, v = e.pingedLanes;
    e = e.warmLanes;
    var S = o & 134217727;
    return S !== 0 ? (o = S & ~p, o !== 0 ? f = Qt(o) : (v &= S, v !== 0 ? f = Qt(v) : l || (l = S & ~e, l !== 0 && (f = Qt(l))))) : (S = o & ~p, S !== 0 ? f = Qt(S) : v !== 0 ? f = Qt(v) : l || (l = o & ~e, l !== 0 && (f = Qt(l)))), f === 0 ? 0 : n !== 0 && n !== f && (n & p) === 0 && (p = f & -f, l = n & -n, p >= l || p === 32 && (l & 4194048) !== 0) ? n : f;
  }
  function on(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function bn(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function zd() {
    var e = Ht;
    return Ht <<= 1, (Ht & 4194048) === 0 && (Ht = 256), e;
  }
  function Md() {
    var e = Cn;
    return Cn <<= 1, (Cn & 62914560) === 0 && (Cn = 4194304), e;
  }
  function Su(e) {
    for (var n = [], l = 0; 31 > l; l++) n.push(e);
    return n;
  }
  function sa(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function L1(e, n, l, o, f, p) {
    var v = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var S = e.entanglements, D = e.expirationTimes, U = e.hiddenUpdates;
    for (l = v & ~l; 0 < l; ) {
      var K = 31 - me(l), W = 1 << K;
      S[K] = 0, D[K] = -1;
      var H = U[K];
      if (H !== null)
        for (U[K] = null, K = 0; K < H.length; K++) {
          var V = H[K];
          V !== null && (V.lane &= -536870913);
        }
      l &= ~W;
    }
    o !== 0 && Ld(e, o, 0), p !== 0 && f === 0 && e.tag !== 0 && (e.suspendedLanes |= p & ~(v & ~n));
  }
  function Ld(e, n, l) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var o = 31 - me(n);
    e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | l & 4194090;
  }
  function jd(e, n) {
    var l = e.entangledLanes |= n;
    for (e = e.entanglements; l; ) {
      var o = 31 - me(l), f = 1 << o;
      f & n | e[o] & n && (e[o] |= n), l &= ~f;
    }
  }
  function Eu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function ku(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ud() {
    var e = $.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : gg(e.type));
  }
  function j1(e, n) {
    var l = $.p;
    try {
      return $.p = e, n();
    } finally {
      $.p = l;
    }
  }
  var ar = Math.random().toString(36).slice(2), Dt = "__reactFiber$" + ar, qt = "__reactProps$" + ar, il = "__reactContainer$" + ar, Cu = "__reactEvents$" + ar, U1 = "__reactListeners$" + ar, B1 = "__reactHandles$" + ar, Bd = "__reactResources$" + ar, ca = "__reactMarker$" + ar;
  function Au(e) {
    delete e[Dt], delete e[qt], delete e[Cu], delete e[U1], delete e[B1];
  }
  function ol(e) {
    var n = e[Dt];
    if (n) return n;
    for (var l = e.parentNode; l; ) {
      if (n = l[il] || l[Dt]) {
        if (l = n.alternate, n.child !== null || l !== null && l.child !== null)
          for (e = tg(e); e !== null; ) {
            if (l = e[Dt]) return l;
            e = tg(e);
          }
        return n;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function ul(e) {
    if (e = e[Dt] || e[il]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function fa(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(i(33));
  }
  function sl(e) {
    var n = e[Bd];
    return n || (n = e[Bd] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function xt(e) {
    e[ca] = !0;
  }
  var Id = /* @__PURE__ */ new Set(), Hd = {};
  function jr(e, n) {
    cl(e, n), cl(e + "Capture", n);
  }
  function cl(e, n) {
    for (Hd[e] = n, e = 0; e < n.length; e++)
      Id.add(n[e]);
  }
  var I1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), qd = {}, Vd = {};
  function H1(e) {
    return Ce.call(Vd, e) ? !0 : Ce.call(qd, e) ? !1 : I1.test(e) ? Vd[e] = !0 : (qd[e] = !0, !1);
  }
  function Ai(e, n, l) {
    if (H1(n))
      if (l === null) e.removeAttribute(n);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var o = n.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + l);
      }
  }
  function Ti(e, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + l);
    }
  }
  function Un(e, n, l, o) {
    if (o === null) e.removeAttribute(l);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(n, l, "" + o);
    }
  }
  var Tu, Yd;
  function fl(e) {
    if (Tu === void 0)
      try {
        throw Error();
      } catch (l) {
        var n = l.stack.trim().match(/\n( *(at )?)/);
        Tu = n && n[1] || "", Yd = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Tu + e + Yd;
  }
  var _u = !1;
  function Ru(e, n) {
    if (!e || _u) return "";
    _u = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var W = function() {
                throw Error();
              };
              if (Object.defineProperty(W.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(W, []);
                } catch (V) {
                  var H = V;
                }
                Reflect.construct(e, [], W);
              } else {
                try {
                  W.call();
                } catch (V) {
                  H = V;
                }
                e.call(W.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (V) {
                H = V;
              }
              (W = e()) && typeof W.catch == "function" && W.catch(function() {
              });
            }
          } catch (V) {
            if (V && H && typeof V.stack == "string")
              return [V.stack, H.stack];
          }
          return [null, null];
        }
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      f && f.configurable && Object.defineProperty(
        o.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var p = o.DetermineComponentFrameRoot(), v = p[0], S = p[1];
      if (v && S) {
        var D = v.split(`
`), U = S.split(`
`);
        for (f = o = 0; o < D.length && !D[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; f < U.length && !U[f].includes(
          "DetermineComponentFrameRoot"
        ); )
          f++;
        if (o === D.length || f === U.length)
          for (o = D.length - 1, f = U.length - 1; 1 <= o && 0 <= f && D[o] !== U[f]; )
            f--;
        for (; 1 <= o && 0 <= f; o--, f--)
          if (D[o] !== U[f]) {
            if (o !== 1 || f !== 1)
              do
                if (o--, f--, 0 > f || D[o] !== U[f]) {
                  var K = `
` + D[o].replace(" at new ", " at ");
                  return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)), K;
                }
              while (1 <= o && 0 <= f);
            break;
          }
      }
    } finally {
      _u = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? fl(l) : "";
  }
  function q1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return fl(e.type);
      case 16:
        return fl("Lazy");
      case 13:
        return fl("Suspense");
      case 19:
        return fl("SuspenseList");
      case 0:
      case 15:
        return Ru(e.type, !1);
      case 11:
        return Ru(e.type.render, !1);
      case 1:
        return Ru(e.type, !0);
      case 31:
        return fl("Activity");
      default:
        return "";
    }
  }
  function Pd(e) {
    try {
      var n = "";
      do
        n += q1(e), e = e.return;
      while (e);
      return n;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  function un(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Fd(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function V1(e) {
    var n = Fd(e) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    ), o = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var f = l.get, p = l.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return f.call(this);
        },
        set: function(v) {
          o = "" + v, p.call(this, v);
        }
      }), Object.defineProperty(e, n, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(v) {
          o = "" + v;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function _i(e) {
    e._valueTracker || (e._valueTracker = V1(e));
  }
  function Gd(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var l = n.getValue(), o = "";
    return e && (o = Fd(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== l ? (n.setValue(e), !0) : !1;
  }
  function Ri(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Y1 = /[\n"\\]/g;
  function sn(e) {
    return e.replace(
      Y1,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Du(e, n, l, o, f, p, v, S) {
    e.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.type = v : e.removeAttribute("type"), n != null ? v === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + un(n)) : e.value !== "" + un(n) && (e.value = "" + un(n)) : v !== "submit" && v !== "reset" || e.removeAttribute("value"), n != null ? Nu(e, v, un(n)) : l != null ? Nu(e, v, un(l)) : o != null && e.removeAttribute("value"), f == null && p != null && (e.defaultChecked = !!p), f != null && (e.checked = f && typeof f != "function" && typeof f != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? e.name = "" + un(S) : e.removeAttribute("name");
  }
  function Xd(e, n, l, o, f, p, v, S) {
    if (p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.type = p), n != null || l != null) {
      if (!(p !== "submit" && p !== "reset" || n != null))
        return;
      l = l != null ? "" + un(l) : "", n = n != null ? "" + un(n) : l, S || n === e.value || (e.value = n), e.defaultValue = n;
    }
    o = o ?? f, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = S ? e.checked : !!o, e.defaultChecked = !!o, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (e.name = v);
  }
  function Nu(e, n, l) {
    n === "number" && Ri(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function dl(e, n, l, o) {
    if (e = e.options, n) {
      n = {};
      for (var f = 0; f < l.length; f++)
        n["$" + l[f]] = !0;
      for (l = 0; l < e.length; l++)
        f = n.hasOwnProperty("$" + e[l].value), e[l].selected !== f && (e[l].selected = f), f && o && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + un(l), n = null, f = 0; f < e.length; f++) {
        if (e[f].value === l) {
          e[f].selected = !0, o && (e[f].defaultSelected = !0);
          return;
        }
        n !== null || e[f].disabled || (n = e[f]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Qd(e, n, l) {
    if (n != null && (n = "" + un(n), n !== e.value && (e.value = n), l == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = l != null ? "" + un(l) : "";
  }
  function Zd(e, n, l, o) {
    if (n == null) {
      if (o != null) {
        if (l != null) throw Error(i(92));
        if (oe(o)) {
          if (1 < o.length) throw Error(i(93));
          o = o[0];
        }
        l = o;
      }
      l == null && (l = ""), n = l;
    }
    l = un(n), e.defaultValue = l, o = e.textContent, o === l && o !== "" && o !== null && (e.value = o);
  }
  function hl(e, n) {
    if (n) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var P1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Kd(e, n, l) {
    var o = n.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? o ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : o ? e.setProperty(n, l) : typeof l != "number" || l === 0 || P1.has(n) ? n === "float" ? e.cssFloat = l : e[n] = ("" + l).trim() : e[n] = l + "px";
  }
  function Jd(e, n, l) {
    if (n != null && typeof n != "object")
      throw Error(i(62));
    if (e = e.style, l != null) {
      for (var o in l)
        !l.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var f in n)
        o = n[f], n.hasOwnProperty(f) && l[f] !== o && Kd(e, f, o);
    } else
      for (var p in n)
        n.hasOwnProperty(p) && Kd(e, p, n[p]);
  }
  function Ou(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var F1 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), G1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Di(e) {
    return G1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var zu = null;
  function Mu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var pl = null, ml = null;
  function $d(e) {
    var n = ul(e);
    if (n && (e = n.stateNode)) {
      var l = e[qt] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Du(
            e,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), n = l.name, l.type === "radio" && n != null) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + sn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < l.length; n++) {
              var o = l[n];
              if (o !== e && o.form === e.form) {
                var f = o[qt] || null;
                if (!f) throw Error(i(90));
                Du(
                  o,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name
                );
              }
            }
            for (n = 0; n < l.length; n++)
              o = l[n], o.form === e.form && Gd(o);
          }
          break e;
        case "textarea":
          Qd(e, l.value, l.defaultValue);
          break e;
        case "select":
          n = l.value, n != null && dl(e, !!l.multiple, n, !1);
      }
    }
  }
  var Lu = !1;
  function Wd(e, n, l) {
    if (Lu) return e(n, l);
    Lu = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (Lu = !1, (pl !== null || ml !== null) && (go(), pl && (n = pl, e = ml, ml = pl = null, $d(n), e)))
        for (n = 0; n < e.length; n++) $d(e[n]);
    }
  }
  function da(e, n) {
    var l = e.stateNode;
    if (l === null) return null;
    var o = l[qt] || null;
    if (o === null) return null;
    l = o[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function")
      throw Error(
        i(231, n, typeof l)
      );
    return l;
  }
  var Bn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ju = !1;
  if (Bn)
    try {
      var ha = {};
      Object.defineProperty(ha, "passive", {
        get: function() {
          ju = !0;
        }
      }), window.addEventListener("test", ha, ha), window.removeEventListener("test", ha, ha);
    } catch {
      ju = !1;
    }
  var ir = null, Uu = null, Ni = null;
  function eh() {
    if (Ni) return Ni;
    var e, n = Uu, l = n.length, o, f = "value" in ir ? ir.value : ir.textContent, p = f.length;
    for (e = 0; e < l && n[e] === f[e]; e++) ;
    var v = l - e;
    for (o = 1; o <= v && n[l - o] === f[p - o]; o++) ;
    return Ni = f.slice(e, 1 < o ? 1 - o : void 0);
  }
  function Oi(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function zi() {
    return !0;
  }
  function th() {
    return !1;
  }
  function Vt(e) {
    function n(l, o, f, p, v) {
      this._reactName = l, this._targetInst = f, this.type = o, this.nativeEvent = p, this.target = v, this.currentTarget = null;
      for (var S in e)
        e.hasOwnProperty(S) && (l = e[S], this[S] = l ? l(p) : p[S]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? zi : th, this.isPropagationStopped = th, this;
    }
    return g(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = zi);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = zi);
      },
      persist: function() {
      },
      isPersistent: zi
    }), n;
  }
  var Ur = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Mi = Vt(Ur), pa = g({}, Ur, { view: 0, detail: 0 }), X1 = Vt(pa), Bu, Iu, ma, Li = g({}, pa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: qu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ma && (ma && e.type === "mousemove" ? (Bu = e.screenX - ma.screenX, Iu = e.screenY - ma.screenY) : Iu = Bu = 0, ma = e), Bu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Iu;
    }
  }), nh = Vt(Li), Q1 = g({}, Li, { dataTransfer: 0 }), Z1 = Vt(Q1), K1 = g({}, pa, { relatedTarget: 0 }), Hu = Vt(K1), J1 = g({}, Ur, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $1 = Vt(J1), W1 = g({}, Ur, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), ex = Vt(W1), tx = g({}, Ur, { data: 0 }), rh = Vt(tx), nx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, rx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, lx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ax(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = lx[e]) ? !!n[e] : !1;
  }
  function qu() {
    return ax;
  }
  var ix = g({}, pa, {
    key: function(e) {
      if (e.key) {
        var n = nx[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = Oi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? rx[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: qu,
    charCode: function(e) {
      return e.type === "keypress" ? Oi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Oi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), ox = Vt(ix), ux = g({}, Li, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), lh = Vt(ux), sx = g({}, pa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: qu
  }), cx = Vt(sx), fx = g({}, Ur, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), dx = Vt(fx), hx = g({}, Li, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), px = Vt(hx), mx = g({}, Ur, {
    newState: 0,
    oldState: 0
  }), gx = Vt(mx), yx = [9, 13, 27, 32], Vu = Bn && "CompositionEvent" in window, ga = null;
  Bn && "documentMode" in document && (ga = document.documentMode);
  var vx = Bn && "TextEvent" in window && !ga, ah = Bn && (!Vu || ga && 8 < ga && 11 >= ga), ih = " ", oh = !1;
  function uh(e, n) {
    switch (e) {
      case "keyup":
        return yx.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function sh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var gl = !1;
  function bx(e, n) {
    switch (e) {
      case "compositionend":
        return sh(n);
      case "keypress":
        return n.which !== 32 ? null : (oh = !0, ih);
      case "textInput":
        return e = n.data, e === ih && oh ? null : e;
      default:
        return null;
    }
  }
  function xx(e, n) {
    if (gl)
      return e === "compositionend" || !Vu && uh(e, n) ? (e = eh(), Ni = Uu = ir = null, gl = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return ah && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var wx = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function ch(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!wx[e.type] : n === "textarea";
  }
  function fh(e, n, l, o) {
    pl ? ml ? ml.push(o) : ml = [o] : pl = o, n = So(n, "onChange"), 0 < n.length && (l = new Mi(
      "onChange",
      "change",
      null,
      l,
      o
    ), e.push({ event: l, listeners: n }));
  }
  var ya = null, va = null;
  function Sx(e) {
    Fm(e, 0);
  }
  function ji(e) {
    var n = fa(e);
    if (Gd(n)) return e;
  }
  function dh(e, n) {
    if (e === "change") return n;
  }
  var hh = !1;
  if (Bn) {
    var Yu;
    if (Bn) {
      var Pu = "oninput" in document;
      if (!Pu) {
        var ph = document.createElement("div");
        ph.setAttribute("oninput", "return;"), Pu = typeof ph.oninput == "function";
      }
      Yu = Pu;
    } else Yu = !1;
    hh = Yu && (!document.documentMode || 9 < document.documentMode);
  }
  function mh() {
    ya && (ya.detachEvent("onpropertychange", gh), va = ya = null);
  }
  function gh(e) {
    if (e.propertyName === "value" && ji(va)) {
      var n = [];
      fh(
        n,
        va,
        e,
        Mu(e)
      ), Wd(Sx, n);
    }
  }
  function Ex(e, n, l) {
    e === "focusin" ? (mh(), ya = n, va = l, ya.attachEvent("onpropertychange", gh)) : e === "focusout" && mh();
  }
  function kx(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ji(va);
  }
  function Cx(e, n) {
    if (e === "click") return ji(n);
  }
  function Ax(e, n) {
    if (e === "input" || e === "change")
      return ji(n);
  }
  function Tx(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var Zt = typeof Object.is == "function" ? Object.is : Tx;
  function ba(e, n) {
    if (Zt(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var l = Object.keys(e), o = Object.keys(n);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var f = l[o];
      if (!Ce.call(n, f) || !Zt(e[f], n[f]))
        return !1;
    }
    return !0;
  }
  function yh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function vh(e, n) {
    var l = yh(e);
    e = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = e + l.textContent.length, e <= n && o >= n)
          return { node: l, offset: n - e };
        e = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = yh(l);
    }
  }
  function bh(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? bh(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function xh(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = Ri(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof n.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = n.contentWindow;
      else break;
      n = Ri(e.document);
    }
    return n;
  }
  function Fu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var _x = Bn && "documentMode" in document && 11 >= document.documentMode, yl = null, Gu = null, xa = null, Xu = !1;
  function wh(e, n, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Xu || yl == null || yl !== Ri(o) || (o = yl, "selectionStart" in o && Fu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), xa && ba(xa, o) || (xa = o, o = So(Gu, "onSelect"), 0 < o.length && (n = new Mi(
      "onSelect",
      "select",
      null,
      n,
      l
    ), e.push({ event: n, listeners: o }), n.target = yl)));
  }
  function Br(e, n) {
    var l = {};
    return l[e.toLowerCase()] = n.toLowerCase(), l["Webkit" + e] = "webkit" + n, l["Moz" + e] = "moz" + n, l;
  }
  var vl = {
    animationend: Br("Animation", "AnimationEnd"),
    animationiteration: Br("Animation", "AnimationIteration"),
    animationstart: Br("Animation", "AnimationStart"),
    transitionrun: Br("Transition", "TransitionRun"),
    transitionstart: Br("Transition", "TransitionStart"),
    transitioncancel: Br("Transition", "TransitionCancel"),
    transitionend: Br("Transition", "TransitionEnd")
  }, Qu = {}, Sh = {};
  Bn && (Sh = document.createElement("div").style, "AnimationEvent" in window || (delete vl.animationend.animation, delete vl.animationiteration.animation, delete vl.animationstart.animation), "TransitionEvent" in window || delete vl.transitionend.transition);
  function Ir(e) {
    if (Qu[e]) return Qu[e];
    if (!vl[e]) return e;
    var n = vl[e], l;
    for (l in n)
      if (n.hasOwnProperty(l) && l in Sh)
        return Qu[e] = n[l];
    return e;
  }
  var Eh = Ir("animationend"), kh = Ir("animationiteration"), Ch = Ir("animationstart"), Rx = Ir("transitionrun"), Dx = Ir("transitionstart"), Nx = Ir("transitioncancel"), Ah = Ir("transitionend"), Th = /* @__PURE__ */ new Map(), Zu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Zu.push("scrollEnd");
  function xn(e, n) {
    Th.set(e, n), jr(n, [e]);
  }
  var _h = /* @__PURE__ */ new WeakMap();
  function cn(e, n) {
    if (typeof e == "object" && e !== null) {
      var l = _h.get(e);
      return l !== void 0 ? l : (n = {
        value: e,
        source: n,
        stack: Pd(n)
      }, _h.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: Pd(n)
    };
  }
  var fn = [], bl = 0, Ku = 0;
  function Ui() {
    for (var e = bl, n = Ku = bl = 0; n < e; ) {
      var l = fn[n];
      fn[n++] = null;
      var o = fn[n];
      fn[n++] = null;
      var f = fn[n];
      fn[n++] = null;
      var p = fn[n];
      if (fn[n++] = null, o !== null && f !== null) {
        var v = o.pending;
        v === null ? f.next = f : (f.next = v.next, v.next = f), o.pending = f;
      }
      p !== 0 && Rh(l, f, p);
    }
  }
  function Bi(e, n, l, o) {
    fn[bl++] = e, fn[bl++] = n, fn[bl++] = l, fn[bl++] = o, Ku |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function Ju(e, n, l, o) {
    return Bi(e, n, l, o), Ii(e);
  }
  function xl(e, n) {
    return Bi(e, null, null, n), Ii(e);
  }
  function Rh(e, n, l) {
    e.lanes |= l;
    var o = e.alternate;
    o !== null && (o.lanes |= l);
    for (var f = !1, p = e.return; p !== null; )
      p.childLanes |= l, o = p.alternate, o !== null && (o.childLanes |= l), p.tag === 22 && (e = p.stateNode, e === null || e._visibility & 1 || (f = !0)), e = p, p = p.return;
    return e.tag === 3 ? (p = e.stateNode, f && n !== null && (f = 31 - me(l), e = p.hiddenUpdates, o = e[f], o === null ? e[f] = [n] : o.push(n), n.lane = l | 536870912), p) : null;
  }
  function Ii(e) {
    if (50 < Fa)
      throw Fa = 0, rc = null, Error(i(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var wl = {};
  function Ox(e, n, l, o) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Kt(e, n, l, o) {
    return new Ox(e, n, l, o);
  }
  function $u(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function In(e, n) {
    var l = e.alternate;
    return l === null ? (l = Kt(
      e.tag,
      n,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = n, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, n = e.dependencies, l.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function Dh(e, n) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, n = l.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function Hi(e, n, l, o, f, p) {
    var v = 0;
    if (o = e, typeof e == "function") $u(e) && (v = 1);
    else if (typeof e == "string")
      v = Mw(
        e,
        l,
        ue.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Z:
          return e = Kt(31, l, n, f), e.elementType = Z, e.lanes = p, e;
        case k:
          return Hr(l.children, f, p, n);
        case C:
          v = 8, f |= 24;
          break;
        case z:
          return e = Kt(12, l, n, f | 2), e.elementType = z, e.lanes = p, e;
        case I:
          return e = Kt(13, l, n, f), e.elementType = I, e.lanes = p, e;
        case R:
          return e = Kt(19, l, n, f), e.elementType = R, e.lanes = p, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case T:
              case j:
                v = 10;
                break e;
              case Y:
                v = 9;
                break e;
              case Q:
                v = 11;
                break e;
              case F:
                v = 14;
                break e;
              case q:
                v = 16, o = null;
                break e;
            }
          v = 29, l = Error(
            i(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return n = Kt(v, l, n, f), n.elementType = e, n.type = o, n.lanes = p, n;
  }
  function Hr(e, n, l, o) {
    return e = Kt(7, e, o, n), e.lanes = l, e;
  }
  function Wu(e, n, l) {
    return e = Kt(6, e, null, n), e.lanes = l, e;
  }
  function es(e, n, l) {
    return n = Kt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      n
    ), n.lanes = l, n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, n;
  }
  var Sl = [], El = 0, qi = null, Vi = 0, dn = [], hn = 0, qr = null, Hn = 1, qn = "";
  function Vr(e, n) {
    Sl[El++] = Vi, Sl[El++] = qi, qi = e, Vi = n;
  }
  function Nh(e, n, l) {
    dn[hn++] = Hn, dn[hn++] = qn, dn[hn++] = qr, qr = e;
    var o = Hn;
    e = qn;
    var f = 32 - me(o) - 1;
    o &= ~(1 << f), l += 1;
    var p = 32 - me(n) + f;
    if (30 < p) {
      var v = f - f % 5;
      p = (o & (1 << v) - 1).toString(32), o >>= v, f -= v, Hn = 1 << 32 - me(n) + f | l << f | o, qn = p + e;
    } else
      Hn = 1 << p | l << f | o, qn = e;
  }
  function ts(e) {
    e.return !== null && (Vr(e, 1), Nh(e, 1, 0));
  }
  function ns(e) {
    for (; e === qi; )
      qi = Sl[--El], Sl[El] = null, Vi = Sl[--El], Sl[El] = null;
    for (; e === qr; )
      qr = dn[--hn], dn[hn] = null, qn = dn[--hn], dn[hn] = null, Hn = dn[--hn], dn[hn] = null;
  }
  var jt = null, it = null, Ye = !1, Yr = null, An = !1, rs = Error(i(519));
  function Pr(e) {
    var n = Error(i(418, ""));
    throw Ea(cn(n, e)), rs;
  }
  function Oh(e) {
    var n = e.stateNode, l = e.type, o = e.memoizedProps;
    switch (n[Dt] = e, n[qt] = o, l) {
      case "dialog":
        Le("cancel", n), Le("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Le("load", n);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Xa.length; l++)
          Le(Xa[l], n);
        break;
      case "source":
        Le("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Le("error", n), Le("load", n);
        break;
      case "details":
        Le("toggle", n);
        break;
      case "input":
        Le("invalid", n), Xd(
          n,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), _i(n);
        break;
      case "select":
        Le("invalid", n);
        break;
      case "textarea":
        Le("invalid", n), Zd(n, o.value, o.defaultValue, o.children), _i(n);
    }
    l = o.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || n.textContent === "" + l || o.suppressHydrationWarning === !0 || Zm(n.textContent, l) ? (o.popover != null && (Le("beforetoggle", n), Le("toggle", n)), o.onScroll != null && Le("scroll", n), o.onScrollEnd != null && Le("scrollend", n), o.onClick != null && (n.onclick = Eo), n = !0) : n = !1, n || Pr(e);
  }
  function zh(e) {
    for (jt = e.return; jt; )
      switch (jt.tag) {
        case 5:
        case 13:
          An = !1;
          return;
        case 27:
        case 3:
          An = !0;
          return;
        default:
          jt = jt.return;
      }
  }
  function wa(e) {
    if (e !== jt) return !1;
    if (!Ye) return zh(e), Ye = !0, !1;
    var n = e.tag, l;
    if ((l = n !== 3 && n !== 27) && ((l = n === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || bc(e.type, e.memoizedProps)), l = !l), l && it && Pr(e), zh(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (l = e.data, l === "/$") {
              if (n === 0) {
                it = Sn(e.nextSibling);
                break e;
              }
              n--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || n++;
          e = e.nextSibling;
        }
        it = null;
      }
    } else
      n === 27 ? (n = it, Sr(e.type) ? (e = Ec, Ec = null, it = e) : it = n) : it = jt ? Sn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Sa() {
    it = jt = null, Ye = !1;
  }
  function Mh() {
    var e = Yr;
    return e !== null && (Ft === null ? Ft = e : Ft.push.apply(
      Ft,
      e
    ), Yr = null), e;
  }
  function Ea(e) {
    Yr === null ? Yr = [e] : Yr.push(e);
  }
  var ls = X(null), Fr = null, Vn = null;
  function or(e, n, l) {
    E(ls, n._currentValue), n._currentValue = l;
  }
  function Yn(e) {
    e._currentValue = ls.current, ae(ls);
  }
  function as(e, n, l) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), e === l) break;
      e = e.return;
    }
  }
  function is(e, n, l, o) {
    var f = e.child;
    for (f !== null && (f.return = e); f !== null; ) {
      var p = f.dependencies;
      if (p !== null) {
        var v = f.child;
        p = p.firstContext;
        e: for (; p !== null; ) {
          var S = p;
          p = f;
          for (var D = 0; D < n.length; D++)
            if (S.context === n[D]) {
              p.lanes |= l, S = p.alternate, S !== null && (S.lanes |= l), as(
                p.return,
                l,
                e
              ), o || (v = null);
              break e;
            }
          p = S.next;
        }
      } else if (f.tag === 18) {
        if (v = f.return, v === null) throw Error(i(341));
        v.lanes |= l, p = v.alternate, p !== null && (p.lanes |= l), as(v, l, e), v = null;
      } else v = f.child;
      if (v !== null) v.return = f;
      else
        for (v = f; v !== null; ) {
          if (v === e) {
            v = null;
            break;
          }
          if (f = v.sibling, f !== null) {
            f.return = v.return, v = f;
            break;
          }
          v = v.return;
        }
      f = v;
    }
  }
  function ka(e, n, l, o) {
    e = null;
    for (var f = n, p = !1; f !== null; ) {
      if (!p) {
        if ((f.flags & 524288) !== 0) p = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var v = f.alternate;
        if (v === null) throw Error(i(387));
        if (v = v.memoizedProps, v !== null) {
          var S = f.type;
          Zt(f.pendingProps.value, v.value) || (e !== null ? e.push(S) : e = [S]);
        }
      } else if (f === ke.current) {
        if (v = f.alternate, v === null) throw Error(i(387));
        v.memoizedState.memoizedState !== f.memoizedState.memoizedState && (e !== null ? e.push(Wa) : e = [Wa]);
      }
      f = f.return;
    }
    e !== null && is(
      n,
      e,
      l,
      o
    ), n.flags |= 262144;
  }
  function Yi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Zt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Gr(e) {
    Fr = e, Vn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Nt(e) {
    return Lh(Fr, e);
  }
  function Pi(e, n) {
    return Fr === null && Gr(e), Lh(e, n);
  }
  function Lh(e, n) {
    var l = n._currentValue;
    if (n = { context: n, memoizedValue: l, next: null }, Vn === null) {
      if (e === null) throw Error(i(308));
      Vn = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else Vn = Vn.next = n;
    return l;
  }
  var zx = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(l, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      n.aborted = !0, e.forEach(function(l) {
        return l();
      });
    };
  }, Mx = t.unstable_scheduleCallback, Lx = t.unstable_NormalPriority, mt = {
    $$typeof: j,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function os() {
    return {
      controller: new zx(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ca(e) {
    e.refCount--, e.refCount === 0 && Mx(Lx, function() {
      e.controller.abort();
    });
  }
  var Aa = null, us = 0, kl = 0, Cl = null;
  function jx(e, n) {
    if (Aa === null) {
      var l = Aa = [];
      us = 0, kl = cc(), Cl = {
        status: "pending",
        value: void 0,
        then: function(o) {
          l.push(o);
        }
      };
    }
    return us++, n.then(jh, jh), n;
  }
  function jh() {
    if (--us === 0 && Aa !== null) {
      Cl !== null && (Cl.status = "fulfilled");
      var e = Aa;
      Aa = null, kl = 0, Cl = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Ux(e, n) {
    var l = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(f) {
        l.push(f);
      }
    };
    return e.then(
      function() {
        o.status = "fulfilled", o.value = n;
        for (var f = 0; f < l.length; f++) (0, l[f])(n);
      },
      function(f) {
        for (o.status = "rejected", o.reason = f, f = 0; f < l.length; f++)
          (0, l[f])(void 0);
      }
    ), o;
  }
  var Uh = B.S;
  B.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && jx(e, n), Uh !== null && Uh(e, n);
  };
  var Xr = X(null);
  function ss() {
    var e = Xr.current;
    return e !== null ? e : We.pooledCache;
  }
  function Fi(e, n) {
    n === null ? E(Xr, Xr.current) : E(Xr, n.pool);
  }
  function Bh() {
    var e = ss();
    return e === null ? null : { parent: mt._currentValue, pool: e };
  }
  var Ta = Error(i(460)), Ih = Error(i(474)), Gi = Error(i(542)), cs = { then: function() {
  } };
  function Hh(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Xi() {
  }
  function qh(e, n, l) {
    switch (l = e[l], l === void 0 ? e.push(n) : l !== n && (n.then(Xi, Xi), n = l), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, Yh(e), e;
      default:
        if (typeof n.status == "string") n.then(Xi, Xi);
        else {
          if (e = We, e !== null && 100 < e.shellSuspendCounter)
            throw Error(i(482));
          e = n, e.status = "pending", e.then(
            function(o) {
              if (n.status === "pending") {
                var f = n;
                f.status = "fulfilled", f.value = o;
              }
            },
            function(o) {
              if (n.status === "pending") {
                var f = n;
                f.status = "rejected", f.reason = o;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, Yh(e), e;
        }
        throw _a = n, Ta;
    }
  }
  var _a = null;
  function Vh() {
    if (_a === null) throw Error(i(459));
    var e = _a;
    return _a = null, e;
  }
  function Yh(e) {
    if (e === Ta || e === Gi)
      throw Error(i(483));
  }
  var ur = !1;
  function fs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ds(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function sr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function cr(e, n, l) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Ge & 2) !== 0) {
      var f = o.pending;
      return f === null ? n.next = n : (n.next = f.next, f.next = n), o.pending = n, n = Ii(e), Rh(e, null, l), n;
    }
    return Bi(e, o, n, l), Ii(e);
  }
  function Ra(e, n, l) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (l & 4194048) !== 0)) {
      var o = n.lanes;
      o &= e.pendingLanes, l |= o, n.lanes = l, jd(e, l);
    }
  }
  function hs(e, n) {
    var l = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var f = null, p = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var v = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          p === null ? f = p = v : p = p.next = v, l = l.next;
        } while (l !== null);
        p === null ? f = p = n : p = p.next = n;
      } else f = p = n;
      l = {
        baseState: o.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: p,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = n : e.next = n, l.lastBaseUpdate = n;
  }
  var ps = !1;
  function Da() {
    if (ps) {
      var e = Cl;
      if (e !== null) throw e;
    }
  }
  function Na(e, n, l, o) {
    ps = !1;
    var f = e.updateQueue;
    ur = !1;
    var p = f.firstBaseUpdate, v = f.lastBaseUpdate, S = f.shared.pending;
    if (S !== null) {
      f.shared.pending = null;
      var D = S, U = D.next;
      D.next = null, v === null ? p = U : v.next = U, v = D;
      var K = e.alternate;
      K !== null && (K = K.updateQueue, S = K.lastBaseUpdate, S !== v && (S === null ? K.firstBaseUpdate = U : S.next = U, K.lastBaseUpdate = D));
    }
    if (p !== null) {
      var W = f.baseState;
      v = 0, K = U = D = null, S = p;
      do {
        var H = S.lane & -536870913, V = H !== S.lane;
        if (V ? (Ue & H) === H : (o & H) === H) {
          H !== 0 && H === kl && (ps = !0), K !== null && (K = K.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          e: {
            var Ee = e, xe = S;
            H = n;
            var Ke = l;
            switch (xe.tag) {
              case 1:
                if (Ee = xe.payload, typeof Ee == "function") {
                  W = Ee.call(Ke, W, H);
                  break e;
                }
                W = Ee;
                break e;
              case 3:
                Ee.flags = Ee.flags & -65537 | 128;
              case 0:
                if (Ee = xe.payload, H = typeof Ee == "function" ? Ee.call(Ke, W, H) : Ee, H == null) break e;
                W = g({}, W, H);
                break e;
              case 2:
                ur = !0;
            }
          }
          H = S.callback, H !== null && (e.flags |= 64, V && (e.flags |= 8192), V = f.callbacks, V === null ? f.callbacks = [H] : V.push(H));
        } else
          V = {
            lane: H,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, K === null ? (U = K = V, D = W) : K = K.next = V, v |= H;
        if (S = S.next, S === null) {
          if (S = f.shared.pending, S === null)
            break;
          V = S, S = V.next, V.next = null, f.lastBaseUpdate = V, f.shared.pending = null;
        }
      } while (!0);
      K === null && (D = W), f.baseState = D, f.firstBaseUpdate = U, f.lastBaseUpdate = K, p === null && (f.shared.lanes = 0), vr |= v, e.lanes = v, e.memoizedState = W;
    }
  }
  function Ph(e, n) {
    if (typeof e != "function")
      throw Error(i(191, e));
    e.call(n);
  }
  function Fh(e, n) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        Ph(l[e], n);
  }
  var Al = X(null), Qi = X(0);
  function Gh(e, n) {
    e = Kn, E(Qi, e), E(Al, n), Kn = e | n.baseLanes;
  }
  function ms() {
    E(Qi, Kn), E(Al, Al.current);
  }
  function gs() {
    Kn = Qi.current, ae(Al), ae(Qi);
  }
  var fr = 0, De = null, Qe = null, ft = null, Zi = !1, Tl = !1, Qr = !1, Ki = 0, Oa = 0, _l = null, Bx = 0;
  function ut() {
    throw Error(i(321));
  }
  function ys(e, n) {
    if (n === null) return !1;
    for (var l = 0; l < n.length && l < e.length; l++)
      if (!Zt(e[l], n[l])) return !1;
    return !0;
  }
  function vs(e, n, l, o, f, p) {
    return fr = p, De = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, B.H = e === null || e.memoizedState === null ? Rp : Dp, Qr = !1, p = l(o, f), Qr = !1, Tl && (p = Qh(
      n,
      l,
      o,
      f
    )), Xh(e), p;
  }
  function Xh(e) {
    B.H = no;
    var n = Qe !== null && Qe.next !== null;
    if (fr = 0, ft = Qe = De = null, Zi = !1, Oa = 0, _l = null, n) throw Error(i(300));
    e === null || wt || (e = e.dependencies, e !== null && Yi(e) && (wt = !0));
  }
  function Qh(e, n, l, o) {
    De = e;
    var f = 0;
    do {
      if (Tl && (_l = null), Oa = 0, Tl = !1, 25 <= f) throw Error(i(301));
      if (f += 1, ft = Qe = null, e.updateQueue != null) {
        var p = e.updateQueue;
        p.lastEffect = null, p.events = null, p.stores = null, p.memoCache != null && (p.memoCache.index = 0);
      }
      B.H = Fx, p = n(l, o);
    } while (Tl);
    return p;
  }
  function Ix() {
    var e = B.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? za(n) : n, e = e.useState()[0], (Qe !== null ? Qe.memoizedState : null) !== e && (De.flags |= 1024), n;
  }
  function bs() {
    var e = Ki !== 0;
    return Ki = 0, e;
  }
  function xs(e, n, l) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l;
  }
  function ws(e) {
    if (Zi) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Zi = !1;
    }
    fr = 0, ft = Qe = De = null, Tl = !1, Oa = Ki = 0, _l = null;
  }
  function Yt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ft === null ? De.memoizedState = ft = e : ft = ft.next = e, ft;
  }
  function dt() {
    if (Qe === null) {
      var e = De.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Qe.next;
    var n = ft === null ? De.memoizedState : ft.next;
    if (n !== null)
      ft = n, Qe = e;
    else {
      if (e === null)
        throw De.alternate === null ? Error(i(467)) : Error(i(310));
      Qe = e, e = {
        memoizedState: Qe.memoizedState,
        baseState: Qe.baseState,
        baseQueue: Qe.baseQueue,
        queue: Qe.queue,
        next: null
      }, ft === null ? De.memoizedState = ft = e : ft = ft.next = e;
    }
    return ft;
  }
  function Ss() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function za(e) {
    var n = Oa;
    return Oa += 1, _l === null && (_l = []), e = qh(_l, e, n), n = De, (ft === null ? n.memoizedState : ft.next) === null && (n = n.alternate, B.H = n === null || n.memoizedState === null ? Rp : Dp), e;
  }
  function Ji(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return za(e);
      if (e.$$typeof === j) return Nt(e);
    }
    throw Error(i(438, String(e)));
  }
  function Es(e) {
    var n = null, l = De.updateQueue;
    if (l !== null && (n = l.memoCache), n == null) {
      var o = De.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
        data: o.data.map(function(f) {
          return f.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), l === null && (l = Ss(), De.updateQueue = l), l.memoCache = n, l = n.data[n.index], l === void 0)
      for (l = n.data[n.index] = Array(e), o = 0; o < e; o++)
        l[o] = O;
    return n.index++, l;
  }
  function Pn(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function $i(e) {
    var n = dt();
    return ks(n, Qe, e);
  }
  function ks(e, n, l) {
    var o = e.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = l;
    var f = e.baseQueue, p = o.pending;
    if (p !== null) {
      if (f !== null) {
        var v = f.next;
        f.next = p.next, p.next = v;
      }
      n.baseQueue = f = p, o.pending = null;
    }
    if (p = e.baseState, f === null) e.memoizedState = p;
    else {
      n = f.next;
      var S = v = null, D = null, U = n, K = !1;
      do {
        var W = U.lane & -536870913;
        if (W !== U.lane ? (Ue & W) === W : (fr & W) === W) {
          var H = U.revertLane;
          if (H === 0)
            D !== null && (D = D.next = {
              lane: 0,
              revertLane: 0,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }), W === kl && (K = !0);
          else if ((fr & H) === H) {
            U = U.next, H === kl && (K = !0);
            continue;
          } else
            W = {
              lane: 0,
              revertLane: U.revertLane,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }, D === null ? (S = D = W, v = p) : D = D.next = W, De.lanes |= H, vr |= H;
          W = U.action, Qr && l(p, W), p = U.hasEagerState ? U.eagerState : l(p, W);
        } else
          H = {
            lane: W,
            revertLane: U.revertLane,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          }, D === null ? (S = D = H, v = p) : D = D.next = H, De.lanes |= W, vr |= W;
        U = U.next;
      } while (U !== null && U !== n);
      if (D === null ? v = p : D.next = S, !Zt(p, e.memoizedState) && (wt = !0, K && (l = Cl, l !== null)))
        throw l;
      e.memoizedState = p, e.baseState = v, e.baseQueue = D, o.lastRenderedState = p;
    }
    return f === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Cs(e) {
    var n = dt(), l = n.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = e;
    var o = l.dispatch, f = l.pending, p = n.memoizedState;
    if (f !== null) {
      l.pending = null;
      var v = f = f.next;
      do
        p = e(p, v.action), v = v.next;
      while (v !== f);
      Zt(p, n.memoizedState) || (wt = !0), n.memoizedState = p, n.baseQueue === null && (n.baseState = p), l.lastRenderedState = p;
    }
    return [p, o];
  }
  function Zh(e, n, l) {
    var o = De, f = dt(), p = Ye;
    if (p) {
      if (l === void 0) throw Error(i(407));
      l = l();
    } else l = n();
    var v = !Zt(
      (Qe || f).memoizedState,
      l
    );
    v && (f.memoizedState = l, wt = !0), f = f.queue;
    var S = $h.bind(null, o, f, e);
    if (Ma(2048, 8, S, [e]), f.getSnapshot !== n || v || ft !== null && ft.memoizedState.tag & 1) {
      if (o.flags |= 2048, Rl(
        9,
        Wi(),
        Jh.bind(
          null,
          o,
          f,
          l,
          n
        ),
        null
      ), We === null) throw Error(i(349));
      p || (fr & 124) !== 0 || Kh(o, n, l);
    }
    return l;
  }
  function Kh(e, n, l) {
    e.flags |= 16384, e = { getSnapshot: n, value: l }, n = De.updateQueue, n === null ? (n = Ss(), De.updateQueue = n, n.stores = [e]) : (l = n.stores, l === null ? n.stores = [e] : l.push(e));
  }
  function Jh(e, n, l, o) {
    n.value = l, n.getSnapshot = o, Wh(n) && ep(e);
  }
  function $h(e, n, l) {
    return l(function() {
      Wh(n) && ep(e);
    });
  }
  function Wh(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var l = n();
      return !Zt(e, l);
    } catch {
      return !0;
    }
  }
  function ep(e) {
    var n = xl(e, 2);
    n !== null && tn(n, e, 2);
  }
  function As(e) {
    var n = Yt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), Qr) {
        he(!0);
        try {
          l();
        } finally {
          he(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pn,
      lastRenderedState: e
    }, n;
  }
  function tp(e, n, l, o) {
    return e.baseState = l, ks(
      e,
      Qe,
      typeof o == "function" ? o : Pn
    );
  }
  function Hx(e, n, l, o, f) {
    if (to(e)) throw Error(i(485));
    if (e = n.action, e !== null) {
      var p = {
        payload: f,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(v) {
          p.listeners.push(v);
        }
      };
      B.T !== null ? l(!0) : p.isTransition = !1, o(p), l = n.pending, l === null ? (p.next = n.pending = p, np(n, p)) : (p.next = l.next, n.pending = l.next = p);
    }
  }
  function np(e, n) {
    var l = n.action, o = n.payload, f = e.state;
    if (n.isTransition) {
      var p = B.T, v = {};
      B.T = v;
      try {
        var S = l(f, o), D = B.S;
        D !== null && D(v, S), rp(e, n, S);
      } catch (U) {
        Ts(e, n, U);
      } finally {
        B.T = p;
      }
    } else
      try {
        p = l(f, o), rp(e, n, p);
      } catch (U) {
        Ts(e, n, U);
      }
  }
  function rp(e, n, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(o) {
        lp(e, n, o);
      },
      function(o) {
        return Ts(e, n, o);
      }
    ) : lp(e, n, l);
  }
  function lp(e, n, l) {
    n.status = "fulfilled", n.value = l, ap(n), e.state = l, n = e.pending, n !== null && (l = n.next, l === n ? e.pending = null : (l = l.next, n.next = l, np(e, l)));
  }
  function Ts(e, n, l) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        n.status = "rejected", n.reason = l, ap(n), n = n.next;
      while (n !== o);
    }
    e.action = null;
  }
  function ap(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function ip(e, n) {
    return n;
  }
  function op(e, n) {
    if (Ye) {
      var l = We.formState;
      if (l !== null) {
        e: {
          var o = De;
          if (Ye) {
            if (it) {
              t: {
                for (var f = it, p = An; f.nodeType !== 8; ) {
                  if (!p) {
                    f = null;
                    break t;
                  }
                  if (f = Sn(
                    f.nextSibling
                  ), f === null) {
                    f = null;
                    break t;
                  }
                }
                p = f.data, f = p === "F!" || p === "F" ? f : null;
              }
              if (f) {
                it = Sn(
                  f.nextSibling
                ), o = f.data === "F!";
                break e;
              }
            }
            Pr(o);
          }
          o = !1;
        }
        o && (n = l[0]);
      }
    }
    return l = Yt(), l.memoizedState = l.baseState = n, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ip,
      lastRenderedState: n
    }, l.queue = o, l = Ap.bind(
      null,
      De,
      o
    ), o.dispatch = l, o = As(!1), p = Os.bind(
      null,
      De,
      !1,
      o.queue
    ), o = Yt(), f = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = f, l = Hx.bind(
      null,
      De,
      f,
      p,
      l
    ), f.dispatch = l, o.memoizedState = e, [n, l, !1];
  }
  function up(e) {
    var n = dt();
    return sp(n, Qe, e);
  }
  function sp(e, n, l) {
    if (n = ks(
      e,
      n,
      ip
    )[0], e = $i(Pn)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var o = za(n);
      } catch (v) {
        throw v === Ta ? Gi : v;
      }
    else o = n;
    n = dt();
    var f = n.queue, p = f.dispatch;
    return l !== n.memoizedState && (De.flags |= 2048, Rl(
      9,
      Wi(),
      qx.bind(null, f, l),
      null
    )), [o, p, e];
  }
  function qx(e, n) {
    e.action = n;
  }
  function cp(e) {
    var n = dt(), l = Qe;
    if (l !== null)
      return sp(n, l, e);
    dt(), n = n.memoizedState, l = dt();
    var o = l.queue.dispatch;
    return l.memoizedState = e, [n, o, !1];
  }
  function Rl(e, n, l, o) {
    return e = { tag: e, create: l, deps: o, inst: n, next: null }, n = De.updateQueue, n === null && (n = Ss(), De.updateQueue = n), l = n.lastEffect, l === null ? n.lastEffect = e.next = e : (o = l.next, l.next = e, e.next = o, n.lastEffect = e), e;
  }
  function Wi() {
    return { destroy: void 0, resource: void 0 };
  }
  function fp() {
    return dt().memoizedState;
  }
  function eo(e, n, l, o) {
    var f = Yt();
    o = o === void 0 ? null : o, De.flags |= e, f.memoizedState = Rl(
      1 | n,
      Wi(),
      l,
      o
    );
  }
  function Ma(e, n, l, o) {
    var f = dt();
    o = o === void 0 ? null : o;
    var p = f.memoizedState.inst;
    Qe !== null && o !== null && ys(o, Qe.memoizedState.deps) ? f.memoizedState = Rl(n, p, l, o) : (De.flags |= e, f.memoizedState = Rl(
      1 | n,
      p,
      l,
      o
    ));
  }
  function dp(e, n) {
    eo(8390656, 8, e, n);
  }
  function hp(e, n) {
    Ma(2048, 8, e, n);
  }
  function pp(e, n) {
    return Ma(4, 2, e, n);
  }
  function mp(e, n) {
    return Ma(4, 4, e, n);
  }
  function gp(e, n) {
    if (typeof n == "function") {
      e = e();
      var l = n(e);
      return function() {
        typeof l == "function" ? l() : n(null);
      };
    }
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function yp(e, n, l) {
    l = l != null ? l.concat([e]) : null, Ma(4, 4, gp.bind(null, n, e), l);
  }
  function _s() {
  }
  function vp(e, n) {
    var l = dt();
    n = n === void 0 ? null : n;
    var o = l.memoizedState;
    return n !== null && ys(n, o[1]) ? o[0] : (l.memoizedState = [e, n], e);
  }
  function bp(e, n) {
    var l = dt();
    n = n === void 0 ? null : n;
    var o = l.memoizedState;
    if (n !== null && ys(n, o[1]))
      return o[0];
    if (o = e(), Qr) {
      he(!0);
      try {
        e();
      } finally {
        he(!1);
      }
    }
    return l.memoizedState = [o, n], o;
  }
  function Rs(e, n, l) {
    return l === void 0 || (fr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = l, e = Sm(), De.lanes |= e, vr |= e, l);
  }
  function xp(e, n, l, o) {
    return Zt(l, n) ? l : Al.current !== null ? (e = Rs(e, l, o), Zt(e, n) || (wt = !0), e) : (fr & 42) === 0 ? (wt = !0, e.memoizedState = l) : (e = Sm(), De.lanes |= e, vr |= e, n);
  }
  function wp(e, n, l, o, f) {
    var p = $.p;
    $.p = p !== 0 && 8 > p ? p : 8;
    var v = B.T, S = {};
    B.T = S, Os(e, !1, n, l);
    try {
      var D = f(), U = B.S;
      if (U !== null && U(S, D), D !== null && typeof D == "object" && typeof D.then == "function") {
        var K = Ux(
          D,
          o
        );
        La(
          e,
          n,
          K,
          en(e)
        );
      } else
        La(
          e,
          n,
          o,
          en(e)
        );
    } catch (W) {
      La(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: W },
        en()
      );
    } finally {
      $.p = p, B.T = v;
    }
  }
  function Vx() {
  }
  function Ds(e, n, l, o) {
    if (e.tag !== 5) throw Error(i(476));
    var f = Sp(e).queue;
    wp(
      e,
      f,
      n,
      G,
      l === null ? Vx : function() {
        return Ep(e), l(o);
      }
    );
  }
  function Sp(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: G,
      baseState: G,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pn,
        lastRenderedState: G
      },
      next: null
    };
    var l = {};
    return n.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pn,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function Ep(e) {
    var n = Sp(e).next.queue;
    La(e, n, {}, en());
  }
  function Ns() {
    return Nt(Wa);
  }
  function kp() {
    return dt().memoizedState;
  }
  function Cp() {
    return dt().memoizedState;
  }
  function Yx(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var l = en();
          e = sr(l);
          var o = cr(n, e, l);
          o !== null && (tn(o, n, l), Ra(o, n, l)), n = { cache: os() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Px(e, n, l) {
    var o = en();
    l = {
      lane: o,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, to(e) ? Tp(n, l) : (l = Ju(e, n, l, o), l !== null && (tn(l, e, o), _p(l, n, o)));
  }
  function Ap(e, n, l) {
    var o = en();
    La(e, n, l, o);
  }
  function La(e, n, l, o) {
    var f = {
      lane: o,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (to(e)) Tp(n, f);
    else {
      var p = e.alternate;
      if (e.lanes === 0 && (p === null || p.lanes === 0) && (p = n.lastRenderedReducer, p !== null))
        try {
          var v = n.lastRenderedState, S = p(v, l);
          if (f.hasEagerState = !0, f.eagerState = S, Zt(S, v))
            return Bi(e, n, f, 0), We === null && Ui(), !1;
        } catch {
        } finally {
        }
      if (l = Ju(e, n, f, o), l !== null)
        return tn(l, e, o), _p(l, n, o), !0;
    }
    return !1;
  }
  function Os(e, n, l, o) {
    if (o = {
      lane: 2,
      revertLane: cc(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, to(e)) {
      if (n) throw Error(i(479));
    } else
      n = Ju(
        e,
        l,
        o,
        2
      ), n !== null && tn(n, e, 2);
  }
  function to(e) {
    var n = e.alternate;
    return e === De || n !== null && n === De;
  }
  function Tp(e, n) {
    Tl = Zi = !0;
    var l = e.pending;
    l === null ? n.next = n : (n.next = l.next, l.next = n), e.pending = n;
  }
  function _p(e, n, l) {
    if ((l & 4194048) !== 0) {
      var o = n.lanes;
      o &= e.pendingLanes, l |= o, n.lanes = l, jd(e, l);
    }
  }
  var no = {
    readContext: Nt,
    use: Ji,
    useCallback: ut,
    useContext: ut,
    useEffect: ut,
    useImperativeHandle: ut,
    useLayoutEffect: ut,
    useInsertionEffect: ut,
    useMemo: ut,
    useReducer: ut,
    useRef: ut,
    useState: ut,
    useDebugValue: ut,
    useDeferredValue: ut,
    useTransition: ut,
    useSyncExternalStore: ut,
    useId: ut,
    useHostTransitionStatus: ut,
    useFormState: ut,
    useActionState: ut,
    useOptimistic: ut,
    useMemoCache: ut,
    useCacheRefresh: ut
  }, Rp = {
    readContext: Nt,
    use: Ji,
    useCallback: function(e, n) {
      return Yt().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: Nt,
    useEffect: dp,
    useImperativeHandle: function(e, n, l) {
      l = l != null ? l.concat([e]) : null, eo(
        4194308,
        4,
        gp.bind(null, n, e),
        l
      );
    },
    useLayoutEffect: function(e, n) {
      return eo(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      eo(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var l = Yt();
      n = n === void 0 ? null : n;
      var o = e();
      if (Qr) {
        he(!0);
        try {
          e();
        } finally {
          he(!1);
        }
      }
      return l.memoizedState = [o, n], o;
    },
    useReducer: function(e, n, l) {
      var o = Yt();
      if (l !== void 0) {
        var f = l(n);
        if (Qr) {
          he(!0);
          try {
            l(n);
          } finally {
            he(!1);
          }
        }
      } else f = n;
      return o.memoizedState = o.baseState = f, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: f
      }, o.queue = e, e = e.dispatch = Px.bind(
        null,
        De,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var n = Yt();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = As(e);
      var n = e.queue, l = Ap.bind(null, De, n);
      return n.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: _s,
    useDeferredValue: function(e, n) {
      var l = Yt();
      return Rs(l, e, n);
    },
    useTransition: function() {
      var e = As(!1);
      return e = wp.bind(
        null,
        De,
        e.queue,
        !0,
        !1
      ), Yt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, l) {
      var o = De, f = Yt();
      if (Ye) {
        if (l === void 0)
          throw Error(i(407));
        l = l();
      } else {
        if (l = n(), We === null)
          throw Error(i(349));
        (Ue & 124) !== 0 || Kh(o, n, l);
      }
      f.memoizedState = l;
      var p = { value: l, getSnapshot: n };
      return f.queue = p, dp($h.bind(null, o, p, e), [
        e
      ]), o.flags |= 2048, Rl(
        9,
        Wi(),
        Jh.bind(
          null,
          o,
          p,
          l,
          n
        ),
        null
      ), l;
    },
    useId: function() {
      var e = Yt(), n = We.identifierPrefix;
      if (Ye) {
        var l = qn, o = Hn;
        l = (o & ~(1 << 32 - me(o) - 1)).toString(32) + l, n = "«" + n + "R" + l, l = Ki++, 0 < l && (n += "H" + l.toString(32)), n += "»";
      } else
        l = Bx++, n = "«" + n + "r" + l.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Ns,
    useFormState: op,
    useActionState: op,
    useOptimistic: function(e) {
      var n = Yt();
      n.memoizedState = n.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = l, n = Os.bind(
        null,
        De,
        !0,
        l
      ), l.dispatch = n, [e, n];
    },
    useMemoCache: Es,
    useCacheRefresh: function() {
      return Yt().memoizedState = Yx.bind(
        null,
        De
      );
    }
  }, Dp = {
    readContext: Nt,
    use: Ji,
    useCallback: vp,
    useContext: Nt,
    useEffect: hp,
    useImperativeHandle: yp,
    useInsertionEffect: pp,
    useLayoutEffect: mp,
    useMemo: bp,
    useReducer: $i,
    useRef: fp,
    useState: function() {
      return $i(Pn);
    },
    useDebugValue: _s,
    useDeferredValue: function(e, n) {
      var l = dt();
      return xp(
        l,
        Qe.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = $i(Pn)[0], n = dt().memoizedState;
      return [
        typeof e == "boolean" ? e : za(e),
        n
      ];
    },
    useSyncExternalStore: Zh,
    useId: kp,
    useHostTransitionStatus: Ns,
    useFormState: up,
    useActionState: up,
    useOptimistic: function(e, n) {
      var l = dt();
      return tp(l, Qe, e, n);
    },
    useMemoCache: Es,
    useCacheRefresh: Cp
  }, Fx = {
    readContext: Nt,
    use: Ji,
    useCallback: vp,
    useContext: Nt,
    useEffect: hp,
    useImperativeHandle: yp,
    useInsertionEffect: pp,
    useLayoutEffect: mp,
    useMemo: bp,
    useReducer: Cs,
    useRef: fp,
    useState: function() {
      return Cs(Pn);
    },
    useDebugValue: _s,
    useDeferredValue: function(e, n) {
      var l = dt();
      return Qe === null ? Rs(l, e, n) : xp(
        l,
        Qe.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Cs(Pn)[0], n = dt().memoizedState;
      return [
        typeof e == "boolean" ? e : za(e),
        n
      ];
    },
    useSyncExternalStore: Zh,
    useId: kp,
    useHostTransitionStatus: Ns,
    useFormState: cp,
    useActionState: cp,
    useOptimistic: function(e, n) {
      var l = dt();
      return Qe !== null ? tp(l, Qe, e, n) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Es,
    useCacheRefresh: Cp
  }, Dl = null, ja = 0;
  function ro(e) {
    var n = ja;
    return ja += 1, Dl === null && (Dl = []), qh(Dl, e, n);
  }
  function Ua(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function lo(e, n) {
    throw n.$$typeof === y ? Error(i(525)) : (e = Object.prototype.toString.call(n), Error(
      i(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function Np(e) {
    var n = e._init;
    return n(e._payload);
  }
  function Op(e) {
    function n(M, N) {
      if (e) {
        var L = M.deletions;
        L === null ? (M.deletions = [N], M.flags |= 16) : L.push(N);
      }
    }
    function l(M, N) {
      if (!e) return null;
      for (; N !== null; )
        n(M, N), N = N.sibling;
      return null;
    }
    function o(M) {
      for (var N = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? N.set(M.key, M) : N.set(M.index, M), M = M.sibling;
      return N;
    }
    function f(M, N) {
      return M = In(M, N), M.index = 0, M.sibling = null, M;
    }
    function p(M, N, L) {
      return M.index = L, e ? (L = M.alternate, L !== null ? (L = L.index, L < N ? (M.flags |= 67108866, N) : L) : (M.flags |= 67108866, N)) : (M.flags |= 1048576, N);
    }
    function v(M) {
      return e && M.alternate === null && (M.flags |= 67108866), M;
    }
    function S(M, N, L, J) {
      return N === null || N.tag !== 6 ? (N = Wu(L, M.mode, J), N.return = M, N) : (N = f(N, L), N.return = M, N);
    }
    function D(M, N, L, J) {
      var ce = L.type;
      return ce === k ? K(
        M,
        N,
        L.props.children,
        J,
        L.key
      ) : N !== null && (N.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === q && Np(ce) === N.type) ? (N = f(N, L.props), Ua(N, L), N.return = M, N) : (N = Hi(
        L.type,
        L.key,
        L.props,
        null,
        M.mode,
        J
      ), Ua(N, L), N.return = M, N);
    }
    function U(M, N, L, J) {
      return N === null || N.tag !== 4 || N.stateNode.containerInfo !== L.containerInfo || N.stateNode.implementation !== L.implementation ? (N = es(L, M.mode, J), N.return = M, N) : (N = f(N, L.children || []), N.return = M, N);
    }
    function K(M, N, L, J, ce) {
      return N === null || N.tag !== 7 ? (N = Hr(
        L,
        M.mode,
        J,
        ce
      ), N.return = M, N) : (N = f(N, L), N.return = M, N);
    }
    function W(M, N, L) {
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return N = Wu(
          "" + N,
          M.mode,
          L
        ), N.return = M, N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case b:
            return L = Hi(
              N.type,
              N.key,
              N.props,
              null,
              M.mode,
              L
            ), Ua(L, N), L.return = M, L;
          case x:
            return N = es(
              N,
              M.mode,
              L
            ), N.return = M, N;
          case q:
            var J = N._init;
            return N = J(N._payload), W(M, N, L);
        }
        if (oe(N) || te(N))
          return N = Hr(
            N,
            M.mode,
            L,
            null
          ), N.return = M, N;
        if (typeof N.then == "function")
          return W(M, ro(N), L);
        if (N.$$typeof === j)
          return W(
            M,
            Pi(M, N),
            L
          );
        lo(M, N);
      }
      return null;
    }
    function H(M, N, L, J) {
      var ce = N !== null ? N.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return ce !== null ? null : S(M, N, "" + L, J);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case b:
            return L.key === ce ? D(M, N, L, J) : null;
          case x:
            return L.key === ce ? U(M, N, L, J) : null;
          case q:
            return ce = L._init, L = ce(L._payload), H(M, N, L, J);
        }
        if (oe(L) || te(L))
          return ce !== null ? null : K(M, N, L, J, null);
        if (typeof L.then == "function")
          return H(
            M,
            N,
            ro(L),
            J
          );
        if (L.$$typeof === j)
          return H(
            M,
            N,
            Pi(M, L),
            J
          );
        lo(M, L);
      }
      return null;
    }
    function V(M, N, L, J, ce) {
      if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
        return M = M.get(L) || null, S(N, M, "" + J, ce);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case b:
            return M = M.get(
              J.key === null ? L : J.key
            ) || null, D(N, M, J, ce);
          case x:
            return M = M.get(
              J.key === null ? L : J.key
            ) || null, U(N, M, J, ce);
          case q:
            var Oe = J._init;
            return J = Oe(J._payload), V(
              M,
              N,
              L,
              J,
              ce
            );
        }
        if (oe(J) || te(J))
          return M = M.get(L) || null, K(N, M, J, ce, null);
        if (typeof J.then == "function")
          return V(
            M,
            N,
            L,
            ro(J),
            ce
          );
        if (J.$$typeof === j)
          return V(
            M,
            N,
            L,
            Pi(N, J),
            ce
          );
        lo(N, J);
      }
      return null;
    }
    function Ee(M, N, L, J) {
      for (var ce = null, Oe = null, pe = N, we = N = 0, Et = null; pe !== null && we < L.length; we++) {
        pe.index > we ? (Et = pe, pe = null) : Et = pe.sibling;
        var qe = H(
          M,
          pe,
          L[we],
          J
        );
        if (qe === null) {
          pe === null && (pe = Et);
          break;
        }
        e && pe && qe.alternate === null && n(M, pe), N = p(qe, N, we), Oe === null ? ce = qe : Oe.sibling = qe, Oe = qe, pe = Et;
      }
      if (we === L.length)
        return l(M, pe), Ye && Vr(M, we), ce;
      if (pe === null) {
        for (; we < L.length; we++)
          pe = W(M, L[we], J), pe !== null && (N = p(
            pe,
            N,
            we
          ), Oe === null ? ce = pe : Oe.sibling = pe, Oe = pe);
        return Ye && Vr(M, we), ce;
      }
      for (pe = o(pe); we < L.length; we++)
        Et = V(
          pe,
          M,
          we,
          L[we],
          J
        ), Et !== null && (e && Et.alternate !== null && pe.delete(
          Et.key === null ? we : Et.key
        ), N = p(
          Et,
          N,
          we
        ), Oe === null ? ce = Et : Oe.sibling = Et, Oe = Et);
      return e && pe.forEach(function(Tr) {
        return n(M, Tr);
      }), Ye && Vr(M, we), ce;
    }
    function xe(M, N, L, J) {
      if (L == null) throw Error(i(151));
      for (var ce = null, Oe = null, pe = N, we = N = 0, Et = null, qe = L.next(); pe !== null && !qe.done; we++, qe = L.next()) {
        pe.index > we ? (Et = pe, pe = null) : Et = pe.sibling;
        var Tr = H(M, pe, qe.value, J);
        if (Tr === null) {
          pe === null && (pe = Et);
          break;
        }
        e && pe && Tr.alternate === null && n(M, pe), N = p(Tr, N, we), Oe === null ? ce = Tr : Oe.sibling = Tr, Oe = Tr, pe = Et;
      }
      if (qe.done)
        return l(M, pe), Ye && Vr(M, we), ce;
      if (pe === null) {
        for (; !qe.done; we++, qe = L.next())
          qe = W(M, qe.value, J), qe !== null && (N = p(qe, N, we), Oe === null ? ce = qe : Oe.sibling = qe, Oe = qe);
        return Ye && Vr(M, we), ce;
      }
      for (pe = o(pe); !qe.done; we++, qe = L.next())
        qe = V(pe, M, we, qe.value, J), qe !== null && (e && qe.alternate !== null && pe.delete(qe.key === null ? we : qe.key), N = p(qe, N, we), Oe === null ? ce = qe : Oe.sibling = qe, Oe = qe);
      return e && pe.forEach(function(Gw) {
        return n(M, Gw);
      }), Ye && Vr(M, we), ce;
    }
    function Ke(M, N, L, J) {
      if (typeof L == "object" && L !== null && L.type === k && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case b:
            e: {
              for (var ce = L.key; N !== null; ) {
                if (N.key === ce) {
                  if (ce = L.type, ce === k) {
                    if (N.tag === 7) {
                      l(
                        M,
                        N.sibling
                      ), J = f(
                        N,
                        L.props.children
                      ), J.return = M, M = J;
                      break e;
                    }
                  } else if (N.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === q && Np(ce) === N.type) {
                    l(
                      M,
                      N.sibling
                    ), J = f(N, L.props), Ua(J, L), J.return = M, M = J;
                    break e;
                  }
                  l(M, N);
                  break;
                } else n(M, N);
                N = N.sibling;
              }
              L.type === k ? (J = Hr(
                L.props.children,
                M.mode,
                J,
                L.key
              ), J.return = M, M = J) : (J = Hi(
                L.type,
                L.key,
                L.props,
                null,
                M.mode,
                J
              ), Ua(J, L), J.return = M, M = J);
            }
            return v(M);
          case x:
            e: {
              for (ce = L.key; N !== null; ) {
                if (N.key === ce)
                  if (N.tag === 4 && N.stateNode.containerInfo === L.containerInfo && N.stateNode.implementation === L.implementation) {
                    l(
                      M,
                      N.sibling
                    ), J = f(N, L.children || []), J.return = M, M = J;
                    break e;
                  } else {
                    l(M, N);
                    break;
                  }
                else n(M, N);
                N = N.sibling;
              }
              J = es(L, M.mode, J), J.return = M, M = J;
            }
            return v(M);
          case q:
            return ce = L._init, L = ce(L._payload), Ke(
              M,
              N,
              L,
              J
            );
        }
        if (oe(L))
          return Ee(
            M,
            N,
            L,
            J
          );
        if (te(L)) {
          if (ce = te(L), typeof ce != "function") throw Error(i(150));
          return L = ce.call(L), xe(
            M,
            N,
            L,
            J
          );
        }
        if (typeof L.then == "function")
          return Ke(
            M,
            N,
            ro(L),
            J
          );
        if (L.$$typeof === j)
          return Ke(
            M,
            N,
            Pi(M, L),
            J
          );
        lo(M, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L, N !== null && N.tag === 6 ? (l(M, N.sibling), J = f(N, L), J.return = M, M = J) : (l(M, N), J = Wu(L, M.mode, J), J.return = M, M = J), v(M)) : l(M, N);
    }
    return function(M, N, L, J) {
      try {
        ja = 0;
        var ce = Ke(
          M,
          N,
          L,
          J
        );
        return Dl = null, ce;
      } catch (pe) {
        if (pe === Ta || pe === Gi) throw pe;
        var Oe = Kt(29, pe, null, M.mode);
        return Oe.lanes = J, Oe.return = M, Oe;
      } finally {
      }
    };
  }
  var Nl = Op(!0), zp = Op(!1), pn = X(null), Tn = null;
  function dr(e) {
    var n = e.alternate;
    E(gt, gt.current & 1), E(pn, e), Tn === null && (n === null || Al.current !== null || n.memoizedState !== null) && (Tn = e);
  }
  function Mp(e) {
    if (e.tag === 22) {
      if (E(gt, gt.current), E(pn, e), Tn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Tn = e);
      }
    } else hr();
  }
  function hr() {
    E(gt, gt.current), E(pn, pn.current);
  }
  function Fn(e) {
    ae(pn), Tn === e && (Tn = null), ae(gt);
  }
  var gt = X(0);
  function ao(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var l = n.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || Sc(l)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function zs(e, n, l, o) {
    n = e.memoizedState, l = l(o, n), l = l == null ? n : g({}, n, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Ms = {
    enqueueSetState: function(e, n, l) {
      e = e._reactInternals;
      var o = en(), f = sr(o);
      f.payload = n, l != null && (f.callback = l), n = cr(e, f, o), n !== null && (tn(n, e, o), Ra(n, e, o));
    },
    enqueueReplaceState: function(e, n, l) {
      e = e._reactInternals;
      var o = en(), f = sr(o);
      f.tag = 1, f.payload = n, l != null && (f.callback = l), n = cr(e, f, o), n !== null && (tn(n, e, o), Ra(n, e, o));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var l = en(), o = sr(l);
      o.tag = 2, n != null && (o.callback = n), n = cr(e, o, l), n !== null && (tn(n, e, l), Ra(n, e, l));
    }
  };
  function Lp(e, n, l, o, f, p, v) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, p, v) : n.prototype && n.prototype.isPureReactComponent ? !ba(l, o) || !ba(f, p) : !0;
  }
  function jp(e, n, l, o) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(l, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(l, o), n.state !== e && Ms.enqueueReplaceState(n, n.state, null);
  }
  function Zr(e, n) {
    var l = n;
    if ("ref" in n) {
      l = {};
      for (var o in n)
        o !== "ref" && (l[o] = n[o]);
    }
    if (e = e.defaultProps) {
      l === n && (l = g({}, l));
      for (var f in e)
        l[f] === void 0 && (l[f] = e[f]);
    }
    return l;
  }
  var io = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function Up(e) {
    io(e);
  }
  function Bp(e) {
    console.error(e);
  }
  function Ip(e) {
    io(e);
  }
  function oo(e, n) {
    try {
      var l = e.onUncaughtError;
      l(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Hp(e, n, l) {
    try {
      var o = e.onCaughtError;
      o(l.value, {
        componentStack: l.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (f) {
      setTimeout(function() {
        throw f;
      });
    }
  }
  function Ls(e, n, l) {
    return l = sr(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      oo(e, n);
    }, l;
  }
  function qp(e) {
    return e = sr(e), e.tag = 3, e;
  }
  function Vp(e, n, l, o) {
    var f = l.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var p = o.value;
      e.payload = function() {
        return f(p);
      }, e.callback = function() {
        Hp(n, l, o);
      };
    }
    var v = l.stateNode;
    v !== null && typeof v.componentDidCatch == "function" && (e.callback = function() {
      Hp(n, l, o), typeof f != "function" && (br === null ? br = /* @__PURE__ */ new Set([this]) : br.add(this));
      var S = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function Gx(e, n, l, o, f) {
    if (l.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = l.alternate, n !== null && ka(
        n,
        l,
        f,
        !0
      ), l = pn.current, l !== null) {
        switch (l.tag) {
          case 13:
            return Tn === null ? ac() : l.alternate === null && ot === 0 && (ot = 3), l.flags &= -257, l.flags |= 65536, l.lanes = f, o === cs ? l.flags |= 16384 : (n = l.updateQueue, n === null ? l.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), oc(e, o, f)), !1;
          case 22:
            return l.flags |= 65536, o === cs ? l.flags |= 16384 : (n = l.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, l.updateQueue = n) : (l = n.retryQueue, l === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : l.add(o)), oc(e, o, f)), !1;
        }
        throw Error(i(435, l.tag));
      }
      return oc(e, o, f), ac(), !1;
    }
    if (Ye)
      return n = pn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = f, o !== rs && (e = Error(i(422), { cause: o }), Ea(cn(e, l)))) : (o !== rs && (n = Error(i(423), {
        cause: o
      }), Ea(
        cn(n, l)
      )), e = e.current.alternate, e.flags |= 65536, f &= -f, e.lanes |= f, o = cn(o, l), f = Ls(
        e.stateNode,
        o,
        f
      ), hs(e, f), ot !== 4 && (ot = 2)), !1;
    var p = Error(i(520), { cause: o });
    if (p = cn(p, l), Pa === null ? Pa = [p] : Pa.push(p), ot !== 4 && (ot = 2), n === null) return !0;
    o = cn(o, l), l = n;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = f & -f, l.lanes |= e, e = Ls(l.stateNode, o, e), hs(l, e), !1;
        case 1:
          if (n = l.type, p = l.stateNode, (l.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (br === null || !br.has(p))))
            return l.flags |= 65536, f &= -f, l.lanes |= f, f = qp(f), Vp(
              f,
              e,
              l,
              o
            ), hs(l, f), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Yp = Error(i(461)), wt = !1;
  function Ct(e, n, l, o) {
    n.child = e === null ? zp(n, null, l, o) : Nl(
      n,
      e.child,
      l,
      o
    );
  }
  function Pp(e, n, l, o, f) {
    l = l.render;
    var p = n.ref;
    if ("ref" in o) {
      var v = {};
      for (var S in o)
        S !== "ref" && (v[S] = o[S]);
    } else v = o;
    return Gr(n), o = vs(
      e,
      n,
      l,
      v,
      p,
      f
    ), S = bs(), e !== null && !wt ? (xs(e, n, f), Gn(e, n, f)) : (Ye && S && ts(n), n.flags |= 1, Ct(e, n, o, f), n.child);
  }
  function Fp(e, n, l, o, f) {
    if (e === null) {
      var p = l.type;
      return typeof p == "function" && !$u(p) && p.defaultProps === void 0 && l.compare === null ? (n.tag = 15, n.type = p, Gp(
        e,
        n,
        p,
        o,
        f
      )) : (e = Hi(
        l.type,
        null,
        o,
        n,
        n.mode,
        f
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (p = e.child, !Ys(e, f)) {
      var v = p.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ba, l(v, o) && e.ref === n.ref)
        return Gn(e, n, f);
    }
    return n.flags |= 1, e = In(p, o), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Gp(e, n, l, o, f) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (ba(p, o) && e.ref === n.ref)
        if (wt = !1, n.pendingProps = o = p, Ys(e, f))
          (e.flags & 131072) !== 0 && (wt = !0);
        else
          return n.lanes = e.lanes, Gn(e, n, f);
    }
    return js(
      e,
      n,
      l,
      o,
      f
    );
  }
  function Xp(e, n, l) {
    var o = n.pendingProps, f = o.children, p = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (o = p !== null ? p.baseLanes | l : l, e !== null) {
          for (f = n.child = e.child, p = 0; f !== null; )
            p = p | f.lanes | f.childLanes, f = f.sibling;
          n.childLanes = p & ~o;
        } else n.childLanes = 0, n.child = null;
        return Qp(
          e,
          n,
          o,
          l
        );
      }
      if ((l & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Fi(
          n,
          p !== null ? p.cachePool : null
        ), p !== null ? Gh(n, p) : ms(), Mp(n);
      else
        return n.lanes = n.childLanes = 536870912, Qp(
          e,
          n,
          p !== null ? p.baseLanes | l : l,
          l
        );
    } else
      p !== null ? (Fi(n, p.cachePool), Gh(n, p), hr(), n.memoizedState = null) : (e !== null && Fi(n, null), ms(), hr());
    return Ct(e, n, f, l), n.child;
  }
  function Qp(e, n, l, o) {
    var f = ss();
    return f = f === null ? null : { parent: mt._currentValue, pool: f }, n.memoizedState = {
      baseLanes: l,
      cachePool: f
    }, e !== null && Fi(n, null), ms(), Mp(n), e !== null && ka(e, n, o, !0), null;
  }
  function uo(e, n) {
    var l = n.ref;
    if (l === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(i(284));
      (e === null || e.ref !== l) && (n.flags |= 4194816);
    }
  }
  function js(e, n, l, o, f) {
    return Gr(n), l = vs(
      e,
      n,
      l,
      o,
      void 0,
      f
    ), o = bs(), e !== null && !wt ? (xs(e, n, f), Gn(e, n, f)) : (Ye && o && ts(n), n.flags |= 1, Ct(e, n, l, f), n.child);
  }
  function Zp(e, n, l, o, f, p) {
    return Gr(n), n.updateQueue = null, l = Qh(
      n,
      o,
      l,
      f
    ), Xh(e), o = bs(), e !== null && !wt ? (xs(e, n, p), Gn(e, n, p)) : (Ye && o && ts(n), n.flags |= 1, Ct(e, n, l, p), n.child);
  }
  function Kp(e, n, l, o, f) {
    if (Gr(n), n.stateNode === null) {
      var p = wl, v = l.contextType;
      typeof v == "object" && v !== null && (p = Nt(v)), p = new l(o, p), n.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, p.updater = Ms, n.stateNode = p, p._reactInternals = n, p = n.stateNode, p.props = o, p.state = n.memoizedState, p.refs = {}, fs(n), v = l.contextType, p.context = typeof v == "object" && v !== null ? Nt(v) : wl, p.state = n.memoizedState, v = l.getDerivedStateFromProps, typeof v == "function" && (zs(
        n,
        l,
        v,
        o
      ), p.state = n.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (v = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), v !== p.state && Ms.enqueueReplaceState(p, p.state, null), Na(n, o, p, f), Da(), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
    } else if (e === null) {
      p = n.stateNode;
      var S = n.memoizedProps, D = Zr(l, S);
      p.props = D;
      var U = p.context, K = l.contextType;
      v = wl, typeof K == "object" && K !== null && (v = Nt(K));
      var W = l.getDerivedStateFromProps;
      K = typeof W == "function" || typeof p.getSnapshotBeforeUpdate == "function", S = n.pendingProps !== S, K || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (S || U !== v) && jp(
        n,
        p,
        o,
        v
      ), ur = !1;
      var H = n.memoizedState;
      p.state = H, Na(n, o, p, f), Da(), U = n.memoizedState, S || H !== U || ur ? (typeof W == "function" && (zs(
        n,
        l,
        W,
        o
      ), U = n.memoizedState), (D = ur || Lp(
        n,
        l,
        D,
        o,
        H,
        U,
        v
      )) ? (K || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = U), p.props = o, p.state = U, p.context = v, o = D) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
    } else {
      p = n.stateNode, ds(e, n), v = n.memoizedProps, K = Zr(l, v), p.props = K, W = n.pendingProps, H = p.context, U = l.contextType, D = wl, typeof U == "object" && U !== null && (D = Nt(U)), S = l.getDerivedStateFromProps, (U = typeof S == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (v !== W || H !== D) && jp(
        n,
        p,
        o,
        D
      ), ur = !1, H = n.memoizedState, p.state = H, Na(n, o, p, f), Da();
      var V = n.memoizedState;
      v !== W || H !== V || ur || e !== null && e.dependencies !== null && Yi(e.dependencies) ? (typeof S == "function" && (zs(
        n,
        l,
        S,
        o
      ), V = n.memoizedState), (K = ur || Lp(
        n,
        l,
        K,
        o,
        H,
        V,
        D
      ) || e !== null && e.dependencies !== null && Yi(e.dependencies)) ? (U || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(o, V, D), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(
        o,
        V,
        D
      )), typeof p.componentDidUpdate == "function" && (n.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || v === e.memoizedProps && H === e.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && H === e.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = V), p.props = o, p.state = V, p.context = D, o = K) : (typeof p.componentDidUpdate != "function" || v === e.memoizedProps && H === e.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && H === e.memoizedState || (n.flags |= 1024), o = !1);
    }
    return p = o, uo(e, n), o = (n.flags & 128) !== 0, p || o ? (p = n.stateNode, l = o && typeof l.getDerivedStateFromError != "function" ? null : p.render(), n.flags |= 1, e !== null && o ? (n.child = Nl(
      n,
      e.child,
      null,
      f
    ), n.child = Nl(
      n,
      null,
      l,
      f
    )) : Ct(e, n, l, f), n.memoizedState = p.state, e = n.child) : e = Gn(
      e,
      n,
      f
    ), e;
  }
  function Jp(e, n, l, o) {
    return Sa(), n.flags |= 256, Ct(e, n, l, o), n.child;
  }
  var Us = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Bs(e) {
    return { baseLanes: e, cachePool: Bh() };
  }
  function Is(e, n, l) {
    return e = e !== null ? e.childLanes & ~l : 0, n && (e |= mn), e;
  }
  function $p(e, n, l) {
    var o = n.pendingProps, f = !1, p = (n.flags & 128) !== 0, v;
    if ((v = p) || (v = e !== null && e.memoizedState === null ? !1 : (gt.current & 2) !== 0), v && (f = !0, n.flags &= -129), v = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Ye) {
        if (f ? dr(n) : hr(), Ye) {
          var S = it, D;
          if (D = S) {
            e: {
              for (D = S, S = An; D.nodeType !== 8; ) {
                if (!S) {
                  S = null;
                  break e;
                }
                if (D = Sn(
                  D.nextSibling
                ), D === null) {
                  S = null;
                  break e;
                }
              }
              S = D;
            }
            S !== null ? (n.memoizedState = {
              dehydrated: S,
              treeContext: qr !== null ? { id: Hn, overflow: qn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, D = Kt(
              18,
              null,
              null,
              0
            ), D.stateNode = S, D.return = n, n.child = D, jt = n, it = null, D = !0) : D = !1;
          }
          D || Pr(n);
        }
        if (S = n.memoizedState, S !== null && (S = S.dehydrated, S !== null))
          return Sc(S) ? n.lanes = 32 : n.lanes = 536870912, null;
        Fn(n);
      }
      return S = o.children, o = o.fallback, f ? (hr(), f = n.mode, S = so(
        { mode: "hidden", children: S },
        f
      ), o = Hr(
        o,
        f,
        l,
        null
      ), S.return = n, o.return = n, S.sibling = o, n.child = S, f = n.child, f.memoizedState = Bs(l), f.childLanes = Is(
        e,
        v,
        l
      ), n.memoizedState = Us, o) : (dr(n), Hs(n, S));
    }
    if (D = e.memoizedState, D !== null && (S = D.dehydrated, S !== null)) {
      if (p)
        n.flags & 256 ? (dr(n), n.flags &= -257, n = qs(
          e,
          n,
          l
        )) : n.memoizedState !== null ? (hr(), n.child = e.child, n.flags |= 128, n = null) : (hr(), f = o.fallback, S = n.mode, o = so(
          { mode: "visible", children: o.children },
          S
        ), f = Hr(
          f,
          S,
          l,
          null
        ), f.flags |= 2, o.return = n, f.return = n, o.sibling = f, n.child = o, Nl(
          n,
          e.child,
          null,
          l
        ), o = n.child, o.memoizedState = Bs(l), o.childLanes = Is(
          e,
          v,
          l
        ), n.memoizedState = Us, n = f);
      else if (dr(n), Sc(S)) {
        if (v = S.nextSibling && S.nextSibling.dataset, v) var U = v.dgst;
        v = U, o = Error(i(419)), o.stack = "", o.digest = v, Ea({ value: o, source: null, stack: null }), n = qs(
          e,
          n,
          l
        );
      } else if (wt || ka(e, n, l, !1), v = (l & e.childLanes) !== 0, wt || v) {
        if (v = We, v !== null && (o = l & -l, o = (o & 42) !== 0 ? 1 : Eu(o), o = (o & (v.suspendedLanes | l)) !== 0 ? 0 : o, o !== 0 && o !== D.retryLane))
          throw D.retryLane = o, xl(e, o), tn(v, e, o), Yp;
        S.data === "$?" || ac(), n = qs(
          e,
          n,
          l
        );
      } else
        S.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = D.treeContext, it = Sn(
          S.nextSibling
        ), jt = n, Ye = !0, Yr = null, An = !1, e !== null && (dn[hn++] = Hn, dn[hn++] = qn, dn[hn++] = qr, Hn = e.id, qn = e.overflow, qr = n), n = Hs(
          n,
          o.children
        ), n.flags |= 4096);
      return n;
    }
    return f ? (hr(), f = o.fallback, S = n.mode, D = e.child, U = D.sibling, o = In(D, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = D.subtreeFlags & 65011712, U !== null ? f = In(U, f) : (f = Hr(
      f,
      S,
      l,
      null
    ), f.flags |= 2), f.return = n, o.return = n, o.sibling = f, n.child = o, o = f, f = n.child, S = e.child.memoizedState, S === null ? S = Bs(l) : (D = S.cachePool, D !== null ? (U = mt._currentValue, D = D.parent !== U ? { parent: U, pool: U } : D) : D = Bh(), S = {
      baseLanes: S.baseLanes | l,
      cachePool: D
    }), f.memoizedState = S, f.childLanes = Is(
      e,
      v,
      l
    ), n.memoizedState = Us, o) : (dr(n), l = e.child, e = l.sibling, l = In(l, {
      mode: "visible",
      children: o.children
    }), l.return = n, l.sibling = null, e !== null && (v = n.deletions, v === null ? (n.deletions = [e], n.flags |= 16) : v.push(e)), n.child = l, n.memoizedState = null, l);
  }
  function Hs(e, n) {
    return n = so(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function so(e, n) {
    return e = Kt(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function qs(e, n, l) {
    return Nl(n, e.child, null, l), e = Hs(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function Wp(e, n, l) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), as(e.return, n, l);
  }
  function Vs(e, n, l, o, f) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: l,
      tailMode: f
    } : (p.isBackwards = n, p.rendering = null, p.renderingStartTime = 0, p.last = o, p.tail = l, p.tailMode = f);
  }
  function em(e, n, l) {
    var o = n.pendingProps, f = o.revealOrder, p = o.tail;
    if (Ct(e, n, o.children, l), o = gt.current, (o & 2) !== 0)
      o = o & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Wp(e, l, n);
          else if (e.tag === 19)
            Wp(e, l, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      o &= 1;
    }
    switch (E(gt, o), f) {
      case "forwards":
        for (l = n.child, f = null; l !== null; )
          e = l.alternate, e !== null && ao(e) === null && (f = l), l = l.sibling;
        l = f, l === null ? (f = n.child, n.child = null) : (f = l.sibling, l.sibling = null), Vs(
          n,
          !1,
          f,
          l,
          p
        );
        break;
      case "backwards":
        for (l = null, f = n.child, n.child = null; f !== null; ) {
          if (e = f.alternate, e !== null && ao(e) === null) {
            n.child = f;
            break;
          }
          e = f.sibling, f.sibling = l, l = f, f = e;
        }
        Vs(
          n,
          !0,
          l,
          null,
          p
        );
        break;
      case "together":
        Vs(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Gn(e, n, l) {
    if (e !== null && (n.dependencies = e.dependencies), vr |= n.lanes, (l & n.childLanes) === 0)
      if (e !== null) {
        if (ka(
          e,
          n,
          l,
          !1
        ), (l & n.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && n.child !== e.child)
      throw Error(i(153));
    if (n.child !== null) {
      for (e = n.child, l = In(e, e.pendingProps), n.child = l, l.return = n; e.sibling !== null; )
        e = e.sibling, l = l.sibling = In(e, e.pendingProps), l.return = n;
      l.sibling = null;
    }
    return n.child;
  }
  function Ys(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Yi(e)));
  }
  function Xx(e, n, l) {
    switch (n.tag) {
      case 3:
        Te(n, n.stateNode.containerInfo), or(n, mt, e.memoizedState.cache), Sa();
        break;
      case 27:
      case 5:
        rt(n);
        break;
      case 4:
        Te(n, n.stateNode.containerInfo);
        break;
      case 10:
        or(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (dr(n), n.flags |= 128, null) : (l & n.child.childLanes) !== 0 ? $p(e, n, l) : (dr(n), e = Gn(
            e,
            n,
            l
          ), e !== null ? e.sibling : null);
        dr(n);
        break;
      case 19:
        var f = (e.flags & 128) !== 0;
        if (o = (l & n.childLanes) !== 0, o || (ka(
          e,
          n,
          l,
          !1
        ), o = (l & n.childLanes) !== 0), f) {
          if (o)
            return em(
              e,
              n,
              l
            );
          n.flags |= 128;
        }
        if (f = n.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), E(gt, gt.current), o) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Xp(e, n, l);
      case 24:
        or(n, mt, e.memoizedState.cache);
    }
    return Gn(e, n, l);
  }
  function tm(e, n, l) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        wt = !0;
      else {
        if (!Ys(e, l) && (n.flags & 128) === 0)
          return wt = !1, Xx(
            e,
            n,
            l
          );
        wt = (e.flags & 131072) !== 0;
      }
    else
      wt = !1, Ye && (n.flags & 1048576) !== 0 && Nh(n, Vi, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var o = n.elementType, f = o._init;
          if (o = f(o._payload), n.type = o, typeof o == "function")
            $u(o) ? (e = Zr(o, e), n.tag = 1, n = Kp(
              null,
              n,
              o,
              e,
              l
            )) : (n.tag = 0, n = js(
              null,
              n,
              o,
              e,
              l
            ));
          else {
            if (o != null) {
              if (f = o.$$typeof, f === Q) {
                n.tag = 11, n = Pp(
                  null,
                  n,
                  o,
                  e,
                  l
                );
                break e;
              } else if (f === F) {
                n.tag = 14, n = Fp(
                  null,
                  n,
                  o,
                  e,
                  l
                );
                break e;
              }
            }
            throw n = le(o) || o, Error(i(306, n, ""));
          }
        }
        return n;
      case 0:
        return js(
          e,
          n,
          n.type,
          n.pendingProps,
          l
        );
      case 1:
        return o = n.type, f = Zr(
          o,
          n.pendingProps
        ), Kp(
          e,
          n,
          o,
          f,
          l
        );
      case 3:
        e: {
          if (Te(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(i(387));
          o = n.pendingProps;
          var p = n.memoizedState;
          f = p.element, ds(e, n), Na(n, o, null, l);
          var v = n.memoizedState;
          if (o = v.cache, or(n, mt, o), o !== p.cache && is(
            n,
            [mt],
            l,
            !0
          ), Da(), o = v.element, p.isDehydrated)
            if (p = {
              element: o,
              isDehydrated: !1,
              cache: v.cache
            }, n.updateQueue.baseState = p, n.memoizedState = p, n.flags & 256) {
              n = Jp(
                e,
                n,
                o,
                l
              );
              break e;
            } else if (o !== f) {
              f = cn(
                Error(i(424)),
                n
              ), Ea(f), n = Jp(
                e,
                n,
                o,
                l
              );
              break e;
            } else {
              switch (e = n.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (it = Sn(e.firstChild), jt = n, Ye = !0, Yr = null, An = !0, l = zp(
                n,
                null,
                o,
                l
              ), n.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (Sa(), o === f) {
              n = Gn(
                e,
                n,
                l
              );
              break e;
            }
            Ct(
              e,
              n,
              o,
              l
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return uo(e, n), e === null ? (l = ag(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = l : Ye || (l = n.type, e = n.pendingProps, o = ko(
          se.current
        ).createElement(l), o[Dt] = n, o[qt] = e, Tt(o, l, e), xt(o), n.stateNode = o) : n.memoizedState = ag(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return rt(n), e === null && Ye && (o = n.stateNode = ng(
          n.type,
          n.pendingProps,
          se.current
        ), jt = n, An = !0, f = it, Sr(n.type) ? (Ec = f, it = Sn(
          o.firstChild
        )) : it = f), Ct(
          e,
          n,
          n.pendingProps.children,
          l
        ), uo(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Ye && ((f = o = it) && (o = ww(
          o,
          n.type,
          n.pendingProps,
          An
        ), o !== null ? (n.stateNode = o, jt = n, it = Sn(
          o.firstChild
        ), An = !1, f = !0) : f = !1), f || Pr(n)), rt(n), f = n.type, p = n.pendingProps, v = e !== null ? e.memoizedProps : null, o = p.children, bc(f, p) ? o = null : v !== null && bc(f, v) && (n.flags |= 32), n.memoizedState !== null && (f = vs(
          e,
          n,
          Ix,
          null,
          null,
          l
        ), Wa._currentValue = f), uo(e, n), Ct(e, n, o, l), n.child;
      case 6:
        return e === null && Ye && ((e = l = it) && (l = Sw(
          l,
          n.pendingProps,
          An
        ), l !== null ? (n.stateNode = l, jt = n, it = null, e = !0) : e = !1), e || Pr(n)), null;
      case 13:
        return $p(e, n, l);
      case 4:
        return Te(
          n,
          n.stateNode.containerInfo
        ), o = n.pendingProps, e === null ? n.child = Nl(
          n,
          null,
          o,
          l
        ) : Ct(
          e,
          n,
          o,
          l
        ), n.child;
      case 11:
        return Pp(
          e,
          n,
          n.type,
          n.pendingProps,
          l
        );
      case 7:
        return Ct(
          e,
          n,
          n.pendingProps,
          l
        ), n.child;
      case 8:
        return Ct(
          e,
          n,
          n.pendingProps.children,
          l
        ), n.child;
      case 12:
        return Ct(
          e,
          n,
          n.pendingProps.children,
          l
        ), n.child;
      case 10:
        return o = n.pendingProps, or(n, n.type, o.value), Ct(
          e,
          n,
          o.children,
          l
        ), n.child;
      case 9:
        return f = n.type._context, o = n.pendingProps.children, Gr(n), f = Nt(f), o = o(f), n.flags |= 1, Ct(e, n, o, l), n.child;
      case 14:
        return Fp(
          e,
          n,
          n.type,
          n.pendingProps,
          l
        );
      case 15:
        return Gp(
          e,
          n,
          n.type,
          n.pendingProps,
          l
        );
      case 19:
        return em(e, n, l);
      case 31:
        return o = n.pendingProps, l = n.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (l = so(
          o,
          l
        ), l.ref = n.ref, n.child = l, l.return = n, n = l) : (l = In(e.child, o), l.ref = n.ref, n.child = l, l.return = n, n = l), n;
      case 22:
        return Xp(e, n, l);
      case 24:
        return Gr(n), o = Nt(mt), e === null ? (f = ss(), f === null && (f = We, p = os(), f.pooledCache = p, p.refCount++, p !== null && (f.pooledCacheLanes |= l), f = p), n.memoizedState = {
          parent: o,
          cache: f
        }, fs(n), or(n, mt, f)) : ((e.lanes & l) !== 0 && (ds(e, n), Na(n, null, null, l), Da()), f = e.memoizedState, p = n.memoizedState, f.parent !== o ? (f = { parent: o, cache: o }, n.memoizedState = f, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = f), or(n, mt, o)) : (o = p.cache, or(n, mt, o), o !== f.cache && is(
          n,
          [mt],
          l,
          !0
        ))), Ct(
          e,
          n,
          n.pendingProps.children,
          l
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(i(156, n.tag));
  }
  function Xn(e) {
    e.flags |= 4;
  }
  function nm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !cg(n)) {
      if (n = pn.current, n !== null && ((Ue & 4194048) === Ue ? Tn !== null : (Ue & 62914560) !== Ue && (Ue & 536870912) === 0 || n !== Tn))
        throw _a = cs, Ih;
      e.flags |= 8192;
    }
  }
  function co(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? Md() : 536870912, e.lanes |= n, Ll |= n);
  }
  function Ba(e, n) {
    if (!Ye)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
      }
  }
  function lt(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, l = 0, o = 0;
    if (n)
      for (var f = e.child; f !== null; )
        l |= f.lanes | f.childLanes, o |= f.subtreeFlags & 65011712, o |= f.flags & 65011712, f.return = e, f = f.sibling;
    else
      for (f = e.child; f !== null; )
        l |= f.lanes | f.childLanes, o |= f.subtreeFlags, o |= f.flags, f.return = e, f = f.sibling;
    return e.subtreeFlags |= o, e.childLanes = l, n;
  }
  function Qx(e, n, l) {
    var o = n.pendingProps;
    switch (ns(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return lt(n), null;
      case 1:
        return lt(n), null;
      case 3:
        return l = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), Yn(mt), tt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (wa(n) ? Xn(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Mh())), lt(n), null;
      case 26:
        return l = n.memoizedState, e === null ? (Xn(n), l !== null ? (lt(n), nm(n, l)) : (lt(n), n.flags &= -16777217)) : l ? l !== e.memoizedState ? (Xn(n), lt(n), nm(n, l)) : (lt(n), n.flags &= -16777217) : (e.memoizedProps !== o && Xn(n), lt(n), n.flags &= -16777217), null;
      case 27:
        vt(n), l = se.current;
        var f = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== o && Xn(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(i(166));
            return lt(n), null;
          }
          e = ue.current, wa(n) ? Oh(n) : (e = ng(f, o, l), n.stateNode = e, Xn(n));
        }
        return lt(n), null;
      case 5:
        if (vt(n), l = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== o && Xn(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(i(166));
            return lt(n), null;
          }
          if (e = ue.current, wa(n))
            Oh(n);
          else {
            switch (f = ko(
              se.current
            ), e) {
              case 1:
                e = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  l
                );
                break;
              case 2:
                e = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  l
                );
                break;
              default:
                switch (l) {
                  case "svg":
                    e = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      l
                    );
                    break;
                  case "math":
                    e = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof o.is == "string" ? f.createElement("select", { is: o.is }) : f.createElement("select"), o.multiple ? e.multiple = !0 : o.size && (e.size = o.size);
                    break;
                  default:
                    e = typeof o.is == "string" ? f.createElement(l, { is: o.is }) : f.createElement(l);
                }
            }
            e[Dt] = n, e[qt] = o;
            e: for (f = n.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                e.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === n) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === n)
                  break e;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            n.stateNode = e;
            e: switch (Tt(e, l, o), l) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!o.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Xn(n);
          }
        }
        return lt(n), n.flags &= -16777217, null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== o && Xn(n);
        else {
          if (typeof o != "string" && n.stateNode === null)
            throw Error(i(166));
          if (e = se.current, wa(n)) {
            if (e = n.stateNode, l = n.memoizedProps, o = null, f = jt, f !== null)
              switch (f.tag) {
                case 27:
                case 5:
                  o = f.memoizedProps;
              }
            e[Dt] = n, e = !!(e.nodeValue === l || o !== null && o.suppressHydrationWarning === !0 || Zm(e.nodeValue, l)), e || Pr(n);
          } else
            e = ko(e).createTextNode(
              o
            ), e[Dt] = n, n.stateNode = e;
        }
        return lt(n), null;
      case 13:
        if (o = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (f = wa(n), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!f) throw Error(i(318));
              if (f = n.memoizedState, f = f !== null ? f.dehydrated : null, !f) throw Error(i(317));
              f[Dt] = n;
            } else
              Sa(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            lt(n), f = !1;
          } else
            f = Mh(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = f), f = !0;
          if (!f)
            return n.flags & 256 ? (Fn(n), n) : (Fn(n), null);
        }
        if (Fn(n), (n.flags & 128) !== 0)
          return n.lanes = l, n;
        if (l = o !== null, e = e !== null && e.memoizedState !== null, l) {
          o = n.child, f = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (f = o.alternate.memoizedState.cachePool.pool);
          var p = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (p = o.memoizedState.cachePool.pool), p !== f && (o.flags |= 2048);
        }
        return l !== e && l && (n.child.flags |= 8192), co(n, n.updateQueue), lt(n), null;
      case 4:
        return tt(), e === null && pc(n.stateNode.containerInfo), lt(n), null;
      case 10:
        return Yn(n.type), lt(n), null;
      case 19:
        if (ae(gt), f = n.memoizedState, f === null) return lt(n), null;
        if (o = (n.flags & 128) !== 0, p = f.rendering, p === null)
          if (o) Ba(f, !1);
          else {
            if (ot !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (p = ao(e), p !== null) {
                  for (n.flags |= 128, Ba(f, !1), e = p.updateQueue, n.updateQueue = e, co(n, e), n.subtreeFlags = 0, e = l, l = n.child; l !== null; )
                    Dh(l, e), l = l.sibling;
                  return E(
                    gt,
                    gt.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            f.tail !== null && Ve() > po && (n.flags |= 128, o = !0, Ba(f, !1), n.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = ao(p), e !== null) {
              if (n.flags |= 128, o = !0, e = e.updateQueue, n.updateQueue = e, co(n, e), Ba(f, !0), f.tail === null && f.tailMode === "hidden" && !p.alternate && !Ye)
                return lt(n), null;
            } else
              2 * Ve() - f.renderingStartTime > po && l !== 536870912 && (n.flags |= 128, o = !0, Ba(f, !1), n.lanes = 4194304);
          f.isBackwards ? (p.sibling = n.child, n.child = p) : (e = f.last, e !== null ? e.sibling = p : n.child = p, f.last = p);
        }
        return f.tail !== null ? (n = f.tail, f.rendering = n, f.tail = n.sibling, f.renderingStartTime = Ve(), n.sibling = null, e = gt.current, E(gt, o ? e & 1 | 2 : e & 1), n) : (lt(n), null);
      case 22:
      case 23:
        return Fn(n), gs(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (l & 536870912) !== 0 && (n.flags & 128) === 0 && (lt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : lt(n), l = n.updateQueue, l !== null && co(n, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== l && (n.flags |= 2048), e !== null && ae(Xr), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), Yn(mt), lt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, n.tag));
  }
  function Zx(e, n) {
    switch (ns(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Yn(mt), tt(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return vt(n), null;
      case 13:
        if (Fn(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(i(340));
          Sa();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ae(gt), null;
      case 4:
        return tt(), null;
      case 10:
        return Yn(n.type), null;
      case 22:
      case 23:
        return Fn(n), gs(), e !== null && ae(Xr), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return Yn(mt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function rm(e, n) {
    switch (ns(n), n.tag) {
      case 3:
        Yn(mt), tt();
        break;
      case 26:
      case 27:
      case 5:
        vt(n);
        break;
      case 4:
        tt();
        break;
      case 13:
        Fn(n);
        break;
      case 19:
        ae(gt);
        break;
      case 10:
        Yn(n.type);
        break;
      case 22:
      case 23:
        Fn(n), gs(), e !== null && ae(Xr);
        break;
      case 24:
        Yn(mt);
    }
  }
  function Ia(e, n) {
    try {
      var l = n.updateQueue, o = l !== null ? l.lastEffect : null;
      if (o !== null) {
        var f = o.next;
        l = f;
        do {
          if ((l.tag & e) === e) {
            o = void 0;
            var p = l.create, v = l.inst;
            o = p(), v.destroy = o;
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (S) {
      Je(n, n.return, S);
    }
  }
  function pr(e, n, l) {
    try {
      var o = n.updateQueue, f = o !== null ? o.lastEffect : null;
      if (f !== null) {
        var p = f.next;
        o = p;
        do {
          if ((o.tag & e) === e) {
            var v = o.inst, S = v.destroy;
            if (S !== void 0) {
              v.destroy = void 0, f = n;
              var D = l, U = S;
              try {
                U();
              } catch (K) {
                Je(
                  f,
                  D,
                  K
                );
              }
            }
          }
          o = o.next;
        } while (o !== p);
      }
    } catch (K) {
      Je(n, n.return, K);
    }
  }
  function lm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var l = e.stateNode;
      try {
        Fh(n, l);
      } catch (o) {
        Je(e, e.return, o);
      }
    }
  }
  function am(e, n, l) {
    l.props = Zr(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (o) {
      Je(e, n, o);
    }
  }
  function Ha(e, n) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(o) : l.current = o;
      }
    } catch (f) {
      Je(e, n, f);
    }
  }
  function _n(e, n) {
    var l = e.ref, o = e.refCleanup;
    if (l !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (f) {
          Je(e, n, f);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (f) {
          Je(e, n, f);
        }
      else l.current = null;
  }
  function im(e) {
    var n = e.type, l = e.memoizedProps, o = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && o.focus();
          break e;
        case "img":
          l.src ? o.src = l.src : l.srcSet && (o.srcset = l.srcSet);
      }
    } catch (f) {
      Je(e, e.return, f);
    }
  }
  function Ps(e, n, l) {
    try {
      var o = e.stateNode;
      gw(o, e.type, l, n), o[qt] = n;
    } catch (f) {
      Je(e, e.return, f);
    }
  }
  function om(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sr(e.type) || e.tag === 4;
  }
  function Fs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || om(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Sr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Gs(e, n, l) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, n) : (n = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, n.appendChild(e), l = l._reactRootContainer, l != null || n.onclick !== null || (n.onclick = Eo));
    else if (o !== 4 && (o === 27 && Sr(e.type) && (l = e.stateNode, n = null), e = e.child, e !== null))
      for (Gs(e, n, l), e = e.sibling; e !== null; )
        Gs(e, n, l), e = e.sibling;
  }
  function fo(e, n, l) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? l.insertBefore(e, n) : l.appendChild(e);
    else if (o !== 4 && (o === 27 && Sr(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (fo(e, n, l), e = e.sibling; e !== null; )
        fo(e, n, l), e = e.sibling;
  }
  function um(e) {
    var n = e.stateNode, l = e.memoizedProps;
    try {
      for (var o = e.type, f = n.attributes; f.length; )
        n.removeAttributeNode(f[0]);
      Tt(n, o, l), n[Dt] = e, n[qt] = l;
    } catch (p) {
      Je(e, e.return, p);
    }
  }
  var Qn = !1, st = !1, Xs = !1, sm = typeof WeakSet == "function" ? WeakSet : Set, St = null;
  function Kx(e, n) {
    if (e = e.containerInfo, yc = Do, e = xh(e), Fu(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var f = o.anchorOffset, p = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, p.nodeType;
            } catch {
              l = null;
              break e;
            }
            var v = 0, S = -1, D = -1, U = 0, K = 0, W = e, H = null;
            t: for (; ; ) {
              for (var V; W !== l || f !== 0 && W.nodeType !== 3 || (S = v + f), W !== p || o !== 0 && W.nodeType !== 3 || (D = v + o), W.nodeType === 3 && (v += W.nodeValue.length), (V = W.firstChild) !== null; )
                H = W, W = V;
              for (; ; ) {
                if (W === e) break t;
                if (H === l && ++U === f && (S = v), H === p && ++K === o && (D = v), (V = W.nextSibling) !== null) break;
                W = H, H = W.parentNode;
              }
              W = V;
            }
            l = S === -1 || D === -1 ? null : { start: S, end: D };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (vc = { focusedElem: e, selectionRange: l }, Do = !1, St = n; St !== null; )
      if (n = St, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = n, St = e;
      else
        for (; St !== null; ) {
          switch (n = St, p = n.alternate, e = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && p !== null) {
                e = void 0, l = n, f = p.memoizedProps, p = p.memoizedState, o = l.stateNode;
                try {
                  var Ee = Zr(
                    l.type,
                    f,
                    l.elementType === l.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    Ee,
                    p
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (xe) {
                  Je(
                    l,
                    l.return,
                    xe
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = n.stateNode.containerInfo, l = e.nodeType, l === 9)
                  wc(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      wc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, St = e;
            break;
          }
          St = n.return;
        }
  }
  function cm(e, n, l) {
    var o = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        mr(e, l), o & 4 && Ia(5, l);
        break;
      case 1:
        if (mr(e, l), o & 4)
          if (e = l.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (v) {
              Je(l, l.return, v);
            }
          else {
            var f = Zr(
              l.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              e.componentDidUpdate(
                f,
                n,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (v) {
              Je(
                l,
                l.return,
                v
              );
            }
          }
        o & 64 && lm(l), o & 512 && Ha(l, l.return);
        break;
      case 3:
        if (mr(e, l), o & 64 && (e = l.updateQueue, e !== null)) {
          if (n = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                n = l.child.stateNode;
                break;
              case 1:
                n = l.child.stateNode;
            }
          try {
            Fh(e, n);
          } catch (v) {
            Je(l, l.return, v);
          }
        }
        break;
      case 27:
        n === null && o & 4 && um(l);
      case 26:
      case 5:
        mr(e, l), n === null && o & 4 && im(l), o & 512 && Ha(l, l.return);
        break;
      case 12:
        mr(e, l);
        break;
      case 13:
        mr(e, l), o & 4 && hm(e, l), o & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = aw.bind(
          null,
          l
        ), Ew(e, l))));
        break;
      case 22:
        if (o = l.memoizedState !== null || Qn, !o) {
          n = n !== null && n.memoizedState !== null || st, f = Qn;
          var p = st;
          Qn = o, (st = n) && !p ? gr(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : mr(e, l), Qn = f, st = p;
        }
        break;
      case 30:
        break;
      default:
        mr(e, l);
    }
  }
  function fm(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, fm(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Au(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var nt = null, Pt = !1;
  function Zn(e, n, l) {
    for (l = l.child; l !== null; )
      dm(e, n, l), l = l.sibling;
  }
  function dm(e, n, l) {
    if (ee && typeof ee.onCommitFiberUnmount == "function")
      try {
        ee.onCommitFiberUnmount(P, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        st || _n(l, n), Zn(
          e,
          n,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        st || _n(l, n);
        var o = nt, f = Pt;
        Sr(l.type) && (nt = l.stateNode, Pt = !1), Zn(
          e,
          n,
          l
        ), Za(l.stateNode), nt = o, Pt = f;
        break;
      case 5:
        st || _n(l, n);
      case 6:
        if (o = nt, f = Pt, nt = null, Zn(
          e,
          n,
          l
        ), nt = o, Pt = f, nt !== null)
          if (Pt)
            try {
              (nt.nodeType === 9 ? nt.body : nt.nodeName === "HTML" ? nt.ownerDocument.body : nt).removeChild(l.stateNode);
            } catch (p) {
              Je(
                l,
                n,
                p
              );
            }
          else
            try {
              nt.removeChild(l.stateNode);
            } catch (p) {
              Je(
                l,
                n,
                p
              );
            }
        break;
      case 18:
        nt !== null && (Pt ? (e = nt, eg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), ri(e)) : eg(nt, l.stateNode));
        break;
      case 4:
        o = nt, f = Pt, nt = l.stateNode.containerInfo, Pt = !0, Zn(
          e,
          n,
          l
        ), nt = o, Pt = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        st || pr(2, l, n), st || pr(4, l, n), Zn(
          e,
          n,
          l
        );
        break;
      case 1:
        st || (_n(l, n), o = l.stateNode, typeof o.componentWillUnmount == "function" && am(
          l,
          n,
          o
        )), Zn(
          e,
          n,
          l
        );
        break;
      case 21:
        Zn(
          e,
          n,
          l
        );
        break;
      case 22:
        st = (o = st) || l.memoizedState !== null, Zn(
          e,
          n,
          l
        ), st = o;
        break;
      default:
        Zn(
          e,
          n,
          l
        );
    }
  }
  function hm(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ri(e);
      } catch (l) {
        Je(n, n.return, l);
      }
  }
  function Jx(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new sm()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new sm()), n;
      default:
        throw Error(i(435, e.tag));
    }
  }
  function Qs(e, n) {
    var l = Jx(e);
    n.forEach(function(o) {
      var f = iw.bind(null, e, o);
      l.has(o) || (l.add(o), o.then(f, f));
    });
  }
  function Jt(e, n) {
    var l = n.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var f = l[o], p = e, v = n, S = v;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (Sr(S.type)) {
                nt = S.stateNode, Pt = !1;
                break e;
              }
              break;
            case 5:
              nt = S.stateNode, Pt = !1;
              break e;
            case 3:
            case 4:
              nt = S.stateNode.containerInfo, Pt = !0;
              break e;
          }
          S = S.return;
        }
        if (nt === null) throw Error(i(160));
        dm(p, v, f), nt = null, Pt = !1, p = f.alternate, p !== null && (p.return = null), f.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        pm(n, e), n = n.sibling;
  }
  var wn = null;
  function pm(e, n) {
    var l = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Jt(n, e), $t(e), o & 4 && (pr(3, e, e.return), Ia(3, e), pr(5, e, e.return));
        break;
      case 1:
        Jt(n, e), $t(e), o & 512 && (st || l === null || _n(l, l.return)), o & 64 && Qn && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? o : l.concat(o))));
        break;
      case 26:
        var f = wn;
        if (Jt(n, e), $t(e), o & 512 && (st || l === null || _n(l, l.return)), o & 4) {
          var p = l !== null ? l.memoizedState : null;
          if (o = e.memoizedState, l === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, l = e.memoizedProps, f = f.ownerDocument || f;
                  t: switch (o) {
                    case "title":
                      p = f.getElementsByTagName("title")[0], (!p || p[ca] || p[Dt] || p.namespaceURI === "http://www.w3.org/2000/svg" || p.hasAttribute("itemprop")) && (p = f.createElement(o), f.head.insertBefore(
                        p,
                        f.querySelector("head > title")
                      )), Tt(p, o, l), p[Dt] = e, xt(p), o = p;
                      break e;
                    case "link":
                      var v = ug(
                        "link",
                        "href",
                        f
                      ).get(o + (l.href || ""));
                      if (v) {
                        for (var S = 0; S < v.length; S++)
                          if (p = v[S], p.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && p.getAttribute("rel") === (l.rel == null ? null : l.rel) && p.getAttribute("title") === (l.title == null ? null : l.title) && p.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            v.splice(S, 1);
                            break t;
                          }
                      }
                      p = f.createElement(o), Tt(p, o, l), f.head.appendChild(p);
                      break;
                    case "meta":
                      if (v = ug(
                        "meta",
                        "content",
                        f
                      ).get(o + (l.content || ""))) {
                        for (S = 0; S < v.length; S++)
                          if (p = v[S], p.getAttribute("content") === (l.content == null ? null : "" + l.content) && p.getAttribute("name") === (l.name == null ? null : l.name) && p.getAttribute("property") === (l.property == null ? null : l.property) && p.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && p.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            v.splice(S, 1);
                            break t;
                          }
                      }
                      p = f.createElement(o), Tt(p, o, l), f.head.appendChild(p);
                      break;
                    default:
                      throw Error(i(468, o));
                  }
                  p[Dt] = e, xt(p), o = p;
                }
                e.stateNode = o;
              } else
                sg(
                  f,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = og(
                f,
                o,
                e.memoizedProps
              );
          else
            p !== o ? (p === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : p.count--, o === null ? sg(
              f,
              e.type,
              e.stateNode
            ) : og(
              f,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && Ps(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        Jt(n, e), $t(e), o & 512 && (st || l === null || _n(l, l.return)), l !== null && o & 4 && Ps(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (Jt(n, e), $t(e), o & 512 && (st || l === null || _n(l, l.return)), e.flags & 32) {
          f = e.stateNode;
          try {
            hl(f, "");
          } catch (V) {
            Je(e, e.return, V);
          }
        }
        o & 4 && e.stateNode != null && (f = e.memoizedProps, Ps(
          e,
          f,
          l !== null ? l.memoizedProps : f
        )), o & 1024 && (Xs = !0);
        break;
      case 6:
        if (Jt(n, e), $t(e), o & 4) {
          if (e.stateNode === null)
            throw Error(i(162));
          o = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = o;
          } catch (V) {
            Je(e, e.return, V);
          }
        }
        break;
      case 3:
        if (To = null, f = wn, wn = Co(n.containerInfo), Jt(n, e), wn = f, $t(e), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            ri(n.containerInfo);
          } catch (V) {
            Je(e, e.return, V);
          }
        Xs && (Xs = !1, mm(e));
        break;
      case 4:
        o = wn, wn = Co(
          e.stateNode.containerInfo
        ), Jt(n, e), $t(e), wn = o;
        break;
      case 12:
        Jt(n, e), $t(e);
        break;
      case 13:
        Jt(n, e), $t(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (ec = Ve()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, Qs(e, o)));
        break;
      case 22:
        f = e.memoizedState !== null;
        var D = l !== null && l.memoizedState !== null, U = Qn, K = st;
        if (Qn = U || f, st = K || D, Jt(n, e), st = K, Qn = U, $t(e), o & 8192)
          e: for (n = e.stateNode, n._visibility = f ? n._visibility & -2 : n._visibility | 1, f && (l === null || D || Qn || st || Kr(e)), l = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (l === null) {
                D = l = n;
                try {
                  if (p = D.stateNode, f)
                    v = p.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
                  else {
                    S = D.stateNode;
                    var W = D.memoizedProps.style, H = W != null && W.hasOwnProperty("display") ? W.display : null;
                    S.style.display = H == null || typeof H == "boolean" ? "" : ("" + H).trim();
                  }
                } catch (V) {
                  Je(D, D.return, V);
                }
              }
            } else if (n.tag === 6) {
              if (l === null) {
                D = n;
                try {
                  D.stateNode.nodeValue = f ? "" : D.memoizedProps;
                } catch (V) {
                  Je(D, D.return, V);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              l === n && (l = null), n = n.return;
            }
            l === n && (l = null), n.sibling.return = n.return, n = n.sibling;
          }
        o & 4 && (o = e.updateQueue, o !== null && (l = o.retryQueue, l !== null && (o.retryQueue = null, Qs(e, l))));
        break;
      case 19:
        Jt(n, e), $t(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, Qs(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Jt(n, e), $t(e);
    }
  }
  function $t(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var l, o = e.return; o !== null; ) {
          if (om(o)) {
            l = o;
            break;
          }
          o = o.return;
        }
        if (l == null) throw Error(i(160));
        switch (l.tag) {
          case 27:
            var f = l.stateNode, p = Fs(e);
            fo(e, p, f);
            break;
          case 5:
            var v = l.stateNode;
            l.flags & 32 && (hl(v, ""), l.flags &= -33);
            var S = Fs(e);
            fo(e, S, v);
            break;
          case 3:
          case 4:
            var D = l.stateNode.containerInfo, U = Fs(e);
            Gs(
              e,
              U,
              D
            );
            break;
          default:
            throw Error(i(161));
        }
      } catch (K) {
        Je(e, e.return, K);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function mm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        mm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function mr(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        cm(e, n.alternate, n), n = n.sibling;
  }
  function Kr(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          pr(4, n, n.return), Kr(n);
          break;
        case 1:
          _n(n, n.return);
          var l = n.stateNode;
          typeof l.componentWillUnmount == "function" && am(
            n,
            n.return,
            l
          ), Kr(n);
          break;
        case 27:
          Za(n.stateNode);
        case 26:
        case 5:
          _n(n, n.return), Kr(n);
          break;
        case 22:
          n.memoizedState === null && Kr(n);
          break;
        case 30:
          Kr(n);
          break;
        default:
          Kr(n);
      }
      e = e.sibling;
    }
  }
  function gr(e, n, l) {
    for (l = l && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate, f = e, p = n, v = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          gr(
            f,
            p,
            l
          ), Ia(4, p);
          break;
        case 1:
          if (gr(
            f,
            p,
            l
          ), o = p, f = o.stateNode, typeof f.componentDidMount == "function")
            try {
              f.componentDidMount();
            } catch (U) {
              Je(o, o.return, U);
            }
          if (o = p, f = o.updateQueue, f !== null) {
            var S = o.stateNode;
            try {
              var D = f.shared.hiddenCallbacks;
              if (D !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < D.length; f++)
                  Ph(D[f], S);
            } catch (U) {
              Je(o, o.return, U);
            }
          }
          l && v & 64 && lm(p), Ha(p, p.return);
          break;
        case 27:
          um(p);
        case 26:
        case 5:
          gr(
            f,
            p,
            l
          ), l && o === null && v & 4 && im(p), Ha(p, p.return);
          break;
        case 12:
          gr(
            f,
            p,
            l
          );
          break;
        case 13:
          gr(
            f,
            p,
            l
          ), l && v & 4 && hm(f, p);
          break;
        case 22:
          p.memoizedState === null && gr(
            f,
            p,
            l
          ), Ha(p, p.return);
          break;
        case 30:
          break;
        default:
          gr(
            f,
            p,
            l
          );
      }
      n = n.sibling;
    }
  }
  function Zs(e, n) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Ca(l));
  }
  function Ks(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && Ca(e));
  }
  function Rn(e, n, l, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        gm(
          e,
          n,
          l,
          o
        ), n = n.sibling;
  }
  function gm(e, n, l, o) {
    var f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Rn(
          e,
          n,
          l,
          o
        ), f & 2048 && Ia(9, n);
        break;
      case 1:
        Rn(
          e,
          n,
          l,
          o
        );
        break;
      case 3:
        Rn(
          e,
          n,
          l,
          o
        ), f & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && Ca(e)));
        break;
      case 12:
        if (f & 2048) {
          Rn(
            e,
            n,
            l,
            o
          ), e = n.stateNode;
          try {
            var p = n.memoizedProps, v = p.id, S = p.onPostCommit;
            typeof S == "function" && S(
              v,
              n.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (D) {
            Je(n, n.return, D);
          }
        } else
          Rn(
            e,
            n,
            l,
            o
          );
        break;
      case 13:
        Rn(
          e,
          n,
          l,
          o
        );
        break;
      case 23:
        break;
      case 22:
        p = n.stateNode, v = n.alternate, n.memoizedState !== null ? p._visibility & 2 ? Rn(
          e,
          n,
          l,
          o
        ) : qa(e, n) : p._visibility & 2 ? Rn(
          e,
          n,
          l,
          o
        ) : (p._visibility |= 2, Ol(
          e,
          n,
          l,
          o,
          (n.subtreeFlags & 10256) !== 0
        )), f & 2048 && Zs(v, n);
        break;
      case 24:
        Rn(
          e,
          n,
          l,
          o
        ), f & 2048 && Ks(n.alternate, n);
        break;
      default:
        Rn(
          e,
          n,
          l,
          o
        );
    }
  }
  function Ol(e, n, l, o, f) {
    for (f = f && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var p = e, v = n, S = l, D = o, U = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          Ol(
            p,
            v,
            S,
            D,
            f
          ), Ia(8, v);
          break;
        case 23:
          break;
        case 22:
          var K = v.stateNode;
          v.memoizedState !== null ? K._visibility & 2 ? Ol(
            p,
            v,
            S,
            D,
            f
          ) : qa(
            p,
            v
          ) : (K._visibility |= 2, Ol(
            p,
            v,
            S,
            D,
            f
          )), f && U & 2048 && Zs(
            v.alternate,
            v
          );
          break;
        case 24:
          Ol(
            p,
            v,
            S,
            D,
            f
          ), f && U & 2048 && Ks(v.alternate, v);
          break;
        default:
          Ol(
            p,
            v,
            S,
            D,
            f
          );
      }
      n = n.sibling;
    }
  }
  function qa(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var l = e, o = n, f = o.flags;
        switch (o.tag) {
          case 22:
            qa(l, o), f & 2048 && Zs(
              o.alternate,
              o
            );
            break;
          case 24:
            qa(l, o), f & 2048 && Ks(o.alternate, o);
            break;
          default:
            qa(l, o);
        }
        n = n.sibling;
      }
  }
  var Va = 8192;
  function zl(e) {
    if (e.subtreeFlags & Va)
      for (e = e.child; e !== null; )
        ym(e), e = e.sibling;
  }
  function ym(e) {
    switch (e.tag) {
      case 26:
        zl(e), e.flags & Va && e.memoizedState !== null && jw(
          wn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        zl(e);
        break;
      case 3:
      case 4:
        var n = wn;
        wn = Co(e.stateNode.containerInfo), zl(e), wn = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Va, Va = 16777216, zl(e), Va = n) : zl(e));
        break;
      default:
        zl(e);
    }
  }
  function vm(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function Ya(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var l = 0; l < n.length; l++) {
          var o = n[l];
          St = o, xm(
            o,
            e
          );
        }
      vm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        bm(e), e = e.sibling;
  }
  function bm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ya(e), e.flags & 2048 && pr(9, e, e.return);
        break;
      case 3:
        Ya(e);
        break;
      case 12:
        Ya(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, ho(e)) : Ya(e);
        break;
      default:
        Ya(e);
    }
  }
  function ho(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var l = 0; l < n.length; l++) {
          var o = n[l];
          St = o, xm(
            o,
            e
          );
        }
      vm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          pr(8, n, n.return), ho(n);
          break;
        case 22:
          l = n.stateNode, l._visibility & 2 && (l._visibility &= -3, ho(n));
          break;
        default:
          ho(n);
      }
      e = e.sibling;
    }
  }
  function xm(e, n) {
    for (; St !== null; ) {
      var l = St;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          pr(8, l, n);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var o = l.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Ca(l.memoizedState.cache);
      }
      if (o = l.child, o !== null) o.return = l, St = o;
      else
        e: for (l = e; St !== null; ) {
          o = St;
          var f = o.sibling, p = o.return;
          if (fm(o), o === l) {
            St = null;
            break e;
          }
          if (f !== null) {
            f.return = p, St = f;
            break e;
          }
          St = p;
        }
    }
  }
  var $x = {
    getCacheForType: function(e) {
      var n = Nt(mt), l = n.data.get(e);
      return l === void 0 && (l = e(), n.data.set(e, l)), l;
    }
  }, Wx = typeof WeakMap == "function" ? WeakMap : Map, Ge = 0, We = null, Me = null, Ue = 0, Xe = 0, Wt = null, yr = !1, Ml = !1, Js = !1, Kn = 0, ot = 0, vr = 0, Jr = 0, $s = 0, mn = 0, Ll = 0, Pa = null, Ft = null, Ws = !1, ec = 0, po = 1 / 0, mo = null, br = null, At = 0, xr = null, jl = null, Ul = 0, tc = 0, nc = null, wm = null, Fa = 0, rc = null;
  function en() {
    if ((Ge & 2) !== 0 && Ue !== 0)
      return Ue & -Ue;
    if (B.T !== null) {
      var e = kl;
      return e !== 0 ? e : cc();
    }
    return Ud();
  }
  function Sm() {
    mn === 0 && (mn = (Ue & 536870912) === 0 || Ye ? zd() : 536870912);
    var e = pn.current;
    return e !== null && (e.flags |= 32), mn;
  }
  function tn(e, n, l) {
    (e === We && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null) && (Bl(e, 0), wr(
      e,
      Ue,
      mn,
      !1
    )), sa(e, l), ((Ge & 2) === 0 || e !== We) && (e === We && ((Ge & 2) === 0 && (Jr |= l), ot === 4 && wr(
      e,
      Ue,
      mn,
      !1
    )), Dn(e));
  }
  function Em(e, n, l) {
    if ((Ge & 6) !== 0) throw Error(i(327));
    var o = !l && (n & 124) === 0 && (n & e.expiredLanes) === 0 || on(e, n), f = o ? nw(e, n) : ic(e, n, !0), p = o;
    do {
      if (f === 0) {
        Ml && !o && wr(e, n, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, p && !ew(l)) {
          f = ic(e, n, !1), p = !1;
          continue;
        }
        if (f === 2) {
          if (p = n, e.errorRecoveryDisabledLanes & p)
            var v = 0;
          else
            v = e.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
          if (v !== 0) {
            n = v;
            e: {
              var S = e;
              f = Pa;
              var D = S.current.memoizedState.isDehydrated;
              if (D && (Bl(S, v).flags |= 256), v = ic(
                S,
                v,
                !1
              ), v !== 2) {
                if (Js && !D) {
                  S.errorRecoveryDisabledLanes |= p, Jr |= p, f = 4;
                  break e;
                }
                p = Ft, Ft = f, p !== null && (Ft === null ? Ft = p : Ft.push.apply(
                  Ft,
                  p
                ));
              }
              f = v;
            }
            if (p = !1, f !== 2) continue;
          }
        }
        if (f === 1) {
          Bl(e, 0), wr(e, n, 0, !0);
          break;
        }
        e: {
          switch (o = e, p = f, p) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              wr(
                o,
                n,
                mn,
                !yr
              );
              break e;
            case 2:
              Ft = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((n & 62914560) === n && (f = ec + 300 - Ve(), 10 < f)) {
            if (wr(
              o,
              n,
              mn,
              !yr
            ), bt(o, 0, !0) !== 0) break e;
            o.timeoutHandle = $m(
              km.bind(
                null,
                o,
                l,
                Ft,
                mo,
                Ws,
                n,
                mn,
                Jr,
                Ll,
                yr,
                p,
                2,
                -0,
                0
              ),
              f
            );
            break e;
          }
          km(
            o,
            l,
            Ft,
            mo,
            Ws,
            n,
            mn,
            Jr,
            Ll,
            yr,
            p,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Dn(e);
  }
  function km(e, n, l, o, f, p, v, S, D, U, K, W, H, V) {
    if (e.timeoutHandle = -1, W = n.subtreeFlags, (W & 8192 || (W & 16785408) === 16785408) && ($a = { stylesheets: null, count: 0, unsuspend: Lw }, ym(n), W = Uw(), W !== null)) {
      e.cancelPendingCommit = W(
        Nm.bind(
          null,
          e,
          n,
          p,
          l,
          o,
          f,
          v,
          S,
          D,
          K,
          1,
          H,
          V
        )
      ), wr(e, p, v, !U);
      return;
    }
    Nm(
      e,
      n,
      p,
      l,
      o,
      f,
      v,
      S,
      D
    );
  }
  function ew(e) {
    for (var n = e; ; ) {
      var l = n.tag;
      if ((l === 0 || l === 11 || l === 15) && n.flags & 16384 && (l = n.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var o = 0; o < l.length; o++) {
          var f = l[o], p = f.getSnapshot;
          f = f.value;
          try {
            if (!Zt(p(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = n.child, n.subtreeFlags & 16384 && l !== null)
        l.return = n, n = l;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function wr(e, n, l, o) {
    n &= ~$s, n &= ~Jr, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
    for (var f = n; 0 < f; ) {
      var p = 31 - me(f), v = 1 << p;
      o[p] = -1, f &= ~v;
    }
    l !== 0 && Ld(e, l, n);
  }
  function go() {
    return (Ge & 6) === 0 ? (Ga(0), !1) : !0;
  }
  function lc() {
    if (Me !== null) {
      if (Xe === 0)
        var e = Me.return;
      else
        e = Me, Vn = Fr = null, ws(e), Dl = null, ja = 0, e = Me;
      for (; e !== null; )
        rm(e.alternate, e), e = e.return;
      Me = null;
    }
  }
  function Bl(e, n) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, vw(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), lc(), We = e, Me = l = In(e.current, null), Ue = n, Xe = 0, Wt = null, yr = !1, Ml = on(e, n), Js = !1, Ll = mn = $s = Jr = vr = ot = 0, Ft = Pa = null, Ws = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var f = 31 - me(o), p = 1 << f;
        n |= e[f], o &= ~p;
      }
    return Kn = n, Ui(), l;
  }
  function Cm(e, n) {
    De = null, B.H = no, n === Ta || n === Gi ? (n = Vh(), Xe = 3) : n === Ih ? (n = Vh(), Xe = 4) : Xe = n === Yp ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Wt = n, Me === null && (ot = 1, oo(
      e,
      cn(n, e.current)
    ));
  }
  function Am() {
    var e = B.H;
    return B.H = no, e === null ? no : e;
  }
  function Tm() {
    var e = B.A;
    return B.A = $x, e;
  }
  function ac() {
    ot = 4, yr || (Ue & 4194048) !== Ue && pn.current !== null || (Ml = !0), (vr & 134217727) === 0 && (Jr & 134217727) === 0 || We === null || wr(
      We,
      Ue,
      mn,
      !1
    );
  }
  function ic(e, n, l) {
    var o = Ge;
    Ge |= 2;
    var f = Am(), p = Tm();
    (We !== e || Ue !== n) && (mo = null, Bl(e, n)), n = !1;
    var v = ot;
    e: do
      try {
        if (Xe !== 0 && Me !== null) {
          var S = Me, D = Wt;
          switch (Xe) {
            case 8:
              lc(), v = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              pn.current === null && (n = !0);
              var U = Xe;
              if (Xe = 0, Wt = null, Il(e, S, D, U), l && Ml) {
                v = 0;
                break e;
              }
              break;
            default:
              U = Xe, Xe = 0, Wt = null, Il(e, S, D, U);
          }
        }
        tw(), v = ot;
        break;
      } catch (K) {
        Cm(e, K);
      }
    while (!0);
    return n && e.shellSuspendCounter++, Vn = Fr = null, Ge = o, B.H = f, B.A = p, Me === null && (We = null, Ue = 0, Ui()), v;
  }
  function tw() {
    for (; Me !== null; ) _m(Me);
  }
  function nw(e, n) {
    var l = Ge;
    Ge |= 2;
    var o = Am(), f = Tm();
    We !== e || Ue !== n ? (mo = null, po = Ve() + 500, Bl(e, n)) : Ml = on(
      e,
      n
    );
    e: do
      try {
        if (Xe !== 0 && Me !== null) {
          n = Me;
          var p = Wt;
          t: switch (Xe) {
            case 1:
              Xe = 0, Wt = null, Il(e, n, p, 1);
              break;
            case 2:
            case 9:
              if (Hh(p)) {
                Xe = 0, Wt = null, Rm(n);
                break;
              }
              n = function() {
                Xe !== 2 && Xe !== 9 || We !== e || (Xe = 7), Dn(e);
              }, p.then(n, n);
              break e;
            case 3:
              Xe = 7;
              break e;
            case 4:
              Xe = 5;
              break e;
            case 7:
              Hh(p) ? (Xe = 0, Wt = null, Rm(n)) : (Xe = 0, Wt = null, Il(e, n, p, 7));
              break;
            case 5:
              var v = null;
              switch (Me.tag) {
                case 26:
                  v = Me.memoizedState;
                case 5:
                case 27:
                  var S = Me;
                  if (!v || cg(v)) {
                    Xe = 0, Wt = null;
                    var D = S.sibling;
                    if (D !== null) Me = D;
                    else {
                      var U = S.return;
                      U !== null ? (Me = U, yo(U)) : Me = null;
                    }
                    break t;
                  }
              }
              Xe = 0, Wt = null, Il(e, n, p, 5);
              break;
            case 6:
              Xe = 0, Wt = null, Il(e, n, p, 6);
              break;
            case 8:
              lc(), ot = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        rw();
        break;
      } catch (K) {
        Cm(e, K);
      }
    while (!0);
    return Vn = Fr = null, B.H = o, B.A = f, Ge = l, Me !== null ? 0 : (We = null, Ue = 0, Ui(), ot);
  }
  function rw() {
    for (; Me !== null && !ze(); )
      _m(Me);
  }
  function _m(e) {
    var n = tm(e.alternate, e, Kn);
    e.memoizedProps = e.pendingProps, n === null ? yo(e) : Me = n;
  }
  function Rm(e) {
    var n = e, l = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Zp(
          l,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ue
        );
        break;
      case 11:
        n = Zp(
          l,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ue
        );
        break;
      case 5:
        ws(n);
      default:
        rm(l, n), n = Me = Dh(n, Kn), n = tm(l, n, Kn);
    }
    e.memoizedProps = e.pendingProps, n === null ? yo(e) : Me = n;
  }
  function Il(e, n, l, o) {
    Vn = Fr = null, ws(n), Dl = null, ja = 0;
    var f = n.return;
    try {
      if (Gx(
        e,
        f,
        n,
        l,
        Ue
      )) {
        ot = 1, oo(
          e,
          cn(l, e.current)
        ), Me = null;
        return;
      }
    } catch (p) {
      if (f !== null) throw Me = f, p;
      ot = 1, oo(
        e,
        cn(l, e.current)
      ), Me = null;
      return;
    }
    n.flags & 32768 ? (Ye || o === 1 ? e = !0 : Ml || (Ue & 536870912) !== 0 ? e = !1 : (yr = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = pn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), Dm(n, e)) : yo(n);
  }
  function yo(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        Dm(
          n,
          yr
        );
        return;
      }
      e = n.return;
      var l = Qx(
        n.alternate,
        n,
        Kn
      );
      if (l !== null) {
        Me = l;
        return;
      }
      if (n = n.sibling, n !== null) {
        Me = n;
        return;
      }
      Me = n = e;
    } while (n !== null);
    ot === 0 && (ot = 5);
  }
  function Dm(e, n) {
    do {
      var l = Zx(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, Me = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !n && (e = e.sibling, e !== null)) {
        Me = e;
        return;
      }
      Me = e = l;
    } while (e !== null);
    ot = 6, Me = null;
  }
  function Nm(e, n, l, o, f, p, v, S, D) {
    e.cancelPendingCommit = null;
    do
      vo();
    while (At !== 0);
    if ((Ge & 6) !== 0) throw Error(i(327));
    if (n !== null) {
      if (n === e.current) throw Error(i(177));
      if (p = n.lanes | n.childLanes, p |= Ku, L1(
        e,
        l,
        p,
        v,
        S,
        D
      ), e === We && (Me = We = null, Ue = 0), jl = n, xr = e, Ul = l, tc = p, nc = f, wm = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ow(ct, function() {
        return jm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
        o = B.T, B.T = null, f = $.p, $.p = 2, v = Ge, Ge |= 4;
        try {
          Kx(e, n, l);
        } finally {
          Ge = v, $.p = f, B.T = o;
        }
      }
      At = 1, Om(), zm(), Mm();
    }
  }
  function Om() {
    if (At === 1) {
      At = 0;
      var e = xr, n = jl, l = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || l) {
        l = B.T, B.T = null;
        var o = $.p;
        $.p = 2;
        var f = Ge;
        Ge |= 4;
        try {
          pm(n, e);
          var p = vc, v = xh(e.containerInfo), S = p.focusedElem, D = p.selectionRange;
          if (v !== S && S && S.ownerDocument && bh(
            S.ownerDocument.documentElement,
            S
          )) {
            if (D !== null && Fu(S)) {
              var U = D.start, K = D.end;
              if (K === void 0 && (K = U), "selectionStart" in S)
                S.selectionStart = U, S.selectionEnd = Math.min(
                  K,
                  S.value.length
                );
              else {
                var W = S.ownerDocument || document, H = W && W.defaultView || window;
                if (H.getSelection) {
                  var V = H.getSelection(), Ee = S.textContent.length, xe = Math.min(D.start, Ee), Ke = D.end === void 0 ? xe : Math.min(D.end, Ee);
                  !V.extend && xe > Ke && (v = Ke, Ke = xe, xe = v);
                  var M = vh(
                    S,
                    xe
                  ), N = vh(
                    S,
                    Ke
                  );
                  if (M && N && (V.rangeCount !== 1 || V.anchorNode !== M.node || V.anchorOffset !== M.offset || V.focusNode !== N.node || V.focusOffset !== N.offset)) {
                    var L = W.createRange();
                    L.setStart(M.node, M.offset), V.removeAllRanges(), xe > Ke ? (V.addRange(L), V.extend(N.node, N.offset)) : (L.setEnd(N.node, N.offset), V.addRange(L));
                  }
                }
              }
            }
            for (W = [], V = S; V = V.parentNode; )
              V.nodeType === 1 && W.push({
                element: V,
                left: V.scrollLeft,
                top: V.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < W.length; S++) {
              var J = W[S];
              J.element.scrollLeft = J.left, J.element.scrollTop = J.top;
            }
          }
          Do = !!yc, vc = yc = null;
        } finally {
          Ge = f, $.p = o, B.T = l;
        }
      }
      e.current = n, At = 2;
    }
  }
  function zm() {
    if (At === 2) {
      At = 0;
      var e = xr, n = jl, l = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || l) {
        l = B.T, B.T = null;
        var o = $.p;
        $.p = 2;
        var f = Ge;
        Ge |= 4;
        try {
          cm(e, n.alternate, n);
        } finally {
          Ge = f, $.p = o, B.T = l;
        }
      }
      At = 3;
    }
  }
  function Mm() {
    if (At === 4 || At === 3) {
      At = 0, Ae();
      var e = xr, n = jl, l = Ul, o = wm;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? At = 5 : (At = 0, jl = xr = null, Lm(e, e.pendingLanes));
      var f = e.pendingLanes;
      if (f === 0 && (br = null), ku(l), n = n.stateNode, ee && typeof ee.onCommitFiberRoot == "function")
        try {
          ee.onCommitFiberRoot(
            P,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        n = B.T, f = $.p, $.p = 2, B.T = null;
        try {
          for (var p = e.onRecoverableError, v = 0; v < o.length; v++) {
            var S = o[v];
            p(S.value, {
              componentStack: S.stack
            });
          }
        } finally {
          B.T = n, $.p = f;
        }
      }
      (Ul & 3) !== 0 && vo(), Dn(e), f = e.pendingLanes, (l & 4194090) !== 0 && (f & 42) !== 0 ? e === rc ? Fa++ : (Fa = 0, rc = e) : Fa = 0, Ga(0);
    }
  }
  function Lm(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, Ca(n)));
  }
  function vo(e) {
    return Om(), zm(), Mm(), jm();
  }
  function jm() {
    if (At !== 5) return !1;
    var e = xr, n = tc;
    tc = 0;
    var l = ku(Ul), o = B.T, f = $.p;
    try {
      $.p = 32 > l ? 32 : l, B.T = null, l = nc, nc = null;
      var p = xr, v = Ul;
      if (At = 0, jl = xr = null, Ul = 0, (Ge & 6) !== 0) throw Error(i(331));
      var S = Ge;
      if (Ge |= 4, bm(p.current), gm(
        p,
        p.current,
        v,
        l
      ), Ge = S, Ga(0, !1), ee && typeof ee.onPostCommitFiberRoot == "function")
        try {
          ee.onPostCommitFiberRoot(P, p);
        } catch {
        }
      return !0;
    } finally {
      $.p = f, B.T = o, Lm(e, n);
    }
  }
  function Um(e, n, l) {
    n = cn(l, n), n = Ls(e.stateNode, n, 2), e = cr(e, n, 2), e !== null && (sa(e, 2), Dn(e));
  }
  function Je(e, n, l) {
    if (e.tag === 3)
      Um(e, e, l);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Um(
            n,
            e,
            l
          );
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (br === null || !br.has(o))) {
            e = cn(l, e), l = qp(2), o = cr(n, l, 2), o !== null && (Vp(
              l,
              o,
              n,
              e
            ), sa(o, 2), Dn(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function oc(e, n, l) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Wx();
      var f = /* @__PURE__ */ new Set();
      o.set(n, f);
    } else
      f = o.get(n), f === void 0 && (f = /* @__PURE__ */ new Set(), o.set(n, f));
    f.has(l) || (Js = !0, f.add(l), e = lw.bind(null, e, n, l), n.then(e, e));
  }
  function lw(e, n, l) {
    var o = e.pingCache;
    o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, We === e && (Ue & l) === l && (ot === 4 || ot === 3 && (Ue & 62914560) === Ue && 300 > Ve() - ec ? (Ge & 2) === 0 && Bl(e, 0) : $s |= l, Ll === Ue && (Ll = 0)), Dn(e);
  }
  function Bm(e, n) {
    n === 0 && (n = Md()), e = xl(e, n), e !== null && (sa(e, n), Dn(e));
  }
  function aw(e) {
    var n = e.memoizedState, l = 0;
    n !== null && (l = n.retryLane), Bm(e, l);
  }
  function iw(e, n) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, f = e.memoizedState;
        f !== null && (l = f.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    o !== null && o.delete(n), Bm(e, l);
  }
  function ow(e, n) {
    return Se(e, n);
  }
  var bo = null, Hl = null, uc = !1, xo = !1, sc = !1, $r = 0;
  function Dn(e) {
    e !== Hl && e.next === null && (Hl === null ? bo = Hl = e : Hl = Hl.next = e), xo = !0, uc || (uc = !0, sw());
  }
  function Ga(e, n) {
    if (!sc && xo) {
      sc = !0;
      do
        for (var l = !1, o = bo; o !== null; ) {
          if (e !== 0) {
            var f = o.pendingLanes;
            if (f === 0) var p = 0;
            else {
              var v = o.suspendedLanes, S = o.pingedLanes;
              p = (1 << 31 - me(42 | e) + 1) - 1, p &= f & ~(v & ~S), p = p & 201326741 ? p & 201326741 | 1 : p ? p | 2 : 0;
            }
            p !== 0 && (l = !0, Vm(o, p));
          } else
            p = Ue, p = bt(
              o,
              o === We ? p : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (p & 3) === 0 || on(o, p) || (l = !0, Vm(o, p));
          o = o.next;
        }
      while (l);
      sc = !1;
    }
  }
  function uw() {
    Im();
  }
  function Im() {
    xo = uc = !1;
    var e = 0;
    $r !== 0 && (yw() && (e = $r), $r = 0);
    for (var n = Ve(), l = null, o = bo; o !== null; ) {
      var f = o.next, p = Hm(o, n);
      p === 0 ? (o.next = null, l === null ? bo = f : l.next = f, f === null && (Hl = l)) : (l = o, (e !== 0 || (p & 3) !== 0) && (xo = !0)), o = f;
    }
    Ga(e);
  }
  function Hm(e, n) {
    for (var l = e.suspendedLanes, o = e.pingedLanes, f = e.expirationTimes, p = e.pendingLanes & -62914561; 0 < p; ) {
      var v = 31 - me(p), S = 1 << v, D = f[v];
      D === -1 ? ((S & l) === 0 || (S & o) !== 0) && (f[v] = bn(S, n)) : D <= n && (e.expiredLanes |= S), p &= ~S;
    }
    if (n = We, l = Ue, l = bt(
      e,
      e === n ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, l === 0 || e === n && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && be(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || on(e, l)) {
      if (n = l & -l, n === e.callbackPriority) return n;
      switch (o !== null && be(o), ku(l)) {
        case 2:
        case 8:
          l = Pe;
          break;
        case 32:
          l = ct;
          break;
        case 268435456:
          l = jn;
          break;
        default:
          l = ct;
      }
      return o = qm.bind(null, e), l = Se(l, o), e.callbackPriority = n, e.callbackNode = l, n;
    }
    return o !== null && o !== null && be(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function qm(e, n) {
    if (At !== 0 && At !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (vo() && e.callbackNode !== l)
      return null;
    var o = Ue;
    return o = bt(
      e,
      e === We ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (Em(e, o, n), Hm(e, Ve()), e.callbackNode != null && e.callbackNode === l ? qm.bind(null, e) : null);
  }
  function Vm(e, n) {
    if (vo()) return null;
    Em(e, n, !0);
  }
  function sw() {
    bw(function() {
      (Ge & 6) !== 0 ? Se(
        Fe,
        uw
      ) : Im();
    });
  }
  function cc() {
    return $r === 0 && ($r = zd()), $r;
  }
  function Ym(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Di("" + e);
  }
  function Pm(e, n) {
    var l = n.ownerDocument.createElement("input");
    return l.name = n.name, l.value = n.value, e.id && l.setAttribute("form", e.id), n.parentNode.insertBefore(l, n), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function cw(e, n, l, o, f) {
    if (n === "submit" && l && l.stateNode === f) {
      var p = Ym(
        (f[qt] || null).action
      ), v = o.submitter;
      v && (n = (n = v[qt] || null) ? Ym(n.formAction) : v.getAttribute("formAction"), n !== null && (p = n, v = null));
      var S = new Mi(
        "action",
        "action",
        null,
        o,
        f
      );
      e.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (o.defaultPrevented) {
                if ($r !== 0) {
                  var D = v ? Pm(f, v) : new FormData(f);
                  Ds(
                    l,
                    {
                      pending: !0,
                      data: D,
                      method: f.method,
                      action: p
                    },
                    null,
                    D
                  );
                }
              } else
                typeof p == "function" && (S.preventDefault(), D = v ? Pm(f, v) : new FormData(f), Ds(
                  l,
                  {
                    pending: !0,
                    data: D,
                    method: f.method,
                    action: p
                  },
                  p,
                  D
                ));
            },
            currentTarget: f
          }
        ]
      });
    }
  }
  for (var fc = 0; fc < Zu.length; fc++) {
    var dc = Zu[fc], fw = dc.toLowerCase(), dw = dc[0].toUpperCase() + dc.slice(1);
    xn(
      fw,
      "on" + dw
    );
  }
  xn(Eh, "onAnimationEnd"), xn(kh, "onAnimationIteration"), xn(Ch, "onAnimationStart"), xn("dblclick", "onDoubleClick"), xn("focusin", "onFocus"), xn("focusout", "onBlur"), xn(Rx, "onTransitionRun"), xn(Dx, "onTransitionStart"), xn(Nx, "onTransitionCancel"), xn(Ah, "onTransitionEnd"), cl("onMouseEnter", ["mouseout", "mouseover"]), cl("onMouseLeave", ["mouseout", "mouseover"]), cl("onPointerEnter", ["pointerout", "pointerover"]), cl("onPointerLeave", ["pointerout", "pointerover"]), jr(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), jr(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), jr("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), jr(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), jr(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), jr(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Xa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), hw = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xa)
  );
  function Fm(e, n) {
    n = (n & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var o = e[l], f = o.event;
      o = o.listeners;
      e: {
        var p = void 0;
        if (n)
          for (var v = o.length - 1; 0 <= v; v--) {
            var S = o[v], D = S.instance, U = S.currentTarget;
            if (S = S.listener, D !== p && f.isPropagationStopped())
              break e;
            p = S, f.currentTarget = U;
            try {
              p(f);
            } catch (K) {
              io(K);
            }
            f.currentTarget = null, p = D;
          }
        else
          for (v = 0; v < o.length; v++) {
            if (S = o[v], D = S.instance, U = S.currentTarget, S = S.listener, D !== p && f.isPropagationStopped())
              break e;
            p = S, f.currentTarget = U;
            try {
              p(f);
            } catch (K) {
              io(K);
            }
            f.currentTarget = null, p = D;
          }
      }
    }
  }
  function Le(e, n) {
    var l = n[Cu];
    l === void 0 && (l = n[Cu] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    l.has(o) || (Gm(n, e, 2, !1), l.add(o));
  }
  function hc(e, n, l) {
    var o = 0;
    n && (o |= 4), Gm(
      l,
      e,
      o,
      n
    );
  }
  var wo = "_reactListening" + Math.random().toString(36).slice(2);
  function pc(e) {
    if (!e[wo]) {
      e[wo] = !0, Id.forEach(function(l) {
        l !== "selectionchange" && (hw.has(l) || hc(l, !1, e), hc(l, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[wo] || (n[wo] = !0, hc("selectionchange", !1, n));
    }
  }
  function Gm(e, n, l, o) {
    switch (gg(n)) {
      case 2:
        var f = Hw;
        break;
      case 8:
        f = qw;
        break;
      default:
        f = _c;
    }
    l = f.bind(
      null,
      n,
      l,
      e
    ), f = void 0, !ju || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (f = !0), o ? f !== void 0 ? e.addEventListener(n, l, {
      capture: !0,
      passive: f
    }) : e.addEventListener(n, l, !0) : f !== void 0 ? e.addEventListener(n, l, {
      passive: f
    }) : e.addEventListener(n, l, !1);
  }
  function mc(e, n, l, o, f) {
    var p = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var v = o.tag;
        if (v === 3 || v === 4) {
          var S = o.stateNode.containerInfo;
          if (S === f) break;
          if (v === 4)
            for (v = o.return; v !== null; ) {
              var D = v.tag;
              if ((D === 3 || D === 4) && v.stateNode.containerInfo === f)
                return;
              v = v.return;
            }
          for (; S !== null; ) {
            if (v = ol(S), v === null) return;
            if (D = v.tag, D === 5 || D === 6 || D === 26 || D === 27) {
              o = p = v;
              continue e;
            }
            S = S.parentNode;
          }
        }
        o = o.return;
      }
    Wd(function() {
      var U = p, K = Mu(l), W = [];
      e: {
        var H = Th.get(e);
        if (H !== void 0) {
          var V = Mi, Ee = e;
          switch (e) {
            case "keypress":
              if (Oi(l) === 0) break e;
            case "keydown":
            case "keyup":
              V = ox;
              break;
            case "focusin":
              Ee = "focus", V = Hu;
              break;
            case "focusout":
              Ee = "blur", V = Hu;
              break;
            case "beforeblur":
            case "afterblur":
              V = Hu;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = nh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = Z1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = cx;
              break;
            case Eh:
            case kh:
            case Ch:
              V = $1;
              break;
            case Ah:
              V = dx;
              break;
            case "scroll":
            case "scrollend":
              V = X1;
              break;
            case "wheel":
              V = px;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = ex;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = lh;
              break;
            case "toggle":
            case "beforetoggle":
              V = gx;
          }
          var xe = (n & 4) !== 0, Ke = !xe && (e === "scroll" || e === "scrollend"), M = xe ? H !== null ? H + "Capture" : null : H;
          xe = [];
          for (var N = U, L; N !== null; ) {
            var J = N;
            if (L = J.stateNode, J = J.tag, J !== 5 && J !== 26 && J !== 27 || L === null || M === null || (J = da(N, M), J != null && xe.push(
              Qa(N, J, L)
            )), Ke) break;
            N = N.return;
          }
          0 < xe.length && (H = new V(
            H,
            Ee,
            null,
            l,
            K
          ), W.push({ event: H, listeners: xe }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (H = e === "mouseover" || e === "pointerover", V = e === "mouseout" || e === "pointerout", H && l !== zu && (Ee = l.relatedTarget || l.fromElement) && (ol(Ee) || Ee[il]))
            break e;
          if ((V || H) && (H = K.window === K ? K : (H = K.ownerDocument) ? H.defaultView || H.parentWindow : window, V ? (Ee = l.relatedTarget || l.toElement, V = U, Ee = Ee ? ol(Ee) : null, Ee !== null && (Ke = s(Ee), xe = Ee.tag, Ee !== Ke || xe !== 5 && xe !== 27 && xe !== 6) && (Ee = null)) : (V = null, Ee = U), V !== Ee)) {
            if (xe = nh, J = "onMouseLeave", M = "onMouseEnter", N = "mouse", (e === "pointerout" || e === "pointerover") && (xe = lh, J = "onPointerLeave", M = "onPointerEnter", N = "pointer"), Ke = V == null ? H : fa(V), L = Ee == null ? H : fa(Ee), H = new xe(
              J,
              N + "leave",
              V,
              l,
              K
            ), H.target = Ke, H.relatedTarget = L, J = null, ol(K) === U && (xe = new xe(
              M,
              N + "enter",
              Ee,
              l,
              K
            ), xe.target = L, xe.relatedTarget = Ke, J = xe), Ke = J, V && Ee)
              t: {
                for (xe = V, M = Ee, N = 0, L = xe; L; L = ql(L))
                  N++;
                for (L = 0, J = M; J; J = ql(J))
                  L++;
                for (; 0 < N - L; )
                  xe = ql(xe), N--;
                for (; 0 < L - N; )
                  M = ql(M), L--;
                for (; N--; ) {
                  if (xe === M || M !== null && xe === M.alternate)
                    break t;
                  xe = ql(xe), M = ql(M);
                }
                xe = null;
              }
            else xe = null;
            V !== null && Xm(
              W,
              H,
              V,
              xe,
              !1
            ), Ee !== null && Ke !== null && Xm(
              W,
              Ke,
              Ee,
              xe,
              !0
            );
          }
        }
        e: {
          if (H = U ? fa(U) : window, V = H.nodeName && H.nodeName.toLowerCase(), V === "select" || V === "input" && H.type === "file")
            var ce = dh;
          else if (ch(H))
            if (hh)
              ce = Ax;
            else {
              ce = kx;
              var Oe = Ex;
            }
          else
            V = H.nodeName, !V || V.toLowerCase() !== "input" || H.type !== "checkbox" && H.type !== "radio" ? U && Ou(U.elementType) && (ce = dh) : ce = Cx;
          if (ce && (ce = ce(e, U))) {
            fh(
              W,
              ce,
              l,
              K
            );
            break e;
          }
          Oe && Oe(e, H, U), e === "focusout" && U && H.type === "number" && U.memoizedProps.value != null && Nu(H, "number", H.value);
        }
        switch (Oe = U ? fa(U) : window, e) {
          case "focusin":
            (ch(Oe) || Oe.contentEditable === "true") && (yl = Oe, Gu = U, xa = null);
            break;
          case "focusout":
            xa = Gu = yl = null;
            break;
          case "mousedown":
            Xu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xu = !1, wh(W, l, K);
            break;
          case "selectionchange":
            if (_x) break;
          case "keydown":
          case "keyup":
            wh(W, l, K);
        }
        var pe;
        if (Vu)
          e: {
            switch (e) {
              case "compositionstart":
                var we = "onCompositionStart";
                break e;
              case "compositionend":
                we = "onCompositionEnd";
                break e;
              case "compositionupdate":
                we = "onCompositionUpdate";
                break e;
            }
            we = void 0;
          }
        else
          gl ? uh(e, l) && (we = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (we = "onCompositionStart");
        we && (ah && l.locale !== "ko" && (gl || we !== "onCompositionStart" ? we === "onCompositionEnd" && gl && (pe = eh()) : (ir = K, Uu = "value" in ir ? ir.value : ir.textContent, gl = !0)), Oe = So(U, we), 0 < Oe.length && (we = new rh(
          we,
          e,
          null,
          l,
          K
        ), W.push({ event: we, listeners: Oe }), pe ? we.data = pe : (pe = sh(l), pe !== null && (we.data = pe)))), (pe = vx ? bx(e, l) : xx(e, l)) && (we = So(U, "onBeforeInput"), 0 < we.length && (Oe = new rh(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          K
        ), W.push({
          event: Oe,
          listeners: we
        }), Oe.data = pe)), cw(
          W,
          e,
          U,
          l,
          K
        );
      }
      Fm(W, n);
    });
  }
  function Qa(e, n, l) {
    return {
      instance: e,
      listener: n,
      currentTarget: l
    };
  }
  function So(e, n) {
    for (var l = n + "Capture", o = []; e !== null; ) {
      var f = e, p = f.stateNode;
      if (f = f.tag, f !== 5 && f !== 26 && f !== 27 || p === null || (f = da(e, l), f != null && o.unshift(
        Qa(e, f, p)
      ), f = da(e, n), f != null && o.push(
        Qa(e, f, p)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function ql(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Xm(e, n, l, o, f) {
    for (var p = n._reactName, v = []; l !== null && l !== o; ) {
      var S = l, D = S.alternate, U = S.stateNode;
      if (S = S.tag, D !== null && D === o) break;
      S !== 5 && S !== 26 && S !== 27 || U === null || (D = U, f ? (U = da(l, p), U != null && v.unshift(
        Qa(l, U, D)
      )) : f || (U = da(l, p), U != null && v.push(
        Qa(l, U, D)
      ))), l = l.return;
    }
    v.length !== 0 && e.push({ event: n, listeners: v });
  }
  var pw = /\r\n?/g, mw = /\u0000|\uFFFD/g;
  function Qm(e) {
    return (typeof e == "string" ? e : "" + e).replace(pw, `
`).replace(mw, "");
  }
  function Zm(e, n) {
    return n = Qm(n), Qm(e) === n;
  }
  function Eo() {
  }
  function Ze(e, n, l, o, f, p) {
    switch (l) {
      case "children":
        typeof o == "string" ? n === "body" || n === "textarea" && o === "" || hl(e, o) : (typeof o == "number" || typeof o == "bigint") && n !== "body" && hl(e, "" + o);
        break;
      case "className":
        Ti(e, "class", o);
        break;
      case "tabIndex":
        Ti(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ti(e, l, o);
        break;
      case "style":
        Jd(e, o, p);
        break;
      case "data":
        if (n !== "object") {
          Ti(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(l);
          break;
        }
        o = Di("" + o), e.setAttribute(l, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof p == "function" && (l === "formAction" ? (n !== "input" && Ze(e, n, "name", f.name, f, null), Ze(
            e,
            n,
            "formEncType",
            f.formEncType,
            f,
            null
          ), Ze(
            e,
            n,
            "formMethod",
            f.formMethod,
            f,
            null
          ), Ze(
            e,
            n,
            "formTarget",
            f.formTarget,
            f,
            null
          )) : (Ze(e, n, "encType", f.encType, f, null), Ze(e, n, "method", f.method, f, null), Ze(e, n, "target", f.target, f, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(l);
          break;
        }
        o = Di("" + o), e.setAttribute(l, o);
        break;
      case "onClick":
        o != null && (e.onclick = Eo);
        break;
      case "onScroll":
        o != null && Le("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Le("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(i(61));
          if (l = o.__html, l != null) {
            if (f.children != null) throw Error(i(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        l = Di("" + o), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(l, "" + o) : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(l, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(l, o) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(l, o) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(l) : e.setAttribute(l, o);
        break;
      case "popover":
        Le("beforetoggle", e), Le("toggle", e), Ai(e, "popover", o);
        break;
      case "xlinkActuate":
        Un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        Un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        Un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        Un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        Un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        Un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        Un(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        Un(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        Un(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        Ai(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = F1.get(l) || l, Ai(e, l, o));
    }
  }
  function gc(e, n, l, o, f, p) {
    switch (l) {
      case "style":
        Jd(e, o, p);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(i(61));
          if (l = o.__html, l != null) {
            if (f.children != null) throw Error(i(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof o == "string" ? hl(e, o) : (typeof o == "number" || typeof o == "bigint") && hl(e, "" + o);
        break;
      case "onScroll":
        o != null && Le("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Le("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = Eo);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Hd.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (f = l.endsWith("Capture"), n = l.slice(2, f ? l.length - 7 : void 0), p = e[qt] || null, p = p != null ? p[l] : null, typeof p == "function" && e.removeEventListener(n, p, f), typeof o == "function")) {
              typeof p != "function" && p !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(n, o, f);
              break e;
            }
            l in e ? e[l] = o : o === !0 ? e.setAttribute(l, "") : Ai(e, l, o);
          }
    }
  }
  function Tt(e, n, l) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Le("error", e), Le("load", e);
        var o = !1, f = !1, p;
        for (p in l)
          if (l.hasOwnProperty(p)) {
            var v = l[p];
            if (v != null)
              switch (p) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, n));
                default:
                  Ze(e, n, p, v, l, null);
              }
          }
        f && Ze(e, n, "srcSet", l.srcSet, l, null), o && Ze(e, n, "src", l.src, l, null);
        return;
      case "input":
        Le("invalid", e);
        var S = p = v = f = null, D = null, U = null;
        for (o in l)
          if (l.hasOwnProperty(o)) {
            var K = l[o];
            if (K != null)
              switch (o) {
                case "name":
                  f = K;
                  break;
                case "type":
                  v = K;
                  break;
                case "checked":
                  D = K;
                  break;
                case "defaultChecked":
                  U = K;
                  break;
                case "value":
                  p = K;
                  break;
                case "defaultValue":
                  S = K;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (K != null)
                    throw Error(i(137, n));
                  break;
                default:
                  Ze(e, n, o, K, l, null);
              }
          }
        Xd(
          e,
          p,
          S,
          D,
          U,
          v,
          f,
          !1
        ), _i(e);
        return;
      case "select":
        Le("invalid", e), o = v = p = null;
        for (f in l)
          if (l.hasOwnProperty(f) && (S = l[f], S != null))
            switch (f) {
              case "value":
                p = S;
                break;
              case "defaultValue":
                v = S;
                break;
              case "multiple":
                o = S;
              default:
                Ze(e, n, f, S, l, null);
            }
        n = p, l = v, e.multiple = !!o, n != null ? dl(e, !!o, n, !1) : l != null && dl(e, !!o, l, !0);
        return;
      case "textarea":
        Le("invalid", e), p = f = o = null;
        for (v in l)
          if (l.hasOwnProperty(v) && (S = l[v], S != null))
            switch (v) {
              case "value":
                o = S;
                break;
              case "defaultValue":
                f = S;
                break;
              case "children":
                p = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(i(91));
                break;
              default:
                Ze(e, n, v, S, l, null);
            }
        Zd(e, o, f, p), _i(e);
        return;
      case "option":
        for (D in l)
          if (l.hasOwnProperty(D) && (o = l[D], o != null))
            switch (D) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                Ze(e, n, D, o, l, null);
            }
        return;
      case "dialog":
        Le("beforetoggle", e), Le("toggle", e), Le("cancel", e), Le("close", e);
        break;
      case "iframe":
      case "object":
        Le("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Xa.length; o++)
          Le(Xa[o], e);
        break;
      case "image":
        Le("error", e), Le("load", e);
        break;
      case "details":
        Le("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Le("error", e), Le("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (U in l)
          if (l.hasOwnProperty(U) && (o = l[U], o != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, n));
              default:
                Ze(e, n, U, o, l, null);
            }
        return;
      default:
        if (Ou(n)) {
          for (K in l)
            l.hasOwnProperty(K) && (o = l[K], o !== void 0 && gc(
              e,
              n,
              K,
              o,
              l,
              void 0
            ));
          return;
        }
    }
    for (S in l)
      l.hasOwnProperty(S) && (o = l[S], o != null && Ze(e, n, S, o, l, null));
  }
  function gw(e, n, l, o) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var f = null, p = null, v = null, S = null, D = null, U = null, K = null;
        for (V in l) {
          var W = l[V];
          if (l.hasOwnProperty(V) && W != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                D = W;
              default:
                o.hasOwnProperty(V) || Ze(e, n, V, null, o, W);
            }
        }
        for (var H in o) {
          var V = o[H];
          if (W = l[H], o.hasOwnProperty(H) && (V != null || W != null))
            switch (H) {
              case "type":
                p = V;
                break;
              case "name":
                f = V;
                break;
              case "checked":
                U = V;
                break;
              case "defaultChecked":
                K = V;
                break;
              case "value":
                v = V;
                break;
              case "defaultValue":
                S = V;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null)
                  throw Error(i(137, n));
                break;
              default:
                V !== W && Ze(
                  e,
                  n,
                  H,
                  V,
                  o,
                  W
                );
            }
        }
        Du(
          e,
          v,
          S,
          D,
          U,
          K,
          p,
          f
        );
        return;
      case "select":
        V = v = S = H = null;
        for (p in l)
          if (D = l[p], l.hasOwnProperty(p) && D != null)
            switch (p) {
              case "value":
                break;
              case "multiple":
                V = D;
              default:
                o.hasOwnProperty(p) || Ze(
                  e,
                  n,
                  p,
                  null,
                  o,
                  D
                );
            }
        for (f in o)
          if (p = o[f], D = l[f], o.hasOwnProperty(f) && (p != null || D != null))
            switch (f) {
              case "value":
                H = p;
                break;
              case "defaultValue":
                S = p;
                break;
              case "multiple":
                v = p;
              default:
                p !== D && Ze(
                  e,
                  n,
                  f,
                  p,
                  o,
                  D
                );
            }
        n = S, l = v, o = V, H != null ? dl(e, !!l, H, !1) : !!o != !!l && (n != null ? dl(e, !!l, n, !0) : dl(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        V = H = null;
        for (S in l)
          if (f = l[S], l.hasOwnProperty(S) && f != null && !o.hasOwnProperty(S))
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ze(e, n, S, null, o, f);
            }
        for (v in o)
          if (f = o[v], p = l[v], o.hasOwnProperty(v) && (f != null || p != null))
            switch (v) {
              case "value":
                H = f;
                break;
              case "defaultValue":
                V = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(i(91));
                break;
              default:
                f !== p && Ze(e, n, v, f, o, p);
            }
        Qd(e, H, V);
        return;
      case "option":
        for (var Ee in l)
          if (H = l[Ee], l.hasOwnProperty(Ee) && H != null && !o.hasOwnProperty(Ee))
            switch (Ee) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ze(
                  e,
                  n,
                  Ee,
                  null,
                  o,
                  H
                );
            }
        for (D in o)
          if (H = o[D], V = l[D], o.hasOwnProperty(D) && H !== V && (H != null || V != null))
            switch (D) {
              case "selected":
                e.selected = H && typeof H != "function" && typeof H != "symbol";
                break;
              default:
                Ze(
                  e,
                  n,
                  D,
                  H,
                  o,
                  V
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var xe in l)
          H = l[xe], l.hasOwnProperty(xe) && H != null && !o.hasOwnProperty(xe) && Ze(e, n, xe, null, o, H);
        for (U in o)
          if (H = o[U], V = l[U], o.hasOwnProperty(U) && H !== V && (H != null || V != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null)
                  throw Error(i(137, n));
                break;
              default:
                Ze(
                  e,
                  n,
                  U,
                  H,
                  o,
                  V
                );
            }
        return;
      default:
        if (Ou(n)) {
          for (var Ke in l)
            H = l[Ke], l.hasOwnProperty(Ke) && H !== void 0 && !o.hasOwnProperty(Ke) && gc(
              e,
              n,
              Ke,
              void 0,
              o,
              H
            );
          for (K in o)
            H = o[K], V = l[K], !o.hasOwnProperty(K) || H === V || H === void 0 && V === void 0 || gc(
              e,
              n,
              K,
              H,
              o,
              V
            );
          return;
        }
    }
    for (var M in l)
      H = l[M], l.hasOwnProperty(M) && H != null && !o.hasOwnProperty(M) && Ze(e, n, M, null, o, H);
    for (W in o)
      H = o[W], V = l[W], !o.hasOwnProperty(W) || H === V || H == null && V == null || Ze(e, n, W, H, o, V);
  }
  var yc = null, vc = null;
  function ko(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Km(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Jm(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function bc(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var xc = null;
  function yw() {
    var e = window.event;
    return e && e.type === "popstate" ? e === xc ? !1 : (xc = e, !0) : (xc = null, !1);
  }
  var $m = typeof setTimeout == "function" ? setTimeout : void 0, vw = typeof clearTimeout == "function" ? clearTimeout : void 0, Wm = typeof Promise == "function" ? Promise : void 0, bw = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wm < "u" ? function(e) {
    return Wm.resolve(null).then(e).catch(xw);
  } : $m;
  function xw(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Sr(e) {
    return e === "head";
  }
  function eg(e, n) {
    var l = n, o = 0, f = 0;
    do {
      var p = l.nextSibling;
      if (e.removeChild(l), p && p.nodeType === 8)
        if (l = p.data, l === "/$") {
          if (0 < o && 8 > o) {
            l = o;
            var v = e.ownerDocument;
            if (l & 1 && Za(v.documentElement), l & 2 && Za(v.body), l & 4)
              for (l = v.head, Za(l), v = l.firstChild; v; ) {
                var S = v.nextSibling, D = v.nodeName;
                v[ca] || D === "SCRIPT" || D === "STYLE" || D === "LINK" && v.rel.toLowerCase() === "stylesheet" || l.removeChild(v), v = S;
              }
          }
          if (f === 0) {
            e.removeChild(p), ri(n);
            return;
          }
          f--;
        } else
          l === "$" || l === "$?" || l === "$!" ? f++ : o = l.charCodeAt(0) - 48;
      else o = 0;
      l = p;
    } while (l);
    ri(n);
  }
  function wc(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var l = n;
      switch (n = n.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          wc(l), Au(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function ww(e, n, l, o) {
    for (; e.nodeType === 1; ) {
      var f = l;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[ca])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (p = e.getAttribute("rel"), p === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (p !== f.rel || e.getAttribute("href") !== (f.href == null || f.href === "" ? null : f.href) || e.getAttribute("crossorigin") !== (f.crossOrigin == null ? null : f.crossOrigin) || e.getAttribute("title") !== (f.title == null ? null : f.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (p = e.getAttribute("src"), (p !== (f.src == null ? null : f.src) || e.getAttribute("type") !== (f.type == null ? null : f.type) || e.getAttribute("crossorigin") !== (f.crossOrigin == null ? null : f.crossOrigin)) && p && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var p = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && e.getAttribute("name") === p)
          return e;
      } else return e;
      if (e = Sn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Sw(e, n, l) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Sn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Sc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function Ew(e, n) {
    var l = e.ownerDocument;
    if (e.data !== "$?" || l.readyState === "complete")
      n();
    else {
      var o = function() {
        n(), l.removeEventListener("DOMContentLoaded", o);
      };
      l.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function Sn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  var Ec = null;
  function tg(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (n === 0) return e;
          n--;
        } else l === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function ng(e, n, l) {
    switch (n = ko(l), e) {
      case "html":
        if (e = n.documentElement, !e) throw Error(i(452));
        return e;
      case "head":
        if (e = n.head, !e) throw Error(i(453));
        return e;
      case "body":
        if (e = n.body, !e) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function Za(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    Au(e);
  }
  var gn = /* @__PURE__ */ new Map(), rg = /* @__PURE__ */ new Set();
  function Co(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Jn = $.d;
  $.d = {
    f: kw,
    r: Cw,
    D: Aw,
    C: Tw,
    L: _w,
    m: Rw,
    X: Nw,
    S: Dw,
    M: Ow
  };
  function kw() {
    var e = Jn.f(), n = go();
    return e || n;
  }
  function Cw(e) {
    var n = ul(e);
    n !== null && n.tag === 5 && n.type === "form" ? Ep(n) : Jn.r(e);
  }
  var Vl = typeof document > "u" ? null : document;
  function lg(e, n, l) {
    var o = Vl;
    if (o && typeof n == "string" && n) {
      var f = sn(n);
      f = 'link[rel="' + e + '"][href="' + f + '"]', typeof l == "string" && (f += '[crossorigin="' + l + '"]'), rg.has(f) || (rg.add(f), e = { rel: e, crossOrigin: l, href: n }, o.querySelector(f) === null && (n = o.createElement("link"), Tt(n, "link", e), xt(n), o.head.appendChild(n)));
    }
  }
  function Aw(e) {
    Jn.D(e), lg("dns-prefetch", e, null);
  }
  function Tw(e, n) {
    Jn.C(e, n), lg("preconnect", e, n);
  }
  function _w(e, n, l) {
    Jn.L(e, n, l);
    var o = Vl;
    if (o && e && n) {
      var f = 'link[rel="preload"][as="' + sn(n) + '"]';
      n === "image" && l && l.imageSrcSet ? (f += '[imagesrcset="' + sn(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (f += '[imagesizes="' + sn(
        l.imageSizes
      ) + '"]')) : f += '[href="' + sn(e) + '"]';
      var p = f;
      switch (n) {
        case "style":
          p = Yl(e);
          break;
        case "script":
          p = Pl(e);
      }
      gn.has(p) || (e = g(
        {
          rel: "preload",
          href: n === "image" && l && l.imageSrcSet ? void 0 : e,
          as: n
        },
        l
      ), gn.set(p, e), o.querySelector(f) !== null || n === "style" && o.querySelector(Ka(p)) || n === "script" && o.querySelector(Ja(p)) || (n = o.createElement("link"), Tt(n, "link", e), xt(n), o.head.appendChild(n)));
    }
  }
  function Rw(e, n) {
    Jn.m(e, n);
    var l = Vl;
    if (l && e) {
      var o = n && typeof n.as == "string" ? n.as : "script", f = 'link[rel="modulepreload"][as="' + sn(o) + '"][href="' + sn(e) + '"]', p = f;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          p = Pl(e);
      }
      if (!gn.has(p) && (e = g({ rel: "modulepreload", href: e }, n), gn.set(p, e), l.querySelector(f) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Ja(p)))
              return;
        }
        o = l.createElement("link"), Tt(o, "link", e), xt(o), l.head.appendChild(o);
      }
    }
  }
  function Dw(e, n, l) {
    Jn.S(e, n, l);
    var o = Vl;
    if (o && e) {
      var f = sl(o).hoistableStyles, p = Yl(e);
      n = n || "default";
      var v = f.get(p);
      if (!v) {
        var S = { loading: 0, preload: null };
        if (v = o.querySelector(
          Ka(p)
        ))
          S.loading = 5;
        else {
          e = g(
            { rel: "stylesheet", href: e, "data-precedence": n },
            l
          ), (l = gn.get(p)) && kc(e, l);
          var D = v = o.createElement("link");
          xt(D), Tt(D, "link", e), D._p = new Promise(function(U, K) {
            D.onload = U, D.onerror = K;
          }), D.addEventListener("load", function() {
            S.loading |= 1;
          }), D.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, Ao(v, n, o);
        }
        v = {
          type: "stylesheet",
          instance: v,
          count: 1,
          state: S
        }, f.set(p, v);
      }
    }
  }
  function Nw(e, n) {
    Jn.X(e, n);
    var l = Vl;
    if (l && e) {
      var o = sl(l).hoistableScripts, f = Pl(e), p = o.get(f);
      p || (p = l.querySelector(Ja(f)), p || (e = g({ src: e, async: !0 }, n), (n = gn.get(f)) && Cc(e, n), p = l.createElement("script"), xt(p), Tt(p, "link", e), l.head.appendChild(p)), p = {
        type: "script",
        instance: p,
        count: 1,
        state: null
      }, o.set(f, p));
    }
  }
  function Ow(e, n) {
    Jn.M(e, n);
    var l = Vl;
    if (l && e) {
      var o = sl(l).hoistableScripts, f = Pl(e), p = o.get(f);
      p || (p = l.querySelector(Ja(f)), p || (e = g({ src: e, async: !0, type: "module" }, n), (n = gn.get(f)) && Cc(e, n), p = l.createElement("script"), xt(p), Tt(p, "link", e), l.head.appendChild(p)), p = {
        type: "script",
        instance: p,
        count: 1,
        state: null
      }, o.set(f, p));
    }
  }
  function ag(e, n, l, o) {
    var f = (f = se.current) ? Co(f) : null;
    if (!f) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (n = Yl(l.href), l = sl(
          f
        ).hoistableStyles, o = l.get(n), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Yl(l.href);
          var p = sl(
            f
          ).hoistableStyles, v = p.get(e);
          if (v || (f = f.ownerDocument || f, v = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, p.set(e, v), (p = f.querySelector(
            Ka(e)
          )) && !p._p && (v.instance = p, v.state.loading = 5), gn.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, gn.set(e, l), p || zw(
            f,
            e,
            l,
            v.state
          ))), n && o === null)
            throw Error(i(528, ""));
          return v;
        }
        if (n && o !== null)
          throw Error(i(529, ""));
        return null;
      case "script":
        return n = l.async, l = l.src, typeof l == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Pl(l), l = sl(
          f
        ).hoistableScripts, o = l.get(n), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(i(444, e));
    }
  }
  function Yl(e) {
    return 'href="' + sn(e) + '"';
  }
  function Ka(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function ig(e) {
    return g({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function zw(e, n, l, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = e.createElement("link"), o.preload = n, n.addEventListener("load", function() {
      return o.loading |= 1;
    }), n.addEventListener("error", function() {
      return o.loading |= 2;
    }), Tt(n, "link", l), xt(n), e.head.appendChild(n));
  }
  function Pl(e) {
    return '[src="' + sn(e) + '"]';
  }
  function Ja(e) {
    return "script[async]" + e;
  }
  function og(e, n, l) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + sn(l.href) + '"]'
          );
          if (o)
            return n.instance = o, xt(o), o;
          var f = g({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), xt(o), Tt(o, "style", f), Ao(o, l.precedence, e), n.instance = o;
        case "stylesheet":
          f = Yl(l.href);
          var p = e.querySelector(
            Ka(f)
          );
          if (p)
            return n.state.loading |= 4, n.instance = p, xt(p), p;
          o = ig(l), (f = gn.get(f)) && kc(o, f), p = (e.ownerDocument || e).createElement("link"), xt(p);
          var v = p;
          return v._p = new Promise(function(S, D) {
            v.onload = S, v.onerror = D;
          }), Tt(p, "link", o), n.state.loading |= 4, Ao(p, l.precedence, e), n.instance = p;
        case "script":
          return p = Pl(l.src), (f = e.querySelector(
            Ja(p)
          )) ? (n.instance = f, xt(f), f) : (o = l, (f = gn.get(p)) && (o = g({}, l), Cc(o, f)), e = e.ownerDocument || e, f = e.createElement("script"), xt(f), Tt(f, "link", o), e.head.appendChild(f), n.instance = f);
        case "void":
          return null;
        default:
          throw Error(i(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance, n.state.loading |= 4, Ao(o, l.precedence, e));
    return n.instance;
  }
  function Ao(e, n, l) {
    for (var o = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), f = o.length ? o[o.length - 1] : null, p = f, v = 0; v < o.length; v++) {
      var S = o[v];
      if (S.dataset.precedence === n) p = S;
      else if (p !== f) break;
    }
    p ? p.parentNode.insertBefore(e, p.nextSibling) : (n = l.nodeType === 9 ? l.head : l, n.insertBefore(e, n.firstChild));
  }
  function kc(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Cc(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var To = null;
  function ug(e, n, l) {
    if (To === null) {
      var o = /* @__PURE__ */ new Map(), f = To = /* @__PURE__ */ new Map();
      f.set(l, o);
    } else
      f = To, o = f.get(l), o || (o = /* @__PURE__ */ new Map(), f.set(l, o));
    if (o.has(e)) return o;
    for (o.set(e, null), l = l.getElementsByTagName(e), f = 0; f < l.length; f++) {
      var p = l[f];
      if (!(p[ca] || p[Dt] || e === "link" && p.getAttribute("rel") === "stylesheet") && p.namespaceURI !== "http://www.w3.org/2000/svg") {
        var v = p.getAttribute(n) || "";
        v = e + v;
        var S = o.get(v);
        S ? S.push(p) : o.set(v, [p]);
      }
    }
    return o;
  }
  function sg(e, n, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function Mw(e, n, l) {
    if (l === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return e = n.disabled, typeof n.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function cg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var $a = null;
  function Lw() {
  }
  function jw(e, n, l) {
    if ($a === null) throw Error(i(475));
    var o = $a;
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var f = Yl(l.href), p = e.querySelector(
          Ka(f)
        );
        if (p) {
          e = p._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = _o.bind(o), e.then(o, o)), n.state.loading |= 4, n.instance = p, xt(p);
          return;
        }
        p = e.ownerDocument || e, l = ig(l), (f = gn.get(f)) && kc(l, f), p = p.createElement("link"), xt(p);
        var v = p;
        v._p = new Promise(function(S, D) {
          v.onload = S, v.onerror = D;
        }), Tt(p, "link", l), n.instance = p;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (o.count++, n = _o.bind(o), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function Uw() {
    if ($a === null) throw Error(i(475));
    var e = $a;
    return e.stylesheets && e.count === 0 && Ac(e, e.stylesheets), 0 < e.count ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && Ac(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l);
      };
    } : null;
  }
  function _o() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Ac(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ro = null;
  function Ac(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ro = /* @__PURE__ */ new Map(), n.forEach(Bw, e), Ro = null, _o.call(e));
  }
  function Bw(e, n) {
    if (!(n.state.loading & 4)) {
      var l = Ro.get(e);
      if (l) var o = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Ro.set(e, l);
        for (var f = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), p = 0; p < f.length; p++) {
          var v = f[p];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (l.set(v.dataset.precedence, v), o = v);
        }
        o && l.set(null, o);
      }
      f = n.instance, v = f.getAttribute("data-precedence"), p = l.get(v) || o, p === o && l.set(null, f), l.set(v, f), this.count++, o = _o.bind(this), f.addEventListener("load", o), f.addEventListener("error", o), p ? p.parentNode.insertBefore(f, p.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(f, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Wa = {
    $$typeof: j,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0
  };
  function Iw(e, n, l, o, f, p, v, S) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Su(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Su(0), this.hiddenUpdates = Su(null), this.identifierPrefix = o, this.onUncaughtError = f, this.onCaughtError = p, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function fg(e, n, l, o, f, p, v, S, D, U, K, W) {
    return e = new Iw(
      e,
      n,
      l,
      v,
      S,
      D,
      U,
      W
    ), n = 1, p === !0 && (n |= 24), p = Kt(3, null, null, n), e.current = p, p.stateNode = e, n = os(), n.refCount++, e.pooledCache = n, n.refCount++, p.memoizedState = {
      element: o,
      isDehydrated: l,
      cache: n
    }, fs(p), e;
  }
  function dg(e) {
    return e ? (e = wl, e) : wl;
  }
  function hg(e, n, l, o, f, p) {
    f = dg(f), o.context === null ? o.context = f : o.pendingContext = f, o = sr(n), o.payload = { element: l }, p = p === void 0 ? null : p, p !== null && (o.callback = p), l = cr(e, o, n), l !== null && (tn(l, e, n), Ra(l, e, n));
  }
  function pg(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < n ? l : n;
    }
  }
  function Tc(e, n) {
    pg(e, n), (e = e.alternate) && pg(e, n);
  }
  function mg(e) {
    if (e.tag === 13) {
      var n = xl(e, 67108864);
      n !== null && tn(n, e, 67108864), Tc(e, 67108864);
    }
  }
  var Do = !0;
  function Hw(e, n, l, o) {
    var f = B.T;
    B.T = null;
    var p = $.p;
    try {
      $.p = 2, _c(e, n, l, o);
    } finally {
      $.p = p, B.T = f;
    }
  }
  function qw(e, n, l, o) {
    var f = B.T;
    B.T = null;
    var p = $.p;
    try {
      $.p = 8, _c(e, n, l, o);
    } finally {
      $.p = p, B.T = f;
    }
  }
  function _c(e, n, l, o) {
    if (Do) {
      var f = Rc(o);
      if (f === null)
        mc(
          e,
          n,
          o,
          No,
          l
        ), yg(e, o);
      else if (Yw(
        f,
        e,
        n,
        l,
        o
      ))
        o.stopPropagation();
      else if (yg(e, o), n & 4 && -1 < Vw.indexOf(e)) {
        for (; f !== null; ) {
          var p = ul(f);
          if (p !== null)
            switch (p.tag) {
              case 3:
                if (p = p.stateNode, p.current.memoizedState.isDehydrated) {
                  var v = Qt(p.pendingLanes);
                  if (v !== 0) {
                    var S = p;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; v; ) {
                      var D = 1 << 31 - me(v);
                      S.entanglements[1] |= D, v &= ~D;
                    }
                    Dn(p), (Ge & 6) === 0 && (po = Ve() + 500, Ga(0));
                  }
                }
                break;
              case 13:
                S = xl(p, 2), S !== null && tn(S, p, 2), go(), Tc(p, 2);
            }
          if (p = Rc(o), p === null && mc(
            e,
            n,
            o,
            No,
            l
          ), p === f) break;
          f = p;
        }
        f !== null && o.stopPropagation();
      } else
        mc(
          e,
          n,
          o,
          null,
          l
        );
    }
  }
  function Rc(e) {
    return e = Mu(e), Dc(e);
  }
  var No = null;
  function Dc(e) {
    if (No = null, e = ol(e), e !== null) {
      var n = s(e);
      if (n === null) e = null;
      else {
        var l = n.tag;
        if (l === 13) {
          if (e = c(n), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return No = e, null;
  }
  function gg(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (kt()) {
          case Fe:
            return 2;
          case Pe:
            return 8;
          case ct:
          case rr:
            return 32;
          case jn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Nc = !1, Er = null, kr = null, Cr = null, ei = /* @__PURE__ */ new Map(), ti = /* @__PURE__ */ new Map(), Ar = [], Vw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function yg(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Er = null;
        break;
      case "dragenter":
      case "dragleave":
        kr = null;
        break;
      case "mouseover":
      case "mouseout":
        Cr = null;
        break;
      case "pointerover":
      case "pointerout":
        ei.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ti.delete(n.pointerId);
    }
  }
  function ni(e, n, l, o, f, p) {
    return e === null || e.nativeEvent !== p ? (e = {
      blockedOn: n,
      domEventName: l,
      eventSystemFlags: o,
      nativeEvent: p,
      targetContainers: [f]
    }, n !== null && (n = ul(n), n !== null && mg(n)), e) : (e.eventSystemFlags |= o, n = e.targetContainers, f !== null && n.indexOf(f) === -1 && n.push(f), e);
  }
  function Yw(e, n, l, o, f) {
    switch (n) {
      case "focusin":
        return Er = ni(
          Er,
          e,
          n,
          l,
          o,
          f
        ), !0;
      case "dragenter":
        return kr = ni(
          kr,
          e,
          n,
          l,
          o,
          f
        ), !0;
      case "mouseover":
        return Cr = ni(
          Cr,
          e,
          n,
          l,
          o,
          f
        ), !0;
      case "pointerover":
        var p = f.pointerId;
        return ei.set(
          p,
          ni(
            ei.get(p) || null,
            e,
            n,
            l,
            o,
            f
          )
        ), !0;
      case "gotpointercapture":
        return p = f.pointerId, ti.set(
          p,
          ni(
            ti.get(p) || null,
            e,
            n,
            l,
            o,
            f
          )
        ), !0;
    }
    return !1;
  }
  function vg(e) {
    var n = ol(e.target);
    if (n !== null) {
      var l = s(n);
      if (l !== null) {
        if (n = l.tag, n === 13) {
          if (n = c(l), n !== null) {
            e.blockedOn = n, j1(e.priority, function() {
              if (l.tag === 13) {
                var o = en();
                o = Eu(o);
                var f = xl(l, o);
                f !== null && tn(f, l, o), Tc(l, o);
              }
            });
            return;
          }
        } else if (n === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Oo(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var l = Rc(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var o = new l.constructor(
          l.type,
          l
        );
        zu = o, l.target.dispatchEvent(o), zu = null;
      } else
        return n = ul(l), n !== null && mg(n), e.blockedOn = l, !1;
      n.shift();
    }
    return !0;
  }
  function bg(e, n, l) {
    Oo(e) && l.delete(n);
  }
  function Pw() {
    Nc = !1, Er !== null && Oo(Er) && (Er = null), kr !== null && Oo(kr) && (kr = null), Cr !== null && Oo(Cr) && (Cr = null), ei.forEach(bg), ti.forEach(bg);
  }
  function zo(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Nc || (Nc = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      Pw
    )));
  }
  var Mo = null;
  function xg(e) {
    Mo !== e && (Mo = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        Mo === e && (Mo = null);
        for (var n = 0; n < e.length; n += 3) {
          var l = e[n], o = e[n + 1], f = e[n + 2];
          if (typeof o != "function") {
            if (Dc(o || l) === null)
              continue;
            break;
          }
          var p = ul(l);
          p !== null && (e.splice(n, 3), n -= 3, Ds(
            p,
            {
              pending: !0,
              data: f,
              method: l.method,
              action: o
            },
            o,
            f
          ));
        }
      }
    ));
  }
  function ri(e) {
    function n(D) {
      return zo(D, e);
    }
    Er !== null && zo(Er, e), kr !== null && zo(kr, e), Cr !== null && zo(Cr, e), ei.forEach(n), ti.forEach(n);
    for (var l = 0; l < Ar.length; l++) {
      var o = Ar[l];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Ar.length && (l = Ar[0], l.blockedOn === null); )
      vg(l), l.blockedOn === null && Ar.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (o = 0; o < l.length; o += 3) {
        var f = l[o], p = l[o + 1], v = f[qt] || null;
        if (typeof p == "function")
          v || xg(l);
        else if (v) {
          var S = null;
          if (p && p.hasAttribute("formAction")) {
            if (f = p, v = p[qt] || null)
              S = v.formAction;
            else if (Dc(f) !== null) continue;
          } else S = v.action;
          typeof S == "function" ? l[o + 1] = S : (l.splice(o, 3), o -= 3), xg(l);
        }
      }
  }
  function Oc(e) {
    this._internalRoot = e;
  }
  Lo.prototype.render = Oc.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(i(409));
    var l = n.current, o = en();
    hg(l, o, e, n, null, null);
  }, Lo.prototype.unmount = Oc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      hg(e.current, 2, null, e, null, null), go(), n[il] = null;
    }
  };
  function Lo(e) {
    this._internalRoot = e;
  }
  Lo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = Ud();
      e = { blockedOn: null, target: e, priority: n };
      for (var l = 0; l < Ar.length && n !== 0 && n < Ar[l].priority; l++) ;
      Ar.splice(l, 0, e), l === 0 && vg(e);
    }
  };
  var wg = r.version;
  if (wg !== "19.1.0")
    throw Error(
      i(
        527,
        wg,
        "19.1.0"
      )
    );
  $.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = m(n), e = e !== null ? h(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Fw = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: B,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var jo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jo.isDisabled && jo.supportsFiber)
      try {
        P = jo.inject(
          Fw
        ), ee = jo;
      } catch {
      }
  }
  return ai.createRoot = function(e, n) {
    if (!u(e)) throw Error(i(299));
    var l = !1, o = "", f = Up, p = Bp, v = Ip, S = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (f = n.onUncaughtError), n.onCaughtError !== void 0 && (p = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (S = n.unstable_transitionCallbacks)), n = fg(
      e,
      1,
      !1,
      null,
      null,
      l,
      o,
      f,
      p,
      v,
      S,
      null
    ), e[il] = n.current, pc(e), new Oc(n);
  }, ai.hydrateRoot = function(e, n, l) {
    if (!u(e)) throw Error(i(299));
    var o = !1, f = "", p = Up, v = Bp, S = Ip, D = null, U = null;
    return l != null && (l.unstable_strictMode === !0 && (o = !0), l.identifierPrefix !== void 0 && (f = l.identifierPrefix), l.onUncaughtError !== void 0 && (p = l.onUncaughtError), l.onCaughtError !== void 0 && (v = l.onCaughtError), l.onRecoverableError !== void 0 && (S = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (D = l.unstable_transitionCallbacks), l.formState !== void 0 && (U = l.formState)), n = fg(
      e,
      1,
      !0,
      n,
      l ?? null,
      o,
      f,
      p,
      v,
      S,
      D,
      U
    ), n.context = dg(null), l = n.current, o = en(), o = Eu(o), f = sr(o), f.callback = null, cr(l, f, o), l = o, n.current.lanes = l, sa(n, l), Dn(n), e[il] = n.current, pc(e), new Lo(n);
  }, ai.version = "19.1.0", ai;
}
var Ng;
function rS() {
  if (Ng) return Lc.exports;
  Ng = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Lc.exports = nS(), Lc.exports;
}
var lS = rS();
const aS = /* @__PURE__ */ ll(lS), iS = '/*! tailwindcss v4.1.8 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--leading-tight:1.25;--radius-md:.375rem;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:root{--background:0 0% 100%;--foreground:240 10% 3.9%;--card:0 0% 100%;--card-foreground:240 10% 3.9%;--popover:0 0% 100%;--popover-foreground:240 10% 3.9%;--primary:235 10% 79% 1;--primary-foreground:0 0% 98%;--secondary:229 7% 29% 1;--secondary-foreground:240 5.9% 10%;--muted:240 4.8% 95.9%;--muted-foreground:240 3.8% 46.1%;--accent:240 4.8% 95.9%;--accent-foreground:240 5.9% 10%;--destructive:0 84.2% 60.2%;--destructive-foreground:0 0% 98%;--border:240 5.9% 90%;--input:240 5.9% 90%;--ring:240 10% 3.9%;--chart-1:12 76% 61%;--chart-2:173 58% 39%;--chart-3:197 37% 24%;--chart-4:43 74% 66%;--chart-5:27 87% 67%;--radius:.5rem}.dark{--background:240 10% 3.9%;--foreground:0 0% 98%;--card:240 10% 3.9%;--card-foreground:0 0% 98%;--popover:240 10% 3.9%;--popover-foreground:0 0% 98%;--primary:235 10% 79% 1;--primary-foreground:240 5.9% 10%;--secondary:229 7% 29% 1;--secondary-foreground:0 0% 98%;--muted:240 3.7% 15.9%;--muted-foreground:240 5% 64.9%;--accent:240 3.7% 15.9%;--accent-foreground:0 0% 98%;--destructive:0 62.8% 30.6%;--destructive-foreground:0 0% 98%;--border:240 3.7% 15.9%;--input:240 3.7% 15.9%;--ring:240 4.9% 83.9%;--chart-1:220 70% 50%;--chart-2:160 60% 45%;--chart-3:30 80% 55%;--chart-4:280 65% 60%;--chart-5:340 75% 55%}}@layer components;@layer utilities{.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.top-6{top:calc(var(--spacing)*6)}.top-\\[-0px\\]{top:0}.top-\\[-50\\%\\]{top:-50%}.top-\\[50\\%\\]{top:50%}.right-0{right:calc(var(--spacing)*0)}.right-6{right:calc(var(--spacing)*6)}.right-12{right:calc(var(--spacing)*12)}.bottom-12{bottom:calc(var(--spacing)*12)}.left-\\[5px\\]{left:5px}.left-\\[50\\%\\]{left:50%}.z-20{z-index:20}.z-50{z-index:50}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.my-2{margin-block:calc(var(--spacing)*2)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.block{display:block}.flex{display:flex}.grid{display:grid}.inline-flex{display:inline-flex}.aspect-square{aspect-ratio:1}.size-16{width:calc(var(--spacing)*16);height:calc(var(--spacing)*16)}.h-2\\.5{height:calc(var(--spacing)*2.5)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-10{height:calc(var(--spacing)*10)}.h-11{height:calc(var(--spacing)*11)}.h-16{height:calc(var(--spacing)*16)}.h-\\[32px\\]{height:32px}.h-\\[50\\%\\]{height:50%}.h-\\[100\\%\\]{height:100%}.h-\\[100vh\\]{height:100vh}.h-full{height:100%}.h-screen{height:100vh}.min-h-\\[29\\.12px\\]{min-height:29.12px}.min-h-\\[110px\\]{min-height:110px}.w-2\\.5{width:calc(var(--spacing)*2.5)}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-8{width:calc(var(--spacing)*8)}.w-10{width:calc(var(--spacing)*10)}.w-16{width:calc(var(--spacing)*16)}.w-\\[2px\\]{width:2px}.w-\\[32px\\]{width:32px}.w-full{width:100%}.w-min{width:min-content}.max-w-lg{max-width:var(--container-lg)}.min-w-\\[29\\.12px\\]{min-width:29.12px}.flex-1{flex:1}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize-none{resize:none}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-row{flex-direction:row}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-0>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*0)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*0)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1.5)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1.5)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-\\[10px\\]{border-radius:10px}.rounded-\\[90\\.99px\\]{border-radius:90.99px}.rounded-\\[inherit\\]{border-radius:inherit}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-t-lg{border-top-left-radius:var(--radius-lg);border-top-right-radius:var(--radius-lg)}.rounded-tl-\\[12px\\]{border-top-left-radius:12px}.rounded-tr-\\[12px\\]{border-top-right-radius:12px}.rounded-b-lg{border-bottom-right-radius:var(--radius-lg);border-bottom-left-radius:var(--radius-lg)}.border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-none{--tw-border-style:none;border-style:none}.border-t-transparent{border-top-color:#0000}.border-l-transparent{border-left-color:#0000}.bg-\\[\\#475D92\\]{background-color:#475d92}.bg-\\[\\#44464F\\]{background-color:#44464f}.bg-\\[\\#121318\\]{background-color:#121318}.bg-black{background-color:var(--color-black)}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black)50%,transparent)}}.p-0{padding:calc(var(--spacing)*0)}.p-2{padding:calc(var(--spacing)*2)}.p-4{padding:calc(var(--spacing)*4)}.p-5{padding:calc(var(--spacing)*5)}.p-6{padding:calc(var(--spacing)*6)}.p-\\[1px\\]{padding:1px}.p-\\[9\\.1px\\]{padding:9.1px}.p-\\[12px\\]{padding:12px}.p-\\[16px\\]{padding:16px}.px-3{padding-inline:calc(var(--spacing)*3)}.px-8{padding-inline:calc(var(--spacing)*8)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-5{padding-block:calc(var(--spacing)*5)}.pt-0{padding-top:calc(var(--spacing)*0)}.pb-0{padding-bottom:calc(var(--spacing)*0)}.pl-2{padding-left:calc(var(--spacing)*2)}.text-center{text-align:center}.text-start{text-align:start}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[16px\\]{font-size:16px}.leading-\\[24px\\]{--tw-leading:24px;line-height:24px}.leading-none{--tw-leading:1;line-height:1}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.5px\\]{--tw-tracking:.5px;letter-spacing:.5px}.tracking-\\[0\\.15px\\]{--tw-tracking:.15px;letter-spacing:.15px}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.break-words{overflow-wrap:break-word}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#44464F\\]{color:#44464f}.text-\\[\\#C5C6D0\\]{color:#c5c6d0}.text-gray-500{color:var(--color-gray-500)}.text-white{color:var(--color-white)}.underline-offset-4{text-underline-offset:4px}.shadow-\\[0_-2px_4px_rgba\\(0\\,0\\,0\\,0\\.1\\)\\]{--tw-shadow:0 -2px 4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0_10px_20px_rgba\\(0\\,_0\\,_0\\,_0\\.2\\)\\]{--tw-shadow:0 10px 20px var(--tw-shadow-color,#0003);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0px_14px_16px_0px_\\#00000045\\]{--tw-shadow:0px 14px 16px 0px var(--tw-shadow-color,#00000045);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-black{--tw-shadow-color:#000}@supports (color:color-mix(in lab,red,red)){.shadow-black{--tw-shadow-color:color-mix(in oklab,var(--color-black)var(--tw-shadow-alpha),transparent)}}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.select-none{-webkit-user-select:none;user-select:none}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.file\\:border-0::file-selector-button{border-style:var(--tw-border-style);border-width:0}.file\\:bg-transparent::file-selector-button{background-color:#0000}.file\\:text-sm::file-selector-button{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.file\\:font-medium::file-selector-button{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}@media (hover:hover){.hover\\:text-gray-400:hover{color:var(--color-gray-400)}.hover\\:underline:hover{text-decoration-line:underline}}.focus-visible\\:ring-0:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(0px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-offset-0:focus-visible{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}@media (min-width:40rem){.sm\\:mt-0{margin-top:calc(var(--spacing)*0)}.sm\\:w-96{width:calc(var(--spacing)*96)}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}.sm\\:rounded-lg{border-radius:var(--radius-lg)}.sm\\:text-left{text-align:left}}}@keyframes clipSlideInFromRight{0%{clip-path:inset(0 0 0 100%);opacity:1}to{clip-path:inset(0);opacity:1}}.slide-in-right{will-change:clip-path;animation:.3s ease-out both clipSlideInFromRight;overflow:hidden}.card-title{color:#b0c6ff}.card-header{border-radius:16px 16px 0 0}.card-parent{color:#c5c6d0;background-color:#121318;border-radius:16px}.cancel-button{color:#b0c6ff}.action-button{color:#152e60;background:var(--Schemes-Primary,#b0c6ff);padding:var(--button,14px)16px}.modal-button{border-radius:var(--border-radius,100px)}.modal-text{color:var(--Title,#e2e2e9);text-overflow:ellipsis;font-size:22px;font-weight:400}.markdown-class{color:#c5c6d0}.markdown-class a{color:#b0c6ff}.section-title{border-radius:var(--border-radius,4px);padding:4px 16px;font-size:12px;font-weight:500;display:flex}.section-title.route{border:1px solid var(--Schemes-Secondary,#b0c6ff);color:var(--Schemes-Secondary,#b0c6ff)}.section-title.course{color:var(--Schemes-Secondary,#ffb3b1);border:1px solid var(--Schemes-Secondary,#ffb3b1)}.item{text-align:start;width:100%;color:var(--Schemes-Primary,#b0c6ff);border-radius:var(--border-radius,4px);border:1px solid var(--Schemes-Outline-Variant,#44464f);background:var(--Schemes-Surface-Bright,#38393f);flex-direction:column;justify-content:space-between;align-self:stretch;align-items:center;gap:8px;padding:12px;display:flex}.item.expanded{background-color:#1e1f25;border-color:#d9e2ff}.item.no-children{flex-direction:row}.button-text{padding:14px 16px;font-size:14px;font-weight:700}.list-messages{flex-direction:column;justify-content:flex-end;height:100%;display:flex}.welcome-text-content{background:linear-gradient(86deg,var(--Paragraph,#c5c6d0)4.86%,var(--Schemes-Outline-Variant,#44464f)97.15%);-webkit-text-fill-color:transparent;text-align:center;-webkit-background-clip:text;background-clip:text;font-size:36px;font-style:normal;font-weight:400;line-height:44px}.line-tutor-ia{background:linear-gradient(86deg,var(--Paragraph,#c5c6d0)4.86%,var(--Schemes-Outline-Variant,#44464f)97.15%);-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text;font-size:43px;font-style:normal;font-weight:700;line-height:normal}.line-3{font-size:24px;line-height:32px}.icon-container{align-items:flex-end;width:100%;height:56px;position:relative}@keyframes moveAndShrink{0%{width:56px;height:56px;left:calc(50% - 28px)}to{width:32px;height:32px;left:0}}.animated-icon{width:56px;height:56px;animation:1s ease-in-out 3s forwards moveAndShrink;position:absolute;left:calc(50% - 28px)}@keyframes welcomeTextFade{0%{opacity:1;height:128px}to{opacity:0;height:0}}.welcome-text{animation:1s ease-in-out 4s forwards welcomeTextFade;overflow:hidden}@keyframes welcomeContentFade{0%{opacity:0;height:0}to{opacity:1;height:100%}}.welcome-content{height:0;animation:1s ease-in-out 4s forwards welcomeContentFade;overflow:hidden}@keyframes avatarRolFade{0%{opacity:0;height:0}to{opacity:1;height:24px}}.avatar-rol-name{height:0;animation:1s ease-in-out 4s forwards avatarRolFade;overflow:hidden}:root{--black-a1:#0000000d;--black-a2:#0000001a;--black-a3:#00000026;--black-a4:#0003;--black-a5:#0000004d;--black-a6:#0006;--black-a7:#00000080;--black-a8:#0009;--black-a9:#000000b3;--black-a10:#000c;--black-a11:#000000e6;--black-a12:#000000f2}@supports (color:color(display-p3 1 1 1)){@media (color-gamut:p3){:root{--black-a1:color(display-p3 0 0 0/.05);--black-a2:color(display-p3 0 0 0/.1);--black-a3:color(display-p3 0 0 0/.15);--black-a4:color(display-p3 0 0 0/.2);--black-a5:color(display-p3 0 0 0/.3);--black-a6:color(display-p3 0 0 0/.4);--black-a7:color(display-p3 0 0 0/.5);--black-a8:color(display-p3 0 0 0/.6);--black-a9:color(display-p3 0 0 0/.7);--black-a10:color(display-p3 0 0 0/.8);--black-a11:color(display-p3 0 0 0/.9);--black-a12:color(display-p3 0 0 0/.95)}}}:root,.light,.light-theme{--mauve-1:#fdfcfd;--mauve-2:#faf9fb;--mauve-3:#f2eff3;--mauve-4:#eae7ec;--mauve-5:#e3dfe6;--mauve-6:#dbd8e0;--mauve-7:#d0cdd7;--mauve-8:#bcbac7;--mauve-9:#8e8c99;--mauve-10:#84828e;--mauve-11:#65636d;--mauve-12:#211f26}@supports (color:color(display-p3 1 1 1)){@media (color-gamut:p3){:root,.light,.light-theme{--mauve-1:color(display-p3 .991 .988 .992);--mauve-2:color(display-p3 .98 .976 .984);--mauve-3:color(display-p3 .946 .938 .952);--mauve-4:color(display-p3 .915 .906 .925);--mauve-5:color(display-p3 .886 .876 .901);--mauve-6:color(display-p3 .856 .846 .875);--mauve-7:color(display-p3 .814 .804 .84);--mauve-8:color(display-p3 .735 .728 .777);--mauve-9:color(display-p3 .555 .549 .596);--mauve-10:color(display-p3 .514 .508 .552);--mauve-11:color(display-p3 .395 .388 .424);--mauve-12:color(display-p3 .128 .122 .147)}}}:root,.light,.light-theme{--red-1:#fffcfc;--red-2:#fff7f7;--red-3:#feebec;--red-4:#ffdbdc;--red-5:#ffcdce;--red-6:#fdbdbe;--red-7:#f4a9aa;--red-8:#eb8e90;--red-9:#e5484d;--red-10:#dc3e42;--red-11:#ce2c31;--red-12:#641723}@supports (color:color(display-p3 1 1 1)){@media (color-gamut:p3){:root,.light,.light-theme{--red-1:color(display-p3 .998 .989 .988);--red-2:color(display-p3 .995 .971 .971);--red-3:color(display-p3 .985 .925 .925);--red-4:color(display-p3 .999 .866 .866);--red-5:color(display-p3 .984 .812 .811);--red-6:color(display-p3 .955 .751 .749);--red-7:color(display-p3 .915 .675 .672);--red-8:color(display-p3 .872 .575 .572);--red-9:color(display-p3 .83 .329 .324);--red-10:color(display-p3 .798 .294 .285);--red-11:color(display-p3 .744 .234 .222);--red-12:color(display-p3 .36 .115 .143)}}}:root,.light,.light-theme{--violet-1:#fdfcfe;--violet-2:#faf8ff;--violet-3:#f4f0fe;--violet-4:#ebe4ff;--violet-5:#e1d9ff;--violet-6:#d4cafe;--violet-7:#c2b5f5;--violet-8:#aa99ec;--violet-9:#6e56cf;--violet-10:#654dc4;--violet-11:#6550b9;--violet-12:#2f265f}@supports (color:color(display-p3 1 1 1)){@media (color-gamut:p3){:root,.light,.light-theme{--violet-1:color(display-p3 .991 .988 .995);--violet-2:color(display-p3 .978 .974 .998);--violet-3:color(display-p3 .953 .943 .993);--violet-4:color(display-p3 .916 .897 1);--violet-5:color(display-p3 .876 .851 1);--violet-6:color(display-p3 .825 .793 .981);--violet-7:color(display-p3 .752 .712 .943);--violet-8:color(display-p3 .654 .602 .902);--violet-9:color(display-p3 .417 .341 .784);--violet-10:color(display-p3 .381 .306 .741);--violet-11:color(display-p3 .383 .317 .702);--violet-12:color(display-p3 .179 .15 .359)}}}.card-footer{border-top:1px solid var(--Schemes-Outline-Variant,#44464f);border-radius:16px 12px;box-shadow:0 -4px 20px #0000001a}.text-area{max-height:50vh}body{font-family:Arial,Helvetica,sans-serif}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-duration{syntax:"*";inherits:false}';
var i0 = "vercel.ai.error", oS = Symbol.for(i0), o0, uS = class u0 extends Error {
  /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */
  constructor({
    name: r,
    message: a,
    cause: i
  }) {
    super(a), this[o0] = !0, this.name = r, this.cause = i;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(r) {
    return u0.hasMarker(r, i0);
  }
  static hasMarker(r, a) {
    const i = Symbol.for(a);
    return r != null && typeof r == "object" && i in r && typeof r[i] == "boolean" && r[i] === !0;
  }
};
o0 = oS;
var na = uS;
function s0(t) {
  return t == null ? "unknown error" : typeof t == "string" ? t : t instanceof Error ? t.message : JSON.stringify(t);
}
var c0 = "AI_InvalidArgumentError", f0 = `vercel.ai.error.${c0}`, sS = Symbol.for(f0), d0, cS = class extends na {
  constructor({
    message: t,
    cause: r,
    argument: a
  }) {
    super({ name: c0, message: t, cause: r }), this[d0] = !0, this.argument = a;
  }
  static isInstance(t) {
    return na.hasMarker(t, f0);
  }
};
d0 = sS;
var h0 = "AI_JSONParseError", p0 = `vercel.ai.error.${h0}`, fS = Symbol.for(p0), m0, Og = class extends na {
  constructor({ text: t, cause: r }) {
    super({
      name: h0,
      message: `JSON parsing failed: Text: ${t}.
Error message: ${s0(r)}`,
      cause: r
    }), this[m0] = !0, this.text = t;
  }
  static isInstance(t) {
    return na.hasMarker(t, p0);
  }
};
m0 = fS;
var g0 = "AI_TypeValidationError", y0 = `vercel.ai.error.${g0}`, dS = Symbol.for(y0), v0, hS = class kf extends na {
  constructor({ value: r, cause: a }) {
    super({
      name: g0,
      message: `Type validation failed: Value: ${JSON.stringify(r)}.
Error message: ${s0(a)}`,
      cause: a
    }), this[v0] = !0, this.value = r;
  }
  static isInstance(r) {
    return na.hasMarker(r, y0);
  }
  /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */
  static wrap({
    value: r,
    cause: a
  }) {
    return kf.isInstance(a) && a.value === r ? a : new kf({ value: r, cause: a });
  }
};
v0 = dS;
var zg = hS;
let pS = (t, r = 21) => (a = r) => {
  let i = "", u = a | 0;
  for (; u--; )
    i += t[Math.random() * t.length | 0];
  return i;
};
var Wr = { exports: {} }, Mg;
function mS() {
  if (Mg) return Wr.exports;
  Mg = 1;
  const t = typeof Buffer < "u", r = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, a = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function i(d, m, h) {
    h == null && m !== null && typeof m == "object" && (h = m, m = void 0), t && Buffer.isBuffer(d) && (d = d.toString()), d && d.charCodeAt(0) === 65279 && (d = d.slice(1));
    const g = JSON.parse(d, m);
    if (g === null || typeof g != "object")
      return g;
    const y = h && h.protoAction || "error", b = h && h.constructorAction || "error";
    if (y === "ignore" && b === "ignore")
      return g;
    if (y !== "ignore" && b !== "ignore") {
      if (r.test(d) === !1 && a.test(d) === !1)
        return g;
    } else if (y !== "ignore" && b === "ignore") {
      if (r.test(d) === !1)
        return g;
    } else if (a.test(d) === !1)
      return g;
    return u(g, { protoAction: y, constructorAction: b, safe: h && h.safe });
  }
  function u(d, { protoAction: m = "error", constructorAction: h = "error", safe: g } = {}) {
    let y = [d];
    for (; y.length; ) {
      const b = y;
      y = [];
      for (const x of b) {
        if (m !== "ignore" && Object.prototype.hasOwnProperty.call(x, "__proto__")) {
          if (g === !0)
            return null;
          if (m === "error")
            throw new SyntaxError("Object contains forbidden prototype property");
          delete x.__proto__;
        }
        if (h !== "ignore" && Object.prototype.hasOwnProperty.call(x, "constructor") && Object.prototype.hasOwnProperty.call(x.constructor, "prototype")) {
          if (g === !0)
            return null;
          if (h === "error")
            throw new SyntaxError("Object contains forbidden prototype property");
          delete x.constructor;
        }
        for (const k in x) {
          const C = x[k];
          C && typeof C == "object" && y.push(C);
        }
      }
    }
    return d;
  }
  function s(d, m, h) {
    const g = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return i(d, m, h);
    } finally {
      Error.stackTraceLimit = g;
    }
  }
  function c(d, m) {
    const h = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return i(d, m, { safe: !0 });
    } catch {
      return null;
    } finally {
      Error.stackTraceLimit = h;
    }
  }
  return Wr.exports = s, Wr.exports.default = s, Wr.exports.parse = s, Wr.exports.safeParse = c, Wr.exports.scan = u, Wr.exports;
}
var gS = mS();
const yS = /* @__PURE__ */ ll(gS);
var vS = ({
  prefix: t,
  size: r = 16,
  alphabet: a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: i = "-"
} = {}) => {
  const u = pS(a, r);
  if (t == null)
    return u;
  if (a.includes(i))
    throw new cS({
      argument: "separator",
      message: `The separator "${i}" must not be part of the alphabet "${a}".`
    });
  return (s) => `${t}${i}${u(s)}`;
}, Wf = vS(), Cf = Symbol.for("vercel.ai.validator");
function bS(t) {
  return { [Cf]: !0, validate: t };
}
function xS(t) {
  return typeof t == "object" && t !== null && Cf in t && t[Cf] === !0 && "validate" in t;
}
function wS(t) {
  return xS(t) ? t : SS(t);
}
function SS(t) {
  return bS((r) => {
    const a = t.safeParse(r);
    return a.success ? { success: !0, value: a.data } : { success: !1, error: a.error };
  });
}
function ES({
  value: t,
  schema: r
}) {
  const a = wS(r);
  try {
    if (a.validate == null)
      return { success: !0, value: t };
    const i = a.validate(t);
    return i.success ? i : {
      success: !1,
      error: zg.wrap({ value: t, cause: i.error })
    };
  } catch (i) {
    return {
      success: !1,
      error: zg.wrap({ value: t, cause: i })
    };
  }
}
function Lg({
  text: t,
  schema: r
}) {
  try {
    const a = yS.parse(t);
    if (r == null)
      return { success: !0, value: a, rawValue: a };
    const i = ES({ value: a, schema: r });
    return i.success ? { ...i, rawValue: a } : i;
  } catch (a) {
    return {
      success: !1,
      error: Og.isInstance(a) ? a : new Og({ text: t, cause: a })
    };
  }
}
new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
var pi = {
  code: "0",
  name: "text",
  parse: (t) => {
    if (typeof t != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: t };
  }
}, mi = {
  code: "3",
  name: "error",
  parse: (t) => {
    if (typeof t != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: t };
  }
}, gi = {
  code: "4",
  name: "assistant_message",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("id" in t) || !("role" in t) || !("content" in t) || typeof t.id != "string" || typeof t.role != "string" || t.role !== "assistant" || !Array.isArray(t.content) || !t.content.every(
      (r) => r != null && typeof r == "object" && "type" in r && r.type === "text" && "text" in r && r.text != null && typeof r.text == "object" && "value" in r.text && typeof r.text.value == "string"
    ))
      throw new Error(
        '"assistant_message" parts expect an object with an "id", "role", and "content" property.'
      );
    return {
      type: "assistant_message",
      value: t
    };
  }
}, yi = {
  code: "5",
  name: "assistant_control_data",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("threadId" in t) || !("messageId" in t) || typeof t.threadId != "string" || typeof t.messageId != "string")
      throw new Error(
        '"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.'
      );
    return {
      type: "assistant_control_data",
      value: {
        threadId: t.threadId,
        messageId: t.messageId
      }
    };
  }
}, vi = {
  code: "6",
  name: "data_message",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("role" in t) || !("data" in t) || typeof t.role != "string" || t.role !== "data")
      throw new Error(
        '"data_message" parts expect an object with a "role" and "data" property.'
      );
    return {
      type: "data_message",
      value: t
    };
  }
}, kS = [
  pi,
  mi,
  gi,
  yi,
  vi
];
pi.code + "", mi.code + "", gi.code + "", yi.code + "", vi.code + "";
pi.name + "", pi.code, mi.name + "", mi.code, gi.name + "", gi.code, yi.name + "", yi.code, vi.name + "", vi.code;
kS.map((t) => t.code);
function CS({
  promptTokens: t,
  completionTokens: r
}) {
  return {
    promptTokens: t,
    completionTokens: r,
    totalTokens: t + r
  };
}
function AS(t) {
  const r = ["ROOT"];
  let a = -1, i = null;
  function u(m, h, g) {
    switch (m) {
      case '"': {
        a = h, r.pop(), r.push(g), r.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        a = h, i = h, r.pop(), r.push(g), r.push("INSIDE_LITERAL");
        break;
      }
      case "-": {
        r.pop(), r.push(g), r.push("INSIDE_NUMBER");
        break;
      }
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": {
        a = h, r.pop(), r.push(g), r.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        a = h, r.pop(), r.push(g), r.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        a = h, r.pop(), r.push(g), r.push("INSIDE_ARRAY_START");
        break;
      }
    }
  }
  function s(m, h) {
    switch (m) {
      case ",": {
        r.pop(), r.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        a = h, r.pop();
        break;
      }
    }
  }
  function c(m, h) {
    switch (m) {
      case ",": {
        r.pop(), r.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        a = h, r.pop();
        break;
      }
    }
  }
  for (let m = 0; m < t.length; m++) {
    const h = t[m];
    switch (r[r.length - 1]) {
      case "ROOT":
        u(h, m, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (h) {
          case '"': {
            r.pop(), r.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            a = m, r.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        switch (h) {
          case '"': {
            r.pop(), r.push("INSIDE_OBJECT_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        switch (h) {
          case '"': {
            r.pop(), r.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        switch (h) {
          case ":": {
            r.pop(), r.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        u(h, m, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        s(h, m);
        break;
      }
      case "INSIDE_STRING": {
        switch (h) {
          case '"': {
            r.pop(), a = m;
            break;
          }
          case "\\": {
            r.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            a = m;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (h) {
          case "]": {
            a = m, r.pop();
            break;
          }
          default: {
            a = m, u(h, m, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (h) {
          case ",": {
            r.pop(), r.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          }
          case "]": {
            a = m, r.pop();
            break;
          }
          default: {
            a = m;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        u(h, m, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        r.pop(), a = m;
        break;
      }
      case "INSIDE_NUMBER": {
        switch (h) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9": {
            a = m;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            r.pop(), r[r.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && c(h, m), r[r.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && s(h, m);
            break;
          }
          case "}": {
            r.pop(), r[r.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && s(h, m);
            break;
          }
          case "]": {
            r.pop(), r[r.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && c(h, m);
            break;
          }
          default: {
            r.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_LITERAL": {
        const y = t.substring(i, m + 1);
        !"false".startsWith(y) && !"true".startsWith(y) && !"null".startsWith(y) ? (r.pop(), r[r.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? s(h, m) : r[r.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && c(h, m)) : a = m;
        break;
      }
    }
  }
  let d = t.slice(0, a + 1);
  for (let m = r.length - 1; m >= 0; m--)
    switch (r[m]) {
      case "INSIDE_STRING": {
        d += '"';
        break;
      }
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE": {
        d += "}";
        break;
      }
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE": {
        d += "]";
        break;
      }
      case "INSIDE_LITERAL": {
        const g = t.substring(i, t.length);
        "true".startsWith(g) ? d += "true".slice(g.length) : "false".startsWith(g) ? d += "false".slice(g.length) : "null".startsWith(g) && (d += "null".slice(g.length));
      }
    }
  return d;
}
function TS(t) {
  if (t === void 0)
    return { value: void 0, state: "undefined-input" };
  let r = Lg({ text: t });
  return r.success ? { value: r.value, state: "successful-parse" } : (r = Lg({ text: AS(t) }), r.success ? { value: r.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var _S = {
  code: "0",
  name: "text",
  parse: (t) => {
    if (typeof t != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: t };
  }
}, RS = {
  code: "2",
  name: "data",
  parse: (t) => {
    if (!Array.isArray(t))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: t };
  }
}, DS = {
  code: "3",
  name: "error",
  parse: (t) => {
    if (typeof t != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: t };
  }
}, NS = {
  code: "8",
  name: "message_annotations",
  parse: (t) => {
    if (!Array.isArray(t))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: t };
  }
}, OS = {
  code: "9",
  name: "tool_call",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("toolCallId" in t) || typeof t.toolCallId != "string" || !("toolName" in t) || typeof t.toolName != "string" || !("args" in t) || typeof t.args != "object")
      throw new Error(
        '"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.'
      );
    return {
      type: "tool_call",
      value: t
    };
  }
}, zS = {
  code: "a",
  name: "tool_result",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("toolCallId" in t) || typeof t.toolCallId != "string" || !("result" in t))
      throw new Error(
        '"tool_result" parts expect an object with a "toolCallId" and a "result" property.'
      );
    return {
      type: "tool_result",
      value: t
    };
  }
}, MS = {
  code: "b",
  name: "tool_call_streaming_start",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("toolCallId" in t) || typeof t.toolCallId != "string" || !("toolName" in t) || typeof t.toolName != "string")
      throw new Error(
        '"tool_call_streaming_start" parts expect an object with a "toolCallId" and "toolName" property.'
      );
    return {
      type: "tool_call_streaming_start",
      value: t
    };
  }
}, LS = {
  code: "c",
  name: "tool_call_delta",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("toolCallId" in t) || typeof t.toolCallId != "string" || !("argsTextDelta" in t) || typeof t.argsTextDelta != "string")
      throw new Error(
        '"tool_call_delta" parts expect an object with a "toolCallId" and "argsTextDelta" property.'
      );
    return {
      type: "tool_call_delta",
      value: t
    };
  }
}, jS = {
  code: "d",
  name: "finish_message",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("finishReason" in t) || typeof t.finishReason != "string")
      throw new Error(
        '"finish_message" parts expect an object with a "finishReason" property.'
      );
    const r = {
      finishReason: t.finishReason
    };
    return "usage" in t && t.usage != null && typeof t.usage == "object" && "promptTokens" in t.usage && "completionTokens" in t.usage && (r.usage = {
      promptTokens: typeof t.usage.promptTokens == "number" ? t.usage.promptTokens : Number.NaN,
      completionTokens: typeof t.usage.completionTokens == "number" ? t.usage.completionTokens : Number.NaN
    }), {
      type: "finish_message",
      value: r
    };
  }
}, US = {
  code: "e",
  name: "finish_step",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("finishReason" in t) || typeof t.finishReason != "string")
      throw new Error(
        '"finish_step" parts expect an object with a "finishReason" property.'
      );
    const r = {
      finishReason: t.finishReason,
      isContinued: !1
    };
    return "usage" in t && t.usage != null && typeof t.usage == "object" && "promptTokens" in t.usage && "completionTokens" in t.usage && (r.usage = {
      promptTokens: typeof t.usage.promptTokens == "number" ? t.usage.promptTokens : Number.NaN,
      completionTokens: typeof t.usage.completionTokens == "number" ? t.usage.completionTokens : Number.NaN
    }), "isContinued" in t && typeof t.isContinued == "boolean" && (r.isContinued = t.isContinued), {
      type: "finish_step",
      value: r
    };
  }
}, BS = {
  code: "f",
  name: "start_step",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("messageId" in t) || typeof t.messageId != "string")
      throw new Error(
        '"start_step" parts expect an object with an "id" property.'
      );
    return {
      type: "start_step",
      value: {
        messageId: t.messageId
      }
    };
  }
}, IS = {
  code: "g",
  name: "reasoning",
  parse: (t) => {
    if (typeof t != "string")
      throw new Error('"reasoning" parts expect a string value.');
    return { type: "reasoning", value: t };
  }
}, HS = {
  code: "h",
  name: "source",
  parse: (t) => {
    if (t == null || typeof t != "object")
      throw new Error('"source" parts expect a Source object.');
    return {
      type: "source",
      value: t
    };
  }
}, qS = {
  code: "i",
  name: "redacted_reasoning",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("data" in t) || typeof t.data != "string")
      throw new Error(
        '"redacted_reasoning" parts expect an object with a "data" property.'
      );
    return { type: "redacted_reasoning", value: { data: t.data } };
  }
}, VS = {
  code: "j",
  name: "reasoning_signature",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("signature" in t) || typeof t.signature != "string")
      throw new Error(
        '"reasoning_signature" parts expect an object with a "signature" property.'
      );
    return {
      type: "reasoning_signature",
      value: { signature: t.signature }
    };
  }
}, YS = {
  code: "k",
  name: "file",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("data" in t) || typeof t.data != "string" || !("mimeType" in t) || typeof t.mimeType != "string")
      throw new Error(
        '"file" parts expect an object with a "data" and "mimeType" property.'
      );
    return { type: "file", value: t };
  }
}, ed = [
  _S,
  RS,
  DS,
  NS,
  OS,
  zS,
  MS,
  LS,
  jS,
  US,
  BS,
  IS,
  HS,
  qS,
  VS,
  YS
], PS = Object.fromEntries(
  ed.map((t) => [t.code, t])
);
Object.fromEntries(
  ed.map((t) => [t.name, t.code])
);
var FS = ed.map((t) => t.code), GS = (t) => {
  const r = t.indexOf(":");
  if (r === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const a = t.slice(0, r);
  if (!FS.includes(a))
    throw new Error(`Failed to parse stream string. Invalid code ${a}.`);
  const i = a, u = t.slice(r + 1), s = JSON.parse(u);
  return PS[i].parse(s);
}, XS = 10;
function QS(t, r) {
  const a = new Uint8Array(r);
  let i = 0;
  for (const u of t)
    a.set(u, i), i += u.length;
  return t.length = 0, a;
}
async function ZS({
  stream: t,
  onTextPart: r,
  onReasoningPart: a,
  onReasoningSignaturePart: i,
  onRedactedReasoningPart: u,
  onSourcePart: s,
  onFilePart: c,
  onDataPart: d,
  onErrorPart: m,
  onToolCallStreamingStartPart: h,
  onToolCallDeltaPart: g,
  onToolCallPart: y,
  onToolResultPart: b,
  onMessageAnnotationsPart: x,
  onFinishMessagePart: k,
  onFinishStepPart: C,
  onStartStepPart: z
}) {
  const T = t.getReader(), Y = new TextDecoder(), j = [];
  let Q = 0;
  for (; ; ) {
    const { value: I } = await T.read();
    if (I && (j.push(I), Q += I.length, I[I.length - 1] !== XS))
      continue;
    if (j.length === 0)
      break;
    const R = QS(j, Q);
    Q = 0;
    const F = Y.decode(R, { stream: !0 }).split(`
`).filter((q) => q !== "").map(GS);
    for (const { type: q, value: Z } of F)
      switch (q) {
        case "text":
          await (r == null ? void 0 : r(Z));
          break;
        case "reasoning":
          await (a == null ? void 0 : a(Z));
          break;
        case "reasoning_signature":
          await (i == null ? void 0 : i(Z));
          break;
        case "redacted_reasoning":
          await (u == null ? void 0 : u(Z));
          break;
        case "file":
          await (c == null ? void 0 : c(Z));
          break;
        case "source":
          await (s == null ? void 0 : s(Z));
          break;
        case "data":
          await (d == null ? void 0 : d(Z));
          break;
        case "error":
          await (m == null ? void 0 : m(Z));
          break;
        case "message_annotations":
          await (x == null ? void 0 : x(Z));
          break;
        case "tool_call_streaming_start":
          await (h == null ? void 0 : h(Z));
          break;
        case "tool_call_delta":
          await (g == null ? void 0 : g(Z));
          break;
        case "tool_call":
          await (y == null ? void 0 : y(Z));
          break;
        case "tool_result":
          await (b == null ? void 0 : b(Z));
          break;
        case "finish_message":
          await (k == null ? void 0 : k(Z));
          break;
        case "finish_step":
          await (C == null ? void 0 : C(Z));
          break;
        case "start_step":
          await (z == null ? void 0 : z(Z));
          break;
        default: {
          const O = q;
          throw new Error(`Unknown stream part type: ${O}`);
        }
      }
  }
}
async function KS({
  stream: t,
  update: r,
  onToolCall: a,
  onFinish: i,
  generateId: u = Wf,
  getCurrentDate: s = () => /* @__PURE__ */ new Date(),
  lastMessage: c
}) {
  var d, m;
  const h = (c == null ? void 0 : c.role) === "assistant";
  let g = h ? 1 + // find max step in existing tool invocations:
  ((m = (d = c.toolInvocations) == null ? void 0 : d.reduce((R, F) => {
    var q;
    return Math.max(R, (q = F.step) != null ? q : 0);
  }, 0)) != null ? m : 0) : 0;
  const y = h ? structuredClone(c) : {
    id: u(),
    createdAt: s(),
    role: "assistant",
    content: "",
    parts: []
  };
  let b, x, k;
  function C(R, F) {
    const q = y.parts.find(
      (Z) => Z.type === "tool-invocation" && Z.toolInvocation.toolCallId === R
    );
    q != null ? q.toolInvocation = F : y.parts.push({
      type: "tool-invocation",
      toolInvocation: F
    });
  }
  const z = [];
  let T = h ? c == null ? void 0 : c.annotations : void 0;
  const Y = {};
  let j = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, Q = "unknown";
  function I() {
    const R = [...z];
    T != null && T.length && (y.annotations = T);
    const F = {
      // deep copy the message to ensure that deep changes (msg attachments) are updated
      // with SolidJS. SolidJS uses referential integration of sub-objects to detect changes.
      ...structuredClone(y),
      // add a revision id to ensure that the message is updated with SWR. SWR uses a
      // hashing approach by default to detect changes, but it only works for shallow
      // changes. This is why we need to add a revision id to ensure that the message
      // is updated with SWR (without it, the changes get stuck in SWR and are not
      // forwarded to rendering):
      revisionId: u()
    };
    r({
      message: F,
      data: R,
      replaceLastMessage: h
    });
  }
  await ZS({
    stream: t,
    onTextPart(R) {
      b == null ? (b = {
        type: "text",
        text: R
      }, y.parts.push(b)) : b.text += R, y.content += R, I();
    },
    onReasoningPart(R) {
      var F;
      k == null ? (k = { type: "text", text: R }, x != null && x.details.push(k)) : k.text += R, x == null ? (x = {
        type: "reasoning",
        reasoning: R,
        details: [k]
      }, y.parts.push(x)) : x.reasoning += R, y.reasoning = ((F = y.reasoning) != null ? F : "") + R, I();
    },
    onReasoningSignaturePart(R) {
      k != null && (k.signature = R.signature);
    },
    onRedactedReasoningPart(R) {
      x == null && (x = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, y.parts.push(x)), x.details.push({
        type: "redacted",
        data: R.data
      }), k = void 0, I();
    },
    onFilePart(R) {
      y.parts.push({
        type: "file",
        mimeType: R.mimeType,
        data: R.data
      }), I();
    },
    onSourcePart(R) {
      y.parts.push({
        type: "source",
        source: R
      }), I();
    },
    onToolCallStreamingStartPart(R) {
      y.toolInvocations == null && (y.toolInvocations = []), Y[R.toolCallId] = {
        text: "",
        step: g,
        toolName: R.toolName,
        index: y.toolInvocations.length
      };
      const F = {
        state: "partial-call",
        step: g,
        toolCallId: R.toolCallId,
        toolName: R.toolName,
        args: void 0
      };
      y.toolInvocations.push(F), C(R.toolCallId, F), I();
    },
    onToolCallDeltaPart(R) {
      const F = Y[R.toolCallId];
      F.text += R.argsTextDelta;
      const { value: q } = TS(F.text), Z = {
        state: "partial-call",
        step: F.step,
        toolCallId: R.toolCallId,
        toolName: F.toolName,
        args: q
      };
      y.toolInvocations[F.index] = Z, C(R.toolCallId, Z), I();
    },
    async onToolCallPart(R) {
      const F = {
        state: "call",
        step: g,
        ...R
      };
      if (Y[R.toolCallId] != null ? y.toolInvocations[Y[R.toolCallId].index] = F : (y.toolInvocations == null && (y.toolInvocations = []), y.toolInvocations.push(F)), C(R.toolCallId, F), I(), a) {
        const q = await a({ toolCall: R });
        if (q != null) {
          const Z = {
            state: "result",
            step: g,
            ...R,
            result: q
          };
          y.toolInvocations[y.toolInvocations.length - 1] = Z, C(R.toolCallId, Z), I();
        }
      }
    },
    onToolResultPart(R) {
      const F = y.toolInvocations;
      if (F == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const q = F.findIndex(
        (O) => O.toolCallId === R.toolCallId
      );
      if (q === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const Z = {
        ...F[q],
        state: "result",
        ...R
      };
      F[q] = Z, C(R.toolCallId, Z), I();
    },
    onDataPart(R) {
      z.push(...R), I();
    },
    onMessageAnnotationsPart(R) {
      T == null ? T = [...R] : T.push(...R), I();
    },
    onFinishStepPart(R) {
      g += 1, b = R.isContinued ? b : void 0, x = void 0, k = void 0;
    },
    onStartStepPart(R) {
      h || (y.id = R.messageId), y.parts.push({ type: "step-start" }), I();
    },
    onFinishMessagePart(R) {
      Q = R.finishReason, R.usage != null && (j = CS(R.usage));
    },
    onErrorPart(R) {
      throw new Error(R);
    }
  }), i == null || i({ message: y, finishReason: Q, usage: j });
}
async function JS({
  stream: t,
  onTextPart: r
}) {
  const a = t.pipeThrough(new TextDecoderStream()).getReader();
  for (; ; ) {
    const { done: i, value: u } = await a.read();
    if (i)
      break;
    await r(u);
  }
}
async function $S({
  stream: t,
  update: r,
  onFinish: a,
  getCurrentDate: i = () => /* @__PURE__ */ new Date(),
  generateId: u = Wf
}) {
  const s = { type: "text", text: "" }, c = {
    id: u(),
    createdAt: i(),
    role: "assistant",
    content: "",
    parts: [s]
  };
  await JS({
    stream: t,
    onTextPart: (d) => {
      c.content += d, s.text += d, r({
        message: { ...c },
        data: [],
        replaceLastMessage: !1
      });
    }
  }), a == null || a(c, {
    usage: { completionTokens: NaN, promptTokens: NaN, totalTokens: NaN },
    finishReason: "unknown"
  });
}
var WS = () => fetch;
async function e2({
  api: t,
  body: r,
  streamProtocol: a = "data",
  credentials: i,
  headers: u,
  abortController: s,
  restoreMessagesOnFailure: c,
  onResponse: d,
  onUpdate: m,
  onFinish: h,
  onToolCall: g,
  generateId: y,
  fetch: b = WS(),
  lastMessage: x,
  requestType: k = "generate"
}) {
  var C, z, T;
  const j = await (k === "resume" ? b(`${t}?chatId=${r.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...u
    },
    signal: (C = s == null ? void 0 : s()) == null ? void 0 : C.signal,
    credentials: i
  }) : b(t, {
    method: "POST",
    body: JSON.stringify(r),
    headers: {
      "Content-Type": "application/json",
      ...u
    },
    signal: (z = s == null ? void 0 : s()) == null ? void 0 : z.signal,
    credentials: i
  })).catch((Q) => {
    throw c(), Q;
  });
  if (d)
    try {
      await d(j);
    } catch (Q) {
      throw Q;
    }
  if (!j.ok)
    throw c(), new Error(
      (T = await j.text()) != null ? T : "Failed to fetch the chat response."
    );
  if (!j.body)
    throw new Error("The response body is empty.");
  switch (a) {
    case "text": {
      await $S({
        stream: j.body,
        update: m,
        onFinish: h,
        generateId: y
      });
      return;
    }
    case "data": {
      await KS({
        stream: j.body,
        update: m,
        lastMessage: x,
        onToolCall: g,
        onFinish({ message: Q, finishReason: I, usage: R }) {
          h && Q != null && h(Q, { usage: R, finishReason: I });
        },
        generateId: y
      });
      return;
    }
    default: {
      const Q = a;
      throw new Error(`Unknown stream protocol: ${Q}`);
    }
  }
}
function Af(t) {
  return t == null ? void 0 : t.reduce((r, a) => {
    var i;
    return Math.max(r, (i = a.step) != null ? i : 0);
  }, 0);
}
function b0(t) {
  var r;
  return (r = t.parts) != null ? r : [
    ...t.toolInvocations ? t.toolInvocations.map((a) => ({
      type: "tool-invocation",
      toolInvocation: a
    })) : [],
    ...t.reasoning ? [
      {
        type: "reasoning",
        reasoning: t.reasoning,
        details: [{ type: "text", text: t.reasoning }]
      }
    ] : [],
    ...t.content ? [{ type: "text", text: t.content }] : []
  ];
}
function Hc(t) {
  return t.map((r) => ({
    ...r,
    parts: b0(r)
  }));
}
function Tf(t, r) {
  if (t === r)
    return !0;
  if (t == null || r == null)
    return !1;
  if (typeof t != "object" && typeof r != "object")
    return t === r;
  if (t.constructor !== r.constructor)
    return !1;
  if (t instanceof Date && r instanceof Date)
    return t.getTime() === r.getTime();
  if (Array.isArray(t)) {
    if (t.length !== r.length)
      return !1;
    for (let u = 0; u < t.length; u++)
      if (!Tf(t[u], r[u]))
        return !1;
    return !0;
  }
  const a = Object.keys(t), i = Object.keys(r);
  if (a.length !== i.length)
    return !1;
  for (const u of a)
    if (!i.includes(u) || !Tf(t[u], r[u]))
      return !1;
  return !0;
}
async function jg(t) {
  if (!t)
    return [];
  if (globalThis.FileList && t instanceof globalThis.FileList)
    return Promise.all(
      Array.from(t).map(async (r) => {
        const { name: a, type: i } = r, u = await new Promise((s, c) => {
          const d = new FileReader();
          d.onload = (m) => {
            var h;
            s((h = m.target) == null ? void 0 : h.result);
          }, d.onerror = (m) => c(m), d.readAsDataURL(r);
        });
        return {
          name: a,
          contentType: i,
          url: u
        };
      })
    );
  if (Array.isArray(t))
    return t;
  throw new Error("Invalid attachments type");
}
function t2({
  originalMaxToolInvocationStep: t,
  originalMessageCount: r,
  maxSteps: a,
  messages: i
}) {
  var u;
  const s = i[i.length - 1];
  return (
    // check if the feature is enabled:
    a > 1 && // ensure there is a last message:
    s != null && // ensure we actually have new steps (to prevent infinite loops in case of errors):
    (i.length > r || Af(s.toolInvocations) !== t) && // check that next step is possible:
    x0(s) && // limit the number of automatic steps:
    ((u = Af(s.toolInvocations)) != null ? u : 0) < a
  );
}
function x0(t) {
  if (t.role !== "assistant")
    return !1;
  const r = t.parts.reduce((i, u, s) => u.type === "step-start" ? s : i, -1), a = t.parts.slice(r + 1).filter((i) => i.type === "tool-invocation");
  return a.length > 0 && a.every((i) => "result" in i.toolInvocation);
}
function n2({
  messages: t,
  toolCallId: r,
  toolResult: a
}) {
  var i;
  const u = t[t.length - 1], s = u.parts.find(
    (d) => d.type === "tool-invocation" && d.toolInvocation.toolCallId === r
  );
  if (s == null)
    return;
  const c = {
    ...s.toolInvocation,
    state: "result",
    result: a
  };
  s.toolInvocation = c, u.toolInvocations = (i = u.toolInvocations) == null ? void 0 : i.map(
    (d) => d.toolCallId === r ? c : d
  );
}
var A = uu();
const su = /* @__PURE__ */ ll(A), w0 = /* @__PURE__ */ Zw({
  __proto__: null,
  default: su
}, [A]);
var qc = { exports: {} }, Vc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ug;
function r2() {
  if (Ug) return Vc;
  Ug = 1;
  var t = uu();
  function r(y, b) {
    return y === b && (y !== 0 || 1 / y === 1 / b) || y !== y && b !== b;
  }
  var a = typeof Object.is == "function" ? Object.is : r, i = t.useState, u = t.useEffect, s = t.useLayoutEffect, c = t.useDebugValue;
  function d(y, b) {
    var x = b(), k = i({ inst: { value: x, getSnapshot: b } }), C = k[0].inst, z = k[1];
    return s(
      function() {
        C.value = x, C.getSnapshot = b, m(C) && z({ inst: C });
      },
      [y, x, b]
    ), u(
      function() {
        return m(C) && z({ inst: C }), y(function() {
          m(C) && z({ inst: C });
        });
      },
      [y]
    ), c(x), x;
  }
  function m(y) {
    var b = y.getSnapshot;
    y = y.value;
    try {
      var x = b();
      return !a(y, x);
    } catch {
      return !0;
    }
  }
  function h(y, b) {
    return b();
  }
  var g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : d;
  return Vc.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : g, Vc;
}
var Bg;
function l2() {
  return Bg || (Bg = 1, qc.exports = r2()), qc.exports;
}
var S0 = l2();
const E0 = 0, k0 = 1, C0 = 2, Ig = 3;
var Hg = Object.prototype.hasOwnProperty;
function _f(t, r) {
  var a, i;
  if (t === r) return !0;
  if (t && r && (a = t.constructor) === r.constructor) {
    if (a === Date) return t.getTime() === r.getTime();
    if (a === RegExp) return t.toString() === r.toString();
    if (a === Array) {
      if ((i = t.length) === r.length)
        for (; i-- && _f(t[i], r[i]); ) ;
      return i === -1;
    }
    if (!a || typeof t == "object") {
      i = 0;
      for (a in t)
        if (Hg.call(t, a) && ++i && !Hg.call(r, a) || !(a in r) || !_f(t[a], r[a])) return !1;
      return Object.keys(r).length === i;
    }
  }
  return t !== t && r !== r;
}
const Wn = /* @__PURE__ */ new WeakMap(), Nr = () => {
}, Ut = (
  /*#__NOINLINE__*/
  Nr()
), Rf = Object, Ie = (t) => t === Ut, On = (t) => typeof t == "function", Or = (t, r) => ({
  ...t,
  ...r
}), A0 = (t) => On(t.then), Yc = {}, Uo = {}, td = "undefined", Si = typeof window != td, Df = typeof document != td, a2 = Si && "Deno" in window, i2 = () => Si && typeof window.requestAnimationFrame != td, T0 = (t, r) => {
  const a = Wn.get(t);
  return [
    // Getter
    () => !Ie(r) && t.get(r) || Yc,
    // Setter
    (i) => {
      if (!Ie(r)) {
        const u = t.get(r);
        r in Uo || (Uo[r] = u), a[5](r, Or(u, i), u || Yc);
      }
    },
    // Subscriber
    a[6],
    // Get server cache snapshot
    () => !Ie(r) && r in Uo ? Uo[r] : !Ie(r) && t.get(r) || Yc
  ];
};
let Nf = !0;
const o2 = () => Nf, [Of, zf] = Si && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  Nr,
  Nr
], u2 = () => {
  const t = Df && document.visibilityState;
  return Ie(t) || t !== "hidden";
}, s2 = (t) => (Df && document.addEventListener("visibilitychange", t), Of("focus", t), () => {
  Df && document.removeEventListener("visibilitychange", t), zf("focus", t);
}), c2 = (t) => {
  const r = () => {
    Nf = !0, t();
  }, a = () => {
    Nf = !1;
  };
  return Of("online", r), Of("offline", a), () => {
    zf("online", r), zf("offline", a);
  };
}, f2 = {
  isOnline: o2,
  isVisible: u2
}, d2 = {
  initFocus: s2,
  initReconnect: c2
}, qg = !su.useId, bi = !Si || a2, h2 = (t) => i2() ? window.requestAnimationFrame(t) : setTimeout(t, 1), Pc = bi ? A.useEffect : A.useLayoutEffect, Fc = typeof navigator < "u" && navigator.connection, Vg = !bi && Fc && ([
  "slow-2g",
  "2g"
].includes(Fc.effectiveType) || Fc.saveData), Bo = /* @__PURE__ */ new WeakMap(), Gc = (t, r) => Rf.prototype.toString.call(t) === `[object ${r}]`;
let p2 = 0;
const Mf = (t) => {
  const r = typeof t, a = Gc(t, "Date"), i = Gc(t, "RegExp"), u = Gc(t, "Object");
  let s, c;
  if (Rf(t) === t && !a && !i) {
    if (s = Bo.get(t), s) return s;
    if (s = ++p2 + "~", Bo.set(t, s), Array.isArray(t)) {
      for (s = "@", c = 0; c < t.length; c++)
        s += Mf(t[c]) + ",";
      Bo.set(t, s);
    }
    if (u) {
      s = "#";
      const d = Rf.keys(t).sort();
      for (; !Ie(c = d.pop()); )
        Ie(t[c]) || (s += c + ":" + Mf(t[c]) + ",");
      Bo.set(t, s);
    }
  } else
    s = a ? t.toJSON() : r == "symbol" ? t.toString() : r == "string" ? JSON.stringify(t) : "" + t;
  return s;
}, nd = (t) => {
  if (On(t))
    try {
      t = t();
    } catch {
      t = "";
    }
  const r = t;
  return t = typeof t == "string" ? t : (Array.isArray(t) ? t.length : t) ? Mf(t) : "", [
    t,
    r
  ];
};
let m2 = 0;
const Lf = () => ++m2;
async function _0(...t) {
  const [r, a, i, u] = t, s = Or({
    populateCache: !0,
    throwOnError: !0
  }, typeof u == "boolean" ? {
    revalidate: u
  } : u || {});
  let c = s.populateCache;
  const d = s.rollbackOnError;
  let m = s.optimisticData;
  const h = (b) => typeof d == "function" ? d(b) : d !== !1, g = s.throwOnError;
  if (On(a)) {
    const b = a, x = [], k = r.keys();
    for (const C of k)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(C) && b(r.get(C)._k) && x.push(C);
    return Promise.all(x.map(y));
  }
  return y(a);
  async function y(b) {
    const [x] = nd(b);
    if (!x) return;
    const [k, C] = T0(r, x), [z, T, Y, j] = Wn.get(r), Q = () => {
      const re = z[x];
      return (On(s.revalidate) ? s.revalidate(k().data, b) : s.revalidate !== !1) && (delete Y[x], delete j[x], re && re[0]) ? re[0](C0).then(() => k().data) : k().data;
    };
    if (t.length < 3)
      return Q();
    let I = i, R;
    const F = Lf();
    T[x] = [
      F,
      0
    ];
    const q = !Ie(m), Z = k(), O = Z.data, ne = Z._c, te = Ie(ne) ? O : ne;
    if (q && (m = On(m) ? m(te, O) : m, C({
      data: m,
      _c: te
    })), On(I))
      try {
        I = I(te);
      } catch (re) {
        R = re;
      }
    if (I && A0(I))
      if (I = await I.catch((re) => {
        R = re;
      }), F !== T[x][0]) {
        if (R) throw R;
        return I;
      } else R && q && h(R) && (c = !0, C({
        data: te,
        _c: Ut
      }));
    if (c && !R)
      if (On(c)) {
        const re = c(I, te);
        C({
          data: re,
          error: Ut,
          _c: Ut
        });
      } else
        C({
          data: I,
          error: Ut,
          _c: Ut
        });
    if (T[x][1] = Lf(), Promise.resolve(Q()).then(() => {
      C({
        _c: Ut
      });
    }), R) {
      if (g) throw R;
      return;
    }
    return I;
  }
}
const Yg = (t, r) => {
  for (const a in t)
    t[a][0] && t[a][0](r);
}, g2 = (t, r) => {
  if (!Wn.has(t)) {
    const a = Or(d2, r), i = /* @__PURE__ */ Object.create(null), u = _0.bind(Ut, t);
    let s = Nr;
    const c = /* @__PURE__ */ Object.create(null), d = (g, y) => {
      const b = c[g] || [];
      return c[g] = b, b.push(y), () => b.splice(b.indexOf(y), 1);
    }, m = (g, y, b) => {
      t.set(g, y);
      const x = c[g];
      if (x)
        for (const k of x)
          k(y, b);
    }, h = () => {
      if (!Wn.has(t) && (Wn.set(t, [
        i,
        /* @__PURE__ */ Object.create(null),
        /* @__PURE__ */ Object.create(null),
        /* @__PURE__ */ Object.create(null),
        u,
        m,
        d
      ]), !bi)) {
        const g = a.initFocus(setTimeout.bind(Ut, Yg.bind(Ut, i, E0))), y = a.initReconnect(setTimeout.bind(Ut, Yg.bind(Ut, i, k0)));
        s = () => {
          g && g(), y && y(), Wn.delete(t);
        };
      }
    };
    return h(), [
      t,
      u,
      h,
      s
    ];
  }
  return [
    t,
    Wn.get(t)[4]
  ];
}, y2 = (t, r, a, i, u) => {
  const s = a.errorRetryCount, c = u.retryCount, d = ~~((Math.random() + 0.5) * (1 << (c < 8 ? c : 8))) * a.errorRetryInterval;
  !Ie(s) && c > s || setTimeout(i, d, u);
}, v2 = _f, [R0, b2] = g2(/* @__PURE__ */ new Map()), x2 = Or(
  {
    // events
    onLoadingSlow: Nr,
    onSuccess: Nr,
    onError: Nr,
    onErrorRetry: y2,
    onDiscarded: Nr,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: Vg ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: Vg ? 5e3 : 3e3,
    // providers
    compare: v2,
    isPaused: () => !1,
    cache: R0,
    mutate: b2,
    fallback: {}
  },
  // use web preset by default
  f2
), w2 = (t, r) => {
  const a = Or(t, r);
  if (r) {
    const { use: i, fallback: u } = t, { use: s, fallback: c } = r;
    i && s && (a.use = i.concat(s)), u && c && (a.fallback = Or(u, c));
  }
  return a;
}, S2 = A.createContext({}), E2 = "$inf$", D0 = Si && window.__SWR_DEVTOOLS_USE__, k2 = D0 ? window.__SWR_DEVTOOLS_USE__ : [], C2 = () => {
  D0 && (window.__SWR_DEVTOOLS_REACT__ = su);
}, A2 = (t) => On(t[1]) ? [
  t[0],
  t[1],
  t[2] || {}
] : [
  t[0],
  null,
  (t[1] === null ? t[2] : t[1]) || {}
], T2 = () => Or(x2, A.useContext(S2)), _2 = (t) => (r, a, i) => t(r, a && ((...s) => {
  const [c] = nd(r), [, , , d] = Wn.get(R0);
  if (c.startsWith(E2))
    return a(...s);
  const m = d[c];
  return Ie(m) ? a(...s) : (delete d[c], m);
}), i), R2 = k2.concat(_2), D2 = (t) => function(...a) {
  const i = T2(), [u, s, c] = A2(a), d = w2(i, c);
  let m = t;
  const { use: h } = d, g = (h || []).concat(R2);
  for (let y = g.length; y--; )
    m = g[y](m);
  return m(u, s || d.fetcher || null, d);
}, N2 = (t, r, a) => {
  const i = r[t] || (r[t] = []);
  return i.push(a), () => {
    const u = i.indexOf(a);
    u >= 0 && (i[u] = i[i.length - 1], i.pop());
  };
};
C2();
const Xc = su.use || // This extra generic is to avoid TypeScript mixing up the generic and JSX sytax
// and emitting an error.
// We assume that this is only for the `use(thenable)` case, not `use(context)`.
// https://github.com/facebook/react/blob/aed00dacfb79d17c53218404c52b1c7aa59c4a89/packages/react-server/src/ReactFizzThenable.js#L45
((t) => {
  switch (t.status) {
    case "pending":
      throw t;
    case "fulfilled":
      return t.value;
    case "rejected":
      throw t.reason;
    default:
      throw t.status = "pending", t.then((r) => {
        t.status = "fulfilled", t.value = r;
      }, (r) => {
        t.status = "rejected", t.reason = r;
      }), t;
  }
}), Qc = {
  dedupe: !0
}, O2 = (t, r, a) => {
  const { cache: i, compare: u, suspense: s, fallbackData: c, revalidateOnMount: d, revalidateIfStale: m, refreshInterval: h, refreshWhenHidden: g, refreshWhenOffline: y, keepPreviousData: b } = a, [x, k, C, z] = Wn.get(i), [T, Y] = nd(t), j = A.useRef(!1), Q = A.useRef(!1), I = A.useRef(T), R = A.useRef(r), F = A.useRef(a), q = () => F.current, Z = () => q().isVisible() && q().isOnline(), [O, ne, te, re] = T0(i, T), le = A.useRef({}).current, oe = Ie(c) ? Ie(a.fallback) ? Ut : a.fallback[T] : c, B = (Se, be) => {
    for (const ze in le) {
      const Ae = ze;
      if (Ae === "data") {
        if (!u(Se[Ae], be[Ae]) && (!Ie(Se[Ae]) || !u(ge, be[Ae])))
          return !1;
      } else if (be[Ae] !== Se[Ae])
        return !1;
    }
    return !0;
  }, $ = A.useMemo(() => {
    const Se = !T || !r ? !1 : Ie(d) ? q().isPaused() || s ? !1 : m !== !1 : d, be = (Pe) => {
      const ct = Or(Pe);
      return delete ct._k, Se ? {
        isValidating: !0,
        isLoading: !0,
        ...ct
      } : ct;
    }, ze = O(), Ae = re(), Ve = be(ze), kt = ze === Ae ? Ve : be(Ae);
    let Fe = Ve;
    return [
      () => {
        const Pe = be(O());
        return B(Pe, Fe) ? (Fe.data = Pe.data, Fe.isLoading = Pe.isLoading, Fe.isValidating = Pe.isValidating, Fe.error = Pe.error, Fe) : (Fe = Pe, Pe);
      },
      () => kt
    ];
  }, [
    i,
    T
  ]), G = S0.useSyncExternalStore(A.useCallback(
    (Se) => te(T, (be, ze) => {
      B(ze, be) || Se();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      i,
      T
    ]
  ), $[0], $[1]), ve = !j.current, w = x[T] && x[T].length > 0, X = G.data, ae = Ie(X) ? oe && A0(oe) ? Xc(oe) : oe : X, E = G.error, ue = A.useRef(ae), ge = b ? Ie(X) ? Ie(ue.current) ? ae : ue.current : X : ae, se = w && !Ie(E) ? !1 : ve && !Ie(d) ? d : q().isPaused() ? !1 : s ? Ie(ae) ? !1 : m : Ie(ae) || m, ke = !!(T && r && ve && se), Te = Ie(G.isValidating) ? ke : G.isValidating, tt = Ie(G.isLoading) ? ke : G.isLoading, rt = A.useCallback(
    async (Se) => {
      const be = R.current;
      if (!T || !be || Q.current || q().isPaused())
        return !1;
      let ze, Ae, Ve = !0;
      const kt = Se || {}, Fe = !C[T] || !kt.dedupe, Pe = () => qg ? !Q.current && T === I.current && j.current : T === I.current, ct = {
        isValidating: !1,
        isLoading: !1
      }, rr = () => {
        ne(ct);
      }, jn = () => {
        const pt = C[T];
        pt && pt[1] === Ae && delete C[T];
      }, lr = {
        isValidating: !0
      };
      Ie(O().data) && (lr.isLoading = !0);
      try {
        if (Fe && (ne(lr), a.loadingTimeout && Ie(O().data) && setTimeout(() => {
          Ve && Pe() && q().onLoadingSlow(T, a);
        }, a.loadingTimeout), C[T] = [
          be(Y),
          Lf()
        ]), [ze, Ae] = C[T], ze = await ze, Fe && setTimeout(jn, a.dedupingInterval), !C[T] || C[T][1] !== Ae)
          return Fe && Pe() && q().onDiscarded(T), !1;
        ct.error = Ut;
        const pt = k[T];
        if (!Ie(pt) && // case 1
        (Ae <= pt[0] || // case 2
        Ae <= pt[1] || // case 3
        pt[1] === 0))
          return rr(), Fe && Pe() && q().onDiscarded(T), !1;
        const P = O().data;
        ct.data = u(P, ze) ? P : ze, Fe && Pe() && q().onSuccess(ze, T, a);
      } catch (pt) {
        jn();
        const P = q(), { shouldRetryOnError: ee } = P;
        P.isPaused() || (ct.error = pt, Fe && Pe() && (P.onError(pt, T, P), (ee === !0 || On(ee) && ee(pt)) && (!q().revalidateOnFocus || !q().revalidateOnReconnect || Z()) && P.onErrorRetry(pt, T, P, (he) => {
          const me = x[T];
          me && me[0] && me[0](Ig, he);
        }, {
          retryCount: (kt.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return Ve = !1, rr(), !0;
    },
    // `setState` is immutable, and `eventsCallback`, `fnArg`, and
    // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      T,
      i
    ]
  ), vt = A.useCallback(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...Se) => _0(i, I.current, ...Se),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (Pc(() => {
    R.current = r, F.current = a, Ie(X) || (ue.current = X);
  }), Pc(() => {
    if (!T) return;
    const Se = rt.bind(Ut, Qc);
    let be = 0;
    q().revalidateOnFocus && (be = Date.now() + q().focusThrottleInterval);
    const Ae = N2(T, x, (Ve, kt = {}) => {
      if (Ve == E0) {
        const Fe = Date.now();
        q().revalidateOnFocus && Fe > be && Z() && (be = Fe + q().focusThrottleInterval, Se());
      } else if (Ve == k0)
        q().revalidateOnReconnect && Z() && Se();
      else {
        if (Ve == C0)
          return rt();
        if (Ve == Ig)
          return rt(kt);
      }
    });
    return Q.current = !1, I.current = T, j.current = !0, ne({
      _k: Y
    }), se && (Ie(ae) || bi ? Se() : h2(Se)), () => {
      Q.current = !0, Ae();
    };
  }, [
    T
  ]), Pc(() => {
    let Se;
    function be() {
      const Ae = On(h) ? h(O().data) : h;
      Ae && Se !== -1 && (Se = setTimeout(ze, Ae));
    }
    function ze() {
      !O().error && (g || q().isVisible()) && (y || q().isOnline()) ? rt(Qc).then(be) : be();
    }
    return be(), () => {
      Se && (clearTimeout(Se), Se = -1);
    };
  }, [
    h,
    g,
    y,
    T
  ]), A.useDebugValue(ge), s && Ie(ae) && T) {
    if (!qg && bi)
      throw new Error("Fallback data is required when using Suspense in SSR.");
    R.current = r, F.current = a, Q.current = !1;
    const Se = z[T];
    if (!Ie(Se)) {
      const be = vt(Se);
      Xc(be);
    }
    if (Ie(E)) {
      const be = rt(Qc);
      Ie(ge) || (be.status = "fulfilled", be.value = !0), Xc(be);
    } else
      throw E;
  }
  return {
    mutate: vt,
    get data() {
      return le.data = !0, ge;
    },
    get error() {
      return le.error = !0, E;
    },
    get isValidating() {
      return le.isValidating = !0, Te;
    },
    get isLoading() {
      return le.isLoading = !0, tt;
    }
  };
}, Io = D2(O2);
var Zc, Pg;
function z2() {
  if (Pg) return Zc;
  Pg = 1;
  function t(r, a) {
    if (typeof r != "function")
      throw new TypeError(`Expected the first argument to be a \`function\`, got \`${typeof r}\`.`);
    let i, u = 0;
    return function(...c) {
      clearTimeout(i);
      const d = Date.now(), m = d - u, h = a - m;
      h <= 0 ? (u = d, r.apply(this, c)) : i = setTimeout(() => {
        u = Date.now(), r.apply(this, c);
      }, h);
    };
  }
  return Zc = t, Zc;
}
var M2 = /* @__PURE__ */ z2();
const L2 = /* @__PURE__ */ ll(M2);
function Fg(t, r) {
  return r != null ? L2(t, r) : t;
}
function j2(t) {
  const [r, a] = A.useState(t);
  return A.useEffect(() => {
    Tf(t, r) || a(t);
  }, [t, r]), r;
}
function U2({
  api: t = "/api/chat",
  id: r,
  initialMessages: a,
  initialInput: i = "",
  sendExtraMessageFields: u,
  onToolCall: s,
  experimental_prepareRequestBody: c,
  maxSteps: d = 1,
  streamProtocol: m = "data",
  onResponse: h,
  onFinish: g,
  onError: y,
  credentials: b,
  headers: x,
  body: k,
  generateId: C = Wf,
  fetch: z,
  keepLastMessageOnError: T = !0,
  experimental_throttle: Y
} = {}) {
  const [j] = A.useState(C), Q = r ?? j, I = typeof t == "string" ? [t, Q] : Q, R = j2(a ?? []), F = A.useMemo(
    () => Hc(R),
    [R]
  ), { data: q, mutate: Z } = Io(
    [I, "messages"],
    null,
    { fallbackData: F }
  ), O = A.useRef(q || []);
  A.useEffect(() => {
    O.current = q || [];
  }, [q]);
  const { data: ne, mutate: te } = Io([I, "streamData"], null), re = A.useRef(ne);
  A.useEffect(() => {
    re.current = ne;
  }, [ne]);
  const { data: le = "ready", mutate: oe } = Io([I, "status"], null), { data: B = void 0, mutate: $ } = Io([I, "error"], null), G = A.useRef(null), ve = A.useRef({
    credentials: b,
    headers: x,
    body: k
  });
  A.useEffect(() => {
    ve.current = {
      credentials: b,
      headers: x,
      body: k
    };
  }, [b, x, k]);
  const w = A.useCallback(
    async (Ce, Se = "generate") => {
      var be, ze;
      oe("submitted"), $(void 0);
      const Ae = Hc(Ce.messages), Ve = Ae.length, kt = Af(
        (be = Ae[Ae.length - 1]) == null ? void 0 : be.toolInvocations
      );
      try {
        const Pe = new AbortController();
        G.current = Pe;
        const ct = Fg(Z, Y), rr = Fg(
          te,
          Y
        ), jn = O.current;
        ct(Ae, !1);
        const lr = u ? Ae : Ae.map(
          ({
            role: P,
            content: ee,
            experimental_attachments: he,
            data: me,
            annotations: He,
            toolInvocations: Rt,
            parts: an
          }) => ({
            role: P,
            content: ee,
            ...he !== void 0 && {
              experimental_attachments: he
            },
            ...me !== void 0 && { data: me },
            ...He !== void 0 && { annotations: He },
            ...Rt !== void 0 && { toolInvocations: Rt },
            ...an !== void 0 && { parts: an }
          })
        ), pt = re.current;
        await e2({
          api: t,
          body: (ze = c == null ? void 0 : c({
            id: Q,
            messages: Ae,
            requestData: Ce.data,
            requestBody: Ce.body
          })) != null ? ze : {
            id: Q,
            messages: lr,
            data: Ce.data,
            ...ve.current.body,
            ...Ce.body
          },
          streamProtocol: m,
          credentials: ve.current.credentials,
          headers: {
            ...ve.current.headers,
            ...Ce.headers
          },
          abortController: () => G.current,
          restoreMessagesOnFailure() {
            T || ct(jn, !1);
          },
          onResponse: h,
          onUpdate({ message: P, data: ee, replaceLastMessage: he }) {
            oe("streaming"), ct(
              [
                ...he ? Ae.slice(0, Ae.length - 1) : Ae,
                P
              ],
              !1
            ), ee != null && ee.length && rr(
              [...pt ?? [], ...ee],
              !1
            );
          },
          onToolCall: s,
          onFinish: g,
          generateId: C,
          fetch: z,
          lastMessage: Ae[Ae.length - 1],
          requestType: Se
        }), G.current = null, oe("ready");
      } catch (Pe) {
        if (Pe.name === "AbortError")
          return G.current = null, oe("ready"), null;
        y && Pe instanceof Error && y(Pe), $(Pe), oe("error");
      }
      const Fe = O.current;
      t2({
        originalMaxToolInvocationStep: kt,
        originalMessageCount: Ve,
        maxSteps: d,
        messages: Fe
      }) && await w({ messages: Fe });
    },
    [
      Z,
      oe,
      t,
      ve,
      h,
      g,
      y,
      $,
      te,
      re,
      m,
      u,
      c,
      s,
      d,
      O,
      G,
      C,
      z,
      T,
      Y,
      Q
    ]
  ), X = A.useCallback(
    async (Ce, {
      data: Se,
      headers: be,
      body: ze,
      experimental_attachments: Ae = Ce.experimental_attachments
    } = {}) => {
      var Ve, kt;
      const Fe = await jg(
        Ae
      ), Pe = O.current.concat({
        ...Ce,
        id: (Ve = Ce.id) != null ? Ve : C(),
        createdAt: (kt = Ce.createdAt) != null ? kt : /* @__PURE__ */ new Date(),
        experimental_attachments: Fe.length > 0 ? Fe : void 0,
        parts: b0(Ce)
      });
      return w({ messages: Pe, headers: be, body: ze, data: Se });
    },
    [w, C]
  ), ae = A.useCallback(
    async ({ data: Ce, headers: Se, body: be } = {}) => {
      const ze = O.current;
      if (ze.length === 0)
        return null;
      const Ae = ze[ze.length - 1];
      return w({
        messages: Ae.role === "assistant" ? ze.slice(0, -1) : ze,
        headers: Se,
        body: be,
        data: Ce
      });
    },
    [w]
  ), E = A.useCallback(() => {
    G.current && (G.current.abort(), G.current = null);
  }, []), ue = A.useCallback(async () => {
    const Ce = O.current;
    w({ messages: Ce }, "resume");
  }, [w]), ge = A.useCallback(
    (Ce) => {
      typeof Ce == "function" && (Ce = Ce(O.current));
      const Se = Hc(Ce);
      Z(Se, !1), O.current = Se;
    },
    [Z]
  ), se = A.useCallback(
    (Ce) => {
      typeof Ce == "function" && (Ce = Ce(re.current)), te(Ce, !1), re.current = Ce;
    },
    [te]
  ), [ke, Te] = A.useState(i), tt = A.useCallback(
    async (Ce, Se = {}, be) => {
      var ze;
      if ((ze = Ce == null ? void 0 : Ce.preventDefault) == null || ze.call(Ce), !ke && !Se.allowEmptySubmit)
        return;
      be && (ve.current = {
        ...ve.current,
        ...be
      });
      const Ae = await jg(
        Se.experimental_attachments
      ), kt = {
        messages: O.current.concat({
          id: C(),
          createdAt: /* @__PURE__ */ new Date(),
          role: "user",
          content: ke,
          experimental_attachments: Ae.length > 0 ? Ae : void 0,
          parts: [{ type: "text", text: ke }]
        }),
        headers: Se.headers,
        body: Se.body,
        data: Se.data
      };
      w(kt), Te("");
    },
    [ke, C, w]
  ), rt = (Ce) => {
    Te(Ce.target.value);
  }, vt = A.useCallback(
    ({ toolCallId: Ce, result: Se }) => {
      const be = O.current;
      if (n2({
        messages: be,
        toolCallId: Ce,
        toolResult: Se
      }), Z(
        [
          ...be.slice(0, be.length - 1),
          { ...be[be.length - 1] }
        ],
        !1
      ), le === "submitted" || le === "streaming")
        return;
      const ze = be[be.length - 1];
      x0(ze) && w({ messages: be });
    },
    [Z, le, w]
  );
  return {
    messages: q ?? [],
    id: Q,
    setMessages: ge,
    data: ne,
    setData: se,
    error: B,
    append: X,
    reload: ae,
    stop: E,
    experimental_resume: ue,
    input: ke,
    setInput: Te,
    handleInputChange: rt,
    handleSubmit: tt,
    isLoading: le === "submitted" || le === "streaming",
    status: le,
    addToolResult: vt
  };
}
async function B2(t, r) {
  const i = await fetch(`https://narpdev.opitech.com.co//chatbotapi/cqrs/query/get_chatbot_by_question_query?question=${t}&companyid=${r}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!i.ok)
    throw new Error("Error al obtener la respuesta de la API");
  return (await i.json()).data || "No se encontró una respuesta.";
}
const I2 = "Tu pregunta contiene lenguaje inapropiado. Por favor, reformúlala.", H2 = "Tu chat ha sido suspendido por lenguaje inapropiado. Por favor, inténtalo de nuevo más tarde.", q2 = "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde", V2 = `¡Hola! Soy TutorIA, tu asistente virtual. Estoy aquí para:
      

1️⃣    Ayudarte a encontrar rutas de aprendizaje sugeridas.
      

2️⃣     Recomendarte cursos según tus intereses. 
      

Escribe qué te interesa aprender o explora sugerencias.`, Ho = {
  colors: {
    background: "#FAF8FF",
    botMessage: "",
    userMessage: "#E1E2EC"
  },
  avatars: {
    bot: "/images/bot-avatar.png",
    user: "/images/user-avatar.png"
  },
  textColors: {
    background: "#000000",
    botMessage: "#000000",
    userMessage: "#44464F"
  },
  headerText: "TutorIA",
  userName: "Default User Name"
};
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y2 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), P2 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, a, i) => i ? i.toUpperCase() : a.toLowerCase()
), Gg = (t) => {
  const r = P2(t);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, N0 = (...t) => t.filter((r, a, i) => !!r && r.trim() !== "" && i.indexOf(r) === a).join(" ").trim(), F2 = (t) => {
  for (const r in t)
    if (r.startsWith("aria-") || r === "role" || r === "title")
      return !0;
};
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var G2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X2 = A.forwardRef(
  ({
    color: t = "currentColor",
    size: r = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: i,
    className: u = "",
    children: s,
    iconNode: c,
    ...d
  }, m) => A.createElement(
    "svg",
    {
      ref: m,
      ...G2,
      width: r,
      height: r,
      stroke: t,
      strokeWidth: i ? Number(a) * 24 / Number(r) : a,
      className: N0("lucide", u),
      ...!s && !F2(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...c.map(([h, g]) => A.createElement(h, g)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = (t, r) => {
  const a = A.forwardRef(
    ({ className: i, ...u }, s) => A.createElement(X2, {
      ref: s,
      iconNode: r,
      className: N0(
        `lucide-${Y2(Gg(t))}`,
        `lucide-${t}`,
        i
      ),
      ...u
    })
  );
  return a.displayName = Gg(t), a;
};
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q2 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Z2 = zr("chevron-down", Q2);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K2 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Xg = zr("chevron-right", K2);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J2 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], $2 = zr("chevron-up", J2);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W2 = [
  ["path", { d: "m7 20 5-5 5 5", key: "13a0gw" }],
  ["path", { d: "m7 4 5 5 5-5", key: "1kwcof" }]
], eE = zr("chevrons-down-up", W2);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tE = [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
], nE = zr("chevrons-up-down", tE);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rE = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], lE = zr("circle", rE);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aE = [
  [
    "path",
    {
      d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",
      key: "117uat"
    }
  ],
  ["path", { d: "M6 12h16", key: "s4cdu5" }]
], iE = zr("send-horizontal", aE);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oE = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], O0 = zr("x", oE);
function z0(t) {
  var r, a, i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var u = t.length;
    for (r = 0; r < u; r++) t[r] && (a = z0(t[r])) && (i && (i += " "), i += a);
  } else for (a in t) t[a] && (i && (i += " "), i += a);
  return i;
}
function M0() {
  for (var t, r, a = 0, i = "", u = arguments.length; a < u; a++) (t = arguments[a]) && (r = z0(t)) && (i && (i += " "), i += r);
  return i;
}
const rd = "-", uE = (t) => {
  const r = cE(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: i
  } = t;
  return {
    getClassGroupId: (c) => {
      const d = c.split(rd);
      return d[0] === "" && d.length !== 1 && d.shift(), L0(d, r) || sE(c);
    },
    getConflictingClassGroupIds: (c, d) => {
      const m = a[c] || [];
      return d && i[c] ? [...m, ...i[c]] : m;
    }
  };
}, L0 = (t, r) => {
  var c;
  if (t.length === 0)
    return r.classGroupId;
  const a = t[0], i = r.nextPart.get(a), u = i ? L0(t.slice(1), i) : void 0;
  if (u)
    return u;
  if (r.validators.length === 0)
    return;
  const s = t.join(rd);
  return (c = r.validators.find(({
    validator: d
  }) => d(s))) == null ? void 0 : c.classGroupId;
}, Qg = /^\[(.+)\]$/, sE = (t) => {
  if (Qg.test(t)) {
    const r = Qg.exec(t)[1], a = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, cE = (t) => {
  const {
    theme: r,
    classGroups: a
  } = t, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const u in a)
    jf(a[u], i, u, r);
  return i;
}, jf = (t, r, a, i) => {
  t.forEach((u) => {
    if (typeof u == "string") {
      const s = u === "" ? r : Zg(r, u);
      s.classGroupId = a;
      return;
    }
    if (typeof u == "function") {
      if (fE(u)) {
        jf(u(i), r, a, i);
        return;
      }
      r.validators.push({
        validator: u,
        classGroupId: a
      });
      return;
    }
    Object.entries(u).forEach(([s, c]) => {
      jf(c, Zg(r, s), a, i);
    });
  });
}, Zg = (t, r) => {
  let a = t;
  return r.split(rd).forEach((i) => {
    a.nextPart.has(i) || a.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(i);
  }), a;
}, fE = (t) => t.isThemeGetter, dE = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, a = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  const u = (s, c) => {
    a.set(s, c), r++, r > t && (r = 0, i = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let c = a.get(s);
      if (c !== void 0)
        return c;
      if ((c = i.get(s)) !== void 0)
        return u(s, c), c;
    },
    set(s, c) {
      a.has(s) ? a.set(s, c) : u(s, c);
    }
  };
}, Uf = "!", Bf = ":", hE = Bf.length, pE = (t) => {
  const {
    prefix: r,
    experimentalParseClassName: a
  } = t;
  let i = (u) => {
    const s = [];
    let c = 0, d = 0, m = 0, h;
    for (let k = 0; k < u.length; k++) {
      let C = u[k];
      if (c === 0 && d === 0) {
        if (C === Bf) {
          s.push(u.slice(m, k)), m = k + hE;
          continue;
        }
        if (C === "/") {
          h = k;
          continue;
        }
      }
      C === "[" ? c++ : C === "]" ? c-- : C === "(" ? d++ : C === ")" && d--;
    }
    const g = s.length === 0 ? u : u.substring(m), y = mE(g), b = y !== g, x = h && h > m ? h - m : void 0;
    return {
      modifiers: s,
      hasImportantModifier: b,
      baseClassName: y,
      maybePostfixModifierPosition: x
    };
  };
  if (r) {
    const u = r + Bf, s = i;
    i = (c) => c.startsWith(u) ? s(c.substring(u.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: c,
      maybePostfixModifierPosition: void 0
    };
  }
  if (a) {
    const u = i;
    i = (s) => a({
      className: s,
      parseClassName: u
    });
  }
  return i;
}, mE = (t) => t.endsWith(Uf) ? t.substring(0, t.length - 1) : t.startsWith(Uf) ? t.substring(1) : t, gE = (t) => {
  const r = Object.fromEntries(t.orderSensitiveModifiers.map((i) => [i, !0]));
  return (i) => {
    if (i.length <= 1)
      return i;
    const u = [];
    let s = [];
    return i.forEach((c) => {
      c[0] === "[" || r[c] ? (u.push(...s.sort(), c), s = []) : s.push(c);
    }), u.push(...s.sort()), u;
  };
}, yE = (t) => ({
  cache: dE(t.cacheSize),
  parseClassName: pE(t),
  sortModifiers: gE(t),
  ...uE(t)
}), vE = /\s+/, bE = (t, r) => {
  const {
    parseClassName: a,
    getClassGroupId: i,
    getConflictingClassGroupIds: u,
    sortModifiers: s
  } = r, c = [], d = t.trim().split(vE);
  let m = "";
  for (let h = d.length - 1; h >= 0; h -= 1) {
    const g = d[h], {
      isExternal: y,
      modifiers: b,
      hasImportantModifier: x,
      baseClassName: k,
      maybePostfixModifierPosition: C
    } = a(g);
    if (y) {
      m = g + (m.length > 0 ? " " + m : m);
      continue;
    }
    let z = !!C, T = i(z ? k.substring(0, C) : k);
    if (!T) {
      if (!z) {
        m = g + (m.length > 0 ? " " + m : m);
        continue;
      }
      if (T = i(k), !T) {
        m = g + (m.length > 0 ? " " + m : m);
        continue;
      }
      z = !1;
    }
    const Y = s(b).join(":"), j = x ? Y + Uf : Y, Q = j + T;
    if (c.includes(Q))
      continue;
    c.push(Q);
    const I = u(T, z);
    for (let R = 0; R < I.length; ++R) {
      const F = I[R];
      c.push(j + F);
    }
    m = g + (m.length > 0 ? " " + m : m);
  }
  return m;
};
function xE() {
  let t = 0, r, a, i = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (a = j0(r)) && (i && (i += " "), i += a);
  return i;
}
const j0 = (t) => {
  if (typeof t == "string")
    return t;
  let r, a = "";
  for (let i = 0; i < t.length; i++)
    t[i] && (r = j0(t[i])) && (a && (a += " "), a += r);
  return a;
};
function wE(t, ...r) {
  let a, i, u, s = c;
  function c(m) {
    const h = r.reduce((g, y) => y(g), t());
    return a = yE(h), i = a.cache.get, u = a.cache.set, s = d, d(m);
  }
  function d(m) {
    const h = i(m);
    if (h)
      return h;
    const g = bE(m, a);
    return u(m, g), g;
  }
  return function() {
    return s(xE.apply(null, arguments));
  };
}
const yt = (t) => {
  const r = (a) => a[t] || [];
  return r.isThemeGetter = !0, r;
}, U0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, B0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i, SE = /^\d+\/\d+$/, EE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, kE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, CE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, AE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, TE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Fl = (t) => SE.test(t), Ne = (t) => !!t && !Number.isNaN(Number(t)), _r = (t) => !!t && Number.isInteger(Number(t)), Kc = (t) => t.endsWith("%") && Ne(t.slice(0, -1)), $n = (t) => EE.test(t), _E = () => !0, RE = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  kE.test(t) && !CE.test(t)
), I0 = () => !1, DE = (t) => AE.test(t), NE = (t) => TE.test(t), OE = (t) => !fe(t) && !de(t), zE = (t) => aa(t, V0, I0), fe = (t) => U0.test(t), el = (t) => aa(t, Y0, RE), Jc = (t) => aa(t, BE, Ne), Kg = (t) => aa(t, H0, I0), ME = (t) => aa(t, q0, NE), qo = (t) => aa(t, P0, DE), de = (t) => B0.test(t), ii = (t) => ia(t, Y0), LE = (t) => ia(t, IE), Jg = (t) => ia(t, H0), jE = (t) => ia(t, V0), UE = (t) => ia(t, q0), Vo = (t) => ia(t, P0, !0), aa = (t, r, a) => {
  const i = U0.exec(t);
  return i ? i[1] ? r(i[1]) : a(i[2]) : !1;
}, ia = (t, r, a = !1) => {
  const i = B0.exec(t);
  return i ? i[1] ? r(i[1]) : a : !1;
}, H0 = (t) => t === "position" || t === "percentage", q0 = (t) => t === "image" || t === "url", V0 = (t) => t === "length" || t === "size" || t === "bg-size", Y0 = (t) => t === "length", BE = (t) => t === "number", IE = (t) => t === "family-name", P0 = (t) => t === "shadow", HE = () => {
  const t = yt("color"), r = yt("font"), a = yt("text"), i = yt("font-weight"), u = yt("tracking"), s = yt("leading"), c = yt("breakpoint"), d = yt("container"), m = yt("spacing"), h = yt("radius"), g = yt("shadow"), y = yt("inset-shadow"), b = yt("text-shadow"), x = yt("drop-shadow"), k = yt("blur"), C = yt("perspective"), z = yt("aspect"), T = yt("ease"), Y = yt("animate"), j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Q = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], I = () => [...Q(), de, fe], R = () => ["auto", "hidden", "clip", "visible", "scroll"], F = () => ["auto", "contain", "none"], q = () => [de, fe, m], Z = () => [Fl, "full", "auto", ...q()], O = () => [_r, "none", "subgrid", de, fe], ne = () => ["auto", {
    span: ["full", _r, de, fe]
  }, _r, de, fe], te = () => [_r, "auto", de, fe], re = () => ["auto", "min", "max", "fr", de, fe], le = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], oe = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], B = () => ["auto", ...q()], $ = () => [Fl, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...q()], G = () => [t, de, fe], ve = () => [...Q(), Jg, Kg, {
    position: [de, fe]
  }], w = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], X = () => ["auto", "cover", "contain", jE, zE, {
    size: [de, fe]
  }], ae = () => [Kc, ii, el], E = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    de,
    fe
  ], ue = () => ["", Ne, ii, el], ge = () => ["solid", "dashed", "dotted", "double"], se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ke = () => [Ne, Kc, Jg, Kg], Te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    k,
    de,
    fe
  ], tt = () => ["none", Ne, de, fe], rt = () => ["none", Ne, de, fe], vt = () => [Ne, de, fe], Ce = () => [Fl, "full", ...q()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [$n],
      breakpoint: [$n],
      color: [_E],
      container: [$n],
      "drop-shadow": [$n],
      ease: ["in", "out", "in-out"],
      font: [OE],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [$n],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [$n],
      shadow: [$n],
      spacing: ["px", Ne],
      text: [$n],
      "text-shadow": [$n],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Fl, fe, de, z]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ne, fe, de, d]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": j()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": j()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: I()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: R()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": R()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": R()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: Z()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": Z()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": Z()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: Z()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: Z()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: Z()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: Z()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: Z()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: Z()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [_r, "auto", de, fe]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Fl, "full", "auto", d, ...q()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [Ne, Fl, "auto", "initial", "none", fe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Ne, de, fe]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Ne, de, fe]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [_r, "first", "last", "none", de, fe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": O()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ne()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": te()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": te()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": O()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ne()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": te()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": te()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": re()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": re()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: q()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": q()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": q()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...le(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...oe(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...oe()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...le()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...oe(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...oe(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": le()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...oe(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...oe()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: q()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: q()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: q()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: q()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: q()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: q()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: q()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: q()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: q()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: B()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: B()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: B()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: B()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: B()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: B()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: B()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: B()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: B()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": q()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": q()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: $()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [d, "screen", ...$()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          d,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...$()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          d,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [c]
          },
          ...$()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...$()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...$()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...$()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", a, ii, el]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [i, de, Jc]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Kc, fe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [LE, fe, r]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [u, de, fe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Ne, "none", de, Jc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...q()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", de, fe]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", de, fe]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: G()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: G()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ge(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Ne, "from-font", "auto", de, el]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: G()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Ne, "auto", de, fe]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: q()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", de, fe]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", de, fe]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: ve()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: w()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: X()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, _r, de, fe],
          radial: ["", de, fe],
          conic: [_r, de, fe]
        }, UE, ME]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: G()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ae()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ae()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ae()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: G()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: G()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: G()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: E()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": E()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": E()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": E()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": E()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": E()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": E()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": E()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": E()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": E()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": E()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": E()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": E()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": E()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": E()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: ue()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": ue()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": ue()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": ue()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": ue()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": ue()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": ue()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": ue()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": ue()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": ue()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": ue()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ge(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ge(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: G()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": G()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": G()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": G()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": G()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": G()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": G()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": G()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": G()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: G()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ge(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ne, de, fe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Ne, ii, el]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: G()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          Vo,
          qo
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: G()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", y, Vo, qo]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": G()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: ue()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: G()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Ne, el]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": G()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": ue()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": G()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", b, Vo, qo]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": G()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Ne, de, fe]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...se(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": se()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [Ne]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ke()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ke()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": G()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": G()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ke()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ke()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": G()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": G()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ke()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ke()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": G()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": G()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ke()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ke()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": G()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": G()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ke()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ke()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": G()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": G()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ke()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ke()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": G()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": G()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ke()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ke()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": G()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": G()
      }],
      "mask-image-radial": [{
        "mask-radial": [de, fe]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ke()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ke()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": G()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": G()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": Q()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Ne]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ke()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ke()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": G()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": G()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: ve()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: w()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: X()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", de, fe]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          de,
          fe
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Te()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Ne, de, fe]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Ne, de, fe]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          x,
          Vo,
          qo
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": G()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Ne, de, fe]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Ne, de, fe]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Ne, de, fe]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ne, de, fe]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Ne, de, fe]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          de,
          fe
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Te()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Ne, de, fe]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Ne, de, fe]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Ne, de, fe]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Ne, de, fe]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Ne, de, fe]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ne, de, fe]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ne, de, fe]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Ne, de, fe]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": q()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": q()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": q()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", de, fe]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [Ne, "initial", de, fe]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", T, de, fe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Ne, de, fe]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", Y, de, fe]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [C, de, fe]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": I()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: tt()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": tt()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": tt()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": tt()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: rt()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": rt()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": rt()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": rt()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: vt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": vt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": vt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [de, fe, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: I()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Ce()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Ce()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Ce()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Ce()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: G()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: G()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", de, fe]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": q()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": q()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": q()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": q()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": q()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": q()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": q()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": q()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": q()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": q()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": q()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": q()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": q()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": q()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": q()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": q()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": q()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": q()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", de, fe]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...G()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ne, ii, el, Jc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...G()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, qE = /* @__PURE__ */ wE(HE);
function at(...t) {
  return qE(M0(t));
}
function VE(t, r) {
  const a = A.createContext(r), i = (s) => {
    const { children: c, ...d } = s, m = A.useMemo(() => d, Object.values(d));
    return /* @__PURE__ */ _.jsx(a.Provider, { value: m, children: c });
  };
  i.displayName = t + "Provider";
  function u(s) {
    const c = A.useContext(a);
    if (c) return c;
    if (r !== void 0) return r;
    throw new Error(`\`${s}\` must be used within \`${t}\``);
  }
  return [i, u];
}
function cu(t, r = []) {
  let a = [];
  function i(s, c) {
    const d = A.createContext(c), m = a.length;
    a = [...a, c];
    const h = (y) => {
      var T;
      const { scope: b, children: x, ...k } = y, C = ((T = b == null ? void 0 : b[t]) == null ? void 0 : T[m]) || d, z = A.useMemo(() => k, Object.values(k));
      return /* @__PURE__ */ _.jsx(C.Provider, { value: z, children: x });
    };
    h.displayName = s + "Provider";
    function g(y, b) {
      var C;
      const x = ((C = b == null ? void 0 : b[t]) == null ? void 0 : C[m]) || d, k = A.useContext(x);
      if (k) return k;
      if (c !== void 0) return c;
      throw new Error(`\`${y}\` must be used within \`${s}\``);
    }
    return [h, g];
  }
  const u = () => {
    const s = a.map((c) => A.createContext(c));
    return function(d) {
      const m = (d == null ? void 0 : d[t]) || s;
      return A.useMemo(
        () => ({ [`__scope${t}`]: { ...d, [t]: m } }),
        [d, m]
      );
    };
  };
  return u.scopeName = t, [i, YE(u, ...r)];
}
function YE(...t) {
  const r = t[0];
  if (t.length === 1) return r;
  const a = () => {
    const i = t.map((u) => ({
      useScope: u(),
      scopeName: u.scopeName
    }));
    return function(s) {
      const c = i.reduce((d, { useScope: m, scopeName: h }) => {
        const y = m(s)[`__scope${h}`];
        return { ...d, ...y };
      }, {});
      return A.useMemo(() => ({ [`__scope${r.scopeName}`]: c }), [c]);
    };
  };
  return a.scopeName = r.scopeName, a;
}
function $g(t, r) {
  if (typeof t == "function")
    return t(r);
  t != null && (t.current = r);
}
function F0(...t) {
  return (r) => {
    let a = !1;
    const i = t.map((u) => {
      const s = $g(u, r);
      return !a && typeof s == "function" && (a = !0), s;
    });
    if (a)
      return () => {
        for (let u = 0; u < i.length; u++) {
          const s = i[u];
          typeof s == "function" ? s() : $g(t[u], null);
        }
      };
  };
}
function It(...t) {
  return A.useCallback(F0(...t), t);
}
function Mt(t, r, { checkForDefaultPrevented: a = !0 } = {}) {
  return function(u) {
    if (t == null || t(u), a === !1 || !u.defaultPrevented)
      return r == null ? void 0 : r(u);
  };
}
var er = globalThis != null && globalThis.document ? A.useLayoutEffect : () => {
}, PE = w0[" useId ".trim().toString()] || (() => {
}), FE = 0;
function $c(t) {
  const [r, a] = A.useState(PE());
  return er(() => {
    a((i) => i ?? String(FE++));
  }, [t]), t || (r ? `radix-${r}` : "");
}
var GE = w0[" useInsertionEffect ".trim().toString()] || er;
function XE({
  prop: t,
  defaultProp: r,
  onChange: a = () => {
  },
  caller: i
}) {
  const [u, s, c] = QE({
    defaultProp: r,
    onChange: a
  }), d = t !== void 0, m = d ? t : u;
  {
    const g = A.useRef(t !== void 0);
    A.useEffect(() => {
      const y = g.current;
      y !== d && console.warn(
        `${i} is changing from ${y ? "controlled" : "uncontrolled"} to ${d ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), g.current = d;
    }, [d, i]);
  }
  const h = A.useCallback(
    (g) => {
      var y;
      if (d) {
        const b = ZE(g) ? g(t) : g;
        b !== t && ((y = c.current) == null || y.call(c, b));
      } else
        s(g);
    },
    [d, t, s, c]
  );
  return [m, h];
}
function QE({
  defaultProp: t,
  onChange: r
}) {
  const [a, i] = A.useState(t), u = A.useRef(a), s = A.useRef(r);
  return GE(() => {
    s.current = r;
  }, [r]), A.useEffect(() => {
    var c;
    u.current !== a && ((c = s.current) == null || c.call(s, a), u.current = a);
  }, [a, u]), [a, i, s];
}
function ZE(t) {
  return typeof t == "function";
}
var G0 = a0();
const KE = /* @__PURE__ */ ll(G0);
// @__NO_SIDE_EFFECTS__
function ld(t) {
  const r = /* @__PURE__ */ $E(t), a = A.forwardRef((i, u) => {
    const { children: s, ...c } = i, d = A.Children.toArray(s), m = d.find(ek);
    if (m) {
      const h = m.props.children, g = d.map((y) => y === m ? A.Children.count(h) > 1 ? A.Children.only(null) : A.isValidElement(h) ? h.props.children : null : y);
      return /* @__PURE__ */ _.jsx(r, { ...c, ref: u, children: A.isValidElement(h) ? A.cloneElement(h, void 0, g) : null });
    }
    return /* @__PURE__ */ _.jsx(r, { ...c, ref: u, children: s });
  });
  return a.displayName = `${t}.Slot`, a;
}
var JE = /* @__PURE__ */ ld("Slot");
// @__NO_SIDE_EFFECTS__
function $E(t) {
  const r = A.forwardRef((a, i) => {
    const { children: u, ...s } = a;
    if (A.isValidElement(u)) {
      const c = nk(u), d = tk(s, u.props);
      return u.type !== A.Fragment && (d.ref = i ? F0(i, c) : c), A.cloneElement(u, d);
    }
    return A.Children.count(u) > 1 ? A.Children.only(null) : null;
  });
  return r.displayName = `${t}.SlotClone`, r;
}
var X0 = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function WE(t) {
  const r = ({ children: a }) => /* @__PURE__ */ _.jsx(_.Fragment, { children: a });
  return r.displayName = `${t}.Slottable`, r.__radixId = X0, r;
}
function ek(t) {
  return A.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === X0;
}
function tk(t, r) {
  const a = { ...r };
  for (const i in r) {
    const u = t[i], s = r[i];
    /^on[A-Z]/.test(i) ? u && s ? a[i] = (...d) => {
      const m = s(...d);
      return u(...d), m;
    } : u && (a[i] = u) : i === "style" ? a[i] = { ...u, ...s } : i === "className" && (a[i] = [u, s].filter(Boolean).join(" "));
  }
  return { ...t, ...a };
}
function nk(t) {
  var i, u;
  let r = (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : i.get, a = r && "isReactWarning" in r && r.isReactWarning;
  return a ? t.ref : (r = (u = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : u.get, a = r && "isReactWarning" in r && r.isReactWarning, a ? t.props.ref : t.props.ref || t.ref);
}
var rk = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], _t = rk.reduce((t, r) => {
  const a = /* @__PURE__ */ ld(`Primitive.${r}`), i = A.forwardRef((u, s) => {
    const { asChild: c, ...d } = u, m = c ? a : r;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ _.jsx(m, { ...d, ref: s });
  });
  return i.displayName = `Primitive.${r}`, { ...t, [r]: i };
}, {});
function lk(t, r) {
  t && G0.flushSync(() => t.dispatchEvent(r));
}
function rn(t) {
  const r = A.useRef(t);
  return A.useEffect(() => {
    r.current = t;
  }), A.useMemo(() => (...a) => {
    var i;
    return (i = r.current) == null ? void 0 : i.call(r, ...a);
  }, []);
}
function ak(t, r = globalThis == null ? void 0 : globalThis.document) {
  const a = rn(t);
  A.useEffect(() => {
    const i = (u) => {
      u.key === "Escape" && a(u);
    };
    return r.addEventListener("keydown", i, { capture: !0 }), () => r.removeEventListener("keydown", i, { capture: !0 });
  }, [a, r]);
}
var ik = "DismissableLayer", If = "dismissableLayer.update", ok = "dismissableLayer.pointerDownOutside", uk = "dismissableLayer.focusOutside", Wg, Q0 = A.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Z0 = A.forwardRef(
  (t, r) => {
    const {
      disableOutsidePointerEvents: a = !1,
      onEscapeKeyDown: i,
      onPointerDownOutside: u,
      onFocusOutside: s,
      onInteractOutside: c,
      onDismiss: d,
      ...m
    } = t, h = A.useContext(Q0), [g, y] = A.useState(null), b = (g == null ? void 0 : g.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, x] = A.useState({}), k = It(r, (F) => y(F)), C = Array.from(h.layers), [z] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), T = C.indexOf(z), Y = g ? C.indexOf(g) : -1, j = h.layersWithOutsidePointerEventsDisabled.size > 0, Q = Y >= T, I = fk((F) => {
      const q = F.target, Z = [...h.branches].some((O) => O.contains(q));
      !Q || Z || (u == null || u(F), c == null || c(F), F.defaultPrevented || d == null || d());
    }, b), R = dk((F) => {
      const q = F.target;
      [...h.branches].some((O) => O.contains(q)) || (s == null || s(F), c == null || c(F), F.defaultPrevented || d == null || d());
    }, b);
    return ak((F) => {
      Y === h.layers.size - 1 && (i == null || i(F), !F.defaultPrevented && d && (F.preventDefault(), d()));
    }, b), A.useEffect(() => {
      if (g)
        return a && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (Wg = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(g)), h.layers.add(g), ey(), () => {
          a && h.layersWithOutsidePointerEventsDisabled.size === 1 && (b.body.style.pointerEvents = Wg);
        };
    }, [g, b, a, h]), A.useEffect(() => () => {
      g && (h.layers.delete(g), h.layersWithOutsidePointerEventsDisabled.delete(g), ey());
    }, [g, h]), A.useEffect(() => {
      const F = () => x({});
      return document.addEventListener(If, F), () => document.removeEventListener(If, F);
    }, []), /* @__PURE__ */ _.jsx(
      _t.div,
      {
        ...m,
        ref: k,
        style: {
          pointerEvents: j ? Q ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: Mt(t.onFocusCapture, R.onFocusCapture),
        onBlurCapture: Mt(t.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: Mt(
          t.onPointerDownCapture,
          I.onPointerDownCapture
        )
      }
    );
  }
);
Z0.displayName = ik;
var sk = "DismissableLayerBranch", ck = A.forwardRef((t, r) => {
  const a = A.useContext(Q0), i = A.useRef(null), u = It(r, i);
  return A.useEffect(() => {
    const s = i.current;
    if (s)
      return a.branches.add(s), () => {
        a.branches.delete(s);
      };
  }, [a.branches]), /* @__PURE__ */ _.jsx(_t.div, { ...t, ref: u });
});
ck.displayName = sk;
function fk(t, r = globalThis == null ? void 0 : globalThis.document) {
  const a = rn(t), i = A.useRef(!1), u = A.useRef(() => {
  });
  return A.useEffect(() => {
    const s = (d) => {
      if (d.target && !i.current) {
        let m = function() {
          K0(
            ok,
            a,
            h,
            { discrete: !0 }
          );
        };
        const h = { originalEvent: d };
        d.pointerType === "touch" ? (r.removeEventListener("click", u.current), u.current = m, r.addEventListener("click", u.current, { once: !0 })) : m();
      } else
        r.removeEventListener("click", u.current);
      i.current = !1;
    }, c = window.setTimeout(() => {
      r.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(c), r.removeEventListener("pointerdown", s), r.removeEventListener("click", u.current);
    };
  }, [r, a]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => i.current = !0
  };
}
function dk(t, r = globalThis == null ? void 0 : globalThis.document) {
  const a = rn(t), i = A.useRef(!1);
  return A.useEffect(() => {
    const u = (s) => {
      s.target && !i.current && K0(uk, a, { originalEvent: s }, {
        discrete: !1
      });
    };
    return r.addEventListener("focusin", u), () => r.removeEventListener("focusin", u);
  }, [r, a]), {
    onFocusCapture: () => i.current = !0,
    onBlurCapture: () => i.current = !1
  };
}
function ey() {
  const t = new CustomEvent(If);
  document.dispatchEvent(t);
}
function K0(t, r, a, { discrete: i }) {
  const u = a.originalEvent.target, s = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: a });
  r && u.addEventListener(t, r, { once: !0 }), i ? lk(u, s) : u.dispatchEvent(s);
}
var Wc = "focusScope.autoFocusOnMount", ef = "focusScope.autoFocusOnUnmount", ty = { bubbles: !1, cancelable: !0 }, hk = "FocusScope", J0 = A.forwardRef((t, r) => {
  const {
    loop: a = !1,
    trapped: i = !1,
    onMountAutoFocus: u,
    onUnmountAutoFocus: s,
    ...c
  } = t, [d, m] = A.useState(null), h = rn(u), g = rn(s), y = A.useRef(null), b = It(r, (C) => m(C)), x = A.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  A.useEffect(() => {
    if (i) {
      let C = function(j) {
        if (x.paused || !d) return;
        const Q = j.target;
        d.contains(Q) ? y.current = Q : Dr(y.current, { select: !0 });
      }, z = function(j) {
        if (x.paused || !d) return;
        const Q = j.relatedTarget;
        Q !== null && (d.contains(Q) || Dr(y.current, { select: !0 }));
      }, T = function(j) {
        if (document.activeElement === document.body)
          for (const I of j)
            I.removedNodes.length > 0 && Dr(d);
      };
      document.addEventListener("focusin", C), document.addEventListener("focusout", z);
      const Y = new MutationObserver(T);
      return d && Y.observe(d, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", C), document.removeEventListener("focusout", z), Y.disconnect();
      };
    }
  }, [i, d, x.paused]), A.useEffect(() => {
    if (d) {
      ry.add(x);
      const C = document.activeElement;
      if (!d.contains(C)) {
        const T = new CustomEvent(Wc, ty);
        d.addEventListener(Wc, h), d.dispatchEvent(T), T.defaultPrevented || (pk(bk($0(d)), { select: !0 }), document.activeElement === C && Dr(d));
      }
      return () => {
        d.removeEventListener(Wc, h), setTimeout(() => {
          const T = new CustomEvent(ef, ty);
          d.addEventListener(ef, g), d.dispatchEvent(T), T.defaultPrevented || Dr(C ?? document.body, { select: !0 }), d.removeEventListener(ef, g), ry.remove(x);
        }, 0);
      };
    }
  }, [d, h, g, x]);
  const k = A.useCallback(
    (C) => {
      if (!a && !i || x.paused) return;
      const z = C.key === "Tab" && !C.altKey && !C.ctrlKey && !C.metaKey, T = document.activeElement;
      if (z && T) {
        const Y = C.currentTarget, [j, Q] = mk(Y);
        j && Q ? !C.shiftKey && T === Q ? (C.preventDefault(), a && Dr(j, { select: !0 })) : C.shiftKey && T === j && (C.preventDefault(), a && Dr(Q, { select: !0 })) : T === Y && C.preventDefault();
      }
    },
    [a, i, x.paused]
  );
  return /* @__PURE__ */ _.jsx(_t.div, { tabIndex: -1, ...c, ref: b, onKeyDown: k });
});
J0.displayName = hk;
function pk(t, { select: r = !1 } = {}) {
  const a = document.activeElement;
  for (const i of t)
    if (Dr(i, { select: r }), document.activeElement !== a) return;
}
function mk(t) {
  const r = $0(t), a = ny(r, t), i = ny(r.reverse(), t);
  return [a, i];
}
function $0(t) {
  const r = [], a = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (i) => {
      const u = i.tagName === "INPUT" && i.type === "hidden";
      return i.disabled || i.hidden || u ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) r.push(a.currentNode);
  return r;
}
function ny(t, r) {
  for (const a of t)
    if (!gk(a, { upTo: r })) return a;
}
function gk(t, { upTo: r }) {
  if (getComputedStyle(t).visibility === "hidden") return !0;
  for (; t; ) {
    if (r !== void 0 && t === r) return !1;
    if (getComputedStyle(t).display === "none") return !0;
    t = t.parentElement;
  }
  return !1;
}
function yk(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function Dr(t, { select: r = !1 } = {}) {
  if (t && t.focus) {
    const a = document.activeElement;
    t.focus({ preventScroll: !0 }), t !== a && yk(t) && r && t.select();
  }
}
var ry = vk();
function vk() {
  let t = [];
  return {
    add(r) {
      const a = t[0];
      r !== a && (a == null || a.pause()), t = ly(t, r), t.unshift(r);
    },
    remove(r) {
      var a;
      t = ly(t, r), (a = t[0]) == null || a.resume();
    }
  };
}
function ly(t, r) {
  const a = [...t], i = a.indexOf(r);
  return i !== -1 && a.splice(i, 1), a;
}
function bk(t) {
  return t.filter((r) => r.tagName !== "A");
}
var xk = "Portal", W0 = A.forwardRef((t, r) => {
  var d;
  const { container: a, ...i } = t, [u, s] = A.useState(!1);
  er(() => s(!0), []);
  const c = a || u && ((d = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : d.body);
  return c ? KE.createPortal(/* @__PURE__ */ _.jsx(_t.div, { ...i, ref: r }), c) : null;
});
W0.displayName = xk;
function wk(t, r) {
  return A.useReducer((a, i) => r[a][i] ?? a, t);
}
var Mr = (t) => {
  const { present: r, children: a } = t, i = Sk(r), u = typeof a == "function" ? a({ present: i.isPresent }) : A.Children.only(a), s = It(i.ref, Ek(u));
  return typeof a == "function" || i.isPresent ? A.cloneElement(u, { ref: s }) : null;
};
Mr.displayName = "Presence";
function Sk(t) {
  const [r, a] = A.useState(), i = A.useRef(null), u = A.useRef(t), s = A.useRef("none"), c = t ? "mounted" : "unmounted", [d, m] = wk(c, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return A.useEffect(() => {
    const h = Yo(i.current);
    s.current = d === "mounted" ? h : "none";
  }, [d]), er(() => {
    const h = i.current, g = u.current;
    if (g !== t) {
      const b = s.current, x = Yo(h);
      t ? m("MOUNT") : x === "none" || (h == null ? void 0 : h.display) === "none" ? m("UNMOUNT") : m(g && b !== x ? "ANIMATION_OUT" : "UNMOUNT"), u.current = t;
    }
  }, [t, m]), er(() => {
    if (r) {
      let h;
      const g = r.ownerDocument.defaultView ?? window, y = (x) => {
        const C = Yo(i.current).includes(x.animationName);
        if (x.target === r && C && (m("ANIMATION_END"), !u.current)) {
          const z = r.style.animationFillMode;
          r.style.animationFillMode = "forwards", h = g.setTimeout(() => {
            r.style.animationFillMode === "forwards" && (r.style.animationFillMode = z);
          });
        }
      }, b = (x) => {
        x.target === r && (s.current = Yo(i.current));
      };
      return r.addEventListener("animationstart", b), r.addEventListener("animationcancel", y), r.addEventListener("animationend", y), () => {
        g.clearTimeout(h), r.removeEventListener("animationstart", b), r.removeEventListener("animationcancel", y), r.removeEventListener("animationend", y);
      };
    } else
      m("ANIMATION_END");
  }, [r, m]), {
    isPresent: ["mounted", "unmountSuspended"].includes(d),
    ref: A.useCallback((h) => {
      i.current = h ? getComputedStyle(h) : null, a(h);
    }, [])
  };
}
function Yo(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
function Ek(t) {
  var i, u;
  let r = (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : i.get, a = r && "isReactWarning" in r && r.isReactWarning;
  return a ? t.ref : (r = (u = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : u.get, a = r && "isReactWarning" in r && r.isReactWarning, a ? t.props.ref : t.props.ref || t.ref);
}
var tf = 0;
function kk() {
  A.useEffect(() => {
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", t[0] ?? ay()), document.body.insertAdjacentElement("beforeend", t[1] ?? ay()), tf++, () => {
      tf === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((r) => r.remove()), tf--;
    };
  }, []);
}
function ay() {
  const t = document.createElement("span");
  return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
}
var zn = function() {
  return zn = Object.assign || function(r) {
    for (var a, i = 1, u = arguments.length; i < u; i++) {
      a = arguments[i];
      for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (r[s] = a[s]);
    }
    return r;
  }, zn.apply(this, arguments);
};
function ev(t, r) {
  var a = {};
  for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && r.indexOf(i) < 0 && (a[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var u = 0, i = Object.getOwnPropertySymbols(t); u < i.length; u++)
      r.indexOf(i[u]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[u]) && (a[i[u]] = t[i[u]]);
  return a;
}
function Ck(t, r, a) {
  if (a || arguments.length === 2) for (var i = 0, u = r.length, s; i < u; i++)
    (s || !(i in r)) && (s || (s = Array.prototype.slice.call(r, 0, i)), s[i] = r[i]);
  return t.concat(s || Array.prototype.slice.call(r));
}
var $o = "right-scroll-bar-position", Wo = "width-before-scroll-bar", Ak = "with-scroll-bars-hidden", Tk = "--removed-body-scroll-bar-size";
function nf(t, r) {
  return typeof t == "function" ? t(r) : t && (t.current = r), t;
}
function _k(t, r) {
  var a = A.useState(function() {
    return {
      // value
      value: t,
      // last callback
      callback: r,
      // "memoized" public interface
      facade: {
        get current() {
          return a.value;
        },
        set current(i) {
          var u = a.value;
          u !== i && (a.value = i, a.callback(i, u));
        }
      }
    };
  })[0];
  return a.callback = r, a.facade;
}
var Rk = typeof window < "u" ? A.useLayoutEffect : A.useEffect, iy = /* @__PURE__ */ new WeakMap();
function Dk(t, r) {
  var a = _k(null, function(i) {
    return t.forEach(function(u) {
      return nf(u, i);
    });
  });
  return Rk(function() {
    var i = iy.get(a);
    if (i) {
      var u = new Set(i), s = new Set(t), c = a.current;
      u.forEach(function(d) {
        s.has(d) || nf(d, null);
      }), s.forEach(function(d) {
        u.has(d) || nf(d, c);
      });
    }
    iy.set(a, t);
  }, [t]), a;
}
function Nk(t) {
  return t;
}
function Ok(t, r) {
  r === void 0 && (r = Nk);
  var a = [], i = !1, u = {
    read: function() {
      if (i)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return a.length ? a[a.length - 1] : t;
    },
    useMedium: function(s) {
      var c = r(s, i);
      return a.push(c), function() {
        a = a.filter(function(d) {
          return d !== c;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (i = !0; a.length; ) {
        var c = a;
        a = [], c.forEach(s);
      }
      a = {
        push: function(d) {
          return s(d);
        },
        filter: function() {
          return a;
        }
      };
    },
    assignMedium: function(s) {
      i = !0;
      var c = [];
      if (a.length) {
        var d = a;
        a = [], d.forEach(s), c = a;
      }
      var m = function() {
        var g = c;
        c = [], g.forEach(s);
      }, h = function() {
        return Promise.resolve().then(m);
      };
      h(), a = {
        push: function(g) {
          c.push(g), h();
        },
        filter: function(g) {
          return c = c.filter(g), a;
        }
      };
    }
  };
  return u;
}
function zk(t) {
  t === void 0 && (t = {});
  var r = Ok(null);
  return r.options = zn({ async: !0, ssr: !1 }, t), r;
}
var tv = function(t) {
  var r = t.sideCar, a = ev(t, ["sideCar"]);
  if (!r)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var i = r.read();
  if (!i)
    throw new Error("Sidecar medium not found");
  return A.createElement(i, zn({}, a));
};
tv.isSideCarExport = !0;
function Mk(t, r) {
  return t.useMedium(r), tv;
}
var nv = zk(), rf = function() {
}, fu = A.forwardRef(function(t, r) {
  var a = A.useRef(null), i = A.useState({
    onScrollCapture: rf,
    onWheelCapture: rf,
    onTouchMoveCapture: rf
  }), u = i[0], s = i[1], c = t.forwardProps, d = t.children, m = t.className, h = t.removeScrollBar, g = t.enabled, y = t.shards, b = t.sideCar, x = t.noRelative, k = t.noIsolation, C = t.inert, z = t.allowPinchZoom, T = t.as, Y = T === void 0 ? "div" : T, j = t.gapMode, Q = ev(t, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), I = b, R = Dk([a, r]), F = zn(zn({}, Q), u);
  return A.createElement(
    A.Fragment,
    null,
    g && A.createElement(I, { sideCar: nv, removeScrollBar: h, shards: y, noRelative: x, noIsolation: k, inert: C, setCallbacks: s, allowPinchZoom: !!z, lockRef: a, gapMode: j }),
    c ? A.cloneElement(A.Children.only(d), zn(zn({}, F), { ref: R })) : A.createElement(Y, zn({}, F, { className: m, ref: R }), d)
  );
});
fu.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
fu.classNames = {
  fullWidth: Wo,
  zeroRight: $o
};
var Lk = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function jk() {
  if (!document)
    return null;
  var t = document.createElement("style");
  t.type = "text/css";
  var r = Lk();
  return r && t.setAttribute("nonce", r), t;
}
function Uk(t, r) {
  t.styleSheet ? t.styleSheet.cssText = r : t.appendChild(document.createTextNode(r));
}
function Bk(t) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(t);
}
var Ik = function() {
  var t = 0, r = null;
  return {
    add: function(a) {
      t == 0 && (r = jk()) && (Uk(r, a), Bk(r)), t++;
    },
    remove: function() {
      t--, !t && r && (r.parentNode && r.parentNode.removeChild(r), r = null);
    }
  };
}, Hk = function() {
  var t = Ik();
  return function(r, a) {
    A.useEffect(function() {
      return t.add(r), function() {
        t.remove();
      };
    }, [r && a]);
  };
}, rv = function() {
  var t = Hk(), r = function(a) {
    var i = a.styles, u = a.dynamic;
    return t(i, u), null;
  };
  return r;
}, qk = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, lf = function(t) {
  return parseInt(t || "", 10) || 0;
}, Vk = function(t) {
  var r = window.getComputedStyle(document.body), a = r[t === "padding" ? "paddingLeft" : "marginLeft"], i = r[t === "padding" ? "paddingTop" : "marginTop"], u = r[t === "padding" ? "paddingRight" : "marginRight"];
  return [lf(a), lf(i), lf(u)];
}, Yk = function(t) {
  if (t === void 0 && (t = "margin"), typeof window > "u")
    return qk;
  var r = Vk(t), a = document.documentElement.clientWidth, i = window.innerWidth;
  return {
    left: r[0],
    top: r[1],
    right: r[2],
    gap: Math.max(0, i - a + r[2] - r[0])
  };
}, Pk = rv(), Wl = "data-scroll-locked", Fk = function(t, r, a, i) {
  var u = t.left, s = t.top, c = t.right, d = t.gap;
  return a === void 0 && (a = "margin"), `
  .`.concat(Ak, ` {
   overflow: hidden `).concat(i, `;
   padding-right: `).concat(d, "px ").concat(i, `;
  }
  body[`).concat(Wl, `] {
    overflow: hidden `).concat(i, `;
    overscroll-behavior: contain;
    `).concat([
    r && "position: relative ".concat(i, ";"),
    a === "margin" && `
    padding-left: `.concat(u, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(d, "px ").concat(i, `;
    `),
    a === "padding" && "padding-right: ".concat(d, "px ").concat(i, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat($o, ` {
    right: `).concat(d, "px ").concat(i, `;
  }
  
  .`).concat(Wo, ` {
    margin-right: `).concat(d, "px ").concat(i, `;
  }
  
  .`).concat($o, " .").concat($o, ` {
    right: 0 `).concat(i, `;
  }
  
  .`).concat(Wo, " .").concat(Wo, ` {
    margin-right: 0 `).concat(i, `;
  }
  
  body[`).concat(Wl, `] {
    `).concat(Tk, ": ").concat(d, `px;
  }
`);
}, oy = function() {
  var t = parseInt(document.body.getAttribute(Wl) || "0", 10);
  return isFinite(t) ? t : 0;
}, Gk = function() {
  A.useEffect(function() {
    return document.body.setAttribute(Wl, (oy() + 1).toString()), function() {
      var t = oy() - 1;
      t <= 0 ? document.body.removeAttribute(Wl) : document.body.setAttribute(Wl, t.toString());
    };
  }, []);
}, Xk = function(t) {
  var r = t.noRelative, a = t.noImportant, i = t.gapMode, u = i === void 0 ? "margin" : i;
  Gk();
  var s = A.useMemo(function() {
    return Yk(u);
  }, [u]);
  return A.createElement(Pk, { styles: Fk(s, !r, u, a ? "" : "!important") });
}, Hf = !1;
if (typeof window < "u")
  try {
    var Po = Object.defineProperty({}, "passive", {
      get: function() {
        return Hf = !0, !0;
      }
    });
    window.addEventListener("test", Po, Po), window.removeEventListener("test", Po, Po);
  } catch {
    Hf = !1;
  }
var Gl = Hf ? { passive: !1 } : !1, Qk = function(t) {
  return t.tagName === "TEXTAREA";
}, lv = function(t, r) {
  if (!(t instanceof Element))
    return !1;
  var a = window.getComputedStyle(t);
  return (
    // not-not-scrollable
    a[r] !== "hidden" && // contains scroll inside self
    !(a.overflowY === a.overflowX && !Qk(t) && a[r] === "visible")
  );
}, Zk = function(t) {
  return lv(t, "overflowY");
}, Kk = function(t) {
  return lv(t, "overflowX");
}, uy = function(t, r) {
  var a = r.ownerDocument, i = r;
  do {
    typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
    var u = av(t, i);
    if (u) {
      var s = iv(t, i), c = s[1], d = s[2];
      if (c > d)
        return !0;
    }
    i = i.parentNode;
  } while (i && i !== a.body);
  return !1;
}, Jk = function(t) {
  var r = t.scrollTop, a = t.scrollHeight, i = t.clientHeight;
  return [
    r,
    a,
    i
  ];
}, $k = function(t) {
  var r = t.scrollLeft, a = t.scrollWidth, i = t.clientWidth;
  return [
    r,
    a,
    i
  ];
}, av = function(t, r) {
  return t === "v" ? Zk(r) : Kk(r);
}, iv = function(t, r) {
  return t === "v" ? Jk(r) : $k(r);
}, Wk = function(t, r) {
  return t === "h" && r === "rtl" ? -1 : 1;
}, e3 = function(t, r, a, i, u) {
  var s = Wk(t, window.getComputedStyle(r).direction), c = s * i, d = a.target, m = r.contains(d), h = !1, g = c > 0, y = 0, b = 0;
  do {
    if (!d)
      break;
    var x = iv(t, d), k = x[0], C = x[1], z = x[2], T = C - z - s * k;
    (k || T) && av(t, d) && (y += T, b += k);
    var Y = d.parentNode;
    d = Y && Y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Y.host : Y;
  } while (
    // portaled content
    !m && d !== document.body || // self content
    m && (r.contains(d) || r === d)
  );
  return (g && Math.abs(y) < 1 || !g && Math.abs(b) < 1) && (h = !0), h;
}, Fo = function(t) {
  return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0];
}, sy = function(t) {
  return [t.deltaX, t.deltaY];
}, cy = function(t) {
  return t && "current" in t ? t.current : t;
}, t3 = function(t, r) {
  return t[0] === r[0] && t[1] === r[1];
}, n3 = function(t) {
  return `
  .block-interactivity-`.concat(t, ` {pointer-events: none;}
  .allow-interactivity-`).concat(t, ` {pointer-events: all;}
`);
}, r3 = 0, Xl = [];
function l3(t) {
  var r = A.useRef([]), a = A.useRef([0, 0]), i = A.useRef(), u = A.useState(r3++)[0], s = A.useState(rv)[0], c = A.useRef(t);
  A.useEffect(function() {
    c.current = t;
  }, [t]), A.useEffect(function() {
    if (t.inert) {
      document.body.classList.add("block-interactivity-".concat(u));
      var C = Ck([t.lockRef.current], (t.shards || []).map(cy), !0).filter(Boolean);
      return C.forEach(function(z) {
        return z.classList.add("allow-interactivity-".concat(u));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(u)), C.forEach(function(z) {
          return z.classList.remove("allow-interactivity-".concat(u));
        });
      };
    }
  }, [t.inert, t.lockRef.current, t.shards]);
  var d = A.useCallback(function(C, z) {
    if ("touches" in C && C.touches.length === 2 || C.type === "wheel" && C.ctrlKey)
      return !c.current.allowPinchZoom;
    var T = Fo(C), Y = a.current, j = "deltaX" in C ? C.deltaX : Y[0] - T[0], Q = "deltaY" in C ? C.deltaY : Y[1] - T[1], I, R = C.target, F = Math.abs(j) > Math.abs(Q) ? "h" : "v";
    if ("touches" in C && F === "h" && R.type === "range")
      return !1;
    var q = uy(F, R);
    if (!q)
      return !0;
    if (q ? I = F : (I = F === "v" ? "h" : "v", q = uy(F, R)), !q)
      return !1;
    if (!i.current && "changedTouches" in C && (j || Q) && (i.current = I), !I)
      return !0;
    var Z = i.current || I;
    return e3(Z, z, C, Z === "h" ? j : Q);
  }, []), m = A.useCallback(function(C) {
    var z = C;
    if (!(!Xl.length || Xl[Xl.length - 1] !== s)) {
      var T = "deltaY" in z ? sy(z) : Fo(z), Y = r.current.filter(function(I) {
        return I.name === z.type && (I.target === z.target || z.target === I.shadowParent) && t3(I.delta, T);
      })[0];
      if (Y && Y.should) {
        z.cancelable && z.preventDefault();
        return;
      }
      if (!Y) {
        var j = (c.current.shards || []).map(cy).filter(Boolean).filter(function(I) {
          return I.contains(z.target);
        }), Q = j.length > 0 ? d(z, j[0]) : !c.current.noIsolation;
        Q && z.cancelable && z.preventDefault();
      }
    }
  }, []), h = A.useCallback(function(C, z, T, Y) {
    var j = { name: C, delta: z, target: T, should: Y, shadowParent: a3(T) };
    r.current.push(j), setTimeout(function() {
      r.current = r.current.filter(function(Q) {
        return Q !== j;
      });
    }, 1);
  }, []), g = A.useCallback(function(C) {
    a.current = Fo(C), i.current = void 0;
  }, []), y = A.useCallback(function(C) {
    h(C.type, sy(C), C.target, d(C, t.lockRef.current));
  }, []), b = A.useCallback(function(C) {
    h(C.type, Fo(C), C.target, d(C, t.lockRef.current));
  }, []);
  A.useEffect(function() {
    return Xl.push(s), t.setCallbacks({
      onScrollCapture: y,
      onWheelCapture: y,
      onTouchMoveCapture: b
    }), document.addEventListener("wheel", m, Gl), document.addEventListener("touchmove", m, Gl), document.addEventListener("touchstart", g, Gl), function() {
      Xl = Xl.filter(function(C) {
        return C !== s;
      }), document.removeEventListener("wheel", m, Gl), document.removeEventListener("touchmove", m, Gl), document.removeEventListener("touchstart", g, Gl);
    };
  }, []);
  var x = t.removeScrollBar, k = t.inert;
  return A.createElement(
    A.Fragment,
    null,
    k ? A.createElement(s, { styles: n3(u) }) : null,
    x ? A.createElement(Xk, { noRelative: t.noRelative, gapMode: t.gapMode }) : null
  );
}
function a3(t) {
  for (var r = null; t !== null; )
    t instanceof ShadowRoot && (r = t.host, t = t.host), t = t.parentNode;
  return r;
}
const i3 = Mk(nv, l3);
var ov = A.forwardRef(function(t, r) {
  return A.createElement(fu, zn({}, t, { ref: r, sideCar: i3 }));
});
ov.classNames = fu.classNames;
var o3 = function(t) {
  if (typeof document > "u")
    return null;
  var r = Array.isArray(t) ? t[0] : t;
  return r.ownerDocument.body;
}, Ql = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new WeakMap(), Xo = {}, af = 0, uv = function(t) {
  return t && (t.host || uv(t.parentNode));
}, u3 = function(t, r) {
  return r.map(function(a) {
    if (t.contains(a))
      return a;
    var i = uv(a);
    return i && t.contains(i) ? i : (console.error("aria-hidden", a, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, s3 = function(t, r, a, i) {
  var u = u3(r, Array.isArray(t) ? t : [t]);
  Xo[a] || (Xo[a] = /* @__PURE__ */ new WeakMap());
  var s = Xo[a], c = [], d = /* @__PURE__ */ new Set(), m = new Set(u), h = function(y) {
    !y || d.has(y) || (d.add(y), h(y.parentNode));
  };
  u.forEach(h);
  var g = function(y) {
    !y || m.has(y) || Array.prototype.forEach.call(y.children, function(b) {
      if (d.has(b))
        g(b);
      else
        try {
          var x = b.getAttribute(i), k = x !== null && x !== "false", C = (Ql.get(b) || 0) + 1, z = (s.get(b) || 0) + 1;
          Ql.set(b, C), s.set(b, z), c.push(b), C === 1 && k && Go.set(b, !0), z === 1 && b.setAttribute(a, "true"), k || b.setAttribute(i, "true");
        } catch (T) {
          console.error("aria-hidden: cannot operate on ", b, T);
        }
    });
  };
  return g(r), d.clear(), af++, function() {
    c.forEach(function(y) {
      var b = Ql.get(y) - 1, x = s.get(y) - 1;
      Ql.set(y, b), s.set(y, x), b || (Go.has(y) || y.removeAttribute(i), Go.delete(y)), x || y.removeAttribute(a);
    }), af--, af || (Ql = /* @__PURE__ */ new WeakMap(), Ql = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new WeakMap(), Xo = {});
  };
}, c3 = function(t, r, a) {
  a === void 0 && (a = "data-aria-hidden");
  var i = Array.from(Array.isArray(t) ? t : [t]), u = o3(t);
  return u ? (i.push.apply(i, Array.from(u.querySelectorAll("[aria-live], script"))), s3(i, u, a, "aria-hidden")) : function() {
    return null;
  };
}, du = "Dialog", [sv, cv] = cu(du), [f3, kn] = sv(du), fv = (t) => {
  const {
    __scopeDialog: r,
    children: a,
    open: i,
    defaultOpen: u,
    onOpenChange: s,
    modal: c = !0
  } = t, d = A.useRef(null), m = A.useRef(null), [h, g] = XE({
    prop: i,
    defaultProp: u ?? !1,
    onChange: s,
    caller: du
  });
  return /* @__PURE__ */ _.jsx(
    f3,
    {
      scope: r,
      triggerRef: d,
      contentRef: m,
      contentId: $c(),
      titleId: $c(),
      descriptionId: $c(),
      open: h,
      onOpenChange: g,
      onOpenToggle: A.useCallback(() => g((y) => !y), [g]),
      modal: c,
      children: a
    }
  );
};
fv.displayName = du;
var dv = "DialogTrigger", hv = A.forwardRef(
  (t, r) => {
    const { __scopeDialog: a, ...i } = t, u = kn(dv, a), s = It(r, u.triggerRef);
    return /* @__PURE__ */ _.jsx(
      _t.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": u.open,
        "aria-controls": u.contentId,
        "data-state": od(u.open),
        ...i,
        ref: s,
        onClick: Mt(t.onClick, u.onOpenToggle)
      }
    );
  }
);
hv.displayName = dv;
var ad = "DialogPortal", [d3, pv] = sv(ad, {
  forceMount: void 0
}), mv = (t) => {
  const { __scopeDialog: r, forceMount: a, children: i, container: u } = t, s = kn(ad, r);
  return /* @__PURE__ */ _.jsx(d3, { scope: r, forceMount: a, children: A.Children.map(i, (c) => /* @__PURE__ */ _.jsx(Mr, { present: a || s.open, children: /* @__PURE__ */ _.jsx(W0, { asChild: !0, container: u, children: c }) })) });
};
mv.displayName = ad;
var tu = "DialogOverlay", gv = A.forwardRef(
  (t, r) => {
    const a = pv(tu, t.__scopeDialog), { forceMount: i = a.forceMount, ...u } = t, s = kn(tu, t.__scopeDialog);
    return s.modal ? /* @__PURE__ */ _.jsx(Mr, { present: i || s.open, children: /* @__PURE__ */ _.jsx(p3, { ...u, ref: r }) }) : null;
  }
);
gv.displayName = tu;
var h3 = /* @__PURE__ */ ld("DialogOverlay.RemoveScroll"), p3 = A.forwardRef(
  (t, r) => {
    const { __scopeDialog: a, ...i } = t, u = kn(tu, a);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ _.jsx(ov, { as: h3, allowPinchZoom: !0, shards: [u.contentRef], children: /* @__PURE__ */ _.jsx(
        _t.div,
        {
          "data-state": od(u.open),
          ...i,
          ref: r,
          style: { pointerEvents: "auto", ...i.style }
        }
      ) })
    );
  }
), nl = "DialogContent", yv = A.forwardRef(
  (t, r) => {
    const a = pv(nl, t.__scopeDialog), { forceMount: i = a.forceMount, ...u } = t, s = kn(nl, t.__scopeDialog);
    return /* @__PURE__ */ _.jsx(Mr, { present: i || s.open, children: s.modal ? /* @__PURE__ */ _.jsx(m3, { ...u, ref: r }) : /* @__PURE__ */ _.jsx(g3, { ...u, ref: r }) });
  }
);
yv.displayName = nl;
var m3 = A.forwardRef(
  (t, r) => {
    const a = kn(nl, t.__scopeDialog), i = A.useRef(null), u = It(r, a.contentRef, i);
    return A.useEffect(() => {
      const s = i.current;
      if (s) return c3(s);
    }, []), /* @__PURE__ */ _.jsx(
      vv,
      {
        ...t,
        ref: u,
        trapFocus: a.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Mt(t.onCloseAutoFocus, (s) => {
          var c;
          s.preventDefault(), (c = a.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: Mt(t.onPointerDownOutside, (s) => {
          const c = s.detail.originalEvent, d = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || d) && s.preventDefault();
        }),
        onFocusOutside: Mt(
          t.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), g3 = A.forwardRef(
  (t, r) => {
    const a = kn(nl, t.__scopeDialog), i = A.useRef(!1), u = A.useRef(!1);
    return /* @__PURE__ */ _.jsx(
      vv,
      {
        ...t,
        ref: r,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var c, d;
          (c = t.onCloseAutoFocus) == null || c.call(t, s), s.defaultPrevented || (i.current || (d = a.triggerRef.current) == null || d.focus(), s.preventDefault()), i.current = !1, u.current = !1;
        },
        onInteractOutside: (s) => {
          var m, h;
          (m = t.onInteractOutside) == null || m.call(t, s), s.defaultPrevented || (i.current = !0, s.detail.originalEvent.type === "pointerdown" && (u.current = !0));
          const c = s.target;
          ((h = a.triggerRef.current) == null ? void 0 : h.contains(c)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && u.current && s.preventDefault();
        }
      }
    );
  }
), vv = A.forwardRef(
  (t, r) => {
    const { __scopeDialog: a, trapFocus: i, onOpenAutoFocus: u, onCloseAutoFocus: s, ...c } = t, d = kn(nl, a), m = A.useRef(null), h = It(r, m);
    return kk(), /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
      /* @__PURE__ */ _.jsx(
        J0,
        {
          asChild: !0,
          loop: !0,
          trapped: i,
          onMountAutoFocus: u,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ _.jsx(
            Z0,
            {
              role: "dialog",
              id: d.contentId,
              "aria-describedby": d.descriptionId,
              "aria-labelledby": d.titleId,
              "data-state": od(d.open),
              ...c,
              ref: h,
              onDismiss: () => d.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
        /* @__PURE__ */ _.jsx(v3, { titleId: d.titleId }),
        /* @__PURE__ */ _.jsx(x3, { contentRef: m, descriptionId: d.descriptionId })
      ] })
    ] });
  }
), id = "DialogTitle", bv = A.forwardRef(
  (t, r) => {
    const { __scopeDialog: a, ...i } = t, u = kn(id, a);
    return /* @__PURE__ */ _.jsx(_t.h2, { id: u.titleId, ...i, ref: r });
  }
);
bv.displayName = id;
var xv = "DialogDescription", wv = A.forwardRef(
  (t, r) => {
    const { __scopeDialog: a, ...i } = t, u = kn(xv, a);
    return /* @__PURE__ */ _.jsx(_t.p, { id: u.descriptionId, ...i, ref: r });
  }
);
wv.displayName = xv;
var Sv = "DialogClose", Ev = A.forwardRef(
  (t, r) => {
    const { __scopeDialog: a, ...i } = t, u = kn(Sv, a);
    return /* @__PURE__ */ _.jsx(
      _t.button,
      {
        type: "button",
        ...i,
        ref: r,
        onClick: Mt(t.onClick, () => u.onOpenChange(!1))
      }
    );
  }
);
Ev.displayName = Sv;
function od(t) {
  return t ? "open" : "closed";
}
var kv = "DialogTitleWarning", [y3, Cv] = VE(kv, {
  contentName: nl,
  titleName: id,
  docsSlug: "dialog"
}), v3 = ({ titleId: t }) => {
  const r = Cv(kv), a = `\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;
  return A.useEffect(() => {
    t && (document.getElementById(t) || console.error(a));
  }, [a, t]), null;
}, b3 = "DialogDescriptionWarning", x3 = ({ contentRef: t, descriptionId: r }) => {
  const i = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Cv(b3).contentName}}.`;
  return A.useEffect(() => {
    var s;
    const u = (s = t.current) == null ? void 0 : s.getAttribute("aria-describedby");
    r && u && (document.getElementById(r) || console.warn(i));
  }, [i, t, r]), null;
}, w3 = fv, S3 = hv, E3 = mv, k3 = gv, C3 = yv, A3 = bv, T3 = wv, Av = Ev, Tv = "AlertDialog", [_3, X6] = cu(Tv, [
  cv
]), tr = cv(), _v = (t) => {
  const { __scopeAlertDialog: r, ...a } = t, i = tr(r);
  return /* @__PURE__ */ _.jsx(w3, { ...i, ...a, modal: !0 });
};
_v.displayName = Tv;
var R3 = "AlertDialogTrigger", D3 = A.forwardRef(
  (t, r) => {
    const { __scopeAlertDialog: a, ...i } = t, u = tr(a);
    return /* @__PURE__ */ _.jsx(S3, { ...u, ...i, ref: r });
  }
);
D3.displayName = R3;
var N3 = "AlertDialogPortal", Rv = (t) => {
  const { __scopeAlertDialog: r, ...a } = t, i = tr(r);
  return /* @__PURE__ */ _.jsx(E3, { ...i, ...a });
};
Rv.displayName = N3;
var O3 = "AlertDialogOverlay", Dv = A.forwardRef(
  (t, r) => {
    const { __scopeAlertDialog: a, ...i } = t, u = tr(a);
    return /* @__PURE__ */ _.jsx(k3, { ...u, ...i, ref: r });
  }
);
Dv.displayName = O3;
var ea = "AlertDialogContent", [z3, M3] = _3(ea), L3 = /* @__PURE__ */ WE("AlertDialogContent"), Nv = A.forwardRef(
  (t, r) => {
    const { __scopeAlertDialog: a, children: i, ...u } = t, s = tr(a), c = A.useRef(null), d = It(r, c), m = A.useRef(null);
    return /* @__PURE__ */ _.jsx(
      y3,
      {
        contentName: ea,
        titleName: Ov,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ _.jsx(z3, { scope: a, cancelRef: m, children: /* @__PURE__ */ _.jsxs(
          C3,
          {
            role: "alertdialog",
            ...s,
            ...u,
            ref: d,
            onOpenAutoFocus: Mt(u.onOpenAutoFocus, (h) => {
              var g;
              h.preventDefault(), (g = m.current) == null || g.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (h) => h.preventDefault(),
            onInteractOutside: (h) => h.preventDefault(),
            children: [
              /* @__PURE__ */ _.jsx(L3, { children: i }),
              /* @__PURE__ */ _.jsx(U3, { contentRef: c })
            ]
          }
        ) })
      }
    );
  }
);
Nv.displayName = ea;
var Ov = "AlertDialogTitle", zv = A.forwardRef(
  (t, r) => {
    const { __scopeAlertDialog: a, ...i } = t, u = tr(a);
    return /* @__PURE__ */ _.jsx(A3, { ...u, ...i, ref: r });
  }
);
zv.displayName = Ov;
var Mv = "AlertDialogDescription", Lv = A.forwardRef((t, r) => {
  const { __scopeAlertDialog: a, ...i } = t, u = tr(a);
  return /* @__PURE__ */ _.jsx(T3, { ...u, ...i, ref: r });
});
Lv.displayName = Mv;
var j3 = "AlertDialogAction", jv = A.forwardRef(
  (t, r) => {
    const { __scopeAlertDialog: a, ...i } = t, u = tr(a);
    return /* @__PURE__ */ _.jsx(Av, { ...u, ...i, ref: r });
  }
);
jv.displayName = j3;
var Uv = "AlertDialogCancel", Bv = A.forwardRef(
  (t, r) => {
    const { __scopeAlertDialog: a, ...i } = t, { cancelRef: u } = M3(Uv, a), s = tr(a), c = It(r, u);
    return /* @__PURE__ */ _.jsx(Av, { ...s, ...i, ref: c });
  }
);
Bv.displayName = Uv;
var U3 = ({ contentRef: t }) => {
  const r = `\`${ea}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${ea}\` by passing a \`${Mv}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${ea}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return A.useEffect(() => {
    var i;
    document.getElementById(
      (i = t.current) == null ? void 0 : i.getAttribute("aria-describedby")
    ) || console.warn(r);
  }, [r, t]), null;
}, B3 = _v, I3 = Rv, Iv = Dv, Hv = Nv, qv = jv, Vv = Bv, Yv = zv, Pv = Lv;
const fy = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, dy = M0, H3 = (t, r) => (a) => {
  var i;
  if ((r == null ? void 0 : r.variants) == null) return dy(t, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: u, defaultVariants: s } = r, c = Object.keys(u).map((h) => {
    const g = a == null ? void 0 : a[h], y = s == null ? void 0 : s[h];
    if (g === null) return null;
    const b = fy(g) || fy(y);
    return u[h][b];
  }), d = a && Object.entries(a).reduce((h, g) => {
    let [y, b] = g;
    return b === void 0 || (h[y] = b), h;
  }, {}), m = r == null || (i = r.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((h, g) => {
    let { class: y, className: b, ...x } = g;
    return Object.entries(x).every((k) => {
      let [C, z] = k;
      return Array.isArray(z) ? z.includes({
        ...s,
        ...d
      }[C]) : {
        ...s,
        ...d
      }[C] === z;
    }) ? [
      ...h,
      y,
      b
    ] : h;
  }, []);
  return dy(t, c, m, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, Fv = H3(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "bg-background",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "flex justify-start rounded-md mb-2 text-[#44464F]",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), $l = A.forwardRef(
  ({ className: t, variant: r, size: a, asChild: i = !1, ...u }, s) => {
    const c = i ? JE : "button";
    return /* @__PURE__ */ _.jsx(c, { ref: s, className: at(Fv({ variant: r, size: a, className: t })), ...u });
  }
);
$l.displayName = "Button";
const q3 = B3, V3 = I3, Gv = A.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ _.jsx(
  Iv,
  {
    className: at(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...r,
    ref: a
  }
));
Gv.displayName = Iv.displayName;
const Xv = A.forwardRef(
  ({ className: t, ...r }, a) => {
    var u;
    const i = ((u = document.querySelector("chat-bot")) == null ? void 0 : u.shadowRoot) ?? void 0;
    return /* @__PURE__ */ _.jsxs(V3, { container: i, children: [
      /* @__PURE__ */ _.jsx(Gv, {}),
      /* @__PURE__ */ _.jsx(
        Hv,
        {
          ref: a,
          className: at(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            t
          ),
          ...r
        }
      )
    ] });
  }
);
Xv.displayName = Hv.displayName;
function Qv({
  className: t,
  ...r
}) {
  return /* @__PURE__ */ _.jsx(
    "div",
    {
      className: at(
        "flex flex-col space-y-2 text-center sm:text-left",
        t
      ),
      ...r
    }
  );
}
Qv.displayName = "AlertDialogHeader";
function Zv({
  className: t,
  ...r
}) {
  return /* @__PURE__ */ _.jsx(
    "div",
    {
      className: at(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        t
      ),
      ...r
    }
  );
}
Zv.displayName = "AlertDialogFooter";
const qf = A.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ _.jsx(
  Yv,
  {
    ref: a,
    className: at("text-title-large modal-text", t),
    ...r
  }
));
qf.displayName = Yv.displayName;
const Y3 = A.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ _.jsx(
  Pv,
  {
    ref: a,
    className: at("text-on-surface-variant modal-text text-sm", t),
    ...r
  }
));
Y3.displayName = Pv.displayName;
const Kv = A.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ _.jsx(
  qv,
  {
    ref: a,
    className: at(
      Fv({ variant: "outline" }),
      "action-button modal-button",
      t
    ),
    ...r
  }
));
Kv.displayName = qv.displayName;
const Jv = A.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ _.jsx(
  Vv,
  {
    ref: a,
    className: at("cancel-button cursor-pointer modal-button mt-2 sm:mt-0", t),
    ...r
  }
));
Jv.displayName = Vv.displayName;
function P3({
  open: t,
  title: r,
  confirmText: a,
  cancelText: i,
  onConfirm: u,
  onCancel: s,
  confirmDisabled: c = !1,
  children: d,
  description: m,
  isBold: h
}) {
  return /* @__PURE__ */ _.jsx(q3, { open: t, children: /* @__PURE__ */ _.jsxs(Xv, { className: "block bg-black p-0", children: [
    /* @__PURE__ */ _.jsx(
      "button",
      {
        className: "absolute right-6 top-6 text-white hover:text-gray-400",
        type: "button",
        onClick: s,
        children: /* @__PURE__ */ _.jsx(O0, { size: 20 })
      }
    ),
    /* @__PURE__ */ _.jsx(Qv, { className: "rounded-t-lg p-5", children: r ? /* @__PURE__ */ _.jsx(qf, { children: r }) : /* @__PURE__ */ _.jsx("span", { className: "sr-only", children: /* @__PURE__ */ _.jsx(qf, { children: "Dialogo de confirmación" }) }) }),
    m && /* @__PURE__ */ _.jsx("p", { className: at("p-6 text-white", h && "text-title font-bold"), children: m }),
    d && /* @__PURE__ */ _.jsx("div", { className: "border-outline-variant border-y py-5", children: d }),
    /* @__PURE__ */ _.jsxs(Zv, { className: "rounded-b-lg p-5", children: [
      i && /* @__PURE__ */ _.jsx(Jv, { className: "border-none text-primary", onClick: s, children: i }),
      /* @__PURE__ */ _.jsx(Kv, { disabled: c, onClick: u, children: a })
    ] })
  ] }) });
}
const ud = ({ variant: t, className: r }) => /* @__PURE__ */ _.jsx("div", { className: `relative flex items-center ${r}`, children: /* @__PURE__ */ _.jsxs("svg", { className: "h-full w-full", viewBox: "0 0 90 90", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ _.jsx(
    "circle",
    {
      cx: "45",
      cy: "45",
      fill: `url(#${t === "dark" ? "darkGradient" : "lightGradient"})`,
      r: "45"
    }
  ),
  /* @__PURE__ */ _.jsx("g", { clipPath: "url(#clip0_508_8187)", children: /* @__PURE__ */ _.jsx(
    "path",
    {
      clipRule: "evenodd",
      d: "M47.641 28.2752C48.3967 35.7128 53.5692 41.58 60.1259 42.4372L60.8721 42.5347C61.142 42.57 61.142 43.0146 60.8721 43.0499L60.1259 43.1475C53.5692 44.0047 48.3967 49.8719 47.641 57.3094L47.555 58.1558C47.5239 58.462 47.132 58.462 47.1009 58.1558L47.0149 57.3094C46.2591 49.8719 41.0867 44.0047 34.53 43.1475L33.7838 43.0499C33.5139 43.0146 33.5139 42.57 33.7838 42.5347L34.5299 42.4372C41.0867 41.58 46.2591 35.7127 47.0148 28.2752L47.1008 27.4288C47.132 27.1227 47.5239 27.1227 47.555 27.4288L47.641 28.2752ZM33.0598 47.2928C33.3895 50.538 35.6464 53.098 38.5072 53.472L38.8328 53.5146C38.9505 53.53 38.9506 53.724 38.8328 53.7394L38.5072 53.782C35.6463 54.156 33.3895 56.716 33.0597 59.9612L33.0222 60.3305C33.0087 60.4641 32.8376 60.4641 32.8241 60.3305L32.7865 59.9612C32.4568 56.716 30.1999 54.156 27.3391 53.782L27.0135 53.7394C26.8957 53.724 26.8957 53.53 27.0135 53.5146L27.339 53.472C30.1999 53.098 32.4568 50.538 32.7865 47.2928L32.8241 46.9235C32.8376 46.7899 33.0087 46.7899 33.0222 46.9235L33.0598 47.2928ZM60.5468 32.4388C58.7477 32.2035 57.3284 30.5936 57.1211 28.5529L57.0975 28.3206C57.0889 28.2366 56.9814 28.2366 56.9729 28.3206L56.9493 28.5529C56.7419 30.5936 55.3226 32.2036 53.5235 32.4388L53.3188 32.4655C53.2448 32.4752 53.2448 32.5972 53.3188 32.6069L53.5235 32.6337C55.3227 32.8689 56.7419 34.4788 56.9493 36.5196L56.9729 36.7518C56.9814 36.8358 57.0889 36.8358 57.0975 36.7518L57.1211 36.5196C57.3284 34.4788 58.7477 32.8689 60.5468 32.6337L60.7515 32.6069C60.8256 32.5972 60.8256 32.4752 60.7515 32.4655L60.5468 32.4388ZM41.486 55.7362C41.6238 57.093 42.5674 58.1633 43.7635 58.3196L43.8996 58.3374C43.9488 58.3439 43.9488 58.425 43.8996 58.4314L43.7635 58.4492C42.5674 58.6056 41.6238 59.6759 41.486 61.0326L41.4703 61.187C41.4646 61.2429 41.3931 61.2429 41.3874 61.187L41.3717 61.0326C41.2339 59.6759 40.2903 58.6056 39.0943 58.4492L38.9581 58.4314C38.9089 58.425 38.9089 58.3439 38.9581 58.3374L39.0942 58.3196C40.2903 58.1633 41.2339 57.093 41.3717 55.7362L41.3874 55.5818C41.3931 55.526 41.4646 55.526 41.4703 55.5818L41.486 55.7362Z",
      fill: `url(#${t === "dark" ? "iconDarkGradient" : "iconLightGradient"})`,
      fillRule: "evenodd"
    }
  ) }),
  /* @__PURE__ */ _.jsxs("defs", { children: [
    /* @__PURE__ */ _.jsxs(
      "linearGradient",
      {
        gradientTransform: "rotate(146deg)",
        gradientUnits: "userSpaceOnUse",
        id: "lightGradient",
        children: [
          /* @__PURE__ */ _.jsx("stop", { offset: "15.06%", stopColor: "#FFF" }),
          /* @__PURE__ */ _.jsx("stop", { offset: "85.79%", stopColor: "#D9E2FF" })
        ]
      }
    ),
    /* @__PURE__ */ _.jsxs(
      "linearGradient",
      {
        gradientTransform: "rotate(214deg)",
        gradientUnits: "userSpaceOnUse",
        id: "darkGradient",
        children: [
          /* @__PURE__ */ _.jsx("stop", { offset: "15.06%", stopColor: "#152E60" }),
          /* @__PURE__ */ _.jsx("stop", { offset: "85.79%", stopColor: "#2F4578" })
        ]
      }
    ),
    /* @__PURE__ */ _.jsxs(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: "iconLightGradient",
        x1: "32",
        x2: "68",
        y1: "69",
        y2: "36",
        children: [
          /* @__PURE__ */ _.jsx("stop", { offset: "0%", stopColor: "#152E60" }),
          /* @__PURE__ */ _.jsx("stop", { offset: "100%", stopColor: "#2F4578" })
        ]
      }
    ),
    /* @__PURE__ */ _.jsxs(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: "iconDarkGradient",
        x1: "32",
        x2: "68",
        y1: "69",
        y2: "36",
        children: [
          /* @__PURE__ */ _.jsx("stop", { offset: "0%", stopColor: "#B0C6FF" }),
          /* @__PURE__ */ _.jsx("stop", { offset: "95%", stopColor: "#D9E2FF" })
        ]
      }
    ),
    /* @__PURE__ */ _.jsx("clipPath", { id: "clip0_508_8187", children: /* @__PURE__ */ _.jsx("rect", { fill: "white", height: "36", width: "36", x: "26", y: "26.2151" }) })
  ] })
] }) }), $v = A.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ _.jsx(
    "div",
    {
      ref: a,
      className: at("absolute right-0 top-0 h-screen shadow-sm", t),
      ...r
    }
  )
);
$v.displayName = "Card";
const Wv = A.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ _.jsx("div", { ref: a, className: at("flex flex-col space-y-1.5", t), ...r })
);
Wv.displayName = "CardHeader";
const eb = A.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ _.jsx(
    "h3",
    {
      ref: a,
      className: at("text-2xl font-semibold leading-none tracking-tight", t),
      ...r,
      children: r.children
    }
  )
);
eb.displayName = "CardTitle";
const F3 = A.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ _.jsx("p", { ref: a, className: at("text-sm text-muted-foreground", t), ...r }));
F3.displayName = "CardDescription";
const tb = A.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ _.jsx("div", { ref: a, className: at("pt-0", t), ...r })
);
tb.displayName = "CardContent";
const nb = A.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ _.jsx(
    "div",
    {
      ref: a,
      className: at(
        "card-footer flex items-center p-6 pt-0",
        "min-h-[110px] justify-between rounded-tl-[12px] rounded-tr-[12px] p-[16px]",
        "shadow-[0_-2px_4px_rgba(0,0,0,0.1)]",
        t
      ),
      ...r
    }
  )
);
nb.displayName = "CardFooter";
const G3 = ({ className: t }) => /* @__PURE__ */ _.jsx("div", { className: `relative flex items-center text-lg font-medium ${t}`, children: /* @__PURE__ */ _.jsxs(
  "svg",
  {
    fill: "none",
    height: "32",
    viewBox: "0 0 32 32",
    width: "32",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ _.jsx(
        "path",
        {
          clipRule: "evenodd",
          d: "M19.2375 1.83146C19.9092 8.44259 24.5069 13.6579 30.3352 14.4199L30.9984 14.5066C31.2383 14.5379 31.2383 14.9331 30.9984 14.9645L30.3352 15.0512C24.5069 15.8132 19.9092 21.0285 19.2375 27.6397L19.161 28.392C19.1334 28.6641 18.785 28.6641 18.7573 28.392L18.6809 27.6396C18.0091 21.0285 13.4114 15.8132 7.58323 15.0512L6.91995 14.9645C6.68005 14.9331 6.68005 14.5379 6.91995 14.5066L7.58318 14.4199C13.4114 13.6579 18.0091 8.44257 18.6809 1.83144L18.7573 1.07909C18.785 0.80697 19.1334 0.80697 19.161 1.07909L19.2375 1.83146ZM6.27572 18.7359C6.56882 21.6205 8.57492 23.896 11.1179 24.2285L11.4073 24.2664C11.512 24.28 11.512 24.4525 11.4073 24.4662L11.1179 24.504C8.5749 24.8365 6.56881 27.1121 6.27571 29.9967L6.24235 30.3249C6.23029 30.4436 6.07828 30.4436 6.06621 30.3249L6.03285 29.9967C5.73975 27.1121 3.73366 24.8365 1.19065 24.504L0.901255 24.4662C0.796587 24.4525 0.796587 24.2801 0.901255 24.2664L1.19064 24.2285C3.73366 23.896 5.73976 21.6205 6.03286 18.7359L6.06622 18.4076C6.07828 18.2889 6.23029 18.2889 6.24236 18.4076L6.27572 18.7359ZM30.7092 5.53225C29.11 5.32317 27.8484 3.89214 27.6641 2.07812L27.6431 1.87168C27.6355 1.79701 27.5399 1.79701 27.5323 1.87168L27.5113 2.07812C27.327 3.89215 26.0654 5.32318 24.4662 5.53226L24.2843 5.55605C24.2184 5.56465 24.2184 5.6731 24.2843 5.6817L24.4663 5.70549C26.0655 5.91457 27.327 7.34561 27.5113 9.15963L27.5323 9.36606C27.5399 9.44073 27.6355 9.44073 27.6431 9.36606L27.6641 9.15963C27.8484 7.34561 29.1099 5.91457 30.7091 5.70549L30.8911 5.6817C30.957 5.6731 30.957 5.56465 30.8911 5.55605L30.7092 5.53225ZM13.7661 26.2411C13.8886 27.4471 14.7273 28.3985 15.7905 28.5375L15.9115 28.5533C15.9552 28.559 15.9552 28.6311 15.9115 28.6368L15.7905 28.6526C14.7273 28.7916 13.8886 29.743 13.7661 30.949L13.7521 31.0863C13.7471 31.1359 13.6835 31.1359 13.6785 31.0863L13.6645 30.949C13.542 29.743 12.7033 28.7916 11.6401 28.6526L11.5191 28.6368C11.4753 28.6311 11.4753 28.559 11.5191 28.5533L11.6401 28.5375C12.7032 28.3985 13.542 27.4471 13.6645 26.2411L13.6785 26.1038C13.6835 26.0542 13.7471 26.0542 13.7521 26.1038L13.7661 26.2411Z",
          fill: "url(#paint0_linear_1836_32707)",
          fillRule: "evenodd"
        }
      ),
      /* @__PURE__ */ _.jsx("defs", { children: /* @__PURE__ */ _.jsxs(
        "linearGradient",
        {
          gradientUnits: "userSpaceOnUse",
          id: "paint0_linear_1836_32707",
          x1: "5.66143",
          x2: "36.8183",
          y1: "38.4039",
          y2: "9.32016",
          children: [
            /* @__PURE__ */ _.jsx("stop", { stopColor: "#B0C6FF" }),
            /* @__PURE__ */ _.jsx("stop", { offset: "1", stopColor: "#D9E2FF" })
          ]
        }
      ) })
    ]
  }
) });
var X3 = A.createContext(void 0);
function Q3(t) {
  const r = A.useContext(X3);
  return t || r || "ltr";
}
function Z3(t, [r, a]) {
  return Math.min(a, Math.max(r, t));
}
function K3(t, r) {
  return A.useReducer((a, i) => r[a][i] ?? a, t);
}
var sd = "ScrollArea", [rb, Q6] = cu(sd), [J3, vn] = rb(sd), lb = A.forwardRef(
  (t, r) => {
    const {
      __scopeScrollArea: a,
      type: i = "hover",
      dir: u,
      scrollHideDelay: s = 600,
      ...c
    } = t, [d, m] = A.useState(null), [h, g] = A.useState(null), [y, b] = A.useState(null), [x, k] = A.useState(null), [C, z] = A.useState(null), [T, Y] = A.useState(0), [j, Q] = A.useState(0), [I, R] = A.useState(!1), [F, q] = A.useState(!1), Z = It(r, (ne) => m(ne)), O = Q3(u);
    return /* @__PURE__ */ _.jsx(
      J3,
      {
        scope: a,
        type: i,
        dir: O,
        scrollHideDelay: s,
        scrollArea: d,
        viewport: h,
        onViewportChange: g,
        content: y,
        onContentChange: b,
        scrollbarX: x,
        onScrollbarXChange: k,
        scrollbarXEnabled: I,
        onScrollbarXEnabledChange: R,
        scrollbarY: C,
        onScrollbarYChange: z,
        scrollbarYEnabled: F,
        onScrollbarYEnabledChange: q,
        onCornerWidthChange: Y,
        onCornerHeightChange: Q,
        children: /* @__PURE__ */ _.jsx(
          _t.div,
          {
            dir: O,
            ...c,
            ref: Z,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": T + "px",
              "--radix-scroll-area-corner-height": j + "px",
              ...t.style
            }
          }
        )
      }
    );
  }
);
lb.displayName = sd;
var ab = "ScrollAreaViewport", ib = A.forwardRef(
  (t, r) => {
    const { __scopeScrollArea: a, children: i, nonce: u, ...s } = t, c = vn(ab, a), d = A.useRef(null), m = It(r, d, c.onViewportChange);
    return /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
      /* @__PURE__ */ _.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: u
        }
      ),
      /* @__PURE__ */ _.jsx(
        _t.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...s,
          ref: m,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: c.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: c.scrollbarYEnabled ? "scroll" : "hidden",
            ...t.style
          },
          children: /* @__PURE__ */ _.jsx("div", { ref: c.onContentChange, style: { minWidth: "100%", display: "table" }, children: i })
        }
      )
    ] });
  }
);
ib.displayName = ab;
var Mn = "ScrollAreaScrollbar", cd = A.forwardRef(
  (t, r) => {
    const { forceMount: a, ...i } = t, u = vn(Mn, t.__scopeScrollArea), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: c } = u, d = t.orientation === "horizontal";
    return A.useEffect(() => (d ? s(!0) : c(!0), () => {
      d ? s(!1) : c(!1);
    }), [d, s, c]), u.type === "hover" ? /* @__PURE__ */ _.jsx($3, { ...i, ref: r, forceMount: a }) : u.type === "scroll" ? /* @__PURE__ */ _.jsx(W3, { ...i, ref: r, forceMount: a }) : u.type === "auto" ? /* @__PURE__ */ _.jsx(ob, { ...i, ref: r, forceMount: a }) : u.type === "always" ? /* @__PURE__ */ _.jsx(fd, { ...i, ref: r }) : null;
  }
);
cd.displayName = Mn;
var $3 = A.forwardRef((t, r) => {
  const { forceMount: a, ...i } = t, u = vn(Mn, t.__scopeScrollArea), [s, c] = A.useState(!1);
  return A.useEffect(() => {
    const d = u.scrollArea;
    let m = 0;
    if (d) {
      const h = () => {
        window.clearTimeout(m), c(!0);
      }, g = () => {
        m = window.setTimeout(() => c(!1), u.scrollHideDelay);
      };
      return d.addEventListener("pointerenter", h), d.addEventListener("pointerleave", g), () => {
        window.clearTimeout(m), d.removeEventListener("pointerenter", h), d.removeEventListener("pointerleave", g);
      };
    }
  }, [u.scrollArea, u.scrollHideDelay]), /* @__PURE__ */ _.jsx(Mr, { present: a || s, children: /* @__PURE__ */ _.jsx(
    ob,
    {
      "data-state": s ? "visible" : "hidden",
      ...i,
      ref: r
    }
  ) });
}), W3 = A.forwardRef((t, r) => {
  const { forceMount: a, ...i } = t, u = vn(Mn, t.__scopeScrollArea), s = t.orientation === "horizontal", c = pu(() => m("SCROLL_END"), 100), [d, m] = K3("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return A.useEffect(() => {
    if (d === "idle") {
      const h = window.setTimeout(() => m("HIDE"), u.scrollHideDelay);
      return () => window.clearTimeout(h);
    }
  }, [d, u.scrollHideDelay, m]), A.useEffect(() => {
    const h = u.viewport, g = s ? "scrollLeft" : "scrollTop";
    if (h) {
      let y = h[g];
      const b = () => {
        const x = h[g];
        y !== x && (m("SCROLL"), c()), y = x;
      };
      return h.addEventListener("scroll", b), () => h.removeEventListener("scroll", b);
    }
  }, [u.viewport, s, m, c]), /* @__PURE__ */ _.jsx(Mr, { present: a || d !== "hidden", children: /* @__PURE__ */ _.jsx(
    fd,
    {
      "data-state": d === "hidden" ? "hidden" : "visible",
      ...i,
      ref: r,
      onPointerEnter: Mt(t.onPointerEnter, () => m("POINTER_ENTER")),
      onPointerLeave: Mt(t.onPointerLeave, () => m("POINTER_LEAVE"))
    }
  ) });
}), ob = A.forwardRef((t, r) => {
  const a = vn(Mn, t.__scopeScrollArea), { forceMount: i, ...u } = t, [s, c] = A.useState(!1), d = t.orientation === "horizontal", m = pu(() => {
    if (a.viewport) {
      const h = a.viewport.offsetWidth < a.viewport.scrollWidth, g = a.viewport.offsetHeight < a.viewport.scrollHeight;
      c(d ? h : g);
    }
  }, 10);
  return ra(a.viewport, m), ra(a.content, m), /* @__PURE__ */ _.jsx(Mr, { present: i || s, children: /* @__PURE__ */ _.jsx(
    fd,
    {
      "data-state": s ? "visible" : "hidden",
      ...u,
      ref: r
    }
  ) });
}), fd = A.forwardRef((t, r) => {
  const { orientation: a = "vertical", ...i } = t, u = vn(Mn, t.__scopeScrollArea), s = A.useRef(null), c = A.useRef(0), [d, m] = A.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), h = db(d.viewport, d.content), g = {
    ...i,
    sizes: d,
    onSizesChange: m,
    hasThumb: h > 0 && h < 1,
    onThumbChange: (b) => s.current = b,
    onThumbPointerUp: () => c.current = 0,
    onThumbPointerDown: (b) => c.current = b
  };
  function y(b, x) {
    return aC(b, c.current, d, x);
  }
  return a === "horizontal" ? /* @__PURE__ */ _.jsx(
    eC,
    {
      ...g,
      ref: r,
      onThumbPositionChange: () => {
        if (u.viewport && s.current) {
          const b = u.viewport.scrollLeft, x = hy(b, d, u.dir);
          s.current.style.transform = `translate3d(${x}px, 0, 0)`;
        }
      },
      onWheelScroll: (b) => {
        u.viewport && (u.viewport.scrollLeft = b);
      },
      onDragScroll: (b) => {
        u.viewport && (u.viewport.scrollLeft = y(b, u.dir));
      }
    }
  ) : a === "vertical" ? /* @__PURE__ */ _.jsx(
    tC,
    {
      ...g,
      ref: r,
      onThumbPositionChange: () => {
        if (u.viewport && s.current) {
          const b = u.viewport.scrollTop, x = hy(b, d);
          s.current.style.transform = `translate3d(0, ${x}px, 0)`;
        }
      },
      onWheelScroll: (b) => {
        u.viewport && (u.viewport.scrollTop = b);
      },
      onDragScroll: (b) => {
        u.viewport && (u.viewport.scrollTop = y(b));
      }
    }
  ) : null;
}), eC = A.forwardRef((t, r) => {
  const { sizes: a, onSizesChange: i, ...u } = t, s = vn(Mn, t.__scopeScrollArea), [c, d] = A.useState(), m = A.useRef(null), h = It(r, m, s.onScrollbarXChange);
  return A.useEffect(() => {
    m.current && d(getComputedStyle(m.current));
  }, [m]), /* @__PURE__ */ _.jsx(
    sb,
    {
      "data-orientation": "horizontal",
      ...u,
      ref: h,
      sizes: a,
      style: {
        bottom: 0,
        left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": hu(a) + "px",
        ...t.style
      },
      onThumbPointerDown: (g) => t.onThumbPointerDown(g.x),
      onDragScroll: (g) => t.onDragScroll(g.x),
      onWheelScroll: (g, y) => {
        if (s.viewport) {
          const b = s.viewport.scrollLeft + g.deltaX;
          t.onWheelScroll(b), pb(b, y) && g.preventDefault();
        }
      },
      onResize: () => {
        m.current && s.viewport && c && i({
          content: s.viewport.scrollWidth,
          viewport: s.viewport.offsetWidth,
          scrollbar: {
            size: m.current.clientWidth,
            paddingStart: ru(c.paddingLeft),
            paddingEnd: ru(c.paddingRight)
          }
        });
      }
    }
  );
}), tC = A.forwardRef((t, r) => {
  const { sizes: a, onSizesChange: i, ...u } = t, s = vn(Mn, t.__scopeScrollArea), [c, d] = A.useState(), m = A.useRef(null), h = It(r, m, s.onScrollbarYChange);
  return A.useEffect(() => {
    m.current && d(getComputedStyle(m.current));
  }, [m]), /* @__PURE__ */ _.jsx(
    sb,
    {
      "data-orientation": "vertical",
      ...u,
      ref: h,
      sizes: a,
      style: {
        top: 0,
        right: s.dir === "ltr" ? 0 : void 0,
        left: s.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": hu(a) + "px",
        ...t.style
      },
      onThumbPointerDown: (g) => t.onThumbPointerDown(g.y),
      onDragScroll: (g) => t.onDragScroll(g.y),
      onWheelScroll: (g, y) => {
        if (s.viewport) {
          const b = s.viewport.scrollTop + g.deltaY;
          t.onWheelScroll(b), pb(b, y) && g.preventDefault();
        }
      },
      onResize: () => {
        m.current && s.viewport && c && i({
          content: s.viewport.scrollHeight,
          viewport: s.viewport.offsetHeight,
          scrollbar: {
            size: m.current.clientHeight,
            paddingStart: ru(c.paddingTop),
            paddingEnd: ru(c.paddingBottom)
          }
        });
      }
    }
  );
}), [nC, ub] = rb(Mn), sb = A.forwardRef((t, r) => {
  const {
    __scopeScrollArea: a,
    sizes: i,
    hasThumb: u,
    onThumbChange: s,
    onThumbPointerUp: c,
    onThumbPointerDown: d,
    onThumbPositionChange: m,
    onDragScroll: h,
    onWheelScroll: g,
    onResize: y,
    ...b
  } = t, x = vn(Mn, a), [k, C] = A.useState(null), z = It(r, (Z) => C(Z)), T = A.useRef(null), Y = A.useRef(""), j = x.viewport, Q = i.content - i.viewport, I = rn(g), R = rn(m), F = pu(y, 10);
  function q(Z) {
    if (T.current) {
      const O = Z.clientX - T.current.left, ne = Z.clientY - T.current.top;
      h({ x: O, y: ne });
    }
  }
  return A.useEffect(() => {
    const Z = (O) => {
      const ne = O.target;
      (k == null ? void 0 : k.contains(ne)) && I(O, Q);
    };
    return document.addEventListener("wheel", Z, { passive: !1 }), () => document.removeEventListener("wheel", Z, { passive: !1 });
  }, [j, k, Q, I]), A.useEffect(R, [i, R]), ra(k, F), ra(x.content, F), /* @__PURE__ */ _.jsx(
    nC,
    {
      scope: a,
      scrollbar: k,
      hasThumb: u,
      onThumbChange: rn(s),
      onThumbPointerUp: rn(c),
      onThumbPositionChange: R,
      onThumbPointerDown: rn(d),
      children: /* @__PURE__ */ _.jsx(
        _t.div,
        {
          ...b,
          ref: z,
          style: { position: "absolute", ...b.style },
          onPointerDown: Mt(t.onPointerDown, (Z) => {
            Z.button === 0 && (Z.target.setPointerCapture(Z.pointerId), T.current = k.getBoundingClientRect(), Y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", x.viewport && (x.viewport.style.scrollBehavior = "auto"), q(Z));
          }),
          onPointerMove: Mt(t.onPointerMove, q),
          onPointerUp: Mt(t.onPointerUp, (Z) => {
            const O = Z.target;
            O.hasPointerCapture(Z.pointerId) && O.releasePointerCapture(Z.pointerId), document.body.style.webkitUserSelect = Y.current, x.viewport && (x.viewport.style.scrollBehavior = ""), T.current = null;
          })
        }
      )
    }
  );
}), nu = "ScrollAreaThumb", cb = A.forwardRef(
  (t, r) => {
    const { forceMount: a, ...i } = t, u = ub(nu, t.__scopeScrollArea);
    return /* @__PURE__ */ _.jsx(Mr, { present: a || u.hasThumb, children: /* @__PURE__ */ _.jsx(rC, { ref: r, ...i }) });
  }
), rC = A.forwardRef(
  (t, r) => {
    const { __scopeScrollArea: a, style: i, ...u } = t, s = vn(nu, a), c = ub(nu, a), { onThumbPositionChange: d } = c, m = It(
      r,
      (y) => c.onThumbChange(y)
    ), h = A.useRef(void 0), g = pu(() => {
      h.current && (h.current(), h.current = void 0);
    }, 100);
    return A.useEffect(() => {
      const y = s.viewport;
      if (y) {
        const b = () => {
          if (g(), !h.current) {
            const x = iC(y, d);
            h.current = x, d();
          }
        };
        return d(), y.addEventListener("scroll", b), () => y.removeEventListener("scroll", b);
      }
    }, [s.viewport, g, d]), /* @__PURE__ */ _.jsx(
      _t.div,
      {
        "data-state": c.hasThumb ? "visible" : "hidden",
        ...u,
        ref: m,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...i
        },
        onPointerDownCapture: Mt(t.onPointerDownCapture, (y) => {
          const x = y.target.getBoundingClientRect(), k = y.clientX - x.left, C = y.clientY - x.top;
          c.onThumbPointerDown({ x: k, y: C });
        }),
        onPointerUp: Mt(t.onPointerUp, c.onThumbPointerUp)
      }
    );
  }
);
cb.displayName = nu;
var dd = "ScrollAreaCorner", fb = A.forwardRef(
  (t, r) => {
    const a = vn(dd, t.__scopeScrollArea), i = !!(a.scrollbarX && a.scrollbarY);
    return a.type !== "scroll" && i ? /* @__PURE__ */ _.jsx(lC, { ...t, ref: r }) : null;
  }
);
fb.displayName = dd;
var lC = A.forwardRef((t, r) => {
  const { __scopeScrollArea: a, ...i } = t, u = vn(dd, a), [s, c] = A.useState(0), [d, m] = A.useState(0), h = !!(s && d);
  return ra(u.scrollbarX, () => {
    var y;
    const g = ((y = u.scrollbarX) == null ? void 0 : y.offsetHeight) || 0;
    u.onCornerHeightChange(g), m(g);
  }), ra(u.scrollbarY, () => {
    var y;
    const g = ((y = u.scrollbarY) == null ? void 0 : y.offsetWidth) || 0;
    u.onCornerWidthChange(g), c(g);
  }), h ? /* @__PURE__ */ _.jsx(
    _t.div,
    {
      ...i,
      ref: r,
      style: {
        width: s,
        height: d,
        position: "absolute",
        right: u.dir === "ltr" ? 0 : void 0,
        left: u.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...t.style
      }
    }
  ) : null;
});
function ru(t) {
  return t ? parseInt(t, 10) : 0;
}
function db(t, r) {
  const a = t / r;
  return isNaN(a) ? 0 : a;
}
function hu(t) {
  const r = db(t.viewport, t.content), a = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = (t.scrollbar.size - a) * r;
  return Math.max(i, 18);
}
function aC(t, r, a, i = "ltr") {
  const u = hu(a), s = u / 2, c = r || s, d = u - c, m = a.scrollbar.paddingStart + c, h = a.scrollbar.size - a.scrollbar.paddingEnd - d, g = a.content - a.viewport, y = i === "ltr" ? [0, g] : [g * -1, 0];
  return hb([m, h], y)(t);
}
function hy(t, r, a = "ltr") {
  const i = hu(r), u = r.scrollbar.paddingStart + r.scrollbar.paddingEnd, s = r.scrollbar.size - u, c = r.content - r.viewport, d = s - i, m = a === "ltr" ? [0, c] : [c * -1, 0], h = Z3(t, m);
  return hb([0, c], [0, d])(h);
}
function hb(t, r) {
  return (a) => {
    if (t[0] === t[1] || r[0] === r[1]) return r[0];
    const i = (r[1] - r[0]) / (t[1] - t[0]);
    return r[0] + i * (a - t[0]);
  };
}
function pb(t, r) {
  return t > 0 && t < r;
}
var iC = (t, r = () => {
}) => {
  let a = { left: t.scrollLeft, top: t.scrollTop }, i = 0;
  return function u() {
    const s = { left: t.scrollLeft, top: t.scrollTop }, c = a.left !== s.left, d = a.top !== s.top;
    (c || d) && r(), a = s, i = window.requestAnimationFrame(u);
  }(), () => window.cancelAnimationFrame(i);
};
function pu(t, r) {
  const a = rn(t), i = A.useRef(0);
  return A.useEffect(() => () => window.clearTimeout(i.current), []), A.useCallback(() => {
    window.clearTimeout(i.current), i.current = window.setTimeout(a, r);
  }, [a, r]);
}
function ra(t, r) {
  const a = rn(r);
  er(() => {
    let i = 0;
    if (t) {
      const u = new ResizeObserver(() => {
        cancelAnimationFrame(i), i = window.requestAnimationFrame(a);
      });
      return u.observe(t), () => {
        window.cancelAnimationFrame(i), u.unobserve(t);
      };
    }
  }, [t, a]);
}
var mb = lb, oC = ib, uC = fb;
const gb = A.forwardRef(({ className: t, orientation: r = "vertical", ...a }, i) => /* @__PURE__ */ _.jsx(
  cd,
  {
    ref: i,
    className: at(
      "flex touch-none select-none transition-colors",
      r === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      r === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      t
    ),
    orientation: r,
    ...a,
    children: /* @__PURE__ */ _.jsx(cb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
gb.displayName = cd.displayName;
const yb = A.forwardRef(({ className: t, children: r, ...a }, i) => /* @__PURE__ */ _.jsxs(
  mb,
  {
    ref: i,
    className: at("relative overflow-hidden", t),
    ...a,
    children: [
      /* @__PURE__ */ _.jsx(oC, { className: "h-full w-full rounded-[inherit]", children: r }),
      /* @__PURE__ */ _.jsx(gb, {}),
      /* @__PURE__ */ _.jsx(uC, {})
    ]
  }
));
yb.displayName = mb.displayName;
const vb = A.forwardRef(
  ({ className: t, value: r, maximized: a, ...i }, u) => {
    const s = A.useRef(null);
    return A.useEffect(() => {
      (() => {
        s.current && !a ? (s.current.style.height = "auto", s.current.style.height = `${s.current.scrollHeight}px`) : s.current && (s.current.style.height = "100vh");
      })();
    }, [r, a]), /* @__PURE__ */ _.jsx(
      "textarea",
      {
        ref: (c) => {
          s.current = c, typeof u == "function" ? u(c) : u && "current" in u && (u.current = c);
        },
        className: at(
          "flex w-full rounded-md bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          "transform rounded-[10px] bg-[#44464F] p-[12px] text-foreground",
          "font-roboto text-[#C5C6D0]",
          a ? "h-[100vh]" : "",
          "text-area resize-none leading-tight",
          t
        ),
        value: r,
        onInput: (c) => {
          a ? c.currentTarget.style.height = "100vh" : (c.currentTarget.style.height = "auto", c.currentTarget.style.height = `${c.currentTarget.scrollHeight}px`);
        },
        ...i
      }
    );
  }
);
vb.displayName = "Textarea";
function sC() {
  return S0.useSyncExternalStore(
    cC,
    () => !0,
    () => !1
  );
}
function cC() {
  return () => {
  };
}
var hd = "Avatar", [fC, Z6] = cu(hd), [dC, bb] = fC(hd), xb = A.forwardRef(
  (t, r) => {
    const { __scopeAvatar: a, ...i } = t, [u, s] = A.useState("idle");
    return /* @__PURE__ */ _.jsx(
      dC,
      {
        scope: a,
        imageLoadingStatus: u,
        onImageLoadingStatusChange: s,
        children: /* @__PURE__ */ _.jsx(_t.span, { ...i, ref: r })
      }
    );
  }
);
xb.displayName = hd;
var wb = "AvatarImage", Sb = A.forwardRef(
  (t, r) => {
    const { __scopeAvatar: a, src: i, onLoadingStatusChange: u = () => {
    }, ...s } = t, c = bb(wb, a), d = hC(i, s), m = rn((h) => {
      u(h), c.onImageLoadingStatusChange(h);
    });
    return er(() => {
      d !== "idle" && m(d);
    }, [d, m]), d === "loaded" ? /* @__PURE__ */ _.jsx(_t.img, { ...s, ref: r, src: i }) : null;
  }
);
Sb.displayName = wb;
var Eb = "AvatarFallback", kb = A.forwardRef(
  (t, r) => {
    const { __scopeAvatar: a, delayMs: i, ...u } = t, s = bb(Eb, a), [c, d] = A.useState(i === void 0);
    return A.useEffect(() => {
      if (i !== void 0) {
        const m = window.setTimeout(() => d(!0), i);
        return () => window.clearTimeout(m);
      }
    }, [i]), c && s.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ _.jsx(_t.span, { ...u, ref: r }) : null;
  }
);
kb.displayName = Eb;
function py(t, r) {
  return t ? r ? (t.src !== r && (t.src = r), t.complete && t.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function hC(t, { referrerPolicy: r, crossOrigin: a }) {
  const i = sC(), u = A.useRef(null), s = i ? (u.current || (u.current = new window.Image()), u.current) : null, [c, d] = A.useState(
    () => py(s, t)
  );
  return er(() => {
    d(py(s, t));
  }, [s, t]), er(() => {
    const m = (y) => () => {
      d(y);
    };
    if (!s) return;
    const h = m("loaded"), g = m("error");
    return s.addEventListener("load", h), s.addEventListener("error", g), r && (s.referrerPolicy = r), typeof a == "string" && (s.crossOrigin = a), () => {
      s.removeEventListener("load", h), s.removeEventListener("error", g);
    };
  }, [s, a, r]), c;
}
var Cb = xb, mu = Sb, Ab = kb;
const gu = A.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ _.jsx(
  Cb,
  {
    ref: a,
    className: at("relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full", t),
    ...r
  }
));
gu.displayName = Cb.displayName;
const Tb = A.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ _.jsx(
  mu,
  {
    ref: a,
    className: at("aspect-square h-full w-full", t),
    ...r
  }
));
Tb.displayName = mu.displayName;
const pC = A.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ _.jsx(
  mu,
  {
    ref: a,
    className: at("aspect-square h-full w-full", t),
    ...r
  }
));
pC.displayName = mu.displayName;
const _b = A.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ _.jsx(
  Ab,
  {
    ref: a,
    className: at("flex h-full w-full items-center justify-center rounded-full text-xs", t),
    ...r
  }
));
_b.displayName = Ab.displayName;
function mC({ content: t, setting: r }) {
  var a;
  return /* @__PURE__ */ _.jsxs("div", { className: "flex w-full flex-col items-end justify-end gap-3", children: [
    /* @__PURE__ */ _.jsxs(gu, { style: { background: "linear-gradient(37deg, #B0C6FF 13.27%, #D9E2FF 89.18%)" }, children: [
      /* @__PURE__ */ _.jsx(Tb, { alt: "user", src: (a = r == null ? void 0 : r.avatars) == null ? void 0 : a.user }),
      /* @__PURE__ */ _.jsx(_b, { className: "text-foreground", children: "L1" })
    ] }),
    /* @__PURE__ */ _.jsxs(
      "div",
      {
        className: "w-full rounded-lg p-4",
        style: {
          backgroundColor: "#44464F",
          color: "#C5C6D0"
        },
        children: [
          /* @__PURE__ */ _.jsx("p", { className: "font-roboto mt-1 text-[16px] text-sm font-bold leading-[24px] tracking-[0.15px]", children: (r == null ? void 0 : r.userName) || "Usuario" }),
          /* @__PURE__ */ _.jsx("p", { className: "break-words", children: t })
        ]
      }
    )
  ] });
}
function gC(t, r) {
  const a = {};
  return (t[t.length - 1] === "" ? [...t, ""] : t).join(
    (a.padRight ? " " : "") + "," + (a.padLeft === !1 ? "" : " ")
  ).trim();
}
const yC = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, vC = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, bC = {};
function my(t, r) {
  return (bC.jsx ? vC : yC).test(t);
}
const xC = /[ \t\n\f\r]/g;
function wC(t) {
  return typeof t == "object" ? t.type === "text" ? gy(t.value) : !1 : gy(t);
}
function gy(t) {
  return t.replace(xC, "") === "";
}
class Ei {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(r, a, i) {
    this.normal = a, this.property = r, i && (this.space = i);
  }
}
Ei.prototype.normal = {};
Ei.prototype.property = {};
Ei.prototype.space = void 0;
function Rb(t, r) {
  const a = {}, i = {};
  for (const u of t)
    Object.assign(a, u.property), Object.assign(i, u.normal);
  return new Ei(a, i, r);
}
function Vf(t) {
  return t.toLowerCase();
}
class Xt {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(r, a) {
    this.attribute = a, this.property = r;
  }
}
Xt.prototype.attribute = "";
Xt.prototype.booleanish = !1;
Xt.prototype.boolean = !1;
Xt.prototype.commaOrSpaceSeparated = !1;
Xt.prototype.commaSeparated = !1;
Xt.prototype.defined = !1;
Xt.prototype.mustUseProperty = !1;
Xt.prototype.number = !1;
Xt.prototype.overloadedBoolean = !1;
Xt.prototype.property = "";
Xt.prototype.spaceSeparated = !1;
Xt.prototype.space = void 0;
let SC = 0;
const Re = al(), ht = al(), Yf = al(), ie = al(), et = al(), ta = al(), nn = al();
function al() {
  return 2 ** ++SC;
}
const Pf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: Re,
  booleanish: ht,
  commaOrSpaceSeparated: nn,
  commaSeparated: ta,
  number: ie,
  overloadedBoolean: Yf,
  spaceSeparated: et
}, Symbol.toStringTag, { value: "Module" })), of = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Pf)
);
class pd extends Xt {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(r, a, i, u) {
    let s = -1;
    if (super(r, a), yy(this, "space", u), typeof i == "number")
      for (; ++s < of.length; ) {
        const c = of[s];
        yy(this, of[s], (i & Pf[c]) === Pf[c]);
      }
  }
}
pd.prototype.defined = !0;
function yy(t, r, a) {
  a && (t[r] = a);
}
function oa(t) {
  const r = {}, a = {};
  for (const [i, u] of Object.entries(t.properties)) {
    const s = new pd(
      i,
      t.transform(t.attributes || {}, i),
      u,
      t.space
    );
    t.mustUseProperty && t.mustUseProperty.includes(i) && (s.mustUseProperty = !0), r[i] = s, a[Vf(i)] = i, a[Vf(s.attribute)] = i;
  }
  return new Ei(r, a, t.space);
}
const Db = oa({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ht,
    ariaAutoComplete: null,
    ariaBusy: ht,
    ariaChecked: ht,
    ariaColCount: ie,
    ariaColIndex: ie,
    ariaColSpan: ie,
    ariaControls: et,
    ariaCurrent: null,
    ariaDescribedBy: et,
    ariaDetails: null,
    ariaDisabled: ht,
    ariaDropEffect: et,
    ariaErrorMessage: null,
    ariaExpanded: ht,
    ariaFlowTo: et,
    ariaGrabbed: ht,
    ariaHasPopup: null,
    ariaHidden: ht,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: et,
    ariaLevel: ie,
    ariaLive: null,
    ariaModal: ht,
    ariaMultiLine: ht,
    ariaMultiSelectable: ht,
    ariaOrientation: null,
    ariaOwns: et,
    ariaPlaceholder: null,
    ariaPosInSet: ie,
    ariaPressed: ht,
    ariaReadOnly: ht,
    ariaRelevant: null,
    ariaRequired: ht,
    ariaRoleDescription: et,
    ariaRowCount: ie,
    ariaRowIndex: ie,
    ariaRowSpan: ie,
    ariaSelected: ht,
    ariaSetSize: ie,
    ariaSort: null,
    ariaValueMax: ie,
    ariaValueMin: ie,
    ariaValueNow: ie,
    ariaValueText: null,
    role: null
  },
  transform(t, r) {
    return r === "role" ? r : "aria-" + r.slice(4).toLowerCase();
  }
});
function Nb(t, r) {
  return r in t ? t[r] : r;
}
function Ob(t, r) {
  return Nb(t, r.toLowerCase());
}
const EC = oa({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: ta,
    acceptCharset: et,
    accessKey: et,
    action: null,
    allow: null,
    allowFullScreen: Re,
    allowPaymentRequest: Re,
    allowUserMedia: Re,
    alt: null,
    as: null,
    async: Re,
    autoCapitalize: null,
    autoComplete: et,
    autoFocus: Re,
    autoPlay: Re,
    blocking: et,
    capture: null,
    charSet: null,
    checked: Re,
    cite: null,
    className: et,
    cols: ie,
    colSpan: null,
    content: null,
    contentEditable: ht,
    controls: Re,
    controlsList: et,
    coords: ie | ta,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: Re,
    defer: Re,
    dir: null,
    dirName: null,
    disabled: Re,
    download: Yf,
    draggable: ht,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: Re,
    formTarget: null,
    headers: et,
    height: ie,
    hidden: Yf,
    high: ie,
    href: null,
    hrefLang: null,
    htmlFor: et,
    httpEquiv: et,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: Re,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: Re,
    itemId: null,
    itemProp: et,
    itemRef: et,
    itemScope: Re,
    itemType: et,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: Re,
    low: ie,
    manifest: null,
    max: null,
    maxLength: ie,
    media: null,
    method: null,
    min: null,
    minLength: ie,
    multiple: Re,
    muted: Re,
    name: null,
    nonce: null,
    noModule: Re,
    noValidate: Re,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: Re,
    optimum: ie,
    pattern: null,
    ping: et,
    placeholder: null,
    playsInline: Re,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: Re,
    referrerPolicy: null,
    rel: et,
    required: Re,
    reversed: Re,
    rows: ie,
    rowSpan: ie,
    sandbox: et,
    scope: null,
    scoped: Re,
    seamless: Re,
    selected: Re,
    shadowRootClonable: Re,
    shadowRootDelegatesFocus: Re,
    shadowRootMode: null,
    shape: null,
    size: ie,
    sizes: null,
    slot: null,
    span: ie,
    spellCheck: ht,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: ie,
    step: null,
    style: null,
    tabIndex: ie,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: Re,
    useMap: null,
    value: ht,
    width: ie,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: et,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: ie,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: ie,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: Re,
    // Lists. Use CSS to reduce space between items instead
    declare: Re,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: ie,
    // `<img>` and `<object>`
    leftMargin: ie,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: ie,
    // `<body>`
    marginWidth: ie,
    // `<body>`
    noResize: Re,
    // `<frame>`
    noHref: Re,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: Re,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: Re,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: ie,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: ht,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: ie,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: ie,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: Re,
    disableRemotePlayback: Re,
    prefix: null,
    property: null,
    results: ie,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Ob
}), kC = oa({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: nn,
    accentHeight: ie,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: ie,
    amplitude: ie,
    arabicForm: null,
    ascent: ie,
    attributeName: null,
    attributeType: null,
    azimuth: ie,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: ie,
    by: null,
    calcMode: null,
    capHeight: ie,
    className: et,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: ie,
    diffuseConstant: ie,
    direction: null,
    display: null,
    dur: null,
    divisor: ie,
    dominantBaseline: null,
    download: Re,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: ie,
    enableBackground: null,
    end: null,
    event: null,
    exponent: ie,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: ie,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: ta,
    g2: ta,
    glyphName: ta,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: ie,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: ie,
    horizOriginX: ie,
    horizOriginY: ie,
    id: null,
    ideographic: ie,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: ie,
    k: ie,
    k1: ie,
    k2: ie,
    k3: ie,
    k4: ie,
    kernelMatrix: nn,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: ie,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: ie,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: ie,
    overlineThickness: ie,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: ie,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: et,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: ie,
    pointsAtY: ie,
    pointsAtZ: ie,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: nn,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: nn,
    rev: nn,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: nn,
    requiredFeatures: nn,
    requiredFonts: nn,
    requiredFormats: nn,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: ie,
    specularExponent: ie,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: ie,
    strikethroughThickness: ie,
    string: null,
    stroke: null,
    strokeDashArray: nn,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: ie,
    strokeOpacity: ie,
    strokeWidth: null,
    style: null,
    surfaceScale: ie,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: nn,
    tabIndex: ie,
    tableValues: null,
    target: null,
    targetX: ie,
    targetY: ie,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: nn,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: ie,
    underlineThickness: ie,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: ie,
    values: null,
    vAlphabetic: ie,
    vMathematical: ie,
    vectorEffect: null,
    vHanging: ie,
    vIdeographic: ie,
    version: null,
    vertAdvY: ie,
    vertOriginX: ie,
    vertOriginY: ie,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: ie,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Nb
}), zb = oa({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(t, r) {
    return "xlink:" + r.slice(5).toLowerCase();
  }
}), Mb = oa({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Ob
}), Lb = oa({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(t, r) {
    return "xml:" + r.slice(3).toLowerCase();
  }
}), CC = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, AC = /[A-Z]/g, vy = /-[a-z]/g, TC = /^data[-\w.:]+$/i;
function _C(t, r) {
  const a = Vf(r);
  let i = r, u = Xt;
  if (a in t.normal)
    return t.property[t.normal[a]];
  if (a.length > 4 && a.slice(0, 4) === "data" && TC.test(r)) {
    if (r.charAt(4) === "-") {
      const s = r.slice(5).replace(vy, DC);
      i = "data" + s.charAt(0).toUpperCase() + s.slice(1);
    } else {
      const s = r.slice(4);
      if (!vy.test(s)) {
        let c = s.replace(AC, RC);
        c.charAt(0) !== "-" && (c = "-" + c), r = "data" + c;
      }
    }
    u = pd;
  }
  return new u(i, r);
}
function RC(t) {
  return "-" + t.toLowerCase();
}
function DC(t) {
  return t.charAt(1).toUpperCase();
}
const NC = Rb([Db, EC, zb, Mb, Lb], "html"), md = Rb([Db, kC, zb, Mb, Lb], "svg");
function OC(t) {
  return t.join(" ").trim();
}
var Zl = {}, uf, by;
function zC() {
  if (by) return uf;
  by = 1;
  var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, a = /^\s*/, i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, u = /^:\s*/, s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, d = /^\s+|\s+$/g, m = `
`, h = "/", g = "*", y = "", b = "comment", x = "declaration";
  uf = function(C, z) {
    if (typeof C != "string")
      throw new TypeError("First argument must be a string");
    if (!C) return [];
    z = z || {};
    var T = 1, Y = 1;
    function j(re) {
      var le = re.match(r);
      le && (T += le.length);
      var oe = re.lastIndexOf(m);
      Y = ~oe ? re.length - oe : Y + re.length;
    }
    function Q() {
      var re = { line: T, column: Y };
      return function(le) {
        return le.position = new I(re), q(), le;
      };
    }
    function I(re) {
      this.start = re, this.end = { line: T, column: Y }, this.source = z.source;
    }
    I.prototype.content = C;
    function R(re) {
      var le = new Error(
        z.source + ":" + T + ":" + Y + ": " + re
      );
      if (le.reason = re, le.filename = z.source, le.line = T, le.column = Y, le.source = C, !z.silent) throw le;
    }
    function F(re) {
      var le = re.exec(C);
      if (le) {
        var oe = le[0];
        return j(oe), C = C.slice(oe.length), le;
      }
    }
    function q() {
      F(a);
    }
    function Z(re) {
      var le;
      for (re = re || []; le = O(); )
        le !== !1 && re.push(le);
      return re;
    }
    function O() {
      var re = Q();
      if (!(h != C.charAt(0) || g != C.charAt(1))) {
        for (var le = 2; y != C.charAt(le) && (g != C.charAt(le) || h != C.charAt(le + 1)); )
          ++le;
        if (le += 2, y === C.charAt(le - 1))
          return R("End of comment missing");
        var oe = C.slice(2, le - 2);
        return Y += 2, j(oe), C = C.slice(le), Y += 2, re({
          type: b,
          comment: oe
        });
      }
    }
    function ne() {
      var re = Q(), le = F(i);
      if (le) {
        if (O(), !F(u)) return R("property missing ':'");
        var oe = F(s), B = re({
          type: x,
          property: k(le[0].replace(t, y)),
          value: oe ? k(oe[0].replace(t, y)) : y
        });
        return F(c), B;
      }
    }
    function te() {
      var re = [];
      Z(re);
      for (var le; le = ne(); )
        le !== !1 && (re.push(le), Z(re));
      return re;
    }
    return q(), te();
  };
  function k(C) {
    return C ? C.replace(d, y) : y;
  }
  return uf;
}
var xy;
function MC() {
  if (xy) return Zl;
  xy = 1;
  var t = Zl && Zl.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(Zl, "__esModule", { value: !0 }), Zl.default = a;
  var r = t(zC());
  function a(i, u) {
    var s = null;
    if (!i || typeof i != "string")
      return s;
    var c = (0, r.default)(i), d = typeof u == "function";
    return c.forEach(function(m) {
      if (m.type === "declaration") {
        var h = m.property, g = m.value;
        d ? u(h, g, m) : g && (s = s || {}, s[h] = g);
      }
    }), s;
  }
  return Zl;
}
var oi = {}, wy;
function LC() {
  if (wy) return oi;
  wy = 1, Object.defineProperty(oi, "__esModule", { value: !0 }), oi.camelCase = void 0;
  var t = /^--[a-zA-Z0-9_-]+$/, r = /-([a-z])/g, a = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, u = /^-(ms)-/, s = function(h) {
    return !h || a.test(h) || t.test(h);
  }, c = function(h, g) {
    return g.toUpperCase();
  }, d = function(h, g) {
    return "".concat(g, "-");
  }, m = function(h, g) {
    return g === void 0 && (g = {}), s(h) ? h : (h = h.toLowerCase(), g.reactCompat ? h = h.replace(u, d) : h = h.replace(i, d), h.replace(r, c));
  };
  return oi.camelCase = m, oi;
}
var ui, Sy;
function jC() {
  if (Sy) return ui;
  Sy = 1;
  var t = ui && ui.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  }, r = t(MC()), a = LC();
  function i(u, s) {
    var c = {};
    return !u || typeof u != "string" || (0, r.default)(u, function(d, m) {
      d && m && (c[(0, a.camelCase)(d, s)] = m);
    }), c;
  }
  return i.default = i, ui = i, ui;
}
var UC = jC();
const BC = /* @__PURE__ */ ll(UC), jb = Ub("end"), gd = Ub("start");
function Ub(t) {
  return r;
  function r(a) {
    const i = a && a.position && a.position[t] || {};
    if (typeof i.line == "number" && i.line > 0 && typeof i.column == "number" && i.column > 0)
      return {
        line: i.line,
        column: i.column,
        offset: typeof i.offset == "number" && i.offset > -1 ? i.offset : void 0
      };
  }
}
function IC(t) {
  const r = gd(t), a = jb(t);
  if (r && a)
    return { start: r, end: a };
}
function fi(t) {
  return !t || typeof t != "object" ? "" : "position" in t || "type" in t ? Ey(t.position) : "start" in t || "end" in t ? Ey(t) : "line" in t || "column" in t ? Ff(t) : "";
}
function Ff(t) {
  return ky(t && t.line) + ":" + ky(t && t.column);
}
function Ey(t) {
  return Ff(t && t.start) + "-" + Ff(t && t.end);
}
function ky(t) {
  return t && typeof t == "number" ? t : 1;
}
class Lt extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(r, a, i) {
    super(), typeof a == "string" && (i = a, a = void 0);
    let u = "", s = {}, c = !1;
    if (a && ("line" in a && "column" in a ? s = { place: a } : "start" in a && "end" in a ? s = { place: a } : "type" in a ? s = {
      ancestors: [a],
      place: a.position
    } : s = { ...a }), typeof r == "string" ? u = r : !s.cause && r && (c = !0, u = r.message, s.cause = r), !s.ruleId && !s.source && typeof i == "string") {
      const m = i.indexOf(":");
      m === -1 ? s.ruleId = i : (s.source = i.slice(0, m), s.ruleId = i.slice(m + 1));
    }
    if (!s.place && s.ancestors && s.ancestors) {
      const m = s.ancestors[s.ancestors.length - 1];
      m && (s.place = m.position);
    }
    const d = s.place && "start" in s.place ? s.place.start : s.place;
    this.ancestors = s.ancestors || void 0, this.cause = s.cause || void 0, this.column = d ? d.column : void 0, this.fatal = void 0, this.file, this.message = u, this.line = d ? d.line : void 0, this.name = fi(s.place) || "1:1", this.place = s.place || void 0, this.reason = this.message, this.ruleId = s.ruleId || void 0, this.source = s.source || void 0, this.stack = c && s.cause && typeof s.cause.stack == "string" ? s.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
Lt.prototype.file = "";
Lt.prototype.name = "";
Lt.prototype.reason = "";
Lt.prototype.message = "";
Lt.prototype.stack = "";
Lt.prototype.column = void 0;
Lt.prototype.line = void 0;
Lt.prototype.ancestors = void 0;
Lt.prototype.cause = void 0;
Lt.prototype.fatal = void 0;
Lt.prototype.place = void 0;
Lt.prototype.ruleId = void 0;
Lt.prototype.source = void 0;
const yd = {}.hasOwnProperty, HC = /* @__PURE__ */ new Map(), qC = /[A-Z]/g, VC = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), YC = /* @__PURE__ */ new Set(["td", "th"]), Bb = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function PC(t, r) {
  if (!r || r.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const a = r.filePath || void 0;
  let i;
  if (r.development) {
    if (typeof r.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    i = $C(a, r.jsxDEV);
  } else {
    if (typeof r.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof r.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    i = JC(a, r.jsx, r.jsxs);
  }
  const u = {
    Fragment: r.Fragment,
    ancestors: [],
    components: r.components || {},
    create: i,
    elementAttributeNameCase: r.elementAttributeNameCase || "react",
    evaluater: r.createEvaluater ? r.createEvaluater() : void 0,
    filePath: a,
    ignoreInvalidStyle: r.ignoreInvalidStyle || !1,
    passKeys: r.passKeys !== !1,
    passNode: r.passNode || !1,
    schema: r.space === "svg" ? md : NC,
    stylePropertyNameCase: r.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: r.tableCellAlignToStyle !== !1
  }, s = Ib(u, t, void 0);
  return s && typeof s != "string" ? s : u.create(
    t,
    u.Fragment,
    { children: s || void 0 },
    void 0
  );
}
function Ib(t, r, a) {
  if (r.type === "element")
    return FC(t, r, a);
  if (r.type === "mdxFlowExpression" || r.type === "mdxTextExpression")
    return GC(t, r);
  if (r.type === "mdxJsxFlowElement" || r.type === "mdxJsxTextElement")
    return QC(t, r, a);
  if (r.type === "mdxjsEsm")
    return XC(t, r);
  if (r.type === "root")
    return ZC(t, r, a);
  if (r.type === "text")
    return KC(t, r);
}
function FC(t, r, a) {
  const i = t.schema;
  let u = i;
  r.tagName.toLowerCase() === "svg" && i.space === "html" && (u = md, t.schema = u), t.ancestors.push(r);
  const s = qb(t, r.tagName, !1), c = WC(t, r);
  let d = bd(t, r);
  return VC.has(r.tagName) && (d = d.filter(function(m) {
    return typeof m == "string" ? !wC(m) : !0;
  })), Hb(t, c, s, r), vd(c, d), t.ancestors.pop(), t.schema = i, t.create(r, s, c, a);
}
function GC(t, r) {
  if (r.data && r.data.estree && t.evaluater) {
    const i = r.data.estree.body[0];
    return i.type, /** @type {Child | undefined} */
    t.evaluater.evaluateExpression(i.expression);
  }
  xi(t, r.position);
}
function XC(t, r) {
  if (r.data && r.data.estree && t.evaluater)
    return (
      /** @type {Child | undefined} */
      t.evaluater.evaluateProgram(r.data.estree)
    );
  xi(t, r.position);
}
function QC(t, r, a) {
  const i = t.schema;
  let u = i;
  r.name === "svg" && i.space === "html" && (u = md, t.schema = u), t.ancestors.push(r);
  const s = r.name === null ? t.Fragment : qb(t, r.name, !0), c = eA(t, r), d = bd(t, r);
  return Hb(t, c, s, r), vd(c, d), t.ancestors.pop(), t.schema = i, t.create(r, s, c, a);
}
function ZC(t, r, a) {
  const i = {};
  return vd(i, bd(t, r)), t.create(r, t.Fragment, i, a);
}
function KC(t, r) {
  return r.value;
}
function Hb(t, r, a, i) {
  typeof a != "string" && a !== t.Fragment && t.passNode && (r.node = i);
}
function vd(t, r) {
  if (r.length > 0) {
    const a = r.length > 1 ? r : r[0];
    a && (t.children = a);
  }
}
function JC(t, r, a) {
  return i;
  function i(u, s, c, d) {
    const h = Array.isArray(c.children) ? a : r;
    return d ? h(s, c, d) : h(s, c);
  }
}
function $C(t, r) {
  return a;
  function a(i, u, s, c) {
    const d = Array.isArray(s.children), m = gd(i);
    return r(
      u,
      s,
      c,
      d,
      {
        columnNumber: m ? m.column - 1 : void 0,
        fileName: t,
        lineNumber: m ? m.line : void 0
      },
      void 0
    );
  }
}
function WC(t, r) {
  const a = {};
  let i, u;
  for (u in r.properties)
    if (u !== "children" && yd.call(r.properties, u)) {
      const s = tA(t, u, r.properties[u]);
      if (s) {
        const [c, d] = s;
        t.tableCellAlignToStyle && c === "align" && typeof d == "string" && YC.has(r.tagName) ? i = d : a[c] = d;
      }
    }
  if (i) {
    const s = (
      /** @type {Style} */
      a.style || (a.style = {})
    );
    s[t.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = i;
  }
  return a;
}
function eA(t, r) {
  const a = {};
  for (const i of r.attributes)
    if (i.type === "mdxJsxExpressionAttribute")
      if (i.data && i.data.estree && t.evaluater) {
        const s = i.data.estree.body[0];
        s.type;
        const c = s.expression;
        c.type;
        const d = c.properties[0];
        d.type, Object.assign(
          a,
          t.evaluater.evaluateExpression(d.argument)
        );
      } else
        xi(t, r.position);
    else {
      const u = i.name;
      let s;
      if (i.value && typeof i.value == "object")
        if (i.value.data && i.value.data.estree && t.evaluater) {
          const d = i.value.data.estree.body[0];
          d.type, s = t.evaluater.evaluateExpression(d.expression);
        } else
          xi(t, r.position);
      else
        s = i.value === null ? !0 : i.value;
      a[u] = /** @type {Props[keyof Props]} */
      s;
    }
  return a;
}
function bd(t, r) {
  const a = [];
  let i = -1;
  const u = t.passKeys ? /* @__PURE__ */ new Map() : HC;
  for (; ++i < r.children.length; ) {
    const s = r.children[i];
    let c;
    if (t.passKeys) {
      const m = s.type === "element" ? s.tagName : s.type === "mdxJsxFlowElement" || s.type === "mdxJsxTextElement" ? s.name : void 0;
      if (m) {
        const h = u.get(m) || 0;
        c = m + "-" + h, u.set(m, h + 1);
      }
    }
    const d = Ib(t, s, c);
    d !== void 0 && a.push(d);
  }
  return a;
}
function tA(t, r, a) {
  const i = _C(t.schema, r);
  if (!(a == null || typeof a == "number" && Number.isNaN(a))) {
    if (Array.isArray(a) && (a = i.commaSeparated ? gC(a) : OC(a)), i.property === "style") {
      let u = typeof a == "object" ? a : nA(t, String(a));
      return t.stylePropertyNameCase === "css" && (u = rA(u)), ["style", u];
    }
    return [
      t.elementAttributeNameCase === "react" && i.space ? CC[i.property] || i.property : i.attribute,
      a
    ];
  }
}
function nA(t, r) {
  try {
    return BC(r, { reactCompat: !0 });
  } catch (a) {
    if (t.ignoreInvalidStyle)
      return {};
    const i = (
      /** @type {Error} */
      a
    ), u = new Lt("Cannot parse `style` attribute", {
      ancestors: t.ancestors,
      cause: i,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw u.file = t.filePath || void 0, u.url = Bb + "#cannot-parse-style-attribute", u;
  }
}
function qb(t, r, a) {
  let i;
  if (!a)
    i = { type: "Literal", value: r };
  else if (r.includes(".")) {
    const u = r.split(".");
    let s = -1, c;
    for (; ++s < u.length; ) {
      const d = my(u[s]) ? { type: "Identifier", name: u[s] } : { type: "Literal", value: u[s] };
      c = c ? {
        type: "MemberExpression",
        object: c,
        property: d,
        computed: !!(s && d.type === "Literal"),
        optional: !1
      } : d;
    }
    i = c;
  } else
    i = my(r) && !/^[a-z]/.test(r) ? { type: "Identifier", name: r } : { type: "Literal", value: r };
  if (i.type === "Literal") {
    const u = (
      /** @type {string | number} */
      i.value
    );
    return yd.call(t.components, u) ? t.components[u] : u;
  }
  if (t.evaluater)
    return t.evaluater.evaluateExpression(i);
  xi(t);
}
function xi(t, r) {
  const a = new Lt(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: t.ancestors,
      place: r,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw a.file = t.filePath || void 0, a.url = Bb + "#cannot-handle-mdx-estrees-without-createevaluater", a;
}
function rA(t) {
  const r = {};
  let a;
  for (a in t)
    yd.call(t, a) && (r[lA(a)] = t[a]);
  return r;
}
function lA(t) {
  let r = t.replace(qC, aA);
  return r.slice(0, 3) === "ms-" && (r = "-" + r), r;
}
function aA(t) {
  return "-" + t.toLowerCase();
}
const sf = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, iA = {};
function xd(t, r) {
  const a = iA, i = typeof a.includeImageAlt == "boolean" ? a.includeImageAlt : !0, u = typeof a.includeHtml == "boolean" ? a.includeHtml : !0;
  return Vb(t, i, u);
}
function Vb(t, r, a) {
  if (oA(t)) {
    if ("value" in t)
      return t.type === "html" && !a ? "" : t.value;
    if (r && "alt" in t && t.alt)
      return t.alt;
    if ("children" in t)
      return Cy(t.children, r, a);
  }
  return Array.isArray(t) ? Cy(t, r, a) : "";
}
function Cy(t, r, a) {
  const i = [];
  let u = -1;
  for (; ++u < t.length; )
    i[u] = Vb(t[u], r, a);
  return i.join("");
}
function oA(t) {
  return !!(t && typeof t == "object");
}
const Ay = document.createElement("i");
function wd(t) {
  const r = "&" + t + ";";
  Ay.innerHTML = r;
  const a = Ay.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    a.charCodeAt(a.length - 1) === 59 && t !== "semi" || a === r ? !1 : a
  );
}
function ln(t, r, a, i) {
  const u = t.length;
  let s = 0, c;
  if (r < 0 ? r = -r > u ? 0 : u + r : r = r > u ? u : r, a = a > 0 ? a : 0, i.length < 1e4)
    c = Array.from(i), c.unshift(r, a), t.splice(...c);
  else
    for (a && t.splice(r, a); s < i.length; )
      c = i.slice(s, s + 1e4), c.unshift(r, 0), t.splice(...c), s += 1e4, r += 1e4;
}
function yn(t, r) {
  return t.length > 0 ? (ln(t, t.length, 0, r), t) : r;
}
const Ty = {}.hasOwnProperty;
function Yb(t) {
  const r = {};
  let a = -1;
  for (; ++a < t.length; )
    uA(r, t[a]);
  return r;
}
function uA(t, r) {
  let a;
  for (a in r) {
    const u = (Ty.call(t, a) ? t[a] : void 0) || (t[a] = {}), s = r[a];
    let c;
    if (s)
      for (c in s) {
        Ty.call(u, c) || (u[c] = []);
        const d = s[c];
        sA(
          // @ts-expect-error Looks like a list.
          u[c],
          Array.isArray(d) ? d : d ? [d] : []
        );
      }
  }
}
function sA(t, r) {
  let a = -1;
  const i = [];
  for (; ++a < r.length; )
    (r[a].add === "after" ? t : i).push(r[a]);
  ln(t, 0, 0, i);
}
function Pb(t, r) {
  const a = Number.parseInt(t, r);
  return (
    // C0 except for HT, LF, FF, CR, space.
    a < 9 || a === 11 || a > 13 && a < 32 || // Control character (DEL) of C0, and C1 controls.
    a > 126 && a < 160 || // Lone high surrogates and low surrogates.
    a > 55295 && a < 57344 || // Noncharacters.
    a > 64975 && a < 65008 || /* eslint-disable no-bitwise */
    (a & 65535) === 65535 || (a & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    a > 1114111 ? "�" : String.fromCodePoint(a)
  );
}
function En(t) {
  return t.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Bt = Lr(/[A-Za-z]/), zt = Lr(/[\dA-Za-z]/), cA = Lr(/[#-'*+\--9=?A-Z^-~]/);
function lu(t) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    t !== null && (t < 32 || t === 127)
  );
}
const Gf = Lr(/\d/), fA = Lr(/[\dA-Fa-f]/), dA = Lr(/[!-/:-@[-`{-~]/);
function ye(t) {
  return t !== null && t < -2;
}
function $e(t) {
  return t !== null && (t < 0 || t === 32);
}
function je(t) {
  return t === -2 || t === -1 || t === 32;
}
const yu = Lr(new RegExp("\\p{P}|\\p{S}", "u")), rl = Lr(/\s/);
function Lr(t) {
  return r;
  function r(a) {
    return a !== null && a > -1 && t.test(String.fromCharCode(a));
  }
}
function ua(t) {
  const r = [];
  let a = -1, i = 0, u = 0;
  for (; ++a < t.length; ) {
    const s = t.charCodeAt(a);
    let c = "";
    if (s === 37 && zt(t.charCodeAt(a + 1)) && zt(t.charCodeAt(a + 2)))
      u = 2;
    else if (s < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s)) || (c = String.fromCharCode(s));
    else if (s > 55295 && s < 57344) {
      const d = t.charCodeAt(a + 1);
      s < 56320 && d > 56319 && d < 57344 ? (c = String.fromCharCode(s, d), u = 1) : c = "�";
    } else
      c = String.fromCharCode(s);
    c && (r.push(t.slice(i, a), encodeURIComponent(c)), i = a + u + 1, c = ""), u && (a += u, u = 0);
  }
  return r.join("") + t.slice(i);
}
function Be(t, r, a, i) {
  const u = i ? i - 1 : Number.POSITIVE_INFINITY;
  let s = 0;
  return c;
  function c(m) {
    return je(m) ? (t.enter(a), d(m)) : r(m);
  }
  function d(m) {
    return je(m) && s++ < u ? (t.consume(m), d) : (t.exit(a), r(m));
  }
}
const hA = {
  tokenize: pA
};
function pA(t) {
  const r = t.attempt(this.parser.constructs.contentInitial, i, u);
  let a;
  return r;
  function i(d) {
    if (d === null) {
      t.consume(d);
      return;
    }
    return t.enter("lineEnding"), t.consume(d), t.exit("lineEnding"), Be(t, r, "linePrefix");
  }
  function u(d) {
    return t.enter("paragraph"), s(d);
  }
  function s(d) {
    const m = t.enter("chunkText", {
      contentType: "text",
      previous: a
    });
    return a && (a.next = m), a = m, c(d);
  }
  function c(d) {
    if (d === null) {
      t.exit("chunkText"), t.exit("paragraph"), t.consume(d);
      return;
    }
    return ye(d) ? (t.consume(d), t.exit("chunkText"), s) : (t.consume(d), c);
  }
}
const mA = {
  tokenize: gA
}, _y = {
  tokenize: yA
};
function gA(t) {
  const r = this, a = [];
  let i = 0, u, s, c;
  return d;
  function d(j) {
    if (i < a.length) {
      const Q = a[i];
      return r.containerState = Q[1], t.attempt(Q[0].continuation, m, h)(j);
    }
    return h(j);
  }
  function m(j) {
    if (i++, r.containerState._closeFlow) {
      r.containerState._closeFlow = void 0, u && Y();
      const Q = r.events.length;
      let I = Q, R;
      for (; I--; )
        if (r.events[I][0] === "exit" && r.events[I][1].type === "chunkFlow") {
          R = r.events[I][1].end;
          break;
        }
      T(i);
      let F = Q;
      for (; F < r.events.length; )
        r.events[F][1].end = {
          ...R
        }, F++;
      return ln(r.events, I + 1, 0, r.events.slice(Q)), r.events.length = F, h(j);
    }
    return d(j);
  }
  function h(j) {
    if (i === a.length) {
      if (!u)
        return b(j);
      if (u.currentConstruct && u.currentConstruct.concrete)
        return k(j);
      r.interrupt = !!(u.currentConstruct && !u._gfmTableDynamicInterruptHack);
    }
    return r.containerState = {}, t.check(_y, g, y)(j);
  }
  function g(j) {
    return u && Y(), T(i), b(j);
  }
  function y(j) {
    return r.parser.lazy[r.now().line] = i !== a.length, c = r.now().offset, k(j);
  }
  function b(j) {
    return r.containerState = {}, t.attempt(_y, x, k)(j);
  }
  function x(j) {
    return i++, a.push([r.currentConstruct, r.containerState]), b(j);
  }
  function k(j) {
    if (j === null) {
      u && Y(), T(0), t.consume(j);
      return;
    }
    return u = u || r.parser.flow(r.now()), t.enter("chunkFlow", {
      _tokenizer: u,
      contentType: "flow",
      previous: s
    }), C(j);
  }
  function C(j) {
    if (j === null) {
      z(t.exit("chunkFlow"), !0), T(0), t.consume(j);
      return;
    }
    return ye(j) ? (t.consume(j), z(t.exit("chunkFlow")), i = 0, r.interrupt = void 0, d) : (t.consume(j), C);
  }
  function z(j, Q) {
    const I = r.sliceStream(j);
    if (Q && I.push(null), j.previous = s, s && (s.next = j), s = j, u.defineSkip(j.start), u.write(I), r.parser.lazy[j.start.line]) {
      let R = u.events.length;
      for (; R--; )
        if (
          // The token starts before the line ending…
          u.events[R][1].start.offset < c && // …and either is not ended yet…
          (!u.events[R][1].end || // …or ends after it.
          u.events[R][1].end.offset > c)
        )
          return;
      const F = r.events.length;
      let q = F, Z, O;
      for (; q--; )
        if (r.events[q][0] === "exit" && r.events[q][1].type === "chunkFlow") {
          if (Z) {
            O = r.events[q][1].end;
            break;
          }
          Z = !0;
        }
      for (T(i), R = F; R < r.events.length; )
        r.events[R][1].end = {
          ...O
        }, R++;
      ln(r.events, q + 1, 0, r.events.slice(F)), r.events.length = R;
    }
  }
  function T(j) {
    let Q = a.length;
    for (; Q-- > j; ) {
      const I = a[Q];
      r.containerState = I[1], I[0].exit.call(r, t);
    }
    a.length = j;
  }
  function Y() {
    u.write([null]), s = void 0, u = void 0, r.containerState._closeFlow = void 0;
  }
}
function yA(t, r, a) {
  return Be(t, t.attempt(this.parser.constructs.document, r, a), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function la(t) {
  if (t === null || $e(t) || rl(t))
    return 1;
  if (yu(t))
    return 2;
}
function vu(t, r, a) {
  const i = [];
  let u = -1;
  for (; ++u < t.length; ) {
    const s = t[u].resolveAll;
    s && !i.includes(s) && (r = s(r, a), i.push(s));
  }
  return r;
}
const Xf = {
  name: "attention",
  resolveAll: vA,
  tokenize: bA
};
function vA(t, r) {
  let a = -1, i, u, s, c, d, m, h, g;
  for (; ++a < t.length; )
    if (t[a][0] === "enter" && t[a][1].type === "attentionSequence" && t[a][1]._close) {
      for (i = a; i--; )
        if (t[i][0] === "exit" && t[i][1].type === "attentionSequence" && t[i][1]._open && // If the markers are the same:
        r.sliceSerialize(t[i][1]).charCodeAt(0) === r.sliceSerialize(t[a][1]).charCodeAt(0)) {
          if ((t[i][1]._close || t[a][1]._open) && (t[a][1].end.offset - t[a][1].start.offset) % 3 && !((t[i][1].end.offset - t[i][1].start.offset + t[a][1].end.offset - t[a][1].start.offset) % 3))
            continue;
          m = t[i][1].end.offset - t[i][1].start.offset > 1 && t[a][1].end.offset - t[a][1].start.offset > 1 ? 2 : 1;
          const y = {
            ...t[i][1].end
          }, b = {
            ...t[a][1].start
          };
          Ry(y, -m), Ry(b, m), c = {
            type: m > 1 ? "strongSequence" : "emphasisSequence",
            start: y,
            end: {
              ...t[i][1].end
            }
          }, d = {
            type: m > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...t[a][1].start
            },
            end: b
          }, s = {
            type: m > 1 ? "strongText" : "emphasisText",
            start: {
              ...t[i][1].end
            },
            end: {
              ...t[a][1].start
            }
          }, u = {
            type: m > 1 ? "strong" : "emphasis",
            start: {
              ...c.start
            },
            end: {
              ...d.end
            }
          }, t[i][1].end = {
            ...c.start
          }, t[a][1].start = {
            ...d.end
          }, h = [], t[i][1].end.offset - t[i][1].start.offset && (h = yn(h, [["enter", t[i][1], r], ["exit", t[i][1], r]])), h = yn(h, [["enter", u, r], ["enter", c, r], ["exit", c, r], ["enter", s, r]]), h = yn(h, vu(r.parser.constructs.insideSpan.null, t.slice(i + 1, a), r)), h = yn(h, [["exit", s, r], ["enter", d, r], ["exit", d, r], ["exit", u, r]]), t[a][1].end.offset - t[a][1].start.offset ? (g = 2, h = yn(h, [["enter", t[a][1], r], ["exit", t[a][1], r]])) : g = 0, ln(t, i - 1, a - i + 3, h), a = i + h.length - g - 2;
          break;
        }
    }
  for (a = -1; ++a < t.length; )
    t[a][1].type === "attentionSequence" && (t[a][1].type = "data");
  return t;
}
function bA(t, r) {
  const a = this.parser.constructs.attentionMarkers.null, i = this.previous, u = la(i);
  let s;
  return c;
  function c(m) {
    return s = m, t.enter("attentionSequence"), d(m);
  }
  function d(m) {
    if (m === s)
      return t.consume(m), d;
    const h = t.exit("attentionSequence"), g = la(m), y = !g || g === 2 && u || a.includes(m), b = !u || u === 2 && g || a.includes(i);
    return h._open = !!(s === 42 ? y : y && (u || !b)), h._close = !!(s === 42 ? b : b && (g || !y)), r(m);
  }
}
function Ry(t, r) {
  t.column += r, t.offset += r, t._bufferIndex += r;
}
const xA = {
  name: "autolink",
  tokenize: wA
};
function wA(t, r, a) {
  let i = 0;
  return u;
  function u(x) {
    return t.enter("autolink"), t.enter("autolinkMarker"), t.consume(x), t.exit("autolinkMarker"), t.enter("autolinkProtocol"), s;
  }
  function s(x) {
    return Bt(x) ? (t.consume(x), c) : x === 64 ? a(x) : h(x);
  }
  function c(x) {
    return x === 43 || x === 45 || x === 46 || zt(x) ? (i = 1, d(x)) : h(x);
  }
  function d(x) {
    return x === 58 ? (t.consume(x), i = 0, m) : (x === 43 || x === 45 || x === 46 || zt(x)) && i++ < 32 ? (t.consume(x), d) : (i = 0, h(x));
  }
  function m(x) {
    return x === 62 ? (t.exit("autolinkProtocol"), t.enter("autolinkMarker"), t.consume(x), t.exit("autolinkMarker"), t.exit("autolink"), r) : x === null || x === 32 || x === 60 || lu(x) ? a(x) : (t.consume(x), m);
  }
  function h(x) {
    return x === 64 ? (t.consume(x), g) : cA(x) ? (t.consume(x), h) : a(x);
  }
  function g(x) {
    return zt(x) ? y(x) : a(x);
  }
  function y(x) {
    return x === 46 ? (t.consume(x), i = 0, g) : x === 62 ? (t.exit("autolinkProtocol").type = "autolinkEmail", t.enter("autolinkMarker"), t.consume(x), t.exit("autolinkMarker"), t.exit("autolink"), r) : b(x);
  }
  function b(x) {
    if ((x === 45 || zt(x)) && i++ < 63) {
      const k = x === 45 ? b : y;
      return t.consume(x), k;
    }
    return a(x);
  }
}
const ki = {
  partial: !0,
  tokenize: SA
};
function SA(t, r, a) {
  return i;
  function i(s) {
    return je(s) ? Be(t, u, "linePrefix")(s) : u(s);
  }
  function u(s) {
    return s === null || ye(s) ? r(s) : a(s);
  }
}
const Fb = {
  continuation: {
    tokenize: kA
  },
  exit: CA,
  name: "blockQuote",
  tokenize: EA
};
function EA(t, r, a) {
  const i = this;
  return u;
  function u(c) {
    if (c === 62) {
      const d = i.containerState;
      return d.open || (t.enter("blockQuote", {
        _container: !0
      }), d.open = !0), t.enter("blockQuotePrefix"), t.enter("blockQuoteMarker"), t.consume(c), t.exit("blockQuoteMarker"), s;
    }
    return a(c);
  }
  function s(c) {
    return je(c) ? (t.enter("blockQuotePrefixWhitespace"), t.consume(c), t.exit("blockQuotePrefixWhitespace"), t.exit("blockQuotePrefix"), r) : (t.exit("blockQuotePrefix"), r(c));
  }
}
function kA(t, r, a) {
  const i = this;
  return u;
  function u(c) {
    return je(c) ? Be(t, s, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(c) : s(c);
  }
  function s(c) {
    return t.attempt(Fb, r, a)(c);
  }
}
function CA(t) {
  t.exit("blockQuote");
}
const Gb = {
  name: "characterEscape",
  tokenize: AA
};
function AA(t, r, a) {
  return i;
  function i(s) {
    return t.enter("characterEscape"), t.enter("escapeMarker"), t.consume(s), t.exit("escapeMarker"), u;
  }
  function u(s) {
    return dA(s) ? (t.enter("characterEscapeValue"), t.consume(s), t.exit("characterEscapeValue"), t.exit("characterEscape"), r) : a(s);
  }
}
const Xb = {
  name: "characterReference",
  tokenize: TA
};
function TA(t, r, a) {
  const i = this;
  let u = 0, s, c;
  return d;
  function d(y) {
    return t.enter("characterReference"), t.enter("characterReferenceMarker"), t.consume(y), t.exit("characterReferenceMarker"), m;
  }
  function m(y) {
    return y === 35 ? (t.enter("characterReferenceMarkerNumeric"), t.consume(y), t.exit("characterReferenceMarkerNumeric"), h) : (t.enter("characterReferenceValue"), s = 31, c = zt, g(y));
  }
  function h(y) {
    return y === 88 || y === 120 ? (t.enter("characterReferenceMarkerHexadecimal"), t.consume(y), t.exit("characterReferenceMarkerHexadecimal"), t.enter("characterReferenceValue"), s = 6, c = fA, g) : (t.enter("characterReferenceValue"), s = 7, c = Gf, g(y));
  }
  function g(y) {
    if (y === 59 && u) {
      const b = t.exit("characterReferenceValue");
      return c === zt && !wd(i.sliceSerialize(b)) ? a(y) : (t.enter("characterReferenceMarker"), t.consume(y), t.exit("characterReferenceMarker"), t.exit("characterReference"), r);
    }
    return c(y) && u++ < s ? (t.consume(y), g) : a(y);
  }
}
const Dy = {
  partial: !0,
  tokenize: RA
}, Ny = {
  concrete: !0,
  name: "codeFenced",
  tokenize: _A
};
function _A(t, r, a) {
  const i = this, u = {
    partial: !0,
    tokenize: I
  };
  let s = 0, c = 0, d;
  return m;
  function m(R) {
    return h(R);
  }
  function h(R) {
    const F = i.events[i.events.length - 1];
    return s = F && F[1].type === "linePrefix" ? F[2].sliceSerialize(F[1], !0).length : 0, d = R, t.enter("codeFenced"), t.enter("codeFencedFence"), t.enter("codeFencedFenceSequence"), g(R);
  }
  function g(R) {
    return R === d ? (c++, t.consume(R), g) : c < 3 ? a(R) : (t.exit("codeFencedFenceSequence"), je(R) ? Be(t, y, "whitespace")(R) : y(R));
  }
  function y(R) {
    return R === null || ye(R) ? (t.exit("codeFencedFence"), i.interrupt ? r(R) : t.check(Dy, C, Q)(R)) : (t.enter("codeFencedFenceInfo"), t.enter("chunkString", {
      contentType: "string"
    }), b(R));
  }
  function b(R) {
    return R === null || ye(R) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), y(R)) : je(R) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), Be(t, x, "whitespace")(R)) : R === 96 && R === d ? a(R) : (t.consume(R), b);
  }
  function x(R) {
    return R === null || ye(R) ? y(R) : (t.enter("codeFencedFenceMeta"), t.enter("chunkString", {
      contentType: "string"
    }), k(R));
  }
  function k(R) {
    return R === null || ye(R) ? (t.exit("chunkString"), t.exit("codeFencedFenceMeta"), y(R)) : R === 96 && R === d ? a(R) : (t.consume(R), k);
  }
  function C(R) {
    return t.attempt(u, Q, z)(R);
  }
  function z(R) {
    return t.enter("lineEnding"), t.consume(R), t.exit("lineEnding"), T;
  }
  function T(R) {
    return s > 0 && je(R) ? Be(t, Y, "linePrefix", s + 1)(R) : Y(R);
  }
  function Y(R) {
    return R === null || ye(R) ? t.check(Dy, C, Q)(R) : (t.enter("codeFlowValue"), j(R));
  }
  function j(R) {
    return R === null || ye(R) ? (t.exit("codeFlowValue"), Y(R)) : (t.consume(R), j);
  }
  function Q(R) {
    return t.exit("codeFenced"), r(R);
  }
  function I(R, F, q) {
    let Z = 0;
    return O;
    function O(oe) {
      return R.enter("lineEnding"), R.consume(oe), R.exit("lineEnding"), ne;
    }
    function ne(oe) {
      return R.enter("codeFencedFence"), je(oe) ? Be(R, te, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(oe) : te(oe);
    }
    function te(oe) {
      return oe === d ? (R.enter("codeFencedFenceSequence"), re(oe)) : q(oe);
    }
    function re(oe) {
      return oe === d ? (Z++, R.consume(oe), re) : Z >= c ? (R.exit("codeFencedFenceSequence"), je(oe) ? Be(R, le, "whitespace")(oe) : le(oe)) : q(oe);
    }
    function le(oe) {
      return oe === null || ye(oe) ? (R.exit("codeFencedFence"), F(oe)) : q(oe);
    }
  }
}
function RA(t, r, a) {
  const i = this;
  return u;
  function u(c) {
    return c === null ? a(c) : (t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), s);
  }
  function s(c) {
    return i.parser.lazy[i.now().line] ? a(c) : r(c);
  }
}
const cf = {
  name: "codeIndented",
  tokenize: NA
}, DA = {
  partial: !0,
  tokenize: OA
};
function NA(t, r, a) {
  const i = this;
  return u;
  function u(h) {
    return t.enter("codeIndented"), Be(t, s, "linePrefix", 5)(h);
  }
  function s(h) {
    const g = i.events[i.events.length - 1];
    return g && g[1].type === "linePrefix" && g[2].sliceSerialize(g[1], !0).length >= 4 ? c(h) : a(h);
  }
  function c(h) {
    return h === null ? m(h) : ye(h) ? t.attempt(DA, c, m)(h) : (t.enter("codeFlowValue"), d(h));
  }
  function d(h) {
    return h === null || ye(h) ? (t.exit("codeFlowValue"), c(h)) : (t.consume(h), d);
  }
  function m(h) {
    return t.exit("codeIndented"), r(h);
  }
}
function OA(t, r, a) {
  const i = this;
  return u;
  function u(c) {
    return i.parser.lazy[i.now().line] ? a(c) : ye(c) ? (t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), u) : Be(t, s, "linePrefix", 5)(c);
  }
  function s(c) {
    const d = i.events[i.events.length - 1];
    return d && d[1].type === "linePrefix" && d[2].sliceSerialize(d[1], !0).length >= 4 ? r(c) : ye(c) ? u(c) : a(c);
  }
}
const zA = {
  name: "codeText",
  previous: LA,
  resolve: MA,
  tokenize: jA
};
function MA(t) {
  let r = t.length - 4, a = 3, i, u;
  if ((t[a][1].type === "lineEnding" || t[a][1].type === "space") && (t[r][1].type === "lineEnding" || t[r][1].type === "space")) {
    for (i = a; ++i < r; )
      if (t[i][1].type === "codeTextData") {
        t[a][1].type = "codeTextPadding", t[r][1].type = "codeTextPadding", a += 2, r -= 2;
        break;
      }
  }
  for (i = a - 1, r++; ++i <= r; )
    u === void 0 ? i !== r && t[i][1].type !== "lineEnding" && (u = i) : (i === r || t[i][1].type === "lineEnding") && (t[u][1].type = "codeTextData", i !== u + 2 && (t[u][1].end = t[i - 1][1].end, t.splice(u + 2, i - u - 2), r -= i - u - 2, i = u + 2), u = void 0);
  return t;
}
function LA(t) {
  return t !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function jA(t, r, a) {
  let i = 0, u, s;
  return c;
  function c(y) {
    return t.enter("codeText"), t.enter("codeTextSequence"), d(y);
  }
  function d(y) {
    return y === 96 ? (t.consume(y), i++, d) : (t.exit("codeTextSequence"), m(y));
  }
  function m(y) {
    return y === null ? a(y) : y === 32 ? (t.enter("space"), t.consume(y), t.exit("space"), m) : y === 96 ? (s = t.enter("codeTextSequence"), u = 0, g(y)) : ye(y) ? (t.enter("lineEnding"), t.consume(y), t.exit("lineEnding"), m) : (t.enter("codeTextData"), h(y));
  }
  function h(y) {
    return y === null || y === 32 || y === 96 || ye(y) ? (t.exit("codeTextData"), m(y)) : (t.consume(y), h);
  }
  function g(y) {
    return y === 96 ? (t.consume(y), u++, g) : u === i ? (t.exit("codeTextSequence"), t.exit("codeText"), r(y)) : (s.type = "codeTextData", h(y));
  }
}
class UA {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(r) {
    this.left = r ? [...r] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(r) {
    if (r < 0 || r >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + r + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return r < this.left.length ? this.left[r] : this.right[this.right.length - r + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(r, a) {
    const i = a ?? Number.POSITIVE_INFINITY;
    return i < this.left.length ? this.left.slice(r, i) : r > this.left.length ? this.right.slice(this.right.length - i + this.left.length, this.right.length - r + this.left.length).reverse() : this.left.slice(r).concat(this.right.slice(this.right.length - i + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(r, a, i) {
    const u = a || 0;
    this.setCursor(Math.trunc(r));
    const s = this.right.splice(this.right.length - u, Number.POSITIVE_INFINITY);
    return i && si(this.left, i), s.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(r) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(r);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(r) {
    this.setCursor(Number.POSITIVE_INFINITY), si(this.left, r);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(r) {
    this.setCursor(0), this.right.push(r);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(r) {
    this.setCursor(0), si(this.right, r.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(r) {
    if (!(r === this.left.length || r > this.left.length && this.right.length === 0 || r < 0 && this.left.length === 0))
      if (r < this.left.length) {
        const a = this.left.splice(r, Number.POSITIVE_INFINITY);
        si(this.right, a.reverse());
      } else {
        const a = this.right.splice(this.left.length + this.right.length - r, Number.POSITIVE_INFINITY);
        si(this.left, a.reverse());
      }
  }
}
function si(t, r) {
  let a = 0;
  if (r.length < 1e4)
    t.push(...r);
  else
    for (; a < r.length; )
      t.push(...r.slice(a, a + 1e4)), a += 1e4;
}
function Qb(t) {
  const r = {};
  let a = -1, i, u, s, c, d, m, h;
  const g = new UA(t);
  for (; ++a < g.length; ) {
    for (; a in r; )
      a = r[a];
    if (i = g.get(a), a && i[1].type === "chunkFlow" && g.get(a - 1)[1].type === "listItemPrefix" && (m = i[1]._tokenizer.events, s = 0, s < m.length && m[s][1].type === "lineEndingBlank" && (s += 2), s < m.length && m[s][1].type === "content"))
      for (; ++s < m.length && m[s][1].type !== "content"; )
        m[s][1].type === "chunkText" && (m[s][1]._isInFirstContentOfListItem = !0, s++);
    if (i[0] === "enter")
      i[1].contentType && (Object.assign(r, BA(g, a)), a = r[a], h = !0);
    else if (i[1]._container) {
      for (s = a, u = void 0; s--; )
        if (c = g.get(s), c[1].type === "lineEnding" || c[1].type === "lineEndingBlank")
          c[0] === "enter" && (u && (g.get(u)[1].type = "lineEndingBlank"), c[1].type = "lineEnding", u = s);
        else if (!(c[1].type === "linePrefix" || c[1].type === "listItemIndent")) break;
      u && (i[1].end = {
        ...g.get(u)[1].start
      }, d = g.slice(u, a), d.unshift(i), g.splice(u, a - u + 1, d));
    }
  }
  return ln(t, 0, Number.POSITIVE_INFINITY, g.slice(0)), !h;
}
function BA(t, r) {
  const a = t.get(r)[1], i = t.get(r)[2];
  let u = r - 1;
  const s = [];
  let c = a._tokenizer;
  c || (c = i.parser[a.contentType](a.start), a._contentTypeTextTrailing && (c._contentTypeTextTrailing = !0));
  const d = c.events, m = [], h = {};
  let g, y, b = -1, x = a, k = 0, C = 0;
  const z = [C];
  for (; x; ) {
    for (; t.get(++u)[1] !== x; )
      ;
    s.push(u), x._tokenizer || (g = i.sliceStream(x), x.next || g.push(null), y && c.defineSkip(x.start), x._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = !0), c.write(g), x._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = void 0)), y = x, x = x.next;
  }
  for (x = a; ++b < d.length; )
    // Find a void token that includes a break.
    d[b][0] === "exit" && d[b - 1][0] === "enter" && d[b][1].type === d[b - 1][1].type && d[b][1].start.line !== d[b][1].end.line && (C = b + 1, z.push(C), x._tokenizer = void 0, x.previous = void 0, x = x.next);
  for (c.events = [], x ? (x._tokenizer = void 0, x.previous = void 0) : z.pop(), b = z.length; b--; ) {
    const T = d.slice(z[b], z[b + 1]), Y = s.pop();
    m.push([Y, Y + T.length - 1]), t.splice(Y, 2, T);
  }
  for (m.reverse(), b = -1; ++b < m.length; )
    h[k + m[b][0]] = k + m[b][1], k += m[b][1] - m[b][0] - 1;
  return h;
}
const IA = {
  resolve: qA,
  tokenize: VA
}, HA = {
  partial: !0,
  tokenize: YA
};
function qA(t) {
  return Qb(t), t;
}
function VA(t, r) {
  let a;
  return i;
  function i(d) {
    return t.enter("content"), a = t.enter("chunkContent", {
      contentType: "content"
    }), u(d);
  }
  function u(d) {
    return d === null ? s(d) : ye(d) ? t.check(HA, c, s)(d) : (t.consume(d), u);
  }
  function s(d) {
    return t.exit("chunkContent"), t.exit("content"), r(d);
  }
  function c(d) {
    return t.consume(d), t.exit("chunkContent"), a.next = t.enter("chunkContent", {
      contentType: "content",
      previous: a
    }), a = a.next, u;
  }
}
function YA(t, r, a) {
  const i = this;
  return u;
  function u(c) {
    return t.exit("chunkContent"), t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), Be(t, s, "linePrefix");
  }
  function s(c) {
    if (c === null || ye(c))
      return a(c);
    const d = i.events[i.events.length - 1];
    return !i.parser.constructs.disable.null.includes("codeIndented") && d && d[1].type === "linePrefix" && d[2].sliceSerialize(d[1], !0).length >= 4 ? r(c) : t.interrupt(i.parser.constructs.flow, a, r)(c);
  }
}
function Zb(t, r, a, i, u, s, c, d, m) {
  const h = m || Number.POSITIVE_INFINITY;
  let g = 0;
  return y;
  function y(T) {
    return T === 60 ? (t.enter(i), t.enter(u), t.enter(s), t.consume(T), t.exit(s), b) : T === null || T === 32 || T === 41 || lu(T) ? a(T) : (t.enter(i), t.enter(c), t.enter(d), t.enter("chunkString", {
      contentType: "string"
    }), C(T));
  }
  function b(T) {
    return T === 62 ? (t.enter(s), t.consume(T), t.exit(s), t.exit(u), t.exit(i), r) : (t.enter(d), t.enter("chunkString", {
      contentType: "string"
    }), x(T));
  }
  function x(T) {
    return T === 62 ? (t.exit("chunkString"), t.exit(d), b(T)) : T === null || T === 60 || ye(T) ? a(T) : (t.consume(T), T === 92 ? k : x);
  }
  function k(T) {
    return T === 60 || T === 62 || T === 92 ? (t.consume(T), x) : x(T);
  }
  function C(T) {
    return !g && (T === null || T === 41 || $e(T)) ? (t.exit("chunkString"), t.exit(d), t.exit(c), t.exit(i), r(T)) : g < h && T === 40 ? (t.consume(T), g++, C) : T === 41 ? (t.consume(T), g--, C) : T === null || T === 32 || T === 40 || lu(T) ? a(T) : (t.consume(T), T === 92 ? z : C);
  }
  function z(T) {
    return T === 40 || T === 41 || T === 92 ? (t.consume(T), C) : C(T);
  }
}
function Kb(t, r, a, i, u, s) {
  const c = this;
  let d = 0, m;
  return h;
  function h(x) {
    return t.enter(i), t.enter(u), t.consume(x), t.exit(u), t.enter(s), g;
  }
  function g(x) {
    return d > 999 || x === null || x === 91 || x === 93 && !m || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    x === 94 && !d && "_hiddenFootnoteSupport" in c.parser.constructs ? a(x) : x === 93 ? (t.exit(s), t.enter(u), t.consume(x), t.exit(u), t.exit(i), r) : ye(x) ? (t.enter("lineEnding"), t.consume(x), t.exit("lineEnding"), g) : (t.enter("chunkString", {
      contentType: "string"
    }), y(x));
  }
  function y(x) {
    return x === null || x === 91 || x === 93 || ye(x) || d++ > 999 ? (t.exit("chunkString"), g(x)) : (t.consume(x), m || (m = !je(x)), x === 92 ? b : y);
  }
  function b(x) {
    return x === 91 || x === 92 || x === 93 ? (t.consume(x), d++, y) : y(x);
  }
}
function Jb(t, r, a, i, u, s) {
  let c;
  return d;
  function d(b) {
    return b === 34 || b === 39 || b === 40 ? (t.enter(i), t.enter(u), t.consume(b), t.exit(u), c = b === 40 ? 41 : b, m) : a(b);
  }
  function m(b) {
    return b === c ? (t.enter(u), t.consume(b), t.exit(u), t.exit(i), r) : (t.enter(s), h(b));
  }
  function h(b) {
    return b === c ? (t.exit(s), m(c)) : b === null ? a(b) : ye(b) ? (t.enter("lineEnding"), t.consume(b), t.exit("lineEnding"), Be(t, h, "linePrefix")) : (t.enter("chunkString", {
      contentType: "string"
    }), g(b));
  }
  function g(b) {
    return b === c || b === null || ye(b) ? (t.exit("chunkString"), h(b)) : (t.consume(b), b === 92 ? y : g);
  }
  function y(b) {
    return b === c || b === 92 ? (t.consume(b), g) : g(b);
  }
}
function di(t, r) {
  let a;
  return i;
  function i(u) {
    return ye(u) ? (t.enter("lineEnding"), t.consume(u), t.exit("lineEnding"), a = !0, i) : je(u) ? Be(t, i, a ? "linePrefix" : "lineSuffix")(u) : r(u);
  }
}
const PA = {
  name: "definition",
  tokenize: GA
}, FA = {
  partial: !0,
  tokenize: XA
};
function GA(t, r, a) {
  const i = this;
  let u;
  return s;
  function s(x) {
    return t.enter("definition"), c(x);
  }
  function c(x) {
    return Kb.call(
      i,
      t,
      d,
      // Note: we don’t need to reset the way `markdown-rs` does.
      a,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(x);
  }
  function d(x) {
    return u = En(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1)), x === 58 ? (t.enter("definitionMarker"), t.consume(x), t.exit("definitionMarker"), m) : a(x);
  }
  function m(x) {
    return $e(x) ? di(t, h)(x) : h(x);
  }
  function h(x) {
    return Zb(
      t,
      g,
      // Note: we don’t need to reset the way `markdown-rs` does.
      a,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(x);
  }
  function g(x) {
    return t.attempt(FA, y, y)(x);
  }
  function y(x) {
    return je(x) ? Be(t, b, "whitespace")(x) : b(x);
  }
  function b(x) {
    return x === null || ye(x) ? (t.exit("definition"), i.parser.defined.push(u), r(x)) : a(x);
  }
}
function XA(t, r, a) {
  return i;
  function i(d) {
    return $e(d) ? di(t, u)(d) : a(d);
  }
  function u(d) {
    return Jb(t, s, a, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(d);
  }
  function s(d) {
    return je(d) ? Be(t, c, "whitespace")(d) : c(d);
  }
  function c(d) {
    return d === null || ye(d) ? r(d) : a(d);
  }
}
const QA = {
  name: "hardBreakEscape",
  tokenize: ZA
};
function ZA(t, r, a) {
  return i;
  function i(s) {
    return t.enter("hardBreakEscape"), t.consume(s), u;
  }
  function u(s) {
    return ye(s) ? (t.exit("hardBreakEscape"), r(s)) : a(s);
  }
}
const KA = {
  name: "headingAtx",
  resolve: JA,
  tokenize: $A
};
function JA(t, r) {
  let a = t.length - 2, i = 3, u, s;
  return t[i][1].type === "whitespace" && (i += 2), a - 2 > i && t[a][1].type === "whitespace" && (a -= 2), t[a][1].type === "atxHeadingSequence" && (i === a - 1 || a - 4 > i && t[a - 2][1].type === "whitespace") && (a -= i + 1 === a ? 2 : 4), a > i && (u = {
    type: "atxHeadingText",
    start: t[i][1].start,
    end: t[a][1].end
  }, s = {
    type: "chunkText",
    start: t[i][1].start,
    end: t[a][1].end,
    contentType: "text"
  }, ln(t, i, a - i + 1, [["enter", u, r], ["enter", s, r], ["exit", s, r], ["exit", u, r]])), t;
}
function $A(t, r, a) {
  let i = 0;
  return u;
  function u(g) {
    return t.enter("atxHeading"), s(g);
  }
  function s(g) {
    return t.enter("atxHeadingSequence"), c(g);
  }
  function c(g) {
    return g === 35 && i++ < 6 ? (t.consume(g), c) : g === null || $e(g) ? (t.exit("atxHeadingSequence"), d(g)) : a(g);
  }
  function d(g) {
    return g === 35 ? (t.enter("atxHeadingSequence"), m(g)) : g === null || ye(g) ? (t.exit("atxHeading"), r(g)) : je(g) ? Be(t, d, "whitespace")(g) : (t.enter("atxHeadingText"), h(g));
  }
  function m(g) {
    return g === 35 ? (t.consume(g), m) : (t.exit("atxHeadingSequence"), d(g));
  }
  function h(g) {
    return g === null || g === 35 || $e(g) ? (t.exit("atxHeadingText"), d(g)) : (t.consume(g), h);
  }
}
const WA = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Oy = ["pre", "script", "style", "textarea"], e4 = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: r4,
  tokenize: l4
}, t4 = {
  partial: !0,
  tokenize: i4
}, n4 = {
  partial: !0,
  tokenize: a4
};
function r4(t) {
  let r = t.length;
  for (; r-- && !(t[r][0] === "enter" && t[r][1].type === "htmlFlow"); )
    ;
  return r > 1 && t[r - 2][1].type === "linePrefix" && (t[r][1].start = t[r - 2][1].start, t[r + 1][1].start = t[r - 2][1].start, t.splice(r - 2, 2)), t;
}
function l4(t, r, a) {
  const i = this;
  let u, s, c, d, m;
  return h;
  function h(E) {
    return g(E);
  }
  function g(E) {
    return t.enter("htmlFlow"), t.enter("htmlFlowData"), t.consume(E), y;
  }
  function y(E) {
    return E === 33 ? (t.consume(E), b) : E === 47 ? (t.consume(E), s = !0, C) : E === 63 ? (t.consume(E), u = 3, i.interrupt ? r : w) : Bt(E) ? (t.consume(E), c = String.fromCharCode(E), z) : a(E);
  }
  function b(E) {
    return E === 45 ? (t.consume(E), u = 2, x) : E === 91 ? (t.consume(E), u = 5, d = 0, k) : Bt(E) ? (t.consume(E), u = 4, i.interrupt ? r : w) : a(E);
  }
  function x(E) {
    return E === 45 ? (t.consume(E), i.interrupt ? r : w) : a(E);
  }
  function k(E) {
    const ue = "CDATA[";
    return E === ue.charCodeAt(d++) ? (t.consume(E), d === ue.length ? i.interrupt ? r : te : k) : a(E);
  }
  function C(E) {
    return Bt(E) ? (t.consume(E), c = String.fromCharCode(E), z) : a(E);
  }
  function z(E) {
    if (E === null || E === 47 || E === 62 || $e(E)) {
      const ue = E === 47, ge = c.toLowerCase();
      return !ue && !s && Oy.includes(ge) ? (u = 1, i.interrupt ? r(E) : te(E)) : WA.includes(c.toLowerCase()) ? (u = 6, ue ? (t.consume(E), T) : i.interrupt ? r(E) : te(E)) : (u = 7, i.interrupt && !i.parser.lazy[i.now().line] ? a(E) : s ? Y(E) : j(E));
    }
    return E === 45 || zt(E) ? (t.consume(E), c += String.fromCharCode(E), z) : a(E);
  }
  function T(E) {
    return E === 62 ? (t.consume(E), i.interrupt ? r : te) : a(E);
  }
  function Y(E) {
    return je(E) ? (t.consume(E), Y) : O(E);
  }
  function j(E) {
    return E === 47 ? (t.consume(E), O) : E === 58 || E === 95 || Bt(E) ? (t.consume(E), Q) : je(E) ? (t.consume(E), j) : O(E);
  }
  function Q(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || zt(E) ? (t.consume(E), Q) : I(E);
  }
  function I(E) {
    return E === 61 ? (t.consume(E), R) : je(E) ? (t.consume(E), I) : j(E);
  }
  function R(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96 ? a(E) : E === 34 || E === 39 ? (t.consume(E), m = E, F) : je(E) ? (t.consume(E), R) : q(E);
  }
  function F(E) {
    return E === m ? (t.consume(E), m = null, Z) : E === null || ye(E) ? a(E) : (t.consume(E), F);
  }
  function q(E) {
    return E === null || E === 34 || E === 39 || E === 47 || E === 60 || E === 61 || E === 62 || E === 96 || $e(E) ? I(E) : (t.consume(E), q);
  }
  function Z(E) {
    return E === 47 || E === 62 || je(E) ? j(E) : a(E);
  }
  function O(E) {
    return E === 62 ? (t.consume(E), ne) : a(E);
  }
  function ne(E) {
    return E === null || ye(E) ? te(E) : je(E) ? (t.consume(E), ne) : a(E);
  }
  function te(E) {
    return E === 45 && u === 2 ? (t.consume(E), B) : E === 60 && u === 1 ? (t.consume(E), $) : E === 62 && u === 4 ? (t.consume(E), X) : E === 63 && u === 3 ? (t.consume(E), w) : E === 93 && u === 5 ? (t.consume(E), ve) : ye(E) && (u === 6 || u === 7) ? (t.exit("htmlFlowData"), t.check(t4, ae, re)(E)) : E === null || ye(E) ? (t.exit("htmlFlowData"), re(E)) : (t.consume(E), te);
  }
  function re(E) {
    return t.check(n4, le, ae)(E);
  }
  function le(E) {
    return t.enter("lineEnding"), t.consume(E), t.exit("lineEnding"), oe;
  }
  function oe(E) {
    return E === null || ye(E) ? re(E) : (t.enter("htmlFlowData"), te(E));
  }
  function B(E) {
    return E === 45 ? (t.consume(E), w) : te(E);
  }
  function $(E) {
    return E === 47 ? (t.consume(E), c = "", G) : te(E);
  }
  function G(E) {
    if (E === 62) {
      const ue = c.toLowerCase();
      return Oy.includes(ue) ? (t.consume(E), X) : te(E);
    }
    return Bt(E) && c.length < 8 ? (t.consume(E), c += String.fromCharCode(E), G) : te(E);
  }
  function ve(E) {
    return E === 93 ? (t.consume(E), w) : te(E);
  }
  function w(E) {
    return E === 62 ? (t.consume(E), X) : E === 45 && u === 2 ? (t.consume(E), w) : te(E);
  }
  function X(E) {
    return E === null || ye(E) ? (t.exit("htmlFlowData"), ae(E)) : (t.consume(E), X);
  }
  function ae(E) {
    return t.exit("htmlFlow"), r(E);
  }
}
function a4(t, r, a) {
  const i = this;
  return u;
  function u(c) {
    return ye(c) ? (t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), s) : a(c);
  }
  function s(c) {
    return i.parser.lazy[i.now().line] ? a(c) : r(c);
  }
}
function i4(t, r, a) {
  return i;
  function i(u) {
    return t.enter("lineEnding"), t.consume(u), t.exit("lineEnding"), t.attempt(ki, r, a);
  }
}
const o4 = {
  name: "htmlText",
  tokenize: u4
};
function u4(t, r, a) {
  const i = this;
  let u, s, c;
  return d;
  function d(w) {
    return t.enter("htmlText"), t.enter("htmlTextData"), t.consume(w), m;
  }
  function m(w) {
    return w === 33 ? (t.consume(w), h) : w === 47 ? (t.consume(w), I) : w === 63 ? (t.consume(w), j) : Bt(w) ? (t.consume(w), q) : a(w);
  }
  function h(w) {
    return w === 45 ? (t.consume(w), g) : w === 91 ? (t.consume(w), s = 0, k) : Bt(w) ? (t.consume(w), Y) : a(w);
  }
  function g(w) {
    return w === 45 ? (t.consume(w), x) : a(w);
  }
  function y(w) {
    return w === null ? a(w) : w === 45 ? (t.consume(w), b) : ye(w) ? (c = y, $(w)) : (t.consume(w), y);
  }
  function b(w) {
    return w === 45 ? (t.consume(w), x) : y(w);
  }
  function x(w) {
    return w === 62 ? B(w) : w === 45 ? b(w) : y(w);
  }
  function k(w) {
    const X = "CDATA[";
    return w === X.charCodeAt(s++) ? (t.consume(w), s === X.length ? C : k) : a(w);
  }
  function C(w) {
    return w === null ? a(w) : w === 93 ? (t.consume(w), z) : ye(w) ? (c = C, $(w)) : (t.consume(w), C);
  }
  function z(w) {
    return w === 93 ? (t.consume(w), T) : C(w);
  }
  function T(w) {
    return w === 62 ? B(w) : w === 93 ? (t.consume(w), T) : C(w);
  }
  function Y(w) {
    return w === null || w === 62 ? B(w) : ye(w) ? (c = Y, $(w)) : (t.consume(w), Y);
  }
  function j(w) {
    return w === null ? a(w) : w === 63 ? (t.consume(w), Q) : ye(w) ? (c = j, $(w)) : (t.consume(w), j);
  }
  function Q(w) {
    return w === 62 ? B(w) : j(w);
  }
  function I(w) {
    return Bt(w) ? (t.consume(w), R) : a(w);
  }
  function R(w) {
    return w === 45 || zt(w) ? (t.consume(w), R) : F(w);
  }
  function F(w) {
    return ye(w) ? (c = F, $(w)) : je(w) ? (t.consume(w), F) : B(w);
  }
  function q(w) {
    return w === 45 || zt(w) ? (t.consume(w), q) : w === 47 || w === 62 || $e(w) ? Z(w) : a(w);
  }
  function Z(w) {
    return w === 47 ? (t.consume(w), B) : w === 58 || w === 95 || Bt(w) ? (t.consume(w), O) : ye(w) ? (c = Z, $(w)) : je(w) ? (t.consume(w), Z) : B(w);
  }
  function O(w) {
    return w === 45 || w === 46 || w === 58 || w === 95 || zt(w) ? (t.consume(w), O) : ne(w);
  }
  function ne(w) {
    return w === 61 ? (t.consume(w), te) : ye(w) ? (c = ne, $(w)) : je(w) ? (t.consume(w), ne) : Z(w);
  }
  function te(w) {
    return w === null || w === 60 || w === 61 || w === 62 || w === 96 ? a(w) : w === 34 || w === 39 ? (t.consume(w), u = w, re) : ye(w) ? (c = te, $(w)) : je(w) ? (t.consume(w), te) : (t.consume(w), le);
  }
  function re(w) {
    return w === u ? (t.consume(w), u = void 0, oe) : w === null ? a(w) : ye(w) ? (c = re, $(w)) : (t.consume(w), re);
  }
  function le(w) {
    return w === null || w === 34 || w === 39 || w === 60 || w === 61 || w === 96 ? a(w) : w === 47 || w === 62 || $e(w) ? Z(w) : (t.consume(w), le);
  }
  function oe(w) {
    return w === 47 || w === 62 || $e(w) ? Z(w) : a(w);
  }
  function B(w) {
    return w === 62 ? (t.consume(w), t.exit("htmlTextData"), t.exit("htmlText"), r) : a(w);
  }
  function $(w) {
    return t.exit("htmlTextData"), t.enter("lineEnding"), t.consume(w), t.exit("lineEnding"), G;
  }
  function G(w) {
    return je(w) ? Be(t, ve, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w) : ve(w);
  }
  function ve(w) {
    return t.enter("htmlTextData"), c(w);
  }
}
const Sd = {
  name: "labelEnd",
  resolveAll: d4,
  resolveTo: h4,
  tokenize: p4
}, s4 = {
  tokenize: m4
}, c4 = {
  tokenize: g4
}, f4 = {
  tokenize: y4
};
function d4(t) {
  let r = -1;
  const a = [];
  for (; ++r < t.length; ) {
    const i = t[r][1];
    if (a.push(t[r]), i.type === "labelImage" || i.type === "labelLink" || i.type === "labelEnd") {
      const u = i.type === "labelImage" ? 4 : 2;
      i.type = "data", r += u;
    }
  }
  return t.length !== a.length && ln(t, 0, t.length, a), t;
}
function h4(t, r) {
  let a = t.length, i = 0, u, s, c, d;
  for (; a--; )
    if (u = t[a][1], s) {
      if (u.type === "link" || u.type === "labelLink" && u._inactive)
        break;
      t[a][0] === "enter" && u.type === "labelLink" && (u._inactive = !0);
    } else if (c) {
      if (t[a][0] === "enter" && (u.type === "labelImage" || u.type === "labelLink") && !u._balanced && (s = a, u.type !== "labelLink")) {
        i = 2;
        break;
      }
    } else u.type === "labelEnd" && (c = a);
  const m = {
    type: t[s][1].type === "labelLink" ? "link" : "image",
    start: {
      ...t[s][1].start
    },
    end: {
      ...t[t.length - 1][1].end
    }
  }, h = {
    type: "label",
    start: {
      ...t[s][1].start
    },
    end: {
      ...t[c][1].end
    }
  }, g = {
    type: "labelText",
    start: {
      ...t[s + i + 2][1].end
    },
    end: {
      ...t[c - 2][1].start
    }
  };
  return d = [["enter", m, r], ["enter", h, r]], d = yn(d, t.slice(s + 1, s + i + 3)), d = yn(d, [["enter", g, r]]), d = yn(d, vu(r.parser.constructs.insideSpan.null, t.slice(s + i + 4, c - 3), r)), d = yn(d, [["exit", g, r], t[c - 2], t[c - 1], ["exit", h, r]]), d = yn(d, t.slice(c + 1)), d = yn(d, [["exit", m, r]]), ln(t, s, t.length, d), t;
}
function p4(t, r, a) {
  const i = this;
  let u = i.events.length, s, c;
  for (; u--; )
    if ((i.events[u][1].type === "labelImage" || i.events[u][1].type === "labelLink") && !i.events[u][1]._balanced) {
      s = i.events[u][1];
      break;
    }
  return d;
  function d(b) {
    return s ? s._inactive ? y(b) : (c = i.parser.defined.includes(En(i.sliceSerialize({
      start: s.end,
      end: i.now()
    }))), t.enter("labelEnd"), t.enter("labelMarker"), t.consume(b), t.exit("labelMarker"), t.exit("labelEnd"), m) : a(b);
  }
  function m(b) {
    return b === 40 ? t.attempt(s4, g, c ? g : y)(b) : b === 91 ? t.attempt(c4, g, c ? h : y)(b) : c ? g(b) : y(b);
  }
  function h(b) {
    return t.attempt(f4, g, y)(b);
  }
  function g(b) {
    return r(b);
  }
  function y(b) {
    return s._balanced = !0, a(b);
  }
}
function m4(t, r, a) {
  return i;
  function i(y) {
    return t.enter("resource"), t.enter("resourceMarker"), t.consume(y), t.exit("resourceMarker"), u;
  }
  function u(y) {
    return $e(y) ? di(t, s)(y) : s(y);
  }
  function s(y) {
    return y === 41 ? g(y) : Zb(t, c, d, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(y);
  }
  function c(y) {
    return $e(y) ? di(t, m)(y) : g(y);
  }
  function d(y) {
    return a(y);
  }
  function m(y) {
    return y === 34 || y === 39 || y === 40 ? Jb(t, h, a, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(y) : g(y);
  }
  function h(y) {
    return $e(y) ? di(t, g)(y) : g(y);
  }
  function g(y) {
    return y === 41 ? (t.enter("resourceMarker"), t.consume(y), t.exit("resourceMarker"), t.exit("resource"), r) : a(y);
  }
}
function g4(t, r, a) {
  const i = this;
  return u;
  function u(d) {
    return Kb.call(i, t, s, c, "reference", "referenceMarker", "referenceString")(d);
  }
  function s(d) {
    return i.parser.defined.includes(En(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1))) ? r(d) : a(d);
  }
  function c(d) {
    return a(d);
  }
}
function y4(t, r, a) {
  return i;
  function i(s) {
    return t.enter("reference"), t.enter("referenceMarker"), t.consume(s), t.exit("referenceMarker"), u;
  }
  function u(s) {
    return s === 93 ? (t.enter("referenceMarker"), t.consume(s), t.exit("referenceMarker"), t.exit("reference"), r) : a(s);
  }
}
const v4 = {
  name: "labelStartImage",
  resolveAll: Sd.resolveAll,
  tokenize: b4
};
function b4(t, r, a) {
  const i = this;
  return u;
  function u(d) {
    return t.enter("labelImage"), t.enter("labelImageMarker"), t.consume(d), t.exit("labelImageMarker"), s;
  }
  function s(d) {
    return d === 91 ? (t.enter("labelMarker"), t.consume(d), t.exit("labelMarker"), t.exit("labelImage"), c) : a(d);
  }
  function c(d) {
    return d === 94 && "_hiddenFootnoteSupport" in i.parser.constructs ? a(d) : r(d);
  }
}
const x4 = {
  name: "labelStartLink",
  resolveAll: Sd.resolveAll,
  tokenize: w4
};
function w4(t, r, a) {
  const i = this;
  return u;
  function u(c) {
    return t.enter("labelLink"), t.enter("labelMarker"), t.consume(c), t.exit("labelMarker"), t.exit("labelLink"), s;
  }
  function s(c) {
    return c === 94 && "_hiddenFootnoteSupport" in i.parser.constructs ? a(c) : r(c);
  }
}
const ff = {
  name: "lineEnding",
  tokenize: S4
};
function S4(t, r) {
  return a;
  function a(i) {
    return t.enter("lineEnding"), t.consume(i), t.exit("lineEnding"), Be(t, r, "linePrefix");
  }
}
const eu = {
  name: "thematicBreak",
  tokenize: E4
};
function E4(t, r, a) {
  let i = 0, u;
  return s;
  function s(h) {
    return t.enter("thematicBreak"), c(h);
  }
  function c(h) {
    return u = h, d(h);
  }
  function d(h) {
    return h === u ? (t.enter("thematicBreakSequence"), m(h)) : i >= 3 && (h === null || ye(h)) ? (t.exit("thematicBreak"), r(h)) : a(h);
  }
  function m(h) {
    return h === u ? (t.consume(h), i++, m) : (t.exit("thematicBreakSequence"), je(h) ? Be(t, d, "whitespace")(h) : d(h));
  }
}
const Gt = {
  continuation: {
    tokenize: T4
  },
  exit: R4,
  name: "list",
  tokenize: A4
}, k4 = {
  partial: !0,
  tokenize: D4
}, C4 = {
  partial: !0,
  tokenize: _4
};
function A4(t, r, a) {
  const i = this, u = i.events[i.events.length - 1];
  let s = u && u[1].type === "linePrefix" ? u[2].sliceSerialize(u[1], !0).length : 0, c = 0;
  return d;
  function d(x) {
    const k = i.containerState.type || (x === 42 || x === 43 || x === 45 ? "listUnordered" : "listOrdered");
    if (k === "listUnordered" ? !i.containerState.marker || x === i.containerState.marker : Gf(x)) {
      if (i.containerState.type || (i.containerState.type = k, t.enter(k, {
        _container: !0
      })), k === "listUnordered")
        return t.enter("listItemPrefix"), x === 42 || x === 45 ? t.check(eu, a, h)(x) : h(x);
      if (!i.interrupt || x === 49)
        return t.enter("listItemPrefix"), t.enter("listItemValue"), m(x);
    }
    return a(x);
  }
  function m(x) {
    return Gf(x) && ++c < 10 ? (t.consume(x), m) : (!i.interrupt || c < 2) && (i.containerState.marker ? x === i.containerState.marker : x === 41 || x === 46) ? (t.exit("listItemValue"), h(x)) : a(x);
  }
  function h(x) {
    return t.enter("listItemMarker"), t.consume(x), t.exit("listItemMarker"), i.containerState.marker = i.containerState.marker || x, t.check(
      ki,
      // Can’t be empty when interrupting.
      i.interrupt ? a : g,
      t.attempt(k4, b, y)
    );
  }
  function g(x) {
    return i.containerState.initialBlankLine = !0, s++, b(x);
  }
  function y(x) {
    return je(x) ? (t.enter("listItemPrefixWhitespace"), t.consume(x), t.exit("listItemPrefixWhitespace"), b) : a(x);
  }
  function b(x) {
    return i.containerState.size = s + i.sliceSerialize(t.exit("listItemPrefix"), !0).length, r(x);
  }
}
function T4(t, r, a) {
  const i = this;
  return i.containerState._closeFlow = void 0, t.check(ki, u, s);
  function u(d) {
    return i.containerState.furtherBlankLines = i.containerState.furtherBlankLines || i.containerState.initialBlankLine, Be(t, r, "listItemIndent", i.containerState.size + 1)(d);
  }
  function s(d) {
    return i.containerState.furtherBlankLines || !je(d) ? (i.containerState.furtherBlankLines = void 0, i.containerState.initialBlankLine = void 0, c(d)) : (i.containerState.furtherBlankLines = void 0, i.containerState.initialBlankLine = void 0, t.attempt(C4, r, c)(d));
  }
  function c(d) {
    return i.containerState._closeFlow = !0, i.interrupt = void 0, Be(t, t.attempt(Gt, r, a), "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(d);
  }
}
function _4(t, r, a) {
  const i = this;
  return Be(t, u, "listItemIndent", i.containerState.size + 1);
  function u(s) {
    const c = i.events[i.events.length - 1];
    return c && c[1].type === "listItemIndent" && c[2].sliceSerialize(c[1], !0).length === i.containerState.size ? r(s) : a(s);
  }
}
function R4(t) {
  t.exit(this.containerState.type);
}
function D4(t, r, a) {
  const i = this;
  return Be(t, u, "listItemPrefixWhitespace", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function u(s) {
    const c = i.events[i.events.length - 1];
    return !je(s) && c && c[1].type === "listItemPrefixWhitespace" ? r(s) : a(s);
  }
}
const zy = {
  name: "setextUnderline",
  resolveTo: N4,
  tokenize: O4
};
function N4(t, r) {
  let a = t.length, i, u, s;
  for (; a--; )
    if (t[a][0] === "enter") {
      if (t[a][1].type === "content") {
        i = a;
        break;
      }
      t[a][1].type === "paragraph" && (u = a);
    } else
      t[a][1].type === "content" && t.splice(a, 1), !s && t[a][1].type === "definition" && (s = a);
  const c = {
    type: "setextHeading",
    start: {
      ...t[i][1].start
    },
    end: {
      ...t[t.length - 1][1].end
    }
  };
  return t[u][1].type = "setextHeadingText", s ? (t.splice(u, 0, ["enter", c, r]), t.splice(s + 1, 0, ["exit", t[i][1], r]), t[i][1].end = {
    ...t[s][1].end
  }) : t[i][1] = c, t.push(["exit", c, r]), t;
}
function O4(t, r, a) {
  const i = this;
  let u;
  return s;
  function s(h) {
    let g = i.events.length, y;
    for (; g--; )
      if (i.events[g][1].type !== "lineEnding" && i.events[g][1].type !== "linePrefix" && i.events[g][1].type !== "content") {
        y = i.events[g][1].type === "paragraph";
        break;
      }
    return !i.parser.lazy[i.now().line] && (i.interrupt || y) ? (t.enter("setextHeadingLine"), u = h, c(h)) : a(h);
  }
  function c(h) {
    return t.enter("setextHeadingLineSequence"), d(h);
  }
  function d(h) {
    return h === u ? (t.consume(h), d) : (t.exit("setextHeadingLineSequence"), je(h) ? Be(t, m, "lineSuffix")(h) : m(h));
  }
  function m(h) {
    return h === null || ye(h) ? (t.exit("setextHeadingLine"), r(h)) : a(h);
  }
}
const z4 = {
  tokenize: M4
};
function M4(t) {
  const r = this, a = t.attempt(
    // Try to parse a blank line.
    ki,
    i,
    // Try to parse initial flow (essentially, only code).
    t.attempt(this.parser.constructs.flowInitial, u, Be(t, t.attempt(this.parser.constructs.flow, u, t.attempt(IA, u)), "linePrefix"))
  );
  return a;
  function i(s) {
    if (s === null) {
      t.consume(s);
      return;
    }
    return t.enter("lineEndingBlank"), t.consume(s), t.exit("lineEndingBlank"), r.currentConstruct = void 0, a;
  }
  function u(s) {
    if (s === null) {
      t.consume(s);
      return;
    }
    return t.enter("lineEnding"), t.consume(s), t.exit("lineEnding"), r.currentConstruct = void 0, a;
  }
}
const L4 = {
  resolveAll: Wb()
}, j4 = $b("string"), U4 = $b("text");
function $b(t) {
  return {
    resolveAll: Wb(t === "text" ? B4 : void 0),
    tokenize: r
  };
  function r(a) {
    const i = this, u = this.parser.constructs[t], s = a.attempt(u, c, d);
    return c;
    function c(g) {
      return h(g) ? s(g) : d(g);
    }
    function d(g) {
      if (g === null) {
        a.consume(g);
        return;
      }
      return a.enter("data"), a.consume(g), m;
    }
    function m(g) {
      return h(g) ? (a.exit("data"), s(g)) : (a.consume(g), m);
    }
    function h(g) {
      if (g === null)
        return !0;
      const y = u[g];
      let b = -1;
      if (y)
        for (; ++b < y.length; ) {
          const x = y[b];
          if (!x.previous || x.previous.call(i, i.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Wb(t) {
  return r;
  function r(a, i) {
    let u = -1, s;
    for (; ++u <= a.length; )
      s === void 0 ? a[u] && a[u][1].type === "data" && (s = u, u++) : (!a[u] || a[u][1].type !== "data") && (u !== s + 2 && (a[s][1].end = a[u - 1][1].end, a.splice(s + 2, u - s - 2), u = s + 2), s = void 0);
    return t ? t(a, i) : a;
  }
}
function B4(t, r) {
  let a = 0;
  for (; ++a <= t.length; )
    if ((a === t.length || t[a][1].type === "lineEnding") && t[a - 1][1].type === "data") {
      const i = t[a - 1][1], u = r.sliceStream(i);
      let s = u.length, c = -1, d = 0, m;
      for (; s--; ) {
        const h = u[s];
        if (typeof h == "string") {
          for (c = h.length; h.charCodeAt(c - 1) === 32; )
            d++, c--;
          if (c) break;
          c = -1;
        } else if (h === -2)
          m = !0, d++;
        else if (h !== -1) {
          s++;
          break;
        }
      }
      if (r._contentTypeTextTrailing && a === t.length && (d = 0), d) {
        const h = {
          type: a === t.length || m || d < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: s ? c : i.start._bufferIndex + c,
            _index: i.start._index + s,
            line: i.end.line,
            column: i.end.column - d,
            offset: i.end.offset - d
          },
          end: {
            ...i.end
          }
        };
        i.end = {
          ...h.start
        }, i.start.offset === i.end.offset ? Object.assign(i, h) : (t.splice(a, 0, ["enter", h, r], ["exit", h, r]), a += 2);
      }
      a++;
    }
  return t;
}
const I4 = {
  42: Gt,
  43: Gt,
  45: Gt,
  48: Gt,
  49: Gt,
  50: Gt,
  51: Gt,
  52: Gt,
  53: Gt,
  54: Gt,
  55: Gt,
  56: Gt,
  57: Gt,
  62: Fb
}, H4 = {
  91: PA
}, q4 = {
  [-2]: cf,
  [-1]: cf,
  32: cf
}, V4 = {
  35: KA,
  42: eu,
  45: [zy, eu],
  60: e4,
  61: zy,
  95: eu,
  96: Ny,
  126: Ny
}, Y4 = {
  38: Xb,
  92: Gb
}, P4 = {
  [-5]: ff,
  [-4]: ff,
  [-3]: ff,
  33: v4,
  38: Xb,
  42: Xf,
  60: [xA, o4],
  91: x4,
  92: [QA, Gb],
  93: Sd,
  95: Xf,
  96: zA
}, F4 = {
  null: [Xf, L4]
}, G4 = {
  null: [42, 95]
}, X4 = {
  null: []
}, Q4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: G4,
  contentInitial: H4,
  disable: X4,
  document: I4,
  flow: V4,
  flowInitial: q4,
  insideSpan: F4,
  string: Y4,
  text: P4
}, Symbol.toStringTag, { value: "Module" }));
function Z4(t, r, a) {
  let i = {
    _bufferIndex: -1,
    _index: 0,
    line: a && a.line || 1,
    column: a && a.column || 1,
    offset: a && a.offset || 0
  };
  const u = {}, s = [];
  let c = [], d = [];
  const m = {
    attempt: F(I),
    check: F(R),
    consume: Y,
    enter: j,
    exit: Q,
    interrupt: F(R, {
      interrupt: !0
    })
  }, h = {
    code: null,
    containerState: {},
    defineSkip: C,
    events: [],
    now: k,
    parser: t,
    previous: null,
    sliceSerialize: b,
    sliceStream: x,
    write: y
  };
  let g = r.tokenize.call(h, m);
  return r.resolveAll && s.push(r), h;
  function y(ne) {
    return c = yn(c, ne), z(), c[c.length - 1] !== null ? [] : (q(r, 0), h.events = vu(s, h.events, h), h.events);
  }
  function b(ne, te) {
    return J4(x(ne), te);
  }
  function x(ne) {
    return K4(c, ne);
  }
  function k() {
    const {
      _bufferIndex: ne,
      _index: te,
      line: re,
      column: le,
      offset: oe
    } = i;
    return {
      _bufferIndex: ne,
      _index: te,
      line: re,
      column: le,
      offset: oe
    };
  }
  function C(ne) {
    u[ne.line] = ne.column, O();
  }
  function z() {
    let ne;
    for (; i._index < c.length; ) {
      const te = c[i._index];
      if (typeof te == "string")
        for (ne = i._index, i._bufferIndex < 0 && (i._bufferIndex = 0); i._index === ne && i._bufferIndex < te.length; )
          T(te.charCodeAt(i._bufferIndex));
      else
        T(te);
    }
  }
  function T(ne) {
    g = g(ne);
  }
  function Y(ne) {
    ye(ne) ? (i.line++, i.column = 1, i.offset += ne === -3 ? 2 : 1, O()) : ne !== -1 && (i.column++, i.offset++), i._bufferIndex < 0 ? i._index++ : (i._bufferIndex++, i._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    c[i._index].length && (i._bufferIndex = -1, i._index++)), h.previous = ne;
  }
  function j(ne, te) {
    const re = te || {};
    return re.type = ne, re.start = k(), h.events.push(["enter", re, h]), d.push(re), re;
  }
  function Q(ne) {
    const te = d.pop();
    return te.end = k(), h.events.push(["exit", te, h]), te;
  }
  function I(ne, te) {
    q(ne, te.from);
  }
  function R(ne, te) {
    te.restore();
  }
  function F(ne, te) {
    return re;
    function re(le, oe, B) {
      let $, G, ve, w;
      return Array.isArray(le) ? (
        /* c8 ignore next 1 */
        ae(le)
      ) : "tokenize" in le ? (
        // Looks like a construct.
        ae([
          /** @type {Construct} */
          le
        ])
      ) : X(le);
      function X(se) {
        return ke;
        function ke(Te) {
          const tt = Te !== null && se[Te], rt = Te !== null && se.null, vt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(tt) ? tt : tt ? [tt] : [],
            ...Array.isArray(rt) ? rt : rt ? [rt] : []
          ];
          return ae(vt)(Te);
        }
      }
      function ae(se) {
        return $ = se, G = 0, se.length === 0 ? B : E(se[G]);
      }
      function E(se) {
        return ke;
        function ke(Te) {
          return w = Z(), ve = se, se.partial || (h.currentConstruct = se), se.name && h.parser.constructs.disable.null.includes(se.name) ? ge() : se.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            te ? Object.assign(Object.create(h), te) : h,
            m,
            ue,
            ge
          )(Te);
        }
      }
      function ue(se) {
        return ne(ve, w), oe;
      }
      function ge(se) {
        return w.restore(), ++G < $.length ? E($[G]) : B;
      }
    }
  }
  function q(ne, te) {
    ne.resolveAll && !s.includes(ne) && s.push(ne), ne.resolve && ln(h.events, te, h.events.length - te, ne.resolve(h.events.slice(te), h)), ne.resolveTo && (h.events = ne.resolveTo(h.events, h));
  }
  function Z() {
    const ne = k(), te = h.previous, re = h.currentConstruct, le = h.events.length, oe = Array.from(d);
    return {
      from: le,
      restore: B
    };
    function B() {
      i = ne, h.previous = te, h.currentConstruct = re, h.events.length = le, d = oe, O();
    }
  }
  function O() {
    i.line in u && i.column < 2 && (i.column = u[i.line], i.offset += u[i.line] - 1);
  }
}
function K4(t, r) {
  const a = r.start._index, i = r.start._bufferIndex, u = r.end._index, s = r.end._bufferIndex;
  let c;
  if (a === u)
    c = [t[a].slice(i, s)];
  else {
    if (c = t.slice(a, u), i > -1) {
      const d = c[0];
      typeof d == "string" ? c[0] = d.slice(i) : c.shift();
    }
    s > 0 && c.push(t[u].slice(0, s));
  }
  return c;
}
function J4(t, r) {
  let a = -1;
  const i = [];
  let u;
  for (; ++a < t.length; ) {
    const s = t[a];
    let c;
    if (typeof s == "string")
      c = s;
    else switch (s) {
      case -5: {
        c = "\r";
        break;
      }
      case -4: {
        c = `
`;
        break;
      }
      case -3: {
        c = `\r
`;
        break;
      }
      case -2: {
        c = r ? " " : "	";
        break;
      }
      case -1: {
        if (!r && u) continue;
        c = " ";
        break;
      }
      default:
        c = String.fromCharCode(s);
    }
    u = s === -2, i.push(c);
  }
  return i.join("");
}
function $4(t) {
  const i = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Yb([Q4, ...(t || {}).extensions || []])
    ),
    content: u(hA),
    defined: [],
    document: u(mA),
    flow: u(z4),
    lazy: {},
    string: u(j4),
    text: u(U4)
  };
  return i;
  function u(s) {
    return c;
    function c(d) {
      return Z4(i, s, d);
    }
  }
}
function W4(t) {
  for (; !Qb(t); )
    ;
  return t;
}
const My = /[\0\t\n\r]/g;
function eT() {
  let t = 1, r = "", a = !0, i;
  return u;
  function u(s, c, d) {
    const m = [];
    let h, g, y, b, x;
    for (s = r + (typeof s == "string" ? s.toString() : new TextDecoder(c || void 0).decode(s)), y = 0, r = "", a && (s.charCodeAt(0) === 65279 && y++, a = void 0); y < s.length; ) {
      if (My.lastIndex = y, h = My.exec(s), b = h && h.index !== void 0 ? h.index : s.length, x = s.charCodeAt(b), !h) {
        r = s.slice(y);
        break;
      }
      if (x === 10 && y === b && i)
        m.push(-3), i = void 0;
      else
        switch (i && (m.push(-5), i = void 0), y < b && (m.push(s.slice(y, b)), t += b - y), x) {
          case 0: {
            m.push(65533), t++;
            break;
          }
          case 9: {
            for (g = Math.ceil(t / 4) * 4, m.push(-2); t++ < g; ) m.push(-1);
            break;
          }
          case 10: {
            m.push(-4), t = 1;
            break;
          }
          default:
            i = !0, t = 1;
        }
      y = b + 1;
    }
    return d && (i && m.push(-5), r && m.push(r), m.push(null)), m;
  }
}
const tT = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function nT(t) {
  return t.replace(tT, rT);
}
function rT(t, r, a) {
  if (r)
    return r;
  if (a.charCodeAt(0) === 35) {
    const u = a.charCodeAt(1), s = u === 120 || u === 88;
    return Pb(a.slice(s ? 2 : 1), s ? 16 : 10);
  }
  return wd(a) || t;
}
const e1 = {}.hasOwnProperty;
function lT(t, r, a) {
  return typeof r != "string" && (a = r, r = void 0), aT(a)(W4($4(a).document().write(eT()(t, r, !0))));
}
function aT(t) {
  const r = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: s(Fe),
      autolinkProtocol: Z,
      autolinkEmail: Z,
      atxHeading: s(ze),
      blockQuote: s(rt),
      characterEscape: Z,
      characterReference: Z,
      codeFenced: s(vt),
      codeFencedFenceInfo: c,
      codeFencedFenceMeta: c,
      codeIndented: s(vt, c),
      codeText: s(Ce, c),
      codeTextData: Z,
      data: Z,
      codeFlowValue: Z,
      definition: s(Se),
      definitionDestinationString: c,
      definitionLabelString: c,
      definitionTitleString: c,
      emphasis: s(be),
      hardBreakEscape: s(Ae),
      hardBreakTrailing: s(Ae),
      htmlFlow: s(Ve, c),
      htmlFlowData: Z,
      htmlText: s(Ve, c),
      htmlTextData: Z,
      image: s(kt),
      label: c,
      link: s(Fe),
      listItem: s(ct),
      listItemValue: b,
      listOrdered: s(Pe, y),
      listUnordered: s(Pe),
      paragraph: s(rr),
      reference: E,
      referenceString: c,
      resourceDestinationString: c,
      resourceTitleString: c,
      setextHeading: s(ze),
      strong: s(jn),
      thematicBreak: s(pt)
    },
    exit: {
      atxHeading: m(),
      atxHeadingSequence: I,
      autolink: m(),
      autolinkEmail: tt,
      autolinkProtocol: Te,
      blockQuote: m(),
      characterEscapeValue: O,
      characterReferenceMarkerHexadecimal: ge,
      characterReferenceMarkerNumeric: ge,
      characterReferenceValue: se,
      characterReference: ke,
      codeFenced: m(z),
      codeFencedFence: C,
      codeFencedFenceInfo: x,
      codeFencedFenceMeta: k,
      codeFlowValue: O,
      codeIndented: m(T),
      codeText: m(oe),
      codeTextData: O,
      data: O,
      definition: m(),
      definitionDestinationString: Q,
      definitionLabelString: Y,
      definitionTitleString: j,
      emphasis: m(),
      hardBreakEscape: m(te),
      hardBreakTrailing: m(te),
      htmlFlow: m(re),
      htmlFlowData: O,
      htmlText: m(le),
      htmlTextData: O,
      image: m($),
      label: ve,
      labelText: G,
      lineEnding: ne,
      link: m(B),
      listItem: m(),
      listOrdered: m(),
      listUnordered: m(),
      paragraph: m(),
      referenceString: ue,
      resourceDestinationString: w,
      resourceTitleString: X,
      resource: ae,
      setextHeading: m(q),
      setextHeadingLineSequence: F,
      setextHeadingText: R,
      strong: m(),
      thematicBreak: m()
    }
  };
  t1(r, (t || {}).mdastExtensions || []);
  const a = {};
  return i;
  function i(P) {
    let ee = {
      type: "root",
      children: []
    };
    const he = {
      stack: [ee],
      tokenStack: [],
      config: r,
      enter: d,
      exit: h,
      buffer: c,
      resume: g,
      data: a
    }, me = [];
    let He = -1;
    for (; ++He < P.length; )
      if (P[He][1].type === "listOrdered" || P[He][1].type === "listUnordered")
        if (P[He][0] === "enter")
          me.push(He);
        else {
          const Rt = me.pop();
          He = u(P, Rt, He);
        }
    for (He = -1; ++He < P.length; ) {
      const Rt = r[P[He][0]];
      e1.call(Rt, P[He][1].type) && Rt[P[He][1].type].call(Object.assign({
        sliceSerialize: P[He][2].sliceSerialize
      }, he), P[He][1]);
    }
    if (he.tokenStack.length > 0) {
      const Rt = he.tokenStack[he.tokenStack.length - 1];
      (Rt[1] || Ly).call(he, void 0, Rt[0]);
    }
    for (ee.position = {
      start: Rr(P.length > 0 ? P[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Rr(P.length > 0 ? P[P.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, He = -1; ++He < r.transforms.length; )
      ee = r.transforms[He](ee) || ee;
    return ee;
  }
  function u(P, ee, he) {
    let me = ee - 1, He = -1, Rt = !1, an, Ht, Cn, Qt;
    for (; ++me <= he; ) {
      const bt = P[me];
      switch (bt[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          bt[0] === "enter" ? He++ : He--, Qt = void 0;
          break;
        }
        case "lineEndingBlank": {
          bt[0] === "enter" && (an && !Qt && !He && !Cn && (Cn = me), Qt = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Qt = void 0;
      }
      if (!He && bt[0] === "enter" && bt[1].type === "listItemPrefix" || He === -1 && bt[0] === "exit" && (bt[1].type === "listUnordered" || bt[1].type === "listOrdered")) {
        if (an) {
          let on = me;
          for (Ht = void 0; on--; ) {
            const bn = P[on];
            if (bn[1].type === "lineEnding" || bn[1].type === "lineEndingBlank") {
              if (bn[0] === "exit") continue;
              Ht && (P[Ht][1].type = "lineEndingBlank", Rt = !0), bn[1].type = "lineEnding", Ht = on;
            } else if (!(bn[1].type === "linePrefix" || bn[1].type === "blockQuotePrefix" || bn[1].type === "blockQuotePrefixWhitespace" || bn[1].type === "blockQuoteMarker" || bn[1].type === "listItemIndent")) break;
          }
          Cn && (!Ht || Cn < Ht) && (an._spread = !0), an.end = Object.assign({}, Ht ? P[Ht][1].start : bt[1].end), P.splice(Ht || me, 0, ["exit", an, bt[2]]), me++, he++;
        }
        if (bt[1].type === "listItemPrefix") {
          const on = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, bt[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          an = on, P.splice(me, 0, ["enter", on, bt[2]]), me++, he++, Cn = void 0, Qt = !0;
        }
      }
    }
    return P[ee][1]._spread = Rt, he;
  }
  function s(P, ee) {
    return he;
    function he(me) {
      d.call(this, P(me), me), ee && ee.call(this, me);
    }
  }
  function c() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function d(P, ee, he) {
    this.stack[this.stack.length - 1].children.push(P), this.stack.push(P), this.tokenStack.push([ee, he || void 0]), P.position = {
      start: Rr(ee.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function m(P) {
    return ee;
    function ee(he) {
      P && P.call(this, he), h.call(this, he);
    }
  }
  function h(P, ee) {
    const he = this.stack.pop(), me = this.tokenStack.pop();
    if (me)
      me[0].type !== P.type && (ee ? ee.call(this, P, me[0]) : (me[1] || Ly).call(this, P, me[0]));
    else throw new Error("Cannot close `" + P.type + "` (" + fi({
      start: P.start,
      end: P.end
    }) + "): it’s not open");
    he.position.end = Rr(P.end);
  }
  function g() {
    return xd(this.stack.pop());
  }
  function y() {
    this.data.expectingFirstListItemValue = !0;
  }
  function b(P) {
    if (this.data.expectingFirstListItemValue) {
      const ee = this.stack[this.stack.length - 2];
      ee.start = Number.parseInt(this.sliceSerialize(P), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function x() {
    const P = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.lang = P;
  }
  function k() {
    const P = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.meta = P;
  }
  function C() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function z() {
    const P = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.value = P.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function T() {
    const P = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.value = P.replace(/(\r?\n|\r)$/g, "");
  }
  function Y(P) {
    const ee = this.resume(), he = this.stack[this.stack.length - 1];
    he.label = ee, he.identifier = En(this.sliceSerialize(P)).toLowerCase();
  }
  function j() {
    const P = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.title = P;
  }
  function Q() {
    const P = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.url = P;
  }
  function I(P) {
    const ee = this.stack[this.stack.length - 1];
    if (!ee.depth) {
      const he = this.sliceSerialize(P).length;
      ee.depth = he;
    }
  }
  function R() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function F(P) {
    const ee = this.stack[this.stack.length - 1];
    ee.depth = this.sliceSerialize(P).codePointAt(0) === 61 ? 1 : 2;
  }
  function q() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function Z(P) {
    const he = this.stack[this.stack.length - 1].children;
    let me = he[he.length - 1];
    (!me || me.type !== "text") && (me = lr(), me.position = {
      start: Rr(P.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, he.push(me)), this.stack.push(me);
  }
  function O(P) {
    const ee = this.stack.pop();
    ee.value += this.sliceSerialize(P), ee.position.end = Rr(P.end);
  }
  function ne(P) {
    const ee = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const he = ee.children[ee.children.length - 1];
      he.position.end = Rr(P.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && r.canContainEols.includes(ee.type) && (Z.call(this, P), O.call(this, P));
  }
  function te() {
    this.data.atHardBreak = !0;
  }
  function re() {
    const P = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.value = P;
  }
  function le() {
    const P = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.value = P;
  }
  function oe() {
    const P = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.value = P;
  }
  function B() {
    const P = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const ee = this.data.referenceType || "shortcut";
      P.type += "Reference", P.referenceType = ee, delete P.url, delete P.title;
    } else
      delete P.identifier, delete P.label;
    this.data.referenceType = void 0;
  }
  function $() {
    const P = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const ee = this.data.referenceType || "shortcut";
      P.type += "Reference", P.referenceType = ee, delete P.url, delete P.title;
    } else
      delete P.identifier, delete P.label;
    this.data.referenceType = void 0;
  }
  function G(P) {
    const ee = this.sliceSerialize(P), he = this.stack[this.stack.length - 2];
    he.label = nT(ee), he.identifier = En(ee).toLowerCase();
  }
  function ve() {
    const P = this.stack[this.stack.length - 1], ee = this.resume(), he = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, he.type === "link") {
      const me = P.children;
      he.children = me;
    } else
      he.alt = ee;
  }
  function w() {
    const P = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.url = P;
  }
  function X() {
    const P = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.title = P;
  }
  function ae() {
    this.data.inReference = void 0;
  }
  function E() {
    this.data.referenceType = "collapsed";
  }
  function ue(P) {
    const ee = this.resume(), he = this.stack[this.stack.length - 1];
    he.label = ee, he.identifier = En(this.sliceSerialize(P)).toLowerCase(), this.data.referenceType = "full";
  }
  function ge(P) {
    this.data.characterReferenceType = P.type;
  }
  function se(P) {
    const ee = this.sliceSerialize(P), he = this.data.characterReferenceType;
    let me;
    he ? (me = Pb(ee, he === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : me = wd(ee);
    const He = this.stack[this.stack.length - 1];
    He.value += me;
  }
  function ke(P) {
    const ee = this.stack.pop();
    ee.position.end = Rr(P.end);
  }
  function Te(P) {
    O.call(this, P);
    const ee = this.stack[this.stack.length - 1];
    ee.url = this.sliceSerialize(P);
  }
  function tt(P) {
    O.call(this, P);
    const ee = this.stack[this.stack.length - 1];
    ee.url = "mailto:" + this.sliceSerialize(P);
  }
  function rt() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function vt() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function Ce() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Se() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function be() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function ze() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Ae() {
    return {
      type: "break"
    };
  }
  function Ve() {
    return {
      type: "html",
      value: ""
    };
  }
  function kt() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Fe() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Pe(P) {
    return {
      type: "list",
      ordered: P.type === "listOrdered",
      start: null,
      spread: P._spread,
      children: []
    };
  }
  function ct(P) {
    return {
      type: "listItem",
      spread: P._spread,
      checked: null,
      children: []
    };
  }
  function rr() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function jn() {
    return {
      type: "strong",
      children: []
    };
  }
  function lr() {
    return {
      type: "text",
      value: ""
    };
  }
  function pt() {
    return {
      type: "thematicBreak"
    };
  }
}
function Rr(t) {
  return {
    line: t.line,
    column: t.column,
    offset: t.offset
  };
}
function t1(t, r) {
  let a = -1;
  for (; ++a < r.length; ) {
    const i = r[a];
    Array.isArray(i) ? t1(t, i) : iT(t, i);
  }
}
function iT(t, r) {
  let a;
  for (a in r)
    if (e1.call(r, a))
      switch (a) {
        case "canContainEols": {
          const i = r[a];
          i && t[a].push(...i);
          break;
        }
        case "transforms": {
          const i = r[a];
          i && t[a].push(...i);
          break;
        }
        case "enter":
        case "exit": {
          const i = r[a];
          i && Object.assign(t[a], i);
          break;
        }
      }
}
function Ly(t, r) {
  throw t ? new Error("Cannot close `" + t.type + "` (" + fi({
    start: t.start,
    end: t.end
  }) + "): a different token (`" + r.type + "`, " + fi({
    start: r.start,
    end: r.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + r.type + "`, " + fi({
    start: r.start,
    end: r.end
  }) + ") is still open");
}
function oT(t) {
  const r = this;
  r.parser = a;
  function a(i) {
    return lT(i, {
      ...r.data("settings"),
      ...t,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: r.data("micromarkExtensions") || [],
      mdastExtensions: r.data("fromMarkdownExtensions") || []
    });
  }
}
function uT(t, r) {
  const a = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: t.wrap(t.all(r), !0)
  };
  return t.patch(r, a), t.applyData(r, a);
}
function sT(t, r) {
  const a = { type: "element", tagName: "br", properties: {}, children: [] };
  return t.patch(r, a), [t.applyData(r, a), { type: "text", value: `
` }];
}
function cT(t, r) {
  const a = r.value ? r.value + `
` : "", i = {};
  r.lang && (i.className = ["language-" + r.lang]);
  let u = {
    type: "element",
    tagName: "code",
    properties: i,
    children: [{ type: "text", value: a }]
  };
  return r.meta && (u.data = { meta: r.meta }), t.patch(r, u), u = t.applyData(r, u), u = { type: "element", tagName: "pre", properties: {}, children: [u] }, t.patch(r, u), u;
}
function fT(t, r) {
  const a = {
    type: "element",
    tagName: "del",
    properties: {},
    children: t.all(r)
  };
  return t.patch(r, a), t.applyData(r, a);
}
function dT(t, r) {
  const a = {
    type: "element",
    tagName: "em",
    properties: {},
    children: t.all(r)
  };
  return t.patch(r, a), t.applyData(r, a);
}
function hT(t, r) {
  const a = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", i = String(r.identifier).toUpperCase(), u = ua(i.toLowerCase()), s = t.footnoteOrder.indexOf(i);
  let c, d = t.footnoteCounts.get(i);
  d === void 0 ? (d = 0, t.footnoteOrder.push(i), c = t.footnoteOrder.length) : c = s + 1, d += 1, t.footnoteCounts.set(i, d);
  const m = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + a + "fn-" + u,
      id: a + "fnref-" + u + (d > 1 ? "-" + d : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(c) }]
  };
  t.patch(r, m);
  const h = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [m]
  };
  return t.patch(r, h), t.applyData(r, h);
}
function pT(t, r) {
  const a = {
    type: "element",
    tagName: "h" + r.depth,
    properties: {},
    children: t.all(r)
  };
  return t.patch(r, a), t.applyData(r, a);
}
function mT(t, r) {
  if (t.options.allowDangerousHtml) {
    const a = { type: "raw", value: r.value };
    return t.patch(r, a), t.applyData(r, a);
  }
}
function n1(t, r) {
  const a = r.referenceType;
  let i = "]";
  if (a === "collapsed" ? i += "[]" : a === "full" && (i += "[" + (r.label || r.identifier) + "]"), r.type === "imageReference")
    return [{ type: "text", value: "![" + r.alt + i }];
  const u = t.all(r), s = u[0];
  s && s.type === "text" ? s.value = "[" + s.value : u.unshift({ type: "text", value: "[" });
  const c = u[u.length - 1];
  return c && c.type === "text" ? c.value += i : u.push({ type: "text", value: i }), u;
}
function gT(t, r) {
  const a = String(r.identifier).toUpperCase(), i = t.definitionById.get(a);
  if (!i)
    return n1(t, r);
  const u = { src: ua(i.url || ""), alt: r.alt };
  i.title !== null && i.title !== void 0 && (u.title = i.title);
  const s = { type: "element", tagName: "img", properties: u, children: [] };
  return t.patch(r, s), t.applyData(r, s);
}
function yT(t, r) {
  const a = { src: ua(r.url) };
  r.alt !== null && r.alt !== void 0 && (a.alt = r.alt), r.title !== null && r.title !== void 0 && (a.title = r.title);
  const i = { type: "element", tagName: "img", properties: a, children: [] };
  return t.patch(r, i), t.applyData(r, i);
}
function vT(t, r) {
  const a = { type: "text", value: r.value.replace(/\r?\n|\r/g, " ") };
  t.patch(r, a);
  const i = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [a]
  };
  return t.patch(r, i), t.applyData(r, i);
}
function bT(t, r) {
  const a = String(r.identifier).toUpperCase(), i = t.definitionById.get(a);
  if (!i)
    return n1(t, r);
  const u = { href: ua(i.url || "") };
  i.title !== null && i.title !== void 0 && (u.title = i.title);
  const s = {
    type: "element",
    tagName: "a",
    properties: u,
    children: t.all(r)
  };
  return t.patch(r, s), t.applyData(r, s);
}
function xT(t, r) {
  const a = { href: ua(r.url) };
  r.title !== null && r.title !== void 0 && (a.title = r.title);
  const i = {
    type: "element",
    tagName: "a",
    properties: a,
    children: t.all(r)
  };
  return t.patch(r, i), t.applyData(r, i);
}
function wT(t, r, a) {
  const i = t.all(r), u = a ? ST(a) : r1(r), s = {}, c = [];
  if (typeof r.checked == "boolean") {
    const g = i[0];
    let y;
    g && g.type === "element" && g.tagName === "p" ? y = g : (y = { type: "element", tagName: "p", properties: {}, children: [] }, i.unshift(y)), y.children.length > 0 && y.children.unshift({ type: "text", value: " " }), y.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: r.checked, disabled: !0 },
      children: []
    }), s.className = ["task-list-item"];
  }
  let d = -1;
  for (; ++d < i.length; ) {
    const g = i[d];
    (u || d !== 0 || g.type !== "element" || g.tagName !== "p") && c.push({ type: "text", value: `
` }), g.type === "element" && g.tagName === "p" && !u ? c.push(...g.children) : c.push(g);
  }
  const m = i[i.length - 1];
  m && (u || m.type !== "element" || m.tagName !== "p") && c.push({ type: "text", value: `
` });
  const h = { type: "element", tagName: "li", properties: s, children: c };
  return t.patch(r, h), t.applyData(r, h);
}
function ST(t) {
  let r = !1;
  if (t.type === "list") {
    r = t.spread || !1;
    const a = t.children;
    let i = -1;
    for (; !r && ++i < a.length; )
      r = r1(a[i]);
  }
  return r;
}
function r1(t) {
  const r = t.spread;
  return r ?? t.children.length > 1;
}
function ET(t, r) {
  const a = {}, i = t.all(r);
  let u = -1;
  for (typeof r.start == "number" && r.start !== 1 && (a.start = r.start); ++u < i.length; ) {
    const c = i[u];
    if (c.type === "element" && c.tagName === "li" && c.properties && Array.isArray(c.properties.className) && c.properties.className.includes("task-list-item")) {
      a.className = ["contains-task-list"];
      break;
    }
  }
  const s = {
    type: "element",
    tagName: r.ordered ? "ol" : "ul",
    properties: a,
    children: t.wrap(i, !0)
  };
  return t.patch(r, s), t.applyData(r, s);
}
function kT(t, r) {
  const a = {
    type: "element",
    tagName: "p",
    properties: {},
    children: t.all(r)
  };
  return t.patch(r, a), t.applyData(r, a);
}
function CT(t, r) {
  const a = { type: "root", children: t.wrap(t.all(r)) };
  return t.patch(r, a), t.applyData(r, a);
}
function AT(t, r) {
  const a = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: t.all(r)
  };
  return t.patch(r, a), t.applyData(r, a);
}
function TT(t, r) {
  const a = t.all(r), i = a.shift(), u = [];
  if (i) {
    const c = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: t.wrap([i], !0)
    };
    t.patch(r.children[0], c), u.push(c);
  }
  if (a.length > 0) {
    const c = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: t.wrap(a, !0)
    }, d = gd(r.children[1]), m = jb(r.children[r.children.length - 1]);
    d && m && (c.position = { start: d, end: m }), u.push(c);
  }
  const s = {
    type: "element",
    tagName: "table",
    properties: {},
    children: t.wrap(u, !0)
  };
  return t.patch(r, s), t.applyData(r, s);
}
function _T(t, r, a) {
  const i = a ? a.children : void 0, s = (i ? i.indexOf(r) : 1) === 0 ? "th" : "td", c = a && a.type === "table" ? a.align : void 0, d = c ? c.length : r.children.length;
  let m = -1;
  const h = [];
  for (; ++m < d; ) {
    const y = r.children[m], b = {}, x = c ? c[m] : void 0;
    x && (b.align = x);
    let k = { type: "element", tagName: s, properties: b, children: [] };
    y && (k.children = t.all(y), t.patch(y, k), k = t.applyData(y, k)), h.push(k);
  }
  const g = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: t.wrap(h, !0)
  };
  return t.patch(r, g), t.applyData(r, g);
}
function RT(t, r) {
  const a = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: t.all(r)
  };
  return t.patch(r, a), t.applyData(r, a);
}
const jy = 9, Uy = 32;
function DT(t) {
  const r = String(t), a = /\r?\n|\r/g;
  let i = a.exec(r), u = 0;
  const s = [];
  for (; i; )
    s.push(
      By(r.slice(u, i.index), u > 0, !0),
      i[0]
    ), u = i.index + i[0].length, i = a.exec(r);
  return s.push(By(r.slice(u), u > 0, !1)), s.join("");
}
function By(t, r, a) {
  let i = 0, u = t.length;
  if (r) {
    let s = t.codePointAt(i);
    for (; s === jy || s === Uy; )
      i++, s = t.codePointAt(i);
  }
  if (a) {
    let s = t.codePointAt(u - 1);
    for (; s === jy || s === Uy; )
      u--, s = t.codePointAt(u - 1);
  }
  return u > i ? t.slice(i, u) : "";
}
function NT(t, r) {
  const a = { type: "text", value: DT(String(r.value)) };
  return t.patch(r, a), t.applyData(r, a);
}
function OT(t, r) {
  const a = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return t.patch(r, a), t.applyData(r, a);
}
const zT = {
  blockquote: uT,
  break: sT,
  code: cT,
  delete: fT,
  emphasis: dT,
  footnoteReference: hT,
  heading: pT,
  html: mT,
  imageReference: gT,
  image: yT,
  inlineCode: vT,
  linkReference: bT,
  link: xT,
  listItem: wT,
  list: ET,
  paragraph: kT,
  // @ts-expect-error: root is different, but hard to type.
  root: CT,
  strong: AT,
  table: TT,
  tableCell: RT,
  tableRow: _T,
  text: NT,
  thematicBreak: OT,
  toml: Qo,
  yaml: Qo,
  definition: Qo,
  footnoteDefinition: Qo
};
function Qo() {
}
const l1 = -1, bu = 0, hi = 1, au = 2, Ed = 3, kd = 4, Cd = 5, Ad = 6, a1 = 7, i1 = 8, Iy = typeof self == "object" ? self : globalThis, MT = (t, r) => {
  const a = (u, s) => (t.set(s, u), u), i = (u) => {
    if (t.has(u))
      return t.get(u);
    const [s, c] = r[u];
    switch (s) {
      case bu:
      case l1:
        return a(c, u);
      case hi: {
        const d = a([], u);
        for (const m of c)
          d.push(i(m));
        return d;
      }
      case au: {
        const d = a({}, u);
        for (const [m, h] of c)
          d[i(m)] = i(h);
        return d;
      }
      case Ed:
        return a(new Date(c), u);
      case kd: {
        const { source: d, flags: m } = c;
        return a(new RegExp(d, m), u);
      }
      case Cd: {
        const d = a(/* @__PURE__ */ new Map(), u);
        for (const [m, h] of c)
          d.set(i(m), i(h));
        return d;
      }
      case Ad: {
        const d = a(/* @__PURE__ */ new Set(), u);
        for (const m of c)
          d.add(i(m));
        return d;
      }
      case a1: {
        const { name: d, message: m } = c;
        return a(new Iy[d](m), u);
      }
      case i1:
        return a(BigInt(c), u);
      case "BigInt":
        return a(Object(BigInt(c)), u);
      case "ArrayBuffer":
        return a(new Uint8Array(c).buffer, c);
      case "DataView": {
        const { buffer: d } = new Uint8Array(c);
        return a(new DataView(d), c);
      }
    }
    return a(new Iy[s](c), u);
  };
  return i;
}, Hy = (t) => MT(/* @__PURE__ */ new Map(), t)(0), Kl = "", { toString: LT } = {}, { keys: jT } = Object, ci = (t) => {
  const r = typeof t;
  if (r !== "object" || !t)
    return [bu, r];
  const a = LT.call(t).slice(8, -1);
  switch (a) {
    case "Array":
      return [hi, Kl];
    case "Object":
      return [au, Kl];
    case "Date":
      return [Ed, Kl];
    case "RegExp":
      return [kd, Kl];
    case "Map":
      return [Cd, Kl];
    case "Set":
      return [Ad, Kl];
    case "DataView":
      return [hi, a];
  }
  return a.includes("Array") ? [hi, a] : a.includes("Error") ? [a1, a] : [au, a];
}, Zo = ([t, r]) => t === bu && (r === "function" || r === "symbol"), UT = (t, r, a, i) => {
  const u = (c, d) => {
    const m = i.push(c) - 1;
    return a.set(d, m), m;
  }, s = (c) => {
    if (a.has(c))
      return a.get(c);
    let [d, m] = ci(c);
    switch (d) {
      case bu: {
        let g = c;
        switch (m) {
          case "bigint":
            d = i1, g = c.toString();
            break;
          case "function":
          case "symbol":
            if (t)
              throw new TypeError("unable to serialize " + m);
            g = null;
            break;
          case "undefined":
            return u([l1], c);
        }
        return u([d, g], c);
      }
      case hi: {
        if (m) {
          let b = c;
          return m === "DataView" ? b = new Uint8Array(c.buffer) : m === "ArrayBuffer" && (b = new Uint8Array(c)), u([m, [...b]], c);
        }
        const g = [], y = u([d, g], c);
        for (const b of c)
          g.push(s(b));
        return y;
      }
      case au: {
        if (m)
          switch (m) {
            case "BigInt":
              return u([m, c.toString()], c);
            case "Boolean":
            case "Number":
            case "String":
              return u([m, c.valueOf()], c);
          }
        if (r && "toJSON" in c)
          return s(c.toJSON());
        const g = [], y = u([d, g], c);
        for (const b of jT(c))
          (t || !Zo(ci(c[b]))) && g.push([s(b), s(c[b])]);
        return y;
      }
      case Ed:
        return u([d, c.toISOString()], c);
      case kd: {
        const { source: g, flags: y } = c;
        return u([d, { source: g, flags: y }], c);
      }
      case Cd: {
        const g = [], y = u([d, g], c);
        for (const [b, x] of c)
          (t || !(Zo(ci(b)) || Zo(ci(x)))) && g.push([s(b), s(x)]);
        return y;
      }
      case Ad: {
        const g = [], y = u([d, g], c);
        for (const b of c)
          (t || !Zo(ci(b))) && g.push(s(b));
        return y;
      }
    }
    const { message: h } = c;
    return u([d, { name: m, message: h }], c);
  };
  return s;
}, qy = (t, { json: r, lossy: a } = {}) => {
  const i = [];
  return UT(!(r || a), !!r, /* @__PURE__ */ new Map(), i)(t), i;
}, iu = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (t, r) => r && ("json" in r || "lossy" in r) ? Hy(qy(t, r)) : structuredClone(t)
) : (t, r) => Hy(qy(t, r));
function BT(t, r) {
  const a = [{ type: "text", value: "↩" }];
  return r > 1 && a.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(r) }]
  }), a;
}
function IT(t, r) {
  return "Back to reference " + (t + 1) + (r > 1 ? "-" + r : "");
}
function HT(t) {
  const r = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", a = t.options.footnoteBackContent || BT, i = t.options.footnoteBackLabel || IT, u = t.options.footnoteLabel || "Footnotes", s = t.options.footnoteLabelTagName || "h2", c = t.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, d = [];
  let m = -1;
  for (; ++m < t.footnoteOrder.length; ) {
    const h = t.footnoteById.get(
      t.footnoteOrder[m]
    );
    if (!h)
      continue;
    const g = t.all(h), y = String(h.identifier).toUpperCase(), b = ua(y.toLowerCase());
    let x = 0;
    const k = [], C = t.footnoteCounts.get(y);
    for (; C !== void 0 && ++x <= C; ) {
      k.length > 0 && k.push({ type: "text", value: " " });
      let Y = typeof a == "string" ? a : a(m, x);
      typeof Y == "string" && (Y = { type: "text", value: Y }), k.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + r + "fnref-" + b + (x > 1 ? "-" + x : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof i == "string" ? i : i(m, x),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(Y) ? Y : [Y]
      });
    }
    const z = g[g.length - 1];
    if (z && z.type === "element" && z.tagName === "p") {
      const Y = z.children[z.children.length - 1];
      Y && Y.type === "text" ? Y.value += " " : z.children.push({ type: "text", value: " " }), z.children.push(...k);
    } else
      g.push(...k);
    const T = {
      type: "element",
      tagName: "li",
      properties: { id: r + "fn-" + b },
      children: t.wrap(g, !0)
    };
    t.patch(h, T), d.push(T);
  }
  if (d.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: s,
          properties: {
            ...iu(c),
            id: "footnote-label"
          },
          children: [{ type: "text", value: u }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: t.wrap(d, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const xu = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(t) {
    if (t == null)
      return PT;
    if (typeof t == "function")
      return wu(t);
    if (typeof t == "object")
      return Array.isArray(t) ? qT(t) : VT(t);
    if (typeof t == "string")
      return YT(t);
    throw new Error("Expected function, string, or object as test");
  }
);
function qT(t) {
  const r = [];
  let a = -1;
  for (; ++a < t.length; )
    r[a] = xu(t[a]);
  return wu(i);
  function i(...u) {
    let s = -1;
    for (; ++s < r.length; )
      if (r[s].apply(this, u)) return !0;
    return !1;
  }
}
function VT(t) {
  const r = (
    /** @type {Record<string, unknown>} */
    t
  );
  return wu(a);
  function a(i) {
    const u = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      i
    );
    let s;
    for (s in t)
      if (u[s] !== r[s]) return !1;
    return !0;
  }
}
function YT(t) {
  return wu(r);
  function r(a) {
    return a && a.type === t;
  }
}
function wu(t) {
  return r;
  function r(a, i, u) {
    return !!(FT(a) && t.call(
      this,
      a,
      typeof i == "number" ? i : void 0,
      u || void 0
    ));
  }
}
function PT() {
  return !0;
}
function FT(t) {
  return t !== null && typeof t == "object" && "type" in t;
}
const o1 = [], GT = !0, Qf = !1, XT = "skip";
function u1(t, r, a, i) {
  let u;
  typeof r == "function" && typeof a != "function" ? (i = a, a = r) : u = r;
  const s = xu(u), c = i ? -1 : 1;
  d(t, void 0, [])();
  function d(m, h, g) {
    const y = (
      /** @type {Record<string, unknown>} */
      m && typeof m == "object" ? m : {}
    );
    if (typeof y.type == "string") {
      const x = (
        // `hast`
        typeof y.tagName == "string" ? y.tagName : (
          // `xast`
          typeof y.name == "string" ? y.name : void 0
        )
      );
      Object.defineProperty(b, "name", {
        value: "node (" + (m.type + (x ? "<" + x + ">" : "")) + ")"
      });
    }
    return b;
    function b() {
      let x = o1, k, C, z;
      if ((!r || s(m, h, g[g.length - 1] || void 0)) && (x = QT(a(m, g)), x[0] === Qf))
        return x;
      if ("children" in m && m.children) {
        const T = (
          /** @type {UnistParent} */
          m
        );
        if (T.children && x[0] !== XT)
          for (C = (i ? T.children.length : -1) + c, z = g.concat(T); C > -1 && C < T.children.length; ) {
            const Y = T.children[C];
            if (k = d(Y, C, z)(), k[0] === Qf)
              return k;
            C = typeof k[1] == "number" ? k[1] : C + c;
          }
      }
      return x;
    }
  }
}
function QT(t) {
  return Array.isArray(t) ? t : typeof t == "number" ? [GT, t] : t == null ? o1 : [t];
}
function Td(t, r, a, i) {
  let u, s, c;
  typeof r == "function" ? (s = void 0, c = r, u = a) : (s = r, c = a, u = i), u1(t, s, d, u);
  function d(m, h) {
    const g = h[h.length - 1], y = g ? g.children.indexOf(m) : void 0;
    return c(m, y, g);
  }
}
const Zf = {}.hasOwnProperty, ZT = {};
function KT(t, r) {
  const a = r || ZT, i = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = { ...zT, ...a.handlers }, d = {
    all: h,
    applyData: $T,
    definitionById: i,
    footnoteById: u,
    footnoteCounts: s,
    footnoteOrder: [],
    handlers: c,
    one: m,
    options: a,
    patch: JT,
    wrap: e_
  };
  return Td(t, function(g) {
    if (g.type === "definition" || g.type === "footnoteDefinition") {
      const y = g.type === "definition" ? i : u, b = String(g.identifier).toUpperCase();
      y.has(b) || y.set(b, g);
    }
  }), d;
  function m(g, y) {
    const b = g.type, x = d.handlers[b];
    if (Zf.call(d.handlers, b) && x)
      return x(d, g, y);
    if (d.options.passThrough && d.options.passThrough.includes(b)) {
      if ("children" in g) {
        const { children: C, ...z } = g, T = iu(z);
        return T.children = d.all(g), T;
      }
      return iu(g);
    }
    return (d.options.unknownHandler || WT)(d, g, y);
  }
  function h(g) {
    const y = [];
    if ("children" in g) {
      const b = g.children;
      let x = -1;
      for (; ++x < b.length; ) {
        const k = d.one(b[x], g);
        if (k) {
          if (x && b[x - 1].type === "break" && (!Array.isArray(k) && k.type === "text" && (k.value = Vy(k.value)), !Array.isArray(k) && k.type === "element")) {
            const C = k.children[0];
            C && C.type === "text" && (C.value = Vy(C.value));
          }
          Array.isArray(k) ? y.push(...k) : y.push(k);
        }
      }
    }
    return y;
  }
}
function JT(t, r) {
  t.position && (r.position = IC(t));
}
function $T(t, r) {
  let a = r;
  if (t && t.data) {
    const i = t.data.hName, u = t.data.hChildren, s = t.data.hProperties;
    if (typeof i == "string")
      if (a.type === "element")
        a.tagName = i;
      else {
        const c = "children" in a ? a.children : [a];
        a = { type: "element", tagName: i, properties: {}, children: c };
      }
    a.type === "element" && s && Object.assign(a.properties, iu(s)), "children" in a && a.children && u !== null && u !== void 0 && (a.children = u);
  }
  return a;
}
function WT(t, r) {
  const a = r.data || {}, i = "value" in r && !(Zf.call(a, "hProperties") || Zf.call(a, "hChildren")) ? { type: "text", value: r.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: t.all(r)
  };
  return t.patch(r, i), t.applyData(r, i);
}
function e_(t, r) {
  const a = [];
  let i = -1;
  for (r && a.push({ type: "text", value: `
` }); ++i < t.length; )
    i && a.push({ type: "text", value: `
` }), a.push(t[i]);
  return r && t.length > 0 && a.push({ type: "text", value: `
` }), a;
}
function Vy(t) {
  let r = 0, a = t.charCodeAt(r);
  for (; a === 9 || a === 32; )
    r++, a = t.charCodeAt(r);
  return t.slice(r);
}
function Yy(t, r) {
  const a = KT(t, r), i = a.one(t, void 0), u = HT(a), s = Array.isArray(i) ? { type: "root", children: i } : i || { type: "root", children: [] };
  return u && s.children.push({ type: "text", value: `
` }, u), s;
}
function _d(t, r) {
  return t && "run" in t ? async function(a, i) {
    const u = (
      /** @type {HastRoot} */
      Yy(a, { file: i, ...r })
    );
    await t.run(u, i);
  } : function(a, i) {
    return (
      /** @type {HastRoot} */
      Yy(a, { file: i, ...t || r })
    );
  };
}
function Py(t) {
  if (t)
    throw t;
}
var df, Fy;
function t_() {
  if (Fy) return df;
  Fy = 1;
  var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, a = Object.defineProperty, i = Object.getOwnPropertyDescriptor, u = function(h) {
    return typeof Array.isArray == "function" ? Array.isArray(h) : r.call(h) === "[object Array]";
  }, s = function(h) {
    if (!h || r.call(h) !== "[object Object]")
      return !1;
    var g = t.call(h, "constructor"), y = h.constructor && h.constructor.prototype && t.call(h.constructor.prototype, "isPrototypeOf");
    if (h.constructor && !g && !y)
      return !1;
    var b;
    for (b in h)
      ;
    return typeof b > "u" || t.call(h, b);
  }, c = function(h, g) {
    a && g.name === "__proto__" ? a(h, g.name, {
      enumerable: !0,
      configurable: !0,
      value: g.newValue,
      writable: !0
    }) : h[g.name] = g.newValue;
  }, d = function(h, g) {
    if (g === "__proto__")
      if (t.call(h, g)) {
        if (i)
          return i(h, g).value;
      } else return;
    return h[g];
  };
  return df = function m() {
    var h, g, y, b, x, k, C = arguments[0], z = 1, T = arguments.length, Y = !1;
    for (typeof C == "boolean" && (Y = C, C = arguments[1] || {}, z = 2), (C == null || typeof C != "object" && typeof C != "function") && (C = {}); z < T; ++z)
      if (h = arguments[z], h != null)
        for (g in h)
          y = d(C, g), b = d(h, g), C !== b && (Y && b && (s(b) || (x = u(b))) ? (x ? (x = !1, k = y && u(y) ? y : []) : k = y && s(y) ? y : {}, c(C, { name: g, newValue: m(Y, k, b) })) : typeof b < "u" && c(C, { name: g, newValue: b }));
    return C;
  }, df;
}
var n_ = t_();
const hf = /* @__PURE__ */ ll(n_);
function Kf(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const r = Object.getPrototypeOf(t);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}
function r_() {
  const t = [], r = { run: a, use: i };
  return r;
  function a(...u) {
    let s = -1;
    const c = u.pop();
    if (typeof c != "function")
      throw new TypeError("Expected function as last argument, not " + c);
    d(null, ...u);
    function d(m, ...h) {
      const g = t[++s];
      let y = -1;
      if (m) {
        c(m);
        return;
      }
      for (; ++y < u.length; )
        (h[y] === null || h[y] === void 0) && (h[y] = u[y]);
      u = h, g ? l_(g, d)(...h) : c(null, ...h);
    }
  }
  function i(u) {
    if (typeof u != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + u
      );
    return t.push(u), r;
  }
}
function l_(t, r) {
  let a;
  return i;
  function i(...c) {
    const d = t.length > c.length;
    let m;
    d && c.push(u);
    try {
      m = t.apply(this, c);
    } catch (h) {
      const g = (
        /** @type {Error} */
        h
      );
      if (d && a)
        throw g;
      return u(g);
    }
    d || (m && m.then && typeof m.then == "function" ? m.then(s, u) : m instanceof Error ? u(m) : s(m));
  }
  function u(c, ...d) {
    a || (a = !0, r(c, ...d));
  }
  function s(c) {
    u(null, c);
  }
}
const Nn = { basename: a_, dirname: i_, extname: o_, join: u_, sep: "/" };
function a_(t, r) {
  if (r !== void 0 && typeof r != "string")
    throw new TypeError('"ext" argument must be a string');
  Ci(t);
  let a = 0, i = -1, u = t.length, s;
  if (r === void 0 || r.length === 0 || r.length > t.length) {
    for (; u--; )
      if (t.codePointAt(u) === 47) {
        if (s) {
          a = u + 1;
          break;
        }
      } else i < 0 && (s = !0, i = u + 1);
    return i < 0 ? "" : t.slice(a, i);
  }
  if (r === t)
    return "";
  let c = -1, d = r.length - 1;
  for (; u--; )
    if (t.codePointAt(u) === 47) {
      if (s) {
        a = u + 1;
        break;
      }
    } else
      c < 0 && (s = !0, c = u + 1), d > -1 && (t.codePointAt(u) === r.codePointAt(d--) ? d < 0 && (i = u) : (d = -1, i = c));
  return a === i ? i = c : i < 0 && (i = t.length), t.slice(a, i);
}
function i_(t) {
  if (Ci(t), t.length === 0)
    return ".";
  let r = -1, a = t.length, i;
  for (; --a; )
    if (t.codePointAt(a) === 47) {
      if (i) {
        r = a;
        break;
      }
    } else i || (i = !0);
  return r < 0 ? t.codePointAt(0) === 47 ? "/" : "." : r === 1 && t.codePointAt(0) === 47 ? "//" : t.slice(0, r);
}
function o_(t) {
  Ci(t);
  let r = t.length, a = -1, i = 0, u = -1, s = 0, c;
  for (; r--; ) {
    const d = t.codePointAt(r);
    if (d === 47) {
      if (c) {
        i = r + 1;
        break;
      }
      continue;
    }
    a < 0 && (c = !0, a = r + 1), d === 46 ? u < 0 ? u = r : s !== 1 && (s = 1) : u > -1 && (s = -1);
  }
  return u < 0 || a < 0 || // We saw a non-dot character immediately before the dot.
  s === 0 || // The (right-most) trimmed path component is exactly `..`.
  s === 1 && u === a - 1 && u === i + 1 ? "" : t.slice(u, a);
}
function u_(...t) {
  let r = -1, a;
  for (; ++r < t.length; )
    Ci(t[r]), t[r] && (a = a === void 0 ? t[r] : a + "/" + t[r]);
  return a === void 0 ? "." : s_(a);
}
function s_(t) {
  Ci(t);
  const r = t.codePointAt(0) === 47;
  let a = c_(t, !r);
  return a.length === 0 && !r && (a = "."), a.length > 0 && t.codePointAt(t.length - 1) === 47 && (a += "/"), r ? "/" + a : a;
}
function c_(t, r) {
  let a = "", i = 0, u = -1, s = 0, c = -1, d, m;
  for (; ++c <= t.length; ) {
    if (c < t.length)
      d = t.codePointAt(c);
    else {
      if (d === 47)
        break;
      d = 47;
    }
    if (d === 47) {
      if (!(u === c - 1 || s === 1)) if (u !== c - 1 && s === 2) {
        if (a.length < 2 || i !== 2 || a.codePointAt(a.length - 1) !== 46 || a.codePointAt(a.length - 2) !== 46) {
          if (a.length > 2) {
            if (m = a.lastIndexOf("/"), m !== a.length - 1) {
              m < 0 ? (a = "", i = 0) : (a = a.slice(0, m), i = a.length - 1 - a.lastIndexOf("/")), u = c, s = 0;
              continue;
            }
          } else if (a.length > 0) {
            a = "", i = 0, u = c, s = 0;
            continue;
          }
        }
        r && (a = a.length > 0 ? a + "/.." : "..", i = 2);
      } else
        a.length > 0 ? a += "/" + t.slice(u + 1, c) : a = t.slice(u + 1, c), i = c - u - 1;
      u = c, s = 0;
    } else d === 46 && s > -1 ? s++ : s = -1;
  }
  return a;
}
function Ci(t) {
  if (typeof t != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(t)
    );
}
const f_ = { cwd: d_ };
function d_() {
  return "/";
}
function Jf(t) {
  return !!(t !== null && typeof t == "object" && "href" in t && t.href && "protocol" in t && t.protocol && // @ts-expect-error: indexing is fine.
  t.auth === void 0);
}
function h_(t) {
  if (typeof t == "string")
    t = new URL(t);
  else if (!Jf(t)) {
    const r = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + t + "`"
    );
    throw r.code = "ERR_INVALID_ARG_TYPE", r;
  }
  if (t.protocol !== "file:") {
    const r = new TypeError("The URL must be of scheme file");
    throw r.code = "ERR_INVALID_URL_SCHEME", r;
  }
  return p_(t);
}
function p_(t) {
  if (t.hostname !== "") {
    const i = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw i.code = "ERR_INVALID_FILE_URL_HOST", i;
  }
  const r = t.pathname;
  let a = -1;
  for (; ++a < r.length; )
    if (r.codePointAt(a) === 37 && r.codePointAt(a + 1) === 50) {
      const i = r.codePointAt(a + 2);
      if (i === 70 || i === 102) {
        const u = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw u.code = "ERR_INVALID_FILE_URL_PATH", u;
      }
    }
  return decodeURIComponent(r);
}
const pf = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class s1 {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(r) {
    let a;
    r ? Jf(r) ? a = { path: r } : typeof r == "string" || m_(r) ? a = { value: r } : a = r : a = {}, this.cwd = "cwd" in a ? "" : f_.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let i = -1;
    for (; ++i < pf.length; ) {
      const s = pf[i];
      s in a && a[s] !== void 0 && a[s] !== null && (this[s] = s === "history" ? [...a[s]] : a[s]);
    }
    let u;
    for (u in a)
      pf.includes(u) || (this[u] = a[u]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Nn.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(r) {
    gf(r, "basename"), mf(r, "basename"), this.path = Nn.join(this.dirname || "", r);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Nn.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(r) {
    Gy(this.basename, "dirname"), this.path = Nn.join(r || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Nn.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(r) {
    if (mf(r, "extname"), Gy(this.dirname, "extname"), r) {
      if (r.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (r.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Nn.join(this.dirname, this.stem + (r || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(r) {
    Jf(r) && (r = h_(r)), gf(r, "path"), this.path !== r && this.history.push(r);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Nn.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(r) {
    gf(r, "stem"), mf(r, "stem"), this.path = Nn.join(this.dirname || "", r + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(r, a, i) {
    const u = this.message(r, a, i);
    throw u.fatal = !0, u;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(r, a, i) {
    const u = this.message(r, a, i);
    return u.fatal = void 0, u;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(r, a, i) {
    const u = new Lt(
      // @ts-expect-error: the overloads are fine.
      r,
      a,
      i
    );
    return this.path && (u.name = this.path + ":" + u.name, u.file = this.path), u.fatal = !1, this.messages.push(u), u;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(r) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(r || void 0).decode(this.value);
  }
}
function mf(t, r) {
  if (t && t.includes(Nn.sep))
    throw new Error(
      "`" + r + "` cannot be a path: did not expect `" + Nn.sep + "`"
    );
}
function gf(t, r) {
  if (!t)
    throw new Error("`" + r + "` cannot be empty");
}
function Gy(t, r) {
  if (!t)
    throw new Error("Setting `" + r + "` requires `path` to be set too");
}
function m_(t) {
  return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
}
const g_ = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(t) {
    const i = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), u = i[t], s = function() {
      return u.apply(s, arguments);
    };
    return Object.setPrototypeOf(s, i), s;
  }
), y_ = {}.hasOwnProperty;
class Rd extends g_ {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = r_();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const r = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Rd()
    );
    let a = -1;
    for (; ++a < this.attachers.length; ) {
      const i = this.attachers[a];
      r.use(...i);
    }
    return r.data(hf(!0, {}, this.namespace)), r;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(r, a) {
    return typeof r == "string" ? arguments.length === 2 ? (bf("data", this.frozen), this.namespace[r] = a, this) : y_.call(this.namespace, r) && this.namespace[r] || void 0 : r ? (bf("data", this.frozen), this.namespace = r, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const r = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [a, ...i] = this.attachers[this.freezeIndex];
      if (i[0] === !1)
        continue;
      i[0] === !0 && (i[0] = void 0);
      const u = a.call(r, ...i);
      typeof u == "function" && this.transformers.use(u);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(r) {
    this.freeze();
    const a = Ko(r), i = this.parser || this.Parser;
    return yf("parse", i), i(String(a), a);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(r, a) {
    const i = this;
    return this.freeze(), yf("process", this.parser || this.Parser), vf("process", this.compiler || this.Compiler), a ? u(void 0, a) : new Promise(u);
    function u(s, c) {
      const d = Ko(r), m = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        i.parse(d)
      );
      i.run(m, d, function(g, y, b) {
        if (g || !y || !b)
          return h(g);
        const x = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          y
        ), k = i.stringify(x, b);
        x_(k) ? b.value = k : b.result = k, h(
          g,
          /** @type {VFileWithOutput<CompileResult>} */
          b
        );
      });
      function h(g, y) {
        g || !y ? c(g) : s ? s(y) : a(void 0, y);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(r) {
    let a = !1, i;
    return this.freeze(), yf("processSync", this.parser || this.Parser), vf("processSync", this.compiler || this.Compiler), this.process(r, u), Qy("processSync", "process", a), i;
    function u(s, c) {
      a = !0, Py(s), i = c;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(r, a, i) {
    Xy(r), this.freeze();
    const u = this.transformers;
    return !i && typeof a == "function" && (i = a, a = void 0), i ? s(void 0, i) : new Promise(s);
    function s(c, d) {
      const m = Ko(a);
      u.run(r, m, h);
      function h(g, y, b) {
        const x = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          y || r
        );
        g ? d(g) : c ? c(x) : i(void 0, x, b);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(r, a) {
    let i = !1, u;
    return this.run(r, a, s), Qy("runSync", "run", i), u;
    function s(c, d) {
      Py(c), u = d, i = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(r, a) {
    this.freeze();
    const i = Ko(a), u = this.compiler || this.Compiler;
    return vf("stringify", u), Xy(r), u(r, i);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(r, ...a) {
    const i = this.attachers, u = this.namespace;
    if (bf("use", this.frozen), r != null) if (typeof r == "function")
      m(r, a);
    else if (typeof r == "object")
      Array.isArray(r) ? d(r) : c(r);
    else
      throw new TypeError("Expected usable value, not `" + r + "`");
    return this;
    function s(h) {
      if (typeof h == "function")
        m(h, []);
      else if (typeof h == "object")
        if (Array.isArray(h)) {
          const [g, ...y] = (
            /** @type {PluginTuple<Array<unknown>>} */
            h
          );
          m(g, y);
        } else
          c(h);
      else
        throw new TypeError("Expected usable value, not `" + h + "`");
    }
    function c(h) {
      if (!("plugins" in h) && !("settings" in h))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      d(h.plugins), h.settings && (u.settings = hf(!0, u.settings, h.settings));
    }
    function d(h) {
      let g = -1;
      if (h != null) if (Array.isArray(h))
        for (; ++g < h.length; ) {
          const y = h[g];
          s(y);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + h + "`");
    }
    function m(h, g) {
      let y = -1, b = -1;
      for (; ++y < i.length; )
        if (i[y][0] === h) {
          b = y;
          break;
        }
      if (b === -1)
        i.push([h, ...g]);
      else if (g.length > 0) {
        let [x, ...k] = g;
        const C = i[b][1];
        Kf(C) && Kf(x) && (x = hf(!0, C, x)), i[b] = [h, x, ...k];
      }
    }
  }
}
const v_ = new Rd().freeze();
function yf(t, r) {
  if (typeof r != "function")
    throw new TypeError("Cannot `" + t + "` without `parser`");
}
function vf(t, r) {
  if (typeof r != "function")
    throw new TypeError("Cannot `" + t + "` without `compiler`");
}
function bf(t, r) {
  if (r)
    throw new Error(
      "Cannot call `" + t + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Xy(t) {
  if (!Kf(t) || typeof t.type != "string")
    throw new TypeError("Expected node, got `" + t + "`");
}
function Qy(t, r, a) {
  if (!a)
    throw new Error(
      "`" + t + "` finished async. Use `" + r + "` instead"
    );
}
function Ko(t) {
  return b_(t) ? t : new s1(t);
}
function b_(t) {
  return !!(t && typeof t == "object" && "message" in t && "messages" in t);
}
function x_(t) {
  return typeof t == "string" || w_(t);
}
function w_(t) {
  return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
}
const S_ = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Zy = [], Ky = { allowDangerousHtml: !0 }, E_ = /^(https?|ircs?|mailto|xmpp)$/i, k_ = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function c1(t) {
  const r = C_(t), a = A_(t);
  return T_(r.runSync(r.parse(a), a), t);
}
function C_(t) {
  const r = t.rehypePlugins || Zy, a = t.remarkPlugins || Zy, i = t.remarkRehypeOptions ? { ...t.remarkRehypeOptions, ...Ky } : Ky;
  return v_().use(oT).use(a).use(_d, i).use(r);
}
function A_(t) {
  const r = t.children || "", a = new s1();
  return typeof r == "string" && (a.value = r), a;
}
function T_(t, r) {
  const a = r.allowedElements, i = r.allowElement, u = r.components, s = r.disallowedElements, c = r.skipHtml, d = r.unwrapDisallowed, m = r.urlTransform || __;
  for (const g of k_)
    Object.hasOwn(r, g.from) && ("" + g.from + (g.to ? "use `" + g.to + "` instead" : "remove it") + S_ + g.id, void 0);
  return Td(t, h), PC(t, {
    Fragment: _.Fragment,
    components: u,
    ignoreInvalidStyle: !0,
    jsx: _.jsx,
    jsxs: _.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function h(g, y, b) {
    if (g.type === "raw" && b && typeof y == "number")
      return c ? b.children.splice(y, 1) : b.children[y] = { type: "text", value: g.value }, y;
    if (g.type === "element") {
      let x;
      for (x in sf)
        if (Object.hasOwn(sf, x) && Object.hasOwn(g.properties, x)) {
          const k = g.properties[x], C = sf[x];
          (C === null || C.includes(g.tagName)) && (g.properties[x] = m(String(k || ""), x, g));
        }
    }
    if (g.type === "element") {
      let x = a ? !a.includes(g.tagName) : s ? s.includes(g.tagName) : !1;
      if (!x && i && typeof y == "number" && (x = !i(g, y, b)), x && b && typeof y == "number")
        return d && g.children ? b.children.splice(y, 1, ...g.children) : b.children.splice(y, 1), y;
    }
  }
}
function __(t) {
  const r = t.indexOf(":"), a = t.indexOf("?"), i = t.indexOf("#"), u = t.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    r === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    u !== -1 && r > u || a !== -1 && r > a || i !== -1 && r > i || // It is a protocol, it should be allowed.
    E_.test(t.slice(0, r)) ? t : ""
  );
}
function Jy(t, r) {
  const a = String(t);
  if (typeof r != "string")
    throw new TypeError("Expected character");
  let i = 0, u = a.indexOf(r);
  for (; u !== -1; )
    i++, u = a.indexOf(r, u + r.length);
  return i;
}
function R_(t) {
  if (typeof t != "string")
    throw new TypeError("Expected a string");
  return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function D_(t, r, a) {
  const u = xu((a || {}).ignore || []), s = N_(r);
  let c = -1;
  for (; ++c < s.length; )
    u1(t, "text", d);
  function d(h, g) {
    let y = -1, b;
    for (; ++y < g.length; ) {
      const x = g[y], k = b ? b.children : void 0;
      if (u(
        x,
        k ? k.indexOf(x) : void 0,
        b
      ))
        return;
      b = x;
    }
    if (b)
      return m(h, g);
  }
  function m(h, g) {
    const y = g[g.length - 1], b = s[c][0], x = s[c][1];
    let k = 0;
    const z = y.children.indexOf(h);
    let T = !1, Y = [];
    b.lastIndex = 0;
    let j = b.exec(h.value);
    for (; j; ) {
      const Q = j.index, I = {
        index: j.index,
        input: j.input,
        stack: [...g, h]
      };
      let R = x(...j, I);
      if (typeof R == "string" && (R = R.length > 0 ? { type: "text", value: R } : void 0), R === !1 ? b.lastIndex = Q + 1 : (k !== Q && Y.push({
        type: "text",
        value: h.value.slice(k, Q)
      }), Array.isArray(R) ? Y.push(...R) : R && Y.push(R), k = Q + j[0].length, T = !0), !b.global)
        break;
      j = b.exec(h.value);
    }
    return T ? (k < h.value.length && Y.push({ type: "text", value: h.value.slice(k) }), y.children.splice(z, 1, ...Y)) : Y = [h], z + Y.length;
  }
}
function N_(t) {
  const r = [];
  if (!Array.isArray(t))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const a = !t[0] || Array.isArray(t[0]) ? t : [t];
  let i = -1;
  for (; ++i < a.length; ) {
    const u = a[i];
    r.push([O_(u[0]), z_(u[1])]);
  }
  return r;
}
function O_(t) {
  return typeof t == "string" ? new RegExp(R_(t), "g") : t;
}
function z_(t) {
  return typeof t == "function" ? t : function() {
    return t;
  };
}
const xf = "phrasing", wf = ["autolink", "link", "image", "label"];
function M_() {
  return {
    transforms: [q_],
    enter: {
      literalAutolink: j_,
      literalAutolinkEmail: Sf,
      literalAutolinkHttp: Sf,
      literalAutolinkWww: Sf
    },
    exit: {
      literalAutolink: H_,
      literalAutolinkEmail: I_,
      literalAutolinkHttp: U_,
      literalAutolinkWww: B_
    }
  };
}
function L_() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: xf,
        notInConstruct: wf
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: xf,
        notInConstruct: wf
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: xf,
        notInConstruct: wf
      }
    ]
  };
}
function j_(t) {
  this.enter({ type: "link", title: null, url: "", children: [] }, t);
}
function Sf(t) {
  this.config.enter.autolinkProtocol.call(this, t);
}
function U_(t) {
  this.config.exit.autolinkProtocol.call(this, t);
}
function B_(t) {
  this.config.exit.data.call(this, t);
  const r = this.stack[this.stack.length - 1];
  r.type, r.url = "http://" + this.sliceSerialize(t);
}
function I_(t) {
  this.config.exit.autolinkEmail.call(this, t);
}
function H_(t) {
  this.exit(t);
}
function q_(t) {
  D_(
    t,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, V_],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), Y_]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function V_(t, r, a, i, u) {
  let s = "";
  if (!f1(u) || (/^w/i.test(r) && (a = r + a, r = "", s = "http://"), !P_(a)))
    return !1;
  const c = F_(a + i);
  if (!c[0]) return !1;
  const d = {
    type: "link",
    title: null,
    url: s + r + c[0],
    children: [{ type: "text", value: r + c[0] }]
  };
  return c[1] ? [d, { type: "text", value: c[1] }] : d;
}
function Y_(t, r, a, i) {
  return (
    // Not an expected previous character.
    !f1(i, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(a) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + r + "@" + a,
      children: [{ type: "text", value: r + "@" + a }]
    }
  );
}
function P_(t) {
  const r = t.split(".");
  return !(r.length < 2 || r[r.length - 1] && (/_/.test(r[r.length - 1]) || !/[a-zA-Z\d]/.test(r[r.length - 1])) || r[r.length - 2] && (/_/.test(r[r.length - 2]) || !/[a-zA-Z\d]/.test(r[r.length - 2])));
}
function F_(t) {
  const r = /[!"&'),.:;<>?\]}]+$/.exec(t);
  if (!r)
    return [t, void 0];
  t = t.slice(0, r.index);
  let a = r[0], i = a.indexOf(")");
  const u = Jy(t, "(");
  let s = Jy(t, ")");
  for (; i !== -1 && u > s; )
    t += a.slice(0, i + 1), a = a.slice(i + 1), i = a.indexOf(")"), s++;
  return [t, a];
}
function f1(t, r) {
  const a = t.input.charCodeAt(t.index - 1);
  return (t.index === 0 || rl(a) || yu(a)) && // If it’s an email, the previous character should not be a slash.
  (!r || a !== 47);
}
d1.peek = e5;
function G_() {
  this.buffer();
}
function X_(t) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, t);
}
function Q_() {
  this.buffer();
}
function Z_(t) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    t
  );
}
function K_(t) {
  const r = this.resume(), a = this.stack[this.stack.length - 1];
  a.type, a.identifier = En(
    this.sliceSerialize(t)
  ).toLowerCase(), a.label = r;
}
function J_(t) {
  this.exit(t);
}
function $_(t) {
  const r = this.resume(), a = this.stack[this.stack.length - 1];
  a.type, a.identifier = En(
    this.sliceSerialize(t)
  ).toLowerCase(), a.label = r;
}
function W_(t) {
  this.exit(t);
}
function e5() {
  return "[";
}
function d1(t, r, a, i) {
  const u = a.createTracker(i);
  let s = u.move("[^");
  const c = a.enter("footnoteReference"), d = a.enter("reference");
  return s += u.move(
    a.safe(a.associationId(t), { after: "]", before: s })
  ), d(), c(), s += u.move("]"), s;
}
function t5() {
  return {
    enter: {
      gfmFootnoteCallString: G_,
      gfmFootnoteCall: X_,
      gfmFootnoteDefinitionLabelString: Q_,
      gfmFootnoteDefinition: Z_
    },
    exit: {
      gfmFootnoteCallString: K_,
      gfmFootnoteCall: J_,
      gfmFootnoteDefinitionLabelString: $_,
      gfmFootnoteDefinition: W_
    }
  };
}
function n5(t) {
  let r = !1;
  return t && t.firstLineBlank && (r = !0), {
    handlers: { footnoteDefinition: a, footnoteReference: d1 },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function a(i, u, s, c) {
    const d = s.createTracker(c);
    let m = d.move("[^");
    const h = s.enter("footnoteDefinition"), g = s.enter("label");
    return m += d.move(
      s.safe(s.associationId(i), { before: m, after: "]" })
    ), g(), m += d.move("]:"), i.children && i.children.length > 0 && (d.shift(4), m += d.move(
      (r ? `
` : " ") + s.indentLines(
        s.containerFlow(i, d.current()),
        r ? h1 : r5
      )
    )), h(), m;
  }
}
function r5(t, r, a) {
  return r === 0 ? t : h1(t, r, a);
}
function h1(t, r, a) {
  return (a ? "" : "    ") + t;
}
const l5 = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
p1.peek = s5;
function a5() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: o5 },
    exit: { strikethrough: u5 }
  };
}
function i5() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: l5
      }
    ],
    handlers: { delete: p1 }
  };
}
function o5(t) {
  this.enter({ type: "delete", children: [] }, t);
}
function u5(t) {
  this.exit(t);
}
function p1(t, r, a, i) {
  const u = a.createTracker(i), s = a.enter("strikethrough");
  let c = u.move("~~");
  return c += a.containerPhrasing(t, {
    ...u.current(),
    before: c,
    after: "~"
  }), c += u.move("~~"), s(), c;
}
function s5() {
  return "~";
}
function c5(t) {
  return t.length;
}
function f5(t, r) {
  const a = r || {}, i = (a.align || []).concat(), u = a.stringLength || c5, s = [], c = [], d = [], m = [];
  let h = 0, g = -1;
  for (; ++g < t.length; ) {
    const C = [], z = [];
    let T = -1;
    for (t[g].length > h && (h = t[g].length); ++T < t[g].length; ) {
      const Y = d5(t[g][T]);
      if (a.alignDelimiters !== !1) {
        const j = u(Y);
        z[T] = j, (m[T] === void 0 || j > m[T]) && (m[T] = j);
      }
      C.push(Y);
    }
    c[g] = C, d[g] = z;
  }
  let y = -1;
  if (typeof i == "object" && "length" in i)
    for (; ++y < h; )
      s[y] = $y(i[y]);
  else {
    const C = $y(i);
    for (; ++y < h; )
      s[y] = C;
  }
  y = -1;
  const b = [], x = [];
  for (; ++y < h; ) {
    const C = s[y];
    let z = "", T = "";
    C === 99 ? (z = ":", T = ":") : C === 108 ? z = ":" : C === 114 && (T = ":");
    let Y = a.alignDelimiters === !1 ? 1 : Math.max(
      1,
      m[y] - z.length - T.length
    );
    const j = z + "-".repeat(Y) + T;
    a.alignDelimiters !== !1 && (Y = z.length + Y + T.length, Y > m[y] && (m[y] = Y), x[y] = Y), b[y] = j;
  }
  c.splice(1, 0, b), d.splice(1, 0, x), g = -1;
  const k = [];
  for (; ++g < c.length; ) {
    const C = c[g], z = d[g];
    y = -1;
    const T = [];
    for (; ++y < h; ) {
      const Y = C[y] || "";
      let j = "", Q = "";
      if (a.alignDelimiters !== !1) {
        const I = m[y] - (z[y] || 0), R = s[y];
        R === 114 ? j = " ".repeat(I) : R === 99 ? I % 2 ? (j = " ".repeat(I / 2 + 0.5), Q = " ".repeat(I / 2 - 0.5)) : (j = " ".repeat(I / 2), Q = j) : Q = " ".repeat(I);
      }
      a.delimiterStart !== !1 && !y && T.push("|"), a.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(a.alignDelimiters === !1 && Y === "") && (a.delimiterStart !== !1 || y) && T.push(" "), a.alignDelimiters !== !1 && T.push(j), T.push(Y), a.alignDelimiters !== !1 && T.push(Q), a.padding !== !1 && T.push(" "), (a.delimiterEnd !== !1 || y !== h - 1) && T.push("|");
    }
    k.push(
      a.delimiterEnd === !1 ? T.join("").replace(/ +$/, "") : T.join("")
    );
  }
  return k.join(`
`);
}
function d5(t) {
  return t == null ? "" : String(t);
}
function $y(t) {
  const r = typeof t == "string" ? t.codePointAt(0) : 0;
  return r === 67 || r === 99 ? 99 : r === 76 || r === 108 ? 108 : r === 82 || r === 114 ? 114 : 0;
}
function h5(t, r, a, i) {
  const u = a.enter("blockquote"), s = a.createTracker(i);
  s.move("> "), s.shift(2);
  const c = a.indentLines(
    a.containerFlow(t, s.current()),
    p5
  );
  return u(), c;
}
function p5(t, r, a) {
  return ">" + (a ? "" : " ") + t;
}
function m5(t, r) {
  return Wy(t, r.inConstruct, !0) && !Wy(t, r.notInConstruct, !1);
}
function Wy(t, r, a) {
  if (typeof r == "string" && (r = [r]), !r || r.length === 0)
    return a;
  let i = -1;
  for (; ++i < r.length; )
    if (t.includes(r[i]))
      return !0;
  return !1;
}
function e0(t, r, a, i) {
  let u = -1;
  for (; ++u < a.unsafe.length; )
    if (a.unsafe[u].character === `
` && m5(a.stack, a.unsafe[u]))
      return /[ \t]/.test(i.before) ? "" : " ";
  return `\\
`;
}
function g5(t, r) {
  const a = String(t);
  let i = a.indexOf(r), u = i, s = 0, c = 0;
  if (typeof r != "string")
    throw new TypeError("Expected substring");
  for (; i !== -1; )
    i === u ? ++s > c && (c = s) : s = 1, u = i + r.length, i = a.indexOf(r, u);
  return c;
}
function y5(t, r) {
  return !!(r.options.fences === !1 && t.value && // If there’s no info…
  !t.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(t.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value));
}
function v5(t) {
  const r = t.options.fence || "`";
  if (r !== "`" && r !== "~")
    throw new Error(
      "Cannot serialize code with `" + r + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return r;
}
function b5(t, r, a, i) {
  const u = v5(a), s = t.value || "", c = u === "`" ? "GraveAccent" : "Tilde";
  if (y5(t, a)) {
    const y = a.enter("codeIndented"), b = a.indentLines(s, x5);
    return y(), b;
  }
  const d = a.createTracker(i), m = u.repeat(Math.max(g5(s, u) + 1, 3)), h = a.enter("codeFenced");
  let g = d.move(m);
  if (t.lang) {
    const y = a.enter(`codeFencedLang${c}`);
    g += d.move(
      a.safe(t.lang, {
        before: g,
        after: " ",
        encode: ["`"],
        ...d.current()
      })
    ), y();
  }
  if (t.lang && t.meta) {
    const y = a.enter(`codeFencedMeta${c}`);
    g += d.move(" "), g += d.move(
      a.safe(t.meta, {
        before: g,
        after: `
`,
        encode: ["`"],
        ...d.current()
      })
    ), y();
  }
  return g += d.move(`
`), s && (g += d.move(s + `
`)), g += d.move(m), h(), g;
}
function x5(t, r, a) {
  return (a ? "" : "    ") + t;
}
function Dd(t) {
  const r = t.options.quote || '"';
  if (r !== '"' && r !== "'")
    throw new Error(
      "Cannot serialize title with `" + r + "` for `options.quote`, expected `\"`, or `'`"
    );
  return r;
}
function w5(t, r, a, i) {
  const u = Dd(a), s = u === '"' ? "Quote" : "Apostrophe", c = a.enter("definition");
  let d = a.enter("label");
  const m = a.createTracker(i);
  let h = m.move("[");
  return h += m.move(
    a.safe(a.associationId(t), {
      before: h,
      after: "]",
      ...m.current()
    })
  ), h += m.move("]: "), d(), // If there’s no url, or…
  !t.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (d = a.enter("destinationLiteral"), h += m.move("<"), h += m.move(
    a.safe(t.url, { before: h, after: ">", ...m.current() })
  ), h += m.move(">")) : (d = a.enter("destinationRaw"), h += m.move(
    a.safe(t.url, {
      before: h,
      after: t.title ? " " : `
`,
      ...m.current()
    })
  )), d(), t.title && (d = a.enter(`title${s}`), h += m.move(" " + u), h += m.move(
    a.safe(t.title, {
      before: h,
      after: u,
      ...m.current()
    })
  ), h += m.move(u), d()), c(), h;
}
function S5(t) {
  const r = t.options.emphasis || "*";
  if (r !== "*" && r !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + r + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return r;
}
function wi(t) {
  return "&#x" + t.toString(16).toUpperCase() + ";";
}
function ou(t, r, a) {
  const i = la(t), u = la(r);
  return i === void 0 ? u === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    a === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : u === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : i === 1 ? u === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : u === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : u === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : u === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
m1.peek = E5;
function m1(t, r, a, i) {
  const u = S5(a), s = a.enter("emphasis"), c = a.createTracker(i), d = c.move(u);
  let m = c.move(
    a.containerPhrasing(t, {
      after: u,
      before: d,
      ...c.current()
    })
  );
  const h = m.charCodeAt(0), g = ou(
    i.before.charCodeAt(i.before.length - 1),
    h,
    u
  );
  g.inside && (m = wi(h) + m.slice(1));
  const y = m.charCodeAt(m.length - 1), b = ou(i.after.charCodeAt(0), y, u);
  b.inside && (m = m.slice(0, -1) + wi(y));
  const x = c.move(u);
  return s(), a.attentionEncodeSurroundingInfo = {
    after: b.outside,
    before: g.outside
  }, d + m + x;
}
function E5(t, r, a) {
  return a.options.emphasis || "*";
}
function k5(t, r) {
  let a = !1;
  return Td(t, function(i) {
    if ("value" in i && /\r?\n|\r/.test(i.value) || i.type === "break")
      return a = !0, Qf;
  }), !!((!t.depth || t.depth < 3) && xd(t) && (r.options.setext || a));
}
function C5(t, r, a, i) {
  const u = Math.max(Math.min(6, t.depth || 1), 1), s = a.createTracker(i);
  if (k5(t, a)) {
    const g = a.enter("headingSetext"), y = a.enter("phrasing"), b = a.containerPhrasing(t, {
      ...s.current(),
      before: `
`,
      after: `
`
    });
    return y(), g(), b + `
` + (u === 1 ? "=" : "-").repeat(
      // The whole size…
      b.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(b.lastIndexOf("\r"), b.lastIndexOf(`
`)) + 1)
    );
  }
  const c = "#".repeat(u), d = a.enter("headingAtx"), m = a.enter("phrasing");
  s.move(c + " ");
  let h = a.containerPhrasing(t, {
    before: "# ",
    after: `
`,
    ...s.current()
  });
  return /^[\t ]/.test(h) && (h = wi(h.charCodeAt(0)) + h.slice(1)), h = h ? c + " " + h : c, a.options.closeAtx && (h += " " + c), m(), d(), h;
}
g1.peek = A5;
function g1(t) {
  return t.value || "";
}
function A5() {
  return "<";
}
y1.peek = T5;
function y1(t, r, a, i) {
  const u = Dd(a), s = u === '"' ? "Quote" : "Apostrophe", c = a.enter("image");
  let d = a.enter("label");
  const m = a.createTracker(i);
  let h = m.move("![");
  return h += m.move(
    a.safe(t.alt, { before: h, after: "]", ...m.current() })
  ), h += m.move("]("), d(), // If there’s no url but there is a title…
  !t.url && t.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (d = a.enter("destinationLiteral"), h += m.move("<"), h += m.move(
    a.safe(t.url, { before: h, after: ">", ...m.current() })
  ), h += m.move(">")) : (d = a.enter("destinationRaw"), h += m.move(
    a.safe(t.url, {
      before: h,
      after: t.title ? " " : ")",
      ...m.current()
    })
  )), d(), t.title && (d = a.enter(`title${s}`), h += m.move(" " + u), h += m.move(
    a.safe(t.title, {
      before: h,
      after: u,
      ...m.current()
    })
  ), h += m.move(u), d()), h += m.move(")"), c(), h;
}
function T5() {
  return "!";
}
v1.peek = _5;
function v1(t, r, a, i) {
  const u = t.referenceType, s = a.enter("imageReference");
  let c = a.enter("label");
  const d = a.createTracker(i);
  let m = d.move("![");
  const h = a.safe(t.alt, {
    before: m,
    after: "]",
    ...d.current()
  });
  m += d.move(h + "]["), c();
  const g = a.stack;
  a.stack = [], c = a.enter("reference");
  const y = a.safe(a.associationId(t), {
    before: m,
    after: "]",
    ...d.current()
  });
  return c(), a.stack = g, s(), u === "full" || !h || h !== y ? m += d.move(y + "]") : u === "shortcut" ? m = m.slice(0, -1) : m += d.move("]"), m;
}
function _5() {
  return "!";
}
b1.peek = R5;
function b1(t, r, a) {
  let i = t.value || "", u = "`", s = -1;
  for (; new RegExp("(^|[^`])" + u + "([^`]|$)").test(i); )
    u += "`";
  for (/[^ \r\n]/.test(i) && (/^[ \r\n]/.test(i) && /[ \r\n]$/.test(i) || /^`|`$/.test(i)) && (i = " " + i + " "); ++s < a.unsafe.length; ) {
    const c = a.unsafe[s], d = a.compilePattern(c);
    let m;
    if (c.atBreak)
      for (; m = d.exec(i); ) {
        let h = m.index;
        i.charCodeAt(h) === 10 && i.charCodeAt(h - 1) === 13 && h--, i = i.slice(0, h) + " " + i.slice(m.index + 1);
      }
  }
  return u + i + u;
}
function R5() {
  return "`";
}
function x1(t, r) {
  const a = xd(t);
  return !!(!r.options.resourceLink && // If there’s a url…
  t.url && // And there’s a no title…
  !t.title && // And the content of `node` is a single text node…
  t.children && t.children.length === 1 && t.children[0].type === "text" && // And if the url is the same as the content…
  (a === t.url || "mailto:" + a === t.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(t.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(t.url));
}
w1.peek = D5;
function w1(t, r, a, i) {
  const u = Dd(a), s = u === '"' ? "Quote" : "Apostrophe", c = a.createTracker(i);
  let d, m;
  if (x1(t, a)) {
    const g = a.stack;
    a.stack = [], d = a.enter("autolink");
    let y = c.move("<");
    return y += c.move(
      a.containerPhrasing(t, {
        before: y,
        after: ">",
        ...c.current()
      })
    ), y += c.move(">"), d(), a.stack = g, y;
  }
  d = a.enter("link"), m = a.enter("label");
  let h = c.move("[");
  return h += c.move(
    a.containerPhrasing(t, {
      before: h,
      after: "](",
      ...c.current()
    })
  ), h += c.move("]("), m(), // If there’s no url but there is a title…
  !t.url && t.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (m = a.enter("destinationLiteral"), h += c.move("<"), h += c.move(
    a.safe(t.url, { before: h, after: ">", ...c.current() })
  ), h += c.move(">")) : (m = a.enter("destinationRaw"), h += c.move(
    a.safe(t.url, {
      before: h,
      after: t.title ? " " : ")",
      ...c.current()
    })
  )), m(), t.title && (m = a.enter(`title${s}`), h += c.move(" " + u), h += c.move(
    a.safe(t.title, {
      before: h,
      after: u,
      ...c.current()
    })
  ), h += c.move(u), m()), h += c.move(")"), d(), h;
}
function D5(t, r, a) {
  return x1(t, a) ? "<" : "[";
}
S1.peek = N5;
function S1(t, r, a, i) {
  const u = t.referenceType, s = a.enter("linkReference");
  let c = a.enter("label");
  const d = a.createTracker(i);
  let m = d.move("[");
  const h = a.containerPhrasing(t, {
    before: m,
    after: "]",
    ...d.current()
  });
  m += d.move(h + "]["), c();
  const g = a.stack;
  a.stack = [], c = a.enter("reference");
  const y = a.safe(a.associationId(t), {
    before: m,
    after: "]",
    ...d.current()
  });
  return c(), a.stack = g, s(), u === "full" || !h || h !== y ? m += d.move(y + "]") : u === "shortcut" ? m = m.slice(0, -1) : m += d.move("]"), m;
}
function N5() {
  return "[";
}
function Nd(t) {
  const r = t.options.bullet || "*";
  if (r !== "*" && r !== "+" && r !== "-")
    throw new Error(
      "Cannot serialize items with `" + r + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return r;
}
function O5(t) {
  const r = Nd(t), a = t.options.bulletOther;
  if (!a)
    return r === "*" ? "-" : "*";
  if (a !== "*" && a !== "+" && a !== "-")
    throw new Error(
      "Cannot serialize items with `" + a + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (a === r)
    throw new Error(
      "Expected `bullet` (`" + r + "`) and `bulletOther` (`" + a + "`) to be different"
    );
  return a;
}
function z5(t) {
  const r = t.options.bulletOrdered || ".";
  if (r !== "." && r !== ")")
    throw new Error(
      "Cannot serialize items with `" + r + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return r;
}
function E1(t) {
  const r = t.options.rule || "*";
  if (r !== "*" && r !== "-" && r !== "_")
    throw new Error(
      "Cannot serialize rules with `" + r + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return r;
}
function M5(t, r, a, i) {
  const u = a.enter("list"), s = a.bulletCurrent;
  let c = t.ordered ? z5(a) : Nd(a);
  const d = t.ordered ? c === "." ? ")" : "." : O5(a);
  let m = r && a.bulletLastUsed ? c === a.bulletLastUsed : !1;
  if (!t.ordered) {
    const g = t.children ? t.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (c === "*" || c === "-") && // Empty first list item:
      g && (!g.children || !g.children[0]) && // Directly in two other list items:
      a.stack[a.stack.length - 1] === "list" && a.stack[a.stack.length - 2] === "listItem" && a.stack[a.stack.length - 3] === "list" && a.stack[a.stack.length - 4] === "listItem" && // That are each the first child.
      a.indexStack[a.indexStack.length - 1] === 0 && a.indexStack[a.indexStack.length - 2] === 0 && a.indexStack[a.indexStack.length - 3] === 0 && (m = !0), E1(a) === c && g
    ) {
      let y = -1;
      for (; ++y < t.children.length; ) {
        const b = t.children[y];
        if (b && b.type === "listItem" && b.children && b.children[0] && b.children[0].type === "thematicBreak") {
          m = !0;
          break;
        }
      }
    }
  }
  m && (c = d), a.bulletCurrent = c;
  const h = a.containerFlow(t, i);
  return a.bulletLastUsed = c, a.bulletCurrent = s, u(), h;
}
function L5(t) {
  const r = t.options.listItemIndent || "one";
  if (r !== "tab" && r !== "one" && r !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + r + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return r;
}
function j5(t, r, a, i) {
  const u = L5(a);
  let s = a.bulletCurrent || Nd(a);
  r && r.type === "list" && r.ordered && (s = (typeof r.start == "number" && r.start > -1 ? r.start : 1) + (a.options.incrementListMarker === !1 ? 0 : r.children.indexOf(t)) + s);
  let c = s.length + 1;
  (u === "tab" || u === "mixed" && (r && r.type === "list" && r.spread || t.spread)) && (c = Math.ceil(c / 4) * 4);
  const d = a.createTracker(i);
  d.move(s + " ".repeat(c - s.length)), d.shift(c);
  const m = a.enter("listItem"), h = a.indentLines(
    a.containerFlow(t, d.current()),
    g
  );
  return m(), h;
  function g(y, b, x) {
    return b ? (x ? "" : " ".repeat(c)) + y : (x ? s : s + " ".repeat(c - s.length)) + y;
  }
}
function U5(t, r, a, i) {
  const u = a.enter("paragraph"), s = a.enter("phrasing"), c = a.containerPhrasing(t, i);
  return s(), u(), c;
}
const B5 = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  xu([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function I5(t, r, a, i) {
  return (t.children.some(function(c) {
    return B5(c);
  }) ? a.containerPhrasing : a.containerFlow).call(a, t, i);
}
function H5(t) {
  const r = t.options.strong || "*";
  if (r !== "*" && r !== "_")
    throw new Error(
      "Cannot serialize strong with `" + r + "` for `options.strong`, expected `*`, or `_`"
    );
  return r;
}
k1.peek = q5;
function k1(t, r, a, i) {
  const u = H5(a), s = a.enter("strong"), c = a.createTracker(i), d = c.move(u + u);
  let m = c.move(
    a.containerPhrasing(t, {
      after: u,
      before: d,
      ...c.current()
    })
  );
  const h = m.charCodeAt(0), g = ou(
    i.before.charCodeAt(i.before.length - 1),
    h,
    u
  );
  g.inside && (m = wi(h) + m.slice(1));
  const y = m.charCodeAt(m.length - 1), b = ou(i.after.charCodeAt(0), y, u);
  b.inside && (m = m.slice(0, -1) + wi(y));
  const x = c.move(u + u);
  return s(), a.attentionEncodeSurroundingInfo = {
    after: b.outside,
    before: g.outside
  }, d + m + x;
}
function q5(t, r, a) {
  return a.options.strong || "*";
}
function V5(t, r, a, i) {
  return a.safe(t.value, i);
}
function Y5(t) {
  const r = t.options.ruleRepetition || 3;
  if (r < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + r + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return r;
}
function P5(t, r, a) {
  const i = (E1(a) + (a.options.ruleSpaces ? " " : "")).repeat(Y5(a));
  return a.options.ruleSpaces ? i.slice(0, -1) : i;
}
const C1 = {
  blockquote: h5,
  break: e0,
  code: b5,
  definition: w5,
  emphasis: m1,
  hardBreak: e0,
  heading: C5,
  html: g1,
  image: y1,
  imageReference: v1,
  inlineCode: b1,
  link: w1,
  linkReference: S1,
  list: M5,
  listItem: j5,
  paragraph: U5,
  root: I5,
  strong: k1,
  text: V5,
  thematicBreak: P5
};
function F5() {
  return {
    enter: {
      table: G5,
      tableData: t0,
      tableHeader: t0,
      tableRow: Q5
    },
    exit: {
      codeText: Z5,
      table: X5,
      tableData: Ef,
      tableHeader: Ef,
      tableRow: Ef
    }
  };
}
function G5(t) {
  const r = t._align;
  this.enter(
    {
      type: "table",
      align: r.map(function(a) {
        return a === "none" ? null : a;
      }),
      children: []
    },
    t
  ), this.data.inTable = !0;
}
function X5(t) {
  this.exit(t), this.data.inTable = void 0;
}
function Q5(t) {
  this.enter({ type: "tableRow", children: [] }, t);
}
function Ef(t) {
  this.exit(t);
}
function t0(t) {
  this.enter({ type: "tableCell", children: [] }, t);
}
function Z5(t) {
  let r = this.resume();
  this.data.inTable && (r = r.replace(/\\([\\|])/g, K5));
  const a = this.stack[this.stack.length - 1];
  a.type, a.value = r, this.exit(t);
}
function K5(t, r) {
  return r === "|" ? r : t;
}
function J5(t) {
  const r = t || {}, a = r.tableCellPadding, i = r.tablePipeAlign, u = r.stringLength, s = a ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: b,
      table: c,
      tableCell: m,
      tableRow: d
    }
  };
  function c(x, k, C, z) {
    return h(g(x, C, z), x.align);
  }
  function d(x, k, C, z) {
    const T = y(x, C, z), Y = h([T]);
    return Y.slice(0, Y.indexOf(`
`));
  }
  function m(x, k, C, z) {
    const T = C.enter("tableCell"), Y = C.enter("phrasing"), j = C.containerPhrasing(x, {
      ...z,
      before: s,
      after: s
    });
    return Y(), T(), j;
  }
  function h(x, k) {
    return f5(x, {
      align: k,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: i,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: a,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: u
    });
  }
  function g(x, k, C) {
    const z = x.children;
    let T = -1;
    const Y = [], j = k.enter("table");
    for (; ++T < z.length; )
      Y[T] = y(z[T], k, C);
    return j(), Y;
  }
  function y(x, k, C) {
    const z = x.children;
    let T = -1;
    const Y = [], j = k.enter("tableRow");
    for (; ++T < z.length; )
      Y[T] = m(z[T], x, k, C);
    return j(), Y;
  }
  function b(x, k, C) {
    let z = C1.inlineCode(x, k, C);
    return C.stack.includes("tableCell") && (z = z.replace(/\|/g, "\\$&")), z;
  }
}
function $5() {
  return {
    exit: {
      taskListCheckValueChecked: n0,
      taskListCheckValueUnchecked: n0,
      paragraph: e6
    }
  };
}
function W5() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: t6 }
  };
}
function n0(t) {
  const r = this.stack[this.stack.length - 2];
  r.type, r.checked = t.type === "taskListCheckValueChecked";
}
function e6(t) {
  const r = this.stack[this.stack.length - 2];
  if (r && r.type === "listItem" && typeof r.checked == "boolean") {
    const a = this.stack[this.stack.length - 1];
    a.type;
    const i = a.children[0];
    if (i && i.type === "text") {
      const u = r.children;
      let s = -1, c;
      for (; ++s < u.length; ) {
        const d = u[s];
        if (d.type === "paragraph") {
          c = d;
          break;
        }
      }
      c === a && (i.value = i.value.slice(1), i.value.length === 0 ? a.children.shift() : a.position && i.position && typeof i.position.start.offset == "number" && (i.position.start.column++, i.position.start.offset++, a.position.start = Object.assign({}, i.position.start)));
    }
  }
  this.exit(t);
}
function t6(t, r, a, i) {
  const u = t.children[0], s = typeof t.checked == "boolean" && u && u.type === "paragraph", c = "[" + (t.checked ? "x" : " ") + "] ", d = a.createTracker(i);
  s && d.move(c);
  let m = C1.listItem(t, r, a, {
    ...i,
    ...d.current()
  });
  return s && (m = m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, h)), m;
  function h(g) {
    return g + c;
  }
}
function n6() {
  return [
    M_(),
    t5(),
    a5(),
    F5(),
    $5()
  ];
}
function r6(t) {
  return {
    extensions: [
      L_(),
      n5(t),
      i5(),
      J5(t),
      W5()
    ]
  };
}
const l6 = {
  tokenize: c6,
  partial: !0
}, A1 = {
  tokenize: f6,
  partial: !0
}, T1 = {
  tokenize: d6,
  partial: !0
}, _1 = {
  tokenize: h6,
  partial: !0
}, a6 = {
  tokenize: p6,
  partial: !0
}, R1 = {
  name: "wwwAutolink",
  tokenize: u6,
  previous: N1
}, D1 = {
  name: "protocolAutolink",
  tokenize: s6,
  previous: O1
}, nr = {
  name: "emailAutolink",
  tokenize: o6,
  previous: z1
}, Ln = {};
function i6() {
  return {
    text: Ln
  };
}
let tl = 48;
for (; tl < 123; )
  Ln[tl] = nr, tl++, tl === 58 ? tl = 65 : tl === 91 && (tl = 97);
Ln[43] = nr;
Ln[45] = nr;
Ln[46] = nr;
Ln[95] = nr;
Ln[72] = [nr, D1];
Ln[104] = [nr, D1];
Ln[87] = [nr, R1];
Ln[119] = [nr, R1];
function o6(t, r, a) {
  const i = this;
  let u, s;
  return c;
  function c(y) {
    return !$f(y) || !z1.call(i, i.previous) || Od(i.events) ? a(y) : (t.enter("literalAutolink"), t.enter("literalAutolinkEmail"), d(y));
  }
  function d(y) {
    return $f(y) ? (t.consume(y), d) : y === 64 ? (t.consume(y), m) : a(y);
  }
  function m(y) {
    return y === 46 ? t.check(a6, g, h)(y) : y === 45 || y === 95 || zt(y) ? (s = !0, t.consume(y), m) : g(y);
  }
  function h(y) {
    return t.consume(y), u = !0, m;
  }
  function g(y) {
    return s && u && Bt(i.previous) ? (t.exit("literalAutolinkEmail"), t.exit("literalAutolink"), r(y)) : a(y);
  }
}
function u6(t, r, a) {
  const i = this;
  return u;
  function u(c) {
    return c !== 87 && c !== 119 || !N1.call(i, i.previous) || Od(i.events) ? a(c) : (t.enter("literalAutolink"), t.enter("literalAutolinkWww"), t.check(l6, t.attempt(A1, t.attempt(T1, s), a), a)(c));
  }
  function s(c) {
    return t.exit("literalAutolinkWww"), t.exit("literalAutolink"), r(c);
  }
}
function s6(t, r, a) {
  const i = this;
  let u = "", s = !1;
  return c;
  function c(y) {
    return (y === 72 || y === 104) && O1.call(i, i.previous) && !Od(i.events) ? (t.enter("literalAutolink"), t.enter("literalAutolinkHttp"), u += String.fromCodePoint(y), t.consume(y), d) : a(y);
  }
  function d(y) {
    if (Bt(y) && u.length < 5)
      return u += String.fromCodePoint(y), t.consume(y), d;
    if (y === 58) {
      const b = u.toLowerCase();
      if (b === "http" || b === "https")
        return t.consume(y), m;
    }
    return a(y);
  }
  function m(y) {
    return y === 47 ? (t.consume(y), s ? h : (s = !0, m)) : a(y);
  }
  function h(y) {
    return y === null || lu(y) || $e(y) || rl(y) || yu(y) ? a(y) : t.attempt(A1, t.attempt(T1, g), a)(y);
  }
  function g(y) {
    return t.exit("literalAutolinkHttp"), t.exit("literalAutolink"), r(y);
  }
}
function c6(t, r, a) {
  let i = 0;
  return u;
  function u(c) {
    return (c === 87 || c === 119) && i < 3 ? (i++, t.consume(c), u) : c === 46 && i === 3 ? (t.consume(c), s) : a(c);
  }
  function s(c) {
    return c === null ? a(c) : r(c);
  }
}
function f6(t, r, a) {
  let i, u, s;
  return c;
  function c(h) {
    return h === 46 || h === 95 ? t.check(_1, m, d)(h) : h === null || $e(h) || rl(h) || h !== 45 && yu(h) ? m(h) : (s = !0, t.consume(h), c);
  }
  function d(h) {
    return h === 95 ? i = !0 : (u = i, i = void 0), t.consume(h), c;
  }
  function m(h) {
    return u || i || !s ? a(h) : r(h);
  }
}
function d6(t, r) {
  let a = 0, i = 0;
  return u;
  function u(c) {
    return c === 40 ? (a++, t.consume(c), u) : c === 41 && i < a ? s(c) : c === 33 || c === 34 || c === 38 || c === 39 || c === 41 || c === 42 || c === 44 || c === 46 || c === 58 || c === 59 || c === 60 || c === 63 || c === 93 || c === 95 || c === 126 ? t.check(_1, r, s)(c) : c === null || $e(c) || rl(c) ? r(c) : (t.consume(c), u);
  }
  function s(c) {
    return c === 41 && i++, t.consume(c), u;
  }
}
function h6(t, r, a) {
  return i;
  function i(d) {
    return d === 33 || d === 34 || d === 39 || d === 41 || d === 42 || d === 44 || d === 46 || d === 58 || d === 59 || d === 63 || d === 95 || d === 126 ? (t.consume(d), i) : d === 38 ? (t.consume(d), s) : d === 93 ? (t.consume(d), u) : (
      // `<` is an end.
      d === 60 || // So is whitespace.
      d === null || $e(d) || rl(d) ? r(d) : a(d)
    );
  }
  function u(d) {
    return d === null || d === 40 || d === 91 || $e(d) || rl(d) ? r(d) : i(d);
  }
  function s(d) {
    return Bt(d) ? c(d) : a(d);
  }
  function c(d) {
    return d === 59 ? (t.consume(d), i) : Bt(d) ? (t.consume(d), c) : a(d);
  }
}
function p6(t, r, a) {
  return i;
  function i(s) {
    return t.consume(s), u;
  }
  function u(s) {
    return zt(s) ? a(s) : r(s);
  }
}
function N1(t) {
  return t === null || t === 40 || t === 42 || t === 95 || t === 91 || t === 93 || t === 126 || $e(t);
}
function O1(t) {
  return !Bt(t);
}
function z1(t) {
  return !(t === 47 || $f(t));
}
function $f(t) {
  return t === 43 || t === 45 || t === 46 || t === 95 || zt(t);
}
function Od(t) {
  let r = t.length, a = !1;
  for (; r--; ) {
    const i = t[r][1];
    if ((i.type === "labelLink" || i.type === "labelImage") && !i._balanced) {
      a = !0;
      break;
    }
    if (i._gfmAutolinkLiteralWalkedInto) {
      a = !1;
      break;
    }
  }
  return t.length > 0 && !a && (t[t.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), a;
}
const m6 = {
  tokenize: E6,
  partial: !0
};
function g6() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: x6,
        continuation: {
          tokenize: w6
        },
        exit: S6
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: b6
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: y6,
        resolveTo: v6
      }
    }
  };
}
function y6(t, r, a) {
  const i = this;
  let u = i.events.length;
  const s = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
  let c;
  for (; u--; ) {
    const m = i.events[u][1];
    if (m.type === "labelImage") {
      c = m;
      break;
    }
    if (m.type === "gfmFootnoteCall" || m.type === "labelLink" || m.type === "label" || m.type === "image" || m.type === "link")
      break;
  }
  return d;
  function d(m) {
    if (!c || !c._balanced)
      return a(m);
    const h = En(i.sliceSerialize({
      start: c.end,
      end: i.now()
    }));
    return h.codePointAt(0) !== 94 || !s.includes(h.slice(1)) ? a(m) : (t.enter("gfmFootnoteCallLabelMarker"), t.consume(m), t.exit("gfmFootnoteCallLabelMarker"), r(m));
  }
}
function v6(t, r) {
  let a = t.length;
  for (; a--; )
    if (t[a][1].type === "labelImage" && t[a][0] === "enter") {
      t[a][1];
      break;
    }
  t[a + 1][1].type = "data", t[a + 3][1].type = "gfmFootnoteCallLabelMarker";
  const i = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, t[a + 3][1].start),
    end: Object.assign({}, t[t.length - 1][1].end)
  }, u = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, t[a + 3][1].end),
    end: Object.assign({}, t[a + 3][1].end)
  };
  u.end.column++, u.end.offset++, u.end._bufferIndex++;
  const s = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, u.end),
    end: Object.assign({}, t[t.length - 1][1].start)
  }, c = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, s.start),
    end: Object.assign({}, s.end)
  }, d = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    t[a + 1],
    t[a + 2],
    ["enter", i, r],
    // The `[`
    t[a + 3],
    t[a + 4],
    // The `^`.
    ["enter", u, r],
    ["exit", u, r],
    // Everything in between.
    ["enter", s, r],
    ["enter", c, r],
    ["exit", c, r],
    ["exit", s, r],
    // The ending (`]`, properly parsed and labelled).
    t[t.length - 2],
    t[t.length - 1],
    ["exit", i, r]
  ];
  return t.splice(a, t.length - a + 1, ...d), t;
}
function b6(t, r, a) {
  const i = this, u = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
  let s = 0, c;
  return d;
  function d(y) {
    return t.enter("gfmFootnoteCall"), t.enter("gfmFootnoteCallLabelMarker"), t.consume(y), t.exit("gfmFootnoteCallLabelMarker"), m;
  }
  function m(y) {
    return y !== 94 ? a(y) : (t.enter("gfmFootnoteCallMarker"), t.consume(y), t.exit("gfmFootnoteCallMarker"), t.enter("gfmFootnoteCallString"), t.enter("chunkString").contentType = "string", h);
  }
  function h(y) {
    if (
      // Too long.
      s > 999 || // Closing brace with nothing.
      y === 93 && !c || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      y === null || y === 91 || $e(y)
    )
      return a(y);
    if (y === 93) {
      t.exit("chunkString");
      const b = t.exit("gfmFootnoteCallString");
      return u.includes(En(i.sliceSerialize(b))) ? (t.enter("gfmFootnoteCallLabelMarker"), t.consume(y), t.exit("gfmFootnoteCallLabelMarker"), t.exit("gfmFootnoteCall"), r) : a(y);
    }
    return $e(y) || (c = !0), s++, t.consume(y), y === 92 ? g : h;
  }
  function g(y) {
    return y === 91 || y === 92 || y === 93 ? (t.consume(y), s++, h) : h(y);
  }
}
function x6(t, r, a) {
  const i = this, u = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
  let s, c = 0, d;
  return m;
  function m(k) {
    return t.enter("gfmFootnoteDefinition")._container = !0, t.enter("gfmFootnoteDefinitionLabel"), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(k), t.exit("gfmFootnoteDefinitionLabelMarker"), h;
  }
  function h(k) {
    return k === 94 ? (t.enter("gfmFootnoteDefinitionMarker"), t.consume(k), t.exit("gfmFootnoteDefinitionMarker"), t.enter("gfmFootnoteDefinitionLabelString"), t.enter("chunkString").contentType = "string", g) : a(k);
  }
  function g(k) {
    if (
      // Too long.
      c > 999 || // Closing brace with nothing.
      k === 93 && !d || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      k === null || k === 91 || $e(k)
    )
      return a(k);
    if (k === 93) {
      t.exit("chunkString");
      const C = t.exit("gfmFootnoteDefinitionLabelString");
      return s = En(i.sliceSerialize(C)), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(k), t.exit("gfmFootnoteDefinitionLabelMarker"), t.exit("gfmFootnoteDefinitionLabel"), b;
    }
    return $e(k) || (d = !0), c++, t.consume(k), k === 92 ? y : g;
  }
  function y(k) {
    return k === 91 || k === 92 || k === 93 ? (t.consume(k), c++, g) : g(k);
  }
  function b(k) {
    return k === 58 ? (t.enter("definitionMarker"), t.consume(k), t.exit("definitionMarker"), u.includes(s) || u.push(s), Be(t, x, "gfmFootnoteDefinitionWhitespace")) : a(k);
  }
  function x(k) {
    return r(k);
  }
}
function w6(t, r, a) {
  return t.check(ki, r, t.attempt(m6, r, a));
}
function S6(t) {
  t.exit("gfmFootnoteDefinition");
}
function E6(t, r, a) {
  const i = this;
  return Be(t, u, "gfmFootnoteDefinitionIndent", 5);
  function u(s) {
    const c = i.events[i.events.length - 1];
    return c && c[1].type === "gfmFootnoteDefinitionIndent" && c[2].sliceSerialize(c[1], !0).length === 4 ? r(s) : a(s);
  }
}
function k6(t) {
  let a = (t || {}).singleTilde;
  const i = {
    name: "strikethrough",
    tokenize: s,
    resolveAll: u
  };
  return a == null && (a = !0), {
    text: {
      126: i
    },
    insideSpan: {
      null: [i]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function u(c, d) {
    let m = -1;
    for (; ++m < c.length; )
      if (c[m][0] === "enter" && c[m][1].type === "strikethroughSequenceTemporary" && c[m][1]._close) {
        let h = m;
        for (; h--; )
          if (c[h][0] === "exit" && c[h][1].type === "strikethroughSequenceTemporary" && c[h][1]._open && // If the sizes are the same:
          c[m][1].end.offset - c[m][1].start.offset === c[h][1].end.offset - c[h][1].start.offset) {
            c[m][1].type = "strikethroughSequence", c[h][1].type = "strikethroughSequence";
            const g = {
              type: "strikethrough",
              start: Object.assign({}, c[h][1].start),
              end: Object.assign({}, c[m][1].end)
            }, y = {
              type: "strikethroughText",
              start: Object.assign({}, c[h][1].end),
              end: Object.assign({}, c[m][1].start)
            }, b = [["enter", g, d], ["enter", c[h][1], d], ["exit", c[h][1], d], ["enter", y, d]], x = d.parser.constructs.insideSpan.null;
            x && ln(b, b.length, 0, vu(x, c.slice(h + 1, m), d)), ln(b, b.length, 0, [["exit", y, d], ["enter", c[m][1], d], ["exit", c[m][1], d], ["exit", g, d]]), ln(c, h - 1, m - h + 3, b), m = h + b.length - 2;
            break;
          }
      }
    for (m = -1; ++m < c.length; )
      c[m][1].type === "strikethroughSequenceTemporary" && (c[m][1].type = "data");
    return c;
  }
  function s(c, d, m) {
    const h = this.previous, g = this.events;
    let y = 0;
    return b;
    function b(k) {
      return h === 126 && g[g.length - 1][1].type !== "characterEscape" ? m(k) : (c.enter("strikethroughSequenceTemporary"), x(k));
    }
    function x(k) {
      const C = la(h);
      if (k === 126)
        return y > 1 ? m(k) : (c.consume(k), y++, x);
      if (y < 2 && !a) return m(k);
      const z = c.exit("strikethroughSequenceTemporary"), T = la(k);
      return z._open = !T || T === 2 && !!C, z._close = !C || C === 2 && !!T, d(k);
    }
  }
}
class C6 {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(r, a, i) {
    A6(this, r, a, i);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(r) {
    if (this.map.sort(function(s, c) {
      return s[0] - c[0];
    }), this.map.length === 0)
      return;
    let a = this.map.length;
    const i = [];
    for (; a > 0; )
      a -= 1, i.push(r.slice(this.map[a][0] + this.map[a][1]), this.map[a][2]), r.length = this.map[a][0];
    i.push(r.slice()), r.length = 0;
    let u = i.pop();
    for (; u; ) {
      for (const s of u)
        r.push(s);
      u = i.pop();
    }
    this.map.length = 0;
  }
}
function A6(t, r, a, i) {
  let u = 0;
  if (!(a === 0 && i.length === 0)) {
    for (; u < t.map.length; ) {
      if (t.map[u][0] === r) {
        t.map[u][1] += a, t.map[u][2].push(...i);
        return;
      }
      u += 1;
    }
    t.map.push([r, a, i]);
  }
}
function T6(t, r) {
  let a = !1;
  const i = [];
  for (; r < t.length; ) {
    const u = t[r];
    if (a) {
      if (u[0] === "enter")
        u[1].type === "tableContent" && i.push(t[r + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (u[1].type === "tableContent") {
        if (t[r - 1][1].type === "tableDelimiterMarker") {
          const s = i.length - 1;
          i[s] = i[s] === "left" ? "center" : "right";
        }
      } else if (u[1].type === "tableDelimiterRow")
        break;
    } else u[0] === "enter" && u[1].type === "tableDelimiterRow" && (a = !0);
    r += 1;
  }
  return i;
}
function _6() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: R6,
        resolveAll: D6
      }
    }
  };
}
function R6(t, r, a) {
  const i = this;
  let u = 0, s = 0, c;
  return d;
  function d(O) {
    let ne = i.events.length - 1;
    for (; ne > -1; ) {
      const le = i.events[ne][1].type;
      if (le === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      le === "linePrefix") ne--;
      else break;
    }
    const te = ne > -1 ? i.events[ne][1].type : null, re = te === "tableHead" || te === "tableRow" ? R : m;
    return re === R && i.parser.lazy[i.now().line] ? a(O) : re(O);
  }
  function m(O) {
    return t.enter("tableHead"), t.enter("tableRow"), h(O);
  }
  function h(O) {
    return O === 124 || (c = !0, s += 1), g(O);
  }
  function g(O) {
    return O === null ? a(O) : ye(O) ? s > 1 ? (s = 0, i.interrupt = !0, t.exit("tableRow"), t.enter("lineEnding"), t.consume(O), t.exit("lineEnding"), x) : a(O) : je(O) ? Be(t, g, "whitespace")(O) : (s += 1, c && (c = !1, u += 1), O === 124 ? (t.enter("tableCellDivider"), t.consume(O), t.exit("tableCellDivider"), c = !0, g) : (t.enter("data"), y(O)));
  }
  function y(O) {
    return O === null || O === 124 || $e(O) ? (t.exit("data"), g(O)) : (t.consume(O), O === 92 ? b : y);
  }
  function b(O) {
    return O === 92 || O === 124 ? (t.consume(O), y) : y(O);
  }
  function x(O) {
    return i.interrupt = !1, i.parser.lazy[i.now().line] ? a(O) : (t.enter("tableDelimiterRow"), c = !1, je(O) ? Be(t, k, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(O) : k(O));
  }
  function k(O) {
    return O === 45 || O === 58 ? z(O) : O === 124 ? (c = !0, t.enter("tableCellDivider"), t.consume(O), t.exit("tableCellDivider"), C) : I(O);
  }
  function C(O) {
    return je(O) ? Be(t, z, "whitespace")(O) : z(O);
  }
  function z(O) {
    return O === 58 ? (s += 1, c = !0, t.enter("tableDelimiterMarker"), t.consume(O), t.exit("tableDelimiterMarker"), T) : O === 45 ? (s += 1, T(O)) : O === null || ye(O) ? Q(O) : I(O);
  }
  function T(O) {
    return O === 45 ? (t.enter("tableDelimiterFiller"), Y(O)) : I(O);
  }
  function Y(O) {
    return O === 45 ? (t.consume(O), Y) : O === 58 ? (c = !0, t.exit("tableDelimiterFiller"), t.enter("tableDelimiterMarker"), t.consume(O), t.exit("tableDelimiterMarker"), j) : (t.exit("tableDelimiterFiller"), j(O));
  }
  function j(O) {
    return je(O) ? Be(t, Q, "whitespace")(O) : Q(O);
  }
  function Q(O) {
    return O === 124 ? k(O) : O === null || ye(O) ? !c || u !== s ? I(O) : (t.exit("tableDelimiterRow"), t.exit("tableHead"), r(O)) : I(O);
  }
  function I(O) {
    return a(O);
  }
  function R(O) {
    return t.enter("tableRow"), F(O);
  }
  function F(O) {
    return O === 124 ? (t.enter("tableCellDivider"), t.consume(O), t.exit("tableCellDivider"), F) : O === null || ye(O) ? (t.exit("tableRow"), r(O)) : je(O) ? Be(t, F, "whitespace")(O) : (t.enter("data"), q(O));
  }
  function q(O) {
    return O === null || O === 124 || $e(O) ? (t.exit("data"), F(O)) : (t.consume(O), O === 92 ? Z : q);
  }
  function Z(O) {
    return O === 92 || O === 124 ? (t.consume(O), q) : q(O);
  }
}
function D6(t, r) {
  let a = -1, i = !0, u = 0, s = [0, 0, 0, 0], c = [0, 0, 0, 0], d = !1, m = 0, h, g, y;
  const b = new C6();
  for (; ++a < t.length; ) {
    const x = t[a], k = x[1];
    x[0] === "enter" ? k.type === "tableHead" ? (d = !1, m !== 0 && (r0(b, r, m, h, g), g = void 0, m = 0), h = {
      type: "table",
      start: Object.assign({}, k.start),
      // Note: correct end is set later.
      end: Object.assign({}, k.end)
    }, b.add(a, 0, [["enter", h, r]])) : k.type === "tableRow" || k.type === "tableDelimiterRow" ? (i = !0, y = void 0, s = [0, 0, 0, 0], c = [0, a + 1, 0, 0], d && (d = !1, g = {
      type: "tableBody",
      start: Object.assign({}, k.start),
      // Note: correct end is set later.
      end: Object.assign({}, k.end)
    }, b.add(a, 0, [["enter", g, r]])), u = k.type === "tableDelimiterRow" ? 2 : g ? 3 : 1) : u && (k.type === "data" || k.type === "tableDelimiterMarker" || k.type === "tableDelimiterFiller") ? (i = !1, c[2] === 0 && (s[1] !== 0 && (c[0] = c[1], y = Jo(b, r, s, u, void 0, y), s = [0, 0, 0, 0]), c[2] = a)) : k.type === "tableCellDivider" && (i ? i = !1 : (s[1] !== 0 && (c[0] = c[1], y = Jo(b, r, s, u, void 0, y)), s = c, c = [s[1], a, 0, 0])) : k.type === "tableHead" ? (d = !0, m = a) : k.type === "tableRow" || k.type === "tableDelimiterRow" ? (m = a, s[1] !== 0 ? (c[0] = c[1], y = Jo(b, r, s, u, a, y)) : c[1] !== 0 && (y = Jo(b, r, c, u, a, y)), u = 0) : u && (k.type === "data" || k.type === "tableDelimiterMarker" || k.type === "tableDelimiterFiller") && (c[3] = a);
  }
  for (m !== 0 && r0(b, r, m, h, g), b.consume(r.events), a = -1; ++a < r.events.length; ) {
    const x = r.events[a];
    x[0] === "enter" && x[1].type === "table" && (x[1]._align = T6(r.events, a));
  }
  return t;
}
function Jo(t, r, a, i, u, s) {
  const c = i === 1 ? "tableHeader" : i === 2 ? "tableDelimiter" : "tableData", d = "tableContent";
  a[0] !== 0 && (s.end = Object.assign({}, Jl(r.events, a[0])), t.add(a[0], 0, [["exit", s, r]]));
  const m = Jl(r.events, a[1]);
  if (s = {
    type: c,
    start: Object.assign({}, m),
    // Note: correct end is set later.
    end: Object.assign({}, m)
  }, t.add(a[1], 0, [["enter", s, r]]), a[2] !== 0) {
    const h = Jl(r.events, a[2]), g = Jl(r.events, a[3]), y = {
      type: d,
      start: Object.assign({}, h),
      end: Object.assign({}, g)
    };
    if (t.add(a[2], 0, [["enter", y, r]]), i !== 2) {
      const b = r.events[a[2]], x = r.events[a[3]];
      if (b[1].end = Object.assign({}, x[1].end), b[1].type = "chunkText", b[1].contentType = "text", a[3] > a[2] + 1) {
        const k = a[2] + 1, C = a[3] - a[2] - 1;
        t.add(k, C, []);
      }
    }
    t.add(a[3] + 1, 0, [["exit", y, r]]);
  }
  return u !== void 0 && (s.end = Object.assign({}, Jl(r.events, u)), t.add(u, 0, [["exit", s, r]]), s = void 0), s;
}
function r0(t, r, a, i, u) {
  const s = [], c = Jl(r.events, a);
  u && (u.end = Object.assign({}, c), s.push(["exit", u, r])), i.end = Object.assign({}, c), s.push(["exit", i, r]), t.add(a + 1, 0, s);
}
function Jl(t, r) {
  const a = t[r], i = a[0] === "enter" ? "start" : "end";
  return a[1][i];
}
const N6 = {
  name: "tasklistCheck",
  tokenize: z6
};
function O6() {
  return {
    text: {
      91: N6
    }
  };
}
function z6(t, r, a) {
  const i = this;
  return u;
  function u(m) {
    return (
      // Exit if there’s stuff before.
      i.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !i._gfmTasklistFirstContentOfListItem ? a(m) : (t.enter("taskListCheck"), t.enter("taskListCheckMarker"), t.consume(m), t.exit("taskListCheckMarker"), s)
    );
  }
  function s(m) {
    return $e(m) ? (t.enter("taskListCheckValueUnchecked"), t.consume(m), t.exit("taskListCheckValueUnchecked"), c) : m === 88 || m === 120 ? (t.enter("taskListCheckValueChecked"), t.consume(m), t.exit("taskListCheckValueChecked"), c) : a(m);
  }
  function c(m) {
    return m === 93 ? (t.enter("taskListCheckMarker"), t.consume(m), t.exit("taskListCheckMarker"), t.exit("taskListCheck"), d) : a(m);
  }
  function d(m) {
    return ye(m) ? r(m) : je(m) ? t.check({
      tokenize: M6
    }, r, a)(m) : a(m);
  }
}
function M6(t, r, a) {
  return Be(t, i, "whitespace");
  function i(u) {
    return u === null ? a(u) : r(u);
  }
}
function L6(t) {
  return Yb([
    i6(),
    g6(),
    k6(t),
    _6(),
    O6()
  ]);
}
const j6 = {};
function M1(t) {
  const r = (
    /** @type {Processor<Root>} */
    this
  ), a = t || j6, i = r.data(), u = i.micromarkExtensions || (i.micromarkExtensions = []), s = i.fromMarkdownExtensions || (i.fromMarkdownExtensions = []), c = i.toMarkdownExtensions || (i.toMarkdownExtensions = []);
  u.push(L6(a)), s.push(n6()), c.push(r6(a));
}
function l0({
  courses: t,
  learningPaths: r,
  altName: a
}) {
  const [i, u] = A.useState([]), s = (d) => {
    u(
      (m) => m.includes(d) ? m.filter((h) => h !== d) : [...m, d]
    );
  }, c = (d, m) => {
    d.preventDefault(), window.open(m, "_blank");
  };
  return /* @__PURE__ */ _.jsxs("div", { children: [
    t && t.length > 0 && /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col gap-3 py-3", children: [
      /* @__PURE__ */ _.jsx("h3", { className: "section-title course w-min", children: a ?? "Cursos" }),
      t.map((d) => /* @__PURE__ */ _.jsxs(
        "button",
        {
          className: "item no-children",
          type: "button",
          onClick: (m) => c(m, d.url),
          children: [
            /* @__PURE__ */ _.jsx("a", { href: d.url, children: d.name }),
            /* @__PURE__ */ _.jsx(Xg, { className: "text-gray-500", size: 18 })
          ]
        },
        d.id
      ))
    ] }),
    r && r.length > 0 && /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col gap-3 py-3", children: [
      /* @__PURE__ */ _.jsx("h3", { className: "section-title route mb-2 w-min", children: "Rutas " }),
      r.map((d) => /* @__PURE__ */ _.jsxs(
        "div",
        {
          className: `item p-4 ${i.includes(d.id) ? "expanded" : ""}`,
          role: "button",
          tabIndex: 0,
          onClick: () => s(d.id),
          children: [
            /* @__PURE__ */ _.jsxs("div", { className: "flex cursor-pointer items-center justify-between w-full", children: [
              /* @__PURE__ */ _.jsx("h4", { className: "text-start", children: d.title }),
              i.includes(d.id) ? /* @__PURE__ */ _.jsx($2, { className: "text-gray-500", size: 18 }) : /* @__PURE__ */ _.jsx(Z2, { className: "text-gray-500", size: 18 })
            ] }),
            i.includes(d.id) && /* @__PURE__ */ _.jsx("ul", { className: "mt-2 w-full", children: d.courses.map((m, h) => /* @__PURE__ */ _.jsxs("li", { className: "relative flex items-center gap-2", children: [
              h !== 0 && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
                /* @__PURE__ */ _.jsx("div", { className: "absolute left-[5px] top-[-0px] h-[50%] w-[2px] bg-[#475D92]" }),
                /* @__PURE__ */ _.jsx("div", { className: "absolute left-[5px] top-[-50%] h-[100%] w-[2px] bg-[#475D92]" })
              ] }),
              /* @__PURE__ */ _.jsx(lE, { color: "#475D92", fill: "#475D92", size: 12 }),
              /* @__PURE__ */ _.jsxs(
                "button",
                {
                  className: "item no-children my-2 p-4",
                  type: "button",
                  onClick: (g) => g.stopPropagation(),
                  children: [
                    /* @__PURE__ */ _.jsx("a", { href: m.url, children: m.name }),
                    /* @__PURE__ */ _.jsx(Xg, { className: "text-gray-500", size: 18 })
                  ]
                }
              )
            ] }, m.id)) }),
            i.includes(d.id) && /* @__PURE__ */ _.jsx(
              "button",
              {
                className: "button-text",
                type: "button",
                onClick: (m) => c(m, d.courses[0].url),
                children: "IR A LA RUTA"
              }
            )
          ]
        },
        d.id
      ))
    ] })
  ] });
}
const U6 = ({ children: t, ...r }) => /* @__PURE__ */ _.jsx("a", { ...r, target: "_blank", rel: "noopener noreferrer", children: t });
function B6({ content: t, buttons: r, setting: a, index: i }) {
  var x;
  let u, s = !1;
  try {
    u = JSON.parse(t);
  } catch {
    s = !0;
  }
  let c = (u == null ? void 0 : u.message) ?? "No hay mensaje disponible";
  const d = u == null ? void 0 : u.response.filter(
    (k) => "titulo_curso" in k
  ), m = (u == null ? void 0 : u.suggestions) ?? [], h = Array.isArray(u == null ? void 0 : u.response) ? u.response.filter((k) => "titulo_rutas" in k) : [], g = I6(h);
  let y = [];
  d && (y = d.map((k) => ({
    id: k.titulo_curso,
    name: k.titulo_curso,
    url: "https://www.google.com"
  })));
  const b = m.map((k) => ({
    id: k.titulo_curso,
    name: k.titulo_curso,
    url: "https://www.google.com"
  }));
  return c.includes("Contactar a un tutor experto") && (c = c.replace(
    "Contactar a un tutor experto",
    "[Contactar a un tutor experto](https://www.google.com)"
  )), /* @__PURE__ */ _.jsxs("div", { className: "items-start justify-end", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "mb-2 flex flex-col justify-end", children: [
      /* @__PURE__ */ _.jsx("div", { className: "flex flex-row", children: /* @__PURE__ */ _.jsx(gu, { children: /* @__PURE__ */ _.jsx(ud, { className: "h-[32px] w-[32px]", variant: "light" }) }) }),
      /* @__PURE__ */ _.jsx("p", { className: "font-base mt-1 font-bold leading-[24px] tracking-[0.15px]", children: "TutorIA" })
    ] }),
    /* @__PURE__ */ _.jsxs(
      "div",
      {
        className: "overflow-hidden text-[16px] font-normal leading-[24px] tracking-[0.5px]",
        style: {
          backgroundColor: i === 0 || i === 1 ? "" : (x = a == null ? void 0 : a.colors) == null ? void 0 : x.botMessage,
          color: "#E2E2E9"
        },
        children: [
          /* @__PURE__ */ _.jsx("div", { className: "markdown-class prose", children: /* @__PURE__ */ _.jsx(
            c1,
            {
              rehypePlugins: [_d],
              remarkPlugins: [M1],
              components: {
                a: U6
              },
              children: s ? t : c
            }
          ) }),
          d && /* @__PURE__ */ _.jsx(l0, { courses: y, learningPaths: g }),
          m && /* @__PURE__ */ _.jsx(l0, { courses: b, altName: "Sugerencias" }),
          r && /* @__PURE__ */ _.jsx("div", { className: "mt-2 space-x-2", style: { display: "flex", flexDirection: "column" }, children: r.map((k) => /* @__PURE__ */ _.jsx(
            $l,
            {
              variant: "ghost",
              onClick: k.onClick,
              onMouseEnter: (C) => {
                const z = C.target;
                z.style.backgroundColor = "#C5C6D0";
              },
              onMouseLeave: (C) => {
                const z = C.target;
                z.style.backgroundColor = "transparent";
              },
              children: k.text
            },
            k.text
          )) })
        ]
      }
    )
  ] });
}
function I6(t) {
  return t.map((r) => {
    const a = r.listadecursos.map((i) => ({
      id: i.Titulo,
      name: i.Titulo,
      url: "https://www.google.com"
    }));
    return {
      id: r.IdRoute,
      title: r.titulo_rutas,
      description: r.descripcion_rutas,
      courses: a
    };
  });
}
function H6() {
  return /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col justify-end", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col justify-end gap-3", children: [
      /* @__PURE__ */ _.jsx("div", { className: "icon-container flex flex-row", children: /* @__PURE__ */ _.jsx(gu, { className: "animated-icon", children: /* @__PURE__ */ _.jsx(ud, { className: "h-full w-full", variant: "light" }) }) }),
      /* @__PURE__ */ _.jsx("div", { className: "avatar-rol-name font-base font-bold tracking-[0.15px]", children: "TutorIA" })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "welcome-text flex flex-col", children: [
      /* @__PURE__ */ _.jsx("div", { className: "welcome-text-content", children: "¡Bienvenido!" }),
      /* @__PURE__ */ _.jsxs("div", { className: "welcome-text-content line-2", children: [
        "Soy ",
        /* @__PURE__ */ _.jsx("span", { className: "line-tutor-ia", children: "TutorIA" })
      ] }),
      /* @__PURE__ */ _.jsx("div", { className: "welcome-text-content line-3", children: "tu asistente de aprendizaje." })
    ] }),
    /* @__PURE__ */ _.jsx(
      "div",
      {
        className: "welcome-content overflow-hidden text-[16px] font-normal leading-[24px] tracking-[0.5px]",
        style: {
          color: "#E2E2E9"
        },
        children: /* @__PURE__ */ _.jsx("div", { className: "markdown-class prose", children: /* @__PURE__ */ _.jsx(
          c1,
          {
            rehypePlugins: [_d],
            remarkPlugins: [M1],
            children: V2
          }
        ) })
      }
    )
  ] });
}
function q6({ messages: t, setting: r, isLoading: a }) {
  const i = A.useRef(null);
  return A.useEffect(() => {
    var u;
    (u = i.current) == null || u.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [t]), /* @__PURE__ */ _.jsxs("div", { ref: i, className: "list-messages space-y-4 overflow-y-auto p-4", children: [
    t.length === 0 && /* @__PURE__ */ _.jsx(H6, {}),
    t.map(({ role: u, id: s, content: c, buttons: d }, m) => u === "user" ? /* @__PURE__ */ _.jsx("div", { children: /* @__PURE__ */ _.jsx(mC, { content: c, setting: r }, s) }, s) : /* @__PURE__ */ _.jsx("div", { children: /* @__PURE__ */ _.jsx(
      B6,
      {
        buttons: d,
        content: c,
        index: m,
        setting: r
      },
      s
    ) }, s)),
    a && /* @__PURE__ */ _.jsx("div", { className: "mt-2 flex w-full items-center", children: /* @__PURE__ */ _.jsx("p", { className: "text-sm font-bold", children: "Cargando..." }) })
  ] });
}
const V6 = 4 * 60 * 1e3 + 40 * 1e3, Y6 = 5 * 60 * 1e3;
function P6({ companyid: t, userName: r }) {
  const a = { ...Ho, userName: r }, [i, u] = A.useState(!1), { messages: s, input: c, handleInputChange: d, setMessages: m, setInput: h } = U2(), [g, y] = A.useState(!1), [b, x] = A.useState(0), [k, C] = A.useState(!1), [z, T] = A.useState(!1), [Y, j] = A.useState(!1), Q = A.useRef(null), I = A.useRef(null), R = () => {
    j(!0);
  }, F = () => {
    j(!1), u(!1), m([]);
  }, q = () => {
    j(!1);
  };
  function Z() {
    Q.current && clearTimeout(Q.current), I.current && clearTimeout(I.current), Q.current = setTimeout(() => {
      m((re) => [
        ...re,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: "Por inactividad, esta ventana se cerrará automáticamente en breve. Si deseas continuar, por favor interactúa ahora."
        }
      ]);
    }, V6), I.current = setTimeout(() => {
      u(!1), m([]);
    }, Y6);
  }
  const O = () => {
    Z();
  };
  A.useEffect(() => {
    i && Z();
  }, [i]);
  const ne = async (re) => {
    if (re.preventDefault(), O(), !navigator.onLine) {
      m((le) => [
        ...le,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: "❌ No se pudo enviar tu mensaje porque no hay conexión a Internet. Por favor, verifica tu conexión e inténtalo nuevamente."
        }
      ]);
      return;
    }
    if (c.trim())
      try {
        const le = {
          id: Date.now().toString(),
          role: "user",
          content: c
        };
        h(""), m((oe) => [...oe, le]), y(!0), await B2(c, t).then((oe) => {
          const B = {
            id: Date.now().toString(),
            role: "assistant",
            content: oe || "No se pudo obtener una respuesta válida."
          };
          if (oe === I2) {
            if (b >= 1) {
              const $ = {
                id: Date.now().toString(),
                role: "assistant",
                content: H2
              };
              C(!0), m((G) => [...G, $]), setTimeout(() => {
                u(!1), m([]), C(!1), x(0);
              }, 7e3);
            } else
              m(($) => [...$, B]);
            x(($) => $ + 1);
          } else
            m(($) => [...$, B]);
        });
      } catch {
        m((le) => [
          ...le,
          {
            id: Date.now().toString(),
            role: "assistant",
            content: q2
          }
        ]);
      } finally {
        y(!1);
      }
  }, te = (re) => {
    re.key === "Enter" && (re.preventDefault(), ne(re));
  };
  return /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    /* @__PURE__ */ _.jsx(
      P3,
      {
        cancelText: "Cancelar",
        confirmText: "Continuar",
        description: "Si cierras el chat, la conversación se perderá. ¿Deseas continuar?",
        open: Y,
        onCancel: q,
        onConfirm: F
      }
    ),
    i ? /* @__PURE__ */ _.jsx(
      $v,
      {
        className: `flex z-20 h-screen w-full flex-col overflow-hidden p-5 sm:w-96 ${i ? "slide-in-right" : ""}`,
        children: /* @__PURE__ */ _.jsxs(
          "div",
          {
            className: "card-parent flex h-full w-full flex-col text-card-foreground",
            style: {
              backgroundColor: "#121318",
              color: "#C5C6D0"
            },
            onClick: O,
            children: [
              /* @__PURE__ */ _.jsxs(Wv, { className: "card-header flex flex-row items-center justify-between space-y-0 bg-[#121318] py-2 shadow-[0_10px_20px_rgba(0,_0,_0,_0.2)]", children: [
                /* @__PURE__ */ _.jsxs("div", { className: "flex items-center space-x-2 pl-2", children: [
                  /* @__PURE__ */ _.jsx(G3, {}),
                  /* @__PURE__ */ _.jsx(eb, { className: "card-title text-base font-bold", children: Ho == null ? void 0 : Ho.headerText })
                ] }),
                /* @__PURE__ */ _.jsx($l, { className: "cursor-pointer", size: "icon", variant: "ghost", onClick: () => R(), children: /* @__PURE__ */ _.jsx(O0, { className: "h-5 w-5", color: "#C5C6D0" }) })
              ] }),
              /* @__PURE__ */ _.jsx(tb, { className: "card-content flex flex-1 flex-col overflow-hidden", children: /* @__PURE__ */ _.jsx(yb, { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ _.jsx(q6, { isLoading: g, messages: s, setting: a }) }) }),
              /* @__PURE__ */ _.jsx(nb, { children: /* @__PURE__ */ _.jsxs("form", { className: "flex w-full rounded-lg bg-[#44464F]", onSubmit: ne, children: [
                /* @__PURE__ */ _.jsx(
                  vb,
                  {
                    className: "flex-grow",
                    disabled: g || k,
                    maximized: z,
                    placeholder: "Escribe aquí tu pregunta o interés",
                    rows: 1,
                    value: c,
                    onChange: d,
                    onKeyDown: te
                  }
                ),
                /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col items-center justify-between p-2", children: [
                  /* @__PURE__ */ _.jsx(
                    $l,
                    {
                      size: "icon",
                      type: "button",
                      onClick: () => T(!z),
                      children: z ? /* @__PURE__ */ _.jsx(eE, { className: "h-4 w-4 rotate-45", color: "#171D1E" }) : /* @__PURE__ */ _.jsx(nE, { className: "h-4 w-4 rotate-45", color: "#171D1E" })
                    }
                  ),
                  /* @__PURE__ */ _.jsxs($l, { className: "bg-[#44464F]", size: "icon", type: "submit", children: [
                    /* @__PURE__ */ _.jsx(iE, { className: "h-6 w-6", color: "#B0C6FF" }),
                    /* @__PURE__ */ _.jsx("span", { className: "sr-only", children: "Enviar mensaje" })
                  ] })
                ] })
              ] }) })
            ]
          }
        )
      }
    ) : /* @__PURE__ */ _.jsx(
      $l,
      {
        className: "absolute cursor-pointer bottom-12 right-12 h-16 w-16 rounded-full shadow-[0px_14px_16px_0px_#00000045] shadow-black",
        size: "icon",
        onClick: () => u(!0),
        children: /* @__PURE__ */ _.jsx(ud, { className: "size-16", variant: "dark" })
      }
    )
  ] });
}
class F6 extends HTMLElement {
  constructor() {
    super();
    zc(this, "_root");
    zc(this, "_reactRoot", null);
    this._root = this.attachShadow({ mode: "open" });
    const a = document.createElement("style");
    a.textContent = iS, this._root.appendChild(a);
  }
  static get observedAttributes() {
    return ["companyid", "userName"];
  }
  connectedCallback() {
    this.renderReact();
  }
  attributeChangedCallback() {
    this.renderReact();
  }
  renderReact() {
    const a = this.getAttribute("companyid"), i = this.getAttribute("userName");
    if (!i) {
      console.error("ChatbotWebComponent: 'userName' attribute is required.");
      return;
    }
    if (!a) {
      console.error("ChatbotWebComponent: 'companyid' attribute is required.");
      return;
    }
    this._reactRoot || (this._reactRoot = aS.createRoot(this._root)), this._reactRoot.render(/* @__PURE__ */ _.jsx(P6, { companyid: a, userName: i }));
  }
}
customElements.define("chat-bot", F6);
