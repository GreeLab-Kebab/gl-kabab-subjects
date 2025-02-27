/*!
 * Fastly Insights.js
 * Build: 156c6a4cb0d2d43f699e
 * Generated: 2019-09-12T12:06:20.631Z
 * https://github.com/fastly/insights.js
 * 
 * Copyright (c) 2019, Fastly, Inc. All rights reserved.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
var FASTLY = function(t) {
    var e = {};

    function r(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    return r.m = t, r.c = e, r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) r.d(n, o, function(e) {
                return t[e]
            }.bind(null, o));
        return n
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "https://www.fastly-insights.com/static/", r(r.s = 96)
}([function(t, e, r) {
    (function(e) {
        var r = "object",
            n = function(t) {
                return t && t.Math == Math && t
            };
        t.exports = n(typeof globalThis == r && globalThis) || n(typeof window == r && window) || n(typeof self == r && self) || n(typeof e == r && e) || Function("return this")()
    }).call(this, r(70))
}, function(t, e, r) {
    var n = r(0),
        o = r(15),
        i = r(31),
        u = r(48),
        c = n.Symbol,
        a = o("wks");
    t.exports = function(t) {
        return a[t] || (a[t] = u && c[t] || (u ? c : i)("Symbol." + t))
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, r) {
    var n = r(9),
        o = r(8),
        i = r(14);
    t.exports = n ? function(t, e, r) {
        return o.f(t, e, i(1, r))
    } : function(t, e, r) {
        return t[e] = r, t
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, r) {
    var n = r(4);
    t.exports = function(t) {
        if (!n(t)) throw TypeError(String(t) + " is not an object");
        return t
    }
}, function(t, e) {
    var r = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return r.call(t, e)
    }
}, function(t, e, r) {
    var n = r(0),
        o = r(35).f,
        i = r(3),
        u = r(19),
        c = r(29),
        a = r(52),
        s = r(77);
    t.exports = function(t, e) {
        var r, f, l, p, v, h = t.target,
            y = t.global,
            d = t.stat;
        if (r = y ? n : d ? n[h] || c(h, {}) : (n[h] || {}).prototype)
            for (f in e) {
                if (p = e[f], l = t.noTargetGet ? (v = o(r, f)) && v.value : r[f], !s(y ? f : h + (d ? "." : "#") + f, t.forced) && void 0 !== l) {
                    if (typeof p == typeof l) continue;
                    a(p, l)
                }(t.sham || l && l.sham) && i(p, "sham", !0), u(r, f, p, t)
            }
    }
}, function(t, e, r) {
    var n = r(9),
        o = r(45),
        i = r(5),
        u = r(18),
        c = Object.defineProperty;
    e.f = n ? c : function(t, e, r) {
        if (i(t), e = u(e, !0), i(r), o) try {
            return c(t, e, r)
        } catch (t) {}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
        return "value" in r && (t[e] = r.value), t
    }
}, function(t, e, r) {
    var n = r(2);
    t.exports = !n(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, r) {
    var n = r(24),
        o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(n(t), 9007199254740991) : 0
    }
}, function(t, e, r) {
    var n = r(51),
        o = r(12);
    t.exports = function(t) {
        return n(o(t))
    }
}, function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t
    }
}, function(t, e, r) {
    "use strict";
    var n = r(11),
        o = r(57),
        i = r(42),
        u = r(30),
        c = r(82),
        a = u.set,
        s = u.getterFor("Array Iterator");
    t.exports = c(Array, "Array", function(t, e) {
        a(this, {
            type: "Array Iterator",
            target: n(t),
            index: 0,
            kind: e
        })
    }, function() {
        var t = s(this),
            e = t.target,
            r = t.kind,
            n = t.index++;
        return !e || n >= e.length ? (t.target = void 0, {
            value: void 0,
            done: !0
        }) : "keys" == r ? {
            value: n,
            done: !1
        } : "values" == r ? {
            value: e[n],
            done: !1
        } : {
            value: [n, e[n]],
            done: !1
        }
    }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e, r) {
    var n = r(0),
        o = r(29),
        i = r(20),
        u = n["__core-js_shared__"] || o("__core-js_shared__", {});
    (t.exports = function(t, e) {
        return u[t] || (u[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.1.3",
        mode: i ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e, r) {
    var n = r(12);
    t.exports = function(t) {
        return Object(n(t))
    }
}, function(t, e, r) {
    var n = r(0),
        o = r(61),
        i = r(13),
        u = r(3),
        c = r(1),
        a = c("iterator"),
        s = c("toStringTag"),
        f = i.values;
    for (var l in o) {
        var p = n[l],
            v = p && p.prototype;
        if (v) {
            if (v[a] !== f) try {
                u(v, a, f)
            } catch (t) {
                v[a] = f
            }
            if (v[s] || u(v, s, l), o[l])
                for (var h in i)
                    if (v[h] !== i[h]) try {
                        u(v, h, i[h])
                    } catch (t) {
                        v[h] = i[h]
                    }
        }
    }
}, function(t, e, r) {
    var n = r(4);
    t.exports = function(t, e) {
        if (!n(t)) return t;
        var r, o;
        if (e && "function" == typeof(r = t.toString) && !n(o = r.call(t))) return o;
        if ("function" == typeof(r = t.valueOf) && !n(o = r.call(t))) return o;
        if (!e && "function" == typeof(r = t.toString) && !n(o = r.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e, r) {
    var n = r(0),
        o = r(15),
        i = r(3),
        u = r(6),
        c = r(29),
        a = r(47),
        s = r(30),
        f = s.get,
        l = s.enforce,
        p = String(a).split("toString");
    o("inspectSource", function(t) {
        return a.call(t)
    }), (t.exports = function(t, e, r, o) {
        var a = !!o && !!o.unsafe,
            s = !!o && !!o.enumerable,
            f = !!o && !!o.noTargetGet;
        "function" == typeof r && ("string" != typeof e || u(r, "name") || i(r, "name", e), l(r).source = p.join("string" == typeof e ? e : "")), t !== n ? (a ? !f && t[e] && (s = !0) : delete t[e], s ? t[e] = r : i(t, e, r)) : s ? t[e] = r : c(e, r)
    })(Function.prototype, "toString", function() {
        return "function" == typeof this && f(this).source || a.call(this)
    })
}, function(t, e) {
    t.exports = !1
}, function(t, e, r) {
    var n = r(15),
        o = r(31),
        i = n("keys");
    t.exports = function(t) {
        return i[t] || (i[t] = o(t))
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e) {
    var r = {}.toString;
    t.exports = function(t) {
        return r.call(t).slice(8, -1)
    }
}, function(t, e) {
    var r = Math.ceil,
        n = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? n : r)(t)
    }
}, function(t, e, r) {
    var n = r(78),
        o = r(51),
        i = r(16),
        u = r(10),
        c = r(56);
    t.exports = function(t, e) {
        var r = 1 == t,
            a = 2 == t,
            s = 3 == t,
            f = 4 == t,
            l = 6 == t,
            p = 5 == t || l,
            v = e || c;
        return function(e, c, h) {
            for (var y, d, g = i(e), b = o(g), m = n(c, h, 3), x = u(b.length), w = 0, O = r ? v(e, x) : a ? v(e, 0) : void 0; x > w; w++)
                if ((p || w in b) && (d = m(y = b[w], w, g), t))
                    if (r) O[w] = d;
                    else if (d) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return y;
                case 6:
                    return w;
                case 2:
                    O.push(y)
            } else if (f) return !1;
            return l ? -1 : s || f ? f : O
        }
    }
}, function(t, e, r) {
    var n = r(23);
    t.exports = Array.isArray || function(t) {
        return "Array" == n(t)
    }
}, function(t, e, r) {
    var n = r(2),
        o = r(1)("species");
    t.exports = function(t) {
        return !n(function() {
            var e = [];
            return (e.constructor = {})[o] = function() {
                return {
                    foo: 1
                }
            }, 1 !== e[t](Boolean).foo
        })
    }
}, function(t, e, r) {
    "use strict";
    var n = r(3),
        o = r(19),
        i = r(2),
        u = r(1),
        c = r(32),
        a = u("species"),
        s = !i(function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        }),
        f = !i(function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            };
            var r = "ab".split(t);
            return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
        });
    t.exports = function(t, e, r, l) {
        var p = u(t),
            v = !i(function() {
                var e = {};
                return e[p] = function() {
                    return 7
                }, 7 != "" [t](e)
            }),
            h = v && !i(function() {
                var e = !1,
                    r = /a/;
                return r.exec = function() {
                    return e = !0, null
                }, "split" === t && (r.constructor = {}, r.constructor[a] = function() {
                    return r
                }), r[p](""), !e
            });
        if (!v || !h || "replace" === t && !s || "split" === t && !f) {
            var y = /./ [p],
                d = r(p, "" [t], function(t, e, r, n, o) {
                    return e.exec === c ? v && !o ? {
                        done: !0,
                        value: y.call(e, r, n)
                    } : {
                        done: !0,
                        value: t.call(r, e, n)
                    } : {
                        done: !1
                    }
                }),
                g = d[0],
                b = d[1];
            o(String.prototype, t, g), o(RegExp.prototype, p, 2 == e ? function(t, e) {
                return b.call(t, this, e)
            } : function(t) {
                return b.call(t, this)
            }), l && n(RegExp.prototype[p], "sham", !0)
        }
    }
}, function(t, e, r) {
    var n = r(0),
        o = r(3);
    t.exports = function(t, e) {
        try {
            o(n, t, e)
        } catch (r) {
            n[t] = e
        }
        return e
    }
}, function(t, e, r) {
    var n, o, i, u = r(71),
        c = r(0),
        a = r(4),
        s = r(3),
        f = r(6),
        l = r(21),
        p = r(22),
        v = c.WeakMap;
    if (u) {
        var h = new v,
            y = h.get,
            d = h.has,
            g = h.set;
        n = function(t, e) {
            return g.call(h, t, e), e
        }, o = function(t) {
            return y.call(h, t) || {}
        }, i = function(t) {
            return d.call(h, t)
        }
    } else {
        var b = l("state");
        p[b] = !0, n = function(t, e) {
            return s(t, b, e), e
        }, o = function(t) {
            return f(t, b) ? t[b] : {}
        }, i = function(t) {
            return f(t, b)
        }
    }
    t.exports = {
        set: n,
        get: o,
        has: i,
        enforce: function(t) {
            return i(t) ? o(t) : n(t, {})
        },
        getterFor: function(t) {
            return function(e) {
                var r;
                if (!a(e) || (r = o(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return r
            }
        }
    }
}, function(t, e) {
    var r = 0,
        n = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++r + n).toString(36))
    }
}, function(t, e, r) {
    "use strict";
    var n, o, i = r(72),
        u = RegExp.prototype.exec,
        c = String.prototype.replace,
        a = u,
        s = (n = /a/, o = /b*/g, u.call(n, "a"), u.call(o, "a"), 0 !== n.lastIndex || 0 !== o.lastIndex),
        f = void 0 !== /()??/.exec("")[1];
    (s || f) && (a = function(t) {
        var e, r, n, o, a = this;
        return f && (r = new RegExp("^" + a.source + "$(?!\\s)", i.call(a))), s && (e = a.lastIndex), n = u.call(a, t), s && n && (a.lastIndex = a.global ? n.index + n[0].length : e), f && n && n.length > 1 && c.call(n[0], r, function() {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (n[o] = void 0)
        }), n
    }), t.exports = a
}, function(t, e, r) {
    "use strict";
    var n = r(75);
    t.exports = function(t, e, r) {
        return e + (r ? n(t, e, !0).length : 1)
    }
}, function(t, e, r) {
    var n = r(23),
        o = r(32);
    t.exports = function(t, e) {
        var r = t.exec;
        if ("function" == typeof r) {
            var i = r.call(t, e);
            if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
            return i
        }
        if ("RegExp" !== n(t)) throw TypeError("RegExp#exec called on incompatible receiver");
        return o.call(t, e)
    }
}, function(t, e, r) {
    var n = r(9),
        o = r(36),
        i = r(14),
        u = r(11),
        c = r(18),
        a = r(6),
        s = r(45),
        f = Object.getOwnPropertyDescriptor;
    e.f = n ? f : function(t, e) {
        if (t = u(t), e = c(e, !0), s) try {
            return f(t, e)
        } catch (t) {}
        if (a(t, e)) return i(!o.f.call(t, e), t[e])
    }
}, function(t, e, r) {
    "use strict";
    var n = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        i = o && !n.call({
            1: 2
        }, 1);
    e.f = i ? function(t) {
        var e = o(this, t);
        return !!e && e.enumerable
    } : n
}, function(t, e, r) {
    var n = r(53),
        o = r(38).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return n(t, o)
    }
}, function(t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, r) {
    var n = r(5),
        o = r(80),
        i = r(38),
        u = r(22),
        c = r(81),
        a = r(46),
        s = r(21)("IE_PROTO"),
        f = function() {},
        l = function() {
            var t, e = a("iframe"),
                r = i.length;
            for (e.style.display = "none", c.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; r--;) delete l.prototype[i[r]];
            return l()
        };
    t.exports = Object.create || function(t, e) {
        var r;
        return null !== t ? (f.prototype = n(t), r = new f, f.prototype = null, r[s] = t) : r = l(), void 0 === e ? r : o(r, e)
    }, u[s] = !0
}, function(t, e, r) {
    var n = r(53),
        o = r(38);
    t.exports = Object.keys || function(t) {
        return n(t, o)
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, r) {
    var n = r(8).f,
        o = r(6),
        i = r(1)("toStringTag");
    t.exports = function(t, e, r) {
        t && !o(t = r ? t : t.prototype, i) && n(t, i, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, r) {
    "use strict";
    var n = r(7),
        o = r(2),
        i = r(26),
        u = r(4),
        c = r(16),
        a = r(10),
        s = r(60),
        f = r(56),
        l = r(27),
        p = r(1)("isConcatSpreadable"),
        v = !o(function() {
            var t = [];
            return t[p] = !1, t.concat()[0] !== t
        }),
        h = l("concat"),
        y = function(t) {
            if (!u(t)) return !1;
            var e = t[p];
            return void 0 !== e ? !!e : i(t)
        };
    n({
        target: "Array",
        proto: !0,
        forced: !v || !h
    }, {
        concat: function(t) {
            var e, r, n, o, i, u = c(this),
                l = f(u, 0),
                p = 0;
            for (e = -1, n = arguments.length; e < n; e++)
                if (i = -1 === e ? u : arguments[e], y(i)) {
                    if (p + (o = a(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    for (r = 0; r < o; r++, p++) r in i && s(l, p, i[r])
                } else {
                    if (p >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    s(l, p++, i)
                }
            return l.length = p, l
        }
    })
}, function(t, e, r) {
    var n = r(9),
        o = r(2),
        i = r(46);
    t.exports = !n && !o(function() {
        return 7 != Object.defineProperty(i("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, r) {
    var n = r(0),
        o = r(4),
        i = n.document,
        u = o(i) && o(i.createElement);
    t.exports = function(t) {
        return u ? i.createElement(t) : {}
    }
}, function(t, e, r) {
    var n = r(15);
    t.exports = n("native-function-to-string", Function.toString)
}, function(t, e, r) {
    var n = r(2);
    t.exports = !!Object.getOwnPropertySymbols && !n(function() {
        return !String(Symbol())
    })
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        return t
    }
}, function(t, e, r) {
    "use strict";
    var n = r(7),
        o = r(25),
        i = r(27),
        u = o(2);
    n({
        target: "Array",
        proto: !0,
        forced: !i("filter")
    }, {
        filter: function(t) {
            return u(this, t, arguments[1])
        }
    })
}, function(t, e, r) {
    var n = r(2),
        o = r(23),
        i = "".split;
    t.exports = n(function() {
        return !Object("z").propertyIsEnumerable(0)
    }) ? function(t) {
        return "String" == o(t) ? i.call(t, "") : Object(t)
    } : Object
}, function(t, e, r) {
    var n = r(6),
        o = r(76),
        i = r(35),
        u = r(8);
    t.exports = function(t, e) {
        for (var r = o(e), c = u.f, a = i.f, s = 0; s < r.length; s++) {
            var f = r[s];
            n(t, f) || c(t, f, a(e, f))
        }
    }
}, function(t, e, r) {
    var n = r(6),
        o = r(11),
        i = r(54),
        u = r(22),
        c = i(!1);
    t.exports = function(t, e) {
        var r, i = o(t),
            a = 0,
            s = [];
        for (r in i) !n(u, r) && n(i, r) && s.push(r);
        for (; e.length > a;) n(i, r = e[a++]) && (~c(s, r) || s.push(r));
        return s
    }
}, function(t, e, r) {
    var n = r(11),
        o = r(10),
        i = r(55);
    t.exports = function(t) {
        return function(e, r, u) {
            var c, a = n(e),
                s = o(a.length),
                f = i(u, s);
            if (t && r != r) {
                for (; s > f;)
                    if ((c = a[f++]) != c) return !0
            } else
                for (; s > f; f++)
                    if ((t || f in a) && a[f] === r) return t || f || 0;
            return !t && -1
        }
    }
}, function(t, e, r) {
    var n = r(24),
        o = Math.max,
        i = Math.min;
    t.exports = function(t, e) {
        var r = n(t);
        return r < 0 ? o(r + e, 0) : i(r, e)
    }
}, function(t, e, r) {
    var n = r(4),
        o = r(26),
        i = r(1)("species");
    t.exports = function(t, e) {
        var r;
        return o(t) && ("function" != typeof(r = t.constructor) || r !== Array && !o(r.prototype) ? n(r) && null === (r = r[i]) && (r = void 0) : r = void 0), new(void 0 === r ? Array : r)(0 === e ? 0 : e)
    }
}, function(t, e, r) {
    var n = r(1),
        o = r(40),
        i = r(3),
        u = n("unscopables"),
        c = Array.prototype;
    null == c[u] && i(c, u, o(null)), t.exports = function(t) {
        c[u][t] = !0
    }
}, function(t, e, r) {
    "use strict";
    var n, o, i, u = r(59),
        c = r(3),
        a = r(6),
        s = r(1),
        f = r(20),
        l = s("iterator"),
        p = !1;
    [].keys && ("next" in (i = [].keys()) ? (o = u(u(i))) !== Object.prototype && (n = o) : p = !0), null == n && (n = {}), f || a(n, l) || c(n, l, function() {
        return this
    }), t.exports = {
        IteratorPrototype: n,
        BUGGY_SAFARI_ITERATORS: p
    }
}, function(t, e, r) {
    var n = r(6),
        o = r(16),
        i = r(21),
        u = r(84),
        c = i("IE_PROTO"),
        a = Object.prototype;
    t.exports = u ? Object.getPrototypeOf : function(t) {
        return t = o(t), n(t, c) ? t[c] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
}, function(t, e, r) {
    "use strict";
    var n = r(18),
        o = r(8),
        i = r(14);
    t.exports = function(t, e, r) {
        var u = n(e);
        u in t ? o.f(t, u, i(0, r)) : t[u] = r
    }
}, function(t, e) {
    t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
}, function(t, e, r) {
    "use strict";
    var n = r(2);
    t.exports = function(t, e) {
        var r = [][t];
        return !r || !n(function() {
            r.call(null, e || function() {
                throw 1
            }, 1)
        })
    }
}, function(t, e, r) {
    "use strict";
    var n = r(7),
        o = r(25),
        i = r(27),
        u = o(1);
    n({
        target: "Array",
        proto: !0,
        forced: !i("map")
    }, {
        map: function(t) {
            return u(this, t, arguments[1])
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(7),
        o = r(0),
        i = r(6),
        u = r(48),
        c = r(9),
        a = r(20),
        s = r(19),
        f = r(22),
        l = r(2),
        p = r(15),
        v = r(43),
        h = r(31),
        y = r(1),
        d = r(65),
        g = r(91),
        b = r(93),
        m = r(26),
        x = r(5),
        w = r(4),
        O = r(16),
        _ = r(11),
        S = r(18),
        j = r(14),
        P = r(40),
        k = r(37),
        T = r(94),
        E = r(35),
        A = r(8),
        I = r(36),
        M = r(3),
        L = r(41),
        R = r(39),
        C = r(21),
        F = r(30),
        N = C("hidden"),
        D = F.set,
        B = F.getterFor("Symbol"),
        G = E.f,
        $ = A.f,
        V = T.f,
        q = o.Symbol,
        H = o.JSON,
        z = H && H.stringify,
        J = y("toPrimitive"),
        Y = I.f,
        Q = p("symbol-registry"),
        U = p("symbols"),
        W = p("op-symbols"),
        X = p("wks"),
        K = Object.prototype,
        Z = o.QObject,
        tt = !Z || !Z.prototype || !Z.prototype.findChild,
        et = c && l(function() {
            return 7 != P($({}, "a", {
                get: function() {
                    return $(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(t, e, r) {
            var n = G(K, e);
            n && delete K[e], $(t, e, r), n && t !== K && $(K, e, n)
        } : $,
        rt = function(t, e) {
            var r = U[t] = P(q.prototype);
            return D(r, {
                type: "Symbol",
                tag: t,
                description: e
            }), c || (r.description = e), r
        },
        nt = u && "symbol" == typeof q.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return Object(t) instanceof q
        },
        ot = function(t, e, r) {
            return t === K && ot(W, e, r), x(t), e = S(e, !0), x(r), i(U, e) ? (r.enumerable ? (i(t, N) && t[N][e] && (t[N][e] = !1), r = P(r, {
                enumerable: j(0, !1)
            })) : (i(t, N) || $(t, N, j(1, {})), t[N][e] = !0), et(t, e, r)) : $(t, e, r)
        },
        it = function(t, e) {
            x(t);
            for (var r, n = b(e = _(e)), o = 0, i = n.length; i > o;) ot(t, r = n[o++], e[r]);
            return t
        },
        ut = function(t) {
            var e = Y.call(this, t = S(t, !0));
            return !(this === K && i(U, t) && !i(W, t)) && (!(e || !i(this, t) || !i(U, t) || i(this, N) && this[N][t]) || e)
        },
        ct = function(t, e) {
            if (t = _(t), e = S(e, !0), t !== K || !i(U, e) || i(W, e)) {
                var r = G(t, e);
                return !r || !i(U, e) || i(t, N) && t[N][e] || (r.enumerable = !0), r
            }
        },
        at = function(t) {
            for (var e, r = V(_(t)), n = [], o = 0; r.length > o;) i(U, e = r[o++]) || i(f, e) || n.push(e);
            return n
        },
        st = function(t) {
            for (var e, r = t === K, n = V(r ? W : _(t)), o = [], u = 0; n.length > u;) !i(U, e = n[u++]) || r && !i(K, e) || o.push(U[e]);
            return o
        };
    u || (s((q = function() {
        if (this instanceof q) throw TypeError("Symbol is not a constructor");
        var t = void 0 === arguments[0] ? void 0 : String(arguments[0]),
            e = h(t),
            r = function(t) {
                this === K && r.call(W, t), i(this, N) && i(this[N], e) && (this[N][e] = !1), et(this, e, j(1, t))
            };
        return c && tt && et(K, e, {
            configurable: !0,
            set: r
        }), rt(e, t)
    }).prototype, "toString", function() {
        return B(this).tag
    }), I.f = ut, A.f = ot, E.f = ct, k.f = T.f = at, R.f = st, c && ($(q.prototype, "description", {
        configurable: !0,
        get: function() {
            return B(this).description
        }
    }), a || s(K, "propertyIsEnumerable", ut, {
        unsafe: !0
    })), d.f = function(t) {
        return rt(y(t), t)
    }), n({
        global: !0,
        wrap: !0,
        forced: !u,
        sham: !u
    }, {
        Symbol: q
    });
    for (var ft = L(X), lt = 0; ft.length > lt;) g(ft[lt++]);
    n({
        target: "Symbol",
        stat: !0,
        forced: !u
    }, {
        for: function(t) {
            return i(Q, t += "") ? Q[t] : Q[t] = q(t)
        },
        keyFor: function(t) {
            if (!nt(t)) throw TypeError(t + " is not a symbol");
            for (var e in Q)
                if (Q[e] === t) return e
        },
        useSetter: function() {
            tt = !0
        },
        useSimple: function() {
            tt = !1
        }
    }), n({
        target: "Object",
        stat: !0,
        forced: !u,
        sham: !c
    }, {
        create: function(t, e) {
            return void 0 === e ? P(t) : it(P(t), e)
        },
        defineProperty: ot,
        defineProperties: it,
        getOwnPropertyDescriptor: ct
    }), n({
        target: "Object",
        stat: !0,
        forced: !u
    }, {
        getOwnPropertyNames: at,
        getOwnPropertySymbols: st
    }), n({
        target: "Object",
        stat: !0,
        forced: l(function() {
            R.f(1)
        })
    }, {
        getOwnPropertySymbols: function(t) {
            return R.f(O(t))
        }
    }), H && n({
        target: "JSON",
        stat: !0,
        forced: !u || l(function() {
            var t = q();
            return "[null]" != z([t]) || "{}" != z({
                a: t
            }) || "{}" != z(Object(t))
        })
    }, {
        stringify: function(t) {
            for (var e, r, n = [t], o = 1; arguments.length > o;) n.push(arguments[o++]);
            if (r = e = n[1], (w(e) || void 0 !== t) && !nt(t)) return m(e) || (e = function(t, e) {
                if ("function" == typeof r && (e = r.call(this, t, e)), !nt(e)) return e
            }), n[1] = e, z.apply(H, n)
        }
    }), q.prototype[J] || M(q.prototype, J, q.prototype.valueOf), v(q, "Symbol"), f[N] = !0
}, function(t, e, r) {
    e.f = r(1)
}, function(t, e, r) {
    "use strict";
    var n = r(7),
        o = r(9),
        i = r(0),
        u = r(6),
        c = r(4),
        a = r(8).f,
        s = r(52),
        f = i.Symbol;
    if (o && "function" == typeof f && (!("description" in f.prototype) || void 0 !== f().description)) {
        var l = {},
            p = function() {
                var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    e = this instanceof p ? new f(t) : void 0 === t ? f() : f(t);
                return "" === t && (l[e] = !0), e
            };
        s(p, f);
        var v = p.prototype = f.prototype;
        v.constructor = p;
        var h = v.toString,
            y = "Symbol(test)" == String(f("test")),
            d = /^Symbol\((.*)\)[^)]+$/;
        a(v, "description", {
            configurable: !0,
            get: function() {
                var t = c(this) ? this.valueOf() : this,
                    e = h.call(t);
                if (u(l, t)) return "";
                var r = y ? e.slice(7, -1) : e.replace(d, "$1");
                return "" === r ? void 0 : r
            }
        }), n({
            global: !0,
            forced: !0
        }, {
            Symbol: p
        })
    }
}, function(t, e, r) {
    "use strict";
    var n = r(28),
        o = r(5),
        i = r(16),
        u = r(10),
        c = r(24),
        a = r(12),
        s = r(33),
        f = r(34),
        l = Math.max,
        p = Math.min,
        v = Math.floor,
        h = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        y = /\$([$&'`]|\d\d?)/g;
    n("replace", 2, function(t, e, r) {
        return [function(r, n) {
            var o = a(this),
                i = null == r ? void 0 : r[t];
            return void 0 !== i ? i.call(r, o, n) : e.call(String(o), r, n)
        }, function(t, i) {
            var a = r(e, t, this, i);
            if (a.done) return a.value;
            var v = o(t),
                h = String(this),
                y = "function" == typeof i;
            y || (i = String(i));
            var d = v.global;
            if (d) {
                var g = v.unicode;
                v.lastIndex = 0
            }
            for (var b = [];;) {
                var m = f(v, h);
                if (null === m) break;
                if (b.push(m), !d) break;
                "" === String(m[0]) && (v.lastIndex = s(h, u(v.lastIndex), g))
            }
            for (var x, w = "", O = 0, _ = 0; _ < b.length; _++) {
                m = b[_];
                for (var S = String(m[0]), j = l(p(c(m.index), h.length), 0), P = [], k = 1; k < m.length; k++) P.push(void 0 === (x = m[k]) ? x : String(x));
                var T = m.groups;
                if (y) {
                    var E = [S].concat(P, j, h);
                    void 0 !== T && E.push(T);
                    var A = String(i.apply(void 0, E))
                } else A = n(S, h, j, P, T, i);
                j >= O && (w += h.slice(O, j) + A, O = j + S.length)
            }
            return w + h.slice(O)
        }];

        function n(t, r, n, o, u, c) {
            var a = n + t.length,
                s = o.length,
                f = y;
            return void 0 !== u && (u = i(u), f = h), e.call(c, f, function(e, i) {
                var c;
                switch (i.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return r.slice(0, n);
                    case "'":
                        return r.slice(a);
                    case "<":
                        c = u[i.slice(1, -1)];
                        break;
                    default:
                        var f = +i;
                        if (0 === f) return e;
                        if (f > s) {
                            var l = v(f / 10);
                            return 0 === l ? e : l <= s ? void 0 === o[l - 1] ? i.charAt(1) : o[l - 1] + i.charAt(1) : e
                        }
                        c = o[f - 1]
                }
                return void 0 === c ? "" : c
            })
        }
    })
}, function(t, e, r) {
    /*!
     * Performance Observer Polyfill
     * Version: 1.0.2
     * https://github.com/fastly/performance-observer-polyfill
     * 
     * Copyright (c) 2019, Fastly, Inc. All rights reserved.
     * 
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     * 
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     * 
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     * 
     */
    t.exports = function(t) {
        var e = {};

        function r(n) {
            if (e[n]) return e[n].exports;
            var o = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = t, r.c = e, r.d = function(t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, r.t = function(t, e) {
            if (1 & e && (t = r(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var o in t) r.d(n, o, function(e) {
                    return t[e]
                }.bind(null, o));
            return n
        }, r.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return r.d(e, "a", e), e
        }, r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, r.p = "", r(r.s = 0)
    }([function(t, e, r) {
        "use strict";

        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function o(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function i(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function u(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return (u = function(t) {
                if (null === t || (r = t, -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
                var r;
                if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t);
                    e.set(t, n)
                }

                function n() {
                    return function(t, e, r) {
                        return (function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch (t) {
                                return !1
                            }
                        }() ? Reflect.construct : function(t, e, r) {
                            var n = [null];
                            n.push.apply(n, e);
                            var o = new(Function.bind.apply(t, n));
                            return r && c(o, r.prototype), o
                        }).apply(null, arguments)
                    }(t, arguments, a(this).constructor)
                }
                return n.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), c(n, t)
            })(t)
        }

        function c(t, e) {
            return (c = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function a(t) {
            return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }
        r.r(e);
        var s = function(t) {
            function e(t) {
                var r, o, u, c, s;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), o = function(t, e) {
                    return !e || "object" !== n(e) && "function" != typeof e ? i(t) : e
                }(this, (r = a(e)).call.apply(r, [this].concat(function(t) {
                    return function(t) {
                        if (Array.isArray(t)) {
                            for (var e = 0, r = new Array(t.length); e < t.length; e++) r[e] = t[e];
                            return r
                        }
                    }(t) || function(t) {
                        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                    }(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance")
                    }()
                }(t)))), u = i(o), s = void 0, (c = "_entries") in u ? Object.defineProperty(u, c, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : u[c] = s, o._entries = t, o
            }
            var r, s;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && c(t, e)
            }(e, u(Array)), r = e, (s = [{
                key: "getEntries",
                value: function() {
                    return this._entries
                }
            }, {
                key: "getEntriesByType",
                value: function(t) {
                    return this._entries.filter(function(e) {
                        return e.entryType === t
                    })
                }
            }, {
                key: "getEntriesByName",
                value: function(t, e) {
                    return this._entries.filter(function(e) {
                        return e.name === t
                    }).filter(function(t) {
                        return !e || t.entryType === e
                    })
                }
            }]) && o(r.prototype, s), e
        }();

        function f(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function l(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r, t
        }

        function p(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function v(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r, t
        }
        var h = ["mark", "measure", "navigation", "resource"],
            y = function(t) {
                return h.some(function(e) {
                    return t === e
                })
            },
            d = new(function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = e.registeredObservers,
                        n = void 0 === r ? new Set : r,
                        o = e.processedEntries,
                        i = void 0 === o ? new Set : o,
                        u = e.interval,
                        c = void 0 === u ? 100 : u,
                        a = e.context,
                        s = void 0 === a ? self : a;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), l(this, "registeredObservers", void 0), l(this, "processedEntries", void 0), l(this, "interval", void 0), l(this, "intervalId", void 0), l(this, "context", void 0), this.registeredObservers = n, this.processedEntries = i, this.interval = c, this.context = s, this.intervalId = null
                }
                var e, r;
                return e = t, (r = [{
                    key: "getNewEntries",
                    value: function() {
                        var t = this;
                        return this.context.performance.getEntries().filter(function(e) {
                            return !t.processedEntries.has(e)
                        })
                    }
                }, {
                    key: "getObserversForType",
                    value: function(t, e) {
                        return Array.from(t).filter(function(t) {
                            return t.entryTypes.some(function(t) {
                                return t === e
                            })
                        })
                    }
                }, {
                    key: "processBuffer",
                    value: function(t) {
                        var e = Array.from(t.buffer),
                            r = new s(e);
                        t.buffer.clear(), e.length && t.callback && t.callback.call(void 0, r, t)
                    }
                }, {
                    key: "processEntries",
                    value: function() {
                        var t = this;
                        this.getNewEntries().forEach(function(e) {
                            var r = e.entryType;
                            t.getObserversForType(t.registeredObservers, r).forEach(function(t) {
                                t.buffer.add(e)
                            }), t.processedEntries.add(e)
                        });
                        var e = function() {
                            return t.registeredObservers.forEach(t.processBuffer)
                        };
                        "requestAnimationFrame" in this.context ? this.context.requestAnimationFrame(e) : this.context.setTimeout(e, 0)
                    }
                }, {
                    key: "add",
                    value: function(t) {
                        this.registeredObservers.add(t), 1 === this.registeredObservers.size && this.observe()
                    }
                }, {
                    key: "remove",
                    value: function(t) {
                        this.registeredObservers.delete(t), this.registeredObservers.size || this.disconnect()
                    }
                }, {
                    key: "observe",
                    value: function() {
                        this.intervalId = this.context.setInterval(this.processEntries.bind(this), this.interval)
                    }
                }, {
                    key: "disconnect",
                    value: function() {
                        this.intervalId = this.context.clearInterval(this.intervalId)
                    }
                }]) && f(e.prototype, r), t
            }()),
            g = function() {
                function t(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), v(this, "callback", void 0), v(this, "buffer", void 0), v(this, "entryTypes", []), v(this, "taskQueue", void 0), this.callback = e, this.buffer = new Set, this.taskQueue = r
                }
                var e, r;
                return e = t, (r = [{
                    key: "observe",
                    value: function(t) {
                        if (!t || !t.entryTypes) throw new Error("Failed to execute 'observe' on 'PerformanceObserver': required member entryTypes is undefined.");
                        var e = t.entryTypes.filter(y);
                        if (!e.length) throw new Error("Failed to execute 'observe' on 'PerformanceObserver': A Performance Observer MUST have at least one valid entryType in its entryTypes attribute.");
                        this.entryTypes = e, this.taskQueue.add(this)
                    }
                }, {
                    key: "disconnect",
                    value: function() {
                        this.taskQueue.remove(this)
                    }
                }, {
                    key: "takeRecords",
                    value: function() {
                        var t = Array.from(this.buffer);
                        return new s(t)
                    }
                }]) && p(e.prototype, r), t
            }(),
            b = "PerformanceObserver" in self && "function" == typeof PerformanceObserver;
        e.default = b ? PerformanceObserver : g
    }])
}, function(t, e, r) {
    "use strict";
    var n = r(28),
        o = r(73),
        i = r(5),
        u = r(12),
        c = r(74),
        a = r(33),
        s = r(10),
        f = r(34),
        l = r(32),
        p = r(2),
        v = [].push,
        h = Math.min,
        y = !p(function() {
            return !RegExp(4294967295, "y")
        });
    n("split", 2, function(t, e, r) {
        var n;
        return n = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, r) {
            var n = String(u(this)),
                i = void 0 === r ? 4294967295 : r >>> 0;
            if (0 === i) return [];
            if (void 0 === t) return [n];
            if (!o(t)) return e.call(n, t, i);
            for (var c, a, s, f = [], p = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), h = 0, y = new RegExp(t.source, p + "g");
                (c = l.call(y, n)) && !((a = y.lastIndex) > h && (f.push(n.slice(h, c.index)), c.length > 1 && c.index < n.length && v.apply(f, c.slice(1)), s = c[0].length, h = a, f.length >= i));) y.lastIndex === c.index && y.lastIndex++;
            return h === n.length ? !s && y.test("") || f.push("") : f.push(n.slice(h)), f.length > i ? f.slice(0, i) : f
        } : "0".split(void 0, 0).length ? function(t, r) {
            return void 0 === t && 0 === r ? [] : e.call(this, t, r)
        } : e, [function(e, r) {
            var o = u(this),
                i = null == e ? void 0 : e[t];
            return void 0 !== i ? i.call(e, o, r) : n.call(String(o), e, r)
        }, function(t, o) {
            var u = r(n, t, this, o, n !== e);
            if (u.done) return u.value;
            var l = i(t),
                p = String(this),
                v = c(l, RegExp),
                d = l.unicode,
                g = (l.ignoreCase ? "i" : "") + (l.multiline ? "m" : "") + (l.unicode ? "u" : "") + (y ? "y" : "g"),
                b = new v(y ? l : "^(?:" + l.source + ")", g),
                m = void 0 === o ? 4294967295 : o >>> 0;
            if (0 === m) return [];
            if (0 === p.length) return null === f(b, p) ? [p] : [];
            for (var x = 0, w = 0, O = []; w < p.length;) {
                b.lastIndex = y ? w : 0;
                var _, S = f(b, y ? p : p.slice(w));
                if (null === S || (_ = h(s(b.lastIndex + (y ? 0 : w)), p.length)) === x) w = a(p, w, d);
                else {
                    if (O.push(p.slice(x, w)), O.length === m) return O;
                    for (var j = 1; j <= S.length - 1; j++)
                        if (O.push(S[j]), O.length === m) return O;
                    w = x = _
                }
            }
            return O.push(p.slice(x)), O
        }]
    }, !y)
}, function(t, e) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (r = window)
    }
    t.exports = r
}, function(t, e, r) {
    var n = r(0),
        o = r(47),
        i = n.WeakMap;
    t.exports = "function" == typeof i && /native code/.test(o.call(i))
}, function(t, e, r) {
    "use strict";
    var n = r(5);
    t.exports = function() {
        var t = n(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function(t, e, r) {
    var n = r(4),
        o = r(23),
        i = r(1)("match");
    t.exports = function(t) {
        var e;
        return n(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
    }
}, function(t, e, r) {
    var n = r(5),
        o = r(49),
        i = r(1)("species");
    t.exports = function(t, e) {
        var r, u = n(t).constructor;
        return void 0 === u || null == (r = n(u)[i]) ? e : o(r)
    }
}, function(t, e, r) {
    var n = r(24),
        o = r(12);
    t.exports = function(t, e, r) {
        var i, u, c = String(o(t)),
            a = n(e),
            s = c.length;
        return a < 0 || a >= s ? r ? "" : void 0 : (i = c.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === s || (u = c.charCodeAt(a + 1)) < 56320 || u > 57343 ? r ? c.charAt(a) : i : r ? c.slice(a, a + 2) : u - 56320 + (i - 55296 << 10) + 65536
    }
}, function(t, e, r) {
    var n = r(0),
        o = r(37),
        i = r(39),
        u = r(5),
        c = n.Reflect;
    t.exports = c && c.ownKeys || function(t) {
        var e = o.f(u(t)),
            r = i.f;
        return r ? e.concat(r(t)) : e
    }
}, function(t, e, r) {
    var n = r(2),
        o = /#|\.prototype\./,
        i = function(t, e) {
            var r = c[u(t)];
            return r == s || r != a && ("function" == typeof e ? n(e) : !!e)
        },
        u = i.normalize = function(t) {
            return String(t).replace(o, ".").toLowerCase()
        },
        c = i.data = {},
        a = i.NATIVE = "N",
        s = i.POLYFILL = "P";
    t.exports = i
}, function(t, e, r) {
    var n = r(49);
    t.exports = function(t, e, r) {
        if (n(t), void 0 === e) return t;
        switch (r) {
            case 0:
                return function() {
                    return t.call(e)
                };
            case 1:
                return function(r) {
                    return t.call(e, r)
                };
            case 2:
                return function(r, n) {
                    return t.call(e, r, n)
                };
            case 3:
                return function(r, n, o) {
                    return t.call(e, r, n, o)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e, r) {
    "use strict";
    var n = r(7),
        o = r(25),
        i = r(57),
        u = o(5),
        c = !0;
    "find" in [] && Array(1).find(function() {
        c = !1
    }), n({
        target: "Array",
        proto: !0,
        forced: c
    }, {
        find: function(t) {
            return u(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), i("find")
}, function(t, e, r) {
    var n = r(9),
        o = r(8),
        i = r(5),
        u = r(41);
    t.exports = n ? Object.defineProperties : function(t, e) {
        i(t);
        for (var r, n = u(e), c = n.length, a = 0; c > a;) o.f(t, r = n[a++], e[r]);
        return t
    }
}, function(t, e, r) {
    var n = r(0).document;
    t.exports = n && n.documentElement
}, function(t, e, r) {
    "use strict";
    var n = r(7),
        o = r(83),
        i = r(59),
        u = r(85),
        c = r(43),
        a = r(3),
        s = r(19),
        f = r(1),
        l = r(20),
        p = r(42),
        v = r(58),
        h = v.IteratorPrototype,
        y = v.BUGGY_SAFARI_ITERATORS,
        d = f("iterator"),
        g = function() {
            return this
        };
    t.exports = function(t, e, r, f, v, b, m) {
        o(r, e, f);
        var x, w, O, _ = function(t) {
                if (t === v && T) return T;
                if (!y && t in P) return P[t];
                switch (t) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function() {
                            return new r(this, t)
                        }
                }
                return function() {
                    return new r(this)
                }
            },
            S = e + " Iterator",
            j = !1,
            P = t.prototype,
            k = P[d] || P["@@iterator"] || v && P[v],
            T = !y && k || _(v),
            E = "Array" == e && P.entries || k;
        if (E && (x = i(E.call(new t)), h !== Object.prototype && x.next && (l || i(x) === h || (u ? u(x, h) : "function" != typeof x[d] && a(x, d, g)), c(x, S, !0, !0), l && (p[S] = g))), "values" == v && k && "values" !== k.name && (j = !0, T = function() {
                return k.call(this)
            }), l && !m || P[d] === T || a(P, d, T), p[e] = T, v)
            if (w = {
                    values: _("values"),
                    keys: b ? T : _("keys"),
                    entries: _("entries")
                }, m)
                for (O in w) !y && !j && O in P || s(P, O, w[O]);
            else n({
                target: e,
                proto: !0,
                forced: y || j
            }, w);
        return w
    }
}, function(t, e, r) {
    "use strict";
    var n = r(58).IteratorPrototype,
        o = r(40),
        i = r(14),
        u = r(43),
        c = r(42),
        a = function() {
            return this
        };
    t.exports = function(t, e, r) {
        var s = e + " Iterator";
        return t.prototype = o(n, {
            next: i(1, r)
        }), u(t, s, !1, !0), c[s] = a, t
    }
}, function(t, e, r) {
    var n = r(2);
    t.exports = !n(function() {
        function t() {}
        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    })
}, function(t, e, r) {
    var n = r(86);
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var t, e = !1,
            r = {};
        try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), e = r instanceof Array
        } catch (t) {}
        return function(r, o) {
            return n(r, o), e ? t.call(r, o) : r.__proto__ = o, r
        }
    }() : void 0)
}, function(t, e, r) {
    var n = r(4),
        o = r(5);
    t.exports = function(t, e) {
        if (o(t), !n(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype")
    }
}, function(t, e, r) {
    "use strict";
    var n = r(7),
        o = r(4),
        i = r(26),
        u = r(55),
        c = r(10),
        a = r(11),
        s = r(60),
        f = r(27),
        l = r(1)("species"),
        p = [].slice,
        v = Math.max;
    n({
        target: "Array",
        proto: !0,
        forced: !f("slice")
    }, {
        slice: function(t, e) {
            var r, n, f, h = a(this),
                y = c(h.length),
                d = u(t, y),
                g = u(void 0 === e ? y : e, y);
            if (i(h) && ("function" != typeof(r = h.constructor) || r !== Array && !i(r.prototype) ? o(r) && null === (r = r[l]) && (r = void 0) : r = void 0, r === Array || void 0 === r)) return p.call(h, d, g);
            for (n = new(void 0 === r ? Array : r)(v(g - d, 0)), f = 0; d < g; d++, f++) d in h && s(n, f, h[d]);
            return n.length = f, n
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(28),
        o = r(5),
        i = r(10),
        u = r(12),
        c = r(33),
        a = r(34);
    n("match", 1, function(t, e, r) {
        return [function(e) {
            var r = u(this),
                n = null == e ? void 0 : e[t];
            return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r))
        }, function(t) {
            var n = r(e, t, this);
            if (n.done) return n.value;
            var u = o(t),
                s = String(this);
            if (!u.global) return a(u, s);
            var f = u.unicode;
            u.lastIndex = 0;
            for (var l, p = [], v = 0; null !== (l = a(u, s));) {
                var h = String(l[0]);
                p[v] = h, "" === h && (u.lastIndex = c(s, i(u.lastIndex), f)), v++
            }
            return 0 === v ? null : p
        }]
    })
}, function(t, e, r) {
    var n = r(0),
        o = r(61),
        i = r(90),
        u = r(3);
    for (var c in o) {
        var a = n[c],
            s = a && a.prototype;
        if (s && s.forEach !== i) try {
            u(s, "forEach", i)
        } catch (t) {
            s.forEach = i
        }
    }
}, function(t, e, r) {
    "use strict";
    var n = r(25),
        o = r(62),
        i = n(0),
        u = o("forEach");
    t.exports = u ? function(t) {
        return i(this, t, arguments[1])
    } : [].forEach
}, function(t, e, r) {
    var n = r(92),
        o = r(6),
        i = r(65),
        u = r(8).f;
    t.exports = function(t) {
        var e = n.Symbol || (n.Symbol = {});
        o(e, t) || u(e, t, {
            value: i.f(t)
        })
    }
}, function(t, e, r) {
    t.exports = r(0)
}, function(t, e, r) {
    var n = r(41),
        o = r(39),
        i = r(36);
    t.exports = function(t) {
        var e = n(t),
            r = o.f;
        if (r)
            for (var u, c = r(t), a = i.f, s = 0; c.length > s;) a.call(t, u = c[s++]) && e.push(u);
        return e
    }
}, function(t, e, r) {
    var n = r(11),
        o = r(37).f,
        i = {}.toString,
        u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return u && "[object Window]" == i.call(t) ? function(t) {
            try {
                return o(t)
            } catch (t) {
                return u.slice()
            }
        }(t) : o(n(t))
    }
}, function(t, e, r) {
    "use strict";
    var n = r(7),
        o = r(62),
        i = r(54)(!1),
        u = [].indexOf,
        c = !!u && 1 / [1].indexOf(1, -0) < 0,
        a = o("indexOf");
    n({
        target: "Array",
        proto: !0,
        forced: c || a
    }, {
        indexOf: function(t) {
            return c ? u.apply(this, arguments) || 0 : i(this, t, arguments[1])
        }
    })
}, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = "/api/v1/config/",
        o = /^https:\/\/[a-z]+\.fastly-insights\.com/;
    r(69);

    function i(t, e) {
        return e.split(".").every(function(e) {
            var r;
            try {
                r = t.hasOwnProperty(e)
            } catch (n) {
                r = !("object" != typeof t || null === t || !(e in t) || void 0 === t[e])
            }
            return r && (t = t[e]), r
        })
    }
    r(50), r(79), r(13), r(87), r(88), r(89), r(17);
    var u = function(t) {
            return [].slice.call(document.getElementsByTagName(t))
        },
        c = function(t) {
            return t.hasAttribute("src")
        },
        a = function(t) {
            return t.getAttribute("src") || ""
        };
    r(44), r(63);

    function s() {
        for (var t = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = 1; e < arguments.length; e++) {
            var r = e < 0 || arguments.length <= e ? void 0 : arguments[e];
            if (null != r)
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }

    function f(t, e) {
        for (var r = e * Math.random(), n = 0, o = t[0].weight; o < r;) o += t[n += 1].weight;
        return n
    }
    self.fetch || (self.fetch = function(t, e) {
        return e = e || {}, new Promise((r, n) => {
            const o = new XMLHttpRequest,
                i = [],
                u = [],
                c = {},
                a = () => ({
                    ok: 2 == (o.status / 100 | 0),
                    statusText: o.statusText,
                    status: o.status,
                    url: o.responseURL,
                    text: () => Promise.resolve(o.responseText),
                    json: () => Promise.resolve(JSON.parse(o.responseText)),
                    blob: () => Promise.resolve(new Blob([o.response])),
                    clone: a,
                    headers: {
                        keys: () => i,
                        entries: () => u,
                        get: t => c[t.toLowerCase()],
                        has: t => t.toLowerCase() in c
                    }
                });
            o.open(e.method || "get", t, !0), o.onload = () => {
                o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (t, e, r) => {
                    i.push(e = e.toLowerCase()), u.push([e, r]), c[e] = c[e] ? `${c[e]},${r}` : r
                }), r(a())
            }, o.onerror = n, o.withCredentials = "include" == e.credentials;
            for (const t in e.headers) o.setRequestHeader(t, e.headers[t]);
            o.send(e.body || null)
        })
    });
    var l = function(t, e) {
        if (e >= t.length) return t;
        for (var r, n = t.map(function(t) {
                return s({}, t)
            }), o = t.map(function(t) {
                return t.weight
            }).reduce(function(t, e) {
                return t + e
            }), i = t.map(function(t) {
                return t.weight
            }), u = Math.min((r = i).reduce(function(t, e) {
                return t + e
            }) / r.length, .05 * o), c = [], a = 0; a < e; a++) {
            var l = {
                    weight: u
                },
                p = f(n.concat([l]), o + u);
            p < n.length && (c.push(s({}, n[p])), o -= n[p].weight, n[p].weight = 0)
        }
        return c
    };
    var p = 3,
        v = 100,
        h = function(t) {
            return new Promise(function(e) {
                return setTimeout(e, t)
            })
        };
    var y = function t(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v;
        return new Promise(function(o, i) {
            e().then(o).catch(function(u) {
                return --r > 0 ? h(n).then(function() {
                    return t(e, r, n)
                }).then(o).catch(i) : i(u)
            })
        })
    };
    r(64), r(66);

    function d(t, e) {
        return Object.keys(t).reduce(function(r, n) {
            return r[e + n] = t[n], r
        }, {})
    }
    var g = i(navigator, "sendBeacon");
    var b = {};
    r(67);
    var m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        x = m.length,
        w = 16;

    function O(t) {
        return t.replace(/\s/g, "")
    }

    function _(t) {
        var e = Array(w).fill(null).reduce(function(t) {
            return t + m.charAt(Math.floor(Math.random() * x))
        }, "");
        return t.replace(/<%RANDOM%>/gi, e)
    }

    function S(t, e) {
        return t.replace(/<%TEST_ID%>/gi, e.test.id)
    }

    function j(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function P(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    var k = {
            client_user_agent: "",
            client_ip: "",
            client_asn: 0,
            client_region: "",
            client_country_code: "",
            client_continent_code: "",
            client_metro_code: "",
            client_postal_code: "",
            client_conn_speed: "",
            client_gmt_offset: "",
            client_latitude: "",
            client_longitude: "",
            resolver_ip: "",
            resolver_asn: 0,
            resolver_region: "",
            resolver_country_code: "",
            resolver_continent_code: "",
            resolver_conn_speed: "",
            resolver_latitude: "",
            resolver_longitude: "",
            test_id: "",
            test_api_key: "",
            test_lib_version: "",
            test_server: "",
            test_timestamp: 0,
            task_type: "",
            task_id: "",
            task_schema_version: "",
            task_client_data: "",
            task_server_data: ""
        },
        T = function() {
            function t(e, r) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), P(this, "config", void 0), P(this, "data", void 0), P(this, "beacon", void 0), P(this, "state", {
                    hasRan: !1
                }), this.beacon = s({}, k), this.config = s({}, e), this.data = r, this.data.resource = function(t, e) {
                    return [O, S, _].reduce(function(t, r) {
                        return r(t, e)
                    }, t)
                }(this.data.resource, e)
            }
            var e, r, n;
            return e = t, (r = [{
                key: "encode",
                value: function(t) {
                    return JSON.stringify(t)
                }
            }, {
                key: "send",
                value: function(t) {
                    var e = this.config,
                        r = e.session,
                        n = e.settings,
                        o = e.hosts.host;
                    ! function(t, e) {
                        g ? navigator.sendBeacon(t, e) : fetch(t, {
                            method: "POST",
                            body: e,
                            keepalive: !0
                        })
                    }("https://".concat(o, "/b?k=").concat(n.token, "&s=").concat(r), t)
                }
            }, {
                key: "generateBeacon",
                value: function(t, e) {
                    var r = this.config,
                        n = r.test,
                        o = r.settings,
                        i = r.server;
                    return this.beacon = s({
                        test_id: n.id,
                        test_api_key: o.token,
                        test_lib_version: "2.0.0-alpha.11",
                        test_server: JSON.stringify(i),
                        test_timestamp: Math.floor(Date.now() / 1e3),
                        task_type: this.data.type,
                        task_id: this.data.id,
                        task_schema_version: "0.0.0",
                        task_client_data: JSON.stringify(t),
                        task_server_data: "<% SERVER_DATA %>"
                    }, e), this.beacon
                }
            }, {
                key: "execute",
                value: function() {
                    var t, e = this,
                        r = this.config.hosts.lookup,
                        n = this.config.test.id,
                        o = "https://".concat(n, ".").concat(r, "/l");
                    return Promise.all([this.test(), (t = o, b[t] ? b[t] : (b[t] = fetch(t).then(function(t) {
                        return t.json()
                    }), b[t]))]).then(function(t) {
                        return e.generateBeacon(...t)
                    }).then(function(t) {
                        return e.encode(t)
                    }).then(function(t) {
                        return e.send(t)
                    }).then(function() {
                        return e.beacon
                    }).catch(function() {
                        return Promise.resolve(e.beacon)
                    })
                }
            }]) && j(e.prototype, r), n && j(e, n), t
        }(),
        E = (r(95), r(68)),
        A = r.n(E);

    function I(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3;
        return new Promise(function(r, n) {
            var o, i = new A.a(function(e, n) {
                var i = e.getEntriesByName(t);
                (o = i.shift()) && (n.disconnect(), r(o))
            });
            setTimeout(function() {
                o || (i.disconnect(), n(new Error("Timed out observing resource timing")))
            }, e);
            try {
                i.observe({
                    entryTypes: ["resource"]
                })
            } catch (t) {
                n(t)
            }
        })
    }
    var M, L = function(t) {
        for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
        return r.reduce(function(t, e) {
            return function(r) {
                return t(e(r))
            }
        }, t)
    }(function(t) {
        return Object.keys(t).reduce(function(e, r) {
            return e[r.replace(/(?:^|\.?)([A-Z])/g, function(t, e) {
                return "_" + e.toLowerCase()
            }).replace(/^_/, "")] = t[r], e
        }, {})
    }, (M = ["name", "initiatorType", "entryType"], function(t) {
        return function(t, e) {
            return Object.keys(t).reduce(function(r, n) {
                return e.indexOf(n) < 0 && (r[n] = t[n]), r
            }, {})
        }(t, M)
    }), function(t) {
        var e = {};
        for (var r in t) {
            var n = typeof t[r];
            "number" !== n && "string" !== n || (e[r] = t[r])
        }
        return e
    });

    function R(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var r = [],
                n = !0,
                o = !1,
                i = void 0;
            try {
                for (var u, c = t[Symbol.iterator](); !(n = (u = c.next()).done) && (r.push(u.value), !e || r.length !== e); n = !0);
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return r
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function C(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function F(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function N(t) {
        return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function D(t, e) {
        return (D = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function B(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var r = [],
                n = !0,
                o = !1,
                i = void 0;
            try {
                for (var u, c = t[Symbol.iterator](); !(n = (u = c.next()).done) && (r.push(u.value), !e || r.length !== e); n = !0);
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return r
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function G(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function $(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function V(t) {
        return (V = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function q(t, e) {
        return (q = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var H = {
        fetch: function(t) {
            function e(t, r) {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), F(this, N(e).call(this, t, r))
            }
            var r, n, o;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && D(t, e)
            }(e, T), r = e, (n = [{
                key: "fetchObjectAndId",
                value: function() {
                    return fetch(this.data.resource).then(function(t) {
                        return t.headers.get("X-Datacenter") || ""
                    })
                }
            }, {
                key: "test",
                value: function() {
                    return Promise.all([this.fetchObjectAndId(), I(this.data.resource)]).then(function(t) {
                        var e = R(t, 2),
                            r = e[0],
                            n = e[1];
                        return d(s({
                            id: r
                        }, L(n)), "subject_")
                    })
                }
            }]) && C(r.prototype, n), o && C(r, o), e
        }(),
        pop: function(t) {
            function e(t, r) {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), $(this, V(e).call(this, t, r))
            }
            var r, n, o;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && q(t, e)
            }(e, T), r = e, (n = [{
                key: "fetchObjectAndId",
                value: function() {
                    return fetch(this.data.resource).then(function(t) {
                        return t.headers.get("X-Datacenter") || ""
                    })
                }
            }, {
                key: "test",
                value: function() {
                    var t = this;
                    return Promise.all([this.fetchObjectAndId(), I(this.data.resource)]).then(function(e) {
                        var r = B(e, 2),
                            n = r[0],
                            o = r[1];
                        return d(s({
                            id: n,
                            attempted_id: t.data.id
                        }, L(o)), "subject_")
                    })
                }
            }]) && G(r.prototype, n), o && G(r, o), e
        }()
    };

    function z(t) {
        var e = t.client,
            r = t.settings.max_tasks,
            n = function(t, e) {
                return t.filter(function(t) {
                    var r = t.classification;
                    return Object.keys(r).reduce(function(t, n) {
                        var o = r[n];
                        return o ? t && o.some(function(t) {
                            return t === e[n]
                        }) : t
                    }, !0)
                })
            }(t.tasks, e),
            o = l(n, r).map(function(e) {
                return function(t, e) {
                    return new H[e.type](t, e)
                }(t, e)
            }).map(function(t) {
                return function() {
                    return t.execute()
                }
            });
        return o.reduce(function(t, e) {
            return t.then(function(t) {
                return e().then(function(e) {
                    return [...t, e]
                }).catch(function() {
                    return Promise.resolve(t)
                })
            })
        }, Promise.resolve([]))
    }

    function J(t) {
        var e, r, o = t.host,
            i = t.k,
            u = "".concat(o).concat(n).concat(i);
        return (e = u, r = function(t) {
            return t.json()
        }, y(function() {
            return fetch(e).then(r)
        })).then(z).catch(function() {
            return []
        })
    }
    r.d(e, "init", function() {
        return U
    });
    var Y = function(t, e) {
            var r;
            try {
                r = e.every(function(e) {
                    return i(t, e)
                })
            } catch (t) {
                r = !1
            }
            return r
        }(window, ["Worker", "Promise", "fetch"]),
        Q = {
            client: {
                hasFeatureSupport: Y
            },
            results: window.FASTLY && window.FASTLY.results || []
        };

    function U() {
        var t;
        t = function() {
            J(function(t) {
                var e = u("script").filter(c).find(function(e) {
                        return !!a(e).match(t)
                    }),
                    r = {};
                if (e) {
                    var n = a(e),
                        o = new URL(n);
                    r.host = o.origin, o.searchParams.forEach(function(t, e) {
                        r[e] = t
                    })
                }
                return r
            }(o)).then(function(t) {
                Array.prototype.push.apply(Q.results, t)
            }).catch(function() {})
        }, "complete" !== document.readyState ? document.addEventListener("readystatechange", function() {
            "complete" === document.readyState && t()
        }) : t()
    }
    Y && U();
    e.default = Q
}]).default;