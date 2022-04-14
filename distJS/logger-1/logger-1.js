this._LRLogger = function (e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    return r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function (t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 83)
}([function (e, t) {
    e.exports = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function (e, t, r) {
    "use strict";
    r.r(t), r.d(t, "render", (function () {
        return M
    })), r.d(t, "hydrate", (function () {
        return U
    })), r.d(t, "createElement", (function () {
        return h
    })), r.d(t, "h", (function () {
        return h
    })), r.d(t, "Fragment", (function () {
        return v
    })), r.d(t, "createRef", (function () {
        return g
    })), r.d(t, "isValidElement", (function () {
        return o
    })), r.d(t, "Component", (function () {
        return m
    })), r.d(t, "cloneElement", (function () {
        return F
    })), r.d(t, "createContext", (function () {
        return B
    })), r.d(t, "toChildArray", (function () {
        return S
    })), r.d(t, "options", (function () {
        return n
    }));
    var n, o, i, a, s, u, c = {},
        l = [],
        f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function d(e, t) {
        for (var r in t) e[r] = t[r];
        return e
    }

    function p(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function h(e, t, r) {
        var n, o, i, a = arguments,
            s = {};
        for (i in t) "key" == i ? n = t[i] : "ref" == i ? o = t[i] : s[i] = t[i];
        if (arguments.length > 3)
            for (r = [r], i = 3; i < arguments.length; i++) r.push(a[i]);
        if (null != r && (s.children = r), "function" == typeof e && null != e.defaultProps)
            for (i in e.defaultProps) void 0 === s[i] && (s[i] = e.defaultProps[i]);
        return y(e, s, n, o, null)
    }

    function y(e, t, r, o, i) {
        var a = {
            type: e,
            props: t,
            key: r,
            ref: o,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == i ? ++n.__v : i
        };
        return null != n.vnode && n.vnode(a), a
    }

    function g() {
        return {
            current: null
        }
    }

    function v(e) {
        return e.children
    }

    function m(e, t) {
        this.props = e, this.context = t
    }

    function b(e, t) {
        if (null == t) return e.__ ? b(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var r; t < e.__k.length; t++)
            if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
        return "function" == typeof e.type ? b(e) : null
    }

    function w(e) {
        var t, r;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (r = e.__k[t]) && null != r.__e) {
                    e.__e = e.__c.base = r.__e;
                    break
                } return w(e)
        }
    }

    function _(e) {
        (!e.__d && (e.__d = !0) && i.push(e) && !O.__r++ || s !== n.debounceRendering) && ((s = n.debounceRendering) || a)(O)
    }

    function O() {
        for (var e; O.__r = i.length;) e = i.sort((function (e, t) {
            return e.__v.__b - t.__v.__b
        })), i = [], e.some((function (e) {
            var t, r, n, o, i, a;
            e.__d && (i = (o = (t = e).__v).__e, (a = t.__P) && (r = [], (n = d({}, o)).__v = o.__v + 1, N(a, o, n, t.__n, void 0 !== a.ownerSVGElement, null != o.__h ? [i] : null, r, null == i ? b(o) : i, o.__h), D(r, o), o.__e != i && w(o)))
        }))
    }

    function I(e, t, r, n, o, i, a, s, u, f) {
        var d, p, h, g, m, w, _, O = n && n.__k || l,
            I = O.length;
        for (r.__k = [], d = 0; d < t.length; d++)
            if (null != (g = r.__k[d] = null == (g = t[d]) || "boolean" == typeof g ? null : "string" == typeof g || "number" == typeof g ? y(null, g, null, null, g) : Array.isArray(g) ? y(v, {
                    children: g
                }, null, null, null) : g.__b > 0 ? y(g.type, g.props, g.key, null, g.__v) : g)) {
                if (g.__ = r, g.__b = r.__b + 1, null === (h = O[d]) || h && g.key == h.key && g.type === h.type) O[d] = void 0;
                else
                    for (p = 0; p < I; p++) {
                        if ((h = O[p]) && g.key == h.key && g.type === h.type) {
                            O[p] = void 0;
                            break
                        }
                        h = null
                    }
                N(e, g, h = h || c, o, i, a, s, u, f), m = g.__e, (p = g.ref) && h.ref != p && (_ || (_ = []), h.ref && _.push(h.ref, null, g), _.push(p, g.__c || m, g)), null != m ? (null == w && (w = m), "function" == typeof g.type && null != g.__k && g.__k === h.__k ? g.__d = u = E(g, u, e) : u = P(e, g, h, O, m, u), f || "option" !== r.type ? "function" == typeof r.type && (r.__d = u) : e.value = "") : u && h.__e == u && u.parentNode != e && (u = b(h))
            } for (r.__e = w, d = I; d--;) null != O[d] && ("function" == typeof r.type && null != O[d].__e && O[d].__e == r.__d && (r.__d = b(n, d + 1)), C(O[d], O[d]));
        if (_)
            for (d = 0; d < _.length; d++) R(_[d], _[++d], _[++d])
    }

    function E(e, t, r) {
        var n, o;
        for (n = 0; n < e.__k.length; n++)(o = e.__k[n]) && (o.__ = e, t = "function" == typeof o.type ? E(o, t, r) : P(r, o, o, e.__k, o.__e, t));
        return t
    }

    function S(e, t) {
        return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function (e) {
            S(e, t)
        })) : t.push(e)), t
    }

    function P(e, t, r, n, o, i) {
        var a, s, u;
        if (void 0 !== t.__d) a = t.__d, t.__d = void 0;
        else if (null == r || o != i || null == o.parentNode) e: if (null == i || i.parentNode !== e) e.appendChild(o), a = null;
            else {
                for (s = i, u = 0;
                    (s = s.nextSibling) && u < n.length; u += 2)
                    if (s == o) break e;
                e.insertBefore(o, i), a = i
            } return void 0 !== a ? a : o.nextSibling
    }

    function x(e, t, r) {
        "-" === t[0] ? e.setProperty(t, r) : e[t] = null == r ? "" : "number" != typeof r || f.test(t) ? r : r + "px"
    }

    function T(e, t, r, n, o) {
        var i;
        e: if ("style" === t)
            if ("string" == typeof r) e.style.cssText = r;
            else {
                if ("string" == typeof n && (e.style.cssText = n = ""), n)
                    for (t in n) r && t in r || x(e.style, t, "");
                if (r)
                    for (t in r) n && r[t] === n[t] || x(e.style, t, r[t])
            }
        else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = r, r ? n || e.addEventListener(t, i ? k : j, i) : e.removeEventListener(t, i ? k : j, i);
        else if ("dangerouslySetInnerHTML" !== t) {
            if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
            else if ("href" !== t && "list" !== t && "form" !== t && "download" !== t && t in e) try {
                e[t] = null == r ? "" : r;
                break e
            } catch (e) {}
            "function" == typeof r || (null != r && (!1 !== r || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, r) : e.removeAttribute(t))
        }
    }

    function j(e) {
        this.l[e.type + !1](n.event ? n.event(e) : e)
    }

    function k(e) {
        this.l[e.type + !0](n.event ? n.event(e) : e)
    }

    function N(e, t, r, o, i, a, s, u, c) {
        var l, f, p, h, y, g, b, w, _, O, E, S = t.type;
        if (void 0 !== t.constructor) return null;
        null != r.__h && (c = r.__h, u = t.__e = r.__e, t.__h = null, a = [u]), (l = n.__b) && l(t);
        try {
            e: if ("function" == typeof S) {
                if (w = t.props, _ = (l = S.contextType) && o[l.__c], O = l ? _ ? _.props.value : l.__ : o, r.__c ? b = (f = t.__c = r.__c).__ = f.__E : ("prototype" in S && S.prototype.render ? t.__c = f = new S(w, O) : (t.__c = f = new m(w, O), f.constructor = S, f.render = L), _ && _.sub(f), f.props = w, f.state || (f.state = {}), f.context = O, f.__n = o, p = f.__d = !0, f.__h = []), null == f.__s && (f.__s = f.state), null != S.getDerivedStateFromProps && (f.__s == f.state && (f.__s = d({}, f.__s)), d(f.__s, S.getDerivedStateFromProps(w, f.__s))), h = f.props, y = f.state, p) null == S.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(), null != f.componentDidMount && f.__h.push(f.componentDidMount);
                else {
                    if (null == S.getDerivedStateFromProps && w !== h && null != f.componentWillReceiveProps && f.componentWillReceiveProps(w, O), !f.__e && null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(w, f.__s, O) || t.__v === r.__v) {
                        f.props = w, f.state = f.__s, t.__v !== r.__v && (f.__d = !1), f.__v = t, t.__e = r.__e, t.__k = r.__k, f.__h.length && s.push(f);
                        break e
                    }
                    null != f.componentWillUpdate && f.componentWillUpdate(w, f.__s, O), null != f.componentDidUpdate && f.__h.push((function () {
                        f.componentDidUpdate(h, y, g)
                    }))
                }
                f.context = O, f.props = w, f.state = f.__s, (l = n.__r) && l(t), f.__d = !1, f.__v = t, f.__P = e, l = f.render(f.props, f.state, f.context), f.state = f.__s, null != f.getChildContext && (o = d(d({}, o), f.getChildContext())), p || null == f.getSnapshotBeforeUpdate || (g = f.getSnapshotBeforeUpdate(h, y)), E = null != l && l.type === v && null == l.key ? l.props.children : l, I(e, Array.isArray(E) ? E : [E], t, r, o, i, a, s, u, c), f.base = t.__e, t.__h = null, f.__h.length && s.push(f), b && (f.__E = f.__ = null), f.__e = !1
            } else null == a && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = A(r.__e, t, r, o, i, a, s, c);
            (l = n.diffed) && l(t)
        }
        catch (e) {
            t.__v = null, (c || null != a) && (t.__e = u, t.__h = !!c, a[a.indexOf(u)] = null), n.__e(e, t, r)
        }
    }

    function D(e, t) {
        n.__c && n.__c(t, e), e.some((function (t) {
            try {
                e = t.__h, t.__h = [], e.some((function (e) {
                    e.call(t)
                }))
            } catch (e) {
                n.__e(e, t.__v)
            }
        }))
    }

    function A(e, t, r, n, o, i, a, s) {
        var u, f, d, h, y = r.props,
            g = t.props,
            v = t.type,
            m = 0;
        if ("svg" === v && (o = !0), null != i)
            for (; m < i.length; m++)
                if ((u = i[m]) && (u === e || (v ? u.localName == v : 3 == u.nodeType))) {
                    e = u, i[m] = null;
                    break
                } if (null == e) {
            if (null === v) return document.createTextNode(g);
            e = o ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, g.is && g), i = null, s = !1
        }
        if (null === v) y === g || s && e.data === g || (e.data = g);
        else {
            if (i = i && l.slice.call(e.childNodes), f = (y = r.props || c).dangerouslySetInnerHTML, d = g.dangerouslySetInnerHTML, !s) {
                if (null != i)
                    for (y = {}, h = 0; h < e.attributes.length; h++) y[e.attributes[h].name] = e.attributes[h].value;
                (d || f) && (d && (f && d.__html == f.__html || d.__html === e.innerHTML) || (e.innerHTML = d && d.__html || ""))
            }
            if (function (e, t, r, n, o) {
                    var i;
                    for (i in r) "children" === i || "key" === i || i in t || T(e, i, null, r[i], n);
                    for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || r[i] === t[i] || T(e, i, t[i], r[i], n)
                }(e, g, y, o, s), d) t.__k = [];
            else if (m = t.props.children, I(e, Array.isArray(m) ? m : [m], t, r, n, o && "foreignObject" !== v, i, a, e.firstChild, s), null != i)
                for (m = i.length; m--;) null != i[m] && p(i[m]);
            s || ("value" in g && void 0 !== (m = g.value) && (m !== e.value || "progress" === v && !m) && T(e, "value", m, y.value, !1), "checked" in g && void 0 !== (m = g.checked) && m !== e.checked && T(e, "checked", m, y.checked, !1))
        }
        return e
    }

    function R(e, t, r) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            n.__e(e, r)
        }
    }

    function C(e, t, r) {
        var o, i, a;
        if (n.unmount && n.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || R(o, null, t)), r || "function" == typeof e.type || (r = null != (i = e.__e)), e.__e = e.__d = void 0, null != (o = e.__c)) {
            if (o.componentWillUnmount) try {
                o.componentWillUnmount()
            } catch (e) {
                n.__e(e, t)
            }
            o.base = o.__P = null
        }
        if (o = e.__k)
            for (a = 0; a < o.length; a++) o[a] && C(o[a], t, r);
        null != i && p(i)
    }

    function L(e, t, r) {
        return this.constructor(e, r)
    }

    function M(e, t, r) {
        var o, i, a;
        n.__ && n.__(e, t), i = (o = "function" == typeof r) ? null : r && r.__k || t.__k, a = [], N(t, e = (!o && r || t).__k = h(v, null, [e]), i || c, c, void 0 !== t.ownerSVGElement, !o && r ? [r] : i ? null : t.firstChild ? l.slice.call(t.childNodes) : null, a, !o && r ? r : i ? i.__e : t.firstChild, o), D(a, e)
    }

    function U(e, t) {
        M(e, t, U)
    }

    function F(e, t, r) {
        var n, o, i, a = arguments,
            s = d({}, e.props);
        for (i in t) "key" == i ? n = t[i] : "ref" == i ? o = t[i] : s[i] = t[i];
        if (arguments.length > 3)
            for (r = [r], i = 3; i < arguments.length; i++) r.push(a[i]);
        return null != r && (s.children = r), y(e.type, s, n || e.key, o || e.ref, null)
    }

    function B(e, t) {
        var r = {
            __c: t = "__cC" + u++,
            __: e,
            Consumer: function (e, t) {
                return e.children(t)
            },
            Provider: function (e) {
                var r, n;
                return this.getChildContext || (r = [], (n = {})[t] = this, this.getChildContext = function () {
                    return n
                }, this.shouldComponentUpdate = function (e) {
                    this.props.value !== e.value && r.some(_)
                }, this.sub = function (e) {
                    r.push(e);
                    var t = e.componentWillUnmount;
                    e.componentWillUnmount = function () {
                        r.splice(r.indexOf(e), 1), t && t.call(e)
                    }
                }), e.children
            }
        };
        return r.Provider.__ = r.Consumer.contextType = r
    }
    n = {
        __e: function (e, t) {
            for (var r, n, o; t = t.__;)
                if ((r = t.__c) && !r.__) try {
                    if ((n = r.constructor) && null != n.getDerivedStateFromError && (r.setState(n.getDerivedStateFromError(e)), o = r.__d), null != r.componentDidCatch && (r.componentDidCatch(e), o = r.__d), o) return r.__E = r
                } catch (t) {
                    e = t
                }
            throw e
        },
        __v: 0
    }, o = function (e) {
        return null != e && void 0 === e.constructor
    }, m.prototype.setState = function (e, t) {
        var r;
        r = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof e && (e = e(d({}, r), this.props)), e && d(r, e), null != e && this.__v && (t && this.__h.push(t), _(this))
    }, m.prototype.forceUpdate = function (e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), _(this))
    }, m.prototype.render = v, i = [], a = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, O.__r = 0, u = 0
}, function (e, t, r) {
    "use strict";
    var n = r(8),
        o = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "enhanceFunc", {
        enumerable: !0,
        get: function () {
            return i.default
        }
    }), Object.defineProperty(t, "shallowArsonify", {
        enumerable: !0,
        get: function () {
            return a.default
        }
    }), Object.defineProperty(t, "shallowDearsonify", {
        enumerable: !0,
        get: function () {
            return s.default
        }
    }), Object.defineProperty(t, "deepArsonify", {
        enumerable: !0,
        get: function () {
            return u.default
        }
    }), Object.defineProperty(t, "deepDearsonify", {
        enumerable: !0,
        get: function () {
            return c.default
        }
    }), Object.defineProperty(t, "addListener", {
        enumerable: !0,
        get: function () {
            return l.default
        }
    }), Object.defineProperty(t, "protectFunc", {
        enumerable: !0,
        get: function () {
            return f.default
        }
    }), Object.defineProperty(t, "findIndex", {
        enumerable: !0,
        get: function () {
            return d.default
        }
    }), Object.defineProperty(t, "find", {
        enumerable: !0,
        get: function () {
            return p.default
        }
    }), Object.defineProperty(t, "flatten", {
        enumerable: !0,
        get: function () {
            return h.default
        }
    }), Object.defineProperty(t, "selectorMatches", {
        enumerable: !0,
        get: function () {
            return y.default
        }
    }), Object.defineProperty(t, "parseSelectorForMatch", {
        enumerable: !0,
        get: function () {
            return g.default
        }
    }), Object.defineProperty(t, "parseSelectorForSearch", {
        enumerable: !0,
        get: function () {
            return v.default
        }
    }), Object.defineProperty(t, "caseInsensitiveQuerySelector", {
        enumerable: !0,
        get: function () {
            return m.default
        }
    }), Object.defineProperty(t, "sendErrorTelemetry", {
        enumerable: !0,
        get: function () {
            return b.default
        }
    }), Object.defineProperty(t, "sendTelemetry", {
        enumerable: !0,
        get: function () {
            return b.sendTelemetry
        }
    }), Object.defineProperty(t, "sanitizeValue", {
        enumerable: !0,
        get: function () {
            return w.default
        }
    }), Object.defineProperty(t, "startsWith", {
        enumerable: !0,
        get: function () {
            return _.default
        }
    }), Object.defineProperty(t, "endsWith", {
        enumerable: !0,
        get: function () {
            return O.default
        }
    }), Object.defineProperty(t, "contains", {
        enumerable: !0,
        get: function () {
            return I.default
        }
    }), Object.defineProperty(t, "uuid", {
        enumerable: !0,
        get: function () {
            return E.default
        }
    }), Object.defineProperty(t, "randomInt", {
        enumerable: !0,
        get: function () {
            return S.default
        }
    }), Object.defineProperty(t, "getNodeSelector", {
        enumerable: !0,
        get: function () {
            return P.default
        }
    }), Object.defineProperty(t, "getGraphQLOperation", {
        enumerable: !0,
        get: function () {
            return x.default
        }
    }), Object.defineProperty(t, "isSessionEvent", {
        enumerable: !0,
        get: function () {
            return T.default
        }
    }), Object.defineProperty(t, "isActivityEvent", {
        enumerable: !0,
        get: function () {
            return j.default
        }
    }), Object.defineProperty(t, "parseIntFromHex", {
        enumerable: !0,
        get: function () {
            return k.default
        }
    }), Object.defineProperty(t, "isRecordingSampled", {
        enumerable: !0,
        get: function () {
            return N.default
        }
    }), Object.defineProperty(t, "makeRecordingID", {
        enumerable: !0,
        get: function () {
            return D.default
        }
    }), Object.defineProperty(t, "setFromArray", {
        enumerable: !0,
        get: function () {
            return A.default
        }
    }), Object.defineProperty(t, "setToArray", {
        enumerable: !0,
        get: function () {
            return R.default
        }
    }), Object.defineProperty(t, "applyUrlSanitizer", {
        enumerable: !0,
        get: function () {
            return C.default
        }
    }), Object.defineProperty(t, "getMockDeveloperUser", {
        enumerable: !0,
        get: function () {
            return L.default
        }
    }), Object.defineProperty(t, "isDemoOrg", {
        enumerable: !0,
        get: function () {
            return M.default
        }
    }), Object.defineProperty(t, "LOG_FILTER_LABELS", {
        enumerable: !0,
        get: function () {
            return U.LOG_FILTER_LABELS
        }
    }), Object.defineProperty(t, "LOG_FILTER_TYPES", {
        enumerable: !0,
        get: function () {
            return U.LOG_FILTER_TYPES
        }
    }), Object.defineProperty(t, "LOG_TYPES", {
        enumerable: !0,
        get: function () {
            return U.LOG_TYPES
        }
    }), Object.defineProperty(t, "METRIC_TIMESERIES_TYPE", {
        enumerable: !0,
        get: function () {
            return F.METRIC_TIMESERIES_TYPE
        }
    }), Object.defineProperty(t, "HEATMAP_FOR_URL_OPERATOR", {
        enumerable: !0,
        get: function () {
            return F.HEATMAP_FOR_URL_OPERATOR
        }
    }), Object.defineProperty(t, "DEFAULT_HEATMAP_FOR_URL_OPERATOR", {
        enumerable: !0,
        get: function () {
            return F.DEFAULT_HEATMAP_FOR_URL_OPERATOR
        }
    }), Object.defineProperty(t, "ISSUE_TYPE", {
        enumerable: !0,
        get: function () {
            return B.ISSUE_TYPE
        }
    }), Object.defineProperty(t, "ISSUE_GROUP_TYPE", {
        enumerable: !0,
        get: function () {
            return B.ISSUE_GROUP_TYPE
        }
    }), Object.defineProperty(t, "findKeyFrames", {
        enumerable: !0,
        get: function () {
            return V.default
        }
    }), Object.defineProperty(t, "interpolate", {
        enumerable: !0,
        get: function () {
            return G.default
        }
    }), Object.defineProperty(t, "interpolateMobile", {
        enumerable: !0,
        get: function () {
            return G.interpolateMobile
        }
    }), Object.defineProperty(t, "removeOutdated", {
        enumerable: !0,
        get: function () {
            return H.default
        }
    }), Object.defineProperty(t, "DEMO_ORG_SLUG", {
        enumerable: !0,
        get: function () {
            return q.DEMO_ORG_SLUG
        }
    }), Object.defineProperty(t, "DEMO_APP_SLUG", {
        enumerable: !0,
        get: function () {
            return q.DEMO_APP_SLUG
        }
    }), Object.defineProperty(t, "DEMO_APP_ID", {
        enumerable: !0,
        get: function () {
            return q.DEMO_APP_ID
        }
    }), Object.defineProperty(t, "knownMetricTypes", {
        enumerable: !0,
        get: function () {
            return z.knownMetricTypes
        }
    }), Object.defineProperty(t, "DELIGHTED_RESPONSES_REGEX", {
        enumerable: !0,
        get: function () {
            return Y.DELIGHTED_RESPONSES_REGEX
        }
    }), Object.defineProperty(t, "WOOTRIC_RESPONSES_REGEX", {
        enumerable: !0,
        get: function () {
            return Y.WOOTRIC_RESPONSES_REGEX
        }
    });
    var i = o(r(93)),
        a = o(r(94)),
        s = o(r(95)),
        u = o(r(96)),
        c = o(r(101)),
        l = o(r(102)),
        f = o(r(41)),
        d = o(r(44)),
        p = o(r(104)),
        h = o(r(105)),
        y = o(r(106)),
        g = o(r(107)),
        v = o(r(108)),
        m = o(r(109)),
        b = n(r(42)),
        w = o(r(110)),
        _ = o(r(45)),
        O = o(r(111)),
        I = o(r(112)),
        E = o(r(46)),
        S = o(r(113)),
        P = o(r(114)),
        x = o(r(115)),
        T = o(r(116)),
        j = o(r(117)),
        k = o(r(47)),
        N = o(r(118)),
        D = o(r(119)),
        A = o(r(120)),
        R = o(r(121)),
        C = o(r(122)),
        L = o(r(123)),
        M = o(r(124)),
        U = r(125),
        F = r(126),
        B = r(127),
        V = o(r(128)),
        G = n(r(211)),
        H = o(r(212)),
        q = r(48),
        z = r(213),
        Y = r(214)
}, function (e, t) {
    e.exports = function (e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
}, function (e, t) {
    e.exports = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function (e, t, r) {
    var n = r(86),
        o = r(87),
        i = r(88);
    e.exports = function (e, t) {
        return n(e) || o(e, t) || i()
    }
}, function (e, t) {
    function r(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    e.exports = function (e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
    }
}, function (e, t) {
    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function n(t) {
        return "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? e.exports = n = function (e) {
            return r(e)
        } : e.exports = n = function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : r(e)
        }, n(t)
    }
    e.exports = n
}, function (e, t) {
    e.exports = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                    n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
                } return t.default = e, t
    }
}, function (e, t, r) {
    var n = r(53),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = n || o || Function("return this")();
    e.exports = i
}, function (e, t) {
    var r = Array.isArray;
    e.exports = r
}, function (e, t, r) {
    var n = r(89),
        o = r(90),
        i = r(91);
    e.exports = function (e) {
        return n(e) || o(e) || i()
    }
}, function (e, t) {
    var r;
    r = function () {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}, function (e, t, r) {
    var n = r(142),
        o = r(147);
    e.exports = function (e, t) {
        var r = o(e, t);
        return n(r) ? r : void 0
    }
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = 1;

    function o(e) {
        delete e.__lr, e.shadowRoot && o(e.shadowRoot);
        for (var t = e.firstChild; t; t = t.nextSibling) o(t)
    }

    function i(e) {
        e.mParent && e.mParent.mChild === e && (e.mParent.mChild = e.mPrev), e.mPrev && (e.mPrev.mNext = e.mNext), e.mNext && (e.mNext.mPrev = e.mPrev)
    }
    var a = {
        getId: function (e) {
            var t = e && e.__lr;
            return t && t.id
        },
        getIsTainted: function (e) {
            var t = e && e.__lr;
            return t && t.isTainted
        },
        setIsTainted: function (e, t) {
            var r = e && e.__lr;
            r && (r.isTainted = t)
        },
        getTaintType: function (e) {
            var t = e && e.__lr;
            return t && t.taintType || "redact"
        },
        setTaintType: function (e, t) {
            var r = e && e.__lr;
            r && (r.taintType = t)
        },
        getIsWhitelisted: function (e) {
            var t = e && e.__lr;
            return t && t.isWhitelisted
        },
        setIsWhitelisted: function (e, t) {
            var r = e && e.__lr;
            r && (r.isWhitelisted = t)
        },
        genMirror: function (e, t) {
            var r = t.isTainted,
                o = t.taintType,
                i = t.isWhitelisted,
                a = t.nodePath,
                s = {
                    id: n++,
                    isTainted: r,
                    taintType: o,
                    isWhitelisted: i,
                    nodePath: a
                };
            return e.__lr = s, e.__lr.toJSON = function () {
                return null
            }, s
        },
        removeFromTree: i,
        evictMirrorNode: function (e) {
            if (e.mParent) {
                i(e), e.id = 0;
                for (var t = [e.mChild, e.mShadow].filter((function (e) {
                        return !!e
                    })); t.length > 0 && t.length < 1e4;) {
                    var r = t.pop();
                    r.id = 0, r.mChild && t.push(r.mChild), r.mPrev && t.push(r.mPrev), r.mShadow && t.push(r.mShadow)
                }
            }
        },
        mirrorFor: function (e) {
            var t = e && e.__lr;
            return t && 0 !== t.id ? t : null
        },
        _reset: function () {
            o(document), n = 1
        }
    };
    t.default = a, e.exports = t.default
}, function (e, t, r) {
    var n = r(21),
        o = r(143),
        i = r(144),
        a = n ? n.toStringTag : void 0;
    e.exports = function (e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? o(e) : i(e)
    }
}, function (e, t) {
    e.exports = function (e) {
        return null != e && "object" == typeof e
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, function (e, t, r) {
    "use strict";
    r.r(t), r.d(t, "useState", (function () {
        return y
    })), r.d(t, "useReducer", (function () {
        return g
    })), r.d(t, "useEffect", (function () {
        return v
    })), r.d(t, "useLayoutEffect", (function () {
        return m
    })), r.d(t, "useRef", (function () {
        return b
    })), r.d(t, "useImperativeHandle", (function () {
        return w
    })), r.d(t, "useMemo", (function () {
        return _
    })), r.d(t, "useCallback", (function () {
        return O
    })), r.d(t, "useContext", (function () {
        return I
    })), r.d(t, "useDebugValue", (function () {
        return E
    })), r.d(t, "useErrorBoundary", (function () {
        return S
    }));
    var n, o, i, a = r(1),
        s = 0,
        u = [],
        c = a.options.__b,
        l = a.options.__r,
        f = a.options.diffed,
        d = a.options.__c,
        p = a.options.unmount;

    function h(e, t) {
        a.options.__h && a.options.__h(o, e, s || t), s = 0;
        var r = o.__H || (o.__H = {
            __: [],
            __h: []
        });
        return e >= r.__.length && r.__.push({}), r.__[e]
    }

    function y(e) {
        return s = 1, g(N, e)
    }

    function g(e, t, r) {
        var i = h(n++, 2);
        return i.t = e, i.__c || (i.__ = [r ? r(t) : N(void 0, t), function (e) {
            var t = i.t(i.__[0], e);
            i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}))
        }], i.__c = o), i.__
    }

    function v(e, t) {
        var r = h(n++, 3);
        !a.options.__s && k(r.__H, t) && (r.__ = e, r.__H = t, o.__H.__h.push(r))
    }

    function m(e, t) {
        var r = h(n++, 4);
        !a.options.__s && k(r.__H, t) && (r.__ = e, r.__H = t, o.__h.push(r))
    }

    function b(e) {
        return s = 5, _((function () {
            return {
                current: e
            }
        }), [])
    }

    function w(e, t, r) {
        s = 6, m((function () {
            "function" == typeof e ? e(t()) : e && (e.current = t())
        }), null == r ? r : r.concat(e))
    }

    function _(e, t) {
        var r = h(n++, 7);
        return k(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__
    }

    function O(e, t) {
        return s = 8, _((function () {
            return e
        }), t)
    }

    function I(e) {
        var t = o.context[e.__c],
            r = h(n++, 9);
        return r.__c = e, t ? (null == r.__ && (r.__ = !0, t.sub(o)), t.props.value) : e.__
    }

    function E(e, t) {
        a.options.useDebugValue && a.options.useDebugValue(t ? t(e) : e)
    }

    function S(e) {
        var t = h(n++, 10),
            r = y();
        return t.__ = e, o.componentDidCatch || (o.componentDidCatch = function (e) {
            t.__ && t.__(e), r[1](e)
        }), [r[0], function () {
            r[1](void 0)
        }]
    }

    function P() {
        u.forEach((function (e) {
            if (e.__P) try {
                e.__H.__h.forEach(T), e.__H.__h.forEach(j), e.__H.__h = []
            } catch (t) {
                e.__H.__h = [], a.options.__e(t, e.__v)
            }
        })), u = []
    }
    a.options.__b = function (e) {
        o = null, c && c(e)
    }, a.options.__r = function (e) {
        l && l(e), n = 0;
        var t = (o = e.__c).__H;
        t && (t.__h.forEach(T), t.__h.forEach(j), t.__h = [])
    }, a.options.diffed = function (e) {
        f && f(e);
        var t = e.__c;
        t && t.__H && t.__H.__h.length && (1 !== u.push(t) && i === a.options.requestAnimationFrame || ((i = a.options.requestAnimationFrame) || function (e) {
            var t, r = function () {
                    clearTimeout(n), x && cancelAnimationFrame(t), setTimeout(e)
                },
                n = setTimeout(r, 100);
            x && (t = requestAnimationFrame(r))
        })(P)), o = void 0
    }, a.options.__c = function (e, t) {
        t.some((function (e) {
            try {
                e.__h.forEach(T), e.__h = e.__h.filter((function (e) {
                    return !e.__ || j(e)
                }))
            } catch (r) {
                t.some((function (e) {
                    e.__h && (e.__h = [])
                })), t = [], a.options.__e(r, e.__v)
            }
        })), d && d(e, t)
    }, a.options.unmount = function (e) {
        p && p(e);
        var t = e.__c;
        if (t && t.__H) try {
            t.__H.__.forEach(T)
        } catch (e) {
            a.options.__e(e, t.__v)
        }
    };
    var x = "function" == typeof requestAnimationFrame;

    function T(e) {
        var t = o;
        "function" == typeof e.__c && e.__c(), o = t
    }

    function j(e) {
        var t = o;
        e.__c = e.__(), o = t
    }

    function k(e, t) {
        return !e || e.length !== t.length || t.some((function (t, r) {
            return t !== e[r]
        }))
    }

    function N(e, t) {
        return "function" == typeof t ? t(e) : t
    }
}, function (e, t, r) {
    var n = r(132),
        o = r(133),
        i = r(134),
        a = r(135),
        s = r(136);

    function u(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = a, u.prototype.set = s, e.exports = u
}, function (e, t, r) {
    var n = r(51);
    e.exports = function (e, t) {
        for (var r = e.length; r--;)
            if (n(e[r][0], t)) return r;
        return -1
    }
}, function (e, t, r) {
    var n = r(9).Symbol;
    e.exports = n
}, function (e, t, r) {
    var n = r(13)(Object, "create");
    e.exports = n
}, function (e, t, r) {
    var n = r(156);
    e.exports = function (e, t) {
        var r = e.__data__;
        return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
    }
}, function (e, t, r) {
    var n = r(15),
        o = r(16);
    e.exports = function (e) {
        return "symbol" == typeof e || o(e) && "[object Symbol]" == n(e)
    }
}, function (e, t, r) {
    var n = r(24);
    e.exports = function (e) {
        if ("string" == typeof e || n(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -Infinity ? "-0" : t
    }
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return "#document-fragment" === e.nodeName && "open" === e.mode ? "$shadow-root" : e.nodeName ? e.nodeName.toLowerCase() : ""
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getTargetForEvent = function (e) {
        if ("function" == typeof e.composedPath && e.composed) return e.composedPath()[0];
        if (e.path) return e.path[0];
        return e.target
    }, t.getNodePath = function (e) {
        var t = e,
            r = [],
            o = 0;
        for (; t && (t.parentNode || t.host);) {
            var i = n(t);
            if ("body" === i) break;
            var a = {
                    nodeName: i
                },
                s = a.nodeName.length;
            if (t.id && t.id.length > 0 && (a.id = t.id, s += t.id.length), t.classList && t.classList.length > 0) {
                a.classList = Array.prototype.slice.call(t.classList, 0);
                var u = Array.prototype.join.call(t.classList, "");
                u && (s += u.length)
            }
            if (o + s > 250) break;
            t.parentNode && t.parentNode.children && (a.nthChild = Array.prototype.slice.call(t.parentNode.children).indexOf(t) + 1), o += s, r.push(a), t = t.parentNode || t.host
        }
        return r
    }
}, function (e, t, r) {
    var n = r(13)(r(9), "Map");
    e.exports = n
}, function (e, t) {
    e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, function (e, t, r) {
    var n = r(148),
        o = r(155),
        i = r(157),
        a = r(158),
        s = r(159);

    function u(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = a, u.prototype.set = s, e.exports = u
}, function (e, t) {
    e.exports = function (e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
    }
}, function (e, t, r) {
    var n = r(10),
        o = r(24),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    e.exports = function (e, t) {
        if (n(e)) return !1;
        var r = typeof e;
        return !("number" != r && "symbol" != r && "boolean" != r && null != e && !o(e)) || (a.test(e) || !i.test(e) || null != t && e in Object(t))
    }
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = n(r(7)),
        i = r(2),
        a = function (e, t) {
            switch ((0, o.default)(e)) {
            case "string":
                return e.toLowerCase() === String(t).toLowerCase();
            case "number":
                return e === Number(t);
            default:
                return !1
            }
        },
        s = function (e, t) {
            return (0, i.contains)(String(e).toLowerCase(), String(t).toLowerCase())
        },
        u = {
            any: function () {
                return !0
            },
            eq: a,
            is: a,
            isnot: function (e, t) {
                return !a(e, t)
            },
            gt: function (e, t) {
                return Number(e) > Number(t)
            },
            gte: function (e, t) {
                return Number(e) >= Number(t)
            },
            lt: function (e, t) {
                return Number(e) < Number(t)
            },
            lte: function (e, t) {
                return Number(e) <= Number(t)
            },
            startswith: function (e, t) {
                return (0, i.startsWith)(String(e).toLowerCase(), String(t).toLowerCase())
            },
            endswith: function (e, t) {
                return (0, i.endsWith)(String(e).toLowerCase(), String(t).toLowerCase())
            },
            contains: s,
            doesnotcontain: function (e, t) {
                return !s(e, t)
            },
            like: function (e, t) {
                return new RegExp(t).test(e)
            }
        };
    t.default = u, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(8),
        o = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.FeedbackWidget = b, t.default = void 0;
    var i = o(r(5)),
        a = o(r(3)),
        s = n(r(1)),
        u = r(18),
        c = o(r(78)),
        l = r(79),
        f = r(34);

    function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? d(Object(r), !0).forEach((function (t) {
                (0, a.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }
    var h = {
            alignSelf: "stretch",
            resize: "none",
            height: "5.4em",
            minHeight: "2em",
            border: "1px solid #E0E0E0",
            marginBottom: "1.75em",
            fontFamily: "inherit",
            fontSize: "1.2em",
            padding: ".5em"
        },
        y = p(p({}, h), {}, {
            backgroundColor: "#f2f2f2",
            color: "#C2C2C2"
        }),
        g = {
            alignSelf: "flex-end",
            padding: ".7em 2.7em .6em",
            marginRight: "0.95em",
            background: "#26293F",
            borderRadius: "50px",
            border: "none",
            lineHeight: "normal",
            color: "#FFFFFF"
        },
        v = {
            background: "#595E5E"
        },
        m = {
            background: "#8F8F8F"
        };

    function b(e) {
        var t = e.onSubmit,
            r = e.onCancel,
            n = e.content,
            o = e.readOnly,
            a = e.initialValue,
            d = e.showDismissButton,
            b = void 0 === d || d,
            w = (0, u.useState)(a || ""),
            _ = (0, i.default)(w, 2),
            O = _[0],
            I = _[1],
            E = (0, u.useState)(!1),
            S = (0, i.default)(E, 2),
            P = S[0],
            x = S[1],
            T = (0, f.useIsSmallScreen)(),
            j = !O.length || o,
            k = g;
        return j ? k = p(p({}, k), m) : P && (k = p(p({}, k), v)), s.createElement("div", {
            style: T ? l.rootDivStyleSmallScreen : l.rootDivStyle
        }, b && s.createElement("button", {
            style: l.dismissStyle,
            onClick: r,
            type: "button",
            disabled: o
        }, s.createElement(c.default, {
            style: l.dismissIcon
        })), s.createElement("div", {
            style: l.titleStyle
        }, n), s.createElement("textarea", {
            value: O,
            onInput: function (e) {
                var t = e.target.value;
                I(t)
            },
            style: o ? y : h,
            disabled: o,
            maxLength: 1e3
        }), s.createElement("button", {
            style: k,
            onClick: function () {
                O ? t(O) : r()
            },
            onMouseEnter: function () {
                return x(!0)
            },
            onMouseLeave: function () {
                return x(!1)
            },
            disabled: j,
            type: "submit"
        }, "Submit"))
    }
    var w = b;
    t.default = w
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.useMediaQuery = a, t.useIsSmallScreen = function () {
        return a("screen and (max-width: 500px)")
    };
    var o = n(r(5)),
        i = r(18);

    function a(e) {
        var t = (0, i.useRef)(window.matchMedia(e)),
            r = (0, i.useState)(t.current.matches),
            n = (0, o.default)(r, 2),
            a = n[0],
            s = n[1];
        return (0, i.useEffect)((function () {
            var e = function (e) {
                return s(e.matches)
            };
            return t.current.addListener(e),
                function () {
                    return t.current.removeListener(e)
                }
        }), []), a
    }
}, function (e, t, r) {
    "use strict";
    var n = r(8),
        o = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.RatingWidget = t.DEFAULT_RATING_MAX = t.DEFAULT_RATING_MIN = void 0;
    var i = o(r(5)),
        a = o(r(3)),
        s = n(r(1)),
        u = r(18),
        c = o(r(263)),
        l = o(r(78)),
        f = r(79),
        d = r(34);

    function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function h(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? p(Object(r), !0).forEach((function (t) {
                (0, a.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }
    var y = {
            display: "flex",
            marginBottom: "2rem"
        },
        g = {
            background: "none",
            color: "#222224",
            border: "1px solid #E0E0E0",
            borderRadius: "0",
            padding: "0",
            flexBasis: "0",
            flexGrow: "1",
            height: "1.75rem",
            lineHeight: "1.75rem",
            cursor: "pointer"
        },
        v = h(h({}, g), {}, {
            borderRight: "none"
        }),
        m = h(h({}, g), {}, {
            borderRight: "none"
        }),
        b = h({}, g),
        w = {
            color: "#C2C2C2"
        },
        _ = {
            background: "#F0F0F0"
        };
    t.DEFAULT_RATING_MIN = 0;
    t.DEFAULT_RATING_MAX = 10;
    var O = function (e) {
        var t = e.min,
            r = void 0 === t ? 0 : t,
            n = e.max,
            o = void 0 === n ? 10 : n,
            a = e.onClick,
            l = e.readOnly,
            f = (0, u.useState)(null),
            d = (0, i.default)(f, 2),
            p = d[0],
            g = d[1];
        return s.createElement("div", {
            style: y
        }, (0, c.default)(r, o + 1).map((function (e) {
            var t;
            return t = e === r ? v : e === o ? b : m, l ? t = h(h({}, t), w) : p === e && (t = h(h({}, t), _)), s.createElement("button", {
                key: e,
                style: t,
                onClick: function () {
                    return a(e)
                },
                type: "button",
                disabled: l,
                onMouseEnter: function () {
                    return g(e)
                },
                onMouseLeave: function () {
                    return g(null)
                }
            }, e)
        })))
    };
    t.RatingWidget = function (e) {
        var t = e.onSubmit,
            r = e.onCancel,
            n = e.content,
            o = e.readOnly,
            i = e.showDismissButton,
            a = void 0 === i || i,
            u = (0, d.useIsSmallScreen)();
        return s.createElement("div", {
            style: u ? f.rootDivStyleSmallScreen : f.rootDivStyle
        }, a && s.createElement("button", {
            style: f.dismissStyle,
            onClick: r,
            type: "button",
            disabled: o
        }, s.createElement(l.default, {
            style: f.dismissIcon
        })), s.createElement("div", {
            style: f.titleStyle
        }, n), s.createElement(O, {
            onClick: t,
            readOnly: o
        }))
    }
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MAX_CUSTOM_PROPS_PER_SESSION = t.MAX_PROPERTY_NAME_LENGTH = t.SUPPORTED_TYPES = t.RESERVED_PROP_MAPPINGS = t.RESERVED_PROPS = t.VALIDATION_ERRORS = void 0;
    t.VALIDATION_ERRORS = {
        EMPTY_ARRAY: "EMPTY_ARRAY",
        MIXED_TYPE_ARRAY: "MIXED_TYPE_ARRAY",
        UNSUPPORTED_TYPE: "UNSUPPORTED_TYPE",
        RESERVED_TYPE_MISMATCH: "RESERVED_TYPE_MISMATCH",
        MAX_PROPS_REACHED: "MAX_PROPS_REACHED",
        NAME_TOO_LONG: "NAME_TOO_LONG",
        MALFORMED_VARIANT: "MALFORMED_VARIANT"
    };
    t.RESERVED_PROPS = {
        revenue: "number"
    };
    t.RESERVED_PROP_MAPPINGS = {
        revenue: {
            type: "double"
        }
    };
    t.SUPPORTED_TYPES = ["boolean", "number", "string"];
    t.MAX_PROPERTY_NAME_LENGTH = 100;
    t.MAX_CUSTOM_PROPS_PER_SESSION = 500
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = t.sessionStorage = t.UNLOAD_SERIAL_LIMIT = t.UNLOAD_SERIAL_MAX_LATENCY_MS = t.DUPLICATE_LIMIT = t.MAX_BUFFERED_EVENTS = t.PENDING_STORAGE_KEY = t.LOCAL_STORAGE_KEY = t.SESSION_STORAGE_KEY = void 0;
    var o = n(r(38)),
        i = n(r(5)),
        a = n(r(7)),
        s = n(r(3)),
        u = n(r(4)),
        c = n(r(6)),
        l = n(r(11));
    r(92);
    var f = n(r(39)),
        d = r(2),
        p = n(r(215)),
        h = n(r(238)),
        y = n(r(245)),
        g = r(247),
        v = r(250),
        m = n(r(251)),
        b = n(r(67)),
        w = n(r(252)),
        _ = n(r(254)),
        O = n(r(255)),
        I = n(r(256)),
        E = n(r(257)),
        S = r(258),
        P = r(36),
        x = r(277),
        T = r(278);

    function j(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function k(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? j(Object(r), !0).forEach((function (t) {
                (0, s.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function N(e, t) {
        var r;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (r = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return D(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return D(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0,
                    o = function () {};
                return {
                    s: o,
                    n: function () {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, a = !0,
            s = !1;
        return {
            s: function () {
                r = e[Symbol.iterator]()
            },
            n: function () {
                var e = r.next();
                return a = e.done, e
            },
            e: function (e) {
                s = !0, i = e
            },
            f: function () {
                try {
                    a || null == r.return || r.return()
                } finally {
                    if (s) throw i
                }
            }
        }
    }

    function D(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var A = "_lr5_";
    t.SESSION_STORAGE_KEY = A;
    var R = "_lr_tabs_";
    t.LOCAL_STORAGE_KEY = R;
    var C = "_lr_hb_",
        L = "_lr_id_",
        M = "_lr_uf_",
        U = "_lr_dat_";
    t.PENDING_STORAGE_KEY = U;
    var F = 5e-4,
        B = 1e3;
    t.MAX_BUFFERED_EVENTS = B;
    var V = "_lr_misc_",
        G = 100;
    t.DUPLICATE_LIMIT = G;
    var H = "LogRocket: Duplicate event limit was reached, further matching events are suppressed. More information: https://docs.logrocket.com/v1.0/docs/duplicate-event-limit",
        q = 3e5,
        z = ["lr.core.Exception", "lr.core.LogEvent"],
        Y = ["lr.browser.InputEvent", "lr.browser.NavigationEvent", "lr.browser.NodeChangeEvent", "lr.browser.NodeInitEvent", "lr.browser.StyleContents"],
        J = ["input", "select", "textarea"];

    function W(e, t) {
        var r = t.eventType,
            n = t.nodePath;
        if ("lr.browser.MouseEvent" !== e || "FOCUS" !== r || !n) return !1;
        var o = n[0];
        return o && -1 !== J.indexOf(o.nodeName)
    }
    var X = /^.*\/[^.]+(\.app|CodePush|.*(?=\/))/,
        $ = "12.114.0",
        K = document.currentScript ? document.currentScript.src : "",
        Z = "Session quota exceeded. Please upgrade your plan.",
        Q = "User quota exceeded. Please upgrade your plan.",
        ee = "App quota exceeded.",
        te = ["default", !0],
        re = 5e3;
    t.UNLOAD_SERIAL_MAX_LATENCY_MS = re;

    function ne(e) {
        var t = function () {
                return null
            },
            r = t,
            n = t,
            o = t;
        try {
            var i = window[e];
            n = function () {
                return i.setItem.apply(i, arguments)
            }, o = function () {
                return i.removeItem.apply(i, arguments)
            }, r = function (e) {
                try {
                    return i.getItem(e)
                } catch (e) {
                    return null
                }
            }
        } catch (e) {}
        return {
            getItem: r,
            setItem: n,
            removeItem: o
        }
    }
    t.UNLOAD_SERIAL_LIMIT = 20;
    var oe = ne("sessionStorage");
    t.sessionStorage = oe;
    var ie = ne("localStorage"),
        ae = (0, d.protectFunc)((function (e) {
            try {
                var t = 0;
                if ("string" == typeof e && e.length)
                    for (var r = 0; r < e.length; r++) t = 31 * t + e.charCodeAt(r), t |= 0;
                return t
            } catch (t) {
                return (0, d.sendTelemetry)("Failed to hash string", {
                    extra: {
                        str: e
                    }
                }), null
            }
        })),
        se = function (e) {
            var t, r = e.shift() || 0,
                n = N(e);
            try {
                for (n.s(); !(t = n.n()).done;) {
                    r ^= t.value + 2654435769 + (r << 6) + (r >> 2)
                }
            } catch (e) {
                n.e(e)
            } finally {
                n.f()
            }
            return r
        },
        ue = (0, d.protectFunc)((function (e) {
            try {
                var t = e.args.map((function (e) {
                    switch ({}.toString.call(e)) {
                    case "[object String]":
                        return e;
                    case "[object Error]":
                        return "".concat(e.name, ": ").concat(e.message);
                    case "[object Object]":
                        return Object.keys(e).toString();
                    case "[object Boolean]":
                    case "[object Null]":
                    case "[object Undefined]":
                    case "[object Number]":
                    case "[object Array]":
                        return String(e);
                    default:
                        return ""
                    }
                }));
                return t.filter(Boolean).length ? (t.push(e.logLevel), se(t.map(ae))) : null
            } catch (t) {
                return (0, d.sendTelemetry)("Failed to hash console args", {
                    extra: e
                }), null
            }
        })),
        ce = (0, d.protectFunc)((function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];

            function r(e) {
                return se([ae(e.fileName), ae(e.functionName), e.columnNumber, e.lineNumber])
            }
            try {
                var n = t.map(r);
                return se([ae(e.message && e.message.message || e.message), ae(e.exceptionType), ae(e.errorType)].concat((0, l.default)(n)))
            } catch (t) {
                return (0, d.sendTelemetry)("Failed to hash data", {
                    extra: e
                }), null
            }
        })),
        le = ["%c prev state", "%c next state", "%c action    ", "%c error     ", "%c action", "%c error"];
    void 0 === window.__SDKCONFIG__ && (window.__SDKCONFIG__ = {});
    var fe = {
            clickEffectTimeout: 2e3,
            dashboardHost: window.__SDKCONFIG__.dashboardHost || "https://app.logrocket.com",
            serverURL: window.__SDKCONFIG__.serverURL || "https://r.logrocket.io/i",
            statsURL: window.__SDKCONFIG__.statsURL || "https://r.logrocket.io/s"
        },
        de = function () {
            function e() {
                var t = this,
                    r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = r._shouldRegisterBrowser,
                    o = void 0 === n || n,
                    s = r._shouldIdentifyAnonymous,
                    c = void 0 === s || s,
                    l = r.lookbackEnabled,
                    p = r.recordingStatuses,
                    h = void 0 === p ? {} : p,
                    w = r.scriptVersion,
                    O = void 0 === w ? $ : w,
                    I = r.sdkVersion,
                    E = void 0 === I ? "" : I;
                (0, u.default)(this, e), this._didInit = !1, this._isBuffering = !0, this._triggeredSessions = [], this._isDisabled = !1, this._isReduxDisabled = !1, this._isConsoleDisabled = !1, this._isFirstTab = !1, this._hasSessionURL = !1, this._config = null, this._bufferedEvents = [], this._installed = [], this._urlListeners = [], this._seenUsers = [], this._visitedURLs = new Set, this._lastSendTime = Date.now(), this._exceptions = {}, this._reduxActions = {}, this._consoleLogs = {}, this._consoleLogTimes = {}, this._failedNetwork = {}, this._inflightNetwork = {}, this._identifyCalls = 0, this._errorOnly = !1, this._hasErrors = !1, this._isIntercomRegistered = !1, this._isZendeskRegistered = !1, this._sendDataErrors = 0, this._relayTimeouts = 0, this._failedConnectionErrors = 0, this._maxIdentityArgLength = 1024, this._isCordova = !1, this._currentURL = "", this._eventSuffix = new Uint8Array, this.wallBytes = 0, this.wallByteStreams = {}, this.textEncoder = window.TextEncoder && new window.TextEncoder, this._cordovaDeviceReady = function () {
                    t._isCordova = !0
                }, this.getConfig = function (e) {
                    if (null == t._config) return {};
                    var r = e.split(".");
                    switch (r[1]) {
                    case "browser":
                        return t._config.browser;
                    case "network":
                        return t._config.network;
                    case "core":
                        switch (r[2]) {
                        case "LogEvent":
                            return t._config.console
                        }
                    default:
                        return {}
                    }
                }, this._maybeRecordActivity = (0, b.default)((function (e) {
                    var r = t._getCurrentURL(),
                        n = t.urlSanitizer(r);
                    if (e - t._lastInteractionTime > t._activeUserPingTimeout && (t._persistSessionInfo({
                            lastActivity: e
                        }), t._lastInteractionTime = e, r === n)) {
                        var o = t._hrefActivityCounts[r] || 0;
                        t._hrefActivityCounts[r] = o + 1
                    }
                    e - t._lastBufferTime > t._bufferTimeout && (t.addEvent("lr.Buffer", (function () {
                        return {
                            eventCount: t._eventCount,
                            hrefActivityCounts: t._hrefActivityCounts,
                            hrefMaxScroll: t._hrefMaxScroll,
                            userID: t._lastIdentifyCall && t._lastIdentifyCall.userID
                        }
                    })), t._eventCount = 0, t._hrefActivityCounts = {}, t._hrefMaxScroll = {}, t._lastBufferTime = e)
                }), 100), this._isReduxLogger = function (e) {
                    if (!e || !e.args) return !1;
                    var t = e.args;
                    return !!(Array.isArray(t) && 3 === t.length && le.indexOf(t[0]) > -1)
                }, this._transformStackTrace = (0, d.protectFunc)((function (e) {
                    try {
                        return t._isCordova ? e.map((function (e) {
                            if (!e.fileName || "[native code]" === e.fileName || "<anonymous>" === e.fileName) return e;
                            var t = "app://".concat(e.fileName.replace(/^file:\/\//, "").replace(X, "").replace(/^\//g, ""));
                            return k(k({}, e), {}, {
                                fileName: t
                            })
                        })) : e
                    } catch (t) {
                        return e
                    }
                })), this.addEvent = (0, d.protectFunc)((function (e, r) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = n.timeOverride,
                        s = n.threadOverride,
                        u = n.sizeOverride,
                        c = n._stackTrace,
                        l = n.hrefOverride;
                    if (!(t._isDisabled && !t._isInactive || t._isTruncated)) {
                        var f = c ? t._transformStackTrace(c) : void 0,
                            p = o || Date.now(),
                            h = t._startTime ? p - t._startTime : 0,
                            y = (0, d.isActivityEvent)(e),
                            g = l || window.location.href,
                            v = function () {
                                var n = r(t.getConfig(e));
                                if (null !== n) {
                                    var o = "lr.redux.ReduxAction" === e && n.action && n.action.type,
                                        c = "lr.core.Exception" === e || void 0 !== n.exceptionType,
                                        l = void 0 !== n.logLevel && Array.isArray(n.args);
                                    if ("lr.core.LogEvent" === e && t._isReduxLogger(n)) t._didWarnAboutReduxLogger || (t._didWarnAboutReduxLogger = !0, t._consoleLog("warn", "LogRocket: Redux logger detected, skipping data. Please use the LogRocket redux middleware to record production redux logs: https://docs.logrocket.com/docs/redux-middleware"));
                                    else {
                                        if ("lr.browser.NavigationEvent" === e && (t._currentURL = n.href), "lr.network.RequestEvent" === e) {
                                            var v = (0, d.getGraphQLOperation)(n.body),
                                                m = v.operationName,
                                                b = v.operationType;
                                            if (t._inflightNetwork[n.reqId] = {
                                                    url: n.url,
                                                    time: p,
                                                    operationName: m,
                                                    operationType: b
                                                }, t._captureNPSResponse(n.url), n.body) {
                                                var w = n.body;
                                                if ("object" === (0, a.default)(w)) {
                                                    var _ = Object.getPrototypeOf(w);
                                                    _ !== Object.prototype && null !== _ || (w = JSON.stringify(w))
                                                }
                                                t._auditNetworkRequest({
                                                    body: w,
                                                    reqId: n.reqId
                                                })
                                            }
                                        }
                                        if ("lr.network.ResponseEvent" === e) {
                                            var O = t._inflightNetwork[n.reqId];
                                            if (O && (O.url && (n.url = O.url), O.time && (n.duration = p - O.time), O.operationName && (n.operationName = O.operationName), O.operationType && (n.operationType = O.operationType)), n.status >= 400 || 0 === n.status) {
                                                var I = ae(n.url);
                                                null != I && (t._failedNetwork[I] ? t._failedNetwork[I]++ : t._failedNetwork[I] = 1, n.count = t._failedNetwork[I]), n.release = t._release, n.browserUseragent = navigator.userAgent, t._lastIdentifyCall && (n.userEmail = t._lastIdentifyCall.email, n.userName = t._lastIdentifyCall.name)
                                            }
                                            delete t._inflightNetwork[n.reqId]
                                        }
                                        if (c) {
                                            var E = ce(n, f);
                                            null != E && (t._exceptions[E] ? t._exceptions[E]++ : t._exceptions[E] = 1, n.hashCode = E, n.count = t._exceptions[E]), n.release = t._release, n.browserUseragent = navigator.userAgent, n.browserHref || (n.browserHref = g), t._lastIdentifyCall && (n.userEmail = t._lastIdentifyCall.email, n.userName = t._lastIdentifyCall.name), t._errorOnly && !t._hasErrors && t.start(), t._hasErrors = !0
                                        }
                                        if (l) {
                                            var S = ue(n);
                                            if (null != S) t._consoleLogs[S] ? t._consoleLogs[S]++ : (t._consoleLogs[S] = 1, t._consoleLogTimes[S] = p), n.hashCode = S, p - (t._consoleLogTimes[S] || p) <= q ? n.count = t._consoleLogs[S] : (n.count = 1, t._consoleLogs[S] = 1, t._consoleLogTimes[S] = p)
                                        }
                                        if (o) {
                                            var P = n.action.type;
                                            t._reduxActions[P] ? t._reduxActions[P]++ : t._reduxActions[P] = 1, n.count = t._reduxActions[P]
                                        }
                                        if (!t._isDisabled) {
                                            var x = t._sessionInfo.lastActivity;
                                            p - x > t._inactivityTimeThreshold && (t._logVerbose("disabling session for inactivity: ".concat(e)), t._isInactive = !0, t._isDisabled = !0, t._hasSessionURL = !1)
                                        }
                                        var T = n.count || 0;
                                        if (T === G && (c && (n.message = H), l && (n.args = [H])), !t._isEventDisabled(e, n) && (-1 === z.indexOf(e) || T <= G)) {
                                            var j = {
                                                time: p,
                                                type: e,
                                                data: n,
                                                timeOffset: h,
                                                threadID: null != s ? s : t._threadID,
                                                stackTrace: f,
                                                sessionID: t._sessionID,
                                                seqID: t._seqID++
                                            };
                                            t._recordingStatuses[t._sessionID] || t._lookbackEnabled || t._trackVisitedURL(g), t._eventHooks.observeEvent(j);
                                            var k = t._wall.postMessage({
                                                    type: "ADD_EVENT",
                                                    event: j,
                                                    sizeOverride: u
                                                }),
                                                N = (0, i.default)(k, 2);
                                            if (t.wallBytes = N[0], t.wallByteStreams = N[1], t.wallBytes > t._maxWallBytes) return t._disableAndFreeMemory("wallBytes"), void t._consoleLog("error", "LogRocket is using too much memory. Disabling.");
                                            if (t.wallByteStreams["lr.redux.ReduxAction"] > t._maxWallStreamBytes && !t._isReduxDisabled && (t._isReduxDisabled = !0, t._consoleLog("warn", "LogRocket has stopped collecting Redux logs to conserve memory. Consider sanitizing your state to reduce its size: https://docs.logrocket.com/reference#redux-logging")), t.wallByteStreams["lr.core.LogEvent"] > t._maxWallStreamBytes && !t._isConsoleDisabled && (t._isConsoleDisabled = !0, t._consoleLog("warn", "LogRocket will only collect warning and error logs to conserve memory.")), t._stats.wallBytes = t.wallBytes, y && "CLICK" === n.eventType) {
                                                var D = j.seqID;
                                                t._clicksToProcess.push({
                                                    time: p,
                                                    clickSeqID: D
                                                })
                                            }(0, d.isSessionEvent)(j) && t._eventCount++
                                        }
                                        for (var A = function () {
                                                var e = t._clicksToProcess.shift();
                                                if (!e) return t._sendSessionTelemetry("Found undefined clickToProcess"), "continue";
                                                var r = e.time,
                                                    n = e.clickSeqID;
                                                if (!(r < p - t._clickEffectTimeout)) return t._clicksToProcess.unshift({
                                                    time: r,
                                                    clickSeqID: n
                                                }), "break";
                                                t.addEvent("lr.browser.DeadClick", (function () {
                                                    return {
                                                        clickSeqID: n
                                                    }
                                                }))
                                            }; t._clicksToProcess.length > 0;) {
                                            var R = A();
                                            if ("continue" !== R && "break" === R) break
                                        }(-1 !== Y.indexOf(e) || W(e, n)) && (t._clicksToProcess = []), y && (t._maybeRecordActivity(p), t._isInactive && (t._logVerbose("activity in inactive session, starting new session: ".concat(e)), t._recordingStatuses[t._sessionID] ? t._startNewSession() : t._startNewSession({
                                            sessionID: t._sessionID
                                        }), t._recordingStatuses = {}))
                                    }
                                }
                            };
                        t._isBuffering ? t._bufferedEvents.length > B ? (t._isDisabled = !0, t._bufferedEvents = []) : (t._bufferedEvents.push(v), y && !t._isInactive && !t._isDisabled && t._didInit && (h > t._inactivityTimeThreshold ? (t._logVerbose("activity in inactive session, starting new session"), t._startNewSession({
                            sessionID: t._sessionID
                        }), t._recordingStatuses = {}) : h > t._activeUserPingTimeout && t._flushEventBuffer())) : v()
                    }
                })), this._logVerbose = (0, d.protectFunc)((function (e) {
                    if (!1 !== t._hasVerboseDebug) {
                        var r = {
                            data: e,
                            time: Date.now()
                        };
                        null != t._hasVerboseDebug ? t._sendVerboseLog(r) : t._pendingVerboseDebug.push(r)
                    }
                })), this._sendVerboseLog = (0, d.protectFunc)((function (e) {
                    var r = e.data,
                        n = e.time,
                        o = {
                            type: "verboseLog",
                            session: "".concat(t._appID, "/s/").concat(t._recordingID, "/").concat(t._sessionID),
                            tabID: t._tabID,
                            threadID: t._threadID,
                            time: new Date(n).toISOString(),
                            data: r
                        },
                        i = new t._XML;
                    i.open("POST", t._statsURL), i.timeout = 2e3, i.send(JSON.stringify(o))
                })), this._makeDataBuffer = function () {
                    try {
                        var e = t._pendingEvents.reduce((function (e, t) {
                            return e + t.length
                        }), 0);
                        if (e > t._maxBufferedBytes && (t._relayTimeouts > 0 ? (t._sendSessionTelemetry("Unable to retrieve app configuration"), t._consoleLog("error", "LogRocket failed to retrieve app configuration. Disabling."), t._disableAndFreeMemory("relayTimeouts")) : (t._consoleLog("error", "LogRocket is using too much memory. Disabling."), t._disableAndFreeMemory("pendingEvents"))), !t._pendingEvents.length || t._isDisabled) return null;
                        for (var r = t._lookbackEnabled ? 0 : t._eventSuffix.length, n = new Uint8Array(e + r), o = 0, i = 0; i < t._pendingEvents.length; i++) {
                            var a = t._pendingEvents[i];
                            if (a.length > 10444800) {
                                t._sendSessionTelemetry("Large event found exceeding GRPC limit"), t._consoleLog("error", "LogRocket is using too much memory. Disabling."), t._disableAndFreeMemory("eventTooLarge");
                                break
                            }
                            n.set(a, o), o += a.length
                        }
                        return t._isDisabled ? null : (t._lookbackEnabled || n.set(t._eventSuffix, e), n)
                    } catch (e) {
                        throw t._sendErrorTelemetry(e), e
                    }
                }, this.setMaxScroll = function (e) {
                    var r = t._getCurrentURL();
                    r === t.urlSanitizer(r) && (e > (t._hrefMaxScroll[r] || 0) && (t._hrefMaxScroll[r] = e))
                }, this._sendEvents = function (e) {
                    var r = new Uint8Array(0),
                        n = 0,
                        o = t._sentSeqID,
                        a = !0;
                    if (t._sendDataErrors < 2 && (r = t._makeDataBuffer(), n = t._pendingEvents.length, o = t._seenSeqID, a = !1), !t._isDisabled && r && t._shouldSendData()) {
                        t._stats.bytes = r.length, t._stats.upload = n;
                        var s, u = -1,
                            c = N(t._seenUsers);
                        try {
                            for (c.s(); !(s = c.n()).done;) {
                                s.value.seqID < t._sentSeqID && u++
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                        var l = {
                                a: t._appID,
                                r: t._recordingID,
                                t: t._tabID,
                                s: t._sessionID
                            },
                            f = Object.entries(t._recordingStatuses);
                        f.length ? l.rs = f.map((function (e) {
                            var t = (0, i.default)(e, 2),
                                r = t[0],
                                n = t[1];
                            return "".concat(r, ",").concat(n ? "t" : "f")
                        })).join(";") : l.rs = "".concat(t._sessionID, ",u"), a ? l.hp = "t" : t._triggeredSessions.length && (l.ts = t._triggeredSessions.join(",")), t._recordingConditionThreshold && (l.ct = t._recordingConditionThreshold), u > -1 && (l.u = t._seenUsers[u].userID, t._seenUsers = t._seenUsers.slice(u)), !1 === t._shouldCaptureIP && (l.ip = "f");
                        var p = Object.keys(l).map((function (e) {
                                return "".concat(e, "=").concat(encodeURIComponent(l[e]))
                            })).join("&"),
                            h = Date.now(),
                            y = new t._XML;
                        y.open("POST", "".concat(t._serverURL, "?").concat(p)), y.send(window.NREUM ? r.buffer : r), y.onreadystatechange = function () {
                            if (4 === y.readyState) {
                                if (y.status >= 200 && y.status < 300) {
                                    t._relayTimeouts = 0;
                                    var r = !1;
                                    if (201 === y.status) {
                                        var i = [],
                                            s = [],
                                            u = [];
                                        try {
                                            var c, l = N(JSON.parse(y.responseText));
                                            try {
                                                for (l.s(); !(c = l.n()).done;) {
                                                    var f = c.value;
                                                    switch (f.type) {
                                                    case v.QUOTA_EXCEEDED:
                                                        t._consoleLog("warn", "LogRocket: ".concat(Z, " Disabling ...")), t._isOverQuota = !0, t._isDisabled = !0;
                                                        break;
                                                    case v.USER_QUOTA_EXCEEDED:
                                                        t._consoleLog("warn", "LogRocket: ".concat(Q, " Disabling ...")), t._isOverQuota = !0, t._isDisabled = !0;
                                                        break;
                                                    case v.APP_QUOTA_EXCEEDED:
                                                        t._consoleLog("warn", "LogRocket: ".concat(ee, " Disabling ...")), t._isOverQuota = !0, t._isDisabled = !0;
                                                        break;
                                                    case v.BLOCK_RECORDING:
                                                        t._isDisabled = !0;
                                                        break;
                                                    case v.ERROR_ONLY_SESSIONS:
                                                        t._errorOnly = !0, t._hasErrors && t.start();
                                                        break;
                                                    case v.DEBUG:
                                                        f.data && f.data.verbosity && t._maybeEnableVerboseLogging(f.data.verbosity);
                                                        break;
                                                    case v.DASHBOARD_URL:
                                                        f.data && f.data.dashboardURL && (t._dashboardHost = f.data.dashboardURL);
                                                        break;
                                                    case v.PERFORMANCE_MONITORING_ENABLED:
                                                        t._disablePerformanceMonitoring = !1;
                                                        break;
                                                    case v.RECORDING_CONDITION_THRESHOLD:
                                                        f.data && f.data.recordingConditionThreshold && (t._recordingConditionThreshold = f.data.recordingConditionThreshold);
                                                        break;
                                                    case v.SUSPEND_RECORDING:
                                                        r = !0, t._lookbackEnabled = !1, t._seenUsers = [];
                                                        var p = t._sessionID;
                                                        f.data && void 0 !== f.data.sessionID && (p = f.data.sessionID), t._recordingStatuses[p] = !1;
                                                        break;
                                                    case v.CONTINUE_RECORDING:
                                                        t._lookbackEnabled = !1;
                                                        var g = t._sessionID;
                                                        f.data && void 0 !== f.data.sessionID && (g = f.data.sessionID), t._recordingStatuses[g] = !0;
                                                        break;
                                                    case v.PII_AUDITING_ENABLED:
                                                        t._shouldAuditPII = !0;
                                                        break;
                                                    case v.SESSIONS_TRIGGERED:
                                                        f.data && f.data.sessionIDs && function () {
                                                            var e = f.data.sessionIDs.map((function (e) {
                                                                return parseInt(e, 10)
                                                            }));
                                                            t._triggeredSessions = t._triggeredSessions.filter((function (t) {
                                                                return !e.some((function (e) {
                                                                    return e === t
                                                                }))
                                                            }))
                                                        }();
                                                        break;
                                                    default:
                                                        (0, d.startsWith)(f.type, "".concat(v.FILTERS, "|")) ? i.push(f.data): (0, d.startsWith)(f.type, "".concat(v.RECORDING_CONDITIONS, "|")) ? s.push(f.data) : (0, d.startsWith)(f.type, "".concat(v.GUIDES, "|")) && u.push(f.data)
                                                    }
                                                }
                                            } catch (e) {
                                                l.e(e)
                                            } finally {
                                                l.f()
                                            }
                                            t._setupWithRelayMessages({
                                                filters: i,
                                                recordingConditions: s,
                                                guides: u
                                            })
                                        } catch (e) {
                                            t._consoleLog("warn", "LogRocket could not understand the server response: no session recorded."), t._isDisabled = !0
                                        }
                                    }
                                    var m = Date.now();
                                    t._stats.time = m - h, t._isDisabled || r || (t._sentSeqID = o, t._pendingEvents.splice(0, n)), t._unregisterPerformance && t._disablePerformanceMonitoring && (t._unregisterPerformance(), t._unregisterPerformance = null)
                                } else if (y.status >= 400 && y.status < 500) {
                                    var b = "status-".concat(y.status);
                                    413 === y.status && (b = "payloadTooLarge"), 401 === y.status && (b = "licenseExpired"), t._consoleLog("warn", "LogRocket: ".concat(b, ". Disabling ...")), t._disableAndFreeMemory(b)
                                } else 503 === y.status ? '"maintenance"' === y.responseText ? (t._consoleLog("warn", "LogRocket: serverMaintenance. Disabling ..."), t._disableAndFreeMemory("serverMaintenance")) : (t._consoleLog("warn", "LogRocket: service unavailable. Disabling ..."), t._disableAndFreeMemory("serverUnavailable")) : t._isTruncated && t._disableAndFreeMemory("wasTruncated", {
                                    truncatedEventType: t._truncatedSourceEvent
                                });
                                500 === y.status && "Unable to retrieve app configuration." === y.responseText ? t._relayTimeouts++ : 0 === y.status || y.status >= 500 ? t._sendDataErrors++ : t._sendDataErrors = 0, 0 === y.status ? a ? t._failedConnectionErrors = 0 : t._failedConnectionErrors++ : a || (t._failedConnectionErrors = 0), t._failedConnectionErrors >= 6 && t._disableAndFreeMemory("blocked"), null == t._hasVerboseDebug && (t._hasVerboseDebug = !1, t._pendingVerboseDebug = []), t._recordingStatuses[t._sessionID] && (!t._isDisabled && 0 === t._sendDataErrors || t._isOverQuota) && t._enableSessionURL(), t._maybeSendStats(), e()
                            }
                        }
                    } else e()
                }, this._startRunLoop = function () {
                    ! function e() {
                        setTimeout((function () {
                            Date.now() - t._lastSendTime >= t._uploadTimeInterval && (!1 !== t._lookbackEnabled || t._recordingStatuses[t._sessionID]) ? (t._lastSendTime = Date.now(), t._sendEvents(e)) : e()
                        }), t._runLoopInterval)
                    }()
                }, this._startLookbackLoop = function () {
                    ! function e() {
                        setTimeout((function () {
                            t._recordingStatuses[t._sessionID] || t._lookbackEnabled || (!1 === t._lookbackEnabled && Date.now() - t._startTime > t._limitedLookbackInterval && (t._startNewSession({
                                sessionID: t._sessionID,
                                isLookbackSnapshot: !0
                            }), t._flushEventBuffer()), e())
                        }), t._lookbackLoopInterval)
                    }()
                }, this._startTabHeartbeat = function () {
                    ! function e() {
                        try {
                            m.default.set("".concat(t._cookiePrefix).concat(C, "-").concat(t._appID), JSON.stringify({
                                heartbeat: Date.now()
                            }), {
                                domain: t._rootHostname,
                                expires: 1,
                                sameSite: "Lax"
                            })
                        } catch (e) {}
                        t._isDisabled || t._didUnload || setTimeout(e, Math.max(300, t._newSessionTimeThreshold - 100))
                    }()
                }, this._startConnectedTabWatcher = function () {
                    if (t._shouldConnectTabs) {
                        setTimeout((function e() {
                            if (!t._isDisabled && !t._didUnload) {
                                var r = m.default.get("".concat(t._cookiePrefix).concat(R, "-").concat(t._appID));
                                if (r) try {
                                    var n = JSON.parse(r);
                                    n.lastActivity > t._sessionInfo.lastActivity && (t._sessionInfo.lastActivity = n.lastActivity), n.sessionID && n.sessionID !== t._sessionID && (t._logVerbose("Tab watcher connect: ".concat(n.sessionID)), t._startNewSession({
                                        sessionID: n.sessionID
                                    }))
                                } catch (e) {}
                                setTimeout(e, t._connectedTabCheckInterval)
                            }
                        }), t._connectedTabCheckInterval)
                    }
                }, this.identify = (0, d.protectFunc)((function () {
                    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    var o = r[0],
                        i = r[1],
                        s = !1,
                        u = !1;
                    if (t._identifyCalls++, !(t._identifyCalls > 10)) {
                        if (10 === t._identifyCalls && t._consoleLog("warn", "LogRocket: More than 10 identify calls on this page. Ignoring future calls."), null == i && "object" === (0, a.default)(o) && null !== o && null == (o = (i = o || {}).userID) && t._lastIdentifyCall && t._lastIdentifyCall.userID) {
                            var c = t._lastIdentifyCall;
                            o = c.userID, u = c.isAnonymous
                        }
                        if (!o) {
                            if (i && (i.name || i.email)) {
                                var l = i.name ? "name" : "email";
                                return void t._consoleLog("warn", "LogRocket: user ".concat(l, " passed to identify, but no userID given: identify(userId, { ").concat(l, ": '...' })."))
                            }
                            u = !0, o = t._divineAnonymousId()
                        }
                        if (!u || t._shouldIdentifyAnonymous) {
                            var d = t._seenUsers.length;
                            d > 0 && (s = t._seenUsers[d - 1].userID === o.toString()), (0, f.default)(/string|number/.test((0, a.default)(o)), "LogRocket: must pass a valid user id to identify()."), (0, f.default)(o.toString().length <= t._maxIdentityArgLength, "LogRocket: too large userID passed to identify() (max ".concat(t._maxIdentityArgLength, " characters)"));
                            for (var p = {
                                    userID: o.toString(),
                                    email: void 0,
                                    name: void 0,
                                    isAnonymous: u,
                                    isUpdate: s,
                                    traits: {}
                                }, h = ["userID", "name", "email"], y = 0, g = Object.keys(i || {}); y < g.length; y++) {
                                var v = g[y],
                                    m = i[v];
                                if (-1 === h.indexOf(v)) {
                                    if (/boolean|number|string/.test((0, a.default)(m))) {
                                        var b = v.toString();
                                        if (t.textEncoder && t.textEncoder.encode(b).length > t._maxUserTraitBytes) {
                                            t._consoleLog("warn", "LogRocket: Ignoring large user trait key ".concat(b));
                                            continue
                                        }
                                        if (m.toString().length > t._maxIdentityArgLength) {
                                            t._consoleLog("warn", 'LogRocket: ignoring large user trait value for key "'.concat(b, '" (max ').concat(t._maxIdentityArgLength, " characters)"));
                                            continue
                                        }
                                        p.traits[b] = m.toString()
                                    }
                                } else m && "string" == typeof m && ((0, f.default)(m.length <= t._maxIdentityArgLength, 'LogRocket: too large generic trait "'.concat(v, '" passed to identify() (max ').concat(t._maxIdentityArgLength, " characters)")), p[v] = m)
                            }
                            t.addEvent("lr.Identify", (function () {
                                return t._recordingStatuses[t._sessionID] || !1 !== t._lookbackEnabled ? t._seenUsers.push({
                                    seqID: t._seqID,
                                    userID: p.userID
                                }) : p.unseenUser = !0, t._lastIdentifyCall = p
                            }))
                        }
                    }
                })), this._getUserFingerprint = (0, d.protectFunc)((function () {
                    var e = t._appID.split("/", 2),
                        r = (0, i.default)(e, 1)[0],
                        n = "".concat(t._cookiePrefix).concat(M, "-").concat(r),
                        o = "".concat(t._cookiePrefix).concat(M, "-").concat(t._appID),
                        a = m.default.get(o),
                        s = m.default.get(n);
                    if (a && s) return m.default.remove(o), s;
                    if (a && !s) return m.default.set(n, a, {
                        domain: t._rootHostname,
                        sameSite: "Lax"
                    }), m.default.remove(o), s;
                    if (s) return s;
                    var u = (0, d.uuid)();
                    return m.default.set(n, u, {
                        domain: t._rootHostname,
                        sameSite: "Lax"
                    }), u
                })), this._consoleLog = (0, d.protectFunc)((function (e, r) {
                    t._shouldDebugLog || !t._didInit ? console[e](r) : t.addEvent("lr.core.LogEvent", (function () {
                        return {
                            args: [r],
                            logLevel: e.toUpperCase()
                        }
                    }))
                })), this._didUnload = !1, this._unload = (0, d.protectFunc)((function () {
                    if (!t._didUnload && t._didInit && !t._isDisabled) {
                        var e = Date.now();
                        t._didUnload = !0, t._serialUnloadCount = e - t._loadTime < re ? t._serialUnloadCount + 1 : 0;
                        var r = [],
                            n = t._serialUnloadCount >= 20;
                        if (n) console.warn("LogRocket: Skipping event caching on page unload:", "More than ".concat(20, " consecutive page unloads"));
                        else {
                            t._logVerbose("unload serializing ".concat(t._pendingEvents.length, " events"));
                            var o, i = N(t._pendingEvents);
                            try {
                                for (i.s(); !(o = i.n()).done;) {
                                    for (var a = o.value, s = "", u = 1e4, c = 0; c < a.length; c += u) c + u > a.length && (u = a.length - c), s += String.fromCharCode.apply(null, a.subarray(c, c + u));
                                    r.push(s)
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                        }
                        t._isDisabled = !0, window._lr_loaded = !1;
                        try {
                            if (t._recordingStatuses[t._sessionID] || !1 !== t._lookbackEnabled) {
                                var l = JSON.stringify({
                                    recordingID: t._recordingID,
                                    recordingConditionThreshold: t._recordingConditionThreshold,
                                    threadID: t._threadID,
                                    sessionID: t._sessionID,
                                    tabID: t._tabID,
                                    appID: t._appID,
                                    seqID: t._sentSeqID,
                                    startTime: t._startTime,
                                    time: Date.now(),
                                    exceptions: t._exceptions,
                                    failedNetwork: t._failedNetwork,
                                    hasVerboseDebug: t._hasVerboseDebug,
                                    eventCount: t._eventCount,
                                    recordingStatuses: t._recordingStatuses,
                                    triggeredSessions: t._triggeredSessions,
                                    lookbackEnabled: t._lookbackEnabled,
                                    shouldAuditPII: t._shouldAuditPII,
                                    serialUnloadCount: t._serialUnloadCount,
                                    customPropCount: t._customPropCount
                                });
                                try {
                                    oe.setItem(A, l)
                                } catch (e) {
                                    m.default.set(A, l, {
                                        expires: 1 / 48,
                                        sameSite: "Lax"
                                    })
                                }
                                var f = t._filterManager ? t._filterManager.unload() : void 0,
                                    d = t._webVitalsManager ? t._webVitalsManager.unload() : void 0,
                                    p = {
                                        events: r,
                                        seqID: t._seenSeqID,
                                        hrefActivityCounts: t._hrefActivityCounts,
                                        hrefMaxScroll: t._hrefMaxScroll,
                                        didSkipSerializingEvents: n
                                    };
                                try {
                                    oe.setItem(U, JSON.stringify(k(k({}, p), {}, {
                                        filterManagerData: f,
                                        webVitalsManagerData: d
                                    })))
                                } catch (e) {
                                    oe.setItem(U, JSON.stringify(p))
                                }
                            }
                        } catch (e) {}
                    }
                })), window._lr_loaded && console.error("LogRocket has already been loaded, loading a second instance is not supported. This is often caused by loading LogRocket as a package in your application and as a script tag."), window._lr_loaded = !0, this._XML = window._lrXMLHttpRequest || XMLHttpRequest, this._worker = new y.default, this._wall = new g.MessageSender({
                    worker: this._worker
                }), this._currentURL = window.location.href, this._lookbackEnabled = l, this._recordingStatuses = h, this._scriptVersion = O, this._sdkVersion = E, this._scriptSrc = K, this._shouldRegisterBrowser = o, this._shouldIdentifyAnonymous = c, this._startTime = Date.now(), this._loadTime = Date.now(), this._clicksToProcess = [], this._stats = {
                    appID: null,
                    wallBytes: null,
                    wallByteStreams: null,
                    upload: null,
                    bytes: null,
                    time: null
                }, window.addEventListener("beforeunload", this._unload), window.addEventListener("unload", this._unload), document.addEventListener("deviceready", this._cordovaDeviceReady, !1), this._webVitalsManager = new _.default({
                    logger: this
                })
            }
            return (0, c.default)(e, [{
                key: "setLocalStorageItem",
                value: function (e, t) {
                    ie.setItem("".concat(V).concat(this._appID, "_").concat(e), t)
                }
            }, {
                key: "getLocalStorageItem",
                value: function (e) {
                    return ie.getItem("".concat(V).concat(this._appID, "_").concat(e))
                }
            }, {
                key: "_isEventDisabled",
                value: function (e, t) {
                    if (this._isDisabled) return !0;
                    switch (e) {
                    case "lr.redux.ReduxAction":
                        return this._isReduxDisabled;
                    case "lr.core.LogEvent":
                        return this._isConsoleDisabled && "WARN" !== t.logLevel && "ERROR" !== t.logLevel;
                    default:
                        return !1
                    }
                }
            }, {
                key: "_trackVisitedURL",
                value: function (e) {
                    this._lookbackEnabled || this._recordingStatuses[this._sessionID] || this._visitedURLs.has(e) || (this._visitedURLs.add(e), this._wall.postMessage({
                        type: "GET_SUFFIX",
                        visitedURLs: (0, d.setToArray)(this._visitedURLs)
                    }))
                }
            }, {
                key: "init",
                value: function (e) {
                    var t = this,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = r.clickEffectTimeout,
                        o = void 0 === n ? fe.clickEffectTimeout : n,
                        i = r.dashboardHost,
                        a = void 0 === i ? fe.dashboardHost : i,
                        u = r.release,
                        c = r.serverURL,
                        l = void 0 === c ? fe.serverURL : c,
                        y = r.statsURL,
                        g = void 0 === y ? fe.statsURL : y,
                        v = r.statsSamplingRate,
                        b = void 0 === v ? F : v,
                        _ = r.limitedLookbackInterval,
                        P = void 0 === _ ? 3e4 : _,
                        x = r.lookbackLoopInterval,
                        T = void 0 === x ? 1e3 : x,
                        j = r.runLoopInterval,
                        N = void 0 === j ? 500 : j,
                        D = r.uploadTimeInterval,
                        R = void 0 === D ? 3e3 : D,
                        C = r.maxWallBytes,
                        L = void 0 === C ? 15e7 : C,
                        M = r.maxWallStreamBytes,
                        B = void 0 === M ? 1e8 : M,
                        V = r.maxBufferedBytes,
                        G = void 0 === V ? 5e7 : V,
                        H = r.maxUserTraitBytes,
                        q = void 0 === H ? 128 : H,
                        z = r.autoStart,
                        Y = void 0 === z || z,
                        J = r.shouldConnectTabs,
                        W = void 0 === J || J,
                        X = r.connectedTabCheckInterval,
                        $ = void 0 === X ? 100 : X,
                        K = r.rootHostname,
                        Q = r.newSessionTimeThreshold,
                        ee = void 0 === Q ? 12e4 : Q,
                        re = r.inactivityTimeThreshold,
                        ne = void 0 === re ? 18e5 : re,
                        ie = r.activeUserPingTimeout,
                        ae = void 0 === ie ? 5e3 : ie,
                        se = r.bufferTimeout,
                        ue = void 0 === se ? 6e4 : se,
                        ce = r.shouldSendData,
                        le = void 0 === ce ? function () {
                            return !0
                        } : ce,
                        de = r.shouldCaptureNPS,
                        pe = void 0 === de || de,
                        he = r.dom,
                        ye = r.shouldCaptureIP,
                        ge = void 0 === ye || ye,
                        ve = r.shouldDebugLog,
                        me = void 0 === ve || ve,
                        be = r.recordingStatuses,
                        we = r.mergeIframes,
                        _e = void 0 !== we && we,
                        Oe = r.enableVerboseLogging,
                        Ie = void 0 !== Oe && Oe,
                        Ee = /^[a-z0-9_-]+\/[a-z0-9_-]+$/;
                    if ((0, f.default)(!this._didInit, "LogRocket.init() was already called. You may only call LogRocket.init() once."), (0, f.default)(!!e && "string" == typeof e && Ee.test(e), "LogRocket: must pass a valid application id to the LogRocket instance."), this._shouldDebugLog = me, 0 === e.indexOf("au2drp/")) return this._disableAndFreeMemory(), void this._consoleLog("warn", "LogRocket: ".concat(Z, " Disabling ..."));
                    if (this._isDisabled) this._consoleLog("error", "LogRocket queue has overflowed. Call LogRocket.init() earlier in your application.");
                    else {
                        if (he) {
                            var Se = he.textSanitizer && -1 === te.indexOf(he.textSanitizer),
                                Pe = he.inputSanitizer && -1 === te.indexOf(he.inputSanitizer);
                            (Se || Pe) && (this._consoleLog("warn", "Invalid dom sanitizer specified. Switching to default. Valid options are ".concat(te.join(", "))), he.textSanitizer = Se ? "default" : he.textSanitizer, he.inputSanitizer = Pe ? "default" : he.inputSanitizer)
                        }
                        if (this._didInit = !0, this._recordingID = (0, d.makeRecordingID)(), this._tabID = null, this._threadID = 0, this._sessionID = 0, this._seqID = 0, this._seenSeqID = 0, this._sentSeqID = 0, this._isInactive = !1, this._isOverQuota = !1, this._shouldCaptureIP = ge, this._lastInteractionTime = this._startTime, this._lastBufferTime = this._startTime, this._statsSamplingRate = b, this._release = u, this._inactivityTimeThreshold = ne, this._activeUserPingTimeout = ae, this._bufferTimeout = ue, this._limitedLookbackInterval = P, this._lookbackLoopInterval = T, this._runLoopInterval = N, this._LCPCaptureInterval = he && Number.isInteger(he.LCPCaptureInterval) ? he.LCPCaptureInterval : 500, this._CLSTrackingTimeout = he && Number.isInteger(he.CLSTrackingTimeout) ? he.CLSTrackingTimeout : 6e5, this._PageLoadStatsCutoff = he && Number.isInteger(he.PageLoadStatsCutoff) ? he.PageLoadStatsCutoff : 6e4, this._maxWallBytes = L, this._maxWallStreamBytes = B, this._maxBufferedBytes = G, this._maxUserTraitBytes = q, this._uploadTimeInterval = R, this._newSessionTimeThreshold = ee, this._statsURL = g.replace(/\/*$/, ""), this._serverURL = l.replace(/\/*$/, ""), this._pendingEvents = [], this._config = r, this._dashboardHost = a.replace(/\/*$/, ""), this._appID = e, this._shouldSendData = le, this._videoOpts = he, this._shouldConnectTabs = W, this._connectedTabCheckInterval = $, this._autoStart = Y, this._hasVerboseDebug = null, this._pendingVerboseDebug = [], this._cookiePrefix = "", this._shouldCloneResponse = r && r.network && "function" == typeof r.network.responseSanitizer, this._clickEffectTimeout = o, this._disablePerformanceMonitoring = !0, this._eventCount = 0, this._hrefActivityCounts = {}, this._hrefMaxScroll = {}, this._isIframe = window.parent !== window, this._mergeIframes = _e, this._shouldAuditPII = !1, this._shouldCaptureNPS = pe, this._serialUnloadCount = 0, this._customPropCount = 0, be && (this._recordingStatuses = k(k({}, this._recordingStatuses), be)), W && K) {
                            var xe = window.location.hostname.length - K.length,
                                Te = window.location.hostname.substr(xe);
                            Te === K ? (this._rootHostname = K, this._cookiePrefix = "".concat(btoa(K), "-")) : this._consoleLog("warn", "Ignoring rootHostname '".concat(K, "', the current host '").concat(window.location.hostname, "' is not a valid ancestor."))
                        }
                        this._stats.appID = this._appID, this._logVerbose("init");
                        try {
                            var je, ke = oe.getItem(A);
                            if (ke || (ke = m.default.get(A)), ke) {
                                var Ne = JSON.parse(ke);
                                if (Ne.appID === e)
                                    if (this._startTime - Ne.time > ee) this._logVerbose("persisted data too old: ".concat(this._startTime, " - ").concat(Ne.time, " = ").concat(this._startTime - Ne.time));
                                    else {
                                        this._lookbackEnabled = Ne.lookbackEnabled, this._recordingID = Ne.recordingID, this._recordingConditionThreshold = Ne.recordingConditionThreshold, this._sessionID = Ne.sessionID, this._tabID = Ne.tabID, this._threadID = Ne.threadID + 1, this._seqID = Ne.seqID, this._seenSeqID = Ne.seqID, this._sentSeqID = Ne.seqID, this._startTime = Ne.startTime, this._hasVerboseDebug = Ne.hasVerboseDebug, this._eventCount = Ne.eventCount || 0, this._shouldAuditPII = Ne.shouldAuditPII, this._serialUnloadCount = Ne.serialUnloadCount || 0, this._customPropCount = Ne.customPropCount || 0, Ne.recordingStatuses ? this._recordingStatuses = Ne.recordingStatuses : Ne.isRecording && (this._recordingStatuses = (0, s.default)({}, this._sessionID, !0)), Ne.triggeredSessions ? this._triggeredSessions = Ne.triggeredSessions : Ne.hasTrigger && (this._triggeredSessions = [this._sessionID]), this._logVerbose("init persisted session with seqID: ".concat(Ne.seqID)), this._exceptions = Ne.exceptions || {}, this._failedNetwork = Ne.failedNetwork || {};
                                        var De = oe.getItem(U),
                                            Ae = k(k({}, Ne), {}, {
                                                pendingReadFailed: !0,
                                                pendingEventCount: -1,
                                                pendingSeqID: -1,
                                                didSkipSerializingEvents: !1
                                            });
                                        if (De) {
                                            var Re = JSON.parse(De);
                                            this._logVerbose("init stored data with seqID: ".concat(Re.seqID)), this._seqID = Re.seqID, this._seenSeqID = Re.seqID, this._pendingEvents = Re.events.map((function (e) {
                                                return new Uint8Array(e.split("").map((function (e) {
                                                    return e.charCodeAt(0)
                                                })))
                                            })), Ae.pendingReadFailed = !1, Ae.pendingEventCount = Array.isArray(Re.events) ? Re.events.length : -1, Ae.pendingSeqID = void 0 === Re.seqID ? -1 : Re.seqID, Ae.didSkipSerializingEvents = !!Re.didSkipSerializingEvents, this._hrefActivityCounts = Re.hrefActivityCounts || {}, this._hrefMaxScroll = Re.hrefMaxScroll || {}, je = Re.filterManagerData, Re.webVitalsManagerData && this._webVitalsManager.handleUnloadData(Re.webVitalsManagerData)
                                        } else this._logVerbose("no pending data found");
                                        this.addEvent("lr.browser.UnloadEvent", (function () {
                                            return Ae
                                        }), {
                                            timeOverride: Ne.time,
                                            threadOverride: Ne.threadID
                                        })
                                    }
                            }
                            this._eventHooks = new O.default(this), this._filterManager = new w.default({
                                logger: this,
                                hydratedData: je
                            }), this._eventHooks.addObserver(this._filterManager), this._guidesManager = new S.GuidesManager({
                                eventHooks: this._eventHooks,
                                logger: this
                            }), this._piiAuditor = new I.default(this), this._npsMonitor = new E.default(this), m.default.remove(A), oe.removeItem(A), oe.removeItem(U);
                            var Ce = !1;
                            null == this._tabID && (this._tabID = (0, d.uuid)(), this._logVerbose("new tab"), Ce = this._mergeIframes && this._isIframe), this._sessionInfo = this._getSessionInfo(), this._recordingID = this._sessionInfo.recordingID, this._sessionID !== this._sessionInfo.sessionID && (this._logVerbose("sessionID changing via getSessionInfo"), this._startNewSession({
                                sessionID: this._sessionInfo.sessionID,
                                limitedReset: !0
                            })), this._sessionID = this._sessionInfo.sessionID, this._recordingConditionThreshold = this._sessionInfo.recordingConditionThreshold, this._persistSessionInfo({
                                lastActivity: Date.now()
                            }), this._clicksToProcess = [], this._worker.addEventListener("message", (function (e) {
                                if (!t._isTruncated) switch (e.data.type) {
                                case "SUFFIX":
                                    t._eventSuffix = new Uint8Array(e.data.suffix);
                                    break;
                                case "EVENT":
                                    e.data.shouldWarnAboutReduxSize && !t._didWarnAboutReduxSize && e.data.eventBuffer.byteLength >= 1e6 && (t._didWarnAboutReduxSize = !0, t._consoleLog("warn", "LogRocket: Redux state is large (> 1MB), consider using stateSanitizer to prevent data loss: https://docs.logrocket.com/reference#redux-logging")), t._pendingEvents.push(new Uint8Array(e.data.eventBuffer)), e.data.s === t._sessionID && t._seenSeqID++, e.data.error && (t._isTruncated = !0, t._truncatedSourceEvent = e.data.errorSource, t._consoleLog("warn", e.data.error));
                                    break;
                                default:
                                    (0, f.default)(!1, "Invalid event type from worker: ".concat(e.data.type))
                                }
                            })), Ie && this._maybeEnableVerboseLogging(100), this._startRunLoop(), this._startTabHeartbeat(), this._startConnectedTabWatcher(), this._startLookbackLoop(), setTimeout((function () {
                                t._logNewSession(), Ce && window.parent && "function" == typeof window.parent.postMessage && (window.parent.postMessage({
                                    type: "LR_INIT_IFRAME",
                                    tabID: t._tabID
                                }, "*"), t._logVerbose("posting tabID to iframe parent")), t._shouldRegisterBrowser && (t._unregisterBrowser = (0, p.default)(t, t._videoOpts)), t._unregisterPerformance = (0, h.default)(t)
                            })), this._flushEventBuffer()
                        } catch (e) {
                            throw this._sendErrorTelemetry(e), e
                        }
                    }
                }
            }, {
                key: "_flushEventBuffer",
                value: function () {
                    for (this._isBuffering = !1; this._bufferedEvents.length > 0;) this._bufferedEvents.shift()()
                }
            }, {
                key: "_maybeSendStats",
                value: function () {
                    Math.random() > this._statsSamplingRate || this._sendStats()
                }
            }, {
                key: "_sendStats",
                value: function () {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = [], r = 0, n = Object.keys(this.wallByteStreams); r < n.length; r++) {
                        var o = n[r];
                        t.push("".concat(o, ":").concat(this.wallByteStreams[o]))
                    }
                    this._stats.wallByteStreams = t.join(",");
                    var i = k(k({}, e), this._stats),
                        a = new this._XML;
                    a.open("POST", this._statsURL), a.timeout = 2e3, a.send(JSON.stringify(i))
                }
            }, {
                key: "_sendErrorTelemetry",
                value: function (e) {
                    var t = {
                        appID: this._appID,
                        recordingID: this._recordingID,
                        sessionID: this._sessionID
                    };
                    (0, d.sendErrorTelemetry)(e, {
                        extra: t
                    })
                }
            }, {
                key: "_sendSessionTelemetry",
                value: function (e) {
                    var t = {
                        appID: this._appID,
                        recordingID: this._recordingID,
                        sessionID: this._sessionID
                    };
                    (0, d.sendTelemetry)(e, {
                        extra: t
                    })
                }
            }, {
                key: "setClock",
                value: function (e) {
                    (0, f.default)(!this._didInit, "Cannot update clock after init()"), this._clock = e
                }
            }, {
                key: "_setupWithRelayMessages",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.filters,
                        r = void 0 === t ? [] : t,
                        n = e.recordingConditions,
                        o = void 0 === n ? [] : n,
                        i = e.guides,
                        a = void 0 === i ? [] : i;
                    this._setupFilterManager(r, o), this._guidesManager.setGuides(a), this._eventHooks.completeInit()
                }
            }, {
                key: "_setupFilterManager",
                value: function (e, t) {
                    if ((0, f.default)(this._didInit, "Cannot setupFilterManager before init()"), !this._didSetupFilterManager) {
                        void 0 === this._lookbackEnabled && (this._lookbackEnabled = !0);
                        var r = this._filterManager.setTriggers(e, t);
                        this._didSetupFilterManager = !0, void 0 === this._recordingStatuses[this._sessionID] && (this._recordingStatuses[this._sessionID] = !r)
                    }
                }
            }, {
                key: "_maybeEnableVerboseLogging",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (null == this._hasVerboseDebug) {
                        var t = Math.max(0, Math.min(+e || 0, 100)) / 100,
                            r = (0, d.isRecordingSampled)(this._recordingID, t);
                        if (!r) return this._hasVerboseDebug = !1, void(this._pendingVerboseDebug = []);
                        this._hasVerboseDebug = !0, this._pendingVerboseDebug.forEach(this._sendVerboseLog)
                    }
                }
            }, {
                key: "_disableAndFreeMemory",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this._isDisabled = !0, this._pendingEvents = [], e && this._sendStats(k(k({}, t), {}, {
                        sdkShutdownReason: e,
                        appID: this._appID,
                        recordingID: this._recordingID,
                        sessionID: this._sessionID
                    }))
                }
            }, {
                key: "urlSanitizer",
                value: function (e) {
                    return (0, d.applyUrlSanitizer)({
                        logger: this,
                        url: e
                    })
                }
            }, {
                key: "_logNewSession",
                value: function () {
                    var e = this;
                    if (this.addEvent("lr.Metadata", (function () {
                            return {
                                release: e._release,
                                sdkVersion: e._sdkVersion,
                                scriptVersion: e._scriptVersion,
                                scriptSrc: e._scriptSrc,
                                browserInfo: {
                                    codeName: navigator.appCodeName,
                                    language: navigator.language,
                                    name: navigator.appName,
                                    platform: navigator.platform,
                                    useragent: navigator.userAgent,
                                    version: navigator.appVersion,
                                    href: e.urlSanitizer(window.location.href),
                                    referrer: document.referrer
                                },
                                outsideIntegrations: {
                                    hasIntercom: !!window.Intercom,
                                    hasZendesk: !!window.zE,
                                    hasDesk: !!window.Desk,
                                    hasZendeskChat: !!window.$zopim
                                },
                                isInactive: !e._autoStart,
                                userFingerprint: e._getUserFingerprint()
                            }
                        })), this._lastIdentifyCall) {
                        var t = this._lastIdentifyCall,
                            r = t.unseenUser,
                            n = (0, o.default)(t, ["unseenUser"]);
                        this.addEvent("lr.Identify", (function () {
                            return r && e._seenUsers.push({
                                seqID: e._seqID,
                                userID: n.userID
                            }), n
                        }))
                    } else this.identify();
                    window.performance && window.performance.timing && this._webVitalsManager.getWebVitals()
                }
            }, {
                key: "_getSessionInfo",
                value: function () {
                    var e = !1;
                    try {
                        var t = m.default.get("".concat(this._cookiePrefix).concat(C, "-").concat(this._appID));
                        if (t) {
                            var r = JSON.parse(t).heartbeat;
                            r && r > Date.now() - this._newSessionTimeThreshold && (this._logVerbose("_getSessionInfo(), should connect heartbeat"), e = !0)
                        }
                    } catch (e) {
                        this._logVerbose("_getSessionInfo(), exception trying to read heartbeat: ".concat(e.message))
                    }
                    try {
                        var n = m.default.get("".concat(this._cookiePrefix).concat(R, "-").concat(this._appID));
                        if (n) {
                            var o = JSON.parse(n);
                            if ((e || o.lastActivity > Date.now() - this._newSessionTimeThreshold) && o.lastActivity > Date.now() - this._inactivityTimeThreshold) return this._logVerbose("_getSessionInfo(), connect to ".concat(o.recordingID, "/").concat(o.sessionID, " from ").concat(this._recordingID, "/").concat(this._sessionID)), {
                                sessionID: o.sessionID,
                                recordingID: o.recordingID,
                                lastActivity: o.lastActivity,
                                recordingConditionThreshold: o.recordingConditionThreshold
                            }
                        }
                    } catch (e) {
                        this._logVerbose("_getSessionInfo(), exception trying to read session state: ".concat(e.message))
                    }
                    return this._logVerbose("_getSessionInfo(), first tab"), this._isFirstTab = !0, {
                        sessionID: this._sessionID,
                        recordingID: this._recordingID,
                        recordingConditionThreshold: this._recordingConditionThreshold,
                        lastActivity: this._lastInteractionTime
                    }
                }
            }, {
                key: "_persistSessionInfo",
                value: function (e) {
                    var t = e.lastActivity;
                    try {
                        if (this._sessionInfo = {
                                sessionID: this._sessionID,
                                recordingID: this._recordingID,
                                recordingConditionThreshold: this._recordingConditionThreshold,
                                lastActivity: t
                            }, !this._shouldConnectTabs) return;
                        m.default.set("".concat(this._cookiePrefix).concat(R, "-").concat(this._appID), JSON.stringify(this._sessionInfo), {
                            domain: this._rootHostname,
                            expires: 1,
                            sameSite: "Lax"
                        })
                    } catch (e) {}
                }
            }, {
                key: "confirmSession",
                value: function (e) {
                    this._recordingStatuses[e] || (this._logVerbose("conditional recording started"), this._recordingStatuses[e] = !0, !1 !== this._lookbackEnabled && this._triggeredSessions.push(e))
                }
            }, {
                key: "startNewSession",
                value: function () {
                    this._didInit ? (this._logVerbose("startNewSession called"), this._lastIdentifyCall = null, this._startNewSession(), this._flushEventBuffer()) : console.error("LogRocket: init() must be called before startNewSession()")
                }
            }, {
                key: "start",
                value: function () {
                    this.addEvent("lr.Activate", (function () {
                        return {}
                    }))
                }
            }, {
                key: "track",
                value: function (e) {
                    var t = this,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if ("string" == typeof e)
                        if (0 !== e.length) {
                            var n = (0, x.sanitizeEventProps)(r, P.MAX_CUSTOM_PROPS_PER_SESSION - this._customPropCount),
                                o = n.eventProps,
                                i = n.errors;
                            this._customPropCount += Object.keys(o).length, i.forEach((function (e) {
                                return t._consoleLog("warn", "LogRocket Track API: ".concat((0, T.printEventPropError)(e)))
                            })), this.addEvent("lr.CustomEvent", (function () {
                                return {
                                    eventName: e,
                                    eventProperties: o
                                }
                            }))
                        } else this._consoleLog("warn", "LogRocket: custom event name must be not be an empty string");
                    else this._consoleLog("warn", "LogRocket: must pass string to track()")
                }
            }, {
                key: "_startNewSession",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.sessionID,
                        r = e.isLookbackSnapshot,
                        n = e.limitedReset,
                        o = n ? " using limited reset" : "";
                    if (void 0 !== t ? (this._logVerbose("_startNewSession".concat(o, " with explicit sessionID: ").concat(t)), this._sessionID = t) : (this._sessionID++, this._logVerbose("_startNewSession".concat(o))), this._seqID = 0, this._seenSeqID = 0, this._sentSeqID = 0, this._threadID = 0, this._identifyCalls = 0, this._startTime = Date.now(), this._isInactive = !1, this._isDisabled = !1, this._isReduxDisabled = !1, this._isBuffering = !0, this._hasSessionURL = !1, this._lastInteractionTime = this._startTime, this._lastBufferTime = this._startTime, this._seenUsers = [], this._exceptions = {}, this._reduxActions = {}, this._failedNetwork = {}, this._inflightNetwork = {}, this._clicksToProcess = [], this._eventCount = 0, this._hrefActivityCounts = {}, this._hrefMaxScroll = {}, this._customPropCount = 0, r ? this._pendingEvents = [] : (this._isFirstTab = !1, this._guidesManager.reset(), this._filterManager.reset(), this._didSetupFilterManager = !1, this._eventHooks.reset(), this._shouldAuditPII = !1, this._piiAuditor.reset()), !n) {
                        if (this._bufferedEvents = [], this._persistSessionInfo({
                                lastActivity: this._startTime
                            }), this._logNewSession(), this._shouldRegisterBrowser && this._unregisterBrowser) {
                            var i = this._unregisterBrowser(r),
                                a = i.assetManager,
                                s = i.unsubs;
                            this._unregisterBrowser = (0, p.default)(this, k(k({}, this._videoOpts), {}, {
                                assetManager: a,
                                unsubs: s
                            }))
                        }
                        this._unregisterPerformance && (this._unregisterPerformance(), this._unregisterPerformance = (0, h.default)(this)), this._isIframe && null !== this._tabID && this._mergeIframes && window.parent && "function" == typeof window.parent.postMessage && (window.parent.postMessage({
                            type: "LR_INIT_IFRAME",
                            tabID: this._tabID
                        }, "*"), this._logVerbose("posting tabID to iframe parent in _startNewSession"))
                    }
                }
            }, {
                key: "_divineAnonymousId",
                value: function () {
                    if (this._lastIdentifyCall && this._lastIdentifyCall.isAnonymous) return this._lastIdentifyCall.userID;
                    try {
                        var e = ie.getItem(L);
                        if (e) return JSON.parse(e).userID
                    } catch (e) {}
                    var t = (0, d.uuid)();
                    try {
                        ie.setItem(L, JSON.stringify({
                            userID: t
                        }))
                    } catch (e) {}
                    return t
                }
            }, {
                key: "_enableSessionURL",
                value: function () {
                    if (!this._hasSessionURL) {
                        this._hasSessionURL = !0;
                        var e = this.recordingURL;
                        this._urlListeners.forEach((function (t) {
                            return t(e)
                        })), this._urlListeners = []
                    }
                }
            }, {
                key: "_getCurrentURL",
                value: function () {
                    return this._currentURL
                }
            }, {
                key: "getSessionURL",
                value: function (e) {
                    this._hasSessionURL ? e(this.recordingURL) : this._urlListeners.push(e)
                }
            }, {
                key: "version",
                get: function () {
                    return "".concat(this._sdkVersion, "-").concat(this._scriptVersion)
                }
            }, {
                key: "recordingID",
                get: function () {
                    return this._didInit ? "".concat(this._recordingID, "/").concat(this.sessionID) : "Must call LogRocket.init() before sessionURL becomes available."
                }
            }, {
                key: "recordingURL",
                get: function () {
                    if (!this._didInit) return "Must call LogRocket.init() before sessionURL becomes available.";
                    if (this._isOverQuota) return Z;
                    if (!this._hasSessionURL) return null;
                    var e = "".concat(this._dashboardHost, "/").concat(this._appID, "/s/").concat(this.recordingID, "/").concat(this._tabID);
                    if (this._isInactive) return "User was inactive for more than 30 minutes, recording was paused. Previous activity: ".concat(e);
                    var t = Date.now();
                    return "".concat(e, "?t=").concat(t)
                }
            }, {
                key: "tabID",
                get: function () {
                    return this._tabID
                }
            }, {
                key: "threadID",
                get: function () {
                    return this._threadID
                }
            }, {
                key: "sessionID",
                get: function () {
                    return this._sessionID
                }
            }, {
                key: "uninstall",
                value: function () {
                    this._isDisabled = !0, this._unregisterBrowser && this._unregisterBrowser(), this._unregisterPerformance && this._unregisterPerformance(), this._webVitalsManager && this._webVitalsManager.unregisterWebVitals(), this._worker && this._worker.terminate(), this._worker = null, this._piiAuditor && this._piiAuditor.shutdown(), window._lr_loaded = !1
                }
            }, {
                key: "addRedactedInputForAudit",
                value: function () {
                    var e;
                    this._shouldAuditPII && (e = this._piiAuditor).addInput.apply(e, arguments)
                }
            }, {
                key: "_auditNetworkRequest",
                value: function () {
                    var e;
                    this._shouldAuditPII && (e = this._piiAuditor).match.apply(e, arguments)
                }
            }, {
                key: "_captureNPSResponse",
                value: function (e) {
                    this._shouldCaptureNPS && this._npsMonitor.match(e)
                }
            }]), e
        }();
    t.default = de
}, function (e, t, r) {
    var n = r(85);
    e.exports = function (e, t) {
        if (null == e) return {};
        var r, o, i = n(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (o = 0; o < a.length; o++) r = a[o], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
        }
        return i
    }
}, function (e, t, r) {
    "use strict";
    e.exports = function (e, t, r, n, o, i, a, s) {
        if (!e) {
            var u;
            if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var c = [r, n, o, i, a, s],
                    l = 0;
                (u = new Error(t.replace(/%s/g, (function () {
                    return c[l++]
                })))).name = "Invariant Violation"
            }
            throw u.framesToPop = 1, u
        }
    }
}, function (e, t, r) {
    "use strict";
    (function (n) {
        var o = r(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = o(r(7)),
            a = -2,
            s = Object.create(null),
            u = function (e, t) {
                function r(r) {
                    if ("function" != typeof t[r]) throw new Error("second argument to ARSON.registerType(" + JSON.stringify(e) + ", ...) must be an object with a " + r + " method")
                }
                r("deconstruct"), r("reconstruct"), s[e] = t
            },
            c = Object.prototype.toString;
        "function" == typeof n && "function" == typeof n.isBuffer && u("Buffer", {
            deconstruct: function (e) {
                return n.isBuffer(e) && [e.toString("base64"), "base64"]
            },
            reconstruct: function (e) {
                return e && n.from(e[0], e[1])
            }
        }), u("Date", {
            deconstruct: function (e) {
                return "[object Date]" === c.call(e) && [e.toJSON()]
            },
            reconstruct: function (e) {
                return e && new Date(e[0])
            }
        }), u("RegExp", {
            deconstruct: function (e) {
                if ("[object RegExp]" === c.call(e)) {
                    var t = [e.source],
                        r = "";
                    return e.ignoreCase && (r += "i"), e.multiline && (r += "m"), e.global && (r += "g"), r && t.push(r), t
                }
            },
            reconstruct: function (e) {
                return e && new RegExp(e[0], e[1])
            }
        }), "function" == typeof Set && "function" == typeof Array.from && u("Set", {
            deconstruct: function (e) {
                if ("[object Set]" === c.call(e)) return Array.from(e)
            },
            reconstruct: function (e) {
                if (!e) return new Set;
                e.forEach(this.add, this)
            }
        }), "function" == typeof Map && "function" == typeof Array.from && u("Map", {
            deconstruct: function (e) {
                if ("[object Map]" === c.call(e)) return Array.from(e)
            },
            reconstruct: function (e) {
                if (!e) return new Map;
                e.forEach((function (e) {
                    this.set(e[0], e[1])
                }), this)
            }
        });
        var l = {
            encode: function (e) {
                return JSON.stringify(function (e) {
                    var t = [],
                        r = "function" == typeof Map && new Map;

                    function n(e) {
                        switch ((0, i.default)(e)) {
                        case "undefined":
                            return -1;
                        case "number":
                            if (isNaN(e)) return -3;
                            if (!isFinite(e)) return e < 0 ? -5 : -4
                        }
                        var n;
                        return r ? void 0 === (n = r.get(e)) && (n = t.push(e) - 1, r.set(e, n)) : (n = t.indexOf(e)) < 0 && (n = t.push(e) - 1), n
                    }

                    function o(e) {
                        var t = e;
                        if (e && "object" === (0, i.default)(e)) {
                            var r = Object.keys(e);
                            if (function (e) {
                                    if (e && "object" === (0, i.default)(e)) {
                                        return (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__) === Object.prototype
                                    }
                                    return !1
                                }(e)) t = {};
                            else {
                                if (!Array.isArray(e)) {
                                    for (var o in s) {
                                        var a = s[o].deconstruct(e);
                                        if (a) {
                                            for (c = 0; c < a.length; ++c) a[c] = n(a[c]);
                                            return a.unshift(o), a
                                        }
                                    }
                                    return {}.toString.call(e)
                                }
                                t = Array(e.length);
                                var u = e.length;
                                if (u > r.length)
                                    for (var c = 0; c < u; ++c) t[c] = -2
                            }
                            r.forEach((function (r) {
                                t[r] = n(e[r])
                            }))
                        }
                        return t
                    }
                    var a = n(e);
                    if (a < 0) return a;
                    for (var u = [], c = 0; c < t.length; ++c) u[c] = o(t[c]);
                    return u
                }(e))
            },
            decode: function (e) {
                return function (e) {
                    if ("number" == typeof e && e < 0) return n(e);
                    var t = new Array(e.length);

                    function r(e) {
                        return e in t ? t[e] : t[e] = n(e)
                    }

                    function n(t) {
                        if (t < 0) {
                            if (-1 === t) return;
                            if (t === a) return;
                            if (-3 === t) return NaN;
                            if (-4 === t) return 1 / 0;
                            if (-5 === t) return -1 / 0;
                            throw new Error("invalid ARSON index: " + t)
                        }
                        var n = e[t];
                        if (n && "object" === (0, i.default)(n)) {
                            if (Array.isArray(n)) {
                                var c = n[0];
                                if ("string" == typeof c && c in s) {
                                    var l = s[c].reconstruct,
                                        f = l();
                                    return f && o.push({
                                        reconstruct: l,
                                        empty: f,
                                        argIndexes: n.slice(1)
                                    }), e[t] = f || l(n.slice(1).map(r))
                                }
                            }
                            u.push(n)
                        }
                        return n
                    }
                    var o = [],
                        u = [];
                    return e.forEach((function (e, t) {
                        r(t)
                    })), o.forEach((function (e) {
                        e.args = e.argIndexes.map(r)
                    })), u.forEach((function (t) {
                        Object.keys(t).forEach((function (n) {
                            var o = t[n];
                            if ("number" == typeof o)
                                if (o < 0) {
                                    if (o === a) return void delete t[n];
                                    t[n] = r(o)
                                } else t[n] = e[o]
                        }))
                    })), o.forEach((function (e) {
                        e.reconstruct.call(e.empty, e.args)
                    })), e[0]
                }(JSON.parse(e))
            }
        };
        t.default = l, e.exports = t.default
    }).call(this, r(97).Buffer)
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};
        return function () {
            var r;
            try {
                r = e.apply(void 0, arguments)
            } catch (e) {
                if ("undefined" != typeof window && window._lrdebug) throw e;
                var n = t(e);
                (0, i.default)("LogRocket", e), (0, o.default)(e, n)
            }
            return r
        }
    };
    var o = n(r(42)),
        i = n(r(43));
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.sendTelemetry = function (e, t) {
        if ("undefined" != typeof window && window._lrdebug) return void(0, i.default)(e);
        if (t && t.extra && t.extra.appID && "function" == typeof t.extra.appID.indexOf && 0 === t.extra.appID.indexOf("au2drp/") && Math.random() >= .25) return;
        c(u({
            message: e
        }, t))
    }, t.default = function (e, t) {
        try {
            var r, n, o = e.message;
            try {
                r = JSON.stringify(t).slice(0, 1e3)
            } catch (e) {
                try {
                    r = "Could not stringify payload: ".concat(Object.prototype.toString.call(t))
                } catch (e) {}
            }
            try {
                n = a.default.computeStackTrace(e).stack.map((function (e) {
                    return {
                        filename: e.url,
                        lineno: e.line,
                        colno: e.column,
                        function: e.func || "?"
                    }
                }))
            } catch (e) {}
            c({
                message: o,
                extra: {
                    stringPayload: r
                },
                exception: {
                    values: [{
                        type: e.type,
                        value: o,
                        stacktrace: {
                            frames: n
                        }
                    }]
                }
            })
        } catch (e) {
            (0, i.default)("Failed to send", e)
        }
    };
    var o = n(r(3)),
        i = n(r(43)),
        a = n(r(103));

    function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(r), !0).forEach((function (t) {
                (0, o.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function c(e) {
        var t = window._lrXMLHttpRequest || XMLHttpRequest;
        try {
            var r = new t,
                n = e.message;
            r.open("POST", "https://e.logrocket.com/api/3/store/?sentry_version=7&sentry_client=http%2F3.8.0&sentry_key=b64162b4187a4c5caae8a68a7e291793"), r.send(JSON.stringify(u({
                event_id: "",
                message: n,
                logger: "javascript",
                platform: "javascript",
                request: {
                    headers: {
                        "User-Agent": "undefined" != typeof navigator && navigator.userAgent
                    },
                    url: "undefined" != typeof location && location.href
                },
                release: "12.114.0",
                environment: "prod"
            }, e)))
        } catch (e) {
            (0, i.default)("Failed to send", e)
        }
    }
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = "undefined" != typeof console && console.error && console.error.bind ? console.error.bind(console) : function () {};
    t.default = n, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        for (var r = 0; r < e.length; r++)
            if (t(e[r])) return r;
        return -1
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return e && t && e.substring(r, r + t.length) === t
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function e(t) {
        return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = e.replace(/[^0-9a-f]/g, "");
        return parseInt("0x".concat(t), 16) || 0
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DEMO_APP_ID = t.DEMO_APP_SLUG = t.DEMO_ORG_SLUG = void 0;
    var n = "demo-kdz7k";
    t.DEMO_ORG_SLUG = n;
    var o = "logrocket";
    t.DEMO_APP_SLUG = o;
    var i = "".concat(n, "/").concat(o);
    t.DEMO_APP_ID = i
}, function (e, t, r) {
    var n = r(129),
        o = r(210);
    e.exports = function (e, t, r) {
        return o(e, t, n(r, 2), !0)
    }
}, function (e, t, r) {
    var n = r(19),
        o = r(137),
        i = r(138),
        a = r(139),
        s = r(140),
        u = r(141);

    function c(e) {
        var t = this.__data__ = new n(e);
        this.size = t.size
    }
    c.prototype.clear = o, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = s, c.prototype.set = u, e.exports = c
}, function (e, t) {
    e.exports = function (e, t) {
        return e === t || e != e && t != t
    }
}, function (e, t, r) {
    var n = r(15),
        o = r(28);
    e.exports = function (e) {
        if (!o(e)) return !1;
        var t = n(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
    }
}, function (e, t, r) {
    (function (t) {
        var r = "object" == typeof t && t && t.Object === Object && t;
        e.exports = r
    }).call(this, r(12))
}, function (e, t) {
    var r = Function.prototype.toString;
    e.exports = function (e) {
        if (null != e) {
            try {
                return r.call(e)
            } catch (e) {}
            try {
                return e + ""
            } catch (e) {}
        }
        return ""
    }
}, function (e, t, r) {
    var n = r(160),
        o = r(16);
    e.exports = function e(t, r, i, a, s) {
        return t === r || (null == t || null == r || !o(t) && !o(r) ? t != t && r != r : n(t, r, i, a, e, s))
    }
}, function (e, t, r) {
    var n = r(161),
        o = r(164),
        i = r(165);
    e.exports = function (e, t, r, a, s, u) {
        var c = 1 & r,
            l = e.length,
            f = t.length;
        if (l != f && !(c && f > l)) return !1;
        var d = u.get(e),
            p = u.get(t);
        if (d && p) return d == t && p == e;
        var h = -1,
            y = !0,
            g = 2 & r ? new n : void 0;
        for (u.set(e, t), u.set(t, e); ++h < l;) {
            var v = e[h],
                m = t[h];
            if (a) var b = c ? a(m, v, h, t, e, u) : a(v, m, h, e, t, u);
            if (void 0 !== b) {
                if (b) continue;
                y = !1;
                break
            }
            if (g) {
                if (!o(t, (function (e, t) {
                        if (!i(g, t) && (v === e || s(v, e, r, a, u))) return g.push(t)
                    }))) {
                    y = !1;
                    break
                }
            } else if (v !== m && !s(v, m, r, a, u)) {
                y = !1;
                break
            }
        }
        return u.delete(e), u.delete(t), y
    }
}, function (e, t, r) {
    var n = r(177),
        o = r(184),
        i = r(188);
    e.exports = function (e) {
        return i(e) ? n(e) : o(e)
    }
}, function (e, t, r) {
    var n = r(179),
        o = r(16),
        i = Object.prototype,
        a = i.hasOwnProperty,
        s = i.propertyIsEnumerable,
        u = n(function () {
            return arguments
        }()) ? n : function (e) {
            return o(e) && a.call(e, "callee") && !s.call(e, "callee")
        };
    e.exports = u
}, function (e, t, r) {
    (function (e) {
        var n = r(9),
            o = r(180),
            i = t && !t.nodeType && t,
            a = i && "object" == typeof e && e && !e.nodeType && e,
            s = a && a.exports === i ? n.Buffer : void 0,
            u = (s ? s.isBuffer : void 0) || o;
        e.exports = u
    }).call(this, r(60)(e))
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function (e, t) {
    var r = /^(?:0|[1-9]\d*)$/;
    e.exports = function (e, t) {
        var n = typeof e;
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && r.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}, function (e, t, r) {
    var n = r(181),
        o = r(182),
        i = r(183),
        a = i && i.isTypedArray,
        s = a ? o(a) : n;
    e.exports = s
}, function (e, t, r) {
    var n = r(28);
    e.exports = function (e) {
        return e == e && !n(e)
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return function (r) {
            return null != r && (r[e] === t && (void 0 !== t || e in Object(r)))
        }
    }
}, function (e, t, r) {
    var n = r(66),
        o = r(25);
    e.exports = function (e, t) {
        for (var r = 0, i = (t = n(t, e)).length; null != e && r < i;) e = e[o(t[r++])];
        return r && r == i ? e : void 0
    }
}, function (e, t, r) {
    var n = r(10),
        o = r(31),
        i = r(197),
        a = r(200);
    e.exports = function (e, t) {
        return n(e) ? e : o(e, t) ? [e] : i(a(e))
    }
}, function (e, t, r) {
    var n = r(227),
        o = r(17);
    e.exports = function (e, t, r) {
        var i = !0,
            a = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        return o(r) && (i = "leading" in r ? !!r.leading : i, a = "trailing" in r ? !!r.trailing : a), n(e, t, {
            leading: i,
            maxWait: t,
            trailing: a
        })
    }
}, function (e, t, r) {
    var n = r(229),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = n || o || Function("return this")();
    e.exports = i
}, function (e, t, r) {
    var n = r(17),
        o = r(230),
        i = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        c = parseInt;
    e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (o(e)) return NaN;
        if (n(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = n(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(i, "");
        var r = s.test(e);
        return r || u.test(e) ? c(e.slice(2), r ? 2 : 8) : a.test(e) ? NaN : +e
    }
}, function (e, t, r) {
    var n = r(71),
        o = r(231),
        i = r(232),
        a = n ? n.toStringTag : void 0;
    e.exports = function (e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? o(e) : i(e)
    }
}, function (e, t, r) {
    var n = r(68).Symbol;
    e.exports = n
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = Date.now.bind(Date),
        o = n(),
        i = "undefined" != typeof performance && performance.now ? performance.now.bind(performance) : function () {
            return n() - o
        };
    t.default = i, e.exports = t.default
}, function (e, t, r) {
    e.exports = r(240)
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DONE_POSTING = void 0;
    t.DONE_POSTING = -1
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t, r, n) {
        var o = r.activeTransactions,
            i = void 0 === o ? {} : o,
            u = r.activeTimeOnPageHooks,
            c = void 0 === u ? {} : u,
            f = r.compoundTriggerState,
            d = void 0 === f ? {} : f,
            p = n.onMatch,
            h = void 0 === p ? function () {} : p,
            y = n.onTransactionStart,
            g = void 0 === y ? function () {} : y,
            v = n.onTransactionEnd,
            m = void 0 === v ? function () {} : v,
            b = n.onTimeOnPageStart,
            w = void 0 === b ? function () {} : b,
            _ = n.onUpdateCompoundTriggerState,
            O = void 0 === _ ? function () {} : _,
            I = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (t.trigger) return (0, a.default)(l(e, t.trigger), e, h, I);
        if (t.transaction && t.transaction.startTrigger && t.transaction.endTrigger) return (0, a.default)(l(e, t.transaction.startTrigger), e, g, I), !!i[t.uuid] && (0, a.default)(l(e, t.transaction.endTrigger), e, m, I);
        if (t.compoundTrigger) return (0, s.default)(t, e, {
            activeTimeOnPageHooks: c,
            compoundTriggerState: d
        }, {
            onMatch: h,
            onTimeOnPageStart: w,
            onUpdateCompoundTriggerState: O
        }, I);
        return !1
    };
    var o = n(r(3)),
        i = n(r(76)),
        a = n(r(77)),
        s = n(r(253));

    function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? u(Object(r), !0).forEach((function (t) {
                (0, o.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }
    var l = function (e, t) {
        if (i.default[e.type]) {
            var r = t.params.filter((function (t) {
                return t.name.toLowerCase() in i.default[e.type]
            }));
            return c(c({}, t), {}, {
                params: r
            })
        }
        return t
    };
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = n(r(7)),
        i = r(2);

    function a(e, t) {
        var r;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (r = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0,
                    o = function () {};
                return {
                    s: o,
                    n: function () {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, a = !0,
            u = !1;
        return {
            s: function () {
                r = e[Symbol.iterator]()
            },
            n: function () {
                var e = r.next();
                return a = e.done, e
            },
            e: function (e) {
                u = !0, i = e
            },
            f: function () {
                try {
                    a || null == r.return || r.return()
                } finally {
                    if (u) throw i
                }
            }
        }
    }

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var u = {
            method: function (e, t, r) {
                if (e.data && e.data.method) {
                    var n, o = a(r);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var i = n.value;
                            if (t(e.data.method, i)) return !0
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                }
                return !1
            },
            url: function (e, t, r) {
                if (e.data && e.data.url) {
                    var n, o = a(r);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var i = n.value;
                            if (t(e.data.url, i)) return !0
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                }
                return !1
            },
            status: function (e, t, r) {
                if (e.data && "number" == typeof e.data.status) {
                    var n, o = a(r);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var i = n.value;
                            if (t(e.data.status, i)) return !0
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                }
                return !1
            },
            duration: function (e, t, r) {
                if (e.data && "number" == typeof e.data.duration) {
                    var n, o = a(r);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var i = n.value;
                            if (t(e.data.duration, i)) return !0
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                }
                return !1
            },
            response_body: function (e, t, r) {
                if (e && e.data && e.data.body) {
                    var n = function (e) {
                        switch (Object.getPrototypeOf(e)) {
                        case String.prototype:
                            return e;
                        case null:
                        case Object.prototype:
                            return JSON.stringify(e);
                        default:
                            return
                        }
                    }(e.data.body);
                    if (n) {
                        var o, i = a(r);
                        try {
                            for (i.s(); !(o = i.n()).done;) {
                                if (t(n, o.value)) return !0
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                    }
                }
                return !1
            }
        },
        c = {
            id: function (e, t, r) {
                if (e.elementInfo && e.elementInfo.attributes) {
                    var n, o = a(r);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var i = n.value;
                            if (t(e.elementInfo.attributes.id, i)) return !0
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                }
                return !1
            },
            class: function (e, t, r) {
                if (e.elementInfo && e.elementInfo.attributes && e.elementInfo.attributes.class) {
                    var n, o = a(e.elementInfo.attributes.class.split(" "));
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var i, s = n.value,
                                u = a(r);
                            try {
                                for (u.s(); !(i = u.n()).done;) {
                                    if (t(s, i.value)) return !0
                                }
                            } catch (e) {
                                u.e(e)
                            } finally {
                                u.f()
                            }
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                }
                return !1
            },
            tag: function (e, t, r) {
                if (e.elementInfo) {
                    var n, o = a(r);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var i = n.value;
                            if (t(e.elementInfo.tagName, i)) return !0
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                }
                return !1
            },
            text: function (e, t, r) {
                if (e.textInfo && !e.textInfo.isStyleNode && e.textInfo.textContent) {
                    var n, o = a(r);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var i = n.value;
                            if (t(e.textInfo.textContent, i)) return !0
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                }
                return !1
            },
            selector: function (e, t, r) {
                if (e.elementInfo && e.elementInfo.nodePath) {
                    var n, o = a(r);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var s = n.value;
                            if ((0, i.selectorMatches)(e.elementInfo.nodePath, (0, i.parseSelectorForMatch)(s))) return !0
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                }
                return !1
            }
        },
        l = {
            "lr.browser.NodeInitEvent": c,
            "lr.browser.NodeChangeEvent": c,
            "lr.network.ResponseEvent": u,
            "lr.network.RequestEvent": {
                request_body: u.response_body
            },
            "lr.browser.NavigationEvent": {
                href: function (e, t, r) {
                    if (e.data && e.data.href) {
                        var n, o = a(r);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var i = n.value;
                                if (t(e.data.href, i)) return !0
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                    }
                    return !1
                }
            },
            "lr.browser.MouseEvent": {
                clickselector: function (e, t, r) {
                    if (e.data && e.data.nodePath) {
                        var n, o = a(r);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var s = n.value;
                                if ((0, i.selectorMatches)(e.data.nodePath, (0, i.parseSelectorForMatch)(s))) return !0
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                    }
                    return !1
                },
                clicktext: function (e, t, r) {
                    if (e.data && e.data.text) {
                        var n, o = a(r);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var i = n.value;
                                if (t(e.data.text, i)) return !0
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                    }
                    return !1
                },
                clickcomponent: function (e, t, r) {
                    if (e.data && e.data.componentTree) {
                        var n, i = a(r);
                        try {
                            var s = function () {
                                var r = n.value;
                                if (e.data.componentTree.some((function (e) {
                                        return t(e, r)
                                    }))) return {
                                    v: !0
                                }
                            };
                            for (i.s(); !(n = i.n()).done;) {
                                var u = s();
                                if ("object" === (0, o.default)(u)) return u.v
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                    }
                    return !1
                }
            },
            "lr.redux.ReduxAction": {
                action: function (e, t, r) {
                    if (e.data && e.data.action && e.data.action.type) {
                        var n, o = a(r);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var i = n.value;
                                if (t(e.data.action.type, i)) return !0
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                    }
                    return !1
                }
            },
            "lr.CustomEvent": {
                event_name: function (e, t, r) {
                    if (e.data && e.data.eventName) {
                        var n, o = a(r);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var i = n.value;
                                if (t(e.data.eventName, i)) return !0
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                    }
                    return !1
                }
            },
            "lr.core.LogEvent": {
                messagetext: function (e, t, r) {
                    if (e.data && e.data.args && e.data.args.length) {
                        var n, o = a(r);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var i = n.value;
                                if (t(e.data.args[0], i)) return !0
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                    }
                    return !1
                },
                logtype: function (e, t, r) {
                    if (e.data && e.data.logLevel) {
                        var n, o = a(r);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var i = n.value;
                                if (t(e.data.logLevel, i)) return !0
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                    }
                    return !1
                }
            },
            "lr.core.Exception": {
                messagetext: function (e, t, r) {
                    if (e.data && e.data.message) {
                        var n, o = a(r);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var i = n.value;
                                if (t(e.data.message, i)) return !0
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                    }
                    return !1
                }
            }
        };
    t.default = l, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t, r) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (!e.params.length) return !1;
        var s, u = a(e.params);
        try {
            for (u.s(); !(s = u.n()).done;) {
                var c = s.value,
                    l = o.default[t.type] && o.default[t.type][c.name.toLowerCase()],
                    f = i.default[c.operator.toLowerCase().replace(/_/g, "")];
                if (!l || !f) return !1;
                if (c.strings.length)
                    if (n.node) {
                        for (var d = [n.node], p = !1; d.length > 0;) {
                            var h = d.pop();
                            if (l(h, f, c.strings)) {
                                p = !0;
                                break
                            }
                            var y = h.documentInfo || h.elementInfo;
                            if (y && y.childNodes && y.childNodes.length > 0) {
                                var g, v = a(y.childNodes);
                                try {
                                    for (v.s(); !(g = v.n()).done;) {
                                        var m = g.value;
                                        d.push(m)
                                    }
                                } catch (e) {
                                    v.e(e)
                                } finally {
                                    v.f()
                                }
                            }
                        }
                        if (!p) return !1
                    } else if (!l(t, f, c.strings)) return !1
            }
        } catch (e) {
            u.e(e)
        } finally {
            u.f()
        }
        return r()
    };
    var o = n(r(76)),
        i = n(r(32));

    function a(e, t) {
        var r;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (r = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0,
                    o = function () {};
                return {
                    s: o,
                    n: function () {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, a = !0,
            u = !1;
        return {
            s: function () {
                r = e[Symbol.iterator]()
            },
            n: function () {
                var e = r.next();
                return a = e.done, e
            },
            e: function (e) {
                u = !0, i = e
            },
            f: function () {
                try {
                    a || null == r.return || r.return()
                } finally {
                    if (u) throw i
                }
            }
        }
    }

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(8);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = e.style;
        return o.createElement("svg", {
            width: "11",
            height: "11",
            viewBox: "0 0 11 11",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            style: t
        }, o.createElement("path", {
            d: "M6.6543 5.375L9.67188 2.38672L10.2871 1.77148C10.375 1.68359 10.375 1.53711 10.2871 1.41992L9.64258 0.775391C9.52539 0.6875 9.37891 0.6875 9.29102 0.775391L5.6875 4.4082L2.05469 0.775391C1.9668 0.6875 1.82031 0.6875 1.70312 0.775391L1.05859 1.41992C0.970703 1.53711 0.970703 1.68359 1.05859 1.77148L4.69141 5.375L1.05859 9.00781C0.970703 9.0957 0.970703 9.24219 1.05859 9.35938L1.70312 10.0039C1.82031 10.0918 1.9668 10.0918 2.05469 10.0039L5.6875 6.37109L8.67578 9.38867L9.29102 10.0039C9.37891 10.0918 9.52539 10.0918 9.64258 10.0039L10.2871 9.35938C10.375 9.24219 10.375 9.0957 10.2871 9.00781L6.6543 5.375Z",
            fill: "black"
        }))
    };
    var o = n(r(1));
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.dismissIcon = t.dismissStyle = t.titleStyle = t.rootDivStyleSmallScreen = t.rootDivStyle = void 0;
    var o = n(r(3));

    function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? i(Object(r), !0).forEach((function (t) {
                (0, o.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }
    var s = {
        display: "flex",
        flexDirection: "column",
        width: "35em",
        fontSize: "1em",
        padding: "1.2em",
        backgroundColor: "#FFFFFF",
        color: "#000",
        boxShadow: "0px 6px 10px rgba(101, 101, 101, 0.25)",
        borderRadius: "8px",
        boxSizing: "border-box"
    };
    t.rootDivStyle = s;
    var u = a(a({}, s), {}, {
        width: "100%"
    });
    t.rootDivStyleSmallScreen = u;
    t.titleStyle = {
        marginBottom: ".8em",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "1.25em",
        lineHeight: "1.75em",
        wordWrap: "break-word",
        whiteSpace: "pre-wrap",
        overflow: "auto"
    };
    t.dismissStyle = {
        alignSelf: "flex-end",
        background: "none",
        border: "none",
        color: "black",
        padding: "0 .75em",
        height: "auto",
        fontSize: "inherit",
        lineHeight: "normal",
        cursor: "pointer"
    };
    t.dismissIcon = {
        fontSize: "1em"
    }
}, function (e, t, r) {
    "use strict";
    var n = r(8),
        o = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = e.children,
            r = (0, s.useIsSmallScreen)();
        return a.createElement("div", {
            style: r ? f : l
        }, t)
    };
    var i = o(r(3)),
        a = n(r(1)),
        s = r(34);

    function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? u(Object(r), !0).forEach((function (t) {
                (0, i.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }
    var l = {
            position: "fixed",
            display: "flex",
            left: 0,
            bottom: 0,
            padding: "0 0 30px 37px",
            boxSizing: "border-box",
            fontSize: "11px",
            zIndex: 9999,
            maxHeight: "100%"
        },
        f = c(c({}, l), {}, {
            width: "100%",
            maxWidth: "100%",
            padding: "20px 10px",
            zIndex: 2147485e3
        });
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.FEEDBACK_RESPONSE_TYPE_RATING = t.FEEDBACK_RESPONSE_TYPE_TEXT = void 0;
    t.FEEDBACK_RESPONSE_TYPE_TEXT = "TEXT";
    t.FEEDBACK_RESPONSE_TYPE_RATING = "RATING"
}, function (e, t, r) {
    "use strict";
    e.exports = function (e, t, r, n) {
        var o = self || window;
        try {
            try {
                var i;
                try {
                    i = new o.Blob([e])
                } catch (t) {
                    (i = new(o.BlobBuilder || o.WebKitBlobBuilder || o.MozBlobBuilder || o.MSBlobBuilder)).append(e), i = i.getBlob()
                }
                var a = o.URL || o.webkitURL,
                    s = a.createObjectURL(i),
                    u = new o[t](s, r);
                return a.revokeObjectURL(s), u
            } catch (n) {
                return new o[t]("data:application/javascript,".concat(encodeURIComponent(e)), r)
            }
        } catch (e) {
            if (!n) throw Error("Inline worker is not supported");
            return new o[t](n, r)
        }
    }
}, function (e, t, r) {
    e.exports = r(84)
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = n(r(37)).default;
    t.default = o, e.exports = t.default
}, function (e, t) {
    e.exports = function (e, t) {
        if (null == e) return {};
        var r, n, o = {},
            i = Object.keys(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
    }
}, function (e, t) {
    e.exports = function (e) {
        if (Array.isArray(e)) return e
    }
}, function (e, t) {
    e.exports = function (e, t) {
        var r = [],
            n = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
        } catch (e) {
            o = !0, i = e
        } finally {
            try {
                n || null == s.return || s.return()
            } finally {
                if (o) throw i
            }
        }
        return r
    }
}, function (e, t) {
    e.exports = function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}, function (e, t) {
    e.exports = function (e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
            return r
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }
}, function (e, t) {
    e.exports = function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}, function (e, t, r) {
    var n = function (e) {
        "use strict";
        var t, r = Object.prototype,
            n = r.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";

        function u(e, t, r) {
            return Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), e[t]
        }
        try {
            u({}, "")
        } catch (e) {
            u = function (e, t, r) {
                return e[t] = r
            }
        }

        function c(e, t, r, n) {
            var o = t && t.prototype instanceof g ? t : g,
                i = Object.create(o.prototype),
                a = new T(n || []);
            return i._invoke = function (e, t, r) {
                var n = f;
                return function (o, i) {
                    if (n === p) throw new Error("Generator is already running");
                    if (n === h) {
                        if ("throw" === o) throw i;
                        return k()
                    }
                    for (r.method = o, r.arg = i;;) {
                        var a = r.delegate;
                        if (a) {
                            var s = S(a, r);
                            if (s) {
                                if (s === y) continue;
                                return s
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (n === f) throw n = h, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        n = p;
                        var u = l(e, t, r);
                        if ("normal" === u.type) {
                            if (n = r.done ? h : d, u.arg === y) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (n = h, r.method = "throw", r.arg = u.arg)
                    }
                }
            }(e, r, a), i
        }

        function l(e, t, r) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, r)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        e.wrap = c;
        var f = "suspendedStart",
            d = "suspendedYield",
            p = "executing",
            h = "completed",
            y = {};

        function g() {}

        function v() {}

        function m() {}
        var b = {};
        b[i] = function () {
            return this
        };
        var w = Object.getPrototypeOf,
            _ = w && w(w(j([])));
        _ && _ !== r && n.call(_, i) && (b = _);
        var O = m.prototype = g.prototype = Object.create(b);

        function I(e) {
            ["next", "throw", "return"].forEach((function (t) {
                u(e, t, (function (e) {
                    return this._invoke(t, e)
                }))
            }))
        }

        function E(e, t) {
            function r(o, i, a, s) {
                var u = l(e[o], e, i);
                if ("throw" !== u.type) {
                    var c = u.arg,
                        f = c.value;
                    return f && "object" == typeof f && n.call(f, "__await") ? t.resolve(f.__await).then((function (e) {
                        r("next", e, a, s)
                    }), (function (e) {
                        r("throw", e, a, s)
                    })) : t.resolve(f).then((function (e) {
                        c.value = e, a(c)
                    }), (function (e) {
                        return r("throw", e, a, s)
                    }))
                }
                s(u.arg)
            }
            var o;
            this._invoke = function (e, n) {
                function i() {
                    return new t((function (t, o) {
                        r(e, n, t, o)
                    }))
                }
                return o = o ? o.then(i, i) : i()
            }
        }

        function S(e, r) {
            var n = e.iterator[r.method];
            if (n === t) {
                if (r.delegate = null, "throw" === r.method) {
                    if (e.iterator.return && (r.method = "return", r.arg = t, S(e, r), "throw" === r.method)) return y;
                    r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return y
            }
            var o = l(n, e.iterator, r.arg);
            if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, y;
            var i = o.arg;
            return i ? i.done ? (r[e.resultName] = i.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y)
        }

        function P(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function x(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function T(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(P, this), this.reset(!0)
        }

        function j(e) {
            if (e) {
                var r = e[i];
                if (r) return r.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        a = function r() {
                            for (; ++o < e.length;)
                                if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                            return r.value = t, r.done = !0, r
                        };
                    return a.next = a
                }
            }
            return {
                next: k
            }
        }

        function k() {
            return {
                value: t,
                done: !0
            }
        }
        return v.prototype = O.constructor = m, m.constructor = v, v.displayName = u(m, s, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
        }, e.mark = function (e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, u(e, s, "GeneratorFunction")), e.prototype = Object.create(O), e
        }, e.awrap = function (e) {
            return {
                __await: e
            }
        }, I(E.prototype), E.prototype[a] = function () {
            return this
        }, e.AsyncIterator = E, e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new E(c(t, r, n, o), i);
            return e.isGeneratorFunction(r) ? a : a.next().then((function (e) {
                return e.done ? e.value : a.next()
            }))
        }, I(O), u(O, s, "Generator"), O[i] = function () {
            return this
        }, O.toString = function () {
            return "[object Generator]"
        }, e.keys = function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return t.reverse(),
                function r() {
                    for (; t.length;) {
                        var n = t.pop();
                        if (n in e) return r.value = n, r.done = !1, r
                    }
                    return r.done = !0, r
                }
        }, e.values = j, T.prototype = {
            constructor: T,
            reset: function (e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(x), !e)
                    for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
            },
            stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function (e) {
                if (this.done) throw e;
                var r = this;

                function o(n, o) {
                    return s.type = "throw", s.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i],
                        s = a.completion;
                    if ("root" === a.tryLoc) return o("end");
                    if (a.tryLoc <= this.prev) {
                        var u = n.call(a, "catchLoc"),
                            c = n.call(a, "finallyLoc");
                        if (u && c) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                        } else if (u) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                        } else {
                            if (!c) throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function (e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r];
                    if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a)
            },
            complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
            },
            finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), y
                }
            },
            catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.tryLoc === e) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            x(r)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function (e, r, n) {
                return this.delegate = {
                    iterator: j(e),
                    resultName: r,
                    nextLoc: n
                }, "next" === this.method && (this.arg = t), y
            }
        }, e
    }(e.exports);
    try {
        regeneratorRuntime = n
    } catch (e) {
        Function("r", "regeneratorRuntime = r")(n)
    }
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t, r) {
        var n = e[t];
        return e[t] = function () {
                for (var e, t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i];
                n && (e = n.apply(this, o));
                return r.apply(this, o), e
            },
            function () {
                e[t] = n
            }
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = {}.toString.call(e);
        switch (t) {
        case "[object Undefined]":
            return {
                undefined: {}
            };
        case "[object Null]":
            return {
                null: {}
            };
        case "[object Boolean]":
            return {
                boolean: {
                    bool: e
                }
            };
        case "[object Number]":
            return {
                number: {
                    double: e
                }
            };
        case "[object String]":
            return {
                string: {
                    string: e
                }
            };
        case "[object Object]":
            return {
                object: {
                    map: e
                }
            };
        case "[object Array]":
            return {
                array: {
                    map: e
                }
            };
        case "[object Date]":
            return {
                date: {
                    double: e.getTime()
                }
            };
        case "[object Error]":
            return {
                string: {
                    string: "".concat(e.name, ": ").concat(e.message)
                }
            };
        default:
            return {
                unsupported: {
                    type: t
                }
            }
        }
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        switch (e.type || Object.keys(e)[0]) {
        case "undefined":
            return;
        case "null":
            return null;
        case "boolean":
            return e.boolean.bool;
        case "number":
            return e.number.double;
        case "string":
            return e.string.string;
        case "object":
            return e.object.map;
        case "array":
            return Object.keys(e.array.map).reduce((function (t, r) {
                return t[r] = e.array.map[r], t
            }), []);
        case "date":
            return new Date(e.date.double);
        case "unsupported":
            return e.unsupported.type;
        default:
            throw new TypeError("Unexpected value in shallowDearsonify: ".concat(e))
        }
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return {
            arson: o.default.encode(e)
        }
    };
    var o = n(r(40));
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    (function (e) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        var n = r(98),
            o = r(99),
            i = r(100);

        function a() {
            return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function s(e, t) {
            if (a() < t) throw new RangeError("Invalid typed array length");
            return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)), e.length = t), e
        }

        function u(e, t, r) {
            if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(e, t, r);
            if ("number" == typeof e) {
                if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                return f(this, e)
            }
            return c(this, e, t, r)
        }

        function c(e, t, r, n) {
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, r, n) {
                if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
                u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = d(e, t);
                return e
            }(e, t, r, n) : "string" == typeof t ? function (e, t, r) {
                "string" == typeof r && "" !== r || (r = "utf8");
                if (!u.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                var n = 0 | h(t, r),
                    o = (e = s(e, n)).write(t, r);
                o !== n && (e = e.slice(0, o));
                return e
            }(e, t, r) : function (e, t) {
                if (u.isBuffer(t)) {
                    var r = 0 | p(t.length);
                    return 0 === (e = s(e, r)).length || t.copy(e, 0, 0, r), e
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? s(e, 0) : d(e, t);
                    if ("Buffer" === t.type && i(t.data)) return d(e, t.data)
                }
                var n;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(e, t)
        }

        function l(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
            if (e < 0) throw new RangeError('"size" argument must not be negative')
        }

        function f(e, t) {
            if (l(t), e = s(e, t < 0 ? 0 : 0 | p(t)), !u.TYPED_ARRAY_SUPPORT)
                for (var r = 0; r < t; ++r) e[r] = 0;
            return e
        }

        function d(e, t) {
            var r = t.length < 0 ? 0 : 0 | p(t.length);
            e = s(e, r);
            for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
            return e
        }

        function p(e) {
            if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
            return 0 | e
        }

        function h(e, t) {
            if (u.isBuffer(e)) return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
            "string" != typeof e && (e = "" + e);
            var r = e.length;
            if (0 === r) return 0;
            for (var n = !1;;) switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
                return r;
            case "utf8":
            case "utf-8":
            case void 0:
                return V(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * r;
            case "hex":
                return r >>> 1;
            case "base64":
                return G(e).length;
            default:
                if (n) return V(e).length;
                t = ("" + t).toLowerCase(), n = !0
            }
        }

        function y(e, t, r) {
            var n = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
            if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
            if ((r >>>= 0) <= (t >>>= 0)) return "";
            for (e || (e = "utf8");;) switch (e) {
            case "hex":
                return k(this, t, r);
            case "utf8":
            case "utf-8":
                return P(this, t, r);
            case "ascii":
                return T(this, t, r);
            case "latin1":
            case "binary":
                return j(this, t, r);
            case "base64":
                return S(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return N(this, t, r);
            default:
                if (n) throw new TypeError("Unknown encoding: " + e);
                e = (e + "").toLowerCase(), n = !0
            }
        }

        function g(e, t, r) {
            var n = e[t];
            e[t] = e[r], e[r] = n
        }

        function v(e, t, r, n, o) {
            if (0 === e.length) return -1;
            if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = o ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                if (o) return -1;
                r = e.length - 1
            } else if (r < 0) {
                if (!o) return -1;
                r = 0
            }
            if ("string" == typeof t && (t = u.from(t, n)), u.isBuffer(t)) return 0 === t.length ? -1 : m(e, t, r, n, o);
            if ("number" == typeof t) return t &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : m(e, [t], r, n, o);
            throw new TypeError("val must be string, number or Buffer")
        }

        function m(e, t, r, n, o) {
            var i, a = 1,
                s = e.length,
                u = t.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (e.length < 2 || t.length < 2) return -1;
                a = 2, s /= 2, u /= 2, r /= 2
            }

            function c(e, t) {
                return 1 === a ? e[t] : e.readUInt16BE(t * a)
            }
            if (o) {
                var l = -1;
                for (i = r; i < s; i++)
                    if (c(e, i) === c(t, -1 === l ? 0 : i - l)) {
                        if (-1 === l && (l = i), i - l + 1 === u) return l * a
                    } else -1 !== l && (i -= i - l), l = -1
            } else
                for (r + u > s && (r = s - u), i = r; i >= 0; i--) {
                    for (var f = !0, d = 0; d < u; d++)
                        if (c(e, i + d) !== c(t, d)) {
                            f = !1;
                            break
                        } if (f) return i
                }
            return -1
        }

        function b(e, t, r, n) {
            r = Number(r) || 0;
            var o = e.length - r;
            n ? (n = Number(n)) > o && (n = o) : n = o;
            var i = t.length;
            if (i % 2 != 0) throw new TypeError("Invalid hex string");
            n > i / 2 && (n = i / 2);
            for (var a = 0; a < n; ++a) {
                var s = parseInt(t.substr(2 * a, 2), 16);
                if (isNaN(s)) return a;
                e[r + a] = s
            }
            return a
        }

        function w(e, t, r, n) {
            return H(V(t, e.length - r), e, r, n)
        }

        function _(e, t, r, n) {
            return H(function (e) {
                for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                return t
            }(t), e, r, n)
        }

        function O(e, t, r, n) {
            return _(e, t, r, n)
        }

        function I(e, t, r, n) {
            return H(G(t), e, r, n)
        }

        function E(e, t, r, n) {
            return H(function (e, t) {
                for (var r, n, o, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = (r = e.charCodeAt(a)) >> 8, o = r % 256, i.push(o), i.push(n);
                return i
            }(t, e.length - r), e, r, n)
        }

        function S(e, t, r) {
            return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r))
        }

        function P(e, t, r) {
            r = Math.min(e.length, r);
            for (var n = [], o = t; o < r;) {
                var i, a, s, u, c = e[o],
                    l = null,
                    f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                if (o + f <= r) switch (f) {
                case 1:
                    c < 128 && (l = c);
                    break;
                case 2:
                    128 == (192 & (i = e[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (l = u);
                    break;
                case 3:
                    i = e[o + 1], a = e[o + 2], 128 == (192 & i) && 128 == (192 & a) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (l = u);
                    break;
                case 4:
                    i = e[o + 1], a = e[o + 2], s = e[o + 3], 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & s) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (l = u)
                }
                null === l ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n.push(l), o += f
            }
            return function (e) {
                var t = e.length;
                if (t <= x) return String.fromCharCode.apply(String, e);
                var r = "",
                    n = 0;
                for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += x));
                return r
            }(n)
        }
        t.Buffer = u, t.SlowBuffer = function (e) {
            +e != e && (e = 0);
            return u.alloc(+e)
        }, t.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function () {
                        return 42
                    }
                }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(), t.kMaxLength = a(), u.poolSize = 8192, u._augment = function (e) {
            return e.__proto__ = u.prototype, e
        }, u.from = function (e, t, r) {
            return c(null, e, t, r)
        }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
            value: null,
            configurable: !0
        })), u.alloc = function (e, t, r) {
            return function (e, t, r, n) {
                return l(t), t <= 0 ? s(e, t) : void 0 !== r ? "string" == typeof n ? s(e, t).fill(r, n) : s(e, t).fill(r) : s(e, t)
            }(null, e, t, r)
        }, u.allocUnsafe = function (e) {
            return f(null, e)
        }, u.allocUnsafeSlow = function (e) {
            return f(null, e)
        }, u.isBuffer = function (e) {
            return !(null == e || !e._isBuffer)
        }, u.compare = function (e, t) {
            if (!u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (var r = e.length, n = t.length, o = 0, i = Math.min(r, n); o < i; ++o)
                if (e[o] !== t[o]) {
                    r = e[o], n = t[o];
                    break
                } return r < n ? -1 : n < r ? 1 : 0
        }, u.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }, u.concat = function (e, t) {
            if (!i(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return u.alloc(0);
            var r;
            if (void 0 === t)
                for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
            var n = u.allocUnsafe(t),
                o = 0;
            for (r = 0; r < e.length; ++r) {
                var a = e[r];
                if (!u.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(n, o), o += a.length
            }
            return n
        }, u.byteLength = h, u.prototype._isBuffer = !0, u.prototype.swap16 = function () {
            var e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) g(this, t, t + 1);
            return this
        }, u.prototype.swap32 = function () {
            var e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
            return this
        }, u.prototype.swap64 = function () {
            var e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
            return this
        }, u.prototype.toString = function () {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? P(this, 0, e) : y.apply(this, arguments)
        }, u.prototype.equals = function (e) {
            if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === u.compare(this, e)
        }, u.prototype.inspect = function () {
            var e = "",
                r = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (e += " ... ")), "<Buffer " + e + ">"
        }, u.prototype.compare = function (e, t, r, n, o) {
            if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), t < 0 || r > e.length || n < 0 || o > this.length) throw new RangeError("out of range index");
            if (n >= o && t >= r) return 0;
            if (n >= o) return -1;
            if (t >= r) return 1;
            if (this === e) return 0;
            for (var i = (o >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (t >>>= 0), s = Math.min(i, a), c = this.slice(n, o), l = e.slice(t, r), f = 0; f < s; ++f)
                if (c[f] !== l[f]) {
                    i = c[f], a = l[f];
                    break
                } return i < a ? -1 : a < i ? 1 : 0
        }, u.prototype.includes = function (e, t, r) {
            return -1 !== this.indexOf(e, t, r)
        }, u.prototype.indexOf = function (e, t, r) {
            return v(this, e, t, r, !0)
        }, u.prototype.lastIndexOf = function (e, t, r) {
            return v(this, e, t, r, !1)
        }, u.prototype.write = function (e, t, r, n) {
            if (void 0 === t) n = "utf8", r = this.length, t = 0;
            else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
            else {
                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
            }
            var o = this.length - t;
            if ((void 0 === r || r > o) && (r = o), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var i = !1;;) switch (n) {
            case "hex":
                return b(this, e, t, r);
            case "utf8":
            case "utf-8":
                return w(this, e, t, r);
            case "ascii":
                return _(this, e, t, r);
            case "latin1":
            case "binary":
                return O(this, e, t, r);
            case "base64":
                return I(this, e, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return E(this, e, t, r);
            default:
                if (i) throw new TypeError("Unknown encoding: " + n);
                n = ("" + n).toLowerCase(), i = !0
            }
        }, u.prototype.toJSON = function () {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var x = 4096;

        function T(e, t, r) {
            var n = "";
            r = Math.min(e.length, r);
            for (var o = t; o < r; ++o) n += String.fromCharCode(127 & e[o]);
            return n
        }

        function j(e, t, r) {
            var n = "";
            r = Math.min(e.length, r);
            for (var o = t; o < r; ++o) n += String.fromCharCode(e[o]);
            return n
        }

        function k(e, t, r) {
            var n = e.length;
            (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
            for (var o = "", i = t; i < r; ++i) o += B(e[i]);
            return o
        }

        function N(e, t, r) {
            for (var n = e.slice(t, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
            return o
        }

        function D(e, t, r) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
        }

        function A(e, t, r, n, o, i) {
            if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
            if (r + n > e.length) throw new RangeError("Index out of range")
        }

        function R(e, t, r, n) {
            t < 0 && (t = 65535 + t + 1);
            for (var o = 0, i = Math.min(e.length - r, 2); o < i; ++o) e[r + o] = (t & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o)
        }

        function C(e, t, r, n) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var o = 0, i = Math.min(e.length - r, 4); o < i; ++o) e[r + o] = t >>> 8 * (n ? o : 3 - o) & 255
        }

        function L(e, t, r, n, o, i) {
            if (r + n > e.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range")
        }

        function M(e, t, r, n, i) {
            return i || L(e, 0, r, 4), o.write(e, t, r, n, 23, 4), r + 4
        }

        function U(e, t, r, n, i) {
            return i || L(e, 0, r, 8), o.write(e, t, r, n, 52, 8), r + 8
        }
        u.prototype.slice = function (e, t) {
            var r, n = this.length;
            if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), u.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = u.prototype;
            else {
                var o = t - e;
                r = new u(o, void 0);
                for (var i = 0; i < o; ++i) r[i] = this[i + e]
            }
            return r
        }, u.prototype.readUIntLE = function (e, t, r) {
            e |= 0, t |= 0, r || D(e, t, this.length);
            for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;
            return n
        }, u.prototype.readUIntBE = function (e, t, r) {
            e |= 0, t |= 0, r || D(e, t, this.length);
            for (var n = this[e + --t], o = 1; t > 0 && (o *= 256);) n += this[e + --t] * o;
            return n
        }, u.prototype.readUInt8 = function (e, t) {
            return t || D(e, 1, this.length), this[e]
        }, u.prototype.readUInt16LE = function (e, t) {
            return t || D(e, 2, this.length), this[e] | this[e + 1] << 8
        }, u.prototype.readUInt16BE = function (e, t) {
            return t || D(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, u.prototype.readUInt32LE = function (e, t) {
            return t || D(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, u.prototype.readUInt32BE = function (e, t) {
            return t || D(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, u.prototype.readIntLE = function (e, t, r) {
            e |= 0, t |= 0, r || D(e, t, this.length);
            for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;
            return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n
        }, u.prototype.readIntBE = function (e, t, r) {
            e |= 0, t |= 0, r || D(e, t, this.length);
            for (var n = t, o = 1, i = this[e + --n]; n > 0 && (o *= 256);) i += this[e + --n] * o;
            return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
        }, u.prototype.readInt8 = function (e, t) {
            return t || D(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }, u.prototype.readInt16LE = function (e, t) {
            t || D(e, 2, this.length);
            var r = this[e] | this[e + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, u.prototype.readInt16BE = function (e, t) {
            t || D(e, 2, this.length);
            var r = this[e + 1] | this[e] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, u.prototype.readInt32LE = function (e, t) {
            return t || D(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, u.prototype.readInt32BE = function (e, t) {
            return t || D(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, u.prototype.readFloatLE = function (e, t) {
            return t || D(e, 4, this.length), o.read(this, e, !0, 23, 4)
        }, u.prototype.readFloatBE = function (e, t) {
            return t || D(e, 4, this.length), o.read(this, e, !1, 23, 4)
        }, u.prototype.readDoubleLE = function (e, t) {
            return t || D(e, 8, this.length), o.read(this, e, !0, 52, 8)
        }, u.prototype.readDoubleBE = function (e, t) {
            return t || D(e, 8, this.length), o.read(this, e, !1, 52, 8)
        }, u.prototype.writeUIntLE = function (e, t, r, n) {
            (e = +e, t |= 0, r |= 0, n) || A(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var o = 1,
                i = 0;
            for (this[t] = 255 & e; ++i < r && (o *= 256);) this[t + i] = e / o & 255;
            return t + r
        }, u.prototype.writeUIntBE = function (e, t, r, n) {
            (e = +e, t |= 0, r |= 0, n) || A(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var o = r - 1,
                i = 1;
            for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255;
            return t + r
        }, u.prototype.writeUInt8 = function (e, t, r) {
            return e = +e, t |= 0, r || A(this, e, t, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
        }, u.prototype.writeUInt16LE = function (e, t, r) {
            return e = +e, t |= 0, r || A(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2
        }, u.prototype.writeUInt16BE = function (e, t, r) {
            return e = +e, t |= 0, r || A(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2
        }, u.prototype.writeUInt32LE = function (e, t, r) {
            return e = +e, t |= 0, r || A(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : C(this, e, t, !0), t + 4
        }, u.prototype.writeUInt32BE = function (e, t, r) {
            return e = +e, t |= 0, r || A(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : C(this, e, t, !1), t + 4
        }, u.prototype.writeIntLE = function (e, t, r, n) {
            if (e = +e, t |= 0, !n) {
                var o = Math.pow(2, 8 * r - 1);
                A(this, e, t, r, o - 1, -o)
            }
            var i = 0,
                a = 1,
                s = 0;
            for (this[t] = 255 & e; ++i < r && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
            return t + r
        }, u.prototype.writeIntBE = function (e, t, r, n) {
            if (e = +e, t |= 0, !n) {
                var o = Math.pow(2, 8 * r - 1);
                A(this, e, t, r, o - 1, -o)
            }
            var i = r - 1,
                a = 1,
                s = 0;
            for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
            return t + r
        }, u.prototype.writeInt8 = function (e, t, r) {
            return e = +e, t |= 0, r || A(this, e, t, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, u.prototype.writeInt16LE = function (e, t, r) {
            return e = +e, t |= 0, r || A(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2
        }, u.prototype.writeInt16BE = function (e, t, r) {
            return e = +e, t |= 0, r || A(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2
        }, u.prototype.writeInt32LE = function (e, t, r) {
            return e = +e, t |= 0, r || A(this, e, t, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : C(this, e, t, !0), t + 4
        }, u.prototype.writeInt32BE = function (e, t, r) {
            return e = +e, t |= 0, r || A(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : C(this, e, t, !1), t + 4
        }, u.prototype.writeFloatLE = function (e, t, r) {
            return M(this, e, t, !0, r)
        }, u.prototype.writeFloatBE = function (e, t, r) {
            return M(this, e, t, !1, r)
        }, u.prototype.writeDoubleLE = function (e, t, r) {
            return U(this, e, t, !0, r)
        }, u.prototype.writeDoubleBE = function (e, t, r) {
            return U(this, e, t, !1, r)
        }, u.prototype.copy = function (e, t, r, n) {
            if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
            var o, i = n - r;
            if (this === e && r < t && t < n)
                for (o = i - 1; o >= 0; --o) e[o + t] = this[o + r];
            else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                for (o = 0; o < i; ++o) e[o + t] = this[o + r];
            else Uint8Array.prototype.set.call(e, this.subarray(r, r + i), t);
            return i
        }, u.prototype.fill = function (e, t, r, n) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
                    var o = e.charCodeAt(0);
                    o < 256 && (e = o)
                }
                if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
            if (r <= t) return this;
            var i;
            if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                for (i = t; i < r; ++i) this[i] = e;
            else {
                var a = u.isBuffer(e) ? e : V(new u(e, n).toString()),
                    s = a.length;
                for (i = 0; i < r - t; ++i) this[i + t] = a[i % s]
            }
            return this
        };
        var F = /[^+\/0-9A-Za-z-_]/g;

        function B(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }

        function V(e, t) {
            var r;
            t = t || 1 / 0;
            for (var n = e.length, o = null, i = [], a = 0; a < n; ++a) {
                if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                    if (!o) {
                        if (r > 56319) {
                            (t -= 3) > -1 && i.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === n) {
                            (t -= 3) > -1 && i.push(239, 191, 189);
                            continue
                        }
                        o = r;
                        continue
                    }
                    if (r < 56320) {
                        (t -= 3) > -1 && i.push(239, 191, 189), o = r;
                        continue
                    }
                    r = 65536 + (o - 55296 << 10 | r - 56320)
                } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                if (o = null, r < 128) {
                    if ((t -= 1) < 0) break;
                    i.push(r)
                } else if (r < 2048) {
                    if ((t -= 2) < 0) break;
                    i.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((t -= 3) < 0) break;
                    i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return i
        }

        function G(e) {
            return n.toByteArray(function (e) {
                if ((e = function (e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    }(e).replace(F, "")).length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }(e))
        }

        function H(e, t, r, n) {
            for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) t[o + r] = e[o];
            return o
        }
    }).call(this, r(12))
}, function (e, t, r) {
    "use strict";
    t.byteLength = function (e) {
        return 3 * e.length / 4 - c(e)
    }, t.toByteArray = function (e) {
        var t, r, n, a, s, u = e.length;
        a = c(e), s = new i(3 * u / 4 - a), r = a > 0 ? u - 4 : u;
        var l = 0;
        for (t = 0; t < r; t += 4) n = o[e.charCodeAt(t)] << 18 | o[e.charCodeAt(t + 1)] << 12 | o[e.charCodeAt(t + 2)] << 6 | o[e.charCodeAt(t + 3)], s[l++] = n >> 16 & 255, s[l++] = n >> 8 & 255, s[l++] = 255 & n;
        2 === a ? (n = o[e.charCodeAt(t)] << 2 | o[e.charCodeAt(t + 1)] >> 4, s[l++] = 255 & n) : 1 === a && (n = o[e.charCodeAt(t)] << 10 | o[e.charCodeAt(t + 1)] << 4 | o[e.charCodeAt(t + 2)] >> 2, s[l++] = n >> 8 & 255, s[l++] = 255 & n);
        return s
    }, t.fromByteArray = function (e) {
        for (var t, r = e.length, o = r % 3, i = "", a = [], s = 16383, u = 0, c = r - o; u < c; u += s) a.push(l(e, u, u + s > c ? c : u + s));
        1 === o ? (t = e[r - 1], i += n[t >> 2], i += n[t << 4 & 63], i += "==") : 2 === o && (t = (e[r - 2] << 8) + e[r - 1], i += n[t >> 10], i += n[t >> 4 & 63], i += n[t << 2 & 63], i += "=");
        return a.push(i), a.join("")
    };
    for (var n = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = a.length; s < u; ++s) n[s] = a[s], o[a.charCodeAt(s)] = s;

    function c(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
    }

    function l(e, t, r) {
        for (var o, i, a = [], s = t; s < r; s += 3) o = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2], a.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
        return a.join("")
    }
    o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
}, function (e, t) {
    t.read = function (e, t, r, n, o) {
        var i, a, s = 8 * o - n - 1,
            u = (1 << s) - 1,
            c = u >> 1,
            l = -7,
            f = r ? o - 1 : 0,
            d = r ? -1 : 1,
            p = e[t + f];
        for (f += d, i = p & (1 << -l) - 1, p >>= -l, l += s; l > 0; i = 256 * i + e[t + f], f += d, l -= 8);
        for (a = i & (1 << -l) - 1, i >>= -l, l += n; l > 0; a = 256 * a + e[t + f], f += d, l -= 8);
        if (0 === i) i = 1 - c;
        else {
            if (i === u) return a ? NaN : 1 / 0 * (p ? -1 : 1);
            a += Math.pow(2, n), i -= c
        }
        return (p ? -1 : 1) * a * Math.pow(2, i - n)
    }, t.write = function (e, t, r, n, o, i) {
        var a, s, u, c = 8 * i - o - 1,
            l = (1 << c) - 1,
            f = l >> 1,
            d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = n ? 0 : i - 1,
            h = n ? 1 : -1,
            y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = l) : (a = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (t += a + f >= 1 ? d / u : d * Math.pow(2, 1 - f)) * u >= 2 && (a++, u /= 2), a + f >= l ? (s = 0, a = l) : a + f >= 1 ? (s = (t * u - 1) * Math.pow(2, o), a += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, o), a = 0)); o >= 8; e[r + p] = 255 & s, p += h, s /= 256, o -= 8);
        for (a = a << o | s, c += o; c > 0; e[r + p] = 255 & a, p += h, a /= 256, c -= 8);
        e[r + p - h] |= 128 * y
    }
}, function (e, t) {
    var r = {}.toString;
    e.exports = Array.isArray || function (e) {
        return "[object Array]" == r.call(e)
    }
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        if (!e) return e;
        return o.default.decode(e.arson)
    };
    var o = n(r(40));
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
        return r.addEventListener(e, t, {
                capture: !0,
                passive: !0
            }),
            function () {
                r.removeEventListener(e, t, {
                    capture: !0,
                    passive: !0
                })
            }
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    (function (r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = {
                collectWindowErrors: !0,
                debug: !1
            },
            o = "undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : {},
            i = [].slice,
            a = "?",
            s = /^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;

        function u() {
            return "undefined" == typeof document || void 0 === document.location ? "" : document.location.href
        }
        n.report = function () {
            var e, t, r = [],
                c = null,
                l = null,
                f = null;

            function d(e, t) {
                var o = null;
                if (!t || n.collectWindowErrors) {
                    for (var a in r)
                        if (r.hasOwnProperty(a)) try {
                            r[a].apply(null, [e].concat(i.call(arguments, 2)))
                        } catch (e) {
                            o = e
                        }
                    if (o) throw o
                }
            }

            function p(t, r, o, i, c) {
                if (f) n.computeStackTrace.augmentStackTraceWithInitialElement(f, r, o, t), h();
                else if (c) d(n.computeStackTrace(c), !0);
                else {
                    var l, p = {
                            url: r,
                            line: o,
                            column: i
                        },
                        y = void 0,
                        g = t;
                    if ("[object String]" === {}.toString.call(t))(l = t.match(s)) && (y = l[1], g = l[2]);
                    p.func = a, d({
                        name: y,
                        message: g,
                        url: u(),
                        stack: [p]
                    }, !0)
                }
                return !!e && e.apply(this, arguments)
            }

            function h() {
                var e = f,
                    t = c;
                c = null, f = null, l = null, d.apply(null, [e, !1].concat(t))
            }

            function y(e, t) {
                var r = i.call(arguments, 1);
                if (f) {
                    if (l === e) return;
                    h()
                }
                var o = n.computeStackTrace(e);
                if (f = o, l = e, c = r, setTimeout((function () {
                        l === e && h()
                    }), o.incomplete ? 2e3 : 0), !1 !== t) throw e
            }
            return y.subscribe = function (n) {
                ! function () {
                    if (t) return;
                    e = o.onerror, o.onerror = p, t = !0
                }(), r.push(n)
            }, y.unsubscribe = function (e) {
                for (var t = r.length - 1; t >= 0; --t) r[t] === e && r.splice(t, 1)
            }, y.uninstall = function () {
                ! function () {
                    if (!t) return;
                    o.onerror = e, t = !1, e = void 0
                }(), r = []
            }, y
        }(), n.computeStackTrace = function () {
            function e(e) {
                if (void 0 !== e.stack && e.stack) {
                    for (var t, r, n = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, o = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|resource|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i, i = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, s = e.stack.split("\n"), c = [], l = (/^(.*) is undefined$/.exec(e.message), 0), f = s.length; l < f; ++l) {
                        if (t = n.exec(s[l])) {
                            var d = t[2] && -1 !== t[2].indexOf("native");
                            r = {
                                url: d ? null : t[2],
                                func: t[1] || a,
                                args: d ? [t[2]] : [],
                                line: t[3] ? +t[3] : null,
                                column: t[4] ? +t[4] : null
                            }
                        } else if (t = i.exec(s[l])) r = {
                            url: t[2],
                            func: t[1] || a,
                            args: [],
                            line: +t[3],
                            column: t[4] ? +t[4] : null
                        };
                        else {
                            if (!(t = o.exec(s[l]))) continue;
                            r = {
                                url: t[3],
                                func: t[1] || a,
                                args: t[2] ? t[2].split(",") : [],
                                line: t[4] ? +t[4] : null,
                                column: t[5] ? +t[5] : null
                            }
                        }!r.func && r.line && (r.func = a), c.push(r)
                    }
                    return c.length ? (c[0].column || void 0 === e.columnNumber || (c[0].column = e.columnNumber + 1), {
                        name: e.name,
                        message: e.message,
                        url: u(),
                        stack: c
                    }) : null
                }
            }

            function t(e, t, r, n) {
                var o = {
                    url: t,
                    line: r
                };
                if (o.url && o.line) {
                    if (e.incomplete = !1, o.func || (o.func = a), e.stack.length > 0 && e.stack[0].url === o.url) {
                        if (e.stack[0].line === o.line) return !1;
                        if (!e.stack[0].line && e.stack[0].func === o.func) return e.stack[0].line = o.line, !1
                    }
                    return e.stack.unshift(o), e.partial = !0, !0
                }
                return e.incomplete = !0, !1
            }

            function r(e, i) {
                for (var s, c, l = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, f = [], d = {}, p = !1, h = r.caller; h && !p; h = h.caller)
                    if (h !== o && h !== n.report) {
                        if (c = {
                                url: null,
                                func: a,
                                line: null,
                                column: null
                            }, h.name ? c.func = h.name : (s = l.exec(h.toString())) && (c.func = s[1]), void 0 === c.func) try {
                            c.func = s.input.substring(0, s.input.indexOf("{"))
                        } catch (e) {}
                        d["" + h] ? p = !0 : d["" + h] = !0, f.push(c)
                    } i && f.splice(0, i);
                var y = {
                    name: e.name,
                    message: e.message,
                    url: u(),
                    stack: f
                };
                return t(y, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), y
            }

            function o(t, o) {
                var i = null;
                o = null == o ? 0 : +o;
                try {
                    if (i = e(t)) return i
                } catch (e) {
                    if (n.debug) throw e
                }
                try {
                    if (i = r(t, o + 1)) return i
                } catch (e) {
                    if (n.debug) throw e
                }
                return {
                    name: t.name,
                    message: t.message,
                    url: u()
                }
            }
            return o.augmentStackTraceWithInitialElement = t, o.computeStackTraceFromStackProp = e, o
        }();
        var c = n;
        t.default = c, e.exports = t.default
    }).call(this, r(12))
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        for (var r = 0; r < e.length; r++)
            if (t(e[r])) return e[r]
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        return e.concat(t)
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        var r, n, c = e.slice(0).reverse(),
            l = function (e, t) {
                var r;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = function (e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return s(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            o = function () {};
                        return {
                            s: o,
                            n: function () {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function (e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    u = !1;
                return {
                    s: function () {
                        r = e[Symbol.iterator]()
                    },
                    n: function () {
                        var e = r.next();
                        return a = e.done, e
                    },
                    e: function (e) {
                        u = !0, i = e
                    },
                    f: function () {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (u) throw i
                        }
                    }
                }
            }(t);
        try {
            var f = function () {
                var e = n.value;
                return e.directDesc ? u.apply(void 0, [e].concat((0, o.default)(c.splice(0, 1)))) ? "continue" : {
                    v: !1
                } : -1 === (r = (0, a.default)(c, (function (t) {
                    return u(e, t)
                }))) ? {
                    v: !1
                } : void c.splice(0, r + 1)
            };
            for (l.s(); !(n = l.n()).done;) {
                var d = f();
                if ("continue" !== d && "object" === (0, i.default)(d)) return d.v
            }
        } catch (e) {
            l.e(e)
        } finally {
            l.f()
        }
        return !0
    };
    var o = n(r(11)),
        i = n(r(7)),
        a = n(r(44));

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function u(e, t) {
        if (!e || !t) return !1;
        if (e.id && e.id !== t.id) return !1;
        if (e.nodeName && e.nodeName !== t.nodeName) return !1;
        if (e.classList && (!t.classList || e.classList.map((function (e) {
                return e.toLowerCase()
            })).some((function (e) {
                return -1 === t.classList.map((function (e) {
                    return e.toLowerCase()
                })).indexOf(e)
            })))) return !1;
        if (e.nthChild) {
            var r = parseInt(e.nthChild, 10);
            return isNaN(r) ? Math.abs(t.nthChild % 2) === ("odd" === e.nthChild ? 1 : 0) : r === t.nthChild
        }
        return !0
    }
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return e.replace(/\s*>\s*|:nth-child\(([1-9][0-9]*|odd|even)\)|\s+/gi, (function (e) {
            return e.indexOf(">") > -1 ? " >" : 0 === e.trim().length ? " " : " ".concat("~").concat(e.slice(":nth-child(".length))
        })).split(/\s+/).map((function (e) {
            var t = {},
                r = e;
            switch (e.charAt(0)) {
            case ">":
                t.directDesc = !0, r = e.slice(1);
                break;
            case "~":
                var n = e.slice(1).split(")"),
                    s = (0, i.default)(n, 2),
                    u = s[0],
                    c = s[1];
                t.directDesc = !0, t.nthChild = u, r = c
            }
            return r.replace(/\.|#/gi, (function (e) {
                return " ".concat(e)
            })).split(" ").forEach((function (e) {
                if ((0, a.default)(e, ".")) {
                    var r = e.slice(1);
                    t.classList = t.classList ? [].concat((0, o.default)(t.classList), [r]) : [r]
                } else(0, a.default)(e, "#") ? t.id = e.slice(1) : t.nodeName = e
            })), t
        }))
    };
    var o = n(r(11)),
        i = n(r(5)),
        a = n(r(45));
    e.exports = t.default
}, function (e, t, r) {
    "use strict";

    function n(e) {
        var t = e.match(/^([a-z0-9-_]+)/gi),
            r = e.match(/:([a-z0-9-_()]+)/gi),
            n = e.match(/#([a-z0-9-_]+)/gi),
            o = e.match(/(\.[a-z0-9-_]+)/gi),
            i = {};
        return t && (i.nodeName = t[0]), r && (i.pseudoClassList = r.map((function (e) {
            return e.substr(1)
        }))), n && (i.id = n[0].substr(1)), o && (i.classList = o.map((function (e) {
            return e.substr(1)
        }))), i
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return e.replace(/\s?>\s?/g, " ").split(/\s+/g).map(n).map((function (e) {
            return e.classList && e.classList.sort(), e
        }))
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        if (!t.length) return null;
        var r = t.split(" > "),
            n = e.querySelector("body");
        if (!n) return null;
        var o = r.shift();
        if (!(n = s({
                root: n,
                selector: o,
                directDesc: !1
            }))) return null;
        var a, u = i(r);
        try {
            for (u.s(); !(a = u.n()).done;) {
                var c = a.value;
                if (!(n = s({
                        root: n,
                        selector: c,
                        directDesc: !0
                    }))) return null
            }
        } catch (e) {
            u.e(e)
        } finally {
            u.f()
        }
        return n
    };
    var o = n(r(7));

    function i(e, t) {
        var r;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (r = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0,
                    o = function () {};
                return {
                    s: o,
                    n: function () {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, s = !0,
            u = !1;
        return {
            s: function () {
                r = e[Symbol.iterator]()
            },
            n: function () {
                var e = r.next();
                return s = e.done, e
            },
            e: function (e) {
                u = !0, i = e
            },
            f: function () {
                try {
                    s || null == r.return || r.return()
                } finally {
                    if (u) throw i
                }
            }
        }
    }

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var s = function (e) {
        var t = e.root,
            r = e.selector,
            n = e.directDesc,
            a = r.split(/(?=\.)|(?=#)/),
            s = a.shift(),
            u = "",
            c = [];
        a.forEach((function (e) {
            "#" === e[0] && (u = e.toLowerCase().substring(1)), "." === e[0] && c.push(e.toLowerCase().substring(1))
        }));
        var l, f = i(n ? [t.querySelector(":scope > ".concat(s))] : t.querySelectorAll(s));
        try {
            var d = function () {
                var e = l.value;
                if (!e || u !== e.id.toLowerCase()) return "continue";
                var t = e.className.split(" ").map((function (e) {
                    return e.toLowerCase()
                })).filter((function (e) {
                    return "" !== e && ":" !== e[0]
                }));
                return c.every((function (e) {
                    return t.includes(e)
                })) ? {
                    v: e
                } : "continue"
            };
            for (f.s(); !(l = f.n()).done;) {
                var p = d();
                if ("continue" !== p && "object" === (0, o.default)(p)) return p.v
            }
        } catch (e) {
            f.e(e)
        } finally {
            f.f()
        }
        return null
    };
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        var r = String(e);
        if ("lipsum" === String(t).toLowerCase()) return function (e) {
            var t = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                r = Math.ceil(e.length / t.length),
                n = "";
            for (; r > 0;) n += t, r--;
            return n.slice(0, e.length)
        }(r);
        return ""
    };
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        return e && t && e.substring(e.length - t.length) === t
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        return e && t && e.indexOf(t) > -1
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        var r = Math.ceil(e),
            n = Math.floor(t);
        return Math.floor(Math.random() * (n - r)) + r
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = (0, n(r(41)).default)((function (e) {
        var t = {
            nodeName: e.nodeName ? e.nodeName.toLowerCase() : ""
        };
        return e.id && e.id.length > 0 && (t.id = e.id), e.classList && e.classList.length > 0 && (t.classList = Array.prototype.slice.call(e.classList, 0)), t
    }));
    t.default = o, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        if (e) try {
            var t = ("string" == typeof e ? JSON.parse(e) : e).query.trim().match(/(query|mutation) ([a-z_-]+)/i);
            return t ? {
                operationType: t[1],
                operationName: t[2]
            } : {}
        } catch (e) {
            return {}
        }
        return {}
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return n.indexOf(e.type) > -1 || "CLICK" === e.data.eventType
    };
    var n = ["lr.browser.NavigationEvent", "lr.browser.InputChangeEvent", "lr.browser.InputEvent"];
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        return ["lr.browser.MouseEvent", "lr.browser.ScrollEvent", "lr.browser.InputEvent", "lr.browser.InputChangeEvent", "lr.android.TouchEvent"].indexOf(e) > -1
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        if (t <= 0) return !1;
        var r = Math.floor(1e4 * t);
        return (0, o.default)(e) % 1e4 <= r
    };
    var o = n(r(47));
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.prefix,
            r = void 0 === t ? 4 : t;
        return "".concat(r, "-").concat((0, o.default)())
    };
    var o = n(r(46));
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = new Set;
        return e.forEach((function (e) {
            return t.add(e)
        })), t
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = [];
        return e.forEach((function (e) {
            return t.push(e)
        })), t
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t, r = e.logger,
            n = e.url,
            o = void 0 === n ? "" : n,
            i = (r.getConfig("lr.browser") || {}).urlSanitizer,
            a = void 0 === i ? function (e) {
                return e
            } : i;
        try {
            t = a(o)
        } catch (e) {
            console.error(e)
        }
        if ("string" == typeof t) return t;
        return ""
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function () {
        return {
            permissions: {
                dashboard: {
                    metrics: !0,
                    errors: !0
                },
                sessionPlayback: {
                    developerPane: {
                        networkPane: {
                            requestBodiesAndHeaders: !0
                        }
                    }
                }
            },
            appRoles: []
        }
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        if (e) {
            var t = e.split("/");
            return (0, o.default)(t, 1)[0] === i.DEMO_ORG_SLUG
        }
        return !1
    };
    var o = n(r(5)),
        i = r(48);
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.LOG_FILTER_LABELS = t.LOG_FILTER_TYPES = t.LOG_TYPES = void 0;
    var o, i, a = n(r(3));

    function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(r), !0).forEach((function (t) {
                (0, a.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }
    var c = {
        LOG: "LOG",
        WARN: "WARN",
        ERROR: "ERROR",
        DEBUG: "DEBUG",
        INFO: "INFO",
        REDUX: "REDUX",
        NAVIGATION: "NAVIGATION",
        NETWORK: "NETWORK",
        PREV_SESSION: "PREV_SESSION",
        NEXT_SESSION: "NEXT_SESSION",
        LOAD_MORE: "LOAD_MORE"
    };
    t.LOG_TYPES = c;
    var l = (o = {}, (0, a.default)(o, c.LOG, "Logs"), (0, a.default)(o, c.WARN, "Warnings"), (0, a.default)(o, c.ERROR, "Errors"), (0, a.default)(o, c.INFO, "Info"), (0, a.default)(o, c.DEBUG, "Debug"), (0, a.default)(o, c.REDUX, "Redux"), (0, a.default)(o, c.NAVIGATION, "Navigation"), o);
    t.LOG_FILTER_TYPES = l;
    var f = u(u({}, l), {}, (i = {}, (0, a.default)(i, c.LOG, "Log"), (0, a.default)(i, c.WARN, "Warn"), (0, a.default)(i, c.ERROR, "Error"), i));
    t.LOG_FILTER_LABELS = f
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DEFAULT_HEATMAP_FOR_URL_OPERATOR = t.HEATMAP_FOR_URL_OPERATOR = t.METRIC_TIMESERIES_TYPE = void 0;
    t.METRIC_TIMESERIES_TYPE = {
        SESSION_COUNT: "SESSION_COUNT",
        PERCENTILE: "PERCENTILE",
        CONVERSION_RATE: "CONVERSION_RATE",
        SESSION_PERCENTAGE: "SESSION_PERCENTAGE",
        ACTIVE_USERS: "ACTIVE_USERS"
    };
    var n = {
        IS: "IS",
        CONTAINS: "CONTAINS"
    };
    t.HEATMAP_FOR_URL_OPERATOR = n;
    var o = n.IS;
    t.DEFAULT_HEATMAP_FOR_URL_OPERATOR = o
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ISSUE_GROUP_TYPE = t.ISSUE_TYPE = void 0;
    t.ISSUE_TYPE = {
        NETWORK_ERROR: "NETWORK_ERROR",
        EXCEPTION: "EXCEPTION"
    };
    t.ISSUE_GROUP_TYPE = {
        DYNAMIC: "DYNAMIC",
        TROYTOWN: "TROYTOWN"
    }
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            n = r.sdkThrottle,
            i = void 0 === n ? 500 : n;
        if (!e.length) return null;
        var a = (0, o.default)(e, {
                time: t
            }, "time"),
            s = e[a] || e[a - 1],
            u = e[a - 1] || s,
            c = Math.min(s.time - u.time, i),
            l = Math.max(t - (s.time - c), 0),
            f = 0 === c ? 1 : Math.min(l / c, 1);
        return {
            prev: u,
            next: s,
            ratio: f
        }
    };
    var o = n(r(49));
    e.exports = t.default
}, function (e, t, r) {
    var n = r(130),
        o = r(195),
        i = r(206),
        a = r(10),
        s = r(207);
    e.exports = function (e) {
        return "function" == typeof e ? e : null == e ? i : "object" == typeof e ? a(e) ? o(e[0], e[1]) : n(e) : s(e)
    }
}, function (e, t, r) {
    var n = r(131),
        o = r(194),
        i = r(64);
    e.exports = function (e) {
        var t = o(e);
        return 1 == t.length && t[0][2] ? i(t[0][0], t[0][1]) : function (r) {
            return r === e || n(r, e, t)
        }
    }
}, function (e, t, r) {
    var n = r(50),
        o = r(55);
    e.exports = function (e, t, r, i) {
        var a = r.length,
            s = a,
            u = !i;
        if (null == e) return !s;
        for (e = Object(e); a--;) {
            var c = r[a];
            if (u && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
        }
        for (; ++a < s;) {
            var l = (c = r[a])[0],
                f = e[l],
                d = c[1];
            if (u && c[2]) {
                if (void 0 === f && !(l in e)) return !1
            } else {
                var p = new n;
                if (i) var h = i(f, d, l, e, t, p);
                if (!(void 0 === h ? o(d, f, 3, i, p) : h)) return !1
            }
        }
        return !0
    }
}, function (e, t) {
    e.exports = function () {
        this.__data__ = [], this.size = 0
    }
}, function (e, t, r) {
    var n = r(20),
        o = Array.prototype.splice;
    e.exports = function (e) {
        var t = this.__data__,
            r = n(t, e);
        return !(r < 0) && (r == t.length - 1 ? t.pop() : o.call(t, r, 1), --this.size, !0)
    }
}, function (e, t, r) {
    var n = r(20);
    e.exports = function (e) {
        var t = this.__data__,
            r = n(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
}, function (e, t, r) {
    var n = r(20);
    e.exports = function (e) {
        return n(this.__data__, e) > -1
    }
}, function (e, t, r) {
    var n = r(20);
    e.exports = function (e, t) {
        var r = this.__data__,
            o = n(r, e);
        return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this
    }
}, function (e, t, r) {
    var n = r(19);
    e.exports = function () {
        this.__data__ = new n, this.size = 0
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r
    }
}, function (e, t) {
    e.exports = function (e) {
        return this.__data__.get(e)
    }
}, function (e, t) {
    e.exports = function (e) {
        return this.__data__.has(e)
    }
}, function (e, t, r) {
    var n = r(19),
        o = r(27),
        i = r(29);
    e.exports = function (e, t) {
        var r = this.__data__;
        if (r instanceof n) {
            var a = r.__data__;
            if (!o || a.length < 199) return a.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new i(a)
        }
        return r.set(e, t), this.size = r.size, this
    }
}, function (e, t, r) {
    var n = r(52),
        o = r(145),
        i = r(28),
        a = r(54),
        s = /^\[object .+?Constructor\]$/,
        u = Function.prototype,
        c = Object.prototype,
        l = u.toString,
        f = c.hasOwnProperty,
        d = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = function (e) {
        return !(!i(e) || o(e)) && (n(e) ? d : s).test(a(e))
    }
}, function (e, t, r) {
    var n = r(21),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        s = n ? n.toStringTag : void 0;
    e.exports = function (e) {
        var t = i.call(e, s),
            r = e[s];
        try {
            e[s] = void 0;
            var n = !0
        } catch (e) {}
        var o = a.call(e);
        return n && (t ? e[s] = r : delete e[s]), o
    }
}, function (e, t) {
    var r = Object.prototype.toString;
    e.exports = function (e) {
        return r.call(e)
    }
}, function (e, t, r) {
    var n, o = r(146),
        i = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
    e.exports = function (e) {
        return !!i && i in e
    }
}, function (e, t, r) {
    var n = r(9)["__core-js_shared__"];
    e.exports = n
}, function (e, t) {
    e.exports = function (e, t) {
        return null == e ? void 0 : e[t]
    }
}, function (e, t, r) {
    var n = r(149),
        o = r(19),
        i = r(27);
    e.exports = function () {
        this.size = 0, this.__data__ = {
            hash: new n,
            map: new(i || o),
            string: new n
        }
    }
}, function (e, t, r) {
    var n = r(150),
        o = r(151),
        i = r(152),
        a = r(153),
        s = r(154);

    function u(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = a, u.prototype.set = s, e.exports = u
}, function (e, t, r) {
    var n = r(22);
    e.exports = function () {
        this.__data__ = n ? n(null) : {}, this.size = 0
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
}, function (e, t, r) {
    var n = r(22),
        o = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
        var t = this.__data__;
        if (n) {
            var r = t[e];
            return "__lodash_hash_undefined__" === r ? void 0 : r
        }
        return o.call(t, e) ? t[e] : void 0
    }
}, function (e, t, r) {
    var n = r(22),
        o = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
        var t = this.__data__;
        return n ? void 0 !== t[e] : o.call(t, e)
    }
}, function (e, t, r) {
    var n = r(22);
    e.exports = function (e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t, this
    }
}, function (e, t, r) {
    var n = r(23);
    e.exports = function (e) {
        var t = n(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
}, function (e, t, r) {
    var n = r(23);
    e.exports = function (e) {
        return n(this, e).get(e)
    }
}, function (e, t, r) {
    var n = r(23);
    e.exports = function (e) {
        return n(this, e).has(e)
    }
}, function (e, t, r) {
    var n = r(23);
    e.exports = function (e, t) {
        var r = n(this, e),
            o = r.size;
        return r.set(e, t), this.size += r.size == o ? 0 : 1, this
    }
}, function (e, t, r) {
    var n = r(50),
        o = r(56),
        i = r(166),
        a = r(170),
        s = r(189),
        u = r(10),
        c = r(59),
        l = r(62),
        f = "[object Arguments]",
        d = "[object Array]",
        p = "[object Object]",
        h = Object.prototype.hasOwnProperty;
    e.exports = function (e, t, r, y, g, v) {
        var m = u(e),
            b = u(t),
            w = m ? d : s(e),
            _ = b ? d : s(t),
            O = (w = w == f ? p : w) == p,
            I = (_ = _ == f ? p : _) == p,
            E = w == _;
        if (E && c(e)) {
            if (!c(t)) return !1;
            m = !0, O = !1
        }
        if (E && !O) return v || (v = new n), m || l(e) ? o(e, t, r, y, g, v) : i(e, t, w, r, y, g, v);
        if (!(1 & r)) {
            var S = O && h.call(e, "__wrapped__"),
                P = I && h.call(t, "__wrapped__");
            if (S || P) {
                var x = S ? e.value() : e,
                    T = P ? t.value() : t;
                return v || (v = new n), g(x, T, r, y, v)
            }
        }
        return !!E && (v || (v = new n), a(e, t, r, y, g, v))
    }
}, function (e, t, r) {
    var n = r(29),
        o = r(162),
        i = r(163);

    function a(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.__data__ = new n; ++t < r;) this.add(e[t])
    }
    a.prototype.add = a.prototype.push = o, a.prototype.has = i, e.exports = a
}, function (e, t) {
    e.exports = function (e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this
    }
}, function (e, t) {
    e.exports = function (e) {
        return this.__data__.has(e)
    }
}, function (e, t) {
    e.exports = function (e, t) {
        for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
            if (t(e[r], r, e)) return !0;
        return !1
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return e.has(t)
    }
}, function (e, t, r) {
    var n = r(21),
        o = r(167),
        i = r(51),
        a = r(56),
        s = r(168),
        u = r(169),
        c = n ? n.prototype : void 0,
        l = c ? c.valueOf : void 0;
    e.exports = function (e, t, r, n, c, f, d) {
        switch (r) {
        case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
        case "[object ArrayBuffer]":
            return !(e.byteLength != t.byteLength || !f(new o(e), new o(t)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
            return i(+e, +t);
        case "[object Error]":
            return e.name == t.name && e.message == t.message;
        case "[object RegExp]":
        case "[object String]":
            return e == t + "";
        case "[object Map]":
            var p = s;
        case "[object Set]":
            var h = 1 & n;
            if (p || (p = u), e.size != t.size && !h) return !1;
            var y = d.get(e);
            if (y) return y == t;
            n |= 2, d.set(e, t);
            var g = a(p(e), p(t), n, c, f, d);
            return d.delete(e), g;
        case "[object Symbol]":
            if (l) return l.call(e) == l.call(t)
        }
        return !1
    }
}, function (e, t, r) {
    var n = r(9).Uint8Array;
    e.exports = n
}, function (e, t) {
    e.exports = function (e) {
        var t = -1,
            r = Array(e.size);
        return e.forEach((function (e, n) {
            r[++t] = [n, e]
        })), r
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = -1,
            r = Array(e.size);
        return e.forEach((function (e) {
            r[++t] = e
        })), r
    }
}, function (e, t, r) {
    var n = r(171),
        o = Object.prototype.hasOwnProperty;
    e.exports = function (e, t, r, i, a, s) {
        var u = 1 & r,
            c = n(e),
            l = c.length;
        if (l != n(t).length && !u) return !1;
        for (var f = l; f--;) {
            var d = c[f];
            if (!(u ? d in t : o.call(t, d))) return !1
        }
        var p = s.get(e),
            h = s.get(t);
        if (p && h) return p == t && h == e;
        var y = !0;
        s.set(e, t), s.set(t, e);
        for (var g = u; ++f < l;) {
            var v = e[d = c[f]],
                m = t[d];
            if (i) var b = u ? i(m, v, d, t, e, s) : i(v, m, d, e, t, s);
            if (!(void 0 === b ? v === m || a(v, m, r, i, s) : b)) {
                y = !1;
                break
            }
            g || (g = "constructor" == d)
        }
        if (y && !g) {
            var w = e.constructor,
                _ = t.constructor;
            w == _ || !("constructor" in e) || !("constructor" in t) || "function" == typeof w && w instanceof w && "function" == typeof _ && _ instanceof _ || (y = !1)
        }
        return s.delete(e), s.delete(t), y
    }
}, function (e, t, r) {
    var n = r(172),
        o = r(174),
        i = r(57);
    e.exports = function (e) {
        return n(e, i, o)
    }
}, function (e, t, r) {
    var n = r(173),
        o = r(10);
    e.exports = function (e, t, r) {
        var i = t(e);
        return o(e) ? i : n(i, r(e))
    }
}, function (e, t) {
    e.exports = function (e, t) {
        for (var r = -1, n = t.length, o = e.length; ++r < n;) e[o + r] = t[r];
        return e
    }
}, function (e, t, r) {
    var n = r(175),
        o = r(176),
        i = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        s = a ? function (e) {
            return null == e ? [] : (e = Object(e), n(a(e), (function (t) {
                return i.call(e, t)
            })))
        } : o;
    e.exports = s
}, function (e, t) {
    e.exports = function (e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, o = 0, i = []; ++r < n;) {
            var a = e[r];
            t(a, r, e) && (i[o++] = a)
        }
        return i
    }
}, function (e, t) {
    e.exports = function () {
        return []
    }
}, function (e, t, r) {
    var n = r(178),
        o = r(58),
        i = r(10),
        a = r(59),
        s = r(61),
        u = r(62),
        c = Object.prototype.hasOwnProperty;
    e.exports = function (e, t) {
        var r = i(e),
            l = !r && o(e),
            f = !r && !l && a(e),
            d = !r && !l && !f && u(e),
            p = r || l || f || d,
            h = p ? n(e.length, String) : [],
            y = h.length;
        for (var g in e) !t && !c.call(e, g) || p && ("length" == g || f && ("offset" == g || "parent" == g) || d && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || s(g, y)) || h.push(g);
        return h
    }
}, function (e, t) {
    e.exports = function (e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
}, function (e, t, r) {
    var n = r(15),
        o = r(16);
    e.exports = function (e) {
        return o(e) && "[object Arguments]" == n(e)
    }
}, function (e, t) {
    e.exports = function () {
        return !1
    }
}, function (e, t, r) {
    var n = r(15),
        o = r(30),
        i = r(16),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function (e) {
        return i(e) && o(e.length) && !!a[n(e)]
    }
}, function (e, t) {
    e.exports = function (e) {
        return function (t) {
            return e(t)
        }
    }
}, function (e, t, r) {
    (function (e) {
        var n = r(53),
            o = t && !t.nodeType && t,
            i = o && "object" == typeof e && e && !e.nodeType && e,
            a = i && i.exports === o && n.process,
            s = function () {
                try {
                    var e = i && i.require && i.require("util").types;
                    return e || a && a.binding && a.binding("util")
                } catch (e) {}
            }();
        e.exports = s
    }).call(this, r(60)(e))
}, function (e, t, r) {
    var n = r(185),
        o = r(186),
        i = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
        if (!n(e)) return o(e);
        var t = [];
        for (var r in Object(e)) i.call(e, r) && "constructor" != r && t.push(r);
        return t
    }
}, function (e, t) {
    var r = Object.prototype;
    e.exports = function (e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || r)
    }
}, function (e, t, r) {
    var n = r(187)(Object.keys, Object);
    e.exports = n
}, function (e, t) {
    e.exports = function (e, t) {
        return function (r) {
            return e(t(r))
        }
    }
}, function (e, t, r) {
    var n = r(52),
        o = r(30);
    e.exports = function (e) {
        return null != e && o(e.length) && !n(e)
    }
}, function (e, t, r) {
    var n = r(190),
        o = r(27),
        i = r(191),
        a = r(192),
        s = r(193),
        u = r(15),
        c = r(54),
        l = "[object Map]",
        f = "[object Promise]",
        d = "[object Set]",
        p = "[object WeakMap]",
        h = "[object DataView]",
        y = c(n),
        g = c(o),
        v = c(i),
        m = c(a),
        b = c(s),
        w = u;
    (n && w(new n(new ArrayBuffer(1))) != h || o && w(new o) != l || i && w(i.resolve()) != f || a && w(new a) != d || s && w(new s) != p) && (w = function (e) {
        var t = u(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            n = r ? c(r) : "";
        if (n) switch (n) {
        case y:
            return h;
        case g:
            return l;
        case v:
            return f;
        case m:
            return d;
        case b:
            return p
        }
        return t
    }), e.exports = w
}, function (e, t, r) {
    var n = r(13)(r(9), "DataView");
    e.exports = n
}, function (e, t, r) {
    var n = r(13)(r(9), "Promise");
    e.exports = n
}, function (e, t, r) {
    var n = r(13)(r(9), "Set");
    e.exports = n
}, function (e, t, r) {
    var n = r(13)(r(9), "WeakMap");
    e.exports = n
}, function (e, t, r) {
    var n = r(63),
        o = r(57);
    e.exports = function (e) {
        for (var t = o(e), r = t.length; r--;) {
            var i = t[r],
                a = e[i];
            t[r] = [i, a, n(a)]
        }
        return t
    }
}, function (e, t, r) {
    var n = r(55),
        o = r(196),
        i = r(203),
        a = r(31),
        s = r(63),
        u = r(64),
        c = r(25);
    e.exports = function (e, t) {
        return a(e) && s(t) ? u(c(e), t) : function (r) {
            var a = o(r, e);
            return void 0 === a && a === t ? i(r, e) : n(t, a, 3)
        }
    }
}, function (e, t, r) {
    var n = r(65);
    e.exports = function (e, t, r) {
        var o = null == e ? void 0 : n(e, t);
        return void 0 === o ? r : o
    }
}, function (e, t, r) {
    var n = r(198),
        o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        a = n((function (e) {
            var t = [];
            return 46 === e.charCodeAt(0) && t.push(""), e.replace(o, (function (e, r, n, o) {
                t.push(n ? o.replace(i, "$1") : r || e)
            })), t
        }));
    e.exports = a
}, function (e, t, r) {
    var n = r(199);
    e.exports = function (e) {
        var t = n(e, (function (e) {
                return 500 === r.size && r.clear(), e
            })),
            r = t.cache;
        return t
    }
}, function (e, t, r) {
    var n = r(29);

    function o(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
        var r = function () {
            var n = arguments,
                o = t ? t.apply(this, n) : n[0],
                i = r.cache;
            if (i.has(o)) return i.get(o);
            var a = e.apply(this, n);
            return r.cache = i.set(o, a) || i, a
        };
        return r.cache = new(o.Cache || n), r
    }
    o.Cache = n, e.exports = o
}, function (e, t, r) {
    var n = r(201);
    e.exports = function (e) {
        return null == e ? "" : n(e)
    }
}, function (e, t, r) {
    var n = r(21),
        o = r(202),
        i = r(10),
        a = r(24),
        s = n ? n.prototype : void 0,
        u = s ? s.toString : void 0;
    e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (i(t)) return o(t, e) + "";
        if (a(t)) return u ? u.call(t) : "";
        var r = t + "";
        return "0" == r && 1 / t == -Infinity ? "-0" : r
    }
}, function (e, t) {
    e.exports = function (e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
        return o
    }
}, function (e, t, r) {
    var n = r(204),
        o = r(205);
    e.exports = function (e, t) {
        return null != e && o(e, t, n)
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return null != e && t in Object(e)
    }
}, function (e, t, r) {
    var n = r(66),
        o = r(58),
        i = r(10),
        a = r(61),
        s = r(30),
        u = r(25);
    e.exports = function (e, t, r) {
        for (var c = -1, l = (t = n(t, e)).length, f = !1; ++c < l;) {
            var d = u(t[c]);
            if (!(f = null != e && r(e, d))) break;
            e = e[d]
        }
        return f || ++c != l ? f : !!(l = null == e ? 0 : e.length) && s(l) && a(d, l) && (i(e) || o(e))
    }
}, function (e, t) {
    e.exports = function (e) {
        return e
    }
}, function (e, t, r) {
    var n = r(208),
        o = r(209),
        i = r(31),
        a = r(25);
    e.exports = function (e) {
        return i(e) ? n(a(e)) : o(e)
    }
}, function (e, t) {
    e.exports = function (e) {
        return function (t) {
            return null == t ? void 0 : t[e]
        }
    }
}, function (e, t, r) {
    var n = r(65);
    e.exports = function (e) {
        return function (t) {
            return n(t, e)
        }
    }
}, function (e, t, r) {
    var n = r(24),
        o = Math.floor,
        i = Math.min;
    e.exports = function (e, t, r, a) {
        var s = 0,
            u = null == e ? 0 : e.length;
        if (0 === u) return 0;
        for (var c = (t = r(t)) != t, l = null === t, f = n(t), d = void 0 === t; s < u;) {
            var p = o((s + u) / 2),
                h = r(e[p]),
                y = void 0 !== h,
                g = null === h,
                v = h == h,
                m = n(h);
            if (c) var b = a || v;
            else b = d ? v && (a || y) : l ? v && y && (a || !g) : f ? v && y && !g && (a || !m) : !g && !m && (a ? h <= t : h < t);
            b ? s = p + 1 : u = p
        }
        return i(u, 4294967294)
    }
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = u, t.interpolateMobile = function (e, t, r) {
        if (!e) return {};
        var n = e.prev,
            o = e.next;
        if ("MOVE" === o.type) return u(e, t);
        if (n === o && Math.abs(r - o.time) > 500) return null;
        return o
    };
    var o = n(r(3));

    function i(e, t) {
        var r;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (r = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0,
                    o = function () {};
                return {
                    s: o,
                    n: function () {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, s = !0,
            u = !1;
        return {
            s: function () {
                r = e[Symbol.iterator]()
            },
            n: function () {
                var e = r.next();
                return s = e.done, e
            },
            e: function (e) {
                u = !0, i = e
            },
            f: function () {
                try {
                    s || null == r.return || r.return()
                } finally {
                    if (u) throw i
                }
            }
        }
    }

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function u(e, t) {
        if (!e) return {};
        var r, n = e.prev,
            a = e.next,
            u = e.ratio,
            c = function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function (t) {
                        (0, o.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }({}, a),
            l = i(t);
        try {
            for (l.s(); !(r = l.n()).done;) {
                var f = r.value;
                c[f] = n[f] + (a[f] - n[f]) * u
            }
        } catch (e) {
            l.e(e)
        } finally {
            l.f()
        }
        return c
    }
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        if (0 === e.length) return e;
        var r = (0, o.default)(e, {
                time: t.time - 5e3
            }, "time") - 1,
            n = e[r];
        if (n && t.time - n.time > 5e3 && r > 0) return e.slice(r);
        return e
    };
    var o = n(r(49));
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.knownMetricTypes = void 0;
    t.knownMetricTypes = ["cumulativeLayoutShift", "firstInputDelay", "initialPageLoadTime", "largestContentfulPaintTime", "timeToFirstByte"]
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DELIGHTED_RESPONSES_REGEX = t.WOOTRIC_RESPONSES_REGEX = void 0;
    t.WOOTRIC_RESPONSES_REGEX = /^https:\/\/production.wootric.com\/responses/;
    t.DELIGHTED_RESPONSES_REGEX = /^https:\/\/web.delighted.com\/e\/[a-zA-Z-]*\/c/
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t) {
        var r = t || {},
            n = r.assetManager,
            l = r.unsubs;
        if (n && l) {
            var f = (0, s.default)(e, t, {
                assetManager: n
            });
            l.splice(2, 1, f)
        } else {
            var d = {
                assetManager: n = new o.default(e, t)
            };
            l = [(0, i.default)(e, t, d), (0, a.default)(e, t, d), (0, s.default)(e, t, d), (0, u.default)(e, t, d), (0, c.default)(e, t, d), function () {
                return n.shutdown()
            }]
        }
        return function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return e ? (l[2](), {
                assetManager: n,
                unsubs: l
            }) : (l.forEach((function (e) {
                return e()
            })), {})
        }
    };
    var o = n(r(216)),
        i = n(r(217)),
        a = n(r(218)),
        s = n(r(219)),
        u = n(r(236)),
        c = n(r(237));
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = n(r(3)),
        i = n(r(38)),
        a = n(r(4)),
        s = n(r(6)),
        u = r(2);

    function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? c(Object(r), !0).forEach((function (t) {
                (0, o.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }
    var f = {
            script: ["src"],
            img: ["src"],
            image: ["xlink:href"],
            link: ["href"]
        },
        d = function () {
            function e(t) {
                var r = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = n.assetCapture,
                    s = void 0 === o ? {} : o;
                (0, a.default)(this, e), this.capturePerformanceEntry = (0, u.protectFunc)((function (e) {
                    if (e)
                        if ("navigation" === e.entryType) r._addResourceEvent(e);
                        else if ("resource" === e.entryType) switch (e.initiatorType) {
                    case "link":
                    case "script":
                    case "img":
                    case "image":
                        if (!1 !== r._isDomEnabled) {
                            if (r._findClosedRequestIndex(e) >= 0) return void r._addKnownResource(e);
                            var t = r._findPendingRequestIndex(e);
                            t >= 0 && r._removePendingRequestAtIndex(t), r._addKnownResource(e)
                        }
                    case "css":
                    case "track":
                    case "other":
                        r._addResourceEvent(e)
                    }
                })), this.maybeRecordAssetNode = (0, u.protectFunc)((function (e) {
                    var t = e.tagName,
                        n = e.attributes,
                        o = e.target,
                        a = (0, i.default)(e, ["tagName", "attributes", "target"]);
                    if (r.shouldRecordAsset(o)) {
                        var s = f[t];
                        if (s) {
                            var c = (0, u.find)(s, (function (e) {
                                return !!n[e]
                            }));
                            c && r.captureDomAssetEntry(l({
                                tagName: t,
                                attrValue: n[c]
                            }, a))
                        }
                    }
                })), this.maybeRecordAssetAttribute = (0, u.protectFunc)((function (e) {
                    var t = e.tagName,
                        n = e.attrName,
                        o = e.target,
                        a = (0, i.default)(e, ["tagName", "attrName", "target"]);
                    if (r.shouldRecordAsset(o)) {
                        var s = f[t],
                            u = o.getAttribute(n);
                        s && s.indexOf(n) >= 0 && r.captureDomAssetEntry(l({
                            tagName: t,
                            attrValue: u
                        }, a))
                    }
                })), this.captureDomAssetEntry = (0, u.protectFunc)((function (e) {
                    var t = e.tagName,
                        n = e.attrValue;
                    if (!(0, u.startsWith)(n, "data:") && !(0, u.startsWith)(n, "blob:")) {
                        var o = document.createElement("a");
                        o.href = n;
                        var i, a = {
                                initiatorType: t,
                                name: o.href,
                                startTime: Date.now()
                            },
                            s = (r._logger.getConfig("lr.network.PerfResourceEvent") || {}).requestSanitizer,
                            c = void 0 === s ? function (e) {
                                return e
                            } : s;
                        try {
                            i = c(l(l({}, a), {}, {
                                url: a.name,
                                headers: {},
                                body: ""
                            }))
                        } catch (e) {
                            console.error(e)
                        }
                        if (i)
                            if (a.name = i.url, !r._hasKnownResource(a))
                                if (!(r._findPendingRequestIndex(a) >= 0)) {
                                    var f = r._findClosedRequestIndex(a);
                                    f >= 0 && r._removeClosedRequestAtIndex(f), r._pendingRequests.length >= 1e3 || r._closedRequests.length >= 1e3 || r._pendingRequests.push(a)
                                }
                    }
                })), this._closingLoopHandler = function () {
                    try {
                        r._closingLoopTimer = null;
                        var e = Date.now(),
                            t = e - r._forceCloseDelay;
                        r._pendingRequests = r._pendingRequests.filter((function (e) {
                            return !(e.startTime <= t) || (r._closePendingRequest(e), r._closedRequests.push(e), !1)
                        }));
                        var n = e - r._closedKeepDelay;
                        r._closedRequests = r._closedRequests.filter((function (e) {
                            return e.time > n
                        })), r._scheduleClosingLoop()
                    } catch (e) {
                        r._pendingRequests = [], r._closedRequests = [], r._isDomEnabled = !1, (0, u.sendTelemetry)("AssetManager closing loop failure: ".concat(e))
                    }
                };
                var c = s.isDisabled,
                    d = void 0 !== c && c,
                    p = s.loopInterval,
                    h = void 0 === p ? 500 : p,
                    y = s.forceCloseDelay,
                    g = void 0 === y ? 1e4 : y,
                    v = s.closedKeepDelay,
                    m = void 0 === v ? 6e4 : v;
                this._logger = t, this._isDisabled = d, this._loopInterval = h, this._forceCloseDelay = g, this._closedKeepDelay = m, this.reset()
            }
            return (0, s.default)(e, [{
                key: "setPerformanceStatus",
                value: function (e, t) {
                    this._isPerformanceEnabled = e, this._browserLoadTime = t
                }
            }, {
                key: "setDomStatus",
                value: function (e) {
                    this._isDomEnabled = !1 === this._isDisabled && !0 === this._isPerformanceEnabled && e, this._isDomEnabled ? this._scheduleClosingLoop() : this._pendingRequests = []
                }
            }, {
                key: "shutdown",
                value: function () {
                    this.reset(), this._isPerformanceEnabled = !1, this._isDomEnabled = !1
                }
            }, {
                key: "shouldRecordAsset",
                value: function (e) {
                    var t = e.tagName && e.tagName.toLowerCase(),
                        r = e.parentNode && e.parentNode.tagName && e.parentNode.tagName.toLowerCase();
                    return ("link" !== t || "stylesheet" === e.getAttribute("rel")) && ("picture" !== r && !1 !== this._isDomEnabled)
                }
            }, {
                key: "_addKnownResource",
                value: function (e) {
                    this._knownResources.add(e.name)
                }
            }, {
                key: "_hasKnownResource",
                value: function (e) {
                    return this._knownResources.has(e.name)
                }
            }, {
                key: "_findPendingRequestIndex",
                value: function (e) {
                    return (0, u.findIndex)(this._pendingRequests, (function (t) {
                        return t.name === e.name
                    }))
                }
            }, {
                key: "_removePendingRequestAtIndex",
                value: function (e) {
                    var t = this._pendingRequests.slice(0);
                    t.splice(e, 1), this._pendingRequests = t
                }
            }, {
                key: "_findClosedRequestIndex",
                value: function (e) {
                    return (0, u.findIndex)(this._closedRequests, (function (t) {
                        return t.name === e.name
                    }))
                }
            }, {
                key: "_removeClosedRequestAtIndex",
                value: function (e) {
                    var t = this._closedRequests.slice(0);
                    t.splice(e, 1), this._closedRequests = t
                }
            }, {
                key: "_addResourceEvent",
                value: function (e) {
                    var t = this,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
                        n = "navigation" === e.entryType ? "navigation" : e.initiatorType;
                    this._logger.addEvent("lr.network.PerfResourceEvent", (function () {
                        return {
                            url: e.name,
                            startTime: e.startTime + t._browserLoadTime,
                            duration: e.duration,
                            initiatorType: n.toUpperCase(),
                            failed: 0 === r,
                            status: r,
                            transferSize: e.transferSize || 0
                        }
                    }))
                }
            }, {
                key: "_closePendingRequest",
                value: function (e) {
                    var t = this;
                    (0, u.startsWith)(e.name, "capacitor:") ? this._logger.addEvent("lr.network.PerfResourceEvent", (function () {
                        return {
                            url: e.name,
                            startTime: e.startTime,
                            initiatorType: e.initiatorType.toUpperCase(),
                            duration: (0, u.randomInt)(10, 50),
                            failed: !1,
                            status: 200,
                            transferSize: e.transferSize || 0
                        }
                    })): this._logger.addEvent("lr.network.PerfResourceEvent", (function () {
                        return {
                            url: e.name,
                            startTime: e.startTime,
                            initiatorType: e.initiatorType.toUpperCase(),
                            duration: t._forceCloseDelay,
                            failed: !0,
                            status: 0,
                            transferSize: e.transferSize || 0
                        }
                    }))
                }
            }, {
                key: "_scheduleClosingLoop",
                value: function () {
                    this._isPerformanceEnabled && this._isDomEnabled && !this._closingLoopTimer && (this._closingLoopTimer = setTimeout(this._closingLoopHandler, this._loopInterval))
                }
            }, {
                key: "reset",
                value: function () {
                    this._isPerformanceEnabled = null, this._browserLoadTime = null, this._isDomEnabled = null, this._knownResources = new Set, this._pendingRequests = [], this._closedRequests = [], this._closingLoopTimer && (clearTimeout(this._closingLoopTimer), this._closingLoopTimer = null)
                }
            }]), e
        }();
    t.default = d, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = r.rateLimitCount,
            i = void 0 === o ? 5 : o,
            a = r.rateLimitPeriodMs,
            s = void 0 === a ? 500 : a,
            u = 0,
            c = !1,
            l = function e() {
                u = 0, t = setTimeout(e, s)
            };

        function f(t) {
            var r = {
                href: e.urlSanitizer(window.location.href),
                navigationType: t
            };
            if ("PAGE_LOAD" === t) {
                var n = window.performance && window.performance.now && window.performance.now();
                n && (r.perfNow = Math.round(n))
            }++u > i ? c || (e._consoleLog("warn", "LogRocket: Navigation rate limit exceeded. Some navigation may not be captured."), c = !0) : e.addEvent("lr.browser.NavigationEvent", (function () {
                return r
            }))
        }
        f("PAGE_LOAD");
        var d = [(0, n.enhanceFunc)(window, "onpopstate", (function () {
            f("POP_STATE")
        })), function () {
            return clearTimeout(t)
        }];
        window.history.pushState && d.push((0, n.enhanceFunc)(window.history, "pushState", (function () {
            (arguments.length <= 2 ? void 0 : arguments[2]) && f("PUSH_STATE")
        })));
        window.history.replaceState && d.push((0, n.enhanceFunc)(window.history, "replaceState", (function () {
            (arguments.length <= 2 ? void 0 : arguments[2]) && f("REPLACE_STATE")
        })));
        return l(),
            function () {
                return d.forEach((function (e) {
                    return e()
                }))
            }
    };
    var n = r(2);
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = t.shouldRecordPerf,
            n = void 0 === r || r,
            o = arguments.length > 2 ? arguments[2] : void 0,
            a = o.assetManager,
            c = e.getConfig("lr.network.PerfResourceEvent") || {},
            l = c.isEnabled,
            f = void 0 === l || l,
            d = c.requestSanitizer,
            p = void 0 === d ? function (e) {
                return e
            } : d;
        if (!n || !window.performance || "function" != typeof window.performance.getEntries || "function" != typeof window.performance.addEventListener || "function" != typeof window.performance.removeEventListener || !1 === f) return a.setPerformanceStatus(!1),
            function () {};
        var h = window.performance.timing.navigationStart;
        a.setPerformanceStatus(!0, h);
        var y, g = (0, i.protectFunc)((function (e) {
            var t, r = u(e);
            try {
                for (r.s(); !(t = r.n()).done;) {
                    var n = t.value,
                        o = {
                            entryType: n.entryType,
                            initiatorType: n.initiatorType,
                            name: n.name,
                            startTime: n.startTime,
                            duration: n.duration,
                            transferSize: n.transferSize
                        },
                        i = void 0;
                    try {
                        i = p(s(s({}, o), {}, {
                            url: o.name,
                            headers: {},
                            body: ""
                        }))
                    } catch (e) {
                        console.error(e)
                    }
                    i && (o.name = i.url, a.capturePerformanceEntry(o))
                }
            } catch (e) {
                r.e(e)
            } finally {
                r.f()
            }
        }));
        if (window.PerformanceObserver && "function" == typeof window.PerformanceObserver) {
            g(window.performance.getEntries());
            var v = new PerformanceObserver((function (e) {
                return g(e.getEntries())
            }));
            return v.observe({
                    entryTypes: ["navigation", "resource"]
                }),
                function () {
                    return v.disconnect()
                }
        }
        var m = 0,
            b = (0, i.protectFunc)((function () {
                var e = window.performance.getEntries();
                if (e.length > m) {
                    for (var t = []; m < e.length; m++) t.push(e[m]);
                    m = e.length, g(t)
                }
            })),
            w = function e() {
                b(), y = setTimeout(e, 250)
            };
        w();
        var _ = function () {
            e._consoleLog("warn", "LogRocket: performance entry buffer has filled, shutting down asset tracker: https://docs.logrocket.com/docs/performance-entry-buffer-has-filled"), b(), a.shutdown(), clearTimeout(y), y = void 0
        };
        return window.performance.addEventListener("resourcetimingbufferfull", _),
            function () {
                clearTimeout(y), window.performance.removeEventListener("resourcetimingbufferfull", _)
            }
    };
    var o = n(r(3)),
        i = r(2);

    function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(Object(r), !0).forEach((function (t) {
                (0, o.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function u(e, t) {
        var r;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (r = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0,
                    o = function () {};
                return {
                    s: o,
                    n: function () {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, a = !0,
            s = !1;
        return {
            s: function () {
                r = e[Symbol.iterator]()
            },
            n: function () {
                var e = r.next();
                return a = e.done, e
            },
            e: function (e) {
                s = !0, i = e
            },
            f: function () {
                try {
                    a || null == r.return || r.return()
                } finally {
                    if (s) throw i
                }
            }
        }
    }

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t, r) {
        i.default._reset();
        var n = (0, a.default)(e, t, r),
            o = n.initialize,
            d = n.addInputListener,
            h = (0, s.default)(e, t, r),
            y = h.initialize,
            g = h.addScrollListener,
            v = (0, f.default)(e, t, r),
            m = v.initialize,
            b = v.captureAdoptedStyleSheets,
            w = p(p({}, r), {}, {
                addInputListener: d,
                addScrollListener: g,
                captureAdoptedStyleSheets: b
            }),
            _ = [(0, l.default)(e, t, w), o(), y(), (0, u.default)(e, t, w), (0, c.default)(e, t, w), m()];
        return function () {
            return _.forEach((function (e) {
                return e()
            }))
        }
    };
    var o = n(r(3)),
        i = n(r(14)),
        a = n(r(220)),
        s = n(r(221)),
        u = n(r(223)),
        c = n(r(225)),
        l = n(r(234)),
        f = n(r(235));

    function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? d(Object(r), !0).forEach((function (t) {
                (0, o.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = new WeakMap;

        function r(r, n) {
            var o = t.get(r);
            o && o.text === n.text && o.isChecked === n.isChecked || (t.set(r, n), e.addEvent("lr.browser.InputEvent", (function () {
                return c({
                    nodeId: a.default.getId(r)
                }, n)
            })))
        }
        var n = function (n) {
            var o = (0, s.getTargetForEvent)(n);
            if (o) {
                var u = o.tagName;
                if (u && ("INPUT" === u || "TEXTAREA" === u || "SELECT" === u)) {
                    var l = o.type && o.type.toLowerCase(),
                        f = ("radio" === l || "checkbox" === l) && !!o.checked,
                        d = a.default.getId(o);
                    if (d) {
                        var p = a.default.getIsTainted(o),
                            h = p && ("password" === l || "text" === l || "textarea" === l);
                        h && e.addRedactedInputForAudit({
                            nodeId: d,
                            name: o.name,
                            value: o.value
                        });
                        var y, g, v, m, b = h ? (0, i.sanitizeValue)(o.value, a.default.getTaintType(o)) : o.value;
                        if (!p || h && "" !== b) "change" === n.type ? (y = n, g = {
                            text: b,
                            isChecked: f
                        }, v = (0, s.getTargetForEvent)(y), m = (0, s.getNodePath)(v), t.set(v, g), e.addEvent("lr.browser.InputChangeEvent", (function () {
                            return c({
                                nodeId: a.default.getId(v),
                                nodePath: m,
                                type: v.type
                            }, g)
                        }))) : r(o, {
                            text: b,
                            isChecked: f
                        }), "radio" === l && o.name && f && [].forEach.call(document.querySelectorAll('input[type=radio][name="'.concat(o.name, '"]')), (function (e) {
                            e !== o && r(e, {
                                text: e.value,
                                isChecked: !f
                            })
                        }))
                    }
                }
            }
        };

        function o(e, r) {
            var o = Object.getOwnPropertyDescriptor(e.prototype, r);
            return Object.defineProperty(e.prototype, r, {
                    set: function (e) {
                        var r = this;
                        if (a.default.getId(r)) {
                            var i = t.get(r);
                            i && i.text === r.value.text && i.isChecked === r.value.isChecked || setTimeout((function () {
                                n({
                                    target: r
                                })
                            }))
                        }
                        return o.set.call(this, e)
                    },
                    get: function () {
                        return o.get.call(this)
                    }
                }),
                function () {
                    return Object.defineProperty(e.prototype, r, o)
                }
        }
        var u = [],
            l = function (e) {
                var t = (0, i.addListener)("change", n, e);
                u.push(t)
            },
            f = function () {
                u.forEach((function (e) {
                    return e()
                }))
            },
            d = !1;
        return {
            addInputListener: l,
            unsub: f,
            initialize: function () {
                if (!d) {
                    var e = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
                    return e && e.set && u.push(o(HTMLInputElement, "value"), o(HTMLInputElement, "checked"), o(HTMLSelectElement, "value"), o(HTMLTextAreaElement, "value")), u.push((0, i.addListener)("input", n)), l(document), d = !0, f
                }
                return function () {}
            }
        }
    };
    var o = n(r(3)),
        i = r(2),
        a = n(r(14)),
        s = r(26);

    function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? u(Object(r), !0).forEach((function (t) {
                (0, o.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = function (t) {
                var r = (0, s.getTargetForEvent)(t),
                    n = r.scrollTop,
                    o = r.scrollLeft,
                    i = a.default.getId(r);
                if (r === document) {
                    var u = document.documentElement;
                    n = (window.pageYOffset || u.scrollTop) - (u.clientTop || 0), o = (window.pageXOffset || u.scrollLeft) - (u.clientLeft || 0), e.setMaxScroll(n)
                }
                e.addEvent("lr.browser.ScrollEvent", (function () {
                    return {
                        nodeId: i,
                        top: n,
                        left: o
                    }
                }))
            },
            r = (0, o.default)(t, 100),
            n = [],
            u = function (e) {
                var t = (0, i.addListener)("scroll", r, e);
                n.push(t)
            },
            c = function () {
                n.forEach((function (e) {
                    return e()
                }))
            },
            l = !1;
        return {
            addScrollListener: u,
            unsub: c,
            initialize: function () {
                return l ? function () {} : (t({
                    target: document
                }), u(document), l = !0, c)
            }
        }
    };
    var o = n(r(222)),
        i = r(2),
        a = n(r(14)),
        s = r(26);
    e.exports = t.default
}, function (e, t, r) {
    (function (t) {
        var r = "Expected a function",
            n = /^\s+|\s+$/g,
            o = /^[-+]0x[0-9a-f]+$/i,
            i = /^0b[01]+$/i,
            a = /^0o[0-7]+$/i,
            s = parseInt,
            u = "object" == typeof t && t && t.Object === Object && t,
            c = "object" == typeof self && self && self.Object === Object && self,
            l = u || c || Function("return this")(),
            f = Object.prototype.toString,
            d = Math.max,
            p = Math.min,
            h = function () {
                return l.Date.now()
            };

        function y(e, t, n) {
            var o, i, a, s, u, c, l = 0,
                f = !1,
                y = !1,
                m = !0;
            if ("function" != typeof e) throw new TypeError(r);

            function b(t) {
                var r = o,
                    n = i;
                return o = i = void 0, l = t, s = e.apply(n, r)
            }

            function w(e) {
                return l = e, u = setTimeout(O, t), f ? b(e) : s
            }

            function _(e) {
                var r = e - c;
                return void 0 === c || r >= t || r < 0 || y && e - l >= a
            }

            function O() {
                var e = h();
                if (_(e)) return I(e);
                u = setTimeout(O, function (e) {
                    var r = t - (e - c);
                    return y ? p(r, a - (e - l)) : r
                }(e))
            }

            function I(e) {
                return u = void 0, m && o ? b(e) : (o = i = void 0, s)
            }

            function E() {
                var e = h(),
                    r = _(e);
                if (o = arguments, i = this, c = e, r) {
                    if (void 0 === u) return w(c);
                    if (y) return u = setTimeout(O, t), b(c)
                }
                return void 0 === u && (u = setTimeout(O, t)), s
            }
            return t = v(t) || 0, g(n) && (f = !!n.leading, a = (y = "maxWait" in n) ? d(v(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m), E.cancel = function () {
                void 0 !== u && clearTimeout(u), l = 0, o = c = i = u = void 0
            }, E.flush = function () {
                return void 0 === u ? s : I(h())
            }, E
        }

        function g(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function v(e) {
            if ("number" == typeof e) return e;
            if (function (e) {
                    return "symbol" == typeof e || function (e) {
                        return !!e && "object" == typeof e
                    }(e) && "[object Symbol]" == f.call(e)
                }(e)) return NaN;
            if (g(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = g(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(n, "");
            var r = i.test(e);
            return r || a.test(e) ? s(e.slice(2), r ? 2 : 8) : o.test(e) ? NaN : +e
        }
        e.exports = function (e, t, n) {
            var o = !0,
                i = !0;
            if ("function" != typeof e) throw new TypeError(r);
            return g(n) && (o = "leading" in n ? !!n.leading : o, i = "trailing" in n ? !!n.trailing : i), y(e, t, {
                leading: o,
                maxWait: t,
                trailing: i
            })
        }
    }).call(this, r(12))
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = (0, i.protectFunc)((function () {
            var t, r;
            null != window.innerWidth ? t = window.innerWidth : null != document.documentElement && null != document.documentElement.clientWidth ? t = document.documentElement.clientWidth : null != document.body && null != document.body.clientWidth && (t = document.body.clientWidth), null != window.innerHeight ? r = window.innerHeight : null != document.documentElement && null != document.documentElement.clientHeight ? r = document.documentElement.clientHeight : null != document.body && null != document.body.clientHeight && (r = document.body.clientHeight), e.addEvent("lr.browser.ViewportResizeEvent", (function () {
                return {
                    width: "string" == typeof t ? parseInt(t, 10) : t,
                    height: "string" == typeof r ? parseInt(r, 10) : r
                }
            }))
        }));
        t();
        var r = (0, o.default)(t, 200);
        return (0, i.addListener)("resize", r, window)
    };
    var o = n(r(224)),
        i = r(2);
    e.exports = t.default
}, function (e, t, r) {
    (function (t) {
        var r = /^\s+|\s+$/g,
            n = /^[-+]0x[0-9a-f]+$/i,
            o = /^0b[01]+$/i,
            i = /^0o[0-7]+$/i,
            a = parseInt,
            s = "object" == typeof t && t && t.Object === Object && t,
            u = "object" == typeof self && self && self.Object === Object && self,
            c = s || u || Function("return this")(),
            l = Object.prototype.toString,
            f = Math.max,
            d = Math.min,
            p = function () {
                return c.Date.now()
            };

        function h(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function y(e) {
            if ("number" == typeof e) return e;
            if (function (e) {
                    return "symbol" == typeof e || function (e) {
                        return !!e && "object" == typeof e
                    }(e) && "[object Symbol]" == l.call(e)
                }(e)) return NaN;
            if (h(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = h(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(r, "");
            var s = o.test(e);
            return s || i.test(e) ? a(e.slice(2), s ? 2 : 8) : n.test(e) ? NaN : +e
        }
        e.exports = function (e, t, r) {
            var n, o, i, a, s, u, c = 0,
                l = !1,
                g = !1,
                v = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");

            function m(t) {
                var r = n,
                    i = o;
                return n = o = void 0, c = t, a = e.apply(i, r)
            }

            function b(e) {
                return c = e, s = setTimeout(_, t), l ? m(e) : a
            }

            function w(e) {
                var r = e - u;
                return void 0 === u || r >= t || r < 0 || g && e - c >= i
            }

            function _() {
                var e = p();
                if (w(e)) return O(e);
                s = setTimeout(_, function (e) {
                    var r = t - (e - u);
                    return g ? d(r, i - (e - c)) : r
                }(e))
            }

            function O(e) {
                return s = void 0, v && n ? m(e) : (n = o = void 0, a)
            }

            function I() {
                var e = p(),
                    r = w(e);
                if (n = arguments, o = this, u = e, r) {
                    if (void 0 === s) return b(u);
                    if (g) return s = setTimeout(_, t), m(u)
                }
                return void 0 === s && (s = setTimeout(_, t)), a
            }
            return t = y(t) || 0, h(r) && (l = !!r.leading, i = (g = "maxWait" in r) ? f(y(r.maxWait) || 0, t) : i, v = "trailing" in r ? !!r.trailing : v), I.cancel = function () {
                void 0 !== s && clearTimeout(s), c = 0, n = u = o = s = void 0
            }, I.flush = function () {
                return void 0 === s ? a : O(p())
            }, I
        }
    }).call(this, r(12))
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = t.timeout,
            n = void 0 === r ? 1e3 : r,
            c = (0, a.default)((function (t) {
                e.addEvent("lr.browser.MouseEvent", t)
            })),
            l = null,
            f = null,
            d = null,
            p = [],
            h = function (t) {
                return (0, o.protectFunc)((function (r) {
                    var o = (0, s.getTargetForEvent)(r),
                        a = o.tagName;
                    a ? (a = a.toLowerCase(), o.id && "" !== o.id ? a += "#".concat(o.id) : o.className && "" !== o.className && (a += ".".concat(o.className))) : a = "document";
                    var c = i.default.getId(o),
                        h = i.default.getIsTainted(o),
                        y = null == r.clientX ? 0 : Math.round(r.clientX),
                        g = null == r.clientY ? 0 : Math.round(r.clientY),
                        v = (0, s.getNodePath)(o),
                        m = {
                            eventType: t,
                            nodeId: c,
                            domTarget: a,
                            button: r.button,
                            clientX: y,
                            clientY: g,
                            nodePath: v,
                            url: e.urlSanitizer(window.location.href)
                        },
                        b = !1;
                    if ("CLICK" === t) {
                        var w = Date.now();
                        (d === c || Math.abs(l - y) <= .2 * window.innerWidth && Math.abs(f - g) <= .2 * window.innerHeight) && p.push(w);
                        var _ = (p = p.slice(-3))[0];
                        3 === p.length && _ > w - n && (m.isRageClick = !0), d = c, l = y, f = g, !h && a && c && (m.text = u(o).trim().substr(0, 50).trim(), b = !0)
                    }
                    h && (m.componentTree = [], m.text = "", m.domTarget = "", m.nodePath = []), setTimeout((function () {
                        b && Array.isArray(r.__lrName) && (m.componentTree = r.__lrName), e.addEvent("lr.browser.MouseEvent", (function () {
                            return m
                        }))
                    }))
                }))
            },
            y = function (e) {
                var t = h(e);
                return (0, o.protectFunc)((function (e) {
                    if (null != e.touches) {
                        var r = e.touches.length > 0 ? e.touches[0] : e.changedTouches[0];
                        void 0 !== r ? t({
                            target: (0, s.getTargetForEvent)(e),
                            clientX: r.clientX,
                            clientY: r.clientY,
                            __lrName: e.__lrName,
                            button: 0
                        }) : (0, o.sendTelemetry)("Touch event was dispatched with empty values for evt.touches and evt.changedTouches.")
                    }
                }))
            },
            g = {
                mouseup: h("MOUSEUP"),
                mousedown: h("MOUSEDOWN"),
                mousemove: c,
                click: h("CLICK"),
                contextmenu: h("CONTEXTMENU"),
                dblclick: h("DBLCLICK"),
                focus: h("FOCUS"),
                blur: h("BLUR"),
                touchstart: y("TOUCHSTART"),
                touchmove: y("TOUCHMOVE"),
                touchend: y("TOUCHEND")
            },
            v = Object.keys(g).map((function (e) {
                return (0, o.addListener)(e, g[e])
            }));
        return function () {
            return v.forEach((function (e) {
                return e()
            }))
        }
    };
    var o = r(2),
        i = n(r(14)),
        a = n(r(226)),
        s = r(26);

    function u(e) {
        var t = i.default.getIsTainted(e),
            r = i.default.mirrorFor(e);
        if (t || !r) return "";
        if ("#text" === e.nodeName) return 0 === e.nodeValue.trim().length ? "" : e.nodeValue.replace(/\s+/g, " ");
        for (var n = "", o = e.firstChild; o; o = o.nextSibling) n += u(o);
        return n
    }
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t, r = [];
        return (0, i.default)((function (n) {
            t && clearTimeout(t), r = [].concat((0, o.default)(r), [l(n)]);
            var i = function () {
                var t = function (e) {
                    return function () {
                        var t = (0, u.default)();
                        return {
                            eventType: "MOUSEMOVE",
                            moves: e.map((function (e) {
                                return {
                                    clientX: e.clientX,
                                    clientY: e.clientY,
                                    timeOffset: c(t - e.time),
                                    nodeId: e.nodeId
                                }
                            }))
                        }
                    }
                }(r);
                e(t), r = []
            };
            r.length >= 20 && i(), t = setTimeout((function () {
                r.length > 0 && i()
            }), 50)
        }), 20, {
            trailing: !1
        })
    };
    var o = n(r(11)),
        i = n(r(67)),
        a = n(r(14)),
        s = r(26),
        u = n(r(72));

    function c(e) {
        return Math.round(1e3 * e) / 1e3
    }

    function l(e) {
        var t = (0, s.getTargetForEvent)(e);
        return {
            type: e.type.toUpperCase(),
            time: (0, u.default)(),
            clientX: Math.round(e.clientX || 0),
            clientY: Math.round(e.clientY || 0),
            nodeId: a.default.getId(t)
        }
    }
    e.exports = t.default
}, function (e, t, r) {
    var n = r(17),
        o = r(228),
        i = r(69),
        a = Math.max,
        s = Math.min;
    e.exports = function (e, t, r) {
        var u, c, l, f, d, p, h = 0,
            y = !1,
            g = !1,
            v = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function m(t) {
            var r = u,
                n = c;
            return u = c = void 0, h = t, f = e.apply(n, r)
        }

        function b(e) {
            return h = e, d = setTimeout(_, t), y ? m(e) : f
        }

        function w(e) {
            var r = e - p;
            return void 0 === p || r >= t || r < 0 || g && e - h >= l
        }

        function _() {
            var e = o();
            if (w(e)) return O(e);
            d = setTimeout(_, function (e) {
                var r = t - (e - p);
                return g ? s(r, l - (e - h)) : r
            }(e))
        }

        function O(e) {
            return d = void 0, v && u ? m(e) : (u = c = void 0, f)
        }

        function I() {
            var e = o(),
                r = w(e);
            if (u = arguments, c = this, p = e, r) {
                if (void 0 === d) return b(p);
                if (g) return clearTimeout(d), d = setTimeout(_, t), m(p)
            }
            return void 0 === d && (d = setTimeout(_, t)), f
        }
        return t = i(t) || 0, n(r) && (y = !!r.leading, l = (g = "maxWait" in r) ? a(i(r.maxWait) || 0, t) : l, v = "trailing" in r ? !!r.trailing : v), I.cancel = function () {
            void 0 !== d && clearTimeout(d), h = 0, u = p = c = d = void 0
        }, I.flush = function () {
            return void 0 === d ? f : O(o())
        }, I
    }
}, function (e, t, r) {
    var n = r(68);
    e.exports = function () {
        return n.Date.now()
    }
}, function (e, t, r) {
    (function (t) {
        var r = "object" == typeof t && t && t.Object === Object && t;
        e.exports = r
    }).call(this, r(12))
}, function (e, t, r) {
    var n = r(70),
        o = r(233);
    e.exports = function (e) {
        return "symbol" == typeof e || o(e) && "[object Symbol]" == n(e)
    }
}, function (e, t, r) {
    var n = r(71),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        s = n ? n.toStringTag : void 0;
    e.exports = function (e) {
        var t = i.call(e, s),
            r = e[s];
        try {
            e[s] = void 0;
            var n = !0
        } catch (e) {}
        var o = a.call(e);
        return n && (t ? e[s] = r : delete e[s]), o
    }
}, function (e, t) {
    var r = Object.prototype.toString;
    e.exports = function (e) {
        return r.call(e)
    }
}, function (e, t) {
    e.exports = function (e) {
        return null != e && "object" == typeof e
    }
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = t.baseHref,
            n = t.isImmediate,
            c = void 0 !== n && n,
            d = t.isEnabled,
            h = void 0 === d || d,
            v = t.textSanitizer,
            b = t.inputSanitizer,
            O = arguments.length > 2 ? arguments[2] : void 0,
            I = O.assetManager,
            E = O.addInputListener,
            S = void 0 === E ? function () {} : E,
            P = O.addScrollListener,
            x = void 0 === P ? function () {} : P,
            T = O.captureAdoptedStyleSheets;
        if (!h) return I.setDomStatus(!1),
            function () {};
        var j = [],
            k = function () {
                j.forEach((function (e) {
                    return e()
                })), j = []
            },
            N = "localhost" === window.location.hostname || "127.0.0.1" === window.location.hostname || "test" === window.location.hostname.split(".").pop() || /^file:\/\//.test(window.location.href),
            D = function () {},
            A = !1,
            R = [],
            C = (0, u.protectFunc)((function () {
                var e = R;
                R = [], e.forEach((function (e) {
                    var t = e.node;
                    return D(t)
                }))
            }));

        function L(e) {
            return e.classList && e.classList.contains("_lr-hide")
        }

        function M(e) {
            return "function" == typeof e.hasAttribute && e.hasAttribute("data-private")
        }

        function U(e) {
            return "function" == typeof e.hasAttribute && e.hasAttribute("data-public")
        }

        function F(e) {
            return e.tagName && "input" === e.tagName.toLowerCase()
        }

        function B(e) {
            return e.tagName && -1 !== ["TEXTAREA", "INPUT"].indexOf(e.tagName)
        }

        function V(e, t) {
            return /\S/.test(e.textContent) && e.nodeType === e.TEXT_NODE && -1 === ["STYLE", "SCRIPT", "TEXTAREA"].indexOf(t)
        }

        function G(e) {
            return F(e) && e.type && "password" === e.type.toLowerCase()
        }

        function H(e) {
            return F(e) && e.type && "hidden" === e.type.toLowerCase()
        }

        function q(e) {
            return (e.getAttribute("data-private") || "redact").toLowerCase()
        }

        function z(e, t) {
            var r = t && t.tagName;
            return B(e) && b || V(e, r) && v
        }

        function Y(e) {
            return L(e) ? "delete" : M(e) ? q(e) : G(e) || H(e) ? "redact" : null
        }

        function J(e) {
            return L(e) || M(e) || G(e) || H(e)
        }

        function W(e) {
            var t = M(e) && "delete" === q(e) || L(e);
            return "_lr_block_".concat(t ? "hide" : "blocked")
        }

        function X(e, t) {
            var r = e.getBoundingClientRect(),
                n = r && r.height || 0,
                o = r && r.width || 0,
                i = "width:".concat(o, "px !important;height:").concat(n, "px !important;");
            return t ? "".concat(t, ";").concat(i) : i
        }

        function $(e) {
            var t = document.createRange();
            t.selectNode(e);
            var r = t.getBoundingClientRect();
            if (r.width > 0 && r.height > 0) return {
                width: r.width,
                height: r.height
            }
        }

        function K(e, t) {
            if (v && s.default.getId(e))
                if (e.getAttribute("data-public"))
                    for (var r = [e]; r.length;) {
                        var n = r.pop(),
                            o = s.default.getId(n);
                        if (o)
                            if (n.nodeType !== n.TEXT_NODE) {
                                if (!s.default.getIsTainted(n)) {
                                    s.default.setIsWhitelisted(n, !0);
                                    for (var i = n.firstChild; i; i = i.nextSibling) r.push(i)
                                }
                            } else t[o] = {
                                textContent: n.textContent,
                                boundingRect: void 0
                            }, s.default.setIsWhitelisted(n, !0), s.default.setIsTainted(n, !1), s.default.setTaintType(n, null)
                    } else {
                        var a = s.default.mirrorFor(e);
                        if (!a || a.mParent && a.mParent.isWhitelisted) return;
                        s.default.setIsWhitelisted(e, !1);
                        for (var u = [e]; u.length;) {
                            var c = u.pop(),
                                l = s.default.getId(c);
                            if (l)
                                if (c.nodeType !== e.TEXT_NODE) {
                                    if (s.default.getIsWhitelisted(c)) {
                                        if (U(c)) continue;
                                        s.default.setIsWhitelisted(c, !1)
                                    }
                                    for (var f = c.firstChild; f; f = f.nextSibling) u.push(f)
                                } else t[l] = {
                                    boundingRect: $(c)
                                }, s.default.setIsWhitelisted(c, !1), s.default.setIsTainted(c, !0), s.default.setTaintType(c, Y(c))
                        }
                    }
        }
        var Z = r;
        if (!Z) {
            var Q = document.getElementsByTagName("base")[0];
            Z = Q ? Q.href : document.URL
        }

        function ee(t) {
            var r = t.tagName && t.tagName.toLowerCase(),
                n = s.default.mirrorFor(t.parentNode),
                o = U(t) || n && n.isWhitelisted,
                i = !o && z(t, t.parentNode),
                c = J(t) || i,
                l = c && Y(t) || null;
            switch (t.nodeType) {
            case t.DOCUMENT_TYPE_NODE:
                return {
                    isTainted: c, taintType: l, isWhitelisted: o, documentTypeInfo: {
                        name: t.name || "",
                        publicId: t.publicId || "",
                        systemId: t.systemId || ""
                    }
                };
            case t.COMMENT_NODE:
                return {
                    isTainted: c, taintType: l, isWhitelisted: o, commentInfo: {
                        textContent: c ? Array(t.textContent.length + 1).join("X") : t.textContent
                    }
                };
            case t.PROCESSING_INSTRUCTION_NODE:
            case t.CDATA_SECTION_NODE:
                return {
                    isTainted: c, taintType: l, isWhitelisted: o, textInfo: {
                        textContent: "",
                        isStyleNode: !1
                    }
                };
            case t.TEXT_NODE:
                var f, d = t.parentNode || {},
                    p = c ? (0, u.sanitizeValue)(t.textContent, l) : t.textContent;
                return "TEXTAREA" === d.tagName && n && n.isTainted && (p = (0, u.sanitizeValue)(t.textContent, Y(d))), "SCRIPT" === d.tagName && (p = ""), i && (f = $(t)), {
                    isTainted: c,
                    taintType: l,
                    isWhitelisted: o,
                    textInfo: {
                        textContent: p,
                        boundingRect: f,
                        isStyleNode: "STYLE" === d.tagName
                    }
                };
            case t.ELEMENT_NODE:
                var h = n && n.nodePath || [],
                    y = [(0, u.getNodeSelector)(t)];
                t.parentNode && t.parentNode.nodeName && "body" !== t.parentNode.nodeName.toLowerCase() && (y = y.concat(h));
                for (var v = {}, m = 0; m < t.attributes.length; m++) {
                    var b = t.attributes[m],
                        _ = b.name,
                        O = b.value;
                    w(_, r) || (v[_] = O)
                }
                var E = t.value;
                if ("input" === r && (E && (E = c ? (0, u.sanitizeValue)(E, l) : E), v.value && (v.value = c ? (0, u.sanitizeValue)(v.value, l) : v.value)), "input" === r || "select" === r) {
                    var S = t.getAttribute("type");
                    "radio" === S || "checkbox" === S ? v.defaultChecked = !!t.checked : "file" !== S && (v.defaultValue = E)
                }
                if (c) {
                    var P = W(t);
                    v.class = v.class ? "".concat(v.class, " ").concat(P) : P, "delete" !== l && (v.style = X(t, v.style)), "img" === r && "delete" !== l && (v.src = g, delete v.srcset, t.naturalWidth || t.addEventListener("load", (function () {
                        var r = s.default.getId(t);
                        r && e.addEvent("lr.browser.NodeChangeEvent", (function () {
                            return {
                                addedOrMoved: [],
                                removed: [],
                                attributes: [{
                                    nodeId: r,
                                    attributes: {
                                        style: X(t, t.getAttribute("style"))
                                    }
                                }],
                                text: [],
                                baseHref: Z,
                                version: 2
                            }
                        }))
                    })))
                } else I.maybeRecordAssetNode({
                    tagName: r,
                    attributes: v,
                    target: t
                });
                return {
                    isTainted: c, taintType: l, isWhitelisted: o, elementInfo: {
                        tagName: r,
                        attributes: v,
                        childNodes: [],
                        nodePath: y
                    }
                };
            case t.DOCUMENT_NODE:
                return t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && j.push((function () {
                    return T(t)
                })), {
                    isTainted: c,
                    taintType: l,
                    isWhitelisted: o,
                    documentInfo: {
                        childNodes: []
                    }
                };
            case t.DOCUMENT_FRAGMENT_NODE:
                var x = [{
                        nodeName: "$shadow-root"
                    }],
                    k = t.host;
                if (k && k.nodeName && "body" !== k.nodeName.toLowerCase()) {
                    var N = s.default.mirrorFor(k),
                        D = N && N.nodePath || [];
                    x = x.concat(D)
                }
                return t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && j.push((function () {
                    return T(t)
                })), {
                    isTainted: c,
                    taintType: l,
                    documentFragmentInfo: {
                        childNodes: [],
                        nodePath: x
                    }
                };
            default:
                throw console.error(t), (0, a.default)(!1, "Unknown node type: ".concat(t.nodeType)), new Error
            }
        }

        function te(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = n.shadowParent,
                a = s.default.mirrorFor(t);
            if (a) return {
                serializedNode: {
                    id: a.id
                },
                mirrorNode: a
            };
            var c = t.parentNode || o || {},
                l = c.tagName && c.tagName.toLowerCase(),
                f = t.tagName && t.tagName.toLowerCase(),
                d = "textarea" === l && !f;
            if (s.default.getIsTainted(c) && !d) return null;
            var p = ee(t),
                h = p.elementInfo && p.elementInfo.nodePath || p.documentFragmentInfo && p.documentFragmentInfo.nodePath,
                y = p.isTainted,
                g = p.isWhitelisted,
                v = p.taintType,
                m = s.default.genMirror(t, {
                    isTainted: y,
                    taintType: v,
                    isWhitelisted: g,
                    nodePath: h
                });
            if (p.id = m.id, o) {
                var b = s.default.mirrorFor(o);
                b.mShadow = m, m.mParent = b
            }
            var w = (0, u.protectFunc)((function (r) {
                try {
                    if (!t.sheet || t.sheet.disabled) return !1;
                    var n = t.sheet.rules || t.sheet.cssRules;
                    if (!n) return !1;
                    for (var o = "", a = 0; a < n.length; a++) o += n[a].cssText;
                    return e.addEvent("lr.browser.StyleContents", (function () {
                        return (0, i.default)({
                            nodeId: p.id,
                            href: t.href
                        }, r, o)
                    }), {
                        sizeOverride: o.length
                    }), !0
                } catch (e) {
                    return !1
                }
            }));
            if ("style" === f && t.sheet && j.push((function () {
                    return w("snapshot")
                })), !r && N && "link" === f && (t.sheet ? j.push((function () {
                    return w("localContents")
                })) : t.addEventListener("load", (function () {
                    return w("localContents")
                }))), t.childNodes && t.childNodes.length && (!y || "textarea" === f)) {
                var _, O;
                _ = p.documentInfo ? p.documentInfo.childNodes : p.documentFragmentInfo ? p.documentFragmentInfo.childNodes : p.elementInfo.childNodes;
                for (var I = t.firstChild; I; I = I.nextSibling) {
                    var E = te(I);
                    if (E) {
                        var S = E.serializedNode,
                            P = E.mirrorNode;
                        s.default.removeFromTree(P), I === t.lastChild && (m.mChild = P), P.mParent = m, O && (O.mNext = P, P.mPrev = O), _.push(S), O = P
                    }
                }
            }
            var x = t.shadowRoot;
            return !y && x && R.push({
                node: t
            }), {
                serializedNode: p,
                mirrorNode: m
            }
        }
        var re = te(document);
        if (!re) return I.setDomStatus(!1),
            function () {};
        I.setDomStatus(!0);
        var ne, oe = re.serializedNode;

        function ie(t) {
            var r = Math.max(0, e.wallBytes - p),
                n = Math.min(250 + Math.pow(r, 1 / 3), 1e3);
            ne = setTimeout(t, n)
        }
        e.addEvent("lr.browser.NodeInitEvent", (function () {
            return {
                rootNode: oe,
                baseHref: Z
            }
        })), k();
        var ae = [],
            se = (0, u.protectFunc)((function () {
                if (0 !== ae.length) {
                    for (var t = {}, r = {}, n = new Set, o = [], i = [], c = [], d = ae.length, p = 0; p < d; p++) {
                        var h = ae[p];
                        if (_(h)) {
                            var y = h.target,
                                b = s.default.getId(y);
                            if (b) switch (h.type) {
                            case "characterData":
                                var O = y.textContent,
                                    E = void 0;
                                if (O !== h.oldValue) {
                                    v && !s.default.getIsTainted(y) && !s.default.getIsWhitelisted(y) && V(y) && (s.default.setIsTainted(y, !0), s.default.setTaintType(y, Y(y)), E = $(y));
                                    var S = s.default.getIsTainted(y) ? (0, u.sanitizeValue)(O, s.default.getTaintType(y)) : O;
                                    t[b] = {
                                        textContent: S,
                                        boundingRect: E
                                    }
                                }
                                break;
                            case "attributes":
                                var P = y.tagName && y.tagName.toLowerCase(),
                                    x = h.attributeName;
                                if (w(x, P)) break;
                                var T = r[b] || {
                                    nodeId: b,
                                    attributes: {},
                                    removedAttributes: {}
                                };
                                if (J(y) && !s.default.getIsTainted(y)) {
                                    if (s.default.setIsTainted(y, !0), s.default.setTaintType(y, Y(y)), "delete" !== (Y(y) || null)) {
                                        var j = y.getAttribute("style");
                                        T.attributes.style = X(y, j)
                                    }
                                    if (y.shadowRoot) {
                                        var N = s.default.mirrorFor(y.shadowRoot);
                                        N && N.mParent === s.default.mirrorFor(y) && me(N)
                                    }
                                    var D, A = f(y.childNodes);
                                    try {
                                        for (A.s(); !(D = A.n()).done;) {
                                            var R = D.value,
                                                L = s.default.mirrorFor(R);
                                            L && L.mParent === s.default.mirrorFor(y) && me(L)
                                        }
                                    } catch (e) {
                                        A.e(e)
                                    } finally {
                                        A.f()
                                    }
                                }
                                var M = s.default.getIsTainted(y);
                                if (r[b] = T, y.hasAttribute(x)) {
                                    var U = y.getAttribute(x);
                                    if (U !== h.oldValue) {
                                        if (M && ("input" === P && "value" === x || m(x))) {
                                            var F = (0, u.sanitizeValue)(U, s.default.getTaintType(y));
                                            T.attributes[x] = F
                                        } else if (!M || "class" !== x && "data-private" !== x) M && "style" === x ? T.attributes.style = X(y, U) : !M || "img" !== P || "src" !== x && "srcset" !== x ? (T.attributes[x] = U, I.maybeRecordAssetAttribute({
                                            tagName: P,
                                            attrName: x,
                                            target: y
                                        }), "data-public" === x && c.push(y)) : I.maybeRecordAssetAttribute({
                                            tagName: P,
                                            attrName: x,
                                            target: y
                                        });
                                        else {
                                            var B = W(y);
                                            "img" === P && "data-private" === x && (T.attributes.src = g, y.hasAttribute("srcset") && (delete T.attributes.srcset, T.removedAttributes.srcset = !0)), T.attributes.class = "class" === x ? "".concat(U, " ").concat(B) : B
                                        }
                                        if ("class" === x || "id" === x) {
                                            var G = s.default.mirrorFor(y);
                                            if (G) {
                                                var H = G.nodePath;
                                                H && H.length > 0 && ("class" === x ? H[0].classList = U && U.split(" ") : H[0].id = U)
                                            }
                                        }
                                    }
                                } else if (!M || "class" !== x && "data-private" !== x) {
                                    if ("class" === x || "id" === x) {
                                        var q = s.default.mirrorFor(y);
                                        if (q) {
                                            var z = q.nodePath;
                                            z && z.length > 0 && ("class" === x ? z[0].classList = [] : delete z[0].id)
                                        }
                                    }
                                    "data-public" === x && c.push(y), T.removedAttributes[x] = !0
                                } else {
                                    var Q = W(y);
                                    "img" === P && "data-private" === x && (T.attributes.src = g, y.hasAttribute("srcset") && (delete T.attributes.srcset, T.removedAttributes.srcset = !0)), T.attributes.class = Q
                                }
                                break;
                            case "childList":
                                var ee, re = f(h.removedNodes);
                                try {
                                    for (re.s(); !(ee = re.n()).done;) {
                                        var ne = ee.value,
                                            oe = s.default.mirrorFor(ne);
                                        oe && oe.mParent === s.default.mirrorFor(y) && me(oe)
                                    }
                                } catch (e) {
                                    re.e(e)
                                } finally {
                                    re.f()
                                }
                                n.add(y);
                                break;
                            default:
                                (0, a.default)(!1, "Invalid record type: ".concat(h.type))
                            }
                        }
                    }
                    ae = ae.slice(d);
                    var ue = [];
                    Object.keys(r).forEach((function (e) {
                        var t = r[e],
                            n = [];
                        Object.keys(t.removedAttributes).forEach((function (e) {
                            n.push(e)
                        })), t.removedAttributes = n, (t.removedAttributes.length || Object.keys(t.attributes).length) && ue.push(t)
                    }));
                    var ce, le = f(n);
                    try {
                        for (le.s(); !(ce = le.n()).done;) {
                            var fe = ce.value,
                                de = s.default.mirrorFor(fe);
                            if (de) {
                                for (var pe = [], he = de.mChild, ye = fe.lastChild; he && ye;) {
                                    var ge = s.default.mirrorFor(ye);
                                    ge ? ge.id === he.id ? (he = he.mPrev, ye = ye.previousSibling) : (pe.push({
                                        remove: he
                                    }), he = he.mPrev) : (pe.push({
                                        insert: ye
                                    }), ye = ye.previousSibling)
                                }
                                for (; he;) pe.push({
                                    remove: he
                                }), he = he.mPrev;
                                for (; ye;) pe.push({
                                    insert: ye
                                }), ye = ye.previousSibling;
                                pe.forEach((function (e) {
                                    e.insert ? be(e.insert) : me(e.remove)
                                }))
                            }
                        }
                    } catch (e) {
                        le.e(e)
                    } finally {
                        le.f()
                    }
                    c.forEach((function (e) {
                        return K(e, t)
                    }));
                    var ve = Object.keys(t).map((function (e) {
                        return l({
                            nodeId: e
                        }, t[e])
                    }));
                    (o.length || i.length || ue.length || ve.length) && e.addEvent("lr.browser.NodeChangeEvent", (function () {
                        return {
                            addedOrMoved: o,
                            removed: i,
                            attributes: ue,
                            text: ve,
                            baseHref: Z,
                            version: 2
                        }
                    })), C(), k(), ie(se)
                } else ie(se);

                function me(e) {
                    i.push({
                        nodeId: e.id,
                        isRemoved: !0
                    }), o.push({
                        nodeData: {
                            id: e.id
                        },
                        isRemoved: !0
                    }), s.default.evictMirrorNode(e)
                }

                function be(e) {
                    var t = s.default.mirrorFor(e.parentNode),
                        r = t.id,
                        n = te(e);
                    if (n) {
                        var i, a = n.serializedNode,
                            u = n.mirrorNode;
                        if (u.mParent = t, e.parentNode.lastChild === e && (t.mChild && (t.mChild.mNext = u, u.mPrev = t.mChild), t.mChild = u), e.nextSibling) {
                            var c = s.default.mirrorFor(e.nextSibling);
                            i = c.id, c.mPrev && c.mPrev !== u && (c.mPrev.mNext = u, u.mPrev = c.mPrev), c.mPrev = u, u.mNext = c
                        }
                        o.push({
                            nodeData: a,
                            parentNodeId: r,
                            nextSiblingId: i
                        })
                    }
                }
            }));
        ie(se);
        var ue = window.Zone && "function" == typeof window.Zone.__symbol__ && window.Zone.__symbol__("MutationObserver"),
            ce = window[ue] || window._lrMutationObserver || window.MutationObserver,
            le = new ce((function (e) {
                for (var t = 0; t < e.length; t++) ae.push(e[t]);
                c && se()
            }));
        le.observe(document, {
            childList: !0,
            subtree: !0,
            characterData: !0,
            characterDataOldValue: !0,
            attributes: !0,
            attributeOldValue: !0
        });
        var fe = function () {};
        if ("function" == typeof Element.prototype.attachShadow) {
            var de = Object.getOwnPropertyDescriptor(Element.prototype, "attachShadow");
            fe = function () {
                Object.defineProperty(Element.prototype, "attachShadow", de)
            }, D = (0, u.protectFunc)((function (t) {
                var r = t.shadowRoot;
                if (Object.prototype.hasOwnProperty.call(r, y)) A || (A = !0, e._consoleLog("warn", "LogRocket: The Lightning Web Component synthetic Shadow DOM is not supported, elements will not be recorded."));
                else {
                    var n = s.default.mirrorFor(t),
                        o = s.default.mirrorFor(r);
                    if (n && !o) {
                        var i = te(r, {
                            shadowParent: t
                        });
                        if (i) {
                            try {
                                le.observe(r, {
                                    childList: !0,
                                    subtree: !0,
                                    characterData: !0,
                                    characterDataOldValue: !0,
                                    attributes: !0,
                                    attributeOldValue: !0
                                })
                            } catch (e) {
                                return
                            }
                            e.addEvent("lr.browser.ShadowInitEvent", (function () {
                                return {
                                    shadowRootNode: i.serializedNode,
                                    parentNodeId: n.id
                                }
                            })), C(), S(r), x(r)
                        }
                    }
                }
            }));
            var pe = (0, u.protectFunc)((function (e, t, r) {
                if ("open" === (0, o.default)(r, 1)[0].mode) {
                    var n = s.default.mirrorFor(e);
                    n && !n.isTainted && D(e, t)
                }
            }));
            C(), Object.defineProperty(Element.prototype, "attachShadow", {
                value: function () {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n = de.value.apply(this, t);
                    return pe(this, n, t), "[native code]", n
                },
                enumerable: !0,
                writable: !0,
                configurable: !0
            })
        }
        var he = function (t) {
            var r = t.data,
                n = t.source;
            if (r && "LR_INIT_IFRAME" === r.type) {
                var o = s.default.mirrorFor(n.frameElement);
                o && e.addEvent("lr.browser.IframeInitEvent", (function () {
                    return {
                        iframeNodeID: o.id,
                        tabID: r.tabID
                    }
                }))
            }
        };
        e._mergeIframes && window.addEventListener("message", he);
        return function () {
            le.disconnect(), fe(), clearTimeout(ne), window.removeEventListener("message", he)
        }
    }, t.GIF_PIXEL_DATA = void 0;
    var o = n(r(5)),
        i = n(r(3)),
        a = n(r(39)),
        s = n(r(14)),
        u = r(2);

    function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? c(Object(r), !0).forEach((function (t) {
                (0, i.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function f(e, t) {
        var r;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (r = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0,
                    o = function () {};
                return {
                    s: o,
                    n: function () {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, a = !0,
            s = !1;
        return {
            s: function () {
                r = e[Symbol.iterator]()
            },
            n: function () {
                var e = r.next();
                return a = e.done, e
            },
            e: function (e) {
                s = !0, i = e
            },
            f: function () {
                try {
                    a || null == r.return || r.return()
                } finally {
                    if (s) throw i
                }
            }
        }
    }

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var p = 1e7,
        h = "ng-reflect-",
        y = "$$OwnerKey$$",
        g = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

    function v() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return (0, u.startsWith)(e, h)
    }

    function m() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return "data-private" !== e && (0, u.startsWith)(e, "data-")
    }

    function b() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return "iframe" === t && "src" === e
    }

    function w() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return b(e, t) || v(e)
    }

    function _() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if ("characterData" === e.type) {
            var t = e.target && e.target.data || "",
                r = e.oldValue || "";
            if (t.trim() === r.trim()) return !1
        }
        return !0
    }
    t.GIF_PIXEL_DATA = g
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t, r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = n.rateLimitCount,
            s = void 0 === o ? 1024 : o,
            u = n.rateLimitPeriod,
            l = void 0 === u ? 1e4 : u;
        if (!window.CSSStyleSheet) return function () {};
        var f = 0,
            d = window.CSSStyleSheet.prototype;

        function p(t, n) {
            var o = t.ownerNode && t.ownerNode.__lr && t.ownerNode.__lr.id,
                i = t.__lr && t.__lr.id;
            (o || i) && (f++, e.addEvent("lr.browser.StyleChangeEvent", (function () {
                return c(c({}, n), {}, {
                    nodeId: o,
                    sheetId: i
                })
            }))), f > s && (console.warn("LogRocket: insertRule/deleteRule rate limit exceeded. Stopping style collection."), r.forEach((function (e) {
                return e()
            })))
        }
        r = [(0, i.protectFunc)((0, i.enhanceFunc)(d, "insertRule", (function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            var n = t[0],
                o = t[1];
            p(this, {
                eventType: "INSERT_RULE",
                ruleText: n,
                ruleIndex: o
            })
        }))), (0, i.protectFunc)((0, i.enhanceFunc)(d, "deleteRule", (function (e) {
            p(this, {
                eventType: "DELETE_RULE",
                ruleIndex: e
            })
        }))), function () {
            return clearTimeout(t)
        }];
        var h = 1,
            y = (0, i.protectFunc)((function (t) {
                if (t.__lr && t.__lr.id) return t.__lr && t.__lr.id;
                t.__lr = {
                    id: h++
                };
                var r = t.rules || t.cssRules;
                if (r) {
                    var n, o = "",
                        i = a(r);
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            var s = n.value;
                            o += s.cssText
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                    return e.addEvent("lr.browser.ConstructedStyleSheetEvent", (function () {
                        return {
                            sheetId: t.__lr.id,
                            sheetContents: o
                        }
                    })), t.__lr.id
                }
            })),
            g = (0, i.protectFunc)((function (t) {
                if (t && t.__lr && t.__lr.id) {
                    var r, n = t.adoptedStyleSheets,
                        o = [],
                        i = a(n);
                    try {
                        for (i.s(); !(r = i.n()).done;) {
                            var s = r.value,
                                u = y(s);
                            u && o.push(u)
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                    e.addEvent("lr.browser.AdoptedStyleSheetsEvent", (function () {
                        return {
                            nodeId: t.__lr.id,
                            sheetIds: o
                        }
                    }))
                }
            }));

        function v(e, t, n) {
            var o = Object.getOwnPropertyDescriptor(e.prototype, t);
            o && (Object.defineProperty(e.prototype, t, {
                set: function (e) {
                    var t = o.set.call(this, e);
                    return n.call(this, e), t
                },
                get: function () {
                    return o.get.call(this)
                }
            }), r.push((function () {
                return Object.defineProperty(e.prototype, t, o)
            })))
        }
        v(window.CSSStyleSheet, "disabled", (function (t) {
            var r = this;
            this.__lr && this.__lr.id && e.addEvent("lr.browser.StyleSheetDisabledEvent", (function () {
                return {
                    sheetId: r.__lr.id,
                    disabled: !!t
                }
            }))
        })), v(window.Document, "adoptedStyleSheets", (function () {
            g(this)
        })), window.ShadowRoot && v(window.ShadowRoot, "adoptedStyleSheets", (function () {
            g(this)
        }));
        var m = function e() {
            f = 0, t = setTimeout(e, l)
        };
        m();
        var b = function () {
                r.forEach((function (e) {
                    return e()
                }))
            },
            w = !1;
        return {
            captureAdoptedStyleSheets: g,
            unsub: b,
            initialize: function () {
                return w ? function () {} : (w = !0, b)
            }
        }
    };
    var o = n(r(3)),
        i = r(2);

    function a(e, t) {
        var r;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (r = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0,
                    o = function () {};
                return {
                    s: o,
                    n: function () {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, a = !0,
            u = !1;
        return {
            s: function () {
                r = e[Symbol.iterator]()
            },
            n: function () {
                var e = r.next();
                return a = e.done, e
            },
            e: function (e) {
                u = !0, i = e
            },
            f: function () {
                try {
                    a || null == r.return || r.return()
                } finally {
                    if (u) throw i
                }
            }
        }
    }

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? u(Object(r), !0).forEach((function (t) {
                (0, o.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = r.intercomDelay,
            o = void 0 === n ? 1e3 : n,
            i = r.intercomMaxAttempts,
            a = void 0 === i ? 30 : i,
            s = 0,
            u = function r() {
                "function" == typeof window.Intercom ? (window.Intercom("onShow", (function () {
                    return e.addEvent("lr.IntercomShow", (function () {
                        return {}
                    }))
                })), e._isIntercomRegistered = !0) : s++ < a && (t = setTimeout(r, o))
            };
        e._isIntercomRegistered || u();
        return function () {
            return clearTimeout(t)
        }
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = r.zendeskDelay,
            o = void 0 === n ? 1e3 : n,
            i = r.zendeskMaxAttempts,
            a = void 0 === i ? 30 : i,
            s = 0,
            u = function r() {
                "function" == typeof window.zE ? (window.zE("webWidget:on", "open", (function () {
                    e.addEvent("lr.ZendeskShow", (function () {
                        return {}
                    }))
                })), e._isZendeskRegistered = !0) : s++ < a && (t = setTimeout(r, o))
            };
        e._isZendeskRegistered || u();
        return function () {
            return clearTimeout(t)
        }
    }, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = [(0, o.default)(e), (0, i.default)(e), (0, a.default)(e)];
        return function () {
            return t.forEach((function (e) {
                return e()
            }))
        }
    };
    var o = n(r(239)),
        i = n(r(243)),
        a = n(r(244));
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        if (window.performance && window.performance.now && window.requestIdleCallback) {
            var t = new c(e);
            return function () {
                return t.stop()
            }
        }
        return function () {}
    }, t.BusyFramesTracker = void 0;
    var o = n(r(73)),
        i = n(r(242)),
        a = n(r(4)),
        s = n(r(6)),
        u = 1e3,
        c = function () {
            function e(t) {
                var r = this;
                (0, a.default)(this, e), this.nextIdle = function () {
                    if (!r.stopped) {
                        var e = window.location.href,
                            t = window.performance.now(),
                            n = t - r.startTime;
                        if (r.idleFrames++, n >= u) {
                            var o = n / 1e3,
                                i = r.idleFrames / o,
                                a = Math.max(0, Math.round(60 - i));
                            r.startTime = t, r.idleFrames = 0, a > 5 && !document.hidden && r.measurements.push({
                                busyFrames: a,
                                timestamp: Date.now()
                            })
                        }
                        var s = t - r.batchStartTime;
                        (r.measurements.length >= 10 || s >= 1e4 || e !== r.lastHref) && (r._sendLog(r.measurements, r.lastHref, s), r.measurements = [], r.batchStartTime = t, r.startTime = r.batchStartTime), r.lastHref = e, window.requestIdleCallback(r.nextIdle, {
                            timeout: u
                        })
                    }
                }, this.logger = t, this.batchStartTime = window.performance.now(), this.startTime = this.batchStartTime, this.stopped = !1, this.idleFrames = 0, this.measurements = [], this.lastHref = window.location.href, window.requestIdleCallback(this.nextIdle, {
                    timeout: u
                })
            }
            var t;
            return (0, s.default)(e, [{
                key: "stop",
                value: function () {
                    this.stopped = !0
                }
            }, {
                key: "_sendLog",
                value: (t = (0, i.default)(o.default.mark((function e(t, r, n) {
                    var i;
                    return o.default.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            t.length > 0 && (i = this.logger.urlSanitizer(r), this.logger.addEvent("lr.performance.BusyFrames", (function () {
                                return {
                                    measurements: t,
                                    elapsedTime: n,
                                    url: i
                                }
                            })));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                    }), e, this)
                }))), function (e, r, n) {
                    return t.apply(this, arguments)
                })
            }]), e
        }();
    t.BusyFramesTracker = c
}, function (e, t, r) {
    var n = function () {
            return this || "object" == typeof self && self
        }() || Function("return this")(),
        o = n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0,
        i = o && n.regeneratorRuntime;
    if (n.regeneratorRuntime = void 0, e.exports = r(241), o) n.regeneratorRuntime = i;
    else try {
        delete n.regeneratorRuntime
    } catch (e) {
        n.regeneratorRuntime = void 0
    }
}, function (e, t) {
    ! function (t) {
        "use strict";
        var r, n = Object.prototype,
            o = n.hasOwnProperty,
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            s = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag",
            c = "object" == typeof e,
            l = t.regeneratorRuntime;
        if (l) c && (e.exports = l);
        else {
            (l = t.regeneratorRuntime = c ? e.exports : {}).wrap = w;
            var f = "suspendedStart",
                d = "suspendedYield",
                p = "executing",
                h = "completed",
                y = {},
                g = {};
            g[a] = function () {
                return this
            };
            var v = Object.getPrototypeOf,
                m = v && v(v(N([])));
            m && m !== n && o.call(m, a) && (g = m);
            var b = E.prototype = O.prototype = Object.create(g);
            I.prototype = b.constructor = E, E.constructor = I, E[u] = I.displayName = "GeneratorFunction", l.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === I || "GeneratorFunction" === (t.displayName || t.name))
            }, l.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, E) : (e.__proto__ = E, u in e || (e[u] = "GeneratorFunction")), e.prototype = Object.create(b), e
            }, l.awrap = function (e) {
                return {
                    __await: e
                }
            }, S(P.prototype), P.prototype[s] = function () {
                return this
            }, l.AsyncIterator = P, l.async = function (e, t, r, n) {
                var o = new P(w(e, t, r, n));
                return l.isGeneratorFunction(t) ? o : o.next().then((function (e) {
                    return e.done ? e.value : o.next()
                }))
            }, S(b), b[u] = "Generator", b[a] = function () {
                return this
            }, b.toString = function () {
                return "[object Generator]"
            }, l.keys = function (e) {
                var t = [];
                for (var r in e) t.push(r);
                return t.reverse(),
                    function r() {
                        for (; t.length;) {
                            var n = t.pop();
                            if (n in e) return r.value = n, r.done = !1, r
                        }
                        return r.done = !0, r
                    }
            }, l.values = N, k.prototype = {
                constructor: k,
                reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(j), !e)
                        for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = r)
                },
                stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var t = this;

                    function n(n, o) {
                        return s.type = "throw", s.arg = e, t.next = n, o && (t.method = "next", t.arg = r), !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            s = a.completion;
                        if ("root" === a.tryLoc) return n("end");
                        if (a.tryLoc <= this.prev) {
                            var u = o.call(a, "catchLoc"),
                                c = o.call(a, "finallyLoc");
                            if (u && c) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function (e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var i = n;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a)
                },
                complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                },
                finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), j(r), y
                    }
                },
                catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                j(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function (e, t, n) {
                    return this.delegate = {
                        iterator: N(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = r), y
                }
            }
        }

        function w(e, t, r, n) {
            var o = t && t.prototype instanceof O ? t : O,
                i = Object.create(o.prototype),
                a = new k(n || []);
            return i._invoke = function (e, t, r) {
                var n = f;
                return function (o, i) {
                    if (n === p) throw new Error("Generator is already running");
                    if (n === h) {
                        if ("throw" === o) throw i;
                        return D()
                    }
                    for (r.method = o, r.arg = i;;) {
                        var a = r.delegate;
                        if (a) {
                            var s = x(a, r);
                            if (s) {
                                if (s === y) continue;
                                return s
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (n === f) throw n = h, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        n = p;
                        var u = _(e, t, r);
                        if ("normal" === u.type) {
                            if (n = r.done ? h : d, u.arg === y) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (n = h, r.method = "throw", r.arg = u.arg)
                    }
                }
            }(e, r, a), i
        }

        function _(e, t, r) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, r)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }

        function O() {}

        function I() {}

        function E() {}

        function S(e) {
            ["next", "throw", "return"].forEach((function (t) {
                e[t] = function (e) {
                    return this._invoke(t, e)
                }
            }))
        }

        function P(e) {
            function t(r, n, i, a) {
                var s = _(e[r], e, n);
                if ("throw" !== s.type) {
                    var u = s.arg,
                        c = u.value;
                    return c && "object" == typeof c && o.call(c, "__await") ? Promise.resolve(c.__await).then((function (e) {
                        t("next", e, i, a)
                    }), (function (e) {
                        t("throw", e, i, a)
                    })) : Promise.resolve(c).then((function (e) {
                        u.value = e, i(u)
                    }), (function (e) {
                        return t("throw", e, i, a)
                    }))
                }
                a(s.arg)
            }
            var r;
            this._invoke = function (e, n) {
                function o() {
                    return new Promise((function (r, o) {
                        t(e, n, r, o)
                    }))
                }
                return r = r ? r.then(o, o) : o()
            }
        }

        function x(e, t) {
            var n = e.iterator[t.method];
            if (n === r) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = r, x(e, t), "throw" === t.method)) return y;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return y
            }
            var o = _(n, e.iterator, t.arg);
            if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, y;
            var i = o.arg;
            return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = r), t.delegate = null, y) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, y)
        }

        function T(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function j(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function k(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(T, this), this.reset(!0)
        }

        function N(e) {
            if (e) {
                var t = e[a];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1,
                        i = function t() {
                            for (; ++n < e.length;)
                                if (o.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = r, t.done = !0, t
                        };
                    return i.next = i
                }
            }
            return {
                next: D
            }
        }

        function D() {
            return {
                value: r,
                done: !0
            }
        }
    }(function () {
        return this || "object" == typeof self && self
    }() || Function("return this")())
}, function (e, t) {
    function r(e, t, r, n, o, i, a) {
        try {
            var s = e[i](a),
                u = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(u) : Promise.resolve(u).then(n, o)
    }
    e.exports = function (e) {
        return function () {
            var t = this,
                n = arguments;
            return new Promise((function (o, i) {
                var a = e.apply(t, n);

                function s(e) {
                    r(a, o, i, s, u, "next", e)
                }

                function u(e) {
                    r(a, o, i, s, u, "throw", e)
                }
                s(void 0)
            }))
        }
    }
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        if ("function" == typeof window.PerformanceObserver) {
            var t = new s(e);
            try {
                var r = new PerformanceObserver(t.handleLongTasks);
                return r.observe({
                        entryTypes: ["longtask"]
                    }), setTimeout(t.sendTasksLoop, a),
                    function () {
                        r.disconnect(), t.stop()
                    }
            } catch (e) {
                return t.stop(),
                    function () {}
            }
        }
        return function () {}
    }, t.LongTasksTracker = void 0;
    var o = n(r(4)),
        i = n(r(6)),
        a = 1e4,
        s = function () {
            function e(t) {
                var r = this;
                (0, o.default)(this, e), this.handleLongTasks = function (e) {
                    for (var t = e.getEntries(), n = 0; n < t.length; n++) {
                        var o = t[n],
                            i = o.attribution[0];
                        o.duration >= 250 && (r._longTasksBuffer.push({
                            name: o.name,
                            startTime: o.startTime,
                            duration: o.duration,
                            attribution: [{
                                containerType: i.containerType,
                                containerName: i.containerName,
                                containerId: i.containerId,
                                containerSrc: i.containerSrc
                            }]
                        }), r._longTasksBuffer.length >= 100 && r._sendTasks())
                    }
                }, this.sendTasksLoop = function () {
                    r._stopped || (Date.now() - r._startTime >= a && r._sendTasks(), setTimeout(r.sendTasksLoop, a))
                }, this._logger = t, this._startTime = Date.now(), this._longTasksBuffer = [], this._stopped = !1
            }
            return (0, i.default)(e, [{
                key: "_sendTasks",
                value: function () {
                    var e = this;
                    this._longTasksBuffer.length > 0 && (this._logger.addEvent("lr.performance.LongTasks", (function () {
                        return {
                            longTasks: e._longTasksBuffer
                        }
                    })), this._longTasksBuffer = [], this._startTime = Date.now())
                }
            }, {
                key: "stop",
                value: function () {
                    this._stopped = !0
                }
            }]), e
        }();
    t.LongTasksTracker = s
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        if (window.performance && window.performance.memory) {
            var t = new a(e);
            return function () {
                return t.stop()
            }
        }
        return function () {}
    }, t.MemoryTracker = void 0;
    var o = n(r(4)),
        i = n(r(6)),
        a = function () {
            function e(t) {
                var r = this;
                (0, o.default)(this, e), this.measureMemory = function () {
                    if (!r._stopped) {
                        var e = window.performance.memory;
                        if (e) {
                            r._measurements.push({
                                usedHeap: e.usedJSHeapSize,
                                timestamp: Date.now()
                            });
                            var t = window.location.href;
                            (r._measurements.length >= 3 || t !== r._lastHref) && r._sendMeasurements(), r._lastHref = t, setTimeout(r.measureMemory, 1e4)
                        }
                    }
                }, this._logger = t, this._stopped = !1, this._measurements = [], this._lastHref = window.location.href, setTimeout(this.measureMemory)
            }
            return (0, i.default)(e, [{
                key: "stop",
                value: function () {
                    this._stopped = !0
                }
            }, {
                key: "_sendMeasurements",
                value: function () {
                    var e = this;
                    if (this._measurements.length > 0) {
                        var t = this._logger.urlSanitizer(this._lastHref);
                        this._logger.addEvent("lr.performance.Memory", (function () {
                            return {
                                measurements: e._measurements,
                                url: t
                            }
                        })), this._measurements = []
                    }
                }
            }]), e
        }();
    t.MemoryTracker = a
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = n(r(246)).default;
    t.default = o, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    r.r(t), r.d(t, "default", (function () {
        return i
    }));
    var n = r(82),
        o = r.n(n);

    function i() {
        return o()('!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=98)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){var n=r(65),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();e.exports=i},function(e,t,r){var n=r(84),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();e.exports=i},function(e,t){var r=Array.isArray;e.exports=r},function(e,t){var r=Array.isArray;e.exports=r},function(e,t,r){"use strict";(function(e){var n=t;function o(e,t,r){for(var n=Object.keys(t),o=0;o<n.length;++o)void 0!==e[n[o]]&&r||(e[n[o]]=t[n[o]]);return e}function i(e){function t(e,r){if(!(this instanceof t))return new t(e,r);Object.defineProperty(this,"message",{get:function(){return e}}),Error.captureStackTrace?Error.captureStackTrace(this,t):Object.defineProperty(this,"stack",{value:(new Error).stack||""}),r&&o(this,r)}return(t.prototype=Object.create(Error.prototype)).constructor=t,Object.defineProperty(t.prototype,"name",{get:function(){return e}}),t.prototype.toString=function(){return this.name+": "+this.message},t}n.asPromise=r(239),n.base64=r(240),n.EventEmitter=r(241),n.float=r(242),n.inquire=r(243),n.utf8=r(244),n.pool=r(245),n.LongBits=r(246),n.emptyArray=Object.freeze?Object.freeze([]):[],n.emptyObject=Object.freeze?Object.freeze({}):{},n.isNode=Boolean(e.process&&e.process.versions&&e.process.versions.node),n.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},n.isString=function(e){return"string"==typeof e||e instanceof String},n.isObject=function(e){return e&&"object"==typeof e},n.isset=n.isSet=function(e,t){var r=e[t];return!(null==r||!e.hasOwnProperty(t))&&("object"!=typeof r||(Array.isArray(r)?r.length:Object.keys(r).length)>0)},n.Buffer=function(){try{var e=n.inquire("buffer").Buffer;return e.prototype.utf8Write?e:null}catch(e){return null}}(),n._Buffer_from=null,n._Buffer_allocUnsafe=null,n.newBuffer=function(e){return"number"==typeof e?n.Buffer?n._Buffer_allocUnsafe(e):new n.Array(e):n.Buffer?n._Buffer_from(e):"undefined"==typeof Uint8Array?e:new Uint8Array(e)},n.Array="undefined"!=typeof Uint8Array?Uint8Array:Array,n.Long=e.dcodeIO&&e.dcodeIO.Long||n.inquire("long"),n.key2Re=/^true|false|0|1$/,n.key32Re=/^-?(?:0|[1-9][0-9]*)$/,n.key64Re=/^(?:[\\\\x00-\\\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,n.longToHash=function(e){return e?n.LongBits.from(e).toHash():n.LongBits.zeroHash},n.longFromHash=function(e,t){var r=n.LongBits.fromHash(e);return n.Long?n.Long.fromBits(r.lo,r.hi,t):r.toNumber(Boolean(t))},n.merge=o,n.lcFirst=function(e){return e.charAt(0).toLowerCase()+e.substring(1)},n.newError=i,n.ProtocolError=i("ProtocolError"),n.oneOfGetter=function(e){for(var t={},r=0;r<e.length;++r)t[e[r]]=1;return function(){for(var e=Object.keys(this),r=e.length-1;r>-1;--r)if(1===t[e[r]]&&void 0!==this[e[r]]&&null!==this[e[r]])return e[r]}},n.oneOfSetter=function(e){return function(t){for(var r=0;r<e.length;++r)e[r]!==t&&delete this[e[r]]}},n.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},n._configure=function(){var e=n.Buffer;e?(n._Buffer_from=e.from!==Uint8Array.from&&e.from||function(t,r){return new e(t,r)},n._Buffer_allocUnsafe=e.allocUnsafe||function(t){return new e(t)}):n._Buffer_from=n._Buffer_allocUnsafe=null}}).call(this,r(9))},function(e,t,r){var n=r(269),o=r(274);e.exports=function(e,t){var r=o(e,t);return n(r)?r:void 0}},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){var n=r(161),o=r(166);e.exports=function(e,t){var r=o(e,t);return n(r)?r:void 0}},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){var n=r(19),o=r(162),i=r(163),a=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,r){var n=r(25),o=r(270),i=r(271),a=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,r){"use strict";var n=r(108),o=r(0);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"enhanceFunc",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"shallowArsonify",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"shallowDearsonify",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"deepArsonify",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"deepDearsonify",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"addListener",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"protectFunc",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"findIndex",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"find",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"flatten",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"selectorMatches",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"parseSelectorForMatch",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"parseSelectorForSearch",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"caseInsensitiveQuerySelector",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"sendErrorTelemetry",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"sendTelemetry",{enumerable:!0,get:function(){return m.sendTelemetry}}),Object.defineProperty(t,"sanitizeValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"startsWith",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"endsWith",{enumerable:!0,get:function(){return I.default}}),Object.defineProperty(t,"contains",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"uuid",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"randomInt",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"getNodeSelector",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"getGraphQLOperation",{enumerable:!0,get:function(){return T.default}}),Object.defineProperty(t,"isSessionEvent",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"isActivityEvent",{enumerable:!0,get:function(){return N.default}}),Object.defineProperty(t,"parseIntFromHex",{enumerable:!0,get:function(){return E.default}}),Object.defineProperty(t,"isRecordingSampled",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"makeRecordingID",{enumerable:!0,get:function(){return D.default}}),Object.defineProperty(t,"setFromArray",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(t,"setToArray",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"applyUrlSanitizer",{enumerable:!0,get:function(){return R.default}}),Object.defineProperty(t,"getMockDeveloperUser",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"isDemoOrg",{enumerable:!0,get:function(){return L.default}}),Object.defineProperty(t,"LOG_FILTER_LABELS",{enumerable:!0,get:function(){return F.LOG_FILTER_LABELS}}),Object.defineProperty(t,"LOG_FILTER_TYPES",{enumerable:!0,get:function(){return F.LOG_FILTER_TYPES}}),Object.defineProperty(t,"LOG_TYPES",{enumerable:!0,get:function(){return F.LOG_TYPES}}),Object.defineProperty(t,"METRIC_TIMESERIES_TYPE",{enumerable:!0,get:function(){return U.METRIC_TIMESERIES_TYPE}}),Object.defineProperty(t,"HEATMAP_FOR_URL_OPERATOR",{enumerable:!0,get:function(){return U.HEATMAP_FOR_URL_OPERATOR}}),Object.defineProperty(t,"DEFAULT_HEATMAP_FOR_URL_OPERATOR",{enumerable:!0,get:function(){return U.DEFAULT_HEATMAP_FOR_URL_OPERATOR}}),Object.defineProperty(t,"ISSUE_TYPE",{enumerable:!0,get:function(){return B.ISSUE_TYPE}}),Object.defineProperty(t,"ISSUE_GROUP_TYPE",{enumerable:!0,get:function(){return B.ISSUE_GROUP_TYPE}}),Object.defineProperty(t,"findKeyFrames",{enumerable:!0,get:function(){return V.default}}),Object.defineProperty(t,"interpolate",{enumerable:!0,get:function(){return J.default}}),Object.defineProperty(t,"interpolateMobile",{enumerable:!0,get:function(){return J.interpolateMobile}}),Object.defineProperty(t,"removeOutdated",{enumerable:!0,get:function(){return z.default}}),Object.defineProperty(t,"DEMO_ORG_SLUG",{enumerable:!0,get:function(){return q.DEMO_ORG_SLUG}}),Object.defineProperty(t,"DEMO_APP_SLUG",{enumerable:!0,get:function(){return q.DEMO_APP_SLUG}}),Object.defineProperty(t,"DEMO_APP_ID",{enumerable:!0,get:function(){return q.DEMO_APP_ID}}),Object.defineProperty(t,"knownMetricTypes",{enumerable:!0,get:function(){return H.knownMetricTypes}}),Object.defineProperty(t,"DELIGHTED_RESPONSES_REGEX",{enumerable:!0,get:function(){return G.DELIGHTED_RESPONSES_REGEX}}),Object.defineProperty(t,"WOOTRIC_RESPONSES_REGEX",{enumerable:!0,get:function(){return G.WOOTRIC_RESPONSES_REGEX}});var i=o(r(109)),a=o(r(110)),s=o(r(111)),u=o(r(112)),l=o(r(117)),c=o(r(118)),f=o(r(53)),p=o(r(56)),d=o(r(120)),h=o(r(121)),y=o(r(122)),g=o(r(126)),b=o(r(127)),v=o(r(128)),m=n(r(54)),w=o(r(129)),O=o(r(57)),I=o(r(130)),x=o(r(131)),P=o(r(58)),j=o(r(132)),S=o(r(133)),T=o(r(134)),k=o(r(135)),N=o(r(136)),E=o(r(59)),_=o(r(137)),D=o(r(138)),A=o(r(139)),C=o(r(140)),R=o(r(141)),M=o(r(142)),L=o(r(143)),F=r(144),U=r(145),B=r(146),V=o(r(147)),J=n(r(230)),z=o(r(231)),q=r(60),H=r(232),G=r(233)},function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?e.exports=n=function(e){return r(e)}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)},n(t)}e.exports=n},function(e,t,r){var n=r(151),o=r(152),i=r(153),a=r(154),s=r(155);function u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=s,e.exports=u},function(e,t,r){var n=r(63);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},function(e,t,r){var n=r(1).Symbol;e.exports=n},function(e,t,r){var n=r(8)(Object,"create");e.exports=n},function(e,t,r){var n=r(175);e.exports=function(e,t){var r=e.__data__;return n(t)?r["string"==typeof t?"string":"hash"]:r.map}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){var n=r(10),o=r(11);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},function(e,t,r){var n=r(23);e.exports=function(e){if("string"==typeof e||n(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}},function(e,t,r){var n=r(2).Symbol;e.exports=n},function(e,t,r){var n=r(293),o=r(294),i=r(295),a=r(296),s=r(297);function u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=s,e.exports=u},function(e,t,r){var n=r(91);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},function(e,t,r){var n=r(6)(Object,"create");e.exports=n},function(e,t,r){var n=r(311);e.exports=function(e,t){var r=e.__data__;return n(t)?r["string"==typeof t?"string":"hash"]:r.map}},function(e,t,r){var n=r(50);e.exports=function(e){if("string"==typeof e||n(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}},function(e,t,r){var n=r(104),o=r(105),i=r(106);e.exports=function(e,t){return n(e)||o(e,t)||i()}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=r(123),o=r(124),i=r(125);e.exports=function(e){return n(e)||o(e)||i()}},function(e,t,r){var n=r(8)(r(1),"Map");e.exports=n},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,r){var n=r(167),o=r(174),i=r(176),a=r(177),s=r(178);function u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=s,e.exports=u},function(e,t){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},function(e,t,r){var n=r(3),o=r(23),i=/\\.|\\[(?:[^[\\]]*|(["\'])(?:(?!\\1)[^\\\\]|\\\\.)*?\\1)\\]/,a=/^\\w*$/;e.exports=function(e,t){if(n(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!o(e))||(a.test(e)||!i.test(e)||null!=t&&e in Object(t))}},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(236)),i={lookupType:function(e){return e.split(".").reduce((function(e,t){return e[t]}),o.default)}};t.default=i,e.exports=t.default},function(e,t,r){var n=r(41).Context,o=r(81),i=function(e,t){this.left=e,this.right=t,this.pipe="diff"};(i.prototype=new n).setResult=function(e){if(this.options.cloneDiffValues&&"object"==typeof e){var t="function"==typeof this.options.cloneDiffValues?this.options.cloneDiffValues:o;"object"==typeof e[0]&&(e[0]=t(e[0])),"object"==typeof e[1]&&(e[1]=t(e[1]))}return n.prototype.setResult.apply(this,arguments)},t.DiffContext=i},function(e,t,r){var n=r(80).Pipe,o=function(){};o.prototype.setResult=function(e){return this.result=e,this.hasResult=!0,this},o.prototype.exit=function(){return this.exiting=!0,this},o.prototype.switchTo=function(e,t){return"string"==typeof e||e instanceof n?this.nextPipe=e:(this.next=e,t&&(this.nextPipe=t)),this},o.prototype.push=function(e,t){return e.parent=this,void 0!==t&&(e.childName=t),e.root=this.root||this,e.options=e.options||this.options,this.children?(this.children[this.children.length-1].next=e,this.children.push(e)):(this.children=[e],this.nextAfterChildren=this.next||null,this.next=e),e.next=this,this},t.Context=o},function(e,t,r){var n=r(41).Context,o=function(e,t){this.left=e,this.delta=t,this.pipe="patch"};o.prototype=new n,t.PatchContext=o},function(e,t,r){var n=r(41).Context,o=function(e){this.delta=e,this.pipe="reverse"};o.prototype=new n,t.ReverseContext=o},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,r){var n=r(278),o=r(285),i=r(289);e.exports=function(e){return i(e)?n(e):o(e)}},function(e,t){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},function(e,t,r){var n=r(6)(r(2),"Map");e.exports=n},function(e,t,r){var n=r(303),o=r(310),i=r(312),a=r(313),s=r(314);function u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=s,e.exports=u},function(e,t,r){var n=r(4),o=r(50),i=/\\.|\\[(?:[^[\\]]*|(["\'])(?:(?!\\1)[^\\\\]|\\\\.)*?\\1)\\]/,a=/^\\w*$/;e.exports=function(e,t){if(n(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!o(e))||(a.test(e)||!i.test(e)||null!=t&&e in Object(t))}},function(e,t,r){var n=r(12),o=r(13);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DONE_POSTING=void 0;t.DONE_POSTING=-1},function(e,t,r){"use strict";(function(n){var o=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(16)),a=-2,s=Object.create(null),u=function(e,t){function r(r){if("function"!=typeof t[r])throw new Error("second argument to ARSON.registerType("+JSON.stringify(e)+", ...) must be an object with a "+r+" method")}r("deconstruct"),r("reconstruct"),s[e]=t},l=Object.prototype.toString;"function"==typeof n&&"function"==typeof n.isBuffer&&u("Buffer",{deconstruct:function(e){return n.isBuffer(e)&&[e.toString("base64"),"base64"]},reconstruct:function(e){return e&&n.from(e[0],e[1])}}),u("Date",{deconstruct:function(e){return"[object Date]"===l.call(e)&&[e.toJSON()]},reconstruct:function(e){return e&&new Date(e[0])}}),u("RegExp",{deconstruct:function(e){if("[object RegExp]"===l.call(e)){var t=[e.source],r="";return e.ignoreCase&&(r+="i"),e.multiline&&(r+="m"),e.global&&(r+="g"),r&&t.push(r),t}},reconstruct:function(e){return e&&new RegExp(e[0],e[1])}}),"function"==typeof Set&&"function"==typeof Array.from&&u("Set",{deconstruct:function(e){if("[object Set]"===l.call(e))return Array.from(e)},reconstruct:function(e){if(!e)return new Set;e.forEach(this.add,this)}}),"function"==typeof Map&&"function"==typeof Array.from&&u("Map",{deconstruct:function(e){if("[object Map]"===l.call(e))return Array.from(e)},reconstruct:function(e){if(!e)return new Map;e.forEach((function(e){this.set(e[0],e[1])}),this)}});var c={encode:function(e){return JSON.stringify(function(e){var t=[],r="function"==typeof Map&&new Map;function n(e){switch((0,i.default)(e)){case"undefined":return-1;case"number":if(isNaN(e))return-3;if(!isFinite(e))return e<0?-5:-4}var n;return r?void 0===(n=r.get(e))&&(n=t.push(e)-1,r.set(e,n)):(n=t.indexOf(e))<0&&(n=t.push(e)-1),n}function o(e){var t=e;if(e&&"object"===(0,i.default)(e)){var r=Object.keys(e);if(function(e){if(e&&"object"===(0,i.default)(e)){return(Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__)===Object.prototype}return!1}(e))t={};else{if(!Array.isArray(e)){for(var o in s){var a=s[o].deconstruct(e);if(a){for(l=0;l<a.length;++l)a[l]=n(a[l]);return a.unshift(o),a}}return{}.toString.call(e)}t=Array(e.length);var u=e.length;if(u>r.length)for(var l=0;l<u;++l)t[l]=-2}r.forEach((function(r){t[r]=n(e[r])}))}return t}var a=n(e);if(a<0)return a;for(var u=[],l=0;l<t.length;++l)u[l]=o(t[l]);return u}(e))},decode:function(e){return function(e){if("number"==typeof e&&e<0)return n(e);var t=new Array(e.length);function r(e){return e in t?t[e]:t[e]=n(e)}function n(t){if(t<0){if(-1===t)return;if(t===a)return;if(-3===t)return NaN;if(-4===t)return 1/0;if(-5===t)return-1/0;throw new Error("invalid ARSON index: "+t)}var n=e[t];if(n&&"object"===(0,i.default)(n)){if(Array.isArray(n)){var l=n[0];if("string"==typeof l&&l in s){var c=s[l].reconstruct,f=c();return f&&o.push({reconstruct:c,empty:f,argIndexes:n.slice(1)}),e[t]=f||c(n.slice(1).map(r))}}u.push(n)}return n}var o=[],u=[];return e.forEach((function(e,t){r(t)})),o.forEach((function(e){e.args=e.argIndexes.map(r)})),u.forEach((function(t){Object.keys(t).forEach((function(n){var o=t[n];if("number"==typeof o)if(o<0){if(o===a)return void delete t[n];t[n]=r(o)}else t[n]=e[o]}))})),o.forEach((function(e){e.reconstruct.call(e.empty,e.args)})),e[0]}(JSON.parse(e))}};t.default=c,e.exports=t.default}).call(this,r(113).Buffer)},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return function(){var r;try{r=e.apply(void 0,arguments)}catch(e){if("undefined"!=typeof window&&window._lrdebug)throw e;var n=t(e);(0,i.default)("LogRocket",e),(0,o.default)(e,n)}return r}};var o=n(r(54)),i=n(r(55));e.exports=t.default},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.sendTelemetry=function(e,t){if("undefined"!=typeof window&&window._lrdebug)return void(0,i.default)(e);if(t&&t.extra&&t.extra.appID&&"function"==typeof t.extra.appID.indexOf&&0===t.extra.appID.indexOf("au2drp/")&&Math.random()>=.25)return;l(u({message:e},t))},t.default=function(e,t){try{var r,n,o=e.message;try{r=JSON.stringify(t).slice(0,1e3)}catch(e){try{r="Could not stringify payload: ".concat(Object.prototype.toString.call(t))}catch(e){}}try{n=a.default.computeStackTrace(e).stack.map((function(e){return{filename:e.url,lineno:e.line,colno:e.column,function:e.func||"?"}}))}catch(e){}l({message:o,extra:{stringPayload:r},exception:{values:[{type:e.type,value:o,stacktrace:{frames:n}}]}})}catch(e){(0,i.default)("Failed to send",e)}};var o=n(r(7)),i=n(r(55)),a=n(r(119));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e){var t=window._lrXMLHttpRequest||XMLHttpRequest;try{var r=new t,n=e.message;r.open("POST","https://e.logrocket.com/api/3/store/?sentry_version=7&sentry_client=http%2F3.8.0&sentry_key=b64162b4187a4c5caae8a68a7e291793"),r.send(JSON.stringify(u({event_id:"",message:n,logger:"javascript",platform:"javascript",request:{headers:{"User-Agent":"undefined"!=typeof navigator&&navigator.userAgent},url:"undefined"!=typeof location&&location.href},release:"12.114.0",environment:"prod"},e)))}catch(e){(0,i.default)("Failed to send",e)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="undefined"!=typeof console&&console.error&&console.error.bind?console.error.bind(console):function(){};t.default=n,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var r=0;r<e.length;r++)if(t(e[r]))return r;return-1},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e&&t&&e.substring(r,r+t.length)===t},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.replace(/[^0-9a-f]/g,"");return parseInt("0x".concat(t),16)||0},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEMO_APP_ID=t.DEMO_APP_SLUG=t.DEMO_ORG_SLUG=void 0;var n="demo-kdz7k";t.DEMO_ORG_SLUG=n;var o="logrocket";t.DEMO_APP_SLUG=o;var i="".concat(n,"/").concat(o);t.DEMO_APP_ID=i},function(e,t,r){var n=r(148),o=r(229);e.exports=function(e,t,r){return o(e,t,n(r,2),!0)}},function(e,t,r){var n=r(17),o=r(156),i=r(157),a=r(158),s=r(159),u=r(160);function l(e){var t=this.__data__=new n(e);this.size=t.size}l.prototype.clear=o,l.prototype.delete=i,l.prototype.get=a,l.prototype.has=s,l.prototype.set=u,e.exports=l},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,r){var n=r(10),o=r(35);e.exports=function(e){if(!o(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(this,r(9))},function(e,t){var r=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return r.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},function(e,t,r){var n=r(179),o=r(11);e.exports=function e(t,r,i,a,s){return t===r||(null==t||null==r||!o(t)&&!o(r)?t!=t&&r!=r:n(t,r,i,a,e,s))}},function(e,t,r){var n=r(180),o=r(183),i=r(184);e.exports=function(e,t,r,a,s,u){var l=1&r,c=e.length,f=t.length;if(c!=f&&!(l&&f>c))return!1;var p=u.get(e),d=u.get(t);if(p&&d)return p==t&&d==e;var h=-1,y=!0,g=2&r?new n:void 0;for(u.set(e,t),u.set(t,e);++h<c;){var b=e[h],v=t[h];if(a)var m=l?a(v,b,h,t,e,u):a(b,v,h,e,t,u);if(void 0!==m){if(m)continue;y=!1;break}if(g){if(!o(t,(function(e,t){if(!i(g,t)&&(b===e||s(b,e,r,a,u)))return g.push(t)}))){y=!1;break}}else if(b!==v&&!s(b,v,r,a,u)){y=!1;break}}return u.delete(e),u.delete(t),y}},function(e,t,r){var n=r(196),o=r(203),i=r(207);e.exports=function(e){return i(e)?n(e):o(e)}},function(e,t,r){var n=r(198),o=r(11),i=Object.prototype,a=i.hasOwnProperty,s=i.propertyIsEnumerable,u=n(function(){return arguments}())?n:function(e){return o(e)&&a.call(e,"callee")&&!s.call(e,"callee")};e.exports=u},function(e,t,r){(function(e){var n=r(1),o=r(199),i=t&&!t.nodeType&&t,a=i&&"object"==typeof e&&e&&!e.nodeType&&e,s=a&&a.exports===i?n.Buffer:void 0,u=(s?s.isBuffer:void 0)||o;e.exports=u}).call(this,r(22)(e))},function(e,t){var r=/^(?:0|[1-9]\\d*)$/;e.exports=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&r.test(e))&&e>-1&&e%1==0&&e<t}},function(e,t,r){var n=r(200),o=r(201),i=r(202),a=i&&i.isTypedArray,s=a?o(a):n;e.exports=s},function(e,t,r){var n=r(35);e.exports=function(e){return e==e&&!n(e)}},function(e,t){e.exports=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}}},function(e,t,r){var n=r(77),o=r(24);e.exports=function(e,t){for(var r=0,i=(t=n(t,e)).length;null!=e&&r<i;)e=e[o(t[r++])];return r&&r==i?e:void 0}},function(e,t,r){var n=r(3),o=r(38),i=r(216),a=r(219);e.exports=function(e,t){return n(e)?e:o(e,t)?[e]:i(a(e))}},function(e,t,r){"use strict";e.exports=f;var n,o=r(5),i=o.LongBits,a=o.base64,s=o.utf8;function u(e,t,r){this.fn=e,this.len=t,this.next=void 0,this.val=r}function l(){}function c(e){this.head=e.head,this.tail=e.tail,this.len=e.len,this.next=e.states}function f(){this.len=0,this.head=new u(l,0,0),this.tail=this.head,this.states=null}function p(e,t,r){t[r]=255&e}function d(e,t){this.len=e,this.next=void 0,this.val=t}function h(e,t,r){for(;e.hi;)t[r++]=127&e.lo|128,e.lo=(e.lo>>>7|e.hi<<25)>>>0,e.hi>>>=7;for(;e.lo>127;)t[r++]=127&e.lo|128,e.lo=e.lo>>>7;t[r++]=e.lo}function y(e,t,r){t[r]=255&e,t[r+1]=e>>>8&255,t[r+2]=e>>>16&255,t[r+3]=e>>>24}f.create=o.Buffer?function(){return(f.create=function(){return new n})()}:function(){return new f},f.alloc=function(e){return new o.Array(e)},o.Array!==Array&&(f.alloc=o.pool(f.alloc,o.Array.prototype.subarray)),f.prototype._push=function(e,t,r){return this.tail=this.tail.next=new u(e,t,r),this.len+=t,this},d.prototype=Object.create(u.prototype),d.prototype.fn=function(e,t,r){for(;e>127;)t[r++]=127&e|128,e>>>=7;t[r]=e},f.prototype.uint32=function(e){return this.len+=(this.tail=this.tail.next=new d((e>>>=0)<128?1:e<16384?2:e<2097152?3:e<268435456?4:5,e)).len,this},f.prototype.int32=function(e){return e<0?this._push(h,10,i.fromNumber(e)):this.uint32(e)},f.prototype.sint32=function(e){return this.uint32((e<<1^e>>31)>>>0)},f.prototype.uint64=function(e){var t=i.from(e);return this._push(h,t.length(),t)},f.prototype.int64=f.prototype.uint64,f.prototype.sint64=function(e){var t=i.from(e).zzEncode();return this._push(h,t.length(),t)},f.prototype.bool=function(e){return this._push(p,1,e?1:0)},f.prototype.fixed32=function(e){return this._push(y,4,e>>>0)},f.prototype.sfixed32=f.prototype.fixed32,f.prototype.fixed64=function(e){var t=i.from(e);return this._push(y,4,t.lo)._push(y,4,t.hi)},f.prototype.sfixed64=f.prototype.fixed64,f.prototype.float=function(e){return this._push(o.float.writeFloatLE,4,e)},f.prototype.double=function(e){return this._push(o.float.writeDoubleLE,8,e)};var g=o.Array.prototype.set?function(e,t,r){t.set(e,r)}:function(e,t,r){for(var n=0;n<e.length;++n)t[r+n]=e[n]};f.prototype.bytes=function(e){var t=e.length>>>0;if(!t)return this._push(p,1,0);if(o.isString(e)){var r=f.alloc(t=a.length(e));a.decode(e,r,0),e=r}return this.uint32(t)._push(g,t,e)},f.prototype.string=function(e){var t=s.length(e);return t?this.uint32(t)._push(s.write,t,e):this._push(p,1,0)},f.prototype.fork=function(){return this.states=new c(this),this.head=this.tail=new u(l,0,0),this.len=0,this},f.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new u(l,0,0),this.len=0),this},f.prototype.ldelim=function(){var e=this.head,t=this.tail,r=this.len;return this.reset().uint32(r),r&&(this.tail.next=e.next,this.tail=t,this.len+=r),this},f.prototype.finish=function(){for(var e=this.head.next,t=this.constructor.alloc(this.len),r=0;e;)e.fn(e.val,t,r),r+=e.len,e=e.next;return t},f._configure=function(e){n=e}},function(e,t,r){"use strict";e.exports=u;var n,o=r(5),i=o.LongBits,a=o.utf8;function s(e,t){return RangeError("index out of range: "+e.pos+" + "+(t||1)+" > "+e.len)}function u(e){this.buf=e,this.pos=0,this.len=e.length}var l,c="undefined"!=typeof Uint8Array?function(e){if(e instanceof Uint8Array||Array.isArray(e))return new u(e);throw Error("illegal buffer")}:function(e){if(Array.isArray(e))return new u(e);throw Error("illegal buffer")};function f(){var e=new i(0,0),t=0;if(!(this.len-this.pos>4)){for(;t<3;++t){if(this.pos>=this.len)throw s(this);if(e.lo=(e.lo|(127&this.buf[this.pos])<<7*t)>>>0,this.buf[this.pos++]<128)return e}return e.lo=(e.lo|(127&this.buf[this.pos++])<<7*t)>>>0,e}for(;t<4;++t)if(e.lo=(e.lo|(127&this.buf[this.pos])<<7*t)>>>0,this.buf[this.pos++]<128)return e;if(e.lo=(e.lo|(127&this.buf[this.pos])<<28)>>>0,e.hi=(e.hi|(127&this.buf[this.pos])>>4)>>>0,this.buf[this.pos++]<128)return e;if(t=0,this.len-this.pos>4){for(;t<5;++t)if(e.hi=(e.hi|(127&this.buf[this.pos])<<7*t+3)>>>0,this.buf[this.pos++]<128)return e}else for(;t<5;++t){if(this.pos>=this.len)throw s(this);if(e.hi=(e.hi|(127&this.buf[this.pos])<<7*t+3)>>>0,this.buf[this.pos++]<128)return e}throw Error("invalid varint encoding")}function p(e,t){return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0}function d(){if(this.pos+8>this.len)throw s(this,8);return new i(p(this.buf,this.pos+=4),p(this.buf,this.pos+=4))}u.create=o.Buffer?function(e){return(u.create=function(e){return o.Buffer.isBuffer(e)?new n(e):c(e)})(e)}:c,u.prototype._slice=o.Array.prototype.subarray||o.Array.prototype.slice,u.prototype.uint32=(l=4294967295,function(){if(l=(127&this.buf[this.pos])>>>0,this.buf[this.pos++]<128)return l;if(l=(l|(127&this.buf[this.pos])<<7)>>>0,this.buf[this.pos++]<128)return l;if(l=(l|(127&this.buf[this.pos])<<14)>>>0,this.buf[this.pos++]<128)return l;if(l=(l|(127&this.buf[this.pos])<<21)>>>0,this.buf[this.pos++]<128)return l;if(l=(l|(15&this.buf[this.pos])<<28)>>>0,this.buf[this.pos++]<128)return l;if((this.pos+=5)>this.len)throw this.pos=this.len,s(this,10);return l}),u.prototype.int32=function(){return 0|this.uint32()},u.prototype.sint32=function(){var e=this.uint32();return e>>>1^-(1&e)|0},u.prototype.bool=function(){return 0!==this.uint32()},u.prototype.fixed32=function(){if(this.pos+4>this.len)throw s(this,4);return p(this.buf,this.pos+=4)},u.prototype.sfixed32=function(){if(this.pos+4>this.len)throw s(this,4);return 0|p(this.buf,this.pos+=4)},u.prototype.float=function(){if(this.pos+4>this.len)throw s(this,4);var e=o.float.readFloatLE(this.buf,this.pos);return this.pos+=4,e},u.prototype.double=function(){if(this.pos+8>this.len)throw s(this,4);var e=o.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,e},u.prototype.bytes=function(){var e=this.uint32(),t=this.pos,r=this.pos+e;if(r>this.len)throw s(this,e);return this.pos+=e,Array.isArray(this.buf)?this.buf.slice(t,r):t===r?new this.buf.constructor(0):this._slice.call(this.buf,t,r)},u.prototype.string=function(){var e=this.bytes();return a.read(e,0,e.length)},u.prototype.skip=function(e){if("number"==typeof e){if(this.pos+e>this.len)throw s(this,e);this.pos+=e}else do{if(this.pos>=this.len)throw s(this)}while(128&this.buf[this.pos++]);return this},u.prototype.skipType=function(e){switch(e){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;;){if(4==(e=7&this.uint32()))break;this.skipType(e)}break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+e+" at offset "+this.pos)}return this},u._configure=function(e){n=e;var t=o.Long?"toLong":"toNumber";o.merge(u.prototype,{int64:function(){return f.call(this)[t](!1)},uint64:function(){return f.call(this)[t](!0)},sint64:function(){return f.call(this).zzDecode()[t](!1)},fixed64:function(){return d.call(this)[t](!0)},sfixed64:function(){return d.call(this)[t](!1)}})}},function(e,t){var r=function(e){this.name=e,this.filters=[]};r.prototype.process=function(e){if(!this.processor)throw new Error("add this pipe to a processor before using it");for(var t=this.debug,r=this.filters.length,n=e,o=0;o<r;o++){var i=this.filters[o];if(t&&this.log("filter: "+i.filterName),i(n),"object"==typeof n&&n.exiting){n.exiting=!1;break}}!n.next&&this.resultCheck&&this.resultCheck(n)},r.prototype.log=function(e){console.log("[jsondiffpatch] "+this.name+" pipe, "+e)},r.prototype.append=function(){return this.filters.push.apply(this.filters,arguments),this},r.prototype.prepend=function(){return this.filters.unshift.apply(this.filters,arguments),this},r.prototype.indexOf=function(e){if(!e)throw new Error("a filter name is required");for(var t=0;t<this.filters.length;t++){if(this.filters[t].filterName===e)return t}throw new Error("filter not found: "+e)},r.prototype.list=function(){for(var e=[],t=0;t<this.filters.length;t++){var r=this.filters[t];e.push(r.filterName)}return e},r.prototype.after=function(e){var t=this.indexOf(e),r=Array.prototype.slice.call(arguments,1);if(!r.length)throw new Error("a filter is required");return r.unshift(t+1,0),Array.prototype.splice.apply(this.filters,r),this},r.prototype.before=function(e){var t=this.indexOf(e),r=Array.prototype.slice.call(arguments,1);if(!r.length)throw new Error("a filter is required");return r.unshift(t,0),Array.prototype.splice.apply(this.filters,r),this},r.prototype.clear=function(){return this.filters.length=0,this},r.prototype.shouldHaveResult=function(e){if(!1!==e){if(!this.resultCheck){var t=this;return this.resultCheck=function(e){if(!e.hasResult){console.log(e);var r=new Error(t.name+" failed");throw r.noResult=!0,r}},this}}else this.resultCheck=null},t.Pipe=r},function(e,t){var r="function"==typeof Array.isArray?Array.isArray:function(e){return e instanceof Array};e.exports=function e(t){if("object"!=typeof t)return t;if(null===t)return null;if(r(t))return t.map(e);if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return n=/^\\/(.*)\\/([gimyu]*)$/.exec(t.toString()),new RegExp(n[1],n[2]);var n,o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=e(t[i]));return o}},function(e,t){function r(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32}var n=-1;r.Diff,r.prototype.diff_main=function(e,t,r,n){void 0===n&&(n=this.Diff_Timeout<=0?Number.MAX_VALUE:(new Date).getTime()+1e3*this.Diff_Timeout);var o=n;if(null==e||null==t)throw new Error("Null input. (diff_main)");if(e==t)return e?[[0,e]]:[];void 0===r&&(r=!0);var i=r,a=this.diff_commonPrefix(e,t),s=e.substring(0,a);e=e.substring(a),t=t.substring(a),a=this.diff_commonSuffix(e,t);var u=e.substring(e.length-a);e=e.substring(0,e.length-a),t=t.substring(0,t.length-a);var l=this.diff_compute_(e,t,i,o);return s&&l.unshift([0,s]),u&&l.push([0,u]),this.diff_cleanupMerge(l),l},r.prototype.diff_compute_=function(e,t,r,o){var i;if(!e)return[[1,t]];if(!t)return[[n,e]];var a=e.length>t.length?e:t,s=e.length>t.length?t:e,u=a.indexOf(s);if(-1!=u)return i=[[1,a.substring(0,u)],[0,s],[1,a.substring(u+s.length)]],e.length>t.length&&(i[0][0]=i[2][0]=n),i;if(1==s.length)return[[n,e],[1,t]];a=s=null;var l=this.diff_halfMatch_(e,t);if(l){var c=l[0],f=l[1],p=l[2],d=l[3],h=l[4],y=this.diff_main(c,p,r,o),g=this.diff_main(f,d,r,o);return y.concat([[0,h]],g)}return r&&e.length>100&&t.length>100?this.diff_lineMode_(e,t,o):this.diff_bisect_(e,t,o)},r.prototype.diff_lineMode_=function(e,t,r){e=(f=this.diff_linesToChars_(e,t))[0],t=f[1];var o=f[2],i=this.diff_bisect_(e,t,r);this.diff_charsToLines_(i,o),this.diff_cleanupSemantic(i),i.push([0,""]);for(var a=0,s=0,u=0,l="",c="";a<i.length;){switch(i[a][0]){case 1:u++,c+=i[a][1];break;case n:s++,l+=i[a][1];break;case 0:if(s>=1&&u>=1){var f=this.diff_main(l,c,!1,r);i.splice(a-s-u,s+u),a=a-s-u;for(var p=f.length-1;p>=0;p--)i.splice(a,0,f[p]);a+=f.length}u=0,s=0,l="",c=""}a++}return i.pop(),i},r.prototype.diff_bisect_=function(e,t,r){for(var o=e.length,i=t.length,a=Math.ceil((o+i)/2),s=a,u=2*a,l=new Array(u),c=new Array(u),f=0;f<u;f++)l[f]=-1,c[f]=-1;l[s+1]=0,c[s+1]=0;for(var p=o-i,d=p%2!=0,h=0,y=0,g=0,b=0,v=0;v<a&&!((new Date).getTime()>r);v++){for(var m=-v+h;m<=v-y;m+=2){for(var w=s+m,O=(S=m==-v||m!=v&&l[w-1]<l[w+1]?l[w+1]:l[w-1]+1)-m;S<o&&O<i&&e.charAt(S)==t.charAt(O);)S++,O++;if(l[w]=S,S>o)y+=2;else if(O>i)h+=2;else if(d){if((P=s+p-m)>=0&&P<u&&-1!=c[P])if(S>=(x=o-c[P]))return this.diff_bisectSplit_(e,t,S,O,r)}}for(var I=-v+g;I<=v-b;I+=2){for(var x,P=s+I,j=(x=I==-v||I!=v&&c[P-1]<c[P+1]?c[P+1]:c[P-1]+1)-I;x<o&&j<i&&e.charAt(o-x-1)==t.charAt(i-j-1);)x++,j++;if(c[P]=x,x>o)b+=2;else if(j>i)g+=2;else if(!d){if((w=s+p-I)>=0&&w<u&&-1!=l[w]){var S;O=s+(S=l[w])-w;if(S>=(x=o-x))return this.diff_bisectSplit_(e,t,S,O,r)}}}}return[[n,e],[1,t]]},r.prototype.diff_bisectSplit_=function(e,t,r,n,o){var i=e.substring(0,r),a=t.substring(0,n),s=e.substring(r),u=t.substring(n),l=this.diff_main(i,a,!1,o),c=this.diff_main(s,u,!1,o);return l.concat(c)},r.prototype.diff_linesToChars_=function(e,t){var r=[],n={};function o(e){for(var t="",o=0,i=-1,a=r.length;i<e.length-1;){-1==(i=e.indexOf("\\n",o))&&(i=e.length-1);var s=e.substring(o,i+1);o=i+1,(n.hasOwnProperty?n.hasOwnProperty(s):void 0!==n[s])?t+=String.fromCharCode(n[s]):(t+=String.fromCharCode(a),n[s]=a,r[a++]=s)}return t}return r[0]="",[o(e),o(t),r]},r.prototype.diff_charsToLines_=function(e,t){for(var r=0;r<e.length;r++){for(var n=e[r][1],o=[],i=0;i<n.length;i++)o[i]=t[n.charCodeAt(i)];e[r][1]=o.join("")}},r.prototype.diff_commonPrefix=function(e,t){if(!e||!t||e.charAt(0)!=t.charAt(0))return 0;for(var r=0,n=Math.min(e.length,t.length),o=n,i=0;r<o;)e.substring(i,o)==t.substring(i,o)?i=r=o:n=o,o=Math.floor((n-r)/2+r);return o},r.prototype.diff_commonSuffix=function(e,t){if(!e||!t||e.charAt(e.length-1)!=t.charAt(t.length-1))return 0;for(var r=0,n=Math.min(e.length,t.length),o=n,i=0;r<o;)e.substring(e.length-o,e.length-i)==t.substring(t.length-o,t.length-i)?i=r=o:n=o,o=Math.floor((n-r)/2+r);return o},r.prototype.diff_commonOverlap_=function(e,t){var r=e.length,n=t.length;if(0==r||0==n)return 0;r>n?e=e.substring(r-n):r<n&&(t=t.substring(0,r));var o=Math.min(r,n);if(e==t)return o;for(var i=0,a=1;;){var s=e.substring(o-a),u=t.indexOf(s);if(-1==u)return i;a+=u,0!=u&&e.substring(o-a)!=t.substring(0,a)||(i=a,a++)}},r.prototype.diff_halfMatch_=function(e,t){if(this.Diff_Timeout<=0)return null;var r=e.length>t.length?e:t,n=e.length>t.length?t:e;if(r.length<4||2*n.length<r.length)return null;var o=this;function i(e,t,r){for(var n,i,a,s,u=e.substring(r,r+Math.floor(e.length/4)),l=-1,c="";-1!=(l=t.indexOf(u,l+1));){var f=o.diff_commonPrefix(e.substring(r),t.substring(l)),p=o.diff_commonSuffix(e.substring(0,r),t.substring(0,l));c.length<p+f&&(c=t.substring(l-p,l)+t.substring(l,l+f),n=e.substring(0,r-p),i=e.substring(r+f),a=t.substring(0,l-p),s=t.substring(l+f))}return 2*c.length>=e.length?[n,i,a,s,c]:null}var a,s,u,l,c,f=i(r,n,Math.ceil(r.length/4)),p=i(r,n,Math.ceil(r.length/2));return f||p?(a=p?f&&f[4].length>p[4].length?f:p:f,e.length>t.length?(s=a[0],u=a[1],l=a[2],c=a[3]):(l=a[0],c=a[1],s=a[2],u=a[3]),[s,u,l,c,a[4]]):null},r.prototype.diff_cleanupSemantic=function(e){for(var t=!1,r=[],o=0,i=null,a=0,s=0,u=0,l=0,c=0;a<e.length;)0==e[a][0]?(r[o++]=a,s=l,u=c,l=0,c=0,i=e[a][1]):(1==e[a][0]?l+=e[a][1].length:c+=e[a][1].length,null!==i&&i.length<=Math.max(s,u)&&i.length<=Math.max(l,c)&&(e.splice(r[o-1],0,[n,i]),e[r[o-1]+1][0]=1,o--,a=--o>0?r[o-1]:-1,s=0,u=0,l=0,c=0,i=null,t=!0)),a++;for(t&&this.diff_cleanupMerge(e),this.diff_cleanupSemanticLossless(e),a=1;a<e.length;){if(e[a-1][0]==n&&1==e[a][0]){var f=e[a-1][1],p=e[a][1],d=this.diff_commonOverlap_(f,p);(d>=f.length/2||d>=p.length/2)&&(e.splice(a,0,[0,p.substring(0,d)]),e[a-1][1]=f.substring(0,f.length-d),e[a+1][1]=p.substring(d),a++),a++}a++}},r.prototype.diff_cleanupSemanticLossless=function(e){var t=/[^a-zA-Z0-9]/,r=/\\s/,n=/[\\r\\n]/,o=/\\n\\r?\\n$/,i=/^\\r?\\n\\r?\\n/;function a(e,a){if(!e||!a)return 5;var s=0;return(e.charAt(e.length-1).match(t)||a.charAt(0).match(t))&&(s++,(e.charAt(e.length-1).match(r)||a.charAt(0).match(r))&&(s++,(e.charAt(e.length-1).match(n)||a.charAt(0).match(n))&&(s++,(e.match(o)||a.match(i))&&s++))),s}for(var s=1;s<e.length-1;){if(0==e[s-1][0]&&0==e[s+1][0]){var u=e[s-1][1],l=e[s][1],c=e[s+1][1],f=this.diff_commonSuffix(u,l);if(f){var p=l.substring(l.length-f);u=u.substring(0,u.length-f),l=p+l.substring(0,l.length-f),c=p+c}for(var d=u,h=l,y=c,g=a(u,l)+a(l,c);l.charAt(0)===c.charAt(0);){u+=l.charAt(0),l=l.substring(1)+c.charAt(0),c=c.substring(1);var b=a(u,l)+a(l,c);b>=g&&(g=b,d=u,h=l,y=c)}e[s-1][1]!=d&&(d?e[s-1][1]=d:(e.splice(s-1,1),s--),e[s][1]=h,y?e[s+1][1]=y:(e.splice(s+1,1),s--))}s++}},r.prototype.diff_cleanupEfficiency=function(e){for(var t=!1,r=[],o=0,i="",a=0,s=!1,u=!1,l=!1,c=!1;a<e.length;)0==e[a][0]?(e[a][1].length<this.Diff_EditCost&&(l||c)?(r[o++]=a,s=l,u=c,i=e[a][1]):(o=0,i=""),l=c=!1):(e[a][0]==n?c=!0:l=!0,i&&(s&&u&&l&&c||i.length<this.Diff_EditCost/2&&s+u+l+c==3)&&(e.splice(r[o-1],0,[n,i]),e[r[o-1]+1][0]=1,o--,i="",s&&u?(l=c=!0,o=0):(a=--o>0?r[o-1]:-1,l=c=!1),t=!0)),a++;t&&this.diff_cleanupMerge(e)},r.prototype.diff_cleanupMerge=function(e){e.push([0,""]);for(var t,r=0,o=0,i=0,a="",s="";r<e.length;)switch(e[r][0]){case 1:i++,s+=e[r][1],r++;break;case n:o++,a+=e[r][1],r++;break;case 0:o+i>1?(0!==o&&0!==i&&(0!==(t=this.diff_commonPrefix(s,a))&&(r-o-i>0&&0==e[r-o-i-1][0]?e[r-o-i-1][1]+=s.substring(0,t):(e.splice(0,0,[0,s.substring(0,t)]),r++),s=s.substring(t),a=a.substring(t)),0!==(t=this.diff_commonSuffix(s,a))&&(e[r][1]=s.substring(s.length-t)+e[r][1],s=s.substring(0,s.length-t),a=a.substring(0,a.length-t))),0===o?e.splice(r-o-i,o+i,[1,s]):0===i?e.splice(r-o-i,o+i,[n,a]):e.splice(r-o-i,o+i,[n,a],[1,s]),r=r-o-i+(o?1:0)+(i?1:0)+1):0!==r&&0==e[r-1][0]?(e[r-1][1]+=e[r][1],e.splice(r,1)):r++,i=0,o=0,a="",s=""}""===e[e.length-1][1]&&e.pop();var u=!1;for(r=1;r<e.length-1;)0==e[r-1][0]&&0==e[r+1][0]&&(e[r][1].substring(e[r][1].length-e[r-1][1].length)==e[r-1][1]?(e[r][1]=e[r-1][1]+e[r][1].substring(0,e[r][1].length-e[r-1][1].length),e[r+1][1]=e[r-1][1]+e[r+1][1],e.splice(r-1,1),u=!0):e[r][1].substring(0,e[r+1][1].length)==e[r+1][1]&&(e[r-1][1]+=e[r+1][1],e[r][1]=e[r][1].substring(e[r+1][1].length)+e[r+1][1],e.splice(r+1,1),u=!0)),r++;u&&this.diff_cleanupMerge(e)},r.prototype.diff_xIndex=function(e,t){var r,o=0,i=0,a=0,s=0;for(r=0;r<e.length&&(1!==e[r][0]&&(o+=e[r][1].length),e[r][0]!==n&&(i+=e[r][1].length),!(o>t));r++)a=o,s=i;return e.length!=r&&e[r][0]===n?s:s+(t-a)},r.prototype.diff_prettyHtml=function(e){for(var t=[],r=/&/g,o=/</g,i=/>/g,a=/\\n/g,s=0;s<e.length;s++){var u=e[s][0],l=e[s][1],c=l.replace(r,"&amp;").replace(o,"&lt;").replace(i,"&gt;").replace(a,"&para;<br>");switch(u){case 1:t[s]=\'<ins style="background:#e6ffe6;">\'+c+"</ins>";break;case n:t[s]=\'<del style="background:#ffe6e6;">\'+c+"</del>";break;case 0:t[s]="<span>"+c+"</span>"}u!==n&&l.length}return t.join("")},r.prototype.diff_text1=function(e){for(var t=[],r=0;r<e.length;r++)1!==e[r][0]&&(t[r]=e[r][1]);return t.join("")},r.prototype.diff_text2=function(e){for(var t=[],r=0;r<e.length;r++)e[r][0]!==n&&(t[r]=e[r][1]);return t.join("")},r.prototype.diff_levenshtein=function(e){for(var t=0,r=0,o=0,i=0;i<e.length;i++){var a=e[i][0],s=e[i][1];switch(a){case 1:r+=s.length;break;case n:o+=s.length;break;case 0:t+=Math.max(r,o),r=0,o=0}}return t+=Math.max(r,o)},r.prototype.diff_toDelta=function(e){for(var t=[],r=0;r<e.length;r++)switch(e[r][0]){case 1:t[r]="+"+encodeURI(e[r][1]);break;case n:t[r]="-"+e[r][1].length;break;case 0:t[r]="="+e[r][1].length}return t.join("\\t").replace(/%20/g," ")},r.prototype.diff_fromDelta=function(e,t){for(var r=[],o=0,i=0,a=t.split(/\\t/g),s=0;s<a.length;s++){var u=a[s].substring(1);switch(a[s].charAt(0)){case"+":try{r[o++]=[1,decodeURI(u)]}catch(e){throw new Error("Illegal escape in diff_fromDelta: "+u)}break;case"-":case"=":var l=parseInt(u,10);if(isNaN(l)||l<0)throw new Error("Invalid number in diff_fromDelta: "+u);var c=e.substring(i,i+=l);"="==a[s].charAt(0)?r[o++]=[0,c]:r[o++]=[n,c];break;default:if(a[s])throw new Error("Invalid diff operation in diff_fromDelta: "+a[s])}}if(i!=e.length)throw new Error("Delta length ("+i+") does not equal source text length ("+e.length+").");return r},r.prototype.match_main=function(e,t,r){if(null==e||null==t||null==r)throw new Error("Null input. (match_main)");return r=Math.max(0,Math.min(r,e.length)),e==t?0:e.length?e.substring(r,r+t.length)==t?r:this.match_bitap_(e,t,r):-1},r.prototype.match_bitap_=function(e,t,r){if(t.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var n=this.match_alphabet_(t),o=this;function i(e,n){var i=e/t.length,a=Math.abs(r-n);return o.Match_Distance?i+a/o.Match_Distance:a?1:i}var a=this.Match_Threshold,s=e.indexOf(t,r);-1!=s&&(a=Math.min(i(0,s),a),-1!=(s=e.lastIndexOf(t,r+t.length))&&(a=Math.min(i(0,s),a)));var u,l,c=1<<t.length-1;s=-1;for(var f,p=t.length+e.length,d=0;d<t.length;d++){for(u=0,l=p;u<l;)i(d,r+l)<=a?u=l:p=l,l=Math.floor((p-u)/2+u);p=l;var h=Math.max(1,r-l+1),y=Math.min(r+l,e.length)+t.length,g=Array(y+2);g[y+1]=(1<<d)-1;for(var b=y;b>=h;b--){var v=n[e.charAt(b-1)];if(g[b]=0===d?(g[b+1]<<1|1)&v:(g[b+1]<<1|1)&v|(f[b+1]|f[b])<<1|1|f[b+1],g[b]&c){var m=i(d,b-1);if(m<=a){if(a=m,!((s=b-1)>r))break;h=Math.max(1,2*r-s)}}}if(i(d+1,r)>a)break;f=g}return s},r.prototype.match_alphabet_=function(e){for(var t={},r=0;r<e.length;r++)t[e.charAt(r)]=0;for(r=0;r<e.length;r++)t[e.charAt(r)]|=1<<e.length-r-1;return t},r.prototype.patch_addContext_=function(e,t){if(0!=t.length){for(var r=t.substring(e.start2,e.start2+e.length1),n=0;t.indexOf(r)!=t.lastIndexOf(r)&&r.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)n+=this.Patch_Margin,r=t.substring(e.start2-n,e.start2+e.length1+n);n+=this.Patch_Margin;var o=t.substring(e.start2-n,e.start2);o&&e.diffs.unshift([0,o]);var i=t.substring(e.start2+e.length1,e.start2+e.length1+n);i&&e.diffs.push([0,i]),e.start1-=o.length,e.start2-=o.length,e.length1+=o.length+i.length,e.length2+=o.length+i.length}},r.prototype.patch_make=function(e,t,o){var i,a;if("string"==typeof e&&"string"==typeof t&&void 0===o)i=e,(a=this.diff_main(i,t,!0)).length>2&&(this.diff_cleanupSemantic(a),this.diff_cleanupEfficiency(a));else if(e&&"object"==typeof e&&void 0===t&&void 0===o)a=e,i=this.diff_text1(a);else if("string"==typeof e&&t&&"object"==typeof t&&void 0===o)i=e,a=t;else{if("string"!=typeof e||"string"!=typeof t||!o||"object"!=typeof o)throw new Error("Unknown call format to patch_make.");i=e,a=o}if(0===a.length)return[];for(var s=[],u=new r.patch_obj,l=0,c=0,f=0,p=i,d=i,h=0;h<a.length;h++){var y=a[h][0],g=a[h][1];switch(l||0===y||(u.start1=c,u.start2=f),y){case 1:u.diffs[l++]=a[h],u.length2+=g.length,d=d.substring(0,f)+g+d.substring(f);break;case n:u.length1+=g.length,u.diffs[l++]=a[h],d=d.substring(0,f)+d.substring(f+g.length);break;case 0:g.length<=2*this.Patch_Margin&&l&&a.length!=h+1?(u.diffs[l++]=a[h],u.length1+=g.length,u.length2+=g.length):g.length>=2*this.Patch_Margin&&l&&(this.patch_addContext_(u,p),s.push(u),u=new r.patch_obj,l=0,p=d,c=f)}1!==y&&(c+=g.length),y!==n&&(f+=g.length)}return l&&(this.patch_addContext_(u,p),s.push(u)),s},r.prototype.patch_deepCopy=function(e){for(var t=[],n=0;n<e.length;n++){var o=e[n],i=new r.patch_obj;i.diffs=[];for(var a=0;a<o.diffs.length;a++)i.diffs[a]=o.diffs[a].slice();i.start1=o.start1,i.start2=o.start2,i.length1=o.length1,i.length2=o.length2,t[n]=i}return t},r.prototype.patch_apply=function(e,t){if(0==e.length)return[t,[]];e=this.patch_deepCopy(e);var r=this.patch_addPadding(e);t=r+t+r,this.patch_splitMax(e);for(var o=0,i=[],a=0;a<e.length;a++){var s,u,l=e[a].start2+o,c=this.diff_text1(e[a].diffs),f=-1;if(c.length>this.Match_MaxBits?-1!=(s=this.match_main(t,c.substring(0,this.Match_MaxBits),l))&&(-1==(f=this.match_main(t,c.substring(c.length-this.Match_MaxBits),l+c.length-this.Match_MaxBits))||s>=f)&&(s=-1):s=this.match_main(t,c,l),-1==s)i[a]=!1,o-=e[a].length2-e[a].length1;else if(i[a]=!0,o=s-l,c==(u=-1==f?t.substring(s,s+c.length):t.substring(s,f+this.Match_MaxBits)))t=t.substring(0,s)+this.diff_text2(e[a].diffs)+t.substring(s+c.length);else{var p=this.diff_main(c,u,!1);if(c.length>this.Match_MaxBits&&this.diff_levenshtein(p)/c.length>this.Patch_DeleteThreshold)i[a]=!1;else{this.diff_cleanupSemanticLossless(p);for(var d,h=0,y=0;y<e[a].diffs.length;y++){var g=e[a].diffs[y];0!==g[0]&&(d=this.diff_xIndex(p,h)),1===g[0]?t=t.substring(0,s+d)+g[1]+t.substring(s+d):g[0]===n&&(t=t.substring(0,s+d)+t.substring(s+this.diff_xIndex(p,h+g[1].length))),g[0]!==n&&(h+=g[1].length)}}}}return[t=t.substring(r.length,t.length-r.length),i]},r.prototype.patch_addPadding=function(e){for(var t=this.Patch_Margin,r="",n=1;n<=t;n++)r+=String.fromCharCode(n);for(n=0;n<e.length;n++)e[n].start1+=t,e[n].start2+=t;var o=e[0],i=o.diffs;if(0==i.length||0!=i[0][0])i.unshift([0,r]),o.start1-=t,o.start2-=t,o.length1+=t,o.length2+=t;else if(t>i[0][1].length){var a=t-i[0][1].length;i[0][1]=r.substring(i[0][1].length)+i[0][1],o.start1-=a,o.start2-=a,o.length1+=a,o.length2+=a}if(0==(i=(o=e[e.length-1]).diffs).length||0!=i[i.length-1][0])i.push([0,r]),o.length1+=t,o.length2+=t;else if(t>i[i.length-1][1].length){a=t-i[i.length-1][1].length;i[i.length-1][1]+=r.substring(0,a),o.length1+=a,o.length2+=a}return r},r.prototype.patch_splitMax=function(e){for(var t=this.Match_MaxBits,o=0;o<e.length;o++)if(e[o].length1>t){var i=e[o];e.splice(o--,1);for(var a=i.start1,s=i.start2,u="";0!==i.diffs.length;){var l=new r.patch_obj,c=!0;for(l.start1=a-u.length,l.start2=s-u.length,""!==u&&(l.length1=l.length2=u.length,l.diffs.push([0,u]));0!==i.diffs.length&&l.length1<t-this.Patch_Margin;){var f=i.diffs[0][0],p=i.diffs[0][1];1===f?(l.length2+=p.length,s+=p.length,l.diffs.push(i.diffs.shift()),c=!1):f===n&&1==l.diffs.length&&0==l.diffs[0][0]&&p.length>2*t?(l.length1+=p.length,a+=p.length,c=!1,l.diffs.push([f,p]),i.diffs.shift()):(p=p.substring(0,t-l.length1-this.Patch_Margin),l.length1+=p.length,a+=p.length,0===f?(l.length2+=p.length,s+=p.length):c=!1,l.diffs.push([f,p]),p==i.diffs[0][1]?i.diffs.shift():i.diffs[0][1]=i.diffs[0][1].substring(p.length))}u=(u=this.diff_text2(l.diffs)).substring(u.length-this.Patch_Margin);var d=this.diff_text1(i.diffs).substring(0,this.Patch_Margin);""!==d&&(l.length1+=d.length,l.length2+=d.length,0!==l.diffs.length&&0===l.diffs[l.diffs.length-1][0]?l.diffs[l.diffs.length-1][1]+=d:l.diffs.push([0,d])),c||e.splice(++o,0,l)}}},r.prototype.patch_toText=function(e){for(var t=[],r=0;r<e.length;r++)t[r]=e[r];return t.join("")},r.prototype.patch_fromText=function(e){var t=[];if(!e)return t;for(var o=e.split("\\n"),i=0,a=/^@@ -(\\d+),?(\\d*) \\+(\\d+),?(\\d*) @@$/;i<o.length;){var s=o[i].match(a);if(!s)throw new Error("Invalid patch string: "+o[i]);var u=new r.patch_obj;for(t.push(u),u.start1=parseInt(s[1],10),""===s[2]?(u.start1--,u.length1=1):"0"==s[2]?u.length1=0:(u.start1--,u.length1=parseInt(s[2],10)),u.start2=parseInt(s[3],10),""===s[4]?(u.start2--,u.length2=1):"0"==s[4]?u.length2=0:(u.start2--,u.length2=parseInt(s[4],10)),i++;i<o.length;){var l=o[i].charAt(0);try{var c=decodeURI(o[i].substring(1))}catch(e){throw new Error("Illegal escape in patch_fromText: "+c)}if("-"==l)u.diffs.push([n,c]);else if("+"==l)u.diffs.push([1,c]);else if(" "==l)u.diffs.push([0,c]);else{if("@"==l)break;if(""!==l)throw new Error(\'Invalid patch mode "\'+l+\'" in: \'+c)}i++}}return t},r.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0},r.patch_obj.prototype.toString=function(){for(var e,t=["@@ -"+(0===this.length1?this.start1+",0":1==this.length1?this.start1+1:this.start1+1+","+this.length1)+" +"+(0===this.length2?this.start2+",0":1==this.length2?this.start2+1:this.start2+1+","+this.length2)+" @@\\n"],r=0;r<this.diffs.length;r++){switch(this.diffs[r][0]){case 1:e="+";break;case n:e="-";break;case 0:e=" "}t[r+1]=e+encodeURI(this.diffs[r][1])+"\\n"}return t.join("").replace(/%20/g," ")},this.diff_match_patch=r,this.DIFF_DELETE=n,this.DIFF_INSERT=1,this.DIFF_EQUAL=0},function(e,t,r){var n=r(12),o=r(44);e.exports=function(e){if(!o(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(this,r(9))},function(e,t){var r=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return r.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},function(e,t,r){var n=r(280),o=r(13),i=Object.prototype,a=i.hasOwnProperty,s=i.propertyIsEnumerable,u=n(function(){return arguments}())?n:function(e){return o(e)&&a.call(e,"callee")&&!s.call(e,"callee")};e.exports=u},function(e,t,r){(function(e){var n=r(2),o=r(281),i=t&&!t.nodeType&&t,a=i&&"object"==typeof e&&e&&!e.nodeType&&e,s=a&&a.exports===i?n.Buffer:void 0,u=(s?s.isBuffer:void 0)||o;e.exports=u}).call(this,r(22)(e))},function(e,t){var r=/^(?:0|[1-9]\\d*)$/;e.exports=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&r.test(e))&&e>-1&&e%1==0&&e<t}},function(e,t,r){var n=r(282),o=r(283),i=r(284),a=i&&i.isTypedArray,s=a?o(a):n;e.exports=s},function(e,t,r){var n=r(26),o=r(298),i=r(299),a=r(300),s=r(301),u=r(302);function l(e){var t=this.__data__=new n(e);this.size=t.size}l.prototype.clear=o,l.prototype.delete=i,l.prototype.get=a,l.prototype.has=s,l.prototype.set=u,e.exports=l},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,r){var n=r(315),o=r(13);e.exports=function e(t,r,i,a,s){return t===r||(null==t||null==r||!o(t)&&!o(r)?t!=t&&r!=r:n(t,r,i,a,e,s))}},function(e,t,r){var n=r(316),o=r(319),i=r(320);e.exports=function(e,t,r,a,s,u){var l=1&r,c=e.length,f=t.length;if(c!=f&&!(l&&f>c))return!1;var p=u.get(e),d=u.get(t);if(p&&d)return p==t&&d==e;var h=-1,y=!0,g=2&r?new n:void 0;for(u.set(e,t),u.set(t,e);++h<c;){var b=e[h],v=t[h];if(a)var m=l?a(v,b,h,t,e,u):a(b,v,h,e,t,u);if(void 0!==m){if(m)continue;y=!1;break}if(g){if(!o(t,(function(e,t){if(!i(g,t)&&(b===e||s(b,e,r,a,u)))return g.push(t)}))){y=!1;break}}else if(b!==v&&!s(b,v,r,a,u)){y=!1;break}}return u.delete(e),u.delete(t),y}},function(e,t,r){var n=r(44);e.exports=function(e){return e==e&&!n(e)}},function(e,t){e.exports=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}}},function(e,t,r){var n=r(97),o=r(30);e.exports=function(e,t){for(var r=0,i=(t=n(t,e)).length;null!=e&&r<i;)e=e[o(t[r++])];return r&&r==i?e:void 0}},function(e,t,r){var n=r(4),o=r(49),i=r(340),a=r(343);e.exports=function(e,t){return n(e)?e:o(e,t)?[e]:i(a(e))}},function(e,t,r){"use strict";var n=r(0),o=r(99),i=n(r(235));new o.MessageReceiver({worker:self,onReceiveFullMessage:i.default})},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MessageSender",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"MessageReceiver",{enumerable:!0,get:function(){return i.default}});var o=n(r(100)),i=n(r(234))},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(101)),i=n(r(31)),a=n(r(14)),s=n(r(32)),u=n(r(107)),l=r(51),c=r(15);function f(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=2,h=4,y=8,g=function(e,t){var r=Object.getPrototypeOf(e);return null!==r&&"function"==typeof r[t]},b=function(){function e(t){var r=t.size,n=t.start;(0,a.default)(this,e),this.i=1,this.sum=n,this.size=r,this.values=new Array(r),this.values[0]=n}return(0,s.default)(e,[{key:"add",value:function(e){var t=this.i++%this.size;this.sum-=this.values[t]||0,this.values[t]=e,this.sum+=e}},{key:"avg",value:function(){return this.sum/Math.min(this.size,this.i)}}]),e}(),v=function(){function e(t){var r=o.default.mark(p),n=t.worker;(0,a.default)(this,e),this._worker=n,this._messages=[],this._byteCache={},this._byteStreams={},this._throughput=new b({size:10,start:1e3}),this._bytes=0,this._isProcessing=!1;var s=[],u=function(){try{n.postMessage(s)}catch(o){var e,t=f(s);try{for(t.s();!(e=t.n()).done;){var r=e.value;try{n.postMessage([r])}catch(e){n.postMessage([{}.toString.call(r)])}}}catch(e){t.e(e)}finally{t.f()}}s=[]},c=this;function p(){var e;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=o.default.mark((function e(){var t,r,a,f,p,b,v,m,w,O,I,x,P,j,S;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c._messages.length){e.next=4;break}return e.next=3,-1;case 3:return e.abrupt("return","continue");case 4:t=new Map,r=[],a=0,f=function(e){var n=t.get(e);return null==n&&(n=r.length,t.set(e,n),r.push(e)),n},p=function e(t){var r;try{r={}.toString.call(t)}catch(e){return{}}switch(r){case"[object Undefined]":case"[object Null]":return t;case"[object String]":return a+=t.length*d,t;case"[object Boolean]":return a+=h,t;case"[object Number]":case"[object Date]":return a+=y,t;case"[object Error]":case"[object DOMError]":case"[object DOMException]":var n="".concat(t.constructor.name,": ").concat(t.message||t.name);return a+=n.length*d,n;case"[object Object]":if(g(t,"toJS")&&g(t,"toJSON"))return e(t.toJSON());case"[object Array Iterator]":case"[object Array]":var o=Array.isArray(t)?[]:{};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(a+=i.length*d,o[i]=f(t[i]));return o;default:return r}},b=c._messages.shift(),v=(0,i.default)(b,2),m=v[0],w=v[1],O=m.event&&m.event.type,f(m),I=a,x=0,P=r;case 14:if(!(x<P.length)){e.next=26;break}if(j=P[x],S=p(j),!(s.length&&a-I>c._throughput.avg())){e.next=22;break}return u(),e.next=21,a-I;case 21:I=a;case 22:s.push(S);case 23:x++,e.next=14;break;case 26:return c._byteCache[O].add(a),s.length>0&&u(),n.postMessage(l.DONE_POSTING),c._byteStreams[O]-=w,c._bytes-=w,e.next=33,a-I;case 33:case"end":return e.stop()}}),e)}));case 1:return t.delegateYield(e(),"t0",3);case 3:if("continue"!==t.t0){t.next=6;break}return t.abrupt("continue",1);case 6:t.next=1;break;case 8:case"end":return t.stop()}}),r)}this._doWork=p()}return(0,s.default)(e,[{key:"_processMessages",value:function(){var e=this;if(!this._isProcessing){this._isProcessing=!0;var t=(0,c.protectFunc)((function(){var r=0,n=(0,u.default)()+5;do{var o=e._doWork.next().value;if(o<0)return void(e._isProcessing=!1);r+=o}while((0,u.default)()<n);e._throughput.add(r),setTimeout(t)}));setTimeout(t)}}},{key:"postMessage",value:function(e){var t=e.event&&e.event.type;this._byteCache[t]||(this._byteCache[t]=new b({size:5,start:e.sizeOverride||0}));var r=this._byteCache[t].avg();e.sizeOverride&&(r=e.sizeOverride);var n=this._byteStreams[t]||0;return this._byteStreams[t]=n+r,this._bytes+=r,delete e.sizeOverride,this._messages.push([e,r]),this._processMessages(),[this._bytes,this._byteStreams]}}]),e}();t.default=v,e.exports=t.default},function(e,t,r){e.exports=r(102)},function(e,t,r){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r(103),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",l="object"==typeof e,c=t.regeneratorRuntime;if(c)l&&(e.exports=c);else{(c=t.regeneratorRuntime=l?e.exports:{}).wrap=w;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",y={},g={};g[a]=function(){return this};var b=Object.getPrototypeOf,v=b&&b(b(_([])));v&&v!==n&&o.call(v,a)&&(g=v);var m=P.prototype=I.prototype=Object.create(g);x.prototype=m.constructor=P,P.constructor=x,P[u]=x.displayName="GeneratorFunction",c.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},c.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,P):(e.__proto__=P,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(m),e},c.awrap=function(e){return{__await:e}},j(S.prototype),S.prototype[s]=function(){return this},c.AsyncIterator=S,c.async=function(e,t,r,n){var o=new S(w(e,t,r,n));return c.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},j(m),m[u]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},c.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},c.values=_,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return s.type="throw",s.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function w(e,t,r,n){var o=t&&t.prototype instanceof I?t:I,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(e,t,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return D()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=T(a,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=O(e,t,r);if("normal"===u.type){if(n=r.done?h:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(e,r,a),i}function O(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function I(){}function x(){}function P(){}function j(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function S(e){function t(r,n,i,a){var s=O(e[r],e,n);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then((function(e){t("next",e,i,a)}),(function(e){t("throw",e,i,a)})):Promise.resolve(l).then((function(e){u.value=e,i(u)}),(function(e){return t("throw",e,i,a)}))}a(s.arg)}var r;this._invoke=function(e,n){function o(){return new Promise((function(r,o){t(e,n,r,o)}))}return r=r?r.then(o,o):o()}}function T(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,T(e,t),"throw"===t.method))return y;t.method="throw",t.arg=new TypeError("The iterator does not provide a \'throw\' method")}return y}var o=O(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,y;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,y):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function _(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}return{next:D}}function D(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=Date.now.bind(Date),o=n(),i="undefined"!=typeof performance&&performance.now?performance.now.bind(performance):function(){return n()-o};t.default=i,e.exports=t.default},function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var n=e[t];return e[t]=function(){for(var e,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];n&&(e=n.apply(this,o));return r.apply(this,o),e},function(){e[t]=n}},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={}.toString.call(e);switch(t){case"[object Undefined]":return{undefined:{}};case"[object Null]":return{null:{}};case"[object Boolean]":return{boolean:{bool:e}};case"[object Number]":return{number:{double:e}};case"[object String]":return{string:{string:e}};case"[object Object]":return{object:{map:e}};case"[object Array]":return{array:{map:e}};case"[object Date]":return{date:{double:e.getTime()}};case"[object Error]":return{string:{string:"".concat(e.name,": ").concat(e.message)}};default:return{unsupported:{type:t}}}},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){switch(e.type||Object.keys(e)[0]){case"undefined":return;case"null":return null;case"boolean":return e.boolean.bool;case"number":return e.number.double;case"string":return e.string.string;case"object":return e.object.map;case"array":return Object.keys(e.array.map).reduce((function(t,r){return t[r]=e.array.map[r],t}),[]);case"date":return new Date(e.date.double);case"unsupported":return e.unsupported.type;default:throw new TypeError("Unexpected value in shallowDearsonify: ".concat(e))}},e.exports=t.default},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{arson:o.default.encode(e)}};var o=n(r(52));e.exports=t.default},function(e,t,r){"use strict";(function(e){\n/*!\n * The buffer module from node.js, for the browser.\n *\n * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>\n * @license  MIT\n */\nvar n=r(114),o=r(115),i=r(116);function a(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(e,t){if(a()<t)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=u.prototype:(null===e&&(e=new u(t)),e.length=t),e}function u(e,t,r){if(!(u.TYPED_ARRAY_SUPPORT||this instanceof u))return new u(e,t,r);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return f(this,e)}return l(this,e,t,r)}function l(e,t,r,n){if("number"==typeof t)throw new TypeError(\'"value" argument must not be a number\');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,r,n){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("\'offset\' is out of bounds");if(t.byteLength<r+(n||0))throw new RangeError("\'length\' is out of bounds");t=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n);u.TYPED_ARRAY_SUPPORT?(e=t).__proto__=u.prototype:e=p(e,t);return e}(e,t,r,n):"string"==typeof t?function(e,t,r){"string"==typeof r&&""!==r||(r="utf8");if(!u.isEncoding(r))throw new TypeError(\'"encoding" must be a valid string encoding\');var n=0|h(t,r),o=(e=s(e,n)).write(t,r);o!==n&&(e=e.slice(0,o));return e}(e,t,r):function(e,t){if(u.isBuffer(t)){var r=0|d(t.length);return 0===(e=s(e,r)).length||t.copy(e,0,0,r),e}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(n=t.length)!=n?s(e,0):p(e,t);if("Buffer"===t.type&&i(t.data))return p(e,t.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function c(e){if("number"!=typeof e)throw new TypeError(\'"size" argument must be a number\');if(e<0)throw new RangeError(\'"size" argument must not be negative\')}function f(e,t){if(c(t),e=s(e,t<0?0:0|d(t)),!u.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function p(e,t){var r=t.length<0?0:0|d(t.length);e=s(e,r);for(var n=0;n<r;n+=1)e[n]=255&t[n];return e}function d(e){if(e>=a())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes");return 0|e}function h(e,t){if(u.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return V(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return J(e).length;default:if(n)return V(e).length;t=(""+t).toLowerCase(),n=!0}}function y(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return E(this,t,r);case"utf8":case"utf-8":return S(this,t,r);case"ascii":return k(this,t,r);case"latin1":case"binary":return N(this,t,r);case"base64":return j(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function g(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function b(e,t,r,n,o){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return-1;r=e.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof t&&(t=u.from(t,n)),u.isBuffer(t))return 0===t.length?-1:v(e,t,r,n,o);if("number"==typeof t)return t&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):v(e,[t],r,n,o);throw new TypeError("val must be string, number or Buffer")}function v(e,t,r,n,o){var i,a=1,s=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;a=2,s/=2,u/=2,r/=2}function l(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(o){var c=-1;for(i=r;i<s;i++)if(l(e,i)===l(t,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===u)return c*a}else-1!==c&&(i-=i-c),c=-1}else for(r+u>s&&(r=s-u),i=r;i>=0;i--){for(var f=!0,p=0;p<u;p++)if(l(e,i+p)!==l(t,p)){f=!1;break}if(f)return i}return-1}function m(e,t,r,n){r=Number(r)||0;var o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=t.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var a=0;a<n;++a){var s=parseInt(t.substr(2*a,2),16);if(isNaN(s))return a;e[r+a]=s}return a}function w(e,t,r,n){return z(V(t,e.length-r),e,r,n)}function O(e,t,r,n){return z(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function I(e,t,r,n){return O(e,t,r,n)}function x(e,t,r,n){return z(J(t),e,r,n)}function P(e,t,r,n){return z(function(e,t){for(var r,n,o,i=[],a=0;a<e.length&&!((t-=2)<0);++a)n=(r=e.charCodeAt(a))>>8,o=r%256,i.push(o),i.push(n);return i}(t,e.length-r),e,r,n)}function j(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function S(e,t,r){r=Math.min(e.length,r);for(var n=[],o=t;o<r;){var i,a,s,u,l=e[o],c=null,f=l>239?4:l>223?3:l>191?2:1;if(o+f<=r)switch(f){case 1:l<128&&(c=l);break;case 2:128==(192&(i=e[o+1]))&&(u=(31&l)<<6|63&i)>127&&(c=u);break;case 3:i=e[o+1],a=e[o+2],128==(192&i)&&128==(192&a)&&(u=(15&l)<<12|(63&i)<<6|63&a)>2047&&(u<55296||u>57343)&&(c=u);break;case 4:i=e[o+1],a=e[o+2],s=e[o+3],128==(192&i)&&128==(192&a)&&128==(192&s)&&(u=(15&l)<<18|(63&i)<<12|(63&a)<<6|63&s)>65535&&u<1114112&&(c=u)}null===c?(c=65533,f=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),o+=f}return function(e){var t=e.length;if(t<=T)return String.fromCharCode.apply(String,e);var r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=T));return r}(n)}t.Buffer=u,t.SlowBuffer=function(e){+e!=e&&(e=0);return u.alloc(+e)},t.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),t.kMaxLength=a(),u.poolSize=8192,u._augment=function(e){return e.__proto__=u.prototype,e},u.from=function(e,t,r){return l(null,e,t,r)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(e,t,r){return function(e,t,r,n){return c(t),t<=0?s(e,t):void 0!==r?"string"==typeof n?s(e,t).fill(r,n):s(e,t).fill(r):s(e,t)}(null,e,t,r)},u.allocUnsafe=function(e){return f(null,e)},u.allocUnsafeSlow=function(e){return f(null,e)},u.isBuffer=function(e){return!(null==e||!e._isBuffer)},u.compare=function(e,t){if(!u.isBuffer(e)||!u.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,n=t.length,o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},u.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(e,t){if(!i(e))throw new TypeError(\'"list" argument must be an Array of Buffers\');if(0===e.length)return u.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=u.allocUnsafe(t),o=0;for(r=0;r<e.length;++r){var a=e[r];if(!u.isBuffer(a))throw new TypeError(\'"list" argument must be an Array of Buffers\');a.copy(n,o),o+=a.length}return n},u.byteLength=h,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)g(this,t,t+1);return this},u.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},u.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},u.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?S(this,0,e):y.apply(this,arguments)},u.prototype.equals=function(e){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===u.compare(this,e)},u.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(e+=" ... ")),"<Buffer "+e+">"},u.prototype.compare=function(e,t,r,n,o){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return-1;if(t>=r)return 1;if(this===e)return 0;for(var i=(o>>>=0)-(n>>>=0),a=(r>>>=0)-(t>>>=0),s=Math.min(i,a),l=this.slice(n,o),c=e.slice(t,r),f=0;f<s;++f)if(l[f]!==c[f]){i=l[f],a=c[f];break}return i<a?-1:a<i?1:0},u.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},u.prototype.indexOf=function(e,t,r){return b(this,e,t,r,!0)},u.prototype.lastIndexOf=function(e,t,r){return b(this,e,t,r,!1)},u.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-t;if((void 0===r||r>o)&&(r=o),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return m(this,e,t,r);case"utf8":case"utf-8":return w(this,e,t,r);case"ascii":return O(this,e,t,r);case"latin1":case"binary":return I(this,e,t,r);case"base64":return x(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var T=4096;function k(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}function N(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}function E(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=t;i<r;++i)o+=B(e[i]);return o}function _(e,t,r){for(var n=e.slice(t,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function D(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function A(e,t,r,n,o,i){if(!u.isBuffer(e))throw new TypeError(\'"buffer" argument must be a Buffer instance\');if(t>o||t<i)throw new RangeError(\'"value" argument is out of bounds\');if(r+n>e.length)throw new RangeError("Index out of range")}function C(e,t,r,n){t<0&&(t=65535+t+1);for(var o=0,i=Math.min(e.length-r,2);o<i;++o)e[r+o]=(t&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function R(e,t,r,n){t<0&&(t=4294967295+t+1);for(var o=0,i=Math.min(e.length-r,4);o<i;++o)e[r+o]=t>>>8*(n?o:3-o)&255}function M(e,t,r,n,o,i){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function L(e,t,r,n,i){return i||M(e,0,r,4),o.write(e,t,r,n,23,4),r+4}function F(e,t,r,n,i){return i||M(e,0,r,8),o.write(e,t,r,n,52,8),r+8}u.prototype.slice=function(e,t){var r,n=this.length;if((e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e),u.TYPED_ARRAY_SUPPORT)(r=this.subarray(e,t)).__proto__=u.prototype;else{var o=t-e;r=new u(o,void 0);for(var i=0;i<o;++i)r[i]=this[i+e]}return r},u.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||D(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n},u.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||D(e,t,this.length);for(var n=this[e+--t],o=1;t>0&&(o*=256);)n+=this[e+--t]*o;return n},u.prototype.readUInt8=function(e,t){return t||D(e,1,this.length),this[e]},u.prototype.readUInt16LE=function(e,t){return t||D(e,2,this.length),this[e]|this[e+1]<<8},u.prototype.readUInt16BE=function(e,t){return t||D(e,2,this.length),this[e]<<8|this[e+1]},u.prototype.readUInt32LE=function(e,t){return t||D(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},u.prototype.readUInt32BE=function(e,t){return t||D(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},u.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||D(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*t)),n},u.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||D(e,t,this.length);for(var n=t,o=1,i=this[e+--n];n>0&&(o*=256);)i+=this[e+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*t)),i},u.prototype.readInt8=function(e,t){return t||D(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},u.prototype.readInt16LE=function(e,t){t||D(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt16BE=function(e,t){t||D(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt32LE=function(e,t){return t||D(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},u.prototype.readInt32BE=function(e,t){return t||D(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},u.prototype.readFloatLE=function(e,t){return t||D(e,4,this.length),o.read(this,e,!0,23,4)},u.prototype.readFloatBE=function(e,t){return t||D(e,4,this.length),o.read(this,e,!1,23,4)},u.prototype.readDoubleLE=function(e,t){return t||D(e,8,this.length),o.read(this,e,!0,52,8)},u.prototype.readDoubleBE=function(e,t){return t||D(e,8,this.length),o.read(this,e,!1,52,8)},u.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t|=0,r|=0,n)||A(this,e,t,r,Math.pow(2,8*r)-1,0);var o=1,i=0;for(this[t]=255&e;++i<r&&(o*=256);)this[t+i]=e/o&255;return t+r},u.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t|=0,r|=0,n)||A(this,e,t,r,Math.pow(2,8*r)-1,0);var o=r-1,i=1;for(this[t+o]=255&e;--o>=0&&(i*=256);)this[t+o]=e/i&255;return t+r},u.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||A(this,e,t,1,255,0),u.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},u.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||A(this,e,t,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):C(this,e,t,!0),t+2},u.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||A(this,e,t,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):C(this,e,t,!1),t+2},u.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||A(this,e,t,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):R(this,e,t,!0),t+4},u.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||A(this,e,t,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):R(this,e,t,!1),t+4},u.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t|=0,!n){var o=Math.pow(2,8*r-1);A(this,e,t,r,o-1,-o)}var i=0,a=1,s=0;for(this[t]=255&e;++i<r&&(a*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/a>>0)-s&255;return t+r},u.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t|=0,!n){var o=Math.pow(2,8*r-1);A(this,e,t,r,o-1,-o)}var i=r-1,a=1,s=0;for(this[t+i]=255&e;--i>=0&&(a*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/a>>0)-s&255;return t+r},u.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||A(this,e,t,1,127,-128),u.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},u.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||A(this,e,t,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):C(this,e,t,!0),t+2},u.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||A(this,e,t,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):C(this,e,t,!1),t+2},u.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||A(this,e,t,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):R(this,e,t,!0),t+4},u.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||A(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):R(this,e,t,!1),t+4},u.prototype.writeFloatLE=function(e,t,r){return L(this,e,t,!0,r)},u.prototype.writeFloatBE=function(e,t,r){return L(this,e,t,!1,r)},u.prototype.writeDoubleLE=function(e,t,r){return F(this,e,t,!0,r)},u.prototype.writeDoubleBE=function(e,t,r){return F(this,e,t,!1,r)},u.prototype.copy=function(e,t,r,n){if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var o,i=n-r;if(this===e&&r<t&&t<n)for(o=i-1;o>=0;--o)e[o+t]=this[o+r];else if(i<1e3||!u.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)e[o+t]=this[o+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+i),t);return i},u.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===e.length){var o=e.charCodeAt(0);o<256&&(e=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!u.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var i;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{var a=u.isBuffer(e)?e:V(new u(e,n).toString()),s=a.length;for(i=0;i<r-t;++i)this[i+t]=a[i%s]}return this};var U=/[^+\\/0-9A-Za-z-_]/g;function B(e){return e<16?"0"+e.toString(16):e.toString(16)}function V(e,t){var r;t=t||1/0;for(var n=e.length,o=null,i=[],a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!o){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(a+1===n){(t-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function J(e){return n.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\\s+|\\s+$/g,"")}(e).replace(U,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function z(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length||o>=e.length);++o)t[o+r]=e[o];return o}}).call(this,r(9))},function(e,t,r){"use strict";t.byteLength=function(e){return 3*e.length/4-l(e)},t.toByteArray=function(e){var t,r,n,a,s,u=e.length;a=l(e),s=new i(3*u/4-a),r=a>0?u-4:u;var c=0;for(t=0;t<r;t+=4)n=o[e.charCodeAt(t)]<<18|o[e.charCodeAt(t+1)]<<12|o[e.charCodeAt(t+2)]<<6|o[e.charCodeAt(t+3)],s[c++]=n>>16&255,s[c++]=n>>8&255,s[c++]=255&n;2===a?(n=o[e.charCodeAt(t)]<<2|o[e.charCodeAt(t+1)]>>4,s[c++]=255&n):1===a&&(n=o[e.charCodeAt(t)]<<10|o[e.charCodeAt(t+1)]<<4|o[e.charCodeAt(t+2)]>>2,s[c++]=n>>8&255,s[c++]=255&n);return s},t.fromByteArray=function(e){for(var t,r=e.length,o=r%3,i="",a=[],s=16383,u=0,l=r-o;u<l;u+=s)a.push(c(e,u,u+s>l?l:u+s));1===o?(t=e[r-1],i+=n[t>>2],i+=n[t<<4&63],i+="=="):2===o&&(t=(e[r-2]<<8)+e[r-1],i+=n[t>>10],i+=n[t>>4&63],i+=n[t<<2&63],i+="=");return a.push(i),a.join("")};for(var n=[],o=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,u=a.length;s<u;++s)n[s]=a[s],o[a.charCodeAt(s)]=s;function l(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===e[t-2]?2:"="===e[t-1]?1:0}function c(e,t,r){for(var o,i,a=[],s=t;s<r;s+=3)o=(e[s]<<16)+(e[s+1]<<8)+e[s+2],a.push(n[(i=o)>>18&63]+n[i>>12&63]+n[i>>6&63]+n[63&i]);return a.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},function(e,t){t.read=function(e,t,r,n,o){var i,a,s=8*o-n-1,u=(1<<s)-1,l=u>>1,c=-7,f=r?o-1:0,p=r?-1:1,d=e[t+f];for(f+=p,i=d&(1<<-c)-1,d>>=-c,c+=s;c>0;i=256*i+e[t+f],f+=p,c-=8);for(a=i&(1<<-c)-1,i>>=-c,c+=n;c>0;a=256*a+e[t+f],f+=p,c-=8);if(0===i)i=1-l;else{if(i===u)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,n),i-=l}return(d?-1:1)*a*Math.pow(2,i-n)},t.write=function(e,t,r,n,o,i){var a,s,u,l=8*i-o-1,c=(1<<l)-1,f=c>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:i-1,h=n?1:-1,y=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=c):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),(t+=a+f>=1?p/u:p*Math.pow(2,1-f))*u>=2&&(a++,u/=2),a+f>=c?(s=0,a=c):a+f>=1?(s=(t*u-1)*Math.pow(2,o),a+=f):(s=t*Math.pow(2,f-1)*Math.pow(2,o),a=0));o>=8;e[r+d]=255&s,d+=h,s/=256,o-=8);for(a=a<<o|s,l+=o;l>0;e[r+d]=255&a,d+=h,a/=256,l-=8);e[r+d-h]|=128*y}},function(e,t){var r={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return e;return o.default.decode(e.arson)};var o=n(r(52));e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;return r.addEventListener(e,t,{capture:!0,passive:!0}),function(){r.removeEventListener(e,t,{capture:!0,passive:!0})}},e.exports=t.default},function(e,t,r){"use strict";(function(r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={collectWindowErrors:!0,debug:!1},o="undefined"!=typeof window?window:void 0!==r?r:"undefined"!=typeof self?self:{},i=[].slice,a="?",s=/^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;function u(){return"undefined"==typeof document||void 0===document.location?"":document.location.href}n.report=function(){var e,t,r=[],l=null,c=null,f=null;function p(e,t){var o=null;if(!t||n.collectWindowErrors){for(var a in r)if(r.hasOwnProperty(a))try{r[a].apply(null,[e].concat(i.call(arguments,2)))}catch(e){o=e}if(o)throw o}}function d(t,r,o,i,l){if(f)n.computeStackTrace.augmentStackTraceWithInitialElement(f,r,o,t),h();else if(l)p(n.computeStackTrace(l),!0);else{var c,d={url:r,line:o,column:i},y=void 0,g=t;if("[object String]"==={}.toString.call(t))(c=t.match(s))&&(y=c[1],g=c[2]);d.func=a,p({name:y,message:g,url:u(),stack:[d]},!0)}return!!e&&e.apply(this,arguments)}function h(){var e=f,t=l;l=null,f=null,c=null,p.apply(null,[e,!1].concat(t))}function y(e,t){var r=i.call(arguments,1);if(f){if(c===e)return;h()}var o=n.computeStackTrace(e);if(f=o,c=e,l=r,setTimeout((function(){c===e&&h()}),o.incomplete?2e3:0),!1!==t)throw e}return y.subscribe=function(n){!function(){if(t)return;e=o.onerror,o.onerror=d,t=!0}(),r.push(n)},y.unsubscribe=function(e){for(var t=r.length-1;t>=0;--t)r[t]===e&&r.splice(t,1)},y.uninstall=function(){!function(){if(!t)return;o.onerror=e,t=!1,e=void 0}(),r=[]},y}(),n.computeStackTrace=function(){function e(e){if(void 0!==e.stack&&e.stack){for(var t,r,n=/^\\s*at (.*?) ?\\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\\d+))?(?::(\\d+))?\\)?\\s*$/i,o=/^\\s*(.*?)(?:\\((.*?)\\))?(?:^|@)((?:file|https?|blob|chrome|resource|\\[native).*?)(?::(\\d+))?(?::(\\d+))?\\s*$/i,i=/^\\s*at (?:((?:\\[object object\\])?.+) )?\\(?((?:file|ms-appx|https?|blob):.*?):(\\d+)(?::(\\d+))?\\)?\\s*$/i,s=e.stack.split("\\n"),l=[],c=(/^(.*) is undefined$/.exec(e.message),0),f=s.length;c<f;++c){if(t=n.exec(s[c])){var p=t[2]&&-1!==t[2].indexOf("native");r={url:p?null:t[2],func:t[1]||a,args:p?[t[2]]:[],line:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}else if(t=i.exec(s[c]))r={url:t[2],func:t[1]||a,args:[],line:+t[3],column:t[4]?+t[4]:null};else{if(!(t=o.exec(s[c])))continue;r={url:t[3],func:t[1]||a,args:t[2]?t[2].split(","):[],line:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}!r.func&&r.line&&(r.func=a),l.push(r)}return l.length?(l[0].column||void 0===e.columnNumber||(l[0].column=e.columnNumber+1),{name:e.name,message:e.message,url:u(),stack:l}):null}}function t(e,t,r,n){var o={url:t,line:r};if(o.url&&o.line){if(e.incomplete=!1,o.func||(o.func=a),e.stack.length>0&&e.stack[0].url===o.url){if(e.stack[0].line===o.line)return!1;if(!e.stack[0].line&&e.stack[0].func===o.func)return e.stack[0].line=o.line,!1}return e.stack.unshift(o),e.partial=!0,!0}return e.incomplete=!0,!1}function r(e,i){for(var s,l,c=/function\\s+([_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*)?\\s*\\(/i,f=[],p={},d=!1,h=r.caller;h&&!d;h=h.caller)if(h!==o&&h!==n.report){if(l={url:null,func:a,line:null,column:null},h.name?l.func=h.name:(s=c.exec(h.toString()))&&(l.func=s[1]),void 0===l.func)try{l.func=s.input.substring(0,s.input.indexOf("{"))}catch(e){}p[""+h]?d=!0:p[""+h]=!0,f.push(l)}i&&f.splice(0,i);var y={name:e.name,message:e.message,url:u(),stack:f};return t(y,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description),y}function o(t,o){var i=null;o=null==o?0:+o;try{if(i=e(t))return i}catch(e){if(n.debug)throw e}try{if(i=r(t,o+1))return i}catch(e){if(n.debug)throw e}return{name:t.name,message:t.message,url:u()}}return o.augmentStackTraceWithInitialElement=t,o.computeStackTraceFromStackProp=e,o}();var l=n;t.default=l,e.exports=t.default}).call(this,r(9))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var r=0;r<e.length;r++)if(t(e[r]))return e[r]},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return e.concat(t)},e.exports=t.default},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r,n,l=e.slice(0).reverse(),c=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}(t);try{var f=function(){var e=n.value;return e.directDesc?u.apply(void 0,[e].concat((0,o.default)(l.splice(0,1))))?"continue":{v:!1}:-1===(r=(0,a.default)(l,(function(t){return u(e,t)})))?{v:!1}:void l.splice(0,r+1)};for(c.s();!(n=c.n()).done;){var p=f();if("continue"!==p&&"object"===(0,i.default)(p))return p.v}}catch(e){c.e(e)}finally{c.f()}return!0};var o=n(r(33)),i=n(r(16)),a=n(r(56));function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){if(!e||!t)return!1;if(e.id&&e.id!==t.id)return!1;if(e.nodeName&&e.nodeName!==t.nodeName)return!1;if(e.classList&&(!t.classList||e.classList.map((function(e){return e.toLowerCase()})).some((function(e){return-1===t.classList.map((function(e){return e.toLowerCase()})).indexOf(e)}))))return!1;if(e.nthChild){var r=parseInt(e.nthChild,10);return isNaN(r)?Math.abs(t.nthChild%2)===("odd"===e.nthChild?1:0):r===t.nthChild}return!0}e.exports=t.default},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(/\\s*>\\s*|:nth-child\\(([1-9][0-9]*|odd|even)\\)|\\s+/gi,(function(e){return e.indexOf(">")>-1?" >":0===e.trim().length?" ":" ".concat("~").concat(e.slice(":nth-child(".length))})).split(/\\s+/).map((function(e){var t={},r=e;switch(e.charAt(0)){case">":t.directDesc=!0,r=e.slice(1);break;case"~":var n=e.slice(1).split(")"),s=(0,i.default)(n,2),u=s[0],l=s[1];t.directDesc=!0,t.nthChild=u,r=l}return r.replace(/\\.|#/gi,(function(e){return" ".concat(e)})).split(" ").forEach((function(e){if((0,a.default)(e,".")){var r=e.slice(1);t.classList=t.classList?[].concat((0,o.default)(t.classList),[r]):[r]}else(0,a.default)(e,"#")?t.id=e.slice(1):t.nodeName=e})),t}))};var o=n(r(33)),i=n(r(31)),a=n(r(57));e.exports=t.default},function(e,t,r){"use strict";function n(e){var t=e.match(/^([a-z0-9-_]+)/gi),r=e.match(/:([a-z0-9-_()]+)/gi),n=e.match(/#([a-z0-9-_]+)/gi),o=e.match(/(\\.[a-z0-9-_]+)/gi),i={};return t&&(i.nodeName=t[0]),r&&(i.pseudoClassList=r.map((function(e){return e.substr(1)}))),n&&(i.id=n[0].substr(1)),o&&(i.classList=o.map((function(e){return e.substr(1)}))),i}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(/\\s?>\\s?/g," ").split(/\\s+/g).map(n).map((function(e){return e.classList&&e.classList.sort(),e}))},e.exports=t.default},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!t.length)return null;var r=t.split(" > "),n=e.querySelector("body");if(!n)return null;var o=r.shift();if(!(n=s({root:n,selector:o,directDesc:!1})))return null;var a,u=i(r);try{for(u.s();!(a=u.n()).done;){var l=a.value;if(!(n=s({root:n,selector:l,directDesc:!0})))return null}}catch(e){u.e(e)}finally{u.f()}return n};var o=n(r(16));function i(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){u=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=function(e){var t=e.root,r=e.selector,n=e.directDesc,a=r.split(/(?=\\.)|(?=#)/),s=a.shift(),u="",l=[];a.forEach((function(e){"#"===e[0]&&(u=e.toLowerCase().substring(1)),"."===e[0]&&l.push(e.toLowerCase().substring(1))}));var c,f=i(n?[t.querySelector(":scope > ".concat(s))]:t.querySelectorAll(s));try{var p=function(){var e=c.value;if(!e||u!==e.id.toLowerCase())return"continue";var t=e.className.split(" ").map((function(e){return e.toLowerCase()})).filter((function(e){return""!==e&&":"!==e[0]}));return l.every((function(e){return t.includes(e)}))?{v:e}:"continue"};for(f.s();!(c=f.n()).done;){var d=p();if("continue"!==d&&"object"===(0,o.default)(d))return d.v}}catch(e){f.e(e)}finally{f.f()}return null};e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=String(e);if("lipsum"===String(t).toLowerCase())return function(e){var t="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",r=Math.ceil(e.length/t.length),n="";for(;r>0;)n+=t,r--;return n.slice(0,e.length)}(r);return""};e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return e&&t&&e.substring(e.length-t.length)===t},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return e&&t&&e.indexOf(t)>-1},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=Math.ceil(e),n=Math.floor(t);return Math.floor(Math.random()*(n-r))+r},e.exports=t.default},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(0,n(r(53)).default)((function(e){var t={nodeName:e.nodeName?e.nodeName.toLowerCase():""};return e.id&&e.id.length>0&&(t.id=e.id),e.classList&&e.classList.length>0&&(t.classList=Array.prototype.slice.call(e.classList,0)),t}));t.default=o,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e)try{var t=("string"==typeof e?JSON.parse(e):e).query.trim().match(/(query|mutation) ([a-z_-]+)/i);return t?{operationType:t[1],operationName:t[2]}:{}}catch(e){return{}}return{}},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return n.indexOf(e.type)>-1||"CLICK"===e.data.eventType};var n=["lr.browser.NavigationEvent","lr.browser.InputChangeEvent","lr.browser.InputEvent"];e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return["lr.browser.MouseEvent","lr.browser.ScrollEvent","lr.browser.InputEvent","lr.browser.InputChangeEvent","lr.android.TouchEvent"].indexOf(e)>-1},e.exports=t.default},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t<=0)return!1;var r=Math.floor(1e4*t);return(0,o.default)(e)%1e4<=r};var o=n(r(59));e.exports=t.default},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.prefix,r=void 0===t?4:t;return"".concat(r,"-").concat((0,o.default)())};var o=n(r(58));e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=new Set;return e.forEach((function(e){return t.add(e)})),t},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[];return e.forEach((function(e){return t.push(e)})),t},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,r=e.logger,n=e.url,o=void 0===n?"":n,i=(r.getConfig("lr.browser")||{}).urlSanitizer,a=void 0===i?function(e){return e}:i;try{t=a(o)}catch(e){console.error(e)}if("string"==typeof t)return t;return""},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return{permissions:{dashboard:{metrics:!0,errors:!0},sessionPlayback:{developerPane:{networkPane:{requestBodiesAndHeaders:!0}}}},appRoles:[]}},e.exports=t.default},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e){var t=e.split("/");return(0,o.default)(t,1)[0]===i.DEMO_ORG_SLUG}return!1};var o=n(r(31)),i=r(60);e.exports=t.default},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.LOG_FILTER_LABELS=t.LOG_FILTER_TYPES=t.LOG_TYPES=void 0;var o,i,a=n(r(7));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={LOG:"LOG",WARN:"WARN",ERROR:"ERROR",DEBUG:"DEBUG",INFO:"INFO",REDUX:"REDUX",NAVIGATION:"NAVIGATION",NETWORK:"NETWORK",PREV_SESSION:"PREV_SESSION",NEXT_SESSION:"NEXT_SESSION",LOAD_MORE:"LOAD_MORE"};t.LOG_TYPES=l;var c=(o={},(0,a.default)(o,l.LOG,"Logs"),(0,a.default)(o,l.WARN,"Warnings"),(0,a.default)(o,l.ERROR,"Errors"),(0,a.default)(o,l.INFO,"Info"),(0,a.default)(o,l.DEBUG,"Debug"),(0,a.default)(o,l.REDUX,"Redux"),(0,a.default)(o,l.NAVIGATION,"Navigation"),o);t.LOG_FILTER_TYPES=c;var f=u(u({},c),{},(i={},(0,a.default)(i,l.LOG,"Log"),(0,a.default)(i,l.WARN,"Warn"),(0,a.default)(i,l.ERROR,"Error"),i));t.LOG_FILTER_LABELS=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_HEATMAP_FOR_URL_OPERATOR=t.HEATMAP_FOR_URL_OPERATOR=t.METRIC_TIMESERIES_TYPE=void 0;t.METRIC_TIMESERIES_TYPE={SESSION_COUNT:"SESSION_COUNT",PERCENTILE:"PERCENTILE",CONVERSION_RATE:"CONVERSION_RATE",SESSION_PERCENTAGE:"SESSION_PERCENTAGE",ACTIVE_USERS:"ACTIVE_USERS"};var n={IS:"IS",CONTAINS:"CONTAINS"};t.HEATMAP_FOR_URL_OPERATOR=n;var o=n.IS;t.DEFAULT_HEATMAP_FOR_URL_OPERATOR=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ISSUE_GROUP_TYPE=t.ISSUE_TYPE=void 0;t.ISSUE_TYPE={NETWORK_ERROR:"NETWORK_ERROR",EXCEPTION:"EXCEPTION"};t.ISSUE_GROUP_TYPE={DYNAMIC:"DYNAMIC",TROYTOWN:"TROYTOWN"}},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.sdkThrottle,i=void 0===n?500:n;if(!e.length)return null;var a=(0,o.default)(e,{time:t},"time"),s=e[a]||e[a-1],u=e[a-1]||s,l=Math.min(s.time-u.time,i),c=Math.max(t-(s.time-l),0),f=0===l?1:Math.min(c/l,1);return{prev:u,next:s,ratio:f}};var o=n(r(61));e.exports=t.default},function(e,t,r){var n=r(149),o=r(214),i=r(225),a=r(3),s=r(226);e.exports=function(e){return"function"==typeof e?e:null==e?i:"object"==typeof e?a(e)?o(e[0],e[1]):n(e):s(e)}},function(e,t,r){var n=r(150),o=r(213),i=r(75);e.exports=function(e){var t=o(e);return 1==t.length&&t[0][2]?i(t[0][0],t[0][1]):function(r){return r===e||n(r,e,t)}}},function(e,t,r){var n=r(62),o=r(67);e.exports=function(e,t,r,i){var a=r.length,s=a,u=!i;if(null==e)return!s;for(e=Object(e);a--;){var l=r[a];if(u&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++a<s;){var c=(l=r[a])[0],f=e[c],p=l[1];if(u&&l[2]){if(void 0===f&&!(c in e))return!1}else{var d=new n;if(i)var h=i(f,p,c,e,t,d);if(!(void 0===h?o(p,f,3,i,d):h))return!1}}return!0}},function(e,t){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,r){var n=r(18),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0)&&(r==t.length-1?t.pop():o.call(t,r,1),--this.size,!0)}},function(e,t,r){var n=r(18);e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},function(e,t,r){var n=r(18);e.exports=function(e){return n(this.__data__,e)>-1}},function(e,t,r){var n=r(18);e.exports=function(e,t){var r=this.__data__,o=n(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}},function(e,t,r){var n=r(17);e.exports=function(){this.__data__=new n,this.size=0}},function(e,t){e.exports=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}},function(e,t){e.exports=function(e){return this.__data__.get(e)}},function(e,t){e.exports=function(e){return this.__data__.has(e)}},function(e,t,r){var n=r(17),o=r(34),i=r(36);e.exports=function(e,t){var r=this.__data__;if(r instanceof n){var a=r.__data__;if(!o||a.length<199)return a.push([e,t]),this.size=++r.size,this;r=this.__data__=new i(a)}return r.set(e,t),this.size=r.size,this}},function(e,t,r){var n=r(64),o=r(164),i=r(35),a=r(66),s=/^\\[object .+?Constructor\\]$/,u=Function.prototype,l=Object.prototype,c=u.toString,f=l.hasOwnProperty,p=RegExp("^"+c.call(f).replace(/[\\\\^$.*+?()[\\]{}|]/g,"\\\\$&").replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!i(e)||o(e))&&(n(e)?p:s).test(a(e))}},function(e,t,r){var n=r(19),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,s),r=e[s];try{e[s]=void 0;var n=!0}catch(e){}var o=a.call(e);return n&&(t?e[s]=r:delete e[s]),o}},function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},function(e,t,r){var n,o=r(165),i=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(e){return!!i&&i in e}},function(e,t,r){var n=r(1)["__core-js_shared__"];e.exports=n},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t,r){var n=r(168),o=r(17),i=r(34);e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(i||o),string:new n}}},function(e,t,r){var n=r(169),o=r(170),i=r(171),a=r(172),s=r(173);function u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=s,e.exports=u},function(e,t,r){var n=r(20);e.exports=function(){this.__data__=n?n(null):{},this.size=0}},function(e,t){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},function(e,t,r){var n=r(20),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(n){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(t,e)?t[e]:void 0}},function(e,t,r){var n=r(20),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return n?void 0!==t[e]:o.call(t,e)}},function(e,t,r){var n=r(20);e.exports=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=n&&void 0===t?"__lodash_hash_undefined__":t,this}},function(e,t,r){var n=r(21);e.exports=function(e){var t=n(this,e).delete(e);return this.size-=t?1:0,t}},function(e,t){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},function(e,t,r){var n=r(21);e.exports=function(e){return n(this,e).get(e)}},function(e,t,r){var n=r(21);e.exports=function(e){return n(this,e).has(e)}},function(e,t,r){var n=r(21);e.exports=function(e,t){var r=n(this,e),o=r.size;return r.set(e,t),this.size+=r.size==o?0:1,this}},function(e,t,r){var n=r(62),o=r(68),i=r(185),a=r(189),s=r(208),u=r(3),l=r(71),c=r(73),f="[object Arguments]",p="[object Array]",d="[object Object]",h=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,y,g,b){var v=u(e),m=u(t),w=v?p:s(e),O=m?p:s(t),I=(w=w==f?d:w)==d,x=(O=O==f?d:O)==d,P=w==O;if(P&&l(e)){if(!l(t))return!1;v=!0,I=!1}if(P&&!I)return b||(b=new n),v||c(e)?o(e,t,r,y,g,b):i(e,t,w,r,y,g,b);if(!(1&r)){var j=I&&h.call(e,"__wrapped__"),S=x&&h.call(t,"__wrapped__");if(j||S){var T=j?e.value():e,k=S?t.value():t;return b||(b=new n),g(T,k,r,y,b)}}return!!P&&(b||(b=new n),a(e,t,r,y,g,b))}},function(e,t,r){var n=r(36),o=r(181),i=r(182);function a(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new n;++t<r;)this.add(e[t])}a.prototype.add=a.prototype.push=o,a.prototype.has=i,e.exports=a},function(e,t){e.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},function(e,t){e.exports=function(e){return this.__data__.has(e)}},function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}},function(e,t){e.exports=function(e,t){return e.has(t)}},function(e,t,r){var n=r(19),o=r(186),i=r(63),a=r(68),s=r(187),u=r(188),l=n?n.prototype:void 0,c=l?l.valueOf:void 0;e.exports=function(e,t,r,n,l,f,p){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!f(new o(e),new o(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var d=s;case"[object Set]":var h=1&n;if(d||(d=u),e.size!=t.size&&!h)return!1;var y=p.get(e);if(y)return y==t;n|=2,p.set(e,t);var g=a(d(e),d(t),n,l,f,p);return p.delete(e),g;case"[object Symbol]":if(c)return c.call(e)==c.call(t)}return!1}},function(e,t,r){var n=r(1).Uint8Array;e.exports=n},function(e,t){e.exports=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}},function(e,t){e.exports=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}},function(e,t,r){var n=r(190),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,i,a,s){var u=1&r,l=n(e),c=l.length;if(c!=n(t).length&&!u)return!1;for(var f=c;f--;){var p=l[f];if(!(u?p in t:o.call(t,p)))return!1}var d=s.get(e),h=s.get(t);if(d&&h)return d==t&&h==e;var y=!0;s.set(e,t),s.set(t,e);for(var g=u;++f<c;){var b=e[p=l[f]],v=t[p];if(i)var m=u?i(v,b,p,t,e,s):i(b,v,p,e,t,s);if(!(void 0===m?b===v||a(b,v,r,i,s):m)){y=!1;break}g||(g="constructor"==p)}if(y&&!g){var w=e.constructor,O=t.constructor;w==O||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof O&&O instanceof O||(y=!1)}return s.delete(e),s.delete(t),y}},function(e,t,r){var n=r(191),o=r(193),i=r(69);e.exports=function(e){return n(e,i,o)}},function(e,t,r){var n=r(192),o=r(3);e.exports=function(e,t,r){var i=t(e);return o(e)?i:n(i,r(e))}},function(e,t){e.exports=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}},function(e,t,r){var n=r(194),o=r(195),i=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols,s=a?function(e){return null==e?[]:(e=Object(e),n(a(e),(function(t){return i.call(e,t)})))}:o;e.exports=s},function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}},function(e,t){e.exports=function(){return[]}},function(e,t,r){var n=r(197),o=r(70),i=r(3),a=r(71),s=r(72),u=r(73),l=Object.prototype.hasOwnProperty;e.exports=function(e,t){var r=i(e),c=!r&&o(e),f=!r&&!c&&a(e),p=!r&&!c&&!f&&u(e),d=r||c||f||p,h=d?n(e.length,String):[],y=h.length;for(var g in e)!t&&!l.call(e,g)||d&&("length"==g||f&&("offset"==g||"parent"==g)||p&&("buffer"==g||"byteLength"==g||"byteOffset"==g)||s(g,y))||h.push(g);return h}},function(e,t){e.exports=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}},function(e,t,r){var n=r(10),o=r(11);e.exports=function(e){return o(e)&&"[object Arguments]"==n(e)}},function(e,t){e.exports=function(){return!1}},function(e,t,r){var n=r(10),o=r(37),i=r(11),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,e.exports=function(e){return i(e)&&o(e.length)&&!!a[n(e)]}},function(e,t){e.exports=function(e){return function(t){return e(t)}}},function(e,t,r){(function(e){var n=r(65),o=t&&!t.nodeType&&t,i=o&&"object"==typeof e&&e&&!e.nodeType&&e,a=i&&i.exports===o&&n.process,s=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=s}).call(this,r(22)(e))},function(e,t,r){var n=r(204),o=r(205),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!n(e))return o(e);var t=[];for(var r in Object(e))i.call(e,r)&&"constructor"!=r&&t.push(r);return t}},function(e,t){var r=Object.prototype;e.exports=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||r)}},function(e,t,r){var n=r(206)(Object.keys,Object);e.exports=n},function(e,t){e.exports=function(e,t){return function(r){return e(t(r))}}},function(e,t,r){var n=r(64),o=r(37);e.exports=function(e){return null!=e&&o(e.length)&&!n(e)}},function(e,t,r){var n=r(209),o=r(34),i=r(210),a=r(211),s=r(212),u=r(10),l=r(66),c="[object Map]",f="[object Promise]",p="[object Set]",d="[object WeakMap]",h="[object DataView]",y=l(n),g=l(o),b=l(i),v=l(a),m=l(s),w=u;(n&&w(new n(new ArrayBuffer(1)))!=h||o&&w(new o)!=c||i&&w(i.resolve())!=f||a&&w(new a)!=p||s&&w(new s)!=d)&&(w=function(e){var t=u(e),r="[object Object]"==t?e.constructor:void 0,n=r?l(r):"";if(n)switch(n){case y:return h;case g:return c;case b:return f;case v:return p;case m:return d}return t}),e.exports=w},function(e,t,r){var n=r(8)(r(1),"DataView");e.exports=n},function(e,t,r){var n=r(8)(r(1),"Promise");e.exports=n},function(e,t,r){var n=r(8)(r(1),"Set");e.exports=n},function(e,t,r){var n=r(8)(r(1),"WeakMap");e.exports=n},function(e,t,r){var n=r(74),o=r(69);e.exports=function(e){for(var t=o(e),r=t.length;r--;){var i=t[r],a=e[i];t[r]=[i,a,n(a)]}return t}},function(e,t,r){var n=r(67),o=r(215),i=r(222),a=r(38),s=r(74),u=r(75),l=r(24);e.exports=function(e,t){return a(e)&&s(t)?u(l(e),t):function(r){var a=o(r,e);return void 0===a&&a===t?i(r,e):n(t,a,3)}}},function(e,t,r){var n=r(76);e.exports=function(e,t,r){var o=null==e?void 0:n(e,t);return void 0===o?r:o}},function(e,t,r){var n=r(217),o=/[^.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))/g,i=/\\\\(\\\\)?/g,a=n((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,r,n,o){t.push(n?o.replace(i,"$1"):r||e)})),t}));e.exports=a},function(e,t,r){var n=r(218);e.exports=function(e){var t=n(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}},function(e,t,r){var n=r(36);function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(o.Cache||n),r}o.Cache=n,e.exports=o},function(e,t,r){var n=r(220);e.exports=function(e){return null==e?"":n(e)}},function(e,t,r){var n=r(19),o=r(221),i=r(3),a=r(23),s=n?n.prototype:void 0,u=s?s.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return o(t,e)+"";if(a(t))return u?u.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r}},function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}},function(e,t,r){var n=r(223),o=r(224);e.exports=function(e,t){return null!=e&&o(e,t,n)}},function(e,t){e.exports=function(e,t){return null!=e&&t in Object(e)}},function(e,t,r){var n=r(77),o=r(70),i=r(3),a=r(72),s=r(37),u=r(24);e.exports=function(e,t,r){for(var l=-1,c=(t=n(t,e)).length,f=!1;++l<c;){var p=u(t[l]);if(!(f=null!=e&&r(e,p)))break;e=e[p]}return f||++l!=c?f:!!(c=null==e?0:e.length)&&s(c)&&a(p,c)&&(i(e)||o(e))}},function(e,t){e.exports=function(e){return e}},function(e,t,r){var n=r(227),o=r(228),i=r(38),a=r(24);e.exports=function(e){return i(e)?n(a(e)):o(e)}},function(e,t){e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},function(e,t,r){var n=r(76);e.exports=function(e){return function(t){return n(t,e)}}},function(e,t,r){var n=r(23),o=Math.floor,i=Math.min;e.exports=function(e,t,r,a){var s=0,u=null==e?0:e.length;if(0===u)return 0;for(var l=(t=r(t))!=t,c=null===t,f=n(t),p=void 0===t;s<u;){var d=o((s+u)/2),h=r(e[d]),y=void 0!==h,g=null===h,b=h==h,v=n(h);if(l)var m=a||b;else m=p?b&&(a||y):c?b&&y&&(a||!g):f?b&&y&&!g&&(a||!v):!g&&!v&&(a?h<=t:h<t);m?s=d+1:u=d}return i(u,4294967294)}},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=u,t.interpolateMobile=function(e,t,r){if(!e)return{};var n=e.prev,o=e.next;if("MOVE"===o.type)return u(e,t);if(n===o&&Math.abs(r-o.time)>500)return null;return o};var o=n(r(7));function i(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){u=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e,t){if(!e)return{};var r,n=e.prev,a=e.next,u=e.ratio,l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},a),c=i(t);try{for(c.s();!(r=c.n()).done;){var f=r.value;l[f]=n[f]+(a[f]-n[f])*u}}catch(e){c.e(e)}finally{c.f()}return l}},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(0===e.length)return e;var r=(0,o.default)(e,{time:t.time-5e3},"time")-1,n=e[r];if(n&&t.time-n.time>5e3&&r>0)return e.slice(r);return e};var o=n(r(61));e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.knownMetricTypes=void 0;t.knownMetricTypes=["cumulativeLayoutShift","firstInputDelay","initialPageLoadTime","largestContentfulPaintTime","timeToFirstByte"]},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DELIGHTED_RESPONSES_REGEX=t.WOOTRIC_RESPONSES_REGEX=void 0;t.WOOTRIC_RESPONSES_REGEX=/^https:\\/\\/production.wootric.com\\/responses/;t.DELIGHTED_RESPONSES_REGEX=/^https:\\/\\/web.delighted.com\\/e\\/[a-zA-Z-]*\\/c/},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(33)),i=n(r(16)),a=n(r(14)),s=r(51),u=function e(t){var r=t.worker,n=t.onReceiveFullMessage;(0,a.default)(this,e);var u=[];r.addEventListener("message",(function(e){if(e.data===s.DONE_POSTING){var t=[];u.forEach((function(e){e&&"object"===(0,i.default)(e)&&t.push(e)})),t.forEach((function(e){for(var t in e)e.hasOwnProperty(t)&&(e[t]=u[e[t]])})),n(u[0]),u=[]}else u=[].concat((0,o.default)(u),(0,o.default)(e.data))}))};t.default=u,e.exports=t.default},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(p)return;(0,u.protectFunc)((function(){switch(e.type){case"GET_SUFFIX":var t=d.encode(d.create({visitedURLs:e.visitedURLs})).finish();postMessage({type:"SUFFIX",suffix:t});break;case"ADD_EVENT":var r=d.encode(d.create({events:[f.encodeEvent(e.event)]})).finish(),n={type:"EVENT",eventBuffer:r,s:e.event.sessionID};if(r.byteLength>10444800||("lr.redux.ReduxAction"===e.event.type||"lr.redux.InitialState"===e.event.type)&&r.byteLength>4177920){var o;switch(e.event.type){case"lr.redux.InitialState":o="Redux state too large (> 4MB). Consider sanitizing: https://docs.logrocket.com/reference#redux-logging";break;case"lr.redux.ReduxAction":o="Redux action too large (> 4MB). Consider sanitizing: https://docs.logrocket.com/reference#redux-logging";break;case"lr.network.RequestEvent":o="Network request too large (> 10MB). Consider sanitizing: https://docs.logrocket.com/reference#network";break;case"lr.network.ResponseEvent":o="Network response too large (> 10MB). Consider sanitizing:  https://docs.logrocket.com/reference#network";break;default:o="Payload too large (> 10MB). Event: ".concat(e.event.type)}n.eventBuffer=d.encode(d.create({events:[f.encodeEvent(c(c({},e.event),{},{type:"lr.error.Truncated",data:{reason:o}}))]})).finish(),n.error=o,n.errorSource=e.event.type,p=!0}"lr.redux.InitialState"!==e.event.type&&"lr.redux.ReduxAction"!==e.event.type||(n.shouldWarnAboutReduxSize=!0),postMessage(n);break;default:(0,s.default)(!1,"Worker received invalid event type: ".concat(JSON.stringify(e),"."))}}),(function(){p=!0;var t={};try{t=JSON.stringify(e)}catch(r){t=Object.prototype.toString.call(e)}return{appID:undefined,recordingID:undefined,payload:t}}))()};var o=n(r(7)),i=n(r(39)),a=r(252),s=n(r(353)),u=r(15);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=new a.Encoder,p=!1,d=i.default.lookupType("lr.EventList");e.exports=t.default},function(e,t,r){"use strict";var n,o,i,a,s,u,l,c,f,p,d,h,y,g=r(237),b=g.Reader,v=g.Writer,m=g.util,w=g.roots.default||(g.roots.default={});w.lr=((y={}).IntercomShow=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.IntercomShow;e.pos<r;){var o=e.uint32();e.skipType(7&o)}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null},e.fromObject=function(e){return e instanceof w.lr.IntercomShow?e:new w.lr.IntercomShow},e.toObject=function(){return{}},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),y.ZendeskShow=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.ZendeskShow;e.pos<r;){var o=e.uint32();e.skipType(7&o)}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null},e.fromObject=function(e){return e instanceof w.lr.ZendeskShow?e:new w.lr.ZendeskShow},e.toObject=function(){return{}},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),y.utils=((n={}).Value=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.arson="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.arson&&e.hasOwnProperty("arson")&&t.uint32(18).string(e.arson),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.utils.Value;e.pos<r;){var o=e.uint32();switch(o>>>3){case 2:n.arson=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.arson&&e.hasOwnProperty("arson")&&!m.isString(e.arson)?"arson: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.utils.Value)return e;var t=new w.lr.utils.Value;return null!=e.arson&&(t.arson=String(e.arson)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.arson=""),null!=e.arson&&e.hasOwnProperty("arson")&&(r.arson=e.arson),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),n),y.core=((o={}).LogEvent=function(){function e(e){if(this.args=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}var t,r;return e.prototype.logLevel=0,e.prototype.args=m.emptyArray,e.prototype.tag="",e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.logLevel&&e.hasOwnProperty("logLevel")&&t.uint32(8).int32(e.logLevel),null!=e.args&&e.args.length)for(var r=0;r<e.args.length;++r)w.lr.utils.Value.encode(e.args[r],t.uint32(18).fork()).ldelim();return null!=e.tag&&e.hasOwnProperty("tag")&&t.uint32(26).string(e.tag),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.core.LogEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.logLevel=e.int32();break;case 2:n.args&&n.args.length||(n.args=[]),n.args.push(w.lr.utils.Value.decode(e,e.uint32()));break;case 3:n.tag=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.logLevel&&e.hasOwnProperty("logLevel"))switch(e.logLevel){default:return"logLevel: enum value expected";case 0:case 1:case 2:case 3:case 4:}if(null!=e.args&&e.hasOwnProperty("args")){if(!Array.isArray(e.args))return"args: array expected";for(var t=0;t<e.args.length;++t){var r=w.lr.utils.Value.verify(e.args[t]);if(r)return"args."+r}}return null!=e.tag&&e.hasOwnProperty("tag")&&!m.isString(e.tag)?"tag: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.core.LogEvent)return e;var t=new w.lr.core.LogEvent;switch(e.logLevel){case"DEBUG":case 0:t.logLevel=0;break;case"INFO":case 1:t.logLevel=1;break;case"LOG":case 2:t.logLevel=2;break;case"WARN":case 3:t.logLevel=3;break;case"ERROR":case 4:t.logLevel=4}if(e.args){if(!Array.isArray(e.args))throw TypeError(".lr.core.LogEvent.args: array expected");t.args=[];for(var r=0;r<e.args.length;++r){if("object"!=typeof e.args[r])throw TypeError(".lr.core.LogEvent.args: object expected");t.args[r]=w.lr.utils.Value.fromObject(e.args[r])}}return null!=e.tag&&(t.tag=String(e.tag)),t},e.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.args=[]),t.defaults&&(r.logLevel=t.enums===String?"DEBUG":0,r.tag=""),null!=e.logLevel&&e.hasOwnProperty("logLevel")&&(r.logLevel=t.enums===String?w.lr.core.LogEvent.LogLevel[e.logLevel]:e.logLevel),e.args&&e.args.length){r.args=[];for(var n=0;n<e.args.length;++n)r.args[n]=w.lr.utils.Value.toObject(e.args[n],t)}return null!=e.tag&&e.hasOwnProperty("tag")&&(r.tag=e.tag),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.LogLevel=(t={},(r=Object.create(t))[t[0]="DEBUG"]=0,r[t[1]="INFO"]=1,r[t[2]="LOG"]=2,r[t[3]="WARN"]=3,r[t[4]="ERROR"]=4,r),e}(),o.OldException=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}var t,r;return e.prototype.exceptionType=0,e.prototype.errorType="",e.prototype.message=null,e.prototype.release="",e.prototype.browserHref="",e.prototype.browserUseragent="",e.prototype.userName="",e.prototype.userEmail="",e.prototype.country="",e.prototype.region="",e.prototype.city="",e.prototype.latitude=0,e.prototype.longitude=0,e.prototype.ip="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.exceptionType&&e.hasOwnProperty("exceptionType")&&t.uint32(8).int32(e.exceptionType),null!=e.errorType&&e.hasOwnProperty("errorType")&&t.uint32(18).string(e.errorType),null!=e.message&&e.hasOwnProperty("message")&&w.lr.utils.Value.encode(e.message,t.uint32(26).fork()).ldelim(),null!=e.release&&e.hasOwnProperty("release")&&t.uint32(34).string(e.release),null!=e.browserHref&&e.hasOwnProperty("browserHref")&&t.uint32(42).string(e.browserHref),null!=e.browserUseragent&&e.hasOwnProperty("browserUseragent")&&t.uint32(50).string(e.browserUseragent),null!=e.userName&&e.hasOwnProperty("userName")&&t.uint32(58).string(e.userName),null!=e.userEmail&&e.hasOwnProperty("userEmail")&&t.uint32(66).string(e.userEmail),null!=e.country&&e.hasOwnProperty("country")&&t.uint32(74).string(e.country),null!=e.region&&e.hasOwnProperty("region")&&t.uint32(82).string(e.region),null!=e.city&&e.hasOwnProperty("city")&&t.uint32(90).string(e.city),null!=e.latitude&&e.hasOwnProperty("latitude")&&t.uint32(101).float(e.latitude),null!=e.longitude&&e.hasOwnProperty("longitude")&&t.uint32(109).float(e.longitude),null!=e.ip&&e.hasOwnProperty("ip")&&t.uint32(114).string(e.ip),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.core.OldException;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.exceptionType=e.int32();break;case 2:n.errorType=e.string();break;case 3:n.message=w.lr.utils.Value.decode(e,e.uint32());break;case 4:n.release=e.string();break;case 5:n.browserHref=e.string();break;case 6:n.browserUseragent=e.string();break;case 7:n.userName=e.string();break;case 8:n.userEmail=e.string();break;case 9:n.country=e.string();break;case 10:n.region=e.string();break;case 11:n.city=e.string();break;case 12:n.latitude=e.float();break;case 13:n.longitude=e.float();break;case 14:n.ip=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.exceptionType&&e.hasOwnProperty("exceptionType"))switch(e.exceptionType){default:return"exceptionType: enum value expected";case 0:case 1:}if(null!=e.errorType&&e.hasOwnProperty("errorType")&&!m.isString(e.errorType))return"errorType: string expected";if(null!=e.message&&e.hasOwnProperty("message")){var t=w.lr.utils.Value.verify(e.message);if(t)return"message."+t}return null!=e.release&&e.hasOwnProperty("release")&&!m.isString(e.release)?"release: string expected":null!=e.browserHref&&e.hasOwnProperty("browserHref")&&!m.isString(e.browserHref)?"browserHref: string expected":null!=e.browserUseragent&&e.hasOwnProperty("browserUseragent")&&!m.isString(e.browserUseragent)?"browserUseragent: string expected":null!=e.userName&&e.hasOwnProperty("userName")&&!m.isString(e.userName)?"userName: string expected":null!=e.userEmail&&e.hasOwnProperty("userEmail")&&!m.isString(e.userEmail)?"userEmail: string expected":null!=e.country&&e.hasOwnProperty("country")&&!m.isString(e.country)?"country: string expected":null!=e.region&&e.hasOwnProperty("region")&&!m.isString(e.region)?"region: string expected":null!=e.city&&e.hasOwnProperty("city")&&!m.isString(e.city)?"city: string expected":null!=e.latitude&&e.hasOwnProperty("latitude")&&"number"!=typeof e.latitude?"latitude: number expected":null!=e.longitude&&e.hasOwnProperty("longitude")&&"number"!=typeof e.longitude?"longitude: number expected":null!=e.ip&&e.hasOwnProperty("ip")&&!m.isString(e.ip)?"ip: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.core.OldException)return e;var t=new w.lr.core.OldException;switch(e.exceptionType){case"UNHANDLED_REJECTION":case 0:t.exceptionType=0;break;case"WINDOW":case 1:t.exceptionType=1}if(null!=e.errorType&&(t.errorType=String(e.errorType)),null!=e.message){if("object"!=typeof e.message)throw TypeError(".lr.core.OldException.message: object expected");t.message=w.lr.utils.Value.fromObject(e.message)}return null!=e.release&&(t.release=String(e.release)),null!=e.browserHref&&(t.browserHref=String(e.browserHref)),null!=e.browserUseragent&&(t.browserUseragent=String(e.browserUseragent)),null!=e.userName&&(t.userName=String(e.userName)),null!=e.userEmail&&(t.userEmail=String(e.userEmail)),null!=e.country&&(t.country=String(e.country)),null!=e.region&&(t.region=String(e.region)),null!=e.city&&(t.city=String(e.city)),null!=e.latitude&&(t.latitude=Number(e.latitude)),null!=e.longitude&&(t.longitude=Number(e.longitude)),null!=e.ip&&(t.ip=String(e.ip)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.exceptionType=t.enums===String?"UNHANDLED_REJECTION":0,r.errorType="",r.message=null,r.release="",r.browserHref="",r.browserUseragent="",r.userName="",r.userEmail="",r.country="",r.region="",r.city="",r.latitude=0,r.longitude=0,r.ip=""),null!=e.exceptionType&&e.hasOwnProperty("exceptionType")&&(r.exceptionType=t.enums===String?w.lr.core.OldException.ExceptionType[e.exceptionType]:e.exceptionType),null!=e.errorType&&e.hasOwnProperty("errorType")&&(r.errorType=e.errorType),null!=e.message&&e.hasOwnProperty("message")&&(r.message=w.lr.utils.Value.toObject(e.message,t)),null!=e.release&&e.hasOwnProperty("release")&&(r.release=e.release),null!=e.browserHref&&e.hasOwnProperty("browserHref")&&(r.browserHref=e.browserHref),null!=e.browserUseragent&&e.hasOwnProperty("browserUseragent")&&(r.browserUseragent=e.browserUseragent),null!=e.userName&&e.hasOwnProperty("userName")&&(r.userName=e.userName),null!=e.userEmail&&e.hasOwnProperty("userEmail")&&(r.userEmail=e.userEmail),null!=e.country&&e.hasOwnProperty("country")&&(r.country=e.country),null!=e.region&&e.hasOwnProperty("region")&&(r.region=e.region),null!=e.city&&e.hasOwnProperty("city")&&(r.city=e.city),null!=e.latitude&&e.hasOwnProperty("latitude")&&(r.latitude=t.json&&!isFinite(e.latitude)?String(e.latitude):e.latitude),null!=e.longitude&&e.hasOwnProperty("longitude")&&(r.longitude=t.json&&!isFinite(e.longitude)?String(e.longitude):e.longitude),null!=e.ip&&e.hasOwnProperty("ip")&&(r.ip=e.ip),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.ExceptionType=(t={},(r=Object.create(t))[t[0]="UNHANDLED_REJECTION"]=0,r[t[1]="WINDOW"]=1,r),e}(),o.Exception=function(){function e(e){if(this.tags={},this.extra={},e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}var t,r;return e.prototype.exceptionType=0,e.prototype.errorType="",e.prototype.message=null,e.prototype.release="",e.prototype.browserHref="",e.prototype.browserUseragent="",e.prototype.userName="",e.prototype.userEmail="",e.prototype.level="",e.prototype.logger="",e.prototype.tags=m.emptyObject,e.prototype.extra=m.emptyObject,e.prototype.ip="",e.prototype.country="",e.prototype.region="",e.prototype.city="",e.prototype.latitude=0,e.prototype.longitude=0,e.prototype.count=0,e.prototype.hashCode="",e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.exceptionType&&e.hasOwnProperty("exceptionType")&&t.uint32(8).int32(e.exceptionType),null!=e.errorType&&e.hasOwnProperty("errorType")&&t.uint32(18).string(e.errorType),null!=e.message&&e.hasOwnProperty("message")&&w.lr.utils.Value.encode(e.message,t.uint32(26).fork()).ldelim(),null!=e.release&&e.hasOwnProperty("release")&&t.uint32(34).string(e.release),null!=e.browserHref&&e.hasOwnProperty("browserHref")&&t.uint32(42).string(e.browserHref),null!=e.browserUseragent&&e.hasOwnProperty("browserUseragent")&&t.uint32(50).string(e.browserUseragent),null!=e.userName&&e.hasOwnProperty("userName")&&t.uint32(58).string(e.userName),null!=e.userEmail&&e.hasOwnProperty("userEmail")&&t.uint32(66).string(e.userEmail),null!=e.level&&e.hasOwnProperty("level")&&t.uint32(74).string(e.level),null!=e.logger&&e.hasOwnProperty("logger")&&t.uint32(82).string(e.logger),null!=e.tags&&e.hasOwnProperty("tags"))for(var r=Object.keys(e.tags),n=0;n<r.length;++n)t.uint32(90).fork().uint32(10).string(r[n]).uint32(18).string(e.tags[r[n]]).ldelim();if(null!=e.extra&&e.hasOwnProperty("extra"))for(r=Object.keys(e.extra),n=0;n<r.length;++n)t.uint32(98).fork().uint32(10).string(r[n]).uint32(18).string(e.extra[r[n]]).ldelim();return null!=e.ip&&e.hasOwnProperty("ip")&&t.uint32(106).string(e.ip),null!=e.country&&e.hasOwnProperty("country")&&t.uint32(114).string(e.country),null!=e.region&&e.hasOwnProperty("region")&&t.uint32(122).string(e.region),null!=e.city&&e.hasOwnProperty("city")&&t.uint32(130).string(e.city),null!=e.latitude&&e.hasOwnProperty("latitude")&&t.uint32(141).float(e.latitude),null!=e.longitude&&e.hasOwnProperty("longitude")&&t.uint32(149).float(e.longitude),null!=e.count&&e.hasOwnProperty("count")&&t.uint32(152).uint32(e.count),null!=e.hashCode&&e.hasOwnProperty("hashCode")&&t.uint32(162).string(e.hashCode),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r,n=void 0===t?e.len:e.pos+t,o=new w.lr.core.Exception;e.pos<n;){var i=e.uint32();switch(i>>>3){case 1:o.exceptionType=e.int32();break;case 2:o.errorType=e.string();break;case 3:o.message=w.lr.utils.Value.decode(e,e.uint32());break;case 4:o.release=e.string();break;case 5:o.browserHref=e.string();break;case 6:o.browserUseragent=e.string();break;case 7:o.userName=e.string();break;case 8:o.userEmail=e.string();break;case 9:o.level=e.string();break;case 10:o.logger=e.string();break;case 11:e.skip().pos++,o.tags===m.emptyObject&&(o.tags={}),r=e.string(),e.pos++,o.tags[r]=e.string();break;case 12:e.skip().pos++,o.extra===m.emptyObject&&(o.extra={}),r=e.string(),e.pos++,o.extra[r]=e.string();break;case 13:o.ip=e.string();break;case 14:o.country=e.string();break;case 15:o.region=e.string();break;case 16:o.city=e.string();break;case 17:o.latitude=e.float();break;case 18:o.longitude=e.float();break;case 19:o.count=e.uint32();break;case 20:o.hashCode=e.string();break;default:e.skipType(7&i)}}return o},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.exceptionType&&e.hasOwnProperty("exceptionType"))switch(e.exceptionType){default:return"exceptionType: enum value expected";case 0:case 1:case 2:case 3:case 4:}if(null!=e.errorType&&e.hasOwnProperty("errorType")&&!m.isString(e.errorType))return"errorType: string expected";if(null!=e.message&&e.hasOwnProperty("message")){var t=w.lr.utils.Value.verify(e.message);if(t)return"message."+t}if(null!=e.release&&e.hasOwnProperty("release")&&!m.isString(e.release))return"release: string expected";if(null!=e.browserHref&&e.hasOwnProperty("browserHref")&&!m.isString(e.browserHref))return"browserHref: string expected";if(null!=e.browserUseragent&&e.hasOwnProperty("browserUseragent")&&!m.isString(e.browserUseragent))return"browserUseragent: string expected";if(null!=e.userName&&e.hasOwnProperty("userName")&&!m.isString(e.userName))return"userName: string expected";if(null!=e.userEmail&&e.hasOwnProperty("userEmail")&&!m.isString(e.userEmail))return"userEmail: string expected";if(null!=e.level&&e.hasOwnProperty("level")&&!m.isString(e.level))return"level: string expected";if(null!=e.logger&&e.hasOwnProperty("logger")&&!m.isString(e.logger))return"logger: string expected";if(null!=e.tags&&e.hasOwnProperty("tags")){if(!m.isObject(e.tags))return"tags: object expected";for(var r=Object.keys(e.tags),n=0;n<r.length;++n)if(!m.isString(e.tags[r[n]]))return"tags: string{k:string} expected"}if(null!=e.extra&&e.hasOwnProperty("extra")){if(!m.isObject(e.extra))return"extra: object expected";for(r=Object.keys(e.extra),n=0;n<r.length;++n)if(!m.isString(e.extra[r[n]]))return"extra: string{k:string} expected"}return null!=e.ip&&e.hasOwnProperty("ip")&&!m.isString(e.ip)?"ip: string expected":null!=e.country&&e.hasOwnProperty("country")&&!m.isString(e.country)?"country: string expected":null!=e.region&&e.hasOwnProperty("region")&&!m.isString(e.region)?"region: string expected":null!=e.city&&e.hasOwnProperty("city")&&!m.isString(e.city)?"city: string expected":null!=e.latitude&&e.hasOwnProperty("latitude")&&"number"!=typeof e.latitude?"latitude: number expected":null!=e.longitude&&e.hasOwnProperty("longitude")&&"number"!=typeof e.longitude?"longitude: number expected":null!=e.count&&e.hasOwnProperty("count")&&!m.isInteger(e.count)?"count: integer expected":null!=e.hashCode&&e.hasOwnProperty("hashCode")&&!m.isString(e.hashCode)?"hashCode: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.core.Exception)return e;var t=new w.lr.core.Exception;switch(e.exceptionType){case"UNHANDLED_REJECTION":case 0:t.exceptionType=0;break;case"WINDOW":case 1:t.exceptionType=1;break;case"MESSAGE":case 2:t.exceptionType=2;break;case"CONSOLE":case 3:t.exceptionType=3;break;case"ANDROID":case 4:t.exceptionType=4}if(null!=e.errorType&&(t.errorType=String(e.errorType)),null!=e.message){if("object"!=typeof e.message)throw TypeError(".lr.core.Exception.message: object expected");t.message=w.lr.utils.Value.fromObject(e.message)}if(null!=e.release&&(t.release=String(e.release)),null!=e.browserHref&&(t.browserHref=String(e.browserHref)),null!=e.browserUseragent&&(t.browserUseragent=String(e.browserUseragent)),null!=e.userName&&(t.userName=String(e.userName)),null!=e.userEmail&&(t.userEmail=String(e.userEmail)),null!=e.level&&(t.level=String(e.level)),null!=e.logger&&(t.logger=String(e.logger)),e.tags){if("object"!=typeof e.tags)throw TypeError(".lr.core.Exception.tags: object expected");t.tags={};for(var r=Object.keys(e.tags),n=0;n<r.length;++n)t.tags[r[n]]=String(e.tags[r[n]])}if(e.extra){if("object"!=typeof e.extra)throw TypeError(".lr.core.Exception.extra: object expected");for(t.extra={},r=Object.keys(e.extra),n=0;n<r.length;++n)t.extra[r[n]]=String(e.extra[r[n]])}return null!=e.ip&&(t.ip=String(e.ip)),null!=e.country&&(t.country=String(e.country)),null!=e.region&&(t.region=String(e.region)),null!=e.city&&(t.city=String(e.city)),null!=e.latitude&&(t.latitude=Number(e.latitude)),null!=e.longitude&&(t.longitude=Number(e.longitude)),null!=e.count&&(t.count=e.count>>>0),null!=e.hashCode&&(t.hashCode=String(e.hashCode)),t},e.toObject=function(e,t){t||(t={});var r,n={};if((t.objects||t.defaults)&&(n.tags={},n.extra={}),t.defaults&&(n.exceptionType=t.enums===String?"UNHANDLED_REJECTION":0,n.errorType="",n.message=null,n.release="",n.browserHref="",n.browserUseragent="",n.userName="",n.userEmail="",n.level="",n.logger="",n.ip="",n.country="",n.region="",n.city="",n.latitude=0,n.longitude=0,n.count=0,n.hashCode=""),null!=e.exceptionType&&e.hasOwnProperty("exceptionType")&&(n.exceptionType=t.enums===String?w.lr.core.Exception.ExceptionType[e.exceptionType]:e.exceptionType),null!=e.errorType&&e.hasOwnProperty("errorType")&&(n.errorType=e.errorType),null!=e.message&&e.hasOwnProperty("message")&&(n.message=w.lr.utils.Value.toObject(e.message,t)),null!=e.release&&e.hasOwnProperty("release")&&(n.release=e.release),null!=e.browserHref&&e.hasOwnProperty("browserHref")&&(n.browserHref=e.browserHref),null!=e.browserUseragent&&e.hasOwnProperty("browserUseragent")&&(n.browserUseragent=e.browserUseragent),null!=e.userName&&e.hasOwnProperty("userName")&&(n.userName=e.userName),null!=e.userEmail&&e.hasOwnProperty("userEmail")&&(n.userEmail=e.userEmail),null!=e.level&&e.hasOwnProperty("level")&&(n.level=e.level),null!=e.logger&&e.hasOwnProperty("logger")&&(n.logger=e.logger),e.tags&&(r=Object.keys(e.tags)).length){n.tags={};for(var o=0;o<r.length;++o)n.tags[r[o]]=e.tags[r[o]]}if(e.extra&&(r=Object.keys(e.extra)).length)for(n.extra={},o=0;o<r.length;++o)n.extra[r[o]]=e.extra[r[o]];return null!=e.ip&&e.hasOwnProperty("ip")&&(n.ip=e.ip),null!=e.country&&e.hasOwnProperty("country")&&(n.country=e.country),null!=e.region&&e.hasOwnProperty("region")&&(n.region=e.region),null!=e.city&&e.hasOwnProperty("city")&&(n.city=e.city),null!=e.latitude&&e.hasOwnProperty("latitude")&&(n.latitude=t.json&&!isFinite(e.latitude)?String(e.latitude):e.latitude),null!=e.longitude&&e.hasOwnProperty("longitude")&&(n.longitude=t.json&&!isFinite(e.longitude)?String(e.longitude):e.longitude),null!=e.count&&e.hasOwnProperty("count")&&(n.count=e.count),null!=e.hashCode&&e.hasOwnProperty("hashCode")&&(n.hashCode=e.hashCode),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.ExceptionType=(t={},(r=Object.create(t))[t[0]="UNHANDLED_REJECTION"]=0,r[t[1]="WINDOW"]=1,r[t[2]="MESSAGE"]=2,r[t[3]="CONSOLE"]=3,r[t[4]="ANDROID"]=4,r),e}(),o),y.filter=((i={}).ForceMatch=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.id="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.id&&e.hasOwnProperty("id")&&t.uint32(10).string(e.id),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.filter.ForceMatch;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.id=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.id&&e.hasOwnProperty("id")&&!m.isString(e.id)?"id: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.filter.ForceMatch)return e;var t=new w.lr.filter.ForceMatch;return null!=e.id&&(t.id=String(e.id)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.id=""),null!=e.id&&e.hasOwnProperty("id")&&(r.id=e.id),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),i.StartTransaction=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.id="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.id&&e.hasOwnProperty("id")&&t.uint32(10).string(e.id),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.filter.StartTransaction;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.id=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.id&&e.hasOwnProperty("id")&&!m.isString(e.id)?"id: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.filter.StartTransaction)return e;var t=new w.lr.filter.StartTransaction;return null!=e.id&&(t.id=String(e.id)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.id=""),null!=e.id&&e.hasOwnProperty("id")&&(r.id=e.id),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),i.EndTransaction=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.id="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.id&&e.hasOwnProperty("id")&&t.uint32(10).string(e.id),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.filter.EndTransaction;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.id=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.id&&e.hasOwnProperty("id")&&!m.isString(e.id)?"id: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.filter.EndTransaction)return e;var t=new w.lr.filter.EndTransaction;return null!=e.id&&(t.id=String(e.id)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.id=""),null!=e.id&&e.hasOwnProperty("id")&&(r.id=e.id),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),i.Match=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.uuid="",e.prototype.duration=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.uuid&&e.hasOwnProperty("uuid")&&t.uint32(10).string(e.uuid),null!=e.duration&&e.hasOwnProperty("duration")&&t.uint32(17).double(e.duration),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.filter.Match;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.uuid=e.string();break;case 2:n.duration=e.double();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.uuid&&e.hasOwnProperty("uuid")&&!m.isString(e.uuid)?"uuid: string expected":null!=e.duration&&e.hasOwnProperty("duration")&&"number"!=typeof e.duration?"duration: number expected":null},e.fromObject=function(e){if(e instanceof w.lr.filter.Match)return e;var t=new w.lr.filter.Match;return null!=e.uuid&&(t.uuid=String(e.uuid)),null!=e.duration&&(t.duration=Number(e.duration)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.uuid="",r.duration=0),null!=e.uuid&&e.hasOwnProperty("uuid")&&(r.uuid=e.uuid),null!=e.duration&&e.hasOwnProperty("duration")&&(r.duration=t.json&&!isFinite(e.duration)?String(e.duration):e.duration),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),i),y.feedback=((a={}).FeedbackResponse=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.guideID="",e.prototype.stepID="",e.prototype.userFeedback="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.guideID&&e.hasOwnProperty("guideID")&&t.uint32(10).string(e.guideID),null!=e.stepID&&e.hasOwnProperty("stepID")&&t.uint32(18).string(e.stepID),null!=e.userFeedback&&e.hasOwnProperty("userFeedback")&&t.uint32(26).string(e.userFeedback),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.feedback.FeedbackResponse;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.guideID=e.string();break;case 2:n.stepID=e.string();break;case 3:n.userFeedback=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.guideID&&e.hasOwnProperty("guideID")&&!m.isString(e.guideID)?"guideID: string expected":null!=e.stepID&&e.hasOwnProperty("stepID")&&!m.isString(e.stepID)?"stepID: string expected":null!=e.userFeedback&&e.hasOwnProperty("userFeedback")&&!m.isString(e.userFeedback)?"userFeedback: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.feedback.FeedbackResponse)return e;var t=new w.lr.feedback.FeedbackResponse;return null!=e.guideID&&(t.guideID=String(e.guideID)),null!=e.stepID&&(t.stepID=String(e.stepID)),null!=e.userFeedback&&(t.userFeedback=String(e.userFeedback)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.guideID="",r.stepID="",r.userFeedback=""),null!=e.guideID&&e.hasOwnProperty("guideID")&&(r.guideID=e.guideID),null!=e.stepID&&e.hasOwnProperty("stepID")&&(r.stepID=e.stepID),null!=e.userFeedback&&e.hasOwnProperty("userFeedback")&&(r.userFeedback=e.userFeedback),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),a.RatingResponse=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.guideID="",e.prototype.stepID="",e.prototype.rating=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.guideID&&e.hasOwnProperty("guideID")&&t.uint32(10).string(e.guideID),null!=e.stepID&&e.hasOwnProperty("stepID")&&t.uint32(18).string(e.stepID),null!=e.rating&&e.hasOwnProperty("rating")&&t.uint32(24).uint32(e.rating),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.feedback.RatingResponse;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.guideID=e.string();break;case 2:n.stepID=e.string();break;case 3:n.rating=e.uint32();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.guideID&&e.hasOwnProperty("guideID")&&!m.isString(e.guideID)?"guideID: string expected":null!=e.stepID&&e.hasOwnProperty("stepID")&&!m.isString(e.stepID)?"stepID: string expected":null!=e.rating&&e.hasOwnProperty("rating")&&!m.isInteger(e.rating)?"rating: integer expected":null},e.fromObject=function(e){if(e instanceof w.lr.feedback.RatingResponse)return e;var t=new w.lr.feedback.RatingResponse;return null!=e.guideID&&(t.guideID=String(e.guideID)),null!=e.stepID&&(t.stepID=String(e.stepID)),null!=e.rating&&(t.rating=e.rating>>>0),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.guideID="",r.stepID="",r.rating=0),null!=e.guideID&&e.hasOwnProperty("guideID")&&(r.guideID=e.guideID),null!=e.stepID&&e.hasOwnProperty("stepID")&&(r.stepID=e.stepID),null!=e.rating&&e.hasOwnProperty("rating")&&(r.rating=e.rating),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),a),y.guide=((s={}).GuideStepStart=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.guideID="",e.prototype.stepID="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.guideID&&e.hasOwnProperty("guideID")&&t.uint32(10).string(e.guideID),null!=e.stepID&&e.hasOwnProperty("stepID")&&t.uint32(18).string(e.stepID),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.guide.GuideStepStart;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.guideID=e.string();break;case 2:n.stepID=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.guideID&&e.hasOwnProperty("guideID")&&!m.isString(e.guideID)?"guideID: string expected":null!=e.stepID&&e.hasOwnProperty("stepID")&&!m.isString(e.stepID)?"stepID: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.guide.GuideStepStart)return e;var t=new w.lr.guide.GuideStepStart;return null!=e.guideID&&(t.guideID=String(e.guideID)),null!=e.stepID&&(t.stepID=String(e.stepID)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.guideID="",r.stepID=""),null!=e.guideID&&e.hasOwnProperty("guideID")&&(r.guideID=e.guideID),null!=e.stepID&&e.hasOwnProperty("stepID")&&(r.stepID=e.stepID),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),s.GuideStepEnd=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.guideID="",e.prototype.stepID="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.guideID&&e.hasOwnProperty("guideID")&&t.uint32(10).string(e.guideID),null!=e.stepID&&e.hasOwnProperty("stepID")&&t.uint32(18).string(e.stepID),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.guide.GuideStepEnd;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.guideID=e.string();break;case 2:n.stepID=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.guideID&&e.hasOwnProperty("guideID")&&!m.isString(e.guideID)?"guideID: string expected":null!=e.stepID&&e.hasOwnProperty("stepID")&&!m.isString(e.stepID)?"stepID: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.guide.GuideStepEnd)return e;var t=new w.lr.guide.GuideStepEnd;return null!=e.guideID&&(t.guideID=String(e.guideID)),null!=e.stepID&&(t.stepID=String(e.stepID)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.guideID="",r.stepID=""),null!=e.guideID&&e.hasOwnProperty("guideID")&&(r.guideID=e.guideID),null!=e.stepID&&e.hasOwnProperty("stepID")&&(r.stepID=e.stepID),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),s),y.network=((c={}).MethodType=(u={},(l=Object.create(u))[u[0]="GET"]=0,l[u[1]="HEAD"]=1,l[u[2]="POST"]=2,l[u[3]="PUT"]=3,l[u[4]="DELETE"]=4,l[u[5]="CONNECT"]=5,l[u[6]="OPTIONS"]=6,l[u[7]="TRACE"]=7,l[u[8]="PATCH"]=8,l),c.RequestEvent=function(){function e(e){if(this.headers={},e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.reqId="",e.prototype.url="",e.prototype.headers=m.emptyObject,e.prototype.body=null,e.prototype.method=0,e.prototype.referrer="",e.prototype.mode="",e.prototype.credentials="",e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.reqId&&e.hasOwnProperty("reqId")&&t.uint32(10).string(e.reqId),null!=e.url&&e.hasOwnProperty("url")&&t.uint32(18).string(e.url),null!=e.headers&&e.hasOwnProperty("headers"))for(var r=Object.keys(e.headers),n=0;n<r.length;++n)t.uint32(26).fork().uint32(10).string(r[n]).uint32(18).string(e.headers[r[n]]).ldelim();return null!=e.body&&e.hasOwnProperty("body")&&w.lr.utils.Value.encode(e.body,t.uint32(34).fork()).ldelim(),null!=e.method&&e.hasOwnProperty("method")&&t.uint32(40).int32(e.method),null!=e.referrer&&e.hasOwnProperty("referrer")&&t.uint32(50).string(e.referrer),null!=e.mode&&e.hasOwnProperty("mode")&&t.uint32(58).string(e.mode),null!=e.credentials&&e.hasOwnProperty("credentials")&&t.uint32(66).string(e.credentials),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r,n=void 0===t?e.len:e.pos+t,o=new w.lr.network.RequestEvent;e.pos<n;){var i=e.uint32();switch(i>>>3){case 1:o.reqId=e.string();break;case 2:o.url=e.string();break;case 3:e.skip().pos++,o.headers===m.emptyObject&&(o.headers={}),r=e.string(),e.pos++,o.headers[r]=e.string();break;case 4:o.body=w.lr.utils.Value.decode(e,e.uint32());break;case 5:o.method=e.int32();break;case 6:o.referrer=e.string();break;case 7:o.mode=e.string();break;case 8:o.credentials=e.string();break;default:e.skipType(7&i)}}return o},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.reqId&&e.hasOwnProperty("reqId")&&!m.isString(e.reqId))return"reqId: string expected";if(null!=e.url&&e.hasOwnProperty("url")&&!m.isString(e.url))return"url: string expected";if(null!=e.headers&&e.hasOwnProperty("headers")){if(!m.isObject(e.headers))return"headers: object expected";for(var t=Object.keys(e.headers),r=0;r<t.length;++r)if(!m.isString(e.headers[t[r]]))return"headers: string{k:string} expected"}if(null!=e.body&&e.hasOwnProperty("body")){var n=w.lr.utils.Value.verify(e.body);if(n)return"body."+n}if(null!=e.method&&e.hasOwnProperty("method"))switch(e.method){default:return"method: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:}return null!=e.referrer&&e.hasOwnProperty("referrer")&&!m.isString(e.referrer)?"referrer: string expected":null!=e.mode&&e.hasOwnProperty("mode")&&!m.isString(e.mode)?"mode: string expected":null!=e.credentials&&e.hasOwnProperty("credentials")&&!m.isString(e.credentials)?"credentials: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.network.RequestEvent)return e;var t=new w.lr.network.RequestEvent;if(null!=e.reqId&&(t.reqId=String(e.reqId)),null!=e.url&&(t.url=String(e.url)),e.headers){if("object"!=typeof e.headers)throw TypeError(".lr.network.RequestEvent.headers: object expected");t.headers={};for(var r=Object.keys(e.headers),n=0;n<r.length;++n)t.headers[r[n]]=String(e.headers[r[n]])}if(null!=e.body){if("object"!=typeof e.body)throw TypeError(".lr.network.RequestEvent.body: object expected");t.body=w.lr.utils.Value.fromObject(e.body)}switch(e.method){case"GET":case 0:t.method=0;break;case"HEAD":case 1:t.method=1;break;case"POST":case 2:t.method=2;break;case"PUT":case 3:t.method=3;break;case"DELETE":case 4:t.method=4;break;case"CONNECT":case 5:t.method=5;break;case"OPTIONS":case 6:t.method=6;break;case"TRACE":case 7:t.method=7;break;case"PATCH":case 8:t.method=8}return null!=e.referrer&&(t.referrer=String(e.referrer)),null!=e.mode&&(t.mode=String(e.mode)),null!=e.credentials&&(t.credentials=String(e.credentials)),t},e.toObject=function(e,t){t||(t={});var r,n={};if((t.objects||t.defaults)&&(n.headers={}),t.defaults&&(n.reqId="",n.url="",n.body=null,n.method=t.enums===String?"GET":0,n.referrer="",n.mode="",n.credentials=""),null!=e.reqId&&e.hasOwnProperty("reqId")&&(n.reqId=e.reqId),null!=e.url&&e.hasOwnProperty("url")&&(n.url=e.url),e.headers&&(r=Object.keys(e.headers)).length){n.headers={};for(var o=0;o<r.length;++o)n.headers[r[o]]=e.headers[r[o]]}return null!=e.body&&e.hasOwnProperty("body")&&(n.body=w.lr.utils.Value.toObject(e.body,t)),null!=e.method&&e.hasOwnProperty("method")&&(n.method=t.enums===String?w.lr.network.MethodType[e.method]:e.method),null!=e.referrer&&e.hasOwnProperty("referrer")&&(n.referrer=e.referrer),null!=e.mode&&e.hasOwnProperty("mode")&&(n.mode=e.mode),null!=e.credentials&&e.hasOwnProperty("credentials")&&(n.credentials=e.credentials),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),c.ResponseEvent=function(){function e(e){if(this.headers={},e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.reqId="",e.prototype.status=0,e.prototype.headers=m.emptyObject,e.prototype.body=null,e.prototype.url="",e.prototype.count=0,e.prototype.release="",e.prototype.browserUseragent="",e.prototype.userName="",e.prototype.userEmail="",e.prototype.ip="",e.prototype.method=0,e.prototype.duration=0,e.prototype.operationName="",e.prototype.operationType="",e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.reqId&&e.hasOwnProperty("reqId")&&t.uint32(10).string(e.reqId),null!=e.status&&e.hasOwnProperty("status")&&t.uint32(16).uint32(e.status),null!=e.headers&&e.hasOwnProperty("headers"))for(var r=Object.keys(e.headers),n=0;n<r.length;++n)t.uint32(26).fork().uint32(10).string(r[n]).uint32(18).string(e.headers[r[n]]).ldelim();return null!=e.body&&e.hasOwnProperty("body")&&w.lr.utils.Value.encode(e.body,t.uint32(34).fork()).ldelim(),null!=e.url&&e.hasOwnProperty("url")&&t.uint32(42).string(e.url),null!=e.count&&e.hasOwnProperty("count")&&t.uint32(48).uint32(e.count),null!=e.release&&e.hasOwnProperty("release")&&t.uint32(58).string(e.release),null!=e.browserUseragent&&e.hasOwnProperty("browserUseragent")&&t.uint32(66).string(e.browserUseragent),null!=e.userName&&e.hasOwnProperty("userName")&&t.uint32(74).string(e.userName),null!=e.userEmail&&e.hasOwnProperty("userEmail")&&t.uint32(82).string(e.userEmail),null!=e.ip&&e.hasOwnProperty("ip")&&t.uint32(90).string(e.ip),null!=e.method&&e.hasOwnProperty("method")&&t.uint32(96).int32(e.method),null!=e.duration&&e.hasOwnProperty("duration")&&t.uint32(105).double(e.duration),null!=e.operationName&&e.hasOwnProperty("operationName")&&t.uint32(114).string(e.operationName),null!=e.operationType&&e.hasOwnProperty("operationType")&&t.uint32(122).string(e.operationType),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r,n=void 0===t?e.len:e.pos+t,o=new w.lr.network.ResponseEvent;e.pos<n;){var i=e.uint32();switch(i>>>3){case 1:o.reqId=e.string();break;case 2:o.status=e.uint32();break;case 3:e.skip().pos++,o.headers===m.emptyObject&&(o.headers={}),r=e.string(),e.pos++,o.headers[r]=e.string();break;case 4:o.body=w.lr.utils.Value.decode(e,e.uint32());break;case 5:o.url=e.string();break;case 6:o.count=e.uint32();break;case 7:o.release=e.string();break;case 8:o.browserUseragent=e.string();break;case 9:o.userName=e.string();break;case 10:o.userEmail=e.string();break;case 11:o.ip=e.string();break;case 12:o.method=e.int32();break;case 13:o.duration=e.double();break;case 14:o.operationName=e.string();break;case 15:o.operationType=e.string();break;default:e.skipType(7&i)}}return o},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.reqId&&e.hasOwnProperty("reqId")&&!m.isString(e.reqId))return"reqId: string expected";if(null!=e.status&&e.hasOwnProperty("status")&&!m.isInteger(e.status))return"status: integer expected";if(null!=e.headers&&e.hasOwnProperty("headers")){if(!m.isObject(e.headers))return"headers: object expected";for(var t=Object.keys(e.headers),r=0;r<t.length;++r)if(!m.isString(e.headers[t[r]]))return"headers: string{k:string} expected"}if(null!=e.body&&e.hasOwnProperty("body")){var n=w.lr.utils.Value.verify(e.body);if(n)return"body."+n}if(null!=e.url&&e.hasOwnProperty("url")&&!m.isString(e.url))return"url: string expected";if(null!=e.count&&e.hasOwnProperty("count")&&!m.isInteger(e.count))return"count: integer expected";if(null!=e.release&&e.hasOwnProperty("release")&&!m.isString(e.release))return"release: string expected";if(null!=e.browserUseragent&&e.hasOwnProperty("browserUseragent")&&!m.isString(e.browserUseragent))return"browserUseragent: string expected";if(null!=e.userName&&e.hasOwnProperty("userName")&&!m.isString(e.userName))return"userName: string expected";if(null!=e.userEmail&&e.hasOwnProperty("userEmail")&&!m.isString(e.userEmail))return"userEmail: string expected";if(null!=e.ip&&e.hasOwnProperty("ip")&&!m.isString(e.ip))return"ip: string expected";if(null!=e.method&&e.hasOwnProperty("method"))switch(e.method){default:return"method: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:}return null!=e.duration&&e.hasOwnProperty("duration")&&"number"!=typeof e.duration?"duration: number expected":null!=e.operationName&&e.hasOwnProperty("operationName")&&!m.isString(e.operationName)?"operationName: string expected":null!=e.operationType&&e.hasOwnProperty("operationType")&&!m.isString(e.operationType)?"operationType: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.network.ResponseEvent)return e;var t=new w.lr.network.ResponseEvent;if(null!=e.reqId&&(t.reqId=String(e.reqId)),null!=e.status&&(t.status=e.status>>>0),e.headers){if("object"!=typeof e.headers)throw TypeError(".lr.network.ResponseEvent.headers: object expected");t.headers={};for(var r=Object.keys(e.headers),n=0;n<r.length;++n)t.headers[r[n]]=String(e.headers[r[n]])}if(null!=e.body){if("object"!=typeof e.body)throw TypeError(".lr.network.ResponseEvent.body: object expected");t.body=w.lr.utils.Value.fromObject(e.body)}switch(null!=e.url&&(t.url=String(e.url)),null!=e.count&&(t.count=e.count>>>0),null!=e.release&&(t.release=String(e.release)),null!=e.browserUseragent&&(t.browserUseragent=String(e.browserUseragent)),null!=e.userName&&(t.userName=String(e.userName)),null!=e.userEmail&&(t.userEmail=String(e.userEmail)),null!=e.ip&&(t.ip=String(e.ip)),e.method){case"GET":case 0:t.method=0;break;case"HEAD":case 1:t.method=1;break;case"POST":case 2:t.method=2;break;case"PUT":case 3:t.method=3;break;case"DELETE":case 4:t.method=4;break;case"CONNECT":case 5:t.method=5;break;case"OPTIONS":case 6:t.method=6;break;case"TRACE":case 7:t.method=7;break;case"PATCH":case 8:t.method=8}return null!=e.duration&&(t.duration=Number(e.duration)),null!=e.operationName&&(t.operationName=String(e.operationName)),null!=e.operationType&&(t.operationType=String(e.operationType)),t},e.toObject=function(e,t){t||(t={});var r,n={};if((t.objects||t.defaults)&&(n.headers={}),t.defaults&&(n.reqId="",n.status=0,n.body=null,n.url="",n.count=0,n.release="",n.browserUseragent="",n.userName="",n.userEmail="",n.ip="",n.method=t.enums===String?"GET":0,n.duration=0,n.operationName="",n.operationType=""),null!=e.reqId&&e.hasOwnProperty("reqId")&&(n.reqId=e.reqId),null!=e.status&&e.hasOwnProperty("status")&&(n.status=e.status),e.headers&&(r=Object.keys(e.headers)).length){n.headers={};for(var o=0;o<r.length;++o)n.headers[r[o]]=e.headers[r[o]]}return null!=e.body&&e.hasOwnProperty("body")&&(n.body=w.lr.utils.Value.toObject(e.body,t)),null!=e.url&&e.hasOwnProperty("url")&&(n.url=e.url),null!=e.count&&e.hasOwnProperty("count")&&(n.count=e.count),null!=e.release&&e.hasOwnProperty("release")&&(n.release=e.release),null!=e.browserUseragent&&e.hasOwnProperty("browserUseragent")&&(n.browserUseragent=e.browserUseragent),null!=e.userName&&e.hasOwnProperty("userName")&&(n.userName=e.userName),null!=e.userEmail&&e.hasOwnProperty("userEmail")&&(n.userEmail=e.userEmail),null!=e.ip&&e.hasOwnProperty("ip")&&(n.ip=e.ip),null!=e.method&&e.hasOwnProperty("method")&&(n.method=t.enums===String?w.lr.network.MethodType[e.method]:e.method),null!=e.duration&&e.hasOwnProperty("duration")&&(n.duration=t.json&&!isFinite(e.duration)?String(e.duration):e.duration),null!=e.operationName&&e.hasOwnProperty("operationName")&&(n.operationName=e.operationName),null!=e.operationType&&e.hasOwnProperty("operationType")&&(n.operationType=e.operationType),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),c.PerfResourceEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.url="",e.prototype.startTime=0,e.prototype.duration=0,e.prototype.initiatorType=0,e.prototype.status=0,e.prototype.failed=!1,e.prototype.transferSize=m.Long?m.Long.fromBits(0,0,!0):0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.url&&e.hasOwnProperty("url")&&t.uint32(10).string(e.url),null!=e.startTime&&e.hasOwnProperty("startTime")&&t.uint32(17).double(e.startTime),null!=e.duration&&e.hasOwnProperty("duration")&&t.uint32(25).double(e.duration),null!=e.initiatorType&&e.hasOwnProperty("initiatorType")&&t.uint32(32).int32(e.initiatorType),null!=e.status&&e.hasOwnProperty("status")&&t.uint32(40).uint32(e.status),null!=e.failed&&e.hasOwnProperty("failed")&&t.uint32(48).bool(e.failed),null!=e.transferSize&&e.hasOwnProperty("transferSize")&&t.uint32(56).uint64(e.transferSize),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.network.PerfResourceEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.url=e.string();break;case 2:n.startTime=e.double();break;case 3:n.duration=e.double();break;case 4:n.initiatorType=e.int32();break;case 5:n.status=e.uint32();break;case 6:n.failed=e.bool();break;case 7:n.transferSize=e.uint64();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.url&&e.hasOwnProperty("url")&&!m.isString(e.url))return"url: string expected";if(null!=e.startTime&&e.hasOwnProperty("startTime")&&"number"!=typeof e.startTime)return"startTime: number expected";if(null!=e.duration&&e.hasOwnProperty("duration")&&"number"!=typeof e.duration)return"duration: number expected";if(null!=e.initiatorType&&e.hasOwnProperty("initiatorType"))switch(e.initiatorType){default:return"initiatorType: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:}return null!=e.status&&e.hasOwnProperty("status")&&!m.isInteger(e.status)?"status: integer expected":null!=e.failed&&e.hasOwnProperty("failed")&&"boolean"!=typeof e.failed?"failed: boolean expected":null!=e.transferSize&&e.hasOwnProperty("transferSize")&&!(m.isInteger(e.transferSize)||e.transferSize&&m.isInteger(e.transferSize.low)&&m.isInteger(e.transferSize.high))?"transferSize: integer|Long expected":null},e.fromObject=function(e){if(e instanceof w.lr.network.PerfResourceEvent)return e;var t=new w.lr.network.PerfResourceEvent;switch(null!=e.url&&(t.url=String(e.url)),null!=e.startTime&&(t.startTime=Number(e.startTime)),null!=e.duration&&(t.duration=Number(e.duration)),e.initiatorType){case"LINK":case 0:t.initiatorType=0;break;case"SCRIPT":case 1:t.initiatorType=1;break;case"CSS":case 2:t.initiatorType=2;break;case"IMG":case 3:t.initiatorType=3;break;case"IMAGE":case 4:t.initiatorType=4;break;case"OTHER":case 5:t.initiatorType=5;break;case"NAVIGATION":case 6:t.initiatorType=6;break;case"TRACK":case 7:t.initiatorType=7}return null!=e.status&&(t.status=e.status>>>0),null!=e.failed&&(t.failed=Boolean(e.failed)),null!=e.transferSize&&(m.Long?(t.transferSize=m.Long.fromValue(e.transferSize)).unsigned=!0:"string"==typeof e.transferSize?t.transferSize=parseInt(e.transferSize,10):"number"==typeof e.transferSize?t.transferSize=e.transferSize:"object"==typeof e.transferSize&&(t.transferSize=new m.LongBits(e.transferSize.low>>>0,e.transferSize.high>>>0).toNumber(!0))),t},e.toObject=function(e,t){t||(t={});var r={};if(t.defaults)if(r.url="",r.startTime=0,r.duration=0,r.initiatorType=t.enums===String?"LINK":0,r.status=0,r.failed=!1,m.Long){var n=new m.Long(0,0,!0);r.transferSize=t.longs===String?n.toString():t.longs===Number?n.toNumber():n}else r.transferSize=t.longs===String?"0":0;return null!=e.url&&e.hasOwnProperty("url")&&(r.url=e.url),null!=e.startTime&&e.hasOwnProperty("startTime")&&(r.startTime=t.json&&!isFinite(e.startTime)?String(e.startTime):e.startTime),null!=e.duration&&e.hasOwnProperty("duration")&&(r.duration=t.json&&!isFinite(e.duration)?String(e.duration):e.duration),null!=e.initiatorType&&e.hasOwnProperty("initiatorType")&&(r.initiatorType=t.enums===String?w.lr.network.PerfResourceEvent.InitiatorType[e.initiatorType]:e.initiatorType),null!=e.status&&e.hasOwnProperty("status")&&(r.status=e.status),null!=e.failed&&e.hasOwnProperty("failed")&&(r.failed=e.failed),null!=e.transferSize&&e.hasOwnProperty("transferSize")&&("number"==typeof e.transferSize?r.transferSize=t.longs===String?String(e.transferSize):e.transferSize:r.transferSize=t.longs===String?m.Long.prototype.toString.call(e.transferSize):t.longs===Number?new m.LongBits(e.transferSize.low>>>0,e.transferSize.high>>>0).toNumber(!0):e.transferSize),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.InitiatorType=function(){var e={},t=Object.create(e);return t[e[0]="LINK"]=0,t[e[1]="SCRIPT"]=1,t[e[2]="CSS"]=2,t[e[3]="IMG"]=3,t[e[4]="IMAGE"]=4,t[e[5]="OTHER"]=5,t[e[6]="NAVIGATION"]=6,t[e[7]="TRACK"]=7,t}(),e}(),c.NetworkStatusEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.online=!1,e.prototype.effectiveType=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.online&&e.hasOwnProperty("online")&&t.uint32(8).bool(e.online),null!=e.effectiveType&&e.hasOwnProperty("effectiveType")&&t.uint32(16).int32(e.effectiveType),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.network.NetworkStatusEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.online=e.bool();break;case 2:n.effectiveType=e.int32();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.online&&e.hasOwnProperty("online")&&"boolean"!=typeof e.online)return"online: boolean expected";if(null!=e.effectiveType&&e.hasOwnProperty("effectiveType"))switch(e.effectiveType){default:return"effectiveType: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:}return null},e.fromObject=function(e){if(e instanceof w.lr.network.NetworkStatusEvent)return e;var t=new w.lr.network.NetworkStatusEvent;switch(null!=e.online&&(t.online=Boolean(e.online)),e.effectiveType){case"UNKNOWN":case 0:t.effectiveType=0;break;case"NONE":case 1:t.effectiveType=1;break;case"SLOW2G":case 2:t.effectiveType=2;break;case"TWOG":case 3:t.effectiveType=3;break;case"THREEG":case 4:t.effectiveType=4;break;case"FOURG":case 5:t.effectiveType=5}return t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.online=!1,r.effectiveType=t.enums===String?"UNKNOWN":0),null!=e.online&&e.hasOwnProperty("online")&&(r.online=e.online),null!=e.effectiveType&&e.hasOwnProperty("effectiveType")&&(r.effectiveType=t.enums===String?w.lr.network.NetworkStatusEvent.EffectiveType[e.effectiveType]:e.effectiveType),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.EffectiveType=function(){var e={},t=Object.create(e);return t[e[0]="UNKNOWN"]=0,t[e[1]="NONE"]=1,t[e[2]="SLOW2G"]=2,t[e[3]="TWOG"]=3,t[e[4]="THREEG"]=4,t[e[5]="FOURG"]=5,t}(),e}(),c),y.browser=((f={}).LoadEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}var t;return e.prototype.DOM=!1,e.prototype.load=!1,Object.defineProperty(e.prototype,"type",{get:m.oneOfGetter(t=["DOM","load"]),set:m.oneOfSetter(t)}),e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.DOM&&e.hasOwnProperty("DOM")&&t.uint32(8).bool(e.DOM),null!=e.load&&e.hasOwnProperty("load")&&t.uint32(16).bool(e.load),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.LoadEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.DOM=e.bool();break;case 2:n.load=e.bool();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";var t={};if(null!=e.DOM&&e.hasOwnProperty("DOM")&&(t.type=1,"boolean"!=typeof e.DOM))return"DOM: boolean expected";if(null!=e.load&&e.hasOwnProperty("load")){if(1===t.type)return"type: multiple values";if(t.type=1,"boolean"!=typeof e.load)return"load: boolean expected"}return null},e.fromObject=function(e){if(e instanceof w.lr.browser.LoadEvent)return e;var t=new w.lr.browser.LoadEvent;return null!=e.DOM&&(t.DOM=Boolean(e.DOM)),null!=e.load&&(t.load=Boolean(e.load)),t},e.toObject=function(e,t){t||(t={});var r={};return null!=e.DOM&&e.hasOwnProperty("DOM")&&(r.DOM=e.DOM,t.oneofs&&(r.type="DOM")),null!=e.load&&e.hasOwnProperty("load")&&(r.load=e.load,t.oneofs&&(r.type="load")),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),f.UnloadEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.time=0,e.prototype.sessionID=0,e.prototype.tabID="",e.prototype.threadID=0,e.prototype.seqID=0,e.prototype.startTime=0,e.prototype.activityPings=0,e.prototype.eventCount=0,e.prototype.pendingReadFailed=!1,e.prototype.pendingEventCount=0,e.prototype.pendingSeqID=0,e.prototype.didSkipSerializingEvents=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.time&&e.hasOwnProperty("time")&&t.uint32(9).double(e.time),null!=e.sessionID&&e.hasOwnProperty("sessionID")&&t.uint32(16).uint32(e.sessionID),null!=e.tabID&&e.hasOwnProperty("tabID")&&t.uint32(26).string(e.tabID),null!=e.threadID&&e.hasOwnProperty("threadID")&&t.uint32(32).uint32(e.threadID),null!=e.seqID&&e.hasOwnProperty("seqID")&&t.uint32(40).uint32(e.seqID),null!=e.startTime&&e.hasOwnProperty("startTime")&&t.uint32(49).double(e.startTime),null!=e.activityPings&&e.hasOwnProperty("activityPings")&&t.uint32(56).uint32(e.activityPings),null!=e.eventCount&&e.hasOwnProperty("eventCount")&&t.uint32(64).uint32(e.eventCount),null!=e.pendingReadFailed&&e.hasOwnProperty("pendingReadFailed")&&t.uint32(72).bool(e.pendingReadFailed),null!=e.pendingEventCount&&e.hasOwnProperty("pendingEventCount")&&t.uint32(80).int32(e.pendingEventCount),null!=e.pendingSeqID&&e.hasOwnProperty("pendingSeqID")&&t.uint32(88).int32(e.pendingSeqID),null!=e.didSkipSerializingEvents&&e.hasOwnProperty("didSkipSerializingEvents")&&t.uint32(96).bool(e.didSkipSerializingEvents),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.UnloadEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.time=e.double();break;case 2:n.sessionID=e.uint32();break;case 3:n.tabID=e.string();break;case 4:n.threadID=e.uint32();break;case 5:n.seqID=e.uint32();break;case 6:n.startTime=e.double();break;case 7:n.activityPings=e.uint32();break;case 8:n.eventCount=e.uint32();break;case 9:n.pendingReadFailed=e.bool();break;case 10:n.pendingEventCount=e.int32();break;case 11:n.pendingSeqID=e.int32();break;case 12:n.didSkipSerializingEvents=e.bool();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.time&&e.hasOwnProperty("time")&&"number"!=typeof e.time?"time: number expected":null!=e.sessionID&&e.hasOwnProperty("sessionID")&&!m.isInteger(e.sessionID)?"sessionID: integer expected":null!=e.tabID&&e.hasOwnProperty("tabID")&&!m.isString(e.tabID)?"tabID: string expected":null!=e.threadID&&e.hasOwnProperty("threadID")&&!m.isInteger(e.threadID)?"threadID: integer expected":null!=e.seqID&&e.hasOwnProperty("seqID")&&!m.isInteger(e.seqID)?"seqID: integer expected":null!=e.startTime&&e.hasOwnProperty("startTime")&&"number"!=typeof e.startTime?"startTime: number expected":null!=e.activityPings&&e.hasOwnProperty("activityPings")&&!m.isInteger(e.activityPings)?"activityPings: integer expected":null!=e.eventCount&&e.hasOwnProperty("eventCount")&&!m.isInteger(e.eventCount)?"eventCount: integer expected":null!=e.pendingReadFailed&&e.hasOwnProperty("pendingReadFailed")&&"boolean"!=typeof e.pendingReadFailed?"pendingReadFailed: boolean expected":null!=e.pendingEventCount&&e.hasOwnProperty("pendingEventCount")&&!m.isInteger(e.pendingEventCount)?"pendingEventCount: integer expected":null!=e.pendingSeqID&&e.hasOwnProperty("pendingSeqID")&&!m.isInteger(e.pendingSeqID)?"pendingSeqID: integer expected":null!=e.didSkipSerializingEvents&&e.hasOwnProperty("didSkipSerializingEvents")&&"boolean"!=typeof e.didSkipSerializingEvents?"didSkipSerializingEvents: boolean expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.UnloadEvent)return e;var t=new w.lr.browser.UnloadEvent;return null!=e.time&&(t.time=Number(e.time)),null!=e.sessionID&&(t.sessionID=e.sessionID>>>0),null!=e.tabID&&(t.tabID=String(e.tabID)),null!=e.threadID&&(t.threadID=e.threadID>>>0),null!=e.seqID&&(t.seqID=e.seqID>>>0),null!=e.startTime&&(t.startTime=Number(e.startTime)),null!=e.activityPings&&(t.activityPings=e.activityPings>>>0),null!=e.eventCount&&(t.eventCount=e.eventCount>>>0),null!=e.pendingReadFailed&&(t.pendingReadFailed=Boolean(e.pendingReadFailed)),null!=e.pendingEventCount&&(t.pendingEventCount=0|e.pendingEventCount),null!=e.pendingSeqID&&(t.pendingSeqID=0|e.pendingSeqID),null!=e.didSkipSerializingEvents&&(t.didSkipSerializingEvents=Boolean(e.didSkipSerializingEvents)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.time=0,r.sessionID=0,r.tabID="",r.threadID=0,r.seqID=0,r.startTime=0,r.activityPings=0,r.eventCount=0,r.pendingReadFailed=!1,r.pendingEventCount=0,r.pendingSeqID=0,r.didSkipSerializingEvents=!1),null!=e.time&&e.hasOwnProperty("time")&&(r.time=t.json&&!isFinite(e.time)?String(e.time):e.time),null!=e.sessionID&&e.hasOwnProperty("sessionID")&&(r.sessionID=e.sessionID),null!=e.tabID&&e.hasOwnProperty("tabID")&&(r.tabID=e.tabID),null!=e.threadID&&e.hasOwnProperty("threadID")&&(r.threadID=e.threadID),null!=e.seqID&&e.hasOwnProperty("seqID")&&(r.seqID=e.seqID),null!=e.startTime&&e.hasOwnProperty("startTime")&&(r.startTime=t.json&&!isFinite(e.startTime)?String(e.startTime):e.startTime),null!=e.activityPings&&e.hasOwnProperty("activityPings")&&(r.activityPings=e.activityPings),null!=e.eventCount&&e.hasOwnProperty("eventCount")&&(r.eventCount=e.eventCount),null!=e.pendingReadFailed&&e.hasOwnProperty("pendingReadFailed")&&(r.pendingReadFailed=e.pendingReadFailed),null!=e.pendingEventCount&&e.hasOwnProperty("pendingEventCount")&&(r.pendingEventCount=e.pendingEventCount),null!=e.pendingSeqID&&e.hasOwnProperty("pendingSeqID")&&(r.pendingSeqID=e.pendingSeqID),null!=e.didSkipSerializingEvents&&e.hasOwnProperty("didSkipSerializingEvents")&&(r.didSkipSerializingEvents=e.didSkipSerializingEvents),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),f.NavigationEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.href="",e.prototype.navigationType=0,e.prototype.perfNow=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.href&&e.hasOwnProperty("href")&&t.uint32(10).string(e.href),null!=e.navigationType&&e.hasOwnProperty("navigationType")&&t.uint32(16).int32(e.navigationType),null!=e.perfNow&&e.hasOwnProperty("perfNow")&&t.uint32(25).double(e.perfNow),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.NavigationEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.href=e.string();break;case 2:n.navigationType=e.int32();break;case 3:n.perfNow=e.double();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.href&&e.hasOwnProperty("href")&&!m.isString(e.href))return"href: string expected";if(null!=e.navigationType&&e.hasOwnProperty("navigationType"))switch(e.navigationType){default:return"navigationType: enum value expected";case 0:case 1:case 2:case 3:}return null!=e.perfNow&&e.hasOwnProperty("perfNow")&&"number"!=typeof e.perfNow?"perfNow: number expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.NavigationEvent)return e;var t=new w.lr.browser.NavigationEvent;switch(null!=e.href&&(t.href=String(e.href)),e.navigationType){case"PAGE_LOAD":case 0:t.navigationType=0;break;case"POP_STATE":case 1:t.navigationType=1;break;case"PUSH_STATE":case 2:t.navigationType=2;break;case"REPLACE_STATE":case 3:t.navigationType=3}return null!=e.perfNow&&(t.perfNow=Number(e.perfNow)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.href="",r.navigationType=t.enums===String?"PAGE_LOAD":0,r.perfNow=0),null!=e.href&&e.hasOwnProperty("href")&&(r.href=e.href),null!=e.navigationType&&e.hasOwnProperty("navigationType")&&(r.navigationType=t.enums===String?w.lr.browser.NavigationEvent.NavigationType[e.navigationType]:e.navigationType),null!=e.perfNow&&e.hasOwnProperty("perfNow")&&(r.perfNow=t.json&&!isFinite(e.perfNow)?String(e.perfNow):e.perfNow),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.NavigationType=function(){var e={},t=Object.create(e);return t[e[0]="PAGE_LOAD"]=0,t[e[1]="POP_STATE"]=1,t[e[2]="PUSH_STATE"]=2,t[e[3]="REPLACE_STATE"]=3,t}(),e}(),f.KeypressEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.key="",e.prototype.domTarget="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.key&&e.hasOwnProperty("key")&&t.uint32(10).string(e.key),null!=e.domTarget&&e.hasOwnProperty("domTarget")&&t.uint32(18).string(e.domTarget),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.KeypressEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.key=e.string();break;case 2:n.domTarget=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.key&&e.hasOwnProperty("key")&&!m.isString(e.key)?"key: string expected":null!=e.domTarget&&e.hasOwnProperty("domTarget")&&!m.isString(e.domTarget)?"domTarget: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.KeypressEvent)return e;var t=new w.lr.browser.KeypressEvent;return null!=e.key&&(t.key=String(e.key)),null!=e.domTarget&&(t.domTarget=String(e.domTarget)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.key="",r.domTarget=""),null!=e.key&&e.hasOwnProperty("key")&&(r.key=e.key),null!=e.domTarget&&e.hasOwnProperty("domTarget")&&(r.domTarget=e.domTarget),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),f.InputEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.nodeId=0,e.prototype.text="",e.prototype.isChecked=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&t.uint32(8).uint32(e.nodeId),null!=e.text&&e.hasOwnProperty("text")&&t.uint32(18).string(e.text),null!=e.isChecked&&e.hasOwnProperty("isChecked")&&t.uint32(24).bool(e.isChecked),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.InputEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.nodeId=e.uint32();break;case 2:n.text=e.string();break;case 3:n.isChecked=e.bool();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.nodeId&&e.hasOwnProperty("nodeId")&&!m.isInteger(e.nodeId)?"nodeId: integer expected":null!=e.text&&e.hasOwnProperty("text")&&!m.isString(e.text)?"text: string expected":null!=e.isChecked&&e.hasOwnProperty("isChecked")&&"boolean"!=typeof e.isChecked?"isChecked: boolean expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.InputEvent)return e;var t=new w.lr.browser.InputEvent;return null!=e.nodeId&&(t.nodeId=e.nodeId>>>0),null!=e.text&&(t.text=String(e.text)),null!=e.isChecked&&(t.isChecked=Boolean(e.isChecked)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.nodeId=0,r.text="",r.isChecked=!1),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&(r.nodeId=e.nodeId),null!=e.text&&e.hasOwnProperty("text")&&(r.text=e.text),null!=e.isChecked&&e.hasOwnProperty("isChecked")&&(r.isChecked=e.isChecked),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),f.Selector=function(){function e(e){if(this.classList=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.nodeName="",e.prototype.id="",e.prototype.classList=m.emptyArray,e.prototype.nthChild=0,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.nodeName&&e.hasOwnProperty("nodeName")&&t.uint32(10).string(e.nodeName),null!=e.id&&e.hasOwnProperty("id")&&t.uint32(18).string(e.id),null!=e.classList&&e.classList.length)for(var r=0;r<e.classList.length;++r)t.uint32(26).string(e.classList[r]);return null!=e.nthChild&&e.hasOwnProperty("nthChild")&&t.uint32(32).int32(e.nthChild),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.Selector;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.nodeName=e.string();break;case 2:n.id=e.string();break;case 3:n.classList&&n.classList.length||(n.classList=[]),n.classList.push(e.string());break;case 4:n.nthChild=e.int32();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.nodeName&&e.hasOwnProperty("nodeName")&&!m.isString(e.nodeName))return"nodeName: string expected";if(null!=e.id&&e.hasOwnProperty("id")&&!m.isString(e.id))return"id: string expected";if(null!=e.classList&&e.hasOwnProperty("classList")){if(!Array.isArray(e.classList))return"classList: array expected";for(var t=0;t<e.classList.length;++t)if(!m.isString(e.classList[t]))return"classList: string[] expected"}return null!=e.nthChild&&e.hasOwnProperty("nthChild")&&!m.isInteger(e.nthChild)?"nthChild: integer expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.Selector)return e;var t=new w.lr.browser.Selector;if(null!=e.nodeName&&(t.nodeName=String(e.nodeName)),null!=e.id&&(t.id=String(e.id)),e.classList){if(!Array.isArray(e.classList))throw TypeError(".lr.browser.Selector.classList: array expected");t.classList=[];for(var r=0;r<e.classList.length;++r)t.classList[r]=String(e.classList[r])}return null!=e.nthChild&&(t.nthChild=0|e.nthChild),t},e.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.classList=[]),t.defaults&&(r.nodeName="",r.id="",r.nthChild=0),null!=e.nodeName&&e.hasOwnProperty("nodeName")&&(r.nodeName=e.nodeName),null!=e.id&&e.hasOwnProperty("id")&&(r.id=e.id),e.classList&&e.classList.length){r.classList=[];for(var n=0;n<e.classList.length;++n)r.classList[n]=e.classList[n]}return null!=e.nthChild&&e.hasOwnProperty("nthChild")&&(r.nthChild=e.nthChild),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),f.InputChangeEvent=function(){function e(e){if(this.nodePath=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.nodeId=0,e.prototype.text="",e.prototype.nodePath=m.emptyArray,e.prototype.isChecked=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&t.uint32(8).uint32(e.nodeId),null!=e.text&&e.hasOwnProperty("text")&&t.uint32(18).string(e.text),null!=e.nodePath&&e.nodePath.length)for(var r=0;r<e.nodePath.length;++r)w.lr.browser.Selector.encode(e.nodePath[r],t.uint32(26).fork()).ldelim();return null!=e.isChecked&&e.hasOwnProperty("isChecked")&&t.uint32(32).bool(e.isChecked),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.InputChangeEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.nodeId=e.uint32();break;case 2:n.text=e.string();break;case 3:n.nodePath&&n.nodePath.length||(n.nodePath=[]),n.nodePath.push(w.lr.browser.Selector.decode(e,e.uint32()));break;case 4:n.isChecked=e.bool();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.nodeId&&e.hasOwnProperty("nodeId")&&!m.isInteger(e.nodeId))return"nodeId: integer expected";if(null!=e.text&&e.hasOwnProperty("text")&&!m.isString(e.text))return"text: string expected";if(null!=e.nodePath&&e.hasOwnProperty("nodePath")){if(!Array.isArray(e.nodePath))return"nodePath: array expected";for(var t=0;t<e.nodePath.length;++t){var r=w.lr.browser.Selector.verify(e.nodePath[t]);if(r)return"nodePath."+r}}return null!=e.isChecked&&e.hasOwnProperty("isChecked")&&"boolean"!=typeof e.isChecked?"isChecked: boolean expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.InputChangeEvent)return e;var t=new w.lr.browser.InputChangeEvent;if(null!=e.nodeId&&(t.nodeId=e.nodeId>>>0),null!=e.text&&(t.text=String(e.text)),e.nodePath){if(!Array.isArray(e.nodePath))throw TypeError(".lr.browser.InputChangeEvent.nodePath: array expected");t.nodePath=[];for(var r=0;r<e.nodePath.length;++r){if("object"!=typeof e.nodePath[r])throw TypeError(".lr.browser.InputChangeEvent.nodePath: object expected");t.nodePath[r]=w.lr.browser.Selector.fromObject(e.nodePath[r])}}return null!=e.isChecked&&(t.isChecked=Boolean(e.isChecked)),t},e.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.nodePath=[]),t.defaults&&(r.nodeId=0,r.text="",r.isChecked=!1),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&(r.nodeId=e.nodeId),null!=e.text&&e.hasOwnProperty("text")&&(r.text=e.text),e.nodePath&&e.nodePath.length){r.nodePath=[];for(var n=0;n<e.nodePath.length;++n)r.nodePath[n]=w.lr.browser.Selector.toObject(e.nodePath[n],t)}return null!=e.isChecked&&e.hasOwnProperty("isChecked")&&(r.isChecked=e.isChecked),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),f.MouseEvent=function(){function e(e){if(this.componentTree=[],this.nodePath=[],this.moves=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.eventType=0,e.prototype.domTarget="",e.prototype.button=0,e.prototype.clientX=0,e.prototype.clientY=0,e.prototype.nodeId=0,e.prototype.isRageClick=!1,e.prototype.text="",e.prototype.componentTree=m.emptyArray,e.prototype.nodePath=m.emptyArray,e.prototype.moves=m.emptyArray,e.prototype.url="",e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.eventType&&e.hasOwnProperty("eventType")&&t.uint32(8).int32(e.eventType),null!=e.domTarget&&e.hasOwnProperty("domTarget")&&t.uint32(18).string(e.domTarget),null!=e.button&&e.hasOwnProperty("button")&&t.uint32(24).uint32(e.button),null!=e.clientX&&e.hasOwnProperty("clientX")&&t.uint32(32).int32(e.clientX),null!=e.clientY&&e.hasOwnProperty("clientY")&&t.uint32(40).int32(e.clientY),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&t.uint32(48).uint32(e.nodeId),null!=e.isRageClick&&e.hasOwnProperty("isRageClick")&&t.uint32(56).bool(e.isRageClick),null!=e.text&&e.hasOwnProperty("text")&&t.uint32(66).string(e.text),null!=e.componentTree&&e.componentTree.length)for(var r=0;r<e.componentTree.length;++r)t.uint32(74).string(e.componentTree[r]);if(null!=e.nodePath&&e.nodePath.length)for(r=0;r<e.nodePath.length;++r)w.lr.browser.Selector.encode(e.nodePath[r],t.uint32(82).fork()).ldelim();if(null!=e.moves&&e.moves.length)for(r=0;r<e.moves.length;++r)w.lr.browser.MouseMove.encode(e.moves[r],t.uint32(90).fork()).ldelim();return null!=e.url&&e.hasOwnProperty("url")&&t.uint32(98).string(e.url),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.MouseEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.eventType=e.int32();break;case 2:n.domTarget=e.string();break;case 3:n.button=e.uint32();break;case 4:n.clientX=e.int32();break;case 5:n.clientY=e.int32();break;case 6:n.nodeId=e.uint32();break;case 7:n.isRageClick=e.bool();break;case 8:n.text=e.string();break;case 9:n.componentTree&&n.componentTree.length||(n.componentTree=[]),n.componentTree.push(e.string());break;case 10:n.nodePath&&n.nodePath.length||(n.nodePath=[]),n.nodePath.push(w.lr.browser.Selector.decode(e,e.uint32()));break;case 11:n.moves&&n.moves.length||(n.moves=[]),n.moves.push(w.lr.browser.MouseMove.decode(e,e.uint32()));break;case 12:n.url=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.eventType&&e.hasOwnProperty("eventType"))switch(e.eventType){default:return"eventType: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:}if(null!=e.domTarget&&e.hasOwnProperty("domTarget")&&!m.isString(e.domTarget))return"domTarget: string expected";if(null!=e.button&&e.hasOwnProperty("button")&&!m.isInteger(e.button))return"button: integer expected";if(null!=e.clientX&&e.hasOwnProperty("clientX")&&!m.isInteger(e.clientX))return"clientX: integer expected";if(null!=e.clientY&&e.hasOwnProperty("clientY")&&!m.isInteger(e.clientY))return"clientY: integer expected";if(null!=e.nodeId&&e.hasOwnProperty("nodeId")&&!m.isInteger(e.nodeId))return"nodeId: integer expected";if(null!=e.isRageClick&&e.hasOwnProperty("isRageClick")&&"boolean"!=typeof e.isRageClick)return"isRageClick: boolean expected";if(null!=e.text&&e.hasOwnProperty("text")&&!m.isString(e.text))return"text: string expected";if(null!=e.componentTree&&e.hasOwnProperty("componentTree")){if(!Array.isArray(e.componentTree))return"componentTree: array expected";for(var t=0;t<e.componentTree.length;++t)if(!m.isString(e.componentTree[t]))return"componentTree: string[] expected"}if(null!=e.nodePath&&e.hasOwnProperty("nodePath")){if(!Array.isArray(e.nodePath))return"nodePath: array expected";for(t=0;t<e.nodePath.length;++t){var r=w.lr.browser.Selector.verify(e.nodePath[t]);if(r)return"nodePath."+r}}if(null!=e.moves&&e.hasOwnProperty("moves")){if(!Array.isArray(e.moves))return"moves: array expected";for(t=0;t<e.moves.length;++t)if(r=w.lr.browser.MouseMove.verify(e.moves[t]))return"moves."+r}return null!=e.url&&e.hasOwnProperty("url")&&!m.isString(e.url)?"url: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.MouseEvent)return e;var t=new w.lr.browser.MouseEvent;switch(e.eventType){case"MOUSEOVER":case 0:t.eventType=0;break;case"MOUSEOUT":case 1:t.eventType=1;break;case"MOUSEUP":case 2:t.eventType=2;break;case"MOUSEDOWN":case 3:t.eventType=3;break;case"MOUSELEAVE":case 4:t.eventType=4;break;case"MOUSEENTER":case 5:t.eventType=5;break;case"DRAGSTART":case 6:t.eventType=6;break;case"DRAGEND":case 7:t.eventType=7;break;case"DRAGLEAVE":case 8:t.eventType=8;break;case"CLICK":case 9:t.eventType=9;break;case"CONTEXTMENU":case 10:t.eventType=10;break;case"DBLCLICK":case 11:t.eventType=11;break;case"DROP":case 12:t.eventType=12;break;case"MOUSEMOVE":case 13:t.eventType=13;break;case"DRAGOVER":case 14:t.eventType=14;break;case"DRAGENTER":case 15:t.eventType=15;break;case"DRAG":case 16:t.eventType=16;break;case"FOCUS":case 17:t.eventType=17;break;case"BLUR":case 18:t.eventType=18;break;case"TOUCHSTART":case 19:t.eventType=19;break;case"TOUCHMOVE":case 20:t.eventType=20;break;case"TOUCHEND":case 21:t.eventType=21}if(null!=e.domTarget&&(t.domTarget=String(e.domTarget)),null!=e.button&&(t.button=e.button>>>0),null!=e.clientX&&(t.clientX=0|e.clientX),null!=e.clientY&&(t.clientY=0|e.clientY),null!=e.nodeId&&(t.nodeId=e.nodeId>>>0),null!=e.isRageClick&&(t.isRageClick=Boolean(e.isRageClick)),null!=e.text&&(t.text=String(e.text)),e.componentTree){if(!Array.isArray(e.componentTree))throw TypeError(".lr.browser.MouseEvent.componentTree: array expected");t.componentTree=[];for(var r=0;r<e.componentTree.length;++r)t.componentTree[r]=String(e.componentTree[r])}if(e.nodePath){if(!Array.isArray(e.nodePath))throw TypeError(".lr.browser.MouseEvent.nodePath: array expected");for(t.nodePath=[],r=0;r<e.nodePath.length;++r){if("object"!=typeof e.nodePath[r])throw TypeError(".lr.browser.MouseEvent.nodePath: object expected");t.nodePath[r]=w.lr.browser.Selector.fromObject(e.nodePath[r])}}if(e.moves){if(!Array.isArray(e.moves))throw TypeError(".lr.browser.MouseEvent.moves: array expected");for(t.moves=[],r=0;r<e.moves.length;++r){if("object"!=typeof e.moves[r])throw TypeError(".lr.browser.MouseEvent.moves: object expected");t.moves[r]=w.lr.browser.MouseMove.fromObject(e.moves[r])}}return null!=e.url&&(t.url=String(e.url)),t},e.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.componentTree=[],r.nodePath=[],r.moves=[]),t.defaults&&(r.eventType=t.enums===String?"MOUSEOVER":0,r.domTarget="",r.button=0,r.clientX=0,r.clientY=0,r.nodeId=0,r.isRageClick=!1,r.text="",r.url=""),null!=e.eventType&&e.hasOwnProperty("eventType")&&(r.eventType=t.enums===String?w.lr.browser.MouseEvent.EventType[e.eventType]:e.eventType),null!=e.domTarget&&e.hasOwnProperty("domTarget")&&(r.domTarget=e.domTarget),null!=e.button&&e.hasOwnProperty("button")&&(r.button=e.button),null!=e.clientX&&e.hasOwnProperty("clientX")&&(r.clientX=e.clientX),null!=e.clientY&&e.hasOwnProperty("clientY")&&(r.clientY=e.clientY),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&(r.nodeId=e.nodeId),null!=e.isRageClick&&e.hasOwnProperty("isRageClick")&&(r.isRageClick=e.isRageClick),null!=e.text&&e.hasOwnProperty("text")&&(r.text=e.text),e.componentTree&&e.componentTree.length){r.componentTree=[];for(var n=0;n<e.componentTree.length;++n)r.componentTree[n]=e.componentTree[n]}if(e.nodePath&&e.nodePath.length)for(r.nodePath=[],n=0;n<e.nodePath.length;++n)r.nodePath[n]=w.lr.browser.Selector.toObject(e.nodePath[n],t);if(e.moves&&e.moves.length)for(r.moves=[],n=0;n<e.moves.length;++n)r.moves[n]=w.lr.browser.MouseMove.toObject(e.moves[n],t);return null!=e.url&&e.hasOwnProperty("url")&&(r.url=e.url),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.EventType=function(){var e={},t=Object.create(e);return t[e[0]="MOUSEOVER"]=0,t[e[1]="MOUSEOUT"]=1,t[e[2]="MOUSEUP"]=2,t[e[3]="MOUSEDOWN"]=3,t[e[4]="MOUSELEAVE"]=4,t[e[5]="MOUSEENTER"]=5,t[e[6]="DRAGSTART"]=6,t[e[7]="DRAGEND"]=7,t[e[8]="DRAGLEAVE"]=8,t[e[9]="CLICK"]=9,t[e[10]="CONTEXTMENU"]=10,t[e[11]="DBLCLICK"]=11,t[e[12]="DROP"]=12,t[e[13]="MOUSEMOVE"]=13,t[e[14]="DRAGOVER"]=14,t[e[15]="DRAGENTER"]=15,t[e[16]="DRAG"]=16,t[e[17]="FOCUS"]=17,t[e[18]="BLUR"]=18,t[e[19]="TOUCHSTART"]=19,t[e[20]="TOUCHMOVE"]=20,t[e[21]="TOUCHEND"]=21,t}(),e}(),f.DeadClick=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.clickSeqID=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.clickSeqID&&e.hasOwnProperty("clickSeqID")&&t.uint32(9).double(e.clickSeqID),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.DeadClick;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.clickSeqID=e.double();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.clickSeqID&&e.hasOwnProperty("clickSeqID")&&"number"!=typeof e.clickSeqID?"clickSeqID: number expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.DeadClick)return e;var t=new w.lr.browser.DeadClick;return null!=e.clickSeqID&&(t.clickSeqID=Number(e.clickSeqID)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.clickSeqID=0),null!=e.clickSeqID&&e.hasOwnProperty("clickSeqID")&&(r.clickSeqID=t.json&&!isFinite(e.clickSeqID)?String(e.clickSeqID):e.clickSeqID),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),f.MouseMove=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.clientX=0,e.prototype.clientY=0,e.prototype.timeOffset=0,e.prototype.nodeId=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.clientX&&e.hasOwnProperty("clientX")&&t.uint32(8).int32(e.clientX),null!=e.clientY&&e.hasOwnProperty("clientY")&&t.uint32(16).int32(e.clientY),null!=e.timeOffset&&e.hasOwnProperty("timeOffset")&&t.uint32(24).uint32(e.timeOffset),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&t.uint32(32).uint32(e.nodeId),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.MouseMove;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.clientX=e.int32();break;case 2:n.clientY=e.int32();break;case 3:n.timeOffset=e.uint32();break;case 4:n.nodeId=e.uint32();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.clientX&&e.hasOwnProperty("clientX")&&!m.isInteger(e.clientX)?"clientX: integer expected":null!=e.clientY&&e.hasOwnProperty("clientY")&&!m.isInteger(e.clientY)?"clientY: integer expected":null!=e.timeOffset&&e.hasOwnProperty("timeOffset")&&!m.isInteger(e.timeOffset)?"timeOffset: integer expected":null!=e.nodeId&&e.hasOwnProperty("nodeId")&&!m.isInteger(e.nodeId)?"nodeId: integer expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.MouseMove)return e;var t=new w.lr.browser.MouseMove;return null!=e.clientX&&(t.clientX=0|e.clientX),null!=e.clientY&&(t.clientY=0|e.clientY),null!=e.timeOffset&&(t.timeOffset=e.timeOffset>>>0),null!=e.nodeId&&(t.nodeId=e.nodeId>>>0),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.clientX=0,r.clientY=0,r.timeOffset=0,r.nodeId=0),null!=e.clientX&&e.hasOwnProperty("clientX")&&(r.clientX=e.clientX),null!=e.clientY&&e.hasOwnProperty("clientY")&&(r.clientY=e.clientY),null!=e.timeOffset&&e.hasOwnProperty("timeOffset")&&(r.timeOffset=e.timeOffset),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&(r.nodeId=e.nodeId),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),f.ScrollEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.nodeId=0,e.prototype.top=0,e.prototype.left=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&t.uint32(8).uint32(e.nodeId),null!=e.top&&e.hasOwnProperty("top")&&t.uint32(21).float(e.top),null!=e.left&&e.hasOwnProperty("left")&&t.uint32(29).float(e.left),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.ScrollEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.nodeId=e.uint32();break;case 2:n.top=e.float();break;case 3:n.left=e.float();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.nodeId&&e.hasOwnProperty("nodeId")&&!m.isInteger(e.nodeId)?"nodeId: integer expected":null!=e.top&&e.hasOwnProperty("top")&&"number"!=typeof e.top?"top: number expected":null!=e.left&&e.hasOwnProperty("left")&&"number"!=typeof e.left?"left: number expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.ScrollEvent)return e;var t=new w.lr.browser.ScrollEvent;return null!=e.nodeId&&(t.nodeId=e.nodeId>>>0),null!=e.top&&(t.top=Number(e.top)),null!=e.left&&(t.left=Number(e.left)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.nodeId=0,r.top=0,r.left=0),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&(r.nodeId=e.nodeId),null!=e.top&&e.hasOwnProperty("top")&&(r.top=t.json&&!isFinite(e.top)?String(e.top):e.top),null!=e.left&&e.hasOwnProperty("left")&&(r.left=t.json&&!isFinite(e.left)?String(e.left):e.left),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),f.ViewportResizeEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.width=0,e.prototype.height=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.width&&e.hasOwnProperty("width")&&t.uint32(8).uint32(e.width),null!=e.height&&e.hasOwnProperty("height")&&t.uint32(16).uint32(e.height),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.ViewportResizeEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.width=e.uint32();break;case 2:n.height=e.uint32();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.width&&e.hasOwnProperty("width")&&!m.isInteger(e.width)?"width: integer expected":null!=e.height&&e.hasOwnProperty("height")&&!m.isInteger(e.height)?"height: integer expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.ViewportResizeEvent)return e;var t=new w.lr.browser.ViewportResizeEvent;return null!=e.width&&(t.width=e.width>>>0),null!=e.height&&(t.height=e.height>>>0),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.width=0,r.height=0),null!=e.width&&e.hasOwnProperty("width")&&(r.width=e.width),null!=e.height&&e.hasOwnProperty("height")&&(r.height=e.height),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),f.Node=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}var t;return e.prototype.id=0,e.prototype.documentTypeInfo=null,e.prototype.commentInfo=null,e.prototype.textInfo=null,e.prototype.elementInfo=null,e.prototype.documentInfo=null,e.prototype.documentFragmentInfo=null,e.prototype.isTainted=!1,Object.defineProperty(e.prototype,"info",{get:m.oneOfGetter(t=["documentTypeInfo","commentInfo","textInfo","elementInfo","documentInfo","documentFragmentInfo"]),set:m.oneOfSetter(t)}),e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.id&&e.hasOwnProperty("id")&&t.uint32(8).uint32(e.id),null!=e.documentTypeInfo&&e.hasOwnProperty("documentTypeInfo")&&w.lr.browser.Node.DocumentTypeInfo.encode(e.documentTypeInfo,t.uint32(18).fork()).ldelim(),null!=e.commentInfo&&e.hasOwnProperty("commentInfo")&&w.lr.browser.Node.CommentInfo.encode(e.commentInfo,t.uint32(26).fork()).ldelim(),null!=e.textInfo&&e.hasOwnProperty("textInfo")&&w.lr.browser.Node.TextInfo.encode(e.textInfo,t.uint32(34).fork()).ldelim(),null!=e.elementInfo&&e.hasOwnProperty("elementInfo")&&w.lr.browser.Node.ElementInfo.encode(e.elementInfo,t.uint32(42).fork()).ldelim(),null!=e.documentInfo&&e.hasOwnProperty("documentInfo")&&w.lr.browser.Node.DocumentInfo.encode(e.documentInfo,t.uint32(50).fork()).ldelim(),null!=e.isTainted&&e.hasOwnProperty("isTainted")&&t.uint32(56).bool(e.isTainted),null!=e.documentFragmentInfo&&e.hasOwnProperty("documentFragmentInfo")&&w.lr.browser.Node.DocumentFragmentInfo.encode(e.documentFragmentInfo,t.uint32(66).fork()).ldelim(),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.Node;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.id=e.uint32();break;case 2:n.documentTypeInfo=w.lr.browser.Node.DocumentTypeInfo.decode(e,e.uint32());break;case 3:n.commentInfo=w.lr.browser.Node.CommentInfo.decode(e,e.uint32());break;case 4:n.textInfo=w.lr.browser.Node.TextInfo.decode(e,e.uint32());break;case 5:n.elementInfo=w.lr.browser.Node.ElementInfo.decode(e,e.uint32());break;case 6:n.documentInfo=w.lr.browser.Node.DocumentInfo.decode(e,e.uint32());break;case 8:n.documentFragmentInfo=w.lr.browser.Node.DocumentFragmentInfo.decode(e,e.uint32());break;case 7:n.isTainted=e.bool();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";var t={};if(null!=e.id&&e.hasOwnProperty("id")&&!m.isInteger(e.id))return"id: integer expected";if(null!=e.documentTypeInfo&&e.hasOwnProperty("documentTypeInfo")){t.info=1;var r=w.lr.browser.Node.DocumentTypeInfo.verify(e.documentTypeInfo);if(r)return"documentTypeInfo."+r}if(null!=e.commentInfo&&e.hasOwnProperty("commentInfo")){if(1===t.info)return"info: multiple values";if(t.info=1,r=w.lr.browser.Node.CommentInfo.verify(e.commentInfo))return"commentInfo."+r}if(null!=e.textInfo&&e.hasOwnProperty("textInfo")){if(1===t.info)return"info: multiple values";if(t.info=1,r=w.lr.browser.Node.TextInfo.verify(e.textInfo))return"textInfo."+r}if(null!=e.elementInfo&&e.hasOwnProperty("elementInfo")){if(1===t.info)return"info: multiple values";if(t.info=1,r=w.lr.browser.Node.ElementInfo.verify(e.elementInfo))return"elementInfo."+r}if(null!=e.documentInfo&&e.hasOwnProperty("documentInfo")){if(1===t.info)return"info: multiple values";if(t.info=1,r=w.lr.browser.Node.DocumentInfo.verify(e.documentInfo))return"documentInfo."+r}if(null!=e.documentFragmentInfo&&e.hasOwnProperty("documentFragmentInfo")){if(1===t.info)return"info: multiple values";if(t.info=1,r=w.lr.browser.Node.DocumentFragmentInfo.verify(e.documentFragmentInfo))return"documentFragmentInfo."+r}return null!=e.isTainted&&e.hasOwnProperty("isTainted")&&"boolean"!=typeof e.isTainted?"isTainted: boolean expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.Node)return e;var t=new w.lr.browser.Node;if(null!=e.id&&(t.id=e.id>>>0),null!=e.documentTypeInfo){if("object"!=typeof e.documentTypeInfo)throw TypeError(".lr.browser.Node.documentTypeInfo: object expected");t.documentTypeInfo=w.lr.browser.Node.DocumentTypeInfo.fromObject(e.documentTypeInfo)}if(null!=e.commentInfo){if("object"!=typeof e.commentInfo)throw TypeError(".lr.browser.Node.commentInfo: object expected");t.commentInfo=w.lr.browser.Node.CommentInfo.fromObject(e.commentInfo)}if(null!=e.textInfo){if("object"!=typeof e.textInfo)throw TypeError(".lr.browser.Node.textInfo: object expected");t.textInfo=w.lr.browser.Node.TextInfo.fromObject(e.textInfo)}if(null!=e.elementInfo){if("object"!=typeof e.elementInfo)throw TypeError(".lr.browser.Node.elementInfo: object expected");t.elementInfo=w.lr.browser.Node.ElementInfo.fromObject(e.elementInfo)}if(null!=e.documentInfo){if("object"!=typeof e.documentInfo)throw TypeError(".lr.browser.Node.documentInfo: object expected");t.documentInfo=w.lr.browser.Node.DocumentInfo.fromObject(e.documentInfo)}if(null!=e.documentFragmentInfo){if("object"!=typeof e.documentFragmentInfo)throw TypeError(".lr.browser.Node.documentFragmentInfo: object expected");t.documentFragmentInfo=w.lr.browser.Node.DocumentFragmentInfo.fromObject(e.documentFragmentInfo)}return null!=e.isTainted&&(t.isTainted=Boolean(e.isTainted)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.id=0,r.isTainted=!1),null!=e.id&&e.hasOwnProperty("id")&&(r.id=e.id),null!=e.documentTypeInfo&&e.hasOwnProperty("documentTypeInfo")&&(r.documentTypeInfo=w.lr.browser.Node.DocumentTypeInfo.toObject(e.documentTypeInfo,t),t.oneofs&&(r.info="documentTypeInfo")),null!=e.commentInfo&&e.hasOwnProperty("commentInfo")&&(r.commentInfo=w.lr.browser.Node.CommentInfo.toObject(e.commentInfo,t),t.oneofs&&(r.info="commentInfo")),null!=e.textInfo&&e.hasOwnProperty("textInfo")&&(r.textInfo=w.lr.browser.Node.TextInfo.toObject(e.textInfo,t),t.oneofs&&(r.info="textInfo")),null!=e.elementInfo&&e.hasOwnProperty("elementInfo")&&(r.elementInfo=w.lr.browser.Node.ElementInfo.toObject(e.elementInfo,t),t.oneofs&&(r.info="elementInfo")),null!=e.documentInfo&&e.hasOwnProperty("documentInfo")&&(r.documentInfo=w.lr.browser.Node.DocumentInfo.toObject(e.documentInfo,t),t.oneofs&&(r.info="documentInfo")),null!=e.isTainted&&e.hasOwnProperty("isTainted")&&(r.isTainted=e.isTainted),null!=e.documentFragmentInfo&&e.hasOwnProperty("documentFragmentInfo")&&(r.documentFragmentInfo=w.lr.browser.Node.DocumentFragmentInfo.toObject(e.documentFragmentInfo,t),t.oneofs&&(r.info="documentFragmentInfo")),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.DocumentTypeInfo=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.name="",e.prototype.publicId="",e.prototype.systemId="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.name&&e.hasOwnProperty("name")&&t.uint32(10).string(e.name),null!=e.publicId&&e.hasOwnProperty("publicId")&&t.uint32(18).string(e.publicId),null!=e.systemId&&e.hasOwnProperty("systemId")&&t.uint32(26).string(e.systemId),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.Node.DocumentTypeInfo;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.name=e.string();break;case 2:n.publicId=e.string();break;case 3:n.systemId=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.name&&e.hasOwnProperty("name")&&!m.isString(e.name)?"name: string expected":null!=e.publicId&&e.hasOwnProperty("publicId")&&!m.isString(e.publicId)?"publicId: string expected":null!=e.systemId&&e.hasOwnProperty("systemId")&&!m.isString(e.systemId)?"systemId: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.Node.DocumentTypeInfo)return e;var t=new w.lr.browser.Node.DocumentTypeInfo;return null!=e.name&&(t.name=String(e.name)),null!=e.publicId&&(t.publicId=String(e.publicId)),null!=e.systemId&&(t.systemId=String(e.systemId)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.name="",r.publicId="",r.systemId=""),null!=e.name&&e.hasOwnProperty("name")&&(r.name=e.name),null!=e.publicId&&e.hasOwnProperty("publicId")&&(r.publicId=e.publicId),null!=e.systemId&&e.hasOwnProperty("systemId")&&(r.systemId=e.systemId),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e.DocumentInfo=function(){function e(e){if(this.childNodes=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.childNodes=m.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.childNodes&&e.childNodes.length)for(var r=0;r<e.childNodes.length;++r)w.lr.browser.Node.encode(e.childNodes[r],t.uint32(10).fork()).ldelim();return t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.Node.DocumentInfo;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.childNodes&&n.childNodes.length||(n.childNodes=[]),n.childNodes.push(w.lr.browser.Node.decode(e,e.uint32()));break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.childNodes&&e.hasOwnProperty("childNodes")){if(!Array.isArray(e.childNodes))return"childNodes: array expected";for(var t=0;t<e.childNodes.length;++t){var r=w.lr.browser.Node.verify(e.childNodes[t]);if(r)return"childNodes."+r}}return null},e.fromObject=function(e){if(e instanceof w.lr.browser.Node.DocumentInfo)return e;var t=new w.lr.browser.Node.DocumentInfo;if(e.childNodes){if(!Array.isArray(e.childNodes))throw TypeError(".lr.browser.Node.DocumentInfo.childNodes: array expected");t.childNodes=[];for(var r=0;r<e.childNodes.length;++r){if("object"!=typeof e.childNodes[r])throw TypeError(".lr.browser.Node.DocumentInfo.childNodes: object expected");t.childNodes[r]=w.lr.browser.Node.fromObject(e.childNodes[r])}}return t},e.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.childNodes=[]),e.childNodes&&e.childNodes.length){r.childNodes=[];for(var n=0;n<e.childNodes.length;++n)r.childNodes[n]=w.lr.browser.Node.toObject(e.childNodes[n],t)}return r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e.CommentInfo=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.textContent="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.textContent&&e.hasOwnProperty("textContent")&&t.uint32(10).string(e.textContent),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.Node.CommentInfo;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.textContent=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.textContent&&e.hasOwnProperty("textContent")&&!m.isString(e.textContent)?"textContent: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.Node.CommentInfo)return e;var t=new w.lr.browser.Node.CommentInfo;return null!=e.textContent&&(t.textContent=String(e.textContent)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.textContent=""),null!=e.textContent&&e.hasOwnProperty("textContent")&&(r.textContent=e.textContent),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e.TextInfo=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.textContent="",e.prototype.isStyleNode=!1,e.prototype.boundingRect=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.textContent&&e.hasOwnProperty("textContent")&&t.uint32(10).string(e.textContent),null!=e.isStyleNode&&e.hasOwnProperty("isStyleNode")&&t.uint32(16).bool(e.isStyleNode),null!=e.boundingRect&&e.hasOwnProperty("boundingRect")&&w.lr.browser.Node.TextInfo.Rectangle.encode(e.boundingRect,t.uint32(26).fork()).ldelim(),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.Node.TextInfo;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.textContent=e.string();break;case 2:n.isStyleNode=e.bool();break;case 3:n.boundingRect=w.lr.browser.Node.TextInfo.Rectangle.decode(e,e.uint32());break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.textContent&&e.hasOwnProperty("textContent")&&!m.isString(e.textContent))return"textContent: string expected";if(null!=e.isStyleNode&&e.hasOwnProperty("isStyleNode")&&"boolean"!=typeof e.isStyleNode)return"isStyleNode: boolean expected";if(null!=e.boundingRect&&e.hasOwnProperty("boundingRect")){var t=w.lr.browser.Node.TextInfo.Rectangle.verify(e.boundingRect);if(t)return"boundingRect."+t}return null},e.fromObject=function(e){if(e instanceof w.lr.browser.Node.TextInfo)return e;var t=new w.lr.browser.Node.TextInfo;if(null!=e.textContent&&(t.textContent=String(e.textContent)),null!=e.isStyleNode&&(t.isStyleNode=Boolean(e.isStyleNode)),null!=e.boundingRect){if("object"!=typeof e.boundingRect)throw TypeError(".lr.browser.Node.TextInfo.boundingRect: object expected");t.boundingRect=w.lr.browser.Node.TextInfo.Rectangle.fromObject(e.boundingRect)}return t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.textContent="",r.isStyleNode=!1,r.boundingRect=null),null!=e.textContent&&e.hasOwnProperty("textContent")&&(r.textContent=e.textContent),null!=e.isStyleNode&&e.hasOwnProperty("isStyleNode")&&(r.isStyleNode=e.isStyleNode),null!=e.boundingRect&&e.hasOwnProperty("boundingRect")&&(r.boundingRect=w.lr.browser.Node.TextInfo.Rectangle.toObject(e.boundingRect,t)),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.Rectangle=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.width=0,e.prototype.height=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.width&&e.hasOwnProperty("width")&&t.uint32(13).float(e.width),null!=e.height&&e.hasOwnProperty("height")&&t.uint32(21).float(e.height),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.Node.TextInfo.Rectangle;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.width=e.float();break;case 2:n.height=e.float();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.width&&e.hasOwnProperty("width")&&"number"!=typeof e.width?"width: number expected":null!=e.height&&e.hasOwnProperty("height")&&"number"!=typeof e.height?"height: number expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.Node.TextInfo.Rectangle)return e;var t=new w.lr.browser.Node.TextInfo.Rectangle;return null!=e.width&&(t.width=Number(e.width)),null!=e.height&&(t.height=Number(e.height)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.width=0,r.height=0),null!=e.width&&e.hasOwnProperty("width")&&(r.width=t.json&&!isFinite(e.width)?String(e.width):e.width),null!=e.height&&e.hasOwnProperty("height")&&(r.height=t.json&&!isFinite(e.height)?String(e.height):e.height),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e}(),e.ElementInfo=function(){function e(e){if(this.attributes={},this.childNodes=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.tagName="",e.prototype.attributes=m.emptyObject,e.prototype.childNodes=m.emptyArray,e.prototype.localContents="",e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.tagName&&e.hasOwnProperty("tagName")&&t.uint32(10).string(e.tagName),null!=e.attributes&&e.hasOwnProperty("attributes"))for(var r=Object.keys(e.attributes),n=0;n<r.length;++n)t.uint32(18).fork().uint32(10).string(r[n]),w.lr.utils.Value.encode(e.attributes[r[n]],t.uint32(18).fork()).ldelim().ldelim();if(null!=e.childNodes&&e.childNodes.length)for(n=0;n<e.childNodes.length;++n)w.lr.browser.Node.encode(e.childNodes[n],t.uint32(34).fork()).ldelim();return null!=e.localContents&&e.hasOwnProperty("localContents")&&t.uint32(42).string(e.localContents),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r,n=void 0===t?e.len:e.pos+t,o=new w.lr.browser.Node.ElementInfo;e.pos<n;){var i=e.uint32();switch(i>>>3){case 1:o.tagName=e.string();break;case 2:e.skip().pos++,o.attributes===m.emptyObject&&(o.attributes={}),r=e.string(),e.pos++,o.attributes[r]=w.lr.utils.Value.decode(e,e.uint32());break;case 4:o.childNodes&&o.childNodes.length||(o.childNodes=[]),o.childNodes.push(w.lr.browser.Node.decode(e,e.uint32()));break;case 5:o.localContents=e.string();break;default:e.skipType(7&i)}}return o},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.tagName&&e.hasOwnProperty("tagName")&&!m.isString(e.tagName))return"tagName: string expected";if(null!=e.attributes&&e.hasOwnProperty("attributes")){if(!m.isObject(e.attributes))return"attributes: object expected";for(var t=Object.keys(e.attributes),r=0;r<t.length;++r){var n=w.lr.utils.Value.verify(e.attributes[t[r]]);if(n)return"attributes."+n}}if(null!=e.childNodes&&e.hasOwnProperty("childNodes")){if(!Array.isArray(e.childNodes))return"childNodes: array expected";for(r=0;r<e.childNodes.length;++r)if(n=w.lr.browser.Node.verify(e.childNodes[r]))return"childNodes."+n}return null!=e.localContents&&e.hasOwnProperty("localContents")&&!m.isString(e.localContents)?"localContents: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.Node.ElementInfo)return e;var t=new w.lr.browser.Node.ElementInfo;if(null!=e.tagName&&(t.tagName=String(e.tagName)),e.attributes){if("object"!=typeof e.attributes)throw TypeError(".lr.browser.Node.ElementInfo.attributes: object expected");t.attributes={};for(var r=Object.keys(e.attributes),n=0;n<r.length;++n){if("object"!=typeof e.attributes[r[n]])throw TypeError(".lr.browser.Node.ElementInfo.attributes: object expected");t.attributes[r[n]]=w.lr.utils.Value.fromObject(e.attributes[r[n]])}}if(e.childNodes){if(!Array.isArray(e.childNodes))throw TypeError(".lr.browser.Node.ElementInfo.childNodes: array expected");for(t.childNodes=[],n=0;n<e.childNodes.length;++n){if("object"!=typeof e.childNodes[n])throw TypeError(".lr.browser.Node.ElementInfo.childNodes: object expected");t.childNodes[n]=w.lr.browser.Node.fromObject(e.childNodes[n])}}return null!=e.localContents&&(t.localContents=String(e.localContents)),t},e.toObject=function(e,t){t||(t={});var r,n={};if((t.arrays||t.defaults)&&(n.childNodes=[]),(t.objects||t.defaults)&&(n.attributes={}),t.defaults&&(n.tagName="",n.localContents=""),null!=e.tagName&&e.hasOwnProperty("tagName")&&(n.tagName=e.tagName),e.attributes&&(r=Object.keys(e.attributes)).length){n.attributes={};for(var o=0;o<r.length;++o)n.attributes[r[o]]=w.lr.utils.Value.toObject(e.attributes[r[o]],t)}if(e.childNodes&&e.childNodes.length)for(n.childNodes=[],o=0;o<e.childNodes.length;++o)n.childNodes[o]=w.lr.browser.Node.toObject(e.childNodes[o],t);return null!=e.localContents&&e.hasOwnProperty("localContents")&&(n.localContents=e.localContents),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e.DocumentFragmentInfo=function(){function e(e){if(this.childNodes=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.childNodes=m.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.childNodes&&e.childNodes.length)for(var r=0;r<e.childNodes.length;++r)w.lr.browser.Node.encode(e.childNodes[r],t.uint32(10).fork()).ldelim();return t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.Node.DocumentFragmentInfo;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.childNodes&&n.childNodes.length||(n.childNodes=[]),n.childNodes.push(w.lr.browser.Node.decode(e,e.uint32()));break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.childNodes&&e.hasOwnProperty("childNodes")){if(!Array.isArray(e.childNodes))return"childNodes: array expected";for(var t=0;t<e.childNodes.length;++t){var r=w.lr.browser.Node.verify(e.childNodes[t]);if(r)return"childNodes."+r}}return null},e.fromObject=function(e){if(e instanceof w.lr.browser.Node.DocumentFragmentInfo)return e;var t=new w.lr.browser.Node.DocumentFragmentInfo;if(e.childNodes){if(!Array.isArray(e.childNodes))throw TypeError(".lr.browser.Node.DocumentFragmentInfo.childNodes: array expected");t.childNodes=[];for(var r=0;r<e.childNodes.length;++r){if("object"!=typeof e.childNodes[r])throw TypeError(".lr.browser.Node.DocumentFragmentInfo.childNodes: object expected");t.childNodes[r]=w.lr.browser.Node.fromObject(e.childNodes[r])}}return t},e.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.childNodes=[]),e.childNodes&&e.childNodes.length){r.childNodes=[];for(var n=0;n<e.childNodes.length;++n)r.childNodes[n]=w.lr.browser.Node.toObject(e.childNodes[n],t)}return r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e}(),f.NodeInitEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.rootNode=null,e.prototype.baseHref="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.rootNode&&e.hasOwnProperty("rootNode")&&w.lr.browser.Node.encode(e.rootNode,t.uint32(18).fork()).ldelim(),null!=e.baseHref&&e.hasOwnProperty("baseHref")&&t.uint32(26).string(e.baseHref),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.NodeInitEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 2:n.rootNode=w.lr.browser.Node.decode(e,e.uint32());break;case 3:n.baseHref=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.rootNode&&e.hasOwnProperty("rootNode")){var t=w.lr.browser.Node.verify(e.rootNode);if(t)return"rootNode."+t}return null!=e.baseHref&&e.hasOwnProperty("baseHref")&&!m.isString(e.baseHref)?"baseHref: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.NodeInitEvent)return e;var t=new w.lr.browser.NodeInitEvent;if(null!=e.rootNode){if("object"!=typeof e.rootNode)throw TypeError(".lr.browser.NodeInitEvent.rootNode: object expected");t.rootNode=w.lr.browser.Node.fromObject(e.rootNode)}return null!=e.baseHref&&(t.baseHref=String(e.baseHref)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.rootNode=null,r.baseHref=""),null!=e.rootNode&&e.hasOwnProperty("rootNode")&&(r.rootNode=w.lr.browser.Node.toObject(e.rootNode,t)),null!=e.baseHref&&e.hasOwnProperty("baseHref")&&(r.baseHref=e.baseHref),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),f.ShadowInitEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.shadowRootNode=null,e.prototype.parentNodeId=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.shadowRootNode&&e.hasOwnProperty("shadowRootNode")&&w.lr.browser.Node.encode(e.shadowRootNode,t.uint32(10).fork()).ldelim(),null!=e.parentNodeId&&e.hasOwnProperty("parentNodeId")&&t.uint32(16).uint32(e.parentNodeId),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.ShadowInitEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.shadowRootNode=w.lr.browser.Node.decode(e,e.uint32());break;case 2:n.parentNodeId=e.uint32();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.shadowRootNode&&e.hasOwnProperty("shadowRootNode")){var t=w.lr.browser.Node.verify(e.shadowRootNode);if(t)return"shadowRootNode."+t}return null!=e.parentNodeId&&e.hasOwnProperty("parentNodeId")&&!m.isInteger(e.parentNodeId)?"parentNodeId: integer expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.ShadowInitEvent)return e;var t=new w.lr.browser.ShadowInitEvent;if(null!=e.shadowRootNode){if("object"!=typeof e.shadowRootNode)throw TypeError(".lr.browser.ShadowInitEvent.shadowRootNode: object expected");t.shadowRootNode=w.lr.browser.Node.fromObject(e.shadowRootNode)}return null!=e.parentNodeId&&(t.parentNodeId=e.parentNodeId>>>0),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.shadowRootNode=null,r.parentNodeId=0),null!=e.shadowRootNode&&e.hasOwnProperty("shadowRootNode")&&(r.shadowRootNode=w.lr.browser.Node.toObject(e.shadowRootNode,t)),null!=e.parentNodeId&&e.hasOwnProperty("parentNodeId")&&(r.parentNodeId=e.parentNodeId),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),f.NodeChangeEvent=function(){function e(e){if(this.removed=[],this.addedOrMoved=[],this.attributes=[],this.text=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.removed=m.emptyArray,e.prototype.addedOrMoved=m.emptyArray,e.prototype.attributes=m.emptyArray,e.prototype.text=m.emptyArray,e.prototype.baseHref="",e.prototype.version=0,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.removed&&e.removed.length)for(var r=0;r<e.removed.length;++r)w.lr.browser.NodeChangeEvent.RemoveEvent.encode(e.removed[r],t.uint32(10).fork()).ldelim();if(null!=e.addedOrMoved&&e.addedOrMoved.length)for(r=0;r<e.addedOrMoved.length;++r)w.lr.browser.NodeChangeEvent.AddOrMoveEvent.encode(e.addedOrMoved[r],t.uint32(18).fork()).ldelim();if(null!=e.attributes&&e.attributes.length)for(r=0;r<e.attributes.length;++r)w.lr.browser.NodeChangeEvent.AttributeEvent.encode(e.attributes[r],t.uint32(26).fork()).ldelim();if(null!=e.text&&e.text.length)for(r=0;r<e.text.length;++r)w.lr.browser.NodeChangeEvent.TextEvent.encode(e.text[r],t.uint32(34).fork()).ldelim();return null!=e.baseHref&&e.hasOwnProperty("baseHref")&&t.uint32(42).string(e.baseHref),null!=e.version&&e.hasOwnProperty("version")&&t.uint32(48).uint32(e.version),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.NodeChangeEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.removed&&n.removed.length||(n.removed=[]),n.removed.push(w.lr.browser.NodeChangeEvent.RemoveEvent.decode(e,e.uint32()));break;case 2:n.addedOrMoved&&n.addedOrMoved.length||(n.addedOrMoved=[]),n.addedOrMoved.push(w.lr.browser.NodeChangeEvent.AddOrMoveEvent.decode(e,e.uint32()));break;case 3:n.attributes&&n.attributes.length||(n.attributes=[]),n.attributes.push(w.lr.browser.NodeChangeEvent.AttributeEvent.decode(e,e.uint32()));break;case 4:n.text&&n.text.length||(n.text=[]),n.text.push(w.lr.browser.NodeChangeEvent.TextEvent.decode(e,e.uint32()));break;case 5:n.baseHref=e.string();break;case 6:n.version=e.uint32();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.removed&&e.hasOwnProperty("removed")){if(!Array.isArray(e.removed))return"removed: array expected";for(var t=0;t<e.removed.length;++t){var r=w.lr.browser.NodeChangeEvent.RemoveEvent.verify(e.removed[t]);if(r)return"removed."+r}}if(null!=e.addedOrMoved&&e.hasOwnProperty("addedOrMoved")){if(!Array.isArray(e.addedOrMoved))return"addedOrMoved: array expected";for(t=0;t<e.addedOrMoved.length;++t)if(r=w.lr.browser.NodeChangeEvent.AddOrMoveEvent.verify(e.addedOrMoved[t]))return"addedOrMoved."+r}if(null!=e.attributes&&e.hasOwnProperty("attributes")){if(!Array.isArray(e.attributes))return"attributes: array expected";for(t=0;t<e.attributes.length;++t)if(r=w.lr.browser.NodeChangeEvent.AttributeEvent.verify(e.attributes[t]))return"attributes."+r}if(null!=e.text&&e.hasOwnProperty("text")){if(!Array.isArray(e.text))return"text: array expected";for(t=0;t<e.text.length;++t)if(r=w.lr.browser.NodeChangeEvent.TextEvent.verify(e.text[t]))return"text."+r}return null!=e.baseHref&&e.hasOwnProperty("baseHref")&&!m.isString(e.baseHref)?"baseHref: string expected":null!=e.version&&e.hasOwnProperty("version")&&!m.isInteger(e.version)?"version: integer expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.NodeChangeEvent)return e;var t=new w.lr.browser.NodeChangeEvent;if(e.removed){if(!Array.isArray(e.removed))throw TypeError(".lr.browser.NodeChangeEvent.removed: array expected");t.removed=[];for(var r=0;r<e.removed.length;++r){if("object"!=typeof e.removed[r])throw TypeError(".lr.browser.NodeChangeEvent.removed: object expected");t.removed[r]=w.lr.browser.NodeChangeEvent.RemoveEvent.fromObject(e.removed[r])}}if(e.addedOrMoved){if(!Array.isArray(e.addedOrMoved))throw TypeError(".lr.browser.NodeChangeEvent.addedOrMoved: array expected");for(t.addedOrMoved=[],r=0;r<e.addedOrMoved.length;++r){if("object"!=typeof e.addedOrMoved[r])throw TypeError(".lr.browser.NodeChangeEvent.addedOrMoved: object expected");t.addedOrMoved[r]=w.lr.browser.NodeChangeEvent.AddOrMoveEvent.fromObject(e.addedOrMoved[r])}}if(e.attributes){if(!Array.isArray(e.attributes))throw TypeError(".lr.browser.NodeChangeEvent.attributes: array expected");for(t.attributes=[],r=0;r<e.attributes.length;++r){if("object"!=typeof e.attributes[r])throw TypeError(".lr.browser.NodeChangeEvent.attributes: object expected");t.attributes[r]=w.lr.browser.NodeChangeEvent.AttributeEvent.fromObject(e.attributes[r])}}if(e.text){if(!Array.isArray(e.text))throw TypeError(".lr.browser.NodeChangeEvent.text: array expected");for(t.text=[],r=0;r<e.text.length;++r){if("object"!=typeof e.text[r])throw TypeError(".lr.browser.NodeChangeEvent.text: object expected");t.text[r]=w.lr.browser.NodeChangeEvent.TextEvent.fromObject(e.text[r])}}return null!=e.baseHref&&(t.baseHref=String(e.baseHref)),null!=e.version&&(t.version=e.version>>>0),t},e.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.removed=[],r.addedOrMoved=[],r.attributes=[],r.text=[]),t.defaults&&(r.baseHref="",r.version=0),e.removed&&e.removed.length){r.removed=[];for(var n=0;n<e.removed.length;++n)r.removed[n]=w.lr.browser.NodeChangeEvent.RemoveEvent.toObject(e.removed[n],t)}if(e.addedOrMoved&&e.addedOrMoved.length)for(r.addedOrMoved=[],n=0;n<e.addedOrMoved.length;++n)r.addedOrMoved[n]=w.lr.browser.NodeChangeEvent.AddOrMoveEvent.toObject(e.addedOrMoved[n],t);if(e.attributes&&e.attributes.length)for(r.attributes=[],n=0;n<e.attributes.length;++n)r.attributes[n]=w.lr.browser.NodeChangeEvent.AttributeEvent.toObject(e.attributes[n],t);if(e.text&&e.text.length)for(r.text=[],n=0;n<e.text.length;++n)r.text[n]=w.lr.browser.NodeChangeEvent.TextEvent.toObject(e.text[n],t);return null!=e.baseHref&&e.hasOwnProperty("baseHref")&&(r.baseHref=e.baseHref),null!=e.version&&e.hasOwnProperty("version")&&(r.version=e.version),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.RemoveEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.nodeId=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&t.uint32(8).uint32(e.nodeId),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.NodeChangeEvent.RemoveEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.nodeId=e.uint32();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.nodeId&&e.hasOwnProperty("nodeId")&&!m.isInteger(e.nodeId)?"nodeId: integer expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.NodeChangeEvent.RemoveEvent)return e;var t=new w.lr.browser.NodeChangeEvent.RemoveEvent;return null!=e.nodeId&&(t.nodeId=e.nodeId>>>0),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.nodeId=0),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&(r.nodeId=e.nodeId),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e.AddOrMoveEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.nodeData=null,e.prototype.nextSiblingId=0,e.prototype.parentNodeId=0,e.prototype.isRemoved=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.nodeData&&e.hasOwnProperty("nodeData")&&w.lr.browser.Node.encode(e.nodeData,t.uint32(10).fork()).ldelim(),null!=e.nextSiblingId&&e.hasOwnProperty("nextSiblingId")&&t.uint32(16).uint32(e.nextSiblingId),null!=e.parentNodeId&&e.hasOwnProperty("parentNodeId")&&t.uint32(24).uint32(e.parentNodeId),null!=e.isRemoved&&e.hasOwnProperty("isRemoved")&&t.uint32(32).bool(e.isRemoved),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.NodeChangeEvent.AddOrMoveEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.nodeData=w.lr.browser.Node.decode(e,e.uint32());break;case 2:n.nextSiblingId=e.uint32();break;case 3:n.parentNodeId=e.uint32();break;case 4:n.isRemoved=e.bool();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.nodeData&&e.hasOwnProperty("nodeData")){var t=w.lr.browser.Node.verify(e.nodeData);if(t)return"nodeData."+t}return null!=e.nextSiblingId&&e.hasOwnProperty("nextSiblingId")&&!m.isInteger(e.nextSiblingId)?"nextSiblingId: integer expected":null!=e.parentNodeId&&e.hasOwnProperty("parentNodeId")&&!m.isInteger(e.parentNodeId)?"parentNodeId: integer expected":null!=e.isRemoved&&e.hasOwnProperty("isRemoved")&&"boolean"!=typeof e.isRemoved?"isRemoved: boolean expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.NodeChangeEvent.AddOrMoveEvent)return e;var t=new w.lr.browser.NodeChangeEvent.AddOrMoveEvent;if(null!=e.nodeData){if("object"!=typeof e.nodeData)throw TypeError(".lr.browser.NodeChangeEvent.AddOrMoveEvent.nodeData: object expected");t.nodeData=w.lr.browser.Node.fromObject(e.nodeData)}return null!=e.nextSiblingId&&(t.nextSiblingId=e.nextSiblingId>>>0),null!=e.parentNodeId&&(t.parentNodeId=e.parentNodeId>>>0),null!=e.isRemoved&&(t.isRemoved=Boolean(e.isRemoved)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.nodeData=null,r.nextSiblingId=0,r.parentNodeId=0,r.isRemoved=!1),null!=e.nodeData&&e.hasOwnProperty("nodeData")&&(r.nodeData=w.lr.browser.Node.toObject(e.nodeData,t)),null!=e.nextSiblingId&&e.hasOwnProperty("nextSiblingId")&&(r.nextSiblingId=e.nextSiblingId),null!=e.parentNodeId&&e.hasOwnProperty("parentNodeId")&&(r.parentNodeId=e.parentNodeId),null!=e.isRemoved&&e.hasOwnProperty("isRemoved")&&(r.isRemoved=e.isRemoved),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e.AttributeEvent=function(){function e(e){if(this.attributes={},this.removedAttributes=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.nodeId=0,e.prototype.attributes=m.emptyObject,e.prototype.removedAttributes=m.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&t.uint32(8).uint32(e.nodeId),null!=e.attributes&&e.hasOwnProperty("attributes"))for(var r=Object.keys(e.attributes),n=0;n<r.length;++n)t.uint32(18).fork().uint32(10).string(r[n]),w.lr.utils.Value.encode(e.attributes[r[n]],t.uint32(18).fork()).ldelim().ldelim();if(null!=e.removedAttributes&&e.removedAttributes.length)for(n=0;n<e.removedAttributes.length;++n)t.uint32(26).string(e.removedAttributes[n]);return t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r,n=void 0===t?e.len:e.pos+t,o=new w.lr.browser.NodeChangeEvent.AttributeEvent;e.pos<n;){var i=e.uint32();switch(i>>>3){case 1:o.nodeId=e.uint32();break;case 2:e.skip().pos++,o.attributes===m.emptyObject&&(o.attributes={}),r=e.string(),e.pos++,o.attributes[r]=w.lr.utils.Value.decode(e,e.uint32());break;case 3:o.removedAttributes&&o.removedAttributes.length||(o.removedAttributes=[]),o.removedAttributes.push(e.string());break;default:e.skipType(7&i)}}return o},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.nodeId&&e.hasOwnProperty("nodeId")&&!m.isInteger(e.nodeId))return"nodeId: integer expected";if(null!=e.attributes&&e.hasOwnProperty("attributes")){if(!m.isObject(e.attributes))return"attributes: object expected";for(var t=Object.keys(e.attributes),r=0;r<t.length;++r){var n=w.lr.utils.Value.verify(e.attributes[t[r]]);if(n)return"attributes."+n}}if(null!=e.removedAttributes&&e.hasOwnProperty("removedAttributes")){if(!Array.isArray(e.removedAttributes))return"removedAttributes: array expected";for(r=0;r<e.removedAttributes.length;++r)if(!m.isString(e.removedAttributes[r]))return"removedAttributes: string[] expected"}return null},e.fromObject=function(e){if(e instanceof w.lr.browser.NodeChangeEvent.AttributeEvent)return e;var t=new w.lr.browser.NodeChangeEvent.AttributeEvent;if(null!=e.nodeId&&(t.nodeId=e.nodeId>>>0),e.attributes){if("object"!=typeof e.attributes)throw TypeError(".lr.browser.NodeChangeEvent.AttributeEvent.attributes: object expected");t.attributes={};for(var r=Object.keys(e.attributes),n=0;n<r.length;++n){if("object"!=typeof e.attributes[r[n]])throw TypeError(".lr.browser.NodeChangeEvent.AttributeEvent.attributes: object expected");t.attributes[r[n]]=w.lr.utils.Value.fromObject(e.attributes[r[n]])}}if(e.removedAttributes){if(!Array.isArray(e.removedAttributes))throw TypeError(".lr.browser.NodeChangeEvent.AttributeEvent.removedAttributes: array expected");for(t.removedAttributes=[],n=0;n<e.removedAttributes.length;++n)t.removedAttributes[n]=String(e.removedAttributes[n])}return t},e.toObject=function(e,t){t||(t={});var r,n={};if((t.arrays||t.defaults)&&(n.removedAttributes=[]),(t.objects||t.defaults)&&(n.attributes={}),t.defaults&&(n.nodeId=0),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&(n.nodeId=e.nodeId),e.attributes&&(r=Object.keys(e.attributes)).length){n.attributes={};for(var o=0;o<r.length;++o)n.attributes[r[o]]=w.lr.utils.Value.toObject(e.attributes[r[o]],t)}if(e.removedAttributes&&e.removedAttributes.length)for(n.removedAttributes=[],o=0;o<e.removedAttributes.length;++o)n.removedAttributes[o]=e.removedAttributes[o];return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e.TextEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.nodeId=0,e.prototype.textContent="",e.prototype.boundingRect=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&t.uint32(8).uint32(e.nodeId),null!=e.textContent&&e.hasOwnProperty("textContent")&&t.uint32(18).string(e.textContent),null!=e.boundingRect&&e.hasOwnProperty("boundingRect")&&w.lr.browser.NodeChangeEvent.TextEvent.Rectangle.encode(e.boundingRect,t.uint32(26).fork()).ldelim(),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.NodeChangeEvent.TextEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.nodeId=e.uint32();break;case 2:n.textContent=e.string();break;case 3:n.boundingRect=w.lr.browser.NodeChangeEvent.TextEvent.Rectangle.decode(e,e.uint32());break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.nodeId&&e.hasOwnProperty("nodeId")&&!m.isInteger(e.nodeId))return"nodeId: integer expected";if(null!=e.textContent&&e.hasOwnProperty("textContent")&&!m.isString(e.textContent))return"textContent: string expected";if(null!=e.boundingRect&&e.hasOwnProperty("boundingRect")){var t=w.lr.browser.NodeChangeEvent.TextEvent.Rectangle.verify(e.boundingRect);if(t)return"boundingRect."+t}return null},e.fromObject=function(e){if(e instanceof w.lr.browser.NodeChangeEvent.TextEvent)return e;var t=new w.lr.browser.NodeChangeEvent.TextEvent;if(null!=e.nodeId&&(t.nodeId=e.nodeId>>>0),null!=e.textContent&&(t.textContent=String(e.textContent)),null!=e.boundingRect){if("object"!=typeof e.boundingRect)throw TypeError(".lr.browser.NodeChangeEvent.TextEvent.boundingRect: object expected");t.boundingRect=w.lr.browser.NodeChangeEvent.TextEvent.Rectangle.fromObject(e.boundingRect)}return t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.nodeId=0,r.textContent="",r.boundingRect=null),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&(r.nodeId=e.nodeId),null!=e.textContent&&e.hasOwnProperty("textContent")&&(r.textContent=e.textContent),null!=e.boundingRect&&e.hasOwnProperty("boundingRect")&&(r.boundingRect=w.lr.browser.NodeChangeEvent.TextEvent.Rectangle.toObject(e.boundingRect,t)),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.Rectangle=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.width=0,e.prototype.height=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.width&&e.hasOwnProperty("width")&&t.uint32(13).float(e.width),null!=e.height&&e.hasOwnProperty("height")&&t.uint32(21).float(e.height),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.NodeChangeEvent.TextEvent.Rectangle;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.width=e.float();break;case 2:n.height=e.float();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.width&&e.hasOwnProperty("width")&&"number"!=typeof e.width?"width: number expected":null!=e.height&&e.hasOwnProperty("height")&&"number"!=typeof e.height?"height: number expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.NodeChangeEvent.TextEvent.Rectangle)return e;var t=new w.lr.browser.NodeChangeEvent.TextEvent.Rectangle;return null!=e.width&&(t.width=Number(e.width)),null!=e.height&&(t.height=Number(e.height)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.width=0,r.height=0),null!=e.width&&e.hasOwnProperty("width")&&(r.width=t.json&&!isFinite(e.width)?String(e.width):e.width),null!=e.height&&e.hasOwnProperty("height")&&(r.height=t.json&&!isFinite(e.height)?String(e.height):e.height),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e}(),e}(),f.StyleContents=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.nodeId=0,e.prototype.localContents="",e.prototype.href="",e.prototype.snapshot="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&t.uint32(8).uint32(e.nodeId),null!=e.localContents&&e.hasOwnProperty("localContents")&&t.uint32(18).string(e.localContents),null!=e.href&&e.hasOwnProperty("href")&&t.uint32(26).string(e.href),null!=e.snapshot&&e.hasOwnProperty("snapshot")&&t.uint32(34).string(e.snapshot),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.StyleContents;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.nodeId=e.uint32();break;case 2:n.localContents=e.string();break;case 3:n.href=e.string();break;case 4:n.snapshot=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.nodeId&&e.hasOwnProperty("nodeId")&&!m.isInteger(e.nodeId)?"nodeId: integer expected":null!=e.localContents&&e.hasOwnProperty("localContents")&&!m.isString(e.localContents)?"localContents: string expected":null!=e.href&&e.hasOwnProperty("href")&&!m.isString(e.href)?"href: string expected":null!=e.snapshot&&e.hasOwnProperty("snapshot")&&!m.isString(e.snapshot)?"snapshot: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.StyleContents)return e;var t=new w.lr.browser.StyleContents;return null!=e.nodeId&&(t.nodeId=e.nodeId>>>0),null!=e.localContents&&(t.localContents=String(e.localContents)),null!=e.href&&(t.href=String(e.href)),null!=e.snapshot&&(t.snapshot=String(e.snapshot)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.nodeId=0,r.localContents="",r.href="",r.snapshot=""),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&(r.nodeId=e.nodeId),null!=e.localContents&&e.hasOwnProperty("localContents")&&(r.localContents=e.localContents),null!=e.href&&e.hasOwnProperty("href")&&(r.href=e.href),null!=e.snapshot&&e.hasOwnProperty("snapshot")&&(r.snapshot=e.snapshot),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),f.StyleChangeEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.eventType=0,e.prototype.nodeId=0,e.prototype.ruleIndex=0,e.prototype.ruleText="",e.prototype.sheetId=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.eventType&&e.hasOwnProperty("eventType")&&t.uint32(8).int32(e.eventType),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&t.uint32(16).uint32(e.nodeId),null!=e.ruleIndex&&e.hasOwnProperty("ruleIndex")&&t.uint32(24).uint32(e.ruleIndex),null!=e.ruleText&&e.hasOwnProperty("ruleText")&&t.uint32(34).string(e.ruleText),null!=e.sheetId&&e.hasOwnProperty("sheetId")&&t.uint32(40).uint32(e.sheetId),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.StyleChangeEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.eventType=e.int32();break;case 2:n.nodeId=e.uint32();break;case 3:n.ruleIndex=e.uint32();break;case 4:n.ruleText=e.string();break;case 5:n.sheetId=e.uint32();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.eventType&&e.hasOwnProperty("eventType"))switch(e.eventType){default:return"eventType: enum value expected";case 0:case 1:}return null!=e.nodeId&&e.hasOwnProperty("nodeId")&&!m.isInteger(e.nodeId)?"nodeId: integer expected":null!=e.ruleIndex&&e.hasOwnProperty("ruleIndex")&&!m.isInteger(e.ruleIndex)?"ruleIndex: integer expected":null!=e.ruleText&&e.hasOwnProperty("ruleText")&&!m.isString(e.ruleText)?"ruleText: string expected":null!=e.sheetId&&e.hasOwnProperty("sheetId")&&!m.isInteger(e.sheetId)?"sheetId: integer expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.StyleChangeEvent)return e;var t=new w.lr.browser.StyleChangeEvent;switch(e.eventType){case"INSERT_RULE":case 0:t.eventType=0;break;case"DELETE_RULE":case 1:t.eventType=1}return null!=e.nodeId&&(t.nodeId=e.nodeId>>>0),null!=e.ruleIndex&&(t.ruleIndex=e.ruleIndex>>>0),null!=e.ruleText&&(t.ruleText=String(e.ruleText)),null!=e.sheetId&&(t.sheetId=e.sheetId>>>0),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.eventType=t.enums===String?"INSERT_RULE":0,r.nodeId=0,r.ruleIndex=0,r.ruleText="",r.sheetId=0),null!=e.eventType&&e.hasOwnProperty("eventType")&&(r.eventType=t.enums===String?w.lr.browser.StyleChangeEvent.EventType[e.eventType]:e.eventType),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&(r.nodeId=e.nodeId),null!=e.ruleIndex&&e.hasOwnProperty("ruleIndex")&&(r.ruleIndex=e.ruleIndex),null!=e.ruleText&&e.hasOwnProperty("ruleText")&&(r.ruleText=e.ruleText),null!=e.sheetId&&e.hasOwnProperty("sheetId")&&(r.sheetId=e.sheetId),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.EventType=function(){var e={},t=Object.create(e);return t[e[0]="INSERT_RULE"]=0,t[e[1]="DELETE_RULE"]=1,t}(),e}(),f.ConstructedStyleSheetEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.sheetId=0,e.prototype.sheetContents="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.sheetId&&e.hasOwnProperty("sheetId")&&t.uint32(8).uint32(e.sheetId),null!=e.sheetContents&&e.hasOwnProperty("sheetContents")&&t.uint32(18).string(e.sheetContents),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.ConstructedStyleSheetEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.sheetId=e.uint32();break;case 2:n.sheetContents=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.sheetId&&e.hasOwnProperty("sheetId")&&!m.isInteger(e.sheetId)?"sheetId: integer expected":null!=e.sheetContents&&e.hasOwnProperty("sheetContents")&&!m.isString(e.sheetContents)?"sheetContents: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.ConstructedStyleSheetEvent)return e;var t=new w.lr.browser.ConstructedStyleSheetEvent;return null!=e.sheetId&&(t.sheetId=e.sheetId>>>0),null!=e.sheetContents&&(t.sheetContents=String(e.sheetContents)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.sheetId=0,r.sheetContents=""),null!=e.sheetId&&e.hasOwnProperty("sheetId")&&(r.sheetId=e.sheetId),null!=e.sheetContents&&e.hasOwnProperty("sheetContents")&&(r.sheetContents=e.sheetContents),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),f.AdoptedStyleSheetsEvent=function(){function e(e){if(this.sheetIds=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.nodeId=0,e.prototype.sheetIds=m.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&t.uint32(8).uint32(e.nodeId),null!=e.sheetIds&&e.sheetIds.length){t.uint32(18).fork();for(var r=0;r<e.sheetIds.length;++r)t.uint32(e.sheetIds[r]);t.ldelim()}return t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.AdoptedStyleSheetsEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.nodeId=e.uint32();break;case 2:if(n.sheetIds&&n.sheetIds.length||(n.sheetIds=[]),2==(7&o))for(var i=e.uint32()+e.pos;e.pos<i;)n.sheetIds.push(e.uint32());else n.sheetIds.push(e.uint32());break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.nodeId&&e.hasOwnProperty("nodeId")&&!m.isInteger(e.nodeId))return"nodeId: integer expected";if(null!=e.sheetIds&&e.hasOwnProperty("sheetIds")){if(!Array.isArray(e.sheetIds))return"sheetIds: array expected";for(var t=0;t<e.sheetIds.length;++t)if(!m.isInteger(e.sheetIds[t]))return"sheetIds: integer[] expected"}return null},e.fromObject=function(e){if(e instanceof w.lr.browser.AdoptedStyleSheetsEvent)return e;var t=new w.lr.browser.AdoptedStyleSheetsEvent;if(null!=e.nodeId&&(t.nodeId=e.nodeId>>>0),e.sheetIds){if(!Array.isArray(e.sheetIds))throw TypeError(".lr.browser.AdoptedStyleSheetsEvent.sheetIds: array expected");t.sheetIds=[];for(var r=0;r<e.sheetIds.length;++r)t.sheetIds[r]=e.sheetIds[r]>>>0}return t},e.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.sheetIds=[]),t.defaults&&(r.nodeId=0),null!=e.nodeId&&e.hasOwnProperty("nodeId")&&(r.nodeId=e.nodeId),e.sheetIds&&e.sheetIds.length){r.sheetIds=[];for(var n=0;n<e.sheetIds.length;++n)r.sheetIds[n]=e.sheetIds[n]}return r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),f.StyleSheetDisabledEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.sheetId=0,e.prototype.disabled=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.sheetId&&e.hasOwnProperty("sheetId")&&t.uint32(8).uint32(e.sheetId),null!=e.disabled&&e.hasOwnProperty("disabled")&&t.uint32(16).bool(e.disabled),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.StyleSheetDisabledEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.sheetId=e.uint32();break;case 2:n.disabled=e.bool();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.sheetId&&e.hasOwnProperty("sheetId")&&!m.isInteger(e.sheetId)?"sheetId: integer expected":null!=e.disabled&&e.hasOwnProperty("disabled")&&"boolean"!=typeof e.disabled?"disabled: boolean expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.StyleSheetDisabledEvent)return e;var t=new w.lr.browser.StyleSheetDisabledEvent;return null!=e.sheetId&&(t.sheetId=e.sheetId>>>0),null!=e.disabled&&(t.disabled=Boolean(e.disabled)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.sheetId=0,r.disabled=!1),null!=e.sheetId&&e.hasOwnProperty("sheetId")&&(r.sheetId=e.sheetId),null!=e.disabled&&e.hasOwnProperty("disabled")&&(r.disabled=e.disabled),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),f.IframeInitEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.iframeNodeID=0,e.prototype.tabID="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.iframeNodeID&&e.hasOwnProperty("iframeNodeID")&&t.uint32(8).uint32(e.iframeNodeID),null!=e.tabID&&e.hasOwnProperty("tabID")&&t.uint32(18).string(e.tabID),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.IframeInitEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.iframeNodeID=e.uint32();break;case 2:n.tabID=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.iframeNodeID&&e.hasOwnProperty("iframeNodeID")&&!m.isInteger(e.iframeNodeID)?"iframeNodeID: integer expected":null!=e.tabID&&e.hasOwnProperty("tabID")&&!m.isString(e.tabID)?"tabID: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.IframeInitEvent)return e;var t=new w.lr.browser.IframeInitEvent;return null!=e.iframeNodeID&&(t.iframeNodeID=e.iframeNodeID>>>0),null!=e.tabID&&(t.tabID=String(e.tabID)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.iframeNodeID=0,r.tabID=""),null!=e.iframeNodeID&&e.hasOwnProperty("iframeNodeID")&&(r.iframeNodeID=e.iframeNodeID),null!=e.tabID&&e.hasOwnProperty("tabID")&&(r.tabID=e.tabID),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),f.PIIExposureEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}var t;return e.prototype.redactedInputContext=null,Object.defineProperty(e.prototype,"context",{get:m.oneOfGetter(t=["redactedInputContext"]),set:m.oneOfSetter(t)}),e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.redactedInputContext&&e.hasOwnProperty("redactedInputContext")&&w.lr.browser.PIIExposureEvent.RedactedInputContext.encode(e.redactedInputContext,t.uint32(10).fork()).ldelim(),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.PIIExposureEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.redactedInputContext=w.lr.browser.PIIExposureEvent.RedactedInputContext.decode(e,e.uint32());break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.redactedInputContext&&e.hasOwnProperty("redactedInputContext")){var t=w.lr.browser.PIIExposureEvent.RedactedInputContext.verify(e.redactedInputContext);if(t)return"redactedInputContext."+t}return null},e.fromObject=function(e){if(e instanceof w.lr.browser.PIIExposureEvent)return e;var t=new w.lr.browser.PIIExposureEvent;if(null!=e.redactedInputContext){if("object"!=typeof e.redactedInputContext)throw TypeError(".lr.browser.PIIExposureEvent.redactedInputContext: object expected");t.redactedInputContext=w.lr.browser.PIIExposureEvent.RedactedInputContext.fromObject(e.redactedInputContext)}return t},e.toObject=function(e,t){t||(t={});var r={};return null!=e.redactedInputContext&&e.hasOwnProperty("redactedInputContext")&&(r.redactedInputContext=w.lr.browser.PIIExposureEvent.RedactedInputContext.toObject(e.redactedInputContext,t),t.oneofs&&(r.context="redactedInputContext")),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.RedactedInputContext=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.matchedItem="",e.prototype.matchIndex=0,e.prototype.source="",e.prototype.reqId="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.matchedItem&&e.hasOwnProperty("matchedItem")&&t.uint32(10).string(e.matchedItem),null!=e.matchIndex&&e.hasOwnProperty("matchIndex")&&t.uint32(16).uint32(e.matchIndex),null!=e.source&&e.hasOwnProperty("source")&&t.uint32(26).string(e.source),null!=e.reqId&&e.hasOwnProperty("reqId")&&t.uint32(34).string(e.reqId),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.PIIExposureEvent.RedactedInputContext;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.matchedItem=e.string();break;case 2:n.matchIndex=e.uint32();break;case 3:n.source=e.string();break;case 4:n.reqId=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.matchedItem&&e.hasOwnProperty("matchedItem")&&!m.isString(e.matchedItem)?"matchedItem: string expected":null!=e.matchIndex&&e.hasOwnProperty("matchIndex")&&!m.isInteger(e.matchIndex)?"matchIndex: integer expected":null!=e.source&&e.hasOwnProperty("source")&&!m.isString(e.source)?"source: string expected":null!=e.reqId&&e.hasOwnProperty("reqId")&&!m.isString(e.reqId)?"reqId: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.browser.PIIExposureEvent.RedactedInputContext)return e;var t=new w.lr.browser.PIIExposureEvent.RedactedInputContext;return null!=e.matchedItem&&(t.matchedItem=String(e.matchedItem)),null!=e.matchIndex&&(t.matchIndex=e.matchIndex>>>0),null!=e.source&&(t.source=String(e.source)),null!=e.reqId&&(t.reqId=String(e.reqId)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.matchedItem="",r.matchIndex=0,r.source="",r.reqId=""),null!=e.matchedItem&&e.hasOwnProperty("matchedItem")&&(r.matchedItem=e.matchedItem),null!=e.matchIndex&&e.hasOwnProperty("matchIndex")&&(r.matchIndex=e.matchIndex),null!=e.source&&e.hasOwnProperty("source")&&(r.source=e.source),null!=e.reqId&&e.hasOwnProperty("reqId")&&(r.reqId=e.reqId),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e}(),f.NPSEvent=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.surveyID="",e.prototype.score=0,e.prototype.feedback="",e.prototype.provider=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.surveyID&&e.hasOwnProperty("surveyID")&&t.uint32(10).string(e.surveyID),null!=e.score&&e.hasOwnProperty("score")&&t.uint32(16).uint32(e.score),null!=e.feedback&&e.hasOwnProperty("feedback")&&t.uint32(26).string(e.feedback),null!=e.provider&&e.hasOwnProperty("provider")&&t.uint32(32).int32(e.provider),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.browser.NPSEvent;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.surveyID=e.string();break;case 2:n.score=e.uint32();break;case 3:n.feedback=e.string();break;case 4:n.provider=e.int32();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.surveyID&&e.hasOwnProperty("surveyID")&&!m.isString(e.surveyID))return"surveyID: string expected";if(null!=e.score&&e.hasOwnProperty("score")&&!m.isInteger(e.score))return"score: integer expected";if(null!=e.feedback&&e.hasOwnProperty("feedback")&&!m.isString(e.feedback))return"feedback: string expected";if(null!=e.provider&&e.hasOwnProperty("provider"))switch(e.provider){default:return"provider: enum value expected";case 0:case 1:}return null},e.fromObject=function(e){if(e instanceof w.lr.browser.NPSEvent)return e;var t=new w.lr.browser.NPSEvent;switch(null!=e.surveyID&&(t.surveyID=String(e.surveyID)),null!=e.score&&(t.score=e.score>>>0),null!=e.feedback&&(t.feedback=String(e.feedback)),e.provider){case"WOOTRIC":case 0:t.provider=0;break;case"DELIGHTED":case 1:t.provider=1}return t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.surveyID="",r.score=0,r.feedback="",r.provider=t.enums===String?"WOOTRIC":0),null!=e.surveyID&&e.hasOwnProperty("surveyID")&&(r.surveyID=e.surveyID),null!=e.score&&e.hasOwnProperty("score")&&(r.score=e.score),null!=e.feedback&&e.hasOwnProperty("feedback")&&(r.feedback=e.feedback),null!=e.provider&&e.hasOwnProperty("provider")&&(r.provider=t.enums===String?w.lr.browser.NPSEvent.NPSProvider[e.provider]:e.provider),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.NPSProvider=function(){var e={},t=Object.create(e);return t[e[0]="WOOTRIC"]=0,t[e[1]="DELIGHTED"]=1,t}(),e}(),f),y.performance=function(){var e={};return e.BusyFrames=function(){function e(e){if(this.measurements=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.measurements=m.emptyArray,e.prototype.url="",e.prototype.elapsedTime=0,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.measurements&&e.measurements.length)for(var r=0;r<e.measurements.length;++r)w.lr.performance.BusyFrames.Measurement.encode(e.measurements[r],t.uint32(10).fork()).ldelim();return null!=e.url&&e.hasOwnProperty("url")&&t.uint32(18).string(e.url),null!=e.elapsedTime&&e.hasOwnProperty("elapsedTime")&&t.uint32(29).float(e.elapsedTime),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.performance.BusyFrames;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.measurements&&n.measurements.length||(n.measurements=[]),n.measurements.push(w.lr.performance.BusyFrames.Measurement.decode(e,e.uint32()));break;case 2:n.url=e.string();break;case 3:n.elapsedTime=e.float();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.measurements&&e.hasOwnProperty("measurements")){if(!Array.isArray(e.measurements))return"measurements: array expected";for(var t=0;t<e.measurements.length;++t){var r=w.lr.performance.BusyFrames.Measurement.verify(e.measurements[t]);if(r)return"measurements."+r}}return null!=e.url&&e.hasOwnProperty("url")&&!m.isString(e.url)?"url: string expected":null!=e.elapsedTime&&e.hasOwnProperty("elapsedTime")&&"number"!=typeof e.elapsedTime?"elapsedTime: number expected":null},e.fromObject=function(e){if(e instanceof w.lr.performance.BusyFrames)return e;var t=new w.lr.performance.BusyFrames;if(e.measurements){if(!Array.isArray(e.measurements))throw TypeError(".lr.performance.BusyFrames.measurements: array expected");t.measurements=[];for(var r=0;r<e.measurements.length;++r){if("object"!=typeof e.measurements[r])throw TypeError(".lr.performance.BusyFrames.measurements: object expected");t.measurements[r]=w.lr.performance.BusyFrames.Measurement.fromObject(e.measurements[r])}}return null!=e.url&&(t.url=String(e.url)),null!=e.elapsedTime&&(t.elapsedTime=Number(e.elapsedTime)),t},e.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.measurements=[]),t.defaults&&(r.url="",r.elapsedTime=0),e.measurements&&e.measurements.length){r.measurements=[];for(var n=0;n<e.measurements.length;++n)r.measurements[n]=w.lr.performance.BusyFrames.Measurement.toObject(e.measurements[n],t)}return null!=e.url&&e.hasOwnProperty("url")&&(r.url=e.url),null!=e.elapsedTime&&e.hasOwnProperty("elapsedTime")&&(r.elapsedTime=t.json&&!isFinite(e.elapsedTime)?String(e.elapsedTime):e.elapsedTime),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.Measurement=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.busyFrames=0,e.prototype.timestamp=m.Long?m.Long.fromBits(0,0,!1):0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.busyFrames&&e.hasOwnProperty("busyFrames")&&t.uint32(8).uint32(e.busyFrames),null!=e.timestamp&&e.hasOwnProperty("timestamp")&&t.uint32(16).int64(e.timestamp),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.performance.BusyFrames.Measurement;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.busyFrames=e.uint32();break;case 2:n.timestamp=e.int64();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.busyFrames&&e.hasOwnProperty("busyFrames")&&!m.isInteger(e.busyFrames)?"busyFrames: integer expected":null!=e.timestamp&&e.hasOwnProperty("timestamp")&&!(m.isInteger(e.timestamp)||e.timestamp&&m.isInteger(e.timestamp.low)&&m.isInteger(e.timestamp.high))?"timestamp: integer|Long expected":null},e.fromObject=function(e){if(e instanceof w.lr.performance.BusyFrames.Measurement)return e;var t=new w.lr.performance.BusyFrames.Measurement;return null!=e.busyFrames&&(t.busyFrames=e.busyFrames>>>0),null!=e.timestamp&&(m.Long?(t.timestamp=m.Long.fromValue(e.timestamp)).unsigned=!1:"string"==typeof e.timestamp?t.timestamp=parseInt(e.timestamp,10):"number"==typeof e.timestamp?t.timestamp=e.timestamp:"object"==typeof e.timestamp&&(t.timestamp=new m.LongBits(e.timestamp.low>>>0,e.timestamp.high>>>0).toNumber())),t},e.toObject=function(e,t){t||(t={});var r={};if(t.defaults)if(r.busyFrames=0,m.Long){var n=new m.Long(0,0,!1);r.timestamp=t.longs===String?n.toString():t.longs===Number?n.toNumber():n}else r.timestamp=t.longs===String?"0":0;return null!=e.busyFrames&&e.hasOwnProperty("busyFrames")&&(r.busyFrames=e.busyFrames),null!=e.timestamp&&e.hasOwnProperty("timestamp")&&("number"==typeof e.timestamp?r.timestamp=t.longs===String?String(e.timestamp):e.timestamp:r.timestamp=t.longs===String?m.Long.prototype.toString.call(e.timestamp):t.longs===Number?new m.LongBits(e.timestamp.low>>>0,e.timestamp.high>>>0).toNumber():e.timestamp),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e}(),e.FirstInputDelay=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.duration=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.duration&&e.hasOwnProperty("duration")&&t.uint32(8).uint32(e.duration),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.performance.FirstInputDelay;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.duration=e.uint32();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.duration&&e.hasOwnProperty("duration")&&!m.isInteger(e.duration)?"duration: integer expected":null},e.fromObject=function(e){if(e instanceof w.lr.performance.FirstInputDelay)return e;var t=new w.lr.performance.FirstInputDelay;return null!=e.duration&&(t.duration=e.duration>>>0),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.duration=0),null!=e.duration&&e.hasOwnProperty("duration")&&(r.duration=e.duration),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e.LongTasks=function(){function e(e){if(this.longTasks=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.longTasks=m.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.longTasks&&e.longTasks.length)for(var r=0;r<e.longTasks.length;++r)w.lr.performance.LongTasks.LongTask.encode(e.longTasks[r],t.uint32(10).fork()).ldelim();return t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.performance.LongTasks;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.longTasks&&n.longTasks.length||(n.longTasks=[]),n.longTasks.push(w.lr.performance.LongTasks.LongTask.decode(e,e.uint32()));break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.longTasks&&e.hasOwnProperty("longTasks")){if(!Array.isArray(e.longTasks))return"longTasks: array expected";for(var t=0;t<e.longTasks.length;++t){var r=w.lr.performance.LongTasks.LongTask.verify(e.longTasks[t]);if(r)return"longTasks."+r}}return null},e.fromObject=function(e){if(e instanceof w.lr.performance.LongTasks)return e;var t=new w.lr.performance.LongTasks;if(e.longTasks){if(!Array.isArray(e.longTasks))throw TypeError(".lr.performance.LongTasks.longTasks: array expected");t.longTasks=[];for(var r=0;r<e.longTasks.length;++r){if("object"!=typeof e.longTasks[r])throw TypeError(".lr.performance.LongTasks.longTasks: object expected");t.longTasks[r]=w.lr.performance.LongTasks.LongTask.fromObject(e.longTasks[r])}}return t},e.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.longTasks=[]),e.longTasks&&e.longTasks.length){r.longTasks=[];for(var n=0;n<e.longTasks.length;++n)r.longTasks[n]=w.lr.performance.LongTasks.LongTask.toObject(e.longTasks[n],t)}return r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.LongTask=function(){function e(e){if(this.attribution=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.name="",e.prototype.startTime=m.Long?m.Long.fromBits(0,0,!1):0,e.prototype.duration=0,e.prototype.attribution=m.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.name&&e.hasOwnProperty("name")&&t.uint32(10).string(e.name),null!=e.startTime&&e.hasOwnProperty("startTime")&&t.uint32(16).int64(e.startTime),null!=e.duration&&e.hasOwnProperty("duration")&&t.uint32(29).float(e.duration),null!=e.attribution&&e.attribution.length)for(var r=0;r<e.attribution.length;++r)w.lr.performance.LongTasks.LongTask.Attribution.encode(e.attribution[r],t.uint32(34).fork()).ldelim();return t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.performance.LongTasks.LongTask;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.name=e.string();break;case 2:n.startTime=e.int64();break;case 3:n.duration=e.float();break;case 4:n.attribution&&n.attribution.length||(n.attribution=[]),n.attribution.push(w.lr.performance.LongTasks.LongTask.Attribution.decode(e,e.uint32()));break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.name&&e.hasOwnProperty("name")&&!m.isString(e.name))return"name: string expected";if(null!=e.startTime&&e.hasOwnProperty("startTime")&&!(m.isInteger(e.startTime)||e.startTime&&m.isInteger(e.startTime.low)&&m.isInteger(e.startTime.high)))return"startTime: integer|Long expected";if(null!=e.duration&&e.hasOwnProperty("duration")&&"number"!=typeof e.duration)return"duration: number expected";if(null!=e.attribution&&e.hasOwnProperty("attribution")){if(!Array.isArray(e.attribution))return"attribution: array expected";for(var t=0;t<e.attribution.length;++t){var r=w.lr.performance.LongTasks.LongTask.Attribution.verify(e.attribution[t]);if(r)return"attribution."+r}}return null},e.fromObject=function(e){if(e instanceof w.lr.performance.LongTasks.LongTask)return e;var t=new w.lr.performance.LongTasks.LongTask;if(null!=e.name&&(t.name=String(e.name)),null!=e.startTime&&(m.Long?(t.startTime=m.Long.fromValue(e.startTime)).unsigned=!1:"string"==typeof e.startTime?t.startTime=parseInt(e.startTime,10):"number"==typeof e.startTime?t.startTime=e.startTime:"object"==typeof e.startTime&&(t.startTime=new m.LongBits(e.startTime.low>>>0,e.startTime.high>>>0).toNumber())),null!=e.duration&&(t.duration=Number(e.duration)),e.attribution){if(!Array.isArray(e.attribution))throw TypeError(".lr.performance.LongTasks.LongTask.attribution: array expected");t.attribution=[];for(var r=0;r<e.attribution.length;++r){if("object"!=typeof e.attribution[r])throw TypeError(".lr.performance.LongTasks.LongTask.attribution: object expected");t.attribution[r]=w.lr.performance.LongTasks.LongTask.Attribution.fromObject(e.attribution[r])}}return t},e.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.attribution=[]),t.defaults){if(r.name="",m.Long){var n=new m.Long(0,0,!1);r.startTime=t.longs===String?n.toString():t.longs===Number?n.toNumber():n}else r.startTime=t.longs===String?"0":0;r.duration=0}if(null!=e.name&&e.hasOwnProperty("name")&&(r.name=e.name),null!=e.startTime&&e.hasOwnProperty("startTime")&&("number"==typeof e.startTime?r.startTime=t.longs===String?String(e.startTime):e.startTime:r.startTime=t.longs===String?m.Long.prototype.toString.call(e.startTime):t.longs===Number?new m.LongBits(e.startTime.low>>>0,e.startTime.high>>>0).toNumber():e.startTime),null!=e.duration&&e.hasOwnProperty("duration")&&(r.duration=t.json&&!isFinite(e.duration)?String(e.duration):e.duration),e.attribution&&e.attribution.length){r.attribution=[];for(var o=0;o<e.attribution.length;++o)r.attribution[o]=w.lr.performance.LongTasks.LongTask.Attribution.toObject(e.attribution[o],t)}return r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.Attribution=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.containerType="",e.prototype.containerName="",e.prototype.containerId="",e.prototype.containerSrc="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.containerType&&e.hasOwnProperty("containerType")&&t.uint32(10).string(e.containerType),null!=e.containerName&&e.hasOwnProperty("containerName")&&t.uint32(18).string(e.containerName),null!=e.containerId&&e.hasOwnProperty("containerId")&&t.uint32(26).string(e.containerId),null!=e.containerSrc&&e.hasOwnProperty("containerSrc")&&t.uint32(34).string(e.containerSrc),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.performance.LongTasks.LongTask.Attribution;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.containerType=e.string();break;case 2:n.containerName=e.string();break;case 3:n.containerId=e.string();break;case 4:n.containerSrc=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.containerType&&e.hasOwnProperty("containerType")&&!m.isString(e.containerType)?"containerType: string expected":null!=e.containerName&&e.hasOwnProperty("containerName")&&!m.isString(e.containerName)?"containerName: string expected":null!=e.containerId&&e.hasOwnProperty("containerId")&&!m.isString(e.containerId)?"containerId: string expected":null!=e.containerSrc&&e.hasOwnProperty("containerSrc")&&!m.isString(e.containerSrc)?"containerSrc: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.performance.LongTasks.LongTask.Attribution)return e;var t=new w.lr.performance.LongTasks.LongTask.Attribution;return null!=e.containerType&&(t.containerType=String(e.containerType)),null!=e.containerName&&(t.containerName=String(e.containerName)),null!=e.containerId&&(t.containerId=String(e.containerId)),null!=e.containerSrc&&(t.containerSrc=String(e.containerSrc)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.containerType="",r.containerName="",r.containerId="",r.containerSrc=""),null!=e.containerType&&e.hasOwnProperty("containerType")&&(r.containerType=e.containerType),null!=e.containerName&&e.hasOwnProperty("containerName")&&(r.containerName=e.containerName),null!=e.containerId&&e.hasOwnProperty("containerId")&&(r.containerId=e.containerId),null!=e.containerSrc&&e.hasOwnProperty("containerSrc")&&(r.containerSrc=e.containerSrc),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e}(),e}(),e.Memory=function(){function e(e){if(this.measurements=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.measurements=m.emptyArray,e.prototype.url="",e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.measurements&&e.measurements.length)for(var r=0;r<e.measurements.length;++r)w.lr.performance.Memory.Measurement.encode(e.measurements[r],t.uint32(10).fork()).ldelim();return null!=e.url&&e.hasOwnProperty("url")&&t.uint32(18).string(e.url),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.performance.Memory;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.measurements&&n.measurements.length||(n.measurements=[]),n.measurements.push(w.lr.performance.Memory.Measurement.decode(e,e.uint32()));break;case 2:n.url=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.measurements&&e.hasOwnProperty("measurements")){if(!Array.isArray(e.measurements))return"measurements: array expected";for(var t=0;t<e.measurements.length;++t){var r=w.lr.performance.Memory.Measurement.verify(e.measurements[t]);if(r)return"measurements."+r}}return null!=e.url&&e.hasOwnProperty("url")&&!m.isString(e.url)?"url: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.performance.Memory)return e;var t=new w.lr.performance.Memory;if(e.measurements){if(!Array.isArray(e.measurements))throw TypeError(".lr.performance.Memory.measurements: array expected");t.measurements=[];for(var r=0;r<e.measurements.length;++r){if("object"!=typeof e.measurements[r])throw TypeError(".lr.performance.Memory.measurements: object expected");t.measurements[r]=w.lr.performance.Memory.Measurement.fromObject(e.measurements[r])}}return null!=e.url&&(t.url=String(e.url)),t},e.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.measurements=[]),t.defaults&&(r.url=""),e.measurements&&e.measurements.length){r.measurements=[];for(var n=0;n<e.measurements.length;++n)r.measurements[n]=w.lr.performance.Memory.Measurement.toObject(e.measurements[n],t)}return null!=e.url&&e.hasOwnProperty("url")&&(r.url=e.url),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.Measurement=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.usedHeap=0,e.prototype.timestamp=m.Long?m.Long.fromBits(0,0,!1):0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.usedHeap&&e.hasOwnProperty("usedHeap")&&t.uint32(13).float(e.usedHeap),null!=e.timestamp&&e.hasOwnProperty("timestamp")&&t.uint32(16).int64(e.timestamp),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.performance.Memory.Measurement;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.usedHeap=e.float();break;case 2:n.timestamp=e.int64();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.usedHeap&&e.hasOwnProperty("usedHeap")&&"number"!=typeof e.usedHeap?"usedHeap: number expected":null!=e.timestamp&&e.hasOwnProperty("timestamp")&&!(m.isInteger(e.timestamp)||e.timestamp&&m.isInteger(e.timestamp.low)&&m.isInteger(e.timestamp.high))?"timestamp: integer|Long expected":null},e.fromObject=function(e){if(e instanceof w.lr.performance.Memory.Measurement)return e;var t=new w.lr.performance.Memory.Measurement;return null!=e.usedHeap&&(t.usedHeap=Number(e.usedHeap)),null!=e.timestamp&&(m.Long?(t.timestamp=m.Long.fromValue(e.timestamp)).unsigned=!1:"string"==typeof e.timestamp?t.timestamp=parseInt(e.timestamp,10):"number"==typeof e.timestamp?t.timestamp=e.timestamp:"object"==typeof e.timestamp&&(t.timestamp=new m.LongBits(e.timestamp.low>>>0,e.timestamp.high>>>0).toNumber())),t},e.toObject=function(e,t){t||(t={});var r={};if(t.defaults)if(r.usedHeap=0,m.Long){var n=new m.Long(0,0,!1);r.timestamp=t.longs===String?n.toString():t.longs===Number?n.toNumber():n}else r.timestamp=t.longs===String?"0":0;return null!=e.usedHeap&&e.hasOwnProperty("usedHeap")&&(r.usedHeap=t.json&&!isFinite(e.usedHeap)?String(e.usedHeap):e.usedHeap),null!=e.timestamp&&e.hasOwnProperty("timestamp")&&("number"==typeof e.timestamp?r.timestamp=t.longs===String?String(e.timestamp):e.timestamp:r.timestamp=t.longs===String?m.Long.prototype.toString.call(e.timestamp):t.longs===Number?new m.LongBits(e.timestamp.low>>>0,e.timestamp.high>>>0).toNumber():e.timestamp),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e}(),e}(),y.metrics=((p={}).Measurement=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.timestamp=m.Long?m.Long.fromBits(0,0,!1):0,e.prototype.value=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.timestamp&&e.hasOwnProperty("timestamp")&&t.uint32(8).int64(e.timestamp),null!=e.value&&e.hasOwnProperty("value")&&t.uint32(17).double(e.value),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.metrics.Measurement;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.timestamp=e.int64();break;case 2:n.value=e.double();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.timestamp&&e.hasOwnProperty("timestamp")&&!(m.isInteger(e.timestamp)||e.timestamp&&m.isInteger(e.timestamp.low)&&m.isInteger(e.timestamp.high))?"timestamp: integer|Long expected":null!=e.value&&e.hasOwnProperty("value")&&"number"!=typeof e.value?"value: number expected":null},e.fromObject=function(e){if(e instanceof w.lr.metrics.Measurement)return e;var t=new w.lr.metrics.Measurement;return null!=e.timestamp&&(m.Long?(t.timestamp=m.Long.fromValue(e.timestamp)).unsigned=!1:"string"==typeof e.timestamp?t.timestamp=parseInt(e.timestamp,10):"number"==typeof e.timestamp?t.timestamp=e.timestamp:"object"==typeof e.timestamp&&(t.timestamp=new m.LongBits(e.timestamp.low>>>0,e.timestamp.high>>>0).toNumber())),null!=e.value&&(t.value=Number(e.value)),t},e.toObject=function(e,t){t||(t={});var r={};if(t.defaults){if(m.Long){var n=new m.Long(0,0,!1);r.timestamp=t.longs===String?n.toString():t.longs===Number?n.toNumber():n}else r.timestamp=t.longs===String?"0":0;r.value=0}return null!=e.timestamp&&e.hasOwnProperty("timestamp")&&("number"==typeof e.timestamp?r.timestamp=t.longs===String?String(e.timestamp):e.timestamp:r.timestamp=t.longs===String?m.Long.prototype.toString.call(e.timestamp):t.longs===Number?new m.LongBits(e.timestamp.low>>>0,e.timestamp.high>>>0).toNumber():e.timestamp),null!=e.value&&e.hasOwnProperty("value")&&(r.value=t.json&&!isFinite(e.value)?String(e.value):e.value),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),p.Metric=function(){function e(e){if(this.measurements=[],this.extra={},e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.metricType=0,e.prototype.measurements=m.emptyArray,e.prototype.extra=m.emptyObject,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.metricType&&e.hasOwnProperty("metricType")&&t.uint32(8).int32(e.metricType),null!=e.measurements&&e.measurements.length)for(var r=0;r<e.measurements.length;++r)w.lr.metrics.Measurement.encode(e.measurements[r],t.uint32(18).fork()).ldelim();if(null!=e.extra&&e.hasOwnProperty("extra")){var n=Object.keys(e.extra);for(r=0;r<n.length;++r)t.uint32(26).fork().uint32(10).string(n[r]).uint32(18).string(e.extra[n[r]]).ldelim()}return t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r,n=void 0===t?e.len:e.pos+t,o=new w.lr.metrics.Metric;e.pos<n;){var i=e.uint32();switch(i>>>3){case 1:o.metricType=e.int32();break;case 2:o.measurements&&o.measurements.length||(o.measurements=[]),o.measurements.push(w.lr.metrics.Measurement.decode(e,e.uint32()));break;case 3:e.skip().pos++,o.extra===m.emptyObject&&(o.extra={}),r=e.string(),e.pos++,o.extra[r]=e.string();break;default:e.skipType(7&i)}}return o},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.metricType&&e.hasOwnProperty("metricType"))switch(e.metricType){default:return"metricType: enum value expected";case 0:case 1:case 2:case 3:case 4:}if(null!=e.measurements&&e.hasOwnProperty("measurements")){if(!Array.isArray(e.measurements))return"measurements: array expected";for(var t=0;t<e.measurements.length;++t){var r=w.lr.metrics.Measurement.verify(e.measurements[t]);if(r)return"measurements."+r}}if(null!=e.extra&&e.hasOwnProperty("extra")){if(!m.isObject(e.extra))return"extra: object expected";var n=Object.keys(e.extra);for(t=0;t<n.length;++t)if(!m.isString(e.extra[n[t]]))return"extra: string{k:string} expected"}return null},e.fromObject=function(e){if(e instanceof w.lr.metrics.Metric)return e;var t=new w.lr.metrics.Metric;switch(e.metricType){case"timeToFirstByte":case 0:t.metricType=0;break;case"largestContentfulPaintTime":case 1:t.metricType=1;break;case"initialPageLoadTime":case 2:t.metricType=2;break;case"firstInputDelay":case 3:t.metricType=3;break;case"cumulativeLayoutShift":case 4:t.metricType=4}if(e.measurements){if(!Array.isArray(e.measurements))throw TypeError(".lr.metrics.Metric.measurements: array expected");t.measurements=[];for(var r=0;r<e.measurements.length;++r){if("object"!=typeof e.measurements[r])throw TypeError(".lr.metrics.Metric.measurements: object expected");t.measurements[r]=w.lr.metrics.Measurement.fromObject(e.measurements[r])}}if(e.extra){if("object"!=typeof e.extra)throw TypeError(".lr.metrics.Metric.extra: object expected");t.extra={};var n=Object.keys(e.extra);for(r=0;r<n.length;++r)t.extra[n[r]]=String(e.extra[n[r]])}return t},e.toObject=function(e,t){t||(t={});var r,n={};if((t.arrays||t.defaults)&&(n.measurements=[]),(t.objects||t.defaults)&&(n.extra={}),t.defaults&&(n.metricType=t.enums===String?"timeToFirstByte":0),null!=e.metricType&&e.hasOwnProperty("metricType")&&(n.metricType=t.enums===String?w.lr.metrics.Metric.MetricType[e.metricType]:e.metricType),e.measurements&&e.measurements.length){n.measurements=[];for(var o=0;o<e.measurements.length;++o)n.measurements[o]=w.lr.metrics.Measurement.toObject(e.measurements[o],t)}if(e.extra&&(r=Object.keys(e.extra)).length)for(n.extra={},o=0;o<r.length;++o)n.extra[r[o]]=e.extra[r[o]];return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.MetricType=function(){var e={},t=Object.create(e);return t[e[0]="timeToFirstByte"]=0,t[e[1]="largestContentfulPaintTime"]=1,t[e[2]="initialPageLoadTime"]=2,t[e[3]="firstInputDelay"]=3,t[e[4]="cumulativeLayoutShift"]=4,t}(),e}(),p),y.redux=((d={}).InitialState=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.storeId=0,e.prototype.state=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.storeId&&e.hasOwnProperty("storeId")&&t.uint32(8).uint32(e.storeId),null!=e.state&&e.hasOwnProperty("state")&&w.lr.utils.Value.encode(e.state,t.uint32(18).fork()).ldelim(),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.redux.InitialState;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.storeId=e.uint32();break;case 2:n.state=w.lr.utils.Value.decode(e,e.uint32());break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.storeId&&e.hasOwnProperty("storeId")&&!m.isInteger(e.storeId))return"storeId: integer expected";if(null!=e.state&&e.hasOwnProperty("state")){var t=w.lr.utils.Value.verify(e.state);if(t)return"state."+t}return null},e.fromObject=function(e){if(e instanceof w.lr.redux.InitialState)return e;var t=new w.lr.redux.InitialState;if(null!=e.storeId&&(t.storeId=e.storeId>>>0),null!=e.state){if("object"!=typeof e.state)throw TypeError(".lr.redux.InitialState.state: object expected");t.state=w.lr.utils.Value.fromObject(e.state)}return t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.storeId=0,r.state=null),null!=e.storeId&&e.hasOwnProperty("storeId")&&(r.storeId=e.storeId),null!=e.state&&e.hasOwnProperty("state")&&(r.state=w.lr.utils.Value.toObject(e.state,t)),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),d.ReduxAction=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.action=null,e.prototype.duration=0,e.prototype.storeId=0,e.prototype.stateDelta=null,e.prototype.state=null,e.prototype.count=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.action&&e.hasOwnProperty("action")&&w.lr.utils.Value.encode(e.action,t.uint32(10).fork()).ldelim(),null!=e.duration&&e.hasOwnProperty("duration")&&t.uint32(21).float(e.duration),null!=e.storeId&&e.hasOwnProperty("storeId")&&t.uint32(24).uint32(e.storeId),null!=e.stateDelta&&e.hasOwnProperty("stateDelta")&&w.lr.utils.Value.encode(e.stateDelta,t.uint32(34).fork()).ldelim(),null!=e.state&&e.hasOwnProperty("state")&&w.lr.utils.Value.encode(e.state,t.uint32(42).fork()).ldelim(),null!=e.count&&e.hasOwnProperty("count")&&t.uint32(48).uint32(e.count),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.redux.ReduxAction;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.action=w.lr.utils.Value.decode(e,e.uint32());break;case 2:n.duration=e.float();break;case 3:n.storeId=e.uint32();break;case 4:n.stateDelta=w.lr.utils.Value.decode(e,e.uint32());break;case 5:n.state=w.lr.utils.Value.decode(e,e.uint32());break;case 6:n.count=e.uint32();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.action&&e.hasOwnProperty("action")){var t=w.lr.utils.Value.verify(e.action);if(t)return"action."+t}return null!=e.duration&&e.hasOwnProperty("duration")&&"number"!=typeof e.duration?"duration: number expected":null!=e.storeId&&e.hasOwnProperty("storeId")&&!m.isInteger(e.storeId)?"storeId: integer expected":null!=e.stateDelta&&e.hasOwnProperty("stateDelta")&&(t=w.lr.utils.Value.verify(e.stateDelta))?"stateDelta."+t:null!=e.state&&e.hasOwnProperty("state")&&(t=w.lr.utils.Value.verify(e.state))?"state."+t:null!=e.count&&e.hasOwnProperty("count")&&!m.isInteger(e.count)?"count: integer expected":null},e.fromObject=function(e){if(e instanceof w.lr.redux.ReduxAction)return e;var t=new w.lr.redux.ReduxAction;if(null!=e.action){if("object"!=typeof e.action)throw TypeError(".lr.redux.ReduxAction.action: object expected");t.action=w.lr.utils.Value.fromObject(e.action)}if(null!=e.duration&&(t.duration=Number(e.duration)),null!=e.storeId&&(t.storeId=e.storeId>>>0),null!=e.stateDelta){if("object"!=typeof e.stateDelta)throw TypeError(".lr.redux.ReduxAction.stateDelta: object expected");t.stateDelta=w.lr.utils.Value.fromObject(e.stateDelta)}if(null!=e.state){if("object"!=typeof e.state)throw TypeError(".lr.redux.ReduxAction.state: object expected");t.state=w.lr.utils.Value.fromObject(e.state)}return null!=e.count&&(t.count=e.count>>>0),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.action=null,r.duration=0,r.storeId=0,r.stateDelta=null,r.state=null,r.count=0),null!=e.action&&e.hasOwnProperty("action")&&(r.action=w.lr.utils.Value.toObject(e.action,t)),null!=e.duration&&e.hasOwnProperty("duration")&&(r.duration=t.json&&!isFinite(e.duration)?String(e.duration):e.duration),null!=e.storeId&&e.hasOwnProperty("storeId")&&(r.storeId=e.storeId),null!=e.stateDelta&&e.hasOwnProperty("stateDelta")&&(r.stateDelta=w.lr.utils.Value.toObject(e.stateDelta,t)),null!=e.state&&e.hasOwnProperty("state")&&(r.state=w.lr.utils.Value.toObject(e.state,t)),null!=e.count&&e.hasOwnProperty("count")&&(r.count=e.count),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),d),y.error=((h={}).Truncated=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.reason="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.reason&&e.hasOwnProperty("reason")&&t.uint32(10).string(e.reason),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.error.Truncated;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.reason=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.reason&&e.hasOwnProperty("reason")&&!m.isString(e.reason)?"reason: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.error.Truncated)return e;var t=new w.lr.error.Truncated;return null!=e.reason&&(t.reason=String(e.reason)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.reason=""),null!=e.reason&&e.hasOwnProperty("reason")&&(r.reason=e.reason),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),h),y.EventList=function(){function e(e){if(this.events=[],this.visitedURLs=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.events=m.emptyArray,e.prototype.appID="",e.prototype.recordingID="",e.prototype.visitedURLs=m.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.events&&e.events.length)for(var r=0;r<e.events.length;++r)w.lr.Event.encode(e.events[r],t.uint32(10).fork()).ldelim();if(null!=e.appID&&e.hasOwnProperty("appID")&&t.uint32(18).string(e.appID),null!=e.recordingID&&e.hasOwnProperty("recordingID")&&t.uint32(26).string(e.recordingID),null!=e.visitedURLs&&e.visitedURLs.length)for(r=0;r<e.visitedURLs.length;++r)t.uint32(34).string(e.visitedURLs[r]);return t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.EventList;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.events&&n.events.length||(n.events=[]),n.events.push(w.lr.Event.decode(e,e.uint32()));break;case 2:n.appID=e.string();break;case 3:n.recordingID=e.string();break;case 4:n.visitedURLs&&n.visitedURLs.length||(n.visitedURLs=[]),n.visitedURLs.push(e.string());break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.events&&e.hasOwnProperty("events")){if(!Array.isArray(e.events))return"events: array expected";for(var t=0;t<e.events.length;++t){var r=w.lr.Event.verify(e.events[t]);if(r)return"events."+r}}if(null!=e.appID&&e.hasOwnProperty("appID")&&!m.isString(e.appID))return"appID: string expected";if(null!=e.recordingID&&e.hasOwnProperty("recordingID")&&!m.isString(e.recordingID))return"recordingID: string expected";if(null!=e.visitedURLs&&e.hasOwnProperty("visitedURLs")){if(!Array.isArray(e.visitedURLs))return"visitedURLs: array expected";for(t=0;t<e.visitedURLs.length;++t)if(!m.isString(e.visitedURLs[t]))return"visitedURLs: string[] expected"}return null},e.fromObject=function(e){if(e instanceof w.lr.EventList)return e;var t=new w.lr.EventList;if(e.events){if(!Array.isArray(e.events))throw TypeError(".lr.EventList.events: array expected");t.events=[];for(var r=0;r<e.events.length;++r){if("object"!=typeof e.events[r])throw TypeError(".lr.EventList.events: object expected");t.events[r]=w.lr.Event.fromObject(e.events[r])}}if(null!=e.appID&&(t.appID=String(e.appID)),null!=e.recordingID&&(t.recordingID=String(e.recordingID)),e.visitedURLs){if(!Array.isArray(e.visitedURLs))throw TypeError(".lr.EventList.visitedURLs: array expected");for(t.visitedURLs=[],r=0;r<e.visitedURLs.length;++r)t.visitedURLs[r]=String(e.visitedURLs[r])}return t},e.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.events=[],r.visitedURLs=[]),t.defaults&&(r.appID="",r.recordingID=""),e.events&&e.events.length){r.events=[];for(var n=0;n<e.events.length;++n)r.events[n]=w.lr.Event.toObject(e.events[n],t)}if(null!=e.appID&&e.hasOwnProperty("appID")&&(r.appID=e.appID),null!=e.recordingID&&e.hasOwnProperty("recordingID")&&(r.recordingID=e.recordingID),e.visitedURLs&&e.visitedURLs.length)for(r.visitedURLs=[],n=0;n<e.visitedURLs.length;++n)r.visitedURLs[n]=e.visitedURLs[n];return r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),y.InitialPageLoadMetrics=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.initialPageLoadTime=0,e.prototype.timeToFirstByte=0,e.prototype.largestContentfulPaintTime=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.initialPageLoadTime&&e.hasOwnProperty("initialPageLoadTime")&&t.uint32(8).uint32(e.initialPageLoadTime),null!=e.timeToFirstByte&&e.hasOwnProperty("timeToFirstByte")&&t.uint32(16).uint32(e.timeToFirstByte),null!=e.largestContentfulPaintTime&&e.hasOwnProperty("largestContentfulPaintTime")&&t.uint32(24).uint32(e.largestContentfulPaintTime),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.InitialPageLoadMetrics;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.initialPageLoadTime=e.uint32();break;case 2:n.timeToFirstByte=e.uint32();break;case 3:n.largestContentfulPaintTime=e.uint32();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.initialPageLoadTime&&e.hasOwnProperty("initialPageLoadTime")&&!m.isInteger(e.initialPageLoadTime)?"initialPageLoadTime: integer expected":null!=e.timeToFirstByte&&e.hasOwnProperty("timeToFirstByte")&&!m.isInteger(e.timeToFirstByte)?"timeToFirstByte: integer expected":null!=e.largestContentfulPaintTime&&e.hasOwnProperty("largestContentfulPaintTime")&&!m.isInteger(e.largestContentfulPaintTime)?"largestContentfulPaintTime: integer expected":null},e.fromObject=function(e){if(e instanceof w.lr.InitialPageLoadMetrics)return e;var t=new w.lr.InitialPageLoadMetrics;return null!=e.initialPageLoadTime&&(t.initialPageLoadTime=e.initialPageLoadTime>>>0),null!=e.timeToFirstByte&&(t.timeToFirstByte=e.timeToFirstByte>>>0),null!=e.largestContentfulPaintTime&&(t.largestContentfulPaintTime=e.largestContentfulPaintTime>>>0),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.initialPageLoadTime=0,r.timeToFirstByte=0,r.largestContentfulPaintTime=0),null!=e.initialPageLoadTime&&e.hasOwnProperty("initialPageLoadTime")&&(r.initialPageLoadTime=e.initialPageLoadTime),null!=e.timeToFirstByte&&e.hasOwnProperty("timeToFirstByte")&&(r.timeToFirstByte=e.timeToFirstByte),null!=e.largestContentfulPaintTime&&e.hasOwnProperty("largestContentfulPaintTime")&&(r.largestContentfulPaintTime=e.largestContentfulPaintTime),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),y.Metadata=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}var t;return e.prototype.release="",e.prototype.username="",e.prototype.browserInfo=null,e.prototype.deviceInfo=null,e.prototype.sdkVersion="",e.prototype.scriptVersion="",e.prototype.country="",e.prototype.region="",e.prototype.city="",e.prototype.latitude=0,e.prototype.longitude=0,e.prototype.ip="",e.prototype.isInactive=!1,e.prototype.outsideIntegrations=null,e.prototype.userFingerprint="",e.prototype.initialPageLoadMetrics=null,e.prototype.scriptSrc="",e.prototype.appInfo=null,Object.defineProperty(e.prototype,"platform",{get:m.oneOfGetter(t=["browserInfo","deviceInfo"]),set:m.oneOfSetter(t)}),e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.release&&e.hasOwnProperty("release")&&t.uint32(10).string(e.release),null!=e.username&&e.hasOwnProperty("username")&&t.uint32(18).string(e.username),null!=e.browserInfo&&e.hasOwnProperty("browserInfo")&&w.lr.Metadata.BrowserInfo.encode(e.browserInfo,t.uint32(26).fork()).ldelim(),null!=e.sdkVersion&&e.hasOwnProperty("sdkVersion")&&t.uint32(34).string(e.sdkVersion),null!=e.scriptVersion&&e.hasOwnProperty("scriptVersion")&&t.uint32(42).string(e.scriptVersion),null!=e.country&&e.hasOwnProperty("country")&&t.uint32(50).string(e.country),null!=e.region&&e.hasOwnProperty("region")&&t.uint32(58).string(e.region),null!=e.city&&e.hasOwnProperty("city")&&t.uint32(66).string(e.city),null!=e.latitude&&e.hasOwnProperty("latitude")&&t.uint32(77).float(e.latitude),null!=e.longitude&&e.hasOwnProperty("longitude")&&t.uint32(85).float(e.longitude),null!=e.ip&&e.hasOwnProperty("ip")&&t.uint32(90).string(e.ip),null!=e.isInactive&&e.hasOwnProperty("isInactive")&&t.uint32(96).bool(e.isInactive),null!=e.outsideIntegrations&&e.hasOwnProperty("outsideIntegrations")&&w.lr.Metadata.OutsideIntegrations.encode(e.outsideIntegrations,t.uint32(106).fork()).ldelim(),null!=e.userFingerprint&&e.hasOwnProperty("userFingerprint")&&t.uint32(114).string(e.userFingerprint),null!=e.initialPageLoadMetrics&&e.hasOwnProperty("initialPageLoadMetrics")&&w.lr.InitialPageLoadMetrics.encode(e.initialPageLoadMetrics,t.uint32(122).fork()).ldelim(),null!=e.deviceInfo&&e.hasOwnProperty("deviceInfo")&&w.lr.Metadata.DeviceInfo.encode(e.deviceInfo,t.uint32(130).fork()).ldelim(),null!=e.scriptSrc&&e.hasOwnProperty("scriptSrc")&&t.uint32(138).string(e.scriptSrc),null!=e.appInfo&&e.hasOwnProperty("appInfo")&&w.lr.Metadata.AppInfo.encode(e.appInfo,t.uint32(146).fork()).ldelim(),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.Metadata;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.release=e.string();break;case 2:n.username=e.string();break;case 3:n.browserInfo=w.lr.Metadata.BrowserInfo.decode(e,e.uint32());break;case 16:n.deviceInfo=w.lr.Metadata.DeviceInfo.decode(e,e.uint32());break;case 4:n.sdkVersion=e.string();break;case 5:n.scriptVersion=e.string();break;case 6:n.country=e.string();break;case 7:n.region=e.string();break;case 8:n.city=e.string();break;case 9:n.latitude=e.float();break;case 10:n.longitude=e.float();break;case 11:n.ip=e.string();break;case 12:n.isInactive=e.bool();break;case 13:n.outsideIntegrations=w.lr.Metadata.OutsideIntegrations.decode(e,e.uint32());break;case 14:n.userFingerprint=e.string();break;case 15:n.initialPageLoadMetrics=w.lr.InitialPageLoadMetrics.decode(e,e.uint32());break;case 17:n.scriptSrc=e.string();break;case 18:n.appInfo=w.lr.Metadata.AppInfo.decode(e,e.uint32());break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";var t={};if(null!=e.release&&e.hasOwnProperty("release")&&!m.isString(e.release))return"release: string expected";if(null!=e.username&&e.hasOwnProperty("username")&&!m.isString(e.username))return"username: string expected";if(null!=e.browserInfo&&e.hasOwnProperty("browserInfo")){t.platform=1;var r=w.lr.Metadata.BrowserInfo.verify(e.browserInfo);if(r)return"browserInfo."+r}if(null!=e.deviceInfo&&e.hasOwnProperty("deviceInfo")){if(1===t.platform)return"platform: multiple values";if(t.platform=1,r=w.lr.Metadata.DeviceInfo.verify(e.deviceInfo))return"deviceInfo."+r}return null!=e.sdkVersion&&e.hasOwnProperty("sdkVersion")&&!m.isString(e.sdkVersion)?"sdkVersion: string expected":null!=e.scriptVersion&&e.hasOwnProperty("scriptVersion")&&!m.isString(e.scriptVersion)?"scriptVersion: string expected":null!=e.country&&e.hasOwnProperty("country")&&!m.isString(e.country)?"country: string expected":null!=e.region&&e.hasOwnProperty("region")&&!m.isString(e.region)?"region: string expected":null!=e.city&&e.hasOwnProperty("city")&&!m.isString(e.city)?"city: string expected":null!=e.latitude&&e.hasOwnProperty("latitude")&&"number"!=typeof e.latitude?"latitude: number expected":null!=e.longitude&&e.hasOwnProperty("longitude")&&"number"!=typeof e.longitude?"longitude: number expected":null!=e.ip&&e.hasOwnProperty("ip")&&!m.isString(e.ip)?"ip: string expected":null!=e.isInactive&&e.hasOwnProperty("isInactive")&&"boolean"!=typeof e.isInactive?"isInactive: boolean expected":null!=e.outsideIntegrations&&e.hasOwnProperty("outsideIntegrations")&&(r=w.lr.Metadata.OutsideIntegrations.verify(e.outsideIntegrations))?"outsideIntegrations."+r:null!=e.userFingerprint&&e.hasOwnProperty("userFingerprint")&&!m.isString(e.userFingerprint)?"userFingerprint: string expected":null!=e.initialPageLoadMetrics&&e.hasOwnProperty("initialPageLoadMetrics")&&(r=w.lr.InitialPageLoadMetrics.verify(e.initialPageLoadMetrics))?"initialPageLoadMetrics."+r:null!=e.scriptSrc&&e.hasOwnProperty("scriptSrc")&&!m.isString(e.scriptSrc)?"scriptSrc: string expected":null!=e.appInfo&&e.hasOwnProperty("appInfo")&&(r=w.lr.Metadata.AppInfo.verify(e.appInfo))?"appInfo."+r:null},e.fromObject=function(e){if(e instanceof w.lr.Metadata)return e;var t=new w.lr.Metadata;if(null!=e.release&&(t.release=String(e.release)),null!=e.username&&(t.username=String(e.username)),null!=e.browserInfo){if("object"!=typeof e.browserInfo)throw TypeError(".lr.Metadata.browserInfo: object expected");t.browserInfo=w.lr.Metadata.BrowserInfo.fromObject(e.browserInfo)}if(null!=e.deviceInfo){if("object"!=typeof e.deviceInfo)throw TypeError(".lr.Metadata.deviceInfo: object expected");t.deviceInfo=w.lr.Metadata.DeviceInfo.fromObject(e.deviceInfo)}if(null!=e.sdkVersion&&(t.sdkVersion=String(e.sdkVersion)),null!=e.scriptVersion&&(t.scriptVersion=String(e.scriptVersion)),null!=e.country&&(t.country=String(e.country)),null!=e.region&&(t.region=String(e.region)),null!=e.city&&(t.city=String(e.city)),null!=e.latitude&&(t.latitude=Number(e.latitude)),null!=e.longitude&&(t.longitude=Number(e.longitude)),null!=e.ip&&(t.ip=String(e.ip)),null!=e.isInactive&&(t.isInactive=Boolean(e.isInactive)),null!=e.outsideIntegrations){if("object"!=typeof e.outsideIntegrations)throw TypeError(".lr.Metadata.outsideIntegrations: object expected");t.outsideIntegrations=w.lr.Metadata.OutsideIntegrations.fromObject(e.outsideIntegrations)}if(null!=e.userFingerprint&&(t.userFingerprint=String(e.userFingerprint)),null!=e.initialPageLoadMetrics){if("object"!=typeof e.initialPageLoadMetrics)throw TypeError(".lr.Metadata.initialPageLoadMetrics: object expected");t.initialPageLoadMetrics=w.lr.InitialPageLoadMetrics.fromObject(e.initialPageLoadMetrics)}if(null!=e.scriptSrc&&(t.scriptSrc=String(e.scriptSrc)),null!=e.appInfo){if("object"!=typeof e.appInfo)throw TypeError(".lr.Metadata.appInfo: object expected");t.appInfo=w.lr.Metadata.AppInfo.fromObject(e.appInfo)}return t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.release="",r.username="",r.sdkVersion="",r.scriptVersion="",r.country="",r.region="",r.city="",r.latitude=0,r.longitude=0,r.ip="",r.isInactive=!1,r.outsideIntegrations=null,r.userFingerprint="",r.initialPageLoadMetrics=null,r.scriptSrc="",r.appInfo=null),null!=e.release&&e.hasOwnProperty("release")&&(r.release=e.release),null!=e.username&&e.hasOwnProperty("username")&&(r.username=e.username),null!=e.browserInfo&&e.hasOwnProperty("browserInfo")&&(r.browserInfo=w.lr.Metadata.BrowserInfo.toObject(e.browserInfo,t),t.oneofs&&(r.platform="browserInfo")),null!=e.sdkVersion&&e.hasOwnProperty("sdkVersion")&&(r.sdkVersion=e.sdkVersion),null!=e.scriptVersion&&e.hasOwnProperty("scriptVersion")&&(r.scriptVersion=e.scriptVersion),null!=e.country&&e.hasOwnProperty("country")&&(r.country=e.country),null!=e.region&&e.hasOwnProperty("region")&&(r.region=e.region),null!=e.city&&e.hasOwnProperty("city")&&(r.city=e.city),null!=e.latitude&&e.hasOwnProperty("latitude")&&(r.latitude=t.json&&!isFinite(e.latitude)?String(e.latitude):e.latitude),null!=e.longitude&&e.hasOwnProperty("longitude")&&(r.longitude=t.json&&!isFinite(e.longitude)?String(e.longitude):e.longitude),null!=e.ip&&e.hasOwnProperty("ip")&&(r.ip=e.ip),null!=e.isInactive&&e.hasOwnProperty("isInactive")&&(r.isInactive=e.isInactive),null!=e.outsideIntegrations&&e.hasOwnProperty("outsideIntegrations")&&(r.outsideIntegrations=w.lr.Metadata.OutsideIntegrations.toObject(e.outsideIntegrations,t)),null!=e.userFingerprint&&e.hasOwnProperty("userFingerprint")&&(r.userFingerprint=e.userFingerprint),null!=e.initialPageLoadMetrics&&e.hasOwnProperty("initialPageLoadMetrics")&&(r.initialPageLoadMetrics=w.lr.InitialPageLoadMetrics.toObject(e.initialPageLoadMetrics,t)),null!=e.deviceInfo&&e.hasOwnProperty("deviceInfo")&&(r.deviceInfo=w.lr.Metadata.DeviceInfo.toObject(e.deviceInfo,t),t.oneofs&&(r.platform="deviceInfo")),null!=e.scriptSrc&&e.hasOwnProperty("scriptSrc")&&(r.scriptSrc=e.scriptSrc),null!=e.appInfo&&e.hasOwnProperty("appInfo")&&(r.appInfo=w.lr.Metadata.AppInfo.toObject(e.appInfo,t)),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.BrowserInfo=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.href="",e.prototype.codeName="",e.prototype.language="",e.prototype.name="",e.prototype.platform="",e.prototype.useragent="",e.prototype.version="",e.prototype.referrer="",e.prototype.isLocalhost=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.href&&e.hasOwnProperty("href")&&t.uint32(10).string(e.href),null!=e.codeName&&e.hasOwnProperty("codeName")&&t.uint32(18).string(e.codeName),null!=e.language&&e.hasOwnProperty("language")&&t.uint32(26).string(e.language),null!=e.name&&e.hasOwnProperty("name")&&t.uint32(34).string(e.name),null!=e.platform&&e.hasOwnProperty("platform")&&t.uint32(42).string(e.platform),null!=e.useragent&&e.hasOwnProperty("useragent")&&t.uint32(50).string(e.useragent),null!=e.version&&e.hasOwnProperty("version")&&t.uint32(58).string(e.version),null!=e.referrer&&e.hasOwnProperty("referrer")&&t.uint32(66).string(e.referrer),null!=e.isLocalhost&&e.hasOwnProperty("isLocalhost")&&t.uint32(72).bool(e.isLocalhost),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.Metadata.BrowserInfo;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.href=e.string();break;case 2:n.codeName=e.string();break;case 3:n.language=e.string();break;case 4:n.name=e.string();break;case 5:n.platform=e.string();break;case 6:n.useragent=e.string();break;case 7:n.version=e.string();break;case 8:n.referrer=e.string();break;case 9:n.isLocalhost=e.bool();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.href&&e.hasOwnProperty("href")&&!m.isString(e.href)?"href: string expected":null!=e.codeName&&e.hasOwnProperty("codeName")&&!m.isString(e.codeName)?"codeName: string expected":null!=e.language&&e.hasOwnProperty("language")&&!m.isString(e.language)?"language: string expected":null!=e.name&&e.hasOwnProperty("name")&&!m.isString(e.name)?"name: string expected":null!=e.platform&&e.hasOwnProperty("platform")&&!m.isString(e.platform)?"platform: string expected":null!=e.useragent&&e.hasOwnProperty("useragent")&&!m.isString(e.useragent)?"useragent: string expected":null!=e.version&&e.hasOwnProperty("version")&&!m.isString(e.version)?"version: string expected":null!=e.referrer&&e.hasOwnProperty("referrer")&&!m.isString(e.referrer)?"referrer: string expected":null!=e.isLocalhost&&e.hasOwnProperty("isLocalhost")&&"boolean"!=typeof e.isLocalhost?"isLocalhost: boolean expected":null},e.fromObject=function(e){if(e instanceof w.lr.Metadata.BrowserInfo)return e;var t=new w.lr.Metadata.BrowserInfo;return null!=e.href&&(t.href=String(e.href)),null!=e.codeName&&(t.codeName=String(e.codeName)),null!=e.language&&(t.language=String(e.language)),null!=e.name&&(t.name=String(e.name)),null!=e.platform&&(t.platform=String(e.platform)),null!=e.useragent&&(t.useragent=String(e.useragent)),null!=e.version&&(t.version=String(e.version)),null!=e.referrer&&(t.referrer=String(e.referrer)),null!=e.isLocalhost&&(t.isLocalhost=Boolean(e.isLocalhost)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.href="",r.codeName="",r.language="",r.name="",r.platform="",r.useragent="",r.version="",r.referrer="",r.isLocalhost=!1),null!=e.href&&e.hasOwnProperty("href")&&(r.href=e.href),null!=e.codeName&&e.hasOwnProperty("codeName")&&(r.codeName=e.codeName),null!=e.language&&e.hasOwnProperty("language")&&(r.language=e.language),null!=e.name&&e.hasOwnProperty("name")&&(r.name=e.name),null!=e.platform&&e.hasOwnProperty("platform")&&(r.platform=e.platform),null!=e.useragent&&e.hasOwnProperty("useragent")&&(r.useragent=e.useragent),null!=e.version&&e.hasOwnProperty("version")&&(r.version=e.version),null!=e.referrer&&e.hasOwnProperty("referrer")&&(r.referrer=e.referrer),null!=e.isLocalhost&&e.hasOwnProperty("isLocalhost")&&(r.isLocalhost=e.isLocalhost),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e.DeviceInfo=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.deviceType=0,e.prototype.deviceName="",e.prototype.manufacturer="",e.prototype.release="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.deviceType&&e.hasOwnProperty("deviceType")&&t.uint32(8).int32(e.deviceType),null!=e.deviceName&&e.hasOwnProperty("deviceName")&&t.uint32(18).string(e.deviceName),null!=e.manufacturer&&e.hasOwnProperty("manufacturer")&&t.uint32(26).string(e.manufacturer),null!=e.release&&e.hasOwnProperty("release")&&t.uint32(34).string(e.release),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.Metadata.DeviceInfo;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.deviceType=e.int32();break;case 2:n.deviceName=e.string();break;case 3:n.manufacturer=e.string();break;case 4:n.release=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.deviceType&&e.hasOwnProperty("deviceType"))switch(e.deviceType){default:return"deviceType: enum value expected";case 0:}return null!=e.deviceName&&e.hasOwnProperty("deviceName")&&!m.isString(e.deviceName)?"deviceName: string expected":null!=e.manufacturer&&e.hasOwnProperty("manufacturer")&&!m.isString(e.manufacturer)?"manufacturer: string expected":null!=e.release&&e.hasOwnProperty("release")&&!m.isString(e.release)?"release: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.Metadata.DeviceInfo)return e;var t=new w.lr.Metadata.DeviceInfo;switch(e.deviceType){case"ANDROID":case 0:t.deviceType=0}return null!=e.deviceName&&(t.deviceName=String(e.deviceName)),null!=e.manufacturer&&(t.manufacturer=String(e.manufacturer)),null!=e.release&&(t.release=String(e.release)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.deviceType=t.enums===String?"ANDROID":0,r.deviceName="",r.manufacturer="",r.release=""),null!=e.deviceType&&e.hasOwnProperty("deviceType")&&(r.deviceType=t.enums===String?w.lr.Metadata.DeviceInfo.DeviceType[e.deviceType]:e.deviceType),null!=e.deviceName&&e.hasOwnProperty("deviceName")&&(r.deviceName=e.deviceName),null!=e.manufacturer&&e.hasOwnProperty("manufacturer")&&(r.manufacturer=e.manufacturer),null!=e.release&&e.hasOwnProperty("release")&&(r.release=e.release),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.DeviceType=function(){var e={},t=Object.create(e);return t[e[0]="ANDROID"]=0,t}(),e}(),e.AppInfo=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.appName="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.appName&&e.hasOwnProperty("appName")&&t.uint32(10).string(e.appName),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.Metadata.AppInfo;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.appName=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.appName&&e.hasOwnProperty("appName")&&!m.isString(e.appName)?"appName: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.Metadata.AppInfo)return e;var t=new w.lr.Metadata.AppInfo;return null!=e.appName&&(t.appName=String(e.appName)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.appName=""),null!=e.appName&&e.hasOwnProperty("appName")&&(r.appName=e.appName),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e.OutsideIntegrations=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.hasIntercom=!1,e.prototype.hasZendesk=!1,e.prototype.hasDesk=!1,e.prototype.hasZendeskChat=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.hasIntercom&&e.hasOwnProperty("hasIntercom")&&t.uint32(8).bool(e.hasIntercom),null!=e.hasZendesk&&e.hasOwnProperty("hasZendesk")&&t.uint32(16).bool(e.hasZendesk),null!=e.hasDesk&&e.hasOwnProperty("hasDesk")&&t.uint32(24).bool(e.hasDesk),null!=e.hasZendeskChat&&e.hasOwnProperty("hasZendeskChat")&&t.uint32(32).bool(e.hasZendeskChat),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.Metadata.OutsideIntegrations;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.hasIntercom=e.bool();break;case 2:n.hasZendesk=e.bool();break;case 3:n.hasDesk=e.bool();break;case 4:n.hasZendeskChat=e.bool();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.hasIntercom&&e.hasOwnProperty("hasIntercom")&&"boolean"!=typeof e.hasIntercom?"hasIntercom: boolean expected":null!=e.hasZendesk&&e.hasOwnProperty("hasZendesk")&&"boolean"!=typeof e.hasZendesk?"hasZendesk: boolean expected":null!=e.hasDesk&&e.hasOwnProperty("hasDesk")&&"boolean"!=typeof e.hasDesk?"hasDesk: boolean expected":null!=e.hasZendeskChat&&e.hasOwnProperty("hasZendeskChat")&&"boolean"!=typeof e.hasZendeskChat?"hasZendeskChat: boolean expected":null},e.fromObject=function(e){if(e instanceof w.lr.Metadata.OutsideIntegrations)return e;var t=new w.lr.Metadata.OutsideIntegrations;return null!=e.hasIntercom&&(t.hasIntercom=Boolean(e.hasIntercom)),null!=e.hasZendesk&&(t.hasZendesk=Boolean(e.hasZendesk)),null!=e.hasDesk&&(t.hasDesk=Boolean(e.hasDesk)),null!=e.hasZendeskChat&&(t.hasZendeskChat=Boolean(e.hasZendeskChat)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.hasIntercom=!1,r.hasZendesk=!1,r.hasDesk=!1,r.hasZendeskChat=!1),null!=e.hasIntercom&&e.hasOwnProperty("hasIntercom")&&(r.hasIntercom=e.hasIntercom),null!=e.hasZendesk&&e.hasOwnProperty("hasZendesk")&&(r.hasZendesk=e.hasZendesk),null!=e.hasDesk&&e.hasOwnProperty("hasDesk")&&(r.hasDesk=e.hasDesk),null!=e.hasZendeskChat&&e.hasOwnProperty("hasZendeskChat")&&(r.hasZendeskChat=e.hasZendeskChat),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e}(),y.Event=function(){function e(e){if(this.stackTrace=[],this.fileMap={},e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.time=0,e.prototype.type="",e.prototype.data=m.newBuffer([]),e.prototype.threadID=0,e.prototype.seqID=0,e.prototype.stackTrace=m.emptyArray,e.prototype.fileMap=m.emptyObject,e.prototype.sessionID=0,e.prototype.timeOffset=0,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.time&&e.hasOwnProperty("time")&&t.uint32(9).double(e.time),null!=e.type&&e.hasOwnProperty("type")&&t.uint32(18).string(e.type),null!=e.data&&e.hasOwnProperty("data")&&t.uint32(26).bytes(e.data),null!=e.threadID&&e.hasOwnProperty("threadID")&&t.uint32(32).uint32(e.threadID),null!=e.seqID&&e.hasOwnProperty("seqID")&&t.uint32(40).uint32(e.seqID),null!=e.stackTrace&&e.stackTrace.length)for(var r=0;r<e.stackTrace.length;++r)w.lr.Event.StackFrame.encode(e.stackTrace[r],t.uint32(50).fork()).ldelim();if(null!=e.fileMap&&e.hasOwnProperty("fileMap")){var n=Object.keys(e.fileMap);for(r=0;r<n.length;++r)t.uint32(74).fork().uint32(10).string(n[r]).uint32(18).string(e.fileMap[n[r]]).ldelim()}return null!=e.sessionID&&e.hasOwnProperty("sessionID")&&t.uint32(80).uint32(e.sessionID),null!=e.timeOffset&&e.hasOwnProperty("timeOffset")&&t.uint32(89).double(e.timeOffset),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r,n=void 0===t?e.len:e.pos+t,o=new w.lr.Event;e.pos<n;){var i=e.uint32();switch(i>>>3){case 1:o.time=e.double();break;case 2:o.type=e.string();break;case 3:o.data=e.bytes();break;case 4:o.threadID=e.uint32();break;case 5:o.seqID=e.uint32();break;case 6:o.stackTrace&&o.stackTrace.length||(o.stackTrace=[]),o.stackTrace.push(w.lr.Event.StackFrame.decode(e,e.uint32()));break;case 9:e.skip().pos++,o.fileMap===m.emptyObject&&(o.fileMap={}),r=e.string(),e.pos++,o.fileMap[r]=e.string();break;case 10:o.sessionID=e.uint32();break;case 11:o.timeOffset=e.double();break;default:e.skipType(7&i)}}return o},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.time&&e.hasOwnProperty("time")&&"number"!=typeof e.time)return"time: number expected";if(null!=e.type&&e.hasOwnProperty("type")&&!m.isString(e.type))return"type: string expected";if(null!=e.data&&e.hasOwnProperty("data")&&!(e.data&&"number"==typeof e.data.length||m.isString(e.data)))return"data: buffer expected";if(null!=e.threadID&&e.hasOwnProperty("threadID")&&!m.isInteger(e.threadID))return"threadID: integer expected";if(null!=e.seqID&&e.hasOwnProperty("seqID")&&!m.isInteger(e.seqID))return"seqID: integer expected";if(null!=e.stackTrace&&e.hasOwnProperty("stackTrace")){if(!Array.isArray(e.stackTrace))return"stackTrace: array expected";for(var t=0;t<e.stackTrace.length;++t){var r=w.lr.Event.StackFrame.verify(e.stackTrace[t]);if(r)return"stackTrace."+r}}if(null!=e.fileMap&&e.hasOwnProperty("fileMap")){if(!m.isObject(e.fileMap))return"fileMap: object expected";var n=Object.keys(e.fileMap);for(t=0;t<n.length;++t)if(!m.isString(e.fileMap[n[t]]))return"fileMap: string{k:string} expected"}return null!=e.sessionID&&e.hasOwnProperty("sessionID")&&!m.isInteger(e.sessionID)?"sessionID: integer expected":null!=e.timeOffset&&e.hasOwnProperty("timeOffset")&&"number"!=typeof e.timeOffset?"timeOffset: number expected":null},e.fromObject=function(e){if(e instanceof w.lr.Event)return e;var t=new w.lr.Event;if(null!=e.time&&(t.time=Number(e.time)),null!=e.type&&(t.type=String(e.type)),null!=e.data&&("string"==typeof e.data?m.base64.decode(e.data,t.data=m.newBuffer(m.base64.length(e.data)),0):e.data.length&&(t.data=e.data)),null!=e.threadID&&(t.threadID=e.threadID>>>0),null!=e.seqID&&(t.seqID=e.seqID>>>0),e.stackTrace){if(!Array.isArray(e.stackTrace))throw TypeError(".lr.Event.stackTrace: array expected");t.stackTrace=[];for(var r=0;r<e.stackTrace.length;++r){if("object"!=typeof e.stackTrace[r])throw TypeError(".lr.Event.stackTrace: object expected");t.stackTrace[r]=w.lr.Event.StackFrame.fromObject(e.stackTrace[r])}}if(e.fileMap){if("object"!=typeof e.fileMap)throw TypeError(".lr.Event.fileMap: object expected");t.fileMap={};var n=Object.keys(e.fileMap);for(r=0;r<n.length;++r)t.fileMap[n[r]]=String(e.fileMap[n[r]])}return null!=e.sessionID&&(t.sessionID=e.sessionID>>>0),null!=e.timeOffset&&(t.timeOffset=Number(e.timeOffset)),t},e.toObject=function(e,t){t||(t={});var r,n={};if((t.arrays||t.defaults)&&(n.stackTrace=[]),(t.objects||t.defaults)&&(n.fileMap={}),t.defaults&&(n.time=0,n.type="",n.data=t.bytes===String?"":[],n.threadID=0,n.seqID=0,n.sessionID=0,n.timeOffset=0),null!=e.time&&e.hasOwnProperty("time")&&(n.time=t.json&&!isFinite(e.time)?String(e.time):e.time),null!=e.type&&e.hasOwnProperty("type")&&(n.type=e.type),null!=e.data&&e.hasOwnProperty("data")&&(n.data=t.bytes===String?m.base64.encode(e.data,0,e.data.length):t.bytes===Array?Array.prototype.slice.call(e.data):e.data),null!=e.threadID&&e.hasOwnProperty("threadID")&&(n.threadID=e.threadID),null!=e.seqID&&e.hasOwnProperty("seqID")&&(n.seqID=e.seqID),e.stackTrace&&e.stackTrace.length){n.stackTrace=[];for(var o=0;o<e.stackTrace.length;++o)n.stackTrace[o]=w.lr.Event.StackFrame.toObject(e.stackTrace[o],t)}if(e.fileMap&&(r=Object.keys(e.fileMap)).length)for(n.fileMap={},o=0;o<r.length;++o)n.fileMap[r[o]]=e.fileMap[r[o]];return null!=e.sessionID&&e.hasOwnProperty("sessionID")&&(n.sessionID=e.sessionID),null!=e.timeOffset&&e.hasOwnProperty("timeOffset")&&(n.timeOffset=t.json&&!isFinite(e.timeOffset)?String(e.timeOffset):e.timeOffset),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.StackFrame=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.lineNumber=0,e.prototype.columnNumber=0,e.prototype.fileName="",e.prototype.functionName="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.lineNumber&&e.hasOwnProperty("lineNumber")&&t.uint32(8).uint32(e.lineNumber),null!=e.columnNumber&&e.hasOwnProperty("columnNumber")&&t.uint32(16).uint32(e.columnNumber),null!=e.fileName&&e.hasOwnProperty("fileName")&&t.uint32(26).string(e.fileName),null!=e.functionName&&e.hasOwnProperty("functionName")&&t.uint32(34).string(e.functionName),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.Event.StackFrame;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.lineNumber=e.uint32();break;case 2:n.columnNumber=e.uint32();break;case 3:n.fileName=e.string();break;case 4:n.functionName=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.lineNumber&&e.hasOwnProperty("lineNumber")&&!m.isInteger(e.lineNumber)?"lineNumber: integer expected":null!=e.columnNumber&&e.hasOwnProperty("columnNumber")&&!m.isInteger(e.columnNumber)?"columnNumber: integer expected":null!=e.fileName&&e.hasOwnProperty("fileName")&&!m.isString(e.fileName)?"fileName: string expected":null!=e.functionName&&e.hasOwnProperty("functionName")&&!m.isString(e.functionName)?"functionName: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.Event.StackFrame)return e;var t=new w.lr.Event.StackFrame;return null!=e.lineNumber&&(t.lineNumber=e.lineNumber>>>0),null!=e.columnNumber&&(t.columnNumber=e.columnNumber>>>0),null!=e.fileName&&(t.fileName=String(e.fileName)),null!=e.functionName&&(t.functionName=String(e.functionName)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.lineNumber=0,r.columnNumber=0,r.fileName="",r.functionName=""),null!=e.lineNumber&&e.hasOwnProperty("lineNumber")&&(r.lineNumber=e.lineNumber),null!=e.columnNumber&&e.hasOwnProperty("columnNumber")&&(r.columnNumber=e.columnNumber),null!=e.fileName&&e.hasOwnProperty("fileName")&&(r.fileName=e.fileName),null!=e.functionName&&e.hasOwnProperty("functionName")&&(r.functionName=e.functionName),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e}(),y.Activate=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.Activate;e.pos<r;){var o=e.uint32();e.skipType(7&o)}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null},e.fromObject=function(e){return e instanceof w.lr.Activate?e:new w.lr.Activate},e.toObject=function(){return{}},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),y.CustomEvent=function(){function e(e){if(this.eventProperties={},e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.eventName="",e.prototype.eventProperties=m.emptyObject,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.eventName&&e.hasOwnProperty("eventName")&&t.uint32(10).string(e.eventName),null!=e.eventProperties&&e.hasOwnProperty("eventProperties"))for(var r=Object.keys(e.eventProperties),n=0;n<r.length;++n)t.uint32(18).fork().uint32(10).string(r[n]),w.lr.CustomEvent.EventPropertyVariant.encode(e.eventProperties[r[n]],t.uint32(18).fork()).ldelim().ldelim();return t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r,n=void 0===t?e.len:e.pos+t,o=new w.lr.CustomEvent;e.pos<n;){var i=e.uint32();switch(i>>>3){case 1:o.eventName=e.string();break;case 2:e.skip().pos++,o.eventProperties===m.emptyObject&&(o.eventProperties={}),r=e.string(),e.pos++,o.eventProperties[r]=w.lr.CustomEvent.EventPropertyVariant.decode(e,e.uint32());break;default:e.skipType(7&i)}}return o},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.eventName&&e.hasOwnProperty("eventName")&&!m.isString(e.eventName))return"eventName: string expected";if(null!=e.eventProperties&&e.hasOwnProperty("eventProperties")){if(!m.isObject(e.eventProperties))return"eventProperties: object expected";for(var t=Object.keys(e.eventProperties),r=0;r<t.length;++r){var n=w.lr.CustomEvent.EventPropertyVariant.verify(e.eventProperties[t[r]]);if(n)return"eventProperties."+n}}return null},e.fromObject=function(e){if(e instanceof w.lr.CustomEvent)return e;var t=new w.lr.CustomEvent;if(null!=e.eventName&&(t.eventName=String(e.eventName)),e.eventProperties){if("object"!=typeof e.eventProperties)throw TypeError(".lr.CustomEvent.eventProperties: object expected");t.eventProperties={};for(var r=Object.keys(e.eventProperties),n=0;n<r.length;++n){if("object"!=typeof e.eventProperties[r[n]])throw TypeError(".lr.CustomEvent.eventProperties: object expected");t.eventProperties[r[n]]=w.lr.CustomEvent.EventPropertyVariant.fromObject(e.eventProperties[r[n]])}}return t},e.toObject=function(e,t){t||(t={});var r,n={};if((t.objects||t.defaults)&&(n.eventProperties={}),t.defaults&&(n.eventName=""),null!=e.eventName&&e.hasOwnProperty("eventName")&&(n.eventName=e.eventName),e.eventProperties&&(r=Object.keys(e.eventProperties)).length){n.eventProperties={};for(var o=0;o<r.length;++o)n.eventProperties[r[o]]=w.lr.CustomEvent.EventPropertyVariant.toObject(e.eventProperties[r[o]],t)}return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.EventPropertyVariant=function(){function e(e){if(this.stringVal=[],this.doubleVal=[],this.boolVal=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.stringVal=m.emptyArray,e.prototype.doubleVal=m.emptyArray,e.prototype.boolVal=m.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.stringVal&&e.stringVal.length)for(var r=0;r<e.stringVal.length;++r)t.uint32(10).string(e.stringVal[r]);if(null!=e.doubleVal&&e.doubleVal.length){for(t.uint32(18).fork(),r=0;r<e.doubleVal.length;++r)t.double(e.doubleVal[r]);t.ldelim()}if(null!=e.boolVal&&e.boolVal.length){for(t.uint32(26).fork(),r=0;r<e.boolVal.length;++r)t.bool(e.boolVal[r]);t.ldelim()}return t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.CustomEvent.EventPropertyVariant;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.stringVal&&n.stringVal.length||(n.stringVal=[]),n.stringVal.push(e.string());break;case 2:if(n.doubleVal&&n.doubleVal.length||(n.doubleVal=[]),2==(7&o))for(var i=e.uint32()+e.pos;e.pos<i;)n.doubleVal.push(e.double());else n.doubleVal.push(e.double());break;case 3:if(n.boolVal&&n.boolVal.length||(n.boolVal=[]),2==(7&o))for(i=e.uint32()+e.pos;e.pos<i;)n.boolVal.push(e.bool());else n.boolVal.push(e.bool());break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.stringVal&&e.hasOwnProperty("stringVal")){if(!Array.isArray(e.stringVal))return"stringVal: array expected";for(var t=0;t<e.stringVal.length;++t)if(!m.isString(e.stringVal[t]))return"stringVal: string[] expected"}if(null!=e.doubleVal&&e.hasOwnProperty("doubleVal")){if(!Array.isArray(e.doubleVal))return"doubleVal: array expected";for(t=0;t<e.doubleVal.length;++t)if("number"!=typeof e.doubleVal[t])return"doubleVal: number[] expected"}if(null!=e.boolVal&&e.hasOwnProperty("boolVal")){if(!Array.isArray(e.boolVal))return"boolVal: array expected";for(t=0;t<e.boolVal.length;++t)if("boolean"!=typeof e.boolVal[t])return"boolVal: boolean[] expected"}return null},e.fromObject=function(e){if(e instanceof w.lr.CustomEvent.EventPropertyVariant)return e;var t=new w.lr.CustomEvent.EventPropertyVariant;if(e.stringVal){if(!Array.isArray(e.stringVal))throw TypeError(".lr.CustomEvent.EventPropertyVariant.stringVal: array expected");t.stringVal=[];for(var r=0;r<e.stringVal.length;++r)t.stringVal[r]=String(e.stringVal[r])}if(e.doubleVal){if(!Array.isArray(e.doubleVal))throw TypeError(".lr.CustomEvent.EventPropertyVariant.doubleVal: array expected");for(t.doubleVal=[],r=0;r<e.doubleVal.length;++r)t.doubleVal[r]=Number(e.doubleVal[r])}if(e.boolVal){if(!Array.isArray(e.boolVal))throw TypeError(".lr.CustomEvent.EventPropertyVariant.boolVal: array expected");for(t.boolVal=[],r=0;r<e.boolVal.length;++r)t.boolVal[r]=Boolean(e.boolVal[r])}return t},e.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.stringVal=[],r.doubleVal=[],r.boolVal=[]),e.stringVal&&e.stringVal.length){r.stringVal=[];for(var n=0;n<e.stringVal.length;++n)r.stringVal[n]=e.stringVal[n]}if(e.doubleVal&&e.doubleVal.length)for(r.doubleVal=[],n=0;n<e.doubleVal.length;++n)r.doubleVal[n]=t.json&&!isFinite(e.doubleVal[n])?String(e.doubleVal[n]):e.doubleVal[n];if(e.boolVal&&e.boolVal.length)for(r.boolVal=[],n=0;n<e.boolVal.length;++n)r.boolVal[n]=e.boolVal[n];return r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e}(),y.Identify=function(){function e(e){if(this.traits={},e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.userID="",e.prototype.name="",e.prototype.email="",e.prototype.isAnonymous=!1,e.prototype.traits=m.emptyObject,e.prototype.isUpdate=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.userID&&e.hasOwnProperty("userID")&&t.uint32(10).string(e.userID),null!=e.name&&e.hasOwnProperty("name")&&t.uint32(18).string(e.name),null!=e.email&&e.hasOwnProperty("email")&&t.uint32(26).string(e.email),null!=e.isAnonymous&&e.hasOwnProperty("isAnonymous")&&t.uint32(32).bool(e.isAnonymous),null!=e.traits&&e.hasOwnProperty("traits"))for(var r=Object.keys(e.traits),n=0;n<r.length;++n)t.uint32(42).fork().uint32(10).string(r[n]).uint32(18).string(e.traits[r[n]]).ldelim();return null!=e.isUpdate&&e.hasOwnProperty("isUpdate")&&t.uint32(48).bool(e.isUpdate),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r,n=void 0===t?e.len:e.pos+t,o=new w.lr.Identify;e.pos<n;){var i=e.uint32();switch(i>>>3){case 1:o.userID=e.string();break;case 2:o.name=e.string();break;case 3:o.email=e.string();break;case 4:o.isAnonymous=e.bool();break;case 5:e.skip().pos++,o.traits===m.emptyObject&&(o.traits={}),r=e.string(),e.pos++,o.traits[r]=e.string();break;case 6:o.isUpdate=e.bool();break;default:e.skipType(7&i)}}return o},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.userID&&e.hasOwnProperty("userID")&&!m.isString(e.userID))return"userID: string expected";if(null!=e.name&&e.hasOwnProperty("name")&&!m.isString(e.name))return"name: string expected";if(null!=e.email&&e.hasOwnProperty("email")&&!m.isString(e.email))return"email: string expected";if(null!=e.isAnonymous&&e.hasOwnProperty("isAnonymous")&&"boolean"!=typeof e.isAnonymous)return"isAnonymous: boolean expected";if(null!=e.traits&&e.hasOwnProperty("traits")){if(!m.isObject(e.traits))return"traits: object expected";for(var t=Object.keys(e.traits),r=0;r<t.length;++r)if(!m.isString(e.traits[t[r]]))return"traits: string{k:string} expected"}return null!=e.isUpdate&&e.hasOwnProperty("isUpdate")&&"boolean"!=typeof e.isUpdate?"isUpdate: boolean expected":null},e.fromObject=function(e){if(e instanceof w.lr.Identify)return e;var t=new w.lr.Identify;if(null!=e.userID&&(t.userID=String(e.userID)),null!=e.name&&(t.name=String(e.name)),null!=e.email&&(t.email=String(e.email)),null!=e.isAnonymous&&(t.isAnonymous=Boolean(e.isAnonymous)),e.traits){if("object"!=typeof e.traits)throw TypeError(".lr.Identify.traits: object expected");t.traits={};for(var r=Object.keys(e.traits),n=0;n<r.length;++n)t.traits[r[n]]=String(e.traits[r[n]])}return null!=e.isUpdate&&(t.isUpdate=Boolean(e.isUpdate)),t},e.toObject=function(e,t){t||(t={});var r,n={};if((t.objects||t.defaults)&&(n.traits={}),t.defaults&&(n.userID="",n.name="",n.email="",n.isAnonymous=!1,n.isUpdate=!1),null!=e.userID&&e.hasOwnProperty("userID")&&(n.userID=e.userID),null!=e.name&&e.hasOwnProperty("name")&&(n.name=e.name),null!=e.email&&e.hasOwnProperty("email")&&(n.email=e.email),null!=e.isAnonymous&&e.hasOwnProperty("isAnonymous")&&(n.isAnonymous=e.isAnonymous),e.traits&&(r=Object.keys(e.traits)).length){n.traits={};for(var o=0;o<r.length;++o)n.traits[r[o]]=e.traits[r[o]]}return null!=e.isUpdate&&e.hasOwnProperty("isUpdate")&&(n.isUpdate=e.isUpdate),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),y.Activity=function(){function e(e){if(this.transactions=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.transactions=m.emptyArray,e.prototype.pageURL="",e.prototype.count=0,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.transactions&&e.transactions.length)for(var r=0;r<e.transactions.length;++r)w.lr.Activity.Transaction.encode(e.transactions[r],t.uint32(10).fork()).ldelim();return null!=e.pageURL&&e.hasOwnProperty("pageURL")&&t.uint32(18).string(e.pageURL),null!=e.count&&e.hasOwnProperty("count")&&t.uint32(24).uint32(e.count),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.Activity;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.transactions&&n.transactions.length||(n.transactions=[]),n.transactions.push(w.lr.Activity.Transaction.decode(e,e.uint32()));break;case 2:n.pageURL=e.string();break;case 3:n.count=e.uint32();break;default:e.skipType(7&o)}}return n},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.transactions&&e.hasOwnProperty("transactions")){if(!Array.isArray(e.transactions))return"transactions: array expected";for(var t=0;t<e.transactions.length;++t){var r=w.lr.Activity.Transaction.verify(e.transactions[t]);if(r)return"transactions."+r}}return null!=e.pageURL&&e.hasOwnProperty("pageURL")&&!m.isString(e.pageURL)?"pageURL: string expected":null!=e.count&&e.hasOwnProperty("count")&&!m.isInteger(e.count)?"count: integer expected":null},e.fromObject=function(e){if(e instanceof w.lr.Activity)return e;var t=new w.lr.Activity;if(e.transactions){if(!Array.isArray(e.transactions))throw TypeError(".lr.Activity.transactions: array expected");t.transactions=[];for(var r=0;r<e.transactions.length;++r){if("object"!=typeof e.transactions[r])throw TypeError(".lr.Activity.transactions: object expected");t.transactions[r]=w.lr.Activity.Transaction.fromObject(e.transactions[r])}}return null!=e.pageURL&&(t.pageURL=String(e.pageURL)),null!=e.count&&(t.count=e.count>>>0),t},e.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.transactions=[]),t.defaults&&(r.pageURL="",r.count=0),e.transactions&&e.transactions.length){r.transactions=[];for(var n=0;n<e.transactions.length;++n)r.transactions[n]=w.lr.Activity.Transaction.toObject(e.transactions[n],t)}return null!=e.pageURL&&e.hasOwnProperty("pageURL")&&(r.pageURL=e.pageURL),null!=e.count&&e.hasOwnProperty("count")&&(r.count=e.count),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e.Transaction=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.id="",e.prototype.uuid=0,e.prototype.activeTime=0,e.prototype.rawTime=0,e.prototype.didSucceed=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.id&&e.hasOwnProperty("id")&&t.uint32(10).string(e.id),null!=e.uuid&&e.hasOwnProperty("uuid")&&t.uint32(16).uint32(e.uuid),null!=e.activeTime&&e.hasOwnProperty("activeTime")&&t.uint32(29).float(e.activeTime),null!=e.rawTime&&e.hasOwnProperty("rawTime")&&t.uint32(37).float(e.rawTime),null!=e.didSucceed&&e.hasOwnProperty("didSucceed")&&t.uint32(40).bool(e.didSucceed),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.Activity.Transaction;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.id=e.string();break;case 2:n.uuid=e.uint32();break;case 3:n.activeTime=e.float();break;case 4:n.rawTime=e.float();break;case 5:n.didSucceed=e.bool();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.id&&e.hasOwnProperty("id")&&!m.isString(e.id)?"id: string expected":null!=e.uuid&&e.hasOwnProperty("uuid")&&!m.isInteger(e.uuid)?"uuid: integer expected":null!=e.activeTime&&e.hasOwnProperty("activeTime")&&"number"!=typeof e.activeTime?"activeTime: number expected":null!=e.rawTime&&e.hasOwnProperty("rawTime")&&"number"!=typeof e.rawTime?"rawTime: number expected":null!=e.didSucceed&&e.hasOwnProperty("didSucceed")&&"boolean"!=typeof e.didSucceed?"didSucceed: boolean expected":null},e.fromObject=function(e){if(e instanceof w.lr.Activity.Transaction)return e;var t=new w.lr.Activity.Transaction;return null!=e.id&&(t.id=String(e.id)),null!=e.uuid&&(t.uuid=e.uuid>>>0),null!=e.activeTime&&(t.activeTime=Number(e.activeTime)),null!=e.rawTime&&(t.rawTime=Number(e.rawTime)),null!=e.didSucceed&&(t.didSucceed=Boolean(e.didSucceed)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.id="",r.uuid=0,r.activeTime=0,r.rawTime=0,r.didSucceed=!1),null!=e.id&&e.hasOwnProperty("id")&&(r.id=e.id),null!=e.uuid&&e.hasOwnProperty("uuid")&&(r.uuid=e.uuid),null!=e.activeTime&&e.hasOwnProperty("activeTime")&&(r.activeTime=t.json&&!isFinite(e.activeTime)?String(e.activeTime):e.activeTime),null!=e.rawTime&&e.hasOwnProperty("rawTime")&&(r.rawTime=t.json&&!isFinite(e.rawTime)?String(e.rawTime):e.rawTime),null!=e.didSucceed&&e.hasOwnProperty("didSucceed")&&(r.didSucceed=e.didSucceed),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),e}(),y.ExcludedUser=function(){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.alternateID="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=v.create()),null!=e.alternateID&&e.hasOwnProperty("alternateID")&&t.uint32(10).string(e.alternateID),t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new w.lr.ExcludedUser;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.alternateID=e.string();break;default:e.skipType(7&o)}}return n},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.alternateID&&e.hasOwnProperty("alternateID")&&!m.isString(e.alternateID)?"alternateID: string expected":null},e.fromObject=function(e){if(e instanceof w.lr.ExcludedUser)return e;var t=new w.lr.ExcludedUser;return null!=e.alternateID&&(t.alternateID=String(e.alternateID)),t},e.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.alternateID=""),null!=e.alternateID&&e.hasOwnProperty("alternateID")&&(r.alternateID=e.alternateID),r},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),y.Buffer=function(){function e(e){if(this.hrefActivityCounts={},this.hrefMaxScroll={},e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.eventCount=0,e.prototype.hrefActivityCounts=m.emptyObject,e.prototype.userID="",e.prototype.hrefMaxScroll=m.emptyObject,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=v.create()),null!=e.eventCount&&e.hasOwnProperty("eventCount")&&t.uint32(8).uint32(e.eventCount),null!=e.hrefActivityCounts&&e.hasOwnProperty("hrefActivityCounts"))for(var r=Object.keys(e.hrefActivityCounts),n=0;n<r.length;++n)t.uint32(18).fork().uint32(10).string(r[n]).uint32(16).uint32(e.hrefActivityCounts[r[n]]).ldelim();if(null!=e.userID&&e.hasOwnProperty("userID")&&t.uint32(26).string(e.userID),null!=e.hrefMaxScroll&&e.hasOwnProperty("hrefMaxScroll"))for(r=Object.keys(e.hrefMaxScroll),n=0;n<r.length;++n)t.uint32(34).fork().uint32(10).string(r[n]).uint32(21).float(e.hrefMaxScroll[r[n]]).ldelim();return t},e.decode=function(e,t){e instanceof b||(e=b.create(e));for(var r,n=void 0===t?e.len:e.pos+t,o=new w.lr.Buffer;e.pos<n;){var i=e.uint32();switch(i>>>3){case 1:o.eventCount=e.uint32();break;case 2:e.skip().pos++,o.hrefActivityCounts===m.emptyObject&&(o.hrefActivityCounts={}),r=e.string(),e.pos++,o.hrefActivityCounts[r]=e.uint32();break;case 3:o.userID=e.string();break;case 4:e.skip().pos++,o.hrefMaxScroll===m.emptyObject&&(o.hrefMaxScroll={}),r=e.string(),e.pos++,o.hrefMaxScroll[r]=e.float();break;default:e.skipType(7&i)}}return o},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.eventCount&&e.hasOwnProperty("eventCount")&&!m.isInteger(e.eventCount))return"eventCount: integer expected";if(null!=e.hrefActivityCounts&&e.hasOwnProperty("hrefActivityCounts")){if(!m.isObject(e.hrefActivityCounts))return"hrefActivityCounts: object expected";for(var t=Object.keys(e.hrefActivityCounts),r=0;r<t.length;++r)if(!m.isInteger(e.hrefActivityCounts[t[r]]))return"hrefActivityCounts: integer{k:string} expected"}if(null!=e.userID&&e.hasOwnProperty("userID")&&!m.isString(e.userID))return"userID: string expected";if(null!=e.hrefMaxScroll&&e.hasOwnProperty("hrefMaxScroll")){if(!m.isObject(e.hrefMaxScroll))return"hrefMaxScroll: object expected";for(t=Object.keys(e.hrefMaxScroll),r=0;r<t.length;++r)if("number"!=typeof e.hrefMaxScroll[t[r]])return"hrefMaxScroll: number{k:string} expected"}return null},e.fromObject=function(e){if(e instanceof w.lr.Buffer)return e;var t=new w.lr.Buffer;if(null!=e.eventCount&&(t.eventCount=e.eventCount>>>0),e.hrefActivityCounts){if("object"!=typeof e.hrefActivityCounts)throw TypeError(".lr.Buffer.hrefActivityCounts: object expected");t.hrefActivityCounts={};for(var r=Object.keys(e.hrefActivityCounts),n=0;n<r.length;++n)t.hrefActivityCounts[r[n]]=e.hrefActivityCounts[r[n]]>>>0}if(null!=e.userID&&(t.userID=String(e.userID)),e.hrefMaxScroll){if("object"!=typeof e.hrefMaxScroll)throw TypeError(".lr.Buffer.hrefMaxScroll: object expected");for(t.hrefMaxScroll={},r=Object.keys(e.hrefMaxScroll),n=0;n<r.length;++n)t.hrefMaxScroll[r[n]]=Number(e.hrefMaxScroll[r[n]])}return t},e.toObject=function(e,t){t||(t={});var r,n={};if((t.objects||t.defaults)&&(n.hrefActivityCounts={},n.hrefMaxScroll={}),t.defaults&&(n.eventCount=0,n.userID=""),null!=e.eventCount&&e.hasOwnProperty("eventCount")&&(n.eventCount=e.eventCount),e.hrefActivityCounts&&(r=Object.keys(e.hrefActivityCounts)).length){n.hrefActivityCounts={};for(var o=0;o<r.length;++o)n.hrefActivityCounts[r[o]]=e.hrefActivityCounts[r[o]]}if(null!=e.userID&&e.hasOwnProperty("userID")&&(n.userID=e.userID),e.hrefMaxScroll&&(r=Object.keys(e.hrefMaxScroll)).length)for(n.hrefMaxScroll={},o=0;o<r.length;++o)n.hrefMaxScroll[r[o]]=t.json&&!isFinite(e.hrefMaxScroll[r[o]])?String(e.hrefMaxScroll[r[o]]):e.hrefMaxScroll[r[o]];return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,g.util.toJSONOptions)},e}(),y),e.exports=w},function(e,t,r){"use strict";e.exports=r(238)},function(e,t,r){"use strict";var n=t;function o(){n.Reader._configure(n.BufferReader),n.util._configure()}n.build="minimal",n.Writer=r(78),n.BufferWriter=r(247),n.Reader=r(79),n.BufferReader=r(248),n.util=r(5),n.rpc=r(249),n.roots=r(251),n.configure=o,n.Writer._configure(n.BufferWriter),o()},function(e,t,r){"use strict";e.exports=function(e,t){var r=new Array(arguments.length-1),n=0,o=2,i=!0;for(;o<arguments.length;)r[n++]=arguments[o++];return new Promise((function(o,a){r[n]=function(e){if(i)if(i=!1,e)a(e);else{for(var t=new Array(arguments.length-1),r=0;r<t.length;)t[r++]=arguments[r];o.apply(null,t)}};try{e.apply(t||null,r)}catch(e){i&&(i=!1,a(e))}}))}},function(e,t,r){"use strict";var n=t;n.length=function(e){var t=e.length;if(!t)return 0;for(var r=0;--t%4>1&&"="===e.charAt(t);)++r;return Math.ceil(3*e.length)/4-r};for(var o=new Array(64),i=new Array(123),a=0;a<64;)i[o[a]=a<26?a+65:a<52?a+71:a<62?a-4:a-59|43]=a++;n.encode=function(e,t,r){for(var n,i=null,a=[],s=0,u=0;t<r;){var l=e[t++];switch(u){case 0:a[s++]=o[l>>2],n=(3&l)<<4,u=1;break;case 1:a[s++]=o[n|l>>4],n=(15&l)<<2,u=2;break;case 2:a[s++]=o[n|l>>6],a[s++]=o[63&l],u=0}s>8191&&((i||(i=[])).push(String.fromCharCode.apply(String,a)),s=0)}return u&&(a[s++]=o[n],a[s++]=61,1===u&&(a[s++]=61)),i?(s&&i.push(String.fromCharCode.apply(String,a.slice(0,s))),i.join("")):String.fromCharCode.apply(String,a.slice(0,s))};var s="invalid encoding";n.decode=function(e,t,r){for(var n,o=r,a=0,u=0;u<e.length;){var l=e.charCodeAt(u++);if(61===l&&a>1)break;if(void 0===(l=i[l]))throw Error(s);switch(a){case 0:n=l,a=1;break;case 1:t[r++]=n<<2|(48&l)>>4,n=l,a=2;break;case 2:t[r++]=(15&n)<<4|(60&l)>>2,n=l,a=3;break;case 3:t[r++]=(3&n)<<6|l,a=0}}if(1===a)throw Error(s);return r-o},n.test=function(e){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)}},function(e,t,r){"use strict";function n(){this._listeners={}}e.exports=n,n.prototype.on=function(e,t,r){return(this._listeners[e]||(this._listeners[e]=[])).push({fn:t,ctx:r||this}),this},n.prototype.off=function(e,t){if(void 0===e)this._listeners={};else if(void 0===t)this._listeners[e]=[];else for(var r=this._listeners[e],n=0;n<r.length;)r[n].fn===t?r.splice(n,1):++n;return this},n.prototype.emit=function(e){var t=this._listeners[e];if(t){for(var r=[],n=1;n<arguments.length;)r.push(arguments[n++]);for(n=0;n<t.length;)t[n].fn.apply(t[n++].ctx,r)}return this}},function(e,t,r){"use strict";function n(e){return"undefined"!=typeof Float32Array?function(){var t=new Float32Array([-0]),r=new Uint8Array(t.buffer),n=128===r[3];function o(e,n,o){t[0]=e,n[o]=r[0],n[o+1]=r[1],n[o+2]=r[2],n[o+3]=r[3]}function i(e,n,o){t[0]=e,n[o]=r[3],n[o+1]=r[2],n[o+2]=r[1],n[o+3]=r[0]}function a(e,n){return r[0]=e[n],r[1]=e[n+1],r[2]=e[n+2],r[3]=e[n+3],t[0]}function s(e,n){return r[3]=e[n],r[2]=e[n+1],r[1]=e[n+2],r[0]=e[n+3],t[0]}e.writeFloatLE=n?o:i,e.writeFloatBE=n?i:o,e.readFloatLE=n?a:s,e.readFloatBE=n?s:a}():function(){function t(e,t,r,n){var o=t<0?1:0;if(o&&(t=-t),0===t)e(1/t>0?0:2147483648,r,n);else if(isNaN(t))e(2143289344,r,n);else if(t>34028234663852886e22)e((o<<31|2139095040)>>>0,r,n);else if(t<11754943508222875e-54)e((o<<31|Math.round(t/1401298464324817e-60))>>>0,r,n);else{var i=Math.floor(Math.log(t)/Math.LN2);e((o<<31|i+127<<23|8388607&Math.round(t*Math.pow(2,-i)*8388608))>>>0,r,n)}}function r(e,t,r){var n=e(t,r),o=2*(n>>31)+1,i=n>>>23&255,a=8388607&n;return 255===i?a?NaN:o*(1/0):0===i?1401298464324817e-60*o*a:o*Math.pow(2,i-150)*(a+8388608)}e.writeFloatLE=t.bind(null,o),e.writeFloatBE=t.bind(null,i),e.readFloatLE=r.bind(null,a),e.readFloatBE=r.bind(null,s)}(),"undefined"!=typeof Float64Array?function(){var t=new Float64Array([-0]),r=new Uint8Array(t.buffer),n=128===r[7];function o(e,n,o){t[0]=e,n[o]=r[0],n[o+1]=r[1],n[o+2]=r[2],n[o+3]=r[3],n[o+4]=r[4],n[o+5]=r[5],n[o+6]=r[6],n[o+7]=r[7]}function i(e,n,o){t[0]=e,n[o]=r[7],n[o+1]=r[6],n[o+2]=r[5],n[o+3]=r[4],n[o+4]=r[3],n[o+5]=r[2],n[o+6]=r[1],n[o+7]=r[0]}function a(e,n){return r[0]=e[n],r[1]=e[n+1],r[2]=e[n+2],r[3]=e[n+3],r[4]=e[n+4],r[5]=e[n+5],r[6]=e[n+6],r[7]=e[n+7],t[0]}function s(e,n){return r[7]=e[n],r[6]=e[n+1],r[5]=e[n+2],r[4]=e[n+3],r[3]=e[n+4],r[2]=e[n+5],r[1]=e[n+6],r[0]=e[n+7],t[0]}e.writeDoubleLE=n?o:i,e.writeDoubleBE=n?i:o,e.readDoubleLE=n?a:s,e.readDoubleBE=n?s:a}():function(){function t(e,t,r,n,o,i){var a=n<0?1:0;if(a&&(n=-n),0===n)e(0,o,i+t),e(1/n>0?0:2147483648,o,i+r);else if(isNaN(n))e(0,o,i+t),e(2146959360,o,i+r);else if(n>17976931348623157e292)e(0,o,i+t),e((a<<31|2146435072)>>>0,o,i+r);else{var s;if(n<22250738585072014e-324)e((s=n/5e-324)>>>0,o,i+t),e((a<<31|s/4294967296)>>>0,o,i+r);else{var u=Math.floor(Math.log(n)/Math.LN2);1024===u&&(u=1023),e(4503599627370496*(s=n*Math.pow(2,-u))>>>0,o,i+t),e((a<<31|u+1023<<20|1048576*s&1048575)>>>0,o,i+r)}}}function r(e,t,r,n,o){var i=e(n,o+t),a=e(n,o+r),s=2*(a>>31)+1,u=a>>>20&2047,l=4294967296*(1048575&a)+i;return 2047===u?l?NaN:s*(1/0):0===u?5e-324*s*l:s*Math.pow(2,u-1075)*(l+4503599627370496)}e.writeDoubleLE=t.bind(null,o,0,4),e.writeDoubleBE=t.bind(null,i,4,0),e.readDoubleLE=r.bind(null,a,0,4),e.readDoubleBE=r.bind(null,s,4,0)}(),e}function o(e,t,r){t[r]=255&e,t[r+1]=e>>>8&255,t[r+2]=e>>>16&255,t[r+3]=e>>>24}function i(e,t,r){t[r]=e>>>24,t[r+1]=e>>>16&255,t[r+2]=e>>>8&255,t[r+3]=255&e}function a(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0}function s(e,t){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}e.exports=n(n)},function(e,t,r){"use strict";e.exports=function(e){try{var t=void 0;t}catch(e){}return null}},function(e,t,r){"use strict";var n=t;n.length=function(e){for(var t=0,r=0,n=0;n<e.length;++n)(r=e.charCodeAt(n))<128?t+=1:r<2048?t+=2:55296==(64512&r)&&56320==(64512&e.charCodeAt(n+1))?(++n,t+=4):t+=3;return t},n.read=function(e,t,r){if(r-t<1)return"";for(var n,o=null,i=[],a=0;t<r;)(n=e[t++])<128?i[a++]=n:n>191&&n<224?i[a++]=(31&n)<<6|63&e[t++]:n>239&&n<365?(n=((7&n)<<18|(63&e[t++])<<12|(63&e[t++])<<6|63&e[t++])-65536,i[a++]=55296+(n>>10),i[a++]=56320+(1023&n)):i[a++]=(15&n)<<12|(63&e[t++])<<6|63&e[t++],a>8191&&((o||(o=[])).push(String.fromCharCode.apply(String,i)),a=0);return o?(a&&o.push(String.fromCharCode.apply(String,i.slice(0,a))),o.join("")):String.fromCharCode.apply(String,i.slice(0,a))},n.write=function(e,t,r){for(var n,o,i=r,a=0;a<e.length;++a)(n=e.charCodeAt(a))<128?t[r++]=n:n<2048?(t[r++]=n>>6|192,t[r++]=63&n|128):55296==(64512&n)&&56320==(64512&(o=e.charCodeAt(a+1)))?(n=65536+((1023&n)<<10)+(1023&o),++a,t[r++]=n>>18|240,t[r++]=n>>12&63|128,t[r++]=n>>6&63|128,t[r++]=63&n|128):(t[r++]=n>>12|224,t[r++]=n>>6&63|128,t[r++]=63&n|128);return r-i}},function(e,t,r){"use strict";e.exports=function(e,t,r){var n=r||8192,o=n>>>1,i=null,a=n;return function(r){if(r<1||r>o)return e(r);a+r>n&&(i=e(n),a=0);var s=t.call(i,a,a+=r);return 7&a&&(a=1+(7|a)),s}}},function(e,t,r){"use strict";e.exports=o;var n=r(5);function o(e,t){this.lo=e>>>0,this.hi=t>>>0}var i=o.zero=new o(0,0);i.toNumber=function(){return 0},i.zzEncode=i.zzDecode=function(){return this},i.length=function(){return 1};var a=o.zeroHash="\\0\\0\\0\\0\\0\\0\\0\\0";o.fromNumber=function(e){if(0===e)return i;var t=e<0;t&&(e=-e);var r=e>>>0,n=(e-r)/4294967296>>>0;return t&&(n=~n>>>0,r=~r>>>0,++r>4294967295&&(r=0,++n>4294967295&&(n=0))),new o(r,n)},o.from=function(e){if("number"==typeof e)return o.fromNumber(e);if(n.isString(e)){if(!n.Long)return o.fromNumber(parseInt(e,10));e=n.Long.fromString(e)}return e.low||e.high?new o(e.low>>>0,e.high>>>0):i},o.prototype.toNumber=function(e){if(!e&&this.hi>>>31){var t=1+~this.lo>>>0,r=~this.hi>>>0;return t||(r=r+1>>>0),-(t+4294967296*r)}return this.lo+4294967296*this.hi},o.prototype.toLong=function(e){return n.Long?new n.Long(0|this.lo,0|this.hi,Boolean(e)):{low:0|this.lo,high:0|this.hi,unsigned:Boolean(e)}};var s=String.prototype.charCodeAt;o.fromHash=function(e){return e===a?i:new o((s.call(e,0)|s.call(e,1)<<8|s.call(e,2)<<16|s.call(e,3)<<24)>>>0,(s.call(e,4)|s.call(e,5)<<8|s.call(e,6)<<16|s.call(e,7)<<24)>>>0)},o.prototype.toHash=function(){return String.fromCharCode(255&this.lo,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,255&this.hi,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},o.prototype.zzEncode=function(){var e=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^e)>>>0,this.lo=(this.lo<<1^e)>>>0,this},o.prototype.zzDecode=function(){var e=-(1&this.lo);return this.lo=((this.lo>>>1|this.hi<<31)^e)>>>0,this.hi=(this.hi>>>1^e)>>>0,this},o.prototype.length=function(){var e=this.lo,t=(this.lo>>>28|this.hi<<4)>>>0,r=this.hi>>>24;return 0===r?0===t?e<16384?e<128?1:2:e<2097152?3:4:t<16384?t<128?5:6:t<2097152?7:8:r<128?9:10}},function(e,t,r){"use strict";e.exports=a;var n=r(78);(a.prototype=Object.create(n.prototype)).constructor=a;var o=r(5),i=o.Buffer;function a(){n.call(this)}a.alloc=function(e){return(a.alloc=o._Buffer_allocUnsafe)(e)};var s=i&&i.prototype instanceof Uint8Array&&"set"===i.prototype.set.name?function(e,t,r){t.set(e,r)}:function(e,t,r){if(e.copy)e.copy(t,r,0,e.length);else for(var n=0;n<e.length;)t[r++]=e[n++]};function u(e,t,r){e.length<40?o.utf8.write(e,t,r):t.utf8Write(e,r)}a.prototype.bytes=function(e){o.isString(e)&&(e=o._Buffer_from(e,"base64"));var t=e.length>>>0;return this.uint32(t),t&&this._push(s,t,e),this},a.prototype.string=function(e){var t=i.byteLength(e);return this.uint32(t),t&&this._push(u,t,e),this}},function(e,t,r){"use strict";e.exports=i;var n=r(79);(i.prototype=Object.create(n.prototype)).constructor=i;var o=r(5);function i(e){n.call(this,e)}o.Buffer&&(i.prototype._slice=o.Buffer.prototype.slice),i.prototype.string=function(){var e=this.uint32();return this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+e,this.len))}},function(e,t,r){"use strict";t.Service=r(250)},function(e,t,r){"use strict";e.exports=o;var n=r(5);function o(e,t,r){if("function"!=typeof e)throw TypeError("rpcImpl must be a function");n.EventEmitter.call(this),this.rpcImpl=e,this.requestDelimited=Boolean(t),this.responseDelimited=Boolean(r)}(o.prototype=Object.create(n.EventEmitter.prototype)).constructor=o,o.prototype.rpcCall=function e(t,r,o,i,a){if(!i)throw TypeError("request must be specified");var s=this;if(!a)return n.asPromise(e,s,t,r,o,i);if(s.rpcImpl)try{return s.rpcImpl(t,r[s.requestDelimited?"encodeDelimited":"encode"](i).finish(),(function(e,r){if(e)return s.emit("error",e,t),a(e);if(null!==r){if(!(r instanceof o))try{r=o[s.responseDelimited?"decodeDelimited":"decode"](r)}catch(e){return s.emit("error",e,t),a(e)}return s.emit("data",r,t),a(null,r)}s.end(!0)}))}catch(e){return s.emit("error",e,t),void setTimeout((function(){a(e)}),0)}else setTimeout((function(){a(Error("already ended"))}),0)},o.prototype.end=function(e){return this.rpcImpl&&(e||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}},function(e,t,r){"use strict";e.exports={}},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Decoder",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Encoder",{enumerable:!0,get:function(){return i.default}});var o=n(r(253)),i=n(r(254))},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(7)),i=n(r(14)),a=n(r(32)),s=n(r(39)),u=r(15);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=function(){function e(){(0,i.default)(this,e)}return(0,a.default)(e,[{key:"decodeEvent",value:function(e){function t(t){return c(c({},e),{},{data:t.toObject(t.decode(e.data),{enums:String,objects:!0,defaults:!0,oneofs:!0})})}var r,n=s.default.lookupType(e.type);if("lr.core.Exception"!==e.type)r=t(n);else try{r=t(n)}catch(o){console.info("Failed to decode ".concat(e.type," event. Falling back to old protobuf.")),r=t(n=s.default.lookupType("lr.core.OldException"))}return function(e,t){function r(e){switch(e.info){case"documentInfo":e.documentInfo.childNodes.forEach(r);break;case"documentFragmentInfo":e.documentFragmentInfo.childNodes.forEach(r);break;case"elementInfo":for(var t=0,n=Object.keys(e.elementInfo.attributes);t<n.length;t++){var o=n[t];e.elementInfo.attributes[o]=(0,u.deepDearsonify)(e.elementInfo.attributes[o])}e.elementInfo.childNodes.forEach(r)}}switch(e){case"lr.browser.NodeInitEvent":r(t.rootNode);break;case"lr.browser.ShadowInitEvent":r(t.shadowRootNode);break;case"lr.browser.NodeChangeEvent":t.addedOrMoved.forEach((function(e){return r(e.nodeData)}));var n,o=f(t.attributes);try{for(o.s();!(n=o.n()).done;)for(var i=n.value,a=0,s=Object.keys(i.attributes);a<s.length;a++){var l=s[a];i.attributes[l]=(0,u.deepDearsonify)(i.attributes[l])}}catch(e){o.e(e)}finally{o.f()}break;case"lr.core.LogEvent":t.args=t.args&&t.args.map(u.deepDearsonify);break;case"lr.core.Exception":t.message=t.message&&(0,u.deepDearsonify)(t.message);break;case"lr.redux.InitialState":t.state=(0,u.deepDearsonify)(t.state);break;case"lr.redux.ReduxAction":t.action=(0,u.deepDearsonify)(t.action),t.stateDelta=(0,u.deepDearsonify)(t.stateDelta),t.state=null!=t.state?(0,u.deepDearsonify)(t.state):void 0;break;case"lr.network.RequestEvent":case"lr.network.ResponseEvent":t.body=t.body&&(0,u.deepDearsonify)(t.body)}}(e.type,r.data),r}}]),e}();t.default=d,e.exports=t.default},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(14)),i=n(r(32)),a=n(r(7)),s=n(r(39)),u=n(r(255)),l=n(r(266)),c=r(15);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(){function e(){(0,o.default)(this,e),this.reduxStateByStoreId={}}return(0,i.default)(e,[{key:"encodeEvent",value:function(e){var t=s.default.lookupType(e.type);if("lr.redux.InitialState"===e.type&&(this.reduxStateByStoreId[e.data.storeId]={state:e.data.state,sessionID:e.sessionID}),"lr.redux.ReduxAction"===e.type){var r=this.reduxStateByStoreId[e.data.storeId];if(r){var n=u.default.diff({o:r.state},{o:e.data.stateDelta});r.sessionID!==e.sessionID&&(e.data.state=r.state),this.reduxStateByStoreId[e.data.storeId]={state:e.data.stateDelta,sessionID:e.sessionID},e.data.stateDelta=void 0!==n?n:null}else this.reduxStateByStoreId[e.data.storeId]={state:e.data.stateDelta,sessionID:e.sessionID},e.data.state=e.data.stateDelta,e.data.stateDelta=null}var o=t.create(t.fromObject(function(e){function t(e){return e.documentInfo?p(p({},e),{},{documentInfo:p(p({},e.documentInfo),{},{childNodes:e.documentInfo.childNodes.map(t)})}):e.documentFragmentInfo?p(p({},e),{},{documentFragmentInfo:p(p({},e.documentFragmentInfo),{},{childNodes:e.documentFragmentInfo.childNodes.map(t)})}):e.elementInfo?p(p({},e),{},{elementInfo:p(p({},e.elementInfo),{},{attributes:(0,l.default)(e.elementInfo.attributes,c.deepArsonify),childNodes:e.elementInfo.childNodes.map(t)})}):e}var r=e.data;switch(e.type){case"lr.browser.NodeInitEvent":return p(p({},r),{},{rootNode:t(r.rootNode)});case"lr.browser.ShadowInitEvent":return p(p({},r),{},{shadowRootNode:t(r.shadowRootNode)});case"lr.browser.NodeChangeEvent":return p(p({},r),{},{addedOrMoved:r.addedOrMoved.map((function(e){return p(p({},e),{},{nodeData:t(e.nodeData)})})),attributes:r.attributes.map((function(e){return p(p({},e),{},{attributes:(0,l.default)(e.attributes,c.deepArsonify)})}))});case"lr.core.LogEvent":return p(p({},r),{},{args:r.args&&r.args.map(c.deepArsonify)});case"lr.core.Exception":return p(p({},r),{},{message:(0,c.deepArsonify)(r.message)});case"lr.redux.InitialState":return p(p({},r),{},{state:(0,c.deepArsonify)(r.state)});case"lr.redux.ReduxAction":return p(p({},r),{},{action:(0,c.deepArsonify)(r.action),stateDelta:null!=r.stateDelta?(0,c.deepArsonify)(r.stateDelta):void 0,state:null!=r.state?(0,c.deepArsonify)(r.state):void 0});case"lr.network.RequestEvent":case"lr.network.ResponseEvent":return p(p({},r),{},{body:(0,c.deepArsonify)(r.body)});default:return r}}(e)));return p(p({},e),{},{data:t.encode(o).finish()})}}]),e}();t.default=d,e.exports=t.default},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(256)).default;t.default=o,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(257),o=new n.DiffPatcher({arrays:{detectMove:!1},propertyFilter:function(e,t){return"function"!=typeof t.left[e]&&"function"!=typeof t.right[e]&&!function(e){for(var t=0,r=e.parent;void 0!==r;){if(r.left===e.left&&r.right===e.right)return!0;if(r=r.parent,++t>10)return!0}return!1}(t)}});t.default=o,e.exports=t.default},function(e,t,r){var n=r(258).Processor,o=r(80).Pipe,i=r(40).DiffContext,a=r(42).PatchContext,s=r(43).ReverseContext,u=r(81),l=r(259),c=r(260),f=r(261),p=r(263),d=r(264),h=function(e){this.processor=new n(e),this.processor.pipe(new o("diff").append(c.collectChildrenDiffFilter,l.diffFilter,p.diffFilter,d.diffFilter,c.objectsDiffFilter,f.diffFilter).shouldHaveResult()),this.processor.pipe(new o("patch").append(c.collectChildrenPatchFilter,f.collectChildrenPatchFilter,l.patchFilter,d.patchFilter,c.patchFilter,f.patchFilter).shouldHaveResult()),this.processor.pipe(new o("reverse").append(c.collectChildrenReverseFilter,f.collectChildrenReverseFilter,l.reverseFilter,d.reverseFilter,c.reverseFilter,f.reverseFilter).shouldHaveResult())};h.prototype.options=function(){return this.processor.options.apply(this.processor,arguments)},h.prototype.diff=function(e,t){return this.processor.process(new i(e,t))},h.prototype.patch=function(e,t){return this.processor.process(new a(e,t))},h.prototype.reverse=function(e){return this.processor.process(new s(e))},h.prototype.unpatch=function(e,t){return this.patch(e,this.reverse(t))},h.prototype.clone=function(e){return u(e)},t.DiffPatcher=h},function(e,t){var r=function(e){this.selfOptions=e||{},this.pipes={}};r.prototype.options=function(e){return e&&(this.selfOptions=e),this.selfOptions},r.prototype.pipe=function(e,t){if("string"==typeof e){if(void 0===t)return this.pipes[e];this.pipes[e]=t}if(e&&e.name){if((t=e).processor===this)return t;this.pipes[t.name]=t}return t.processor=this,t},r.prototype.process=function(e,t){var r=e;r.options=this.options();for(var n,o,i=t||e.pipe||"default";i;)void 0!==r.nextAfterChildren&&(r.next=r.nextAfterChildren,r.nextAfterChildren=null),"string"==typeof i&&(i=this.pipe(i)),i.process(r),o=r,n=i,i=null,r&&r.next&&(r=r.next,i=o.nextPipe||r.pipe||n);return r.hasResult?r.result:void 0},t.Processor=r},function(e,t){var r="function"==typeof Array.isArray?Array.isArray:function(e){return e instanceof Array},n=function(e){if(e.left!==e.right)if(void 0!==e.left)if(void 0!==e.right){if("function"==typeof e.left||"function"==typeof e.right)throw new Error("functions are not supported");if(e.leftType=null===e.left?"null":typeof e.left,e.rightType=null===e.right?"null":typeof e.right,e.leftType===e.rightType)if("boolean"!==e.leftType&&"number"!==e.leftType)if("object"===e.leftType&&(e.leftIsArray=r(e.left)),"object"===e.rightType&&(e.rightIsArray=r(e.right)),e.leftIsArray===e.rightIsArray){if(e.left instanceof RegExp){if(!(e.right instanceof RegExp))return void e.setResult([e.left,e.right]).exit();e.setResult([e.left.toString(),e.right.toString()]).exit()}}else e.setResult([e.left,e.right]).exit();else e.setResult([e.left,e.right]).exit();else e.setResult([e.left,e.right]).exit()}else e.setResult([e.left,0,0]).exit();else{if("function"==typeof e.right)throw new Error("functions are not supported");e.setResult([e.right]).exit()}else e.setResult(void 0).exit()};n.filterName="trivial";var o=function(e){if(void 0!==e.delta){if(e.nested=!r(e.delta),!e.nested)if(1!==e.delta.length)if(2!==e.delta.length)3!==e.delta.length||0!==e.delta[2]||e.setResult(void 0).exit();else{if(e.left instanceof RegExp){var t=/^\\/(.*)\\/([gimyu]+)$/.exec(e.delta[1]);if(t)return void e.setResult(new RegExp(t[1],t[2])).exit()}e.setResult(e.delta[1]).exit()}else e.setResult(e.delta[0]).exit()}else e.setResult(e.left).exit()};o.filterName="trivial";var i=function(e){void 0!==e.delta?(e.nested=!r(e.delta),e.nested||(1!==e.delta.length?2!==e.delta.length?3!==e.delta.length||0!==e.delta[2]||e.setResult([e.delta[0]]).exit():e.setResult([e.delta[1],e.delta[0]]).exit():e.setResult([e.delta[0],0,0]).exit())):e.setResult(e.delta).exit()};i.filterName="trivial",t.diffFilter=n,t.patchFilter=o,t.reverseFilter=i},function(e,t,r){var n=r(40).DiffContext,o=r(42).PatchContext,i=r(43).ReverseContext,a=function(e){if(e&&e.children){for(var t,r=e.children.length,n=e.result,o=0;o<r;o++)void 0!==(t=e.children[o]).result&&((n=n||{})[t.childName]=t.result);n&&e.leftIsArray&&(n._t="a"),e.setResult(n).exit()}};a.filterName="collectChildren";var s=function(e){if(!e.leftIsArray&&"object"===e.leftType){var t,r,o=e.options.propertyFilter;for(t in e.left)Object.prototype.hasOwnProperty.call(e.left,t)&&(o&&!o(t,e)||(r=new n(e.left[t],e.right[t]),e.push(r,t)));for(t in e.right)Object.prototype.hasOwnProperty.call(e.right,t)&&(o&&!o(t,e)||void 0===e.left[t]&&(r=new n(void 0,e.right[t]),e.push(r,t)));e.children&&0!==e.children.length?e.exit():e.setResult(void 0).exit()}};s.filterName="objects";var u=function(e){if(e.nested&&!e.delta._t){var t,r;for(t in e.delta)r=new o(e.left[t],e.delta[t]),e.push(r,t);e.exit()}};u.filterName="objects";var l=function(e){if(e&&e.children&&!e.delta._t){for(var t,r=e.children.length,n=0;n<r;n++)t=e.children[n],Object.prototype.hasOwnProperty.call(e.left,t.childName)&&void 0===t.result?delete e.left[t.childName]:e.left[t.childName]!==t.result&&(e.left[t.childName]=t.result);e.setResult(e.left).exit()}};l.filterName="collectChildren";var c=function(e){if(e.nested&&!e.delta._t){var t,r;for(t in e.delta)r=new i(e.delta[t]),e.push(r,t);e.exit()}};c.filterName="objects";var f=function(e){if(e&&e.children&&!e.delta._t){for(var t,r=e.children.length,n={},o=0;o<r;o++)n[(t=e.children[o]).childName]!==t.result&&(n[t.childName]=t.result);e.setResult(n).exit()}};f.filterName="collectChildren",t.collectChildrenDiffFilter=a,t.objectsDiffFilter=s,t.patchFilter=u,t.collectChildrenPatchFilter=l,t.reverseFilter=c,t.collectChildrenReverseFilter=f},function(e,t,r){var n=r(40).DiffContext,o=r(42).PatchContext,i=r(43).ReverseContext,a=r(262),s="function"==typeof Array.isArray?Array.isArray:function(e){return e instanceof Array},u="function"==typeof Array.prototype.indexOf?function(e,t){return e.indexOf(t)}:function(e,t){for(var r=e.length,n=0;n<r;n++)if(e[n]===t)return n;return-1};function l(e,t,r,n,o){var i=e[r],a=t[n];if(i===a)return!0;if("object"!=typeof i||"object"!=typeof a)return!1;var s,u,l=o.objectHash;return l?("number"==typeof r?(o.hashCache1=o.hashCache1||[],void 0===(s=o.hashCache1[r])&&(o.hashCache1[r]=s=l(i,r))):s=l(i),void 0!==s&&("number"==typeof n?(o.hashCache2=o.hashCache2||[],void 0===(u=o.hashCache2[n])&&(o.hashCache2[n]=u=l(a,n))):u=l(a),void 0!==u&&s===u)):o.matchByPosition&&r===n}var c=function(e){if(e.leftIsArray){var t,r,o,i,s,c={objectHash:e.options&&e.options.objectHash,matchByPosition:e.options&&e.options.matchByPosition},f=0,p=0,d=e.left,h=e.right,y=d.length,g=h.length;for(y>0&&g>0&&!c.objectHash&&"boolean"!=typeof c.matchByPosition&&(c.matchByPosition=!function(e,t,r,n){for(var o=0;o<r;o++)for(var i=e[o],a=0;a<n;a++){var s=t[a];if(o!==a&&i===s)return!0}}(d,h,y,g));f<y&&f<g&&l(d,h,f,f,c);)t=f,i=new n(e.left[t],e.right[t]),e.push(i,t),f++;for(;p+f<y&&p+f<g&&l(d,h,y-1-p,g-1-p,c);)r=y-1-p,o=g-1-p,i=new n(e.left[r],e.right[o]),e.push(i,o),p++;if(f+p!==y)if(f+p!==g){delete c.hashCache1,delete c.hashCache2;var b=d.slice(f,y-p),v=h.slice(f,g-p),m=a.get(b,v,l,c),w=[];for(s=s||{_t:"a"},t=f;t<y-p;t++)u(m.indices1,t-f)<0&&(s["_"+t]=[d[t],0,0],w.push(t));var O=!0;e.options&&e.options.arrays&&!1===e.options.arrays.detectMove&&(O=!1);var I=!1;e.options&&e.options.arrays&&e.options.arrays.includeValueOnMove&&(I=!0);var x=w.length;for(t=f;t<g-p;t++){var P=u(m.indices2,t-f);if(P<0){var j=!1;if(O&&x>0)for(var S=0;S<x;S++)if(l(b,v,(r=w[S])-f,t-f,c)){s["_"+r].splice(1,2,t,3),I||(s["_"+r][0]=""),o=t,i=new n(e.left[r],e.right[o]),e.push(i,o),w.splice(S,1),j=!0;break}j||(s[t]=[h[t]])}else r=m.indices1[P]+f,o=m.indices2[P]+f,i=new n(e.left[r],e.right[o]),e.push(i,o)}e.setResult(s).exit()}else{for(s=s||{_t:"a"},t=f;t<y-p;t++)s["_"+t]=[d[t],0,0];e.setResult(s).exit()}else{if(y===g)return void e.setResult(void 0).exit();for(s=s||{_t:"a"},t=f;t<g-p;t++)s[t]=[h[t]];e.setResult(s).exit()}}};c.filterName="arrays";var f=function(e,t){return e-t},p=function(e){return function(t,r){return t[e]-r[e]}},d=function(e){if(e.nested&&"a"===e.delta._t){var t,r,n=e.delta,i=e.left,a=[],s=[],u=[];for(t in n)if("_t"!==t)if("_"===t[0]){if(0!==n[t][2]&&3!==n[t][2])throw new Error("only removal or move can be applied at original array indices, invalid diff type: "+n[t][2]);a.push(parseInt(t.slice(1),10))}else 1===n[t].length?s.push({index:parseInt(t,10),value:n[t][0]}):u.push({index:parseInt(t,10),delta:n[t]});for(t=(a=a.sort(f)).length-1;t>=0;t--){var l=n["_"+(r=a[t])],c=i.splice(r,1)[0];3===l[2]&&s.push({index:l[1],value:c})}var d=(s=s.sort(p("index"))).length;for(t=0;t<d;t++){var h=s[t];i.splice(h.index,0,h.value)}var y,g=u.length;if(g>0)for(t=0;t<g;t++){var b=u[t];y=new o(e.left[b.index],b.delta),e.push(y,b.index)}e.children?e.exit():e.setResult(e.left).exit()}};d.filterName="arrays";var h=function(e){if(e&&e.children&&"a"===e.delta._t){for(var t,r=e.children.length,n=0;n<r;n++)t=e.children[n],e.left[t.childName]=t.result;e.setResult(e.left).exit()}};h.filterName="arraysCollectChildren";var y=function(e){if(e.nested){if("a"===e.delta._t){var t,r;for(t in e.delta)"_t"!==t&&(r=new i(e.delta[t]),e.push(r,t));e.exit()}}else 3===e.delta[2]&&(e.newName="_"+e.delta[1],e.setResult([e.delta[0],parseInt(e.childName.substr(1),10),3]).exit())};y.filterName="arrays";var g=function(e,t,r){if("string"==typeof t&&"_"===t[0])return parseInt(t.substr(1),10);if(s(r)&&0===r[2])return"_"+t;var n=+t;for(var o in e){var i=e[o];if(s(i))if(3===i[2]){var a=parseInt(o.substr(1),10),u=i[1];if(u===+t)return a;a<=n&&u>n?n++:a>=n&&u<n&&n--}else if(0===i[2]){parseInt(o.substr(1),10)<=n&&n++}else 1===i.length&&o<=n&&n--}return n},b=function(e){if(e&&e.children&&"a"===e.delta._t){for(var t,r=e.children.length,n={_t:"a"},o=0;o<r;o++){var i=(t=e.children[o]).newName;void 0===i&&(i=g(e.delta,t.childName,t.result)),n[i]!==t.result&&(n[i]=t.result)}e.setResult(n).exit()}};b.filterName="arraysCollectChildren",t.diffFilter=c,t.patchFilter=d,t.collectChildrenPatchFilter=h,t.reverseFilter=y,t.collectChildrenReverseFilter=b},function(e,t){var r=function(e,t,r,n){return e[r]===t[n]},n=function(e,t,r,o,i,a){if(0===o||0===i)return{sequence:[],indices1:[],indices2:[]};if(e.match(t,r,o-1,i-1,a)){var s=n(e,t,r,o-1,i-1,a);return s.sequence.push(t[o-1]),s.indices1.push(o-1),s.indices2.push(i-1),s}return e[o][i-1]>e[o-1][i]?n(e,t,r,o,i-1,a):n(e,t,r,o-1,i,a)};t.get=function(e,t,o,i){var a=function(e,t,r,n){var o,i,a=e.length,s=t.length,u=[a+1];for(o=0;o<a+1;o++)for(u[o]=[s+1],i=0;i<s+1;i++)u[o][i]=0;for(u.match=r,o=1;o<a+1;o++)for(i=1;i<s+1;i++)r(e,t,o-1,i-1,n)?u[o][i]=u[o-1][i-1]+1:u[o][i]=Math.max(u[o-1][i],u[o][i-1]);return u}(e,t,o||r,i=i||{}),s=n(a,e,t,e.length,t.length,i);return"string"==typeof e&&"string"==typeof t&&(s.sequence=s.sequence.join("")),s}},function(e,t){var r=function(e){e.left instanceof Date?(e.right instanceof Date?e.left.getTime()!==e.right.getTime()?e.setResult([e.left,e.right]):e.setResult(void 0):e.setResult([e.left,e.right]),e.exit()):e.right instanceof Date&&e.setResult([e.left,e.right]).exit()};r.filterName="dates",t.diffFilter=r},function(e,t,r){var n=null,o=function(e){if(!n){var t;if("undefined"!=typeof diff_match_patch)t="function"==typeof diff_match_patch?new diff_match_patch:new diff_match_patch.diff_match_patch;else{try{var o=r(265)("./diff_match_patch_uncompressed");t=new o.diff_match_patch}catch(e){t=null}}if(!t){if(!e)return null;var i=new Error("text diff_match_patch library not found");throw i.diff_match_patch_not_found=!0,i}n={diff:function(e,r){return t.patch_toText(t.patch_make(e,r))},patch:function(e,r){for(var n=t.patch_apply(t.patch_fromText(r),e),o=0;o<n[1].length;o++){if(!n[1][o])new Error("text patch failed").textPatchFailed=!0}return n[0]}}}return n},i=function(e){if("string"===e.leftType){var t=e.options&&e.options.textDiff&&e.options.textDiff.minLength||60;if(e.left.length<t||e.right.length<t)e.setResult([e.left,e.right]).exit();else{var r=o();if(r){var n=r.diff;e.setResult([n(e.left,e.right),0,2]).exit()}else e.setResult([e.left,e.right]).exit()}}};i.filterName="texts";var a=function(e){if(!e.nested&&2===e.delta[2]){var t=o(!0).patch;e.setResult(t(e.left,e.delta[0])).exit()}};a.filterName="texts";var s=function(e){var t,r,n,o,i,a=null,s=/^@@ +\\-(\\d+),(\\d+) +\\+(\\d+),(\\d+) +@@$/;for(t=0,r=(n=e.split("\\n")).length;t<r;t++){var u=(o=n[t]).slice(0,1);"@"===u?(a=s.exec(o),null,null,n[t]="@@ -"+a[3]+","+a[4]+" +"+a[1]+","+a[2]+" @@"):"+"===u?(t,n[t]="-"+n[t].slice(1),"+"===n[t-1].slice(0,1)&&(i=n[t],n[t]=n[t-1],n[t-1]=i)):"-"===u&&(t,n[t]="+"+n[t].slice(1))}return n.join("\\n")},u=function(e){e.nested||2===e.delta[2]&&e.setResult([s(e.delta[0]),0,2]).exit()};u.filterName="texts",t.diffFilter=i,t.patchFilter=a,t.reverseFilter=u},function(e,t,r){var n={"./diff_match_patch_uncompressed":82,"./diff_match_patch_uncompressed.js":82};function o(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module \'"+e+"\'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=265},function(e,t,r){var n=r(267),o=r(275),i=r(290);e.exports=function(e,t){var r={};return t=i(t,3),o(e,(function(e,o,i){n(r,o,t(e,o,i))})),r}},function(e,t,r){var n=r(268);e.exports=function(e,t,r){"__proto__"==t&&n?n(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}},function(e,t,r){var n=r(6),o=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},function(e,t,r){var n=r(83),o=r(272),i=r(44),a=r(85),s=/^\\[object .+?Constructor\\]$/,u=Function.prototype,l=Object.prototype,c=u.toString,f=l.hasOwnProperty,p=RegExp("^"+c.call(f).replace(/[\\\\^$.*+?()[\\]{}|]/g,"\\\\$&").replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!i(e)||o(e))&&(n(e)?p:s).test(a(e))}},function(e,t,r){var n=r(25),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,s),r=e[s];try{e[s]=void 0;var n=!0}catch(e){}var o=a.call(e);return n&&(t?e[s]=r:delete e[s]),o}},function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},function(e,t,r){var n,o=r(273),i=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(e){return!!i&&i in e}},function(e,t,r){var n=r(2)["__core-js_shared__"];e.exports=n},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t,r){var n=r(276),o=r(45);e.exports=function(e,t){return e&&n(e,t,o)}},function(e,t,r){var n=r(277)();e.exports=n},function(e,t){e.exports=function(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),s=a.length;s--;){var u=a[e?s:++o];if(!1===r(i[u],u,i))break}return t}}},function(e,t,r){var n=r(279),o=r(86),i=r(4),a=r(87),s=r(88),u=r(89),l=Object.prototype.hasOwnProperty;e.exports=function(e,t){var r=i(e),c=!r&&o(e),f=!r&&!c&&a(e),p=!r&&!c&&!f&&u(e),d=r||c||f||p,h=d?n(e.length,String):[],y=h.length;for(var g in e)!t&&!l.call(e,g)||d&&("length"==g||f&&("offset"==g||"parent"==g)||p&&("buffer"==g||"byteLength"==g||"byteOffset"==g)||s(g,y))||h.push(g);return h}},function(e,t){e.exports=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}},function(e,t,r){var n=r(12),o=r(13);e.exports=function(e){return o(e)&&"[object Arguments]"==n(e)}},function(e,t){e.exports=function(){return!1}},function(e,t,r){var n=r(12),o=r(46),i=r(13),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,e.exports=function(e){return i(e)&&o(e.length)&&!!a[n(e)]}},function(e,t){e.exports=function(e){return function(t){return e(t)}}},function(e,t,r){(function(e){var n=r(84),o=t&&!t.nodeType&&t,i=o&&"object"==typeof e&&e&&!e.nodeType&&e,a=i&&i.exports===o&&n.process,s=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=s}).call(this,r(22)(e))},function(e,t,r){var n=r(286),o=r(287),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!n(e))return o(e);var t=[];for(var r in Object(e))i.call(e,r)&&"constructor"!=r&&t.push(r);return t}},function(e,t){var r=Object.prototype;e.exports=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||r)}},function(e,t,r){var n=r(288)(Object.keys,Object);e.exports=n},function(e,t){e.exports=function(e,t){return function(r){return e(t(r))}}},function(e,t,r){var n=r(83),o=r(46);e.exports=function(e){return null!=e&&o(e.length)&&!n(e)}},function(e,t,r){var n=r(291),o=r(338),i=r(349),a=r(4),s=r(350);e.exports=function(e){return"function"==typeof e?e:null==e?i:"object"==typeof e?a(e)?o(e[0],e[1]):n(e):s(e)}},function(e,t,r){var n=r(292),o=r(337),i=r(95);e.exports=function(e){var t=o(e);return 1==t.length&&t[0][2]?i(t[0][0],t[0][1]):function(r){return r===e||n(r,e,t)}}},function(e,t,r){var n=r(90),o=r(92);e.exports=function(e,t,r,i){var a=r.length,s=a,u=!i;if(null==e)return!s;for(e=Object(e);a--;){var l=r[a];if(u&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++a<s;){var c=(l=r[a])[0],f=e[c],p=l[1];if(u&&l[2]){if(void 0===f&&!(c in e))return!1}else{var d=new n;if(i)var h=i(f,p,c,e,t,d);if(!(void 0===h?o(p,f,3,i,d):h))return!1}}return!0}},function(e,t){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,r){var n=r(27),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0)&&(r==t.length-1?t.pop():o.call(t,r,1),--this.size,!0)}},function(e,t,r){var n=r(27);e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},function(e,t,r){var n=r(27);e.exports=function(e){return n(this.__data__,e)>-1}},function(e,t,r){var n=r(27);e.exports=function(e,t){var r=this.__data__,o=n(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}},function(e,t,r){var n=r(26);e.exports=function(){this.__data__=new n,this.size=0}},function(e,t){e.exports=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}},function(e,t){e.exports=function(e){return this.__data__.get(e)}},function(e,t){e.exports=function(e){return this.__data__.has(e)}},function(e,t,r){var n=r(26),o=r(47),i=r(48);e.exports=function(e,t){var r=this.__data__;if(r instanceof n){var a=r.__data__;if(!o||a.length<199)return a.push([e,t]),this.size=++r.size,this;r=this.__data__=new i(a)}return r.set(e,t),this.size=r.size,this}},function(e,t,r){var n=r(304),o=r(26),i=r(47);e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(i||o),string:new n}}},function(e,t,r){var n=r(305),o=r(306),i=r(307),a=r(308),s=r(309);function u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=s,e.exports=u},function(e,t,r){var n=r(28);e.exports=function(){this.__data__=n?n(null):{},this.size=0}},function(e,t){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},function(e,t,r){var n=r(28),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(n){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(t,e)?t[e]:void 0}},function(e,t,r){var n=r(28),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return n?void 0!==t[e]:o.call(t,e)}},function(e,t,r){var n=r(28);e.exports=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=n&&void 0===t?"__lodash_hash_undefined__":t,this}},function(e,t,r){var n=r(29);e.exports=function(e){var t=n(this,e).delete(e);return this.size-=t?1:0,t}},function(e,t){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},function(e,t,r){var n=r(29);e.exports=function(e){return n(this,e).get(e)}},function(e,t,r){var n=r(29);e.exports=function(e){return n(this,e).has(e)}},function(e,t,r){var n=r(29);e.exports=function(e,t){var r=n(this,e),o=r.size;return r.set(e,t),this.size+=r.size==o?0:1,this}},function(e,t,r){var n=r(90),o=r(93),i=r(321),a=r(325),s=r(332),u=r(4),l=r(87),c=r(89),f="[object Arguments]",p="[object Array]",d="[object Object]",h=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,y,g,b){var v=u(e),m=u(t),w=v?p:s(e),O=m?p:s(t),I=(w=w==f?d:w)==d,x=(O=O==f?d:O)==d,P=w==O;if(P&&l(e)){if(!l(t))return!1;v=!0,I=!1}if(P&&!I)return b||(b=new n),v||c(e)?o(e,t,r,y,g,b):i(e,t,w,r,y,g,b);if(!(1&r)){var j=I&&h.call(e,"__wrapped__"),S=x&&h.call(t,"__wrapped__");if(j||S){var T=j?e.value():e,k=S?t.value():t;return b||(b=new n),g(T,k,r,y,b)}}return!!P&&(b||(b=new n),a(e,t,r,y,g,b))}},function(e,t,r){var n=r(48),o=r(317),i=r(318);function a(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new n;++t<r;)this.add(e[t])}a.prototype.add=a.prototype.push=o,a.prototype.has=i,e.exports=a},function(e,t){e.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},function(e,t){e.exports=function(e){return this.__data__.has(e)}},function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}},function(e,t){e.exports=function(e,t){return e.has(t)}},function(e,t,r){var n=r(25),o=r(322),i=r(91),a=r(93),s=r(323),u=r(324),l=n?n.prototype:void 0,c=l?l.valueOf:void 0;e.exports=function(e,t,r,n,l,f,p){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!f(new o(e),new o(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var d=s;case"[object Set]":var h=1&n;if(d||(d=u),e.size!=t.size&&!h)return!1;var y=p.get(e);if(y)return y==t;n|=2,p.set(e,t);var g=a(d(e),d(t),n,l,f,p);return p.delete(e),g;case"[object Symbol]":if(c)return c.call(e)==c.call(t)}return!1}},function(e,t,r){var n=r(2).Uint8Array;e.exports=n},function(e,t){e.exports=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}},function(e,t){e.exports=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}},function(e,t,r){var n=r(326),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,i,a,s){var u=1&r,l=n(e),c=l.length;if(c!=n(t).length&&!u)return!1;for(var f=c;f--;){var p=l[f];if(!(u?p in t:o.call(t,p)))return!1}var d=s.get(e),h=s.get(t);if(d&&h)return d==t&&h==e;var y=!0;s.set(e,t),s.set(t,e);for(var g=u;++f<c;){var b=e[p=l[f]],v=t[p];if(i)var m=u?i(v,b,p,t,e,s):i(b,v,p,e,t,s);if(!(void 0===m?b===v||a(b,v,r,i,s):m)){y=!1;break}g||(g="constructor"==p)}if(y&&!g){var w=e.constructor,O=t.constructor;w==O||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof O&&O instanceof O||(y=!1)}return s.delete(e),s.delete(t),y}},function(e,t,r){var n=r(327),o=r(329),i=r(45);e.exports=function(e){return n(e,i,o)}},function(e,t,r){var n=r(328),o=r(4);e.exports=function(e,t,r){var i=t(e);return o(e)?i:n(i,r(e))}},function(e,t){e.exports=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}},function(e,t,r){var n=r(330),o=r(331),i=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols,s=a?function(e){return null==e?[]:(e=Object(e),n(a(e),(function(t){return i.call(e,t)})))}:o;e.exports=s},function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}},function(e,t){e.exports=function(){return[]}},function(e,t,r){var n=r(333),o=r(47),i=r(334),a=r(335),s=r(336),u=r(12),l=r(85),c="[object Map]",f="[object Promise]",p="[object Set]",d="[object WeakMap]",h="[object DataView]",y=l(n),g=l(o),b=l(i),v=l(a),m=l(s),w=u;(n&&w(new n(new ArrayBuffer(1)))!=h||o&&w(new o)!=c||i&&w(i.resolve())!=f||a&&w(new a)!=p||s&&w(new s)!=d)&&(w=function(e){var t=u(e),r="[object Object]"==t?e.constructor:void 0,n=r?l(r):"";if(n)switch(n){case y:return h;case g:return c;case b:return f;case v:return p;case m:return d}return t}),e.exports=w},function(e,t,r){var n=r(6)(r(2),"DataView");e.exports=n},function(e,t,r){var n=r(6)(r(2),"Promise");e.exports=n},function(e,t,r){var n=r(6)(r(2),"Set");e.exports=n},function(e,t,r){var n=r(6)(r(2),"WeakMap");e.exports=n},function(e,t,r){var n=r(94),o=r(45);e.exports=function(e){for(var t=o(e),r=t.length;r--;){var i=t[r],a=e[i];t[r]=[i,a,n(a)]}return t}},function(e,t,r){var n=r(92),o=r(339),i=r(346),a=r(49),s=r(94),u=r(95),l=r(30);e.exports=function(e,t){return a(e)&&s(t)?u(l(e),t):function(r){var a=o(r,e);return void 0===a&&a===t?i(r,e):n(t,a,3)}}},function(e,t,r){var n=r(96);e.exports=function(e,t,r){var o=null==e?void 0:n(e,t);return void 0===o?r:o}},function(e,t,r){var n=r(341),o=/[^.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))/g,i=/\\\\(\\\\)?/g,a=n((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,r,n,o){t.push(n?o.replace(i,"$1"):r||e)})),t}));e.exports=a},function(e,t,r){var n=r(342);e.exports=function(e){var t=n(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}},function(e,t,r){var n=r(48);function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(o.Cache||n),r}o.Cache=n,e.exports=o},function(e,t,r){var n=r(344);e.exports=function(e){return null==e?"":n(e)}},function(e,t,r){var n=r(25),o=r(345),i=r(4),a=r(50),s=n?n.prototype:void 0,u=s?s.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return o(t,e)+"";if(a(t))return u?u.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r}},function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}},function(e,t,r){var n=r(347),o=r(348);e.exports=function(e,t){return null!=e&&o(e,t,n)}},function(e,t){e.exports=function(e,t){return null!=e&&t in Object(e)}},function(e,t,r){var n=r(97),o=r(86),i=r(4),a=r(88),s=r(46),u=r(30);e.exports=function(e,t,r){for(var l=-1,c=(t=n(t,e)).length,f=!1;++l<c;){var p=u(t[l]);if(!(f=null!=e&&r(e,p)))break;e=e[p]}return f||++l!=c?f:!!(c=null==e?0:e.length)&&s(c)&&a(p,c)&&(i(e)||o(e))}},function(e,t){e.exports=function(e){return e}},function(e,t,r){var n=r(351),o=r(352),i=r(49),a=r(30);e.exports=function(e){return i(e)?n(a(e)):o(e)}},function(e,t){e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},function(e,t,r){var n=r(96);e.exports=function(e){return function(t){return n(t,e)}}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o,i,a,s){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,n,o,i,a,s],c=0;(u=new Error(t.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}}]);', "Worker", void 0, void 0)
    }
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "MessageSender", {
        enumerable: !0,
        get: function () {
            return o.default
        }
    }), Object.defineProperty(t, "MessageReceiver", {
        enumerable: !0,
        get: function () {
            return i.default
        }
    });
    var o = n(r(248)),
        i = n(r(249))
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = n(r(73)),
        i = n(r(5)),
        a = n(r(4)),
        s = n(r(6)),
        u = n(r(72)),
        c = r(74),
        l = r(2);

    function f(e, t) {
        var r;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (r = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0,
                    o = function () {};
                return {
                    s: o,
                    n: function () {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, a = !0,
            s = !1;
        return {
            s: function () {
                r = e[Symbol.iterator]()
            },
            n: function () {
                var e = r.next();
                return a = e.done, e
            },
            e: function (e) {
                s = !0, i = e
            },
            f: function () {
                try {
                    a || null == r.return || r.return()
                } finally {
                    if (s) throw i
                }
            }
        }
    }

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var p = 2,
        h = 4,
        y = 8,
        g = function (e, t) {
            var r = Object.getPrototypeOf(e);
            return null !== r && "function" == typeof r[t]
        },
        v = function () {
            function e(t) {
                var r = t.size,
                    n = t.start;
                (0, a.default)(this, e), this.i = 1, this.sum = n, this.size = r, this.values = new Array(r), this.values[0] = n
            }
            return (0, s.default)(e, [{
                key: "add",
                value: function (e) {
                    var t = this.i++ % this.size;
                    this.sum -= this.values[t] || 0, this.values[t] = e, this.sum += e
                }
            }, {
                key: "avg",
                value: function () {
                    return this.sum / Math.min(this.size, this.i)
                }
            }]), e
        }(),
        m = function () {
            function e(t) {
                var r = o.default.mark(d),
                    n = t.worker;
                (0, a.default)(this, e), this._worker = n, this._messages = [], this._byteCache = {}, this._byteStreams = {}, this._throughput = new v({
                    size: 10,
                    start: 1e3
                }), this._bytes = 0, this._isProcessing = !1;
                var s = [],
                    u = function () {
                        try {
                            n.postMessage(s)
                        } catch (o) {
                            var e, t = f(s);
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    var r = e.value;
                                    try {
                                        n.postMessage([r])
                                    } catch (e) {
                                        n.postMessage([{}.toString.call(r)])
                                    }
                                }
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                        }
                        s = []
                    },
                    l = this;

                function d() {
                    var e;
                    return o.default.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                        case 0:
                            e = o.default.mark((function e() {
                                var t, r, a, f, d, v, m, b, w, _, O, I, E, S, P;
                                return o.default.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (l._messages.length) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, -1;
                                    case 3:
                                        return e.abrupt("return", "continue");
                                    case 4:
                                        t = new Map, r = [], a = 0, f = function (e) {
                                            var n = t.get(e);
                                            return null == n && (n = r.length, t.set(e, n), r.push(e)), n
                                        }, d = function e(t) {
                                            var r;
                                            try {
                                                r = {}.toString.call(t)
                                            } catch (e) {
                                                return {}
                                            }
                                            switch (r) {
                                            case "[object Undefined]":
                                            case "[object Null]":
                                                return t;
                                            case "[object String]":
                                                return a += t.length * p, t;
                                            case "[object Boolean]":
                                                return a += h, t;
                                            case "[object Number]":
                                            case "[object Date]":
                                                return a += y, t;
                                            case "[object Error]":
                                            case "[object DOMError]":
                                            case "[object DOMException]":
                                                var n = "".concat(t.constructor.name, ": ").concat(t.message || t.name);
                                                return a += n.length * p, n;
                                            case "[object Object]":
                                                if (g(t, "toJS") && g(t, "toJSON")) return e(t.toJSON());
                                            case "[object Array Iterator]":
                                            case "[object Array]":
                                                var o = Array.isArray(t) ? [] : {};
                                                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (a += i.length * p, o[i] = f(t[i]));
                                                return o;
                                            default:
                                                return r
                                            }
                                        }, v = l._messages.shift(), m = (0, i.default)(v, 2), b = m[0], w = m[1], _ = b.event && b.event.type, f(b), O = a, I = 0, E = r;
                                    case 14:
                                        if (!(I < E.length)) {
                                            e.next = 26;
                                            break
                                        }
                                        if (S = E[I], P = d(S), !(s.length && a - O > l._throughput.avg())) {
                                            e.next = 22;
                                            break
                                        }
                                        return u(), e.next = 21, a - O;
                                    case 21:
                                        O = a;
                                    case 22:
                                        s.push(P);
                                    case 23:
                                        I++, e.next = 14;
                                        break;
                                    case 26:
                                        return l._byteCache[_].add(a), s.length > 0 && u(), n.postMessage(c.DONE_POSTING), l._byteStreams[_] -= w, l._bytes -= w, e.next = 33, a - O;
                                    case 33:
                                    case "end":
                                        return e.stop()
                                    }
                                }), e)
                            }));
                        case 1:
                            return t.delegateYield(e(), "t0", 3);
                        case 3:
                            if ("continue" !== t.t0) {
                                t.next = 6;
                                break
                            }
                            return t.abrupt("continue", 1);
                        case 6:
                            t.next = 1;
                            break;
                        case 8:
                        case "end":
                            return t.stop()
                        }
                    }), r)
                }
                this._doWork = d()
            }
            return (0, s.default)(e, [{
                key: "_processMessages",
                value: function () {
                    var e = this;
                    if (!this._isProcessing) {
                        this._isProcessing = !0;
                        var t = (0, l.protectFunc)((function () {
                            var r = 0,
                                n = (0, u.default)() + 5;
                            do {
                                var o = e._doWork.next().value;
                                if (o < 0) return void(e._isProcessing = !1);
                                r += o
                            } while ((0, u.default)() < n);
                            e._throughput.add(r), setTimeout(t)
                        }));
                        setTimeout(t)
                    }
                }
            }, {
                key: "postMessage",
                value: function (e) {
                    var t = e.event && e.event.type;
                    this._byteCache[t] || (this._byteCache[t] = new v({
                        size: 5,
                        start: e.sizeOverride || 0
                    }));
                    var r = this._byteCache[t].avg();
                    e.sizeOverride && (r = e.sizeOverride);
                    var n = this._byteStreams[t] || 0;
                    return this._byteStreams[t] = n + r, this._bytes += r, delete e.sizeOverride, this._messages.push([e, r]), this._processMessages(), [this._bytes, this._byteStreams]
                }
            }]), e
        }();
    t.default = m, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = n(r(11)),
        i = n(r(7)),
        a = n(r(4)),
        s = r(74),
        u = function e(t) {
            var r = t.worker,
                n = t.onReceiveFullMessage;
            (0, a.default)(this, e);
            var u = [];
            r.addEventListener("message", (function (e) {
                if (e.data === s.DONE_POSTING) {
                    var t = [];
                    u.forEach((function (e) {
                        e && "object" === (0, i.default)(e) && t.push(e)
                    })), t.forEach((function (e) {
                        for (var t in e) e.hasOwnProperty(t) && (e[t] = u[e[t]])
                    })), n(u[0]), u = []
                } else u = [].concat((0, o.default)(u), (0, o.default)(e.data))
            }))
        };
    t.default = u, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ANDROID_RECORDING_ENABLED = t.GUIDES = t.SESSIONS_TRIGGERED = t.PII_AUDITING_ENABLED = t.SUSPEND_RECORDING = t.CONTINUE_RECORDING = t.RECORDING_CONDITION_THRESHOLD = t.RECORDING_CONDITIONS = t.ACTIVE_URLS = t.PERFORMANCE_MONITORING_ENABLED = t.USER_AGENTS = t.IP_SETTINGS = t.LOCATION_SETTINGS = t.PAUSE_RECORDING = t.RECORDING_SETTINGS = t.BLOCK_RECORDING = t.DASHBOARD_URL = t.DEBUG = t.ERROR_ONLY_SESSIONS = t.EXCLUDED_USER = t.FILTERS = t.USER_QUOTA_EXCEEDED = t.APP_QUOTA_EXCEEDED = t.QUOTA_EXCEEDED = void 0;
    t.QUOTA_EXCEEDED = "QUOTA_EXCEEDED";
    t.APP_QUOTA_EXCEEDED = "APP_QUOTA_EXCEEDED";
    t.USER_QUOTA_EXCEEDED = "USER_QUOTA_EXCEEDED";
    t.FILTERS = "FILTERS";
    t.EXCLUDED_USER = "EXCLUDED_USER";
    t.ERROR_ONLY_SESSIONS = "ERROR_ONLY_SESSIONS";
    t.DEBUG = "DEBUG";
    t.DASHBOARD_URL = "DASHBOARD_URL";
    t.BLOCK_RECORDING = "BLOCK_RECORDING";
    t.RECORDING_SETTINGS = "RECORDING_SETTINGS";
    t.PAUSE_RECORDING = "PAUSE_RECORDING";
    t.LOCATION_SETTINGS = "LOCATION_SETTINGS";
    t.IP_SETTINGS = "IP_SETTINGS";
    t.USER_AGENTS = "USER_AGENTS";
    t.PERFORMANCE_MONITORING_ENABLED = "PERFORMANCE_MONITORING_ENABLED";
    t.ACTIVE_URLS = "ACTIVE_URLS";
    t.RECORDING_CONDITIONS = "RECORDING_CONDITIONS";
    t.RECORDING_CONDITION_THRESHOLD = "RECORDING_CONDITION_THRESHOLD";
    t.CONTINUE_RECORDING = "CONTINUE_RECORDING";
    t.SUSPEND_RECORDING = "SUSPEND_RECORDING";
    t.PII_AUDITING_ENABLED = "PII_AUDITING_ENABLED";
    t.SESSIONS_TRIGGERED = "SESSIONS_TRIGGERED";
    t.GUIDES = "GUIDES";
    t.ANDROID_RECORDING_ENABLED = "ANDROID_RECORDING_ENABLED"
}, function (e, t, r) {
    var n, o;
    /*!
     * JavaScript Cookie v2.1.4
     * https://github.com/js-cookie/js-cookie
     *
     * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
     * Released under the MIT license
     */
    ! function (i) {
        if (void 0 === (o = "function" == typeof (n = i) ? n.call(t, r, t, e) : n) || (e.exports = o), !0, e.exports = i(), !!0) {
            var a = window.Cookies,
                s = window.Cookies = i();
            s.noConflict = function () {
                return window.Cookies = a, s
            }
        }
    }((function () {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) t[n] = r[n]
            }
            return t
        }
        return function t(r) {
            function n(t, o, i) {
                var a;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if ("number" == typeof (i = e({
                                path: "/"
                            }, n.defaults, i)).expires) {
                            var s = new Date;
                            s.setMilliseconds(s.getMilliseconds() + 864e5 * i.expires), i.expires = s
                        }
                        i.expires = i.expires ? i.expires.toUTCString() : "";
                        try {
                            a = JSON.stringify(o), /^[\{\[]/.test(a) && (o = a)
                        } catch (e) {}
                        o = r.write ? r.write(o, t) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                        var u = "";
                        for (var c in i) i[c] && (u += "; " + c, !0 !== i[c] && (u += "=" + i[c]));
                        return document.cookie = t + "=" + o + u
                    }
                    t || (a = {});
                    for (var l = document.cookie ? document.cookie.split("; ") : [], f = /(%[0-9A-Z]{2})+/g, d = 0; d < l.length; d++) {
                        var p = l[d].split("="),
                            h = p.slice(1).join("=");
                        '"' === h.charAt(0) && (h = h.slice(1, -1));
                        try {
                            var y = p[0].replace(f, decodeURIComponent);
                            if (h = r.read ? r.read(h, y) : r(h, y) || h.replace(f, decodeURIComponent), this.json) try {
                                h = JSON.parse(h)
                            } catch (e) {}
                            if (t === y) {
                                a = h;
                                break
                            }
                            t || (a[y] = h)
                        } catch (e) {}
                    }
                    return a
                }
            }
            return n.set = n, n.get = function (e) {
                return n.call(n, e)
            }, n.getJSON = function () {
                return n.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, n.defaults = {}, n.remove = function (t, r) {
                n(t, "", e(r, {
                    expires: -1
                }))
            }, n.withConverter = t, n
        }((function () {}))
    }))
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = t.MAX_FILTER_MATCHES = void 0;
    var o = n(r(3)),
        i = n(r(4)),
        a = n(r(6)),
        s = r(2),
        u = n(r(75));

    function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? c(Object(r), !0).forEach((function (t) {
                (0, o.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function f(e, t) {
        var r;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (r = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0,
                    o = function () {};
                return {
                    s: o,
                    n: function () {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, a = !0,
            s = !1;
        return {
            s: function () {
                r = e[Symbol.iterator]()
            },
            n: function () {
                var e = r.next();
                return a = e.done, e
            },
            e: function (e) {
                s = !0, i = e
            },
            f: function () {
                try {
                    a || null == r.return || r.return()
                } finally {
                    if (s) throw i
                }
            }
        }
    }

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    t.MAX_FILTER_MATCHES = 100;
    var p = function () {
        function e(t) {
            var r = this,
                n = t.logger,
                o = t.hydratedData;
            (0, i.default)(this, e), this.observeEvent = (0, s.protectFunc)((function (e) {
                if (!r._isDisabled) switch (e.type) {
                case "lr.filter.ForceMatch":
                    r._addMatch(e.data.id, {
                        timeOverride: e.time
                    });
                    break;
                case "lr.filter.StartTransaction":
                    r._startTransaction(e.data.id, e.time);
                    break;
                case "lr.filter.EndTransaction":
                    r._endTransaction(e.data.id, e.time);
                    break;
                case "lr.browser.NodeInitEvent":
                    e.data.rootNode && r._filter(e, {
                        node: e.data.rootNode
                    });
                    break;
                case "lr.browser.NodeChangeEvent":
                    var t = e.data.addedOrMoved;
                    if (t && t.length) {
                        var n, o = f(t);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var i = n.value;
                                i.isRemoved || r._filter(e, {
                                    node: i.nodeData
                                })
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                    }
                    break;
                case "lr.browser.NavigationEvent":
                case "lr.network.ResponseEvent":
                    r._filter(e), delete r._observedRequestMatches[e.data.reqId];
                    break;
                case "lr.network.RequestEvent":
                    r._observedRequestMatches[e.data.reqId] = {}, r._filter(e);
                    break;
                case "lr.browser.MouseEvent":
                    "CLICK" === e.data.eventType && r._filter(e);
                    break;
                case "lr.redux.ReduxAction":
                case "lr.CustomEvent":
                case "lr.core.LogEvent":
                case "lr.core.Exception":
                    r._filter(e)
                }
            })), this._logger = n, this._filters = o && o.f ? o.f : null, this._matchCounts = o && o.mc ? o.mc : {}, this._recordingConditions = o && o.rc ? o.rc : null, this._activeTransactions = o && o.t ? o.t : {}, this._observedRequestMatches = {}, this._isDisabled = !(!this._filters || this._filters.length || !this._recordingConditions || this._recordingConditions.length)
        }
        return (0, a.default)(e, [{
            key: "setTriggers",
            value: function (e, t) {
                return this._filters && this._recordingConditions || (this._filters = e, this._recordingConditions = t, this._filters.length || this._recordingConditions.length || (this._isDisabled = !0), this._observedRequestMatches = {}), !!this._recordingConditions.length
            }
        }, {
            key: "reset",
            value: function () {
                this._filters = null, this._matchCounts = {}, this._recordingConditions = null, this._activeTransactions = {}, this._isDisabled = !1, this._observedRequestMatches = {}
            }
        }, {
            key: "isReady",
            value: function () {
                return !!this._filters
            }
        }, {
            key: "_decorateMatchFunc",
            value: function (e, t, r) {
                var n = this;
                switch (e.type) {
                case "lr.network.RequestEvent":
                    return function () {
                        return n._observedRequestMatches[e.data.reqId] && (n._observedRequestMatches[e.data.reqId][t.uuid] = !0), !1
                    };
                case "lr.network.ResponseEvent":
                    return function () {
                        if (n._observedRequestMatches[e.data.reqId] && n._observedRequestMatches[e.data.reqId][t.uuid]) return r()
                    };
                default:
                    return function () {
                        return r()
                    }
                }
            }
        }, {
            key: "_filter",
            value: function (e) {
                var t, r = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = e && "lr.network.ResponseEvent" === e.type && e.data && "number" == typeof e.data.duration && e.data.duration || 0,
                    i = f(this._filters);
                try {
                    var a = function () {
                        var i = t.value;
                        r._testFilter(e, i, {
                            activeTransactions: r._activeTransactions
                        }, l({
                            onMatch: r._decorateMatchFunc(e, i, (function () {
                                return r._addMatch(i.uuid, {
                                    duration: o,
                                    timeOverride: e.time
                                })
                            }))
                        }, r._getTransactionCallbacks(e, i)), n)
                    };
                    for (i.s(); !(t = i.n()).done;) a()
                } catch (e) {
                    i.e(e)
                } finally {
                    i.f()
                }
                this.checkSessionConfirmation(e, n) && this._logger.confirmSession(e.sessionID)
            }
        }, {
            key: "_testFilter",
            value: function (e, t, r, n, o) {
                return (0, u.default)(e, t, r, n, o)
            }
        }, {
            key: "_startTransaction",
            value: function (e, t) {
                this._activeTransactions[e] = t
            }
        }, {
            key: "_endTransaction",
            value: function (e, t) {
                var r = this._activeTransactions[e];
                r && this._addMatch(e, {
                    duration: t - r,
                    timeOverride: t
                }), delete this._activeTransactions[e]
            }
        }, {
            key: "_getTransactionCallbacks",
            value: function (e, t) {
                var r = this;
                return {
                    onTransactionStart: this._decorateMatchFunc(e, t, (function () {
                        return r._startTransaction(t.uuid, e.time)
                    })),
                    onTransactionEnd: this._decorateMatchFunc(e, t, (function () {
                        return r._endTransaction(t.uuid, e.time)
                    }))
                }
            }
        }, {
            key: "_addMatch",
            value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = t.duration,
                    n = void 0 === r ? 0 : r,
                    o = t.timeOverride,
                    i = void 0 === o ? null : o,
                    a = this._matchCounts[e] || 0;
                a >= 100 || (this._matchCounts[e] = a + 1, this._logger.addEvent("lr.filter.Match", (function () {
                    return {
                        uuid: e,
                        duration: n
                    }
                }), {
                    timeOverride: i
                }))
            }
        }, {
            key: "checkSessionConfirmation",
            value: function (e) {
                var t = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (this._recordingConditions && this._recordingConditions.length) {
                    var n, o = f(this._recordingConditions);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var i = n.value;
                            if (i.samplingRate > this._logger._recordingConditionThreshold && i.rules.every((function (n) {
                                    return t._testFilter(e, n, {
                                        activeTransactions: t._activeTransactions
                                    }, l({
                                        onMatch: function () {
                                            return !0
                                        }
                                    }, t._getTransactionCallbacks(e, n)), r)
                                }))) return !0
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                }
                return !1
            }
        }, {
            key: "unload",
            value: function () {
                if (this._filters || this._recordingConditions) return {
                    f: this._filters,
                    mc: this._matchCounts,
                    rc: this._recordingConditions,
                    t: this._activeTransactions
                }
            }
        }]), e
    }();
    t.default = p
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t, r, n, u) {
        var c = r.activeTimeOnPageHooks,
            l = r.compoundTriggerState,
            f = n.onMatch,
            d = n.onTimeOnPageStart,
            p = n.onUpdateCompoundTriggerState,
            h = e.compoundTrigger;
        switch (h.type.toLowerCase()) {
        case "timeonpage":
            if (c[e.uuid]) return !1;
            var y = (0, a.find)(h.params, (function (e) {
                    return "url" === e.name
                })),
                g = (0, a.find)(h.params, (function (e) {
                    return "time" === e.name
                }));
            if (!y) return !1;
            var v = {
                params: [{
                    name: "href",
                    strings: y.strings,
                    operator: y.operator
                }]
            };
            return !!(0, o.default)(v, t, (function () {
                return !0
            }), u) && (g && g.strings.length && g.strings[0] ? (d(), !0) : f());
        case "clickedcount":
            var m = l[e.uuid] || {
                    clickCount: 0
                },
                b = (0, a.find)(h.params, (function (e) {
                    return "click" === e.name
                })),
                w = (0, a.find)(h.params, (function (e) {
                    return "count" === e.name
                }));
            if (!b || !w) return !1;
            var _ = {
                params: [{
                    name: s[b.operator],
                    strings: b.strings,
                    operator: "eq"
                }]
            };
            if (!(0, o.default)(_, t, (function () {
                    return !0
                }), u)) return !1;
            var O = i.default[w.operator.toLowerCase()];
            if (!O || !w.strings.length) return !1;
            var I = {
                clickCount: m.clickCount + 1
            };
            return p(e.uuid, I), !!O(I.clickCount, w.strings[0]) && f();
        default:
            return !1
        }
    };
    var o = n(r(77)),
        i = n(r(32)),
        a = r(2),
        s = {
            TEXT_IS: "clicktext",
            SELECTOR_IS: "clickselector",
            COMPONENT_NAME_IS: "clickcomponent"
        };
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = t.BUFFER_SIZE = void 0;
    var o = n(r(4));
    t.BUFFER_SIZE = 25;
    var i = window.PerformanceObserver && "function" == typeof window.PerformanceObserver;
    t.default = function e(t) {
        var r = this,
            n = t.logger;
        if ((0, o.default)(this, e), this._firstHiddenTime = "hidden" === document.visibilityState ? 0 : 1 / 0, this._cls = 0, this._clsMeasurements = [], this.getWebVitals = function () {
                r._pageID = "".concat(r._logger._recordingID, ":").concat(r._logger._sessionID, ":").concat(r._logger._tabID, ":").concat(r._logger._threadID), r._initialURL = r._logger.urlSanitizer(window.location.href), r._sendCLSMeasurements();
                var e = 0 !== window.performance.timing.loadEventEnd,
                    t = Date.now() - window.performance.timing.loadEventEnd;
                e && t < r._logger._PageLoadStatsCutoff ? r._getWebVitals() : window.addEventListener("load", r._load)
            }, this.handleUnloadData = function (e) {
                var t = e.cm,
                    n = e.p,
                    o = e.u;
                t && n && o && r._addMetric("cumulativeLayoutShift", [t], {
                    pageID: n,
                    url: o
                })
            }, this.unload = function () {
                if (r._clsMeasurements.length) return {
                    cm: r._clsMeasurements.pop(),
                    p: r._pageID,
                    u: r._initialURL
                }
            }, this.unregisterWebVitals = function () {
                r._unregisterLCP && r._unregisterLCP(), r._unregisterFID && r._unregisterFID()
            }, this._addInitialPageLoadMetrics = function () {
                r._logger.addEvent("lr.InitialPageLoadMetrics", (function () {
                    return r._getPageLoadMetrics().metrics
                }))
            }, this._addMetric = function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                r._logger.addEvent("lr.metrics.Metric", (function () {
                    return {
                        metricType: e,
                        measurements: t,
                        extra: n
                    }
                }))
            }, this._getPageLoadMetrics = function () {
                var e = 0,
                    t = 0,
                    n = null,
                    o = null;
                if (window.performance.getEntriesByType) {
                    var i = window.performance.getEntriesByType("navigation");
                    if (i && i.length > 0) {
                        var a = i[0];
                        o = a.name, e = a.domComplete, t = a.responseStart - a.requestStart
                    }
                }
                if (0 === e && window.performance.timing) {
                    var s = window.performance.timing;
                    e = s.domComplete - s.navigationStart, t = s.responseStart - s.requestStart
                }
                return r._lcp && (n = Math.max(0, r._lcp)), o && (o = r._logger.urlSanitizer(o)), {
                    url: o,
                    metrics: {
                        initialPageLoadTime: Math.max(0, e),
                        timeToFirstByte: Math.max(0, t),
                        largestContentfulPaintTime: n
                    }
                }
            }, this._getWebVitals = function () {
                var e = r._logger._isFirstTab && 0 === r._logger._threadID;
                if (i) try {
                    r._LCPObserver.observe({
                        buffered: !0,
                        type: "largest-contentful-paint"
                    }), r._unregisterLCP = function () {
                        return r._LCPObserver.disconnect()
                    }, e && setTimeout(r._addInitialPageLoadMetrics, r._logger._LCPCaptureInterval), setTimeout(r._sendPageLoadMetrics, r._logger._LCPCaptureInterval), r._FIDObserver.observe({
                        buffered: !0,
                        type: "first-input"
                    }), r._unregisterFID = function () {
                        return r._FIDObserver.disconnect()
                    }
                } catch (t) {
                    e && r._addInitialPageLoadMetrics(), r._sendPageLoadMetrics()
                } else e && r._addInitialPageLoadMetrics(), r._sendPageLoadMetrics()
            }, this._handleCLSEntry = function (e) {
                Date.now() - r._logger._loadTime > r._logger._CLSTrackingTimeout || e.getEntries().forEach((function (e) {
                    var t = e.hadRecentInput,
                        n = e.value;
                    t || (r._cls += n, r._clsMeasurements.push({
                        timestamp: Date.now(),
                        value: parseFloat(r._cls.toFixed(3))
                    })), r._clsMeasurements.length > 100 ? r._clsMeasurements = [r._clsMeasurements.pop()] : r._clsMeasurements.length >= 25 && r._sendCLSMeasurements()
                }))
            }, this._handleFIDEntry = function (e, t) {
                e.getEntries().forEach((function (e) {
                    var n = e.processingStart,
                        o = e.startTime;
                    if (o < r._firstHiddenTime) {
                        var i = Math.max(0, n - o);
                        r._logger.addEvent("lr.performance.FirstInputDelay", (function () {
                            return {
                                duration: i
                            }
                        }));
                        var a = r._logger.urlSanitizer(r._logger._getCurrentURL());
                        r._addMetric("firstInputDelay", [{
                            timestamp: Date.now(),
                            value: i
                        }], a ? {
                            url: a
                        } : {}), r._unregisterFID = null, t.disconnect()
                    }
                }))
            }, this._handleLCPEntry = function (e) {
                var t = e.getEntries(),
                    n = t[t.length - 1],
                    o = n.renderTime || n.loadTime;
                o < r._firstHiddenTime && (r._lcp = o)
            }, this._load = function () {
                window.removeEventListener("load", r._load), setTimeout(r._getWebVitals)
            }, this._sendCLSMeasurements = function () {
                r._clsMeasurements.length && r._pageID && r._addMetric("cumulativeLayoutShift", r._clsMeasurements.splice(0, r._clsMeasurements.length), {
                    pageID: r._pageID,
                    url: r._initialURL
                })
            }, this._sendPageLoadMetrics = function () {
                for (var e = Date.now(), t = r._getPageLoadMetrics(), n = t.url, o = t.metrics, i = 0, a = Object.keys(o); i < a.length; i++) {
                    var s = a[i],
                        u = Math.max(0, o[s]);
                    u > 0 && r._addMetric(s, [{
                        timestamp: e,
                        value: u
                    }], n ? {
                        url: n
                    } : {})
                }
            }, this._logger = n, i) {
            try {
                new window.PerformanceObserver(this._handleCLSEntry).observe({
                    buffered: !0,
                    type: "layout-shift"
                }), document.addEventListener("visibilitychange", (function () {
                    "hidden" === document.visibilityState && r._sendCLSMeasurements()
                }))
            } catch (e) {}
            this._FIDObserver = new window.PerformanceObserver(this._handleFIDEntry), this._LCPObserver = new window.PerformanceObserver(this._handleLCPEntry), document.addEventListener("visibilitychange", (function (e) {
                r._firstHiddenTime = Math.min(r._firstHiddenTime, e.timeStamp)
            }), {
                once: !0
            })
        }
    }
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = n(r(7)),
        i = n(r(4)),
        a = n(r(6)),
        s = r(37),
        u = r(2),
        c = n(r(75)),
        l = n(r(32));

    function f(e, t) {
        var r;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (r = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0,
                    o = function () {};
                return {
                    s: o,
                    n: function () {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, a = !0,
            s = !1;
        return {
            s: function () {
                r = e[Symbol.iterator]()
            },
            n: function () {
                var e = r.next();
                return a = e.done, e
            },
            e: function (e) {
                s = !0, i = e
            },
            f: function () {
                try {
                    a || null == r.return || r.return()
                } finally {
                    if (s) throw i
                }
            }
        }
    }

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var p = 36e5,
        h = function () {
            function e(t) {
                var r = this;
                (0, i.default)(this, e), this.observeEvent = (0, u.protectFunc)((function (e) {
                    switch (e.type) {
                    case "lr.browser.NodeInitEvent":
                        e.data.rootNode && r._filter(e, {
                            node: e.data.rootNode
                        });
                        break;
                    case "lr.browser.NodeChangeEvent":
                        var t = e.data.addedOrMoved;
                        if (t && t.length) {
                            var n, o = f(t);
                            try {
                                for (o.s(); !(n = o.n()).done;) {
                                    var i = n.value;
                                    i.isRemoved || r._filter(e, {
                                        node: i.nodeData
                                    })
                                }
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                        }
                        break;
                    case "lr.browser.NavigationEvent":
                        r._updateCurrentPage();
                    case "lr.network.ResponseEvent":
                        r._filter(e), delete r._observedRequestMatches[e.data.reqId];
                        break;
                    case "lr.network.RequestEvent":
                        r._observedRequestMatches[e.data.reqId] = {}, r._filter(e);
                        break;
                    case "lr.browser.MouseEvent":
                        "CLICK" === e.data.eventType && r._filter(e);
                        break;
                    case "lr.redux.ReduxAction":
                    case "lr.CustomEvent":
                    case "lr.core.LogEvent":
                    case "lr.core.Exception":
                        r._filter(e)
                    }
                })), this._logger = t, this._eventHooks = [], this._activeTransactions = {}, this._activeTimeOnPageHooks = {}, this._observedRequestMatches = {}, this._compoundTriggerState = {}, this._lastNavigateTime = null, this._isReady = !1
            }
            return (0, a.default)(e, [{
                key: "completeInit",
                value: function () {
                    this.isReady() || (this._isReady = !0)
                }
            }, {
                key: "addEventHook",
                value: function (e, t) {
                    var r = this;
                    if ("function" != typeof t || "object" !== (0, o.default)(e)) return this._logger._consoleLog("warn", "invalid event hook registration"),
                        function () {};
                    var n = {
                        hook: e,
                        action: t
                    };
                    return this._eventHooks.push(n),
                        function () {
                            var t = r._eventHooks.indexOf(n);
                            t > -1 && r._eventHooks.splice(t, 1), delete r._compoundTriggerState[e.uuid]
                        }
                }
            }, {
                key: "isReady",
                value: function () {
                    return this._isReady
                }
            }, {
                key: "reset",
                value: function () {
                    this._eventHooks = [], this._activeTransactions = {}, this._resetActiveTimeOnPageHooks(), this._observedRequestMatches = {}, this._compoundTriggerState = {}, this._lastNavigateTime = null, this._isReady = !1
                }
            }, {
                key: "_resetActiveTimeOnPageHooks",
                value: function () {
                    var e = this;
                    Object.keys(this._activeTimeOnPageHooks).forEach((function (t) {
                        return clearTimeout(e._activeTimeOnPageHooks[t])
                    })), this._activeTimeOnPageHooks = {}
                }
            }, {
                key: "_decorateMatchFunc",
                value: function (e, t, r) {
                    var n = this;
                    switch (e.type) {
                    case "lr.network.RequestEvent":
                        return function () {
                            return n._observedRequestMatches[e.data.reqId] && (n._observedRequestMatches[e.data.reqId][t.uuid] = !0), !1
                        };
                    case "lr.network.ResponseEvent":
                        return function () {
                            if (n._observedRequestMatches[e.data.reqId] && n._observedRequestMatches[e.data.reqId][t.uuid]) return r()
                        };
                    default:
                        return function () {
                            return r()
                        }
                    }
                }
            }, {
                key: "_filter",
                value: function (e) {
                    var t, r = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = f(this._eventHooks);
                    try {
                        var i = function () {
                            var o = t.value,
                                i = function () {
                                    return o.action(o.hook, e)
                                };
                            (0, c.default)(e, o.hook, {
                                activeTransactions: r._activeTransactions,
                                activeTimeOnPageHooks: r._activeTimeOnPageHooks,
                                compoundTriggerState: r._compoundTriggerState
                            }, {
                                onMatch: r._decorateMatchFunc(e, o.hook, i),
                                onTransactionStart: r._decorateMatchFunc(e, o, (function () {
                                    return r._startTransaction(o.hook.uuid, e.time)
                                })),
                                onTransactionEnd: r._decorateMatchFunc(e, o, (function () {
                                    return r._endTransaction(o.hook.uuid, i)
                                })),
                                onTimeOnPageStart: function () {
                                    return r._startTimeOnPageHook(o.hook, i)
                                },
                                onUpdateCompoundTriggerState: function (e, t) {
                                    return r._updateCompoundTriggerState(e, t)
                                }
                            }, n)
                        };
                        for (o.s(); !(t = o.n()).done;) i()
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                }
            }, {
                key: "_startTransaction",
                value: function (e, t) {
                    this._activeTransactions[e] = t
                }
            }, {
                key: "_endTransaction",
                value: function (e, t) {
                    this._activeTransactions[e] && t(), delete this._activeTransactions[e]
                }
            }, {
                key: "_startTimeOnPageHook",
                value: function (e, t) {
                    var r = this,
                        n = this._getTimeOnPage(),
                        o = (0, u.find)(e.compoundTrigger.params, (function (e) {
                            return "time" === e.name
                        }));
                    if (o) {
                        var i = o.operator.toLowerCase(),
                            a = l.default[i];
                        if (a) {
                            var s = function (e) {
                                try {
                                    var t = Number(e);
                                    if (!isNaN(t)) return t;
                                    var r = Number(e.substr(0, e.length - 1)),
                                        n = e.substr(-1);
                                    if (isNaN(r) && (n = e.substr(-2), r = Number(e.substr(0, e.length - 2))), isNaN(r)) return;
                                    switch (n.toLowerCase()) {
                                    case "ms":
                                        return r;
                                    case "s":
                                        return 1e3 * r;
                                    case "m":
                                        return 6e4 * r;
                                    case "h":
                                        return r * p;
                                    case "d":
                                        return 864e5 * r;
                                    default:
                                        return
                                    }
                                } catch (e) {
                                    return
                                }
                            }(o.strings[0]);
                            void 0 !== s ? a(n, s) ? t() : ("gte" === i || "gt" === i || "eq" === i && n < s) && (this._activeTimeOnPageHooks[e.uuid] = setTimeout((function () {
                                t(), delete r._activeTimeOnPageHooks[e.uuid]
                            }), s - n)) : (0, u.sendTelemetry)("Malformed duration string: ".concat(o.strings[0]), {
                                extra: {
                                    appID: this._logger._appID
                                }
                            })
                        }
                    }
                }
            }, {
                key: "_updateCompoundTriggerState",
                value: function (e, t) {
                    t ? this._compoundTriggerState[e] = t : delete this._compoundTriggerState[e]
                }
            }, {
                key: "_updateCurrentPage",
                value: function () {
                    this._resetActiveTimeOnPageHooks(), this._lastNavigateTime = this._getCurrentTime()
                }
            }, {
                key: "_getCurrentTime",
                value: function () {
                    return window.performance ? window.performance.now() : Date.now()
                }
            }, {
                key: "_getTimeOnPage",
                value: function () {
                    return this._lastNavigateTime ? this._getCurrentTime() - this._lastNavigateTime : 0
                }
            }]), e
        }(),
        y = function () {
            function e(t) {
                var r = this;
                (0, i.default)(this, e), this.observeEvent = (0, u.protectFunc)((function (e) {
                    r._isDisabled || r._dispatchEvent(e) || (r._eventQueue.length >= s.MAX_BUFFERED_EVENTS ? (r._isDisabled = !0, r._eventQueue = [], r._logger._consoleLog("warn", "LogRocket filter manager is using too much memory. Disabling.")) : r._eventQueue.push(e))
                })), this._dispatchEvent = function (e) {
                    var t, n = !0,
                        o = f(r._observers);
                    try {
                        for (o.s(); !(t = o.n()).done;) {
                            var i = t.value;
                            i.completedInit ? i.observer.observeEvent(e) : n = !1
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                    return n
                }, this._hooksImpl = new h(t), this._observers = [], this._logger = t, this._eventQueue = [], this._isDisabled = !1, this.addObserver(this._hooksImpl)
            }
            return (0, a.default)(e, [{
                key: "completeInit",
                value: function () {
                    this._hooksImpl.completeInit();
                    var e, t = !0,
                        r = f(this._observers);
                    try {
                        for (r.s(); !(e = r.n()).done;) {
                            var n = e.value;
                            if (!n.completedInit)
                                if (n.observer.isReady()) {
                                    n.completedInit = !0;
                                    var o, i = f(this._eventQueue);
                                    try {
                                        for (i.s(); !(o = i.n()).done;) {
                                            var a = o.value;
                                            n.observer.observeEvent(a)
                                        }
                                    } catch (e) {
                                        i.e(e)
                                    } finally {
                                        i.f()
                                    }
                                } else t = !1
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                    t && (this._eventQueue = [])
                }
            }, {
                key: "addEventHook",
                value: function (e, t) {
                    return this._hooksImpl.addEventHook(e, t)
                }
            }, {
                key: "addObserver",
                value: function (e) {
                    var t = this;
                    if ("object" !== (0, o.default)(e) || "function" != typeof e.observeEvent) return this._logger._consoleLog("warn", "invalid event observer registration"),
                        function () {};
                    var r = {
                        observer: e,
                        completedInit: e.isReady()
                    };
                    return this._observers.push(r),
                        function () {
                            var e = t._observers.indexOf(r);
                            e > -1 && t._observers.splice(e, 1)
                        }
                }
            }, {
                key: "reset",
                value: function () {
                    this._hooksImpl.reset(), this._eventQueue = [], this._isDisabled = !1;
                    var e, t = f(this._observers);
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            e.value.completedInit = !1
                        }
                    } catch (e) {
                        t.e(e)
                    } finally {
                        t.f()
                    }
                }
            }]), e
        }();
    t.default = y, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = n(r(4)),
        i = n(r(6));

    function a(e, t) {
        var r;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (r = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0,
                    o = function () {};
                return {
                    s: o,
                    n: function () {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, a = !0,
            u = !1;
        return {
            s: function () {
                r = e[Symbol.iterator]()
            },
            n: function () {
                var e = r.next();
                return a = e.done, e
            },
            e: function (e) {
                u = !0, i = e
            },
            f: function () {
                try {
                    a || null == r.return || r.return()
                } finally {
                    if (u) throw i
                }
            }
        }
    }

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var u = function () {
        function e(t) {
            (0, o.default)(this, e), this._logger = t, this.reset()
        }
        return (0, i.default)(e, [{
            key: "addInput",
            value: function (e) {
                var t = e.nodeId,
                    r = e.value;
                if (!this._isDisabled) {
                    if (!this._redactedInputs[t]) {
                        if (this._redactedInputNodeIds.length >= 50) {
                            var n = this._redactedInputNodeIds.shift();
                            delete this._redactedInputs[n]
                        }
                        this._redactedInputNodeIds.push(t)
                    }
                    this._redactedInputs[t] = {
                        value: r,
                        time: Date.now()
                    }
                }
            }
        }, {
            key: "match",
            value: function (e) {
                var t = this,
                    r = e.body,
                    n = e.reqId;
                if (!this._isDisabled) {
                    var o, i = a(this._redactedInputNodeIds);
                    try {
                        var s = function () {
                            var e = o.value,
                                i = t._redactedInputs[e].value,
                                a = null,
                                s = null;
                            if (i && "string" == typeof r && (s = r.indexOf(i)) >= 0 && (a = i), null != a) return t._logger.addEvent("lr.browser.PIIExposureEvent", (function () {
                                return {
                                    redactedInputContext: {
                                        matchedItem: a,
                                        matchIndex: s,
                                        reqId: n,
                                        source: r.substring(s - 10, s + a.length + 10)
                                    }
                                }
                            })), "break"
                        };
                        for (i.s(); !(o = i.n()).done;) {
                            if ("break" === s()) break
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                }
            }
        }, {
            key: "reset",
            value: function () {
                this._isDisabled = !1, this._redactedInputNodeIds = [], this._redactedInputs = {}
            }
        }, {
            key: "shutdown",
            value: function () {
                this._isDisabled = !0, this._redactedInputNodeIds = [], this._redactedInputs = {}
            }
        }]), e
    }();
    t.default = u, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = n(r(4)),
        i = n(r(6)),
        a = r(2),
        s = function () {
            function e(t) {
                (0, o.default)(this, e), this._logger = t
            }
            return (0, i.default)(e, [{
                key: "_parseWootric",
                value: function (e) {
                    var t = new window.URL(e).searchParams;
                    return {
                        surveyID: t.get("survey[unique_link]"),
                        score: t.get("response[score]"),
                        feedback: "",
                        provider: "WOOTRIC"
                    }
                }
            }, {
                key: "_parseDelighted",
                value: function (e) {
                    var t = new window.URL(e).pathname.split("/").slice(-3);
                    return {
                        surveyID: t[0],
                        score: t[1],
                        feedback: "",
                        provider: "DELIGHTED"
                    }
                }
            }, {
                key: "match",
                value: function (e) {
                    var t;
                    e && window.URL && "function" == typeof window.URL && (0 === e.search(a.WOOTRIC_RESPONSES_REGEX) ? t = this._parseWootric(e) : 0 === e.search(a.DELIGHTED_RESPONSES_REGEX) && (t = this._parseDelighted(e)), t && t.surveyID && this._logger.addEvent("lr.browser.NPSEvent", (function () {
                        return t
                    })))
                }
            }]), e
        }();
    t.default = s, e.exports = t.default
}, function (e, t, r) {
    "use strict";
    e.exports = r(259)
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "validateGuideDefinition", {
        enumerable: !0,
        get: function () {
            return n.validateGuideDefinition
        }
    }), Object.defineProperty(t, "GuidesManager", {
        enumerable: !0,
        get: function () {
            return o.GuidesManager
        }
    }), Object.defineProperty(t, "FeedbackWidget", {
        enumerable: !0,
        get: function () {
            return i.FeedbackWidget
        }
    }), Object.defineProperty(t, "RatingWidget", {
        enumerable: !0,
        get: function () {
            return a.RatingWidget
        }
    }), Object.defineProperty(t, "DEFAULT_RATING_MAX", {
        enumerable: !0,
        get: function () {
            return a.DEFAULT_RATING_MAX
        }
    }), Object.defineProperty(t, "DEFAULT_RATING_MIN", {
        enumerable: !0,
        get: function () {
            return a.DEFAULT_RATING_MIN
        }
    }), Object.defineProperty(t, "FEEDBACK_RESPONSE_TYPE_TEXT", {
        enumerable: !0,
        get: function () {
            return s.FEEDBACK_RESPONSE_TYPE_TEXT
        }
    }), Object.defineProperty(t, "FEEDBACK_RESPONSE_TYPE_RATING", {
        enumerable: !0,
        get: function () {
            return s.FEEDBACK_RESPONSE_TYPE_RATING
        }
    });
    var n = r(260),
        o = r(261),
        i = r(33),
        a = r(35),
        s = r(81)
}, function (e, t, r) {
    "use strict";

    function n(e) {
        if (!e[e.predicate]) throw new Error("".concat(e.predicate, " predicate field missing"))
    }

    function o(e) {
        if (!e[e.payload]) throw new Error("".concat(e.payload, " action payload missing"))
    }

    function i(e) {
        if (!e) throw new Error("Nullish guide step");
        if (!e[e.payload]) throw new Error("".concat(e.payload, " step payload missing"));
        switch (e.payload) {
        case "simpleStep":
            e.simpleStep.triggers.forEach(n), e.simpleStep.actions.forEach(o);
            break;
        default:
            throw new Error("Unknown step type")
        }
    }

    function a(e) {
        if (!e) throw new Error("Nullish guide definition");
        e.steps.forEach(i)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.validateGuideDefinition = a, t.default = void 0;
    var s = a;
    t.default = s
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = t.GuidesManager = t.GUIDE_COMPLETE = t.GUIDE_STORAGE_KEY = t.GUIDE_ROOT_NODE_ID = void 0;
    var o = n(r(3)),
        i = n(r(11)),
        a = n(r(5)),
        s = n(r(4)),
        u = n(r(6)),
        c = n(r(262)),
        l = n(r(274)),
        f = n(r(276)),
        d = r(2);

    function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function h(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? p(Object(r), !0).forEach((function (t) {
                (0, o.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }
    var y = "_lr_guides_root";
    t.GUIDE_ROOT_NODE_ID = y;
    var g = "guide_";
    t.GUIDE_STORAGE_KEY = g;
    var v = "done";

    function m(e, t) {
        if (t === v) return {
            stepID: t
        };
        for (var r = (0, d.find)(e.steps, (function (e) {
                return e.uuid === t
            })) || e.steps[0], n = new Array(r.simpleStep.triggers.length), o = 0; o < n.length; o++) n[o] = !1;
        return {
            stepID: r.uuid,
            triggerState: n
        }
    }

    function b(e) {
        return "compoundTrigger" === e.predicate && "deviceTypeAndName" === e.compoundTrigger.type
    }

    function w() {
        return window.location.search
    }
    t.GUIDE_COMPLETE = v;
    var _ = function () {
        function e(t) {
            var r = this,
                n = t.eventHooks,
                o = t.logger,
                i = t.actionRunners,
                a = void 0 === i ? {
                    feedback: c.default,
                    preview: l.default
                } : i,
                u = t.getWindowSearch,
                f = void 0 === u ? w : u;
            (0, s.default)(this, e), this.setGuides = (0, d.protectFunc)((function (e) {
                r._guidesSet || r._checkForPreview() || (r._guidesSet = !0, r._guides = e, r._loadGuideState(), r._guides.forEach((function (e) {
                    return r._registerGuideHooks(e)
                })))
            })), this.reset = (0, d.protectFunc)((function () {
                Object.keys(r._guideHooks).forEach((function (e) {
                    return r._guideHooks[e].forEach((function (e) {
                        return e()
                    }))
                })), r._guides = [], r._guideState = {}, r._guideHooks = {}, r._activeStep = void 0, r._guidesSet = !1, r._removeRootNode()
            })), this._eventHooks = n, this._logger = o, this._actionRunners = a, this._guides = [], this._guideState = {}, this._guideHooks = {}, this._activeStep = void 0, this._guidesSet = !1, this._getWindowSearch = f
        }
        return (0, u.default)(e, [{
            key: "_checkForPreview",
            value: function () {
                var e = this._getWindowSearch().replace("?", "").split("&").reduce((function (e, t) {
                    var r = t.split("="),
                        n = (0, a.default)(r, 2),
                        o = n[0],
                        s = n[1];
                    return e.hasOwnProperty(o) ? e[o] = [].concat((0, i.default)(e[o]), [s]) : e[o] = [s], e
                }), {});
                if (e.logrocket_preview && e.logrocket_preview.every((function (e) {
                        return "" !== e
                    }))) {
                    var t = e.logrocket_preview.length > 1,
                        r = decodeURIComponent(e.logrocket_preview[0]),
                        n = t ? decodeURIComponent(e.logrocket_preview[1]) : void 0;
                    return this._activeStep = "preview", this._actionRunners.preview({
                        rootNode: this._ensureRootNode(),
                        ratingContent: n,
                        feedbackContent: r
                    }), !0
                }
                return !1
            }
        }, {
            key: "_advanceGuideState",
            value: function (e, t) {
                var r = e.steps.indexOf(t);
                this._updateGuideState(e, r + 1 >= e.steps.length ? v : e.steps[r + 1].uuid)
            }
        }, {
            key: "_loadGuideState",
            value: function () {
                var e = this;
                this._guideState = {}, this._guides.forEach((function (t) {
                    if (t.steps.length) {
                        var r = e._logger.getLocalStorageItem("".concat(g).concat(t.uuid));
                        e._guideState[t.uuid] = m(t, r || t.steps[0].uuid)
                    }
                }))
            }
        }, {
            key: "_updateGuideState",
            value: function (e, t) {
                this._guideState[e.uuid] = m(e, t), this._logger.setLocalStorageItem("".concat(g).concat(e.uuid), t), this._registerGuideHooks(e)
            }
        }, {
            key: "_registerGuideHooks",
            value: function (e) {
                var t = this;
                if (this._guideHooks[e.uuid] && (this._guideHooks[e.uuid].forEach((function (e) {
                        return e()
                    })), delete this._guideHooks[e.uuid]), this._guideState[e.uuid]) {
                    var r = this._guideState[e.uuid].stepID;
                    if (r !== v) {
                        var n, o = (0, d.find)(e.steps, (function (e) {
                            return e.uuid === r
                        }));
                        if (o) {
                            if (o.simpleStep) {
                                for (var i = [], s = 0; s < o.simpleStep.triggers.length; s++) {
                                    var u = o.simpleStep.triggers[s];
                                    if (b(u)) {
                                        if (!b(n = u) || !(0, f.default)(n.compoundTrigger)) return;
                                        this._markTriggerSatisfied(e, o, s)
                                    } else i.push([s, u])
                                }
                                this._guideHooks[e.uuid] = i.map((function (r) {
                                    var n = (0, a.default)(r, 2),
                                        i = n[0],
                                        s = n[1];
                                    return t._eventHooks.addEventHook(h(h({}, s), {}, {
                                        uuid: "".concat(o.uuid, "-").concat(i)
                                    }), (function () {
                                        return t._markTriggerSatisfied(e, o, i)
                                    }))
                                }))
                            }
                        } else this._logger._consoleLog("warn", "LogRocket guides manager failed to find current guide step.\n          Guide uuid: ".concat(e.uuid, ", step uuid: ").concat(r))
                    }
                }
            }
        }, {
            key: "_markTriggerSatisfied",
            value: function (e, t, r) {
                var n = this._guideState[e.uuid];
                n && n.stepID !== v ? (n.triggerState[r] = !0, n.triggerState.every((function (e) {
                    return e
                })) ? this._executeStep(e, t) : this._guideHooks[e.uuid] && this._guideHooks[e.uuid][r] && (this._guideHooks[e.uuid][r](), this._guideHooks[e.uuid][r] = function () {})) : this._logger._consoleLog("warn", "LogRocket guides manager encountered unexpected guide state.\n          Guide uuid: ".concat(e.uuid, ", step uuid: ").concat(t.uuid))
            }
        }, {
            key: "_executeStep",
            value: function (e, t) {
                var r = this;
                if (!this._activeStep) {
                    this._activeStep = t.uuid, this._logger.addEvent("lr.guide.GuideStepStart", (function () {
                        return {
                            guideID: e.uuid,
                            stepID: t.uuid
                        }
                    }));
                    var n, o, a = function () {
                            r._removeRootNode(), r._activeStep = void 0
                        },
                        s = function () {
                            r._logger.addEvent("lr.guide.GuideStepEnd", (function () {
                                return {
                                    guideID: e.uuid,
                                    stepID: t.uuid
                                }
                            })), a(), r._advanceGuideState(e, t)
                        },
                        u = function (e) {
                            a(), r._logger._consoleLog("error", "LogRocket guide encountered error: ".concat(e.message))
                        };
                    (0, (n = t.simpleStep.actions, o = (0, i.default)(n), {
                        executeNextAction: function n() {
                            if (0 === o.length) s();
                            else {
                                var i = o.shift();
                                r._executeStepAction({
                                    guide: e,
                                    currentStep: t,
                                    stepAction: i,
                                    onActionEnd: n,
                                    onCancel: s,
                                    onCleanup: a,
                                    onError: u
                                })
                            }
                        }
                    }).executeNextAction)()
                }
            }
        }, {
            key: "_executeStepAction",
            value: function (e) {
                var t = e.guide,
                    r = e.currentStep,
                    n = e.stepAction,
                    o = e.onActionEnd,
                    i = e.onCancel,
                    a = e.onCleanup,
                    s = e.onError;
                try {
                    switch (n.payload) {
                    case "feedback":
                        this._actionRunners.feedback({
                            guide: t,
                            currentStep: r,
                            stepAction: n,
                            logger: this._logger,
                            rootNode: this._ensureRootNode(),
                            onDone: o,
                            onCancel: i,
                            onError: s
                        });
                        break;
                    default:
                        this._logger._consoleLog("warn", "LogRocket guides manager encountered unknown guide step ".concat(r.action))
                    }
                } catch (e) {
                    this._logger._consoleLog("error", "LogRocket guides manager encountered error running guide ".concat(e)), a()
                }
            }
        }, {
            key: "_ensureRootNode",
            value: function () {
                var e = document.getElementById(y);
                return e || ((e = document.createElement("div")).id = y, document.body.appendChild(e)), e
            }
        }, {
            key: "_removeRootNode",
            value: function () {
                var e = document.getElementById(y);
                e && e.parentNode && e.parentNode.removeChild(e)
            }
        }]), e
    }();
    t.GuidesManager = _;
    var O = _;
    t.default = O
}, function (e, t, r) {
    "use strict";
    var n = r(8),
        o = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = e.guide,
            r = e.currentStep,
            n = e.stepAction,
            o = e.logger,
            i = e.rootNode,
            s = e.onDone,
            u = e.onCancel,
            d = e.onError,
            y = p(p({}, n.feedback), {}, {
                responseType: n.feedback.responseType || f.FEEDBACK_RESPONSE_TYPE_TEXT
            });
        setTimeout((function () {
            a.render(a.createElement(c.default, {
                onError: d
            }, a.createElement(l.default, null, h({
                guide: t,
                currentStep: r,
                feedbackAction: y,
                logger: o,
                rootNode: i,
                onDone: s,
                onCancel: u
            }))), i)
        }))
    }, t.getFeedbackComponent = void 0;
    var i = o(r(3)),
        a = n(r(1)),
        s = r(33),
        u = r(35),
        c = o(r(273)),
        l = o(r(80)),
        f = r(81);

    function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? d(Object(r), !0).forEach((function (t) {
                (0, i.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }
    var h = function (e) {
        var t = e.guide,
            r = e.currentStep,
            n = e.feedbackAction,
            o = e.logger,
            i = e.rootNode,
            c = e.onDone,
            l = e.onCancel,
            d = e.onError,
            h = function () {
                a.render(null, i), l()
            },
            y = function (e, n) {
                a.render(null, i), o.addEvent(e, (function () {
                    return p({
                        guideID: t.uuid,
                        stepID: r.uuid
                    }, n)
                })), c()
            };
        switch (n.responseType) {
        case f.FEEDBACK_RESPONSE_TYPE_TEXT:
            return a.createElement(s.FeedbackWidget, {
                content: n.content,
                onCancel: h,
                onSubmit: function (e) {
                    return y("lr.feedback.FeedbackResponse", {
                        userFeedback: e
                    })
                }
            });
        case f.FEEDBACK_RESPONSE_TYPE_RATING:
            return a.createElement(u.RatingWidget, {
                content: n.content,
                onCancel: h,
                onSubmit: function (e) {
                    return y("lr.feedback.RatingResponse", {
                        rating: e
                    })
                }
            });
        default:
            return d({
                message: "Encountered unknown feedback response type"
            }), a.createElement("div", null)
        }
    };
    t.getFeedbackComponent = h
}, function (e, t, r) {
    var n = r(264)();
    e.exports = n
}, function (e, t, r) {
    var n = r(265),
        o = r(266),
        i = r(272);
    e.exports = function (e) {
        return function (t, r, a) {
            return a && "number" != typeof a && o(t, r, a) && (r = a = void 0), t = i(t), void 0 === r ? (r = t, t = 0) : r = i(r), a = void 0 === a ? t < r ? 1 : -1 : i(a), n(t, r, a, e)
        }
    }
}, function (e, t) {
    var r = Math.ceil,
        n = Math.max;
    e.exports = function (e, t, o, i) {
        for (var a = -1, s = n(r((t - e) / (o || 1)), 0), u = Array(s); s--;) u[i ? s : ++a] = e, e += o;
        return u
    }
}, function (e, t, r) {
    var n = r(267),
        o = r(268),
        i = r(271),
        a = r(17);
    e.exports = function (e, t, r) {
        if (!a(r)) return !1;
        var s = typeof t;
        return !!("number" == s ? o(r) && i(t, r.length) : "string" == s && t in r) && n(r[t], e)
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return e === t || e != e && t != t
    }
}, function (e, t, r) {
    var n = r(269),
        o = r(270);
    e.exports = function (e) {
        return null != e && o(e.length) && !n(e)
    }
}, function (e, t, r) {
    var n = r(70),
        o = r(17);
    e.exports = function (e) {
        if (!o(e)) return !1;
        var t = n(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
    }
}, function (e, t) {
    e.exports = function (e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
    }
}, function (e, t) {
    var r = /^(?:0|[1-9]\d*)$/;
    e.exports = function (e, t) {
        var n = typeof e;
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && r.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}, function (e, t, r) {
    var n = r(69),
        o = 1 / 0;
    e.exports = function (e) {
        return e ? (e = n(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
    }
}, function (e, t, r) {
    "use strict";
    var n = r(8),
        o = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = e.onError,
            r = e.children,
            n = (0, s.useErrorBoundary)((function (e) {
                return t(e)
            }));
        if ((0, i.default)(n, 1)[0]) return a.createElement("div", null);
        return r
    };
    var i = o(r(5)),
        a = n(r(1)),
        s = r(18);
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(8);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = e.ratingContent,
            r = void 0 === t ? void 0 : t,
            n = e.feedbackContent,
            a = e.rootNode;
        setTimeout((function () {
            o.render(o.createElement(i.FeedbackPreview, {
                ratingContent: r,
                feedbackContent: n
            }), a)
        }))
    };
    var o = n(r(1)),
        i = r(275);
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(8),
        o = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.FeedbackPreview = function (e) {
        var t = e.ratingContent,
            r = void 0 === t ? void 0 : t,
            n = e.feedbackContent,
            o = (0, s.useState)(void 0 !== r),
            f = (0, i.default)(o, 2),
            d = f[0],
            p = f[1];
        return a.createElement(c.default, null, d ? a.createElement(l.RatingWidget, {
            content: r,
            onCancel: function () {},
            onSubmit: function () {
                return p(!1)
            }
        }) : a.createElement(u.FeedbackWidget, {
            content: n,
            onCancel: function () {},
            onSubmit: function () {},
            onError: function () {},
            readOnly: !0,
            initialValue: "Users will enter their feedback here."
        }))
    };
    var i = o(r(5)),
        a = n(r(1)),
        s = r(18),
        u = r(33),
        c = o(r(80)),
        l = r(35)
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.navigator.userAgent,
            r = (0, n.find)(e.params, (function (e) {
                return "deviceType" === e.name
            }));
        if (!r || !r.strings || !r.strings.length) return !1;
        var a = "desktop";
        o.test(t) ? a = "tablet" : i.test(t) && (a = "mobile");
        return a === r.strings[0].toLowerCase()
    };
    var n = r(2),
        o = /(tablet|ipad|playbook|silk|kindle)|(android(?!.*mobile))/i,
        i = /(mobile|iphone|ipod|android|windows phone|blackberry)/i;
    e.exports = t.default
}, function (e, t, r) {
    "use strict";
    var n = r(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.checkForValidationErrors = a, t.sanitizeEventProps = function (e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, r = 0, n = {}, o = [], u = 0, c = Object.keys(e); u < c.length; u++) {
            var l = c[u],
                f = e[l],
                d = a(l, f);
            void 0 === d ? void 0 === t || r !== t ? (r++, n[l] = s(f)) : o.push({
                error: i.VALIDATION_ERRORS.MAX_PROPS_REACHED,
                prop: l
            }) : o.push(d)
        }
        return {
            eventProps: n,
            errors: o
        }
    };
    var o = n(r(7)),
        i = r(36);

    function a(e, t) {
        if (e.length > i.MAX_PROPERTY_NAME_LENGTH) return {
            error: i.VALIDATION_ERRORS.NAME_TOO_LONG,
            prop: e
        };
        if (Object.keys(i.RESERVED_PROPS).indexOf(e) >= 0 && i.RESERVED_PROPS[e] !== (0, o.default)(t)) return {
            error: i.VALIDATION_ERRORS.RESERVED_TYPE_MISMATCH,
            prop: e,
            propType: (0, o.default)(t)
        };
        if (Array.isArray(t)) {
            if (0 === t.length) return {
                error: i.VALIDATION_ERRORS.EMPTY_ARRAY,
                prop: e
            };
            var r = (0, o.default)(t[0]);
            return i.SUPPORTED_TYPES.indexOf(r) < 0 ? {
                error: i.VALIDATION_ERRORS.UNSUPPORTED_TYPE,
                prop: e,
                propType: "".concat(r, "[]")
            } : t.every((function (e) {
                return (0, o.default)(e) === r
            })) ? void 0 : {
                error: i.VALIDATION_ERRORS.MIXED_TYPE_ARRAY,
                prop: e
            }
        }
        return i.SUPPORTED_TYPES.indexOf((0, o.default)(t)) < 0 ? {
            error: i.VALIDATION_ERRORS.UNSUPPORTED_TYPE,
            prop: e,
            propType: (0, o.default)(t)
        } : void 0
    }

    function s(e) {
        var t = Array.isArray(e) ? e : [e];
        switch ((0, o.default)(t[0])) {
        case "number":
            return {
                doubleVal: t
            };
        case "boolean":
            return {
                boolVal: t
            };
        case "string":
            return {
                stringVal: t
            };
        default:
            return {}
        }
    }
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.printEventPropError = function (e) {
        switch (e.error) {
        case n.VALIDATION_ERRORS.EMPTY_ARRAY:
            return "Ignored empty array at property ".concat(e.prop);
        case n.VALIDATION_ERRORS.MIXED_TYPE_ARRAY:
            return "Ignored mixed type array at property ".concat(e.prop);
        case n.VALIDATION_ERRORS.UNSUPPORTED_TYPE:
            return "Ignored unsupported type (".concat(e.propType, ") at property ").concat(e.prop, ". Expected one of: ").concat(n.SUPPORTED_TYPES.join(), ",").concat(n.SUPPORTED_TYPES.map((function (e) {
                return "".concat(e, "[]")
            })).join());
        case n.VALIDATION_ERRORS.RESERVED_TYPE_MISMATCH:
            return "Ignored reserved property ".concat(e.prop, " with unexpected type ").concat(e.propType, ". Expected type ").concat(n.RESERVED_PROPS[e.prop]);
        case n.VALIDATION_ERRORS.MAX_PROPS_REACHED:
            return "Max number of custom properties per session reached. Ignored property ".concat(e.prop);
        case n.VALIDATION_ERRORS.NAME_TOO_LONG:
            return "Property name ".concat(e.prop, " is over max length of ").concat(n.MAX_PROPERTY_NAME_LENGTH);
        case n.VALIDATION_ERRORS.MALFORMED_VARIANT:
            return "Malformed variant at property ".concat(e.prop);
        default:
            return "Unknown error processing event properties"
        }
    };
    var n = r(36)
}]);