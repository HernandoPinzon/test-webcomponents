import zg, { useState as Eg, useEffect as XS } from "react";
import Nb from "react-dom";
function jS(L) {
  return L && L.__esModule && Object.prototype.hasOwnProperty.call(L, "default") ? L.default : L;
}
var Fp = { exports: {} }, Pm = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rb;
function QS() {
  if (Rb) return Pm;
  Rb = 1;
  var L = Symbol.for("react.transitional.element"), lt = Symbol.for("react.fragment");
  function at(q, Je, Ie) {
    var Bt = null;
    if (Ie !== void 0 && (Bt = "" + Ie), Je.key !== void 0 && (Bt = "" + Je.key), "key" in Je) {
      Ie = {};
      for (var Lt in Je)
        Lt !== "key" && (Ie[Lt] = Je[Lt]);
    } else Ie = Je;
    return Je = Ie.ref, {
      $$typeof: L,
      type: q,
      key: Bt,
      ref: Je !== void 0 ? Je : null,
      props: Ie
    };
  }
  return Pm.Fragment = lt, Pm.jsx = at, Pm.jsxs = at, Pm;
}
var e0 = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zb;
function ZS() {
  return zb || (zb = 1, process.env.NODE_ENV !== "production" && function() {
    function L(C) {
      if (C == null) return null;
      if (typeof C == "function")
        return C.$$typeof === vt ? null : C.displayName || C.name || null;
      if (typeof C == "string") return C;
      switch (C) {
        case Yl:
          return "Fragment";
        case We:
          return "Profiler";
        case ct:
          return "StrictMode";
        case _l:
          return "Suspense";
        case Ut:
          return "SuspenseList";
        case te:
          return "Activity";
      }
      if (typeof C == "object")
        switch (typeof C.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), C.$$typeof) {
          case dt:
            return "Portal";
          case Mt:
            return (C.displayName || "Context") + ".Provider";
          case va:
            return (C._context.displayName || "Context") + ".Consumer";
          case ml:
            var P = C.render;
            return C = C.displayName, C || (C = P.displayName || P.name || "", C = C !== "" ? "ForwardRef(" + C + ")" : "ForwardRef"), C;
          case qe:
            return P = C.displayName || null, P !== null ? P : L(C.type) || "Memo";
          case wt:
            P = C._payload, C = C._init;
            try {
              return L(C(P));
            } catch {
            }
        }
      return null;
    }
    function lt(C) {
      return "" + C;
    }
    function at(C) {
      try {
        lt(C);
        var P = !1;
      } catch {
        P = !0;
      }
      if (P) {
        P = console;
        var K = P.error, ue = typeof Symbol == "function" && Symbol.toStringTag && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return K.call(
          P,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ue
        ), lt(C);
      }
    }
    function q(C) {
      if (C === Yl) return "<>";
      if (typeof C == "object" && C !== null && C.$$typeof === wt)
        return "<...>";
      try {
        var P = L(C);
        return P ? "<" + P + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function Je() {
      var C = Xe.A;
      return C === null ? null : C.getOwner();
    }
    function Ie() {
      return Error("react-stack-top-frame");
    }
    function Bt(C) {
      if (de.call(C, "key")) {
        var P = Object.getOwnPropertyDescriptor(C, "key").get;
        if (P && P.isReactWarning) return !1;
      }
      return C.key !== void 0;
    }
    function Lt(C, P) {
      function K() {
        qt || (qt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          P
        ));
      }
      K.isReactWarning = !0, Object.defineProperty(C, "key", {
        get: K,
        configurable: !0
      });
    }
    function J() {
      var C = L(this.type);
      return A[C] || (A[C] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), C = this.props.ref, C !== void 0 ? C : null;
    }
    function Ot(C, P, K, ue, Ae, et, Ue, Mu) {
      return K = et.ref, C = {
        $$typeof: pt,
        type: C,
        key: P,
        props: et,
        _owner: Ae
      }, (K !== void 0 ? K : null) !== null ? Object.defineProperty(C, "ref", {
        enumerable: !1,
        get: J
      }) : Object.defineProperty(C, "ref", { enumerable: !1, value: null }), C._store = {}, Object.defineProperty(C._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(C, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(C, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ue
      }), Object.defineProperty(C, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Mu
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    }
    function Be(C, P, K, ue, Ae, et, Ue, Mu) {
      var gt = P.children;
      if (gt !== void 0)
        if (ue)
          if (Jt(gt)) {
            for (ue = 0; ue < gt.length; ue++)
              Pe(gt[ue]);
            Object.freeze && Object.freeze(gt);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else Pe(gt);
      if (de.call(P, "key")) {
        gt = L(C);
        var ll = Object.keys(P).filter(function(Ti) {
          return Ti !== "key";
        });
        ue = 0 < ll.length ? "{key: someKey, " + ll.join(": ..., ") + ": ...}" : "{key: someKey}", ne[gt + ue] || (ll = 0 < ll.length ? "{" + ll.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ue,
          gt,
          ll,
          gt
        ), ne[gt + ue] = !0);
      }
      if (gt = null, K !== void 0 && (at(K), gt = "" + K), Bt(P) && (at(P.key), gt = "" + P.key), "key" in P) {
        K = {};
        for (var ga in P)
          ga !== "key" && (K[ga] = P[ga]);
      } else K = P;
      return gt && Lt(
        K,
        typeof C == "function" ? C.displayName || C.name || "Unknown" : C
      ), Ot(
        C,
        gt,
        et,
        Ae,
        Je(),
        K,
        Ue,
        Mu
      );
    }
    function Pe(C) {
      typeof C == "object" && C !== null && C.$$typeof === pt && C._store && (C._store.validated = 1);
    }
    var ge = zg, pt = Symbol.for("react.transitional.element"), dt = Symbol.for("react.portal"), Yl = Symbol.for("react.fragment"), ct = Symbol.for("react.strict_mode"), We = Symbol.for("react.profiler"), va = Symbol.for("react.consumer"), Mt = Symbol.for("react.context"), ml = Symbol.for("react.forward_ref"), _l = Symbol.for("react.suspense"), Ut = Symbol.for("react.suspense_list"), qe = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), vt = Symbol.for("react.client.reference"), Xe = ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = Object.prototype.hasOwnProperty, Jt = Array.isArray, Rl = console.createTask ? console.createTask : function() {
      return null;
    };
    ge = {
      "react-stack-bottom-frame": function(C) {
        return C();
      }
    };
    var qt, A = {}, j = ge["react-stack-bottom-frame"].bind(
      ge,
      Ie
    )(), Z = Rl(q(Ie)), ne = {};
    e0.Fragment = Yl, e0.jsx = function(C, P, K, ue, Ae) {
      var et = 1e4 > Xe.recentlyCreatedOwnerStacks++;
      return Be(
        C,
        P,
        K,
        !1,
        ue,
        Ae,
        et ? Error("react-stack-top-frame") : j,
        et ? Rl(q(C)) : Z
      );
    }, e0.jsxs = function(C, P, K, ue, Ae) {
      var et = 1e4 > Xe.recentlyCreatedOwnerStacks++;
      return Be(
        C,
        P,
        K,
        !0,
        ue,
        Ae,
        et ? Error("react-stack-top-frame") : j,
        et ? Rl(q(C)) : Z
      );
    };
  }()), e0;
}
var Db;
function LS() {
  return Db || (Db = 1, process.env.NODE_ENV === "production" ? Fp.exports = QS() : Fp.exports = ZS()), Fp.exports;
}
var ko = LS(), Ip = { exports: {} }, t0 = {}, Pp = { exports: {} }, Ag = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ob;
function wS() {
  return Ob || (Ob = 1, function(L) {
    function lt(A, j) {
      var Z = A.length;
      A.push(j);
      e: for (; 0 < Z; ) {
        var ne = Z - 1 >>> 1, C = A[ne];
        if (0 < Je(C, j))
          A[ne] = j, A[Z] = C, Z = ne;
        else break e;
      }
    }
    function at(A) {
      return A.length === 0 ? null : A[0];
    }
    function q(A) {
      if (A.length === 0) return null;
      var j = A[0], Z = A.pop();
      if (Z !== j) {
        A[0] = Z;
        e: for (var ne = 0, C = A.length, P = C >>> 1; ne < P; ) {
          var K = 2 * (ne + 1) - 1, ue = A[K], Ae = K + 1, et = A[Ae];
          if (0 > Je(ue, Z))
            Ae < C && 0 > Je(et, ue) ? (A[ne] = et, A[Ae] = Z, ne = Ae) : (A[ne] = ue, A[K] = Z, ne = K);
          else if (Ae < C && 0 > Je(et, Z))
            A[ne] = et, A[Ae] = Z, ne = Ae;
          else break e;
        }
      }
      return j;
    }
    function Je(A, j) {
      var Z = A.sortIndex - j.sortIndex;
      return Z !== 0 ? Z : A.id - j.id;
    }
    if (L.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Ie = performance;
      L.unstable_now = function() {
        return Ie.now();
      };
    } else {
      var Bt = Date, Lt = Bt.now();
      L.unstable_now = function() {
        return Bt.now() - Lt;
      };
    }
    var J = [], Ot = [], Be = 1, Pe = null, ge = 3, pt = !1, dt = !1, Yl = !1, ct = !1, We = typeof setTimeout == "function" ? setTimeout : null, va = typeof clearTimeout == "function" ? clearTimeout : null, Mt = typeof setImmediate < "u" ? setImmediate : null;
    function ml(A) {
      for (var j = at(Ot); j !== null; ) {
        if (j.callback === null) q(Ot);
        else if (j.startTime <= A)
          q(Ot), j.sortIndex = j.expirationTime, lt(J, j);
        else break;
        j = at(Ot);
      }
    }
    function _l(A) {
      if (Yl = !1, ml(A), !dt)
        if (at(J) !== null)
          dt = !0, Ut || (Ut = !0, de());
        else {
          var j = at(Ot);
          j !== null && qt(_l, j.startTime - A);
        }
    }
    var Ut = !1, qe = -1, wt = 5, te = -1;
    function vt() {
      return ct ? !0 : !(L.unstable_now() - te < wt);
    }
    function Xe() {
      if (ct = !1, Ut) {
        var A = L.unstable_now();
        te = A;
        var j = !0;
        try {
          e: {
            dt = !1, Yl && (Yl = !1, va(qe), qe = -1), pt = !0;
            var Z = ge;
            try {
              t: {
                for (ml(A), Pe = at(J); Pe !== null && !(Pe.expirationTime > A && vt()); ) {
                  var ne = Pe.callback;
                  if (typeof ne == "function") {
                    Pe.callback = null, ge = Pe.priorityLevel;
                    var C = ne(
                      Pe.expirationTime <= A
                    );
                    if (A = L.unstable_now(), typeof C == "function") {
                      Pe.callback = C, ml(A), j = !0;
                      break t;
                    }
                    Pe === at(J) && q(J), ml(A);
                  } else q(J);
                  Pe = at(J);
                }
                if (Pe !== null) j = !0;
                else {
                  var P = at(Ot);
                  P !== null && qt(
                    _l,
                    P.startTime - A
                  ), j = !1;
                }
              }
              break e;
            } finally {
              Pe = null, ge = Z, pt = !1;
            }
            j = void 0;
          }
        } finally {
          j ? de() : Ut = !1;
        }
      }
    }
    var de;
    if (typeof Mt == "function")
      de = function() {
        Mt(Xe);
      };
    else if (typeof MessageChannel < "u") {
      var Jt = new MessageChannel(), Rl = Jt.port2;
      Jt.port1.onmessage = Xe, de = function() {
        Rl.postMessage(null);
      };
    } else
      de = function() {
        We(Xe, 0);
      };
    function qt(A, j) {
      qe = We(function() {
        A(L.unstable_now());
      }, j);
    }
    L.unstable_IdlePriority = 5, L.unstable_ImmediatePriority = 1, L.unstable_LowPriority = 4, L.unstable_NormalPriority = 3, L.unstable_Profiling = null, L.unstable_UserBlockingPriority = 2, L.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, L.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : wt = 0 < A ? Math.floor(1e3 / A) : 5;
    }, L.unstable_getCurrentPriorityLevel = function() {
      return ge;
    }, L.unstable_next = function(A) {
      switch (ge) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = ge;
      }
      var Z = ge;
      ge = j;
      try {
        return A();
      } finally {
        ge = Z;
      }
    }, L.unstable_requestPaint = function() {
      ct = !0;
    }, L.unstable_runWithPriority = function(A, j) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var Z = ge;
      ge = A;
      try {
        return j();
      } finally {
        ge = Z;
      }
    }, L.unstable_scheduleCallback = function(A, j, Z) {
      var ne = L.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? ne + Z : ne) : Z = ne, A) {
        case 1:
          var C = -1;
          break;
        case 2:
          C = 250;
          break;
        case 5:
          C = 1073741823;
          break;
        case 4:
          C = 1e4;
          break;
        default:
          C = 5e3;
      }
      return C = Z + C, A = {
        id: Be++,
        callback: j,
        priorityLevel: A,
        startTime: Z,
        expirationTime: C,
        sortIndex: -1
      }, Z > ne ? (A.sortIndex = Z, lt(Ot, A), at(J) === null && A === at(Ot) && (Yl ? (va(qe), qe = -1) : Yl = !0, qt(_l, Z - ne))) : (A.sortIndex = C, lt(J, A), dt || pt || (dt = !0, Ut || (Ut = !0, de()))), A;
    }, L.unstable_shouldYield = vt, L.unstable_wrapCallback = function(A) {
      var j = ge;
      return function() {
        var Z = ge;
        ge = j;
        try {
          return A.apply(this, arguments);
        } finally {
          ge = Z;
        }
      };
    };
  }(Ag)), Ag;
}
var Rg = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mb;
function JS() {
  return Mb || (Mb = 1, function(L) {
    process.env.NODE_ENV !== "production" && function() {
      function lt() {
        if (_l = !1, te) {
          var A = L.unstable_now();
          de = A;
          var j = !0;
          try {
            e: {
              Mt = !1, ml && (ml = !1, qe(vt), vt = -1), va = !0;
              var Z = We;
              try {
                t: {
                  for (Bt(A), ct = q(pt); ct !== null && !(ct.expirationTime > A && J()); ) {
                    var ne = ct.callback;
                    if (typeof ne == "function") {
                      ct.callback = null, We = ct.priorityLevel;
                      var C = ne(
                        ct.expirationTime <= A
                      );
                      if (A = L.unstable_now(), typeof C == "function") {
                        ct.callback = C, Bt(A), j = !0;
                        break t;
                      }
                      ct === q(pt) && Je(pt), Bt(A);
                    } else Je(pt);
                    ct = q(pt);
                  }
                  if (ct !== null) j = !0;
                  else {
                    var P = q(dt);
                    P !== null && Ot(
                      Lt,
                      P.startTime - A
                    ), j = !1;
                  }
                }
                break e;
              } finally {
                ct = null, We = Z, va = !1;
              }
              j = void 0;
            }
          } finally {
            j ? Jt() : te = !1;
          }
        }
      }
      function at(A, j) {
        var Z = A.length;
        A.push(j);
        e: for (; 0 < Z; ) {
          var ne = Z - 1 >>> 1, C = A[ne];
          if (0 < Ie(C, j))
            A[ne] = j, A[Z] = C, Z = ne;
          else break e;
        }
      }
      function q(A) {
        return A.length === 0 ? null : A[0];
      }
      function Je(A) {
        if (A.length === 0) return null;
        var j = A[0], Z = A.pop();
        if (Z !== j) {
          A[0] = Z;
          e: for (var ne = 0, C = A.length, P = C >>> 1; ne < P; ) {
            var K = 2 * (ne + 1) - 1, ue = A[K], Ae = K + 1, et = A[Ae];
            if (0 > Ie(ue, Z))
              Ae < C && 0 > Ie(et, ue) ? (A[ne] = et, A[Ae] = Z, ne = Ae) : (A[ne] = ue, A[K] = Z, ne = K);
            else if (Ae < C && 0 > Ie(et, Z))
              A[ne] = et, A[Ae] = Z, ne = Ae;
            else break e;
          }
        }
        return j;
      }
      function Ie(A, j) {
        var Z = A.sortIndex - j.sortIndex;
        return Z !== 0 ? Z : A.id - j.id;
      }
      function Bt(A) {
        for (var j = q(dt); j !== null; ) {
          if (j.callback === null) Je(dt);
          else if (j.startTime <= A)
            Je(dt), j.sortIndex = j.expirationTime, at(pt, j);
          else break;
          j = q(dt);
        }
      }
      function Lt(A) {
        if (ml = !1, Bt(A), !Mt)
          if (q(pt) !== null)
            Mt = !0, te || (te = !0, Jt());
          else {
            var j = q(dt);
            j !== null && Ot(
              Lt,
              j.startTime - A
            );
          }
      }
      function J() {
        return _l ? !0 : !(L.unstable_now() - de < Xe);
      }
      function Ot(A, j) {
        vt = Ut(function() {
          A(L.unstable_now());
        }, j);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), L.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Be = performance;
        L.unstable_now = function() {
          return Be.now();
        };
      } else {
        var Pe = Date, ge = Pe.now();
        L.unstable_now = function() {
          return Pe.now() - ge;
        };
      }
      var pt = [], dt = [], Yl = 1, ct = null, We = 3, va = !1, Mt = !1, ml = !1, _l = !1, Ut = typeof setTimeout == "function" ? setTimeout : null, qe = typeof clearTimeout == "function" ? clearTimeout : null, wt = typeof setImmediate < "u" ? setImmediate : null, te = !1, vt = -1, Xe = 5, de = -1;
      if (typeof wt == "function")
        var Jt = function() {
          wt(lt);
        };
      else if (typeof MessageChannel < "u") {
        var Rl = new MessageChannel(), qt = Rl.port2;
        Rl.port1.onmessage = lt, Jt = function() {
          qt.postMessage(null);
        };
      } else
        Jt = function() {
          Ut(lt, 0);
        };
      L.unstable_IdlePriority = 5, L.unstable_ImmediatePriority = 1, L.unstable_LowPriority = 4, L.unstable_NormalPriority = 3, L.unstable_Profiling = null, L.unstable_UserBlockingPriority = 2, L.unstable_cancelCallback = function(A) {
        A.callback = null;
      }, L.unstable_forceFrameRate = function(A) {
        0 > A || 125 < A ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Xe = 0 < A ? Math.floor(1e3 / A) : 5;
      }, L.unstable_getCurrentPriorityLevel = function() {
        return We;
      }, L.unstable_next = function(A) {
        switch (We) {
          case 1:
          case 2:
          case 3:
            var j = 3;
            break;
          default:
            j = We;
        }
        var Z = We;
        We = j;
        try {
          return A();
        } finally {
          We = Z;
        }
      }, L.unstable_requestPaint = function() {
        _l = !0;
      }, L.unstable_runWithPriority = function(A, j) {
        switch (A) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            A = 3;
        }
        var Z = We;
        We = A;
        try {
          return j();
        } finally {
          We = Z;
        }
      }, L.unstable_scheduleCallback = function(A, j, Z) {
        var ne = L.unstable_now();
        switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? ne + Z : ne) : Z = ne, A) {
          case 1:
            var C = -1;
            break;
          case 2:
            C = 250;
            break;
          case 5:
            C = 1073741823;
            break;
          case 4:
            C = 1e4;
            break;
          default:
            C = 5e3;
        }
        return C = Z + C, A = {
          id: Yl++,
          callback: j,
          priorityLevel: A,
          startTime: Z,
          expirationTime: C,
          sortIndex: -1
        }, Z > ne ? (A.sortIndex = Z, at(dt, A), q(pt) === null && A === q(dt) && (ml ? (qe(vt), vt = -1) : ml = !0, Ot(Lt, Z - ne))) : (A.sortIndex = C, at(pt, A), Mt || va || (Mt = !0, te || (te = !0, Jt()))), A;
      }, L.unstable_shouldYield = J, L.unstable_wrapCallback = function(A) {
        var j = We;
        return function() {
          var Z = We;
          We = j;
          try {
            return A.apply(this, arguments);
          } finally {
            We = Z;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Rg)), Rg;
}
var Ub;
function Bb() {
  return Ub || (Ub = 1, process.env.NODE_ENV === "production" ? Pp.exports = wS() : Pp.exports = JS()), Pp.exports;
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
var Hb;
function KS() {
  if (Hb) return t0;
  Hb = 1;
  var L = Bb(), lt = zg, at = Nb;
  function q(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Je(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Ie(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function Bt(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function Lt(l) {
    if (Ie(l) !== l)
      throw Error(q(188));
  }
  function J(l) {
    var n = l.alternate;
    if (!n) {
      if (n = Ie(l), n === null) throw Error(q(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return Lt(s), l;
          if (r === c) return Lt(s), n;
          r = r.sibling;
        }
        throw Error(q(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var y = !1, m = s.child; m; ) {
          if (m === u) {
            y = !0, u = s, c = r;
            break;
          }
          if (m === c) {
            y = !0, c = s, u = r;
            break;
          }
          m = m.sibling;
        }
        if (!y) {
          for (m = r.child; m; ) {
            if (m === u) {
              y = !0, u = r, c = s;
              break;
            }
            if (m === c) {
              y = !0, c = r, u = s;
              break;
            }
            m = m.sibling;
          }
          if (!y) throw Error(q(189));
        }
      }
      if (u.alternate !== c) throw Error(q(190));
    }
    if (u.tag !== 3) throw Error(q(188));
    return u.stateNode.current === u ? l : n;
  }
  function Ot(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = Ot(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var Be = Object.assign, Pe = Symbol.for("react.element"), ge = Symbol.for("react.transitional.element"), pt = Symbol.for("react.portal"), dt = Symbol.for("react.fragment"), Yl = Symbol.for("react.strict_mode"), ct = Symbol.for("react.profiler"), We = Symbol.for("react.provider"), va = Symbol.for("react.consumer"), Mt = Symbol.for("react.context"), ml = Symbol.for("react.forward_ref"), _l = Symbol.for("react.suspense"), Ut = Symbol.for("react.suspense_list"), qe = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), vt = Symbol.for("react.memo_cache_sentinel"), Xe = Symbol.iterator;
  function de(l) {
    return l === null || typeof l != "object" ? null : (l = Xe && l[Xe] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Jt = Symbol.for("react.client.reference");
  function Rl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Jt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case dt:
        return "Fragment";
      case ct:
        return "Profiler";
      case Yl:
        return "StrictMode";
      case _l:
        return "Suspense";
      case Ut:
        return "SuspenseList";
      case te:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case pt:
          return "Portal";
        case Mt:
          return (l.displayName || "Context") + ".Provider";
        case va:
          return (l._context.displayName || "Context") + ".Consumer";
        case ml:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case qe:
          return n = l.displayName || null, n !== null ? n : Rl(l.type) || "Memo";
        case wt:
          n = l._payload, l = l._init;
          try {
            return Rl(l(n));
          } catch {
          }
      }
    return null;
  }
  var qt = Array.isArray, A = lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ne = [], C = -1;
  function P(l) {
    return { current: l };
  }
  function K(l) {
    0 > C || (l.current = ne[C], ne[C] = null, C--);
  }
  function ue(l, n) {
    C++, ne[C] = l.current, l.current = n;
  }
  var Ae = P(null), et = P(null), Ue = P(null), Mu = P(null);
  function gt(l, n) {
    switch (ue(Ue, n), ue(et, l), ue(Ae, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? vu(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = vu(n), l = Ro(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    K(Ae), ue(Ae, l);
  }
  function ll() {
    K(Ae), K(et), K(Ue);
  }
  function ga(l) {
    l.memoizedState !== null && ue(Mu, l);
    var n = Ae.current, u = Ro(n, l.type);
    n !== u && (ue(et, l), ue(Ae, u));
  }
  function Ti(l) {
    et.current === l && (K(Ae), K(et)), Mu.current === l && (K(Mu), Il._currentValue = Z);
  }
  var Gs = Object.prototype.hasOwnProperty, Ei = L.unstable_scheduleCallback, ch = L.unstable_cancelCallback, ev = L.unstable_shouldYield, Ai = L.unstable_requestPaint, ea = L.unstable_now, $o = L.unstable_getCurrentPriorityLevel, a0 = L.unstable_ImmediatePriority, oh = L.unstable_UserBlockingPriority, Wo = L.unstable_NormalPriority, fh = L.unstable_LowPriority, Hc = L.unstable_IdlePriority, tv = L.log, n0 = L.unstable_setDisableYieldValue, xc = null, zl = null;
  function kn(l) {
    if (typeof tv == "function" && n0(l), zl && typeof zl.setStrictMode == "function")
      try {
        zl.setStrictMode(xc, l);
      } catch {
      }
  }
  var Gl = Math.clz32 ? Math.clz32 : lv, sh = Math.log, u0 = Math.LN2;
  function lv(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (sh(l) / u0 | 0) | 0;
  }
  var Cc = 256, $n = 4194304;
  function ta(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
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
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
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
        return l;
    }
  }
  function Uu(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, y = l.pingedLanes;
    l = l.warmLanes;
    var m = c & 134217727;
    return m !== 0 ? (c = m & ~r, c !== 0 ? s = ta(c) : (y &= m, y !== 0 ? s = ta(y) : u || (u = m & ~l, u !== 0 && (s = ta(u))))) : (m = c & ~r, m !== 0 ? s = ta(m) : y !== 0 ? s = ta(y) : u || (u = c & ~l, u !== 0 && (s = ta(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function an(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function Kt(l, n) {
    switch (l) {
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
  function Hu() {
    var l = Cc;
    return Cc <<= 1, (Cc & 4194048) === 0 && (Cc = 256), l;
  }
  function Ri() {
    var l = $n;
    return $n <<= 1, ($n & 62914560) === 0 && ($n = 4194304), l;
  }
  function xu(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function zi(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function i0(l, n, u, c, s, r) {
    var y = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var m = l.entanglements, g = l.expirationTimes, D = l.hiddenUpdates;
    for (u = y & ~u; 0 < u; ) {
      var G = 31 - Gl(u), X = 1 << G;
      m[G] = 0, g[G] = -1;
      var M = D[G];
      if (M !== null)
        for (D[G] = null, G = 0; G < M.length; G++) {
          var H = M[G];
          H !== null && (H.lane &= -536870913);
        }
      u &= ~X;
    }
    c !== 0 && Fo(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(y & ~n));
  }
  function Fo(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Gl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194090;
  }
  function Io(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Gl(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function Ga(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Vs(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function c0() {
    var l = j.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : ym(l.type));
  }
  function av(l, n) {
    var u = j.p;
    try {
      return j.p = l, n();
    } finally {
      j.p = u;
    }
  }
  var Yt = Math.random().toString(36).slice(2), kt = "__reactFiber$" + Yt, Dl = "__reactProps$" + Yt, Nc = "__reactContainer$" + Yt, Xs = "__reactEvents$" + Yt, o0 = "__reactListeners$" + Yt, js = "__reactHandles$" + Yt, f0 = "__reactResources$" + Yt, W = "__reactMarker$" + Yt;
  function Po(l) {
    delete l[kt], delete l[Dl], delete l[Xs], delete l[o0], delete l[js];
  }
  function al(l) {
    var n = l[kt];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Nc] || u[kt]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = sl(l); l !== null; ) {
            if (u = l[kt]) return u;
            l = sl(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Di(l) {
    if (l = l[kt] || l[Nc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function ef(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(q(33));
  }
  function Wn(l) {
    var n = l[f0];
    return n || (n = l[f0] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function _t(l) {
    l[W] = !0;
  }
  var tf = /* @__PURE__ */ new Set(), la = {};
  function Cu(l, n) {
    Nu(l, n), Nu(l + "Capture", n);
  }
  function Nu(l, n) {
    for (la[l] = n, l = 0; l < n.length; l++)
      tf.add(n[l]);
  }
  var s0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Qs = {}, rh = {};
  function r0(l) {
    return Gs.call(rh, l) ? !0 : Gs.call(Qs, l) ? !1 : s0.test(l) ? rh[l] = !0 : (Qs[l] = !0, !1);
  }
  function Fn(l, n, u) {
    if (r0(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function lf(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function nn(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  var Zs, dh;
  function Oi(l) {
    if (Zs === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Zs = n && n[1] || "", dh = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Zs + l + dh;
  }
  var Ol = !1;
  function Bu(l, n) {
    if (!l || Ol) return "";
    Ol = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var X = function() {
                throw Error();
              };
              if (Object.defineProperty(X.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(X, []);
                } catch (H) {
                  var M = H;
                }
                Reflect.construct(l, [], X);
              } else {
                try {
                  X.call();
                } catch (H) {
                  M = H;
                }
                l.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                M = H;
              }
              (X = l()) && typeof X.catch == "function" && X.catch(function() {
              });
            }
          } catch (H) {
            if (H && M && typeof H.stack == "string")
              return [H.stack, M.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), y = r[0], m = r[1];
      if (y && m) {
        var g = y.split(`
`), D = m.split(`
`);
        for (s = c = 0; c < g.length && !g[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < D.length && !D[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === g.length || s === D.length)
          for (c = g.length - 1, s = D.length - 1; 1 <= c && 0 <= s && g[c] !== D[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (g[c] !== D[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || g[c] !== D[s]) {
                  var G = `
` + g[c].replace(" at new ", " at ");
                  return l.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", l.displayName)), G;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      Ol = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Oi(u) : "";
  }
  function Mi(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Oi(l.type);
      case 16:
        return Oi("Lazy");
      case 13:
        return Oi("Suspense");
      case 19:
        return Oi("SuspenseList");
      case 0:
      case 15:
        return Bu(l.type, !1);
      case 11:
        return Bu(l.type.render, !1);
      case 1:
        return Bu(l.type, !0);
      case 31:
        return Oi("Activity");
      default:
        return "";
    }
  }
  function hh(l) {
    try {
      var n = "";
      do
        n += Mi(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function pl(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function af(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function yh(l) {
    var n = af(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    ), c = "" + l[n];
    if (!l.hasOwnProperty(n) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var s = u.get, r = u.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(y) {
          c = "" + y, r.call(this, y);
        }
      }), Object.defineProperty(l, n, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(y) {
          c = "" + y;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function qu(l) {
    l._valueTracker || (l._valueTracker = yh(l));
  }
  function Ui(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = af(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Bc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var nv = /[\n"\\]/g;
  function ba(l) {
    return l.replace(
      nv,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ls(l, n, u, c, s, r, y, m) {
    l.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? l.type = y : l.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + pl(n)) : l.value !== "" + pl(n) && (l.value = "" + pl(n)) : y !== "submit" && y !== "reset" || l.removeAttribute("value"), n != null ? nf(l, y, pl(n)) : u != null ? nf(l, y, pl(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.name = "" + pl(m) : l.removeAttribute("name");
  }
  function ws(l, n, u, c, s, r, y, m) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null))
        return;
      u = u != null ? "" + pl(u) : "", n = n != null ? "" + pl(n) : u, m || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = m ? l.checked : !!c, l.defaultChecked = !!c, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (l.name = y);
  }
  function nf(l, n, u) {
    n === "number" && Bc(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Hi(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + pl(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function mh(l, n, u) {
    if (n != null && (n = "" + pl(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + pl(u) : "";
  }
  function ph(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(q(92));
        if (qt(c)) {
          if (1 < c.length) throw Error(q(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = pl(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function qc(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var d0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Js(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || d0.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function uf(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(q(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && Js(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && Js(l, r, n[r]);
  }
  function xi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var uv = /* @__PURE__ */ new Map([
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
  ]), h0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function cf(l) {
    return h0.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Ci = null;
  function Ks(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Yc = null, _c = null;
  function y0(l) {
    var n = Di(l);
    if (n && (l = n.stateNode)) {
      var u = l[Dl] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (Ls(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + ba(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[Dl] || null;
                if (!s) throw Error(q(90));
                Ls(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && Ui(c);
          }
          break e;
        case "textarea":
          mh(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && Hi(l, !!u.multiple, n, !1);
      }
    }
  }
  var vh = !1;
  function Gc(l, n, u) {
    if (vh) return l(n, u);
    vh = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (vh = !1, (Yc !== null || _c !== null) && (sc(), Yc && (n = Yc, l = _c, _c = Yc = null, y0(n), l)))
        for (n = 0; n < l.length; n++) y0(l[n]);
    }
  }
  function Ni(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Dl] || null;
    if (c === null) return null;
    u = c[n];
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
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        q(231, n, typeof u)
      );
    return u;
  }
  var un = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ks = !1;
  if (un)
    try {
      var In = {};
      Object.defineProperty(In, "passive", {
        get: function() {
          ks = !0;
        }
      }), window.addEventListener("test", In, In), window.removeEventListener("test", In, In);
    } catch {
      ks = !1;
    }
  var Pn = null, Vc = null, Bi = null;
  function gh() {
    if (Bi) return Bi;
    var l, n = Vc, u = n.length, c, s = "value" in Pn ? Pn.value : Pn.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var y = u - l;
    for (c = 1; c <= y && n[u - c] === s[r - c]; c++) ;
    return Bi = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function nl(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function $s() {
    return !0;
  }
  function Ws() {
    return !1;
  }
  function Ml(l) {
    function n(u, c, s, r, y) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = y, this.currentTarget = null;
      for (var m in l)
        l.hasOwnProperty(m) && (u = l[m], this[m] = u ? u(r) : r[m]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? $s : Ws, this.isPropagationStopped = Ws, this;
    }
    return Be(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = $s);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = $s);
      },
      persist: function() {
      },
      isPersistent: $s
    }), n;
  }
  var Yu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Fs = Ml(Yu), of = Be({}, Yu, { view: 0, detail: 0 }), m0 = Ml(of), bh, Is, ff, qi = Be({}, of, {
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
    getModifierState: eu,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== ff && (ff && l.type === "mousemove" ? (bh = l.screenX - ff.screenX, Is = l.screenY - ff.screenY) : Is = bh = 0, ff = l), bh);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Is;
    }
  }), Sh = Ml(qi), p0 = Be({}, qi, { dataTransfer: 0 }), v0 = Ml(p0), iv = Be({}, of, { relatedTarget: 0 }), Th = Ml(iv), cv = Be({}, Yu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ov = Ml(cv), fv = Be({}, Yu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), sf = Ml(fv), g0 = Be({}, Yu, { data: 0 }), Eh = Ml(g0), b0 = {
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
  }, S0 = {
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
  }, Ah = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function T0(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Ah[l]) ? !!n[l] : !1;
  }
  function eu() {
    return T0;
  }
  var Yi = Be({}, of, {
    key: function(l) {
      if (l.key) {
        var n = b0[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = nl(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? S0[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: eu,
    charCode: function(l) {
      return l.type === "keypress" ? nl(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? nl(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Va = Ml(Yi), aa = Be({}, qi, {
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
  }), rf = Ml(aa), Ps = Be({}, of, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: eu
  }), Rh = Ml(Ps), Vl = Be({}, Yu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), E0 = Ml(Vl), er = Be({}, qi, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), _i = Ml(er), zh = Be({}, Yu, {
    newState: 0,
    oldState: 0
  }), A0 = Ml(zh), R0 = [9, 13, 27, 32], df = un && "CompositionEvent" in window, hf = null;
  un && "documentMode" in document && (hf = document.documentMode);
  var Dh = un && "TextEvent" in window && !hf, cn = un && (!df || hf && 8 < hf && 11 >= hf), Oh = " ", tr = !1;
  function yf(l, n) {
    switch (l) {
      case "keyup":
        return R0.indexOf(n.keyCode) !== -1;
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
  function _u(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Gu = !1;
  function Mh(l, n) {
    switch (l) {
      case "compositionend":
        return _u(n);
      case "keypress":
        return n.which !== 32 ? null : (tr = !0, Oh);
      case "textInput":
        return l = n.data, l === Oh && tr ? null : l;
      default:
        return null;
    }
  }
  function Gi(l, n) {
    if (Gu)
      return l === "compositionend" || !df && yf(l, n) ? (l = gh(), Bi = Vc = Pn = null, Gu = !1, l) : null;
    switch (l) {
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
        return cn && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var z0 = {
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
  function lr(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!z0[l.type] : n === "textarea";
  }
  function ar(l, n, u, c) {
    Yc ? _c ? _c.push(c) : _c = [c] : Yc = c, n = Ao(n, "onChange"), 0 < n.length && (u = new Fs(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Xa = null, ja = null;
  function Uh(l) {
    yc(l, 0);
  }
  function on(l) {
    var n = ef(l);
    if (Ui(n)) return l;
  }
  function Hh(l, n) {
    if (l === "change") return n;
  }
  var xh = !1;
  if (un) {
    var Vi;
    if (un) {
      var Xi = "oninput" in document;
      if (!Xi) {
        var Ch = document.createElement("div");
        Ch.setAttribute("oninput", "return;"), Xi = typeof Ch.oninput == "function";
      }
      Vi = Xi;
    } else Vi = !1;
    xh = Vi && (!document.documentMode || 9 < document.documentMode);
  }
  function Xc() {
    Xa && (Xa.detachEvent("onpropertychange", Nh), ja = Xa = null);
  }
  function Nh(l) {
    if (l.propertyName === "value" && on(ja)) {
      var n = [];
      ar(
        n,
        ja,
        l,
        Ks(l)
      ), Gc(Uh, n);
    }
  }
  function nr(l, n, u) {
    l === "focusin" ? (Xc(), Xa = n, ja = u, Xa.attachEvent("onpropertychange", Nh)) : l === "focusout" && Xc();
  }
  function Vu(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return on(ja);
  }
  function tu(l, n) {
    if (l === "click") return on(n);
  }
  function Bh(l, n) {
    if (l === "input" || l === "change")
      return on(n);
  }
  function qh(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var ul = typeof Object.is == "function" ? Object.is : qh;
  function Xu(l, n) {
    if (ul(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!Gs.call(n, s) || !ul(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function ju(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function nt(l, n) {
    var u = ju(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = ju(u);
    }
  }
  function mf(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? mf(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Yh(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = Bc(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = Bc(l.document);
    }
    return n;
  }
  function pf(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var ji = un && "documentMode" in document && 11 >= document.documentMode, fn = null, Qa = null, Qu = null, Qi = !1;
  function ur(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Qi || fn == null || fn !== Bc(c) || (c = fn, "selectionStart" in c && pf(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), Qu && Xu(Qu, c) || (Qu = c, c = Ao(Qa, "onSelect"), 0 < c.length && (n = new Fs(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = fn)));
  }
  function lu(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var Zi = {
    animationend: lu("Animation", "AnimationEnd"),
    animationiteration: lu("Animation", "AnimationIteration"),
    animationstart: lu("Animation", "AnimationStart"),
    transitionrun: lu("Transition", "TransitionRun"),
    transitionstart: lu("Transition", "TransitionStart"),
    transitioncancel: lu("Transition", "TransitionCancel"),
    transitionend: lu("Transition", "TransitionEnd")
  }, Sa = {}, Za = {};
  un && (Za = document.createElement("div").style, "AnimationEvent" in window || (delete Zi.animationend.animation, delete Zi.animationiteration.animation, delete Zi.animationstart.animation), "TransitionEvent" in window || delete Zi.transitionend.transition);
  function sn(l) {
    if (Sa[l]) return Sa[l];
    if (!Zi[l]) return l;
    var n = Zi[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Za)
        return Sa[l] = n[u];
    return l;
  }
  var D0 = sn("animationend"), _h = sn("animationiteration"), O0 = sn("animationstart"), Gh = sn("transitionrun"), ir = sn("transitionstart"), M0 = sn("transitioncancel"), Vh = sn("transitionend"), Xh = /* @__PURE__ */ new Map(), jc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  jc.push("scrollEnd");
  function Ta(l, n) {
    Xh.set(l, n), Cu(n, [l]);
  }
  var jh = /* @__PURE__ */ new WeakMap();
  function na(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = jh.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: hh(n)
      }, jh.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: hh(n)
    };
  }
  var Xl = [], Zu = 0, rn = 0;
  function La() {
    for (var l = Zu, n = rn = Zu = 0; n < l; ) {
      var u = Xl[n];
      Xl[n++] = null;
      var c = Xl[n];
      Xl[n++] = null;
      var s = Xl[n];
      Xl[n++] = null;
      var r = Xl[n];
      if (Xl[n++] = null, c !== null && s !== null) {
        var y = c.pending;
        y === null ? s.next = s : (s.next = y.next, y.next = s), c.pending = s;
      }
      r !== 0 && Zc(u, s, r);
    }
  }
  function Lu(l, n, u, c) {
    Xl[Zu++] = l, Xl[Zu++] = n, Xl[Zu++] = u, Xl[Zu++] = c, rn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Qc(l, n, u, c) {
    return Lu(l, n, u, c), vf(l);
  }
  function dn(l, n) {
    return Lu(l, null, null, n), vf(l);
  }
  function Zc(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Gl(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function vf(l) {
    if (50 < vo)
      throw vo = 0, jy = null, Error(q(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Lc = {};
  function U0(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function jl(l, n, u, c) {
    return new U0(l, n, u, c);
  }
  function gf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function wa(l, n) {
    var u = l.alternate;
    return u === null ? (u = jl(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Se(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function Q(l, n, u, c, s, r) {
    var y = 0;
    if (c = l, typeof l == "function") gf(l) && (y = 1);
    else if (typeof l == "string")
      y = fp(
        l,
        u,
        Ae.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case te:
          return l = jl(31, u, n, s), l.elementType = te, l.lanes = r, l;
        case dt:
          return Ea(u.children, s, r, n);
        case Yl:
          y = 8, s |= 24;
          break;
        case ct:
          return l = jl(12, u, n, s | 2), l.elementType = ct, l.lanes = r, l;
        case _l:
          return l = jl(13, u, n, s), l.elementType = _l, l.lanes = r, l;
        case Ut:
          return l = jl(19, u, n, s), l.elementType = Ut, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case We:
              case Mt:
                y = 10;
                break e;
              case va:
                y = 9;
                break e;
              case ml:
                y = 11;
                break e;
              case qe:
                y = 14;
                break e;
              case wt:
                y = 16, c = null;
                break e;
            }
          y = 29, u = Error(
            q(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = jl(y, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function Ea(l, n, u, c) {
    return l = jl(7, l, c, n), l.lanes = u, l;
  }
  function wc(l, n, u) {
    return l = jl(6, l, null, n), l.lanes = u, l;
  }
  function ht(l, n, u) {
    return n = jl(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var wu = [], Ju = 0, bf = null, Jc = 0, Aa = [], Ql = 0, au = null, Ja = 1, bt = "";
  function He(l, n) {
    wu[Ju++] = Jc, wu[Ju++] = bf, bf = l, Jc = n;
  }
  function cr(l, n, u) {
    Aa[Ql++] = Ja, Aa[Ql++] = bt, Aa[Ql++] = au, au = l;
    var c = Ja;
    l = bt;
    var s = 32 - Gl(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Gl(n) + s;
    if (30 < r) {
      var y = s - s % 5;
      r = (c & (1 << y) - 1).toString(32), c >>= y, s -= y, Ja = 1 << 32 - Gl(n) + s | u << s | c, bt = r + l;
    } else
      Ja = 1 << r | u << s | c, bt = l;
  }
  function Li(l) {
    l.return !== null && (He(l, 1), cr(l, 1, 0));
  }
  function hn(l) {
    for (; l === bf; )
      bf = wu[--Ju], wu[Ju] = null, Jc = wu[--Ju], wu[Ju] = null;
    for (; l === au; )
      au = Aa[--Ql], Aa[Ql] = null, bt = Aa[--Ql], Aa[Ql] = null, Ja = Aa[--Ql], Aa[Ql] = null;
  }
  var Ht = null, Ye = null, Ne = !1, Ra = null, za = !1, wi = Error(q(519));
  function nu(l) {
    var n = Error(q(418, ""));
    throw $c(na(n, l)), wi;
  }
  function Sf(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[kt] = l, n[Dl] = c, u) {
      case "dialog":
        ye("cancel", n), ye("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        ye("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < us.length; u++)
          ye(us[u], n);
        break;
      case "source":
        ye("error", n);
        break;
      case "img":
      case "image":
      case "link":
        ye("error", n), ye("load", n);
        break;
      case "details":
        ye("toggle", n);
        break;
      case "input":
        ye("invalid", n), ws(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), qu(n);
        break;
      case "select":
        ye("invalid", n);
        break;
      case "textarea":
        ye("invalid", n), ph(n, c.value, c.defaultValue, c.children), qu(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || tm(n.textContent, u) ? (c.popover != null && (ye("beforetoggle", n), ye("toggle", n)), c.onScroll != null && ye("scroll", n), c.onScrollEnd != null && ye("scrollend", n), c.onClick != null && (n.onclick = vd), n = !0) : n = !1, n || nu(l);
  }
  function Qh(l) {
    for (Ht = l.return; Ht; )
      switch (Ht.tag) {
        case 5:
        case 13:
          za = !1;
          return;
        case 27:
        case 3:
          za = !0;
          return;
        default:
          Ht = Ht.return;
      }
  }
  function Kc(l) {
    if (l !== Ht) return !1;
    if (!Ne) return Qh(l), Ne = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Nn(l.type, l.memoizedProps)), u = !u), u && Ye && nu(l), Qh(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(q(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                Ye = Ia(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        Ye = null;
      }
    } else
      n === 27 ? (n = Ye, si(l.type) ? (l = ri, ri = null, Ye = l) : Ye = n) : Ye = Ht ? Ia(l.stateNode.nextSibling) : null;
    return !0;
  }
  function kc() {
    Ye = Ht = null, Ne = !1;
  }
  function Zh() {
    var l = Ra;
    return l !== null && (kl === null ? kl = l : kl.push.apply(
      kl,
      l
    ), Ra = null), l;
  }
  function $c(l) {
    Ra === null ? Ra = [l] : Ra.push(l);
  }
  var Tf = P(null), uu = null, Ka = null;
  function iu(l, n, u) {
    ue(Tf, n._currentValue), n._currentValue = u;
  }
  function yn(l) {
    l._currentValue = Tf.current, K(Tf);
  }
  function or(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function Lh(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var y = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var m = r;
          r = s;
          for (var g = 0; g < n.length; g++)
            if (m.context === n[g]) {
              r.lanes |= u, m = r.alternate, m !== null && (m.lanes |= u), or(
                r.return,
                u,
                l
              ), c || (y = null);
              break e;
            }
          r = m.next;
        }
      } else if (s.tag === 18) {
        if (y = s.return, y === null) throw Error(q(341));
        y.lanes |= u, r = y.alternate, r !== null && (r.lanes |= u), or(y, u, l), y = null;
      } else y = s.child;
      if (y !== null) y.return = s;
      else
        for (y = s; y !== null; ) {
          if (y === l) {
            y = null;
            break;
          }
          if (s = y.sibling, s !== null) {
            s.return = y.return, y = s;
            break;
          }
          y = y.return;
        }
      s = y;
    }
  }
  function Wc(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var y = s.alternate;
        if (y === null) throw Error(q(387));
        if (y = y.memoizedProps, y !== null) {
          var m = s.type;
          ul(s.pendingProps.value, y.value) || (l !== null ? l.push(m) : l = [m]);
        }
      } else if (s === Mu.current) {
        if (y = s.alternate, y === null) throw Error(q(387));
        y.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(Il) : l = [Il]);
      }
      s = s.return;
    }
    l !== null && Lh(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Ef(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ul(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ku(l) {
    uu = l, Ka = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function $t(l) {
    return wh(uu, l);
  }
  function Af(l, n) {
    return uu === null && Ku(l), wh(l, n);
  }
  function wh(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Ka === null) {
      if (l === null) throw Error(q(308));
      Ka = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Ka = Ka.next = n;
    return u;
  }
  var Fc = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, fr = L.unstable_scheduleCallback, H0 = L.unstable_NormalPriority, Gt = {
    $$typeof: Mt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ic() {
    return {
      controller: new Fc(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function mn(l) {
    l.refCount--, l.refCount === 0 && fr(H0, function() {
      l.controller.abort();
    });
  }
  var ku = null, Rf = 0, Da = 0, Vt = null;
  function sr(l, n) {
    if (ku === null) {
      var u = ku = [];
      Rf = 0, Da = hc(), Vt = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Rf++, n.then(rr, rr), n;
  }
  function rr() {
    if (--Rf === 0 && ku !== null) {
      Vt !== null && (Vt.status = "fulfilled");
      var l = ku;
      ku = null, Da = 0, Vt = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function x0(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var dr = A.S;
  A.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && sr(l, n), dr !== null && dr(l, n);
  };
  var pn = P(null);
  function zf() {
    var l = pn.current;
    return l !== null ? l : Fe.pooledCache;
  }
  function Ji(l, n) {
    n === null ? ue(pn, pn.current) : ue(pn, n.pool);
  }
  function hr() {
    var l = zf();
    return l === null ? null : { parent: Gt._currentValue, pool: l };
  }
  var $u = Error(q(460)), yr = Error(q(474)), Df = Error(q(542)), mr = { then: function() {
  } };
  function pr(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Of() {
  }
  function Jh(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Of, Of), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, kh(l), l;
      default:
        if (typeof n.status == "string") n.then(Of, Of);
        else {
          if (l = Fe, l !== null && 100 < l.shellSuspendCounter)
            throw Error(q(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, kh(l), l;
        }
        throw Ki = n, $u;
    }
  }
  var Ki = null;
  function Kh() {
    if (Ki === null) throw Error(q(459));
    var l = Ki;
    return Ki = null, l;
  }
  function kh(l) {
    if (l === $u || l === Df)
      throw Error(q(483));
  }
  var vn = !1;
  function vr(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function gr(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Zl(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function gn(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (Qe & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = vf(l), Zc(l, null, u), n;
    }
    return Lu(l, c, n, u), vf(l);
  }
  function ki(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, Io(l, u);
    }
  }
  function $h(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var y = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = y : r = r.next = y, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var Wh = !1;
  function Pc() {
    if (Wh) {
      var l = Vt;
      if (l !== null) throw l;
    }
  }
  function cu(l, n, u, c) {
    Wh = !1;
    var s = l.updateQueue;
    vn = !1;
    var r = s.firstBaseUpdate, y = s.lastBaseUpdate, m = s.shared.pending;
    if (m !== null) {
      s.shared.pending = null;
      var g = m, D = g.next;
      g.next = null, y === null ? r = D : y.next = D, y = g;
      var G = l.alternate;
      G !== null && (G = G.updateQueue, m = G.lastBaseUpdate, m !== y && (m === null ? G.firstBaseUpdate = D : m.next = D, G.lastBaseUpdate = g));
    }
    if (r !== null) {
      var X = s.baseState;
      y = 0, G = D = g = null, m = r;
      do {
        var M = m.lane & -536870913, H = M !== m.lane;
        if (H ? (De & M) === M : (c & M) === M) {
          M !== 0 && M === Da && (Wh = !0), G !== null && (G = G.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          e: {
            var le = l, ae = m;
            M = n;
            var Ge = u;
            switch (ae.tag) {
              case 1:
                if (le = ae.payload, typeof le == "function") {
                  X = le.call(Ge, X, M);
                  break e;
                }
                X = le;
                break e;
              case 3:
                le.flags = le.flags & -65537 | 128;
              case 0:
                if (le = ae.payload, M = typeof le == "function" ? le.call(Ge, X, M) : le, M == null) break e;
                X = Be({}, X, M);
                break e;
              case 2:
                vn = !0;
            }
          }
          M = m.callback, M !== null && (l.flags |= 64, H && (l.flags |= 8192), H = s.callbacks, H === null ? s.callbacks = [M] : H.push(M));
        } else
          H = {
            lane: M,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, G === null ? (D = G = H, g = X) : G = G.next = H, y |= M;
        if (m = m.next, m === null) {
          if (m = s.shared.pending, m === null)
            break;
          H = m, m = H.next, H.next = null, s.lastBaseUpdate = H, s.shared.pending = null;
        }
      } while (!0);
      G === null && (g = X), s.baseState = g, s.firstBaseUpdate = D, s.lastBaseUpdate = G, r === null && (s.shared.lanes = 0), yu |= y, l.lanes = y, l.memoizedState = X;
    }
  }
  function br(l, n) {
    if (typeof l != "function")
      throw Error(q(191, l));
    l.call(n);
  }
  function Mf(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        br(u[l], n);
  }
  var $i = P(null), Uf = P(0);
  function Wt(l, n) {
    l = hu, ue(Uf, l), ue($i, n), hu = l | n.baseLanes;
  }
  function eo() {
    ue(Uf, hu), ue($i, $i.current);
  }
  function to() {
    hu = Uf.current, K($i), K(Uf);
  }
  var Oa = 0, he = null, je = null, yt = null, Hf = !1, ua = !1, Wu = !1, ka = 0, ia = 0, ou = null, Fh = 0;
  function mt() {
    throw Error(q(321));
  }
  function Sr(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!ul(l[u], n[u])) return !1;
    return !0;
  }
  function Tr(l, n, u, c, s, r) {
    return Oa = r, he = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, A.H = l === null || l.memoizedState === null ? dy : hy, Wu = !1, r = u(c, s), Wu = !1, ua && (r = Ih(
      n,
      u,
      c,
      s
    )), Fu(l), r;
  }
  function Fu(l) {
    A.H = Gr;
    var n = je !== null && je.next !== null;
    if (Oa = 0, yt = je = he = null, Hf = !1, ia = 0, ou = null, n) throw Error(q(300));
    l === null || Xt || (l = l.dependencies, l !== null && Ef(l) && (Xt = !0));
  }
  function Ih(l, n, u, c) {
    he = l;
    var s = 0;
    do {
      if (ua && (ou = null), ia = 0, ua = !1, 25 <= s) throw Error(q(301));
      if (s += 1, yt = je = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      A.H = fu, r = n(u, c);
    } while (ua);
    return r;
  }
  function C0() {
    var l = A.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Cf(n) : n, l = l.useState()[0], (je !== null ? je.memoizedState : null) !== l && (he.flags |= 1024), n;
  }
  function Er() {
    var l = ka !== 0;
    return ka = 0, l;
  }
  function lo(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Ar(l) {
    if (Hf) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Hf = !1;
    }
    Oa = 0, yt = je = he = null, ua = !1, ia = ka = 0, ou = null;
  }
  function vl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return yt === null ? he.memoizedState = yt = l : yt = yt.next = l, yt;
  }
  function St() {
    if (je === null) {
      var l = he.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = je.next;
    var n = yt === null ? he.memoizedState : yt.next;
    if (n !== null)
      yt = n, je = l;
    else {
      if (l === null)
        throw he.alternate === null ? Error(q(467)) : Error(q(310));
      je = l, l = {
        memoizedState: je.memoizedState,
        baseState: je.baseState,
        baseQueue: je.baseQueue,
        queue: je.queue,
        next: null
      }, yt === null ? he.memoizedState = yt = l : yt = yt.next = l;
    }
    return yt;
  }
  function xf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Cf(l) {
    var n = ia;
    return ia += 1, ou === null && (ou = []), l = Jh(ou, l, n), n = he, (yt === null ? n.memoizedState : yt.next) === null && (n = n.alternate, A.H = n === null || n.memoizedState === null ? dy : hy), l;
  }
  function xt(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Cf(l);
      if (l.$$typeof === Mt) return $t(l);
    }
    throw Error(q(438, String(l)));
  }
  function Rr(l) {
    var n = null, u = he.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = he.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = xf(), he.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = vt;
    return n.index++, u;
  }
  function bn(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Nf(l) {
    var n = St();
    return zr(n, je, l);
  }
  function zr(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(q(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var y = s.next;
        s.next = r.next, r.next = y;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var m = y = null, g = null, D = n, G = !1;
      do {
        var X = D.lane & -536870913;
        if (X !== D.lane ? (De & X) === X : (Oa & X) === X) {
          var M = D.revertLane;
          if (M === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }), X === Da && (G = !0);
          else if ((Oa & M) === M) {
            D = D.next, M === Da && (G = !0);
            continue;
          } else
            X = {
              lane: 0,
              revertLane: D.revertLane,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }, g === null ? (m = g = X, y = r) : g = g.next = X, he.lanes |= M, yu |= M;
          X = D.action, Wu && u(r, X), r = D.hasEagerState ? D.eagerState : u(r, X);
        } else
          M = {
            lane: X,
            revertLane: D.revertLane,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          }, g === null ? (m = g = M, y = r) : g = g.next = M, he.lanes |= X, yu |= X;
        D = D.next;
      } while (D !== null && D !== n);
      if (g === null ? y = r : g.next = m, !ul(r, l.memoizedState) && (Xt = !0, G && (u = Vt, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = y, l.baseQueue = g, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Dr(l) {
    var n = St(), u = n.queue;
    if (u === null) throw Error(q(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var y = s = s.next;
      do
        r = l(r, y.action), y = y.next;
      while (y !== s);
      ul(r, n.memoizedState) || (Xt = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function Bf(l, n, u) {
    var c = he, s = St(), r = Ne;
    if (r) {
      if (u === void 0) throw Error(q(407));
      u = u();
    } else u = n();
    var y = !ul(
      (je || s).memoizedState,
      u
    );
    y && (s.memoizedState = u, Xt = !0), s = s.queue;
    var m = ey.bind(null, c, s, l);
    if (Ke(2048, 8, m, [l]), s.getSnapshot !== n || y || yt !== null && yt.memoizedState.tag & 1) {
      if (c.flags |= 2048, Ll(
        9,
        _f(),
        Ph.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), Fe === null) throw Error(q(349));
      r || (Oa & 124) !== 0 || Or(c, n, u);
    }
    return u;
  }
  function Or(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = he.updateQueue, n === null ? (n = xf(), he.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function Ph(l, n, u, c) {
    n.value = u, n.getSnapshot = c, ty(n) && Mr(l);
  }
  function ey(l, n, u) {
    return u(function() {
      ty(n) && Mr(l);
    });
  }
  function ty(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !ul(l, u);
    } catch {
      return !0;
    }
  }
  function Mr(l) {
    var n = dn(l, 2);
    n !== null && fa(n, l, 2);
  }
  function qf(l) {
    var n = vl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Wu) {
        kn(!0);
        try {
          u();
        } finally {
          kn(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bn,
      lastRenderedState: l
    }, n;
  }
  function Ur(l, n, u, c) {
    return l.baseState = u, zr(
      l,
      je,
      typeof c == "function" ? c : bn
    );
  }
  function N0(l, n, u, c, s) {
    if (Pi(l)) throw Error(q(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          r.listeners.push(y);
        }
      };
      A.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, Hr(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function Hr(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = A.T, y = {};
      A.T = y;
      try {
        var m = u(s, c), g = A.S;
        g !== null && g(y, m), Yf(l, n, m);
      } catch (D) {
        Cr(l, n, D);
      } finally {
        A.T = r;
      }
    } else
      try {
        r = u(s, c), Yf(l, n, r);
      } catch (D) {
        Cr(l, n, D);
      }
  }
  function Yf(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        xr(l, n, c);
      },
      function(c) {
        return Cr(l, n, c);
      }
    ) : xr(l, n, u);
  }
  function xr(l, n, u) {
    n.status = "fulfilled", n.value = u, ly(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Hr(l, u)));
  }
  function Cr(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, ly(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function ly(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Nr(l, n) {
    return n;
  }
  function ay(l, n) {
    if (Ne) {
      var u = Fe.formState;
      if (u !== null) {
        e: {
          var c = he;
          if (Ne) {
            if (Ye) {
              t: {
                for (var s = Ye, r = za; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = Ia(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                Ye = Ia(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            nu(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = vl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nr,
      lastRenderedState: n
    }, u.queue = c, u = sy.bind(
      null,
      he,
      c
    ), c.dispatch = u, c = qf(!1), r = Xf.bind(
      null,
      he,
      !1,
      c.queue
    ), c = vl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = N0.bind(
      null,
      he,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Sn(l) {
    var n = St();
    return Br(n, je, l);
  }
  function Br(l, n, u) {
    if (n = zr(
      l,
      n,
      Nr
    )[0], l = Nf(bn)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Cf(n);
      } catch (y) {
        throw y === $u ? Df : y;
      }
    else c = n;
    n = St();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (he.flags |= 2048, Ll(
      9,
      _f(),
      sv.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function sv(l, n) {
    l.action = n;
  }
  function qr(l) {
    var n = St(), u = je;
    if (u !== null)
      return Br(n, u, l);
    St(), n = n.memoizedState, u = St();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Ll(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = he.updateQueue, n === null && (n = xf(), he.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function _f() {
    return { destroy: void 0, resource: void 0 };
  }
  function Gf() {
    return St().memoizedState;
  }
  function Iu(l, n, u, c) {
    var s = vl();
    c = c === void 0 ? null : c, he.flags |= l, s.memoizedState = Ll(
      1 | n,
      _f(),
      u,
      c
    );
  }
  function Ke(l, n, u, c) {
    var s = St();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    je !== null && c !== null && Sr(c, je.memoizedState.deps) ? s.memoizedState = Ll(n, r, u, c) : (he.flags |= l, s.memoizedState = Ll(
      1 | n,
      r,
      u,
      c
    ));
  }
  function B0(l, n) {
    Iu(8390656, 8, l, n);
  }
  function q0(l, n) {
    Ke(2048, 8, l, n);
  }
  function ny(l, n) {
    return Ke(4, 2, l, n);
  }
  function $a(l, n) {
    return Ke(4, 4, l, n);
  }
  function uy(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function Yr(l, n, u) {
    u = u != null ? u.concat([l]) : null, Ke(4, 4, uy.bind(null, n, l), u);
  }
  function Wi() {
  }
  function Fi(l, n) {
    var u = St();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Sr(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function iy(l, n) {
    var u = St();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Sr(n, c[1]))
      return c[0];
    if (c = l(), Wu) {
      kn(!0);
      try {
        l();
      } finally {
        kn(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Vf(l, n, u) {
    return u === void 0 || (Oa & 1073741824) !== 0 ? l.memoizedState = n : (l.memoizedState = u, l = Qy(), he.lanes |= l, yu |= l, u);
  }
  function cy(l, n, u, c) {
    return ul(u, n) ? u : $i.current !== null ? (l = Vf(l, u, c), ul(l, n) || (Xt = !0), l) : (Oa & 42) === 0 ? (Xt = !0, l.memoizedState = u) : (l = Qy(), he.lanes |= l, yu |= l, n);
  }
  function Y0(l, n, u, c, s) {
    var r = j.p;
    j.p = r !== 0 && 8 > r ? r : 8;
    var y = A.T, m = {};
    A.T = m, Xf(l, !1, n, u);
    try {
      var g = s(), D = A.S;
      if (D !== null && D(m, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var G = x0(
          g,
          c
        );
        Ii(
          l,
          n,
          G,
          oa(l)
        );
      } else
        Ii(
          l,
          n,
          c,
          oa(l)
        );
    } catch (X) {
      Ii(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: X },
        oa()
      );
    } finally {
      j.p = r, A.T = y;
    }
  }
  function rv() {
  }
  function _r(l, n, u, c) {
    if (l.tag !== 5) throw Error(q(476));
    var s = _0(l).queue;
    Y0(
      l,
      s,
      n,
      Z,
      u === null ? rv : function() {
        return ao(l), u(c);
      }
    );
  }
  function _0(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: bn,
        lastRenderedState: Z
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: bn,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function ao(l) {
    var n = _0(l).next.queue;
    Ii(l, n, {}, oa());
  }
  function Ma() {
    return $t(Il);
  }
  function oy() {
    return St().memoizedState;
  }
  function G0() {
    return St().memoizedState;
  }
  function V0(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = oa();
          l = Zl(u);
          var c = gn(n, l, u);
          c !== null && (fa(c, n, u), ki(c, n, u)), n = { cache: Ic() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function fy(l, n, u) {
    var c = oa();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pi(l) ? X0(n, u) : (u = Qc(l, n, u, c), u !== null && (fa(u, l, c), ry(u, n, c)));
  }
  function sy(l, n, u) {
    var c = oa();
    Ii(l, n, u, c);
  }
  function Ii(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Pi(l)) X0(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var y = n.lastRenderedState, m = r(y, u);
          if (s.hasEagerState = !0, s.eagerState = m, ul(m, y))
            return Lu(l, n, s, 0), Fe === null && La(), !1;
        } catch {
        } finally {
        }
      if (u = Qc(l, n, s, c), u !== null)
        return fa(u, l, c), ry(u, n, c), !0;
    }
    return !1;
  }
  function Xf(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: hc(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pi(l)) {
      if (n) throw Error(q(479));
    } else
      n = Qc(
        l,
        u,
        c,
        2
      ), n !== null && fa(n, l, 2);
  }
  function Pi(l) {
    var n = l.alternate;
    return l === he || n !== null && n === he;
  }
  function X0(l, n) {
    ua = Hf = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function ry(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, Io(l, u);
    }
  }
  var Gr = {
    readContext: $t,
    use: xt,
    useCallback: mt,
    useContext: mt,
    useEffect: mt,
    useImperativeHandle: mt,
    useLayoutEffect: mt,
    useInsertionEffect: mt,
    useMemo: mt,
    useReducer: mt,
    useRef: mt,
    useState: mt,
    useDebugValue: mt,
    useDeferredValue: mt,
    useTransition: mt,
    useSyncExternalStore: mt,
    useId: mt,
    useHostTransitionStatus: mt,
    useFormState: mt,
    useActionState: mt,
    useOptimistic: mt,
    useMemoCache: mt,
    useCacheRefresh: mt
  }, dy = {
    readContext: $t,
    use: xt,
    useCallback: function(l, n) {
      return vl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: $t,
    useEffect: B0,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Iu(
        4194308,
        4,
        uy.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Iu(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Iu(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = vl();
      n = n === void 0 ? null : n;
      var c = l();
      if (Wu) {
        kn(!0);
        try {
          l();
        } finally {
          kn(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = vl();
      if (u !== void 0) {
        var s = u(n);
        if (Wu) {
          kn(!0);
          try {
            u(n);
          } finally {
            kn(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = fy.bind(
        null,
        he,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = vl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = qf(l);
      var n = l.queue, u = sy.bind(null, he, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Wi,
    useDeferredValue: function(l, n) {
      var u = vl();
      return Vf(u, l, n);
    },
    useTransition: function() {
      var l = qf(!1);
      return l = Y0.bind(
        null,
        he,
        l.queue,
        !0,
        !1
      ), vl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = he, s = vl();
      if (Ne) {
        if (u === void 0)
          throw Error(q(407));
        u = u();
      } else {
        if (u = n(), Fe === null)
          throw Error(q(349));
        (De & 124) !== 0 || Or(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, B0(ey.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Ll(
        9,
        _f(),
        Ph.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = vl(), n = Fe.identifierPrefix;
      if (Ne) {
        var u = bt, c = Ja;
        u = (c & ~(1 << 32 - Gl(c) - 1)).toString(32) + u, n = "«" + n + "R" + u, u = ka++, 0 < u && (n += "H" + u.toString(32)), n += "»";
      } else
        u = Fh++, n = "«" + n + "r" + u.toString(32) + "»";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Ma,
    useFormState: ay,
    useActionState: ay,
    useOptimistic: function(l) {
      var n = vl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = Xf.bind(
        null,
        he,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Rr,
    useCacheRefresh: function() {
      return vl().memoizedState = V0.bind(
        null,
        he
      );
    }
  }, hy = {
    readContext: $t,
    use: xt,
    useCallback: Fi,
    useContext: $t,
    useEffect: q0,
    useImperativeHandle: Yr,
    useInsertionEffect: ny,
    useLayoutEffect: $a,
    useMemo: iy,
    useReducer: Nf,
    useRef: Gf,
    useState: function() {
      return Nf(bn);
    },
    useDebugValue: Wi,
    useDeferredValue: function(l, n) {
      var u = St();
      return cy(
        u,
        je.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Nf(bn)[0], n = St().memoizedState;
      return [
        typeof l == "boolean" ? l : Cf(l),
        n
      ];
    },
    useSyncExternalStore: Bf,
    useId: oy,
    useHostTransitionStatus: Ma,
    useFormState: Sn,
    useActionState: Sn,
    useOptimistic: function(l, n) {
      var u = St();
      return Ur(u, je, l, n);
    },
    useMemoCache: Rr,
    useCacheRefresh: G0
  }, fu = {
    readContext: $t,
    use: xt,
    useCallback: Fi,
    useContext: $t,
    useEffect: q0,
    useImperativeHandle: Yr,
    useInsertionEffect: ny,
    useLayoutEffect: $a,
    useMemo: iy,
    useReducer: Dr,
    useRef: Gf,
    useState: function() {
      return Dr(bn);
    },
    useDebugValue: Wi,
    useDeferredValue: function(l, n) {
      var u = St();
      return je === null ? Vf(u, l, n) : cy(
        u,
        je.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Dr(bn)[0], n = St().memoizedState;
      return [
        typeof l == "boolean" ? l : Cf(l),
        n
      ];
    },
    useSyncExternalStore: Bf,
    useId: oy,
    useHostTransitionStatus: Ma,
    useFormState: qr,
    useActionState: qr,
    useOptimistic: function(l, n) {
      var u = St();
      return je !== null ? Ur(u, je, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Rr,
    useCacheRefresh: G0
  }, ec = null, no = 0;
  function Vr(l) {
    var n = no;
    return no += 1, ec === null && (ec = []), Jh(ec, l, n);
  }
  function tc(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function gl(l, n) {
    throw n.$$typeof === Pe ? Error(q(525)) : (l = Object.prototype.toString.call(n), Error(
      q(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function yy(l) {
    var n = l._init;
    return n(l._payload);
  }
  function wl(l) {
    function n(R, E) {
      if (l) {
        var z = R.deletions;
        z === null ? (R.deletions = [E], R.flags |= 16) : z.push(E);
      }
    }
    function u(R, E) {
      if (!l) return null;
      for (; E !== null; )
        n(R, E), E = E.sibling;
      return null;
    }
    function c(R) {
      for (var E = /* @__PURE__ */ new Map(); R !== null; )
        R.key !== null ? E.set(R.key, R) : E.set(R.index, R), R = R.sibling;
      return E;
    }
    function s(R, E) {
      return R = wa(R, E), R.index = 0, R.sibling = null, R;
    }
    function r(R, E, z) {
      return R.index = z, l ? (z = R.alternate, z !== null ? (z = z.index, z < E ? (R.flags |= 67108866, E) : z) : (R.flags |= 67108866, E)) : (R.flags |= 1048576, E);
    }
    function y(R) {
      return l && R.alternate === null && (R.flags |= 67108866), R;
    }
    function m(R, E, z, V) {
      return E === null || E.tag !== 6 ? (E = wc(z, R.mode, V), E.return = R, E) : (E = s(E, z), E.return = R, E);
    }
    function g(R, E, z, V) {
      var $ = z.type;
      return $ === dt ? G(
        R,
        E,
        z.props.children,
        V,
        z.key
      ) : E !== null && (E.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === wt && yy($) === E.type) ? (E = s(E, z.props), tc(E, z), E.return = R, E) : (E = Q(
        z.type,
        z.key,
        z.props,
        null,
        R.mode,
        V
      ), tc(E, z), E.return = R, E);
    }
    function D(R, E, z, V) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== z.containerInfo || E.stateNode.implementation !== z.implementation ? (E = ht(z, R.mode, V), E.return = R, E) : (E = s(E, z.children || []), E.return = R, E);
    }
    function G(R, E, z, V, $) {
      return E === null || E.tag !== 7 ? (E = Ea(
        z,
        R.mode,
        V,
        $
      ), E.return = R, E) : (E = s(E, z), E.return = R, E);
    }
    function X(R, E, z) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = wc(
          "" + E,
          R.mode,
          z
        ), E.return = R, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case ge:
            return z = Q(
              E.type,
              E.key,
              E.props,
              null,
              R.mode,
              z
            ), tc(z, E), z.return = R, z;
          case pt:
            return E = ht(
              E,
              R.mode,
              z
            ), E.return = R, E;
          case wt:
            var V = E._init;
            return E = V(E._payload), X(R, E, z);
        }
        if (qt(E) || de(E))
          return E = Ea(
            E,
            R.mode,
            z,
            null
          ), E.return = R, E;
        if (typeof E.then == "function")
          return X(R, Vr(E), z);
        if (E.$$typeof === Mt)
          return X(
            R,
            Af(R, E),
            z
          );
        gl(R, E);
      }
      return null;
    }
    function M(R, E, z, V) {
      var $ = E !== null ? E.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return $ !== null ? null : m(R, E, "" + z, V);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case ge:
            return z.key === $ ? g(R, E, z, V) : null;
          case pt:
            return z.key === $ ? D(R, E, z, V) : null;
          case wt:
            return $ = z._init, z = $(z._payload), M(R, E, z, V);
        }
        if (qt(z) || de(z))
          return $ !== null ? null : G(R, E, z, V, null);
        if (typeof z.then == "function")
          return M(
            R,
            E,
            Vr(z),
            V
          );
        if (z.$$typeof === Mt)
          return M(
            R,
            E,
            Af(R, z),
            V
          );
        gl(R, z);
      }
      return null;
    }
    function H(R, E, z, V, $) {
      if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
        return R = R.get(z) || null, m(E, R, "" + V, $);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case ge:
            return R = R.get(
              V.key === null ? z : V.key
            ) || null, g(E, R, V, $);
          case pt:
            return R = R.get(
              V.key === null ? z : V.key
            ) || null, D(E, R, V, $);
          case wt:
            var Te = V._init;
            return V = Te(V._payload), H(
              R,
              E,
              z,
              V,
              $
            );
        }
        if (qt(V) || de(V))
          return R = R.get(z) || null, G(E, R, V, $, null);
        if (typeof V.then == "function")
          return H(
            R,
            E,
            z,
            Vr(V),
            $
          );
        if (V.$$typeof === Mt)
          return H(
            R,
            E,
            z,
            Af(E, V),
            $
          );
        gl(E, V);
      }
      return null;
    }
    function le(R, E, z, V) {
      for (var $ = null, Te = null, ee = E, ce = E = 0, Pt = null; ee !== null && ce < z.length; ce++) {
        ee.index > ce ? (Pt = ee, ee = null) : Pt = ee.sibling;
        var Ce = M(
          R,
          ee,
          z[ce],
          V
        );
        if (Ce === null) {
          ee === null && (ee = Pt);
          break;
        }
        l && ee && Ce.alternate === null && n(R, ee), E = r(Ce, E, ce), Te === null ? $ = Ce : Te.sibling = Ce, Te = Ce, ee = Pt;
      }
      if (ce === z.length)
        return u(R, ee), Ne && He(R, ce), $;
      if (ee === null) {
        for (; ce < z.length; ce++)
          ee = X(R, z[ce], V), ee !== null && (E = r(
            ee,
            E,
            ce
          ), Te === null ? $ = ee : Te.sibling = ee, Te = ee);
        return Ne && He(R, ce), $;
      }
      for (ee = c(ee); ce < z.length; ce++)
        Pt = H(
          ee,
          R,
          ce,
          z[ce],
          V
        ), Pt !== null && (l && Pt.alternate !== null && ee.delete(
          Pt.key === null ? ce : Pt.key
        ), E = r(
          Pt,
          E,
          ce
        ), Te === null ? $ = Pt : Te.sibling = Pt, Te = Pt);
      return l && ee.forEach(function(pi) {
        return n(R, pi);
      }), Ne && He(R, ce), $;
    }
    function ae(R, E, z, V) {
      if (z == null) throw Error(q(151));
      for (var $ = null, Te = null, ee = E, ce = E = 0, Pt = null, Ce = z.next(); ee !== null && !Ce.done; ce++, Ce = z.next()) {
        ee.index > ce ? (Pt = ee, ee = null) : Pt = ee.sibling;
        var pi = M(R, ee, Ce.value, V);
        if (pi === null) {
          ee === null && (ee = Pt);
          break;
        }
        l && ee && pi.alternate === null && n(R, ee), E = r(pi, E, ce), Te === null ? $ = pi : Te.sibling = pi, Te = pi, ee = Pt;
      }
      if (Ce.done)
        return u(R, ee), Ne && He(R, ce), $;
      if (ee === null) {
        for (; !Ce.done; ce++, Ce = z.next())
          Ce = X(R, Ce.value, V), Ce !== null && (E = r(Ce, E, ce), Te === null ? $ = Ce : Te.sibling = Ce, Te = Ce);
        return Ne && He(R, ce), $;
      }
      for (ee = c(ee); !Ce.done; ce++, Ce = z.next())
        Ce = H(ee, R, ce, Ce.value, V), Ce !== null && (l && Ce.alternate !== null && ee.delete(Ce.key === null ? ce : Ce.key), E = r(Ce, E, ce), Te === null ? $ = Ce : Te.sibling = Ce, Te = Ce);
      return l && ee.forEach(function(Av) {
        return n(R, Av);
      }), Ne && He(R, ce), $;
    }
    function Ge(R, E, z, V) {
      if (typeof z == "object" && z !== null && z.type === dt && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case ge:
            e: {
              for (var $ = z.key; E !== null; ) {
                if (E.key === $) {
                  if ($ = z.type, $ === dt) {
                    if (E.tag === 7) {
                      u(
                        R,
                        E.sibling
                      ), V = s(
                        E,
                        z.props.children
                      ), V.return = R, R = V;
                      break e;
                    }
                  } else if (E.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === wt && yy($) === E.type) {
                    u(
                      R,
                      E.sibling
                    ), V = s(E, z.props), tc(V, z), V.return = R, R = V;
                    break e;
                  }
                  u(R, E);
                  break;
                } else n(R, E);
                E = E.sibling;
              }
              z.type === dt ? (V = Ea(
                z.props.children,
                R.mode,
                V,
                z.key
              ), V.return = R, R = V) : (V = Q(
                z.type,
                z.key,
                z.props,
                null,
                R.mode,
                V
              ), tc(V, z), V.return = R, R = V);
            }
            return y(R);
          case pt:
            e: {
              for ($ = z.key; E !== null; ) {
                if (E.key === $)
                  if (E.tag === 4 && E.stateNode.containerInfo === z.containerInfo && E.stateNode.implementation === z.implementation) {
                    u(
                      R,
                      E.sibling
                    ), V = s(E, z.children || []), V.return = R, R = V;
                    break e;
                  } else {
                    u(R, E);
                    break;
                  }
                else n(R, E);
                E = E.sibling;
              }
              V = ht(z, R.mode, V), V.return = R, R = V;
            }
            return y(R);
          case wt:
            return $ = z._init, z = $(z._payload), Ge(
              R,
              E,
              z,
              V
            );
        }
        if (qt(z))
          return le(
            R,
            E,
            z,
            V
          );
        if (de(z)) {
          if ($ = de(z), typeof $ != "function") throw Error(q(150));
          return z = $.call(z), ae(
            R,
            E,
            z,
            V
          );
        }
        if (typeof z.then == "function")
          return Ge(
            R,
            E,
            Vr(z),
            V
          );
        if (z.$$typeof === Mt)
          return Ge(
            R,
            E,
            Af(R, z),
            V
          );
        gl(R, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z, E !== null && E.tag === 6 ? (u(R, E.sibling), V = s(E, z), V.return = R, R = V) : (u(R, E), V = wc(z, R.mode, V), V.return = R, R = V), y(R)) : u(R, E);
    }
    return function(R, E, z, V) {
      try {
        no = 0;
        var $ = Ge(
          R,
          E,
          z,
          V
        );
        return ec = null, $;
      } catch (ee) {
        if (ee === $u || ee === Df) throw ee;
        var Te = jl(29, ee, null, R.mode);
        return Te.lanes = V, Te.return = R, Te;
      } finally {
      }
    };
  }
  var lc = wl(!0), Tn = wl(!1), ca = P(null), bl = null;
  function su(l) {
    var n = l.alternate;
    ue(ke, ke.current & 1), ue(ca, l), bl === null && (n === null || $i.current !== null || n.memoizedState !== null) && (bl = l);
  }
  function En(l) {
    if (l.tag === 22) {
      if (ue(ke, ke.current), ue(ca, l), bl === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (bl = l);
      }
    } else An();
  }
  function An() {
    ue(ke, ke.current), ue(ca, ca.current);
  }
  function Wa(l) {
    K(ca), bl === l && (bl = null), K(ke);
  }
  var ke = P(0);
  function jf(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || ss(u)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function Pu(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : Be({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Xr = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = oa(), s = Zl(c);
      s.payload = n, u != null && (s.callback = u), n = gn(l, s, c), n !== null && (fa(n, l, c), ki(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = oa(), s = Zl(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = gn(l, s, c), n !== null && (fa(n, l, c), ki(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = oa(), c = Zl(u);
      c.tag = 2, n != null && (c.callback = n), n = gn(l, c, u), n !== null && (fa(n, l, u), ki(n, l, u));
    }
  };
  function uo(l, n, u, c, s, r, y) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, y) : n.prototype && n.prototype.isPureReactComponent ? !Xu(u, c) || !Xu(s, r) : !0;
  }
  function ac(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && Xr.enqueueReplaceState(n, n.state, null);
  }
  function ei(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = Be({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  var Qf = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function io(l) {
    Qf(l);
  }
  function my(l) {
    console.error(l);
  }
  function Zf(l) {
    Qf(l);
  }
  function Lf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function py(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function vy(l, n, u) {
    return u = Zl(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Lf(l, n);
    }, u;
  }
  function gy(l) {
    return l = Zl(l), l.tag = 3, l;
  }
  function Jl(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        py(n, u, c);
      };
    }
    var y = u.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (l.callback = function() {
      py(n, u, c), typeof s != "function" && (ni === null ? ni = /* @__PURE__ */ new Set([this]) : ni.add(this));
      var m = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function j0(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && Wc(
        n,
        u,
        s,
        !0
      ), u = ca.current, u !== null) {
        switch (u.tag) {
          case 13:
            return bl === null ? dc() : u.alternate === null && Rt === 0 && (Rt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === mr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), dd(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === mr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), dd(l, c, s)), !1;
        }
        throw Error(q(435, u.tag));
      }
      return dd(l, c, s), dc(), !1;
    }
    if (Ne)
      return n = ca.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== wi && (l = Error(q(422), { cause: c }), $c(na(l, u)))) : (c !== wi && (n = Error(q(423), {
        cause: c
      }), $c(
        na(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = na(c, u), s = vy(
        l.stateNode,
        c,
        s
      ), $h(l, s), Rt !== 4 && (Rt = 2)), !1;
    var r = Error(q(520), { cause: c });
    if (r = na(r, u), yo === null ? yo = [r] : yo.push(r), Rt !== 4 && (Rt = 2), n === null) return !0;
    c = na(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = vy(u.stateNode, c, l), $h(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (ni === null || !ni.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = gy(s), Jl(
              s,
              l,
              u,
              c
            ), $h(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Tt = Error(q(461)), Xt = !1;
  function Ft(l, n, u, c) {
    n.child = l === null ? Tn(n, null, u, c) : lc(
      n,
      l.child,
      u,
      c
    );
  }
  function Q0(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var y = {};
      for (var m in c)
        m !== "ref" && (y[m] = c[m]);
    } else y = c;
    return Ku(n), c = Tr(
      l,
      n,
      u,
      y,
      r,
      s
    ), m = Er(), l !== null && !Xt ? (lo(l, n, s), Rn(l, n, s)) : (Ne && m && Li(n), n.flags |= 1, Ft(l, n, c, s), n.child);
  }
  function ru(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !gf(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, nc(
        l,
        n,
        r,
        c,
        s
      )) : (l = Q(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !Wr(l, s)) {
      var y = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Xu, u(y, c) && l.ref === n.ref)
        return Rn(l, n, s);
    }
    return n.flags |= 1, l = wa(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function nc(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (Xu(r, c) && l.ref === n.ref)
        if (Xt = !1, n.pendingProps = c = r, Wr(l, s))
          (l.flags & 131072) !== 0 && (Xt = !0);
        else
          return n.lanes = l.lanes, Rn(l, n, s);
    }
    return Qr(
      l,
      n,
      u,
      c,
      s
    );
  }
  function jr(l, n, u) {
    var c = n.pendingProps, s = c.children, r = l !== null ? l.memoizedState : null;
    if (c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (c = r !== null ? r.baseLanes | u : u, l !== null) {
          for (s = n.child = l.child, r = 0; s !== null; )
            r = r | s.lanes | s.childLanes, s = s.sibling;
          n.childLanes = r & ~c;
        } else n.childLanes = 0, n.child = null;
        return uc(
          l,
          n,
          c,
          u
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ji(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? Wt(n, r) : eo(), En(n);
      else
        return n.lanes = n.childLanes = 536870912, uc(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u
        );
    } else
      r !== null ? (Ji(n, r.cachePool), Wt(n, r), An(), n.memoizedState = null) : (l !== null && Ji(n, null), eo(), An());
    return Ft(l, n, s, u), n.child;
  }
  function uc(l, n, u, c) {
    var s = zf();
    return s = s === null ? null : { parent: Gt._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && Ji(n, null), eo(), En(n), l !== null && Wc(l, n, c, !0), null;
  }
  function wf(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(q(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function Qr(l, n, u, c, s) {
    return Ku(n), u = Tr(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = Er(), l !== null && !Xt ? (lo(l, n, s), Rn(l, n, s)) : (Ne && c && Li(n), n.flags |= 1, Ft(l, n, u, s), n.child);
  }
  function by(l, n, u, c, s, r) {
    return Ku(n), n.updateQueue = null, u = Ih(
      n,
      c,
      u,
      s
    ), Fu(l), c = Er(), l !== null && !Xt ? (lo(l, n, r), Rn(l, n, r)) : (Ne && c && Li(n), n.flags |= 1, Ft(l, n, u, r), n.child);
  }
  function Zr(l, n, u, c, s) {
    if (Ku(n), n.stateNode === null) {
      var r = Lc, y = u.contextType;
      typeof y == "object" && y !== null && (r = $t(y)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Xr, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, vr(n), y = u.contextType, r.context = typeof y == "object" && y !== null ? $t(y) : Lc, r.state = n.memoizedState, y = u.getDerivedStateFromProps, typeof y == "function" && (Pu(
        n,
        u,
        y,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (y = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), y !== r.state && Xr.enqueueReplaceState(r, r.state, null), cu(n, c, r, s), Pc(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var m = n.memoizedProps, g = ei(u, m);
      r.props = g;
      var D = r.context, G = u.contextType;
      y = Lc, typeof G == "object" && G !== null && (y = $t(G));
      var X = u.getDerivedStateFromProps;
      G = typeof X == "function" || typeof r.getSnapshotBeforeUpdate == "function", m = n.pendingProps !== m, G || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m || D !== y) && ac(
        n,
        r,
        c,
        y
      ), vn = !1;
      var M = n.memoizedState;
      r.state = M, cu(n, c, r, s), Pc(), D = n.memoizedState, m || M !== D || vn ? (typeof X == "function" && (Pu(
        n,
        u,
        X,
        c
      ), D = n.memoizedState), (g = vn || uo(
        n,
        u,
        g,
        c,
        M,
        D,
        y
      )) ? (G || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = D), r.props = c, r.state = D, r.context = y, c = g) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, gr(l, n), y = n.memoizedProps, G = ei(u, y), r.props = G, X = n.pendingProps, M = r.context, D = u.contextType, g = Lc, typeof D == "object" && D !== null && (g = $t(D)), m = u.getDerivedStateFromProps, (D = typeof m == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (y !== X || M !== g) && ac(
        n,
        r,
        c,
        g
      ), vn = !1, M = n.memoizedState, r.state = M, cu(n, c, r, s), Pc();
      var H = n.memoizedState;
      y !== X || M !== H || vn || l !== null && l.dependencies !== null && Ef(l.dependencies) ? (typeof m == "function" && (Pu(
        n,
        u,
        m,
        c
      ), H = n.memoizedState), (G = vn || uo(
        n,
        u,
        G,
        c,
        M,
        H,
        g
      ) || l !== null && l.dependencies !== null && Ef(l.dependencies)) ? (D || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, H, g), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        H,
        g
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || y === l.memoizedProps && M === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && M === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = H), r.props = c, r.state = H, r.context = g, c = G) : (typeof r.componentDidUpdate != "function" || y === l.memoizedProps && M === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && M === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, wf(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = lc(
      n,
      l.child,
      null,
      s
    ), n.child = lc(
      n,
      null,
      u,
      s
    )) : Ft(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Rn(
      l,
      n,
      s
    ), l;
  }
  function Lr(l, n, u, c) {
    return kc(), n.flags |= 256, Ft(l, n, u, c), n.child;
  }
  var wr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Sy(l) {
    return { baseLanes: l, cachePool: hr() };
  }
  function Ty(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= xa), l;
  }
  function Ey(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, y;
    if ((y = r) || (y = l !== null && l.memoizedState === null ? !1 : (ke.current & 2) !== 0), y && (s = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (Ne) {
        if (s ? su(n) : An(), Ne) {
          var m = Ye, g;
          if (g = m) {
            e: {
              for (g = m, m = za; g.nodeType !== 8; ) {
                if (!m) {
                  m = null;
                  break e;
                }
                if (g = Ia(
                  g.nextSibling
                ), g === null) {
                  m = null;
                  break e;
                }
              }
              m = g;
            }
            m !== null ? (n.memoizedState = {
              dehydrated: m,
              treeContext: au !== null ? { id: Ja, overflow: bt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, g = jl(
              18,
              null,
              null,
              0
            ), g.stateNode = m, g.return = n, n.child = g, Ht = n, Ye = null, g = !0) : g = !1;
          }
          g || nu(n);
        }
        if (m = n.memoizedState, m !== null && (m = m.dehydrated, m !== null))
          return ss(m) ? n.lanes = 32 : n.lanes = 536870912, null;
        Wa(n);
      }
      return m = c.children, c = c.fallback, s ? (An(), s = n.mode, m = Kr(
        { mode: "hidden", children: m },
        s
      ), c = Ea(
        c,
        s,
        u,
        null
      ), m.return = n, c.return = n, m.sibling = c, n.child = m, s = n.child, s.memoizedState = Sy(u), s.childLanes = Ty(
        l,
        y,
        u
      ), n.memoizedState = wr, c) : (su(n), Jr(n, m));
    }
    if (g = l.memoizedState, g !== null && (m = g.dehydrated, m !== null)) {
      if (r)
        n.flags & 256 ? (su(n), n.flags &= -257, n = ti(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (An(), n.child = l.child, n.flags |= 128, n = null) : (An(), s = c.fallback, m = n.mode, c = Kr(
          { mode: "visible", children: c.children },
          m
        ), s = Ea(
          s,
          m,
          u,
          null
        ), s.flags |= 2, c.return = n, s.return = n, c.sibling = s, n.child = c, lc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = Sy(u), c.childLanes = Ty(
          l,
          y,
          u
        ), n.memoizedState = wr, n = s);
      else if (su(n), ss(m)) {
        if (y = m.nextSibling && m.nextSibling.dataset, y) var D = y.dgst;
        y = D, c = Error(q(419)), c.stack = "", c.digest = y, $c({ value: c, source: null, stack: null }), n = ti(
          l,
          n,
          u
        );
      } else if (Xt || Wc(l, n, u, !1), y = (u & l.childLanes) !== 0, Xt || y) {
        if (y = Fe, y !== null && (c = u & -u, c = (c & 42) !== 0 ? 1 : Ga(c), c = (c & (y.suspendedLanes | u)) !== 0 ? 0 : c, c !== 0 && c !== g.retryLane))
          throw g.retryLane = c, dn(l, c), fa(y, l, c), Tt;
        m.data === "$?" || dc(), n = ti(
          l,
          n,
          u
        );
      } else
        m.data === "$?" ? (n.flags |= 192, n.child = l.child, n = null) : (l = g.treeContext, Ye = Ia(
          m.nextSibling
        ), Ht = n, Ne = !0, Ra = null, za = !1, l !== null && (Aa[Ql++] = Ja, Aa[Ql++] = bt, Aa[Ql++] = au, Ja = l.id, bt = l.overflow, au = n), n = Jr(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (An(), s = c.fallback, m = n.mode, g = l.child, D = g.sibling, c = wa(g, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = g.subtreeFlags & 65011712, D !== null ? s = wa(D, s) : (s = Ea(
      s,
      m,
      u,
      null
    ), s.flags |= 2), s.return = n, c.return = n, c.sibling = s, n.child = c, c = s, s = n.child, m = l.child.memoizedState, m === null ? m = Sy(u) : (g = m.cachePool, g !== null ? (D = Gt._currentValue, g = g.parent !== D ? { parent: D, pool: D } : g) : g = hr(), m = {
      baseLanes: m.baseLanes | u,
      cachePool: g
    }), s.memoizedState = m, s.childLanes = Ty(
      l,
      y,
      u
    ), n.memoizedState = wr, c) : (su(n), u = l.child, l = u.sibling, u = wa(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (y = n.deletions, y === null ? (n.deletions = [l], n.flags |= 16) : y.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function Jr(l, n) {
    return n = Kr(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Kr(l, n) {
    return l = jl(22, l, null, n), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function ti(l, n, u) {
    return lc(n, l.child, null, u), l = Jr(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function Jf(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), or(l.return, n, u);
  }
  function kr(l, n, u, c, s) {
    var r = l.memoizedState;
    r === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s
    } : (r.isBackwards = n, r.rendering = null, r.renderingStartTime = 0, r.last = c, r.tail = u, r.tailMode = s);
  }
  function $r(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    if (Ft(l, n, c.children, u), c = ke.current, (c & 2) !== 0)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && Jf(l, u, n);
          else if (l.tag === 19)
            Jf(l, u, n);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === n) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === n)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      c &= 1;
    }
    switch (ue(ke, c), s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && jf(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), kr(
          n,
          !1,
          s,
          u,
          r
        );
        break;
      case "backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && jf(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        kr(
          n,
          !0,
          u,
          null,
          r
        );
        break;
      case "together":
        kr(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Rn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), yu |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (Wc(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(q(153));
    if (n.child !== null) {
      for (l = n.child, u = wa(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = wa(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function Wr(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ef(l)));
  }
  function Z0(l, n, u) {
    switch (n.tag) {
      case 3:
        gt(n, n.stateNode.containerInfo), iu(n, Gt, l.memoizedState.cache), kc();
        break;
      case 27:
      case 5:
        ga(n);
        break;
      case 4:
        gt(n, n.stateNode.containerInfo);
        break;
      case 10:
        iu(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (su(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Ey(l, n, u) : (su(n), l = Rn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        su(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (Wc(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return $r(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), ue(ke, ke.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, jr(l, n, u);
      case 24:
        iu(n, Gt, l.memoizedState.cache);
    }
    return Rn(l, n, u);
  }
  function L0(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        Xt = !0;
      else {
        if (!Wr(l, u) && (n.flags & 128) === 0)
          return Xt = !1, Z0(
            l,
            n,
            u
          );
        Xt = (l.flags & 131072) !== 0;
      }
    else
      Xt = !1, Ne && (n.flags & 1048576) !== 0 && cr(n, Jc, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var c = n.elementType, s = c._init;
          if (c = s(c._payload), n.type = c, typeof c == "function")
            gf(c) ? (l = ei(c, l), n.tag = 1, n = Zr(
              null,
              n,
              c,
              l,
              u
            )) : (n.tag = 0, n = Qr(
              null,
              n,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (s = c.$$typeof, s === ml) {
                n.tag = 11, n = Q0(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (s === qe) {
                n.tag = 14, n = ru(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = Rl(c) || c, Error(q(306, n, ""));
          }
        }
        return n;
      case 0:
        return Qr(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = ei(
          c,
          n.pendingProps
        ), Zr(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (gt(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(q(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, gr(l, n), cu(n, c, null, u);
          var y = n.memoizedState;
          if (c = y.cache, iu(n, Gt, c), c !== r.cache && Lh(
            n,
            [Gt],
            u,
            !0
          ), Pc(), c = y.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: y.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Lr(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = na(
                Error(q(424)),
                n
              ), $c(s), n = Lr(
                l,
                n,
                c,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (Ye = Ia(l.firstChild), Ht = n, Ne = !0, Ra = null, za = !0, u = Tn(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (kc(), c === s) {
              n = Rn(
                l,
                n,
                u
              );
              break e;
            }
            Ft(
              l,
              n,
              c,
              u
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return wf(l, n), l === null ? (u = ip(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : Ne || (u = n.type, l = n.pendingProps, c = Na(
          Ue.current
        ).createElement(u), c[kt] = n, c[Dl] = l, oe(c, u, l), _t(c), n.stateNode = c) : n.memoizedState = ip(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return ga(n), l === null && Ne && (c = n.stateNode = k(
          n.type,
          n.pendingProps,
          Ue.current
        ), Ht = n, za = !0, s = Ye, si(n.type) ? (ri = s, Ye = Ia(
          c.firstChild
        )) : Ye = s), Ft(
          l,
          n,
          n.pendingProps.children,
          u
        ), wf(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && Ne && ((s = c = Ye) && (c = Do(
          c,
          n.type,
          n.pendingProps,
          za
        ), c !== null ? (n.stateNode = c, Ht = n, Ye = Ia(
          c.firstChild
        ), za = !1, s = !0) : s = !1), s || nu(n)), ga(n), s = n.type, r = n.pendingProps, y = l !== null ? l.memoizedProps : null, c = r.children, Nn(s, r) ? c = null : y !== null && Nn(s, y) && (n.flags |= 32), n.memoizedState !== null && (s = Tr(
          l,
          n,
          C0,
          null,
          null,
          u
        ), Il._currentValue = s), wf(l, n), Ft(l, n, c, u), n.child;
      case 6:
        return l === null && Ne && ((l = u = Ye) && (u = Sv(
          u,
          n.pendingProps,
          za
        ), u !== null ? (n.stateNode = u, Ht = n, Ye = null, l = !0) : l = !1), l || nu(n)), null;
      case 13:
        return Ey(l, n, u);
      case 4:
        return gt(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = lc(
          n,
          null,
          c,
          u
        ) : Ft(
          l,
          n,
          c,
          u
        ), n.child;
      case 11:
        return Q0(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return Ft(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return Ft(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return Ft(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, iu(n, n.type, c.value), Ft(
          l,
          n,
          c.children,
          u
        ), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, Ku(n), s = $t(s), c = c(s), n.flags |= 1, Ft(l, n, c, u), n.child;
      case 14:
        return ru(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return nc(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return $r(l, n, u);
      case 31:
        return c = n.pendingProps, u = n.mode, c = {
          mode: c.mode,
          children: c.children
        }, l === null ? (u = Kr(
          c,
          u
        ), u.ref = n.ref, n.child = u, u.return = n, n = u) : (u = wa(l.child, c), u.ref = n.ref, n.child = u, u.return = n, n = u), n;
      case 22:
        return jr(l, n, u);
      case 24:
        return Ku(n), c = $t(Gt), l === null ? (s = zf(), s === null && (s = Fe, r = Ic(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = {
          parent: c,
          cache: s
        }, vr(n), iu(n, Gt, s)) : ((l.lanes & u) !== 0 && (gr(l, n), cu(n, null, null, u), Pc()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), iu(n, Gt, c)) : (c = r.cache, iu(n, Gt, c), c !== s.cache && Lh(
          n,
          [Gt],
          u,
          !0
        ))), Ft(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(q(156, n.tag));
  }
  function zn(l) {
    l.flags |= 4;
  }
  function co(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !um(n)) {
      if (n = ca.current, n !== null && ((De & 4194048) === De ? bl !== null : (De & 62914560) !== De && (De & 536870912) === 0 || n !== bl))
        throw Ki = mr, yr;
      l.flags |= 8192;
    }
  }
  function Kf(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? Ri() : 536870912, l.lanes |= n, ho |= n);
  }
  function oo(l, n) {
    if (!Ne)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function ie(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function Ay(l, n, u) {
    var c = n.pendingProps;
    switch (hn(n), n.tag) {
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
        return ie(n), null;
      case 1:
        return ie(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), yn(Gt), ll(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Kc(n) ? zn(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Zh())), ie(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (zn(n), u !== null ? (ie(n), co(n, u)) : (ie(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (zn(n), ie(n), co(n, u)) : (ie(n), n.flags &= -16777217) : (l.memoizedProps !== c && zn(n), ie(n), n.flags &= -16777217), null;
      case 27:
        Ti(n), u = Ue.current;
        var s = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && zn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(q(166));
            return ie(n), null;
          }
          l = Ae.current, Kc(n) ? Sf(n) : (l = k(s, c, u), n.stateNode = l, zn(n));
        }
        return ie(n), null;
      case 5:
        if (Ti(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && zn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(q(166));
            return ie(n), null;
          }
          if (l = Ae.current, Kc(n))
            Sf(n);
          else {
            switch (s = Na(
              Ue.current
            ), l) {
              case 1:
                l = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = s.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? s.createElement("select", { is: c.is }) : s.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? s.createElement(u, { is: c.is }) : s.createElement(u);
                }
            }
            l[kt] = n, l[Dl] = c;
            e: for (s = n.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                l.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === n) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            n.stateNode = l;
            e: switch (oe(l, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!c.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && zn(n);
          }
        }
        return ie(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && zn(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(q(166));
          if (l = Ue.current, Kc(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = Ht, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[kt] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || tm(l.nodeValue, u)), l || nu(n);
          } else
            l = Na(l).createTextNode(
              c
            ), l[kt] = n, n.stateNode = l;
        }
        return ie(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = Kc(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(q(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(q(317));
              s[kt] = n;
            } else
              kc(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ie(n), s = !1;
          } else
            s = Zh(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (Wa(n), n) : (Wa(n), null);
        }
        if (Wa(n), (n.flags & 128) !== 0)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool);
          var r = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), Kf(n, n.updateQueue), ie(n), null;
      case 4:
        return ll(), l === null && Py(n.stateNode.containerInfo), ie(n), null;
      case 10:
        return yn(n.type), ie(n), null;
      case 19:
        if (K(ke), s = n.memoizedState, s === null) return ie(n), null;
        if (c = (n.flags & 128) !== 0, r = s.rendering, r === null)
          if (c) oo(s, !1);
          else {
            if (Rt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = jf(l), r !== null) {
                  for (n.flags |= 128, oo(s, !1), l = r.updateQueue, n.updateQueue = l, Kf(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Se(u, l), u = u.sibling;
                  return ue(
                    ke,
                    ke.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            s.tail !== null && ea() > ud && (n.flags |= 128, c = !0, oo(s, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = jf(r), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, Kf(n, l), oo(s, !0), s.tail === null && s.tailMode === "hidden" && !r.alternate && !Ne)
                return ie(n), null;
            } else
              2 * ea() - s.renderingStartTime > ud && u !== 536870912 && (n.flags |= 128, c = !0, oo(s, !1), n.lanes = 4194304);
          s.isBackwards ? (r.sibling = n.child, n.child = r) : (l = s.last, l !== null ? l.sibling = r : n.child = r, s.last = r);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = ea(), n.sibling = null, l = ke.current, ue(ke, c ? l & 1 | 2 : l & 1), n) : (ie(n), null);
      case 22:
      case 23:
        return Wa(n), to(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (ie(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ie(n), u = n.updateQueue, u !== null && Kf(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && K(pn), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), yn(Gt), ie(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(q(156, n.tag));
  }
  function dv(l, n) {
    switch (hn(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return yn(Gt), ll(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Ti(n), null;
      case 13:
        if (Wa(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(q(340));
          kc();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return K(ke), null;
      case 4:
        return ll(), null;
      case 10:
        return yn(n.type), null;
      case 22:
      case 23:
        return Wa(n), to(), l !== null && K(pn), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return yn(Gt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ry(l, n) {
    switch (hn(n), n.tag) {
      case 3:
        yn(Gt), ll();
        break;
      case 26:
      case 27:
      case 5:
        Ti(n);
        break;
      case 4:
        ll();
        break;
      case 13:
        Wa(n);
        break;
      case 19:
        K(ke);
        break;
      case 10:
        yn(n.type);
        break;
      case 22:
      case 23:
        Wa(n), to(), l !== null && K(pn);
        break;
      case 24:
        yn(Gt);
    }
  }
  function kf(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, y = u.inst;
            c = r(), y.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (m) {
      Le(n, n.return, m);
    }
  }
  function li(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var y = c.inst, m = y.destroy;
            if (m !== void 0) {
              y.destroy = void 0, s = n;
              var g = u, D = m;
              try {
                D();
              } catch (G) {
                Le(
                  s,
                  g,
                  G
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (G) {
      Le(n, n.return, G);
    }
  }
  function Fr(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Mf(n, u);
      } catch (c) {
        Le(l, l.return, c);
      }
    }
  }
  function zy(l, n, u) {
    u.props = ei(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      Le(l, n, c);
    }
  }
  function fo(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      Le(l, n, s);
    }
  }
  function Fa(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          Le(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          Le(l, n, s);
        }
      else u.current = null;
  }
  function so(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      Le(l, l.return, s);
    }
  }
  function Dy(l, n, u) {
    try {
      var c = l.stateNode;
      vv(c, l.type, u, n), c[Dl] = n;
    } catch (s) {
      Le(l, l.return, s);
    }
  }
  function w0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && si(l.type) || l.tag === 4;
  }
  function Ua(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || w0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && si(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function ic(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = vd));
    else if (c !== 4 && (c === 27 && si(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (ic(l, n, u), l = l.sibling; l !== null; )
        ic(l, n, u), l = l.sibling;
  }
  function Ir(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && si(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (Ir(l, n, u), l = l.sibling; l !== null; )
        Ir(l, n, u), l = l.sibling;
  }
  function Pr(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      oe(n, c, u), n[kt] = l, n[Dl] = u;
    } catch (r) {
      Le(l, l.return, r);
    }
  }
  var Dn = !1, Et = !1, ed = !1, td = typeof WeakSet == "function" ? WeakSet : Set, jt = null;
  function Oy(l, n) {
    if (l = l.containerInfo, cs = hs, l = Yh(l), pf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var y = 0, m = -1, g = -1, D = 0, G = 0, X = l, M = null;
            t: for (; ; ) {
              for (var H; X !== u || s !== 0 && X.nodeType !== 3 || (m = y + s), X !== r || c !== 0 && X.nodeType !== 3 || (g = y + c), X.nodeType === 3 && (y += X.nodeValue.length), (H = X.firstChild) !== null; )
                M = X, X = H;
              for (; ; ) {
                if (X === l) break t;
                if (M === u && ++D === s && (m = y), M === r && ++G === c && (g = y), (H = X.nextSibling) !== null) break;
                X = M, M = X.parentNode;
              }
              X = H;
            }
            u = m === -1 || g === -1 ? null : { start: m, end: g };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (os = { focusedElem: l, selectionRange: u }, hs = !1, jt = n; jt !== null; )
      if (n = jt, l = n.child, (n.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = n, jt = l;
      else
        for (; jt !== null; ) {
          switch (n = jt, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var le = ei(
                    u.type,
                    s,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    le,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (ae) {
                  Le(
                    u,
                    u.return,
                    ae
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  fs(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      fs(l);
                      break;
                    default:
                      l.textContent = "";
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
              if ((l & 1024) !== 0) throw Error(q(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, jt = l;
            break;
          }
          jt = n.return;
        }
  }
  function My(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Mn(l, u), c & 4 && kf(5, u);
        break;
      case 1:
        if (Mn(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (y) {
              Le(u, u.return, y);
            }
          else {
            var s = ei(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              Le(
                u,
                u.return,
                y
              );
            }
          }
        c & 64 && Fr(u), c & 512 && fo(u, u.return);
        break;
      case 3:
        if (Mn(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Mf(l, n);
          } catch (y) {
            Le(u, u.return, y);
          }
        }
        break;
      case 27:
        n === null && c & 4 && Pr(u);
      case 26:
      case 5:
        Mn(l, u), n === null && c & 4 && so(u), c & 512 && fo(u, u.return);
        break;
      case 12:
        Mn(l, u);
        break;
      case 13:
        Mn(l, u), c & 4 && ld(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = hv.bind(
          null,
          u
        ), Tv(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || Dn, !c) {
          n = n !== null && n.memoizedState !== null || Et, s = Dn;
          var r = Et;
          Dn = c, (Et = n) && !r ? ai(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Mn(l, u), Dn = s, Et = r;
        }
        break;
      case 30:
        break;
      default:
        Mn(l, u);
    }
  }
  function Uy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Uy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && Po(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var ot = null, il = !1;
  function On(l, n, u) {
    for (u = u.child; u !== null; )
      Re(l, n, u), u = u.sibling;
  }
  function Re(l, n, u) {
    if (zl && typeof zl.onCommitFiberUnmount == "function")
      try {
        zl.onCommitFiberUnmount(xc, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Et || Fa(u, n), On(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Et || Fa(u, n);
        var c = ot, s = il;
        si(u.type) && (ot = u.stateNode, il = !1), On(
          l,
          n,
          u
        ), Wl(u.stateNode), ot = c, il = s;
        break;
      case 5:
        Et || Fa(u, n);
      case 6:
        if (c = ot, s = il, ot = null, On(
          l,
          n,
          u
        ), ot = c, il = s, ot !== null)
          if (il)
            try {
              (ot.nodeType === 9 ? ot.body : ot.nodeName === "HTML" ? ot.ownerDocument.body : ot).removeChild(u.stateNode);
            } catch (r) {
              Le(
                u,
                n,
                r
              );
            }
          else
            try {
              ot.removeChild(u.stateNode);
            } catch (r) {
              Le(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        ot !== null && (il ? (l = ot, bd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Yn(l)) : bd(ot, u.stateNode));
        break;
      case 4:
        c = ot, s = il, ot = u.stateNode.containerInfo, il = !0, On(
          l,
          n,
          u
        ), ot = c, il = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Et || li(2, u, n), Et || li(4, u, n), On(
          l,
          n,
          u
        );
        break;
      case 1:
        Et || (Fa(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && zy(
          u,
          n,
          c
        )), On(
          l,
          n,
          u
        );
        break;
      case 21:
        On(
          l,
          n,
          u
        );
        break;
      case 22:
        Et = (c = Et) || u.memoizedState !== null, On(
          l,
          n,
          u
        ), Et = c;
        break;
      default:
        On(
          l,
          n,
          u
        );
    }
  }
  function ld(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Yn(l);
      } catch (u) {
        Le(n, n.return, u);
      }
  }
  function Hy(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new td()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new td()), n;
      default:
        throw Error(q(435, l.tag));
    }
  }
  function ad(l, n) {
    var u = Hy(l);
    n.forEach(function(c) {
      var s = yv.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(s, s));
    });
  }
  function Ul(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, y = n, m = y;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (si(m.type)) {
                ot = m.stateNode, il = !1;
                break e;
              }
              break;
            case 5:
              ot = m.stateNode, il = !1;
              break e;
            case 3:
            case 4:
              ot = m.stateNode.containerInfo, il = !0;
              break e;
          }
          m = m.return;
        }
        if (ot === null) throw Error(q(160));
        Re(r, y, s), ot = null, il = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        $f(n, l), n = n.sibling;
  }
  var Hl = null;
  function $f(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ul(n, l), It(l), c & 4 && (li(3, l, l.return), kf(3, l), li(5, l, l.return));
        break;
      case 1:
        Ul(n, l), It(l), c & 512 && (Et || u === null || Fa(u, u.return)), c & 64 && Dn && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = Hl;
        if (Ul(n, l), It(l), c & 512 && (Et || u === null || Fa(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[W] || r[kt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), oe(r, c, u), r[kt] = l, _t(r), c = r;
                      break e;
                    case "link":
                      var y = am(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (y) {
                        for (var m = 0; m < y.length; m++)
                          if (r = y[m], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            y.splice(m, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), oe(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (y = am(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (m = 0; m < y.length; m++)
                          if (r = y[m], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            y.splice(m, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), oe(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(q(468, c));
                  }
                  r[kt] = l, _t(r), c = r;
                }
                l.stateNode = c;
              } else
                nm(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = op(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? nm(
              s,
              l.type,
              l.stateNode
            ) : op(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && Dy(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Ul(n, l), It(l), c & 512 && (Et || u === null || Fa(u, u.return)), u !== null && c & 4 && Dy(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Ul(n, l), It(l), c & 512 && (Et || u === null || Fa(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            qc(s, "");
          } catch (H) {
            Le(l, l.return, H);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, Dy(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (ed = !0);
        break;
      case 6:
        if (Ul(n, l), It(l), c & 4) {
          if (l.stateNode === null)
            throw Error(q(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (H) {
            Le(l, l.return, H);
          }
        }
        break;
      case 3:
        if (yi = null, s = Hl, Hl = Sd(n.containerInfo), Ul(n, l), Hl = s, It(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Yn(n.containerInfo);
          } catch (H) {
            Le(l, l.return, H);
          }
        ed && (ed = !1, xy(l));
        break;
      case 4:
        c = Hl, Hl = Sd(
          l.stateNode.containerInfo
        ), Ul(n, l), It(l), Hl = c;
        break;
      case 12:
        Ul(n, l), It(l);
        break;
      case 13:
        Ul(n, l), It(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Vy = ea()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ad(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var g = u !== null && u.memoizedState !== null, D = Dn, G = Et;
        if (Dn = D || s, Et = G || g, Ul(n, l), Et = G, Dn = D, It(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || g || Dn || Et || ft(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                g = u = n;
                try {
                  if (r = g.stateNode, s)
                    y = r.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    m = g.stateNode;
                    var X = g.memoizedProps.style, M = X != null && X.hasOwnProperty("display") ? X.display : null;
                    m.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim();
                  }
                } catch (H) {
                  Le(g, g.return, H);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                g = n;
                try {
                  g.stateNode.nodeValue = s ? "" : g.memoizedProps;
                } catch (H) {
                  Le(g, g.return, H);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, ad(l, u))));
        break;
      case 19:
        Ul(n, l), It(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ad(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ul(n, l), It(l);
    }
  }
  function It(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (w0(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(q(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = Ua(l);
            Ir(l, r, s);
            break;
          case 5:
            var y = u.stateNode;
            u.flags & 32 && (qc(y, ""), u.flags &= -33);
            var m = Ua(l);
            Ir(l, m, y);
            break;
          case 3:
          case 4:
            var g = u.stateNode.containerInfo, D = Ua(l);
            ic(
              l,
              D,
              g
            );
            break;
          default:
            throw Error(q(161));
        }
      } catch (G) {
        Le(l, l.return, G);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function xy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        xy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function Mn(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        My(l, n.alternate, n), n = n.sibling;
  }
  function ft(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          li(4, n, n.return), ft(n);
          break;
        case 1:
          Fa(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && zy(
            n,
            n.return,
            u
          ), ft(n);
          break;
        case 27:
          Wl(n.stateNode);
        case 26:
        case 5:
          Fa(n, n.return), ft(n);
          break;
        case 22:
          n.memoizedState === null && ft(n);
          break;
        case 30:
          ft(n);
          break;
        default:
          ft(n);
      }
      l = l.sibling;
    }
  }
  function ai(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, y = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          ai(
            s,
            r,
            u
          ), kf(4, r);
          break;
        case 1:
          if (ai(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (D) {
              Le(c, c.return, D);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var m = c.stateNode;
            try {
              var g = s.shared.hiddenCallbacks;
              if (g !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < g.length; s++)
                  br(g[s], m);
            } catch (D) {
              Le(c, c.return, D);
            }
          }
          u && y & 64 && Fr(r), fo(r, r.return);
          break;
        case 27:
          Pr(r);
        case 26:
        case 5:
          ai(
            s,
            r,
            u
          ), u && c === null && y & 4 && so(r), fo(r, r.return);
          break;
        case 12:
          ai(
            s,
            r,
            u
          );
          break;
        case 13:
          ai(
            s,
            r,
            u
          ), u && y & 4 && ld(s, r);
          break;
        case 22:
          r.memoizedState === null && ai(
            s,
            r,
            u
          ), fo(r, r.return);
          break;
        case 30:
          break;
        default:
          ai(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function Ha(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && mn(u));
  }
  function nd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && mn(l));
  }
  function cl(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Cy(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Cy(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        cl(
          l,
          n,
          u,
          c
        ), s & 2048 && kf(9, n);
        break;
      case 1:
        cl(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        cl(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && mn(l)));
        break;
      case 12:
        if (s & 2048) {
          cl(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, y = r.id, m = r.onPostCommit;
            typeof m == "function" && m(
              y,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (g) {
            Le(n, n.return, g);
          }
        } else
          cl(
            l,
            n,
            u,
            c
          );
        break;
      case 13:
        cl(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, y = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? cl(
          l,
          n,
          u,
          c
        ) : _e(l, n) : r._visibility & 2 ? cl(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, du(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0
        )), s & 2048 && Ha(y, n);
        break;
      case 24:
        cl(
          l,
          n,
          u,
          c
        ), s & 2048 && nd(n.alternate, n);
        break;
      default:
        cl(
          l,
          n,
          u,
          c
        );
    }
  }
  function du(l, n, u, c, s) {
    for (s = s && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var r = l, y = n, m = u, g = c, D = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          du(
            r,
            y,
            m,
            g,
            s
          ), kf(8, y);
          break;
        case 23:
          break;
        case 22:
          var G = y.stateNode;
          y.memoizedState !== null ? G._visibility & 2 ? du(
            r,
            y,
            m,
            g,
            s
          ) : _e(
            r,
            y
          ) : (G._visibility |= 2, du(
            r,
            y,
            m,
            g,
            s
          )), s && D & 2048 && Ha(
            y.alternate,
            y
          );
          break;
        case 24:
          du(
            r,
            y,
            m,
            g,
            s
          ), s && D & 2048 && nd(y.alternate, y);
          break;
        default:
          du(
            r,
            y,
            m,
            g,
            s
          );
      }
      n = n.sibling;
    }
  }
  function _e(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            _e(u, c), s & 2048 && Ha(
              c.alternate,
              c
            );
            break;
          case 24:
            _e(u, c), s & 2048 && nd(c.alternate, c);
            break;
          default:
            _e(u, c);
        }
        n = n.sibling;
      }
  }
  var cc = 8192;
  function At(l) {
    if (l.subtreeFlags & cc)
      for (l = l.child; l !== null; )
        J0(l), l = l.sibling;
  }
  function J0(l) {
    switch (l.tag) {
      case 26:
        At(l), l.flags & cc && l.memoizedState !== null && rp(
          Hl,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        At(l);
        break;
      case 3:
      case 4:
        var n = Hl;
        Hl = Sd(l.stateNode.containerInfo), At(l), Hl = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = cc, cc = 16777216, At(l), cc = n) : At(l));
        break;
      default:
        At(l);
    }
  }
  function Ny(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function oc(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          jt = c, qy(
            c,
            l
          );
        }
      Ny(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        By(l), l = l.sibling;
  }
  function By(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        oc(l), l.flags & 2048 && li(9, l, l.return);
        break;
      case 3:
        oc(l);
        break;
      case 12:
        oc(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, xl(l)) : oc(l);
        break;
      default:
        oc(l);
    }
  }
  function xl(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          jt = c, qy(
            c,
            l
          );
        }
      Ny(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          li(8, n, n.return), xl(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, xl(n));
          break;
        default:
          xl(n);
      }
      l = l.sibling;
    }
  }
  function qy(l, n) {
    for (; jt !== null; ) {
      var u = jt;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          li(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          mn(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, jt = c;
      else
        e: for (u = l; jt !== null; ) {
          c = jt;
          var s = c.sibling, r = c.return;
          if (Uy(c), c === u) {
            jt = null;
            break e;
          }
          if (s !== null) {
            s.return = r, jt = s;
            break e;
          }
          jt = r;
        }
    }
  }
  var Yy = {
    getCacheForType: function(l) {
      var n = $t(Gt), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, K0 = typeof WeakMap == "function" ? WeakMap : Map, Qe = 0, Fe = null, ze = null, De = 0, Ze = 0, Kl = null, Un = !1, ro = !1, _y = !1, hu = 0, Rt = 0, yu = 0, fc = 0, Hn = 0, xa = 0, ho = 0, yo = null, kl = null, Gy = !1, Vy = 0, ud = 1 / 0, mo = null, ni = null, ol = 0, xn = null, po = null, fl = 0, id = 0, cd = null, Xy = null, vo = 0, jy = null;
  function oa() {
    if ((Qe & 2) !== 0 && De !== 0)
      return De & -De;
    if (A.T !== null) {
      var l = Da;
      return l !== 0 ? l : hc();
    }
    return c0();
  }
  function Qy() {
    xa === 0 && (xa = (De & 536870912) === 0 || Ne ? Hu() : 536870912);
    var l = ca.current;
    return l !== null && (l.flags |= 32), xa;
  }
  function fa(l, n, u) {
    (l === Fe && (Ze === 2 || Ze === 9) || l.cancelPendingCommit !== null) && (Cn(l, 0), mu(
      l,
      De,
      xa,
      !1
    )), zi(l, u), ((Qe & 2) === 0 || l !== Fe) && (l === Fe && ((Qe & 2) === 0 && (fc |= u), Rt === 4 && mu(
      l,
      De,
      xa,
      !1
    )), $l(l));
  }
  function go(l, n, u) {
    if ((Qe & 6) !== 0) throw Error(q(327));
    var c = !u && (n & 124) === 0 && (n & l.expiredLanes) === 0 || an(l, n), s = c ? Ly(l, n) : od(l, n, !0), r = c;
    do {
      if (s === 0) {
        ro && !c && mu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !k0(u)) {
          s = od(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var y = 0;
          else
            y = l.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            n = y;
            e: {
              var m = l;
              s = yo;
              var g = m.current.memoizedState.isDehydrated;
              if (g && (Cn(m, y).flags |= 256), y = od(
                m,
                y,
                !1
              ), y !== 2) {
                if (_y && !g) {
                  m.errorRecoveryDisabledLanes |= r, fc |= r, s = 4;
                  break e;
                }
                r = kl, kl = s, r !== null && (kl === null ? kl = r : kl.push.apply(
                  kl,
                  r
                ));
              }
              s = y;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Cn(l, 0), mu(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(q(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              mu(
                c,
                n,
                xa,
                !Un
              );
              break e;
            case 2:
              kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(q(329));
          }
          if ((n & 62914560) === n && (s = Vy + 300 - ea(), 10 < s)) {
            if (mu(
              c,
              n,
              xa,
              !Un
            ), Uu(c, 0, !0) !== 0) break e;
            c.timeoutHandle = gd(
              Wf.bind(
                null,
                c,
                u,
                kl,
                mo,
                Gy,
                n,
                xa,
                fc,
                ho,
                Un,
                r,
                2,
                -0,
                0
              ),
              s
            );
            break e;
          }
          Wf(
            c,
            u,
            kl,
            mo,
            Gy,
            n,
            xa,
            fc,
            ho,
            Un,
            r,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    $l(l);
  }
  function Wf(l, n, u, c, s, r, y, m, g, D, G, X, M, H) {
    if (l.timeoutHandle = -1, X = n.subtreeFlags, (X & 8192 || (X & 16785408) === 16785408) && (Ho = { stylesheets: null, count: 0, unsuspend: sp }, J0(n), X = im(), X !== null)) {
      l.cancelPendingCommit = X(
        F0.bind(
          null,
          l,
          n,
          r,
          u,
          c,
          s,
          y,
          m,
          g,
          G,
          1,
          M,
          H
        )
      ), mu(l, r, y, !D);
      return;
    }
    F0(
      l,
      n,
      r,
      u,
      c,
      s,
      y,
      m,
      g
    );
  }
  function k0(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!ul(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function mu(l, n, u, c) {
    n &= ~Hn, n &= ~fc, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Gl(s), y = 1 << r;
      c[r] = -1, s &= ~y;
    }
    u !== 0 && Fo(l, u, n);
  }
  function sc() {
    return (Qe & 6) === 0 ? (es(0), !1) : !0;
  }
  function ui() {
    if (ze !== null) {
      if (Ze === 0)
        var l = ze.return;
      else
        l = ze, Ka = uu = null, Ar(l), ec = null, no = 0, l = ze;
      for (; l !== null; )
        Ry(l.alternate, l), l = l.return;
      ze = null;
    }
  }
  function Cn(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, gv(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), ui(), Fe = l, ze = u = wa(l.current, null), De = n, Ze = 0, Kl = null, Un = !1, ro = an(l, n), _y = !1, ho = xa = Hn = fc = yu = Rt = 0, kl = yo = null, Gy = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Gl(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return hu = n, La(), u;
  }
  function Zy(l, n) {
    he = null, A.H = Gr, n === $u || n === Df ? (n = Kh(), Ze = 3) : n === yr ? (n = Kh(), Ze = 4) : Ze = n === Tt ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Kl = n, ze === null && (Rt = 1, Lf(
      l,
      na(n, l.current)
    ));
  }
  function $0() {
    var l = A.H;
    return A.H = Gr, l === null ? Gr : l;
  }
  function rc() {
    var l = A.A;
    return A.A = Yy, l;
  }
  function dc() {
    Rt = 4, Un || (De & 4194048) !== De && ca.current !== null || (ro = !0), (yu & 134217727) === 0 && (fc & 134217727) === 0 || Fe === null || mu(
      Fe,
      De,
      xa,
      !1
    );
  }
  function od(l, n, u) {
    var c = Qe;
    Qe |= 2;
    var s = $0(), r = rc();
    (Fe !== l || De !== n) && (mo = null, Cn(l, n)), n = !1;
    var y = Rt;
    e: do
      try {
        if (Ze !== 0 && ze !== null) {
          var m = ze, g = Kl;
          switch (Ze) {
            case 8:
              ui(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ca.current === null && (n = !0);
              var D = Ze;
              if (Ze = 0, Kl = null, bo(l, m, g, D), u && ro) {
                y = 0;
                break e;
              }
              break;
            default:
              D = Ze, Ze = 0, Kl = null, bo(l, m, g, D);
          }
        }
        fd(), y = Rt;
        break;
      } catch (G) {
        Zy(l, G);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Ka = uu = null, Qe = c, A.H = s, A.A = r, ze === null && (Fe = null, De = 0, La()), y;
  }
  function fd() {
    for (; ze !== null; ) Jy(ze);
  }
  function Ly(l, n) {
    var u = Qe;
    Qe |= 2;
    var c = $0(), s = rc();
    Fe !== l || De !== n ? (mo = null, ud = ea() + 500, Cn(l, n)) : ro = an(
      l,
      n
    );
    e: do
      try {
        if (Ze !== 0 && ze !== null) {
          n = ze;
          var r = Kl;
          t: switch (Ze) {
            case 1:
              Ze = 0, Kl = null, bo(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (pr(r)) {
                Ze = 0, Kl = null, Ky(n);
                break;
              }
              n = function() {
                Ze !== 2 && Ze !== 9 || Fe !== l || (Ze = 7), $l(l);
              }, r.then(n, n);
              break e;
            case 3:
              Ze = 7;
              break e;
            case 4:
              Ze = 5;
              break e;
            case 7:
              pr(r) ? (Ze = 0, Kl = null, Ky(n)) : (Ze = 0, Kl = null, bo(l, n, r, 7));
              break;
            case 5:
              var y = null;
              switch (ze.tag) {
                case 26:
                  y = ze.memoizedState;
                case 5:
                case 27:
                  var m = ze;
                  if (!y || um(y)) {
                    Ze = 0, Kl = null;
                    var g = m.sibling;
                    if (g !== null) ze = g;
                    else {
                      var D = m.return;
                      D !== null ? (ze = D, Ff(D)) : ze = null;
                    }
                    break t;
                  }
              }
              Ze = 0, Kl = null, bo(l, n, r, 5);
              break;
            case 6:
              Ze = 0, Kl = null, bo(l, n, r, 6);
              break;
            case 8:
              ui(), Rt = 6;
              break e;
            default:
              throw Error(q(462));
          }
        }
        wy();
        break;
      } catch (G) {
        Zy(l, G);
      }
    while (!0);
    return Ka = uu = null, A.H = c, A.A = s, Qe = u, ze !== null ? 0 : (Fe = null, De = 0, La(), Rt);
  }
  function wy() {
    for (; ze !== null && !ev(); )
      Jy(ze);
  }
  function Jy(l) {
    var n = L0(l.alternate, l, hu);
    l.memoizedProps = l.pendingProps, n === null ? Ff(l) : ze = n;
  }
  function Ky(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = by(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          De
        );
        break;
      case 11:
        n = by(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          De
        );
        break;
      case 5:
        Ar(n);
      default:
        Ry(u, n), n = ze = Se(n, hu), n = L0(u, n, hu);
    }
    l.memoizedProps = l.pendingProps, n === null ? Ff(l) : ze = n;
  }
  function bo(l, n, u, c) {
    Ka = uu = null, Ar(n), ec = null, no = 0;
    var s = n.return;
    try {
      if (j0(
        l,
        s,
        n,
        u,
        De
      )) {
        Rt = 1, Lf(
          l,
          na(u, l.current)
        ), ze = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw ze = s, r;
      Rt = 1, Lf(
        l,
        na(u, l.current)
      ), ze = null;
      return;
    }
    n.flags & 32768 ? (Ne || c === 1 ? l = !0 : ro || (De & 536870912) !== 0 ? l = !1 : (Un = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = ca.current, c !== null && c.tag === 13 && (c.flags |= 16384))), W0(n, l)) : Ff(n);
  }
  function Ff(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        W0(
          n,
          Un
        );
        return;
      }
      l = n.return;
      var u = Ay(
        n.alternate,
        n,
        hu
      );
      if (u !== null) {
        ze = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        ze = n;
        return;
      }
      ze = n = l;
    } while (n !== null);
    Rt === 0 && (Rt = 5);
  }
  function W0(l, n) {
    do {
      var u = dv(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, ze = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        ze = l;
        return;
      }
      ze = l = u;
    } while (l !== null);
    Rt = 6, ze = null;
  }
  function F0(l, n, u, c, s, r, y, m, g) {
    l.cancelPendingCommit = null;
    do
      rd();
    while (ol !== 0);
    if ((Qe & 6) !== 0) throw Error(q(327));
    if (n !== null) {
      if (n === l.current) throw Error(q(177));
      if (r = n.lanes | n.childLanes, r |= rn, i0(
        l,
        u,
        r,
        y,
        m,
        g
      ), l === Fe && (ze = Fe = null, De = 0), po = n, xn = l, fl = u, id = r, cd = s, Xy = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, mv(Wo, function() {
        return ky(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = A.T, A.T = null, s = j.p, j.p = 2, y = Qe, Qe |= 4;
        try {
          Oy(l, n, u);
        } finally {
          Qe = y, j.p = s, A.T = c;
        }
      }
      ol = 1, I0(), If(), sd();
    }
  }
  function I0() {
    if (ol === 1) {
      ol = 0;
      var l = xn, n = po, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = A.T, A.T = null;
        var c = j.p;
        j.p = 2;
        var s = Qe;
        Qe |= 4;
        try {
          $f(n, l);
          var r = os, y = Yh(l.containerInfo), m = r.focusedElem, g = r.selectionRange;
          if (y !== m && m && m.ownerDocument && mf(
            m.ownerDocument.documentElement,
            m
          )) {
            if (g !== null && pf(m)) {
              var D = g.start, G = g.end;
              if (G === void 0 && (G = D), "selectionStart" in m)
                m.selectionStart = D, m.selectionEnd = Math.min(
                  G,
                  m.value.length
                );
              else {
                var X = m.ownerDocument || document, M = X && X.defaultView || window;
                if (M.getSelection) {
                  var H = M.getSelection(), le = m.textContent.length, ae = Math.min(g.start, le), Ge = g.end === void 0 ? ae : Math.min(g.end, le);
                  !H.extend && ae > Ge && (y = Ge, Ge = ae, ae = y);
                  var R = nt(
                    m,
                    ae
                  ), E = nt(
                    m,
                    Ge
                  );
                  if (R && E && (H.rangeCount !== 1 || H.anchorNode !== R.node || H.anchorOffset !== R.offset || H.focusNode !== E.node || H.focusOffset !== E.offset)) {
                    var z = X.createRange();
                    z.setStart(R.node, R.offset), H.removeAllRanges(), ae > Ge ? (H.addRange(z), H.extend(E.node, E.offset)) : (z.setEnd(E.node, E.offset), H.addRange(z));
                  }
                }
              }
            }
            for (X = [], H = m; H = H.parentNode; )
              H.nodeType === 1 && X.push({
                element: H,
                left: H.scrollLeft,
                top: H.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < X.length; m++) {
              var V = X[m];
              V.element.scrollLeft = V.left, V.element.scrollTop = V.top;
            }
          }
          hs = !!cs, os = cs = null;
        } finally {
          Qe = s, j.p = c, A.T = u;
        }
      }
      l.current = n, ol = 2;
    }
  }
  function If() {
    if (ol === 2) {
      ol = 0;
      var l = xn, n = po, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = A.T, A.T = null;
        var c = j.p;
        j.p = 2;
        var s = Qe;
        Qe |= 4;
        try {
          My(l, n.alternate, n);
        } finally {
          Qe = s, j.p = c, A.T = u;
        }
      }
      ol = 3;
    }
  }
  function sd() {
    if (ol === 4 || ol === 3) {
      ol = 0, Ai();
      var l = xn, n = po, u = fl, c = Xy;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ol = 5 : (ol = 0, po = xn = null, P0(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (ni = null), Vs(u), n = n.stateNode, zl && typeof zl.onCommitFiberRoot == "function")
        try {
          zl.onCommitFiberRoot(
            xc,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = A.T, s = j.p, j.p = 2, A.T = null;
        try {
          for (var r = l.onRecoverableError, y = 0; y < c.length; y++) {
            var m = c[y];
            r(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          A.T = n, j.p = s;
        }
      }
      (fl & 3) !== 0 && rd(), $l(l), s = l.pendingLanes, (u & 4194090) !== 0 && (s & 42) !== 0 ? l === jy ? vo++ : (vo = 0, jy = l) : vo = 0, es(0);
    }
  }
  function P0(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, mn(n)));
  }
  function rd(l) {
    return I0(), If(), sd(), ky();
  }
  function ky() {
    if (ol !== 5) return !1;
    var l = xn, n = id;
    id = 0;
    var u = Vs(fl), c = A.T, s = j.p;
    try {
      j.p = 32 > u ? 32 : u, A.T = null, u = cd, cd = null;
      var r = xn, y = fl;
      if (ol = 0, po = xn = null, fl = 0, (Qe & 6) !== 0) throw Error(q(331));
      var m = Qe;
      if (Qe |= 4, By(r.current), Cy(
        r,
        r.current,
        y,
        u
      ), Qe = m, es(0, !1), zl && typeof zl.onPostCommitFiberRoot == "function")
        try {
          zl.onPostCommitFiberRoot(xc, r);
        } catch {
        }
      return !0;
    } finally {
      j.p = s, A.T = c, P0(l, n);
    }
  }
  function $y(l, n, u) {
    n = na(u, n), n = vy(l.stateNode, n, 2), l = gn(l, n, 2), l !== null && (zi(l, 2), $l(l));
  }
  function Le(l, n, u) {
    if (l.tag === 3)
      $y(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          $y(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (ni === null || !ni.has(c))) {
            l = na(u, l), u = gy(2), c = gn(n, u, 2), c !== null && (Jl(
              u,
              c,
              n,
              l
            ), zi(c, 2), $l(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function dd(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new K0();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (_y = !0, s.add(u), l = Wy.bind(null, l, n, u), n.then(l, l));
  }
  function Wy(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Fe === l && (De & u) === u && (Rt === 4 || Rt === 3 && (De & 62914560) === De && 300 > ea() - Vy ? (Qe & 2) === 0 && Cn(l, 0) : Hn |= u, ho === De && (ho = 0)), $l(l);
  }
  function Fy(l, n) {
    n === 0 && (n = Ri()), l = dn(l, n), l !== null && (zi(l, n), $l(l));
  }
  function hv(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), Fy(l, u);
  }
  function yv(l, n) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(q(314));
    }
    c !== null && c.delete(n), Fy(l, u);
  }
  function mv(l, n) {
    return Ei(l, n);
  }
  var hd = null, ii = null, Pf = !1, So = !1, yd = !1, ci = 0;
  function $l(l) {
    l !== ii && l.next === null && (ii === null ? hd = ii = l : ii = ii.next = l), So = !0, Pf || (Pf = !0, lp());
  }
  function es(l, n) {
    if (!yd && So) {
      yd = !0;
      do
        for (var u = !1, c = hd; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var y = c.suspendedLanes, m = c.pingedLanes;
              r = (1 << 31 - Gl(42 | l) + 1) - 1, r &= s & ~(y & ~m), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, ls(c, r));
          } else
            r = De, r = Uu(
              c,
              c === Fe ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || an(c, r) || (u = !0, ls(c, r));
          c = c.next;
        }
      while (u);
      yd = !1;
    }
  }
  function ep() {
    ts();
  }
  function ts() {
    So = Pf = !1;
    var l = 0;
    ci !== 0 && (gu() && (l = ci), ci = 0);
    for (var n = ea(), u = null, c = hd; c !== null; ) {
      var s = c.next, r = Iy(c, n);
      r === 0 ? (c.next = null, u === null ? hd = s : u.next = s, s === null && (ii = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (So = !0)), c = s;
    }
    es(l);
  }
  function Iy(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var y = 31 - Gl(r), m = 1 << y, g = s[y];
      g === -1 ? ((m & u) === 0 || (m & c) !== 0) && (s[y] = Kt(m, n)) : g <= n && (l.expiredLanes |= m), r &= ~m;
    }
    if (n = Fe, u = De, u = Uu(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (Ze === 2 || Ze === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && ch(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || an(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && ch(c), Vs(u)) {
        case 2:
        case 8:
          u = oh;
          break;
        case 32:
          u = Wo;
          break;
        case 268435456:
          u = Hc;
          break;
        default:
          u = Wo;
      }
      return c = tp.bind(null, l), u = Ei(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && ch(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function tp(l, n) {
    if (ol !== 0 && ol !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (rd() && l.callbackNode !== u)
      return null;
    var c = De;
    return c = Uu(
      l,
      l === Fe ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (go(l, c, n), Iy(l, ea()), l.callbackNode != null && l.callbackNode === u ? tp.bind(null, l) : null);
  }
  function ls(l, n) {
    if (rd()) return null;
    go(l, n, !0);
  }
  function lp() {
    bv(function() {
      (Qe & 6) !== 0 ? Ei(
        a0,
        ep
      ) : ts();
    });
  }
  function hc() {
    return ci === 0 && (ci = Hu()), ci;
  }
  function md(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : cf("" + l);
  }
  function as(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function ap(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = md(
        (s[Dl] || null).action
      ), y = c.submitter;
      y && (n = (n = y[Dl] || null) ? md(n.formAction) : y.getAttribute("formAction"), n !== null && (r = n, y = null));
      var m = new Fs(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (ci !== 0) {
                  var g = y ? as(s, y) : new FormData(s);
                  _r(
                    u,
                    {
                      pending: !0,
                      data: g,
                      method: s.method,
                      action: r
                    },
                    null,
                    g
                  );
                }
              } else
                typeof r == "function" && (m.preventDefault(), g = y ? as(s, y) : new FormData(s), _r(
                  u,
                  {
                    pending: !0,
                    data: g,
                    method: s.method,
                    action: r
                  },
                  r,
                  g
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var zt = 0; zt < jc.length; zt++) {
    var ns = jc[zt], pv = ns.toLowerCase(), be = ns[0].toUpperCase() + ns.slice(1);
    Ta(
      pv,
      "on" + be
    );
  }
  Ta(D0, "onAnimationEnd"), Ta(_h, "onAnimationIteration"), Ta(O0, "onAnimationStart"), Ta("dblclick", "onDoubleClick"), Ta("focusin", "onFocus"), Ta("focusout", "onBlur"), Ta(Gh, "onTransitionRun"), Ta(ir, "onTransitionStart"), Ta(M0, "onTransitionCancel"), Ta(Vh, "onTransitionEnd"), Nu("onMouseEnter", ["mouseout", "mouseover"]), Nu("onMouseLeave", ["mouseout", "mouseover"]), Nu("onPointerEnter", ["pointerout", "pointerover"]), Nu("onPointerLeave", ["pointerout", "pointerover"]), Cu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Cu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Cu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Cu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Cu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Cu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var us = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), oi = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(us)
  );
  function yc(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var y = c.length - 1; 0 <= y; y--) {
            var m = c[y], g = m.instance, D = m.currentTarget;
            if (m = m.listener, g !== r && s.isPropagationStopped())
              break e;
            r = m, s.currentTarget = D;
            try {
              r(s);
            } catch (G) {
              Qf(G);
            }
            s.currentTarget = null, r = g;
          }
        else
          for (y = 0; y < c.length; y++) {
            if (m = c[y], g = m.instance, D = m.currentTarget, m = m.listener, g !== r && s.isPropagationStopped())
              break e;
            r = m, s.currentTarget = D;
            try {
              r(s);
            } catch (G) {
              Qf(G);
            }
            s.currentTarget = null, r = g;
          }
      }
    }
  }
  function ye(l, n) {
    var u = n[Xs];
    u === void 0 && (u = n[Xs] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (pd(n, l, 2, !1), u.add(c));
  }
  function To(l, n, u) {
    var c = 0;
    n && (c |= 4), pd(
      u,
      l,
      c,
      n
    );
  }
  var Eo = "_reactListening" + Math.random().toString(36).slice(2);
  function Py(l) {
    if (!l[Eo]) {
      l[Eo] = !0, tf.forEach(function(u) {
        u !== "selectionchange" && (oi.has(u) || To(u, !1, l), To(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Eo] || (n[Eo] = !0, To("selectionchange", !1, n));
    }
  }
  function pd(l, n, u, c) {
    switch (ym(n)) {
      case 2:
        var s = dp;
        break;
      case 8:
        s = hp;
        break;
      default:
        s = dm;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !ks || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function Ca(l, n, u, c, s) {
    var r = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var y = c.tag;
        if (y === 3 || y === 4) {
          var m = c.stateNode.containerInfo;
          if (m === s) break;
          if (y === 4)
            for (y = c.return; y !== null; ) {
              var g = y.tag;
              if ((g === 3 || g === 4) && y.stateNode.containerInfo === s)
                return;
              y = y.return;
            }
          for (; m !== null; ) {
            if (y = al(m), y === null) return;
            if (g = y.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              c = r = y;
              continue e;
            }
            m = m.parentNode;
          }
        }
        c = c.return;
      }
    Gc(function() {
      var D = r, G = Ks(u), X = [];
      e: {
        var M = Xh.get(l);
        if (M !== void 0) {
          var H = Fs, le = l;
          switch (l) {
            case "keypress":
              if (nl(u) === 0) break e;
            case "keydown":
            case "keyup":
              H = Va;
              break;
            case "focusin":
              le = "focus", H = Th;
              break;
            case "focusout":
              le = "blur", H = Th;
              break;
            case "beforeblur":
            case "afterblur":
              H = Th;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = Sh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = v0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = Rh;
              break;
            case D0:
            case _h:
            case O0:
              H = ov;
              break;
            case Vh:
              H = E0;
              break;
            case "scroll":
            case "scrollend":
              H = m0;
              break;
            case "wheel":
              H = _i;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = sf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = rf;
              break;
            case "toggle":
            case "beforetoggle":
              H = A0;
          }
          var ae = (n & 4) !== 0, Ge = !ae && (l === "scroll" || l === "scrollend"), R = ae ? M !== null ? M + "Capture" : null : M;
          ae = [];
          for (var E = D, z; E !== null; ) {
            var V = E;
            if (z = V.stateNode, V = V.tag, V !== 5 && V !== 26 && V !== 27 || z === null || R === null || (V = Ni(E, R), V != null && ae.push(
              pu(E, V, z)
            )), Ge) break;
            E = E.return;
          }
          0 < ae.length && (M = new H(
            M,
            le,
            null,
            u,
            G
          ), X.push({ event: M, listeners: ae }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (M = l === "mouseover" || l === "pointerover", H = l === "mouseout" || l === "pointerout", M && u !== Ci && (le = u.relatedTarget || u.fromElement) && (al(le) || le[Nc]))
            break e;
          if ((H || M) && (M = G.window === G ? G : (M = G.ownerDocument) ? M.defaultView || M.parentWindow : window, H ? (le = u.relatedTarget || u.toElement, H = D, le = le ? al(le) : null, le !== null && (Ge = Ie(le), ae = le.tag, le !== Ge || ae !== 5 && ae !== 27 && ae !== 6) && (le = null)) : (H = null, le = D), H !== le)) {
            if (ae = Sh, V = "onMouseLeave", R = "onMouseEnter", E = "mouse", (l === "pointerout" || l === "pointerover") && (ae = rf, V = "onPointerLeave", R = "onPointerEnter", E = "pointer"), Ge = H == null ? M : ef(H), z = le == null ? M : ef(le), M = new ae(
              V,
              E + "leave",
              H,
              u,
              G
            ), M.target = Ge, M.relatedTarget = z, V = null, al(G) === D && (ae = new ae(
              R,
              E + "enter",
              le,
              u,
              G
            ), ae.target = z, ae.relatedTarget = Ge, V = ae), Ge = V, H && le)
              t: {
                for (ae = H, R = le, E = 0, z = ae; z; z = fi(z))
                  E++;
                for (z = 0, V = R; V; V = fi(V))
                  z++;
                for (; 0 < E - z; )
                  ae = fi(ae), E--;
                for (; 0 < z - E; )
                  R = fi(R), z--;
                for (; E--; ) {
                  if (ae === R || R !== null && ae === R.alternate)
                    break t;
                  ae = fi(ae), R = fi(R);
                }
                ae = null;
              }
            else ae = null;
            H !== null && is(
              X,
              M,
              H,
              ae,
              !1
            ), le !== null && Ge !== null && is(
              X,
              Ge,
              le,
              ae,
              !0
            );
          }
        }
        e: {
          if (M = D ? ef(D) : window, H = M.nodeName && M.nodeName.toLowerCase(), H === "select" || H === "input" && M.type === "file")
            var $ = Hh;
          else if (lr(M))
            if (xh)
              $ = Bh;
            else {
              $ = Vu;
              var Te = nr;
            }
          else
            H = M.nodeName, !H || H.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? D && xi(D.elementType) && ($ = Hh) : $ = tu;
          if ($ && ($ = $(l, D))) {
            ar(
              X,
              $,
              u,
              G
            );
            break e;
          }
          Te && Te(l, M, D), l === "focusout" && D && M.type === "number" && D.memoizedProps.value != null && nf(M, "number", M.value);
        }
        switch (Te = D ? ef(D) : window, l) {
          case "focusin":
            (lr(Te) || Te.contentEditable === "true") && (fn = Te, Qa = D, Qu = null);
            break;
          case "focusout":
            Qu = Qa = fn = null;
            break;
          case "mousedown":
            Qi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Qi = !1, ur(X, u, G);
            break;
          case "selectionchange":
            if (ji) break;
          case "keydown":
          case "keyup":
            ur(X, u, G);
        }
        var ee;
        if (df)
          e: {
            switch (l) {
              case "compositionstart":
                var ce = "onCompositionStart";
                break e;
              case "compositionend":
                ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ce = "onCompositionUpdate";
                break e;
            }
            ce = void 0;
          }
        else
          Gu ? yf(l, u) && (ce = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (ce = "onCompositionStart");
        ce && (cn && u.locale !== "ko" && (Gu || ce !== "onCompositionStart" ? ce === "onCompositionEnd" && Gu && (ee = gh()) : (Pn = G, Vc = "value" in Pn ? Pn.value : Pn.textContent, Gu = !0)), Te = Ao(D, ce), 0 < Te.length && (ce = new Eh(
          ce,
          l,
          null,
          u,
          G
        ), X.push({ event: ce, listeners: Te }), ee ? ce.data = ee : (ee = _u(u), ee !== null && (ce.data = ee)))), (ee = Dh ? Mh(l, u) : Gi(l, u)) && (ce = Ao(D, "onBeforeInput"), 0 < ce.length && (Te = new Eh(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          G
        ), X.push({
          event: Te,
          listeners: ce
        }), Te.data = ee)), ap(
          X,
          l,
          D,
          u,
          G
        );
      }
      yc(X, n);
    });
  }
  function pu(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Ao(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Ni(l, u), s != null && c.unshift(
        pu(l, s, r)
      ), s = Ni(l, n), s != null && c.push(
        pu(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function fi(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function is(l, n, u, c, s) {
    for (var r = n._reactName, y = []; u !== null && u !== c; ) {
      var m = u, g = m.alternate, D = m.stateNode;
      if (m = m.tag, g !== null && g === c) break;
      m !== 5 && m !== 26 && m !== 27 || D === null || (g = D, s ? (D = Ni(u, r), D != null && y.unshift(
        pu(u, D, g)
      )) : s || (D = Ni(u, r), D != null && y.push(
        pu(u, D, g)
      ))), u = u.return;
    }
    y.length !== 0 && l.push({ event: n, listeners: y });
  }
  var sa = /\r\n?/g, em = /\u0000|\uFFFD/g;
  function np(l) {
    return (typeof l == "string" ? l : "" + l).replace(sa, `
`).replace(em, "");
  }
  function tm(l, n) {
    return n = np(n), np(l) === n;
  }
  function vd() {
  }
  function se(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || qc(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && qc(l, "" + c);
        break;
      case "className":
        lf(l, "class", c);
        break;
      case "tabIndex":
        lf(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        lf(l, u, c);
        break;
      case "style":
        uf(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          lf(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = cf("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && se(l, n, "name", s.name, s, null), se(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), se(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), se(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (se(l, n, "encType", s.encType, s, null), se(l, n, "method", s.method, s, null), se(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = cf("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = vd);
        break;
      case "onScroll":
        c != null && ye("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ye("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(q(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(q(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
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
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = cf("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
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
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
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
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        ye("beforetoggle", l), ye("toggle", l), Fn(l, "popover", c);
        break;
      case "xlinkActuate":
        nn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        nn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        nn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        nn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        nn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        nn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        nn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        nn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        nn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        Fn(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = uv.get(u) || u, Fn(l, u, c));
    }
  }
  function x(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        uf(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(q(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(q(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? qc(l, c) : (typeof c == "number" || typeof c == "bigint") && qc(l, "" + c);
        break;
      case "onScroll":
        c != null && ye("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ye("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = vd);
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
        if (!la.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[Dl] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : Fn(l, u, c);
          }
    }
  }
  function oe(l, n, u) {
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
        ye("error", l), ye("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var y = u[r];
            if (y != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(q(137, n));
                default:
                  se(l, n, r, y, u, null);
              }
          }
        s && se(l, n, "srcSet", u.srcSet, u, null), c && se(l, n, "src", u.src, u, null);
        return;
      case "input":
        ye("invalid", l);
        var m = r = y = s = null, g = null, D = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var G = u[c];
            if (G != null)
              switch (c) {
                case "name":
                  s = G;
                  break;
                case "type":
                  y = G;
                  break;
                case "checked":
                  g = G;
                  break;
                case "defaultChecked":
                  D = G;
                  break;
                case "value":
                  r = G;
                  break;
                case "defaultValue":
                  m = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null)
                    throw Error(q(137, n));
                  break;
                default:
                  se(l, n, c, G, u, null);
              }
          }
        ws(
          l,
          r,
          m,
          g,
          D,
          y,
          s,
          !1
        ), qu(l);
        return;
      case "select":
        ye("invalid", l), c = y = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (m = u[s], m != null))
            switch (s) {
              case "value":
                r = m;
                break;
              case "defaultValue":
                y = m;
                break;
              case "multiple":
                c = m;
              default:
                se(l, n, s, m, u, null);
            }
        n = r, u = y, l.multiple = !!c, n != null ? Hi(l, !!c, n, !1) : u != null && Hi(l, !!c, u, !0);
        return;
      case "textarea":
        ye("invalid", l), r = s = c = null;
        for (y in u)
          if (u.hasOwnProperty(y) && (m = u[y], m != null))
            switch (y) {
              case "value":
                c = m;
                break;
              case "defaultValue":
                s = m;
                break;
              case "children":
                r = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(q(91));
                break;
              default:
                se(l, n, y, m, u, null);
            }
        ph(l, c, s, r), qu(l);
        return;
      case "option":
        for (g in u)
          if (u.hasOwnProperty(g) && (c = u[g], c != null))
            switch (g) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                se(l, n, g, c, u, null);
            }
        return;
      case "dialog":
        ye("beforetoggle", l), ye("toggle", l), ye("cancel", l), ye("close", l);
        break;
      case "iframe":
      case "object":
        ye("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < us.length; c++)
          ye(us[c], l);
        break;
      case "image":
        ye("error", l), ye("load", l);
        break;
      case "details":
        ye("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        ye("error", l), ye("load", l);
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
        for (D in u)
          if (u.hasOwnProperty(D) && (c = u[D], c != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(q(137, n));
              default:
                se(l, n, D, c, u, null);
            }
        return;
      default:
        if (xi(n)) {
          for (G in u)
            u.hasOwnProperty(G) && (c = u[G], c !== void 0 && x(
              l,
              n,
              G,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (m in u)
      u.hasOwnProperty(m) && (c = u[m], c != null && se(l, n, m, c, u, null));
  }
  function vv(l, n, u, c) {
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
        var s = null, r = null, y = null, m = null, g = null, D = null, G = null;
        for (H in u) {
          var X = u[H];
          if (u.hasOwnProperty(H) && X != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = X;
              default:
                c.hasOwnProperty(H) || se(l, n, H, null, c, X);
            }
        }
        for (var M in c) {
          var H = c[M];
          if (X = u[M], c.hasOwnProperty(M) && (H != null || X != null))
            switch (M) {
              case "type":
                r = H;
                break;
              case "name":
                s = H;
                break;
              case "checked":
                D = H;
                break;
              case "defaultChecked":
                G = H;
                break;
              case "value":
                y = H;
                break;
              case "defaultValue":
                m = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null)
                  throw Error(q(137, n));
                break;
              default:
                H !== X && se(
                  l,
                  n,
                  M,
                  H,
                  c,
                  X
                );
            }
        }
        Ls(
          l,
          y,
          m,
          g,
          D,
          G,
          r,
          s
        );
        return;
      case "select":
        H = y = m = M = null;
        for (r in u)
          if (g = u[r], u.hasOwnProperty(r) && g != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                H = g;
              default:
                c.hasOwnProperty(r) || se(
                  l,
                  n,
                  r,
                  null,
                  c,
                  g
                );
            }
        for (s in c)
          if (r = c[s], g = u[s], c.hasOwnProperty(s) && (r != null || g != null))
            switch (s) {
              case "value":
                M = r;
                break;
              case "defaultValue":
                m = r;
                break;
              case "multiple":
                y = r;
              default:
                r !== g && se(
                  l,
                  n,
                  s,
                  r,
                  c,
                  g
                );
            }
        n = m, u = y, c = H, M != null ? Hi(l, !!u, M, !1) : !!c != !!u && (n != null ? Hi(l, !!u, n, !0) : Hi(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        H = M = null;
        for (m in u)
          if (s = u[m], u.hasOwnProperty(m) && s != null && !c.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                se(l, n, m, null, c, s);
            }
        for (y in c)
          if (s = c[y], r = u[y], c.hasOwnProperty(y) && (s != null || r != null))
            switch (y) {
              case "value":
                M = s;
                break;
              case "defaultValue":
                H = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(q(91));
                break;
              default:
                s !== r && se(l, n, y, s, c, r);
            }
        mh(l, M, H);
        return;
      case "option":
        for (var le in u)
          if (M = u[le], u.hasOwnProperty(le) && M != null && !c.hasOwnProperty(le))
            switch (le) {
              case "selected":
                l.selected = !1;
                break;
              default:
                se(
                  l,
                  n,
                  le,
                  null,
                  c,
                  M
                );
            }
        for (g in c)
          if (M = c[g], H = u[g], c.hasOwnProperty(g) && M !== H && (M != null || H != null))
            switch (g) {
              case "selected":
                l.selected = M && typeof M != "function" && typeof M != "symbol";
                break;
              default:
                se(
                  l,
                  n,
                  g,
                  M,
                  c,
                  H
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
        for (var ae in u)
          M = u[ae], u.hasOwnProperty(ae) && M != null && !c.hasOwnProperty(ae) && se(l, n, ae, null, c, M);
        for (D in c)
          if (M = c[D], H = u[D], c.hasOwnProperty(D) && M !== H && (M != null || H != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(q(137, n));
                break;
              default:
                se(
                  l,
                  n,
                  D,
                  M,
                  c,
                  H
                );
            }
        return;
      default:
        if (xi(n)) {
          for (var Ge in u)
            M = u[Ge], u.hasOwnProperty(Ge) && M !== void 0 && !c.hasOwnProperty(Ge) && x(
              l,
              n,
              Ge,
              void 0,
              c,
              M
            );
          for (G in c)
            M = c[G], H = u[G], !c.hasOwnProperty(G) || M === H || M === void 0 && H === void 0 || x(
              l,
              n,
              G,
              M,
              c,
              H
            );
          return;
        }
    }
    for (var R in u)
      M = u[R], u.hasOwnProperty(R) && M != null && !c.hasOwnProperty(R) && se(l, n, R, null, c, M);
    for (X in c)
      M = c[X], H = u[X], !c.hasOwnProperty(X) || M === H || M == null && H == null || se(l, n, X, M, c, H);
  }
  var cs = null, os = null;
  function Na(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function vu(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ro(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Nn(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var zo = null;
  function gu() {
    var l = window.event;
    return l && l.type === "popstate" ? l === zo ? !1 : (zo = l, !0) : (zo = null, !1);
  }
  var gd = typeof setTimeout == "function" ? setTimeout : void 0, gv = typeof clearTimeout == "function" ? clearTimeout : void 0, up = typeof Promise == "function" ? Promise : void 0, bv = typeof queueMicrotask == "function" ? queueMicrotask : typeof up < "u" ? function(l) {
    return up.resolve(null).then(l).catch(Bn);
  } : gd;
  function Bn(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function si(l) {
    return l === "head";
  }
  function bd(l, n) {
    var u = n, c = 0, s = 0;
    do {
      var r = u.nextSibling;
      if (l.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$") {
          if (0 < c && 8 > c) {
            u = c;
            var y = l.ownerDocument;
            if (u & 1 && Wl(y.documentElement), u & 2 && Wl(y.body), u & 4)
              for (u = y.head, Wl(u), y = u.firstChild; y; ) {
                var m = y.nextSibling, g = y.nodeName;
                y[W] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && y.rel.toLowerCase() === "stylesheet" || u.removeChild(y), y = m;
              }
          }
          if (s === 0) {
            l.removeChild(r), Yn(n);
            return;
          }
          s--;
        } else
          u === "$" || u === "$?" || u === "$!" ? s++ : c = u.charCodeAt(0) - 48;
      else c = 0;
      u = r;
    } while (u);
    Yn(n);
  }
  function fs(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          fs(u), Po(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Do(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[W])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = Ia(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Sv(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Ia(l.nextSibling), l === null)) return null;
    return l;
  }
  function ss(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function Tv(l, n) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function Ia(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return l;
  }
  var ri = null;
  function sl(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (n === 0) return l;
          n--;
        } else u === "/$" && n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function k(l, n, u) {
    switch (n = Na(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(q(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(q(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(q(454));
        return l;
      default:
        throw Error(q(451));
    }
  }
  function Wl(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    Po(l);
  }
  var Dt = /* @__PURE__ */ new Map(), Sl = /* @__PURE__ */ new Set();
  function Sd(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var bu = j.d;
  j.d = {
    f: Td,
    r: Ed,
    D: Su,
    C: Ad,
    L: di,
    m: Tl,
    X: hi,
    S: Fl,
    M: lm
  };
  function Td() {
    var l = bu.f(), n = sc();
    return l || n;
  }
  function Ed(l) {
    var n = Di(l);
    n !== null && n.tag === 5 && n.type === "form" ? ao(n) : bu.r(l);
  }
  var rl = typeof document > "u" ? null : document;
  function Pa(l, n, u) {
    var c = rl;
    if (c && typeof n == "string" && n) {
      var s = ba(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Sl.has(s) || (Sl.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), oe(n, "link", l), _t(n), c.head.appendChild(n)));
    }
  }
  function Su(l) {
    bu.D(l), Pa("dns-prefetch", l, null);
  }
  function Ad(l, n) {
    bu.C(l, n), Pa("preconnect", l, n);
  }
  function di(l, n, u) {
    bu.L(l, n, u);
    var c = rl;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + ba(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + ba(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + ba(
        u.imageSizes
      ) + '"]')) : s += '[href="' + ba(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = Oo(l);
          break;
        case "script":
          r = Ba(l);
      }
      Dt.has(r) || (l = Be(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Dt.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(Mo(r)) || n === "script" && c.querySelector(mc(r)) || (n = c.createElement("link"), oe(n, "link", l), _t(n), c.head.appendChild(n)));
    }
  }
  function Tl(l, n) {
    bu.m(l, n);
    var u = rl;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + ba(c) + '"][href="' + ba(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Ba(l);
      }
      if (!Dt.has(r) && (l = Be({ rel: "modulepreload", href: l }, n), Dt.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(mc(r)))
              return;
        }
        c = u.createElement("link"), oe(c, "link", l), _t(c), u.head.appendChild(c);
      }
    }
  }
  function Fl(l, n, u) {
    bu.S(l, n, u);
    var c = rl;
    if (c && l) {
      var s = Wn(c).hoistableStyles, r = Oo(l);
      n = n || "default";
      var y = s.get(r);
      if (!y) {
        var m = { loading: 0, preload: null };
        if (y = c.querySelector(
          Mo(r)
        ))
          m.loading = 5;
        else {
          l = Be(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Dt.get(r)) && zd(l, u);
          var g = y = c.createElement("link");
          _t(g), oe(g, "link", l), g._p = new Promise(function(D, G) {
            g.onload = D, g.onerror = G;
          }), g.addEventListener("load", function() {
            m.loading |= 1;
          }), g.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, Rd(y, n, c);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: m
        }, s.set(r, y);
      }
    }
  }
  function hi(l, n) {
    bu.X(l, n);
    var u = rl;
    if (u && l) {
      var c = Wn(u).hoistableScripts, s = Ba(l), r = c.get(s);
      r || (r = u.querySelector(mc(s)), r || (l = Be({ src: l, async: !0 }, n), (n = Dt.get(s)) && Dd(l, n), r = u.createElement("script"), _t(r), oe(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function lm(l, n) {
    bu.M(l, n);
    var u = rl;
    if (u && l) {
      var c = Wn(u).hoistableScripts, s = Ba(l), r = c.get(s);
      r || (r = u.querySelector(mc(s)), r || (l = Be({ src: l, async: !0, type: "module" }, n), (n = Dt.get(s)) && Dd(l, n), r = u.createElement("script"), _t(r), oe(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function ip(l, n, u, c) {
    var s = (s = Ue.current) ? Sd(s) : null;
    if (!s) throw Error(q(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Oo(u.href), u = Wn(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Oo(u.href);
          var r = Wn(
            s
          ).hoistableStyles, y = r.get(l);
          if (y || (s = s.ownerDocument || s, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, y), (r = s.querySelector(
            Mo(l)
          )) && !r._p && (y.instance = r, y.state.loading = 5), Dt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Dt.set(l, u), r || cp(
            s,
            l,
            u,
            y.state
          ))), n && c === null)
            throw Error(q(528, ""));
          return y;
        }
        if (n && c !== null)
          throw Error(q(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ba(u), u = Wn(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(q(444, l));
    }
  }
  function Oo(l) {
    return 'href="' + ba(l) + '"';
  }
  function Mo(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Uo(l) {
    return Be({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function cp(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), oe(n, "link", u), _t(n), l.head.appendChild(n));
  }
  function Ba(l) {
    return '[src="' + ba(l) + '"]';
  }
  function mc(l) {
    return "script[async]" + l;
  }
  function op(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + ba(u.href) + '"]'
          );
          if (c)
            return n.instance = c, _t(c), c;
          var s = Be({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), _t(c), oe(c, "style", s), Rd(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = Oo(u.href);
          var r = l.querySelector(
            Mo(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, _t(r), r;
          c = Uo(u), (s = Dt.get(s)) && zd(c, s), r = (l.ownerDocument || l).createElement("link"), _t(r);
          var y = r;
          return y._p = new Promise(function(m, g) {
            y.onload = m, y.onerror = g;
          }), oe(r, "link", c), n.state.loading |= 4, Rd(r, u.precedence, l), n.instance = r;
        case "script":
          return r = Ba(u.src), (s = l.querySelector(
            mc(r)
          )) ? (n.instance = s, _t(s), s) : (c = u, (s = Dt.get(r)) && (c = Be({}, u), Dd(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), _t(s), oe(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(q(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Rd(c, u.precedence, l));
    return n.instance;
  }
  function Rd(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, y = 0; y < c.length; y++) {
      var m = c[y];
      if (m.dataset.precedence === n) r = m;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function zd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Dd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var yi = null;
  function am(l, n, u) {
    if (yi === null) {
      var c = /* @__PURE__ */ new Map(), s = yi = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = yi, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[W] || r[kt] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = r.getAttribute(n) || "";
        y = l + y;
        var m = c.get(y);
        m ? m.push(r) : c.set(y, [r]);
      }
    }
    return c;
  }
  function nm(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function fp(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
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
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function um(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var Ho = null;
  function sp() {
  }
  function rp(l, n, u) {
    if (Ho === null) throw Error(q(475));
    var c = Ho;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = Oo(u.href), r = l.querySelector(
          Mo(s)
        );
        if (r) {
          l = r._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = rs.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = r, _t(r);
          return;
        }
        r = l.ownerDocument || l, u = Uo(u), (s = Dt.get(s)) && zd(u, s), r = r.createElement("link"), _t(r);
        var y = r;
        y._p = new Promise(function(m, g) {
          y.onload = m, y.onerror = g;
        }), oe(r, "link", u), n.instance = r;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && (n.state.loading & 3) === 0 && (c.count++, n = rs.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function im() {
    if (Ho === null) throw Error(q(475));
    var l = Ho;
    return l.stylesheets && l.count === 0 && ds(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && ds(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function rs() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) ds(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var xo = null;
  function ds(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, xo = /* @__PURE__ */ new Map(), n.forEach(ra, l), xo = null, rs.call(l));
  }
  function ra(l, n) {
    if (!(n.state.loading & 4)) {
      var u = xo.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), xo.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var y = s[r];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (u.set(y.dataset.precedence, y), c = y);
        }
        c && u.set(null, c);
      }
      s = n.instance, y = s.getAttribute("data-precedence"), r = u.get(y) || c, r === c && u.set(null, s), u.set(y, s), this.count++, c = rs.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var Il = {
    $$typeof: Mt,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0
  };
  function Ev(l, n, u, c, s, r, y, m) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = xu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xu(0), this.hiddenUpdates = xu(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function cm(l, n, u, c, s, r, y, m, g, D, G, X) {
    return l = new Ev(
      l,
      n,
      u,
      y,
      m,
      g,
      D,
      X
    ), n = 1, r === !0 && (n |= 24), r = jl(3, null, null, n), l.current = r, r.stateNode = l, n = Ic(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, vr(r), l;
  }
  function om(l) {
    return l ? (l = Lc, l) : Lc;
  }
  function fm(l, n, u, c, s, r) {
    s = om(s), c.context === null ? c.context = s : c.pendingContext = s, c = Zl(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = gn(l, c, n), u !== null && (fa(u, l, n), ki(u, l, n));
  }
  function sm(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Od(l, n) {
    sm(l, n), (l = l.alternate) && sm(l, n);
  }
  function rm(l) {
    if (l.tag === 13) {
      var n = dn(l, 67108864);
      n !== null && fa(n, l, 67108864), Od(l, 67108864);
    }
  }
  var hs = !0;
  function dp(l, n, u, c) {
    var s = A.T;
    A.T = null;
    var r = j.p;
    try {
      j.p = 2, dm(l, n, u, c);
    } finally {
      j.p = r, A.T = s;
    }
  }
  function hp(l, n, u, c) {
    var s = A.T;
    A.T = null;
    var r = j.p;
    try {
      j.p = 8, dm(l, n, u, c);
    } finally {
      j.p = r, A.T = s;
    }
  }
  function dm(l, n, u, c) {
    if (hs) {
      var s = Md(c);
      if (s === null)
        Ca(
          l,
          n,
          c,
          Ud,
          u
        ), pc(l, c);
      else if (mp(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (pc(l, c), n & 4 && -1 < yp.indexOf(l)) {
        for (; s !== null; ) {
          var r = Di(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var y = ta(r.pendingLanes);
                  if (y !== 0) {
                    var m = r;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; y; ) {
                      var g = 1 << 31 - Gl(y);
                      m.entanglements[1] |= g, y &= ~g;
                    }
                    $l(r), (Qe & 6) === 0 && (ud = ea() + 500, es(0));
                  }
                }
                break;
              case 13:
                m = dn(r, 2), m !== null && fa(m, r, 2), sc(), Od(r, 2);
            }
          if (r = Md(c), r === null && Ca(
            l,
            n,
            c,
            Ud,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        Ca(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function Md(l) {
    return l = Ks(l), hm(l);
  }
  var Ud = null;
  function hm(l) {
    if (Ud = null, l = al(l), l !== null) {
      var n = Ie(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = Bt(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Ud = l, null;
  }
  function ym(l) {
    switch (l) {
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
        switch ($o()) {
          case a0:
            return 2;
          case oh:
            return 8;
          case Wo:
          case fh:
            return 32;
          case Hc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Co = !1, qn = null, Tu = null, Eu = null, ys = /* @__PURE__ */ new Map(), ms = /* @__PURE__ */ new Map(), mi = [], yp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function pc(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        qn = null;
        break;
      case "dragenter":
      case "dragleave":
        Tu = null;
        break;
      case "mouseover":
      case "mouseout":
        Eu = null;
        break;
      case "pointerover":
      case "pointerout":
        ys.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ms.delete(n.pointerId);
    }
  }
  function vc(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Di(n), n !== null && rm(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function mp(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return qn = vc(
          qn,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Tu = vc(
          Tu,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return Eu = vc(
          Eu,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return ys.set(
          r,
          vc(
            ys.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, ms.set(
          r,
          vc(
            ms.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function mm(l) {
    var n = al(l.target);
    if (n !== null) {
      var u = Ie(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = Bt(u), n !== null) {
            l.blockedOn = n, av(l.priority, function() {
              if (u.tag === 13) {
                var c = oa();
                c = Ga(c);
                var s = dn(u, c);
                s !== null && fa(s, u, c), Od(u, c);
              }
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function ps(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Md(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        Ci = c, u.target.dispatchEvent(c), Ci = null;
      } else
        return n = Di(u), n !== null && rm(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function vs(l, n, u) {
    ps(l) && u.delete(n);
  }
  function No() {
    Co = !1, qn !== null && ps(qn) && (qn = null), Tu !== null && ps(Tu) && (Tu = null), Eu !== null && ps(Eu) && (Eu = null), ys.forEach(vs), ms.forEach(vs);
  }
  function Hd(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Co || (Co = !0, L.unstable_scheduleCallback(
      L.unstable_NormalPriority,
      No
    )));
  }
  var gc = null;
  function pm(l) {
    gc !== l && (gc = l, L.unstable_scheduleCallback(
      L.unstable_NormalPriority,
      function() {
        gc === l && (gc = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (hm(c || u) === null)
              continue;
            break;
          }
          var r = Di(u);
          r !== null && (l.splice(n, 3), n -= 3, _r(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function Yn(l) {
    function n(g) {
      return Hd(g, l);
    }
    qn !== null && Hd(qn, l), Tu !== null && Hd(Tu, l), Eu !== null && Hd(Eu, l), ys.forEach(n), ms.forEach(n);
    for (var u = 0; u < mi.length; u++) {
      var c = mi[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < mi.length && (u = mi[0], u.blockedOn === null); )
      mm(u), u.blockedOn === null && mi.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], y = s[Dl] || null;
        if (typeof r == "function")
          y || pm(u);
        else if (y) {
          var m = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, y = r[Dl] || null)
              m = y.formAction;
            else if (hm(s) !== null) continue;
          } else m = y.action;
          typeof m == "function" ? u[c + 1] = m : (u.splice(c, 3), c -= 3), pm(u);
        }
      }
  }
  function vm(l) {
    this._internalRoot = l;
  }
  xd.prototype.render = vm.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(q(409));
    var u = n.current, c = oa();
    fm(u, c, l, n, null, null);
  }, xd.prototype.unmount = vm.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      fm(l.current, 2, null, l, null, null), sc(), n[Nc] = null;
    }
  };
  function xd(l) {
    this._internalRoot = l;
  }
  xd.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = c0();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < mi.length && n !== 0 && n < mi[u].priority; u++) ;
      mi.splice(u, 0, l), u === 0 && mm(l);
    }
  };
  var gm = lt.version;
  if (gm !== "19.1.0")
    throw Error(
      q(
        527,
        gm,
        "19.1.0"
      )
    );
  j.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(q(188)) : (l = Object.keys(l).join(","), Error(q(268, l)));
    return l = J(n), l = l !== null ? Ot(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Cl = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gs.isDisabled && gs.supportsFiber)
      try {
        xc = gs.inject(
          Cl
        ), zl = gs;
      } catch {
      }
  }
  return t0.createRoot = function(l, n) {
    if (!Je(l)) throw Error(q(299));
    var u = !1, c = "", s = io, r = my, y = Zf, m = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (m = n.unstable_transitionCallbacks)), n = cm(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      s,
      r,
      y,
      m,
      null
    ), l[Nc] = n.current, Py(l), new vm(n);
  }, t0.hydrateRoot = function(l, n, u) {
    if (!Je(l)) throw Error(q(299));
    var c = !1, s = "", r = io, y = my, m = Zf, g = null, D = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (y = u.onCaughtError), u.onRecoverableError !== void 0 && (m = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (g = u.unstable_transitionCallbacks), u.formState !== void 0 && (D = u.formState)), n = cm(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      r,
      y,
      m,
      g,
      D
    ), n.context = om(null), u = n.current, c = oa(), c = Ga(c), s = Zl(c), s.callback = null, gn(u, s, c), u = c, n.current.lanes = u, zi(n, u), $l(n), l[Nc] = n.current, Py(l), new xd(n);
  }, t0.version = "19.1.0", t0;
}
var l0 = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xb;
function kS() {
  return xb || (xb = 1, process.env.NODE_ENV !== "production" && function() {
    function L(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function lt(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = se(e) ? e.slice() : be({}, e);
      return f[o] = lt(e[o], t, a + 1, i), f;
    }
    function at(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return q(e, t, a, 0);
      }
    }
    function q(e, t, a, i) {
      var o = t[i], f = se(e) ? e.slice() : be({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], se(f) ? f.splice(o, 1) : delete f[o]) : f[o] = q(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function Je(e, t, a) {
      var i = t[a], o = se(e) ? e.slice() : be({}, e);
      return a + 1 === t.length ? (se(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = Je(e[i], t, a + 1), o);
    }
    function Ie() {
      return !1;
    }
    function Bt() {
      return null;
    }
    function Lt() {
    }
    function J() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function Ot() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function Be() {
    }
    function Pe(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function ge(e, t, a, i) {
      return new hf(e, t, a, i);
    }
    function pt(e, t) {
      e.context === Bo && (Le(e.current, 2, t, e, null, null), nc());
    }
    function dt(e, t) {
      if (Gn !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, co(), df(
          e.current,
          t,
          a
        ), nc();
      }
    }
    function Yl(e) {
      Gn = e;
    }
    function ct(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function We(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function va(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Mt(e) {
      if (We(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function ml(e) {
      var t = e.alternate;
      if (!t) {
        if (t = We(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return Mt(o), e;
            if (f === i) return Mt(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function _l(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = _l(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function Ut(e) {
      return e === null || typeof e != "object" ? null : (e = tm && e[tm] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function qe(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === vd ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case ye:
          return "Fragment";
        case Eo:
          return "Profiler";
        case To:
          return "StrictMode";
        case Ao:
          return "Suspense";
        case fi:
          return "SuspenseList";
        case em:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case yc:
            return "Portal";
          case Ca:
            return (e.displayName || "Context") + ".Provider";
          case pd:
            return (e._context.displayName || "Context") + ".Consumer";
          case pu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case is:
            return t = e.displayName || null, t !== null ? t : qe(e.type) || "Memo";
          case sa:
            t = e._payload, e = e._init;
            try {
              return qe(e(t));
            } catch {
            }
        }
      return null;
    }
    function wt(e) {
      return typeof e.tag == "number" ? te(e) : typeof e.name == "string" ? e.name : null;
    }
    function te(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return qe(t);
        case 8:
          return t === To ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return te(e.return);
      }
      return null;
    }
    function vt(e) {
      return { current: e };
    }
    function Xe(e, t) {
      0 > Na ? console.error("Unexpected pop.") : (t !== os[Na] && console.error("Unexpected Fiber popped."), e.current = cs[Na], cs[Na] = null, os[Na] = null, Na--);
    }
    function de(e, t, a) {
      Na++, cs[Na] = e.current, os[Na] = a, e.current = t;
    }
    function Jt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function Rl(e, t) {
      de(Nn, t, e), de(Ro, e, e), de(vu, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? Ze(t) : Oc;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = Ze(t), t = Kl(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = uh;
                break;
              case "math":
                t = Lp;
                break;
              default:
                t = Oc;
            }
      }
      a = a.toLowerCase(), a = mh(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Xe(vu, e), de(vu, a, e);
    }
    function qt(e) {
      Xe(vu, e), Xe(Ro, e), Xe(Nn, e);
    }
    function A() {
      return Jt(vu.current);
    }
    function j(e) {
      e.memoizedState !== null && de(zo, e, e);
      var t = Jt(vu.current), a = e.type, i = Kl(t.context, a);
      a = mh(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (de(Ro, e, e), de(vu, i, e));
    }
    function Z(e) {
      Ro.current === e && (Xe(vu, e), Xe(Ro, e)), zo.current === e && (Xe(zo, e), Wm._currentValue = _s);
    }
    function ne(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function C(e) {
      try {
        return P(e), !1;
      } catch {
        return !0;
      }
    }
    function P(e) {
      return "" + e;
    }
    function K(e, t) {
      if (C(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ne(e)
        ), P(e);
    }
    function ue(e, t) {
      if (C(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ne(e)
        ), P(e);
    }
    function Ae(e) {
      if (C(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          ne(e)
        ), P(e);
    }
    function et(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        ri = t.inject(e), sl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Ue(e) {
      if (typeof Tv == "function" && Ia(e), sl && typeof sl.setStrictMode == "function")
        try {
          sl.setStrictMode(ri, e);
        } catch (t) {
          Wl || (Wl = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function Mu(e) {
      k = e;
    }
    function gt() {
      k !== null && typeof k.markCommitStopped == "function" && k.markCommitStopped();
    }
    function ll(e) {
      k !== null && typeof k.markComponentRenderStarted == "function" && k.markComponentRenderStarted(e);
    }
    function ga() {
      k !== null && typeof k.markComponentRenderStopped == "function" && k.markComponentRenderStopped();
    }
    function Ti(e) {
      k !== null && typeof k.markRenderStarted == "function" && k.markRenderStarted(e);
    }
    function Gs() {
      k !== null && typeof k.markRenderStopped == "function" && k.markRenderStopped();
    }
    function Ei(e, t) {
      k !== null && typeof k.markStateUpdateScheduled == "function" && k.markStateUpdateScheduled(e, t);
    }
    function ch(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Sd(e) / bu | 0) | 0;
    }
    function ev(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 128) return "TransitionHydration";
      if (e & 4194048) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function Ai(e) {
      var t = e & 42;
      if (t !== 0) return t;
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
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function ea(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = Ai(i) : (d &= h, d !== 0 ? o = Ai(d) : a || (a = h & ~e, a !== 0 && (o = Ai(a))))) : (h = i & ~f, h !== 0 ? o = Ai(h) : d !== 0 ? o = Ai(d) : a || (a = i & ~e, a !== 0 && (o = Ai(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function $o(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function a0(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
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
          return t + 5e3;
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
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function oh() {
      var e = Td;
      return Td <<= 1, (Td & 4194048) === 0 && (Td = 256), e;
    }
    function Wo() {
      var e = Ed;
      return Ed <<= 1, (Ed & 62914560) === 0 && (Ed = 4194304), e;
    }
    function fh(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Hc(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function tv(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, p = e.expirationTimes, v = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var U = 31 - Sl(a), B = 1 << U;
        h[U] = 0, p[U] = -1;
        var O = v[U];
        if (O !== null)
          for (v[U] = null, U = 0; U < O.length; U++) {
            var Y = O[U];
            Y !== null && (Y.lane &= -536870913);
          }
        a &= ~B;
      }
      i !== 0 && n0(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function n0(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Sl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090;
    }
    function xc(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Sl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function zl(e) {
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
    function kn(e, t, a) {
      if (Dt)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Sl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Gl(e, t) {
      if (Dt)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Sl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function sh(e) {
      return e &= -e, rl < e ? Pa < e ? (e & 134217727) !== 0 ? Su : Ad : Pa : rl;
    }
    function u0() {
      var e = oe.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Su : yd(e.type));
    }
    function lv(e, t) {
      var a = oe.p;
      try {
        return oe.p = e, t();
      } finally {
        oe.p = a;
      }
    }
    function Cc(e) {
      delete e[Tl], delete e[Fl], delete e[lm], delete e[ip], delete e[Oo];
    }
    function $n(e) {
      var t = e[Tl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[hi] || a[Tl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = vo(e); e !== null; ) {
              if (a = e[Tl])
                return a;
              e = vo(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ta(e) {
      if (e = e[Tl] || e[hi]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function Uu(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function an(e) {
      var t = e[Mo];
      return t || (t = e[Mo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function Kt(e) {
      e[Uo] = !0;
    }
    function Hu(e, t) {
      Ri(e, t), Ri(e + "Capture", t);
    }
    function Ri(e, t) {
      Ba[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Ba[e] = t;
      var a = e.toLowerCase();
      for (mc[a] = e, e === "onDoubleClick" && (mc.ondblclick = e), e = 0; e < t.length; e++)
        cp.add(t[e]);
    }
    function xu(e, t) {
      op[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function zi(e) {
      return gu.call(Dd, e) ? !0 : gu.call(zd, e) ? !1 : Rd.test(e) ? Dd[e] = !0 : (zd[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function i0(e, t, a) {
      if (zi(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (K(a, t), e === "" + a ? a : e);
      }
    }
    function Fo(e, t, a) {
      if (zi(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          K(a, t), e.setAttribute(t, "" + a);
        }
    }
    function Io(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        K(a, t), e.setAttribute(t, "" + a);
      }
    }
    function Ga(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        K(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function Vs() {
    }
    function c0() {
      if (yi === 0) {
        am = console.log, nm = console.info, fp = console.warn, um = console.error, Ho = console.group, sp = console.groupCollapsed, rp = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Vs,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      yi++;
    }
    function av() {
      if (yi--, yi === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: be({}, e, { value: am }),
          info: be({}, e, { value: nm }),
          warn: be({}, e, { value: fp }),
          error: be({}, e, { value: um }),
          group: be({}, e, { value: Ho }),
          groupCollapsed: be({}, e, { value: sp }),
          groupEnd: be({}, e, { value: rp })
        });
      }
      0 > yi && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function Yt(e) {
      if (im === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          im = t && t[1] || "", rs = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + im + e + rs;
    }
    function kt(e, t) {
      if (!e || xo) return "";
      var a = ds.get(e);
      if (a !== void 0) return a;
      xo = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = x.H, x.H = null, c0();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var O = function() {
                  throw Error();
                };
                if (Object.defineProperty(O.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(O, []);
                  } catch (F) {
                    var Y = F;
                  }
                  Reflect.construct(e, [], O);
                } else {
                  try {
                    O.call();
                  } catch (F) {
                    Y = F;
                  }
                  e.call(O.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (F) {
                  Y = F;
                }
                (O = e()) && typeof O.catch == "function" && O.catch(function() {
                });
              }
            } catch (F) {
              if (F && Y && typeof F.stack == "string")
                return [F.stack, Y.stack];
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
        var d = o.DetermineComponentFrameRoot(), h = d[0], p = d[1];
        if (h && p) {
          var v = h.split(`
`), U = p.split(`
`);
          for (d = f = 0; f < v.length && !v[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < U.length && !U[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === v.length || d === U.length)
            for (f = v.length - 1, d = U.length - 1; 1 <= f && 0 <= d && v[f] !== U[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (v[f] !== U[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || v[f] !== U[d]) {
                    var B = `
` + v[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && ds.set(e, B), B;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        xo = !1, x.H = i, av(), Error.prepareStackTrace = a;
      }
      return v = (v = e ? e.displayName || e.name : "") ? Yt(v) : "", typeof e == "function" && ds.set(e, v), v;
    }
    function Dl(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react-stack-bottom-frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function Nc(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Yt(e.type);
        case 16:
          return Yt("Lazy");
        case 13:
          return Yt("Suspense");
        case 19:
          return Yt("SuspenseList");
        case 0:
        case 15:
          return kt(e.type, !1);
        case 11:
          return kt(e.type.render, !1);
        case 1:
          return kt(e.type, !0);
        case 31:
          return Yt("Activity");
        default:
          return "";
      }
    }
    function Xs(e) {
      try {
        var t = "";
        do {
          t += Nc(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var o = a[i];
              if (typeof o.name == "string") {
                var f = t, d = o.env, h = Yt(
                  o.name + (d ? " [" + d + "]" : "")
                );
                t = f + h;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (p) {
        return `
Error generating stack: ` + p.message + `
` + p.stack;
      }
    }
    function o0(e) {
      return (e = e ? e.displayName || e.name : "") ? Yt(e) : "";
    }
    function js() {
      if (ra === null) return null;
      var e = ra._debugOwner;
      return e != null ? wt(e) : null;
    }
    function f0() {
      if (ra === null) return "";
      var e = ra;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += Yt(e.type);
            break;
          case 13:
            t += Yt("Suspense");
            break;
          case 19:
            t += Yt("SuspenseList");
            break;
          case 31:
            t += Yt("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += o0(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += o0(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            e && i && (typeof i != "string" && (a._debugStack = i = Dl(i)), i !== "" && (t += `
` + i));
          } else if (e.debugStack != null) {
            var o = e.debugStack;
            (e = e.owner) && o && (t += `
` + Dl(o));
          } else break;
        var f = t;
      } catch (d) {
        f = `
Error generating stack: ` + d.message + `
` + d.stack;
      }
      return f;
    }
    function W(e, t, a, i, o, f, d) {
      var h = ra;
      Po(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        Po(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Po(e) {
      x.getCurrentStack = e === null ? null : f0, Il = !1, ra = e;
    }
    function al(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Ae(e), e;
        default:
          return "";
      }
    }
    function Di(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function ef(e) {
      var t = Di(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      Ae(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, f = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            Ae(d), i = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            Ae(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function Wn(e) {
      e._valueTracker || (e._valueTracker = ef(e));
    }
    function _t(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = Di(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function tf(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function la(e) {
      return e.replace(
        Ev,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Cu(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || om || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        js() || "A component",
        t.type
      ), om = !0), t.value === void 0 || t.defaultValue === void 0 || cm || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        js() || "A component",
        t.type
      ), cm = !0);
    }
    function Nu(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (K(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + al(t)) : e.value !== "" + al(t) && (e.value = "" + al(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Qs(e, d, al(t)) : a != null ? Qs(e, d, al(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (K(h, "name"), e.name = "" + al(h)) : e.removeAttribute("name");
    }
    function s0(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (K(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        a = a != null ? "" + al(a) : "", t = t != null ? "" + al(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (K(d, "name"), e.name = d);
    }
    function Qs(e, t, a) {
      t === "number" && tf(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function rh(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? ns.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || sm || (sm = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || Od || (Od = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || fm || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), fm = !0);
    }
    function r0() {
      var e = js();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function Fn(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + al(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function lf(e, t) {
      for (e = 0; e < hs.length; e++) {
        var a = hs[e];
        if (t[a] != null) {
          var i = se(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            r0()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            r0()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || rm || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), rm = !0);
    }
    function nn(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || dp || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        js() || "A component"
      ), dp = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Zs(e, t, a) {
      if (t != null && (t = "" + al(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + al(a) : "";
    }
    function dh(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (se(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = al(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i);
    }
    function Oi(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Oi(e.children[0], t) : e;
    }
    function Ol(e) {
      return "  " + "  ".repeat(e);
    }
    function Bu(e) {
      return "+ " + "  ".repeat(e);
    }
    function Mi(e) {
      return "- " + "  ".repeat(e);
    }
    function hh(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function pl(e, t) {
      return hp.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function af(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Bu(a) + pl(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Bu(a) + pl(e, i) + `
` + Mi(a) + pl(t, i) + `
`;
      }
      return Ol(a) + pl(e, i) + `
`;
    }
    function yh(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function qu(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (se(e)) return "[...]";
          if (e.$$typeof === oi)
            return (t = qe(e.type)) ? "<" + t + ">" : "<...>";
          var a = yh(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = qu(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function Ui(e, t) {
      return typeof e != "string" || hp.test(e) ? "{" + qu(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Bc(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = Ui(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function nv(e, t, a) {
      var i = "", o = be({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = qu(e[f], d);
          t.hasOwnProperty(f) ? (d = qu(t[f], d), i += Bu(a) + f + ": " + h + `
`, i += Mi(a) + f + ": " + d + `
`) : i += Bu(a) + f + ": " + h + `
`;
        }
      for (var p in o)
        o.hasOwnProperty(p) && (e = qu(
          o[p],
          120 - 2 * a - p.length - 2
        ), i += Mi(a) + p + ": " + e + `
`);
      return i;
    }
    function ba(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (v in a)
        a.hasOwnProperty(v) && f.set(
          v.toLowerCase(),
          v
        );
      if (f.size === 1 && f.has("children"))
        o += Bc(
          e,
          t,
          Ol(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, p = f.get(d.toLowerCase());
            if (p !== void 0) {
              f.delete(d.toLowerCase());
              var v = t[d];
              p = a[p];
              var U = Ui(
                v,
                h
              );
              h = Ui(
                p,
                h
              ), typeof v == "object" && v !== null && typeof p == "object" && p !== null && yh(v) === "Object" && yh(p) === "Object" && (2 < Object.keys(v).length || 2 < Object.keys(p).length || -1 < U.indexOf("...") || -1 < h.indexOf("...")) ? o += Ol(i + 1) + d + `={{
` + nv(
                v,
                p,
                i + 2
              ) + Ol(i + 1) + `}}
` : (o += Bu(i + 1) + d + "=" + U + `
`, o += Mi(i + 1) + d + "=" + h + `
`);
            } else
              o += Ol(i + 1) + d + "=" + Ui(t[d], h) + `
`;
          }
        f.forEach(function(B) {
          if (B !== "children") {
            var O = 120 - 2 * (i + 1) - B.length - 1;
            o += Mi(i + 1) + B + "=" + Ui(a[B], O) + `
`;
          }
        }), o = o === "" ? Ol(i) + "<" + e + `>
` : Ol(i) + "<" + e + `
` + o + Ol(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += af(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + af("" + t, null, i + 1) : o + af("" + t, void 0, i + 1)), o;
    }
    function Ls(e, t) {
      var a = hh(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Ls(e, t), e = e.sibling;
        return a;
      }
      return Ol(t) + "<" + a + `>
`;
    }
    function ws(e, t) {
      var a = Oi(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Ol(t) + `...
` + ws(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Ol(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = af(o, e.serverProps, t), t++;
      else if (f = hh(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (v in o)
            if (o.hasOwnProperty(v) && v !== "children") {
              var p = Ui(o[v], 15);
              if (d -= v.length + p.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + v + "=" + p;
            }
          i = Ol(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Bc(
            f,
            o,
            Bu(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = ba(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var v = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (v += ws(d, t), f++) : v += Ls(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (v += Ol(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], v = typeof f == "string" ? v + (Mi(t) + pl(f, 120 - 2 * t) + `
`) : v + Bc(
          f.type,
          f.props,
          Mi(t)
        );
      return a + i + v;
    }
    function nf(e) {
      try {
        return `

` + ws(e, 0);
      } catch {
        return "";
      }
    }
    function Hi(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? nf(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function mh(e, t) {
      var a = be({}, e || ym), i = { tag: t };
      return Md.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Ud.indexOf(t) !== -1 && (a.pTagInButtonScope = null), dm.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function ph(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return hm.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function qc(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function d0(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function Js(e, t) {
      t = t || ym;
      var a = t.current;
      if (t = (a = ph(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : qc(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, Co[t]) return !1;
      Co[t] = !0;
      var o = (t = ra) ? d0(t.return, i) : null, f = t !== null && o !== null ? Hi(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || W(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function uf(e, t, a) {
      if (a || ph("#text", t, !1))
        return !0;
      if (a = "#text|" + t, Co[a]) return !1;
      Co[a] = !0;
      var i = (a = ra) ? d0(a, t) : null;
      return a = a !== null && i !== null ? Hi(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function xi(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function uv(e) {
      return e.replace(mi, function(t, a) {
        return a.toUpperCase();
      });
    }
    function h0(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? pc.hasOwnProperty(t) && pc[t] || (pc[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        uv(t.replace(ms, "ms-"))
      )) : ys.test(t) ? pc.hasOwnProperty(t) && pc[t] || (pc[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !yp.test(a) || vc.hasOwnProperty(a) && vc[a] || (vc[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(yp, "")
      )), typeof a == "number" && (isNaN(a) ? mp || (mp = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || mm || (mm = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || ps.has(t) ? t === "float" ? e.cssFloat = a : (ue(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function cf(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = qn[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = qn[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var p in t)
            for (o = qn[p] || [p], f = 0; f < o.length; f++)
              h[o[f]] = p;
          p = {};
          for (var v in i)
            if (o = i[v], (f = h[v]) && o !== f && (d = o + "," + f, !p[d])) {
              p[d] = !0, d = console;
              var U = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                U == null || typeof U == "boolean" || U === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var B in a)
          !a.hasOwnProperty(B) || t != null && t.hasOwnProperty(B) || (B.indexOf("--") === 0 ? e.setProperty(B, "") : B === "float" ? e.cssFloat = "" : e[B] = "");
        for (var O in t)
          v = t[O], t.hasOwnProperty(O) && a[O] !== v && h0(e, O, v);
      } else
        for (i in t)
          t.hasOwnProperty(i) && h0(e, i, t[i]);
    }
    function Ci(e) {
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
    function Ks(e) {
      return Hd.get(e) || e;
    }
    function Yc(e, t) {
      if (gu.call(Yn, t) && Yn[t])
        return !0;
      if (xd.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = pm.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Yn[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Yn[t] = !0;
      }
      if (vm.test(t)) {
        if (e = t.toLowerCase(), e = pm.hasOwnProperty(e) ? e : null, e == null) return Yn[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Yn[t] = !0);
      }
      return !0;
    }
    function _c(e, t) {
      var a = [], i;
      for (i in t)
        Yc(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function y0(e, t, a, i) {
      if (gu.call(Cl, t) && Cl[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Cl[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), Cl[t] = !0;
        if (gs.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), Cl[t] = !0;
      } else if (gs.test(t))
        return l.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), Cl[t] = !0;
      if (n.test(t) || u.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Cl[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Cl[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), Cl[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), Cl[t] = !0;
      if (gc.hasOwnProperty(o)) {
        if (o = gc[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), Cl[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), Cl[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
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
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), Cl[t] = !0);
          }
        case "function":
        case "symbol":
          return Cl[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
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
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), Cl[t] = !0;
          }
      }
      return !0;
    }
    function vh(e, t, a) {
      var i = [], o;
      for (o in t)
        y0(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function Gc(e) {
      return c.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Ni(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function un(e) {
      var t = ta(e);
      if (t && (e = t.stateNode)) {
        var a = e[Fl] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Nu(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (K(t, "name"), a = a.querySelectorAll(
                'input[name="' + la(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[Fl] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Nu(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && _t(i);
            }
            break e;
          case "textarea":
            Zs(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && Fn(e, !!a.multiple, t, !1);
        }
      }
    }
    function ks(e, t, a) {
      if (m) return e(t, a);
      m = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (m = !1, (r !== null || y !== null) && (nc(), r && (t = r, e = y, y = r = null, un(t), e)))
          for (t = 0; t < e.length; t++) un(e[t]);
      }
    }
    function In(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[Fl] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
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
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function Pn() {
      if (H) return H;
      var e, t = M, a = t.length, i, o = "value" in X ? X.value : X.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return H = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function Vc(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Bi() {
      return !0;
    }
    function gh() {
      return !1;
    }
    function nl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Bi : gh, this.isPropagationStopped = gh, this;
      }
      return be(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Bi);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Bi);
        },
        persist: function() {
        },
        isPersistent: Bi
      }), t;
    }
    function $s(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = jb[e]) ? !!t[e] : !1;
    }
    function Ws() {
      return $s;
    }
    function Ml(e, t) {
      switch (e) {
        case "keyup":
          return Pb.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Mg;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Yu(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function Fs(e, t) {
      switch (e) {
        case "compositionend":
          return Yu(t);
        case "keypress":
          return t.which !== Hg ? null : (Cg = !0, xg);
        case "textInput":
          return e = t.data, e === xg && Cg ? null : e;
        default:
          return null;
      }
    }
    function of(e, t) {
      if (Cd)
        return e === "compositionend" || !Rv && Ml(e, t) ? (e = Pn(), H = M = X = null, Cd = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Ug && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function m0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!tS[e.type] : t === "textarea";
    }
    function bh(e) {
      if (!g) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Is(e, t, a, i) {
      r ? y ? y.push(i) : y = [i] : r = i, t = $f(t, "onChange"), 0 < t.length && (a = new ae(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function ff(e) {
      On(e, 0);
    }
    function qi(e) {
      var t = Uu(e);
      if (_t(t)) return e;
    }
    function Sh(e, t) {
      if (e === "change") return t;
    }
    function p0() {
      Sm && (Sm.detachEvent("onpropertychange", v0), Tm = Sm = null);
    }
    function v0(e) {
      if (e.propertyName === "value" && qi(Tm)) {
        var t = [];
        Is(
          t,
          Tm,
          e,
          Ni(e)
        ), ks(ff, t);
      }
    }
    function iv(e, t, a) {
      e === "focusin" ? (p0(), Sm = t, Tm = a, Sm.attachEvent("onpropertychange", v0)) : e === "focusout" && p0();
    }
    function Th(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return qi(Tm);
    }
    function cv(e, t) {
      if (e === "click") return qi(t);
    }
    function ov(e, t) {
      if (e === "input" || e === "change")
        return qi(t);
    }
    function fv(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function sf(e, t) {
      if (da(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!gu.call(t, o) || !da(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function g0(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Eh(e, t) {
      var a = g0(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
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
        a = g0(a);
      }
    }
    function b0(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? b0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function S0(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = tf(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = tf(e.document);
      }
      return t;
    }
    function Ah(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function T0(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      Dv || Nd == null || Nd !== tf(i) || (i = Nd, "selectionStart" in i && Ah(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Em && sf(Em, i) || (Em = i, i = $f(zv, "onSelect"), 0 < i.length && (t = new ae(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Nd)));
    }
    function eu(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Yi(e) {
      if (Ov[e]) return Ov[e];
      if (!Bd[e]) return e;
      var t = Bd[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in Bg)
          return Ov[e] = t[a];
      return e;
    }
    function Va(e, t) {
      Vg.set(e, t), Hu(t, [e]);
    }
    function aa(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = Uv.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Xs(t)
        }, Uv.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Xs(t)
      };
    }
    function rf() {
      for (var e = qd, t = xv = qd = 0; t < e; ) {
        var a = _n[t];
        _n[t++] = null;
        var i = _n[t];
        _n[t++] = null;
        var o = _n[t];
        _n[t++] = null;
        var f = _n[t];
        if (_n[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && E0(a, o, f);
      }
    }
    function Ps(e, t, a, i) {
      _n[qd++] = e, _n[qd++] = t, _n[qd++] = a, _n[qd++] = i, xv |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Rh(e, t, a, i) {
      return Ps(e, t, a, i), er(e);
    }
    function Vl(e, t) {
      return Ps(e, null, null, t), er(e);
    }
    function E0(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Hv || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Sl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function er(e) {
      if (Lm > RS)
        throw Cs = Lm = 0, wm = cg = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Cs > zS && (Cs = 0, wm = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && Fa(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && Fa(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function _i(e) {
      if (Gn === null) return e;
      var t = Gn(e);
      return t === void 0 ? e : t.current;
    }
    function zh(e) {
      if (Gn === null) return e;
      var t = Gn(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = _i(e.render), e.render !== t) ? (t = { $$typeof: pu, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function A0(e, t) {
      if (Gn === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === sa) && (i = !0);
          break;
        case 11:
          (o === pu || o === sa) && (i = !0);
          break;
        case 14:
        case 15:
          (o === is || o === sa) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Gn(a), e !== void 0 && e === Gn(t)));
    }
    function R0(e) {
      Gn !== null && typeof WeakSet == "function" && (Yd === null && (Yd = /* @__PURE__ */ new WeakSet()), Yd.add(e));
    }
    function df(e, t, a) {
      var i = e.alternate, o = e.child, f = e.sibling, d = e.tag, h = e.type, p = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          p = h;
          break;
        case 11:
          p = h.render;
      }
      if (Gn === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var v = !1;
      h = !1, p !== null && (p = Gn(p), p !== void 0 && (a.has(p) ? h = !0 : t.has(p) && (d === 1 ? h = !0 : v = !0))), Yd !== null && (Yd.has(e) || i !== null && Yd.has(i)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || v) && (i = Vl(e, 2), i !== null && Tt(i, e, 2)), o === null || h || df(
        o,
        t,
        a
      ), f !== null && df(
        f,
        t,
        a
      );
    }
    function hf(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, jg || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Dh(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function cn(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = ge(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = _i(e.type);
          break;
        case 1:
          a.type = _i(e.type);
          break;
        case 11:
          a.type = zh(e.type);
      }
      return a;
    }
    function Oh(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function tr(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Dh(e) && (d = 1), h = _i(h);
      else if (typeof e == "string")
        d = A(), d = bo(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case em:
            return t = ge(31, a, t, o), t.elementType = em, t.lanes = f, t;
          case ye:
            return _u(
              a.children,
              o,
              f,
              t
            );
          case To:
            d = 8, o |= Pl, o |= Au;
            break;
          case Eo:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = ge(12, e, t, i | Nl), t.elementType = Eo, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case Ao:
            return t = ge(13, a, t, o), t.elementType = Ao, t.lanes = f, t;
          case fi:
            return t = ge(19, a, t, o), t.elementType = fi, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Py:
                case Ca:
                  d = 10;
                  break e;
                case pd:
                  d = 9;
                  break e;
                case pu:
                  d = 11, h = zh(h);
                  break e;
                case is:
                  d = 14;
                  break e;
                case sa:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : se(e) ? a = "array" : e !== void 0 && e.$$typeof === oi ? (a = "<" + (qe(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? wt(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = ge(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function yf(e, t, a) {
      return t = tr(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function _u(e, t, a, i) {
      return e = ge(7, e, i, t), e.lanes = a, e;
    }
    function Gu(e, t, a) {
      return e = ge(6, e, null, t), e.lanes = a, e;
    }
    function Mh(e, t, a) {
      return t = ge(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function Gi(e, t) {
      Xa(), _d[Gd++] = vp, _d[Gd++] = pp, pp = e, vp = t;
    }
    function z0(e, t, a) {
      Xa(), Vn[Xn++] = bc, Vn[Xn++] = Sc, Vn[Xn++] = Ss, Ss = e;
      var i = bc;
      e = Sc;
      var o = 32 - Sl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Sl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, bc = 1 << 32 - Sl(t) + o | a << o | i, Sc = f + e;
      } else
        bc = 1 << f | a << o | i, Sc = e;
    }
    function lr(e) {
      Xa(), e.return !== null && (Gi(e, 1), z0(e, 1, 0));
    }
    function ar(e) {
      for (; e === pp; )
        pp = _d[--Gd], _d[Gd] = null, vp = _d[--Gd], _d[Gd] = null;
      for (; e === Ss; )
        Ss = Vn[--Xn], Vn[Xn] = null, Sc = Vn[--Xn], Vn[Xn] = null, bc = Vn[--Xn], Vn[Xn] = null;
    }
    function Xa() {
      Ve || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function ja(e, t) {
      if (e.return === null) {
        if (jn === null)
          jn = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (jn.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          jn.distanceFromLeaf > t && (jn.distanceFromLeaf = t);
        }
        return jn;
      }
      var a = ja(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Uh(e, t) {
      Tc || (e = ja(e, 0), e.serverProps = null, t !== null && (t = id(t), e.serverTail.push(t)));
    }
    function on(e) {
      var t = "", a = jn;
      throw a !== null && (jn = null, t = nf(a)), Xc(
        aa(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), Cv;
    }
    function Hh(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Tl] = e, t[Fl] = i, Mn(a, i), a) {
        case "dialog":
          Re("cancel", t), Re("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Re("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < Jm.length; a++)
            Re(Jm[a], t);
          break;
        case "source":
          Re("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Re("error", t), Re("load", t);
          break;
        case "details":
          Re("toggle", t);
          break;
        case "input":
          xu("input", i), Re("invalid", t), Cu(t, i), s0(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), Wn(t);
          break;
        case "option":
          rh(t, i);
          break;
        case "select":
          xu("select", i), Re("invalid", t), lf(t, i);
          break;
        case "textarea":
          xu("textarea", i), Re("invalid", t), nn(t, i), dh(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), Wn(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Cy(t.textContent, a) ? (i.popover != null && (Re("beforetoggle", t), Re("toggle", t)), i.onScroll != null && Re("scroll", t), i.onScrollEnd != null && Re("scrollend", t), i.onClick != null && (t.onclick = du), t = !0) : t = !1, t || on(e);
    }
    function xh(e) {
      for (ha = e.return; ha; )
        switch (ha.tag) {
          case 5:
          case 13:
            vi = !1;
            return;
          case 27:
          case 3:
            vi = !0;
            return;
          default:
            ha = ha.return;
        }
    }
    function Vi(e) {
      if (e !== ha) return !1;
      if (!Ve)
        return xh(e), Ve = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Un(e.type, e.memoizedProps)), a = !a), a && Ct) {
        for (a = Ct; a; ) {
          var i = ja(e, 0), o = id(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Xy(a) : fl(a.nextSibling);
        }
        on(e);
      }
      if (xh(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Ct = Xy(e);
      } else
        t === 27 ? (t = Ct, Hn(e.type) ? (e = bg, bg = null, Ct = e) : Ct = t) : Ct = ha ? fl(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Xi() {
      Ct = ha = null, Tc = Ve = !1;
    }
    function Ch() {
      var e = Ts;
      return e !== null && (pa === null ? pa = e : pa.push.apply(
        pa,
        e
      ), Ts = null), e;
    }
    function Xc(e) {
      Ts === null ? Ts = [e] : Ts.push(e);
    }
    function Nh() {
      var e = jn;
      if (e !== null) {
        jn = null;
        for (var t = nf(e); 0 < e.children.length; )
          e = e.children[0];
        W(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function nr() {
      Vd = gp = null, Xd = !1;
    }
    function Vu(e, t, a) {
      de(Nv, t._currentValue, e), t._currentValue = a, de(Bv, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== wg && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = wg;
    }
    function tu(e, t) {
      e._currentValue = Nv.current;
      var a = Bv.current;
      Xe(Bv, t), e._currentRenderer = a, Xe(Nv, t);
    }
    function Bh(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function qh(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var p = 0; p < t.length; p++)
              if (h.context === t[p]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), Bh(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Bh(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function ul(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            da(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === zo.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Wm) : e = [Wm]);
        }
        o = o.return;
      }
      e !== null && qh(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function Xu(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!da(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function ju(e) {
      gp = e, Vd = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function nt(e) {
      return Xd && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Yh(gp, e);
    }
    function mf(e, t) {
      return gp === null && ju(e), Yh(e, t);
    }
    function Yh(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, Vd === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Vd = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Vd = Vd.next = t;
      return a;
    }
    function pf() {
      return {
        controller: new fS(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function ji(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function fn(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && sS(rS, function() {
        e.controller.abort();
      });
    }
    function Qa() {
      var e = Es;
      return Es = 0, e;
    }
    function Qu(e) {
      var t = Es;
      return Es = e, t;
    }
    function Qi(e) {
      var t = Es;
      return Es += e, t;
    }
    function ur(e) {
      qa = jd(), 0 > e.actualStartTime && (e.actualStartTime = qa);
    }
    function lu(e) {
      if (0 <= qa) {
        var t = jd() - qa;
        e.actualDuration += t, e.selfBaseDuration = t, qa = -1;
      }
    }
    function Zi(e) {
      if (0 <= qa) {
        var t = jd() - qa;
        e.actualDuration += t, qa = -1;
      }
    }
    function Sa() {
      if (0 <= qa) {
        var e = jd() - qa;
        qa = -1, Es += e;
      }
    }
    function Za() {
      qa = jd();
    }
    function sn(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function D0(e, t) {
      if (Am === null) {
        var a = Am = [];
        qv = 0, As = Oy(), Qd = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return qv++, t.then(_h, _h), t;
    }
    function _h() {
      if (--qv === 0 && Am !== null) {
        Qd !== null && (Qd.status = "fulfilled");
        var e = Am;
        Am = null, As = 0, Qd = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function O0(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function Gh() {
      var e = Rs.current;
      return e !== null ? e : ut.pooledCache;
    }
    function ir(e, t) {
      t === null ? de(Rs, Rs.current, e) : de(Rs, t.pool, e);
    }
    function M0() {
      var e = Gh();
      return e === null ? null : { parent: dl._currentValue, pool: e };
    }
    function Vh() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Xh(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function jc() {
    }
    function Ta(e, t, a) {
      x.actQueue !== null && (x.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(jc, jc), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, na(e), e;
        default:
          if (typeof t.status == "string")
            t.then(jc, jc);
          else {
            if (e = ut, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "fulfilled", f.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "rejected", f.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, na(e), e;
          }
          throw xm = t, Rp = !0, Hm;
      }
    }
    function jh() {
      if (xm === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = xm;
      return xm = null, Rp = !1, e;
    }
    function na(e) {
      if (e === Hm || e === Ap)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Xl(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function Zu(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function rn(e) {
      return {
        lane: e,
        tag: Wg,
        payload: null,
        callback: null,
        next: null
      };
    }
    function La(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, Gv === i && !Pg) {
        var o = te(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), Pg = !0;
      }
      return (we & ma) !== en ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = er(e), E0(e, null, a), t) : (Ps(e, i, t, a), er(e));
    }
    function Lu(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, xc(e, a);
      }
    }
    function Qc(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function dn() {
      if (Vv) {
        var e = Qd;
        if (e !== null) throw e;
      }
    }
    function Zc(e, t, a, i) {
      Vv = !1;
      var o = e.updateQueue;
      qo = !1, Gv = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var p = h, v = p.next;
        p.next = null, d === null ? f = v : d.next = v, d = p;
        var U = e.alternate;
        U !== null && (U = U.updateQueue, h = U.lastBaseUpdate, h !== d && (h === null ? U.firstBaseUpdate = v : h.next = v, U.lastBaseUpdate = p));
      }
      if (f !== null) {
        var B = o.baseState;
        d = 0, U = v = p = null, h = f;
        do {
          var O = h.lane & -536870913, Y = O !== h.lane;
          if (Y ? (Me & O) === O : (i & O) === O) {
            O !== 0 && O === As && (Vv = !0), U !== null && (U = U.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              O = e;
              var F = h, fe = t, it = a;
              switch (F.tag) {
                case Fg:
                  if (F = F.payload, typeof F == "function") {
                    Xd = !0;
                    var xe = F.call(
                      it,
                      B,
                      fe
                    );
                    if (O.mode & Pl) {
                      Ue(!0);
                      try {
                        F.call(it, B, fe);
                      } finally {
                        Ue(!1);
                      }
                    }
                    Xd = !1, B = xe;
                    break e;
                  }
                  B = F;
                  break e;
                case _v:
                  O.flags = O.flags & -65537 | 128;
                case Wg:
                  if (xe = F.payload, typeof xe == "function") {
                    if (Xd = !0, F = xe.call(
                      it,
                      B,
                      fe
                    ), O.mode & Pl) {
                      Ue(!0);
                      try {
                        xe.call(it, B, fe);
                      } finally {
                        Ue(!1);
                      }
                    }
                    Xd = !1;
                  } else F = xe;
                  if (F == null) break e;
                  B = be({}, B, F);
                  break e;
                case Ig:
                  qo = !0;
              }
            }
            O = h.callback, O !== null && (e.flags |= 64, Y && (e.flags |= 8192), Y = o.callbacks, Y === null ? o.callbacks = [O] : Y.push(O));
          } else
            Y = {
              lane: O,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, U === null ? (v = U = Y, p = B) : U = U.next = Y, d |= O;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            Y = h, h = Y.next, Y.next = null, o.lastBaseUpdate = Y, o.shared.pending = null;
          }
        } while (!0);
        U === null && (p = B), o.baseState = p, o.firstBaseUpdate = v, o.lastBaseUpdate = U, f === null && (o.shared.lanes = 0), Vo |= d, e.lanes = d, e.memoizedState = B;
      }
      Gv = null;
    }
    function vf(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function Lc(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          vf(a[e], t);
    }
    function U0(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          vf(a[e], t);
    }
    function jl(e, t) {
      var a = Si;
      de(zp, a, e), de(Zd, t, e), Si = a | t.baseLanes;
    }
    function gf(e) {
      de(zp, Si, e), de(
        Zd,
        Zd.current,
        e
      );
    }
    function wa(e) {
      Si = zp.current, Xe(Zd, e), Xe(zp, e);
    }
    function Se() {
      var e = N;
      Ln === null ? Ln = [e] : Ln.push(e);
    }
    function Q() {
      var e = N;
      if (Ln !== null && (Ac++, Ln[Ac] !== e)) {
        var t = te(re);
        if (!e1.has(t) && (e1.add(t), Ln !== null)) {
          for (var a = "", i = 0; i <= Ac; i++) {
            var o = Ln[i], f = i === Ac ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function Ea(e) {
      e == null || se(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        N,
        typeof e
      );
    }
    function wc() {
      var e = te(re);
      l1.has(e) || (l1.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function ht() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function wu(e, t) {
      if (Nm) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          N
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        N,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!da(e[a], t[a])) return !1;
      return !0;
    }
    function Ju(e, t, a, i, o, f) {
      Yo = f, re = t, Ln = e !== null ? e._debugHookTypes : null, Ac = -1, Nm = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = te(re), Xv.has(f) || (Xv.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, x.H = e !== null && e.memoizedState !== null ? Qv : Ln !== null ? a1 : jv, Ds = f = (t.mode & Pl) !== st;
      var d = Zv(a, i, o);
      if (Ds = !1, wd && (d = Jc(
        t,
        a,
        i,
        o
      )), f) {
        Ue(!0);
        try {
          d = Jc(
            t,
            a,
            i,
            o
          );
        } finally {
          Ue(!1);
        }
      }
      return bf(e, t), d;
    }
    function bf(e, t) {
      t._debugHookTypes = Ln, t.dependencies === null ? Ec !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Ec
      }) : t.dependencies._debugThenableState = Ec, x.H = Mp;
      var a = tt !== null && tt.next !== null;
      if (Yo = 0, Ln = N = el = tt = re = null, Ac = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), Dp = !1, Cm = 0, Ec = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || El || (e = e.dependencies, e !== null && Xu(e) && (El = !0)), Rp ? (Rp = !1, e = !0) : e = !1, e && (t = te(t) || "Unknown", t1.has(t) || Xv.has(t) || (t1.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Jc(e, t, a, i) {
      re = e;
      var o = 0;
      do {
        if (wd && (Ec = null), Cm = 0, wd = !1, o >= hS)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Nm = !1, el = tt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Ac = -1, x.H = n1, f = Zv(t, a, i);
      } while (wd);
      return f;
    }
    function Aa() {
      var e = x.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Li(t) : t, e = e.useState()[0], (tt !== null ? tt.memoizedState : null) !== e && (re.flags |= 1024), t;
    }
    function Ql() {
      var e = Op !== 0;
      return Op = 0, e;
    }
    function au(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Au) !== st ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Ja(e) {
      if (Dp) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Dp = !1;
      }
      Yo = 0, Ln = el = tt = re = null, Ac = -1, N = null, wd = !1, Cm = Op = 0, Ec = null;
    }
    function bt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return el === null ? re.memoizedState = el = e : el = el.next = e, el;
    }
    function He() {
      if (tt === null) {
        var e = re.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = tt.next;
      var t = el === null ? re.memoizedState : el.next;
      if (t !== null)
        el = t, tt = e;
      else {
        if (e === null)
          throw re.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        tt = e, e = {
          memoizedState: tt.memoizedState,
          baseState: tt.baseState,
          baseQueue: tt.baseQueue,
          queue: tt.queue,
          next: null
        }, el === null ? re.memoizedState = el = e : el = el.next = e;
      }
      return el;
    }
    function cr() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Li(e) {
      var t = Cm;
      return Cm += 1, Ec === null && (Ec = Vh()), e = Ta(Ec, e, t), t = re, (el === null ? t.memoizedState : el.next) === null && (t = t.alternate, x.H = t !== null && t.memoizedState !== null ? Qv : jv), e;
    }
    function hn(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Li(e);
        if (e.$$typeof === Ca) return nt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Ht(e) {
      var t = null, a = re.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = re.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = cr(), re.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Nm)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = np;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function Ye(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ne(e, t, a) {
      var i = bt();
      if (a !== void 0) {
        var o = a(t);
        if (Ds) {
          Ue(!0);
          try {
            a(t);
          } finally {
            Ue(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = Wh.bind(
        null,
        re,
        e
      ), [i.memoizedState, e];
    }
    function Ra(e) {
      var t = He();
      return za(t, tt, e);
    }
    function za(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, p = null, v = t, U = !1;
        do {
          var B = v.lane & -536870913;
          if (B !== v.lane ? (Me & B) === B : (Yo & B) === B) {
            var O = v.revertLane;
            if (O === 0)
              p !== null && (p = p.next = {
                lane: 0,
                revertLane: 0,
                action: v.action,
                hasEagerState: v.hasEagerState,
                eagerState: v.eagerState,
                next: null
              }), B === As && (U = !0);
            else if ((Yo & O) === O) {
              v = v.next, O === As && (U = !0);
              continue;
            } else
              B = {
                lane: 0,
                revertLane: v.revertLane,
                action: v.action,
                hasEagerState: v.hasEagerState,
                eagerState: v.eagerState,
                next: null
              }, p === null ? (h = p = B, d = f) : p = p.next = B, re.lanes |= O, Vo |= O;
            B = v.action, Ds && a(f, B), f = v.hasEagerState ? v.eagerState : a(f, B);
          } else
            O = {
              lane: B,
              revertLane: v.revertLane,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }, p === null ? (h = p = O, d = f) : p = p.next = O, re.lanes |= B, Vo |= B;
          v = v.next;
        } while (v !== null && v !== t);
        if (p === null ? d = f : p.next = h, !da(f, e.memoizedState) && (El = !0, U && (a = Qd, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = p, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function wi(e) {
      var t = He(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        da(f, t.memoizedState) || (El = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function nu(e, t, a) {
      var i = re, o = bt();
      if (Ve) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        Ld || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), Ld = !0);
      } else {
        if (f = t(), Ld || (a = t(), da(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Ld = !0)), ut === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Me & 124) !== 0 || Qh(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, sr(
        kc.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, mn(
        Zn | hl,
        ku(),
        Kc.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Sf(e, t, a) {
      var i = re, o = He(), f = Ve;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !Ld) {
        var d = t();
        da(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Ld = !0);
      }
      (d = !da(
        (tt || o).memoizedState,
        a
      )) && (o.memoizedState = a, El = !0), o = o.queue;
      var h = kc.bind(null, i, o, e);
      if (Vt(2048, hl, h, [e]), o.getSnapshot !== t || d || el !== null && el.memoizedState.tag & Zn) {
        if (i.flags |= 2048, mn(
          Zn | hl,
          ku(),
          Kc.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), ut === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (Yo & 124) !== 0 || Qh(i, t, a);
      }
      return a;
    }
    function Qh(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = re.updateQueue, t === null ? (t = cr(), re.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function Kc(e, t, a, i) {
      t.value = a, t.getSnapshot = i, Zh(t) && $c(e);
    }
    function kc(e, t, a) {
      return a(function() {
        Zh(t) && $c(e);
      });
    }
    function Zh(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !da(e, a);
      } catch {
        return !0;
      }
    }
    function $c(e) {
      var t = Vl(e, 2);
      t !== null && Tt(t, e, 2);
    }
    function Tf(e) {
      var t = bt();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Ds) {
          Ue(!0);
          try {
            a();
          } finally {
            Ue(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ye,
        lastRenderedState: e
      }, t;
    }
    function uu(e) {
      e = Tf(e);
      var t = e.queue, a = Pc.bind(null, re, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Ka(e) {
      var t = bt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = br.bind(
        null,
        re,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function iu(e, t) {
      var a = He();
      return yn(a, tt, e, t);
    }
    function yn(e, t, a, i) {
      return e.baseState = a, za(
        e,
        tt,
        typeof i == "function" ? i : Ye
      );
    }
    function or(e, t) {
      var a = He();
      return tt !== null ? yn(a, tt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function Lh(e, t, a, i, o) {
      if (Mf(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        x.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, Wc(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function Wc(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = x.T, d = {};
        x.T = d, x.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(o, i), p = x.S;
          p !== null && p(d, h), Ef(e, t, h);
        } catch (v) {
          $t(e, t, v);
        } finally {
          x.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), Ef(e, t, d);
        } catch (v) {
          $t(e, t, v);
        }
    }
    function Ef(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          Ku(e, t, i);
        },
        function(i) {
          return $t(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : Ku(e, t, a);
    }
    function Ku(e, t, a) {
      t.status = "fulfilled", t.value = a, Af(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Wc(e, a)));
    }
    function $t(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, Af(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function Af(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function wh(e, t) {
      return t;
    }
    function Fc(e, t) {
      if (Ve) {
        var a = ut.formState;
        if (a !== null) {
          e: {
            var i = re;
            if (Ve) {
              if (Ct) {
                t: {
                  for (var o = Ct, f = vi; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = fl(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === mg || f === lb ? o : null;
                }
                if (o) {
                  Ct = fl(
                    o.nextSibling
                  ), i = o.data === mg;
                  break e;
                }
              }
              on(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = bt(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wh,
        lastRenderedState: t
      }, a.queue = i, a = Pc.bind(
        null,
        re,
        i
      ), i.dispatch = a, i = Tf(!1), f = br.bind(
        null,
        re,
        !1,
        i.queue
      ), i = bt(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = Lh.bind(
        null,
        re,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function fr(e) {
      var t = He();
      return H0(t, tt, e);
    }
    function H0(e, t, a) {
      if (t = za(
        e,
        t,
        wh
      )[0], e = Ra(Ye)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Li(t);
        } catch (d) {
          throw d === Hm ? Ap : d;
        }
      else i = t;
      t = He();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (re.flags |= 2048, mn(
        Zn | hl,
        ku(),
        Gt.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function Gt(e, t) {
      e.action = t;
    }
    function Ic(e) {
      var t = He(), a = tt;
      if (a !== null)
        return H0(t, a, e);
      He(), t = t.memoizedState, a = He();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function mn(e, t, a, i) {
      return e = {
        tag: e,
        create: a,
        deps: i,
        inst: t,
        next: null
      }, t = re.updateQueue, t === null && (t = cr(), re.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function ku() {
      return { destroy: void 0, resource: void 0 };
    }
    function Rf(e) {
      var t = bt();
      return e = { current: e }, t.memoizedState = e;
    }
    function Da(e, t, a, i) {
      var o = bt();
      i = i === void 0 ? null : i, re.flags |= e, o.memoizedState = mn(
        Zn | t,
        ku(),
        a,
        i
      );
    }
    function Vt(e, t, a, i) {
      var o = He();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      tt !== null && i !== null && wu(i, tt.memoizedState.deps) ? o.memoizedState = mn(t, f, a, i) : (re.flags |= e, o.memoizedState = mn(
        Zn | t,
        f,
        a,
        i
      ));
    }
    function sr(e, t) {
      (re.mode & Au) !== st && (re.mode & Xg) === st ? Da(276826112, hl, e, t) : Da(8390656, hl, e, t);
    }
    function rr(e, t) {
      var a = 4194308;
      return (re.mode & Au) !== st && (a |= 134217728), Da(a, Bl, e, t);
    }
    function x0(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function dr(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (re.mode & Au) !== st && (i |= 134217728), Da(
        i,
        Bl,
        x0.bind(null, t, e),
        a
      );
    }
    function pn(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Vt(
        4,
        Bl,
        x0.bind(null, t, e),
        a
      );
    }
    function zf(e, t) {
      return bt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Ji(e, t) {
      var a = He();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && wu(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function hr(e, t) {
      var a = bt();
      t = t === void 0 ? null : t;
      var i = e();
      if (Ds) {
        Ue(!0);
        try {
          e();
        } finally {
          Ue(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function $u(e, t) {
      var a = He();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && wu(t, i[1]))
        return i[0];
      if (i = e(), Ds) {
        Ue(!0);
        try {
          e();
        } finally {
          Ue(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function yr(e, t) {
      var a = bt();
      return pr(a, e, t);
    }
    function Df(e, t) {
      var a = He();
      return Of(
        a,
        tt.memoizedState,
        e,
        t
      );
    }
    function mr(e, t) {
      var a = He();
      return tt === null ? pr(a, e, t) : Of(
        a,
        tt.memoizedState,
        e,
        t
      );
    }
    function pr(e, t, a) {
      return a === void 0 || (Yo & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = j0(), re.lanes |= e, Vo |= e, a);
    }
    function Of(e, t, a, i) {
      return da(a, t) ? a : Zd.current !== null ? (e = pr(e, a, i), da(e, t) || (El = !0), e) : (Yo & 42) === 0 ? (El = !0, e.memoizedState = a) : (e = j0(), re.lanes |= e, Vo |= e, t);
    }
    function Jh(e, t, a, i, o) {
      var f = oe.p;
      oe.p = f !== 0 && f < Pa ? f : Pa;
      var d = x.T, h = {};
      x.T = h, br(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var p = o(), v = x.S;
        if (v !== null && v(h, p), p !== null && typeof p == "object" && typeof p.then == "function") {
          var U = O0(
            p,
            i
          );
          cu(
            e,
            t,
            U,
            Jl(e)
          );
        } else
          cu(
            e,
            t,
            i,
            Jl(e)
          );
      } catch (B) {
        cu(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: B },
          Jl(e)
        );
      } finally {
        oe.p = f, x.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function Ki(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Kh(e).queue;
      Jh(
        e,
        o,
        t,
        _s,
        a === null ? Be : function() {
          return kh(e), a(i);
        }
      );
    }
    function Kh(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: _s,
        baseState: _s,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ye,
          lastRenderedState: _s
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ye,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function kh(e) {
      x.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Kh(e).next.queue;
      cu(
        e,
        t,
        {},
        Jl(e)
      );
    }
    function vn() {
      var e = Tf(!1);
      return e = Jh.bind(
        null,
        re,
        e.queue,
        !0,
        !1
      ), bt().memoizedState = e, [!1, e];
    }
    function vr() {
      var e = Ra(Ye)[0], t = He().memoizedState;
      return [
        typeof e == "boolean" ? e : Li(e),
        t
      ];
    }
    function gr() {
      var e = wi(Ye)[0], t = He().memoizedState;
      return [
        typeof e == "boolean" ? e : Li(e),
        t
      ];
    }
    function Zl() {
      return nt(Wm);
    }
    function gn() {
      var e = bt(), t = ut.identifierPrefix;
      if (Ve) {
        var a = Sc, i = bc;
        a = (i & ~(1 << 32 - Sl(i) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Op++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = dS++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    }
    function ki() {
      return bt().memoizedState = $h.bind(
        null,
        re
      );
    }
    function $h(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = Jl(a);
            e = rn(i);
            var o = La(a, e, i);
            o !== null && (Tt(o, a, i), Lu(o, a, i)), a = pf(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function Wh(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Jl(e);
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      Mf(e) ? $i(t, o) : (o = Rh(e, t, o, i), o !== null && (Tt(o, e, i), Uf(o, t, i))), Ei(e, i);
    }
    function Pc(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Jl(e), cu(e, t, a, i), Ei(e, i);
    }
    function cu(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Mf(e)) $i(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = x.H;
          x.H = zu;
          try {
            var h = t.lastRenderedState, p = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = p, da(p, h))
              return Ps(e, t, o, 0), ut === null && rf(), !1;
          } catch {
          } finally {
            x.H = d;
          }
        }
        if (a = Rh(e, t, o, i), a !== null)
          return Tt(a, e, i), Uf(a, t, i), !0;
      }
      return !1;
    }
    function br(e, t, a, i) {
      if (x.T === null && As === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Oy(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Mf(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Rh(
          e,
          a,
          i,
          2
        ), t !== null && Tt(t, e, 2);
      Ei(e, 2);
    }
    function Mf(e) {
      var t = e.alternate;
      return e === re || t !== null && t === re;
    }
    function $i(e, t) {
      wd = Dp = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Uf(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, xc(e, a);
      }
    }
    function Wt(e) {
      var t = Ee;
      return e != null && (Ee = t === null ? e : t.concat(e)), t;
    }
    function eo(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = yf(e, a.mode, 0), t._debugInfo = Ee, t.return = a), W(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function to(e) {
      var t = Bm;
      return Bm += 1, Jd === null && (Jd = Vh()), Ta(Jd, e, t);
    }
    function Oa(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function he(e, t) {
      throw t.$$typeof === us ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function je(e, t) {
      var a = te(e) || "Component";
      b1[a] || (b1[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function yt(e, t) {
      var a = te(e) || "Component";
      S1[a] || (S1[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Hf(e) {
      function t(b, S) {
        if (e) {
          var T = b.deletions;
          T === null ? (b.deletions = [S], b.flags |= 16) : T.push(S);
        }
      }
      function a(b, S) {
        if (!e) return null;
        for (; S !== null; )
          t(b, S), S = S.sibling;
        return null;
      }
      function i(b) {
        for (var S = /* @__PURE__ */ new Map(); b !== null; )
          b.key !== null ? S.set(b.key, b) : S.set(b.index, b), b = b.sibling;
        return S;
      }
      function o(b, S) {
        return b = cn(b, S), b.index = 0, b.sibling = null, b;
      }
      function f(b, S, T) {
        return b.index = T, e ? (T = b.alternate, T !== null ? (T = T.index, T < S ? (b.flags |= 67108866, S) : T) : (b.flags |= 67108866, S)) : (b.flags |= 1048576, S);
      }
      function d(b) {
        return e && b.alternate === null && (b.flags |= 67108866), b;
      }
      function h(b, S, T, _) {
        return S === null || S.tag !== 6 ? (S = Gu(
          T,
          b.mode,
          _
        ), S.return = b, S._debugOwner = b, S._debugTask = b._debugTask, S._debugInfo = Ee, S) : (S = o(S, T), S.return = b, S._debugInfo = Ee, S);
      }
      function p(b, S, T, _) {
        var w = T.type;
        return w === ye ? (S = U(
          b,
          S,
          T.props.children,
          _,
          T.key
        ), eo(T, S, b), S) : S !== null && (S.elementType === w || A0(S, T) || typeof w == "object" && w !== null && w.$$typeof === sa && _o(w) === S.type) ? (S = o(S, T.props), Oa(S, T), S.return = b, S._debugOwner = T._owner, S._debugInfo = Ee, S) : (S = yf(T, b.mode, _), Oa(S, T), S.return = b, S._debugInfo = Ee, S);
      }
      function v(b, S, T, _) {
        return S === null || S.tag !== 4 || S.stateNode.containerInfo !== T.containerInfo || S.stateNode.implementation !== T.implementation ? (S = Mh(T, b.mode, _), S.return = b, S._debugInfo = Ee, S) : (S = o(S, T.children || []), S.return = b, S._debugInfo = Ee, S);
      }
      function U(b, S, T, _, w) {
        return S === null || S.tag !== 7 ? (S = _u(
          T,
          b.mode,
          _,
          w
        ), S.return = b, S._debugOwner = b, S._debugTask = b._debugTask, S._debugInfo = Ee, S) : (S = o(S, T), S.return = b, S._debugInfo = Ee, S);
      }
      function B(b, S, T) {
        if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
          return S = Gu(
            "" + S,
            b.mode,
            T
          ), S.return = b, S._debugOwner = b, S._debugTask = b._debugTask, S._debugInfo = Ee, S;
        if (typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
            case oi:
              return T = yf(
                S,
                b.mode,
                T
              ), Oa(T, S), T.return = b, b = Wt(S._debugInfo), T._debugInfo = Ee, Ee = b, T;
            case yc:
              return S = Mh(
                S,
                b.mode,
                T
              ), S.return = b, S._debugInfo = Ee, S;
            case sa:
              var _ = Wt(S._debugInfo);
              return S = _o(S), b = B(b, S, T), Ee = _, b;
          }
          if (se(S) || Ut(S))
            return T = _u(
              S,
              b.mode,
              T,
              null
            ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, b = Wt(S._debugInfo), T._debugInfo = Ee, Ee = b, T;
          if (typeof S.then == "function")
            return _ = Wt(S._debugInfo), b = B(
              b,
              to(S),
              T
            ), Ee = _, b;
          if (S.$$typeof === Ca)
            return B(
              b,
              mf(b, S),
              T
            );
          he(b, S);
        }
        return typeof S == "function" && je(b, S), typeof S == "symbol" && yt(b, S), null;
      }
      function O(b, S, T, _) {
        var w = S !== null ? S.key : null;
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
          return w !== null ? null : h(b, S, "" + T, _);
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case oi:
              return T.key === w ? (w = Wt(T._debugInfo), b = p(
                b,
                S,
                T,
                _
              ), Ee = w, b) : null;
            case yc:
              return T.key === w ? v(b, S, T, _) : null;
            case sa:
              return w = Wt(T._debugInfo), T = _o(T), b = O(
                b,
                S,
                T,
                _
              ), Ee = w, b;
          }
          if (se(T) || Ut(T))
            return w !== null ? null : (w = Wt(T._debugInfo), b = U(
              b,
              S,
              T,
              _,
              null
            ), Ee = w, b);
          if (typeof T.then == "function")
            return w = Wt(T._debugInfo), b = O(
              b,
              S,
              to(T),
              _
            ), Ee = w, b;
          if (T.$$typeof === Ca)
            return O(
              b,
              S,
              mf(b, T),
              _
            );
          he(b, T);
        }
        return typeof T == "function" && je(b, T), typeof T == "symbol" && yt(b, T), null;
      }
      function Y(b, S, T, _, w) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
          return b = b.get(T) || null, h(S, b, "" + _, w);
        if (typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case oi:
              return T = b.get(
                _.key === null ? T : _.key
              ) || null, b = Wt(_._debugInfo), S = p(
                S,
                T,
                _,
                w
              ), Ee = b, S;
            case yc:
              return b = b.get(
                _.key === null ? T : _.key
              ) || null, v(S, b, _, w);
            case sa:
              var me = Wt(_._debugInfo);
              return _ = _o(_), S = Y(
                b,
                S,
                T,
                _,
                w
              ), Ee = me, S;
          }
          if (se(_) || Ut(_))
            return T = b.get(T) || null, b = Wt(_._debugInfo), S = U(
              S,
              T,
              _,
              w,
              null
            ), Ee = b, S;
          if (typeof _.then == "function")
            return me = Wt(_._debugInfo), S = Y(
              b,
              S,
              T,
              to(_),
              w
            ), Ee = me, S;
          if (_.$$typeof === Ca)
            return Y(
              b,
              S,
              T,
              mf(S, _),
              w
            );
          he(S, _);
        }
        return typeof _ == "function" && je(S, _), typeof _ == "symbol" && yt(S, _), null;
      }
      function F(b, S, T, _) {
        if (typeof T != "object" || T === null) return _;
        switch (T.$$typeof) {
          case oi:
          case yc:
            Lt(b, S, T);
            var w = T.key;
            if (typeof w != "string") break;
            if (_ === null) {
              _ = /* @__PURE__ */ new Set(), _.add(w);
              break;
            }
            if (!_.has(w)) {
              _.add(w);
              break;
            }
            W(S, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                w
              );
            });
            break;
          case sa:
            T = _o(T), F(b, S, T, _);
        }
        return _;
      }
      function fe(b, S, T, _) {
        for (var w = null, me = null, I = null, pe = S, ve = S = 0, rt = null; pe !== null && ve < T.length; ve++) {
          pe.index > ve ? (rt = pe, pe = null) : rt = pe.sibling;
          var Zt = O(
            b,
            pe,
            T[ve],
            _
          );
          if (Zt === null) {
            pe === null && (pe = rt);
            break;
          }
          w = F(
            b,
            Zt,
            T[ve],
            w
          ), e && pe && Zt.alternate === null && t(b, pe), S = f(Zt, S, ve), I === null ? me = Zt : I.sibling = Zt, I = Zt, pe = rt;
        }
        if (ve === T.length)
          return a(b, pe), Ve && Gi(b, ve), me;
        if (pe === null) {
          for (; ve < T.length; ve++)
            pe = B(b, T[ve], _), pe !== null && (w = F(
              b,
              pe,
              T[ve],
              w
            ), S = f(
              pe,
              S,
              ve
            ), I === null ? me = pe : I.sibling = pe, I = pe);
          return Ve && Gi(b, ve), me;
        }
        for (pe = i(pe); ve < T.length; ve++)
          rt = Y(
            pe,
            b,
            ve,
            T[ve],
            _
          ), rt !== null && (w = F(
            b,
            rt,
            T[ve],
            w
          ), e && rt.alternate !== null && pe.delete(
            rt.key === null ? ve : rt.key
          ), S = f(
            rt,
            S,
            ve
          ), I === null ? me = rt : I.sibling = rt, I = rt);
        return e && pe.forEach(function(Uc) {
          return t(b, Uc);
        }), Ve && Gi(b, ve), me;
      }
      function it(b, S, T, _) {
        if (T == null)
          throw Error("An iterable object provided no iterator.");
        for (var w = null, me = null, I = S, pe = S = 0, ve = null, rt = null, Zt = T.next(); I !== null && !Zt.done; pe++, Zt = T.next()) {
          I.index > pe ? (ve = I, I = null) : ve = I.sibling;
          var Uc = O(b, I, Zt.value, _);
          if (Uc === null) {
            I === null && (I = ve);
            break;
          }
          rt = F(
            b,
            Uc,
            Zt.value,
            rt
          ), e && I && Uc.alternate === null && t(b, I), S = f(Uc, S, pe), me === null ? w = Uc : me.sibling = Uc, me = Uc, I = ve;
        }
        if (Zt.done)
          return a(b, I), Ve && Gi(b, pe), w;
        if (I === null) {
          for (; !Zt.done; pe++, Zt = T.next())
            I = B(b, Zt.value, _), I !== null && (rt = F(
              b,
              I,
              Zt.value,
              rt
            ), S = f(
              I,
              S,
              pe
            ), me === null ? w = I : me.sibling = I, me = I);
          return Ve && Gi(b, pe), w;
        }
        for (I = i(I); !Zt.done; pe++, Zt = T.next())
          ve = Y(
            I,
            b,
            pe,
            Zt.value,
            _
          ), ve !== null && (rt = F(
            b,
            ve,
            Zt.value,
            rt
          ), e && ve.alternate !== null && I.delete(
            ve.key === null ? pe : ve.key
          ), S = f(
            ve,
            S,
            pe
          ), me === null ? w = ve : me.sibling = ve, me = ve);
        return e && I.forEach(function(VS) {
          return t(b, VS);
        }), Ve && Gi(b, pe), w;
      }
      function xe(b, S, T, _) {
        if (typeof T == "object" && T !== null && T.type === ye && T.key === null && (eo(T, null, b), T = T.props.children), typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case oi:
              var w = Wt(T._debugInfo);
              e: {
                for (var me = T.key; S !== null; ) {
                  if (S.key === me) {
                    if (me = T.type, me === ye) {
                      if (S.tag === 7) {
                        a(
                          b,
                          S.sibling
                        ), _ = o(
                          S,
                          T.props.children
                        ), _.return = b, _._debugOwner = T._owner, _._debugInfo = Ee, eo(T, _, b), b = _;
                        break e;
                      }
                    } else if (S.elementType === me || A0(
                      S,
                      T
                    ) || typeof me == "object" && me !== null && me.$$typeof === sa && _o(me) === S.type) {
                      a(
                        b,
                        S.sibling
                      ), _ = o(S, T.props), Oa(_, T), _.return = b, _._debugOwner = T._owner, _._debugInfo = Ee, b = _;
                      break e;
                    }
                    a(b, S);
                    break;
                  } else t(b, S);
                  S = S.sibling;
                }
                T.type === ye ? (_ = _u(
                  T.props.children,
                  b.mode,
                  _,
                  T.key
                ), _.return = b, _._debugOwner = b, _._debugTask = b._debugTask, _._debugInfo = Ee, eo(T, _, b), b = _) : (_ = yf(
                  T,
                  b.mode,
                  _
                ), Oa(_, T), _.return = b, _._debugInfo = Ee, b = _);
              }
              return b = d(b), Ee = w, b;
            case yc:
              e: {
                for (w = T, T = w.key; S !== null; ) {
                  if (S.key === T)
                    if (S.tag === 4 && S.stateNode.containerInfo === w.containerInfo && S.stateNode.implementation === w.implementation) {
                      a(
                        b,
                        S.sibling
                      ), _ = o(
                        S,
                        w.children || []
                      ), _.return = b, b = _;
                      break e;
                    } else {
                      a(b, S);
                      break;
                    }
                  else t(b, S);
                  S = S.sibling;
                }
                _ = Mh(
                  w,
                  b.mode,
                  _
                ), _.return = b, b = _;
              }
              return d(b);
            case sa:
              return w = Wt(T._debugInfo), T = _o(T), b = xe(
                b,
                S,
                T,
                _
              ), Ee = w, b;
          }
          if (se(T))
            return w = Wt(T._debugInfo), b = fe(
              b,
              S,
              T,
              _
            ), Ee = w, b;
          if (Ut(T)) {
            if (w = Wt(T._debugInfo), me = Ut(T), typeof me != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var I = me.call(T);
            return I === T ? (b.tag !== 0 || Object.prototype.toString.call(b.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(I) !== "[object Generator]") && (v1 || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), v1 = !0) : T.entries !== me || wv || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), wv = !0), b = it(
              b,
              S,
              I,
              _
            ), Ee = w, b;
          }
          if (typeof T.then == "function")
            return w = Wt(T._debugInfo), b = xe(
              b,
              S,
              to(T),
              _
            ), Ee = w, b;
          if (T.$$typeof === Ca)
            return xe(
              b,
              S,
              mf(b, T),
              _
            );
          he(b, T);
        }
        return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (w = "" + T, S !== null && S.tag === 6 ? (a(
          b,
          S.sibling
        ), _ = o(S, w), _.return = b, b = _) : (a(b, S), _ = Gu(
          w,
          b.mode,
          _
        ), _.return = b, _._debugOwner = b, _._debugTask = b._debugTask, _._debugInfo = Ee, b = _), d(b)) : (typeof T == "function" && je(b, T), typeof T == "symbol" && yt(b, T), a(b, S));
      }
      return function(b, S, T, _) {
        var w = Ee;
        Ee = null;
        try {
          Bm = 0;
          var me = xe(
            b,
            S,
            T,
            _
          );
          return Jd = null, me;
        } catch (rt) {
          if (rt === Hm || rt === Ap) throw rt;
          var I = ge(29, rt, null, b.mode);
          I.lanes = _, I.return = b;
          var pe = I._debugInfo = Ee;
          if (I._debugOwner = b._debugOwner, I._debugTask = b._debugTask, pe != null) {
            for (var ve = pe.length - 1; 0 <= ve; ve--)
              if (typeof pe[ve].stack == "string") {
                I._debugOwner = pe[ve], I._debugTask = pe[ve].debugTask;
                break;
              }
          }
          return I;
        } finally {
          Ee = w;
        }
      };
    }
    function ua(e) {
      var t = e.alternate;
      de(
        yl,
        yl.current & kd,
        e
      ), de(wn, e, e), bi === null && (t === null || Zd.current !== null || t.memoizedState !== null) && (bi = e);
    }
    function Wu(e) {
      if (e.tag === 22) {
        if (de(yl, yl.current, e), de(wn, e, e), bi === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (bi = e);
        }
      } else ka(e);
    }
    function ka(e) {
      de(yl, yl.current, e), de(
        wn,
        wn.current,
        e
      );
    }
    function ia(e) {
      Xe(wn, e), bi === e && (bi = null), Xe(yl, e);
    }
    function ou(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === Dc || xn(a)))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function Fh(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        C1.has(t) || (C1.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function mt(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & Pl) {
        Ue(!0);
        try {
          f = a(i, o);
        } finally {
          Ue(!1);
        }
      }
      f === void 0 && (t = qe(t) || "Component", M1.has(t) || (M1.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : be({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Sr(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & Pl) {
          Ue(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            Ue(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          qe(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !sf(a, i) || !sf(o, f) : !0;
    }
    function Tr(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = te(e) || "Component", A1.has(e) || (A1.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), Jv.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Fu(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = be({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function Ih(e) {
      Kv(e), console.warn(
        `%s

%s
`,
        $d ? "An error occurred in the <" + $d + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function C0(e) {
      var t = $d ? "The above error occurred in the <" + $d + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((kv || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          sb + e[0],
          rb,
          Kp + i + Kp,
          db
        ) : e.splice(
          0,
          0,
          sb,
          rb,
          Kp + i + Kp,
          db
        ), e.unshift(console), i = _S.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function Er(e) {
      Kv(e);
    }
    function lo(e, t) {
      try {
        $d = t.source ? te(t.source) : null, kv = null;
        var a = t.value;
        if (x.actQueue !== null)
          x.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Ar(e, t, a) {
      try {
        $d = a.source ? te(a.source) : null, kv = te(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function vl(e, t, a) {
      return a = rn(a), a.tag = _v, a.payload = { element: null }, a.callback = function() {
        W(t.source, lo, e, t);
      }, a;
    }
    function St(e) {
      return e = rn(e), e.tag = _v, e;
    }
    function xf(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          R0(a), W(
            i.source,
            Ar,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        R0(a), W(
          i.source,
          Ar,
          t,
          a,
          i
        ), typeof o != "function" && (jo === null ? jo = /* @__PURE__ */ new Set([this]) : jo.add(this)), yS(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          te(a) || "Unknown"
        );
      });
    }
    function Cf(e, t, a, i, o) {
      if (a.flags |= 32768, Dt && so(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && ul(
          t,
          a,
          o,
          !0
        ), Ve && (Tc = !0), a = wn.current, a !== null) {
          switch (a.tag) {
            case 13:
              return bi === null ? Zr() : a.alternate === null && Nt === zc && (Nt = Iv), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === Yv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), Ay(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === Yv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), Ay(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return Ay(e, i, o), Zr(), !1;
      }
      if (Ve)
        return Tc = !0, t = wn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== Cv && Xc(
          aa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== Cv && Xc(
          aa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = aa(i, a), o = vl(
          e.stateNode,
          i,
          o
        ), Qc(e, o), Nt !== Os && (Nt = Pd)), !1;
      var f = aa(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (Qm === null ? Qm = [f] : Qm.push(f), Nt !== Os && (Nt = Pd), t === null) return !0;
      i = aa(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = vl(
              a.stateNode,
              i,
              e
            ), Qc(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (jo === null || !jo.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = St(o), xf(
                o,
                e,
                a,
                i
              ), Qc(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function xt(e, t, a, i) {
      t.child = e === null ? T1(t, null, a, i) : Kd(
        t,
        e.child,
        a,
        i
      );
    }
    function Rr(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return ju(t), ll(t), i = Ju(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = Ql(), ga(), e !== null && !El ? (au(e, t, o), Sn(e, t, o)) : (Ve && h && lr(t), t.flags |= 1, xt(e, t, i, o), t.child);
    }
    function bn(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Dh(f) && f.defaultProps === void 0 && a.compare === null ? (a = _i(f), t.tag = 15, t.type = a, Mr(t, f), Nf(
          e,
          t,
          a,
          i,
          o
        )) : (e = tr(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !Br(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : sf, a(d, i) && e.ref === t.ref)
          return Sn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = cn(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Nf(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (sf(f, i) && e.ref === t.ref && t.type === e.type)
          if (El = !1, t.pendingProps = i = f, Br(e, o))
            (e.flags & 131072) !== 0 && (El = !0);
          else
            return t.lanes = e.lanes, Sn(e, t, o);
      }
      return Or(
        e,
        t,
        a,
        i,
        o
      );
    }
    function zr(e, t, a) {
      var i = t.pendingProps, o = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = f !== null ? f.baseLanes | a : a, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return Dr(
            e,
            t,
            i,
            a
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ir(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? jl(t, f) : gf(t), Wu(t);
        else
          return t.lanes = t.childLanes = 536870912, Dr(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a
          );
      } else
        f !== null ? (ir(t, f.cachePool), jl(t, f), ka(t), t.memoizedState = null) : (e !== null && ir(t, null), gf(t), ka(t));
      return xt(e, t, o, a), t.child;
    }
    function Dr(e, t, a, i) {
      var o = Gh();
      return o = o === null ? null : {
        parent: dl._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: o
      }, e !== null && ir(t, null), gf(t), Wu(t), e !== null && ul(e, t, i, !0), null;
    }
    function Bf(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function Or(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = qe(a) || "Unknown";
        B1[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), B1[f] = !0);
      }
      return t.mode & Pl && Ru.recordLegacyContextWarning(
        t,
        null
      ), e === null && (Mr(t, t.type), a.contextTypes && (f = qe(a) || "Unknown", Y1[f] || (Y1[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), ju(t), ll(t), a = Ju(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Ql(), ga(), e !== null && !El ? (au(e, t, o), Sn(e, t, o)) : (Ve && i && lr(t), t.flags |= 1, xt(e, t, a, o), t.child);
    }
    function Ph(e, t, a, i, o, f) {
      return ju(t), ll(t), Ac = -1, Nm = e !== null && e.type !== t.type, t.updateQueue = null, a = Jc(
        t,
        i,
        a,
        o
      ), bf(e, t), i = Ql(), ga(), e !== null && !El ? (au(e, t, f), Sn(e, t, f)) : (Ve && i && lr(t), t.flags |= 1, xt(e, t, a, f), t.child);
    }
    function ey(e, t, a, i, o) {
      switch (Bt(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = ut, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = St(h), xf(
            h,
            d,
            t,
            aa(f, t)
          ), Qc(t, h);
      }
      if (ju(t), t.stateNode === null) {
        if (d = Bo, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Ca) && !x1.has(a) && (x1.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === pd ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          qe(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = nt(f)), f = new a(i, d), t.mode & Pl) {
          Ue(!0);
          try {
            f = new a(i, d);
          } finally {
            Ue(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Jv, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = E1, typeof a.getDerivedStateFromProps == "function" && d === null && (d = qe(a) || "Component", R1.has(d) || (R1.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var p = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? p = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (p = "UNSAFE_componentWillUpdate"), d !== null || h !== null || p !== null) {
            f = qe(a) || "Component";
            var v = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            D1.has(f) || (D1.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              v,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              p !== null ? `
  ` + p : ""
            ));
          }
        }
        f = t.stateNode, d = qe(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !H1.has(a) && (H1.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !U1.has(a) && (U1.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          qe(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || z1.has(a) || (z1.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          qe(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || se(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, Xl(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? nt(d) : Bo, f.state === i && (d = qe(a) || "Component", O1.has(d) || (O1.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & Pl && Ru.recordLegacyContextWarning(
          t,
          f
        ), Ru.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (mt(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          te(t) || "Component"
        ), Jv.enqueueReplaceState(
          f,
          f.state,
          null
        )), Zc(t, i, f, o), dn(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Au) !== st && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var U = t.memoizedProps;
        h = Fu(a, U), f.props = h;
        var B = f.context;
        p = a.contextType, d = Bo, typeof p == "object" && p !== null && (d = nt(p)), v = a.getDerivedStateFromProps, p = typeof v == "function" || typeof f.getSnapshotBeforeUpdate == "function", U = t.pendingProps !== U, p || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (U || B !== d) && Tr(
          t,
          f,
          i,
          d
        ), qo = !1;
        var O = t.memoizedState;
        f.state = O, Zc(t, i, f, o), dn(), B = t.memoizedState, U || O !== B || qo ? (typeof v == "function" && (mt(
          t,
          a,
          v,
          i
        ), B = t.memoizedState), (h = qo || Sr(
          t,
          a,
          h,
          i,
          O,
          B,
          d
        )) ? (p || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Au) !== st && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Au) !== st && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = B), f.props = i, f.state = B, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Au) !== st && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, Zu(e, t), d = t.memoizedProps, p = Fu(a, d), f.props = p, v = t.pendingProps, O = f.context, B = a.contextType, h = Bo, typeof B == "object" && B !== null && (h = nt(B)), U = a.getDerivedStateFromProps, (B = typeof U == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== v || O !== h) && Tr(
          t,
          f,
          i,
          h
        ), qo = !1, O = t.memoizedState, f.state = O, Zc(t, i, f, o), dn();
        var Y = t.memoizedState;
        d !== v || O !== Y || qo || e !== null && e.dependencies !== null && Xu(e.dependencies) ? (typeof U == "function" && (mt(
          t,
          a,
          U,
          i
        ), Y = t.memoizedState), (p = qo || Sr(
          t,
          a,
          p,
          i,
          O,
          Y,
          h
        ) || e !== null && e.dependencies !== null && Xu(e.dependencies)) ? (B || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, Y, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          Y,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = Y), f.props = i, f.state = Y, f.context = h, f = p) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Bf(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, Po(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, qa = -1;
        else {
          if (ll(t), a = c1(h), t.mode & Pl) {
            Ue(!0);
            try {
              c1(h);
            } finally {
              Ue(!1);
            }
          }
          ga();
        }
        t.flags |= 1, e !== null && d ? (t.child = Kd(
          t,
          e.child,
          null,
          o
        ), t.child = Kd(
          t,
          null,
          a,
          o
        )) : xt(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Sn(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (Wd || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        te(t) || "a component"
      ), Wd = !0), e;
    }
    function ty(e, t, a, i) {
      return Xi(), t.flags |= 256, xt(e, t, a, i), t.child;
    }
    function Mr(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = qe(t) || "Unknown", _1[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), _1[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = qe(t) || "Unknown", q1[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), q1[t] = !0));
    }
    function qf(e) {
      return { baseLanes: e, cachePool: M0() };
    }
    function Ur(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= ln), e;
    }
    function N0(e, t, a) {
      var i, o = t.pendingProps;
      Ie(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (yl.current & qm) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (Ve) {
          if (f ? ua(t) : ka(t), Ve) {
            var h = Ct, p;
            if (!(p = !h)) {
              e: {
                var v = h;
                for (p = vi; v.nodeType !== 8; ) {
                  if (!p) {
                    p = null;
                    break e;
                  }
                  if (v = fl(v.nextSibling), v === null) {
                    p = null;
                    break e;
                  }
                }
                p = v;
              }
              p !== null ? (Xa(), t.memoizedState = {
                dehydrated: p,
                treeContext: Ss !== null ? { id: bc, overflow: Sc } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, v = ge(18, null, null, st), v.stateNode = p, v.return = t, t.child = v, ha = t, Ct = null, p = !0) : p = !1, p = !p;
            }
            p && (Uh(
              t,
              h
            ), on(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return xn(h) ? t.lanes = 32 : t.lanes = 536870912, null;
          ia(t);
        }
        return h = o.children, o = o.fallback, f ? (ka(t), f = t.mode, h = Yf(
          {
            mode: "hidden",
            children: h
          },
          f
        ), o = _u(
          o,
          f,
          a,
          null
        ), h.return = t, o.return = t, h.sibling = o, t.child = h, f = t.child, f.memoizedState = qf(a), f.childLanes = Ur(
          e,
          i,
          a
        ), t.memoizedState = Wv, o) : (ua(t), Hr(
          t,
          h
        ));
      }
      var U = e.memoizedState;
      if (U !== null && (h = U.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (ua(t), t.flags &= -257, t = xr(
            e,
            t,
            a
          )) : t.memoizedState !== null ? (ka(t), t.child = e.child, t.flags |= 128, t = null) : (ka(t), f = o.fallback, h = t.mode, o = Yf(
            {
              mode: "visible",
              children: o.children
            },
            h
          ), f = _u(
            f,
            h,
            a,
            null
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, Kd(
            t,
            e.child,
            null,
            a
          ), o = t.child, o.memoizedState = qf(a), o.childLanes = Ur(
            e,
            i,
            a
          ), t.memoizedState = Wv, t = f);
        else if (ua(t), Ve && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), xn(h)) {
          if (i = h.nextSibling && h.nextSibling.dataset, i) {
            p = i.dgst;
            var B = i.msg;
            v = i.stck;
            var O = i.cstck;
          }
          h = B, i = p, o = v, p = f = O, f = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = i, i = p === void 0 ? null : p, o = {
            value: f,
            source: null,
            stack: i
          }, typeof i == "string" && Uv.set(
            f,
            o
          ), Xc(o), t = xr(
            e,
            t,
            a
          );
        } else if (El || ul(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, El || i) {
          if (i = ut, i !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : zl(
            o
          ), o = (o & (i.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== U.retryLane))
            throw U.retryLane = o, Vl(
              e,
              o
            ), Tt(
              i,
              e,
              o
            ), N1;
          h.data === Dc || Zr(), t = xr(
            e,
            t,
            a
          );
        } else
          h.data === Dc ? (t.flags |= 192, t.child = e.child, t = null) : (e = U.treeContext, Ct = fl(
            h.nextSibling
          ), ha = t, Ve = !0, Ts = null, Tc = !1, jn = null, vi = !1, e !== null && (Xa(), Vn[Xn++] = bc, Vn[Xn++] = Sc, Vn[Xn++] = Ss, bc = e.id, Sc = e.overflow, Ss = t), t = Hr(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? (ka(t), f = o.fallback, h = t.mode, p = e.child, v = p.sibling, o = cn(
        p,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = p.subtreeFlags & 65011712, v !== null ? f = cn(
        v,
        f
      ) : (f = _u(
        f,
        h,
        a,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, h = e.child.memoizedState, h === null ? h = qf(a) : (p = h.cachePool, p !== null ? (v = dl._currentValue, p = p.parent !== v ? { parent: v, pool: v } : p) : p = M0(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: p
      }), f.memoizedState = h, f.childLanes = Ur(
        e,
        i,
        a
      ), t.memoizedState = Wv, o) : (ua(t), a = e.child, e = a.sibling, a = cn(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Hr(e, t) {
      return t = Yf(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Yf(e, t) {
      return e = ge(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: Hv,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function xr(e, t, a) {
      return Kd(t, e.child, null, a), e = Hr(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Cr(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Bh(
        e.return,
        t,
        a
      );
    }
    function ly(e, t) {
      var a = se(e);
      return e = !a && typeof Ut(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Nr(e, t, a, i, o) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = o);
    }
    function ay(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !G1[o])
        if (G1[o] = !0, typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            o
          );
      f === void 0 || $v[f] || (f !== "collapsed" && f !== "hidden" ? ($v[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && ($v[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (se(i)) {
          for (var d = 0; d < i.length; d++)
            if (!ly(i[d], d)) break e;
        } else if (d = Ut(i), typeof d == "function") {
          if (d = d.call(i))
            for (var h = d.next(), p = 0; !h.done; h = d.next()) {
              if (!ly(h.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (xt(e, t, i, a), i = yl.current, (i & qm) !== 0)
        i = i & kd | qm, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Cr(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              Cr(e, a, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= kd;
      }
      switch (de(yl, i, t), o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && ou(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Nr(
            t,
            !1,
            o,
            a,
            f
          );
          break;
        case "backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && ou(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Nr(
            t,
            !0,
            a,
            null,
            f
          );
          break;
        case "together":
          Nr(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Sn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), qa = -1, Vo |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (ul(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = cn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = cn(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Br(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Xu(e)));
    }
    function sv(e, t, a) {
      switch (t.tag) {
        case 3:
          Rl(
            t,
            t.stateNode.containerInfo
          ), Vu(
            t,
            dl,
            e.memoizedState.cache
          ), Xi();
          break;
        case 27:
        case 5:
          j(t);
          break;
        case 4:
          Rl(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          Vu(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (ua(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? N0(
              e,
              t,
              a
            ) : (ua(t), e = Sn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ua(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (ul(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return ay(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), de(
            yl,
            yl.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, zr(e, t, a);
        case 24:
          Vu(
            t,
            dl,
            e.memoizedState.cache
          );
      }
      return Sn(e, t, a);
    }
    function qr(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = tr(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          El = !0;
        else {
          if (!Br(e, a) && (t.flags & 128) === 0)
            return El = !1, sv(
              e,
              t,
              a
            );
          El = (e.flags & 131072) !== 0;
        }
      else
        El = !1, (i = Ve) && (Xa(), i = (t.flags & 1048576) !== 0), i && (i = t.index, Xa(), z0(t, vp, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = _o(t.elementType), t.type = e, typeof e == "function")
            Dh(e) ? (i = Fu(
              e,
              i
            ), t.tag = 1, t.type = e = _i(e), t = ey(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, Mr(t, e), t.type = e = _i(e), t = Or(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === pu) {
                t.tag = 11, t.type = e = zh(e), t = Rr(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === is) {
                t.tag = 14, t = bn(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === sa && (t = " Did you wrap a component in React.lazy() more than once?"), e = qe(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Or(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = Fu(
            i,
            t.pendingProps
          ), ey(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (Rl(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, Zu(e, t), Zc(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, Vu(t, dl, i), i !== f.cache && qh(
              t,
              [dl],
              a,
              !0
            ), dn(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = ty(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = aa(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), Xc(o), t = ty(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (Ct = fl(e.firstChild), ha = t, Ve = !0, Ts = null, Tc = !1, jn = null, vi = !0, e = T1(
                  t,
                  null,
                  i,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if (Xi(), i === o) {
                t = Sn(
                  e,
                  t,
                  a
                );
                break e;
              }
              xt(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return Bf(e, t), e === null ? (e = mu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : Ve || (e = t.type, a = t.pendingProps, i = Jt(
            Nn.current
          ), i = De(
            i
          ).createElement(e), i[Tl] = t, i[Fl] = a, At(i, e, a), Kt(i), t.stateNode = i) : t.memoizedState = mu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return j(t), e === null && Ve && (i = Jt(Nn.current), o = A(), i = t.stateNode = Qy(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), Tc || (o = Fe(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (ja(t, 0).serverProps = o)), ha = t, vi = !0, o = Ct, Hn(t.type) ? (bg = o, Ct = fl(
            i.firstChild
          )) : Ct = o), xt(
            e,
            t,
            t.pendingProps.children,
            a
          ), Bf(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && Ve && (f = A(), i = Js(
            t.type,
            f.ancestorInfo
          ), o = Ct, (d = !o) || (d = ni(
            o,
            t.type,
            t.pendingProps,
            vi
          ), d !== null ? (t.stateNode = d, Tc || (f = Fe(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (ja(t, 0).serverProps = f)), ha = t, Ct = fl(
            d.firstChild
          ), vi = !1, f = !0) : f = !1, d = !f), d && (i && Uh(t, o), on(t))), j(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Un(o, f) ? i = null : d !== null && Un(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = Ju(
            e,
            t,
            Aa,
            null,
            null,
            a
          ), Wm._currentValue = o), Bf(e, t), xt(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && Ve && (e = t.pendingProps, a = A(), i = a.ancestorInfo.current, e = i != null ? uf(
            e,
            i.tag,
            a.ancestorInfo.implicitRootScope
          ) : !0, a = Ct, (i = !a) || (i = ol(
            a,
            t.pendingProps,
            vi
          ), i !== null ? (t.stateNode = i, ha = t, Ct = null, i = !0) : i = !1, i = !i), i && (e && Uh(t, a), on(t))), null;
        case 13:
          return N0(e, t, a);
        case 4:
          return Rl(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Kd(
            t,
            null,
            i,
            a
          ) : xt(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return Rr(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return xt(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return xt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, xt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || V1 || (V1 = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Vu(t, i, f), xt(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), ju(t), o = nt(o), ll(t), i = Zv(
            i,
            o,
            void 0
          ), ga(), t.flags |= 1, xt(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return bn(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return Nf(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return ay(
            e,
            t,
            a
          );
        case 31:
          return i = t.pendingProps, a = t.mode, i = {
            mode: i.mode,
            children: i.children
          }, e === null ? (e = Yf(
            i,
            a
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = cn(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return zr(e, t, a);
        case 24:
          return ju(t), i = nt(dl), e === null ? (o = Gh(), o === null && (o = ut, f = pf(), o.pooledCache = f, ji(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, Xl(t), Vu(t, dl, o)) : ((e.lanes & a) !== 0 && (Zu(e, t), Zc(t, null, null, a), dn()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Vu(t, dl, i)) : (i = f.cache, Vu(t, dl, i), i !== o.cache && qh(
            t,
            [dl],
            a,
            !0
          ))), xt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Ll(e) {
      e.flags |= 4;
    }
    function _f(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & Jn) !== Ys)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !Ff(t)) {
        if (t = wn.current, t !== null && ((Me & 4194048) === Me ? bi !== null : (Me & 62914560) !== Me && (Me & 536870912) === 0 || t !== bi))
          throw xm = Yv, $g;
        e.flags |= 8192;
      }
    }
    function Gf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Wo() : 536870912, e.lanes |= t, Hs |= t);
    }
    function Iu(e, t) {
      if (!Ve)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function Ke(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Nl) !== st) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Nl) !== st) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function B0(e, t, a) {
      var i = t.pendingProps;
      switch (ar(t), t.tag) {
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
          return Ke(t), null;
        case 1:
          return Ke(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), tu(dl, t), qt(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Vi(t) ? (Nh(), Ll(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ch())), Ke(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (Ll(t), a !== null ? (Ke(t), _f(
            t,
            a
          )) : (Ke(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Ll(t), Ke(t), _f(
            t,
            a
          )) : (Ke(t), t.flags &= -16777217) : (e.memoizedProps !== i && Ll(t), Ke(t), t.flags &= -16777217), null;
        case 27:
          Z(t), a = Jt(Nn.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && Ll(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Ke(t), null;
            }
            e = A(), Vi(t) ? Hh(t) : (e = Qy(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Ll(t));
          }
          return Ke(t), null;
        case 5:
          if (Z(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Ll(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Ke(t), null;
            }
            if (o = A(), Vi(t))
              Hh(t);
            else {
              switch (e = Jt(Nn.current), Js(a, o.ancestorInfo), o = o.context, e = De(e), o) {
                case uh:
                  e = e.createElementNS(No, a);
                  break;
                case Lp:
                  e = e.createElementNS(
                    vs,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        No,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        vs,
                        a
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(a, {
                        is: i.is
                      }) : e.createElement(a), a.indexOf("-") === -1 && (a !== a.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        a
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || gu.call(
                        nb,
                        a
                      ) || (nb[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[Tl] = t, e[Fl] = i;
              e: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6)
                  e.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === t) break e;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t)
                    break e;
                  o = o.return;
                }
                o.sibling.return = o.return, o = o.sibling;
              }
              t.stateNode = e;
              e: switch (At(e, a, i), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && Ll(t);
            }
          }
          return Ke(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Ll(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Jt(Nn.current), a = A(), Vi(t)) {
              e = t.stateNode, a = t.memoizedProps, o = !Tc, i = null;
              var f = ha;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = cd(
                      e,
                      a,
                      i
                    ), o !== null && (ja(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = cd(
                      e,
                      a,
                      i
                    ), o !== null && (ja(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Tl] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Cy(e.nodeValue, a)), e || on(t);
            } else
              o = a.ancestorInfo.current, o != null && uf(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = De(e).createTextNode(
                i
              ), e[Tl] = t, t.stateNode = e;
          }
          return Ke(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = Vi(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[Tl] = t, Ke(t), (t.mode & Nl) !== st && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Nh(), Xi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, Ke(t), (t.mode & Nl) !== st && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Ch(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (ia(t), t) : (ia(t), null);
          }
          return ia(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Nl) !== st && sn(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Gf(t, t.updateQueue), Ke(t), (t.mode & Nl) !== st && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return qt(t), e === null && Hy(
            t.stateNode.containerInfo
          ), Ke(t), null;
        case 10:
          return tu(t.type, t), Ke(t), null;
        case 19:
          if (Xe(yl, t), o = t.memoizedState, o === null) return Ke(t), null;
          if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (i) Iu(o, !1);
            else {
              if (Nt !== zc || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = ou(e), f !== null) {
                    for (t.flags |= 128, Iu(o, !1), e = f.updateQueue, t.updateQueue = e, Gf(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Oh(a, e), a = a.sibling;
                    return de(
                      yl,
                      yl.current & kd | qm,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && Bn() > Cp && (t.flags |= 128, i = !0, Iu(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = ou(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Gf(t, e), Iu(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !Ve)
                  return Ke(t), null;
              } else
                2 * Bn() - o.renderingStartTime > Cp && a !== 536870912 && (t.flags |= 128, i = !0, Iu(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = Bn(), e.sibling = null, a = yl.current, a = i ? a & kd | qm : a & kd, de(yl, a, t), e) : (Ke(t), null);
        case 22:
        case 23:
          return ia(t), wa(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), a = t.updateQueue, a !== null && Gf(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Xe(Rs, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), tu(dl, t), Ke(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function q0(e, t) {
      switch (ar(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Nl) !== st && sn(t), t) : null;
        case 3:
          return tu(dl, t), qt(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return Z(t), null;
        case 13:
          if (ia(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Xi();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Nl) !== st && sn(t), t) : null;
        case 19:
          return Xe(yl, t), null;
        case 4:
          return qt(t), null;
        case 10:
          return tu(t.type, t), null;
        case 22:
        case 23:
          return ia(t), wa(t), e !== null && Xe(Rs, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Nl) !== st && sn(t), t) : null;
        case 24:
          return tu(dl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function ny(e, t) {
      switch (ar(t), t.tag) {
        case 3:
          tu(dl, t), qt(t);
          break;
        case 26:
        case 27:
        case 5:
          Z(t);
          break;
        case 4:
          qt(t);
          break;
        case 13:
          ia(t);
          break;
        case 19:
          Xe(yl, t);
          break;
        case 10:
          tu(t.type, t);
          break;
        case 22:
        case 23:
          ia(t), wa(t), e !== null && Xe(Rs, t);
          break;
        case 24:
          tu(dl, t);
      }
    }
    function $a(e) {
      return (e.mode & Nl) !== st;
    }
    function uy(e, t) {
      $a(e) ? (Za(), Wi(t, e), Sa()) : Wi(t, e);
    }
    function Yr(e, t, a) {
      $a(e) ? (Za(), Fi(
        a,
        e,
        t
      ), Sa()) : Fi(
        a,
        e,
        t
      );
    }
    function Wi(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && ((e & hl) !== Qn ? k !== null && typeof k.markComponentPassiveEffectMountStarted == "function" && k.markComponentPassiveEffectMountStarted(
              t
            ) : (e & Bl) !== Qn && k !== null && typeof k.markComponentLayoutEffectMountStarted == "function" && k.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & ya) !== Qn && (ah = !0), i = W(
              t,
              mS,
              a
            ), (e & ya) !== Qn && (ah = !1), (e & hl) !== Qn ? k !== null && typeof k.markComponentPassiveEffectMountStopped == "function" && k.markComponentPassiveEffectMountStopped() : (e & Bl) !== Qn && k !== null && typeof k.markComponentLayoutEffectMountStopped == "function" && k.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & Bl) !== 0 ? "useLayoutEffect" : (a.tag & ya) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, W(
                t,
                function(h, p) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    p
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        ie(t, t.return, h);
      }
    }
    function Fi(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & hl) !== Qn ? k !== null && typeof k.markComponentPassiveEffectUnmountStarted == "function" && k.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & Bl) !== Qn && k !== null && typeof k.markComponentLayoutEffectUnmountStarted == "function" && k.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & ya) !== Qn && (ah = !0), o = t, W(
                o,
                pS,
                o,
                a,
                h
              ), (e & ya) !== Qn && (ah = !1), (e & hl) !== Qn ? k !== null && typeof k.markComponentPassiveEffectUnmountStopped == "function" && k.markComponentPassiveEffectUnmountStopped() : (e & Bl) !== Qn && k !== null && typeof k.markComponentLayoutEffectUnmountStopped == "function" && k.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (p) {
        ie(t, t.return, p);
      }
    }
    function iy(e, t) {
      $a(e) ? (Za(), Wi(t, e), Sa()) : Wi(t, e);
    }
    function Vf(e, t, a) {
      $a(e) ? (Za(), Fi(
        a,
        e,
        t
      ), Sa()) : Fi(
        a,
        e,
        t
      );
    }
    function cy(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || Wd || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          te(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          te(e) || "instance"
        ));
        try {
          W(
            e,
            U0,
            t,
            a
          );
        } catch (i) {
          ie(e, e.return, i);
        }
      }
    }
    function Y0(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function rv(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || Wd || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        te(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        te(e) || "instance"
      ));
      try {
        var o = Fu(
          e.type,
          a,
          e.elementType === e.type
        ), f = W(
          e,
          Y0,
          t,
          o,
          i
        );
        a = X1, f !== void 0 || a.has(e.type) || (a.add(e.type), W(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            te(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        ie(e, e.return, d);
      }
    }
    function _r(e, t, a) {
      a.props = Fu(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, $a(e) ? (Za(), W(
        e,
        h1,
        e,
        t,
        a
      ), Sa()) : W(
        e,
        h1,
        e,
        t,
        a
      );
    }
    function _0(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if ($a(e))
            try {
              Za(), e.refCleanup = t(a);
            } finally {
              Sa();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            te(e)
          ), t.current = a;
      }
    }
    function ao(e, t) {
      try {
        W(e, _0, e);
      } catch (a) {
        ie(e, t, a);
      }
    }
    function Ma(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if ($a(e))
              try {
                Za(), W(e, i);
              } finally {
                Sa(e);
              }
            else W(e, i);
          } catch (o) {
            ie(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if ($a(e))
              try {
                Za(), W(e, a, null);
              } finally {
                Sa(e);
              }
            else W(e, a, null);
          } catch (o) {
            ie(e, t, o);
          }
        else a.current = null;
    }
    function oy(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", Sp && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(
        e.memoizedProps.id,
        t,
        i,
        a
      );
    }
    function G0(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", Sp && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function V0(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        W(
          e,
          hu,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        ie(e, e.return, o);
      }
    }
    function fy(e, t, a) {
      try {
        W(
          e,
          Rt,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        ie(e, e.return, i);
      }
    }
    function sy(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hn(e.type) || e.tag === 4;
    }
    function Ii(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || sy(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Hn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Xf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = du));
      else if (i !== 4 && (i === 27 && Hn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (Xf(e, t, a), e = e.sibling; e !== null; )
          Xf(e, t, a), e = e.sibling;
    }
    function Pi(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && Hn(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (Pi(e, t, a), e = e.sibling; e !== null; )
          Pi(e, t, a), e = e.sibling;
    }
    function X0(e) {
      for (var t, a = e.return; a !== null; ) {
        if (sy(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = Ii(e), Pi(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (yu(a), t.flags &= -33), t = Ii(e), Pi(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = Ii(e), Xf(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function ry(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        W(
          e,
          fa,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        ie(e, e.return, i);
      }
    }
    function Gr(e, t) {
      if (e = e.containerInfo, pg = kp, e = S0(e), Ah(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, p = -1, v = 0, U = 0, B = e, O = null;
              t: for (; ; ) {
                for (var Y; B !== a || o !== 0 && B.nodeType !== 3 || (h = d + o), B !== f || i !== 0 && B.nodeType !== 3 || (p = d + i), B.nodeType === 3 && (d += B.nodeValue.length), (Y = B.firstChild) !== null; )
                  O = B, B = Y;
                for (; ; ) {
                  if (B === e) break t;
                  if (O === a && ++v === o && (h = d), O === f && ++U === i && (p = d), (Y = B.nextSibling) !== null) break;
                  B = O, O = B.parentNode;
                }
                B = Y;
              }
              a = h === -1 || p === -1 ? null : { start: h, end: p };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (vg = {
        focusedElem: e,
        selectionRange: a
      }, kp = !1, Al = t; Al !== null; )
        if (t = Al, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, Al = e;
        else
          for (; Al !== null; ) {
            switch (e = t = Al, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && rv(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    mo(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        mo(e);
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
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Al = e;
              break;
            }
            Al = t.return;
          }
    }
    function dy(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Tn(e, a), i & 4 && uy(a, Bl | Zn);
          break;
        case 1:
          if (Tn(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || Wd || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                te(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                te(a) || "instance"
              )), $a(a) ? (Za(), W(
                a,
                Lv,
                a,
                e
              ), Sa()) : W(
                a,
                Lv,
                a,
                e
              );
            else {
              var o = Fu(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || Wd || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                te(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                te(a) || "instance"
              )), $a(a) ? (Za(), W(
                a,
                s1,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Sa()) : W(
                a,
                s1,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && cy(a), i & 512 && ao(a, a.return);
          break;
        case 3:
          if (t = Qa(), Tn(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
            if (o = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  o = a.child.stateNode;
                  break;
                case 1:
                  o = a.child.stateNode;
              }
            try {
              W(
                a,
                U0,
                i,
                o
              );
            } catch (d) {
              ie(a, a.return, d);
            }
          }
          e.effectDuration += Qu(t);
          break;
        case 27:
          t === null && i & 4 && ry(a);
        case 26:
        case 5:
          Tn(e, a), t === null && i & 4 && V0(a), i & 512 && ao(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = Qa(), Tn(e, a), e = a.stateNode, e.effectDuration += Qi(i);
            try {
              W(
                a,
                oy,
                a,
                t,
                bp,
                e.effectDuration
              );
            } catch (d) {
              ie(a, a.return, d);
            }
          } else Tn(e, a);
          break;
        case 13:
          Tn(e, a), i & 4 && no(e, a), i & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = kf.bind(
            null,
            a
          ), po(e, a))));
          break;
        case 22:
          if (i = a.memoizedState !== null || Rc, !i) {
            t = t !== null && t.memoizedState !== null || Qt, o = Rc;
            var f = Qt;
            Rc = i, (Qt = t) && !f ? En(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : Tn(e, a), Rc = o, Qt = f;
          }
          break;
        case 30:
          break;
        default:
          Tn(e, a);
      }
    }
    function hy(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, hy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Cc(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function fu(e, t, a) {
      for (a = a.child; a !== null; )
        ec(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function ec(e, t, a) {
      if (sl && typeof sl.onCommitFiberUnmount == "function")
        try {
          sl.onCommitFiberUnmount(ri, a);
        } catch (f) {
          Wl || (Wl = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (a.tag) {
        case 26:
          Qt || Ma(a, t), fu(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          Qt || Ma(a, t);
          var i = tl, o = Ya;
          Hn(a.type) && (tl = a.stateNode, Ya = !1), fu(
            e,
            t,
            a
          ), W(
            a,
            go,
            a.stateNode
          ), tl = i, Ya = o;
          break;
        case 5:
          Qt || Ma(a, t);
        case 6:
          if (i = tl, o = Ya, tl = null, fu(
            e,
            t,
            a
          ), tl = i, Ya = o, tl !== null)
            if (Ya)
              try {
                W(
                  a,
                  ho,
                  tl,
                  a.stateNode
                );
              } catch (f) {
                ie(
                  a,
                  t,
                  f
                );
              }
            else
              try {
                W(
                  a,
                  xa,
                  tl,
                  a.stateNode
                );
              } catch (f) {
                ie(
                  a,
                  t,
                  f
                );
              }
          break;
        case 18:
          tl !== null && (Ya ? (e = tl, yo(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), hc(e)) : yo(tl, a.stateNode));
          break;
        case 4:
          i = tl, o = Ya, tl = a.stateNode.containerInfo, Ya = !0, fu(
            e,
            t,
            a
          ), tl = i, Ya = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Qt || Fi(
            ya,
            a,
            t
          ), Qt || Yr(
            a,
            t,
            Bl
          ), fu(
            e,
            t,
            a
          );
          break;
        case 1:
          Qt || (Ma(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && _r(
            a,
            t,
            i
          )), fu(
            e,
            t,
            a
          );
          break;
        case 21:
          fu(
            e,
            t,
            a
          );
          break;
        case 22:
          Qt = (i = Qt) || a.memoizedState !== null, fu(
            e,
            t,
            a
          ), Qt = i;
          break;
        default:
          fu(
            e,
            t,
            a
          );
      }
    }
    function no(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          W(
            t,
            oa,
            e
          );
        } catch (a) {
          ie(t, t.return, a);
        }
    }
    function Vr(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new j1()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new j1()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function tc(e, t) {
      var a = Vr(e);
      t.forEach(function(i) {
        var o = li.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), Dt)
            if (Fd !== null && Id !== null)
              so(Id, Fd);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function gl(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = f;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
                if (Hn(h.type)) {
                  tl = h.stateNode, Ya = !1;
                  break e;
                }
                break;
              case 5:
                tl = h.stateNode, Ya = !1;
                break e;
              case 3:
              case 4:
                tl = h.stateNode.containerInfo, Ya = !0;
                break e;
            }
            h = h.return;
          }
          if (tl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          ec(o, f, d), tl = null, Ya = !1, o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          yy(t, e), t = t.sibling;
    }
    function yy(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          gl(t, e), wl(e), i & 4 && (Fi(
            ya | Zn,
            e,
            e.return
          ), Wi(ya | Zn, e), Yr(
            e,
            e.return,
            Bl | Zn
          ));
          break;
        case 1:
          gl(t, e), wl(e), i & 512 && (Qt || a === null || Ma(a, a.return)), i & 64 && Rc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var o = Du;
          if (gl(t, e), wl(e), i & 512 && (Qt || a === null || Ma(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[Uo] || o[Tl] || o.namespaceURI === No || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), At(o, i, a), o[Tl] = e, Kt(o), i = o;
                        break e;
                      case "link":
                        var f = Jy(
                          "link",
                          "href",
                          t
                        ).get(i + (a.href || ""));
                        if (f) {
                          for (var d = 0; d < f.length; d++)
                            if (o = f[d], o.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), At(o, i, a), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = Jy(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (d = 0; d < f.length; d++)
                            if (o = f[d], K(
                              a.content,
                              "content"
                            ), o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), At(o, i, a), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    o[Tl] = e, Kt(o), i = o;
                  }
                  e.stateNode = i;
                } else
                  Ky(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = od(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? Ky(
                o,
                e.type,
                e.stateNode
              ) : od(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && fy(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          gl(t, e), wl(e), i & 512 && (Qt || a === null || Ma(a, a.return)), a !== null && i & 4 && fy(
            e,
            e.memoizedProps,
            a.memoizedProps
          );
          break;
        case 5:
          if (gl(t, e), wl(e), i & 512 && (Qt || a === null || Ma(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              W(e, yu, t);
            } catch (U) {
              ie(e, e.return, U);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, fy(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (Fv = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (gl(t, e), wl(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              W(
                e,
                fc,
                t,
                a,
                i
              );
            } catch (U) {
              ie(e, e.return, U);
            }
          }
          break;
        case 3:
          if (o = Qa(), wp = null, f = Du, Du = Wf(t.containerInfo), gl(t, e), Du = f, wl(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              W(
                e,
                jy,
                t.containerInfo
              );
            } catch (U) {
              ie(e, e.return, U);
            }
          Fv && (Fv = !1, lc(e)), t.effectDuration += Qu(o);
          break;
        case 4:
          i = Du, Du = Wf(
            e.stateNode.containerInfo
          ), gl(t, e), wl(e), Du = i;
          break;
        case 12:
          i = Qa(), gl(t, e), wl(e), e.stateNode.effectDuration += Qi(i);
          break;
        case 13:
          gl(t, e), wl(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (ag = Bn()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, tc(e, i)));
          break;
        case 22:
          o = e.memoizedState !== null;
          var h = a !== null && a.memoizedState !== null, p = Rc, v = Qt;
          if (Rc = p || o, Qt = v || h, gl(t, e), Qt = v, Rc = p, wl(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | Hv, o && (a === null || h || Rc || Qt || bl(e)), a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  h = a = t;
                  try {
                    f = h.stateNode, o ? W(h, kl, f) : W(
                      h,
                      Vy,
                      h.stateNode,
                      h.memoizedProps
                    );
                  } catch (U) {
                    ie(h, h.return, U);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  h = t;
                  try {
                    d = h.stateNode, o ? W(h, Gy, d) : W(
                      h,
                      ud,
                      d,
                      h.memoizedProps
                    );
                  } catch (U) {
                    ie(h, h.return, U);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                a === t && (a = null), t = t.return;
              }
              a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, tc(e, a))));
          break;
        case 19:
          gl(t, e), wl(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, tc(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          gl(t, e), wl(e);
      }
    }
    function wl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          W(e, X0, e);
        } catch (a) {
          ie(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function lc(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          lc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Tn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          dy(e, t.alternate, t), t = t.sibling;
    }
    function ca(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Yr(
            e,
            e.return,
            Bl
          ), bl(e);
          break;
        case 1:
          Ma(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && _r(
            e,
            e.return,
            t
          ), bl(e);
          break;
        case 27:
          W(
            e,
            go,
            e.stateNode
          );
        case 26:
        case 5:
          Ma(e, e.return), bl(e);
          break;
        case 22:
          e.memoizedState === null && bl(e);
          break;
        case 30:
          bl(e);
          break;
        default:
          bl(e);
      }
    }
    function bl(e) {
      for (e = e.child; e !== null; )
        ca(e), e = e.sibling;
    }
    function su(e, t, a, i) {
      var o = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          En(
            e,
            a,
            i
          ), uy(a, Bl);
          break;
        case 1:
          if (En(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && W(
            a,
            Lv,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              W(
                a,
                Lc,
                t,
                e
              );
            } catch (f) {
              ie(a, a.return, f);
            }
          }
          i && o & 64 && cy(a), ao(a, a.return);
          break;
        case 27:
          ry(a);
        case 26:
        case 5:
          En(
            e,
            a,
            i
          ), i && t === null && o & 4 && V0(a), ao(a, a.return);
          break;
        case 12:
          if (i && o & 4) {
            o = Qa(), En(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += Qi(o);
            try {
              W(
                a,
                oy,
                a,
                t,
                bp,
                i.effectDuration
              );
            } catch (f) {
              ie(a, a.return, f);
            }
          } else
            En(
              e,
              a,
              i
            );
          break;
        case 13:
          En(
            e,
            a,
            i
          ), i && o & 4 && no(e, a);
          break;
        case 22:
          a.memoizedState === null && En(
            e,
            a,
            i
          ), ao(a, a.return);
          break;
        case 30:
          break;
        default:
          En(
            e,
            a,
            i
          );
      }
    }
    function En(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        su(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function An(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && ji(e), a != null && fn(a));
    }
    function Wa(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (ji(t), e != null && fn(e));
    }
    function ke(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          jf(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function jf(e, t, a, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ke(
            e,
            t,
            a,
            i
          ), o & 2048 && iy(t, hl | Zn);
          break;
        case 1:
          ke(
            e,
            t,
            a,
            i
          );
          break;
        case 3:
          var f = Qa();
          ke(
            e,
            t,
            a,
            i
          ), o & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (ji(t), a != null && fn(a))), e.passiveEffectDuration += Qu(f);
          break;
        case 12:
          if (o & 2048) {
            o = Qa(), ke(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += Qi(o);
            try {
              W(
                t,
                G0,
                t,
                t.alternate,
                bp,
                e.passiveEffectDuration
              );
            } catch (h) {
              ie(t, t.return, h);
            }
          } else
            ke(
              e,
              t,
              a,
              i
            );
          break;
        case 13:
          ke(
            e,
            t,
            a,
            i
          );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode;
          var d = t.alternate;
          t.memoizedState !== null ? f._visibility & bs ? ke(
            e,
            t,
            a,
            i
          ) : uo(
            e,
            t
          ) : f._visibility & bs ? ke(
            e,
            t,
            a,
            i
          ) : (f._visibility |= bs, Pu(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && An(d, t);
          break;
        case 24:
          ke(
            e,
            t,
            a,
            i
          ), o & 2048 && Wa(t.alternate, t);
          break;
        default:
          ke(
            e,
            t,
            a,
            i
          );
      }
    }
    function Pu(e, t, a, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        Xr(
          e,
          t,
          a,
          i,
          o
        ), t = t.sibling;
    }
    function Xr(e, t, a, i, o) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Pu(
            e,
            t,
            a,
            i,
            o
          ), iy(t, hl);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & bs ? Pu(
            e,
            t,
            a,
            i,
            o
          ) : uo(
            e,
            t
          ) : (d._visibility |= bs, Pu(
            e,
            t,
            a,
            i,
            o
          )), o && f & 2048 && An(
            t.alternate,
            t
          );
          break;
        case 24:
          Pu(
            e,
            t,
            a,
            i,
            o
          ), o && f & 2048 && Wa(t.alternate, t);
          break;
        default:
          Pu(
            e,
            t,
            a,
            i,
            o
          );
      }
    }
    function uo(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              uo(
                a,
                i
              ), o & 2048 && An(
                i.alternate,
                i
              );
              break;
            case 24:
              uo(
                a,
                i
              ), o & 2048 && Wa(
                i.alternate,
                i
              );
              break;
            default:
              uo(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function ac(e) {
      if (e.subtreeFlags & Ym)
        for (e = e.child; e !== null; )
          ei(e), e = e.sibling;
    }
    function ei(e) {
      switch (e.tag) {
        case 26:
          ac(e), e.flags & Ym && e.memoizedState !== null && F0(
            Du,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          ac(e);
          break;
        case 3:
        case 4:
          var t = Du;
          Du = Wf(
            e.stateNode.containerInfo
          ), ac(e), Du = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Ym, Ym = 16777216, ac(e), Ym = t) : ac(e));
          break;
        default:
          ac(e);
      }
    }
    function Qf(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function io(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Al = i, py(
              i,
              e
            );
          }
        Qf(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          my(e), e = e.sibling;
    }
    function my(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          io(e), e.flags & 2048 && Vf(
            e,
            e.return,
            hl | Zn
          );
          break;
        case 3:
          var t = Qa();
          io(e), e.stateNode.passiveEffectDuration += Qu(t);
          break;
        case 12:
          t = Qa(), io(e), e.stateNode.passiveEffectDuration += Qi(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & bs && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Zf(e)) : io(e);
          break;
        default:
          io(e);
      }
    }
    function Zf(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Al = i, py(
              i,
              e
            );
          }
        Qf(e);
      }
      for (e = e.child; e !== null; )
        Lf(e), e = e.sibling;
    }
    function Lf(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Vf(
            e,
            e.return,
            hl
          ), Zf(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & bs && (t._visibility &= -3, Zf(e));
          break;
        default:
          Zf(e);
      }
    }
    function py(e, t) {
      for (; Al !== null; ) {
        var a = Al, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Vf(
              i,
              t,
              hl
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && ji(i));
            break;
          case 24:
            fn(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, Al = i;
        else
          e: for (a = e; Al !== null; ) {
            i = Al;
            var o = i.sibling, f = i.return;
            if (hy(i), i === a) {
              Al = null;
              break e;
            }
            if (o !== null) {
              o.return = f, Al = o;
              break e;
            }
            Al = f;
          }
      }
    }
    function vy() {
      gS.forEach(function(e) {
        return e();
      });
    }
    function gy() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || x.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function Jl(e) {
      if ((we & ma) !== en && Me !== 0)
        return Me & -Me;
      var t = x.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = As, e !== 0 ? e : Oy()) : u0();
    }
    function j0() {
      ln === 0 && (ln = (Me & 536870912) === 0 || Ve ? oh() : 536870912);
      var e = wn.current;
      return e !== null && (e.flags |= 32), ln;
    }
    function Tt(e, t, a) {
      if (ah && console.error("useInsertionEffect must not schedule updates."), og && (Np = !0), (e === ut && ($e === Ms || $e === Us) || e.cancelPendingCommit !== null) && (uc(e, 0), ru(
        e,
        Me,
        ln,
        !1
      )), Hc(e, a), (we & ma) !== 0 && e === ut) {
        if (Il)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = Oe && te(Oe) || "Unknown", F1.has(e) || (F1.add(e), t = te(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              W1 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), W1 = !0);
          }
      } else
        Dt && kn(e, t, a), w0(t), e === ut && ((we & ma) === en && (Xo |= a), Nt === Os && ru(
          e,
          Me,
          ln,
          !1
        )), Ua(e);
    }
    function Xt(e, t, a) {
      if ((we & (ma | Ou)) !== en)
        throw Error("Should not already be working.");
      var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || $o(e, t), o = i ? Sy(e, t) : Lr(e, t, !0), f = i;
      do {
        if (o === zc) {
          th && !i && ru(e, t, 0, !1);
          break;
        } else {
          if (a = e.current.alternate, f && !Q0(a)) {
            o = Lr(e, t, !1), f = !1;
            continue;
          }
          if (o === Pd) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                o = e;
                var h = d;
                d = Qm;
                var p = o.current.memoizedState.isDehydrated;
                if (p && (uc(
                  o,
                  h
                ).flags |= 256), h = Lr(
                  o,
                  h,
                  !1
                ), h !== Pd) {
                  if (tg && !p) {
                    o.errorRecoveryDisabledLanes |= f, Xo |= f, o = Os;
                    break e;
                  }
                  o = pa, pa = d, o !== null && (pa === null ? pa = o : pa.push.apply(
                    pa,
                    o
                  ));
                }
                o = h;
              }
              if (f = !1, o !== Pd) continue;
            }
          }
          if (o === Gm) {
            uc(e, 0), ru(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case zc:
              case Gm:
                throw Error("Root did not complete. This is a bug in React.");
              case Os:
                if ((t & 4194048) !== t) break;
              case Hp:
                ru(
                  i,
                  t,
                  ln,
                  !Go
                );
                break e;
              case Pd:
                pa = null;
                break;
              case Iv:
              case Q1:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (x.actQueue !== null)
              $r(
                i,
                a,
                t,
                pa,
                Zm,
                xp,
                ln,
                Xo,
                Hs
              );
            else {
              if ((t & 62914560) === t && (f = ag + L1 - Bn(), 10 < f)) {
                if (ru(
                  i,
                  t,
                  ln,
                  !Go
                ), ea(i, 0, !0) !== 0) break e;
                i.timeoutHandle = ub(
                  Ft.bind(
                    null,
                    i,
                    a,
                    pa,
                    Zm,
                    xp,
                    t,
                    ln,
                    Xo,
                    Hs,
                    Go,
                    o,
                    ES,
                    Jg,
                    0
                  ),
                  f
                );
                break e;
              }
              Ft(
                i,
                a,
                pa,
                Zm,
                xp,
                t,
                ln,
                Xo,
                Hs,
                Go,
                o,
                SS,
                Jg,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      Ua(e);
    }
    function Ft(e, t, a, i, o, f, d, h, p, v, U, B, O, Y) {
      if (e.timeoutHandle = qs, B = t.subtreeFlags, (B & 8192 || (B & 16785408) === 16785408) && ($m = { stylesheets: null, count: 0, unsuspend: W0 }, ei(t), B = I0(), B !== null)) {
        e.cancelPendingCommit = B(
          $r.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            p,
            U,
            TS,
            O,
            Y
          )
        ), ru(
          e,
          f,
          d,
          !v
        );
        return;
      }
      $r(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        p
      );
    }
    function Q0(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!da(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function ru(e, t, a, i) {
      t &= ~lg, t &= ~Xo, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Sl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && n0(e, a, t);
    }
    function nc() {
      return (we & (ma | Ou)) === en ? (ic(0), !1) : !0;
    }
    function jr() {
      if (Oe !== null) {
        if ($e === _a)
          var e = Oe.return;
        else
          e = Oe, nr(), Ja(e), Jd = null, Bm = 0, e = Oe;
        for (; e !== null; )
          ny(e.alternate, e), e = e.return;
        Oe = null;
      }
    }
    function uc(e, t) {
      var a = e.timeoutHandle;
      a !== qs && (e.timeoutHandle = qs, qS(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), jr(), ut = e, Oe = a = cn(e.current, null), Me = t, $e = _a, tn = null, Go = !1, th = $o(e, t), tg = !1, Nt = zc, Hs = ln = lg = Xo = Vo = 0, pa = Qm = null, xp = !1, (t & 8) !== 0 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - Sl(i), f = 1 << o;
          t |= e[o], i &= ~f;
        }
      return Si = t, rf(), t = Lg(), 1e3 < t - Zg && (x.recentlyCreatedOwnerStacks = 0, Zg = t), Ru.discardPendingWarnings(), a;
    }
    function wf(e, t) {
      re = null, x.H = Mp, x.getCurrentStack = null, Il = !1, ra = null, t === Hm || t === Ap ? (t = jh(), $e = Xm) : t === $g ? (t = jh(), $e = Z1) : $e = t === N1 ? eg : t !== null && typeof t == "object" && typeof t.then == "function" ? eh : Vm, tn = t;
      var a = Oe;
      if (a === null)
        Nt = Gm, lo(
          e,
          aa(t, e.current)
        );
      else
        switch (a.mode & Nl && lu(a), ga(), $e) {
          case Vm:
            k !== null && typeof k.markComponentErrored == "function" && k.markComponentErrored(
              a,
              t,
              Me
            );
            break;
          case Ms:
          case Us:
          case Xm:
          case eh:
          case jm:
            k !== null && typeof k.markComponentSuspended == "function" && k.markComponentSuspended(
              a,
              t,
              Me
            );
        }
    }
    function Qr() {
      var e = x.H;
      return x.H = Mp, e === null ? Mp : e;
    }
    function by() {
      var e = x.A;
      return x.A = vS, e;
    }
    function Zr() {
      Nt = Os, Go || (Me & 4194048) !== Me && wn.current !== null || (th = !0), (Vo & 134217727) === 0 && (Xo & 134217727) === 0 || ut === null || ru(
        ut,
        Me,
        ln,
        !1
      );
    }
    function Lr(e, t, a) {
      var i = we;
      we |= ma;
      var o = Qr(), f = by();
      if (ut !== e || Me !== t) {
        if (Dt) {
          var d = e.memoizedUpdaters;
          0 < d.size && (so(e, Me), d.clear()), Gl(e, t);
        }
        Zm = null, uc(e, t);
      }
      Ti(t), t = !1, d = Nt;
      e: do
        try {
          if ($e !== _a && Oe !== null) {
            var h = Oe, p = tn;
            switch ($e) {
              case eg:
                jr(), d = Hp;
                break e;
              case Xm:
              case Ms:
              case Us:
              case eh:
                wn.current === null && (t = !0);
                var v = $e;
                if ($e = _a, tn = null, ti(e, h, p, v), a && th) {
                  d = zc;
                  break e;
                }
                break;
              default:
                v = $e, $e = _a, tn = null, ti(e, h, p, v);
            }
          }
          wr(), d = Nt;
          break;
        } catch (U) {
          wf(e, U);
        }
      while (!0);
      return t && e.shellSuspendCounter++, nr(), we = i, x.H = o, x.A = f, Gs(), Oe === null && (ut = null, Me = 0, rf()), d;
    }
    function wr() {
      for (; Oe !== null; ) Ey(Oe);
    }
    function Sy(e, t) {
      var a = we;
      we |= ma;
      var i = Qr(), o = by();
      if (ut !== e || Me !== t) {
        if (Dt) {
          var f = e.memoizedUpdaters;
          0 < f.size && (so(e, Me), f.clear()), Gl(e, t);
        }
        Zm = null, Cp = Bn() + w1, uc(e, t);
      } else
        th = $o(
          e,
          t
        );
      Ti(t);
      e: do
        try {
          if ($e !== _a && Oe !== null)
            t: switch (t = Oe, f = tn, $e) {
              case Vm:
                $e = _a, tn = null, ti(
                  e,
                  t,
                  f,
                  Vm
                );
                break;
              case Ms:
              case Us:
                if (Xh(f)) {
                  $e = _a, tn = null, Jr(t);
                  break;
                }
                t = function() {
                  $e !== Ms && $e !== Us || ut !== e || ($e = jm), Ua(e);
                }, f.then(t, t);
                break e;
              case Xm:
                $e = jm;
                break e;
              case Z1:
                $e = Pv;
                break e;
              case jm:
                Xh(f) ? ($e = _a, tn = null, Jr(t)) : ($e = _a, tn = null, ti(
                  e,
                  t,
                  f,
                  jm
                ));
                break;
              case Pv:
                var d = null;
                switch (Oe.tag) {
                  case 26:
                    d = Oe.memoizedState;
                  case 5:
                  case 27:
                    var h = Oe;
                    if (!d || Ff(d)) {
                      $e = _a, tn = null;
                      var p = h.sibling;
                      if (p !== null) Oe = p;
                      else {
                        var v = h.return;
                        v !== null ? (Oe = v, Jf(v)) : Oe = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                $e = _a, tn = null, ti(
                  e,
                  t,
                  f,
                  Pv
                );
                break;
              case eh:
                $e = _a, tn = null, ti(
                  e,
                  t,
                  f,
                  eh
                );
                break;
              case eg:
                jr(), Nt = Hp;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          x.actQueue !== null ? wr() : Ty();
          break;
        } catch (U) {
          wf(e, U);
        }
      while (!0);
      return nr(), x.H = i, x.A = o, we = a, Oe !== null ? (k !== null && typeof k.markRenderYielded == "function" && k.markRenderYielded(), zc) : (Gs(), ut = null, Me = 0, rf(), Nt);
    }
    function Ty() {
      for (; Oe !== null && !up(); )
        Ey(Oe);
    }
    function Ey(e) {
      var t = e.alternate;
      (e.mode & Nl) !== st ? (ur(e), t = W(
        e,
        qr,
        t,
        e,
        Si
      ), lu(e)) : t = W(
        e,
        qr,
        t,
        e,
        Si
      ), e.memoizedProps = e.pendingProps, t === null ? Jf(e) : Oe = t;
    }
    function Jr(e) {
      var t = W(e, Kr, e);
      e.memoizedProps = e.pendingProps, t === null ? Jf(e) : Oe = t;
    }
    function Kr(e) {
      var t = e.alternate, a = (e.mode & Nl) !== st;
      switch (a && ur(e), e.tag) {
        case 15:
        case 0:
          t = Ph(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            Me
          );
          break;
        case 11:
          t = Ph(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            Me
          );
          break;
        case 5:
          Ja(e);
        default:
          ny(t, e), e = Oe = Oh(e, Si), t = qr(t, e, Si);
      }
      return a && lu(e), t;
    }
    function ti(e, t, a, i) {
      nr(), Ja(t), Jd = null, Bm = 0;
      var o = t.return;
      try {
        if (Cf(
          e,
          o,
          t,
          a,
          Me
        )) {
          Nt = Gm, lo(
            e,
            aa(a, e.current)
          ), Oe = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Oe = o, f;
        Nt = Gm, lo(
          e,
          aa(a, e.current)
        ), Oe = null;
        return;
      }
      t.flags & 32768 ? (Ve || i === Vm ? e = !0 : th || (Me & 536870912) !== 0 ? e = !1 : (Go = e = !0, (i === Ms || i === Us || i === Xm || i === eh) && (i = wn.current, i !== null && i.tag === 13 && (i.flags |= 16384))), kr(t, e)) : Jf(t);
    }
    function Jf(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          kr(
            t,
            Go
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, ur(t), a = W(
          t,
          B0,
          a,
          t,
          Si
        ), (t.mode & Nl) !== st && Zi(t), a !== null) {
          Oe = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          Oe = t;
          return;
        }
        Oe = t = e;
      } while (t !== null);
      Nt === zc && (Nt = Q1);
    }
    function kr(e, t) {
      do {
        var a = q0(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, Oe = a;
          return;
        }
        if ((e.mode & Nl) !== st) {
          Zi(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          Oe = e;
          return;
        }
        Oe = e = a;
      } while (e !== null);
      Nt = Hp, Oe = null;
    }
    function $r(e, t, a, i, o, f, d, h, p) {
      e.cancelPendingCommit = null;
      do
        co();
      while (ql !== xs);
      if (Ru.flushLegacyContextWarning(), Ru.flushPendingUnsafeLifecycleWarnings(), (we & (ma | Ou)) !== en)
        throw Error("Should not already be working.");
      if (k !== null && typeof k.markCommitStarted == "function" && k.markCommitStarted(a), t === null) gt();
      else {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= xv, tv(
          e,
          a,
          f,
          d,
          h,
          p
        ), e === ut && (Oe = ut = null, Me = 0), lh = t, Qo = e, Zo = a, ug = f, ig = o, $1 = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Dy(Do, function() {
          return Kf(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), bp = jd(), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = x.T, x.T = null, o = oe.p, oe.p = rl, d = we, we |= Ou;
          try {
            Gr(e, t, a);
          } finally {
            we = d, oe.p = o, x.T = i;
          }
        }
        ql = J1, Rn(), Wr(), Z0();
      }
    }
    function Rn() {
      if (ql === J1) {
        ql = xs;
        var e = Qo, t = lh, a = Zo, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = x.T, x.T = null;
          var o = oe.p;
          oe.p = rl;
          var f = we;
          we |= Ou;
          try {
            Fd = a, Id = e, yy(t, e), Id = Fd = null, a = vg;
            var d = S0(e.containerInfo), h = a.focusedElem, p = a.selectionRange;
            if (d !== h && h && h.ownerDocument && b0(
              h.ownerDocument.documentElement,
              h
            )) {
              if (p !== null && Ah(h)) {
                var v = p.start, U = p.end;
                if (U === void 0 && (U = v), "selectionStart" in h)
                  h.selectionStart = v, h.selectionEnd = Math.min(
                    U,
                    h.value.length
                  );
                else {
                  var B = h.ownerDocument || document, O = B && B.defaultView || window;
                  if (O.getSelection) {
                    var Y = O.getSelection(), F = h.textContent.length, fe = Math.min(
                      p.start,
                      F
                    ), it = p.end === void 0 ? fe : Math.min(p.end, F);
                    !Y.extend && fe > it && (d = it, it = fe, fe = d);
                    var xe = Eh(
                      h,
                      fe
                    ), b = Eh(
                      h,
                      it
                    );
                    if (xe && b && (Y.rangeCount !== 1 || Y.anchorNode !== xe.node || Y.anchorOffset !== xe.offset || Y.focusNode !== b.node || Y.focusOffset !== b.offset)) {
                      var S = B.createRange();
                      S.setStart(xe.node, xe.offset), Y.removeAllRanges(), fe > it ? (Y.addRange(S), Y.extend(b.node, b.offset)) : (S.setEnd(b.node, b.offset), Y.addRange(S));
                    }
                  }
                }
              }
              for (B = [], Y = h; Y = Y.parentNode; )
                Y.nodeType === 1 && B.push({
                  element: Y,
                  left: Y.scrollLeft,
                  top: Y.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < B.length; h++) {
                var T = B[h];
                T.element.scrollLeft = T.left, T.element.scrollTop = T.top;
              }
            }
            kp = !!pg, vg = pg = null;
          } finally {
            we = f, oe.p = o, x.T = i;
          }
        }
        e.current = t, ql = K1;
      }
    }
    function Wr() {
      if (ql === K1) {
        ql = xs;
        var e = Qo, t = lh, a = Zo, i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = x.T, x.T = null;
          var o = oe.p;
          oe.p = rl;
          var f = we;
          we |= Ou;
          try {
            k !== null && typeof k.markLayoutEffectsStarted == "function" && k.markLayoutEffectsStarted(a), Fd = a, Id = e, dy(
              e,
              t.alternate,
              t
            ), Id = Fd = null, k !== null && typeof k.markLayoutEffectsStopped == "function" && k.markLayoutEffectsStopped();
          } finally {
            we = f, oe.p = o, x.T = i;
          }
        }
        ql = k1;
      }
    }
    function Z0() {
      if (ql === AS || ql === k1) {
        ql = xs, bv();
        var e = Qo, t = lh, a = Zo, i = $1, o = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        o ? ql = ng : (ql = xs, lh = Qo = null, zn(e, e.pendingLanes), Cs = 0, wm = null);
        var f = e.pendingLanes;
        if (f === 0 && (jo = null), o || fo(e), o = sh(a), t = t.stateNode, sl && typeof sl.onCommitFiberRoot == "function")
          try {
            var d = (t.current.flags & 128) === 128;
            switch (o) {
              case rl:
                var h = bd;
                break;
              case Pa:
                h = fs;
                break;
              case Su:
                h = Do;
                break;
              case Ad:
                h = ss;
                break;
              default:
                h = Do;
            }
            sl.onCommitFiberRoot(
              ri,
              t,
              h,
              d
            );
          } catch (B) {
            Wl || (Wl = !0, console.error(
              "React instrumentation encountered an error: %s",
              B
            ));
          }
        if (Dt && e.memoizedUpdaters.clear(), vy(), i !== null) {
          d = x.T, h = oe.p, oe.p = rl, x.T = null;
          try {
            var p = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var v = i[t], U = L0(v.stack);
              W(
                v.source,
                p,
                v.value,
                U
              );
            }
          } finally {
            x.T = d, oe.p = h;
          }
        }
        (Zo & 3) !== 0 && co(), Ua(e), f = e.pendingLanes, (a & 4194090) !== 0 && (f & 42) !== 0 ? (Tp = !0, e === cg ? Lm++ : (Lm = 0, cg = e)) : Lm = 0, ic(0), gt();
      }
    }
    function L0(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function zn(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, fn(t)));
    }
    function co(e) {
      return Rn(), Wr(), Z0(), Kf();
    }
    function Kf() {
      if (ql !== ng) return !1;
      var e = Qo, t = ug;
      ug = 0;
      var a = sh(Zo), i = Su > a ? Su : a;
      a = x.T;
      var o = oe.p;
      try {
        oe.p = i, x.T = null, i = ig, ig = null;
        var f = Qo, d = Zo;
        if (ql = xs, lh = Qo = null, Zo = 0, (we & (ma | Ou)) !== en)
          throw Error("Cannot flush passive effects while already rendering.");
        og = !0, Np = !1, k !== null && typeof k.markPassiveEffectsStarted == "function" && k.markPassiveEffectsStarted(d);
        var h = we;
        if (we |= Ou, my(f.current), jf(
          f,
          f.current,
          d,
          i
        ), k !== null && typeof k.markPassiveEffectsStopped == "function" && k.markPassiveEffectsStopped(), fo(f), we = h, ic(0, !1), Np ? f === wm ? Cs++ : (Cs = 0, wm = f) : Cs = 0, Np = og = !1, sl && typeof sl.onPostCommitFiberRoot == "function")
          try {
            sl.onPostCommitFiberRoot(ri, f);
          } catch (v) {
            Wl || (Wl = !0, console.error(
              "React instrumentation encountered an error: %s",
              v
            ));
          }
        var p = f.current.stateNode;
        return p.effectDuration = 0, p.passiveEffectDuration = 0, !0;
      } finally {
        oe.p = o, x.T = a, zn(e, t);
      }
    }
    function oo(e, t, a) {
      t = aa(a, t), t = vl(e.stateNode, t, 2), e = La(e, t, 2), e !== null && (Hc(e, 2), Ua(e));
    }
    function ie(e, t, a) {
      if (ah = !1, e.tag === 3)
        oo(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            oo(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (jo === null || !jo.has(i))) {
              e = aa(a, e), a = St(2), i = La(t, a, 2), i !== null && (xf(
                a,
                i,
                t,
                e
              ), Hc(i, 2), Ua(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function Ay(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new bS();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (tg = !0, o.add(a), i = dv.bind(null, e, t, a), Dt && so(e, a), t.then(i, i));
    }
    function dv(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, gy() && x.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), ut === e && (Me & a) === a && (Nt === Os || Nt === Iv && (Me & 62914560) === Me && Bn() - ag < L1 ? (we & ma) === en && uc(e, 0) : lg |= a, Hs === Me && (Hs = 0)), Ua(e);
    }
    function Ry(e, t) {
      t === 0 && (t = Wo()), e = Vl(e, t), e !== null && (Hc(e, t), Ua(e));
    }
    function kf(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), Ry(e, a);
    }
    function li(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), Ry(e, a);
    }
    function Fr(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === To;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && W(
            o,
            zy,
            i,
            o,
            (o.mode & Xg) === st
          ) : Fr(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? W(
            o,
            zy,
            i,
            o
          ) : o.subtreeFlags & 67108864 && W(
            o,
            Fr,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function zy(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      Ue(!0);
      try {
        ca(t), a && Lf(t), su(e, t.alternate, t, !1), a && Xr(e, t, 0, null, !1, 0);
      } finally {
        Ue(!1);
      }
    }
    function fo(e) {
      var t = !0;
      e.current.mode & (Pl | Au) || (t = !1), Fr(
        e,
        e.current,
        t
      );
    }
    function Fa(e) {
      if ((we & ma) === en) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = te(e) || "ReactComponent", Bp !== null) {
            if (Bp.has(t)) return;
            Bp.add(t);
          } else Bp = /* @__PURE__ */ new Set([t]);
          W(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function so(e, t) {
      Dt && e.memoizedUpdaters.forEach(function(a) {
        kn(e, a, t);
      });
    }
    function Dy(e, t) {
      var a = x.actQueue;
      return a !== null ? (a.push(t), DS) : gd(e, t);
    }
    function w0(e) {
      gy() && x.actQueue === null && W(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          te(e)
        );
      });
    }
    function Ua(e) {
      e !== nh && e.next === null && (nh === null ? qp = nh = e : nh = nh.next = e), Yp = !0, x.actQueue !== null ? sg || (sg = !0, jt()) : fg || (fg = !0, jt());
    }
    function ic(e, t) {
      if (!rg && Yp) {
        rg = !0;
        do
          for (var a = !1, i = qp; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Sl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, ed(i, f));
            } else
              f = Me, f = ea(
                i,
                i === ut ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== qs
              ), (f & 3) === 0 || $o(i, f) || (a = !0, ed(i, f));
            i = i.next;
          }
        while (a);
        rg = !1;
      }
    }
    function Ir() {
      Pr();
    }
    function Pr() {
      Yp = sg = fg = !1;
      var e = 0;
      Ns !== 0 && (ro() && (e = Ns), Ns = 0);
      for (var t = Bn(), a = null, i = qp; i !== null; ) {
        var o = i.next, f = Dn(i, t);
        f === 0 ? (i.next = null, a === null ? qp = o : a.next = o, o === null && (nh = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (Yp = !0)), i = o;
      }
      ic(e);
    }
    function Dn(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Sl(f), h = 1 << d, p = o[d];
        p === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = a0(h, t)) : p <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = ut, a = Me, a = ea(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== qs
      ), i = e.callbackNode, a === 0 || e === t && ($e === Ms || $e === Us) || e.cancelPendingCommit !== null)
        return i !== null && td(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || $o(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || x.actQueue !== null && i !== dg)
          td(i);
        else return t;
        switch (sh(a)) {
          case rl:
          case Pa:
            a = fs;
            break;
          case Su:
            a = Do;
            break;
          case Ad:
            a = ss;
            break;
          default:
            a = Do;
        }
        return i = Et.bind(null, e), x.actQueue !== null ? (x.actQueue.push(i), a = dg) : a = gd(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && td(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Et(e, t) {
      if (Tp = Sp = !1, ql !== xs && ql !== ng)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (co() && e.callbackNode !== a)
        return null;
      var i = Me;
      return i = ea(
        e,
        e === ut ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== qs
      ), i === 0 ? null : (Xt(
        e,
        i,
        t
      ), Dn(e, Bn()), e.callbackNode != null && e.callbackNode === a ? Et.bind(null, e) : null);
    }
    function ed(e, t) {
      if (co()) return null;
      Sp = Tp, Tp = !1, Xt(e, t, !0);
    }
    function td(e) {
      e !== dg && e !== null && gv(e);
    }
    function jt() {
      x.actQueue !== null && x.actQueue.push(function() {
        return Pr(), null;
      }), YS(function() {
        (we & (ma | Ou)) !== en ? gd(
          bd,
          Ir
        ) : Pr();
      });
    }
    function Oy() {
      return Ns === 0 && (Ns = oh()), Ns;
    }
    function My(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (K(e, "action"), Gc("" + e));
    }
    function Uy(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function ot(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = My(
          (o[Fl] || null).action
        ), d = i.submitter;
        d && (t = (t = d[Fl] || null) ? My(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new ae(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (Ns !== 0) {
                    var p = d ? Uy(
                      o,
                      d
                    ) : new FormData(o), v = {
                      pending: !0,
                      data: p,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(v), Ki(
                      a,
                      v,
                      null,
                      p
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), p = d ? Uy(
                    o,
                    d
                  ) : new FormData(o), v = {
                    pending: !0,
                    data: p,
                    method: o.method,
                    action: f
                  }, Object.freeze(v), Ki(
                    a,
                    v,
                    f,
                    p
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function il(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        Kv(i);
      }
      e.currentTarget = null;
    }
    function On(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], p = h.instance, v = h.currentTarget;
              if (h = h.listener, p !== o && f.isPropagationStopped())
                break e;
              p !== null ? W(
                p,
                il,
                f,
                h,
                v
              ) : il(f, h, v), o = p;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], p = h.instance, v = h.currentTarget, h = h.listener, p !== o && f.isPropagationStopped())
                break e;
              p !== null ? W(
                p,
                il,
                f,
                h,
                v
              ) : il(f, h, v), o = p;
            }
        }
      }
    }
    function Re(e, t) {
      hg.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[lm];
      a === void 0 && (a = t[lm] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (ad(t, e, 2, !1), a.add(i));
    }
    function ld(e, t, a) {
      hg.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), ad(
        a,
        e,
        i,
        t
      );
    }
    function Hy(e) {
      if (!e[_p]) {
        e[_p] = !0, cp.forEach(function(a) {
          a !== "selectionchange" && (hg.has(a) || ld(a, !1, e), ld(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[_p] || (t[_p] = !0, ld("selectionchange", !1, t));
      }
    }
    function ad(e, t, a, i) {
      switch (yd(t)) {
        case rl:
          var o = mv;
          break;
        case Pa:
          o = hd;
          break;
        default:
          o = ii;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !D || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function Ul(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var p = d.tag;
                if ((p === 3 || p === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = $n(h), d === null) return;
              if (p = d.tag, p === 5 || p === 6 || p === 26 || p === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      ks(function() {
        var v = f, U = Ni(a), B = [];
        e: {
          var O = Vg.get(e);
          if (O !== void 0) {
            var Y = ae, F = e;
            switch (e) {
              case "keypress":
                if (Vc(a) === 0) break e;
              case "keydown":
              case "keyup":
                Y = Zb;
                break;
              case "focusin":
                F = "focus", Y = Ce;
                break;
              case "focusout":
                F = "blur", Y = Ce;
                break;
              case "beforeblur":
              case "afterblur":
                Y = Ce;
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
                Y = Te;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                Y = ce;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                Y = Jb;
                break;
              case qg:
              case Yg:
              case _g:
                Y = Av;
                break;
              case Gg:
                Y = kb;
                break;
              case "scroll":
              case "scrollend":
                Y = R;
                break;
              case "wheel":
                Y = Wb;
                break;
              case "copy":
              case "cut":
              case "paste":
                Y = Yb;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                Y = Og;
                break;
              case "toggle":
              case "beforetoggle":
                Y = Ib;
            }
            var fe = (t & 4) !== 0, it = !fe && (e === "scroll" || e === "scrollend"), xe = fe ? O !== null ? O + "Capture" : null : O;
            fe = [];
            for (var b = v, S; b !== null; ) {
              var T = b;
              if (S = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || S === null || xe === null || (T = In(b, xe), T != null && fe.push(
                Hl(
                  b,
                  T,
                  S
                )
              )), it) break;
              b = b.return;
            }
            0 < fe.length && (O = new Y(
              O,
              F,
              null,
              a,
              U
            ), B.push({
              event: O,
              listeners: fe
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (O = e === "mouseover" || e === "pointerover", Y = e === "mouseout" || e === "pointerout", O && a !== s && (F = a.relatedTarget || a.fromElement) && ($n(F) || F[hi]))
              break e;
            if ((Y || O) && (O = U.window === U ? U : (O = U.ownerDocument) ? O.defaultView || O.parentWindow : window, Y ? (F = a.relatedTarget || a.toElement, Y = v, F = F ? $n(F) : null, F !== null && (it = We(F), fe = F.tag, F !== it || fe !== 5 && fe !== 27 && fe !== 6) && (F = null)) : (Y = null, F = v), Y !== F)) {
              if (fe = Te, T = "onMouseLeave", xe = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (fe = Og, T = "onPointerLeave", xe = "onPointerEnter", b = "pointer"), it = Y == null ? O : Uu(Y), S = F == null ? O : Uu(F), O = new fe(
                T,
                b + "leave",
                Y,
                a,
                U
              ), O.target = it, O.relatedTarget = S, T = null, $n(U) === v && (fe = new fe(
                xe,
                b + "enter",
                F,
                a,
                U
              ), fe.target = S, fe.relatedTarget = it, T = fe), it = T, Y && F)
                t: {
                  for (fe = Y, xe = F, b = 0, S = fe; S; S = It(S))
                    b++;
                  for (S = 0, T = xe; T; T = It(T))
                    S++;
                  for (; 0 < b - S; )
                    fe = It(fe), b--;
                  for (; 0 < S - b; )
                    xe = It(xe), S--;
                  for (; b--; ) {
                    if (fe === xe || xe !== null && fe === xe.alternate)
                      break t;
                    fe = It(fe), xe = It(xe);
                  }
                  fe = null;
                }
              else fe = null;
              Y !== null && xy(
                B,
                O,
                Y,
                fe,
                !1
              ), F !== null && it !== null && xy(
                B,
                it,
                F,
                fe,
                !0
              );
            }
          }
          e: {
            if (O = v ? Uu(v) : window, Y = O.nodeName && O.nodeName.toLowerCase(), Y === "select" || Y === "input" && O.type === "file")
              var _ = Sh;
            else if (m0(O))
              if (Ng)
                _ = ov;
              else {
                _ = Th;
                var w = iv;
              }
            else
              Y = O.nodeName, !Y || Y.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? v && Ci(v.elementType) && (_ = Sh) : _ = cv;
            if (_ && (_ = _(e, v))) {
              Is(
                B,
                _,
                a,
                U
              );
              break e;
            }
            w && w(e, O, v), e === "focusout" && v && O.type === "number" && v.memoizedProps.value != null && Qs(O, "number", O.value);
          }
          switch (w = v ? Uu(v) : window, e) {
            case "focusin":
              (m0(w) || w.contentEditable === "true") && (Nd = w, zv = v, Em = null);
              break;
            case "focusout":
              Em = zv = Nd = null;
              break;
            case "mousedown":
              Dv = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Dv = !1, T0(
                B,
                a,
                U
              );
              break;
            case "selectionchange":
              if (lS) break;
            case "keydown":
            case "keyup":
              T0(
                B,
                a,
                U
              );
          }
          var me;
          if (Rv)
            e: {
              switch (e) {
                case "compositionstart":
                  var I = "onCompositionStart";
                  break e;
                case "compositionend":
                  I = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  I = "onCompositionUpdate";
                  break e;
              }
              I = void 0;
            }
          else
            Cd ? Ml(e, a) && (I = "onCompositionEnd") : e === "keydown" && a.keyCode === Mg && (I = "onCompositionStart");
          I && (Ug && a.locale !== "ko" && (Cd || I !== "onCompositionStart" ? I === "onCompositionEnd" && Cd && (me = Pn()) : (X = U, M = "value" in X ? X.value : X.textContent, Cd = !0)), w = $f(
            v,
            I
          ), 0 < w.length && (I = new Dg(
            I,
            e,
            null,
            a,
            U
          ), B.push({
            event: I,
            listeners: w
          }), me ? I.data = me : (me = Yu(a), me !== null && (I.data = me)))), (me = eS ? Fs(e, a) : of(e, a)) && (I = $f(
            v,
            "onBeforeInput"
          ), 0 < I.length && (w = new Gb(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            U
          ), B.push({
            event: w,
            listeners: I
          }), w.data = me)), ot(
            B,
            e,
            v,
            a,
            U
          );
        }
        On(B, t);
      });
    }
    function Hl(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function $f(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = In(e, a), o != null && i.unshift(
          Hl(e, o, f)
        ), o = In(e, t), o != null && i.push(
          Hl(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function It(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function xy(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, p = h.alternate, v = h.stateNode;
        if (h = h.tag, p !== null && p === i) break;
        h !== 5 && h !== 26 && h !== 27 || v === null || (p = v, o ? (v = In(a, f), v != null && d.unshift(
          Hl(a, v, p)
        )) : o || (v = In(a, f), v != null && d.push(
          Hl(a, v, p)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Mn(e, t) {
      _c(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || gm || (gm = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Ba,
        possibleRegistrationNames: mc
      };
      Ci(e) || typeof t.is == "string" || vh(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function ft(e, t, a, i) {
      t !== a && (a = cl(a), cl(t) !== a && (i[e] = t));
    }
    function ai(e, t, a) {
      t.forEach(function(i) {
        a[Ny(i)] = i === "style" ? oc(e) : e.getAttribute(i);
      });
    }
    function Ha(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function nd(e, t) {
      return e = e.namespaceURI === vs || e.namespaceURI === No ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function cl(e) {
      return C(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        ne(e)
      ), P(e)), (typeof e == "string" ? e : "" + e).replace(OS, `
`).replace(MS, "");
    }
    function Cy(e, t) {
      return t = cl(t), cl(e) === t;
    }
    function du() {
    }
    function _e(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (uf(i, t, !1), t === "body" || t === "textarea" && i === "" || xi(e, i)) : (typeof i == "number" || typeof i == "bigint") && (uf("" + i, t, !1), t !== "body" && xi(e, "" + i));
          break;
        case "className":
          Io(e, "class", i);
          break;
        case "tabIndex":
          Io(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Io(e, a, i);
          break;
        case "style":
          cf(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            Io(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          K(i, a), i = Gc("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Xp || (Xp = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Vp || (Vp = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Gp ? t !== "button" || o.type == null || o.type === "submit" || Gp ? typeof i == "function" && (o.name == null || eb || (eb = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Xp || (Xp = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Vp || (Vp = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Gp = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Gp = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && _e(e, t, "name", o.name, o, null), _e(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), _e(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), _e(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (_e(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), _e(e, t, "method", o.method, o, null), _e(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          K(i, a), i = Gc("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ha(a, i), e.onclick = du);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ha(a, i), Re("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ha(a, i), Re("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
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
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          K(i, a), a = Gc("" + i), e.setAttributeNS(Bs, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (K(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || jp[a] || (jp[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
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
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (K(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (K(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (K(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          Re("beforetoggle", e), Re("toggle", e), Fo(e, "popover", i);
          break;
        case "xlinkActuate":
          Ga(
            e,
            Bs,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          Ga(
            e,
            Bs,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          Ga(
            e,
            Bs,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          Ga(
            e,
            Bs,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          Ga(
            e,
            Bs,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          Ga(
            e,
            Bs,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          Ga(
            e,
            yg,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          Ga(
            e,
            yg,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          Ga(
            e,
            yg,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Fo(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          tb || i == null || typeof i != "object" || (tb = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = Ks(a), Fo(e, a, i)) : Ba.hasOwnProperty(a) && i != null && typeof i != "function" && Ha(a, i);
      }
    }
    function cc(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          cf(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? xi(e, i) : (typeof i == "number" || typeof i == "bigint") && xi(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ha(a, i), Re("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ha(a, i), Re("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ha(a, i), e.onclick = du);
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
          if (Ba.hasOwnProperty(a))
            i != null && typeof i != "function" && Ha(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[Fl] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Fo(e, a, i);
            }
      }
    }
    function At(e, t, a) {
      switch (Mn(t, a), t) {
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
          Re("error", e), Re("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    _e(e, t, f, d, a, null);
                }
            }
          o && _e(e, t, "srcSet", a.srcSet, a, null), i && _e(e, t, "src", a.src, a, null);
          return;
        case "input":
          xu("input", a), Re("invalid", e);
          var h = f = d = o = null, p = null, v = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var U = a[i];
              if (U != null)
                switch (i) {
                  case "name":
                    o = U;
                    break;
                  case "type":
                    d = U;
                    break;
                  case "checked":
                    p = U;
                    break;
                  case "defaultChecked":
                    v = U;
                    break;
                  case "value":
                    f = U;
                    break;
                  case "defaultValue":
                    h = U;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (U != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    _e(e, t, i, U, a, null);
                }
            }
          Cu(e, a), s0(
            e,
            f,
            h,
            p,
            v,
            d,
            o,
            !1
          ), Wn(e);
          return;
        case "select":
          xu("select", a), Re("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  _e(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          lf(e, a), t = f, a = d, e.multiple = !!i, t != null ? Fn(e, !!i, t, !1) : a != null && Fn(e, !!i, a, !0);
          return;
        case "textarea":
          xu("textarea", a), Re("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  _e(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          nn(e, a), dh(e, i, o, f), Wn(e);
          return;
        case "option":
          rh(e, a);
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  _e(e, t, p, i, a, null);
              }
          return;
        case "dialog":
          Re("beforetoggle", e), Re("toggle", e), Re("cancel", e), Re("close", e);
          break;
        case "iframe":
        case "object":
          Re("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < Jm.length; i++)
            Re(Jm[i], e);
          break;
        case "image":
          Re("error", e), Re("load", e);
          break;
        case "details":
          Re("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Re("error", e), Re("load", e);
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
          for (v in a)
            if (a.hasOwnProperty(v) && (i = a[v], i != null))
              switch (v) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  _e(e, t, v, i, a, null);
              }
          return;
        default:
          if (Ci(t)) {
            for (U in a)
              a.hasOwnProperty(U) && (i = a[U], i !== void 0 && cc(
                e,
                t,
                U,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && _e(e, t, h, i, a, null));
    }
    function J0(e, t, a, i) {
      switch (Mn(t, i), t) {
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
          var o = null, f = null, d = null, h = null, p = null, v = null, U = null;
          for (Y in a) {
            var B = a[Y];
            if (a.hasOwnProperty(Y) && B != null)
              switch (Y) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  p = B;
                default:
                  i.hasOwnProperty(Y) || _e(
                    e,
                    t,
                    Y,
                    null,
                    i,
                    B
                  );
              }
          }
          for (var O in i) {
            var Y = i[O];
            if (B = a[O], i.hasOwnProperty(O) && (Y != null || B != null))
              switch (O) {
                case "type":
                  f = Y;
                  break;
                case "name":
                  o = Y;
                  break;
                case "checked":
                  v = Y;
                  break;
                case "defaultChecked":
                  U = Y;
                  break;
                case "value":
                  d = Y;
                  break;
                case "defaultValue":
                  h = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Y !== B && _e(
                    e,
                    t,
                    O,
                    Y,
                    i,
                    B
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || P1 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), P1 = !0), !t || i || I1 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), I1 = !0), Nu(
            e,
            d,
            h,
            p,
            v,
            U,
            f,
            o
          );
          return;
        case "select":
          Y = d = h = O = null;
          for (f in a)
            if (p = a[f], a.hasOwnProperty(f) && p != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  Y = p;
                default:
                  i.hasOwnProperty(f) || _e(
                    e,
                    t,
                    f,
                    null,
                    i,
                    p
                  );
              }
          for (o in i)
            if (f = i[o], p = a[o], i.hasOwnProperty(o) && (f != null || p != null))
              switch (o) {
                case "value":
                  O = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== p && _e(
                    e,
                    t,
                    o,
                    f,
                    i,
                    p
                  );
              }
          i = h, t = d, a = Y, O != null ? Fn(e, !!t, O, !1) : !!a != !!t && (i != null ? Fn(e, !!t, i, !0) : Fn(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          Y = O = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  _e(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  O = o;
                  break;
                case "defaultValue":
                  Y = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && _e(e, t, d, o, i, f);
              }
          Zs(e, O, Y);
          return;
        case "option":
          for (var F in a)
            if (O = a[F], a.hasOwnProperty(F) && O != null && !i.hasOwnProperty(F))
              switch (F) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  _e(
                    e,
                    t,
                    F,
                    null,
                    i,
                    O
                  );
              }
          for (p in i)
            if (O = i[p], Y = a[p], i.hasOwnProperty(p) && O !== Y && (O != null || Y != null))
              switch (p) {
                case "selected":
                  e.selected = O && typeof O != "function" && typeof O != "symbol";
                  break;
                default:
                  _e(
                    e,
                    t,
                    p,
                    O,
                    i,
                    Y
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
          for (var fe in a)
            O = a[fe], a.hasOwnProperty(fe) && O != null && !i.hasOwnProperty(fe) && _e(
              e,
              t,
              fe,
              null,
              i,
              O
            );
          for (v in i)
            if (O = i[v], Y = a[v], i.hasOwnProperty(v) && O !== Y && (O != null || Y != null))
              switch (v) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  _e(
                    e,
                    t,
                    v,
                    O,
                    i,
                    Y
                  );
              }
          return;
        default:
          if (Ci(t)) {
            for (var it in a)
              O = a[it], a.hasOwnProperty(it) && O !== void 0 && !i.hasOwnProperty(it) && cc(
                e,
                t,
                it,
                void 0,
                i,
                O
              );
            for (U in i)
              O = i[U], Y = a[U], !i.hasOwnProperty(U) || O === Y || O === void 0 && Y === void 0 || cc(
                e,
                t,
                U,
                O,
                i,
                Y
              );
            return;
          }
      }
      for (var xe in a)
        O = a[xe], a.hasOwnProperty(xe) && O != null && !i.hasOwnProperty(xe) && _e(e, t, xe, null, i, O);
      for (B in i)
        O = i[B], Y = a[B], !i.hasOwnProperty(B) || O === Y || O == null && Y == null || _e(e, t, B, O, i, Y);
    }
    function Ny(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function oc(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function By(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (ue(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || ps.has(f) ? (ue(d, f), i += o + f.replace(Tu, "-$1").toLowerCase().replace(Eu, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(Tu, "-$1").toLowerCase().replace(Eu, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = cl(i), cl(t) !== i && (a.style = oc(e)));
      }
    }
    function xl(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (K(i, t), e === "" + i)
              return;
        }
      ft(t, e, i, f);
    }
    function qy(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      ft(t, e, i, f);
    }
    function Yy(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (K(i, a), e === "" + i)
              return;
        }
      ft(t, e, i, f);
    }
    function K0(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (K(i, t), e === "" + i))
              return;
        }
      ft(t, e, i, f);
    }
    function Qe(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (K(i, t), a = Gc("" + i), e === a)
              return;
        }
      ft(t, e, i, f);
    }
    function Fe(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (Ci(t)) {
        for (var p in a)
          if (a.hasOwnProperty(p)) {
            var v = a[p];
            if (v != null) {
              if (Ba.hasOwnProperty(p))
                typeof v != "function" && Ha(p, v);
              else if (a.suppressHydrationWarning !== !0)
                switch (p) {
                  case "children":
                    typeof v != "string" && typeof v != "number" || ft(
                      "children",
                      e.textContent,
                      v,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, v = v ? v.__html : void 0, v != null && (v = nd(e, v), ft(
                      p,
                      d,
                      v,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(p), By(e, v, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(p.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      p
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = i0(
                      e,
                      "class",
                      v
                    ), ft(
                      "className",
                      d,
                      v,
                      o
                    );
                    continue;
                  default:
                    i.context === Oc && t !== "svg" && t !== "math" ? f.delete(p.toLowerCase()) : f.delete(p), d = i0(
                      e,
                      p,
                      v
                    ), ft(
                      p,
                      d,
                      v,
                      o
                    );
                }
            }
          }
      } else
        for (v in a)
          if (a.hasOwnProperty(v) && (p = a[v], p != null)) {
            if (Ba.hasOwnProperty(v))
              typeof p != "function" && Ha(v, p);
            else if (a.suppressHydrationWarning !== !0)
              switch (v) {
                case "children":
                  typeof p != "string" && typeof p != "number" || ft(
                    "children",
                    e.textContent,
                    p,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = nd(e, p), d !== p && (o[v] = { __html: d }));
                  continue;
                case "className":
                  xl(
                    e,
                    v,
                    "class",
                    p,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  xl(
                    e,
                    v,
                    "tabindex",
                    p,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(v), By(e, p, o);
                  continue;
                case "multiple":
                  f.delete(v), ft(
                    v,
                    e.multiple,
                    p,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(v), ft(
                    v,
                    e.muted,
                    p,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), ft(
                    v,
                    e.autofocus,
                    p,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(v), d = e.getAttribute("data"), ft(
                      v,
                      d,
                      p,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(p !== "" || t === "a" && v === "href" || t === "object" && v === "data")) {
                    console.error(
                      v === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      v,
                      v
                    );
                    continue;
                  }
                  Qe(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(v), typeof p == "function") {
                    f.delete(v.toLowerCase()), v === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === US) {
                    f.delete(v.toLowerCase()), ft(
                      v,
                      "function",
                      p,
                      o
                    );
                    continue;
                  }
                  Qe(
                    e,
                    v,
                    v.toLowerCase(),
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  Qe(
                    e,
                    v,
                    "xlink:href",
                    p,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  Yy(
                    e,
                    v,
                    "contenteditable",
                    p,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  Yy(
                    e,
                    v,
                    "spellcheck",
                    p,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  Yy(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
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
                  qy(
                    e,
                    v,
                    v.toLowerCase(),
                    p,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var U = d = v, B = o;
                    if (f.delete(U), h = h.getAttribute(U), h === null)
                      switch (typeof p) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (p === !1) break e;
                      }
                    else if (p != null)
                      switch (typeof p) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (p === !0 && h === "") break e;
                          break;
                        default:
                          if (K(p, d), h === "" + p)
                            break e;
                      }
                    ft(
                      d,
                      h,
                      p,
                      B
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, U = d = v, B = o, f.delete(U), h = h.getAttribute(U), h === null)
                      switch (typeof p) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(p) || 1 > p) break e;
                      }
                    else if (p != null)
                      switch (typeof p) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(p) || 1 > p) && (K(p, d), h === "" + p))
                            break e;
                      }
                    ft(
                      d,
                      h,
                      p,
                      B
                    );
                  }
                  continue;
                case "rowSpan":
                  K0(
                    e,
                    v,
                    "rowspan",
                    p,
                    f,
                    o
                  );
                  continue;
                case "start":
                  K0(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  xl(
                    e,
                    v,
                    "x-height",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  xl(
                    e,
                    v,
                    "xlink:actuate",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  xl(
                    e,
                    v,
                    "xlink:arcrole",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  xl(
                    e,
                    v,
                    "xlink:role",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  xl(
                    e,
                    v,
                    "xlink:show",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  xl(
                    e,
                    v,
                    "xlink:title",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  xl(
                    e,
                    v,
                    "xlink:type",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  xl(
                    e,
                    v,
                    "xml:base",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  xl(
                    e,
                    v,
                    "xml:lang",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  xl(
                    e,
                    v,
                    "xml:space",
                    p,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  p !== "" || jp[v] || (jp[v] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    v
                  )), qy(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < v.length) || v[0] !== "o" && v[0] !== "O" || v[1] !== "n" && v[1] !== "N") {
                    h = Ks(v), d = !1, i.context === Oc && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (U = v.toLowerCase(), U = gc.hasOwnProperty(
                      U
                    ) && gc[U] || null, U !== null && U !== v && (d = !0, f.delete(U)), f.delete(h));
                    e: if (U = e, B = h, h = p, zi(B))
                      if (U.hasAttribute(B))
                        U = U.getAttribute(
                          B
                        ), K(
                          h,
                          B
                        ), h = U === "" + h ? h : U;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (U = B.toLowerCase().slice(0, 5), U !== "data-" && U !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || ft(
                      v,
                      h,
                      p,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && ai(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function ze(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function De(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Ze(e) {
      switch (e) {
        case No:
          return uh;
        case vs:
          return Lp;
        default:
          return Oc;
      }
    }
    function Kl(e, t) {
      if (e === Oc)
        switch (t) {
          case "svg":
            return uh;
          case "math":
            return Lp;
          default:
            return Oc;
        }
      return e === uh && t === "foreignObject" ? Oc : e;
    }
    function Un(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ro() {
      var e = window.event;
      return e && e.type === "popstate" ? e === gg ? !1 : (gg = e, !0) : (gg = null, !1);
    }
    function _y(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function hu(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function Rt(e, t, a, i) {
      J0(e, t, a, i), e[Fl] = i;
    }
    function yu(e) {
      xi(e, "");
    }
    function fc(e, t, a) {
      e.nodeValue = a;
    }
    function Hn(e) {
      return e === "head";
    }
    function xa(e, t) {
      e.removeChild(t);
    }
    function ho(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function yo(e, t) {
      var a = t, i = 0, o = 0;
      do {
        var f = a.nextSibling;
        if (e.removeChild(a), f && f.nodeType === 8)
          if (a = f.data, a === Zp) {
            if (0 < i && 8 > i) {
              a = i;
              var d = e.ownerDocument;
              if (a & xS && go(d.documentElement), a & CS && go(d.body), a & NS)
                for (a = d.head, go(a), d = a.firstChild; d; ) {
                  var h = d.nextSibling, p = d.nodeName;
                  d[Uo] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = h;
                }
            }
            if (o === 0) {
              e.removeChild(f), hc(t);
              return;
            }
            o--;
          } else
            a === Qp || a === Dc || a === Km ? o++ : i = a.charCodeAt(0) - 48;
        else i = 0;
        a = f;
      } while (a);
      hc(t);
    }
    function kl(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Gy(e) {
      e.nodeValue = "";
    }
    function Vy(e, t) {
      t = t[BS], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function ud(e, t) {
      e.nodeValue = t;
    }
    function mo(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            mo(a), Cc(a);
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
    function ni(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Uo])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          K(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = fl(e.nextSibling), e === null) break;
      }
      return null;
    }
    function ol(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = fl(e.nextSibling), e === null)) return null;
      return e;
    }
    function xn(e) {
      return e.data === Km || e.data === Dc && e.ownerDocument.readyState === ab;
    }
    function po(e, t) {
      var a = e.ownerDocument;
      if (e.data !== Dc || a.readyState === ab)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function fl(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === Qp || t === Km || t === Dc || t === mg || t === lb)
            break;
          if (t === Zp) return null;
        }
      }
      return e;
    }
    function id(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[Ny(f.name)] = f.name.toLowerCase() === "style" ? oc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function cd(e, t, a) {
      return a === null || a[HS] !== !0 ? (e.nodeValue === t ? e = null : (t = cl(t), e = cl(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Xy(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Zp) {
            if (t === 0)
              return fl(e.nextSibling);
            t--;
          } else
            a !== Qp && a !== Km && a !== Dc || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function vo(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Qp || a === Km || a === Dc) {
            if (t === 0) return e;
            t--;
          } else a === Zp && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function jy(e) {
      hc(e);
    }
    function oa(e) {
      hc(e);
    }
    function Qy(e, t, a, i, o) {
      switch (o && Js(e, i.ancestorInfo), t = De(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function fa(e, t, a, i) {
      if (!a[hi] && ta(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      At(a, e, t), a[Tl] = i, a[Fl] = t;
    }
    function go(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      Cc(e);
    }
    function Wf(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function k0(e, t, a) {
      var i = ih;
      if (i && typeof t == "string" && t) {
        var o = la(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), fb.has(o) || (fb.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), At(t, "link", e), Kt(t), i.head.appendChild(t)));
      }
    }
    function mu(e, t, a, i) {
      var o = (o = Nn.current) ? Wf(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = ui(a.href), t = an(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = ui(a.href);
            var f = an(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Ys, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              Cn(e)
            )) && !f._p && (d.instance = f, d.state.loading = km | Jn), !Kn.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              Kn.set(e, h), f || $0(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + sc(t) + `
  + ` + sc(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + sc(t) + `
  + ` + sc(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = rc(a), t = an(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function sc(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : gu.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : gu.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : gu.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function ui(e) {
      return 'href="' + la(e) + '"';
    }
    function Cn(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Zy(e) {
      return be({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function $0(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = km : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= km;
      }), t.addEventListener("error", function() {
        return i.loading |= cb;
      }), At(t, "link", a), Kt(t), e.head.appendChild(t));
    }
    function rc(e) {
      return '[src="' + la(e) + '"]';
    }
    function dc(e) {
      return "script[async]" + e;
    }
    function od(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + la(a.href) + '"]'
            );
            if (i)
              return t.instance = i, Kt(i), i;
            var o = be({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), Kt(i), At(i, "style", o), fd(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = ui(a.href);
            var f = e.querySelector(
              Cn(o)
            );
            if (f)
              return t.state.loading |= Jn, t.instance = f, Kt(f), f;
            i = Zy(a), (o = Kn.get(o)) && Ly(i, o), f = (e.ownerDocument || e).createElement("link"), Kt(f);
            var d = f;
            return d._p = new Promise(function(h, p) {
              d.onload = h, d.onerror = p;
            }), At(f, "link", i), t.state.loading |= Jn, fd(f, a.precedence, e), t.instance = f;
          case "script":
            return f = rc(a.src), (o = e.querySelector(
              dc(f)
            )) ? (t.instance = o, Kt(o), o) : (i = a, (o = Kn.get(f)) && (i = be({}, a), wy(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), Kt(o), At(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & Jn) === Ys && (i = t.instance, t.state.loading |= Jn, fd(i, a.precedence, e));
      return t.instance;
    }
    function fd(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function Ly(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function wy(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function Jy(e, t, a) {
      if (wp === null) {
        var i = /* @__PURE__ */ new Map(), o = wp = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = wp, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Uo] || f[Tl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== No) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function Ky(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function bo(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === uh || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = ze(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function Ff(e) {
      return !(e.type === "stylesheet" && (e.state.loading & ob) === Ys);
    }
    function W0() {
    }
    function F0(e, t, a) {
      if ($m === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = $m;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & Jn) === Ys) {
        if (t.instance === null) {
          var o = ui(a.href), f = e.querySelector(
            Cn(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = If.bind(i), e.then(i, i)), t.state.loading |= Jn, t.instance = f, Kt(f);
            return;
          }
          f = e.ownerDocument || e, a = Zy(a), (o = Kn.get(o)) && Ly(a, o), f = f.createElement("link"), Kt(f);
          var d = f;
          d._p = new Promise(function(h, p) {
            d.onload = h, d.onerror = p;
          }), At(f, "link", a), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & ob) === Ys && (i.count++, t = If.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function I0() {
      if ($m === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = $m;
      return e.stylesheets && e.count === 0 && sd(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && sd(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function If() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          sd(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function sd(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Jp = /* @__PURE__ */ new Map(), t.forEach(P0, e), Jp = null, If.call(e));
    }
    function P0(e, t) {
      if (!(t.state.loading & Jn)) {
        var a = Jp.get(e);
        if (a) var i = a.get(Sg);
        else {
          a = /* @__PURE__ */ new Map(), Jp.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(Sg, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(Sg, o), a.set(d, o), this.count++, i = If.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= Jn;
      }
    }
    function rd(e, t, a, i, o, f, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = qs, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = fh(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fh(0), this.hiddenUpdates = fh(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function ky(e, t, a, i, o, f, d, h, p, v, U, B) {
      return e = new rd(
        e,
        t,
        a,
        d,
        h,
        p,
        v,
        B
      ), t = iS, f === !0 && (t |= Pl | Au), Dt && (t |= Nl), f = ge(3, null, null, t), e.current = f, f.stateNode = e, t = pf(), ji(t), e.pooledCache = t, ji(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, Xl(f), e;
    }
    function $y(e) {
      return e ? (e = Bo, e) : Bo;
    }
    function Le(e, t, a, i, o, f) {
      if (sl && typeof sl.onScheduleFiberRoot == "function")
        try {
          sl.onScheduleFiberRoot(ri, i, a);
        } catch (d) {
          Wl || (Wl = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      k !== null && typeof k.markRenderScheduled == "function" && k.markRenderScheduled(t), o = $y(o), i.context === null ? i.context = o : i.pendingContext = o, Il && ra !== null && !hb && (hb = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        te(ra) || "Unknown"
      )), i = rn(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = La(e, i, t), a !== null && (Tt(a, e, t), Lu(a, e, t));
    }
    function dd(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function Wy(e, t) {
      dd(e, t), (e = e.alternate) && dd(e, t);
    }
    function Fy(e) {
      if (e.tag === 13) {
        var t = Vl(e, 67108864);
        t !== null && Tt(t, e, 67108864), Wy(e, 67108864);
      }
    }
    function hv() {
      return ra;
    }
    function yv() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = ev(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function mv(e, t, a, i) {
      var o = x.T;
      x.T = null;
      var f = oe.p;
      try {
        oe.p = rl, ii(e, t, a, i);
      } finally {
        oe.p = f, x.T = o;
      }
    }
    function hd(e, t, a, i) {
      var o = x.T;
      x.T = null;
      var f = oe.p;
      try {
        oe.p = Pa, ii(e, t, a, i);
      } finally {
        oe.p = f, x.T = o;
      }
    }
    function ii(e, t, a, i) {
      if (kp) {
        var o = Pf(i);
        if (o === null)
          Ul(
            e,
            t,
            i,
            $p,
            a
          ), ci(e, i);
        else if (es(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (ci(e, i), t & 4 && -1 < GS.indexOf(e)) {
          for (; o !== null; ) {
            var f = ta(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = Ai(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var p = 1 << 31 - Sl(d);
                        h.entanglements[1] |= p, d &= ~p;
                      }
                      Ua(f), (we & (ma | Ou)) === en && (Cp = Bn() + w1, ic(0));
                    }
                  }
                  break;
                case 13:
                  h = Vl(f, 2), h !== null && Tt(h, f, 2), nc(), Wy(f, 2);
              }
            if (f = Pf(i), f === null && Ul(
              e,
              t,
              i,
              $p,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          Ul(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function Pf(e) {
      return e = Ni(e), So(e);
    }
    function So(e) {
      if ($p = null, e = $n(e), e !== null) {
        var t = We(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = va(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return $p = e, null;
    }
    function yd(e) {
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
          return rl;
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
          return Pa;
        case "message":
          switch (si()) {
            case bd:
              return rl;
            case fs:
              return Pa;
            case Do:
            case Sv:
              return Su;
            case ss:
              return Ad;
            default:
              return Su;
          }
        default:
          return Su;
      }
    }
    function ci(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Lo = null;
          break;
        case "dragenter":
        case "dragleave":
          wo = null;
          break;
        case "mouseover":
        case "mouseout":
          Jo = null;
          break;
        case "pointerover":
        case "pointerout":
          Fm.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Im.delete(t.pointerId);
      }
    }
    function $l(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = ta(t), t !== null && Fy(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function es(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return Lo = $l(
            Lo,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return wo = $l(
            wo,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return Jo = $l(
            Jo,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return Fm.set(
            f,
            $l(
              Fm.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, Im.set(
            f,
            $l(
              Im.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function ep(e) {
      var t = $n(e.target);
      if (t !== null) {
        var a = We(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = va(a), t !== null) {
              e.blockedOn = t, lv(e.priority, function() {
                if (a.tag === 13) {
                  var i = Jl(a);
                  i = zl(i);
                  var o = Vl(
                    a,
                    i
                  );
                  o !== null && Tt(o, a, i), Wy(a, i);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function ts(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = Pf(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          s !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = o, a.target.dispatchEvent(i), s === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = null;
        } else
          return t = ta(a), t !== null && Fy(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function Iy(e, t, a) {
      ts(e) && a.delete(t);
    }
    function tp() {
      Tg = !1, Lo !== null && ts(Lo) && (Lo = null), wo !== null && ts(wo) && (wo = null), Jo !== null && ts(Jo) && (Jo = null), Fm.forEach(Iy), Im.forEach(Iy);
    }
    function ls(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Tg || (Tg = !0, zt.unstable_scheduleCallback(
        zt.unstable_NormalPriority,
        tp
      )));
    }
    function lp(e) {
      Wp !== e && (Wp = e, zt.unstable_scheduleCallback(
        zt.unstable_NormalPriority,
        function() {
          Wp === e && (Wp = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (So(i || a) === null)
                continue;
              break;
            }
            var f = ta(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), Ki(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function hc(e) {
      function t(p) {
        return ls(p, e);
      }
      Lo !== null && ls(Lo, e), wo !== null && ls(wo, e), Jo !== null && ls(Jo, e), Fm.forEach(t), Im.forEach(t);
      for (var a = 0; a < Ko.length; a++) {
        var i = Ko[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < Ko.length && (a = Ko[0], a.blockedOn === null); )
        ep(a), a.blockedOn === null && Ko.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[Fl] || null;
          if (typeof f == "function")
            d || lp(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[Fl] || null)
                h = d.formAction;
              else if (So(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), lp(a);
          }
        }
    }
    function md(e) {
      this._internalRoot = e;
    }
    function as(e) {
      this._internalRoot = e;
    }
    function ap(e) {
      e[hi] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var zt = Bb(), ns = zg, pv = Nb, be = Object.assign, us = Symbol.for("react.element"), oi = Symbol.for("react.transitional.element"), yc = Symbol.for("react.portal"), ye = Symbol.for("react.fragment"), To = Symbol.for("react.strict_mode"), Eo = Symbol.for("react.profiler"), Py = Symbol.for("react.provider"), pd = Symbol.for("react.consumer"), Ca = Symbol.for("react.context"), pu = Symbol.for("react.forward_ref"), Ao = Symbol.for("react.suspense"), fi = Symbol.for("react.suspense_list"), is = Symbol.for("react.memo"), sa = Symbol.for("react.lazy"), em = Symbol.for("react.activity"), np = Symbol.for("react.memo_cache_sentinel"), tm = Symbol.iterator, vd = Symbol.for("react.client.reference"), se = Array.isArray, x = ns.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, oe = pv.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, vv = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), cs = [], os = [], Na = -1, vu = vt(null), Ro = vt(null), Nn = vt(null), zo = vt(null), gu = Object.prototype.hasOwnProperty, gd = zt.unstable_scheduleCallback, gv = zt.unstable_cancelCallback, up = zt.unstable_shouldYield, bv = zt.unstable_requestPaint, Bn = zt.unstable_now, si = zt.unstable_getCurrentPriorityLevel, bd = zt.unstable_ImmediatePriority, fs = zt.unstable_UserBlockingPriority, Do = zt.unstable_NormalPriority, Sv = zt.unstable_LowPriority, ss = zt.unstable_IdlePriority, Tv = zt.log, Ia = zt.unstable_setDisableYieldValue, ri = null, sl = null, k = null, Wl = !1, Dt = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Sl = Math.clz32 ? Math.clz32 : ch, Sd = Math.log, bu = Math.LN2, Td = 256, Ed = 4194304, rl = 2, Pa = 8, Su = 32, Ad = 268435456, di = Math.random().toString(36).slice(2), Tl = "__reactFiber$" + di, Fl = "__reactProps$" + di, hi = "__reactContainer$" + di, lm = "__reactEvents$" + di, ip = "__reactListeners$" + di, Oo = "__reactHandles$" + di, Mo = "__reactResources$" + di, Uo = "__reactMarker$" + di, cp = /* @__PURE__ */ new Set(), Ba = {}, mc = {}, op = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Rd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), zd = {}, Dd = {}, yi = 0, am, nm, fp, um, Ho, sp, rp;
    Vs.__reactDisabledLog = !0;
    var im, rs, xo = !1, ds = new (typeof WeakMap == "function" ? WeakMap : Map)(), ra = null, Il = !1, Ev = /[\n"\\]/g, cm = !1, om = !1, fm = !1, sm = !1, Od = !1, rm = !1, hs = ["value", "defaultValue"], dp = !1, hp = /["'&<>\n\t]|^\s|\s$/, dm = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), Md = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), Ud = Md.concat(["button"]), hm = "dd dt li option optgroup p rp rt".split(" "), ym = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, Co = {}, qn = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Tu = /([A-Z])/g, Eu = /^ms-/, ys = /^(?:webkit|moz|o)[A-Z]/, ms = /^-ms-/, mi = /-(.)/g, yp = /;\s*$/, pc = {}, vc = {}, mp = !1, mm = !1, ps = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), vs = "http://www.w3.org/1998/Math/MathML", No = "http://www.w3.org/2000/svg", Hd = /* @__PURE__ */ new Map([
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
    ]), gc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, pm = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Yn = {}, vm = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), xd = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), gm = !1, Cl = {}, gs = /^on./, l = /^on[^A-Z]/, n = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), c = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, s = null, r = null, y = null, m = !1, g = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), D = !1;
    if (g)
      try {
        var G = {};
        Object.defineProperty(G, "passive", {
          get: function() {
            D = !0;
          }
        }), window.addEventListener("test", G, G), window.removeEventListener("test", G, G);
      } catch {
        D = !1;
      }
    var X = null, M = null, H = null, le = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ae = nl(le), Ge = be({}, le, { view: 0, detail: 0 }), R = nl(Ge), E, z, V, $ = be({}, Ge, {
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
      getModifierState: Ws,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== V && (V && e.type === "mousemove" ? (E = e.screenX - V.screenX, z = e.screenY - V.screenY) : z = E = 0, V = e), E);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : z;
      }
    }), Te = nl($), ee = be({}, $, { dataTransfer: 0 }), ce = nl(ee), Pt = be({}, Ge, { relatedTarget: 0 }), Ce = nl(Pt), pi = be({}, le, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Av = nl(pi), qb = be({}, le, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Yb = nl(qb), _b = be({}, le, { data: 0 }), Dg = nl(
      _b
    ), Gb = Dg, Vb = {
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
    }, Xb = {
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
    }, jb = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, Qb = be({}, Ge, {
      key: function(e) {
        if (e.key) {
          var t = Vb[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = Vc(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xb[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ws,
      charCode: function(e) {
        return e.type === "keypress" ? Vc(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Vc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Zb = nl(Qb), Lb = be({}, $, {
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
    }), Og = nl(Lb), wb = be({}, Ge, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ws
    }), Jb = nl(wb), Kb = be({}, le, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), kb = nl(Kb), $b = be({}, $, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Wb = nl($b), Fb = be({}, le, {
      newState: 0,
      oldState: 0
    }), Ib = nl(Fb), Pb = [9, 13, 27, 32], Mg = 229, Rv = g && "CompositionEvent" in window, bm = null;
    g && "documentMode" in document && (bm = document.documentMode);
    var eS = g && "TextEvent" in window && !bm, Ug = g && (!Rv || bm && 8 < bm && 11 >= bm), Hg = 32, xg = String.fromCharCode(Hg), Cg = !1, Cd = !1, tS = {
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
    }, Sm = null, Tm = null, Ng = !1;
    g && (Ng = bh("input") && (!document.documentMode || 9 < document.documentMode));
    var da = typeof Object.is == "function" ? Object.is : fv, lS = g && "documentMode" in document && 11 >= document.documentMode, Nd = null, zv = null, Em = null, Dv = !1, Bd = {
      animationend: eu("Animation", "AnimationEnd"),
      animationiteration: eu("Animation", "AnimationIteration"),
      animationstart: eu("Animation", "AnimationStart"),
      transitionrun: eu("Transition", "TransitionRun"),
      transitionstart: eu("Transition", "TransitionStart"),
      transitioncancel: eu("Transition", "TransitionCancel"),
      transitionend: eu("Transition", "TransitionEnd")
    }, Ov = {}, Bg = {};
    g && (Bg = document.createElement("div").style, "AnimationEvent" in window || (delete Bd.animationend.animation, delete Bd.animationiteration.animation, delete Bd.animationstart.animation), "TransitionEvent" in window || delete Bd.transitionend.transition);
    var qg = Yi("animationend"), Yg = Yi("animationiteration"), _g = Yi("animationstart"), aS = Yi("transitionrun"), nS = Yi("transitionstart"), uS = Yi("transitioncancel"), Gg = Yi("transitionend"), Vg = /* @__PURE__ */ new Map(), Mv = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    Mv.push("scrollEnd");
    var Uv = /* @__PURE__ */ new WeakMap(), Hv = 1, bs = 2, _n = [], qd = 0, xv = 0, Bo = {};
    Object.freeze(Bo);
    var Gn = null, Yd = null, st = 0, iS = 1, Nl = 2, Pl = 8, Au = 16, Xg = 64, jg = !1;
    try {
      var Qg = Object.preventExtensions({});
    } catch {
      jg = !0;
    }
    var _d = [], Gd = 0, pp = null, vp = 0, Vn = [], Xn = 0, Ss = null, bc = 1, Sc = "", ha = null, Ct = null, Ve = !1, Tc = !1, jn = null, Ts = null, vi = !1, Cv = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Zg = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var cS = performance, Lg = function() {
        return cS.now();
      };
    else {
      var oS = Date;
      Lg = function() {
        return oS.now();
      };
    }
    var Nv = vt(null), Bv = vt(null), wg = {}, gp = null, Vd = null, Xd = !1, fS = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, sS = zt.unstable_scheduleCallback, rS = zt.unstable_NormalPriority, dl = {
      $$typeof: Ca,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, jd = zt.unstable_now, Jg = -0, bp = -0, qa = -1.1, Es = -0, Sp = !1, Tp = !1, Am = null, qv = 0, As = 0, Qd = null, Kg = x.S;
    x.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && D0(e, t), Kg !== null && Kg(e, t);
    };
    var Rs = vt(null), Ru = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Rm = [], zm = [], Dm = [], Om = [], Mm = [], Um = [], zs = /* @__PURE__ */ new Set();
    Ru.recordUnsafeLifecycleWarnings = function(e, t) {
      zs.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Rm.push(e), e.mode & Pl && typeof t.UNSAFE_componentWillMount == "function" && zm.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Dm.push(e), e.mode & Pl && typeof t.UNSAFE_componentWillReceiveProps == "function" && Om.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Mm.push(e), e.mode & Pl && typeof t.UNSAFE_componentWillUpdate == "function" && Um.push(e));
    }, Ru.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Rm.length && (Rm.forEach(function(h) {
        e.add(
          te(h) || "Component"
        ), zs.add(h.type);
      }), Rm = []);
      var t = /* @__PURE__ */ new Set();
      0 < zm.length && (zm.forEach(function(h) {
        t.add(
          te(h) || "Component"
        ), zs.add(h.type);
      }), zm = []);
      var a = /* @__PURE__ */ new Set();
      0 < Dm.length && (Dm.forEach(function(h) {
        a.add(
          te(h) || "Component"
        ), zs.add(h.type);
      }), Dm = []);
      var i = /* @__PURE__ */ new Set();
      0 < Om.length && (Om.forEach(
        function(h) {
          i.add(
            te(h) || "Component"
          ), zs.add(h.type);
        }
      ), Om = []);
      var o = /* @__PURE__ */ new Set();
      0 < Mm.length && (Mm.forEach(function(h) {
        o.add(
          te(h) || "Component"
        ), zs.add(h.type);
      }), Mm = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Um.length && (Um.forEach(function(h) {
        f.add(
          te(h) || "Component"
        ), zs.add(h.type);
      }), Um = []), 0 < t.size) {
        var d = Pe(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = Pe(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = Pe(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = Pe(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = Pe(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = Pe(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var Ep = /* @__PURE__ */ new Map(), kg = /* @__PURE__ */ new Set();
    Ru.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & Pl && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !kg.has(e.type) && (i = Ep.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ep.set(a, i)), i.push(e));
    }, Ru.flushLegacyContextWarning = function() {
      Ep.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(te(o) || "Component"), kg.add(o.type);
          });
          var i = Pe(a);
          W(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Ru.discardPendingWarnings = function() {
      Rm = [], zm = [], Dm = [], Om = [], Mm = [], Um = [], Ep = /* @__PURE__ */ new Map();
    };
    var Hm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), $g = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Ap = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), Yv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, xm = null, Rp = !1, Qn = 0, Zn = 1, ya = 2, Bl = 4, hl = 8, Wg = 0, Fg = 1, Ig = 2, _v = 3, qo = !1, Pg = !1, Gv = null, Vv = !1, Zd = vt(null), zp = vt(0), Ld, e1 = /* @__PURE__ */ new Set(), t1 = /* @__PURE__ */ new Set(), Xv = /* @__PURE__ */ new Set(), l1 = /* @__PURE__ */ new Set(), Yo = 0, re = null, tt = null, el = null, Dp = !1, wd = !1, Ds = !1, Op = 0, Cm = 0, Ec = null, dS = 0, hS = 25, N = null, Ln = null, Ac = -1, Nm = !1, Mp = {
      readContext: nt,
      use: hn,
      useCallback: ht,
      useContext: ht,
      useEffect: ht,
      useImperativeHandle: ht,
      useLayoutEffect: ht,
      useInsertionEffect: ht,
      useMemo: ht,
      useReducer: ht,
      useRef: ht,
      useState: ht,
      useDebugValue: ht,
      useDeferredValue: ht,
      useTransition: ht,
      useSyncExternalStore: ht,
      useId: ht,
      useHostTransitionStatus: ht,
      useFormState: ht,
      useActionState: ht,
      useOptimistic: ht,
      useMemoCache: ht,
      useCacheRefresh: ht
    }, jv = null, a1 = null, Qv = null, n1 = null, gi = null, zu = null, Up = null;
    jv = {
      readContext: function(e) {
        return nt(e);
      },
      use: hn,
      useCallback: function(e, t) {
        return N = "useCallback", Se(), Ea(t), zf(e, t);
      },
      useContext: function(e) {
        return N = "useContext", Se(), nt(e);
      },
      useEffect: function(e, t) {
        return N = "useEffect", Se(), Ea(t), sr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return N = "useImperativeHandle", Se(), Ea(a), dr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        N = "useInsertionEffect", Se(), Ea(t), Da(4, ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return N = "useLayoutEffect", Se(), Ea(t), rr(e, t);
      },
      useMemo: function(e, t) {
        N = "useMemo", Se(), Ea(t);
        var a = x.H;
        x.H = gi;
        try {
          return hr(e, t);
        } finally {
          x.H = a;
        }
      },
      useReducer: function(e, t, a) {
        N = "useReducer", Se();
        var i = x.H;
        x.H = gi;
        try {
          return Ne(e, t, a);
        } finally {
          x.H = i;
        }
      },
      useRef: function(e) {
        return N = "useRef", Se(), Rf(e);
      },
      useState: function(e) {
        N = "useState", Se();
        var t = x.H;
        x.H = gi;
        try {
          return uu(e);
        } finally {
          x.H = t;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", Se();
      },
      useDeferredValue: function(e, t) {
        return N = "useDeferredValue", Se(), yr(e, t);
      },
      useTransition: function() {
        return N = "useTransition", Se(), vn();
      },
      useSyncExternalStore: function(e, t, a) {
        return N = "useSyncExternalStore", Se(), nu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return N = "useId", Se(), gn();
      },
      useFormState: function(e, t) {
        return N = "useFormState", Se(), wc(), Fc(e, t);
      },
      useActionState: function(e, t) {
        return N = "useActionState", Se(), Fc(e, t);
      },
      useOptimistic: function(e) {
        return N = "useOptimistic", Se(), Ka(e);
      },
      useHostTransitionStatus: Zl,
      useMemoCache: Ht,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", Se(), ki();
      }
    }, a1 = {
      readContext: function(e) {
        return nt(e);
      },
      use: hn,
      useCallback: function(e, t) {
        return N = "useCallback", Q(), zf(e, t);
      },
      useContext: function(e) {
        return N = "useContext", Q(), nt(e);
      },
      useEffect: function(e, t) {
        return N = "useEffect", Q(), sr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return N = "useImperativeHandle", Q(), dr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        N = "useInsertionEffect", Q(), Da(4, ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return N = "useLayoutEffect", Q(), rr(e, t);
      },
      useMemo: function(e, t) {
        N = "useMemo", Q();
        var a = x.H;
        x.H = gi;
        try {
          return hr(e, t);
        } finally {
          x.H = a;
        }
      },
      useReducer: function(e, t, a) {
        N = "useReducer", Q();
        var i = x.H;
        x.H = gi;
        try {
          return Ne(e, t, a);
        } finally {
          x.H = i;
        }
      },
      useRef: function(e) {
        return N = "useRef", Q(), Rf(e);
      },
      useState: function(e) {
        N = "useState", Q();
        var t = x.H;
        x.H = gi;
        try {
          return uu(e);
        } finally {
          x.H = t;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return N = "useDeferredValue", Q(), yr(e, t);
      },
      useTransition: function() {
        return N = "useTransition", Q(), vn();
      },
      useSyncExternalStore: function(e, t, a) {
        return N = "useSyncExternalStore", Q(), nu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return N = "useId", Q(), gn();
      },
      useActionState: function(e, t) {
        return N = "useActionState", Q(), Fc(e, t);
      },
      useFormState: function(e, t) {
        return N = "useFormState", Q(), wc(), Fc(e, t);
      },
      useOptimistic: function(e) {
        return N = "useOptimistic", Q(), Ka(e);
      },
      useHostTransitionStatus: Zl,
      useMemoCache: Ht,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", Q(), ki();
      }
    }, Qv = {
      readContext: function(e) {
        return nt(e);
      },
      use: hn,
      useCallback: function(e, t) {
        return N = "useCallback", Q(), Ji(e, t);
      },
      useContext: function(e) {
        return N = "useContext", Q(), nt(e);
      },
      useEffect: function(e, t) {
        N = "useEffect", Q(), Vt(2048, hl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return N = "useImperativeHandle", Q(), pn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return N = "useInsertionEffect", Q(), Vt(4, ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return N = "useLayoutEffect", Q(), Vt(4, Bl, e, t);
      },
      useMemo: function(e, t) {
        N = "useMemo", Q();
        var a = x.H;
        x.H = zu;
        try {
          return $u(e, t);
        } finally {
          x.H = a;
        }
      },
      useReducer: function(e, t, a) {
        N = "useReducer", Q();
        var i = x.H;
        x.H = zu;
        try {
          return Ra(e, t, a);
        } finally {
          x.H = i;
        }
      },
      useRef: function() {
        return N = "useRef", Q(), He().memoizedState;
      },
      useState: function() {
        N = "useState", Q();
        var e = x.H;
        x.H = zu;
        try {
          return Ra(Ye);
        } finally {
          x.H = e;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return N = "useDeferredValue", Q(), Df(e, t);
      },
      useTransition: function() {
        return N = "useTransition", Q(), vr();
      },
      useSyncExternalStore: function(e, t, a) {
        return N = "useSyncExternalStore", Q(), Sf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return N = "useId", Q(), He().memoizedState;
      },
      useFormState: function(e) {
        return N = "useFormState", Q(), wc(), fr(e);
      },
      useActionState: function(e) {
        return N = "useActionState", Q(), fr(e);
      },
      useOptimistic: function(e, t) {
        return N = "useOptimistic", Q(), iu(e, t);
      },
      useHostTransitionStatus: Zl,
      useMemoCache: Ht,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", Q(), He().memoizedState;
      }
    }, n1 = {
      readContext: function(e) {
        return nt(e);
      },
      use: hn,
      useCallback: function(e, t) {
        return N = "useCallback", Q(), Ji(e, t);
      },
      useContext: function(e) {
        return N = "useContext", Q(), nt(e);
      },
      useEffect: function(e, t) {
        N = "useEffect", Q(), Vt(2048, hl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return N = "useImperativeHandle", Q(), pn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return N = "useInsertionEffect", Q(), Vt(4, ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return N = "useLayoutEffect", Q(), Vt(4, Bl, e, t);
      },
      useMemo: function(e, t) {
        N = "useMemo", Q();
        var a = x.H;
        x.H = Up;
        try {
          return $u(e, t);
        } finally {
          x.H = a;
        }
      },
      useReducer: function(e, t, a) {
        N = "useReducer", Q();
        var i = x.H;
        x.H = Up;
        try {
          return wi(e, t, a);
        } finally {
          x.H = i;
        }
      },
      useRef: function() {
        return N = "useRef", Q(), He().memoizedState;
      },
      useState: function() {
        N = "useState", Q();
        var e = x.H;
        x.H = Up;
        try {
          return wi(Ye);
        } finally {
          x.H = e;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return N = "useDeferredValue", Q(), mr(e, t);
      },
      useTransition: function() {
        return N = "useTransition", Q(), gr();
      },
      useSyncExternalStore: function(e, t, a) {
        return N = "useSyncExternalStore", Q(), Sf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return N = "useId", Q(), He().memoizedState;
      },
      useFormState: function(e) {
        return N = "useFormState", Q(), wc(), Ic(e);
      },
      useActionState: function(e) {
        return N = "useActionState", Q(), Ic(e);
      },
      useOptimistic: function(e, t) {
        return N = "useOptimistic", Q(), or(e, t);
      },
      useHostTransitionStatus: Zl,
      useMemoCache: Ht,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", Q(), He().memoizedState;
      }
    }, gi = {
      readContext: function(e) {
        return Ot(), nt(e);
      },
      use: function(e) {
        return J(), hn(e);
      },
      useCallback: function(e, t) {
        return N = "useCallback", J(), Se(), zf(e, t);
      },
      useContext: function(e) {
        return N = "useContext", J(), Se(), nt(e);
      },
      useEffect: function(e, t) {
        return N = "useEffect", J(), Se(), sr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return N = "useImperativeHandle", J(), Se(), dr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        N = "useInsertionEffect", J(), Se(), Da(4, ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return N = "useLayoutEffect", J(), Se(), rr(e, t);
      },
      useMemo: function(e, t) {
        N = "useMemo", J(), Se();
        var a = x.H;
        x.H = gi;
        try {
          return hr(e, t);
        } finally {
          x.H = a;
        }
      },
      useReducer: function(e, t, a) {
        N = "useReducer", J(), Se();
        var i = x.H;
        x.H = gi;
        try {
          return Ne(e, t, a);
        } finally {
          x.H = i;
        }
      },
      useRef: function(e) {
        return N = "useRef", J(), Se(), Rf(e);
      },
      useState: function(e) {
        N = "useState", J(), Se();
        var t = x.H;
        x.H = gi;
        try {
          return uu(e);
        } finally {
          x.H = t;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", J(), Se();
      },
      useDeferredValue: function(e, t) {
        return N = "useDeferredValue", J(), Se(), yr(e, t);
      },
      useTransition: function() {
        return N = "useTransition", J(), Se(), vn();
      },
      useSyncExternalStore: function(e, t, a) {
        return N = "useSyncExternalStore", J(), Se(), nu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return N = "useId", J(), Se(), gn();
      },
      useFormState: function(e, t) {
        return N = "useFormState", J(), Se(), Fc(e, t);
      },
      useActionState: function(e, t) {
        return N = "useActionState", J(), Se(), Fc(e, t);
      },
      useOptimistic: function(e) {
        return N = "useOptimistic", J(), Se(), Ka(e);
      },
      useMemoCache: function(e) {
        return J(), Ht(e);
      },
      useHostTransitionStatus: Zl,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", Se(), ki();
      }
    }, zu = {
      readContext: function(e) {
        return Ot(), nt(e);
      },
      use: function(e) {
        return J(), hn(e);
      },
      useCallback: function(e, t) {
        return N = "useCallback", J(), Q(), Ji(e, t);
      },
      useContext: function(e) {
        return N = "useContext", J(), Q(), nt(e);
      },
      useEffect: function(e, t) {
        N = "useEffect", J(), Q(), Vt(2048, hl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return N = "useImperativeHandle", J(), Q(), pn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return N = "useInsertionEffect", J(), Q(), Vt(4, ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return N = "useLayoutEffect", J(), Q(), Vt(4, Bl, e, t);
      },
      useMemo: function(e, t) {
        N = "useMemo", J(), Q();
        var a = x.H;
        x.H = zu;
        try {
          return $u(e, t);
        } finally {
          x.H = a;
        }
      },
      useReducer: function(e, t, a) {
        N = "useReducer", J(), Q();
        var i = x.H;
        x.H = zu;
        try {
          return Ra(e, t, a);
        } finally {
          x.H = i;
        }
      },
      useRef: function() {
        return N = "useRef", J(), Q(), He().memoizedState;
      },
      useState: function() {
        N = "useState", J(), Q();
        var e = x.H;
        x.H = zu;
        try {
          return Ra(Ye);
        } finally {
          x.H = e;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", J(), Q();
      },
      useDeferredValue: function(e, t) {
        return N = "useDeferredValue", J(), Q(), Df(e, t);
      },
      useTransition: function() {
        return N = "useTransition", J(), Q(), vr();
      },
      useSyncExternalStore: function(e, t, a) {
        return N = "useSyncExternalStore", J(), Q(), Sf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return N = "useId", J(), Q(), He().memoizedState;
      },
      useFormState: function(e) {
        return N = "useFormState", J(), Q(), fr(e);
      },
      useActionState: function(e) {
        return N = "useActionState", J(), Q(), fr(e);
      },
      useOptimistic: function(e, t) {
        return N = "useOptimistic", J(), Q(), iu(e, t);
      },
      useMemoCache: function(e) {
        return J(), Ht(e);
      },
      useHostTransitionStatus: Zl,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", Q(), He().memoizedState;
      }
    }, Up = {
      readContext: function(e) {
        return Ot(), nt(e);
      },
      use: function(e) {
        return J(), hn(e);
      },
      useCallback: function(e, t) {
        return N = "useCallback", J(), Q(), Ji(e, t);
      },
      useContext: function(e) {
        return N = "useContext", J(), Q(), nt(e);
      },
      useEffect: function(e, t) {
        N = "useEffect", J(), Q(), Vt(2048, hl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return N = "useImperativeHandle", J(), Q(), pn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return N = "useInsertionEffect", J(), Q(), Vt(4, ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return N = "useLayoutEffect", J(), Q(), Vt(4, Bl, e, t);
      },
      useMemo: function(e, t) {
        N = "useMemo", J(), Q();
        var a = x.H;
        x.H = zu;
        try {
          return $u(e, t);
        } finally {
          x.H = a;
        }
      },
      useReducer: function(e, t, a) {
        N = "useReducer", J(), Q();
        var i = x.H;
        x.H = zu;
        try {
          return wi(e, t, a);
        } finally {
          x.H = i;
        }
      },
      useRef: function() {
        return N = "useRef", J(), Q(), He().memoizedState;
      },
      useState: function() {
        N = "useState", J(), Q();
        var e = x.H;
        x.H = zu;
        try {
          return wi(Ye);
        } finally {
          x.H = e;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", J(), Q();
      },
      useDeferredValue: function(e, t) {
        return N = "useDeferredValue", J(), Q(), mr(e, t);
      },
      useTransition: function() {
        return N = "useTransition", J(), Q(), gr();
      },
      useSyncExternalStore: function(e, t, a) {
        return N = "useSyncExternalStore", J(), Q(), Sf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return N = "useId", J(), Q(), He().memoizedState;
      },
      useFormState: function(e) {
        return N = "useFormState", J(), Q(), Ic(e);
      },
      useActionState: function(e) {
        return N = "useActionState", J(), Q(), Ic(e);
      },
      useOptimistic: function(e, t) {
        return N = "useOptimistic", J(), Q(), or(e, t);
      },
      useMemoCache: function(e) {
        return J(), Ht(e);
      },
      useHostTransitionStatus: Zl,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", Q(), He().memoizedState;
      }
    };
    var u1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        var i = Il;
        Il = !0;
        try {
          return e(t, a);
        } finally {
          Il = i;
        }
      }
    }, Zv = u1["react-stack-bottom-frame"].bind(u1), i1 = {
      "react-stack-bottom-frame": function(e) {
        var t = Il;
        Il = !0;
        try {
          return e.render();
        } finally {
          Il = t;
        }
      }
    }, c1 = i1["react-stack-bottom-frame"].bind(i1), o1 = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          ie(e, e.return, a);
        }
      }
    }, Lv = o1["react-stack-bottom-frame"].bind(o1), f1 = {
      "react-stack-bottom-frame": function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          ie(e, e.return, f);
        }
      }
    }, s1 = f1["react-stack-bottom-frame"].bind(f1), r1 = {
      "react-stack-bottom-frame": function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, yS = r1["react-stack-bottom-frame"].bind(r1), d1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          ie(e, t, i);
        }
      }
    }, h1 = d1["react-stack-bottom-frame"].bind(d1), y1 = {
      "react-stack-bottom-frame": function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, mS = y1["react-stack-bottom-frame"].bind(y1), m1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a();
        } catch (i) {
          ie(e, t, i);
        }
      }
    }, pS = m1["react-stack-bottom-frame"].bind(m1), p1 = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, _o = p1["react-stack-bottom-frame"].bind(p1), Jd = null, Bm = 0, Ee = null, wv, v1 = wv = !1, g1 = {}, b1 = {}, S1 = {};
    Lt = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = te(e), o = i || "null";
        if (!g1[o]) {
          g1[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = te(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = te(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), W(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Kd = Hf(!0), T1 = Hf(!1), wn = vt(null), bi = null, kd = 1, qm = 2, yl = vt(0), E1 = {}, A1 = /* @__PURE__ */ new Set(), R1 = /* @__PURE__ */ new Set(), z1 = /* @__PURE__ */ new Set(), D1 = /* @__PURE__ */ new Set(), O1 = /* @__PURE__ */ new Set(), M1 = /* @__PURE__ */ new Set(), U1 = /* @__PURE__ */ new Set(), H1 = /* @__PURE__ */ new Set(), x1 = /* @__PURE__ */ new Set(), C1 = /* @__PURE__ */ new Set();
    Object.freeze(E1);
    var Jv = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = Jl(e), o = rn(i);
        o.payload = t, a != null && (Fh(a), o.callback = a), t = La(e, o, i), t !== null && (Tt(t, e, i), Lu(t, e, i)), Ei(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = Jl(e), o = rn(i);
        o.tag = Fg, o.payload = t, a != null && (Fh(a), o.callback = a), t = La(e, o, i), t !== null && (Tt(t, e, i), Lu(t, e, i)), Ei(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = Jl(e), i = rn(a);
        i.tag = Ig, t != null && (Fh(t), i.callback = t), t = La(e, i, a), t !== null && (Tt(t, e, a), Lu(t, e, a)), k !== null && typeof k.markForceUpdateScheduled == "function" && k.markForceUpdateScheduled(e, a);
      }
    }, Kv = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, $d = null, kv = null, N1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), El = !1, B1 = {}, q1 = {}, Y1 = {}, _1 = {}, Wd = !1, G1 = {}, $v = {}, Wv = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, V1 = !1, X1 = null;
    X1 = /* @__PURE__ */ new Set();
    var Rc = !1, Qt = !1, Fv = !1, j1 = typeof WeakSet == "function" ? WeakSet : Set, Al = null, Fd = null, Id = null, tl = null, Ya = !1, Du = null, Ym = 8192, vS = {
      getCacheForType: function(e) {
        var t = nt(dl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return ra;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var _m = Symbol.for;
      _m("selector.component"), _m("selector.has_pseudo_class"), _m("selector.role"), _m("selector.test_id"), _m("selector.text");
    }
    var gS = [], bS = typeof WeakMap == "function" ? WeakMap : Map, en = 0, ma = 2, Ou = 4, zc = 0, Gm = 1, Pd = 2, Iv = 3, Os = 4, Hp = 6, Q1 = 5, we = en, ut = null, Oe = null, Me = 0, _a = 0, Vm = 1, Ms = 2, Xm = 3, Z1 = 4, Pv = 5, eh = 6, jm = 7, eg = 8, Us = 9, $e = _a, tn = null, Go = !1, th = !1, tg = !1, Si = 0, Nt = zc, Vo = 0, Xo = 0, lg = 0, ln = 0, Hs = 0, Qm = null, pa = null, xp = !1, ag = 0, L1 = 300, Cp = 1 / 0, w1 = 500, Zm = null, jo = null, SS = 0, TS = 1, ES = 2, xs = 0, J1 = 1, K1 = 2, k1 = 3, AS = 4, ng = 5, ql = 0, Qo = null, lh = null, Zo = 0, ug = 0, ig = null, $1 = null, RS = 50, Lm = 0, cg = null, og = !1, Np = !1, zS = 50, Cs = 0, wm = null, ah = !1, Bp = null, W1 = !1, F1 = /* @__PURE__ */ new Set(), DS = {}, qp = null, nh = null, fg = !1, sg = !1, Yp = !1, rg = !1, Ns = 0, dg = {};
    (function() {
      for (var e = 0; e < Mv.length; e++) {
        var t = Mv[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Va(a, "on" + t);
      }
      Va(qg, "onAnimationEnd"), Va(Yg, "onAnimationIteration"), Va(_g, "onAnimationStart"), Va("dblclick", "onDoubleClick"), Va("focusin", "onFocus"), Va("focusout", "onBlur"), Va(aS, "onTransitionRun"), Va(nS, "onTransitionStart"), Va(uS, "onTransitionCancel"), Va(Gg, "onTransitionEnd");
    })(), Ri("onMouseEnter", ["mouseout", "mouseover"]), Ri("onMouseLeave", ["mouseout", "mouseover"]), Ri("onPointerEnter", ["pointerout", "pointerover"]), Ri("onPointerLeave", ["pointerout", "pointerover"]), Hu(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), Hu(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), Hu("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Hu(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), Hu(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), Hu(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var Jm = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), hg = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jm)
    ), _p = "_reactListening" + Math.random().toString(36).slice(2), I1 = !1, P1 = !1, Gp = !1, eb = !1, Vp = !1, Xp = !1, tb = !1, jp = {}, OS = /\r\n?/g, MS = /\u0000|\uFFFD/g, Bs = "http://www.w3.org/1999/xlink", yg = "http://www.w3.org/XML/1998/namespace", US = "javascript:throw new Error('React form unexpectedly submitted.')", HS = "suppressHydrationWarning", Qp = "$", Zp = "/$", Dc = "$?", Km = "$!", xS = 1, CS = 2, NS = 4, mg = "F!", lb = "F", ab = "complete", BS = "style", Oc = 0, uh = 1, Lp = 2, pg = null, vg = null, nb = { dialog: !0, webview: !0 }, gg = null, ub = typeof setTimeout == "function" ? setTimeout : void 0, qS = typeof clearTimeout == "function" ? clearTimeout : void 0, qs = -1, ib = typeof Promise == "function" ? Promise : void 0, YS = typeof queueMicrotask == "function" ? queueMicrotask : typeof ib < "u" ? function(e) {
      return ib.resolve(null).then(e).catch(_y);
    } : ub, bg = null, Ys = 0, km = 1, cb = 2, ob = 3, Jn = 4, Kn = /* @__PURE__ */ new Map(), fb = /* @__PURE__ */ new Set(), Mc = oe.d;
    oe.d = {
      f: function() {
        var e = Mc.f(), t = nc();
        return e || t;
      },
      r: function(e) {
        var t = ta(e);
        t !== null && t.tag === 5 && t.type === "form" ? kh(t) : Mc.r(e);
      },
      D: function(e) {
        Mc.D(e), k0("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Mc.C(e, t), k0("preconnect", e, t);
      },
      L: function(e, t, a) {
        Mc.L(e, t, a);
        var i = ih;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + la(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + la(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + la(
            a.imageSizes
          ) + '"]')) : o += '[href="' + la(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = ui(e);
              break;
            case "script":
              f = rc(e);
          }
          Kn.has(f) || (e = be(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), Kn.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            Cn(f)
          ) || t === "script" && i.querySelector(dc(f)) || (t = i.createElement("link"), At(t, "link", e), Kt(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Mc.m(e, t);
        var a = ih;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + la(i) + '"][href="' + la(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = rc(e);
          }
          if (!Kn.has(f) && (e = be({ rel: "modulepreload", href: e }, t), Kn.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(dc(f)))
                  return;
            }
            i = a.createElement("link"), At(i, "link", e), Kt(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        Mc.X(e, t);
        var a = ih;
        if (a && e) {
          var i = an(a).hoistableScripts, o = rc(e), f = i.get(o);
          f || (f = a.querySelector(
            dc(o)
          ), f || (e = be({ src: e, async: !0 }, t), (t = Kn.get(o)) && wy(e, t), f = a.createElement("script"), Kt(f), At(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        Mc.S(e, t, a);
        var i = ih;
        if (i && e) {
          var o = an(i).hoistableStyles, f = ui(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Ys, preload: null };
            if (d = i.querySelector(
              Cn(f)
            ))
              h.loading = km | Jn;
            else {
              e = be(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = Kn.get(f)) && Ly(e, a);
              var p = d = i.createElement("link");
              Kt(p), At(p, "link", e), p._p = new Promise(function(v, U) {
                p.onload = v, p.onerror = U;
              }), p.addEventListener("load", function() {
                h.loading |= km;
              }), p.addEventListener("error", function() {
                h.loading |= cb;
              }), h.loading |= Jn, fd(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        Mc.M(e, t);
        var a = ih;
        if (a && e) {
          var i = an(a).hoistableScripts, o = rc(e), f = i.get(o);
          f || (f = a.querySelector(
            dc(o)
          ), f || (e = be({ src: e, async: !0, type: "module" }, t), (t = Kn.get(o)) && wy(e, t), f = a.createElement("script"), Kt(f), At(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var ih = typeof document > "u" ? null : document, wp = null, $m = null, Sg = null, Jp = null, _s = vv, Wm = {
      $$typeof: Ca,
      Provider: null,
      Consumer: null,
      _currentValue: _s,
      _currentValue2: _s,
      _threadCount: 0
    }, sb = "%c%s%c ", rb = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", db = "", Kp = " ", _S = Function.prototype.bind, hb = !1, yb = null, mb = null, pb = null, vb = null, gb = null, bb = null, Sb = null, Tb = null, Eb = null;
    yb = function(e, t, a, i) {
      t = L(e, t), t !== null && (a = lt(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = be({}, e.memoizedProps), a = Vl(e, 2), a !== null && Tt(a, e, 2));
    }, mb = function(e, t, a) {
      t = L(e, t), t !== null && (a = Je(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = be({}, e.memoizedProps), a = Vl(e, 2), a !== null && Tt(a, e, 2));
    }, pb = function(e, t, a, i) {
      t = L(e, t), t !== null && (a = at(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = be({}, e.memoizedProps), a = Vl(e, 2), a !== null && Tt(a, e, 2));
    }, vb = function(e, t, a) {
      e.pendingProps = lt(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Vl(e, 2), t !== null && Tt(t, e, 2);
    }, gb = function(e, t) {
      e.pendingProps = Je(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Vl(e, 2), t !== null && Tt(t, e, 2);
    }, bb = function(e, t, a) {
      e.pendingProps = at(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Vl(e, 2), t !== null && Tt(t, e, 2);
    }, Sb = function(e) {
      var t = Vl(e, 2);
      t !== null && Tt(t, e, 2);
    }, Tb = function(e) {
      Bt = e;
    }, Eb = function(e) {
      Ie = e;
    };
    var kp = !0, $p = null, Tg = !1, Lo = null, wo = null, Jo = null, Fm = /* @__PURE__ */ new Map(), Im = /* @__PURE__ */ new Map(), Ko = [], GS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Wp = null;
    if (as.prototype.render = md.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : ct(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = Jl(i);
      Le(i, o, a, t, null, null);
    }, as.prototype.unmount = md.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (we & (ma | Ou)) !== en && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), Le(e.current, 2, null, e, null, null), nc(), t[hi] = null;
      }
    }, as.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = u0();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < Ko.length && t !== 0 && t < Ko[a].priority; a++) ;
        Ko.splice(a, 0, e), a === 0 && ep(e);
      }
    }, function() {
      var e = ns.version;
      if (e !== "19.1.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), oe.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = ml(t), e = e !== null ? _l(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: x,
        reconcilerVersion: "19.1.0"
      };
      return e.overrideHookState = yb, e.overrideHookStateDeletePath = mb, e.overrideHookStateRenamePath = pb, e.overrideProps = vb, e.overridePropsDeletePath = gb, e.overridePropsRenamePath = bb, e.scheduleUpdate = Sb, e.setErrorHandler = Tb, e.setSuspenseHandler = Eb, e.scheduleRefresh = dt, e.scheduleRoot = pt, e.setRefreshHandler = Yl, e.getCurrentFiber = hv, e.getLaneLabelMap = yv, e.injectProfilingHooks = Mu, et(e);
    }() && g && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var Ab = window.location.protocol;
      /^(https?|file):$/.test(Ab) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (Ab === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    l0.createRoot = function(e, t) {
      if (!ct(e))
        throw Error("Target container is not a DOM element.");
      ap(e);
      var a = !1, i = "", o = Ih, f = C0, d = Er, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === oi && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = ky(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        o,
        f,
        d,
        h,
        null
      ), e[hi] = t.current, Hy(e), new md(t);
    }, l0.hydrateRoot = function(e, t, a) {
      if (!ct(e))
        throw Error("Target container is not a DOM element.");
      ap(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Ih, d = C0, h = Er, p = null, v = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (p = a.unstable_transitionCallbacks), a.formState !== void 0 && (v = a.formState)), t = ky(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        f,
        d,
        h,
        p,
        v
      ), t.context = $y(null), a = t.current, i = Jl(a), i = zl(i), o = rn(i), o.callback = null, La(a, o, i), a = i, t.current.lanes = a, Hc(t, a), Ua(t), e[hi] = t.current, Hy(e), new as(t);
    }, l0.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), l0;
}
var Cb;
function $S() {
  if (Cb) return Ip.exports;
  Cb = 1;
  function L() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L);
      } catch (lt) {
        console.error(lt);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (L(), Ip.exports = KS()) : Ip.exports = kS(), Ip.exports;
}
var WS = $S();
const FS = /* @__PURE__ */ jS(WS), IS = ({ userId: L }) => {
  const [lt, at] = Eg(null), [q, Je] = Eg(""), [Ie, Bt] = Eg(!0);
  return XS(() => {
    (async () => {
      try {
        const Ot = await (await fetch(
          `https://jsonplaceholder.typicode.com/users/${L}`
        )).json();
        at(Ot);
      } catch (J) {
        console.error("Error al obtener datos", J);
      } finally {
        Bt(!1);
      }
    })();
  }, [L]), Ie ? /* @__PURE__ */ ko.jsx("p", { children: "Cargando..." }) : lt ? /* @__PURE__ */ ko.jsxs("div", { children: [
    /* @__PURE__ */ ko.jsx("h2", { children: lt.name }),
    /* @__PURE__ */ ko.jsxs("p", { children: [
      "Email: ",
      lt.email
    ] }),
    /* @__PURE__ */ ko.jsxs("p", { children: [
      "Name edited: ",
      q
    ] }),
    /* @__PURE__ */ ko.jsx(
      "input",
      {
        type: "text",
        placeholder: "Ingresa tu nombre",
        onChange: (Lt) => Je(Lt.target.value)
      }
    )
  ] }) : /* @__PURE__ */ ko.jsx("p", { children: "No se encontró usuario" });
};
class PS extends HTMLElement {
  static get observedAttributes() {
    return ["userid"];
  }
  constructor() {
    super(), this._root = this.attachShadow({ mode: "open" }), this._reactRoot = null;
  }
  connectedCallback() {
    this.renderReact();
  }
  attributeChangedCallback() {
    this.renderReact();
  }
  renderReact() {
    const lt = this.getAttribute("userid") || "1";
    this._reactRoot || (this._reactRoot = FS.createRoot(this._root)), this._reactRoot.render(/* @__PURE__ */ ko.jsx(IS, { userId: lt }));
  }
}
customElements.define("my-web-component", PS);
