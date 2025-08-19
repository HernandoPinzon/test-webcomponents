var aS = Object.defineProperty;
var iS = (t, r, l) => r in t ? aS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[r] = l;
var Ic = (t, r, l) => iS(t, typeof r != "symbol" ? r + "" : r, l);
function oS(t, r) {
  for (var l = 0; l < r.length; l++) {
    const i = r[l];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const s in i)
        if (s !== "default" && !(s in t)) {
          const u = Object.getOwnPropertyDescriptor(i, s);
          u && Object.defineProperty(t, s, u.get ? u : {
            enumerable: !0,
            get: () => i[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
function ll(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Hc = { exports: {} }, ii = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ng;
function sS() {
  if (Ng) return ii;
  Ng = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function l(i, s, u) {
    var c = null;
    if (u !== void 0 && (c = "" + u), s.key !== void 0 && (c = "" + s.key), "key" in s) {
      u = {};
      for (var d in s)
        d !== "key" && (u[d] = s[d]);
    } else u = s;
    return s = u.ref, {
      $$typeof: t,
      type: i,
      key: c,
      ref: s !== void 0 ? s : null,
      props: u
    };
  }
  return ii.Fragment = r, ii.jsx = l, ii.jsxs = l, ii;
}
var Og;
function uS() {
  return Og || (Og = 1, Hc.exports = sS()), Hc.exports;
}
var _ = uS(), qc = { exports: {} }, oi = {}, Vc = { exports: {} }, Pc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mg;
function cS() {
  return Mg || (Mg = 1, function(t) {
    function r(B, W) {
      var G = B.length;
      B.push(W);
      e: for (; 0 < G; ) {
        var ge = G - 1 >>> 1, w = B[ge];
        if (0 < s(w, W))
          B[ge] = W, B[G] = w, G = ge;
        else break e;
      }
    }
    function l(B) {
      return B.length === 0 ? null : B[0];
    }
    function i(B) {
      if (B.length === 0) return null;
      var W = B[0], G = B.pop();
      if (G !== W) {
        B[0] = G;
        e: for (var ge = 0, w = B.length, X = w >>> 1; ge < X; ) {
          var le = 2 * (ge + 1) - 1, k = B[le], se = le + 1, ye = B[se];
          if (0 > s(k, G))
            se < w && 0 > s(ye, k) ? (B[ge] = ye, B[se] = G, ge = se) : (B[ge] = k, B[le] = G, ge = le);
          else if (se < w && 0 > s(ye, G))
            B[ge] = ye, B[se] = G, ge = se;
          else break e;
        }
      }
      return W;
    }
    function s(B, W) {
      var G = B.sortIndex - W.sortIndex;
      return G !== 0 ? G : B.id - W.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      t.unstable_now = function() {
        return u.now();
      };
    } else {
      var c = Date, d = c.now();
      t.unstable_now = function() {
        return c.now() - d;
      };
    }
    var m = [], h = [], y = 1, g = null, b = 3, v = !1, A = !1, C = !1, N = !1, T = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, j = typeof setImmediate < "u" ? setImmediate : null;
    function Q(B) {
      for (var W = l(h); W !== null; ) {
        if (W.callback === null) i(h);
        else if (W.startTime <= B)
          i(h), W.sortIndex = W.expirationTime, r(m, W);
        else break;
        W = l(h);
      }
    }
    function H(B) {
      if (C = !1, Q(B), !A)
        if (l(m) !== null)
          A = !0, R || (R = !0, te());
        else {
          var W = l(h);
          W !== null && ie(H, W.startTime - B);
        }
    }
    var R = !1, F = -1, V = 5, Z = -1;
    function M() {
      return N ? !0 : !(t.unstable_now() - Z < V);
    }
    function re() {
      if (N = !1, R) {
        var B = t.unstable_now();
        Z = B;
        var W = !0;
        try {
          e: {
            A = !1, C && (C = !1, I(F), F = -1), v = !0;
            var G = b;
            try {
              t: {
                for (Q(B), g = l(m); g !== null && !(g.expirationTime > B && M()); ) {
                  var ge = g.callback;
                  if (typeof ge == "function") {
                    g.callback = null, b = g.priorityLevel;
                    var w = ge(
                      g.expirationTime <= B
                    );
                    if (B = t.unstable_now(), typeof w == "function") {
                      g.callback = w, Q(B), W = !0;
                      break t;
                    }
                    g === l(m) && i(m), Q(B);
                  } else i(m);
                  g = l(m);
                }
                if (g !== null) W = !0;
                else {
                  var X = l(h);
                  X !== null && ie(
                    H,
                    X.startTime - B
                  ), W = !1;
                }
              }
              break e;
            } finally {
              g = null, b = G, v = !1;
            }
            W = void 0;
          }
        } finally {
          W ? te() : R = !1;
        }
      }
    }
    var te;
    if (typeof j == "function")
      te = function() {
        j(re);
      };
    else if (typeof MessageChannel < "u") {
      var oe = new MessageChannel(), ne = oe.port2;
      oe.port1.onmessage = re, te = function() {
        ne.postMessage(null);
      };
    } else
      te = function() {
        T(re, 0);
      };
    function ie(B, W) {
      F = T(function() {
        B(t.unstable_now());
      }, W);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, t.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : V = 0 < B ? Math.floor(1e3 / B) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, t.unstable_next = function(B) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = b;
      }
      var G = b;
      b = W;
      try {
        return B();
      } finally {
        b = G;
      }
    }, t.unstable_requestPaint = function() {
      N = !0;
    }, t.unstable_runWithPriority = function(B, W) {
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
        return W();
      } finally {
        b = G;
      }
    }, t.unstable_scheduleCallback = function(B, W, G) {
      var ge = t.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? ge + G : ge) : G = ge, B) {
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
        id: y++,
        callback: W,
        priorityLevel: B,
        startTime: G,
        expirationTime: w,
        sortIndex: -1
      }, G > ge ? (B.sortIndex = G, r(h, B), l(m) === null && B === l(h) && (C ? (I(F), F = -1) : C = !0, ie(H, G - ge))) : (B.sortIndex = w, r(m, B), A || v || (A = !0, R || (R = !0, te()))), B;
    }, t.unstable_shouldYield = M, t.unstable_wrapCallback = function(B) {
      var W = b;
      return function() {
        var G = b;
        b = W;
        try {
          return B.apply(this, arguments);
        } finally {
          b = G;
        }
      };
    };
  }(Pc)), Pc;
}
var zg;
function fS() {
  return zg || (zg = 1, Vc.exports = cS()), Vc.exports;
}
var Yc = { exports: {} }, _e = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lg;
function dS() {
  if (Lg) return _e;
  Lg = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), g = Symbol.iterator;
  function b(w) {
    return w === null || typeof w != "object" ? null : (w = g && w[g] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var v = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, A = Object.assign, C = {};
  function N(w, X, le) {
    this.props = w, this.context = X, this.refs = C, this.updater = le || v;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(w, X) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, w, X, "setState");
  }, N.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function T() {
  }
  T.prototype = N.prototype;
  function I(w, X, le) {
    this.props = w, this.context = X, this.refs = C, this.updater = le || v;
  }
  var j = I.prototype = new T();
  j.constructor = I, A(j, N.prototype), j.isPureReactComponent = !0;
  var Q = Array.isArray, H = { H: null, A: null, T: null, S: null, V: null }, R = Object.prototype.hasOwnProperty;
  function F(w, X, le, k, se, ye) {
    return le = ye.ref, {
      $$typeof: t,
      type: w,
      key: X,
      ref: le !== void 0 ? le : null,
      props: ye
    };
  }
  function V(w, X) {
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
  function M(w) {
    var X = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(le) {
      return X[le];
    });
  }
  var re = /\/+/g;
  function te(w, X) {
    return typeof w == "object" && w !== null && w.key != null ? M("" + w.key) : X.toString(36);
  }
  function oe() {
  }
  function ne(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (typeof w.status == "string" ? w.then(oe, oe) : (w.status = "pending", w.then(
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
  function ie(w, X, le, k, se) {
    var ye = typeof w;
    (ye === "undefined" || ye === "boolean") && (w = null);
    var ue = !1;
    if (w === null) ue = !0;
    else
      switch (ye) {
        case "bigint":
        case "string":
        case "number":
          ue = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case t:
            case r:
              ue = !0;
              break;
            case y:
              return ue = w._init, ie(
                ue(w._payload),
                X,
                le,
                k,
                se
              );
          }
      }
    if (ue)
      return se = se(w), ue = k === "" ? "." + te(w, 0) : k, Q(se) ? (le = "", ue != null && (le = ue.replace(re, "$&/") + "/"), ie(se, X, le, "", function(tt) {
        return tt;
      })) : se != null && (Z(se) && (se = V(
        se,
        le + (se.key == null || w && w.key === se.key ? "" : ("" + se.key).replace(
          re,
          "$&/"
        ) + "/") + ue
      )), X.push(se)), 1;
    ue = 0;
    var ke = k === "" ? "." : k + ":";
    if (Q(w))
      for (var Te = 0; Te < w.length; Te++)
        k = w[Te], ye = ke + te(k, Te), ue += ie(
          k,
          X,
          le,
          ye,
          se
        );
    else if (Te = b(w), typeof Te == "function")
      for (w = Te.call(w), Te = 0; !(k = w.next()).done; )
        k = k.value, ye = ke + te(k, Te++), ue += ie(
          k,
          X,
          le,
          ye,
          se
        );
    else if (ye === "object") {
      if (typeof w.then == "function")
        return ie(
          ne(w),
          X,
          le,
          k,
          se
        );
      throw X = String(w), Error(
        "Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ue;
  }
  function B(w, X, le) {
    if (w == null) return w;
    var k = [], se = 0;
    return ie(w, k, "", "", function(ye) {
      return X.call(le, ye, se++);
    }), k;
  }
  function W(w) {
    if (w._status === -1) {
      var X = w._result;
      X = X(), X.then(
        function(le) {
          (w._status === 0 || w._status === -1) && (w._status = 1, w._result = le);
        },
        function(le) {
          (w._status === 0 || w._status === -1) && (w._status = 2, w._result = le);
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
  function ge() {
  }
  return _e.Children = {
    map: B,
    forEach: function(w, X, le) {
      B(
        w,
        function() {
          X.apply(this, arguments);
        },
        le
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
  }, _e.Component = N, _e.Fragment = l, _e.Profiler = s, _e.PureComponent = I, _e.StrictMode = i, _e.Suspense = m, _e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = H, _e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(w) {
      return H.H.useMemoCache(w);
    }
  }, _e.cache = function(w) {
    return function() {
      return w.apply(null, arguments);
    };
  }, _e.cloneElement = function(w, X, le) {
    if (w == null)
      throw Error(
        "The argument must be a React element, but you passed " + w + "."
      );
    var k = A({}, w.props), se = w.key, ye = void 0;
    if (X != null)
      for (ue in X.ref !== void 0 && (ye = void 0), X.key !== void 0 && (se = "" + X.key), X)
        !R.call(X, ue) || ue === "key" || ue === "__self" || ue === "__source" || ue === "ref" && X.ref === void 0 || (k[ue] = X[ue]);
    var ue = arguments.length - 2;
    if (ue === 1) k.children = le;
    else if (1 < ue) {
      for (var ke = Array(ue), Te = 0; Te < ue; Te++)
        ke[Te] = arguments[Te + 2];
      k.children = ke;
    }
    return F(w.type, se, void 0, void 0, ye, k);
  }, _e.createContext = function(w) {
    return w = {
      $$typeof: c,
      _currentValue: w,
      _currentValue2: w,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, w.Provider = w, w.Consumer = {
      $$typeof: u,
      _context: w
    }, w;
  }, _e.createElement = function(w, X, le) {
    var k, se = {}, ye = null;
    if (X != null)
      for (k in X.key !== void 0 && (ye = "" + X.key), X)
        R.call(X, k) && k !== "key" && k !== "__self" && k !== "__source" && (se[k] = X[k]);
    var ue = arguments.length - 2;
    if (ue === 1) se.children = le;
    else if (1 < ue) {
      for (var ke = Array(ue), Te = 0; Te < ue; Te++)
        ke[Te] = arguments[Te + 2];
      se.children = ke;
    }
    if (w && w.defaultProps)
      for (k in ue = w.defaultProps, ue)
        se[k] === void 0 && (se[k] = ue[k]);
    return F(w, ye, void 0, void 0, null, se);
  }, _e.createRef = function() {
    return { current: null };
  }, _e.forwardRef = function(w) {
    return { $$typeof: d, render: w };
  }, _e.isValidElement = Z, _e.lazy = function(w) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: w },
      _init: W
    };
  }, _e.memo = function(w, X) {
    return {
      $$typeof: h,
      type: w,
      compare: X === void 0 ? null : X
    };
  }, _e.startTransition = function(w) {
    var X = H.T, le = {};
    H.T = le;
    try {
      var k = w(), se = H.S;
      se !== null && se(le, k), typeof k == "object" && k !== null && typeof k.then == "function" && k.then(ge, G);
    } catch (ye) {
      G(ye);
    } finally {
      H.T = X;
    }
  }, _e.unstable_useCacheRefresh = function() {
    return H.H.useCacheRefresh();
  }, _e.use = function(w) {
    return H.H.use(w);
  }, _e.useActionState = function(w, X, le) {
    return H.H.useActionState(w, X, le);
  }, _e.useCallback = function(w, X) {
    return H.H.useCallback(w, X);
  }, _e.useContext = function(w) {
    return H.H.useContext(w);
  }, _e.useDebugValue = function() {
  }, _e.useDeferredValue = function(w, X) {
    return H.H.useDeferredValue(w, X);
  }, _e.useEffect = function(w, X, le) {
    var k = H.H;
    if (typeof le == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return k.useEffect(w, X);
  }, _e.useId = function() {
    return H.H.useId();
  }, _e.useImperativeHandle = function(w, X, le) {
    return H.H.useImperativeHandle(w, X, le);
  }, _e.useInsertionEffect = function(w, X) {
    return H.H.useInsertionEffect(w, X);
  }, _e.useLayoutEffect = function(w, X) {
    return H.H.useLayoutEffect(w, X);
  }, _e.useMemo = function(w, X) {
    return H.H.useMemo(w, X);
  }, _e.useOptimistic = function(w, X) {
    return H.H.useOptimistic(w, X);
  }, _e.useReducer = function(w, X, le) {
    return H.H.useReducer(w, X, le);
  }, _e.useRef = function(w) {
    return H.H.useRef(w);
  }, _e.useState = function(w) {
    return H.H.useState(w);
  }, _e.useSyncExternalStore = function(w, X, le) {
    return H.H.useSyncExternalStore(
      w,
      X,
      le
    );
  }, _e.useTransition = function() {
    return H.H.useTransition();
  }, _e.version = "19.1.0", _e;
}
var jg;
function ps() {
  return jg || (jg = 1, Yc.exports = dS()), Yc.exports;
}
var Fc = { exports: {} }, Nt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ug;
function hS() {
  if (Ug) return Nt;
  Ug = 1;
  var t = ps();
  function r(m) {
    var h = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        h += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + m + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l() {
  }
  var i = {
    d: {
      f: l,
      r: function() {
        throw Error(r(522));
      },
      D: l,
      C: l,
      L: l,
      m: l,
      X: l,
      S: l,
      M: l
    },
    p: 0,
    findDOMNode: null
  }, s = Symbol.for("react.portal");
  function u(m, h, y) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: g == null ? null : "" + g,
      children: m,
      containerInfo: h,
      implementation: y
    };
  }
  var c = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(m, h) {
    if (m === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, Nt.createPortal = function(m, h) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(r(299));
    return u(m, h, null, y);
  }, Nt.flushSync = function(m) {
    var h = c.T, y = i.p;
    try {
      if (c.T = null, i.p = 2, m) return m();
    } finally {
      c.T = h, i.p = y, i.d.f();
    }
  }, Nt.preconnect = function(m, h) {
    typeof m == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, i.d.C(m, h));
  }, Nt.prefetchDNS = function(m) {
    typeof m == "string" && i.d.D(m);
  }, Nt.preinit = function(m, h) {
    if (typeof m == "string" && h && typeof h.as == "string") {
      var y = h.as, g = d(y, h.crossOrigin), b = typeof h.integrity == "string" ? h.integrity : void 0, v = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      y === "style" ? i.d.S(
        m,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: g,
          integrity: b,
          fetchPriority: v
        }
      ) : y === "script" && i.d.X(m, {
        crossOrigin: g,
        integrity: b,
        fetchPriority: v,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, Nt.preinitModule = function(m, h) {
    if (typeof m == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var y = d(
            h.as,
            h.crossOrigin
          );
          i.d.M(m, {
            crossOrigin: y,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && i.d.M(m);
  }, Nt.preload = function(m, h) {
    if (typeof m == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var y = h.as, g = d(y, h.crossOrigin);
      i.d.L(m, y, {
        crossOrigin: g,
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
  }, Nt.preloadModule = function(m, h) {
    if (typeof m == "string")
      if (h) {
        var y = d(h.as, h.crossOrigin);
        i.d.m(m, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: y,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else i.d.m(m);
  }, Nt.requestFormReset = function(m) {
    i.d.r(m);
  }, Nt.unstable_batchedUpdates = function(m, h) {
    return m(h);
  }, Nt.useFormState = function(m, h, y) {
    return c.H.useFormState(m, h, y);
  }, Nt.useFormStatus = function() {
    return c.H.useHostTransitionStatus();
  }, Nt.version = "19.1.0", Nt;
}
var Bg;
function p0() {
  if (Bg) return Fc.exports;
  Bg = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Fc.exports = hS(), Fc.exports;
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
var Ig;
function pS() {
  if (Ig) return oi;
  Ig = 1;
  var t = fS(), r = ps(), l = p0();
  function i(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        n += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function u(e) {
    var n = e, a = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, (n.flags & 4098) !== 0 && (a = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? a : null;
  }
  function c(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function d(e) {
    if (u(e) !== e)
      throw Error(i(188));
  }
  function m(e) {
    var n = e.alternate;
    if (!n) {
      if (n = u(e), n === null) throw Error(i(188));
      return n !== e ? null : e;
    }
    for (var a = e, o = n; ; ) {
      var f = a.return;
      if (f === null) break;
      var p = f.alternate;
      if (p === null) {
        if (o = f.return, o !== null) {
          a = o;
          continue;
        }
        break;
      }
      if (f.child === p.child) {
        for (p = f.child; p; ) {
          if (p === a) return d(f), e;
          if (p === o) return d(f), n;
          p = p.sibling;
        }
        throw Error(i(188));
      }
      if (a.return !== o.return) a = f, o = p;
      else {
        for (var x = !1, S = f.child; S; ) {
          if (S === a) {
            x = !0, a = f, o = p;
            break;
          }
          if (S === o) {
            x = !0, o = f, a = p;
            break;
          }
          S = S.sibling;
        }
        if (!x) {
          for (S = p.child; S; ) {
            if (S === a) {
              x = !0, a = p, o = f;
              break;
            }
            if (S === o) {
              x = !0, o = p, a = f;
              break;
            }
            S = S.sibling;
          }
          if (!x) throw Error(i(189));
        }
      }
      if (a.alternate !== o) throw Error(i(190));
    }
    if (a.tag !== 3) throw Error(i(188));
    return a.stateNode.current === a ? e : n;
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
  var y = Object.assign, g = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), I = Symbol.for("react.consumer"), j = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), M = Symbol.for("react.memo_cache_sentinel"), re = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object" ? null : (e = re && e[re] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var oe = Symbol.for("react.client.reference");
  function ne(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === oe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case A:
        return "Fragment";
      case N:
        return "Profiler";
      case C:
        return "StrictMode";
      case H:
        return "Suspense";
      case R:
        return "SuspenseList";
      case Z:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case v:
          return "Portal";
        case j:
          return (e.displayName || "Context") + ".Provider";
        case I:
          return (e._context.displayName || "Context") + ".Consumer";
        case Q:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case F:
          return n = e.displayName || null, n !== null ? n : ne(e.type) || "Memo";
        case V:
          n = e._payload, e = e._init;
          try {
            return ne(e(n));
          } catch {
          }
      }
    return null;
  }
  var ie = Array.isArray, B = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ge = [], w = -1;
  function X(e) {
    return { current: e };
  }
  function le(e) {
    0 > w || (e.current = ge[w], ge[w] = null, w--);
  }
  function k(e, n) {
    w++, ge[w] = e.current, e.current = n;
  }
  var se = X(null), ye = X(null), ue = X(null), ke = X(null);
  function Te(e, n) {
    switch (k(ue, n), k(ye, e), k(se, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? ag(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = ag(n), e = ig(n, e);
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
    le(se), k(se, e);
  }
  function tt() {
    le(se), le(ye), le(ue);
  }
  function rt(e) {
    e.memoizedState !== null && k(ke, e);
    var n = se.current, a = ig(n, e.type);
    n !== a && (k(ye, e), k(se, a));
  }
  function bt(e) {
    ye.current === e && (le(se), le(ye)), ke.current === e && (le(ke), ti._currentValue = G);
  }
  var Ce = Object.prototype.hasOwnProperty, Se = t.unstable_scheduleCallback, ve = t.unstable_cancelCallback, Me = t.unstable_shouldYield, Ae = t.unstable_requestPaint, Ve = t.unstable_now, kt = t.unstable_getCurrentPriorityLevel, Fe = t.unstable_ImmediatePriority, Ye = t.unstable_UserBlockingPriority, ct = t.unstable_NormalPriority, tr = t.unstable_LowPriority, Mn = t.unstable_IdlePriority, nr = t.log, pt = t.unstable_setDisableYieldValue, Y = null, ee = null;
  function he(e) {
    if (typeof nr == "function" && pt(e), ee && typeof ee.setStrictMode == "function")
      try {
        ee.setStrictMode(Y, e);
      } catch {
      }
  }
  var me = Math.clz32 ? Math.clz32 : tn, He = Math.log, _t = Math.LN2;
  function tn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (He(e) / _t | 0) | 0;
  }
  var Ut = 256, Sn = 4194304;
  function Ft(e) {
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
  function vt(e, n, a) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var f = 0, p = e.suspendedLanes, x = e.pingedLanes;
    e = e.warmLanes;
    var S = o & 134217727;
    return S !== 0 ? (o = S & ~p, o !== 0 ? f = Ft(o) : (x &= S, x !== 0 ? f = Ft(x) : a || (a = S & ~e, a !== 0 && (f = Ft(a))))) : (S = o & ~p, S !== 0 ? f = Ft(S) : x !== 0 ? f = Ft(x) : a || (a = o & ~e, a !== 0 && (f = Ft(a)))), f === 0 ? 0 : n !== 0 && n !== f && (n & p) === 0 && (p = f & -f, a = n & -n, p >= a || p === 32 && (a & 4194048) !== 0) ? n : f;
  }
  function nn(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function gn(e, n) {
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
  function Vd() {
    var e = Ut;
    return Ut <<= 1, (Ut & 4194048) === 0 && (Ut = 256), e;
  }
  function Pd() {
    var e = Sn;
    return Sn <<= 1, (Sn & 62914560) === 0 && (Sn = 4194304), e;
  }
  function _s(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function fa(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function X1(e, n, a, o, f, p) {
    var x = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var S = e.entanglements, D = e.expirationTimes, U = e.hiddenUpdates;
    for (a = x & ~a; 0 < a; ) {
      var K = 31 - me(a), $ = 1 << K;
      S[K] = 0, D[K] = -1;
      var q = U[K];
      if (q !== null)
        for (U[K] = null, K = 0; K < q.length; K++) {
          var P = q[K];
          P !== null && (P.lane &= -536870913);
        }
      a &= ~$;
    }
    o !== 0 && Yd(e, o, 0), p !== 0 && f === 0 && e.tag !== 0 && (e.suspendedLanes |= p & ~(x & ~n));
  }
  function Yd(e, n, a) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var o = 31 - me(n);
    e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | a & 4194090;
  }
  function Fd(e, n) {
    var a = e.entangledLanes |= n;
    for (e = e.entanglements; a; ) {
      var o = 31 - me(a), f = 1 << o;
      f & n | e[o] & n && (e[o] |= n), a &= ~f;
    }
  }
  function Rs(e) {
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
  function Ds(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Gd() {
    var e = W.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Cg(e.type));
  }
  function Q1(e, n) {
    var a = W.p;
    try {
      return W.p = e, n();
    } finally {
      W.p = a;
    }
  }
  var rr = Math.random().toString(36).slice(2), Rt = "__reactFiber$" + rr, Bt = "__reactProps$" + rr, ol = "__reactContainer$" + rr, Ns = "__reactEvents$" + rr, Z1 = "__reactListeners$" + rr, K1 = "__reactHandles$" + rr, Xd = "__reactResources$" + rr, da = "__reactMarker$" + rr;
  function Os(e) {
    delete e[Rt], delete e[Bt], delete e[Ns], delete e[Z1], delete e[K1];
  }
  function sl(e) {
    var n = e[Rt];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if (n = a[ol] || a[Rt]) {
        if (a = n.alternate, n.child !== null || a !== null && a.child !== null)
          for (e = cg(e); e !== null; ) {
            if (a = e[Rt]) return a;
            e = cg(e);
          }
        return n;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function ul(e) {
    if (e = e[Rt] || e[ol]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function ha(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(i(33));
  }
  function cl(e) {
    var n = e[Xd];
    return n || (n = e[Xd] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function xt(e) {
    e[da] = !0;
  }
  var Qd = /* @__PURE__ */ new Set(), Zd = {};
  function zr(e, n) {
    fl(e, n), fl(e + "Capture", n);
  }
  function fl(e, n) {
    for (Zd[e] = n, e = 0; e < n.length; e++)
      Qd.add(n[e]);
  }
  var J1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Kd = {}, Jd = {};
  function $1(e) {
    return Ce.call(Jd, e) ? !0 : Ce.call(Kd, e) ? !1 : J1.test(e) ? Jd[e] = !0 : (Kd[e] = !0, !1);
  }
  function Di(e, n, a) {
    if ($1(n))
      if (a === null) e.removeAttribute(n);
      else {
        switch (typeof a) {
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
        e.setAttribute(n, "" + a);
      }
  }
  function Ni(e, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + a);
    }
  }
  function zn(e, n, a, o) {
    if (o === null) e.removeAttribute(a);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(n, a, "" + o);
    }
  }
  var Ms, $d;
  function dl(e) {
    if (Ms === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        Ms = n && n[1] || "", $d = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ms + e + $d;
  }
  var zs = !1;
  function Ls(e, n) {
    if (!e || zs) return "";
    zs = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var $ = function() {
                throw Error();
              };
              if (Object.defineProperty($.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct($, []);
                } catch (P) {
                  var q = P;
                }
                Reflect.construct(e, [], $);
              } else {
                try {
                  $.call();
                } catch (P) {
                  q = P;
                }
                e.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (P) {
                q = P;
              }
              ($ = e()) && typeof $.catch == "function" && $.catch(function() {
              });
            }
          } catch (P) {
            if (P && q && typeof P.stack == "string")
              return [P.stack, q.stack];
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
      var p = o.DetermineComponentFrameRoot(), x = p[0], S = p[1];
      if (x && S) {
        var D = x.split(`
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
      zs = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? dl(a) : "";
  }
  function W1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return dl(e.type);
      case 16:
        return dl("Lazy");
      case 13:
        return dl("Suspense");
      case 19:
        return dl("SuspenseList");
      case 0:
      case 15:
        return Ls(e.type, !1);
      case 11:
        return Ls(e.type.render, !1);
      case 1:
        return Ls(e.type, !0);
      case 31:
        return dl("Activity");
      default:
        return "";
    }
  }
  function Wd(e) {
    try {
      var n = "";
      do
        n += W1(e), e = e.return;
      while (e);
      return n;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function rn(e) {
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
  function eh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function ex(e) {
    var n = eh(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    ), o = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var f = a.get, p = a.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return f.call(this);
        },
        set: function(x) {
          o = "" + x, p.call(this, x);
        }
      }), Object.defineProperty(e, n, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(x) {
          o = "" + x;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function Oi(e) {
    e._valueTracker || (e._valueTracker = ex(e));
  }
  function th(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var a = n.getValue(), o = "";
    return e && (o = eh(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== a ? (n.setValue(e), !0) : !1;
  }
  function Mi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var tx = /[\n"\\]/g;
  function ln(e) {
    return e.replace(
      tx,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function js(e, n, a, o, f, p, x, S) {
    e.name = "", x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? e.type = x : e.removeAttribute("type"), n != null ? x === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + rn(n)) : e.value !== "" + rn(n) && (e.value = "" + rn(n)) : x !== "submit" && x !== "reset" || e.removeAttribute("value"), n != null ? Us(e, x, rn(n)) : a != null ? Us(e, x, rn(a)) : o != null && e.removeAttribute("value"), f == null && p != null && (e.defaultChecked = !!p), f != null && (e.checked = f && typeof f != "function" && typeof f != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? e.name = "" + rn(S) : e.removeAttribute("name");
  }
  function nh(e, n, a, o, f, p, x, S) {
    if (p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.type = p), n != null || a != null) {
      if (!(p !== "submit" && p !== "reset" || n != null))
        return;
      a = a != null ? "" + rn(a) : "", n = n != null ? "" + rn(n) : a, S || n === e.value || (e.value = n), e.defaultValue = n;
    }
    o = o ?? f, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = S ? e.checked : !!o, e.defaultChecked = !!o, x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" && (e.name = x);
  }
  function Us(e, n, a) {
    n === "number" && Mi(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function hl(e, n, a, o) {
    if (e = e.options, n) {
      n = {};
      for (var f = 0; f < a.length; f++)
        n["$" + a[f]] = !0;
      for (a = 0; a < e.length; a++)
        f = n.hasOwnProperty("$" + e[a].value), e[a].selected !== f && (e[a].selected = f), f && o && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + rn(a), n = null, f = 0; f < e.length; f++) {
        if (e[f].value === a) {
          e[f].selected = !0, o && (e[f].defaultSelected = !0);
          return;
        }
        n !== null || e[f].disabled || (n = e[f]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function rh(e, n, a) {
    if (n != null && (n = "" + rn(n), n !== e.value && (e.value = n), a == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = a != null ? "" + rn(a) : "";
  }
  function lh(e, n, a, o) {
    if (n == null) {
      if (o != null) {
        if (a != null) throw Error(i(92));
        if (ie(o)) {
          if (1 < o.length) throw Error(i(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ""), n = a;
    }
    a = rn(n), e.defaultValue = a, o = e.textContent, o === a && o !== "" && o !== null && (e.value = o);
  }
  function pl(e, n) {
    if (n) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var nx = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ah(e, n, a) {
    var o = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? o ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : o ? e.setProperty(n, a) : typeof a != "number" || a === 0 || nx.has(n) ? n === "float" ? e.cssFloat = a : e[n] = ("" + a).trim() : e[n] = a + "px";
  }
  function ih(e, n, a) {
    if (n != null && typeof n != "object")
      throw Error(i(62));
    if (e = e.style, a != null) {
      for (var o in a)
        !a.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var f in n)
        o = n[f], n.hasOwnProperty(f) && a[f] !== o && ah(e, f, o);
    } else
      for (var p in n)
        n.hasOwnProperty(p) && ah(e, p, n[p]);
  }
  function Bs(e) {
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
  var rx = /* @__PURE__ */ new Map([
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
  ]), lx = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function zi(e) {
    return lx.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Is = null;
  function Hs(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ml = null, gl = null;
  function oh(e) {
    var n = ul(e);
    if (n && (e = n.stateNode)) {
      var a = e[Bt] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (js(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), n = a.name, a.type === "radio" && n != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + ln(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < a.length; n++) {
              var o = a[n];
              if (o !== e && o.form === e.form) {
                var f = o[Bt] || null;
                if (!f) throw Error(i(90));
                js(
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
            for (n = 0; n < a.length; n++)
              o = a[n], o.form === e.form && th(o);
          }
          break e;
        case "textarea":
          rh(e, a.value, a.defaultValue);
          break e;
        case "select":
          n = a.value, n != null && hl(e, !!a.multiple, n, !1);
      }
    }
  }
  var qs = !1;
  function sh(e, n, a) {
    if (qs) return e(n, a);
    qs = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (qs = !1, (ml !== null || gl !== null) && (xo(), ml && (n = ml, e = gl, gl = ml = null, oh(n), e)))
        for (n = 0; n < e.length; n++) oh(e[n]);
    }
  }
  function pa(e, n) {
    var a = e.stateNode;
    if (a === null) return null;
    var o = a[Bt] || null;
    if (o === null) return null;
    a = o[n];
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
    if (a && typeof a != "function")
      throw Error(
        i(231, n, typeof a)
      );
    return a;
  }
  var Ln = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Vs = !1;
  if (Ln)
    try {
      var ma = {};
      Object.defineProperty(ma, "passive", {
        get: function() {
          Vs = !0;
        }
      }), window.addEventListener("test", ma, ma), window.removeEventListener("test", ma, ma);
    } catch {
      Vs = !1;
    }
  var lr = null, Ps = null, Li = null;
  function uh() {
    if (Li) return Li;
    var e, n = Ps, a = n.length, o, f = "value" in lr ? lr.value : lr.textContent, p = f.length;
    for (e = 0; e < a && n[e] === f[e]; e++) ;
    var x = a - e;
    for (o = 1; o <= x && n[a - o] === f[p - o]; o++) ;
    return Li = f.slice(e, 1 < o ? 1 - o : void 0);
  }
  function ji(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ui() {
    return !0;
  }
  function ch() {
    return !1;
  }
  function It(e) {
    function n(a, o, f, p, x) {
      this._reactName = a, this._targetInst = f, this.type = o, this.nativeEvent = p, this.target = x, this.currentTarget = null;
      for (var S in e)
        e.hasOwnProperty(S) && (a = e[S], this[S] = a ? a(p) : p[S]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? Ui : ch, this.isPropagationStopped = ch, this;
    }
    return y(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ui);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ui);
      },
      persist: function() {
      },
      isPersistent: Ui
    }), n;
  }
  var Lr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Bi = It(Lr), ga = y({}, Lr, { view: 0, detail: 0 }), ax = It(ga), Ys, Fs, ya, Ii = y({}, ga, {
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
    getModifierState: Xs,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ya && (ya && e.type === "mousemove" ? (Ys = e.screenX - ya.screenX, Fs = e.screenY - ya.screenY) : Fs = Ys = 0, ya = e), Ys);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Fs;
    }
  }), fh = It(Ii), ix = y({}, Ii, { dataTransfer: 0 }), ox = It(ix), sx = y({}, ga, { relatedTarget: 0 }), Gs = It(sx), ux = y({}, Lr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), cx = It(ux), fx = y({}, Lr, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), dx = It(fx), hx = y({}, Lr, { data: 0 }), dh = It(hx), px = {
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
  }, mx = {
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
  }, gx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function yx(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = gx[e]) ? !!n[e] : !1;
  }
  function Xs() {
    return yx;
  }
  var bx = y({}, ga, {
    key: function(e) {
      if (e.key) {
        var n = px[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = ji(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? mx[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Xs,
    charCode: function(e) {
      return e.type === "keypress" ? ji(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? ji(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), vx = It(bx), xx = y({}, Ii, {
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
  }), hh = It(xx), wx = y({}, ga, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xs
  }), Sx = It(wx), Ex = y({}, Lr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), kx = It(Ex), Cx = y({}, Ii, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ax = It(Cx), Tx = y({}, Lr, {
    newState: 0,
    oldState: 0
  }), _x = It(Tx), Rx = [9, 13, 27, 32], Qs = Ln && "CompositionEvent" in window, ba = null;
  Ln && "documentMode" in document && (ba = document.documentMode);
  var Dx = Ln && "TextEvent" in window && !ba, ph = Ln && (!Qs || ba && 8 < ba && 11 >= ba), mh = " ", gh = !1;
  function yh(e, n) {
    switch (e) {
      case "keyup":
        return Rx.indexOf(n.keyCode) !== -1;
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
  function bh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var yl = !1;
  function Nx(e, n) {
    switch (e) {
      case "compositionend":
        return bh(n);
      case "keypress":
        return n.which !== 32 ? null : (gh = !0, mh);
      case "textInput":
        return e = n.data, e === mh && gh ? null : e;
      default:
        return null;
    }
  }
  function Ox(e, n) {
    if (yl)
      return e === "compositionend" || !Qs && yh(e, n) ? (e = uh(), Li = Ps = lr = null, yl = !1, e) : null;
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
        return ph && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Mx = {
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
  function vh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Mx[e.type] : n === "textarea";
  }
  function xh(e, n, a, o) {
    ml ? gl ? gl.push(o) : gl = [o] : ml = o, n = Ao(n, "onChange"), 0 < n.length && (a = new Bi(
      "onChange",
      "change",
      null,
      a,
      o
    ), e.push({ event: a, listeners: n }));
  }
  var va = null, xa = null;
  function zx(e) {
    eg(e, 0);
  }
  function Hi(e) {
    var n = ha(e);
    if (th(n)) return e;
  }
  function wh(e, n) {
    if (e === "change") return n;
  }
  var Sh = !1;
  if (Ln) {
    var Zs;
    if (Ln) {
      var Ks = "oninput" in document;
      if (!Ks) {
        var Eh = document.createElement("div");
        Eh.setAttribute("oninput", "return;"), Ks = typeof Eh.oninput == "function";
      }
      Zs = Ks;
    } else Zs = !1;
    Sh = Zs && (!document.documentMode || 9 < document.documentMode);
  }
  function kh() {
    va && (va.detachEvent("onpropertychange", Ch), xa = va = null);
  }
  function Ch(e) {
    if (e.propertyName === "value" && Hi(xa)) {
      var n = [];
      xh(
        n,
        xa,
        e,
        Hs(e)
      ), sh(zx, n);
    }
  }
  function Lx(e, n, a) {
    e === "focusin" ? (kh(), va = n, xa = a, va.attachEvent("onpropertychange", Ch)) : e === "focusout" && kh();
  }
  function jx(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Hi(xa);
  }
  function Ux(e, n) {
    if (e === "click") return Hi(n);
  }
  function Bx(e, n) {
    if (e === "input" || e === "change")
      return Hi(n);
  }
  function Ix(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var Gt = typeof Object.is == "function" ? Object.is : Ix;
  function wa(e, n) {
    if (Gt(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var a = Object.keys(e), o = Object.keys(n);
    if (a.length !== o.length) return !1;
    for (o = 0; o < a.length; o++) {
      var f = a[o];
      if (!Ce.call(n, f) || !Gt(e[f], n[f]))
        return !1;
    }
    return !0;
  }
  function Ah(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Th(e, n) {
    var a = Ah(e);
    e = 0;
    for (var o; a; ) {
      if (a.nodeType === 3) {
        if (o = e + a.textContent.length, e <= n && o >= n)
          return { node: a, offset: n - e };
        e = o;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Ah(a);
    }
  }
  function _h(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? _h(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Rh(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = Mi(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = n.contentWindow;
      else break;
      n = Mi(e.document);
    }
    return n;
  }
  function Js(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var Hx = Ln && "documentMode" in document && 11 >= document.documentMode, bl = null, $s = null, Sa = null, Ws = !1;
  function Dh(e, n, a) {
    var o = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Ws || bl == null || bl !== Mi(o) || (o = bl, "selectionStart" in o && Js(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Sa && wa(Sa, o) || (Sa = o, o = Ao($s, "onSelect"), 0 < o.length && (n = new Bi(
      "onSelect",
      "select",
      null,
      n,
      a
    ), e.push({ event: n, listeners: o }), n.target = bl)));
  }
  function jr(e, n) {
    var a = {};
    return a[e.toLowerCase()] = n.toLowerCase(), a["Webkit" + e] = "webkit" + n, a["Moz" + e] = "moz" + n, a;
  }
  var vl = {
    animationend: jr("Animation", "AnimationEnd"),
    animationiteration: jr("Animation", "AnimationIteration"),
    animationstart: jr("Animation", "AnimationStart"),
    transitionrun: jr("Transition", "TransitionRun"),
    transitionstart: jr("Transition", "TransitionStart"),
    transitioncancel: jr("Transition", "TransitionCancel"),
    transitionend: jr("Transition", "TransitionEnd")
  }, eu = {}, Nh = {};
  Ln && (Nh = document.createElement("div").style, "AnimationEvent" in window || (delete vl.animationend.animation, delete vl.animationiteration.animation, delete vl.animationstart.animation), "TransitionEvent" in window || delete vl.transitionend.transition);
  function Ur(e) {
    if (eu[e]) return eu[e];
    if (!vl[e]) return e;
    var n = vl[e], a;
    for (a in n)
      if (n.hasOwnProperty(a) && a in Nh)
        return eu[e] = n[a];
    return e;
  }
  var Oh = Ur("animationend"), Mh = Ur("animationiteration"), zh = Ur("animationstart"), qx = Ur("transitionrun"), Vx = Ur("transitionstart"), Px = Ur("transitioncancel"), Lh = Ur("transitionend"), jh = /* @__PURE__ */ new Map(), tu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  tu.push("scrollEnd");
  function yn(e, n) {
    jh.set(e, n), zr(n, [e]);
  }
  var Uh = /* @__PURE__ */ new WeakMap();
  function an(e, n) {
    if (typeof e == "object" && e !== null) {
      var a = Uh.get(e);
      return a !== void 0 ? a : (n = {
        value: e,
        source: n,
        stack: Wd(n)
      }, Uh.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: Wd(n)
    };
  }
  var on = [], xl = 0, nu = 0;
  function qi() {
    for (var e = xl, n = nu = xl = 0; n < e; ) {
      var a = on[n];
      on[n++] = null;
      var o = on[n];
      on[n++] = null;
      var f = on[n];
      on[n++] = null;
      var p = on[n];
      if (on[n++] = null, o !== null && f !== null) {
        var x = o.pending;
        x === null ? f.next = f : (f.next = x.next, x.next = f), o.pending = f;
      }
      p !== 0 && Bh(a, f, p);
    }
  }
  function Vi(e, n, a, o) {
    on[xl++] = e, on[xl++] = n, on[xl++] = a, on[xl++] = o, nu |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function ru(e, n, a, o) {
    return Vi(e, n, a, o), Pi(e);
  }
  function wl(e, n) {
    return Vi(e, null, null, n), Pi(e);
  }
  function Bh(e, n, a) {
    e.lanes |= a;
    var o = e.alternate;
    o !== null && (o.lanes |= a);
    for (var f = !1, p = e.return; p !== null; )
      p.childLanes |= a, o = p.alternate, o !== null && (o.childLanes |= a), p.tag === 22 && (e = p.stateNode, e === null || e._visibility & 1 || (f = !0)), e = p, p = p.return;
    return e.tag === 3 ? (p = e.stateNode, f && n !== null && (f = 31 - me(a), e = p.hiddenUpdates, o = e[f], o === null ? e[f] = [n] : o.push(n), n.lane = a | 536870912), p) : null;
  }
  function Pi(e) {
    if (50 < Xa)
      throw Xa = 0, uc = null, Error(i(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Sl = {};
  function Yx(e, n, a, o) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Xt(e, n, a, o) {
    return new Yx(e, n, a, o);
  }
  function lu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function jn(e, n) {
    var a = e.alternate;
    return a === null ? (a = Xt(
      e.tag,
      n,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = n, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, n = e.dependencies, a.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function Ih(e, n) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, n = a.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function Yi(e, n, a, o, f, p) {
    var x = 0;
    if (o = e, typeof e == "function") lu(e) && (x = 1);
    else if (typeof e == "string")
      x = Gw(
        e,
        a,
        se.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Z:
          return e = Xt(31, a, n, f), e.elementType = Z, e.lanes = p, e;
        case A:
          return Br(a.children, f, p, n);
        case C:
          x = 8, f |= 24;
          break;
        case N:
          return e = Xt(12, a, n, f | 2), e.elementType = N, e.lanes = p, e;
        case H:
          return e = Xt(13, a, n, f), e.elementType = H, e.lanes = p, e;
        case R:
          return e = Xt(19, a, n, f), e.elementType = R, e.lanes = p, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case T:
              case j:
                x = 10;
                break e;
              case I:
                x = 9;
                break e;
              case Q:
                x = 11;
                break e;
              case F:
                x = 14;
                break e;
              case V:
                x = 16, o = null;
                break e;
            }
          x = 29, a = Error(
            i(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return n = Xt(x, a, n, f), n.elementType = e, n.type = o, n.lanes = p, n;
  }
  function Br(e, n, a, o) {
    return e = Xt(7, e, o, n), e.lanes = a, e;
  }
  function au(e, n, a) {
    return e = Xt(6, e, null, n), e.lanes = a, e;
  }
  function iu(e, n, a) {
    return n = Xt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      n
    ), n.lanes = a, n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, n;
  }
  var El = [], kl = 0, Fi = null, Gi = 0, sn = [], un = 0, Ir = null, Un = 1, Bn = "";
  function Hr(e, n) {
    El[kl++] = Gi, El[kl++] = Fi, Fi = e, Gi = n;
  }
  function Hh(e, n, a) {
    sn[un++] = Un, sn[un++] = Bn, sn[un++] = Ir, Ir = e;
    var o = Un;
    e = Bn;
    var f = 32 - me(o) - 1;
    o &= ~(1 << f), a += 1;
    var p = 32 - me(n) + f;
    if (30 < p) {
      var x = f - f % 5;
      p = (o & (1 << x) - 1).toString(32), o >>= x, f -= x, Un = 1 << 32 - me(n) + f | a << f | o, Bn = p + e;
    } else
      Un = 1 << p | a << f | o, Bn = e;
  }
  function ou(e) {
    e.return !== null && (Hr(e, 1), Hh(e, 1, 0));
  }
  function su(e) {
    for (; e === Fi; )
      Fi = El[--kl], El[kl] = null, Gi = El[--kl], El[kl] = null;
    for (; e === Ir; )
      Ir = sn[--un], sn[un] = null, Bn = sn[--un], sn[un] = null, Un = sn[--un], sn[un] = null;
  }
  var zt = null, it = null, Pe = !1, qr = null, En = !1, uu = Error(i(519));
  function Vr(e) {
    var n = Error(i(418, ""));
    throw Ca(an(n, e)), uu;
  }
  function qh(e) {
    var n = e.stateNode, a = e.type, o = e.memoizedProps;
    switch (n[Rt] = e, n[Bt] = o, a) {
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
        for (a = 0; a < Za.length; a++)
          Le(Za[a], n);
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
        Le("invalid", n), nh(
          n,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), Oi(n);
        break;
      case "select":
        Le("invalid", n);
        break;
      case "textarea":
        Le("invalid", n), lh(n, o.value, o.defaultValue, o.children), Oi(n);
    }
    a = o.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || o.suppressHydrationWarning === !0 || lg(n.textContent, a) ? (o.popover != null && (Le("beforetoggle", n), Le("toggle", n)), o.onScroll != null && Le("scroll", n), o.onScrollEnd != null && Le("scrollend", n), o.onClick != null && (n.onclick = To), n = !0) : n = !1, n || Vr(e);
  }
  function Vh(e) {
    for (zt = e.return; zt; )
      switch (zt.tag) {
        case 5:
        case 13:
          En = !1;
          return;
        case 27:
        case 3:
          En = !0;
          return;
        default:
          zt = zt.return;
      }
  }
  function Ea(e) {
    if (e !== zt) return !1;
    if (!Pe) return Vh(e), Pe = !0, !1;
    var n = e.tag, a;
    if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Cc(e.type, e.memoizedProps)), a = !a), a && it && Vr(e), Vh(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (n === 0) {
                it = vn(e.nextSibling);
                break e;
              }
              n--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || n++;
          e = e.nextSibling;
        }
        it = null;
      }
    } else
      n === 27 ? (n = it, xr(e.type) ? (e = Rc, Rc = null, it = e) : it = n) : it = zt ? vn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ka() {
    it = zt = null, Pe = !1;
  }
  function Ph() {
    var e = qr;
    return e !== null && (Vt === null ? Vt = e : Vt.push.apply(
      Vt,
      e
    ), qr = null), e;
  }
  function Ca(e) {
    qr === null ? qr = [e] : qr.push(e);
  }
  var cu = X(null), Pr = null, In = null;
  function ar(e, n, a) {
    k(cu, n._currentValue), n._currentValue = a;
  }
  function Hn(e) {
    e._currentValue = cu.current, le(cu);
  }
  function fu(e, n, a) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), e === a) break;
      e = e.return;
    }
  }
  function du(e, n, a, o) {
    var f = e.child;
    for (f !== null && (f.return = e); f !== null; ) {
      var p = f.dependencies;
      if (p !== null) {
        var x = f.child;
        p = p.firstContext;
        e: for (; p !== null; ) {
          var S = p;
          p = f;
          for (var D = 0; D < n.length; D++)
            if (S.context === n[D]) {
              p.lanes |= a, S = p.alternate, S !== null && (S.lanes |= a), fu(
                p.return,
                a,
                e
              ), o || (x = null);
              break e;
            }
          p = S.next;
        }
      } else if (f.tag === 18) {
        if (x = f.return, x === null) throw Error(i(341));
        x.lanes |= a, p = x.alternate, p !== null && (p.lanes |= a), fu(x, a, e), x = null;
      } else x = f.child;
      if (x !== null) x.return = f;
      else
        for (x = f; x !== null; ) {
          if (x === e) {
            x = null;
            break;
          }
          if (f = x.sibling, f !== null) {
            f.return = x.return, x = f;
            break;
          }
          x = x.return;
        }
      f = x;
    }
  }
  function Aa(e, n, a, o) {
    e = null;
    for (var f = n, p = !1; f !== null; ) {
      if (!p) {
        if ((f.flags & 524288) !== 0) p = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var x = f.alternate;
        if (x === null) throw Error(i(387));
        if (x = x.memoizedProps, x !== null) {
          var S = f.type;
          Gt(f.pendingProps.value, x.value) || (e !== null ? e.push(S) : e = [S]);
        }
      } else if (f === ke.current) {
        if (x = f.alternate, x === null) throw Error(i(387));
        x.memoizedState.memoizedState !== f.memoizedState.memoizedState && (e !== null ? e.push(ti) : e = [ti]);
      }
      f = f.return;
    }
    e !== null && du(
      n,
      e,
      a,
      o
    ), n.flags |= 262144;
  }
  function Xi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Gt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Yr(e) {
    Pr = e, In = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Dt(e) {
    return Yh(Pr, e);
  }
  function Qi(e, n) {
    return Pr === null && Yr(e), Yh(e, n);
  }
  function Yh(e, n) {
    var a = n._currentValue;
    if (n = { context: n, memoizedValue: a, next: null }, In === null) {
      if (e === null) throw Error(i(308));
      In = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else In = In.next = n;
    return a;
  }
  var Fx = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(a, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      n.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, Gx = t.unstable_scheduleCallback, Xx = t.unstable_NormalPriority, mt = {
    $$typeof: j,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function hu() {
    return {
      controller: new Fx(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ta(e) {
    e.refCount--, e.refCount === 0 && Gx(Xx, function() {
      e.controller.abort();
    });
  }
  var _a = null, pu = 0, Cl = 0, Al = null;
  function Qx(e, n) {
    if (_a === null) {
      var a = _a = [];
      pu = 0, Cl = gc(), Al = {
        status: "pending",
        value: void 0,
        then: function(o) {
          a.push(o);
        }
      };
    }
    return pu++, n.then(Fh, Fh), n;
  }
  function Fh() {
    if (--pu === 0 && _a !== null) {
      Al !== null && (Al.status = "fulfilled");
      var e = _a;
      _a = null, Cl = 0, Al = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Zx(e, n) {
    var a = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(f) {
        a.push(f);
      }
    };
    return e.then(
      function() {
        o.status = "fulfilled", o.value = n;
        for (var f = 0; f < a.length; f++) (0, a[f])(n);
      },
      function(f) {
        for (o.status = "rejected", o.reason = f, f = 0; f < a.length; f++)
          (0, a[f])(void 0);
      }
    ), o;
  }
  var Gh = B.S;
  B.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Qx(e, n), Gh !== null && Gh(e, n);
  };
  var Fr = X(null);
  function mu() {
    var e = Fr.current;
    return e !== null ? e : We.pooledCache;
  }
  function Zi(e, n) {
    n === null ? k(Fr, Fr.current) : k(Fr, n.pool);
  }
  function Xh() {
    var e = mu();
    return e === null ? null : { parent: mt._currentValue, pool: e };
  }
  var Ra = Error(i(460)), Qh = Error(i(474)), Ki = Error(i(542)), gu = { then: function() {
  } };
  function Zh(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Ji() {
  }
  function Kh(e, n, a) {
    switch (a = e[a], a === void 0 ? e.push(n) : a !== n && (n.then(Ji, Ji), n = a), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, $h(e), e;
      default:
        if (typeof n.status == "string") n.then(Ji, Ji);
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
            throw e = n.reason, $h(e), e;
        }
        throw Da = n, Ra;
    }
  }
  var Da = null;
  function Jh() {
    if (Da === null) throw Error(i(459));
    var e = Da;
    return Da = null, e;
  }
  function $h(e) {
    if (e === Ra || e === Ki)
      throw Error(i(483));
  }
  var ir = !1;
  function yu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function bu(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function or(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function sr(e, n, a) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Ge & 2) !== 0) {
      var f = o.pending;
      return f === null ? n.next = n : (n.next = f.next, f.next = n), o.pending = n, n = Pi(e), Bh(e, null, a), n;
    }
    return Vi(e, o, n, a), Pi(e);
  }
  function Na(e, n, a) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (a & 4194048) !== 0)) {
      var o = n.lanes;
      o &= e.pendingLanes, a |= o, n.lanes = a, Fd(e, a);
    }
  }
  function vu(e, n) {
    var a = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, a === o)) {
      var f = null, p = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var x = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          p === null ? f = p = x : p = p.next = x, a = a.next;
        } while (a !== null);
        p === null ? f = p = n : p = p.next = n;
      } else f = p = n;
      a = {
        baseState: o.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: p,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = n : e.next = n, a.lastBaseUpdate = n;
  }
  var xu = !1;
  function Oa() {
    if (xu) {
      var e = Al;
      if (e !== null) throw e;
    }
  }
  function Ma(e, n, a, o) {
    xu = !1;
    var f = e.updateQueue;
    ir = !1;
    var p = f.firstBaseUpdate, x = f.lastBaseUpdate, S = f.shared.pending;
    if (S !== null) {
      f.shared.pending = null;
      var D = S, U = D.next;
      D.next = null, x === null ? p = U : x.next = U, x = D;
      var K = e.alternate;
      K !== null && (K = K.updateQueue, S = K.lastBaseUpdate, S !== x && (S === null ? K.firstBaseUpdate = U : S.next = U, K.lastBaseUpdate = D));
    }
    if (p !== null) {
      var $ = f.baseState;
      x = 0, K = U = D = null, S = p;
      do {
        var q = S.lane & -536870913, P = q !== S.lane;
        if (P ? (Ue & q) === q : (o & q) === q) {
          q !== 0 && q === Cl && (xu = !0), K !== null && (K = K.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          e: {
            var Ee = e, xe = S;
            q = n;
            var Ke = a;
            switch (xe.tag) {
              case 1:
                if (Ee = xe.payload, typeof Ee == "function") {
                  $ = Ee.call(Ke, $, q);
                  break e;
                }
                $ = Ee;
                break e;
              case 3:
                Ee.flags = Ee.flags & -65537 | 128;
              case 0:
                if (Ee = xe.payload, q = typeof Ee == "function" ? Ee.call(Ke, $, q) : Ee, q == null) break e;
                $ = y({}, $, q);
                break e;
              case 2:
                ir = !0;
            }
          }
          q = S.callback, q !== null && (e.flags |= 64, P && (e.flags |= 8192), P = f.callbacks, P === null ? f.callbacks = [q] : P.push(q));
        } else
          P = {
            lane: q,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, K === null ? (U = K = P, D = $) : K = K.next = P, x |= q;
        if (S = S.next, S === null) {
          if (S = f.shared.pending, S === null)
            break;
          P = S, S = P.next, P.next = null, f.lastBaseUpdate = P, f.shared.pending = null;
        }
      } while (!0);
      K === null && (D = $), f.baseState = D, f.firstBaseUpdate = U, f.lastBaseUpdate = K, p === null && (f.shared.lanes = 0), gr |= x, e.lanes = x, e.memoizedState = $;
    }
  }
  function Wh(e, n) {
    if (typeof e != "function")
      throw Error(i(191, e));
    e.call(n);
  }
  function ep(e, n) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Wh(a[e], n);
  }
  var Tl = X(null), $i = X(0);
  function tp(e, n) {
    e = Xn, k($i, e), k(Tl, n), Xn = e | n.baseLanes;
  }
  function wu() {
    k($i, Xn), k(Tl, Tl.current);
  }
  function Su() {
    Xn = $i.current, le(Tl), le($i);
  }
  var ur = 0, De = null, Qe = null, ft = null, Wi = !1, _l = !1, Gr = !1, eo = 0, za = 0, Rl = null, Kx = 0;
  function st() {
    throw Error(i(321));
  }
  function Eu(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++)
      if (!Gt(e[a], n[a])) return !1;
    return !0;
  }
  function ku(e, n, a, o, f, p) {
    return ur = p, De = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, B.H = e === null || e.memoizedState === null ? Bp : Ip, Gr = !1, p = a(o, f), Gr = !1, _l && (p = rp(
      n,
      a,
      o,
      f
    )), np(e), p;
  }
  function np(e) {
    B.H = io;
    var n = Qe !== null && Qe.next !== null;
    if (ur = 0, ft = Qe = De = null, Wi = !1, za = 0, Rl = null, n) throw Error(i(300));
    e === null || wt || (e = e.dependencies, e !== null && Xi(e) && (wt = !0));
  }
  function rp(e, n, a, o) {
    De = e;
    var f = 0;
    do {
      if (_l && (Rl = null), za = 0, _l = !1, 25 <= f) throw Error(i(301));
      if (f += 1, ft = Qe = null, e.updateQueue != null) {
        var p = e.updateQueue;
        p.lastEffect = null, p.events = null, p.stores = null, p.memoCache != null && (p.memoCache.index = 0);
      }
      B.H = rw, p = n(a, o);
    } while (_l);
    return p;
  }
  function Jx() {
    var e = B.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? La(n) : n, e = e.useState()[0], (Qe !== null ? Qe.memoizedState : null) !== e && (De.flags |= 1024), n;
  }
  function Cu() {
    var e = eo !== 0;
    return eo = 0, e;
  }
  function Au(e, n, a) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a;
  }
  function Tu(e) {
    if (Wi) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Wi = !1;
    }
    ur = 0, ft = Qe = De = null, _l = !1, za = eo = 0, Rl = null;
  }
  function Ht() {
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
  function _u() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function La(e) {
    var n = za;
    return za += 1, Rl === null && (Rl = []), e = Kh(Rl, e, n), n = De, (ft === null ? n.memoizedState : ft.next) === null && (n = n.alternate, B.H = n === null || n.memoizedState === null ? Bp : Ip), e;
  }
  function to(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return La(e);
      if (e.$$typeof === j) return Dt(e);
    }
    throw Error(i(438, String(e)));
  }
  function Ru(e) {
    var n = null, a = De.updateQueue;
    if (a !== null && (n = a.memoCache), n == null) {
      var o = De.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
        data: o.data.map(function(f) {
          return f.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), a === null && (a = _u(), De.updateQueue = a), a.memoCache = n, a = n.data[n.index], a === void 0)
      for (a = n.data[n.index] = Array(e), o = 0; o < e; o++)
        a[o] = M;
    return n.index++, a;
  }
  function qn(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function no(e) {
    var n = dt();
    return Du(n, Qe, e);
  }
  function Du(e, n, a) {
    var o = e.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = a;
    var f = e.baseQueue, p = o.pending;
    if (p !== null) {
      if (f !== null) {
        var x = f.next;
        f.next = p.next, p.next = x;
      }
      n.baseQueue = f = p, o.pending = null;
    }
    if (p = e.baseState, f === null) e.memoizedState = p;
    else {
      n = f.next;
      var S = x = null, D = null, U = n, K = !1;
      do {
        var $ = U.lane & -536870913;
        if ($ !== U.lane ? (Ue & $) === $ : (ur & $) === $) {
          var q = U.revertLane;
          if (q === 0)
            D !== null && (D = D.next = {
              lane: 0,
              revertLane: 0,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }), $ === Cl && (K = !0);
          else if ((ur & q) === q) {
            U = U.next, q === Cl && (K = !0);
            continue;
          } else
            $ = {
              lane: 0,
              revertLane: U.revertLane,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }, D === null ? (S = D = $, x = p) : D = D.next = $, De.lanes |= q, gr |= q;
          $ = U.action, Gr && a(p, $), p = U.hasEagerState ? U.eagerState : a(p, $);
        } else
          q = {
            lane: $,
            revertLane: U.revertLane,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          }, D === null ? (S = D = q, x = p) : D = D.next = q, De.lanes |= $, gr |= $;
        U = U.next;
      } while (U !== null && U !== n);
      if (D === null ? x = p : D.next = S, !Gt(p, e.memoizedState) && (wt = !0, K && (a = Al, a !== null)))
        throw a;
      e.memoizedState = p, e.baseState = x, e.baseQueue = D, o.lastRenderedState = p;
    }
    return f === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Nu(e) {
    var n = dt(), a = n.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = e;
    var o = a.dispatch, f = a.pending, p = n.memoizedState;
    if (f !== null) {
      a.pending = null;
      var x = f = f.next;
      do
        p = e(p, x.action), x = x.next;
      while (x !== f);
      Gt(p, n.memoizedState) || (wt = !0), n.memoizedState = p, n.baseQueue === null && (n.baseState = p), a.lastRenderedState = p;
    }
    return [p, o];
  }
  function lp(e, n, a) {
    var o = De, f = dt(), p = Pe;
    if (p) {
      if (a === void 0) throw Error(i(407));
      a = a();
    } else a = n();
    var x = !Gt(
      (Qe || f).memoizedState,
      a
    );
    x && (f.memoizedState = a, wt = !0), f = f.queue;
    var S = op.bind(null, o, f, e);
    if (ja(2048, 8, S, [e]), f.getSnapshot !== n || x || ft !== null && ft.memoizedState.tag & 1) {
      if (o.flags |= 2048, Dl(
        9,
        ro(),
        ip.bind(
          null,
          o,
          f,
          a,
          n
        ),
        null
      ), We === null) throw Error(i(349));
      p || (ur & 124) !== 0 || ap(o, n, a);
    }
    return a;
  }
  function ap(e, n, a) {
    e.flags |= 16384, e = { getSnapshot: n, value: a }, n = De.updateQueue, n === null ? (n = _u(), De.updateQueue = n, n.stores = [e]) : (a = n.stores, a === null ? n.stores = [e] : a.push(e));
  }
  function ip(e, n, a, o) {
    n.value = a, n.getSnapshot = o, sp(n) && up(e);
  }
  function op(e, n, a) {
    return a(function() {
      sp(n) && up(e);
    });
  }
  function sp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var a = n();
      return !Gt(e, a);
    } catch {
      return !0;
    }
  }
  function up(e) {
    var n = wl(e, 2);
    n !== null && $t(n, e, 2);
  }
  function Ou(e) {
    var n = Ht();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Gr) {
        he(!0);
        try {
          a();
        } finally {
          he(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qn,
      lastRenderedState: e
    }, n;
  }
  function cp(e, n, a, o) {
    return e.baseState = a, Du(
      e,
      Qe,
      typeof o == "function" ? o : qn
    );
  }
  function $x(e, n, a, o, f) {
    if (ao(e)) throw Error(i(485));
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
        then: function(x) {
          p.listeners.push(x);
        }
      };
      B.T !== null ? a(!0) : p.isTransition = !1, o(p), a = n.pending, a === null ? (p.next = n.pending = p, fp(n, p)) : (p.next = a.next, n.pending = a.next = p);
    }
  }
  function fp(e, n) {
    var a = n.action, o = n.payload, f = e.state;
    if (n.isTransition) {
      var p = B.T, x = {};
      B.T = x;
      try {
        var S = a(f, o), D = B.S;
        D !== null && D(x, S), dp(e, n, S);
      } catch (U) {
        Mu(e, n, U);
      } finally {
        B.T = p;
      }
    } else
      try {
        p = a(f, o), dp(e, n, p);
      } catch (U) {
        Mu(e, n, U);
      }
  }
  function dp(e, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(o) {
        hp(e, n, o);
      },
      function(o) {
        return Mu(e, n, o);
      }
    ) : hp(e, n, a);
  }
  function hp(e, n, a) {
    n.status = "fulfilled", n.value = a, pp(n), e.state = a, n = e.pending, n !== null && (a = n.next, a === n ? e.pending = null : (a = a.next, n.next = a, fp(e, a)));
  }
  function Mu(e, n, a) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        n.status = "rejected", n.reason = a, pp(n), n = n.next;
      while (n !== o);
    }
    e.action = null;
  }
  function pp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function mp(e, n) {
    return n;
  }
  function gp(e, n) {
    if (Pe) {
      var a = We.formState;
      if (a !== null) {
        e: {
          var o = De;
          if (Pe) {
            if (it) {
              t: {
                for (var f = it, p = En; f.nodeType !== 8; ) {
                  if (!p) {
                    f = null;
                    break t;
                  }
                  if (f = vn(
                    f.nextSibling
                  ), f === null) {
                    f = null;
                    break t;
                  }
                }
                p = f.data, f = p === "F!" || p === "F" ? f : null;
              }
              if (f) {
                it = vn(
                  f.nextSibling
                ), o = f.data === "F!";
                break e;
              }
            }
            Vr(o);
          }
          o = !1;
        }
        o && (n = a[0]);
      }
    }
    return a = Ht(), a.memoizedState = a.baseState = n, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: mp,
      lastRenderedState: n
    }, a.queue = o, a = Lp.bind(
      null,
      De,
      o
    ), o.dispatch = a, o = Ou(!1), p = Bu.bind(
      null,
      De,
      !1,
      o.queue
    ), o = Ht(), f = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = f, a = $x.bind(
      null,
      De,
      f,
      p,
      a
    ), f.dispatch = a, o.memoizedState = e, [n, a, !1];
  }
  function yp(e) {
    var n = dt();
    return bp(n, Qe, e);
  }
  function bp(e, n, a) {
    if (n = Du(
      e,
      n,
      mp
    )[0], e = no(qn)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var o = La(n);
      } catch (x) {
        throw x === Ra ? Ki : x;
      }
    else o = n;
    n = dt();
    var f = n.queue, p = f.dispatch;
    return a !== n.memoizedState && (De.flags |= 2048, Dl(
      9,
      ro(),
      Wx.bind(null, f, a),
      null
    )), [o, p, e];
  }
  function Wx(e, n) {
    e.action = n;
  }
  function vp(e) {
    var n = dt(), a = Qe;
    if (a !== null)
      return bp(n, a, e);
    dt(), n = n.memoizedState, a = dt();
    var o = a.queue.dispatch;
    return a.memoizedState = e, [n, o, !1];
  }
  function Dl(e, n, a, o) {
    return e = { tag: e, create: a, deps: o, inst: n, next: null }, n = De.updateQueue, n === null && (n = _u(), De.updateQueue = n), a = n.lastEffect, a === null ? n.lastEffect = e.next = e : (o = a.next, a.next = e, e.next = o, n.lastEffect = e), e;
  }
  function ro() {
    return { destroy: void 0, resource: void 0 };
  }
  function xp() {
    return dt().memoizedState;
  }
  function lo(e, n, a, o) {
    var f = Ht();
    o = o === void 0 ? null : o, De.flags |= e, f.memoizedState = Dl(
      1 | n,
      ro(),
      a,
      o
    );
  }
  function ja(e, n, a, o) {
    var f = dt();
    o = o === void 0 ? null : o;
    var p = f.memoizedState.inst;
    Qe !== null && o !== null && Eu(o, Qe.memoizedState.deps) ? f.memoizedState = Dl(n, p, a, o) : (De.flags |= e, f.memoizedState = Dl(
      1 | n,
      p,
      a,
      o
    ));
  }
  function wp(e, n) {
    lo(8390656, 8, e, n);
  }
  function Sp(e, n) {
    ja(2048, 8, e, n);
  }
  function Ep(e, n) {
    return ja(4, 2, e, n);
  }
  function kp(e, n) {
    return ja(4, 4, e, n);
  }
  function Cp(e, n) {
    if (typeof n == "function") {
      e = e();
      var a = n(e);
      return function() {
        typeof a == "function" ? a() : n(null);
      };
    }
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function Ap(e, n, a) {
    a = a != null ? a.concat([e]) : null, ja(4, 4, Cp.bind(null, n, e), a);
  }
  function zu() {
  }
  function Tp(e, n) {
    var a = dt();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    return n !== null && Eu(n, o[1]) ? o[0] : (a.memoizedState = [e, n], e);
  }
  function _p(e, n) {
    var a = dt();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    if (n !== null && Eu(n, o[1]))
      return o[0];
    if (o = e(), Gr) {
      he(!0);
      try {
        e();
      } finally {
        he(!1);
      }
    }
    return a.memoizedState = [o, n], o;
  }
  function Lu(e, n, a) {
    return a === void 0 || (ur & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = a, e = Nm(), De.lanes |= e, gr |= e, a);
  }
  function Rp(e, n, a, o) {
    return Gt(a, n) ? a : Tl.current !== null ? (e = Lu(e, a, o), Gt(e, n) || (wt = !0), e) : (ur & 42) === 0 ? (wt = !0, e.memoizedState = a) : (e = Nm(), De.lanes |= e, gr |= e, n);
  }
  function Dp(e, n, a, o, f) {
    var p = W.p;
    W.p = p !== 0 && 8 > p ? p : 8;
    var x = B.T, S = {};
    B.T = S, Bu(e, !1, n, a);
    try {
      var D = f(), U = B.S;
      if (U !== null && U(S, D), D !== null && typeof D == "object" && typeof D.then == "function") {
        var K = Zx(
          D,
          o
        );
        Ua(
          e,
          n,
          K,
          Jt(e)
        );
      } else
        Ua(
          e,
          n,
          o,
          Jt(e)
        );
    } catch ($) {
      Ua(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: $ },
        Jt()
      );
    } finally {
      W.p = p, B.T = x;
    }
  }
  function ew() {
  }
  function ju(e, n, a, o) {
    if (e.tag !== 5) throw Error(i(476));
    var f = Np(e).queue;
    Dp(
      e,
      f,
      n,
      G,
      a === null ? ew : function() {
        return Op(e), a(o);
      }
    );
  }
  function Np(e) {
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
        lastRenderedReducer: qn,
        lastRenderedState: G
      },
      next: null
    };
    var a = {};
    return n.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qn,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function Op(e) {
    var n = Np(e).next.queue;
    Ua(e, n, {}, Jt());
  }
  function Uu() {
    return Dt(ti);
  }
  function Mp() {
    return dt().memoizedState;
  }
  function zp() {
    return dt().memoizedState;
  }
  function tw(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = Jt();
          e = or(a);
          var o = sr(n, e, a);
          o !== null && ($t(o, n, a), Na(o, n, a)), n = { cache: hu() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function nw(e, n, a) {
    var o = Jt();
    a = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ao(e) ? jp(n, a) : (a = ru(e, n, a, o), a !== null && ($t(a, e, o), Up(a, n, o)));
  }
  function Lp(e, n, a) {
    var o = Jt();
    Ua(e, n, a, o);
  }
  function Ua(e, n, a, o) {
    var f = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ao(e)) jp(n, f);
    else {
      var p = e.alternate;
      if (e.lanes === 0 && (p === null || p.lanes === 0) && (p = n.lastRenderedReducer, p !== null))
        try {
          var x = n.lastRenderedState, S = p(x, a);
          if (f.hasEagerState = !0, f.eagerState = S, Gt(S, x))
            return Vi(e, n, f, 0), We === null && qi(), !1;
        } catch {
        } finally {
        }
      if (a = ru(e, n, f, o), a !== null)
        return $t(a, e, o), Up(a, n, o), !0;
    }
    return !1;
  }
  function Bu(e, n, a, o) {
    if (o = {
      lane: 2,
      revertLane: gc(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ao(e)) {
      if (n) throw Error(i(479));
    } else
      n = ru(
        e,
        a,
        o,
        2
      ), n !== null && $t(n, e, 2);
  }
  function ao(e) {
    var n = e.alternate;
    return e === De || n !== null && n === De;
  }
  function jp(e, n) {
    _l = Wi = !0;
    var a = e.pending;
    a === null ? n.next = n : (n.next = a.next, a.next = n), e.pending = n;
  }
  function Up(e, n, a) {
    if ((a & 4194048) !== 0) {
      var o = n.lanes;
      o &= e.pendingLanes, a |= o, n.lanes = a, Fd(e, a);
    }
  }
  var io = {
    readContext: Dt,
    use: to,
    useCallback: st,
    useContext: st,
    useEffect: st,
    useImperativeHandle: st,
    useLayoutEffect: st,
    useInsertionEffect: st,
    useMemo: st,
    useReducer: st,
    useRef: st,
    useState: st,
    useDebugValue: st,
    useDeferredValue: st,
    useTransition: st,
    useSyncExternalStore: st,
    useId: st,
    useHostTransitionStatus: st,
    useFormState: st,
    useActionState: st,
    useOptimistic: st,
    useMemoCache: st,
    useCacheRefresh: st
  }, Bp = {
    readContext: Dt,
    use: to,
    useCallback: function(e, n) {
      return Ht().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: Dt,
    useEffect: wp,
    useImperativeHandle: function(e, n, a) {
      a = a != null ? a.concat([e]) : null, lo(
        4194308,
        4,
        Cp.bind(null, n, e),
        a
      );
    },
    useLayoutEffect: function(e, n) {
      return lo(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      lo(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var a = Ht();
      n = n === void 0 ? null : n;
      var o = e();
      if (Gr) {
        he(!0);
        try {
          e();
        } finally {
          he(!1);
        }
      }
      return a.memoizedState = [o, n], o;
    },
    useReducer: function(e, n, a) {
      var o = Ht();
      if (a !== void 0) {
        var f = a(n);
        if (Gr) {
          he(!0);
          try {
            a(n);
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
      }, o.queue = e, e = e.dispatch = nw.bind(
        null,
        De,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var n = Ht();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Ou(e);
      var n = e.queue, a = Lp.bind(null, De, n);
      return n.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: zu,
    useDeferredValue: function(e, n) {
      var a = Ht();
      return Lu(a, e, n);
    },
    useTransition: function() {
      var e = Ou(!1);
      return e = Dp.bind(
        null,
        De,
        e.queue,
        !0,
        !1
      ), Ht().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, a) {
      var o = De, f = Ht();
      if (Pe) {
        if (a === void 0)
          throw Error(i(407));
        a = a();
      } else {
        if (a = n(), We === null)
          throw Error(i(349));
        (Ue & 124) !== 0 || ap(o, n, a);
      }
      f.memoizedState = a;
      var p = { value: a, getSnapshot: n };
      return f.queue = p, wp(op.bind(null, o, p, e), [
        e
      ]), o.flags |= 2048, Dl(
        9,
        ro(),
        ip.bind(
          null,
          o,
          p,
          a,
          n
        ),
        null
      ), a;
    },
    useId: function() {
      var e = Ht(), n = We.identifierPrefix;
      if (Pe) {
        var a = Bn, o = Un;
        a = (o & ~(1 << 32 - me(o) - 1)).toString(32) + a, n = "«" + n + "R" + a, a = eo++, 0 < a && (n += "H" + a.toString(32)), n += "»";
      } else
        a = Kx++, n = "«" + n + "r" + a.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Uu,
    useFormState: gp,
    useActionState: gp,
    useOptimistic: function(e) {
      var n = Ht();
      n.memoizedState = n.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = a, n = Bu.bind(
        null,
        De,
        !0,
        a
      ), a.dispatch = n, [e, n];
    },
    useMemoCache: Ru,
    useCacheRefresh: function() {
      return Ht().memoizedState = tw.bind(
        null,
        De
      );
    }
  }, Ip = {
    readContext: Dt,
    use: to,
    useCallback: Tp,
    useContext: Dt,
    useEffect: Sp,
    useImperativeHandle: Ap,
    useInsertionEffect: Ep,
    useLayoutEffect: kp,
    useMemo: _p,
    useReducer: no,
    useRef: xp,
    useState: function() {
      return no(qn);
    },
    useDebugValue: zu,
    useDeferredValue: function(e, n) {
      var a = dt();
      return Rp(
        a,
        Qe.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = no(qn)[0], n = dt().memoizedState;
      return [
        typeof e == "boolean" ? e : La(e),
        n
      ];
    },
    useSyncExternalStore: lp,
    useId: Mp,
    useHostTransitionStatus: Uu,
    useFormState: yp,
    useActionState: yp,
    useOptimistic: function(e, n) {
      var a = dt();
      return cp(a, Qe, e, n);
    },
    useMemoCache: Ru,
    useCacheRefresh: zp
  }, rw = {
    readContext: Dt,
    use: to,
    useCallback: Tp,
    useContext: Dt,
    useEffect: Sp,
    useImperativeHandle: Ap,
    useInsertionEffect: Ep,
    useLayoutEffect: kp,
    useMemo: _p,
    useReducer: Nu,
    useRef: xp,
    useState: function() {
      return Nu(qn);
    },
    useDebugValue: zu,
    useDeferredValue: function(e, n) {
      var a = dt();
      return Qe === null ? Lu(a, e, n) : Rp(
        a,
        Qe.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Nu(qn)[0], n = dt().memoizedState;
      return [
        typeof e == "boolean" ? e : La(e),
        n
      ];
    },
    useSyncExternalStore: lp,
    useId: Mp,
    useHostTransitionStatus: Uu,
    useFormState: vp,
    useActionState: vp,
    useOptimistic: function(e, n) {
      var a = dt();
      return Qe !== null ? cp(a, Qe, e, n) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Ru,
    useCacheRefresh: zp
  }, Nl = null, Ba = 0;
  function oo(e) {
    var n = Ba;
    return Ba += 1, Nl === null && (Nl = []), Kh(Nl, e, n);
  }
  function Ia(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function so(e, n) {
    throw n.$$typeof === g ? Error(i(525)) : (e = Object.prototype.toString.call(n), Error(
      i(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function Hp(e) {
    var n = e._init;
    return n(e._payload);
  }
  function qp(e) {
    function n(z, O) {
      if (e) {
        var L = z.deletions;
        L === null ? (z.deletions = [O], z.flags |= 16) : L.push(O);
      }
    }
    function a(z, O) {
      if (!e) return null;
      for (; O !== null; )
        n(z, O), O = O.sibling;
      return null;
    }
    function o(z) {
      for (var O = /* @__PURE__ */ new Map(); z !== null; )
        z.key !== null ? O.set(z.key, z) : O.set(z.index, z), z = z.sibling;
      return O;
    }
    function f(z, O) {
      return z = jn(z, O), z.index = 0, z.sibling = null, z;
    }
    function p(z, O, L) {
      return z.index = L, e ? (L = z.alternate, L !== null ? (L = L.index, L < O ? (z.flags |= 67108866, O) : L) : (z.flags |= 67108866, O)) : (z.flags |= 1048576, O);
    }
    function x(z) {
      return e && z.alternate === null && (z.flags |= 67108866), z;
    }
    function S(z, O, L, J) {
      return O === null || O.tag !== 6 ? (O = au(L, z.mode, J), O.return = z, O) : (O = f(O, L), O.return = z, O);
    }
    function D(z, O, L, J) {
      var ce = L.type;
      return ce === A ? K(
        z,
        O,
        L.props.children,
        J,
        L.key
      ) : O !== null && (O.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === V && Hp(ce) === O.type) ? (O = f(O, L.props), Ia(O, L), O.return = z, O) : (O = Yi(
        L.type,
        L.key,
        L.props,
        null,
        z.mode,
        J
      ), Ia(O, L), O.return = z, O);
    }
    function U(z, O, L, J) {
      return O === null || O.tag !== 4 || O.stateNode.containerInfo !== L.containerInfo || O.stateNode.implementation !== L.implementation ? (O = iu(L, z.mode, J), O.return = z, O) : (O = f(O, L.children || []), O.return = z, O);
    }
    function K(z, O, L, J, ce) {
      return O === null || O.tag !== 7 ? (O = Br(
        L,
        z.mode,
        J,
        ce
      ), O.return = z, O) : (O = f(O, L), O.return = z, O);
    }
    function $(z, O, L) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return O = au(
          "" + O,
          z.mode,
          L
        ), O.return = z, O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case b:
            return L = Yi(
              O.type,
              O.key,
              O.props,
              null,
              z.mode,
              L
            ), Ia(L, O), L.return = z, L;
          case v:
            return O = iu(
              O,
              z.mode,
              L
            ), O.return = z, O;
          case V:
            var J = O._init;
            return O = J(O._payload), $(z, O, L);
        }
        if (ie(O) || te(O))
          return O = Br(
            O,
            z.mode,
            L,
            null
          ), O.return = z, O;
        if (typeof O.then == "function")
          return $(z, oo(O), L);
        if (O.$$typeof === j)
          return $(
            z,
            Qi(z, O),
            L
          );
        so(z, O);
      }
      return null;
    }
    function q(z, O, L, J) {
      var ce = O !== null ? O.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return ce !== null ? null : S(z, O, "" + L, J);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case b:
            return L.key === ce ? D(z, O, L, J) : null;
          case v:
            return L.key === ce ? U(z, O, L, J) : null;
          case V:
            return ce = L._init, L = ce(L._payload), q(z, O, L, J);
        }
        if (ie(L) || te(L))
          return ce !== null ? null : K(z, O, L, J, null);
        if (typeof L.then == "function")
          return q(
            z,
            O,
            oo(L),
            J
          );
        if (L.$$typeof === j)
          return q(
            z,
            O,
            Qi(z, L),
            J
          );
        so(z, L);
      }
      return null;
    }
    function P(z, O, L, J, ce) {
      if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
        return z = z.get(L) || null, S(O, z, "" + J, ce);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case b:
            return z = z.get(
              J.key === null ? L : J.key
            ) || null, D(O, z, J, ce);
          case v:
            return z = z.get(
              J.key === null ? L : J.key
            ) || null, U(O, z, J, ce);
          case V:
            var Oe = J._init;
            return J = Oe(J._payload), P(
              z,
              O,
              L,
              J,
              ce
            );
        }
        if (ie(J) || te(J))
          return z = z.get(L) || null, K(O, z, J, ce, null);
        if (typeof J.then == "function")
          return P(
            z,
            O,
            L,
            oo(J),
            ce
          );
        if (J.$$typeof === j)
          return P(
            z,
            O,
            L,
            Qi(O, J),
            ce
          );
        so(O, J);
      }
      return null;
    }
    function Ee(z, O, L, J) {
      for (var ce = null, Oe = null, pe = O, we = O = 0, Et = null; pe !== null && we < L.length; we++) {
        pe.index > we ? (Et = pe, pe = null) : Et = pe.sibling;
        var qe = q(
          z,
          pe,
          L[we],
          J
        );
        if (qe === null) {
          pe === null && (pe = Et);
          break;
        }
        e && pe && qe.alternate === null && n(z, pe), O = p(qe, O, we), Oe === null ? ce = qe : Oe.sibling = qe, Oe = qe, pe = Et;
      }
      if (we === L.length)
        return a(z, pe), Pe && Hr(z, we), ce;
      if (pe === null) {
        for (; we < L.length; we++)
          pe = $(z, L[we], J), pe !== null && (O = p(
            pe,
            O,
            we
          ), Oe === null ? ce = pe : Oe.sibling = pe, Oe = pe);
        return Pe && Hr(z, we), ce;
      }
      for (pe = o(pe); we < L.length; we++)
        Et = P(
          pe,
          z,
          we,
          L[we],
          J
        ), Et !== null && (e && Et.alternate !== null && pe.delete(
          Et.key === null ? we : Et.key
        ), O = p(
          Et,
          O,
          we
        ), Oe === null ? ce = Et : Oe.sibling = Et, Oe = Et);
      return e && pe.forEach(function(Cr) {
        return n(z, Cr);
      }), Pe && Hr(z, we), ce;
    }
    function xe(z, O, L, J) {
      if (L == null) throw Error(i(151));
      for (var ce = null, Oe = null, pe = O, we = O = 0, Et = null, qe = L.next(); pe !== null && !qe.done; we++, qe = L.next()) {
        pe.index > we ? (Et = pe, pe = null) : Et = pe.sibling;
        var Cr = q(z, pe, qe.value, J);
        if (Cr === null) {
          pe === null && (pe = Et);
          break;
        }
        e && pe && Cr.alternate === null && n(z, pe), O = p(Cr, O, we), Oe === null ? ce = Cr : Oe.sibling = Cr, Oe = Cr, pe = Et;
      }
      if (qe.done)
        return a(z, pe), Pe && Hr(z, we), ce;
      if (pe === null) {
        for (; !qe.done; we++, qe = L.next())
          qe = $(z, qe.value, J), qe !== null && (O = p(qe, O, we), Oe === null ? ce = qe : Oe.sibling = qe, Oe = qe);
        return Pe && Hr(z, we), ce;
      }
      for (pe = o(pe); !qe.done; we++, qe = L.next())
        qe = P(pe, z, we, qe.value, J), qe !== null && (e && qe.alternate !== null && pe.delete(qe.key === null ? we : qe.key), O = p(qe, O, we), Oe === null ? ce = qe : Oe.sibling = qe, Oe = qe);
      return e && pe.forEach(function(lS) {
        return n(z, lS);
      }), Pe && Hr(z, we), ce;
    }
    function Ke(z, O, L, J) {
      if (typeof L == "object" && L !== null && L.type === A && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case b:
            e: {
              for (var ce = L.key; O !== null; ) {
                if (O.key === ce) {
                  if (ce = L.type, ce === A) {
                    if (O.tag === 7) {
                      a(
                        z,
                        O.sibling
                      ), J = f(
                        O,
                        L.props.children
                      ), J.return = z, z = J;
                      break e;
                    }
                  } else if (O.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === V && Hp(ce) === O.type) {
                    a(
                      z,
                      O.sibling
                    ), J = f(O, L.props), Ia(J, L), J.return = z, z = J;
                    break e;
                  }
                  a(z, O);
                  break;
                } else n(z, O);
                O = O.sibling;
              }
              L.type === A ? (J = Br(
                L.props.children,
                z.mode,
                J,
                L.key
              ), J.return = z, z = J) : (J = Yi(
                L.type,
                L.key,
                L.props,
                null,
                z.mode,
                J
              ), Ia(J, L), J.return = z, z = J);
            }
            return x(z);
          case v:
            e: {
              for (ce = L.key; O !== null; ) {
                if (O.key === ce)
                  if (O.tag === 4 && O.stateNode.containerInfo === L.containerInfo && O.stateNode.implementation === L.implementation) {
                    a(
                      z,
                      O.sibling
                    ), J = f(O, L.children || []), J.return = z, z = J;
                    break e;
                  } else {
                    a(z, O);
                    break;
                  }
                else n(z, O);
                O = O.sibling;
              }
              J = iu(L, z.mode, J), J.return = z, z = J;
            }
            return x(z);
          case V:
            return ce = L._init, L = ce(L._payload), Ke(
              z,
              O,
              L,
              J
            );
        }
        if (ie(L))
          return Ee(
            z,
            O,
            L,
            J
          );
        if (te(L)) {
          if (ce = te(L), typeof ce != "function") throw Error(i(150));
          return L = ce.call(L), xe(
            z,
            O,
            L,
            J
          );
        }
        if (typeof L.then == "function")
          return Ke(
            z,
            O,
            oo(L),
            J
          );
        if (L.$$typeof === j)
          return Ke(
            z,
            O,
            Qi(z, L),
            J
          );
        so(z, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L, O !== null && O.tag === 6 ? (a(z, O.sibling), J = f(O, L), J.return = z, z = J) : (a(z, O), J = au(L, z.mode, J), J.return = z, z = J), x(z)) : a(z, O);
    }
    return function(z, O, L, J) {
      try {
        Ba = 0;
        var ce = Ke(
          z,
          O,
          L,
          J
        );
        return Nl = null, ce;
      } catch (pe) {
        if (pe === Ra || pe === Ki) throw pe;
        var Oe = Xt(29, pe, null, z.mode);
        return Oe.lanes = J, Oe.return = z, Oe;
      } finally {
      }
    };
  }
  var Ol = qp(!0), Vp = qp(!1), cn = X(null), kn = null;
  function cr(e) {
    var n = e.alternate;
    k(gt, gt.current & 1), k(cn, e), kn === null && (n === null || Tl.current !== null || n.memoizedState !== null) && (kn = e);
  }
  function Pp(e) {
    if (e.tag === 22) {
      if (k(gt, gt.current), k(cn, e), kn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (kn = e);
      }
    } else fr();
  }
  function fr() {
    k(gt, gt.current), k(cn, cn.current);
  }
  function Vn(e) {
    le(cn), kn === e && (kn = null), le(gt);
  }
  var gt = X(0);
  function uo(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || _c(a)))
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
  function Iu(e, n, a, o) {
    n = e.memoizedState, a = a(o, n), a = a == null ? n : y({}, n, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Hu = {
    enqueueSetState: function(e, n, a) {
      e = e._reactInternals;
      var o = Jt(), f = or(o);
      f.payload = n, a != null && (f.callback = a), n = sr(e, f, o), n !== null && ($t(n, e, o), Na(n, e, o));
    },
    enqueueReplaceState: function(e, n, a) {
      e = e._reactInternals;
      var o = Jt(), f = or(o);
      f.tag = 1, f.payload = n, a != null && (f.callback = a), n = sr(e, f, o), n !== null && ($t(n, e, o), Na(n, e, o));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var a = Jt(), o = or(a);
      o.tag = 2, n != null && (o.callback = n), n = sr(e, o, a), n !== null && ($t(n, e, a), Na(n, e, a));
    }
  };
  function Yp(e, n, a, o, f, p, x) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, p, x) : n.prototype && n.prototype.isPureReactComponent ? !wa(a, o) || !wa(f, p) : !0;
  }
  function Fp(e, n, a, o) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, o), n.state !== e && Hu.enqueueReplaceState(n, n.state, null);
  }
  function Xr(e, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var o in n)
        o !== "ref" && (a[o] = n[o]);
    }
    if (e = e.defaultProps) {
      a === n && (a = y({}, a));
      for (var f in e)
        a[f] === void 0 && (a[f] = e[f]);
    }
    return a;
  }
  var co = typeof reportError == "function" ? reportError : function(e) {
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
  function Gp(e) {
    co(e);
  }
  function Xp(e) {
    console.error(e);
  }
  function Qp(e) {
    co(e);
  }
  function fo(e, n) {
    try {
      var a = e.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Zp(e, n, a) {
    try {
      var o = e.onCaughtError;
      o(a.value, {
        componentStack: a.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (f) {
      setTimeout(function() {
        throw f;
      });
    }
  }
  function qu(e, n, a) {
    return a = or(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      fo(e, n);
    }, a;
  }
  function Kp(e) {
    return e = or(e), e.tag = 3, e;
  }
  function Jp(e, n, a, o) {
    var f = a.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var p = o.value;
      e.payload = function() {
        return f(p);
      }, e.callback = function() {
        Zp(n, a, o);
      };
    }
    var x = a.stateNode;
    x !== null && typeof x.componentDidCatch == "function" && (e.callback = function() {
      Zp(n, a, o), typeof f != "function" && (yr === null ? yr = /* @__PURE__ */ new Set([this]) : yr.add(this));
      var S = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function lw(e, n, a, o, f) {
    if (a.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = a.alternate, n !== null && Aa(
        n,
        a,
        f,
        !0
      ), a = cn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return kn === null ? fc() : a.alternate === null && ot === 0 && (ot = 3), a.flags &= -257, a.flags |= 65536, a.lanes = f, o === gu ? a.flags |= 16384 : (n = a.updateQueue, n === null ? a.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), hc(e, o, f)), !1;
          case 22:
            return a.flags |= 65536, o === gu ? a.flags |= 16384 : (n = a.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, a.updateQueue = n) : (a = n.retryQueue, a === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : a.add(o)), hc(e, o, f)), !1;
        }
        throw Error(i(435, a.tag));
      }
      return hc(e, o, f), fc(), !1;
    }
    if (Pe)
      return n = cn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = f, o !== uu && (e = Error(i(422), { cause: o }), Ca(an(e, a)))) : (o !== uu && (n = Error(i(423), {
        cause: o
      }), Ca(
        an(n, a)
      )), e = e.current.alternate, e.flags |= 65536, f &= -f, e.lanes |= f, o = an(o, a), f = qu(
        e.stateNode,
        o,
        f
      ), vu(e, f), ot !== 4 && (ot = 2)), !1;
    var p = Error(i(520), { cause: o });
    if (p = an(p, a), Ga === null ? Ga = [p] : Ga.push(p), ot !== 4 && (ot = 2), n === null) return !0;
    o = an(o, a), a = n;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = f & -f, a.lanes |= e, e = qu(a.stateNode, o, e), vu(a, e), !1;
        case 1:
          if (n = a.type, p = a.stateNode, (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (yr === null || !yr.has(p))))
            return a.flags |= 65536, f &= -f, a.lanes |= f, f = Kp(f), Jp(
              f,
              e,
              a,
              o
            ), vu(a, f), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var $p = Error(i(461)), wt = !1;
  function Ct(e, n, a, o) {
    n.child = e === null ? Vp(n, null, a, o) : Ol(
      n,
      e.child,
      a,
      o
    );
  }
  function Wp(e, n, a, o, f) {
    a = a.render;
    var p = n.ref;
    if ("ref" in o) {
      var x = {};
      for (var S in o)
        S !== "ref" && (x[S] = o[S]);
    } else x = o;
    return Yr(n), o = ku(
      e,
      n,
      a,
      x,
      p,
      f
    ), S = Cu(), e !== null && !wt ? (Au(e, n, f), Pn(e, n, f)) : (Pe && S && ou(n), n.flags |= 1, Ct(e, n, o, f), n.child);
  }
  function em(e, n, a, o, f) {
    if (e === null) {
      var p = a.type;
      return typeof p == "function" && !lu(p) && p.defaultProps === void 0 && a.compare === null ? (n.tag = 15, n.type = p, tm(
        e,
        n,
        p,
        o,
        f
      )) : (e = Yi(
        a.type,
        null,
        o,
        n,
        n.mode,
        f
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (p = e.child, !Zu(e, f)) {
      var x = p.memoizedProps;
      if (a = a.compare, a = a !== null ? a : wa, a(x, o) && e.ref === n.ref)
        return Pn(e, n, f);
    }
    return n.flags |= 1, e = jn(p, o), e.ref = n.ref, e.return = n, n.child = e;
  }
  function tm(e, n, a, o, f) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (wa(p, o) && e.ref === n.ref)
        if (wt = !1, n.pendingProps = o = p, Zu(e, f))
          (e.flags & 131072) !== 0 && (wt = !0);
        else
          return n.lanes = e.lanes, Pn(e, n, f);
    }
    return Vu(
      e,
      n,
      a,
      o,
      f
    );
  }
  function nm(e, n, a) {
    var o = n.pendingProps, f = o.children, p = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (o = p !== null ? p.baseLanes | a : a, e !== null) {
          for (f = n.child = e.child, p = 0; f !== null; )
            p = p | f.lanes | f.childLanes, f = f.sibling;
          n.childLanes = p & ~o;
        } else n.childLanes = 0, n.child = null;
        return rm(
          e,
          n,
          o,
          a
        );
      }
      if ((a & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Zi(
          n,
          p !== null ? p.cachePool : null
        ), p !== null ? tp(n, p) : wu(), Pp(n);
      else
        return n.lanes = n.childLanes = 536870912, rm(
          e,
          n,
          p !== null ? p.baseLanes | a : a,
          a
        );
    } else
      p !== null ? (Zi(n, p.cachePool), tp(n, p), fr(), n.memoizedState = null) : (e !== null && Zi(n, null), wu(), fr());
    return Ct(e, n, f, a), n.child;
  }
  function rm(e, n, a, o) {
    var f = mu();
    return f = f === null ? null : { parent: mt._currentValue, pool: f }, n.memoizedState = {
      baseLanes: a,
      cachePool: f
    }, e !== null && Zi(n, null), wu(), Pp(n), e !== null && Aa(e, n, o, !0), null;
  }
  function ho(e, n) {
    var a = n.ref;
    if (a === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(i(284));
      (e === null || e.ref !== a) && (n.flags |= 4194816);
    }
  }
  function Vu(e, n, a, o, f) {
    return Yr(n), a = ku(
      e,
      n,
      a,
      o,
      void 0,
      f
    ), o = Cu(), e !== null && !wt ? (Au(e, n, f), Pn(e, n, f)) : (Pe && o && ou(n), n.flags |= 1, Ct(e, n, a, f), n.child);
  }
  function lm(e, n, a, o, f, p) {
    return Yr(n), n.updateQueue = null, a = rp(
      n,
      o,
      a,
      f
    ), np(e), o = Cu(), e !== null && !wt ? (Au(e, n, p), Pn(e, n, p)) : (Pe && o && ou(n), n.flags |= 1, Ct(e, n, a, p), n.child);
  }
  function am(e, n, a, o, f) {
    if (Yr(n), n.stateNode === null) {
      var p = Sl, x = a.contextType;
      typeof x == "object" && x !== null && (p = Dt(x)), p = new a(o, p), n.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, p.updater = Hu, n.stateNode = p, p._reactInternals = n, p = n.stateNode, p.props = o, p.state = n.memoizedState, p.refs = {}, yu(n), x = a.contextType, p.context = typeof x == "object" && x !== null ? Dt(x) : Sl, p.state = n.memoizedState, x = a.getDerivedStateFromProps, typeof x == "function" && (Iu(
        n,
        a,
        x,
        o
      ), p.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (x = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), x !== p.state && Hu.enqueueReplaceState(p, p.state, null), Ma(n, o, p, f), Oa(), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
    } else if (e === null) {
      p = n.stateNode;
      var S = n.memoizedProps, D = Xr(a, S);
      p.props = D;
      var U = p.context, K = a.contextType;
      x = Sl, typeof K == "object" && K !== null && (x = Dt(K));
      var $ = a.getDerivedStateFromProps;
      K = typeof $ == "function" || typeof p.getSnapshotBeforeUpdate == "function", S = n.pendingProps !== S, K || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (S || U !== x) && Fp(
        n,
        p,
        o,
        x
      ), ir = !1;
      var q = n.memoizedState;
      p.state = q, Ma(n, o, p, f), Oa(), U = n.memoizedState, S || q !== U || ir ? (typeof $ == "function" && (Iu(
        n,
        a,
        $,
        o
      ), U = n.memoizedState), (D = ir || Yp(
        n,
        a,
        D,
        o,
        q,
        U,
        x
      )) ? (K || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = U), p.props = o, p.state = U, p.context = x, o = D) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
    } else {
      p = n.stateNode, bu(e, n), x = n.memoizedProps, K = Xr(a, x), p.props = K, $ = n.pendingProps, q = p.context, U = a.contextType, D = Sl, typeof U == "object" && U !== null && (D = Dt(U)), S = a.getDerivedStateFromProps, (U = typeof S == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (x !== $ || q !== D) && Fp(
        n,
        p,
        o,
        D
      ), ir = !1, q = n.memoizedState, p.state = q, Ma(n, o, p, f), Oa();
      var P = n.memoizedState;
      x !== $ || q !== P || ir || e !== null && e.dependencies !== null && Xi(e.dependencies) ? (typeof S == "function" && (Iu(
        n,
        a,
        S,
        o
      ), P = n.memoizedState), (K = ir || Yp(
        n,
        a,
        K,
        o,
        q,
        P,
        D
      ) || e !== null && e.dependencies !== null && Xi(e.dependencies)) ? (U || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(o, P, D), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(
        o,
        P,
        D
      )), typeof p.componentDidUpdate == "function" && (n.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || x === e.memoizedProps && q === e.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && q === e.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = P), p.props = o, p.state = P, p.context = D, o = K) : (typeof p.componentDidUpdate != "function" || x === e.memoizedProps && q === e.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && q === e.memoizedState || (n.flags |= 1024), o = !1);
    }
    return p = o, ho(e, n), o = (n.flags & 128) !== 0, p || o ? (p = n.stateNode, a = o && typeof a.getDerivedStateFromError != "function" ? null : p.render(), n.flags |= 1, e !== null && o ? (n.child = Ol(
      n,
      e.child,
      null,
      f
    ), n.child = Ol(
      n,
      null,
      a,
      f
    )) : Ct(e, n, a, f), n.memoizedState = p.state, e = n.child) : e = Pn(
      e,
      n,
      f
    ), e;
  }
  function im(e, n, a, o) {
    return ka(), n.flags |= 256, Ct(e, n, a, o), n.child;
  }
  var Pu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Yu(e) {
    return { baseLanes: e, cachePool: Xh() };
  }
  function Fu(e, n, a) {
    return e = e !== null ? e.childLanes & ~a : 0, n && (e |= fn), e;
  }
  function om(e, n, a) {
    var o = n.pendingProps, f = !1, p = (n.flags & 128) !== 0, x;
    if ((x = p) || (x = e !== null && e.memoizedState === null ? !1 : (gt.current & 2) !== 0), x && (f = !0, n.flags &= -129), x = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Pe) {
        if (f ? cr(n) : fr(), Pe) {
          var S = it, D;
          if (D = S) {
            e: {
              for (D = S, S = En; D.nodeType !== 8; ) {
                if (!S) {
                  S = null;
                  break e;
                }
                if (D = vn(
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
              treeContext: Ir !== null ? { id: Un, overflow: Bn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, D = Xt(
              18,
              null,
              null,
              0
            ), D.stateNode = S, D.return = n, n.child = D, zt = n, it = null, D = !0) : D = !1;
          }
          D || Vr(n);
        }
        if (S = n.memoizedState, S !== null && (S = S.dehydrated, S !== null))
          return _c(S) ? n.lanes = 32 : n.lanes = 536870912, null;
        Vn(n);
      }
      return S = o.children, o = o.fallback, f ? (fr(), f = n.mode, S = po(
        { mode: "hidden", children: S },
        f
      ), o = Br(
        o,
        f,
        a,
        null
      ), S.return = n, o.return = n, S.sibling = o, n.child = S, f = n.child, f.memoizedState = Yu(a), f.childLanes = Fu(
        e,
        x,
        a
      ), n.memoizedState = Pu, o) : (cr(n), Gu(n, S));
    }
    if (D = e.memoizedState, D !== null && (S = D.dehydrated, S !== null)) {
      if (p)
        n.flags & 256 ? (cr(n), n.flags &= -257, n = Xu(
          e,
          n,
          a
        )) : n.memoizedState !== null ? (fr(), n.child = e.child, n.flags |= 128, n = null) : (fr(), f = o.fallback, S = n.mode, o = po(
          { mode: "visible", children: o.children },
          S
        ), f = Br(
          f,
          S,
          a,
          null
        ), f.flags |= 2, o.return = n, f.return = n, o.sibling = f, n.child = o, Ol(
          n,
          e.child,
          null,
          a
        ), o = n.child, o.memoizedState = Yu(a), o.childLanes = Fu(
          e,
          x,
          a
        ), n.memoizedState = Pu, n = f);
      else if (cr(n), _c(S)) {
        if (x = S.nextSibling && S.nextSibling.dataset, x) var U = x.dgst;
        x = U, o = Error(i(419)), o.stack = "", o.digest = x, Ca({ value: o, source: null, stack: null }), n = Xu(
          e,
          n,
          a
        );
      } else if (wt || Aa(e, n, a, !1), x = (a & e.childLanes) !== 0, wt || x) {
        if (x = We, x !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : Rs(o), o = (o & (x.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== D.retryLane))
          throw D.retryLane = o, wl(e, o), $t(x, e, o), $p;
        S.data === "$?" || fc(), n = Xu(
          e,
          n,
          a
        );
      } else
        S.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = D.treeContext, it = vn(
          S.nextSibling
        ), zt = n, Pe = !0, qr = null, En = !1, e !== null && (sn[un++] = Un, sn[un++] = Bn, sn[un++] = Ir, Un = e.id, Bn = e.overflow, Ir = n), n = Gu(
          n,
          o.children
        ), n.flags |= 4096);
      return n;
    }
    return f ? (fr(), f = o.fallback, S = n.mode, D = e.child, U = D.sibling, o = jn(D, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = D.subtreeFlags & 65011712, U !== null ? f = jn(U, f) : (f = Br(
      f,
      S,
      a,
      null
    ), f.flags |= 2), f.return = n, o.return = n, o.sibling = f, n.child = o, o = f, f = n.child, S = e.child.memoizedState, S === null ? S = Yu(a) : (D = S.cachePool, D !== null ? (U = mt._currentValue, D = D.parent !== U ? { parent: U, pool: U } : D) : D = Xh(), S = {
      baseLanes: S.baseLanes | a,
      cachePool: D
    }), f.memoizedState = S, f.childLanes = Fu(
      e,
      x,
      a
    ), n.memoizedState = Pu, o) : (cr(n), a = e.child, e = a.sibling, a = jn(a, {
      mode: "visible",
      children: o.children
    }), a.return = n, a.sibling = null, e !== null && (x = n.deletions, x === null ? (n.deletions = [e], n.flags |= 16) : x.push(e)), n.child = a, n.memoizedState = null, a);
  }
  function Gu(e, n) {
    return n = po(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function po(e, n) {
    return e = Xt(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function Xu(e, n, a) {
    return Ol(n, e.child, null, a), e = Gu(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function sm(e, n, a) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), fu(e.return, n, a);
  }
  function Qu(e, n, a, o, f) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: a,
      tailMode: f
    } : (p.isBackwards = n, p.rendering = null, p.renderingStartTime = 0, p.last = o, p.tail = a, p.tailMode = f);
  }
  function um(e, n, a) {
    var o = n.pendingProps, f = o.revealOrder, p = o.tail;
    if (Ct(e, n, o.children, a), o = gt.current, (o & 2) !== 0)
      o = o & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && sm(e, a, n);
          else if (e.tag === 19)
            sm(e, a, n);
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
    switch (k(gt, o), f) {
      case "forwards":
        for (a = n.child, f = null; a !== null; )
          e = a.alternate, e !== null && uo(e) === null && (f = a), a = a.sibling;
        a = f, a === null ? (f = n.child, n.child = null) : (f = a.sibling, a.sibling = null), Qu(
          n,
          !1,
          f,
          a,
          p
        );
        break;
      case "backwards":
        for (a = null, f = n.child, n.child = null; f !== null; ) {
          if (e = f.alternate, e !== null && uo(e) === null) {
            n.child = f;
            break;
          }
          e = f.sibling, f.sibling = a, a = f, f = e;
        }
        Qu(
          n,
          !0,
          a,
          null,
          p
        );
        break;
      case "together":
        Qu(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Pn(e, n, a) {
    if (e !== null && (n.dependencies = e.dependencies), gr |= n.lanes, (a & n.childLanes) === 0)
      if (e !== null) {
        if (Aa(
          e,
          n,
          a,
          !1
        ), (a & n.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && n.child !== e.child)
      throw Error(i(153));
    if (n.child !== null) {
      for (e = n.child, a = jn(e, e.pendingProps), n.child = a, a.return = n; e.sibling !== null; )
        e = e.sibling, a = a.sibling = jn(e, e.pendingProps), a.return = n;
      a.sibling = null;
    }
    return n.child;
  }
  function Zu(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Xi(e)));
  }
  function aw(e, n, a) {
    switch (n.tag) {
      case 3:
        Te(n, n.stateNode.containerInfo), ar(n, mt, e.memoizedState.cache), ka();
        break;
      case 27:
      case 5:
        rt(n);
        break;
      case 4:
        Te(n, n.stateNode.containerInfo);
        break;
      case 10:
        ar(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (cr(n), n.flags |= 128, null) : (a & n.child.childLanes) !== 0 ? om(e, n, a) : (cr(n), e = Pn(
            e,
            n,
            a
          ), e !== null ? e.sibling : null);
        cr(n);
        break;
      case 19:
        var f = (e.flags & 128) !== 0;
        if (o = (a & n.childLanes) !== 0, o || (Aa(
          e,
          n,
          a,
          !1
        ), o = (a & n.childLanes) !== 0), f) {
          if (o)
            return um(
              e,
              n,
              a
            );
          n.flags |= 128;
        }
        if (f = n.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), k(gt, gt.current), o) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, nm(e, n, a);
      case 24:
        ar(n, mt, e.memoizedState.cache);
    }
    return Pn(e, n, a);
  }
  function cm(e, n, a) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        wt = !0;
      else {
        if (!Zu(e, a) && (n.flags & 128) === 0)
          return wt = !1, aw(
            e,
            n,
            a
          );
        wt = (e.flags & 131072) !== 0;
      }
    else
      wt = !1, Pe && (n.flags & 1048576) !== 0 && Hh(n, Gi, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var o = n.elementType, f = o._init;
          if (o = f(o._payload), n.type = o, typeof o == "function")
            lu(o) ? (e = Xr(o, e), n.tag = 1, n = am(
              null,
              n,
              o,
              e,
              a
            )) : (n.tag = 0, n = Vu(
              null,
              n,
              o,
              e,
              a
            ));
          else {
            if (o != null) {
              if (f = o.$$typeof, f === Q) {
                n.tag = 11, n = Wp(
                  null,
                  n,
                  o,
                  e,
                  a
                );
                break e;
              } else if (f === F) {
                n.tag = 14, n = em(
                  null,
                  n,
                  o,
                  e,
                  a
                );
                break e;
              }
            }
            throw n = ne(o) || o, Error(i(306, n, ""));
          }
        }
        return n;
      case 0:
        return Vu(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 1:
        return o = n.type, f = Xr(
          o,
          n.pendingProps
        ), am(
          e,
          n,
          o,
          f,
          a
        );
      case 3:
        e: {
          if (Te(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(i(387));
          o = n.pendingProps;
          var p = n.memoizedState;
          f = p.element, bu(e, n), Ma(n, o, null, a);
          var x = n.memoizedState;
          if (o = x.cache, ar(n, mt, o), o !== p.cache && du(
            n,
            [mt],
            a,
            !0
          ), Oa(), o = x.element, p.isDehydrated)
            if (p = {
              element: o,
              isDehydrated: !1,
              cache: x.cache
            }, n.updateQueue.baseState = p, n.memoizedState = p, n.flags & 256) {
              n = im(
                e,
                n,
                o,
                a
              );
              break e;
            } else if (o !== f) {
              f = an(
                Error(i(424)),
                n
              ), Ca(f), n = im(
                e,
                n,
                o,
                a
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
              for (it = vn(e.firstChild), zt = n, Pe = !0, qr = null, En = !0, a = Vp(
                n,
                null,
                o,
                a
              ), n.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (ka(), o === f) {
              n = Pn(
                e,
                n,
                a
              );
              break e;
            }
            Ct(
              e,
              n,
              o,
              a
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return ho(e, n), e === null ? (a = pg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = a : Pe || (a = n.type, e = n.pendingProps, o = _o(
          ue.current
        ).createElement(a), o[Rt] = n, o[Bt] = e, Tt(o, a, e), xt(o), n.stateNode = o) : n.memoizedState = pg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return rt(n), e === null && Pe && (o = n.stateNode = fg(
          n.type,
          n.pendingProps,
          ue.current
        ), zt = n, En = !0, f = it, xr(n.type) ? (Rc = f, it = vn(
          o.firstChild
        )) : it = f), Ct(
          e,
          n,
          n.pendingProps.children,
          a
        ), ho(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Pe && ((f = o = it) && (o = Mw(
          o,
          n.type,
          n.pendingProps,
          En
        ), o !== null ? (n.stateNode = o, zt = n, it = vn(
          o.firstChild
        ), En = !1, f = !0) : f = !1), f || Vr(n)), rt(n), f = n.type, p = n.pendingProps, x = e !== null ? e.memoizedProps : null, o = p.children, Cc(f, p) ? o = null : x !== null && Cc(f, x) && (n.flags |= 32), n.memoizedState !== null && (f = ku(
          e,
          n,
          Jx,
          null,
          null,
          a
        ), ti._currentValue = f), ho(e, n), Ct(e, n, o, a), n.child;
      case 6:
        return e === null && Pe && ((e = a = it) && (a = zw(
          a,
          n.pendingProps,
          En
        ), a !== null ? (n.stateNode = a, zt = n, it = null, e = !0) : e = !1), e || Vr(n)), null;
      case 13:
        return om(e, n, a);
      case 4:
        return Te(
          n,
          n.stateNode.containerInfo
        ), o = n.pendingProps, e === null ? n.child = Ol(
          n,
          null,
          o,
          a
        ) : Ct(
          e,
          n,
          o,
          a
        ), n.child;
      case 11:
        return Wp(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 7:
        return Ct(
          e,
          n,
          n.pendingProps,
          a
        ), n.child;
      case 8:
        return Ct(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 12:
        return Ct(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 10:
        return o = n.pendingProps, ar(n, n.type, o.value), Ct(
          e,
          n,
          o.children,
          a
        ), n.child;
      case 9:
        return f = n.type._context, o = n.pendingProps.children, Yr(n), f = Dt(f), o = o(f), n.flags |= 1, Ct(e, n, o, a), n.child;
      case 14:
        return em(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 15:
        return tm(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 19:
        return um(e, n, a);
      case 31:
        return o = n.pendingProps, a = n.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (a = po(
          o,
          a
        ), a.ref = n.ref, n.child = a, a.return = n, n = a) : (a = jn(e.child, o), a.ref = n.ref, n.child = a, a.return = n, n = a), n;
      case 22:
        return nm(e, n, a);
      case 24:
        return Yr(n), o = Dt(mt), e === null ? (f = mu(), f === null && (f = We, p = hu(), f.pooledCache = p, p.refCount++, p !== null && (f.pooledCacheLanes |= a), f = p), n.memoizedState = {
          parent: o,
          cache: f
        }, yu(n), ar(n, mt, f)) : ((e.lanes & a) !== 0 && (bu(e, n), Ma(n, null, null, a), Oa()), f = e.memoizedState, p = n.memoizedState, f.parent !== o ? (f = { parent: o, cache: o }, n.memoizedState = f, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = f), ar(n, mt, o)) : (o = p.cache, ar(n, mt, o), o !== f.cache && du(
          n,
          [mt],
          a,
          !0
        ))), Ct(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(i(156, n.tag));
  }
  function Yn(e) {
    e.flags |= 4;
  }
  function fm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !vg(n)) {
      if (n = cn.current, n !== null && ((Ue & 4194048) === Ue ? kn !== null : (Ue & 62914560) !== Ue && (Ue & 536870912) === 0 || n !== kn))
        throw Da = gu, Qh;
      e.flags |= 8192;
    }
  }
  function mo(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? Pd() : 536870912, e.lanes |= n, jl |= n);
  }
  function Ha(e, n) {
    if (!Pe)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var o = null; a !== null; )
            a.alternate !== null && (o = a), a = a.sibling;
          o === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
      }
  }
  function lt(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, a = 0, o = 0;
    if (n)
      for (var f = e.child; f !== null; )
        a |= f.lanes | f.childLanes, o |= f.subtreeFlags & 65011712, o |= f.flags & 65011712, f.return = e, f = f.sibling;
    else
      for (f = e.child; f !== null; )
        a |= f.lanes | f.childLanes, o |= f.subtreeFlags, o |= f.flags, f.return = e, f = f.sibling;
    return e.subtreeFlags |= o, e.childLanes = a, n;
  }
  function iw(e, n, a) {
    var o = n.pendingProps;
    switch (su(n), n.tag) {
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
        return a = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), Hn(mt), tt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ea(n) ? Yn(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Ph())), lt(n), null;
      case 26:
        return a = n.memoizedState, e === null ? (Yn(n), a !== null ? (lt(n), fm(n, a)) : (lt(n), n.flags &= -16777217)) : a ? a !== e.memoizedState ? (Yn(n), lt(n), fm(n, a)) : (lt(n), n.flags &= -16777217) : (e.memoizedProps !== o && Yn(n), lt(n), n.flags &= -16777217), null;
      case 27:
        bt(n), a = ue.current;
        var f = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== o && Yn(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(i(166));
            return lt(n), null;
          }
          e = se.current, Ea(n) ? qh(n) : (e = fg(f, o, a), n.stateNode = e, Yn(n));
        }
        return lt(n), null;
      case 5:
        if (bt(n), a = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== o && Yn(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(i(166));
            return lt(n), null;
          }
          if (e = se.current, Ea(n))
            qh(n);
          else {
            switch (f = _o(
              ue.current
            ), e) {
              case 1:
                e = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                e = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    e = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    e = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof o.is == "string" ? f.createElement("select", { is: o.is }) : f.createElement("select"), o.multiple ? e.multiple = !0 : o.size && (e.size = o.size);
                    break;
                  default:
                    e = typeof o.is == "string" ? f.createElement(a, { is: o.is }) : f.createElement(a);
                }
            }
            e[Rt] = n, e[Bt] = o;
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
            e: switch (Tt(e, a, o), a) {
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
            e && Yn(n);
          }
        }
        return lt(n), n.flags &= -16777217, null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== o && Yn(n);
        else {
          if (typeof o != "string" && n.stateNode === null)
            throw Error(i(166));
          if (e = ue.current, Ea(n)) {
            if (e = n.stateNode, a = n.memoizedProps, o = null, f = zt, f !== null)
              switch (f.tag) {
                case 27:
                case 5:
                  o = f.memoizedProps;
              }
            e[Rt] = n, e = !!(e.nodeValue === a || o !== null && o.suppressHydrationWarning === !0 || lg(e.nodeValue, a)), e || Vr(n);
          } else
            e = _o(e).createTextNode(
              o
            ), e[Rt] = n, n.stateNode = e;
        }
        return lt(n), null;
      case 13:
        if (o = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (f = Ea(n), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!f) throw Error(i(318));
              if (f = n.memoizedState, f = f !== null ? f.dehydrated : null, !f) throw Error(i(317));
              f[Rt] = n;
            } else
              ka(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            lt(n), f = !1;
          } else
            f = Ph(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = f), f = !0;
          if (!f)
            return n.flags & 256 ? (Vn(n), n) : (Vn(n), null);
        }
        if (Vn(n), (n.flags & 128) !== 0)
          return n.lanes = a, n;
        if (a = o !== null, e = e !== null && e.memoizedState !== null, a) {
          o = n.child, f = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (f = o.alternate.memoizedState.cachePool.pool);
          var p = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (p = o.memoizedState.cachePool.pool), p !== f && (o.flags |= 2048);
        }
        return a !== e && a && (n.child.flags |= 8192), mo(n, n.updateQueue), lt(n), null;
      case 4:
        return tt(), e === null && xc(n.stateNode.containerInfo), lt(n), null;
      case 10:
        return Hn(n.type), lt(n), null;
      case 19:
        if (le(gt), f = n.memoizedState, f === null) return lt(n), null;
        if (o = (n.flags & 128) !== 0, p = f.rendering, p === null)
          if (o) Ha(f, !1);
          else {
            if (ot !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (p = uo(e), p !== null) {
                  for (n.flags |= 128, Ha(f, !1), e = p.updateQueue, n.updateQueue = e, mo(n, e), n.subtreeFlags = 0, e = a, a = n.child; a !== null; )
                    Ih(a, e), a = a.sibling;
                  return k(
                    gt,
                    gt.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            f.tail !== null && Ve() > bo && (n.flags |= 128, o = !0, Ha(f, !1), n.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = uo(p), e !== null) {
              if (n.flags |= 128, o = !0, e = e.updateQueue, n.updateQueue = e, mo(n, e), Ha(f, !0), f.tail === null && f.tailMode === "hidden" && !p.alternate && !Pe)
                return lt(n), null;
            } else
              2 * Ve() - f.renderingStartTime > bo && a !== 536870912 && (n.flags |= 128, o = !0, Ha(f, !1), n.lanes = 4194304);
          f.isBackwards ? (p.sibling = n.child, n.child = p) : (e = f.last, e !== null ? e.sibling = p : n.child = p, f.last = p);
        }
        return f.tail !== null ? (n = f.tail, f.rendering = n, f.tail = n.sibling, f.renderingStartTime = Ve(), n.sibling = null, e = gt.current, k(gt, o ? e & 1 | 2 : e & 1), n) : (lt(n), null);
      case 22:
      case 23:
        return Vn(n), Su(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (lt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : lt(n), a = n.updateQueue, a !== null && mo(n, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== a && (n.flags |= 2048), e !== null && le(Fr), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), n.memoizedState.cache !== a && (n.flags |= 2048), Hn(mt), lt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, n.tag));
  }
  function ow(e, n) {
    switch (su(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Hn(mt), tt(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return bt(n), null;
      case 13:
        if (Vn(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(i(340));
          ka();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return le(gt), null;
      case 4:
        return tt(), null;
      case 10:
        return Hn(n.type), null;
      case 22:
      case 23:
        return Vn(n), Su(), e !== null && le(Fr), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return Hn(mt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function dm(e, n) {
    switch (su(n), n.tag) {
      case 3:
        Hn(mt), tt();
        break;
      case 26:
      case 27:
      case 5:
        bt(n);
        break;
      case 4:
        tt();
        break;
      case 13:
        Vn(n);
        break;
      case 19:
        le(gt);
        break;
      case 10:
        Hn(n.type);
        break;
      case 22:
      case 23:
        Vn(n), Su(), e !== null && le(Fr);
        break;
      case 24:
        Hn(mt);
    }
  }
  function qa(e, n) {
    try {
      var a = n.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var f = o.next;
        a = f;
        do {
          if ((a.tag & e) === e) {
            o = void 0;
            var p = a.create, x = a.inst;
            o = p(), x.destroy = o;
          }
          a = a.next;
        } while (a !== f);
      }
    } catch (S) {
      Je(n, n.return, S);
    }
  }
  function dr(e, n, a) {
    try {
      var o = n.updateQueue, f = o !== null ? o.lastEffect : null;
      if (f !== null) {
        var p = f.next;
        o = p;
        do {
          if ((o.tag & e) === e) {
            var x = o.inst, S = x.destroy;
            if (S !== void 0) {
              x.destroy = void 0, f = n;
              var D = a, U = S;
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
  function hm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        ep(n, a);
      } catch (o) {
        Je(e, e.return, o);
      }
    }
  }
  function pm(e, n, a) {
    a.props = Xr(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (o) {
      Je(e, n, o);
    }
  }
  function Va(e, n) {
    try {
      var a = e.ref;
      if (a !== null) {
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
        typeof a == "function" ? e.refCleanup = a(o) : a.current = o;
      }
    } catch (f) {
      Je(e, n, f);
    }
  }
  function Cn(e, n) {
    var a = e.ref, o = e.refCleanup;
    if (a !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (f) {
          Je(e, n, f);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (f) {
          Je(e, n, f);
        }
      else a.current = null;
  }
  function mm(e) {
    var n = e.type, a = e.memoizedProps, o = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && o.focus();
          break e;
        case "img":
          a.src ? o.src = a.src : a.srcSet && (o.srcset = a.srcSet);
      }
    } catch (f) {
      Je(e, e.return, f);
    }
  }
  function Ku(e, n, a) {
    try {
      var o = e.stateNode;
      _w(o, e.type, a, n), o[Bt] = n;
    } catch (f) {
      Je(e, e.return, f);
    }
  }
  function gm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && xr(e.type) || e.tag === 4;
  }
  function Ju(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || gm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && xr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function $u(e, n, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, n.appendChild(e), a = a._reactRootContainer, a != null || n.onclick !== null || (n.onclick = To));
    else if (o !== 4 && (o === 27 && xr(e.type) && (a = e.stateNode, n = null), e = e.child, e !== null))
      for ($u(e, n, a), e = e.sibling; e !== null; )
        $u(e, n, a), e = e.sibling;
  }
  function go(e, n, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? a.insertBefore(e, n) : a.appendChild(e);
    else if (o !== 4 && (o === 27 && xr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (go(e, n, a), e = e.sibling; e !== null; )
        go(e, n, a), e = e.sibling;
  }
  function ym(e) {
    var n = e.stateNode, a = e.memoizedProps;
    try {
      for (var o = e.type, f = n.attributes; f.length; )
        n.removeAttributeNode(f[0]);
      Tt(n, o, a), n[Rt] = e, n[Bt] = a;
    } catch (p) {
      Je(e, e.return, p);
    }
  }
  var Fn = !1, ut = !1, Wu = !1, bm = typeof WeakSet == "function" ? WeakSet : Set, St = null;
  function sw(e, n) {
    if (e = e.containerInfo, Ec = zo, e = Rh(e), Js(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var o = a.getSelection && a.getSelection();
          if (o && o.rangeCount !== 0) {
            a = o.anchorNode;
            var f = o.anchorOffset, p = o.focusNode;
            o = o.focusOffset;
            try {
              a.nodeType, p.nodeType;
            } catch {
              a = null;
              break e;
            }
            var x = 0, S = -1, D = -1, U = 0, K = 0, $ = e, q = null;
            t: for (; ; ) {
              for (var P; $ !== a || f !== 0 && $.nodeType !== 3 || (S = x + f), $ !== p || o !== 0 && $.nodeType !== 3 || (D = x + o), $.nodeType === 3 && (x += $.nodeValue.length), (P = $.firstChild) !== null; )
                q = $, $ = P;
              for (; ; ) {
                if ($ === e) break t;
                if (q === a && ++U === f && (S = x), q === p && ++K === o && (D = x), (P = $.nextSibling) !== null) break;
                $ = q, q = $.parentNode;
              }
              $ = P;
            }
            a = S === -1 || D === -1 ? null : { start: S, end: D };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (kc = { focusedElem: e, selectionRange: a }, zo = !1, St = n; St !== null; )
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
                e = void 0, a = n, f = p.memoizedProps, p = p.memoizedState, o = a.stateNode;
                try {
                  var Ee = Xr(
                    a.type,
                    f,
                    a.elementType === a.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    Ee,
                    p
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (xe) {
                  Je(
                    a,
                    a.return,
                    xe
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = n.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Tc(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Tc(e);
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
  function vm(e, n, a) {
    var o = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        hr(e, a), o & 4 && qa(5, a);
        break;
      case 1:
        if (hr(e, a), o & 4)
          if (e = a.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (x) {
              Je(a, a.return, x);
            }
          else {
            var f = Xr(
              a.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              e.componentDidUpdate(
                f,
                n,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (x) {
              Je(
                a,
                a.return,
                x
              );
            }
          }
        o & 64 && hm(a), o & 512 && Va(a, a.return);
        break;
      case 3:
        if (hr(e, a), o & 64 && (e = a.updateQueue, e !== null)) {
          if (n = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                n = a.child.stateNode;
                break;
              case 1:
                n = a.child.stateNode;
            }
          try {
            ep(e, n);
          } catch (x) {
            Je(a, a.return, x);
          }
        }
        break;
      case 27:
        n === null && o & 4 && ym(a);
      case 26:
      case 5:
        hr(e, a), n === null && o & 4 && mm(a), o & 512 && Va(a, a.return);
        break;
      case 12:
        hr(e, a);
        break;
      case 13:
        hr(e, a), o & 4 && Sm(e, a), o & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = yw.bind(
          null,
          a
        ), Lw(e, a))));
        break;
      case 22:
        if (o = a.memoizedState !== null || Fn, !o) {
          n = n !== null && n.memoizedState !== null || ut, f = Fn;
          var p = ut;
          Fn = o, (ut = n) && !p ? pr(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : hr(e, a), Fn = f, ut = p;
        }
        break;
      case 30:
        break;
      default:
        hr(e, a);
    }
  }
  function xm(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, xm(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Os(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var nt = null, qt = !1;
  function Gn(e, n, a) {
    for (a = a.child; a !== null; )
      wm(e, n, a), a = a.sibling;
  }
  function wm(e, n, a) {
    if (ee && typeof ee.onCommitFiberUnmount == "function")
      try {
        ee.onCommitFiberUnmount(Y, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        ut || Cn(a, n), Gn(
          e,
          n,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        ut || Cn(a, n);
        var o = nt, f = qt;
        xr(a.type) && (nt = a.stateNode, qt = !1), Gn(
          e,
          n,
          a
        ), Ja(a.stateNode), nt = o, qt = f;
        break;
      case 5:
        ut || Cn(a, n);
      case 6:
        if (o = nt, f = qt, nt = null, Gn(
          e,
          n,
          a
        ), nt = o, qt = f, nt !== null)
          if (qt)
            try {
              (nt.nodeType === 9 ? nt.body : nt.nodeName === "HTML" ? nt.ownerDocument.body : nt).removeChild(a.stateNode);
            } catch (p) {
              Je(
                a,
                n,
                p
              );
            }
          else
            try {
              nt.removeChild(a.stateNode);
            } catch (p) {
              Je(
                a,
                n,
                p
              );
            }
        break;
      case 18:
        nt !== null && (qt ? (e = nt, ug(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), ai(e)) : ug(nt, a.stateNode));
        break;
      case 4:
        o = nt, f = qt, nt = a.stateNode.containerInfo, qt = !0, Gn(
          e,
          n,
          a
        ), nt = o, qt = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ut || dr(2, a, n), ut || dr(4, a, n), Gn(
          e,
          n,
          a
        );
        break;
      case 1:
        ut || (Cn(a, n), o = a.stateNode, typeof o.componentWillUnmount == "function" && pm(
          a,
          n,
          o
        )), Gn(
          e,
          n,
          a
        );
        break;
      case 21:
        Gn(
          e,
          n,
          a
        );
        break;
      case 22:
        ut = (o = ut) || a.memoizedState !== null, Gn(
          e,
          n,
          a
        ), ut = o;
        break;
      default:
        Gn(
          e,
          n,
          a
        );
    }
  }
  function Sm(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ai(e);
      } catch (a) {
        Je(n, n.return, a);
      }
  }
  function uw(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new bm()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new bm()), n;
      default:
        throw Error(i(435, e.tag));
    }
  }
  function ec(e, n) {
    var a = uw(e);
    n.forEach(function(o) {
      var f = bw.bind(null, e, o);
      a.has(o) || (a.add(o), o.then(f, f));
    });
  }
  function Qt(e, n) {
    var a = n.deletions;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var f = a[o], p = e, x = n, S = x;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (xr(S.type)) {
                nt = S.stateNode, qt = !1;
                break e;
              }
              break;
            case 5:
              nt = S.stateNode, qt = !1;
              break e;
            case 3:
            case 4:
              nt = S.stateNode.containerInfo, qt = !0;
              break e;
          }
          S = S.return;
        }
        if (nt === null) throw Error(i(160));
        wm(p, x, f), nt = null, qt = !1, p = f.alternate, p !== null && (p.return = null), f.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Em(n, e), n = n.sibling;
  }
  var bn = null;
  function Em(e, n) {
    var a = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Qt(n, e), Zt(e), o & 4 && (dr(3, e, e.return), qa(3, e), dr(5, e, e.return));
        break;
      case 1:
        Qt(n, e), Zt(e), o & 512 && (ut || a === null || Cn(a, a.return)), o & 64 && Fn && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? o : a.concat(o))));
        break;
      case 26:
        var f = bn;
        if (Qt(n, e), Zt(e), o & 512 && (ut || a === null || Cn(a, a.return)), o & 4) {
          var p = a !== null ? a.memoizedState : null;
          if (o = e.memoizedState, a === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, a = e.memoizedProps, f = f.ownerDocument || f;
                  t: switch (o) {
                    case "title":
                      p = f.getElementsByTagName("title")[0], (!p || p[da] || p[Rt] || p.namespaceURI === "http://www.w3.org/2000/svg" || p.hasAttribute("itemprop")) && (p = f.createElement(o), f.head.insertBefore(
                        p,
                        f.querySelector("head > title")
                      )), Tt(p, o, a), p[Rt] = e, xt(p), o = p;
                      break e;
                    case "link":
                      var x = yg(
                        "link",
                        "href",
                        f
                      ).get(o + (a.href || ""));
                      if (x) {
                        for (var S = 0; S < x.length; S++)
                          if (p = x[S], p.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && p.getAttribute("rel") === (a.rel == null ? null : a.rel) && p.getAttribute("title") === (a.title == null ? null : a.title) && p.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            x.splice(S, 1);
                            break t;
                          }
                      }
                      p = f.createElement(o), Tt(p, o, a), f.head.appendChild(p);
                      break;
                    case "meta":
                      if (x = yg(
                        "meta",
                        "content",
                        f
                      ).get(o + (a.content || ""))) {
                        for (S = 0; S < x.length; S++)
                          if (p = x[S], p.getAttribute("content") === (a.content == null ? null : "" + a.content) && p.getAttribute("name") === (a.name == null ? null : a.name) && p.getAttribute("property") === (a.property == null ? null : a.property) && p.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && p.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            x.splice(S, 1);
                            break t;
                          }
                      }
                      p = f.createElement(o), Tt(p, o, a), f.head.appendChild(p);
                      break;
                    default:
                      throw Error(i(468, o));
                  }
                  p[Rt] = e, xt(p), o = p;
                }
                e.stateNode = o;
              } else
                bg(
                  f,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = gg(
                f,
                o,
                e.memoizedProps
              );
          else
            p !== o ? (p === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : p.count--, o === null ? bg(
              f,
              e.type,
              e.stateNode
            ) : gg(
              f,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && Ku(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Qt(n, e), Zt(e), o & 512 && (ut || a === null || Cn(a, a.return)), a !== null && o & 4 && Ku(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Qt(n, e), Zt(e), o & 512 && (ut || a === null || Cn(a, a.return)), e.flags & 32) {
          f = e.stateNode;
          try {
            pl(f, "");
          } catch (P) {
            Je(e, e.return, P);
          }
        }
        o & 4 && e.stateNode != null && (f = e.memoizedProps, Ku(
          e,
          f,
          a !== null ? a.memoizedProps : f
        )), o & 1024 && (Wu = !0);
        break;
      case 6:
        if (Qt(n, e), Zt(e), o & 4) {
          if (e.stateNode === null)
            throw Error(i(162));
          o = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = o;
          } catch (P) {
            Je(e, e.return, P);
          }
        }
        break;
      case 3:
        if (No = null, f = bn, bn = Ro(n.containerInfo), Qt(n, e), bn = f, Zt(e), o & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            ai(n.containerInfo);
          } catch (P) {
            Je(e, e.return, P);
          }
        Wu && (Wu = !1, km(e));
        break;
      case 4:
        o = bn, bn = Ro(
          e.stateNode.containerInfo
        ), Qt(n, e), Zt(e), bn = o;
        break;
      case 12:
        Qt(n, e), Zt(e);
        break;
      case 13:
        Qt(n, e), Zt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (ic = Ve()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, ec(e, o)));
        break;
      case 22:
        f = e.memoizedState !== null;
        var D = a !== null && a.memoizedState !== null, U = Fn, K = ut;
        if (Fn = U || f, ut = K || D, Qt(n, e), ut = K, Fn = U, Zt(e), o & 8192)
          e: for (n = e.stateNode, n._visibility = f ? n._visibility & -2 : n._visibility | 1, f && (a === null || D || Fn || ut || Qr(e)), a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                D = a = n;
                try {
                  if (p = D.stateNode, f)
                    x = p.style, typeof x.setProperty == "function" ? x.setProperty("display", "none", "important") : x.display = "none";
                  else {
                    S = D.stateNode;
                    var $ = D.memoizedProps.style, q = $ != null && $.hasOwnProperty("display") ? $.display : null;
                    S.style.display = q == null || typeof q == "boolean" ? "" : ("" + q).trim();
                  }
                } catch (P) {
                  Je(D, D.return, P);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                D = n;
                try {
                  D.stateNode.nodeValue = f ? "" : D.memoizedProps;
                } catch (P) {
                  Je(D, D.return, P);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              a === n && (a = null), n = n.return;
            }
            a === n && (a = null), n.sibling.return = n.return, n = n.sibling;
          }
        o & 4 && (o = e.updateQueue, o !== null && (a = o.retryQueue, a !== null && (o.retryQueue = null, ec(e, a))));
        break;
      case 19:
        Qt(n, e), Zt(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, ec(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Qt(n, e), Zt(e);
    }
  }
  function Zt(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var a, o = e.return; o !== null; ) {
          if (gm(o)) {
            a = o;
            break;
          }
          o = o.return;
        }
        if (a == null) throw Error(i(160));
        switch (a.tag) {
          case 27:
            var f = a.stateNode, p = Ju(e);
            go(e, p, f);
            break;
          case 5:
            var x = a.stateNode;
            a.flags & 32 && (pl(x, ""), a.flags &= -33);
            var S = Ju(e);
            go(e, S, x);
            break;
          case 3:
          case 4:
            var D = a.stateNode.containerInfo, U = Ju(e);
            $u(
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
  function km(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        km(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function hr(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        vm(e, n.alternate, n), n = n.sibling;
  }
  function Qr(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          dr(4, n, n.return), Qr(n);
          break;
        case 1:
          Cn(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == "function" && pm(
            n,
            n.return,
            a
          ), Qr(n);
          break;
        case 27:
          Ja(n.stateNode);
        case 26:
        case 5:
          Cn(n, n.return), Qr(n);
          break;
        case 22:
          n.memoizedState === null && Qr(n);
          break;
        case 30:
          Qr(n);
          break;
        default:
          Qr(n);
      }
      e = e.sibling;
    }
  }
  function pr(e, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate, f = e, p = n, x = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          pr(
            f,
            p,
            a
          ), qa(4, p);
          break;
        case 1:
          if (pr(
            f,
            p,
            a
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
                  Wh(D[f], S);
            } catch (U) {
              Je(o, o.return, U);
            }
          }
          a && x & 64 && hm(p), Va(p, p.return);
          break;
        case 27:
          ym(p);
        case 26:
        case 5:
          pr(
            f,
            p,
            a
          ), a && o === null && x & 4 && mm(p), Va(p, p.return);
          break;
        case 12:
          pr(
            f,
            p,
            a
          );
          break;
        case 13:
          pr(
            f,
            p,
            a
          ), a && x & 4 && Sm(f, p);
          break;
        case 22:
          p.memoizedState === null && pr(
            f,
            p,
            a
          ), Va(p, p.return);
          break;
        case 30:
          break;
        default:
          pr(
            f,
            p,
            a
          );
      }
      n = n.sibling;
    }
  }
  function tc(e, n) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Ta(a));
  }
  function nc(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && Ta(e));
  }
  function An(e, n, a, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Cm(
          e,
          n,
          a,
          o
        ), n = n.sibling;
  }
  function Cm(e, n, a, o) {
    var f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        An(
          e,
          n,
          a,
          o
        ), f & 2048 && qa(9, n);
        break;
      case 1:
        An(
          e,
          n,
          a,
          o
        );
        break;
      case 3:
        An(
          e,
          n,
          a,
          o
        ), f & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && Ta(e)));
        break;
      case 12:
        if (f & 2048) {
          An(
            e,
            n,
            a,
            o
          ), e = n.stateNode;
          try {
            var p = n.memoizedProps, x = p.id, S = p.onPostCommit;
            typeof S == "function" && S(
              x,
              n.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (D) {
            Je(n, n.return, D);
          }
        } else
          An(
            e,
            n,
            a,
            o
          );
        break;
      case 13:
        An(
          e,
          n,
          a,
          o
        );
        break;
      case 23:
        break;
      case 22:
        p = n.stateNode, x = n.alternate, n.memoizedState !== null ? p._visibility & 2 ? An(
          e,
          n,
          a,
          o
        ) : Pa(e, n) : p._visibility & 2 ? An(
          e,
          n,
          a,
          o
        ) : (p._visibility |= 2, Ml(
          e,
          n,
          a,
          o,
          (n.subtreeFlags & 10256) !== 0
        )), f & 2048 && tc(x, n);
        break;
      case 24:
        An(
          e,
          n,
          a,
          o
        ), f & 2048 && nc(n.alternate, n);
        break;
      default:
        An(
          e,
          n,
          a,
          o
        );
    }
  }
  function Ml(e, n, a, o, f) {
    for (f = f && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var p = e, x = n, S = a, D = o, U = x.flags;
      switch (x.tag) {
        case 0:
        case 11:
        case 15:
          Ml(
            p,
            x,
            S,
            D,
            f
          ), qa(8, x);
          break;
        case 23:
          break;
        case 22:
          var K = x.stateNode;
          x.memoizedState !== null ? K._visibility & 2 ? Ml(
            p,
            x,
            S,
            D,
            f
          ) : Pa(
            p,
            x
          ) : (K._visibility |= 2, Ml(
            p,
            x,
            S,
            D,
            f
          )), f && U & 2048 && tc(
            x.alternate,
            x
          );
          break;
        case 24:
          Ml(
            p,
            x,
            S,
            D,
            f
          ), f && U & 2048 && nc(x.alternate, x);
          break;
        default:
          Ml(
            p,
            x,
            S,
            D,
            f
          );
      }
      n = n.sibling;
    }
  }
  function Pa(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = e, o = n, f = o.flags;
        switch (o.tag) {
          case 22:
            Pa(a, o), f & 2048 && tc(
              o.alternate,
              o
            );
            break;
          case 24:
            Pa(a, o), f & 2048 && nc(o.alternate, o);
            break;
          default:
            Pa(a, o);
        }
        n = n.sibling;
      }
  }
  var Ya = 8192;
  function zl(e) {
    if (e.subtreeFlags & Ya)
      for (e = e.child; e !== null; )
        Am(e), e = e.sibling;
  }
  function Am(e) {
    switch (e.tag) {
      case 26:
        zl(e), e.flags & Ya && e.memoizedState !== null && Qw(
          bn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        zl(e);
        break;
      case 3:
      case 4:
        var n = bn;
        bn = Ro(e.stateNode.containerInfo), zl(e), bn = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Ya, Ya = 16777216, zl(e), Ya = n) : zl(e));
        break;
      default:
        zl(e);
    }
  }
  function Tm(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function Fa(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          St = o, Rm(
            o,
            e
          );
        }
      Tm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        _m(e), e = e.sibling;
  }
  function _m(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Fa(e), e.flags & 2048 && dr(9, e, e.return);
        break;
      case 3:
        Fa(e);
        break;
      case 12:
        Fa(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, yo(e)) : Fa(e);
        break;
      default:
        Fa(e);
    }
  }
  function yo(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          St = o, Rm(
            o,
            e
          );
        }
      Tm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          dr(8, n, n.return), yo(n);
          break;
        case 22:
          a = n.stateNode, a._visibility & 2 && (a._visibility &= -3, yo(n));
          break;
        default:
          yo(n);
      }
      e = e.sibling;
    }
  }
  function Rm(e, n) {
    for (; St !== null; ) {
      var a = St;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          dr(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var o = a.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Ta(a.memoizedState.cache);
      }
      if (o = a.child, o !== null) o.return = a, St = o;
      else
        e: for (a = e; St !== null; ) {
          o = St;
          var f = o.sibling, p = o.return;
          if (xm(o), o === a) {
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
  var cw = {
    getCacheForType: function(e) {
      var n = Dt(mt), a = n.data.get(e);
      return a === void 0 && (a = e(), n.data.set(e, a)), a;
    }
  }, fw = typeof WeakMap == "function" ? WeakMap : Map, Ge = 0, We = null, ze = null, Ue = 0, Xe = 0, Kt = null, mr = !1, Ll = !1, rc = !1, Xn = 0, ot = 0, gr = 0, Zr = 0, lc = 0, fn = 0, jl = 0, Ga = null, Vt = null, ac = !1, ic = 0, bo = 1 / 0, vo = null, yr = null, At = 0, br = null, Ul = null, Bl = 0, oc = 0, sc = null, Dm = null, Xa = 0, uc = null;
  function Jt() {
    if ((Ge & 2) !== 0 && Ue !== 0)
      return Ue & -Ue;
    if (B.T !== null) {
      var e = Cl;
      return e !== 0 ? e : gc();
    }
    return Gd();
  }
  function Nm() {
    fn === 0 && (fn = (Ue & 536870912) === 0 || Pe ? Vd() : 536870912);
    var e = cn.current;
    return e !== null && (e.flags |= 32), fn;
  }
  function $t(e, n, a) {
    (e === We && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null) && (Il(e, 0), vr(
      e,
      Ue,
      fn,
      !1
    )), fa(e, a), ((Ge & 2) === 0 || e !== We) && (e === We && ((Ge & 2) === 0 && (Zr |= a), ot === 4 && vr(
      e,
      Ue,
      fn,
      !1
    )), Tn(e));
  }
  function Om(e, n, a) {
    if ((Ge & 6) !== 0) throw Error(i(327));
    var o = !a && (n & 124) === 0 && (n & e.expiredLanes) === 0 || nn(e, n), f = o ? pw(e, n) : dc(e, n, !0), p = o;
    do {
      if (f === 0) {
        Ll && !o && vr(e, n, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, p && !dw(a)) {
          f = dc(e, n, !1), p = !1;
          continue;
        }
        if (f === 2) {
          if (p = n, e.errorRecoveryDisabledLanes & p)
            var x = 0;
          else
            x = e.pendingLanes & -536870913, x = x !== 0 ? x : x & 536870912 ? 536870912 : 0;
          if (x !== 0) {
            n = x;
            e: {
              var S = e;
              f = Ga;
              var D = S.current.memoizedState.isDehydrated;
              if (D && (Il(S, x).flags |= 256), x = dc(
                S,
                x,
                !1
              ), x !== 2) {
                if (rc && !D) {
                  S.errorRecoveryDisabledLanes |= p, Zr |= p, f = 4;
                  break e;
                }
                p = Vt, Vt = f, p !== null && (Vt === null ? Vt = p : Vt.push.apply(
                  Vt,
                  p
                ));
              }
              f = x;
            }
            if (p = !1, f !== 2) continue;
          }
        }
        if (f === 1) {
          Il(e, 0), vr(e, n, 0, !0);
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
              vr(
                o,
                n,
                fn,
                !mr
              );
              break e;
            case 2:
              Vt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((n & 62914560) === n && (f = ic + 300 - Ve(), 10 < f)) {
            if (vr(
              o,
              n,
              fn,
              !mr
            ), vt(o, 0, !0) !== 0) break e;
            o.timeoutHandle = og(
              Mm.bind(
                null,
                o,
                a,
                Vt,
                vo,
                ac,
                n,
                fn,
                Zr,
                jl,
                mr,
                p,
                2,
                -0,
                0
              ),
              f
            );
            break e;
          }
          Mm(
            o,
            a,
            Vt,
            vo,
            ac,
            n,
            fn,
            Zr,
            jl,
            mr,
            p,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Tn(e);
  }
  function Mm(e, n, a, o, f, p, x, S, D, U, K, $, q, P) {
    if (e.timeoutHandle = -1, $ = n.subtreeFlags, ($ & 8192 || ($ & 16785408) === 16785408) && (ei = { stylesheets: null, count: 0, unsuspend: Xw }, Am(n), $ = Zw(), $ !== null)) {
      e.cancelPendingCommit = $(
        Hm.bind(
          null,
          e,
          n,
          p,
          a,
          o,
          f,
          x,
          S,
          D,
          K,
          1,
          q,
          P
        )
      ), vr(e, p, x, !U);
      return;
    }
    Hm(
      e,
      n,
      p,
      a,
      o,
      f,
      x,
      S,
      D
    );
  }
  function dw(e) {
    for (var n = e; ; ) {
      var a = n.tag;
      if ((a === 0 || a === 11 || a === 15) && n.flags & 16384 && (a = n.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var o = 0; o < a.length; o++) {
          var f = a[o], p = f.getSnapshot;
          f = f.value;
          try {
            if (!Gt(p(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = n.child, n.subtreeFlags & 16384 && a !== null)
        a.return = n, n = a;
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
  function vr(e, n, a, o) {
    n &= ~lc, n &= ~Zr, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
    for (var f = n; 0 < f; ) {
      var p = 31 - me(f), x = 1 << p;
      o[p] = -1, f &= ~x;
    }
    a !== 0 && Yd(e, a, n);
  }
  function xo() {
    return (Ge & 6) === 0 ? (Qa(0), !1) : !0;
  }
  function cc() {
    if (ze !== null) {
      if (Xe === 0)
        var e = ze.return;
      else
        e = ze, In = Pr = null, Tu(e), Nl = null, Ba = 0, e = ze;
      for (; e !== null; )
        dm(e.alternate, e), e = e.return;
      ze = null;
    }
  }
  function Il(e, n) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, Dw(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), cc(), We = e, ze = a = jn(e.current, null), Ue = n, Xe = 0, Kt = null, mr = !1, Ll = nn(e, n), rc = !1, jl = fn = lc = Zr = gr = ot = 0, Vt = Ga = null, ac = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var f = 31 - me(o), p = 1 << f;
        n |= e[f], o &= ~p;
      }
    return Xn = n, qi(), a;
  }
  function zm(e, n) {
    De = null, B.H = io, n === Ra || n === Ki ? (n = Jh(), Xe = 3) : n === Qh ? (n = Jh(), Xe = 4) : Xe = n === $p ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Kt = n, ze === null && (ot = 1, fo(
      e,
      an(n, e.current)
    ));
  }
  function Lm() {
    var e = B.H;
    return B.H = io, e === null ? io : e;
  }
  function jm() {
    var e = B.A;
    return B.A = cw, e;
  }
  function fc() {
    ot = 4, mr || (Ue & 4194048) !== Ue && cn.current !== null || (Ll = !0), (gr & 134217727) === 0 && (Zr & 134217727) === 0 || We === null || vr(
      We,
      Ue,
      fn,
      !1
    );
  }
  function dc(e, n, a) {
    var o = Ge;
    Ge |= 2;
    var f = Lm(), p = jm();
    (We !== e || Ue !== n) && (vo = null, Il(e, n)), n = !1;
    var x = ot;
    e: do
      try {
        if (Xe !== 0 && ze !== null) {
          var S = ze, D = Kt;
          switch (Xe) {
            case 8:
              cc(), x = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              cn.current === null && (n = !0);
              var U = Xe;
              if (Xe = 0, Kt = null, Hl(e, S, D, U), a && Ll) {
                x = 0;
                break e;
              }
              break;
            default:
              U = Xe, Xe = 0, Kt = null, Hl(e, S, D, U);
          }
        }
        hw(), x = ot;
        break;
      } catch (K) {
        zm(e, K);
      }
    while (!0);
    return n && e.shellSuspendCounter++, In = Pr = null, Ge = o, B.H = f, B.A = p, ze === null && (We = null, Ue = 0, qi()), x;
  }
  function hw() {
    for (; ze !== null; ) Um(ze);
  }
  function pw(e, n) {
    var a = Ge;
    Ge |= 2;
    var o = Lm(), f = jm();
    We !== e || Ue !== n ? (vo = null, bo = Ve() + 500, Il(e, n)) : Ll = nn(
      e,
      n
    );
    e: do
      try {
        if (Xe !== 0 && ze !== null) {
          n = ze;
          var p = Kt;
          t: switch (Xe) {
            case 1:
              Xe = 0, Kt = null, Hl(e, n, p, 1);
              break;
            case 2:
            case 9:
              if (Zh(p)) {
                Xe = 0, Kt = null, Bm(n);
                break;
              }
              n = function() {
                Xe !== 2 && Xe !== 9 || We !== e || (Xe = 7), Tn(e);
              }, p.then(n, n);
              break e;
            case 3:
              Xe = 7;
              break e;
            case 4:
              Xe = 5;
              break e;
            case 7:
              Zh(p) ? (Xe = 0, Kt = null, Bm(n)) : (Xe = 0, Kt = null, Hl(e, n, p, 7));
              break;
            case 5:
              var x = null;
              switch (ze.tag) {
                case 26:
                  x = ze.memoizedState;
                case 5:
                case 27:
                  var S = ze;
                  if (!x || vg(x)) {
                    Xe = 0, Kt = null;
                    var D = S.sibling;
                    if (D !== null) ze = D;
                    else {
                      var U = S.return;
                      U !== null ? (ze = U, wo(U)) : ze = null;
                    }
                    break t;
                  }
              }
              Xe = 0, Kt = null, Hl(e, n, p, 5);
              break;
            case 6:
              Xe = 0, Kt = null, Hl(e, n, p, 6);
              break;
            case 8:
              cc(), ot = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        mw();
        break;
      } catch (K) {
        zm(e, K);
      }
    while (!0);
    return In = Pr = null, B.H = o, B.A = f, Ge = a, ze !== null ? 0 : (We = null, Ue = 0, qi(), ot);
  }
  function mw() {
    for (; ze !== null && !Me(); )
      Um(ze);
  }
  function Um(e) {
    var n = cm(e.alternate, e, Xn);
    e.memoizedProps = e.pendingProps, n === null ? wo(e) : ze = n;
  }
  function Bm(e) {
    var n = e, a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = lm(
          a,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ue
        );
        break;
      case 11:
        n = lm(
          a,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ue
        );
        break;
      case 5:
        Tu(n);
      default:
        dm(a, n), n = ze = Ih(n, Xn), n = cm(a, n, Xn);
    }
    e.memoizedProps = e.pendingProps, n === null ? wo(e) : ze = n;
  }
  function Hl(e, n, a, o) {
    In = Pr = null, Tu(n), Nl = null, Ba = 0;
    var f = n.return;
    try {
      if (lw(
        e,
        f,
        n,
        a,
        Ue
      )) {
        ot = 1, fo(
          e,
          an(a, e.current)
        ), ze = null;
        return;
      }
    } catch (p) {
      if (f !== null) throw ze = f, p;
      ot = 1, fo(
        e,
        an(a, e.current)
      ), ze = null;
      return;
    }
    n.flags & 32768 ? (Pe || o === 1 ? e = !0 : Ll || (Ue & 536870912) !== 0 ? e = !1 : (mr = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = cn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), Im(n, e)) : wo(n);
  }
  function wo(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        Im(
          n,
          mr
        );
        return;
      }
      e = n.return;
      var a = iw(
        n.alternate,
        n,
        Xn
      );
      if (a !== null) {
        ze = a;
        return;
      }
      if (n = n.sibling, n !== null) {
        ze = n;
        return;
      }
      ze = n = e;
    } while (n !== null);
    ot === 0 && (ot = 5);
  }
  function Im(e, n) {
    do {
      var a = ow(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, ze = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !n && (e = e.sibling, e !== null)) {
        ze = e;
        return;
      }
      ze = e = a;
    } while (e !== null);
    ot = 6, ze = null;
  }
  function Hm(e, n, a, o, f, p, x, S, D) {
    e.cancelPendingCommit = null;
    do
      So();
    while (At !== 0);
    if ((Ge & 6) !== 0) throw Error(i(327));
    if (n !== null) {
      if (n === e.current) throw Error(i(177));
      if (p = n.lanes | n.childLanes, p |= nu, X1(
        e,
        a,
        p,
        x,
        S,
        D
      ), e === We && (ze = We = null, Ue = 0), Ul = n, br = e, Bl = a, oc = p, sc = f, Dm = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, vw(ct, function() {
        return Fm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
        o = B.T, B.T = null, f = W.p, W.p = 2, x = Ge, Ge |= 4;
        try {
          sw(e, n, a);
        } finally {
          Ge = x, W.p = f, B.T = o;
        }
      }
      At = 1, qm(), Vm(), Pm();
    }
  }
  function qm() {
    if (At === 1) {
      At = 0;
      var e = br, n = Ul, a = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || a) {
        a = B.T, B.T = null;
        var o = W.p;
        W.p = 2;
        var f = Ge;
        Ge |= 4;
        try {
          Em(n, e);
          var p = kc, x = Rh(e.containerInfo), S = p.focusedElem, D = p.selectionRange;
          if (x !== S && S && S.ownerDocument && _h(
            S.ownerDocument.documentElement,
            S
          )) {
            if (D !== null && Js(S)) {
              var U = D.start, K = D.end;
              if (K === void 0 && (K = U), "selectionStart" in S)
                S.selectionStart = U, S.selectionEnd = Math.min(
                  K,
                  S.value.length
                );
              else {
                var $ = S.ownerDocument || document, q = $ && $.defaultView || window;
                if (q.getSelection) {
                  var P = q.getSelection(), Ee = S.textContent.length, xe = Math.min(D.start, Ee), Ke = D.end === void 0 ? xe : Math.min(D.end, Ee);
                  !P.extend && xe > Ke && (x = Ke, Ke = xe, xe = x);
                  var z = Th(
                    S,
                    xe
                  ), O = Th(
                    S,
                    Ke
                  );
                  if (z && O && (P.rangeCount !== 1 || P.anchorNode !== z.node || P.anchorOffset !== z.offset || P.focusNode !== O.node || P.focusOffset !== O.offset)) {
                    var L = $.createRange();
                    L.setStart(z.node, z.offset), P.removeAllRanges(), xe > Ke ? (P.addRange(L), P.extend(O.node, O.offset)) : (L.setEnd(O.node, O.offset), P.addRange(L));
                  }
                }
              }
            }
            for ($ = [], P = S; P = P.parentNode; )
              P.nodeType === 1 && $.push({
                element: P,
                left: P.scrollLeft,
                top: P.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < $.length; S++) {
              var J = $[S];
              J.element.scrollLeft = J.left, J.element.scrollTop = J.top;
            }
          }
          zo = !!Ec, kc = Ec = null;
        } finally {
          Ge = f, W.p = o, B.T = a;
        }
      }
      e.current = n, At = 2;
    }
  }
  function Vm() {
    if (At === 2) {
      At = 0;
      var e = br, n = Ul, a = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || a) {
        a = B.T, B.T = null;
        var o = W.p;
        W.p = 2;
        var f = Ge;
        Ge |= 4;
        try {
          vm(e, n.alternate, n);
        } finally {
          Ge = f, W.p = o, B.T = a;
        }
      }
      At = 3;
    }
  }
  function Pm() {
    if (At === 4 || At === 3) {
      At = 0, Ae();
      var e = br, n = Ul, a = Bl, o = Dm;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? At = 5 : (At = 0, Ul = br = null, Ym(e, e.pendingLanes));
      var f = e.pendingLanes;
      if (f === 0 && (yr = null), Ds(a), n = n.stateNode, ee && typeof ee.onCommitFiberRoot == "function")
        try {
          ee.onCommitFiberRoot(
            Y,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        n = B.T, f = W.p, W.p = 2, B.T = null;
        try {
          for (var p = e.onRecoverableError, x = 0; x < o.length; x++) {
            var S = o[x];
            p(S.value, {
              componentStack: S.stack
            });
          }
        } finally {
          B.T = n, W.p = f;
        }
      }
      (Bl & 3) !== 0 && So(), Tn(e), f = e.pendingLanes, (a & 4194090) !== 0 && (f & 42) !== 0 ? e === uc ? Xa++ : (Xa = 0, uc = e) : Xa = 0, Qa(0);
    }
  }
  function Ym(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, Ta(n)));
  }
  function So(e) {
    return qm(), Vm(), Pm(), Fm();
  }
  function Fm() {
    if (At !== 5) return !1;
    var e = br, n = oc;
    oc = 0;
    var a = Ds(Bl), o = B.T, f = W.p;
    try {
      W.p = 32 > a ? 32 : a, B.T = null, a = sc, sc = null;
      var p = br, x = Bl;
      if (At = 0, Ul = br = null, Bl = 0, (Ge & 6) !== 0) throw Error(i(331));
      var S = Ge;
      if (Ge |= 4, _m(p.current), Cm(
        p,
        p.current,
        x,
        a
      ), Ge = S, Qa(0, !1), ee && typeof ee.onPostCommitFiberRoot == "function")
        try {
          ee.onPostCommitFiberRoot(Y, p);
        } catch {
        }
      return !0;
    } finally {
      W.p = f, B.T = o, Ym(e, n);
    }
  }
  function Gm(e, n, a) {
    n = an(a, n), n = qu(e.stateNode, n, 2), e = sr(e, n, 2), e !== null && (fa(e, 2), Tn(e));
  }
  function Je(e, n, a) {
    if (e.tag === 3)
      Gm(e, e, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Gm(
            n,
            e,
            a
          );
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (yr === null || !yr.has(o))) {
            e = an(a, e), a = Kp(2), o = sr(n, a, 2), o !== null && (Jp(
              a,
              o,
              n,
              e
            ), fa(o, 2), Tn(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function hc(e, n, a) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new fw();
      var f = /* @__PURE__ */ new Set();
      o.set(n, f);
    } else
      f = o.get(n), f === void 0 && (f = /* @__PURE__ */ new Set(), o.set(n, f));
    f.has(a) || (rc = !0, f.add(a), e = gw.bind(null, e, n, a), n.then(e, e));
  }
  function gw(e, n, a) {
    var o = e.pingCache;
    o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, We === e && (Ue & a) === a && (ot === 4 || ot === 3 && (Ue & 62914560) === Ue && 300 > Ve() - ic ? (Ge & 2) === 0 && Il(e, 0) : lc |= a, jl === Ue && (jl = 0)), Tn(e);
  }
  function Xm(e, n) {
    n === 0 && (n = Pd()), e = wl(e, n), e !== null && (fa(e, n), Tn(e));
  }
  function yw(e) {
    var n = e.memoizedState, a = 0;
    n !== null && (a = n.retryLane), Xm(e, a);
  }
  function bw(e, n) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, f = e.memoizedState;
        f !== null && (a = f.retryLane);
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
    o !== null && o.delete(n), Xm(e, a);
  }
  function vw(e, n) {
    return Se(e, n);
  }
  var Eo = null, ql = null, pc = !1, ko = !1, mc = !1, Kr = 0;
  function Tn(e) {
    e !== ql && e.next === null && (ql === null ? Eo = ql = e : ql = ql.next = e), ko = !0, pc || (pc = !0, ww());
  }
  function Qa(e, n) {
    if (!mc && ko) {
      mc = !0;
      do
        for (var a = !1, o = Eo; o !== null; ) {
          if (e !== 0) {
            var f = o.pendingLanes;
            if (f === 0) var p = 0;
            else {
              var x = o.suspendedLanes, S = o.pingedLanes;
              p = (1 << 31 - me(42 | e) + 1) - 1, p &= f & ~(x & ~S), p = p & 201326741 ? p & 201326741 | 1 : p ? p | 2 : 0;
            }
            p !== 0 && (a = !0, Jm(o, p));
          } else
            p = Ue, p = vt(
              o,
              o === We ? p : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (p & 3) === 0 || nn(o, p) || (a = !0, Jm(o, p));
          o = o.next;
        }
      while (a);
      mc = !1;
    }
  }
  function xw() {
    Qm();
  }
  function Qm() {
    ko = pc = !1;
    var e = 0;
    Kr !== 0 && (Rw() && (e = Kr), Kr = 0);
    for (var n = Ve(), a = null, o = Eo; o !== null; ) {
      var f = o.next, p = Zm(o, n);
      p === 0 ? (o.next = null, a === null ? Eo = f : a.next = f, f === null && (ql = a)) : (a = o, (e !== 0 || (p & 3) !== 0) && (ko = !0)), o = f;
    }
    Qa(e);
  }
  function Zm(e, n) {
    for (var a = e.suspendedLanes, o = e.pingedLanes, f = e.expirationTimes, p = e.pendingLanes & -62914561; 0 < p; ) {
      var x = 31 - me(p), S = 1 << x, D = f[x];
      D === -1 ? ((S & a) === 0 || (S & o) !== 0) && (f[x] = gn(S, n)) : D <= n && (e.expiredLanes |= S), p &= ~S;
    }
    if (n = We, a = Ue, a = vt(
      e,
      e === n ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, a === 0 || e === n && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && ve(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || nn(e, a)) {
      if (n = a & -a, n === e.callbackPriority) return n;
      switch (o !== null && ve(o), Ds(a)) {
        case 2:
        case 8:
          a = Ye;
          break;
        case 32:
          a = ct;
          break;
        case 268435456:
          a = Mn;
          break;
        default:
          a = ct;
      }
      return o = Km.bind(null, e), a = Se(a, o), e.callbackPriority = n, e.callbackNode = a, n;
    }
    return o !== null && o !== null && ve(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Km(e, n) {
    if (At !== 0 && At !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (So() && e.callbackNode !== a)
      return null;
    var o = Ue;
    return o = vt(
      e,
      e === We ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (Om(e, o, n), Zm(e, Ve()), e.callbackNode != null && e.callbackNode === a ? Km.bind(null, e) : null);
  }
  function Jm(e, n) {
    if (So()) return null;
    Om(e, n, !0);
  }
  function ww() {
    Nw(function() {
      (Ge & 6) !== 0 ? Se(
        Fe,
        xw
      ) : Qm();
    });
  }
  function gc() {
    return Kr === 0 && (Kr = Vd()), Kr;
  }
  function $m(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : zi("" + e);
  }
  function Wm(e, n) {
    var a = n.ownerDocument.createElement("input");
    return a.name = n.name, a.value = n.value, e.id && a.setAttribute("form", e.id), n.parentNode.insertBefore(a, n), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function Sw(e, n, a, o, f) {
    if (n === "submit" && a && a.stateNode === f) {
      var p = $m(
        (f[Bt] || null).action
      ), x = o.submitter;
      x && (n = (n = x[Bt] || null) ? $m(n.formAction) : x.getAttribute("formAction"), n !== null && (p = n, x = null));
      var S = new Bi(
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
                if (Kr !== 0) {
                  var D = x ? Wm(f, x) : new FormData(f);
                  ju(
                    a,
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
                typeof p == "function" && (S.preventDefault(), D = x ? Wm(f, x) : new FormData(f), ju(
                  a,
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
  for (var yc = 0; yc < tu.length; yc++) {
    var bc = tu[yc], Ew = bc.toLowerCase(), kw = bc[0].toUpperCase() + bc.slice(1);
    yn(
      Ew,
      "on" + kw
    );
  }
  yn(Oh, "onAnimationEnd"), yn(Mh, "onAnimationIteration"), yn(zh, "onAnimationStart"), yn("dblclick", "onDoubleClick"), yn("focusin", "onFocus"), yn("focusout", "onBlur"), yn(qx, "onTransitionRun"), yn(Vx, "onTransitionStart"), yn(Px, "onTransitionCancel"), yn(Lh, "onTransitionEnd"), fl("onMouseEnter", ["mouseout", "mouseover"]), fl("onMouseLeave", ["mouseout", "mouseover"]), fl("onPointerEnter", ["pointerout", "pointerover"]), fl("onPointerLeave", ["pointerout", "pointerover"]), zr(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), zr(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), zr("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), zr(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), zr(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), zr(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Za = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Cw = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Za)
  );
  function eg(e, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var o = e[a], f = o.event;
      o = o.listeners;
      e: {
        var p = void 0;
        if (n)
          for (var x = o.length - 1; 0 <= x; x--) {
            var S = o[x], D = S.instance, U = S.currentTarget;
            if (S = S.listener, D !== p && f.isPropagationStopped())
              break e;
            p = S, f.currentTarget = U;
            try {
              p(f);
            } catch (K) {
              co(K);
            }
            f.currentTarget = null, p = D;
          }
        else
          for (x = 0; x < o.length; x++) {
            if (S = o[x], D = S.instance, U = S.currentTarget, S = S.listener, D !== p && f.isPropagationStopped())
              break e;
            p = S, f.currentTarget = U;
            try {
              p(f);
            } catch (K) {
              co(K);
            }
            f.currentTarget = null, p = D;
          }
      }
    }
  }
  function Le(e, n) {
    var a = n[Ns];
    a === void 0 && (a = n[Ns] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    a.has(o) || (tg(n, e, 2, !1), a.add(o));
  }
  function vc(e, n, a) {
    var o = 0;
    n && (o |= 4), tg(
      a,
      e,
      o,
      n
    );
  }
  var Co = "_reactListening" + Math.random().toString(36).slice(2);
  function xc(e) {
    if (!e[Co]) {
      e[Co] = !0, Qd.forEach(function(a) {
        a !== "selectionchange" && (Cw.has(a) || vc(a, !1, e), vc(a, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Co] || (n[Co] = !0, vc("selectionchange", !1, n));
    }
  }
  function tg(e, n, a, o) {
    switch (Cg(n)) {
      case 2:
        var f = $w;
        break;
      case 8:
        f = Ww;
        break;
      default:
        f = zc;
    }
    a = f.bind(
      null,
      n,
      a,
      e
    ), f = void 0, !Vs || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (f = !0), o ? f !== void 0 ? e.addEventListener(n, a, {
      capture: !0,
      passive: f
    }) : e.addEventListener(n, a, !0) : f !== void 0 ? e.addEventListener(n, a, {
      passive: f
    }) : e.addEventListener(n, a, !1);
  }
  function wc(e, n, a, o, f) {
    var p = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var x = o.tag;
        if (x === 3 || x === 4) {
          var S = o.stateNode.containerInfo;
          if (S === f) break;
          if (x === 4)
            for (x = o.return; x !== null; ) {
              var D = x.tag;
              if ((D === 3 || D === 4) && x.stateNode.containerInfo === f)
                return;
              x = x.return;
            }
          for (; S !== null; ) {
            if (x = sl(S), x === null) return;
            if (D = x.tag, D === 5 || D === 6 || D === 26 || D === 27) {
              o = p = x;
              continue e;
            }
            S = S.parentNode;
          }
        }
        o = o.return;
      }
    sh(function() {
      var U = p, K = Hs(a), $ = [];
      e: {
        var q = jh.get(e);
        if (q !== void 0) {
          var P = Bi, Ee = e;
          switch (e) {
            case "keypress":
              if (ji(a) === 0) break e;
            case "keydown":
            case "keyup":
              P = vx;
              break;
            case "focusin":
              Ee = "focus", P = Gs;
              break;
            case "focusout":
              Ee = "blur", P = Gs;
              break;
            case "beforeblur":
            case "afterblur":
              P = Gs;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              P = fh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              P = ox;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              P = Sx;
              break;
            case Oh:
            case Mh:
            case zh:
              P = cx;
              break;
            case Lh:
              P = kx;
              break;
            case "scroll":
            case "scrollend":
              P = ax;
              break;
            case "wheel":
              P = Ax;
              break;
            case "copy":
            case "cut":
            case "paste":
              P = dx;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              P = hh;
              break;
            case "toggle":
            case "beforetoggle":
              P = _x;
          }
          var xe = (n & 4) !== 0, Ke = !xe && (e === "scroll" || e === "scrollend"), z = xe ? q !== null ? q + "Capture" : null : q;
          xe = [];
          for (var O = U, L; O !== null; ) {
            var J = O;
            if (L = J.stateNode, J = J.tag, J !== 5 && J !== 26 && J !== 27 || L === null || z === null || (J = pa(O, z), J != null && xe.push(
              Ka(O, J, L)
            )), Ke) break;
            O = O.return;
          }
          0 < xe.length && (q = new P(
            q,
            Ee,
            null,
            a,
            K
          ), $.push({ event: q, listeners: xe }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (q = e === "mouseover" || e === "pointerover", P = e === "mouseout" || e === "pointerout", q && a !== Is && (Ee = a.relatedTarget || a.fromElement) && (sl(Ee) || Ee[ol]))
            break e;
          if ((P || q) && (q = K.window === K ? K : (q = K.ownerDocument) ? q.defaultView || q.parentWindow : window, P ? (Ee = a.relatedTarget || a.toElement, P = U, Ee = Ee ? sl(Ee) : null, Ee !== null && (Ke = u(Ee), xe = Ee.tag, Ee !== Ke || xe !== 5 && xe !== 27 && xe !== 6) && (Ee = null)) : (P = null, Ee = U), P !== Ee)) {
            if (xe = fh, J = "onMouseLeave", z = "onMouseEnter", O = "mouse", (e === "pointerout" || e === "pointerover") && (xe = hh, J = "onPointerLeave", z = "onPointerEnter", O = "pointer"), Ke = P == null ? q : ha(P), L = Ee == null ? q : ha(Ee), q = new xe(
              J,
              O + "leave",
              P,
              a,
              K
            ), q.target = Ke, q.relatedTarget = L, J = null, sl(K) === U && (xe = new xe(
              z,
              O + "enter",
              Ee,
              a,
              K
            ), xe.target = L, xe.relatedTarget = Ke, J = xe), Ke = J, P && Ee)
              t: {
                for (xe = P, z = Ee, O = 0, L = xe; L; L = Vl(L))
                  O++;
                for (L = 0, J = z; J; J = Vl(J))
                  L++;
                for (; 0 < O - L; )
                  xe = Vl(xe), O--;
                for (; 0 < L - O; )
                  z = Vl(z), L--;
                for (; O--; ) {
                  if (xe === z || z !== null && xe === z.alternate)
                    break t;
                  xe = Vl(xe), z = Vl(z);
                }
                xe = null;
              }
            else xe = null;
            P !== null && ng(
              $,
              q,
              P,
              xe,
              !1
            ), Ee !== null && Ke !== null && ng(
              $,
              Ke,
              Ee,
              xe,
              !0
            );
          }
        }
        e: {
          if (q = U ? ha(U) : window, P = q.nodeName && q.nodeName.toLowerCase(), P === "select" || P === "input" && q.type === "file")
            var ce = wh;
          else if (vh(q))
            if (Sh)
              ce = Bx;
            else {
              ce = jx;
              var Oe = Lx;
            }
          else
            P = q.nodeName, !P || P.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? U && Bs(U.elementType) && (ce = wh) : ce = Ux;
          if (ce && (ce = ce(e, U))) {
            xh(
              $,
              ce,
              a,
              K
            );
            break e;
          }
          Oe && Oe(e, q, U), e === "focusout" && U && q.type === "number" && U.memoizedProps.value != null && Us(q, "number", q.value);
        }
        switch (Oe = U ? ha(U) : window, e) {
          case "focusin":
            (vh(Oe) || Oe.contentEditable === "true") && (bl = Oe, $s = U, Sa = null);
            break;
          case "focusout":
            Sa = $s = bl = null;
            break;
          case "mousedown":
            Ws = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ws = !1, Dh($, a, K);
            break;
          case "selectionchange":
            if (Hx) break;
          case "keydown":
          case "keyup":
            Dh($, a, K);
        }
        var pe;
        if (Qs)
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
          yl ? yh(e, a) && (we = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (we = "onCompositionStart");
        we && (ph && a.locale !== "ko" && (yl || we !== "onCompositionStart" ? we === "onCompositionEnd" && yl && (pe = uh()) : (lr = K, Ps = "value" in lr ? lr.value : lr.textContent, yl = !0)), Oe = Ao(U, we), 0 < Oe.length && (we = new dh(
          we,
          e,
          null,
          a,
          K
        ), $.push({ event: we, listeners: Oe }), pe ? we.data = pe : (pe = bh(a), pe !== null && (we.data = pe)))), (pe = Dx ? Nx(e, a) : Ox(e, a)) && (we = Ao(U, "onBeforeInput"), 0 < we.length && (Oe = new dh(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          K
        ), $.push({
          event: Oe,
          listeners: we
        }), Oe.data = pe)), Sw(
          $,
          e,
          U,
          a,
          K
        );
      }
      eg($, n);
    });
  }
  function Ka(e, n, a) {
    return {
      instance: e,
      listener: n,
      currentTarget: a
    };
  }
  function Ao(e, n) {
    for (var a = n + "Capture", o = []; e !== null; ) {
      var f = e, p = f.stateNode;
      if (f = f.tag, f !== 5 && f !== 26 && f !== 27 || p === null || (f = pa(e, a), f != null && o.unshift(
        Ka(e, f, p)
      ), f = pa(e, n), f != null && o.push(
        Ka(e, f, p)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function Vl(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ng(e, n, a, o, f) {
    for (var p = n._reactName, x = []; a !== null && a !== o; ) {
      var S = a, D = S.alternate, U = S.stateNode;
      if (S = S.tag, D !== null && D === o) break;
      S !== 5 && S !== 26 && S !== 27 || U === null || (D = U, f ? (U = pa(a, p), U != null && x.unshift(
        Ka(a, U, D)
      )) : f || (U = pa(a, p), U != null && x.push(
        Ka(a, U, D)
      ))), a = a.return;
    }
    x.length !== 0 && e.push({ event: n, listeners: x });
  }
  var Aw = /\r\n?/g, Tw = /\u0000|\uFFFD/g;
  function rg(e) {
    return (typeof e == "string" ? e : "" + e).replace(Aw, `
`).replace(Tw, "");
  }
  function lg(e, n) {
    return n = rg(n), rg(e) === n;
  }
  function To() {
  }
  function Ze(e, n, a, o, f, p) {
    switch (a) {
      case "children":
        typeof o == "string" ? n === "body" || n === "textarea" && o === "" || pl(e, o) : (typeof o == "number" || typeof o == "bigint") && n !== "body" && pl(e, "" + o);
        break;
      case "className":
        Ni(e, "class", o);
        break;
      case "tabIndex":
        Ni(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ni(e, a, o);
        break;
      case "style":
        ih(e, o, p);
        break;
      case "data":
        if (n !== "object") {
          Ni(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        o = zi("" + o), e.setAttribute(a, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof p == "function" && (a === "formAction" ? (n !== "input" && Ze(e, n, "name", f.name, f, null), Ze(
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
          e.removeAttribute(a);
          break;
        }
        o = zi("" + o), e.setAttribute(a, o);
        break;
      case "onClick":
        o != null && (e.onclick = To);
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
          if (a = o.__html, a != null) {
            if (f.children != null) throw Error(i(60));
            e.innerHTML = a;
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
        a = zi("" + o), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
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
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "" + o) : e.removeAttribute(a);
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
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(a, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, o) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(a, o) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(a) : e.setAttribute(a, o);
        break;
      case "popover":
        Le("beforetoggle", e), Le("toggle", e), Di(e, "popover", o);
        break;
      case "xlinkActuate":
        zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        zn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        zn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        zn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        Di(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = rx.get(a) || a, Di(e, a, o));
    }
  }
  function Sc(e, n, a, o, f, p) {
    switch (a) {
      case "style":
        ih(e, o, p);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(i(61));
          if (a = o.__html, a != null) {
            if (f.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof o == "string" ? pl(e, o) : (typeof o == "number" || typeof o == "bigint") && pl(e, "" + o);
        break;
      case "onScroll":
        o != null && Le("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Le("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = To);
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
        if (!Zd.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (f = a.endsWith("Capture"), n = a.slice(2, f ? a.length - 7 : void 0), p = e[Bt] || null, p = p != null ? p[a] : null, typeof p == "function" && e.removeEventListener(n, p, f), typeof o == "function")) {
              typeof p != "function" && p !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(n, o, f);
              break e;
            }
            a in e ? e[a] = o : o === !0 ? e.setAttribute(a, "") : Di(e, a, o);
          }
    }
  }
  function Tt(e, n, a) {
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
        for (p in a)
          if (a.hasOwnProperty(p)) {
            var x = a[p];
            if (x != null)
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
                  Ze(e, n, p, x, a, null);
              }
          }
        f && Ze(e, n, "srcSet", a.srcSet, a, null), o && Ze(e, n, "src", a.src, a, null);
        return;
      case "input":
        Le("invalid", e);
        var S = p = x = f = null, D = null, U = null;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var K = a[o];
            if (K != null)
              switch (o) {
                case "name":
                  f = K;
                  break;
                case "type":
                  x = K;
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
                  Ze(e, n, o, K, a, null);
              }
          }
        nh(
          e,
          p,
          S,
          D,
          U,
          x,
          f,
          !1
        ), Oi(e);
        return;
      case "select":
        Le("invalid", e), o = x = p = null;
        for (f in a)
          if (a.hasOwnProperty(f) && (S = a[f], S != null))
            switch (f) {
              case "value":
                p = S;
                break;
              case "defaultValue":
                x = S;
                break;
              case "multiple":
                o = S;
              default:
                Ze(e, n, f, S, a, null);
            }
        n = p, a = x, e.multiple = !!o, n != null ? hl(e, !!o, n, !1) : a != null && hl(e, !!o, a, !0);
        return;
      case "textarea":
        Le("invalid", e), p = f = o = null;
        for (x in a)
          if (a.hasOwnProperty(x) && (S = a[x], S != null))
            switch (x) {
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
                Ze(e, n, x, S, a, null);
            }
        lh(e, o, f, p), Oi(e);
        return;
      case "option":
        for (D in a)
          if (a.hasOwnProperty(D) && (o = a[D], o != null))
            switch (D) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                Ze(e, n, D, o, a, null);
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
        for (o = 0; o < Za.length; o++)
          Le(Za[o], e);
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
        for (U in a)
          if (a.hasOwnProperty(U) && (o = a[U], o != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, n));
              default:
                Ze(e, n, U, o, a, null);
            }
        return;
      default:
        if (Bs(n)) {
          for (K in a)
            a.hasOwnProperty(K) && (o = a[K], o !== void 0 && Sc(
              e,
              n,
              K,
              o,
              a,
              void 0
            ));
          return;
        }
    }
    for (S in a)
      a.hasOwnProperty(S) && (o = a[S], o != null && Ze(e, n, S, o, a, null));
  }
  function _w(e, n, a, o) {
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
        var f = null, p = null, x = null, S = null, D = null, U = null, K = null;
        for (P in a) {
          var $ = a[P];
          if (a.hasOwnProperty(P) && $ != null)
            switch (P) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                D = $;
              default:
                o.hasOwnProperty(P) || Ze(e, n, P, null, o, $);
            }
        }
        for (var q in o) {
          var P = o[q];
          if ($ = a[q], o.hasOwnProperty(q) && (P != null || $ != null))
            switch (q) {
              case "type":
                p = P;
                break;
              case "name":
                f = P;
                break;
              case "checked":
                U = P;
                break;
              case "defaultChecked":
                K = P;
                break;
              case "value":
                x = P;
                break;
              case "defaultValue":
                S = P;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (P != null)
                  throw Error(i(137, n));
                break;
              default:
                P !== $ && Ze(
                  e,
                  n,
                  q,
                  P,
                  o,
                  $
                );
            }
        }
        js(
          e,
          x,
          S,
          D,
          U,
          K,
          p,
          f
        );
        return;
      case "select":
        P = x = S = q = null;
        for (p in a)
          if (D = a[p], a.hasOwnProperty(p) && D != null)
            switch (p) {
              case "value":
                break;
              case "multiple":
                P = D;
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
          if (p = o[f], D = a[f], o.hasOwnProperty(f) && (p != null || D != null))
            switch (f) {
              case "value":
                q = p;
                break;
              case "defaultValue":
                S = p;
                break;
              case "multiple":
                x = p;
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
        n = S, a = x, o = P, q != null ? hl(e, !!a, q, !1) : !!o != !!a && (n != null ? hl(e, !!a, n, !0) : hl(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        P = q = null;
        for (S in a)
          if (f = a[S], a.hasOwnProperty(S) && f != null && !o.hasOwnProperty(S))
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ze(e, n, S, null, o, f);
            }
        for (x in o)
          if (f = o[x], p = a[x], o.hasOwnProperty(x) && (f != null || p != null))
            switch (x) {
              case "value":
                q = f;
                break;
              case "defaultValue":
                P = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(i(91));
                break;
              default:
                f !== p && Ze(e, n, x, f, o, p);
            }
        rh(e, q, P);
        return;
      case "option":
        for (var Ee in a)
          if (q = a[Ee], a.hasOwnProperty(Ee) && q != null && !o.hasOwnProperty(Ee))
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
                  q
                );
            }
        for (D in o)
          if (q = o[D], P = a[D], o.hasOwnProperty(D) && q !== P && (q != null || P != null))
            switch (D) {
              case "selected":
                e.selected = q && typeof q != "function" && typeof q != "symbol";
                break;
              default:
                Ze(
                  e,
                  n,
                  D,
                  q,
                  o,
                  P
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
        for (var xe in a)
          q = a[xe], a.hasOwnProperty(xe) && q != null && !o.hasOwnProperty(xe) && Ze(e, n, xe, null, o, q);
        for (U in o)
          if (q = o[U], P = a[U], o.hasOwnProperty(U) && q !== P && (q != null || P != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null)
                  throw Error(i(137, n));
                break;
              default:
                Ze(
                  e,
                  n,
                  U,
                  q,
                  o,
                  P
                );
            }
        return;
      default:
        if (Bs(n)) {
          for (var Ke in a)
            q = a[Ke], a.hasOwnProperty(Ke) && q !== void 0 && !o.hasOwnProperty(Ke) && Sc(
              e,
              n,
              Ke,
              void 0,
              o,
              q
            );
          for (K in o)
            q = o[K], P = a[K], !o.hasOwnProperty(K) || q === P || q === void 0 && P === void 0 || Sc(
              e,
              n,
              K,
              q,
              o,
              P
            );
          return;
        }
    }
    for (var z in a)
      q = a[z], a.hasOwnProperty(z) && q != null && !o.hasOwnProperty(z) && Ze(e, n, z, null, o, q);
    for ($ in o)
      q = o[$], P = a[$], !o.hasOwnProperty($) || q === P || q == null && P == null || Ze(e, n, $, q, o, P);
  }
  var Ec = null, kc = null;
  function _o(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function ag(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ig(e, n) {
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
  function Cc(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Ac = null;
  function Rw() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Ac ? !1 : (Ac = e, !0) : (Ac = null, !1);
  }
  var og = typeof setTimeout == "function" ? setTimeout : void 0, Dw = typeof clearTimeout == "function" ? clearTimeout : void 0, sg = typeof Promise == "function" ? Promise : void 0, Nw = typeof queueMicrotask == "function" ? queueMicrotask : typeof sg < "u" ? function(e) {
    return sg.resolve(null).then(e).catch(Ow);
  } : og;
  function Ow(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function xr(e) {
    return e === "head";
  }
  function ug(e, n) {
    var a = n, o = 0, f = 0;
    do {
      var p = a.nextSibling;
      if (e.removeChild(a), p && p.nodeType === 8)
        if (a = p.data, a === "/$") {
          if (0 < o && 8 > o) {
            a = o;
            var x = e.ownerDocument;
            if (a & 1 && Ja(x.documentElement), a & 2 && Ja(x.body), a & 4)
              for (a = x.head, Ja(a), x = a.firstChild; x; ) {
                var S = x.nextSibling, D = x.nodeName;
                x[da] || D === "SCRIPT" || D === "STYLE" || D === "LINK" && x.rel.toLowerCase() === "stylesheet" || a.removeChild(x), x = S;
              }
          }
          if (f === 0) {
            e.removeChild(p), ai(n);
            return;
          }
          f--;
        } else
          a === "$" || a === "$?" || a === "$!" ? f++ : o = a.charCodeAt(0) - 48;
      else o = 0;
      a = p;
    } while (a);
    ai(n);
  }
  function Tc(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (n = n.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Tc(a), Os(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function Mw(e, n, a, o) {
    for (; e.nodeType === 1; ) {
      var f = a;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[da])
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
      if (e = vn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function zw(e, n, a) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = vn(e.nextSibling), e === null)) return null;
    return e;
  }
  function _c(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function Lw(e, n) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete")
      n();
    else {
      var o = function() {
        n(), a.removeEventListener("DOMContentLoaded", o);
      };
      a.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function vn(e) {
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
  var Rc = null;
  function cg(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (n === 0) return e;
          n--;
        } else a === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function fg(e, n, a) {
    switch (n = _o(a), e) {
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
  function Ja(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    Os(e);
  }
  var dn = /* @__PURE__ */ new Map(), dg = /* @__PURE__ */ new Set();
  function Ro(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Qn = W.d;
  W.d = {
    f: jw,
    r: Uw,
    D: Bw,
    C: Iw,
    L: Hw,
    m: qw,
    X: Pw,
    S: Vw,
    M: Yw
  };
  function jw() {
    var e = Qn.f(), n = xo();
    return e || n;
  }
  function Uw(e) {
    var n = ul(e);
    n !== null && n.tag === 5 && n.type === "form" ? Op(n) : Qn.r(e);
  }
  var Pl = typeof document > "u" ? null : document;
  function hg(e, n, a) {
    var o = Pl;
    if (o && typeof n == "string" && n) {
      var f = ln(n);
      f = 'link[rel="' + e + '"][href="' + f + '"]', typeof a == "string" && (f += '[crossorigin="' + a + '"]'), dg.has(f) || (dg.add(f), e = { rel: e, crossOrigin: a, href: n }, o.querySelector(f) === null && (n = o.createElement("link"), Tt(n, "link", e), xt(n), o.head.appendChild(n)));
    }
  }
  function Bw(e) {
    Qn.D(e), hg("dns-prefetch", e, null);
  }
  function Iw(e, n) {
    Qn.C(e, n), hg("preconnect", e, n);
  }
  function Hw(e, n, a) {
    Qn.L(e, n, a);
    var o = Pl;
    if (o && e && n) {
      var f = 'link[rel="preload"][as="' + ln(n) + '"]';
      n === "image" && a && a.imageSrcSet ? (f += '[imagesrcset="' + ln(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (f += '[imagesizes="' + ln(
        a.imageSizes
      ) + '"]')) : f += '[href="' + ln(e) + '"]';
      var p = f;
      switch (n) {
        case "style":
          p = Yl(e);
          break;
        case "script":
          p = Fl(e);
      }
      dn.has(p) || (e = y(
        {
          rel: "preload",
          href: n === "image" && a && a.imageSrcSet ? void 0 : e,
          as: n
        },
        a
      ), dn.set(p, e), o.querySelector(f) !== null || n === "style" && o.querySelector($a(p)) || n === "script" && o.querySelector(Wa(p)) || (n = o.createElement("link"), Tt(n, "link", e), xt(n), o.head.appendChild(n)));
    }
  }
  function qw(e, n) {
    Qn.m(e, n);
    var a = Pl;
    if (a && e) {
      var o = n && typeof n.as == "string" ? n.as : "script", f = 'link[rel="modulepreload"][as="' + ln(o) + '"][href="' + ln(e) + '"]', p = f;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          p = Fl(e);
      }
      if (!dn.has(p) && (e = y({ rel: "modulepreload", href: e }, n), dn.set(p, e), a.querySelector(f) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Wa(p)))
              return;
        }
        o = a.createElement("link"), Tt(o, "link", e), xt(o), a.head.appendChild(o);
      }
    }
  }
  function Vw(e, n, a) {
    Qn.S(e, n, a);
    var o = Pl;
    if (o && e) {
      var f = cl(o).hoistableStyles, p = Yl(e);
      n = n || "default";
      var x = f.get(p);
      if (!x) {
        var S = { loading: 0, preload: null };
        if (x = o.querySelector(
          $a(p)
        ))
          S.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": n },
            a
          ), (a = dn.get(p)) && Dc(e, a);
          var D = x = o.createElement("link");
          xt(D), Tt(D, "link", e), D._p = new Promise(function(U, K) {
            D.onload = U, D.onerror = K;
          }), D.addEventListener("load", function() {
            S.loading |= 1;
          }), D.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, Do(x, n, o);
        }
        x = {
          type: "stylesheet",
          instance: x,
          count: 1,
          state: S
        }, f.set(p, x);
      }
    }
  }
  function Pw(e, n) {
    Qn.X(e, n);
    var a = Pl;
    if (a && e) {
      var o = cl(a).hoistableScripts, f = Fl(e), p = o.get(f);
      p || (p = a.querySelector(Wa(f)), p || (e = y({ src: e, async: !0 }, n), (n = dn.get(f)) && Nc(e, n), p = a.createElement("script"), xt(p), Tt(p, "link", e), a.head.appendChild(p)), p = {
        type: "script",
        instance: p,
        count: 1,
        state: null
      }, o.set(f, p));
    }
  }
  function Yw(e, n) {
    Qn.M(e, n);
    var a = Pl;
    if (a && e) {
      var o = cl(a).hoistableScripts, f = Fl(e), p = o.get(f);
      p || (p = a.querySelector(Wa(f)), p || (e = y({ src: e, async: !0, type: "module" }, n), (n = dn.get(f)) && Nc(e, n), p = a.createElement("script"), xt(p), Tt(p, "link", e), a.head.appendChild(p)), p = {
        type: "script",
        instance: p,
        count: 1,
        state: null
      }, o.set(f, p));
    }
  }
  function pg(e, n, a, o) {
    var f = (f = ue.current) ? Ro(f) : null;
    if (!f) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (n = Yl(a.href), a = cl(
          f
        ).hoistableStyles, o = a.get(n), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Yl(a.href);
          var p = cl(
            f
          ).hoistableStyles, x = p.get(e);
          if (x || (f = f.ownerDocument || f, x = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, p.set(e, x), (p = f.querySelector(
            $a(e)
          )) && !p._p && (x.instance = p, x.state.loading = 5), dn.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, dn.set(e, a), p || Fw(
            f,
            e,
            a,
            x.state
          ))), n && o === null)
            throw Error(i(528, ""));
          return x;
        }
        if (n && o !== null)
          throw Error(i(529, ""));
        return null;
      case "script":
        return n = a.async, a = a.src, typeof a == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Fl(a), a = cl(
          f
        ).hoistableScripts, o = a.get(n), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(i(444, e));
    }
  }
  function Yl(e) {
    return 'href="' + ln(e) + '"';
  }
  function $a(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function mg(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Fw(e, n, a, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = e.createElement("link"), o.preload = n, n.addEventListener("load", function() {
      return o.loading |= 1;
    }), n.addEventListener("error", function() {
      return o.loading |= 2;
    }), Tt(n, "link", a), xt(n), e.head.appendChild(n));
  }
  function Fl(e) {
    return '[src="' + ln(e) + '"]';
  }
  function Wa(e) {
    return "script[async]" + e;
  }
  function gg(e, n, a) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + ln(a.href) + '"]'
          );
          if (o)
            return n.instance = o, xt(o), o;
          var f = y({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), xt(o), Tt(o, "style", f), Do(o, a.precedence, e), n.instance = o;
        case "stylesheet":
          f = Yl(a.href);
          var p = e.querySelector(
            $a(f)
          );
          if (p)
            return n.state.loading |= 4, n.instance = p, xt(p), p;
          o = mg(a), (f = dn.get(f)) && Dc(o, f), p = (e.ownerDocument || e).createElement("link"), xt(p);
          var x = p;
          return x._p = new Promise(function(S, D) {
            x.onload = S, x.onerror = D;
          }), Tt(p, "link", o), n.state.loading |= 4, Do(p, a.precedence, e), n.instance = p;
        case "script":
          return p = Fl(a.src), (f = e.querySelector(
            Wa(p)
          )) ? (n.instance = f, xt(f), f) : (o = a, (f = dn.get(p)) && (o = y({}, a), Nc(o, f)), e = e.ownerDocument || e, f = e.createElement("script"), xt(f), Tt(f, "link", o), e.head.appendChild(f), n.instance = f);
        case "void":
          return null;
        default:
          throw Error(i(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance, n.state.loading |= 4, Do(o, a.precedence, e));
    return n.instance;
  }
  function Do(e, n, a) {
    for (var o = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), f = o.length ? o[o.length - 1] : null, p = f, x = 0; x < o.length; x++) {
      var S = o[x];
      if (S.dataset.precedence === n) p = S;
      else if (p !== f) break;
    }
    p ? p.parentNode.insertBefore(e, p.nextSibling) : (n = a.nodeType === 9 ? a.head : a, n.insertBefore(e, n.firstChild));
  }
  function Dc(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Nc(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var No = null;
  function yg(e, n, a) {
    if (No === null) {
      var o = /* @__PURE__ */ new Map(), f = No = /* @__PURE__ */ new Map();
      f.set(a, o);
    } else
      f = No, o = f.get(a), o || (o = /* @__PURE__ */ new Map(), f.set(a, o));
    if (o.has(e)) return o;
    for (o.set(e, null), a = a.getElementsByTagName(e), f = 0; f < a.length; f++) {
      var p = a[f];
      if (!(p[da] || p[Rt] || e === "link" && p.getAttribute("rel") === "stylesheet") && p.namespaceURI !== "http://www.w3.org/2000/svg") {
        var x = p.getAttribute(n) || "";
        x = e + x;
        var S = o.get(x);
        S ? S.push(p) : o.set(x, [p]);
      }
    }
    return o;
  }
  function bg(e, n, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function Gw(e, n, a) {
    if (a === 1 || n.itemProp != null) return !1;
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
  function vg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var ei = null;
  function Xw() {
  }
  function Qw(e, n, a) {
    if (ei === null) throw Error(i(475));
    var o = ei;
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var f = Yl(a.href), p = e.querySelector(
          $a(f)
        );
        if (p) {
          e = p._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = Oo.bind(o), e.then(o, o)), n.state.loading |= 4, n.instance = p, xt(p);
          return;
        }
        p = e.ownerDocument || e, a = mg(a), (f = dn.get(f)) && Dc(a, f), p = p.createElement("link"), xt(p);
        var x = p;
        x._p = new Promise(function(S, D) {
          x.onload = S, x.onerror = D;
        }), Tt(p, "link", a), n.instance = p;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (o.count++, n = Oo.bind(o), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function Zw() {
    if (ei === null) throw Error(i(475));
    var e = ei;
    return e.stylesheets && e.count === 0 && Oc(e, e.stylesheets), 0 < e.count ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Oc(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function Oo() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Oc(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Mo = null;
  function Oc(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Mo = /* @__PURE__ */ new Map(), n.forEach(Kw, e), Mo = null, Oo.call(e));
  }
  function Kw(e, n) {
    if (!(n.state.loading & 4)) {
      var a = Mo.get(e);
      if (a) var o = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Mo.set(e, a);
        for (var f = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), p = 0; p < f.length; p++) {
          var x = f[p];
          (x.nodeName === "LINK" || x.getAttribute("media") !== "not all") && (a.set(x.dataset.precedence, x), o = x);
        }
        o && a.set(null, o);
      }
      f = n.instance, x = f.getAttribute("data-precedence"), p = a.get(x) || o, p === o && a.set(null, f), a.set(x, f), this.count++, o = Oo.bind(this), f.addEventListener("load", o), f.addEventListener("error", o), p ? p.parentNode.insertBefore(f, p.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(f, e.firstChild)), n.state.loading |= 4;
    }
  }
  var ti = {
    $$typeof: j,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0
  };
  function Jw(e, n, a, o, f, p, x, S) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = _s(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _s(0), this.hiddenUpdates = _s(null), this.identifierPrefix = o, this.onUncaughtError = f, this.onCaughtError = p, this.onRecoverableError = x, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function xg(e, n, a, o, f, p, x, S, D, U, K, $) {
    return e = new Jw(
      e,
      n,
      a,
      x,
      S,
      D,
      U,
      $
    ), n = 1, p === !0 && (n |= 24), p = Xt(3, null, null, n), e.current = p, p.stateNode = e, n = hu(), n.refCount++, e.pooledCache = n, n.refCount++, p.memoizedState = {
      element: o,
      isDehydrated: a,
      cache: n
    }, yu(p), e;
  }
  function wg(e) {
    return e ? (e = Sl, e) : Sl;
  }
  function Sg(e, n, a, o, f, p) {
    f = wg(f), o.context === null ? o.context = f : o.pendingContext = f, o = or(n), o.payload = { element: a }, p = p === void 0 ? null : p, p !== null && (o.callback = p), a = sr(e, o, n), a !== null && ($t(a, e, n), Na(a, e, n));
  }
  function Eg(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function Mc(e, n) {
    Eg(e, n), (e = e.alternate) && Eg(e, n);
  }
  function kg(e) {
    if (e.tag === 13) {
      var n = wl(e, 67108864);
      n !== null && $t(n, e, 67108864), Mc(e, 67108864);
    }
  }
  var zo = !0;
  function $w(e, n, a, o) {
    var f = B.T;
    B.T = null;
    var p = W.p;
    try {
      W.p = 2, zc(e, n, a, o);
    } finally {
      W.p = p, B.T = f;
    }
  }
  function Ww(e, n, a, o) {
    var f = B.T;
    B.T = null;
    var p = W.p;
    try {
      W.p = 8, zc(e, n, a, o);
    } finally {
      W.p = p, B.T = f;
    }
  }
  function zc(e, n, a, o) {
    if (zo) {
      var f = Lc(o);
      if (f === null)
        wc(
          e,
          n,
          o,
          Lo,
          a
        ), Ag(e, o);
      else if (tS(
        f,
        e,
        n,
        a,
        o
      ))
        o.stopPropagation();
      else if (Ag(e, o), n & 4 && -1 < eS.indexOf(e)) {
        for (; f !== null; ) {
          var p = ul(f);
          if (p !== null)
            switch (p.tag) {
              case 3:
                if (p = p.stateNode, p.current.memoizedState.isDehydrated) {
                  var x = Ft(p.pendingLanes);
                  if (x !== 0) {
                    var S = p;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; x; ) {
                      var D = 1 << 31 - me(x);
                      S.entanglements[1] |= D, x &= ~D;
                    }
                    Tn(p), (Ge & 6) === 0 && (bo = Ve() + 500, Qa(0));
                  }
                }
                break;
              case 13:
                S = wl(p, 2), S !== null && $t(S, p, 2), xo(), Mc(p, 2);
            }
          if (p = Lc(o), p === null && wc(
            e,
            n,
            o,
            Lo,
            a
          ), p === f) break;
          f = p;
        }
        f !== null && o.stopPropagation();
      } else
        wc(
          e,
          n,
          o,
          null,
          a
        );
    }
  }
  function Lc(e) {
    return e = Hs(e), jc(e);
  }
  var Lo = null;
  function jc(e) {
    if (Lo = null, e = sl(e), e !== null) {
      var n = u(e);
      if (n === null) e = null;
      else {
        var a = n.tag;
        if (a === 13) {
          if (e = c(n), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return Lo = e, null;
  }
  function Cg(e) {
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
          case Ye:
            return 8;
          case ct:
          case tr:
            return 32;
          case Mn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Uc = !1, wr = null, Sr = null, Er = null, ni = /* @__PURE__ */ new Map(), ri = /* @__PURE__ */ new Map(), kr = [], eS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ag(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        wr = null;
        break;
      case "dragenter":
      case "dragleave":
        Sr = null;
        break;
      case "mouseover":
      case "mouseout":
        Er = null;
        break;
      case "pointerover":
      case "pointerout":
        ni.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ri.delete(n.pointerId);
    }
  }
  function li(e, n, a, o, f, p) {
    return e === null || e.nativeEvent !== p ? (e = {
      blockedOn: n,
      domEventName: a,
      eventSystemFlags: o,
      nativeEvent: p,
      targetContainers: [f]
    }, n !== null && (n = ul(n), n !== null && kg(n)), e) : (e.eventSystemFlags |= o, n = e.targetContainers, f !== null && n.indexOf(f) === -1 && n.push(f), e);
  }
  function tS(e, n, a, o, f) {
    switch (n) {
      case "focusin":
        return wr = li(
          wr,
          e,
          n,
          a,
          o,
          f
        ), !0;
      case "dragenter":
        return Sr = li(
          Sr,
          e,
          n,
          a,
          o,
          f
        ), !0;
      case "mouseover":
        return Er = li(
          Er,
          e,
          n,
          a,
          o,
          f
        ), !0;
      case "pointerover":
        var p = f.pointerId;
        return ni.set(
          p,
          li(
            ni.get(p) || null,
            e,
            n,
            a,
            o,
            f
          )
        ), !0;
      case "gotpointercapture":
        return p = f.pointerId, ri.set(
          p,
          li(
            ri.get(p) || null,
            e,
            n,
            a,
            o,
            f
          )
        ), !0;
    }
    return !1;
  }
  function Tg(e) {
    var n = sl(e.target);
    if (n !== null) {
      var a = u(n);
      if (a !== null) {
        if (n = a.tag, n === 13) {
          if (n = c(a), n !== null) {
            e.blockedOn = n, Q1(e.priority, function() {
              if (a.tag === 13) {
                var o = Jt();
                o = Rs(o);
                var f = wl(a, o);
                f !== null && $t(f, a, o), Mc(a, o);
              }
            });
            return;
          }
        } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function jo(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var a = Lc(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var o = new a.constructor(
          a.type,
          a
        );
        Is = o, a.target.dispatchEvent(o), Is = null;
      } else
        return n = ul(a), n !== null && kg(n), e.blockedOn = a, !1;
      n.shift();
    }
    return !0;
  }
  function _g(e, n, a) {
    jo(e) && a.delete(n);
  }
  function nS() {
    Uc = !1, wr !== null && jo(wr) && (wr = null), Sr !== null && jo(Sr) && (Sr = null), Er !== null && jo(Er) && (Er = null), ni.forEach(_g), ri.forEach(_g);
  }
  function Uo(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Uc || (Uc = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      nS
    )));
  }
  var Bo = null;
  function Rg(e) {
    Bo !== e && (Bo = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        Bo === e && (Bo = null);
        for (var n = 0; n < e.length; n += 3) {
          var a = e[n], o = e[n + 1], f = e[n + 2];
          if (typeof o != "function") {
            if (jc(o || a) === null)
              continue;
            break;
          }
          var p = ul(a);
          p !== null && (e.splice(n, 3), n -= 3, ju(
            p,
            {
              pending: !0,
              data: f,
              method: a.method,
              action: o
            },
            o,
            f
          ));
        }
      }
    ));
  }
  function ai(e) {
    function n(D) {
      return Uo(D, e);
    }
    wr !== null && Uo(wr, e), Sr !== null && Uo(Sr, e), Er !== null && Uo(Er, e), ni.forEach(n), ri.forEach(n);
    for (var a = 0; a < kr.length; a++) {
      var o = kr[a];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < kr.length && (a = kr[0], a.blockedOn === null); )
      Tg(a), a.blockedOn === null && kr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (o = 0; o < a.length; o += 3) {
        var f = a[o], p = a[o + 1], x = f[Bt] || null;
        if (typeof p == "function")
          x || Rg(a);
        else if (x) {
          var S = null;
          if (p && p.hasAttribute("formAction")) {
            if (f = p, x = p[Bt] || null)
              S = x.formAction;
            else if (jc(f) !== null) continue;
          } else S = x.action;
          typeof S == "function" ? a[o + 1] = S : (a.splice(o, 3), o -= 3), Rg(a);
        }
      }
  }
  function Bc(e) {
    this._internalRoot = e;
  }
  Io.prototype.render = Bc.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(i(409));
    var a = n.current, o = Jt();
    Sg(a, o, e, n, null, null);
  }, Io.prototype.unmount = Bc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      Sg(e.current, 2, null, e, null, null), xo(), n[ol] = null;
    }
  };
  function Io(e) {
    this._internalRoot = e;
  }
  Io.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = Gd();
      e = { blockedOn: null, target: e, priority: n };
      for (var a = 0; a < kr.length && n !== 0 && n < kr[a].priority; a++) ;
      kr.splice(a, 0, e), a === 0 && Tg(e);
    }
  };
  var Dg = r.version;
  if (Dg !== "19.1.0")
    throw Error(
      i(
        527,
        Dg,
        "19.1.0"
      )
    );
  W.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = m(n), e = e !== null ? h(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var rS = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: B,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ho.isDisabled && Ho.supportsFiber)
      try {
        Y = Ho.inject(
          rS
        ), ee = Ho;
      } catch {
      }
  }
  return oi.createRoot = function(e, n) {
    if (!s(e)) throw Error(i(299));
    var a = !1, o = "", f = Gp, p = Xp, x = Qp, S = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (f = n.onUncaughtError), n.onCaughtError !== void 0 && (p = n.onCaughtError), n.onRecoverableError !== void 0 && (x = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (S = n.unstable_transitionCallbacks)), n = xg(
      e,
      1,
      !1,
      null,
      null,
      a,
      o,
      f,
      p,
      x,
      S,
      null
    ), e[ol] = n.current, xc(e), new Bc(n);
  }, oi.hydrateRoot = function(e, n, a) {
    if (!s(e)) throw Error(i(299));
    var o = !1, f = "", p = Gp, x = Xp, S = Qp, D = null, U = null;
    return a != null && (a.unstable_strictMode === !0 && (o = !0), a.identifierPrefix !== void 0 && (f = a.identifierPrefix), a.onUncaughtError !== void 0 && (p = a.onUncaughtError), a.onCaughtError !== void 0 && (x = a.onCaughtError), a.onRecoverableError !== void 0 && (S = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (D = a.unstable_transitionCallbacks), a.formState !== void 0 && (U = a.formState)), n = xg(
      e,
      1,
      !0,
      n,
      a ?? null,
      o,
      f,
      p,
      x,
      S,
      D,
      U
    ), n.context = wg(null), a = n.current, o = Jt(), o = Rs(o), f = or(o), f.callback = null, sr(a, f, o), a = o, n.current.lanes = a, fa(n, a), Tn(n), e[ol] = n.current, xc(e), new Io(n);
  }, oi.version = "19.1.0", oi;
}
var Hg;
function mS() {
  if (Hg) return qc.exports;
  Hg = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), qc.exports = pS(), qc.exports;
}
var gS = mS();
const yS = /* @__PURE__ */ ll(gS), bS = '/*! tailwindcss v4.1.8 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--leading-tight:1.25;--radius-md:.375rem;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:root{--background:0 0% 100%;--foreground:240 10% 3.9%;--card:0 0% 100%;--card-foreground:240 10% 3.9%;--popover:0 0% 100%;--popover-foreground:240 10% 3.9%;--primary:235 10% 79% 1;--primary-foreground:0 0% 98%;--secondary:229 7% 29% 1;--secondary-foreground:240 5.9% 10%;--muted:240 4.8% 95.9%;--muted-foreground:240 3.8% 46.1%;--accent:240 4.8% 95.9%;--accent-foreground:240 5.9% 10%;--destructive:0 84.2% 60.2%;--destructive-foreground:0 0% 98%;--border:240 5.9% 90%;--input:240 5.9% 90%;--ring:240 10% 3.9%;--chart-1:12 76% 61%;--chart-2:173 58% 39%;--chart-3:197 37% 24%;--chart-4:43 74% 66%;--chart-5:27 87% 67%;--radius:.5rem}.dark{--background:240 10% 3.9%;--foreground:0 0% 98%;--card:240 10% 3.9%;--card-foreground:0 0% 98%;--popover:240 10% 3.9%;--popover-foreground:0 0% 98%;--primary:235 10% 79% 1;--primary-foreground:240 5.9% 10%;--secondary:229 7% 29% 1;--secondary-foreground:0 0% 98%;--muted:240 3.7% 15.9%;--muted-foreground:240 5% 64.9%;--accent:240 3.7% 15.9%;--accent-foreground:0 0% 98%;--destructive:0 62.8% 30.6%;--destructive-foreground:0 0% 98%;--border:240 3.7% 15.9%;--input:240 3.7% 15.9%;--ring:240 4.9% 83.9%;--chart-1:220 70% 50%;--chart-2:160 60% 45%;--chart-3:30 80% 55%;--chart-4:280 65% 60%;--chart-5:340 75% 55%}}@layer components;@layer utilities{.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.top-6{top:calc(var(--spacing)*6)}.top-\\[-0px\\]{top:0}.top-\\[-50\\%\\]{top:-50%}.top-\\[50\\%\\]{top:50%}.right-0{right:calc(var(--spacing)*0)}.right-6{right:calc(var(--spacing)*6)}.right-12{right:calc(var(--spacing)*12)}.bottom-12{bottom:calc(var(--spacing)*12)}.left-\\[5px\\]{left:5px}.left-\\[50\\%\\]{left:50%}.z-20{z-index:20}.z-50{z-index:50}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.my-2{margin-block:calc(var(--spacing)*2)}.prose{color:var(--tw-prose-body);max-width:65ch}.prose :where(p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em}.prose :where([class~=lead]):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-lead);margin-top:1.2em;margin-bottom:1.2em;font-size:1.25em;line-height:1.6}.prose :where(a):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-links);font-weight:500;text-decoration:underline}.prose :where(strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-bold);font-weight:600}.prose :where(a strong):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(blockquote strong):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(thead th strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(ol):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em;padding-inline-start:1.625em;list-style-type:decimal}.prose :where(ol[type=A]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=A s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=I]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type=I s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type="1"]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:decimal}.prose :where(ul):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em;padding-inline-start:1.625em;list-style-type:disc}.prose :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *))::marker{color:var(--tw-prose-counters);font-weight:400}.prose :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *))::marker{color:var(--tw-prose-bullets)}.prose :where(dt):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:1.25em;font-weight:600}.prose :where(hr):not(:where([class~=not-prose],[class~=not-prose] *)){border-color:var(--tw-prose-hr);border-top-width:1px;margin-top:3em;margin-bottom:3em}.prose :where(blockquote):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-quotes);border-inline-start-width:.25rem;border-inline-start-color:var(--tw-prose-quote-borders);quotes:"“""”""‘""’";margin-top:1.6em;margin-bottom:1.6em;padding-inline-start:1em;font-style:italic;font-weight:500}.prose :where(blockquote p:first-of-type):not(:where([class~=not-prose],[class~=not-prose] *)):before{content:open-quote}.prose :where(blockquote p:last-of-type):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:close-quote}.prose :where(h1):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:0;margin-bottom:.888889em;font-size:2.25em;font-weight:800;line-height:1.11111}.prose :where(h1 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:900}.prose :where(h2):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:2em;margin-bottom:1em;font-size:1.5em;font-weight:700;line-height:1.33333}.prose :where(h2 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:800}.prose :where(h3):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:1.6em;margin-bottom:.6em;font-size:1.25em;font-weight:600;line-height:1.6}.prose :where(h3 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:700}.prose :where(h4):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:1.5em;margin-bottom:.5em;font-weight:600;line-height:1.5}.prose :where(h4 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:700}.prose :where(img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(picture):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em;display:block}.prose :where(video):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(kbd):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-kbd);box-shadow:0 0 0 1px rgb(var(--tw-prose-kbd-shadows)/10%),0 3px rgb(var(--tw-prose-kbd-shadows)/10%);padding-top:.1875em;padding-inline-end:.375em;padding-bottom:.1875em;border-radius:.3125rem;padding-inline-start:.375em;font-family:inherit;font-size:.875em;font-weight:500}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-code);font-size:.875em;font-weight:600}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):before,.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:"`"}.prose :where(a code):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h1 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(h2 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-size:.875em}.prose :where(h3 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-size:.9em}.prose :where(h4 code):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(blockquote code):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(thead th code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-pre-code);background-color:var(--tw-prose-pre-bg);padding-top:.857143em;padding-inline-end:1.14286em;padding-bottom:.857143em;border-radius:.375rem;margin-top:1.71429em;margin-bottom:1.71429em;padding-inline-start:1.14286em;font-size:.875em;font-weight:400;line-height:1.71429;overflow-x:auto}.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)){font-weight:inherit;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit;background-color:#0000;border-width:0;border-radius:0;padding:0}.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)):before,.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:none}.prose :where(table):not(:where([class~=not-prose],[class~=not-prose] *)){table-layout:auto;width:100%;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.71429}.prose :where(thead):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-th-borders)}.prose :where(thead th):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);vertical-align:bottom;padding-inline-end:.571429em;padding-bottom:.571429em;padding-inline-start:.571429em;font-weight:600}.prose :where(tbody tr):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-td-borders)}.prose :where(tbody tr:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:0}.prose :where(tbody td):not(:where([class~=not-prose],[class~=not-prose] *)){vertical-align:baseline}.prose :where(tfoot):not(:where([class~=not-prose],[class~=not-prose] *)){border-top-width:1px;border-top-color:var(--tw-prose-th-borders)}.prose :where(tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){vertical-align:top}.prose :where(th,td):not(:where([class~=not-prose],[class~=not-prose] *)){text-align:start}.prose :where(figure>*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose :where(figcaption):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-captions);margin-top:.857143em;font-size:.875em;line-height:1.42857}.prose{--tw-prose-body:oklch(37.3% .034 259.733);--tw-prose-headings:oklch(21% .034 264.665);--tw-prose-lead:oklch(44.6% .03 256.802);--tw-prose-links:oklch(21% .034 264.665);--tw-prose-bold:oklch(21% .034 264.665);--tw-prose-counters:oklch(55.1% .027 264.364);--tw-prose-bullets:oklch(87.2% .01 258.338);--tw-prose-hr:oklch(92.8% .006 264.531);--tw-prose-quotes:oklch(21% .034 264.665);--tw-prose-quote-borders:oklch(92.8% .006 264.531);--tw-prose-captions:oklch(55.1% .027 264.364);--tw-prose-kbd:oklch(21% .034 264.665);--tw-prose-kbd-shadows:NaN NaN NaN;--tw-prose-code:oklch(21% .034 264.665);--tw-prose-pre-code:oklch(92.8% .006 264.531);--tw-prose-pre-bg:oklch(27.8% .033 256.848);--tw-prose-th-borders:oklch(87.2% .01 258.338);--tw-prose-td-borders:oklch(92.8% .006 264.531);--tw-prose-invert-body:oklch(87.2% .01 258.338);--tw-prose-invert-headings:#fff;--tw-prose-invert-lead:oklch(70.7% .022 261.325);--tw-prose-invert-links:#fff;--tw-prose-invert-bold:#fff;--tw-prose-invert-counters:oklch(70.7% .022 261.325);--tw-prose-invert-bullets:oklch(44.6% .03 256.802);--tw-prose-invert-hr:oklch(37.3% .034 259.733);--tw-prose-invert-quotes:oklch(96.7% .003 264.542);--tw-prose-invert-quote-borders:oklch(37.3% .034 259.733);--tw-prose-invert-captions:oklch(70.7% .022 261.325);--tw-prose-invert-kbd:#fff;--tw-prose-invert-kbd-shadows:255 255 255;--tw-prose-invert-code:#fff;--tw-prose-invert-pre-code:oklch(87.2% .01 258.338);--tw-prose-invert-pre-bg:#00000080;--tw-prose-invert-th-borders:oklch(44.6% .03 256.802);--tw-prose-invert-td-borders:oklch(37.3% .034 259.733);font-size:1rem;line-height:1.75}.prose :where(picture>img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose :where(li):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.5em;margin-bottom:.5em}.prose :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:.375em}.prose :where(.prose>ul>li p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.75em;margin-bottom:.75em}.prose :where(.prose>ul>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em}.prose :where(.prose>ul>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.25em}.prose :where(.prose>ol>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em}.prose :where(.prose>ol>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.25em}.prose :where(ul ul,ul ol,ol ul,ol ol):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.75em;margin-bottom:.75em}.prose :where(dl):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em}.prose :where(dd):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.5em;padding-inline-start:1.625em}.prose :where(hr+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h2+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h3+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h4+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(thead th:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose :where(thead th:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose :where(tbody td,tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){padding-top:.571429em;padding-inline-end:.571429em;padding-bottom:.571429em;padding-inline-start:.571429em}.prose :where(tbody td:first-child,tfoot td:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose :where(tbody td:last-child,tfoot td:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose :where(figure):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(.prose>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(.prose>:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:0}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.block{display:block}.flex{display:flex}.grid{display:grid}.inline-flex{display:inline-flex}.aspect-square{aspect-ratio:1}.size-16{width:calc(var(--spacing)*16);height:calc(var(--spacing)*16)}.h-2\\.5{height:calc(var(--spacing)*2.5)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-10{height:calc(var(--spacing)*10)}.h-11{height:calc(var(--spacing)*11)}.h-16{height:calc(var(--spacing)*16)}.h-\\[32px\\]{height:32px}.h-\\[50\\%\\]{height:50%}.h-\\[100\\%\\]{height:100%}.h-\\[100vh\\]{height:100vh}.h-full{height:100%}.h-screen{height:100vh}.min-h-\\[29\\.12px\\]{min-height:29.12px}.min-h-\\[110px\\]{min-height:110px}.w-2\\.5{width:calc(var(--spacing)*2.5)}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-8{width:calc(var(--spacing)*8)}.w-10{width:calc(var(--spacing)*10)}.w-16{width:calc(var(--spacing)*16)}.w-\\[2px\\]{width:2px}.w-\\[32px\\]{width:32px}.w-full{width:100%}.w-min{width:min-content}.max-w-lg{max-width:var(--container-lg)}.min-w-\\[29\\.12px\\]{min-width:29.12px}.flex-1{flex:1}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize-none{resize:none}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-row{flex-direction:row}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-0>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*0)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*0)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1.5)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1.5)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-\\[10px\\]{border-radius:10px}.rounded-\\[90\\.99px\\]{border-radius:90.99px}.rounded-\\[inherit\\]{border-radius:inherit}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-t-lg{border-top-left-radius:var(--radius-lg);border-top-right-radius:var(--radius-lg)}.rounded-tl-\\[12px\\]{border-top-left-radius:12px}.rounded-tr-\\[12px\\]{border-top-right-radius:12px}.rounded-b-lg{border-bottom-right-radius:var(--radius-lg);border-bottom-left-radius:var(--radius-lg)}.border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-none{--tw-border-style:none;border-style:none}.border-t-transparent{border-top-color:#0000}.border-l-transparent{border-left-color:#0000}.bg-\\[\\#475D92\\]{background-color:#475d92}.bg-\\[\\#44464F\\]{background-color:#44464f}.bg-\\[\\#121318\\]{background-color:#121318}.bg-black{background-color:var(--color-black)}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black)50%,transparent)}}.p-0{padding:calc(var(--spacing)*0)}.p-2{padding:calc(var(--spacing)*2)}.p-4{padding:calc(var(--spacing)*4)}.p-5{padding:calc(var(--spacing)*5)}.p-6{padding:calc(var(--spacing)*6)}.p-\\[1px\\]{padding:1px}.p-\\[9\\.1px\\]{padding:9.1px}.p-\\[12px\\]{padding:12px}.p-\\[16px\\]{padding:16px}.px-3{padding-inline:calc(var(--spacing)*3)}.px-8{padding-inline:calc(var(--spacing)*8)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-5{padding-block:calc(var(--spacing)*5)}.pt-0{padding-top:calc(var(--spacing)*0)}.pb-0{padding-bottom:calc(var(--spacing)*0)}.pl-2{padding-left:calc(var(--spacing)*2)}.text-center{text-align:center}.text-start{text-align:start}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[16px\\]{font-size:16px}.leading-\\[24px\\]{--tw-leading:24px;line-height:24px}.leading-none{--tw-leading:1;line-height:1}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.5px\\]{--tw-tracking:.5px;letter-spacing:.5px}.tracking-\\[0\\.15px\\]{--tw-tracking:.15px;letter-spacing:.15px}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.break-words{overflow-wrap:break-word}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#44464F\\]{color:#44464f}.text-\\[\\#C5C6D0\\]{color:#c5c6d0}.text-gray-500{color:var(--color-gray-500)}.text-white{color:var(--color-white)}.underline-offset-4{text-underline-offset:4px}.shadow-\\[0_-2px_4px_rgba\\(0\\,0\\,0\\,0\\.1\\)\\]{--tw-shadow:0 -2px 4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0_10px_20px_rgba\\(0\\,_0\\,_0\\,_0\\.2\\)\\]{--tw-shadow:0 10px 20px var(--tw-shadow-color,#0003);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0px_14px_16px_0px_\\#00000045\\]{--tw-shadow:0px 14px 16px 0px var(--tw-shadow-color,#00000045);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-black{--tw-shadow-color:#000}@supports (color:color-mix(in lab,red,red)){.shadow-black{--tw-shadow-color:color-mix(in oklab,var(--color-black)var(--tw-shadow-alpha),transparent)}}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.select-none{-webkit-user-select:none;user-select:none}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.file\\:border-0::file-selector-button{border-style:var(--tw-border-style);border-width:0}.file\\:bg-transparent::file-selector-button{background-color:#0000}.file\\:text-sm::file-selector-button{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.file\\:font-medium::file-selector-button{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}@media (hover:hover){.hover\\:text-gray-400:hover{color:var(--color-gray-400)}.hover\\:underline:hover{text-decoration-line:underline}}.focus-visible\\:ring-0:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(0px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-offset-0:focus-visible{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}@media (min-width:40rem){.sm\\:mt-0{margin-top:calc(var(--spacing)*0)}.sm\\:w-96{width:calc(var(--spacing)*96)}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}.sm\\:rounded-lg{border-radius:var(--radius-lg)}.sm\\:text-left{text-align:left}}}@keyframes clipSlideInFromRight{0%{clip-path:inset(0 0 0 100%);opacity:1}to{clip-path:inset(0);opacity:1}}.slide-in-right{will-change:clip-path;animation:.3s ease-out both clipSlideInFromRight;overflow:hidden}.card-title{color:#b0c6ff}.card-header{border-radius:16px 16px 0 0}.card-parent{color:#c5c6d0;background-color:#121318;border-radius:16px}.cancel-button{color:#b0c6ff}.action-button{color:#152e60;background:var(--Schemes-Primary,#b0c6ff);padding:var(--button,14px)16px}.modal-button{border-radius:var(--border-radius,100px)}.modal-text{color:var(--Title,#e2e2e9);text-overflow:ellipsis;font-size:22px;font-weight:400}.markdown-class{color:#c5c6d0}.markdown-class a{color:#b0c6ff}.section-title{border-radius:var(--border-radius,4px);padding:4px 16px;font-size:12px;font-weight:500;display:flex}.section-title.route{border:1px solid var(--Schemes-Secondary,#b0c6ff);color:var(--Schemes-Secondary,#b0c6ff)}.section-title.course{color:var(--Schemes-Secondary,#ffb3b1);border:1px solid var(--Schemes-Secondary,#ffb3b1)}.item{text-align:start;width:100%;color:var(--Schemes-Primary,#b0c6ff);border-radius:var(--border-radius,4px);border:1px solid var(--Schemes-Outline-Variant,#44464f);background:var(--Schemes-Surface-Bright,#38393f);flex-direction:column;justify-content:space-between;align-self:stretch;align-items:center;gap:8px;padding:12px;display:flex}.item.expanded{background-color:#1e1f25;border-color:#d9e2ff}.item.no-children{flex-direction:row}.button-text{cursor:pointer;padding:14px 16px;font-size:14px;font-weight:700}.course-in-route-text{width:fit-content}.list-messages{flex-direction:column;justify-content:flex-end;height:100%;display:flex}.welcome-text-content{background:linear-gradient(86deg,var(--Paragraph,#c5c6d0)4.86%,var(--Schemes-Outline-Variant,#44464f)97.15%);-webkit-text-fill-color:transparent;text-align:center;-webkit-background-clip:text;background-clip:text;font-size:36px;font-style:normal;font-weight:400;line-height:44px}.line-tutor-ia{background:linear-gradient(86deg,var(--Paragraph,#c5c6d0)4.86%,var(--Schemes-Outline-Variant,#44464f)97.15%);-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text;font-size:43px;font-style:normal;font-weight:700;line-height:normal}.line-3{font-size:24px;line-height:32px}.icon-container{align-items:flex-end;width:100%;height:56px;position:relative}@keyframes moveAndShrink{0%{width:56px;height:56px;left:calc(50% - 28px)}to{width:32px;height:32px;left:0}}.animated-icon{width:56px;height:56px;animation:1s ease-in-out 3s forwards moveAndShrink;position:absolute;left:calc(50% - 28px)}@keyframes welcomeTextFade{0%{opacity:1;height:128px}to{opacity:0;height:0}}.welcome-text{animation:1s ease-in-out 4s forwards welcomeTextFade;overflow:hidden}@keyframes welcomeContentFade{0%{opacity:0;height:0}to{opacity:1;height:100%}}.welcome-content{height:0;animation:1s ease-in-out 4s forwards welcomeContentFade;overflow:hidden}@keyframes avatarRolFade{0%{opacity:0;height:0}to{opacity:1;height:24px}}.avatar-rol-name{height:0;animation:1s ease-in-out 4s forwards avatarRolFade;overflow:hidden}:root{--black-a1:#0000000d;--black-a2:#0000001a;--black-a3:#00000026;--black-a4:#0003;--black-a5:#0000004d;--black-a6:#0006;--black-a7:#00000080;--black-a8:#0009;--black-a9:#000000b3;--black-a10:#000c;--black-a11:#000000e6;--black-a12:#000000f2}@supports (color:color(display-p3 1 1 1)){@media (color-gamut:p3){:root{--black-a1:color(display-p3 0 0 0/.05);--black-a2:color(display-p3 0 0 0/.1);--black-a3:color(display-p3 0 0 0/.15);--black-a4:color(display-p3 0 0 0/.2);--black-a5:color(display-p3 0 0 0/.3);--black-a6:color(display-p3 0 0 0/.4);--black-a7:color(display-p3 0 0 0/.5);--black-a8:color(display-p3 0 0 0/.6);--black-a9:color(display-p3 0 0 0/.7);--black-a10:color(display-p3 0 0 0/.8);--black-a11:color(display-p3 0 0 0/.9);--black-a12:color(display-p3 0 0 0/.95)}}}:root,.light,.light-theme{--mauve-1:#fdfcfd;--mauve-2:#faf9fb;--mauve-3:#f2eff3;--mauve-4:#eae7ec;--mauve-5:#e3dfe6;--mauve-6:#dbd8e0;--mauve-7:#d0cdd7;--mauve-8:#bcbac7;--mauve-9:#8e8c99;--mauve-10:#84828e;--mauve-11:#65636d;--mauve-12:#211f26}@supports (color:color(display-p3 1 1 1)){@media (color-gamut:p3){:root,.light,.light-theme{--mauve-1:color(display-p3 .991 .988 .992);--mauve-2:color(display-p3 .98 .976 .984);--mauve-3:color(display-p3 .946 .938 .952);--mauve-4:color(display-p3 .915 .906 .925);--mauve-5:color(display-p3 .886 .876 .901);--mauve-6:color(display-p3 .856 .846 .875);--mauve-7:color(display-p3 .814 .804 .84);--mauve-8:color(display-p3 .735 .728 .777);--mauve-9:color(display-p3 .555 .549 .596);--mauve-10:color(display-p3 .514 .508 .552);--mauve-11:color(display-p3 .395 .388 .424);--mauve-12:color(display-p3 .128 .122 .147)}}}:root,.light,.light-theme{--red-1:#fffcfc;--red-2:#fff7f7;--red-3:#feebec;--red-4:#ffdbdc;--red-5:#ffcdce;--red-6:#fdbdbe;--red-7:#f4a9aa;--red-8:#eb8e90;--red-9:#e5484d;--red-10:#dc3e42;--red-11:#ce2c31;--red-12:#641723}@supports (color:color(display-p3 1 1 1)){@media (color-gamut:p3){:root,.light,.light-theme{--red-1:color(display-p3 .998 .989 .988);--red-2:color(display-p3 .995 .971 .971);--red-3:color(display-p3 .985 .925 .925);--red-4:color(display-p3 .999 .866 .866);--red-5:color(display-p3 .984 .812 .811);--red-6:color(display-p3 .955 .751 .749);--red-7:color(display-p3 .915 .675 .672);--red-8:color(display-p3 .872 .575 .572);--red-9:color(display-p3 .83 .329 .324);--red-10:color(display-p3 .798 .294 .285);--red-11:color(display-p3 .744 .234 .222);--red-12:color(display-p3 .36 .115 .143)}}}:root,.light,.light-theme{--violet-1:#fdfcfe;--violet-2:#faf8ff;--violet-3:#f4f0fe;--violet-4:#ebe4ff;--violet-5:#e1d9ff;--violet-6:#d4cafe;--violet-7:#c2b5f5;--violet-8:#aa99ec;--violet-9:#6e56cf;--violet-10:#654dc4;--violet-11:#6550b9;--violet-12:#2f265f}@supports (color:color(display-p3 1 1 1)){@media (color-gamut:p3){:root,.light,.light-theme{--violet-1:color(display-p3 .991 .988 .995);--violet-2:color(display-p3 .978 .974 .998);--violet-3:color(display-p3 .953 .943 .993);--violet-4:color(display-p3 .916 .897 1);--violet-5:color(display-p3 .876 .851 1);--violet-6:color(display-p3 .825 .793 .981);--violet-7:color(display-p3 .752 .712 .943);--violet-8:color(display-p3 .654 .602 .902);--violet-9:color(display-p3 .417 .341 .784);--violet-10:color(display-p3 .381 .306 .741);--violet-11:color(display-p3 .383 .317 .702);--violet-12:color(display-p3 .179 .15 .359)}}}.card-footer{border-top:1px solid var(--Schemes-Outline-Variant,#44464f);border-radius:16px 12px;box-shadow:0 -4px 20px #0000001a}.text-area{max-height:50vh}body{font-family:Arial,Helvetica,sans-serif}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-duration{syntax:"*";inherits:false}';
var m0 = "vercel.ai.error", vS = Symbol.for(m0), g0, xS = class y0 extends Error {
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
    message: l,
    cause: i
  }) {
    super(l), this[g0] = !0, this.name = r, this.cause = i;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(r) {
    return y0.hasMarker(r, m0);
  }
  static hasMarker(r, l) {
    const i = Symbol.for(l);
    return r != null && typeof r == "object" && i in r && typeof r[i] == "boolean" && r[i] === !0;
  }
};
g0 = vS;
var ra = xS;
function b0(t) {
  return t == null ? "unknown error" : typeof t == "string" ? t : t instanceof Error ? t.message : JSON.stringify(t);
}
var v0 = "AI_InvalidArgumentError", x0 = `vercel.ai.error.${v0}`, wS = Symbol.for(x0), w0, SS = class extends ra {
  constructor({
    message: t,
    cause: r,
    argument: l
  }) {
    super({ name: v0, message: t, cause: r }), this[w0] = !0, this.argument = l;
  }
  static isInstance(t) {
    return ra.hasMarker(t, x0);
  }
};
w0 = wS;
var S0 = "AI_JSONParseError", E0 = `vercel.ai.error.${S0}`, ES = Symbol.for(E0), k0, qg = class extends ra {
  constructor({ text: t, cause: r }) {
    super({
      name: S0,
      message: `JSON parsing failed: Text: ${t}.
Error message: ${b0(r)}`,
      cause: r
    }), this[k0] = !0, this.text = t;
  }
  static isInstance(t) {
    return ra.hasMarker(t, E0);
  }
};
k0 = ES;
var C0 = "AI_TypeValidationError", A0 = `vercel.ai.error.${C0}`, kS = Symbol.for(A0), T0, CS = class Df extends ra {
  constructor({ value: r, cause: l }) {
    super({
      name: C0,
      message: `Type validation failed: Value: ${JSON.stringify(r)}.
Error message: ${b0(l)}`,
      cause: l
    }), this[T0] = !0, this.value = r;
  }
  static isInstance(r) {
    return ra.hasMarker(r, A0);
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
    cause: l
  }) {
    return Df.isInstance(l) && l.value === r ? l : new Df({ value: r, cause: l });
  }
};
T0 = kS;
var Vg = CS;
let AS = (t, r = 21) => (l = r) => {
  let i = "", s = l | 0;
  for (; s--; )
    i += t[Math.random() * t.length | 0];
  return i;
};
var Jr = { exports: {} }, Pg;
function TS() {
  if (Pg) return Jr.exports;
  Pg = 1;
  const t = typeof Buffer < "u", r = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, l = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function i(d, m, h) {
    h == null && m !== null && typeof m == "object" && (h = m, m = void 0), t && Buffer.isBuffer(d) && (d = d.toString()), d && d.charCodeAt(0) === 65279 && (d = d.slice(1));
    const y = JSON.parse(d, m);
    if (y === null || typeof y != "object")
      return y;
    const g = h && h.protoAction || "error", b = h && h.constructorAction || "error";
    if (g === "ignore" && b === "ignore")
      return y;
    if (g !== "ignore" && b !== "ignore") {
      if (r.test(d) === !1 && l.test(d) === !1)
        return y;
    } else if (g !== "ignore" && b === "ignore") {
      if (r.test(d) === !1)
        return y;
    } else if (l.test(d) === !1)
      return y;
    return s(y, { protoAction: g, constructorAction: b, safe: h && h.safe });
  }
  function s(d, { protoAction: m = "error", constructorAction: h = "error", safe: y } = {}) {
    let g = [d];
    for (; g.length; ) {
      const b = g;
      g = [];
      for (const v of b) {
        if (m !== "ignore" && Object.prototype.hasOwnProperty.call(v, "__proto__")) {
          if (y === !0)
            return null;
          if (m === "error")
            throw new SyntaxError("Object contains forbidden prototype property");
          delete v.__proto__;
        }
        if (h !== "ignore" && Object.prototype.hasOwnProperty.call(v, "constructor") && Object.prototype.hasOwnProperty.call(v.constructor, "prototype")) {
          if (y === !0)
            return null;
          if (h === "error")
            throw new SyntaxError("Object contains forbidden prototype property");
          delete v.constructor;
        }
        for (const A in v) {
          const C = v[A];
          C && typeof C == "object" && g.push(C);
        }
      }
    }
    return d;
  }
  function u(d, m, h) {
    const y = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return i(d, m, h);
    } finally {
      Error.stackTraceLimit = y;
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
  return Jr.exports = u, Jr.exports.default = u, Jr.exports.parse = u, Jr.exports.safeParse = c, Jr.exports.scan = s, Jr.exports;
}
var _S = TS();
const RS = /* @__PURE__ */ ll(_S);
var DS = ({
  prefix: t,
  size: r = 16,
  alphabet: l = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: i = "-"
} = {}) => {
  const s = AS(l, r);
  if (t == null)
    return s;
  if (l.includes(i))
    throw new SS({
      argument: "separator",
      message: `The separator "${i}" must not be part of the alphabet "${l}".`
    });
  return (u) => `${t}${i}${s(u)}`;
}, od = DS(), Nf = Symbol.for("vercel.ai.validator");
function NS(t) {
  return { [Nf]: !0, validate: t };
}
function OS(t) {
  return typeof t == "object" && t !== null && Nf in t && t[Nf] === !0 && "validate" in t;
}
function MS(t) {
  return OS(t) ? t : zS(t);
}
function zS(t) {
  return NS((r) => {
    const l = t.safeParse(r);
    return l.success ? { success: !0, value: l.data } : { success: !1, error: l.error };
  });
}
function LS({
  value: t,
  schema: r
}) {
  const l = MS(r);
  try {
    if (l.validate == null)
      return { success: !0, value: t };
    const i = l.validate(t);
    return i.success ? i : {
      success: !1,
      error: Vg.wrap({ value: t, cause: i.error })
    };
  } catch (i) {
    return {
      success: !1,
      error: Vg.wrap({ value: t, cause: i })
    };
  }
}
function Yg({
  text: t,
  schema: r
}) {
  try {
    const l = RS.parse(t);
    if (r == null)
      return { success: !0, value: l, rawValue: l };
    const i = LS({ value: l, schema: r });
    return i.success ? { ...i, rawValue: l } : i;
  } catch (l) {
    return {
      success: !1,
      error: qg.isInstance(l) ? l : new qg({ text: t, cause: l })
    };
  }
}
new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
var gi = {
  code: "0",
  name: "text",
  parse: (t) => {
    if (typeof t != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: t };
  }
}, yi = {
  code: "3",
  name: "error",
  parse: (t) => {
    if (typeof t != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: t };
  }
}, bi = {
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
}, vi = {
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
}, xi = {
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
}, jS = [
  gi,
  yi,
  bi,
  vi,
  xi
];
gi.code + "", yi.code + "", bi.code + "", vi.code + "", xi.code + "";
gi.name + "", gi.code, yi.name + "", yi.code, bi.name + "", bi.code, vi.name + "", vi.code, xi.name + "", xi.code;
jS.map((t) => t.code);
function US({
  promptTokens: t,
  completionTokens: r
}) {
  return {
    promptTokens: t,
    completionTokens: r,
    totalTokens: t + r
  };
}
function BS(t) {
  const r = ["ROOT"];
  let l = -1, i = null;
  function s(m, h, y) {
    switch (m) {
      case '"': {
        l = h, r.pop(), r.push(y), r.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        l = h, i = h, r.pop(), r.push(y), r.push("INSIDE_LITERAL");
        break;
      }
      case "-": {
        r.pop(), r.push(y), r.push("INSIDE_NUMBER");
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
        l = h, r.pop(), r.push(y), r.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        l = h, r.pop(), r.push(y), r.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        l = h, r.pop(), r.push(y), r.push("INSIDE_ARRAY_START");
        break;
      }
    }
  }
  function u(m, h) {
    switch (m) {
      case ",": {
        r.pop(), r.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        l = h, r.pop();
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
        l = h, r.pop();
        break;
      }
    }
  }
  for (let m = 0; m < t.length; m++) {
    const h = t[m];
    switch (r[r.length - 1]) {
      case "ROOT":
        s(h, m, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (h) {
          case '"': {
            r.pop(), r.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            l = m, r.pop();
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
        s(h, m, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        u(h, m);
        break;
      }
      case "INSIDE_STRING": {
        switch (h) {
          case '"': {
            r.pop(), l = m;
            break;
          }
          case "\\": {
            r.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            l = m;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (h) {
          case "]": {
            l = m, r.pop();
            break;
          }
          default: {
            l = m, s(h, m, "INSIDE_ARRAY_AFTER_VALUE");
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
            l = m, r.pop();
            break;
          }
          default: {
            l = m;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        s(h, m, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        r.pop(), l = m;
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
            l = m;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            r.pop(), r[r.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && c(h, m), r[r.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && u(h, m);
            break;
          }
          case "}": {
            r.pop(), r[r.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && u(h, m);
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
        const g = t.substring(i, m + 1);
        !"false".startsWith(g) && !"true".startsWith(g) && !"null".startsWith(g) ? (r.pop(), r[r.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? u(h, m) : r[r.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && c(h, m)) : l = m;
        break;
      }
    }
  }
  let d = t.slice(0, l + 1);
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
        const y = t.substring(i, t.length);
        "true".startsWith(y) ? d += "true".slice(y.length) : "false".startsWith(y) ? d += "false".slice(y.length) : "null".startsWith(y) && (d += "null".slice(y.length));
      }
    }
  return d;
}
function IS(t) {
  if (t === void 0)
    return { value: void 0, state: "undefined-input" };
  let r = Yg({ text: t });
  return r.success ? { value: r.value, state: "successful-parse" } : (r = Yg({ text: BS(t) }), r.success ? { value: r.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var HS = {
  code: "0",
  name: "text",
  parse: (t) => {
    if (typeof t != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: t };
  }
}, qS = {
  code: "2",
  name: "data",
  parse: (t) => {
    if (!Array.isArray(t))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: t };
  }
}, VS = {
  code: "3",
  name: "error",
  parse: (t) => {
    if (typeof t != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: t };
  }
}, PS = {
  code: "8",
  name: "message_annotations",
  parse: (t) => {
    if (!Array.isArray(t))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: t };
  }
}, YS = {
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
}, FS = {
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
}, GS = {
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
}, XS = {
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
}, QS = {
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
}, ZS = {
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
}, KS = {
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
}, JS = {
  code: "g",
  name: "reasoning",
  parse: (t) => {
    if (typeof t != "string")
      throw new Error('"reasoning" parts expect a string value.');
    return { type: "reasoning", value: t };
  }
}, $S = {
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
}, WS = {
  code: "i",
  name: "redacted_reasoning",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("data" in t) || typeof t.data != "string")
      throw new Error(
        '"redacted_reasoning" parts expect an object with a "data" property.'
      );
    return { type: "redacted_reasoning", value: { data: t.data } };
  }
}, e2 = {
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
}, t2 = {
  code: "k",
  name: "file",
  parse: (t) => {
    if (t == null || typeof t != "object" || !("data" in t) || typeof t.data != "string" || !("mimeType" in t) || typeof t.mimeType != "string")
      throw new Error(
        '"file" parts expect an object with a "data" and "mimeType" property.'
      );
    return { type: "file", value: t };
  }
}, sd = [
  HS,
  qS,
  VS,
  PS,
  YS,
  FS,
  GS,
  XS,
  QS,
  ZS,
  KS,
  JS,
  $S,
  WS,
  e2,
  t2
], n2 = Object.fromEntries(
  sd.map((t) => [t.code, t])
);
Object.fromEntries(
  sd.map((t) => [t.name, t.code])
);
var r2 = sd.map((t) => t.code), l2 = (t) => {
  const r = t.indexOf(":");
  if (r === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const l = t.slice(0, r);
  if (!r2.includes(l))
    throw new Error(`Failed to parse stream string. Invalid code ${l}.`);
  const i = l, s = t.slice(r + 1), u = JSON.parse(s);
  return n2[i].parse(u);
}, a2 = 10;
function i2(t, r) {
  const l = new Uint8Array(r);
  let i = 0;
  for (const s of t)
    l.set(s, i), i += s.length;
  return t.length = 0, l;
}
async function o2({
  stream: t,
  onTextPart: r,
  onReasoningPart: l,
  onReasoningSignaturePart: i,
  onRedactedReasoningPart: s,
  onSourcePart: u,
  onFilePart: c,
  onDataPart: d,
  onErrorPart: m,
  onToolCallStreamingStartPart: h,
  onToolCallDeltaPart: y,
  onToolCallPart: g,
  onToolResultPart: b,
  onMessageAnnotationsPart: v,
  onFinishMessagePart: A,
  onFinishStepPart: C,
  onStartStepPart: N
}) {
  const T = t.getReader(), I = new TextDecoder(), j = [];
  let Q = 0;
  for (; ; ) {
    const { value: H } = await T.read();
    if (H && (j.push(H), Q += H.length, H[H.length - 1] !== a2))
      continue;
    if (j.length === 0)
      break;
    const R = i2(j, Q);
    Q = 0;
    const F = I.decode(R, { stream: !0 }).split(`
`).filter((V) => V !== "").map(l2);
    for (const { type: V, value: Z } of F)
      switch (V) {
        case "text":
          await (r == null ? void 0 : r(Z));
          break;
        case "reasoning":
          await (l == null ? void 0 : l(Z));
          break;
        case "reasoning_signature":
          await (i == null ? void 0 : i(Z));
          break;
        case "redacted_reasoning":
          await (s == null ? void 0 : s(Z));
          break;
        case "file":
          await (c == null ? void 0 : c(Z));
          break;
        case "source":
          await (u == null ? void 0 : u(Z));
          break;
        case "data":
          await (d == null ? void 0 : d(Z));
          break;
        case "error":
          await (m == null ? void 0 : m(Z));
          break;
        case "message_annotations":
          await (v == null ? void 0 : v(Z));
          break;
        case "tool_call_streaming_start":
          await (h == null ? void 0 : h(Z));
          break;
        case "tool_call_delta":
          await (y == null ? void 0 : y(Z));
          break;
        case "tool_call":
          await (g == null ? void 0 : g(Z));
          break;
        case "tool_result":
          await (b == null ? void 0 : b(Z));
          break;
        case "finish_message":
          await (A == null ? void 0 : A(Z));
          break;
        case "finish_step":
          await (C == null ? void 0 : C(Z));
          break;
        case "start_step":
          await (N == null ? void 0 : N(Z));
          break;
        default: {
          const M = V;
          throw new Error(`Unknown stream part type: ${M}`);
        }
      }
  }
}
async function s2({
  stream: t,
  update: r,
  onToolCall: l,
  onFinish: i,
  generateId: s = od,
  getCurrentDate: u = () => /* @__PURE__ */ new Date(),
  lastMessage: c
}) {
  var d, m;
  const h = (c == null ? void 0 : c.role) === "assistant";
  let y = h ? 1 + // find max step in existing tool invocations:
  ((m = (d = c.toolInvocations) == null ? void 0 : d.reduce((R, F) => {
    var V;
    return Math.max(R, (V = F.step) != null ? V : 0);
  }, 0)) != null ? m : 0) : 0;
  const g = h ? structuredClone(c) : {
    id: s(),
    createdAt: u(),
    role: "assistant",
    content: "",
    parts: []
  };
  let b, v, A;
  function C(R, F) {
    const V = g.parts.find(
      (Z) => Z.type === "tool-invocation" && Z.toolInvocation.toolCallId === R
    );
    V != null ? V.toolInvocation = F : g.parts.push({
      type: "tool-invocation",
      toolInvocation: F
    });
  }
  const N = [];
  let T = h ? c == null ? void 0 : c.annotations : void 0;
  const I = {};
  let j = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, Q = "unknown";
  function H() {
    const R = [...N];
    T != null && T.length && (g.annotations = T);
    const F = {
      // deep copy the message to ensure that deep changes (msg attachments) are updated
      // with SolidJS. SolidJS uses referential integration of sub-objects to detect changes.
      ...structuredClone(g),
      // add a revision id to ensure that the message is updated with SWR. SWR uses a
      // hashing approach by default to detect changes, but it only works for shallow
      // changes. This is why we need to add a revision id to ensure that the message
      // is updated with SWR (without it, the changes get stuck in SWR and are not
      // forwarded to rendering):
      revisionId: s()
    };
    r({
      message: F,
      data: R,
      replaceLastMessage: h
    });
  }
  await o2({
    stream: t,
    onTextPart(R) {
      b == null ? (b = {
        type: "text",
        text: R
      }, g.parts.push(b)) : b.text += R, g.content += R, H();
    },
    onReasoningPart(R) {
      var F;
      A == null ? (A = { type: "text", text: R }, v != null && v.details.push(A)) : A.text += R, v == null ? (v = {
        type: "reasoning",
        reasoning: R,
        details: [A]
      }, g.parts.push(v)) : v.reasoning += R, g.reasoning = ((F = g.reasoning) != null ? F : "") + R, H();
    },
    onReasoningSignaturePart(R) {
      A != null && (A.signature = R.signature);
    },
    onRedactedReasoningPart(R) {
      v == null && (v = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, g.parts.push(v)), v.details.push({
        type: "redacted",
        data: R.data
      }), A = void 0, H();
    },
    onFilePart(R) {
      g.parts.push({
        type: "file",
        mimeType: R.mimeType,
        data: R.data
      }), H();
    },
    onSourcePart(R) {
      g.parts.push({
        type: "source",
        source: R
      }), H();
    },
    onToolCallStreamingStartPart(R) {
      g.toolInvocations == null && (g.toolInvocations = []), I[R.toolCallId] = {
        text: "",
        step: y,
        toolName: R.toolName,
        index: g.toolInvocations.length
      };
      const F = {
        state: "partial-call",
        step: y,
        toolCallId: R.toolCallId,
        toolName: R.toolName,
        args: void 0
      };
      g.toolInvocations.push(F), C(R.toolCallId, F), H();
    },
    onToolCallDeltaPart(R) {
      const F = I[R.toolCallId];
      F.text += R.argsTextDelta;
      const { value: V } = IS(F.text), Z = {
        state: "partial-call",
        step: F.step,
        toolCallId: R.toolCallId,
        toolName: F.toolName,
        args: V
      };
      g.toolInvocations[F.index] = Z, C(R.toolCallId, Z), H();
    },
    async onToolCallPart(R) {
      const F = {
        state: "call",
        step: y,
        ...R
      };
      if (I[R.toolCallId] != null ? g.toolInvocations[I[R.toolCallId].index] = F : (g.toolInvocations == null && (g.toolInvocations = []), g.toolInvocations.push(F)), C(R.toolCallId, F), H(), l) {
        const V = await l({ toolCall: R });
        if (V != null) {
          const Z = {
            state: "result",
            step: y,
            ...R,
            result: V
          };
          g.toolInvocations[g.toolInvocations.length - 1] = Z, C(R.toolCallId, Z), H();
        }
      }
    },
    onToolResultPart(R) {
      const F = g.toolInvocations;
      if (F == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const V = F.findIndex(
        (M) => M.toolCallId === R.toolCallId
      );
      if (V === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const Z = {
        ...F[V],
        state: "result",
        ...R
      };
      F[V] = Z, C(R.toolCallId, Z), H();
    },
    onDataPart(R) {
      N.push(...R), H();
    },
    onMessageAnnotationsPart(R) {
      T == null ? T = [...R] : T.push(...R), H();
    },
    onFinishStepPart(R) {
      y += 1, b = R.isContinued ? b : void 0, v = void 0, A = void 0;
    },
    onStartStepPart(R) {
      h || (g.id = R.messageId), g.parts.push({ type: "step-start" }), H();
    },
    onFinishMessagePart(R) {
      Q = R.finishReason, R.usage != null && (j = US(R.usage));
    },
    onErrorPart(R) {
      throw new Error(R);
    }
  }), i == null || i({ message: g, finishReason: Q, usage: j });
}
async function u2({
  stream: t,
  onTextPart: r
}) {
  const l = t.pipeThrough(new TextDecoderStream()).getReader();
  for (; ; ) {
    const { done: i, value: s } = await l.read();
    if (i)
      break;
    await r(s);
  }
}
async function c2({
  stream: t,
  update: r,
  onFinish: l,
  getCurrentDate: i = () => /* @__PURE__ */ new Date(),
  generateId: s = od
}) {
  const u = { type: "text", text: "" }, c = {
    id: s(),
    createdAt: i(),
    role: "assistant",
    content: "",
    parts: [u]
  };
  await u2({
    stream: t,
    onTextPart: (d) => {
      c.content += d, u.text += d, r({
        message: { ...c },
        data: [],
        replaceLastMessage: !1
      });
    }
  }), l == null || l(c, {
    usage: { completionTokens: NaN, promptTokens: NaN, totalTokens: NaN },
    finishReason: "unknown"
  });
}
var f2 = () => fetch;
async function d2({
  api: t,
  body: r,
  streamProtocol: l = "data",
  credentials: i,
  headers: s,
  abortController: u,
  restoreMessagesOnFailure: c,
  onResponse: d,
  onUpdate: m,
  onFinish: h,
  onToolCall: y,
  generateId: g,
  fetch: b = f2(),
  lastMessage: v,
  requestType: A = "generate"
}) {
  var C, N, T;
  const j = await (A === "resume" ? b(`${t}?chatId=${r.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...s
    },
    signal: (C = u == null ? void 0 : u()) == null ? void 0 : C.signal,
    credentials: i
  }) : b(t, {
    method: "POST",
    body: JSON.stringify(r),
    headers: {
      "Content-Type": "application/json",
      ...s
    },
    signal: (N = u == null ? void 0 : u()) == null ? void 0 : N.signal,
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
  switch (l) {
    case "text": {
      await c2({
        stream: j.body,
        update: m,
        onFinish: h,
        generateId: g
      });
      return;
    }
    case "data": {
      await s2({
        stream: j.body,
        update: m,
        lastMessage: v,
        onToolCall: y,
        onFinish({ message: Q, finishReason: H, usage: R }) {
          h && Q != null && h(Q, { usage: R, finishReason: H });
        },
        generateId: g
      });
      return;
    }
    default: {
      const Q = l;
      throw new Error(`Unknown stream protocol: ${Q}`);
    }
  }
}
function Of(t) {
  return t == null ? void 0 : t.reduce((r, l) => {
    var i;
    return Math.max(r, (i = l.step) != null ? i : 0);
  }, 0);
}
function _0(t) {
  var r;
  return (r = t.parts) != null ? r : [
    ...t.toolInvocations ? t.toolInvocations.map((l) => ({
      type: "tool-invocation",
      toolInvocation: l
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
function Gc(t) {
  return t.map((r) => ({
    ...r,
    parts: _0(r)
  }));
}
function Mf(t, r) {
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
    for (let s = 0; s < t.length; s++)
      if (!Mf(t[s], r[s]))
        return !1;
    return !0;
  }
  const l = Object.keys(t), i = Object.keys(r);
  if (l.length !== i.length)
    return !1;
  for (const s of l)
    if (!i.includes(s) || !Mf(t[s], r[s]))
      return !1;
  return !0;
}
async function Fg(t) {
  if (!t)
    return [];
  if (globalThis.FileList && t instanceof globalThis.FileList)
    return Promise.all(
      Array.from(t).map(async (r) => {
        const { name: l, type: i } = r, s = await new Promise((u, c) => {
          const d = new FileReader();
          d.onload = (m) => {
            var h;
            u((h = m.target) == null ? void 0 : h.result);
          }, d.onerror = (m) => c(m), d.readAsDataURL(r);
        });
        return {
          name: l,
          contentType: i,
          url: s
        };
      })
    );
  if (Array.isArray(t))
    return t;
  throw new Error("Invalid attachments type");
}
function h2({
  originalMaxToolInvocationStep: t,
  originalMessageCount: r,
  maxSteps: l,
  messages: i
}) {
  var s;
  const u = i[i.length - 1];
  return (
    // check if the feature is enabled:
    l > 1 && // ensure there is a last message:
    u != null && // ensure we actually have new steps (to prevent infinite loops in case of errors):
    (i.length > r || Of(u.toolInvocations) !== t) && // check that next step is possible:
    R0(u) && // limit the number of automatic steps:
    ((s = Of(u.toolInvocations)) != null ? s : 0) < l
  );
}
function R0(t) {
  if (t.role !== "assistant")
    return !1;
  const r = t.parts.reduce((i, s, u) => s.type === "step-start" ? u : i, -1), l = t.parts.slice(r + 1).filter((i) => i.type === "tool-invocation");
  return l.length > 0 && l.every((i) => "result" in i.toolInvocation);
}
function p2({
  messages: t,
  toolCallId: r,
  toolResult: l
}) {
  var i;
  const s = t[t.length - 1], u = s.parts.find(
    (d) => d.type === "tool-invocation" && d.toolInvocation.toolCallId === r
  );
  if (u == null)
    return;
  const c = {
    ...u.toolInvocation,
    state: "result",
    result: l
  };
  u.toolInvocation = c, s.toolInvocations = (i = s.toolInvocations) == null ? void 0 : i.map(
    (d) => d.toolCallId === r ? c : d
  );
}
var E = ps();
const ms = /* @__PURE__ */ ll(E), D0 = /* @__PURE__ */ oS({
  __proto__: null,
  default: ms
}, [E]);
var Xc = { exports: {} }, Qc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gg;
function m2() {
  if (Gg) return Qc;
  Gg = 1;
  var t = ps();
  function r(g, b) {
    return g === b && (g !== 0 || 1 / g === 1 / b) || g !== g && b !== b;
  }
  var l = typeof Object.is == "function" ? Object.is : r, i = t.useState, s = t.useEffect, u = t.useLayoutEffect, c = t.useDebugValue;
  function d(g, b) {
    var v = b(), A = i({ inst: { value: v, getSnapshot: b } }), C = A[0].inst, N = A[1];
    return u(
      function() {
        C.value = v, C.getSnapshot = b, m(C) && N({ inst: C });
      },
      [g, v, b]
    ), s(
      function() {
        return m(C) && N({ inst: C }), g(function() {
          m(C) && N({ inst: C });
        });
      },
      [g]
    ), c(v), v;
  }
  function m(g) {
    var b = g.getSnapshot;
    g = g.value;
    try {
      var v = b();
      return !l(g, v);
    } catch {
      return !0;
    }
  }
  function h(g, b) {
    return b();
  }
  var y = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : d;
  return Qc.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : y, Qc;
}
var Xg;
function g2() {
  return Xg || (Xg = 1, Xc.exports = m2()), Xc.exports;
}
var N0 = g2();
const O0 = 0, M0 = 1, z0 = 2, Qg = 3;
var Zg = Object.prototype.hasOwnProperty;
function zf(t, r) {
  var l, i;
  if (t === r) return !0;
  if (t && r && (l = t.constructor) === r.constructor) {
    if (l === Date) return t.getTime() === r.getTime();
    if (l === RegExp) return t.toString() === r.toString();
    if (l === Array) {
      if ((i = t.length) === r.length)
        for (; i-- && zf(t[i], r[i]); ) ;
      return i === -1;
    }
    if (!l || typeof t == "object") {
      i = 0;
      for (l in t)
        if (Zg.call(t, l) && ++i && !Zg.call(r, l) || !(l in r) || !zf(t[l], r[l])) return !1;
      return Object.keys(r).length === i;
    }
  }
  return t !== t && r !== r;
}
const Kn = /* @__PURE__ */ new WeakMap(), Rr = () => {
}, Lt = (
  /*#__NOINLINE__*/
  Rr()
), Lf = Object, Ie = (t) => t === Lt, Rn = (t) => typeof t == "function", Dr = (t, r) => ({
  ...t,
  ...r
}), L0 = (t) => Rn(t.then), Zc = {}, qo = {}, ud = "undefined", ki = typeof window != ud, jf = typeof document != ud, y2 = ki && "Deno" in window, b2 = () => ki && typeof window.requestAnimationFrame != ud, j0 = (t, r) => {
  const l = Kn.get(t);
  return [
    // Getter
    () => !Ie(r) && t.get(r) || Zc,
    // Setter
    (i) => {
      if (!Ie(r)) {
        const s = t.get(r);
        r in qo || (qo[r] = s), l[5](r, Dr(s, i), s || Zc);
      }
    },
    // Subscriber
    l[6],
    // Get server cache snapshot
    () => !Ie(r) && r in qo ? qo[r] : !Ie(r) && t.get(r) || Zc
  ];
};
let Uf = !0;
const v2 = () => Uf, [Bf, If] = ki && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  Rr,
  Rr
], x2 = () => {
  const t = jf && document.visibilityState;
  return Ie(t) || t !== "hidden";
}, w2 = (t) => (jf && document.addEventListener("visibilitychange", t), Bf("focus", t), () => {
  jf && document.removeEventListener("visibilitychange", t), If("focus", t);
}), S2 = (t) => {
  const r = () => {
    Uf = !0, t();
  }, l = () => {
    Uf = !1;
  };
  return Bf("online", r), Bf("offline", l), () => {
    If("online", r), If("offline", l);
  };
}, E2 = {
  isOnline: v2,
  isVisible: x2
}, k2 = {
  initFocus: w2,
  initReconnect: S2
}, Kg = !ms.useId, wi = !ki || y2, C2 = (t) => b2() ? window.requestAnimationFrame(t) : setTimeout(t, 1), Kc = wi ? E.useEffect : E.useLayoutEffect, Jc = typeof navigator < "u" && navigator.connection, Jg = !wi && Jc && ([
  "slow-2g",
  "2g"
].includes(Jc.effectiveType) || Jc.saveData), Vo = /* @__PURE__ */ new WeakMap(), $c = (t, r) => Lf.prototype.toString.call(t) === `[object ${r}]`;
let A2 = 0;
const Hf = (t) => {
  const r = typeof t, l = $c(t, "Date"), i = $c(t, "RegExp"), s = $c(t, "Object");
  let u, c;
  if (Lf(t) === t && !l && !i) {
    if (u = Vo.get(t), u) return u;
    if (u = ++A2 + "~", Vo.set(t, u), Array.isArray(t)) {
      for (u = "@", c = 0; c < t.length; c++)
        u += Hf(t[c]) + ",";
      Vo.set(t, u);
    }
    if (s) {
      u = "#";
      const d = Lf.keys(t).sort();
      for (; !Ie(c = d.pop()); )
        Ie(t[c]) || (u += c + ":" + Hf(t[c]) + ",");
      Vo.set(t, u);
    }
  } else
    u = l ? t.toJSON() : r == "symbol" ? t.toString() : r == "string" ? JSON.stringify(t) : "" + t;
  return u;
}, cd = (t) => {
  if (Rn(t))
    try {
      t = t();
    } catch {
      t = "";
    }
  const r = t;
  return t = typeof t == "string" ? t : (Array.isArray(t) ? t.length : t) ? Hf(t) : "", [
    t,
    r
  ];
};
let T2 = 0;
const qf = () => ++T2;
async function U0(...t) {
  const [r, l, i, s] = t, u = Dr({
    populateCache: !0,
    throwOnError: !0
  }, typeof s == "boolean" ? {
    revalidate: s
  } : s || {});
  let c = u.populateCache;
  const d = u.rollbackOnError;
  let m = u.optimisticData;
  const h = (b) => typeof d == "function" ? d(b) : d !== !1, y = u.throwOnError;
  if (Rn(l)) {
    const b = l, v = [], A = r.keys();
    for (const C of A)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(C) && b(r.get(C)._k) && v.push(C);
    return Promise.all(v.map(g));
  }
  return g(l);
  async function g(b) {
    const [v] = cd(b);
    if (!v) return;
    const [A, C] = j0(r, v), [N, T, I, j] = Kn.get(r), Q = () => {
      const oe = N[v];
      return (Rn(u.revalidate) ? u.revalidate(A().data, b) : u.revalidate !== !1) && (delete I[v], delete j[v], oe && oe[0]) ? oe[0](z0).then(() => A().data) : A().data;
    };
    if (t.length < 3)
      return Q();
    let H = i, R;
    const F = qf();
    T[v] = [
      F,
      0
    ];
    const V = !Ie(m), Z = A(), M = Z.data, re = Z._c, te = Ie(re) ? M : re;
    if (V && (m = Rn(m) ? m(te, M) : m, C({
      data: m,
      _c: te
    })), Rn(H))
      try {
        H = H(te);
      } catch (oe) {
        R = oe;
      }
    if (H && L0(H))
      if (H = await H.catch((oe) => {
        R = oe;
      }), F !== T[v][0]) {
        if (R) throw R;
        return H;
      } else R && V && h(R) && (c = !0, C({
        data: te,
        _c: Lt
      }));
    if (c && !R)
      if (Rn(c)) {
        const oe = c(H, te);
        C({
          data: oe,
          error: Lt,
          _c: Lt
        });
      } else
        C({
          data: H,
          error: Lt,
          _c: Lt
        });
    if (T[v][1] = qf(), Promise.resolve(Q()).then(() => {
      C({
        _c: Lt
      });
    }), R) {
      if (y) throw R;
      return;
    }
    return H;
  }
}
const $g = (t, r) => {
  for (const l in t)
    t[l][0] && t[l][0](r);
}, _2 = (t, r) => {
  if (!Kn.has(t)) {
    const l = Dr(k2, r), i = /* @__PURE__ */ Object.create(null), s = U0.bind(Lt, t);
    let u = Rr;
    const c = /* @__PURE__ */ Object.create(null), d = (y, g) => {
      const b = c[y] || [];
      return c[y] = b, b.push(g), () => b.splice(b.indexOf(g), 1);
    }, m = (y, g, b) => {
      t.set(y, g);
      const v = c[y];
      if (v)
        for (const A of v)
          A(g, b);
    }, h = () => {
      if (!Kn.has(t) && (Kn.set(t, [
        i,
        /* @__PURE__ */ Object.create(null),
        /* @__PURE__ */ Object.create(null),
        /* @__PURE__ */ Object.create(null),
        s,
        m,
        d
      ]), !wi)) {
        const y = l.initFocus(setTimeout.bind(Lt, $g.bind(Lt, i, O0))), g = l.initReconnect(setTimeout.bind(Lt, $g.bind(Lt, i, M0)));
        u = () => {
          y && y(), g && g(), Kn.delete(t);
        };
      }
    };
    return h(), [
      t,
      s,
      h,
      u
    ];
  }
  return [
    t,
    Kn.get(t)[4]
  ];
}, R2 = (t, r, l, i, s) => {
  const u = l.errorRetryCount, c = s.retryCount, d = ~~((Math.random() + 0.5) * (1 << (c < 8 ? c : 8))) * l.errorRetryInterval;
  !Ie(u) && c > u || setTimeout(i, d, s);
}, D2 = zf, [B0, N2] = _2(/* @__PURE__ */ new Map()), O2 = Dr(
  {
    // events
    onLoadingSlow: Rr,
    onSuccess: Rr,
    onError: Rr,
    onErrorRetry: R2,
    onDiscarded: Rr,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: Jg ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: Jg ? 5e3 : 3e3,
    // providers
    compare: D2,
    isPaused: () => !1,
    cache: B0,
    mutate: N2,
    fallback: {}
  },
  // use web preset by default
  E2
), M2 = (t, r) => {
  const l = Dr(t, r);
  if (r) {
    const { use: i, fallback: s } = t, { use: u, fallback: c } = r;
    i && u && (l.use = i.concat(u)), s && c && (l.fallback = Dr(s, c));
  }
  return l;
}, z2 = E.createContext({}), L2 = "$inf$", I0 = ki && window.__SWR_DEVTOOLS_USE__, j2 = I0 ? window.__SWR_DEVTOOLS_USE__ : [], U2 = () => {
  I0 && (window.__SWR_DEVTOOLS_REACT__ = ms);
}, B2 = (t) => Rn(t[1]) ? [
  t[0],
  t[1],
  t[2] || {}
] : [
  t[0],
  null,
  (t[1] === null ? t[2] : t[1]) || {}
], I2 = () => Dr(O2, E.useContext(z2)), H2 = (t) => (r, l, i) => t(r, l && ((...u) => {
  const [c] = cd(r), [, , , d] = Kn.get(B0);
  if (c.startsWith(L2))
    return l(...u);
  const m = d[c];
  return Ie(m) ? l(...u) : (delete d[c], m);
}), i), q2 = j2.concat(H2), V2 = (t) => function(...l) {
  const i = I2(), [s, u, c] = B2(l), d = M2(i, c);
  let m = t;
  const { use: h } = d, y = (h || []).concat(q2);
  for (let g = y.length; g--; )
    m = y[g](m);
  return m(s, u || d.fetcher || null, d);
}, P2 = (t, r, l) => {
  const i = r[t] || (r[t] = []);
  return i.push(l), () => {
    const s = i.indexOf(l);
    s >= 0 && (i[s] = i[i.length - 1], i.pop());
  };
};
U2();
const Wc = ms.use || // This extra generic is to avoid TypeScript mixing up the generic and JSX sytax
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
}), ef = {
  dedupe: !0
}, Y2 = (t, r, l) => {
  const { cache: i, compare: s, suspense: u, fallbackData: c, revalidateOnMount: d, revalidateIfStale: m, refreshInterval: h, refreshWhenHidden: y, refreshWhenOffline: g, keepPreviousData: b } = l, [v, A, C, N] = Kn.get(i), [T, I] = cd(t), j = E.useRef(!1), Q = E.useRef(!1), H = E.useRef(T), R = E.useRef(r), F = E.useRef(l), V = () => F.current, Z = () => V().isVisible() && V().isOnline(), [M, re, te, oe] = j0(i, T), ne = E.useRef({}).current, ie = Ie(c) ? Ie(l.fallback) ? Lt : l.fallback[T] : c, B = (Se, ve) => {
    for (const Me in ne) {
      const Ae = Me;
      if (Ae === "data") {
        if (!s(Se[Ae], ve[Ae]) && (!Ie(Se[Ae]) || !s(ye, ve[Ae])))
          return !1;
      } else if (ve[Ae] !== Se[Ae])
        return !1;
    }
    return !0;
  }, W = E.useMemo(() => {
    const Se = !T || !r ? !1 : Ie(d) ? V().isPaused() || u ? !1 : m !== !1 : d, ve = (Ye) => {
      const ct = Dr(Ye);
      return delete ct._k, Se ? {
        isValidating: !0,
        isLoading: !0,
        ...ct
      } : ct;
    }, Me = M(), Ae = oe(), Ve = ve(Me), kt = Me === Ae ? Ve : ve(Ae);
    let Fe = Ve;
    return [
      () => {
        const Ye = ve(M());
        return B(Ye, Fe) ? (Fe.data = Ye.data, Fe.isLoading = Ye.isLoading, Fe.isValidating = Ye.isValidating, Fe.error = Ye.error, Fe) : (Fe = Ye, Ye);
      },
      () => kt
    ];
  }, [
    i,
    T
  ]), G = N0.useSyncExternalStore(E.useCallback(
    (Se) => te(T, (ve, Me) => {
      B(Me, ve) || Se();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      i,
      T
    ]
  ), W[0], W[1]), ge = !j.current, w = v[T] && v[T].length > 0, X = G.data, le = Ie(X) ? ie && L0(ie) ? Wc(ie) : ie : X, k = G.error, se = E.useRef(le), ye = b ? Ie(X) ? Ie(se.current) ? le : se.current : X : le, ue = w && !Ie(k) ? !1 : ge && !Ie(d) ? d : V().isPaused() ? !1 : u ? Ie(le) ? !1 : m : Ie(le) || m, ke = !!(T && r && ge && ue), Te = Ie(G.isValidating) ? ke : G.isValidating, tt = Ie(G.isLoading) ? ke : G.isLoading, rt = E.useCallback(
    async (Se) => {
      const ve = R.current;
      if (!T || !ve || Q.current || V().isPaused())
        return !1;
      let Me, Ae, Ve = !0;
      const kt = Se || {}, Fe = !C[T] || !kt.dedupe, Ye = () => Kg ? !Q.current && T === H.current && j.current : T === H.current, ct = {
        isValidating: !1,
        isLoading: !1
      }, tr = () => {
        re(ct);
      }, Mn = () => {
        const pt = C[T];
        pt && pt[1] === Ae && delete C[T];
      }, nr = {
        isValidating: !0
      };
      Ie(M().data) && (nr.isLoading = !0);
      try {
        if (Fe && (re(nr), l.loadingTimeout && Ie(M().data) && setTimeout(() => {
          Ve && Ye() && V().onLoadingSlow(T, l);
        }, l.loadingTimeout), C[T] = [
          ve(I),
          qf()
        ]), [Me, Ae] = C[T], Me = await Me, Fe && setTimeout(Mn, l.dedupingInterval), !C[T] || C[T][1] !== Ae)
          return Fe && Ye() && V().onDiscarded(T), !1;
        ct.error = Lt;
        const pt = A[T];
        if (!Ie(pt) && // case 1
        (Ae <= pt[0] || // case 2
        Ae <= pt[1] || // case 3
        pt[1] === 0))
          return tr(), Fe && Ye() && V().onDiscarded(T), !1;
        const Y = M().data;
        ct.data = s(Y, Me) ? Y : Me, Fe && Ye() && V().onSuccess(Me, T, l);
      } catch (pt) {
        Mn();
        const Y = V(), { shouldRetryOnError: ee } = Y;
        Y.isPaused() || (ct.error = pt, Fe && Ye() && (Y.onError(pt, T, Y), (ee === !0 || Rn(ee) && ee(pt)) && (!V().revalidateOnFocus || !V().revalidateOnReconnect || Z()) && Y.onErrorRetry(pt, T, Y, (he) => {
          const me = v[T];
          me && me[0] && me[0](Qg, he);
        }, {
          retryCount: (kt.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return Ve = !1, tr(), !0;
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
  ), bt = E.useCallback(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...Se) => U0(i, H.current, ...Se),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (Kc(() => {
    R.current = r, F.current = l, Ie(X) || (se.current = X);
  }), Kc(() => {
    if (!T) return;
    const Se = rt.bind(Lt, ef);
    let ve = 0;
    V().revalidateOnFocus && (ve = Date.now() + V().focusThrottleInterval);
    const Ae = P2(T, v, (Ve, kt = {}) => {
      if (Ve == O0) {
        const Fe = Date.now();
        V().revalidateOnFocus && Fe > ve && Z() && (ve = Fe + V().focusThrottleInterval, Se());
      } else if (Ve == M0)
        V().revalidateOnReconnect && Z() && Se();
      else {
        if (Ve == z0)
          return rt();
        if (Ve == Qg)
          return rt(kt);
      }
    });
    return Q.current = !1, H.current = T, j.current = !0, re({
      _k: I
    }), ue && (Ie(le) || wi ? Se() : C2(Se)), () => {
      Q.current = !0, Ae();
    };
  }, [
    T
  ]), Kc(() => {
    let Se;
    function ve() {
      const Ae = Rn(h) ? h(M().data) : h;
      Ae && Se !== -1 && (Se = setTimeout(Me, Ae));
    }
    function Me() {
      !M().error && (y || V().isVisible()) && (g || V().isOnline()) ? rt(ef).then(ve) : ve();
    }
    return ve(), () => {
      Se && (clearTimeout(Se), Se = -1);
    };
  }, [
    h,
    y,
    g,
    T
  ]), E.useDebugValue(ye), u && Ie(le) && T) {
    if (!Kg && wi)
      throw new Error("Fallback data is required when using Suspense in SSR.");
    R.current = r, F.current = l, Q.current = !1;
    const Se = N[T];
    if (!Ie(Se)) {
      const ve = bt(Se);
      Wc(ve);
    }
    if (Ie(k)) {
      const ve = rt(ef);
      Ie(ye) || (ve.status = "fulfilled", ve.value = !0), Wc(ve);
    } else
      throw k;
  }
  return {
    mutate: bt,
    get data() {
      return ne.data = !0, ye;
    },
    get error() {
      return ne.error = !0, k;
    },
    get isValidating() {
      return ne.isValidating = !0, Te;
    },
    get isLoading() {
      return ne.isLoading = !0, tt;
    }
  };
}, Po = V2(Y2);
var tf, Wg;
function F2() {
  if (Wg) return tf;
  Wg = 1;
  function t(r, l) {
    if (typeof r != "function")
      throw new TypeError(`Expected the first argument to be a \`function\`, got \`${typeof r}\`.`);
    let i, s = 0;
    return function(...c) {
      clearTimeout(i);
      const d = Date.now(), m = d - s, h = l - m;
      h <= 0 ? (s = d, r.apply(this, c)) : i = setTimeout(() => {
        s = Date.now(), r.apply(this, c);
      }, h);
    };
  }
  return tf = t, tf;
}
var G2 = /* @__PURE__ */ F2();
const X2 = /* @__PURE__ */ ll(G2);
function ey(t, r) {
  return r != null ? X2(t, r) : t;
}
function Q2(t) {
  const [r, l] = E.useState(t);
  return E.useEffect(() => {
    Mf(t, r) || l(t);
  }, [t, r]), r;
}
function Z2({
  api: t = "/api/chat",
  id: r,
  initialMessages: l,
  initialInput: i = "",
  sendExtraMessageFields: s,
  onToolCall: u,
  experimental_prepareRequestBody: c,
  maxSteps: d = 1,
  streamProtocol: m = "data",
  onResponse: h,
  onFinish: y,
  onError: g,
  credentials: b,
  headers: v,
  body: A,
  generateId: C = od,
  fetch: N,
  keepLastMessageOnError: T = !0,
  experimental_throttle: I
} = {}) {
  const [j] = E.useState(C), Q = r ?? j, H = typeof t == "string" ? [t, Q] : Q, R = Q2(l ?? []), F = E.useMemo(
    () => Gc(R),
    [R]
  ), { data: V, mutate: Z } = Po(
    [H, "messages"],
    null,
    { fallbackData: F }
  ), M = E.useRef(V || []);
  E.useEffect(() => {
    M.current = V || [];
  }, [V]);
  const { data: re, mutate: te } = Po([H, "streamData"], null), oe = E.useRef(re);
  E.useEffect(() => {
    oe.current = re;
  }, [re]);
  const { data: ne = "ready", mutate: ie } = Po([H, "status"], null), { data: B = void 0, mutate: W } = Po([H, "error"], null), G = E.useRef(null), ge = E.useRef({
    credentials: b,
    headers: v,
    body: A
  });
  E.useEffect(() => {
    ge.current = {
      credentials: b,
      headers: v,
      body: A
    };
  }, [b, v, A]);
  const w = E.useCallback(
    async (Ce, Se = "generate") => {
      var ve, Me;
      ie("submitted"), W(void 0);
      const Ae = Gc(Ce.messages), Ve = Ae.length, kt = Of(
        (ve = Ae[Ae.length - 1]) == null ? void 0 : ve.toolInvocations
      );
      try {
        const Ye = new AbortController();
        G.current = Ye;
        const ct = ey(Z, I), tr = ey(
          te,
          I
        ), Mn = M.current;
        ct(Ae, !1);
        const nr = s ? Ae : Ae.map(
          ({
            role: Y,
            content: ee,
            experimental_attachments: he,
            data: me,
            annotations: He,
            toolInvocations: _t,
            parts: tn
          }) => ({
            role: Y,
            content: ee,
            ...he !== void 0 && {
              experimental_attachments: he
            },
            ...me !== void 0 && { data: me },
            ...He !== void 0 && { annotations: He },
            ..._t !== void 0 && { toolInvocations: _t },
            ...tn !== void 0 && { parts: tn }
          })
        ), pt = oe.current;
        await d2({
          api: t,
          body: (Me = c == null ? void 0 : c({
            id: Q,
            messages: Ae,
            requestData: Ce.data,
            requestBody: Ce.body
          })) != null ? Me : {
            id: Q,
            messages: nr,
            data: Ce.data,
            ...ge.current.body,
            ...Ce.body
          },
          streamProtocol: m,
          credentials: ge.current.credentials,
          headers: {
            ...ge.current.headers,
            ...Ce.headers
          },
          abortController: () => G.current,
          restoreMessagesOnFailure() {
            T || ct(Mn, !1);
          },
          onResponse: h,
          onUpdate({ message: Y, data: ee, replaceLastMessage: he }) {
            ie("streaming"), ct(
              [
                ...he ? Ae.slice(0, Ae.length - 1) : Ae,
                Y
              ],
              !1
            ), ee != null && ee.length && tr(
              [...pt ?? [], ...ee],
              !1
            );
          },
          onToolCall: u,
          onFinish: y,
          generateId: C,
          fetch: N,
          lastMessage: Ae[Ae.length - 1],
          requestType: Se
        }), G.current = null, ie("ready");
      } catch (Ye) {
        if (Ye.name === "AbortError")
          return G.current = null, ie("ready"), null;
        g && Ye instanceof Error && g(Ye), W(Ye), ie("error");
      }
      const Fe = M.current;
      h2({
        originalMaxToolInvocationStep: kt,
        originalMessageCount: Ve,
        maxSteps: d,
        messages: Fe
      }) && await w({ messages: Fe });
    },
    [
      Z,
      ie,
      t,
      ge,
      h,
      y,
      g,
      W,
      te,
      oe,
      m,
      s,
      c,
      u,
      d,
      M,
      G,
      C,
      N,
      T,
      I,
      Q
    ]
  ), X = E.useCallback(
    async (Ce, {
      data: Se,
      headers: ve,
      body: Me,
      experimental_attachments: Ae = Ce.experimental_attachments
    } = {}) => {
      var Ve, kt;
      const Fe = await Fg(
        Ae
      ), Ye = M.current.concat({
        ...Ce,
        id: (Ve = Ce.id) != null ? Ve : C(),
        createdAt: (kt = Ce.createdAt) != null ? kt : /* @__PURE__ */ new Date(),
        experimental_attachments: Fe.length > 0 ? Fe : void 0,
        parts: _0(Ce)
      });
      return w({ messages: Ye, headers: ve, body: Me, data: Se });
    },
    [w, C]
  ), le = E.useCallback(
    async ({ data: Ce, headers: Se, body: ve } = {}) => {
      const Me = M.current;
      if (Me.length === 0)
        return null;
      const Ae = Me[Me.length - 1];
      return w({
        messages: Ae.role === "assistant" ? Me.slice(0, -1) : Me,
        headers: Se,
        body: ve,
        data: Ce
      });
    },
    [w]
  ), k = E.useCallback(() => {
    G.current && (G.current.abort(), G.current = null);
  }, []), se = E.useCallback(async () => {
    const Ce = M.current;
    w({ messages: Ce }, "resume");
  }, [w]), ye = E.useCallback(
    (Ce) => {
      typeof Ce == "function" && (Ce = Ce(M.current));
      const Se = Gc(Ce);
      Z(Se, !1), M.current = Se;
    },
    [Z]
  ), ue = E.useCallback(
    (Ce) => {
      typeof Ce == "function" && (Ce = Ce(oe.current)), te(Ce, !1), oe.current = Ce;
    },
    [te]
  ), [ke, Te] = E.useState(i), tt = E.useCallback(
    async (Ce, Se = {}, ve) => {
      var Me;
      if ((Me = Ce == null ? void 0 : Ce.preventDefault) == null || Me.call(Ce), !ke && !Se.allowEmptySubmit)
        return;
      ve && (ge.current = {
        ...ge.current,
        ...ve
      });
      const Ae = await Fg(
        Se.experimental_attachments
      ), kt = {
        messages: M.current.concat({
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
  }, bt = E.useCallback(
    ({ toolCallId: Ce, result: Se }) => {
      const ve = M.current;
      if (p2({
        messages: ve,
        toolCallId: Ce,
        toolResult: Se
      }), Z(
        [
          ...ve.slice(0, ve.length - 1),
          { ...ve[ve.length - 1] }
        ],
        !1
      ), ne === "submitted" || ne === "streaming")
        return;
      const Me = ve[ve.length - 1];
      R0(Me) && w({ messages: ve });
    },
    [Z, ne, w]
  );
  return {
    messages: V ?? [],
    id: Q,
    setMessages: ye,
    data: re,
    setData: ue,
    error: B,
    append: X,
    reload: le,
    stop: k,
    experimental_resume: se,
    input: ke,
    setInput: Te,
    handleInputChange: rt,
    handleSubmit: tt,
    isLoading: ne === "submitted" || ne === "streaming",
    status: ne,
    addToolResult: bt
  };
}
async function K2(t, r, l) {
  const i = `${l}/chatbotapi/cqrs/query/get_chatbot_by_question_query`, s = await fetch(`${i}?question=${t}&companyid=${r}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!s.ok)
    throw new Error("Error al obtener la respuesta de la API");
  return (await s.json()).data || "No se encontró una respuesta.";
}
const J2 = "Tu pregunta contiene lenguaje inapropiado. Por favor, reformúlala.", $2 = "Tu chat ha sido suspendido por lenguaje inapropiado. Por favor, inténtalo de nuevo más tarde.", W2 = "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde", eE = `¡Hola! Soy TutorIA, tu asistente virtual. Estoy aquí para:
      

1️⃣    Ayudarte a encontrar rutas de aprendizaje sugeridas.
      

2️⃣     Recomendarte cursos según tus intereses. 
      

Escribe qué te interesa aprender o explora sugerencias.`, Yo = {
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
  userName: "Default User Name",
  baseUrl: "https://narpdev.opitech.com.co/"
};
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tE = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), nE = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, l, i) => i ? i.toUpperCase() : l.toLowerCase()
), ty = (t) => {
  const r = nE(t);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, H0 = (...t) => t.filter((r, l, i) => !!r && r.trim() !== "" && i.indexOf(r) === l).join(" ").trim(), rE = (t) => {
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
var lE = {
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
const aE = E.forwardRef(
  ({
    color: t = "currentColor",
    size: r = 24,
    strokeWidth: l = 2,
    absoluteStrokeWidth: i,
    className: s = "",
    children: u,
    iconNode: c,
    ...d
  }, m) => E.createElement(
    "svg",
    {
      ref: m,
      ...lE,
      width: r,
      height: r,
      stroke: t,
      strokeWidth: i ? Number(l) * 24 / Number(r) : l,
      className: H0("lucide", s),
      ...!u && !rE(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...c.map(([h, y]) => E.createElement(h, y)),
      ...Array.isArray(u) ? u : [u]
    ]
  )
);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Or = (t, r) => {
  const l = E.forwardRef(
    ({ className: i, ...s }, u) => E.createElement(aE, {
      ref: u,
      iconNode: r,
      className: H0(
        `lucide-${tE(ty(t))}`,
        `lucide-${t}`,
        i
      ),
      ...s
    })
  );
  return l.displayName = ty(t), l;
};
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iE = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], oE = Or("chevron-down", iE);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sE = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], ny = Or("chevron-right", sE);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uE = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], cE = Or("chevron-up", uE);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fE = [
  ["path", { d: "m7 20 5-5 5 5", key: "13a0gw" }],
  ["path", { d: "m7 4 5 5 5-5", key: "1kwcof" }]
], dE = Or("chevrons-down-up", fE);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hE = [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
], pE = Or("chevrons-up-down", hE);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mE = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], gE = Or("circle", mE);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yE = [
  [
    "path",
    {
      d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",
      key: "117uat"
    }
  ],
  ["path", { d: "M6 12h16", key: "s4cdu5" }]
], bE = Or("send-horizontal", yE);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vE = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], q0 = Or("x", vE);
function V0(t) {
  var r, l, i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (r = 0; r < s; r++) t[r] && (l = V0(t[r])) && (i && (i += " "), i += l);
  } else for (l in t) t[l] && (i && (i += " "), i += l);
  return i;
}
function P0() {
  for (var t, r, l = 0, i = "", s = arguments.length; l < s; l++) (t = arguments[l]) && (r = V0(t)) && (i && (i += " "), i += r);
  return i;
}
const fd = "-", xE = (t) => {
  const r = SE(t), {
    conflictingClassGroups: l,
    conflictingClassGroupModifiers: i
  } = t;
  return {
    getClassGroupId: (c) => {
      const d = c.split(fd);
      return d[0] === "" && d.length !== 1 && d.shift(), Y0(d, r) || wE(c);
    },
    getConflictingClassGroupIds: (c, d) => {
      const m = l[c] || [];
      return d && i[c] ? [...m, ...i[c]] : m;
    }
  };
}, Y0 = (t, r) => {
  var c;
  if (t.length === 0)
    return r.classGroupId;
  const l = t[0], i = r.nextPart.get(l), s = i ? Y0(t.slice(1), i) : void 0;
  if (s)
    return s;
  if (r.validators.length === 0)
    return;
  const u = t.join(fd);
  return (c = r.validators.find(({
    validator: d
  }) => d(u))) == null ? void 0 : c.classGroupId;
}, ry = /^\[(.+)\]$/, wE = (t) => {
  if (ry.test(t)) {
    const r = ry.exec(t)[1], l = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (l)
      return "arbitrary.." + l;
  }
}, SE = (t) => {
  const {
    theme: r,
    classGroups: l
  } = t, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in l)
    Vf(l[s], i, s, r);
  return i;
}, Vf = (t, r, l, i) => {
  t.forEach((s) => {
    if (typeof s == "string") {
      const u = s === "" ? r : ly(r, s);
      u.classGroupId = l;
      return;
    }
    if (typeof s == "function") {
      if (EE(s)) {
        Vf(s(i), r, l, i);
        return;
      }
      r.validators.push({
        validator: s,
        classGroupId: l
      });
      return;
    }
    Object.entries(s).forEach(([u, c]) => {
      Vf(c, ly(r, u), l, i);
    });
  });
}, ly = (t, r) => {
  let l = t;
  return r.split(fd).forEach((i) => {
    l.nextPart.has(i) || l.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), l = l.nextPart.get(i);
  }), l;
}, EE = (t) => t.isThemeGetter, kE = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, l = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  const s = (u, c) => {
    l.set(u, c), r++, r > t && (r = 0, i = l, l = /* @__PURE__ */ new Map());
  };
  return {
    get(u) {
      let c = l.get(u);
      if (c !== void 0)
        return c;
      if ((c = i.get(u)) !== void 0)
        return s(u, c), c;
    },
    set(u, c) {
      l.has(u) ? l.set(u, c) : s(u, c);
    }
  };
}, Pf = "!", Yf = ":", CE = Yf.length, AE = (t) => {
  const {
    prefix: r,
    experimentalParseClassName: l
  } = t;
  let i = (s) => {
    const u = [];
    let c = 0, d = 0, m = 0, h;
    for (let A = 0; A < s.length; A++) {
      let C = s[A];
      if (c === 0 && d === 0) {
        if (C === Yf) {
          u.push(s.slice(m, A)), m = A + CE;
          continue;
        }
        if (C === "/") {
          h = A;
          continue;
        }
      }
      C === "[" ? c++ : C === "]" ? c-- : C === "(" ? d++ : C === ")" && d--;
    }
    const y = u.length === 0 ? s : s.substring(m), g = TE(y), b = g !== y, v = h && h > m ? h - m : void 0;
    return {
      modifiers: u,
      hasImportantModifier: b,
      baseClassName: g,
      maybePostfixModifierPosition: v
    };
  };
  if (r) {
    const s = r + Yf, u = i;
    i = (c) => c.startsWith(s) ? u(c.substring(s.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: c,
      maybePostfixModifierPosition: void 0
    };
  }
  if (l) {
    const s = i;
    i = (u) => l({
      className: u,
      parseClassName: s
    });
  }
  return i;
}, TE = (t) => t.endsWith(Pf) ? t.substring(0, t.length - 1) : t.startsWith(Pf) ? t.substring(1) : t, _E = (t) => {
  const r = Object.fromEntries(t.orderSensitiveModifiers.map((i) => [i, !0]));
  return (i) => {
    if (i.length <= 1)
      return i;
    const s = [];
    let u = [];
    return i.forEach((c) => {
      c[0] === "[" || r[c] ? (s.push(...u.sort(), c), u = []) : u.push(c);
    }), s.push(...u.sort()), s;
  };
}, RE = (t) => ({
  cache: kE(t.cacheSize),
  parseClassName: AE(t),
  sortModifiers: _E(t),
  ...xE(t)
}), DE = /\s+/, NE = (t, r) => {
  const {
    parseClassName: l,
    getClassGroupId: i,
    getConflictingClassGroupIds: s,
    sortModifiers: u
  } = r, c = [], d = t.trim().split(DE);
  let m = "";
  for (let h = d.length - 1; h >= 0; h -= 1) {
    const y = d[h], {
      isExternal: g,
      modifiers: b,
      hasImportantModifier: v,
      baseClassName: A,
      maybePostfixModifierPosition: C
    } = l(y);
    if (g) {
      m = y + (m.length > 0 ? " " + m : m);
      continue;
    }
    let N = !!C, T = i(N ? A.substring(0, C) : A);
    if (!T) {
      if (!N) {
        m = y + (m.length > 0 ? " " + m : m);
        continue;
      }
      if (T = i(A), !T) {
        m = y + (m.length > 0 ? " " + m : m);
        continue;
      }
      N = !1;
    }
    const I = u(b).join(":"), j = v ? I + Pf : I, Q = j + T;
    if (c.includes(Q))
      continue;
    c.push(Q);
    const H = s(T, N);
    for (let R = 0; R < H.length; ++R) {
      const F = H[R];
      c.push(j + F);
    }
    m = y + (m.length > 0 ? " " + m : m);
  }
  return m;
};
function OE() {
  let t = 0, r, l, i = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (l = F0(r)) && (i && (i += " "), i += l);
  return i;
}
const F0 = (t) => {
  if (typeof t == "string")
    return t;
  let r, l = "";
  for (let i = 0; i < t.length; i++)
    t[i] && (r = F0(t[i])) && (l && (l += " "), l += r);
  return l;
};
function ME(t, ...r) {
  let l, i, s, u = c;
  function c(m) {
    const h = r.reduce((y, g) => g(y), t());
    return l = RE(h), i = l.cache.get, s = l.cache.set, u = d, d(m);
  }
  function d(m) {
    const h = i(m);
    if (h)
      return h;
    const y = NE(m, l);
    return s(m, y), y;
  }
  return function() {
    return u(OE.apply(null, arguments));
  };
}
const yt = (t) => {
  const r = (l) => l[t] || [];
  return r.isThemeGetter = !0, r;
}, G0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, X0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i, zE = /^\d+\/\d+$/, LE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, jE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, UE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, BE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, IE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Gl = (t) => zE.test(t), Ne = (t) => !!t && !Number.isNaN(Number(t)), Ar = (t) => !!t && Number.isInteger(Number(t)), nf = (t) => t.endsWith("%") && Ne(t.slice(0, -1)), Zn = (t) => LE.test(t), HE = () => !0, qE = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  jE.test(t) && !UE.test(t)
), Q0 = () => !1, VE = (t) => BE.test(t), PE = (t) => IE.test(t), YE = (t) => !fe(t) && !de(t), FE = (t) => oa(t, J0, Q0), fe = (t) => G0.test(t), $r = (t) => oa(t, $0, qE), rf = (t) => oa(t, KE, Ne), ay = (t) => oa(t, Z0, Q0), GE = (t) => oa(t, K0, PE), Fo = (t) => oa(t, W0, VE), de = (t) => X0.test(t), si = (t) => sa(t, $0), XE = (t) => sa(t, JE), iy = (t) => sa(t, Z0), QE = (t) => sa(t, J0), ZE = (t) => sa(t, K0), Go = (t) => sa(t, W0, !0), oa = (t, r, l) => {
  const i = G0.exec(t);
  return i ? i[1] ? r(i[1]) : l(i[2]) : !1;
}, sa = (t, r, l = !1) => {
  const i = X0.exec(t);
  return i ? i[1] ? r(i[1]) : l : !1;
}, Z0 = (t) => t === "position" || t === "percentage", K0 = (t) => t === "image" || t === "url", J0 = (t) => t === "length" || t === "size" || t === "bg-size", $0 = (t) => t === "length", KE = (t) => t === "number", JE = (t) => t === "family-name", W0 = (t) => t === "shadow", $E = () => {
  const t = yt("color"), r = yt("font"), l = yt("text"), i = yt("font-weight"), s = yt("tracking"), u = yt("leading"), c = yt("breakpoint"), d = yt("container"), m = yt("spacing"), h = yt("radius"), y = yt("shadow"), g = yt("inset-shadow"), b = yt("text-shadow"), v = yt("drop-shadow"), A = yt("blur"), C = yt("perspective"), N = yt("aspect"), T = yt("ease"), I = yt("animate"), j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Q = () => [
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
  ], H = () => [...Q(), de, fe], R = () => ["auto", "hidden", "clip", "visible", "scroll"], F = () => ["auto", "contain", "none"], V = () => [de, fe, m], Z = () => [Gl, "full", "auto", ...V()], M = () => [Ar, "none", "subgrid", de, fe], re = () => ["auto", {
    span: ["full", Ar, de, fe]
  }, Ar, de, fe], te = () => [Ar, "auto", de, fe], oe = () => ["auto", "min", "max", "fr", de, fe], ne = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ie = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], B = () => ["auto", ...V()], W = () => [Gl, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...V()], G = () => [t, de, fe], ge = () => [...Q(), iy, ay, {
    position: [de, fe]
  }], w = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], X = () => ["auto", "cover", "contain", QE, FE, {
    size: [de, fe]
  }], le = () => [nf, si, $r], k = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    de,
    fe
  ], se = () => ["", Ne, si, $r], ye = () => ["solid", "dashed", "dotted", "double"], ue = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ke = () => [Ne, nf, iy, ay], Te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    A,
    de,
    fe
  ], tt = () => ["none", Ne, de, fe], rt = () => ["none", Ne, de, fe], bt = () => [Ne, de, fe], Ce = () => [Gl, "full", ...V()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Zn],
      breakpoint: [Zn],
      color: [HE],
      container: [Zn],
      "drop-shadow": [Zn],
      ease: ["in", "out", "in-out"],
      font: [YE],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Zn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Zn],
      shadow: [Zn],
      spacing: ["px", Ne],
      text: [Zn],
      "text-shadow": [Zn],
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
        aspect: ["auto", "square", Gl, fe, de, N]
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
        object: H()
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
        z: [Ar, "auto", de, fe]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Gl, "full", "auto", d, ...V()]
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
        flex: [Ne, Gl, "auto", "initial", "none", fe]
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
        order: [Ar, "first", "last", "none", de, fe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": M()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: re()
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
        "grid-rows": M()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: re()
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
        "auto-cols": oe()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": oe()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: V()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": V()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": V()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ne(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ie(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ie()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ne()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ie(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ie(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ne()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ie(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ie()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: V()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: V()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: V()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: V()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: V()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: V()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: V()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: V()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: V()
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
        "space-x": V()
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
        "space-y": V()
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
        size: W()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [d, "screen", ...W()]
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
          ...W()
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
          ...W()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...W()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...W()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...W()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", l, si, $r]
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
        font: [i, de, rf]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", nf, fe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [XE, fe, r]
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
        tracking: [s, de, fe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Ne, "none", de, rf]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          u,
          ...V()
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
        decoration: [...ye(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Ne, "from-font", "auto", de, $r]
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
        indent: V()
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
        bg: ge()
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
          }, Ar, de, fe],
          radial: ["", de, fe],
          conic: [Ar, de, fe]
        }, ZE, GE]
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
        from: le()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: le()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: le()
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
        rounded: k()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": k()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": k()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": k()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": k()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": k()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": k()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": k()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": k()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": k()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": k()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": k()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": k()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": k()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": k()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: se()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": se()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": se()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": se()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": se()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": se()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": se()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": se()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": se()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": se()
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
        "divide-y": se()
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
        border: [...ye(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ye(), "hidden", "none"]
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
        outline: [...ye(), "none", "hidden"]
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
        outline: ["", Ne, si, $r]
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
          y,
          Go,
          Fo
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
        "inset-shadow": ["none", g, Go, Fo]
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
        ring: se()
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
        "ring-offset": [Ne, $r]
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
        "inset-ring": se()
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
        "text-shadow": ["none", b, Go, Fo]
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
        "mix-blend": [...ue(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ue()
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
        mask: ge()
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
          v,
          Go,
          Fo
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
        "border-spacing": V()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": V()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": V()
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
        animate: ["none", I, de, fe]
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
        "perspective-origin": H()
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
        skew: bt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": bt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": bt()
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
        origin: H()
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
        "scroll-m": V()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": V()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": V()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": V()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": V()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": V()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": V()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": V()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": V()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": V()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": V()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": V()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": V()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": V()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": V()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": V()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": V()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": V()
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
        stroke: [Ne, si, $r, rf]
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
}, WE = /* @__PURE__ */ ME($E);
function at(...t) {
  return WE(P0(t));
}
function ek(t, r) {
  const l = E.createContext(r), i = (u) => {
    const { children: c, ...d } = u, m = E.useMemo(() => d, Object.values(d));
    return /* @__PURE__ */ _.jsx(l.Provider, { value: m, children: c });
  };
  i.displayName = t + "Provider";
  function s(u) {
    const c = E.useContext(l);
    if (c) return c;
    if (r !== void 0) return r;
    throw new Error(`\`${u}\` must be used within \`${t}\``);
  }
  return [i, s];
}
function dd(t, r = []) {
  let l = [];
  function i(u, c) {
    const d = E.createContext(c), m = l.length;
    l = [...l, c];
    const h = (g) => {
      var T;
      const { scope: b, children: v, ...A } = g, C = ((T = b == null ? void 0 : b[t]) == null ? void 0 : T[m]) || d, N = E.useMemo(() => A, Object.values(A));
      return /* @__PURE__ */ _.jsx(C.Provider, { value: N, children: v });
    };
    h.displayName = u + "Provider";
    function y(g, b) {
      var C;
      const v = ((C = b == null ? void 0 : b[t]) == null ? void 0 : C[m]) || d, A = E.useContext(v);
      if (A) return A;
      if (c !== void 0) return c;
      throw new Error(`\`${g}\` must be used within \`${u}\``);
    }
    return [h, y];
  }
  const s = () => {
    const u = l.map((c) => E.createContext(c));
    return function(d) {
      const m = (d == null ? void 0 : d[t]) || u;
      return E.useMemo(
        () => ({ [`__scope${t}`]: { ...d, [t]: m } }),
        [d, m]
      );
    };
  };
  return s.scopeName = t, [i, tk(s, ...r)];
}
function tk(...t) {
  const r = t[0];
  if (t.length === 1) return r;
  const l = () => {
    const i = t.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(u) {
      const c = i.reduce((d, { useScope: m, scopeName: h }) => {
        const g = m(u)[`__scope${h}`];
        return { ...d, ...g };
      }, {});
      return E.useMemo(() => ({ [`__scope${r.scopeName}`]: c }), [c]);
    };
  };
  return l.scopeName = r.scopeName, l;
}
function oy(t, r) {
  if (typeof t == "function")
    return t(r);
  t != null && (t.current = r);
}
function eb(...t) {
  return (r) => {
    let l = !1;
    const i = t.map((s) => {
      const u = oy(s, r);
      return !l && typeof u == "function" && (l = !0), u;
    });
    if (l)
      return () => {
        for (let s = 0; s < i.length; s++) {
          const u = i[s];
          typeof u == "function" ? u() : oy(t[s], null);
        }
      };
  };
}
function $n(...t) {
  return E.useCallback(eb(...t), t);
}
function Jn(t, r, { checkForDefaultPrevented: l = !0 } = {}) {
  return function(s) {
    if (t == null || t(s), l === !1 || !s.defaultPrevented)
      return r == null ? void 0 : r(s);
  };
}
var Nr = globalThis != null && globalThis.document ? E.useLayoutEffect : () => {
}, nk = D0[" useId ".trim().toString()] || (() => {
}), rk = 0;
function lf(t) {
  const [r, l] = E.useState(nk());
  return Nr(() => {
    l((i) => i ?? String(rk++));
  }, [t]), t || (r ? `radix-${r}` : "");
}
var lk = D0[" useInsertionEffect ".trim().toString()] || Nr;
function ak({
  prop: t,
  defaultProp: r,
  onChange: l = () => {
  },
  caller: i
}) {
  const [s, u, c] = ik({
    defaultProp: r,
    onChange: l
  }), d = t !== void 0, m = d ? t : s;
  {
    const y = E.useRef(t !== void 0);
    E.useEffect(() => {
      const g = y.current;
      g !== d && console.warn(
        `${i} is changing from ${g ? "controlled" : "uncontrolled"} to ${d ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), y.current = d;
    }, [d, i]);
  }
  const h = E.useCallback(
    (y) => {
      var g;
      if (d) {
        const b = ok(y) ? y(t) : y;
        b !== t && ((g = c.current) == null || g.call(c, b));
      } else
        u(y);
    },
    [d, t, u, c]
  );
  return [m, h];
}
function ik({
  defaultProp: t,
  onChange: r
}) {
  const [l, i] = E.useState(t), s = E.useRef(l), u = E.useRef(r);
  return lk(() => {
    u.current = r;
  }, [r]), E.useEffect(() => {
    var c;
    s.current !== l && ((c = u.current) == null || c.call(u, l), s.current = l);
  }, [l, s]), [l, i, u];
}
function ok(t) {
  return typeof t == "function";
}
var tb = p0();
const sk = /* @__PURE__ */ ll(tb);
// @__NO_SIDE_EFFECTS__
function hd(t) {
  const r = /* @__PURE__ */ ck(t), l = E.forwardRef((i, s) => {
    const { children: u, ...c } = i, d = E.Children.toArray(u), m = d.find(dk);
    if (m) {
      const h = m.props.children, y = d.map((g) => g === m ? E.Children.count(h) > 1 ? E.Children.only(null) : E.isValidElement(h) ? h.props.children : null : g);
      return /* @__PURE__ */ _.jsx(r, { ...c, ref: s, children: E.isValidElement(h) ? E.cloneElement(h, void 0, y) : null });
    }
    return /* @__PURE__ */ _.jsx(r, { ...c, ref: s, children: u });
  });
  return l.displayName = `${t}.Slot`, l;
}
var uk = /* @__PURE__ */ hd("Slot");
// @__NO_SIDE_EFFECTS__
function ck(t) {
  const r = E.forwardRef((l, i) => {
    const { children: s, ...u } = l;
    if (E.isValidElement(s)) {
      const c = pk(s), d = hk(u, s.props);
      return s.type !== E.Fragment && (d.ref = i ? eb(i, c) : c), E.cloneElement(s, d);
    }
    return E.Children.count(s) > 1 ? E.Children.only(null) : null;
  });
  return r.displayName = `${t}.SlotClone`, r;
}
var nb = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function fk(t) {
  const r = ({ children: l }) => /* @__PURE__ */ _.jsx(_.Fragment, { children: l });
  return r.displayName = `${t}.Slottable`, r.__radixId = nb, r;
}
function dk(t) {
  return E.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === nb;
}
function hk(t, r) {
  const l = { ...r };
  for (const i in r) {
    const s = t[i], u = r[i];
    /^on[A-Z]/.test(i) ? s && u ? l[i] = (...d) => {
      const m = u(...d);
      return s(...d), m;
    } : s && (l[i] = s) : i === "style" ? l[i] = { ...s, ...u } : i === "className" && (l[i] = [s, u].filter(Boolean).join(" "));
  }
  return { ...t, ...l };
}
function pk(t) {
  var i, s;
  let r = (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : i.get, l = r && "isReactWarning" in r && r.isReactWarning;
  return l ? t.ref : (r = (s = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : s.get, l = r && "isReactWarning" in r && r.isReactWarning, l ? t.props.ref : t.props.ref || t.ref);
}
var mk = [
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
], pn = mk.reduce((t, r) => {
  const l = /* @__PURE__ */ hd(`Primitive.${r}`), i = E.forwardRef((s, u) => {
    const { asChild: c, ...d } = s, m = c ? l : r;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ _.jsx(m, { ...d, ref: u });
  });
  return i.displayName = `Primitive.${r}`, { ...t, [r]: i };
}, {});
function gk(t, r) {
  t && tb.flushSync(() => t.dispatchEvent(r));
}
function la(t) {
  const r = E.useRef(t);
  return E.useEffect(() => {
    r.current = t;
  }), E.useMemo(() => (...l) => {
    var i;
    return (i = r.current) == null ? void 0 : i.call(r, ...l);
  }, []);
}
function yk(t, r = globalThis == null ? void 0 : globalThis.document) {
  const l = la(t);
  E.useEffect(() => {
    const i = (s) => {
      s.key === "Escape" && l(s);
    };
    return r.addEventListener("keydown", i, { capture: !0 }), () => r.removeEventListener("keydown", i, { capture: !0 });
  }, [l, r]);
}
var bk = "DismissableLayer", Ff = "dismissableLayer.update", vk = "dismissableLayer.pointerDownOutside", xk = "dismissableLayer.focusOutside", sy, rb = E.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), lb = E.forwardRef(
  (t, r) => {
    const {
      disableOutsidePointerEvents: l = !1,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      onFocusOutside: u,
      onInteractOutside: c,
      onDismiss: d,
      ...m
    } = t, h = E.useContext(rb), [y, g] = E.useState(null), b = (y == null ? void 0 : y.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = E.useState({}), A = $n(r, (F) => g(F)), C = Array.from(h.layers), [N] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), T = C.indexOf(N), I = y ? C.indexOf(y) : -1, j = h.layersWithOutsidePointerEventsDisabled.size > 0, Q = I >= T, H = Ek((F) => {
      const V = F.target, Z = [...h.branches].some((M) => M.contains(V));
      !Q || Z || (s == null || s(F), c == null || c(F), F.defaultPrevented || d == null || d());
    }, b), R = kk((F) => {
      const V = F.target;
      [...h.branches].some((M) => M.contains(V)) || (u == null || u(F), c == null || c(F), F.defaultPrevented || d == null || d());
    }, b);
    return yk((F) => {
      I === h.layers.size - 1 && (i == null || i(F), !F.defaultPrevented && d && (F.preventDefault(), d()));
    }, b), E.useEffect(() => {
      if (y)
        return l && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (sy = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(y)), h.layers.add(y), uy(), () => {
          l && h.layersWithOutsidePointerEventsDisabled.size === 1 && (b.body.style.pointerEvents = sy);
        };
    }, [y, b, l, h]), E.useEffect(() => () => {
      y && (h.layers.delete(y), h.layersWithOutsidePointerEventsDisabled.delete(y), uy());
    }, [y, h]), E.useEffect(() => {
      const F = () => v({});
      return document.addEventListener(Ff, F), () => document.removeEventListener(Ff, F);
    }, []), /* @__PURE__ */ _.jsx(
      pn.div,
      {
        ...m,
        ref: A,
        style: {
          pointerEvents: j ? Q ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: Jn(t.onFocusCapture, R.onFocusCapture),
        onBlurCapture: Jn(t.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: Jn(
          t.onPointerDownCapture,
          H.onPointerDownCapture
        )
      }
    );
  }
);
lb.displayName = bk;
var wk = "DismissableLayerBranch", Sk = E.forwardRef((t, r) => {
  const l = E.useContext(rb), i = E.useRef(null), s = $n(r, i);
  return E.useEffect(() => {
    const u = i.current;
    if (u)
      return l.branches.add(u), () => {
        l.branches.delete(u);
      };
  }, [l.branches]), /* @__PURE__ */ _.jsx(pn.div, { ...t, ref: s });
});
Sk.displayName = wk;
function Ek(t, r = globalThis == null ? void 0 : globalThis.document) {
  const l = la(t), i = E.useRef(!1), s = E.useRef(() => {
  });
  return E.useEffect(() => {
    const u = (d) => {
      if (d.target && !i.current) {
        let m = function() {
          ab(
            vk,
            l,
            h,
            { discrete: !0 }
          );
        };
        const h = { originalEvent: d };
        d.pointerType === "touch" ? (r.removeEventListener("click", s.current), s.current = m, r.addEventListener("click", s.current, { once: !0 })) : m();
      } else
        r.removeEventListener("click", s.current);
      i.current = !1;
    }, c = window.setTimeout(() => {
      r.addEventListener("pointerdown", u);
    }, 0);
    return () => {
      window.clearTimeout(c), r.removeEventListener("pointerdown", u), r.removeEventListener("click", s.current);
    };
  }, [r, l]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => i.current = !0
  };
}
function kk(t, r = globalThis == null ? void 0 : globalThis.document) {
  const l = la(t), i = E.useRef(!1);
  return E.useEffect(() => {
    const s = (u) => {
      u.target && !i.current && ab(xk, l, { originalEvent: u }, {
        discrete: !1
      });
    };
    return r.addEventListener("focusin", s), () => r.removeEventListener("focusin", s);
  }, [r, l]), {
    onFocusCapture: () => i.current = !0,
    onBlurCapture: () => i.current = !1
  };
}
function uy() {
  const t = new CustomEvent(Ff);
  document.dispatchEvent(t);
}
function ab(t, r, l, { discrete: i }) {
  const s = l.originalEvent.target, u = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: l });
  r && s.addEventListener(t, r, { once: !0 }), i ? gk(s, u) : s.dispatchEvent(u);
}
var af = "focusScope.autoFocusOnMount", of = "focusScope.autoFocusOnUnmount", cy = { bubbles: !1, cancelable: !0 }, Ck = "FocusScope", ib = E.forwardRef((t, r) => {
  const {
    loop: l = !1,
    trapped: i = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: u,
    ...c
  } = t, [d, m] = E.useState(null), h = la(s), y = la(u), g = E.useRef(null), b = $n(r, (C) => m(C)), v = E.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  E.useEffect(() => {
    if (i) {
      let C = function(j) {
        if (v.paused || !d) return;
        const Q = j.target;
        d.contains(Q) ? g.current = Q : _r(g.current, { select: !0 });
      }, N = function(j) {
        if (v.paused || !d) return;
        const Q = j.relatedTarget;
        Q !== null && (d.contains(Q) || _r(g.current, { select: !0 }));
      }, T = function(j) {
        if (document.activeElement === document.body)
          for (const H of j)
            H.removedNodes.length > 0 && _r(d);
      };
      document.addEventListener("focusin", C), document.addEventListener("focusout", N);
      const I = new MutationObserver(T);
      return d && I.observe(d, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", C), document.removeEventListener("focusout", N), I.disconnect();
      };
    }
  }, [i, d, v.paused]), E.useEffect(() => {
    if (d) {
      dy.add(v);
      const C = document.activeElement;
      if (!d.contains(C)) {
        const T = new CustomEvent(af, cy);
        d.addEventListener(af, h), d.dispatchEvent(T), T.defaultPrevented || (Ak(Nk(ob(d)), { select: !0 }), document.activeElement === C && _r(d));
      }
      return () => {
        d.removeEventListener(af, h), setTimeout(() => {
          const T = new CustomEvent(of, cy);
          d.addEventListener(of, y), d.dispatchEvent(T), T.defaultPrevented || _r(C ?? document.body, { select: !0 }), d.removeEventListener(of, y), dy.remove(v);
        }, 0);
      };
    }
  }, [d, h, y, v]);
  const A = E.useCallback(
    (C) => {
      if (!l && !i || v.paused) return;
      const N = C.key === "Tab" && !C.altKey && !C.ctrlKey && !C.metaKey, T = document.activeElement;
      if (N && T) {
        const I = C.currentTarget, [j, Q] = Tk(I);
        j && Q ? !C.shiftKey && T === Q ? (C.preventDefault(), l && _r(j, { select: !0 })) : C.shiftKey && T === j && (C.preventDefault(), l && _r(Q, { select: !0 })) : T === I && C.preventDefault();
      }
    },
    [l, i, v.paused]
  );
  return /* @__PURE__ */ _.jsx(pn.div, { tabIndex: -1, ...c, ref: b, onKeyDown: A });
});
ib.displayName = Ck;
function Ak(t, { select: r = !1 } = {}) {
  const l = document.activeElement;
  for (const i of t)
    if (_r(i, { select: r }), document.activeElement !== l) return;
}
function Tk(t) {
  const r = ob(t), l = fy(r, t), i = fy(r.reverse(), t);
  return [l, i];
}
function ob(t) {
  const r = [], l = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (i) => {
      const s = i.tagName === "INPUT" && i.type === "hidden";
      return i.disabled || i.hidden || s ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; l.nextNode(); ) r.push(l.currentNode);
  return r;
}
function fy(t, r) {
  for (const l of t)
    if (!_k(l, { upTo: r })) return l;
}
function _k(t, { upTo: r }) {
  if (getComputedStyle(t).visibility === "hidden") return !0;
  for (; t; ) {
    if (r !== void 0 && t === r) return !1;
    if (getComputedStyle(t).display === "none") return !0;
    t = t.parentElement;
  }
  return !1;
}
function Rk(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function _r(t, { select: r = !1 } = {}) {
  if (t && t.focus) {
    const l = document.activeElement;
    t.focus({ preventScroll: !0 }), t !== l && Rk(t) && r && t.select();
  }
}
var dy = Dk();
function Dk() {
  let t = [];
  return {
    add(r) {
      const l = t[0];
      r !== l && (l == null || l.pause()), t = hy(t, r), t.unshift(r);
    },
    remove(r) {
      var l;
      t = hy(t, r), (l = t[0]) == null || l.resume();
    }
  };
}
function hy(t, r) {
  const l = [...t], i = l.indexOf(r);
  return i !== -1 && l.splice(i, 1), l;
}
function Nk(t) {
  return t.filter((r) => r.tagName !== "A");
}
var Ok = "Portal", sb = E.forwardRef((t, r) => {
  var d;
  const { container: l, ...i } = t, [s, u] = E.useState(!1);
  Nr(() => u(!0), []);
  const c = l || s && ((d = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : d.body);
  return c ? sk.createPortal(/* @__PURE__ */ _.jsx(pn.div, { ...i, ref: r }), c) : null;
});
sb.displayName = Ok;
function Mk(t, r) {
  return E.useReducer((l, i) => r[l][i] ?? l, t);
}
var gs = (t) => {
  const { present: r, children: l } = t, i = zk(r), s = typeof l == "function" ? l({ present: i.isPresent }) : E.Children.only(l), u = $n(i.ref, Lk(s));
  return typeof l == "function" || i.isPresent ? E.cloneElement(s, { ref: u }) : null;
};
gs.displayName = "Presence";
function zk(t) {
  const [r, l] = E.useState(), i = E.useRef(null), s = E.useRef(t), u = E.useRef("none"), c = t ? "mounted" : "unmounted", [d, m] = Mk(c, {
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
  return E.useEffect(() => {
    const h = Xo(i.current);
    u.current = d === "mounted" ? h : "none";
  }, [d]), Nr(() => {
    const h = i.current, y = s.current;
    if (y !== t) {
      const b = u.current, v = Xo(h);
      t ? m("MOUNT") : v === "none" || (h == null ? void 0 : h.display) === "none" ? m("UNMOUNT") : m(y && b !== v ? "ANIMATION_OUT" : "UNMOUNT"), s.current = t;
    }
  }, [t, m]), Nr(() => {
    if (r) {
      let h;
      const y = r.ownerDocument.defaultView ?? window, g = (v) => {
        const C = Xo(i.current).includes(v.animationName);
        if (v.target === r && C && (m("ANIMATION_END"), !s.current)) {
          const N = r.style.animationFillMode;
          r.style.animationFillMode = "forwards", h = y.setTimeout(() => {
            r.style.animationFillMode === "forwards" && (r.style.animationFillMode = N);
          });
        }
      }, b = (v) => {
        v.target === r && (u.current = Xo(i.current));
      };
      return r.addEventListener("animationstart", b), r.addEventListener("animationcancel", g), r.addEventListener("animationend", g), () => {
        y.clearTimeout(h), r.removeEventListener("animationstart", b), r.removeEventListener("animationcancel", g), r.removeEventListener("animationend", g);
      };
    } else
      m("ANIMATION_END");
  }, [r, m]), {
    isPresent: ["mounted", "unmountSuspended"].includes(d),
    ref: E.useCallback((h) => {
      i.current = h ? getComputedStyle(h) : null, l(h);
    }, [])
  };
}
function Xo(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
function Lk(t) {
  var i, s;
  let r = (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : i.get, l = r && "isReactWarning" in r && r.isReactWarning;
  return l ? t.ref : (r = (s = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : s.get, l = r && "isReactWarning" in r && r.isReactWarning, l ? t.props.ref : t.props.ref || t.ref);
}
var sf = 0;
function jk() {
  E.useEffect(() => {
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", t[0] ?? py()), document.body.insertAdjacentElement("beforeend", t[1] ?? py()), sf++, () => {
      sf === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((r) => r.remove()), sf--;
    };
  }, []);
}
function py() {
  const t = document.createElement("span");
  return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
}
var Dn = function() {
  return Dn = Object.assign || function(r) {
    for (var l, i = 1, s = arguments.length; i < s; i++) {
      l = arguments[i];
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (r[u] = l[u]);
    }
    return r;
  }, Dn.apply(this, arguments);
};
function ub(t, r) {
  var l = {};
  for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && r.indexOf(i) < 0 && (l[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(t); s < i.length; s++)
      r.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[s]) && (l[i[s]] = t[i[s]]);
  return l;
}
function Uk(t, r, l) {
  if (l || arguments.length === 2) for (var i = 0, s = r.length, u; i < s; i++)
    (u || !(i in r)) && (u || (u = Array.prototype.slice.call(r, 0, i)), u[i] = r[i]);
  return t.concat(u || Array.prototype.slice.call(r));
}
var rs = "right-scroll-bar-position", ls = "width-before-scroll-bar", Bk = "with-scroll-bars-hidden", Ik = "--removed-body-scroll-bar-size";
function uf(t, r) {
  return typeof t == "function" ? t(r) : t && (t.current = r), t;
}
function Hk(t, r) {
  var l = E.useState(function() {
    return {
      // value
      value: t,
      // last callback
      callback: r,
      // "memoized" public interface
      facade: {
        get current() {
          return l.value;
        },
        set current(i) {
          var s = l.value;
          s !== i && (l.value = i, l.callback(i, s));
        }
      }
    };
  })[0];
  return l.callback = r, l.facade;
}
var qk = typeof window < "u" ? E.useLayoutEffect : E.useEffect, my = /* @__PURE__ */ new WeakMap();
function Vk(t, r) {
  var l = Hk(null, function(i) {
    return t.forEach(function(s) {
      return uf(s, i);
    });
  });
  return qk(function() {
    var i = my.get(l);
    if (i) {
      var s = new Set(i), u = new Set(t), c = l.current;
      s.forEach(function(d) {
        u.has(d) || uf(d, null);
      }), u.forEach(function(d) {
        s.has(d) || uf(d, c);
      });
    }
    my.set(l, t);
  }, [t]), l;
}
function Pk(t) {
  return t;
}
function Yk(t, r) {
  r === void 0 && (r = Pk);
  var l = [], i = !1, s = {
    read: function() {
      if (i)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return l.length ? l[l.length - 1] : t;
    },
    useMedium: function(u) {
      var c = r(u, i);
      return l.push(c), function() {
        l = l.filter(function(d) {
          return d !== c;
        });
      };
    },
    assignSyncMedium: function(u) {
      for (i = !0; l.length; ) {
        var c = l;
        l = [], c.forEach(u);
      }
      l = {
        push: function(d) {
          return u(d);
        },
        filter: function() {
          return l;
        }
      };
    },
    assignMedium: function(u) {
      i = !0;
      var c = [];
      if (l.length) {
        var d = l;
        l = [], d.forEach(u), c = l;
      }
      var m = function() {
        var y = c;
        c = [], y.forEach(u);
      }, h = function() {
        return Promise.resolve().then(m);
      };
      h(), l = {
        push: function(y) {
          c.push(y), h();
        },
        filter: function(y) {
          return c = c.filter(y), l;
        }
      };
    }
  };
  return s;
}
function Fk(t) {
  t === void 0 && (t = {});
  var r = Yk(null);
  return r.options = Dn({ async: !0, ssr: !1 }, t), r;
}
var cb = function(t) {
  var r = t.sideCar, l = ub(t, ["sideCar"]);
  if (!r)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var i = r.read();
  if (!i)
    throw new Error("Sidecar medium not found");
  return E.createElement(i, Dn({}, l));
};
cb.isSideCarExport = !0;
function Gk(t, r) {
  return t.useMedium(r), cb;
}
var fb = Fk(), cf = function() {
}, ys = E.forwardRef(function(t, r) {
  var l = E.useRef(null), i = E.useState({
    onScrollCapture: cf,
    onWheelCapture: cf,
    onTouchMoveCapture: cf
  }), s = i[0], u = i[1], c = t.forwardProps, d = t.children, m = t.className, h = t.removeScrollBar, y = t.enabled, g = t.shards, b = t.sideCar, v = t.noRelative, A = t.noIsolation, C = t.inert, N = t.allowPinchZoom, T = t.as, I = T === void 0 ? "div" : T, j = t.gapMode, Q = ub(t, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), H = b, R = Vk([l, r]), F = Dn(Dn({}, Q), s);
  return E.createElement(
    E.Fragment,
    null,
    y && E.createElement(H, { sideCar: fb, removeScrollBar: h, shards: g, noRelative: v, noIsolation: A, inert: C, setCallbacks: u, allowPinchZoom: !!N, lockRef: l, gapMode: j }),
    c ? E.cloneElement(E.Children.only(d), Dn(Dn({}, F), { ref: R })) : E.createElement(I, Dn({}, F, { className: m, ref: R }), d)
  );
});
ys.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ys.classNames = {
  fullWidth: ls,
  zeroRight: rs
};
var Xk = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Qk() {
  if (!document)
    return null;
  var t = document.createElement("style");
  t.type = "text/css";
  var r = Xk();
  return r && t.setAttribute("nonce", r), t;
}
function Zk(t, r) {
  t.styleSheet ? t.styleSheet.cssText = r : t.appendChild(document.createTextNode(r));
}
function Kk(t) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(t);
}
var Jk = function() {
  var t = 0, r = null;
  return {
    add: function(l) {
      t == 0 && (r = Qk()) && (Zk(r, l), Kk(r)), t++;
    },
    remove: function() {
      t--, !t && r && (r.parentNode && r.parentNode.removeChild(r), r = null);
    }
  };
}, $k = function() {
  var t = Jk();
  return function(r, l) {
    E.useEffect(function() {
      return t.add(r), function() {
        t.remove();
      };
    }, [r && l]);
  };
}, db = function() {
  var t = $k(), r = function(l) {
    var i = l.styles, s = l.dynamic;
    return t(i, s), null;
  };
  return r;
}, Wk = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ff = function(t) {
  return parseInt(t || "", 10) || 0;
}, e3 = function(t) {
  var r = window.getComputedStyle(document.body), l = r[t === "padding" ? "paddingLeft" : "marginLeft"], i = r[t === "padding" ? "paddingTop" : "marginTop"], s = r[t === "padding" ? "paddingRight" : "marginRight"];
  return [ff(l), ff(i), ff(s)];
}, t3 = function(t) {
  if (t === void 0 && (t = "margin"), typeof window > "u")
    return Wk;
  var r = e3(t), l = document.documentElement.clientWidth, i = window.innerWidth;
  return {
    left: r[0],
    top: r[1],
    right: r[2],
    gap: Math.max(0, i - l + r[2] - r[0])
  };
}, n3 = db(), ea = "data-scroll-locked", r3 = function(t, r, l, i) {
  var s = t.left, u = t.top, c = t.right, d = t.gap;
  return l === void 0 && (l = "margin"), `
  .`.concat(Bk, ` {
   overflow: hidden `).concat(i, `;
   padding-right: `).concat(d, "px ").concat(i, `;
  }
  body[`).concat(ea, `] {
    overflow: hidden `).concat(i, `;
    overscroll-behavior: contain;
    `).concat([
    r && "position: relative ".concat(i, ";"),
    l === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(u, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(d, "px ").concat(i, `;
    `),
    l === "padding" && "padding-right: ".concat(d, "px ").concat(i, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(rs, ` {
    right: `).concat(d, "px ").concat(i, `;
  }
  
  .`).concat(ls, ` {
    margin-right: `).concat(d, "px ").concat(i, `;
  }
  
  .`).concat(rs, " .").concat(rs, ` {
    right: 0 `).concat(i, `;
  }
  
  .`).concat(ls, " .").concat(ls, ` {
    margin-right: 0 `).concat(i, `;
  }
  
  body[`).concat(ea, `] {
    `).concat(Ik, ": ").concat(d, `px;
  }
`);
}, gy = function() {
  var t = parseInt(document.body.getAttribute(ea) || "0", 10);
  return isFinite(t) ? t : 0;
}, l3 = function() {
  E.useEffect(function() {
    return document.body.setAttribute(ea, (gy() + 1).toString()), function() {
      var t = gy() - 1;
      t <= 0 ? document.body.removeAttribute(ea) : document.body.setAttribute(ea, t.toString());
    };
  }, []);
}, a3 = function(t) {
  var r = t.noRelative, l = t.noImportant, i = t.gapMode, s = i === void 0 ? "margin" : i;
  l3();
  var u = E.useMemo(function() {
    return t3(s);
  }, [s]);
  return E.createElement(n3, { styles: r3(u, !r, s, l ? "" : "!important") });
}, Gf = !1;
if (typeof window < "u")
  try {
    var Qo = Object.defineProperty({}, "passive", {
      get: function() {
        return Gf = !0, !0;
      }
    });
    window.addEventListener("test", Qo, Qo), window.removeEventListener("test", Qo, Qo);
  } catch {
    Gf = !1;
  }
var Xl = Gf ? { passive: !1 } : !1, i3 = function(t) {
  return t.tagName === "TEXTAREA";
}, hb = function(t, r) {
  if (!(t instanceof Element))
    return !1;
  var l = window.getComputedStyle(t);
  return (
    // not-not-scrollable
    l[r] !== "hidden" && // contains scroll inside self
    !(l.overflowY === l.overflowX && !i3(t) && l[r] === "visible")
  );
}, o3 = function(t) {
  return hb(t, "overflowY");
}, s3 = function(t) {
  return hb(t, "overflowX");
}, yy = function(t, r) {
  var l = r.ownerDocument, i = r;
  do {
    typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
    var s = pb(t, i);
    if (s) {
      var u = mb(t, i), c = u[1], d = u[2];
      if (c > d)
        return !0;
    }
    i = i.parentNode;
  } while (i && i !== l.body);
  return !1;
}, u3 = function(t) {
  var r = t.scrollTop, l = t.scrollHeight, i = t.clientHeight;
  return [
    r,
    l,
    i
  ];
}, c3 = function(t) {
  var r = t.scrollLeft, l = t.scrollWidth, i = t.clientWidth;
  return [
    r,
    l,
    i
  ];
}, pb = function(t, r) {
  return t === "v" ? o3(r) : s3(r);
}, mb = function(t, r) {
  return t === "v" ? u3(r) : c3(r);
}, f3 = function(t, r) {
  return t === "h" && r === "rtl" ? -1 : 1;
}, d3 = function(t, r, l, i, s) {
  var u = f3(t, window.getComputedStyle(r).direction), c = u * i, d = l.target, m = r.contains(d), h = !1, y = c > 0, g = 0, b = 0;
  do {
    if (!d)
      break;
    var v = mb(t, d), A = v[0], C = v[1], N = v[2], T = C - N - u * A;
    (A || T) && pb(t, d) && (g += T, b += A);
    var I = d.parentNode;
    d = I && I.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? I.host : I;
  } while (
    // portaled content
    !m && d !== document.body || // self content
    m && (r.contains(d) || r === d)
  );
  return (y && Math.abs(g) < 1 || !y && Math.abs(b) < 1) && (h = !0), h;
}, Zo = function(t) {
  return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0];
}, by = function(t) {
  return [t.deltaX, t.deltaY];
}, vy = function(t) {
  return t && "current" in t ? t.current : t;
}, h3 = function(t, r) {
  return t[0] === r[0] && t[1] === r[1];
}, p3 = function(t) {
  return `
  .block-interactivity-`.concat(t, ` {pointer-events: none;}
  .allow-interactivity-`).concat(t, ` {pointer-events: all;}
`);
}, m3 = 0, Ql = [];
function g3(t) {
  var r = E.useRef([]), l = E.useRef([0, 0]), i = E.useRef(), s = E.useState(m3++)[0], u = E.useState(db)[0], c = E.useRef(t);
  E.useEffect(function() {
    c.current = t;
  }, [t]), E.useEffect(function() {
    if (t.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var C = Uk([t.lockRef.current], (t.shards || []).map(vy), !0).filter(Boolean);
      return C.forEach(function(N) {
        return N.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), C.forEach(function(N) {
          return N.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [t.inert, t.lockRef.current, t.shards]);
  var d = E.useCallback(function(C, N) {
    if ("touches" in C && C.touches.length === 2 || C.type === "wheel" && C.ctrlKey)
      return !c.current.allowPinchZoom;
    var T = Zo(C), I = l.current, j = "deltaX" in C ? C.deltaX : I[0] - T[0], Q = "deltaY" in C ? C.deltaY : I[1] - T[1], H, R = C.target, F = Math.abs(j) > Math.abs(Q) ? "h" : "v";
    if ("touches" in C && F === "h" && R.type === "range")
      return !1;
    var V = yy(F, R);
    if (!V)
      return !0;
    if (V ? H = F : (H = F === "v" ? "h" : "v", V = yy(F, R)), !V)
      return !1;
    if (!i.current && "changedTouches" in C && (j || Q) && (i.current = H), !H)
      return !0;
    var Z = i.current || H;
    return d3(Z, N, C, Z === "h" ? j : Q);
  }, []), m = E.useCallback(function(C) {
    var N = C;
    if (!(!Ql.length || Ql[Ql.length - 1] !== u)) {
      var T = "deltaY" in N ? by(N) : Zo(N), I = r.current.filter(function(H) {
        return H.name === N.type && (H.target === N.target || N.target === H.shadowParent) && h3(H.delta, T);
      })[0];
      if (I && I.should) {
        N.cancelable && N.preventDefault();
        return;
      }
      if (!I) {
        var j = (c.current.shards || []).map(vy).filter(Boolean).filter(function(H) {
          return H.contains(N.target);
        }), Q = j.length > 0 ? d(N, j[0]) : !c.current.noIsolation;
        Q && N.cancelable && N.preventDefault();
      }
    }
  }, []), h = E.useCallback(function(C, N, T, I) {
    var j = { name: C, delta: N, target: T, should: I, shadowParent: y3(T) };
    r.current.push(j), setTimeout(function() {
      r.current = r.current.filter(function(Q) {
        return Q !== j;
      });
    }, 1);
  }, []), y = E.useCallback(function(C) {
    l.current = Zo(C), i.current = void 0;
  }, []), g = E.useCallback(function(C) {
    h(C.type, by(C), C.target, d(C, t.lockRef.current));
  }, []), b = E.useCallback(function(C) {
    h(C.type, Zo(C), C.target, d(C, t.lockRef.current));
  }, []);
  E.useEffect(function() {
    return Ql.push(u), t.setCallbacks({
      onScrollCapture: g,
      onWheelCapture: g,
      onTouchMoveCapture: b
    }), document.addEventListener("wheel", m, Xl), document.addEventListener("touchmove", m, Xl), document.addEventListener("touchstart", y, Xl), function() {
      Ql = Ql.filter(function(C) {
        return C !== u;
      }), document.removeEventListener("wheel", m, Xl), document.removeEventListener("touchmove", m, Xl), document.removeEventListener("touchstart", y, Xl);
    };
  }, []);
  var v = t.removeScrollBar, A = t.inert;
  return E.createElement(
    E.Fragment,
    null,
    A ? E.createElement(u, { styles: p3(s) }) : null,
    v ? E.createElement(a3, { noRelative: t.noRelative, gapMode: t.gapMode }) : null
  );
}
function y3(t) {
  for (var r = null; t !== null; )
    t instanceof ShadowRoot && (r = t.host, t = t.host), t = t.parentNode;
  return r;
}
const b3 = Gk(fb, g3);
var gb = E.forwardRef(function(t, r) {
  return E.createElement(ys, Dn({}, t, { ref: r, sideCar: b3 }));
});
gb.classNames = ys.classNames;
var v3 = function(t) {
  if (typeof document > "u")
    return null;
  var r = Array.isArray(t) ? t[0] : t;
  return r.ownerDocument.body;
}, Zl = /* @__PURE__ */ new WeakMap(), Ko = /* @__PURE__ */ new WeakMap(), Jo = {}, df = 0, yb = function(t) {
  return t && (t.host || yb(t.parentNode));
}, x3 = function(t, r) {
  return r.map(function(l) {
    if (t.contains(l))
      return l;
    var i = yb(l);
    return i && t.contains(i) ? i : (console.error("aria-hidden", l, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(l) {
    return !!l;
  });
}, w3 = function(t, r, l, i) {
  var s = x3(r, Array.isArray(t) ? t : [t]);
  Jo[l] || (Jo[l] = /* @__PURE__ */ new WeakMap());
  var u = Jo[l], c = [], d = /* @__PURE__ */ new Set(), m = new Set(s), h = function(g) {
    !g || d.has(g) || (d.add(g), h(g.parentNode));
  };
  s.forEach(h);
  var y = function(g) {
    !g || m.has(g) || Array.prototype.forEach.call(g.children, function(b) {
      if (d.has(b))
        y(b);
      else
        try {
          var v = b.getAttribute(i), A = v !== null && v !== "false", C = (Zl.get(b) || 0) + 1, N = (u.get(b) || 0) + 1;
          Zl.set(b, C), u.set(b, N), c.push(b), C === 1 && A && Ko.set(b, !0), N === 1 && b.setAttribute(l, "true"), A || b.setAttribute(i, "true");
        } catch (T) {
          console.error("aria-hidden: cannot operate on ", b, T);
        }
    });
  };
  return y(r), d.clear(), df++, function() {
    c.forEach(function(g) {
      var b = Zl.get(g) - 1, v = u.get(g) - 1;
      Zl.set(g, b), u.set(g, v), b || (Ko.has(g) || g.removeAttribute(i), Ko.delete(g)), v || g.removeAttribute(l);
    }), df--, df || (Zl = /* @__PURE__ */ new WeakMap(), Zl = /* @__PURE__ */ new WeakMap(), Ko = /* @__PURE__ */ new WeakMap(), Jo = {});
  };
}, S3 = function(t, r, l) {
  l === void 0 && (l = "data-aria-hidden");
  var i = Array.from(Array.isArray(t) ? t : [t]), s = v3(t);
  return s ? (i.push.apply(i, Array.from(s.querySelectorAll("[aria-live], script"))), w3(i, s, l, "aria-hidden")) : function() {
    return null;
  };
}, bs = "Dialog", [bb, vb] = dd(bs), [E3, wn] = bb(bs), xb = (t) => {
  const {
    __scopeDialog: r,
    children: l,
    open: i,
    defaultOpen: s,
    onOpenChange: u,
    modal: c = !0
  } = t, d = E.useRef(null), m = E.useRef(null), [h, y] = ak({
    prop: i,
    defaultProp: s ?? !1,
    onChange: u,
    caller: bs
  });
  return /* @__PURE__ */ _.jsx(
    E3,
    {
      scope: r,
      triggerRef: d,
      contentRef: m,
      contentId: lf(),
      titleId: lf(),
      descriptionId: lf(),
      open: h,
      onOpenChange: y,
      onOpenToggle: E.useCallback(() => y((g) => !g), [y]),
      modal: c,
      children: l
    }
  );
};
xb.displayName = bs;
var wb = "DialogTrigger", Sb = E.forwardRef(
  (t, r) => {
    const { __scopeDialog: l, ...i } = t, s = wn(wb, l), u = $n(r, s.triggerRef);
    return /* @__PURE__ */ _.jsx(
      pn.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": gd(s.open),
        ...i,
        ref: u,
        onClick: Jn(t.onClick, s.onOpenToggle)
      }
    );
  }
);
Sb.displayName = wb;
var pd = "DialogPortal", [k3, Eb] = bb(pd, {
  forceMount: void 0
}), kb = (t) => {
  const { __scopeDialog: r, forceMount: l, children: i, container: s } = t, u = wn(pd, r);
  return /* @__PURE__ */ _.jsx(k3, { scope: r, forceMount: l, children: E.Children.map(i, (c) => /* @__PURE__ */ _.jsx(gs, { present: l || u.open, children: /* @__PURE__ */ _.jsx(sb, { asChild: !0, container: s, children: c }) })) });
};
kb.displayName = pd;
var os = "DialogOverlay", Cb = E.forwardRef(
  (t, r) => {
    const l = Eb(os, t.__scopeDialog), { forceMount: i = l.forceMount, ...s } = t, u = wn(os, t.__scopeDialog);
    return u.modal ? /* @__PURE__ */ _.jsx(gs, { present: i || u.open, children: /* @__PURE__ */ _.jsx(A3, { ...s, ref: r }) }) : null;
  }
);
Cb.displayName = os;
var C3 = /* @__PURE__ */ hd("DialogOverlay.RemoveScroll"), A3 = E.forwardRef(
  (t, r) => {
    const { __scopeDialog: l, ...i } = t, s = wn(os, l);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ _.jsx(gb, { as: C3, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ _.jsx(
        pn.div,
        {
          "data-state": gd(s.open),
          ...i,
          ref: r,
          style: { pointerEvents: "auto", ...i.style }
        }
      ) })
    );
  }
), nl = "DialogContent", Ab = E.forwardRef(
  (t, r) => {
    const l = Eb(nl, t.__scopeDialog), { forceMount: i = l.forceMount, ...s } = t, u = wn(nl, t.__scopeDialog);
    return /* @__PURE__ */ _.jsx(gs, { present: i || u.open, children: u.modal ? /* @__PURE__ */ _.jsx(T3, { ...s, ref: r }) : /* @__PURE__ */ _.jsx(_3, { ...s, ref: r }) });
  }
);
Ab.displayName = nl;
var T3 = E.forwardRef(
  (t, r) => {
    const l = wn(nl, t.__scopeDialog), i = E.useRef(null), s = $n(r, l.contentRef, i);
    return E.useEffect(() => {
      const u = i.current;
      if (u) return S3(u);
    }, []), /* @__PURE__ */ _.jsx(
      Tb,
      {
        ...t,
        ref: s,
        trapFocus: l.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Jn(t.onCloseAutoFocus, (u) => {
          var c;
          u.preventDefault(), (c = l.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: Jn(t.onPointerDownOutside, (u) => {
          const c = u.detail.originalEvent, d = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || d) && u.preventDefault();
        }),
        onFocusOutside: Jn(
          t.onFocusOutside,
          (u) => u.preventDefault()
        )
      }
    );
  }
), _3 = E.forwardRef(
  (t, r) => {
    const l = wn(nl, t.__scopeDialog), i = E.useRef(!1), s = E.useRef(!1);
    return /* @__PURE__ */ _.jsx(
      Tb,
      {
        ...t,
        ref: r,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (u) => {
          var c, d;
          (c = t.onCloseAutoFocus) == null || c.call(t, u), u.defaultPrevented || (i.current || (d = l.triggerRef.current) == null || d.focus(), u.preventDefault()), i.current = !1, s.current = !1;
        },
        onInteractOutside: (u) => {
          var m, h;
          (m = t.onInteractOutside) == null || m.call(t, u), u.defaultPrevented || (i.current = !0, u.detail.originalEvent.type === "pointerdown" && (s.current = !0));
          const c = u.target;
          ((h = l.triggerRef.current) == null ? void 0 : h.contains(c)) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && s.current && u.preventDefault();
        }
      }
    );
  }
), Tb = E.forwardRef(
  (t, r) => {
    const { __scopeDialog: l, trapFocus: i, onOpenAutoFocus: s, onCloseAutoFocus: u, ...c } = t, d = wn(nl, l), m = E.useRef(null), h = $n(r, m);
    return jk(), /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
      /* @__PURE__ */ _.jsx(
        ib,
        {
          asChild: !0,
          loop: !0,
          trapped: i,
          onMountAutoFocus: s,
          onUnmountAutoFocus: u,
          children: /* @__PURE__ */ _.jsx(
            lb,
            {
              role: "dialog",
              id: d.contentId,
              "aria-describedby": d.descriptionId,
              "aria-labelledby": d.titleId,
              "data-state": gd(d.open),
              ...c,
              ref: h,
              onDismiss: () => d.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
        /* @__PURE__ */ _.jsx(D3, { titleId: d.titleId }),
        /* @__PURE__ */ _.jsx(O3, { contentRef: m, descriptionId: d.descriptionId })
      ] })
    ] });
  }
), md = "DialogTitle", _b = E.forwardRef(
  (t, r) => {
    const { __scopeDialog: l, ...i } = t, s = wn(md, l);
    return /* @__PURE__ */ _.jsx(pn.h2, { id: s.titleId, ...i, ref: r });
  }
);
_b.displayName = md;
var Rb = "DialogDescription", Db = E.forwardRef(
  (t, r) => {
    const { __scopeDialog: l, ...i } = t, s = wn(Rb, l);
    return /* @__PURE__ */ _.jsx(pn.p, { id: s.descriptionId, ...i, ref: r });
  }
);
Db.displayName = Rb;
var Nb = "DialogClose", Ob = E.forwardRef(
  (t, r) => {
    const { __scopeDialog: l, ...i } = t, s = wn(Nb, l);
    return /* @__PURE__ */ _.jsx(
      pn.button,
      {
        type: "button",
        ...i,
        ref: r,
        onClick: Jn(t.onClick, () => s.onOpenChange(!1))
      }
    );
  }
);
Ob.displayName = Nb;
function gd(t) {
  return t ? "open" : "closed";
}
var Mb = "DialogTitleWarning", [R3, zb] = ek(Mb, {
  contentName: nl,
  titleName: md,
  docsSlug: "dialog"
}), D3 = ({ titleId: t }) => {
  const r = zb(Mb), l = `\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;
  return E.useEffect(() => {
    t && (document.getElementById(t) || console.error(l));
  }, [l, t]), null;
}, N3 = "DialogDescriptionWarning", O3 = ({ contentRef: t, descriptionId: r }) => {
  const i = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${zb(N3).contentName}}.`;
  return E.useEffect(() => {
    var u;
    const s = (u = t.current) == null ? void 0 : u.getAttribute("aria-describedby");
    r && s && (document.getElementById(r) || console.warn(i));
  }, [i, t, r]), null;
}, M3 = xb, z3 = Sb, L3 = kb, j3 = Cb, U3 = Ab, B3 = _b, I3 = Db, Lb = Ob, jb = "AlertDialog", [H3, yR] = dd(jb, [
  vb
]), Wn = vb(), Ub = (t) => {
  const { __scopeAlertDialog: r, ...l } = t, i = Wn(r);
  return /* @__PURE__ */ _.jsx(M3, { ...i, ...l, modal: !0 });
};
Ub.displayName = jb;
var q3 = "AlertDialogTrigger", V3 = E.forwardRef(
  (t, r) => {
    const { __scopeAlertDialog: l, ...i } = t, s = Wn(l);
    return /* @__PURE__ */ _.jsx(z3, { ...s, ...i, ref: r });
  }
);
V3.displayName = q3;
var P3 = "AlertDialogPortal", Bb = (t) => {
  const { __scopeAlertDialog: r, ...l } = t, i = Wn(r);
  return /* @__PURE__ */ _.jsx(L3, { ...i, ...l });
};
Bb.displayName = P3;
var Y3 = "AlertDialogOverlay", Ib = E.forwardRef(
  (t, r) => {
    const { __scopeAlertDialog: l, ...i } = t, s = Wn(l);
    return /* @__PURE__ */ _.jsx(j3, { ...s, ...i, ref: r });
  }
);
Ib.displayName = Y3;
var ta = "AlertDialogContent", [F3, G3] = H3(ta), X3 = /* @__PURE__ */ fk("AlertDialogContent"), Hb = E.forwardRef(
  (t, r) => {
    const { __scopeAlertDialog: l, children: i, ...s } = t, u = Wn(l), c = E.useRef(null), d = $n(r, c), m = E.useRef(null);
    return /* @__PURE__ */ _.jsx(
      R3,
      {
        contentName: ta,
        titleName: qb,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ _.jsx(F3, { scope: l, cancelRef: m, children: /* @__PURE__ */ _.jsxs(
          U3,
          {
            role: "alertdialog",
            ...u,
            ...s,
            ref: d,
            onOpenAutoFocus: Jn(s.onOpenAutoFocus, (h) => {
              var y;
              h.preventDefault(), (y = m.current) == null || y.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (h) => h.preventDefault(),
            onInteractOutside: (h) => h.preventDefault(),
            children: [
              /* @__PURE__ */ _.jsx(X3, { children: i }),
              /* @__PURE__ */ _.jsx(Z3, { contentRef: c })
            ]
          }
        ) })
      }
    );
  }
);
Hb.displayName = ta;
var qb = "AlertDialogTitle", Vb = E.forwardRef(
  (t, r) => {
    const { __scopeAlertDialog: l, ...i } = t, s = Wn(l);
    return /* @__PURE__ */ _.jsx(B3, { ...s, ...i, ref: r });
  }
);
Vb.displayName = qb;
var Pb = "AlertDialogDescription", Yb = E.forwardRef((t, r) => {
  const { __scopeAlertDialog: l, ...i } = t, s = Wn(l);
  return /* @__PURE__ */ _.jsx(I3, { ...s, ...i, ref: r });
});
Yb.displayName = Pb;
var Q3 = "AlertDialogAction", Fb = E.forwardRef(
  (t, r) => {
    const { __scopeAlertDialog: l, ...i } = t, s = Wn(l);
    return /* @__PURE__ */ _.jsx(Lb, { ...s, ...i, ref: r });
  }
);
Fb.displayName = Q3;
var Gb = "AlertDialogCancel", Xb = E.forwardRef(
  (t, r) => {
    const { __scopeAlertDialog: l, ...i } = t, { cancelRef: s } = G3(Gb, l), u = Wn(l), c = $n(r, s);
    return /* @__PURE__ */ _.jsx(Lb, { ...u, ...i, ref: c });
  }
);
Xb.displayName = Gb;
var Z3 = ({ contentRef: t }) => {
  const r = `\`${ta}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${ta}\` by passing a \`${Pb}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${ta}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return E.useEffect(() => {
    var i;
    document.getElementById(
      (i = t.current) == null ? void 0 : i.getAttribute("aria-describedby")
    ) || console.warn(r);
  }, [r, t]), null;
}, K3 = Ub, J3 = Bb, Qb = Ib, Zb = Hb, Kb = Fb, Jb = Xb, $b = Vb, Wb = Yb;
const xy = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, wy = P0, $3 = (t, r) => (l) => {
  var i;
  if ((r == null ? void 0 : r.variants) == null) return wy(t, l == null ? void 0 : l.class, l == null ? void 0 : l.className);
  const { variants: s, defaultVariants: u } = r, c = Object.keys(s).map((h) => {
    const y = l == null ? void 0 : l[h], g = u == null ? void 0 : u[h];
    if (y === null) return null;
    const b = xy(y) || xy(g);
    return s[h][b];
  }), d = l && Object.entries(l).reduce((h, y) => {
    let [g, b] = y;
    return b === void 0 || (h[g] = b), h;
  }, {}), m = r == null || (i = r.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((h, y) => {
    let { class: g, className: b, ...v } = y;
    return Object.entries(v).every((A) => {
      let [C, N] = A;
      return Array.isArray(N) ? N.includes({
        ...u,
        ...d
      }[C]) : {
        ...u,
        ...d
      }[C] === N;
    }) ? [
      ...h,
      g,
      b
    ] : h;
  }, []);
  return wy(t, c, m, l == null ? void 0 : l.class, l == null ? void 0 : l.className);
}, ev = $3(
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
), Wl = E.forwardRef(
  ({ className: t, variant: r, size: l, asChild: i = !1, ...s }, u) => {
    const c = i ? uk : "button";
    return /* @__PURE__ */ _.jsx(c, { ref: u, className: at(ev({ variant: r, size: l, className: t })), ...s });
  }
);
Wl.displayName = "Button";
const W3 = K3, eC = J3, tv = E.forwardRef(({ className: t, ...r }, l) => /* @__PURE__ */ _.jsx(
  Qb,
  {
    className: at(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...r,
    ref: l
  }
));
tv.displayName = Qb.displayName;
const nv = E.forwardRef(
  ({ className: t, ...r }, l) => {
    var s;
    const i = ((s = document.querySelector("chat-bot")) == null ? void 0 : s.shadowRoot) ?? void 0;
    return /* @__PURE__ */ _.jsxs(eC, { container: i, children: [
      /* @__PURE__ */ _.jsx(tv, {}),
      /* @__PURE__ */ _.jsx(
        Zb,
        {
          ref: l,
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
nv.displayName = Zb.displayName;
function rv({
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
rv.displayName = "AlertDialogHeader";
function lv({
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
lv.displayName = "AlertDialogFooter";
const Xf = E.forwardRef(({ className: t, ...r }, l) => /* @__PURE__ */ _.jsx(
  $b,
  {
    ref: l,
    className: at("text-title-large modal-text", t),
    ...r
  }
));
Xf.displayName = $b.displayName;
const tC = E.forwardRef(({ className: t, ...r }, l) => /* @__PURE__ */ _.jsx(
  Wb,
  {
    ref: l,
    className: at("text-on-surface-variant modal-text text-sm", t),
    ...r
  }
));
tC.displayName = Wb.displayName;
const av = E.forwardRef(({ className: t, ...r }, l) => /* @__PURE__ */ _.jsx(
  Kb,
  {
    ref: l,
    className: at(
      ev({ variant: "outline" }),
      "action-button modal-button",
      t
    ),
    ...r
  }
));
av.displayName = Kb.displayName;
const iv = E.forwardRef(({ className: t, ...r }, l) => /* @__PURE__ */ _.jsx(
  Jb,
  {
    ref: l,
    className: at("cancel-button cursor-pointer modal-button mt-2 sm:mt-0", t),
    ...r
  }
));
iv.displayName = Jb.displayName;
function nC({
  open: t,
  title: r,
  confirmText: l,
  cancelText: i,
  onConfirm: s,
  onCancel: u,
  confirmDisabled: c = !1,
  children: d,
  description: m,
  isBold: h
}) {
  return /* @__PURE__ */ _.jsx(W3, { open: t, children: /* @__PURE__ */ _.jsxs(nv, { className: "block bg-black p-0", children: [
    /* @__PURE__ */ _.jsx(
      "button",
      {
        className: "absolute right-6 top-6 text-white hover:text-gray-400",
        type: "button",
        onClick: u,
        children: /* @__PURE__ */ _.jsx(q0, { size: 20 })
      }
    ),
    /* @__PURE__ */ _.jsx(rv, { className: "rounded-t-lg p-5", children: r ? /* @__PURE__ */ _.jsx(Xf, { children: r }) : /* @__PURE__ */ _.jsx("span", { className: "sr-only", children: /* @__PURE__ */ _.jsx(Xf, { children: "Dialogo de confirmación" }) }) }),
    m && /* @__PURE__ */ _.jsx("p", { className: at("p-6 text-white", h && "text-title font-bold"), children: m }),
    d && /* @__PURE__ */ _.jsx("div", { className: "border-outline-variant border-y py-5", children: d }),
    /* @__PURE__ */ _.jsxs(lv, { className: "rounded-b-lg p-5", children: [
      i && /* @__PURE__ */ _.jsx(iv, { className: "border-none text-primary", onClick: u, children: i }),
      /* @__PURE__ */ _.jsx(av, { disabled: c, onClick: s, children: l })
    ] })
  ] }) });
}
const yd = ({ variant: t, className: r }) => /* @__PURE__ */ _.jsx("div", { className: `relative flex items-center ${r}`, children: /* @__PURE__ */ _.jsxs("svg", { className: "h-full w-full", viewBox: "0 0 90 90", xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), ov = E.forwardRef(
  ({ className: t, ...r }, l) => /* @__PURE__ */ _.jsx(
    "div",
    {
      ref: l,
      className: at("absolute right-0 top-0 h-screen shadow-sm", t),
      ...r
    }
  )
);
ov.displayName = "Card";
const sv = E.forwardRef(
  ({ className: t, ...r }, l) => /* @__PURE__ */ _.jsx("div", { ref: l, className: at("flex flex-col space-y-1.5", t), ...r })
);
sv.displayName = "CardHeader";
const uv = E.forwardRef(
  ({ className: t, ...r }, l) => /* @__PURE__ */ _.jsx(
    "h3",
    {
      ref: l,
      className: at("text-2xl font-semibold leading-none tracking-tight", t),
      ...r,
      children: r.children
    }
  )
);
uv.displayName = "CardTitle";
const rC = E.forwardRef(({ className: t, ...r }, l) => /* @__PURE__ */ _.jsx("p", { ref: l, className: at("text-sm text-muted-foreground", t), ...r }));
rC.displayName = "CardDescription";
const cv = E.forwardRef(
  ({ className: t, ...r }, l) => /* @__PURE__ */ _.jsx("div", { ref: l, className: at("pt-0", t), ...r })
);
cv.displayName = "CardContent";
const fv = E.forwardRef(
  ({ className: t, ...r }, l) => /* @__PURE__ */ _.jsx(
    "div",
    {
      ref: l,
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
fv.displayName = "CardFooter";
const lC = ({ className: t }) => /* @__PURE__ */ _.jsx("div", { className: `relative flex items-center text-lg font-medium ${t}`, children: /* @__PURE__ */ _.jsxs(
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
function aC(t, r) {
  typeof t == "function" ? t(r) : t != null && (t.current = r);
}
function dv(...t) {
  return (r) => t.forEach((l) => aC(l, r));
}
function al(...t) {
  return E.useCallback(dv(...t), t);
}
var hv = E.forwardRef((t, r) => {
  const { children: l, ...i } = t, s = E.Children.toArray(l), u = s.find(oC);
  if (u) {
    const c = u.props.children, d = s.map((m) => m === u ? E.Children.count(c) > 1 ? E.Children.only(null) : E.isValidElement(c) ? c.props.children : null : m);
    return /* @__PURE__ */ _.jsx(Qf, { ...i, ref: r, children: E.isValidElement(c) ? E.cloneElement(c, void 0, d) : null });
  }
  return /* @__PURE__ */ _.jsx(Qf, { ...i, ref: r, children: l });
});
hv.displayName = "Slot";
var Qf = E.forwardRef((t, r) => {
  const { children: l, ...i } = t;
  if (E.isValidElement(l)) {
    const s = uC(l);
    return E.cloneElement(l, {
      ...sC(i, l.props),
      // @ts-ignore
      ref: r ? dv(r, s) : s
    });
  }
  return E.Children.count(l) > 1 ? E.Children.only(null) : null;
});
Qf.displayName = "SlotClone";
var iC = ({ children: t }) => /* @__PURE__ */ _.jsx(_.Fragment, { children: t });
function oC(t) {
  return E.isValidElement(t) && t.type === iC;
}
function sC(t, r) {
  const l = { ...r };
  for (const i in r) {
    const s = t[i], u = r[i];
    /^on[A-Z]/.test(i) ? s && u ? l[i] = (...d) => {
      u(...d), s(...d);
    } : s && (l[i] = s) : i === "style" ? l[i] = { ...s, ...u } : i === "className" && (l[i] = [s, u].filter(Boolean).join(" "));
  }
  return { ...t, ...l };
}
function uC(t) {
  var i, s;
  let r = (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : i.get, l = r && "isReactWarning" in r && r.isReactWarning;
  return l ? t.ref : (r = (s = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : s.get, l = r && "isReactWarning" in r && r.isReactWarning, l ? t.props.ref : t.props.ref || t.ref);
}
var cC = [
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
  "span",
  "svg",
  "ul"
], Ci = cC.reduce((t, r) => {
  const l = E.forwardRef((i, s) => {
    const { asChild: u, ...c } = i, d = u ? hv : r;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ _.jsx(d, { ...c, ref: s });
  });
  return l.displayName = `Primitive.${r}`, { ...t, [r]: l };
}, {}), Zf = globalThis != null && globalThis.document ? E.useLayoutEffect : () => {
};
function fC(t, r) {
  return E.useReducer((l, i) => r[l][i] ?? l, t);
}
var Ai = (t) => {
  const { present: r, children: l } = t, i = dC(r), s = typeof l == "function" ? l({ present: i.isPresent }) : E.Children.only(l), u = al(i.ref, hC(s));
  return typeof l == "function" || i.isPresent ? E.cloneElement(s, { ref: u }) : null;
};
Ai.displayName = "Presence";
function dC(t) {
  const [r, l] = E.useState(), i = E.useRef({}), s = E.useRef(t), u = E.useRef("none"), c = t ? "mounted" : "unmounted", [d, m] = fC(c, {
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
  return E.useEffect(() => {
    const h = $o(i.current);
    u.current = d === "mounted" ? h : "none";
  }, [d]), Zf(() => {
    const h = i.current, y = s.current;
    if (y !== t) {
      const b = u.current, v = $o(h);
      t ? m("MOUNT") : v === "none" || (h == null ? void 0 : h.display) === "none" ? m("UNMOUNT") : m(y && b !== v ? "ANIMATION_OUT" : "UNMOUNT"), s.current = t;
    }
  }, [t, m]), Zf(() => {
    if (r) {
      let h;
      const y = r.ownerDocument.defaultView ?? window, g = (v) => {
        const C = $o(i.current).includes(v.animationName);
        if (v.target === r && C && (m("ANIMATION_END"), !s.current)) {
          const N = r.style.animationFillMode;
          r.style.animationFillMode = "forwards", h = y.setTimeout(() => {
            r.style.animationFillMode === "forwards" && (r.style.animationFillMode = N);
          });
        }
      }, b = (v) => {
        v.target === r && (u.current = $o(i.current));
      };
      return r.addEventListener("animationstart", b), r.addEventListener("animationcancel", g), r.addEventListener("animationend", g), () => {
        y.clearTimeout(h), r.removeEventListener("animationstart", b), r.removeEventListener("animationcancel", g), r.removeEventListener("animationend", g);
      };
    } else
      m("ANIMATION_END");
  }, [r, m]), {
    isPresent: ["mounted", "unmountSuspended"].includes(d),
    ref: E.useCallback((h) => {
      h && (i.current = getComputedStyle(h)), l(h);
    }, [])
  };
}
function $o(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
function hC(t) {
  var i, s;
  let r = (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : i.get, l = r && "isReactWarning" in r && r.isReactWarning;
  return l ? t.ref : (r = (s = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : s.get, l = r && "isReactWarning" in r && r.isReactWarning, l ? t.props.ref : t.props.ref || t.ref);
}
function pC(t, r = []) {
  let l = [];
  function i(u, c) {
    const d = E.createContext(c), m = l.length;
    l = [...l, c];
    const h = (g) => {
      var T;
      const { scope: b, children: v, ...A } = g, C = ((T = b == null ? void 0 : b[t]) == null ? void 0 : T[m]) || d, N = E.useMemo(() => A, Object.values(A));
      return /* @__PURE__ */ _.jsx(C.Provider, { value: N, children: v });
    };
    h.displayName = u + "Provider";
    function y(g, b) {
      var C;
      const v = ((C = b == null ? void 0 : b[t]) == null ? void 0 : C[m]) || d, A = E.useContext(v);
      if (A) return A;
      if (c !== void 0) return c;
      throw new Error(`\`${g}\` must be used within \`${u}\``);
    }
    return [h, y];
  }
  const s = () => {
    const u = l.map((c) => E.createContext(c));
    return function(d) {
      const m = (d == null ? void 0 : d[t]) || u;
      return E.useMemo(
        () => ({ [`__scope${t}`]: { ...d, [t]: m } }),
        [d, m]
      );
    };
  };
  return s.scopeName = t, [i, mC(s, ...r)];
}
function mC(...t) {
  const r = t[0];
  if (t.length === 1) return r;
  const l = () => {
    const i = t.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(u) {
      const c = i.reduce((d, { useScope: m, scopeName: h }) => {
        const g = m(u)[`__scope${h}`];
        return { ...d, ...g };
      }, {});
      return E.useMemo(() => ({ [`__scope${r.scopeName}`]: c }), [c]);
    };
  };
  return l.scopeName = r.scopeName, l;
}
function el(t) {
  const r = E.useRef(t);
  return E.useEffect(() => {
    r.current = t;
  }), E.useMemo(() => (...l) => {
    var i;
    return (i = r.current) == null ? void 0 : i.call(r, ...l);
  }, []);
}
var gC = E.createContext(void 0);
function yC(t) {
  const r = E.useContext(gC);
  return t || r || "ltr";
}
function bC(t, [r, l]) {
  return Math.min(l, Math.max(r, t));
}
function tl(t, r, { checkForDefaultPrevented: l = !0 } = {}) {
  return function(s) {
    if (t == null || t(s), l === !1 || !s.defaultPrevented)
      return r == null ? void 0 : r(s);
  };
}
function vC(t, r) {
  return E.useReducer((l, i) => r[l][i] ?? l, t);
}
var bd = "ScrollArea", [pv, bR] = pC(bd), [xC, mn] = pv(bd), mv = E.forwardRef(
  (t, r) => {
    const {
      __scopeScrollArea: l,
      type: i = "hover",
      dir: s,
      scrollHideDelay: u = 600,
      ...c
    } = t, [d, m] = E.useState(null), [h, y] = E.useState(null), [g, b] = E.useState(null), [v, A] = E.useState(null), [C, N] = E.useState(null), [T, I] = E.useState(0), [j, Q] = E.useState(0), [H, R] = E.useState(!1), [F, V] = E.useState(!1), Z = al(r, (re) => m(re)), M = yC(s);
    return /* @__PURE__ */ _.jsx(
      xC,
      {
        scope: l,
        type: i,
        dir: M,
        scrollHideDelay: u,
        scrollArea: d,
        viewport: h,
        onViewportChange: y,
        content: g,
        onContentChange: b,
        scrollbarX: v,
        onScrollbarXChange: A,
        scrollbarXEnabled: H,
        onScrollbarXEnabledChange: R,
        scrollbarY: C,
        onScrollbarYChange: N,
        scrollbarYEnabled: F,
        onScrollbarYEnabledChange: V,
        onCornerWidthChange: I,
        onCornerHeightChange: Q,
        children: /* @__PURE__ */ _.jsx(
          Ci.div,
          {
            dir: M,
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
mv.displayName = bd;
var gv = "ScrollAreaViewport", yv = E.forwardRef(
  (t, r) => {
    const { __scopeScrollArea: l, children: i, asChild: s, nonce: u, ...c } = t, d = mn(gv, l), m = E.useRef(null), h = al(r, m, d.onViewportChange);
    return /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
      /* @__PURE__ */ _.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `
[data-radix-scroll-area-viewport] {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
[data-radix-scroll-area-viewport]::-webkit-scrollbar {
  display: none;
}
:where([data-radix-scroll-area-viewport]) {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
:where([data-radix-scroll-area-content]) {
  flex-grow: 1;
}
`
          },
          nonce: u
        }
      ),
      /* @__PURE__ */ _.jsx(
        Ci.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...c,
          asChild: s,
          ref: h,
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
            overflowX: d.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: d.scrollbarYEnabled ? "scroll" : "hidden",
            ...t.style
          },
          children: DC({ asChild: s, children: i }, (y) => /* @__PURE__ */ _.jsx(
            "div",
            {
              "data-radix-scroll-area-content": "",
              ref: d.onContentChange,
              style: { minWidth: d.scrollbarXEnabled ? "fit-content" : void 0 },
              children: y
            }
          ))
        }
      )
    ] });
  }
);
yv.displayName = gv;
var Nn = "ScrollAreaScrollbar", vd = E.forwardRef(
  (t, r) => {
    const { forceMount: l, ...i } = t, s = mn(Nn, t.__scopeScrollArea), { onScrollbarXEnabledChange: u, onScrollbarYEnabledChange: c } = s, d = t.orientation === "horizontal";
    return E.useEffect(() => (d ? u(!0) : c(!0), () => {
      d ? u(!1) : c(!1);
    }), [d, u, c]), s.type === "hover" ? /* @__PURE__ */ _.jsx(wC, { ...i, ref: r, forceMount: l }) : s.type === "scroll" ? /* @__PURE__ */ _.jsx(SC, { ...i, ref: r, forceMount: l }) : s.type === "auto" ? /* @__PURE__ */ _.jsx(bv, { ...i, ref: r, forceMount: l }) : s.type === "always" ? /* @__PURE__ */ _.jsx(xd, { ...i, ref: r }) : null;
  }
);
vd.displayName = Nn;
var wC = E.forwardRef((t, r) => {
  const { forceMount: l, ...i } = t, s = mn(Nn, t.__scopeScrollArea), [u, c] = E.useState(!1);
  return E.useEffect(() => {
    const d = s.scrollArea;
    let m = 0;
    if (d) {
      const h = () => {
        window.clearTimeout(m), c(!0);
      }, y = () => {
        m = window.setTimeout(() => c(!1), s.scrollHideDelay);
      };
      return d.addEventListener("pointerenter", h), d.addEventListener("pointerleave", y), () => {
        window.clearTimeout(m), d.removeEventListener("pointerenter", h), d.removeEventListener("pointerleave", y);
      };
    }
  }, [s.scrollArea, s.scrollHideDelay]), /* @__PURE__ */ _.jsx(Ai, { present: l || u, children: /* @__PURE__ */ _.jsx(
    bv,
    {
      "data-state": u ? "visible" : "hidden",
      ...i,
      ref: r
    }
  ) });
}), SC = E.forwardRef((t, r) => {
  const { forceMount: l, ...i } = t, s = mn(Nn, t.__scopeScrollArea), u = t.orientation === "horizontal", c = xs(() => m("SCROLL_END"), 100), [d, m] = vC("hidden", {
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
  return E.useEffect(() => {
    if (d === "idle") {
      const h = window.setTimeout(() => m("HIDE"), s.scrollHideDelay);
      return () => window.clearTimeout(h);
    }
  }, [d, s.scrollHideDelay, m]), E.useEffect(() => {
    const h = s.viewport, y = u ? "scrollLeft" : "scrollTop";
    if (h) {
      let g = h[y];
      const b = () => {
        const v = h[y];
        g !== v && (m("SCROLL"), c()), g = v;
      };
      return h.addEventListener("scroll", b), () => h.removeEventListener("scroll", b);
    }
  }, [s.viewport, u, m, c]), /* @__PURE__ */ _.jsx(Ai, { present: l || d !== "hidden", children: /* @__PURE__ */ _.jsx(
    xd,
    {
      "data-state": d === "hidden" ? "hidden" : "visible",
      ...i,
      ref: r,
      onPointerEnter: tl(t.onPointerEnter, () => m("POINTER_ENTER")),
      onPointerLeave: tl(t.onPointerLeave, () => m("POINTER_LEAVE"))
    }
  ) });
}), bv = E.forwardRef((t, r) => {
  const l = mn(Nn, t.__scopeScrollArea), { forceMount: i, ...s } = t, [u, c] = E.useState(!1), d = t.orientation === "horizontal", m = xs(() => {
    if (l.viewport) {
      const h = l.viewport.offsetWidth < l.viewport.scrollWidth, y = l.viewport.offsetHeight < l.viewport.scrollHeight;
      c(d ? h : y);
    }
  }, 10);
  return aa(l.viewport, m), aa(l.content, m), /* @__PURE__ */ _.jsx(Ai, { present: i || u, children: /* @__PURE__ */ _.jsx(
    xd,
    {
      "data-state": u ? "visible" : "hidden",
      ...s,
      ref: r
    }
  ) });
}), xd = E.forwardRef((t, r) => {
  const { orientation: l = "vertical", ...i } = t, s = mn(Nn, t.__scopeScrollArea), u = E.useRef(null), c = E.useRef(0), [d, m] = E.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), h = Ev(d.viewport, d.content), y = {
    ...i,
    sizes: d,
    onSizesChange: m,
    hasThumb: h > 0 && h < 1,
    onThumbChange: (b) => u.current = b,
    onThumbPointerUp: () => c.current = 0,
    onThumbPointerDown: (b) => c.current = b
  };
  function g(b, v) {
    return _C(b, c.current, d, v);
  }
  return l === "horizontal" ? /* @__PURE__ */ _.jsx(
    EC,
    {
      ...y,
      ref: r,
      onThumbPositionChange: () => {
        if (s.viewport && u.current) {
          const b = s.viewport.scrollLeft, v = Sy(b, d, s.dir);
          u.current.style.transform = `translate3d(${v}px, 0, 0)`;
        }
      },
      onWheelScroll: (b) => {
        s.viewport && (s.viewport.scrollLeft = b);
      },
      onDragScroll: (b) => {
        s.viewport && (s.viewport.scrollLeft = g(b, s.dir));
      }
    }
  ) : l === "vertical" ? /* @__PURE__ */ _.jsx(
    kC,
    {
      ...y,
      ref: r,
      onThumbPositionChange: () => {
        if (s.viewport && u.current) {
          const b = s.viewport.scrollTop, v = Sy(b, d);
          u.current.style.transform = `translate3d(0, ${v}px, 0)`;
        }
      },
      onWheelScroll: (b) => {
        s.viewport && (s.viewport.scrollTop = b);
      },
      onDragScroll: (b) => {
        s.viewport && (s.viewport.scrollTop = g(b));
      }
    }
  ) : null;
}), EC = E.forwardRef((t, r) => {
  const { sizes: l, onSizesChange: i, ...s } = t, u = mn(Nn, t.__scopeScrollArea), [c, d] = E.useState(), m = E.useRef(null), h = al(r, m, u.onScrollbarXChange);
  return E.useEffect(() => {
    m.current && d(getComputedStyle(m.current));
  }, [m]), /* @__PURE__ */ _.jsx(
    xv,
    {
      "data-orientation": "horizontal",
      ...s,
      ref: h,
      sizes: l,
      style: {
        bottom: 0,
        left: u.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: u.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": vs(l) + "px",
        ...t.style
      },
      onThumbPointerDown: (y) => t.onThumbPointerDown(y.x),
      onDragScroll: (y) => t.onDragScroll(y.x),
      onWheelScroll: (y, g) => {
        if (u.viewport) {
          const b = u.viewport.scrollLeft + y.deltaX;
          t.onWheelScroll(b), Cv(b, g) && y.preventDefault();
        }
      },
      onResize: () => {
        m.current && u.viewport && c && i({
          content: u.viewport.scrollWidth,
          viewport: u.viewport.offsetWidth,
          scrollbar: {
            size: m.current.clientWidth,
            paddingStart: us(c.paddingLeft),
            paddingEnd: us(c.paddingRight)
          }
        });
      }
    }
  );
}), kC = E.forwardRef((t, r) => {
  const { sizes: l, onSizesChange: i, ...s } = t, u = mn(Nn, t.__scopeScrollArea), [c, d] = E.useState(), m = E.useRef(null), h = al(r, m, u.onScrollbarYChange);
  return E.useEffect(() => {
    m.current && d(getComputedStyle(m.current));
  }, [m]), /* @__PURE__ */ _.jsx(
    xv,
    {
      "data-orientation": "vertical",
      ...s,
      ref: h,
      sizes: l,
      style: {
        top: 0,
        right: u.dir === "ltr" ? 0 : void 0,
        left: u.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": vs(l) + "px",
        ...t.style
      },
      onThumbPointerDown: (y) => t.onThumbPointerDown(y.y),
      onDragScroll: (y) => t.onDragScroll(y.y),
      onWheelScroll: (y, g) => {
        if (u.viewport) {
          const b = u.viewport.scrollTop + y.deltaY;
          t.onWheelScroll(b), Cv(b, g) && y.preventDefault();
        }
      },
      onResize: () => {
        m.current && u.viewport && c && i({
          content: u.viewport.scrollHeight,
          viewport: u.viewport.offsetHeight,
          scrollbar: {
            size: m.current.clientHeight,
            paddingStart: us(c.paddingTop),
            paddingEnd: us(c.paddingBottom)
          }
        });
      }
    }
  );
}), [CC, vv] = pv(Nn), xv = E.forwardRef((t, r) => {
  const {
    __scopeScrollArea: l,
    sizes: i,
    hasThumb: s,
    onThumbChange: u,
    onThumbPointerUp: c,
    onThumbPointerDown: d,
    onThumbPositionChange: m,
    onDragScroll: h,
    onWheelScroll: y,
    onResize: g,
    ...b
  } = t, v = mn(Nn, l), [A, C] = E.useState(null), N = al(r, (Z) => C(Z)), T = E.useRef(null), I = E.useRef(""), j = v.viewport, Q = i.content - i.viewport, H = el(y), R = el(m), F = xs(g, 10);
  function V(Z) {
    if (T.current) {
      const M = Z.clientX - T.current.left, re = Z.clientY - T.current.top;
      h({ x: M, y: re });
    }
  }
  return E.useEffect(() => {
    const Z = (M) => {
      const re = M.target;
      (A == null ? void 0 : A.contains(re)) && H(M, Q);
    };
    return document.addEventListener("wheel", Z, { passive: !1 }), () => document.removeEventListener("wheel", Z, { passive: !1 });
  }, [j, A, Q, H]), E.useEffect(R, [i, R]), aa(A, F), aa(v.content, F), /* @__PURE__ */ _.jsx(
    CC,
    {
      scope: l,
      scrollbar: A,
      hasThumb: s,
      onThumbChange: el(u),
      onThumbPointerUp: el(c),
      onThumbPositionChange: R,
      onThumbPointerDown: el(d),
      children: /* @__PURE__ */ _.jsx(
        Ci.div,
        {
          ...b,
          ref: N,
          style: { position: "absolute", ...b.style },
          onPointerDown: tl(t.onPointerDown, (Z) => {
            Z.button === 0 && (Z.target.setPointerCapture(Z.pointerId), T.current = A.getBoundingClientRect(), I.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), V(Z));
          }),
          onPointerMove: tl(t.onPointerMove, V),
          onPointerUp: tl(t.onPointerUp, (Z) => {
            const M = Z.target;
            M.hasPointerCapture(Z.pointerId) && M.releasePointerCapture(Z.pointerId), document.body.style.webkitUserSelect = I.current, v.viewport && (v.viewport.style.scrollBehavior = ""), T.current = null;
          })
        }
      )
    }
  );
}), ss = "ScrollAreaThumb", wv = E.forwardRef(
  (t, r) => {
    const { forceMount: l, ...i } = t, s = vv(ss, t.__scopeScrollArea);
    return /* @__PURE__ */ _.jsx(Ai, { present: l || s.hasThumb, children: /* @__PURE__ */ _.jsx(AC, { ref: r, ...i }) });
  }
), AC = E.forwardRef(
  (t, r) => {
    const { __scopeScrollArea: l, style: i, ...s } = t, u = mn(ss, l), c = vv(ss, l), { onThumbPositionChange: d } = c, m = al(
      r,
      (g) => c.onThumbChange(g)
    ), h = E.useRef(), y = xs(() => {
      h.current && (h.current(), h.current = void 0);
    }, 100);
    return E.useEffect(() => {
      const g = u.viewport;
      if (g) {
        const b = () => {
          if (y(), !h.current) {
            const v = RC(g, d);
            h.current = v, d();
          }
        };
        return d(), g.addEventListener("scroll", b), () => g.removeEventListener("scroll", b);
      }
    }, [u.viewport, y, d]), /* @__PURE__ */ _.jsx(
      Ci.div,
      {
        "data-state": c.hasThumb ? "visible" : "hidden",
        ...s,
        ref: m,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...i
        },
        onPointerDownCapture: tl(t.onPointerDownCapture, (g) => {
          const v = g.target.getBoundingClientRect(), A = g.clientX - v.left, C = g.clientY - v.top;
          c.onThumbPointerDown({ x: A, y: C });
        }),
        onPointerUp: tl(t.onPointerUp, c.onThumbPointerUp)
      }
    );
  }
);
wv.displayName = ss;
var wd = "ScrollAreaCorner", Sv = E.forwardRef(
  (t, r) => {
    const l = mn(wd, t.__scopeScrollArea), i = !!(l.scrollbarX && l.scrollbarY);
    return l.type !== "scroll" && i ? /* @__PURE__ */ _.jsx(TC, { ...t, ref: r }) : null;
  }
);
Sv.displayName = wd;
var TC = E.forwardRef((t, r) => {
  const { __scopeScrollArea: l, ...i } = t, s = mn(wd, l), [u, c] = E.useState(0), [d, m] = E.useState(0), h = !!(u && d);
  return aa(s.scrollbarX, () => {
    var g;
    const y = ((g = s.scrollbarX) == null ? void 0 : g.offsetHeight) || 0;
    s.onCornerHeightChange(y), m(y);
  }), aa(s.scrollbarY, () => {
    var g;
    const y = ((g = s.scrollbarY) == null ? void 0 : g.offsetWidth) || 0;
    s.onCornerWidthChange(y), c(y);
  }), h ? /* @__PURE__ */ _.jsx(
    Ci.div,
    {
      ...i,
      ref: r,
      style: {
        width: u,
        height: d,
        position: "absolute",
        right: s.dir === "ltr" ? 0 : void 0,
        left: s.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...t.style
      }
    }
  ) : null;
});
function us(t) {
  return t ? parseInt(t, 10) : 0;
}
function Ev(t, r) {
  const l = t / r;
  return isNaN(l) ? 0 : l;
}
function vs(t) {
  const r = Ev(t.viewport, t.content), l = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = (t.scrollbar.size - l) * r;
  return Math.max(i, 18);
}
function _C(t, r, l, i = "ltr") {
  const s = vs(l), u = s / 2, c = r || u, d = s - c, m = l.scrollbar.paddingStart + c, h = l.scrollbar.size - l.scrollbar.paddingEnd - d, y = l.content - l.viewport, g = i === "ltr" ? [0, y] : [y * -1, 0];
  return kv([m, h], g)(t);
}
function Sy(t, r, l = "ltr") {
  const i = vs(r), s = r.scrollbar.paddingStart + r.scrollbar.paddingEnd, u = r.scrollbar.size - s, c = r.content - r.viewport, d = u - i, m = l === "ltr" ? [0, c] : [c * -1, 0], h = bC(t, m);
  return kv([0, c], [0, d])(h);
}
function kv(t, r) {
  return (l) => {
    if (t[0] === t[1] || r[0] === r[1]) return r[0];
    const i = (r[1] - r[0]) / (t[1] - t[0]);
    return r[0] + i * (l - t[0]);
  };
}
function Cv(t, r) {
  return t > 0 && t < r;
}
var RC = (t, r = () => {
}) => {
  let l = { left: t.scrollLeft, top: t.scrollTop }, i = 0;
  return function s() {
    const u = { left: t.scrollLeft, top: t.scrollTop }, c = l.left !== u.left, d = l.top !== u.top;
    (c || d) && r(), l = u, i = window.requestAnimationFrame(s);
  }(), () => window.cancelAnimationFrame(i);
};
function xs(t, r) {
  const l = el(t), i = E.useRef(0);
  return E.useEffect(() => () => window.clearTimeout(i.current), []), E.useCallback(() => {
    window.clearTimeout(i.current), i.current = window.setTimeout(l, r);
  }, [l, r]);
}
function aa(t, r) {
  const l = el(r);
  Zf(() => {
    let i = 0;
    if (t) {
      const s = new ResizeObserver(() => {
        cancelAnimationFrame(i), i = window.requestAnimationFrame(l);
      });
      return s.observe(t), () => {
        window.cancelAnimationFrame(i), s.unobserve(t);
      };
    }
  }, [t, l]);
}
function DC(t, r) {
  const { asChild: l, children: i } = t;
  if (!l) return typeof r == "function" ? r(i) : r;
  const s = E.Children.only(i);
  return E.cloneElement(s, {
    children: typeof r == "function" ? r(s.props.children) : r
  });
}
var Av = mv, NC = yv, OC = Sv;
const Tv = E.forwardRef(({ className: t, orientation: r = "vertical", ...l }, i) => /* @__PURE__ */ _.jsx(
  vd,
  {
    ref: i,
    className: at(
      "flex touch-none select-none transition-colors",
      r === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      r === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      t
    ),
    orientation: r,
    ...l,
    children: /* @__PURE__ */ _.jsx(wv, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Tv.displayName = vd.displayName;
const _v = E.forwardRef(({ className: t, children: r, ...l }, i) => /* @__PURE__ */ _.jsxs(
  Av,
  {
    ref: i,
    className: at("relative overflow-hidden", t),
    ...l,
    children: [
      /* @__PURE__ */ _.jsx(NC, { className: "h-full w-full flex rounded-[inherit]", children: r }),
      /* @__PURE__ */ _.jsx(Tv, {}),
      /* @__PURE__ */ _.jsx(OC, {})
    ]
  }
));
_v.displayName = Av.displayName;
const Rv = E.forwardRef(
  ({ className: t, value: r, maximized: l, ...i }, s) => {
    const u = E.useRef(null);
    return E.useEffect(() => {
      (() => {
        u.current && !l ? (u.current.style.height = "auto", u.current.style.height = `${u.current.scrollHeight}px`) : u.current && (u.current.style.height = "100vh");
      })();
    }, [r, l]), /* @__PURE__ */ _.jsx(
      "textarea",
      {
        ref: (c) => {
          u.current = c, typeof s == "function" ? s(c) : s && "current" in s && (s.current = c);
        },
        className: at(
          "flex w-full rounded-md bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          "transform rounded-[10px] bg-[#44464F] p-[12px] text-foreground",
          "font-roboto text-[#C5C6D0]",
          l ? "h-[100vh]" : "",
          "text-area resize-none leading-tight",
          t
        ),
        value: r,
        onInput: (c) => {
          l ? c.currentTarget.style.height = "100vh" : (c.currentTarget.style.height = "auto", c.currentTarget.style.height = `${c.currentTarget.scrollHeight}px`);
        },
        ...i
      }
    );
  }
);
Rv.displayName = "Textarea";
function MC() {
  return N0.useSyncExternalStore(
    zC,
    () => !0,
    () => !1
  );
}
function zC() {
  return () => {
  };
}
var Sd = "Avatar", [LC, vR] = dd(Sd), [jC, Dv] = LC(Sd), Nv = E.forwardRef(
  (t, r) => {
    const { __scopeAvatar: l, ...i } = t, [s, u] = E.useState("idle");
    return /* @__PURE__ */ _.jsx(
      jC,
      {
        scope: l,
        imageLoadingStatus: s,
        onImageLoadingStatusChange: u,
        children: /* @__PURE__ */ _.jsx(pn.span, { ...i, ref: r })
      }
    );
  }
);
Nv.displayName = Sd;
var Ov = "AvatarImage", Mv = E.forwardRef(
  (t, r) => {
    const { __scopeAvatar: l, src: i, onLoadingStatusChange: s = () => {
    }, ...u } = t, c = Dv(Ov, l), d = UC(i, u), m = la((h) => {
      s(h), c.onImageLoadingStatusChange(h);
    });
    return Nr(() => {
      d !== "idle" && m(d);
    }, [d, m]), d === "loaded" ? /* @__PURE__ */ _.jsx(pn.img, { ...u, ref: r, src: i }) : null;
  }
);
Mv.displayName = Ov;
var zv = "AvatarFallback", Lv = E.forwardRef(
  (t, r) => {
    const { __scopeAvatar: l, delayMs: i, ...s } = t, u = Dv(zv, l), [c, d] = E.useState(i === void 0);
    return E.useEffect(() => {
      if (i !== void 0) {
        const m = window.setTimeout(() => d(!0), i);
        return () => window.clearTimeout(m);
      }
    }, [i]), c && u.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ _.jsx(pn.span, { ...s, ref: r }) : null;
  }
);
Lv.displayName = zv;
function Ey(t, r) {
  return t ? r ? (t.src !== r && (t.src = r), t.complete && t.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function UC(t, { referrerPolicy: r, crossOrigin: l }) {
  const i = MC(), s = E.useRef(null), u = i ? (s.current || (s.current = new window.Image()), s.current) : null, [c, d] = E.useState(
    () => Ey(u, t)
  );
  return Nr(() => {
    d(Ey(u, t));
  }, [u, t]), Nr(() => {
    const m = (g) => () => {
      d(g);
    };
    if (!u) return;
    const h = m("loaded"), y = m("error");
    return u.addEventListener("load", h), u.addEventListener("error", y), r && (u.referrerPolicy = r), typeof l == "string" && (u.crossOrigin = l), () => {
      u.removeEventListener("load", h), u.removeEventListener("error", y);
    };
  }, [u, l, r]), c;
}
var jv = Nv, ws = Mv, Uv = Lv;
const Ss = E.forwardRef(({ className: t, ...r }, l) => /* @__PURE__ */ _.jsx(
  jv,
  {
    ref: l,
    className: at("relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full", t),
    ...r
  }
));
Ss.displayName = jv.displayName;
const Bv = E.forwardRef(({ className: t, ...r }, l) => /* @__PURE__ */ _.jsx(
  ws,
  {
    ref: l,
    className: at("aspect-square h-full w-full", t),
    ...r
  }
));
Bv.displayName = ws.displayName;
const BC = E.forwardRef(({ className: t, ...r }, l) => /* @__PURE__ */ _.jsx(
  ws,
  {
    ref: l,
    className: at("aspect-square h-full w-full", t),
    ...r
  }
));
BC.displayName = ws.displayName;
const Iv = E.forwardRef(({ className: t, ...r }, l) => /* @__PURE__ */ _.jsx(
  Uv,
  {
    ref: l,
    className: at("flex h-full w-full items-center justify-center rounded-full text-xs", t),
    ...r
  }
));
Iv.displayName = Uv.displayName;
function IC({ content: t, setting: r }) {
  var l;
  return /* @__PURE__ */ _.jsxs("div", { className: "flex w-full flex-col items-end justify-end gap-3", children: [
    /* @__PURE__ */ _.jsxs(Ss, { style: { background: "linear-gradient(37deg, #B0C6FF 13.27%, #D9E2FF 89.18%)" }, children: [
      /* @__PURE__ */ _.jsx(Bv, { alt: "user", src: (l = r == null ? void 0 : r.avatars) == null ? void 0 : l.user }),
      /* @__PURE__ */ _.jsx(Iv, { className: "text-foreground", children: "L1" })
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
function HC(t, r) {
  const l = {};
  return (t[t.length - 1] === "" ? [...t, ""] : t).join(
    (l.padRight ? " " : "") + "," + (l.padLeft === !1 ? "" : " ")
  ).trim();
}
const qC = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, VC = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, PC = {};
function ky(t, r) {
  return (PC.jsx ? VC : qC).test(t);
}
const YC = /[ \t\n\f\r]/g;
function FC(t) {
  return typeof t == "object" ? t.type === "text" ? Cy(t.value) : !1 : Cy(t);
}
function Cy(t) {
  return t.replace(YC, "") === "";
}
class Ti {
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
  constructor(r, l, i) {
    this.normal = l, this.property = r, i && (this.space = i);
  }
}
Ti.prototype.normal = {};
Ti.prototype.property = {};
Ti.prototype.space = void 0;
function Hv(t, r) {
  const l = {}, i = {};
  for (const s of t)
    Object.assign(l, s.property), Object.assign(i, s.normal);
  return new Ti(l, i, r);
}
function Kf(t) {
  return t.toLowerCase();
}
class Yt {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(r, l) {
    this.attribute = l, this.property = r;
  }
}
Yt.prototype.attribute = "";
Yt.prototype.booleanish = !1;
Yt.prototype.boolean = !1;
Yt.prototype.commaOrSpaceSeparated = !1;
Yt.prototype.commaSeparated = !1;
Yt.prototype.defined = !1;
Yt.prototype.mustUseProperty = !1;
Yt.prototype.number = !1;
Yt.prototype.overloadedBoolean = !1;
Yt.prototype.property = "";
Yt.prototype.spaceSeparated = !1;
Yt.prototype.space = void 0;
let GC = 0;
const Re = il(), ht = il(), Jf = il(), ae = il(), et = il(), na = il(), Wt = il();
function il() {
  return 2 ** ++GC;
}
const $f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: Re,
  booleanish: ht,
  commaOrSpaceSeparated: Wt,
  commaSeparated: na,
  number: ae,
  overloadedBoolean: Jf,
  spaceSeparated: et
}, Symbol.toStringTag, { value: "Module" })), hf = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys($f)
);
class Ed extends Yt {
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
  constructor(r, l, i, s) {
    let u = -1;
    if (super(r, l), Ay(this, "space", s), typeof i == "number")
      for (; ++u < hf.length; ) {
        const c = hf[u];
        Ay(this, hf[u], (i & $f[c]) === $f[c]);
      }
  }
}
Ed.prototype.defined = !0;
function Ay(t, r, l) {
  l && (t[r] = l);
}
function ua(t) {
  const r = {}, l = {};
  for (const [i, s] of Object.entries(t.properties)) {
    const u = new Ed(
      i,
      t.transform(t.attributes || {}, i),
      s,
      t.space
    );
    t.mustUseProperty && t.mustUseProperty.includes(i) && (u.mustUseProperty = !0), r[i] = u, l[Kf(i)] = i, l[Kf(u.attribute)] = i;
  }
  return new Ti(r, l, t.space);
}
const qv = ua({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ht,
    ariaAutoComplete: null,
    ariaBusy: ht,
    ariaChecked: ht,
    ariaColCount: ae,
    ariaColIndex: ae,
    ariaColSpan: ae,
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
    ariaLevel: ae,
    ariaLive: null,
    ariaModal: ht,
    ariaMultiLine: ht,
    ariaMultiSelectable: ht,
    ariaOrientation: null,
    ariaOwns: et,
    ariaPlaceholder: null,
    ariaPosInSet: ae,
    ariaPressed: ht,
    ariaReadOnly: ht,
    ariaRelevant: null,
    ariaRequired: ht,
    ariaRoleDescription: et,
    ariaRowCount: ae,
    ariaRowIndex: ae,
    ariaRowSpan: ae,
    ariaSelected: ht,
    ariaSetSize: ae,
    ariaSort: null,
    ariaValueMax: ae,
    ariaValueMin: ae,
    ariaValueNow: ae,
    ariaValueText: null,
    role: null
  },
  transform(t, r) {
    return r === "role" ? r : "aria-" + r.slice(4).toLowerCase();
  }
});
function Vv(t, r) {
  return r in t ? t[r] : r;
}
function Pv(t, r) {
  return Vv(t, r.toLowerCase());
}
const XC = ua({
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
    accept: na,
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
    cols: ae,
    colSpan: null,
    content: null,
    contentEditable: ht,
    controls: Re,
    controlsList: et,
    coords: ae | na,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: Re,
    defer: Re,
    dir: null,
    dirName: null,
    disabled: Re,
    download: Jf,
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
    height: ae,
    hidden: Jf,
    high: ae,
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
    low: ae,
    manifest: null,
    max: null,
    maxLength: ae,
    media: null,
    method: null,
    min: null,
    minLength: ae,
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
    optimum: ae,
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
    rows: ae,
    rowSpan: ae,
    sandbox: et,
    scope: null,
    scoped: Re,
    seamless: Re,
    selected: Re,
    shadowRootClonable: Re,
    shadowRootDelegatesFocus: Re,
    shadowRootMode: null,
    shape: null,
    size: ae,
    sizes: null,
    slot: null,
    span: ae,
    spellCheck: ht,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: ae,
    step: null,
    style: null,
    tabIndex: ae,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: Re,
    useMap: null,
    value: ht,
    width: ae,
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
    border: ae,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: ae,
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
    hSpace: ae,
    // `<img>` and `<object>`
    leftMargin: ae,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: ae,
    // `<body>`
    marginWidth: ae,
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
    rightMargin: ae,
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
    topMargin: ae,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: ae,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: Re,
    disableRemotePlayback: Re,
    prefix: null,
    property: null,
    results: ae,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Pv
}), QC = ua({
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
    about: Wt,
    accentHeight: ae,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: ae,
    amplitude: ae,
    arabicForm: null,
    ascent: ae,
    attributeName: null,
    attributeType: null,
    azimuth: ae,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: ae,
    by: null,
    calcMode: null,
    capHeight: ae,
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
    descent: ae,
    diffuseConstant: ae,
    direction: null,
    display: null,
    dur: null,
    divisor: ae,
    dominantBaseline: null,
    download: Re,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: ae,
    enableBackground: null,
    end: null,
    event: null,
    exponent: ae,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: ae,
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
    g1: na,
    g2: na,
    glyphName: na,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: ae,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: ae,
    horizOriginX: ae,
    horizOriginY: ae,
    id: null,
    ideographic: ae,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: ae,
    k: ae,
    k1: ae,
    k2: ae,
    k3: ae,
    k4: ae,
    kernelMatrix: Wt,
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
    limitingConeAngle: ae,
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
    mediaSize: ae,
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
    overlinePosition: ae,
    overlineThickness: ae,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: ae,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: et,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: ae,
    pointsAtY: ae,
    pointsAtZ: ae,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Wt,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Wt,
    rev: Wt,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Wt,
    requiredFeatures: Wt,
    requiredFonts: Wt,
    requiredFormats: Wt,
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
    specularConstant: ae,
    specularExponent: ae,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: ae,
    strikethroughThickness: ae,
    string: null,
    stroke: null,
    strokeDashArray: Wt,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: ae,
    strokeOpacity: ae,
    strokeWidth: null,
    style: null,
    surfaceScale: ae,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Wt,
    tabIndex: ae,
    tableValues: null,
    target: null,
    targetX: ae,
    targetY: ae,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Wt,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: ae,
    underlineThickness: ae,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: ae,
    values: null,
    vAlphabetic: ae,
    vMathematical: ae,
    vectorEffect: null,
    vHanging: ae,
    vIdeographic: ae,
    version: null,
    vertAdvY: ae,
    vertOriginX: ae,
    vertOriginY: ae,
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
    xHeight: ae,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Vv
}), Yv = ua({
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
}), Fv = ua({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Pv
}), Gv = ua({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(t, r) {
    return "xml:" + r.slice(3).toLowerCase();
  }
}), ZC = {
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
}, KC = /[A-Z]/g, Ty = /-[a-z]/g, JC = /^data[-\w.:]+$/i;
function $C(t, r) {
  const l = Kf(r);
  let i = r, s = Yt;
  if (l in t.normal)
    return t.property[t.normal[l]];
  if (l.length > 4 && l.slice(0, 4) === "data" && JC.test(r)) {
    if (r.charAt(4) === "-") {
      const u = r.slice(5).replace(Ty, e4);
      i = "data" + u.charAt(0).toUpperCase() + u.slice(1);
    } else {
      const u = r.slice(4);
      if (!Ty.test(u)) {
        let c = u.replace(KC, WC);
        c.charAt(0) !== "-" && (c = "-" + c), r = "data" + c;
      }
    }
    s = Ed;
  }
  return new s(i, r);
}
function WC(t) {
  return "-" + t.toLowerCase();
}
function e4(t) {
  return t.charAt(1).toUpperCase();
}
const t4 = Hv([qv, XC, Yv, Fv, Gv], "html"), kd = Hv([qv, QC, Yv, Fv, Gv], "svg");
function n4(t) {
  return t.join(" ").trim();
}
var Kl = {}, pf, _y;
function r4() {
  if (_y) return pf;
  _y = 1;
  var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, l = /^\s*/, i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, s = /^:\s*/, u = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, d = /^\s+|\s+$/g, m = `
`, h = "/", y = "*", g = "", b = "comment", v = "declaration";
  pf = function(C, N) {
    if (typeof C != "string")
      throw new TypeError("First argument must be a string");
    if (!C) return [];
    N = N || {};
    var T = 1, I = 1;
    function j(oe) {
      var ne = oe.match(r);
      ne && (T += ne.length);
      var ie = oe.lastIndexOf(m);
      I = ~ie ? oe.length - ie : I + oe.length;
    }
    function Q() {
      var oe = { line: T, column: I };
      return function(ne) {
        return ne.position = new H(oe), V(), ne;
      };
    }
    function H(oe) {
      this.start = oe, this.end = { line: T, column: I }, this.source = N.source;
    }
    H.prototype.content = C;
    function R(oe) {
      var ne = new Error(
        N.source + ":" + T + ":" + I + ": " + oe
      );
      if (ne.reason = oe, ne.filename = N.source, ne.line = T, ne.column = I, ne.source = C, !N.silent) throw ne;
    }
    function F(oe) {
      var ne = oe.exec(C);
      if (ne) {
        var ie = ne[0];
        return j(ie), C = C.slice(ie.length), ne;
      }
    }
    function V() {
      F(l);
    }
    function Z(oe) {
      var ne;
      for (oe = oe || []; ne = M(); )
        ne !== !1 && oe.push(ne);
      return oe;
    }
    function M() {
      var oe = Q();
      if (!(h != C.charAt(0) || y != C.charAt(1))) {
        for (var ne = 2; g != C.charAt(ne) && (y != C.charAt(ne) || h != C.charAt(ne + 1)); )
          ++ne;
        if (ne += 2, g === C.charAt(ne - 1))
          return R("End of comment missing");
        var ie = C.slice(2, ne - 2);
        return I += 2, j(ie), C = C.slice(ne), I += 2, oe({
          type: b,
          comment: ie
        });
      }
    }
    function re() {
      var oe = Q(), ne = F(i);
      if (ne) {
        if (M(), !F(s)) return R("property missing ':'");
        var ie = F(u), B = oe({
          type: v,
          property: A(ne[0].replace(t, g)),
          value: ie ? A(ie[0].replace(t, g)) : g
        });
        return F(c), B;
      }
    }
    function te() {
      var oe = [];
      Z(oe);
      for (var ne; ne = re(); )
        ne !== !1 && (oe.push(ne), Z(oe));
      return oe;
    }
    return V(), te();
  };
  function A(C) {
    return C ? C.replace(d, g) : g;
  }
  return pf;
}
var Ry;
function l4() {
  if (Ry) return Kl;
  Ry = 1;
  var t = Kl && Kl.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(Kl, "__esModule", { value: !0 }), Kl.default = l;
  var r = t(r4());
  function l(i, s) {
    var u = null;
    if (!i || typeof i != "string")
      return u;
    var c = (0, r.default)(i), d = typeof s == "function";
    return c.forEach(function(m) {
      if (m.type === "declaration") {
        var h = m.property, y = m.value;
        d ? s(h, y, m) : y && (u = u || {}, u[h] = y);
      }
    }), u;
  }
  return Kl;
}
var ui = {}, Dy;
function a4() {
  if (Dy) return ui;
  Dy = 1, Object.defineProperty(ui, "__esModule", { value: !0 }), ui.camelCase = void 0;
  var t = /^--[a-zA-Z0-9_-]+$/, r = /-([a-z])/g, l = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, s = /^-(ms)-/, u = function(h) {
    return !h || l.test(h) || t.test(h);
  }, c = function(h, y) {
    return y.toUpperCase();
  }, d = function(h, y) {
    return "".concat(y, "-");
  }, m = function(h, y) {
    return y === void 0 && (y = {}), u(h) ? h : (h = h.toLowerCase(), y.reactCompat ? h = h.replace(s, d) : h = h.replace(i, d), h.replace(r, c));
  };
  return ui.camelCase = m, ui;
}
var ci, Ny;
function i4() {
  if (Ny) return ci;
  Ny = 1;
  var t = ci && ci.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  }, r = t(l4()), l = a4();
  function i(s, u) {
    var c = {};
    return !s || typeof s != "string" || (0, r.default)(s, function(d, m) {
      d && m && (c[(0, l.camelCase)(d, u)] = m);
    }), c;
  }
  return i.default = i, ci = i, ci;
}
var o4 = i4();
const s4 = /* @__PURE__ */ ll(o4), Xv = Qv("end"), Cd = Qv("start");
function Qv(t) {
  return r;
  function r(l) {
    const i = l && l.position && l.position[t] || {};
    if (typeof i.line == "number" && i.line > 0 && typeof i.column == "number" && i.column > 0)
      return {
        line: i.line,
        column: i.column,
        offset: typeof i.offset == "number" && i.offset > -1 ? i.offset : void 0
      };
  }
}
function u4(t) {
  const r = Cd(t), l = Xv(t);
  if (r && l)
    return { start: r, end: l };
}
function hi(t) {
  return !t || typeof t != "object" ? "" : "position" in t || "type" in t ? Oy(t.position) : "start" in t || "end" in t ? Oy(t) : "line" in t || "column" in t ? Wf(t) : "";
}
function Wf(t) {
  return My(t && t.line) + ":" + My(t && t.column);
}
function Oy(t) {
  return Wf(t && t.start) + "-" + Wf(t && t.end);
}
function My(t) {
  return t && typeof t == "number" ? t : 1;
}
class Mt extends Error {
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
  constructor(r, l, i) {
    super(), typeof l == "string" && (i = l, l = void 0);
    let s = "", u = {}, c = !1;
    if (l && ("line" in l && "column" in l ? u = { place: l } : "start" in l && "end" in l ? u = { place: l } : "type" in l ? u = {
      ancestors: [l],
      place: l.position
    } : u = { ...l }), typeof r == "string" ? s = r : !u.cause && r && (c = !0, s = r.message, u.cause = r), !u.ruleId && !u.source && typeof i == "string") {
      const m = i.indexOf(":");
      m === -1 ? u.ruleId = i : (u.source = i.slice(0, m), u.ruleId = i.slice(m + 1));
    }
    if (!u.place && u.ancestors && u.ancestors) {
      const m = u.ancestors[u.ancestors.length - 1];
      m && (u.place = m.position);
    }
    const d = u.place && "start" in u.place ? u.place.start : u.place;
    this.ancestors = u.ancestors || void 0, this.cause = u.cause || void 0, this.column = d ? d.column : void 0, this.fatal = void 0, this.file, this.message = s, this.line = d ? d.line : void 0, this.name = hi(u.place) || "1:1", this.place = u.place || void 0, this.reason = this.message, this.ruleId = u.ruleId || void 0, this.source = u.source || void 0, this.stack = c && u.cause && typeof u.cause.stack == "string" ? u.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
Mt.prototype.file = "";
Mt.prototype.name = "";
Mt.prototype.reason = "";
Mt.prototype.message = "";
Mt.prototype.stack = "";
Mt.prototype.column = void 0;
Mt.prototype.line = void 0;
Mt.prototype.ancestors = void 0;
Mt.prototype.cause = void 0;
Mt.prototype.fatal = void 0;
Mt.prototype.place = void 0;
Mt.prototype.ruleId = void 0;
Mt.prototype.source = void 0;
const Ad = {}.hasOwnProperty, c4 = /* @__PURE__ */ new Map(), f4 = /[A-Z]/g, d4 = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), h4 = /* @__PURE__ */ new Set(["td", "th"]), Zv = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function p4(t, r) {
  if (!r || r.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const l = r.filePath || void 0;
  let i;
  if (r.development) {
    if (typeof r.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    i = S4(l, r.jsxDEV);
  } else {
    if (typeof r.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof r.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    i = w4(l, r.jsx, r.jsxs);
  }
  const s = {
    Fragment: r.Fragment,
    ancestors: [],
    components: r.components || {},
    create: i,
    elementAttributeNameCase: r.elementAttributeNameCase || "react",
    evaluater: r.createEvaluater ? r.createEvaluater() : void 0,
    filePath: l,
    ignoreInvalidStyle: r.ignoreInvalidStyle || !1,
    passKeys: r.passKeys !== !1,
    passNode: r.passNode || !1,
    schema: r.space === "svg" ? kd : t4,
    stylePropertyNameCase: r.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: r.tableCellAlignToStyle !== !1
  }, u = Kv(s, t, void 0);
  return u && typeof u != "string" ? u : s.create(
    t,
    s.Fragment,
    { children: u || void 0 },
    void 0
  );
}
function Kv(t, r, l) {
  if (r.type === "element")
    return m4(t, r, l);
  if (r.type === "mdxFlowExpression" || r.type === "mdxTextExpression")
    return g4(t, r);
  if (r.type === "mdxJsxFlowElement" || r.type === "mdxJsxTextElement")
    return b4(t, r, l);
  if (r.type === "mdxjsEsm")
    return y4(t, r);
  if (r.type === "root")
    return v4(t, r, l);
  if (r.type === "text")
    return x4(t, r);
}
function m4(t, r, l) {
  const i = t.schema;
  let s = i;
  r.tagName.toLowerCase() === "svg" && i.space === "html" && (s = kd, t.schema = s), t.ancestors.push(r);
  const u = $v(t, r.tagName, !1), c = E4(t, r);
  let d = _d(t, r);
  return d4.has(r.tagName) && (d = d.filter(function(m) {
    return typeof m == "string" ? !FC(m) : !0;
  })), Jv(t, c, u, r), Td(c, d), t.ancestors.pop(), t.schema = i, t.create(r, u, c, l);
}
function g4(t, r) {
  if (r.data && r.data.estree && t.evaluater) {
    const i = r.data.estree.body[0];
    return i.type, /** @type {Child | undefined} */
    t.evaluater.evaluateExpression(i.expression);
  }
  Si(t, r.position);
}
function y4(t, r) {
  if (r.data && r.data.estree && t.evaluater)
    return (
      /** @type {Child | undefined} */
      t.evaluater.evaluateProgram(r.data.estree)
    );
  Si(t, r.position);
}
function b4(t, r, l) {
  const i = t.schema;
  let s = i;
  r.name === "svg" && i.space === "html" && (s = kd, t.schema = s), t.ancestors.push(r);
  const u = r.name === null ? t.Fragment : $v(t, r.name, !0), c = k4(t, r), d = _d(t, r);
  return Jv(t, c, u, r), Td(c, d), t.ancestors.pop(), t.schema = i, t.create(r, u, c, l);
}
function v4(t, r, l) {
  const i = {};
  return Td(i, _d(t, r)), t.create(r, t.Fragment, i, l);
}
function x4(t, r) {
  return r.value;
}
function Jv(t, r, l, i) {
  typeof l != "string" && l !== t.Fragment && t.passNode && (r.node = i);
}
function Td(t, r) {
  if (r.length > 0) {
    const l = r.length > 1 ? r : r[0];
    l && (t.children = l);
  }
}
function w4(t, r, l) {
  return i;
  function i(s, u, c, d) {
    const h = Array.isArray(c.children) ? l : r;
    return d ? h(u, c, d) : h(u, c);
  }
}
function S4(t, r) {
  return l;
  function l(i, s, u, c) {
    const d = Array.isArray(u.children), m = Cd(i);
    return r(
      s,
      u,
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
function E4(t, r) {
  const l = {};
  let i, s;
  for (s in r.properties)
    if (s !== "children" && Ad.call(r.properties, s)) {
      const u = C4(t, s, r.properties[s]);
      if (u) {
        const [c, d] = u;
        t.tableCellAlignToStyle && c === "align" && typeof d == "string" && h4.has(r.tagName) ? i = d : l[c] = d;
      }
    }
  if (i) {
    const u = (
      /** @type {Style} */
      l.style || (l.style = {})
    );
    u[t.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = i;
  }
  return l;
}
function k4(t, r) {
  const l = {};
  for (const i of r.attributes)
    if (i.type === "mdxJsxExpressionAttribute")
      if (i.data && i.data.estree && t.evaluater) {
        const u = i.data.estree.body[0];
        u.type;
        const c = u.expression;
        c.type;
        const d = c.properties[0];
        d.type, Object.assign(
          l,
          t.evaluater.evaluateExpression(d.argument)
        );
      } else
        Si(t, r.position);
    else {
      const s = i.name;
      let u;
      if (i.value && typeof i.value == "object")
        if (i.value.data && i.value.data.estree && t.evaluater) {
          const d = i.value.data.estree.body[0];
          d.type, u = t.evaluater.evaluateExpression(d.expression);
        } else
          Si(t, r.position);
      else
        u = i.value === null ? !0 : i.value;
      l[s] = /** @type {Props[keyof Props]} */
      u;
    }
  return l;
}
function _d(t, r) {
  const l = [];
  let i = -1;
  const s = t.passKeys ? /* @__PURE__ */ new Map() : c4;
  for (; ++i < r.children.length; ) {
    const u = r.children[i];
    let c;
    if (t.passKeys) {
      const m = u.type === "element" ? u.tagName : u.type === "mdxJsxFlowElement" || u.type === "mdxJsxTextElement" ? u.name : void 0;
      if (m) {
        const h = s.get(m) || 0;
        c = m + "-" + h, s.set(m, h + 1);
      }
    }
    const d = Kv(t, u, c);
    d !== void 0 && l.push(d);
  }
  return l;
}
function C4(t, r, l) {
  const i = $C(t.schema, r);
  if (!(l == null || typeof l == "number" && Number.isNaN(l))) {
    if (Array.isArray(l) && (l = i.commaSeparated ? HC(l) : n4(l)), i.property === "style") {
      let s = typeof l == "object" ? l : A4(t, String(l));
      return t.stylePropertyNameCase === "css" && (s = T4(s)), ["style", s];
    }
    return [
      t.elementAttributeNameCase === "react" && i.space ? ZC[i.property] || i.property : i.attribute,
      l
    ];
  }
}
function A4(t, r) {
  try {
    return s4(r, { reactCompat: !0 });
  } catch (l) {
    if (t.ignoreInvalidStyle)
      return {};
    const i = (
      /** @type {Error} */
      l
    ), s = new Mt("Cannot parse `style` attribute", {
      ancestors: t.ancestors,
      cause: i,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw s.file = t.filePath || void 0, s.url = Zv + "#cannot-parse-style-attribute", s;
  }
}
function $v(t, r, l) {
  let i;
  if (!l)
    i = { type: "Literal", value: r };
  else if (r.includes(".")) {
    const s = r.split(".");
    let u = -1, c;
    for (; ++u < s.length; ) {
      const d = ky(s[u]) ? { type: "Identifier", name: s[u] } : { type: "Literal", value: s[u] };
      c = c ? {
        type: "MemberExpression",
        object: c,
        property: d,
        computed: !!(u && d.type === "Literal"),
        optional: !1
      } : d;
    }
    i = c;
  } else
    i = ky(r) && !/^[a-z]/.test(r) ? { type: "Identifier", name: r } : { type: "Literal", value: r };
  if (i.type === "Literal") {
    const s = (
      /** @type {string | number} */
      i.value
    );
    return Ad.call(t.components, s) ? t.components[s] : s;
  }
  if (t.evaluater)
    return t.evaluater.evaluateExpression(i);
  Si(t);
}
function Si(t, r) {
  const l = new Mt(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: t.ancestors,
      place: r,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw l.file = t.filePath || void 0, l.url = Zv + "#cannot-handle-mdx-estrees-without-createevaluater", l;
}
function T4(t) {
  const r = {};
  let l;
  for (l in t)
    Ad.call(t, l) && (r[_4(l)] = t[l]);
  return r;
}
function _4(t) {
  let r = t.replace(f4, R4);
  return r.slice(0, 3) === "ms-" && (r = "-" + r), r;
}
function R4(t) {
  return "-" + t.toLowerCase();
}
const mf = {
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
}, D4 = {};
function Rd(t, r) {
  const l = D4, i = typeof l.includeImageAlt == "boolean" ? l.includeImageAlt : !0, s = typeof l.includeHtml == "boolean" ? l.includeHtml : !0;
  return Wv(t, i, s);
}
function Wv(t, r, l) {
  if (N4(t)) {
    if ("value" in t)
      return t.type === "html" && !l ? "" : t.value;
    if (r && "alt" in t && t.alt)
      return t.alt;
    if ("children" in t)
      return zy(t.children, r, l);
  }
  return Array.isArray(t) ? zy(t, r, l) : "";
}
function zy(t, r, l) {
  const i = [];
  let s = -1;
  for (; ++s < t.length; )
    i[s] = Wv(t[s], r, l);
  return i.join("");
}
function N4(t) {
  return !!(t && typeof t == "object");
}
const Ly = document.createElement("i");
function Dd(t) {
  const r = "&" + t + ";";
  Ly.innerHTML = r;
  const l = Ly.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    l.charCodeAt(l.length - 1) === 59 && t !== "semi" || l === r ? !1 : l
  );
}
function en(t, r, l, i) {
  const s = t.length;
  let u = 0, c;
  if (r < 0 ? r = -r > s ? 0 : s + r : r = r > s ? s : r, l = l > 0 ? l : 0, i.length < 1e4)
    c = Array.from(i), c.unshift(r, l), t.splice(...c);
  else
    for (l && t.splice(r, l); u < i.length; )
      c = i.slice(u, u + 1e4), c.unshift(r, 0), t.splice(...c), u += 1e4, r += 1e4;
}
function hn(t, r) {
  return t.length > 0 ? (en(t, t.length, 0, r), t) : r;
}
const jy = {}.hasOwnProperty;
function e1(t) {
  const r = {};
  let l = -1;
  for (; ++l < t.length; )
    O4(r, t[l]);
  return r;
}
function O4(t, r) {
  let l;
  for (l in r) {
    const s = (jy.call(t, l) ? t[l] : void 0) || (t[l] = {}), u = r[l];
    let c;
    if (u)
      for (c in u) {
        jy.call(s, c) || (s[c] = []);
        const d = u[c];
        M4(
          // @ts-expect-error Looks like a list.
          s[c],
          Array.isArray(d) ? d : d ? [d] : []
        );
      }
  }
}
function M4(t, r) {
  let l = -1;
  const i = [];
  for (; ++l < r.length; )
    (r[l].add === "after" ? t : i).push(r[l]);
  en(t, 0, 0, i);
}
function t1(t, r) {
  const l = Number.parseInt(t, r);
  return (
    // C0 except for HT, LF, FF, CR, space.
    l < 9 || l === 11 || l > 13 && l < 32 || // Control character (DEL) of C0, and C1 controls.
    l > 126 && l < 160 || // Lone high surrogates and low surrogates.
    l > 55295 && l < 57344 || // Noncharacters.
    l > 64975 && l < 65008 || /* eslint-disable no-bitwise */
    (l & 65535) === 65535 || (l & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    l > 1114111 ? "�" : String.fromCodePoint(l)
  );
}
function xn(t) {
  return t.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const jt = Mr(/[A-Za-z]/), Ot = Mr(/[\dA-Za-z]/), z4 = Mr(/[#-'*+\--9=?A-Z^-~]/);
function cs(t) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    t !== null && (t < 32 || t === 127)
  );
}
const ed = Mr(/\d/), L4 = Mr(/[\dA-Fa-f]/), j4 = Mr(/[!-/:-@[-`{-~]/);
function be(t) {
  return t !== null && t < -2;
}
function $e(t) {
  return t !== null && (t < 0 || t === 32);
}
function je(t) {
  return t === -2 || t === -1 || t === 32;
}
const Es = Mr(new RegExp("\\p{P}|\\p{S}", "u")), rl = Mr(/\s/);
function Mr(t) {
  return r;
  function r(l) {
    return l !== null && l > -1 && t.test(String.fromCharCode(l));
  }
}
function ca(t) {
  const r = [];
  let l = -1, i = 0, s = 0;
  for (; ++l < t.length; ) {
    const u = t.charCodeAt(l);
    let c = "";
    if (u === 37 && Ot(t.charCodeAt(l + 1)) && Ot(t.charCodeAt(l + 2)))
      s = 2;
    else if (u < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u)) || (c = String.fromCharCode(u));
    else if (u > 55295 && u < 57344) {
      const d = t.charCodeAt(l + 1);
      u < 56320 && d > 56319 && d < 57344 ? (c = String.fromCharCode(u, d), s = 1) : c = "�";
    } else
      c = String.fromCharCode(u);
    c && (r.push(t.slice(i, l), encodeURIComponent(c)), i = l + s + 1, c = ""), s && (l += s, s = 0);
  }
  return r.join("") + t.slice(i);
}
function Be(t, r, l, i) {
  const s = i ? i - 1 : Number.POSITIVE_INFINITY;
  let u = 0;
  return c;
  function c(m) {
    return je(m) ? (t.enter(l), d(m)) : r(m);
  }
  function d(m) {
    return je(m) && u++ < s ? (t.consume(m), d) : (t.exit(l), r(m));
  }
}
const U4 = {
  tokenize: B4
};
function B4(t) {
  const r = t.attempt(this.parser.constructs.contentInitial, i, s);
  let l;
  return r;
  function i(d) {
    if (d === null) {
      t.consume(d);
      return;
    }
    return t.enter("lineEnding"), t.consume(d), t.exit("lineEnding"), Be(t, r, "linePrefix");
  }
  function s(d) {
    return t.enter("paragraph"), u(d);
  }
  function u(d) {
    const m = t.enter("chunkText", {
      contentType: "text",
      previous: l
    });
    return l && (l.next = m), l = m, c(d);
  }
  function c(d) {
    if (d === null) {
      t.exit("chunkText"), t.exit("paragraph"), t.consume(d);
      return;
    }
    return be(d) ? (t.consume(d), t.exit("chunkText"), u) : (t.consume(d), c);
  }
}
const I4 = {
  tokenize: H4
}, Uy = {
  tokenize: q4
};
function H4(t) {
  const r = this, l = [];
  let i = 0, s, u, c;
  return d;
  function d(j) {
    if (i < l.length) {
      const Q = l[i];
      return r.containerState = Q[1], t.attempt(Q[0].continuation, m, h)(j);
    }
    return h(j);
  }
  function m(j) {
    if (i++, r.containerState._closeFlow) {
      r.containerState._closeFlow = void 0, s && I();
      const Q = r.events.length;
      let H = Q, R;
      for (; H--; )
        if (r.events[H][0] === "exit" && r.events[H][1].type === "chunkFlow") {
          R = r.events[H][1].end;
          break;
        }
      T(i);
      let F = Q;
      for (; F < r.events.length; )
        r.events[F][1].end = {
          ...R
        }, F++;
      return en(r.events, H + 1, 0, r.events.slice(Q)), r.events.length = F, h(j);
    }
    return d(j);
  }
  function h(j) {
    if (i === l.length) {
      if (!s)
        return b(j);
      if (s.currentConstruct && s.currentConstruct.concrete)
        return A(j);
      r.interrupt = !!(s.currentConstruct && !s._gfmTableDynamicInterruptHack);
    }
    return r.containerState = {}, t.check(Uy, y, g)(j);
  }
  function y(j) {
    return s && I(), T(i), b(j);
  }
  function g(j) {
    return r.parser.lazy[r.now().line] = i !== l.length, c = r.now().offset, A(j);
  }
  function b(j) {
    return r.containerState = {}, t.attempt(Uy, v, A)(j);
  }
  function v(j) {
    return i++, l.push([r.currentConstruct, r.containerState]), b(j);
  }
  function A(j) {
    if (j === null) {
      s && I(), T(0), t.consume(j);
      return;
    }
    return s = s || r.parser.flow(r.now()), t.enter("chunkFlow", {
      _tokenizer: s,
      contentType: "flow",
      previous: u
    }), C(j);
  }
  function C(j) {
    if (j === null) {
      N(t.exit("chunkFlow"), !0), T(0), t.consume(j);
      return;
    }
    return be(j) ? (t.consume(j), N(t.exit("chunkFlow")), i = 0, r.interrupt = void 0, d) : (t.consume(j), C);
  }
  function N(j, Q) {
    const H = r.sliceStream(j);
    if (Q && H.push(null), j.previous = u, u && (u.next = j), u = j, s.defineSkip(j.start), s.write(H), r.parser.lazy[j.start.line]) {
      let R = s.events.length;
      for (; R--; )
        if (
          // The token starts before the line ending…
          s.events[R][1].start.offset < c && // …and either is not ended yet…
          (!s.events[R][1].end || // …or ends after it.
          s.events[R][1].end.offset > c)
        )
          return;
      const F = r.events.length;
      let V = F, Z, M;
      for (; V--; )
        if (r.events[V][0] === "exit" && r.events[V][1].type === "chunkFlow") {
          if (Z) {
            M = r.events[V][1].end;
            break;
          }
          Z = !0;
        }
      for (T(i), R = F; R < r.events.length; )
        r.events[R][1].end = {
          ...M
        }, R++;
      en(r.events, V + 1, 0, r.events.slice(F)), r.events.length = R;
    }
  }
  function T(j) {
    let Q = l.length;
    for (; Q-- > j; ) {
      const H = l[Q];
      r.containerState = H[1], H[0].exit.call(r, t);
    }
    l.length = j;
  }
  function I() {
    s.write([null]), u = void 0, s = void 0, r.containerState._closeFlow = void 0;
  }
}
function q4(t, r, l) {
  return Be(t, t.attempt(this.parser.constructs.document, r, l), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function ia(t) {
  if (t === null || $e(t) || rl(t))
    return 1;
  if (Es(t))
    return 2;
}
function ks(t, r, l) {
  const i = [];
  let s = -1;
  for (; ++s < t.length; ) {
    const u = t[s].resolveAll;
    u && !i.includes(u) && (r = u(r, l), i.push(u));
  }
  return r;
}
const td = {
  name: "attention",
  resolveAll: V4,
  tokenize: P4
};
function V4(t, r) {
  let l = -1, i, s, u, c, d, m, h, y;
  for (; ++l < t.length; )
    if (t[l][0] === "enter" && t[l][1].type === "attentionSequence" && t[l][1]._close) {
      for (i = l; i--; )
        if (t[i][0] === "exit" && t[i][1].type === "attentionSequence" && t[i][1]._open && // If the markers are the same:
        r.sliceSerialize(t[i][1]).charCodeAt(0) === r.sliceSerialize(t[l][1]).charCodeAt(0)) {
          if ((t[i][1]._close || t[l][1]._open) && (t[l][1].end.offset - t[l][1].start.offset) % 3 && !((t[i][1].end.offset - t[i][1].start.offset + t[l][1].end.offset - t[l][1].start.offset) % 3))
            continue;
          m = t[i][1].end.offset - t[i][1].start.offset > 1 && t[l][1].end.offset - t[l][1].start.offset > 1 ? 2 : 1;
          const g = {
            ...t[i][1].end
          }, b = {
            ...t[l][1].start
          };
          By(g, -m), By(b, m), c = {
            type: m > 1 ? "strongSequence" : "emphasisSequence",
            start: g,
            end: {
              ...t[i][1].end
            }
          }, d = {
            type: m > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...t[l][1].start
            },
            end: b
          }, u = {
            type: m > 1 ? "strongText" : "emphasisText",
            start: {
              ...t[i][1].end
            },
            end: {
              ...t[l][1].start
            }
          }, s = {
            type: m > 1 ? "strong" : "emphasis",
            start: {
              ...c.start
            },
            end: {
              ...d.end
            }
          }, t[i][1].end = {
            ...c.start
          }, t[l][1].start = {
            ...d.end
          }, h = [], t[i][1].end.offset - t[i][1].start.offset && (h = hn(h, [["enter", t[i][1], r], ["exit", t[i][1], r]])), h = hn(h, [["enter", s, r], ["enter", c, r], ["exit", c, r], ["enter", u, r]]), h = hn(h, ks(r.parser.constructs.insideSpan.null, t.slice(i + 1, l), r)), h = hn(h, [["exit", u, r], ["enter", d, r], ["exit", d, r], ["exit", s, r]]), t[l][1].end.offset - t[l][1].start.offset ? (y = 2, h = hn(h, [["enter", t[l][1], r], ["exit", t[l][1], r]])) : y = 0, en(t, i - 1, l - i + 3, h), l = i + h.length - y - 2;
          break;
        }
    }
  for (l = -1; ++l < t.length; )
    t[l][1].type === "attentionSequence" && (t[l][1].type = "data");
  return t;
}
function P4(t, r) {
  const l = this.parser.constructs.attentionMarkers.null, i = this.previous, s = ia(i);
  let u;
  return c;
  function c(m) {
    return u = m, t.enter("attentionSequence"), d(m);
  }
  function d(m) {
    if (m === u)
      return t.consume(m), d;
    const h = t.exit("attentionSequence"), y = ia(m), g = !y || y === 2 && s || l.includes(m), b = !s || s === 2 && y || l.includes(i);
    return h._open = !!(u === 42 ? g : g && (s || !b)), h._close = !!(u === 42 ? b : b && (y || !g)), r(m);
  }
}
function By(t, r) {
  t.column += r, t.offset += r, t._bufferIndex += r;
}
const Y4 = {
  name: "autolink",
  tokenize: F4
};
function F4(t, r, l) {
  let i = 0;
  return s;
  function s(v) {
    return t.enter("autolink"), t.enter("autolinkMarker"), t.consume(v), t.exit("autolinkMarker"), t.enter("autolinkProtocol"), u;
  }
  function u(v) {
    return jt(v) ? (t.consume(v), c) : v === 64 ? l(v) : h(v);
  }
  function c(v) {
    return v === 43 || v === 45 || v === 46 || Ot(v) ? (i = 1, d(v)) : h(v);
  }
  function d(v) {
    return v === 58 ? (t.consume(v), i = 0, m) : (v === 43 || v === 45 || v === 46 || Ot(v)) && i++ < 32 ? (t.consume(v), d) : (i = 0, h(v));
  }
  function m(v) {
    return v === 62 ? (t.exit("autolinkProtocol"), t.enter("autolinkMarker"), t.consume(v), t.exit("autolinkMarker"), t.exit("autolink"), r) : v === null || v === 32 || v === 60 || cs(v) ? l(v) : (t.consume(v), m);
  }
  function h(v) {
    return v === 64 ? (t.consume(v), y) : z4(v) ? (t.consume(v), h) : l(v);
  }
  function y(v) {
    return Ot(v) ? g(v) : l(v);
  }
  function g(v) {
    return v === 46 ? (t.consume(v), i = 0, y) : v === 62 ? (t.exit("autolinkProtocol").type = "autolinkEmail", t.enter("autolinkMarker"), t.consume(v), t.exit("autolinkMarker"), t.exit("autolink"), r) : b(v);
  }
  function b(v) {
    if ((v === 45 || Ot(v)) && i++ < 63) {
      const A = v === 45 ? b : g;
      return t.consume(v), A;
    }
    return l(v);
  }
}
const _i = {
  partial: !0,
  tokenize: G4
};
function G4(t, r, l) {
  return i;
  function i(u) {
    return je(u) ? Be(t, s, "linePrefix")(u) : s(u);
  }
  function s(u) {
    return u === null || be(u) ? r(u) : l(u);
  }
}
const n1 = {
  continuation: {
    tokenize: Q4
  },
  exit: Z4,
  name: "blockQuote",
  tokenize: X4
};
function X4(t, r, l) {
  const i = this;
  return s;
  function s(c) {
    if (c === 62) {
      const d = i.containerState;
      return d.open || (t.enter("blockQuote", {
        _container: !0
      }), d.open = !0), t.enter("blockQuotePrefix"), t.enter("blockQuoteMarker"), t.consume(c), t.exit("blockQuoteMarker"), u;
    }
    return l(c);
  }
  function u(c) {
    return je(c) ? (t.enter("blockQuotePrefixWhitespace"), t.consume(c), t.exit("blockQuotePrefixWhitespace"), t.exit("blockQuotePrefix"), r) : (t.exit("blockQuotePrefix"), r(c));
  }
}
function Q4(t, r, l) {
  const i = this;
  return s;
  function s(c) {
    return je(c) ? Be(t, u, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(c) : u(c);
  }
  function u(c) {
    return t.attempt(n1, r, l)(c);
  }
}
function Z4(t) {
  t.exit("blockQuote");
}
const r1 = {
  name: "characterEscape",
  tokenize: K4
};
function K4(t, r, l) {
  return i;
  function i(u) {
    return t.enter("characterEscape"), t.enter("escapeMarker"), t.consume(u), t.exit("escapeMarker"), s;
  }
  function s(u) {
    return j4(u) ? (t.enter("characterEscapeValue"), t.consume(u), t.exit("characterEscapeValue"), t.exit("characterEscape"), r) : l(u);
  }
}
const l1 = {
  name: "characterReference",
  tokenize: J4
};
function J4(t, r, l) {
  const i = this;
  let s = 0, u, c;
  return d;
  function d(g) {
    return t.enter("characterReference"), t.enter("characterReferenceMarker"), t.consume(g), t.exit("characterReferenceMarker"), m;
  }
  function m(g) {
    return g === 35 ? (t.enter("characterReferenceMarkerNumeric"), t.consume(g), t.exit("characterReferenceMarkerNumeric"), h) : (t.enter("characterReferenceValue"), u = 31, c = Ot, y(g));
  }
  function h(g) {
    return g === 88 || g === 120 ? (t.enter("characterReferenceMarkerHexadecimal"), t.consume(g), t.exit("characterReferenceMarkerHexadecimal"), t.enter("characterReferenceValue"), u = 6, c = L4, y) : (t.enter("characterReferenceValue"), u = 7, c = ed, y(g));
  }
  function y(g) {
    if (g === 59 && s) {
      const b = t.exit("characterReferenceValue");
      return c === Ot && !Dd(i.sliceSerialize(b)) ? l(g) : (t.enter("characterReferenceMarker"), t.consume(g), t.exit("characterReferenceMarker"), t.exit("characterReference"), r);
    }
    return c(g) && s++ < u ? (t.consume(g), y) : l(g);
  }
}
const Iy = {
  partial: !0,
  tokenize: W4
}, Hy = {
  concrete: !0,
  name: "codeFenced",
  tokenize: $4
};
function $4(t, r, l) {
  const i = this, s = {
    partial: !0,
    tokenize: H
  };
  let u = 0, c = 0, d;
  return m;
  function m(R) {
    return h(R);
  }
  function h(R) {
    const F = i.events[i.events.length - 1];
    return u = F && F[1].type === "linePrefix" ? F[2].sliceSerialize(F[1], !0).length : 0, d = R, t.enter("codeFenced"), t.enter("codeFencedFence"), t.enter("codeFencedFenceSequence"), y(R);
  }
  function y(R) {
    return R === d ? (c++, t.consume(R), y) : c < 3 ? l(R) : (t.exit("codeFencedFenceSequence"), je(R) ? Be(t, g, "whitespace")(R) : g(R));
  }
  function g(R) {
    return R === null || be(R) ? (t.exit("codeFencedFence"), i.interrupt ? r(R) : t.check(Iy, C, Q)(R)) : (t.enter("codeFencedFenceInfo"), t.enter("chunkString", {
      contentType: "string"
    }), b(R));
  }
  function b(R) {
    return R === null || be(R) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), g(R)) : je(R) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), Be(t, v, "whitespace")(R)) : R === 96 && R === d ? l(R) : (t.consume(R), b);
  }
  function v(R) {
    return R === null || be(R) ? g(R) : (t.enter("codeFencedFenceMeta"), t.enter("chunkString", {
      contentType: "string"
    }), A(R));
  }
  function A(R) {
    return R === null || be(R) ? (t.exit("chunkString"), t.exit("codeFencedFenceMeta"), g(R)) : R === 96 && R === d ? l(R) : (t.consume(R), A);
  }
  function C(R) {
    return t.attempt(s, Q, N)(R);
  }
  function N(R) {
    return t.enter("lineEnding"), t.consume(R), t.exit("lineEnding"), T;
  }
  function T(R) {
    return u > 0 && je(R) ? Be(t, I, "linePrefix", u + 1)(R) : I(R);
  }
  function I(R) {
    return R === null || be(R) ? t.check(Iy, C, Q)(R) : (t.enter("codeFlowValue"), j(R));
  }
  function j(R) {
    return R === null || be(R) ? (t.exit("codeFlowValue"), I(R)) : (t.consume(R), j);
  }
  function Q(R) {
    return t.exit("codeFenced"), r(R);
  }
  function H(R, F, V) {
    let Z = 0;
    return M;
    function M(ie) {
      return R.enter("lineEnding"), R.consume(ie), R.exit("lineEnding"), re;
    }
    function re(ie) {
      return R.enter("codeFencedFence"), je(ie) ? Be(R, te, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(ie) : te(ie);
    }
    function te(ie) {
      return ie === d ? (R.enter("codeFencedFenceSequence"), oe(ie)) : V(ie);
    }
    function oe(ie) {
      return ie === d ? (Z++, R.consume(ie), oe) : Z >= c ? (R.exit("codeFencedFenceSequence"), je(ie) ? Be(R, ne, "whitespace")(ie) : ne(ie)) : V(ie);
    }
    function ne(ie) {
      return ie === null || be(ie) ? (R.exit("codeFencedFence"), F(ie)) : V(ie);
    }
  }
}
function W4(t, r, l) {
  const i = this;
  return s;
  function s(c) {
    return c === null ? l(c) : (t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), u);
  }
  function u(c) {
    return i.parser.lazy[i.now().line] ? l(c) : r(c);
  }
}
const gf = {
  name: "codeIndented",
  tokenize: tA
}, eA = {
  partial: !0,
  tokenize: nA
};
function tA(t, r, l) {
  const i = this;
  return s;
  function s(h) {
    return t.enter("codeIndented"), Be(t, u, "linePrefix", 5)(h);
  }
  function u(h) {
    const y = i.events[i.events.length - 1];
    return y && y[1].type === "linePrefix" && y[2].sliceSerialize(y[1], !0).length >= 4 ? c(h) : l(h);
  }
  function c(h) {
    return h === null ? m(h) : be(h) ? t.attempt(eA, c, m)(h) : (t.enter("codeFlowValue"), d(h));
  }
  function d(h) {
    return h === null || be(h) ? (t.exit("codeFlowValue"), c(h)) : (t.consume(h), d);
  }
  function m(h) {
    return t.exit("codeIndented"), r(h);
  }
}
function nA(t, r, l) {
  const i = this;
  return s;
  function s(c) {
    return i.parser.lazy[i.now().line] ? l(c) : be(c) ? (t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), s) : Be(t, u, "linePrefix", 5)(c);
  }
  function u(c) {
    const d = i.events[i.events.length - 1];
    return d && d[1].type === "linePrefix" && d[2].sliceSerialize(d[1], !0).length >= 4 ? r(c) : be(c) ? s(c) : l(c);
  }
}
const rA = {
  name: "codeText",
  previous: aA,
  resolve: lA,
  tokenize: iA
};
function lA(t) {
  let r = t.length - 4, l = 3, i, s;
  if ((t[l][1].type === "lineEnding" || t[l][1].type === "space") && (t[r][1].type === "lineEnding" || t[r][1].type === "space")) {
    for (i = l; ++i < r; )
      if (t[i][1].type === "codeTextData") {
        t[l][1].type = "codeTextPadding", t[r][1].type = "codeTextPadding", l += 2, r -= 2;
        break;
      }
  }
  for (i = l - 1, r++; ++i <= r; )
    s === void 0 ? i !== r && t[i][1].type !== "lineEnding" && (s = i) : (i === r || t[i][1].type === "lineEnding") && (t[s][1].type = "codeTextData", i !== s + 2 && (t[s][1].end = t[i - 1][1].end, t.splice(s + 2, i - s - 2), r -= i - s - 2, i = s + 2), s = void 0);
  return t;
}
function aA(t) {
  return t !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function iA(t, r, l) {
  let i = 0, s, u;
  return c;
  function c(g) {
    return t.enter("codeText"), t.enter("codeTextSequence"), d(g);
  }
  function d(g) {
    return g === 96 ? (t.consume(g), i++, d) : (t.exit("codeTextSequence"), m(g));
  }
  function m(g) {
    return g === null ? l(g) : g === 32 ? (t.enter("space"), t.consume(g), t.exit("space"), m) : g === 96 ? (u = t.enter("codeTextSequence"), s = 0, y(g)) : be(g) ? (t.enter("lineEnding"), t.consume(g), t.exit("lineEnding"), m) : (t.enter("codeTextData"), h(g));
  }
  function h(g) {
    return g === null || g === 32 || g === 96 || be(g) ? (t.exit("codeTextData"), m(g)) : (t.consume(g), h);
  }
  function y(g) {
    return g === 96 ? (t.consume(g), s++, y) : s === i ? (t.exit("codeTextSequence"), t.exit("codeText"), r(g)) : (u.type = "codeTextData", h(g));
  }
}
class oA {
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
  slice(r, l) {
    const i = l ?? Number.POSITIVE_INFINITY;
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
  splice(r, l, i) {
    const s = l || 0;
    this.setCursor(Math.trunc(r));
    const u = this.right.splice(this.right.length - s, Number.POSITIVE_INFINITY);
    return i && fi(this.left, i), u.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), fi(this.left, r);
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
    this.setCursor(0), fi(this.right, r.reverse());
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
        const l = this.left.splice(r, Number.POSITIVE_INFINITY);
        fi(this.right, l.reverse());
      } else {
        const l = this.right.splice(this.left.length + this.right.length - r, Number.POSITIVE_INFINITY);
        fi(this.left, l.reverse());
      }
  }
}
function fi(t, r) {
  let l = 0;
  if (r.length < 1e4)
    t.push(...r);
  else
    for (; l < r.length; )
      t.push(...r.slice(l, l + 1e4)), l += 1e4;
}
function a1(t) {
  const r = {};
  let l = -1, i, s, u, c, d, m, h;
  const y = new oA(t);
  for (; ++l < y.length; ) {
    for (; l in r; )
      l = r[l];
    if (i = y.get(l), l && i[1].type === "chunkFlow" && y.get(l - 1)[1].type === "listItemPrefix" && (m = i[1]._tokenizer.events, u = 0, u < m.length && m[u][1].type === "lineEndingBlank" && (u += 2), u < m.length && m[u][1].type === "content"))
      for (; ++u < m.length && m[u][1].type !== "content"; )
        m[u][1].type === "chunkText" && (m[u][1]._isInFirstContentOfListItem = !0, u++);
    if (i[0] === "enter")
      i[1].contentType && (Object.assign(r, sA(y, l)), l = r[l], h = !0);
    else if (i[1]._container) {
      for (u = l, s = void 0; u--; )
        if (c = y.get(u), c[1].type === "lineEnding" || c[1].type === "lineEndingBlank")
          c[0] === "enter" && (s && (y.get(s)[1].type = "lineEndingBlank"), c[1].type = "lineEnding", s = u);
        else if (!(c[1].type === "linePrefix" || c[1].type === "listItemIndent")) break;
      s && (i[1].end = {
        ...y.get(s)[1].start
      }, d = y.slice(s, l), d.unshift(i), y.splice(s, l - s + 1, d));
    }
  }
  return en(t, 0, Number.POSITIVE_INFINITY, y.slice(0)), !h;
}
function sA(t, r) {
  const l = t.get(r)[1], i = t.get(r)[2];
  let s = r - 1;
  const u = [];
  let c = l._tokenizer;
  c || (c = i.parser[l.contentType](l.start), l._contentTypeTextTrailing && (c._contentTypeTextTrailing = !0));
  const d = c.events, m = [], h = {};
  let y, g, b = -1, v = l, A = 0, C = 0;
  const N = [C];
  for (; v; ) {
    for (; t.get(++s)[1] !== v; )
      ;
    u.push(s), v._tokenizer || (y = i.sliceStream(v), v.next || y.push(null), g && c.defineSkip(v.start), v._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = !0), c.write(y), v._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = void 0)), g = v, v = v.next;
  }
  for (v = l; ++b < d.length; )
    // Find a void token that includes a break.
    d[b][0] === "exit" && d[b - 1][0] === "enter" && d[b][1].type === d[b - 1][1].type && d[b][1].start.line !== d[b][1].end.line && (C = b + 1, N.push(C), v._tokenizer = void 0, v.previous = void 0, v = v.next);
  for (c.events = [], v ? (v._tokenizer = void 0, v.previous = void 0) : N.pop(), b = N.length; b--; ) {
    const T = d.slice(N[b], N[b + 1]), I = u.pop();
    m.push([I, I + T.length - 1]), t.splice(I, 2, T);
  }
  for (m.reverse(), b = -1; ++b < m.length; )
    h[A + m[b][0]] = A + m[b][1], A += m[b][1] - m[b][0] - 1;
  return h;
}
const uA = {
  resolve: fA,
  tokenize: dA
}, cA = {
  partial: !0,
  tokenize: hA
};
function fA(t) {
  return a1(t), t;
}
function dA(t, r) {
  let l;
  return i;
  function i(d) {
    return t.enter("content"), l = t.enter("chunkContent", {
      contentType: "content"
    }), s(d);
  }
  function s(d) {
    return d === null ? u(d) : be(d) ? t.check(cA, c, u)(d) : (t.consume(d), s);
  }
  function u(d) {
    return t.exit("chunkContent"), t.exit("content"), r(d);
  }
  function c(d) {
    return t.consume(d), t.exit("chunkContent"), l.next = t.enter("chunkContent", {
      contentType: "content",
      previous: l
    }), l = l.next, s;
  }
}
function hA(t, r, l) {
  const i = this;
  return s;
  function s(c) {
    return t.exit("chunkContent"), t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), Be(t, u, "linePrefix");
  }
  function u(c) {
    if (c === null || be(c))
      return l(c);
    const d = i.events[i.events.length - 1];
    return !i.parser.constructs.disable.null.includes("codeIndented") && d && d[1].type === "linePrefix" && d[2].sliceSerialize(d[1], !0).length >= 4 ? r(c) : t.interrupt(i.parser.constructs.flow, l, r)(c);
  }
}
function i1(t, r, l, i, s, u, c, d, m) {
  const h = m || Number.POSITIVE_INFINITY;
  let y = 0;
  return g;
  function g(T) {
    return T === 60 ? (t.enter(i), t.enter(s), t.enter(u), t.consume(T), t.exit(u), b) : T === null || T === 32 || T === 41 || cs(T) ? l(T) : (t.enter(i), t.enter(c), t.enter(d), t.enter("chunkString", {
      contentType: "string"
    }), C(T));
  }
  function b(T) {
    return T === 62 ? (t.enter(u), t.consume(T), t.exit(u), t.exit(s), t.exit(i), r) : (t.enter(d), t.enter("chunkString", {
      contentType: "string"
    }), v(T));
  }
  function v(T) {
    return T === 62 ? (t.exit("chunkString"), t.exit(d), b(T)) : T === null || T === 60 || be(T) ? l(T) : (t.consume(T), T === 92 ? A : v);
  }
  function A(T) {
    return T === 60 || T === 62 || T === 92 ? (t.consume(T), v) : v(T);
  }
  function C(T) {
    return !y && (T === null || T === 41 || $e(T)) ? (t.exit("chunkString"), t.exit(d), t.exit(c), t.exit(i), r(T)) : y < h && T === 40 ? (t.consume(T), y++, C) : T === 41 ? (t.consume(T), y--, C) : T === null || T === 32 || T === 40 || cs(T) ? l(T) : (t.consume(T), T === 92 ? N : C);
  }
  function N(T) {
    return T === 40 || T === 41 || T === 92 ? (t.consume(T), C) : C(T);
  }
}
function o1(t, r, l, i, s, u) {
  const c = this;
  let d = 0, m;
  return h;
  function h(v) {
    return t.enter(i), t.enter(s), t.consume(v), t.exit(s), t.enter(u), y;
  }
  function y(v) {
    return d > 999 || v === null || v === 91 || v === 93 && !m || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    v === 94 && !d && "_hiddenFootnoteSupport" in c.parser.constructs ? l(v) : v === 93 ? (t.exit(u), t.enter(s), t.consume(v), t.exit(s), t.exit(i), r) : be(v) ? (t.enter("lineEnding"), t.consume(v), t.exit("lineEnding"), y) : (t.enter("chunkString", {
      contentType: "string"
    }), g(v));
  }
  function g(v) {
    return v === null || v === 91 || v === 93 || be(v) || d++ > 999 ? (t.exit("chunkString"), y(v)) : (t.consume(v), m || (m = !je(v)), v === 92 ? b : g);
  }
  function b(v) {
    return v === 91 || v === 92 || v === 93 ? (t.consume(v), d++, g) : g(v);
  }
}
function s1(t, r, l, i, s, u) {
  let c;
  return d;
  function d(b) {
    return b === 34 || b === 39 || b === 40 ? (t.enter(i), t.enter(s), t.consume(b), t.exit(s), c = b === 40 ? 41 : b, m) : l(b);
  }
  function m(b) {
    return b === c ? (t.enter(s), t.consume(b), t.exit(s), t.exit(i), r) : (t.enter(u), h(b));
  }
  function h(b) {
    return b === c ? (t.exit(u), m(c)) : b === null ? l(b) : be(b) ? (t.enter("lineEnding"), t.consume(b), t.exit("lineEnding"), Be(t, h, "linePrefix")) : (t.enter("chunkString", {
      contentType: "string"
    }), y(b));
  }
  function y(b) {
    return b === c || b === null || be(b) ? (t.exit("chunkString"), h(b)) : (t.consume(b), b === 92 ? g : y);
  }
  function g(b) {
    return b === c || b === 92 ? (t.consume(b), y) : y(b);
  }
}
function pi(t, r) {
  let l;
  return i;
  function i(s) {
    return be(s) ? (t.enter("lineEnding"), t.consume(s), t.exit("lineEnding"), l = !0, i) : je(s) ? Be(t, i, l ? "linePrefix" : "lineSuffix")(s) : r(s);
  }
}
const pA = {
  name: "definition",
  tokenize: gA
}, mA = {
  partial: !0,
  tokenize: yA
};
function gA(t, r, l) {
  const i = this;
  let s;
  return u;
  function u(v) {
    return t.enter("definition"), c(v);
  }
  function c(v) {
    return o1.call(
      i,
      t,
      d,
      // Note: we don’t need to reset the way `markdown-rs` does.
      l,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(v);
  }
  function d(v) {
    return s = xn(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1)), v === 58 ? (t.enter("definitionMarker"), t.consume(v), t.exit("definitionMarker"), m) : l(v);
  }
  function m(v) {
    return $e(v) ? pi(t, h)(v) : h(v);
  }
  function h(v) {
    return i1(
      t,
      y,
      // Note: we don’t need to reset the way `markdown-rs` does.
      l,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(v);
  }
  function y(v) {
    return t.attempt(mA, g, g)(v);
  }
  function g(v) {
    return je(v) ? Be(t, b, "whitespace")(v) : b(v);
  }
  function b(v) {
    return v === null || be(v) ? (t.exit("definition"), i.parser.defined.push(s), r(v)) : l(v);
  }
}
function yA(t, r, l) {
  return i;
  function i(d) {
    return $e(d) ? pi(t, s)(d) : l(d);
  }
  function s(d) {
    return s1(t, u, l, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(d);
  }
  function u(d) {
    return je(d) ? Be(t, c, "whitespace")(d) : c(d);
  }
  function c(d) {
    return d === null || be(d) ? r(d) : l(d);
  }
}
const bA = {
  name: "hardBreakEscape",
  tokenize: vA
};
function vA(t, r, l) {
  return i;
  function i(u) {
    return t.enter("hardBreakEscape"), t.consume(u), s;
  }
  function s(u) {
    return be(u) ? (t.exit("hardBreakEscape"), r(u)) : l(u);
  }
}
const xA = {
  name: "headingAtx",
  resolve: wA,
  tokenize: SA
};
function wA(t, r) {
  let l = t.length - 2, i = 3, s, u;
  return t[i][1].type === "whitespace" && (i += 2), l - 2 > i && t[l][1].type === "whitespace" && (l -= 2), t[l][1].type === "atxHeadingSequence" && (i === l - 1 || l - 4 > i && t[l - 2][1].type === "whitespace") && (l -= i + 1 === l ? 2 : 4), l > i && (s = {
    type: "atxHeadingText",
    start: t[i][1].start,
    end: t[l][1].end
  }, u = {
    type: "chunkText",
    start: t[i][1].start,
    end: t[l][1].end,
    contentType: "text"
  }, en(t, i, l - i + 1, [["enter", s, r], ["enter", u, r], ["exit", u, r], ["exit", s, r]])), t;
}
function SA(t, r, l) {
  let i = 0;
  return s;
  function s(y) {
    return t.enter("atxHeading"), u(y);
  }
  function u(y) {
    return t.enter("atxHeadingSequence"), c(y);
  }
  function c(y) {
    return y === 35 && i++ < 6 ? (t.consume(y), c) : y === null || $e(y) ? (t.exit("atxHeadingSequence"), d(y)) : l(y);
  }
  function d(y) {
    return y === 35 ? (t.enter("atxHeadingSequence"), m(y)) : y === null || be(y) ? (t.exit("atxHeading"), r(y)) : je(y) ? Be(t, d, "whitespace")(y) : (t.enter("atxHeadingText"), h(y));
  }
  function m(y) {
    return y === 35 ? (t.consume(y), m) : (t.exit("atxHeadingSequence"), d(y));
  }
  function h(y) {
    return y === null || y === 35 || $e(y) ? (t.exit("atxHeadingText"), d(y)) : (t.consume(y), h);
  }
}
const EA = [
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
], qy = ["pre", "script", "style", "textarea"], kA = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: TA,
  tokenize: _A
}, CA = {
  partial: !0,
  tokenize: DA
}, AA = {
  partial: !0,
  tokenize: RA
};
function TA(t) {
  let r = t.length;
  for (; r-- && !(t[r][0] === "enter" && t[r][1].type === "htmlFlow"); )
    ;
  return r > 1 && t[r - 2][1].type === "linePrefix" && (t[r][1].start = t[r - 2][1].start, t[r + 1][1].start = t[r - 2][1].start, t.splice(r - 2, 2)), t;
}
function _A(t, r, l) {
  const i = this;
  let s, u, c, d, m;
  return h;
  function h(k) {
    return y(k);
  }
  function y(k) {
    return t.enter("htmlFlow"), t.enter("htmlFlowData"), t.consume(k), g;
  }
  function g(k) {
    return k === 33 ? (t.consume(k), b) : k === 47 ? (t.consume(k), u = !0, C) : k === 63 ? (t.consume(k), s = 3, i.interrupt ? r : w) : jt(k) ? (t.consume(k), c = String.fromCharCode(k), N) : l(k);
  }
  function b(k) {
    return k === 45 ? (t.consume(k), s = 2, v) : k === 91 ? (t.consume(k), s = 5, d = 0, A) : jt(k) ? (t.consume(k), s = 4, i.interrupt ? r : w) : l(k);
  }
  function v(k) {
    return k === 45 ? (t.consume(k), i.interrupt ? r : w) : l(k);
  }
  function A(k) {
    const se = "CDATA[";
    return k === se.charCodeAt(d++) ? (t.consume(k), d === se.length ? i.interrupt ? r : te : A) : l(k);
  }
  function C(k) {
    return jt(k) ? (t.consume(k), c = String.fromCharCode(k), N) : l(k);
  }
  function N(k) {
    if (k === null || k === 47 || k === 62 || $e(k)) {
      const se = k === 47, ye = c.toLowerCase();
      return !se && !u && qy.includes(ye) ? (s = 1, i.interrupt ? r(k) : te(k)) : EA.includes(c.toLowerCase()) ? (s = 6, se ? (t.consume(k), T) : i.interrupt ? r(k) : te(k)) : (s = 7, i.interrupt && !i.parser.lazy[i.now().line] ? l(k) : u ? I(k) : j(k));
    }
    return k === 45 || Ot(k) ? (t.consume(k), c += String.fromCharCode(k), N) : l(k);
  }
  function T(k) {
    return k === 62 ? (t.consume(k), i.interrupt ? r : te) : l(k);
  }
  function I(k) {
    return je(k) ? (t.consume(k), I) : M(k);
  }
  function j(k) {
    return k === 47 ? (t.consume(k), M) : k === 58 || k === 95 || jt(k) ? (t.consume(k), Q) : je(k) ? (t.consume(k), j) : M(k);
  }
  function Q(k) {
    return k === 45 || k === 46 || k === 58 || k === 95 || Ot(k) ? (t.consume(k), Q) : H(k);
  }
  function H(k) {
    return k === 61 ? (t.consume(k), R) : je(k) ? (t.consume(k), H) : j(k);
  }
  function R(k) {
    return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? l(k) : k === 34 || k === 39 ? (t.consume(k), m = k, F) : je(k) ? (t.consume(k), R) : V(k);
  }
  function F(k) {
    return k === m ? (t.consume(k), m = null, Z) : k === null || be(k) ? l(k) : (t.consume(k), F);
  }
  function V(k) {
    return k === null || k === 34 || k === 39 || k === 47 || k === 60 || k === 61 || k === 62 || k === 96 || $e(k) ? H(k) : (t.consume(k), V);
  }
  function Z(k) {
    return k === 47 || k === 62 || je(k) ? j(k) : l(k);
  }
  function M(k) {
    return k === 62 ? (t.consume(k), re) : l(k);
  }
  function re(k) {
    return k === null || be(k) ? te(k) : je(k) ? (t.consume(k), re) : l(k);
  }
  function te(k) {
    return k === 45 && s === 2 ? (t.consume(k), B) : k === 60 && s === 1 ? (t.consume(k), W) : k === 62 && s === 4 ? (t.consume(k), X) : k === 63 && s === 3 ? (t.consume(k), w) : k === 93 && s === 5 ? (t.consume(k), ge) : be(k) && (s === 6 || s === 7) ? (t.exit("htmlFlowData"), t.check(CA, le, oe)(k)) : k === null || be(k) ? (t.exit("htmlFlowData"), oe(k)) : (t.consume(k), te);
  }
  function oe(k) {
    return t.check(AA, ne, le)(k);
  }
  function ne(k) {
    return t.enter("lineEnding"), t.consume(k), t.exit("lineEnding"), ie;
  }
  function ie(k) {
    return k === null || be(k) ? oe(k) : (t.enter("htmlFlowData"), te(k));
  }
  function B(k) {
    return k === 45 ? (t.consume(k), w) : te(k);
  }
  function W(k) {
    return k === 47 ? (t.consume(k), c = "", G) : te(k);
  }
  function G(k) {
    if (k === 62) {
      const se = c.toLowerCase();
      return qy.includes(se) ? (t.consume(k), X) : te(k);
    }
    return jt(k) && c.length < 8 ? (t.consume(k), c += String.fromCharCode(k), G) : te(k);
  }
  function ge(k) {
    return k === 93 ? (t.consume(k), w) : te(k);
  }
  function w(k) {
    return k === 62 ? (t.consume(k), X) : k === 45 && s === 2 ? (t.consume(k), w) : te(k);
  }
  function X(k) {
    return k === null || be(k) ? (t.exit("htmlFlowData"), le(k)) : (t.consume(k), X);
  }
  function le(k) {
    return t.exit("htmlFlow"), r(k);
  }
}
function RA(t, r, l) {
  const i = this;
  return s;
  function s(c) {
    return be(c) ? (t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), u) : l(c);
  }
  function u(c) {
    return i.parser.lazy[i.now().line] ? l(c) : r(c);
  }
}
function DA(t, r, l) {
  return i;
  function i(s) {
    return t.enter("lineEnding"), t.consume(s), t.exit("lineEnding"), t.attempt(_i, r, l);
  }
}
const NA = {
  name: "htmlText",
  tokenize: OA
};
function OA(t, r, l) {
  const i = this;
  let s, u, c;
  return d;
  function d(w) {
    return t.enter("htmlText"), t.enter("htmlTextData"), t.consume(w), m;
  }
  function m(w) {
    return w === 33 ? (t.consume(w), h) : w === 47 ? (t.consume(w), H) : w === 63 ? (t.consume(w), j) : jt(w) ? (t.consume(w), V) : l(w);
  }
  function h(w) {
    return w === 45 ? (t.consume(w), y) : w === 91 ? (t.consume(w), u = 0, A) : jt(w) ? (t.consume(w), I) : l(w);
  }
  function y(w) {
    return w === 45 ? (t.consume(w), v) : l(w);
  }
  function g(w) {
    return w === null ? l(w) : w === 45 ? (t.consume(w), b) : be(w) ? (c = g, W(w)) : (t.consume(w), g);
  }
  function b(w) {
    return w === 45 ? (t.consume(w), v) : g(w);
  }
  function v(w) {
    return w === 62 ? B(w) : w === 45 ? b(w) : g(w);
  }
  function A(w) {
    const X = "CDATA[";
    return w === X.charCodeAt(u++) ? (t.consume(w), u === X.length ? C : A) : l(w);
  }
  function C(w) {
    return w === null ? l(w) : w === 93 ? (t.consume(w), N) : be(w) ? (c = C, W(w)) : (t.consume(w), C);
  }
  function N(w) {
    return w === 93 ? (t.consume(w), T) : C(w);
  }
  function T(w) {
    return w === 62 ? B(w) : w === 93 ? (t.consume(w), T) : C(w);
  }
  function I(w) {
    return w === null || w === 62 ? B(w) : be(w) ? (c = I, W(w)) : (t.consume(w), I);
  }
  function j(w) {
    return w === null ? l(w) : w === 63 ? (t.consume(w), Q) : be(w) ? (c = j, W(w)) : (t.consume(w), j);
  }
  function Q(w) {
    return w === 62 ? B(w) : j(w);
  }
  function H(w) {
    return jt(w) ? (t.consume(w), R) : l(w);
  }
  function R(w) {
    return w === 45 || Ot(w) ? (t.consume(w), R) : F(w);
  }
  function F(w) {
    return be(w) ? (c = F, W(w)) : je(w) ? (t.consume(w), F) : B(w);
  }
  function V(w) {
    return w === 45 || Ot(w) ? (t.consume(w), V) : w === 47 || w === 62 || $e(w) ? Z(w) : l(w);
  }
  function Z(w) {
    return w === 47 ? (t.consume(w), B) : w === 58 || w === 95 || jt(w) ? (t.consume(w), M) : be(w) ? (c = Z, W(w)) : je(w) ? (t.consume(w), Z) : B(w);
  }
  function M(w) {
    return w === 45 || w === 46 || w === 58 || w === 95 || Ot(w) ? (t.consume(w), M) : re(w);
  }
  function re(w) {
    return w === 61 ? (t.consume(w), te) : be(w) ? (c = re, W(w)) : je(w) ? (t.consume(w), re) : Z(w);
  }
  function te(w) {
    return w === null || w === 60 || w === 61 || w === 62 || w === 96 ? l(w) : w === 34 || w === 39 ? (t.consume(w), s = w, oe) : be(w) ? (c = te, W(w)) : je(w) ? (t.consume(w), te) : (t.consume(w), ne);
  }
  function oe(w) {
    return w === s ? (t.consume(w), s = void 0, ie) : w === null ? l(w) : be(w) ? (c = oe, W(w)) : (t.consume(w), oe);
  }
  function ne(w) {
    return w === null || w === 34 || w === 39 || w === 60 || w === 61 || w === 96 ? l(w) : w === 47 || w === 62 || $e(w) ? Z(w) : (t.consume(w), ne);
  }
  function ie(w) {
    return w === 47 || w === 62 || $e(w) ? Z(w) : l(w);
  }
  function B(w) {
    return w === 62 ? (t.consume(w), t.exit("htmlTextData"), t.exit("htmlText"), r) : l(w);
  }
  function W(w) {
    return t.exit("htmlTextData"), t.enter("lineEnding"), t.consume(w), t.exit("lineEnding"), G;
  }
  function G(w) {
    return je(w) ? Be(t, ge, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w) : ge(w);
  }
  function ge(w) {
    return t.enter("htmlTextData"), c(w);
  }
}
const Nd = {
  name: "labelEnd",
  resolveAll: jA,
  resolveTo: UA,
  tokenize: BA
}, MA = {
  tokenize: IA
}, zA = {
  tokenize: HA
}, LA = {
  tokenize: qA
};
function jA(t) {
  let r = -1;
  const l = [];
  for (; ++r < t.length; ) {
    const i = t[r][1];
    if (l.push(t[r]), i.type === "labelImage" || i.type === "labelLink" || i.type === "labelEnd") {
      const s = i.type === "labelImage" ? 4 : 2;
      i.type = "data", r += s;
    }
  }
  return t.length !== l.length && en(t, 0, t.length, l), t;
}
function UA(t, r) {
  let l = t.length, i = 0, s, u, c, d;
  for (; l--; )
    if (s = t[l][1], u) {
      if (s.type === "link" || s.type === "labelLink" && s._inactive)
        break;
      t[l][0] === "enter" && s.type === "labelLink" && (s._inactive = !0);
    } else if (c) {
      if (t[l][0] === "enter" && (s.type === "labelImage" || s.type === "labelLink") && !s._balanced && (u = l, s.type !== "labelLink")) {
        i = 2;
        break;
      }
    } else s.type === "labelEnd" && (c = l);
  const m = {
    type: t[u][1].type === "labelLink" ? "link" : "image",
    start: {
      ...t[u][1].start
    },
    end: {
      ...t[t.length - 1][1].end
    }
  }, h = {
    type: "label",
    start: {
      ...t[u][1].start
    },
    end: {
      ...t[c][1].end
    }
  }, y = {
    type: "labelText",
    start: {
      ...t[u + i + 2][1].end
    },
    end: {
      ...t[c - 2][1].start
    }
  };
  return d = [["enter", m, r], ["enter", h, r]], d = hn(d, t.slice(u + 1, u + i + 3)), d = hn(d, [["enter", y, r]]), d = hn(d, ks(r.parser.constructs.insideSpan.null, t.slice(u + i + 4, c - 3), r)), d = hn(d, [["exit", y, r], t[c - 2], t[c - 1], ["exit", h, r]]), d = hn(d, t.slice(c + 1)), d = hn(d, [["exit", m, r]]), en(t, u, t.length, d), t;
}
function BA(t, r, l) {
  const i = this;
  let s = i.events.length, u, c;
  for (; s--; )
    if ((i.events[s][1].type === "labelImage" || i.events[s][1].type === "labelLink") && !i.events[s][1]._balanced) {
      u = i.events[s][1];
      break;
    }
  return d;
  function d(b) {
    return u ? u._inactive ? g(b) : (c = i.parser.defined.includes(xn(i.sliceSerialize({
      start: u.end,
      end: i.now()
    }))), t.enter("labelEnd"), t.enter("labelMarker"), t.consume(b), t.exit("labelMarker"), t.exit("labelEnd"), m) : l(b);
  }
  function m(b) {
    return b === 40 ? t.attempt(MA, y, c ? y : g)(b) : b === 91 ? t.attempt(zA, y, c ? h : g)(b) : c ? y(b) : g(b);
  }
  function h(b) {
    return t.attempt(LA, y, g)(b);
  }
  function y(b) {
    return r(b);
  }
  function g(b) {
    return u._balanced = !0, l(b);
  }
}
function IA(t, r, l) {
  return i;
  function i(g) {
    return t.enter("resource"), t.enter("resourceMarker"), t.consume(g), t.exit("resourceMarker"), s;
  }
  function s(g) {
    return $e(g) ? pi(t, u)(g) : u(g);
  }
  function u(g) {
    return g === 41 ? y(g) : i1(t, c, d, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(g);
  }
  function c(g) {
    return $e(g) ? pi(t, m)(g) : y(g);
  }
  function d(g) {
    return l(g);
  }
  function m(g) {
    return g === 34 || g === 39 || g === 40 ? s1(t, h, l, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(g) : y(g);
  }
  function h(g) {
    return $e(g) ? pi(t, y)(g) : y(g);
  }
  function y(g) {
    return g === 41 ? (t.enter("resourceMarker"), t.consume(g), t.exit("resourceMarker"), t.exit("resource"), r) : l(g);
  }
}
function HA(t, r, l) {
  const i = this;
  return s;
  function s(d) {
    return o1.call(i, t, u, c, "reference", "referenceMarker", "referenceString")(d);
  }
  function u(d) {
    return i.parser.defined.includes(xn(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1))) ? r(d) : l(d);
  }
  function c(d) {
    return l(d);
  }
}
function qA(t, r, l) {
  return i;
  function i(u) {
    return t.enter("reference"), t.enter("referenceMarker"), t.consume(u), t.exit("referenceMarker"), s;
  }
  function s(u) {
    return u === 93 ? (t.enter("referenceMarker"), t.consume(u), t.exit("referenceMarker"), t.exit("reference"), r) : l(u);
  }
}
const VA = {
  name: "labelStartImage",
  resolveAll: Nd.resolveAll,
  tokenize: PA
};
function PA(t, r, l) {
  const i = this;
  return s;
  function s(d) {
    return t.enter("labelImage"), t.enter("labelImageMarker"), t.consume(d), t.exit("labelImageMarker"), u;
  }
  function u(d) {
    return d === 91 ? (t.enter("labelMarker"), t.consume(d), t.exit("labelMarker"), t.exit("labelImage"), c) : l(d);
  }
  function c(d) {
    return d === 94 && "_hiddenFootnoteSupport" in i.parser.constructs ? l(d) : r(d);
  }
}
const YA = {
  name: "labelStartLink",
  resolveAll: Nd.resolveAll,
  tokenize: FA
};
function FA(t, r, l) {
  const i = this;
  return s;
  function s(c) {
    return t.enter("labelLink"), t.enter("labelMarker"), t.consume(c), t.exit("labelMarker"), t.exit("labelLink"), u;
  }
  function u(c) {
    return c === 94 && "_hiddenFootnoteSupport" in i.parser.constructs ? l(c) : r(c);
  }
}
const yf = {
  name: "lineEnding",
  tokenize: GA
};
function GA(t, r) {
  return l;
  function l(i) {
    return t.enter("lineEnding"), t.consume(i), t.exit("lineEnding"), Be(t, r, "linePrefix");
  }
}
const as = {
  name: "thematicBreak",
  tokenize: XA
};
function XA(t, r, l) {
  let i = 0, s;
  return u;
  function u(h) {
    return t.enter("thematicBreak"), c(h);
  }
  function c(h) {
    return s = h, d(h);
  }
  function d(h) {
    return h === s ? (t.enter("thematicBreakSequence"), m(h)) : i >= 3 && (h === null || be(h)) ? (t.exit("thematicBreak"), r(h)) : l(h);
  }
  function m(h) {
    return h === s ? (t.consume(h), i++, m) : (t.exit("thematicBreakSequence"), je(h) ? Be(t, d, "whitespace")(h) : d(h));
  }
}
const Pt = {
  continuation: {
    tokenize: JA
  },
  exit: WA,
  name: "list",
  tokenize: KA
}, QA = {
  partial: !0,
  tokenize: eT
}, ZA = {
  partial: !0,
  tokenize: $A
};
function KA(t, r, l) {
  const i = this, s = i.events[i.events.length - 1];
  let u = s && s[1].type === "linePrefix" ? s[2].sliceSerialize(s[1], !0).length : 0, c = 0;
  return d;
  function d(v) {
    const A = i.containerState.type || (v === 42 || v === 43 || v === 45 ? "listUnordered" : "listOrdered");
    if (A === "listUnordered" ? !i.containerState.marker || v === i.containerState.marker : ed(v)) {
      if (i.containerState.type || (i.containerState.type = A, t.enter(A, {
        _container: !0
      })), A === "listUnordered")
        return t.enter("listItemPrefix"), v === 42 || v === 45 ? t.check(as, l, h)(v) : h(v);
      if (!i.interrupt || v === 49)
        return t.enter("listItemPrefix"), t.enter("listItemValue"), m(v);
    }
    return l(v);
  }
  function m(v) {
    return ed(v) && ++c < 10 ? (t.consume(v), m) : (!i.interrupt || c < 2) && (i.containerState.marker ? v === i.containerState.marker : v === 41 || v === 46) ? (t.exit("listItemValue"), h(v)) : l(v);
  }
  function h(v) {
    return t.enter("listItemMarker"), t.consume(v), t.exit("listItemMarker"), i.containerState.marker = i.containerState.marker || v, t.check(
      _i,
      // Can’t be empty when interrupting.
      i.interrupt ? l : y,
      t.attempt(QA, b, g)
    );
  }
  function y(v) {
    return i.containerState.initialBlankLine = !0, u++, b(v);
  }
  function g(v) {
    return je(v) ? (t.enter("listItemPrefixWhitespace"), t.consume(v), t.exit("listItemPrefixWhitespace"), b) : l(v);
  }
  function b(v) {
    return i.containerState.size = u + i.sliceSerialize(t.exit("listItemPrefix"), !0).length, r(v);
  }
}
function JA(t, r, l) {
  const i = this;
  return i.containerState._closeFlow = void 0, t.check(_i, s, u);
  function s(d) {
    return i.containerState.furtherBlankLines = i.containerState.furtherBlankLines || i.containerState.initialBlankLine, Be(t, r, "listItemIndent", i.containerState.size + 1)(d);
  }
  function u(d) {
    return i.containerState.furtherBlankLines || !je(d) ? (i.containerState.furtherBlankLines = void 0, i.containerState.initialBlankLine = void 0, c(d)) : (i.containerState.furtherBlankLines = void 0, i.containerState.initialBlankLine = void 0, t.attempt(ZA, r, c)(d));
  }
  function c(d) {
    return i.containerState._closeFlow = !0, i.interrupt = void 0, Be(t, t.attempt(Pt, r, l), "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(d);
  }
}
function $A(t, r, l) {
  const i = this;
  return Be(t, s, "listItemIndent", i.containerState.size + 1);
  function s(u) {
    const c = i.events[i.events.length - 1];
    return c && c[1].type === "listItemIndent" && c[2].sliceSerialize(c[1], !0).length === i.containerState.size ? r(u) : l(u);
  }
}
function WA(t) {
  t.exit(this.containerState.type);
}
function eT(t, r, l) {
  const i = this;
  return Be(t, s, "listItemPrefixWhitespace", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function s(u) {
    const c = i.events[i.events.length - 1];
    return !je(u) && c && c[1].type === "listItemPrefixWhitespace" ? r(u) : l(u);
  }
}
const Vy = {
  name: "setextUnderline",
  resolveTo: tT,
  tokenize: nT
};
function tT(t, r) {
  let l = t.length, i, s, u;
  for (; l--; )
    if (t[l][0] === "enter") {
      if (t[l][1].type === "content") {
        i = l;
        break;
      }
      t[l][1].type === "paragraph" && (s = l);
    } else
      t[l][1].type === "content" && t.splice(l, 1), !u && t[l][1].type === "definition" && (u = l);
  const c = {
    type: "setextHeading",
    start: {
      ...t[i][1].start
    },
    end: {
      ...t[t.length - 1][1].end
    }
  };
  return t[s][1].type = "setextHeadingText", u ? (t.splice(s, 0, ["enter", c, r]), t.splice(u + 1, 0, ["exit", t[i][1], r]), t[i][1].end = {
    ...t[u][1].end
  }) : t[i][1] = c, t.push(["exit", c, r]), t;
}
function nT(t, r, l) {
  const i = this;
  let s;
  return u;
  function u(h) {
    let y = i.events.length, g;
    for (; y--; )
      if (i.events[y][1].type !== "lineEnding" && i.events[y][1].type !== "linePrefix" && i.events[y][1].type !== "content") {
        g = i.events[y][1].type === "paragraph";
        break;
      }
    return !i.parser.lazy[i.now().line] && (i.interrupt || g) ? (t.enter("setextHeadingLine"), s = h, c(h)) : l(h);
  }
  function c(h) {
    return t.enter("setextHeadingLineSequence"), d(h);
  }
  function d(h) {
    return h === s ? (t.consume(h), d) : (t.exit("setextHeadingLineSequence"), je(h) ? Be(t, m, "lineSuffix")(h) : m(h));
  }
  function m(h) {
    return h === null || be(h) ? (t.exit("setextHeadingLine"), r(h)) : l(h);
  }
}
const rT = {
  tokenize: lT
};
function lT(t) {
  const r = this, l = t.attempt(
    // Try to parse a blank line.
    _i,
    i,
    // Try to parse initial flow (essentially, only code).
    t.attempt(this.parser.constructs.flowInitial, s, Be(t, t.attempt(this.parser.constructs.flow, s, t.attempt(uA, s)), "linePrefix"))
  );
  return l;
  function i(u) {
    if (u === null) {
      t.consume(u);
      return;
    }
    return t.enter("lineEndingBlank"), t.consume(u), t.exit("lineEndingBlank"), r.currentConstruct = void 0, l;
  }
  function s(u) {
    if (u === null) {
      t.consume(u);
      return;
    }
    return t.enter("lineEnding"), t.consume(u), t.exit("lineEnding"), r.currentConstruct = void 0, l;
  }
}
const aT = {
  resolveAll: c1()
}, iT = u1("string"), oT = u1("text");
function u1(t) {
  return {
    resolveAll: c1(t === "text" ? sT : void 0),
    tokenize: r
  };
  function r(l) {
    const i = this, s = this.parser.constructs[t], u = l.attempt(s, c, d);
    return c;
    function c(y) {
      return h(y) ? u(y) : d(y);
    }
    function d(y) {
      if (y === null) {
        l.consume(y);
        return;
      }
      return l.enter("data"), l.consume(y), m;
    }
    function m(y) {
      return h(y) ? (l.exit("data"), u(y)) : (l.consume(y), m);
    }
    function h(y) {
      if (y === null)
        return !0;
      const g = s[y];
      let b = -1;
      if (g)
        for (; ++b < g.length; ) {
          const v = g[b];
          if (!v.previous || v.previous.call(i, i.previous))
            return !0;
        }
      return !1;
    }
  }
}
function c1(t) {
  return r;
  function r(l, i) {
    let s = -1, u;
    for (; ++s <= l.length; )
      u === void 0 ? l[s] && l[s][1].type === "data" && (u = s, s++) : (!l[s] || l[s][1].type !== "data") && (s !== u + 2 && (l[u][1].end = l[s - 1][1].end, l.splice(u + 2, s - u - 2), s = u + 2), u = void 0);
    return t ? t(l, i) : l;
  }
}
function sT(t, r) {
  let l = 0;
  for (; ++l <= t.length; )
    if ((l === t.length || t[l][1].type === "lineEnding") && t[l - 1][1].type === "data") {
      const i = t[l - 1][1], s = r.sliceStream(i);
      let u = s.length, c = -1, d = 0, m;
      for (; u--; ) {
        const h = s[u];
        if (typeof h == "string") {
          for (c = h.length; h.charCodeAt(c - 1) === 32; )
            d++, c--;
          if (c) break;
          c = -1;
        } else if (h === -2)
          m = !0, d++;
        else if (h !== -1) {
          u++;
          break;
        }
      }
      if (r._contentTypeTextTrailing && l === t.length && (d = 0), d) {
        const h = {
          type: l === t.length || m || d < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: u ? c : i.start._bufferIndex + c,
            _index: i.start._index + u,
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
        }, i.start.offset === i.end.offset ? Object.assign(i, h) : (t.splice(l, 0, ["enter", h, r], ["exit", h, r]), l += 2);
      }
      l++;
    }
  return t;
}
const uT = {
  42: Pt,
  43: Pt,
  45: Pt,
  48: Pt,
  49: Pt,
  50: Pt,
  51: Pt,
  52: Pt,
  53: Pt,
  54: Pt,
  55: Pt,
  56: Pt,
  57: Pt,
  62: n1
}, cT = {
  91: pA
}, fT = {
  [-2]: gf,
  [-1]: gf,
  32: gf
}, dT = {
  35: xA,
  42: as,
  45: [Vy, as],
  60: kA,
  61: Vy,
  95: as,
  96: Hy,
  126: Hy
}, hT = {
  38: l1,
  92: r1
}, pT = {
  [-5]: yf,
  [-4]: yf,
  [-3]: yf,
  33: VA,
  38: l1,
  42: td,
  60: [Y4, NA],
  91: YA,
  92: [bA, r1],
  93: Nd,
  95: td,
  96: rA
}, mT = {
  null: [td, aT]
}, gT = {
  null: [42, 95]
}, yT = {
  null: []
}, bT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: gT,
  contentInitial: cT,
  disable: yT,
  document: uT,
  flow: dT,
  flowInitial: fT,
  insideSpan: mT,
  string: hT,
  text: pT
}, Symbol.toStringTag, { value: "Module" }));
function vT(t, r, l) {
  let i = {
    _bufferIndex: -1,
    _index: 0,
    line: l && l.line || 1,
    column: l && l.column || 1,
    offset: l && l.offset || 0
  };
  const s = {}, u = [];
  let c = [], d = [];
  const m = {
    attempt: F(H),
    check: F(R),
    consume: I,
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
    now: A,
    parser: t,
    previous: null,
    sliceSerialize: b,
    sliceStream: v,
    write: g
  };
  let y = r.tokenize.call(h, m);
  return r.resolveAll && u.push(r), h;
  function g(re) {
    return c = hn(c, re), N(), c[c.length - 1] !== null ? [] : (V(r, 0), h.events = ks(u, h.events, h), h.events);
  }
  function b(re, te) {
    return wT(v(re), te);
  }
  function v(re) {
    return xT(c, re);
  }
  function A() {
    const {
      _bufferIndex: re,
      _index: te,
      line: oe,
      column: ne,
      offset: ie
    } = i;
    return {
      _bufferIndex: re,
      _index: te,
      line: oe,
      column: ne,
      offset: ie
    };
  }
  function C(re) {
    s[re.line] = re.column, M();
  }
  function N() {
    let re;
    for (; i._index < c.length; ) {
      const te = c[i._index];
      if (typeof te == "string")
        for (re = i._index, i._bufferIndex < 0 && (i._bufferIndex = 0); i._index === re && i._bufferIndex < te.length; )
          T(te.charCodeAt(i._bufferIndex));
      else
        T(te);
    }
  }
  function T(re) {
    y = y(re);
  }
  function I(re) {
    be(re) ? (i.line++, i.column = 1, i.offset += re === -3 ? 2 : 1, M()) : re !== -1 && (i.column++, i.offset++), i._bufferIndex < 0 ? i._index++ : (i._bufferIndex++, i._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    c[i._index].length && (i._bufferIndex = -1, i._index++)), h.previous = re;
  }
  function j(re, te) {
    const oe = te || {};
    return oe.type = re, oe.start = A(), h.events.push(["enter", oe, h]), d.push(oe), oe;
  }
  function Q(re) {
    const te = d.pop();
    return te.end = A(), h.events.push(["exit", te, h]), te;
  }
  function H(re, te) {
    V(re, te.from);
  }
  function R(re, te) {
    te.restore();
  }
  function F(re, te) {
    return oe;
    function oe(ne, ie, B) {
      let W, G, ge, w;
      return Array.isArray(ne) ? (
        /* c8 ignore next 1 */
        le(ne)
      ) : "tokenize" in ne ? (
        // Looks like a construct.
        le([
          /** @type {Construct} */
          ne
        ])
      ) : X(ne);
      function X(ue) {
        return ke;
        function ke(Te) {
          const tt = Te !== null && ue[Te], rt = Te !== null && ue.null, bt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(tt) ? tt : tt ? [tt] : [],
            ...Array.isArray(rt) ? rt : rt ? [rt] : []
          ];
          return le(bt)(Te);
        }
      }
      function le(ue) {
        return W = ue, G = 0, ue.length === 0 ? B : k(ue[G]);
      }
      function k(ue) {
        return ke;
        function ke(Te) {
          return w = Z(), ge = ue, ue.partial || (h.currentConstruct = ue), ue.name && h.parser.constructs.disable.null.includes(ue.name) ? ye() : ue.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            te ? Object.assign(Object.create(h), te) : h,
            m,
            se,
            ye
          )(Te);
        }
      }
      function se(ue) {
        return re(ge, w), ie;
      }
      function ye(ue) {
        return w.restore(), ++G < W.length ? k(W[G]) : B;
      }
    }
  }
  function V(re, te) {
    re.resolveAll && !u.includes(re) && u.push(re), re.resolve && en(h.events, te, h.events.length - te, re.resolve(h.events.slice(te), h)), re.resolveTo && (h.events = re.resolveTo(h.events, h));
  }
  function Z() {
    const re = A(), te = h.previous, oe = h.currentConstruct, ne = h.events.length, ie = Array.from(d);
    return {
      from: ne,
      restore: B
    };
    function B() {
      i = re, h.previous = te, h.currentConstruct = oe, h.events.length = ne, d = ie, M();
    }
  }
  function M() {
    i.line in s && i.column < 2 && (i.column = s[i.line], i.offset += s[i.line] - 1);
  }
}
function xT(t, r) {
  const l = r.start._index, i = r.start._bufferIndex, s = r.end._index, u = r.end._bufferIndex;
  let c;
  if (l === s)
    c = [t[l].slice(i, u)];
  else {
    if (c = t.slice(l, s), i > -1) {
      const d = c[0];
      typeof d == "string" ? c[0] = d.slice(i) : c.shift();
    }
    u > 0 && c.push(t[s].slice(0, u));
  }
  return c;
}
function wT(t, r) {
  let l = -1;
  const i = [];
  let s;
  for (; ++l < t.length; ) {
    const u = t[l];
    let c;
    if (typeof u == "string")
      c = u;
    else switch (u) {
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
        if (!r && s) continue;
        c = " ";
        break;
      }
      default:
        c = String.fromCharCode(u);
    }
    s = u === -2, i.push(c);
  }
  return i.join("");
}
function ST(t) {
  const i = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      e1([bT, ...(t || {}).extensions || []])
    ),
    content: s(U4),
    defined: [],
    document: s(I4),
    flow: s(rT),
    lazy: {},
    string: s(iT),
    text: s(oT)
  };
  return i;
  function s(u) {
    return c;
    function c(d) {
      return vT(i, u, d);
    }
  }
}
function ET(t) {
  for (; !a1(t); )
    ;
  return t;
}
const Py = /[\0\t\n\r]/g;
function kT() {
  let t = 1, r = "", l = !0, i;
  return s;
  function s(u, c, d) {
    const m = [];
    let h, y, g, b, v;
    for (u = r + (typeof u == "string" ? u.toString() : new TextDecoder(c || void 0).decode(u)), g = 0, r = "", l && (u.charCodeAt(0) === 65279 && g++, l = void 0); g < u.length; ) {
      if (Py.lastIndex = g, h = Py.exec(u), b = h && h.index !== void 0 ? h.index : u.length, v = u.charCodeAt(b), !h) {
        r = u.slice(g);
        break;
      }
      if (v === 10 && g === b && i)
        m.push(-3), i = void 0;
      else
        switch (i && (m.push(-5), i = void 0), g < b && (m.push(u.slice(g, b)), t += b - g), v) {
          case 0: {
            m.push(65533), t++;
            break;
          }
          case 9: {
            for (y = Math.ceil(t / 4) * 4, m.push(-2); t++ < y; ) m.push(-1);
            break;
          }
          case 10: {
            m.push(-4), t = 1;
            break;
          }
          default:
            i = !0, t = 1;
        }
      g = b + 1;
    }
    return d && (i && m.push(-5), r && m.push(r), m.push(null)), m;
  }
}
const CT = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function AT(t) {
  return t.replace(CT, TT);
}
function TT(t, r, l) {
  if (r)
    return r;
  if (l.charCodeAt(0) === 35) {
    const s = l.charCodeAt(1), u = s === 120 || s === 88;
    return t1(l.slice(u ? 2 : 1), u ? 16 : 10);
  }
  return Dd(l) || t;
}
const f1 = {}.hasOwnProperty;
function _T(t, r, l) {
  return typeof r != "string" && (l = r, r = void 0), RT(l)(ET(ST(l).document().write(kT()(t, r, !0))));
}
function RT(t) {
  const r = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: u(Fe),
      autolinkProtocol: Z,
      autolinkEmail: Z,
      atxHeading: u(Me),
      blockQuote: u(rt),
      characterEscape: Z,
      characterReference: Z,
      codeFenced: u(bt),
      codeFencedFenceInfo: c,
      codeFencedFenceMeta: c,
      codeIndented: u(bt, c),
      codeText: u(Ce, c),
      codeTextData: Z,
      data: Z,
      codeFlowValue: Z,
      definition: u(Se),
      definitionDestinationString: c,
      definitionLabelString: c,
      definitionTitleString: c,
      emphasis: u(ve),
      hardBreakEscape: u(Ae),
      hardBreakTrailing: u(Ae),
      htmlFlow: u(Ve, c),
      htmlFlowData: Z,
      htmlText: u(Ve, c),
      htmlTextData: Z,
      image: u(kt),
      label: c,
      link: u(Fe),
      listItem: u(ct),
      listItemValue: b,
      listOrdered: u(Ye, g),
      listUnordered: u(Ye),
      paragraph: u(tr),
      reference: k,
      referenceString: c,
      resourceDestinationString: c,
      resourceTitleString: c,
      setextHeading: u(Me),
      strong: u(Mn),
      thematicBreak: u(pt)
    },
    exit: {
      atxHeading: m(),
      atxHeadingSequence: H,
      autolink: m(),
      autolinkEmail: tt,
      autolinkProtocol: Te,
      blockQuote: m(),
      characterEscapeValue: M,
      characterReferenceMarkerHexadecimal: ye,
      characterReferenceMarkerNumeric: ye,
      characterReferenceValue: ue,
      characterReference: ke,
      codeFenced: m(N),
      codeFencedFence: C,
      codeFencedFenceInfo: v,
      codeFencedFenceMeta: A,
      codeFlowValue: M,
      codeIndented: m(T),
      codeText: m(ie),
      codeTextData: M,
      data: M,
      definition: m(),
      definitionDestinationString: Q,
      definitionLabelString: I,
      definitionTitleString: j,
      emphasis: m(),
      hardBreakEscape: m(te),
      hardBreakTrailing: m(te),
      htmlFlow: m(oe),
      htmlFlowData: M,
      htmlText: m(ne),
      htmlTextData: M,
      image: m(W),
      label: ge,
      labelText: G,
      lineEnding: re,
      link: m(B),
      listItem: m(),
      listOrdered: m(),
      listUnordered: m(),
      paragraph: m(),
      referenceString: se,
      resourceDestinationString: w,
      resourceTitleString: X,
      resource: le,
      setextHeading: m(V),
      setextHeadingLineSequence: F,
      setextHeadingText: R,
      strong: m(),
      thematicBreak: m()
    }
  };
  d1(r, (t || {}).mdastExtensions || []);
  const l = {};
  return i;
  function i(Y) {
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
      resume: y,
      data: l
    }, me = [];
    let He = -1;
    for (; ++He < Y.length; )
      if (Y[He][1].type === "listOrdered" || Y[He][1].type === "listUnordered")
        if (Y[He][0] === "enter")
          me.push(He);
        else {
          const _t = me.pop();
          He = s(Y, _t, He);
        }
    for (He = -1; ++He < Y.length; ) {
      const _t = r[Y[He][0]];
      f1.call(_t, Y[He][1].type) && _t[Y[He][1].type].call(Object.assign({
        sliceSerialize: Y[He][2].sliceSerialize
      }, he), Y[He][1]);
    }
    if (he.tokenStack.length > 0) {
      const _t = he.tokenStack[he.tokenStack.length - 1];
      (_t[1] || Yy).call(he, void 0, _t[0]);
    }
    for (ee.position = {
      start: Tr(Y.length > 0 ? Y[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Tr(Y.length > 0 ? Y[Y.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, He = -1; ++He < r.transforms.length; )
      ee = r.transforms[He](ee) || ee;
    return ee;
  }
  function s(Y, ee, he) {
    let me = ee - 1, He = -1, _t = !1, tn, Ut, Sn, Ft;
    for (; ++me <= he; ) {
      const vt = Y[me];
      switch (vt[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          vt[0] === "enter" ? He++ : He--, Ft = void 0;
          break;
        }
        case "lineEndingBlank": {
          vt[0] === "enter" && (tn && !Ft && !He && !Sn && (Sn = me), Ft = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Ft = void 0;
      }
      if (!He && vt[0] === "enter" && vt[1].type === "listItemPrefix" || He === -1 && vt[0] === "exit" && (vt[1].type === "listUnordered" || vt[1].type === "listOrdered")) {
        if (tn) {
          let nn = me;
          for (Ut = void 0; nn--; ) {
            const gn = Y[nn];
            if (gn[1].type === "lineEnding" || gn[1].type === "lineEndingBlank") {
              if (gn[0] === "exit") continue;
              Ut && (Y[Ut][1].type = "lineEndingBlank", _t = !0), gn[1].type = "lineEnding", Ut = nn;
            } else if (!(gn[1].type === "linePrefix" || gn[1].type === "blockQuotePrefix" || gn[1].type === "blockQuotePrefixWhitespace" || gn[1].type === "blockQuoteMarker" || gn[1].type === "listItemIndent")) break;
          }
          Sn && (!Ut || Sn < Ut) && (tn._spread = !0), tn.end = Object.assign({}, Ut ? Y[Ut][1].start : vt[1].end), Y.splice(Ut || me, 0, ["exit", tn, vt[2]]), me++, he++;
        }
        if (vt[1].type === "listItemPrefix") {
          const nn = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, vt[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          tn = nn, Y.splice(me, 0, ["enter", nn, vt[2]]), me++, he++, Sn = void 0, Ft = !0;
        }
      }
    }
    return Y[ee][1]._spread = _t, he;
  }
  function u(Y, ee) {
    return he;
    function he(me) {
      d.call(this, Y(me), me), ee && ee.call(this, me);
    }
  }
  function c() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function d(Y, ee, he) {
    this.stack[this.stack.length - 1].children.push(Y), this.stack.push(Y), this.tokenStack.push([ee, he || void 0]), Y.position = {
      start: Tr(ee.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function m(Y) {
    return ee;
    function ee(he) {
      Y && Y.call(this, he), h.call(this, he);
    }
  }
  function h(Y, ee) {
    const he = this.stack.pop(), me = this.tokenStack.pop();
    if (me)
      me[0].type !== Y.type && (ee ? ee.call(this, Y, me[0]) : (me[1] || Yy).call(this, Y, me[0]));
    else throw new Error("Cannot close `" + Y.type + "` (" + hi({
      start: Y.start,
      end: Y.end
    }) + "): it’s not open");
    he.position.end = Tr(Y.end);
  }
  function y() {
    return Rd(this.stack.pop());
  }
  function g() {
    this.data.expectingFirstListItemValue = !0;
  }
  function b(Y) {
    if (this.data.expectingFirstListItemValue) {
      const ee = this.stack[this.stack.length - 2];
      ee.start = Number.parseInt(this.sliceSerialize(Y), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function v() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.lang = Y;
  }
  function A() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.meta = Y;
  }
  function C() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function N() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.value = Y.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function T() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.value = Y.replace(/(\r?\n|\r)$/g, "");
  }
  function I(Y) {
    const ee = this.resume(), he = this.stack[this.stack.length - 1];
    he.label = ee, he.identifier = xn(this.sliceSerialize(Y)).toLowerCase();
  }
  function j() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.title = Y;
  }
  function Q() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.url = Y;
  }
  function H(Y) {
    const ee = this.stack[this.stack.length - 1];
    if (!ee.depth) {
      const he = this.sliceSerialize(Y).length;
      ee.depth = he;
    }
  }
  function R() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function F(Y) {
    const ee = this.stack[this.stack.length - 1];
    ee.depth = this.sliceSerialize(Y).codePointAt(0) === 61 ? 1 : 2;
  }
  function V() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function Z(Y) {
    const he = this.stack[this.stack.length - 1].children;
    let me = he[he.length - 1];
    (!me || me.type !== "text") && (me = nr(), me.position = {
      start: Tr(Y.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, he.push(me)), this.stack.push(me);
  }
  function M(Y) {
    const ee = this.stack.pop();
    ee.value += this.sliceSerialize(Y), ee.position.end = Tr(Y.end);
  }
  function re(Y) {
    const ee = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const he = ee.children[ee.children.length - 1];
      he.position.end = Tr(Y.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && r.canContainEols.includes(ee.type) && (Z.call(this, Y), M.call(this, Y));
  }
  function te() {
    this.data.atHardBreak = !0;
  }
  function oe() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.value = Y;
  }
  function ne() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.value = Y;
  }
  function ie() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.value = Y;
  }
  function B() {
    const Y = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const ee = this.data.referenceType || "shortcut";
      Y.type += "Reference", Y.referenceType = ee, delete Y.url, delete Y.title;
    } else
      delete Y.identifier, delete Y.label;
    this.data.referenceType = void 0;
  }
  function W() {
    const Y = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const ee = this.data.referenceType || "shortcut";
      Y.type += "Reference", Y.referenceType = ee, delete Y.url, delete Y.title;
    } else
      delete Y.identifier, delete Y.label;
    this.data.referenceType = void 0;
  }
  function G(Y) {
    const ee = this.sliceSerialize(Y), he = this.stack[this.stack.length - 2];
    he.label = AT(ee), he.identifier = xn(ee).toLowerCase();
  }
  function ge() {
    const Y = this.stack[this.stack.length - 1], ee = this.resume(), he = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, he.type === "link") {
      const me = Y.children;
      he.children = me;
    } else
      he.alt = ee;
  }
  function w() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.url = Y;
  }
  function X() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.title = Y;
  }
  function le() {
    this.data.inReference = void 0;
  }
  function k() {
    this.data.referenceType = "collapsed";
  }
  function se(Y) {
    const ee = this.resume(), he = this.stack[this.stack.length - 1];
    he.label = ee, he.identifier = xn(this.sliceSerialize(Y)).toLowerCase(), this.data.referenceType = "full";
  }
  function ye(Y) {
    this.data.characterReferenceType = Y.type;
  }
  function ue(Y) {
    const ee = this.sliceSerialize(Y), he = this.data.characterReferenceType;
    let me;
    he ? (me = t1(ee, he === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : me = Dd(ee);
    const He = this.stack[this.stack.length - 1];
    He.value += me;
  }
  function ke(Y) {
    const ee = this.stack.pop();
    ee.position.end = Tr(Y.end);
  }
  function Te(Y) {
    M.call(this, Y);
    const ee = this.stack[this.stack.length - 1];
    ee.url = this.sliceSerialize(Y);
  }
  function tt(Y) {
    M.call(this, Y);
    const ee = this.stack[this.stack.length - 1];
    ee.url = "mailto:" + this.sliceSerialize(Y);
  }
  function rt() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function bt() {
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
  function ve() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Me() {
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
  function Ye(Y) {
    return {
      type: "list",
      ordered: Y.type === "listOrdered",
      start: null,
      spread: Y._spread,
      children: []
    };
  }
  function ct(Y) {
    return {
      type: "listItem",
      spread: Y._spread,
      checked: null,
      children: []
    };
  }
  function tr() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Mn() {
    return {
      type: "strong",
      children: []
    };
  }
  function nr() {
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
function Tr(t) {
  return {
    line: t.line,
    column: t.column,
    offset: t.offset
  };
}
function d1(t, r) {
  let l = -1;
  for (; ++l < r.length; ) {
    const i = r[l];
    Array.isArray(i) ? d1(t, i) : DT(t, i);
  }
}
function DT(t, r) {
  let l;
  for (l in r)
    if (f1.call(r, l))
      switch (l) {
        case "canContainEols": {
          const i = r[l];
          i && t[l].push(...i);
          break;
        }
        case "transforms": {
          const i = r[l];
          i && t[l].push(...i);
          break;
        }
        case "enter":
        case "exit": {
          const i = r[l];
          i && Object.assign(t[l], i);
          break;
        }
      }
}
function Yy(t, r) {
  throw t ? new Error("Cannot close `" + t.type + "` (" + hi({
    start: t.start,
    end: t.end
  }) + "): a different token (`" + r.type + "`, " + hi({
    start: r.start,
    end: r.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + r.type + "`, " + hi({
    start: r.start,
    end: r.end
  }) + ") is still open");
}
function NT(t) {
  const r = this;
  r.parser = l;
  function l(i) {
    return _T(i, {
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
function OT(t, r) {
  const l = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: t.wrap(t.all(r), !0)
  };
  return t.patch(r, l), t.applyData(r, l);
}
function MT(t, r) {
  const l = { type: "element", tagName: "br", properties: {}, children: [] };
  return t.patch(r, l), [t.applyData(r, l), { type: "text", value: `
` }];
}
function zT(t, r) {
  const l = r.value ? r.value + `
` : "", i = {};
  r.lang && (i.className = ["language-" + r.lang]);
  let s = {
    type: "element",
    tagName: "code",
    properties: i,
    children: [{ type: "text", value: l }]
  };
  return r.meta && (s.data = { meta: r.meta }), t.patch(r, s), s = t.applyData(r, s), s = { type: "element", tagName: "pre", properties: {}, children: [s] }, t.patch(r, s), s;
}
function LT(t, r) {
  const l = {
    type: "element",
    tagName: "del",
    properties: {},
    children: t.all(r)
  };
  return t.patch(r, l), t.applyData(r, l);
}
function jT(t, r) {
  const l = {
    type: "element",
    tagName: "em",
    properties: {},
    children: t.all(r)
  };
  return t.patch(r, l), t.applyData(r, l);
}
function UT(t, r) {
  const l = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", i = String(r.identifier).toUpperCase(), s = ca(i.toLowerCase()), u = t.footnoteOrder.indexOf(i);
  let c, d = t.footnoteCounts.get(i);
  d === void 0 ? (d = 0, t.footnoteOrder.push(i), c = t.footnoteOrder.length) : c = u + 1, d += 1, t.footnoteCounts.set(i, d);
  const m = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + l + "fn-" + s,
      id: l + "fnref-" + s + (d > 1 ? "-" + d : ""),
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
function BT(t, r) {
  const l = {
    type: "element",
    tagName: "h" + r.depth,
    properties: {},
    children: t.all(r)
  };
  return t.patch(r, l), t.applyData(r, l);
}
function IT(t, r) {
  if (t.options.allowDangerousHtml) {
    const l = { type: "raw", value: r.value };
    return t.patch(r, l), t.applyData(r, l);
  }
}
function h1(t, r) {
  const l = r.referenceType;
  let i = "]";
  if (l === "collapsed" ? i += "[]" : l === "full" && (i += "[" + (r.label || r.identifier) + "]"), r.type === "imageReference")
    return [{ type: "text", value: "![" + r.alt + i }];
  const s = t.all(r), u = s[0];
  u && u.type === "text" ? u.value = "[" + u.value : s.unshift({ type: "text", value: "[" });
  const c = s[s.length - 1];
  return c && c.type === "text" ? c.value += i : s.push({ type: "text", value: i }), s;
}
function HT(t, r) {
  const l = String(r.identifier).toUpperCase(), i = t.definitionById.get(l);
  if (!i)
    return h1(t, r);
  const s = { src: ca(i.url || ""), alt: r.alt };
  i.title !== null && i.title !== void 0 && (s.title = i.title);
  const u = { type: "element", tagName: "img", properties: s, children: [] };
  return t.patch(r, u), t.applyData(r, u);
}
function qT(t, r) {
  const l = { src: ca(r.url) };
  r.alt !== null && r.alt !== void 0 && (l.alt = r.alt), r.title !== null && r.title !== void 0 && (l.title = r.title);
  const i = { type: "element", tagName: "img", properties: l, children: [] };
  return t.patch(r, i), t.applyData(r, i);
}
function VT(t, r) {
  const l = { type: "text", value: r.value.replace(/\r?\n|\r/g, " ") };
  t.patch(r, l);
  const i = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [l]
  };
  return t.patch(r, i), t.applyData(r, i);
}
function PT(t, r) {
  const l = String(r.identifier).toUpperCase(), i = t.definitionById.get(l);
  if (!i)
    return h1(t, r);
  const s = { href: ca(i.url || "") };
  i.title !== null && i.title !== void 0 && (s.title = i.title);
  const u = {
    type: "element",
    tagName: "a",
    properties: s,
    children: t.all(r)
  };
  return t.patch(r, u), t.applyData(r, u);
}
function YT(t, r) {
  const l = { href: ca(r.url) };
  r.title !== null && r.title !== void 0 && (l.title = r.title);
  const i = {
    type: "element",
    tagName: "a",
    properties: l,
    children: t.all(r)
  };
  return t.patch(r, i), t.applyData(r, i);
}
function FT(t, r, l) {
  const i = t.all(r), s = l ? GT(l) : p1(r), u = {}, c = [];
  if (typeof r.checked == "boolean") {
    const y = i[0];
    let g;
    y && y.type === "element" && y.tagName === "p" ? g = y : (g = { type: "element", tagName: "p", properties: {}, children: [] }, i.unshift(g)), g.children.length > 0 && g.children.unshift({ type: "text", value: " " }), g.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: r.checked, disabled: !0 },
      children: []
    }), u.className = ["task-list-item"];
  }
  let d = -1;
  for (; ++d < i.length; ) {
    const y = i[d];
    (s || d !== 0 || y.type !== "element" || y.tagName !== "p") && c.push({ type: "text", value: `
` }), y.type === "element" && y.tagName === "p" && !s ? c.push(...y.children) : c.push(y);
  }
  const m = i[i.length - 1];
  m && (s || m.type !== "element" || m.tagName !== "p") && c.push({ type: "text", value: `
` });
  const h = { type: "element", tagName: "li", properties: u, children: c };
  return t.patch(r, h), t.applyData(r, h);
}
function GT(t) {
  let r = !1;
  if (t.type === "list") {
    r = t.spread || !1;
    const l = t.children;
    let i = -1;
    for (; !r && ++i < l.length; )
      r = p1(l[i]);
  }
  return r;
}
function p1(t) {
  const r = t.spread;
  return r ?? t.children.length > 1;
}
function XT(t, r) {
  const l = {}, i = t.all(r);
  let s = -1;
  for (typeof r.start == "number" && r.start !== 1 && (l.start = r.start); ++s < i.length; ) {
    const c = i[s];
    if (c.type === "element" && c.tagName === "li" && c.properties && Array.isArray(c.properties.className) && c.properties.className.includes("task-list-item")) {
      l.className = ["contains-task-list"];
      break;
    }
  }
  const u = {
    type: "element",
    tagName: r.ordered ? "ol" : "ul",
    properties: l,
    children: t.wrap(i, !0)
  };
  return t.patch(r, u), t.applyData(r, u);
}
function QT(t, r) {
  const l = {
    type: "element",
    tagName: "p",
    properties: {},
    children: t.all(r)
  };
  return t.patch(r, l), t.applyData(r, l);
}
function ZT(t, r) {
  const l = { type: "root", children: t.wrap(t.all(r)) };
  return t.patch(r, l), t.applyData(r, l);
}
function KT(t, r) {
  const l = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: t.all(r)
  };
  return t.patch(r, l), t.applyData(r, l);
}
function JT(t, r) {
  const l = t.all(r), i = l.shift(), s = [];
  if (i) {
    const c = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: t.wrap([i], !0)
    };
    t.patch(r.children[0], c), s.push(c);
  }
  if (l.length > 0) {
    const c = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: t.wrap(l, !0)
    }, d = Cd(r.children[1]), m = Xv(r.children[r.children.length - 1]);
    d && m && (c.position = { start: d, end: m }), s.push(c);
  }
  const u = {
    type: "element",
    tagName: "table",
    properties: {},
    children: t.wrap(s, !0)
  };
  return t.patch(r, u), t.applyData(r, u);
}
function $T(t, r, l) {
  const i = l ? l.children : void 0, u = (i ? i.indexOf(r) : 1) === 0 ? "th" : "td", c = l && l.type === "table" ? l.align : void 0, d = c ? c.length : r.children.length;
  let m = -1;
  const h = [];
  for (; ++m < d; ) {
    const g = r.children[m], b = {}, v = c ? c[m] : void 0;
    v && (b.align = v);
    let A = { type: "element", tagName: u, properties: b, children: [] };
    g && (A.children = t.all(g), t.patch(g, A), A = t.applyData(g, A)), h.push(A);
  }
  const y = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: t.wrap(h, !0)
  };
  return t.patch(r, y), t.applyData(r, y);
}
function WT(t, r) {
  const l = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: t.all(r)
  };
  return t.patch(r, l), t.applyData(r, l);
}
const Fy = 9, Gy = 32;
function e5(t) {
  const r = String(t), l = /\r?\n|\r/g;
  let i = l.exec(r), s = 0;
  const u = [];
  for (; i; )
    u.push(
      Xy(r.slice(s, i.index), s > 0, !0),
      i[0]
    ), s = i.index + i[0].length, i = l.exec(r);
  return u.push(Xy(r.slice(s), s > 0, !1)), u.join("");
}
function Xy(t, r, l) {
  let i = 0, s = t.length;
  if (r) {
    let u = t.codePointAt(i);
    for (; u === Fy || u === Gy; )
      i++, u = t.codePointAt(i);
  }
  if (l) {
    let u = t.codePointAt(s - 1);
    for (; u === Fy || u === Gy; )
      s--, u = t.codePointAt(s - 1);
  }
  return s > i ? t.slice(i, s) : "";
}
function t5(t, r) {
  const l = { type: "text", value: e5(String(r.value)) };
  return t.patch(r, l), t.applyData(r, l);
}
function n5(t, r) {
  const l = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return t.patch(r, l), t.applyData(r, l);
}
const r5 = {
  blockquote: OT,
  break: MT,
  code: zT,
  delete: LT,
  emphasis: jT,
  footnoteReference: UT,
  heading: BT,
  html: IT,
  imageReference: HT,
  image: qT,
  inlineCode: VT,
  linkReference: PT,
  link: YT,
  listItem: FT,
  list: XT,
  paragraph: QT,
  // @ts-expect-error: root is different, but hard to type.
  root: ZT,
  strong: KT,
  table: JT,
  tableCell: WT,
  tableRow: $T,
  text: t5,
  thematicBreak: n5,
  toml: Wo,
  yaml: Wo,
  definition: Wo,
  footnoteDefinition: Wo
};
function Wo() {
}
const m1 = -1, Cs = 0, mi = 1, fs = 2, Od = 3, Md = 4, zd = 5, Ld = 6, g1 = 7, y1 = 8, Qy = typeof self == "object" ? self : globalThis, l5 = (t, r) => {
  const l = (s, u) => (t.set(u, s), s), i = (s) => {
    if (t.has(s))
      return t.get(s);
    const [u, c] = r[s];
    switch (u) {
      case Cs:
      case m1:
        return l(c, s);
      case mi: {
        const d = l([], s);
        for (const m of c)
          d.push(i(m));
        return d;
      }
      case fs: {
        const d = l({}, s);
        for (const [m, h] of c)
          d[i(m)] = i(h);
        return d;
      }
      case Od:
        return l(new Date(c), s);
      case Md: {
        const { source: d, flags: m } = c;
        return l(new RegExp(d, m), s);
      }
      case zd: {
        const d = l(/* @__PURE__ */ new Map(), s);
        for (const [m, h] of c)
          d.set(i(m), i(h));
        return d;
      }
      case Ld: {
        const d = l(/* @__PURE__ */ new Set(), s);
        for (const m of c)
          d.add(i(m));
        return d;
      }
      case g1: {
        const { name: d, message: m } = c;
        return l(new Qy[d](m), s);
      }
      case y1:
        return l(BigInt(c), s);
      case "BigInt":
        return l(Object(BigInt(c)), s);
      case "ArrayBuffer":
        return l(new Uint8Array(c).buffer, c);
      case "DataView": {
        const { buffer: d } = new Uint8Array(c);
        return l(new DataView(d), c);
      }
    }
    return l(new Qy[u](c), s);
  };
  return i;
}, Zy = (t) => l5(/* @__PURE__ */ new Map(), t)(0), Jl = "", { toString: a5 } = {}, { keys: i5 } = Object, di = (t) => {
  const r = typeof t;
  if (r !== "object" || !t)
    return [Cs, r];
  const l = a5.call(t).slice(8, -1);
  switch (l) {
    case "Array":
      return [mi, Jl];
    case "Object":
      return [fs, Jl];
    case "Date":
      return [Od, Jl];
    case "RegExp":
      return [Md, Jl];
    case "Map":
      return [zd, Jl];
    case "Set":
      return [Ld, Jl];
    case "DataView":
      return [mi, l];
  }
  return l.includes("Array") ? [mi, l] : l.includes("Error") ? [g1, l] : [fs, l];
}, es = ([t, r]) => t === Cs && (r === "function" || r === "symbol"), o5 = (t, r, l, i) => {
  const s = (c, d) => {
    const m = i.push(c) - 1;
    return l.set(d, m), m;
  }, u = (c) => {
    if (l.has(c))
      return l.get(c);
    let [d, m] = di(c);
    switch (d) {
      case Cs: {
        let y = c;
        switch (m) {
          case "bigint":
            d = y1, y = c.toString();
            break;
          case "function":
          case "symbol":
            if (t)
              throw new TypeError("unable to serialize " + m);
            y = null;
            break;
          case "undefined":
            return s([m1], c);
        }
        return s([d, y], c);
      }
      case mi: {
        if (m) {
          let b = c;
          return m === "DataView" ? b = new Uint8Array(c.buffer) : m === "ArrayBuffer" && (b = new Uint8Array(c)), s([m, [...b]], c);
        }
        const y = [], g = s([d, y], c);
        for (const b of c)
          y.push(u(b));
        return g;
      }
      case fs: {
        if (m)
          switch (m) {
            case "BigInt":
              return s([m, c.toString()], c);
            case "Boolean":
            case "Number":
            case "String":
              return s([m, c.valueOf()], c);
          }
        if (r && "toJSON" in c)
          return u(c.toJSON());
        const y = [], g = s([d, y], c);
        for (const b of i5(c))
          (t || !es(di(c[b]))) && y.push([u(b), u(c[b])]);
        return g;
      }
      case Od:
        return s([d, c.toISOString()], c);
      case Md: {
        const { source: y, flags: g } = c;
        return s([d, { source: y, flags: g }], c);
      }
      case zd: {
        const y = [], g = s([d, y], c);
        for (const [b, v] of c)
          (t || !(es(di(b)) || es(di(v)))) && y.push([u(b), u(v)]);
        return g;
      }
      case Ld: {
        const y = [], g = s([d, y], c);
        for (const b of c)
          (t || !es(di(b))) && y.push(u(b));
        return g;
      }
    }
    const { message: h } = c;
    return s([d, { name: m, message: h }], c);
  };
  return u;
}, Ky = (t, { json: r, lossy: l } = {}) => {
  const i = [];
  return o5(!(r || l), !!r, /* @__PURE__ */ new Map(), i)(t), i;
}, ds = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (t, r) => r && ("json" in r || "lossy" in r) ? Zy(Ky(t, r)) : structuredClone(t)
) : (t, r) => Zy(Ky(t, r));
function s5(t, r) {
  const l = [{ type: "text", value: "↩" }];
  return r > 1 && l.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(r) }]
  }), l;
}
function u5(t, r) {
  return "Back to reference " + (t + 1) + (r > 1 ? "-" + r : "");
}
function c5(t) {
  const r = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", l = t.options.footnoteBackContent || s5, i = t.options.footnoteBackLabel || u5, s = t.options.footnoteLabel || "Footnotes", u = t.options.footnoteLabelTagName || "h2", c = t.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, d = [];
  let m = -1;
  for (; ++m < t.footnoteOrder.length; ) {
    const h = t.footnoteById.get(
      t.footnoteOrder[m]
    );
    if (!h)
      continue;
    const y = t.all(h), g = String(h.identifier).toUpperCase(), b = ca(g.toLowerCase());
    let v = 0;
    const A = [], C = t.footnoteCounts.get(g);
    for (; C !== void 0 && ++v <= C; ) {
      A.length > 0 && A.push({ type: "text", value: " " });
      let I = typeof l == "string" ? l : l(m, v);
      typeof I == "string" && (I = { type: "text", value: I }), A.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + r + "fnref-" + b + (v > 1 ? "-" + v : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof i == "string" ? i : i(m, v),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(I) ? I : [I]
      });
    }
    const N = y[y.length - 1];
    if (N && N.type === "element" && N.tagName === "p") {
      const I = N.children[N.children.length - 1];
      I && I.type === "text" ? I.value += " " : N.children.push({ type: "text", value: " " }), N.children.push(...A);
    } else
      y.push(...A);
    const T = {
      type: "element",
      tagName: "li",
      properties: { id: r + "fn-" + b },
      children: t.wrap(y, !0)
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
          tagName: u,
          properties: {
            ...ds(c),
            id: "footnote-label"
          },
          children: [{ type: "text", value: s }]
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
const As = (
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
      return p5;
    if (typeof t == "function")
      return Ts(t);
    if (typeof t == "object")
      return Array.isArray(t) ? f5(t) : d5(t);
    if (typeof t == "string")
      return h5(t);
    throw new Error("Expected function, string, or object as test");
  }
);
function f5(t) {
  const r = [];
  let l = -1;
  for (; ++l < t.length; )
    r[l] = As(t[l]);
  return Ts(i);
  function i(...s) {
    let u = -1;
    for (; ++u < r.length; )
      if (r[u].apply(this, s)) return !0;
    return !1;
  }
}
function d5(t) {
  const r = (
    /** @type {Record<string, unknown>} */
    t
  );
  return Ts(l);
  function l(i) {
    const s = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      i
    );
    let u;
    for (u in t)
      if (s[u] !== r[u]) return !1;
    return !0;
  }
}
function h5(t) {
  return Ts(r);
  function r(l) {
    return l && l.type === t;
  }
}
function Ts(t) {
  return r;
  function r(l, i, s) {
    return !!(m5(l) && t.call(
      this,
      l,
      typeof i == "number" ? i : void 0,
      s || void 0
    ));
  }
}
function p5() {
  return !0;
}
function m5(t) {
  return t !== null && typeof t == "object" && "type" in t;
}
const b1 = [], g5 = !0, nd = !1, y5 = "skip";
function v1(t, r, l, i) {
  let s;
  typeof r == "function" && typeof l != "function" ? (i = l, l = r) : s = r;
  const u = As(s), c = i ? -1 : 1;
  d(t, void 0, [])();
  function d(m, h, y) {
    const g = (
      /** @type {Record<string, unknown>} */
      m && typeof m == "object" ? m : {}
    );
    if (typeof g.type == "string") {
      const v = (
        // `hast`
        typeof g.tagName == "string" ? g.tagName : (
          // `xast`
          typeof g.name == "string" ? g.name : void 0
        )
      );
      Object.defineProperty(b, "name", {
        value: "node (" + (m.type + (v ? "<" + v + ">" : "")) + ")"
      });
    }
    return b;
    function b() {
      let v = b1, A, C, N;
      if ((!r || u(m, h, y[y.length - 1] || void 0)) && (v = b5(l(m, y)), v[0] === nd))
        return v;
      if ("children" in m && m.children) {
        const T = (
          /** @type {UnistParent} */
          m
        );
        if (T.children && v[0] !== y5)
          for (C = (i ? T.children.length : -1) + c, N = y.concat(T); C > -1 && C < T.children.length; ) {
            const I = T.children[C];
            if (A = d(I, C, N)(), A[0] === nd)
              return A;
            C = typeof A[1] == "number" ? A[1] : C + c;
          }
      }
      return v;
    }
  }
}
function b5(t) {
  return Array.isArray(t) ? t : typeof t == "number" ? [g5, t] : t == null ? b1 : [t];
}
function jd(t, r, l, i) {
  let s, u, c;
  typeof r == "function" ? (u = void 0, c = r, s = l) : (u = r, c = l, s = i), v1(t, u, d, s);
  function d(m, h) {
    const y = h[h.length - 1], g = y ? y.children.indexOf(m) : void 0;
    return c(m, g, y);
  }
}
const rd = {}.hasOwnProperty, v5 = {};
function x5(t, r) {
  const l = r || v5, i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = { ...r5, ...l.handlers }, d = {
    all: h,
    applyData: S5,
    definitionById: i,
    footnoteById: s,
    footnoteCounts: u,
    footnoteOrder: [],
    handlers: c,
    one: m,
    options: l,
    patch: w5,
    wrap: k5
  };
  return jd(t, function(y) {
    if (y.type === "definition" || y.type === "footnoteDefinition") {
      const g = y.type === "definition" ? i : s, b = String(y.identifier).toUpperCase();
      g.has(b) || g.set(b, y);
    }
  }), d;
  function m(y, g) {
    const b = y.type, v = d.handlers[b];
    if (rd.call(d.handlers, b) && v)
      return v(d, y, g);
    if (d.options.passThrough && d.options.passThrough.includes(b)) {
      if ("children" in y) {
        const { children: C, ...N } = y, T = ds(N);
        return T.children = d.all(y), T;
      }
      return ds(y);
    }
    return (d.options.unknownHandler || E5)(d, y, g);
  }
  function h(y) {
    const g = [];
    if ("children" in y) {
      const b = y.children;
      let v = -1;
      for (; ++v < b.length; ) {
        const A = d.one(b[v], y);
        if (A) {
          if (v && b[v - 1].type === "break" && (!Array.isArray(A) && A.type === "text" && (A.value = Jy(A.value)), !Array.isArray(A) && A.type === "element")) {
            const C = A.children[0];
            C && C.type === "text" && (C.value = Jy(C.value));
          }
          Array.isArray(A) ? g.push(...A) : g.push(A);
        }
      }
    }
    return g;
  }
}
function w5(t, r) {
  t.position && (r.position = u4(t));
}
function S5(t, r) {
  let l = r;
  if (t && t.data) {
    const i = t.data.hName, s = t.data.hChildren, u = t.data.hProperties;
    if (typeof i == "string")
      if (l.type === "element")
        l.tagName = i;
      else {
        const c = "children" in l ? l.children : [l];
        l = { type: "element", tagName: i, properties: {}, children: c };
      }
    l.type === "element" && u && Object.assign(l.properties, ds(u)), "children" in l && l.children && s !== null && s !== void 0 && (l.children = s);
  }
  return l;
}
function E5(t, r) {
  const l = r.data || {}, i = "value" in r && !(rd.call(l, "hProperties") || rd.call(l, "hChildren")) ? { type: "text", value: r.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: t.all(r)
  };
  return t.patch(r, i), t.applyData(r, i);
}
function k5(t, r) {
  const l = [];
  let i = -1;
  for (r && l.push({ type: "text", value: `
` }); ++i < t.length; )
    i && l.push({ type: "text", value: `
` }), l.push(t[i]);
  return r && t.length > 0 && l.push({ type: "text", value: `
` }), l;
}
function Jy(t) {
  let r = 0, l = t.charCodeAt(r);
  for (; l === 9 || l === 32; )
    r++, l = t.charCodeAt(r);
  return t.slice(r);
}
function $y(t, r) {
  const l = x5(t, r), i = l.one(t, void 0), s = c5(l), u = Array.isArray(i) ? { type: "root", children: i } : i || { type: "root", children: [] };
  return s && u.children.push({ type: "text", value: `
` }, s), u;
}
function Ud(t, r) {
  return t && "run" in t ? async function(l, i) {
    const s = (
      /** @type {HastRoot} */
      $y(l, { file: i, ...r })
    );
    await t.run(s, i);
  } : function(l, i) {
    return (
      /** @type {HastRoot} */
      $y(l, { file: i, ...t || r })
    );
  };
}
function Wy(t) {
  if (t)
    throw t;
}
var bf, e0;
function C5() {
  if (e0) return bf;
  e0 = 1;
  var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, l = Object.defineProperty, i = Object.getOwnPropertyDescriptor, s = function(h) {
    return typeof Array.isArray == "function" ? Array.isArray(h) : r.call(h) === "[object Array]";
  }, u = function(h) {
    if (!h || r.call(h) !== "[object Object]")
      return !1;
    var y = t.call(h, "constructor"), g = h.constructor && h.constructor.prototype && t.call(h.constructor.prototype, "isPrototypeOf");
    if (h.constructor && !y && !g)
      return !1;
    var b;
    for (b in h)
      ;
    return typeof b > "u" || t.call(h, b);
  }, c = function(h, y) {
    l && y.name === "__proto__" ? l(h, y.name, {
      enumerable: !0,
      configurable: !0,
      value: y.newValue,
      writable: !0
    }) : h[y.name] = y.newValue;
  }, d = function(h, y) {
    if (y === "__proto__")
      if (t.call(h, y)) {
        if (i)
          return i(h, y).value;
      } else return;
    return h[y];
  };
  return bf = function m() {
    var h, y, g, b, v, A, C = arguments[0], N = 1, T = arguments.length, I = !1;
    for (typeof C == "boolean" && (I = C, C = arguments[1] || {}, N = 2), (C == null || typeof C != "object" && typeof C != "function") && (C = {}); N < T; ++N)
      if (h = arguments[N], h != null)
        for (y in h)
          g = d(C, y), b = d(h, y), C !== b && (I && b && (u(b) || (v = s(b))) ? (v ? (v = !1, A = g && s(g) ? g : []) : A = g && u(g) ? g : {}, c(C, { name: y, newValue: m(I, A, b) })) : typeof b < "u" && c(C, { name: y, newValue: b }));
    return C;
  }, bf;
}
var A5 = C5();
const vf = /* @__PURE__ */ ll(A5);
function ld(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const r = Object.getPrototypeOf(t);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}
function T5() {
  const t = [], r = { run: l, use: i };
  return r;
  function l(...s) {
    let u = -1;
    const c = s.pop();
    if (typeof c != "function")
      throw new TypeError("Expected function as last argument, not " + c);
    d(null, ...s);
    function d(m, ...h) {
      const y = t[++u];
      let g = -1;
      if (m) {
        c(m);
        return;
      }
      for (; ++g < s.length; )
        (h[g] === null || h[g] === void 0) && (h[g] = s[g]);
      s = h, y ? _5(y, d)(...h) : c(null, ...h);
    }
  }
  function i(s) {
    if (typeof s != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + s
      );
    return t.push(s), r;
  }
}
function _5(t, r) {
  let l;
  return i;
  function i(...c) {
    const d = t.length > c.length;
    let m;
    d && c.push(s);
    try {
      m = t.apply(this, c);
    } catch (h) {
      const y = (
        /** @type {Error} */
        h
      );
      if (d && l)
        throw y;
      return s(y);
    }
    d || (m && m.then && typeof m.then == "function" ? m.then(u, s) : m instanceof Error ? s(m) : u(m));
  }
  function s(c, ...d) {
    l || (l = !0, r(c, ...d));
  }
  function u(c) {
    s(null, c);
  }
}
const _n = { basename: R5, dirname: D5, extname: N5, join: O5, sep: "/" };
function R5(t, r) {
  if (r !== void 0 && typeof r != "string")
    throw new TypeError('"ext" argument must be a string');
  Ri(t);
  let l = 0, i = -1, s = t.length, u;
  if (r === void 0 || r.length === 0 || r.length > t.length) {
    for (; s--; )
      if (t.codePointAt(s) === 47) {
        if (u) {
          l = s + 1;
          break;
        }
      } else i < 0 && (u = !0, i = s + 1);
    return i < 0 ? "" : t.slice(l, i);
  }
  if (r === t)
    return "";
  let c = -1, d = r.length - 1;
  for (; s--; )
    if (t.codePointAt(s) === 47) {
      if (u) {
        l = s + 1;
        break;
      }
    } else
      c < 0 && (u = !0, c = s + 1), d > -1 && (t.codePointAt(s) === r.codePointAt(d--) ? d < 0 && (i = s) : (d = -1, i = c));
  return l === i ? i = c : i < 0 && (i = t.length), t.slice(l, i);
}
function D5(t) {
  if (Ri(t), t.length === 0)
    return ".";
  let r = -1, l = t.length, i;
  for (; --l; )
    if (t.codePointAt(l) === 47) {
      if (i) {
        r = l;
        break;
      }
    } else i || (i = !0);
  return r < 0 ? t.codePointAt(0) === 47 ? "/" : "." : r === 1 && t.codePointAt(0) === 47 ? "//" : t.slice(0, r);
}
function N5(t) {
  Ri(t);
  let r = t.length, l = -1, i = 0, s = -1, u = 0, c;
  for (; r--; ) {
    const d = t.codePointAt(r);
    if (d === 47) {
      if (c) {
        i = r + 1;
        break;
      }
      continue;
    }
    l < 0 && (c = !0, l = r + 1), d === 46 ? s < 0 ? s = r : u !== 1 && (u = 1) : s > -1 && (u = -1);
  }
  return s < 0 || l < 0 || // We saw a non-dot character immediately before the dot.
  u === 0 || // The (right-most) trimmed path component is exactly `..`.
  u === 1 && s === l - 1 && s === i + 1 ? "" : t.slice(s, l);
}
function O5(...t) {
  let r = -1, l;
  for (; ++r < t.length; )
    Ri(t[r]), t[r] && (l = l === void 0 ? t[r] : l + "/" + t[r]);
  return l === void 0 ? "." : M5(l);
}
function M5(t) {
  Ri(t);
  const r = t.codePointAt(0) === 47;
  let l = z5(t, !r);
  return l.length === 0 && !r && (l = "."), l.length > 0 && t.codePointAt(t.length - 1) === 47 && (l += "/"), r ? "/" + l : l;
}
function z5(t, r) {
  let l = "", i = 0, s = -1, u = 0, c = -1, d, m;
  for (; ++c <= t.length; ) {
    if (c < t.length)
      d = t.codePointAt(c);
    else {
      if (d === 47)
        break;
      d = 47;
    }
    if (d === 47) {
      if (!(s === c - 1 || u === 1)) if (s !== c - 1 && u === 2) {
        if (l.length < 2 || i !== 2 || l.codePointAt(l.length - 1) !== 46 || l.codePointAt(l.length - 2) !== 46) {
          if (l.length > 2) {
            if (m = l.lastIndexOf("/"), m !== l.length - 1) {
              m < 0 ? (l = "", i = 0) : (l = l.slice(0, m), i = l.length - 1 - l.lastIndexOf("/")), s = c, u = 0;
              continue;
            }
          } else if (l.length > 0) {
            l = "", i = 0, s = c, u = 0;
            continue;
          }
        }
        r && (l = l.length > 0 ? l + "/.." : "..", i = 2);
      } else
        l.length > 0 ? l += "/" + t.slice(s + 1, c) : l = t.slice(s + 1, c), i = c - s - 1;
      s = c, u = 0;
    } else d === 46 && u > -1 ? u++ : u = -1;
  }
  return l;
}
function Ri(t) {
  if (typeof t != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(t)
    );
}
const L5 = { cwd: j5 };
function j5() {
  return "/";
}
function ad(t) {
  return !!(t !== null && typeof t == "object" && "href" in t && t.href && "protocol" in t && t.protocol && // @ts-expect-error: indexing is fine.
  t.auth === void 0);
}
function U5(t) {
  if (typeof t == "string")
    t = new URL(t);
  else if (!ad(t)) {
    const r = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + t + "`"
    );
    throw r.code = "ERR_INVALID_ARG_TYPE", r;
  }
  if (t.protocol !== "file:") {
    const r = new TypeError("The URL must be of scheme file");
    throw r.code = "ERR_INVALID_URL_SCHEME", r;
  }
  return B5(t);
}
function B5(t) {
  if (t.hostname !== "") {
    const i = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw i.code = "ERR_INVALID_FILE_URL_HOST", i;
  }
  const r = t.pathname;
  let l = -1;
  for (; ++l < r.length; )
    if (r.codePointAt(l) === 37 && r.codePointAt(l + 1) === 50) {
      const i = r.codePointAt(l + 2);
      if (i === 70 || i === 102) {
        const s = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw s.code = "ERR_INVALID_FILE_URL_PATH", s;
      }
    }
  return decodeURIComponent(r);
}
const xf = (
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
class x1 {
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
    let l;
    r ? ad(r) ? l = { path: r } : typeof r == "string" || I5(r) ? l = { value: r } : l = r : l = {}, this.cwd = "cwd" in l ? "" : L5.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let i = -1;
    for (; ++i < xf.length; ) {
      const u = xf[i];
      u in l && l[u] !== void 0 && l[u] !== null && (this[u] = u === "history" ? [...l[u]] : l[u]);
    }
    let s;
    for (s in l)
      xf.includes(s) || (this[s] = l[s]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? _n.basename(this.path) : void 0;
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
    Sf(r, "basename"), wf(r, "basename"), this.path = _n.join(this.dirname || "", r);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? _n.dirname(this.path) : void 0;
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
    t0(this.basename, "dirname"), this.path = _n.join(r || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? _n.extname(this.path) : void 0;
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
    if (wf(r, "extname"), t0(this.dirname, "extname"), r) {
      if (r.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (r.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = _n.join(this.dirname, this.stem + (r || ""));
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
    ad(r) && (r = U5(r)), Sf(r, "path"), this.path !== r && this.history.push(r);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? _n.basename(this.path, this.extname) : void 0;
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
    Sf(r, "stem"), wf(r, "stem"), this.path = _n.join(this.dirname || "", r + (this.extname || ""));
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
  fail(r, l, i) {
    const s = this.message(r, l, i);
    throw s.fatal = !0, s;
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
  info(r, l, i) {
    const s = this.message(r, l, i);
    return s.fatal = void 0, s;
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
  message(r, l, i) {
    const s = new Mt(
      // @ts-expect-error: the overloads are fine.
      r,
      l,
      i
    );
    return this.path && (s.name = this.path + ":" + s.name, s.file = this.path), s.fatal = !1, this.messages.push(s), s;
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
function wf(t, r) {
  if (t && t.includes(_n.sep))
    throw new Error(
      "`" + r + "` cannot be a path: did not expect `" + _n.sep + "`"
    );
}
function Sf(t, r) {
  if (!t)
    throw new Error("`" + r + "` cannot be empty");
}
function t0(t, r) {
  if (!t)
    throw new Error("Setting `" + r + "` requires `path` to be set too");
}
function I5(t) {
  return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
}
const H5 = (
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
    ), s = i[t], u = function() {
      return s.apply(u, arguments);
    };
    return Object.setPrototypeOf(u, i), u;
  }
), q5 = {}.hasOwnProperty;
class Bd extends H5 {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = T5();
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
      new Bd()
    );
    let l = -1;
    for (; ++l < this.attachers.length; ) {
      const i = this.attachers[l];
      r.use(...i);
    }
    return r.data(vf(!0, {}, this.namespace)), r;
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
  data(r, l) {
    return typeof r == "string" ? arguments.length === 2 ? (Cf("data", this.frozen), this.namespace[r] = l, this) : q5.call(this.namespace, r) && this.namespace[r] || void 0 : r ? (Cf("data", this.frozen), this.namespace = r, this) : this.namespace;
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
      const [l, ...i] = this.attachers[this.freezeIndex];
      if (i[0] === !1)
        continue;
      i[0] === !0 && (i[0] = void 0);
      const s = l.call(r, ...i);
      typeof s == "function" && this.transformers.use(s);
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
    const l = ts(r), i = this.parser || this.Parser;
    return Ef("parse", i), i(String(l), l);
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
  process(r, l) {
    const i = this;
    return this.freeze(), Ef("process", this.parser || this.Parser), kf("process", this.compiler || this.Compiler), l ? s(void 0, l) : new Promise(s);
    function s(u, c) {
      const d = ts(r), m = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        i.parse(d)
      );
      i.run(m, d, function(y, g, b) {
        if (y || !g || !b)
          return h(y);
        const v = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          g
        ), A = i.stringify(v, b);
        Y5(A) ? b.value = A : b.result = A, h(
          y,
          /** @type {VFileWithOutput<CompileResult>} */
          b
        );
      });
      function h(y, g) {
        y || !g ? c(y) : u ? u(g) : l(void 0, g);
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
    let l = !1, i;
    return this.freeze(), Ef("processSync", this.parser || this.Parser), kf("processSync", this.compiler || this.Compiler), this.process(r, s), r0("processSync", "process", l), i;
    function s(u, c) {
      l = !0, Wy(u), i = c;
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
  run(r, l, i) {
    n0(r), this.freeze();
    const s = this.transformers;
    return !i && typeof l == "function" && (i = l, l = void 0), i ? u(void 0, i) : new Promise(u);
    function u(c, d) {
      const m = ts(l);
      s.run(r, m, h);
      function h(y, g, b) {
        const v = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          g || r
        );
        y ? d(y) : c ? c(v) : i(void 0, v, b);
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
  runSync(r, l) {
    let i = !1, s;
    return this.run(r, l, u), r0("runSync", "run", i), s;
    function u(c, d) {
      Wy(c), s = d, i = !0;
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
  stringify(r, l) {
    this.freeze();
    const i = ts(l), s = this.compiler || this.Compiler;
    return kf("stringify", s), n0(r), s(r, i);
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
  use(r, ...l) {
    const i = this.attachers, s = this.namespace;
    if (Cf("use", this.frozen), r != null) if (typeof r == "function")
      m(r, l);
    else if (typeof r == "object")
      Array.isArray(r) ? d(r) : c(r);
    else
      throw new TypeError("Expected usable value, not `" + r + "`");
    return this;
    function u(h) {
      if (typeof h == "function")
        m(h, []);
      else if (typeof h == "object")
        if (Array.isArray(h)) {
          const [y, ...g] = (
            /** @type {PluginTuple<Array<unknown>>} */
            h
          );
          m(y, g);
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
      d(h.plugins), h.settings && (s.settings = vf(!0, s.settings, h.settings));
    }
    function d(h) {
      let y = -1;
      if (h != null) if (Array.isArray(h))
        for (; ++y < h.length; ) {
          const g = h[y];
          u(g);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + h + "`");
    }
    function m(h, y) {
      let g = -1, b = -1;
      for (; ++g < i.length; )
        if (i[g][0] === h) {
          b = g;
          break;
        }
      if (b === -1)
        i.push([h, ...y]);
      else if (y.length > 0) {
        let [v, ...A] = y;
        const C = i[b][1];
        ld(C) && ld(v) && (v = vf(!0, C, v)), i[b] = [h, v, ...A];
      }
    }
  }
}
const V5 = new Bd().freeze();
function Ef(t, r) {
  if (typeof r != "function")
    throw new TypeError("Cannot `" + t + "` without `parser`");
}
function kf(t, r) {
  if (typeof r != "function")
    throw new TypeError("Cannot `" + t + "` without `compiler`");
}
function Cf(t, r) {
  if (r)
    throw new Error(
      "Cannot call `" + t + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function n0(t) {
  if (!ld(t) || typeof t.type != "string")
    throw new TypeError("Expected node, got `" + t + "`");
}
function r0(t, r, l) {
  if (!l)
    throw new Error(
      "`" + t + "` finished async. Use `" + r + "` instead"
    );
}
function ts(t) {
  return P5(t) ? t : new x1(t);
}
function P5(t) {
  return !!(t && typeof t == "object" && "message" in t && "messages" in t);
}
function Y5(t) {
  return typeof t == "string" || F5(t);
}
function F5(t) {
  return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
}
const G5 = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", l0 = [], a0 = { allowDangerousHtml: !0 }, X5 = /^(https?|ircs?|mailto|xmpp)$/i, Q5 = [
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
function w1(t) {
  const r = Z5(t), l = K5(t);
  return J5(r.runSync(r.parse(l), l), t);
}
function Z5(t) {
  const r = t.rehypePlugins || l0, l = t.remarkPlugins || l0, i = t.remarkRehypeOptions ? { ...t.remarkRehypeOptions, ...a0 } : a0;
  return V5().use(NT).use(l).use(Ud, i).use(r);
}
function K5(t) {
  const r = t.children || "", l = new x1();
  return typeof r == "string" && (l.value = r), l;
}
function J5(t, r) {
  const l = r.allowedElements, i = r.allowElement, s = r.components, u = r.disallowedElements, c = r.skipHtml, d = r.unwrapDisallowed, m = r.urlTransform || $5;
  for (const y of Q5)
    Object.hasOwn(r, y.from) && ("" + y.from + (y.to ? "use `" + y.to + "` instead" : "remove it") + G5 + y.id, void 0);
  return jd(t, h), p4(t, {
    Fragment: _.Fragment,
    components: s,
    ignoreInvalidStyle: !0,
    jsx: _.jsx,
    jsxs: _.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function h(y, g, b) {
    if (y.type === "raw" && b && typeof g == "number")
      return c ? b.children.splice(g, 1) : b.children[g] = { type: "text", value: y.value }, g;
    if (y.type === "element") {
      let v;
      for (v in mf)
        if (Object.hasOwn(mf, v) && Object.hasOwn(y.properties, v)) {
          const A = y.properties[v], C = mf[v];
          (C === null || C.includes(y.tagName)) && (y.properties[v] = m(String(A || ""), v, y));
        }
    }
    if (y.type === "element") {
      let v = l ? !l.includes(y.tagName) : u ? u.includes(y.tagName) : !1;
      if (!v && i && typeof g == "number" && (v = !i(y, g, b)), v && b && typeof g == "number")
        return d && y.children ? b.children.splice(g, 1, ...y.children) : b.children.splice(g, 1), g;
    }
  }
}
function $5(t) {
  const r = t.indexOf(":"), l = t.indexOf("?"), i = t.indexOf("#"), s = t.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    r === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    s !== -1 && r > s || l !== -1 && r > l || i !== -1 && r > i || // It is a protocol, it should be allowed.
    X5.test(t.slice(0, r)) ? t : ""
  );
}
function i0(t, r) {
  const l = String(t);
  if (typeof r != "string")
    throw new TypeError("Expected character");
  let i = 0, s = l.indexOf(r);
  for (; s !== -1; )
    i++, s = l.indexOf(r, s + r.length);
  return i;
}
function W5(t) {
  if (typeof t != "string")
    throw new TypeError("Expected a string");
  return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function e6(t, r, l) {
  const s = As((l || {}).ignore || []), u = t6(r);
  let c = -1;
  for (; ++c < u.length; )
    v1(t, "text", d);
  function d(h, y) {
    let g = -1, b;
    for (; ++g < y.length; ) {
      const v = y[g], A = b ? b.children : void 0;
      if (s(
        v,
        A ? A.indexOf(v) : void 0,
        b
      ))
        return;
      b = v;
    }
    if (b)
      return m(h, y);
  }
  function m(h, y) {
    const g = y[y.length - 1], b = u[c][0], v = u[c][1];
    let A = 0;
    const N = g.children.indexOf(h);
    let T = !1, I = [];
    b.lastIndex = 0;
    let j = b.exec(h.value);
    for (; j; ) {
      const Q = j.index, H = {
        index: j.index,
        input: j.input,
        stack: [...y, h]
      };
      let R = v(...j, H);
      if (typeof R == "string" && (R = R.length > 0 ? { type: "text", value: R } : void 0), R === !1 ? b.lastIndex = Q + 1 : (A !== Q && I.push({
        type: "text",
        value: h.value.slice(A, Q)
      }), Array.isArray(R) ? I.push(...R) : R && I.push(R), A = Q + j[0].length, T = !0), !b.global)
        break;
      j = b.exec(h.value);
    }
    return T ? (A < h.value.length && I.push({ type: "text", value: h.value.slice(A) }), g.children.splice(N, 1, ...I)) : I = [h], N + I.length;
  }
}
function t6(t) {
  const r = [];
  if (!Array.isArray(t))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const l = !t[0] || Array.isArray(t[0]) ? t : [t];
  let i = -1;
  for (; ++i < l.length; ) {
    const s = l[i];
    r.push([n6(s[0]), r6(s[1])]);
  }
  return r;
}
function n6(t) {
  return typeof t == "string" ? new RegExp(W5(t), "g") : t;
}
function r6(t) {
  return typeof t == "function" ? t : function() {
    return t;
  };
}
const Af = "phrasing", Tf = ["autolink", "link", "image", "label"];
function l6() {
  return {
    transforms: [f6],
    enter: {
      literalAutolink: i6,
      literalAutolinkEmail: _f,
      literalAutolinkHttp: _f,
      literalAutolinkWww: _f
    },
    exit: {
      literalAutolink: c6,
      literalAutolinkEmail: u6,
      literalAutolinkHttp: o6,
      literalAutolinkWww: s6
    }
  };
}
function a6() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Af,
        notInConstruct: Tf
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Af,
        notInConstruct: Tf
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Af,
        notInConstruct: Tf
      }
    ]
  };
}
function i6(t) {
  this.enter({ type: "link", title: null, url: "", children: [] }, t);
}
function _f(t) {
  this.config.enter.autolinkProtocol.call(this, t);
}
function o6(t) {
  this.config.exit.autolinkProtocol.call(this, t);
}
function s6(t) {
  this.config.exit.data.call(this, t);
  const r = this.stack[this.stack.length - 1];
  r.type, r.url = "http://" + this.sliceSerialize(t);
}
function u6(t) {
  this.config.exit.autolinkEmail.call(this, t);
}
function c6(t) {
  this.exit(t);
}
function f6(t) {
  e6(
    t,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, d6],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), h6]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function d6(t, r, l, i, s) {
  let u = "";
  if (!S1(s) || (/^w/i.test(r) && (l = r + l, r = "", u = "http://"), !p6(l)))
    return !1;
  const c = m6(l + i);
  if (!c[0]) return !1;
  const d = {
    type: "link",
    title: null,
    url: u + r + c[0],
    children: [{ type: "text", value: r + c[0] }]
  };
  return c[1] ? [d, { type: "text", value: c[1] }] : d;
}
function h6(t, r, l, i) {
  return (
    // Not an expected previous character.
    !S1(i, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(l) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + r + "@" + l,
      children: [{ type: "text", value: r + "@" + l }]
    }
  );
}
function p6(t) {
  const r = t.split(".");
  return !(r.length < 2 || r[r.length - 1] && (/_/.test(r[r.length - 1]) || !/[a-zA-Z\d]/.test(r[r.length - 1])) || r[r.length - 2] && (/_/.test(r[r.length - 2]) || !/[a-zA-Z\d]/.test(r[r.length - 2])));
}
function m6(t) {
  const r = /[!"&'),.:;<>?\]}]+$/.exec(t);
  if (!r)
    return [t, void 0];
  t = t.slice(0, r.index);
  let l = r[0], i = l.indexOf(")");
  const s = i0(t, "(");
  let u = i0(t, ")");
  for (; i !== -1 && s > u; )
    t += l.slice(0, i + 1), l = l.slice(i + 1), i = l.indexOf(")"), u++;
  return [t, l];
}
function S1(t, r) {
  const l = t.input.charCodeAt(t.index - 1);
  return (t.index === 0 || rl(l) || Es(l)) && // If it’s an email, the previous character should not be a slash.
  (!r || l !== 47);
}
E1.peek = k6;
function g6() {
  this.buffer();
}
function y6(t) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, t);
}
function b6() {
  this.buffer();
}
function v6(t) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    t
  );
}
function x6(t) {
  const r = this.resume(), l = this.stack[this.stack.length - 1];
  l.type, l.identifier = xn(
    this.sliceSerialize(t)
  ).toLowerCase(), l.label = r;
}
function w6(t) {
  this.exit(t);
}
function S6(t) {
  const r = this.resume(), l = this.stack[this.stack.length - 1];
  l.type, l.identifier = xn(
    this.sliceSerialize(t)
  ).toLowerCase(), l.label = r;
}
function E6(t) {
  this.exit(t);
}
function k6() {
  return "[";
}
function E1(t, r, l, i) {
  const s = l.createTracker(i);
  let u = s.move("[^");
  const c = l.enter("footnoteReference"), d = l.enter("reference");
  return u += s.move(
    l.safe(l.associationId(t), { after: "]", before: u })
  ), d(), c(), u += s.move("]"), u;
}
function C6() {
  return {
    enter: {
      gfmFootnoteCallString: g6,
      gfmFootnoteCall: y6,
      gfmFootnoteDefinitionLabelString: b6,
      gfmFootnoteDefinition: v6
    },
    exit: {
      gfmFootnoteCallString: x6,
      gfmFootnoteCall: w6,
      gfmFootnoteDefinitionLabelString: S6,
      gfmFootnoteDefinition: E6
    }
  };
}
function A6(t) {
  let r = !1;
  return t && t.firstLineBlank && (r = !0), {
    handlers: { footnoteDefinition: l, footnoteReference: E1 },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function l(i, s, u, c) {
    const d = u.createTracker(c);
    let m = d.move("[^");
    const h = u.enter("footnoteDefinition"), y = u.enter("label");
    return m += d.move(
      u.safe(u.associationId(i), { before: m, after: "]" })
    ), y(), m += d.move("]:"), i.children && i.children.length > 0 && (d.shift(4), m += d.move(
      (r ? `
` : " ") + u.indentLines(
        u.containerFlow(i, d.current()),
        r ? k1 : T6
      )
    )), h(), m;
  }
}
function T6(t, r, l) {
  return r === 0 ? t : k1(t, r, l);
}
function k1(t, r, l) {
  return (l ? "" : "    ") + t;
}
const _6 = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
C1.peek = M6;
function R6() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: N6 },
    exit: { strikethrough: O6 }
  };
}
function D6() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: _6
      }
    ],
    handlers: { delete: C1 }
  };
}
function N6(t) {
  this.enter({ type: "delete", children: [] }, t);
}
function O6(t) {
  this.exit(t);
}
function C1(t, r, l, i) {
  const s = l.createTracker(i), u = l.enter("strikethrough");
  let c = s.move("~~");
  return c += l.containerPhrasing(t, {
    ...s.current(),
    before: c,
    after: "~"
  }), c += s.move("~~"), u(), c;
}
function M6() {
  return "~";
}
function z6(t) {
  return t.length;
}
function L6(t, r) {
  const l = r || {}, i = (l.align || []).concat(), s = l.stringLength || z6, u = [], c = [], d = [], m = [];
  let h = 0, y = -1;
  for (; ++y < t.length; ) {
    const C = [], N = [];
    let T = -1;
    for (t[y].length > h && (h = t[y].length); ++T < t[y].length; ) {
      const I = j6(t[y][T]);
      if (l.alignDelimiters !== !1) {
        const j = s(I);
        N[T] = j, (m[T] === void 0 || j > m[T]) && (m[T] = j);
      }
      C.push(I);
    }
    c[y] = C, d[y] = N;
  }
  let g = -1;
  if (typeof i == "object" && "length" in i)
    for (; ++g < h; )
      u[g] = o0(i[g]);
  else {
    const C = o0(i);
    for (; ++g < h; )
      u[g] = C;
  }
  g = -1;
  const b = [], v = [];
  for (; ++g < h; ) {
    const C = u[g];
    let N = "", T = "";
    C === 99 ? (N = ":", T = ":") : C === 108 ? N = ":" : C === 114 && (T = ":");
    let I = l.alignDelimiters === !1 ? 1 : Math.max(
      1,
      m[g] - N.length - T.length
    );
    const j = N + "-".repeat(I) + T;
    l.alignDelimiters !== !1 && (I = N.length + I + T.length, I > m[g] && (m[g] = I), v[g] = I), b[g] = j;
  }
  c.splice(1, 0, b), d.splice(1, 0, v), y = -1;
  const A = [];
  for (; ++y < c.length; ) {
    const C = c[y], N = d[y];
    g = -1;
    const T = [];
    for (; ++g < h; ) {
      const I = C[g] || "";
      let j = "", Q = "";
      if (l.alignDelimiters !== !1) {
        const H = m[g] - (N[g] || 0), R = u[g];
        R === 114 ? j = " ".repeat(H) : R === 99 ? H % 2 ? (j = " ".repeat(H / 2 + 0.5), Q = " ".repeat(H / 2 - 0.5)) : (j = " ".repeat(H / 2), Q = j) : Q = " ".repeat(H);
      }
      l.delimiterStart !== !1 && !g && T.push("|"), l.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(l.alignDelimiters === !1 && I === "") && (l.delimiterStart !== !1 || g) && T.push(" "), l.alignDelimiters !== !1 && T.push(j), T.push(I), l.alignDelimiters !== !1 && T.push(Q), l.padding !== !1 && T.push(" "), (l.delimiterEnd !== !1 || g !== h - 1) && T.push("|");
    }
    A.push(
      l.delimiterEnd === !1 ? T.join("").replace(/ +$/, "") : T.join("")
    );
  }
  return A.join(`
`);
}
function j6(t) {
  return t == null ? "" : String(t);
}
function o0(t) {
  const r = typeof t == "string" ? t.codePointAt(0) : 0;
  return r === 67 || r === 99 ? 99 : r === 76 || r === 108 ? 108 : r === 82 || r === 114 ? 114 : 0;
}
function U6(t, r, l, i) {
  const s = l.enter("blockquote"), u = l.createTracker(i);
  u.move("> "), u.shift(2);
  const c = l.indentLines(
    l.containerFlow(t, u.current()),
    B6
  );
  return s(), c;
}
function B6(t, r, l) {
  return ">" + (l ? "" : " ") + t;
}
function I6(t, r) {
  return s0(t, r.inConstruct, !0) && !s0(t, r.notInConstruct, !1);
}
function s0(t, r, l) {
  if (typeof r == "string" && (r = [r]), !r || r.length === 0)
    return l;
  let i = -1;
  for (; ++i < r.length; )
    if (t.includes(r[i]))
      return !0;
  return !1;
}
function u0(t, r, l, i) {
  let s = -1;
  for (; ++s < l.unsafe.length; )
    if (l.unsafe[s].character === `
` && I6(l.stack, l.unsafe[s]))
      return /[ \t]/.test(i.before) ? "" : " ";
  return `\\
`;
}
function H6(t, r) {
  const l = String(t);
  let i = l.indexOf(r), s = i, u = 0, c = 0;
  if (typeof r != "string")
    throw new TypeError("Expected substring");
  for (; i !== -1; )
    i === s ? ++u > c && (c = u) : u = 1, s = i + r.length, i = l.indexOf(r, s);
  return c;
}
function q6(t, r) {
  return !!(r.options.fences === !1 && t.value && // If there’s no info…
  !t.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(t.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value));
}
function V6(t) {
  const r = t.options.fence || "`";
  if (r !== "`" && r !== "~")
    throw new Error(
      "Cannot serialize code with `" + r + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return r;
}
function P6(t, r, l, i) {
  const s = V6(l), u = t.value || "", c = s === "`" ? "GraveAccent" : "Tilde";
  if (q6(t, l)) {
    const g = l.enter("codeIndented"), b = l.indentLines(u, Y6);
    return g(), b;
  }
  const d = l.createTracker(i), m = s.repeat(Math.max(H6(u, s) + 1, 3)), h = l.enter("codeFenced");
  let y = d.move(m);
  if (t.lang) {
    const g = l.enter(`codeFencedLang${c}`);
    y += d.move(
      l.safe(t.lang, {
        before: y,
        after: " ",
        encode: ["`"],
        ...d.current()
      })
    ), g();
  }
  if (t.lang && t.meta) {
    const g = l.enter(`codeFencedMeta${c}`);
    y += d.move(" "), y += d.move(
      l.safe(t.meta, {
        before: y,
        after: `
`,
        encode: ["`"],
        ...d.current()
      })
    ), g();
  }
  return y += d.move(`
`), u && (y += d.move(u + `
`)), y += d.move(m), h(), y;
}
function Y6(t, r, l) {
  return (l ? "" : "    ") + t;
}
function Id(t) {
  const r = t.options.quote || '"';
  if (r !== '"' && r !== "'")
    throw new Error(
      "Cannot serialize title with `" + r + "` for `options.quote`, expected `\"`, or `'`"
    );
  return r;
}
function F6(t, r, l, i) {
  const s = Id(l), u = s === '"' ? "Quote" : "Apostrophe", c = l.enter("definition");
  let d = l.enter("label");
  const m = l.createTracker(i);
  let h = m.move("[");
  return h += m.move(
    l.safe(l.associationId(t), {
      before: h,
      after: "]",
      ...m.current()
    })
  ), h += m.move("]: "), d(), // If there’s no url, or…
  !t.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (d = l.enter("destinationLiteral"), h += m.move("<"), h += m.move(
    l.safe(t.url, { before: h, after: ">", ...m.current() })
  ), h += m.move(">")) : (d = l.enter("destinationRaw"), h += m.move(
    l.safe(t.url, {
      before: h,
      after: t.title ? " " : `
`,
      ...m.current()
    })
  )), d(), t.title && (d = l.enter(`title${u}`), h += m.move(" " + s), h += m.move(
    l.safe(t.title, {
      before: h,
      after: s,
      ...m.current()
    })
  ), h += m.move(s), d()), c(), h;
}
function G6(t) {
  const r = t.options.emphasis || "*";
  if (r !== "*" && r !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + r + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return r;
}
function Ei(t) {
  return "&#x" + t.toString(16).toUpperCase() + ";";
}
function hs(t, r, l) {
  const i = ia(t), s = ia(r);
  return i === void 0 ? s === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    l === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : s === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : i === 1 ? s === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : s === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : s === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : s === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
A1.peek = X6;
function A1(t, r, l, i) {
  const s = G6(l), u = l.enter("emphasis"), c = l.createTracker(i), d = c.move(s);
  let m = c.move(
    l.containerPhrasing(t, {
      after: s,
      before: d,
      ...c.current()
    })
  );
  const h = m.charCodeAt(0), y = hs(
    i.before.charCodeAt(i.before.length - 1),
    h,
    s
  );
  y.inside && (m = Ei(h) + m.slice(1));
  const g = m.charCodeAt(m.length - 1), b = hs(i.after.charCodeAt(0), g, s);
  b.inside && (m = m.slice(0, -1) + Ei(g));
  const v = c.move(s);
  return u(), l.attentionEncodeSurroundingInfo = {
    after: b.outside,
    before: y.outside
  }, d + m + v;
}
function X6(t, r, l) {
  return l.options.emphasis || "*";
}
function Q6(t, r) {
  let l = !1;
  return jd(t, function(i) {
    if ("value" in i && /\r?\n|\r/.test(i.value) || i.type === "break")
      return l = !0, nd;
  }), !!((!t.depth || t.depth < 3) && Rd(t) && (r.options.setext || l));
}
function Z6(t, r, l, i) {
  const s = Math.max(Math.min(6, t.depth || 1), 1), u = l.createTracker(i);
  if (Q6(t, l)) {
    const y = l.enter("headingSetext"), g = l.enter("phrasing"), b = l.containerPhrasing(t, {
      ...u.current(),
      before: `
`,
      after: `
`
    });
    return g(), y(), b + `
` + (s === 1 ? "=" : "-").repeat(
      // The whole size…
      b.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(b.lastIndexOf("\r"), b.lastIndexOf(`
`)) + 1)
    );
  }
  const c = "#".repeat(s), d = l.enter("headingAtx"), m = l.enter("phrasing");
  u.move(c + " ");
  let h = l.containerPhrasing(t, {
    before: "# ",
    after: `
`,
    ...u.current()
  });
  return /^[\t ]/.test(h) && (h = Ei(h.charCodeAt(0)) + h.slice(1)), h = h ? c + " " + h : c, l.options.closeAtx && (h += " " + c), m(), d(), h;
}
T1.peek = K6;
function T1(t) {
  return t.value || "";
}
function K6() {
  return "<";
}
_1.peek = J6;
function _1(t, r, l, i) {
  const s = Id(l), u = s === '"' ? "Quote" : "Apostrophe", c = l.enter("image");
  let d = l.enter("label");
  const m = l.createTracker(i);
  let h = m.move("![");
  return h += m.move(
    l.safe(t.alt, { before: h, after: "]", ...m.current() })
  ), h += m.move("]("), d(), // If there’s no url but there is a title…
  !t.url && t.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (d = l.enter("destinationLiteral"), h += m.move("<"), h += m.move(
    l.safe(t.url, { before: h, after: ">", ...m.current() })
  ), h += m.move(">")) : (d = l.enter("destinationRaw"), h += m.move(
    l.safe(t.url, {
      before: h,
      after: t.title ? " " : ")",
      ...m.current()
    })
  )), d(), t.title && (d = l.enter(`title${u}`), h += m.move(" " + s), h += m.move(
    l.safe(t.title, {
      before: h,
      after: s,
      ...m.current()
    })
  ), h += m.move(s), d()), h += m.move(")"), c(), h;
}
function J6() {
  return "!";
}
R1.peek = $6;
function R1(t, r, l, i) {
  const s = t.referenceType, u = l.enter("imageReference");
  let c = l.enter("label");
  const d = l.createTracker(i);
  let m = d.move("![");
  const h = l.safe(t.alt, {
    before: m,
    after: "]",
    ...d.current()
  });
  m += d.move(h + "]["), c();
  const y = l.stack;
  l.stack = [], c = l.enter("reference");
  const g = l.safe(l.associationId(t), {
    before: m,
    after: "]",
    ...d.current()
  });
  return c(), l.stack = y, u(), s === "full" || !h || h !== g ? m += d.move(g + "]") : s === "shortcut" ? m = m.slice(0, -1) : m += d.move("]"), m;
}
function $6() {
  return "!";
}
D1.peek = W6;
function D1(t, r, l) {
  let i = t.value || "", s = "`", u = -1;
  for (; new RegExp("(^|[^`])" + s + "([^`]|$)").test(i); )
    s += "`";
  for (/[^ \r\n]/.test(i) && (/^[ \r\n]/.test(i) && /[ \r\n]$/.test(i) || /^`|`$/.test(i)) && (i = " " + i + " "); ++u < l.unsafe.length; ) {
    const c = l.unsafe[u], d = l.compilePattern(c);
    let m;
    if (c.atBreak)
      for (; m = d.exec(i); ) {
        let h = m.index;
        i.charCodeAt(h) === 10 && i.charCodeAt(h - 1) === 13 && h--, i = i.slice(0, h) + " " + i.slice(m.index + 1);
      }
  }
  return s + i + s;
}
function W6() {
  return "`";
}
function N1(t, r) {
  const l = Rd(t);
  return !!(!r.options.resourceLink && // If there’s a url…
  t.url && // And there’s a no title…
  !t.title && // And the content of `node` is a single text node…
  t.children && t.children.length === 1 && t.children[0].type === "text" && // And if the url is the same as the content…
  (l === t.url || "mailto:" + l === t.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(t.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(t.url));
}
O1.peek = e_;
function O1(t, r, l, i) {
  const s = Id(l), u = s === '"' ? "Quote" : "Apostrophe", c = l.createTracker(i);
  let d, m;
  if (N1(t, l)) {
    const y = l.stack;
    l.stack = [], d = l.enter("autolink");
    let g = c.move("<");
    return g += c.move(
      l.containerPhrasing(t, {
        before: g,
        after: ">",
        ...c.current()
      })
    ), g += c.move(">"), d(), l.stack = y, g;
  }
  d = l.enter("link"), m = l.enter("label");
  let h = c.move("[");
  return h += c.move(
    l.containerPhrasing(t, {
      before: h,
      after: "](",
      ...c.current()
    })
  ), h += c.move("]("), m(), // If there’s no url but there is a title…
  !t.url && t.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (m = l.enter("destinationLiteral"), h += c.move("<"), h += c.move(
    l.safe(t.url, { before: h, after: ">", ...c.current() })
  ), h += c.move(">")) : (m = l.enter("destinationRaw"), h += c.move(
    l.safe(t.url, {
      before: h,
      after: t.title ? " " : ")",
      ...c.current()
    })
  )), m(), t.title && (m = l.enter(`title${u}`), h += c.move(" " + s), h += c.move(
    l.safe(t.title, {
      before: h,
      after: s,
      ...c.current()
    })
  ), h += c.move(s), m()), h += c.move(")"), d(), h;
}
function e_(t, r, l) {
  return N1(t, l) ? "<" : "[";
}
M1.peek = t_;
function M1(t, r, l, i) {
  const s = t.referenceType, u = l.enter("linkReference");
  let c = l.enter("label");
  const d = l.createTracker(i);
  let m = d.move("[");
  const h = l.containerPhrasing(t, {
    before: m,
    after: "]",
    ...d.current()
  });
  m += d.move(h + "]["), c();
  const y = l.stack;
  l.stack = [], c = l.enter("reference");
  const g = l.safe(l.associationId(t), {
    before: m,
    after: "]",
    ...d.current()
  });
  return c(), l.stack = y, u(), s === "full" || !h || h !== g ? m += d.move(g + "]") : s === "shortcut" ? m = m.slice(0, -1) : m += d.move("]"), m;
}
function t_() {
  return "[";
}
function Hd(t) {
  const r = t.options.bullet || "*";
  if (r !== "*" && r !== "+" && r !== "-")
    throw new Error(
      "Cannot serialize items with `" + r + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return r;
}
function n_(t) {
  const r = Hd(t), l = t.options.bulletOther;
  if (!l)
    return r === "*" ? "-" : "*";
  if (l !== "*" && l !== "+" && l !== "-")
    throw new Error(
      "Cannot serialize items with `" + l + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (l === r)
    throw new Error(
      "Expected `bullet` (`" + r + "`) and `bulletOther` (`" + l + "`) to be different"
    );
  return l;
}
function r_(t) {
  const r = t.options.bulletOrdered || ".";
  if (r !== "." && r !== ")")
    throw new Error(
      "Cannot serialize items with `" + r + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return r;
}
function z1(t) {
  const r = t.options.rule || "*";
  if (r !== "*" && r !== "-" && r !== "_")
    throw new Error(
      "Cannot serialize rules with `" + r + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return r;
}
function l_(t, r, l, i) {
  const s = l.enter("list"), u = l.bulletCurrent;
  let c = t.ordered ? r_(l) : Hd(l);
  const d = t.ordered ? c === "." ? ")" : "." : n_(l);
  let m = r && l.bulletLastUsed ? c === l.bulletLastUsed : !1;
  if (!t.ordered) {
    const y = t.children ? t.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (c === "*" || c === "-") && // Empty first list item:
      y && (!y.children || !y.children[0]) && // Directly in two other list items:
      l.stack[l.stack.length - 1] === "list" && l.stack[l.stack.length - 2] === "listItem" && l.stack[l.stack.length - 3] === "list" && l.stack[l.stack.length - 4] === "listItem" && // That are each the first child.
      l.indexStack[l.indexStack.length - 1] === 0 && l.indexStack[l.indexStack.length - 2] === 0 && l.indexStack[l.indexStack.length - 3] === 0 && (m = !0), z1(l) === c && y
    ) {
      let g = -1;
      for (; ++g < t.children.length; ) {
        const b = t.children[g];
        if (b && b.type === "listItem" && b.children && b.children[0] && b.children[0].type === "thematicBreak") {
          m = !0;
          break;
        }
      }
    }
  }
  m && (c = d), l.bulletCurrent = c;
  const h = l.containerFlow(t, i);
  return l.bulletLastUsed = c, l.bulletCurrent = u, s(), h;
}
function a_(t) {
  const r = t.options.listItemIndent || "one";
  if (r !== "tab" && r !== "one" && r !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + r + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return r;
}
function i_(t, r, l, i) {
  const s = a_(l);
  let u = l.bulletCurrent || Hd(l);
  r && r.type === "list" && r.ordered && (u = (typeof r.start == "number" && r.start > -1 ? r.start : 1) + (l.options.incrementListMarker === !1 ? 0 : r.children.indexOf(t)) + u);
  let c = u.length + 1;
  (s === "tab" || s === "mixed" && (r && r.type === "list" && r.spread || t.spread)) && (c = Math.ceil(c / 4) * 4);
  const d = l.createTracker(i);
  d.move(u + " ".repeat(c - u.length)), d.shift(c);
  const m = l.enter("listItem"), h = l.indentLines(
    l.containerFlow(t, d.current()),
    y
  );
  return m(), h;
  function y(g, b, v) {
    return b ? (v ? "" : " ".repeat(c)) + g : (v ? u : u + " ".repeat(c - u.length)) + g;
  }
}
function o_(t, r, l, i) {
  const s = l.enter("paragraph"), u = l.enter("phrasing"), c = l.containerPhrasing(t, i);
  return u(), s(), c;
}
const s_ = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  As([
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
function u_(t, r, l, i) {
  return (t.children.some(function(c) {
    return s_(c);
  }) ? l.containerPhrasing : l.containerFlow).call(l, t, i);
}
function c_(t) {
  const r = t.options.strong || "*";
  if (r !== "*" && r !== "_")
    throw new Error(
      "Cannot serialize strong with `" + r + "` for `options.strong`, expected `*`, or `_`"
    );
  return r;
}
L1.peek = f_;
function L1(t, r, l, i) {
  const s = c_(l), u = l.enter("strong"), c = l.createTracker(i), d = c.move(s + s);
  let m = c.move(
    l.containerPhrasing(t, {
      after: s,
      before: d,
      ...c.current()
    })
  );
  const h = m.charCodeAt(0), y = hs(
    i.before.charCodeAt(i.before.length - 1),
    h,
    s
  );
  y.inside && (m = Ei(h) + m.slice(1));
  const g = m.charCodeAt(m.length - 1), b = hs(i.after.charCodeAt(0), g, s);
  b.inside && (m = m.slice(0, -1) + Ei(g));
  const v = c.move(s + s);
  return u(), l.attentionEncodeSurroundingInfo = {
    after: b.outside,
    before: y.outside
  }, d + m + v;
}
function f_(t, r, l) {
  return l.options.strong || "*";
}
function d_(t, r, l, i) {
  return l.safe(t.value, i);
}
function h_(t) {
  const r = t.options.ruleRepetition || 3;
  if (r < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + r + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return r;
}
function p_(t, r, l) {
  const i = (z1(l) + (l.options.ruleSpaces ? " " : "")).repeat(h_(l));
  return l.options.ruleSpaces ? i.slice(0, -1) : i;
}
const j1 = {
  blockquote: U6,
  break: u0,
  code: P6,
  definition: F6,
  emphasis: A1,
  hardBreak: u0,
  heading: Z6,
  html: T1,
  image: _1,
  imageReference: R1,
  inlineCode: D1,
  link: O1,
  linkReference: M1,
  list: l_,
  listItem: i_,
  paragraph: o_,
  root: u_,
  strong: L1,
  text: d_,
  thematicBreak: p_
};
function m_() {
  return {
    enter: {
      table: g_,
      tableData: c0,
      tableHeader: c0,
      tableRow: b_
    },
    exit: {
      codeText: v_,
      table: y_,
      tableData: Rf,
      tableHeader: Rf,
      tableRow: Rf
    }
  };
}
function g_(t) {
  const r = t._align;
  this.enter(
    {
      type: "table",
      align: r.map(function(l) {
        return l === "none" ? null : l;
      }),
      children: []
    },
    t
  ), this.data.inTable = !0;
}
function y_(t) {
  this.exit(t), this.data.inTable = void 0;
}
function b_(t) {
  this.enter({ type: "tableRow", children: [] }, t);
}
function Rf(t) {
  this.exit(t);
}
function c0(t) {
  this.enter({ type: "tableCell", children: [] }, t);
}
function v_(t) {
  let r = this.resume();
  this.data.inTable && (r = r.replace(/\\([\\|])/g, x_));
  const l = this.stack[this.stack.length - 1];
  l.type, l.value = r, this.exit(t);
}
function x_(t, r) {
  return r === "|" ? r : t;
}
function w_(t) {
  const r = t || {}, l = r.tableCellPadding, i = r.tablePipeAlign, s = r.stringLength, u = l ? " " : "|";
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
  function c(v, A, C, N) {
    return h(y(v, C, N), v.align);
  }
  function d(v, A, C, N) {
    const T = g(v, C, N), I = h([T]);
    return I.slice(0, I.indexOf(`
`));
  }
  function m(v, A, C, N) {
    const T = C.enter("tableCell"), I = C.enter("phrasing"), j = C.containerPhrasing(v, {
      ...N,
      before: u,
      after: u
    });
    return I(), T(), j;
  }
  function h(v, A) {
    return L6(v, {
      align: A,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: i,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: l,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: s
    });
  }
  function y(v, A, C) {
    const N = v.children;
    let T = -1;
    const I = [], j = A.enter("table");
    for (; ++T < N.length; )
      I[T] = g(N[T], A, C);
    return j(), I;
  }
  function g(v, A, C) {
    const N = v.children;
    let T = -1;
    const I = [], j = A.enter("tableRow");
    for (; ++T < N.length; )
      I[T] = m(N[T], v, A, C);
    return j(), I;
  }
  function b(v, A, C) {
    let N = j1.inlineCode(v, A, C);
    return C.stack.includes("tableCell") && (N = N.replace(/\|/g, "\\$&")), N;
  }
}
function S_() {
  return {
    exit: {
      taskListCheckValueChecked: f0,
      taskListCheckValueUnchecked: f0,
      paragraph: k_
    }
  };
}
function E_() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: C_ }
  };
}
function f0(t) {
  const r = this.stack[this.stack.length - 2];
  r.type, r.checked = t.type === "taskListCheckValueChecked";
}
function k_(t) {
  const r = this.stack[this.stack.length - 2];
  if (r && r.type === "listItem" && typeof r.checked == "boolean") {
    const l = this.stack[this.stack.length - 1];
    l.type;
    const i = l.children[0];
    if (i && i.type === "text") {
      const s = r.children;
      let u = -1, c;
      for (; ++u < s.length; ) {
        const d = s[u];
        if (d.type === "paragraph") {
          c = d;
          break;
        }
      }
      c === l && (i.value = i.value.slice(1), i.value.length === 0 ? l.children.shift() : l.position && i.position && typeof i.position.start.offset == "number" && (i.position.start.column++, i.position.start.offset++, l.position.start = Object.assign({}, i.position.start)));
    }
  }
  this.exit(t);
}
function C_(t, r, l, i) {
  const s = t.children[0], u = typeof t.checked == "boolean" && s && s.type === "paragraph", c = "[" + (t.checked ? "x" : " ") + "] ", d = l.createTracker(i);
  u && d.move(c);
  let m = j1.listItem(t, r, l, {
    ...i,
    ...d.current()
  });
  return u && (m = m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, h)), m;
  function h(y) {
    return y + c;
  }
}
function A_() {
  return [
    l6(),
    C6(),
    R6(),
    m_(),
    S_()
  ];
}
function T_(t) {
  return {
    extensions: [
      a6(),
      A6(t),
      D6(),
      w_(t),
      E_()
    ]
  };
}
const __ = {
  tokenize: z_,
  partial: !0
}, U1 = {
  tokenize: L_,
  partial: !0
}, B1 = {
  tokenize: j_,
  partial: !0
}, I1 = {
  tokenize: U_,
  partial: !0
}, R_ = {
  tokenize: B_,
  partial: !0
}, H1 = {
  name: "wwwAutolink",
  tokenize: O_,
  previous: V1
}, q1 = {
  name: "protocolAutolink",
  tokenize: M_,
  previous: P1
}, er = {
  name: "emailAutolink",
  tokenize: N_,
  previous: Y1
}, On = {};
function D_() {
  return {
    text: On
  };
}
let Wr = 48;
for (; Wr < 123; )
  On[Wr] = er, Wr++, Wr === 58 ? Wr = 65 : Wr === 91 && (Wr = 97);
On[43] = er;
On[45] = er;
On[46] = er;
On[95] = er;
On[72] = [er, q1];
On[104] = [er, q1];
On[87] = [er, H1];
On[119] = [er, H1];
function N_(t, r, l) {
  const i = this;
  let s, u;
  return c;
  function c(g) {
    return !id(g) || !Y1.call(i, i.previous) || qd(i.events) ? l(g) : (t.enter("literalAutolink"), t.enter("literalAutolinkEmail"), d(g));
  }
  function d(g) {
    return id(g) ? (t.consume(g), d) : g === 64 ? (t.consume(g), m) : l(g);
  }
  function m(g) {
    return g === 46 ? t.check(R_, y, h)(g) : g === 45 || g === 95 || Ot(g) ? (u = !0, t.consume(g), m) : y(g);
  }
  function h(g) {
    return t.consume(g), s = !0, m;
  }
  function y(g) {
    return u && s && jt(i.previous) ? (t.exit("literalAutolinkEmail"), t.exit("literalAutolink"), r(g)) : l(g);
  }
}
function O_(t, r, l) {
  const i = this;
  return s;
  function s(c) {
    return c !== 87 && c !== 119 || !V1.call(i, i.previous) || qd(i.events) ? l(c) : (t.enter("literalAutolink"), t.enter("literalAutolinkWww"), t.check(__, t.attempt(U1, t.attempt(B1, u), l), l)(c));
  }
  function u(c) {
    return t.exit("literalAutolinkWww"), t.exit("literalAutolink"), r(c);
  }
}
function M_(t, r, l) {
  const i = this;
  let s = "", u = !1;
  return c;
  function c(g) {
    return (g === 72 || g === 104) && P1.call(i, i.previous) && !qd(i.events) ? (t.enter("literalAutolink"), t.enter("literalAutolinkHttp"), s += String.fromCodePoint(g), t.consume(g), d) : l(g);
  }
  function d(g) {
    if (jt(g) && s.length < 5)
      return s += String.fromCodePoint(g), t.consume(g), d;
    if (g === 58) {
      const b = s.toLowerCase();
      if (b === "http" || b === "https")
        return t.consume(g), m;
    }
    return l(g);
  }
  function m(g) {
    return g === 47 ? (t.consume(g), u ? h : (u = !0, m)) : l(g);
  }
  function h(g) {
    return g === null || cs(g) || $e(g) || rl(g) || Es(g) ? l(g) : t.attempt(U1, t.attempt(B1, y), l)(g);
  }
  function y(g) {
    return t.exit("literalAutolinkHttp"), t.exit("literalAutolink"), r(g);
  }
}
function z_(t, r, l) {
  let i = 0;
  return s;
  function s(c) {
    return (c === 87 || c === 119) && i < 3 ? (i++, t.consume(c), s) : c === 46 && i === 3 ? (t.consume(c), u) : l(c);
  }
  function u(c) {
    return c === null ? l(c) : r(c);
  }
}
function L_(t, r, l) {
  let i, s, u;
  return c;
  function c(h) {
    return h === 46 || h === 95 ? t.check(I1, m, d)(h) : h === null || $e(h) || rl(h) || h !== 45 && Es(h) ? m(h) : (u = !0, t.consume(h), c);
  }
  function d(h) {
    return h === 95 ? i = !0 : (s = i, i = void 0), t.consume(h), c;
  }
  function m(h) {
    return s || i || !u ? l(h) : r(h);
  }
}
function j_(t, r) {
  let l = 0, i = 0;
  return s;
  function s(c) {
    return c === 40 ? (l++, t.consume(c), s) : c === 41 && i < l ? u(c) : c === 33 || c === 34 || c === 38 || c === 39 || c === 41 || c === 42 || c === 44 || c === 46 || c === 58 || c === 59 || c === 60 || c === 63 || c === 93 || c === 95 || c === 126 ? t.check(I1, r, u)(c) : c === null || $e(c) || rl(c) ? r(c) : (t.consume(c), s);
  }
  function u(c) {
    return c === 41 && i++, t.consume(c), s;
  }
}
function U_(t, r, l) {
  return i;
  function i(d) {
    return d === 33 || d === 34 || d === 39 || d === 41 || d === 42 || d === 44 || d === 46 || d === 58 || d === 59 || d === 63 || d === 95 || d === 126 ? (t.consume(d), i) : d === 38 ? (t.consume(d), u) : d === 93 ? (t.consume(d), s) : (
      // `<` is an end.
      d === 60 || // So is whitespace.
      d === null || $e(d) || rl(d) ? r(d) : l(d)
    );
  }
  function s(d) {
    return d === null || d === 40 || d === 91 || $e(d) || rl(d) ? r(d) : i(d);
  }
  function u(d) {
    return jt(d) ? c(d) : l(d);
  }
  function c(d) {
    return d === 59 ? (t.consume(d), i) : jt(d) ? (t.consume(d), c) : l(d);
  }
}
function B_(t, r, l) {
  return i;
  function i(u) {
    return t.consume(u), s;
  }
  function s(u) {
    return Ot(u) ? l(u) : r(u);
  }
}
function V1(t) {
  return t === null || t === 40 || t === 42 || t === 95 || t === 91 || t === 93 || t === 126 || $e(t);
}
function P1(t) {
  return !jt(t);
}
function Y1(t) {
  return !(t === 47 || id(t));
}
function id(t) {
  return t === 43 || t === 45 || t === 46 || t === 95 || Ot(t);
}
function qd(t) {
  let r = t.length, l = !1;
  for (; r--; ) {
    const i = t[r][1];
    if ((i.type === "labelLink" || i.type === "labelImage") && !i._balanced) {
      l = !0;
      break;
    }
    if (i._gfmAutolinkLiteralWalkedInto) {
      l = !1;
      break;
    }
  }
  return t.length > 0 && !l && (t[t.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), l;
}
const I_ = {
  tokenize: X_,
  partial: !0
};
function H_() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Y_,
        continuation: {
          tokenize: F_
        },
        exit: G_
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: P_
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: q_,
        resolveTo: V_
      }
    }
  };
}
function q_(t, r, l) {
  const i = this;
  let s = i.events.length;
  const u = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
  let c;
  for (; s--; ) {
    const m = i.events[s][1];
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
      return l(m);
    const h = xn(i.sliceSerialize({
      start: c.end,
      end: i.now()
    }));
    return h.codePointAt(0) !== 94 || !u.includes(h.slice(1)) ? l(m) : (t.enter("gfmFootnoteCallLabelMarker"), t.consume(m), t.exit("gfmFootnoteCallLabelMarker"), r(m));
  }
}
function V_(t, r) {
  let l = t.length;
  for (; l--; )
    if (t[l][1].type === "labelImage" && t[l][0] === "enter") {
      t[l][1];
      break;
    }
  t[l + 1][1].type = "data", t[l + 3][1].type = "gfmFootnoteCallLabelMarker";
  const i = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, t[l + 3][1].start),
    end: Object.assign({}, t[t.length - 1][1].end)
  }, s = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, t[l + 3][1].end),
    end: Object.assign({}, t[l + 3][1].end)
  };
  s.end.column++, s.end.offset++, s.end._bufferIndex++;
  const u = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, s.end),
    end: Object.assign({}, t[t.length - 1][1].start)
  }, c = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, u.start),
    end: Object.assign({}, u.end)
  }, d = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    t[l + 1],
    t[l + 2],
    ["enter", i, r],
    // The `[`
    t[l + 3],
    t[l + 4],
    // The `^`.
    ["enter", s, r],
    ["exit", s, r],
    // Everything in between.
    ["enter", u, r],
    ["enter", c, r],
    ["exit", c, r],
    ["exit", u, r],
    // The ending (`]`, properly parsed and labelled).
    t[t.length - 2],
    t[t.length - 1],
    ["exit", i, r]
  ];
  return t.splice(l, t.length - l + 1, ...d), t;
}
function P_(t, r, l) {
  const i = this, s = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
  let u = 0, c;
  return d;
  function d(g) {
    return t.enter("gfmFootnoteCall"), t.enter("gfmFootnoteCallLabelMarker"), t.consume(g), t.exit("gfmFootnoteCallLabelMarker"), m;
  }
  function m(g) {
    return g !== 94 ? l(g) : (t.enter("gfmFootnoteCallMarker"), t.consume(g), t.exit("gfmFootnoteCallMarker"), t.enter("gfmFootnoteCallString"), t.enter("chunkString").contentType = "string", h);
  }
  function h(g) {
    if (
      // Too long.
      u > 999 || // Closing brace with nothing.
      g === 93 && !c || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      g === null || g === 91 || $e(g)
    )
      return l(g);
    if (g === 93) {
      t.exit("chunkString");
      const b = t.exit("gfmFootnoteCallString");
      return s.includes(xn(i.sliceSerialize(b))) ? (t.enter("gfmFootnoteCallLabelMarker"), t.consume(g), t.exit("gfmFootnoteCallLabelMarker"), t.exit("gfmFootnoteCall"), r) : l(g);
    }
    return $e(g) || (c = !0), u++, t.consume(g), g === 92 ? y : h;
  }
  function y(g) {
    return g === 91 || g === 92 || g === 93 ? (t.consume(g), u++, h) : h(g);
  }
}
function Y_(t, r, l) {
  const i = this, s = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
  let u, c = 0, d;
  return m;
  function m(A) {
    return t.enter("gfmFootnoteDefinition")._container = !0, t.enter("gfmFootnoteDefinitionLabel"), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(A), t.exit("gfmFootnoteDefinitionLabelMarker"), h;
  }
  function h(A) {
    return A === 94 ? (t.enter("gfmFootnoteDefinitionMarker"), t.consume(A), t.exit("gfmFootnoteDefinitionMarker"), t.enter("gfmFootnoteDefinitionLabelString"), t.enter("chunkString").contentType = "string", y) : l(A);
  }
  function y(A) {
    if (
      // Too long.
      c > 999 || // Closing brace with nothing.
      A === 93 && !d || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      A === null || A === 91 || $e(A)
    )
      return l(A);
    if (A === 93) {
      t.exit("chunkString");
      const C = t.exit("gfmFootnoteDefinitionLabelString");
      return u = xn(i.sliceSerialize(C)), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(A), t.exit("gfmFootnoteDefinitionLabelMarker"), t.exit("gfmFootnoteDefinitionLabel"), b;
    }
    return $e(A) || (d = !0), c++, t.consume(A), A === 92 ? g : y;
  }
  function g(A) {
    return A === 91 || A === 92 || A === 93 ? (t.consume(A), c++, y) : y(A);
  }
  function b(A) {
    return A === 58 ? (t.enter("definitionMarker"), t.consume(A), t.exit("definitionMarker"), s.includes(u) || s.push(u), Be(t, v, "gfmFootnoteDefinitionWhitespace")) : l(A);
  }
  function v(A) {
    return r(A);
  }
}
function F_(t, r, l) {
  return t.check(_i, r, t.attempt(I_, r, l));
}
function G_(t) {
  t.exit("gfmFootnoteDefinition");
}
function X_(t, r, l) {
  const i = this;
  return Be(t, s, "gfmFootnoteDefinitionIndent", 5);
  function s(u) {
    const c = i.events[i.events.length - 1];
    return c && c[1].type === "gfmFootnoteDefinitionIndent" && c[2].sliceSerialize(c[1], !0).length === 4 ? r(u) : l(u);
  }
}
function Q_(t) {
  let l = (t || {}).singleTilde;
  const i = {
    name: "strikethrough",
    tokenize: u,
    resolveAll: s
  };
  return l == null && (l = !0), {
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
  function s(c, d) {
    let m = -1;
    for (; ++m < c.length; )
      if (c[m][0] === "enter" && c[m][1].type === "strikethroughSequenceTemporary" && c[m][1]._close) {
        let h = m;
        for (; h--; )
          if (c[h][0] === "exit" && c[h][1].type === "strikethroughSequenceTemporary" && c[h][1]._open && // If the sizes are the same:
          c[m][1].end.offset - c[m][1].start.offset === c[h][1].end.offset - c[h][1].start.offset) {
            c[m][1].type = "strikethroughSequence", c[h][1].type = "strikethroughSequence";
            const y = {
              type: "strikethrough",
              start: Object.assign({}, c[h][1].start),
              end: Object.assign({}, c[m][1].end)
            }, g = {
              type: "strikethroughText",
              start: Object.assign({}, c[h][1].end),
              end: Object.assign({}, c[m][1].start)
            }, b = [["enter", y, d], ["enter", c[h][1], d], ["exit", c[h][1], d], ["enter", g, d]], v = d.parser.constructs.insideSpan.null;
            v && en(b, b.length, 0, ks(v, c.slice(h + 1, m), d)), en(b, b.length, 0, [["exit", g, d], ["enter", c[m][1], d], ["exit", c[m][1], d], ["exit", y, d]]), en(c, h - 1, m - h + 3, b), m = h + b.length - 2;
            break;
          }
      }
    for (m = -1; ++m < c.length; )
      c[m][1].type === "strikethroughSequenceTemporary" && (c[m][1].type = "data");
    return c;
  }
  function u(c, d, m) {
    const h = this.previous, y = this.events;
    let g = 0;
    return b;
    function b(A) {
      return h === 126 && y[y.length - 1][1].type !== "characterEscape" ? m(A) : (c.enter("strikethroughSequenceTemporary"), v(A));
    }
    function v(A) {
      const C = ia(h);
      if (A === 126)
        return g > 1 ? m(A) : (c.consume(A), g++, v);
      if (g < 2 && !l) return m(A);
      const N = c.exit("strikethroughSequenceTemporary"), T = ia(A);
      return N._open = !T || T === 2 && !!C, N._close = !C || C === 2 && !!T, d(A);
    }
  }
}
class Z_ {
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
  add(r, l, i) {
    K_(this, r, l, i);
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
    if (this.map.sort(function(u, c) {
      return u[0] - c[0];
    }), this.map.length === 0)
      return;
    let l = this.map.length;
    const i = [];
    for (; l > 0; )
      l -= 1, i.push(r.slice(this.map[l][0] + this.map[l][1]), this.map[l][2]), r.length = this.map[l][0];
    i.push(r.slice()), r.length = 0;
    let s = i.pop();
    for (; s; ) {
      for (const u of s)
        r.push(u);
      s = i.pop();
    }
    this.map.length = 0;
  }
}
function K_(t, r, l, i) {
  let s = 0;
  if (!(l === 0 && i.length === 0)) {
    for (; s < t.map.length; ) {
      if (t.map[s][0] === r) {
        t.map[s][1] += l, t.map[s][2].push(...i);
        return;
      }
      s += 1;
    }
    t.map.push([r, l, i]);
  }
}
function J_(t, r) {
  let l = !1;
  const i = [];
  for (; r < t.length; ) {
    const s = t[r];
    if (l) {
      if (s[0] === "enter")
        s[1].type === "tableContent" && i.push(t[r + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (s[1].type === "tableContent") {
        if (t[r - 1][1].type === "tableDelimiterMarker") {
          const u = i.length - 1;
          i[u] = i[u] === "left" ? "center" : "right";
        }
      } else if (s[1].type === "tableDelimiterRow")
        break;
    } else s[0] === "enter" && s[1].type === "tableDelimiterRow" && (l = !0);
    r += 1;
  }
  return i;
}
function $_() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: W_,
        resolveAll: eR
      }
    }
  };
}
function W_(t, r, l) {
  const i = this;
  let s = 0, u = 0, c;
  return d;
  function d(M) {
    let re = i.events.length - 1;
    for (; re > -1; ) {
      const ne = i.events[re][1].type;
      if (ne === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      ne === "linePrefix") re--;
      else break;
    }
    const te = re > -1 ? i.events[re][1].type : null, oe = te === "tableHead" || te === "tableRow" ? R : m;
    return oe === R && i.parser.lazy[i.now().line] ? l(M) : oe(M);
  }
  function m(M) {
    return t.enter("tableHead"), t.enter("tableRow"), h(M);
  }
  function h(M) {
    return M === 124 || (c = !0, u += 1), y(M);
  }
  function y(M) {
    return M === null ? l(M) : be(M) ? u > 1 ? (u = 0, i.interrupt = !0, t.exit("tableRow"), t.enter("lineEnding"), t.consume(M), t.exit("lineEnding"), v) : l(M) : je(M) ? Be(t, y, "whitespace")(M) : (u += 1, c && (c = !1, s += 1), M === 124 ? (t.enter("tableCellDivider"), t.consume(M), t.exit("tableCellDivider"), c = !0, y) : (t.enter("data"), g(M)));
  }
  function g(M) {
    return M === null || M === 124 || $e(M) ? (t.exit("data"), y(M)) : (t.consume(M), M === 92 ? b : g);
  }
  function b(M) {
    return M === 92 || M === 124 ? (t.consume(M), g) : g(M);
  }
  function v(M) {
    return i.interrupt = !1, i.parser.lazy[i.now().line] ? l(M) : (t.enter("tableDelimiterRow"), c = !1, je(M) ? Be(t, A, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(M) : A(M));
  }
  function A(M) {
    return M === 45 || M === 58 ? N(M) : M === 124 ? (c = !0, t.enter("tableCellDivider"), t.consume(M), t.exit("tableCellDivider"), C) : H(M);
  }
  function C(M) {
    return je(M) ? Be(t, N, "whitespace")(M) : N(M);
  }
  function N(M) {
    return M === 58 ? (u += 1, c = !0, t.enter("tableDelimiterMarker"), t.consume(M), t.exit("tableDelimiterMarker"), T) : M === 45 ? (u += 1, T(M)) : M === null || be(M) ? Q(M) : H(M);
  }
  function T(M) {
    return M === 45 ? (t.enter("tableDelimiterFiller"), I(M)) : H(M);
  }
  function I(M) {
    return M === 45 ? (t.consume(M), I) : M === 58 ? (c = !0, t.exit("tableDelimiterFiller"), t.enter("tableDelimiterMarker"), t.consume(M), t.exit("tableDelimiterMarker"), j) : (t.exit("tableDelimiterFiller"), j(M));
  }
  function j(M) {
    return je(M) ? Be(t, Q, "whitespace")(M) : Q(M);
  }
  function Q(M) {
    return M === 124 ? A(M) : M === null || be(M) ? !c || s !== u ? H(M) : (t.exit("tableDelimiterRow"), t.exit("tableHead"), r(M)) : H(M);
  }
  function H(M) {
    return l(M);
  }
  function R(M) {
    return t.enter("tableRow"), F(M);
  }
  function F(M) {
    return M === 124 ? (t.enter("tableCellDivider"), t.consume(M), t.exit("tableCellDivider"), F) : M === null || be(M) ? (t.exit("tableRow"), r(M)) : je(M) ? Be(t, F, "whitespace")(M) : (t.enter("data"), V(M));
  }
  function V(M) {
    return M === null || M === 124 || $e(M) ? (t.exit("data"), F(M)) : (t.consume(M), M === 92 ? Z : V);
  }
  function Z(M) {
    return M === 92 || M === 124 ? (t.consume(M), V) : V(M);
  }
}
function eR(t, r) {
  let l = -1, i = !0, s = 0, u = [0, 0, 0, 0], c = [0, 0, 0, 0], d = !1, m = 0, h, y, g;
  const b = new Z_();
  for (; ++l < t.length; ) {
    const v = t[l], A = v[1];
    v[0] === "enter" ? A.type === "tableHead" ? (d = !1, m !== 0 && (d0(b, r, m, h, y), y = void 0, m = 0), h = {
      type: "table",
      start: Object.assign({}, A.start),
      // Note: correct end is set later.
      end: Object.assign({}, A.end)
    }, b.add(l, 0, [["enter", h, r]])) : A.type === "tableRow" || A.type === "tableDelimiterRow" ? (i = !0, g = void 0, u = [0, 0, 0, 0], c = [0, l + 1, 0, 0], d && (d = !1, y = {
      type: "tableBody",
      start: Object.assign({}, A.start),
      // Note: correct end is set later.
      end: Object.assign({}, A.end)
    }, b.add(l, 0, [["enter", y, r]])), s = A.type === "tableDelimiterRow" ? 2 : y ? 3 : 1) : s && (A.type === "data" || A.type === "tableDelimiterMarker" || A.type === "tableDelimiterFiller") ? (i = !1, c[2] === 0 && (u[1] !== 0 && (c[0] = c[1], g = ns(b, r, u, s, void 0, g), u = [0, 0, 0, 0]), c[2] = l)) : A.type === "tableCellDivider" && (i ? i = !1 : (u[1] !== 0 && (c[0] = c[1], g = ns(b, r, u, s, void 0, g)), u = c, c = [u[1], l, 0, 0])) : A.type === "tableHead" ? (d = !0, m = l) : A.type === "tableRow" || A.type === "tableDelimiterRow" ? (m = l, u[1] !== 0 ? (c[0] = c[1], g = ns(b, r, u, s, l, g)) : c[1] !== 0 && (g = ns(b, r, c, s, l, g)), s = 0) : s && (A.type === "data" || A.type === "tableDelimiterMarker" || A.type === "tableDelimiterFiller") && (c[3] = l);
  }
  for (m !== 0 && d0(b, r, m, h, y), b.consume(r.events), l = -1; ++l < r.events.length; ) {
    const v = r.events[l];
    v[0] === "enter" && v[1].type === "table" && (v[1]._align = J_(r.events, l));
  }
  return t;
}
function ns(t, r, l, i, s, u) {
  const c = i === 1 ? "tableHeader" : i === 2 ? "tableDelimiter" : "tableData", d = "tableContent";
  l[0] !== 0 && (u.end = Object.assign({}, $l(r.events, l[0])), t.add(l[0], 0, [["exit", u, r]]));
  const m = $l(r.events, l[1]);
  if (u = {
    type: c,
    start: Object.assign({}, m),
    // Note: correct end is set later.
    end: Object.assign({}, m)
  }, t.add(l[1], 0, [["enter", u, r]]), l[2] !== 0) {
    const h = $l(r.events, l[2]), y = $l(r.events, l[3]), g = {
      type: d,
      start: Object.assign({}, h),
      end: Object.assign({}, y)
    };
    if (t.add(l[2], 0, [["enter", g, r]]), i !== 2) {
      const b = r.events[l[2]], v = r.events[l[3]];
      if (b[1].end = Object.assign({}, v[1].end), b[1].type = "chunkText", b[1].contentType = "text", l[3] > l[2] + 1) {
        const A = l[2] + 1, C = l[3] - l[2] - 1;
        t.add(A, C, []);
      }
    }
    t.add(l[3] + 1, 0, [["exit", g, r]]);
  }
  return s !== void 0 && (u.end = Object.assign({}, $l(r.events, s)), t.add(s, 0, [["exit", u, r]]), u = void 0), u;
}
function d0(t, r, l, i, s) {
  const u = [], c = $l(r.events, l);
  s && (s.end = Object.assign({}, c), u.push(["exit", s, r])), i.end = Object.assign({}, c), u.push(["exit", i, r]), t.add(l + 1, 0, u);
}
function $l(t, r) {
  const l = t[r], i = l[0] === "enter" ? "start" : "end";
  return l[1][i];
}
const tR = {
  name: "tasklistCheck",
  tokenize: rR
};
function nR() {
  return {
    text: {
      91: tR
    }
  };
}
function rR(t, r, l) {
  const i = this;
  return s;
  function s(m) {
    return (
      // Exit if there’s stuff before.
      i.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !i._gfmTasklistFirstContentOfListItem ? l(m) : (t.enter("taskListCheck"), t.enter("taskListCheckMarker"), t.consume(m), t.exit("taskListCheckMarker"), u)
    );
  }
  function u(m) {
    return $e(m) ? (t.enter("taskListCheckValueUnchecked"), t.consume(m), t.exit("taskListCheckValueUnchecked"), c) : m === 88 || m === 120 ? (t.enter("taskListCheckValueChecked"), t.consume(m), t.exit("taskListCheckValueChecked"), c) : l(m);
  }
  function c(m) {
    return m === 93 ? (t.enter("taskListCheckMarker"), t.consume(m), t.exit("taskListCheckMarker"), t.exit("taskListCheck"), d) : l(m);
  }
  function d(m) {
    return be(m) ? r(m) : je(m) ? t.check({
      tokenize: lR
    }, r, l)(m) : l(m);
  }
}
function lR(t, r, l) {
  return Be(t, i, "whitespace");
  function i(s) {
    return s === null ? l(s) : r(s);
  }
}
function aR(t) {
  return e1([
    D_(),
    H_(),
    Q_(t),
    $_(),
    nR()
  ]);
}
const iR = {};
function F1(t) {
  const r = (
    /** @type {Processor<Root>} */
    this
  ), l = t || iR, i = r.data(), s = i.micromarkExtensions || (i.micromarkExtensions = []), u = i.fromMarkdownExtensions || (i.fromMarkdownExtensions = []), c = i.toMarkdownExtensions || (i.toMarkdownExtensions = []);
  s.push(aR(l)), u.push(A_()), c.push(T_(l));
}
function h0({
  courses: t,
  learningPaths: r,
  altName: l
}) {
  const [i, s] = E.useState([]), u = (c) => {
    s(
      (d) => d.includes(c) ? d.filter((m) => m !== c) : [...d, c]
    );
  };
  return /* @__PURE__ */ _.jsxs("div", { children: [
    t && t.length > 0 && /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col gap-3 py-3", children: [
      /* @__PURE__ */ _.jsx("h3", { className: "section-title course w-min", children: l ?? "Cursos" }),
      t.map((c) => /* @__PURE__ */ _.jsxs(
        "a",
        {
          href: c.url,
          target: "_blank",
          className: "item no-children",
          type: "button",
          onClick: (d) => d.stopPropagation(),
          children: [
            /* @__PURE__ */ _.jsx("a", { href: c.url, children: c.name }),
            /* @__PURE__ */ _.jsx(ny, { className: "text-gray-500", size: 18 })
          ]
        },
        c.id
      ))
    ] }),
    r && r.length > 0 && /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col gap-3 py-3", children: [
      /* @__PURE__ */ _.jsx("h3", { className: "section-title route mb-2 w-min", children: "Rutas " }),
      r.map((c) => /* @__PURE__ */ _.jsxs(
        "div",
        {
          className: `item p-4 ${i.includes(c.id) ? "expanded" : ""}`,
          role: "button",
          tabIndex: 0,
          onClick: () => u(c.id),
          children: [
            /* @__PURE__ */ _.jsxs("div", { className: "flex cursor-pointer items-center justify-between w-full", children: [
              /* @__PURE__ */ _.jsx("h4", { className: "text-start", children: c.title }),
              i.includes(c.id) ? /* @__PURE__ */ _.jsx(cE, { className: "text-gray-500", size: 18 }) : /* @__PURE__ */ _.jsx(oE, { className: "text-gray-500", size: 18 })
            ] }),
            i.includes(c.id) && /* @__PURE__ */ _.jsx("ul", { className: "mt-2 w-full", children: c.courses.map((d, m) => /* @__PURE__ */ _.jsxs("li", { className: "relative flex items-center gap-2", children: [
              m !== 0 && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
                /* @__PURE__ */ _.jsx("div", { className: "absolute left-[5px] top-[-0px] h-[50%] w-[2px] bg-[#475D92]" }),
                /* @__PURE__ */ _.jsx("div", { className: "absolute left-[5px] top-[-50%] h-[100%] w-[2px] bg-[#475D92]" })
              ] }),
              /* @__PURE__ */ _.jsx(gE, { color: "#475D92", fill: "#475D92", size: 12 }),
              /* @__PURE__ */ _.jsxs(
                "a",
                {
                  target: "_blank",
                  href: d.url,
                  className: "item no-children my-2 p-4 cursor-pointer",
                  type: "button",
                  onClick: (h) => h.stopPropagation(),
                  children: [
                    /* @__PURE__ */ _.jsx("a", { className: "course-in-route-text", children: d.name }),
                    /* @__PURE__ */ _.jsx(ny, { className: "text-gray-500", size: 18 })
                  ]
                }
              )
            ] }, `${c.id}-${d.id}`)) }),
            i.includes(c.id) && /* @__PURE__ */ _.jsx(
              "a",
              {
                target: "_blank",
                href: c.url,
                className: "button-text",
                type: "button",
                onClick: (d) => d.stopPropagation(),
                children: "IR A LA RUTA"
              }
            )
          ]
        },
        c.id
      ))
    ] })
  ] });
}
const oR = ({ children: t, ...r }) => /* @__PURE__ */ _.jsx("a", { ...r, target: "_blank", rel: "noopener noreferrer", children: t });
function sR({ content: t, buttons: r, setting: l, index: i }) {
  var A, C;
  let s, u = !1;
  t = t.replace(/^```(?:json)?\s*\r?\n?/, "").replace(/\r?\n?```$/, "").trim();
  try {
    s = JSON.parse(t);
  } catch {
    u = !0;
  }
  let c = (s == null ? void 0 : s.message) ?? "No hay mensaje disponible";
  const d = (A = s == null ? void 0 : s.response) == null ? void 0 : A.filter(
    (N) => "titulo_curso" in N
  ), m = (s == null ? void 0 : s.suggestions) ?? [], h = Array.isArray(s == null ? void 0 : s.response) ? s.response.filter((N) => "titulo_rutas" in N) : [], y = uR(h, l.baseUrl);
  let g = [];
  d && (g = d.map((N) => ({
    id: N.IdCourse,
    name: N.titulo_curso,
    url: l.baseUrl + is(N.IdCourse)
  })));
  const b = m.filter(
    (N) => "titulo_curso" in N
  ).map((N) => ({
    id: N.IdCourse,
    name: N.titulo_curso,
    url: l.baseUrl + is(N.IdCourse)
  })), v = m.filter((N) => "titulo_rutas" in N).map((N) => {
    const T = N.listadecursos.map((I) => ({
      id: I.Titulo,
      name: I.Titulo,
      url: l.baseUrl + is(I.IdRouteCourse)
    }));
    return {
      id: N.IdRoute,
      title: N.titulo_rutas,
      description: N.descripcion_rutas,
      courses: T,
      url: l.baseUrl + G1(N.IdRoute)
    };
  });
  return c.includes("Contactar a un tutor experto") && (c = c.replace(
    "Contactar a un tutor experto",
    "[Contactar a un tutor experto](https://www.google.com)"
  )), console.log("courses content:", b), console.log("routes content:", v), /* @__PURE__ */ _.jsxs("div", { className: "items-start justify-end", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "mb-2 flex flex-col justify-end", children: [
      /* @__PURE__ */ _.jsx("div", { className: "flex flex-row", children: /* @__PURE__ */ _.jsx(Ss, { children: /* @__PURE__ */ _.jsx(yd, { className: "h-[32px] w-[32px]", variant: "light" }) }) }),
      /* @__PURE__ */ _.jsx("p", { className: "font-base mt-1 font-bold leading-[24px] tracking-[0.15px]", children: "TutorIA" })
    ] }),
    /* @__PURE__ */ _.jsxs(
      "div",
      {
        className: "overflow-hidden text-[16px] font-normal leading-[24px] tracking-[0.5px]",
        style: {
          backgroundColor: i === 0 || i === 1 ? "" : (C = l == null ? void 0 : l.colors) == null ? void 0 : C.botMessage,
          color: "#E2E2E9"
        },
        children: [
          /* @__PURE__ */ _.jsx("div", { className: "markdown-class prose", children: /* @__PURE__ */ _.jsx(
            w1,
            {
              rehypePlugins: [Ud],
              remarkPlugins: [F1],
              components: {
                a: oR
              },
              children: u ? t : c
            }
          ) }),
          d && /* @__PURE__ */ _.jsx(h0, { courses: g, learningPaths: y }),
          m && /* @__PURE__ */ _.jsx(h0, { courses: b, learningPaths: v, altName: "Sugerencias" }),
          r && /* @__PURE__ */ _.jsx("div", { className: "mt-2 space-x-2", style: { display: "flex", flexDirection: "column" }, children: r.map((N) => /* @__PURE__ */ _.jsx(
            Wl,
            {
              variant: "ghost",
              onClick: N.onClick,
              onMouseEnter: (T) => {
                const I = T.target;
                I.style.backgroundColor = "#C5C6D0";
              },
              onMouseLeave: (T) => {
                const I = T.target;
                I.style.backgroundColor = "transparent";
              },
              children: N.text
            },
            N.text
          )) })
        ]
      }
    )
  ] });
}
function uR(t, r) {
  return t.map((l) => {
    const i = l.listadecursos.map((s) => ({
      id: s.Titulo,
      name: s.Titulo,
      url: r + is(s.IdRouteCourse)
    }));
    return {
      id: l.IdRoute,
      title: l.titulo_rutas,
      description: l.descripcion_rutas,
      courses: i,
      url: r + G1(l.IdRoute)
    };
  });
}
function is(t) {
  return `/narp/students/courses/${t}/detail`;
}
function G1(t) {
  return `/narp/students/routes/${t}/detail`;
}
function cR() {
  return /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col justify-end", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col justify-end gap-3", children: [
      /* @__PURE__ */ _.jsx("div", { className: "icon-container flex flex-row", children: /* @__PURE__ */ _.jsx(Ss, { className: "animated-icon", children: /* @__PURE__ */ _.jsx(yd, { className: "h-full w-full", variant: "light" }) }) }),
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
          w1,
          {
            rehypePlugins: [Ud],
            remarkPlugins: [F1],
            children: eE
          }
        ) })
      }
    )
  ] });
}
function fR({ messages: t, setting: r, isLoading: l }) {
  const i = E.useRef(null);
  return E.useEffect(() => {
    var s;
    (s = i.current) == null || s.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [t]), /* @__PURE__ */ _.jsxs("div", { ref: i, className: "list-messages space-y-4 overflow-y-auto p-4", children: [
    t.length === 0 && /* @__PURE__ */ _.jsx(cR, {}),
    t.map(({ role: s, id: u, content: c, buttons: d }, m) => s === "user" ? /* @__PURE__ */ _.jsx("div", { children: /* @__PURE__ */ _.jsx(IC, { content: c, setting: r }, u) }, u) : /* @__PURE__ */ _.jsx("div", { children: /* @__PURE__ */ _.jsx(
      sR,
      {
        buttons: d,
        content: c,
        index: m,
        setting: r
      },
      u
    ) }, u)),
    l && /* @__PURE__ */ _.jsx("div", { className: "mt-2 flex w-full items-center", children: /* @__PURE__ */ _.jsx("p", { className: "text-sm font-bold", children: "Cargando..." }) })
  ] });
}
const dR = 4 * 60 * 1e3 + 40 * 1e3, hR = 5 * 60 * 1e3;
function pR({ companyId: t, userName: r, apiUrl: l }) {
  const i = { ...Yo, userName: r, baseUrl: l }, [s, u] = E.useState(!1), { messages: c, input: d, handleInputChange: m, setMessages: h, setInput: y } = Z2(), [g, b] = E.useState(!1), [v, A] = E.useState(0), [C, N] = E.useState(!1), [T, I] = E.useState(!1), [j, Q] = E.useState(!1), H = E.useRef(null), R = E.useRef(null), F = () => {
    Q(!0);
  }, V = () => {
    Q(!1), u(!1), h([]);
  }, Z = () => {
    Q(!1);
  };
  function M() {
    H.current && clearTimeout(H.current), R.current && clearTimeout(R.current), H.current = setTimeout(() => {
      h((ne) => [
        ...ne,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: "Por inactividad, esta ventana se cerrará automáticamente en breve. Si deseas continuar, por favor interactúa ahora."
        }
      ]);
    }, dR), R.current = setTimeout(() => {
      u(!1), h([]);
    }, hR);
  }
  const re = () => {
    M();
  };
  E.useEffect(() => {
    s && M();
  }, [s]);
  const te = async (ne) => {
    if (ne.preventDefault(), re(), !navigator.onLine) {
      h((ie) => [
        ...ie,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: "❌ No se pudo enviar tu mensaje porque no hay conexión a Internet. Por favor, verifica tu conexión e inténtalo nuevamente."
        }
      ]);
      return;
    }
    if (d.trim())
      try {
        const ie = {
          id: Date.now().toString(),
          role: "user",
          content: d
        };
        y(""), h((B) => [...B, ie]), b(!0), await K2(d, t, l).then((B) => {
          const W = {
            id: Date.now().toString(),
            role: "assistant",
            content: B || "No se pudo obtener una respuesta válida."
          };
          if (B === J2) {
            if (v >= 1) {
              const G = {
                id: Date.now().toString(),
                role: "assistant",
                content: $2
              };
              N(!0), h((ge) => [...ge, G]), setTimeout(() => {
                u(!1), h([]), N(!1), A(0);
              }, 7e3);
            } else
              h((G) => [...G, W]);
            A((G) => G + 1);
          } else
            h((G) => [...G, W]);
        });
      } catch {
        h((ie) => [
          ...ie,
          {
            id: Date.now().toString(),
            role: "assistant",
            content: W2
          }
        ]);
      } finally {
        b(!1);
      }
  }, oe = (ne) => {
    ne.key === "Enter" && (ne.preventDefault(), te(ne));
  };
  return /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    /* @__PURE__ */ _.jsx(
      nC,
      {
        cancelText: "Cancelar",
        confirmText: "Continuar",
        description: "Si cierras el chat, la conversación se perderá. ¿Deseas continuar?",
        open: j,
        onCancel: Z,
        onConfirm: V
      }
    ),
    s ? /* @__PURE__ */ _.jsx(
      ov,
      {
        className: `flex z-20 h-screen w-full flex-col overflow-hidden p-5 sm:w-96 ${s ? "slide-in-right" : ""}`,
        children: /* @__PURE__ */ _.jsxs(
          "div",
          {
            className: "card-parent flex h-full w-full flex-col text-card-foreground",
            style: {
              backgroundColor: "#121318",
              color: "#C5C6D0"
            },
            onClick: re,
            children: [
              /* @__PURE__ */ _.jsxs(sv, { className: "card-header flex flex-row items-center justify-between space-y-0 bg-[#121318] py-2 shadow-[0_10px_20px_rgba(0,_0,_0,_0.2)]", children: [
                /* @__PURE__ */ _.jsxs("div", { className: "flex items-center space-x-2 pl-2", children: [
                  /* @__PURE__ */ _.jsx(lC, {}),
                  /* @__PURE__ */ _.jsx(uv, { className: "card-title text-base font-bold", children: Yo == null ? void 0 : Yo.headerText })
                ] }),
                /* @__PURE__ */ _.jsx(Wl, { className: "cursor-pointer", size: "icon", variant: "ghost", onClick: () => F(), children: /* @__PURE__ */ _.jsx(q0, { className: "h-5 w-5", color: "#C5C6D0" }) })
              ] }),
              /* @__PURE__ */ _.jsx(cv, { className: "card-content flex flex-1 flex-col overflow-hidden", children: /* @__PURE__ */ _.jsx(_v, { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ _.jsx(fR, { isLoading: g, messages: c, setting: i }) }) }),
              /* @__PURE__ */ _.jsx(fv, { children: /* @__PURE__ */ _.jsxs("form", { className: "flex w-full rounded-lg bg-[#44464F]", onSubmit: te, children: [
                /* @__PURE__ */ _.jsx(
                  Rv,
                  {
                    className: "flex-grow",
                    disabled: g || C,
                    maximized: T,
                    placeholder: "Escribe aquí tu pregunta o interés",
                    rows: 1,
                    value: d,
                    onChange: m,
                    onKeyDown: oe
                  }
                ),
                /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col items-center justify-between p-2", children: [
                  /* @__PURE__ */ _.jsx(
                    Wl,
                    {
                      size: "icon",
                      type: "button",
                      onClick: () => I(!T),
                      children: T ? /* @__PURE__ */ _.jsx(dE, { className: "h-4 w-4 rotate-45", color: "#171D1E" }) : /* @__PURE__ */ _.jsx(pE, { className: "h-4 w-4 rotate-45", color: "#171D1E" })
                    }
                  ),
                  /* @__PURE__ */ _.jsxs(Wl, { className: "bg-[#44464F]", size: "icon", type: "submit", children: [
                    /* @__PURE__ */ _.jsx(bE, { className: "h-6 w-6", color: "#B0C6FF" }),
                    /* @__PURE__ */ _.jsx("span", { className: "sr-only", children: "Enviar mensaje" })
                  ] })
                ] })
              ] }) })
            ]
          }
        )
      }
    ) : /* @__PURE__ */ _.jsx(
      Wl,
      {
        className: "absolute cursor-pointer bottom-12 right-12 h-16 w-16 rounded-full shadow-[0px_14px_16px_0px_#00000045] shadow-black",
        size: "icon",
        onClick: () => u(!0),
        children: /* @__PURE__ */ _.jsx(yd, { className: "size-16", variant: "dark" })
      }
    )
  ] });
}
class mR extends HTMLElement {
  constructor() {
    super();
    Ic(this, "_root");
    Ic(this, "_reactRoot", null);
    this._root = this.attachShadow({ mode: "open" });
    const l = document.createElement("style");
    l.textContent = bS, this._root.appendChild(l);
  }
  static get observedAttributes() {
    return ["companyId", "userName", "apiUrl"];
  }
  connectedCallback() {
    this.renderReact();
  }
  attributeChangedCallback() {
    this.renderReact();
  }
  renderReact() {
    let l = this.getAttribute("userName");
    const i = this.getAttribute("companyId"), s = this.getAttribute("apiUrl");
    if (l || (console.warn("ChatbotWebComponent: 'userName' attribute is required."), l = "Default User"), !i) {
      console.error("ChatbotWebComponent: 'companyId' attribute is required.");
      return;
    }
    if (!s) {
      console.error("ChatbotWebComponent: 'apiUrl' attribute is required.");
      return;
    }
    this._reactRoot || (this._reactRoot = yS.createRoot(this._root)), this._reactRoot.render(/* @__PURE__ */ _.jsx(pR, { apiUrl: s, companyId: i, userName: l }));
  }
}
customElements.define("chat-bot", mR);
