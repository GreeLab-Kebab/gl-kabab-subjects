! function(e) {
    function t(s) {
        if (n[s]) return n[s].exports;
        var i = n[s] = {
            exports: {},
            id: s,
            loaded: !1
        };
        return e[s].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    "use strict";
    n(1);
    var s = n(142),
        i = n(149),
        a = n(150),
        r = n(264),
        o = n(173),
        u = n(171),
        c = n(143),
        l = n(152),
        d = n(153),
        f = n(278),
        g = n(263),
        p = n(279),
        b = n(160),
        y = n(155),
        m = n(166),
        _ = n(282),
        v = n(156),
        S = n(262),
        h = n(154),
        P = n(144),
        k = n(283),
        A = n(284),
        E = P("index");
    E.info("Using Webpack"), Object.assign(window.bbcdotcom, {
        objects: b,
        domLoaded: !1,
        addLoadEvent: g,
        classes: y,
        config: a,
        currencyProviders: f,
        utils: c,
        adverts: r,
        analytics: o,
        analyticsHelper: u,
        sections: l,
        locale: d,
        lotame: _,
        pubsub: m,
        Predicate: v,
        stats: S,
        survey: h,
        Logger: P,
        stickyAdvert: k
    }), s(), window.bbcdotcom.init = i.bind(window.bbcdotcom), Object.assign(window.bbcdotcom, p), e.exports = window.bbcdotcom, window.ns_ = A, window.google_ad_request_done = window.bbcdotcom.adverts.adsenseRenderer.google_ad_request_done
}, function(e, t, n) {
    "use strict";
    n(2), n(101), n(53), n(104), n(108), n(109), n(129), n(131), n(137)
}, function(e, t, n) {
    n(3), n(40), n(41), n(42), n(46), n(49), n(50), n(53), n(55), n(56), n(57), n(58), n(59), n(60), n(63), n(65), n(67), n(68), n(69), n(74), n(75), n(76), n(77), n(78), n(80), n(81), n(82), n(83), n(86), n(87), n(88), n(90), n(91), n(95), n(97), n(98), e.exports = n(6)
}, function(e, t, n) {
    var s = n(4);
    s(s.S, "Object", {
        create: n(25)
    })
}, function(e, t, n) {
    var s = n(5),
        i = n(6),
        a = n(7),
        r = n(17),
        o = n(23),
        u = "prototype",
        c = function(e, t, n) {
            var l, d, f, g, p = e & c.F,
                b = e & c.G,
                y = e & c.S,
                m = e & c.P,
                _ = e & c.B,
                v = b ? s : y ? s[t] || (s[t] = {}) : (s[t] || {})[u],
                S = b ? i : i[t] || (i[t] = {}),
                h = S[u] || (S[u] = {});
            b && (n = t);
            for (l in n) d = !p && v && void 0 !== v[l], f = (d ? v : n)[l], g = _ && d ? o(f, s) : m && "function" == typeof f ? o(Function.call, f) : f, v && r(v, l, f, e & c.U), S[l] != f && a(S, l, g), m && h[l] != f && (h[l] = f)
        };
    s.core = i, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
}, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(e, t) {
    var n = e.exports = {
        version: "2.6.9"
    };
    "number" == typeof __e && (__e = n)
}, function(e, t, n) {
    var s = n(8),
        i = n(16);
    e.exports = n(12) ? function(e, t, n) {
        return s.f(e, t, i(1, n))
    } : function(e, t, n) {
        return e[t] = n, e
    }
}, function(e, t, n) {
    var s = n(9),
        i = n(11),
        a = n(15),
        r = Object.defineProperty;
    t.f = n(12) ? Object.defineProperty : function(e, t, n) {
        if (s(e), t = a(t, !0), s(n), i) try {
            return r(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function(e, t, n) {
    var s = n(10);
    e.exports = function(e) {
        if (!s(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t, n) {
    e.exports = !n(12) && !n(13)(function() {
        return 7 != Object.defineProperty(n(14)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    e.exports = !n(13)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t, n) {
    var s = n(10),
        i = n(5).document,
        a = s(i) && s(i.createElement);
    e.exports = function(e) {
        return a ? i.createElement(e) : {}
    }
}, function(e, t, n) {
    var s = n(10);
    e.exports = function(e, t) {
        if (!s(e)) return e;
        var n, i;
        if (t && "function" == typeof(n = e.toString) && !s(i = n.call(e))) return i;
        if ("function" == typeof(n = e.valueOf) && !s(i = n.call(e))) return i;
        if (!t && "function" == typeof(n = e.toString) && !s(i = n.call(e))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t, n) {
    var s = n(5),
        i = n(7),
        a = n(18),
        r = n(19)("src"),
        o = n(20),
        u = "toString",
        c = ("" + o).split(u);
    n(6).inspectSource = function(e) {
        return o.call(e)
    }, (e.exports = function(e, t, n, o) {
        var u = "function" == typeof n;
        u && (a(n, "name") || i(n, "name", t)), e[t] !== n && (u && (a(n, r) || i(n, r, e[t] ? "" + e[t] : c.join(String(t)))), e === s ? e[t] = n : o ? e[t] ? e[t] = n : i(e, t, n) : (delete e[t], i(e, t, n)))
    })(Function.prototype, u, function() {
        return "function" == typeof this && this[r] || o.call(this)
    })
}, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}, function(e, t) {
    var n = 0,
        s = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + s).toString(36))
    }
}, function(e, t, n) {
    e.exports = n(21)("native-function-to-string", Function.toString)
}, function(e, t, n) {
    var s = n(6),
        i = n(5),
        a = "__core-js_shared__",
        r = i[a] || (i[a] = {});
    (e.exports = function(e, t) {
        return r[e] || (r[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: s.version,
        mode: n(22) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(e, t) {
    e.exports = !1
}, function(e, t, n) {
    var s = n(24);
    e.exports = function(e, t, n) {
        if (s(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                };
            case 2:
                return function(n, s) {
                    return e.call(t, n, s)
                };
            case 3:
                return function(n, s, i) {
                    return e.call(t, n, s, i)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t, n) {
    var s = n(9),
        i = n(26),
        a = n(38),
        r = n(37)("IE_PROTO"),
        o = function() {},
        u = "prototype",
        c = function() {
            var e, t = n(14)("iframe"),
                s = a.length,
                i = "<",
                r = ">";
            for (t.style.display = "none", n(39).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write(i + "script" + r + "document.F=Object" + i + "/script" + r), e.close(), c = e.F; s--;) delete c[u][a[s]];
            return c()
        };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (o[u] = s(e), n = new o, o[u] = null, n[r] = e) : n = c(), void 0 === t ? n : i(n, t)
    }
}, function(e, t, n) {
    var s = n(8),
        i = n(9),
        a = n(27);
    e.exports = n(12) ? Object.defineProperties : function(e, t) {
        i(e);
        for (var n, r = a(t), o = r.length, u = 0; o > u;) s.f(e, n = r[u++], t[n]);
        return e
    }
}, function(e, t, n) {
    var s = n(28),
        i = n(38);
    e.exports = Object.keys || function(e) {
        return s(e, i)
    }
}, function(e, t, n) {
    var s = n(18),
        i = n(29),
        a = n(33)(!1),
        r = n(37)("IE_PROTO");
    e.exports = function(e, t) {
        var n, o = i(e),
            u = 0,
            c = [];
        for (n in o) n != r && s(o, n) && c.push(n);
        for (; t.length > u;) s(o, n = t[u++]) && (~a(c, n) || c.push(n));
        return c
    }
}, function(e, t, n) {
    var s = n(30),
        i = n(32);
    e.exports = function(e) {
        return s(i(e))
    }
}, function(e, t, n) {
    var s = n(31);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == s(e) ? e.split("") : Object(e)
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t, n) {
    var s = n(29),
        i = n(34),
        a = n(36);
    e.exports = function(e) {
        return function(t, n, r) {
            var o, u = s(t),
                c = i(u.length),
                l = a(r, c);
            if (e && n != n) {
                for (; c > l;)
                    if (o = u[l++], o != o) return !0
            } else
                for (; c > l; l++)
                    if ((e || l in u) && u[l] === n) return e || l || 0;
            return !e && -1
        }
    }
}, function(e, t, n) {
    var s = n(35),
        i = Math.min;
    e.exports = function(e) {
        return e > 0 ? i(s(e), 9007199254740991) : 0
    }
}, function(e, t) {
    var n = Math.ceil,
        s = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? s : n)(e)
    }
}, function(e, t, n) {
    var s = n(35),
        i = Math.max,
        a = Math.min;
    e.exports = function(e, t) {
        return e = s(e), e < 0 ? i(e + t, 0) : a(e, t)
    }
}, function(e, t, n) {
    var s = n(21)("keys"),
        i = n(19);
    e.exports = function(e) {
        return s[e] || (s[e] = i(e))
    }
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, n) {
    var s = n(5).document;
    e.exports = s && s.documentElement
}, function(e, t, n) {
    var s = n(4);
    s(s.S + s.F * !n(12), "Object", {
        defineProperty: n(8).f
    })
}, function(e, t, n) {
    var s = n(4);
    s(s.S + s.F * !n(12), "Object", {
        defineProperties: n(26)
    })
}, function(e, t, n) {
    var s = n(29),
        i = n(43).f;
    n(45)("getOwnPropertyDescriptor", function() {
        return function(e, t) {
            return i(s(e), t)
        }
    })
}, function(e, t, n) {
    var s = n(44),
        i = n(16),
        a = n(29),
        r = n(15),
        o = n(18),
        u = n(11),
        c = Object.getOwnPropertyDescriptor;
    t.f = n(12) ? c : function(e, t) {
        if (e = a(e), t = r(t, !0), u) try {
            return c(e, t)
        } catch (e) {}
        if (o(e, t)) return i(!s.f.call(e, t), e[t])
    }
}, function(e, t) {
    t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
    var s = n(4),
        i = n(6),
        a = n(13);
    e.exports = function(e, t) {
        var n = (i.Object || {})[e] || Object[e],
            r = {};
        r[e] = t(n), s(s.S + s.F * a(function() {
            n(1)
        }), "Object", r)
    }
}, function(e, t, n) {
    var s = n(47),
        i = n(48);
    n(45)("getPrototypeOf", function() {
        return function(e) {
            return i(s(e))
        }
    })
}, function(e, t, n) {
    var s = n(32);
    e.exports = function(e) {
        return Object(s(e))
    }
}, function(e, t, n) {
    var s = n(18),
        i = n(47),
        a = n(37)("IE_PROTO"),
        r = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = i(e), s(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? r : null
    }
}, function(e, t, n) {
    var s = n(47),
        i = n(27);
    n(45)("keys", function() {
        return function(e) {
            return i(s(e))
        }
    })
}, function(e, t, n) {
    n(45)("getOwnPropertyNames", function() {
        return n(51).f
    })
}, function(e, t, n) {
    var s = n(29),
        i = n(52).f,
        a = {}.toString,
        r = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        o = function(e) {
            try {
                return i(e)
            } catch (e) {
                return r.slice()
            }
        };
    e.exports.f = function(e) {
        return r && "[object Window]" == a.call(e) ? o(e) : i(s(e))
    }
}, function(e, t, n) {
    var s = n(28),
        i = n(38).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return s(e, i)
    }
}, function(e, t, n) {
    var s = n(10),
        i = n(54).onFreeze;
    n(45)("freeze", function(e) {
        return function(t) {
            return e && s(t) ? e(i(t)) : t
        }
    })
}, function(e, t, n) {
    var s = n(19)("meta"),
        i = n(10),
        a = n(18),
        r = n(8).f,
        o = 0,
        u = Object.isExtensible || function() {
            return !0
        },
        c = !n(13)(function() {
            return u(Object.preventExtensions({}))
        }),
        l = function(e) {
            r(e, s, {
                value: {
                    i: "O" + ++o,
                    w: {}
                }
            })
        },
        d = function(e, t) {
            if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!a(e, s)) {
                if (!u(e)) return "F";
                if (!t) return "E";
                l(e)
            }
            return e[s].i
        },
        f = function(e, t) {
            if (!a(e, s)) {
                if (!u(e)) return !0;
                if (!t) return !1;
                l(e)
            }
            return e[s].w
        },
        g = function(e) {
            return c && p.NEED && u(e) && !a(e, s) && l(e), e
        },
        p = e.exports = {
            KEY: s,
            NEED: !1,
            fastKey: d,
            getWeak: f,
            onFreeze: g
        }
}, function(e, t, n) {
    var s = n(10),
        i = n(54).onFreeze;
    n(45)("seal", function(e) {
        return function(t) {
            return e && s(t) ? e(i(t)) : t
        }
    })
}, function(e, t, n) {
    var s = n(10),
        i = n(54).onFreeze;
    n(45)("preventExtensions", function(e) {
        return function(t) {
            return e && s(t) ? e(i(t)) : t
        }
    })
}, function(e, t, n) {
    var s = n(10);
    n(45)("isFrozen", function(e) {
        return function(t) {
            return !s(t) || !!e && e(t)
        }
    })
}, function(e, t, n) {
    var s = n(10);
    n(45)("isSealed", function(e) {
        return function(t) {
            return !s(t) || !!e && e(t)
        }
    })
}, function(e, t, n) {
    var s = n(10);
    n(45)("isExtensible", function(e) {
        return function(t) {
            return !!s(t) && (!e || e(t))
        }
    })
}, function(e, t, n) {
    var s = n(4);
    s(s.P, "Function", {
        bind: n(61)
    })
}, function(e, t, n) {
    "use strict";
    var s = n(24),
        i = n(10),
        a = n(62),
        r = [].slice,
        o = {},
        u = function(e, t, n) {
            if (!(t in o)) {
                for (var s = [], i = 0; i < t; i++) s[i] = "a[" + i + "]";
                o[t] = Function("F,a", "return new F(" + s.join(",") + ")")
            }
            return o[t](e, n)
        };
    e.exports = Function.bind || function(e) {
        var t = s(this),
            n = r.call(arguments, 1),
            o = function() {
                var s = n.concat(r.call(arguments));
                return this instanceof o ? u(t, s.length, s) : a(t, s, e)
            };
        return i(t.prototype) && (o.prototype = t.prototype), o
    }
}, function(e, t) {
    e.exports = function(e, t, n) {
        var s = void 0 === n;
        switch (t.length) {
            case 0:
                return s ? e() : e.call(n);
            case 1:
                return s ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return s ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return s ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return s ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}, function(e, t, n) {
    var s = n(4);
    s(s.S, "Array", {
        isArray: n(64)
    })
}, function(e, t, n) {
    var s = n(31);
    e.exports = Array.isArray || function(e) {
        return "Array" == s(e)
    }
}, function(e, t, n) {
    "use strict";
    var s = n(4),
        i = n(29),
        a = [].join;
    s(s.P + s.F * (n(30) != Object || !n(66)(a)), "Array", {
        join: function(e) {
            return a.call(i(this), void 0 === e ? "," : e)
        }
    })
}, function(e, t, n) {
    "use strict";
    var s = n(13);
    e.exports = function(e, t) {
        return !!e && s(function() {
            t ? e.call(null, function() {}, 1) : e.call(null)
        })
    }
}, function(e, t, n) {
    "use strict";
    var s = n(4),
        i = n(39),
        a = n(31),
        r = n(36),
        o = n(34),
        u = [].slice;
    s(s.P + s.F * n(13)(function() {
        i && u.call(i)
    }), "Array", {
        slice: function(e, t) {
            var n = o(this.length),
                s = a(this);
            if (t = void 0 === t ? n : t, "Array" == s) return u.call(this, e, t);
            for (var i = r(e, n), c = r(t, n), l = o(c - i), d = new Array(l), f = 0; f < l; f++) d[f] = "String" == s ? this.charAt(i + f) : this[i + f];
            return d
        }
    })
}, function(e, t, n) {
    "use strict";
    var s = n(4),
        i = n(24),
        a = n(47),
        r = n(13),
        o = [].sort,
        u = [1, 2, 3];
    s(s.P + s.F * (r(function() {
        u.sort(void 0)
    }) || !r(function() {
        u.sort(null)
    }) || !n(66)(o)), "Array", {
        sort: function(e) {
            return void 0 === e ? o.call(a(this)) : o.call(a(this), i(e))
        }
    })
}, function(e, t, n) {
    "use strict";
    var s = n(4),
        i = n(70)(0),
        a = n(66)([].forEach, !0);
    s(s.P + s.F * !a, "Array", {
        forEach: function(e) {
            return i(this, e, arguments[1])
        }
    })
}, function(e, t, n) {
    var s = n(23),
        i = n(30),
        a = n(47),
        r = n(34),
        o = n(71);
    e.exports = function(e, t) {
        var n = 1 == e,
            u = 2 == e,
            c = 3 == e,
            l = 4 == e,
            d = 6 == e,
            f = 5 == e || d,
            g = t || o;
        return function(t, o, p) {
            for (var b, y, m = a(t), _ = i(m), v = s(o, p, 3), S = r(_.length), h = 0, P = n ? g(t, S) : u ? g(t, 0) : void 0; S > h; h++)
                if ((f || h in _) && (b = _[h], y = v(b, h, m), e))
                    if (n) P[h] = y;
                    else if (y) switch (e) {
                case 3:
                    return !0;
                case 5:
                    return b;
                case 6:
                    return h;
                case 2:
                    P.push(b)
            } else if (l) return !1;
            return d ? -1 : c || l ? l : P
        }
    }
}, function(e, t, n) {
    var s = n(72);
    e.exports = function(e, t) {
        return new(s(e))(t)
    }
}, function(e, t, n) {
    var s = n(10),
        i = n(64),
        a = n(73)("species");
    e.exports = function(e) {
        var t;
        return i(e) && (t = e.constructor, "function" != typeof t || t !== Array && !i(t.prototype) || (t = void 0), s(t) && (t = t[a], null === t && (t = void 0))), void 0 === t ? Array : t
    }
}, function(e, t, n) {
    var s = n(21)("wks"),
        i = n(19),
        a = n(5).Symbol,
        r = "function" == typeof a,
        o = e.exports = function(e) {
            return s[e] || (s[e] = r && a[e] || (r ? a : i)("Symbol." + e))
        };
    o.store = s
}, function(e, t, n) {
    "use strict";
    var s = n(4),
        i = n(70)(1);
    s(s.P + s.F * !n(66)([].map, !0), "Array", {
        map: function(e) {
            return i(this, e, arguments[1])
        }
    })
}, function(e, t, n) {
    "use strict";
    var s = n(4),
        i = n(70)(2);
    s(s.P + s.F * !n(66)([].filter, !0), "Array", {
        filter: function(e) {
            return i(this, e, arguments[1])
        }
    })
}, function(e, t, n) {
    "use strict";
    var s = n(4),
        i = n(70)(3);
    s(s.P + s.F * !n(66)([].some, !0), "Array", {
        some: function(e) {
            return i(this, e, arguments[1])
        }
    })
}, function(e, t, n) {
    "use strict";
    var s = n(4),
        i = n(70)(4);
    s(s.P + s.F * !n(66)([].every, !0), "Array", {
        every: function(e) {
            return i(this, e, arguments[1])
        }
    })
}, function(e, t, n) {
    "use strict";
    var s = n(4),
        i = n(79);
    s(s.P + s.F * !n(66)([].reduce, !0), "Array", {
        reduce: function(e) {
            return i(this, e, arguments.length, arguments[1], !1)
        }
    })
}, function(e, t, n) {
    var s = n(24),
        i = n(47),
        a = n(30),
        r = n(34);
    e.exports = function(e, t, n, o, u) {
        s(t);
        var c = i(e),
            l = a(c),
            d = r(c.length),
            f = u ? d - 1 : 0,
            g = u ? -1 : 1;
        if (n < 2)
            for (;;) {
                if (f in l) {
                    o = l[f], f += g;
                    break
                }
                if (f += g, u ? f < 0 : d <= f) throw TypeError("Reduce of empty array with no initial value")
            }
        for (; u ? f >= 0 : d > f; f += g) f in l && (o = t(o, l[f], f, c));
        return o
    }
}, function(e, t, n) {
    "use strict";
    var s = n(4),
        i = n(79);
    s(s.P + s.F * !n(66)([].reduceRight, !0), "Array", {
        reduceRight: function(e) {
            return i(this, e, arguments.length, arguments[1], !0)
        }
    })
}, function(e, t, n) {
    "use strict";
    var s = n(4),
        i = n(33)(!1),
        a = [].indexOf,
        r = !!a && 1 / [1].indexOf(1, -0) < 0;
    s(s.P + s.F * (r || !n(66)(a)), "Array", {
        indexOf: function(e) {
            return r ? a.apply(this, arguments) || 0 : i(this, e, arguments[1])
        }
    })
}, function(e, t, n) {
    "use strict";
    var s = n(4),
        i = n(29),
        a = n(35),
        r = n(34),
        o = [].lastIndexOf,
        u = !!o && 1 / [1].lastIndexOf(1, -0) < 0;
    s(s.P + s.F * (u || !n(66)(o)), "Array", {
        lastIndexOf: function(e) {
            if (u) return o.apply(this, arguments) || 0;
            var t = i(this),
                n = r(t.length),
                s = n - 1;
            for (arguments.length > 1 && (s = Math.min(s, a(arguments[1]))), s < 0 && (s = n + s); s >= 0; s--)
                if (s in t && t[s] === e) return s || 0;
            return -1
        }
    })
}, function(e, t, n) {
    "use strict";
    var s = n(4),
        i = n(35),
        a = n(84),
        r = n(85),
        o = 1..toFixed,
        u = Math.floor,
        c = [0, 0, 0, 0, 0, 0],
        l = "Number.toFixed: incorrect invocation!",
        d = "0",
        f = function(e, t) {
            for (var n = -1, s = t; ++n < 6;) s += e * c[n], c[n] = s % 1e7, s = u(s / 1e7)
        },
        g = function(e) {
            for (var t = 6, n = 0; --t >= 0;) n += c[t], c[t] = u(n / e), n = n % e * 1e7
        },
        p = function() {
            for (var e = 6, t = ""; --e >= 0;)
                if ("" !== t || 0 === e || 0 !== c[e]) {
                    var n = String(c[e]);
                    t = "" === t ? n : t + r.call(d, 7 - n.length) + n
                }
            return t
        },
        b = function(e, t, n) {
            return 0 === t ? n : t % 2 === 1 ? b(e, t - 1, n * e) : b(e * e, t / 2, n)
        },
        y = function(e) {
            for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
            for (; n >= 2;) t += 1, n /= 2;
            return t
        };
    s(s.P + s.F * (!!o && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(13)(function() {
        o.call({})
    })), "Number", {
        toFixed: function(e) {
            var t, n, s, o, u = a(this, l),
                c = i(e),
                m = "",
                _ = d;
            if (c < 0 || c > 20) throw RangeError(l);
            if (u != u) return "NaN";
            if (u <= -1e21 || u >= 1e21) return String(u);
            if (u < 0 && (m = "-", u = -u), u > 1e-21)
                if (t = y(u * b(2, 69, 1)) - 69, n = t < 0 ? u * b(2, -t, 1) : u / b(2, t, 1), n *= 4503599627370496, t = 52 - t, t > 0) {
                    for (f(0, n), s = c; s >= 7;) f(1e7, 0), s -= 7;
                    for (f(b(10, s, 1), 0), s = t - 1; s >= 23;) g(1 << 23), s -= 23;
                    g(1 << s), f(1, 1), g(2), _ = p()
                } else f(0, n), f(1 << -t, 0), _ = p() + r.call(d, c);
            return c > 0 ? (o = _.length, _ = m + (o <= c ? "0." + r.call(d, c - o) + _ : _.slice(0, o - c) + "." + _.slice(o - c))) : _ = m + _, _
        }
    })
}, function(e, t, n) {
    var s = n(31);
    e.exports = function(e, t) {
        if ("number" != typeof e && "Number" != s(e)) throw TypeError(t);
        return +e
    }
}, function(e, t, n) {
    "use strict";
    var s = n(35),
        i = n(32);
    e.exports = function(e) {
        var t = String(i(this)),
            n = "",
            a = s(e);
        if (a < 0 || a == 1 / 0) throw RangeError("Count can't be negative");
        for (; a > 0;
            (a >>>= 1) && (t += t)) 1 & a && (n += t);
        return n
    }
}, function(e, t, n) {
    "use strict";
    var s = n(4),
        i = n(13),
        a = n(84),
        r = 1..toPrecision;
    s(s.P + s.F * (i(function() {
        return "1" !== r.call(1, void 0)
    }) || !i(function() {
        r.call({})
    })), "Number", {
        toPrecision: function(e) {
            var t = a(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === e ? r.call(t) : r.call(t, e)
        }
    })
}, function(e, t, n) {
    var s = n(4);
    s(s.S, "Date", {
        now: function() {
            return (new Date).getTime()
        }
    })
}, function(e, t, n) {
    var s = n(4),
        i = n(89);
    s(s.P + s.F * (Date.prototype.toISOString !== i), "Date", {
        toISOString: i
    })
}, function(e, t, n) {
    "use strict";
    var s = n(13),
        i = Date.prototype.getTime,
        a = Date.prototype.toISOString,
        r = function(e) {
            return e > 9 ? e : "0" + e
        };
    e.exports = s(function() {
        return "0385-07-25T07:06:39.999Z" != a.call(new Date(-5e13 - 1))
    }) || !s(function() {
        a.call(new Date(NaN))
    }) ? function() {
        if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
        var e = this,
            t = e.getUTCFullYear(),
            n = e.getUTCMilliseconds(),
            s = t < 0 ? "-" : t > 9999 ? "+" : "";
        return s + ("00000" + Math.abs(t)).slice(s ? -6 : -4) + "-" + r(e.getUTCMonth() + 1) + "-" + r(e.getUTCDate()) + "T" + r(e.getUTCHours()) + ":" + r(e.getUTCMinutes()) + ":" + r(e.getUTCSeconds()) + "." + (n > 99 ? n : "0" + r(n)) + "Z"
    } : a
}, function(e, t, n) {
    "use strict";
    var s = n(4),
        i = n(47),
        a = n(15);
    s(s.P + s.F * n(13)(function() {
        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
            toISOString: function() {
                return 1
            }
        })
    }), "Date", {
        toJSON: function(e) {
            var t = i(this),
                n = a(t);
            return "number" != typeof n || isFinite(n) ? t.toISOString() : null
        }
    })
}, function(e, t, n) {
    var s = n(4),
        i = n(92);
    s(s.G + s.F * (parseInt != i), {
        parseInt: i
    })
}, function(e, t, n) {
    var s = n(5).parseInt,
        i = n(93).trim,
        a = n(94),
        r = /^[-+]?0[xX]/;
    e.exports = 8 !== s(a + "08") || 22 !== s(a + "0x16") ? function(e, t) {
        var n = i(String(e), 3);
        return s(n, t >>> 0 || (r.test(n) ? 16 : 10))
    } : s
}, function(e, t, n) {
    var s = n(4),
        i = n(32),
        a = n(13),
        r = n(94),
        o = "[" + r + "]",
        u = "​",
        c = RegExp("^" + o + o + "*"),
        l = RegExp(o + o + "*$"),
        d = function(e, t, n) {
            var i = {},
                o = a(function() {
                    return !!r[e]() || u[e]() != u
                }),
                c = i[e] = o ? t(f) : r[e];
            n && (i[n] = c), s(s.P + s.F * o, "String", i)
        },
        f = d.trim = function(e, t) {
            return e = String(i(e)), 1 & t && (e = e.replace(c, "")), 2 & t && (e = e.replace(l, "")), e
        };
    e.exports = d
}, function(e, t) {
    e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function(e, t, n) {
    var s = n(4),
        i = n(96);
    s(s.G + s.F * (parseFloat != i), {
        parseFloat: i
    })
}, function(e, t, n) {
    var s = n(5).parseFloat,
        i = n(93).trim;
    e.exports = 1 / s(n(94) + "-0") !== -(1 / 0) ? function(e) {
        var t = i(String(e), 3),
            n = s(t);
        return 0 === n && "-" == t.charAt(0) ? -0 : n
    } : s
}, function(e, t, n) {
    "use strict";
    n(93)("trim", function(e) {
        return function() {
            return e(this, 3)
        }
    })
}, function(e, t, n) {
    "use strict";
    n(99);
    var s = n(9),
        i = n(100),
        a = n(12),
        r = "toString",
        o = /./ [r],
        u = function(e) {
            n(17)(RegExp.prototype, r, e, !0)
        };
    n(13)(function() {
        return "/a/b" != o.call({
            source: "a",
            flags: "b"
        })
    }) ? u(function() {
        var e = s(this);
        return "/".concat(e.source, "/", "flags" in e ? e.flags : !a && e instanceof RegExp ? i.call(e) : void 0)
    }) : o.name != r && u(function() {
        return o.call(this)
    })
}, function(e, t, n) {
    n(12) && "g" != /./g.flags && n(8).f(RegExp.prototype, "flags", {
        configurable: !0,
        get: n(100)
    })
}, function(e, t, n) {
    "use strict";
    var s = n(9);
    e.exports = function() {
        var e = s(this),
            t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    }
}, function(e, t, n) {
    var s = n(4);
    s(s.S + s.F, "Object", {
        assign: n(102)
    })
}, function(e, t, n) {
    "use strict";
    var s = n(12),
        i = n(27),
        a = n(103),
        r = n(44),
        o = n(47),
        u = n(30),
        c = Object.assign;
    e.exports = !c || n(13)(function() {
        var e = {},
            t = {},
            n = Symbol(),
            s = "abcdefghijklmnopqrst";
        return e[n] = 7, s.split("").forEach(function(e) {
            t[e] = e
        }), 7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != s
    }) ? function(e, t) {
        for (var n = o(e), c = arguments.length, l = 1, d = a.f, f = r.f; c > l;)
            for (var g, p = u(arguments[l++]), b = d ? i(p).concat(d(p)) : i(p), y = b.length, m = 0; y > m;) g = b[m++], s && !f.call(p, g) || (n[g] = p[g]);
        return n
    } : c
}, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}, function(e, t, n) {
    "use strict";
    var s = n(4),
        i = n(34),
        a = n(105),
        r = "endsWith",
        o = "" [r];
    s(s.P + s.F * n(107)(r), "String", {
        endsWith: function(e) {
            var t = a(this, e, r),
                n = arguments.length > 1 ? arguments[1] : void 0,
                s = i(t.length),
                u = void 0 === n ? s : Math.min(i(n), s),
                c = String(e);
            return o ? o.call(t, c, u) : t.slice(u - c.length, u) === c
        }
    })
}, function(e, t, n) {
    var s = n(106),
        i = n(32);
    e.exports = function(e, t, n) {
        if (s(t)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(i(e))
    }
}, function(e, t, n) {
    var s = n(10),
        i = n(31),
        a = n(73)("match");
    e.exports = function(e) {
        var t;
        return s(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" == i(e))
    }
}, function(e, t, n) {
    var s = n(73)("match");
    e.exports = function(e) {
        var t = /./;
        try {
            "/./" [e](t)
        } catch (n) {
            try {
                return t[s] = !1, !"/./" [e](t)
            } catch (e) {}
        }
        return !0
    }
}, function(e, t, n) {
    "use strict";
    var s = n(4),
        i = n(105),
        a = "includes";
    s(s.P + s.F * n(107)(a), "String", {
        includes: function(e) {
            return !!~i(this, e, a).indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(e, t, n) {
    "use strict";
    var s = n(110),
        i = n(124),
        a = "Map";
    e.exports = n(125)(a, function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        get: function(e) {
            var t = s.getEntry(i(this, a), e);
            return t && t.v
        },
        set: function(e, t) {
            return s.def(i(this, a), 0 === e ? 0 : e, t)
        }
    }, s, !0)
}, function(e, t, n) {
    "use strict";
    var s = n(8).f,
        i = n(25),
        a = n(111),
        r = n(23),
        o = n(112),
        u = n(113),
        c = n(119),
        l = n(122),
        d = n(123),
        f = n(12),
        g = n(54).fastKey,
        p = n(124),
        b = f ? "_s" : "size",
        y = function(e, t) {
            var n, s = g(t);
            if ("F" !== s) return e._i[s];
            for (n = e._f; n; n = n.n)
                if (n.k == t) return n
        };
    e.exports = {
        getConstructor: function(e, t, n, c) {
            var l = e(function(e, s) {
                o(e, l, t, "_i"), e._t = t, e._i = i(null), e._f = void 0, e._l = void 0, e[b] = 0, void 0 != s && u(s, n, e[c], e)
            });
            return a(l.prototype, {
                clear: function() {
                    for (var e = p(this, t), n = e._i, s = e._f; s; s = s.n) s.r = !0, s.p && (s.p = s.p.n = void 0), delete n[s.i];
                    e._f = e._l = void 0, e[b] = 0
                },
                delete: function(e) {
                    var n = p(this, t),
                        s = y(n, e);
                    if (s) {
                        var i = s.n,
                            a = s.p;
                        delete n._i[s.i], s.r = !0, a && (a.n = i), i && (i.p = a), n._f == s && (n._f = i), n._l == s && (n._l = a), n[b]--
                    }
                    return !!s
                },
                forEach: function(e) {
                    p(this, t);
                    for (var n, s = r(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                        for (s(n.v, n.k, this); n && n.r;) n = n.p
                },
                has: function(e) {
                    return !!y(p(this, t), e)
                }
            }), f && s(l.prototype, "size", {
                get: function() {
                    return p(this, t)[b]
                }
            }), l
        },
        def: function(e, t, n) {
            var s, i, a = y(e, t);
            return a ? a.v = n : (e._l = a = {
                i: i = g(t, !0),
                k: t,
                v: n,
                p: s = e._l,
                n: void 0,
                r: !1
            }, e._f || (e._f = a), s && (s.n = a), e[b]++, "F" !== i && (e._i[i] = a)), e
        },
        getEntry: y,
        setStrong: function(e, t, n) {
            c(e, t, function(e, n) {
                this._t = p(e, t), this._k = n, this._l = void 0
            }, function() {
                for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
                return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? l(0, n.k) : "values" == t ? l(0, n.v) : l(0, [n.k, n.v]) : (e._t = void 0, l(1))
            }, n ? "entries" : "values", !n, !0), d(t)
        }
    }
}, function(e, t, n) {
    var s = n(17);
    e.exports = function(e, t, n) {
        for (var i in t) s(e, i, t[i], n);
        return e
    }
}, function(e, t) {
    e.exports = function(e, t, n, s) {
        if (!(e instanceof t) || void 0 !== s && s in e) throw TypeError(n + ": incorrect invocation!");
        return e
    }
}, function(e, t, n) {
    var s = n(23),
        i = n(114),
        a = n(115),
        r = n(9),
        o = n(34),
        u = n(117),
        c = {},
        l = {},
        t = e.exports = function(e, t, n, d, f) {
            var g, p, b, y, m = f ? function() {
                    return e
                } : u(e),
                _ = s(n, d, t ? 2 : 1),
                v = 0;
            if ("function" != typeof m) throw TypeError(e + " is not iterable!");
            if (a(m)) {
                for (g = o(e.length); g > v; v++)
                    if (y = t ? _(r(p = e[v])[0], p[1]) : _(e[v]), y === c || y === l) return y
            } else
                for (b = m.call(e); !(p = b.next()).done;)
                    if (y = i(b, _, p.value, t), y === c || y === l) return y
        };
    t.BREAK = c, t.RETURN = l
}, function(e, t, n) {
    var s = n(9);
    e.exports = function(e, t, n, i) {
        try {
            return i ? t(s(n)[0], n[1]) : t(n)
        } catch (t) {
            var a = e.return;
            throw void 0 !== a && s(a.call(e)), t
        }
    }
}, function(e, t, n) {
    var s = n(116),
        i = n(73)("iterator"),
        a = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (s.Array === e || a[i] === e)
    }
}, function(e, t) {
    e.exports = {}
}, function(e, t, n) {
    var s = n(118),
        i = n(73)("iterator"),
        a = n(116);
    e.exports = n(6).getIteratorMethod = function(e) {
        if (void 0 != e) return e[i] || e["@@iterator"] || a[s(e)]
    }
}, function(e, t, n) {
    var s = n(31),
        i = n(73)("toStringTag"),
        a = "Arguments" == s(function() {
            return arguments
        }()),
        r = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        };
    e.exports = function(e) {
        var t, n, o;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = r(t = Object(e), i)) ? n : a ? s(t) : "Object" == (o = s(t)) && "function" == typeof t.callee ? "Arguments" : o
    }
}, function(e, t, n) {
    "use strict";
    var s = n(22),
        i = n(4),
        a = n(17),
        r = n(7),
        o = n(116),
        u = n(120),
        c = n(121),
        l = n(48),
        d = n(73)("iterator"),
        f = !([].keys && "next" in [].keys()),
        g = "@@iterator",
        p = "keys",
        b = "values",
        y = function() {
            return this
        };
    e.exports = function(e, t, n, m, _, v, S) {
        u(n, t, m);
        var h, P, k, A = function(e) {
                if (!f && e in x) return x[e];
                switch (e) {
                    case p:
                        return function() {
                            return new n(this, e)
                        };
                    case b:
                        return function() {
                            return new n(this, e)
                        }
                }
                return function() {
                    return new n(this, e)
                }
            },
            E = t + " Iterator",
            T = _ == b,
            w = !1,
            x = e.prototype,
            I = x[d] || x[g] || _ && x[_],
            C = I || A(_),
            L = _ ? T ? A("entries") : C : void 0,
            N = "Array" == t ? x.entries || I : I;
        if (N && (k = l(N.call(new e)), k !== Object.prototype && k.next && (c(k, E, !0), s || "function" == typeof k[d] || r(k, d, y))), T && I && I.name !== b && (w = !0, C = function() {
                return I.call(this)
            }), s && !S || !f && !w && x[d] || r(x, d, C), o[t] = C, o[E] = y, _)
            if (h = {
                    values: T ? C : A(b),
                    keys: v ? C : A(p),
                    entries: L
                }, S)
                for (P in h) P in x || a(x, P, h[P]);
            else i(i.P + i.F * (f || w), t, h);
        return h
    }
}, function(e, t, n) {
    "use strict";
    var s = n(25),
        i = n(16),
        a = n(121),
        r = {};
    n(7)(r, n(73)("iterator"), function() {
        return this
    }), e.exports = function(e, t, n) {
        e.prototype = s(r, {
            next: i(1, n)
        }), a(e, t + " Iterator")
    }
}, function(e, t, n) {
    var s = n(8).f,
        i = n(18),
        a = n(73)("toStringTag");
    e.exports = function(e, t, n) {
        e && !i(e = n ? e : e.prototype, a) && s(e, a, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function(e, t, n) {
    "use strict";
    var s = n(5),
        i = n(8),
        a = n(12),
        r = n(73)("species");
    e.exports = function(e) {
        var t = s[e];
        a && t && !t[r] && i.f(t, r, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(e, t, n) {
    var s = n(10);
    e.exports = function(e, t) {
        if (!s(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
        return e
    }
}, function(e, t, n) {
    "use strict";
    var s = n(5),
        i = n(4),
        a = n(17),
        r = n(111),
        o = n(54),
        u = n(113),
        c = n(112),
        l = n(10),
        d = n(13),
        f = n(126),
        g = n(121),
        p = n(127);
    e.exports = function(e, t, n, b, y, m) {
        var _ = s[e],
            v = _,
            S = y ? "set" : "add",
            h = v && v.prototype,
            P = {},
            k = function(e) {
                var t = h[e];
                a(h, e, "delete" == e ? function(e) {
                    return !(m && !l(e)) && t.call(this, 0 === e ? 0 : e)
                } : "has" == e ? function(e) {
                    return !(m && !l(e)) && t.call(this, 0 === e ? 0 : e)
                } : "get" == e ? function(e) {
                    return m && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                } : "add" == e ? function(e) {
                    return t.call(this, 0 === e ? 0 : e), this
                } : function(e, n) {
                    return t.call(this, 0 === e ? 0 : e, n), this
                })
            };
        if ("function" == typeof v && (m || h.forEach && !d(function() {
                (new v).entries().next()
            }))) {
            var A = new v,
                E = A[S](m ? {} : -0, 1) != A,
                T = d(function() {
                    A.has(1)
                }),
                w = f(function(e) {
                    new v(e)
                }),
                x = !m && d(function() {
                    for (var e = new v, t = 5; t--;) e[S](t, t);
                    return !e.has(-0)
                });
            w || (v = t(function(t, n) {
                c(t, v, e);
                var s = p(new _, t, v);
                return void 0 != n && u(n, y, s[S], s), s
            }), v.prototype = h, h.constructor = v), (T || x) && (k("delete"), k("has"), y && k("get")), (x || E) && k(S), m && h.clear && delete h.clear
        } else v = b.getConstructor(t, e, y, S), r(v.prototype, n), o.NEED = !0;
        return g(v, e), P[e] = v, i(i.G + i.W + i.F * (v != _), P), m || b.setStrong(v, e, y), v
    }
}, function(e, t, n) {
    var s = n(73)("iterator"),
        i = !1;
    try {
        var a = [7][s]();
        a.return = function() {
            i = !0
        }, Array.from(a, function() {
            throw 2
        })
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !i) return !1;
        var n = !1;
        try {
            var a = [7],
                r = a[s]();
            r.next = function() {
                return {
                    done: n = !0
                }
            }, a[s] = function() {
                return r
            }, e(a)
        } catch (e) {}
        return n
    }
}, function(e, t, n) {
    var s = n(10),
        i = n(128).set;
    e.exports = function(e, t, n) {
        var a, r = t.constructor;
        return r !== n && "function" == typeof r && (a = r.prototype) !== n.prototype && s(a) && i && i(e, a), e
    }
}, function(e, t, n) {
    var s = n(10),
        i = n(9),
        a = function(e, t) {
            if (i(e), !s(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, s) {
            try {
                s = n(23)(Function.call, n(43).f(Object.prototype, "__proto__").set, 2), s(e, []), t = !(e instanceof Array)
            } catch (e) {
                t = !0
            }
            return function(e, n) {
                return a(e, n), t ? e.__proto__ = n : s(e, n), e
            }
        }({}, !1) : void 0),
        check: a
    }
}, function(e, t, n) {
    "use strict";
    var s = n(4),
        i = n(33)(!0);
    s(s.P, "Array", {
        includes: function(e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(130)("includes")
}, function(e, t, n) {
    var s = n(73)("unscopables"),
        i = Array.prototype;
    void 0 == i[s] && n(7)(i, s, {}), e.exports = function(e) {
        i[s][e] = !0
    }
}, function(e, t, n) {
    n(132), n(136), e.exports = n(6).Symbol
}, function(e, t, n) {
    "use strict";
    var s = n(5),
        i = n(18),
        a = n(12),
        r = n(4),
        o = n(17),
        u = n(54).KEY,
        c = n(13),
        l = n(21),
        d = n(121),
        f = n(19),
        g = n(73),
        p = n(133),
        b = n(134),
        y = n(135),
        m = n(64),
        _ = n(9),
        v = n(10),
        S = n(47),
        h = n(29),
        P = n(15),
        k = n(16),
        A = n(25),
        E = n(51),
        T = n(43),
        w = n(103),
        x = n(8),
        I = n(27),
        C = T.f,
        L = x.f,
        N = E.f,
        O = s.Symbol,
        B = s.JSON,
        D = B && B.stringify,
        R = "prototype",
        U = g("_hidden"),
        F = g("toPrimitive"),
        M = {}.propertyIsEnumerable,
        G = l("symbol-registry"),
        j = l("symbols"),
        K = l("op-symbols"),
        V = Object[R],
        W = "function" == typeof O && !!w.f,
        z = s.QObject,
        q = !z || !z[R] || !z[R].findChild,
        H = a && c(function() {
            return 7 != A(L({}, "a", {
                get: function() {
                    return L(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(e, t, n) {
            var s = C(V, t);
            s && delete V[t], L(e, t, n), s && e !== V && L(V, t, s)
        } : L,
        Y = function(e) {
            var t = j[e] = A(O[R]);
            return t._k = e, t
        },
        $ = W && "symbol" == typeof O.iterator ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return e instanceof O
        },
        J = function(e, t, n) {
            return e === V && J(K, t, n), _(e), t = P(t, !0), _(n), i(j, t) ? (n.enumerable ? (i(e, U) && e[U][t] && (e[U][t] = !1), n = A(n, {
                enumerable: k(0, !1)
            })) : (i(e, U) || L(e, U, k(1, {})), e[U][t] = !0), H(e, t, n)) : L(e, t, n)
        },
        X = function(e, t) {
            _(e);
            for (var n, s = y(t = h(t)), i = 0, a = s.length; a > i;) J(e, n = s[i++], t[n]);
            return e
        },
        Z = function(e, t) {
            return void 0 === t ? A(e) : X(A(e), t)
        },
        Q = function(e) {
            var t = M.call(this, e = P(e, !0));
            return !(this === V && i(j, e) && !i(K, e)) && (!(t || !i(this, e) || !i(j, e) || i(this, U) && this[U][e]) || t)
        },
        ee = function(e, t) {
            if (e = h(e), t = P(t, !0), e !== V || !i(j, t) || i(K, t)) {
                var n = C(e, t);
                return !n || !i(j, t) || i(e, U) && e[U][t] || (n.enumerable = !0), n
            }
        },
        te = function(e) {
            for (var t, n = N(h(e)), s = [], a = 0; n.length > a;) i(j, t = n[a++]) || t == U || t == u || s.push(t);
            return s
        },
        ne = function(e) {
            for (var t, n = e === V, s = N(n ? K : h(e)), a = [], r = 0; s.length > r;) !i(j, t = s[r++]) || n && !i(V, t) || a.push(j[t]);
            return a
        };
    W || (O = function() {
        if (this instanceof O) throw TypeError("Symbol is not a constructor!");
        var e = f(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) {
                this === V && t.call(K, n), i(this, U) && i(this[U], e) && (this[U][e] = !1), H(this, e, k(1, n))
            };
        return a && q && H(V, e, {
            configurable: !0,
            set: t
        }), Y(e)
    }, o(O[R], "toString", function() {
        return this._k
    }), T.f = ee, x.f = J, n(52).f = E.f = te, n(44).f = Q, w.f = ne, a && !n(22) && o(V, "propertyIsEnumerable", Q, !0), p.f = function(e) {
        return Y(g(e))
    }), r(r.G + r.W + r.F * !W, {
        Symbol: O
    });
    for (var se = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ie = 0; se.length > ie;) g(se[ie++]);
    for (var ae = I(g.store), re = 0; ae.length > re;) b(ae[re++]);
    r(r.S + r.F * !W, "Symbol", {
        for: function(e) {
            return i(G, e += "") ? G[e] : G[e] = O(e)
        },
        keyFor: function(e) {
            if (!$(e)) throw TypeError(e + " is not a symbol!");
            for (var t in G)
                if (G[t] === e) return t
        },
        useSetter: function() {
            q = !0
        },
        useSimple: function() {
            q = !1
        }
    }), r(r.S + r.F * !W, "Object", {
        create: Z,
        defineProperty: J,
        defineProperties: X,
        getOwnPropertyDescriptor: ee,
        getOwnPropertyNames: te,
        getOwnPropertySymbols: ne
    });
    var oe = c(function() {
        w.f(1)
    });
    r(r.S + r.F * oe, "Object", {
        getOwnPropertySymbols: function(e) {
            return w.f(S(e))
        }
    }), B && r(r.S + r.F * (!W || c(function() {
        var e = O();
        return "[null]" != D([e]) || "{}" != D({
            a: e
        }) || "{}" != D(Object(e))
    })), "JSON", {
        stringify: function(e) {
            for (var t, n, s = [e], i = 1; arguments.length > i;) s.push(arguments[i++]);
            if (n = t = s[1], (v(t) || void 0 !== e) && !$(e)) return m(t) || (t = function(e, t) {
                if ("function" == typeof n && (t = n.call(this, e, t)), !$(t)) return t
            }), s[1] = t, D.apply(B, s)
        }
    }), O[R][F] || n(7)(O[R], F, O[R].valueOf), d(O, "Symbol"), d(Math, "Math", !0), d(s.JSON, "JSON", !0)
}, function(e, t, n) {
    t.f = n(73)
}, function(e, t, n) {
    var s = n(5),
        i = n(6),
        a = n(22),
        r = n(133),
        o = n(8).f;
    e.exports = function(e) {
        var t = i.Symbol || (i.Symbol = a ? {} : s.Symbol || {});
        "_" == e.charAt(0) || e in t || o(t, e, {
            value: r.f(e)
        })
    }
}, function(e, t, n) {
    var s = n(27),
        i = n(103),
        a = n(44);
    e.exports = function(e) {
        var t = s(e),
            n = i.f;
        if (n)
            for (var r, o = n(e), u = a.f, c = 0; o.length > c;) u.call(e, r = o[c++]) && t.push(r);
        return t
    }
}, function(e, t, n) {
    "use strict";
    var s = n(118),
        i = {};
    i[n(73)("toStringTag")] = "z", i + "" != "[object z]" && n(17)(Object.prototype, "toString", function() {
        return "[object " + s(this) + "]"
    }, !0)
}, function(e, t, n) {
    n(138), n(140), e.exports = n(133).f("iterator")
}, function(e, t, n) {
    "use strict";
    var s = n(139)(!0);
    n(119)(String, "String", function(e) {
        this._t = String(e), this._i = 0
    }, function() {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = s(t, n), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function(e, t, n) {
    var s = n(35),
        i = n(32);
    e.exports = function(e) {
        return function(t, n) {
            var a, r, o = String(i(t)),
                u = s(n),
                c = o.length;
            return u < 0 || u >= c ? e ? "" : void 0 : (a = o.charCodeAt(u), a < 55296 || a > 56319 || u + 1 === c || (r = o.charCodeAt(u + 1)) < 56320 || r > 57343 ? e ? o.charAt(u) : a : e ? o.slice(u, u + 2) : (a - 55296 << 10) + (r - 56320) + 65536)
        }
    }
}, function(e, t, n) {
    for (var s = n(141), i = n(27), a = n(17), r = n(5), o = n(7), u = n(116), c = n(73), l = c("iterator"), d = c("toStringTag"), f = u.Array, g = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, p = i(g), b = 0; b < p.length; b++) {
        var y, m = p[b],
            _ = g[m],
            v = r[m],
            S = v && v.prototype;
        if (S && (S[l] || o(S, l, f), S[d] || o(S, d, m), u[m] = f, _))
            for (y in s) S[y] || a(S, y, s[y], !0)
    }
}, function(e, t, n) {
    "use strict";
    var s = n(130),
        i = n(122),
        a = n(116),
        r = n(29);
    e.exports = n(119)(Array, "Array", function(e, t) {
        this._t = r(e), this._i = 0, this._k = t
    }, function() {
        var e = this._t,
            t = this._k,
            n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, i(1)) : "keys" == t ? i(0, n) : "values" == t ? i(0, e[n]) : i(0, [n, e[n]])
    }, "values"), a.Arguments = a.Array, s("keys"), s("values"), s("entries")
}, function(e, t, n) {
    "use strict";
    var s = n(143),
        i = function() {
            s.addHtmlTagClass("bbcdotcom")
        };
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var s = n(144)("utils"),
        i = [],
        a = function(e, t, n) {
            if ("undefined" != typeof e && "" !== e && null !== e) {
                var s = new RegExp("(\\s|^)" + n + "(\\s|$)");
                return e[t].match(s)
            }
        },
        r = function(e, t) {
            var n, s = document.getElementsByTagName(e)[0];
            return "undefined" != typeof s && "" !== s && null !== s && "string" == typeof t && (n = a(s, "id", t), null !== n)
        },
        o = function(e, t, n, s) {
            var i, a = !1,
                r = 0;
            if (!e) return !1;
            for (s = "number" == typeof s ? s : 10, n = n === !0, i = n ? e : e.parentNode; i && r < s;) {
                var o = t(i);
                if (o > 0) {
                    a = i;
                    break
                }
                if (o < 0) break;
                i = i.parentNode, r++
            }
            return a
        },
        u = function() {
            return window.location.hostname.indexOf(".bbc.com") !== -1 ? "bbc.com" : window.location.hostname.indexOf(".bbc.co.uk") !== -1 ? "bbc.co.uk" : window.location.hostname
        };
    e.exports = {
        debounce: function(e, t, n) {
            var s;
            return function() {
                var i = this,
                    a = arguments,
                    r = function() {
                        s = null, n || e.apply(i, a)
                    },
                    o = n && !s;
                clearTimeout(s), s = setTimeout(r, t), o && e.apply(i, a)
            }
        },
        appendLinkToHead: function(e) {
            var t = document.head || document.getElementsByTagName("head")[0],
                n = document.createElement("link");
            n.type = "text/css", n.rel = "stylesheet", n.href = e, t.appendChild(n)
        },
        capitalize: function(e) {
            if ("undefined" != typeof e) {
                var t, n, s = e.split(" ");
                for (t = 0; t < s.length; t++) s[t].length > 2 && (n = s[t].charAt(0).toUpperCase(), s[t] = n + s[t].substr(1));
                return s.join(" ")
            }
        },
        log: function() {
            s.warn("utils.log is deprecated", arguments)
        },
        addTagClass: function(e, t) {
            if ("undefined" != typeof e && "" !== e && null !== e && "string" == typeof t && "" !== t) return a(e, "className", t) || (e.className = e.className + " " + t), e.className
        },
        removeTagClass: function(e, t) {
            var n;
            if ("undefined" != typeof e && "" !== e && null !== e && "string" == typeof t && "" !== t) return a(e, "className", t) && (n = RegExp(t + "\\b"), e.className = e.className.replace(n, "").replace("  ", " ")), e.className
        },
        addBodyTagClass: function(e) {
            var t = document.getElementsByTagName("body")[0];
            return this.addTagClass(t, e)
        },
        removeBodyTagClass: function(e) {
            var t = document.getElementsByTagName("body")[0];
            return this.removeTagClass(t, e)
        },
        addHtmlTagClass: function(e) {
            var t = document.getElementsByTagName("html")[0];
            return this.addTagClass(t, e)
        },
        removeHtmlTagClass: function(e) {
            var t = document.getElementsByTagName("html")[0];
            return this.removeTagClass(t, e)
        },
        hasBodyTagId: function(e) {
            return r("body", e)
        },
        getUriParamByName: function(e, t) {
            if (t = t !== !1, "undefined" == typeof e) return "";
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var n = new RegExp("[\\?&]" + e + "=([^&#]*)"),
                s = n.exec(bbcdotcom.config.getWindowLocation().search);
            return null === s ? "" : decodeURIComponent(t ? s[1].replace(/[^a-zA-Z0-9\-_]/g, "") : s[1])
        },
        isDebug: function() {
            return /[?|&]ads-debug/.test(window.location.href) || document.cookie.indexOf("ads-debug=") !== -1
        },
        isDebugTrace: function() {
            return /[?|&]ads-debug-trace/.test(window.location.href) || document.cookie.indexOf("ads-debug-trace=") !== -1
        },
        getEnv: function() {
            var e = bbcdotcom.config.getWindowLocation();
            if (/[a-z]+\-test[0-9]+\.bbc.*\.com/.test(e.href)) return "test";
            var t = e.href.match(/(sandbox|int|test|stage)(.dev)*.bbc.co*/);
            return null === t ? "live" : t[1]
        },
        isLiveEnv: function() {
            return "live" === this.getEnv()
        },
        isTestEnv: function() {
            return "live" !== this.getEnv() && "stage" !== this.getEnv()
        },
        stackTrace: function() {
            var e = new Error;
            window.console.log(e.stack)
        },
        getParentElementByClass: function(e, t, n, s) {
            s = "undefined" != typeof s && s === !0;
            var i = "undefined" == typeof n || 0 === n ? 5 : n,
                a = function(e) {
                    return !e || "undefined" == typeof e.className || "undefined" == typeof e.tagName || s && "body" === e.tagName.toLowerCase() ? -1 : e.className.indexOf(t) !== -1 ? 1 : void 0
                };
            return o(e, a, !1, i)
        },
        getClosestElementByTagName: function(e, t, n, s) {
            return o(e, function(e) {
                return e && e.tagName && e.tagName.toLowerCase() === t ? 1 : 0
            }, n, s)
        },
        getParentElementByAttribute: function(e, t, n) {
            return o(e, function(e) {
                return e && null !== e.getAttribute(t) ? 1 : 0
            }, n)
        },
        parentHasClass: function(e, t, n, s) {
            return this.getParentElementByClass(e, t, n, s) !== !1
        },
        getAnchorPositionWithinElement: function(e, t) {
            var n, s, i;
            if (e && t)
                for (s = e.getElementsByTagName("a"), i = new RegExp(t + "$"), n = 0; n < s.length; n++)
                    if ("undefined" != typeof s[n].href && "" !== t && null !== s[n].href.match(i)) return n + 1;
            return 0
        },
        getClosestElementWithAttribute: function(e, t) {
            var n, s, i;
            if (e && href)
                for (s = e.getElementsByTagName("a"), i = new RegExp(href + "$"), n = 0; n < s.length; n++)
                    if ("undefined" != typeof s[n].href && "" !== href && null !== s[n].href.match(i)) return n + 1;
            return 0
        },
        addEvent: function(e, t, n) {
            e.attachEvent ? (e["e" + t + n] = n, e[t + n] = function() {
                e["e" + t + n](window.event)
            }, e.attachEvent("on" + t, e[t + n])) : e.addEventListener(t, n, !1)
        },
        removeEvent: function(e, t, n) {
            "undefined" != typeof e && null !== e && (e.detachEvent ? (e.detachEvent("on" + t, e[t + n]), e[t + n] = null) : e.removeEventListener(t, n, !1))
        },
        triggerEvent: function(e, t, n) {
            n = void 0 === n || n;
            var s = document.createEvent("MouseEvents");
            return s.initMouseEvent(t, !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n && s.preventDefault(), e.dispatchEvent(s), s
        },
        cancelEvent: function(e) {
            return !!e && void("function" == typeof e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        isEventDefaultPrevented: function(e) {
            return !!e && (e.defaultPrevented || e.returnValue === !1)
        },
        trim: function(e) {
            return "string" == typeof e ? e.replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, "") : e
        },
        navigateTo: function(e) {
            window.location.href = e
        },
        getMetaNameContent: function(e) {
            var t, n = document.getElementsByTagName("meta");
            for (t = 0; t < n.length; t++)
                if (n[t].getAttribute("name") === e) return n[t].getAttribute("content");
            return ""
        },
        getMetaPropertyContent: function(e) {
            var t, n = document.getElementsByTagName("meta");
            for (t = 0; t < n.length; t++)
                if (n[t].getAttribute("property") === e) return n[t].getAttribute("content");
            return ""
        },
        setCookie: function(e, t, n) {
            var s;
            "undefined" != typeof e && "" !== e && "undefined" != typeof t && "" !== t && ("undefined" != typeof n && null !== n && 0 !== n || (n = 31536e3), s = new Date, s.setTime(s.getTime() + 1e3 * n), document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + "; expires=" + s.toGMTString() + "; domain=." + u() + "; path=/", i.push(["set", e, t, n]))
        },
        getCookie: function(e) {
            var t, n = "; " + document.cookie,
                s = n.split("; " + encodeURIComponent(e) + "=");
            return 2 === s.length && (t = decodeURIComponent(s.pop().split(";").shift())), i.push(["get", e, t]), t
        },
        deleteCookie: function(e) {
            document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=." + u() + "; path=/", i.push(["delete", e])
        },
        generateUuidV4: function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = Math.floor(16 * Math.random()),
                    n = "x" === e ? t : 3 & t | 8;
                return n.toString(16)
            })
        },
        createWindowLocation: function(e) {
            var t, n, s = e;
            return "undefined" == typeof e || null === e || "" === e ? t = {
                href: "",
                protocol: "",
                host: "",
                hostname: "",
                port: "",
                pathname: "",
                search: "",
                hash: ""
            } : (e.indexOf("?") !== -1 && (s = e.substr(0, e.indexOf("?"))), n = s.substr(s.indexOf(":") + 3), t = {
                href: e,
                protocol: e.substr(0, e.indexOf(":") + 1),
                host: n.substr(0, n.indexOf("/")),
                hostname: n.substr(0, n.indexOf("/")),
                port: "",
                pathname: n.substr(n.indexOf("/")),
                search: e.substr(e.indexOf("?")),
                hash: ""
            }), t
        },
        secondsToMilliSeconds: function(e) {
            return Math.floor(1e3 * parseFloat(e, 10))
        },
        r: function() {
            i = []
        },
        getTrackCookieValues: function(e) {
            if ("undefined" == typeof e) return i;
            var t, n = [];
            for (t = 0; t < i.length; t++) e.indexOf(i[t][1]) !== -1 && n.push(i[t]);
            return n
        },
        isString: function(e) {
            return "string" == typeof e || e instanceof String
        },
        cleanArray: function(e) {
            var t, n = [];
            for (t = 0; t < e.length; t++)(e[t] || 0 === e[t]) && n.push(e[t]);
            return n
        },
        outerHTML: function(e) {
            if (void 0 !== e) return e.outerHTML || function(e) {
                var t, n = document.createElement("div");
                return n.appendChild(e.cloneNode(!0)), t = n.innerHTML, n = null, t
            }(e)
        }
    }
}, function(e, t, n) {
    "use strict";

    function s(e) {
        function t() {
            return o.apply(void 0, arguments)
        }

        function n(e) {
            t[e] = a(s), t[e].log = function() {
                for (var t = arguments.length, n = Array(t), s = 0; s < t; s++) n[s] = arguments[s];
                return "object" === i(window.console) && window.console[e] && Function.prototype.apply.call(window.console[e], window.console, n)
            }
        }
        var s = "bbcdotcom:" + e,
            r = ["log", "info", "warn", "error", "debug"],
            o = a(s),
            u = !0,
            c = !1,
            l = void 0;
        try {
            for (var d, f = r[Symbol.iterator](); !(u = (d = f.next()).done); u = !0) {
                var g = d.value;
                n(g)
            }
        } catch (e) {
            c = !0, l = e
        } finally {
            try {
                !u && f.return && f.return()
            } finally {
                if (c) throw l
            }
        }
        return t
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        a = n(145);
    s.enable = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        a.enable.apply(a, t), a("bbcdotcom")("Debugging enabled", t)
    }, s.disable = function() {
        a("bbcdotcom")("Debugging disabled"), a.disable.apply(a, arguments)
    }, /[?|&]ads-debug/.test(window.location.href) || document.cookie.indexOf("ads-debug=") !== -1 ? s.enable("bbcdotcom*") : a.enabled("bbcdotcom*") && a("bbcdotcom")("To disable debugging: `bbcdotcom.Logger.disable()`"), e.exports = s
}, function(e, t, n) {
    (function(s) {
        function i() {
            return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        }

        function a(e) {
            var n = this.useColors;
            if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
                var s = "color: " + this.color;
                e.splice(1, 0, s, "color: inherit");
                var i = 0,
                    a = 0;
                e[0].replace(/%[a-zA-Z%]/g, function(e) {
                    "%%" !== e && (i++, "%c" === e && (a = i))
                }), e.splice(a, 0, s)
            }
        }

        function r() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function o(e) {
            try {
                null == e ? t.storage.removeItem("debug") : t.storage.debug = e
            } catch (e) {}
        }

        function u() {
            var e;
            try {
                e = t.storage.debug
            } catch (e) {}
            return !e && "undefined" != typeof s && "env" in s && (e = s.env.DEBUG), e
        }

        function c() {
            try {
                return window.localStorage
            } catch (e) {}
        }
        t = e.exports = n(147), t.log = r, t.formatArgs = a, t.save = o, t.load = u, t.useColors = i, t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : c(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }, t.enable(u())
    }).call(t, n(146))
}, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function s() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
        if (l === setTimeout) return setTimeout(e, 0);
        if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
        try {
            return l(e, 0)
        } catch (t) {
            try {
                return l.call(null, e, 0)
            } catch (t) {
                return l.call(this, e, 0)
            }
        }
    }

    function a(e) {
        if (d === clearTimeout) return clearTimeout(e);
        if ((d === s || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
        try {
            return d(e)
        } catch (t) {
            try {
                return d.call(null, e)
            } catch (t) {
                return d.call(this, e)
            }
        }
    }

    function r() {
        b && g && (b = !1, g.length ? p = g.concat(p) : y = -1, p.length && o())
    }

    function o() {
        if (!b) {
            var e = i(r);
            b = !0;
            for (var t = p.length; t;) {
                for (g = p, p = []; ++y < t;) g && g[y].run();
                y = -1, t = p.length
            }
            g = null, b = !1, a(e)
        }
    }

    function u(e, t) {
        this.fun = e, this.array = t
    }

    function c() {}
    var l, d, f = e.exports = {};
    ! function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            l = n
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
            d = s
        }
    }();
    var g, p = [],
        b = !1,
        y = -1;
    f.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        p.push(new u(e, t)), 1 !== p.length || b || i(o)
    }, u.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = c, f.addListener = c, f.once = c, f.off = c, f.removeListener = c, f.removeAllListeners = c, f.emit = c, f.prependListener = c, f.prependOnceListener = c, f.listeners = function(e) {
        return []
    }, f.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function() {
        return "/"
    }, f.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function() {
        return 0
    }
}, function(e, t, n) {
    function s(e) {
        var n, s = 0;
        for (n in e) s = (s << 5) - s + e.charCodeAt(n), s |= 0;
        return t.colors[Math.abs(s) % t.colors.length]
    }

    function i(e) {
        function n() {
            if (n.enabled) {
                var e = n,
                    s = +new Date,
                    i = s - (c || s);
                e.diff = i, e.prev = c, e.curr = s, c = s;
                for (var a = new Array(arguments.length), r = 0; r < a.length; r++) a[r] = arguments[r];
                a[0] = t.coerce(a[0]), "string" != typeof a[0] && a.unshift("%O");
                var o = 0;
                a[0] = a[0].replace(/%([a-zA-Z%])/g, function(n, s) {
                    if ("%%" === n) return n;
                    o++;
                    var i = t.formatters[s];
                    if ("function" == typeof i) {
                        var r = a[o];
                        n = i.call(e, r), a.splice(o, 1), o--
                    }
                    return n
                }), t.formatArgs.call(e, a);
                var u = n.log || t.log || console.log.bind(console);
                u.apply(e, a)
            }
        }
        return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = s(e), "function" == typeof t.init && t.init(n), n
    }

    function a(e) {
        t.save(e), t.names = [], t.skips = [];
        for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), s = n.length, i = 0; i < s; i++) n[i] && (e = n[i].replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
    }

    function r() {
        t.enable("")
    }

    function o(e) {
        var n, s;
        for (n = 0, s = t.skips.length; n < s; n++)
            if (t.skips[n].test(e)) return !1;
        for (n = 0, s = t.names.length; n < s; n++)
            if (t.names[n].test(e)) return !0;
        return !1
    }

    function u(e) {
        return e instanceof Error ? e.stack || e.message : e
    }
    t = e.exports = i.debug = i.default = i, t.coerce = u, t.disable = r, t.enable = a, t.enabled = o, t.humanize = n(148), t.names = [], t.skips = [], t.formatters = {};
    var c
}, function(e, t) {
    function n(e) {
        if (e = String(e), !(e.length > 100)) {
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (t) {
                var n = parseFloat(t[1]),
                    s = (t[2] || "ms").toLowerCase();
                switch (s) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return n * l;
                    case "days":
                    case "day":
                    case "d":
                        return n * c;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return n * u;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return n * o;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return n * r;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return n;
                    default:
                        return
                }
            }
        }
    }

    function s(e) {
        return e >= c ? Math.round(e / c) + "d" : e >= u ? Math.round(e / u) + "h" : e >= o ? Math.round(e / o) + "m" : e >= r ? Math.round(e / r) + "s" : e + "ms"
    }

    function i(e) {
        return a(e, c, "day") || a(e, u, "hour") || a(e, o, "minute") || a(e, r, "second") || e + " ms"
    }

    function a(e, t, n) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }
    var r = 1e3,
        o = 60 * r,
        u = 60 * o,
        c = 24 * u,
        l = 365.25 * c;
    e.exports = function(e, t) {
        t = t || {};
        var a = typeof e;
        if ("string" === a && e.length > 0) return n(e);
        if ("number" === a && isNaN(e) === !1) return t.long ? i(e) : s(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function(e, t, n) {
    "use strict";
    var s = n(150),
        i = n(143),
        a = n(152),
        r = n(153),
        o = n(154),
        u = n(155),
        c = n(156),
        l = n(173),
        d = n(159),
        f = n(165),
        g = n(161),
        p = n(167),
        b = n(170),
        y = n(157),
        m = n(261),
        _ = n(158),
        v = n(166),
        S = n(262),
        h = n(171),
        P = n(263),
        k = n(144)("init");
    e.exports = function(e) {
        try {
            var t, n, A, E, T = s.getWindowLocation(),
                w = s.getWindowDocument();
            if (k.info("bbcdotcom.init() with params: ", e), i.addHtmlTagClass(u.classNames("init", "responsive")), S.init(), s.isActive("ads") && (!s.isSportApp() || s.isSportApp() && s.isAdsportappEnabled())) {
                if (bbcdotcom.initCalled) {
                    if (e.adsToDisplay && (E = b.build(e.adsToDisplay)))
                        for (window.bbcdotcom.adsToDisplay = E, n = 0, A = E.length; n < A; n++) g.registerAd(E[n]);
                    return
                }
                if (s.init(e), i.addHtmlTagClass(u.fromConfig(s, window)), s.isAsync() && (/(sandbox|int)(.dev)*.bbc.co*/.test(window.location.href) || /[?|&]ads-debug/.test(window.location.href) || document.cookie.indexOf("ads-debug=") !== -1 ? i.appendLinkToHead(s.getAssetPrefix() + "style/dist/bbcdotcom-async.dev.css") : i.appendLinkToHead(s.getAssetPrefix() + "style/dist/bbcdotcom-async.css")), !s.isAsync() && s.isIE7() && (/(sandbox|int)(.dev)*.bbc.co*/.test(window.location.href) || /[?|&]ads-debug/.test(window.location.href) || document.cookie.indexOf("ads-debug=") !== -1 ? i.appendLinkToHead(s.getAssetPrefix() + "style/dist/bbcdotcom.dev.css") : i.appendLinkToHead(s.getAssetPrefix() + "style/dist/bbcdotcom.css"), d.disableReset()), s.isIE8() && d.disableReset(), a.build(!0), "sport" === a.getSection(0) && f.setGroupStart(4, 900), "group5" === e.layout) {
                    var x = Object.assign({}, f.getGroup(4));
                    f.setGroup(5, x), f.setGroupFinish(4, 1279)
                }
                if (d.init(f.getGroups()), e.clientWidth && d.setClientWidth(e.clientWidth), e.customBreakpoints && f.setGroups(e.customBreakpoints), e.adsToDisplay && (E = b.build(e.adsToDisplay)), E)
                    for (window.bbcdotcom.adsToDisplay = E, n = 0, A = E.length; n < A; n++) g.registerAd(E[n]);
                if (e.localeData)
                    for (t in e.localeData) e.localeData.hasOwnProperty(t) && r.set(t, e.localeData[t]);
                else r.setLocale(document.documentElement.lang);
                if ((new c).set(w.title + " " + i.getMetaNameContent("description")), p.init(d.getClientWidth(), this.serversideAdUnits2to9, a.getSections("advert"), a.getSections()), y.init(T, w, s.getType()), "undefined" != typeof e.keyValues)
                    for (t in e.keyValues) e.keyValues.hasOwnProperty(t) && y.set(t, e.keyValues[t]);
                m.init(T.href), _.init(), o.init(), s.isLotameEnabled() && ["userPlay", "startProgramme", "endProgramme"].forEach(function(e) {
                    bbcdotcom.pubsub.on(e, function(t) {
                        t.event = e, bbcdotcom.lotame.loadExtra(t)
                    })
                }), window.addEventListener ? window.addEventListener("message", this.receiveMessage, !1) : window.attachEvent("onmessage", this.receiveMessage)
            }
            l.init(), s.isSherlockActive() && s.isSherlockEnabled() && window.tp && (window._comscoreKeyValues && _comscoreKeyValues.b_page_type ? tp.push(["setTags", [_comscoreKeyValues.b_page_type]]) : tp.push(["setTags", [h.getPageType()]])), v.trigger("bbcdotcom:init:complete", {
                params: e,
                stats: {
                    pageType: h.getPageType(),
                    primaryAdUnit: p.getAdUnit1(),
                    secondaryAdUnit: p.getAdUnits2to9(),
                    adsEnabled: s.isAdsEnabled(),
                    isAsync: s.isAsync()
                }
            })
        } catch (e) {
            k && k.error ? k.error(e) : window.console.log(e)
        }
        P(function() {
            try {
                var e, t = g.getAds();
                if (this.domLoaded = !0, s.isAsync()) this.reset();
                else
                    for (e in t) t.hasOwnProperty(e) && t[e].disableScreenReaderForAdContent()
            } catch (e) {
                i.log(e)
            }
        }.bind(this)), bbcdotcom.initCalled = !0
    }
}, function(e, t, n) {
    "use strict";

    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i() {
        return window.location
    }

    function a() {
        return window.document
    }

    function r(e) {
        return /(sandbox|int|test|stage)(.dev)*.bbc.co*/.test(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var s = t[n];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }
            return function(t, n, s) {
                return n && e(t.prototype, n), s && e(t, s), t
            }
        }(),
        u = n(151),
        c = n(144)("config"),
        l = "ads-enabled",
        d = {
            COMSCORE: {
                HTTPS: "https://sb.scorecardresearch.com/b",
                WEBSITE_SUITE_LIVE: "bbc",
                WEBSITE_SUITE_TEST: "bbc-global-test",
                APP_SUITE_LIVE: "bbc",
                APP_SUITE_TEST: "bbc-global-test",
                CUSTOMER_ID_LIVE: 19293874,
                CUSTOMER_ID_TEST: 18897612
            },
            SSC: {
                HTTPS: "https://ssc.api.bbc.com"
            }
        },
        f = new RegExp("^/(afaanoromoo|afrique|amharic|arabic|azeri|bengali|burmese|gahuza|gujarati|hausa|hindi|igbo|indonesia|korean|kyrgyz|japanese|marathi|mundo|naidheachdan|nepali|pashto|persian|pidgin|portuguese|punjabi|russian|serbian|sinhala|somali|swahili|tajik|tamil|telugu|thai|tigrinya|turkce|ukchina|ukrainian|urdu|uzbek|vietnamese|yoruba|zhongwen)"),
        g = new RegExp("^/($|wwhp|news|sport|weather|reel|culture|capital|future|travel|autos|earth)"),
        p = {
            referrer: "",
            windowLocation: i(),
            windowDocument: a(),
            settings: {
                ads: !0,
                analytics: !0,
                comScore: !0
            },
            sections: [],
            pageType: "",
            headline: "",
            async: !1,
            disableAdsInitialLoad: !1,
            daxEnvironments: ["bbc-global"],
            outbrainEnabled: !0,
            lotameEnabled: !0,
            grapeshotEnabled: !0,
            adsenseEnabled: !0,
            adsportappEnabled: !1,
            percentActive: 0,
            platinumEnabled: !1,
            tlSportIndexEnabled: !1,
            tlSportStoryEnabled: !1,
            tlSportFpEnabled: !1,
            optimizelyEnabled: !1,
            sherlockEnabled: !1,
            sherlockActive: !1,
            continuousPlayPage: !1,
            stickyPlayerPage: !1,
            isWorldService: !1,
            ieVersion: {
                ie7: !1,
                ie8: !1,
                ie9: !1
            },
            version: "",
            prefixes: {
                assetPrefix: "",
                jsPrefix: "",
                swfPrefix: "",
                cssPrefix: ""
            },
            features: {},
            palEnv: u.PAL_ENV_LIVE,
            appName: null
        },
        b = function() {
            function e() {
                s(this, e)
            }
            return o(e, [{
                key: "init",
                value: function(e, t, n, s) {
                    /^\/news\/election\/us2016/.test(p.windowLocation.pathname) && bbcdotcom.utils.addHtmlTagClass(bbcdotcom.classes.classNames("news-election-us2016")), "undefined" != typeof e && this.rehydrate(e), this.setData(t), window.self !== window.top && new RegExp("/embed/.*?.*amp=1").test(p.windowLocation.href) && (this.setAdsEnabled(!1), this.setAnalyticsEnabled(!1), c("disabling ads/analytics, amp-iframe ", window.self.location.href)), "undefined" != typeof n && this.setWindowLocation(n), "undefined" != typeof s && this.setWindowDocument(s), this.isAdsEnabled() && bbcdotcom.utils.addHtmlTagClass(l), /tlsportstory/i.test(p.windowLocation.href) && this.setTlSportStoryEnabled(!0), /tlsportindex/i.test(p.windowLocation.href) && this.setTlSportIndexEnabled(!0), /tlsportfp/i.test(p.windowLocation.href) && this.setTlSportFpEnabled(!0), (f.test(p.windowLocation.pathname) || window.SEARCHBOX && window.SEARCHBOX.variant && "worldservice" === window.SEARCHBOX.variant) && this.setIsWorldService(!0), g.test(p.windowLocation.pathname) && t && 1 === t.ads && this.setSherlockActive(!0);
                    var i = "undefined" != typeof window.orb && "undefined" != typeof window.orb.referrer ? window.orb.referrer : p.windowDocument.referrer;
                    this.setReferrer(i)
                }
            }, {
                key: "rehydrate",
                value: function(e) {
                    if ("undefined" != typeof e) {
                        "undefined" != typeof e.sections && this.setSections(e.sections), "undefined" != typeof e.type && this.setType(e.type), "undefined" != typeof e.headline && this.setHeadline(e.headline), "undefined" != typeof e.adsEnabled && this.setAdsEnabled(e.adsEnabled), "undefined" != typeof e.allowAdvertising && this.setAdsEnabled(e.allowAdvertising), "undefined" != typeof e.analyticsEnabled && this.setAnalyticsEnabled(e.analyticsEnabled), "undefined" != typeof e.comScoreEnabled && this.setComScoreEnabled(e.comScoreEnabled), "undefined" != typeof e.asyncEnabled && this.setAsync(e.asyncEnabled), "undefined" != typeof e.optimizelyEnabled && this.setOptimizelyEnabled(e.optimizelyEnabled), "undefined" != typeof e.sherlockEnabled && this.setSherlockEnabled(e.sherlockEnabled), "undefined" != typeof e.disableInitialLoad && this.setDisableInitialLoad(e.disableInitialLoad);
                        var t = "undefined" != typeof e.adKeyword ? e.adKeyword : e.adCampaignKeyword;
                        "undefined" != typeof t && bbcdotcom.adverts.keyValues.set("keyword", t), "undefined" != typeof e.url && this.setWindowLocation(bbcdotcom.utils.createWindowLocation(e.url)), "undefined" != typeof e.features && this.setFeatures(e.features), "undefined" != typeof e.palEnv && this.setPalEnv(e.palEnv), bbcdotcom.locale && ("undefined" != typeof e.advertisementText && bbcdotcom.locale.set("advertisementText", e.advertisementText), "undefined" != typeof e.advertInfoPageUrl && bbcdotcom.locale.set("advertInfoPageUrl", e.advertInfoPageUrl), "undefined" != typeof e.inAssociationWithText && bbcdotcom.locale.set("inAssociationWithText", e.inAssociationWithText), "undefined" != typeof e.sponsoredByText && bbcdotcom.locale.set("sponsoredByText", e.sponsoredByText), "undefined" != typeof e.adsByGoogleText && bbcdotcom.locale.set("adsByGoogleText", e.adsByGoogleText)), "undefined" != typeof e.isContinuousPlayPage && this.setContinuousPlayPage(e.isContinuousPlayPage), "undefined" != typeof e.isStickyPlayerPage && this.setStickyPlayerPage(e.isStickyPlayerPage)
                    }
                }
            }, {
                key: "getConfig",
                value: function() {
                    return p
                }
            }, {
                key: "setData",
                value: function(e) {
                    if ("undefined" != typeof e && "undefined" != typeof e.ads && "undefined" != typeof e.stats && "undefined" != typeof e.statsProvider) {
                        var t = 5,
                            n = parseInt(e.statsProvider, 10).toString(2);
                        if (n.length !== t)
                            for (; n.length < t;) n = "0" + n;
                        p.settings = {
                            ads: 1 === e.ads && p.settings.ads !== !1,
                            analytics: 1 === e.stats && p.settings.analytics !== !1,
                            "nielsen-au": 1 === e.stats && parseInt(n.substr(0, 1), 10),
                            "nielsen-nz": 1 === e.stats && parseInt(n.substr(1, 1), 10),
                            "nielsen-us": 1 === e.stats && parseInt(n.substr(2, 1), 10),
                            sitestat: 0,
                            agof: 0,
                            comScore: p.settings.comScore
                        }
                    }
                }
            }, {
                key: "setFlagpoles",
                value: function(e) {
                    "undefined" != typeof e.o && this.setOutbrainEnabled(e.o), "undefined" != typeof e.d && this.setAdsenseEnabled(e.d), "undefined" != typeof e.asa && this.setAdsportappEnabled(e.asa), "undefined" != typeof e.l && this.setLotameEnabled(e.l), "undefined" != typeof e.p && this.setPlatinumEnabled(e.p), "undefined" != typeof e.z && this.setOptimizelyEnabled(e.z), "undefined" != typeof e.g && this.setGrapeshotEnabled(e.g), "undefined" != typeof e.sh && this.setSherlockEnabled(e.sh)
                }
            }, {
                key: "setSections",
                value: function(e) {
                    "undefined" != typeof e ? e instanceof Array ? p.sections = e : p.sections = e.split("/") : p.sections = []
                }
            }, {
                key: "getSections",
                value: function() {
                    return p.sections
                }
            }, {
                key: "setType",
                value: function(e) {
                    p.pageType = e.toUpperCase()
                }
            }, {
                key: "getType",
                value: function() {
                    return p.pageType
                }
            }, {
                key: "setFeatures",
                value: function(e) {
                    return p.features = e, this
                }
            }, {
                key: "getFeatures",
                value: function() {
                    return p.features
                }
            }, {
                key: "setPalEnv",
                value: function(e) {
                    return p.palEnv = e, this
                }
            }, {
                key: "getPalEnv",
                value: function() {
                    return p.palEnv
                }
            }, {
                key: "setHeadline",
                value: function(e) {
                    p.headline = e
                }
            }, {
                key: "getHeadline",
                value: function() {
                    return p.headline
                }
            }, {
                key: "setAsync",
                value: function(e) {
                    p.async = e
                }
            }, {
                key: "isAsync",
                value: function() {
                    return p.async
                }
            }, {
                key: "setDisableInitialLoad",
                value: function(e) {
                    p.disableAdsInitialLoad = e
                }
            }, {
                key: "isDisableInitialLoad",
                value: function() {
                    return p.disableAdsInitialLoad
                }
            }, {
                key: "isTopLevelSite",
                value: function(e) {
                    var t = p.windowLocation.pathname;
                    return "undefined" != typeof t && 0 === t.indexOf("/" + e)
                }
            }, {
                key: "isSportApp",
                value: function() {
                    var e = p.windowLocation.pathname,
                        t = p.windowLocation.href;
                    return "undefined" != typeof e && (e.indexOf(".app") !== -1 || "undefined" != typeof t && t.indexOf(".app") !== -1) && (0 === e.indexOf("/sport") || "undefined" != typeof t && t.indexOf("analytics-debug") !== -1)
                }
            }, {
                key: "isReel",
                value: function() {
                    var e = p.windowLocation.pathname;
                    return "undefined" != typeof e && 0 === e.indexOf("/reel")
                }
            }, {
                key: "isActive",
                value: function(e) {
                    return "undefined" != typeof p.settings[e] && p.settings[e]
                }
            }, {
                key: "isAdsEnabled",
                value: function() {
                    return this.isActive("ads")
                }
            }, {
                key: "setAdsEnabled",
                value: function(e) {
                    p.settings.ads = e
                }
            }, {
                key: "setAnalyticsEnabled",
                value: function(e) {
                    p.settings.analytics = 0 !== p.settings.analytics && p.settings.analytics !== !1 ? e : 0
                }
            }, {
                key: "isAnalyticsEnabled",
                value: function() {
                    return this.isActive("analytics")
                }
            }, {
                key: "setComScoreEnabled",
                value: function(e) {
                    p.settings.comScore = 0 !== p.settings.comScore && p.settings.comScore !== !1 ? e : 0
                }
            }, {
                key: "isComScoreEnabled",
                value: function() {
                    return this.isActive("comScore") && this.isActive("analytics")
                }
            }, {
                key: "setOutbrainEnabled",
                value: function(e) {
                    p.outbrainEnabled = 0 !== e && e !== !1
                }
            }, {
                key: "isOutbrainEnabled",
                value: function() {
                    return p.outbrainEnabled
                }
            }, {
                key: "setAdsenseEnabled",
                value: function(e) {
                    p.adsenseEnabled = 0 !== e && e !== !1
                }
            }, {
                key: "isAdsenseEnabled",
                value: function() {
                    return p.adsenseEnabled
                }
            }, {
                key: "setAdsportappEnabled",
                value: function(e) {
                    p.adsportappEnabled = 0 !== e && e !== !1
                }
            }, {
                key: "isAdsportappEnabled",
                value: function() {
                    return p.adsportappEnabled
                }
            }, {
                key: "setLotameEnabled",
                value: function(e) {
                    p.lotameEnabled = 0 !== e && e !== !1
                }
            }, {
                key: "isLotameEnabled",
                value: function() {
                    return p.lotameEnabled
                }
            }, {
                key: "setContinuousPlayPage",
                value: function(e) {
                    p.continuousPlayPage = e === !0
                }
            }, {
                key: "isContinuousPlayPage",
                value: function() {
                    return p.continuousPlayPage
                }
            }, {
                key: "setPlatinumEnabled",
                value: function(e) {
                    p.platinumEnabled = 0 !== e && e !== !1
                }
            }, {
                key: "isPlatinumEnabled",
                value: function() {
                    return p.platinumEnabled
                }
            }, {
                key: "setTlSportIndexEnabled",
                value: function(e) {
                    p.tlSportIndexEnabled = e
                }
            }, {
                key: "isTlSportIndexEnabled",
                value: function() {
                    return p.tlSportIndexEnabled
                }
            }, {
                key: "setTlSportStoryEnabled",
                value: function(e) {
                    p.tlSportStoryEnabled = e
                }
            }, {
                key: "isTlSportStoryEnabled",
                value: function() {
                    return p.tlSportStoryEnabled
                }
            }, {
                key: "setTlSportFpEnabled",
                value: function(e) {
                    p.tlSportFpEnabled = e
                }
            }, {
                key: "isTlSportFpEnabled",
                value: function() {
                    return p.tlSportFpEnabled
                }
            }, {
                key: "setOptimizelyEnabled",
                value: function(e) {
                    p.optimizelyEnabled = 0 !== e && e !== !1
                }
            }, {
                key: "isOptimizelyEnabled",
                value: function() {
                    return p.optimizelyEnabled
                }
            }, {
                key: "setGrapeshotEnabled",
                value: function(e) {
                    p.grapeshotEnabled = 0 !== e && e !== !1
                }
            }, {
                key: "isGrapeshotEnabled",
                value: function() {
                    return p.grapeshotEnabled
                }
            }, {
                key: "setSherlockEnabled",
                value: function(e) {
                    p.sherlockEnabled = 0 !== e && e !== !1
                }
            }, {
                key: "isSherlockEnabled",
                value: function() {
                    return p.sherlockEnabled
                }
            }, {
                key: "setSherlockActive",
                value: function(e) {
                    p.sherlockActive = 0 !== e && e !== !1
                }
            }, {
                key: "isSherlockActive",
                value: function() {
                    return p.sherlockActive
                }
            }, {
                key: "setIsWorldService",
                value: function(e) {
                    p.isWorldService = e
                }
            }, {
                key: "isWorldService",
                value: function() {
                    return p.isWorldService
                }
            }, {
                key: "setStickyPlayerPage",
                value: function(e) {
                    p.stickyPlayerPage = e === !0
                }
            }, {
                key: "isStickyPlayerPage",
                value: function() {
                    return p.stickyPlayerPage
                }
            }, {
                key: "setIE7",
                value: function(e) {
                    p.ieVersion.ie7 = e
                }
            }, {
                key: "isIE7",
                value: function() {
                    return p.ieVersion.ie7
                }
            }, {
                key: "setIE8",
                value: function(e) {
                    p.ieVersion.ie8 = e
                }
            }, {
                key: "isIE8",
                value: function() {
                    return p.ieVersion.ie8
                }
            }, {
                key: "setIE9",
                value: function(e) {
                    p.ieVersion.ie9 = e
                }
            }, {
                key: "isIE9",
                value: function() {
                    return p.ieVersion.ie9
                }
            }, {
                key: "setAssetPrefix",
                value: function(e) {
                    p.prefixes.assetPrefix = e
                }
            }, {
                key: "getAssetPrefix",
                value: function() {
                    return p.prefixes.assetPrefix
                }
            }, {
                key: "setAppName",
                value: function(e) {
                    return p.appName = e, this
                }
            }, {
                key: "getAppName",
                value: function() {
                    return p.appName
                }
            }, {
                key: "setJsPrefix",
                value: function(e) {
                    p.prefixes.jsPrefix = e
                }
            }, {
                key: "getJsPrefix",
                value: function() {
                    return "" !== p.prefixes.jsPrefix ? p.prefixes.jsPrefix : this.getAssetPrefix() + "script"
                }
            }, {
                key: "setSwfPrefix",
                value: function(e) {
                    p.prefixes.swfPrefix = e
                }
            }, {
                key: "getSwfPrefix",
                value: function() {
                    return "" !== p.prefixes.swfPrefix ? p.prefixes.swfPrefix : this.getAssetPrefix() + "swf"
                }
            }, {
                key: "setCssPrefix",
                value: function(e) {
                    p.prefixes.cssPrefix = e
                }
            }, {
                key: "getCssPrefix",
                value: function() {
                    return "" !== p.prefixes.cssPrefix ? p.prefixes.cssPrefix : this.getAssetPrefix() + "style"
                }
            }, {
                key: "setVersion",
                value: function(e) {
                    return p.version = e, this
                }
            }, {
                key: "getVersion",
                value: function() {
                    return p.version
                }
            }, {
                key: "setWindowLocation",
                value: function(e) {
                    return p.windowLocation = e, this
                }
            }, {
                key: "getWindowLocation",
                value: function() {
                    return p.windowLocation
                }
            }, {
                key: "setWindowDocument",
                value: function(e) {
                    return p.windowDocument = e, this
                }
            }, {
                key: "getWindowDocument",
                value: function() {
                    return p.windowDocument
                }
            }, {
                key: "setReferrer",
                value: function(e) {
                    return p.referrer = e, this
                }
            }, {
                key: "getReferrer",
                value: function() {
                    return p.referrer
                }
            }, {
                key: "getAnalyticsConfig",
                value: function() {
                    return d
                }
            }, {
                key: "getAnalyticsUri",
                value: function(e) {
                    return bbcdotcom.analytics.comScore.sscHelper.getAnalyticsLocation()
                }
            }, {
                key: "setDaxEnvironments",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return p.daxEnvironments = e, this
                }
            }, {
                key: "getDaxEnvironments",
                value: function() {
                    return p.daxEnvironments
                }
            }, {
                key: "getAnalyticsSuite",
                value: function(e) {
                    var t = r(p.windowLocation.href);
                    return this.isSportApp() ? t ? d.COMSCORE.APP_SUITE_TEST : d.COMSCORE.APP_SUITE_LIVE : t ? d.COMSCORE.WEBSITE_SUITE_TEST : d.COMSCORE.WEBSITE_SUITE_LIVE
                }
            }, {
                key: "getAnalyticsAcctId",
                value: function() {
                    return r(p.windowLocation.href) ? d.COMSCORE.CUSTOMER_ID_TEST : d.COMSCORE.CUSTOMER_ID_LIVE
                }
            }, {
                key: "r",
                value: function() {
                    this.setWindowLocation(i()), this.setWindowDocument(a()), this.setReferrer(""), this.setSections([]), p.settings = {
                        ads: !0,
                        analytics: !0,
                        comScore: !0
                    }, this.setIE7(!1), this.setIE8(!1), this.setAssetPrefix(""), this.setOutbrainEnabled(!0), this.setAdsenseEnabled(!0), this.setAdsportappEnabled(!1), this.setStickyPlayerPage(!1), this.setContinuousPlayPage(!1), this.setHeadline(""), this.setType("")
                }
            }]), e
        }();
    t.default = new b, e.exports = t.default
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.PAL_ENV_LIVE = "live", t.PAL_ENV_STAGE = "stage", t.PAL_ENV_TEST = "test", t.PAL_ENV_INT = "int", t.PAL_ENV_SANDBOX = "sandbox"
}, function(e, t, n) {
    "use strict";
    var s = n(150),
        i = [],
        a = [],
        r = [],
        o = function(e) {
            var t = new RegExp("^(afaanoromoo|afrique|amharic|arabic|azeri|bengali|burmese|gahuza|gujarati|hausa|hindi|igbo|indonesia|korean|kyrgyz|japanese|marathi|mundo|naidheachdan|nepali|newyddion|pashto|persian|pidgin|portuguese|punjabi|russian|serbian|sinhala|somali|swahili|tajik|tamil|telugu|thai|tigrinya|turkce|ukchina|ukrainian|urdu|uzbek|vietnamese|yoruba|zhongwen)");
            return e.replace(/\?.*$/, "").replace(/\#.*$/, "").replace(/^news\/0/, "news").replace(/^weather\/0/, "weather").replace(/^news\/(uk|world|us|asia)\/(health)(?!-)/, "news/$2").replace(/^(news\/av\/)(.*)\/[^\/]+$/, "$1$2").replace(/^news\/av\//, "news/").replace(/(_|\-|\/)?[A-Z0-9]{7,8}$/, "").replace(/\/[a-z0-9]+\.stm/, "").replace(/_and_/, "-").replace(/_/g, "-").replace(/^news\/(england|northern-ireland|scotland|wales)($|-|\/)/, "news/uk/$1$2").replace(/^news\/uk-([a-z]+)(-([a-z]+))?/, "news/uk/$1/$3").replace(/^news\/(world)-(africa|asia|europe)(-([a-z]+))?/, "news/$1/$2/$4").replace(/^news\/(world)-([a-z\-]+)/, "news/$1/$2/").replace(/^(newsbeat)($|-|\/)/, "news/$1$2").replace(/^sport\/0/, "sport").replace(/^sport\/beta/, "sport").replace(/^sport\/av\//, "sport/").replace(/^sport\/(world|uk)/, "sport").replace(/^sport\/(.*)\/sports($|\/)/, "sport/$1$2").replace(/market-data\/overview/, "market-data").replace(/^(programmes)/, "news/$1").replace(t, "worldservice/$1").replace(/^wwhp/, "").replace(/\.app$/, "").replace(/:\d+(?=\/)/, "").replace(/\/+$/, "")
        },
        u = function(e) {
            return e = e.replace(/^news\/world\/([a-z]+)(-([a-z]+))?/, "news/world$1$3").replace(/programmes\/asiabusinessreport/, "asiabusiness").replace(/programmes\/click$/, "clickonline").replace(/worldservice\//, ""), e.split("/")
        },
        c = function(e) {
            return e = e.replace(/^specialfeatures/, "news/specialfeatures").replace(/^sport\/(.*)\/(20[0-9]{2})($|\/)/, "sport/$1-$2$3"), e.split("/")
        },
        l = function(e, t) {
            var n, l = "",
                d = [],
                f = [],
                g = [],
                p = "unknown";
            if ("undefined" != typeof t) n = t.match(/http(|s):\/\/[a-z0-9\-.]+(.com|.co.uk|.net)(\/)?(.*)?/), n ? l = n[n.length - 1] : (n = t.match(/^\/(.*)?/), l = n ? n[n.length - 1] : p);
            else if (0 === s.getSections().length) {
                var b = bbcdotcom.analyticsHelper.getUriForSections();
                "undefined" == typeof b || "" === b || null === b || 0 !== b.indexOf("http") ? l = p : (n = b.match(/http(|s):\/\/[a-z0-9\-.]+(.com|.co.uk|.net)(\/)?(.*)?/), l = n ? n[n.length - 1] : p)
            } else l = s.getSections().join("/");
            return l = l || "", l = o(l), "" === l ? d = f = g = ["homepage"] : (d = l.split("/"), f = u(l), g = c(l)), e && (i = d, a = f, r = g), [d, f, g]
        },
        d = function(e) {
            return e = "undefined" == typeof e ? "" : e, "advert" === e ? a : "analytics" === e ? r : i
        };
    e.exports = {
        build: l,
        getSection: function(e, t, n) {
            return "undefined" != typeof e && ("undefined" != typeof n && n === !0 && l(!0), e = parseInt(e, 10), "undefined" != typeof d(t) && "undefined" != typeof d(t)[e] && "" !== d(t)[e]) && d(t)[e]
        },
        getSections: function(e, t) {
            return "undefined" != typeof t && t === !0 && l(!0), d(e)
        },
        getSectionsForUri: function(e, t) {
            e = "undefined" == typeof e || null === e ? "" : e, t = "undefined" == typeof t ? "" : t;
            var n = l(!1, e);
            return "advert" === t ? n[1] : "analytics" === t ? n[2] : n[0]
        },
        r: function() {
            i = [], a = [], r = []
        }
    }
}, function(e, t, n) {
    "use strict";
    var s = n(144)("locale"),
        i = {
            advertisementText: "Advertisement",
            inAssociationWithText: "in association with",
            sponsoredByText: "is sponsored by",
            advertisingPartnersText: "Advertising Partners",
            adsByGoogleText: "Ads by Google",
            advertInfoPageUrl: "https://www.bbc.com/privacy/cookies/international/",
            associationInfoPageUrl: "https://advertising.bbcworldwide.com/bbc-storyworks-content-definitions/",
            googleAdsPageUrl: "https://www.bbc.co.uk/bbc.com/faq/ads_by_google.shtml"
        },
        a = {
            am: {
                advertisementText: "ማስታወቂያ",
                advertInfoPageUrl: "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
                inAssociationWithText: "ጋር በመተባበር",
                sponsoredByText: "ሰፖንሰር ያደረገዉ/ችዉ/ጉት",
                advertisingPartnersText: "አጋሮች",
                adsByGoogleText: "የጉግል ማስታወቂያዎች"
            },
            ar: {
                advertisementText: "إعلان",
                advertInfoPageUrl: "/arabic/institutional/2012/06/120410_faq_help_bbc_arabic",
                inAssociationWithText: "بالتعاون مع",
                sponsoredByText: "برعاية",
                advertisingPartnersText: "شركاء الإعلان",
                adsByGoogleText: "إعلانات من غوغل"
            },
            az: {
                advertisementText: "Reklam",
                advertInfoPageUrl: "/azeri/institutional/2015/10/000000_advertising_faq.shtml",
                inAssociationWithText: "ilə birgə",
                sponsoredByText: "Sponsor: ",
                advertisingPartnersText: "Reklam partnyorları",
                adsByGoogleText: "Google reklamı"
            },
            bn: {
                advertisementText: "বিজ্ঞাপন",
                advertInfoPageUrl: "/bengali/institutional/2015/10/000000_advertising_faq.shtml",
                inAssociationWithText: "এর সহযোগিতায়",
                sponsoredByText: "এর সৌজন্যে",
                advertisingPartnersText: "বিজ্ঞাপন সহযোগী",
                adsByGoogleText: "গুগল-এর বিজ্ঞাপন"
            },
            es: {
                advertisementText: "Publicidad",
                advertInfoPageUrl: "/mundo/institucional/2012/06/000000_ayuda_sobre_publicidad",
                inAssociationWithText: "En asociación con",
                sponsoredByText: "Patrocinado por",
                advertisingPartnersText: "Anunciantes",
                adsByGoogleText: "Avisos de Google"
            },
            fa: {
                advertisementText: "آگهی",
                advertInfoPageUrl: "http://www.bbc.com/persian/institutional/2015/08/000000_advertising_faq",
                inAssociationWithText: "inAssociationWith",
                sponsoredByText: "sponsoredBy",
                advertisingPartnersText: "advertisingPartners",
                adsByGoogleText: "adsByGoogle"
            },
            fr: {
                advertisementText: "Publicités",
                advertInfoPageUrl: "/afrique/institutionelles/2015/08/000000_advertising_faq.shtml",
                inAssociationWithText: "inAssociationWith",
                sponsoredByText: "sponsoredBy",
                advertisingPartnersText: "advertisingPartners",
                adsByGoogleText: "adsByGoogle"
            },
            gu: {
                advertisementText: "જાહેરાત",
                advertInfoPageUrl: "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
                inAssociationWithText: "ના સહયોગથી",
                sponsoredByText: "પ્રાયોજક",
                advertisingPartnersText: "પાર્ટનર્સ",
                adsByGoogleText: "Google દ્વારાજાહેરાતો"
            },
            ha: {
                advertisementText: "Talla",
                advertInfoPageUrl: "http://www.bbc.co.uk/hausa/institutional/2015/01/000000_advertising_faqs",
                inAssociationWithText: "Da hadin gwiwar",
                sponsoredByText: "Wanda ya dauki nauyi",
                advertisingPartnersText: "Abokan hulda",
                adsByGoogleText: "Tallace-tallace daga Google"
            },
            hi: {
                advertisementText: "विज्ञापन",
                advertInfoPageUrl: "http://www.bbc.co.uk/hindi/institutional/2015/01/000000_advertising_faqs",
                inAssociationWithText: "के साथ",
                sponsoredByText: "प्रायोजक",
                advertisingPartnersText: "पार्टनर",
                adsByGoogleText: "गूगल के विज्ञापन"
            },
            id: {
                advertisementText: "Iklan",
                advertInfoPageUrl: "http://www.bbc.com/indonesia/institutional/2015/08/000000_advertising_faq",
                adsByGoogleText: "adsByGoogle"
            },
            ig: {
                advertisementText: "Mgbasa ozi",
                advertInfoPageUrl: "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
                inAssociationWithText: "Na njikọta nke",
                sponsoredByText: "Akwadoro site n'aka",
                advertisingPartnersText: "Ndị mmekọ",
                adsByGoogleText: "Mgbasa ozi nke Google"
            },
            ja: {
                advertisementText: "広告",
                advertInfoPageUrl: "/japanese/help-34287354",
                inAssociationWithText: "提携:",
                sponsoredByText: "提供:",
                advertisingPartnersText: "パートナー:",
                adsByGoogleText: "Ads by Google"
            },
            ko: {
                advertisementText: "광고",
                advertInfoPageUrl: "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
                inAssociationWithText: "관련 내용",
                sponsoredByText: "후원사",
                advertisingPartnersText: "협력사",
                adsByGoogleText: "Google 광고"
            },
            ky: {
                advertisementText: "Жарнама",
                advertInfoPageUrl: "/kyrgyz/institutional/2015/10/000000_advertising_faq.shtml",
                inAssociationWithText: "менен кызматташтыкта ",
                sponsoredByText: "Спонсор",
                advertisingPartnersText: "Жарнама партнёрлору",
                adsByGoogleText: "Google жарнамасы"
            },
            mr: {
                advertisementText: "जाहिरात",
                advertInfoPageUrl: "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
                inAssociationWithText: "च्या संयुक्त विद्यमाने",
                sponsoredByText: "च्या सौजन्याने",
                advertisingPartnersText: "भागीदार",
                adsByGoogleText: "Google द्वारे जाहिराती"
            },
            my: {
                advertisementText: "ကြော်ငြာ",
                advertInfoPageUrl: "/burmese/institutional/2015/10/000000_advertising_faq.shtml",
                inAssociationWithText: "နှင့် ပူးတွဲဝန်ဆောင်၍",
                sponsoredByText: "ကမကထပြုသူ",
                advertisingPartnersText: "ပူးတွဲဝန်ဆောင်သူများ",
                adsByGoogleText: "ဂူဂဲလ် ကြော်ငြာ"
            },
            ne: {
                advertisementText: "विज्ञापन",
                advertInfoPageUrl: "/nepali/institutional/2015/10/000000_advertising_faq.shtml",
                inAssociationWithText: "साथमा",
                sponsoredByText: "प्रायोजक",
                advertisingPartnersText: "प्रायोजक",
                adsByGoogleText: "गुगलको विज्ञापन"
            },
            om: {
                advertisementText: "Beeksiisa",
                advertInfoPageUrl: "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
                inAssociationWithText: "...Waliin ta'uun.",
                sponsoredByText: "Ispoonsara kan godhe...",
                advertisingPartnersText: "Waahillan",
                adsByGoogleText: "Beeksia Google'n"
            },
            pa: {
                advertisementText: "ਇਸ਼ਤਿਹਾਰ",
                advertInfoPageUrl: "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
                inAssociationWithText: "ਇਸ ਦੇ ਸਹਿਯੋਗ ਨਾਲ",
                sponsoredByText: "ਇਸ ਦੁਆਰਾ ਪ੍ਰਾਯੋਜਿਤ",
                advertisingPartnersText: "ਭਾਈਵਾਲ",
                adsByGoogleText: "Google ਦੁਆਰਾ ਇਸ਼ਤਿਹਾਰ"
            },
            pcm: {
                advertisementText: "Tori we dem pay for",
                advertInfoPageUrl: "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
                inAssociationWithText: "E join hand with",
                sponsoredByText: "De person we sponsor am",
                advertisingPartnersText: "Partner dem",
                adsByGoogleText: "Ads we Google do"
            },
            ps: {
                advertisementText: "اعلان",
                advertInfoPageUrl: "/pashto/institutional/2015/10/000000_advertising_faq.shtml",
                inAssociationWithText: "په ګډه",
                sponsoredByText: "په ملاتړ",
                advertisingPartnersText: "ملګري",
                adsByGoogleText: "د ګوګل اعلانونه"
            },
            pt: {
                advertisementText: "Publicidade",
                advertInfoPageUrl: "http://www.bbc.co.uk/portuguese/institutional/2015/01/000000_advertising_faqs",
                inAssociationWithText: "Em parceria com",
                sponsoredByText: "Com patrocínio de",
                advertisingPartnersText: "Parceiros",
                adsByGoogleText: "Anúncios do Google"
            },
            ru: {
                advertisementText: "Реклама",
                advertInfoPageUrl: "/russian/institutional/2012/12/000000_advert_uk_faq",
                inAssociationWithText: "В сотрудничестве с",
                sponsoredByText: "Спонсор:",
                advertisingPartnersText: "Рекламные партнеры",
                adsByGoogleText: "Реклама Google"
            },
            "ru-UK": {
                advertisementText: "Реклама",
                advertInfoPageUrl: "",
                inAssociationWithText: "В сотрудничестве с",
                sponsoredByText: "Спонсор:",
                advertisingPartnersText: "Рекламные партнеры",
                adsByGoogleText: "Реклама Google"
            },
            rw: {
                advertisementText: "Kwamamaza",
                advertInfoPageUrl: "/gahuza/ibindi_wifashisha/2015/08/000000_advertising_faq.shtml"
            },
            si: {
                advertisementText: "වෙළෙඳ දැන්වීමක් ",
                advertInfoPageUrl: "/sinhala/institutional/2015/10/000000_advertising_faq.shtml",
                inAssociationWithText: "සහභාගිත්වය ඇතිව ",
                sponsoredByText: "අනුග්‍රාහකත්වය ",
                advertisingPartnersText: "දැන්වීම් අනුග්‍රාහකයෝ",
                adsByGoogleText: "ගූගල් වෙළෙඳ දැන්වීම්"
            },
            so: {
                advertisementText: "Xayeysiin",
                advertInfoPageUrl: "/somali/hayadeed/2015/08/000000_advertising_faq.shtml"
            },
            sw: {
                advertisementText: "Matangazo",
                advertInfoPageUrl: "http://www.bbc.co.uk/swahili/taasisi/2015/01/000000_advertising_faqs",
                inAssociationWithText: "Kwa ushirikiano na",
                sponsoredByText: "Imedhaminiwa na",
                advertisingPartnersText: "Washirika",
                adsByGoogleText: "Matangazo ya biashara ya Google"
            },
            ta: {
                advertisementText: "விளம்பரம்",
                advertInfoPageUrl: "/tamil/institutional/2015/10/000000_advertising_faq.shtml",
                inAssociationWithText: "உடன் இணைந்து",
                sponsoredByText: "உதவியுடன்",
                advertisingPartnersText: "கூட்டாளிகள்",
                adsByGoogleText: "கூகிள் விளம்பரங்கள்"
            },
            te: {
                advertisementText: "వ్యాపార ప్రకటన",
                advertInfoPageUrl: "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
                inAssociationWithText: "వీరి సహకారంతో",
                sponsoredByText: "ప్రాయోజితులు",
                advertisingPartnersText: "భాగస్వాములు",
                adsByGoogleText: "గూగుల్ సమర్పిత ప్రకటనలు"
            },
            th: {
                advertisementText: "โฆษณา",
                advertInfoPageUrl: "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
                inAssociationWithText: "ด้วยความร่วมมือกับ",
                sponsoredByText: "สนับสนุนโดย",
                advertisingPartnersText: "ภาคีของเรา",
                adsByGoogleText: "โฆษณาโดยกูเกิล"
            },
            ti: {
                advertisementText: "መላለዪ",
                advertInfoPageUrl: "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
                inAssociationWithText: "ብምትሕግጋዝ",
                sponsoredByText: "መዋሊ",
                advertisingPartnersText: "መላፍንትና",
                adsByGoogleText: "ኣብ ጎግል ዝወፀ መቓልሕ"
            },
            tr: {
                advertisementText: "Reklam",
                advertInfoPageUrl: "http://www.bbc.co.uk/turkce/kurumsal/2015/01/000000_advertising_faqs",
                inAssociationWithText: "In association with",
                sponsoredByText: "Sponsor",
                advertisingPartnersText: "Ortakla",
                adsByGoogleText: "Google reklamlar"
            },
            uk: {
                advertisementText: "Реклама",
                advertInfoPageUrl: "/ukrainian/institutional/2015/10/000000_advertising_faq.shtml",
                inAssociationWithText: "У партнерстві з",
                sponsoredByText: "Спонсор: ",
                advertisingPartnersText: "Партнери",
                adsByGoogleText: "Реклама Google"
            },
            ur: {
                advertisementText: "اشتہار",
                advertInfoPageUrl: "http://www.bbc.com/urdu/institutional/2015/08/000000_advertising_faq"
            },
            uz: {
                advertisementText: "Реклама",
                advertInfoPageUrl: "/uzbek/institutional/2015/10/000000_advertising_faq.shtml",
                inAssociationWithText: "билан ҳамкорликда",
                sponsoredByText: "Ҳомий",
                advertisingPartnersText: "Реклама бўйича шериклар",
                adsByGoogleText: "Google рекламаси"
            },
            "uz-latin": {
                advertisementText: "Reklama",
                advertInfoPageUrl: "/uzbek/institutional/2015/10/000000_advertising_faq.shtml",
                inAssociationWithText: "bilan hamkorlikda",
                sponsoredByText: "Homiy",
                advertisingPartnersText: "Reklama bo'yicha sheriklar",
                adsByGoogleText: "Google reklamasi"
            },
            vi: {
                advertisementText: "Quảng cáo",
                advertInfoPageUrl: "http://www.bbc.com/vietnamese/institutional/2015/08/000000_advertising_faq"
            },
            "zh-Hans": {
                advertisementText: "广告",
                advertInfoPageUrl: "http://www.bbc.com/zhongwen/simp/institutional/2015/08/000000_advertising_faq"
            },
            "zh-Hans-UKCN": {
                advertisementText: "广告",
                advertInfoPageUrl: "http://www.bbc.com/ukchina/simp/institutional/2015/08/000000_advertising_faq"
            },
            "zh-Hant": {
                advertisementText: "廣告",
                advertInfoPageUrl: "http://www.bbc.com/zhongwen/trad/institutional/2015/08/000000_advertising_faq"
            },
            "zh-Hant-UKCN": {
                advertisementText: "廣告",
                advertInfoPageUrl: "http://www.bbc.com/ukchina/trad/institutional/2015/08/000000_advertising_faq"
            }
        };
    e.exports = {
        get: function(e) {
            return i[e]
        },
        set: function(e, t) {
            i[e] = t
        },
        getData: function() {
            return i
        },
        setLocale: function(e) {
            var t, n = e && a[e];
            if (n) {
                s.info("setting ad text to locale : ", e);
                for (t in n) n.hasOwnProperty(t) && this.set(t, n[t])
            }
        }
    }
}, function(e, t) {
    "use strict";
    e.exports = {
        providers: {
            eDigitalResearch: {
                key: "INS-vt29-666188954",
                url: bbcdotcom.assetPrefix + "script/vendor/edr/edr.min.js"
            }
        },
        adsEnabled: function() {
            return void 0 !== bbcdotcom.data && (void 0 !== bbcdotcom.data.a && 1 === bbcdotcom.data.a || void 0 !== bbcdotcom.data.ads && 1 === bbcdotcom.data.ads)
        },
        surveyEnabled: function() {
            return void 0 !== bbcdotcom.flag && 1 === bbcdotcom.flag.s
        },
        init: function() {
            bbcdotcom.survey.adsEnabled() && bbcdotcom.survey.surveyEnabled() && "undefined" == typeof window.EDRSurvey && bbcdotcom.survey.loadScript(document, bbcdotcom.survey.providers.eDigitalResearch.url)
        },
        loadScript: function(e, t, n) {
            var s = e.createElement("script"),
                i = "async",
                a = "defer";
            s.setAttribute(i, i), s.setAttribute(a, a), s.type = "text/javascript", s.src = t, "function" == typeof n && (s.onload = n), e.getElementsByTagName("head")[0].appendChild(s)
        }
    }
}, function(e, t, n) {
    "use strict";

    function s() {
        return [a].concat(Array.prototype.slice.call(arguments)).join(r)
    }

    function i() {
        var e, t = [],
            n = Array.prototype.slice.call(arguments);
        for (e = 0; e < n.length; e++) t.push(s.apply(null, o.isString(n[e]) ? [n[e]] : n[e]));
        return t.join(" ")
    }
    var a = "bbcdotcom",
        r = "-",
        o = n(143);
    e.exports = {
        className: s,
        classNames: i,
        fromConfig: function(e, t) {
            var n = t || window,
                s = [];
            return e.isAsync() && s.push("async"), e.isAdsEnabled() && s.push("ads-enabled"), n.config && n.config.service && s.push(["service", n.config.service]), i.apply(null, s)
        }
    }
}, function(e, t, n) {
    "use strict";
    var s = n(157),
        i = n(158),
        a = function() {
            this.exclusions = [], this.inclusions = [], this.predicates = {
                airline: {
                    rules: {
                        1: {
                            match: {
                                1: ["air", "plane", "flight", "jet", "aviation"],
                                2: ["ash", "bomb", "crash", "dead", "detonat", "disaster", "disrupt", "emergenc", "fire", "incident", "injur", "kill", "missing", "package", "passenger", "crew", "search", "score", "strand", "strike", "volcan", "wreck"]
                            },
                            value: "!c"
                        },
                        2: {
                            match: {
                                1: ["osama", "bin laden", "twin towers", "9/11,september 11", "11 september", "al-qaeda", "al qaeda"]
                            },
                            value: "!c"
                        }
                    }
                },
                violence: {
                    rules: {
                        1: {
                            match: {
                                1: ["riot", "violen", "loot", "unrest", "unruly", "attack", "disturbance", "shot", "disorder", "anarch", "chaotic", "chaos", "unruliness", "mindless", "stealing", "stolen", "thiev", "theft", "arson", "crisis", "disarray", "discord", "lawlessness", "criminal", "vandal", "thug", "engulf", "flame", "burn", "blast", "blood", "dead", "death", "die", "explode", "explosion", "fatal", "funeral", "gun", "injur", "kill", "knife", "mourn", "murder", "stab", "terror", "traged", "tragic", "victim"]
                            },
                            value: "!c"
                        }
                    }
                },
                sensitive: {
                    rules: {
                        1: {
                            match: {
                                1: ["violence", "firearms", "arms", "tobacco", "hygiene", "religio", "crim", "illegal", "politic", "porno", "paedophile", "google", "internet"]
                            },
                            value: "!c"
                        }
                    }
                }
            }, this.setAdExclusion = function(e) {
                if ("undefined" != typeof e && "" !== e) {
                    var t;
                    for (t in e) e.hasOwnProperty(t) && (i.setExclusion(e[t]), s.set("excl_cat", e.join(",")));
                    s.set("!c", e.join(","))
                }
            }
        };
    a.prototype.getExclusions = function() {
        return this.exclusions
    }, a.prototype.getInclusions = function() {
        return this.inclusions
    }, a.prototype.set = function(e) {
        var t, n, s, i, a;
        e = e.toLowerCase();
        for (s in this.predicates)
            for (t in this.predicates[s].rules) {
                i = 0, a = 0;
                for (n in this.predicates[s].rules[t].match) {
                    i++;
                    var r = new RegExp(this.predicates[s].rules[t].match[n].join("|"));
                    r.test(e) && a++
                }
                0 !== a && i === a && ("!c" === this.predicates[s].rules[t].value ? this.exclusions.push(s) : this.inclusions.push(s))
            }
        return this.setAdExclusion(this.exclusions), this
    }, e.exports = a
}, function(e, t, n) {
    "use strict";
    var s = n(152),
        i = n(143),
        a = {},
        r = !1,
        o = {
            AV: "media_asset",
            INDEX: "index"
        },
        u = function(e) {
            /([0-9]{7,8})$/.test(e.split("?")[0].split("#")[0]) && (a.story_id = RegExp.$1)
        },
        c = function(e) {
            e = e.split("?")[0].split("#")[0], a.ctype = /[0-9]{7,8}$/.test(e) ? "content" : "index"
        },
        l = function(e, t) {
            "undefined" == typeof a.asset_type && (t && "string" == typeof t && o[t] ? a.asset_type = o[t] : (e = e.split("?")[0].split("#")[0], a.asset_type = /[0-9]{7,8}$/.test(e) ? "story" : "index"), /\/(sport|news)\/live\//.test(e) && (a.asset_type = "live_event"))
        },
        d = function(e) {
            var t = e.match(/^(http[s]?:\/\/[a-z0-9\.]*bbc\.(co\.uk|com))(.*)$/);
            if (t) {
                var n;
                n = t[3].replace(/default.stm$|\-|\/|_/g, ""), n.length > 0 && n.length <= 64 ? a.referrer = escape(n) : a.referrer = ""
            } else a.referrer = "nonbbc"
        },
        f = function(e) {
            var t = e.match(/^(http[s]?:\/\/)([a-z0-9\.]*)((?:\/(?:\w|-|\+|\.)+)*)(\/.*)$/);
            t ? a.referrer_domain = t[2] : a.referrer_domain = ""
        },
        g = function(e) {
            var t, n, s, i = [];
            if ("undefined" != typeof e.cookie)
                for (s = e.cookie.indexOf("rsi_segs="), a.rsi = [], s >= 0 && (s = e.cookie.indexOf("=", s) + 1, s > 0 && (n = e.cookie.indexOf(";", s), n === -1 && (n = e.cookie.length), i = e.cookie.substring(s, n).split("|"))), t = 0; t < i.length && t < 20; t++) a.rsi.push(i[t])
        },
        p = function(e) {
            var t;
            "worldservice" === s.getSection(0) && (t = e.split("/").pop().split("_"), "undefined" != typeof t[1] && (a.keyword = t[1] + ("undefined" != typeof t[2] ? "_" + t[2] : "")), t.shift(), a.title = t.join("_"))
        },
        b = function(e) {
            var t = e.match(/(((?!(sponsor:)).)*)(sponsor:([^,]+),?(.*))?/);
            null !== t && "undefined" != typeof t[5] && "" !== t[5] && "undefined" != typeof t[6] && "" !== t[6] ? (r = {
                href: t[6],
                title: i.capitalize(t[5])
            }, a.keyword = t[5].replace(/ /g, "")) : a.keyword = e
        };
    e.exports = {
        init: function(e, t, n) {
            a.domain = e.hostname, u(e.href), c(e.href), l(e.href, n), d(t.referrer), f(t.referrer), g(t), p(e.pathname)
        },
        getAll: function() {
            return a
        },
        get: function(e) {
            return "undefined" != typeof a[e] && a[e]
        },
        set: function(e, t) {
            "string" == typeof e && "undefined" != typeof e && "undefined" != typeof t && "" !== t && ("keyword" === e ? b(t) : a[e] = t)
        },
        unset: function(e) {
            "string" == typeof e && "undefined" != typeof e && "undefined" != typeof a[e] && delete a[e]
        },
        setArray: function(e, t) {
            "string" == typeof e && ("undefined" == typeof a[e] && (a[e] = []), "undefined" != typeof e && "undefined" != typeof t && "" !== t && a[e].push(t))
        },
        getKeywordParts: function() {
            return r
        },
        r: function() {
            a = {}, r = !1
        }
    }
}, function(e, t, n) {
    "use strict";
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = n(144)("adverts:dfppRequest"),
        a = n(159),
        r = n(160),
        o = n(157),
        u = n(161),
        c = n(162),
        l = n(163),
        d = n(166),
        f = n(167),
        g = n(150),
        p = n(152),
        b = n(143),
        y = n(169),
        m = n(170),
        _ = n(165),
        v = "bbccom_",
        S = function(e) {
            var t = {
                adSizes: a.getAdCurrentGroupSizes(e)
            };
            return t.domId = r("bbcdotcom.config.isAsync") ? v + e : e, t
        },
        h = function() {
            googletag.cmd.push(function() {
                googletag.pubads().addEventListener("slotRenderEnded", function(e) {
                    bbcdotcom.adverts.dfppRequest.getInitComplete() || bbcdotcom.adverts.dfppRequest.setInitComplete(!0);
                    var t = e.slot.getTargeting("slot");
                    t = t[0].replace("bbccom_", "");
                    var n = u.getAd(t),
                        s = e.slot.getSlotElementId();
                    i(t, s, "isEmpty", e.isEmpty), n && n.isRendered() || (n.injectAdvertisementText(), n.setRendered(!0), n.setEventSize(e.size), n.renderIfReady(), d.trigger("ad:render:complete", s, e.isEmpty), bbcdotcom.adverts.dfppRequest.requestDeferredAds())
                })
            })
        },
        P = function() {
            this.slots = {}, this.deferredSlots = [], this.initComplete = !1
        };
    P.prototype.reset = function() {
        try {
            g.isAdsEnabled() && "undefined" != typeof googletag && (googletag.pubads().clearTargeting(), googletag.pubads().updateCorrelator(), this.init(!0))
        } catch (e) {
            i.error("Unable to reset ads targeting", e)
        }
    }, P.prototype.init = function(e) {
        try {
            g.isAdsEnabled() && "undefined" != typeof googletag && googletag.cmd.push(function() {
                var t, n = o.getAll();
                googletag.pubads().setTargeting("frd", "1"), f.getPreviewUid() && googletag.pubads().setTargeting("uid", f.getPreviewUid());
                for (t in n) n.hasOwnProperty(t) && "" !== n[t] && googletag.pubads().setTargeting(t, n[t]);
                this.setLotameData(), this.setGrapeshotData(), this.setProgrammesData(), googletag.pubads().setTargeting("esi", "0"), "weather" === p.getSection(0) && googletag.pubads().addEventListener("impressionViewable", function(e) {
                    var t, n;
                    "mpu" === e.slot.getSlotElementId() && (t = document.getElementById("bbccom_mpu").children, n = "SCRIPT" === t[t.length - 1].tagName ? t[t.length - 2] : t[t.length - 1], b.addBodyTagClass("bbccom_slot_mpu" + 100 * Math.floor(n.clientHeight / 100)))
                }), googletag.pubads().enableSingleRequest(), r("bbcdotcom.config.isAsync") ? (r("bbcdotcom.config.isDisableInitialLoad") && googletag.pubads().disableInitialLoad(), h()) : googletag.pubads().enableSyncRendering(), "undefined" != typeof e && e === !0 || this.requestAds()
            }.bind(this))
        } catch (e) {
            i.error("Unable to setup ads", e)
        }
    }, P.prototype.requestAds = function() {
        var e = m.isSlotEnabled("interstitial");
        try {
            if (g.isAdsEnabled() && "undefined" != typeof googletag) {
                var t, n, s, a = f.get(),
                    r = u.getAds(),
                    o = Object.keys(this.slots);
                if (0 === u.getAdCount()) return googletag.cmd.push(function() {
                    e && (u.registerAd("interstitial"), googletag.defineOutOfPageSlot(a, "bbccom_interstitial").addService(googletag.pubads()).setTargeting("slot", "interstitial"), o.push("bbccom_interstitial")), googletag.enableServices()
                }), void this.setInitComplete(!0);
                googletag.cmd.push(function() {
                    for (t in r) r.hasOwnProperty(t) && (n = S(r[t].getAdId().replace(v, "")), s = n.adSizes, r[t].isFluid && s.push("fluid"), n && n.domId.indexOf("adsense") === -1 && (n.adSizes.length > 0 || r[t].isFluid) && (this.slots[n.domId] = googletag.defineSlot(a, s, n.domId).addService(googletag.pubads()), this.slots[n.domId].setTargeting("slot", n.domId.replace(v, ""))));
                    e && (u.registerAd("interstitial"), googletag.defineOutOfPageSlot(a, "bbccom_interstitial").addService(googletag.pubads()).setTargeting("slot", "interstitial"), o.push("bbccom_interstitial")), googletag.enableServices(), d.trigger("ads:requested", o)
                }.bind(this))
            }
        } catch (e) {
            i.error("Unable to request ads", e)
        }
    }, P.prototype.refreshAd = function(e) {
        var t = u.getAd(e.replace("bbccom_", ""));
        t ? (googletag.pubads().refresh([this.slots[e]]), t.injectAdvertisementText()) : i.warn("No " + e.replace("bbccom_", "") + " ad found to refresh")
    }, P.prototype.requestDeferredAds = function(e) {
        if (this.deferredSlots.length > 0) {
            for (var t, n, s, r, o, c, g, p = [], b = !!e && e, m = a.getCurrentGroupId(), _ = 0; _ < this.deferredSlots.length; _++) t = this.deferredSlots[_], n = t.domId, s = t.groups, c = t.keyValues, r = t.advertText, o = t.booleanCorrelator || !1, g = u.registerAd(n), 0 === g.getAdId().indexOf("adsense") ? (l.loadGoogleAdsense(), l.renderAd(s), this.deferredSlots[_] = "") : g && !g.hasAnyGroupAlreadyBeenRegistered([s]) && s.indexOf(m) >= 0 ? (i("Registering ad: " + n + " for groups " + s), googletag.cmd.push(function() {
                var e = this,
                    t = f.get(),
                    i = S(g.getAdId().replace(v, "")),
                    a = i.adSizes;
                g.isFluid && a.push("fluid"), this.slots[i.domId] = googletag.defineSlot(t, a, i.domId).addService(googletag.pubads()), this.slots[i.domId].setTargeting("slot", i.domId.replace(v, "")), c && Object.keys(c).forEach(function(t) {
                    t && c[t] && e.slots[i.domId].setTargeting(t, c[t])
                }), p.push(this.slots[i.domId]), y(n, s), r && g.setAdText(r), g.injectAdvertisementText(), this.deferredSlots[_] = "", d.trigger("ads:requested", n)
            }.bind(this))) : i.warn("No " + n.replace("bbccom_", "") + " ad found to register (for groups " + s + " )");
            this.deferredSlots = [], googletag.pubads().refresh(p, {
                changeCorrelator: b
            })
        }
    }, P.prototype.registerAd = function(e, t, n) {
        var a, r, o = !1,
            u = "mpu" === e && 4 === t.length && b.parentHasClass(document.getElementById("bbccom_mpu_1_2_3_4"), "lx-stream") && "undefined" !== _.getGroup(5);
        if ("undefined" != typeof t) u && (document.getElementById("bbccom_mpu_1_2_3_4").id = "bbccom_mpu_1_2_3_4_5", t = [1, 2, 3, 4, 5]), m.isSlotEnabled(e) || m.isLazyLoadedSlot(e) ? this.deferredSlots.push({
            domId: e,
            groups: t.map(Number),
            keyValues: n
        }) : i.warn("Slot " + e + " not enabled");
        else {
            o = "undefined" == typeof(n || {}).mode || n.mode;
            for (var c in e) m.isSlotEnabled(c) ? "object" !== s(e[c]) || e[c] instanceof Array ? this.deferredSlots.push({
                domId: c,
                groups: e[c].map(Number),
                keyValues: n
            }) : (a = e[c].advertText, r = e[c].groups, this.deferredSlots.push({
                domId: c,
                groups: r.map(Number),
                advertText: a,
                keyValues: n
            })) : i.warn("Slot " + c + " not enabled")
        }
        this.initComplete && this.requestDeferredAds(o)
    }, P.prototype.lazyLoadAd = function(e, t) {
        function n() {
            var r = b.getParentElementByClass(a, s);
            r.getBoundingClientRect().top < document.documentElement.clientHeight && (m.isSlotEnabled(e) ? bbcdotcom.registerAd(e, t) : i.warn("Slot " + e + " not enabled"), b.removeEvent(window, "scroll", n))
        }
        var s = bbcdotcom.adverts.adFilter.isLazyLoadedSlot(e),
            a = document.getElementById("bbccom_" + e + "_" + t.join("_"));
        b.addEvent(window, "scroll", n)
    }, P.prototype.registerAdSlots = function(e) {
        function t(e) {
            return e.map(function(e) {
                return parseInt(e, 10)
            }).filter(function(e) {
                return !isNaN(e)
            })
        }

        function n(e) {
            var n, s, i = e.match(/bbccom_(.+?)_([\d_]+)/);
            return i ? (n = i[1], s = i[2].split("_"), {
                slotType: n,
                slotGroups: t(s)
            }) : ["", []]
        }
        var s, i;
        if (document.querySelectorAll) {
            s = document.querySelectorAll(e);
            for (var a = 0; a < s.length; a++) i = n(s[a].id), i.slotType && i.slotGroups.length && this.registerAd(i.slotType, i.slotGroups)
        }
        return !1
    }, P.prototype.setLotameData = function() {
        var e = "ccaud",
            t = "";
        if ("undefined" != typeof ccauds) {
            for (var n = 0; n < ccauds.Profile.Audiences.Audience.length; n++) n > 0 && (t += ","), t += ccauds.Profile.Audiences.Audience[n].abbr;
            googletag.cmd.push(function() {
                googletag.pubads().setTargeting(e, [t])
            })
        }
    }, P.prototype.setGrapeshotData = function() {
        var e = "gs_cat";
        "undefined" != typeof window.gs_channels && "DEFAULT" !== window.gs_channels && (googletag.cmd.push(function() {
            googletag.pubads().setTargeting(e, window.gs_channels)
        }), bbcdotcom.lotame.loadExtra(window.gs_channels.indexOf("+") > 0 ? window.gs_channels.split("+") : window.gs_channels, "grapeshot"))
    }, P.prototype.setProgrammesData = function() {
        var e, t, n;
        if ("programmes" === p.getSection(1)) try {
            n = document.getElementsByClassName("br-masthead__title")[0].children[0], e = n.href.split("/").pop(), t = n.innerText, googletag.cmd.push(function() {
                googletag.pubads().setTargeting("programme", e), googletag.pubads().setTargeting("name", t)
            })
        } catch (e) {}
    }, P.prototype.setKeyValues = function() {
        var e, t = o.getAll();
        if (t)
            for (e in t) t.hasOwnProperty(e) && "" !== t[e] && googletag.pubads().setTargeting(e, t[e])
    }, P.prototype.setInitComplete = function(e) {
        this.initComplete = e, e && (c(), this.requestDeferredAds(!1))
    }, P.prototype.getInitComplete = function() {
        return this.initComplete
    }, P.prototype.setExclusion = function(e) {
        googletag.cmd.push(function() {
            googletag.pubads().setCategoryExclusion(e)
        })
    }, e.exports = new P
}, function(e, t, n) {
    "use strict";

    function s(e) {
        var t, n, s;
        for (t in e)
            if (_.removeHtmlTagClass(m.className("group", t)), ("undefined" == typeof e[t].f || o <= e[t].f) && o >= e[t].s) {
                c = +t, u = e[t], f || g || (f = u, g = c), _.addHtmlTagClass(m.className("group", c));
                for (n in u.slots) {
                    p[n] = [];
                    for (s in u.slots[n]) o >= u.slots[n][s][0] && p[n].push(u.slots[n][s])
                }
            }
    }

    function i(e) {
        var t, n = bbcdotcom.adverts.layout.getAdCurrentGroupSizes(e.getAdName()),
            s = "undefined" == typeof e.adType || "promo" !== e.adType && "feature" !== e.adType ? l : d;
        for (t = 0; t < n.length; t++)
            if (Math.abs(n[t][0] - e.getWidth()) <= s && Math.abs(n[t][1] - e.getCreativeHeight()) <= s) return !0
    }

    function a(e) {
        return e.currentSlotHasGroup(c) && i(e)
    }

    function r() {
        if (b) return void y.debug("layoutDisableReset is set to", !0);
        try {
            var e, t = bbcdotcom.adverts.adRegister.getAds();
            bbcdotcom.adverts.layout.init(bbcdotcom.adverts.breakpoints.getGroups());
            for (e in t) t.hasOwnProperty(e) && (e.indexOf("adsense") > -1 ? bbcdotcom.adverts.adsenseRenderer.reset() : v(t[e]))
        } catch (e) {
            y.error(e)
        }
    }
    var o, u, c, l = 20,
        d = 30,
        f = !1,
        g = !1,
        p = {},
        b = !1,
        y = n(144)("adverts:layout"),
        m = n(155),
        _ = n(143),
        v = function(e) {
            !bbcdotcom.domLoaded || e.isResponsive || e.isFluid || (a(e) ? (y.debug("=== Opening " + e.getAdId() + " for current slot ==="), e.open()) : (y.debug("=== Shutting " + e.getAdId() + " for current slot ==="), e.shut()))
        };
    e.exports = {
        init: function(e) {
            o = document.documentElement.clientWidth, s(e), b || bbcdotcom.addLoadEvent(function() {
                window.addEventListener("resize", _.debounce(r, 500))
            })
        },
        moveAd: function(e, t) {},
        setClientWidth: function(e) {
            o = e
        },
        getClientWidth: function() {
            return o
        },
        getCurrentGroup: function() {
            return u
        },
        getCurrentGroupId: function() {
            return c
        },
        setCurrentGroupId: function(e) {
            c = e
        },
        getCurrentGroupSizes: function() {
            return p
        },
        getAdCurrentGroupSizes: function(e) {
            return "undefined" != typeof p[e] ? p[e] : "undefined" != typeof p[e.slice(0, e.indexOf("_"))] ? p[e.slice(0, e.indexOf("_"))] : []
        },
        overrideGroupSizes: function(e) {
            var t;
            p = [];
            for (t in e) p[t] = e[t]
        },
        disableReset: function() {
            b = !0
        },
        reset: r,
        r: function() {
            b = !1, u = {}, c = 0, p = {}
        }
    }
}, function(e, t) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    e.exports = function(e) {
        var t, s, i = arguments,
            a = e.split("."),
            r = null !== i[1] && "object" === n(i[1]) ? i[1] : window;
        for (t = 0, s = a.length; t < s; t++) {
            if (void 0 === r[a[t]]) {
                if ("string" != typeof i[1] || "create" !== i[1]) return !1;
                r[a[t]] = {}
            } else if ("function" == typeof r[a[t]]) {
                if ("undefined" != typeof i[1] && null !== i[1] && void 0 !== r[a[t]](i[1])) return r[a[t]](i[1]);
                if (void 0 !== r[a[t]]()) return r[a[t]]()
            }
            r = r[a[t]]
        }
        return r
    }
}, function(e, t) {
    "use strict";
    var n, s, i = {},
        a = {
            wallpaper: {
                isResponsive: !0
            },
            interstitial: {
                isResponsive: !0
            },
            native: {
                allowScreenReader: !0,
                isResponsive: !0,
                hasAdText: !1
            },
            native_slice_l: {
                allowScreenReader: !0,
                isResponsive: !0,
                hasAdText: !0
            },
            native_slice_r: {
                allowScreenReader: !0,
                isResponsive: !0,
                hasAdText: !0
            },
            infeed: {
                allowScreenReader: !0,
                isResponsive: !0,
                hasAdText: !1
            },
            infeed_news_home: {
                allowScreenReader: !0,
                isResponsive: !0,
                hasAdText: !0
            },
            infeed_news_index: {
                allowScreenReader: !0,
                isResponsive: !0,
                hasAdText: !0,
                isFluid: !0
            },
            infeed_news_story: {
                allowScreenReader: !0,
                isResponsive: !0,
                hasAdText: !0,
                isFluid: !0
            },
            adsense: {
                adType: "adsense",
                isResponsive: !0,
                isDfppRequest: !1,
                template: "adsense"
            },
            outbrain: {
                adType: "outbrain",
                isResponsive: !0,
                isDfppRequest: !1
            },
            promo: {
                adType: "promo",
                hasAdText: !1
            },
            sponsor: {
                adType: "sponsor",
                isResponsive: !0,
                size: [88, 31]
            },
            sponsorbig: {
                adType: "sponsorbig",
                isResponsive: !0,
                size: [132, 64]
            },
            module: {
                adType: "module",
                isResponsive: !0,
                size: [88, 31]
            },
            module_worldinpictures: {
                adType: "module_worldinpictures",
                isResponsive: !1
            },
            sponsor_section: {
                adType: "sponsor_section",
                isResponsive: !1,
                size: [88, 31]
            },
            ad_feature_rc: {
                adType: "feature",
                hasAdText: !1
            },
            sponsor_banner: {
                adType: "sponsor_banner",
                isResponsive: !1,
                size: [88, 31]
            },
            googlenative: {
                isFluid: !0
            }
        };
    e.exports = {
        setAdFactory: function(e) {
            n = e
        },
        registerAd: function(e) {
            return "" !== e && "undefined" == typeof i[e] && (i[e] = new bbcdotcom.adverts.ad(e), "undefined" != typeof a[e] ? i[e].setConfig(a[e]) : "undefined" != typeof a[e.slice(0, e.indexOf("_"))] && i[e].setConfig(a[e.slice(0, e.indexOf("_"))])), i[e]
        },
        setCurrentAdId: function(e) {
            s = e
        },
        getCurrentAdId: function() {
            return s
        },
        getCurrentAd: function() {
            return bbcdotcom.config.isActive("ads") ? "undefined" != typeof s && i[s] ? i[s] : {
                setBaseContent: function() {},
                show: function() {},
                close: function() {}
            } : {
                show: function() {},
                close: function() {}
            }
        },
        getAd: function(e) {
            if ("undefined" != typeof i[e]) return i[e]
        },
        getAds: function() {
            return i
        },
        getAdCount: function() {
            var e, t = 0;
            for (e in i) i.hasOwnProperty(e) && t++;
            return t
        },
        r: function() {
            i = {}, s = void 0
        }
    }
}, function(e, t) {
    "use strict";
    var n = function() {
        window.bbcdotcom.cmd = window.bbcdotcom.cmd || [], window.bbcdotcom.cmd && setTimeout(function() {
            for (; window.bbcdotcom.cmd.length > 0;) {
                var e = window.bbcdotcom.cmd.shift();
                e()
            }
            Object.defineProperty(window.bbcdotcom.cmd, "push", {
                value: function(e) {
                    "function" == typeof e && e()
                }
            })
        }, 500)
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var s = n(152),
        i = n(164),
        a = n(165),
        r = n(159),
        o = n(143),
        u = n(150),
        c = n(144)("adverts:adsenseRenderer"),
        l = {
            news: {
                dataAdSlot: "6031494774"
            },
            weather: {
                dataAdSlot: "7287144776"
            },
            "weather/0": {
                dataAdSlot: "7949963556"
            },
            sport: {
                dataAdSlot: "4333678371"
            },
            worldservice: {
                arabic: {
                    dataAdSlot: "5810411579"
                },
                hindi: {
                    dataAdSlot: "5131780375"
                },
                mundo: {
                    dataAdSlot: "2597116378"
                },
                portuguese: {
                    dataAdSlot: "1027494774"
                },
                turkce: {
                    dataAdSlot: "1120383176"
                }
            },
            default: {
                dataAdSlot: "2504227975"
            }
        },
        d = function() {
            var e = s.getSection(0),
                t = s.getSection(1).toString(),
                n = u.getWindowLocation();
            return /(adsense=)(\d{10})$/.test(window.location.href) ? {
                dataAdSlot: RegExp.$2
            } : l[e] ? 0 === n.pathname.indexOf("/weather/0") ? (c("Adsense for ", e, "/0 = ", l["weather/0"]), l["weather/0"]) : l[e][t] ? (c("Adsense for ", e, "/", t, " = ", l[e][t].dataAdSlot), l[e][t]) : (c("Adsense for ", e, " = ", l[e].dataAdSlot), l[e]) : (c("No adsense data found for this page (", e, "/", t, "), using default ", l.default.dataAdSlot), l.default)
        },
        f = function() {
            var e;
            return "undefined" == typeof window.adsbygoogle && (e = document.createElement("script"), e.setAttribute("async", "async"), e.setAttribute("src", "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"), document.body.appendChild(e), !0)
        },
        g = function() {
            var e, t, n = r.getCurrentGroupId(),
                s = [];
            !document.getElementById("bbccom_adsense") || document.getElementById("bbccom_adsense") && document.getElementById("bbccom_adsense").getElementsByTagName("iframe").length < 1 || (e = document.getElementById("bbccom_adsense").getElementsByTagName("iframe")[0].width, s = document.getElementById("bbccom_adsense").parentElement.id.replace("bbccom_adsense_", "").split("_"), t = s[s.length - 1], 5 == t && e < a.getGroup(n).f || e < a.getGroup(n).f && n < 4 || n > 3 && e < 301 ? (c.debug("=== Opening adsense for current layout ==="), o.removeTagClass(document.getElementById("bbccom_adsense"), "bbccom_shut"), o.addTagClass(document.getElementById("bbccom_adsense"), "bbccom_visible")) : (c.debug("=== Shutting adsense for current layout ==="), o.removeTagClass(document.getElementById("bbccom_adsense"), "bbccom_visible"), o.addTagClass(document.getElementById("bbccom_adsense"), "bbccom_shut")), document.getElementById("bbccom_adsense").getElementsByTagName("iframe")[0].tabIndex = "-1")
        };
    e.exports = {
        loadGoogleAdsense: f,
        getSettings: d,
        renderAd: function(e) {
            var t, n, s = d(),
                o = "adsByGoogleText",
                u = i.getText(o),
                c = i.getInfoUrl(o),
                l = window.document.documentElement.offsetWidth < a.getGroup(4).s,
                g = r.getCurrentGroupId() < 2 ? 16 : 32,
                p = "bbccom_adsense_" + e.join("_"),
                b = l ? window.document.documentElement.offsetWidth - g + "px" : Math.min(document.getElementById(p).parentElement.offsetWidth, 300) + "px",
                y = 3 === r.getCurrentGroupId() ? "350px" : "430px";
            "undefined" == typeof window.adsbygoogle && f(), 5 == e[e.length - 1] && (b = document.getElementById(p).parentElement.offsetWidth - g + "px", y = "150px"), t = '<h3><a href="' + c + '" tabindex="-1">' + u + '</a></h3><ins class="adsbygoogle" style="display:inline-block;width:' + b + ";height:" + y + ";max-width:" + b + ';" data-ad-client="ca-pub-5087960732420604" data-ad-slot=' + s.dataAdSlot + "></ins>";
            try {
                return document.getElementById(p).className += " bbccom_adsense_slot", document.getElementById(p).getElementsByClassName("bbccom_advert")[0].id = "bbccom_adsense", document.getElementById(p).getElementsByClassName("bbccom_advert")[0].innerHTML = t, n = document.createElement("script"), n.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});", document.body.appendChild(n), !0
            } catch (e) {
                return !1
            }
        },
        reset: g
    }
}, function(e, t, n) {
    "use strict";
    var s = n(143),
        i = n(152),
        a = n(153),
        r = {
            sport: {
                "ultimate-performers": {
                    "*": {
                        inAssociationWithText: "Partnered Content Presented by"
                    }
                },
                "move-like-never-before": {
                    "*": {
                        inAssociationWithText: "Partnered Content Presented by"
                    }
                },
                "home-of-the-english-premier-league": {
                    "*": {
                        inAssociationWithText: "Partnered Content Presented by"
                    }
                }
            }
        },
        o = {
            advertisementText: "advertInfoPageUrl",
            inAssociationWithText: "associationInfoPageUrl",
            sponsoredByText: "associationInfoPageUrl",
            advertisingPartnersText: "associationInfoPageUrl",
            adsByGoogleText: "googleAdsPageUrl"
        },
        u = "advertInfoPageUrl";
    e.exports = {
        getText: function(e) {
            var t, n, o, u = s.cleanArray(i.getSections()),
                c = r;
            for (n = 0, o = u.length; n < o; ++n) {
                var l = u[n];
                if (c.hasOwnProperty(l)) c = c[l];
                else if (!c.hasOwnProperty("*")) {
                    c = !1;
                    break
                }
            }
            return c && c.hasOwnProperty(e) ? t = c[e] : c && c.hasOwnProperty("*") && c["*"].hasOwnProperty(e) && (t = c["*"][e]), t || a.get(e)
        },
        getInfoUrl: function(e) {
            var t = o[e] || u;
            return a.get(t)
        },
        setSectionOverrides: function(e) {
            r = e
        }
    }
}, function(e, t) {
    "use strict";
    var n = {
        0: {
            s: 0,
            f: 319,
            slots: {
                wallpaper: [],
                leaderboard: [],
                mpu: [],
                mpu_middle: [],
                mpu_bottom: [],
                sponsor: [],
                module: [],
                module_worldinpictures: [],
                promo: [],
                ad_feature_rc: [],
                native: [
                    [10, 10]
                ],
                native_slice_l: [
                    [5, 5]
                ],
                native_slice_r: [
                    [5, 5]
                ],
                native_side_2: [],
                native_main_small: [],
                native_main_medium: [],
                native_main_large: [],
                adsense: [],
                adsense_mpu: [],
                parallax: [],
                promo_feature_responsive: [
                    [472, 791]
                ],
                responsive_box_1: [
                    [8, 1]
                ],
                responsive_box_2: [
                    [8, 1]
                ],
                verticalnavbar: [
                    [20, 20]
                ],
                infeed: [
                    [12, 12]
                ],
                platinum: [
                    [88, 31]
                ]
            }
        },
        1: {
            s: 320,
            f: 399,
            slots: {
                wallpaper: [],
                leaderboard: [
                    [320, 50],
                    [300, 50]
                ],
                mpu: [
                    [300, 50],
                    [320, 50],
                    [300, 250]
                ],
                mpu_middle: [
                    [300, 251]
                ],
                mpu_bottom: [
                    [300, 251]
                ],
                sponsor: [
                    [88, 31]
                ],
                sponsorbig: [
                    [132, 64]
                ],
                module: [
                    [88, 31]
                ],
                module_worldinpictures: [
                    [320, 50],
                    [300, 50]
                ],
                promo: [],
                ad_feature_rc: [],
                native: [
                    [10, 10]
                ],
                native_slice_l: [
                    [5, 5]
                ],
                native_slice_r: [
                    [5, 5]
                ],
                native_side_2: [],
                native_main_small: [],
                native_main_medium: [],
                native_main_large: [],
                adsense: [
                    [3, 3]
                ],
                adsense_mpu: [],
                parallax: [],
                promo_feature_responsive: [
                    [472, 791]
                ],
                responsive_box_1: [
                    [8, 1]
                ],
                responsive_box_2: [
                    [8, 1]
                ],
                verticalnavbar: [
                    [20, 20]
                ],
                infeed: [
                    [12, 12]
                ],
                platinum: [
                    [88, 31]
                ]
            }
        },
        2: {
            s: 400,
            f: 599,
            slots: {
                wallpaper: [],
                leaderboard: [
                    [516, 60],
                    [320, 50],
                    [300, 50]
                ],
                mpu: [
                    [516, 60],
                    [300, 50],
                    [320, 50],
                    [300, 250]
                ],
                mpu_middle: [
                    [300, 251]
                ],
                mpu_bottom: [
                    [300, 251]
                ],
                sponsor: [
                    [88, 31]
                ],
                sponsorbig: [
                    [132, 64]
                ],
                module: [
                    [88, 31]
                ],
                module_worldinpictures: [
                    [320, 50],
                    [300, 50]
                ],
                promo: [],
                ad_feature_rc: [],
                native: [
                    [10, 10]
                ],
                native_slice_l: [
                    [5, 5]
                ],
                native_slice_r: [
                    [5, 5]
                ],
                native_side_2: [],
                native_main_small: [],
                native_main_medium: [],
                native_main_large: [],
                adsense: [
                    [3, 3]
                ],
                adsense_mpu: [],
                parallax: [],
                promo_feature_responsive: [
                    [472, 791]
                ],
                responsive_box_1: [
                    [8, 1]
                ],
                responsive_box_2: [
                    [8, 1]
                ],
                verticalnavbar: [
                    [20, 20]
                ],
                infeed: [
                    [12, 12]
                ],
                platinum: [
                    [88, 31]
                ]
            }
        },
        3: {
            s: 600,
            f: 1007,
            slots: {
                wallpaper: [],
                leaderboard: [
                    [516, 60],
                    [728, 90],
                    [970, 300],
                    [970, 250],
                    [970, 90],
                    [970, 66]
                ],
                mpu: [
                    [300, 250],
                    [300, 600]
                ],
                mpu_middle: [
                    [300, 251]
                ],
                mpu_bottom: [
                    [300, 251]
                ],
                sponsor: [
                    [88, 31]
                ],
                sponsorbig: [
                    [132, 64]
                ],
                module: [
                    [88, 31]
                ],
                module_worldinpictures: [
                    [320, 50],
                    [300, 50]
                ],
                promo: [
                    [336, 224]
                ],
                ad_feature_rc: [
                    [336, 136]
                ],
                native: [
                    [10, 10]
                ],
                native_slice_l: [
                    [5, 5]
                ],
                native_slice_r: [
                    [5, 5]
                ],
                native_side_2: [
                    [336, 209]
                ],
                native_main_small: [
                    [384, 258]
                ],
                native_main_medium: [
                    [464, 258]
                ],
                native_main_large: [
                    [624, 258]
                ],
                adsense: [
                    [3, 3]
                ],
                adsense_mpu: [
                    [3, 3]
                ],
                parallax: [],
                promo_feature_responsive: [
                    [472, 791]
                ],
                responsive_box_1: [
                    [8, 1]
                ],
                responsive_box_2: [
                    [8, 1]
                ],
                verticalnavbar: [
                    [20, 20]
                ],
                infeed: [
                    [12, 12]
                ],
                platinum: [
                    [88, 31]
                ]
            }
        },
        4: {
            s: 1008,
            f: 1e4,
            slots: {
                wallpaper: [
                    [1, 1]
                ],
                leaderboard: [
                    [728, 90],
                    [970, 300],
                    [970, 250],
                    [970, 90],
                    [970, 66],
                    [940, 230]
                ],
                mpu: [
                    [300, 250],
                    [300, 600]
                ],
                mpu_middle: [
                    [300, 251]
                ],
                mpu_bottom: [
                    [300, 251]
                ],
                sponsor: [
                    [88, 31]
                ],
                sponsorbig: [
                    [132, 64]
                ],
                module: [
                    [88, 31]
                ],
                module_worldinpictures: [
                    [320, 50],
                    [300, 50]
                ],
                promo: [
                    [336, 224]
                ],
                ad_feature_rc: [
                    [336, 136]
                ],
                native: [
                    [10, 10]
                ],
                native_slice_l: [
                    [5, 5]
                ],
                native_slice_r: [
                    [5, 5]
                ],
                native_side_2: [
                    [336, 209]
                ],
                native_main_small: [
                    [384, 258]
                ],
                native_main_medium: [
                    [464, 258]
                ],
                native_main_large: [
                    [624, 258]
                ],
                adsense: [
                    [3, 3]
                ],
                adsense_mpu: [
                    [3, 3]
                ],
                parallax: [
                    [976, 400]
                ],
                promo_feature_responsive: [
                    [472, 791]
                ],
                responsive_box_1: [
                    [8, 1]
                ],
                responsive_box_2: [
                    [8, 1]
                ],
                verticalnavbar: [
                    [20, 20]
                ],
                infeed: [
                    [12, 12]
                ],
                platinum: [
                    [88, 31]
                ]
            }
        }
    };
    e.exports = {
        setGroups: function(e) {
            n = e
        },
        setGroup: function(e, t) {
            t.s && t.f && t.slots && (n[e] = t, this.setGroupStart(e, t.s), this.setGroupFinish(e, t.f))
        },
        setGroupStart: function(e, t) {
            "undefined" != typeof n[e] && "undefined" != typeof n[e].s && (n[e].s = t), "undefined" != typeof n[e - 1] && "undefined" != typeof n[e - 1].f && (n[e - 1].f = t - 1)
        },
        setGroupFinish: function(e, t) {
            "undefined" != typeof n[e] && "undefined" != typeof n[e].f && (n[e].f = t), "undefined" != typeof n[e + 1] && "undefined" != typeof n[e + 1].f && (n[e + 1].s = t + 1)
        },
        getGroups: function() {
            return n
        },
        getGroup: function(e) {
            return n[e]
        }
    }
}, function(e, t) {
    "use strict";
    var n = {};
    e.exports = {
        on: function(e, t) {
            var s;
            if ("function" != typeof t) throw new TypeError("Event handler must be a function");
            var i = e.split(" ");
            for (s = 0; s < i.length; s++) n[i[s]] = n[i[s]] || [], n[i[s]].push(t);
            return this
        },
        trigger: function(e) {
            var t;
            if (!n.hasOwnProperty(e)) return this;
            for (t = 0; t < n[e].length; t++) n[e][t].apply(this, Array.prototype.slice.call(arguments, 1));
            return this
        },
        off: function(e, t) {
            if (!n.hasOwnProperty(e)) return this;
            if ("undefined" == typeof t) return delete n[e], this;
            for (; n[e].indexOf(t) >= 0;) n[e].splice(n[e].indexOf(t), 1);
            return 0 === n[e].length && delete n[e], this
        },
        clear: function() {
            return n = {}, this
        }
    }
}, function(e, t, n) {
    "use strict";
    var s, i, a = n(157),
        r = n(143),
        o = n(150),
        u = n(168),
        c = {},
        l = "/4817/",
        d = "desktop",
        f = 900,
        g = "bbccom.live.site.news/",
        p = "_default",
        b = "unknown",
        y = "channel",
        m = "sectn",
        _ = "subsect",
        v = g,
        S = !1,
        h = d,
        P = "",
        k = !1,
        A = !1,
        E = {
            live: "bbccom.live.site.news/",
            www: "bbccom.live.site.www/",
            specials: "bbccom.live.site.specialfeatures/",
            preview: "bbccom.preview.site.test/",
            test: "bbccom.test.site.flash/",
            live_mobile: "bbccom.live.site.mobile.news/",
            www_mobile: "bbccom.live.site.mobile.www/",
            specials_mobile: "bbccom.live.site.specialfeatures/",
            preview_mobile: "bbccom.preview.site.mobile.news/",
            test_mobile: "bbccom.qa.site.mobile.news/",
            test_arabic: "bbcws.test.site.mobile.arabic/",
            test_russian: "bbcws.test.site.mobile.russian/",
            live_earth: "bbcearth.com/",
            test_earth: "bbcearth.test.com/",
            test_amp_news: "bbccom.test.amp.news/",
            live_amp_news: "bbccom.live.amp.news/",
            live_sport_app: "BBCSportAppIOS/",
            live_embed: "bbccom.embedplayer/",
            test_embed: "bbccom.test.embedplayer/",
            live_reel: "bbccom.live.site.reel/",
            test_reel: "bbccom.test.site.reel/"
        },
        T = {
            live_desktop: "bbcworldservice.live.site.",
            test_desktop: "bbcworldservice.test.site.",
            live_mobile: "bbcws.live.site.mobile.",
            test_mobile: "bbcws.test.site.mobile."
        },
        w = {
            japanese: "japan"
        },
        x = {
            live: "bbccom.live.site.",
            test: "bbccom.test.site."
        },
        I = {
            "^/sport/football/teams/(liverpool|manchester-city)": "sport_football$1_content",
            "^/news/election/us2016": "news_uscanada_content"
        },
        C = "",
        L = function(e) {
            h = e < f ? "mobile" : "desktop"
        },
        N = function() {
            var e = w[i[0]] || i[0];
            return "zhongwen" !== i[0] && "ukchina" !== i[0] || (e += i[1]), "desktop" === h && "russian" === e && (e = "russia"), e
        },
        O = function() {
            var e = new RegExp("(m.stage.|m.)bbc.co(m|m/|.uk|.uk/)"),
                t = r.isTestEnv(),
                n = r.getUriParamByName("ad-unit", !1),
                a = r.getUriParamByName("site", !1),
                u = r.getUriParamByName("uid", !1);
            if (u && (k = u), !r.isLiveEnv() && n) v = n + "/", A = !0;
            else if ("preview" === a) v = E.preview, A = !0;
            else if (a && "undefined" != typeof E[a]) v = E[a], A = !0;
            else if ("worldservice" === s[0] && "undefined" != typeof i[0]) v = T[(t ? "test" : "live") + "_" + h] + N() + "/";
            else if (/^(earth)$/.test(i[0])) v = t ? E.test_earth : E.live_earth;
            else if (t && "live" !== r.getCookie("ad-unit")) v = "desktop" === h ? E.test : E.test_mobile;
            else if (o.isSportApp()) v = E.live_sport_app;
            else if ("homepage" === s[0]) v = "desktop" === h ? E.www : E.www_mobile;
            else if (/^(autos|capital|culture|future|travel|worklife)$/.test(i[0])) {
                var c = i[0].replace(/autos/, "auto");
                v = x[t ? "test" : "live"] + c + "/"
            } else v = e.test(C.href) ? "desktop" === h ? E.live : E.live_mobile : /(.com|.co.uk|.net)\/specialfeatures\//.test(C.href) ? "desktop" === h ? E.specials : E.specials_mobile : /\/embed$/.test(C.pathname) ? t ? E.test_embed : E.live_embed : /(.com|.co.uk)\/reel/.test(C.href) ? t ? E.test_reel : E.live_reel : "mobile" === h ? E.live_mobile : g
        },
        B = function() {
            var e, t, n, r = p,
                o = "/" + i.join("/");
            if ("undefined" != typeof i && 0 !== i.length && i[0] !== b) {
                for (e = 0; e < 5; e++) i[e] = "undefined" == typeof i[e] ? "" : i[e], s[e] = "undefined" == typeof s[e] ? "" : s[e];
                for (t in I)
                    if (n = new RegExp(t), n.test(o)) {
                        r = I[t].replace("$1", RegExp.$1).replace("$2", RegExp.$2);
                        break
                    }
                r === p && ("homepage" === i[0] ? r = "bbc_homepage_int" : "reel" === i[0] ? r = "" === i[1] ? "reel_homepage" : "reel_other" : "" === i[1] ? (r = i[0] + "_homepage_int", i[1] = "homepage") : r = "news" === i[0] && "world" === s[1] && "" !== s[2] ? i[0] + "_" + s[2] + "_content" : "specialfeatures" === i[0] ? i[1] + "_" + ("" === i[2] ? "home" : i[2]) : "zhongwen" === i[0] || "ukchina" === i[0] ? i[0] + i[1] + "_" + ("" === i[2] ? "home" : i[2]) + "_content" : i[0] + "_" + i[1] + "_content"), a.set(y, i[0]), a.set(m, i[1]), a.set(_, i[2])
            }
            return r.replace(/-/, "")
        },
        D = function(e) {
            if ("undefined" != typeof e && "frameworks_barlesque" === e) {
                var t = this.processZoneData(C.pathname, u.zones);
                P = t.zone
            } else P = "undefined" != typeof e ? e : B()
        };
    e.exports = {
        init: function(e, t, n, a) {
            C = o.getWindowLocation(), s = a, i = n, "number" == typeof e && L(e), O(), D(t)
        },
        get: function() {
            return S === !1 ? l + v + P : A === !0 ? l + v + (S.indexOf("/") !== -1 ? S.split("/")[1] : "/" + p) : l + S + (S.indexOf("/") !== -1 ? "" : "/" + p)
        },
        setUid: function(e) {
            k = e
        },
        setAdUnit: function(e) {
            "undefined" != typeof e && ("undefined" != typeof E[e] && (v = E[e]), /(bbccom\.(test|live)\.site|bbcearth\.com|bbcearth\.test\.com)/.test(e) && (S = e))
        },
        getPreviewUid: function() {
            return k
        },
        getAdUnit1: function() {
            return v.endsWith("/") ? v.substr(0, v.length - 1) : v
        },
        getAdUnits2to9: function() {
            return P
        },
        processZoneData: function(e, t) {
            var n, s;
            if (("undefined" == typeof t.uri || -1 !== e.indexOf(t.uri)) && "undefined" != typeof t.data)
                for (n in t.data)
                    if (c[n] = t.data[n], "undefined" != typeof t.zones)
                        for (s in t.zones) "undefined" != typeof t.zones[s].uri && (e = e.replace(t.uri, "")), this.processZoneData(e, t.zones[s]);
            return c
        },
        r: function() {
            C = "", v = g, P = p, h = d, S = !1, k = !1, A = !1
        }
    }
}, function(e, t) {
    "use strict";
    e.exports = {
        zones: {
            data: {
                uri: "/",
                site: "bbccom.live.site.mobile.news",
                zone: ""
            },
            zones: [{
                uri: "specialfeatures/",
                data: {
                    zone: "news_specialfeatures_content"
                },
                zones: [{
                    uri: "horizonsbusiness",
                    data: {
                        zone: "horizonsbusiness_home"
                    },
                    zones: [{
                        uri: "/megatrend",
                        data: {
                            zone: "horizonsbusiness_other"
                        }
                    }, {
                        uri: "/clips-library",
                        data: {
                            zone: "horizonsbusiness_clips"
                        }
                    }, {
                        uri: "/episodes",
                        data: {
                            zone: "horizonsbusiness_episodes"
                        }
                    }, {
                        uri: "/episode",
                        data: {
                            zone: "horizonsbusiness_episode"
                        }
                    }]
                }]
            }, {
                uri: "wwscripts/",
                data: {
                    zone: "wwscripts_content"
                },
                zones: [{
                    uri: "test/",
                    data: {
                        zone: "wwscripts_test_content"
                    },
                    zones: [{
                        uri: "orb-web-service",
                        data: {
                            zone: "wwscripts_test_orbwebservice"
                        }
                    }]
                }]
            }]
        }
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e, t) {
        var n, s, i, a = bbcdotcom.adverts.layout.getCurrentGroupId();
        window.bbcdotcom && bbcdotcom.ad && bbcdotcom.isActive && bbcdotcom.isActive("ads") && (n = bbcdotcom.ad(e), "undefined" == typeof n || n.hasAnyGroupAlreadyBeenRegistered([t]) || (n.registerSlotGroups(t), t.indexOf(a) >= 0 && (n.setCurrentSlotGroups(t), s = document.getElementById("bbccom_" + n.getAdId() + "_" + t.join("_")), i = s.firstElementChild || s.firstChild, i && (i.id = "bbccom_" + n.getAdId()), bbcdotcom.utils.addTagClass(s, "bbccom_" + n.adType + "_slot"))))
    }
}, function(e, t, n) {
    "use strict";

    function s() {
        var e = a.getWindowLocation(),
            t = r.getSection(0),
            n = r.getSection(1),
            s = r.getSection(2),
            i = t + "|" + n,
            c = ["inread", "infeed_sport_story", "infeed_sport_index", "infeed_sport_fp", "infeed_ctp", "native_ctp"],
            l = {
                worldservice: ["sponsor_section", "mpu_bottom"],
                homepage: ["module_feature-2", "parallax"],
                travel: ["responsive_box_1", "promo_feature_responsive", "promo_feature_1", "promo_feature_2", "promo_feature_3", "ad_feature_rc", "native_responsive"],
                future: ["responsive_box_1", "promo_feature_responsive", "promo_feature_1", "promo_feature_2", "promo_feature_3", "ad_feature_rc"],
                worklife: ["responsive_box_1", "promo_feature_responsive", "promo_feature_1", "promo_feature_2", "promo_feature_3", "ad_feature_rc"],
                earth: ["parallax", "verticalnavbar", "sponsor_section", "responsive_box_1", "promo_feature_1", "promo_feature_2", "promo_feature_3", "ad_feature_rc", "native_side"],
                culture: ["promo_feature_responsive", "promo_feature_1", "promo_feature_2", "promo_feature_3", "ad_feature_rc"],
                capital: ["responsive_box_1", "promo_feature_responsive", "promo_feature_1", "promo_feature_2", "promo_feature_3", "ad_feature_rc"],
                autos: ["parallax", "verticalnavbar", "sponsor_section", "responsive_box_1", "promo_feature_responsive", "promo_feature_1", "promo_feature_2", "promo_feature_3", "ad_feature_rc"],
                news: ["sponsor", "sponsor_section", "sponsor_banner", "module", "native_slice_r"],
                sport: ["sponsor", "sponsor_section", "sponsor_banner", "module"],
                "worldservice|persian": ["adsense"],
                "worldservice|swahili": ["adsense"],
                "news|entertainment-arts": ["adsense", "outbrain", "outbrain_tr_1", "outbrain_ar_5", "outbrain_ar_7", "outbrain_ar_8", "outbrain_ar_9"]
            },
            d = {
                "news|business": ["sponsor", "sponsor_section", "sponsor_banner", "module"],
                "news|technology": ["sponsor", "sponsor_section", "sponsor_banner", "module"],
                "news|resources": ["sponsor", "sponsor_section", "sponsor_banner", "module"],
                "sport|golf": ["sponsor", "sponsor_section", "sponsor_banner", "module"],
                "sport|tennis": ["sponsor", "sponsor_section", "sponsor_banner", "module"],
                "sport|football": ["sponsor", "sponsor_section", "sponsor_banner", "module"],
                "sport|formula1": ["sponsor", "sponsor_section", "sponsor_banner", "module"],
                "sport|equestrian": ["sponsor", "sponsor_section", "sponsor_banner", "module"],
                "sport|horse-racing": ["sponsor", "sponsor_section", "sponsor_banner", "module"],
                "sport|olympics": ["sponsor", "sponsor_section", "sponsor_banner", "module"],
                "sport|move-like-never-before": ["sponsor", "sponsor_section", "sponsor_banner", "module"],
                "sport|home-of-the-english-premier-league": ["sponsor", "sponsor_section", "sponsor_banner", "module"]
            };
        return a.isTlSportStoryEnabled() && (c = c.filter(function(e) {
            return "infeed_sport_story" !== e
        })), a.isTlSportIndexEnabled() && (c = c.filter(function(e) {
            return "infeed_sport_index" !== e
        })), a.isTlSportFpEnabled() && (c = c.filter(function(e) {
            return "infeed_sport_fp" !== e
        })), /testctp/i.test(window.location.href) && (c = c.filter(function(e) {
            return "infeed_ctp" !== e
        }), c = c.filter(function(e) {
            return "native_ctp" !== e
        })), /^\/news\/world\/us_and_canada\/states/.test(e.pathname) && c.push("mpu"), a.isAdsenseEnabled() && 0 !== e.pathname.indexOf("/weather/0") || c.push("adsense"), l[t] && (c = c.concat(l[t])), l[i] && (c = c.concat(l[i])), d[i] && (c = c.filter(function(e) {
            return !d[i].includes(e)
        })), "future/earth/culture/capital/autos/worklife".indexOf(t) !== -1 && (/(\/story\/)(\d{8})(-)/.test(e.pathname) ? c.push("native_responsive") : c.push("native_side")), "news" === t && "STORY" === u.getPageType() || "homepage" === t || c.push("native"), a.isPlatinumEnabled() || c.push("platinum"), ("news|the-reporters" === i || "news|special-reports" === i || "news|world" === i && "radio-tv" === s) && (c.push("infeed_news_index"), c.push("native_slice_l")), (a.isSportApp() || "autos" === t || "japan" === t && "STORY" !== u.getPageType() || "worldservice" === t && ("STORY" !== u.getPageType() || "STORY" === u.getPageType() && "arabic|mundo|portuguese|japanese".indexOf(n) === -1)) && c.push("interstitial"), "VIDEO" === u.getPageType() && "sport" === t && c.push("leaderboard"), o.isTestEnv() && /[?|&]googlenative/.test(window.location.href) && "news" === t && "STORY" === u.getPageType() && (c.push("mpu"), c.push("leaderboard")), o.isTestEnv() && /[?|&]googlenative/.test(window.location.href) && "news" === t && "INDEX" === u.getPageType() && (c.push("mpu"), c.push("leaderboard")), c.join("|")
    }

    function i(e) {
        var t = r.getSection(0),
            n = {
                "homepage|mpu_bottom": "module--secondary-special-features"
            };
        return n[t + "|" + e]
    }
    var a = n(150),
        r = n(152),
        o = n(143),
        u = n(171);
    e.exports = {
        build: function(e) {
            var t = s();
            return a.isSportApp() ? e.filter(function(e) {
                return e.includes("mpu") && !e.includes("mpu_") && !e.includes("_mpu")
            }) : e.filter(function(e) {
                return !t.match(new RegExp(e + "($|\\|)", "g")) && !i(e)
            })
        },
        isSlotEnabled: function(e) {
            var t = s();
            return !t.match(new RegExp(e + "($|\\|)", "g"))
        },
        isLazyLoadedSlot: i
    }
}, function(e, t, n) {
    "use strict";
    var s, i = n(143),
        a = n(150),
        r = n(152),
        o = n(144)("analytics:helper"),
        u = n(160),
        c = n(172),
        l = ["", "", "", ""],
        d = !1,
        f = /^(autos|capital|culture|earth|future|travel)$/,
        g = ["homepage", "news", "sport", "wwscripts", "reel"],
        p = 500,
        b = "na",
        y = function(e) {
            return /^http(|s):\/\/[a-z0-9\-.]+.bbc.co(m|.uk)(\/)?(.*)?/.test(e)
        },
        m = function() {
            var e = /(news|sport)\/live\//;
            return null !== e.exec(r.getSections().join("/"))
        },
        _ = function(e) {
            return /^http(|s):\/\/traffic\.outbrain\.com/.test(e)
        },
        v = function(e) {
            "undefined" == typeof e && (e = ">");
            var t = r.getSections("analytics", !0);
            return l = ["", "", "", ""], l[0] = t[0], "undefined" != typeof t[1] && t[1] && ("news" !== t[0] || 0 !== t[1].indexOf("world") && "specialfeatures" !== t[1] ? "sport" === t[0] ? (l[1] = t[0] + e + t[1], "undefined" != typeof t[2] && t[2] && (l[2] = l[1] + e + t[2], "undefined" != typeof t[4] && t[4] && t[3] && t[2] ? l[3] = l[2] + e + t[3] + e + t[4] : "undefined" != typeof t[3] && t[3] && t[2] && (l[3] = l[2] + e + t[3]))) : "undefined" != typeof t[2] && t[2] ? (l[1] = t[0] + e + t[1], l[2] = l[1] + e + t[2]) : l[1] = t[0] + e + t[1] : "undefined" != typeof t[3] && t[3] && t[2] ? (l[1] = t[0] + e + t[1] + e + t[2], l[2] = l[1] + e + t[3]) : "undefined" != typeof t[2] && t[2] ? l[1] = t[0] + e + t[1] + e + t[2] : l[1] = t[0] + e + t[1]), "" === l[1] && (l[1] = l[0]), "" === l[2] && (l[2] = l[1]), l
        },
        S = function() {
            var e, t = a.getHeadline();
            return "" !== t ? t : "undefined" != typeof window.config && "undefined" != typeof window.config.asset && "undefined" != typeof window.config.asset.headline && "" !== window.config.asset.headline ? window.config.asset.headline : (e = i.getMetaNameContent("Headline"), "" !== e ? e : "na")
        },
        h = function() {
            var e = void 0;
            return "japanese" === w() ? b : "undefined" != typeof window.config && "undefined" != typeof window.config.asset && "undefined" != typeof window.config.asset.edition && "" !== window.config.asset.edition ? window.config.asset.edition : (e = i.getMetaNameContent("CPS_AUDIENCE"), "" !== e ? e : (e = i.getMetaPropertyContent("wwhp-edition"), "" !== e ? e : b))
        },
        P = function(e) {
            e = e || a.getWindowLocation().href;
            var t = r.getSectionsForUri(e, "analytics"),
                n = a.getType();
            switch ("homepage" === t[0] ? n = "INDEX" : "reel" === t[0] && t.length > 1 ? n = "MAP" : m() ? n = "LIVE-EVENT" : a.isStickyPlayerPage() ? n = "VIDEO-STICKY" : "" === n && (window.config && window.config.asset && window.config.asset.type ? n = window.config.asset.type : window.onesport && window.onesport.config && window.onesport.config.omnitureAssetType ? n = window.onesport.config.omnitureAssetType : window.bbc && bbc.fmtj && bbc.fmtj.page && bbc.fmtj.page.assetType ? n = bbc.fmtj.page.assetType : ("sport" === t[0] && "av" === t[1] || "sport" === t[0] && e.indexOf("/sport/av") > 0) && (n = "AV")), n = i.isString(n) ? n.toUpperCase() : "") {
                case "AV":
                case "MAP":
                case "MEDIA_ASSET":
                    n = "VIDEO";
                    break;
                case "STY":
                    n = "STORY";
                    break;
                case "IDX":
                    n = "INDEX";
                    break;
                case "LEP":
                    n = "LIVE-EVENT";
                    break;
                case "LIVE_EVENT":
                    n = "LIVE-EVENT"
            }
            return "STORY" === n && a.isContinuousPlayPage() && (n = "STORY-VIDEO"), n || (/.*(-|\/)(\d{7,9})$/.test(e) ? "STORY" : "INDEX")
        },
        k = function(e) {
            e = e || a.getWindowLocation().href, e = e.split(/[?#]/)[0];
            var t, n = r.getSectionsForUri(e, "analytics"),
                s = P().toLowerCase(),
                i = c(e),
                o = n.join("."),
                u = {
                    ".live": "",
                    "world-africa": "world.africa",
                    "entertainment-arts": "entertainment_and_arts",
                    "us-canada": "us_and_canada",
                    "video-audio": "video_and_audio",
                    "world.radio-tv": "world_radio_and_tv",
                    "blogs-the-papers": "blogs.the-papers",
                    "worldservice.": ""
                };
            switch (s) {
                case "corr_story":
                    s = ".correspondent_story";
                    break;
                case "index":
                    s = "";
                    break;
                case "live-event":
                    s = ".live_coverage";
                    break;
                default:
                    s = "." + s
            }
            for (t in u) o = o.replace(t, u[t]);
            return o.replace(/-/g, "_") + s + (i !== b ? "." + i : "") + ".page"
        },
        A = function(e) {
            return e = e.replace(/"/g, "'"), e = e.replace(/(^bbc (news|sport) \- )/i, ""), e = e.replace(/( \- bbc (news|sport)$)/i, ""), e = e.replace(/( \- BBCニュース$)/i, ""), e.toLowerCase()
        },
        E = function() {
            return "undefined" == typeof a.getWindowDocument().title ? "" : A(a.getWindowDocument().title)
        },
        T = function() {
            var e = a.getWindowLocation().pathname.replace(/\.app$/, "").replace(/news\/av\//, "news/").replace(/^\/weather\/0/, "/weather").replace(/^\/sport\/(uk|world)/, "/sport"),
                t = e.toLowerCase().slice(1);
            "/" === t.slice(-1) && (t = t.slice(0, -1));
            var n = t.split("/"),
                s = void 0,
                i = w();
            return s = 1 === n.length ? "" === i || "wwhp" === i ? "homepage.home" : "news" === i || "weather" === i || "sport" === i || "japanese" === i || "reel" === i ? i + ".home" : E() : "sport" === i && n.length > 1 && "0" === n[1] ? 2 === n.length ? n[0] + ".home" : n[0] + "." + n.slice(2).join(".") : "weather" === i || "sport" === i ? n.join(".").replace(/^news\.(uk|world|us|asia)\.(health)(?!-)/, "news.$2") : "news" === i || "japanese" === i ? k() : "reel" === i ? n.join(".") : E()
        },
        w = function() {
            var e = a.getWindowLocation().pathname.replace(/\.app$/, ""),
                t = e.toLowerCase().slice(1);
            "/" === t.slice(-1) && (t = t.slice(0, -1));
            var n = t.split("/");
            return n.length > 0 ? n[0] : ""
        },
        x = function(e) {
            return /^\{[a-zA-Z0-9\-_]+\}$/.test(e) ? e : encodeURIComponent(e)
        },
        I = function(e) {
            var t = "",
                n = r.getSectionsForUri(e.href, "analytics");
            "undefined" != typeof e.text ? t = e.text : "undefined" != typeof e.innerText && (t = e.innerText);
            var s = n[0];
            s = "unknown" === s ? "external" : s;
            var a = function(e) {
                    return e = i.trim(e).toLowerCase().replace(/[^a-zA-Z0-9]/g, "-"), e.indexOf("----") === -1 ? e : e.substr(0, e.indexOf("----"))
                },
                o = function(e) {
                    var t = e.match(/.*\/[0-9]+\-([^\/]+)/);
                    return null !== t ? t[1] : n.join(">")
                },
                u = "";
            if ("undefined" != typeof e.dataset && "undefined" != typeof e.dataset.track && "" !== e.dataset.track ? u = e.dataset.track : e.getAttribute("data-track") ? u = e.getAttribute("data-track") : "undefined" != typeof e.rev && "" !== e.rev && (u = e.rev), e.className.indexOf("external-link") !== -1) return {
                events: !1,
                promoted: "external",
                linkName: a(t),
                moduleName: !1
            };
            if ("homepage" !== l[0] && "wwscripts" !== l[0] || u.indexOf("|") === -1) {
                if (i.parentHasClass(e, "bbccom_adsense", void 0, !0)) return {
                    events: !1,
                    promoted: "ads",
                    linkName: "adsense",
                    moduleName: "google-adsense"
                };
                if (i.parentHasClass(e, "bbccom_advert", void 0, !0)) return !1;
                if (i.parentHasClass(e, "bbc-st-buttons") || i.parentHasClass(e, "share__tool")) return {
                    events: "event23",
                    promoted: "share-tools",
                    linkName: a(t),
                    moduleName: "share-tools",
                    v: {
                        35: a(t) + "-share",
                        39: l[1] + "-" + E()
                    }
                };
                if ("news" === l[0] && ("news" === l[1] || "news.0" === l[1])) {
                    T = i.getParentElementByAttribute(e, "data-entityid", 10);
                    var c = T ? T.getAttribute("data-entityid") : "",
                        d = c.match(/(.+?)(-|#)(\d)/)[1];
                    return w = c.match(/(\d{1,}$)/)[0], {
                        promoted: s,
                        moduleName: d ? d : b,
                        linkName: a(t),
                        linkPosition: w ? w : b,
                        linkSection: n.join(".")
                    }
                }
                if (("news" === l[0] || "wwscripts" === l[0]) && i.parentHasClass(e, "hyper-promotional-content", 5)) return {
                    events: !1,
                    promoted: "elsewhere",
                    linkName: a(t),
                    moduleName: "elsewhere"
                };
                if (e.href.indexOf("outbrain.com") !== -1) {
                    s = "outbrain-module";
                    var g = i.getParentElementByClass(e, "OUTBRAIN", 5);
                    if ("undefined" != typeof g.dataset.widgetId) {
                        var p, y = parseInt(g.dataset.widgetId.substr(3, 1), 10),
                            m = {
                                "videos-on-news": [1, 5, 6],
                                "elsewhere-on-news": [2, 3, 7],
                                "others-sites": [4, 9],
                                "elsewhere-on-features": [8]
                            };
                        for (p in m)
                            if (m[p].indexOf(y) !== -1) {
                                s = p;
                                break
                            }
                    }
                    return {
                        events: !1,
                        promoted: s,
                        linkName: a(t),
                        moduleName: "outbrain-recommends"
                    }
                }
                if ("reel" === l[0]) {
                    var _ = u.split("|"),
                        v = "reel.home";
                    2 === n.length && (v = "reel.playlists"), n.length > 2 && ("playlist" === n[2] && (v = "reel.playlist"), "video" === n[2] && (v = "reel.video"));
                    var S = a(t);
                    e.getAttribute && e.getAttribute("aria-label") && (S = a(e.getAttribute("aria-label")));
                    var h = "",
                        P = "";
                    return _.length > 1 && (h = _[1]), _.length > 2 && (P = _[2]), {
                        events: !1,
                        promoted: "reel",
                        moduleName: _[0],
                        linkName: S,
                        linkPosition: h,
                        totalLinks: P,
                        section: v
                    }
                }
            } else {
                var k = u.split("|"),
                    A = n[0].match(f) ? o(e.href) : a(t),
                    T = i.getParentElementByClass(e, "module2");
                T === !1 && (T = i.getClosestElementByTagName(e, "section"));
                var w = i.getAnchorPositionWithinElement(T, e.href);
                if (k.length > 0) return {
                    events: !1,
                    promoted: s.toLowerCase(),
                    linkName: A,
                    moduleName: k[0].toLowerCase(),
                    linkType: "string" == typeof k[1] ? k[1].toLowerCase() : b,
                    linkPosition: w !== !1 && 0 !== w ? w : b
                }
            }
            return !1
        },
        C = function() {
            return bbcdotcom.analytics.sscHelper.getAnalyticsLocation()
        },
        L = function(e, t) {
            e = C() + e, o("Tracking URL: ", e);
            var n = document.createElement("img");
            "function" == typeof t && (n.onload = t), "undefined" == typeof window.IS_GNL_JS_UNIT_TEST && (n.src = e)
        },
        N = function(e, t) {
            var n = i.getCookie(e);
            "undefined" != typeof n && n.length > 0 && (o("Delayed link tracking get " + e + " cookie:" + n), L(n), t.http.push(n), i.deleteCookie(e))
        },
        O = function(e, t, n) {
            var s = e(n, "link", void 0, !1);
            i.setCookie(t, s, 60), o("link tracking set " + t + " cookie:" + s)
        },
        B = function(e, t, n, s) {
            var a = !1,
                r = null,
                o = !i.isEventDefaultPrevented(n),
                u = function(e, t, n, s) {
                    clearTimeout(n), t && !a && s && e && i.navigateTo(e), a = !0
                };
            i.cancelEvent(n), e(s, "link", function(e) {
                u(t, n, r, o)
            }), r = setTimeout(function() {
                u(t, n, r, o)
            }, p)
        },
        D = function(e, t, n, s, i) {
            y(n) || _(n) ? O(e, t, i) : B(e, n, s, i)
        },
        R = function(e) {
            var t = r.getSection(0, "analytics", !0);
            t && g.indexOf(t) === -1 || d !== !0 && (s = function(t) {
                var n = i.getClosestElementByTagName(t.target || t.srcElement, "a", !0);
                n !== !1 && e(n, t)
            }, i.addEvent(document.getElementsByTagName("body")[0], "click", s), d = !0)
        },
        U = function() {
            var e = a.getWindowLocation(),
                t = e.href,
                n = u("config.asset.asset_uri");
            return "VIDEO-EMBED" === a.getType() && n && (t = e.protocol + "//" + e.hostname + n), t
        },
        F = function(e) {
            return "radioProgramme" === e ? "audio" : "video"
        };
    e.exports = {
        isBBCUri: y,
        determineSections: v,
        getStoryHeadline: S,
        getPageEdition: h,
        getVertical: w,
        getPageType: P,
        sanitisePageName: A,
        getAnalyticsUri: C,
        getPageName: E,
        getPageNameComScore: T,
        getEmbedPageName: k,
        encodeValue: x,
        getLinkTrackingProperties: I,
        loadTrackingImage: L,
        processDelayTrackingCookie: N,
        trackLink: D,
        applyLinkTrackingToPageElements: R,
        getUriForSections: U,
        getAvFormatFromKind: F,
        r: function() {
            i.removeEvent(document.getElementsByTagName("body")[0], "click", s), d = !1
        }
    }
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        return "undefined" != typeof e && "" !== e || (e = r.default.getWindowLocation().href), /.*[\-\/](\d{7,9})($|(\/[a-z]*))/.test(e) ? RegExp.$1 : o
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(150),
        r = s(a),
        o = "na";
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(174),
        a = s(i),
        r = n(258),
        o = s(r),
        u = n(260),
        c = s(u),
        l = n(259);
    t.default = Object.assign(a.default, {
        streamSense: o.default,
        sscHelper: c.default,
        setMetricOverride: l.setOverride
    }), e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a() {
        var e, t, n = ["startPlaylist", "adRequest", "adManagerLoaded", "startAdvert", "endAdvert", "startProgramme", "startPause", "endPause", "startSeek", "endSeek", "endProgramme", "duration", "uiinfo", "volumeChange", "startPreview", "stopPreview"];
        for (e = 0, t = n.length; e < t; e++) R.prototype[n[e]] = h.default[n[e]].bind(h.default);
        h.default.init()
    }

    function r(e, t, n, s) {
        var i;
        if (!f.default.isAnalyticsEnabled()) return B("did not do tracking because isAnalyticsEnabled=false"), "function" == typeof n && n(!1), !1;
        this.userTrackingCookieValue === !1 && (this.userTrackingCookieValue = (0, E.default)());
        var a = (0, O.getOverrides)(),
            r = "undefined" != typeof e.c2 ? e.c2 : "",
            o = "?c1=" + ("page" === t ? 2 : 22) + "&c2=" + (0, c.default)(a, "c2", r);
        "fia" === a.b_app_type && (a.app_name = e.prod_name, a.name = y.default.getEmbedPageName(), a.section = k.default.getSectionsForUri(f.default.getWindowLocation().href, "analytics").join("%2F"), a.page_type = y.default.getPageType().toLowerCase(), a.cps_asset_id = e.b_article_id), "video" === t && (this.videoEventCounter++, e.ns_st_ec = this.videoEventCounter), e = Object.assign(e, a), e.c7 = f.default.getWindowLocation().href.replace(/\.app$/, ""), e.c8 = f.default.getWindowDocument().title, "undefined" == typeof e.c9 && (e.c9 = document.referrer), e = (0, C.sanitiseKeyValues)(e);
        for (i in e) "c2" !== i && (o += "&" + i + "=" + y.default.encodeValue(e[i]));
        return "undefined" == typeof s || s === !0 ? (this.trackingRequests.http.push(o), y.default.loadTrackingImage(o, n)) : (this.trackingRequests.cookie.push(o), "function" == typeof n && n()), B("comScore doTrack url:" + o), o
    }

    function o(e) {
        if ("undefined" == typeof e) return !1;
        var t, n, s = (0, w.default)(),
            i = {
                promoted: "",
                channel: s[0],
                moduleName: "",
                linkType: "text",
                linkName: "",
                linkPosition: "",
                totalLinks: "",
                extraLinkInfo: "",
                section: s[1],
                pageType: "",
                placement: ""
            },
            a = [];
        for (t in e) "undefined" != typeof i[t] && (i[t] = "undefined" == typeof e[t] || "" === e[t] || e[t] === !1 ? "" : p.default.trim(e[t]));
        for (n in i) a.push(i[n]);
        return a.join("|")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(175),
        c = s(u),
        l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var s = t[n];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }
            return function(t, n, s) {
                return n && e(t.prototype, n), s && e(t, s), t
            }
        }(),
        d = n(150),
        f = s(d),
        g = n(143),
        p = s(g),
        b = n(171),
        y = s(b),
        m = n(144),
        _ = s(m),
        v = n(223),
        S = n(258),
        h = s(S),
        P = n(152),
        k = s(P),
        A = n(257),
        E = s(A),
        T = n(245),
        w = s(T),
        x = n(243),
        I = s(x),
        C = n(235),
        L = n(224),
        N = s(L),
        O = n(259),
        B = (0, _.default)("analytics:comScore"),
        D = "ckpf_gnlcs",
        R = function() {
            function e() {
                i(this, e), this.playlistCount = 0, this.videoEventCounter = 0, this.allowLinkTracking = !0, this.isPlaylistStarted = !1, this.userTrackingCookieValue = !1, this.trackingRequests = {
                    http: [],
                    cookie: []
                }, this.keyValues = {}, this.isScwHandlerUsed = !1
            }
            return l(e, [{
                key: "init",
                value: function() {
                    return this.userTrackingCookieValue = (0, E.default)(), y.default.processDelayTrackingCookie(D, this.trackingRequests), a.call(this), this
                }
            }, {
                key: "getScwForApp",
                value: function() {
                    var e = this;
                    return B('getScwForApp() called to get "scw"'), this.isScwHandlerUsed = !0, {
                        initAppPageTracking: function(t, n, s) {
                            e.setApp({
                                pageName: t
                            })
                        },
                        setAppName: function(t) {
                            e.setApp({
                                appName: t
                            })
                        },
                        setAppVersionNumber: function(t) {
                            e.setApp({
                                appVersion: t
                            })
                        },
                        setAppOs: function(t) {
                            e.setApp({
                                appOs: t
                            })
                        },
                        appTrackPage: function() {
                            e.page()
                        }
                    }
                }
            }, {
                key: "setApp",
                value: function(e) {
                    var t;
                    for (t in e) switch (t) {
                        case "appName":
                            this.keyValues.b_app_name = e[t] + "|app", "horizons" === e[t] && (this.keyValues.b_site_channel = "news");
                            break;
                        case "appVersion":
                            this.keyValues.b_app_imp_ver = e[t];
                            break;
                        case "appOs":
                            this.keyValues.b_app_os = e[t];
                            break;
                        case "pageName":
                            this.keyValues.name = e[t]
                    }
                }
            }, {
                key: "setAllowLinkTracking",
                value: function(e) {
                    this.allowLinkTracking = !!e
                }
            }, {
                key: "getTrackingRequests",
                value: function(e) {
                    if ("undefined" == typeof e || "http" !== e && "cookie" !== e) throw new Error('Invalid type provided to getTrackingRequests() "' + e + '"');
                    return this.trackingRequests[e]
                }
            }, {
                key: "getTrackingValue",
                value: function() {
                    return ""
                }
            }, {
                key: "setUserTrackingCookie",
                value: function(e) {
                    this.userTrackingCookieValue = e
                }
            }, {
                key: "getUserTrackingCookie",
                value: function() {
                    return this.userTrackingCookieValue
                }
            }, {
                key: "r",
                value: function() {
                    this.userTrackingCookieValue = !1, this.allowLinkTracking = !0, this.trackingRequests = {
                        http: [],
                        cookie: []
                    }, h.default.videoEvents = [], this.isPlaylistStarted = !1, p.default.deleteCookie(D), this.videoEventCounter = 0
                }
            }, {
                key: "page",
                value: function(e) {
                    if (!f.default.isComScoreEnabled()) return B("did not do tracking because isComScoreEnabled=false"), !1;
                    try {
                        var t = (0, v.getCoreKeyValues)();
                        t = (0, v.appendPageCoreKeyValues)(t), "undefined" != typeof e && (t.c9 = e), Object.assign(t, this.keyValues), r.call(this, t, "page"), this.allowLinkTracking && y.default.applyLinkTrackingToPageElements(this.link.bind(this))
                    } catch (e) {
                        B.error('bbcdotcom.analytics.page() exception "' + e.message + '"')
                    }
                }
            }, {
                key: "link",
                value: function(e, t) {
                    if (!f.default.isComScoreEnabled()) return !1;
                    if ("undefined" == typeof e || "undefined" == typeof e.href) return !1;
                    var n = (0, v.getCoreKeyValues)(),
                        s = y.default.getLinkTrackingProperties(e),
                        i = e.href;
                    if (!s) return "";
                    var a = new N.default,
                        u = y.default.isBBCUri(i);
                    a.with("pev1", {
                        value: i.substr(0, 255),
                        preRequisite: function() {
                            return u
                        }
                    }), a.with("domainFromUrl", {
                        mapName: "pev1",
                        args: [i],
                        preRequisite: function() {
                            return !u
                        }
                    }), s.pageType = (0, I.default)(e.href).substring(0, 3).replace("|", ""), n = (0, v.appendNonPageCoreKeyValues)(n), n.b_link = o.call(this, s), n = Object.assign(n, a.build()), y.default.trackLink(r.bind(this), D, i, t, n)
                }
            }]), e
        }();
    t.default = new R, e.exports = t.default
}, function(e, t, n) {
    function s(e, t, n) {
        var s = null == e ? void 0 : i(e, t);
        return void 0 === s ? n : s
    }
    var i = n(176);
    e.exports = s
}, function(e, t, n) {
    function s(e, t) {
        t = a(t, e) ? [t] : i(t);
        for (var n = 0, s = t.length; null != e && n < s;) e = e[r(t[n++])];
        return n && n == s ? e : void 0
    }
    var i = n(177),
        a = n(221),
        r = n(222);
    e.exports = s
}, function(e, t, n) {
    function s(e) {
        return i(e) ? e : a(e)
    }
    var i = n(178),
        a = n(179);
    e.exports = s
}, function(e, t) {
    var n = Array.isArray;
    e.exports = n
}, function(e, t, n) {
    var s = n(180),
        i = n(216),
        a = /^\./,
        r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        u = s(function(e) {
            e = i(e);
            var t = [];
            return a.test(e) && t.push(""), e.replace(r, function(e, n, s, i) {
                t.push(s ? i.replace(o, "$1") : n || e)
            }), t
        });
    e.exports = u
}, function(e, t, n) {
    function s(e, t) {
        if ("function" != typeof e || t && "function" != typeof t) throw new TypeError(a);
        var n = function() {
            var s = arguments,
                i = t ? t.apply(this, s) : s[0],
                a = n.cache;
            if (a.has(i)) return a.get(i);
            var r = e.apply(this, s);
            return n.cache = a.set(i, r), r
        };
        return n.cache = new(s.Cache || i), n
    }
    var i = n(181),
        a = "Expected a function";
    s.Cache = i, e.exports = s
}, function(e, t, n) {
    function s(e) {
        var t = -1,
            n = e ? e.length : 0;
        for (this.clear(); ++t < n;) {
            var s = e[t];
            this.set(s[0], s[1])
        }
    }
    var i = n(182),
        a = n(210),
        r = n(213),
        o = n(214),
        u = n(215);
    s.prototype.clear = i, s.prototype.delete = a, s.prototype.get = r, s.prototype.has = o, s.prototype.set = u, e.exports = s
}, function(e, t, n) {
    function s() {
        this.__data__ = {
            hash: new i,
            map: new(r || a),
            string: new i
        }
    }
    var i = n(183),
        a = n(201),
        r = n(209);
    e.exports = s
}, function(e, t, n) {
    function s(e) {
        var t = -1,
            n = e ? e.length : 0;
        for (this.clear(); ++t < n;) {
            var s = e[t];
            this.set(s[0], s[1])
        }
    }
    var i = n(184),
        a = n(197),
        r = n(198),
        o = n(199),
        u = n(200);
    s.prototype.clear = i, s.prototype.delete = a, s.prototype.get = r, s.prototype.has = o, s.prototype.set = u, e.exports = s
}, function(e, t, n) {
    function s() {
        this.__data__ = i ? i(null) : {}
    }
    var i = n(185);
    e.exports = s
}, function(e, t, n) {
    var s = n(186),
        i = s(Object, "create");
    e.exports = i
}, function(e, t, n) {
    function s(e, t) {
        var n = a(e, t);
        return i(n) ? n : void 0
    }
    var i = n(187),
        a = n(196);
    e.exports = s
}, function(e, t, n) {
    function s(e) {
        if (!o(e) || r(e)) return !1;
        var t = i(e) || a(e) ? b : l;
        return t.test(u(e))
    }
    var i = n(188),
        a = n(190),
        r = n(191),
        o = n(189),
        u = n(195),
        c = /[\\^$.*+?()[\]{}|]/g,
        l = /^\[object .+?Constructor\]$/,
        d = Function.prototype,
        f = Object.prototype,
        g = d.toString,
        p = f.hasOwnProperty,
        b = RegExp("^" + g.call(p).replace(c, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = s
}, function(e, t, n) {
    function s(e) {
        var t = i(e) ? u.call(e) : "";
        return t == a || t == r
    }
    var i = n(189),
        a = "[object Function]",
        r = "[object GeneratorFunction]",
        o = Object.prototype,
        u = o.toString;
    e.exports = s
}, function(e, t) {
    function n(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t)
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        var t = !1;
        if (null != e && "function" != typeof e.toString) try {
            t = !!(e + "")
        } catch (e) {}
        return t
    }
    e.exports = n
}, function(e, t, n) {
    function s(e) {
        return !!a && a in e
    }
    var i = n(192),
        a = function() {
            var e = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
    e.exports = s
}, function(e, t, n) {
    var s = n(193),
        i = s["__core-js_shared__"];
    e.exports = i
}, function(e, t, n) {
    var s = n(194),
        i = "object" == typeof self && self && self.Object === Object && self,
        a = s || i || Function("return this")();
    e.exports = a
}, function(e, t) {
    (function(t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.exports = n
    }).call(t, function() {
        return this
    }())
}, function(e, t) {
    function n(e) {
        if (null != e) {
            try {
                return i.call(e)
            } catch (e) {}
            try {
                return e + ""
            } catch (e) {}
        }
        return ""
    }
    var s = Function.prototype,
        i = s.toString;
    e.exports = n
}, function(e, t) {
    function n(e, t) {
        return null == e ? void 0 : e[t]
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        return this.has(e) && delete this.__data__[e]
    }
    e.exports = n
}, function(e, t, n) {
    function s(e) {
        var t = this.__data__;
        if (i) {
            var n = t[e];
            return n === a ? void 0 : n
        }
        return o.call(t, e) ? t[e] : void 0
    }
    var i = n(185),
        a = "__lodash_hash_undefined__",
        r = Object.prototype,
        o = r.hasOwnProperty;
    e.exports = s
}, function(e, t, n) {
    function s(e) {
        var t = this.__data__;
        return i ? void 0 !== t[e] : r.call(t, e)
    }
    var i = n(185),
        a = Object.prototype,
        r = a.hasOwnProperty;
    e.exports = s
}, function(e, t, n) {
    function s(e, t) {
        var n = this.__data__;
        return n[e] = i && void 0 === t ? a : t, this
    }
    var i = n(185),
        a = "__lodash_hash_undefined__";
    e.exports = s
}, function(e, t, n) {
    function s(e) {
        var t = -1,
            n = e ? e.length : 0;
        for (this.clear(); ++t < n;) {
            var s = e[t];
            this.set(s[0], s[1])
        }
    }
    var i = n(202),
        a = n(203),
        r = n(206),
        o = n(207),
        u = n(208);
    s.prototype.clear = i, s.prototype.delete = a, s.prototype.get = r, s.prototype.has = o, s.prototype.set = u, e.exports = s
}, function(e, t) {
    function n() {
        this.__data__ = []
    }
    e.exports = n
}, function(e, t, n) {
    function s(e) {
        var t = this.__data__,
            n = i(t, e);
        if (n < 0) return !1;
        var s = t.length - 1;
        return n == s ? t.pop() : r.call(t, n, 1), !0
    }
    var i = n(204),
        a = Array.prototype,
        r = a.splice;
    e.exports = s
}, function(e, t, n) {
    function s(e, t) {
        for (var n = e.length; n--;)
            if (i(e[n][0], t)) return n;
        return -1
    }
    var i = n(205);
    e.exports = s
}, function(e, t) {
    function n(e, t) {
        return e === t || e !== e && t !== t
    }
    e.exports = n
}, function(e, t, n) {
    function s(e) {
        var t = this.__data__,
            n = i(t, e);
        return n < 0 ? void 0 : t[n][1]
    }
    var i = n(204);
    e.exports = s
}, function(e, t, n) {
    function s(e) {
        return i(this.__data__, e) > -1
    }
    var i = n(204);
    e.exports = s
}, function(e, t, n) {
    function s(e, t) {
        var n = this.__data__,
            s = i(n, e);
        return s < 0 ? n.push([e, t]) : n[s][1] = t, this
    }
    var i = n(204);
    e.exports = s
}, function(e, t, n) {
    var s = n(186),
        i = n(193),
        a = s(i, "Map");
    e.exports = a
}, function(e, t, n) {
    function s(e) {
        return i(this, e).delete(e)
    }
    var i = n(211);
    e.exports = s
}, function(e, t, n) {
    function s(e, t) {
        var n = e.__data__;
        return i(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
    }
    var i = n(212);
    e.exports = s
}, function(e, t) {
    function n(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
    e.exports = n
}, function(e, t, n) {
    function s(e) {
        return i(this, e).get(e)
    }
    var i = n(211);
    e.exports = s
}, function(e, t, n) {
    function s(e) {
        return i(this, e).has(e)
    }
    var i = n(211);
    e.exports = s
}, function(e, t, n) {
    function s(e, t) {
        return i(this, e).set(e, t), this
    }
    var i = n(211);
    e.exports = s
}, function(e, t, n) {
    function s(e) {
        return null == e ? "" : i(e)
    }
    var i = n(217);
    e.exports = s
}, function(e, t, n) {
    function s(e) {
        if ("string" == typeof e) return e;
        if (a(e)) return u ? u.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -r ? "-0" : t
    }
    var i = n(218),
        a = n(219),
        r = 1 / 0,
        o = i ? i.prototype : void 0,
        u = o ? o.toString : void 0;
    e.exports = s
}, function(e, t, n) {
    var s = n(193),
        i = s.Symbol;
    e.exports = i
}, function(e, t, n) {
    function s(e) {
        return "symbol" == typeof e || i(e) && o.call(e) == a
    }
    var i = n(220),
        a = "[object Symbol]",
        r = Object.prototype,
        o = r.toString;
    e.exports = s
}, function(e, t) {
    function n(e) {
        return !!e && "object" == typeof e
    }
    e.exports = n
}, function(e, t, n) {
    function s(e, t) {
        if (i(e)) return !1;
        var n = typeof e;
        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !a(e)) || (o.test(e) || !r.test(e) || null != t && e in Object(t))
    }
    var i = n(178),
        a = n(219),
        r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        o = /^\w*$/;
    e.exports = s
}, function(e, t, n) {
    function s(e) {
        if ("string" == typeof e || i(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -a ? "-0" : t
    }
    var i = n(219),
        a = 1 / 0;
    e.exports = s
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = new c.default;
        t.with("b_imp_src", {
            value: "gnl"
        }).with("b_vs_un", {
            value: "bc"
        }).with("ns_c", {
            value: "UTF-8"
        }), t.with("daxCorp", {
            mapName: "b_daxcorp"
        }).with("adsEnabled", {
            mapName: "b_ad_enabled"
        }).with("appType", {
            mapName: ["b_app_type", "app_type"]
        }).with("isApp", {
            mapName: "b_is_app"
        }).with("referrer", {
            mapName: "b_c9"
        }).with("collection", {
            mapName: "b_collection"
        }).with("edition", {
            mapName: "b_edition"
        }).with("version", {
            mapName: "b_imp_ver"
        }).with("siteCatalystCookieValue", {
            mapName: "b_s_vi"
        }).with("pageName", {
            mapName: ["name", "b_article_title"]
        }).with("analyticsAccountID", {
            mapName: "c2"
        }).with("analyticsSuite", {
            mapName: ["ns_site"]
        }).with("appName", {
            mapName: ["ns_ap_an", "app_name"]
        }).with("partner", {
            mapName: "b_article_partner"
        }).with("license", {
            mapName: "b_article_license"
        });
        var n = (0, g.default)();
        t.with("b_app_name", {
            value: n[0] + "|web"
        }).with("siteChannel", {
            mapName: ["b_site_channel", "bbc_site", "prod_name"],
            args: [n]
        }).with("siteSection", {
            mapName: "b_site_section",
            args: [n]
        }).with("siteSubsection1", {
            mapName: "b_site_subsec1",
            args: [n]
        }).with("siteSubsection2", {
            mapName: "b_site_subsec2",
            args: [n]
        });
        var s = (0, d.default)();
        t.with("ns_alias", {
            preRequisite: function() {
                return s !== !1 && o()
            },
            value: s
        });
        var i = (0, m.default)();
        return t.with("v37", {
            preRequisite: function() {
                return i
            },
            value: i
        }), Object.assign({}, e, t.build())
    }

    function a() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = new c.default,
            n = (0, b.default)(),
            s = n.includes("idx"),
            i = n.includes("liv");
        return t.with("pageType", {
            mapName: "b_page_type",
            value: n
        }), t.with("articleID", {
            mapName: "b_article_id",
            preRequisite: function() {
                return !s
            }
        }).with("articleTitle", {
            mapName: "b_article_title",
            preRequisite: function() {
                return !s && !i
            }
        }).with("articleUpdatedDate", {
            mapName: "b_article_update",
            preRequisite: function() {
                return !s
            },
            args: [!0]
        }).with("articlePublishedDate", {
            mapName: "b_article_date",
            preRequisite: function() {
                return !s
            },
            args: [!0]
        }).with("articleLength", {
            mapName: "b_article_length",
            preRequisite: function() {
                return !s
            }
        }).with("topicNames", {
            mapName: "b_topic_names",
            preRequisite: function() {
                return !s && !i
            }
        }), Object.assign({}, e, t.build())
    }

    function r() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = new c.default;
        return t.with("timestamp", {
            mapName: "ns__t"
        }).with("ns_type", {
            value: "hidden"
        }), Object.assign({}, e, t.build())
    }

    function o() {
        var e, t = navigator.cookieEnabled;
        return t === !1 ? t : (document.cookie = "cookietest=1", e = document.cookie.indexOf("cookietest=") !== -1, document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getCoreKeyValues = i, t.appendPageCoreKeyValues = a, t.appendNonPageCoreKeyValues = r;
    var u = n(224),
        c = s(u),
        l = n(257),
        d = s(l),
        f = n(245),
        g = s(f),
        p = n(243),
        b = s(p),
        y = n(251),
        m = s(y)
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(178),
        o = s(r),
        u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var s = t[n];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }
            return function(t, n, s) {
                return n && e(t.prototype, n), s && e(t, s), t
            }
        }(),
        c = n(225),
        l = s(c),
        d = n(144),
        f = s(d),
        g = (0, f.default)("analytics:metrics:metricsBuilder"),
        p = function() {
            function e() {
                a(this, e), this.metrics = new Map
            }
            return u(e, [{
                key: "with",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.mapName,
                        s = void 0 === n ? null : n,
                        i = t.postProcess,
                        a = void 0 === i ? null : i,
                        r = t.preRequisite,
                        o = void 0 === r ? null : r,
                        u = t.args,
                        c = void 0 === u ? [] : u,
                        l = t.value,
                        d = void 0 === l ? void 0 : l;
                    return e && this.metrics.set(e, {
                        mapName: s,
                        postProcess: a,
                        args: c,
                        preRequisite: o,
                        value: d
                    }), this
                }
            }, {
                key: "getMetric",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = "get" + (e.charAt(0).toUpperCase() + e.slice(1));
                    if (l.default.hasOwnProperty(n)) return l.default[n].apply(l.default, i(t));
                    throw new Error("No metric helper for " + e + " (" + n + ")")
                }
            }, {
                key: "build",
                value: function() {
                    var e = {};
                    return this.metrics.forEach(function(t, n) {
                        try {
                            if (t.preRequisite && !t.preRequisite()) return;
                            var s = void 0;
                            if (s = "undefined" != typeof t.value ? t.value : this.getMetric(n, t.args), t.postProcess && (s = t.postProcess(s)), t.mapName) {
                                var i = t.mapName;
                                (0, o.default)(i) || (i = [i]), i.forEach(function(t) {
                                    e[t] = s
                                })
                            } else e[n] = s
                        } catch (e) {
                            g.warn("Unable to build metric " + n, e)
                        }
                    }.bind(this)), e
                }
            }]), e
        }();
    t.default = p, e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(226),
        a = s(i),
        r = a.default.getAdsEnabled,
        o = a.default.getAnalyticsAccountID,
        u = a.default.getAnalyticsSuite,
        c = a.default.getAppName,
        l = a.default.getAppType,
        d = a.default.getArticleID,
        f = a.default.getArticleLength,
        g = a.default.getArticlePublishedDate,
        p = a.default.getArticleTitle,
        b = a.default.getArticleUpdatedDate,
        y = a.default.getCollection,
        m = a.default.getDaxCorp,
        _ = a.default.getDomainFromUrl,
        v = a.default.getEdition,
        S = a.default.getIsApp,
        h = a.default.getPageName,
        P = a.default.getPageType,
        k = a.default.getReferrer,
        A = a.default.getSiteCatalystCookieValue,
        E = a.default.getSiteChannel,
        T = a.default.getSiteSection,
        w = a.default.getSiteSubsection1,
        x = a.default.getSiteSubsection2,
        I = a.default.getTimestamp,
        C = a.default.getTopicNames,
        L = a.default.getVersion,
        N = a.default.getPartner,
        O = a.default.getLicense;
    t.default = {
        getAdsEnabled: r,
        getAnalyticsAccountID: o,
        getAnalyticsSuite: u,
        getAppName: c,
        getAppType: l,
        getArticleID: d,
        getArticleLength: f,
        getArticlePublishedDate: g,
        getArticleTitle: p,
        getArticleUpdatedDate: b,
        getCollection: y,
        getDaxCorp: m,
        getDomainFromUrl: _,
        getEdition: v,
        getIsApp: S,
        getPageName: h,
        getPageType: P,
        getReferrer: k,
        getSiteCatalystCookieValue: A,
        getSiteChannel: E,
        getSiteSection: T,
        getSiteSubsection1: w,
        getSiteSubsection2: x,
        getTimestamp: I,
        getTopicNames: C,
        getVersion: L,
        getPartner: N,
        getLicense: O
    }, e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(227),
        a = s(i),
        r = n(228),
        o = s(r),
        u = n(229),
        c = s(u),
        l = n(230),
        d = s(l),
        f = n(231),
        g = s(f),
        p = n(172),
        b = s(p),
        y = n(232),
        m = s(y),
        _ = n(233),
        v = s(_),
        S = n(234),
        h = s(S),
        P = n(236),
        k = s(P),
        A = n(237),
        E = s(A),
        T = n(238),
        w = s(T),
        x = n(239),
        I = s(x),
        C = n(240),
        L = s(C),
        N = n(241),
        O = s(N),
        B = n(242),
        D = s(B),
        R = n(243),
        U = s(R),
        F = n(244),
        M = s(F),
        G = n(245),
        j = s(G),
        K = n(246),
        V = s(K),
        W = n(247),
        z = s(W),
        q = n(248),
        H = s(q),
        Y = n(249),
        $ = s(Y),
        J = n(250),
        X = s(J),
        Z = n(251),
        Q = s(Z),
        ee = n(252),
        te = s(ee),
        ne = n(253),
        se = s(ne),
        ie = n(254),
        ae = s(ie),
        re = n(255),
        oe = s(re),
        ue = n(256),
        ce = s(ue),
        le = n(235);
    t.default = {
        getAdsEnabled: a.default,
        getAnalyticsAccountID: o.default,
        getAnalyticsSuite: c.default,
        getAppName: d.default,
        getAppType: g.default,
        getArticleID: b.default,
        getArticleLength: m.default,
        getArticlePublishedDate: v.default,
        getArticleTitle: h.default,
        getArticleUpdatedDate: k.default,
        getCollection: E.default,
        getDaxCorp: w.default,
        getDomainFromUrl: I.default,
        getEdition: L.default,
        getIsApp: O.default,
        getPageName: D.default,
        getPageType: U.default,
        getReferrer: M.default,
        getSectionStrings: j.default,
        getSiteCatalystCookieValue: V.default,
        getSiteChannel: z.default,
        getSiteSection: H.default,
        getSiteSubsection1: $.default,
        getSiteSubsection2: X.default,
        getSyndicatedVideoSource: Q.default,
        getTimestamp: te.default,
        getTopicNames: se.default,
        getVersion: ae.default,
        sanitiseKeyValues: le.sanitiseKeyValues,
        sanitiseLabelValue: le.sanitiseLabelValue,
        sanitisePageName: le.sanitisePageName,
        getPartner: oe.default,
        getLicense: ce.default
    }, e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return r.default.isAdsEnabled() ? 1 : 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(150),
        r = s(a);
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return r.default.getAnalyticsAcctId()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(150),
        r = s(a);
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return r.default.getAnalyticsSuite()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(150),
        r = s(a);
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return r.default.getAppName()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(150),
        r = s(a);
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return r.default.isSportApp() || bbcdotcom.analytics.isScwHandlerUsed ? "mobile-app" : "undefined" != typeof orb && "function" == typeof orb.fig && 1 === orb.fig("mb") || 0 === r.default.getWindowLocation().hostname.search(/m.*.bbc.co/) ? "mobile-web" : "web"
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(150),
        r = s(a);
    e.exports = t.default
}, function(e, t) {
    "use strict";

    function n() {
        if ("undefined" != typeof window.config && "undefined" != typeof window.config.asset && "undefined" != typeof window.config.asset.length && null !== window.config.asset.length) return window.config.asset.length;
        var e = document.getElementById("story-body");
        if ("undefined" != typeof e && null !== e) return s(e);
        var t = document.getElementsByClassName("article");
        if ("undefined" != typeof t && null !== t && 1 === t.length) {
            var n = t[0];
            return s(n)
        }
        var i = document.getElementById("emp-content");
        if ("undefined" != typeof i && null !== i) return s(i);
        var a = document.getElementsByClassName("layout-block-a");
        if ("undefined" != typeof a && null !== a && 1 === a.length) {
            var r = a[0];
            return s(r)
        }
        return null
    }

    function s(e) {
        if ("undefined" == typeof e || null === e) return null;
        try {
            if ("undefined" != typeof e.innerText && null !== e.innerText && "undefined" != typeof e.innerText.length && null !== e.innerText.length) return e.innerText.length;
            if ("undefined" != typeof e.textContent && null !== e.textContent && "undefined" != typeof e.textContent.length && null !== e.textContent.length) return e.textContent.length
        } catch (e) {
            return null
        }
        return null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = n, e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        var t = null,
            n = r.default.getMetaNameContent("DCTERMS.created"),
            s = r.default.getMetaPropertyContent("rnews:datePublished");
        if (window.config && window.config.asset && window.config.asset.first_created && window.config.asset.first_created.date ? t = window.config.asset.first_created.date : "" !== n ? t = n.replace("T", " ").replace("+00:00", "") : "" !== s && (t = s), null === t || 0 === t.length) return null;
        if (t = t.replace(/-/g, "/"), "undefined" != typeof e && e === !0) try {
            return Date.parse(t) / 1e3
        } catch (e) {
            return null
        }
        return t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(143),
        r = s(a);
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return (0, o.sanitiseLabelValue)(r.default.getPageName()).replace(/[\s]/g, "_").replace(/_{2,}/g, "_")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(171),
        r = s(a),
        o = n(235);
    e.exports = t.default
}, function(e, t) {
    "use strict";

    function n(e) {
        return "string" != typeof e ? e : e.toLowerCase().replace(/[&=\/<>]/g, "")
    }

    function s(e) {
        var t = {};
        for (var n in e) e.hasOwnProperty(n) && "" !== e[n] && null !== e[n] && "na" !== e[n] && (t[n] = isNaN(e[n]) ? e[n] : String(e[n]));
        return t
    }

    function i(e) {
        return "string" != typeof e ? e : e.toLowerCase().replace(/[\s]/g, "_").replace(/[&=\/<>+?]/g, "").replace(/_{2,}/g, "_")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.sanitiseLabelValue = n, t.sanitiseKeyValues = s, t.sanitisePageName = i
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = null,
            n = r.default.getMetaNameContent("DCTERMS.modified"),
            s = o();
        if ("undefined" != typeof window.config && "undefined" != typeof window.config.asset && null !== typeof window.config.asset.last_updated && "undefined" != typeof window.config.asset.last_updated && "undefined" != typeof window.config.asset.last_updated.date) t = window.config.asset.last_updated.date;
        else if ("" !== n) t = n.replace("T", " ").replace("+00:00", "");
        else if (s) return s;
        return null === t || 0 === t.length ? null : "undefined" != typeof e && e === !0 ? new Date(t.replace(/\//g, "-").replace(" ", "T")).getTime() / 1e3 : t.replace(/-/g, "/")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(143),
        r = s(a),
        o = function() {
            var e = document.querySelector("time[data-timestamp]");
            if ("undefined" == typeof e || !e || null === e) return null;
            var t = e.getAttribute("data-timestamp");
            return "undefined" != typeof t && t && "" !== t ? t : null
        };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return r.default.get("keyword") !== !1 ? r.default.get("keyword").toLowerCase() : ""
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(157),
        r = s(a);
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return r.default.getDaxEnvironments().join("_")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(150),
        r = s(a);
    e.exports = t.default
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = /http(|s):\/\/([^\/]+)(.*)?/,
            n = t.exec(e);
        return "http" + n[1] + "://" + n[2]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = n, e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return r.default.getPageEdition().toLowerCase()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(171),
        r = s(a);
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return r.default.isSportApp() || bbcdotcom.analytics.isScwHandlerUsed ? 1 : 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(150),
        r = s(a);
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return (0, o.sanitisePageName)(r.default.getPageNameComScore())
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(171),
        r = s(a),
        o = n(235);
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        var t = r.default.getPageType(e).toLowerCase(),
            n = {
                index: "idx|na",
                story: "sty|na",
                "story-video": "sty|vid",
                "live-event": "liv|na",
                video: "map|mps",
                "video-sticky": "vid|sti",
                "video-embed": "vid|emb"
            };
        return "undefined" != typeof n[t] ? n[t] : "na|na"
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(171),
        r = s(a);
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return document.referrer !== r.default.getReferrer() ? r.default.getReferrer().substr(0, 255) : ""
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(150),
        r = s(a);
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return r.default.determineSections(".")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(171),
        r = s(a);
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        var e = r.default.getCookie("s_vi");
        return "undefined" != typeof e ? e : ""
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(143),
        r = s(a);
    e.exports = t.default
}, function(e, t) {
    "use strict";

    function n(e) {
        return e[0]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = n, e.exports = t.default
}, function(e, t) {
    "use strict";

    function n(e) {
        return e[1] === e[0] ? "" : e[1]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = n, e.exports = t.default
}, function(e, t) {
    "use strict";

    function n(e) {
        return e[2] === e[1] ? "" : e[2]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = n, e.exports = t.default
}, function(e, t) {
    "use strict";

    function n(e) {
        return e[3] === e[2] ? "" : e[3]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = n, e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return "VIDEO-EMBED" === r.default.getType() ? "twitter" : null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(150),
        r = s(a);
    e.exports = t.default
}, function(e, t) {
    "use strict";

    function n() {
        return Date.now ? Date.now() : (new Date).getTime()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = n, e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        var e, t = [],
            n = {},
            s = "",
            i = document.querySelectorAll(".tags-list__tags a");
        for (e = 0; e < i.length; e++) s = i[e].innerText.replace(/\s/g, "_").toLowerCase(), void 0 === n[s] && (t.push(s), n[s] = "Topic seen");
        return t.join("|")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(143);
    s(a);
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return r.default.getVersion()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(150),
        r = s(a);
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return r.default.get("partner") !== !1 ? r.default.get("partner").toLowerCase() : ""
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(157),
        r = s(a);
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return r.default.get("license") !== !1 ? r.default.get("license").toLowerCase() : ""
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(157),
        r = s(a);
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        var e = r.default.getCookie(o),
            t = r.default.getCookie(u),
            n = r.default.getCookie(c);
        return "undefined" != typeof n && 0 !== n ? n : "undefined" != typeof t && 0 !== t.length ? t : "undefined" != typeof e && 0 !== e.length && e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = n(143),
        r = s(a),
        o = "ckpf_uid",
        u = "ckpf_sscid",
        c = "ckns_sscid";
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var s = t[n];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }
            return function(t, n, s) {
                return n && e(t.prototype, n), s && e(t, s), t
            }
        }(),
        r = n(144),
        o = s(r),
        u = n(235),
        c = n(223),
        l = n(150),
        d = n(143),
        f = n(171),
        g = (0, o.default)("analytics:comScoreStreaming"),
        p = "AD",
        b = "CONTENT",
        y = "*null",
        m = function() {
            function e() {
                i(this, e), this.sa = null, this.playlistCount = 0, this.contentDuration = "0", this.currentlyPlaying = "", this.isPreview = !1, this.uiInfoLabels = {
                    ns_st_ws: "norm",
                    ns_st_cs: ""
                }, this.volumeLabel = {
                    ns_st_vo: ""
                }, this.volume = "", this.adPlayed = !1
            }
            return a(e, [{
                key: "init",
                value: function() {
                    this.sa = new ns_.StreamingAnalytics({
                        liveEndpointURL: f.getAnalyticsUri()
                    }), g("init()")
                }
            }, {
                key: "notify",
                value: function(e, t) {
                    return g("notify() " + e), l.isComScoreEnabled() ? ("notifyCustomEvent" !== e && (g("playbackSession labels:"), g(this.sa.getPlaybackSession().getLabels()), g("asset labels:"), g(this.sa.getPlaybackSession().getAsset().getLabels())), void("undefined" != typeof t ? "notifyCustomEvent" === e ? (g("custom labels:"), g(t), this.sa[e](0, t)) : this.sa[e](t) : this.sa[e]())) : void g("bbcdotcom.analytics did not do tracking because isComScoreEnabled=false")
                }
            }, {
                key: "startPlaylist",
                value: function(e) {
                    this.currentlyPlaying === p && this.notify("notifyEnd"), this.currentlyPlaying === b && this.notify("notifyEnd", d.secondsToMilliSeconds(e.mediaOffset)), this.currentlyPlaying = "", this.playlistCount++, this.adPlayed = !1;
                    var t = bbcdotcom.utils.isString(e.mediaPlayerName) && e.mediaPlayerName.includes("flash") ? "19" : "2",
                        n = (0, c.getCoreKeyValues)({
                            c1: t,
                            c2: l.getAnalyticsAcctId(),
                            c3: y,
                            c4: y,
                            b_av_action: this._getAVAction(e.videoPlaysAutomatically),
                            ns_st_it: "c",
                            ns_st_mp: e.mediaPlayerName,
                            ns_st_mv: e.bumpVersion,
                            ns_st_cp: "1",
                            b_av_ad: l.isAdsEnabled() ? "1" : "0",
                            b_av_format: f.getAvFormatFromKind(e.kind),
                            b_av_plist: "multi",
                            b_av_method: "stream",
                            b_av_source: "bbc",
                            ns_st_ws: this.uiInfoLabels.ns_st_ws,
                            ns_st_cs: this.uiInfoLabels.ns_st_cs,
                            ns_st_vo: this.volumeLabel.ns_st_vo,
                            b_preview_flag: this.isPreview ? "1" : "0"
                        });
                    n = (0, c.appendPageCoreKeyValues)(n), this.sa.createPlaybackSession(n)
                }
            }, {
                key: "adRequest",
                value: function(e) {
                    this.notify("notifyCustomEvent", {
                        ns_st_ev: "ad_request"
                    })
                }
            }, {
                key: "adManagerLoaded",
                value: function(e) {
                    this.notify("notifyCustomEvent", {
                        ns_st_ev: "ad_loaded"
                    })
                }
            }, {
                key: "startAdvert",
                value: function(e) {
                    var t = (0, u.sanitisePageName)(e.mediaName);
                    this.currentlyPlaying = p, this.adPlayed = !0, this.sa.getPlaybackSession().setAsset({
                        ns_st_br: y,
                        ns_st_ci: "pre-roll",
                        ns_st_cl: e.adLength || "0",
                        ns_st_pu: y,
                        ns_st_pr: t,
                        ns_st_ep: y,
                        ns_st_sn: y,
                        ns_st_en: y,
                        ns_st_ge: y,
                        ns_st_ct: "va11",
                        ns_st_ti: y,
                        ns_st_ia: y,
                        ns_st_ddt: y,
                        ns_st_tdt: y,
                        ns_st_st: y,
                        ns_st_cp: "2",
                        c3: y,
                        c4: y,
                        c6: y,
                        ns_st_ad: "pre-roll"
                    }), this.notify("notifyPlay", 0)
                }
            }, {
                key: "endAdvert",
                value: function(e) {
                    this.notify("notifyEnd")
                }
            }, {
                key: "startProgramme",
                value: function(e) {
                    this.currentlyPlaying = b;
                    var t = (0, u.sanitisePageName)(e.mediaName);
                    this.sa.getPlaybackSession().setAsset({
                        ns_st_br: y,
                        ns_st_ci: t,
                        ns_st_cl: this.contentDuration,
                        ns_st_pu: "bbc",
                        ns_st_pr: t,
                        ns_st_ep: y,
                        ns_st_sn: y,
                        ns_st_en: y,
                        ns_st_ge: y,
                        ns_st_ct: e.isLive ? "vc13" : "vc11",
                        ns_st_ti: y,
                        ns_st_ia: y,
                        ns_st_ddt: y,
                        ns_st_tdt: y,
                        ns_st_st: y,
                        c3: y,
                        c4: y,
                        c6: y,
                        ns_st_pn: "1",
                        ns_st_ce: y,
                        ns_st_li: e.isLive ? "1" : y,
                        ns_st_cp: this.adPlayed ? "2" : "1"
                    }), this.notify("notifyPlay", 0)
                }
            }, {
                key: "endProgramme",
                value: function(e) {
                    this.notify("notifyEnd")
                }
            }, {
                key: "startPause",
                value: function(e) {
                    this.notify("notifyPause", d.secondsToMilliSeconds(e.mediaOffset))
                }
            }, {
                key: "endPause",
                value: function(e) {
                    this.notify("notifyPlay", d.secondsToMilliSeconds(e.mediaOffset))
                }
            }, {
                key: "startSeek",
                value: function(e) {
                    this.notify("notifySeekStart", d.secondsToMilliSeconds(e.mediaOffset))
                }
            }, {
                key: "endSeek",
                value: function() {
                    this.notify("notifyPlay", d.secondsToMilliSeconds(data.mediaOffset))
                }
            }, {
                key: "duration",
                value: function(e) {
                    this.contentDuration = d.secondsToMilliSeconds(e.mediaLength).toString(), this.currentlyPlaying == b && this.sa.getPlaybackSession().getAsset().setLabel("ns_st_cl", this.contentDuration)
                }
            }, {
                key: "uiinfo",
                value: function(e) {
                    this.uiInfoLabels.ns_st_ws = e.uiinfo.isFullscreen === !0 ? "full" : "norm", this.uiInfoLabels.ns_st_cs = e.uiinfo.videoWidth.toString() + "x" + e.uiinfo.videoHeight.toString(), "" !== this.currentlyPlaying && this.sa.getPlaybackSession().setLabels(this.uiInfoLabels)
                }
            }, {
                key: "volumeChange",
                value: function(e) {
                    this.volumeLabel.ns_st_vo = (100 * e.volume).toString(), "" !== this.currentlyPlaying && this.sa.getPlaybackSession().setLabels(this.volumeLabel)
                }
            }, {
                key: "startPreview",
                value: function(e) {
                    this.isPreview = !0
                }
            }, {
                key: "stopPreview",
                value: function(e) {
                    this.isPreview = !1, this.notify("notifyCustomEvent", {
                        ns_st_ev: e.previewStoppedReason
                    }), this.sa.getPlaybackSession().setLabel("b_preview_flag", "0")
                }
            }, {
                key: "_getAVAction",
                value: function(e) {
                    var t;
                    return t = l.isContinuousPlayPage() ? 1 === this.playlistCount ? e ? "cpf" : "cpfm" : "cp" : e ? "ap" : "mp"
                }
            }]), e
        }();
    t.default = new m, e.exports = t.default
}, function(e, t) {
    "use strict";

    function n(e, t) {
        i.set(e, t)
    }

    function s() {
        var e = {};
        return i.forEach(function(t, n) {
            e[n] = t
        }), e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setOverride = n, t.getOverrides = s;
    var i = new Map
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        var e = r.default.getAnalyticsConfig();
        this.sscHost = {
            https: e.SSC.HTTPS
        }, this.comScoreHost = {
            https: e.COMSCORE.HTTPS
        }
    }
    var a = n(150),
        r = s(a),
        o = n(257),
        u = s(o);
    i.prototype.getAnalyticsLocation = function() {
        return this.hasUserTrackingCookie() ? this.getComScoreBaseUrl() : this.getSscBaseUrl()
    }, i.prototype.isSecure = function() {
        return "https:" === r.default.getWindowLocation().protocol
    }, i.prototype.hasUserTrackingCookie = function() {
        return (0, u.default)() !== !1
    }, i.prototype.getComScoreBaseUrl = function() {
        return this.comScoreHost.https
    }, i.prototype.getSscBaseUrl = function() {
        return this.sscHost.https
    }, e.exports = new i
}, function(e, t, n) {
    "use strict";
    var s = n(167),
        i = n(159),
        a = {
            "970x250": {
                dfppId: 185036058,
                adUnit: "preview",
                uid: "5d453f2d6551484b782064357a",
                slots: {
                    leaderboard: [
                        [970, 250]
                    ],
                    mpu: []
                }
            },
            large: {
                dfppId: 114180258,
                adUnit: "preview",
                uid: "224f514079694b3d567a747a22",
                slots: {
                    leaderboard: [
                        [970, 250]
                    ]
                }
            },
            big: {
                dfppId: 185036058,
                adUnit: "preview",
                uid: "5d453f2d6551484b782064357a",
                slots: {
                    leaderboard: [
                        [970, 250]
                    ],
                    mpu: [
                        [300, 600]
                    ]
                }
            },
            standard: {
                dfppId: 193669458,
                adUnit: "preview",
                uid: "3171676f4450464e3d5a3b4746",
                slots: {
                    leaderboard: [
                        [728, 90]
                    ],
                    mpu: [
                        [300, 250]
                    ]
                }
            },
            opaque: {
                dfppId: 193669458,
                adUnit: "preview",
                uid: "3171676f4450464e3d5a3b4746",
                slots: {
                    leaderboard: [
                        [728, 90]
                    ],
                    mpu: [
                        [300, 250]
                    ]
                }
            },
            interstitial: {
                dfppId: 193674858,
                adUnit: "preview",
                uid: "3f784566412e58404762524028",
                slots: {
                    interstitial: [
                        [1, 1]
                    ],
                    leaderboard: [
                        [728, 90]
                    ],
                    mpu: [
                        [300, 250]
                    ]
                }
            },
            "int-uni-iframe": {
                dfppId: 200145378,
                adUnit: "preview",
                uid: "2b614a6426584d2e767e7a2967",
                slots: {
                    interstitial: [
                        [1, 1]
                    ],
                    leaderboard: [
                        [728, 90]
                    ],
                    mpu: [
                        [300, 250]
                    ]
                }
            },
            "int-uni-image": {
                dfppId: 200147178,
                adUnit: "preview",
                uid: "2b5e292758336b7b662b346122",
                slots: {
                    interstitial: [
                        [1, 1]
                    ],
                    leaderboard: [
                        [728, 90]
                    ],
                    mpu: [
                        [300, 250]
                    ]
                }
            },
            empty: {
                dfppId: 114180258,
                adUnit: "preview",
                uid: "537034287a7as704b51655e3227"
            },
            none: {
                dfppId: 114180258,
                adUnit: "preview",
                uid: "537034287a7as704b51655e3227"
            },
            noad: {
                dfppId: 114180258,
                adUnit: "preview",
                uid: "537034287a7as704b51655e3227"
            }
        };
    e.exports = {
        init: function(e) {
            var t;
            /[\\?&]ads=([^&#]*)/.test(e) && "undefined" != typeof a[RegExp.$1] && (t = a[RegExp.$1], t.uid && s.setUid(t.uid), t.adUnit && s.setAdUnit(t.adUnit), t.slots && i.overrideGroupSizes(t.slots))
        }
    }
}, function(e, t) {
    "use strict";

    function n(e) {
        Object.keys(e).forEach(function(t) {
            e[t].forEach(function(e) {
                bbcdotcom.pubsub.off(t, e)
            })
        })
    }

    function s(e, t) {
        var n = Array.isArray(e) ? e : [e];
        n.forEach(function(e) {
            var n = function() {
                var e = Object.freeze(t.apply(null, [i.data].concat(Array.prototype.slice.call(arguments))));
                i.data = e
            };
            bbcdotcom.pubsub.on(e, n), r[e] = (r[e] || []).concat(n)
        })
    }
    var i = {
            data: {}
        },
        a = {
            adsRequested: [],
            adsRendered: [],
            adsEmpty: [],
            adsSlots: [],
            adsShut: []
        },
        r = {};
    i.init = function() {
        i.data = Object.freeze(a), n(r), s("bbcdotcom:init:complete", function(e, t) {
            return Object.assign({}, e, t.stats, {
                implementation: t.stats.isAsync ? "gpt-async" : "gpt"
            })
        }), s("ads:requested", function(e, t) {
            return Object.assign({}, e, {
                adsRequested: t
            })
        }), s("ad:render:complete", function(e, t, n) {
            return e.adsRendered.indexOf(t) >= 0 ? e : Object.assign({}, e, {
                adsRendered: e.adsRendered.concat(t),
                adsEmpty: n ? e.adsEmpty.concat(t) : e.adsEmpty
            })
        }), s("ad:render", function(e, t) {
            return Object.assign({}, e, {
                adsSlots: e.adsSlots.concat(t)
            })
        }), s("ad:render:close", function(e, t) {
            return Object.assign({}, e, {
                adsShut: e.adsShut.concat(t)
            })
        })
    }, e.exports = i
}, function(e, t) {
    "use strict";
    e.exports = function(e) {
        var t = window.onload;
        "function" != typeof window.onload ? window.onload = e : window.onload = function() {
            t && t(), e()
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = {
        ad: n(265),
        adAsyncRenderer: n(267),
        adFactory: n(268),
        adFilter: n(170),
        adRegister: n(161),
        adRenderer: n(269),
        adsenseRenderer: n(163),
        adSuites: n(261),
        adText: n(164),
        adUnit: n(167),
        adUnitWebService: n(168),
        branding: n(266),
        breakpoints: n(165),
        dfppRequest: n(158),
        keyValues: n(157),
        layout: n(159),
        outbrainRenderer: n(270),
        slot: n(271),
        slotAsync: n(272),
        slotDeferred: n(169),
        slotInfinite: n(273)
    }
}, function(e, t, n) {
    "use strict";
    var s = n(266),
        i = n(143),
        a = n(166),
        r = n(159),
        o = n(144)("adverts:ad"),
        u = 30,
        c = "bbccom_",
        l = c + "visible",
        d = c + "shut",
        f = c + "display_none",
        g = {
            default: "advertisementText",
            sponsor_section: "sponsoredByText",
            sponsor: "inAssociationWithText",
            module: "inAssociationWithText",
            partner: "advertisingPartnersText",
            adsense: "adsByGoogleText"
        },
        p = function(e) {
            var t = document.getElementById(e);
            return "undefined" != typeof t && null !== t && t.innerHTML.replace(/\s+/g, "")
        },
        b = function(e) {
            this.adID = e, this.domId = c + e, this.width = null, this.height = null, this.branding = !1, this.preloaded = !1, this.closed = !1, this.rendered = !1, this.eventSize = null, this.contents = {
                base: !1
            }, this.element = null, this.adType = "standard", this.sizeSet = !1, this.isResponsive = !1, this.isFluid = !1, this.allowScreenReader = !1, this.currentSlotGroups = [], this.registeredSlotGroups = [], this.sticky = {
                isSticky: !1
            }
        };
    b.prototype.setClosed = function(e) {
        return this.closed = e, this.closed
    }, b.prototype.close = function() {
        o("close " + this.adID), this.setClosed(!0), this.shut()
    }, b.prototype.isCloseAd = function() {
        return this.closed
    }, b.prototype.setRendered = function(e) {
        return this.rendered = e, this.rendered
    }, b.prototype.isRendered = function() {
        return this.rendered
    }, b.prototype.setConfig = function(e) {
        var t;
        for (t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
        return this
    }, b.prototype.setBaseContent = function() {
        return this.contents.base = p(this.domId), this.contents.base
    }, b.prototype.getBaseContent = function() {
        return this.contents.base
    }, b.prototype.setCurrentSlotGroups = function(e) {
        return o("settings slot groups for " + this.adID + " to " + e), this.currentSlotGroups = e, this
    }, b.prototype.getCurrentSlotGroups = function() {
        return this.currentSlotGroups
    }, b.prototype.registerSlotGroups = function(e) {
        this.registeredSlotGroups.push(e)
    }, b.prototype.getRegisteredSlotGroups = function() {
        return this.registeredSlotGroups
    }, b.prototype.setPreloaded = function(e) {
        return this.preloaded = e, this
    }, b.prototype.isPreloaded = function() {
        return this.preloaded
    }, b.prototype.domElement = function() {
        return this.getDomElement()
    }, b.prototype.getDomElement = function() {
        return this.element || (this.element = document.getElementById(this.domId)), !this.element && this.domId.indexOf("adsense") > -1 && (this.element = document.getElementsByClassName(this.domId)[0]), this.element
    }, b.prototype.getAdvertDimensions = function() {
        var e = document.getElementById(this.domId);
        return {
            width: this.width || (e ? e.clientWidth : 0),
            height: this.height || (e ? e.clientHeight : 0)
        }
    }, b.prototype.setWidth = function(e) {
        return this.width = e, this
    }, b.prototype.getWidth = function() {
        return parseInt(this.getAdvertDimensions().width, 10)
    }, b.prototype.setHeight = function(e) {
        return this.height = e, this
    }, b.prototype.getHeight = function() {
        return parseInt(this.getAdvertDimensions().height, 10)
    }, b.prototype.getCreativeHeight = function() {
        return bbcdotcom.objects("bbcdotcom.config.isAsync") ? this.getHeight() : this.getHeight() - u
    }, b.prototype.setAdDomHeightWidth = function(e, t, n) {
        var s = this.getDomElement();
        if (null !== s && (!this.sizeSet || n)) {
            var i = 35;
            "undefined" != typeof t && (s.style.width = t + "px"), s.style.height = e + i + "px", this.sizeSet = !0
        }
    }, b.prototype.setIframeSize = function(e, t) {
        var n, s = this.getDomElement(),
            i = s.getElementsByTagName("iframe"),
            r = s.getElementsByTagName("ins");
        this.setAdDomHeightWidth(e, t, !0), this.setEventSize([t, e]), i.length >= 1 && "undefined" != typeof i[0] && ("undefined" != typeof t && (i[0].width = t), i[0].height = e);
        for (n in r) "undefined" != typeof r[n].style && ("undefined" != typeof t && (r[n].style.width = t + "px"), r[n].style.height = e + "px");
        return this.openAsync(t, e), a.trigger("ad:resize", this.adID, t, e), a.trigger("ad:resize:" + this.adID, this.adID, t, e), this
    }, b.prototype.setResponsive = function(e) {
        return this.isResponsive = e, i.addTagClass(this.getDomElement(), "bbccom_responsive"), this
    }, b.prototype.getAdTextKey = function() {
        var e;
        for (e in g)
            if (void 0 !== this.adID && "undefined" != typeof this.adID.indexOf && this.adID.indexOf(e) !== -1) return g[e];
        return g.default
    }, b.prototype.getAdText = function() {
        return ("undefined" == typeof this.hasAdText || this.hasAdText !== !1) && ("undefined" == typeof this.advertText ? bbcdotcom.adverts.adText.getText(this.getAdTextKey()) : this.advertText)
    }, b.prototype.setAdText = function(e) {
        0 === this.adID.indexOf("sponsor") && e && /^[A-Za-z '\_-]+$/.test(e) && (this.advertText = e, this.hasAdText = !0)
    }, b.prototype.getAdInfoUrl = function() {
        return bbcdotcom.adverts.adText.getInfoUrl(this.getAdTextKey())
    }, b.prototype.getAdId = function() {
        return this.adID
    }, b.prototype.getAdName = function() {
        return this.getAdId()
    }, b.prototype.show = function() {
        var e = p(this.domId);
        this.element = document.getElementById(this.domId), !e || this.isCloseAd() || bbcdotcom.objects("bbcdotcom.config.isAsync") || (this.setClosed(this.contents.base === e && -1 === e.indexOf("iframe")), this.open()), this.disableScreenReaderForAdContent()
    }, b.prototype.disableScreenReaderForAdContent = function() {
        var e, t, n, s, i, a = document.getElementsByClassName("bbccom_advert");
        for (t = 0; t < a.length; t++) {
            for (i = a[t], n = i.getElementsByTagName("a"), e = 0; e < n.length; e++) n[e].tabIndex = "-1";
            for (s = i.getElementsByTagName("iframe"), e = 0; e < s.length; e++) s[e].tabIndex = "-1"
        }
    }, b.prototype.shut = function() {
        var e = this.getDomElement();
        null !== e && "undefined" != typeof e && e.className.indexOf(d) === -1 && e.className.indexOf(f) === -1 && (0 === e.id.indexOf("bbccom_") && i.addTagClass(e, d), 0 === e.parentElement.id.indexOf("bbccom_") && i.addTagClass(e.parentElement, d), i.removeTagClass(e.parentElement, l), i.removeBodyTagClass(c + this.adID), this.domId.indexOf("mpu") > 0 && (i.removeBodyTagClass(this.domId + "_big"), i.removeBodyTagClass(this.domId + "_small")), a.trigger("ad:close", this.adID), a.trigger("ad:close:" + this.adID, this.adID))
    }, b.prototype.isShut = function() {
        var e = this.getDomElement();
        return e.className.indexOf(d) !== -1
    }, b.prototype.setTitleForSponsorAds = function() {
        this.branding || "sponsor_section" !== this.adID || (this.branding = new s(bbcdotcom.adverts.keyValues.get("keyword")))
    }, b.prototype.open = function() {
        var e = this.getDomElement();
        this.setTitleForSponsorAds(), this.isResponsive && i.addTagClass(e, "bbccom_responsive"), this.isCloseAd() || (i.removeTagClass(e, f), i.removeTagClass(e, d), i.removeTagClass(e.parentElement, d), i.addBodyTagClass(c + this.adID), i.addTagClass(e.parentElement, l), r.getCurrentGroupId() > 2 && this.domId.indexOf("mpu") > 0 && (i.removeBodyTagClass(this.domId + "_big"), i.removeBodyTagClass(this.domId + "_small"), i.addBodyTagClass(this.domId + "_" + (this.height > 251 ? "big" : "small"))), this.disableScreenReaderForAdContent())
    }, b.prototype.openAsync = function(e, t) {
        var n = this.getDomElement();
        this.setWidth(e), this.setHeight(t), this.isResponsive && i.addTagClass(n, "bbccom_responsive"), this.isFluid && i.addTagClass(n, "bbccom_fluid");
        var s = this;
        setTimeout(function() {
            var n = s.isCloseAd();
            o("OpenAsync Timer ad:" + s.getAdId() + ", isCloseAd: " + n), n || (i.removeTagClass(s.element, d), i.removeTagClass(s.element.parentElement, d), i.addTagClass(s.element.parentElement, l)), a.trigger("ad:done", s.adID, e, t), a.trigger("ad:done:" + s.adID, s.adID, e, t), r.reset()
        }, 300), i.removeTagClass(document.getElementById("bbccom_" + this.adID + "_text"), f), i.addBodyTagClass(this.domId), r.getCurrentGroupId() > 2 && this.domId.indexOf("mpu") > 0 && (i.removeBodyTagClass(this.domId + "_big"), i.removeBodyTagClass(this.domId + "_small"), i.addBodyTagClass(this.domId + "_" + (this.height > 251 ? "big" : "small"))), a.trigger("ad:open", this.adID, e, t), a.trigger("ad:open:" + this.adID, this.adID, e, t)
    }, b.prototype.setEventSize = function(e) {
        this.eventSize = e
    }, b.prototype.renderIfReady = function() {
        try {
            null !== this.getDomElement() && this.isRendered() && (this.isCloseAd() || null === this.eventSize || "undefined" == typeof this.eventSize[0] || "undefined" == typeof this.eventSize[1] ? (a.trigger("ad:render:close", this.domId), o("renderIfReady about to call .close()"), this.close()) : setTimeout(function() {
                this.isCloseAd() ? (a.trigger("ad:render:close", this.domId), o("renderIfReady ", this.domId, " isCloseAd true - about to call .close()"), this.close()) : this.openAsync(this.eventSize[0], this.eventSize[1])
            }.bind(this), 200))
        } catch (e) {
            o.error("Failed during renderEndedCallback", e)
        }
    }, b.prototype.setCurrentSlotVisible = function() {
        var e, t, n = this.getRegisteredSlotGroups();
        for (t in n) n.hasOwnProperty(t) && (e = document.getElementById(c + this.adID + "_" + n[t].join("_")), i.removeTagClass(e, l));
        this.currentSlotGroups && this.currentSlotGroups.length > 0 && !this.closed && (e = document.getElementById(c + this.adID + "_" + this.currentSlotGroups.join("_")), i.addTagClass(e, l)), e = null
    }, b.prototype.hasAnyGroupAlreadyBeenRegistered = function(e) {
        var t, n, s;
        for (s = [].concat.apply([], this.registeredSlotGroups).join(), t = 0, n = e.length; t < n; t += 1)
            if (s.indexOf(e[t]) !== -1) return o.warn(e[t] + " has already been registered for " + this.adID), !0;
        return !1
    }, b.prototype.injectAdvertisementText = function() {
        function e() {
            i++;
            var e = this.getDomElement();
            if (e && 0 === e.getElementsByClassName("bbccom_text").length) {
                var a = document.createElement("a");
                a.innerHTML = n, a.href = s, a.className = "bbccom_text", e.insertBefore(a, e.firstChild), clearInterval(t)
            } else i >= 10 && clearInterval(t)
        }
        var t = void 0,
            n = void 0,
            s = void 0,
            i = 0;
        this.adID.includes("interstitial") || this.adID.includes("wallpaper") || (n = this.getAdText(), n && (s = this.getAdInfoUrl(), t = setInterval(e.bind(this), 50)))
    }, b.prototype.hideAdContainer = function() {
        var e = document.getElementById(this.domId);
        if (e) try {
            e.style.display = "block", e.style.height = "0px", e.style.overflow = "hidden", e.style.padding = "0"
        } catch (e) {}
    }, b.prototype.currentSlotHasGroup = function(e) {
        return this.getCurrentSlotGroups().indexOf(e) >= 0
    }, e.exports = b
}, function(e, t, n) {
    "use strict";
    var s = n(152),
        i = n(164),
        a = n(157);
    e.exports = function(e) {
        var t, n = !1,
            r = !1,
            o = {
                firstperson: {
                    title: "First Person",
                    url: "/news/magazine-14633099"
                },
                firstpersonbigdreams: {
                    title: "First Person Big Dreams",
                    url: "/news/magazine-14633099"
                },
                picturethis: {
                    title: "Picture This",
                    url: "/news/magazine-14760628"
                },
                livingonline: {
                    title: "Living Online",
                    url: "/news/magazine-14760626"
                },
                rab: {
                    title: "Running a Business",
                    url: "/news/business-16611973"
                },
                powerofart: {
                    title: "Power of Art",
                    url: "/news/magazine-21459225"
                },
                alteredstates: {
                    title: "Altered States",
                    url: "/news/magazine-14760627"
                },
                uselection: {
                    title: "US Election",
                    url: "/news/world-us-canada-15949569"
                },
                jubilee: {
                    title: "The Diamond Jubilee",
                    url: "/news/uk-17500000",
                    altTitle: "Back to Queen's Diamond Jubilee"
                },
                entrepreneurship: {
                    title: "Entrepreneurship",
                    url: "/news/business-22434141"
                },
                energy: {
                    title: "Energy",
                    url: "/news/business-15521824"
                },
                knowledgeeconomy: {
                    title: "Knowledge economy",
                    url: "/news/business-12686570"
                },
                ceoguru: {
                    title: "CEO Guru",
                    url: "/news/business-20071226"
                },
                theboss: {
                    title: "The Boss",
                    url: "/news/business-22449886"
                },
                makingtime: {
                    title: "Making Time",
                    url: "/news/magazine-24117219"
                },
                thinkingbusiness: {
                    title: "Thinking Business",
                    url: "/news/business-22449887"
                },
                techbiz: {
                    title: "Technology of Business",
                    url: "/news/business-11428889"
                },
                meettheteam: {
                    title: "Meet the team",
                    url: "/news/world-radio-and-tv-23426239"
                },
                "100women": {
                    title: "100 Women",
                    url: "/news/world-24371433"
                },
                businessoftennis: {
                    title: "Business of Tennis",
                    url: "/news/business-25319175"
                },
                nextsiliconvalleys: {
                    title: "The Next Silicon Valleys",
                    url: "/news/technology-25852150"
                },
                businessofgiving: {
                    title: "The Business of Giving",
                    url: "/news/business-19182463"
                },
                howtosucceedin: {
                    title: "How to Succeed In",
                    url: "/news/business-29617902"
                },
                komladumor: {
                    title: "Komla Dumor Award",
                    url: "/news/world-radio-and-tv-30725772"
                },
                lifeofluxury: {
                    title: "Life of Luxury",
                    url: "/news/business-31157861"
                },
                themakingofme: {
                    title: "The Making of Me",
                    url: "/news/business-32660236"
                },
                singaporeat50: {
                    title: "Singapore at 50",
                    url: "/news/world-asia-31522499"
                },
                madeinamerica: {
                    title: "Made in America",
                    url: "/news/business-30533292"
                },
                tomorrowscities: {
                    title: "Tomorrow's Cities",
                    url: "/news/technology-23517670"
                },
                mybusiness: {
                    title: "My Business",
                    url: "/news/business-15870435"
                },
                newentrepreneurs: {
                    title: "The New Entrepreneurs",
                    url: "/news/business-27614930"
                },
                africabeats: {
                    title: "Africa Beats",
                    url: "/news/entertainment-arts-17679490"
                },
                asiabeats: {
                    title: "Asia Beats",
                    url: "/news/entertainment-arts-26040146"
                },
                latambeats: {
                    title: "LatAm Beats",
                    url: "/news/world-latin-america-19523770"
                },
                middleeastbeats: {
                    title: "Middle East Beats",
                    url: "/news/world-middle-east-30555154"
                },
                businessbrain: {
                    title: "Business Brain",
                    url: "/news/business-32339576"
                }
            };
        return function() {
            t = a.getKeywordParts(), "undefined" != typeof o[e] ? (n = o[e].url, r = o[e].title) : t && (n = t.href, r = t.title)
        }(), "news" !== s.getSections()[0] && "worldservice" !== s.getSections()[0] || requirejs(["module/bootstrap", "module/indexTitle"], function(e, t) {
            var s, a = "sponsoredByText",
                o = i.getText(a),
                u = i.getInfoUrl(a);
            "undefined" != typeof t && "undefined" != typeof t.setTitleHtml && t.getIndexTitle().element.length > 0 && (s = n && t.getIndexTitle().element.find("a").length >= 1 ? '<a href="' + n + '">' + r + "</a>" : t.getIndexTitle().element[0].textContent, t.setTitleHtml('<span class="bbccom_index_title">' + s + '</span><a class="bbccom_text" href="' + u + '" tabindex="-1" aria-hidden="true">' + o + "</a>"))
        }), {
            getUrl: function() {
                return n
            },
            getTitle: function() {
                return r
            }
        }
    }
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(166),
        a = s(i);
    t.default = {
        renderAd: function(e, t) {
            var n, s, i, r, o, u;
            t && e.setAdText(t), n = e.getAdText(), r = e.getAdId(), o = "bbccom_" + r, u = document.getElementById(o), a.default.trigger("ad:render", r), n && (s = e.getAdInfoUrl(), i = document.createElement("a"), i.setAttribute("class", "bbccom_text"), i.setAttribute("href", s), i.innerText = n, u && 0 === u.getElementsByClassName("bbccom_text").length && u.prepend(i)), googletag.cmd.push(function() {
                googletag.display(o), e.disableScreenReaderForAdContent(), a.default.trigger("ad:render:complete", r)
            })
        }
    }, e.exports = t.default
}, function(e, t) {
    "use strict";
    e.exports = {
        createAd: function(e) {
            return new bbcdotcom.adverts.ad(e)
        }
    }
}, function(e, t, n) {
    "use strict";
    var s = n(166),
        i = '<a class="bbccom_text" href="{adInfo}">{adText}</a>',
        a = '<script type="text/javascript">bbcdotcom.ad("{adId}").setBaseContent();googletag.display("{adId}");</script>';
    e.exports = {
        renderAd: function(e) {
            var t = "";
            return s.trigger("ad:render", e.adId), e.adText && (t = this.substituteData(i, e)), t += this.substituteData(a, e), document.write(t), t
        },
        substituteData: function(e, t) {
            var n = e.replace(/\{[^{}]+\}/g, function(e) {
                return t[e.replace(/[{}]+/g, "")] || e
            });
            return n
        }
    }
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e.match(/^(https|http):\/\/(pal|m|www).*.bbc.(com|co.uk)/) ? encodeURIComponent(e.replace(/(\?|#).+$/, "")) : encodeURIComponent("http://www.bbc.com/news")
    }

    function i(e, t) {
        var n = a.getWindowLocation(),
            i = s(n.href.replace(/(pal|m).sandbox.dev/, "www"));
        return '<div class="bbccom_outbrain_container bbccom_' + e + '"><div class="OUTBRAIN" data-src="' + i + '" data-widget-id="' + e.replace(/outbrain_/, "").toUpperCase() + '" data-ob-template="' + t + '"></div><script type="text/javascript">    document.write(decodeURI(\'%3Cscript src="//widgets.outbrain.com/outbrain.js" type="text/javascript"%3E%3C/script%3E\'));</script></div>'
    }
    var a = n(150),
        r = n(152),
        o = {
            news: "bbc.com/News",
            sport: "bbc.com/Sport",
            fallback: "bbc.com/News"
        };
    e.exports = {
        sanitiseDataSrc: s,
        renderAd: function(e) {
            var t = r.getSection(0),
                n = o[t] || o.fallback;
            if (!a.isIE7() && a.isOutbrainEnabled()) {
                var s = i(e, n);
                return document.write(s), s
            }
            return !1
        }
    }
}, function(e, t, n) {
    "use strict";
    var s = n(143),
        i = n(150),
        a = n(161),
        r = n(159),
        o = n(269),
        u = n(270),
        c = n(163);
    e.exports = function(e, t, l, d, f) {
        var g = n(144)("adverts:slot");
        try {
            if (i.isActive("ads") && "string" == typeof e && e.length > 0 && "undefined" != typeof t) {
                var p, b, y = a.getAd(e),
                    m = r.getCurrentGroupId(),
                    _ = l ? "bbccom_" + e + "_" + t.join("_") + "_preload" : "bbccom_" + e + "_" + t.join("_"),
                    v = document.getElementById(_),
                    S = "bbccom_" + e;
                if ("undefined" != typeof y && "undefined" != typeof y.getAdId() && (p = {
                        adInfo: y.getAdInfoUrl(),
                        adText: d || y.getAdText(),
                        adDomId: S,
                        adId: e
                    }, !y.hasAnyGroupAlreadyBeenRegistered(t))) {
                    if (y.registerSlotGroups(t), null === v) {
                        if (b = document.getElementsByTagName("script"), f = "undefined" == typeof f ? b[b.length - 1].innerHTML.indexOf("bbcdotcom") === -1 ? b[b.length - 2] : b[b.length - 1] : f, v = s.getParentElementByClass(f, "bbccom_slot"), !v) return g.warn('"bbccom_slot" class not found for this slot "' + _ + '"'), a.setCurrentAdId(void 0), !1;
                        v.id = _
                    }
                    if (v.className += " bbccom_" + y.adType + "_slot", t.indexOf(m) >= 0) return y.setCurrentSlotGroups(t), "undefined" != typeof l && l && y.setPreloaded(!0), a.setCurrentAdId(e), v.children[0].id = S, y.setCurrentSlotVisible(), 0 === e.indexOf("adsense") ? c.renderAd() : 0 === e.indexOf("outbrain") ? u.renderAd(e) : o.renderAd(p);
                    a.setCurrentAdId(!1)
                }
            }
        } catch (e) {
            g.error(e)
        }
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e, t, n) {
        var s, i, a, r = bbcdotcom.adverts.layout.getCurrentGroupId();
        if (window.bbcdotcom && bbcdotcom.ad && bbcdotcom.isActive && bbcdotcom.isActive("ads")) {
            if (bbcdotcom.adverts.adFilter.isLazyLoadedSlot(e)) return void bbcdotcom.lazyLoadAd(e, t, n);
            if (s = bbcdotcom.ad(e), "undefined" != typeof s && !s.hasAnyGroupAlreadyBeenRegistered([t]) && (s.registerSlotGroups(t), t.indexOf(r) >= 0)) return s.setCurrentSlotGroups(t), i = document.getElementById("bbccom_" + e + "_" + t.join("_")), a = i.firstElementChild || i.firstChild, a && (a.id = "bbccom_" + e), bbcdotcom.utils.addTagClass(i, "bbccom_" + s.adType + "_slot"), s.renderIfReady(), 0 === e.indexOf("adsense") ? (bbcdotcom.adverts.adsenseRenderer.loadGoogleAdsense(), bbcdotcom.adverts.adsenseRenderer.renderAd(t)) : 0 === e.indexOf("outbrain") ? (s.open(), bbcdotcom.adverts.outbrainRenderer.renderAd(e)) : bbcdotcom.adverts.adAsyncRenderer.renderAd(s, n)
        }
    }
}, function(e, t, n) {
    "use strict";
    var s = n(144)("adverts:slotInfinite"),
        i = n(274),
        a = function(e, t, n, a) {
            s("Rendering Infinite Slot: ", {
                adId: e,
                groups: t,
                element: n,
                register: a
            });
            var r, o = t.join("_");
            try {
                r = i.getTemplate("adTemplates/infinite-slot").render({
                    adId: e,
                    groups: t,
                    groupsClass: o,
                    register: a
                })
            } catch (e) {
                return s.error("Error rendering the template!"), null
            }
            return n ? (s("Inserting rendered template into DOM element: ", {
                element: n,
                renderedTemplate: r
            }), void i.renderIntoElement(n, r)) : (s("Returned rendered template for: " + e), r)
        };
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function s() {
        this.templates = u.reduce(function(e, t) {
            return e[t] = n(275)("./" + t + ".mustache"), e
        }, {})
    }

    function i(e) {
        if (a(e) === !0) e.parentNode.replaceChild(r(e), e);
        else
            for (var t = 0, n = e.childNodes; t < n.length;) i(n[t++]);
        return e
    }

    function a(e) {
        return "SCRIPT" === e.tagName
    }

    function r(e) {
        var t = document.createElement("script");
        t.text = e.innerHTML;
        for (var n = e.attributes.length - 1; n >= 0; n--) t.setAttribute(e.attributes[n].name, e.attributes[n].value);
        return t
    }
    var o = n(144)("templates:templateFactory"),
        u = ["adTemplates/infinite-slot"];
    s.prototype.getTemplate = function(e) {
        if (!this.templates.hasOwnProperty(e)) throw o.error("Could not find template: " + e), new Error("Could not find template: " + e);
        return this.templates[e]
    }, s.prototype.renderIntoElement = function(e, t) {
        if (!e || !t) throw o.error("Require parameter not supplied", {
            element: e,
            html: t
        }), new Error("Required param not supplied");
        e.innerHTML = t;
        try {
            i(e)
        } catch (e) {
            o.error("Error rendering template into DOM: ", e)
        }
    }, e.exports = new s
}, function(e, t, n) {
    function s(e) {
        return n(i(e))
    }

    function i(e) {
        return a[e] || function() {
            throw new Error("Cannot find module '" + e + "'.")
        }()
    }
    var a = {
        "./adTemplates/infinite-slot.mustache": 276
    };
    s.keys = function() {
        return Object.keys(a)
    }, s.resolve = i, e.exports = s, s.id = 275
}, function(e, t, n) {
    var s = n(277);
    e.exports = function() {
        var e = new s.Template({
            code: function(e, t, n) {
                var s = this;
                return s.b(n = n || ""), s.b('<div id="bbccom_'), s.b(s.v(s.f("adId", e, t, 0))), s.b("_"), s.b(s.v(s.f("groupsClass", e, t, 0))), s.b('" class="bbccom_slot" aria-hidden="true"><div id="bbccom_'), s.b(s.v(s.f("adId", e, t, 0))), s.b('" class="bbccom_advert">'), s.s(s.f("register", e, t, 1), e, t, 0, 142, 353, "{{ }}") && (s.rs(e, t, function(e, t, s) {
                    s.b('<script type="text/javascript">/*<![CDATA[*/'), s.b("\n" + n), s.b("            if (window.bbcdotcom && bbcdotcom.registerAd) {"), s.b("\n" + n), s.b("                bbcdotcom.registerAd('"), s.b(s.v(s.f("adId", e, t, 0))), s.b("', ["), s.b(s.v(s.f("groups", e, t, 0))), s.b("]);"), s.b("\n" + n), s.b("            }"), s.b("\n" + n), s.b("            /*]]>*/</script>")
                }), e.pop()), s.b("</div></div>"), s.fl()
            },
            partials: {},
            subs: {}
        }, '<div id="bbccom_{{adId}}_{{groupsClass}}" class="bbccom_slot" aria-hidden="true"><div id="bbccom_{{adId}}" class="bbccom_advert">{{#register}}<script type="text/javascript">/*<![CDATA[*/\n            if (window.bbcdotcom && bbcdotcom.registerAd) {\n                bbcdotcom.registerAd(\'{{adId}}\', [{{groups}}]);\n            }\n            /*]]>*/</script>{{/register}}</div></div>', s);
        return e
    }()
}, function(e, t, n) {
    ! function(e) {
        function t(e, t, n) {
            var s;
            return t && "object" == typeof t && (void 0 !== t[e] ? s = t[e] : n && t.get && "function" == typeof t.get && (s = t.get(e))), s
        }

        function n(e, t, n, s, i, a) {
            function r() {}

            function o() {}
            r.prototype = e, o.prototype = e.subs;
            var u, c = new r;
            c.subs = new o, c.subsText = {}, c.buf = "", s = s || {}, c.stackSubs = s, c.subsText = a;
            for (u in t) s[u] || (s[u] = t[u]);
            for (u in s) c.subs[u] = s[u];
            i = i || {}, c.stackPartials = i;
            for (u in n) i[u] || (i[u] = n[u]);
            for (u in i) c.partials[u] = i[u];
            return c
        }

        function s(e) {
            return String(null === e || void 0 === e ? "" : e)
        }

        function i(e) {
            return e = s(e), l.test(e) ? e.replace(a, "&amp;").replace(r, "&lt;").replace(o, "&gt;").replace(u, "&#39;").replace(c, "&quot;") : e
        }
        e.Template = function(e, t, n, s) {
            e = e || {}, this.r = e.code || this.r, this.c = n, this.options = s || {}, this.text = t || "", this.partials = e.partials || {}, this.subs = e.subs || {}, this.buf = ""
        }, e.Template.prototype = {
            r: function(e, t, n) {
                return ""
            },
            v: i,
            t: s,
            render: function(e, t, n) {
                return this.ri([e], t || {}, n)
            },
            ri: function(e, t, n) {
                return this.r(e, t, n)
            },
            ep: function(e, t) {
                var s = this.partials[e],
                    i = t[s.name];
                if (s.instance && s.base == i) return s.instance;
                if ("string" == typeof i) {
                    if (!this.c) throw new Error("No compiler available.");
                    i = this.c.compile(i, this.options)
                }
                if (!i) return null;
                if (this.partials[e].base = i, s.subs) {
                    t.stackText || (t.stackText = {});
                    for (key in s.subs) t.stackText[key] || (t.stackText[key] = void 0 !== this.activeSub && t.stackText[this.activeSub] ? t.stackText[this.activeSub] : this.text);
                    i = n(i, s.subs, s.partials, this.stackSubs, this.stackPartials, t.stackText)
                }
                return this.partials[e].instance = i, i
            },
            rp: function(e, t, n, s) {
                var i = this.ep(e, n);
                return i ? i.ri(t, n, s) : ""
            },
            rs: function(e, t, n) {
                var s = e[e.length - 1];
                if (!d(s)) return void n(e, t, this);
                for (var i = 0; i < s.length; i++) e.push(s[i]), n(e, t, this), e.pop()
            },
            s: function(e, t, n, s, i, a, r) {
                var o;
                return (!d(e) || 0 !== e.length) && ("function" == typeof e && (e = this.ms(e, t, n, s, i, a, r)), o = !!e, !s && o && t && t.push("object" == typeof e ? e : t[t.length - 1]), o)
            },
            d: function(e, n, s, i) {
                var a, r = e.split("."),
                    o = this.f(r[0], n, s, i),
                    u = this.options.modelGet,
                    c = null;
                if ("." === e && d(n[n.length - 2])) o = n[n.length - 1];
                else
                    for (var l = 1; l < r.length; l++) a = t(r[l], o, u), void 0 !== a ? (c = o, o = a) : o = "";
                return !(i && !o) && (i || "function" != typeof o || (n.push(c), o = this.mv(o, n, s), n.pop()), o)
            },
            f: function(e, n, s, i) {
                for (var a = !1, r = null, o = !1, u = this.options.modelGet, c = n.length - 1; c >= 0; c--)
                    if (r = n[c], a = t(e, r, u), void 0 !== a) {
                        o = !0;
                        break
                    }
                return o ? (i || "function" != typeof a || (a = this.mv(a, n, s)), a) : !i && ""
            },
            ls: function(e, t, n, i, a) {
                var r = this.options.delimiters;
                return this.options.delimiters = a, this.b(this.ct(s(e.call(t, i)), t, n)), this.options.delimiters = r, !1
            },
            ct: function(e, t, n) {
                if (this.options.disableLambda) throw new Error("Lambda features disabled.");
                return this.c.compile(e, this.options).render(t, n)
            },
            b: function(e) {
                this.buf += e
            },
            fl: function() {
                var e = this.buf;
                return this.buf = "", e
            },
            ms: function(e, t, n, s, i, a, r) {
                var o, u = t[t.length - 1],
                    c = e.call(u);
                return "function" == typeof c ? !!s || (o = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(c, u, n, o.substring(i, a), r)) : c
            },
            mv: function(e, t, n) {
                var i = t[t.length - 1],
                    a = e.call(i);
                return "function" == typeof a ? this.ct(s(a.call(i)), i, n) : a
            },
            sub: function(e, t, n, s) {
                var i = this.subs[e];
                i && (this.activeSub = e, i(t, n, this, s), this.activeSub = !1)
            }
        };
        var a = /&/g,
            r = /</g,
            o = />/g,
            u = /\'/g,
            c = /\"/g,
            l = /[&<>\"\']/,
            d = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
    }(t)
}, function(e, t, n) {
    "use strict";
    var s, i = n(150),
        a = n(161),
        r = n(270),
        o = [],
        u = function() {
            "undefined" != typeof nol_t && (nol_t({
                cid: "au-bbc",
                content: "0",
                server: "secure-au"
            }).record().post(), clearInterval(s))
        },
        c = function() {
            "undefined" != typeof nol_t && (nol_t({
                cid: "nz-bbc",
                content: "0",
                server: "secure-nz"
            }).record().post(), clearInterval(s))
        },
        l = function(e) {
            var t, n;
            t = document.createElement("script"), t.async = !0, t.type = "text/javascript", t.src = e, n = document.getElementsByTagName("body")[0], n.appendChild(t)
        };
    e.exports = {
        write: function() {
            i.isActive("analytics") && (i.isActive("nielsen-au") && (l("https://secure-au.imrworldwide.com/v60.js"), o.push("nielsen_au")), i.isActive("nielsen-nz") && (l("https://secure-nz.imrworldwide.com/v60.js"), o.push("nielsen_nz")), i.isActive("nielsen-us") && (! function() {
                var e = new Image(1, 1);
                e.onerror = e.onload = function() {
                    e.onerror = e.onload = null
                }, e.src = ["https://secure-us.imrworldwide.com/cgi-bin/m?ci=us-804789h&amp;cg=0&amp;cc=1&amp;si=", encodeURI(window.location.href), "&amp;rp=", encodeURI(document.referrer), "&amp;ts=compact&amp;rnd=", (new Date).getTime()].join("")
            }(), o.push("nielsen_us")), function() {
                var e = document.createElement("script");
                e.type = "text/javascript", e.async = !0, e.src = "https://me-ssl.effectivemeasure.net/em.js";
                var t = document.getElementsByTagName("head")[0];
                t.appendChild(e)
            }(), o.push("effective_measure"), "undefined" != typeof a.getAd("outbrain_tr_1") && (r.renderAd("outbrain_tr_1"), o.push("outbrain")))
        },
        postWrite: function() {
            i.isActive("analytics") && (i.isActive("nielsen-au") && (s = setInterval(u, 500), o.push("nielsen_au-postWrite")), i.isActive("nielsen-nz") && (s = setInterval(c, 500), o.push("nielsen_nz-postWrite")))
        },
        getLoaded: function() {
            return o
        },
        r: function() {
            o = []
        }
    }
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i, a = n(150),
        r = s(a),
        o = n(143),
        u = s(o),
        c = n(153),
        l = s(c),
        d = n(152),
        f = s(d),
        g = n(156),
        p = s(g),
        b = n(272),
        y = s(b),
        m = n(273),
        _ = s(m),
        v = n(159),
        S = s(v),
        h = n(271),
        P = s(h),
        k = n(161),
        A = s(k),
        E = n(170),
        T = s(E),
        w = n(167),
        x = s(w),
        I = n(261),
        C = s(I),
        L = n(157),
        N = s(L),
        O = n(165),
        B = s(O),
        D = n(158),
        R = s(D),
        U = n(280),
        F = n(173),
        M = n(144)("adverts:ad"),
        G = {
            slot: function(e, t, n, s, i) {
                return !(!e || !t) && (0, P.default)(e, t, n, s, i)
            },
            asyncSlot: y.default,
            slotAsync: function(e, t, n, s) {
                return !(!e || !t) && (0, y.default)(e, t, s)
            },
            slotInfinite: function(e, t, n, s) {
                return (0, _.default)(e, t, n, s)
            },
            getCurrentGroupId: function() {
                return S.default.getCurrentGroupId()
            },
            receiveMessage: function(e) {
                var t = /(www|m)\.{0,1}(test|int|stage){0,1}\.bbc\.com$/;
                if (null !== t.exec(e.origin) || "http://pal.sandbox.dev.bbc.com" === e.origin || "http://m.sandbox.dev.bbc.com" === e.origin) {
                    var n;
                    try {
                        n = JSON.parse(e.data)
                    } catch (e) {
                        return
                    }
                    "undefined" != typeof n.slot && (M("receiveMessage about to call .close()"), A.default.getAd(n.slot).close(), e.source.postMessage(JSON.stringify({
                        success: !0
                    }), "*"))
                }
            },
            registerSlot: function(e, t) {
                var n = t.join("_"),
                    s = A.default.registerAd(e);
                s.isPreloaded() && e && t && (S.default.moveAd("bbccom_" + e + "_" + n + "_preload", "bbccom_" + e + "_" + n), A.default.getAd(e).show())
            },
            reset: function() {
                return S.default.reset()
            },
            show: function() {
                i = A.default.getCurrentAd(), "undefined" != typeof i && i.show()
            },
            isActive: function(e) {
                return r.default.isActive(e)
            },
            setAdKeyValue: function(e, t) {
                N.default.set(e, t)
            },
            setAdUnit: function(e) {
                x.default.setAdUnit(e)
            },
            setLocale: function(e, t) {
                l.default.set(e, t)
            },
            ad: function(e) {
                return A.default.getAd(e)
            },
            setGroupStartWidth: function(e, t) {
                return B.default.setGroupStart(e, t)
            },
            setConfig: r.default.rehydrate.bind(r.default),
            registerAd: function(e, t, n) {
                R.default.registerAd(e, t, n)
            },
            lazyLoadAd: function(e, t) {
                R.default.lazyLoadAd(e, t)
            },
            getFeatures: U.getFeatures,
            getFeature: U.getFeature,
            refreshAd: function(e, t, n) {
                var s, i, a = "bbccom_",
                    r = "",
                    o = o.getAll(),
                    u = A.default.getAd(e),
                    c = document.getElementById(a + e),
                    l = document.createElement("a"),
                    d = document.createElement("iframe"),
                    f = u.getAdInfoUrl(),
                    g = u.getAdText();
                for (s in o) o.hasOwnProperty(s) && (r += ";" + s + "=" + o[s]);
                i = "https://ad.doubleclick.net" + x.default.get().replace("/4817", "/N4817/adi") + ";slot=" + e + ";sz=" + t + r + ";ord=" + Math.random().toString().slice(2, 16) + ";tile=1;iframe=yes?", d.src = i, d.width = t.split("x")[0], d.height = t.split("x")[1], d.scrolling = "no", d.style.border = "none", d.style.overflow = "hidden", l.innerHTML = g, l.href = f, l.className = "bbccom_text", c.innerHTML = "", c.style.width = t.split("x")[0] + "px", c.className = c.className.replace("bbccom_display_none", ""), c.appendChild(l), c.appendChild(d), A.default.getAd(e).open()
            },
            trackEvent: function() {},
            reInit: function(e) {
                var t = {
                        title: e.headline,
                        referrer: e.referrer || ""
                    },
                    n = e.url || "",
                    s = new p.default;
                f.default.r(), N.default.r(), G.setConfig(e), "undefined" != typeof e.headline && "undefined" != typeof e.summary && s.set(e.headline + " " + e.summary), f.default.build(!0, n), x.default.init(S.default.getClientWidth(), void 0, f.default.getSections("advert"), f.default.getSections()), N.default.init(u.default.createWindowLocation(n), t), "undefined" != typeof e.assetType && N.default.set("asset_type", e.assetType)
            },
            resetPage: function(e) {
                var t, n = r.default.getWindowLocation().href || "",
                    s = u.default.createWindowLocation(e.url),
                    i = e.disableAdUnit || !1;
                if (r.default.isActive("ads") && (!r.default.isSportApp() || r.default.isSportApp() && r.default.isAdsportappEnabled())) {
                    if (R.default.reset(), r.default.init(bbcdotcomConfig, bbcdotcom.data, s, {
                            title: e.title,
                            description: e.description,
                            referrer: n
                        }), f.default.build(!0), e.adsToDisplay && (t = T.default.build(e.adsToDisplay)), t) {
                        window.bbcdotcom.adsToDisplay = t;
                        for (var a = 0, o = t.length; a < o; a++) A.default.registerAd(t[a])
                    }
                    if ((new p.default).set(e.title + " " + e.description), i || x.default.init(S.default.getClientWidth(), this.serversideAdUnits2to9, f.default.getSections("advert"), f.default.getSections()), N.default.init(s, window.document, r.default.getType()), "undefined" != typeof e.keyValues)
                        for (var c in e.keyValues) e.keyValues.hasOwnProperty(c) && N.default.set(c, e.keyValues[c]);
                    R.default.setKeyValues(), C.default.init(s.href)
                }
                r.default.isAnalyticsEnabled() && F.page()
            }
        };
    e.exports = G
}, function(e, t, n) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null === e) return new c.default({}, n);
        e = e.toLowerCase();
        var t = o.default.getFeatures(),
            n = o.default.getPalEnv(),
            s = t.hasOwnProperty(e) ? Object.assign({
                name: e
            }, t[e]) : {
                name: e
            };
        return new c.default(s, n)
    }

    function a() {
        var e = o.default.getFeatures(),
            t = (o.default.getPalEnv(), {});
        for (var n in e) e.hasOwnProperty(n) && (t[n] = i(n));
        return t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getFeature = i, t.getFeatures = a;
    var r = n(150),
        o = s(r),
        u = n(281),
        c = s(u)
}, function(e, t, n) {
    "use strict";

    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e) {
        return this.envs.includes(e) || 0 === this.envs.length
    }

    function a() {
        return this.on
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var s = t[n];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }
            return function(t, n, s) {
                return n && e(t.prototype, n), s && e(t, s), t
            }
        }(),
        o = n(151),
        u = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.name,
                    i = void 0 === n ? "unknown-feature" : n,
                    a = t.envs,
                    r = void 0 === a ? [] : a,
                    u = t.on,
                    c = void 0 !== u && u,
                    l = t.options,
                    d = void 0 === l ? {} : l,
                    f = t.override,
                    g = void 0 === f ? null : f,
                    p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.PAL_ENV_LIVE;
                s(this, e), this.name = i, this.envs = r, this.on = c, this.options = d, this.override = g, this.palEnv = p
            }
            return r(e, [{
                key: "getName",
                value: function() {
                    return this.name
                }
            }, {
                key: "isEnabled",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.palEnv;
                    return null !== this.override ? this.override : i.call(this, e) && a.call(this)
                }
            }, {
                key: "getOptions",
                value: function() {
                    return this.options
                }
            }, {
                key: "getOption",
                value: function(e) {
                    var t = this.getOptions();
                    return t.hasOwnProperty(e) ? t[e] : null
                }
            }]), e
        }();
    t.default = u, e.exports = t.default
}, function(e, t, n) {
    "use strict";
    var s = n(150),
        i = n(152),
        a = n(223),
        r = function() {
            this.clientId = "10816", this.lotameObject = "LOTCC_" + this.clientId
        };
    r.prototype.init = function() {
        (s.isWorldService() || "worldservice" === i.getSection(0)) && (this.clientId = "10826", this.lotameObject = "LOTCC_" + this.clientId)
    }, r.prototype.callback = function() {
        if (!s.isSportApp() && s.isLotameEnabled()) {
            var e, t, n = "",
                i = document.getElementsByTagName("script")[0];
            e = a.getCoreKeyValues(e), e = a.appendPageCoreKeyValues(e), this.init(), n = "function lotameCallback() {var keyVal = bbcdotcom.adverts.keyValues.getAll();var genProp = " + JSON.stringify(e) + ";keyVal['slot'] = bbcdotcom.adsToDisplay;keyVal['ad-unit-1'] = bbcdotcom.adverts.adUnit.getAdUnit1();keyVal['ad-unit-2'] = bbcdotcom.adverts.adUnit.getAdUnits2to9();if(typeof window['" + this.lotameObject + "'] !== 'undefined'){for (var j in keyVal) {" + this.lotameObject + ".add('genp', j +':'+keyVal[j]);}for (var e in genProp) {" + this.lotameObject + ".add('genp', e +':'+genProp[e]);}clearInterval(window.isLotameLoadedInterval);}}window.isLotameLoadedInterval = setInterval(lotameCallback, 500);", t = document.createElement("script"), t.type = "text/javascript", t.innerHTML = n, i.parentNode.insertBefore(t, i)
        }
    }, r.prototype.loadExtra = function(e, t) {
        if (!s.isSportApp() && s.isLotameEnabled()) {
            var n, i = document.getElementsByTagName("script")[0],
                a = "",
                r = e || [];
            if ("string" == typeof r) a += this.lotameObject + '.add("genp", "' + ("undefined" != typeof t ? t : "") + ":" + encodeURIComponent(r) + '");';
            else
                for (var o in r) a += this.lotameObject + '.add("genp", "' + ("undefined" != typeof t ? t : o) + ":" + encodeURIComponent(r[o]) + '");';
            a += this.lotameObject + ".bcp();", a = "if(typeof window['" + this.lotameObject + "'] !== 'undefined') {" + a + "}", n = document.createElement("script"), n.async = !0, n.type = "text/javascript", n.innerHTML = a, i.parentNode.insertBefore(n, i)
        }
    }, e.exports = new r
}, function(e, t) {
    "use strict";
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
            }
            return e
        },
        s = function() {
            var e = {},
                t = function(t, n, s) {
                    n.clientHeight > s.heightLimit || (e[t] = i(n, s))
                },
                n = function(t) {
                    delete e[t]
                },
                s = function() {
                    return e
                },
                a = function() {
                    Object.keys(e).forEach(function(t) {
                        e[t].triggerResize()
                    })
                },
                r = function() {
                    var t = 0;
                    window.addEventListener("scroll", function() {
                        t = window.pageYOffset, Object.keys(e).forEach(function(n) {
                            e[n].update(t)
                        })
                    }, !1)
                },
                o = function() {
                    var e = null,
                        t = window.outerWidth;
                    window.addEventListener("resize", function(n) {
                        n.target.outerWidth !== t && (t = n.target.outerWidth, e || a(), clearTimeout(e), e = setTimeout(function() {
                            e = null, a()
                        }, 100))
                    })
                },
                u = function() {
                    window.addEventListener("orientationchange", function() {
                        setTimeout(function() {
                            Object.keys(e).forEach(function(t) {
                                e[t].triggerResize()
                            })
                        }, 1e3)
                    })
                };
            (function() {
                r(), o(), u()
            })();
            return {
                add: t,
                remove: n,
                list: s
            }
        }(),
        i = function(e, t) {
            var n = 0,
                s = 1,
                i = 2,
                a = "parent" === t.applyTo ? e.parentElement : e,
                r = n,
                o = null,
                u = null,
                c = null,
                l = !1,
                d = window.pageYOffset,
                f = function(e) {
                    if (!(e > i || e < n)) switch (r = e, e) {
                        case n:
                            A(g);
                            break;
                        case s:
                            A(t.parallax ? y : p);
                            break;
                        case i:
                            A(b)
                    }
                },
                g = function() {
                    a.style.position = "relative", a.style.left = "0", a.style.top = "0", a.style.transform = "translate3d(0px, 0px, 0px)"
                },
                p = function() {
                    a.style.position = "fixed", a.style.left = c + "px", a.style.transform = "translate3d(0px, 0px, 0px)", a.style.zIndex = "100", a.style.top = 0
                },
                b = function() {
                    a.style.position = "absolute", a.style.top = u + "px", a.style.left = "50%", a.style.transform = "translate3d(-50%, 0px, 0px)", a.style.zIndex = "100"
                },
                y = function() {
                    a.style.position = "absolute", a.style.transform = "translate3d(0px, " + k() + "px, 0px)", a.style.left = c + "px"
                },
                m = function(e) {
                    a.parentElement.style.height = a.offsetHeight + "px", a.parentElement.style.position = "relative"
                },
                _ = function() {
                    o = S(), u = h(), c = v()
                },
                v = function() {
                    return Math.round(a.getBoundingClientRect().left)
                },
                S = function() {
                    return Math.round(a.getBoundingClientRect().top + window.pageYOffset)
                },
                h = function() {
                    if (t.offset.from[0] && t.offset.to[0]) {
                        var e = document.querySelector(t.offset.from[0]),
                            n = document.querySelector(t.offset.to[0]),
                            s = e.offsetTop,
                            i = n.offsetTop;
                        return "bottom" === t.offset.from[1] && (s += e.offsetHeight), "bottom" === t.offset.to[1] && (i += n.offsetHeight), "include" === t.offsetType && (i -= a.offsetHeight), t.parallax && (i += a.offsetHeight), i - s
                    }
                },
                P = function() {
                    g(), _(), E(window.pageYOffset)
                },
                k = function() {
                    return Math.round(d - e.clientHeight / u * d)
                },
                A = function(e) {
                    l || (l = requestAnimationFrame(function() {
                        e(), l = !1
                    }))
                },
                E = function(e) {
                    switch (d = e, !0) {
                        case o > d:
                            f(n);
                            break;
                        case d >= o && d <= o + u:
                            f(s);
                            break;
                        case o + u < d:
                            f(i)
                    }
                };
            (function() {
                m(), _()
            })();
            return {
                update: E,
                triggerResize: P
            }
        },
        a = function() {
            return n({}, s)
        };
    e.exports = a
}, function(e, t, n) {
    (function(e) {
        var t = !1,
            n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        ! function(s, i) {
            "use strict";
            "function" == typeof t && t.amd ? (i(s.ns_ = s.ns_ || {}), t([], function() {
                return s.ns_
            })) : "object" == n(e) && e.exports ? e.exports = i({}) : i(s.ns_ = s.ns_ || {})
        }(void 0, function(e) {
            "use strict";
            e.ns_ = e;
            var t = t || {};
            t.indexOf = function(e, t) {
                var n = -1;
                return this.forEach(t, function(t, s) {
                    t == e && (n = s)
                }), n
            }, t.forEach = function(e, t, n) {
                try {
                    if ("function" == typeof t)
                        if (n = "undefined" != typeof n ? n : null, "number" != typeof e.length || "undefined" == typeof e[0]) {
                            var s = "undefined" != typeof e.__proto__;
                            for (var i in e) e.hasOwnProperty(i) && (!s || s && "undefined" == typeof e.__proto__[i]) && "function" != typeof e[i] && t.call(n, e[i], i)
                        } else
                            for (var a = 0, r = e.length; a < r; a++) t.call(n, e[a], a)
                } catch (e) {}
            };
            var t = t || {};
            t.parseBoolean = function(e, t) {
                return t = t || !1, e ? "0" != e : t
            }, t.parseInteger = function(e, t) {
                return null == e || isNaN(e) ? t || 0 : parseInt(e)
            }, t.parseLong = function(e, t) {
                var n = Number(e);
                return null == e || isNaN(n) ? t || 0 : n
            }, t.toString = function(e) {
                if ("undefined" == typeof e) return "undefined";
                if ("string" == typeof e) return e;
                if (e instanceof Array) return e.join(",");
                var t = "";
                for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
                return t || e.toString()
            };
            var t = t || {};
            t.filter = function(e, t) {
                var n = {};
                for (var s in t) t.hasOwnProperty(s) && e(t[s]) && (n[s] = t[s]);
                return n
            }, t.extend = function(e) {
                var t, n = arguments.length;
                e = e || {};
                for (var s = 1; s < n; s++)
                    if (t = arguments[s])
                        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                return e
            };
            var t = t || {};
            t.cloneObject = function(e) {
                if (null == e || "object" != ("undefined" == typeof e ? "undefined" : n(e))) return e;
                var t = function() {
                    function e() {}

                    function t(t) {
                        return "object" == ("undefined" == typeof t ? "undefined" : n(t)) ? (e.prototype = t, new e) : t
                    }

                    function s(e) {
                        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t])
                    }

                    function i() {
                        this.copiedObjects = [];
                        var e = this;
                        this.recursiveDeepCopy = function(t) {
                            return e.deepCopy(t)
                        }, this.depth = 0
                    }

                    function a(e, t) {
                        var n = new i;
                        return t && (n.maxDepth = t), n.deepCopy(e)
                    }

                    function r(e) {
                        return "undefined" != typeof window && window && window.Node ? e instanceof Node : "undefined" != typeof document && e === document || "number" == typeof e.nodeType && e.attributes && e.childNodes && e.cloneNode
                    }
                    var o = [];
                    return s.prototype = {
                        constructor: s,
                        canCopy: function() {
                            return !1
                        },
                        create: function(e) {},
                        populate: function(e, t, n) {}
                    }, i.prototype = {
                        constructor: i,
                        maxDepth: 256,
                        cacheResult: function(e, t) {
                            this.copiedObjects.push([e, t])
                        },
                        getCachedResult: function(e) {
                            for (var t = this.copiedObjects, n = t.length, s = 0; s < n; s++)
                                if (t[s][0] === e) return t[s][1]
                        },
                        deepCopy: function(e) {
                            if (null === e) return null;
                            if ("object" != ("undefined" == typeof e ? "undefined" : n(e))) return e;
                            var t = this.getCachedResult(e);
                            if (t) return t;
                            for (var s = 0; s < o.length; s++) {
                                var i = o[s];
                                if (i.canCopy(e)) return this.applyDeepCopier(i, e)
                            }
                            throw new Error("Unable to clone the following object " + e)
                        },
                        applyDeepCopier: function(e, t) {
                            var n = e.create(t);
                            if (this.cacheResult(t, n), this.depth++, this.depth > this.maxDepth) throw new Error("Maximum recursion depth exceeded.");
                            return e.populate(this.recursiveDeepCopy, t, n), this.depth--, n
                        }
                    }, a.DeepCopier = s, a.deepCopiers = o, a.register = function(e) {
                        e instanceof s || (e = new s(e)), o.unshift(e)
                    }, a.register({
                        canCopy: function() {
                            return !0
                        },
                        create: function(e) {
                            return e instanceof e.constructor ? t(e.constructor.prototype) : {}
                        },
                        populate: function(e, t, n) {
                            for (var s in t) t.hasOwnProperty(s) && (n[s] = e(t[s]));
                            return n
                        }
                    }), a.register({
                        canCopy: function(e) {
                            return e instanceof Array
                        },
                        create: function(e) {
                            return new e.constructor
                        },
                        populate: function(e, t, n) {
                            for (var s = 0; s < t.length; s++) n.push(e(t[s]));
                            return n
                        }
                    }), a.register({
                        canCopy: function(e) {
                            return e instanceof Date
                        },
                        create: function(e) {
                            return new Date(e)
                        }
                    }), a.register({
                        canCopy: function(e) {
                            return r(e)
                        },
                        create: function(e) {
                            return "undefined" != typeof document && e === document ? document : e.cloneNode(!1)
                        },
                        populate: function(e, t, n) {
                            if ("undefined" != typeof document && t === document) return document;
                            if (t.childNodes && t.childNodes.length)
                                for (var s = 0; s < t.childNodes.length; s++) {
                                    var i = e(t.childNodes[s]);
                                    n.appendChild(i)
                                }
                        }
                    }), {
                        deepCopy: a
                    }
                }();
                return t.deepCopy(e)
            };
            var t = t || {};
            t.getNamespace = function() {
                return e.ns_ || e
            }, t.uid = function() {
                var e = 1;
                return function() {
                    return +new Date + "_" + e++
                }
            }(), t.isEmpty = function(e) {
                return void 0 === e || null === e || "" === e || e instanceof Array && 0 === e.length
            }, t.isNotEmpty = function(e) {
                return !this.isEmpty(e)
            }, t.safeGet = function(e, t) {
                return t = this.exists(t) ? t : "", this.exists(e) ? e : t
            }, t.isTrue = function(e) {
                return "undefined" != typeof e && ("string" == typeof e ? (e = e.toLowerCase(), "true" === e || "1" === e || "on" === e) : !!e)
            }, t.regionMatches = function(e, t, n, s, i) {
                if (t < 0 || s < 0 || t + i > e.length || s + i > n.length) return !1;
                for (; --i >= 0;) {
                    var a = e.charAt(t++),
                        r = n.charAt(s++);
                    if (a != r) return !1
                }
                return !0
            }, t.exists = function(e) {
                return "undefined" != typeof e && null != e
            }, ! function() {
                var e = [],
                    n = !1,
                    s = !0,
                    i = 1e3;
                t.onSystemClockJump = function(t, a) {
                    e.push(t), n || (n = !0, i = a || i, s = +new Date, setInterval(function() {
                        var t = s + i,
                            n = +new Date;
                        s = n;
                        var a = n - t;
                        if (Math.abs(a) > i)
                            for (var r = 0; r < e.length; ++r) e[r](a > 0)
                    }, i))
                }
            }();
            var t = t || {};
            t.hasPageVisibilityAPISupport = function() {
                if ("undefined" == typeof document) return !1;
                var e = !1;
                return "undefined" != typeof document.hidden ? e = !0 : "undefined" != typeof document.mozHidden ? e = !0 : "undefined" != typeof document.msHidden ? e = !0 : "undefined" != typeof document.webkitHidden && (e = !0),
                    function() {
                        return e
                    }
            }(), t.getPageVisibilityAPI = function() {
                if ("undefined" == typeof document) return null;
                var e, t, n;
                "undefined" != typeof document.hidden ? (e = "hidden", t = "visibilitychange", n = "visibilityState") : "undefined" != typeof document.mozHidden ? (e = "mozHidden", t = "mozvisibilitychange", n = "mozVisibilityState") : "undefined" != typeof document.msHidden ? (e = "msHidden", t = "msvisibilitychange", n = "msVisibilityState") : "undefined" != typeof document.webkitHidden && (e = "webkitHidden", t = "webkitvisibilitychange", n = "webkitVisibilityState");
                var s = {
                    hidden: e,
                    visibilityChange: t,
                    state: n
                };
                return function() {
                    return s
                }
            }(), t.isTabInBackground = function() {
                if ("undefined" == typeof document) return null;
                var e = t.getPageVisibilityAPI();
                return function() {
                    return document[e.hidden]
                }
            }(), t.getBrowserName = function() {
                if (!navigator) return "";
                var e, t, n = navigator.userAgent || "",
                    s = navigator.appName || "";
                return (t = n.indexOf("Opera")) != -1 || (t = n.indexOf("OPR/")) != -1 ? s = "Opera" : (t = n.indexOf("Android")) != -1 ? s = "Android" : (t = n.indexOf("Chrome")) != -1 ? s = "Chrome" : (t = n.indexOf("Safari")) != -1 ? s = "Safari" : (t = n.indexOf("Firefox")) != -1 ? s = "Firefox" : (t = n.indexOf("IEMobile")) != -1 ? s = "Internet Explorer Mobile" : "Microsoft Internet Explorer" == s || "Netscape" == s ? s = "Internet Explorer" : (e = n.lastIndexOf(" ") + 1) < (t = n.lastIndexOf("/")) ? (s = n.substring(e, t), s.toLowerCase() == s.toUpperCase() && (s = navigator.appName)) : s = "unknown", s
            }, t.getBrowserFullVersion = function() {
                if (!navigator) return "";
                var e, t, n, s, i = navigator.userAgent || "",
                    a = navigator.appName || "",
                    r = navigator.appVersion ? "" + parseFloat(navigator.appVersion) : "";
                return (t = i.indexOf("Opera")) != -1 ? (r = i.substring(t + 6), (t = i.indexOf("Version")) != -1 && (r = i.substring(t + 8))) : (t = i.indexOf("OPR/")) != -1 ? r = i.substring(t + 4) : (t = i.indexOf("Android")) != -1 ? r = i.substring(t + 11) : (t = i.indexOf("Chrome")) != -1 ? r = i.substring(t + 7) : (t = i.indexOf("Safari")) != -1 ? (r = i.substring(t + 7), (t = i.indexOf("Version")) != -1 && (r = i.substring(t + 8))) : (t = i.indexOf("Firefox")) != -1 ? r = i.substring(t + 8) : "Microsoft Internet Explorer" == a ? (s = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"), null != s.exec(i) && (r = parseFloat(RegExp.$1))) : "Netscape" == a ? (s = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"), null != s.exec(i) && (r = parseFloat(RegExp.$1))) : r = i.lastIndexOf(" ") + 1 < (t = i.lastIndexOf("/")) ? i.substring(t + 1) : "unknown", r = r.toString(), (n = r.indexOf(";")) != -1 && (r = r.substring(0, n)), (n = r.indexOf(" ")) != -1 && (r = r.substring(0, n)), (n = r.indexOf(")")) != -1 && (r = r.substring(0, n)), e = parseInt("" + r, 10), isNaN(e) && (r = "" + parseFloat(navigator.appVersion)), r
            }, t.browserAcceptsLargeURLs = function() {
                return "undefined" == typeof window || (null !== window.ActiveXObject, !0)
            }, t.isBrowser = function() {
                return "undefined" != typeof window && "undefined" != typeof document
            }, t.isWebSecure = function() {
                return "undefined" != typeof document && null != document && "s" === document.location.href.charAt(4)
            };
            var s = function() {
                var e = 1e4;
                return function(t, s) {
                    function i(e) {
                        e = e || [];
                        var n = [u, +new Date];
                        return t && n.push(t), e = Array.prototype.slice.call(e), n = n.concat(e)
                    }

                    function a(e) {
                        var t, i, a;
                        if ("boolean" == typeof s || !s) return !!s;
                        if (a = e.join(" "), s instanceof Array && s.length > 0) {
                            for (t = 0; t < s.length; ++t)
                                if (i = s[t], i instanceof RegExp && i.test(a)) return !0;
                            return !1
                        }
                        if ("object" == ("undefined" == typeof s ? "undefined" : n(s))) {
                            var r = !1;
                            if (s.hide instanceof Array)
                                for (t = 0; t < s.hide.length; ++t)
                                    if (i = s.hide[t], i instanceof RegExp && i.test(a)) {
                                        r = !0;
                                        break
                                    }
                            if (s.show instanceof Array)
                                for (t = 0; t < s.show.length; ++t)
                                    if (i = s.show[t], i instanceof RegExp && i.test(a)) return !0;
                            return !r && !s.show
                        }
                        return !0
                    }

                    function r(t) {
                        var n = c.length;
                        (n > e || s && s.max && n > s.max) && (c = c.slice(-Math.floor(s.max / 2)), c.push("Previous logs: " + n)), c.push(t)
                    }
                    var o = this,
                        u = "comScore",
                        c = [];
                    o.log = function() {
                        var e = i(arguments);
                        r(e), "undefined" != typeof console && "function" == typeof console.log && a(e) && console.log.apply(console, e)
                    }, o.warn = function() {
                        var e = i(arguments);
                        r(e), "undefined" != typeof console && "function" == typeof console.warn && a(e) && console.warn.apply(console, e)
                    }, o.error = function() {
                        var e = i(arguments);
                        r(e), "undefined" != typeof console && "function" == typeof console.error && a(e) && console.error.apply(console, e)
                    }, o.apiCall = function(e) {
                        for (var t = ["API call to:", e], n = 1; n < arguments.length; ++n) t.push("arg" + n + ":", arguments[n]);
                        this.log.apply(this, t)
                    }, o.infoLog = function() {
                        var e = ["Trace log:"];
                        e.push.apply(e, Array.prototype.slice.call(arguments)), this.log.apply(this, e)
                    }, o.deprecation = function(e, t) {
                        var n = ["Deprecated API:", e, "is deprecated and will be eventually removed."];
                        t && n.push("Use", t, "instead."), this.warn.apply(this, n)
                    }, o.getLogHistory = function() {
                        return c
                    }
                }
            }();
            return e.StreamingAnalytics = e.StreamingAnalytics || function() {
                var e = function() {
                        var e = "cs_";
                        return function() {
                            var n = "undefined" != typeof localStorage ? localStorage : null;
                            t.extend(this, {
                                get: function(t) {
                                    return n && n.getItem(e + t)
                                },
                                set: function(t, s) {
                                    n && n.setItem(e + t, s)
                                },
                                has: function(t) {
                                    return n && n.getItem(e + t)
                                },
                                remove: function(t) {
                                    n && n.removeItem(e + t)
                                },
                                clear: function() {
                                    for (var t = 0; n && t < n.length; ++t) {
                                        var s = n.key(t);
                                        s.substr(0, e.length) === e && n.removeItem(s)
                                    }
                                }
                            })
                        }
                    }(),
                    i = function(e, t) {
                        if ("undefined" == typeof Image) return void("function" == typeof setTimeout ? t && setTimeout(t, 0) : t && t());
                        var n = new Image;
                        n.onload = function() {
                            t && t(200), n = null
                        }, n.onerror = function() {
                            t && t(), n = null
                        }, n.src = e
                    },
                    a = function(e, t, n) {
                        "function" == typeof setTimeout ? n && setTimeout(function() {
                            n(200)
                        }, 0) : n && n(200)
                    },
                    r = function() {
                        return {
                            dir: function() {
                                return null
                            },
                            append: function(e, t, n) {},
                            write: function(e, t, n) {},
                            deleteFile: function() {
                                return !1
                            },
                            read: function() {
                                return null
                            }
                        }
                    }(),
                    o = function() {
                        return {
                            PLATFORM: "generic",
                            httpGet: i,
                            httpPost: a,
                            Storage: e,
                            IO: r,
                            onDataFetch: function(e) {
                                e()
                            },
                            getCrossPublisherId: function() {
                                return null
                            },
                            getAppName: function() {
                                return u.UNKNOWN_VALUE
                            },
                            getAppVersion: function() {
                                return u.UNKNOWN_VALUE
                            },
                            getVisitorId: function() {
                                return +new Date + ~~(1e3 * Math.random())
                            },
                            getVisitorIdSuffix: function() {
                                return "72"
                            },
                            getDeviceModel: function() {
                                return u.UNKNOWN_VALUE
                            },
                            getPlatformVersion: function() {
                                return u.UNKNOWN_VALUE
                            },
                            getPlatformName: function() {
                                return "js"
                            },
                            getRuntimeName: function() {
                                return u.UNKNOWN_VALUE
                            },
                            getRuntimeVersion: function() {
                                return u.UNKNOWN_VALUE
                            },
                            getDisplayResolution: function() {
                                return u.UNKNOWN_RESOLUTION
                            },
                            getApplicationResolution: function() {
                                return u.UNKNOWN_RESOLUTION
                            },
                            getLanguage: function() {
                                return u.UNKNOWN_VALUE
                            },
                            getPackageName: function() {
                                return null
                            },
                            isConnectionAvailable: function() {
                                return !0
                            },
                            isCompatible: function() {
                                return !0
                            },
                            autoSelect: function() {},
                            setPlatformAPI: function() {},
                            isCrossPublisherIdChanged: function() {
                                return !1
                            },
                            setTimeout: function(e) {
                                function t(t, n) {
                                    return e.apply(this, arguments)
                                }
                                return t.toString = function() {
                                    return e.toString()
                                }, t
                            }(function(e, t) {
                                return setTimeout(e, t)
                            }),
                            clearTimeout: function(e) {
                                function t(t) {
                                    return e.apply(this, arguments)
                                }
                                return t.toString = function() {
                                    return e.toString()
                                }, t
                            }(function(e) {
                                return clearTimeout(e)
                            }),
                            getDeviceArchitecture: function() {
                                return u.UNKNOWN_VALUE
                            },
                            getConnectionType: function() {
                                return u.UNKNOWN_VALUE
                            },
                            getDeviceJailBrokenFlag: function() {
                                return u.UNKNOWN_VALUE
                            },
                            isConnectionSecure: function() {
                                return !1
                            },
                            processMeasurementLabels: function() {}
                        }
                    }(),
                    u = {
                        UNKNOWN_VALUE: "unknown",
                        UNKNOWN_RESOLUTION: "0x0"
                    };
                t.jsonObjectToStringDictionary = function(e) {
                    var t = {};
                    for (var n in e) {
                        var s = e[n];
                        null === s || void 0 === s ? t[n] = s : t[n] = e[n] + ""
                    }
                    return t
                }, t.getKeys = function(e, t) {
                    var n, s = [];
                    for (n in e) t && !t.test(n) || !e.hasOwnProperty(n) || (s[s.length] = n);
                    return s
                }, t.fixEventTime = function(e) {
                    if (e.ns_ts) return parseInt(e.ns_ts);
                    var t = +new Date;
                    return e.ns_ts = t + "", t
                }, t.isBrowser = function() {
                    return "undefined" != typeof window && "undefined" != typeof document
                }, t.addNewPlaybackInterval = function(e, n, s, i) {
                    var a = {};
                    if (!(s >= n)) return t.cloneObject(e);
                    if (a.start = n, a.end = s, 0 == e.length) return e.push(a), t.cloneObject(e);
                    var r;
                    for (r = 0; r < e.length; r++)
                        if (a.start >= e[r].start && a.end <= e[r].end) return t.cloneObject(e);
                    var o, u = !1;
                    for (o = 0; o < e.length; o++)
                        if (o + 1 === e.length && a.start >= e[o].start || a.start >= e[o].start && a.start < e[o + 1].start) {
                            e.splice(o + 1, 0, a), u = !0;
                            break
                        }
                    u || e.splice(0, 0, a);
                    var c = [e[0]];
                    for (r = 1; r < e.length; r++) c[c.length - 1].end + i < e[r].start ? c.push(e[r]) : c[c.length - 1].end < e[r].end && (c[c.length - 1].end = e[r].end);
                    return t.cloneObject(c)
                }, t.stateToString = function(e) {
                    var t = B.InternalStates;
                    for (var n in t)
                        if (t.hasOwnProperty(n) && t[n] == e) return n
                };
                var c = function() {
                        var e = ["play", "pause", "pause-on-buffering", "end", "buffer", "buffer-stop", "keep-alive", "hb", "custom", "load", "start", "skstart", "adskip", "cta", "error", "trans", "drmfa", "drmap", "drmde", "bitrt", "playrt", "volume", "window", "audio", "video", "subs", "cdn"];
                        return {
                            PLAY: 0,
                            PAUSE: 1,
                            PAUSE_ON_BUFFERING: 2,
                            END: 3,
                            BUFFER: 4,
                            BUFFER_STOP: 5,
                            KEEPALIVE: 6,
                            HEARTBEAT: 7,
                            CUSTOM: 8,
                            LOAD: 9,
                            ENGAGE: 10,
                            SEEK_START: 11,
                            AD_SKIP: 12,
                            CTA: 13,
                            ERROR: 14,
                            TRANSFER: 15,
                            DRM_FAILED: 16,
                            DRM_APPROVED: 17,
                            DRM_DENIED: 18,
                            BIT_RATE: 19,
                            PLAYBACK_RATE: 20,
                            VOLUME: 21,
                            WINDOW_STATE: 22,
                            AUDIO: 23,
                            VIDEO: 24,
                            SUBS: 25,
                            CDN: 26,
                            toString: function(t) {
                                return e[t]
                            }
                        }
                    }(),
                    l = function() {
                        return {
                            IDLE: 0,
                            PLAYBACK_NOT_STARTED: 1,
                            PLAYING: 2,
                            PAUSED: 3,
                            BUFFERING_BEFORE_PLAYBACK: 4,
                            BUFFERING_DURING_PLAYBACK: 5,
                            BUFFERING_DURING_SEEKING: 6,
                            BUFFERING_DURING_PAUSE: 7,
                            SEEKING_BEFORE_PLAYBACK: 8,
                            SEEKING_DURING_PLAYBACK: 9,
                            SEEKING_DURING_BUFFERING: 10,
                            SEEKING_DURING_PAUSE: 11,
                            PAUSED_DURING_BUFFERING: 12
                        }
                    }(),
                    d = function() {
                        var e = ["c", "s", "r"];
                        return {
                            SINGLE_CLIP: 0,
                            SEGMENTED: 1,
                            REDUCED: 2,
                            toString: function(t) {
                                return e[t]
                            }
                        }
                    }(),
                    f = {
                        STREAMINGANALYTICS_VERSION: "6.0.0.161201",
                        MODEL_VERSION: "5.7",
                        LOG_NAMESPACE: "STA",
                        DEFAULT_PLAYERNAME: "js_api",
                        DEFAULT_HEARTBEAT_INTERVAL: [{
                            playingtime: 6e4,
                            interval: 1e4
                        }, {
                            playingtime: null,
                            interval: 6e4
                        }],
                        DEFAULT_KEEP_ALIVE_INTERVAL: 12e5,
                        DEFAULT_PAUSED_ON_BUFFERING_INTERVAL: 500,
                        C1_VALUE: "19",
                        C10_VALUE: "js",
                        NS_AP_C12M_VALUE: "1",
                        NS_NC_VALUE: "1",
                        PAGE_NAME_LABEL: "name",
                        RESTRICTED_URL_LENGTH_LIMIT: 2048,
                        URL_LENGTH_LIMIT: 4096,
                        THROTTLING_DELAY: 500,
                        INTERVAL_MERGE_TOLERANCE: 500,
                        SYSTEM_CLOCK_JUMP_DETECTION_DEFAULT_INTERVAL: 1e3,
                        SYSTEM_CLOCK_JUMP_DETECTION_MINIMUM_INTERVAL: 500,
                        STANDARD_METADATA_LABELS: ["ns_st_st", "ns_st_ci", "ns_st_pr", "ns_st_sn", "ns_st_en", "ns_st_ep", "ns_st_ty", "ns_st_ct", "ns_st_li", "ns_st_ad", "ns_st_bn", "ns_st_tb", "ns_st_an", "ns_st_ta", "ns_st_pu", "c3", "c4", "c6"],
                        LABELS_ORDER: ["c1", "c2", "ca2", "cb2", "cc2", "cd2", "ns_site", "ca_ns_site", "cb_ns_site", "cc_ns_site", "cd_ns_site", "ns_vsite", "ca_ns_vsite", "cb_ns_vsite", "cc_ns_vsite", "cd_ns_vsite", "ns_alias", "ca_ns_alias", "cb_ns_alias", "cc_ns_alias", "cd_ns_alias", "ns_ap_an", "ca_ns_ap_an", "cb_ns_ap_an", "cc_ns_ap_an", "cd_ns_ap_an", "ns_ap_pn", "ns_ap_pv", "c12", "ca12", "cb12", "cc12", "cd12", "ns_ak", "ns_ap_hw", "name", "ns_ap_ni", "ns_ap_ec", "ns_ap_ev", "ns_ap_device", "ns_ap_id", "ns_ap_csf", "ns_ap_bi", "ns_ap_pfm", "ns_ap_pfv", "ns_ap_ver", "ca_ns_ap_ver", "cb_ns_ap_ver", "cc_ns_ap_ver", "cd_ns_ap_ver", "ns_ap_sv", "ns_ap_cv", "ns_ap_smv", "ns_type", "ca_ns_type", "cb_ns_type", "cc_ns_type", "cd_ns_type", "ns_radio", "ns_nc", "cs_partner", "cs_xcid", "cs_impid", "ns_ap_ui", "ca_ns_ap_ui", "cb_ns_ap_ui", "cc_ns_ap_ui", "cd_ns_ap_ui", "ns_ap_gs", "ns_st_sv", "ns_st_pv", "ns_st_smv", "ns_st_it", "ns_st_id", "ns_st_ec", "ns_st_sp", "ns_st_sc", "ns_st_psq", "ns_st_asq", "ns_st_sq", "ns_st_ppc", "ns_st_apc", "ns_st_spc", "ns_st_cn", "ns_st_ev", "ns_st_po", "ns_st_cl", "ns_st_el", "ns_st_sl", "ns_st_pb", "ns_st_hc", "ns_st_mp", "ca_ns_st_mp", "cb_ns_st_mp", "cc_ns_st_mp", "cd_ns_st_mp", "ns_st_mv", "ca_ns_st_mv", "cb_ns_st_mv", "cc_ns_st_mv", "cd_ns_st_mv", "ns_st_pn", "ns_st_tp", "ns_st_ad", "ns_st_li", "ns_st_ci", "ns_st_si", "ns_st_pt", "ns_st_dpt", "ns_st_ipt", "ns_st_et", "ns_st_det", "ns_st_upc", "ns_st_dupc", "ns_st_iupc", "ns_st_upa", "ns_st_dupa", "ns_st_iupa", "ns_st_lpc", "ns_st_dlpc", "ns_st_lpa", "ns_st_dlpa", "ns_st_pa", "ns_st_ie", "ns_ap_jb", "ns_ap_et", "ns_ap_res", "ns_ap_sd", "ns_ap_po", "ns_ap_ot", "ns_ap_c12m", "cs_c12u", "ca_cs_c12u", "cb_cs_c12u", "cc_cs_c12u", "cd_cs_c12u", "ns_ap_install", "ns_ap_updated", "ns_ap_lastrun", "ns_ap_cs", "ns_ap_runs", "ns_ap_usage", "ns_ap_fg", "ns_ap_ft", "ns_ap_dft", "ns_ap_bt", "ns_ap_dbt", "ns_ap_dit", "ns_ap_as", "ns_ap_das", "ns_ap_it", "ns_ap_uc", "ns_ap_aus", "ns_ap_daus", "ns_ap_us", "ns_ap_dus", "ns_ap_ut", "ns_ap_oc", "ns_ap_uxc", "ns_ap_uxs", "ns_ap_lang", "ns_ap_ar", "ns_ap_miss", "ns_ts", "ns_ap_cfg", "ns_st_ca", "ns_st_cp", "ns_st_er", "ca_ns_st_er", "cb_ns_st_er", "cc_ns_st_er", "cd_ns_st_er", "ns_st_pe", "ns_st_ui", "ca_ns_st_ui", "cb_ns_st_ui", "cc_ns_st_ui", "cd_ns_st_ui", "ns_st_bc", "ns_st_dbc", "ns_st_bt", "ns_st_dbt", "ns_st_bp", "ns_st_lt", "ns_st_skc", "ns_st_dskc", "ns_st_ska", "ns_st_dska", "ns_st_skd", "ns_st_skt", "ns_st_dskt", "ns_st_pc", "ns_st_dpc", "ns_st_pp", "ns_st_br", "ns_st_pbr", "ns_st_rt", "ns_st_prt", "ns_st_ub", "ns_st_vo", "ns_st_pvo", "ns_st_ws", "ns_st_pws", "ns_st_ki", "ns_st_rp", "ns_st_bn", "ns_st_tb", "ns_st_an", "ns_st_ta", "ns_st_pl", "ns_st_pr", "ns_st_sn", "ns_st_en", "ns_st_ep", "ns_st_sr", "ns_st_ty", "ns_st_ct", "ns_st_cs", "ns_st_ge", "ns_st_st", "ns_st_stc", "ns_st_ce", "ns_st_ia", "ns_st_dt", "ns_st_ddt", "ns_st_tdt", "ns_st_tm", "ns_st_dtm", "ns_st_ttm", "ns_st_de", "ns_st_pu", "ns_st_ti", "ns_st_cu", "ns_st_fee", "ns_st_ft", "ns_st_at", "ns_st_pat", "ns_st_vt", "ns_st_pvt", "ns_st_tt", "ns_st_ptt", "ns_st_cdn", "ns_st_pcdn", "ns_st_ami", "ns_st_amt", "ns_st_ams", "ns_ap_i1", "ns_ap_i2", "ns_ap_i3", "ns_ap_i4", "ns_ap_i5", "ns_ap_i6", "ns_ap_referrer", "ns_clid", "ns_campaign", "ns_source", "ns_mchannel", "ns_linkname", "ns_fee", "gclid", "utm_campaign", "utm_source", "utm_medium", "utm_term", "utm_content", "ns_ecommerce", "ns_ec_sv", "ns_client_id", "ns_order_id", "ns_ec_cur", "ns_orderline_id", "ns_orderlines", "ns_prod_id", "ns_qty", "ns_prod_price", "ns_prod_grp", "ns_brand", "ns_shop", "ns_category", "category", "ns_c", "ns_search_term", "ns_search_result", "ns_m_exp", "ns_m_chs", "c3", "ca3", "cb3", "cc3", "cd3", "c4", "ca4", "cb4", "cc4", "cd4", "c5", "ca5", "cb5", "cc5", "cd5", "c6", "ca6", "cb6", "cc6", "cd6", "c10", "c11", "c13", "c14", "c15", "c16", "c7", "c8", "c9", "ns_ap_er", "ns_st_amc"]
                    },
                    g = function() {
                        function e() {
                            function e() {
                                a = {}, a.ns_st_cl = "0", a.ns_st_pn = "1", a.ns_st_tp = "0", a.ns_st_cn = "1", a.ns_st_skd = "0", a.ns_st_ci = "0", a.c3 = "*null", a.c4 = "*null", a.c6 = "*null", a.ns_st_st = "*null", a.ns_st_pu = "*null", a.ns_st_pr = "*null", a.ns_st_ep = "*null", a.ns_st_sn = "*null", a.ns_st_en = "*null", a.ns_st_ct = "*null", r = {}, i = !1, s = !1, n = u.UNKNOWN_VALUE, o = !0, c = 0, l = NaN, b = 0, g = 0, d = NaN, y = 0, m = NaN, v = 0, _ = 0, p = 0, P = NaN, S = [], h = [], k = 0, A = 0, E = 0, T = 0, w = 0, x = 0, I = 0, C = NaN, L = 0, N = 0, O = 0, B = !1, D = NaN, M = !1, F = 0, K = 0, R = 0, U = 0, G = 0, j = 0, W = 0, z = 0, q = 0, H = 0, Y = 0, $ = 0, J = 0, X = 0, Z = 0, V = !1
                            }
                            var n, s, i, a, r, o, c, l, d, g, p, b, y, m, _, v, S, h, P, k, A, E, T, w, x, I, C, L, N, O, B, D, R, U, F, M, G, j, K, V, W, z, q, H, Y, $, J, X, Z, Q = this,
                                ee = f.INTERVAL_MERGE_TOLERANCE;
                            t.extend(this, {
                                getHash: function() {
                                    return n
                                },
                                setHash: function(e) {
                                    n = e
                                },
                                setPlaybackIntervalMergeTolerance: function(e) {
                                    ee = e
                                },
                                getPlaybackIntervalMergeTolerance: function() {
                                    return ee
                                },
                                setInternalLabel: function(e, t) {
                                    a[e] = t
                                },
                                getInternalLabel: function(e) {
                                    return a[e]
                                },
                                hasInternalLabel: function(e) {
                                    return null != a[e]
                                },
                                setLabels: function(e) {
                                    e && t.extend(r, e)
                                },
                                getLabels: function() {
                                    return r
                                },
                                setLabel: function(e, t) {
                                    r[e] = t
                                },
                                getLabel: function(e) {
                                    return r[e]
                                },
                                hasLabel: function(e) {
                                    return e in r
                                },
                                getClipNumber: function() {
                                    return parseInt(Q.getInternalLabel("ns_st_cn"))
                                },
                                setClipNumber: function(e) {
                                    Q.setInternalLabel("ns_st_cn", e + "")
                                },
                                getPartNumber: function() {
                                    return Q.hasLabel("ns_st_pn") ? parseInt(Q.getLabel("ns_st_pn")) : parseInt(Q.getInternalLabel("ns_st_pn"))
                                },
                                createLabels: function(e, n) {
                                    var s = e || {},
                                        o = t.isEmpty(s.ns_st_pt) ? Q.getPlaybackTime() : parseInt(s.ns_st_pt);
                                    s.ns_st_pt = o + (isNaN(l) ? 0 : n - l) + "", s.ns_st_dpt = o + (isNaN(l) ? 0 : n - l) - g + "", s.ns_st_ipt = o + (isNaN(l) ? 0 : n - l) - p + "";
                                    var u = t.isEmpty(s.ns_st_et) ? Q.getElapsedTime() : parseInt(s.ns_st_et);
                                    s.ns_st_et = u + (isNaN(m) ? 0 : n - m) + "", s.ns_st_det = u + (isNaN(m) ? 0 : n - m) - _ + "";
                                    var c = t.isEmpty(s.ns_st_bt) ? Q.getBufferingTime() : parseInt(s.ns_st_bt);
                                    s.ns_st_bt = c + "", s.ns_st_dbt = c + (isNaN(C) ? 0 : n - C) - L + "";
                                    for (var d, f = parseInt(s.ns_st_po), b = t.addNewPlaybackInterval(t.cloneObject(Q.getSegmentPlaybackIntervals()), P, f, ee), y = t.addNewPlaybackInterval(t.cloneObject(Q.getAssetPlaybackIntervals()), P, f, ee), v = 0, S = 0, h = 0; h < b.length; h++) d = Math.abs(b[h].end - b[h].start), v += d, d > S && (S = d);
                                    var I = 0,
                                        N = 0;
                                    for (h = 0, d; h < y.length; h++) d = Math.abs(y[h].end - y[h].start), I += d, d > N && (N = d);
                                    s.ns_st_upc = v + "", s.ns_st_dupc = v - k + "", s.ns_st_iupc = v - A + "", v > A ? s.ns_st_iupc = v - A + "" : s.ns_st_iupc = "0", s.ns_st_lpc = S + "", s.ns_st_dlpc = S - E + "", s.ns_st_upa = I + "", s.ns_st_dupa = I - T + "", I > w ? s.ns_st_iupa = I - w + "" : s.ns_st_iupa = "0", s.ns_st_lpa = N + "", s.ns_st_dlpa = N - x + "";
                                    var B = t.isEmpty(s.ns_st_pc) ? Q.getPauses() : parseInt(s.ns_st_pc);
                                    s.ns_st_pc = B + "", s.ns_st_dpc = B - z + "";
                                    var D = t.isEmpty(s.ns_st_skc) ? Q.getSeeks() : parseInt(s.ns_st_skc);
                                    s.ns_st_skc = D + "", s.ns_st_dskc = D - H + "";
                                    var R = t.isEmpty(s.ns_st_bc) ? Q.getBuffers() : parseInt(s.ns_st_bc);
                                    s.ns_st_bc = R + "", s.ns_st_dbc = R - O + "";
                                    var F = t.isEmpty(s.ns_st_skt) ? Q.getSeekingTime() : parseInt(s.ns_st_skt);
                                    s.ns_st_skt = F + "", s.ns_st_dskt = F - U + "";
                                    var M = t.isEmpty(s.ns_st_ska) ? Q.getSeekingAmount() : parseInt(s.ns_st_ska);
                                    return s.ns_st_ska = M + "", s.ns_st_dska = M - j + "", i && (s.ns_st_spc = Y + "", s.ns_st_apc = $ + "", s.ns_st_sq = J + "", s.ns_st_asq = X + ""), i || 0 != Z ? s.ns_st_sc = Z + "" : s.ns_st_sc = "1", t.extend(s, a, r), s
                                },
                                updateDeltaLabels: function(e) {
                                    g = parseInt(e.ns_st_pt), _ = parseInt(e.ns_st_et), L = parseInt(e.ns_st_bt), k = parseInt(e.ns_st_upc), E = parseInt(e.ns_st_lpc), T = parseInt(e.ns_st_upa), x = parseInt(e.ns_st_lpa), z = parseInt(e.ns_st_pc),
                                        H = parseInt(e.ns_st_skc), O = parseInt(e.ns_st_bc), U = parseInt(e.ns_st_skt), j = parseInt(e.ns_st_ska), Q.setSeekingDirection(0)
                                },
                                updateIndependentLabels: function(e) {
                                    p = parseInt(e.ns_st_pt), A = parseInt(e.ns_st_upc), w = parseInt(e.ns_st_upa)
                                },
                                getVideoTrack: function() {
                                    return Q.getInternalLabel("ns_st_vt")
                                },
                                setVideoTrack: function(e) {
                                    Q.setInternalLabel("ns_st_vt", e + "")
                                },
                                getAudioTrack: function() {
                                    return Q.getInternalLabel("ns_st_at")
                                },
                                setAudioTrack: function(e) {
                                    Q.setInternalLabel("ns_st_at", e + "")
                                },
                                getSubtitleTrack: function() {
                                    return Q.getInternalLabel("ns_st_tt")
                                },
                                setSubtitleTrack: function(e) {
                                    Q.setInternalLabel("ns_st_tt", e + "")
                                },
                                getCDN: function() {
                                    return Q.getInternalLabel("ns_st_cdn")
                                },
                                setCDN: function(e) {
                                    Q.setInternalLabel("ns_st_cdn", e + "")
                                },
                                getSegmentPlaybackIntervals: function() {
                                    return S
                                },
                                setAssetPlaybackIntervals: function(e) {
                                    S = e
                                },
                                getAssetPlaybackIntervals: function() {
                                    return h
                                },
                                incrementPauses: function() {
                                    W++
                                },
                                incrementSeeks: function() {
                                    q++
                                },
                                incrementPlayCounter: function() {
                                    J++
                                },
                                getPlayCounter: function() {
                                    return J
                                },
                                getBufferingTime: function() {
                                    return I
                                },
                                setBufferingTime: function(e) {
                                    I = e
                                },
                                addBufferingTime: function(e) {
                                    if (!isNaN(C)) {
                                        var t = Q.getBufferingTime();
                                        t += e - C, Q.setBufferingTime(t), C = NaN
                                    }
                                },
                                setPlaybackStartPosition: function(e) {
                                    P = parseInt(e)
                                },
                                getPlaybackStartPosition: function() {
                                    return P
                                },
                                addInterval: function(e) {
                                    isNaN(P) || isNaN(e) || (S = t.addNewPlaybackInterval(S, P, e, ee), h = t.addNewPlaybackInterval(h, P, e, ee), P = NaN)
                                },
                                getElapsedTime: function() {
                                    return y
                                },
                                setElapsedTime: function(e) {
                                    y = e
                                },
                                addElapsedTime: function(e) {
                                    if (!isNaN(m)) {
                                        var t = Q.getElapsedTime();
                                        t += e - m, Q.setElapsedTime(t), m = NaN
                                    }
                                },
                                getElapsedTimestamp: function() {
                                    return m
                                },
                                setElapsedTimestamp: function(e) {
                                    m = e
                                },
                                addPlaybackTime: function(e) {
                                    if (!isNaN(l)) {
                                        var t = Q.getPlaybackTime();
                                        t += e - l, Q.setPlaybackTime(t), l = NaN
                                    }
                                },
                                getPlaybackTime: function() {
                                    return c
                                },
                                getExpectedPlaybackPosition: function(e) {
                                    return isNaN(l) ? b : b + (e - l)
                                },
                                setPlaybackTimeOffset: function(e) {
                                    b = e
                                },
                                getPlaybackTimeOffset: function() {
                                    return b
                                },
                                setPlaybackTime: function(e) {
                                    c = e
                                },
                                getPlaybackTimestamp: function() {
                                    return l
                                },
                                setPlaybackTimestamp: function(e) {
                                    l = e
                                },
                                setPreviousPlaybackTime: function(e) {
                                    g = e
                                },
                                setPreviousPlaybackTimestamp: function(e) {
                                    d = e
                                },
                                getBufferingTimestamp: function() {
                                    return C
                                },
                                setBufferingTimestamp: function(e) {
                                    C = e
                                },
                                getPauses: function() {
                                    return W
                                },
                                setPauses: function(e) {
                                    W = e
                                },
                                getSeeks: function() {
                                    return q
                                },
                                setSeeks: function(e) {
                                    q = e
                                },
                                setSeeking: function(e) {
                                    B = e
                                },
                                isSeeking: function() {
                                    return B
                                },
                                setCollectingSeekingTime: function(e) {
                                    M = e
                                },
                                isCollectingSeekingTime: function() {
                                    return M
                                },
                                setAssetStarted: function(e) {
                                    s = e
                                },
                                isAssetStarted: function() {
                                    return s
                                },
                                setPlaybackStarted: function(e) {
                                    i = e
                                },
                                isPlaybackStarted: function() {
                                    return i
                                },
                                setSeekingTimestamp: function(e) {
                                    D = e
                                },
                                getSeekingTimestamp: function() {
                                    return D
                                },
                                addSeekingTime: function(e) {
                                    if (!isNaN(D)) {
                                        var t = Q.getSeekingTime();
                                        t += e - D, Q.setSeekingTime(t), D = NaN
                                    }
                                },
                                getSeekingTime: function() {
                                    return R
                                },
                                setSeekingTime: function(e) {
                                    R = e
                                },
                                setSeekingTimeBeforeEnd: function(e) {
                                    K = e
                                },
                                getSeekingTimeBeforeEnd: function() {
                                    return K
                                },
                                setSeekStartPosition: function(e) {
                                    F = e
                                },
                                getSeekStartPosition: function() {
                                    return F
                                },
                                setSeekingAmount: function(e) {
                                    G = e
                                },
                                getSeekingAmount: function() {
                                    return G
                                },
                                addSeekingAmount: function(e) {
                                    var t = Q.getSeekingAmount();
                                    t += Math.abs(e - F), Q.setSeekingAmount(t);
                                    var n;
                                    F == e ? n = 0 : F > e ? n = -1 : F < e && (n = 1), Q.setSeekingDirection(n), F = 0
                                },
                                getSeekingDirection: function() {
                                    return parseInt(Q.getInternalLabel("ns_st_skd"))
                                },
                                setSeekingDirection: function(e) {
                                    Q.setInternalLabel("ns_st_skd", e + "")
                                },
                                resetAssetLifecycleLabels: function() {
                                    c = 0, g = 0, p = 0, I = 0, L = 0, N = 0, O = 0, W = 0, z = 0, J = 0, h = [], T = 0, w = 0, x = 0, y = 0, _ = 0, R = 0, U = 0, G = 0, j = 0, q = 0, H = 0
                                },
                                incrementSegmentPlaybackCounter: function() {
                                    Y++
                                },
                                incrementAssetLoadCounter: function() {
                                    Z++
                                },
                                incrementAssetPlaybackCounter: function() {
                                    $++
                                },
                                getPreviousUniquePlaybackInterval: function() {
                                    return k
                                },
                                setPreviousUniquePlaybackInterval: function(e) {
                                    k = e
                                },
                                getPreviousEventIndependentUniquePlaybackInterval: function() {
                                    return A
                                },
                                setPreviousEventIndependentUniquePlaybackInterval: function(e) {
                                    A = e
                                },
                                setPreviousLongestPlaybackInterval: function(e) {
                                    E = e
                                },
                                getPreviousLongestPlaybackInterval: function() {
                                    return E
                                },
                                resetAssetPlaybackIntervals: function() {
                                    h = [], T = 0, w = 0, x = 0
                                },
                                setSegmentPlaybackCounter: function(e) {
                                    Y = e
                                },
                                setAssetLoadCounter: function(e) {
                                    Z = e
                                },
                                setAssetPlaybackCounter: function(e) {
                                    $ = e
                                },
                                setLowestPartNumberPlayed: function(e) {
                                    v = e
                                },
                                getSegmentPlaybackCounter: function() {
                                    return Y
                                },
                                getAssetLoadCounter: function() {
                                    return Z
                                },
                                getAssetPlaybackCounter: function() {
                                    return $
                                },
                                getLowestPartNumberPlayed: function() {
                                    return v
                                },
                                getBuffers: function() {
                                    return N
                                },
                                incrementBufferCount: function() {
                                    N++
                                },
                                getPreviousBufferingTime: function() {
                                    return L
                                },
                                setPlaySequenceCounter: function(e) {
                                    X = e
                                },
                                incrementPlaySequenceCounter: function() {
                                    X++
                                },
                                getPlaySequenceCounter: function() {
                                    return X
                                },
                                isPlaybackSessionLooping: function() {
                                    return V
                                },
                                setPlaybackSessionLooping: function(e) {
                                    V = e
                                },
                                enableAutoCalculatePositions: function(e) {
                                    o = !!e
                                },
                                isAutoCalculatePositionsEnabled: function() {
                                    return o
                                }
                            }), e()
                        }
                        return e.resetAsset = function(e, t, n) {
                            for (var s = e.getLabels(), i = {}, a = 0; n && a < n.length; ++a) s.hasOwnProperty(n[a]) && (i[n[a]] = s[n[a]]);
                            t.setLabels(i), t.setPlaybackIntervalMergeTolerance(e.getPlaybackIntervalMergeTolerance())
                        }, e
                    }(),
                    p = function() {
                        function e(e) {
                            function n() {
                                s = new g, o = {}, o.ns_st_id = +new Date + "", u = {}, i = NaN, a = 0, r = NaN, p = {}, b = 0, d = !1, y = !1, m = 0, v = 0, _ = 0, S = 1, h = 0, P = []
                            }
                            var s, i, a, r, o, u, d, p, b, y, m, _, v, S, h, P, k = this;
                            t.extend(this, {
                                resetAsset: function() {
                                    var e = s;
                                    s = new g, g.resetAsset(e, s)
                                },
                                hashExists: function(e) {
                                    return null != p[e]
                                },
                                storeHash: function(e) {
                                    p[e] = {}
                                },
                                removeHash: function(e) {
                                    delete p[e]
                                },
                                storeAssetPlaybackCounters: function() {
                                    for (var e in p)
                                        if (p.hasOwnProperty(e) && p[e].clipNumber === s.getClipNumber()) {
                                            t.extend(p[e], {
                                                segmentPlaybackCounter: s.getSegmentPlaybackCounter(),
                                                assetLoadCounter: s.getAssetLoadCounter(),
                                                assetPlaybackCounter: s.getAssetPlaybackCounter(),
                                                lowestPartNumberPlayed: s.getLowestPartNumberPlayed(),
                                                seeking: s.isSeeking(),
                                                seekingTimeBeforeEnd: s.getSeekingTimeBeforeEnd(),
                                                seekingStartPosition: s.getSeekStartPosition(),
                                                segmentPlaybackIntervals: s.getSegmentPlaybackIntervals(),
                                                videoTrack: s.getVideoTrack(),
                                                audioTrack: s.getAudioTrack(),
                                                subtitleTrack: s.getSubtitleTrack(),
                                                cdn: s.getCDN(),
                                                playSequenceCounter: s.getPlaySequenceCounter(),
                                                previousUniquePlaybackInterval: s.getPreviousUniquePlaybackInterval(),
                                                previousEventIndependentUniquePlaybackInterval: s.getPreviousEventIndependentUniquePlaybackInterval(),
                                                previousLongestPlaybackInterval: s.getPreviousLongestPlaybackInterval()
                                            });
                                            break
                                        }
                                },
                                getStoredAssetRegisters: function(e) {
                                    return p[e]
                                },
                                getClipNumber: function(e) {
                                    return p[e].clipNumber
                                },
                                getMaxClipNumber: function() {
                                    return b
                                },
                                storeClipNumber: function(e, t) {
                                    p[e].clipNumber = t, t > b && (b = t)
                                },
                                setLabels: function(e) {
                                    null != e && t.extend(u, e)
                                },
                                getLabels: function() {
                                    return u
                                },
                                setLabel: function(e, t) {
                                    var n = {};
                                    n[e] = t, k.setLabels(n)
                                },
                                getLabel: function(e) {
                                    return u[e]
                                },
                                getAsset: function() {
                                    return s
                                },
                                addInternalErrorFlag: function(e) {
                                    for (var t = 0; t < P.length; ++t)
                                        if (P[t] == e) return;
                                    P.push(e)
                                },
                                createLabels: function(n, i) {
                                    var a = n || {},
                                        c = t.isEmpty(a.ns_st_pa) ? k.getPlaybackTime() : parseInt(a.ns_st_pa);
                                    return a.ns_st_pa = c + (isNaN(r) ? 0 : i - r) + "", a.ns_st_pp = v + "", a.ns_st_sp = S + "", a.ns_st_bp = h + "", y || (a.ns_st_pb = null != a.ns_st_pb ? a.ns_st_pb : "1"), s.isPlaybackStarted() && (a.ns_st_ppc = m + "", a.ns_st_psq = _ + ""), P.length > 0 && (a.ns_st_ie = (a.ns_st_ie ? a.ns_st_ie + ";" : "") + P.join(";")), t.extend(a, o, u), e.getPlaybackSession().getAsset().createLabels(a, i), a
                                },
                                incrementPlayCounter: function() {
                                    S++
                                },
                                incrementPauses: function() {
                                    v++
                                },
                                addPlaybackTime: function(e) {
                                    if (!isNaN(r)) {
                                        var t = k.getPlaybackTime();
                                        t += e - r, k.setPlaybackTime(t), r = NaN
                                    }
                                },
                                addBufferingTime: function(e) {
                                    if (!isNaN(i)) {
                                        var t = k.getBufferingTime();
                                        t += e - i, k.setBufferingTime(t), i = NaN
                                    }
                                },
                                getBufferingTime: function() {
                                    return h
                                },
                                setBufferingTime: function(e) {
                                    h = e
                                },
                                getPlaybackTime: function() {
                                    return a
                                },
                                setBufferingTimestamp: function(e) {
                                    i = e
                                },
                                getBufferingTimestamp: function() {
                                    return i
                                },
                                setPlaybackTime: function(e) {
                                    a = e
                                },
                                setPlaybackTimestamp: function(e) {
                                    r = e
                                },
                                getPlaybackTimestamp: function() {
                                    return r
                                },
                                getPauses: function() {
                                    return v
                                },
                                setPauses: function(e) {
                                    v = e
                                },
                                isPlaybackSessionStarted: function() {
                                    return d
                                },
                                setPlaybackSessionStarted: function(e) {
                                    d = e
                                },
                                getPlaybackCounter: function() {
                                    return m
                                },
                                incrementPlaybackCounter: function() {
                                    m++
                                },
                                setFirstEventSent: function(e) {
                                    y = e
                                },
                                setPlaySequenceCounter: function(e) {
                                    _ = e
                                },
                                incrementPlaySequenceCounter: function() {
                                    _++
                                },
                                getPlaybackSessionID: function() {
                                    return o.ns_st_id
                                },
                                setAsset: function(n, s) {
                                    e.getLogging().apiCall("setAsset", n, s), n = t.jsonObjectToStringDictionary(n);
                                    var i = e.getStateMachine().getCurrentState();
                                    if (i != l.IDLE) {
                                        e.getLogging().infoLog("Ending the current Clip. It was in state:", t.stateToString(i));
                                        var a = {};
                                        e.getStaCore().newEvent(c.END, t.fixEventTime(a), a)
                                    }
                                    var r = "",
                                        o = 0;
                                    if (null != n.ns_st_cn) r = n.ns_st_cn;
                                    else
                                        for (var u = 0; u < f.STANDARD_METADATA_LABELS.length; u++) n[f.STANDARD_METADATA_LABELS[u]] && (r += f.STANDARD_METADATA_LABELS[u] + ":" + n[f.STANDARD_METADATA_LABELS[u]] + ";");
                                    var d = k,
                                        g = d.getAsset();
                                    g.isAssetStarted() ? (d.hashExists(g.getHash()) || (d.storeHash(g.getHash()), d.storeClipNumber(g.getHash(), g.getClipNumber())), d.storeAssetPlaybackCounters(), o = d.hashExists(r) ? d.getClipNumber(r) : t.exists(n.ns_st_cn) ? parseInt(n.ns_st_cn) : d.getMaxClipNumber() + 1) : o = d.hashExists(r) ? d.getClipNumber(r) : g.getClipNumber(), d.resetAsset(), g = d.getAsset(), g.setHash(r), g.setClipNumber(o), g.setLabels(n);
                                    var p = d.getStoredAssetRegisters(r);
                                    p && (g.setAssetStarted(!0), g.setSegmentPlaybackCounter(p.segmentPlaybackCounter), g.setAssetLoadCounter(p.assetLoadCounter), g.setAssetPlaybackCounter(p.assetPlaybackCounter), g.setLowestPartNumberPlayed(p.lowestPartNumberPlayed), g.setSeeking(p.seeking), g.setSeekingTimeBeforeEnd(p.seekingTimeBeforeEnd), g.setSeekStartPosition(p.seekingStartPosition), g.setAssetPlaybackIntervals(p.segmentPlaybackIntervals), p.videoTrack && g.setVideoTrack(p.videoTrack), p.audioTrack && g.setAudioTrack(p.audioTrack), p.subtitleTrack && g.setSubtitleTrack(p.subtitleTrack), p.cdn && g.setCDN(p.cdn), g.setPlaySequenceCounter(p.playSequenceCounter), g.setPreviousUniquePlaybackInterval(p.previousUniquePlaybackInterval), g.setPreviousEventIndependentUniquePlaybackInterval(p.previousEventIndependentUniquePlaybackInterval), g.setPreviousLongestPlaybackInterval(p.previousLongestPlaybackInterval)), g.incrementAssetLoadCounter(), g.isAssetStarted() && s && d.incrementPlayCounter(), s && (d.setPlaySequenceCounter(0), g.setPlaybackSessionLooping(!0)), !t.exists(n.ns_st_tp) && t.exists(n.ns_st_ad) && t.isNotEmpty(n.ns_st_ad) && "0" !== n.ns_st_ad && g.setInternalLabel("ns_st_tp", "1")
                                }
                            }), n()
                        }
                        return e.resetPlaybackSession = function(e, t, n) {
                            for (var s = t.getAsset(), i = t.getLabels(), a = {}, r = 0; n && r < n.length; r++) i.hasOwnProperty(n[r]) && (a[n[r]] = i[n[r]]);
                            e.getPlaybackSession().setLabels(a), g.resetAsset(s, e.getPlaybackSession().getAsset(), n)
                        }, e
                    }(),
                    b = function() {
                        return function(e) {
                            function n() {
                                i = 1
                            }

                            function s(n) {
                                a = t.extend({}, n);
                                var s = e.getStaCore().getLiveEndpointURL();
                                if (e.getAppCore()) {
                                    if (e.getStaCore().isProperlyInitialized()) {
                                        var i = e.getStaCore().getExports().et;
                                        if ("function" == typeof e.getAppCore().getMeasurementDispatcher) {
                                            var r = e.getAppCore().getMeasurementDispatcher();
                                            r.send(i.HIDDEN, n, s)
                                        } else {
                                            var o = e.getStaCore().getExports().am,
                                                u = o.newApplicationMeasurement(e.getAppCore(), i.HIDDEN, n, s);
                                            e.getAppCore().getQueue().offer(u)
                                        }
                                    }
                                } else s && e.getStaCore().getPlatformAPI().httpGet(e.getStaCore().prepareUrl(s, n))
                            }
                            var i, a, r = this,
                                o = [];
                            t.extend(this, {
                                newEvent: function(e) {
                                    for (var t = 0; t < o.length; ++t) o[t](e.eventLabels);
                                    s(e.eventLabels), e.eventType != c.HEARTBEAT && r.incrementEventCounter()
                                },
                                addMeasurementListener: function(e) {
                                    "function" == typeof e && o.push(e)
                                },
                                removeMeasurementListener: function(e) {
                                    for (var t = NaN, n = 0; n < o.length; ++n)
                                        if (o[n] == e) {
                                            t = n;
                                            break
                                        }
                                    isNaN(t) || o.splice(t, 1)
                                },
                                getEventCounter: function() {
                                    return i
                                },
                                incrementEventCounter: function() {
                                    i++
                                },
                                setEventCounter: function(e) {
                                    i = e
                                },
                                getMeasurementSnapshot: function() {
                                    return a
                                }
                            }), n()
                        }
                    }(),
                    y = function() {
                        return function(e) {
                            function n() {
                                r = 0, o = 0
                            }

                            function s() {
                                o++;
                                var n = {},
                                    s = t.fixEventTime(n);
                                n.ns_st_hc = e.getHeartbeat().getCount() + "";
                                var i = e.getStaCore().createLabels(c.HEARTBEAT, n, s);
                                e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i), r = 0, u.resume()
                            }

                            function i() {
                                null != a && (e.getStaCore().getPlatformAPI().clearTimeout(a), a = null)
                            }
                            var a, r, o, u = this,
                                l = f.DEFAULT_HEARTBEAT_INTERVAL;
                            t.extend(this, {
                                getCount: function() {
                                    return o
                                },
                                setIntervals: function(e) {
                                    l = e
                                },
                                getInterval: function(e) {
                                    var t = 0;
                                    if (null != l)
                                        for (var n = 0; n < l.length; n++) {
                                            var s = l[n],
                                                i = s.playingtime;
                                            if (!i || e < i) {
                                                t = s.interval;
                                                break
                                            }
                                        }
                                    return t
                                },
                                getIntervals: function() {
                                    return l
                                },
                                resume: function() {
                                    i();
                                    var t = u.getInterval(e.getPlaybackSession().getAsset().getPlaybackTime() + (+new Date - e.getPlaybackSession().getAsset().getPlaybackTimestamp()));
                                    if (t > 0) {
                                        var n = r > 0 ? r : t;
                                        a = e.getStaCore().getPlatformAPI().setTimeout(s, n)
                                    }
                                    r = 0
                                },
                                pause: function() {
                                    i();
                                    var t = u.getInterval(e.getPlaybackSession().getAsset().getPlaybackTime() + (+new Date - e.getPlaybackSession().getAsset().getPlaybackTimestamp()));
                                    r = t - (e.getPlaybackSession().getAsset().getPlaybackTime() + (+new Date - e.getPlaybackSession().getAsset().getPlaybackTimestamp())) % t
                                }
                            }), n()
                        }
                    }(),
                    m = function() {
                        return function(e) {
                            function n() {}

                            function s() {
                                var n = {},
                                    s = t.fixEventTime(n);
                                e.getStaCore().newPseudoEvent(c.KEEPALIVE, s, n), r.start()
                            }

                            function i() {
                                null != a && (e.getStaCore().getPlatformAPI().clearTimeout(a), a = null)
                            }
                            var a, r = this,
                                o = f.DEFAULT_KEEP_ALIVE_INTERVAL;
                            t.extend(r, {
                                start: function() {
                                    i(), a = e.getStaCore().getPlatformAPI().setTimeout(s, o)
                                },
                                stop: i,
                                setInterval: function(e) {
                                    o = e
                                },
                                getInterval: function() {
                                    return o
                                }
                            }), n()
                        }
                    }(),
                    _ = function() {
                        return function(e) {
                            function n() {
                                a = l.IDLE, i = null, s = NaN
                            }
                            var s, i, a, r = this;
                            t.extend(r, {
                                eventTypeToState: function(e) {
                                    if (a == l.IDLE) {
                                        if (e == c.PLAY) return l.PLAYING;
                                        if (e == c.SEEK_START) return l.SEEKING_BEFORE_PLAYBACK;
                                        if (e == c.BUFFER) return l.BUFFERING_BEFORE_PLAYBACK
                                    } else if (a == l.PLAYBACK_NOT_STARTED) {
                                        if (e == c.PLAY) return l.PLAYING;
                                        if (e == c.SEEK_START) return l.SEEKING_BEFORE_PLAYBACK;
                                        if (e == c.BUFFER) return l.BUFFERING_BEFORE_PLAYBACK;
                                        if (e == c.END || e == c.AD_SKIP) return l.IDLE
                                    } else if (a == l.PLAYING) {
                                        if (e == c.END || e == c.AD_SKIP) return l.IDLE;
                                        if (e == c.BUFFER) return l.BUFFERING_DURING_PLAYBACK;
                                        if (e == c.PAUSE) return l.PAUSED;
                                        if (e == c.SEEK_START) return l.SEEKING_DURING_PLAYBACK
                                    } else if (a == l.PAUSED) {
                                        if (e == c.END || e == c.AD_SKIP) return l.IDLE;
                                        if (e == c.BUFFER) return l.BUFFERING_DURING_PAUSE;
                                        if (e == c.PLAY) return l.PLAYING;
                                        if (e == c.SEEK_START) return l.SEEKING_DURING_PAUSE
                                    } else if (a == l.BUFFERING_BEFORE_PLAYBACK) {
                                        if (e == c.END || e == c.AD_SKIP) return l.IDLE;
                                        if (e == c.PAUSE || e == c.BUFFER_STOP) return l.PLAYBACK_NOT_STARTED;
                                        if (e == c.PLAY) return l.PLAYING;
                                        if (e == c.SEEK_START) return l.SEEKING_BEFORE_PLAYBACK
                                    } else if (a == l.BUFFERING_DURING_PLAYBACK) {
                                        if (e == c.END || e == c.AD_SKIP) return l.IDLE;
                                        if (e == c.PLAY || e == c.BUFFER_STOP) return l.PLAYING;
                                        if (e == c.PAUSE_ON_BUFFERING) return l.PAUSED_DURING_BUFFERING;
                                        if (e == c.SEEK_START) return l.SEEKING_DURING_BUFFERING;
                                        if (e == c.PAUSE) return l.PAUSED
                                    } else if (a == l.BUFFERING_DURING_SEEKING) {
                                        if (e == c.END || e == c.AD_SKIP) return l.IDLE;
                                        if (e == c.PLAY) return l.PLAYING;
                                        if (e == c.BUFFER_STOP) return l.SEEKING_DURING_PLAYBACK;
                                        if (e == c.PAUSE) return l.PAUSED
                                    } else if (a == l.BUFFERING_DURING_PAUSE) {
                                        if (e == c.END || e == c.AD_SKIP) return l.IDLE;
                                        if (e == c.PLAY) return l.PLAYING;
                                        if (e == c.SEEK_START) return l.SEEKING_DURING_PAUSE;
                                        if (e == c.BUFFER_STOP || e == c.PAUSE) return l.PAUSED
                                    } else if (a == l.SEEKING_BEFORE_PLAYBACK) {
                                        if (e == c.END || e == c.AD_SKIP) return l.IDLE;
                                        if (e == c.PAUSE) return l.PLAYBACK_NOT_STARTED;
                                        if (e == c.PLAY) return l.PLAYING;
                                        if (e == c.BUFFER) return l.BUFFERING_BEFORE_PLAYBACK
                                    } else if (a == l.SEEKING_DURING_PLAYBACK) {
                                        if (e == c.END || e == c.AD_SKIP) return l.IDLE;
                                        if (e == c.PLAY) return l.PLAYING;
                                        if (e == c.PAUSE) return l.PAUSED;
                                        if (e == c.BUFFER) return l.BUFFERING_DURING_SEEKING
                                    } else if (a == l.SEEKING_DURING_BUFFERING) {
                                        if (e == c.END || e == c.AD_SKIP) return l.IDLE;
                                        if (e == c.PLAY) return l.PLAYING;
                                        if (e == c.PAUSE || e == c.BUFFER_STOP) return l.PAUSED;
                                        if (e == c.BUFFER) return l.BUFFERING_DURING_SEEKING
                                    } else if (a == l.SEEKING_DURING_PAUSE) {
                                        if (e == c.END || e == c.AD_SKIP) return l.IDLE;
                                        if (e == c.PLAY) return l.PLAYING;
                                        if (e == c.PAUSE || e == c.BUFFER_STOP) return l.PAUSED;
                                        if (e == c.BUFFER) return l.BUFFERING_DURING_PAUSE
                                    } else if (a == l.PAUSED_DURING_BUFFERING) {
                                        if (e == c.END || e == c.AD_SKIP) return l.IDLE;
                                        if (e == c.SEEK_START) return l.SEEKING_DURING_BUFFERING;
                                        if (e == c.PAUSE) return l.PAUSED;
                                        if (e == c.PLAY || e == c.BUFFER_STOP) return l.PLAYING
                                    }
                                    return null
                                },
                                getCurrentState: function() {
                                    return a
                                },
                                newEvent: function(e, t) {
                                    var n = r.eventTypeToState(e);
                                    a != n && (i = a, a = n, s = t)
                                },
                                getPreviousState: function() {
                                    return i
                                },
                                getLastStateChangeTimestamp: function() {
                                    return s
                                }
                            }), n()
                        }
                    }(),
                    v = function() {
                        return function(e) {
                            var n = this;
                            t.extend(n, {
                                onSeekStartWhenPausedOrBufferingDuringPause: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getPlaybackSession().getAsset().isSeeking() ? e.getPlaybackSession().getAsset().isCollectingSeekingTime() || (e.getPlaybackSession().getAsset().setSeekingTimestamp(t), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!0)) : e.getPlaybackSession().getAsset().incrementSeeks(), e.getPlaybackSession().getAsset().isSeeking() || (e.getPlaybackSession().getAsset().setSeeking(!0), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), e.getPlaybackSession().getAsset().setSeekStartPosition(s), e.getPlaybackSession().getAsset().setSeekingTimestamp(t)), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t)
                                },
                                onBufferWhenSeekingOrPaused: function(t, n) {
                                    e.getPlaybackSession().setBufferingTimestamp(t), e.getPlaybackSession().getAsset().setBufferingTimestamp(t), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t)
                                },
                                onPlayWhenSeekingDuringBufferingOrSeekingDuringPause: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getPlaybackSession().incrementPlaySequenceCounter(), e.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), e.getPlaybackSession().getAsset().isSeeking() && (e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().addSeekingTime(t), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), e.getPlaybackSession().getAsset().addSeekingAmount(s), e.getPlaybackSession().getAsset().setSeeking(!1)), e.getPlaybackSession().getAsset().incrementPlayCounter(), e.getPlaybackSession().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackStartPosition(s), e.getHeartbeat().resume(), e.getKeepAlive().start();
                                    var i = e.getStaCore().createLabels(c.PLAY, n, t);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i)
                                },
                                onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause: function(t, n) {
                                    e.getPlaybackSession().addBufferingTime(t), e.getPlaybackSession().getAsset().addBufferingTime(t), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t)
                                },
                                onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause: function(t, n) {
                                    e.getPlaybackSession().getAsset().isSeeking() && e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().addSeekingTime(t), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t)
                                },
                                onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause: function(n, s) {
                                    e.getStaCore().resetHeartbeat(), e.getKeepAlive().stop(), e.getPlaybackSession().getAsset().addElapsedTime(n);
                                    var i = e.getStaCore().createLabels(c.END, s, n);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i), e.getPlaybackSession().getAsset().isSeeking() && e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(n - e.getPlaybackSession().getAsset().getSeekingTimestamp()), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), e.getPlaybackSession().storeAssetPlaybackCounters(), e.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), e.getPlaybackSession().getAsset().setPlaybackStarted(!1), s.hasOwnProperty("ns_st_pe") && t.parseBoolean(s.ns_st_pe, !1) && e.getStaCore().resetPlaybackSession()
                                },
                                onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause: function(t, n) {
                                    e.getPlaybackSession().getAsset().isSeeking() && e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().addSeekingTime(t), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t)
                                },
                                onBufferStopOrOnPlayWhenBufferingDuringPlayback: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getStaCore().stopPausedOnBufferingTimer(), e.getPlaybackSession().incrementPlaySequenceCounter(), e.getPlaybackSession().getAsset().incrementPlayCounter(), e.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), e.getPlaybackSession().addBufferingTime(t), e.getPlaybackSession().getAsset().addBufferingTime(t), e.getPlaybackSession().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackStartPosition(s), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t), e.getHeartbeat().resume(), e.getKeepAlive().start()
                                }
                            })
                        }
                    }(),
                    S = function() {
                        return function(e) {
                            var n = this;
                            t.extend(n, {
                                onEndOrAdSkip: function(n, s) {
                                    e.getPlaybackSession().addBufferingTime(n), e.getPlaybackSession().getAsset().addBufferingTime(n), e.getPlaybackSession().getAsset().isSeeking() && e.getPlaybackSession().getAsset().isCollectingSeekingTime() && e.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(n - e.getPlaybackSession().getAsset().getSeekingTimestamp()), e.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), e.getPlaybackSession().getAsset().setPlaybackStarted(!1), s.hasOwnProperty("ns_st_pe") && t.parseBoolean(s.ns_st_pe, !1) && e.getStaCore().resetPlaybackSession()
                                },
                                onBufferStop: function(t, n) {
                                    e.getPlaybackSession().addBufferingTime(t), e.getPlaybackSession().getAsset().addBufferingTime(t), e.getPlaybackSession().getAsset().isSeeking() && e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().addSeekingTime(t), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1))
                                },
                                onSeekStart: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getPlaybackSession().addBufferingTime(t), e.getPlaybackSession().getAsset().addBufferingTime(t), e.getPlaybackSession().getAsset().isSeeking() ? e.getPlaybackSession().getAsset().isCollectingSeekingTime() || (e.getPlaybackSession().getAsset().setSeekingTimestamp(t), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!0)) : e.getPlaybackSession().getAsset().incrementSeeks(), e.getPlaybackSession().getAsset().isSeeking() || (e.getPlaybackSession().getAsset().setSeeking(!0), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), e.getPlaybackSession().getAsset().setSeekStartPosition(s), e.getPlaybackSession().getAsset().setSeekingTimestamp(t))
                                },
                                onPause: function(t, n) {
                                    e.getPlaybackSession().addBufferingTime(t), e.getPlaybackSession().getAsset().addBufferingTime(t), e.getPlaybackSession().getAsset().isSeeking() && e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().addSeekingTime(t), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1))
                                },
                                onPlay: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getPlaybackSession().addBufferingTime(t), e.getPlaybackSession().getAsset().addBufferingTime(t), e.getPlaybackSession().getAsset().isSeeking() && (e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().addSeekingTime(t), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), e.getPlaybackSession().getAsset().addSeekingAmount(s), e.getPlaybackSession().getAsset().setSeeking(!1)), e.getPlaybackSession().getAsset().setPlaybackStarted(!0), (e.getPlaybackSession().getAsset().isPlaybackSessionLooping() || 0 == e.getPlaybackSession().getPlaybackCounter()) && (e.getPlaybackSession().incrementPlaybackCounter(), e.getPlaybackSession().getAsset().setPlaybackSessionLooping(!1)), e.getPlaybackSession().incrementPlaySequenceCounter(), e.getPlaybackSession().getAsset().setPlaybackStarted(!0), e.getPlaybackSession().getAsset().incrementSegmentPlaybackCounter(), e.getPlaybackSession().getAsset().incrementPlayCounter(), e.getPlaybackSession().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackStartPosition(s), (0 == e.getPlaybackSession().getAsset().getLowestPartNumberPlayed() || e.getPlaybackSession().getAsset().getPartNumber() <= e.getPlaybackSession().getAsset().getLowestPartNumberPlayed()) && (e.getPlaybackSession().getAsset().setLowestPartNumberPlayed(e.getPlaybackSession().getAsset().getPartNumber()), e.getPlaybackSession().getAsset().incrementAssetPlaybackCounter(), e.getPlaybackSession().getAsset().setPlaySequenceCounter(0), e.getPlaybackSession().getAsset().resetAssetPlaybackIntervals()), e.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), e.getStaCore().isLoadingTimeSent() || (n.ns_st_lt = e.getStaCore().getLoadTimeOffset() + t - e.getStaCore().getInitTimestamp() + "", e.getStaCore().setLoadingTimeSent(!0)), e.getHeartbeat().resume(), e.getKeepAlive().start();
                                    var i = e.getStaCore().createLabels(c.PLAY, n, t);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i)
                                }
                            })
                        }
                    }(),
                    h = function() {
                        return function(e) {
                            var n = this;
                            t.extend(n, {
                                onEndAndSkip: function(n, s) {
                                    e.getStaCore().resetHeartbeat(), e.getKeepAlive().stop(), e.getPlaybackSession().addBufferingTime(n), e.getPlaybackSession().getAsset().addBufferingTime(n), e.getPlaybackSession().getAsset().addElapsedTime(n);
                                    var i = e.getStaCore().createLabels(c.END, s, n);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i), e.getPlaybackSession().getAsset().isSeeking() && e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(n - e.getPlaybackSession().getAsset().getSeekingTimestamp()), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), e.getPlaybackSession().storeAssetPlaybackCounters(), e.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), e.getPlaybackSession().getAsset().setPlaybackStarted(!1), s.hasOwnProperty("ns_st_pe") && t.parseBoolean(s.ns_st_pe, !1) && e.getStaCore().resetPlaybackSession()
                                },
                                onPause: function(t, n) {
                                    e.getPlaybackSession().addBufferingTime(t), e.getPlaybackSession().getAsset().addBufferingTime(t), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t)
                                },
                                onPlay: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getPlaybackSession().incrementPlaySequenceCounter(), e.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), e.getPlaybackSession().getAsset().incrementPlayCounter(), e.getPlaybackSession().addBufferingTime(t), e.getPlaybackSession().getAsset().addBufferingTime(t), e.getPlaybackSession().getAsset().isSeeking() && (e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().addSeekingTime(t), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), e.getPlaybackSession().getAsset().addSeekingAmount(s), e.getPlaybackSession().getAsset().setSeeking(!1)), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t), e.getPlaybackSession().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackStartPosition(s), e.getHeartbeat().resume(), e.getKeepAlive().start();
                                    var i = e.getStaCore().createLabels(c.PLAY, n, t);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i)
                                }
                            })
                        }
                    }(),
                    P = function() {
                        return function(e) {
                            var n = this;
                            t.extend(n, {
                                onPauseOnBuffering: function(t, n) {
                                    parseInt(n.ns_st_po), e.getStaCore().stopPausedOnBufferingTimer(), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t), e.getPlaybackSession().addBufferingTime(t), e.getPlaybackSession().getAsset().addBufferingTime(t), e.getPlaybackSession().incrementPauses(), e.getPlaybackSession().getAsset().incrementPauses();
                                    var s = e.getStaCore().createLabels(c.PAUSE, n, t);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(s.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(s.eventLabels), e.getEventManager().newEvent(s), e.getPlaybackSession().setBufferingTimestamp(t), e.getPlaybackSession().getAsset().setBufferingTimestamp(t)
                                },
                                onEndOrAdSkip: function(n, s) {
                                    parseInt(s.ns_st_po), e.getStaCore().stopPausedOnBufferingTimer(), e.getStaCore().resetHeartbeat(), e.getKeepAlive().stop(), e.getPlaybackSession().addBufferingTime(n), e.getPlaybackSession().getAsset().addBufferingTime(n), e.getPlaybackSession().getAsset().addElapsedTime(n);
                                    var i = e.getStaCore().createLabels(c.END, s, n);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i), e.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), e.getPlaybackSession().getAsset().setPlaybackStarted(!1), s.hasOwnProperty("ns_st_pe") && t.parseBoolean(s.ns_st_pe, !1) && e.getStaCore().resetPlaybackSession()
                                },
                                onSeekStart: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getStaCore().stopPausedOnBufferingTimer(), e.getHeartbeat().pause(), e.getKeepAlive().stop(), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t), e.getPlaybackSession().addBufferingTime(t), e.getPlaybackSession().getAsset().addBufferingTime(t), e.getPlaybackSession().getAsset().incrementSeeks(), e.getPlaybackSession().getAsset().setSeeking(!0), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), e.getPlaybackSession().getAsset().setSeekStartPosition(s), e.getPlaybackSession().getAsset().setSeekingTimestamp(t), e.getPlaybackSession().incrementPauses(), e.getPlaybackSession().getAsset().incrementPauses();
                                    var i = e.getStaCore().createLabels(c.PAUSE, n, t);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i)
                                },
                                onPause: function(t, n) {
                                    parseInt(n.ns_st_po), e.getStaCore().stopPausedOnBufferingTimer(), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t), e.getPlaybackSession().addBufferingTime(t), e.getPlaybackSession().getAsset().addBufferingTime(t), e.getPlaybackSession().incrementPauses(), e.getPlaybackSession().getAsset().incrementPauses();
                                    var s = e.getStaCore().createLabels(c.PAUSE, n, t);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(s.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(s.eventLabels), e.getEventManager().newEvent(s)
                                }
                            })
                        }
                    }(),
                    k = function() {
                        return function(e) {
                            var n = this;
                            t.extend(n, {
                                onEndOrAdSkip: function(n, s) {
                                    e.getStaCore().resetHeartbeat(), e.getKeepAlive().stop(), e.getStaCore().stopPausedOnBufferingTimer(), e.getPlaybackSession().addBufferingTime(n), e.getPlaybackSession().getAsset().addBufferingTime(n), e.getPlaybackSession().getAsset().addElapsedTime(n);
                                    var i = e.getStaCore().createLabels(c.END, s, n);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i), e.getPlaybackSession().getAsset().isSeeking() && e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(n - e.getPlaybackSession().getAsset().getSeekingTimestamp()), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), e.getPlaybackSession().storeAssetPlaybackCounters(),
                                        e.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), e.getPlaybackSession().getAsset().setPlaybackStarted(!1), s.hasOwnProperty("ns_st_pe") && t.parseBoolean(s.ns_st_pe, !1) && e.getStaCore().resetPlaybackSession()
                                },
                                onPause: function(t, n) {
                                    e.getPlaybackSession().addBufferingTime(t), e.getPlaybackSession().getAsset().addBufferingTime(t), e.getPlaybackSession().incrementPauses(), e.getPlaybackSession().getAsset().incrementPauses(), e.getPlaybackSession().getAsset().isSeeking() && e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().addSeekingTime(t), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t)
                                },
                                onPlay: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getPlaybackSession().incrementPlaySequenceCounter(), e.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), e.getPlaybackSession().getAsset().incrementPlayCounter(), e.getPlaybackSession().addBufferingTime(t), e.getPlaybackSession().getAsset().addBufferingTime(t), e.getPlaybackSession().getAsset().isSeeking() && (e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().addSeekingTime(t), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), e.getPlaybackSession().getAsset().addSeekingAmount(s), e.getPlaybackSession().getAsset().setSeeking(!1)), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t), e.getPlaybackSession().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackStartPosition(s), e.getHeartbeat().resume(), e.getKeepAlive().start();
                                    var i = e.getStaCore().createLabels(c.PLAY, n, t);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i)
                                }
                            })
                        }
                    }(),
                    A = function() {
                        return function(e) {
                            var n = this;
                            t.extend(n, {
                                onBuffer: function(t, n) {
                                    e.getPlaybackSession().setPlaybackSessionStarted(!0), e.getPlaybackSession().getAsset().setAssetStarted(!0), e.getPlaybackSession().getAsset().isSeeking() && e.getPlaybackSession().getAsset().setSeekingTime(e.getPlaybackSession().getAsset().getSeekingTimeBeforeEnd()), e.getPlaybackSession().setBufferingTimestamp(t), e.getPlaybackSession().getAsset().setBufferingTimestamp(t)
                                },
                                onSeekStart: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getPlaybackSession().setPlaybackSessionStarted(!0), e.getPlaybackSession().getAsset().setAssetStarted(!0), e.getPlaybackSession().getAsset().isSeeking() && e.getPlaybackSession().getAsset().setSeekingTime(e.getPlaybackSession().getAsset().getSeekingTimeBeforeEnd()), e.getPlaybackSession().getAsset().incrementSeeks(), e.getPlaybackSession().getAsset().setSeeking(!0), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), e.getPlaybackSession().getAsset().setSeekStartPosition(s), e.getPlaybackSession().getAsset().setSeekingTimestamp(t)
                                },
                                onPlay: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getPlaybackSession().setPlaybackSessionStarted(!0), e.getPlaybackSession().getAsset().setAssetStarted(!0), (e.getPlaybackSession().getAsset().isPlaybackSessionLooping() || 0 == e.getPlaybackSession().getPlaybackCounter()) && (e.getPlaybackSession().incrementPlaybackCounter(), e.getPlaybackSession().getAsset().setPlaybackSessionLooping(!1)), e.getPlaybackSession().getAsset().isSeeking() && (e.getPlaybackSession().getAsset().setSeekingTime(e.getPlaybackSession().getAsset().getSeekingTimeBeforeEnd()), e.getPlaybackSession().getAsset().addSeekingAmount(s), e.getPlaybackSession().getAsset().setSeeking(!1)), e.getPlaybackSession().incrementPlaySequenceCounter(), e.getPlaybackSession().getAsset().setPlaybackStarted(!0), e.getPlaybackSession().getAsset().incrementSegmentPlaybackCounter(), (0 == e.getPlaybackSession().getAsset().getLowestPartNumberPlayed() || e.getPlaybackSession().getAsset().getPartNumber() <= e.getPlaybackSession().getAsset().getLowestPartNumberPlayed()) && (e.getPlaybackSession().getAsset().setLowestPartNumberPlayed(e.getPlaybackSession().getAsset().getPartNumber()), e.getPlaybackSession().getAsset().incrementAssetPlaybackCounter(), e.getPlaybackSession().getAsset().setPlaySequenceCounter(0), e.getPlaybackSession().getAsset().resetAssetPlaybackIntervals()), e.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), e.getPlaybackSession().getAsset().incrementPlayCounter(), e.getPlaybackSession().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackStartPosition(s), e.getStaCore().isLoadingTimeSent() || (n.ns_st_lt = e.getStaCore().getLoadTimeOffset() + t - e.getStaCore().getInitTimestamp() + "", e.getStaCore().setLoadingTimeSent(!0)), e.getHeartbeat().resume(), e.getKeepAlive().start();
                                    var i = e.getStaCore().createLabels(c.PLAY, n, t);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i)
                                }
                            })
                        }
                    }(),
                    E = function() {
                        return function(e) {
                            var n = this;
                            t.extend(n, {
                                onEndOrAdSkip: function(n, s) {
                                    e.getStaCore().resetHeartbeat(), e.getKeepAlive().stop(), e.getPlaybackSession().getAsset().addElapsedTime(n);
                                    var i = e.getStaCore().createLabels(c.END, s, n);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i), e.getPlaybackSession().getAsset().isSeeking() && e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(n - e.getPlaybackSession().getAsset().getSeekingTimestamp()), e.getPlaybackSession().getAsset().setSeeking(!1)), e.getPlaybackSession().storeAssetPlaybackCounters(), e.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), e.getPlaybackSession().getAsset().setPlaybackStarted(!1), s.hasOwnProperty("ns_st_pe") && t.parseBoolean(s.ns_st_pe, !1) && e.getStaCore().resetPlaybackSession()
                                },
                                onPlay: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getPlaybackSession().incrementPlaySequenceCounter(), e.getPlaybackSession().getAsset().isSeeking() && (e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().addSeekingTime(t), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), e.getPlaybackSession().getAsset().addSeekingAmount(s), e.getPlaybackSession().getAsset().setSeeking(!1)), e.getPlaybackSession().getAsset().incrementPlayCounter(), e.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), e.getPlaybackSession().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackStartPosition(s), e.getHeartbeat().resume(), e.getKeepAlive().start();
                                    var i = e.getStaCore().createLabels(c.PLAY, n, t);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i)
                                }
                            })
                        }
                    }(),
                    T = function() {
                        return function(e) {
                            var n = this;
                            t.extend(n, {
                                onEndOrAdSkip: function(n, s) {
                                    e.getStaCore().resetHeartbeat(), e.getKeepAlive().stop(), e.getPlaybackSession().addBufferingTime(n), e.getPlaybackSession().getAsset().addBufferingTime(n), e.getPlaybackSession().getAsset().addElapsedTime(n), e.getPlaybackSession().getAsset().isSeeking() && e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(n - e.getPlaybackSession().getAsset().getSeekingTimestamp()), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1));
                                    var i = e.getStaCore().createLabels(c.END, s, n);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i), e.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), e.getPlaybackSession().getAsset().setPlaybackStarted(!1), s.hasOwnProperty("ns_st_pe") && t.parseBoolean(s.ns_st_pe, !1) && e.getStaCore().resetPlaybackSession()
                                },
                                onBufferStop: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getPlaybackSession().addBufferingTime(t), e.getPlaybackSession().getAsset().addBufferingTime(t), e.getPlaybackSession().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackStartPosition(s), e.getHeartbeat().resume(), e.getKeepAlive().start();
                                    var i = e.getStaCore().createLabels(c.PLAY, n, t);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i)
                                },
                                onSeekStart: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getPlaybackSession().addBufferingTime(t), e.getPlaybackSession().getAsset().addBufferingTime(t), e.getPlaybackSession().getAsset().isSeeking() ? e.getPlaybackSession().getAsset().isCollectingSeekingTime() || (e.getPlaybackSession().getAsset().setSeekingTimestamp(t), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!0)) : e.getPlaybackSession().getAsset().incrementSeeks(), e.getPlaybackSession().getAsset().isSeeking() || (e.getPlaybackSession().getAsset().setSeeking(!0), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), e.getPlaybackSession().getAsset().setSeekStartPosition(s), e.getPlaybackSession().getAsset().setSeekingTimestamp(t)), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t)
                                },
                                onPause: function(t, n) {
                                    e.getPlaybackSession().addBufferingTime(t), e.getPlaybackSession().getAsset().addBufferingTime(t), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t)
                                },
                                onPlay: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getPlaybackSession().incrementPlaySequenceCounter(), e.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), e.getPlaybackSession().addBufferingTime(t), e.getPlaybackSession().getAsset().addBufferingTime(t), e.getPlaybackSession().getAsset().incrementPlayCounter(), e.getPlaybackSession().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackStartPosition(s), e.getHeartbeat().resume(), e.getKeepAlive().start();
                                    var i = e.getStaCore().createLabels(c.PLAY, n, t);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i)
                                }
                            })
                        }
                    }(),
                    w = function() {
                        return function(e) {
                            var n = this;
                            t.extend(n, {
                                onEndOrAdSkip: function(n, s) {
                                    e.getPlaybackSession().getAsset().isSeeking() && e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(n - e.getPlaybackSession().getAsset().getSeekingTimestamp()), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), e.getPlaybackSession().storeAssetPlaybackCounters(), e.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), e.getPlaybackSession().getAsset().setPlaybackStarted(!1), s.hasOwnProperty("ns_st_pe") && t.parseBoolean(s.ns_st_pe, !1) && e.getStaCore().resetPlaybackSession()
                                },
                                onSeekStart: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getPlaybackSession().getAsset().isSeeking() ? e.getPlaybackSession().getAsset().setSeekingTimestamp(t) : e.getPlaybackSession().getAsset().incrementSeeks(), e.getPlaybackSession().getAsset().isSeeking() || (e.getPlaybackSession().getAsset().setSeeking(!0), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), e.getPlaybackSession().getAsset().setSeekStartPosition(s), e.getPlaybackSession().getAsset().setSeekingTimestamp(t))
                                },
                                onPlay: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getPlaybackSession().getAsset().isSeeking() && (e.getPlaybackSession().getAsset().addSeekingAmount(s), e.getPlaybackSession().getAsset().setSeeking(!1)), e.getPlaybackSession().setPlaybackSessionStarted(!0), (e.getPlaybackSession().getAsset().isPlaybackSessionLooping() || 0 == e.getPlaybackSession().getPlaybackCounter()) && (e.getPlaybackSession().incrementPlaybackCounter(), e.getPlaybackSession().getAsset().setPlaybackSessionLooping(!1)), e.getPlaybackSession().incrementPlaySequenceCounter(), e.getPlaybackSession().getAsset().setPlaybackStarted(!0), e.getPlaybackSession().getAsset().incrementSegmentPlaybackCounter(), (0 == e.getPlaybackSession().getAsset().getLowestPartNumberPlayed() || e.getPlaybackSession().getAsset().getPartNumber() <= e.getPlaybackSession().getAsset().getLowestPartNumberPlayed()) && (e.getPlaybackSession().getAsset().setLowestPartNumberPlayed(e.getPlaybackSession().getAsset().getPartNumber()), e.getPlaybackSession().getAsset().incrementAssetPlaybackCounter(), e.getPlaybackSession().getAsset().setPlaySequenceCounter(0), e.getPlaybackSession().getAsset().resetAssetPlaybackIntervals()), e.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), e.getPlaybackSession().getAsset().incrementPlayCounter(), e.getPlaybackSession().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackStartPosition(s), e.getStaCore().isLoadingTimeSent() || (n.ns_st_lt = e.getStaCore().getLoadTimeOffset() + t - e.getStaCore().getInitTimestamp() + "", e.getStaCore().setLoadingTimeSent(!0)), e.getHeartbeat().resume(), e.getKeepAlive().start();
                                    var i = e.getStaCore().createLabels(c.PLAY, n, t);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i)
                                },
                                onBuffer: function() {
                                    e.getPlaybackSession().setBufferingTimestamp(eventTimestamp), e.getPlaybackSession().getAsset().setBufferingTimestamp(eventTimestamp)
                                }
                            })
                        }
                    }(),
                    x = function() {
                        return function(e) {
                            var n = this;
                            t.extend(n, {
                                onEndOrAdSkip: function(n, s) {
                                    var i = parseInt(s.ns_st_po);
                                    e.getStaCore().resetHeartbeat(), e.getKeepAlive().stop(), e.getPlaybackSession().addPlaybackTime(n), e.getPlaybackSession().getAsset().addPlaybackTime(n), e.getPlaybackSession().getAsset().addElapsedTime(n), e.getPlaybackSession().getAsset().addInterval(i);
                                    var a = e.getStaCore().createLabels(c.END, s, n);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(a.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(a.eventLabels), e.getEventManager().newEvent(a), e.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), e.getPlaybackSession().getAsset().setPlaybackStarted(!1), s.hasOwnProperty("ns_st_pe") && t.parseBoolean(s.ns_st_pe, !1) && e.getStaCore().resetPlaybackSession()
                                },
                                onBuffer: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getHeartbeat().pause(), e.getKeepAlive().stop(), e.getPlaybackSession().addPlaybackTime(t), e.getPlaybackSession().getAsset().addPlaybackTime(t), e.getPlaybackSession().getAsset().addInterval(s), e.getStaCore().isPauseOnBufferingEnabled() && e.getStaCore().startPausedOnBufferingTimer(t, n), e.getPlaybackSession().getAsset().incrementBufferCount(), e.getPlaybackSession().setBufferingTimestamp(t), e.getPlaybackSession().getAsset().setBufferingTimestamp(t), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t)
                                },
                                onSeekStart: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getHeartbeat().pause(), e.getKeepAlive().stop(), e.getPlaybackSession().addPlaybackTime(t), e.getPlaybackSession().getAsset().addPlaybackTime(t), e.getPlaybackSession().getAsset().addInterval(s), e.getPlaybackSession().getAsset().incrementSeeks(), e.getPlaybackSession().getAsset().setSeeking(!0), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), e.getPlaybackSession().getAsset().setSeekStartPosition(s), e.getPlaybackSession().getAsset().setSeekingTimestamp(t), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t), e.getPlaybackSession().incrementPauses(), e.getPlaybackSession().getAsset().incrementPauses();
                                    var i = e.getStaCore().createLabels(c.PAUSE, n, t);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i)
                                },
                                onPause: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getHeartbeat().pause(), e.getKeepAlive().stop(), e.getPlaybackSession().addPlaybackTime(t), e.getPlaybackSession().getAsset().addPlaybackTime(t), e.getPlaybackSession().getAsset().addInterval(s), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t), e.getPlaybackSession().incrementPauses(), e.getPlaybackSession().getAsset().incrementPauses();
                                    var i = e.getStaCore().createLabels(c.PAUSE, n, t);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i)
                                }
                            })
                        }
                    }(),
                    I = function() {
                        return function(e) {
                            var n = this;
                            t.extend(n, {
                                onEndOrAdSkip: function(n, s) {
                                    e.getPlaybackSession().getAsset().isSeeking() && e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(n - e.getPlaybackSession().getAsset().getSeekingTimestamp()), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), e.getPlaybackSession().storeAssetPlaybackCounters(), e.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), e.getPlaybackSession().getAsset().setPlaybackStarted(!1), s.hasOwnProperty("ns_st_pe") && t.parseBoolean(s.ns_st_pe, !1) && e.getStaCore().resetPlaybackSession()
                                },
                                onPause: function(t, n) {
                                    e.getPlaybackSession().getAsset().isSeeking() && e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().addSeekingTime(t), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1))
                                },
                                onPlay: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getPlaybackSession().getAsset().isSeeking() && (e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().addSeekingTime(t), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), e.getPlaybackSession().getAsset().addSeekingAmount(s), e.getPlaybackSession().getAsset().setSeeking(!1)), (e.getPlaybackSession().getAsset().isPlaybackSessionLooping() || 0 == e.getPlaybackSession().getPlaybackCounter()) && (e.getPlaybackSession().incrementPlaybackCounter(), e.getPlaybackSession().getAsset().setPlaybackSessionLooping(!1)), e.getPlaybackSession().incrementPlaySequenceCounter(), e.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), e.getPlaybackSession().getAsset().incrementPlayCounter(), e.getPlaybackSession().getAsset().setPlaybackStarted(!0), e.getPlaybackSession().getAsset().incrementSegmentPlaybackCounter(), (0 == e.getPlaybackSession().getAsset().getLowestPartNumberPlayed() || e.getPlaybackSession().getAsset().getPartNumber() <= e.getPlaybackSession().getAsset().getLowestPartNumberPlayed()) && (e.getPlaybackSession().getAsset().setLowestPartNumberPlayed(e.getPlaybackSession().getAsset().getPartNumber()), e.getPlaybackSession().getAsset().incrementAssetPlaybackCounter(), e.getPlaybackSession().getAsset().setPlaySequenceCounter(0), e.getPlaybackSession().getAsset().resetAssetPlaybackIntervals()), e.getPlaybackSession().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackStartPosition(s), e.getStaCore().isLoadingTimeSent() || (n.ns_st_lt = e.getStaCore().getLoadTimeOffset() + t - e.getStaCore().getInitTimestamp() + "", e.getStaCore().setLoadingTimeSent(!0)), e.getHeartbeat().resume(), e.getKeepAlive().start();
                                    var i = e.getStaCore().createLabels(c.PLAY, n, t);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i)
                                }
                            })
                        }
                    }(),
                    C = function() {
                        return function(e) {
                            var n = this;
                            t.extend(n, {
                                onPause: function(t, n) {
                                    e.getPlaybackSession().incrementPauses(), e.getPlaybackSession().getAsset().incrementPauses(), e.getPlaybackSession().getAsset().isSeeking() && e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().addSeekingTime(t), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t)
                                }
                            })
                        }
                    }(),
                    L = function() {
                        return function(e) {
                            var n = this;
                            t.extend(n, {
                                onEndOrAdSkip: function(n, s) {
                                    parseInt(s.ns_st_po), e.getStaCore().resetHeartbeat(), e.getKeepAlive().stop(), e.getPlaybackSession().getAsset().addElapsedTime(n);
                                    var i = e.getStaCore().createLabels(c.END, s, n);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i), e.getPlaybackSession().getAsset().isSeeking() && e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(n - e.getPlaybackSession().getAsset().getSeekingTimestamp()), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), e.getPlaybackSession().storeAssetPlaybackCounters(), e.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), e.getPlaybackSession().getAsset().setPlaybackStarted(!1), s.hasOwnProperty("ns_st_pe") && t.parseBoolean(s.ns_st_pe, !1) && e.getStaCore().resetPlaybackSession()
                                },
                                onPlay: function(t, n) {
                                    var s = parseInt(n.ns_st_po);
                                    e.getPlaybackSession().incrementPlaySequenceCounter(), e.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), e.getPlaybackSession().getAsset().incrementPlayCounter(), e.getPlaybackSession().getAsset().isSeeking() && (e.getPlaybackSession().getAsset().isCollectingSeekingTime() && (e.getPlaybackSession().getAsset().addSeekingTime(t), e.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), e.getPlaybackSession().getAsset().addSeekingAmount(s), e.getPlaybackSession().getAsset().setSeeking(!1)), e.getPlaybackSession().getAsset().addElapsedTime(t), e.getPlaybackSession().getAsset().setElapsedTimestamp(t), e.getPlaybackSession().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackTimestamp(t), e.getPlaybackSession().getAsset().setPlaybackStartPosition(s), e.getStaCore().isLoadingTimeSent() || (n.ns_st_lt = e.getStaCore().getLoadTimeOffset() + t - e.getStaCore().getInitTimestamp() + "", e.getStaCore().setLoadingTimeSent(!0)), e.getHeartbeat().resume(), e.getKeepAlive().start();
                                    var i = e.getStaCore().createLabels(c.PLAY, n, t);
                                    e.getPlaybackSession().getAsset().updateDeltaLabels(i.eventLabels), e.getPlaybackSession().getAsset().updateIndependentLabels(i.eventLabels), e.getEventManager().newEvent(i)
                                }
                            })
                        }
                    }(),
                    N = function() {
                        return function(e) {
                            function n() {
                                if (g = new O(ie), t.getNamespace().comScore ? (ae = t.getNamespace().comScore.exports, g.setAppCore(ae.c())) : g.setAppCore(null), e.publisherId) {
                                    ie.setLabel("c2", e.publisherId);
                                    var n = e.secure;
                                    !n && g.getAppCore() ? n = g.getAppCore().isSecure() : !n && t.isBrowser() && (n = t.isWebSecure());
                                    var i = (n ? "https://sb" : "http://b") + ".scorecardresearch.com/p?c1=2";
                                    ie.setLiveEndpointURL(i)
                                }
                                e.liveEndpointURL && ie.setLiveEndpointURL(e.liveEndpointURL), g.setKeepAlive(new m(g)), g.setHeartbeat(new y(g)), g.setEventManager(new b(g)), g.setStateMachine(new _), g.setLogging(new s(f.LOG_NAMESPACE, e.debug)), g.setPlaybackSession(new p(g)), N = new A(g), B = new E(g), D = new w(g), R = new x(g), U = new S(g), F = new P(g), M = new k(g), G = new h(g), j = new T(g), K = new I(g), V = new C(g), W = new L(g), z = new v(g), q = !1, H = 0, Y = +new Date, J = !0, Z = !1, ee = [], e.systemClockJumpDetection && ie.enableSystemClockJumpsDetection(parseInt(e.systemClockJumpDetectionInterval))
                            }

                            function i(e) {
                                var t = g.getStateMachine().getCurrentState();
                                if (t == l.IDLE || t == l.PLAYBACK_NOT_STARTED || t == l.BUFFERING_BEFORE_PLAYBACK || t == l.SEEKING_BEFORE_PLAYBACK) {
                                    if (e == c.PLAY) return !0
                                } else if (t == l.PLAYING) {
                                    if (e == c.END || e == c.AD_SKIP || e == c.SEEK_START || e == c.PAUSE) return !0
                                } else if (t == l.PAUSED || t == l.BUFFERING_DURING_PAUSE || t == l.SEEKING_DURING_PLAYBACK || t == l.SEEKING_DURING_BUFFERING || t == l.SEEKING_DURING_PAUSE) {
                                    if (e == c.END || e == c.AD_SKIP || e == c.PLAY) return !0
                                } else if (t == l.BUFFERING_DURING_PLAYBACK) {
                                    if (e == c.PAUSE_ON_BUFFERING || e == c.END || e == c.AD_SKIP || e == c.SEEK_START || e == c.PAUSE || e == c.PLAY) return !0
                                } else if (t == l.BUFFERING_DURING_SEEKING) {
                                    if (e == c.END || e == c.AD_SKIP || e == c.PAUSE || e == c.PLAY) return !0
                                } else if (t == l.PAUSED_DURING_BUFFERING && (e == c.END || e == c.AD_SKIP || e == c.BUFFER_STOP || e == c.PLAY)) return !0;
                                return !1
                            }

                            function a(e, t, n) {
                                var s = g.getStateMachine().getCurrentState();
                                e == c.AD_SKIP && !n.hasOwnProperty("ns_st_ui") && i(e) ? n.ns_st_ui = "skip" : e == c.SEEK_START && !n.hasOwnProperty("ns_st_ui") && i(e) && (n.ns_st_ui = "seek"), s == l.IDLE ? e == c.BUFFER ? N.onBuffer(t, n) : e == c.SEEK_START ? N.onSeekStart(t, n) : e == c.PLAY && N.onPlay(t, n) : s == l.PLAYBACK_NOT_STARTED ? e == c.END || e == c.AD_SKIP ? D.onEndOrAdSkip(t, n) : e == c.SEEK_START ? D.onSeekStart(t, n) : e == c.PLAY ? D.onPlay(t, n) : e == c.BUFFER && D.onBuffer(t, n) : s == l.PLAYING ? e == c.END || e == c.AD_SKIP ? R.onEndOrAdSkip(t, n) : e == c.BUFFER ? R.onBuffer(t, n) : e == c.SEEK_START ? R.onSeekStart(t, n) : e == c.PAUSE && R.onPause(t, n) : s == l.PAUSED ? e == c.END || e == c.AD_SKIP ? B.onEndOrAdSkip(t, n) : e == c.PLAY ? B.onPlay(t, n) : e == c.BUFFER ? z.onBufferWhenSeekingOrPaused(t, n) : e == c.SEEK_START && z.onSeekStartWhenPausedOrBufferingDuringPause(t, n) : s == l.BUFFERING_BEFORE_PLAYBACK ? e == c.END || e == c.AD_SKIP ? U.onEndOrAdSkip(t, n) : e == c.BUFFER_STOP ? U.onBufferStop(t, n) : e == c.SEEK_START ? U.onSeekStart(t, n) : e == c.PAUSE ? U.onPause(t, n) : e == c.PLAY && U.onPlay(t, n) : s == l.BUFFERING_DURING_PLAYBACK ? e == c.PAUSE_ON_BUFFERING ? F.onPauseOnBuffering(t, n) : e == c.BUFFER_STOP ? z.onBufferStopOrOnPlayWhenBufferingDuringPlayback(t, n) : e == c.END || e == c.AD_SKIP ? F.onEndOrAdSkip(t, n) : e == c.SEEK_START ? F.onSeekStart(t, n) : e == c.PAUSE ? F.onPause(t, n) : e == c.PLAY && z.onBufferStopOrOnPlayWhenBufferingDuringPlayback(t, n) : s == l.BUFFERING_DURING_SEEKING ? e == c.END || e == c.AD_SKIP ? M.onEndOrAdSkip(t, n) : e == c.PAUSE ? M.onPause(t, n) : e == c.PLAY ? M.onPlay(t, n) : e == c.BUFFER_STOP && z.onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause(t, n) : s == l.BUFFERING_DURING_PAUSE ? e == c.END || e == c.AD_SKIP ? G.onEndAndSkip(t, n) : e == c.PAUSE ? G.onPause(t, n) : e == c.PLAY ? G.onPlay(t, n) : e == c.SEEK_START ? z.onSeekStartWhenPausedOrBufferingDuringPause(t, n) : e == c.BUFFER_STOP && z.onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause(t, n) : s == l.SEEKING_BEFORE_PLAYBACK ? e == c.END || e == c.AD_SKIP ? K.onEndOrAdSkip(t, n) : e == c.PAUSE ? K.onPause(t, n) : e == c.PLAY ? K.onPlay(t, n) : e == c.BUFFER && z.onBufferWhenSeekingOrPaused(t, n) : s == l.SEEKING_DURING_PLAYBACK ? e == c.END || e == c.AD_SKIP ? W.onEndOrAdSkip(t, n) : e == c.PLAY ? W.onPlay(t, n) : e == c.BUFFER ? z.onBufferWhenSeekingOrPaused(t, n) : e == c.PAUSE && z.onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause(t, n) : s == l.SEEKING_DURING_BUFFERING ? e == c.PAUSE ? V.onPause(t, n) : e == c.BUFFER ? z.onBufferWhenSeekingOrPaused(t, n) : e == c.PLAY ? z.onPlayWhenSeekingDuringBufferingOrSeekingDuringPause(t, n) : e == c.END || e == c.AD_SKIP ? z.onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause(t, n) : e == c.BUFFER_STOP && z.onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause(t, n) : s == l.PAUSED_DURING_BUFFERING ? e == c.END || e == c.AD_SKIP ? j.onEndOrAdSkip(t, n) : e == c.BUFFER_STOP ? j.onBufferStop(t, n) : e == c.SEEK_START ? j.onSeekStart(t, n) : e == c.PAUSE ? j.onPause(t, n) : e == c.PLAY && j.onPlay(t, n) : s == l.SEEKING_DURING_PAUSE && (e == c.BUFFER ? z.onBufferWhenSeekingOrPaused(t, n) : e == c.PLAY ? z.onPlayWhenSeekingDuringBufferingOrSeekingDuringPause(t, n) : e == c.PAUSE ? z.onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause(t, n) : e == c.END || e == c.AD_SKIP ? z.onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause(t, n) : e == c.BUFFER_STOP && z.onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause(t, n)), i(e) && g.getPlaybackSession().setFirstEventSent(!0)
                            }

                            function r(e, n) {
                                for (var s, i = le.encodeURIComponent || escape, a = [], r = f.LABELS_ORDER, o = e.split("?"), u = o[0], c = o[1], l = c.split("&"), d = 0, g = l.length; d < g; d++) {
                                    var p = l[d].split("="),
                                        b = unescape(p[0]),
                                        y = unescape(p[1]);
                                    b && (n[b] = y)
                                }
                                for (var m = {}, _ = 0, v = r.length; _ < v; _++) {
                                    var S = r[_];
                                    if (n.hasOwnProperty(S)) {
                                        var h = n[S];
                                        "undefined" != typeof h && null != h && (m[S] = !0, a.push(i(S) + "=" + i(n[S])))
                                    }
                                }
                                for (var P in n)
                                    if (n.hasOwnProperty(P)) {
                                        if (m[P]) continue;
                                        var k = n[P];
                                        "undefined" != typeof k && null != k && a.push(i(P) + "=" + i(n[P]))
                                    }
                                s = u + "?" + a.join("&"), s = s + (s.indexOf("&c8=") < 0 ? "&c8=" + i(de.title) : "") + (s.indexOf("&c7=") < 0 ? "&c7=" + i(de.URL) : "") + (s.indexOf("&c9=") < 0 ? "&c9=" + i(de.referrer) : "");
                                var A = t.browserAcceptsLargeURLs() ? f.URL_LENGTH_LIMIT : f.RESTRICTED_URL_LENGTH_LIMIT;
                                if (s.length > A && s.indexOf("&") > 0) {
                                    var E = s.substr(0, A - 8).lastIndexOf("&");
                                    s = (s.substring(0, E) + "&ns_cut=" + i(s.substring(E + 1))).substr(0, A)
                                }
                                return s
                            }
                            var g, N, B, D, R, U, F, M, G, j, K, V, W, z, q, H, Y, $, J, X, Z, Q, ee, te, ne, se, ie = this,
                                ae = {},
                                re = f.DEFAULT_PAUSED_ON_BUFFERING_INTERVAL,
                                oe = f.THROTTLING_DELAY,
                                ue = {},
                                ce = !1;
                            t.extend(ie, {
                                getConfiguration: function() {
                                    return e || {}
                                },
                                enableSystemClockJumpsDetection: function(e) {
                                    (e < f.SYSTEM_CLOCK_JUMP_DETECTION_MINIMUM_INTERVAL || !e) && (e = f.SYSTEM_CLOCK_JUMP_DETECTION_DEFAULT_INTERVAL), t.onSystemClockJump(function(e) {
                                        se = e, ce = !0
                                    }, e)
                                },
                                createLabels: function(e, n, s) {
                                    var i = !1;
                                    if (e == c.HEARTBEAT) {
                                        var a = isNaN($) ? Y : $;
                                        $ = s, (s < a || ce) && (i = !0, ce = !1, s < a ? (g.getPlaybackSession().addInternalErrorFlag("1"), g.getLogging().infoLog("System clock jump detected", "to the far past")) : se ? (g.getPlaybackSession().addInternalErrorFlag("3"), g.getLogging().infoLog("System clock jump detected", "to the future")) : (g.getPlaybackSession().addInternalErrorFlag("2"), g.getLogging().infoLog("System clock jump detected", "to the near past")), s = a)
                                    }
                                    var r = {};
                                    if ("undefined" != typeof document) {
                                        var o = document;
                                        r.c7 = o.URL, r.c8 = o.title, r.c9 = o.referrer
                                    }
                                    return r.ns_ts = +new Date + "", r.ns_st_ev = c.toString(e), r.ns_st_mp = f.DEFAULT_PLAYERNAME, r.ns_st_mv = f.STREAMINGANALYTICS_VERSION, r.ns_st_ub = "0", r.ns_st_br = "0", r.ns_st_pn = "1", r.ns_st_tp = "0", r.ns_st_it = d.toString(d.SINGLE_CLIP), r.ns_st_sv = f.STREAMINGANALYTICS_VERSION, r.ns_st_smv = f.MODEL_VERSION, r.ns_type = "hidden", r.ns_st_ec = g.getEventManager().getEventCounter() + "", r.ns_st_ki = g.getKeepAlive().getInterval() + "", g.getPlaybackSession().getAsset().isAutoCalculatePositionsEnabled() ? r.ns_st_po = g.getPlaybackSession().getAsset().getExpectedPlaybackPosition(s) + "" : r.ns_st_po = ne + "", ne = parseInt(r.ns_st_po), t.extend(r, ie.getLabels()), g.getPlaybackSession().createLabels(r, s), t.extend(r, n), i && (g.getPlaybackSession().setPlaybackTimestamp($ - parseInt(r.ns_st_pt)), g.getPlaybackSession().getAsset().setPlaybackTimestamp($ - parseInt(r.ns_st_pt)), g.getPlaybackSession().getAsset().setElapsedTimestamp($ - parseInt(r.ns_st_et)), g.getStateMachine().getCurrentState() == l.BUFFERING_DURING_PLAYBACK && g.getPlaybackSession().getAsset().setBufferingTimestamp($ - parseInt(r.ns_st_bp))), {
                                        eventType: e,
                                        eventLabels: r
                                    }
                                },
                                newEvent: function(e, n, s, i) {
                                    ie.stopDelayedTransitionTimer();
                                    var r = g.getStateMachine().getCurrentState(),
                                        o = g.getStateMachine().eventTypeToState(e);
                                    if (null == o || o == r) return void g.getLogging().infoLog("Ignored event:", c.toString(e), "during state", t.stateToString(r), s);
                                    if (ie.isThrottlingEnabled() && (r == l.PLAYING || r == l.PAUSED) && (o == l.PLAYING || o == l.PAUSED) && !i) {
                                        g.getLogging().infoLog("Throttled event:", c.toString(e), "during state", t.stateToString(r), s, ie.getThrottlingDelay(), "ms");
                                        var u = function(e, t, s) {
                                            return function() {
                                                ie.newEvent(e, n, s, !0)
                                            }
                                        }(e, o, s);
                                        return void(Q = g.getPlatformAPI().setTimeout(u, ie.getThrottlingDelay()))
                                    }
                                    var d = isNaN($) ? Y : $;
                                    $ = n;
                                    var f = !1;
                                    (n < d || ce) && (f = !0, ce = !1, n < d ? (g.getPlaybackSession().addInternalErrorFlag("1"), g.getLogging().infoLog("System clock jump detected", "to the far past")) : se ? (g.getPlaybackSession().addInternalErrorFlag("3"), g.getLogging().infoLog("System clock jump detected", "to the future")) : (g.getPlaybackSession().addInternalErrorFlag("2"), g.getLogging().infoLog("System clock jump detected", "to the near past")), n = d), s.ns_st_po || (g.getPlaybackSession().getAsset().isAutoCalculatePositionsEnabled() ? g.getStateMachine().getCurrentState() == l.IDLE ? s.ns_st_po = "0" : s.ns_st_po = g.getPlaybackSession().getAsset().getExpectedPlaybackPosition(n) + "" : s.ns_st_po = ne + ""), ne = parseInt(s.ns_st_po), g.getPlaybackSession().getAsset().setPlaybackTimeOffset(parseInt(s.ns_st_po)), a(e, n, s);
                                    var p = 0;
                                    isNaN(g.getStateMachine().getLastStateChangeTimestamp()) || (p = n - g.getStateMachine().getLastStateChangeTimestamp()), g.getStateMachine().newEvent(e, n), f && (o != l.IDLE && o != l.PLAYBACK_NOT_STARTED && o != l.SEEKING_BEFORE_PLAYBACK && o != l.BUFFERING_BEFORE_PLAYBACK && g.getPlaybackSession().getAsset().setElapsedTimestamp($), o != l.BUFFERING_BEFORE_PLAYBACK && o != l.BUFFERING_DURING_PAUSE && o != l.BUFFERING_DURING_PLAYBACK && o != l.BUFFERING_DURING_SEEKING && o != l.PAUSED_DURING_BUFFERING || (g.getPlaybackSession().setBufferingTimestamp($), g.getPlaybackSession().getAsset().setBufferingTimestamp($)), o != l.PLAYING && o != l.BUFFERING_DURING_PLAYBACK || (g.getPlaybackSession().setPlaybackTimestamp($), g.getPlaybackSession().getAsset().setPlaybackTimestamp($)), o != l.SEEKING_BEFORE_PLAYBACK && o != l.SEEKING_DURING_BUFFERING && o != l.SEEKING_DURING_PAUSE && o != l.SEEKING_DURING_PLAYBACK && o != l.BUFFERING_DURING_SEEKING || g.getPlaybackSession().getAsset().setSeekingTimestamp($)), g.getLogging().log("Transition from", t.stateToString(r), "to", t.stateToString(o), "due to event:", c.toString(e));
                                    for (var b = 0, y = ee.length; b < y; b++) ee[b](r, o, s, p)
                                },
                                newPseudoEvent: function(e, n, s) {
                                    if ((e == c.LOAD || e == c.ENGAGE) && g.getStateMachine().getCurrentState() != l.IDLE) return void g.getLogging().infoLog("Ignored pseudo-event:", c.toString(e), "during state", t.stateToString(g.getStateMachine().getCurrentState()), s);
                                    e == c.ERROR && null == s.ns_st_er && (s.ns_st_er = u.UNKNOWN_VALUE), e == c.TRANSFER && null == s.ns_st_rp && (s.ns_st_rp = u.UNKNOWN_VALUE);
                                    var i, a, r, o = !0,
                                        d = !1;
                                    switch (e) {
                                        case c.BIT_RATE:
                                            i = "ns_st_br", a = "ns_st_pbr", d = !0;
                                            break;
                                        case c.PLAYBACK_RATE:
                                            i = "ns_st_rt", a = "ns_st_prt", d = !0;
                                            break;
                                        case c.VOLUME:
                                            i = "ns_st_vo", a = "ns_st_pvo", d = !0;
                                            break;
                                        case c.WINDOW_STATE:
                                            i = "ns_st_ws", a = "ns_st_pws", d = !0;
                                            break;
                                        case c.AUDIO:
                                            i = "ns_st_at", a = "ns_st_pat", d = !1;
                                            break;
                                        case c.VIDEO:
                                            i = "ns_st_vt", a = "ns_st_pvt", d = !1;
                                            break;
                                        case c.SUBS:
                                            i = "ns_st_tt", a = "ns_st_ptt", d = !1;
                                            break;
                                        case c.CDN:
                                            i = "ns_st_cdn", a = "ns_st_pcdn", d = !1;
                                            break;
                                        default:
                                            o = !1
                                    }
                                    if (o && s.hasOwnProperty(i) && (d ? (ie.getLabels().hasOwnProperty(i) && (r = ie.getLabels()[i], s[a] = r), ie.setLabel(i, s[i])) : (g.getPlaybackSession().getAsset().hasInternalLabel(i) && (r = g.getPlaybackSession().getAsset().getInternalLabel(i), s[a] = r), g.getPlaybackSession().getAsset().setInternalLabel(i, s[i]))), o && g.getStateMachine().getCurrentState() != l.PLAYING && g.getStateMachine().getCurrentState() != l.BUFFERING_DURING_PLAYBACK) return void g.getLogging().infoLog("No measurement send for the pseudo-event:", c.toString(e), "during state", t.stateToString(g.getStateMachine().getCurrentState()), s);
                                    var f = isNaN($) ? Y : $;
                                    $ = n;
                                    var p = !1;
                                    (n < f || ce) && (p = !0, ce = !1, n < f ? (g.getPlaybackSession().addInternalErrorFlag("1"), g.getLogging().infoLog("System clock jump detected", "to the far past")) : se ? (g.getPlaybackSession().addInternalErrorFlag("3"), g.getLogging().infoLog("System clock jump detected", "to the future")) : (g.getPlaybackSession().addInternalErrorFlag("2"), g.getLogging().infoLog("System clock jump detected", "to the near past")), n = f), s.ns_st_po || (g.getPlaybackSession().getAsset().isAutoCalculatePositionsEnabled() ? s.ns_st_po = g.getPlaybackSession().getAsset().getExpectedPlaybackPosition(n) + "" : s.ns_st_po = ne + ""), ne = parseInt(s.ns_st_po), g.getPlaybackSession().getAsset().setPlaybackTimeOffset(parseInt(s.ns_st_po)), g.getStateMachine().getCurrentState() != l.IDLE && g.getStateMachine().getCurrentState() != l.PLAYBACK_NOT_STARTED && g.getStateMachine().getCurrentState() != l.SEEKING_BEFORE_PLAYBACK && g.getStateMachine().getCurrentState() != l.BUFFERING_BEFORE_PLAYBACK && (g.getPlaybackSession().getAsset().addElapsedTime(n), g.getPlaybackSession().getAsset().setElapsedTimestamp(n)), g.getStateMachine().getCurrentState() != l.PLAYING && g.getStateMachine().getCurrentState() != l.BUFFERING_DURING_PLAYBACK || (g.getPlaybackSession().addPlaybackTime(n), g.getPlaybackSession().setPlaybackTimestamp(n), g.getPlaybackSession().getAsset().addPlaybackTime(n), g.getPlaybackSession().getAsset().setPlaybackTimestamp(n), g.getPlaybackSession().getAsset().addInterval(parseInt(s.ns_st_po)), g.getPlaybackSession().getAsset().setPlaybackStartPosition(parseInt(s.ns_st_po))), g.getStateMachine().getCurrentState() != l.BUFFERING_BEFORE_PLAYBACK && g.getStateMachine().getCurrentState() != l.BUFFERING_DURING_PAUSE && g.getStateMachine().getCurrentState() != l.BUFFERING_DURING_PLAYBACK && g.getStateMachine().getCurrentState() != l.BUFFERING_DURING_SEEKING || (g.getPlaybackSession().addBufferingTime(n), g.getPlaybackSession().setBufferingTimestamp(n), g.getPlaybackSession().getAsset().addBufferingTime(n), g.getPlaybackSession().getAsset().setBufferingTimestamp(n));
                                    var b = ie.createLabels(e, s, n);
                                    g.getPlaybackSession().getAsset().updateDeltaLabels(b.eventLabels), g.getPlaybackSession().getAsset().updateIndependentLabels(b.eventLabels), g.getEventManager().newEvent(b), p && (g.getStateMachine().getCurrentState() != l.PLAYING && g.getStateMachine().getCurrentState() != l.BUFFERING_DURING_PLAYBACK || (g.getPlaybackSession().setPlaybackTimestamp($), g.getPlaybackSession().getAsset().setPlaybackTimestamp($)), g.getStateMachine().getCurrentState() != l.IDLE && g.getStateMachine().getCurrentState() != l.PLAYBACK_NOT_STARTED && g.getStateMachine().getCurrentState() != l.SEEKING_BEFORE_PLAYBACK && g.getStateMachine().getCurrentState() != l.BUFFERING_BEFORE_PLAYBACK && g.getPlaybackSession().getAsset().setElapsedTimestamp($), g.getStateMachine().getCurrentState() != l.BUFFERING_BEFORE_PLAYBACK && g.getStateMachine().getCurrentState() != l.BUFFERING_DURING_PAUSE && g.getStateMachine().getCurrentState() != l.BUFFERING_DURING_PLAYBACK && g.getStateMachine().getCurrentState() != l.BUFFERING_DURING_SEEKING || (g.getPlaybackSession().setBufferingTimestamp($), g.getPlaybackSession().getAsset().setBufferingTimestamp($)), newState != l.SEEKING_BEFORE_PLAYBACK && newState != l.SEEKING_DURING_BUFFERING && newState != l.SEEKING_DURING_PAUSE && newState != l.SEEKING_DURING_PLAYBACK && newState != l.BUFFERING_DURING_SEEKING || g.getPlaybackSession().getAsset().setSeekingTimestamp($))
                                },
                                getState: function() {
                                    return g.getStateMachine().getCurrentState()
                                },
                                addListener: function(e) {
                                    ee.push(e)
                                },
                                removeListener: function(e) {
                                    ee.splice(t.indexOf(e, ee), 1)
                                },
                                getLabel: function(e) {
                                    return ue[e]
                                },
                                getLabels: function() {
                                    return ue
                                },
                                setLabel: function(e, t) {
                                    null == t ? delete ue[e] : ue[e] = t
                                },
                                setLabels: function(e) {
                                    for (var t in e) e.hasOwnProperty(t) && ie.setLabel(t, e[t])
                                },
                                getPlatformAPI: function() {
                                    return g.getAppCore() ? g.getAppCore().getPlatformAPI() : o
                                },
                                getExports: function() {
                                    return ae
                                },
                                isProperlyInitialized: function() {
                                    var e = g.getAppCore().getAppContext(),
                                        t = g.getAppCore().getSalt(),
                                        n = g.getAppCore().getPixelURL();
                                    return e && n && t
                                },
                                setThrottlingDelay: function(e) {
                                    oe = e
                                },
                                getThrottlingDelay: function() {
                                    return oe
                                },
                                isThrottlingEnabled: function() {
                                    return Z
                                },
                                setThrottlingEnabled: function(e) {
                                    Z = e
                                },
                                isLoadingTimeSent: function() {
                                    return q
                                },
                                setLoadingTimeSent: function(e) {
                                    q = e
                                },
                                getLoadTimeOffset: function() {
                                    return H
                                },
                                setLoadTimeOffset: function(e) {
                                    H = e
                                },
                                getInitTimestamp: function() {
                                    return Y
                                },
                                setPauseOnBufferingInterval: function(e) {
                                    re = e
                                },
                                getPauseOnBufferingInterval: function() {
                                    return re
                                },
                                isPauseOnBufferingEnabled: function() {
                                    return J
                                },
                                setPauseOnBufferingEnabled: function(e) {
                                    J = e
                                },
                                startPausedOnBufferingTimer: function(e, n) {
                                    ie.stopPausedOnBufferingTimer(), X = ie.getPlatformAPI().setTimeout(function() {
                                        var e = {},
                                            s = t.fixEventTime(e),
                                            i = parseInt(n.ns_st_po);
                                        e.ns_st_po = i + "", ie.newEvent(c.PAUSE_ON_BUFFERING, s, e)
                                    }, re)
                                },
                                stopPausedOnBufferingTimer: function() {
                                    null != X && (ie.getPlatformAPI().clearTimeout(X), X = null)
                                },
                                stopDelayedTransitionTimer: function() {
                                    Q && (ie.getPlatformAPI().clearTimeout(Q), Q = null)
                                },
                                setLiveEndpointURL: function(e) {
                                    if (null == e || 0 == e.length) return null;
                                    var t = decodeURIComponent || unescape,
                                        n = e.indexOf("?");
                                    if (n >= 0) {
                                        if (n < e.length - 1) {
                                            for (var s = e.substring(n + 1).split("&"), i = 0, a = s.length; i < a; i++) {
                                                var r = s[i],
                                                    o = r.split("=");
                                                2 == o.length ? ie.setLabel(o[0], t(o[1])) : 1 == o.length && ie.setLabel(f.PAGE_NAME_LABEL, t(o[0]))
                                            }
                                            e = e.substring(0, n + 1)
                                        }
                                    } else e += "?";
                                    return te = e
                                },
                                getLiveEndpointURL: function() {
                                    return te ? te : "undefined" != typeof ns_p && "string" == typeof ns_p.src ? te = ns_p.src.replace(/&amp;/, "&").replace(/&ns__t=\d+/, "") : "string" == typeof ns_pixelUrl ? te = ns_pixelUrl.replace(/&amp;/, "&").replace(/&ns__t=\d+/, "") : null
                                },
                                getStaSM: function() {
                                    return g
                                },
                                resetPlaybackSession: function(e) {
                                    var t = g.getPlaybackSession();
                                    g.setPlaybackSession(new p(g)), p.resetPlaybackSession(g, t, e)
                                },
                                resetHeartbeat: function() {
                                    g.getHeartbeat().pause();
                                    var e = g.getHeartbeat().getIntervals();
                                    g.setHeartbeat(new y(g)), g.getHeartbeat().setIntervals(e)
                                }
                            });
                            var le, de;
                            t.isBrowser() ? (le = window, de = document) : (le = {}, de = {
                                location: {
                                    href: ""
                                },
                                title: "",
                                URL: "",
                                referrer: "",
                                cookie: ""
                            }), t.extend(ie, {
                                prepareUrl: r
                            }), n()
                        }
                    }(),
                    O = function() {
                        return function(e) {
                            var n, s, i, a, r, o, u, c = this;
                            t.extend(c, {
                                getAppCore: function() {
                                    return n
                                },
                                getStaCore: function() {
                                    return e
                                },
                                getEventManager: function() {
                                    return s
                                },
                                getStateMachine: function() {
                                    return i
                                },
                                getHeartbeat: function() {
                                    return a
                                },
                                getKeepAlive: function() {
                                    return r
                                },
                                getPlaybackSession: function() {
                                    return o
                                },
                                getLogging: function() {
                                    return u
                                },
                                setAppCore: function(e) {
                                    n = e
                                },
                                setKeepAlive: function(e) {
                                    r = e
                                },
                                setHeartbeat: function(e) {
                                    a = e
                                },
                                setEventManager: function(e) {
                                    s = e
                                },
                                setStateMachine: function(e) {
                                    i = e
                                },
                                setPlaybackSession: function(e) {
                                    o = e
                                },
                                setLogging: function(e) {
                                    u = e
                                }
                            })
                        }
                    }(),
                    B = function() {
                        return function(e) {
                            function s() {
                                e = t.extend({}, e), r = new N(e), r.getStaSM().getLogging().log("New StreamingAnalytics instance with configuration", e)
                            }

                            function i(e) {
                                var s, i;
                                if (s = "object" == n(arguments[1]) ? arguments[1] : "object" == n(arguments[2]) ? arguments[2] : {}, i = "number" == typeof arguments[1] ? arguments[1] : "number" == typeof arguments[2] ? arguments[2] : NaN, c.toString(e)) {
                                    s = t.jsonObjectToStringDictionary(s);
                                    var a = t.fixEventTime(s);
                                    s.ns_st_po || isNaN(i) || (s.ns_st_po = t.parseInteger(i, 0) + ""), e == c.PLAY || e == c.PAUSE || e == c.BUFFER || e == c.END || e == c.SEEK_START || e == c.AD_SKIP || e == c.BUFFER_STOP ? r.newEvent(e, a, s) : r.newPseudoEvent(e, a, s)
                                }
                            }

                            function a() {
                                u && r.getStaSM().getStateMachine().getCurrentState() != l.IDLE && o.notifyEnd()
                            }
                            var r, o = this,
                                u = !0;
                            t.extend(this, {
                                isProperlyInitialized: function() {
                                    return r.isProperlyInitialized()
                                },
                                reset: function(e) {
                                    i(c.END);
                                    var t = r;
                                    t.getStaSM().getKeepAlive().stop(), t.getStaSM().getHeartbeat().pause(), r = new N(t.getConfiguration()), p.resetPlaybackSession(r.getStaSM(), t.getStaSM().getPlaybackSession(), e)
                                },
                                setPauseOnBufferingInterval: function(e) {
                                    r.setPauseOnBufferingInterval(e)
                                },
                                getPauseOnBufferingInterval: function() {
                                    return r.getPauseOnBufferingInterval()
                                },
                                setKeepAliveInterval: function(e) {
                                    r.getStaSM().getKeepAlive().setInterval(e)
                                },
                                getKeepAliveInterval: function() {
                                    return r.getStaSM().getKeepAlive().getInterval()
                                },
                                setHeartbeatIntervals: function(e) {
                                    r.getStaSM().getHeartbeat().setIntervals(e)
                                },
                                notifyPlay: function(e, t) {
                                    r.getStaSM().getLogging().apiCall("notifyPlay", e, t), i(c.PLAY, e, t)
                                },
                                notifyPause: function(e, t) {
                                    r.getStaSM().getLogging().apiCall("notifyPause", e, t), i(c.PAUSE, e, t)
                                },
                                notifyEnd: function(e, t) {
                                    r.getStaSM().getLogging().apiCall("notifyEnd", e, t), i(c.END, e, t)
                                },
                                notifyBufferStart: function(e, t) {
                                    r.getStaSM().getLogging().apiCall("notifyBufferStart", e, t), i(c.BUFFER, e, t)
                                },
                                notifyBufferStop: function(e, t) {
                                    r.getStaSM().getLogging().apiCall("notifyBufferStop", e, t), i(c.BUFFER_STOP, e, t)
                                },
                                notifyLoad: function(e, t) {
                                    r.getStaSM().getLogging().apiCall("notifyLoad", e, t), i(c.LOAD, e, t)
                                },
                                notifyEngage: function(e, t) {
                                    r.getStaSM().getLogging().apiCall("notifyEngage", e, t), i(c.ENGAGE, e, t)
                                },
                                notifySeekStart: function(e, t) {
                                    r.getStaSM().getLogging().apiCall("notifySeekStart", e, t), i(c.SEEK_START, e, t)
                                },
                                notifySkipAd: function(e, t) {
                                    r.getStaSM().getLogging().apiCall("notifySkipAd", e, t), i(c.AD_SKIP, e, t)
                                },
                                notifyCallToAction: function(e, t) {
                                    r.getStaSM().getLogging().apiCall("notifyCallToAction", e, t), i(c.CTA, e, t)
                                },
                                notifyError: function(e, t) {
                                    r.getStaSM().getLogging().apiCall("notifyError", e, t), i(c.ERROR, e, t)
                                },
                                notifyTransferPlayback: function(e, t) {
                                    r.getStaSM().getLogging().apiCall("notifyTransferPlayback", e, t), i(c.TRANSFER, e, t)
                                },
                                notifyDrmFail: function(e, t) {
                                    r.getStaSM().getLogging().apiCall("notifyDrmFail", e, t), i(c.DRM_FAILED, e, t)
                                },
                                notifyDrmApprove: function(e, t) {
                                    r.getStaSM().getLogging().apiCall("notifyDrmApprove", e, t), i(c.DRM_APPROVED, e, t)
                                },
                                notifyDrmDeny: function(e, t) {
                                    r.getStaSM().getLogging().apiCall("notifyDrmDeny", e, t), i(c.DRM_DENIED, e, t)
                                },
                                notifyChangeBitrate: function(e, t, n) {
                                    if (r.getStaSM().getLogging().apiCall("notifyChangeBitrate", e, t, n), null != e) {
                                        var s = n || {};
                                        s.ns_st_br = e + "", i(c.BIT_RATE, s, t)
                                    }
                                },
                                notifyChangePlaybackRate: function(e, t, n) {
                                    if (r.getStaSM().getLogging().apiCall("notifyChangePlaybackRate", e, t, n), null != e) {
                                        var s = n || {};
                                        s.ns_st_rt = e + "", i(c.PLAYBACK_RATE, s, t)
                                    }
                                },
                                notifyChangeVolume: function(e, t, n) {
                                    if (r.getStaSM().getLogging().apiCall("notifyChangeVolume", e, t, n), null != e) {
                                        var s = n || {};
                                        s.ns_st_vo = e + "", i(c.VOLUME, s, t)
                                    }
                                },
                                notifyChangeWindowState: function(e, t, n) {
                                    if (r.getStaSM().getLogging().apiCall("notifyChangeWindowState", e, t, n), null != e) {
                                        var s = n || {};
                                        s.ns_st_ws = e + "", i(c.WINDOW_STATE, s, t)
                                    }
                                },
                                notifyChangeAudioTrack: function(e, t, n) {
                                    if (r.getStaSM().getLogging().apiCall("notifyChangeAudioTrack", e, t, n), null != e) {
                                        var s = n || {};
                                        s.ns_st_at = e + "", i(c.AUDIO, s, t)
                                    }
                                },
                                notifyChangeVideoTrack: function(e, t, n) {
                                    if (r.getStaSM().getLogging().apiCall("notifyChangeVideoTrack", e, t, n), null != e) {
                                        var s = n || {};
                                        s.ns_st_vt = e + "", i(c.VIDEO, s, t)
                                    }
                                },
                                notifyChangeSubtitleTrack: function(e, t, n) {
                                    if (r.getStaSM().getLogging().apiCall("notifyChangeSubtitleTrack", e, t, n), null != e) {
                                        var s = n || {};
                                        s.ns_st_tt = e + "", i(c.SUBS, s, t)
                                    }
                                },
                                notifyChangeCdn: function(e, t, n) {
                                    if (r.getStaSM().getLogging().apiCall("notifyChangeCdn", e, t, n), null != e) {
                                        var s = n || {};
                                        s.ns_st_cdn = e + "", i(c.CDN, s, t)
                                    }
                                },
                                notifyCustomEvent: function(e, t) {
                                    r.getStaSM().getLogging().apiCall("notifyCustomEvent", e, t), i(c.CUSTOM, e, t)
                                },
                                getLabels: function() {
                                    return r.getLabels()
                                },
                                getState: function() {
                                    return r.getStaSM().getStateMachine().getCurrentState()
                                },
                                setLabels: function(e) {
                                    r.setLabels(e)
                                },
                                getLabel: function(e) {
                                    return r.getLabel(e)
                                },
                                setLabel: function(e, t) {
                                    r.setLabel(e, t)
                                },
                                getLoadTimeOffset: function() {
                                    return r.getLoadTimeOffset()
                                },
                                setLoadTimeOffset: function(e) {
                                    r.setLoadTimeOffset(e)
                                },
                                setLiveEndpointURL: function(e) {
                                    return r.setLiveEndpointURL(e)
                                },
                                getLiveEndpointURL: function() {
                                    return r.getLiveEndpointURL()
                                },
                                isPauseOnBufferingEnabled: function() {
                                    return r.isPauseOnBufferingEnabled()
                                },
                                setPauseOnBufferingEnabled: function(e) {
                                    r.setPauseOnBufferingEnabled(e)
                                },
                                isThrottlingEnabled: function() {
                                    return r.isThrottlingEnabled()
                                },
                                setThrottlingEnabled: function(e) {
                                    r.setThrottlingEnabled(e)
                                },
                                setThrottlingDelay: function(e) {
                                    r.setThrottlingDelay(e)
                                },
                                getThrottlingDelay: function() {
                                    return r.getThrottlingDelay()
                                },
                                setPlaybackIntervalMergeTolerance: function(e) {
                                    r.getStaSM().getPlaybackSession().getAsset().setPlaybackIntervalMergeTolerance(e)
                                },
                                getPlaybackIntervalMergeTolerance: function() {
                                    return r.getStaSM().getPlaybackSession().getAsset().getPlaybackIntervalMergeTolerance()
                                },
                                createPlaybackSession: function(e) {
                                    r.getStaSM().getLogging().apiCall("createPlaybackSession", e), e = t.jsonObjectToStringDictionary(e);
                                    var n = r.getStaSM().getStateMachine().getCurrentState();
                                    n != l.IDLE && (r.getStaSM().getLogging().infoLog("Ending the current Clip. It was in state:", t.stateToString(n)), o.notifyEnd()), r.getStaSM().getPlaybackSession().isPlaybackSessionStarted() && r.resetPlaybackSession(), r.getStaSM().getPlaybackSession().setLabels(e)
                                },
                                getVersion: function() {
                                    return f.STREAMINGANALYTICS_VERSION
                                },
                                addListener: function(e) {
                                    r.addListener(e)
                                },
                                removeListener: function(e) {
                                    r.removeListener(e)
                                },
                                addMeasurementListener: function(e) {
                                    r.getStaSM().getEventManager().addMeasurementListener(e)
                                },
                                removeMeasurementListener: function(e) {
                                    r.getStaSM().getEventManager().removeMeasurementListener(e)
                                },
                                getPlaybackSession: function() {
                                    return r.getStaSM().getPlaybackSession()
                                },
                                setExitEndEventEnabled: function(e) {
                                    u = e
                                },
                                isExitEndEventEnabled: function() {
                                    return u
                                },
                                getPlatformAPI: function() {
                                    return r.getPlatformAPI()
                                },
                                _getLogHistory: function() {
                                    return r.getStaSM().getLogging().getLogHistory()
                                }
                            }), t.isBrowser() && (window.addEventListener ? (window.addEventListener("beforeunload", a), window.addEventListener("unload", a)) : window.attachEvent && (window.attachEvent("onbeforeunload", a), window.attachEvent("onunload", a))), s()
                        }
                    }();
                return B.PlayerEvents = c, B.InternalStates = l, B.ImplementationType = d, B.Constants = f, B
            }(), e.ReducedRequirementsStreamingAnalytics = e.ReducedRequirementsStreamingAnalytics || function() {
                var n = {
                        LongFormOnDemand: "12",
                        ShortFormOnDemand: "11",
                        Live: "13",
                        UserGeneratedLongFormOnDemand: "22",
                        UserGeneratedShortFormOnDemand: "21",
                        UserGeneratedLive: "23",
                        Bumper: "99",
                        Other: "00"
                    },
                    i = {
                        LinearOnDemandPreRoll: "11",
                        LinearOnDemandMidRoll: "12",
                        LinearOnDemandPostRoll: "13",
                        LinearLive: "21",
                        BrandedOnDemandPreRoll: "31",
                        BrandedOnDemandMidRoll: "32",
                        BrandedOnDemandPostRoll: "33",
                        BrandedOnDemandContent: "34",
                        BrandedOnDemandLive: "35",
                        Other: "00"
                    },
                    a = e.StreamingAnalytics,
                    r = e.StreamingAnalytics.InternalStates || null,
                    o = e.StreamingAnalytics.ImplementationType || null,
                    u = null != e.StreamingAnalytics.InternalStates && null != e.StreamingAnalytics.ImplementationType,
                    c = e.StreamingAnalytics.Constants,
                    l = function e(l) {
                        function e() {
                            u && (t.exists(l) && (l.customerC2 || l.publisherId) || t.getNamespace().comScore ? v = new a(l) : P.error("Cannot instantiate StreamingAnalytics", "The property publisherId was not provided (or incorrectly provided) in the StreamingAnalytics configuration."), v && v.setLabel("ns_st_it", o.toString(o.REDUCED)))
                        }

                        function d(e) {
                            for (var t in c.STANDARD_METADATA_LABELS)
                                if (c.STANDARD_METADATA_LABELS.hasOwnProperty(t) && !f(c.STANDARD_METADATA_LABELS[t], y, e)) return !1;
                            return !0
                        }

                        function f(e, n, s) {
                            return !!(t.exists(e) && t.exists(n) && t.exists(s) && (n.hasOwnProperty(e) && s.hasOwnProperty(e) && n[e] === s[e] || !n.hasOwnProperty(e) && !s.hasOwnProperty(e)))
                        }

                        function g(e) {
                            v.getPlaybackSession().setAsset(e), y = e, v.notifyPlay()
                        }

                        function p(e) {
                            var t = e || {};
                            t.ns_st_ad = "1", t.ns_st_an = ++m + "", v.getPlaybackSession().setAsset(t), v.notifyPlay(), _ = !1
                        }

                        function b(e, t) {
                            h == S.None && (h = t), _ && h == t && d(e) ? (v.getPlaybackSession().getAsset().setLabels(e), v.getState() != r.PLAYING && v.notifyPlay()) : g(e), _ = !0, h = t
                        }
                        var y = null,
                            m = 0,
                            _ = !1,
                            v = null,
                            S = {
                                None: 0,
                                AudioContent: 1,
                                VideoContent: 2
                            },
                            h = S.None,
                            P = new s("TTSTA", (l || {}).debug);
                        t.extend(this, {
                            playVideoAdvertisement: function(e, n) {
                                if (v) {
                                    P.apiCall("playVideoAdvertisement", e, n);
                                    var s = {
                                        ns_st_ct: "va"
                                    };
                                    n ? s.ns_st_ct = "va" + n : P.warn("Calling 'playVideoAdvertisement' without specifying the media type as a second parameter."), n != i.LinearLive && n != i.BrandedOnDemandLive || (s.ns_st_li = "1"), e && t.extend(s, e), p(s)
                                }
                            },
                            playAudioAdvertisement: function(e, n) {
                                if (v) {
                                    P.apiCall("playAudioAdvertisement", e, n);
                                    var s = {
                                        ns_st_ct: "aa"
                                    };
                                    n ? s.ns_st_ct = "aa" + n : P.warn("Calling 'playAudioAdvertisement' without specifying the media type as a second parameter."), n != i.LinearLive && n != i.BrandedOnDemandLive || (s.ns_st_li = "1"), e && t.extend(s, e), p(s)
                                }
                            },
                            playVideoContentPart: function(e, s) {
                                if (v) {
                                    P.apiCall("playVideoContentPart", e, s);
                                    var i = {
                                        ns_st_ct: "vc"
                                    };
                                    s ? i.ns_st_ct = "vc" + s : P.warn("Calling 'playVideoContentPart' without specifying the media type as a second parameter."), s != n.Live && s != n.UserGeneratedLive || (i.ns_st_li = "1"), e && t.extend(i, e), b(i, S.VideoContent)
                                }
                            },
                            playAudioContentPart: function(e, s) {
                                if (v) {
                                    P.apiCall("playAudioContentPart", e, s);
                                    var i = {
                                        ns_st_ct: "ac"
                                    };
                                    s ? i.ns_st_ct = "ac" + s : P.warn("Calling 'playAudioContentPart' without specifying the media type as a second parameter."), s != n.Live && s != n.UserGeneratedLive || (i.ns_st_li = "1"), e && t.extend(i, e), b(i, S.AudioContent)
                                }
                            },
                            stop: function() {
                                v && (P.apiCall("stop"), v.notifyPause())
                            }
                        }), e()
                    };
                return l.ContentType = n, l.AdType = i, l
            }(), e
        })
    }).call(t, n(285)(e))
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
}]);